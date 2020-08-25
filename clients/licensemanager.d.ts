import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class LicenseManager extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: LicenseManager.Types.ClientConfiguration)
  config: Config & LicenseManager.Types.ClientConfiguration;
  /**
   * Creates a license configuration. A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy, Dedicated Instance, Dedicated Host, or all of these), license affinity to host (how long a license must be associated with a host), and the number of licenses purchased and used.
   */
  createLicenseConfiguration(params: LicenseManager.Types.CreateLicenseConfigurationRequest, callback?: (err: AWSError, data: LicenseManager.Types.CreateLicenseConfigurationResponse) => void): Request<LicenseManager.Types.CreateLicenseConfigurationResponse, AWSError>;
  /**
   * Creates a license configuration. A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy, Dedicated Instance, Dedicated Host, or all of these), license affinity to host (how long a license must be associated with a host), and the number of licenses purchased and used.
   */
  createLicenseConfiguration(callback?: (err: AWSError, data: LicenseManager.Types.CreateLicenseConfigurationResponse) => void): Request<LicenseManager.Types.CreateLicenseConfigurationResponse, AWSError>;
  /**
   * Deletes the specified license configuration. You cannot delete a license configuration that is in use.
   */
  deleteLicenseConfiguration(params: LicenseManager.Types.DeleteLicenseConfigurationRequest, callback?: (err: AWSError, data: LicenseManager.Types.DeleteLicenseConfigurationResponse) => void): Request<LicenseManager.Types.DeleteLicenseConfigurationResponse, AWSError>;
  /**
   * Deletes the specified license configuration. You cannot delete a license configuration that is in use.
   */
  deleteLicenseConfiguration(callback?: (err: AWSError, data: LicenseManager.Types.DeleteLicenseConfigurationResponse) => void): Request<LicenseManager.Types.DeleteLicenseConfigurationResponse, AWSError>;
  /**
   * Gets detailed information about the specified license configuration.
   */
  getLicenseConfiguration(params: LicenseManager.Types.GetLicenseConfigurationRequest, callback?: (err: AWSError, data: LicenseManager.Types.GetLicenseConfigurationResponse) => void): Request<LicenseManager.Types.GetLicenseConfigurationResponse, AWSError>;
  /**
   * Gets detailed information about the specified license configuration.
   */
  getLicenseConfiguration(callback?: (err: AWSError, data: LicenseManager.Types.GetLicenseConfigurationResponse) => void): Request<LicenseManager.Types.GetLicenseConfigurationResponse, AWSError>;
  /**
   * Gets the License Manager settings for the current Region.
   */
  getServiceSettings(params: LicenseManager.Types.GetServiceSettingsRequest, callback?: (err: AWSError, data: LicenseManager.Types.GetServiceSettingsResponse) => void): Request<LicenseManager.Types.GetServiceSettingsResponse, AWSError>;
  /**
   * Gets the License Manager settings for the current Region.
   */
  getServiceSettings(callback?: (err: AWSError, data: LicenseManager.Types.GetServiceSettingsResponse) => void): Request<LicenseManager.Types.GetServiceSettingsResponse, AWSError>;
  /**
   * Lists the resource associations for the specified license configuration. Resource associations need not consume licenses from a license configuration. For example, an AMI or a stopped instance might not consume a license (depending on the license rules).
   */
  listAssociationsForLicenseConfiguration(params: LicenseManager.Types.ListAssociationsForLicenseConfigurationRequest, callback?: (err: AWSError, data: LicenseManager.Types.ListAssociationsForLicenseConfigurationResponse) => void): Request<LicenseManager.Types.ListAssociationsForLicenseConfigurationResponse, AWSError>;
  /**
   * Lists the resource associations for the specified license configuration. Resource associations need not consume licenses from a license configuration. For example, an AMI or a stopped instance might not consume a license (depending on the license rules).
   */
  listAssociationsForLicenseConfiguration(callback?: (err: AWSError, data: LicenseManager.Types.ListAssociationsForLicenseConfigurationResponse) => void): Request<LicenseManager.Types.ListAssociationsForLicenseConfigurationResponse, AWSError>;
  /**
   * Lists the license configuration operations that failed.
   */
  listFailuresForLicenseConfigurationOperations(params: LicenseManager.Types.ListFailuresForLicenseConfigurationOperationsRequest, callback?: (err: AWSError, data: LicenseManager.Types.ListFailuresForLicenseConfigurationOperationsResponse) => void): Request<LicenseManager.Types.ListFailuresForLicenseConfigurationOperationsResponse, AWSError>;
  /**
   * Lists the license configuration operations that failed.
   */
  listFailuresForLicenseConfigurationOperations(callback?: (err: AWSError, data: LicenseManager.Types.ListFailuresForLicenseConfigurationOperationsResponse) => void): Request<LicenseManager.Types.ListFailuresForLicenseConfigurationOperationsResponse, AWSError>;
  /**
   * Lists the license configurations for your account.
   */
  listLicenseConfigurations(params: LicenseManager.Types.ListLicenseConfigurationsRequest, callback?: (err: AWSError, data: LicenseManager.Types.ListLicenseConfigurationsResponse) => void): Request<LicenseManager.Types.ListLicenseConfigurationsResponse, AWSError>;
  /**
   * Lists the license configurations for your account.
   */
  listLicenseConfigurations(callback?: (err: AWSError, data: LicenseManager.Types.ListLicenseConfigurationsResponse) => void): Request<LicenseManager.Types.ListLicenseConfigurationsResponse, AWSError>;
  /**
   * Describes the license configurations for the specified resource.
   */
  listLicenseSpecificationsForResource(params: LicenseManager.Types.ListLicenseSpecificationsForResourceRequest, callback?: (err: AWSError, data: LicenseManager.Types.ListLicenseSpecificationsForResourceResponse) => void): Request<LicenseManager.Types.ListLicenseSpecificationsForResourceResponse, AWSError>;
  /**
   * Describes the license configurations for the specified resource.
   */
  listLicenseSpecificationsForResource(callback?: (err: AWSError, data: LicenseManager.Types.ListLicenseSpecificationsForResourceResponse) => void): Request<LicenseManager.Types.ListLicenseSpecificationsForResourceResponse, AWSError>;
  /**
   * Lists resources managed using Systems Manager inventory.
   */
  listResourceInventory(params: LicenseManager.Types.ListResourceInventoryRequest, callback?: (err: AWSError, data: LicenseManager.Types.ListResourceInventoryResponse) => void): Request<LicenseManager.Types.ListResourceInventoryResponse, AWSError>;
  /**
   * Lists resources managed using Systems Manager inventory.
   */
  listResourceInventory(callback?: (err: AWSError, data: LicenseManager.Types.ListResourceInventoryResponse) => void): Request<LicenseManager.Types.ListResourceInventoryResponse, AWSError>;
  /**
   * Lists the tags for the specified license configuration.
   */
  listTagsForResource(params: LicenseManager.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: LicenseManager.Types.ListTagsForResourceResponse) => void): Request<LicenseManager.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists the tags for the specified license configuration.
   */
  listTagsForResource(callback?: (err: AWSError, data: LicenseManager.Types.ListTagsForResourceResponse) => void): Request<LicenseManager.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists all license usage records for a license configuration, displaying license consumption details by resource at a selected point in time. Use this action to audit the current license consumption for any license inventory and configuration.
   */
  listUsageForLicenseConfiguration(params: LicenseManager.Types.ListUsageForLicenseConfigurationRequest, callback?: (err: AWSError, data: LicenseManager.Types.ListUsageForLicenseConfigurationResponse) => void): Request<LicenseManager.Types.ListUsageForLicenseConfigurationResponse, AWSError>;
  /**
   * Lists all license usage records for a license configuration, displaying license consumption details by resource at a selected point in time. Use this action to audit the current license consumption for any license inventory and configuration.
   */
  listUsageForLicenseConfiguration(callback?: (err: AWSError, data: LicenseManager.Types.ListUsageForLicenseConfigurationResponse) => void): Request<LicenseManager.Types.ListUsageForLicenseConfigurationResponse, AWSError>;
  /**
   * Adds the specified tags to the specified license configuration.
   */
  tagResource(params: LicenseManager.Types.TagResourceRequest, callback?: (err: AWSError, data: LicenseManager.Types.TagResourceResponse) => void): Request<LicenseManager.Types.TagResourceResponse, AWSError>;
  /**
   * Adds the specified tags to the specified license configuration.
   */
  tagResource(callback?: (err: AWSError, data: LicenseManager.Types.TagResourceResponse) => void): Request<LicenseManager.Types.TagResourceResponse, AWSError>;
  /**
   * Removes the specified tags from the specified license configuration.
   */
  untagResource(params: LicenseManager.Types.UntagResourceRequest, callback?: (err: AWSError, data: LicenseManager.Types.UntagResourceResponse) => void): Request<LicenseManager.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes the specified tags from the specified license configuration.
   */
  untagResource(callback?: (err: AWSError, data: LicenseManager.Types.UntagResourceResponse) => void): Request<LicenseManager.Types.UntagResourceResponse, AWSError>;
  /**
   * Modifies the attributes of an existing license configuration.
   */
  updateLicenseConfiguration(params: LicenseManager.Types.UpdateLicenseConfigurationRequest, callback?: (err: AWSError, data: LicenseManager.Types.UpdateLicenseConfigurationResponse) => void): Request<LicenseManager.Types.UpdateLicenseConfigurationResponse, AWSError>;
  /**
   * Modifies the attributes of an existing license configuration.
   */
  updateLicenseConfiguration(callback?: (err: AWSError, data: LicenseManager.Types.UpdateLicenseConfigurationResponse) => void): Request<LicenseManager.Types.UpdateLicenseConfigurationResponse, AWSError>;
  /**
   * Adds or removes the specified license configurations for the specified AWS resource. You can update the license specifications of AMIs, instances, and hosts. You cannot update the license specifications for launch templates and AWS CloudFormation templates, as they send license configurations to the operation that creates the resource.
   */
  updateLicenseSpecificationsForResource(params: LicenseManager.Types.UpdateLicenseSpecificationsForResourceRequest, callback?: (err: AWSError, data: LicenseManager.Types.UpdateLicenseSpecificationsForResourceResponse) => void): Request<LicenseManager.Types.UpdateLicenseSpecificationsForResourceResponse, AWSError>;
  /**
   * Adds or removes the specified license configurations for the specified AWS resource. You can update the license specifications of AMIs, instances, and hosts. You cannot update the license specifications for launch templates and AWS CloudFormation templates, as they send license configurations to the operation that creates the resource.
   */
  updateLicenseSpecificationsForResource(callback?: (err: AWSError, data: LicenseManager.Types.UpdateLicenseSpecificationsForResourceResponse) => void): Request<LicenseManager.Types.UpdateLicenseSpecificationsForResourceResponse, AWSError>;
  /**
   * Updates License Manager settings for the current Region.
   */
  updateServiceSettings(params: LicenseManager.Types.UpdateServiceSettingsRequest, callback?: (err: AWSError, data: LicenseManager.Types.UpdateServiceSettingsResponse) => void): Request<LicenseManager.Types.UpdateServiceSettingsResponse, AWSError>;
  /**
   * Updates License Manager settings for the current Region.
   */
  updateServiceSettings(callback?: (err: AWSError, data: LicenseManager.Types.UpdateServiceSettingsResponse) => void): Request<LicenseManager.Types.UpdateServiceSettingsResponse, AWSError>;
}
declare namespace LicenseManager {
  export interface AutomatedDiscoveryInformation {
    /**
     * Time that automated discovery last ran.
     */
    LastRunTime?: DateTime;
  }
  export type Boolean = boolean;
  export type BoxBoolean = boolean;
  export type BoxInteger = number;
  export type BoxLong = number;
  export interface ConsumedLicenseSummary {
    /**
     * Resource type of the resource consuming a license.
     */
    ResourceType?: ResourceType;
    /**
     * Number of licenses consumed by the resource.
     */
    ConsumedLicenses?: BoxLong;
  }
  export type ConsumedLicenseSummaryList = ConsumedLicenseSummary[];
  export interface CreateLicenseConfigurationRequest {
    /**
     * Name of the license configuration.
     */
    Name: String;
    /**
     * Description of the license configuration.
     */
    Description?: String;
    /**
     * Dimension used to track the license inventory.
     */
    LicenseCountingType: LicenseCountingType;
    /**
     * Number of licenses managed by the license configuration.
     */
    LicenseCount?: BoxLong;
    /**
     * Indicates whether hard or soft license enforcement is used. Exceeding a hard limit blocks the launch of new instances.
     */
    LicenseCountHardLimit?: BoxBoolean;
    /**
     * License rules. The syntax is #name=value (for example, #allowedTenancy=EC2-DedicatedHost). The available rules vary by dimension, as follows.    Cores dimension: allowedTenancy | licenseAffinityToHost | maximumCores | minimumCores     Instances dimension: allowedTenancy | maximumCores | minimumCores | maximumSockets | minimumSockets | maximumVcpus | minimumVcpus     Sockets dimension: allowedTenancy | licenseAffinityToHost | maximumSockets | minimumSockets     vCPUs dimension: allowedTenancy | honorVcpuOptimization | maximumVcpus | minimumVcpus    The unit for licenseAffinityToHost is days and the range is 1 to 180. The possible values for allowedTenancy are EC2-Default, EC2-DedicatedHost, and EC2-DedicatedInstance. The possible values for honorVcpuOptimization are True and False.
     */
    LicenseRules?: StringList;
    /**
     * Tags to add to the license configuration.
     */
    Tags?: TagList;
    /**
     * Product information.
     */
    ProductInformationList?: ProductInformationList;
  }
  export interface CreateLicenseConfigurationResponse {
    /**
     * Amazon Resource Name (ARN) of the license configuration.
     */
    LicenseConfigurationArn?: String;
  }
  export type DateTime = Date;
  export interface DeleteLicenseConfigurationRequest {
    /**
     * ID of the license configuration.
     */
    LicenseConfigurationArn: String;
  }
  export interface DeleteLicenseConfigurationResponse {
  }
  export interface Filter {
    /**
     * Name of the filter. Filter names are case-sensitive.
     */
    Name?: FilterName;
    /**
     * Filter values. Filter values are case-sensitive.
     */
    Values?: FilterValues;
  }
  export type FilterName = string;
  export type FilterValue = string;
  export type FilterValues = FilterValue[];
  export type Filters = Filter[];
  export interface GetLicenseConfigurationRequest {
    /**
     * Amazon Resource Name (ARN) of the license configuration.
     */
    LicenseConfigurationArn: String;
  }
  export interface GetLicenseConfigurationResponse {
    /**
     * Unique ID for the license configuration.
     */
    LicenseConfigurationId?: String;
    /**
     * Amazon Resource Name (ARN) of the license configuration.
     */
    LicenseConfigurationArn?: String;
    /**
     * Name of the license configuration.
     */
    Name?: String;
    /**
     * Description of the license configuration.
     */
    Description?: String;
    /**
     * Dimension on which the licenses are counted.
     */
    LicenseCountingType?: LicenseCountingType;
    /**
     * License rules.
     */
    LicenseRules?: StringList;
    /**
     * Number of available licenses.
     */
    LicenseCount?: BoxLong;
    /**
     * Sets the number of available licenses as a hard limit.
     */
    LicenseCountHardLimit?: BoxBoolean;
    /**
     * Number of licenses assigned to resources.
     */
    ConsumedLicenses?: BoxLong;
    /**
     * License configuration status.
     */
    Status?: String;
    /**
     * Account ID of the owner of the license configuration.
     */
    OwnerAccountId?: String;
    /**
     * Summaries of the licenses consumed by resources.
     */
    ConsumedLicenseSummaryList?: ConsumedLicenseSummaryList;
    /**
     * Summaries of the managed resources.
     */
    ManagedResourceSummaryList?: ManagedResourceSummaryList;
    /**
     * Tags for the license configuration.
     */
    Tags?: TagList;
    /**
     * Product information.
     */
    ProductInformationList?: ProductInformationList;
    /**
     * Automated discovery information.
     */
    AutomatedDiscoveryInformation?: AutomatedDiscoveryInformation;
  }
  export interface GetServiceSettingsRequest {
  }
  export interface GetServiceSettingsResponse {
    /**
     * Regional S3 bucket path for storing reports, license trail event data, discovery data, and so on.
     */
    S3BucketArn?: String;
    /**
     * SNS topic configured to receive notifications from License Manager.
     */
    SnsTopicArn?: String;
    /**
     * Indicates whether AWS Organizations has been integrated with License Manager for cross-account discovery.
     */
    OrganizationConfiguration?: OrganizationConfiguration;
    /**
     * Indicates whether cross-account discovery has been enabled.
     */
    EnableCrossAccountsDiscovery?: BoxBoolean;
    /**
     * Amazon Resource Name (ARN) of the AWS resource share. The License Manager master account will provide member accounts with access to this share.
     */
    LicenseManagerResourceShareArn?: String;
  }
  export interface InventoryFilter {
    /**
     * Name of the filter.
     */
    Name: String;
    /**
     * Condition of the filter.
     */
    Condition: InventoryFilterCondition;
    /**
     * Value of the filter.
     */
    Value?: String;
  }
  export type InventoryFilterCondition = "EQUALS"|"NOT_EQUALS"|"BEGINS_WITH"|"CONTAINS"|string;
  export type InventoryFilterList = InventoryFilter[];
  export interface LicenseConfiguration {
    /**
     * Unique ID of the license configuration.
     */
    LicenseConfigurationId?: String;
    /**
     * Amazon Resource Name (ARN) of the license configuration.
     */
    LicenseConfigurationArn?: String;
    /**
     * Name of the license configuration.
     */
    Name?: String;
    /**
     * Description of the license configuration.
     */
    Description?: String;
    /**
     * Dimension to use to track the license inventory.
     */
    LicenseCountingType?: LicenseCountingType;
    /**
     * License rules.
     */
    LicenseRules?: StringList;
    /**
     * Number of licenses managed by the license configuration.
     */
    LicenseCount?: BoxLong;
    /**
     * Number of available licenses as a hard limit.
     */
    LicenseCountHardLimit?: BoxBoolean;
    /**
     * Number of licenses consumed. 
     */
    ConsumedLicenses?: BoxLong;
    /**
     * Status of the license configuration.
     */
    Status?: String;
    /**
     * Account ID of the license configuration's owner.
     */
    OwnerAccountId?: String;
    /**
     * Summaries for licenses consumed by various resources.
     */
    ConsumedLicenseSummaryList?: ConsumedLicenseSummaryList;
    /**
     * Summaries for managed resources.
     */
    ManagedResourceSummaryList?: ManagedResourceSummaryList;
    /**
     * Product information.
     */
    ProductInformationList?: ProductInformationList;
    /**
     * Automated discovery information.
     */
    AutomatedDiscoveryInformation?: AutomatedDiscoveryInformation;
  }
  export interface LicenseConfigurationAssociation {
    /**
     * Amazon Resource Name (ARN) of the resource.
     */
    ResourceArn?: String;
    /**
     * Type of server resource.
     */
    ResourceType?: ResourceType;
    /**
     * ID of the AWS account that owns the resource consuming licenses.
     */
    ResourceOwnerId?: String;
    /**
     * Time when the license configuration was associated with the resource.
     */
    AssociationTime?: DateTime;
  }
  export type LicenseConfigurationAssociations = LicenseConfigurationAssociation[];
  export type LicenseConfigurationStatus = "AVAILABLE"|"DISABLED"|string;
  export interface LicenseConfigurationUsage {
    /**
     * Amazon Resource Name (ARN) of the resource.
     */
    ResourceArn?: String;
    /**
     * Type of resource.
     */
    ResourceType?: ResourceType;
    /**
     * Status of the resource.
     */
    ResourceStatus?: String;
    /**
     * ID of the account that owns the resource.
     */
    ResourceOwnerId?: String;
    /**
     * Time when the license configuration was initially associated with the resource.
     */
    AssociationTime?: DateTime;
    /**
     * Number of licenses consumed by the resource.
     */
    ConsumedLicenses?: BoxLong;
  }
  export type LicenseConfigurationUsageList = LicenseConfigurationUsage[];
  export type LicenseConfigurations = LicenseConfiguration[];
  export type LicenseCountingType = "vCPU"|"Instance"|"Core"|"Socket"|string;
  export interface LicenseOperationFailure {
    /**
     * Amazon Resource Name (ARN) of the resource.
     */
    ResourceArn?: String;
    /**
     * Resource type.
     */
    ResourceType?: ResourceType;
    /**
     * Error message.
     */
    ErrorMessage?: String;
    /**
     * Failure time.
     */
    FailureTime?: DateTime;
    /**
     * Name of the operation.
     */
    OperationName?: String;
    /**
     * ID of the AWS account that owns the resource.
     */
    ResourceOwnerId?: String;
    /**
     * The requester is "License Manager Automated Discovery".
     */
    OperationRequestedBy?: String;
    /**
     * Reserved.
     */
    MetadataList?: MetadataList;
  }
  export type LicenseOperationFailureList = LicenseOperationFailure[];
  export interface LicenseSpecification {
    /**
     * Amazon Resource Name (ARN) of the license configuration.
     */
    LicenseConfigurationArn: String;
  }
  export type LicenseSpecifications = LicenseSpecification[];
  export interface ListAssociationsForLicenseConfigurationRequest {
    /**
     * Amazon Resource Name (ARN) of a license configuration.
     */
    LicenseConfigurationArn: String;
    /**
     * Maximum number of results to return in a single call.
     */
    MaxResults?: BoxInteger;
    /**
     * Token for the next set of results.
     */
    NextToken?: String;
  }
  export interface ListAssociationsForLicenseConfigurationResponse {
    /**
     * Information about the associations for the license configuration.
     */
    LicenseConfigurationAssociations?: LicenseConfigurationAssociations;
    /**
     * Token for the next set of results.
     */
    NextToken?: String;
  }
  export interface ListFailuresForLicenseConfigurationOperationsRequest {
    /**
     * Amazon Resource Name of the license configuration.
     */
    LicenseConfigurationArn: String;
    /**
     * Maximum number of results to return in a single call.
     */
    MaxResults?: BoxInteger;
    /**
     * Token for the next set of results.
     */
    NextToken?: String;
  }
  export interface ListFailuresForLicenseConfigurationOperationsResponse {
    /**
     * License configuration operations that failed.
     */
    LicenseOperationFailureList?: LicenseOperationFailureList;
    /**
     * Token for the next set of results.
     */
    NextToken?: String;
  }
  export interface ListLicenseConfigurationsRequest {
    /**
     * Amazon Resource Names (ARN) of the license configurations.
     */
    LicenseConfigurationArns?: StringList;
    /**
     * Maximum number of results to return in a single call.
     */
    MaxResults?: BoxInteger;
    /**
     * Token for the next set of results.
     */
    NextToken?: String;
    /**
     * Filters to scope the results. The following filters and logical operators are supported:    licenseCountingType - The dimension on which licenses are counted. Possible values are vCPU | Instance | Core | Socket. Logical operators are EQUALS | NOT_EQUALS.    enforceLicenseCount - A Boolean value that indicates whether hard license enforcement is used. Logical operators are EQUALS | NOT_EQUALS.    usagelimitExceeded - A Boolean value that indicates whether the available licenses have been exceeded. Logical operators are EQUALS | NOT_EQUALS.  
     */
    Filters?: Filters;
  }
  export interface ListLicenseConfigurationsResponse {
    /**
     * Information about the license configurations.
     */
    LicenseConfigurations?: LicenseConfigurations;
    /**
     * Token for the next set of results.
     */
    NextToken?: String;
  }
  export interface ListLicenseSpecificationsForResourceRequest {
    /**
     * Amazon Resource Name (ARN) of a resource that has an associated license configuration.
     */
    ResourceArn: String;
    /**
     * Maximum number of results to return in a single call.
     */
    MaxResults?: BoxInteger;
    /**
     * Token for the next set of results.
     */
    NextToken?: String;
  }
  export interface ListLicenseSpecificationsForResourceResponse {
    /**
     * License configurations associated with a resource.
     */
    LicenseSpecifications?: LicenseSpecifications;
    /**
     * Token for the next set of results.
     */
    NextToken?: String;
  }
  export interface ListResourceInventoryRequest {
    /**
     * Maximum number of results to return in a single call.
     */
    MaxResults?: BoxInteger;
    /**
     * Token for the next set of results.
     */
    NextToken?: String;
    /**
     * Filters to scope the results. The following filters and logical operators are supported:    account_id - The ID of the AWS account that owns the resource. Logical operators are EQUALS | NOT_EQUALS.    application_name - The name of the application. Logical operators are EQUALS | BEGINS_WITH.    license_included - The type of license included. Logical operators are EQUALS | NOT_EQUALS. Possible values are sql-server-enterprise | sql-server-standard | sql-server-web | windows-server-datacenter.    platform - The platform of the resource. Logical operators are EQUALS | BEGINS_WITH.    resource_id - The ID of the resource. Logical operators are EQUALS | NOT_EQUALS.  
     */
    Filters?: InventoryFilterList;
  }
  export interface ListResourceInventoryResponse {
    /**
     * Information about the resources.
     */
    ResourceInventoryList?: ResourceInventoryList;
    /**
     * Token for the next set of results.
     */
    NextToken?: String;
  }
  export interface ListTagsForResourceRequest {
    /**
     * Amazon Resource Name (ARN) of the license configuration.
     */
    ResourceArn: String;
  }
  export interface ListTagsForResourceResponse {
    /**
     * Information about the tags.
     */
    Tags?: TagList;
  }
  export interface ListUsageForLicenseConfigurationRequest {
    /**
     * Amazon Resource Name (ARN) of the license configuration.
     */
    LicenseConfigurationArn: String;
    /**
     * Maximum number of results to return in a single call.
     */
    MaxResults?: BoxInteger;
    /**
     * Token for the next set of results.
     */
    NextToken?: String;
    /**
     * Filters to scope the results. The following filters and logical operators are supported:    resourceArn - The ARN of the license configuration resource. Logical operators are EQUALS | NOT_EQUALS.    resourceType - The resource type (EC2_INSTANCE | EC2_HOST | EC2_AMI | SYSTEMS_MANAGER_MANAGED_INSTANCE). Logical operators are EQUALS | NOT_EQUALS.    resourceAccount - The ID of the account that owns the resource. Logical operators are EQUALS | NOT_EQUALS.  
     */
    Filters?: Filters;
  }
  export interface ListUsageForLicenseConfigurationResponse {
    /**
     * Information about the license configurations.
     */
    LicenseConfigurationUsageList?: LicenseConfigurationUsageList;
    /**
     * Token for the next set of results.
     */
    NextToken?: String;
  }
  export interface ManagedResourceSummary {
    /**
     * Type of resource associated with a license.
     */
    ResourceType?: ResourceType;
    /**
     * Number of resources associated with licenses.
     */
    AssociationCount?: BoxLong;
  }
  export type ManagedResourceSummaryList = ManagedResourceSummary[];
  export interface Metadata {
    /**
     * Reserved.
     */
    Name?: String;
    /**
     * Reserved.
     */
    Value?: String;
  }
  export type MetadataList = Metadata[];
  export interface OrganizationConfiguration {
    /**
     * Enables AWS Organization integration.
     */
    EnableIntegration: Boolean;
  }
  export interface ProductInformation {
    /**
     * Resource type. The possible values are SSM_MANAGED | RDS.
     */
    ResourceType: String;
    /**
     * Product information filters. The following filters and logical operators are supported when the resource type is SSM_MANAGED:    Application Name - The name of the application. Logical operator is EQUALS.    Application Publisher - The publisher of the application. Logical operator is EQUALS.    Application Version - The version of the application. Logical operator is EQUALS.    Platform Name - The name of the platform. Logical operator is EQUALS.    Platform Type - The platform type. Logical operator is EQUALS.    License Included - The type of license included. Logical operators are EQUALS and NOT_EQUALS. Possible values are: sql-server-enterprise | sql-server-standard | sql-server-web | windows-server-datacenter.   The following filters and logical operators are supported when the resource type is RDS:    Engine Edition - The edition of the database engine. Logical operator is EQUALS. Possible values are: oracle-ee | oracle-se | oracle-se1 | oracle-se2.    License Pack - The license pack. Logical operator is EQUALS. Possible values are: data guard | diagnostic pack sqlt | tuning pack sqlt | ols | olap.  
     */
    ProductInformationFilterList: ProductInformationFilterList;
  }
  export interface ProductInformationFilter {
    /**
     * Filter name.
     */
    ProductInformationFilterName: String;
    /**
     * Filter value.
     */
    ProductInformationFilterValue: StringList;
    /**
     * Logical operator.
     */
    ProductInformationFilterComparator: String;
  }
  export type ProductInformationFilterList = ProductInformationFilter[];
  export type ProductInformationList = ProductInformation[];
  export interface ResourceInventory {
    /**
     * ID of the resource.
     */
    ResourceId?: String;
    /**
     * Type of resource.
     */
    ResourceType?: ResourceType;
    /**
     * Amazon Resource Name (ARN) of the resource.
     */
    ResourceArn?: String;
    /**
     * Platform of the resource.
     */
    Platform?: String;
    /**
     * Platform version of the resource in the inventory.
     */
    PlatformVersion?: String;
    /**
     * ID of the account that owns the resource.
     */
    ResourceOwningAccountId?: String;
  }
  export type ResourceInventoryList = ResourceInventory[];
  export type ResourceType = "EC2_INSTANCE"|"EC2_HOST"|"EC2_AMI"|"RDS"|"SYSTEMS_MANAGER_MANAGED_INSTANCE"|string;
  export type String = string;
  export type StringList = String[];
  export interface Tag {
    /**
     * Tag key.
     */
    Key?: String;
    /**
     * Tag value.
     */
    Value?: String;
  }
  export type TagKeyList = String[];
  export type TagList = Tag[];
  export interface TagResourceRequest {
    /**
     * Amazon Resource Name (ARN) of the license configuration.
     */
    ResourceArn: String;
    /**
     * One or more tags.
     */
    Tags: TagList;
  }
  export interface TagResourceResponse {
  }
  export interface UntagResourceRequest {
    /**
     * Amazon Resource Name (ARN) of the license configuration.
     */
    ResourceArn: String;
    /**
     * Keys identifying the tags to remove.
     */
    TagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateLicenseConfigurationRequest {
    /**
     * Amazon Resource Name (ARN) of the license configuration.
     */
    LicenseConfigurationArn: String;
    /**
     * New status of the license configuration.
     */
    LicenseConfigurationStatus?: LicenseConfigurationStatus;
    /**
     * New license rule. The only rule that you can add after you create a license configuration is licenseAffinityToHost.
     */
    LicenseRules?: StringList;
    /**
     * New number of licenses managed by the license configuration.
     */
    LicenseCount?: BoxLong;
    /**
     * New hard limit of the number of available licenses.
     */
    LicenseCountHardLimit?: BoxBoolean;
    /**
     * New name of the license configuration.
     */
    Name?: String;
    /**
     * New description of the license configuration.
     */
    Description?: String;
    /**
     * New product information.
     */
    ProductInformationList?: ProductInformationList;
  }
  export interface UpdateLicenseConfigurationResponse {
  }
  export interface UpdateLicenseSpecificationsForResourceRequest {
    /**
     * Amazon Resource Name (ARN) of the AWS resource.
     */
    ResourceArn: String;
    /**
     * ARNs of the license configurations to add.
     */
    AddLicenseSpecifications?: LicenseSpecifications;
    /**
     * ARNs of the license configurations to remove.
     */
    RemoveLicenseSpecifications?: LicenseSpecifications;
  }
  export interface UpdateLicenseSpecificationsForResourceResponse {
  }
  export interface UpdateServiceSettingsRequest {
    /**
     * Amazon Resource Name (ARN) of the Amazon S3 bucket where the License Manager information is stored.
     */
    S3BucketArn?: String;
    /**
     * Amazon Resource Name (ARN) of the Amazon SNS topic used for License Manager alerts.
     */
    SnsTopicArn?: String;
    /**
     * Enables integration with AWS Organizations for cross-account discovery.
     */
    OrganizationConfiguration?: OrganizationConfiguration;
    /**
     * Activates cross-account discovery.
     */
    EnableCrossAccountsDiscovery?: BoxBoolean;
  }
  export interface UpdateServiceSettingsResponse {
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-08-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the LicenseManager client.
   */
  export import Types = LicenseManager;
}
export = LicenseManager;
