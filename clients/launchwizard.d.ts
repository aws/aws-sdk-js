import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class LaunchWizard extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: LaunchWizard.Types.ClientConfiguration)
  config: Config & LaunchWizard.Types.ClientConfiguration;
  /**
   * Creates a deployment for the given workload. Deployments created by this operation are not available in the Launch Wizard console to use the Clone deployment action on.
   */
  createDeployment(params: LaunchWizard.Types.CreateDeploymentInput, callback?: (err: AWSError, data: LaunchWizard.Types.CreateDeploymentOutput) => void): Request<LaunchWizard.Types.CreateDeploymentOutput, AWSError>;
  /**
   * Creates a deployment for the given workload. Deployments created by this operation are not available in the Launch Wizard console to use the Clone deployment action on.
   */
  createDeployment(callback?: (err: AWSError, data: LaunchWizard.Types.CreateDeploymentOutput) => void): Request<LaunchWizard.Types.CreateDeploymentOutput, AWSError>;
  /**
   * Deletes a deployment.
   */
  deleteDeployment(params: LaunchWizard.Types.DeleteDeploymentInput, callback?: (err: AWSError, data: LaunchWizard.Types.DeleteDeploymentOutput) => void): Request<LaunchWizard.Types.DeleteDeploymentOutput, AWSError>;
  /**
   * Deletes a deployment.
   */
  deleteDeployment(callback?: (err: AWSError, data: LaunchWizard.Types.DeleteDeploymentOutput) => void): Request<LaunchWizard.Types.DeleteDeploymentOutput, AWSError>;
  /**
   * Returns information about the deployment.
   */
  getDeployment(params: LaunchWizard.Types.GetDeploymentInput, callback?: (err: AWSError, data: LaunchWizard.Types.GetDeploymentOutput) => void): Request<LaunchWizard.Types.GetDeploymentOutput, AWSError>;
  /**
   * Returns information about the deployment.
   */
  getDeployment(callback?: (err: AWSError, data: LaunchWizard.Types.GetDeploymentOutput) => void): Request<LaunchWizard.Types.GetDeploymentOutput, AWSError>;
  /**
   * Returns information about a workload.
   */
  getWorkload(params: LaunchWizard.Types.GetWorkloadInput, callback?: (err: AWSError, data: LaunchWizard.Types.GetWorkloadOutput) => void): Request<LaunchWizard.Types.GetWorkloadOutput, AWSError>;
  /**
   * Returns information about a workload.
   */
  getWorkload(callback?: (err: AWSError, data: LaunchWizard.Types.GetWorkloadOutput) => void): Request<LaunchWizard.Types.GetWorkloadOutput, AWSError>;
  /**
   * Returns details for a given workload and deployment pattern, including the available specifications. You can use the ListWorkloads operation to discover the available workload names and the ListWorkloadDeploymentPatterns operation to discover the available deployment pattern names of a given workload.
   */
  getWorkloadDeploymentPattern(params: LaunchWizard.Types.GetWorkloadDeploymentPatternInput, callback?: (err: AWSError, data: LaunchWizard.Types.GetWorkloadDeploymentPatternOutput) => void): Request<LaunchWizard.Types.GetWorkloadDeploymentPatternOutput, AWSError>;
  /**
   * Returns details for a given workload and deployment pattern, including the available specifications. You can use the ListWorkloads operation to discover the available workload names and the ListWorkloadDeploymentPatterns operation to discover the available deployment pattern names of a given workload.
   */
  getWorkloadDeploymentPattern(callback?: (err: AWSError, data: LaunchWizard.Types.GetWorkloadDeploymentPatternOutput) => void): Request<LaunchWizard.Types.GetWorkloadDeploymentPatternOutput, AWSError>;
  /**
   * Lists the events of a deployment.
   */
  listDeploymentEvents(params: LaunchWizard.Types.ListDeploymentEventsInput, callback?: (err: AWSError, data: LaunchWizard.Types.ListDeploymentEventsOutput) => void): Request<LaunchWizard.Types.ListDeploymentEventsOutput, AWSError>;
  /**
   * Lists the events of a deployment.
   */
  listDeploymentEvents(callback?: (err: AWSError, data: LaunchWizard.Types.ListDeploymentEventsOutput) => void): Request<LaunchWizard.Types.ListDeploymentEventsOutput, AWSError>;
  /**
   * Lists the deployments that have been created.
   */
  listDeployments(params: LaunchWizard.Types.ListDeploymentsInput, callback?: (err: AWSError, data: LaunchWizard.Types.ListDeploymentsOutput) => void): Request<LaunchWizard.Types.ListDeploymentsOutput, AWSError>;
  /**
   * Lists the deployments that have been created.
   */
  listDeployments(callback?: (err: AWSError, data: LaunchWizard.Types.ListDeploymentsOutput) => void): Request<LaunchWizard.Types.ListDeploymentsOutput, AWSError>;
  /**
   * Lists the tags associated with a specified resource.
   */
  listTagsForResource(params: LaunchWizard.Types.ListTagsForResourceInput, callback?: (err: AWSError, data: LaunchWizard.Types.ListTagsForResourceOutput) => void): Request<LaunchWizard.Types.ListTagsForResourceOutput, AWSError>;
  /**
   * Lists the tags associated with a specified resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: LaunchWizard.Types.ListTagsForResourceOutput) => void): Request<LaunchWizard.Types.ListTagsForResourceOutput, AWSError>;
  /**
   * Lists the workload deployment patterns for a given workload name. You can use the ListWorkloads operation to discover the available workload names.
   */
  listWorkloadDeploymentPatterns(params: LaunchWizard.Types.ListWorkloadDeploymentPatternsInput, callback?: (err: AWSError, data: LaunchWizard.Types.ListWorkloadDeploymentPatternsOutput) => void): Request<LaunchWizard.Types.ListWorkloadDeploymentPatternsOutput, AWSError>;
  /**
   * Lists the workload deployment patterns for a given workload name. You can use the ListWorkloads operation to discover the available workload names.
   */
  listWorkloadDeploymentPatterns(callback?: (err: AWSError, data: LaunchWizard.Types.ListWorkloadDeploymentPatternsOutput) => void): Request<LaunchWizard.Types.ListWorkloadDeploymentPatternsOutput, AWSError>;
  /**
   * Lists the available workload names. You can use the ListWorkloadDeploymentPatterns operation to discover the available deployment patterns for a given workload.
   */
  listWorkloads(params: LaunchWizard.Types.ListWorkloadsInput, callback?: (err: AWSError, data: LaunchWizard.Types.ListWorkloadsOutput) => void): Request<LaunchWizard.Types.ListWorkloadsOutput, AWSError>;
  /**
   * Lists the available workload names. You can use the ListWorkloadDeploymentPatterns operation to discover the available deployment patterns for a given workload.
   */
  listWorkloads(callback?: (err: AWSError, data: LaunchWizard.Types.ListWorkloadsOutput) => void): Request<LaunchWizard.Types.ListWorkloadsOutput, AWSError>;
  /**
   * Adds the specified tags to the given resource.
   */
  tagResource(params: LaunchWizard.Types.TagResourceInput, callback?: (err: AWSError, data: LaunchWizard.Types.TagResourceOutput) => void): Request<LaunchWizard.Types.TagResourceOutput, AWSError>;
  /**
   * Adds the specified tags to the given resource.
   */
  tagResource(callback?: (err: AWSError, data: LaunchWizard.Types.TagResourceOutput) => void): Request<LaunchWizard.Types.TagResourceOutput, AWSError>;
  /**
   * Removes the specified tags from the given resource.
   */
  untagResource(params: LaunchWizard.Types.UntagResourceInput, callback?: (err: AWSError, data: LaunchWizard.Types.UntagResourceOutput) => void): Request<LaunchWizard.Types.UntagResourceOutput, AWSError>;
  /**
   * Removes the specified tags from the given resource.
   */
  untagResource(callback?: (err: AWSError, data: LaunchWizard.Types.UntagResourceOutput) => void): Request<LaunchWizard.Types.UntagResourceOutput, AWSError>;
}
declare namespace LaunchWizard {
  export type AllowedValues = ValueString[];
  export type Boolean = boolean;
  export interface CreateDeploymentInput {
    /**
     * The name of the deployment pattern supported by a given workload. You can use the  ListWorkloadDeploymentPatterns  operation to discover supported values for this parameter. 
     */
    deploymentPatternName: DeploymentPatternName;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
     */
    dryRun?: Boolean;
    /**
     * The name of the deployment.
     */
    name: DeploymentName;
    /**
     * The settings specified for the deployment. These settings define how to deploy and configure your resources created by the deployment. For more information about the specifications required for creating a deployment for a SAP workload, see SAP deployment specifications. To retrieve the specifications required to create a deployment for other workloads, use the  GetWorkloadDeploymentPattern  operation.
     */
    specifications: DeploymentSpecifications;
    /**
     * The tags to add to the deployment.
     */
    tags?: Tags;
    /**
     * The name of the workload. You can use the  ListWorkloads  operation to discover supported values for this parameter.
     */
    workloadName: WorkloadName;
  }
  export interface CreateDeploymentOutput {
    /**
     * The ID of the deployment.
     */
    deploymentId?: DeploymentId;
  }
  export interface DeleteDeploymentInput {
    /**
     * The ID of the deployment.
     */
    deploymentId: DeploymentId;
  }
  export interface DeleteDeploymentOutput {
    /**
     * The status of the deployment.
     */
    status?: DeploymentStatus;
    /**
     * The reason for the deployment status.
     */
    statusReason?: String;
  }
  export interface DeploymentConditionalField {
    /**
     * The comparator of the condition. Valid values: Equal | NotEqual 
     */
    comparator?: String;
    /**
     * The name of the deployment condition.
     */
    name?: String;
    /**
     * The value of the condition.
     */
    value?: String;
  }
  export interface DeploymentData {
    /**
     * The time the deployment was created.
     */
    createdAt?: Timestamp;
    /**
     * The time the deployment was deleted.
     */
    deletedAt?: Timestamp;
    /**
     * The Amazon Resource Name (ARN) of the deployment.
     */
    deploymentArn?: String;
    /**
     * The ID of the deployment.
     */
    id?: DeploymentId;
    /**
     * The name of the deployment.
     */
    name?: String;
    /**
     * The pattern name of the deployment.
     */
    patternName?: DeploymentPatternName;
    /**
     * The resource group of the deployment.
     */
    resourceGroup?: String;
    /**
     * The settings specified for the deployment. These settings define how to deploy and configure your resources created by the deployment. For more information about the specifications required for creating a deployment for a SAP workload, see SAP deployment specifications. To retrieve the specifications required to create a deployment for other workloads, use the  GetWorkloadDeploymentPattern  operation.
     */
    specifications?: DeploymentSpecifications;
    /**
     * The status of the deployment.
     */
    status?: DeploymentStatus;
    /**
     * Information about the tags attached to a deployment.
     */
    tags?: Tags;
    /**
     * The name of the workload.
     */
    workloadName?: WorkloadName;
  }
  export interface DeploymentDataSummary {
    /**
     * The time the deployment was created.
     */
    createdAt?: Timestamp;
    /**
     * The ID of the deployment.
     */
    id?: DeploymentId;
    /**
     * The name of the deployment
     */
    name?: String;
    /**
     * The name of the workload deployment pattern.
     */
    patternName?: DeploymentPatternName;
    /**
     * The status of the deployment.
     */
    status?: DeploymentStatus;
    /**
     * The name of the workload.
     */
    workloadName?: WorkloadName;
  }
  export type DeploymentDataSummaryList = DeploymentDataSummary[];
  export interface DeploymentEventDataSummary {
    /**
     * The description of the deployment event.
     */
    description?: String;
    /**
     * The name of the deployment event.
     */
    name?: String;
    /**
     * The status of the deployment event.
     */
    status?: EventStatus;
    /**
     * The reason of the deployment event status.
     */
    statusReason?: String;
    /**
     * The timestamp of the deployment event.
     */
    timestamp?: Timestamp;
  }
  export type DeploymentEventDataSummaryList = DeploymentEventDataSummary[];
  export interface DeploymentFilter {
    /**
     * The name of the filter. Filter names are case-sensitive.
     */
    name?: DeploymentFilterKey;
    /**
     * The filter values. Filter values are case-sensitive. If you specify multiple values for a filter, the values are joined with an OR, and the request returns all results that match any of the specified values.
     */
    values?: DeploymentFilterValues;
  }
  export type DeploymentFilterKey = "WORKLOAD_NAME"|"DEPLOYMENT_STATUS"|string;
  export type DeploymentFilterList = DeploymentFilter[];
  export type DeploymentFilterValues = DeploymentFilterValuesMemberString[];
  export type DeploymentFilterValuesMemberString = string;
  export type DeploymentId = string;
  export type DeploymentName = string;
  export type DeploymentPatternName = string;
  export type DeploymentSpecifications = {[key: string]: ValueString};
  export type DeploymentSpecificationsData = DeploymentSpecificationsField[];
  export interface DeploymentSpecificationsField {
    /**
     * The allowed values of the deployment specification.
     */
    allowedValues?: AllowedValues;
    /**
     * The conditionals used for the deployment specification.
     */
    conditionals?: SpecificationsConditionalData;
    /**
     * The description of the deployment specification.
     */
    description?: String;
    /**
     * The name of the deployment specification.
     */
    name?: String;
    /**
     * Indicates if the deployment specification is required.
     */
    required?: String;
  }
  export type DeploymentStatus = "COMPLETED"|"CREATING"|"DELETE_IN_PROGRESS"|"DELETE_INITIATING"|"DELETE_FAILED"|"DELETED"|"FAILED"|"IN_PROGRESS"|"VALIDATING"|string;
  export type EventStatus = "CANCELED"|"CANCELING"|"COMPLETED"|"CREATED"|"FAILED"|"IN_PROGRESS"|"PENDING"|"TIMED_OUT"|string;
  export interface GetDeploymentInput {
    /**
     * The ID of the deployment.
     */
    deploymentId: DeploymentId;
  }
  export interface GetDeploymentOutput {
    /**
     * An object that details the deployment.
     */
    deployment?: DeploymentData;
  }
  export interface GetWorkloadDeploymentPatternInput {
    /**
     * The name of the deployment pattern.
     */
    deploymentPatternName: DeploymentPatternName;
    /**
     * The name of the workload.
     */
    workloadName: WorkloadName;
  }
  export interface GetWorkloadDeploymentPatternOutput {
    /**
     * Details about the workload deployment pattern.
     */
    workloadDeploymentPattern?: WorkloadDeploymentPatternData;
  }
  export interface GetWorkloadInput {
    /**
     * The name of the workload.
     */
    workloadName: WorkloadName;
  }
  export interface GetWorkloadOutput {
    /**
     * Information about the workload.
     */
    workload?: WorkloadData;
  }
  export type KeyString = string;
  export interface ListDeploymentEventsInput {
    /**
     * The ID of the deployment.
     */
    deploymentId: DeploymentId;
    /**
     * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output.
     */
    maxResults?: MaxDeploymentEventResults;
    /**
     * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
     */
    nextToken?: NextToken;
  }
  export interface ListDeploymentEventsOutput {
    /**
     * Lists the deployment events.
     */
    deploymentEvents?: DeploymentEventDataSummaryList;
    /**
     * The token to include in another request to get the next page of items. This value is null when there are no more items to return.
     */
    nextToken?: NextToken;
  }
  export interface ListDeploymentsInput {
    /**
     * Filters to scope the results. The following filters are supported:    WORKLOAD_NAME - The name used in deployments.    DEPLOYMENT_STATUS - COMPLETED | CREATING | DELETE_IN_PROGRESS | DELETE_INITIATING | DELETE_FAILED | DELETED | FAILED | IN_PROGRESS | VALIDATING   
     */
    filters?: DeploymentFilterList;
    /**
     * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output.
     */
    maxResults?: MaxDeploymentResults;
    /**
     * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
     */
    nextToken?: NextToken;
  }
  export interface ListDeploymentsOutput {
    /**
     * Lists the deployments.
     */
    deployments?: DeploymentDataSummaryList;
    /**
     * The token to include in another request to get the next page of items. This value is null when there are no more items to return.
     */
    nextToken?: NextToken;
  }
  export interface ListTagsForResourceInput {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    resourceArn: String;
  }
  export interface ListTagsForResourceOutput {
    /**
     * Information about the tags.
     */
    tags?: Tags;
  }
  export interface ListWorkloadDeploymentPatternsInput {
    /**
     * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output.
     */
    maxResults?: MaxWorkloadDeploymentPatternResults;
    /**
     * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
     */
    nextToken?: NextToken;
    /**
     * The name of the workload.
     */
    workloadName: WorkloadName;
  }
  export interface ListWorkloadDeploymentPatternsOutput {
    /**
     * The token to include in another request to get the next page of items. This value is null when there are no more items to return.
     */
    nextToken?: NextToken;
    /**
     * Describes the workload deployment patterns.
     */
    workloadDeploymentPatterns?: WorkloadDeploymentPatternDataSummaryList;
  }
  export interface ListWorkloadsInput {
    /**
     * The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output.
     */
    maxResults?: MaxWorkloadResults;
    /**
     * The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.
     */
    nextToken?: NextToken;
  }
  export interface ListWorkloadsOutput {
    /**
     * The token to include in another request to get the next page of items. This value is null when there are no more items to return.
     */
    nextToken?: NextToken;
    /**
     * Information about the workloads.
     */
    workloads?: WorkloadDataSummaryList;
  }
  export type MaxDeploymentEventResults = number;
  export type MaxDeploymentResults = number;
  export type MaxWorkloadDeploymentPatternResults = number;
  export type MaxWorkloadResults = number;
  export type NextToken = string;
  export type SpecificationsConditionalData = DeploymentConditionalField[];
  export type String = string;
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export interface TagResourceInput {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    resourceArn: String;
    /**
     * One or more tags to attach to the resource.
     */
    tags: Tags;
  }
  export interface TagResourceOutput {
  }
  export type TagValue = string;
  export type Tags = {[key: string]: TagValue};
  export type Timestamp = Date;
  export interface UntagResourceInput {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    resourceArn: String;
    /**
     * Keys identifying the tags to remove.
     */
    tagKeys: TagKeyList;
  }
  export interface UntagResourceOutput {
  }
  export type ValueString = string;
  export interface WorkloadData {
    /**
     * The description of a workload.
     */
    description?: String;
    /**
     * The display name of a workload.
     */
    displayName?: String;
    /**
     * The URL of a workload document.
     */
    documentationUrl?: String;
    /**
     * The URL of a workload icon.
     */
    iconUrl?: String;
    /**
     * The status of a workload.
     */
    status?: WorkloadStatus;
    /**
     * The message about a workload's status.
     */
    statusMessage?: String;
    /**
     * The name of the workload.
     */
    workloadName?: WorkloadName;
  }
  export interface WorkloadDataSummary {
    /**
     * The display name of the workload data.
     */
    displayName?: String;
    /**
     * The name of the workload.
     */
    workloadName?: WorkloadName;
  }
  export type WorkloadDataSummaryList = WorkloadDataSummary[];
  export interface WorkloadDeploymentPatternData {
    /**
     * The name of the deployment pattern.
     */
    deploymentPatternName?: DeploymentPatternName;
    /**
     * The description of the deployment pattern.
     */
    description?: String;
    /**
     * The display name of the deployment pattern.
     */
    displayName?: String;
    /**
     * The settings specified for the deployment. These settings define how to deploy and configure your resources created by the deployment. For more information about the specifications required for creating a deployment for a SAP workload, see SAP deployment specifications. To retrieve the specifications required to create a deployment for other workloads, use the  GetWorkloadDeploymentPattern  operation.
     */
    specifications?: DeploymentSpecificationsData;
    /**
     * The status of the deployment pattern.
     */
    status?: WorkloadDeploymentPatternStatus;
    /**
     * The status message of the deployment pattern.
     */
    statusMessage?: String;
    /**
     * The workload name of the deployment pattern.
     */
    workloadName?: WorkloadName;
    /**
     * The workload version name of the deployment pattern.
     */
    workloadVersionName?: WorkloadVersionName;
  }
  export interface WorkloadDeploymentPatternDataSummary {
    /**
     * The name of a workload deployment pattern.
     */
    deploymentPatternName?: DeploymentPatternName;
    /**
     * The description of a workload deployment pattern.
     */
    description?: String;
    /**
     * The display name of a workload deployment pattern.
     */
    displayName?: String;
    /**
     * The status of a workload deployment pattern.
     */
    status?: WorkloadDeploymentPatternStatus;
    /**
     * A message about a workload deployment pattern's status.
     */
    statusMessage?: String;
    /**
     * The name of the workload.
     */
    workloadName?: WorkloadName;
    /**
     * The name of the workload deployment pattern version.
     */
    workloadVersionName?: WorkloadVersionName;
  }
  export type WorkloadDeploymentPatternDataSummaryList = WorkloadDeploymentPatternDataSummary[];
  export type WorkloadDeploymentPatternStatus = "ACTIVE"|"INACTIVE"|"DISABLED"|"DELETED"|string;
  export type WorkloadName = string;
  export type WorkloadStatus = "ACTIVE"|"INACTIVE"|"DISABLED"|"DELETED"|string;
  export type WorkloadVersionName = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-05-10"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the LaunchWizard client.
   */
  export import Types = LaunchWizard;
}
export = LaunchWizard;
