import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class Discovery extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Discovery.Types.ClientConfiguration)
  config: Config & Discovery.Types.ClientConfiguration;
  /**
   * Creates one or more tags for configuration items. Tags are metadata that help you categorize IT assets. This API accepts a list of multiple configuration items.
   */
  createTags(params: Discovery.Types.CreateTagsRequest, callback?: (err: AWSError, data: Discovery.Types.CreateTagsResponse) => void): Request<Discovery.Types.CreateTagsResponse, AWSError>;
  /**
   * Creates one or more tags for configuration items. Tags are metadata that help you categorize IT assets. This API accepts a list of multiple configuration items.
   */
  createTags(callback?: (err: AWSError, data: Discovery.Types.CreateTagsResponse) => void): Request<Discovery.Types.CreateTagsResponse, AWSError>;
  /**
   * Deletes the association between configuration items and one or more tags. This API accepts a list of multiple configuration items.
   */
  deleteTags(params: Discovery.Types.DeleteTagsRequest, callback?: (err: AWSError, data: Discovery.Types.DeleteTagsResponse) => void): Request<Discovery.Types.DeleteTagsResponse, AWSError>;
  /**
   * Deletes the association between configuration items and one or more tags. This API accepts a list of multiple configuration items.
   */
  deleteTags(callback?: (err: AWSError, data: Discovery.Types.DeleteTagsResponse) => void): Request<Discovery.Types.DeleteTagsResponse, AWSError>;
  /**
   * Lists AWS agents by ID or lists all agents associated with your user account if you did not specify an agent ID.
   */
  describeAgents(params: Discovery.Types.DescribeAgentsRequest, callback?: (err: AWSError, data: Discovery.Types.DescribeAgentsResponse) => void): Request<Discovery.Types.DescribeAgentsResponse, AWSError>;
  /**
   * Lists AWS agents by ID or lists all agents associated with your user account if you did not specify an agent ID.
   */
  describeAgents(callback?: (err: AWSError, data: Discovery.Types.DescribeAgentsResponse) => void): Request<Discovery.Types.DescribeAgentsResponse, AWSError>;
  /**
   * Retrieves a list of attributes for a specific configuration ID. For example, the output for a server configuration item includes a list of attributes about the server, including host name, operating system, number of network cards, etc.
   */
  describeConfigurations(params: Discovery.Types.DescribeConfigurationsRequest, callback?: (err: AWSError, data: Discovery.Types.DescribeConfigurationsResponse) => void): Request<Discovery.Types.DescribeConfigurationsResponse, AWSError>;
  /**
   * Retrieves a list of attributes for a specific configuration ID. For example, the output for a server configuration item includes a list of attributes about the server, including host name, operating system, number of network cards, etc.
   */
  describeConfigurations(callback?: (err: AWSError, data: Discovery.Types.DescribeConfigurationsResponse) => void): Request<Discovery.Types.DescribeConfigurationsResponse, AWSError>;
  /**
   * Retrieves the status of a given export process. You can retrieve status from a maximum of 100 processes.
   */
  describeExportConfigurations(params: Discovery.Types.DescribeExportConfigurationsRequest, callback?: (err: AWSError, data: Discovery.Types.DescribeExportConfigurationsResponse) => void): Request<Discovery.Types.DescribeExportConfigurationsResponse, AWSError>;
  /**
   * Retrieves the status of a given export process. You can retrieve status from a maximum of 100 processes.
   */
  describeExportConfigurations(callback?: (err: AWSError, data: Discovery.Types.DescribeExportConfigurationsResponse) => void): Request<Discovery.Types.DescribeExportConfigurationsResponse, AWSError>;
  /**
   * Retrieves a list of configuration items that are tagged with a specific tag. Or retrieves a list of all tags assigned to a specific configuration item.
   */
  describeTags(params: Discovery.Types.DescribeTagsRequest, callback?: (err: AWSError, data: Discovery.Types.DescribeTagsResponse) => void): Request<Discovery.Types.DescribeTagsResponse, AWSError>;
  /**
   * Retrieves a list of configuration items that are tagged with a specific tag. Or retrieves a list of all tags assigned to a specific configuration item.
   */
  describeTags(callback?: (err: AWSError, data: Discovery.Types.DescribeTagsResponse) => void): Request<Discovery.Types.DescribeTagsResponse, AWSError>;
  /**
   * Exports all discovered configuration data to an Amazon S3 bucket or an application that enables you to view and evaluate the data. Data includes tags and tag associations, processes, connections, servers, and system performance. This API returns an export ID which you can query using the GetExportStatus API. The system imposes a limit of two configuration exports in six hours.
   */
  exportConfigurations(callback?: (err: AWSError, data: Discovery.Types.ExportConfigurationsResponse) => void): Request<Discovery.Types.ExportConfigurationsResponse, AWSError>;
  /**
   * Retrieves a list of configurations items according to the criteria you specify in a filter. The filter criteria identify relationship requirements.
   */
  listConfigurations(params: Discovery.Types.ListConfigurationsRequest, callback?: (err: AWSError, data: Discovery.Types.ListConfigurationsResponse) => void): Request<Discovery.Types.ListConfigurationsResponse, AWSError>;
  /**
   * Retrieves a list of configurations items according to the criteria you specify in a filter. The filter criteria identify relationship requirements.
   */
  listConfigurations(callback?: (err: AWSError, data: Discovery.Types.ListConfigurationsResponse) => void): Request<Discovery.Types.ListConfigurationsResponse, AWSError>;
  /**
   * Instructs the specified agents to start collecting data. Agents can reside on host servers or virtual machines in your data center.
   */
  startDataCollectionByAgentIds(params: Discovery.Types.StartDataCollectionByAgentIdsRequest, callback?: (err: AWSError, data: Discovery.Types.StartDataCollectionByAgentIdsResponse) => void): Request<Discovery.Types.StartDataCollectionByAgentIdsResponse, AWSError>;
  /**
   * Instructs the specified agents to start collecting data. Agents can reside on host servers or virtual machines in your data center.
   */
  startDataCollectionByAgentIds(callback?: (err: AWSError, data: Discovery.Types.StartDataCollectionByAgentIdsResponse) => void): Request<Discovery.Types.StartDataCollectionByAgentIdsResponse, AWSError>;
  /**
   * Instructs the specified agents to stop collecting data.
   */
  stopDataCollectionByAgentIds(params: Discovery.Types.StopDataCollectionByAgentIdsRequest, callback?: (err: AWSError, data: Discovery.Types.StopDataCollectionByAgentIdsResponse) => void): Request<Discovery.Types.StopDataCollectionByAgentIdsResponse, AWSError>;
  /**
   * Instructs the specified agents to stop collecting data.
   */
  stopDataCollectionByAgentIds(callback?: (err: AWSError, data: Discovery.Types.StopDataCollectionByAgentIdsResponse) => void): Request<Discovery.Types.StopDataCollectionByAgentIdsResponse, AWSError>;
}
declare namespace Discovery.Types {
  export interface AgentConfigurationStatus {
    /**
     * The agent ID.
     */
    agentId?: String;
    /**
     * Information about the status of the StartDataCollection and StopDataCollection operations. The system has recorded the data collection operation. The agent receives this command the next time it polls for a new command. 
     */
    operationSucceeded?: Boolean;
    /**
     * A description of the operation performed.
     */
    description?: String;
  }
  export type AgentConfigurationStatusList = AgentConfigurationStatus[];
  export type AgentId = string;
  export type AgentIds = AgentId[];
  export interface AgentInfo {
    /**
     * The agent ID.
     */
    agentId?: AgentId;
    /**
     * The name of the host where the agent resides. The host can be a server or virtual machine.
     */
    hostName?: String;
    /**
     * Network details about the host where the agent resides.
     */
    agentNetworkInfoList?: AgentNetworkInfoList;
    /**
     * This data type is currently not valid.
     */
    connectorId?: String;
    /**
     * The agent version.
     */
    version?: String;
    /**
     * The health of the agent.
     */
    health?: AgentStatus;
  }
  export interface AgentNetworkInfo {
    /**
     * The IP address for the host where the agent resides.
     */
    ipAddress?: String;
    /**
     * The MAC address for the host where the agent resides.
     */
    macAddress?: String;
  }
  export type AgentNetworkInfoList = AgentNetworkInfo[];
  export type AgentStatus = "HEALTHY"|"UNHEALTHY"|"RUNNING"|"UNKNOWN"|"BLACKLISTED"|"SHUTDOWN"|string;
  export type AgentsInfo = AgentInfo[];
  export type Boolean = boolean;
  export type Condition = string;
  export type Configuration = {[key: string]: String};
  export type ConfigurationId = string;
  export type ConfigurationIdList = ConfigurationId[];
  export type ConfigurationItemType = "SERVER"|"PROCESS"|"CONNECTION"|string;
  export interface ConfigurationTag {
    /**
     * A type of IT asset that you want to tag.
     */
    configurationType?: ConfigurationItemType;
    /**
     * The configuration ID for the item you want to tag. You can specify a list of keys and values.
     */
    configurationId?: ConfigurationId;
    /**
     * A type of tag to filter on. For example, serverType.
     */
    key?: TagKey;
    /**
     * A value to filter on. For example key = serverType and value = web server.
     */
    value?: TagValue;
    /**
     * The time the configuration tag was created in Coordinated Universal Time (UTC).
     */
    timeOfCreation?: TimeStamp;
  }
  export type ConfigurationTagSet = ConfigurationTag[];
  export type Configurations = Configuration[];
  export type ConfigurationsDownloadUrl = string;
  export type ConfigurationsExportId = string;
  export interface CreateTagsRequest {
    /**
     * A list of configuration items that you want to tag.
     */
    configurationIds: ConfigurationIdList;
    /**
     * Tags that you want to associate with one or more configuration items. Specify the tags that you want to create in a key-value format. For example:  {"key": "serverType", "value": "webServer"} 
     */
    tags: TagSet;
  }
  export interface CreateTagsResponse {
  }
  export interface DeleteTagsRequest {
    /**
     * A list of configuration items with tags that you want to delete.
     */
    configurationIds: ConfigurationIdList;
    /**
     * Tags that you want to delete from one or more configuration items. Specify the tags that you want to delete in a key-value format. For example:  {"key": "serverType", "value": "webServer"} 
     */
    tags?: TagSet;
  }
  export interface DeleteTagsResponse {
  }
  export interface DescribeAgentsRequest {
    /**
     * The agent IDs for which you want information. If you specify no IDs, the system returns information about all agents associated with your AWS user account.
     */
    agentIds?: AgentIds;
    /**
     * The total number of agents to return. The maximum value is 100.
     */
    maxResults?: Integer;
    /**
     * A token to start the list. Use this token to get the next set of results.
     */
    nextToken?: NextToken;
  }
  export interface DescribeAgentsResponse {
    /**
     * Lists AWS agents by ID or lists all agents associated with your user account if you did not specify an agent ID. The output includes agent IDs, IP addresses, media access control (MAC) addresses, agent health, host name where the agent resides, and the version number of each agent.
     */
    agentsInfo?: AgentsInfo;
    /**
     * The call returns a token. Use this token to get the next set of results.
     */
    nextToken?: NextToken;
  }
  export type DescribeConfigurationsAttribute = {[key: string]: String};
  export type DescribeConfigurationsAttributes = DescribeConfigurationsAttribute[];
  export interface DescribeConfigurationsRequest {
    /**
     * One or more configuration IDs.
     */
    configurationIds: ConfigurationIdList;
  }
  export interface DescribeConfigurationsResponse {
    /**
     * A key in the response map. The value is an array of data.
     */
    configurations?: DescribeConfigurationsAttributes;
  }
  export interface DescribeExportConfigurationsRequest {
    /**
     * A unique identifier that you can use to query the export status.
     */
    exportIds?: ExportIds;
    /**
     * The maximum number of results that you want to display as a part of the query.
     */
    maxResults?: Integer;
    /**
     * A token to get the next set of results. For example, if you specified 100 IDs for DescribeConfigurationsRequest$configurationIds but set DescribeExportConfigurationsRequest$maxResults to 10, you will get results in a set of 10. Use the token in the query to get the next set of 10.
     */
    nextToken?: NextToken;
  }
  export interface DescribeExportConfigurationsResponse {
    /**
     * Returns export details. When the status is complete, the response includes a URL for an Amazon S3 bucket where you can view the data in a CSV file.
     */
    exportsInfo?: ExportsInfo;
    /**
     * A token to get the next set of results. For example, if you specified 100 IDs for DescribeConfigurationsRequest$configurationIds but set DescribeExportConfigurationsRequest$maxResults to 10, you will get results in a set of 10. Use the token in the query to get the next set of 10.
     */
    nextToken?: NextToken;
  }
  export interface DescribeTagsRequest {
    /**
     * You can filter the list using a key-value format. You can separate these items by using logical operators. Allowed filters include tagKey, tagValue, and configurationId. 
     */
    filters?: TagFilters;
    /**
     * The total number of items to return. The maximum value is 100.
     */
    maxResults?: Integer;
    /**
     * A token to start the list. Use this token to get the next set of results.
     */
    nextToken?: NextToken;
  }
  export interface DescribeTagsResponse {
    /**
     * Depending on the input, this is a list of configuration items tagged with a specific tag, or a list of tags for a specific configuration item.
     */
    tags?: ConfigurationTagSet;
    /**
     * The call returns a token. Use this token to get the next set of results.
     */
    nextToken?: NextToken;
  }
  export interface ExportConfigurationsResponse {
    /**
     * A unique identifier that you can use to query the export status.
     */
    exportId?: ConfigurationsExportId;
  }
  export type ExportIds = ConfigurationsExportId[];
  export interface ExportInfo {
    /**
     * A unique identifier that you can use to query the export.
     */
    exportId: ConfigurationsExportId;
    /**
     * The status of the configuration data export. The status can succeed, fail, or be in-progress.
     */
    exportStatus: ExportStatus;
    /**
     * Helpful status messages for API callers. For example: Too many exports in the last 6 hours. Export in progress. Export was successful.
     */
    statusMessage: ExportStatusMessage;
    /**
     * A URL for an Amazon S3 bucket where you can review the configuration data. The URL is displayed only if the export succeeded.
     */
    configurationsDownloadUrl?: ConfigurationsDownloadUrl;
    /**
     * The time the configuration data export was initiated.
     */
    exportRequestTime: ExportRequestTime;
  }
  export type ExportRequestTime = Date;
  export type ExportStatus = "FAILED"|"SUCCEEDED"|"IN_PROGRESS"|string;
  export type ExportStatusMessage = string;
  export type ExportsInfo = ExportInfo[];
  export interface Filter {
    /**
     * The name of the filter. The following filter names are allowed for SERVER configuration items.  Server     server.hostName     server.osName     server.osVersion     server.configurationid     server.agentid    The name of the filter. The following filter names are allowed for PROCESS configuration items.  Process     process.configurationid     process.name     process.commandLine     server.configurationid     server.hostName     server.osName     server.osVersion     server.agentId    The name of the filter. The following filter names are allowed for CONNECTION configuration items.  Connection     connection.sourceIp     connection.destinationIp     connection.destinationPort     sourceProcess.configurationId     sourceProcess.name     sourceProcess.commandLine     destinationProcess.configurationId     destinationProcess.name     destinationProcess.commandLine     sourceServer.configurationId     sourceServer.hostName     sourceServer.osName     sourceServer.osVersion     sourceServer.agentId     destinationServer.configurationId     destinationServer.hostName     destinationServer.osName     destinationServer.osVersion     destinationServer.agentId   
     */
    name: String;
    /**
     * A string value that you want to filter on. For example, if you choose the destinationServer.osVersion filter name, you could specify Ubuntu for the value.
     */
    values: FilterValues;
    /**
     * A conditional operator. The following operators are valid: EQUALS, NOT_EQUALS, CONTAINS, NOT_CONTAINS. If you specify multiple filters, the system utilizes all filters as though concatenated by AND. If you specify multiple values for a particular filter, the system differentiates the values using OR. Calling either DescribeConfigurations or ListConfigurations returns attributes of matching configuration items.
     */
    condition: Condition;
  }
  export type FilterName = string;
  export type FilterValue = string;
  export type FilterValues = FilterValue[];
  export type Filters = Filter[];
  export type Integer = number;
  export interface ListConfigurationsRequest {
    /**
     * A valid configuration identified by the Discovery Service. 
     */
    configurationType: ConfigurationItemType;
    /**
     * You can filter the list using a key-value format. For example:   {"key": "serverType", "value": "webServer"}  You can separate these items by using logical operators. 
     */
    filters?: Filters;
    /**
     * The total number of items to return. The maximum value is 100.
     */
    maxResults?: Integer;
    /**
     * A token to start the list. Use this token to get the next set of results.
     */
    nextToken?: NextToken;
  }
  export interface ListConfigurationsResponse {
    /**
     * Returns configuration details, including the configuration ID, attribute names, and attribute values.
     */
    configurations?: Configurations;
    /**
     * The call returns a token. Use this token to get the next set of results.
     */
    nextToken?: NextToken;
  }
  export type Message = string;
  export type NextToken = string;
  export interface StartDataCollectionByAgentIdsRequest {
    /**
     * The IDs of the agents that you want to start collecting data. If you send a request to an AWS agent ID that you do not have permission to contact, according to your AWS account, the service does not throw an exception. Instead, it returns the error in the Description field. If you send a request to multiple agents and you do not have permission to contact some of those agents, the system does not throw an exception. Instead, the system shows Failed in the Description field.
     */
    agentIds: AgentIds;
  }
  export interface StartDataCollectionByAgentIdsResponse {
    /**
     * Information about agents that were instructed to start collecting data. Information includes the agent ID, a description of the operation performed, and whether or not the agent configuration was updated.
     */
    agentsConfigurationStatus?: AgentConfigurationStatusList;
  }
  export interface StopDataCollectionByAgentIdsRequest {
    /**
     * The IDs of the agents that you want to stop collecting data.
     */
    agentIds: AgentIds;
  }
  export interface StopDataCollectionByAgentIdsResponse {
    /**
     * Information about agents that were instructed to stop collecting data. Information includes the agent ID, a description of the operation performed, and whether or not the agent configuration was updated.
     */
    agentsConfigurationStatus?: AgentConfigurationStatusList;
  }
  export type String = string;
  export interface Tag {
    /**
     * A type of tag to filter on.
     */
    key: TagKey;
    /**
     * A value for a tag key to filter on.
     */
    value: TagValue;
  }
  export interface TagFilter {
    /**
     * A name of a tag filter.
     */
    name: FilterName;
    /**
     * Values of a tag filter.
     */
    values: FilterValues;
  }
  export type TagFilters = TagFilter[];
  export type TagKey = string;
  export type TagSet = Tag[];
  export type TagValue = string;
  export type TimeStamp = Date;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2015-11-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
}
export = Discovery;
