import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class FreeTier extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: FreeTier.Types.ClientConfiguration)
  config: Config & FreeTier.Types.ClientConfiguration;
  /**
   * Returns a list of all Free Tier usage objects that match your filters.
   */
  getFreeTierUsage(params: FreeTier.Types.GetFreeTierUsageRequest, callback?: (err: AWSError, data: FreeTier.Types.GetFreeTierUsageResponse) => void): Request<FreeTier.Types.GetFreeTierUsageResponse, AWSError>;
  /**
   * Returns a list of all Free Tier usage objects that match your filters.
   */
  getFreeTierUsage(callback?: (err: AWSError, data: FreeTier.Types.GetFreeTierUsageResponse) => void): Request<FreeTier.Types.GetFreeTierUsageResponse, AWSError>;
}
declare namespace FreeTier {
  export type Dimension = "SERVICE"|"OPERATION"|"USAGE_TYPE"|"REGION"|"FREE_TIER_TYPE"|"DESCRIPTION"|"USAGE_PERCENTAGE"|string;
  export interface DimensionValues {
    /**
     * The name of the dimension that you want to filter on.
     */
    Key: Dimension;
    /**
     * The match options that you can use to filter your results. You can specify only one of these values in the array.
     */
    MatchOptions: MatchOptions;
    /**
     * The metadata values you can specify to filter upon, so that the results all match at least one of the specified values.
     */
    Values: Values;
  }
  export interface Expression {
    /**
     * Return results that match all Expressions that you specified in the array.
     */
    And?: Expressions;
    /**
     * The specific dimension, values, and match type to filter objects with.
     */
    Dimensions?: DimensionValues;
    /**
     * Return results that don’t match the Expression that you specified.
     */
    Not?: Expression;
    /**
     * Return results that match any of the Expressions that you specified. in the array.
     */
    Or?: Expressions;
  }
  export type Expressions = Expression[];
  export interface FreeTierUsage {
    /**
     * Describes the actual usage accrued month-to-day (MTD) that you've used so far.
     */
    actualUsageAmount?: GenericDouble;
    /**
     * The description of the Free Tier offer.
     */
    description?: GenericString;
    /**
     * Describes the forecasted usage by the month that you're expected to use.
     */
    forecastedUsageAmount?: GenericDouble;
    /**
     * Describes the type of the Free Tier offer. For example, the offer can be "12 Months Free", "Always Free", and "Free Trial".
     */
    freeTierType?: GenericString;
    /**
     * Describes the maximum usage allowed in Free Tier.
     */
    limit?: GenericDouble;
    /**
     * Describes usageType more granularly with the specific Amazon Web Service API operation. For example, this can be the RunInstances API operation for Amazon Elastic Compute Cloud.
     */
    operation?: GenericString;
    /**
     * Describes the Amazon Web Services Region for which this offer is applicable
     */
    region?: GenericString;
    /**
     * The name of the Amazon Web Service providing the Free Tier offer. For example, this can be Amazon Elastic Compute Cloud.
     */
    service?: GenericString;
    /**
     * Describes the unit of the usageType, such as Hrs.
     */
    unit?: GenericString;
    /**
     * Describes the usage details of the offer. For example, this might be Global-BoxUsage:freetrial.
     */
    usageType?: GenericString;
  }
  export type FreeTierUsages = FreeTierUsage[];
  export type GenericDouble = number;
  export type GenericString = string;
  export interface GetFreeTierUsageRequest {
    /**
     * An expression that specifies the conditions that you want each FreeTierUsage object to meet.
     */
    filter?: Expression;
    /**
     * The maximum number of results to return in the response. MaxResults means that there can be up to the specified number of values, but there might be fewer results based on your filters.
     */
    maxResults?: MaxResults;
    /**
     * The pagination token that indicates the next set of results to retrieve.
     */
    nextToken?: NextPageToken;
  }
  export interface GetFreeTierUsageResponse {
    /**
     * The list of Free Tier usage objects that meet your filter expression.
     */
    freeTierUsages: FreeTierUsages;
    /**
     * The pagination token that indicates the next set of results to retrieve.
     */
    nextToken?: NextPageToken;
  }
  export type MatchOption = "EQUALS"|"STARTS_WITH"|"ENDS_WITH"|"CONTAINS"|"GREATER_THAN_OR_EQUAL"|string;
  export type MatchOptions = MatchOption[];
  export type MaxResults = number;
  export type NextPageToken = string;
  export type Value = string;
  export type Values = Value[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2023-09-07"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the FreeTier client.
   */
  export import Types = FreeTier;
}
export = FreeTier;
