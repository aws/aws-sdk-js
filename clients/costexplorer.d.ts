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
   * Retrieve cost and usage metrics for your account. You can specify which cost and usage-related metric, such as BlendedCosts or UsageQuantity, that you want the request to return. You can also filter and group your data by various dimensions, such as AWS Service or AvailabilityZone, in a specific time range. See the GetDimensionValues action for a complete list of the valid dimensions. Master accounts in an organization have access to all member accounts.
   */
  getCostAndUsage(params: CostExplorer.Types.GetCostAndUsageRequest, callback?: (err: AWSError, data: CostExplorer.Types.GetCostAndUsageResponse) => void): Request<CostExplorer.Types.GetCostAndUsageResponse, AWSError>;
  /**
   * Retrieve cost and usage metrics for your account. You can specify which cost and usage-related metric, such as BlendedCosts or UsageQuantity, that you want the request to return. You can also filter and group your data by various dimensions, such as AWS Service or AvailabilityZone, in a specific time range. See the GetDimensionValues action for a complete list of the valid dimensions. Master accounts in an organization have access to all member accounts.
   */
  getCostAndUsage(callback?: (err: AWSError, data: CostExplorer.Types.GetCostAndUsageResponse) => void): Request<CostExplorer.Types.GetCostAndUsageResponse, AWSError>;
  /**
   * You can use GetDimensionValues to retrieve all available filter values for a specific filter over a period of time. You can search the dimension values for an arbitrary string. 
   */
  getDimensionValues(params: CostExplorer.Types.GetDimensionValuesRequest, callback?: (err: AWSError, data: CostExplorer.Types.GetDimensionValuesResponse) => void): Request<CostExplorer.Types.GetDimensionValuesResponse, AWSError>;
  /**
   * You can use GetDimensionValues to retrieve all available filter values for a specific filter over a period of time. You can search the dimension values for an arbitrary string. 
   */
  getDimensionValues(callback?: (err: AWSError, data: CostExplorer.Types.GetDimensionValuesResponse) => void): Request<CostExplorer.Types.GetDimensionValuesResponse, AWSError>;
  /**
   * You can retrieve the Reservation utilization for your account. Master accounts in an organization have access to their associated member accounts. You can filter data by dimensions in a time period. You can use GetDimensionValues to determine the possible dimension values. Currently, you can group only by SUBSCRIPTION_ID. 
   */
  getReservationUtilization(params: CostExplorer.Types.GetReservationUtilizationRequest, callback?: (err: AWSError, data: CostExplorer.Types.GetReservationUtilizationResponse) => void): Request<CostExplorer.Types.GetReservationUtilizationResponse, AWSError>;
  /**
   * You can retrieve the Reservation utilization for your account. Master accounts in an organization have access to their associated member accounts. You can filter data by dimensions in a time period. You can use GetDimensionValues to determine the possible dimension values. Currently, you can group only by SUBSCRIPTION_ID. 
   */
  getReservationUtilization(callback?: (err: AWSError, data: CostExplorer.Types.GetReservationUtilizationResponse) => void): Request<CostExplorer.Types.GetReservationUtilizationResponse, AWSError>;
  /**
   * You can query for available tag keys and tag values for a specified period. You can search the tag values for an arbitrary string. 
   */
  getTags(params: CostExplorer.Types.GetTagsRequest, callback?: (err: AWSError, data: CostExplorer.Types.GetTagsResponse) => void): Request<CostExplorer.Types.GetTagsResponse, AWSError>;
  /**
   * You can query for available tag keys and tag values for a specified period. You can search the tag values for an arbitrary string. 
   */
  getTags(callback?: (err: AWSError, data: CostExplorer.Types.GetTagsResponse) => void): Request<CostExplorer.Types.GetTagsResponse, AWSError>;
}
declare namespace CostExplorer {
  export type AttributeType = string;
  export type AttributeValue = string;
  export type Attributes = {[key: string]: AttributeValue};
  export type Context = "COST_AND_USAGE"|"RESERVATIONS"|string;
  export interface DateInterval {
    /**
     * The beginning of the time period that you want the usage and costs for. The start date is inclusive. For example, if start is 2017-01-01, then the cost and usage data is retrieved starting at 2017-01-01 up to the end date.
     */
    Start: YearMonthDay;
    /**
     * The end of the time period that you want the usage and costs for. The end date is exclusive. For example, if the end is 2017-05-01, then the cost and usage data is retrieved from the start date but not including 2017-05-01.
     */
    End: YearMonthDay;
  }
  export type Dimension = "AZ"|"INSTANCE_TYPE"|"LINKED_ACCOUNT"|"OPERATION"|"PURCHASE_TYPE"|"REGION"|"SERVICE"|"USAGE_TYPE"|"USAGE_TYPE_GROUP"|"RECORD_TYPE"|"OPERATING_SYSTEM"|"TENANCY"|"SCOPE"|"PLATFORM"|"SUBSCRIPTION_ID"|string;
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
  export type Entity = string;
  export type ErrorMessage = string;
  export type Estimated = boolean;
  export interface Expression {
    /**
     * Return results that match either Dimension.
     */
    Or?: Expressions;
    /**
     * Return results that match both Dimension objects.
     */
    And?: Expressions;
    /**
     * Return results that don't match Dimension.
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
  export interface GetCostAndUsageRequest {
    /**
     * Sets the start and end dates for retrieving AWS costs. The start date is inclusive, but the end date is exclusive. For example, if start is 2017-01-01 and end is 2017-05-01, then the cost and usage data is retrieved from 2017-01-01 up to and including 2017-04-30 but not including 2017-05-01.
     */
    TimePeriod?: DateInterval;
    /**
     * Sets the AWS cost granularity to MONTHLY or DAILY.
     */
    Granularity?: Granularity;
    /**
     * Filters AWS costs by different dimensions. For example, you can specify Service and Linked Account and get the costs associated with that account's usage of that service. You can nest Expression objects to define any combination of dimension filters. For more information, see the Expression object or More Examples. 
     */
    Filter?: Expression;
    /**
     * Which metrics are returned in the query. For more information about blended and unblended rates, see https://aws.amazon.com/premiumsupport/knowledge-center/blended-rates-intro/.  Valid values are BlendedCost, UnblendedCost, and UsageQuantity.  If you return the UsageQuantity metric, the service aggregates all usage numbers without taking into account the units. For example, if you aggregate usageQuantity across all of EC2, the results aren't meaningful because EC2 compute hours and data transfer are measured in different units (for example, hours vs. GB). To get more meaningful UsageQuantity metrics, filter by UsageType or UsageTypeGroups.  
     */
    Metrics?: MetricNames;
    /**
     * You can group AWS costs using up to two different groups, either dimensions, tag keys, or both. When you group by tag key, you get all tag values, including empty strings. Valid values are: AZ, INSTANCE_TYPE, LINKED_ACCCOUNT, OPERATION, PURCHASE_TYPE, SERVICE, USAGE_TYPE, TAGS, and PLATFORM.
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
     * The groups specified by the the Filter or GroupBy parameters in the request.
     */
    GroupDefinitions?: GroupDefinitions;
    /**
     * The time period covered by the results in the response.
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
     * The name of the dimension. Different Dimensionsare available for different Contexts. For more information, see Context.
     */
    Dimension: Dimension;
    /**
     * The context for the call to GetDimensionValues. This can be RESERVED_INSTANCE or COST_AND_USAGE. The default value is COST_AND_USAGE. If the context is set to RESERVED_INSTANCE, the resulting dimension values can be used in the GetReservationUtilization action. If the context is set to COST_AND_USAGE, , the resulting dimension values can be used in the GetCostAndUsage operation. If you set the context to CostAndUsage, you can use the following dimensions for searching:   AZ - The Availability Zone. An example is us-east-1a.   InstanceType - The type of EC2 instance. An example is m4.xlarge.   LinkedAccount - The description in the attribute map that includes the full name of the member account. The value field contains the AWS ID of the member account   Operation - The action performed. Examples include RunInstance and CreateBucket.   PurchaseType - The reservation type of the purchase to which this usage is related. Examples include: On Demand Instances and Standard Reserved Instances   Service - The AWS service such as DynamoDB.   UsageType -The type of usage. An example is DataTransfer-In-Bytes. The response for the GetDimensionValues action includes a unit attribute, examples of which include GB and Hrs.   UsageTypeGroup - The grouping of common usage types. An example is EC2: CloudWatch – Alarms. The response for this action includes a unit attribute.   RecordType - The different types of charges such as RI fees, usage costs, tax refunds, and credits   If you set the context to ReservedInstance, you can use the following dimensions for searching:   AZ - The Availability Zone. An example is us-east-1a.   InstanceType - The type of EC2 instance. An example is m4.xlarge.   LinkedAccount - The description in the attribute map that includes the full name of the member account. The value field contains the AWS ID of the member account   Platform - The operating system. Examples are Windows or Linux.   Region - The AWS region.   Scope - The scope of a reserved instance (RI). Values are regional or a single availability zone.   Tenancy - The tenancy of a resource. Examples are shared or dedicated.  
     */
    Context?: Context;
    /**
     * The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.
     */
    NextPageToken?: NextPageToken;
  }
  export interface GetDimensionValuesResponse {
    /**
     * The filters that you used to filter your request. Some dimensions are available only for a specific context: If you set the context to CostAndUsage, you can use the following dimensions for searching:   AZ - The Availability Zone. An example is us-east-1a.   InstanceType - The type of EC2 instance. An example is m4.xlarge.   LinkedAccount - The description in the attribute map that includes the full name of the member account. The value field contains the AWS ID of the member account   Operation - The action performed. Examples include RunInstance and CreateBucket.   PurchaseType - The reservation type of the purchase to which this usage is related. Examples include: On Demand Instances and Standard Reserved Instances   Service - The AWS service such as DynamoDB.   UsageType -The type of usage. An example is DataTransfer-In-Bytes. The response for the GetDimensionValues action includes a unit attribute, examples of which include GB and Hrs.   UsageTypeGroup - The grouping of common usage types. An example is EC2: CloudWatch – Alarms. The response for this action includes a unit attribute.   RecordType - The different types of charges such as RI fees, usage costs, tax refunds, and credits   If you set the context to ReservedInstance, you can use the following dimensions for searching:   AZ - The Availability Zone. An example is us-east-1a.   InstanceType - The type of EC2 instance. An example is m4.xlarge.   LinkedAccount - The description in the attribute map that includes the full name of the member account. The value field contains the AWS ID of the member account   Platform - The operating system. Examples are Windows or Linux.   Region - The AWS region.   Scope - The scope of a reserved instance (RI). Values are regional or a single availability zone.   Tenancy - The tenancy of a resource. Examples are shared or dedicated.  
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
  export interface GetReservationUtilizationRequest {
    /**
     * Sets the start and end dates for retrieving reserve instance (RI) utilization. The start date is inclusive, but the end date is exclusive. For example, if start is 2017-01-01 and end is 2017-05-01, then the cost and usage data is retrieved from 2017-01-01 up to and including 2017-04-30 but not including 2017-05-01. 
     */
    TimePeriod: DateInterval;
    /**
     * Groups only by SubscriptionId. Metadata is included.
     */
    GroupBy?: GroupDefinitions;
    /**
     * Sets the AWS cost granularity to MONTHLY or DAILY. If both GroupBy and granularity are not set, GetReservationUtilization defaults to DAILY. If GroupBy is set, Granularity can't be set, and the response object doesn't include MONTHLY or DAILY granularity.
     */
    Granularity?: Granularity;
    /**
     * Filters utilization data by using different dimensions. GetReservationUtilization uses the same Expression object as the other operations, but only AND is supported among each dimension, and nesting is supported up to only one level deep. If there are multiple values for a dimension, they are OR'd together.
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
     * The keys included in this group.
     */
    Keys?: Keys;
    /**
     * The metrics included in this group.
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
  export type Key = string;
  export type Keys = Key[];
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
  export type NextPageToken = string;
  export type PageSize = number;
  export type PurchasedHours = string;
  export interface ReservationAggregates {
    /**
     * The percentage of RI time that you used.
     */
    UtilizationPercentage?: UtilizationPercentage;
    /**
     * How many RI hours you purchased.
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
  }
  export type ReservationGroupKey = string;
  export type ReservationGroupValue = string;
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
     * Whether or not this result is estimated.
     */
    Estimated?: Estimated;
  }
  export type ResultsByTime = ResultByTime[];
  export type SearchString = string;
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
  export type TotalActualHours = string;
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
