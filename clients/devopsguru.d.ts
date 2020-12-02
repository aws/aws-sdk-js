import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class DevOpsGuru extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: DevOpsGuru.Types.ClientConfiguration)
  config: Config & DevOpsGuru.Types.ClientConfiguration;
  /**
   * 
   */
  addNotificationChannel(params: DevOpsGuru.Types.AddNotificationChannelRequest, callback?: (err: AWSError, data: DevOpsGuru.Types.AddNotificationChannelResponse) => void): Request<DevOpsGuru.Types.AddNotificationChannelResponse, AWSError>;
  /**
   * 
   */
  addNotificationChannel(callback?: (err: AWSError, data: DevOpsGuru.Types.AddNotificationChannelResponse) => void): Request<DevOpsGuru.Types.AddNotificationChannelResponse, AWSError>;
  /**
   * 
   */
  describeAccountHealth(params: DevOpsGuru.Types.DescribeAccountHealthRequest, callback?: (err: AWSError, data: DevOpsGuru.Types.DescribeAccountHealthResponse) => void): Request<DevOpsGuru.Types.DescribeAccountHealthResponse, AWSError>;
  /**
   * 
   */
  describeAccountHealth(callback?: (err: AWSError, data: DevOpsGuru.Types.DescribeAccountHealthResponse) => void): Request<DevOpsGuru.Types.DescribeAccountHealthResponse, AWSError>;
  /**
   * 
   */
  describeAccountOverview(params: DevOpsGuru.Types.DescribeAccountOverviewRequest, callback?: (err: AWSError, data: DevOpsGuru.Types.DescribeAccountOverviewResponse) => void): Request<DevOpsGuru.Types.DescribeAccountOverviewResponse, AWSError>;
  /**
   * 
   */
  describeAccountOverview(callback?: (err: AWSError, data: DevOpsGuru.Types.DescribeAccountOverviewResponse) => void): Request<DevOpsGuru.Types.DescribeAccountOverviewResponse, AWSError>;
  /**
   * 
   */
  describeAnomaly(params: DevOpsGuru.Types.DescribeAnomalyRequest, callback?: (err: AWSError, data: DevOpsGuru.Types.DescribeAnomalyResponse) => void): Request<DevOpsGuru.Types.DescribeAnomalyResponse, AWSError>;
  /**
   * 
   */
  describeAnomaly(callback?: (err: AWSError, data: DevOpsGuru.Types.DescribeAnomalyResponse) => void): Request<DevOpsGuru.Types.DescribeAnomalyResponse, AWSError>;
  /**
   * 
   */
  describeInsight(params: DevOpsGuru.Types.DescribeInsightRequest, callback?: (err: AWSError, data: DevOpsGuru.Types.DescribeInsightResponse) => void): Request<DevOpsGuru.Types.DescribeInsightResponse, AWSError>;
  /**
   * 
   */
  describeInsight(callback?: (err: AWSError, data: DevOpsGuru.Types.DescribeInsightResponse) => void): Request<DevOpsGuru.Types.DescribeInsightResponse, AWSError>;
  /**
   * 
   */
  describeResourceCollectionHealth(params: DevOpsGuru.Types.DescribeResourceCollectionHealthRequest, callback?: (err: AWSError, data: DevOpsGuru.Types.DescribeResourceCollectionHealthResponse) => void): Request<DevOpsGuru.Types.DescribeResourceCollectionHealthResponse, AWSError>;
  /**
   * 
   */
  describeResourceCollectionHealth(callback?: (err: AWSError, data: DevOpsGuru.Types.DescribeResourceCollectionHealthResponse) => void): Request<DevOpsGuru.Types.DescribeResourceCollectionHealthResponse, AWSError>;
  /**
   * 
   */
  describeServiceIntegration(params: DevOpsGuru.Types.DescribeServiceIntegrationRequest, callback?: (err: AWSError, data: DevOpsGuru.Types.DescribeServiceIntegrationResponse) => void): Request<DevOpsGuru.Types.DescribeServiceIntegrationResponse, AWSError>;
  /**
   * 
   */
  describeServiceIntegration(callback?: (err: AWSError, data: DevOpsGuru.Types.DescribeServiceIntegrationResponse) => void): Request<DevOpsGuru.Types.DescribeServiceIntegrationResponse, AWSError>;
  /**
   * 
   */
  getResourceCollection(params: DevOpsGuru.Types.GetResourceCollectionRequest, callback?: (err: AWSError, data: DevOpsGuru.Types.GetResourceCollectionResponse) => void): Request<DevOpsGuru.Types.GetResourceCollectionResponse, AWSError>;
  /**
   * 
   */
  getResourceCollection(callback?: (err: AWSError, data: DevOpsGuru.Types.GetResourceCollectionResponse) => void): Request<DevOpsGuru.Types.GetResourceCollectionResponse, AWSError>;
  /**
   * 
   */
  listAnomaliesForInsight(params: DevOpsGuru.Types.ListAnomaliesForInsightRequest, callback?: (err: AWSError, data: DevOpsGuru.Types.ListAnomaliesForInsightResponse) => void): Request<DevOpsGuru.Types.ListAnomaliesForInsightResponse, AWSError>;
  /**
   * 
   */
  listAnomaliesForInsight(callback?: (err: AWSError, data: DevOpsGuru.Types.ListAnomaliesForInsightResponse) => void): Request<DevOpsGuru.Types.ListAnomaliesForInsightResponse, AWSError>;
  /**
   * 
   */
  listEvents(params: DevOpsGuru.Types.ListEventsRequest, callback?: (err: AWSError, data: DevOpsGuru.Types.ListEventsResponse) => void): Request<DevOpsGuru.Types.ListEventsResponse, AWSError>;
  /**
   * 
   */
  listEvents(callback?: (err: AWSError, data: DevOpsGuru.Types.ListEventsResponse) => void): Request<DevOpsGuru.Types.ListEventsResponse, AWSError>;
  /**
   * 
   */
  listInsights(params: DevOpsGuru.Types.ListInsightsRequest, callback?: (err: AWSError, data: DevOpsGuru.Types.ListInsightsResponse) => void): Request<DevOpsGuru.Types.ListInsightsResponse, AWSError>;
  /**
   * 
   */
  listInsights(callback?: (err: AWSError, data: DevOpsGuru.Types.ListInsightsResponse) => void): Request<DevOpsGuru.Types.ListInsightsResponse, AWSError>;
  /**
   * 
   */
  listNotificationChannels(params: DevOpsGuru.Types.ListNotificationChannelsRequest, callback?: (err: AWSError, data: DevOpsGuru.Types.ListNotificationChannelsResponse) => void): Request<DevOpsGuru.Types.ListNotificationChannelsResponse, AWSError>;
  /**
   * 
   */
  listNotificationChannels(callback?: (err: AWSError, data: DevOpsGuru.Types.ListNotificationChannelsResponse) => void): Request<DevOpsGuru.Types.ListNotificationChannelsResponse, AWSError>;
  /**
   * 
   */
  listRecommendations(params: DevOpsGuru.Types.ListRecommendationsRequest, callback?: (err: AWSError, data: DevOpsGuru.Types.ListRecommendationsResponse) => void): Request<DevOpsGuru.Types.ListRecommendationsResponse, AWSError>;
  /**
   * 
   */
  listRecommendations(callback?: (err: AWSError, data: DevOpsGuru.Types.ListRecommendationsResponse) => void): Request<DevOpsGuru.Types.ListRecommendationsResponse, AWSError>;
  /**
   * 
   */
  putFeedback(params: DevOpsGuru.Types.PutFeedbackRequest, callback?: (err: AWSError, data: DevOpsGuru.Types.PutFeedbackResponse) => void): Request<DevOpsGuru.Types.PutFeedbackResponse, AWSError>;
  /**
   * 
   */
  putFeedback(callback?: (err: AWSError, data: DevOpsGuru.Types.PutFeedbackResponse) => void): Request<DevOpsGuru.Types.PutFeedbackResponse, AWSError>;
  /**
   * 
   */
  removeNotificationChannel(params: DevOpsGuru.Types.RemoveNotificationChannelRequest, callback?: (err: AWSError, data: DevOpsGuru.Types.RemoveNotificationChannelResponse) => void): Request<DevOpsGuru.Types.RemoveNotificationChannelResponse, AWSError>;
  /**
   * 
   */
  removeNotificationChannel(callback?: (err: AWSError, data: DevOpsGuru.Types.RemoveNotificationChannelResponse) => void): Request<DevOpsGuru.Types.RemoveNotificationChannelResponse, AWSError>;
  /**
   * 
   */
  searchInsights(params: DevOpsGuru.Types.SearchInsightsRequest, callback?: (err: AWSError, data: DevOpsGuru.Types.SearchInsightsResponse) => void): Request<DevOpsGuru.Types.SearchInsightsResponse, AWSError>;
  /**
   * 
   */
  searchInsights(callback?: (err: AWSError, data: DevOpsGuru.Types.SearchInsightsResponse) => void): Request<DevOpsGuru.Types.SearchInsightsResponse, AWSError>;
  /**
   * 
   */
  updateResourceCollection(params: DevOpsGuru.Types.UpdateResourceCollectionRequest, callback?: (err: AWSError, data: DevOpsGuru.Types.UpdateResourceCollectionResponse) => void): Request<DevOpsGuru.Types.UpdateResourceCollectionResponse, AWSError>;
  /**
   * 
   */
  updateResourceCollection(callback?: (err: AWSError, data: DevOpsGuru.Types.UpdateResourceCollectionResponse) => void): Request<DevOpsGuru.Types.UpdateResourceCollectionResponse, AWSError>;
  /**
   * 
   */
  updateServiceIntegration(params: DevOpsGuru.Types.UpdateServiceIntegrationRequest, callback?: (err: AWSError, data: DevOpsGuru.Types.UpdateServiceIntegrationResponse) => void): Request<DevOpsGuru.Types.UpdateServiceIntegrationResponse, AWSError>;
  /**
   * 
   */
  updateServiceIntegration(callback?: (err: AWSError, data: DevOpsGuru.Types.UpdateServiceIntegrationResponse) => void): Request<DevOpsGuru.Types.UpdateServiceIntegrationResponse, AWSError>;
}
declare namespace DevOpsGuru {
  export interface AddNotificationChannelRequest {
    Config: NotificationChannelConfig;
  }
  export interface AddNotificationChannelResponse {
    Id?: __stringMin36Max36PatternAF098AF094AF094AF094AF0912;
  }
  export type AnomalySeverity = "LOW"|"MEDIUM"|"HIGH"|string;
  export interface AnomalySourceDetails {
    CloudWatchMetrics?: __listOfCloudWatchMetricsDetail;
  }
  export type AnomalyStatus = "ONGOING"|"CLOSED"|string;
  export interface AnomalyTimeRange {
    EndTime?: __timestampUnix;
    StartTime: __timestampUnix;
  }
  export interface CloudFormationCollection {
    StackNames?: __listOf__stringMin1Max128PatternAZAZAZAZ09;
  }
  export interface CloudFormationCollectionFilter {
    StackNames?: __listOf__stringMin1Max128PatternAZAZAZAZ09;
  }
  export interface CloudFormationHealth {
    Insight?: InsightHealth;
    StackName?: __stringMin1Max128PatternAZAZAZAZ09;
  }
  export interface CloudWatchMetricsDetail {
    Dimensions?: __listOfCloudWatchMetricsDimension;
    MetricName?: __string;
    Namespace?: __string;
    Period?: __integer;
    Stat?: CloudWatchMetricsStat;
    Unit?: __string;
  }
  export interface CloudWatchMetricsDimension {
    Name?: __string;
    Value?: __string;
  }
  export type CloudWatchMetricsStat = "Sum"|"Average"|"SampleCount"|"Minimum"|"Maximum"|"p99"|"p90"|"p50"|string;
  export interface DescribeAccountHealthRequest {
  }
  export interface DescribeAccountHealthResponse {
    MetricsAnalyzed?: __integer;
    OpenProactiveInsights?: __integer;
    OpenReactiveInsights?: __integer;
  }
  export interface DescribeAccountOverviewRequest {
    FromTime: __timestampUnix;
    ToTime?: __timestampUnix;
  }
  export interface DescribeAccountOverviewResponse {
    MeanTimeToRecoverInMilliseconds?: __long;
    ProactiveInsights?: __integer;
    ReactiveInsights?: __integer;
  }
  export interface DescribeAnomalyRequest {
    Id: __string;
  }
  export interface DescribeAnomalyResponse {
    ProactiveAnomaly?: ProactiveAnomaly;
    ReactiveAnomaly?: ReactiveAnomaly;
  }
  export interface DescribeInsightRequest {
    Id: __string;
  }
  export interface DescribeInsightResponse {
    ProactiveInsight?: ProactiveInsight;
    ReactiveInsight?: ReactiveInsight;
  }
  export interface DescribeResourceCollectionHealthRequest {
    NextToken?: __string;
    ResourceCollectionType: __string;
  }
  export interface DescribeResourceCollectionHealthResponse {
    CloudFormation?: __listOfCloudFormationHealth;
    NextToken?: __stringMin36Max36PatternAF098AF094AF094AF094AF0912;
  }
  export interface DescribeServiceIntegrationRequest {
  }
  export interface DescribeServiceIntegrationResponse {
    ServiceIntegration?: ServiceIntegrationConfig;
  }
  export interface EndTimeRange {
    FromTime?: __timestampUnix;
    ToTime?: __timestampUnix;
  }
  export interface Event {
    DataSource?: EventDataSource;
    EventClass?: EventClass;
    EventSource?: __stringMin10Max50PatternAZAZ09AmazonawsComAwsEvents;
    Id?: __string;
    Name?: __stringMin0Max50;
    ResourceCollection?: ResourceCollection;
    Resources?: __listOfEventResource;
    Time?: __timestampUnix;
  }
  export type EventClass = "INFRASTRUCTURE"|"DEPLOYMENT"|"SECURITY_CHANGE"|"CONFIG_CHANGE"|"SCHEMA_CHANGE"|string;
  export type EventDataSource = "AWS_CLOUD_TRAIL"|"AWS_CODE_DEPLOY"|string;
  export interface EventResource {
    Arn?: __stringMin36Max2048PatternArnAwsAZAZ09AZ09D12;
    Name?: __stringMin0Max2048Pattern;
    Type?: __stringMin0Max2048Pattern;
  }
  export interface EventTimeRange {
    FromTime: __timestampUnix;
    ToTime: __timestampUnix;
  }
  export interface GetResourceCollectionRequest {
    NextToken?: __string;
    ResourceCollectionType: __string;
  }
  export interface GetResourceCollectionResponse {
    NextToken?: __stringMin36Max36PatternAF098AF094AF094AF094AF0912;
    ResourceCollection?: ResourceCollectionFilter;
  }
  export interface InsightFeedback {
    Feedback?: InsightFeedbackOption;
    Id?: __stringMin1Max100PatternW;
  }
  export type InsightFeedbackOption = "VALID_COLLECTION"|"RECOMMENDATION_USEFUL"|"ALERT_TOO_SENSITIVE"|"DATA_NOISY_ANOMALY"|"DATA_INCORRECT"|string;
  export interface InsightHealth {
    MeanTimeToRecoverInMilliseconds?: __long;
    OpenProactiveInsights?: __integer;
    OpenReactiveInsights?: __integer;
  }
  export type InsightSeverity = "LOW"|"MEDIUM"|"HIGH"|string;
  export type InsightStatus = "ONGOING"|"CLOSED"|string;
  export interface InsightTimeRange {
    EndTime?: __timestampUnix;
    StartTime: __timestampUnix;
  }
  export type InsightType = "REACTIVE"|"PROACTIVE"|string;
  export interface ListAnomaliesForInsightRequest {
    InsightId: __string;
    MaxResults?: __integerMin1Max500;
    NextToken?: __stringMin36Max36PatternAF098AF094AF094AF094AF0912;
    StartTimeRange?: StartTimeRange;
  }
  export interface ListAnomaliesForInsightResponse {
    NextToken?: __stringMin36Max36PatternAF098AF094AF094AF094AF0912;
    ProactiveAnomalies?: __listOfProactiveAnomalySummary;
    ReactiveAnomalies?: __listOfReactiveAnomalySummary;
  }
  export interface ListEventsFilters {
    DataSource?: EventDataSource;
    EventClass?: EventClass;
    EventSource?: __stringMin10Max50PatternAZAZ09AmazonawsComAwsEvents;
    EventTimeRange?: EventTimeRange;
    InsightId?: __stringMin1Max100PatternW;
    ResourceCollection?: ResourceCollection;
  }
  export interface ListEventsRequest {
    Filters: ListEventsFilters;
    MaxResults?: __integerMin1Max200;
    NextToken?: __stringMin36Max36PatternAF098AF094AF094AF094AF0912;
  }
  export interface ListEventsResponse {
    Events?: __listOfEvent;
    NextToken?: __stringMin36Max36PatternAF098AF094AF094AF094AF0912;
  }
  export interface ListInsightsAnyStatusFilter {
    StartTimeRange: StartTimeRange;
    Type: InsightType;
  }
  export interface ListInsightsClosedStatusFilter {
    EndTimeRange: EndTimeRange;
    Type: InsightType;
  }
  export interface ListInsightsOngoingStatusFilter {
    Type: InsightType;
  }
  export interface ListInsightsRequest {
    MaxResults?: __integerMin1Max100;
    NextToken?: __stringMin36Max36PatternAF098AF094AF094AF094AF0912;
    StatusFilter: ListInsightsStatusFilter;
  }
  export interface ListInsightsResponse {
    NextToken?: __stringMin36Max36PatternAF098AF094AF094AF094AF0912;
    ProactiveInsights?: __listOfProactiveInsightSummary;
    ReactiveInsights?: __listOfReactiveInsightSummary;
  }
  export interface ListInsightsStatusFilter {
    Any?: ListInsightsAnyStatusFilter;
    Closed?: ListInsightsClosedStatusFilter;
    Ongoing?: ListInsightsOngoingStatusFilter;
  }
  export interface ListNotificationChannelsRequest {
    NextToken?: __stringMin36Max36PatternAF098AF094AF094AF094AF0912;
  }
  export interface ListNotificationChannelsResponse {
    Channels?: __listOfNotificationChannel;
    NextToken?: __stringMin36Max36PatternAF098AF094AF094AF094AF0912;
  }
  export interface ListRecommendationsRequest {
    InsightId: __stringMin1Max100PatternW;
    NextToken?: __stringMin36Max36PatternAF098AF094AF094AF094AF0912;
  }
  export interface ListRecommendationsResponse {
    NextToken?: __stringMin36Max36PatternAF098AF094AF094AF094AF0912;
    Recommendations?: __listOfRecommendation;
  }
  export interface NotificationChannel {
    Config?: NotificationChannelConfig;
    Id?: __stringMin36Max36PatternAF098AF094AF094AF094AF0912;
  }
  export interface NotificationChannelConfig {
    Sns: SnsChannelConfig;
  }
  export interface OpsCenterIntegration {
    OptInStatus?: OptInStatus;
  }
  export interface OpsCenterIntegrationConfig {
    OptInStatus?: OptInStatus;
  }
  export type OptInStatus = "ENABLED"|"DISABLED"|string;
  export interface PredictionTimeRange {
    EndTime?: __timestampUnix;
    StartTime: __timestampUnix;
  }
  export interface ProactiveAnomaly {
    AnomalyTimeRange?: AnomalyTimeRange;
    AssociatedInsightId?: __stringMin1Max100PatternW;
    Id?: __stringMin1Max100PatternW;
    Limit?: __double;
    PredictionTimeRange?: PredictionTimeRange;
    ResourceCollection?: ResourceCollection;
    Severity?: AnomalySeverity;
    SourceDetails?: AnomalySourceDetails;
    Status?: AnomalyStatus;
    UpdateTime?: __timestampUnix;
  }
  export interface ProactiveAnomalySummary {
    AnomalyTimeRange?: AnomalyTimeRange;
    AssociatedInsightId?: __stringMin1Max100PatternW;
    Id?: __stringMin1Max100PatternW;
    Limit?: __double;
    PredictionTimeRange?: PredictionTimeRange;
    ResourceCollection?: ResourceCollection;
    Severity?: AnomalySeverity;
    SourceDetails?: AnomalySourceDetails;
    Status?: AnomalyStatus;
    UpdateTime?: __timestampUnix;
  }
  export interface ProactiveInsight {
    Id?: __stringMin1Max100PatternW;
    InsightTimeRange?: InsightTimeRange;
    Name?: __stringMin1Max530PatternSS;
    PredictionTimeRange?: PredictionTimeRange;
    ResourceCollection?: ResourceCollection;
    Severity?: InsightSeverity;
    SsmOpsItemId?: __stringMin1Max100Pattern;
    Status?: InsightStatus;
  }
  export interface ProactiveInsightSummary {
    Id?: __stringMin1Max100PatternW;
    InsightTimeRange?: InsightTimeRange;
    Name?: __stringMin1Max530PatternSS;
    PredictionTimeRange?: PredictionTimeRange;
    ResourceCollection?: ResourceCollection;
    Severity?: InsightSeverity;
    Status?: InsightStatus;
  }
  export interface PutFeedbackRequest {
    InsightFeedback?: InsightFeedback;
  }
  export interface PutFeedbackResponse {
  }
  export interface ReactiveAnomaly {
    AnomalyTimeRange?: AnomalyTimeRange;
    AssociatedInsightId?: __stringMin1Max100PatternW;
    Id?: __stringMin1Max100PatternW;
    ResourceCollection?: ResourceCollection;
    Severity?: AnomalySeverity;
    SourceDetails?: AnomalySourceDetails;
    Status?: AnomalyStatus;
  }
  export interface ReactiveAnomalySummary {
    AnomalyTimeRange?: AnomalyTimeRange;
    AssociatedInsightId?: __stringMin1Max100PatternW;
    Id?: __stringMin1Max100PatternW;
    ResourceCollection?: ResourceCollection;
    Severity?: AnomalySeverity;
    SourceDetails?: AnomalySourceDetails;
    Status?: AnomalyStatus;
  }
  export interface ReactiveInsight {
    Id?: __stringMin1Max100PatternW;
    InsightTimeRange?: InsightTimeRange;
    Name?: __stringMin1Max530PatternSS;
    ResourceCollection?: ResourceCollection;
    Severity?: InsightSeverity;
    SsmOpsItemId?: __stringMin1Max100Pattern;
    Status?: InsightStatus;
  }
  export interface ReactiveInsightSummary {
    Id?: __stringMin1Max100PatternW;
    InsightTimeRange?: InsightTimeRange;
    Name?: __stringMin1Max530PatternSS;
    ResourceCollection?: ResourceCollection;
    Severity?: InsightSeverity;
    Status?: InsightStatus;
  }
  export interface Recommendation {
    Description?: __string;
    Link?: __string;
    Name?: __string;
    Reason?: __string;
    RelatedAnomalies?: __listOfRecommendationRelatedAnomaly;
    RelatedEvents?: __listOfRecommendationRelatedEvent;
  }
  export interface RecommendationRelatedAnomaly {
    Resources?: __listOfRecommendationRelatedAnomalyResource;
    SourceDetails?: __listOfRecommendationRelatedAnomalySourceDetail;
  }
  export interface RecommendationRelatedAnomalyResource {
    Name?: __string;
    Type?: __string;
  }
  export interface RecommendationRelatedAnomalySourceDetail {
    CloudWatchMetrics?: __listOfRecommendationRelatedCloudWatchMetricsSourceDetail;
  }
  export interface RecommendationRelatedCloudWatchMetricsSourceDetail {
    MetricName?: __string;
    Namespace?: __string;
  }
  export interface RecommendationRelatedEvent {
    Name?: __string;
    Resources?: __listOfRecommendationRelatedEventResource;
  }
  export interface RecommendationRelatedEventResource {
    Name?: __string;
    Type?: __string;
  }
  export interface RemoveNotificationChannelRequest {
    Id: __string;
  }
  export interface RemoveNotificationChannelResponse {
  }
  export interface ResourceCollection {
    CloudFormation?: CloudFormationCollection;
  }
  export interface ResourceCollectionFilter {
    CloudFormation?: CloudFormationCollectionFilter;
  }
  export interface SearchInsightsFilters {
    ResourceCollection?: ResourceCollection;
    Severities?: __listOfInsightSeverity;
    Statuses?: __listOfInsightStatus;
  }
  export interface SearchInsightsRequest {
    Filters?: SearchInsightsFilters;
    MaxResults?: __integerMin1Max100;
    NextToken?: __stringMin36Max36PatternAF098AF094AF094AF094AF0912;
    StartTimeRange: StartTimeRange;
    Type: InsightType;
  }
  export interface SearchInsightsResponse {
    NextToken?: __stringMin36Max36PatternAF098AF094AF094AF094AF0912;
    ProactiveInsights?: __listOfProactiveInsightSummary;
    ReactiveInsights?: __listOfReactiveInsightSummary;
  }
  export interface ServiceIntegrationConfig {
    OpsCenter?: OpsCenterIntegration;
  }
  export interface SnsChannelConfig {
    TopicArn?: __stringMin36Max1024PatternArnAwsAZ09SnsAZ09D12;
  }
  export interface StartTimeRange {
    FromTime?: __timestampUnix;
    ToTime?: __timestampUnix;
  }
  export interface UpdateCloudFormationCollectionFilter {
    StackNames?: __listOf__stringMin1Max128PatternAZAZAZAZ09;
  }
  export type UpdateResourceCollectionAction = "ADD"|"REMOVE"|string;
  export interface UpdateResourceCollectionFilter {
    CloudFormation?: UpdateCloudFormationCollectionFilter;
  }
  export interface UpdateResourceCollectionRequest {
    Action: UpdateResourceCollectionAction;
    ResourceCollection: UpdateResourceCollectionFilter;
  }
  export interface UpdateResourceCollectionResponse {
  }
  export interface UpdateServiceIntegrationConfig {
    OpsCenter?: OpsCenterIntegrationConfig;
  }
  export interface UpdateServiceIntegrationRequest {
    ServiceIntegration: UpdateServiceIntegrationConfig;
  }
  export interface UpdateServiceIntegrationResponse {
  }
  export type __double = number;
  export type __integer = number;
  export type __integerMin1Max100 = number;
  export type __integerMin1Max200 = number;
  export type __integerMin1Max500 = number;
  export type __listOfCloudFormationHealth = CloudFormationHealth[];
  export type __listOfCloudWatchMetricsDetail = CloudWatchMetricsDetail[];
  export type __listOfCloudWatchMetricsDimension = CloudWatchMetricsDimension[];
  export type __listOfEvent = Event[];
  export type __listOfEventResource = EventResource[];
  export type __listOfInsightSeverity = InsightSeverity[];
  export type __listOfInsightStatus = InsightStatus[];
  export type __listOfNotificationChannel = NotificationChannel[];
  export type __listOfProactiveAnomalySummary = ProactiveAnomalySummary[];
  export type __listOfProactiveInsightSummary = ProactiveInsightSummary[];
  export type __listOfReactiveAnomalySummary = ReactiveAnomalySummary[];
  export type __listOfReactiveInsightSummary = ReactiveInsightSummary[];
  export type __listOfRecommendation = Recommendation[];
  export type __listOfRecommendationRelatedAnomaly = RecommendationRelatedAnomaly[];
  export type __listOfRecommendationRelatedAnomalyResource = RecommendationRelatedAnomalyResource[];
  export type __listOfRecommendationRelatedAnomalySourceDetail = RecommendationRelatedAnomalySourceDetail[];
  export type __listOfRecommendationRelatedCloudWatchMetricsSourceDetail = RecommendationRelatedCloudWatchMetricsSourceDetail[];
  export type __listOfRecommendationRelatedEvent = RecommendationRelatedEvent[];
  export type __listOfRecommendationRelatedEventResource = RecommendationRelatedEventResource[];
  export type __listOf__stringMin1Max128PatternAZAZAZAZ09 = __stringMin1Max128PatternAZAZAZAZ09[];
  export type __long = number;
  export type __string = string;
  export type __stringMin0Max2048Pattern = string;
  export type __stringMin0Max50 = string;
  export type __stringMin10Max50PatternAZAZ09AmazonawsComAwsEvents = string;
  export type __stringMin1Max100Pattern = string;
  export type __stringMin1Max100PatternW = string;
  export type __stringMin1Max128PatternAZAZAZAZ09 = string;
  export type __stringMin1Max530PatternSS = string;
  export type __stringMin36Max1024PatternArnAwsAZ09SnsAZ09D12 = string;
  export type __stringMin36Max2048PatternArnAwsAZAZ09AZ09D12 = string;
  export type __stringMin36Max36PatternAF098AF094AF094AF094AF0912 = string;
  export type __timestampUnix = Date;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2020-12-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the DevOpsGuru client.
   */
  export import Types = DevOpsGuru;
}
export = DevOpsGuru;
