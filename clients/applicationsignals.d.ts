import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class ApplicationSignals extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ApplicationSignals.Types.ClientConfiguration)
  config: Config & ApplicationSignals.Types.ClientConfiguration;
  /**
   * Use this operation to retrieve one or more service level objective (SLO) budget reports. An error budget is the amount of time or requests in an unhealthy state that your service can accumulate during an interval before your overall SLO budget health is breached and the SLO is considered to be unmet. For example, an SLO with a threshold of 99.95% and a monthly interval translates to an error budget of 21.9 minutes of downtime in a 30-day month. Budget reports include a health indicator, the attainment value, and remaining budget. For more information about SLO error budgets, see  SLO concepts.
   */
  batchGetServiceLevelObjectiveBudgetReport(params: ApplicationSignals.Types.BatchGetServiceLevelObjectiveBudgetReportInput, callback?: (err: AWSError, data: ApplicationSignals.Types.BatchGetServiceLevelObjectiveBudgetReportOutput) => void): Request<ApplicationSignals.Types.BatchGetServiceLevelObjectiveBudgetReportOutput, AWSError>;
  /**
   * Use this operation to retrieve one or more service level objective (SLO) budget reports. An error budget is the amount of time or requests in an unhealthy state that your service can accumulate during an interval before your overall SLO budget health is breached and the SLO is considered to be unmet. For example, an SLO with a threshold of 99.95% and a monthly interval translates to an error budget of 21.9 minutes of downtime in a 30-day month. Budget reports include a health indicator, the attainment value, and remaining budget. For more information about SLO error budgets, see  SLO concepts.
   */
  batchGetServiceLevelObjectiveBudgetReport(callback?: (err: AWSError, data: ApplicationSignals.Types.BatchGetServiceLevelObjectiveBudgetReportOutput) => void): Request<ApplicationSignals.Types.BatchGetServiceLevelObjectiveBudgetReportOutput, AWSError>;
  /**
   * Creates a service level objective (SLO), which can help you ensure that your critical business operations are meeting customer expectations. Use SLOs to set and track specific target levels for the reliability and availability of your applications and services. SLOs use service level indicators (SLIs) to calculate whether the application is performing at the level that you want. Create an SLO to set a target for a service or operation’s availability or latency. CloudWatch measures this target frequently you can find whether it has been breached.  The target performance quality that is defined for an SLO is the attainment goal. You can set SLO targets for your applications that are discovered by Application Signals, using critical metrics such as latency and availability. You can also set SLOs against any CloudWatch metric or math expression that produces a time series. When you create an SLO, you specify whether it is a period-based SLO or a request-based SLO. Each type of SLO has a different way of evaluating your application's performance against its attainment goal.   A period-based SLO uses defined periods of time within a specified total time interval. For each period of time, Application Signals determines whether the application met its goal. The attainment rate is calculated as the number of good periods/number of total periods. For example, for a period-based SLO, meeting an attainment goal of 99.9% means that within your interval, your application must meet its performance goal during at least 99.9% of the time periods.   A request-based SLO doesn't use pre-defined periods of time. Instead, the SLO measures number of good requests/number of total requests during the interval. At any time, you can find the ratio of good requests to total requests for the interval up to the time stamp that you specify, and measure that ratio against the goal set in your SLO.   After you have created an SLO, you can retrieve error budget reports for it. An error budget is the amount of time or amount of requests that your application can be non-compliant with the SLO's goal, and still have your application meet the goal.   For a period-based SLO, the error budget starts at a number defined by the highest number of periods that can fail to meet the threshold, while still meeting the overall goal. The remaining error budget decreases with every failed period that is recorded. The error budget within one interval can never increase. For example, an SLO with a threshold that 99.95% of requests must be completed under 2000ms every month translates to an error budget of 21.9 minutes of downtime per month.   For a request-based SLO, the remaining error budget is dynamic and can increase or decrease, depending on the ratio of good requests to total requests.   For more information about SLOs, see  Service level objectives (SLOs).  When you perform a CreateServiceLevelObjective operation, Application Signals creates the AWSServiceRoleForCloudWatchApplicationSignals service-linked role, if it doesn't already exist in your account. This service- linked role has the following permissions:    xray:GetServiceGraph     logs:StartQuery     logs:GetQueryResults     cloudwatch:GetMetricData     cloudwatch:ListMetrics     tag:GetResources     autoscaling:DescribeAutoScalingGroups   
   */
  createServiceLevelObjective(params: ApplicationSignals.Types.CreateServiceLevelObjectiveInput, callback?: (err: AWSError, data: ApplicationSignals.Types.CreateServiceLevelObjectiveOutput) => void): Request<ApplicationSignals.Types.CreateServiceLevelObjectiveOutput, AWSError>;
  /**
   * Creates a service level objective (SLO), which can help you ensure that your critical business operations are meeting customer expectations. Use SLOs to set and track specific target levels for the reliability and availability of your applications and services. SLOs use service level indicators (SLIs) to calculate whether the application is performing at the level that you want. Create an SLO to set a target for a service or operation’s availability or latency. CloudWatch measures this target frequently you can find whether it has been breached.  The target performance quality that is defined for an SLO is the attainment goal. You can set SLO targets for your applications that are discovered by Application Signals, using critical metrics such as latency and availability. You can also set SLOs against any CloudWatch metric or math expression that produces a time series. When you create an SLO, you specify whether it is a period-based SLO or a request-based SLO. Each type of SLO has a different way of evaluating your application's performance against its attainment goal.   A period-based SLO uses defined periods of time within a specified total time interval. For each period of time, Application Signals determines whether the application met its goal. The attainment rate is calculated as the number of good periods/number of total periods. For example, for a period-based SLO, meeting an attainment goal of 99.9% means that within your interval, your application must meet its performance goal during at least 99.9% of the time periods.   A request-based SLO doesn't use pre-defined periods of time. Instead, the SLO measures number of good requests/number of total requests during the interval. At any time, you can find the ratio of good requests to total requests for the interval up to the time stamp that you specify, and measure that ratio against the goal set in your SLO.   After you have created an SLO, you can retrieve error budget reports for it. An error budget is the amount of time or amount of requests that your application can be non-compliant with the SLO's goal, and still have your application meet the goal.   For a period-based SLO, the error budget starts at a number defined by the highest number of periods that can fail to meet the threshold, while still meeting the overall goal. The remaining error budget decreases with every failed period that is recorded. The error budget within one interval can never increase. For example, an SLO with a threshold that 99.95% of requests must be completed under 2000ms every month translates to an error budget of 21.9 minutes of downtime per month.   For a request-based SLO, the remaining error budget is dynamic and can increase or decrease, depending on the ratio of good requests to total requests.   For more information about SLOs, see  Service level objectives (SLOs).  When you perform a CreateServiceLevelObjective operation, Application Signals creates the AWSServiceRoleForCloudWatchApplicationSignals service-linked role, if it doesn't already exist in your account. This service- linked role has the following permissions:    xray:GetServiceGraph     logs:StartQuery     logs:GetQueryResults     cloudwatch:GetMetricData     cloudwatch:ListMetrics     tag:GetResources     autoscaling:DescribeAutoScalingGroups   
   */
  createServiceLevelObjective(callback?: (err: AWSError, data: ApplicationSignals.Types.CreateServiceLevelObjectiveOutput) => void): Request<ApplicationSignals.Types.CreateServiceLevelObjectiveOutput, AWSError>;
  /**
   * Deletes the specified service level objective.
   */
  deleteServiceLevelObjective(params: ApplicationSignals.Types.DeleteServiceLevelObjectiveInput, callback?: (err: AWSError, data: ApplicationSignals.Types.DeleteServiceLevelObjectiveOutput) => void): Request<ApplicationSignals.Types.DeleteServiceLevelObjectiveOutput, AWSError>;
  /**
   * Deletes the specified service level objective.
   */
  deleteServiceLevelObjective(callback?: (err: AWSError, data: ApplicationSignals.Types.DeleteServiceLevelObjectiveOutput) => void): Request<ApplicationSignals.Types.DeleteServiceLevelObjectiveOutput, AWSError>;
  /**
   * Returns information about a service discovered by Application Signals.
   */
  getService(params: ApplicationSignals.Types.GetServiceInput, callback?: (err: AWSError, data: ApplicationSignals.Types.GetServiceOutput) => void): Request<ApplicationSignals.Types.GetServiceOutput, AWSError>;
  /**
   * Returns information about a service discovered by Application Signals.
   */
  getService(callback?: (err: AWSError, data: ApplicationSignals.Types.GetServiceOutput) => void): Request<ApplicationSignals.Types.GetServiceOutput, AWSError>;
  /**
   * Returns information about one SLO created in the account. 
   */
  getServiceLevelObjective(params: ApplicationSignals.Types.GetServiceLevelObjectiveInput, callback?: (err: AWSError, data: ApplicationSignals.Types.GetServiceLevelObjectiveOutput) => void): Request<ApplicationSignals.Types.GetServiceLevelObjectiveOutput, AWSError>;
  /**
   * Returns information about one SLO created in the account. 
   */
  getServiceLevelObjective(callback?: (err: AWSError, data: ApplicationSignals.Types.GetServiceLevelObjectiveOutput) => void): Request<ApplicationSignals.Types.GetServiceLevelObjectiveOutput, AWSError>;
  /**
   * Returns a list of service dependencies of the service that you specify. A dependency is an infrastructure component that an operation of this service connects with. Dependencies can include Amazon Web Services services, Amazon Web Services resources, and third-party services. 
   */
  listServiceDependencies(params: ApplicationSignals.Types.ListServiceDependenciesInput, callback?: (err: AWSError, data: ApplicationSignals.Types.ListServiceDependenciesOutput) => void): Request<ApplicationSignals.Types.ListServiceDependenciesOutput, AWSError>;
  /**
   * Returns a list of service dependencies of the service that you specify. A dependency is an infrastructure component that an operation of this service connects with. Dependencies can include Amazon Web Services services, Amazon Web Services resources, and third-party services. 
   */
  listServiceDependencies(callback?: (err: AWSError, data: ApplicationSignals.Types.ListServiceDependenciesOutput) => void): Request<ApplicationSignals.Types.ListServiceDependenciesOutput, AWSError>;
  /**
   * Returns the list of dependents that invoked the specified service during the provided time range. Dependents include other services, CloudWatch Synthetics canaries, and clients that are instrumented with CloudWatch RUM app monitors.
   */
  listServiceDependents(params: ApplicationSignals.Types.ListServiceDependentsInput, callback?: (err: AWSError, data: ApplicationSignals.Types.ListServiceDependentsOutput) => void): Request<ApplicationSignals.Types.ListServiceDependentsOutput, AWSError>;
  /**
   * Returns the list of dependents that invoked the specified service during the provided time range. Dependents include other services, CloudWatch Synthetics canaries, and clients that are instrumented with CloudWatch RUM app monitors.
   */
  listServiceDependents(callback?: (err: AWSError, data: ApplicationSignals.Types.ListServiceDependentsOutput) => void): Request<ApplicationSignals.Types.ListServiceDependentsOutput, AWSError>;
  /**
   * Returns a list of SLOs created in this account.
   */
  listServiceLevelObjectives(params: ApplicationSignals.Types.ListServiceLevelObjectivesInput, callback?: (err: AWSError, data: ApplicationSignals.Types.ListServiceLevelObjectivesOutput) => void): Request<ApplicationSignals.Types.ListServiceLevelObjectivesOutput, AWSError>;
  /**
   * Returns a list of SLOs created in this account.
   */
  listServiceLevelObjectives(callback?: (err: AWSError, data: ApplicationSignals.Types.ListServiceLevelObjectivesOutput) => void): Request<ApplicationSignals.Types.ListServiceLevelObjectivesOutput, AWSError>;
  /**
   * Returns a list of the operations of this service that have been discovered by Application Signals. Only the operations that were invoked during the specified time range are returned.
   */
  listServiceOperations(params: ApplicationSignals.Types.ListServiceOperationsInput, callback?: (err: AWSError, data: ApplicationSignals.Types.ListServiceOperationsOutput) => void): Request<ApplicationSignals.Types.ListServiceOperationsOutput, AWSError>;
  /**
   * Returns a list of the operations of this service that have been discovered by Application Signals. Only the operations that were invoked during the specified time range are returned.
   */
  listServiceOperations(callback?: (err: AWSError, data: ApplicationSignals.Types.ListServiceOperationsOutput) => void): Request<ApplicationSignals.Types.ListServiceOperationsOutput, AWSError>;
  /**
   * Returns a list of services that have been discovered by Application Signals. A service represents a minimum logical and transactional unit that completes a business function. Services are discovered through Application Signals instrumentation.
   */
  listServices(params: ApplicationSignals.Types.ListServicesInput, callback?: (err: AWSError, data: ApplicationSignals.Types.ListServicesOutput) => void): Request<ApplicationSignals.Types.ListServicesOutput, AWSError>;
  /**
   * Returns a list of services that have been discovered by Application Signals. A service represents a minimum logical and transactional unit that completes a business function. Services are discovered through Application Signals instrumentation.
   */
  listServices(callback?: (err: AWSError, data: ApplicationSignals.Types.ListServicesOutput) => void): Request<ApplicationSignals.Types.ListServicesOutput, AWSError>;
  /**
   * Displays the tags associated with a CloudWatch resource. Tags can be assigned to service level objectives.
   */
  listTagsForResource(params: ApplicationSignals.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: ApplicationSignals.Types.ListTagsForResourceResponse) => void): Request<ApplicationSignals.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Displays the tags associated with a CloudWatch resource. Tags can be assigned to service level objectives.
   */
  listTagsForResource(callback?: (err: AWSError, data: ApplicationSignals.Types.ListTagsForResourceResponse) => void): Request<ApplicationSignals.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Enables this Amazon Web Services account to be able to use CloudWatch Application Signals by creating the AWSServiceRoleForCloudWatchApplicationSignals service-linked role. This service- linked role has the following permissions:    xray:GetServiceGraph     logs:StartQuery     logs:GetQueryResults     cloudwatch:GetMetricData     cloudwatch:ListMetrics     tag:GetResources     autoscaling:DescribeAutoScalingGroups    After completing this step, you still need to instrument your Java and Python applications to send data to Application Signals. For more information, see  Enabling Application Signals.
   */
  startDiscovery(params: ApplicationSignals.Types.StartDiscoveryInput, callback?: (err: AWSError, data: ApplicationSignals.Types.StartDiscoveryOutput) => void): Request<ApplicationSignals.Types.StartDiscoveryOutput, AWSError>;
  /**
   * Enables this Amazon Web Services account to be able to use CloudWatch Application Signals by creating the AWSServiceRoleForCloudWatchApplicationSignals service-linked role. This service- linked role has the following permissions:    xray:GetServiceGraph     logs:StartQuery     logs:GetQueryResults     cloudwatch:GetMetricData     cloudwatch:ListMetrics     tag:GetResources     autoscaling:DescribeAutoScalingGroups    After completing this step, you still need to instrument your Java and Python applications to send data to Application Signals. For more information, see  Enabling Application Signals.
   */
  startDiscovery(callback?: (err: AWSError, data: ApplicationSignals.Types.StartDiscoveryOutput) => void): Request<ApplicationSignals.Types.StartDiscoveryOutput, AWSError>;
  /**
   * Assigns one or more tags (key-value pairs) to the specified CloudWatch resource, such as a service level objective. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters. You can use the TagResource action with an alarm that already has tags. If you specify a new tag key for the alarm, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the alarm, the new tag value that you specify replaces the previous value for that tag. You can associate as many as 50 tags with a CloudWatch resource.
   */
  tagResource(params: ApplicationSignals.Types.TagResourceRequest, callback?: (err: AWSError, data: ApplicationSignals.Types.TagResourceResponse) => void): Request<ApplicationSignals.Types.TagResourceResponse, AWSError>;
  /**
   * Assigns one or more tags (key-value pairs) to the specified CloudWatch resource, such as a service level objective. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters. You can use the TagResource action with an alarm that already has tags. If you specify a new tag key for the alarm, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the alarm, the new tag value that you specify replaces the previous value for that tag. You can associate as many as 50 tags with a CloudWatch resource.
   */
  tagResource(callback?: (err: AWSError, data: ApplicationSignals.Types.TagResourceResponse) => void): Request<ApplicationSignals.Types.TagResourceResponse, AWSError>;
  /**
   * Removes one or more tags from the specified resource.
   */
  untagResource(params: ApplicationSignals.Types.UntagResourceRequest, callback?: (err: AWSError, data: ApplicationSignals.Types.UntagResourceResponse) => void): Request<ApplicationSignals.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes one or more tags from the specified resource.
   */
  untagResource(callback?: (err: AWSError, data: ApplicationSignals.Types.UntagResourceResponse) => void): Request<ApplicationSignals.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates an existing service level objective (SLO). If you omit parameters, the previous values of those parameters are retained.  You cannot change from a period-based SLO to a request-based SLO, or change from a request-based SLO to a period-based SLO.
   */
  updateServiceLevelObjective(params: ApplicationSignals.Types.UpdateServiceLevelObjectiveInput, callback?: (err: AWSError, data: ApplicationSignals.Types.UpdateServiceLevelObjectiveOutput) => void): Request<ApplicationSignals.Types.UpdateServiceLevelObjectiveOutput, AWSError>;
  /**
   * Updates an existing service level objective (SLO). If you omit parameters, the previous values of those parameters are retained.  You cannot change from a period-based SLO to a request-based SLO, or change from a request-based SLO to a period-based SLO.
   */
  updateServiceLevelObjective(callback?: (err: AWSError, data: ApplicationSignals.Types.UpdateServiceLevelObjectiveOutput) => void): Request<ApplicationSignals.Types.UpdateServiceLevelObjectiveOutput, AWSError>;
}
declare namespace ApplicationSignals {
  export type AccountId = string;
  export type AmazonResourceName = string;
  export type Attainment = number;
  export type AttainmentGoal = number;
  export type AttributeMap = {[key: string]: String};
  export type AttributeMaps = AttributeMap[];
  export type Attributes = {[key: string]: KeyAttributeValue};
  export interface BatchGetServiceLevelObjectiveBudgetReportInput {
    /**
     * The date and time that you want the report to be for. It is expressed as the number of milliseconds since Jan 1, 1970 00:00:00 UTC.
     */
    Timestamp: Timestamp;
    /**
     * An array containing the IDs of the service level objectives that you want to include in the report.
     */
    SloIds: ServiceLevelObjectiveIds;
  }
  export interface BatchGetServiceLevelObjectiveBudgetReportOutput {
    /**
     * The date and time that the report is for. It is expressed as the number of milliseconds since Jan 1, 1970 00:00:00 UTC.
     */
    Timestamp: Timestamp;
    /**
     * An array of structures, where each structure is one budget report.
     */
    Reports: ServiceLevelObjectiveBudgetReports;
    /**
     * An array of structures, where each structure includes an error indicating that one of the requests in the array was not valid.
     */
    Errors: ServiceLevelObjectiveBudgetReportErrors;
  }
  export type BudgetRequestsRemaining = number;
  export type BudgetSecondsRemaining = number;
  export interface CalendarInterval {
    /**
     * The date and time when you want the first interval to start. Be sure to choose a time that configures the intervals the way that you want. For example, if you want weekly intervals starting on Mondays at 6 a.m., be sure to specify a start time that is a Monday at 6 a.m. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: 1698778057  As soon as one calendar interval ends, another automatically begins.
     */
    StartTime: Timestamp;
    /**
     * Specifies the calendar interval unit.
     */
    DurationUnit: DurationUnit;
    /**
     * Specifies the duration of each calendar interval. For example, if Duration is 1 and DurationUnit is MONTH, each interval is one month, aligned with the calendar.
     */
    Duration: CalendarIntervalDuration;
  }
  export type CalendarIntervalDuration = number;
  export interface CreateServiceLevelObjectiveInput {
    /**
     * A name for this SLO.
     */
    Name: ServiceLevelObjectiveName;
    /**
     * An optional description for this SLO.
     */
    Description?: ServiceLevelObjectiveDescription;
    /**
     * If this SLO is a period-based SLO, this structure defines the information about what performance metric this SLO will monitor. You can't specify both RequestBasedSliConfig and SliConfig in the same operation.
     */
    SliConfig?: ServiceLevelIndicatorConfig;
    /**
     * If this SLO is a request-based SLO, this structure defines the information about what performance metric this SLO will monitor. You can't specify both RequestBasedSliConfig and SliConfig in the same operation.
     */
    RequestBasedSliConfig?: RequestBasedServiceLevelIndicatorConfig;
    /**
     * This structure contains the attributes that determine the goal of the SLO.
     */
    Goal?: Goal;
    /**
     * A list of key-value pairs to associate with the SLO. You can associate as many as 50 tags with an SLO. To be able to associate tags with the SLO when you create the SLO, you must have the cloudwatch:TagResource permission. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.
     */
    Tags?: TagList;
  }
  export interface CreateServiceLevelObjectiveOutput {
    /**
     * A structure that contains information about the SLO that you just created.
     */
    Slo: ServiceLevelObjective;
  }
  export interface DeleteServiceLevelObjectiveInput {
    /**
     * The ARN or name of the service level objective to delete.
     */
    Id: ServiceLevelObjectiveId;
  }
  export interface DeleteServiceLevelObjectiveOutput {
  }
  export interface Dimension {
    /**
     * The name of the dimension. Dimension names must contain only ASCII characters, must include at least one non-whitespace character, and cannot start with a colon (:). ASCII control characters are not supported as part of dimension names.
     */
    Name: DimensionName;
    /**
     * The value of the dimension. Dimension values must contain only ASCII characters and must include at least one non-whitespace character. ASCII control characters are not supported as part of dimension values.
     */
    Value: DimensionValue;
  }
  export type DimensionName = string;
  export type DimensionValue = string;
  export type Dimensions = Dimension[];
  export type DurationUnit = "MINUTE"|"HOUR"|"DAY"|"MONTH"|string;
  export type EvaluationType = "PeriodBased"|"RequestBased"|string;
  export interface GetServiceInput {
    /**
     * The start of the time period to retrieve information about. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: 1698778057  Your requested start time will be rounded to the nearest hour.
     */
    StartTime: Timestamp;
    /**
     * The end of the time period to retrieve information about. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: 1698778057  Your requested start time will be rounded to the nearest hour.
     */
    EndTime: Timestamp;
    /**
     * Use this field to specify which service you want to retrieve information for. You must specify at least the Type, Name, and Environment attributes. This is a string-to-string map. It can include the following fields.    Type designates the type of object this is.    ResourceType specifies the type of the resource. This field is used only when the value of the Type field is Resource or AWS::Resource.    Name specifies the name of the object. This is used only if the value of the Type field is Service, RemoteService, or AWS::Service.    Identifier identifies the resource objects of this resource. This is used only if the value of the Type field is Resource or AWS::Resource.    Environment specifies the location where this object is hosted, or what it belongs to.  
     */
    KeyAttributes: Attributes;
  }
  export interface GetServiceLevelObjectiveInput {
    /**
     * The ARN or name of the SLO that you want to retrieve information about. You can find the ARNs of SLOs by using the ListServiceLevelObjectives operation.
     */
    Id: ServiceLevelObjectiveId;
  }
  export interface GetServiceLevelObjectiveOutput {
    /**
     * A structure containing the information about the SLO.
     */
    Slo: ServiceLevelObjective;
  }
  export interface GetServiceOutput {
    /**
     * A structure containing information about the service.
     */
    Service: Service;
    /**
     * The start time of the data included in the response. In a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: 1698778057. This displays the time that Application Signals used for the request. It might not match your request exactly, because it was rounded to the nearest hour.
     */
    StartTime: Timestamp;
    /**
     * The end time of the data included in the response. In a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: 1698778057. This displays the time that Application Signals used for the request. It might not match your request exactly, because it was rounded to the nearest hour.
     */
    EndTime: Timestamp;
    /**
     * An array of string-to-string maps that each contain information about one log group associated with this service. Each string-to-string map includes the following fields:    "Type": "AWS::Resource"     "ResourceType": "AWS::Logs::LogGroup"     "Identifier": "name-of-log-group"   
     */
    LogGroupReferences?: LogGroupReferences;
  }
  export interface Goal {
    /**
     * The time period used to evaluate the SLO. It can be either a calendar interval or rolling interval. If you omit this parameter, a rolling interval of 7 days is used.
     */
    Interval?: Interval;
    /**
     * The threshold that determines if the goal is being met. If this is a period-based SLO, the attainment goal is the percentage of good periods that meet the threshold requirements to the total periods within the interval. For example, an attainment goal of 99.9% means that within your interval, you are targeting 99.9% of the periods to be in healthy state. If this is a request-based SLO, the attainment goal is the percentage of requests that must be successful to meet the attainment goal. If you omit this parameter, 99 is used to represent 99% as the attainment goal.
     */
    AttainmentGoal?: AttainmentGoal;
    /**
     * The percentage of remaining budget over total budget that you want to get warnings for. If you omit this parameter, the default of 50.0 is used. 
     */
    WarningThreshold?: WarningThreshold;
  }
  export interface Interval {
    /**
     * If the interval is a rolling interval, this structure contains the interval specifications.
     */
    RollingInterval?: RollingInterval;
    /**
     * If the interval is a calendar interval, this structure contains the interval specifications.
     */
    CalendarInterval?: CalendarInterval;
  }
  export type KeyAttributeName = string;
  export type KeyAttributeValue = string;
  export interface ListServiceDependenciesInput {
    /**
     * The start of the time period to retrieve information about. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: 1698778057  Your requested start time will be rounded to the nearest hour.
     */
    StartTime: Timestamp;
    /**
     * The end of the time period to retrieve information about. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: 1698778057  Your requested end time will be rounded to the nearest hour.
     */
    EndTime: Timestamp;
    /**
     * Use this field to specify which service you want to retrieve information for. You must specify at least the Type, Name, and Environment attributes. This is a string-to-string map. It can include the following fields.    Type designates the type of object this is.    ResourceType specifies the type of the resource. This field is used only when the value of the Type field is Resource or AWS::Resource.    Name specifies the name of the object. This is used only if the value of the Type field is Service, RemoteService, or AWS::Service.    Identifier identifies the resource objects of this resource. This is used only if the value of the Type field is Resource or AWS::Resource.    Environment specifies the location where this object is hosted, or what it belongs to.  
     */
    KeyAttributes: Attributes;
    /**
     * The maximum number of results to return in one operation. If you omit this parameter, the default of 50 is used.
     */
    MaxResults?: ListServiceDependenciesMaxResults;
    /**
     * Include this value, if it was returned by the previous operation, to get the next set of service dependencies.
     */
    NextToken?: NextToken;
  }
  export type ListServiceDependenciesMaxResults = number;
  export interface ListServiceDependenciesOutput {
    /**
     * The start of the time period that the returned information applies to. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: 1698778057  This displays the time that Application Signals used for the request. It might not match your request exactly, because it was rounded to the nearest hour.
     */
    StartTime: Timestamp;
    /**
     * The end of the time period that the returned information applies to. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: 1698778057  This displays the time that Application Signals used for the request. It might not match your request exactly, because it was rounded to the nearest hour.
     */
    EndTime: Timestamp;
    /**
     * An array, where each object in the array contains information about one of the dependencies of this service.
     */
    ServiceDependencies: ServiceDependencies;
    /**
     * Include this value in your next use of this API to get next set of service dependencies.
     */
    NextToken?: NextToken;
  }
  export interface ListServiceDependentsInput {
    /**
     * The start of the time period to retrieve information about. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: 1698778057  Your requested start time will be rounded to the nearest hour.
     */
    StartTime: Timestamp;
    /**
     * The end of the time period to retrieve information about. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: 1698778057  Your requested start time will be rounded to the nearest hour.
     */
    EndTime: Timestamp;
    /**
     * Use this field to specify which service you want to retrieve information for. You must specify at least the Type, Name, and Environment attributes. This is a string-to-string map. It can include the following fields.    Type designates the type of object this is.    ResourceType specifies the type of the resource. This field is used only when the value of the Type field is Resource or AWS::Resource.    Name specifies the name of the object. This is used only if the value of the Type field is Service, RemoteService, or AWS::Service.    Identifier identifies the resource objects of this resource. This is used only if the value of the Type field is Resource or AWS::Resource.    Environment specifies the location where this object is hosted, or what it belongs to.  
     */
    KeyAttributes: Attributes;
    /**
     * The maximum number of results to return in one operation. If you omit this parameter, the default of 50 is used.
     */
    MaxResults?: ListServiceDependentsMaxResults;
    /**
     * Include this value, if it was returned by the previous operation, to get the next set of service dependents.
     */
    NextToken?: NextToken;
  }
  export type ListServiceDependentsMaxResults = number;
  export interface ListServiceDependentsOutput {
    /**
     * The start of the time period that the returned information applies to. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: 1698778057  This displays the time that Application Signals used for the request. It might not match your request exactly, because it was rounded to the nearest hour.
     */
    StartTime: Timestamp;
    /**
     * The end of the time period that the returned information applies to. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: 1698778057  This displays the time that Application Signals used for the request. It might not match your request exactly, because it was rounded to the nearest hour.
     */
    EndTime: Timestamp;
    /**
     * An array, where each object in the array contains information about one of the dependents of this service.
     */
    ServiceDependents: ServiceDependents;
    /**
     * Include this value in your next use of this API to get next set of service dependents.
     */
    NextToken?: NextToken;
  }
  export interface ListServiceLevelObjectivesInput {
    /**
     * You can use this optional field to specify which services you want to retrieve SLO information for. This is a string-to-string map. It can include the following fields.    Type designates the type of object this is.    ResourceType specifies the type of the resource. This field is used only when the value of the Type field is Resource or AWS::Resource.    Name specifies the name of the object. This is used only if the value of the Type field is Service, RemoteService, or AWS::Service.    Identifier identifies the resource objects of this resource. This is used only if the value of the Type field is Resource or AWS::Resource.    Environment specifies the location where this object is hosted, or what it belongs to.  
     */
    KeyAttributes?: Attributes;
    /**
     * The name of the operation that this SLO is associated with.
     */
    OperationName?: OperationName;
    /**
     * The maximum number of results to return in one operation. If you omit this parameter, the default of 50 is used.
     */
    MaxResults?: ListServiceLevelObjectivesMaxResults;
    /**
     * Include this value, if it was returned by the previous operation, to get the next set of service level objectives.
     */
    NextToken?: NextToken;
  }
  export type ListServiceLevelObjectivesMaxResults = number;
  export interface ListServiceLevelObjectivesOutput {
    /**
     * An array of structures, where each structure contains information about one SLO.
     */
    SloSummaries?: ServiceLevelObjectiveSummaries;
    /**
     * Include this value in your next use of this API to get next set of service level objectives.
     */
    NextToken?: NextToken;
  }
  export type ListServiceOperationMaxResults = number;
  export interface ListServiceOperationsInput {
    /**
     * The start of the time period to retrieve information about. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: 1698778057  Your requested start time will be rounded to the nearest hour.
     */
    StartTime: Timestamp;
    /**
     * The end of the time period to retrieve information about. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: 1698778057  Your requested end time will be rounded to the nearest hour.
     */
    EndTime: Timestamp;
    /**
     * Use this field to specify which service you want to retrieve information for. You must specify at least the Type, Name, and Environment attributes. This is a string-to-string map. It can include the following fields.    Type designates the type of object this is.    ResourceType specifies the type of the resource. This field is used only when the value of the Type field is Resource or AWS::Resource.    Name specifies the name of the object. This is used only if the value of the Type field is Service, RemoteService, or AWS::Service.    Identifier identifies the resource objects of this resource. This is used only if the value of the Type field is Resource or AWS::Resource.    Environment specifies the location where this object is hosted, or what it belongs to.  
     */
    KeyAttributes: Attributes;
    /**
     * The maximum number of results to return in one operation. If you omit this parameter, the default of 50 is used.
     */
    MaxResults?: ListServiceOperationMaxResults;
    /**
     * Include this value, if it was returned by the previous operation, to get the next set of service operations.
     */
    NextToken?: NextToken;
  }
  export interface ListServiceOperationsOutput {
    /**
     * The start of the time period that the returned information applies to. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: 1698778057  This displays the time that Application Signals used for the request. It might not match your request exactly, because it was rounded to the nearest hour.
     */
    StartTime: Timestamp;
    /**
     * The end of the time period that the returned information applies to. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: 1698778057  This displays the time that Application Signals used for the request. It might not match your request exactly, because it was rounded to the nearest hour.
     */
    EndTime: Timestamp;
    /**
     * An array of structures that each contain information about one operation of this service.
     */
    ServiceOperations: ServiceOperations;
    /**
     * Include this value in your next use of this API to get next set of service operations.
     */
    NextToken?: NextToken;
  }
  export interface ListServicesInput {
    /**
     * The start of the time period to retrieve information about. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: 1698778057  Your requested start time will be rounded to the nearest hour.
     */
    StartTime: Timestamp;
    /**
     * The end of the time period to retrieve information about. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: 1698778057  Your requested start time will be rounded to the nearest hour.
     */
    EndTime: Timestamp;
    /**
     *  The maximum number of results to return in one operation. If you omit this parameter, the default of 50 is used. 
     */
    MaxResults?: ListServicesMaxResults;
    /**
     * Include this value, if it was returned by the previous operation, to get the next set of services.
     */
    NextToken?: NextToken;
  }
  export type ListServicesMaxResults = number;
  export interface ListServicesOutput {
    /**
     * The start of the time period that the returned information applies to. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: 1698778057  This displays the time that Application Signals used for the request. It might not match your request exactly, because it was rounded to the nearest hour.
     */
    StartTime: Timestamp;
    /**
     * The end of the time period that the returned information applies to. When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: 1698778057  This displays the time that Application Signals used for the request. It might not match your request exactly, because it was rounded to the nearest hour.
     */
    EndTime: Timestamp;
    /**
     * An array of structures, where each structure contains some information about a service. To get complete information about a service, use GetService.
     */
    ServiceSummaries: ServiceSummaries;
    /**
     * Include this value in your next use of this API to get next set of services.
     */
    NextToken?: NextToken;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the CloudWatch resource that you want to view tags for. The ARN format of an Application Signals SLO is arn:aws:cloudwatch:Region:account-id:slo:slo-name   For more information about ARN format, see  Resource Types Defined by Amazon CloudWatch in the Amazon Web Services General Reference.
     */
    ResourceArn: AmazonResourceName;
  }
  export interface ListTagsForResourceResponse {
    /**
     * The list of tag keys and values associated with the resource you specified.
     */
    Tags?: TagList;
  }
  export type LogGroupReferences = Attributes[];
  export interface Metric {
    /**
     * The namespace of the metric. For more information, see Namespaces.
     */
    Namespace?: Namespace;
    /**
     * The name of the metric to use.
     */
    MetricName?: MetricName;
    /**
     * An array of one or more dimensions to use to define the metric that you want to use. For more information, see Dimensions.
     */
    Dimensions?: Dimensions;
  }
  export type MetricDataQueries = MetricDataQuery[];
  export interface MetricDataQuery {
    /**
     * A short name used to tie this object to the results in the response. This Id must be unique within a MetricDataQueries array. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the metric math expression. The valid characters are letters, numbers, and underscore. The first character must be a lowercase letter.
     */
    Id: MetricId;
    /**
     * A metric to be used directly for the SLO, or to be used in the math expression that will be used for the SLO. Within one MetricDataQuery object, you must specify either Expression or MetricStat but not both.
     */
    MetricStat?: MetricStat;
    /**
     * This field can contain a metric math expression to be performed on the other metrics that you are retrieving within this MetricDataQueries structure.  A math expression can use the Id of the other metrics or queries to refer to those metrics, and can also use the Id of other expressions to use the result of those expressions. For more information about metric math expressions, see Metric Math Syntax and Functions in the Amazon CloudWatch User Guide. Within each MetricDataQuery object, you must specify either Expression or MetricStat but not both.
     */
    Expression?: MetricExpression;
    /**
     * A human-readable label for this metric or expression. This is especially useful if this is an expression, so that you know what the value represents. If the metric or expression is shown in a CloudWatch dashboard widget, the label is shown. If Label is omitted, CloudWatch generates a default. You can put dynamic expressions into a label, so that it is more descriptive. For more information, see Using Dynamic Labels.
     */
    Label?: MetricLabel;
    /**
     * Use this only if you are using a metric math expression for the SLO. Specify true for ReturnData for only the one expression result to use as the alarm. For all other metrics and expressions in the same CreateServiceLevelObjective operation, specify ReturnData as false.
     */
    ReturnData?: ReturnData;
    /**
     * The granularity, in seconds, of the returned data points for this metric. For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a PutMetricData call that includes a StorageResolution of 1 second. If the StartTime parameter specifies a time stamp that is greater than 3 hours ago, you must specify the period as follows or no data points in that time range is returned:   Start time between 3 hours and 15 days ago - Use a multiple of 60 seconds (1 minute).   Start time between 15 and 63 days ago - Use a multiple of 300 seconds (5 minutes).   Start time greater than 63 days ago - Use a multiple of 3600 seconds (1 hour).  
     */
    Period?: Period;
    /**
     * The ID of the account where this metric is located. If you are performing this operation in a monitoring account, use this to specify which source account to retrieve this metric from.
     */
    AccountId?: AccountId;
  }
  export type MetricExpression = string;
  export type MetricId = string;
  export type MetricLabel = string;
  export type MetricName = string;
  export interface MetricReference {
    /**
     * The namespace of the metric. For more information, see CloudWatchNamespaces.
     */
    Namespace: Namespace;
    /**
     * Used to display the appropriate statistics in the CloudWatch console.
     */
    MetricType: MetricType;
    /**
     * An array of one or more dimensions that further define the metric. For more information, see CloudWatchDimensions.
     */
    Dimensions?: Dimensions;
    /**
     * The name of the metric.
     */
    MetricName: MetricName;
  }
  export type MetricReferences = MetricReference[];
  export interface MetricStat {
    /**
     * The metric to use as the service level indicator, including the metric name, namespace, and dimensions.
     */
    Metric: Metric;
    /**
     * The granularity, in seconds, to be used for the metric. For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a PutMetricData call that includes a StorageResolution of 1 second.
     */
    Period: Period;
    /**
     * The statistic to use for comparison to the threshold. It can be any CloudWatch statistic or extended statistic. For more information about statistics, see CloudWatch statistics definitions.
     */
    Stat: Stat;
    /**
     * If you omit Unit then all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.
     */
    Unit?: StandardUnit;
  }
  export type MetricType = string;
  export interface MonitoredRequestCountMetricDataQueries {
    /**
     * If you want to count "good requests" to determine the percentage of successful requests for this request-based SLO, specify the metric to use as "good requests" in this structure.
     */
    GoodCountMetric?: MetricDataQueries;
    /**
     * If you want to count "bad requests" to determine the percentage of successful requests for this request-based SLO, specify the metric to use as "bad requests" in this structure.
     */
    BadCountMetric?: MetricDataQueries;
  }
  export type Namespace = string;
  export type NextToken = string;
  export type OperationName = string;
  export type Period = number;
  export interface RequestBasedServiceLevelIndicator {
    /**
     * A structure that contains information about the metric that the SLO monitors. 
     */
    RequestBasedSliMetric: RequestBasedServiceLevelIndicatorMetric;
    /**
     * This value is the threshold that the observed metric values of the SLI metric are compared to.
     */
    MetricThreshold?: ServiceLevelIndicatorMetricThreshold;
    /**
     * The arithmetic operation used when comparing the specified metric to the threshold.
     */
    ComparisonOperator?: ServiceLevelIndicatorComparisonOperator;
  }
  export interface RequestBasedServiceLevelIndicatorConfig {
    /**
     * Use this structure to specify the metric to be used for the SLO.
     */
    RequestBasedSliMetricConfig: RequestBasedServiceLevelIndicatorMetricConfig;
    /**
     * The value that the SLI metric is compared to. This parameter is required if this SLO is tracking the Latency metric.
     */
    MetricThreshold?: ServiceLevelIndicatorMetricThreshold;
    /**
     * The arithmetic operation to use when comparing the specified metric to the threshold. This parameter is required if this SLO is tracking the Latency metric.
     */
    ComparisonOperator?: ServiceLevelIndicatorComparisonOperator;
  }
  export interface RequestBasedServiceLevelIndicatorMetric {
    /**
     * This is a string-to-string map that contains information about the type of object that this SLO is related to. It can include the following fields.    Type designates the type of object that this SLO is related to.    ResourceType specifies the type of the resource. This field is used only when the value of the Type field is Resource or AWS::Resource.    Name specifies the name of the object. This is used only if the value of the Type field is Service, RemoteService, or AWS::Service.    Identifier identifies the resource objects of this resource. This is used only if the value of the Type field is Resource or AWS::Resource.    Environment specifies the location where this object is hosted, or what it belongs to.  
     */
    KeyAttributes?: Attributes;
    /**
     * If the SLO monitors a specific operation of the service, this field displays that operation name.
     */
    OperationName?: OperationName;
    /**
     * If the SLO monitors either the LATENCY or AVAILABILITY metric that Application Signals collects, this field displays which of those metrics is used.
     */
    MetricType?: ServiceLevelIndicatorMetricType;
    /**
     * This structure defines the metric that is used as the "total requests" number for a request-based SLO. The number observed for this metric is divided by the number of "good requests" or "bad requests" that is observed for the metric defined in MonitoredRequestCountMetric.
     */
    TotalRequestCountMetric: MetricDataQueries;
    /**
     * This structure defines the metric that is used as the "good request" or "bad request" value for a request-based SLO. This value observed for the metric defined in TotalRequestCountMetric is divided by the number found for MonitoredRequestCountMetric to determine the percentage of successful requests that this SLO tracks.
     */
    MonitoredRequestCountMetric: MonitoredRequestCountMetricDataQueries;
  }
  export interface RequestBasedServiceLevelIndicatorMetricConfig {
    /**
     * If this SLO is related to a metric collected by Application Signals, you must use this field to specify which service the SLO metric is related to. To do so, you must specify at least the Type, Name, and Environment attributes. This is a string-to-string map. It can include the following fields.    Type designates the type of object this is.    ResourceType specifies the type of the resource. This field is used only when the value of the Type field is Resource or AWS::Resource.    Name specifies the name of the object. This is used only if the value of the Type field is Service, RemoteService, or AWS::Service.    Identifier identifies the resource objects of this resource. This is used only if the value of the Type field is Resource or AWS::Resource.    Environment specifies the location where this object is hosted, or what it belongs to.  
     */
    KeyAttributes?: Attributes;
    /**
     * If the SLO is to monitor a specific operation of the service, use this field to specify the name of that operation.
     */
    OperationName?: OperationName;
    /**
     * If the SLO is to monitor either the LATENCY or AVAILABILITY metric that Application Signals collects, use this field to specify which of those metrics is used.
     */
    MetricType?: ServiceLevelIndicatorMetricType;
    /**
     * Use this structure to define the metric that you want to use as the "total requests" number for a request-based SLO. This result will be divided by the "good request" or "bad request" value defined in MonitoredRequestCountMetric.
     */
    TotalRequestCountMetric?: MetricDataQueries;
    /**
     * Use this structure to define the metric that you want to use as the "good request" or "bad request" value for a request-based SLO. This value observed for the metric defined in TotalRequestCountMetric will be divided by the number found for MonitoredRequestCountMetric to determine the percentage of successful requests that this SLO tracks.
     */
    MonitoredRequestCountMetric?: MonitoredRequestCountMetricDataQueries;
  }
  export type ReturnData = boolean;
  export interface RollingInterval {
    /**
     * Specifies the rolling interval unit.
     */
    DurationUnit: DurationUnit;
    /**
     * Specifies the duration of each rolling interval. For example, if Duration is 7 and DurationUnit is DAY, each rolling interval is seven days.
     */
    Duration: RollingIntervalDuration;
  }
  export type RollingIntervalDuration = number;
  export type SLIPeriodSeconds = number;
  export interface Service {
    /**
     * This is a string-to-string map. It can include the following fields.    Type designates the type of object this is.    ResourceType specifies the type of the resource. This field is used only when the value of the Type field is Resource or AWS::Resource.    Name specifies the name of the object. This is used only if the value of the Type field is Service, RemoteService, or AWS::Service.    Identifier identifies the resource objects of this resource. This is used only if the value of the Type field is Resource or AWS::Resource.    Environment specifies the location where this object is hosted, or what it belongs to.  
     */
    KeyAttributes: Attributes;
    /**
     * This structure contains one or more string-to-string maps that help identify this service. It can include platform attributes, application attributes, and telemetry attributes. Platform attributes contain information the service's platform.    PlatformType defines the hosted-in platform.    EKS.Cluster is the name of the Amazon EKS cluster.    K8s.Cluster is the name of the self-hosted Kubernetes cluster.    K8s.Namespace is the name of the Kubernetes namespace in either Amazon EKS or Kubernetes clusters.    K8s.Workload is the name of the Kubernetes workload in either Amazon EKS or Kubernetes clusters.    K8s.Node is the name of the Kubernetes node in either Amazon EKS or Kubernetes clusters.    K8s.Pod is the name of the Kubernetes pod in either Amazon EKS or Kubernetes clusters.    EC2.AutoScalingGroup is the name of the Amazon EC2 Auto Scaling group.    EC2.InstanceId is the ID of the Amazon EC2 instance.    Host is the name of the host, for all platform types.   Application attributes contain information about the application.    AWS.Application is the application's name in Amazon Web Services Service Catalog AppRegistry.    AWS.Application.ARN is the application's ARN in Amazon Web Services Service Catalog AppRegistry.   Telemetry attributes contain telemetry information.    Telemetry.SDK is the fingerprint of the OpenTelemetry SDK version for instrumented services.    Telemetry.Agent is the fingerprint of the agent used to collect and send telemetry data.    Telemetry.Source Specifies the point of application where the telemetry was collected or specifies what was used for the source of telemetry data.  
     */
    AttributeMaps?: AttributeMaps;
    /**
     * An array of structures that each contain information about one metric associated with this service.
     */
    MetricReferences: MetricReferences;
    /**
     * An array of string-to-string maps that each contain information about one log group associated with this service. Each string-to-string map includes the following fields:    "Type": "AWS::Resource"     "ResourceType": "AWS::Logs::LogGroup"     "Identifier": "name-of-log-group"   
     */
    LogGroupReferences?: LogGroupReferences;
  }
  export type ServiceDependencies = ServiceDependency[];
  export interface ServiceDependency {
    /**
     * The name of the operation in this service that calls the dependency.
     */
    OperationName: OperationName;
    /**
     * This is a string-to-string map. It can include the following fields.    Type designates the type of object this is.    ResourceType specifies the type of the resource. This field is used only when the value of the Type field is Resource or AWS::Resource.    Name specifies the name of the object. This is used only if the value of the Type field is Service, RemoteService, or AWS::Service.    Identifier identifies the resource objects of this resource. This is used only if the value of the Type field is Resource or AWS::Resource.    Environment specifies the location where this object is hosted, or what it belongs to.  
     */
    DependencyKeyAttributes: Attributes;
    /**
     * The name of the called operation in the dependency.
     */
    DependencyOperationName: OperationName;
    /**
     * An array of structures that each contain information about one metric associated with this service dependency that was discovered by Application Signals.
     */
    MetricReferences: MetricReferences;
  }
  export interface ServiceDependent {
    /**
     * If the invoked entity is an operation on an entity, the name of that dependent operation is displayed here.
     */
    OperationName?: OperationName;
    /**
     * This is a string-to-string map. It can include the following fields.    Type designates the type of object this is.    ResourceType specifies the type of the resource. This field is used only when the value of the Type field is Resource or AWS::Resource.    Name specifies the name of the object. This is used only if the value of the Type field is Service, RemoteService, or AWS::Service.    Identifier identifies the resource objects of this resource. This is used only if the value of the Type field is Resource or AWS::Resource.    Environment specifies the location where this object is hosted, or what it belongs to.  
     */
    DependentKeyAttributes: Attributes;
    /**
     * If the dependent invoker was a service that invoked it from an operation, the name of that dependent operation is displayed here.
     */
    DependentOperationName?: OperationName;
    /**
     * An array of structures that each contain information about one metric associated with this service dependent that was discovered by Application Signals.
     */
    MetricReferences: MetricReferences;
  }
  export type ServiceDependents = ServiceDependent[];
  export interface ServiceLevelIndicator {
    /**
     * A structure that contains information about the metric that the SLO monitors. 
     */
    SliMetric: ServiceLevelIndicatorMetric;
    /**
     * The value that the SLI metric is compared to.
     */
    MetricThreshold: ServiceLevelIndicatorMetricThreshold;
    /**
     * The arithmetic operation used when comparing the specified metric to the threshold.
     */
    ComparisonOperator: ServiceLevelIndicatorComparisonOperator;
  }
  export type ServiceLevelIndicatorComparisonOperator = "GreaterThanOrEqualTo"|"GreaterThan"|"LessThan"|"LessThanOrEqualTo"|string;
  export interface ServiceLevelIndicatorConfig {
    /**
     * Use this structure to specify the metric to be used for the SLO.
     */
    SliMetricConfig: ServiceLevelIndicatorMetricConfig;
    /**
     * This parameter is used only when a request-based SLO tracks the Latency metric. Specify the threshold value that the observed Latency metric values are to be compared to.
     */
    MetricThreshold: ServiceLevelIndicatorMetricThreshold;
    /**
     * The arithmetic operation to use when comparing the specified metric to the threshold.
     */
    ComparisonOperator: ServiceLevelIndicatorComparisonOperator;
  }
  export interface ServiceLevelIndicatorMetric {
    /**
     * This is a string-to-string map that contains information about the type of object that this SLO is related to. It can include the following fields.    Type designates the type of object that this SLO is related to.    ResourceType specifies the type of the resource. This field is used only when the value of the Type field is Resource or AWS::Resource.    Name specifies the name of the object. This is used only if the value of the Type field is Service, RemoteService, or AWS::Service.    Identifier identifies the resource objects of this resource. This is used only if the value of the Type field is Resource or AWS::Resource.    Environment specifies the location where this object is hosted, or what it belongs to.  
     */
    KeyAttributes?: Attributes;
    /**
     * If the SLO monitors a specific operation of the service, this field displays that operation name.
     */
    OperationName?: OperationName;
    /**
     * If the SLO monitors either the LATENCY or AVAILABILITY metric that Application Signals collects, this field displays which of those metrics is used.
     */
    MetricType?: ServiceLevelIndicatorMetricType;
    /**
     * If this SLO monitors a CloudWatch metric or the result of a CloudWatch metric math expression, this structure includes the information about that metric or expression. 
     */
    MetricDataQueries: MetricDataQueries;
  }
  export interface ServiceLevelIndicatorMetricConfig {
    /**
     * If this SLO is related to a metric collected by Application Signals, you must use this field to specify which service the SLO metric is related to. To do so, you must specify at least the Type, Name, and Environment attributes. This is a string-to-string map. It can include the following fields.    Type designates the type of object this is.    ResourceType specifies the type of the resource. This field is used only when the value of the Type field is Resource or AWS::Resource.    Name specifies the name of the object. This is used only if the value of the Type field is Service, RemoteService, or AWS::Service.    Identifier identifies the resource objects of this resource. This is used only if the value of the Type field is Resource or AWS::Resource.    Environment specifies the location where this object is hosted, or what it belongs to.  
     */
    KeyAttributes?: Attributes;
    /**
     * If the SLO is to monitor a specific operation of the service, use this field to specify the name of that operation.
     */
    OperationName?: OperationName;
    /**
     * If the SLO is to monitor either the LATENCY or AVAILABILITY metric that Application Signals collects, use this field to specify which of those metrics is used.
     */
    MetricType?: ServiceLevelIndicatorMetricType;
    /**
     * The statistic to use for comparison to the threshold. It can be any CloudWatch statistic or extended statistic. For more information about statistics, see CloudWatch statistics definitions.
     */
    Statistic?: ServiceLevelIndicatorStatistic;
    /**
     * The number of seconds to use as the period for SLO evaluation. Your application's performance is compared to the SLI during each period. For each period, the application is determined to have either achieved or not achieved the necessary performance.
     */
    PeriodSeconds?: SLIPeriodSeconds;
    /**
     * If this SLO monitors a CloudWatch metric or the result of a CloudWatch metric math expression, use this structure to specify that metric or expression. 
     */
    MetricDataQueries?: MetricDataQueries;
  }
  export type ServiceLevelIndicatorMetricThreshold = number;
  export type ServiceLevelIndicatorMetricType = "LATENCY"|"AVAILABILITY"|string;
  export type ServiceLevelIndicatorStatistic = string;
  export interface ServiceLevelObjective {
    /**
     * The ARN of this SLO.
     */
    Arn: ServiceLevelObjectiveArn;
    /**
     * The name of this SLO.
     */
    Name: ServiceLevelObjectiveName;
    /**
     * The description that you created for this SLO.
     */
    Description?: ServiceLevelObjectiveDescription;
    /**
     * The date and time that this SLO was created. When used in a raw HTTP Query API, it is formatted as yyyy-MM-dd'T'HH:mm:ss. For example, 2019-07-01T23:59:59.
     */
    CreatedTime: Timestamp;
    /**
     * The time that this SLO was most recently updated. When used in a raw HTTP Query API, it is formatted as yyyy-MM-dd'T'HH:mm:ss. For example, 2019-07-01T23:59:59.
     */
    LastUpdatedTime: Timestamp;
    /**
     * A structure containing information about the performance metric that this SLO monitors, if this is a period-based SLO.
     */
    Sli?: ServiceLevelIndicator;
    /**
     * A structure containing information about the performance metric that this SLO monitors, if this is a request-based SLO.
     */
    RequestBasedSli?: RequestBasedServiceLevelIndicator;
    /**
     * Displays whether this is a period-based SLO or a request-based SLO.
     */
    EvaluationType?: EvaluationType;
    Goal: Goal;
  }
  export type ServiceLevelObjectiveArn = string;
  export interface ServiceLevelObjectiveBudgetReport {
    /**
     * The ARN of the SLO that this report is for.
     */
    Arn: ServiceLevelObjectiveArn;
    /**
     * The name of the SLO that this report is for.
     */
    Name: ServiceLevelObjectiveName;
    /**
     * Displays whether this budget report is for a period-based SLO or a request-based SLO.
     */
    EvaluationType?: EvaluationType;
    /**
     * The status of this SLO, as it relates to the error budget for the entire time interval.    OK means that the SLO had remaining budget above the warning threshold, as of the time that you specified in TimeStamp.    WARNING means that the SLO's remaining budget was below the warning threshold, as of the time that you specified in TimeStamp.    BREACHED means that the SLO's budget was exhausted, as of the time that you specified in TimeStamp.    INSUFFICIENT_DATA means that the specified start and end times were before the SLO was created, or that attainment data is missing.  
     */
    BudgetStatus: ServiceLevelObjectiveBudgetStatus;
    /**
     * A number between 0 and 100 that represents the success percentage of your application compared to the goal set by the SLO. If this is a period-based SLO, the number is the percentage of time periods that the service has attained the SLO's attainment goal, as of the time of the request. If this is a request-based SLO, the number is the number of successful requests divided by the number of total requests, multiplied by 100, during the time range that you specified in your request.
     */
    Attainment?: Attainment;
    /**
     * The total number of seconds in the error budget for the interval. This field is included only if the SLO is a period-based SLO.
     */
    TotalBudgetSeconds?: TotalBudgetSeconds;
    /**
     * The budget amount remaining before the SLO status becomes BREACHING, at the time specified in the Timestemp parameter of the request. If this value is negative, then the SLO is already in BREACHING status.  This field is included only if the SLO is a period-based SLO.
     */
    BudgetSecondsRemaining?: BudgetSecondsRemaining;
    /**
     * This field is displayed only for request-based SLOs. It displays the total number of failed requests that can be tolerated during the time range between the start of the interval and the time stamp supplied in the budget report request. It is based on the total number of requests that occurred, and the percentage specified in the attainment goal. If the number of failed requests matches this number or is higher, then this SLO is currently breaching. This number can go up and down between reports with different time stamps, based on both how many total requests occur.
     */
    TotalBudgetRequests?: TotalBudgetRequests;
    /**
     * This field is displayed only for request-based SLOs. It displays the number of failed requests that can be tolerated before any more successful requests occur, and still have the application meet its SLO goal. This number can go up and down between different reports, based on both how many successful requests and how many failed requests occur in that time.
     */
    BudgetRequestsRemaining?: BudgetRequestsRemaining;
    /**
     * A structure that contains information about the performance metric that this SLO monitors.
     */
    Sli?: ServiceLevelIndicator;
    RequestBasedSli?: RequestBasedServiceLevelIndicator;
    Goal?: Goal;
  }
  export interface ServiceLevelObjectiveBudgetReportError {
    /**
     * The name of the SLO that this error is related to.
     */
    Name: ServiceLevelObjectiveName;
    /**
     * The ARN of the SLO that this error is related to.
     */
    Arn: ServiceLevelObjectiveArn;
    /**
     * The error code for this error.
     */
    ErrorCode: ServiceLevelObjectiveBudgetReportErrorCode;
    /**
     * The message for this error.
     */
    ErrorMessage: ServiceLevelObjectiveBudgetReportErrorMessage;
  }
  export type ServiceLevelObjectiveBudgetReportErrorCode = string;
  export type ServiceLevelObjectiveBudgetReportErrorMessage = string;
  export type ServiceLevelObjectiveBudgetReportErrors = ServiceLevelObjectiveBudgetReportError[];
  export type ServiceLevelObjectiveBudgetReports = ServiceLevelObjectiveBudgetReport[];
  export type ServiceLevelObjectiveBudgetStatus = "OK"|"WARNING"|"BREACHED"|"INSUFFICIENT_DATA"|string;
  export type ServiceLevelObjectiveDescription = string;
  export type ServiceLevelObjectiveId = string;
  export type ServiceLevelObjectiveIds = String[];
  export type ServiceLevelObjectiveName = string;
  export type ServiceLevelObjectiveSummaries = ServiceLevelObjectiveSummary[];
  export interface ServiceLevelObjectiveSummary {
    /**
     * The ARN of this service level objective.
     */
    Arn: ServiceLevelObjectiveArn;
    /**
     * The name of the service level objective.
     */
    Name: ServiceLevelObjectiveName;
    /**
     * This is a string-to-string map. It can include the following fields.    Type designates the type of object this service level objective is for.    ResourceType specifies the type of the resource. This field is used only when the value of the Type field is Resource or AWS::Resource.    Name specifies the name of the object. This is used only if the value of the Type field is Service, RemoteService, or AWS::Service.    Identifier identifies the resource objects of this resource. This is used only if the value of the Type field is Resource or AWS::Resource.    Environment specifies the location where this object is hosted, or what it belongs to.  
     */
    KeyAttributes?: Attributes;
    /**
     * If this service level objective is specific to a single operation, this field displays the name of that operation.
     */
    OperationName?: OperationName;
    /**
     * The date and time that this service level objective was created. It is expressed as the number of milliseconds since Jan 1, 1970 00:00:00 UTC.
     */
    CreatedTime?: Timestamp;
  }
  export interface ServiceOperation {
    /**
     * The name of the operation, discovered by Application Signals.
     */
    Name: OperationName;
    /**
     * An array of structures that each contain information about one metric associated with this service operation that was discovered by Application Signals.
     */
    MetricReferences: MetricReferences;
  }
  export type ServiceOperations = ServiceOperation[];
  export type ServiceSummaries = ServiceSummary[];
  export interface ServiceSummary {
    /**
     * This is a string-to-string map that help identify the objects discovered by Application Signals. It can include the following fields.    Type designates the type of object this is.    ResourceType specifies the type of the resource. This field is used only when the value of the Type field is Resource or AWS::Resource.    Name specifies the name of the object. This is used only if the value of the Type field is Service, RemoteService, or AWS::Service.    Identifier identifies the resource objects of this resource. This is used only if the value of the Type field is Resource or AWS::Resource.    Environment specifies the location where this object is hosted, or what it belongs to.  
     */
    KeyAttributes: Attributes;
    /**
     * This structure contains one or more string-to-string maps that help identify this service. It can include platform attributes, application attributes, and telemetry attributes. Platform attributes contain information the service's platform.    PlatformType defines the hosted-in platform.    EKS.Cluster is the name of the Amazon EKS cluster.    K8s.Cluster is the name of the self-hosted Kubernetes cluster.    K8s.Namespace is the name of the Kubernetes namespace in either Amazon EKS or Kubernetes clusters.    K8s.Workload is the name of the Kubernetes workload in either Amazon EKS or Kubernetes clusters.    K8s.Node is the name of the Kubernetes node in either Amazon EKS or Kubernetes clusters.    K8s.Pod is the name of the Kubernetes pod in either Amazon EKS or Kubernetes clusters.    EC2.AutoScalingGroup is the name of the Amazon EC2 Auto Scaling group.    EC2.InstanceId is the ID of the Amazon EC2 instance.    Host is the name of the host, for all platform types.   Application attributes contain information about the application.    AWS.Application is the application's name in Amazon Web Services Service Catalog AppRegistry.    AWS.Application.ARN is the application's ARN in Amazon Web Services Service Catalog AppRegistry.   Telemetry attributes contain telemetry information.    Telemetry.SDK is the fingerprint of the OpenTelemetry SDK version for instrumented services.    Telemetry.Agent is the fingerprint of the agent used to collect and send telemetry data.    Telemetry.Source Specifies the point of application where the telemetry was collected or specifies what was used for the source of telemetry data.  
     */
    AttributeMaps?: AttributeMaps;
    /**
     * An array of structures that each contain information about one metric associated with this service.
     */
    MetricReferences: MetricReferences;
  }
  export type StandardUnit = "Microseconds"|"Milliseconds"|"Seconds"|"Bytes"|"Kilobytes"|"Megabytes"|"Gigabytes"|"Terabytes"|"Bits"|"Kilobits"|"Megabits"|"Gigabits"|"Terabits"|"Percent"|"Count"|"Bytes/Second"|"Kilobytes/Second"|"Megabytes/Second"|"Gigabytes/Second"|"Terabytes/Second"|"Bits/Second"|"Kilobits/Second"|"Megabits/Second"|"Gigabits/Second"|"Terabits/Second"|"Count/Second"|"None"|string;
  export interface StartDiscoveryInput {
  }
  export interface StartDiscoveryOutput {
  }
  export type Stat = string;
  export type String = string;
  export interface Tag {
    /**
     * A string that you can use to assign a value. The combination of tag keys and values can help you organize and categorize your resources.
     */
    Key: TagKey;
    /**
     * The value for the specified tag key.
     */
    Value: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the CloudWatch resource that you want to set tags for. The ARN format of an Application Signals SLO is arn:aws:cloudwatch:Region:account-id:slo:slo-name   For more information about ARN format, see  Resource Types Defined by Amazon CloudWatch in the Amazon Web Services General Reference.
     */
    ResourceArn: AmazonResourceName;
    /**
     * The list of key-value pairs to associate with the alarm.
     */
    Tags: TagList;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type Timestamp = Date;
  export type TotalBudgetRequests = number;
  export type TotalBudgetSeconds = number;
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the CloudWatch resource that you want to delete tags from. The ARN format of an Application Signals SLO is arn:aws:cloudwatch:Region:account-id:slo:slo-name   For more information about ARN format, see  Resource Types Defined by Amazon CloudWatch in the Amazon Web Services General Reference.
     */
    ResourceArn: AmazonResourceName;
    /**
     * The list of tag keys to remove from the resource.
     */
    TagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateServiceLevelObjectiveInput {
    /**
     * The Amazon Resource Name (ARN) or name of the service level objective that you want to update.
     */
    Id: ServiceLevelObjectiveId;
    /**
     * An optional description for the SLO.
     */
    Description?: ServiceLevelObjectiveDescription;
    /**
     * If this SLO is a period-based SLO, this structure defines the information about what performance metric this SLO will monitor.
     */
    SliConfig?: ServiceLevelIndicatorConfig;
    /**
     * If this SLO is a request-based SLO, this structure defines the information about what performance metric this SLO will monitor. You can't specify both SliConfig and RequestBasedSliConfig in the same operation.
     */
    RequestBasedSliConfig?: RequestBasedServiceLevelIndicatorConfig;
    /**
     * A structure that contains the attributes that determine the goal of the SLO. This includes the time period for evaluation and the attainment threshold.
     */
    Goal?: Goal;
  }
  export interface UpdateServiceLevelObjectiveOutput {
    /**
     * A structure that contains information about the SLO that you just updated.
     */
    Slo: ServiceLevelObjective;
  }
  export type WarningThreshold = number;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2024-04-15"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the ApplicationSignals client.
   */
  export import Types = ApplicationSignals;
}
export = ApplicationSignals;
