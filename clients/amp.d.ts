import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {WaiterConfiguration} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class Amp extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Amp.Types.ClientConfiguration)
  config: Config & Amp.Types.ClientConfiguration;
  /**
   * The CreateAlertManagerDefinition operation creates the alert manager definition in a workspace. If a workspace already has an alert manager definition, don't use this operation to update it. Instead, use PutAlertManagerDefinition.
   */
  createAlertManagerDefinition(params: Amp.Types.CreateAlertManagerDefinitionRequest, callback?: (err: AWSError, data: Amp.Types.CreateAlertManagerDefinitionResponse) => void): Request<Amp.Types.CreateAlertManagerDefinitionResponse, AWSError>;
  /**
   * The CreateAlertManagerDefinition operation creates the alert manager definition in a workspace. If a workspace already has an alert manager definition, don't use this operation to update it. Instead, use PutAlertManagerDefinition.
   */
  createAlertManagerDefinition(callback?: (err: AWSError, data: Amp.Types.CreateAlertManagerDefinitionResponse) => void): Request<Amp.Types.CreateAlertManagerDefinitionResponse, AWSError>;
  /**
   * The CreateLoggingConfiguration operation creates a logging configuration for the workspace. Use this operation to set the CloudWatch log group to which the logs will be published to.
   */
  createLoggingConfiguration(params: Amp.Types.CreateLoggingConfigurationRequest, callback?: (err: AWSError, data: Amp.Types.CreateLoggingConfigurationResponse) => void): Request<Amp.Types.CreateLoggingConfigurationResponse, AWSError>;
  /**
   * The CreateLoggingConfiguration operation creates a logging configuration for the workspace. Use this operation to set the CloudWatch log group to which the logs will be published to.
   */
  createLoggingConfiguration(callback?: (err: AWSError, data: Amp.Types.CreateLoggingConfigurationResponse) => void): Request<Amp.Types.CreateLoggingConfigurationResponse, AWSError>;
  /**
   * The CreateRuleGroupsNamespace operation creates a rule groups namespace within a workspace. A rule groups namespace is associated with exactly one rules file. A workspace can have multiple rule groups namespaces. Use this operation only to create new rule groups namespaces. To update an existing rule groups namespace, use PutRuleGroupsNamespace.
   */
  createRuleGroupsNamespace(params: Amp.Types.CreateRuleGroupsNamespaceRequest, callback?: (err: AWSError, data: Amp.Types.CreateRuleGroupsNamespaceResponse) => void): Request<Amp.Types.CreateRuleGroupsNamespaceResponse, AWSError>;
  /**
   * The CreateRuleGroupsNamespace operation creates a rule groups namespace within a workspace. A rule groups namespace is associated with exactly one rules file. A workspace can have multiple rule groups namespaces. Use this operation only to create new rule groups namespaces. To update an existing rule groups namespace, use PutRuleGroupsNamespace.
   */
  createRuleGroupsNamespace(callback?: (err: AWSError, data: Amp.Types.CreateRuleGroupsNamespaceResponse) => void): Request<Amp.Types.CreateRuleGroupsNamespaceResponse, AWSError>;
  /**
   * The CreateScraper operation creates a scraper to collect metrics. A scraper pulls metrics from Prometheus-compatible sources within an Amazon EKS cluster, and sends them to your Amazon Managed Service for Prometheus workspace. You can configure the scraper to control what metrics are collected, and what transformations are applied prior to sending them to your workspace. If needed, an IAM role will be created for you that gives Amazon Managed Service for Prometheus access to the metrics in your cluster. For more information, see Using roles for scraping metrics from EKS in the Amazon Managed Service for Prometheus User Guide. You cannot update a scraper. If you want to change the configuration of the scraper, create a new scraper and delete the old one. The scrapeConfiguration parameter contains the base64-encoded version of the YAML configuration file.  For more information about collectors, including what metrics are collected, and how to configure the scraper, see Amazon Web Services managed collectors in the Amazon Managed Service for Prometheus User Guide. 
   */
  createScraper(params: Amp.Types.CreateScraperRequest, callback?: (err: AWSError, data: Amp.Types.CreateScraperResponse) => void): Request<Amp.Types.CreateScraperResponse, AWSError>;
  /**
   * The CreateScraper operation creates a scraper to collect metrics. A scraper pulls metrics from Prometheus-compatible sources within an Amazon EKS cluster, and sends them to your Amazon Managed Service for Prometheus workspace. You can configure the scraper to control what metrics are collected, and what transformations are applied prior to sending them to your workspace. If needed, an IAM role will be created for you that gives Amazon Managed Service for Prometheus access to the metrics in your cluster. For more information, see Using roles for scraping metrics from EKS in the Amazon Managed Service for Prometheus User Guide. You cannot update a scraper. If you want to change the configuration of the scraper, create a new scraper and delete the old one. The scrapeConfiguration parameter contains the base64-encoded version of the YAML configuration file.  For more information about collectors, including what metrics are collected, and how to configure the scraper, see Amazon Web Services managed collectors in the Amazon Managed Service for Prometheus User Guide. 
   */
  createScraper(callback?: (err: AWSError, data: Amp.Types.CreateScraperResponse) => void): Request<Amp.Types.CreateScraperResponse, AWSError>;
  /**
   * Creates a Prometheus workspace. A workspace is a logical space dedicated to the storage and querying of Prometheus metrics. You can have one or more workspaces in each Region in your account.
   */
  createWorkspace(params: Amp.Types.CreateWorkspaceRequest, callback?: (err: AWSError, data: Amp.Types.CreateWorkspaceResponse) => void): Request<Amp.Types.CreateWorkspaceResponse, AWSError>;
  /**
   * Creates a Prometheus workspace. A workspace is a logical space dedicated to the storage and querying of Prometheus metrics. You can have one or more workspaces in each Region in your account.
   */
  createWorkspace(callback?: (err: AWSError, data: Amp.Types.CreateWorkspaceResponse) => void): Request<Amp.Types.CreateWorkspaceResponse, AWSError>;
  /**
   * Deletes the alert manager definition from a workspace.
   */
  deleteAlertManagerDefinition(params: Amp.Types.DeleteAlertManagerDefinitionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the alert manager definition from a workspace.
   */
  deleteAlertManagerDefinition(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the logging configuration for a workspace.
   */
  deleteLoggingConfiguration(params: Amp.Types.DeleteLoggingConfigurationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the logging configuration for a workspace.
   */
  deleteLoggingConfiguration(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes one rule groups namespace and its associated rule groups definition.
   */
  deleteRuleGroupsNamespace(params: Amp.Types.DeleteRuleGroupsNamespaceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes one rule groups namespace and its associated rule groups definition.
   */
  deleteRuleGroupsNamespace(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * The DeleteScraper operation deletes one scraper, and stops any metrics collection that the scraper performs.
   */
  deleteScraper(params: Amp.Types.DeleteScraperRequest, callback?: (err: AWSError, data: Amp.Types.DeleteScraperResponse) => void): Request<Amp.Types.DeleteScraperResponse, AWSError>;
  /**
   * The DeleteScraper operation deletes one scraper, and stops any metrics collection that the scraper performs.
   */
  deleteScraper(callback?: (err: AWSError, data: Amp.Types.DeleteScraperResponse) => void): Request<Amp.Types.DeleteScraperResponse, AWSError>;
  /**
   * Deletes an existing workspace.   When you delete a workspace, the data that has been ingested into it is not immediately deleted. It will be permanently deleted within one month. 
   */
  deleteWorkspace(params: Amp.Types.DeleteWorkspaceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an existing workspace.   When you delete a workspace, the data that has been ingested into it is not immediately deleted. It will be permanently deleted within one month. 
   */
  deleteWorkspace(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Retrieves the full information about the alert manager definition for a workspace.
   */
  describeAlertManagerDefinition(params: Amp.Types.DescribeAlertManagerDefinitionRequest, callback?: (err: AWSError, data: Amp.Types.DescribeAlertManagerDefinitionResponse) => void): Request<Amp.Types.DescribeAlertManagerDefinitionResponse, AWSError>;
  /**
   * Retrieves the full information about the alert manager definition for a workspace.
   */
  describeAlertManagerDefinition(callback?: (err: AWSError, data: Amp.Types.DescribeAlertManagerDefinitionResponse) => void): Request<Amp.Types.DescribeAlertManagerDefinitionResponse, AWSError>;
  /**
   * Returns complete information about the current logging configuration of the workspace.
   */
  describeLoggingConfiguration(params: Amp.Types.DescribeLoggingConfigurationRequest, callback?: (err: AWSError, data: Amp.Types.DescribeLoggingConfigurationResponse) => void): Request<Amp.Types.DescribeLoggingConfigurationResponse, AWSError>;
  /**
   * Returns complete information about the current logging configuration of the workspace.
   */
  describeLoggingConfiguration(callback?: (err: AWSError, data: Amp.Types.DescribeLoggingConfigurationResponse) => void): Request<Amp.Types.DescribeLoggingConfigurationResponse, AWSError>;
  /**
   * Returns complete information about one rule groups namespace. To retrieve a list of rule groups namespaces, use ListRuleGroupsNamespaces.
   */
  describeRuleGroupsNamespace(params: Amp.Types.DescribeRuleGroupsNamespaceRequest, callback?: (err: AWSError, data: Amp.Types.DescribeRuleGroupsNamespaceResponse) => void): Request<Amp.Types.DescribeRuleGroupsNamespaceResponse, AWSError>;
  /**
   * Returns complete information about one rule groups namespace. To retrieve a list of rule groups namespaces, use ListRuleGroupsNamespaces.
   */
  describeRuleGroupsNamespace(callback?: (err: AWSError, data: Amp.Types.DescribeRuleGroupsNamespaceResponse) => void): Request<Amp.Types.DescribeRuleGroupsNamespaceResponse, AWSError>;
  /**
   * The DescribeScraper operation displays information about an existing scraper.
   */
  describeScraper(params: Amp.Types.DescribeScraperRequest, callback?: (err: AWSError, data: Amp.Types.DescribeScraperResponse) => void): Request<Amp.Types.DescribeScraperResponse, AWSError>;
  /**
   * The DescribeScraper operation displays information about an existing scraper.
   */
  describeScraper(callback?: (err: AWSError, data: Amp.Types.DescribeScraperResponse) => void): Request<Amp.Types.DescribeScraperResponse, AWSError>;
  /**
   * Returns information about an existing workspace. 
   */
  describeWorkspace(params: Amp.Types.DescribeWorkspaceRequest, callback?: (err: AWSError, data: Amp.Types.DescribeWorkspaceResponse) => void): Request<Amp.Types.DescribeWorkspaceResponse, AWSError>;
  /**
   * Returns information about an existing workspace. 
   */
  describeWorkspace(callback?: (err: AWSError, data: Amp.Types.DescribeWorkspaceResponse) => void): Request<Amp.Types.DescribeWorkspaceResponse, AWSError>;
  /**
   * The GetDefaultScraperConfiguration operation returns the default scraper configuration used when Amazon EKS creates a scraper for you.
   */
  getDefaultScraperConfiguration(params: Amp.Types.GetDefaultScraperConfigurationRequest, callback?: (err: AWSError, data: Amp.Types.GetDefaultScraperConfigurationResponse) => void): Request<Amp.Types.GetDefaultScraperConfigurationResponse, AWSError>;
  /**
   * The GetDefaultScraperConfiguration operation returns the default scraper configuration used when Amazon EKS creates a scraper for you.
   */
  getDefaultScraperConfiguration(callback?: (err: AWSError, data: Amp.Types.GetDefaultScraperConfigurationResponse) => void): Request<Amp.Types.GetDefaultScraperConfigurationResponse, AWSError>;
  /**
   * Returns a list of rule groups namespaces in a workspace.
   */
  listRuleGroupsNamespaces(params: Amp.Types.ListRuleGroupsNamespacesRequest, callback?: (err: AWSError, data: Amp.Types.ListRuleGroupsNamespacesResponse) => void): Request<Amp.Types.ListRuleGroupsNamespacesResponse, AWSError>;
  /**
   * Returns a list of rule groups namespaces in a workspace.
   */
  listRuleGroupsNamespaces(callback?: (err: AWSError, data: Amp.Types.ListRuleGroupsNamespacesResponse) => void): Request<Amp.Types.ListRuleGroupsNamespacesResponse, AWSError>;
  /**
   * The ListScrapers operation lists all of the scrapers in your account. This includes scrapers being created or deleted. You can optionally filter the returned list.
   */
  listScrapers(params: Amp.Types.ListScrapersRequest, callback?: (err: AWSError, data: Amp.Types.ListScrapersResponse) => void): Request<Amp.Types.ListScrapersResponse, AWSError>;
  /**
   * The ListScrapers operation lists all of the scrapers in your account. This includes scrapers being created or deleted. You can optionally filter the returned list.
   */
  listScrapers(callback?: (err: AWSError, data: Amp.Types.ListScrapersResponse) => void): Request<Amp.Types.ListScrapersResponse, AWSError>;
  /**
   * The ListTagsForResource operation returns the tags that are associated with an Amazon Managed Service for Prometheus resource. Currently, the only resources that can be tagged are workspaces and rule groups namespaces. 
   */
  listTagsForResource(params: Amp.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: Amp.Types.ListTagsForResourceResponse) => void): Request<Amp.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * The ListTagsForResource operation returns the tags that are associated with an Amazon Managed Service for Prometheus resource. Currently, the only resources that can be tagged are workspaces and rule groups namespaces. 
   */
  listTagsForResource(callback?: (err: AWSError, data: Amp.Types.ListTagsForResourceResponse) => void): Request<Amp.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists all of the Amazon Managed Service for Prometheus workspaces in your account. This includes workspaces being created or deleted. 
   */
  listWorkspaces(params: Amp.Types.ListWorkspacesRequest, callback?: (err: AWSError, data: Amp.Types.ListWorkspacesResponse) => void): Request<Amp.Types.ListWorkspacesResponse, AWSError>;
  /**
   * Lists all of the Amazon Managed Service for Prometheus workspaces in your account. This includes workspaces being created or deleted. 
   */
  listWorkspaces(callback?: (err: AWSError, data: Amp.Types.ListWorkspacesResponse) => void): Request<Amp.Types.ListWorkspacesResponse, AWSError>;
  /**
   * Updates an existing alert manager definition in a workspace. If the workspace does not already have an alert manager definition, don't use this operation to create it. Instead, use CreateAlertManagerDefinition.
   */
  putAlertManagerDefinition(params: Amp.Types.PutAlertManagerDefinitionRequest, callback?: (err: AWSError, data: Amp.Types.PutAlertManagerDefinitionResponse) => void): Request<Amp.Types.PutAlertManagerDefinitionResponse, AWSError>;
  /**
   * Updates an existing alert manager definition in a workspace. If the workspace does not already have an alert manager definition, don't use this operation to create it. Instead, use CreateAlertManagerDefinition.
   */
  putAlertManagerDefinition(callback?: (err: AWSError, data: Amp.Types.PutAlertManagerDefinitionResponse) => void): Request<Amp.Types.PutAlertManagerDefinitionResponse, AWSError>;
  /**
   * Updates an existing rule groups namespace within a workspace. A rule groups namespace is associated with exactly one rules file. A workspace can have multiple rule groups namespaces. Use this operation only to update existing rule groups namespaces. To create a new rule groups namespace, use CreateRuleGroupsNamespace. You can't use this operation to add tags to an existing rule groups namespace. Instead, use TagResource.
   */
  putRuleGroupsNamespace(params: Amp.Types.PutRuleGroupsNamespaceRequest, callback?: (err: AWSError, data: Amp.Types.PutRuleGroupsNamespaceResponse) => void): Request<Amp.Types.PutRuleGroupsNamespaceResponse, AWSError>;
  /**
   * Updates an existing rule groups namespace within a workspace. A rule groups namespace is associated with exactly one rules file. A workspace can have multiple rule groups namespaces. Use this operation only to update existing rule groups namespaces. To create a new rule groups namespace, use CreateRuleGroupsNamespace. You can't use this operation to add tags to an existing rule groups namespace. Instead, use TagResource.
   */
  putRuleGroupsNamespace(callback?: (err: AWSError, data: Amp.Types.PutRuleGroupsNamespaceResponse) => void): Request<Amp.Types.PutRuleGroupsNamespaceResponse, AWSError>;
  /**
   * The TagResource operation associates tags with an Amazon Managed Service for Prometheus resource. The only resources that can be tagged are workspaces and rule groups namespaces.  If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.
   */
  tagResource(params: Amp.Types.TagResourceRequest, callback?: (err: AWSError, data: Amp.Types.TagResourceResponse) => void): Request<Amp.Types.TagResourceResponse, AWSError>;
  /**
   * The TagResource operation associates tags with an Amazon Managed Service for Prometheus resource. The only resources that can be tagged are workspaces and rule groups namespaces.  If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.
   */
  tagResource(callback?: (err: AWSError, data: Amp.Types.TagResourceResponse) => void): Request<Amp.Types.TagResourceResponse, AWSError>;
  /**
   * Removes the specified tags from an Amazon Managed Service for Prometheus resource. The only resources that can be tagged are workspaces and rule groups namespaces. 
   */
  untagResource(params: Amp.Types.UntagResourceRequest, callback?: (err: AWSError, data: Amp.Types.UntagResourceResponse) => void): Request<Amp.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes the specified tags from an Amazon Managed Service for Prometheus resource. The only resources that can be tagged are workspaces and rule groups namespaces. 
   */
  untagResource(callback?: (err: AWSError, data: Amp.Types.UntagResourceResponse) => void): Request<Amp.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates the log group ARN or the workspace ID of the current logging configuration.
   */
  updateLoggingConfiguration(params: Amp.Types.UpdateLoggingConfigurationRequest, callback?: (err: AWSError, data: Amp.Types.UpdateLoggingConfigurationResponse) => void): Request<Amp.Types.UpdateLoggingConfigurationResponse, AWSError>;
  /**
   * Updates the log group ARN or the workspace ID of the current logging configuration.
   */
  updateLoggingConfiguration(callback?: (err: AWSError, data: Amp.Types.UpdateLoggingConfigurationResponse) => void): Request<Amp.Types.UpdateLoggingConfigurationResponse, AWSError>;
  /**
   * Updates the alias of an existing workspace. 
   */
  updateWorkspaceAlias(params: Amp.Types.UpdateWorkspaceAliasRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the alias of an existing workspace. 
   */
  updateWorkspaceAlias(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Waits for the scraperActive state by periodically calling the underlying Amp.describeScraperoperation every 2 seconds (at most 60 times). Wait until a scraper reaches ACTIVE status
   */
  waitFor(state: "scraperActive", params: Amp.Types.DescribeScraperRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: Amp.Types.DescribeScraperResponse) => void): Request<Amp.Types.DescribeScraperResponse, AWSError>;
  /**
   * Waits for the scraperActive state by periodically calling the underlying Amp.describeScraperoperation every 2 seconds (at most 60 times). Wait until a scraper reaches ACTIVE status
   */
  waitFor(state: "scraperActive", callback?: (err: AWSError, data: Amp.Types.DescribeScraperResponse) => void): Request<Amp.Types.DescribeScraperResponse, AWSError>;
  /**
   * Waits for the scraperDeleted state by periodically calling the underlying Amp.describeScraperoperation every 2 seconds (at most 60 times). Wait until a scraper reaches DELETED status
   */
  waitFor(state: "scraperDeleted", params: Amp.Types.DescribeScraperRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: Amp.Types.DescribeScraperResponse) => void): Request<Amp.Types.DescribeScraperResponse, AWSError>;
  /**
   * Waits for the scraperDeleted state by periodically calling the underlying Amp.describeScraperoperation every 2 seconds (at most 60 times). Wait until a scraper reaches DELETED status
   */
  waitFor(state: "scraperDeleted", callback?: (err: AWSError, data: Amp.Types.DescribeScraperResponse) => void): Request<Amp.Types.DescribeScraperResponse, AWSError>;
  /**
   * Waits for the workspaceActive state by periodically calling the underlying Amp.describeWorkspaceoperation every 2 seconds (at most 60 times). Wait until a workspace reaches ACTIVE status
   */
  waitFor(state: "workspaceActive", params: Amp.Types.DescribeWorkspaceRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: Amp.Types.DescribeWorkspaceResponse) => void): Request<Amp.Types.DescribeWorkspaceResponse, AWSError>;
  /**
   * Waits for the workspaceActive state by periodically calling the underlying Amp.describeWorkspaceoperation every 2 seconds (at most 60 times). Wait until a workspace reaches ACTIVE status
   */
  waitFor(state: "workspaceActive", callback?: (err: AWSError, data: Amp.Types.DescribeWorkspaceResponse) => void): Request<Amp.Types.DescribeWorkspaceResponse, AWSError>;
  /**
   * Waits for the workspaceDeleted state by periodically calling the underlying Amp.describeWorkspaceoperation every 2 seconds (at most 60 times). Wait until a workspace reaches DELETED status
   */
  waitFor(state: "workspaceDeleted", params: Amp.Types.DescribeWorkspaceRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: Amp.Types.DescribeWorkspaceResponse) => void): Request<Amp.Types.DescribeWorkspaceResponse, AWSError>;
  /**
   * Waits for the workspaceDeleted state by periodically calling the underlying Amp.describeWorkspaceoperation every 2 seconds (at most 60 times). Wait until a workspace reaches DELETED status
   */
  waitFor(state: "workspaceDeleted", callback?: (err: AWSError, data: Amp.Types.DescribeWorkspaceResponse) => void): Request<Amp.Types.DescribeWorkspaceResponse, AWSError>;
}
declare namespace Amp {
  export type AlertManagerDefinitionData = Buffer|Uint8Array|Blob|string;
  export interface AlertManagerDefinitionDescription {
    /**
     * The date and time that the alert manager definition was created.
     */
    createdAt: Timestamp;
    /**
     * The actual alert manager definition. For details about the alert manager definition, see AlertManagedDefinitionData.
     */
    data: AlertManagerDefinitionData;
    /**
     * The date and time that the alert manager definition was most recently changed.
     */
    modifiedAt: Timestamp;
    /**
     * A structure that displays the current status of the alert manager definition..
     */
    status: AlertManagerDefinitionStatus;
  }
  export interface AlertManagerDefinitionStatus {
    /**
     * The current status of the alert manager. 
     */
    statusCode: AlertManagerDefinitionStatusCode;
    /**
     * If there is a failure, the reason for the failure.
     */
    statusReason?: String;
  }
  export type AlertManagerDefinitionStatusCode = "CREATING"|"ACTIVE"|"UPDATING"|"DELETING"|"CREATION_FAILED"|"UPDATE_FAILED"|string;
  export interface AmpConfiguration {
    /**
     * ARN of the Amazon Managed Service for Prometheus workspace.
     */
    workspaceArn: WorkspaceArn;
  }
  export type _Blob = Buffer|Uint8Array|Blob|string;
  export type ClusterArn = string;
  export interface CreateAlertManagerDefinitionRequest {
    /**
     * A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive.
     */
    clientToken?: IdempotencyToken;
    /**
     * The alert manager definition to add. A base64-encoded version of the YAML alert manager definition file. For details about the alert manager definition, see AlertManagedDefinitionData.
     */
    data: AlertManagerDefinitionData;
    /**
     * The ID of the workspace to add the alert manager definition to.
     */
    workspaceId: WorkspaceId;
  }
  export interface CreateAlertManagerDefinitionResponse {
    /**
     * A structure that displays the current status of the alert manager definition.
     */
    status: AlertManagerDefinitionStatus;
  }
  export interface CreateLoggingConfigurationRequest {
    /**
     * A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive.
     */
    clientToken?: IdempotencyToken;
    /**
     * The ARN of the CloudWatch log group to which the vended log data will be published. This log group must exist prior to calling this API.
     */
    logGroupArn: LogGroupArn;
    /**
     * The ID of the workspace to create the logging configuration for.
     */
    workspaceId: WorkspaceId;
  }
  export interface CreateLoggingConfigurationResponse {
    /**
     * A structure that displays the current status of the logging configuration.
     */
    status: LoggingConfigurationStatus;
  }
  export interface CreateRuleGroupsNamespaceRequest {
    /**
     * A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive.
     */
    clientToken?: IdempotencyToken;
    /**
     * The rules file to use in the new namespace. Contains the base64-encoded version of the YAML rules file. For details about the rule groups namespace structure, see RuleGroupsNamespaceData.
     */
    data: RuleGroupsNamespaceData;
    /**
     * The name for the new rule groups namespace.
     */
    name: RuleGroupsNamespaceName;
    /**
     * The list of tag keys and values to associate with the rule groups namespace.
     */
    tags?: TagMap;
    /**
     * The ID of the workspace to add the rule groups namespace.
     */
    workspaceId: WorkspaceId;
  }
  export interface CreateRuleGroupsNamespaceResponse {
    /**
     * The Amazon Resource Name (ARN) of the new rule groups namespace.
     */
    arn: RuleGroupsNamespaceArn;
    /**
     * The name of the new rule groups namespace.
     */
    name: RuleGroupsNamespaceName;
    /**
     * A structure that returns the current status of the rule groups namespace.
     */
    status: RuleGroupsNamespaceStatus;
    /**
     * The list of tag keys and values that are associated with the namespace.
     */
    tags?: TagMap;
  }
  export interface CreateScraperRequest {
    /**
     * (optional) a name to associate with the scraper. This is for your use, and does not need to be unique.
     */
    alias?: ScraperAlias;
    /**
     * (Optional) A unique, case-sensitive identifier that you can provide to ensure the idempotency of the request.
     */
    clientToken?: IdempotencyToken;
    /**
     * The Amazon Managed Service for Prometheus workspace to send metrics to.
     */
    destination: Destination;
    /**
     * The configuration file to use in the new scraper. For more information, see Scraper configuration in the Amazon Managed Service for Prometheus User Guide.
     */
    scrapeConfiguration: ScrapeConfiguration;
    /**
     * The Amazon EKS cluster from which the scraper will collect metrics.
     */
    source: Source;
    /**
     * (Optional) The list of tag keys and values to associate with the scraper.
     */
    tags?: TagMap;
  }
  export interface CreateScraperResponse {
    /**
     * The Amazon Resource Name (ARN) of the new scraper.
     */
    arn: ScraperArn;
    /**
     * The ID of the new scraper.
     */
    scraperId: ScraperId;
    /**
     * A structure that displays the current status of the scraper.
     */
    status: ScraperStatus;
    /**
     * The list of tag keys and values that are associated with the scraper.
     */
    tags?: TagMap;
  }
  export interface CreateWorkspaceRequest {
    /**
     * An alias that you assign to this workspace to help you identify it. It does not need to be unique. Blank spaces at the beginning or end of the alias that you specify will be trimmed from the value used.
     */
    alias?: WorkspaceAlias;
    /**
     * A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive.
     */
    clientToken?: IdempotencyToken;
    /**
     * (optional) The ARN for a customer managed KMS key to use for encrypting data within your workspace. For more information about using your own key in your workspace, see Encryption at rest in the Amazon Managed Service for Prometheus User Guide.
     */
    kmsKeyArn?: KmsKeyArn;
    /**
     * The list of tag keys and values to associate with the workspace.
     */
    tags?: TagMap;
  }
  export interface CreateWorkspaceResponse {
    /**
     * The ARN for the new workspace.
     */
    arn: WorkspaceArn;
    /**
     * (optional) If the workspace was created with a customer managed KMS key, the ARN for the key used.
     */
    kmsKeyArn?: KmsKeyArn;
    /**
     * The current status of the new workspace. Immediately after you create the workspace, the status is usually CREATING.
     */
    status: WorkspaceStatus;
    /**
     * The list of tag keys and values that are associated with the workspace.
     */
    tags?: TagMap;
    /**
     * The unique ID for the new workspace.
     */
    workspaceId: WorkspaceId;
  }
  export interface DeleteAlertManagerDefinitionRequest {
    /**
     * A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive.
     */
    clientToken?: IdempotencyToken;
    /**
     * The ID of the workspace to delete the alert manager definition from.
     */
    workspaceId: WorkspaceId;
  }
  export interface DeleteLoggingConfigurationRequest {
    /**
     * A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive.
     */
    clientToken?: IdempotencyToken;
    /**
     * The ID of the workspace containing the logging configuration to delete.
     */
    workspaceId: WorkspaceId;
  }
  export interface DeleteRuleGroupsNamespaceRequest {
    /**
     * A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive.
     */
    clientToken?: IdempotencyToken;
    /**
     * The name of the rule groups namespace to delete.
     */
    name: RuleGroupsNamespaceName;
    /**
     * The ID of the workspace containing the rule groups namespace and definition to delete.
     */
    workspaceId: WorkspaceId;
  }
  export interface DeleteScraperRequest {
    /**
     * (Optional) A unique, case-sensitive identifier that you can provide to ensure the idempotency of the request.
     */
    clientToken?: IdempotencyToken;
    /**
     * The ID of the scraper to delete.
     */
    scraperId: ScraperId;
  }
  export interface DeleteScraperResponse {
    /**
     * The ID of the scraper to delete.
     */
    scraperId: ScraperId;
    /**
     * The current status of the scraper.
     */
    status: ScraperStatus;
  }
  export interface DeleteWorkspaceRequest {
    /**
     * A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive.
     */
    clientToken?: IdempotencyToken;
    /**
     * The ID of the workspace to delete.
     */
    workspaceId: WorkspaceId;
  }
  export interface DescribeAlertManagerDefinitionRequest {
    /**
     * The ID of the workspace to retrieve the alert manager definition from.
     */
    workspaceId: WorkspaceId;
  }
  export interface DescribeAlertManagerDefinitionResponse {
    /**
     * The alert manager definition.
     */
    alertManagerDefinition: AlertManagerDefinitionDescription;
  }
  export interface DescribeLoggingConfigurationRequest {
    /**
     * The ID of the workspace to describe the logging configuration for.
     */
    workspaceId: WorkspaceId;
  }
  export interface DescribeLoggingConfigurationResponse {
    /**
     * A structure that displays the information about the logging configuration.
     */
    loggingConfiguration: LoggingConfigurationMetadata;
  }
  export interface DescribeRuleGroupsNamespaceRequest {
    /**
     * The name of the rule groups namespace that you want information for.
     */
    name: RuleGroupsNamespaceName;
    /**
     * The ID of the workspace containing the rule groups namespace.
     */
    workspaceId: WorkspaceId;
  }
  export interface DescribeRuleGroupsNamespaceResponse {
    /**
     * The information about the rule groups namespace.
     */
    ruleGroupsNamespace: RuleGroupsNamespaceDescription;
  }
  export interface DescribeScraperRequest {
    /**
     * The ID of the scraper to describe.
     */
    scraperId: ScraperId;
  }
  export interface DescribeScraperResponse {
    /**
     * Contains details about the scraper.
     */
    scraper: ScraperDescription;
  }
  export interface DescribeWorkspaceRequest {
    /**
     * The ID of the workspace to describe.
     */
    workspaceId: WorkspaceId;
  }
  export interface DescribeWorkspaceResponse {
    /**
     * A structure that contains details about the workspace.
     */
    workspace: WorkspaceDescription;
  }
  export interface Destination {
    /**
     * The Amazon Managed Service for Prometheusworkspace to send metrics to.
     */
    ampConfiguration?: AmpConfiguration;
  }
  export interface EksConfiguration {
    /**
     * ARN of the Amazon EKS cluster.
     */
    clusterArn: ClusterArn;
    /**
     * A list of the security group IDs for the Amazon EKS cluster VPC configuration.
     */
    securityGroupIds?: SecurityGroupIds;
    /**
     * A list of subnet IDs for the Amazon EKS cluster VPC configuration.
     */
    subnetIds: SubnetIds;
  }
  export type FilterKey = string;
  export type FilterValue = string;
  export type FilterValues = FilterValue[];
  export interface GetDefaultScraperConfigurationRequest {
  }
  export interface GetDefaultScraperConfigurationResponse {
    /**
     * The configuration file. Base 64 encoded. For more information, see Scraper configurationin the Amazon Managed Service for Prometheus User Guide.
     */
    configuration: _Blob;
  }
  export type IamRoleArn = string;
  export type IdempotencyToken = string;
  export type KmsKeyArn = string;
  export interface ListRuleGroupsNamespacesRequest {
    /**
     * The maximum number of results to return. The default is 100.
     */
    maxResults?: ListRuleGroupsNamespacesRequestMaxResultsInteger;
    /**
     * Use this parameter to filter the rule groups namespaces that are returned. Only the namespaces with names that begin with the value that you specify are returned.
     */
    name?: RuleGroupsNamespaceName;
    /**
     * The token for the next set of items to return. You receive this token from a previous call, and use it to get the next page of results. The other parameters must be the same as the initial call. For example, if your initial request has maxResults of 10, and there are 12 rule groups namespaces to return, then your initial request will return 10 and a nextToken. Using the next token in a subsequent call will return the remaining 2 namespaces.
     */
    nextToken?: PaginationToken;
    /**
     * The ID of the workspace containing the rule groups namespaces.
     */
    workspaceId: WorkspaceId;
  }
  export type ListRuleGroupsNamespacesRequestMaxResultsInteger = number;
  export interface ListRuleGroupsNamespacesResponse {
    /**
     * A token indicating that there are more results to retrieve. You can use this token as part of your next ListRuleGroupsNamespaces request to retrieve those results.
     */
    nextToken?: PaginationToken;
    /**
     * The returned list of rule groups namespaces.
     */
    ruleGroupsNamespaces: RuleGroupsNamespaceSummaryList;
  }
  export interface ListScrapersRequest {
    /**
     * (Optional) A list of key-value pairs to filter the list of scrapers returned. Keys include status, sourceArn, destinationArn, and alias. Filters on the same key are OR'd together, and filters on different keys are AND'd together. For example, status=ACTIVE&amp;status=CREATING&amp;alias=Test, will return all scrapers that have the alias Test, and are either in status ACTIVE or CREATING. To find all active scrapers that are sending metrics to a specific Amazon Managed Service for Prometheus workspace, you would use the ARN of the workspace in a query:  status=ACTIVE&amp;destinationArn=arn:aws:aps:us-east-1:123456789012:workspace/ws-example1-1234-abcd-56ef-123456789012  If this is included, it filters the results to only the scrapers that match the filter.
     */
    filters?: ScraperFilters;
    /**
     * Optional) The maximum number of scrapers to return in one ListScrapers operation. The range is 1-1000. If you omit this parameter, the default of 100 is used.
     */
    maxResults?: ListScrapersRequestMaxResultsInteger;
    /**
     * (Optional) The token for the next set of items to return. (You received this token from a previous call.)
     */
    nextToken?: PaginationToken;
  }
  export type ListScrapersRequestMaxResultsInteger = number;
  export interface ListScrapersResponse {
    /**
     * A token indicating that there are more results to retrieve. You can use this token as part of your next ListScrapers operation to retrieve those results.
     */
    nextToken?: PaginationToken;
    /**
     * A list of ScraperSummary structures giving information about scrapers in the account that match the filters provided.
     */
    scrapers: ScraperSummaryList;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The ARN of the resource to list tages for. Must be a workspace or rule groups namespace resource.
     */
    resourceArn: String;
  }
  export interface ListTagsForResourceResponse {
    /**
     * The list of tag keys and values associated with the resource.
     */
    tags?: TagMap;
  }
  export interface ListWorkspacesRequest {
    /**
     * If this is included, it filters the results to only the workspaces with names that start with the value that you specify here. Amazon Managed Service for Prometheus will automatically strip any blank spaces from the beginning and end of the alias that you specify.
     */
    alias?: WorkspaceAlias;
    /**
     * The maximum number of workspaces to return per request. The default is 100.
     */
    maxResults?: ListWorkspacesRequestMaxResultsInteger;
    /**
     * The token for the next set of items to return. You receive this token from a previous call, and use it to get the next page of results. The other parameters must be the same as the initial call. For example, if your initial request has maxResults of 10, and there are 12 workspaces to return, then your initial request will return 10 and a nextToken. Using the next token in a subsequent call will return the remaining 2 workspaces.
     */
    nextToken?: PaginationToken;
  }
  export type ListWorkspacesRequestMaxResultsInteger = number;
  export interface ListWorkspacesResponse {
    /**
     * A token indicating that there are more results to retrieve. You can use this token as part of your next ListWorkspaces request to retrieve those results.
     */
    nextToken?: PaginationToken;
    /**
     * An array of WorkspaceSummary structures containing information about the workspaces requested.
     */
    workspaces: WorkspaceSummaryList;
  }
  export type LogGroupArn = string;
  export interface LoggingConfigurationMetadata {
    /**
     * The date and time that the logging configuration was created.
     */
    createdAt: Timestamp;
    /**
     * The ARN of the CloudWatch log group to which the vended log data will be published.
     */
    logGroupArn: LogGroupArn;
    /**
     * The date and time that the logging configuration was most recently changed.
     */
    modifiedAt: Timestamp;
    /**
     * The current status of the logging configuration.
     */
    status: LoggingConfigurationStatus;
    /**
     * The ID of the workspace the logging configuration is for.
     */
    workspace: WorkspaceId;
  }
  export interface LoggingConfigurationStatus {
    /**
     * The current status of the logging configuration.
     */
    statusCode: LoggingConfigurationStatusCode;
    /**
     * If failed, the reason for the failure.
     */
    statusReason?: String;
  }
  export type LoggingConfigurationStatusCode = "CREATING"|"ACTIVE"|"UPDATING"|"DELETING"|"CREATION_FAILED"|"UPDATE_FAILED"|string;
  export type PaginationToken = string;
  export interface PutAlertManagerDefinitionRequest {
    /**
     * A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive.
     */
    clientToken?: IdempotencyToken;
    /**
     * The alert manager definition to use. A base64-encoded version of the YAML alert manager definition file. For details about the alert manager definition, see AlertManagedDefinitionData.
     */
    data: AlertManagerDefinitionData;
    /**
     * The ID of the workspace to update the alert manager definition in.
     */
    workspaceId: WorkspaceId;
  }
  export interface PutAlertManagerDefinitionResponse {
    /**
     * A structure that returns the current status of the alert manager definition.
     */
    status: AlertManagerDefinitionStatus;
  }
  export interface PutRuleGroupsNamespaceRequest {
    /**
     * A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive.
     */
    clientToken?: IdempotencyToken;
    /**
     * The new rules file to use in the namespace. A base64-encoded version of the YAML rule groups file. For details about the rule groups namespace structure, see RuleGroupsNamespaceData.
     */
    data: RuleGroupsNamespaceData;
    /**
     * The name of the rule groups namespace that you are updating.
     */
    name: RuleGroupsNamespaceName;
    /**
     * The ID of the workspace where you are updating the rule groups namespace.
     */
    workspaceId: WorkspaceId;
  }
  export interface PutRuleGroupsNamespaceResponse {
    /**
     * The ARN of the rule groups namespace.
     */
    arn: RuleGroupsNamespaceArn;
    /**
     * The name of the rule groups namespace that was updated.
     */
    name: RuleGroupsNamespaceName;
    /**
     * A structure that includes the current status of the rule groups namespace.
     */
    status: RuleGroupsNamespaceStatus;
    /**
     * The list of tag keys and values that are associated with the namespace.
     */
    tags?: TagMap;
  }
  export type RuleGroupsNamespaceArn = string;
  export type RuleGroupsNamespaceData = Buffer|Uint8Array|Blob|string;
  export interface RuleGroupsNamespaceDescription {
    /**
     * The ARN of the rule groups namespace.
     */
    arn: RuleGroupsNamespaceArn;
    /**
     * The date and time that the rule groups namespace was created.
     */
    createdAt: Timestamp;
    /**
     * The rule groups file used in the namespace. For details about the rule groups namespace structure, see RuleGroupsNamespaceData.
     */
    data: RuleGroupsNamespaceData;
    /**
     * The date and time that the rule groups namespace was most recently changed.
     */
    modifiedAt: Timestamp;
    /**
     * The name of the rule groups namespace.
     */
    name: RuleGroupsNamespaceName;
    /**
     * The current status of the rule groups namespace.
     */
    status: RuleGroupsNamespaceStatus;
    /**
     * The list of tag keys and values that are associated with the rule groups namespace.
     */
    tags?: TagMap;
  }
  export type RuleGroupsNamespaceName = string;
  export interface RuleGroupsNamespaceStatus {
    /**
     * The current status of the namespace.
     */
    statusCode: RuleGroupsNamespaceStatusCode;
    /**
     * The reason for the failure, if any.
     */
    statusReason?: String;
  }
  export type RuleGroupsNamespaceStatusCode = "CREATING"|"ACTIVE"|"UPDATING"|"DELETING"|"CREATION_FAILED"|"UPDATE_FAILED"|string;
  export interface RuleGroupsNamespaceSummary {
    /**
     * The ARN of the rule groups namespace.
     */
    arn: RuleGroupsNamespaceArn;
    /**
     * The date and time that the rule groups namespace was created.
     */
    createdAt: Timestamp;
    /**
     * The date and time that the rule groups namespace was most recently changed.
     */
    modifiedAt: Timestamp;
    /**
     * The name of the rule groups namespace.
     */
    name: RuleGroupsNamespaceName;
    /**
     * A structure that displays the current status of the rule groups namespace.
     */
    status: RuleGroupsNamespaceStatus;
    /**
     * The list of tag keys and values that are associated with the rule groups namespace.
     */
    tags?: TagMap;
  }
  export type RuleGroupsNamespaceSummaryList = RuleGroupsNamespaceSummary[];
  export interface ScrapeConfiguration {
    /**
     * The base 64 encoded scrape configuration file.
     */
    configurationBlob?: _Blob;
  }
  export type ScraperAlias = string;
  export type ScraperArn = string;
  export interface ScraperDescription {
    /**
     * (Optional) A name associated with the scraper.
     */
    alias?: ScraperAlias;
    /**
     * The Amazon Resource Name (ARN) of the scraper.
     */
    arn: ScraperArn;
    /**
     * The date and time that the scraper was created.
     */
    createdAt: Timestamp;
    /**
     * The Amazon Managed Service for Prometheus workspace the scraper sends metrics to.
     */
    destination: Destination;
    /**
     * The date and time that the scraper was last modified.
     */
    lastModifiedAt: Timestamp;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that provides permissions for the scraper to discover and collect metrics on your behalf.
     */
    roleArn: IamRoleArn;
    /**
     * The configuration file in use by the scraper.
     */
    scrapeConfiguration: ScrapeConfiguration;
    /**
     * The ID of the scraper.
     */
    scraperId: ScraperId;
    /**
     * The Amazon EKS cluster from which the scraper collects metrics.
     */
    source: Source;
    /**
     * A structure that contains the current status of the scraper.
     */
    status: ScraperStatus;
    /**
     * If there is a failure, the reason for the failure.
     */
    statusReason?: StatusReason;
    /**
     * (Optional) The list of tag keys and values associated with the scraper.
     */
    tags?: TagMap;
  }
  export type ScraperFilters = {[key: string]: FilterValues};
  export type ScraperId = string;
  export interface ScraperStatus {
    /**
     * The current status of the scraper.
     */
    statusCode: ScraperStatusCode;
  }
  export type ScraperStatusCode = "CREATING"|"ACTIVE"|"DELETING"|"CREATION_FAILED"|"DELETION_FAILED"|string;
  export interface ScraperSummary {
    /**
     * (Optional) A name associated with the scraper.
     */
    alias?: ScraperAlias;
    /**
     * The Amazon Resource Name (ARN) of the scraper.
     */
    arn: ScraperArn;
    /**
     * The date and time that the scraper was created.
     */
    createdAt: Timestamp;
    /**
     * The Amazon Managed Service for Prometheus workspace the scraper sends metrics to.
     */
    destination: Destination;
    /**
     * The date and time that the scraper was last modified.
     */
    lastModifiedAt: Timestamp;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that provides permissions for the scraper to discover and collect metrics on your behalf.
     */
    roleArn: IamRoleArn;
    /**
     * The ID of the scraper.
     */
    scraperId: ScraperId;
    /**
     * The Amazon EKS cluster from which the scraper collects metrics.
     */
    source: Source;
    /**
     * A structure that contains the current status of the scraper.
     */
    status: ScraperStatus;
    /**
     * If there is a failure, the reason for the failure.
     */
    statusReason?: StatusReason;
    /**
     * (Optional) The list of tag keys and values associated with the scraper.
     */
    tags?: TagMap;
  }
  export type ScraperSummaryList = ScraperSummary[];
  export type SecurityGroupId = string;
  export type SecurityGroupIds = SecurityGroupId[];
  export interface Source {
    /**
     * The Amazon EKS cluster from which a scraper collects metrics.
     */
    eksConfiguration?: EksConfiguration;
  }
  export type StatusReason = string;
  export type String = string;
  export type SubnetId = string;
  export type SubnetIds = SubnetId[];
  export type TagKey = string;
  export type TagKeys = TagKey[];
  export type TagMap = {[key: string]: TagValue};
  export interface TagResourceRequest {
    /**
     * The ARN of the workspace or rule groups namespace to apply tags to.
     */
    resourceArn: String;
    /**
     * The list of tag keys and values to associate with the resource. Keys may not begin with aws:.
     */
    tags: TagMap;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type Timestamp = Date;
  export interface UntagResourceRequest {
    /**
     * The ARN of the workspace or rule groups namespace.
     */
    resourceArn: String;
    /**
     * The keys of the tags to remove.
     */
    tagKeys: TagKeys;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateLoggingConfigurationRequest {
    /**
     * A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive.
     */
    clientToken?: IdempotencyToken;
    /**
     * The ARN of the CloudWatch log group to which the vended log data will be published.
     */
    logGroupArn: LogGroupArn;
    /**
     * The ID of the workspace to update the logging configuration for.
     */
    workspaceId: WorkspaceId;
  }
  export interface UpdateLoggingConfigurationResponse {
    /**
     * A structure that contains the current status of the logging configuration.
     */
    status: LoggingConfigurationStatus;
  }
  export interface UpdateWorkspaceAliasRequest {
    /**
     * The new alias for the workspace. It does not need to be unique. Amazon Managed Service for Prometheus will automatically strip any blank spaces from the beginning and end of the alias that you specify.
     */
    alias?: WorkspaceAlias;
    /**
     * A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive.
     */
    clientToken?: IdempotencyToken;
    /**
     * The ID of the workspace to update.
     */
    workspaceId: WorkspaceId;
  }
  export type Uri = string;
  export type WorkspaceAlias = string;
  export type WorkspaceArn = string;
  export interface WorkspaceDescription {
    /**
     * The alias that is assigned to this workspace to help identify it. It may not be unique.
     */
    alias?: WorkspaceAlias;
    /**
     * The ARN of the workspace.
     */
    arn: WorkspaceArn;
    /**
     * The date and time that the workspace was created.
     */
    createdAt: Timestamp;
    /**
     * (optional) If the workspace was created with a customer managed KMS key, the ARN for the key used.
     */
    kmsKeyArn?: KmsKeyArn;
    /**
     * The Prometheus endpoint available for this workspace. 
     */
    prometheusEndpoint?: Uri;
    /**
     * The current status of the workspace.
     */
    status: WorkspaceStatus;
    /**
     * The list of tag keys and values that are associated with the workspace.
     */
    tags?: TagMap;
    /**
     * The unique ID for the workspace.
     */
    workspaceId: WorkspaceId;
  }
  export type WorkspaceId = string;
  export interface WorkspaceStatus {
    /**
     * The current status of the workspace.
     */
    statusCode: WorkspaceStatusCode;
  }
  export type WorkspaceStatusCode = "CREATING"|"ACTIVE"|"UPDATING"|"DELETING"|"CREATION_FAILED"|string;
  export interface WorkspaceSummary {
    /**
     * The alias that is assigned to this workspace to help identify it. It may not be unique.
     */
    alias?: WorkspaceAlias;
    /**
     * The ARN of the workspace.
     */
    arn: WorkspaceArn;
    /**
     * The date and time that the workspace was created.
     */
    createdAt: Timestamp;
    /**
     * (optional) If the workspace was created with a customer managed KMS key, the ARN for the key used.
     */
    kmsKeyArn?: KmsKeyArn;
    /**
     * The current status of the workspace.
     */
    status: WorkspaceStatus;
    /**
     * The list of tag keys and values that are associated with the workspace.
     */
    tags?: TagMap;
    /**
     * The unique ID for the workspace.
     */
    workspaceId: WorkspaceId;
  }
  export type WorkspaceSummaryList = WorkspaceSummary[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2020-08-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Amp client.
   */
  export import Types = Amp;
}
export = Amp;
