import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class SSMQuickSetup extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: SSMQuickSetup.Types.ClientConfiguration)
  config: Config & SSMQuickSetup.Types.ClientConfiguration;
  /**
   * Creates a Quick Setup configuration manager resource. This object is a collection of desired state configurations for multiple configuration definitions and summaries describing the deployments of those definitions.
   */
  createConfigurationManager(params: SSMQuickSetup.Types.CreateConfigurationManagerInput, callback?: (err: AWSError, data: SSMQuickSetup.Types.CreateConfigurationManagerOutput) => void): Request<SSMQuickSetup.Types.CreateConfigurationManagerOutput, AWSError>;
  /**
   * Creates a Quick Setup configuration manager resource. This object is a collection of desired state configurations for multiple configuration definitions and summaries describing the deployments of those definitions.
   */
  createConfigurationManager(callback?: (err: AWSError, data: SSMQuickSetup.Types.CreateConfigurationManagerOutput) => void): Request<SSMQuickSetup.Types.CreateConfigurationManagerOutput, AWSError>;
  /**
   * Deletes a configuration manager.
   */
  deleteConfigurationManager(params: SSMQuickSetup.Types.DeleteConfigurationManagerInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a configuration manager.
   */
  deleteConfigurationManager(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Returns a configuration manager.
   */
  getConfigurationManager(params: SSMQuickSetup.Types.GetConfigurationManagerInput, callback?: (err: AWSError, data: SSMQuickSetup.Types.GetConfigurationManagerOutput) => void): Request<SSMQuickSetup.Types.GetConfigurationManagerOutput, AWSError>;
  /**
   * Returns a configuration manager.
   */
  getConfigurationManager(callback?: (err: AWSError, data: SSMQuickSetup.Types.GetConfigurationManagerOutput) => void): Request<SSMQuickSetup.Types.GetConfigurationManagerOutput, AWSError>;
  /**
   * Returns settings configured for Quick Setup in the requesting Amazon Web Services account and Amazon Web Services Region.
   */
  getServiceSettings(callback?: (err: AWSError, data: SSMQuickSetup.Types.GetServiceSettingsOutput) => void): Request<SSMQuickSetup.Types.GetServiceSettingsOutput, AWSError>;
  /**
   * Returns Quick Setup configuration managers.
   */
  listConfigurationManagers(params: SSMQuickSetup.Types.ListConfigurationManagersInput, callback?: (err: AWSError, data: SSMQuickSetup.Types.ListConfigurationManagersOutput) => void): Request<SSMQuickSetup.Types.ListConfigurationManagersOutput, AWSError>;
  /**
   * Returns Quick Setup configuration managers.
   */
  listConfigurationManagers(callback?: (err: AWSError, data: SSMQuickSetup.Types.ListConfigurationManagersOutput) => void): Request<SSMQuickSetup.Types.ListConfigurationManagersOutput, AWSError>;
  /**
   * Returns the available Quick Setup types.
   */
  listQuickSetupTypes(callback?: (err: AWSError, data: SSMQuickSetup.Types.ListQuickSetupTypesOutput) => void): Request<SSMQuickSetup.Types.ListQuickSetupTypesOutput, AWSError>;
  /**
   * Returns tags assigned to the resource.
   */
  listTagsForResource(params: SSMQuickSetup.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: SSMQuickSetup.Types.ListTagsForResourceResponse) => void): Request<SSMQuickSetup.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Returns tags assigned to the resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: SSMQuickSetup.Types.ListTagsForResourceResponse) => void): Request<SSMQuickSetup.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Assigns key-value pairs of metadata to Amazon Web Services resources.
   */
  tagResource(params: SSMQuickSetup.Types.TagResourceInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Assigns key-value pairs of metadata to Amazon Web Services resources.
   */
  tagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes tags from the specified resource.
   */
  untagResource(params: SSMQuickSetup.Types.UntagResourceInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes tags from the specified resource.
   */
  untagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates a Quick Setup configuration definition.
   */
  updateConfigurationDefinition(params: SSMQuickSetup.Types.UpdateConfigurationDefinitionInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates a Quick Setup configuration definition.
   */
  updateConfigurationDefinition(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates a Quick Setup configuration manager.
   */
  updateConfigurationManager(params: SSMQuickSetup.Types.UpdateConfigurationManagerInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates a Quick Setup configuration manager.
   */
  updateConfigurationManager(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates settings configured for Quick Setup.
   */
  updateServiceSettings(params: SSMQuickSetup.Types.UpdateServiceSettingsInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates settings configured for Quick Setup.
   */
  updateServiceSettings(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
}
declare namespace SSMQuickSetup {
  export interface ConfigurationDefinition {
    /**
     * The ID of the configuration definition.
     */
    Id?: String;
    /**
     * The ARN of the IAM role used to administrate local configuration deployments.
     */
    LocalDeploymentAdministrationRoleArn?: IAMRoleArn;
    /**
     * The name of the IAM role used to deploy local configurations.
     */
    LocalDeploymentExecutionRoleName?: ConfigurationDefinitionLocalDeploymentExecutionRoleNameString;
    /**
     * A list of key-value pairs containing the required parameters for the configuration type.
     */
    Parameters: ConfigurationParametersMap;
    /**
     * The type of the Quick Setup configuration.
     */
    Type: ConfigurationDefinitionTypeString;
    /**
     * The version of the Quick Setup type used.
     */
    TypeVersion?: ConfigurationDefinitionTypeVersionString;
  }
  export interface ConfigurationDefinitionInput {
    /**
     * The ARN of the IAM role used to administrate local configuration deployments.
     */
    LocalDeploymentAdministrationRoleArn?: IAMRoleArn;
    /**
     * The name of the IAM role used to deploy local configurations.
     */
    LocalDeploymentExecutionRoleName?: ConfigurationDefinitionInputLocalDeploymentExecutionRoleNameString;
    /**
     * The parameters for the configuration definition type. Parameters for configuration definitions vary based the configuration type. The following tables outline the parameters for each configuration type.  OpsCenter (Type: Amazon Web ServicesQuickSetupType-SSMOpsCenter)     DelegatedAccountId    Description: (Required) The ID of the delegated administrator account.      TargetOrganizationalUnits    Description: (Required) A comma separated list of organizational units (OUs) you want to deploy the configuration to.      TargetRegions    Description: (Required) A comma separated list of Amazon Web Services Regions you want to deploy the configuration to.      Resource Scheduler (Type: Amazon Web ServicesQuickSetupType-Scheduler)     TargetTagKey    Description: (Required) The tag key assigned to the instances you want to target.      TargetTagValue    Description: (Required) The value of the tag key assigned to the instances you want to target.      ICalendarString    Description: (Required) An iCalendar formatted string containing the schedule you want Change Manager to use.      TargetAccounts    Description: (Optional) The ID of the Amazon Web Services account initiating the configuration deployment. You only need to provide a value for this parameter if you want to deploy the configuration locally. A value must be provided for either TargetAccounts or TargetOrganizationalUnits.      TargetOrganizationalUnits    Description: (Optional) A comma separated list of organizational units (OUs) you want to deploy the configuration to.      TargetRegions    Description: (Required) A comma separated list of Amazon Web Services Regions you want to deploy the configuration to.      Default Host Management Configuration (Type: Amazon Web ServicesQuickSetupType-DHMC)     UpdateSSMAgent    Description: (Optional) A boolean value that determines whether the SSM Agent is updated on the target instances every 2 weeks. The default value is "true".      TargetOrganizationalUnits    Description: (Required) A comma separated list of organizational units (OUs) you want to deploy the configuration to.      TargetRegions    Description: (Required) A comma separated list of Amazon Web Services Regions you want to deploy the configuration to.      Resource Explorer (Type: Amazon Web ServicesQuickSetupType-ResourceExplorer)     SelectedAggregatorRegion    Description: (Required) The Amazon Web Services Region where you want to create the aggregator index.      ReplaceExistingAggregator    Description: (Required) A boolean value that determines whether to demote an existing aggregator if it is in a Region that differs from the value you specify for the SelectedAggregatorRegion.      TargetOrganizationalUnits    Description: (Required) A comma separated list of organizational units (OUs) you want to deploy the configuration to.      TargetRegions    Description: (Required) A comma separated list of Amazon Web Services Regions you want to deploy the configuration to.      Change Manager (Type: Amazon Web ServicesQuickSetupType-SSMChangeMgr)     DelegatedAccountId    Description: (Required) The ID of the delegated administrator account.      JobFunction    Description: (Required) The name for the Change Manager job function.      PermissionType    Description: (Optional) Specifies whether you want to use default administrator permissions for the job function role, or provide a custom IAM policy. The valid values are CustomPermissions and AdminPermissions. The default value for the parameter is CustomerPermissions.      CustomPermissions    Description: (Optional) A JSON string containing the IAM policy you want your job function to use. You must provide a value for this parameter if you specify CustomPermissions for the PermissionType parameter.      TargetOrganizationalUnits    Description: (Required) A comma separated list of organizational units (OUs) you want to deploy the configuration to.      TargetRegions    Description: (Required) A comma separated list of Amazon Web Services Regions you want to deploy the configuration to.      DevOps Guru (Type: Amazon Web ServicesQuickSetupType-DevOpsGuru)     AnalyseAllResources    Description: (Optional) A boolean value that determines whether DevOps Guru analyzes all CloudFormation stacks in the account. The default value is "false".      EnableSnsNotifications    Description: (Optional) A boolean value that determines whether DevOps Guru sends notifications when an insight is created. The default value is "true".      EnableSsmOpsItems    Description: (Optional) A boolean value that determines whether DevOps Guru creates an OpsCenter OpsItem when an insight is created. The default value is "true".      EnableDriftRemediation    Description: (Optional) A boolean value that determines whether a drift remediation schedule is used. The default value is "false".      RemediationSchedule    Description: (Optional) A rate expression that defines the schedule for drift remediation. The valid values are rate(30 days), rate(14 days), rate(1 days), and none. The default value is "none".      TargetAccounts    Description: (Optional) The ID of the Amazon Web Services account initiating the configuration deployment. You only need to provide a value for this parameter if you want to deploy the configuration locally. A value must be provided for either TargetAccounts or TargetOrganizationalUnits.      TargetOrganizationalUnits    Description: (Optional) A comma separated list of organizational units (OUs) you want to deploy the configuration to.      TargetRegions    Description: (Required) A comma separated list of Amazon Web Services Regions you want to deploy the configuration to.      Conformance Packs (Type: Amazon Web ServicesQuickSetupType-CFGCPacks)     DelegatedAccountId    Description: (Optional) The ID of the delegated administrator account. This parameter is required for Organization deployments.      RemediationSchedule    Description: (Optional) A rate expression that defines the schedule for drift remediation. The valid values are rate(30 days), rate(14 days), rate(2 days), and none. The default value is "none".      CPackNames    Description: (Required) A comma separated list of Config conformance packs.      TargetAccounts    Description: (Optional) The ID of the Amazon Web Services account initiating the configuration deployment. You only need to provide a value for this parameter if you want to deploy the configuration locally. A value must be provided for either TargetAccounts or TargetOrganizationalUnits.      TargetOrganizationalUnits    Description: (Optional) The ID of the root of your Organization. This configuration type doesn't currently support choosing specific OUs. The configuration will be deployed to all the OUs in the Organization.      TargetRegions    Description: (Required) A comma separated list of Amazon Web Services Regions you want to deploy the configuration to.      Config Recording (Type: Amazon Web ServicesQuickSetupType-CFGRecording)     RecordAllResources    Description: (Optional) A boolean value that determines whether all supported resources are recorded. The default value is "true".      ResourceTypesToRecord    Description: (Optional) A comma separated list of resource types you want to record.      RecordGlobalResourceTypes    Description: (Optional) A boolean value that determines whether global resources are recorded with all resource configurations. The default value is "false".      GlobalResourceTypesRegion    Description: (Optional) Determines the Amazon Web Services Region where global resources are recorded.      UseCustomBucket    Description: (Optional) A boolean value that determines whether a custom Amazon S3 bucket is used for delivery. The default value is "false".      DeliveryBucketName    Description: (Optional) The name of the Amazon S3 bucket you want Config to deliver configuration snapshots and configuration history files to.      DeliveryBucketPrefix    Description: (Optional) The key prefix you want to use in the custom Amazon S3 bucket.      NotificationOptions    Description: (Optional) Determines the notification configuration for the recorder. The valid values are NoStreaming, UseExistingTopic, and CreateTopic. The default value is NoStreaming.      CustomDeliveryTopicAccountId    Description: (Optional) The ID of the Amazon Web Services account where the Amazon SNS topic you want to use for notifications resides. You must specify a value for this parameter if you use the UseExistingTopic notification option.      CustomDeliveryTopicName    Description: (Optional) The name of the Amazon SNS topic you want to use for notifications. You must specify a value for this parameter if you use the UseExistingTopic notification option.      RemediationSchedule    Description: (Optional) A rate expression that defines the schedule for drift remediation. The valid values are rate(30 days), rate(7 days), rate(1 days), and none. The default value is "none".      TargetAccounts    Description: (Optional) The ID of the Amazon Web Services account initiating the configuration deployment. You only need to provide a value for this parameter if you want to deploy the configuration locally. A value must be provided for either TargetAccounts or TargetOrganizationalUnits.      TargetOrganizationalUnits    Description: (Optional) The ID of the root of your Organization. This configuration type doesn't currently support choosing specific OUs. The configuration will be deployed to all the OUs in the Organization.      TargetRegions    Description: (Required) A comma separated list of Amazon Web Services Regions you want to deploy the configuration to.      Host Management (Type: Amazon Web ServicesQuickSetupType-SSMHostMgmt)     UpdateSSMAgent    Description: (Optional) A boolean value that determines whether the SSM Agent is updated on the target instances every 2 weeks. The default value is "true".      UpdateEc2LaunchAgent    Description: (Optional) A boolean value that determines whether the EC2 Launch agent is updated on the target instances every month. The default value is "false".      CollectInventory    Description: (Optional) A boolean value that determines whether the EC2 Launch agent is updated on the target instances every month. The default value is "true".      ScanInstances    Description: (Optional) A boolean value that determines whether the target instances are scanned daily for available patches. The default value is "true".      InstallCloudWatchAgent    Description: (Optional) A boolean value that determines whether the Amazon CloudWatch agent is installed on the target instances. The default value is "false".      UpdateCloudWatchAgent    Description: (Optional) A boolean value that determines whether the Amazon CloudWatch agent is updated on the target instances every month. The default value is "false".      IsPolicyAttachAllowed    Description: (Optional) A boolean value that determines whether Quick Setup attaches policies to instances profiles already associated with the target instances. The default value is "false".      TargetType    Description: (Optional) Determines how instances are targeted for local account deployments. Don't specify a value for this parameter if you're deploying to OUs. The valid values are *, InstanceIds, ResourceGroups, and Tags. Use * to target all instances in the account.      TargetInstances    Description: (Optional) A comma separated list of instance IDs. You must provide a value for this parameter if you specify InstanceIds for the TargetType parameter.      TargetTagKey    Description: (Optional) The tag key assigned to the instances you want to target. You must provide a value for this parameter if you specify Tags for the TargetType parameter.      TargetTagValue    Description: (Optional) The value of the tag key assigned to the instances you want to target. You must provide a value for this parameter if you specify Tags for the TargetType parameter.      ResourceGroupName    Description: (Optional) The name of the resource group associated with the instances you want to target. You must provide a value for this parameter if you specify ResourceGroups for the TargetType parameter.      TargetAccounts    Description: (Optional) The ID of the Amazon Web Services account initiating the configuration deployment. You only need to provide a value for this parameter if you want to deploy the configuration locally. A value must be provided for either TargetAccounts or TargetOrganizationalUnits.      TargetOrganizationalUnits    Description: (Optional) A comma separated list of organizational units (OUs) you want to deploy the configuration to.      TargetRegions    Description: (Required) A comma separated list of Amazon Web Services Regions you want to deploy the configuration to.      Distributor (Type: Amazon Web ServicesQuickSetupType-Distributor)     PackagesToInstall    Description: (Required) A comma separated list of packages you want to install on the target instances. The valid values are AWSEFSTools, AWSCWAgent, and AWSEC2LaunchAgent.      RemediationSchedule    Description: (Optional) A rate expression that defines the schedule for drift remediation. The valid values are rate(30 days), rate(14 days), rate(2 days), and none. The default value is "rate(30 days)".      IsPolicyAttachAllowed    Description: (Optional) A boolean value that determines whether Quick Setup attaches policies to instances profiles already associated with the target instances. The default value is "false".      TargetType    Description: (Optional) Determines how instances are targeted for local account deployments. Don't specify a value for this parameter if you're deploying to OUs. The valid values are *, InstanceIds, ResourceGroups, and Tags. Use * to target all instances in the account.      TargetInstances    Description: (Optional) A comma separated list of instance IDs. You must provide a value for this parameter if you specify InstanceIds for the TargetType parameter.      TargetTagKey    Description: (Required) The tag key assigned to the instances you want to target. You must provide a value for this parameter if you specify Tags for the TargetType parameter.      TargetTagValue    Description: (Required) The value of the tag key assigned to the instances you want to target. You must provide a value for this parameter if you specify Tags for the TargetType parameter.      ResourceGroupName    Description: (Required) The name of the resource group associated with the instances you want to target. You must provide a value for this parameter if you specify ResourceGroups for the TargetType parameter.      TargetAccounts    Description: (Optional) The ID of the Amazon Web Services account initiating the configuration deployment. You only need to provide a value for this parameter if you want to deploy the configuration locally. A value must be provided for either TargetAccounts or TargetOrganizationalUnits.      TargetOrganizationalUnits    Description: (Optional) A comma separated list of organizational units (OUs) you want to deploy the configuration to.      TargetRegions    Description: (Required) A comma separated list of Amazon Web Services Regions you want to deploy the configuration to.      Patch Policy (Type: Amazon Web ServicesQuickSetupType-PatchPolicy)     PatchPolicyName    Description: (Required) A name for the patch policy. The value you provide is applied to target Amazon EC2 instances as a tag.      SelectedPatchBaselines    Description: (Required) An array of JSON objects containing the information for the patch baselines to include in your patch policy.      PatchBaselineUseDefault    Description: (Optional) A boolean value that determines whether the selected patch baselines are all Amazon Web Services provided.      ConfigurationOptionsPatchOperation    Description: (Optional) Determines whether target instances scan for available patches, or scan and install available patches. The valid values are Scan and ScanAndInstall. The default value for the parameter is Scan.      ConfigurationOptionsScanValue    Description: (Optional) A cron expression that is used as the schedule for when instances scan for available patches.      ConfigurationOptionsInstallValue    Description: (Optional) A cron expression that is used as the schedule for when instances install available patches.      ConfigurationOptionsScanNextInterval    Description: (Optional) A boolean value that determines whether instances should scan for available patches at the next cron interval. The default value is "false".      ConfigurationOptionsInstallNextInterval    Description: (Optional) A boolean value that determines whether instances should scan for available patches at the next cron interval. The default value is "false".      RebootOption    Description: (Optional) A boolean value that determines whether instances are rebooted after patches are installed. The default value is "false".      IsPolicyAttachAllowed    Description: (Optional) A boolean value that determines whether Quick Setup attaches policies to instances profiles already associated with the target instances. The default value is "false".      OutputLogEnableS3    Description: (Optional) A boolean value that determines whether command output logs are sent to Amazon S3.      OutputS3Location    Description: (Optional) A JSON string containing information about the Amazon S3 bucket where you want to store the output details of the request.    OutputS3BucketRegion    Description: (Optional) The Amazon Web Services Region where the Amazon S3 bucket you want Config to deliver command output to is located.      OutputS3BucketName    Description: (Optional) The name of the Amazon S3 bucket you want Config to deliver command output to.      OutputS3KeyPrefix    Description: (Optional) The key prefix you want to use in the custom Amazon S3 bucket.          TargetType    Description: (Optional) Determines how instances are targeted for local account deployments. Don't specify a value for this parameter if you're deploying to OUs. The valid values are *, InstanceIds, ResourceGroups, and Tags. Use * to target all instances in the account.      TargetInstances    Description: (Optional) A comma separated list of instance IDs. You must provide a value for this parameter if you specify InstanceIds for the TargetType parameter.      TargetTagKey    Description: (Required) The tag key assigned to the instances you want to target. You must provide a value for this parameter if you specify Tags for the TargetType parameter.      TargetTagValue    Description: (Required) The value of the tag key assigned to the instances you want to target. You must provide a value for this parameter if you specify Tags for the TargetType parameter.      ResourceGroupName    Description: (Required) The name of the resource group associated with the instances you want to target. You must provide a value for this parameter if you specify ResourceGroups for the TargetType parameter.      TargetAccounts    Description: (Optional) The ID of the Amazon Web Services account initiating the configuration deployment. You only need to provide a value for this parameter if you want to deploy the configuration locally. A value must be provided for either TargetAccounts or TargetOrganizationalUnits.      TargetOrganizationalUnits    Description: (Optional) A comma separated list of organizational units (OUs) you want to deploy the configuration to.      TargetRegions    Description: (Required) A comma separated list of Amazon Web Services Regions you want to deploy the configuration to.      
     */
    Parameters: ConfigurationParametersMap;
    /**
     * The type of the Quick Setup configuration.
     */
    Type: ConfigurationDefinitionInputTypeString;
    /**
     * The version of the Quick Setup type to use.
     */
    TypeVersion?: ConfigurationDefinitionInputTypeVersionString;
  }
  export type ConfigurationDefinitionInputLocalDeploymentExecutionRoleNameString = string;
  export type ConfigurationDefinitionInputTypeString = string;
  export type ConfigurationDefinitionInputTypeVersionString = string;
  export type ConfigurationDefinitionLocalDeploymentExecutionRoleNameString = string;
  export type ConfigurationDefinitionSummariesList = ConfigurationDefinitionSummary[];
  export interface ConfigurationDefinitionSummary {
    /**
     * The common parameters and values for the configuration definition.
     */
    FirstClassParameters?: ConfigurationParametersMap;
    /**
     * The ID of the configuration definition.
     */
    Id?: String;
    /**
     * The type of the Quick Setup configuration used by the configuration definition.
     */
    Type?: String;
    /**
     * The version of the Quick Setup type used by the configuration definition.
     */
    TypeVersion?: String;
  }
  export type ConfigurationDefinitionTypeString = string;
  export type ConfigurationDefinitionTypeVersionString = string;
  export type ConfigurationDefinitionsInputList = ConfigurationDefinitionInput[];
  export type ConfigurationDefinitionsList = ConfigurationDefinition[];
  export type ConfigurationManagerList = ConfigurationManagerSummary[];
  export interface ConfigurationManagerSummary {
    /**
     * A summary of the Quick Setup configuration definition.
     */
    ConfigurationDefinitionSummaries?: ConfigurationDefinitionSummariesList;
    /**
     * The description of the configuration.
     */
    Description?: String;
    /**
     * The ARN of the Quick Setup configuration.
     */
    ManagerArn: String;
    /**
     * The name of the configuration
     */
    Name?: String;
    /**
     * Summaries of the state of the configuration manager. These summaries include an aggregate of the statuses from the configuration definition associated with the configuration manager. This includes deployment statuses, association statuses, drift statuses, health checks, and more.
     */
    StatusSummaries?: StatusSummariesList;
  }
  export type ConfigurationParametersMap = {[key: string]: ConfigurationParametersMapValueString};
  export type ConfigurationParametersMapKeyString = string;
  export type ConfigurationParametersMapValueString = string;
  export interface CreateConfigurationManagerInput {
    /**
     * The definition of the Quick Setup configuration that the configuration manager deploys.
     */
    ConfigurationDefinitions: ConfigurationDefinitionsInputList;
    /**
     * A description of the configuration manager.
     */
    Description?: CreateConfigurationManagerInputDescriptionString;
    /**
     * A name for the configuration manager.
     */
    Name?: CreateConfigurationManagerInputNameString;
    /**
     * Key-value pairs of metadata to assign to the configuration manager.
     */
    Tags?: TagsMap;
  }
  export type CreateConfigurationManagerInputDescriptionString = string;
  export type CreateConfigurationManagerInputNameString = string;
  export interface CreateConfigurationManagerOutput {
    /**
     * The ARN for the newly created configuration manager.
     */
    ManagerArn: String;
  }
  export interface DeleteConfigurationManagerInput {
    /**
     * The ID of the configuration manager.
     */
    ManagerArn: DeleteConfigurationManagerInputManagerArnString;
  }
  export type DeleteConfigurationManagerInputManagerArnString = string;
  export interface Filter {
    /**
     * The key for the filter.
     */
    Key: FilterKeyString;
    /**
     * The values for the filter keys.
     */
    Values: FilterValues;
  }
  export type FilterKeyString = string;
  export type FilterValues = FilterValuesMemberString[];
  export type FilterValuesMemberString = string;
  export type FiltersList = Filter[];
  export interface GetConfigurationManagerInput {
    /**
     * The ARN of the configuration manager.
     */
    ManagerArn: GetConfigurationManagerInputManagerArnString;
  }
  export type GetConfigurationManagerInputManagerArnString = string;
  export interface GetConfigurationManagerOutput {
    /**
     * The configuration definitions association with the configuration manager.
     */
    ConfigurationDefinitions?: ConfigurationDefinitionsList;
    /**
     * The datetime stamp when the configuration manager was created.
     */
    CreatedAt?: SyntheticTimestamp_date_time;
    /**
     * The description of the configuration manager.
     */
    Description?: String;
    /**
     * The datetime stamp when the configuration manager was last updated.
     */
    LastModifiedAt?: SyntheticTimestamp_date_time;
    /**
     * The ARN of the configuration manager.
     */
    ManagerArn: String;
    /**
     * The name of the configuration manager.
     */
    Name?: String;
    /**
     * A summary of the state of the configuration manager. This includes deployment statuses, association statuses, drift statuses, health checks, and more.
     */
    StatusSummaries?: StatusSummariesList;
    /**
     * Key-value pairs of metadata to assign to the configuration manager.
     */
    Tags?: TagsMap;
  }
  export interface GetServiceSettingsOutput {
    /**
     * Returns details about the settings for Quick Setup in the requesting Amazon Web Services account and Amazon Web Services Region.
     */
    ServiceSettings?: ServiceSettings;
  }
  export type IAMRoleArn = string;
  export interface ListConfigurationManagersInput {
    /**
     * Filters the results returned by the request.
     */
    Filters?: FiltersList;
    /**
     * Specifies the maximum number of configuration managers that are returned by the request.
     */
    MaxItems?: ListConfigurationManagersInputMaxItemsInteger;
    /**
     * The token to use when requesting a specific set of items from a list.
     */
    StartingToken?: ListConfigurationManagersInputStartingTokenString;
  }
  export type ListConfigurationManagersInputMaxItemsInteger = number;
  export type ListConfigurationManagersInputStartingTokenString = string;
  export interface ListConfigurationManagersOutput {
    /**
     * The configuration managers returned by the request.
     */
    ConfigurationManagersList?: ConfigurationManagerList;
    /**
     * The token to use when requesting the next set of configuration managers. If there are no additional operations to return, the string is empty.
     */
    NextToken?: String;
  }
  export interface ListQuickSetupTypesOutput {
    /**
     * An array of Quick Setup types.
     */
    QuickSetupTypeList?: QuickSetupTypeList;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The ARN of the resource the tag is assigned to.
     */
    ResourceArn: String;
  }
  export interface ListTagsForResourceResponse {
    /**
     * Key-value pairs of metadata assigned to the resource.
     */
    Tags?: Tags;
  }
  export type QuickSetupTypeList = QuickSetupTypeOutput[];
  export interface QuickSetupTypeOutput {
    /**
     * The latest version number of the configuration.
     */
    LatestVersion?: String;
    /**
     * The type of the Quick Setup configuration.
     */
    Type?: String;
  }
  export interface ServiceSettings {
    /**
     * The IAM role used to enable Explorer.
     */
    ExplorerEnablingRoleArn?: IAMRoleArn;
  }
  export type Status = "INITIALIZING"|"DEPLOYING"|"SUCCEEDED"|"DELETING"|"STOPPING"|"FAILED"|"STOPPED"|"DELETE_FAILED"|"STOP_FAILED"|"NONE"|string;
  export type StatusDetails = {[key: string]: String};
  export type StatusSummariesList = StatusSummary[];
  export interface StatusSummary {
    /**
     * The datetime stamp when the status was last updated.
     */
    LastUpdatedAt: SyntheticTimestamp_date_time;
    /**
     * The current status.
     */
    Status?: Status;
    /**
     * Details about the status.
     */
    StatusDetails?: StatusDetails;
    /**
     * When applicable, returns an informational message relevant to the current status and status type of the status summary object. We don't recommend implementing parsing logic around this value since the messages returned can vary in format.
     */
    StatusMessage?: String;
    /**
     * The type of a status summary.
     */
    StatusType: StatusType;
  }
  export type StatusType = "Deployment"|"AsyncExecutions"|string;
  export type String = string;
  export type SyntheticTimestamp_date_time = Date;
  export interface TagEntry {
    /**
     * The key for the tag.
     */
    Key?: TagEntryKeyString;
    /**
     * The value for the tag.
     */
    Value?: TagEntryValueString;
  }
  export type TagEntryKeyString = string;
  export type TagEntryValueString = string;
  export type TagKeys = String[];
  export interface TagResourceInput {
    /**
     * The ARN of the resource to tag.
     */
    ResourceArn: String;
    /**
     * Key-value pairs of metadata to assign to the resource.
     */
    Tags: TagsMap;
  }
  export type Tags = TagEntry[];
  export type TagsMap = {[key: string]: TagsMapValueString};
  export type TagsMapKeyString = string;
  export type TagsMapValueString = string;
  export interface UntagResourceInput {
    /**
     * The ARN of the resource to remove tags from.
     */
    ResourceArn: String;
    /**
     * The keys of the tags to remove from the resource.
     */
    TagKeys: TagKeys;
  }
  export interface UpdateConfigurationDefinitionInput {
    /**
     * The ID of the configuration definition you want to update.
     */
    Id: UpdateConfigurationDefinitionInputIdString;
    /**
     * The ARN of the IAM role used to administrate local configuration deployments.
     */
    LocalDeploymentAdministrationRoleArn?: IAMRoleArn;
    /**
     * The name of the IAM role used to deploy local configurations.
     */
    LocalDeploymentExecutionRoleName?: UpdateConfigurationDefinitionInputLocalDeploymentExecutionRoleNameString;
    /**
     * The ARN of the configuration manager associated with the definition to update.
     */
    ManagerArn: UpdateConfigurationDefinitionInputManagerArnString;
    /**
     * The parameters for the configuration definition type.
     */
    Parameters?: ConfigurationParametersMap;
    /**
     * The version of the Quick Setup type to use.
     */
    TypeVersion?: UpdateConfigurationDefinitionInputTypeVersionString;
  }
  export type UpdateConfigurationDefinitionInputIdString = string;
  export type UpdateConfigurationDefinitionInputLocalDeploymentExecutionRoleNameString = string;
  export type UpdateConfigurationDefinitionInputManagerArnString = string;
  export type UpdateConfigurationDefinitionInputTypeVersionString = string;
  export interface UpdateConfigurationManagerInput {
    /**
     * A description of the configuration manager.
     */
    Description?: UpdateConfigurationManagerInputDescriptionString;
    /**
     * The ARN of the configuration manager.
     */
    ManagerArn: UpdateConfigurationManagerInputManagerArnString;
    /**
     * A name for the configuration manager.
     */
    Name?: UpdateConfigurationManagerInputNameString;
  }
  export type UpdateConfigurationManagerInputDescriptionString = string;
  export type UpdateConfigurationManagerInputManagerArnString = string;
  export type UpdateConfigurationManagerInputNameString = string;
  export interface UpdateServiceSettingsInput {
    /**
     * The IAM role used to enable Explorer.
     */
    ExplorerEnablingRoleArn?: IAMRoleArn;
  }
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
   * Contains interfaces for use with the SSMQuickSetup client.
   */
  export import Types = SSMQuickSetup;
}
export = SSMQuickSetup;
