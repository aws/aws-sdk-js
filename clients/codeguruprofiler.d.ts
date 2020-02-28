import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class CodeGuruProfiler extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: CodeGuruProfiler.Types.ClientConfiguration)
  config: Config & CodeGuruProfiler.Types.ClientConfiguration;
  /**
   * 
   */
  configureAgent(params: CodeGuruProfiler.Types.ConfigureAgentRequest, callback?: (err: AWSError, data: CodeGuruProfiler.Types.ConfigureAgentResponse) => void): Request<CodeGuruProfiler.Types.ConfigureAgentResponse, AWSError>;
  /**
   * 
   */
  configureAgent(callback?: (err: AWSError, data: CodeGuruProfiler.Types.ConfigureAgentResponse) => void): Request<CodeGuruProfiler.Types.ConfigureAgentResponse, AWSError>;
  /**
   * Creates a profiling group.
   */
  createProfilingGroup(params: CodeGuruProfiler.Types.CreateProfilingGroupRequest, callback?: (err: AWSError, data: CodeGuruProfiler.Types.CreateProfilingGroupResponse) => void): Request<CodeGuruProfiler.Types.CreateProfilingGroupResponse, AWSError>;
  /**
   * Creates a profiling group.
   */
  createProfilingGroup(callback?: (err: AWSError, data: CodeGuruProfiler.Types.CreateProfilingGroupResponse) => void): Request<CodeGuruProfiler.Types.CreateProfilingGroupResponse, AWSError>;
  /**
   * Deletes a profiling group.
   */
  deleteProfilingGroup(params: CodeGuruProfiler.Types.DeleteProfilingGroupRequest, callback?: (err: AWSError, data: CodeGuruProfiler.Types.DeleteProfilingGroupResponse) => void): Request<CodeGuruProfiler.Types.DeleteProfilingGroupResponse, AWSError>;
  /**
   * Deletes a profiling group.
   */
  deleteProfilingGroup(callback?: (err: AWSError, data: CodeGuruProfiler.Types.DeleteProfilingGroupResponse) => void): Request<CodeGuruProfiler.Types.DeleteProfilingGroupResponse, AWSError>;
  /**
   * Describes a profiling group.
   */
  describeProfilingGroup(params: CodeGuruProfiler.Types.DescribeProfilingGroupRequest, callback?: (err: AWSError, data: CodeGuruProfiler.Types.DescribeProfilingGroupResponse) => void): Request<CodeGuruProfiler.Types.DescribeProfilingGroupResponse, AWSError>;
  /**
   * Describes a profiling group.
   */
  describeProfilingGroup(callback?: (err: AWSError, data: CodeGuruProfiler.Types.DescribeProfilingGroupResponse) => void): Request<CodeGuruProfiler.Types.DescribeProfilingGroupResponse, AWSError>;
  /**
   * Gets the aggregated profile of a profiling group for the specified time range. If the requested time range does not align with the available aggregated profiles, it is expanded to attain alignment. If aggregated profiles are available only for part of the period requested, the profile is returned from the earliest available to the latest within the requested time range.  For example, if the requested time range is from 00:00 to 00:20 and the available profiles are from 00:15 to 00:25, the returned profile will be from 00:15 to 00:20.  You must specify exactly two of the following parameters: startTime, period, and endTime. 
   */
  getProfile(params: CodeGuruProfiler.Types.GetProfileRequest, callback?: (err: AWSError, data: CodeGuruProfiler.Types.GetProfileResponse) => void): Request<CodeGuruProfiler.Types.GetProfileResponse, AWSError>;
  /**
   * Gets the aggregated profile of a profiling group for the specified time range. If the requested time range does not align with the available aggregated profiles, it is expanded to attain alignment. If aggregated profiles are available only for part of the period requested, the profile is returned from the earliest available to the latest within the requested time range.  For example, if the requested time range is from 00:00 to 00:20 and the available profiles are from 00:15 to 00:25, the returned profile will be from 00:15 to 00:20.  You must specify exactly two of the following parameters: startTime, period, and endTime. 
   */
  getProfile(callback?: (err: AWSError, data: CodeGuruProfiler.Types.GetProfileResponse) => void): Request<CodeGuruProfiler.Types.GetProfileResponse, AWSError>;
  /**
   * List the start times of the available aggregated profiles of a profiling group for an aggregation period within the specified time range.
   */
  listProfileTimes(params: CodeGuruProfiler.Types.ListProfileTimesRequest, callback?: (err: AWSError, data: CodeGuruProfiler.Types.ListProfileTimesResponse) => void): Request<CodeGuruProfiler.Types.ListProfileTimesResponse, AWSError>;
  /**
   * List the start times of the available aggregated profiles of a profiling group for an aggregation period within the specified time range.
   */
  listProfileTimes(callback?: (err: AWSError, data: CodeGuruProfiler.Types.ListProfileTimesResponse) => void): Request<CodeGuruProfiler.Types.ListProfileTimesResponse, AWSError>;
  /**
   * Lists profiling groups.
   */
  listProfilingGroups(params: CodeGuruProfiler.Types.ListProfilingGroupsRequest, callback?: (err: AWSError, data: CodeGuruProfiler.Types.ListProfilingGroupsResponse) => void): Request<CodeGuruProfiler.Types.ListProfilingGroupsResponse, AWSError>;
  /**
   * Lists profiling groups.
   */
  listProfilingGroups(callback?: (err: AWSError, data: CodeGuruProfiler.Types.ListProfilingGroupsResponse) => void): Request<CodeGuruProfiler.Types.ListProfilingGroupsResponse, AWSError>;
  /**
   * 
   */
  postAgentProfile(params: CodeGuruProfiler.Types.PostAgentProfileRequest, callback?: (err: AWSError, data: CodeGuruProfiler.Types.PostAgentProfileResponse) => void): Request<CodeGuruProfiler.Types.PostAgentProfileResponse, AWSError>;
  /**
   * 
   */
  postAgentProfile(callback?: (err: AWSError, data: CodeGuruProfiler.Types.PostAgentProfileResponse) => void): Request<CodeGuruProfiler.Types.PostAgentProfileResponse, AWSError>;
  /**
   * Updates a profiling group.
   */
  updateProfilingGroup(params: CodeGuruProfiler.Types.UpdateProfilingGroupRequest, callback?: (err: AWSError, data: CodeGuruProfiler.Types.UpdateProfilingGroupResponse) => void): Request<CodeGuruProfiler.Types.UpdateProfilingGroupResponse, AWSError>;
  /**
   * Updates a profiling group.
   */
  updateProfilingGroup(callback?: (err: AWSError, data: CodeGuruProfiler.Types.UpdateProfilingGroupResponse) => void): Request<CodeGuruProfiler.Types.UpdateProfilingGroupResponse, AWSError>;
}
declare namespace CodeGuruProfiler {
  export interface AgentConfiguration {
    /**
     * 
     */
    periodInSeconds: Integer;
    /**
     * 
     */
    shouldProfile: Boolean;
  }
  export interface AgentOrchestrationConfig {
    /**
     * 
     */
    profilingEnabled: Boolean;
  }
  export type AgentProfile = Buffer|Uint8Array|Blob|string;
  export type AggregatedProfile = Buffer|Uint8Array|Blob|string;
  export interface AggregatedProfileTime {
    /**
     * The time period.
     */
    period?: AggregationPeriod;
    /**
     * The start time.
     */
    start?: Timestamp;
  }
  export type AggregationPeriod = "P1D"|"PT1H"|"PT5M"|string;
  export type Boolean = boolean;
  export type ClientToken = string;
  export interface ConfigureAgentRequest {
    /**
     * 
     */
    fleetInstanceId?: FleetInstanceId;
    /**
     * 
     */
    profilingGroupName: ProfilingGroupName;
  }
  export interface ConfigureAgentResponse {
    /**
     * 
     */
    configuration: AgentConfiguration;
  }
  export interface CreateProfilingGroupRequest {
    /**
     * The agent orchestration configuration.
     */
    agentOrchestrationConfig?: AgentOrchestrationConfig;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This parameter specifies a unique identifier for the new profiling group that helps ensure idempotency.
     */
    clientToken: ClientToken;
    /**
     * The name of the profiling group.
     */
    profilingGroupName: ProfilingGroupName;
  }
  export interface CreateProfilingGroupResponse {
    /**
     * Information about the new profiling group
     */
    profilingGroup: ProfilingGroupDescription;
  }
  export interface DeleteProfilingGroupRequest {
    /**
     * The profiling group name to delete.
     */
    profilingGroupName: ProfilingGroupName;
  }
  export interface DeleteProfilingGroupResponse {
  }
  export interface DescribeProfilingGroupRequest {
    /**
     * The profiling group name.
     */
    profilingGroupName: ProfilingGroupName;
  }
  export interface DescribeProfilingGroupResponse {
    /**
     * Information about a profiling group.
     */
    profilingGroup: ProfilingGroupDescription;
  }
  export type FleetInstanceId = string;
  export interface GetProfileRequest {
    /**
     * The format of the profile to return. You can choose application/json or the default application/x-amzn-ion. 
     */
    accept?: String;
    /**
     *  You must specify exactly two of the following parameters: startTime, period, and endTime. 
     */
    endTime?: Timestamp;
    /**
     * The maximum depth of the graph.
     */
    maxDepth?: MaxDepth;
    /**
     * The period of the profile to get. The time range must be in the past and not longer than one week.  You must specify exactly two of the following parameters: startTime, period, and endTime. 
     */
    period?: Period;
    /**
     * The name of the profiling group to get.
     */
    profilingGroupName: ProfilingGroupName;
    /**
     * The start time of the profile to get. You must specify exactly two of the following parameters: startTime, period, and endTime. 
     */
    startTime?: Timestamp;
  }
  export interface GetProfileResponse {
    /**
     * The content encoding of the profile.
     */
    contentEncoding?: String;
    /**
     * The content type of the profile in the payload. It is either application/json or the default application/x-amzn-ion.
     */
    contentType: String;
    /**
     * Information about the profile.
     */
    profile: AggregatedProfile;
  }
  export type Integer = number;
  export interface ListProfileTimesRequest {
    /**
     * The end time of the time range from which to list the profiles.
     */
    endTime: Timestamp;
    /**
     * The maximum number of profile time results returned by ListProfileTimes in paginated output. When this parameter is used, ListProfileTimes only returns maxResults results in a single page with a nextToken response element. The remaining results of the initial request can be seen by sending another ListProfileTimes request with the returned nextToken value. 
     */
    maxResults?: MaxResults;
    /**
     * The nextToken value returned from a previous paginated ListProfileTimes request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.   This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: PaginationToken;
    /**
     * The order (ascending or descending by start time of the profile) to use when listing profiles. Defaults to TIMESTAMP_DESCENDING. 
     */
    orderBy?: OrderBy;
    /**
     * The aggregation period.
     */
    period: AggregationPeriod;
    /**
     * The name of the profiling group.
     */
    profilingGroupName: ProfilingGroupName;
    /**
     * The start time of the time range from which to list the profiles.
     */
    startTime: Timestamp;
  }
  export interface ListProfileTimesResponse {
    /**
     * The nextToken value to include in a future ListProfileTimes request. When the results of a ListProfileTimes request exceed maxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return. 
     */
    nextToken?: PaginationToken;
    /**
     * The list of start times of the available profiles for the aggregation period in the specified time range. 
     */
    profileTimes: ProfileTimes;
  }
  export interface ListProfilingGroupsRequest {
    /**
     * A Boolean value indicating whether to include a description.
     */
    includeDescription?: Boolean;
    /**
     * The maximum number of profiling groups results returned by ListProfilingGroups in paginated output. When this parameter is used, ListProfilingGroups only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListProfilingGroups request with the returned nextToken value. 
     */
    maxResults?: MaxResults;
    /**
     * The nextToken value returned from a previous paginated ListProfilingGroups request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.   This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: PaginationToken;
  }
  export interface ListProfilingGroupsResponse {
    /**
     * The nextToken value to include in a future ListProfilingGroups request. When the results of a ListProfilingGroups request exceed maxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return. 
     */
    nextToken?: PaginationToken;
    /**
     * Information about profiling group names.
     */
    profilingGroupNames: ProfilingGroupNames;
    /**
     * Information about profiling groups.
     */
    profilingGroups?: ProfilingGroupDescriptions;
  }
  export type MaxDepth = number;
  export type MaxResults = number;
  export type OrderBy = "TimestampAscending"|"TimestampDescending"|string;
  export type PaginationToken = string;
  export type Period = string;
  export interface PostAgentProfileRequest {
    /**
     * 
     */
    agentProfile: AgentProfile;
    /**
     * 
     */
    contentType: String;
    /**
     * 
     */
    profileToken?: ClientToken;
    /**
     * 
     */
    profilingGroupName: ProfilingGroupName;
  }
  export interface PostAgentProfileResponse {
  }
  export interface ProfileTime {
    /**
     * The start time of the profile.
     */
    start?: Timestamp;
  }
  export type ProfileTimes = ProfileTime[];
  export type ProfilingGroupArn = string;
  export interface ProfilingGroupDescription {
    /**
     * 
     */
    agentOrchestrationConfig?: AgentOrchestrationConfig;
    /**
     * The Amazon Resource Name (ARN) identifying the profiling group.
     */
    arn?: ProfilingGroupArn;
    /**
     * The time, in milliseconds since the epoch, when the profiling group was created.
     */
    createdAt?: Timestamp;
    /**
     * The name of the profiling group.
     */
    name?: ProfilingGroupName;
    /**
     * The status of the profiling group.
     */
    profilingStatus?: ProfilingStatus;
    /**
     * The time, in milliseconds since the epoch, when the profiling group was last updated.
     */
    updatedAt?: Timestamp;
  }
  export type ProfilingGroupDescriptions = ProfilingGroupDescription[];
  export type ProfilingGroupName = string;
  export type ProfilingGroupNames = ProfilingGroupName[];
  export interface ProfilingStatus {
    /**
     * The time, in milliseconds since the epoch, when the latest agent was orchestrated.
     */
    latestAgentOrchestratedAt?: Timestamp;
    /**
     * The time, in milliseconds since the epoch, when the latest agent was reported..
     */
    latestAgentProfileReportedAt?: Timestamp;
    /**
     * The latest aggregated profile
     */
    latestAggregatedProfile?: AggregatedProfileTime;
  }
  export type String = string;
  export type Timestamp = Date;
  export interface UpdateProfilingGroupRequest {
    /**
     * 
     */
    agentOrchestrationConfig: AgentOrchestrationConfig;
    /**
     * The name of the profiling group to update.
     */
    profilingGroupName: ProfilingGroupName;
  }
  export interface UpdateProfilingGroupResponse {
    /**
     * Updated information about the profiling group.
     */
    profilingGroup: ProfilingGroupDescription;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2019-07-18"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the CodeGuruProfiler client.
   */
  export import Types = CodeGuruProfiler;
}
export = CodeGuruProfiler;
