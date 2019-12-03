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
   * Provides the configuration to use for an agent of the profiling group.
   */
  configureAgent(params: CodeGuruProfiler.Types.ConfigureAgentRequest, callback?: (err: AWSError, data: CodeGuruProfiler.Types.ConfigureAgentResponse) => void): Request<CodeGuruProfiler.Types.ConfigureAgentResponse, AWSError>;
  /**
   * Provides the configuration to use for an agent of the profiling group.
   */
  configureAgent(callback?: (err: AWSError, data: CodeGuruProfiler.Types.ConfigureAgentResponse) => void): Request<CodeGuruProfiler.Types.ConfigureAgentResponse, AWSError>;
  /**
   * Create a profiling group.
   */
  createProfilingGroup(params: CodeGuruProfiler.Types.CreateProfilingGroupRequest, callback?: (err: AWSError, data: CodeGuruProfiler.Types.CreateProfilingGroupResponse) => void): Request<CodeGuruProfiler.Types.CreateProfilingGroupResponse, AWSError>;
  /**
   * Create a profiling group.
   */
  createProfilingGroup(callback?: (err: AWSError, data: CodeGuruProfiler.Types.CreateProfilingGroupResponse) => void): Request<CodeGuruProfiler.Types.CreateProfilingGroupResponse, AWSError>;
  /**
   * Delete a profiling group.
   */
  deleteProfilingGroup(params: CodeGuruProfiler.Types.DeleteProfilingGroupRequest, callback?: (err: AWSError, data: CodeGuruProfiler.Types.DeleteProfilingGroupResponse) => void): Request<CodeGuruProfiler.Types.DeleteProfilingGroupResponse, AWSError>;
  /**
   * Delete a profiling group.
   */
  deleteProfilingGroup(callback?: (err: AWSError, data: CodeGuruProfiler.Types.DeleteProfilingGroupResponse) => void): Request<CodeGuruProfiler.Types.DeleteProfilingGroupResponse, AWSError>;
  /**
   * Describe a profiling group.
   */
  describeProfilingGroup(params: CodeGuruProfiler.Types.DescribeProfilingGroupRequest, callback?: (err: AWSError, data: CodeGuruProfiler.Types.DescribeProfilingGroupResponse) => void): Request<CodeGuruProfiler.Types.DescribeProfilingGroupResponse, AWSError>;
  /**
   * Describe a profiling group.
   */
  describeProfilingGroup(callback?: (err: AWSError, data: CodeGuruProfiler.Types.DescribeProfilingGroupResponse) => void): Request<CodeGuruProfiler.Types.DescribeProfilingGroupResponse, AWSError>;
  /**
   * Get the aggregated profile of a profiling group for the specified time range. If the requested time range does not align with the available aggregated profiles, it will be expanded to attain alignment. If aggregated profiles are available only for part of the period requested, the profile is returned from the earliest available to the latest within the requested time range. For instance, if the requested time range is from 00:00 to 00:20 and the available profiles are from 00:15 to 00:25, then the returned profile will be from 00:15 to 00:20.
   */
  getProfile(params: CodeGuruProfiler.Types.GetProfileRequest, callback?: (err: AWSError, data: CodeGuruProfiler.Types.GetProfileResponse) => void): Request<CodeGuruProfiler.Types.GetProfileResponse, AWSError>;
  /**
   * Get the aggregated profile of a profiling group for the specified time range. If the requested time range does not align with the available aggregated profiles, it will be expanded to attain alignment. If aggregated profiles are available only for part of the period requested, the profile is returned from the earliest available to the latest within the requested time range. For instance, if the requested time range is from 00:00 to 00:20 and the available profiles are from 00:15 to 00:25, then the returned profile will be from 00:15 to 00:20.
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
   * List profiling groups in the account.
   */
  listProfilingGroups(params: CodeGuruProfiler.Types.ListProfilingGroupsRequest, callback?: (err: AWSError, data: CodeGuruProfiler.Types.ListProfilingGroupsResponse) => void): Request<CodeGuruProfiler.Types.ListProfilingGroupsResponse, AWSError>;
  /**
   * List profiling groups in the account.
   */
  listProfilingGroups(callback?: (err: AWSError, data: CodeGuruProfiler.Types.ListProfilingGroupsResponse) => void): Request<CodeGuruProfiler.Types.ListProfilingGroupsResponse, AWSError>;
  /**
   * Submit profile collected by an agent belonging to a profiling group for aggregation.
   */
  postAgentProfile(params: CodeGuruProfiler.Types.PostAgentProfileRequest, callback?: (err: AWSError, data: CodeGuruProfiler.Types.PostAgentProfileResponse) => void): Request<CodeGuruProfiler.Types.PostAgentProfileResponse, AWSError>;
  /**
   * Submit profile collected by an agent belonging to a profiling group for aggregation.
   */
  postAgentProfile(callback?: (err: AWSError, data: CodeGuruProfiler.Types.PostAgentProfileResponse) => void): Request<CodeGuruProfiler.Types.PostAgentProfileResponse, AWSError>;
  /**
   * Update a profiling group.
   */
  updateProfilingGroup(params: CodeGuruProfiler.Types.UpdateProfilingGroupRequest, callback?: (err: AWSError, data: CodeGuruProfiler.Types.UpdateProfilingGroupResponse) => void): Request<CodeGuruProfiler.Types.UpdateProfilingGroupResponse, AWSError>;
  /**
   * Update a profiling group.
   */
  updateProfilingGroup(callback?: (err: AWSError, data: CodeGuruProfiler.Types.UpdateProfilingGroupResponse) => void): Request<CodeGuruProfiler.Types.UpdateProfilingGroupResponse, AWSError>;
}
declare namespace CodeGuruProfiler {
  export interface AgentConfiguration {
    /**
     * Specifies the period to follow the configuration (to profile or not) and call back to get a new configuration.
     */
    periodInSeconds: Integer;
    /**
     * Specifies if the profiling should be enabled by the agent.
     */
    shouldProfile: Boolean;
  }
  export interface AgentOrchestrationConfig {
    /**
     * If the agents should be enabled to create and report profiles.
     */
    profilingEnabled: Boolean;
  }
  export type AgentProfile = Buffer|Uint8Array|Blob|string;
  export type AggregatedProfile = Buffer|Uint8Array|Blob|string;
  export interface AggregatedProfileTime {
    /**
     * The aggregation period of the aggregated profile.
     */
    period?: AggregationPeriod;
    /**
     * The start time of the aggregated profile.
     */
    start?: Timestamp;
  }
  export type AggregationPeriod = "P1D"|"PT1H"|"PT5M"|string;
  export type Boolean = boolean;
  export type ClientToken = string;
  export interface ConfigureAgentRequest {
    fleetInstanceId?: FleetInstanceId;
    profilingGroupName: ProfilingGroupName;
  }
  export interface ConfigureAgentResponse {
    /**
     * The configuration for the agent to use.
     */
    configuration: AgentConfiguration;
  }
  export interface CreateProfilingGroupRequest {
    agentOrchestrationConfig?: AgentOrchestrationConfig;
    clientToken: ClientToken;
    profilingGroupName: ProfilingGroupName;
  }
  export interface CreateProfilingGroupResponse {
    profilingGroup: ProfilingGroupDescription;
  }
  export interface DeleteProfilingGroupRequest {
    profilingGroupName: ProfilingGroupName;
  }
  export interface DeleteProfilingGroupResponse {
  }
  export interface DescribeProfilingGroupRequest {
    profilingGroupName: ProfilingGroupName;
  }
  export interface DescribeProfilingGroupResponse {
    profilingGroup: ProfilingGroupDescription;
  }
  export type FleetInstanceId = string;
  export interface GetProfileRequest {
    /**
     * The format of the profile to return. Supports application/json or application/x-amzn-ion. Defaults to application/x-amzn-ion.
     */
    accept?: String;
    /**
     * The end time of the profile to get. Either period or endTime must be specified. Must be greater than start and the overall time range to be in the past and not larger than a week.
     */
    endTime?: Timestamp;
    maxDepth?: MaxDepth;
    /**
     * The period of the profile to get. Exactly two of startTime, period and endTime must be specified. Must be positive and the overall time range to be in the past and not larger than a week.
     */
    period?: Period;
    profilingGroupName: ProfilingGroupName;
    /**
     * The start time of the profile to get.
     */
    startTime?: Timestamp;
  }
  export interface GetProfileResponse {
    /**
     * The content encoding of the profile in the payload.
     */
    contentEncoding?: String;
    /**
     * The content type of the profile in the payload. Will be application/json or application/x-amzn-ion based on Accept header in the request.
     */
    contentType: String;
    profile: AggregatedProfile;
  }
  export type Integer = number;
  export interface ListProfileTimesRequest {
    /**
     * The end time of the time range to list profiles until.
     */
    endTime: Timestamp;
    maxResults?: MaxResults;
    nextToken?: PaginationToken;
    /**
     * The order (ascending or descending by start time of the profile) to list the profiles by. Defaults to TIMESTAMP_DESCENDING.
     */
    orderBy?: OrderBy;
    /**
     * The aggregation period to list the profiles for.
     */
    period: AggregationPeriod;
    profilingGroupName: ProfilingGroupName;
    /**
     * The start time of the time range to list the profiles from.
     */
    startTime: Timestamp;
  }
  export interface ListProfileTimesResponse {
    nextToken?: PaginationToken;
    /**
     * List of start times of the available profiles for the aggregation period in the specified time range.
     */
    profileTimes: ProfileTimes;
  }
  export interface ListProfilingGroupsRequest {
    /**
     * If set to true, returns the full description of the profiling groups instead of the names. Defaults to false.
     */
    includeDescription?: Boolean;
    maxResults?: MaxResults;
    nextToken?: PaginationToken;
  }
  export interface ListProfilingGroupsResponse {
    nextToken?: PaginationToken;
    profilingGroupNames: ProfilingGroupNames;
    profilingGroups?: ProfilingGroupDescriptions;
  }
  export type MaxDepth = number;
  export type MaxResults = number;
  export type OrderBy = "TimestampAscending"|"TimestampDescending"|string;
  export type PaginationToken = string;
  export type Period = string;
  export interface PostAgentProfileRequest {
    agentProfile: AgentProfile;
    /**
     * The content type of the agent profile in the payload. Recommended to send the profile gzipped with content-type application/octet-stream. Other accepted values are application/x-amzn-ion and application/json for unzipped Ion and JSON respectively.
     */
    contentType: String;
    /**
     * Client generated token to deduplicate the agent profile during aggregation.
     */
    profileToken?: ClientToken;
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
    agentOrchestrationConfig?: AgentOrchestrationConfig;
    arn?: ProfilingGroupArn;
    /**
     * The timestamp of when the profiling group was created.
     */
    createdAt?: Timestamp;
    name?: ProfilingGroupName;
    profilingStatus?: ProfilingStatus;
    /**
     * The timestamp of when the profiling group was last updated.
     */
    updatedAt?: Timestamp;
  }
  export type ProfilingGroupDescriptions = ProfilingGroupDescription[];
  export type ProfilingGroupName = string;
  export type ProfilingGroupNames = ProfilingGroupName[];
  export interface ProfilingStatus {
    /**
     * Timestamp of when the last interaction of the agent with configureAgent API for orchestration.
     */
    latestAgentOrchestratedAt?: Timestamp;
    /**
     * Timestamp of when the latest agent profile was successfully reported.
     */
    latestAgentProfileReportedAt?: Timestamp;
    /**
     * The time range of latest aggregated profile available.
     */
    latestAggregatedProfile?: AggregatedProfileTime;
  }
  export type String = string;
  export type Timestamp = Date;
  export interface UpdateProfilingGroupRequest {
    /**
     * Remote configuration to configure the agents of the profiling group.
     */
    agentOrchestrationConfig: AgentOrchestrationConfig;
    profilingGroupName: ProfilingGroupName;
  }
  export interface UpdateProfilingGroupResponse {
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
