import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class LicenseManager extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: LicenseManager.Types.ClientConfiguration)
  config: Config & LicenseManager.Types.ClientConfiguration;
  /**
   * Creates a new license configuration object. A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (licensing by instance, socket, CPU, or VCPU), tenancy (shared tenancy, Amazon EC2 Dedicated Instance, Amazon EC2 Dedicated Host, or any of these), host affinity (how long a VM must be associated with a host), the number of licenses purchased and used.
   */
  createLicenseConfiguration(params: LicenseManager.Types.CreateLicenseConfigurationRequest, callback?: (err: AWSError, data: LicenseManager.Types.CreateLicenseConfigurationResponse) => void): Request<LicenseManager.Types.CreateLicenseConfigurationResponse, AWSError>;
  /**
   * Creates a new license configuration object. A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (licensing by instance, socket, CPU, or VCPU), tenancy (shared tenancy, Amazon EC2 Dedicated Instance, Amazon EC2 Dedicated Host, or any of these), host affinity (how long a VM must be associated with a host), the number of licenses purchased and used.
   */
  createLicenseConfiguration(callback?: (err: AWSError, data: LicenseManager.Types.CreateLicenseConfigurationResponse) => void): Request<LicenseManager.Types.CreateLicenseConfigurationResponse, AWSError>;
  /**
   * Deletes an existing license configuration. This action fails if the configuration is in use.
   */
  deleteLicenseConfiguration(params: LicenseManager.Types.DeleteLicenseConfigurationRequest, callback?: (err: AWSError, data: LicenseManager.Types.DeleteLicenseConfigurationResponse) => void): Request<LicenseManager.Types.DeleteLicenseConfigurationResponse, AWSError>;
  /**
   * Deletes an existing license configuration. This action fails if the configuration is in use.
   */
  deleteLicenseConfiguration(callback?: (err: AWSError, data: LicenseManager.Types.DeleteLicenseConfigurationResponse) => void): Request<LicenseManager.Types.DeleteLicenseConfigurationResponse, AWSError>;
  /**
   * Returns a detailed description of a license configuration.
   */
  getLicenseConfiguration(params: LicenseManager.Types.GetLicenseConfigurationRequest, callback?: (err: AWSError, data: LicenseManager.Types.GetLicenseConfigurationResponse) => void): Request<LicenseManager.Types.GetLicenseConfigurationResponse, AWSError>;
  /**
   * Returns a detailed description of a license configuration.
   */
  getLicenseConfiguration(callback?: (err: AWSError, data: LicenseManager.Types.GetLicenseConfigurationResponse) => void): Request<LicenseManager.Types.GetLicenseConfigurationResponse, AWSError>;
  /**
   * Gets License Manager settings for a region. Exposes the configured S3 bucket, SNS topic, etc., for inspection. 
   */
  getServiceSettings(params: LicenseManager.Types.GetServiceSettingsRequest, callback?: (err: AWSError, data: LicenseManager.Types.GetServiceSettingsResponse) => void): Request<LicenseManager.Types.GetServiceSettingsResponse, AWSError>;
  /**
   * Gets License Manager settings for a region. Exposes the configured S3 bucket, SNS topic, etc., for inspection. 
   */
  getServiceSettings(callback?: (err: AWSError, data: LicenseManager.Types.GetServiceSettingsResponse) => void): Request<LicenseManager.Types.GetServiceSettingsResponse, AWSError>;
  /**
   * Lists the resource associations for a license configuration. Resource associations need not consume licenses from a license configuration. For example, an AMI or a stopped instance may not consume a license (depending on the license rules). Use this operation to find all resources associated with a license configuration.
   */
  listAssociationsForLicenseConfiguration(params: LicenseManager.Types.ListAssociationsForLicenseConfigurationRequest, callback?: (err: AWSError, data: LicenseManager.Types.ListAssociationsForLicenseConfigurationResponse) => void): Request<LicenseManager.Types.ListAssociationsForLicenseConfigurationResponse, AWSError>;
  /**
   * Lists the resource associations for a license configuration. Resource associations need not consume licenses from a license configuration. For example, an AMI or a stopped instance may not consume a license (depending on the license rules). Use this operation to find all resources associated with a license configuration.
   */
  listAssociationsForLicenseConfiguration(callback?: (err: AWSError, data: LicenseManager.Types.ListAssociationsForLicenseConfigurationResponse) => void): Request<LicenseManager.Types.ListAssociationsForLicenseConfigurationResponse, AWSError>;
  /**
   * Lists license configuration objects for an account, each containing the name, description, license type, and other license terms modeled from a license agreement.
   */
  listLicenseConfigurations(params: LicenseManager.Types.ListLicenseConfigurationsRequest, callback?: (err: AWSError, data: LicenseManager.Types.ListLicenseConfigurationsResponse) => void): Request<LicenseManager.Types.ListLicenseConfigurationsResponse, AWSError>;
  /**
   * Lists license configuration objects for an account, each containing the name, description, license type, and other license terms modeled from a license agreement.
   */
  listLicenseConfigurations(callback?: (err: AWSError, data: LicenseManager.Types.ListLicenseConfigurationsResponse) => void): Request<LicenseManager.Types.ListLicenseConfigurationsResponse, AWSError>;
  /**
   * Returns the license configuration for a resource.
   */
  listLicenseSpecificationsForResource(params: LicenseManager.Types.ListLicenseSpecificationsForResourceRequest, callback?: (err: AWSError, data: LicenseManager.Types.ListLicenseSpecificationsForResourceResponse) => void): Request<LicenseManager.Types.ListLicenseSpecificationsForResourceResponse, AWSError>;
  /**
   * Returns the license configuration for a resource.
   */
  listLicenseSpecificationsForResource(callback?: (err: AWSError, data: LicenseManager.Types.ListLicenseSpecificationsForResourceResponse) => void): Request<LicenseManager.Types.ListLicenseSpecificationsForResourceResponse, AWSError>;
  /**
   * Returns a detailed list of resources.
   */
  listResourceInventory(params: LicenseManager.Types.ListResourceInventoryRequest, callback?: (err: AWSError, data: LicenseManager.Types.ListResourceInventoryResponse) => void): Request<LicenseManager.Types.ListResourceInventoryResponse, AWSError>;
  /**
   * Returns a detailed list of resources.
   */
  listResourceInventory(callback?: (err: AWSError, data: LicenseManager.Types.ListResourceInventoryResponse) => void): Request<LicenseManager.Types.ListResourceInventoryResponse, AWSError>;
  /**
   * Lists tags attached to a resource.
   */
  listTagsForResource(params: LicenseManager.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: LicenseManager.Types.ListTagsForResourceResponse) => void): Request<LicenseManager.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists tags attached to a resource.
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
   * Attach one of more tags to any resource.
   */
  tagResource(params: LicenseManager.Types.TagResourceRequest, callback?: (err: AWSError, data: LicenseManager.Types.TagResourceResponse) => void): Request<LicenseManager.Types.TagResourceResponse, AWSError>;
  /**
   * Attach one of more tags to any resource.
   */
  tagResource(callback?: (err: AWSError, data: LicenseManager.Types.TagResourceResponse) => void): Request<LicenseManager.Types.TagResourceResponse, AWSError>;
  /**
   * Remove tags from a resource.
   */
  untagResource(params: LicenseManager.Types.UntagResourceRequest, callback?: (err: AWSError, data: LicenseManager.Types.UntagResourceResponse) => void): Request<LicenseManager.Types.UntagResourceResponse, AWSError>;
  /**
   * Remove tags from a resource.
   */
  untagResource(callback?: (err: AWSError, data: LicenseManager.Types.UntagResourceResponse) => void): Request<LicenseManager.Types.UntagResourceResponse, AWSError>;
  /**
   * Modifies the attributes of an existing license configuration object. A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (Instances, cores, sockets, VCPUs), tenancy (shared or Dedicated Host), host affinity (how long a VM is associated with a host), the number of licenses purchased and used.
   */
  updateLicenseConfiguration(params: LicenseManager.Types.UpdateLicenseConfigurationRequest, callback?: (err: AWSError, data: LicenseManager.Types.UpdateLicenseConfigurationResponse) => void): Request<LicenseManager.Types.UpdateLicenseConfigurationResponse, AWSError>;
  /**
   * Modifies the attributes of an existing license configuration object. A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (Instances, cores, sockets, VCPUs), tenancy (shared or Dedicated Host), host affinity (how long a VM is associated with a host), the number of licenses purchased and used.
   */
  updateLicenseConfiguration(callback?: (err: AWSError, data: LicenseManager.Types.UpdateLicenseConfigurationResponse) => void): Request<LicenseManager.Types.UpdateLicenseConfigurationResponse, AWSError>;
  /**
   * Adds or removes license configurations for a specified AWS resource. This operation currently supports updating the license specifications of AMIs, instances, and hosts. Launch templates and AWS CloudFormation templates are not managed from this operation as those resources send the license configurations directly to a resource creation operation, such as RunInstances.
   */
  updateLicenseSpecificationsForResource(params: LicenseManager.Types.UpdateLicenseSpecificationsForResourceRequest, callback?: (err: AWSError, data: LicenseManager.Types.UpdateLicenseSpecificationsForResourceResponse) => void): Request<LicenseManager.Types.UpdateLicenseSpecificationsForResourceResponse, AWSError>;
  /**
   * Adds or removes license configurations for a specified AWS resource. This operation currently supports updating the license specifications of AMIs, instances, and hosts. Launch templates and AWS CloudFormation templates are not managed from this operation as those resources send the license configurations directly to a resource creation operation, such as RunInstances.
   */
  updateLicenseSpecificationsForResource(callback?: (err: AWSError, data: LicenseManager.Types.UpdateLicenseSpecificationsForResourceResponse) => void): Request<LicenseManager.Types.UpdateLicenseSpecificationsForResourceResponse, AWSError>;
  /**
   * Updates License Manager service settings.
   */
  updateServiceSettings(params: LicenseManager.Types.UpdateServiceSettingsRequest, callback?: (err: AWSError, data: LicenseManager.Types.UpdateServiceSettingsResponse) => void): Request<LicenseManager.Types.UpdateServiceSettingsResponse, AWSError>;
  /**
   * Updates License Manager service settings.
   */
  updateServiceSettings(callback?: (err: AWSError, data: LicenseManager.Types.UpdateServiceSettingsResponse) => void): Request<LicenseManager.Types.UpdateServiceSettingsResponse, AWSError>;
}
declare namespace LicenseManager {
  export type Boolean = boolean;
  export type BoxBoolean = boolean;
  export type BoxInteger = number;
  export type BoxLong = number;
  export interface ConsumedLicenseSummary {
    /**
     * Resource type of the resource consuming a license (instance, host, or AMI).
     */
    ResourceType?: ResourceType;
    /**
     * Number of licenses consumed by a resource.
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
     * Human-friendly description of the license configuration.
     */
    Description?: String;
    /**
     * Dimension to use to track the license inventory.
     */
    LicenseCountingType: LicenseCountingType;
    /**
     * Number of licenses managed by the license configuration.
     */
    LicenseCount?: BoxLong;
    /**
     * Flag indicating whether hard or soft license enforcement is used. Exceeding a hard limit results in the blocked deployment of new instances.
     */
    LicenseCountHardLimit?: BoxBoolean;
    /**
     * Array of configured License Manager rules.
     */
    LicenseRules?: StringList;
    /**
     * The tags to apply to the resources during launch. You can only tag instances and volumes on launch. The specified tags are applied to all instances or volumes that are created during launch. To tag a resource after it has been created, see CreateTags . 
     */
    Tags?: TagList;
  }
  export interface CreateLicenseConfigurationResponse {
    /**
     * ARN of the license configuration object after its creation.
     */
    LicenseConfigurationArn?: String;
  }
  export type DateTime = Date;
  export interface DeleteLicenseConfigurationRequest {
    /**
     * Unique ID of the configuration object to delete.
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
     * One or more filter values. Filter values are case-sensitive.
     */
    Values?: FilterValues;
  }
  export type FilterName = string;
  export type FilterValue = string;
  export type FilterValues = FilterValue[];
  export type Filters = Filter[];
  export interface GetLicenseConfigurationRequest {
    /**
     * ARN of the license configuration being requested.
     */
    LicenseConfigurationArn: String;
  }
  export interface GetLicenseConfigurationResponse {
    /**
     * Unique ID for the license configuration.
     */
    LicenseConfigurationId?: String;
    /**
     * ARN of the license configuration requested.
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
     * Dimension on which the licenses are counted (for example, instances, cores, sockets, or VCPUs).
     */
    LicenseCountingType?: LicenseCountingType;
    /**
     * List of flexible text strings designating license rules.
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
     * License configuration status (active, etc.).
     */
    Status?: String;
    /**
     * Owner account ID for the license configuration.
     */
    OwnerAccountId?: String;
    /**
     * List of summaries for consumed licenses used by various resources.
     */
    ConsumedLicenseSummaryList?: ConsumedLicenseSummaryList;
    /**
     * List of summaries of managed resources.
     */
    ManagedResourceSummaryList?: ManagedResourceSummaryList;
    /**
     * List of tags attached to the license configuration.
     */
    Tags?: TagList;
  }
  export interface GetServiceSettingsRequest {
  }
  export interface GetServiceSettingsResponse {
    /**
     * Regional S3 bucket path for storing reports, license trail event data, discovery data, etc.
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
  }
  export interface InventoryFilter {
    /**
     * The name of the filter.
     */
    Name: String;
    /**
     * The condition of the filter.
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
     * Unique ID of the LicenseConfiguration object.
     */
    LicenseConfigurationId?: String;
    /**
     * ARN of the LicenseConfiguration object.
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
     * Dimension to use to track license inventory.
     */
    LicenseCountingType?: LicenseCountingType;
    /**
     * Array of configured License Manager rules.
     */
    LicenseRules?: StringList;
    /**
     * Number of licenses managed by the license configuration.
     */
    LicenseCount?: BoxLong;
    /**
     * Sets the number of available licenses as a hard limit.
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
     * List of summaries for licenses consumed by various resources.
     */
    ConsumedLicenseSummaryList?: ConsumedLicenseSummaryList;
    /**
     * List of summaries for managed resources.
     */
    ManagedResourceSummaryList?: ManagedResourceSummaryList;
  }
  export interface LicenseConfigurationAssociation {
    /**
     * ARN of the resource associated with the license configuration.
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
     * ARN of the resource associated with a license configuration.
     */
    ResourceArn?: String;
    /**
     * Type of resource associated with athe license configuration.
     */
    ResourceType?: ResourceType;
    /**
     * Status of a resource associated with the license configuration.
     */
    ResourceStatus?: String;
    /**
     * ID of the account that owns a resource that is associated with the license configuration.
     */
    ResourceOwnerId?: String;
    /**
     * Time when the license configuration was initially associated with a resource.
     */
    AssociationTime?: DateTime;
    /**
     * Number of licenses consumed out of the total provisioned in the license configuration.
     */
    ConsumedLicenses?: BoxLong;
  }
  export type LicenseConfigurationUsageList = LicenseConfigurationUsage[];
  export type LicenseConfigurations = LicenseConfiguration[];
  export type LicenseCountingType = "vCPU"|"Instance"|"Core"|"Socket"|string;
  export interface LicenseSpecification {
    /**
     * ARN of the LicenseConfiguration object.
     */
    LicenseConfigurationArn: String;
  }
  export type LicenseSpecifications = LicenseSpecification[];
  export interface ListAssociationsForLicenseConfigurationRequest {
    /**
     * ARN of a LicenseConfiguration object.
     */
    LicenseConfigurationArn: String;
    /**
     * Maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned NextToken value.
     */
    MaxResults?: BoxInteger;
    /**
     * Token for the next set of results.
     */
    NextToken?: String;
  }
  export interface ListAssociationsForLicenseConfigurationResponse {
    /**
     * Lists association objects for the license configuration, each containing the association time, number of consumed licenses, resource ARN, resource ID, account ID that owns the resource, resource size, and resource type.
     */
    LicenseConfigurationAssociations?: LicenseConfigurationAssociations;
    /**
     * Token for the next set of results.
     */
    NextToken?: String;
  }
  export interface ListLicenseConfigurationsRequest {
    /**
     * An array of ARNs for the calling account’s license configurations.
     */
    LicenseConfigurationArns?: StringList;
    /**
     * Maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned NextToken value.
     */
    MaxResults?: BoxInteger;
    /**
     * Token for the next set of results.
     */
    NextToken?: String;
    /**
     * One or more filters.
     */
    Filters?: Filters;
  }
  export interface ListLicenseConfigurationsResponse {
    /**
     * Array of license configuration objects.
     */
    LicenseConfigurations?: LicenseConfigurations;
    /**
     * Token for the next set of results.
     */
    NextToken?: String;
  }
  export interface ListLicenseSpecificationsForResourceRequest {
    /**
     * ARN of an AMI or Amazon EC2 instance that has an associated license configuration.
     */
    ResourceArn: String;
    /**
     * Maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned NextToken value.
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
     * Maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned NextToken value.
     */
    MaxResults?: BoxInteger;
    /**
     * Token for the next set of results.
     */
    NextToken?: String;
    /**
     * One or more filters.
     */
    Filters?: InventoryFilterList;
  }
  export interface ListResourceInventoryResponse {
    /**
     * The detailed list of resources.
     */
    ResourceInventoryList?: ResourceInventoryList;
    /**
     * Token for the next set of results.
     */
    NextToken?: String;
  }
  export interface ListTagsForResourceRequest {
    /**
     * ARN for the resource.
     */
    ResourceArn: String;
  }
  export interface ListTagsForResourceResponse {
    /**
     * List of tags attached to the resource.
     */
    Tags?: TagList;
  }
  export interface ListUsageForLicenseConfigurationRequest {
    /**
     * ARN of the targeted LicenseConfiguration object.
     */
    LicenseConfigurationArn: String;
    /**
     * Maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned NextToken value.
     */
    MaxResults?: BoxInteger;
    /**
     * Token for the next set of results.
     */
    NextToken?: String;
    /**
     * List of filters to apply.
     */
    Filters?: Filters;
  }
  export interface ListUsageForLicenseConfigurationResponse {
    /**
     * An array of LicenseConfigurationUsage objects.
     */
    LicenseConfigurationUsageList?: LicenseConfigurationUsageList;
    /**
     * Token for the next set of results.
     */
    NextToken?: String;
  }
  export interface ManagedResourceSummary {
    /**
     * Type of resource associated with a license (instance, host, or AMI).
     */
    ResourceType?: ResourceType;
    /**
     * Number of resources associated with licenses.
     */
    AssociationCount?: BoxLong;
  }
  export type ManagedResourceSummaryList = ManagedResourceSummary[];
  export interface OrganizationConfiguration {
    /**
     * Flag to activate AWS Organization integration.
     */
    EnableIntegration: Boolean;
  }
  export interface ResourceInventory {
    /**
     * Unique ID of the resource.
     */
    ResourceId?: String;
    /**
     * The type of resource.
     */
    ResourceType?: ResourceType;
    /**
     * The ARN of the resource.
     */
    ResourceArn?: String;
    /**
     * The platform of the resource.
     */
    Platform?: String;
    /**
     * Platform version of the resource in the inventory.
     */
    PlatformVersion?: String;
    /**
     * Unique ID of the account that owns the resource.
     */
    ResourceOwningAccountId?: String;
  }
  export type ResourceInventoryList = ResourceInventory[];
  export type ResourceType = "EC2_INSTANCE"|"EC2_HOST"|"EC2_AMI"|string;
  export type String = string;
  export type StringList = String[];
  export interface Tag {
    /**
     * Key for the resource tag.
     */
    Key?: String;
    /**
     * Value for the resource tag.
     */
    Value?: String;
  }
  export type TagKeyList = String[];
  export type TagList = Tag[];
  export interface TagResourceRequest {
    /**
     * Resource of the ARN to be tagged.
     */
    ResourceArn: String;
    /**
     * Names of the tags to attach to the resource.
     */
    Tags: TagList;
  }
  export interface TagResourceResponse {
  }
  export interface UntagResourceRequest {
    /**
     * ARN of the resource.
     */
    ResourceArn: String;
    /**
     * List keys identifying tags to remove.
     */
    TagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateLicenseConfigurationRequest {
    /**
     * ARN for a license configuration.
     */
    LicenseConfigurationArn: String;
    /**
     * New status of the license configuration (ACTIVE or INACTIVE).
     */
    LicenseConfigurationStatus?: LicenseConfigurationStatus;
    /**
     * List of flexible text strings designating license rules.
     */
    LicenseRules?: StringList;
    /**
     * New number of licenses managed by the license configuration.
     */
    LicenseCount?: BoxLong;
    /**
     * Sets the number of available licenses as a hard limit.
     */
    LicenseCountHardLimit?: BoxBoolean;
    /**
     * New name of the license configuration.
     */
    Name?: String;
    /**
     * New human-friendly description of the license configuration.
     */
    Description?: String;
  }
  export interface UpdateLicenseConfigurationResponse {
  }
  export interface UpdateLicenseSpecificationsForResourceRequest {
    /**
     * ARN for an AWS server resource.
     */
    ResourceArn: String;
    /**
     * License configuration ARNs to be added to a resource.
     */
    AddLicenseSpecifications?: LicenseSpecifications;
    /**
     * License configuration ARNs to be removed from a resource.
     */
    RemoveLicenseSpecifications?: LicenseSpecifications;
  }
  export interface UpdateLicenseSpecificationsForResourceResponse {
  }
  export interface UpdateServiceSettingsRequest {
    /**
     * ARN of the Amazon S3 bucket where License Manager information is stored.
     */
    S3BucketArn?: String;
    /**
     * ARN of the Amazon SNS topic used for License Manager alerts.
     */
    SnsTopicArn?: String;
    /**
     * Integrates AWS Organizations with License Manager for cross-account discovery.
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
