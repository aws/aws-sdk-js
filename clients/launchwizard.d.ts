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
   * Lists the workload deployment patterns.
   */
  listWorkloadDeploymentPatterns(params: LaunchWizard.Types.ListWorkloadDeploymentPatternsInput, callback?: (err: AWSError, data: LaunchWizard.Types.ListWorkloadDeploymentPatternsOutput) => void): Request<LaunchWizard.Types.ListWorkloadDeploymentPatternsOutput, AWSError>;
  /**
   * Lists the workload deployment patterns.
   */
  listWorkloadDeploymentPatterns(callback?: (err: AWSError, data: LaunchWizard.Types.ListWorkloadDeploymentPatternsOutput) => void): Request<LaunchWizard.Types.ListWorkloadDeploymentPatternsOutput, AWSError>;
  /**
   * Lists the workloads.
   */
  listWorkloads(params: LaunchWizard.Types.ListWorkloadsInput, callback?: (err: AWSError, data: LaunchWizard.Types.ListWorkloadsOutput) => void): Request<LaunchWizard.Types.ListWorkloadsOutput, AWSError>;
  /**
   * Lists the workloads.
   */
  listWorkloads(callback?: (err: AWSError, data: LaunchWizard.Types.ListWorkloadsOutput) => void): Request<LaunchWizard.Types.ListWorkloadsOutput, AWSError>;
}
declare namespace LaunchWizard {
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
     * The settings specified for the deployment. For more information on the specifications required for creating a deployment, see Workload specifications.
     */
    specifications: DeploymentSpecifications;
    /**
     * The name of the workload. You can use the  ListWorkloadDeploymentPatterns  operation to discover supported values for this parameter.
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
     * The specifications of the deployment. For more information on specifications for each deployment, see Workload specifications.
     */
    specifications?: DeploymentSpecifications;
    /**
     * The status of the deployment.
     */
    status?: DeploymentStatus;
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
     * Filters to scope the results. The following filters are supported:    WORKLOAD_NAME     DEPLOYMENT_STATUS   
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
  export type String = string;
  export type Timestamp = Date;
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
