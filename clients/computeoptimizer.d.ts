import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class ComputeOptimizer extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ComputeOptimizer.Types.ClientConfiguration)
  config: Config & ComputeOptimizer.Types.ClientConfiguration;
  /**
   * Returns Auto Scaling group recommendations. AWS Compute Optimizer currently generates recommendations for Auto Scaling groups that are configured to run instances of the M, C, R, T, and X instance families. The service does not generate recommendations for Auto Scaling groups that have a scaling policy attached to them, or that do not have the same values for desired, minimum, and maximum capacity. In order for Compute Optimizer to analyze your Auto Scaling groups, they must be of a fixed size. For more information, see the AWS Compute Optimizer User Guide.
   */
  getAutoScalingGroupRecommendations(params: ComputeOptimizer.Types.GetAutoScalingGroupRecommendationsRequest, callback?: (err: AWSError, data: ComputeOptimizer.Types.GetAutoScalingGroupRecommendationsResponse) => void): Request<ComputeOptimizer.Types.GetAutoScalingGroupRecommendationsResponse, AWSError>;
  /**
   * Returns Auto Scaling group recommendations. AWS Compute Optimizer currently generates recommendations for Auto Scaling groups that are configured to run instances of the M, C, R, T, and X instance families. The service does not generate recommendations for Auto Scaling groups that have a scaling policy attached to them, or that do not have the same values for desired, minimum, and maximum capacity. In order for Compute Optimizer to analyze your Auto Scaling groups, they must be of a fixed size. For more information, see the AWS Compute Optimizer User Guide.
   */
  getAutoScalingGroupRecommendations(callback?: (err: AWSError, data: ComputeOptimizer.Types.GetAutoScalingGroupRecommendationsResponse) => void): Request<ComputeOptimizer.Types.GetAutoScalingGroupRecommendationsResponse, AWSError>;
  /**
   * Returns Amazon EC2 instance recommendations. AWS Compute Optimizer currently generates recommendations for Amazon Elastic Compute Cloud (Amazon EC2) and Amazon EC2 Auto Scaling. It generates recommendations for M, C, R, T, and X instance families. For more information, see the AWS Compute Optimizer User Guide.
   */
  getEC2InstanceRecommendations(params: ComputeOptimizer.Types.GetEC2InstanceRecommendationsRequest, callback?: (err: AWSError, data: ComputeOptimizer.Types.GetEC2InstanceRecommendationsResponse) => void): Request<ComputeOptimizer.Types.GetEC2InstanceRecommendationsResponse, AWSError>;
  /**
   * Returns Amazon EC2 instance recommendations. AWS Compute Optimizer currently generates recommendations for Amazon Elastic Compute Cloud (Amazon EC2) and Amazon EC2 Auto Scaling. It generates recommendations for M, C, R, T, and X instance families. For more information, see the AWS Compute Optimizer User Guide.
   */
  getEC2InstanceRecommendations(callback?: (err: AWSError, data: ComputeOptimizer.Types.GetEC2InstanceRecommendationsResponse) => void): Request<ComputeOptimizer.Types.GetEC2InstanceRecommendationsResponse, AWSError>;
  /**
   * Returns the projected utilization metrics of Amazon EC2 instance recommendations.
   */
  getEC2RecommendationProjectedMetrics(params: ComputeOptimizer.Types.GetEC2RecommendationProjectedMetricsRequest, callback?: (err: AWSError, data: ComputeOptimizer.Types.GetEC2RecommendationProjectedMetricsResponse) => void): Request<ComputeOptimizer.Types.GetEC2RecommendationProjectedMetricsResponse, AWSError>;
  /**
   * Returns the projected utilization metrics of Amazon EC2 instance recommendations.
   */
  getEC2RecommendationProjectedMetrics(callback?: (err: AWSError, data: ComputeOptimizer.Types.GetEC2RecommendationProjectedMetricsResponse) => void): Request<ComputeOptimizer.Types.GetEC2RecommendationProjectedMetricsResponse, AWSError>;
  /**
   * Returns the enrollment (opt in) status of an account to the AWS Compute Optimizer service. If the account is a master account of an organization, this operation also confirms the enrollment status of member accounts within the organization.
   */
  getEnrollmentStatus(params: ComputeOptimizer.Types.GetEnrollmentStatusRequest, callback?: (err: AWSError, data: ComputeOptimizer.Types.GetEnrollmentStatusResponse) => void): Request<ComputeOptimizer.Types.GetEnrollmentStatusResponse, AWSError>;
  /**
   * Returns the enrollment (opt in) status of an account to the AWS Compute Optimizer service. If the account is a master account of an organization, this operation also confirms the enrollment status of member accounts within the organization.
   */
  getEnrollmentStatus(callback?: (err: AWSError, data: ComputeOptimizer.Types.GetEnrollmentStatusResponse) => void): Request<ComputeOptimizer.Types.GetEnrollmentStatusResponse, AWSError>;
  /**
   * Returns the optimization findings for an account. For example, it returns the number of Amazon EC2 instances in an account that are under-provisioned, over-provisioned, or optimized. It also returns the number of Auto Scaling groups in an account that are not optimized, or optimized.
   */
  getRecommendationSummaries(params: ComputeOptimizer.Types.GetRecommendationSummariesRequest, callback?: (err: AWSError, data: ComputeOptimizer.Types.GetRecommendationSummariesResponse) => void): Request<ComputeOptimizer.Types.GetRecommendationSummariesResponse, AWSError>;
  /**
   * Returns the optimization findings for an account. For example, it returns the number of Amazon EC2 instances in an account that are under-provisioned, over-provisioned, or optimized. It also returns the number of Auto Scaling groups in an account that are not optimized, or optimized.
   */
  getRecommendationSummaries(callback?: (err: AWSError, data: ComputeOptimizer.Types.GetRecommendationSummariesResponse) => void): Request<ComputeOptimizer.Types.GetRecommendationSummariesResponse, AWSError>;
  /**
   * Updates the enrollment (opt in) status of an account to the AWS Compute Optimizer service. If the account is a master account of an organization, this operation can also enroll member accounts within the organization.
   */
  updateEnrollmentStatus(params: ComputeOptimizer.Types.UpdateEnrollmentStatusRequest, callback?: (err: AWSError, data: ComputeOptimizer.Types.UpdateEnrollmentStatusResponse) => void): Request<ComputeOptimizer.Types.UpdateEnrollmentStatusResponse, AWSError>;
  /**
   * Updates the enrollment (opt in) status of an account to the AWS Compute Optimizer service. If the account is a master account of an organization, this operation can also enroll member accounts within the organization.
   */
  updateEnrollmentStatus(callback?: (err: AWSError, data: ComputeOptimizer.Types.UpdateEnrollmentStatusResponse) => void): Request<ComputeOptimizer.Types.UpdateEnrollmentStatusResponse, AWSError>;
}
declare namespace ComputeOptimizer {
  export type AccountId = string;
  export type AccountIds = AccountId[];
  export type AutoScalingGroupArn = string;
  export type AutoScalingGroupArns = AutoScalingGroupArn[];
  export interface AutoScalingGroupConfiguration {
    /**
     * The desired capacity, or number of instances, for the Auto Scaling group.
     */
    desiredCapacity?: DesiredCapacity;
    /**
     * The minimum size, or minimum number of instances, for the Auto Scaling group.
     */
    minSize?: MinSize;
    /**
     * The maximum size, or maximum number of instances, for the Auto Scaling group.
     */
    maxSize?: MaxSize;
    /**
     * The instance type for the Auto Scaling group.
     */
    instanceType?: InstanceType;
  }
  export type AutoScalingGroupName = string;
  export interface AutoScalingGroupRecommendation {
    /**
     * The AWS account ID of the Auto Scaling group.
     */
    accountId?: AccountId;
    /**
     * The Amazon Resource Name (ARN) of the Auto Scaling group.
     */
    autoScalingGroupArn?: AutoScalingGroupArn;
    /**
     * The name of the Auto Scaling group.
     */
    autoScalingGroupName?: AutoScalingGroupName;
    /**
     * The finding classification for the Auto Scaling group. Findings for Auto Scaling groups include:     NotOptimized —An Auto Scaling group is considered not optimized when AWS Compute Optimizer identifies a recommendation that can provide better performance for your workload.     Optimized —An Auto Scaling group is considered optimized when Compute Optimizer determines that the group is correctly provisioned to run your workload based on the chosen instance type. For optimized resources, Compute Optimizer might recommend a new generation instance type.    The values that are returned might be NOT_OPTIMIZED or OPTIMIZED. 
     */
    finding?: Finding;
    /**
     * An array of objects that describe the utilization metrics of the Auto Scaling group.
     */
    utilizationMetrics?: UtilizationMetrics;
    /**
     * The number of days for which utilization metrics were analyzed for the Auto Scaling group.
     */
    lookBackPeriodInDays?: LookBackPeriodInDays;
    /**
     * An array of objects that describe the current configuration of the Auto Scaling group.
     */
    currentConfiguration?: AutoScalingGroupConfiguration;
    /**
     * An array of objects that describe the recommendation options for the Auto Scaling group.
     */
    recommendationOptions?: AutoScalingGroupRecommendationOptions;
    /**
     * The time stamp of when the Auto Scaling group recommendation was last refreshed.
     */
    lastRefreshTimestamp?: LastRefreshTimestamp;
  }
  export interface AutoScalingGroupRecommendationOption {
    /**
     * An array of objects that describe an Auto Scaling group configuration.
     */
    configuration?: AutoScalingGroupConfiguration;
    /**
     * An array of objects that describe the projected utilization metrics of the Auto Scaling group recommendation option.
     */
    projectedUtilizationMetrics?: ProjectedUtilizationMetrics;
    /**
     * The performance risk of the Auto Scaling group configuration recommendation. Performance risk is the likelihood of the recommended instance type not meeting the performance requirement of your workload. The lowest performance risk is categorized as 0, and the highest as 5.
     */
    performanceRisk?: PerformanceRisk;
    /**
     * The rank of the Auto Scaling group recommendation option. The top recommendation option is ranked as 1.
     */
    rank?: Rank;
  }
  export type AutoScalingGroupRecommendationOptions = AutoScalingGroupRecommendationOption[];
  export type AutoScalingGroupRecommendations = AutoScalingGroupRecommendation[];
  export type Code = string;
  export type CurrentInstanceType = string;
  export type DesiredCapacity = number;
  export interface Filter {
    /**
     * The name of the filter. Specify Finding to filter the results to a specific findings classification. Specify RecommendationSourceType to filter the results to a specific resource type.
     */
    name?: FilterName;
    /**
     * The value of the filter. If you specify the name parameter as Finding, and you're recommendations for an instance, then the valid values are Underprovisioned, Overprovisioned, NotOptimized, or Optimized. If you specify the name parameter as Finding, and you're recommendations for an Auto Scaling group, then the valid values are Optimized, or NotOptimized. If you specify the name parameter as RecommendationSourceType, then the valid values are EC2Instance, or AutoScalingGroup.
     */
    values?: FilterValues;
  }
  export type FilterName = "Finding"|"RecommendationSourceType"|string;
  export type FilterValue = string;
  export type FilterValues = FilterValue[];
  export type Filters = Filter[];
  export type Finding = "Underprovisioned"|"Overprovisioned"|"Optimized"|"NotOptimized"|string;
  export interface GetAutoScalingGroupRecommendationsRequest {
    /**
     * The AWS account IDs for which to return Auto Scaling group recommendations. Only one account ID can be specified per request.
     */
    accountIds?: AccountIds;
    /**
     * The Amazon Resource Name (ARN) of the Auto Scaling groups for which to return recommendations.
     */
    autoScalingGroupArns?: AutoScalingGroupArns;
    /**
     * The token to advance to the next page of Auto Scaling group recommendations.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of Auto Scaling group recommendations to return with a single call. To retrieve the remaining results, make another call with the returned NextToken value.
     */
    maxResults?: MaxResults;
    /**
     * An array of objects that describe a filter that returns a more specific list of Auto Scaling group recommendations.
     */
    filters?: Filters;
  }
  export interface GetAutoScalingGroupRecommendationsResponse {
    /**
     * The token to use to advance to the next page of Auto Scaling group recommendations. This value is null when there are no more pages of Auto Scaling group recommendations to return.
     */
    nextToken?: NextToken;
    /**
     * An array of objects that describe Auto Scaling group recommendations.
     */
    autoScalingGroupRecommendations?: AutoScalingGroupRecommendations;
    /**
     * An array of objects that describe errors of the request. For example, an error is returned if you request recommendations for an unsupported Auto Scaling group.
     */
    errors?: GetRecommendationErrors;
  }
  export interface GetEC2InstanceRecommendationsRequest {
    /**
     * The Amazon Resource Name (ARN) of the instances for which to return recommendations.
     */
    instanceArns?: InstanceArns;
    /**
     * The token to advance to the next page of instance recommendations.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of instance recommendations to return with a single call. To retrieve the remaining results, make another call with the returned NextToken value.
     */
    maxResults?: MaxResults;
    /**
     * An array of objects that describe a filter that returns a more specific list of instance recommendations.
     */
    filters?: Filters;
    /**
     * The AWS account IDs for which to return instance recommendations. Only one account ID can be specified per request.
     */
    accountIds?: AccountIds;
  }
  export interface GetEC2InstanceRecommendationsResponse {
    /**
     * The token to use to advance to the next page of instance recommendations. This value is null when there are no more pages of instance recommendations to return.
     */
    nextToken?: NextToken;
    /**
     * An array of objects that describe instance recommendations.
     */
    instanceRecommendations?: InstanceRecommendations;
    /**
     * An array of objects that describe errors of the request. For example, an error is returned if you request recommendations for an instance of an unsupported instance family.
     */
    errors?: GetRecommendationErrors;
  }
  export interface GetEC2RecommendationProjectedMetricsRequest {
    /**
     * The Amazon Resource Name (ARN) of the instances for which to return recommendation projected metrics.
     */
    instanceArn: InstanceArn;
    /**
     * The statistic of the projected metrics.
     */
    stat: MetricStatistic;
    /**
     * The granularity, in seconds, of the projected metrics data points.
     */
    period: Period;
    /**
     * The time stamp of the first projected metrics data point to return.
     */
    startTime: Timestamp;
    /**
     * The time stamp of the last projected metrics data point to return.
     */
    endTime: Timestamp;
  }
  export interface GetEC2RecommendationProjectedMetricsResponse {
    /**
     * An array of objects that describe a projected metrics.
     */
    recommendedOptionProjectedMetrics?: RecommendedOptionProjectedMetrics;
  }
  export interface GetEnrollmentStatusRequest {
  }
  export interface GetEnrollmentStatusResponse {
    /**
     * The enrollment status of the account.
     */
    status?: Status;
    /**
     * The reason for the enrollment status of the account. For example, an account might show a status of Pending because member accounts of an organization require more time to be enrolled in the service.
     */
    statusReason?: StatusReason;
    /**
     * Confirms the enrollment status of member accounts within the organization, if the account is a master account of an organization.
     */
    memberAccountsEnrolled?: MemberAccountsEnrolled;
  }
  export interface GetRecommendationError {
    /**
     * The ID of the error.
     */
    identifier?: Identifier;
    /**
     * The error code.
     */
    code?: Code;
    /**
     * The message, or reason, for the error.
     */
    message?: Message;
  }
  export type GetRecommendationErrors = GetRecommendationError[];
  export interface GetRecommendationSummariesRequest {
    /**
     * The AWS account IDs for which to return recommendation summaries. Only one account ID can be specified per request.
     */
    accountIds?: AccountIds;
    /**
     * The token to advance to the next page of recommendation summaries.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of recommendation summaries to return with a single call. To retrieve the remaining results, make another call with the returned NextToken value.
     */
    maxResults?: MaxResults;
  }
  export interface GetRecommendationSummariesResponse {
    /**
     * The token to use to advance to the next page of recommendation summaries. This value is null when there are no more pages of recommendation summaries to return.
     */
    nextToken?: NextToken;
    /**
     * An array of objects that summarize a recommendation.
     */
    recommendationSummaries?: RecommendationSummaries;
  }
  export type Identifier = string;
  export type IncludeMemberAccounts = boolean;
  export type InstanceArn = string;
  export type InstanceArns = InstanceArn[];
  export type InstanceName = string;
  export interface InstanceRecommendation {
    /**
     * The Amazon Resource Name (ARN) of the current instance.
     */
    instanceArn?: InstanceArn;
    /**
     * The AWS account ID of the instance recommendation.
     */
    accountId?: AccountId;
    /**
     * The name of the current instance.
     */
    instanceName?: InstanceName;
    /**
     * The instance type of the current instance.
     */
    currentInstanceType?: CurrentInstanceType;
    /**
     * The finding classification for the instance. Findings for instances include:     Underprovisioned —An instance is considered under-provisioned when at least one specification of your instance, such as CPU, memory, or network, does not meet the performance requirements of your workload. Under-provisioned instances may lead to poor application performance.     Overprovisioned —An instance is considered over-provisioned when at least one specification of your instance, such as CPU, memory, or network, can be sized down while still meeting the performance requirements of your workload, and no specification is under-provisioned. Over-provisioned instances may lead to unnecessary infrastructure cost.     Optimized —An instance is considered optimized when all specifications of your instance, such as CPU, memory, and network, meet the performance requirements of your workload and is not over provisioned. An optimized instance runs your workloads with optimal performance and infrastructure cost. For optimized resources, AWS Compute Optimizer might recommend a new generation instance type.    The values that are returned might be UNDER_PROVISIONED, OVER_PROVISIONED, or OPTIMIZED. 
     */
    finding?: Finding;
    /**
     * An array of objects that describe the utilization metrics of the instance.
     */
    utilizationMetrics?: UtilizationMetrics;
    /**
     * The number of days for which utilization metrics were analyzed for the instance.
     */
    lookBackPeriodInDays?: LookBackPeriodInDays;
    /**
     * An array of objects that describe the recommendation options for the instance.
     */
    recommendationOptions?: RecommendationOptions;
    /**
     * An array of objects that describe the source resource of the recommendation.
     */
    recommendationSources?: RecommendationSources;
    /**
     * The time stamp of when the instance recommendation was last refreshed.
     */
    lastRefreshTimestamp?: LastRefreshTimestamp;
  }
  export interface InstanceRecommendationOption {
    /**
     * The instance type of the instance recommendation.
     */
    instanceType?: InstanceType;
    /**
     * An array of objects that describe the projected utilization metrics of the instance recommendation option.
     */
    projectedUtilizationMetrics?: ProjectedUtilizationMetrics;
    /**
     * The performance risk of the instance recommendation option. Performance risk is the likelihood of the recommended instance type not meeting the performance requirement of your workload. The lowest performance risk is categorized as 0, and the highest as 5.
     */
    performanceRisk?: PerformanceRisk;
    /**
     * The rank of the instance recommendation option. The top recommendation option is ranked as 1.
     */
    rank?: Rank;
  }
  export type InstanceRecommendations = InstanceRecommendation[];
  export type InstanceType = string;
  export type LastRefreshTimestamp = Date;
  export type LookBackPeriodInDays = number;
  export type MaxResults = number;
  export type MaxSize = number;
  export type MemberAccountsEnrolled = boolean;
  export type Message = string;
  export type MetricName = "Cpu"|"Memory"|string;
  export type MetricStatistic = "Maximum"|"Average"|string;
  export type MetricValue = number;
  export type MetricValues = MetricValue[];
  export type MinSize = number;
  export type NextToken = string;
  export type PerformanceRisk = number;
  export type Period = number;
  export interface ProjectedMetric {
    /**
     * The name of the projected utilization metric.  Memory metrics are only returned for resources that have the unified CloudWatch agent installed on them. For more information, see Enabling Memory Utilization with the CloudWatch Agent. 
     */
    name?: MetricName;
    /**
     * The time stamps of the projected utilization metric.
     */
    timestamps?: Timestamps;
    /**
     * The values of the projected utilization metrics.
     */
    values?: MetricValues;
  }
  export type ProjectedMetrics = ProjectedMetric[];
  export type ProjectedUtilizationMetrics = UtilizationMetric[];
  export type Rank = number;
  export type RecommendationOptions = InstanceRecommendationOption[];
  export interface RecommendationSource {
    /**
     * The Amazon Resource Name (ARN) of the recommendation source.
     */
    recommendationSourceArn?: RecommendationSourceArn;
    /**
     * The resource type of the recommendation source.
     */
    recommendationSourceType?: RecommendationSourceType;
  }
  export type RecommendationSourceArn = string;
  export type RecommendationSourceType = "Ec2Instance"|"AutoScalingGroup"|string;
  export type RecommendationSources = RecommendationSource[];
  export type RecommendationSummaries = RecommendationSummary[];
  export interface RecommendationSummary {
    /**
     * An array of objects that describe a recommendation summary.
     */
    summaries?: Summaries;
    /**
     * The resource type of the recommendation.
     */
    recommendationResourceType?: RecommendationSourceType;
    /**
     * The AWS account ID of the recommendation summary.
     */
    accountId?: AccountId;
  }
  export type RecommendedInstanceType = string;
  export interface RecommendedOptionProjectedMetric {
    /**
     * The recommended instance type.
     */
    recommendedInstanceType?: RecommendedInstanceType;
    /**
     * The rank of the recommendation option projected metric. The top recommendation option is ranked as 1. The projected metric rank correlates to the recommendation option rank. For example, the projected metric ranked as 1 is related to the recommendation option that is also ranked as 1 in the same response.
     */
    rank?: Rank;
    /**
     * An array of objects that describe a projected utilization metric.
     */
    projectedMetrics?: ProjectedMetrics;
  }
  export type RecommendedOptionProjectedMetrics = RecommendedOptionProjectedMetric[];
  export type Status = "Active"|"Inactive"|"Pending"|"Failed"|string;
  export type StatusReason = string;
  export type Summaries = Summary[];
  export interface Summary {
    /**
     * The finding classification of the recommendation.
     */
    name?: Finding;
    /**
     * The value of the recommendation summary.
     */
    value?: SummaryValue;
  }
  export type SummaryValue = number;
  export type Timestamp = Date;
  export type Timestamps = Timestamp[];
  export interface UpdateEnrollmentStatusRequest {
    /**
     * The new enrollment status of the account. Accepted options are Active or Inactive. You will get an error if Pending or Failed are specified.
     */
    status: Status;
    /**
     * Indicates whether to enroll member accounts within the organization, if the account is a master account of an organization.
     */
    includeMemberAccounts?: IncludeMemberAccounts;
  }
  export interface UpdateEnrollmentStatusResponse {
    /**
     * The enrollment status of the account.
     */
    status?: Status;
    /**
     * The reason for the enrollment status of the account. For example, an account might show a status of Pending because member accounts of an organization require more time to be enrolled in the service.
     */
    statusReason?: StatusReason;
  }
  export interface UtilizationMetric {
    /**
     * The name of the utilization metric.  Memory metrics are only returned for resources that have the unified CloudWatch agent installed on them. For more information, see Enabling Memory Utilization with the CloudWatch Agent. 
     */
    name?: MetricName;
    /**
     * The statistic of the utilization metric.
     */
    statistic?: MetricStatistic;
    /**
     * The value of the utilization metric.
     */
    value?: MetricValue;
  }
  export type UtilizationMetrics = UtilizationMetric[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2019-11-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the ComputeOptimizer client.
   */
  export import Types = ComputeOptimizer;
}
export = ComputeOptimizer;
