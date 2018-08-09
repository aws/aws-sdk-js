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
   * Retrieves cost and usage metrics for your account. You can specify which cost and usage-related metric, such as BlendedCosts or UsageQuantity, that you want the request to return. You can also filter and group your data by various dimensions, such as SERVICE or AZ, in a specific time range. For a complete list of valid dimensions, see the  GetDimensionValues  operation. Master accounts in an organization in AWS Organizations have access to all member accounts.
   */
  getCostAndUsage(params: CostExplorer.Types.GetCostAndUsageRequest, callback?: (err: AWSError, data: CostExplorer.Types.GetCostAndUsageResponse) => void): Request<CostExplorer.Types.GetCostAndUsageResponse, AWSError>;
  /**
   * Retrieves cost and usage metrics for your account. You can specify which cost and usage-related metric, such as BlendedCosts or UsageQuantity, that you want the request to return. You can also filter and group your data by various dimensions, such as SERVICE or AZ, in a specific time range. For a complete list of valid dimensions, see the  GetDimensionValues  operation. Master accounts in an organization in AWS Organizations have access to all member accounts.
   */
  getCostAndUsage(callback?: (err: AWSError, data: CostExplorer.Types.GetCostAndUsageResponse) => void): Request<CostExplorer.Types.GetCostAndUsageResponse, AWSError>;
  /**
   * Retrieves all available filter values for a specified filter over a period of time. You can search the dimension values for an arbitrary string. 
   */
  getDimensionValues(params: CostExplorer.Types.GetDimensionValuesRequest, callback?: (err: AWSError, data: CostExplorer.Types.GetDimensionValuesResponse) => void): Request<CostExplorer.Types.GetDimensionValuesResponse, AWSError>;
  /**
   * Retrieves all available filter values for a specified filter over a period of time. You can search the dimension values for an arbitrary string. 
   */
  getDimensionValues(callback?: (err: AWSError, data: CostExplorer.Types.GetDimensionValuesResponse) => void): Request<CostExplorer.Types.GetDimensionValuesResponse, AWSError>;
  /**
   * Retrieves the reservation coverage for your account. This allows you to see how much of your Amazon Elastic Compute Cloud, Amazon ElastiCache, Amazon Relational Database Service, or Amazon Redshift usage is covered by a reservation. An organization's master account can see the coverage of the associated member accounts. For any time period, you can filter data about reservation usage by the following dimensions:   AZ   CACHE_ENGINE   DATABASE_ENGINE   DEPLOYMENT_OPTION   INSTANCE_TYPE   LINKED_ACCOUNT   OPERATING_SYSTEM   PLATFORM   REGION   SERVICE   TAG   TENANCY   To determine valid values for a dimension, use the GetDimensionValues operation. 
   */
  getReservationCoverage(params: CostExplorer.Types.GetReservationCoverageRequest, callback?: (err: AWSError, data: CostExplorer.Types.GetReservationCoverageResponse) => void): Request<CostExplorer.Types.GetReservationCoverageResponse, AWSError>;
  /**
   * Retrieves the reservation coverage for your account. This allows you to see how much of your Amazon Elastic Compute Cloud, Amazon ElastiCache, Amazon Relational Database Service, or Amazon Redshift usage is covered by a reservation. An organization's master account can see the coverage of the associated member accounts. For any time period, you can filter data about reservation usage by the following dimensions:   AZ   CACHE_ENGINE   DATABASE_ENGINE   DEPLOYMENT_OPTION   INSTANCE_TYPE   LINKED_ACCOUNT   OPERATING_SYSTEM   PLATFORM   REGION   SERVICE   TAG   TENANCY   To determine valid values for a dimension, use the GetDimensionValues operation. 
   */
  getReservationCoverage(callback?: (err: AWSError, data: CostExplorer.Types.GetReservationCoverageResponse) => void): Request<CostExplorer.Types.GetReservationCoverageResponse, AWSError>;
  /**
   * Gets recommendations for which reservations to purchase. These recommendations could help you reduce your costs. Reservations provide a discounted hourly rate (up to 75%) compared to On-Demand pricing. AWS generates your recommendations by identifying your On-Demand usage during a specific time period and collecting your usage into categories that are eligible for a reservation. After AWS has these categories, it simulates every combination of reservations in each category of usage to identify the best number of each type of RI to purchase to maximize your estimated savings.  For example, AWS automatically aggregates your EC2 Linux, shared tenancy, and c4 family usage in the US West (Oregon) Region and recommends that you buy size-flexible regional reservations to apply to the c4 family usage. AWS recommends the smallest size instance in an instance family. This makes it easier to purchase a size-flexible RI. AWS also shows the equal number of normalized units so that you can purchase any instance size that you want. For this example, your RI recommendation would be for c4.large, because that is the smallest size instance in the c4 instance family.
   */
  getReservationPurchaseRecommendation(params: CostExplorer.Types.GetReservationPurchaseRecommendationRequest, callback?: (err: AWSError, data: CostExplorer.Types.GetReservationPurchaseRecommendationResponse) => void): Request<CostExplorer.Types.GetReservationPurchaseRecommendationResponse, AWSError>;
  /**
   * Gets recommendations for which reservations to purchase. These recommendations could help you reduce your costs. Reservations provide a discounted hourly rate (up to 75%) compared to On-Demand pricing. AWS generates your recommendations by identifying your On-Demand usage during a specific time period and collecting your usage into categories that are eligible for a reservation. After AWS has these categories, it simulates every combination of reservations in each category of usage to identify the best number of each type of RI to purchase to maximize your estimated savings.  For example, AWS automatically aggregates your EC2 Linux, shared tenancy, and c4 family usage in the US West (Oregon) Region and recommends that you buy size-flexible regional reservations to apply to the c4 family usage. AWS recommends the smallest size instance in an instance family. This makes it easier to purchase a size-flexible RI. AWS also shows the equal number of normalized units so that you can purchase any instance size that you want. For this example, your RI recommendation would be for c4.large, because that is the smallest size instance in the c4 instance family.
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
   * Queries for available tag keys and tag values for a specified period. You can search the tag values for an arbitrary string. 
   */
  getTags(params: CostExplorer.Types.GetTagsRequest, callback?: (err: AWSError, data: CostExplorer.Types.GetTagsResponse) => void): Request<CostExplorer.Types.GetTagsResponse, AWSError>;
  /**
   * Queries for available tag keys and tag values for a specified period. You can search the tag values for an arbitrary string. 
   */
  getTags(callback?: (err: AWSError, data: CostExplorer.Types.GetTagsResponse) => void): Request<CostExplorer.Types.GetTagsResponse, AWSError>;
}
declare namespace CostExplorer {
  export type AccountScope = "PAYER"|"LINKED"|string;
  export type AmortizedRecurringFee = string;
  export type AmortizedUpfrontFee = string;
  export type AttributeType = string;
  export type AttributeValue = string;
  export type Attributes = {[key: string]: AttributeValue};
  export type Context = "COST_AND_USAGE"|"RESERVATIONS"|string;
  export interface Coverage {
    /**
     * The amount of instance usage that a reservation covered, in hours.
     */
    CoverageHours?: CoverageHours;
  }
  export interface CoverageByTime {
    /**
     * The period over which this coverage was used.
     */
    TimePeriod?: DateInterval;
    /**
     * The groups of instances that are covered by a reservation.
     */
    Groups?: ReservationCoverageGroups;
    /**
     * The total reservation coverage, in hours.
     */
    Total?: Coverage;
  }
  export interface CoverageHours {
    /**
     * The number of instance running hours that are covered by On-Demand Instances.
     */
    OnDemandHours?: OnDemandHours;
    /**
     * The number of instance running hours that are covered by reservations.
     */
    ReservedHours?: ReservedHours;
    /**
     * The total instance usage, in hours.
     */
    TotalRunningHours?: TotalRunningHours;
    /**
     * The percentage of instance hours that are covered by a reservation.
     */
    CoverageHoursPercentage?: CoverageHoursPercentage;
  }
  export type CoverageHoursPercentage = string;
  export type CoveragesByTime = CoverageByTime[];
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
  export type Dimension = "AZ"|"INSTANCE_TYPE"|"LINKED_ACCOUNT"|"OPERATION"|"PURCHASE_TYPE"|"REGION"|"SERVICE"|"USAGE_TYPE"|"USAGE_TYPE_GROUP"|"RECORD_TYPE"|"OPERATING_SYSTEM"|"TENANCY"|"SCOPE"|"PLATFORM"|"SUBSCRIPTION_ID"|"LEGAL_ENTITY_NAME"|"DEPLOYMENT_OPTION"|"DATABASE_ENGINE"|"CACHE_ENGINE"|"INSTANCE_TYPE_FAMILY"|string;
  export interface DimensionValues {
    /**
     * The names of the metadata types that you can use to filter and group your results. For example, AZ returns a list of Availability Zones.
     */
    Key?: Dimension;
    /**
     * The metadata values that you can use to filter and group your results. You can use GetDimensionValues to find specific values.
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
     * Whether the recommendation is for a current generation instance. 
     */
    CurrentGeneration?: GenericBoolean;
    /**
     * Whether the recommended reservation is size flexible.
     */
    SizeFlexEligible?: GenericBoolean;
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
     * Whether the recommendation is for a current generation instance.
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
  }
  export type Expressions = Expression[];
  export type GenericBoolean = boolean;
  export type GenericString = string;
  export interface GetCostAndUsageRequest {
    /**
     * Sets the start and end dates for retrieving AWS costs. The start date is inclusive, but the end date is exclusive. For example, if start is 2017-01-01 and end is 2017-05-01, then the cost and usage data is retrieved from 2017-01-01 up to and including 2017-04-30 but not including 2017-05-01.
     */
    TimePeriod?: DateInterval;
    /**
     * Sets the AWS cost granularity to MONTHLY or DAILY. If Granularity isn't set, the response object doesn't include the Granularity, either MONTHLY or DAILY. 
     */
    Granularity?: Granularity;
    /**
     * Filters AWS costs by different dimensions. For example, you can specify SERVICE and LINKED_ACCOUNT and get the costs that are associated with that account's usage of that service. You can nest Expression objects to define any combination of dimension filters. For more information, see Expression. 
     */
    Filter?: Expression;
    /**
     * Which metrics are returned in the query. For more information about blended and unblended rates, see Why does the "blended" annotation appear on some line items in my bill?.  Valid values are AmortizedCost, BlendedCost, UnblendedCost, and UsageQuantity.  If you return the UsageQuantity metric, the service aggregates all usage numbers without taking into account the units. For example, if you aggregate usageQuantity across all of EC2, the results aren't meaningful because EC2 compute hours and data transfer are measured in different units (for example, hours vs. GB). To get more meaningful UsageQuantity metrics, filter by UsageType or UsageTypeGroups.    Metrics is required for GetCostAndUsage requests.
     */
    Metrics?: MetricNames;
    /**
     * You can group AWS costs using up to two different groups, either dimensions, tag keys, or both. When you group by tag key, you get all tag values, including empty strings. Valid values are AZ, INSTANCE_TYPE, LEGAL_ENTITY_NAME, LINKED_ACCOUNT, OPERATION, PLATFORM, PURCHASE_TYPE, SERVICE, TAGS, TENANCY, and USAGE_TYPE.
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
     * The name of the dimension. Each Dimension is available for different a Context. For more information, see Context.
     */
    Dimension: Dimension;
    /**
     * The context for the call to GetDimensionValues. This can be RESERVATIONS or COST_AND_USAGE. The default value is COST_AND_USAGE. If the context is set to RESERVATIONS, the resulting dimension values can be used in the GetReservationUtilization operation. If the context is set to COST_AND_USAGE the resulting dimension values can be used in the GetCostAndUsage operation. If you set the context to COST_AND_USAGE, you can use the following dimensions for searching:   AZ - The Availability Zone. An example is us-east-1a.   DATABASE_ENGINE - The Amazon Relational Database Service database. Examples are Aurora or MySQL.   INSTANCE_TYPE - The type of EC2 instance. An example is m4.xlarge.   LEGAL_ENTITY_NAME - The name of the organization that sells you AWS services, such as Amazon Web Services.   LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value field contains the AWS ID of the member account.   OPERATING_SYSTEM - The operating system. Examples are Windows or Linux.   OPERATION - The action performed. Examples include RunInstance and CreateBucket.   PLATFORM - The EC2 operating system. Examples are Windows or Linux.   PURCHASE_TYPE - The reservation type of the purchase to which this usage is related. Examples include On-Demand Instances and Standard Reserved Instances.   SERVICE - The AWS service such as Amazon DynamoDB.   USAGE_TYPE - The type of usage. An example is DataTransfer-In-Bytes. The response for the GetDimensionValues operation includes a unit attribute. Examples include GB and Hrs.   USAGE_TYPE_GROUP - The grouping of common usage types. An example is EC2: CloudWatch – Alarms. The response for this operation includes a unit attribute.   RECORD_TYPE - The different types of charges such as RI fees, usage costs, tax refunds, and credits.   If you set the context to RESERVATIONS, you can use the following dimensions for searching:   AZ - The Availability Zone. An example is us-east-1a.   CACHE_ENGINE - The Amazon ElastiCache operating system. Examples are Windows or Linux.   DEPLOYMENT_OPTION - The scope of Amazon Relational Database Service deployments. Valid values are SingleAZ and MultiAZ.   INSTANCE_TYPE - The type of EC2 instance. An example is m4.xlarge.   LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value field contains the AWS ID of the member account.   PLATFORM - The EC2 operating system. Examples are Windows or Linux.   REGION - The AWS Region.   SCOPE (Utilization only) - The scope of a Reserved Instance (RI). Values are regional or a single Availability Zone.   TAG (Coverage only) - The tags that are associated with a Reserved Instance (RI).   TENANCY - The tenancy of a resource. Examples are shared or dedicated.  
     */
    Context?: Context;
    /**
     * The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.
     */
    NextPageToken?: NextPageToken;
  }
  export interface GetDimensionValuesResponse {
    /**
     * The filters that you used to filter your request. Some dimensions are available only for a specific context: If you set the context to COST_AND_USAGE, you can use the following dimensions for searching:   AZ - The Availability Zone. An example is us-east-1a.   DATABASE_ENGINE - The Amazon Relational Database Service database. Examples are Aurora or MySQL.   INSTANCE_TYPE - The type of EC2 instance. An example is m4.xlarge.   LEGAL_ENTITY_NAME - The name of the organization that sells you AWS services, such as Amazon Web Services.   LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value field contains the AWS ID of the member account.   OPERATING_SYSTEM - The operating system. Examples are Windows or Linux.   OPERATION - The action performed. Examples include RunInstance and CreateBucket.   PLATFORM - The EC2 operating system. Examples are Windows or Linux.   PURCHASE_TYPE - The reservation type of the purchase to which this usage is related. Examples include On-Demand Instances and Standard Reserved Instances.   SERVICE - The AWS service such as Amazon DynamoDB.   USAGE_TYPE - The type of usage. An example is DataTransfer-In-Bytes. The response for the GetDimensionValues operation includes a unit attribute. Examples include GB and Hrs.   USAGE_TYPE_GROUP - The grouping of common usage types. An example is EC2: CloudWatch – Alarms. The response for this operation includes a unit attribute.   RECORD_TYPE - The different types of charges such as RI fees, usage costs, tax refunds, and credits.   If you set the context to RESERVATIONS, you can use the following dimensions for searching:   AZ - The Availability Zone. An example is us-east-1a.   CACHE_ENGINE - The Amazon ElastiCache operating system. Examples are Windows or Linux.   DEPLOYMENT_OPTION - The scope of Amazon Relational Database Service deployments. Valid values are SingleAZ and MultiAZ.   INSTANCE_TYPE - The type of EC2 instance. An example is m4.xlarge.   LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value field contains the AWS ID of the member account.   PLATFORM - The EC2 operating system. Examples are Windows or Linux.   REGION - The AWS Region.   SCOPE (Utilization only) - The scope of a Reserved Instance (RI). Values are regional or a single Availability Zone.   TAG (Coverage only) - The tags that are associated with a Reserved Instance (RI).   TENANCY - The tenancy of a resource. Examples are shared or dedicated.  
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
     * The start and end dates of the period for which you want to retrieve data about reservation coverage. You can retrieve data for a maximum of 13 months: the last 12 months and the current month. The start date is inclusive, but the end date is exclusive. For example, if start is 2017-01-01 and end is 2017-05-01, then the cost and usage data is retrieved from 2017-01-01 up to and including 2017-04-30 but not including 2017-05-01. 
     */
    TimePeriod: DateInterval;
    /**
     * You can group the data by the following attributes:   AZ   CACHE_ENGINE   DATABASE_ENGINE   DEPLOYMENT_OPTION   INSTANCE_TYPE   LINKED_ACCOUNT   OPERATING_SYSTEM   PLATFORM   REGION   TAG   TENANCY  
     */
    GroupBy?: GroupDefinitions;
    /**
     * The granularity of the AWS cost data for the reservation. Valid values are MONTHLY and DAILY. If GroupBy is set, Granularity can't be set. If Granularity isn't set, the response object doesn't include Granularity, either MONTHLY or DAILY.
     */
    Granularity?: Granularity;
    /**
     * Filters utilization data by dimensions. You can filter by the following dimensions:   AZ   CACHE_ENGINE   DATABASE_ENGINE   DEPLOYMENT_OPTION   INSTANCE_TYPE   LINKED_ACCOUNT   OPERATING_SYSTEM   PLATFORM   REGION   SERVICE   TAG   TENANCY    GetReservationCoverage uses the same  Expression  object as the other operations, but only AND is supported among each dimension. You can nest only one level deep. If there are multiple values for a dimension, they are OR'd together. If you don't provide a SERVICE filter, Cost Explorer defaults to EC2.
     */
    Filter?: Expression;
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
     * The total amount of instance usage that is covered by a reservation.
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
     * The hardware specifications for the service instances that you want recommendations for, such as standard or convertible EC2 instances.
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
     * Sets the start and end dates for retrieving Reserved Instance (RI) utilization. The start date is inclusive, but the end date is exclusive. For example, if start is 2017-01-01 and end is 2017-05-01, then the cost and usage data is retrieved from 2017-01-01 up to and including 2017-04-30 but not including 2017-05-01. 
     */
    TimePeriod: DateInterval;
    /**
     * Groups only by SUBSCRIPTION_ID. Metadata is included.
     */
    GroupBy?: GroupDefinitions;
    /**
     * If GroupBy is set, Granularity can't be set. If Granularity isn't set, the response object doesn't include Granularity, either MONTHLY or DAILY. If both GroupBy and Granularity aren't set, GetReservationUtilization defaults to DAILY.
     */
    Granularity?: Granularity;
    /**
     * Filters utilization data by dimensions. You can filter by the following dimensions:   AZ   CACHE_ENGINE   DATABASE_ENGINE   DEPLOYMENT_OPTION   INSTANCE_TYPE   LINKED_ACCOUNT   OPERATING_SYSTEM   PLATFORM   REGION   SERVICE   SCOPE   TENANCY    GetReservationUtilization uses the same  Expression  object as the other operations, but only AND is supported among each dimension, and nesting is supported up to only one level deep. If there are multiple values for a dimension, they are OR'd together.
     */
    Filter?: Expression;
    /**
     * The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.
     */
    NextPageToken?: NextPageToken;
  }
  export interface GetReservationUtilizationResponse {
    /**
     * The amount of time that you utilized your RIs.
     */
    UtilizationsByTime: UtilizationsByTime;
    /**
     * The total amount of time that you utilized your RIs.
     */
    Total?: ReservationAggregates;
    /**
     * The token for the next set of retrievable results. AWS provides the token when the response from a previous call has more results than the maximum page size.
     */
    NextPageToken?: NextPageToken;
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
  export type Granularity = "DAILY"|"MONTHLY"|string;
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
  export type GroupDefinitionType = "DIMENSION"|"TAG"|string;
  export type GroupDefinitions = GroupDefinition[];
  export type Groups = Group[];
  export interface InstanceDetails {
    /**
     * The EC2 instances that AWS recommends that you purchase.
     */
    EC2InstanceDetails?: EC2InstanceDetails;
    /**
     * The RDS instances that AWS recommends that you purchase.
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
  export type LookbackPeriodInDays = "SEVEN_DAYS"|"THIRTY_DAYS"|"SIXTY_DAYS"|string;
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
  export type NetRISavings = string;
  export type NextPageToken = string;
  export type NonNegativeInteger = number;
  export type OfferingClass = "STANDARD"|"CONVERTIBLE"|string;
  export type OnDemandCostOfRIHoursUsed = string;
  export type OnDemandHours = string;
  export type PageSize = number;
  export type PaymentOption = "NO_UPFRONT"|"PARTIAL_UPFRONT"|"ALL_UPFRONT"|"LIGHT_UTILIZATION"|"MEDIUM_UTILIZATION"|"HEAVY_UTILIZATION"|string;
  export type PurchasedHours = string;
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
     * Whether the recommendation is for a current generation instance. 
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
     * Whether the recommendation is for a current generation instance.
     */
    CurrentGeneration?: GenericBoolean;
    /**
     * Whether the recommended reservation is size flexible.
     */
    SizeFlexEligible?: GenericBoolean;
  }
  export interface ReservationAggregates {
    /**
     * The percentage of RI time that you used.
     */
    UtilizationPercentage?: UtilizationPercentage;
    /**
     * How many RI hours that you purchased.
     */
    PurchasedHours?: PurchasedHours;
    /**
     * The total number of RI hours that you used.
     */
    TotalActualHours?: TotalActualHours;
    /**
     * The number of RI hours that you didn't use.
     */
    UnusedHours?: UnusedHours;
    /**
     * How much your RIs would cost if charged On-Demand rates.
     */
    OnDemandCostOfRIHoursUsed?: OnDemandCostOfRIHoursUsed;
    /**
     * How much you saved due to purchasing and utilizing RIs. AWS calculates this by subtracting TotalAmortizedFee from OnDemandCostOfRIHoursUsed.
     */
    NetRISavings?: NetRISavings;
    /**
     * How much you could save if you use your entire reservation.
     */
    TotalPotentialRISavings?: TotalPotentialRISavings;
    /**
     * The upfront cost of your RI, amortized over the RI period.
     */
    AmortizedUpfrontFee?: AmortizedUpfrontFee;
    /**
     * The monthly cost of your RI, amortized over the RI period.
     */
    AmortizedRecurringFee?: AmortizedRecurringFee;
    /**
     * The total cost of your RI, amortized over the RI period.
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
     * The minimum number of hours that you used in an hour during the historical period. AWS uses this to calculate your recommended reservation purchases.
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
     * How much AWS estimates that you would have spent for all usage during the specified historical period if you had had a reservation.
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
     * The key for a specific RI attribute.
     */
    Key?: ReservationGroupKey;
    /**
     * The value of a specific RI attribute.
     */
    Value?: ReservationGroupValue;
    /**
     * The attributes for this group of RIs.
     */
    Attributes?: Attributes;
    /**
     * How much you used this group of RIs.
     */
    Utilization?: ReservationAggregates;
  }
  export type ReservationUtilizationGroups = ReservationUtilizationGroup[];
  export type ReservedHours = string;
  export interface ResultByTime {
    /**
     * The time period covered by a result.
     */
    TimePeriod?: DateInterval;
    /**
     * The total amount of cost or usage accrued during the time period.
     */
    Total?: Metrics;
    /**
     * The groups that are included in this time period.
     */
    Groups?: Groups;
    /**
     * Whether this result is estimated.
     */
    Estimated?: Estimated;
  }
  export type ResultsByTime = ResultByTime[];
  export type SearchString = string;
  export interface ServiceSpecification {
    /**
     * The EC2 hardware specifications that you want AWS to provide recommendations for.
     */
    EC2Specification?: EC2Specification;
  }
  export type TagKey = string;
  export type TagList = Entity[];
  export interface TagValues {
    /**
     * The key for a tag.
     */
    Key?: TagKey;
    /**
     * The specific value of a tag.
     */
    Values?: Values;
  }
  export type TermInYears = "ONE_YEAR"|"THREE_YEARS"|string;
  export type TotalActualHours = string;
  export type TotalAmortizedFee = string;
  export type TotalPotentialRISavings = string;
  export type TotalRunningHours = string;
  export type UnusedHours = string;
  export interface UtilizationByTime {
    /**
     * The period of time over which this utilization was used.
     */
    TimePeriod?: DateInterval;
    /**
     * The groups that are included in this utilization result.
     */
    Groups?: ReservationUtilizationGroups;
    /**
     * The total number of RI hours that were used.
     */
    Total?: ReservationAggregates;
  }
  export type UtilizationPercentage = string;
  export type UtilizationsByTime = UtilizationByTime[];
  export type Value = string;
  export type Values = Value[];
  export type YearMonthDay = string;
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
