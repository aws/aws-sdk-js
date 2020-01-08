import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class XRay extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: XRay.Types.ClientConfiguration)
  config: Config & XRay.Types.ClientConfiguration;
  /**
   * Retrieves a list of traces specified by ID. Each trace is a collection of segment documents that originates from a single request. Use GetTraceSummaries to get a list of trace IDs.
   */
  batchGetTraces(params: XRay.Types.BatchGetTracesRequest, callback?: (err: AWSError, data: XRay.Types.BatchGetTracesResult) => void): Request<XRay.Types.BatchGetTracesResult, AWSError>;
  /**
   * Retrieves a list of traces specified by ID. Each trace is a collection of segment documents that originates from a single request. Use GetTraceSummaries to get a list of trace IDs.
   */
  batchGetTraces(callback?: (err: AWSError, data: XRay.Types.BatchGetTracesResult) => void): Request<XRay.Types.BatchGetTracesResult, AWSError>;
  /**
   * Creates a group resource with a name and a filter expression. 
   */
  createGroup(params: XRay.Types.CreateGroupRequest, callback?: (err: AWSError, data: XRay.Types.CreateGroupResult) => void): Request<XRay.Types.CreateGroupResult, AWSError>;
  /**
   * Creates a group resource with a name and a filter expression. 
   */
  createGroup(callback?: (err: AWSError, data: XRay.Types.CreateGroupResult) => void): Request<XRay.Types.CreateGroupResult, AWSError>;
  /**
   * Creates a rule to control sampling behavior for instrumented applications. Services retrieve rules with GetSamplingRules, and evaluate each rule in ascending order of priority for each request. If a rule matches, the service records a trace, borrowing it from the reservoir size. After 10 seconds, the service reports back to X-Ray with GetSamplingTargets to get updated versions of each in-use rule. The updated rule contains a trace quota that the service can use instead of borrowing from the reservoir.
   */
  createSamplingRule(params: XRay.Types.CreateSamplingRuleRequest, callback?: (err: AWSError, data: XRay.Types.CreateSamplingRuleResult) => void): Request<XRay.Types.CreateSamplingRuleResult, AWSError>;
  /**
   * Creates a rule to control sampling behavior for instrumented applications. Services retrieve rules with GetSamplingRules, and evaluate each rule in ascending order of priority for each request. If a rule matches, the service records a trace, borrowing it from the reservoir size. After 10 seconds, the service reports back to X-Ray with GetSamplingTargets to get updated versions of each in-use rule. The updated rule contains a trace quota that the service can use instead of borrowing from the reservoir.
   */
  createSamplingRule(callback?: (err: AWSError, data: XRay.Types.CreateSamplingRuleResult) => void): Request<XRay.Types.CreateSamplingRuleResult, AWSError>;
  /**
   * Deletes a group resource.
   */
  deleteGroup(params: XRay.Types.DeleteGroupRequest, callback?: (err: AWSError, data: XRay.Types.DeleteGroupResult) => void): Request<XRay.Types.DeleteGroupResult, AWSError>;
  /**
   * Deletes a group resource.
   */
  deleteGroup(callback?: (err: AWSError, data: XRay.Types.DeleteGroupResult) => void): Request<XRay.Types.DeleteGroupResult, AWSError>;
  /**
   * Deletes a sampling rule.
   */
  deleteSamplingRule(params: XRay.Types.DeleteSamplingRuleRequest, callback?: (err: AWSError, data: XRay.Types.DeleteSamplingRuleResult) => void): Request<XRay.Types.DeleteSamplingRuleResult, AWSError>;
  /**
   * Deletes a sampling rule.
   */
  deleteSamplingRule(callback?: (err: AWSError, data: XRay.Types.DeleteSamplingRuleResult) => void): Request<XRay.Types.DeleteSamplingRuleResult, AWSError>;
  /**
   * Retrieves the current encryption configuration for X-Ray data.
   */
  getEncryptionConfig(params: XRay.Types.GetEncryptionConfigRequest, callback?: (err: AWSError, data: XRay.Types.GetEncryptionConfigResult) => void): Request<XRay.Types.GetEncryptionConfigResult, AWSError>;
  /**
   * Retrieves the current encryption configuration for X-Ray data.
   */
  getEncryptionConfig(callback?: (err: AWSError, data: XRay.Types.GetEncryptionConfigResult) => void): Request<XRay.Types.GetEncryptionConfigResult, AWSError>;
  /**
   * Retrieves group resource details.
   */
  getGroup(params: XRay.Types.GetGroupRequest, callback?: (err: AWSError, data: XRay.Types.GetGroupResult) => void): Request<XRay.Types.GetGroupResult, AWSError>;
  /**
   * Retrieves group resource details.
   */
  getGroup(callback?: (err: AWSError, data: XRay.Types.GetGroupResult) => void): Request<XRay.Types.GetGroupResult, AWSError>;
  /**
   * Retrieves all active group details.
   */
  getGroups(params: XRay.Types.GetGroupsRequest, callback?: (err: AWSError, data: XRay.Types.GetGroupsResult) => void): Request<XRay.Types.GetGroupsResult, AWSError>;
  /**
   * Retrieves all active group details.
   */
  getGroups(callback?: (err: AWSError, data: XRay.Types.GetGroupsResult) => void): Request<XRay.Types.GetGroupsResult, AWSError>;
  /**
   * Retrieves all sampling rules.
   */
  getSamplingRules(params: XRay.Types.GetSamplingRulesRequest, callback?: (err: AWSError, data: XRay.Types.GetSamplingRulesResult) => void): Request<XRay.Types.GetSamplingRulesResult, AWSError>;
  /**
   * Retrieves all sampling rules.
   */
  getSamplingRules(callback?: (err: AWSError, data: XRay.Types.GetSamplingRulesResult) => void): Request<XRay.Types.GetSamplingRulesResult, AWSError>;
  /**
   * Retrieves information about recent sampling results for all sampling rules.
   */
  getSamplingStatisticSummaries(params: XRay.Types.GetSamplingStatisticSummariesRequest, callback?: (err: AWSError, data: XRay.Types.GetSamplingStatisticSummariesResult) => void): Request<XRay.Types.GetSamplingStatisticSummariesResult, AWSError>;
  /**
   * Retrieves information about recent sampling results for all sampling rules.
   */
  getSamplingStatisticSummaries(callback?: (err: AWSError, data: XRay.Types.GetSamplingStatisticSummariesResult) => void): Request<XRay.Types.GetSamplingStatisticSummariesResult, AWSError>;
  /**
   * Requests a sampling quota for rules that the service is using to sample requests. 
   */
  getSamplingTargets(params: XRay.Types.GetSamplingTargetsRequest, callback?: (err: AWSError, data: XRay.Types.GetSamplingTargetsResult) => void): Request<XRay.Types.GetSamplingTargetsResult, AWSError>;
  /**
   * Requests a sampling quota for rules that the service is using to sample requests. 
   */
  getSamplingTargets(callback?: (err: AWSError, data: XRay.Types.GetSamplingTargetsResult) => void): Request<XRay.Types.GetSamplingTargetsResult, AWSError>;
  /**
   * Retrieves a document that describes services that process incoming requests, and downstream services that they call as a result. Root services process incoming requests and make calls to downstream services. Root services are applications that use the AWS X-Ray SDK. Downstream services can be other applications, AWS resources, HTTP web APIs, or SQL databases.
   */
  getServiceGraph(params: XRay.Types.GetServiceGraphRequest, callback?: (err: AWSError, data: XRay.Types.GetServiceGraphResult) => void): Request<XRay.Types.GetServiceGraphResult, AWSError>;
  /**
   * Retrieves a document that describes services that process incoming requests, and downstream services that they call as a result. Root services process incoming requests and make calls to downstream services. Root services are applications that use the AWS X-Ray SDK. Downstream services can be other applications, AWS resources, HTTP web APIs, or SQL databases.
   */
  getServiceGraph(callback?: (err: AWSError, data: XRay.Types.GetServiceGraphResult) => void): Request<XRay.Types.GetServiceGraphResult, AWSError>;
  /**
   * Get an aggregation of service statistics defined by a specific time range.
   */
  getTimeSeriesServiceStatistics(params: XRay.Types.GetTimeSeriesServiceStatisticsRequest, callback?: (err: AWSError, data: XRay.Types.GetTimeSeriesServiceStatisticsResult) => void): Request<XRay.Types.GetTimeSeriesServiceStatisticsResult, AWSError>;
  /**
   * Get an aggregation of service statistics defined by a specific time range.
   */
  getTimeSeriesServiceStatistics(callback?: (err: AWSError, data: XRay.Types.GetTimeSeriesServiceStatisticsResult) => void): Request<XRay.Types.GetTimeSeriesServiceStatisticsResult, AWSError>;
  /**
   * Retrieves a service graph for one or more specific trace IDs.
   */
  getTraceGraph(params: XRay.Types.GetTraceGraphRequest, callback?: (err: AWSError, data: XRay.Types.GetTraceGraphResult) => void): Request<XRay.Types.GetTraceGraphResult, AWSError>;
  /**
   * Retrieves a service graph for one or more specific trace IDs.
   */
  getTraceGraph(callback?: (err: AWSError, data: XRay.Types.GetTraceGraphResult) => void): Request<XRay.Types.GetTraceGraphResult, AWSError>;
  /**
   * Retrieves IDs and annotations for traces available for a specified time frame using an optional filter. To get the full traces, pass the trace IDs to BatchGetTraces. A filter expression can target traced requests that hit specific service nodes or edges, have errors, or come from a known user. For example, the following filter expression targets traces that pass through api.example.com:  service("api.example.com")  This filter expression finds traces that have an annotation named account with the value 12345:  annotation.account = "12345"  For a full list of indexed fields and keywords that you can use in filter expressions, see Using Filter Expressions in the AWS X-Ray Developer Guide.
   */
  getTraceSummaries(params: XRay.Types.GetTraceSummariesRequest, callback?: (err: AWSError, data: XRay.Types.GetTraceSummariesResult) => void): Request<XRay.Types.GetTraceSummariesResult, AWSError>;
  /**
   * Retrieves IDs and annotations for traces available for a specified time frame using an optional filter. To get the full traces, pass the trace IDs to BatchGetTraces. A filter expression can target traced requests that hit specific service nodes or edges, have errors, or come from a known user. For example, the following filter expression targets traces that pass through api.example.com:  service("api.example.com")  This filter expression finds traces that have an annotation named account with the value 12345:  annotation.account = "12345"  For a full list of indexed fields and keywords that you can use in filter expressions, see Using Filter Expressions in the AWS X-Ray Developer Guide.
   */
  getTraceSummaries(callback?: (err: AWSError, data: XRay.Types.GetTraceSummariesResult) => void): Request<XRay.Types.GetTraceSummariesResult, AWSError>;
  /**
   * Updates the encryption configuration for X-Ray data.
   */
  putEncryptionConfig(params: XRay.Types.PutEncryptionConfigRequest, callback?: (err: AWSError, data: XRay.Types.PutEncryptionConfigResult) => void): Request<XRay.Types.PutEncryptionConfigResult, AWSError>;
  /**
   * Updates the encryption configuration for X-Ray data.
   */
  putEncryptionConfig(callback?: (err: AWSError, data: XRay.Types.PutEncryptionConfigResult) => void): Request<XRay.Types.PutEncryptionConfigResult, AWSError>;
  /**
   * Used by the AWS X-Ray daemon to upload telemetry.
   */
  putTelemetryRecords(params: XRay.Types.PutTelemetryRecordsRequest, callback?: (err: AWSError, data: XRay.Types.PutTelemetryRecordsResult) => void): Request<XRay.Types.PutTelemetryRecordsResult, AWSError>;
  /**
   * Used by the AWS X-Ray daemon to upload telemetry.
   */
  putTelemetryRecords(callback?: (err: AWSError, data: XRay.Types.PutTelemetryRecordsResult) => void): Request<XRay.Types.PutTelemetryRecordsResult, AWSError>;
  /**
   * Uploads segment documents to AWS X-Ray. The X-Ray SDK generates segment documents and sends them to the X-Ray daemon, which uploads them in batches. A segment document can be a completed segment, an in-progress segment, or an array of subsegments. Segments must include the following fields. For the full segment document schema, see AWS X-Ray Segment Documents in the AWS X-Ray Developer Guide.  Required Segment Document Fields     name - The name of the service that handled the request.    id - A 64-bit identifier for the segment, unique among segments in the same trace, in 16 hexadecimal digits.    trace_id - A unique identifier that connects all segments and subsegments originating from a single client request.    start_time - Time the segment or subsegment was created, in floating point seconds in epoch time, accurate to milliseconds. For example, 1480615200.010 or 1.480615200010E9.    end_time - Time the segment or subsegment was closed. For example, 1480615200.090 or 1.480615200090E9. Specify either an end_time or in_progress.    in_progress - Set to true instead of specifying an end_time to record that a segment has been started, but is not complete. Send an in progress segment when your application receives a request that will take a long time to serve, to trace the fact that the request was received. When the response is sent, send the complete segment to overwrite the in-progress segment.   A trace_id consists of three numbers separated by hyphens. For example, 1-58406520-a006649127e371903a2de979. This includes:  Trace ID Format    The version number, i.e. 1.   The time of the original request, in Unix epoch time, in 8 hexadecimal digits. For example, 10:00AM December 2nd, 2016 PST in epoch time is 1480615200 seconds, or 58406520 in hexadecimal.   A 96-bit identifier for the trace, globally unique, in 24 hexadecimal digits.  
   */
  putTraceSegments(params: XRay.Types.PutTraceSegmentsRequest, callback?: (err: AWSError, data: XRay.Types.PutTraceSegmentsResult) => void): Request<XRay.Types.PutTraceSegmentsResult, AWSError>;
  /**
   * Uploads segment documents to AWS X-Ray. The X-Ray SDK generates segment documents and sends them to the X-Ray daemon, which uploads them in batches. A segment document can be a completed segment, an in-progress segment, or an array of subsegments. Segments must include the following fields. For the full segment document schema, see AWS X-Ray Segment Documents in the AWS X-Ray Developer Guide.  Required Segment Document Fields     name - The name of the service that handled the request.    id - A 64-bit identifier for the segment, unique among segments in the same trace, in 16 hexadecimal digits.    trace_id - A unique identifier that connects all segments and subsegments originating from a single client request.    start_time - Time the segment or subsegment was created, in floating point seconds in epoch time, accurate to milliseconds. For example, 1480615200.010 or 1.480615200010E9.    end_time - Time the segment or subsegment was closed. For example, 1480615200.090 or 1.480615200090E9. Specify either an end_time or in_progress.    in_progress - Set to true instead of specifying an end_time to record that a segment has been started, but is not complete. Send an in progress segment when your application receives a request that will take a long time to serve, to trace the fact that the request was received. When the response is sent, send the complete segment to overwrite the in-progress segment.   A trace_id consists of three numbers separated by hyphens. For example, 1-58406520-a006649127e371903a2de979. This includes:  Trace ID Format    The version number, i.e. 1.   The time of the original request, in Unix epoch time, in 8 hexadecimal digits. For example, 10:00AM December 2nd, 2016 PST in epoch time is 1480615200 seconds, or 58406520 in hexadecimal.   A 96-bit identifier for the trace, globally unique, in 24 hexadecimal digits.  
   */
  putTraceSegments(callback?: (err: AWSError, data: XRay.Types.PutTraceSegmentsResult) => void): Request<XRay.Types.PutTraceSegmentsResult, AWSError>;
  /**
   * Updates a group resource.
   */
  updateGroup(params: XRay.Types.UpdateGroupRequest, callback?: (err: AWSError, data: XRay.Types.UpdateGroupResult) => void): Request<XRay.Types.UpdateGroupResult, AWSError>;
  /**
   * Updates a group resource.
   */
  updateGroup(callback?: (err: AWSError, data: XRay.Types.UpdateGroupResult) => void): Request<XRay.Types.UpdateGroupResult, AWSError>;
  /**
   * Modifies a sampling rule's configuration.
   */
  updateSamplingRule(params: XRay.Types.UpdateSamplingRuleRequest, callback?: (err: AWSError, data: XRay.Types.UpdateSamplingRuleResult) => void): Request<XRay.Types.UpdateSamplingRuleResult, AWSError>;
  /**
   * Modifies a sampling rule's configuration.
   */
  updateSamplingRule(callback?: (err: AWSError, data: XRay.Types.UpdateSamplingRuleResult) => void): Request<XRay.Types.UpdateSamplingRuleResult, AWSError>;
}
declare namespace XRay {
  export interface Alias {
    /**
     * The canonical name of the alias.
     */
    Name?: String;
    /**
     * A list of names for the alias, including the canonical name.
     */
    Names?: AliasNames;
    /**
     * The type of the alias.
     */
    Type?: String;
  }
  export type AliasList = Alias[];
  export type AliasNames = String[];
  export type AnnotationKey = string;
  export interface AnnotationValue {
    /**
     * Value for a Number annotation.
     */
    NumberValue?: NullableDouble;
    /**
     * Value for a Boolean annotation.
     */
    BooleanValue?: NullableBoolean;
    /**
     * Value for a String annotation.
     */
    StringValue?: String;
  }
  export type Annotations = {[key: string]: ValuesWithServiceIds};
  export type AttributeKey = string;
  export type AttributeMap = {[key: string]: AttributeValue};
  export type AttributeValue = string;
  export interface AvailabilityZoneDetail {
    /**
     * The name of a corresponding availability zone.
     */
    Name?: String;
  }
  export interface BackendConnectionErrors {
    /**
     * 
     */
    TimeoutCount?: NullableInteger;
    /**
     * 
     */
    ConnectionRefusedCount?: NullableInteger;
    /**
     * 
     */
    HTTPCode4XXCount?: NullableInteger;
    /**
     * 
     */
    HTTPCode5XXCount?: NullableInteger;
    /**
     * 
     */
    UnknownHostCount?: NullableInteger;
    /**
     * 
     */
    OtherCount?: NullableInteger;
  }
  export interface BatchGetTracesRequest {
    /**
     * Specify the trace IDs of requests for which to retrieve segments.
     */
    TraceIds: TraceIdList;
    /**
     * Pagination token.
     */
    NextToken?: String;
  }
  export interface BatchGetTracesResult {
    /**
     * Full traces for the specified requests.
     */
    Traces?: TraceList;
    /**
     * Trace IDs of requests that haven't been processed.
     */
    UnprocessedTraceIds?: UnprocessedTraceIdList;
    /**
     * Pagination token.
     */
    NextToken?: String;
  }
  export type Boolean = boolean;
  export type BorrowCount = number;
  export type ClientID = string;
  export interface CreateGroupRequest {
    /**
     * The case-sensitive name of the new group. Default is a reserved name and names must be unique.
     */
    GroupName: GroupName;
    /**
     * The filter expression defining criteria by which to group traces.
     */
    FilterExpression?: FilterExpression;
  }
  export interface CreateGroupResult {
    /**
     * The group that was created. Contains the name of the group that was created, the ARN of the group that was generated based on the group name, and the filter expression that was assigned to the group.
     */
    Group?: Group;
  }
  export interface CreateSamplingRuleRequest {
    /**
     * The rule definition.
     */
    SamplingRule: SamplingRule;
  }
  export interface CreateSamplingRuleResult {
    /**
     * The saved rule definition and metadata.
     */
    SamplingRuleRecord?: SamplingRuleRecord;
  }
  export interface DeleteGroupRequest {
    /**
     * The case-sensitive name of the group.
     */
    GroupName?: GroupName;
    /**
     * The ARN of the group that was generated on creation.
     */
    GroupARN?: GroupARN;
  }
  export interface DeleteGroupResult {
  }
  export interface DeleteSamplingRuleRequest {
    /**
     * The name of the sampling rule. Specify a rule by either name or ARN, but not both.
     */
    RuleName?: String;
    /**
     * The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
     */
    RuleARN?: String;
  }
  export interface DeleteSamplingRuleResult {
    /**
     * The deleted rule definition and metadata.
     */
    SamplingRuleRecord?: SamplingRuleRecord;
  }
  export type Double = number;
  export type EC2InstanceId = string;
  export interface Edge {
    /**
     * Identifier of the edge. Unique within a service map.
     */
    ReferenceId?: NullableInteger;
    /**
     * The start time of the first segment on the edge.
     */
    StartTime?: Timestamp;
    /**
     * The end time of the last segment on the edge.
     */
    EndTime?: Timestamp;
    /**
     * Response statistics for segments on the edge.
     */
    SummaryStatistics?: EdgeStatistics;
    /**
     * A histogram that maps the spread of client response times on an edge.
     */
    ResponseTimeHistogram?: Histogram;
    /**
     * Aliases for the edge.
     */
    Aliases?: AliasList;
  }
  export type EdgeList = Edge[];
  export interface EdgeStatistics {
    /**
     * The number of requests that completed with a 2xx Success status code.
     */
    OkCount?: NullableLong;
    /**
     * Information about requests that failed with a 4xx Client Error status code.
     */
    ErrorStatistics?: ErrorStatistics;
    /**
     * Information about requests that failed with a 5xx Server Error status code.
     */
    FaultStatistics?: FaultStatistics;
    /**
     * The total number of completed requests.
     */
    TotalCount?: NullableLong;
    /**
     * The aggregate response time of completed requests.
     */
    TotalResponseTime?: NullableDouble;
  }
  export interface EncryptionConfig {
    /**
     * The ID of the customer master key (CMK) used for encryption, if applicable.
     */
    KeyId?: String;
    /**
     * The encryption status. While the status is UPDATING, X-Ray may encrypt data with a combination of the new and old settings.
     */
    Status?: EncryptionStatus;
    /**
     * The type of encryption. Set to KMS for encryption with CMKs. Set to NONE for default encryption.
     */
    Type?: EncryptionType;
  }
  export type EncryptionKeyId = string;
  export type EncryptionStatus = "UPDATING"|"ACTIVE"|string;
  export type EncryptionType = "NONE"|"KMS"|string;
  export type EntitySelectorExpression = string;
  export interface ErrorRootCause {
    /**
     * A list of services corresponding to an error. A service identifies a segment and it contains a name, account ID, type, and inferred flag.
     */
    Services?: ErrorRootCauseServices;
  }
  export interface ErrorRootCauseEntity {
    /**
     * The name of the entity.
     */
    Name?: String;
    /**
     * The types and messages of the exceptions.
     */
    Exceptions?: RootCauseExceptions;
    /**
     * A flag that denotes a remote subsegment.
     */
    Remote?: NullableBoolean;
  }
  export type ErrorRootCauseEntityPath = ErrorRootCauseEntity[];
  export interface ErrorRootCauseService {
    /**
     * The service name.
     */
    Name?: String;
    /**
     * A collection of associated service names.
     */
    Names?: ServiceNames;
    /**
     * The type associated to the service.
     */
    Type?: String;
    /**
     * The account ID associated to the service.
     */
    AccountId?: String;
    /**
     * The path of root cause entities found on the service. 
     */
    EntityPath?: ErrorRootCauseEntityPath;
    /**
     * A Boolean value indicating if the service is inferred from the trace.
     */
    Inferred?: NullableBoolean;
  }
  export type ErrorRootCauseServices = ErrorRootCauseService[];
  export type ErrorRootCauses = ErrorRootCause[];
  export interface ErrorStatistics {
    /**
     * The number of requests that failed with a 419 throttling status code.
     */
    ThrottleCount?: NullableLong;
    /**
     * The number of requests that failed with untracked 4xx Client Error status codes.
     */
    OtherCount?: NullableLong;
    /**
     * The total number of requests that failed with a 4xx Client Error status code.
     */
    TotalCount?: NullableLong;
  }
  export interface FaultRootCause {
    /**
     * A list of corresponding services. A service identifies a segment and it contains a name, account ID, type, and inferred flag.
     */
    Services?: FaultRootCauseServices;
  }
  export interface FaultRootCauseEntity {
    /**
     * The name of the entity.
     */
    Name?: String;
    /**
     * The types and messages of the exceptions.
     */
    Exceptions?: RootCauseExceptions;
    /**
     * A flag that denotes a remote subsegment.
     */
    Remote?: NullableBoolean;
  }
  export type FaultRootCauseEntityPath = FaultRootCauseEntity[];
  export interface FaultRootCauseService {
    /**
     * The service name.
     */
    Name?: String;
    /**
     * A collection of associated service names.
     */
    Names?: ServiceNames;
    /**
     * The type associated to the service.
     */
    Type?: String;
    /**
     * The account ID associated to the service.
     */
    AccountId?: String;
    /**
     * The path of root cause entities found on the service. 
     */
    EntityPath?: FaultRootCauseEntityPath;
    /**
     * A Boolean value indicating if the service is inferred from the trace.
     */
    Inferred?: NullableBoolean;
  }
  export type FaultRootCauseServices = FaultRootCauseService[];
  export type FaultRootCauses = FaultRootCause[];
  export interface FaultStatistics {
    /**
     * The number of requests that failed with untracked 5xx Server Error status codes.
     */
    OtherCount?: NullableLong;
    /**
     * The total number of requests that failed with a 5xx Server Error status code.
     */
    TotalCount?: NullableLong;
  }
  export type FilterExpression = string;
  export type FixedRate = number;
  export interface GetEncryptionConfigRequest {
  }
  export interface GetEncryptionConfigResult {
    /**
     * The encryption configuration document.
     */
    EncryptionConfig?: EncryptionConfig;
  }
  export interface GetGroupRequest {
    /**
     * The case-sensitive name of the group.
     */
    GroupName?: GroupName;
    /**
     * The ARN of the group that was generated on creation.
     */
    GroupARN?: GroupARN;
  }
  export interface GetGroupResult {
    /**
     * The group that was requested. Contains the name of the group, the ARN of the group, and the filter expression that assigned to the group.
     */
    Group?: Group;
  }
  export type GetGroupsNextToken = string;
  export interface GetGroupsRequest {
    /**
     * Pagination token.
     */
    NextToken?: GetGroupsNextToken;
  }
  export interface GetGroupsResult {
    /**
     * The collection of all active groups.
     */
    Groups?: GroupSummaryList;
    /**
     * Pagination token.
     */
    NextToken?: String;
  }
  export interface GetSamplingRulesRequest {
    /**
     * Pagination token.
     */
    NextToken?: String;
  }
  export interface GetSamplingRulesResult {
    /**
     * Rule definitions and metadata.
     */
    SamplingRuleRecords?: SamplingRuleRecordList;
    /**
     * Pagination token.
     */
    NextToken?: String;
  }
  export interface GetSamplingStatisticSummariesRequest {
    /**
     * Pagination token.
     */
    NextToken?: String;
  }
  export interface GetSamplingStatisticSummariesResult {
    /**
     * Information about the number of requests instrumented for each sampling rule.
     */
    SamplingStatisticSummaries?: SamplingStatisticSummaryList;
    /**
     * Pagination token.
     */
    NextToken?: String;
  }
  export interface GetSamplingTargetsRequest {
    /**
     * Information about rules that the service is using to sample requests.
     */
    SamplingStatisticsDocuments: SamplingStatisticsDocumentList;
  }
  export interface GetSamplingTargetsResult {
    /**
     * Updated rules that the service should use to sample requests.
     */
    SamplingTargetDocuments?: SamplingTargetDocumentList;
    /**
     * The last time a user changed the sampling rule configuration. If the sampling rule configuration changed since the service last retrieved it, the service should call GetSamplingRules to get the latest version.
     */
    LastRuleModification?: Timestamp;
    /**
     * Information about SamplingStatisticsDocument that X-Ray could not process.
     */
    UnprocessedStatistics?: UnprocessedStatisticsList;
  }
  export interface GetServiceGraphRequest {
    /**
     * The start of the time frame for which to generate a graph.
     */
    StartTime: Timestamp;
    /**
     * The end of the timeframe for which to generate a graph.
     */
    EndTime: Timestamp;
    /**
     * The name of a group to generate a graph based on.
     */
    GroupName?: GroupName;
    /**
     * The ARN of a group to generate a graph based on.
     */
    GroupARN?: GroupARN;
    /**
     * Pagination token.
     */
    NextToken?: String;
  }
  export interface GetServiceGraphResult {
    /**
     * The start of the time frame for which the graph was generated.
     */
    StartTime?: Timestamp;
    /**
     * The end of the time frame for which the graph was generated.
     */
    EndTime?: Timestamp;
    /**
     * The services that have processed a traced request during the specified time frame.
     */
    Services?: ServiceList;
    /**
     * A flag indicating whether the group's filter expression has been consistent, or if the returned service graph may show traces from an older version of the group's filter expression.
     */
    ContainsOldGroupVersions?: Boolean;
    /**
     * Pagination token.
     */
    NextToken?: String;
  }
  export interface GetTimeSeriesServiceStatisticsRequest {
    /**
     * The start of the time frame for which to aggregate statistics.
     */
    StartTime: Timestamp;
    /**
     * The end of the time frame for which to aggregate statistics.
     */
    EndTime: Timestamp;
    /**
     * The case-sensitive name of the group for which to pull statistics from.
     */
    GroupName?: GroupName;
    /**
     * The ARN of the group for which to pull statistics from.
     */
    GroupARN?: GroupARN;
    /**
     * A filter expression defining entities that will be aggregated for statistics. Supports ID, service, and edge functions. If no selector expression is specified, edge statistics are returned. 
     */
    EntitySelectorExpression?: EntitySelectorExpression;
    /**
     * Aggregation period in seconds.
     */
    Period?: NullableInteger;
    /**
     * Pagination token.
     */
    NextToken?: String;
  }
  export interface GetTimeSeriesServiceStatisticsResult {
    /**
     * The collection of statistics.
     */
    TimeSeriesServiceStatistics?: TimeSeriesServiceStatisticsList;
    /**
     * A flag indicating whether or not a group's filter expression has been consistent, or if a returned aggregation may show statistics from an older version of the group's filter expression.
     */
    ContainsOldGroupVersions?: Boolean;
    /**
     * Pagination token.
     */
    NextToken?: String;
  }
  export interface GetTraceGraphRequest {
    /**
     * Trace IDs of requests for which to generate a service graph.
     */
    TraceIds: TraceIdList;
    /**
     * Pagination token.
     */
    NextToken?: String;
  }
  export interface GetTraceGraphResult {
    /**
     * The services that have processed one of the specified requests.
     */
    Services?: ServiceList;
    /**
     * Pagination token.
     */
    NextToken?: String;
  }
  export interface GetTraceSummariesRequest {
    /**
     * The start of the time frame for which to retrieve traces.
     */
    StartTime: Timestamp;
    /**
     * The end of the time frame for which to retrieve traces.
     */
    EndTime: Timestamp;
    /**
     * A parameter to indicate whether to query trace summaries by TraceId or Event time.
     */
    TimeRangeType?: TimeRangeType;
    /**
     * Set to true to get summaries for only a subset of available traces.
     */
    Sampling?: NullableBoolean;
    /**
     * A paramater to indicate whether to enable sampling on trace summaries. Input parameters are Name and Value.
     */
    SamplingStrategy?: SamplingStrategy;
    /**
     * Specify a filter expression to retrieve trace summaries for services or requests that meet certain requirements.
     */
    FilterExpression?: FilterExpression;
    /**
     * Specify the pagination token returned by a previous request to retrieve the next page of results.
     */
    NextToken?: String;
  }
  export interface GetTraceSummariesResult {
    /**
     * Trace IDs and annotations for traces that were found in the specified time frame.
     */
    TraceSummaries?: TraceSummaryList;
    /**
     * The start time of this page of results.
     */
    ApproximateTime?: Timestamp;
    /**
     * The total number of traces processed, including traces that did not match the specified filter expression.
     */
    TracesProcessedCount?: NullableLong;
    /**
     * If the requested time frame contained more than one page of results, you can use this token to retrieve the next page. The first page contains the most most recent results, closest to the end of the time frame.
     */
    NextToken?: String;
  }
  export interface Group {
    /**
     * The unique case-sensitive name of the group.
     */
    GroupName?: String;
    /**
     * The ARN of the group generated based on the GroupName.
     */
    GroupARN?: String;
    /**
     * The filter expression defining the parameters to include traces.
     */
    FilterExpression?: String;
  }
  export type GroupARN = string;
  export type GroupName = string;
  export interface GroupSummary {
    /**
     * The unique case-sensitive name of the group.
     */
    GroupName?: String;
    /**
     * The ARN of the group generated based on the GroupName.
     */
    GroupARN?: String;
    /**
     * The filter expression defining the parameters to include traces.
     */
    FilterExpression?: String;
  }
  export type GroupSummaryList = GroupSummary[];
  export type HTTPMethod = string;
  export type Histogram = HistogramEntry[];
  export interface HistogramEntry {
    /**
     * The value of the entry.
     */
    Value?: Double;
    /**
     * The prevalence of the entry.
     */
    Count?: Integer;
  }
  export type Host = string;
  export type Hostname = string;
  export interface Http {
    /**
     * The request URL.
     */
    HttpURL?: String;
    /**
     * The response status.
     */
    HttpStatus?: NullableInteger;
    /**
     * The request method.
     */
    HttpMethod?: String;
    /**
     * The request's user agent string.
     */
    UserAgent?: String;
    /**
     * The IP address of the requestor.
     */
    ClientIp?: String;
  }
  export interface InstanceIdDetail {
    /**
     * The ID of a corresponding EC2 instance.
     */
    Id?: String;
  }
  export type Integer = number;
  export type NullableBoolean = boolean;
  export type NullableDouble = number;
  export type NullableInteger = number;
  export type NullableLong = number;
  export type Priority = number;
  export interface PutEncryptionConfigRequest {
    /**
     * An AWS KMS customer master key (CMK) in one of the following formats:    Alias - The name of the key. For example, alias/MyKey.    Key ID - The KMS key ID of the key. For example, ae4aa6d49-a4d8-9df9-a475-4ff6d7898456. AWS X-Ray does not support asymmetric CMKs.    ARN - The full Amazon Resource Name of the key ID or alias. For example, arn:aws:kms:us-east-2:123456789012:key/ae4aa6d49-a4d8-9df9-a475-4ff6d7898456. Use this format to specify a key in a different account.   Omit this key if you set Type to NONE.
     */
    KeyId?: EncryptionKeyId;
    /**
     * The type of encryption. Set to KMS to use your own key for encryption. Set to NONE for default encryption.
     */
    Type: EncryptionType;
  }
  export interface PutEncryptionConfigResult {
    /**
     * The new encryption configuration.
     */
    EncryptionConfig?: EncryptionConfig;
  }
  export interface PutTelemetryRecordsRequest {
    /**
     * 
     */
    TelemetryRecords: TelemetryRecordList;
    /**
     * 
     */
    EC2InstanceId?: EC2InstanceId;
    /**
     * 
     */
    Hostname?: Hostname;
    /**
     * 
     */
    ResourceARN?: ResourceARN;
  }
  export interface PutTelemetryRecordsResult {
  }
  export interface PutTraceSegmentsRequest {
    /**
     * A string containing a JSON document defining one or more segments or subsegments.
     */
    TraceSegmentDocuments: TraceSegmentDocumentList;
  }
  export interface PutTraceSegmentsResult {
    /**
     * Segments that failed processing.
     */
    UnprocessedTraceSegments?: UnprocessedTraceSegmentList;
  }
  export type RequestCount = number;
  export type ReservoirSize = number;
  export type ResourceARN = string;
  export interface ResourceARNDetail {
    /**
     * The ARN of a corresponding resource.
     */
    ARN?: String;
  }
  export interface ResponseTimeRootCause {
    /**
     * A list of corresponding services. A service identifies a segment and contains a name, account ID, type, and inferred flag.
     */
    Services?: ResponseTimeRootCauseServices;
  }
  export interface ResponseTimeRootCauseEntity {
    /**
     * The name of the entity.
     */
    Name?: String;
    /**
     * The types and messages of the exceptions.
     */
    Coverage?: NullableDouble;
    /**
     * A flag that denotes a remote subsegment.
     */
    Remote?: NullableBoolean;
  }
  export type ResponseTimeRootCauseEntityPath = ResponseTimeRootCauseEntity[];
  export interface ResponseTimeRootCauseService {
    /**
     * The service name.
     */
    Name?: String;
    /**
     * A collection of associated service names.
     */
    Names?: ServiceNames;
    /**
     * The type associated to the service.
     */
    Type?: String;
    /**
     * The account ID associated to the service.
     */
    AccountId?: String;
    /**
     * The path of root cause entities found on the service. 
     */
    EntityPath?: ResponseTimeRootCauseEntityPath;
    /**
     * A Boolean value indicating if the service is inferred from the trace.
     */
    Inferred?: NullableBoolean;
  }
  export type ResponseTimeRootCauseServices = ResponseTimeRootCauseService[];
  export type ResponseTimeRootCauses = ResponseTimeRootCause[];
  export interface RootCauseException {
    /**
     * The name of the exception.
     */
    Name?: String;
    /**
     * The message of the exception.
     */
    Message?: String;
  }
  export type RootCauseExceptions = RootCauseException[];
  export type RuleName = string;
  export type SampledCount = number;
  export interface SamplingRule {
    /**
     * The name of the sampling rule. Specify a rule by either name or ARN, but not both.
     */
    RuleName?: RuleName;
    /**
     * The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
     */
    RuleARN?: String;
    /**
     * Matches the ARN of the AWS resource on which the service runs.
     */
    ResourceARN: ResourceARN;
    /**
     * The priority of the sampling rule.
     */
    Priority: Priority;
    /**
     * The percentage of matching requests to instrument, after the reservoir is exhausted.
     */
    FixedRate: FixedRate;
    /**
     * A fixed number of matching requests to instrument per second, prior to applying the fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.
     */
    ReservoirSize: ReservoirSize;
    /**
     * Matches the name that the service uses to identify itself in segments.
     */
    ServiceName: ServiceName;
    /**
     * Matches the origin that the service uses to identify its type in segments.
     */
    ServiceType: ServiceType;
    /**
     * Matches the hostname from a request URL.
     */
    Host: Host;
    /**
     * Matches the HTTP method of a request.
     */
    HTTPMethod: HTTPMethod;
    /**
     * Matches the path from a request URL.
     */
    URLPath: URLPath;
    /**
     * The version of the sampling rule format (1).
     */
    Version: Version;
    /**
     * Matches attributes derived from the request.
     */
    Attributes?: AttributeMap;
  }
  export interface SamplingRuleRecord {
    /**
     * The sampling rule.
     */
    SamplingRule?: SamplingRule;
    /**
     * When the rule was created.
     */
    CreatedAt?: Timestamp;
    /**
     * When the rule was last modified.
     */
    ModifiedAt?: Timestamp;
  }
  export type SamplingRuleRecordList = SamplingRuleRecord[];
  export interface SamplingRuleUpdate {
    /**
     * The name of the sampling rule. Specify a rule by either name or ARN, but not both.
     */
    RuleName?: RuleName;
    /**
     * The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
     */
    RuleARN?: String;
    /**
     * Matches the ARN of the AWS resource on which the service runs.
     */
    ResourceARN?: ResourceARN;
    /**
     * The priority of the sampling rule.
     */
    Priority?: NullableInteger;
    /**
     * The percentage of matching requests to instrument, after the reservoir is exhausted.
     */
    FixedRate?: NullableDouble;
    /**
     * A fixed number of matching requests to instrument per second, prior to applying the fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.
     */
    ReservoirSize?: NullableInteger;
    /**
     * Matches the hostname from a request URL.
     */
    Host?: Host;
    /**
     * Matches the name that the service uses to identify itself in segments.
     */
    ServiceName?: ServiceName;
    /**
     * Matches the origin that the service uses to identify its type in segments.
     */
    ServiceType?: ServiceType;
    /**
     * Matches the HTTP method of a request.
     */
    HTTPMethod?: HTTPMethod;
    /**
     * Matches the path from a request URL.
     */
    URLPath?: URLPath;
    /**
     * Matches attributes derived from the request.
     */
    Attributes?: AttributeMap;
  }
  export interface SamplingStatisticSummary {
    /**
     * The name of the sampling rule.
     */
    RuleName?: String;
    /**
     * The start time of the reporting window.
     */
    Timestamp?: Timestamp;
    /**
     * The number of requests that matched the rule.
     */
    RequestCount?: Integer;
    /**
     * The number of requests recorded with borrowed reservoir quota.
     */
    BorrowCount?: Integer;
    /**
     * The number of requests recorded.
     */
    SampledCount?: Integer;
  }
  export type SamplingStatisticSummaryList = SamplingStatisticSummary[];
  export interface SamplingStatisticsDocument {
    /**
     * The name of the sampling rule.
     */
    RuleName: RuleName;
    /**
     * A unique identifier for the service in hexadecimal.
     */
    ClientID: ClientID;
    /**
     * The current time.
     */
    Timestamp: Timestamp;
    /**
     * The number of requests that matched the rule.
     */
    RequestCount: RequestCount;
    /**
     * The number of requests recorded.
     */
    SampledCount: SampledCount;
    /**
     * The number of requests recorded with borrowed reservoir quota.
     */
    BorrowCount?: BorrowCount;
  }
  export type SamplingStatisticsDocumentList = SamplingStatisticsDocument[];
  export interface SamplingStrategy {
    /**
     * The name of a sampling rule.
     */
    Name?: SamplingStrategyName;
    /**
     * The value of a sampling rule.
     */
    Value?: NullableDouble;
  }
  export type SamplingStrategyName = "PartialScan"|"FixedRate"|string;
  export interface SamplingTargetDocument {
    /**
     * The name of the sampling rule.
     */
    RuleName?: String;
    /**
     * The percentage of matching requests to instrument, after the reservoir is exhausted.
     */
    FixedRate?: Double;
    /**
     * The number of requests per second that X-Ray allocated this service.
     */
    ReservoirQuota?: NullableInteger;
    /**
     * When the reservoir quota expires.
     */
    ReservoirQuotaTTL?: Timestamp;
    /**
     * The number of seconds for the service to wait before getting sampling targets again.
     */
    Interval?: NullableInteger;
  }
  export type SamplingTargetDocumentList = SamplingTargetDocument[];
  export interface Segment {
    /**
     * The segment's ID.
     */
    Id?: SegmentId;
    /**
     * The segment document.
     */
    Document?: SegmentDocument;
  }
  export type SegmentDocument = string;
  export type SegmentId = string;
  export type SegmentList = Segment[];
  export interface Service {
    /**
     * Identifier for the service. Unique within the service map.
     */
    ReferenceId?: NullableInteger;
    /**
     * The canonical name of the service.
     */
    Name?: String;
    /**
     * A list of names for the service, including the canonical name.
     */
    Names?: ServiceNames;
    /**
     * Indicates that the service was the first service to process a request.
     */
    Root?: NullableBoolean;
    /**
     * Identifier of the AWS account in which the service runs.
     */
    AccountId?: String;
    /**
     * The type of service.   AWS Resource - The type of an AWS resource. For example, AWS::EC2::Instance for a application running on Amazon EC2 or AWS::DynamoDB::Table for an Amazon DynamoDB table that the application used.   AWS Service - The type of an AWS service. For example, AWS::DynamoDB for downstream calls to Amazon DynamoDB that didn't target a specific table.    client - Represents the clients that sent requests to a root service.    remote - A downstream service of indeterminate type.  
     */
    Type?: String;
    /**
     * The service's state.
     */
    State?: String;
    /**
     * The start time of the first segment that the service generated.
     */
    StartTime?: Timestamp;
    /**
     * The end time of the last segment that the service generated.
     */
    EndTime?: Timestamp;
    /**
     * Connections to downstream services.
     */
    Edges?: EdgeList;
    /**
     * Aggregated statistics for the service.
     */
    SummaryStatistics?: ServiceStatistics;
    /**
     * A histogram that maps the spread of service durations.
     */
    DurationHistogram?: Histogram;
    /**
     * A histogram that maps the spread of service response times.
     */
    ResponseTimeHistogram?: Histogram;
  }
  export interface ServiceId {
    /**
     * 
     */
    Name?: String;
    /**
     * 
     */
    Names?: ServiceNames;
    /**
     * 
     */
    AccountId?: String;
    /**
     * 
     */
    Type?: String;
  }
  export type ServiceIds = ServiceId[];
  export type ServiceList = Service[];
  export type ServiceName = string;
  export type ServiceNames = String[];
  export interface ServiceStatistics {
    /**
     * The number of requests that completed with a 2xx Success status code.
     */
    OkCount?: NullableLong;
    /**
     * Information about requests that failed with a 4xx Client Error status code.
     */
    ErrorStatistics?: ErrorStatistics;
    /**
     * Information about requests that failed with a 5xx Server Error status code.
     */
    FaultStatistics?: FaultStatistics;
    /**
     * The total number of completed requests.
     */
    TotalCount?: NullableLong;
    /**
     * The aggregate response time of completed requests.
     */
    TotalResponseTime?: NullableDouble;
  }
  export type ServiceType = string;
  export type String = string;
  export interface TelemetryRecord {
    /**
     * 
     */
    Timestamp: Timestamp;
    /**
     * 
     */
    SegmentsReceivedCount?: NullableInteger;
    /**
     * 
     */
    SegmentsSentCount?: NullableInteger;
    /**
     * 
     */
    SegmentsSpilloverCount?: NullableInteger;
    /**
     * 
     */
    SegmentsRejectedCount?: NullableInteger;
    /**
     * 
     */
    BackendConnectionErrors?: BackendConnectionErrors;
  }
  export type TelemetryRecordList = TelemetryRecord[];
  export type TimeRangeType = "TraceId"|"Event"|string;
  export interface TimeSeriesServiceStatistics {
    /**
     * Timestamp of the window for which statistics are aggregated.
     */
    Timestamp?: Timestamp;
    EdgeSummaryStatistics?: EdgeStatistics;
    ServiceSummaryStatistics?: ServiceStatistics;
    /**
     * The response time histogram for the selected entities.
     */
    ResponseTimeHistogram?: Histogram;
  }
  export type TimeSeriesServiceStatisticsList = TimeSeriesServiceStatistics[];
  export type Timestamp = Date;
  export interface Trace {
    /**
     * The unique identifier for the request that generated the trace's segments and subsegments.
     */
    Id?: TraceId;
    /**
     * The length of time in seconds between the start time of the root segment and the end time of the last segment that completed.
     */
    Duration?: NullableDouble;
    /**
     * Segment documents for the segments and subsegments that comprise the trace.
     */
    Segments?: SegmentList;
  }
  export type TraceAvailabilityZones = AvailabilityZoneDetail[];
  export type TraceId = string;
  export type TraceIdList = TraceId[];
  export type TraceInstanceIds = InstanceIdDetail[];
  export type TraceList = Trace[];
  export type TraceResourceARNs = ResourceARNDetail[];
  export type TraceSegmentDocument = string;
  export type TraceSegmentDocumentList = TraceSegmentDocument[];
  export interface TraceSummary {
    /**
     * The unique identifier for the request that generated the trace's segments and subsegments.
     */
    Id?: TraceId;
    /**
     * The length of time in seconds between the start time of the root segment and the end time of the last segment that completed.
     */
    Duration?: NullableDouble;
    /**
     * The length of time in seconds between the start and end times of the root segment. If the service performs work asynchronously, the response time measures the time before the response is sent to the user, while the duration measures the amount of time before the last traced activity completes.
     */
    ResponseTime?: NullableDouble;
    /**
     * The root segment document has a 500 series error.
     */
    HasFault?: NullableBoolean;
    /**
     * The root segment document has a 400 series error.
     */
    HasError?: NullableBoolean;
    /**
     * One or more of the segment documents has a 429 throttling error.
     */
    HasThrottle?: NullableBoolean;
    /**
     * One or more of the segment documents is in progress.
     */
    IsPartial?: NullableBoolean;
    /**
     * Information about the HTTP request served by the trace.
     */
    Http?: Http;
    /**
     * Annotations from the trace's segment documents.
     */
    Annotations?: Annotations;
    /**
     * Users from the trace's segment documents.
     */
    Users?: TraceUsers;
    /**
     * Service IDs from the trace's segment documents.
     */
    ServiceIds?: ServiceIds;
    /**
     * A list of resource ARNs for any resource corresponding to the trace segments.
     */
    ResourceARNs?: TraceResourceARNs;
    /**
     * A list of EC2 instance IDs for any instance corresponding to the trace segments.
     */
    InstanceIds?: TraceInstanceIds;
    /**
     * A list of availability zones for any zone corresponding to the trace segments.
     */
    AvailabilityZones?: TraceAvailabilityZones;
    /**
     * The root of a trace.
     */
    EntryPoint?: ServiceId;
    /**
     * A collection of FaultRootCause structures corresponding to the the trace segments.
     */
    FaultRootCauses?: FaultRootCauses;
    /**
     * A collection of ErrorRootCause structures corresponding to the trace segments.
     */
    ErrorRootCauses?: ErrorRootCauses;
    /**
     * A collection of ResponseTimeRootCause structures corresponding to the trace segments.
     */
    ResponseTimeRootCauses?: ResponseTimeRootCauses;
    /**
     * The revision number of a trace.
     */
    Revision?: Integer;
    /**
     * The matched time stamp of a defined event.
     */
    MatchedEventTime?: Timestamp;
  }
  export type TraceSummaryList = TraceSummary[];
  export interface TraceUser {
    /**
     * The user's name.
     */
    UserName?: String;
    /**
     * Services that the user's request hit.
     */
    ServiceIds?: ServiceIds;
  }
  export type TraceUsers = TraceUser[];
  export type URLPath = string;
  export interface UnprocessedStatistics {
    /**
     * The name of the sampling rule.
     */
    RuleName?: String;
    /**
     * The error code.
     */
    ErrorCode?: String;
    /**
     * The error message.
     */
    Message?: String;
  }
  export type UnprocessedStatisticsList = UnprocessedStatistics[];
  export type UnprocessedTraceIdList = TraceId[];
  export interface UnprocessedTraceSegment {
    /**
     * The segment's ID.
     */
    Id?: String;
    /**
     * The error that caused processing to fail.
     */
    ErrorCode?: String;
    /**
     * The error message.
     */
    Message?: String;
  }
  export type UnprocessedTraceSegmentList = UnprocessedTraceSegment[];
  export interface UpdateGroupRequest {
    /**
     * The case-sensitive name of the group.
     */
    GroupName?: GroupName;
    /**
     * The ARN that was generated upon creation.
     */
    GroupARN?: GroupARN;
    /**
     * The updated filter expression defining criteria by which to group traces.
     */
    FilterExpression?: FilterExpression;
  }
  export interface UpdateGroupResult {
    /**
     * The group that was updated. Contains the name of the group that was updated, the ARN of the group that was updated, and the updated filter expression assigned to the group.
     */
    Group?: Group;
  }
  export interface UpdateSamplingRuleRequest {
    /**
     * The rule and fields to change.
     */
    SamplingRuleUpdate: SamplingRuleUpdate;
  }
  export interface UpdateSamplingRuleResult {
    /**
     * The updated rule definition and metadata.
     */
    SamplingRuleRecord?: SamplingRuleRecord;
  }
  export interface ValueWithServiceIds {
    /**
     * Values of the annotation.
     */
    AnnotationValue?: AnnotationValue;
    /**
     * Services to which the annotation applies.
     */
    ServiceIds?: ServiceIds;
  }
  export type ValuesWithServiceIds = ValueWithServiceIds[];
  export type Version = number;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2016-04-12"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the XRay client.
   */
  export import Types = XRay;
}
export = XRay;
