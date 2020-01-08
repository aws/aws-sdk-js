import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class CostExplorer extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: CostExplorer.Types.ClientConfiguration)
  config: Config & CostExplorer.Types.ClientConfiguration;
  /**
   *    Cost Category is in public beta for AWS Billing and Cost Management and is subject to change. Your use of Cost Categories is subject to the Beta Service Participation terms of the AWS Service Terms (Section 1.10).    Creates a new Cost Category with the requested name and rules.
   */
  createCostCategoryDefinition(params: CostExplorer.Types.CreateCostCategoryDefinitionRequest, callback?: (err: AWSError, data: CostExplorer.Types.CreateCostCategoryDefinitionResponse) => void): Request<CostExplorer.Types.CreateCostCategoryDefinitionResponse, AWSError>;
  /**
   *    Cost Category is in public beta for AWS Billing and Cost Management and is subject to change. Your use of Cost Categories is subject to the Beta Service Participation terms of the AWS Service Terms (Section 1.10).    Creates a new Cost Category with the requested name and rules.
   */
  createCostCategoryDefinition(callback?: (err: AWSError, data: CostExplorer.Types.CreateCostCategoryDefinitionResponse) => void): Request<CostExplorer.Types.CreateCostCategoryDefinitionResponse, AWSError>;
  /**
   *    Cost Category is in public beta for AWS Billing and Cost Management and is subject to change. Your use of Cost Categories is subject to the Beta Service Participation terms of the AWS Service Terms (Section 1.10).    Deletes a Cost Category. Expenses from this month going forward will no longer be categorized with this Cost Category.
   */
  deleteCostCategoryDefinition(params: CostExplorer.Types.DeleteCostCategoryDefinitionRequest, callback?: (err: AWSError, data: CostExplorer.Types.DeleteCostCategoryDefinitionResponse) => void): Request<CostExplorer.Types.DeleteCostCategoryDefinitionResponse, AWSError>;
  /**
   *    Cost Category is in public beta for AWS Billing and Cost Management and is subject to change. Your use of Cost Categories is subject to the Beta Service Participation terms of the AWS Service Terms (Section 1.10).    Deletes a Cost Category. Expenses from this month going forward will no longer be categorized with this Cost Category.
   */
  deleteCostCategoryDefinition(callback?: (err: AWSError, data: CostExplorer.Types.DeleteCostCategoryDefinitionResponse) => void): Request<CostExplorer.Types.DeleteCostCategoryDefinitionResponse, AWSError>;
  /**
   *    Cost Category is in public beta for AWS Billing and Cost Management and is subject to change. Your use of Cost Categories is subject to the Beta Service Participation terms of the AWS Service Terms (Section 1.10).    Returns the name, ARN, rules, definition, and effective dates of a Cost Category that's defined in the account. You have the option to use EffectiveOn to return a Cost Category that is active on a specific date. If there is no EffectiveOn specified, you’ll see a Cost Category that is effective on the current date. If Cost Category is still effective, EffectiveEnd is omitted in the response. 
   */
  describeCostCategoryDefinition(params: CostExplorer.Types.DescribeCostCategoryDefinitionRequest, callback?: (err: AWSError, data: CostExplorer.Types.DescribeCostCategoryDefinitionResponse) => void): Request<CostExplorer.Types.DescribeCostCategoryDefinitionResponse, AWSError>;
  /**
   *    Cost Category is in public beta for AWS Billing and Cost Management and is subject to change. Your use of Cost Categories is subject to the Beta Service Participation terms of the AWS Service Terms (Section 1.10).    Returns the name, ARN, rules, definition, and effective dates of a Cost Category that's defined in the account. You have the option to use EffectiveOn to return a Cost Category that is active on a specific date. If there is no EffectiveOn specified, you’ll see a Cost Category that is effective on the current date. If Cost Category is still effective, EffectiveEnd is omitted in the response. 
   */
  describeCostCategoryDefinition(callback?: (err: AWSError, data: CostExplorer.Types.DescribeCostCategoryDefinitionResponse) => void): Request<CostExplorer.Types.DescribeCostCategoryDefinitionResponse, AWSError>;
  /**
   * Retrieves cost and usage metrics for your account. You can specify which cost and usage-related metric, such as BlendedCosts or UsageQuantity, that you want the request to return. You can also filter and group your data by various dimensions, such as SERVICE or AZ, in a specific time range. For a complete list of valid dimensions, see the GetDimensionValues operation. Master accounts in an organization in AWS Organizations have access to all member accounts.
   */
  getCostAndUsage(params: CostExplorer.Types.GetCostAndUsageRequest, callback?: (err: AWSError, data: CostExplorer.Types.GetCostAndUsageResponse) => void): Request<CostExplorer.Types.GetCostAndUsageResponse, AWSError>;
  /**
   * Retrieves cost and usage metrics for your account. You can specify which cost and usage-related metric, such as BlendedCosts or UsageQuantity, that you want the request to return. You can also filter and group your data by various dimensions, such as SERVICE or AZ, in a specific time range. For a complete list of valid dimensions, see the GetDimensionValues operation. Master accounts in an organization in AWS Organizations have access to all member accounts.
   */
  getCostAndUsage(callback?: (err: AWSError, data: CostExplorer.Types.GetCostAndUsageResponse) => void): Request<CostExplorer.Types.GetCostAndUsageResponse, AWSError>;
  /**
   * Retrieves cost and usage metrics with resources for your account. You can specify which cost and usage-related metric, such as BlendedCosts or UsageQuantity, that you want the request to return. You can also filter and group your data by various dimensions, such as SERVICE or AZ, in a specific time range. For a complete list of valid dimensions, see the GetDimensionValues operation. Master accounts in an organization in AWS Organizations have access to all member accounts. This API is currently available for the Amazon Elastic Compute Cloud – Compute service only.  This is an opt-in only feature. You can enable this feature from the Cost Explorer Settings page. For information on how to access the Settings page, see Controlling Access for Cost Explorer in the AWS Billing and Cost Management User Guide. 
   */
  getCostAndUsageWithResources(params: CostExplorer.Types.GetCostAndUsageWithResourcesRequest, callback?: (err: AWSError, data: CostExplorer.Types.GetCostAndUsageWithResourcesResponse) => void): Request<CostExplorer.Types.GetCostAndUsageWithResourcesResponse, AWSError>;
  /**
   * Retrieves cost and usage metrics with resources for your account. You can specify which cost and usage-related metric, such as BlendedCosts or UsageQuantity, that you want the request to return. You can also filter and group your data by various dimensions, such as SERVICE or AZ, in a specific time range. For a complete list of valid dimensions, see the GetDimensionValues operation. Master accounts in an organization in AWS Organizations have access to all member accounts. This API is currently available for the Amazon Elastic Compute Cloud – Compute service only.  This is an opt-in only feature. You can enable this feature from the Cost Explorer Settings page. For information on how to access the Settings page, see Controlling Access for Cost Explorer in the AWS Billing and Cost Management User Guide. 
   */
  getCostAndUsageWithResources(callback?: (err: AWSError, data: CostExplorer.Types.GetCostAndUsageWithResourcesResponse) => void): Request<CostExplorer.Types.GetCostAndUsageWithResourcesResponse, AWSError>;
  /**
   * Retrieves a forecast for how much Amazon Web Services predicts that you will spend over the forecast time period that you select, based on your past costs. 
   */
  getCostForecast(params: CostExplorer.Types.GetCostForecastRequest, callback?: (err: AWSError, data: CostExplorer.Types.GetCostForecastResponse) => void): Request<CostExplorer.Types.GetCostForecastResponse, AWSError>;
  /**
   * Retrieves a forecast for how much Amazon Web Services predicts that you will spend over the forecast time period that you select, based on your past costs. 
   */
  getCostForecast(callback?: (err: AWSError, data: CostExplorer.Types.GetCostForecastResponse) => void): Request<CostExplorer.Types.GetCostForecastResponse, AWSError>;
  /**
   * Retrieves all available filter values for a specified filter over a period of time. You can search the dimension values for an arbitrary string. 
   */
  getDimensionValues(params: CostExplorer.Types.GetDimensionValuesRequest, callback?: (err: AWSError, data: CostExplorer.Types.GetDimensionValuesResponse) => void): Request<CostExplorer.Types.GetDimensionValuesResponse, AWSError>;
  /**
   * Retrieves all available filter values for a specified filter over a period of time. You can search the dimension values for an arbitrary string. 
   */
  getDimensionValues(callback?: (err: AWSError, data: CostExplorer.Types.GetDimensionValuesResponse) => void): Request<CostExplorer.Types.GetDimensionValuesResponse, AWSError>;
  /**
   * Retrieves the reservation coverage for your account. This enables you to see how much of your Amazon Elastic Compute Cloud, Amazon ElastiCache, Amazon Relational Database Service, or Amazon Redshift usage is covered by a reservation. An organization's master account can see the coverage of the associated member accounts. For any time period, you can filter data about reservation usage by the following dimensions:   AZ   CACHE_ENGINE   DATABASE_ENGINE   DEPLOYMENT_OPTION   INSTANCE_TYPE   LINKED_ACCOUNT   OPERATING_SYSTEM   PLATFORM   REGION   SERVICE   TAG   TENANCY   To determine valid values for a dimension, use the GetDimensionValues operation. 
   */
  getReservationCoverage(params: CostExplorer.Types.GetReservationCoverageRequest, callback?: (err: AWSError, data: CostExplorer.Types.GetReservationCoverageResponse) => void): Request<CostExplorer.Types.GetReservationCoverageResponse, AWSError>;
  /**
   * Retrieves the reservation coverage for your account. This enables you to see how much of your Amazon Elastic Compute Cloud, Amazon ElastiCache, Amazon Relational Database Service, or Amazon Redshift usage is covered by a reservation. An organization's master account can see the coverage of the associated member accounts. For any time period, you can filter data about reservation usage by the following dimensions:   AZ   CACHE_ENGINE   DATABASE_ENGINE   DEPLOYMENT_OPTION   INSTANCE_TYPE   LINKED_ACCOUNT   OPERATING_SYSTEM   PLATFORM   REGION   SERVICE   TAG   TENANCY   To determine valid values for a dimension, use the GetDimensionValues operation. 
   */
  getReservationCoverage(callback?: (err: AWSError, data: CostExplorer.Types.GetReservationCoverageResponse) => void): Request<CostExplorer.Types.GetReservationCoverageResponse, AWSError>;
  /**
   * Gets recommendations for which reservations to purchase. These recommendations could help you reduce your costs. Reservations provide a discounted hourly rate (up to 75%) compared to On-Demand pricing. AWS generates your recommendations by identifying your On-Demand usage during a specific time period and collecting your usage into categories that are eligible for a reservation. After AWS has these categories, it simulates every combination of reservations in each category of usage to identify the best number of each type of RI to purchase to maximize your estimated savings.  For example, AWS automatically aggregates your Amazon EC2 Linux, shared tenancy, and c4 family usage in the US West (Oregon) Region and recommends that you buy size-flexible regional reservations to apply to the c4 family usage. AWS recommends the smallest size instance in an instance family. This makes it easier to purchase a size-flexible RI. AWS also shows the equal number of normalized units so that you can purchase any instance size that you want. For this example, your RI recommendation would be for c4.large because that is the smallest size instance in the c4 instance family.
   */
  getReservationPurchaseRecommendation(params: CostExplorer.Types.GetReservationPurchaseRecommendationRequest, callback?: (err: AWSError, data: CostExplorer.Types.GetReservationPurchaseRecommendationResponse) => void): Request<CostExplorer.Types.GetReservationPurchaseRecommendationResponse, AWSError>;
  /**
   * Gets recommendations for which reservations to purchase. These recommendations could help you reduce your costs. Reservations provide a discounted hourly rate (up to 75%) compared to On-Demand pricing. AWS generates your recommendations by identifying your On-Demand usage during a specific time period and collecting your usage into categories that are eligible for a reservation. After AWS has these categories, it simulates every combination of reservations in each category of usage to identify the best number of each type of RI to purchase to maximize your estimated savings.  For example, AWS automatically aggregates your Amazon EC2 Linux, shared tenancy, and c4 family usage in the US West (Oregon) Region and recommends that you buy size-flexible regional reservations to apply to the c4 family usage. AWS recommends the smallest size instance in an instance family. This makes it easier to purchase a size-flexible RI. AWS also shows the equal number of normalized units so that you can purchase any instance size that you want. For this example, your RI recommendation would be for c4.large because that is the smallest size instance in the c4 instance family.
   */
  getReservationPurchaseRecommendation(callback?: (err: AWSError, data: CostExplorer.Types.GetReservationPurchaseRecommendationResponse) => void): Request<CostExplorer.Types.GetReservationPurchaseRecommendationResponse, AWSError>;
  /**
   * Retrieves the reservation utilization for your account. Master accounts in an organization have access to member accounts. You can filter data by dimensions in a time period. You can use GetDimensionValues to determine the possible dimension values. Currently, you can group only by SUBSCRIPTION_ID. 
   */
  getReservationUtilization(params: CostExplorer.Types.GetReservationUtilizationRequest, callback?: (err: AWSError, data: CostExplorer.Types.GetReservationUtilizationResponse) => void): Request<CostExplorer.Types.GetReservationUtilizationResponse, AWSError>;
  /**
   * Retrieves the reservation utilization for your account. Master accounts in an organization have access to member accounts. You can filter data by dimensions in a time period. You can use GetDimensionValues to determine the possible dimension values. Currently, you can group only by SUBSCRIPTION_ID. 
   */
  getReservationUtilization(callback?: (err: AWSError, data: CostExplorer.Types.GetReservationUtilizationResponse) => void): Request<CostExplorer.Types.GetReservationUtilizationResponse, AWSError>;
  /**
   * Creates recommendations that helps you save cost by identifying idle and underutilized Amazon EC2 instances. Recommendations are generated to either downsize or terminate instances, along with providing savings detail and metrics. For details on calculation and function, see Optimizing Your Cost with Rightsizing Recommendations.
   */
  getRightsizingRecommendation(params: CostExplorer.Types.GetRightsizingRecommendationRequest, callback?: (err: AWSError, data: CostExplorer.Types.GetRightsizingRecommendationResponse) => void): Request<CostExplorer.Types.GetRightsizingRecommendationResponse, AWSError>;
  /**
   * Creates recommendations that helps you save cost by identifying idle and underutilized Amazon EC2 instances. Recommendations are generated to either downsize or terminate instances, along with providing savings detail and metrics. For details on calculation and function, see Optimizing Your Cost with Rightsizing Recommendations.
   */
  getRightsizingRecommendation(callback?: (err: AWSError, data: CostExplorer.Types.GetRightsizingRecommendationResponse) => void): Request<CostExplorer.Types.GetRightsizingRecommendationResponse, AWSError>;
  /**
   * Retrieves the Savings Plans covered for your account. This enables you to see how much of your cost is covered by a Savings Plan. An organization’s master account can see the coverage of the associated member accounts. For any time period, you can filter data for Savings Plans usage with the following dimensions:    LINKED_ACCOUNT     REGION     SERVICE     INSTANCE_FAMILY    To determine valid values for a dimension, use the GetDimensionValues operation.
   */
  getSavingsPlansCoverage(params: CostExplorer.Types.GetSavingsPlansCoverageRequest, callback?: (err: AWSError, data: CostExplorer.Types.GetSavingsPlansCoverageResponse) => void): Request<CostExplorer.Types.GetSavingsPlansCoverageResponse, AWSError>;
  /**
   * Retrieves the Savings Plans covered for your account. This enables you to see how much of your cost is covered by a Savings Plan. An organization’s master account can see the coverage of the associated member accounts. For any time period, you can filter data for Savings Plans usage with the following dimensions:    LINKED_ACCOUNT     REGION     SERVICE     INSTANCE_FAMILY    To determine valid values for a dimension, use the GetDimensionValues operation.
   */
  getSavingsPlansCoverage(callback?: (err: AWSError, data: CostExplorer.Types.GetSavingsPlansCoverageResponse) => void): Request<CostExplorer.Types.GetSavingsPlansCoverageResponse, AWSError>;
  /**
   * Retrieves your request parameters, Savings Plan Recommendations Summary and Details.
   */
  getSavingsPlansPurchaseRecommendation(params: CostExplorer.Types.GetSavingsPlansPurchaseRecommendationRequest, callback?: (err: AWSError, data: CostExplorer.Types.GetSavingsPlansPurchaseRecommendationResponse) => void): Request<CostExplorer.Types.GetSavingsPlansPurchaseRecommendationResponse, AWSError>;
  /**
   * Retrieves your request parameters, Savings Plan Recommendations Summary and Details.
   */
  getSavingsPlansPurchaseRecommendation(callback?: (err: AWSError, data: CostExplorer.Types.GetSavingsPlansPurchaseRecommendationResponse) => void): Request<CostExplorer.Types.GetSavingsPlansPurchaseRecommendationResponse, AWSError>;
  /**
   * Retrieves the Savings Plans utilization for your account across date ranges with daily or monthly granularity. Master accounts in an organization have access to member accounts. You can use GetDimensionValues in SAVINGS_PLANS to determine the possible dimension values.  You cannot group by any dimension values for GetSavingsPlansUtilization. 
   */
  getSavingsPlansUtilization(params: CostExplorer.Types.GetSavingsPlansUtilizationRequest, callback?: (err: AWSError, data: CostExplorer.Types.GetSavingsPlansUtilizationResponse) => void): Request<CostExplorer.Types.GetSavingsPlansUtilizationResponse, AWSError>;
  /**
   * Retrieves the Savings Plans utilization for your account across date ranges with daily or monthly granularity. Master accounts in an organization have access to member accounts. You can use GetDimensionValues in SAVINGS_PLANS to determine the possible dimension values.  You cannot group by any dimension values for GetSavingsPlansUtilization. 
   */
  getSavingsPlansUtilization(callback?: (err: AWSError, data: CostExplorer.Types.GetSavingsPlansUtilizationResponse) => void): Request<CostExplorer.Types.GetSavingsPlansUtilizationResponse, AWSError>;
  /**
   * Retrieves attribute data along with aggregate utilization and savings data for a given time period. This doesn't support granular or grouped data (daily/monthly) in response. You can't retrieve data by dates in a single response similar to GetSavingsPlanUtilization, but you have the option to make multiple calls to GetSavingsPlanUtilizationDetails by providing individual dates. You can use GetDimensionValues in SAVINGS_PLANS to determine the possible dimension values.   GetSavingsPlanUtilizationDetails internally groups data by SavingsPlansArn. 
   */
  getSavingsPlansUtilizationDetails(params: CostExplorer.Types.GetSavingsPlansUtilizationDetailsRequest, callback?: (err: AWSError, data: CostExplorer.Types.GetSavingsPlansUtilizationDetailsResponse) => void): Request<CostExplorer.Types.GetSavingsPlansUtilizationDetailsResponse, AWSError>;
  /**
   * Retrieves attribute data along with aggregate utilization and savings data for a given time period. This doesn't support granular or grouped data (daily/monthly) in response. You can't retrieve data by dates in a single response similar to GetSavingsPlanUtilization, but you have the option to make multiple calls to GetSavingsPlanUtilizationDetails by providing individual dates. You can use GetDimensionValues in SAVINGS_PLANS to determine the possible dimension values.   GetSavingsPlanUtilizationDetails internally groups data by SavingsPlansArn. 
   */
  getSavingsPlansUtilizationDetails(callback?: (err: AWSError, data: CostExplorer.Types.GetSavingsPlansUtilizationDetailsResponse) => void): Request<CostExplorer.Types.GetSavingsPlansUtilizationDetailsResponse, AWSError>;
  /**
   * Queries for available tag keys and tag values for a specified period. You can search the tag values for an arbitrary string. 
   */
  getTags(params: CostExplorer.Types.GetTagsRequest, callback?: (err: AWSError, data: CostExplorer.Types.GetTagsResponse) => void): Request<CostExplorer.Types.GetTagsResponse, AWSError>;
  /**
   * Queries for available tag keys and tag values for a specified period. You can search the tag values for an arbitrary string. 
   */
  getTags(callback?: (err: AWSError, data: CostExplorer.Types.GetTagsResponse) => void): Request<CostExplorer.Types.GetTagsResponse, AWSError>;
  /**
   * Retrieves a forecast for how much Amazon Web Services predicts that you will use over the forecast time period that you select, based on your past usage. 
   */
  getUsageForecast(params: CostExplorer.Types.GetUsageForecastRequest, callback?: (err: AWSError, data: CostExplorer.Types.GetUsageForecastResponse) => void): Request<CostExplorer.Types.GetUsageForecastResponse, AWSError>;
  /**
   * Retrieves a forecast for how much Amazon Web Services predicts that you will use over the forecast time period that you select, based on your past usage. 
   */
  getUsageForecast(callback?: (err: AWSError, data: CostExplorer.Types.GetUsageForecastResponse) => void): Request<CostExplorer.Types.GetUsageForecastResponse, AWSError>;
  /**
   *    Cost Category is in public beta for AWS Billing and Cost Management and is subject to change. Your use of Cost Categories is subject to the Beta Service Participation terms of the AWS Service Terms (Section 1.10).    Returns the name, ARN and effective dates of all Cost Categories defined in the account. You have the option to use EffectiveOn to return a list of Cost Categories that were active on a specific date. If there is no EffectiveOn specified, you’ll see Cost Categories that are effective on the current date. If Cost Category is still effective, EffectiveEnd is omitted in the response. 
   */
  listCostCategoryDefinitions(params: CostExplorer.Types.ListCostCategoryDefinitionsRequest, callback?: (err: AWSError, data: CostExplorer.Types.ListCostCategoryDefinitionsResponse) => void): Request<CostExplorer.Types.ListCostCategoryDefinitionsResponse, AWSError>;
  /**
   *    Cost Category is in public beta for AWS Billing and Cost Management and is subject to change. Your use of Cost Categories is subject to the Beta Service Participation terms of the AWS Service Terms (Section 1.10).    Returns the name, ARN and effective dates of all Cost Categories defined in the account. You have the option to use EffectiveOn to return a list of Cost Categories that were active on a specific date. If there is no EffectiveOn specified, you’ll see Cost Categories that are effective on the current date. If Cost Category is still effective, EffectiveEnd is omitted in the response. 
   */
  listCostCategoryDefinitions(callback?: (err: AWSError, data: CostExplorer.Types.ListCostCategoryDefinitionsResponse) => void): Request<CostExplorer.Types.ListCostCategoryDefinitionsResponse, AWSError>;
  /**
   *    Cost Category is in public beta for AWS Billing and Cost Management and is subject to change. Your use of Cost Categories is subject to the Beta Service Participation terms of the AWS Service Terms (Section 1.10).    Updates an existing Cost Category. Changes made to the Cost Category rules will be used to categorize the current month’s expenses and future expenses. This won’t change categorization for the previous months.
   */
  updateCostCategoryDefinition(params: CostExplorer.Types.UpdateCostCategoryDefinitionRequest, callback?: (err: AWSError, data: CostExplorer.Types.UpdateCostCategoryDefinitionResponse) => void): Request<CostExplorer.Types.UpdateCostCategoryDefinitionResponse, AWSError>;
  /**
   *    Cost Category is in public beta for AWS Billing and Cost Management and is subject to change. Your use of Cost Categories is subject to the Beta Service Participation terms of the AWS Service Terms (Section 1.10).    Updates an existing Cost Category. Changes made to the Cost Category rules will be used to categorize the current month’s expenses and future expenses. This won’t change categorization for the previous months.
   */
  updateCostCategoryDefinition(callback?: (err: AWSError, data: CostExplorer.Types.UpdateCostCategoryDefinitionResponse) => void): Request<CostExplorer.Types.UpdateCostCategoryDefinitionResponse, AWSError>;
}
declare namespace CostExplorer {
  export type AccountScope = "PAYER"|"LINKED"|string;
  export type AmortizedRecurringFee = string;
  export type AmortizedUpfrontFee = string;
  export type Arn = string;
  export type AttributeType = string;
  export type AttributeValue = string;
  export type Attributes = {[key: string]: AttributeValue};
  export type Context = "COST_AND_USAGE"|"RESERVATIONS"|"SAVINGS_PLANS"|string;
  export interface CostCategory {
    /**
     *  The unique identifier for your Cost Category. 
     */
    CostCategoryArn: Arn;
    /**
     *  The Cost Category's effective start date.
     */
    EffectiveStart: ZonedDateTime;
    /**
     *  The Cost Category's effective end date.
     */
    EffectiveEnd?: ZonedDateTime;
    Name: CostCategoryName;
    RuleVersion: CostCategoryRuleVersion;
    /**
     *  Rules are processed in order. If there are multiple rules that match the line item, then the first rule to match is used to determine that Cost Category value. 
     */
    Rules: CostCategoryRulesList;
  }
  export type CostCategoryName = string;
  export interface CostCategoryReference {
    /**
     *  The unique identifier for your Cost Category Reference. 
     */
    CostCategoryArn?: Arn;
    Name?: CostCategoryName;
    /**
     *  The Cost Category's effective start date.
     */
    EffectiveStart?: ZonedDateTime;
    /**
     *  The Cost Category's effective end date.
     */
    EffectiveEnd?: ZonedDateTime;
  }
  export type CostCategoryReferencesList = CostCategoryReference[];
  export interface CostCategoryRule {
    Value: CostCategoryValue;
    /**
     * An Expression object used to categorize costs. This supports dimensions, Tags, and nested expressions. Currently the only dimensions supported is LINKED_ACCOUNT. Root level OR is not supported. We recommend you create a separate rule instead.
     */
    Rule: Expression;
  }
  export type CostCategoryRuleVersion = "CostCategoryExpression.v1"|string;
  export type CostCategoryRulesList = CostCategoryRule[];
  export type CostCategoryValue = string;
  export interface CostCategoryValues {
    Key?: CostCategoryName;
    /**
     * The specific value of the Cost Category.
     */
    Values?: Values;
  }
  export interface Coverage {
    /**
     * The amount of instance usage that the reservation covered, in hours.
     */
    CoverageHours?: CoverageHours;
    /**
     * The amount of instance usage that the reservation covered, in normalized units.
     */
    CoverageNormalizedUnits?: CoverageNormalizedUnits;
    /**
     * The amount of cost that the reservation covered.
     */
    CoverageCost?: CoverageCost;
  }
  export interface CoverageByTime {
    /**
     * The period that this coverage was used over.
     */
    TimePeriod?: DateInterval;
    /**
     * The groups of instances that the reservation covered.
     */
    Groups?: ReservationCoverageGroups;
    /**
     * The total reservation coverage, in hours.
     */
    Total?: Coverage;
  }
  export interface CoverageCost {
    /**
     * How much an On-Demand instance cost.
     */
    OnDemandCost?: OnDemandCost;
  }
  export interface CoverageHours {
    /**
     * The number of instance running hours that On-Demand Instances covered.
     */
    OnDemandHours?: OnDemandHours;
    /**
     * The number of instance running hours that reservations covered.
     */
    ReservedHours?: ReservedHours;
    /**
     * The total instance usage, in hours.
     */
    TotalRunningHours?: TotalRunningHours;
    /**
     * The percentage of instance hours that a reservation covered.
     */
    CoverageHoursPercentage?: CoverageHoursPercentage;
  }
  export type CoverageHoursPercentage = string;
  export interface CoverageNormalizedUnits {
    /**
     * The number of normalized units that are covered by On-Demand Instances instead of a reservation.
     */
    OnDemandNormalizedUnits?: OnDemandNormalizedUnits;
    /**
     * The number of normalized units that a reservation covers.
     */
    ReservedNormalizedUnits?: ReservedNormalizedUnits;
    /**
     * The total number of normalized units that you used.
     */
    TotalRunningNormalizedUnits?: TotalRunningNormalizedUnits;
    /**
     * The percentage of your used instance normalized units that a reservation covers.
     */
    CoverageNormalizedUnitsPercentage?: CoverageNormalizedUnitsPercentage;
  }
  export type CoverageNormalizedUnitsPercentage = string;
  export type CoveragesByTime = CoverageByTime[];
  export interface CreateCostCategoryDefinitionRequest {
    Name: CostCategoryName;
    RuleVersion: CostCategoryRuleVersion;
    /**
     *  CreateCostCategoryDefinition supports dimensions, Tags, and nested expressions. Currently the only dimensions supported is LINKED_ACCOUNT. Root level OR is not supported. We recommend you create a separate rule instead. Rules are processed in order. If there are multiple rules that match the line item, then the first rule to match is used to determine that Cost Category value. 
     */
    Rules: CostCategoryRulesList;
  }
  export interface CreateCostCategoryDefinitionResponse {
    /**
     *  The unique identifier for your newly created Cost Category. 
     */
    CostCategoryArn?: Arn;
    /**
     *  The Cost Category's effective start date. 
     */
    EffectiveStart?: ZonedDateTime;
  }
  export interface CurrentInstance {
    /**
     * Resource ID of the current instance.
     */
    ResourceId?: GenericString;
    /**
     * Cost allocation resource tags applied to the instance.
     */
    Tags?: TagValuesList;
    /**
     *  Details about the resource and utilization.
     */
    ResourceDetails?: ResourceDetails;
    /**
     *  Utilization information of the current instance during the lookback period.
     */
    ResourceUtilization?: ResourceUtilization;
    /**
     *  Number of hours during the lookback period covered by reservations.
     */
    ReservationCoveredHoursInLookbackPeriod?: GenericString;
    /**
     * Number of hours during the lookback period covered by Savings Plans.
     */
    SavingsPlansCoveredHoursInLookbackPeriod?: GenericString;
    /**
     *  Number of hours during the lookback period billed at On Demand rates.
     */
    OnDemandHoursInLookbackPeriod?: GenericString;
    /**
     *  The total number of hours the instance ran during the lookback period.
     */
    TotalRunningHoursInLookbackPeriod?: GenericString;
    /**
     *  Current On Demand cost of operating this instance on a monthly basis.
     */
    MonthlyCost?: GenericString;
    /**
     *  The currency code that Amazon Web Services used to calculate the costs for this instance.
     */
    CurrencyCode?: GenericString;
  }
  export interface DateInterval {
    /**
     * The beginning of the time period that you want the usage and costs for. The start date is inclusive. For example, if start is 2017-01-01, AWS retrieves cost and usage data starting at 2017-01-01 up to the end date.
     */
    Start: YearMonthDay;
    /**
     * The end of the time period that you want the usage and costs for. The end date is exclusive. For example, if end is 2017-05-01, AWS retrieves cost and usage data from the start date up to, but not including, 2017-05-01.
     */
    End: YearMonthDay;
  }
  export interface DeleteCostCategoryDefinitionRequest {
    /**
     *  The unique identifier for your Cost Category. 
     */
    CostCategoryArn: Arn;
  }
  export interface DeleteCostCategoryDefinitionResponse {
    /**
     *  The unique identifier for your Cost Category. 
     */
    CostCategoryArn?: Arn;
    /**
     *  The effective end date of the Cost Category as a result of deleting it. No costs after this date will be categorized by the deleted Cost Category. 
     */
    EffectiveEnd?: ZonedDateTime;
  }
  export interface DescribeCostCategoryDefinitionRequest {
    /**
     *  The unique identifier for your Cost Category. 
     */
    CostCategoryArn: Arn;
    /**
     *  The date when the Cost Category was effective. 
     */
    EffectiveOn?: ZonedDateTime;
  }
  export interface DescribeCostCategoryDefinitionResponse {
    CostCategory?: CostCategory;
  }
  export type Dimension = "AZ"|"INSTANCE_TYPE"|"LINKED_ACCOUNT"|"OPERATION"|"PURCHASE_TYPE"|"REGION"|"SERVICE"|"USAGE_TYPE"|"USAGE_TYPE_GROUP"|"RECORD_TYPE"|"OPERATING_SYSTEM"|"TENANCY"|"SCOPE"|"PLATFORM"|"SUBSCRIPTION_ID"|"LEGAL_ENTITY_NAME"|"DEPLOYMENT_OPTION"|"DATABASE_ENGINE"|"CACHE_ENGINE"|"INSTANCE_TYPE_FAMILY"|"BILLING_ENTITY"|"RESERVATION_ID"|"RESOURCE_ID"|"RIGHTSIZING_TYPE"|"SAVINGS_PLANS_TYPE"|"SAVINGS_PLAN_ARN"|"PAYMENT_OPTION"|string;
  export interface DimensionValues {
    /**
     * The names of the metadata types that you can use to filter and group your results. For example, AZ returns a list of Availability Zones.
     */
    Key?: Dimension;
    /**
     * The metadata values that you can use to filter and group your results. You can use GetDimensionValues to find specific values. Valid values for the SERVICE dimension are Amazon Elastic Compute Cloud - Compute, Amazon Elasticsearch Service, Amazon ElastiCache, Amazon Redshift, and Amazon Relational Database Service.
     */
    Values?: Values;
  }
  export interface DimensionValuesWithAttributes {
    /**
     * The value of a dimension with a specific attribute.
     */
    Value?: Value;
    /**
     * The attribute that applies to a specific Dimension.
     */
    Attributes?: Attributes;
  }
  export type DimensionValuesWithAttributesList = DimensionValuesWithAttributes[];
  export interface EC2InstanceDetails {
    /**
     * The instance family of the recommended reservation.
     */
    Family?: GenericString;
    /**
     * The type of instance that AWS recommends.
     */
    InstanceType?: GenericString;
    /**
     * The AWS Region of the recommended reservation.
     */
    Region?: GenericString;
    /**
     * The Availability Zone of the recommended reservation.
     */
    AvailabilityZone?: GenericString;
    /**
     * The platform of the recommended reservation. The platform is the specific combination of operating system, license model, and software on an instance.
     */
    Platform?: GenericString;
    /**
     * Whether the recommended reservation is dedicated or shared.
     */
    Tenancy?: GenericString;
    /**
     * Whether the recommendation is for a current-generation instance. 
     */
    CurrentGeneration?: GenericBoolean;
    /**
     * Whether the recommended reservation is size flexible.
     */
    SizeFlexEligible?: GenericBoolean;
  }
  export interface EC2ResourceDetails {
    /**
     *  Hourly public On Demand rate for the instance type.
     */
    HourlyOnDemandRate?: GenericString;
    /**
     *  The type of Amazon Web Services instance.
     */
    InstanceType?: GenericString;
    /**
     *  The platform of the Amazon Web Services instance. The platform is the specific combination of operating system, license model, and software on an instance.
     */
    Platform?: GenericString;
    /**
     *  The Amazon Web Services Region of the instance.
     */
    Region?: GenericString;
    /**
     *  The SKU of the product.
     */
    Sku?: GenericString;
    /**
     *  Memory capacity of Amazon Web Services instance.
     */
    Memory?: GenericString;
    /**
     *  Network performance capacity of the Amazon Web Services instance.
     */
    NetworkPerformance?: GenericString;
    /**
     *  The disk storage of the Amazon Web Services instance (Not EBS storage).
     */
    Storage?: GenericString;
    /**
     *  Number of VCPU cores in the Amazon Web Services instance type.
     */
    Vcpu?: GenericString;
  }
  export interface EC2ResourceUtilization {
    /**
     *  Maximum observed or expected CPU utilization of the instance.
     */
    MaxCpuUtilizationPercentage?: GenericString;
    /**
     *  Maximum observed or expected memory utilization of the instance.
     */
    MaxMemoryUtilizationPercentage?: GenericString;
    /**
     *  Maximum observed or expected storage utilization of the instance (does not measure EBS storage).
     */
    MaxStorageUtilizationPercentage?: GenericString;
  }
  export interface EC2Specification {
    /**
     * Whether you want a recommendation for standard or convertible reservations.
     */
    OfferingClass?: OfferingClass;
  }
  export interface ESInstanceDetails {
    /**
     * The class of instance that AWS recommends.
     */
    InstanceClass?: GenericString;
    /**
     * The size of instance that AWS recommends.
     */
    InstanceSize?: GenericString;
    /**
     * The AWS Region of the recommended reservation.
     */
    Region?: GenericString;
    /**
     * Whether the recommendation is for a current-generation instance.
     */
    CurrentGeneration?: GenericBoolean;
    /**
     * Whether the recommended reservation is size flexible.
     */
    SizeFlexEligible?: GenericBoolean;
  }
  export interface ElastiCacheInstanceDetails {
    /**
     * The instance family of the recommended reservation.
     */
    Family?: GenericString;
    /**
     * The type of node that AWS recommends.
     */
    NodeType?: GenericString;
    /**
     * The AWS Region of the recommended reservation.
     */
    Region?: GenericString;
    /**
     * The description of the recommended reservation.
     */
    ProductDescription?: GenericString;
    /**
     * Whether the recommendation is for a current generation instance.
     */
    CurrentGeneration?: GenericBoolean;
    /**
     * Whether the recommended reservation is size flexible.
     */
    SizeFlexEligible?: GenericBoolean;
  }
  export type Entity = string;
  export type Estimated = boolean;
  export interface Expression {
    /**
     * Return results that match either Dimension object.
     */
    Or?: Expressions;
    /**
     * Return results that match both Dimension objects.
     */
    And?: Expressions;
    /**
     * Return results that don't match a Dimension object.
     */
    Not?: Expression;
    /**
     * The specific Dimension to use for Expression.
     */
    Dimensions?: DimensionValues;
    /**
     * The specific Tag to use for Expression.
     */
    Tags?: TagValues;
    /**
     *   Cost Category is in public beta for AWS Billing and Cost Management and is subject to change. Your use of Cost Categories is subject to the Beta Service Participation terms of the AWS Service Terms (Section 1.10).   The specific CostCategory used for Expression.
     */
    CostCategories?: CostCategoryValues;
  }
  export type Expressions = Expression[];
  export interface ForecastResult {
    /**
     * The period of time that the forecast covers.
     */
    TimePeriod?: DateInterval;
    /**
     * The mean value of the forecast.
     */
    MeanValue?: GenericString;
    /**
     * The lower limit for the prediction interval. 
     */
    PredictionIntervalLowerBound?: GenericString;
    /**
     * The upper limit for the prediction interval. 
     */
    PredictionIntervalUpperBound?: GenericString;
  }
  export type ForecastResultsByTime = ForecastResult[];
  export type GenericBoolean = boolean;
  export type GenericString = string;
  export interface GetCostAndUsageRequest {
    /**
     * Sets the start and end dates for retrieving AWS costs. The start date is inclusive, but the end date is exclusive. For example, if start is 2017-01-01 and end is 2017-05-01, then the cost and usage data is retrieved from 2017-01-01 up to and including 2017-04-30 but not including 2017-05-01.
     */
    TimePeriod: DateInterval;
    /**
     * Sets the AWS cost granularity to MONTHLY or DAILY, or HOURLY. If Granularity isn't set, the response object doesn't include the Granularity, either MONTHLY or DAILY, or HOURLY. 
     */
    Granularity?: Granularity;
    /**
     * Filters AWS costs by different dimensions. For example, you can specify SERVICE and LINKED_ACCOUNT and get the costs that are associated with that account's usage of that service. You can nest Expression objects to define any combination of dimension filters. For more information, see Expression. 
     */
    Filter?: Expression;
    /**
     * Which metrics are returned in the query. For more information about blended and unblended rates, see Why does the "blended" annotation appear on some line items in my bill?.  Valid values are AmortizedCost, BlendedCost, NetAmortizedCost, NetUnblendedCost, NormalizedUsageAmount, UnblendedCost, and UsageQuantity.   If you return the UsageQuantity metric, the service aggregates all usage numbers without taking into account the units. For example, if you aggregate usageQuantity across all of Amazon EC2, the results aren't meaningful because Amazon EC2 compute hours and data transfer are measured in different units (for example, hours vs. GB). To get more meaningful UsageQuantity metrics, filter by UsageType or UsageTypeGroups.    Metrics is required for GetCostAndUsage requests.
     */
    Metrics?: MetricNames;
    /**
     * You can group AWS costs using up to two different groups, either dimensions, tag keys, or both. When you group by tag key, you get all tag values, including empty strings. Valid values are AZ, INSTANCE_TYPE, LEGAL_ENTITY_NAME, LINKED_ACCOUNT, OPERATION, PLATFORM, PURCHASE_TYPE, SERVICE, TAGS, TENANCY, RECORD_TYPE, and USAGE_TYPE.
     */
    GroupBy?: GroupDefinitions;
    /**
     * The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.
     */
    NextPageToken?: NextPageToken;
  }
  export interface GetCostAndUsageResponse {
    /**
     * The token for the next set of retrievable results. AWS provides the token when the response from a previous call has more results than the maximum page size.
     */
    NextPageToken?: NextPageToken;
    /**
     * The groups that are specified by the Filter or GroupBy parameters in the request.
     */
    GroupDefinitions?: GroupDefinitions;
    /**
     * The time period that is covered by the results in the response.
     */
    ResultsByTime?: ResultsByTime;
  }
  export interface GetCostAndUsageWithResourcesRequest {
    /**
     * Sets the start and end dates for retrieving Amazon Web Services costs. The range must be within the last 14 days (the start date cannot be earlier than 14 days ago). The start date is inclusive, but the end date is exclusive. For example, if start is 2017-01-01 and end is 2017-05-01, then the cost and usage data is retrieved from 2017-01-01 up to and including 2017-04-30 but not including 2017-05-01.
     */
    TimePeriod: DateInterval;
    /**
     * Sets the AWS cost granularity to MONTHLY, DAILY, or HOURLY. If Granularity isn't set, the response object doesn't include the Granularity, MONTHLY, DAILY, or HOURLY. 
     */
    Granularity?: Granularity;
    /**
     * Filters Amazon Web Services costs by different dimensions. For example, you can specify SERVICE and LINKED_ACCOUNT and get the costs that are associated with that account's usage of that service. You can nest Expression objects to define any combination of dimension filters. For more information, see Expression.  The GetCostAndUsageWithResources operation requires that you either group by or filter by a ResourceId.
     */
    Filter?: Expression;
    /**
     * Which metrics are returned in the query. For more information about blended and unblended rates, see Why does the "blended" annotation appear on some line items in my bill?.  Valid values are AmortizedCost, BlendedCost, NetAmortizedCost, NetUnblendedCost, NormalizedUsageAmount, UnblendedCost, and UsageQuantity.   If you return the UsageQuantity metric, the service aggregates all usage numbers without taking the units into account. For example, if you aggregate usageQuantity across all of Amazon EC2, the results aren't meaningful because Amazon EC2 compute hours and data transfer are measured in different units (for example, hours vs. GB). To get more meaningful UsageQuantity metrics, filter by UsageType or UsageTypeGroups.    Metrics is required for GetCostAndUsageWithResources requests.
     */
    Metrics?: MetricNames;
    /**
     * You can group Amazon Web Services costs using up to two different groups: either dimensions, tag keys, or both.
     */
    GroupBy?: GroupDefinitions;
    /**
     * The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.
     */
    NextPageToken?: NextPageToken;
  }
  export interface GetCostAndUsageWithResourcesResponse {
    /**
     * The token for the next set of retrievable results. AWS provides the token when the response from a previous call has more results than the maximum page size.
     */
    NextPageToken?: NextPageToken;
    /**
     * The groups that are specified by the Filter or GroupBy parameters in the request.
     */
    GroupDefinitions?: GroupDefinitions;
    /**
     * The time period that is covered by the results in the response.
     */
    ResultsByTime?: ResultsByTime;
  }
  export interface GetCostForecastRequest {
    /**
     * The period of time that you want the forecast to cover.
     */
    TimePeriod: DateInterval;
    /**
     * Which metric Cost Explorer uses to create your forecast. For more information about blended and unblended rates, see Why does the "blended" annotation appear on some line items in my bill?.  Valid values for a GetCostForecast call are the following:   AMORTIZED_COST   BLENDED_COST   NET_AMORTIZED_COST   NET_UNBLENDED_COST   UNBLENDED_COST  
     */
    Metric: Metric;
    /**
     * How granular you want the forecast to be. You can get 3 months of DAILY forecasts or 12 months of MONTHLY forecasts. The GetCostForecast operation supports only DAILY and MONTHLY granularities.
     */
    Granularity: Granularity;
    /**
     * The filters that you want to use to filter your forecast. Cost Explorer API supports all of the Cost Explorer filters.
     */
    Filter?: Expression;
    /**
     * Cost Explorer always returns the mean forecast as a single point. You can request a prediction interval around the mean by specifying a confidence level. The higher the confidence level, the more confident Cost Explorer is about the actual value falling in the prediction interval. Higher confidence levels result in wider prediction intervals.
     */
    PredictionIntervalLevel?: PredictionIntervalLevel;
  }
  export interface GetCostForecastResponse {
    /**
     * How much you are forecasted to spend over the forecast period, in USD.
     */
    Total?: MetricValue;
    /**
     * The forecasts for your query, in order. For DAILY forecasts, this is a list of days. For MONTHLY forecasts, this is a list of months.
     */
    ForecastResultsByTime?: ForecastResultsByTime;
  }
  export interface GetDimensionValuesRequest {
    /**
     * The value that you want to search the filter values for.
     */
    SearchString?: SearchString;
    /**
     * The start and end dates for retrieving the dimension values. The start date is inclusive, but the end date is exclusive. For example, if start is 2017-01-01 and end is 2017-05-01, then the cost and usage data is retrieved from 2017-01-01 up to and including 2017-04-30 but not including 2017-05-01.
     */
    TimePeriod: DateInterval;
    /**
     * The name of the dimension. Each Dimension is available for a different Context. For more information, see Context. 
     */
    Dimension: Dimension;
    /**
     * The context for the call to GetDimensionValues. This can be RESERVATIONS or COST_AND_USAGE. The default value is COST_AND_USAGE. If the context is set to RESERVATIONS, the resulting dimension values can be used in the GetReservationUtilization operation. If the context is set to COST_AND_USAGE, the resulting dimension values can be used in the GetCostAndUsage operation. If you set the context to COST_AND_USAGE, you can use the following dimensions for searching:   AZ - The Availability Zone. An example is us-east-1a.   DATABASE_ENGINE - The Amazon Relational Database Service database. Examples are Aurora or MySQL.   INSTANCE_TYPE - The type of Amazon EC2 instance. An example is m4.xlarge.   LEGAL_ENTITY_NAME - The name of the organization that sells you AWS services, such as Amazon Web Services.   LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value field contains the AWS ID of the member account.   OPERATING_SYSTEM - The operating system. Examples are Windows or Linux.   OPERATION - The action performed. Examples include RunInstance and CreateBucket.   PLATFORM - The Amazon EC2 operating system. Examples are Windows or Linux.   PURCHASE_TYPE - The reservation type of the purchase to which this usage is related. Examples include On-Demand Instances and Standard Reserved Instances.   SERVICE - The AWS service such as Amazon DynamoDB.   USAGE_TYPE - The type of usage. An example is DataTransfer-In-Bytes. The response for the GetDimensionValues operation includes a unit attribute. Examples include GB and Hrs.   USAGE_TYPE_GROUP - The grouping of common usage types. An example is Amazon EC2: CloudWatch – Alarms. The response for this operation includes a unit attribute.   RECORD_TYPE - The different types of charges such as RI fees, usage costs, tax refunds, and credits.   RESOURCE_ID - The unique identifier of the resource. ResourceId is an opt-in feature only available for last 14 days for EC2-Compute Service.   If you set the context to RESERVATIONS, you can use the following dimensions for searching:   AZ - The Availability Zone. An example is us-east-1a.   CACHE_ENGINE - The Amazon ElastiCache operating system. Examples are Windows or Linux.   DEPLOYMENT_OPTION - The scope of Amazon Relational Database Service deployments. Valid values are SingleAZ and MultiAZ.   INSTANCE_TYPE - The type of Amazon EC2 instance. An example is m4.xlarge.   LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value field contains the AWS ID of the member account.   PLATFORM - The Amazon EC2 operating system. Examples are Windows or Linux.   REGION - The AWS Region.   SCOPE (Utilization only) - The scope of a Reserved Instance (RI). Values are regional or a single Availability Zone.   TAG (Coverage only) - The tags that are associated with a Reserved Instance (RI).   TENANCY - The tenancy of a resource. Examples are shared or dedicated.   If you set the context to SAVINGS_PLANS, you can use the following dimensions for searching:   SAVINGS_PLANS_TYPE - Type of Savings Plans (EC2 Instance or Compute)   PAYMENT_OPTION - Payment option for the given Savings Plans (for example, All Upfront)   REGION - The AWS Region.   INSTANCE_TYPE_FAMILY - The family of instances (For example, m5)   LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value field contains the AWS ID of the member account.   SAVINGS_PLAN_ARN - The unique identifier for your Savings Plan  
     */
    Context?: Context;
    /**
     * The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.
     */
    NextPageToken?: NextPageToken;
  }
  export interface GetDimensionValuesResponse {
    /**
     * The filters that you used to filter your request. Some dimensions are available only for a specific context. If you set the context to COST_AND_USAGE, you can use the following dimensions for searching:   AZ - The Availability Zone. An example is us-east-1a.   DATABASE_ENGINE - The Amazon Relational Database Service database. Examples are Aurora or MySQL.   INSTANCE_TYPE - The type of Amazon EC2 instance. An example is m4.xlarge.   LEGAL_ENTITY_NAME - The name of the organization that sells you AWS services, such as Amazon Web Services.   LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value field contains the AWS ID of the member account.   OPERATING_SYSTEM - The operating system. Examples are Windows or Linux.   OPERATION - The action performed. Examples include RunInstance and CreateBucket.   PLATFORM - The Amazon EC2 operating system. Examples are Windows or Linux.   PURCHASE_TYPE - The reservation type of the purchase to which this usage is related. Examples include On-Demand Instances and Standard Reserved Instances.   SERVICE - The AWS service such as Amazon DynamoDB.   USAGE_TYPE - The type of usage. An example is DataTransfer-In-Bytes. The response for the GetDimensionValues operation includes a unit attribute. Examples include GB and Hrs.   USAGE_TYPE_GROUP - The grouping of common usage types. An example is Amazon EC2: CloudWatch – Alarms. The response for this operation includes a unit attribute.   RECORD_TYPE - The different types of charges such as RI fees, usage costs, tax refunds, and credits.   RESOURCE_ID - The unique identifier of the resource. ResourceId is an opt-in feature only available for last 14 days for EC2-Compute Service.   If you set the context to RESERVATIONS, you can use the following dimensions for searching:   AZ - The Availability Zone. An example is us-east-1a.   CACHE_ENGINE - The Amazon ElastiCache operating system. Examples are Windows or Linux.   DEPLOYMENT_OPTION - The scope of Amazon Relational Database Service deployments. Valid values are SingleAZ and MultiAZ.   INSTANCE_TYPE - The type of Amazon EC2 instance. An example is m4.xlarge.   LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value field contains the AWS ID of the member account.   PLATFORM - The Amazon EC2 operating system. Examples are Windows or Linux.   REGION - The AWS Region.   SCOPE (Utilization only) - The scope of a Reserved Instance (RI). Values are regional or a single Availability Zone.   TAG (Coverage only) - The tags that are associated with a Reserved Instance (RI).   TENANCY - The tenancy of a resource. Examples are shared or dedicated.   If you set the context to SAVINGS_PLANS, you can use the following dimensions for searching:   SAVINGS_PLANS_TYPE - Type of Savings Plans (EC2 Instance or Compute)   PAYMENT_OPTION - Payment option for the given Savings Plans (for example, All Upfront)   REGION - The AWS Region.   INSTANCE_TYPE_FAMILY - The family of instances (For example, m5)   LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value field contains the AWS ID of the member account.   SAVINGS_PLAN_ARN - The unique identifier for your Savings Plan  
     */
    DimensionValues: DimensionValuesWithAttributesList;
    /**
     * The number of results that AWS returned at one time.
     */
    ReturnSize: PageSize;
    /**
     * The total number of search results.
     */
    TotalSize: PageSize;
    /**
     * The token for the next set of retrievable results. AWS provides the token when the response from a previous call has more results than the maximum page size.
     */
    NextPageToken?: NextPageToken;
  }
  export interface GetReservationCoverageRequest {
    /**
     * The start and end dates of the period that you want to retrieve data about reservation coverage for. You can retrieve data for a maximum of 13 months: the last 12 months and the current month. The start date is inclusive, but the end date is exclusive. For example, if start is 2017-01-01 and end is 2017-05-01, then the cost and usage data is retrieved from 2017-01-01 up to and including 2017-04-30 but not including 2017-05-01. 
     */
    TimePeriod: DateInterval;
    /**
     * You can group the data by the following attributes:   AZ   CACHE_ENGINE   DATABASE_ENGINE   DEPLOYMENT_OPTION   INSTANCE_TYPE   LINKED_ACCOUNT   OPERATING_SYSTEM   PLATFORM   REGION   TENANCY  
     */
    GroupBy?: GroupDefinitions;
    /**
     * The granularity of the AWS cost data for the reservation. Valid values are MONTHLY and DAILY. If GroupBy is set, Granularity can't be set. If Granularity isn't set, the response object doesn't include Granularity, either MONTHLY or DAILY. The GetReservationCoverage operation supports only DAILY and MONTHLY granularities.
     */
    Granularity?: Granularity;
    /**
     * Filters utilization data by dimensions. You can filter by the following dimensions:   AZ   CACHE_ENGINE   DATABASE_ENGINE   DEPLOYMENT_OPTION   INSTANCE_TYPE   LINKED_ACCOUNT   OPERATING_SYSTEM   PLATFORM   REGION   SERVICE   TAG   TENANCY    GetReservationCoverage uses the same Expression object as the other operations, but only AND is supported among each dimension. You can nest only one level deep. If there are multiple values for a dimension, they are OR'd together. If you don't provide a SERVICE filter, Cost Explorer defaults to EC2.
     */
    Filter?: Expression;
    /**
     * The measurement that you want your reservation coverage reported in. Valid values are Hour, Unit, and Cost. You can use multiple values in a request.
     */
    Metrics?: MetricNames;
    /**
     * The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.
     */
    NextPageToken?: NextPageToken;
  }
  export interface GetReservationCoverageResponse {
    /**
     * The amount of time that your reservations covered.
     */
    CoveragesByTime: CoveragesByTime;
    /**
     * The total amount of instance usage that a reservation covered.
     */
    Total?: Coverage;
    /**
     * The token for the next set of retrievable results. AWS provides the token when the response from a previous call has more results than the maximum page size.
     */
    NextPageToken?: NextPageToken;
  }
  export interface GetReservationPurchaseRecommendationRequest {
    /**
     * The account ID that is associated with the recommendation. 
     */
    AccountId?: GenericString;
    /**
     * The specific service that you want recommendations for.
     */
    Service: GenericString;
    /**
     * The account scope that you want recommendations for. PAYER means that AWS includes the master account and any member accounts when it calculates its recommendations. LINKED means that AWS includes only member accounts when it calculates its recommendations. Valid values are PAYER and LINKED.
     */
    AccountScope?: AccountScope;
    /**
     * The number of previous days that you want AWS to consider when it calculates your recommendations.
     */
    LookbackPeriodInDays?: LookbackPeriodInDays;
    /**
     * The reservation term that you want recommendations for.
     */
    TermInYears?: TermInYears;
    /**
     * The reservation purchase option that you want recommendations for.
     */
    PaymentOption?: PaymentOption;
    /**
     * The hardware specifications for the service instances that you want recommendations for, such as standard or convertible Amazon EC2 instances.
     */
    ServiceSpecification?: ServiceSpecification;
    /**
     * The number of recommendations that you want returned in a single response object.
     */
    PageSize?: NonNegativeInteger;
    /**
     * The pagination token that indicates the next set of results that you want to retrieve.
     */
    NextPageToken?: NextPageToken;
  }
  export interface GetReservationPurchaseRecommendationResponse {
    /**
     * Information about this specific recommendation call, such as the time stamp for when Cost Explorer generated this recommendation.
     */
    Metadata?: ReservationPurchaseRecommendationMetadata;
    /**
     * Recommendations for reservations to purchase.
     */
    Recommendations?: ReservationPurchaseRecommendations;
    /**
     * The pagination token for the next set of retrievable results.
     */
    NextPageToken?: NextPageToken;
  }
  export interface GetReservationUtilizationRequest {
    /**
     * Sets the start and end dates for retrieving RI utilization. The start date is inclusive, but the end date is exclusive. For example, if start is 2017-01-01 and end is 2017-05-01, then the cost and usage data is retrieved from 2017-01-01 up to and including 2017-04-30 but not including 2017-05-01. 
     */
    TimePeriod: DateInterval;
    /**
     * Groups only by SUBSCRIPTION_ID. Metadata is included.
     */
    GroupBy?: GroupDefinitions;
    /**
     * If GroupBy is set, Granularity can't be set. If Granularity isn't set, the response object doesn't include Granularity, either MONTHLY or DAILY. If both GroupBy and Granularity aren't set, GetReservationUtilization defaults to DAILY. The GetReservationUtilization operation supports only DAILY and MONTHLY granularities.
     */
    Granularity?: Granularity;
    /**
     * Filters utilization data by dimensions. You can filter by the following dimensions:   AZ   CACHE_ENGINE   DEPLOYMENT_OPTION   INSTANCE_TYPE   LINKED_ACCOUNT   OPERATING_SYSTEM   PLATFORM   REGION   SERVICE   SCOPE   TENANCY    GetReservationUtilization uses the same Expression object as the other operations, but only AND is supported among each dimension, and nesting is supported up to only one level deep. If there are multiple values for a dimension, they are OR'd together.
     */
    Filter?: Expression;
    /**
     * The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.
     */
    NextPageToken?: NextPageToken;
  }
  export interface GetReservationUtilizationResponse {
    /**
     * The amount of time that you used your RIs.
     */
    UtilizationsByTime: UtilizationsByTime;
    /**
     * The total amount of time that you used your RIs.
     */
    Total?: ReservationAggregates;
    /**
     * The token for the next set of retrievable results. AWS provides the token when the response from a previous call has more results than the maximum page size.
     */
    NextPageToken?: NextPageToken;
  }
  export interface GetRightsizingRecommendationRequest {
    Filter?: Expression;
    /**
     * The specific service that you want recommendations for. The only valid value for GetRightsizingRecommendation is "AmazonEC2".
     */
    Service: GenericString;
    /**
     * The number of recommendations that you want returned in a single response object.
     */
    PageSize?: NonNegativeInteger;
    /**
     * The pagination token that indicates the next set of results that you want to retrieve.
     */
    NextPageToken?: NextPageToken;
  }
  export interface GetRightsizingRecommendationResponse {
    /**
     * Information regarding this specific recommendation set.
     */
    Metadata?: RightsizingRecommendationMetadata;
    /**
     * Summary of this recommendation set.
     */
    Summary?: RightsizingRecommendationSummary;
    /**
     * Recommendations to rightsize resources.
     */
    RightsizingRecommendations?: RightsizingRecommendationList;
    /**
     * The token to retrieve the next set of results.
     */
    NextPageToken?: NextPageToken;
  }
  export interface GetSavingsPlansCoverageRequest {
    /**
     * The time period that you want the usage and costs for. The Start date must be within 13 months. The End date must be after the Start date, and before the current date. Future dates can't be used as an End date.
     */
    TimePeriod: DateInterval;
    /**
     * You can group the data using the attributes INSTANCE_FAMILY, REGION, or SERVICE.
     */
    GroupBy?: GroupDefinitions;
    /**
     * The granularity of the Amazon Web Services cost data for your Savings Plans. Granularity can't be set if GroupBy is set. The GetSavingsPlansCoverage operation supports only DAILY and MONTHLY granularities.
     */
    Granularity?: Granularity;
    /**
     * Filters Savings Plans coverage data by dimensions. You can filter data for Savings Plans usage with the following dimensions:    LINKED_ACCOUNT     REGION     SERVICE     INSTANCE_FAMILY     GetSavingsPlansCoverage uses the same Expression object as the other operations, but only AND is supported among each dimension. If there are multiple values for a dimension, they are OR'd together.
     */
    Filter?: Expression;
    /**
     * The measurement that you want your Savings Plans coverage reported in. The only valid value is SpendCoveredBySavingsPlans.
     */
    Metrics?: MetricNames;
    /**
     * The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
     */
    NextToken?: NextPageToken;
    /**
     * The number of items to be returned in a response. The default is 20, with a minimum value of 1.
     */
    MaxResults?: MaxResults;
  }
  export interface GetSavingsPlansCoverageResponse {
    /**
     * The amount of spend that your Savings Plans covered.
     */
    SavingsPlansCoverages: SavingsPlansCoverages;
    /**
     * The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
     */
    NextToken?: NextPageToken;
  }
  export interface GetSavingsPlansPurchaseRecommendationRequest {
    /**
     * The Savings Plans recommendation type requested.
     */
    SavingsPlansType: SupportedSavingsPlansType;
    /**
     * The savings plan recommendation term used to generated these recommendations.
     */
    TermInYears: TermInYears;
    /**
     * The payment option used to generate these recommendations.
     */
    PaymentOption: PaymentOption;
    /**
     * The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
     */
    NextPageToken?: NextPageToken;
    /**
     * The number of recommendations that you want returned in a single response object.
     */
    PageSize?: NonNegativeInteger;
    /**
     * The lookback period used to generate the recommendation.
     */
    LookbackPeriodInDays: LookbackPeriodInDays;
  }
  export interface GetSavingsPlansPurchaseRecommendationResponse {
    /**
     * Information regarding this specific recommendation set.
     */
    Metadata?: SavingsPlansPurchaseRecommendationMetadata;
    /**
     * Contains your request parameters, Savings Plan Recommendations Summary, and Details.
     */
    SavingsPlansPurchaseRecommendation?: SavingsPlansPurchaseRecommendation;
    /**
     * The token for the next set of retrievable results. AWS provides the token when the response from a previous call has more results than the maximum page size.
     */
    NextPageToken?: NextPageToken;
  }
  export interface GetSavingsPlansUtilizationDetailsRequest {
    /**
     * The time period that you want the usage and costs for. The Start date must be within 13 months. The End date must be after the Start date, and before the current date. Future dates can't be used as an End date.
     */
    TimePeriod: DateInterval;
    /**
     * Filters Savings Plans utilization coverage data for active Savings Plans dimensions. You can filter data with the following dimensions:    LINKED_ACCOUNT     SAVINGS_PLAN_ARN     REGION     PAYMENT_OPTION     INSTANCE_TYPE_FAMILY     GetSavingsPlansUtilizationDetails uses the same Expression object as the other operations, but only AND is supported among each dimension.
     */
    Filter?: Expression;
    /**
     * The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
     */
    NextToken?: NextPageToken;
    /**
     * The number of items to be returned in a response. The default is 20, with a minimum value of 1.
     */
    MaxResults?: MaxResults;
  }
  export interface GetSavingsPlansUtilizationDetailsResponse {
    /**
     * Retrieves a single daily or monthly Savings Plans utilization rate and details for your account.
     */
    SavingsPlansUtilizationDetails: SavingsPlansUtilizationDetails;
    /**
     * The total Savings Plans utilization, regardless of time period.
     */
    Total?: SavingsPlansUtilizationAggregates;
    TimePeriod: DateInterval;
    /**
     * The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.
     */
    NextToken?: NextPageToken;
  }
  export interface GetSavingsPlansUtilizationRequest {
    /**
     * The time period that you want the usage and costs for. The Start date must be within 13 months. The End date must be after the Start date, and before the current date. Future dates can't be used as an End date.
     */
    TimePeriod: DateInterval;
    /**
     * The granularity of the Amazon Web Services utillization data for your Savings Plans. The GetSavingsPlansUtilization operation supports only DAILY and MONTHLY granularities.
     */
    Granularity?: Granularity;
    /**
     * Filters Savings Plans utilization coverage data for active Savings Plans dimensions. You can filter data with the following dimensions:    LINKED_ACCOUNT     SAVINGS_PLAN_ARN     SAVINGS_PLANS_TYPE     REGION     PAYMENT_OPTION     INSTANCE_TYPE_FAMILY     GetSavingsPlansUtilization uses the same Expression object as the other operations, but only AND is supported among each dimension.
     */
    Filter?: Expression;
  }
  export interface GetSavingsPlansUtilizationResponse {
    /**
     * The amount of cost/commitment you used your Savings Plans. This allows you to specify date ranges.
     */
    SavingsPlansUtilizationsByTime?: SavingsPlansUtilizationsByTime;
    /**
     * The total amount of cost/commitment that you used your Savings Plans, regardless of date ranges.
     */
    Total: SavingsPlansUtilizationAggregates;
  }
  export interface GetTagsRequest {
    /**
     * The value that you want to search for.
     */
    SearchString?: SearchString;
    /**
     * The start and end dates for retrieving the dimension values. The start date is inclusive, but the end date is exclusive. For example, if start is 2017-01-01 and end is 2017-05-01, then the cost and usage data is retrieved from 2017-01-01 up to and including 2017-04-30 but not including 2017-05-01.
     */
    TimePeriod: DateInterval;
    /**
     * The key of the tag that you want to return values for.
     */
    TagKey?: TagKey;
    /**
     * The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.
     */
    NextPageToken?: NextPageToken;
  }
  export interface GetTagsResponse {
    /**
     * The token for the next set of retrievable results. AWS provides the token when the response from a previous call has more results than the maximum page size.
     */
    NextPageToken?: NextPageToken;
    /**
     * The tags that match your request.
     */
    Tags: TagList;
    /**
     * The number of query results that AWS returns at a time.
     */
    ReturnSize: PageSize;
    /**
     * The total number of query results.
     */
    TotalSize: PageSize;
  }
  export interface GetUsageForecastRequest {
    /**
     * The start and end dates of the period that you want to retrieve usage forecast for. The start date is inclusive, but the end date is exclusive. For example, if start is 2017-01-01 and end is 2017-05-01, then the cost and usage data is retrieved from 2017-01-01 up to and including 2017-04-30 but not including 2017-05-01.
     */
    TimePeriod: DateInterval;
    /**
     * Which metric Cost Explorer uses to create your forecast. Valid values for a GetUsageForecast call are the following:   USAGE_QUANTITY   NORMALIZED_USAGE_AMOUNT  
     */
    Metric: Metric;
    /**
     * How granular you want the forecast to be. You can get 3 months of DAILY forecasts or 12 months of MONTHLY forecasts. The GetUsageForecast operation supports only DAILY and MONTHLY granularities.
     */
    Granularity: Granularity;
    /**
     * The filters that you want to use to filter your forecast. Cost Explorer API supports all of the Cost Explorer filters.
     */
    Filter?: Expression;
    /**
     * Cost Explorer always returns the mean forecast as a single point. You can request a prediction interval around the mean by specifying a confidence level. The higher the confidence level, the more confident Cost Explorer is about the actual value falling in the prediction interval. Higher confidence levels result in wider prediction intervals.
     */
    PredictionIntervalLevel?: PredictionIntervalLevel;
  }
  export interface GetUsageForecastResponse {
    /**
     * How much you're forecasted to use over the forecast period.
     */
    Total?: MetricValue;
    /**
     * The forecasts for your query, in order. For DAILY forecasts, this is a list of days. For MONTHLY forecasts, this is a list of months.
     */
    ForecastResultsByTime?: ForecastResultsByTime;
  }
  export type Granularity = "DAILY"|"MONTHLY"|"HOURLY"|string;
  export interface Group {
    /**
     * The keys that are included in this group.
     */
    Keys?: Keys;
    /**
     * The metrics that are included in this group.
     */
    Metrics?: Metrics;
  }
  export interface GroupDefinition {
    /**
     * The string that represents the type of group.
     */
    Type?: GroupDefinitionType;
    /**
     * The string that represents a key for a specified group.
     */
    Key?: GroupDefinitionKey;
  }
  export type GroupDefinitionKey = string;
  export type GroupDefinitionType = "DIMENSION"|"TAG"|"COST_CATEGORY"|string;
  export type GroupDefinitions = GroupDefinition[];
  export type Groups = Group[];
  export interface InstanceDetails {
    /**
     * The Amazon EC2 instances that AWS recommends that you purchase.
     */
    EC2InstanceDetails?: EC2InstanceDetails;
    /**
     * The Amazon RDS instances that AWS recommends that you purchase.
     */
    RDSInstanceDetails?: RDSInstanceDetails;
    /**
     * The Amazon Redshift instances that AWS recommends that you purchase.
     */
    RedshiftInstanceDetails?: RedshiftInstanceDetails;
    /**
     * The ElastiCache instances that AWS recommends that you purchase.
     */
    ElastiCacheInstanceDetails?: ElastiCacheInstanceDetails;
    /**
     * The Amazon ES instances that AWS recommends that you purchase.
     */
    ESInstanceDetails?: ESInstanceDetails;
  }
  export type Key = string;
  export type Keys = Key[];
  export interface ListCostCategoryDefinitionsRequest {
    /**
     *  The date when the Cost Category was effective. 
     */
    EffectiveOn?: ZonedDateTime;
    /**
     *  The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.  You can use this information to retrieve the full Cost Category information using DescribeCostCategory.
     */
    NextToken?: NextPageToken;
  }
  export interface ListCostCategoryDefinitionsResponse {
    /**
     *  A reference to a Cost Category containing enough information to identify the Cost Category. 
     */
    CostCategoryReferences?: CostCategoryReferencesList;
    /**
     *  The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size. 
     */
    NextToken?: NextPageToken;
  }
  export type LookbackPeriodInDays = "SEVEN_DAYS"|"THIRTY_DAYS"|"SIXTY_DAYS"|string;
  export type MaxResults = number;
  export type Metric = "BLENDED_COST"|"UNBLENDED_COST"|"AMORTIZED_COST"|"NET_UNBLENDED_COST"|"NET_AMORTIZED_COST"|"USAGE_QUANTITY"|"NORMALIZED_USAGE_AMOUNT"|string;
  export type MetricAmount = string;
  export type MetricName = string;
  export type MetricNames = MetricName[];
  export type MetricUnit = string;
  export interface MetricValue {
    /**
     * The actual number that represents the metric.
     */
    Amount?: MetricAmount;
    /**
     * The unit that the metric is given in.
     */
    Unit?: MetricUnit;
  }
  export type Metrics = {[key: string]: MetricValue};
  export interface ModifyRecommendationDetail {
    /**
     * Identifies whether this instance type is the Amazon Web Services default recommendation.
     */
    TargetInstances?: TargetInstancesList;
  }
  export type NetRISavings = string;
  export type NextPageToken = string;
  export type NonNegativeInteger = number;
  export type OfferingClass = "STANDARD"|"CONVERTIBLE"|string;
  export type OnDemandCost = string;
  export type OnDemandCostOfRIHoursUsed = string;
  export type OnDemandHours = string;
  export type OnDemandNormalizedUnits = string;
  export type PageSize = number;
  export type PaymentOption = "NO_UPFRONT"|"PARTIAL_UPFRONT"|"ALL_UPFRONT"|"LIGHT_UTILIZATION"|"MEDIUM_UTILIZATION"|"HEAVY_UTILIZATION"|string;
  export type PredictionIntervalLevel = number;
  export type PurchasedHours = string;
  export type PurchasedUnits = string;
  export interface RDSInstanceDetails {
    /**
     * The instance family of the recommended reservation.
     */
    Family?: GenericString;
    /**
     * The type of instance that AWS recommends.
     */
    InstanceType?: GenericString;
    /**
     * The AWS Region of the recommended reservation.
     */
    Region?: GenericString;
    /**
     * The database engine that the recommended reservation supports.
     */
    DatabaseEngine?: GenericString;
    /**
     * The database edition that the recommended reservation supports.
     */
    DatabaseEdition?: GenericString;
    /**
     * Whether the recommendation is for a reservation in a single Availability Zone or a reservation with a backup in a second Availability Zone.
     */
    DeploymentOption?: GenericString;
    /**
     * The license model that the recommended reservation supports.
     */
    LicenseModel?: GenericString;
    /**
     * Whether the recommendation is for a current-generation instance. 
     */
    CurrentGeneration?: GenericBoolean;
    /**
     * Whether the recommended reservation is size flexible.
     */
    SizeFlexEligible?: GenericBoolean;
  }
  export interface RedshiftInstanceDetails {
    /**
     * The instance family of the recommended reservation.
     */
    Family?: GenericString;
    /**
     * The type of node that AWS recommends.
     */
    NodeType?: GenericString;
    /**
     * The AWS Region of the recommended reservation.
     */
    Region?: GenericString;
    /**
     * Whether the recommendation is for a current-generation instance.
     */
    CurrentGeneration?: GenericBoolean;
    /**
     * Whether the recommended reservation is size flexible.
     */
    SizeFlexEligible?: GenericBoolean;
  }
  export interface ReservationAggregates {
    /**
     * The percentage of reservation time that you used.
     */
    UtilizationPercentage?: UtilizationPercentage;
    /**
     * The percentage of Amazon EC2 reservation time that you used, converted to normalized units. Normalized units are available only for Amazon EC2 usage after November 11, 2017.
     */
    UtilizationPercentageInUnits?: UtilizationPercentageInUnits;
    /**
     * How many reservation hours that you purchased.
     */
    PurchasedHours?: PurchasedHours;
    /**
     * How many Amazon EC2 reservation hours that you purchased, converted to normalized units. Normalized units are available only for Amazon EC2 usage after November 11, 2017.
     */
    PurchasedUnits?: PurchasedUnits;
    /**
     * The total number of reservation hours that you used.
     */
    TotalActualHours?: TotalActualHours;
    /**
     * The total number of Amazon EC2 reservation hours that you used, converted to normalized units. Normalized units are available only for Amazon EC2 usage after November 11, 2017.
     */
    TotalActualUnits?: TotalActualUnits;
    /**
     * The number of reservation hours that you didn't use.
     */
    UnusedHours?: UnusedHours;
    /**
     * The number of Amazon EC2 reservation hours that you didn't use, converted to normalized units. Normalized units are available only for Amazon EC2 usage after November 11, 2017.
     */
    UnusedUnits?: UnusedUnits;
    /**
     * How much your reservation would cost if charged On-Demand rates.
     */
    OnDemandCostOfRIHoursUsed?: OnDemandCostOfRIHoursUsed;
    /**
     * How much you saved due to purchasing and utilizing reservation. AWS calculates this by subtracting TotalAmortizedFee from OnDemandCostOfRIHoursUsed.
     */
    NetRISavings?: NetRISavings;
    /**
     * How much you could save if you use your entire reservation.
     */
    TotalPotentialRISavings?: TotalPotentialRISavings;
    /**
     * The upfront cost of your reservation, amortized over the reservation period.
     */
    AmortizedUpfrontFee?: AmortizedUpfrontFee;
    /**
     * The monthly cost of your reservation, amortized over the reservation period.
     */
    AmortizedRecurringFee?: AmortizedRecurringFee;
    /**
     * The total cost of your reservation, amortized over the reservation period.
     */
    TotalAmortizedFee?: TotalAmortizedFee;
  }
  export interface ReservationCoverageGroup {
    /**
     * The attributes for this group of reservations.
     */
    Attributes?: Attributes;
    /**
     * How much instance usage this group of reservations covered.
     */
    Coverage?: Coverage;
  }
  export type ReservationCoverageGroups = ReservationCoverageGroup[];
  export type ReservationGroupKey = string;
  export type ReservationGroupValue = string;
  export interface ReservationPurchaseRecommendation {
    /**
     * The account scope that AWS recommends that you purchase this instance for. For example, you can purchase this reservation for an entire organization in AWS Organizations.
     */
    AccountScope?: AccountScope;
    /**
     * How many days of previous usage that AWS considers when making this recommendation.
     */
    LookbackPeriodInDays?: LookbackPeriodInDays;
    /**
     * The term of the reservation that you want recommendations for, in years.
     */
    TermInYears?: TermInYears;
    /**
     * The payment option for the reservation. For example, AllUpfront or NoUpfront.
     */
    PaymentOption?: PaymentOption;
    /**
     * Hardware specifications for the service that you want recommendations for.
     */
    ServiceSpecification?: ServiceSpecification;
    /**
     * Details about the recommended purchases.
     */
    RecommendationDetails?: ReservationPurchaseRecommendationDetails;
    /**
     * A summary about the recommended purchase.
     */
    RecommendationSummary?: ReservationPurchaseRecommendationSummary;
  }
  export interface ReservationPurchaseRecommendationDetail {
    /**
     * The account that this RI recommendation is for.
     */
    AccountId?: GenericString;
    /**
     * Details about the instances that AWS recommends that you purchase.
     */
    InstanceDetails?: InstanceDetails;
    /**
     * The number of instances that AWS recommends that you purchase.
     */
    RecommendedNumberOfInstancesToPurchase?: GenericString;
    /**
     * The number of normalized units that AWS recommends that you purchase.
     */
    RecommendedNormalizedUnitsToPurchase?: GenericString;
    /**
     * The minimum number of instances that you used in an hour during the historical period. AWS uses this to calculate your recommended reservation purchases.
     */
    MinimumNumberOfInstancesUsedPerHour?: GenericString;
    /**
     * The minimum number of normalized units that you used in an hour during the historical period. AWS uses this to calculate your recommended reservation purchases.
     */
    MinimumNormalizedUnitsUsedPerHour?: GenericString;
    /**
     * The maximum number of instances that you used in an hour during the historical period. AWS uses this to calculate your recommended reservation purchases.
     */
    MaximumNumberOfInstancesUsedPerHour?: GenericString;
    /**
     * The maximum number of normalized units that you used in an hour during the historical period. AWS uses this to calculate your recommended reservation purchases.
     */
    MaximumNormalizedUnitsUsedPerHour?: GenericString;
    /**
     * The average number of instances that you used in an hour during the historical period. AWS uses this to calculate your recommended reservation purchases.
     */
    AverageNumberOfInstancesUsedPerHour?: GenericString;
    /**
     * The average number of normalized units that you used in an hour during the historical period. AWS uses this to calculate your recommended reservation purchases.
     */
    AverageNormalizedUnitsUsedPerHour?: GenericString;
    /**
     * The average utilization of your instances. AWS uses this to calculate your recommended reservation purchases.
     */
    AverageUtilization?: GenericString;
    /**
     * How long AWS estimates that it takes for this instance to start saving you money, in months.
     */
    EstimatedBreakEvenInMonths?: GenericString;
    /**
     * The currency code that AWS used to calculate the costs for this instance.
     */
    CurrencyCode?: GenericString;
    /**
     * How much AWS estimates that this specific recommendation could save you in a month.
     */
    EstimatedMonthlySavingsAmount?: GenericString;
    /**
     * How much AWS estimates that this specific recommendation could save you in a month, as a percentage of your overall costs.
     */
    EstimatedMonthlySavingsPercentage?: GenericString;
    /**
     * How much AWS estimates that you spend on On-Demand Instances in a month.
     */
    EstimatedMonthlyOnDemandCost?: GenericString;
    /**
     * How much AWS estimates that you would have spent for all usage during the specified historical period if you had a reservation.
     */
    EstimatedReservationCostForLookbackPeriod?: GenericString;
    /**
     * How much purchasing this instance costs you upfront.
     */
    UpfrontCost?: GenericString;
    /**
     * How much purchasing this instance costs you on a monthly basis.
     */
    RecurringStandardMonthlyCost?: GenericString;
  }
  export type ReservationPurchaseRecommendationDetails = ReservationPurchaseRecommendationDetail[];
  export interface ReservationPurchaseRecommendationMetadata {
    /**
     * The ID for this specific recommendation.
     */
    RecommendationId?: GenericString;
    /**
     * The time stamp for when AWS made this recommendation.
     */
    GenerationTimestamp?: GenericString;
  }
  export interface ReservationPurchaseRecommendationSummary {
    /**
     * The total amount that AWS estimates that this recommendation could save you in a month.
     */
    TotalEstimatedMonthlySavingsAmount?: GenericString;
    /**
     * The total amount that AWS estimates that this recommendation could save you in a month, as a percentage of your costs.
     */
    TotalEstimatedMonthlySavingsPercentage?: GenericString;
    /**
     * The currency code used for this recommendation.
     */
    CurrencyCode?: GenericString;
  }
  export type ReservationPurchaseRecommendations = ReservationPurchaseRecommendation[];
  export interface ReservationUtilizationGroup {
    /**
     * The key for a specific reservation attribute.
     */
    Key?: ReservationGroupKey;
    /**
     * The value of a specific reservation attribute.
     */
    Value?: ReservationGroupValue;
    /**
     * The attributes for this group of reservations.
     */
    Attributes?: Attributes;
    /**
     * How much you used this group of reservations.
     */
    Utilization?: ReservationAggregates;
  }
  export type ReservationUtilizationGroups = ReservationUtilizationGroup[];
  export type ReservedHours = string;
  export type ReservedNormalizedUnits = string;
  export interface ResourceDetails {
    /**
     * Details on the Amazon EC2 resource.
     */
    EC2ResourceDetails?: EC2ResourceDetails;
  }
  export interface ResourceUtilization {
    /**
     * Utilization of current Amazon EC2 Instance 
     */
    EC2ResourceUtilization?: EC2ResourceUtilization;
  }
  export interface ResultByTime {
    /**
     * The time period that the result covers.
     */
    TimePeriod?: DateInterval;
    /**
     * The total amount of cost or usage accrued during the time period.
     */
    Total?: Metrics;
    /**
     * The groups that this time period includes.
     */
    Groups?: Groups;
    /**
     * Whether the result is estimated.
     */
    Estimated?: Estimated;
  }
  export type ResultsByTime = ResultByTime[];
  export interface RightsizingRecommendation {
    /**
     * The account that this recommendation is for.
     */
    AccountId?: GenericString;
    /**
     *  Context regarding the current instance.
     */
    CurrentInstance?: CurrentInstance;
    /**
     * Recommendation to either terminate or modify the resource.
     */
    RightsizingType?: RightsizingType;
    /**
     *  Details for modification recommendations. 
     */
    ModifyRecommendationDetail?: ModifyRecommendationDetail;
    /**
     * Details for termination recommendations.
     */
    TerminateRecommendationDetail?: TerminateRecommendationDetail;
  }
  export type RightsizingRecommendationList = RightsizingRecommendation[];
  export interface RightsizingRecommendationMetadata {
    /**
     *  The ID for this specific recommendation.
     */
    RecommendationId?: GenericString;
    /**
     *  The time stamp for when Amazon Web Services made this recommendation.
     */
    GenerationTimestamp?: GenericString;
    /**
     *  How many days of previous usage that Amazon Web Services considers when making this recommendation.
     */
    LookbackPeriodInDays?: LookbackPeriodInDays;
  }
  export interface RightsizingRecommendationSummary {
    /**
     *  Total number of instance recommendations.
     */
    TotalRecommendationCount?: GenericString;
    /**
     *  Estimated total savings resulting from modifications, on a monthly basis.
     */
    EstimatedTotalMonthlySavingsAmount?: GenericString;
    /**
     *  The currency code that Amazon Web Services used to calculate the savings.
     */
    SavingsCurrencyCode?: GenericString;
    /**
     *  Savings percentage based on the recommended modifications, relative to the total On Demand costs associated with these instances.
     */
    SavingsPercentage?: GenericString;
  }
  export type RightsizingType = "TERMINATE"|"MODIFY"|string;
  export type SavingsPlanArn = string;
  export interface SavingsPlansAmortizedCommitment {
    /**
     * The amortized amount of your Savings Plans commitment that was purchased with either a Partial or a NoUpfront.
     */
    AmortizedRecurringCommitment?: GenericString;
    /**
     * The amortized amount of your Savings Plans commitment that was purchased with an Upfront or PartialUpfront Savings Plans.
     */
    AmortizedUpfrontCommitment?: GenericString;
    /**
     * The total amortized amount of your Savings Plans commitment, regardless of your Savings Plans purchase method. 
     */
    TotalAmortizedCommitment?: GenericString;
  }
  export interface SavingsPlansCoverage {
    /**
     * The attribute that applies to a specific Dimension.
     */
    Attributes?: Attributes;
    /**
     * The amount of Savings Plans eligible usage that the Savings Plans covered.
     */
    Coverage?: SavingsPlansCoverageData;
    TimePeriod?: DateInterval;
  }
  export interface SavingsPlansCoverageData {
    /**
     * The amount of your Amazon Web Services usage that is covered by a Savings Plans.
     */
    SpendCoveredBySavingsPlans?: GenericString;
    /**
     * The cost of your Amazon Web Services usage at the public On-Demand rate.
     */
    OnDemandCost?: GenericString;
    /**
     * The total cost of your Amazon Web Services usage, regardless of your purchase option.
     */
    TotalCost?: GenericString;
    /**
     * The percentage of your existing Savings Planscovered usage, divided by all of your eligible Savings Plans usage in an account(or set of accounts).
     */
    CoveragePercentage?: GenericString;
  }
  export type SavingsPlansCoverages = SavingsPlansCoverage[];
  export interface SavingsPlansDetails {
    /**
     * A collection of AWS resources in a geographic area. Each AWS Region is isolated and independent of the other Regions.
     */
    Region?: GenericString;
    /**
     * A group of instance types that Savings Plans applies to.
     */
    InstanceFamily?: GenericString;
    /**
     * The unique ID used to distinguish Savings Plans from one another.
     */
    OfferingId?: GenericString;
  }
  export interface SavingsPlansPurchaseRecommendation {
    /**
     * The requested Savings Plans recommendation type.
     */
    SavingsPlansType?: SupportedSavingsPlansType;
    /**
     * The Savings Plans recommendation term in years, used to generate the recommendation.
     */
    TermInYears?: TermInYears;
    /**
     * The payment option used to generate the recommendation.
     */
    PaymentOption?: PaymentOption;
    /**
     * The lookback period in days, used to generate the recommendation.
     */
    LookbackPeriodInDays?: LookbackPeriodInDays;
    /**
     * Details for the Savings Plans we recommend you to purchase to cover existing, Savings Plans eligible workloads.
     */
    SavingsPlansPurchaseRecommendationDetails?: SavingsPlansPurchaseRecommendationDetailList;
    /**
     * Summary metrics for your Savings Plans Recommendations. 
     */
    SavingsPlansPurchaseRecommendationSummary?: SavingsPlansPurchaseRecommendationSummary;
  }
  export interface SavingsPlansPurchaseRecommendationDetail {
    /**
     * Details for your recommended Savings Plans.
     */
    SavingsPlansDetails?: SavingsPlansDetails;
    /**
     * The AccountID the recommendation is generated for.
     */
    AccountId?: GenericString;
    /**
     * The upfront cost of the recommended Savings Plans, based on the selected payment option.
     */
    UpfrontCost?: GenericString;
    /**
     * The estimated return on investment based on the recommended Savings Plans purchased. This is calculated as estimatedSavingsAmount/ estimatedSPCost*100.
     */
    EstimatedROI?: GenericString;
    /**
     * The currency code Amazon Web Services used to generate the recommendations and present potential savings.
     */
    CurrencyCode?: GenericString;
    /**
     * The cost of the recommended Savings Plans over the length of the lookback period.
     */
    EstimatedSPCost?: GenericString;
    /**
     * The remaining On-Demand cost estimated to not be covered by the recommended Savings Plans, over the length of the lookback period.
     */
    EstimatedOnDemandCost?: GenericString;
    /**
     *  The estimated On-Demand costs you would expect with no additional commitment, based on your usage of the selected time period and the Savings Plans you own. 
     */
    EstimatedOnDemandCostWithCurrentCommitment?: GenericString;
    /**
     * The estimated savings amount based on the recommended Savings Plans over the length of the lookback period.
     */
    EstimatedSavingsAmount?: GenericString;
    /**
     * The estimated savings percentage relative to the total cost of applicable On-Demand usage over the lookback period.
     */
    EstimatedSavingsPercentage?: GenericString;
    /**
     * The recommended hourly commitment level for the Savings Plans type, and configuration based on the usage during the lookback period.
     */
    HourlyCommitmentToPurchase?: GenericString;
    /**
     * The estimated utilization of the recommended Savings Plans.
     */
    EstimatedAverageUtilization?: GenericString;
    /**
     * The estimated monthly savings amount, based on the recommended Savings Plans.
     */
    EstimatedMonthlySavingsAmount?: GenericString;
    /**
     * The lowest value of hourly On-Demand spend over the lookback period of the applicable usage type.
     */
    CurrentMinimumHourlyOnDemandSpend?: GenericString;
    /**
     * The highest value of hourly On-Demand spend over the lookback period of the applicable usage type.
     */
    CurrentMaximumHourlyOnDemandSpend?: GenericString;
    /**
     * The average value of hourly On-Demand spend over the lookback period of the applicable usage type.
     */
    CurrentAverageHourlyOnDemandSpend?: GenericString;
  }
  export type SavingsPlansPurchaseRecommendationDetailList = SavingsPlansPurchaseRecommendationDetail[];
  export interface SavingsPlansPurchaseRecommendationMetadata {
    /**
     * The unique identifier for the recommendation set.
     */
    RecommendationId?: GenericString;
    /**
     * The timestamp showing when the recommendations were generated.
     */
    GenerationTimestamp?: GenericString;
  }
  export interface SavingsPlansPurchaseRecommendationSummary {
    /**
     * The estimated return on investment based on the recommended Savings Plans and estimated savings.
     */
    EstimatedROI?: GenericString;
    /**
     * The currency code Amazon Web Services used to generate the recommendations and present potential savings.
     */
    CurrencyCode?: GenericString;
    /**
     * The estimated total cost of the usage after purchasing the recommended Savings Plans. This is a sum of the cost of Savings Plans during this term, and the remaining On-Demand usage.
     */
    EstimatedTotalCost?: GenericString;
    /**
     * The current total on demand spend of the applicable usage types over the lookback period.
     */
    CurrentOnDemandSpend?: GenericString;
    /**
     * The estimated total savings over the lookback period, based on the purchase of the recommended Savings Plans.
     */
    EstimatedSavingsAmount?: GenericString;
    /**
     * The aggregate number of Savings Plans recommendations that exist for your account.
     */
    TotalRecommendationCount?: GenericString;
    /**
     * The recommended Savings Plans cost on a daily (24 hourly) basis.
     */
    DailyCommitmentToPurchase?: GenericString;
    /**
     * The recommended hourly commitment based on the recommendation parameters.
     */
    HourlyCommitmentToPurchase?: GenericString;
    /**
     * The estimated savings relative to the total cost of On-Demand usage, over the lookback period. This is calculated as estimatedSavingsAmount/ CurrentOnDemandSpend*100.
     */
    EstimatedSavingsPercentage?: GenericString;
    /**
     * The estimated monthly savings amount, based on the recommended Savings Plans purchase.
     */
    EstimatedMonthlySavingsAmount?: GenericString;
    /**
     *  The estimated On-Demand costs you would expect with no additional commitment, based on your usage of the selected time period and the Savings Plans you own. 
     */
    EstimatedOnDemandCostWithCurrentCommitment?: GenericString;
  }
  export interface SavingsPlansSavings {
    /**
     * The savings amount that you are accumulating for the usage that is covered by a Savings Plans, when compared to the On-Demand equivalent of the same usage.
     */
    NetSavings?: GenericString;
    /**
     * How much the amount that the usage would have cost if it was accrued at the On-Demand rate.
     */
    OnDemandCostEquivalent?: GenericString;
  }
  export interface SavingsPlansUtilization {
    /**
     * The total amount of Savings Plans commitment that's been purchased in an account (or set of accounts).
     */
    TotalCommitment?: GenericString;
    /**
     * The amount of your Savings Plans commitment that was consumed from Savings Plans eligible usage in a specific period.
     */
    UsedCommitment?: GenericString;
    /**
     * The amount of your Savings Plans commitment that was not consumed from Savings Plans eligible usage in a specific period.
     */
    UnusedCommitment?: GenericString;
    /**
     * The amount of UsedCommitment divided by the TotalCommitment for your Savings Plans.
     */
    UtilizationPercentage?: GenericString;
  }
  export interface SavingsPlansUtilizationAggregates {
    /**
     * A ratio of your effectiveness of using existing Savings Plans to apply to workloads that are Savings Plans eligible.
     */
    Utilization: SavingsPlansUtilization;
    /**
     * The amount saved by using existing Savings Plans. Savings returns both net savings from Savings Plans, as well as the onDemandCostEquivalent of the Savings Plans when considering the utilization rate.
     */
    Savings?: SavingsPlansSavings;
    /**
     * The total amortized commitment for a Savings Plans. This includes the sum of the upfront and recurring Savings Plans fees.
     */
    AmortizedCommitment?: SavingsPlansAmortizedCommitment;
  }
  export interface SavingsPlansUtilizationByTime {
    TimePeriod: DateInterval;
    /**
     * A ratio of your effectiveness of using existing Savings Plans to apply to workloads that are Savings Plans eligible.
     */
    Utilization: SavingsPlansUtilization;
    /**
     * The amount saved by using existing Savings Plans. Savings returns both net savings from Savings Plans as well as the onDemandCostEquivalent of the Savings Plans when considering the utilization rate.
     */
    Savings?: SavingsPlansSavings;
    /**
     * The total amortized commitment for a Savings Plans. This includes the sum of the upfront and recurring Savings Plans fees.
     */
    AmortizedCommitment?: SavingsPlansAmortizedCommitment;
  }
  export interface SavingsPlansUtilizationDetail {
    /**
     * The unique Amazon Resource Name (ARN) for a particular Savings Plan.
     */
    SavingsPlanArn?: SavingsPlanArn;
    /**
     * The attribute that applies to a specific Dimension.
     */
    Attributes?: Attributes;
    /**
     * A ratio of your effectiveness of using existing Savings Plans to apply to workloads that are Savings Plans eligible.
     */
    Utilization?: SavingsPlansUtilization;
    /**
     * The amount saved by using existing Savings Plans. Savings returns both net savings from savings plans as well as the onDemandCostEquivalent of the Savings Plans when considering the utilization rate.
     */
    Savings?: SavingsPlansSavings;
    /**
     * The total amortized commitment for a Savings Plans. Includes the sum of the upfront and recurring Savings Plans fees.
     */
    AmortizedCommitment?: SavingsPlansAmortizedCommitment;
  }
  export type SavingsPlansUtilizationDetails = SavingsPlansUtilizationDetail[];
  export type SavingsPlansUtilizationsByTime = SavingsPlansUtilizationByTime[];
  export type SearchString = string;
  export interface ServiceSpecification {
    /**
     * The Amazon EC2 hardware specifications that you want AWS to provide recommendations for.
     */
    EC2Specification?: EC2Specification;
  }
  export type SupportedSavingsPlansType = "COMPUTE_SP"|"EC2_INSTANCE_SP"|string;
  export type TagKey = string;
  export type TagList = Entity[];
  export interface TagValues {
    /**
     * The key for the tag.
     */
    Key?: TagKey;
    /**
     * The specific value of the tag.
     */
    Values?: Values;
  }
  export type TagValuesList = TagValues[];
  export interface TargetInstance {
    /**
     *  Expected cost to operate this instance type on a monthly basis.
     */
    EstimatedMonthlyCost?: GenericString;
    /**
     *  Estimated savings resulting from modification, on a monthly basis.
     */
    EstimatedMonthlySavings?: GenericString;
    /**
     *  The currency code that Amazon Web Services used to calculate the costs for this instance.
     */
    CurrencyCode?: GenericString;
    /**
     *  Indicates whether or not this recommendation is the defaulted Amazon Web Services recommendation.
     */
    DefaultTargetInstance?: GenericBoolean;
    /**
     *  Details on the target instance type. 
     */
    ResourceDetails?: ResourceDetails;
    /**
     *  Expected utilization metrics for target instance type.
     */
    ExpectedResourceUtilization?: ResourceUtilization;
  }
  export type TargetInstancesList = TargetInstance[];
  export type TermInYears = "ONE_YEAR"|"THREE_YEARS"|string;
  export interface TerminateRecommendationDetail {
    /**
     *  Estimated savings resulting from modification, on a monthly basis.
     */
    EstimatedMonthlySavings?: GenericString;
    /**
     *  The currency code that Amazon Web Services used to calculate the costs for this instance.
     */
    CurrencyCode?: GenericString;
  }
  export type TotalActualHours = string;
  export type TotalActualUnits = string;
  export type TotalAmortizedFee = string;
  export type TotalPotentialRISavings = string;
  export type TotalRunningHours = string;
  export type TotalRunningNormalizedUnits = string;
  export type UnusedHours = string;
  export type UnusedUnits = string;
  export interface UpdateCostCategoryDefinitionRequest {
    /**
     * The unique identifier for your Cost Category.
     */
    CostCategoryArn: Arn;
    RuleVersion: CostCategoryRuleVersion;
    /**
     *  UpdateCostCategoryDefinition supports dimensions, Tags, and nested expressions. Currently the only dimensions supported is LINKED_ACCOUNT. Root level OR is not supported. We recommend you create a separate rule instead. Rules are processed in order. If there are multiple rules that match the line item, then the first rule to match is used to determine that Cost Category value. 
     */
    Rules: CostCategoryRulesList;
  }
  export interface UpdateCostCategoryDefinitionResponse {
    /**
     *  The unique identifier for your Cost Category. 
     */
    CostCategoryArn?: Arn;
    /**
     *  The Cost Category's effective start date. 
     */
    EffectiveStart?: ZonedDateTime;
  }
  export interface UtilizationByTime {
    /**
     * The period of time that this utilization was used for.
     */
    TimePeriod?: DateInterval;
    /**
     * The groups that this utilization result uses.
     */
    Groups?: ReservationUtilizationGroups;
    /**
     * The total number of reservation hours that were used.
     */
    Total?: ReservationAggregates;
  }
  export type UtilizationPercentage = string;
  export type UtilizationPercentageInUnits = string;
  export type UtilizationsByTime = UtilizationByTime[];
  export type Value = string;
  export type Values = Value[];
  export type YearMonthDay = string;
  export type ZonedDateTime = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-10-25"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the CostExplorer client.
   */
  export import Types = CostExplorer;
}
export = CostExplorer;
