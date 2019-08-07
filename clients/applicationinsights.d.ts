import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class ApplicationInsights extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ApplicationInsights.Types.ClientConfiguration)
  config: Config & ApplicationInsights.Types.ClientConfiguration;
  /**
   * Adds an application that is created from a resource group.
   */
  createApplication(params: ApplicationInsights.Types.CreateApplicationRequest, callback?: (err: AWSError, data: ApplicationInsights.Types.CreateApplicationResponse) => void): Request<ApplicationInsights.Types.CreateApplicationResponse, AWSError>;
  /**
   * Adds an application that is created from a resource group.
   */
  createApplication(callback?: (err: AWSError, data: ApplicationInsights.Types.CreateApplicationResponse) => void): Request<ApplicationInsights.Types.CreateApplicationResponse, AWSError>;
  /**
   * Creates a custom component by grouping similar standalone instances to monitor.
   */
  createComponent(params: ApplicationInsights.Types.CreateComponentRequest, callback?: (err: AWSError, data: ApplicationInsights.Types.CreateComponentResponse) => void): Request<ApplicationInsights.Types.CreateComponentResponse, AWSError>;
  /**
   * Creates a custom component by grouping similar standalone instances to monitor.
   */
  createComponent(callback?: (err: AWSError, data: ApplicationInsights.Types.CreateComponentResponse) => void): Request<ApplicationInsights.Types.CreateComponentResponse, AWSError>;
  /**
   * Removes the specified application from monitoring. Does not delete the application.
   */
  deleteApplication(params: ApplicationInsights.Types.DeleteApplicationRequest, callback?: (err: AWSError, data: ApplicationInsights.Types.DeleteApplicationResponse) => void): Request<ApplicationInsights.Types.DeleteApplicationResponse, AWSError>;
  /**
   * Removes the specified application from monitoring. Does not delete the application.
   */
  deleteApplication(callback?: (err: AWSError, data: ApplicationInsights.Types.DeleteApplicationResponse) => void): Request<ApplicationInsights.Types.DeleteApplicationResponse, AWSError>;
  /**
   * Ungroups a custom component. When you ungroup custom components, all applicable monitors that are set up for the component are removed and the instances revert to their standalone status.
   */
  deleteComponent(params: ApplicationInsights.Types.DeleteComponentRequest, callback?: (err: AWSError, data: ApplicationInsights.Types.DeleteComponentResponse) => void): Request<ApplicationInsights.Types.DeleteComponentResponse, AWSError>;
  /**
   * Ungroups a custom component. When you ungroup custom components, all applicable monitors that are set up for the component are removed and the instances revert to their standalone status.
   */
  deleteComponent(callback?: (err: AWSError, data: ApplicationInsights.Types.DeleteComponentResponse) => void): Request<ApplicationInsights.Types.DeleteComponentResponse, AWSError>;
  /**
   * Describes the application.
   */
  describeApplication(params: ApplicationInsights.Types.DescribeApplicationRequest, callback?: (err: AWSError, data: ApplicationInsights.Types.DescribeApplicationResponse) => void): Request<ApplicationInsights.Types.DescribeApplicationResponse, AWSError>;
  /**
   * Describes the application.
   */
  describeApplication(callback?: (err: AWSError, data: ApplicationInsights.Types.DescribeApplicationResponse) => void): Request<ApplicationInsights.Types.DescribeApplicationResponse, AWSError>;
  /**
   * Describes a component and lists the resources that are grouped together in a component.
   */
  describeComponent(params: ApplicationInsights.Types.DescribeComponentRequest, callback?: (err: AWSError, data: ApplicationInsights.Types.DescribeComponentResponse) => void): Request<ApplicationInsights.Types.DescribeComponentResponse, AWSError>;
  /**
   * Describes a component and lists the resources that are grouped together in a component.
   */
  describeComponent(callback?: (err: AWSError, data: ApplicationInsights.Types.DescribeComponentResponse) => void): Request<ApplicationInsights.Types.DescribeComponentResponse, AWSError>;
  /**
   * Describes the monitoring configuration of the component.
   */
  describeComponentConfiguration(params: ApplicationInsights.Types.DescribeComponentConfigurationRequest, callback?: (err: AWSError, data: ApplicationInsights.Types.DescribeComponentConfigurationResponse) => void): Request<ApplicationInsights.Types.DescribeComponentConfigurationResponse, AWSError>;
  /**
   * Describes the monitoring configuration of the component.
   */
  describeComponentConfiguration(callback?: (err: AWSError, data: ApplicationInsights.Types.DescribeComponentConfigurationResponse) => void): Request<ApplicationInsights.Types.DescribeComponentConfigurationResponse, AWSError>;
  /**
   * Describes the recommended monitoring configuration of the component.
   */
  describeComponentConfigurationRecommendation(params: ApplicationInsights.Types.DescribeComponentConfigurationRecommendationRequest, callback?: (err: AWSError, data: ApplicationInsights.Types.DescribeComponentConfigurationRecommendationResponse) => void): Request<ApplicationInsights.Types.DescribeComponentConfigurationRecommendationResponse, AWSError>;
  /**
   * Describes the recommended monitoring configuration of the component.
   */
  describeComponentConfigurationRecommendation(callback?: (err: AWSError, data: ApplicationInsights.Types.DescribeComponentConfigurationRecommendationResponse) => void): Request<ApplicationInsights.Types.DescribeComponentConfigurationRecommendationResponse, AWSError>;
  /**
   * Describes an anomaly or error with the application.
   */
  describeObservation(params: ApplicationInsights.Types.DescribeObservationRequest, callback?: (err: AWSError, data: ApplicationInsights.Types.DescribeObservationResponse) => void): Request<ApplicationInsights.Types.DescribeObservationResponse, AWSError>;
  /**
   * Describes an anomaly or error with the application.
   */
  describeObservation(callback?: (err: AWSError, data: ApplicationInsights.Types.DescribeObservationResponse) => void): Request<ApplicationInsights.Types.DescribeObservationResponse, AWSError>;
  /**
   * Describes an application problem.
   */
  describeProblem(params: ApplicationInsights.Types.DescribeProblemRequest, callback?: (err: AWSError, data: ApplicationInsights.Types.DescribeProblemResponse) => void): Request<ApplicationInsights.Types.DescribeProblemResponse, AWSError>;
  /**
   * Describes an application problem.
   */
  describeProblem(callback?: (err: AWSError, data: ApplicationInsights.Types.DescribeProblemResponse) => void): Request<ApplicationInsights.Types.DescribeProblemResponse, AWSError>;
  /**
   * Describes the anomalies or errors associated with the problem.
   */
  describeProblemObservations(params: ApplicationInsights.Types.DescribeProblemObservationsRequest, callback?: (err: AWSError, data: ApplicationInsights.Types.DescribeProblemObservationsResponse) => void): Request<ApplicationInsights.Types.DescribeProblemObservationsResponse, AWSError>;
  /**
   * Describes the anomalies or errors associated with the problem.
   */
  describeProblemObservations(callback?: (err: AWSError, data: ApplicationInsights.Types.DescribeProblemObservationsResponse) => void): Request<ApplicationInsights.Types.DescribeProblemObservationsResponse, AWSError>;
  /**
   * Lists the IDs of the applications that you are monitoring. 
   */
  listApplications(params: ApplicationInsights.Types.ListApplicationsRequest, callback?: (err: AWSError, data: ApplicationInsights.Types.ListApplicationsResponse) => void): Request<ApplicationInsights.Types.ListApplicationsResponse, AWSError>;
  /**
   * Lists the IDs of the applications that you are monitoring. 
   */
  listApplications(callback?: (err: AWSError, data: ApplicationInsights.Types.ListApplicationsResponse) => void): Request<ApplicationInsights.Types.ListApplicationsResponse, AWSError>;
  /**
   * Lists the auto-grouped, standalone, and custom components of the application.
   */
  listComponents(params: ApplicationInsights.Types.ListComponentsRequest, callback?: (err: AWSError, data: ApplicationInsights.Types.ListComponentsResponse) => void): Request<ApplicationInsights.Types.ListComponentsResponse, AWSError>;
  /**
   * Lists the auto-grouped, standalone, and custom components of the application.
   */
  listComponents(callback?: (err: AWSError, data: ApplicationInsights.Types.ListComponentsResponse) => void): Request<ApplicationInsights.Types.ListComponentsResponse, AWSError>;
  /**
   * Lists the problems with your application.
   */
  listProblems(params: ApplicationInsights.Types.ListProblemsRequest, callback?: (err: AWSError, data: ApplicationInsights.Types.ListProblemsResponse) => void): Request<ApplicationInsights.Types.ListProblemsResponse, AWSError>;
  /**
   * Lists the problems with your application.
   */
  listProblems(callback?: (err: AWSError, data: ApplicationInsights.Types.ListProblemsResponse) => void): Request<ApplicationInsights.Types.ListProblemsResponse, AWSError>;
  /**
   * Updates the application.
   */
  updateApplication(params: ApplicationInsights.Types.UpdateApplicationRequest, callback?: (err: AWSError, data: ApplicationInsights.Types.UpdateApplicationResponse) => void): Request<ApplicationInsights.Types.UpdateApplicationResponse, AWSError>;
  /**
   * Updates the application.
   */
  updateApplication(callback?: (err: AWSError, data: ApplicationInsights.Types.UpdateApplicationResponse) => void): Request<ApplicationInsights.Types.UpdateApplicationResponse, AWSError>;
  /**
   * Updates the custom component name and/or the list of resources that make up the component.
   */
  updateComponent(params: ApplicationInsights.Types.UpdateComponentRequest, callback?: (err: AWSError, data: ApplicationInsights.Types.UpdateComponentResponse) => void): Request<ApplicationInsights.Types.UpdateComponentResponse, AWSError>;
  /**
   * Updates the custom component name and/or the list of resources that make up the component.
   */
  updateComponent(callback?: (err: AWSError, data: ApplicationInsights.Types.UpdateComponentResponse) => void): Request<ApplicationInsights.Types.UpdateComponentResponse, AWSError>;
  /**
   * Updates the monitoring configurations for the component. The configuration input parameter is an escaped JSON of the configuration and should match the schema of what is returned by DescribeComponentConfigurationRecommendation.
   */
  updateComponentConfiguration(params: ApplicationInsights.Types.UpdateComponentConfigurationRequest, callback?: (err: AWSError, data: ApplicationInsights.Types.UpdateComponentConfigurationResponse) => void): Request<ApplicationInsights.Types.UpdateComponentConfigurationResponse, AWSError>;
  /**
   * Updates the monitoring configurations for the component. The configuration input parameter is an escaped JSON of the configuration and should match the schema of what is returned by DescribeComponentConfigurationRecommendation.
   */
  updateComponentConfiguration(callback?: (err: AWSError, data: ApplicationInsights.Types.UpdateComponentConfigurationResponse) => void): Request<ApplicationInsights.Types.UpdateComponentConfigurationResponse, AWSError>;
}
declare namespace ApplicationInsights {
  export type AffectedResource = string;
  export interface ApplicationComponent {
    /**
     * The name of the component.
     */
    ComponentName?: ComponentName;
    /**
     * The resource type. Supported resource types include EC2 instances, Auto Scaling group, Classic ELB, Application ELB, and SQS Queue.
     */
    ResourceType?: ResourceType;
    /**
     * The stack tier of the application component.
     */
    Tier?: Tier;
    /**
     * Indicates whether the application component is monitored. 
     */
    Monitor?: Monitor;
  }
  export type ApplicationComponentList = ApplicationComponent[];
  export interface ApplicationInfo {
    /**
     * The name of the resource group used for the application.
     */
    ResourceGroupName?: ResourceGroupName;
    /**
     * The lifecycle of the application. 
     */
    LifeCycle?: LifeCycle;
    /**
     *  The SNS topic provided to Application Insights that is associated to the created opsItems to receive SNS notifications for opsItem updates. 
     */
    OpsItemSNSTopicArn?: OpsItemSNSTopicArn;
    /**
     *  Indicates whether Application Insights will create opsItems for any problem detected by Application Insights for an application. 
     */
    OpsCenterEnabled?: OpsCenterEnabled;
    /**
     * The issues on the user side that block Application Insights from successfully monitoring an application.
     */
    Remarks?: Remarks;
  }
  export type ApplicationInfoList = ApplicationInfo[];
  export type ComponentConfiguration = string;
  export type ComponentName = string;
  export interface CreateApplicationRequest {
    /**
     * The name of the resource group.
     */
    ResourceGroupName: ResourceGroupName;
    /**
     *  When set to true, creates opsItems for any problems detected on an application. 
     */
    OpsCenterEnabled?: OpsCenterEnabled;
    /**
     *  The SNS topic provided to Application Insights that is associated to the created opsItem. Allows you to receive notifications for updates to the opsItem. 
     */
    OpsItemSNSTopicArn?: OpsItemSNSTopicArn;
  }
  export interface CreateApplicationResponse {
    /**
     * Information about the application.
     */
    ApplicationInfo?: ApplicationInfo;
  }
  export interface CreateComponentRequest {
    /**
     * The name of the resource group.
     */
    ResourceGroupName: ResourceGroupName;
    /**
     * The name of the component.
     */
    ComponentName: ComponentName;
    /**
     * The list of resource ARNs that belong to the component.
     */
    ResourceList: ResourceList;
  }
  export interface CreateComponentResponse {
  }
  export interface DeleteApplicationRequest {
    /**
     * The name of the resource group.
     */
    ResourceGroupName: ResourceGroupName;
  }
  export interface DeleteApplicationResponse {
  }
  export interface DeleteComponentRequest {
    /**
     * The name of the resource group.
     */
    ResourceGroupName: ResourceGroupName;
    /**
     * The name of the component.
     */
    ComponentName: ComponentName;
  }
  export interface DeleteComponentResponse {
  }
  export interface DescribeApplicationRequest {
    /**
     * The name of the resource group.
     */
    ResourceGroupName: ResourceGroupName;
  }
  export interface DescribeApplicationResponse {
    /**
     * Information about the application.
     */
    ApplicationInfo?: ApplicationInfo;
  }
  export interface DescribeComponentConfigurationRecommendationRequest {
    /**
     * The name of the resource group.
     */
    ResourceGroupName: ResourceGroupName;
    /**
     * The name of the component.
     */
    ComponentName: ComponentName;
    /**
     * The tier of the application component. Supported tiers include DOT_NET_WORKER, DOT_NET_WEB, SQL_SERVER, and DEFAULT.
     */
    Tier: Tier;
  }
  export interface DescribeComponentConfigurationRecommendationResponse {
    /**
     * The recommended configuration settings of the component. The value is the escaped JSON of the configuration.
     */
    ComponentConfiguration?: ComponentConfiguration;
  }
  export interface DescribeComponentConfigurationRequest {
    /**
     * The name of the resource group.
     */
    ResourceGroupName: ResourceGroupName;
    /**
     * The name of the component.
     */
    ComponentName: ComponentName;
  }
  export interface DescribeComponentConfigurationResponse {
    /**
     * Indicates whether the application component is monitored.
     */
    Monitor?: Monitor;
    /**
     * The tier of the application component. Supported tiers include DOT_NET_WORKER, DOT_NET_WEB, SQL_SERVER, and DEFAULT 
     */
    Tier?: Tier;
    /**
     * The configuration settings of the component. The value is the escaped JSON of the configuration.
     */
    ComponentConfiguration?: ComponentConfiguration;
  }
  export interface DescribeComponentRequest {
    /**
     * The name of the resource group.
     */
    ResourceGroupName: ResourceGroupName;
    /**
     * The name of the component.
     */
    ComponentName: ComponentName;
  }
  export interface DescribeComponentResponse {
    ApplicationComponent?: ApplicationComponent;
    /**
     * The list of resource ARNs that belong to the component.
     */
    ResourceList?: ResourceList;
  }
  export interface DescribeObservationRequest {
    /**
     * The ID of the observation.
     */
    ObservationId: ObservationId;
  }
  export interface DescribeObservationResponse {
    /**
     * Information about the observation.
     */
    Observation?: Observation;
  }
  export interface DescribeProblemObservationsRequest {
    /**
     * The ID of the problem.
     */
    ProblemId: ProblemId;
  }
  export interface DescribeProblemObservationsResponse {
    /**
     * Observations related to the problem.
     */
    RelatedObservations?: RelatedObservations;
  }
  export interface DescribeProblemRequest {
    /**
     * The ID of the problem.
     */
    ProblemId: ProblemId;
  }
  export interface DescribeProblemResponse {
    /**
     * Information about the problem. 
     */
    Problem?: Problem;
  }
  export type EndTime = Date;
  export type Feedback = {[key: string]: FeedbackValue};
  export type FeedbackKey = "INSIGHTS_FEEDBACK"|string;
  export type FeedbackValue = "NOT_SPECIFIED"|"USEFUL"|"NOT_USEFUL"|string;
  export type Insights = string;
  export type LifeCycle = string;
  export type LineTime = Date;
  export interface ListApplicationsRequest {
    /**
     * The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned NextToken value.
     */
    MaxResults?: MaxEntities;
    /**
     * The token to request the next page of results.
     */
    NextToken?: PaginationToken;
  }
  export interface ListApplicationsResponse {
    /**
     * The list of applications.
     */
    ApplicationInfoList?: ApplicationInfoList;
    /**
     * The token used to retrieve the next page of results. This value is null when there are no more results to return. 
     */
    NextToken?: PaginationToken;
  }
  export interface ListComponentsRequest {
    /**
     * The name of the resource group.
     */
    ResourceGroupName: ResourceGroupName;
    /**
     * The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned NextToken value.
     */
    MaxResults?: MaxEntities;
    /**
     * The token to request the next page of results.
     */
    NextToken?: PaginationToken;
  }
  export interface ListComponentsResponse {
    /**
     * The list of application components.
     */
    ApplicationComponentList?: ApplicationComponentList;
    /**
     * The token to request the next page of results.
     */
    NextToken?: PaginationToken;
  }
  export interface ListProblemsRequest {
    /**
     * The name of the resource group.
     */
    ResourceGroupName?: ResourceGroupName;
    /**
     * The time when the problem was detected, in epoch seconds. If you don't specify a time frame for the request, problems within the past seven days are returned.
     */
    StartTime?: StartTime;
    /**
     * The time when the problem ended, in epoch seconds. If not specified, problems within the past seven days are returned.
     */
    EndTime?: EndTime;
    /**
     * The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned NextToken value.
     */
    MaxResults?: MaxEntities;
    /**
     * The token to request the next page of results.
     */
    NextToken?: PaginationToken;
  }
  export interface ListProblemsResponse {
    /**
     * The list of problems. 
     */
    ProblemList?: ProblemList;
    /**
     * The token used to retrieve the next page of results. This value is null when there are no more results to return. 
     */
    NextToken?: PaginationToken;
  }
  export type LogFilter = "ERROR"|"WARN"|"INFO"|string;
  export type LogGroup = string;
  export type LogText = string;
  export type MaxEntities = number;
  export type MetricName = string;
  export type MetricNamespace = string;
  export type Monitor = boolean;
  export type NewComponentName = string;
  export interface Observation {
    /**
     * The ID of the observation type.
     */
    Id?: ObservationId;
    /**
     * The time when the observation was first detected, in epoch seconds.
     */
    StartTime?: StartTime;
    /**
     * The time when the observation ended, in epoch seconds.
     */
    EndTime?: EndTime;
    /**
     * The source type of the observation.
     */
    SourceType?: SourceType;
    /**
     * The source resource ARN of the observation.
     */
    SourceARN?: SourceARN;
    /**
     * The log group name.
     */
    LogGroup?: LogGroup;
    /**
     * The timestamp in the CloudWatch Logs that specifies when the matched line occurred.
     */
    LineTime?: LineTime;
    /**
     * The log text of the observation.
     */
    LogText?: LogText;
    /**
     * The log filter of the observation.
     */
    LogFilter?: LogFilter;
    /**
     * The namespace of the observation metric.
     */
    MetricNamespace?: MetricNamespace;
    /**
     * The name of the observation metric.
     */
    MetricName?: MetricName;
    /**
     * The unit of the source observation metric.
     */
    Unit?: Unit;
    /**
     * The value of the source observation metric.
     */
    Value?: Value;
  }
  export type ObservationId = string;
  export type ObservationList = Observation[];
  export type OpsCenterEnabled = boolean;
  export type OpsItemSNSTopicArn = string;
  export type PaginationToken = string;
  export interface Problem {
    /**
     * The ID of the problem.
     */
    Id?: ProblemId;
    /**
     * The name of the problem.
     */
    Title?: Title;
    /**
     * A detailed analysis of the problem using machine learning.
     */
    Insights?: Insights;
    /**
     * The status of the problem.
     */
    Status?: Status;
    /**
     * The resource affected by the problem.
     */
    AffectedResource?: AffectedResource;
    /**
     * The time when the problem started, in epoch seconds.
     */
    StartTime?: StartTime;
    /**
     * The time when the problem ended, in epoch seconds.
     */
    EndTime?: EndTime;
    /**
     * A measure of the level of impact of the problem.
     */
    SeverityLevel?: SeverityLevel;
    /**
     * The name of the resource group affected by the problem.
     */
    ResourceGroupName?: ResourceGroupName;
    /**
     * Feedback provided by the user about the problem.
     */
    Feedback?: Feedback;
  }
  export type ProblemId = string;
  export type ProblemList = Problem[];
  export interface RelatedObservations {
    /**
     * The list of observations related to the problem.
     */
    ObservationList?: ObservationList;
  }
  export type Remarks = string;
  export type RemoveSNSTopic = boolean;
  export type ResourceARN = string;
  export type ResourceGroupName = string;
  export type ResourceList = ResourceARN[];
  export type ResourceType = string;
  export type SeverityLevel = "LOW"|"MEDIUM"|"HIGH"|string;
  export type SourceARN = string;
  export type SourceType = string;
  export type StartTime = Date;
  export type Status = "IGNORE"|"RESOLVED"|"PENDING"|string;
  export type Tier = string;
  export type Title = string;
  export type Unit = string;
  export interface UpdateApplicationRequest {
    /**
     * The name of the resource group.
     */
    ResourceGroupName: ResourceGroupName;
    /**
     *  When set to true, creates opsItems for any problems detected on an application. 
     */
    OpsCenterEnabled?: OpsCenterEnabled;
    /**
     *  The SNS topic provided to Application Insights that is associated to the created opsItem. Allows you to receive notifications for updates to the opsItem.
     */
    OpsItemSNSTopicArn?: OpsItemSNSTopicArn;
    /**
     *  Disassociates the SNS topic from the opsItem created for detected problems.
     */
    RemoveSNSTopic?: RemoveSNSTopic;
  }
  export interface UpdateApplicationResponse {
    /**
     * Information about the application. 
     */
    ApplicationInfo?: ApplicationInfo;
  }
  export interface UpdateComponentConfigurationRequest {
    /**
     * The name of the resource group.
     */
    ResourceGroupName: ResourceGroupName;
    /**
     * The name of the component.
     */
    ComponentName: ComponentName;
    /**
     * Indicates whether the application component is monitored.
     */
    Monitor?: Monitor;
    /**
     * The tier of the application component. Supported tiers include DOT_NET_WORKER, DOT_NET_WEB, SQL_SERVER, and DEFAULT.
     */
    Tier?: Tier;
    /**
     * The configuration settings of the component. The value is the escaped JSON of the configuration. For more information about the JSON format, see Working with JSON. You can send a request to DescribeComponentConfigurationRecommendation to see the recommended configuration for a component.
     */
    ComponentConfiguration?: ComponentConfiguration;
  }
  export interface UpdateComponentConfigurationResponse {
  }
  export interface UpdateComponentRequest {
    /**
     * The name of the resource group.
     */
    ResourceGroupName: ResourceGroupName;
    /**
     * The name of the component.
     */
    ComponentName: ComponentName;
    /**
     * The new name of the component.
     */
    NewComponentName?: NewComponentName;
    /**
     * The list of resource ARNs that belong to the component.
     */
    ResourceList?: ResourceList;
  }
  export interface UpdateComponentResponse {
  }
  export type Value = number;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-11-25"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the ApplicationInsights client.
   */
  export import Types = ApplicationInsights;
}
export = ApplicationInsights;
