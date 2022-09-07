import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class Inspector2 extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Inspector2.Types.ClientConfiguration)
  config: Config & Inspector2.Types.ClientConfiguration;
  /**
   * Associates an Amazon Web Services account with an Amazon Inspector delegated administrator.
   */
  associateMember(params: Inspector2.Types.AssociateMemberRequest, callback?: (err: AWSError, data: Inspector2.Types.AssociateMemberResponse) => void): Request<Inspector2.Types.AssociateMemberResponse, AWSError>;
  /**
   * Associates an Amazon Web Services account with an Amazon Inspector delegated administrator.
   */
  associateMember(callback?: (err: AWSError, data: Inspector2.Types.AssociateMemberResponse) => void): Request<Inspector2.Types.AssociateMemberResponse, AWSError>;
  /**
   * Retrieves the Amazon Inspector status of multiple Amazon Web Services accounts within your environment.
   */
  batchGetAccountStatus(params: Inspector2.Types.BatchGetAccountStatusRequest, callback?: (err: AWSError, data: Inspector2.Types.BatchGetAccountStatusResponse) => void): Request<Inspector2.Types.BatchGetAccountStatusResponse, AWSError>;
  /**
   * Retrieves the Amazon Inspector status of multiple Amazon Web Services accounts within your environment.
   */
  batchGetAccountStatus(callback?: (err: AWSError, data: Inspector2.Types.BatchGetAccountStatusResponse) => void): Request<Inspector2.Types.BatchGetAccountStatusResponse, AWSError>;
  /**
   * Gets free trial status for multiple Amazon Web Services accounts.
   */
  batchGetFreeTrialInfo(params: Inspector2.Types.BatchGetFreeTrialInfoRequest, callback?: (err: AWSError, data: Inspector2.Types.BatchGetFreeTrialInfoResponse) => void): Request<Inspector2.Types.BatchGetFreeTrialInfoResponse, AWSError>;
  /**
   * Gets free trial status for multiple Amazon Web Services accounts.
   */
  batchGetFreeTrialInfo(callback?: (err: AWSError, data: Inspector2.Types.BatchGetFreeTrialInfoResponse) => void): Request<Inspector2.Types.BatchGetFreeTrialInfoResponse, AWSError>;
  /**
   * Cancels the given findings report.
   */
  cancelFindingsReport(params: Inspector2.Types.CancelFindingsReportRequest, callback?: (err: AWSError, data: Inspector2.Types.CancelFindingsReportResponse) => void): Request<Inspector2.Types.CancelFindingsReportResponse, AWSError>;
  /**
   * Cancels the given findings report.
   */
  cancelFindingsReport(callback?: (err: AWSError, data: Inspector2.Types.CancelFindingsReportResponse) => void): Request<Inspector2.Types.CancelFindingsReportResponse, AWSError>;
  /**
   * Creates a filter resource using specified filter criteria.
   */
  createFilter(params: Inspector2.Types.CreateFilterRequest, callback?: (err: AWSError, data: Inspector2.Types.CreateFilterResponse) => void): Request<Inspector2.Types.CreateFilterResponse, AWSError>;
  /**
   * Creates a filter resource using specified filter criteria.
   */
  createFilter(callback?: (err: AWSError, data: Inspector2.Types.CreateFilterResponse) => void): Request<Inspector2.Types.CreateFilterResponse, AWSError>;
  /**
   * Creates a finding report.
   */
  createFindingsReport(params: Inspector2.Types.CreateFindingsReportRequest, callback?: (err: AWSError, data: Inspector2.Types.CreateFindingsReportResponse) => void): Request<Inspector2.Types.CreateFindingsReportResponse, AWSError>;
  /**
   * Creates a finding report.
   */
  createFindingsReport(callback?: (err: AWSError, data: Inspector2.Types.CreateFindingsReportResponse) => void): Request<Inspector2.Types.CreateFindingsReportResponse, AWSError>;
  /**
   * Deletes a filter resource.
   */
  deleteFilter(params: Inspector2.Types.DeleteFilterRequest, callback?: (err: AWSError, data: Inspector2.Types.DeleteFilterResponse) => void): Request<Inspector2.Types.DeleteFilterResponse, AWSError>;
  /**
   * Deletes a filter resource.
   */
  deleteFilter(callback?: (err: AWSError, data: Inspector2.Types.DeleteFilterResponse) => void): Request<Inspector2.Types.DeleteFilterResponse, AWSError>;
  /**
   * Describe Amazon Inspector configuration settings for an Amazon Web Services organization
   */
  describeOrganizationConfiguration(params: Inspector2.Types.DescribeOrganizationConfigurationRequest, callback?: (err: AWSError, data: Inspector2.Types.DescribeOrganizationConfigurationResponse) => void): Request<Inspector2.Types.DescribeOrganizationConfigurationResponse, AWSError>;
  /**
   * Describe Amazon Inspector configuration settings for an Amazon Web Services organization
   */
  describeOrganizationConfiguration(callback?: (err: AWSError, data: Inspector2.Types.DescribeOrganizationConfigurationResponse) => void): Request<Inspector2.Types.DescribeOrganizationConfigurationResponse, AWSError>;
  /**
   * Disables Amazon Inspector scans for one or more Amazon Web Services accounts. Disabling all scan types in an account disables the Amazon Inspector service.
   */
  disable(params: Inspector2.Types.DisableRequest, callback?: (err: AWSError, data: Inspector2.Types.DisableResponse) => void): Request<Inspector2.Types.DisableResponse, AWSError>;
  /**
   * Disables Amazon Inspector scans for one or more Amazon Web Services accounts. Disabling all scan types in an account disables the Amazon Inspector service.
   */
  disable(callback?: (err: AWSError, data: Inspector2.Types.DisableResponse) => void): Request<Inspector2.Types.DisableResponse, AWSError>;
  /**
   * Disables the Amazon Inspector delegated administrator for your organization.
   */
  disableDelegatedAdminAccount(params: Inspector2.Types.DisableDelegatedAdminAccountRequest, callback?: (err: AWSError, data: Inspector2.Types.DisableDelegatedAdminAccountResponse) => void): Request<Inspector2.Types.DisableDelegatedAdminAccountResponse, AWSError>;
  /**
   * Disables the Amazon Inspector delegated administrator for your organization.
   */
  disableDelegatedAdminAccount(callback?: (err: AWSError, data: Inspector2.Types.DisableDelegatedAdminAccountResponse) => void): Request<Inspector2.Types.DisableDelegatedAdminAccountResponse, AWSError>;
  /**
   * Disassociates a member account from an Amazon Inspector delegated administrator.
   */
  disassociateMember(params: Inspector2.Types.DisassociateMemberRequest, callback?: (err: AWSError, data: Inspector2.Types.DisassociateMemberResponse) => void): Request<Inspector2.Types.DisassociateMemberResponse, AWSError>;
  /**
   * Disassociates a member account from an Amazon Inspector delegated administrator.
   */
  disassociateMember(callback?: (err: AWSError, data: Inspector2.Types.DisassociateMemberResponse) => void): Request<Inspector2.Types.DisassociateMemberResponse, AWSError>;
  /**
   * Enables Amazon Inspector scans for one or more Amazon Web Services accounts.
   */
  enable(params: Inspector2.Types.EnableRequest, callback?: (err: AWSError, data: Inspector2.Types.EnableResponse) => void): Request<Inspector2.Types.EnableResponse, AWSError>;
  /**
   * Enables Amazon Inspector scans for one or more Amazon Web Services accounts.
   */
  enable(callback?: (err: AWSError, data: Inspector2.Types.EnableResponse) => void): Request<Inspector2.Types.EnableResponse, AWSError>;
  /**
   * Enables the Amazon Inspector delegated administrator for your Organizations organization.
   */
  enableDelegatedAdminAccount(params: Inspector2.Types.EnableDelegatedAdminAccountRequest, callback?: (err: AWSError, data: Inspector2.Types.EnableDelegatedAdminAccountResponse) => void): Request<Inspector2.Types.EnableDelegatedAdminAccountResponse, AWSError>;
  /**
   * Enables the Amazon Inspector delegated administrator for your Organizations organization.
   */
  enableDelegatedAdminAccount(callback?: (err: AWSError, data: Inspector2.Types.EnableDelegatedAdminAccountResponse) => void): Request<Inspector2.Types.EnableDelegatedAdminAccountResponse, AWSError>;
  /**
   * Retrieves setting configurations for Inspector scans.
   */
  getConfiguration(params: Inspector2.Types.GetConfigurationRequest, callback?: (err: AWSError, data: Inspector2.Types.GetConfigurationResponse) => void): Request<Inspector2.Types.GetConfigurationResponse, AWSError>;
  /**
   * Retrieves setting configurations for Inspector scans.
   */
  getConfiguration(callback?: (err: AWSError, data: Inspector2.Types.GetConfigurationResponse) => void): Request<Inspector2.Types.GetConfigurationResponse, AWSError>;
  /**
   * Retrieves information about the Amazon Inspector delegated administrator for your organization.
   */
  getDelegatedAdminAccount(params: Inspector2.Types.GetDelegatedAdminAccountRequest, callback?: (err: AWSError, data: Inspector2.Types.GetDelegatedAdminAccountResponse) => void): Request<Inspector2.Types.GetDelegatedAdminAccountResponse, AWSError>;
  /**
   * Retrieves information about the Amazon Inspector delegated administrator for your organization.
   */
  getDelegatedAdminAccount(callback?: (err: AWSError, data: Inspector2.Types.GetDelegatedAdminAccountResponse) => void): Request<Inspector2.Types.GetDelegatedAdminAccountResponse, AWSError>;
  /**
   * Gets the status of a findings report.
   */
  getFindingsReportStatus(params: Inspector2.Types.GetFindingsReportStatusRequest, callback?: (err: AWSError, data: Inspector2.Types.GetFindingsReportStatusResponse) => void): Request<Inspector2.Types.GetFindingsReportStatusResponse, AWSError>;
  /**
   * Gets the status of a findings report.
   */
  getFindingsReportStatus(callback?: (err: AWSError, data: Inspector2.Types.GetFindingsReportStatusResponse) => void): Request<Inspector2.Types.GetFindingsReportStatusResponse, AWSError>;
  /**
   * Gets member information for your organization.
   */
  getMember(params: Inspector2.Types.GetMemberRequest, callback?: (err: AWSError, data: Inspector2.Types.GetMemberResponse) => void): Request<Inspector2.Types.GetMemberResponse, AWSError>;
  /**
   * Gets member information for your organization.
   */
  getMember(callback?: (err: AWSError, data: Inspector2.Types.GetMemberResponse) => void): Request<Inspector2.Types.GetMemberResponse, AWSError>;
  /**
   * Lists the permissions an account has to configure Amazon Inspector.
   */
  listAccountPermissions(params: Inspector2.Types.ListAccountPermissionsRequest, callback?: (err: AWSError, data: Inspector2.Types.ListAccountPermissionsResponse) => void): Request<Inspector2.Types.ListAccountPermissionsResponse, AWSError>;
  /**
   * Lists the permissions an account has to configure Amazon Inspector.
   */
  listAccountPermissions(callback?: (err: AWSError, data: Inspector2.Types.ListAccountPermissionsResponse) => void): Request<Inspector2.Types.ListAccountPermissionsResponse, AWSError>;
  /**
   * Lists coverage details for you environment.
   */
  listCoverage(params: Inspector2.Types.ListCoverageRequest, callback?: (err: AWSError, data: Inspector2.Types.ListCoverageResponse) => void): Request<Inspector2.Types.ListCoverageResponse, AWSError>;
  /**
   * Lists coverage details for you environment.
   */
  listCoverage(callback?: (err: AWSError, data: Inspector2.Types.ListCoverageResponse) => void): Request<Inspector2.Types.ListCoverageResponse, AWSError>;
  /**
   * Lists Amazon Inspector coverage statistics for your environment.
   */
  listCoverageStatistics(params: Inspector2.Types.ListCoverageStatisticsRequest, callback?: (err: AWSError, data: Inspector2.Types.ListCoverageStatisticsResponse) => void): Request<Inspector2.Types.ListCoverageStatisticsResponse, AWSError>;
  /**
   * Lists Amazon Inspector coverage statistics for your environment.
   */
  listCoverageStatistics(callback?: (err: AWSError, data: Inspector2.Types.ListCoverageStatisticsResponse) => void): Request<Inspector2.Types.ListCoverageStatisticsResponse, AWSError>;
  /**
   * Lists information about the Amazon Inspector delegated administrator of your organization.
   */
  listDelegatedAdminAccounts(params: Inspector2.Types.ListDelegatedAdminAccountsRequest, callback?: (err: AWSError, data: Inspector2.Types.ListDelegatedAdminAccountsResponse) => void): Request<Inspector2.Types.ListDelegatedAdminAccountsResponse, AWSError>;
  /**
   * Lists information about the Amazon Inspector delegated administrator of your organization.
   */
  listDelegatedAdminAccounts(callback?: (err: AWSError, data: Inspector2.Types.ListDelegatedAdminAccountsResponse) => void): Request<Inspector2.Types.ListDelegatedAdminAccountsResponse, AWSError>;
  /**
   * Lists the filters associated with your account.
   */
  listFilters(params: Inspector2.Types.ListFiltersRequest, callback?: (err: AWSError, data: Inspector2.Types.ListFiltersResponse) => void): Request<Inspector2.Types.ListFiltersResponse, AWSError>;
  /**
   * Lists the filters associated with your account.
   */
  listFilters(callback?: (err: AWSError, data: Inspector2.Types.ListFiltersResponse) => void): Request<Inspector2.Types.ListFiltersResponse, AWSError>;
  /**
   * Lists aggregated finding data for your environment based on specific criteria.
   */
  listFindingAggregations(params: Inspector2.Types.ListFindingAggregationsRequest, callback?: (err: AWSError, data: Inspector2.Types.ListFindingAggregationsResponse) => void): Request<Inspector2.Types.ListFindingAggregationsResponse, AWSError>;
  /**
   * Lists aggregated finding data for your environment based on specific criteria.
   */
  listFindingAggregations(callback?: (err: AWSError, data: Inspector2.Types.ListFindingAggregationsResponse) => void): Request<Inspector2.Types.ListFindingAggregationsResponse, AWSError>;
  /**
   * Lists findings for your environment.
   */
  listFindings(params: Inspector2.Types.ListFindingsRequest, callback?: (err: AWSError, data: Inspector2.Types.ListFindingsResponse) => void): Request<Inspector2.Types.ListFindingsResponse, AWSError>;
  /**
   * Lists findings for your environment.
   */
  listFindings(callback?: (err: AWSError, data: Inspector2.Types.ListFindingsResponse) => void): Request<Inspector2.Types.ListFindingsResponse, AWSError>;
  /**
   * List members associated with the Amazon Inspector delegated administrator for your organization.
   */
  listMembers(params: Inspector2.Types.ListMembersRequest, callback?: (err: AWSError, data: Inspector2.Types.ListMembersResponse) => void): Request<Inspector2.Types.ListMembersResponse, AWSError>;
  /**
   * List members associated with the Amazon Inspector delegated administrator for your organization.
   */
  listMembers(callback?: (err: AWSError, data: Inspector2.Types.ListMembersResponse) => void): Request<Inspector2.Types.ListMembersResponse, AWSError>;
  /**
   * Lists all tags attached to a given resource.
   */
  listTagsForResource(params: Inspector2.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: Inspector2.Types.ListTagsForResourceResponse) => void): Request<Inspector2.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists all tags attached to a given resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: Inspector2.Types.ListTagsForResourceResponse) => void): Request<Inspector2.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists the Amazon Inspector usage totals over the last 30 days.
   */
  listUsageTotals(params: Inspector2.Types.ListUsageTotalsRequest, callback?: (err: AWSError, data: Inspector2.Types.ListUsageTotalsResponse) => void): Request<Inspector2.Types.ListUsageTotalsResponse, AWSError>;
  /**
   * Lists the Amazon Inspector usage totals over the last 30 days.
   */
  listUsageTotals(callback?: (err: AWSError, data: Inspector2.Types.ListUsageTotalsResponse) => void): Request<Inspector2.Types.ListUsageTotalsResponse, AWSError>;
  /**
   * Adds tags to a resource.
   */
  tagResource(params: Inspector2.Types.TagResourceRequest, callback?: (err: AWSError, data: Inspector2.Types.TagResourceResponse) => void): Request<Inspector2.Types.TagResourceResponse, AWSError>;
  /**
   * Adds tags to a resource.
   */
  tagResource(callback?: (err: AWSError, data: Inspector2.Types.TagResourceResponse) => void): Request<Inspector2.Types.TagResourceResponse, AWSError>;
  /**
   * Removes tags from a resource.
   */
  untagResource(params: Inspector2.Types.UntagResourceRequest, callback?: (err: AWSError, data: Inspector2.Types.UntagResourceResponse) => void): Request<Inspector2.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes tags from a resource.
   */
  untagResource(callback?: (err: AWSError, data: Inspector2.Types.UntagResourceResponse) => void): Request<Inspector2.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates setting configurations for your Amazon Inspector account. When you use this API as an Amazon Inspector delegated administrator this updates the setting for all accounts you manage. Member accounts in an organization cannot update this setting.
   */
  updateConfiguration(params: Inspector2.Types.UpdateConfigurationRequest, callback?: (err: AWSError, data: Inspector2.Types.UpdateConfigurationResponse) => void): Request<Inspector2.Types.UpdateConfigurationResponse, AWSError>;
  /**
   * Updates setting configurations for your Amazon Inspector account. When you use this API as an Amazon Inspector delegated administrator this updates the setting for all accounts you manage. Member accounts in an organization cannot update this setting.
   */
  updateConfiguration(callback?: (err: AWSError, data: Inspector2.Types.UpdateConfigurationResponse) => void): Request<Inspector2.Types.UpdateConfigurationResponse, AWSError>;
  /**
   * Specifies the action that is to be applied to the findings that match the filter.
   */
  updateFilter(params: Inspector2.Types.UpdateFilterRequest, callback?: (err: AWSError, data: Inspector2.Types.UpdateFilterResponse) => void): Request<Inspector2.Types.UpdateFilterResponse, AWSError>;
  /**
   * Specifies the action that is to be applied to the findings that match the filter.
   */
  updateFilter(callback?: (err: AWSError, data: Inspector2.Types.UpdateFilterResponse) => void): Request<Inspector2.Types.UpdateFilterResponse, AWSError>;
  /**
   * Updates the configurations for your Amazon Inspector organization.
   */
  updateOrganizationConfiguration(params: Inspector2.Types.UpdateOrganizationConfigurationRequest, callback?: (err: AWSError, data: Inspector2.Types.UpdateOrganizationConfigurationResponse) => void): Request<Inspector2.Types.UpdateOrganizationConfigurationResponse, AWSError>;
  /**
   * Updates the configurations for your Amazon Inspector organization.
   */
  updateOrganizationConfiguration(callback?: (err: AWSError, data: Inspector2.Types.UpdateOrganizationConfigurationResponse) => void): Request<Inspector2.Types.UpdateOrganizationConfigurationResponse, AWSError>;
}
declare namespace Inspector2 {
  export interface Account {
    /**
     * The ID of the Amazon Web Services account.
     */
    accountId: AccountId;
    /**
     * Details of the status of Amazon Inspector scans by resource type.
     */
    resourceStatus: ResourceStatus;
    /**
     * The status of Amazon Inspector for the account.
     */
    status: Status;
  }
  export interface AccountAggregation {
    /**
     * The type of finding.
     */
    findingType?: AggregationFindingType;
    /**
     * The type of resource.
     */
    resourceType?: AggregationResourceType;
    /**
     * The value to sort by.
     */
    sortBy?: AccountSortBy;
    /**
     * The sort order (ascending or descending).
     */
    sortOrder?: SortOrder;
  }
  export interface AccountAggregationResponse {
    /**
     * The Amazon Web Services account ID.
     */
    accountId?: AccountId;
    /**
     * The number of findings by severity.
     */
    severityCounts?: SeverityCounts;
  }
  export type AccountId = string;
  export type AccountIdSet = AccountId[];
  export type AccountList = Account[];
  export type AccountSortBy = "CRITICAL"|"HIGH"|"ALL"|string;
  export interface AccountState {
    /**
     * The Amazon Web Services account ID.
     */
    accountId: AccountId;
    /**
     * An object detailing which resources Amazon Inspector is enabled to scan for the account.
     */
    resourceState: ResourceState;
    /**
     * An object detailing the status of Amazon Inspector for the account.
     */
    state: State;
  }
  export type AccountStateList = AccountState[];
  export type AggCounts = number;
  export type AggregationFindingType = "NETWORK_REACHABILITY"|"PACKAGE_VULNERABILITY"|string;
  export interface AggregationRequest {
    /**
     * An object that contains details about an aggregation request based on Amazon Web Services account IDs.
     */
    accountAggregation?: AccountAggregation;
    /**
     * An object that contains details about an aggregation request based on Amazon Machine Images (AMIs).
     */
    amiAggregation?: AmiAggregation;
    /**
     * An object that contains details about an aggregation request based on Amazon ECR container images.
     */
    awsEcrContainerAggregation?: AwsEcrContainerAggregation;
    /**
     * An object that contains details about an aggregation request based on Amazon EC2 instances.
     */
    ec2InstanceAggregation?: Ec2InstanceAggregation;
    /**
     * An object that contains details about an aggregation request based on finding types.
     */
    findingTypeAggregation?: FindingTypeAggregation;
    /**
     * An object that contains details about an aggregation request based on container image layers.
     */
    imageLayerAggregation?: ImageLayerAggregation;
    /**
     * An object that contains details about an aggregation request based on operating system package type.
     */
    packageAggregation?: PackageAggregation;
    /**
     * An object that contains details about an aggregation request based on Amazon ECR repositories.
     */
    repositoryAggregation?: RepositoryAggregation;
    /**
     * An object that contains details about an aggregation request based on finding title.
     */
    titleAggregation?: TitleAggregation;
  }
  export type AggregationResourceType = "AWS_EC2_INSTANCE"|"AWS_ECR_CONTAINER_IMAGE"|string;
  export interface AggregationResponse {
    /**
     * An object that contains details about an aggregation response based on Amazon Web Services account IDs.
     */
    accountAggregation?: AccountAggregationResponse;
    /**
     * An object that contains details about an aggregation response based on Amazon Machine Images (AMIs).
     */
    amiAggregation?: AmiAggregationResponse;
    /**
     * An object that contains details about an aggregation response based on Amazon ECR container images.
     */
    awsEcrContainerAggregation?: AwsEcrContainerAggregationResponse;
    /**
     * An object that contains details about an aggregation response based on Amazon EC2 instances.
     */
    ec2InstanceAggregation?: Ec2InstanceAggregationResponse;
    /**
     * An object that contains details about an aggregation response based on finding types.
     */
    findingTypeAggregation?: FindingTypeAggregationResponse;
    /**
     * An object that contains details about an aggregation response based on container image layers.
     */
    imageLayerAggregation?: ImageLayerAggregationResponse;
    /**
     * An object that contains details about an aggregation response based on operating system package type.
     */
    packageAggregation?: PackageAggregationResponse;
    /**
     * An object that contains details about an aggregation response based on Amazon ECR repositories.
     */
    repositoryAggregation?: RepositoryAggregationResponse;
    /**
     * An object that contains details about an aggregation response based on finding title.
     */
    titleAggregation?: TitleAggregationResponse;
  }
  export type AggregationResponseList = AggregationResponse[];
  export type AggregationType = "FINDING_TYPE"|"PACKAGE"|"TITLE"|"REPOSITORY"|"AMI"|"AWS_EC2_INSTANCE"|"AWS_ECR_CONTAINER"|"IMAGE_LAYER"|"ACCOUNT"|string;
  export interface AmiAggregation {
    /**
     * The IDs of AMIs to aggregate findings for.
     */
    amis?: StringFilterList;
    /**
     * The value to sort results by.
     */
    sortBy?: AmiSortBy;
    /**
     * The order to sort results by.
     */
    sortOrder?: SortOrder;
  }
  export interface AmiAggregationResponse {
    /**
     * The Amazon Web Services account ID that the AMI belongs.
     */
    accountId?: AccountId;
    /**
     * The IDs of Amazon EC2 instances using this AMI.
     */
    affectedInstances?: Long;
    /**
     * The ID of the AMI that findings were aggregated for.
     */
    ami: AmiId;
    /**
     * An object that contains the count of matched findings per severity.
     */
    severityCounts?: SeverityCounts;
  }
  export type AmiId = string;
  export type AmiSortBy = "CRITICAL"|"HIGH"|"ALL"|"AFFECTED_INSTANCES"|string;
  export type Arn = string;
  export interface AssociateMemberRequest {
    /**
     * The Amazon Web Services account ID of the member account to be associated.
     */
    accountId: AccountId;
  }
  export interface AssociateMemberResponse {
    /**
     * The Amazon Web Services account ID of the successfully associated member account.
     */
    accountId: AccountId;
  }
  export interface AutoEnable {
    /**
     * Represents whether Amazon EC2 scans are automatically enabled for new members of your Amazon Inspector organization.
     */
    ec2: Boolean;
    /**
     * Represents whether Amazon ECR scans are automatically enabled for new members of your Amazon Inspector organization.
     */
    ecr: Boolean;
  }
  export interface AwsEc2InstanceDetails {
    /**
     * The IAM instance profile ARN of the Amazon EC2 instance.
     */
    iamInstanceProfileArn?: NonEmptyString;
    /**
     * The image ID of the Amazon EC2 instance.
     */
    imageId?: NonEmptyString;
    /**
     * The IPv4 addresses of the Amazon EC2 instance.
     */
    ipV4Addresses?: IpV4AddressList;
    /**
     * The IPv6 addresses of the Amazon EC2 instance.
     */
    ipV6Addresses?: IpV6AddressList;
    /**
     * The name of the key pair used to launch the Amazon EC2 instance.
     */
    keyName?: NonEmptyString;
    /**
     * The date and time the Amazon EC2 instance was launched at.
     */
    launchedAt?: DateTimeTimestamp;
    /**
     * The platform of the Amazon EC2 instance.
     */
    platform?: Platform;
    /**
     * The subnet ID of the Amazon EC2 instance.
     */
    subnetId?: NonEmptyString;
    /**
     * The type of the Amazon EC2 instance.
     */
    type?: NonEmptyString;
    /**
     * The VPC ID of the Amazon EC2 instance.
     */
    vpcId?: NonEmptyString;
  }
  export interface AwsEcrContainerAggregation {
    /**
     * The architecture of the containers.
     */
    architectures?: StringFilterList;
    /**
     * The image SHA values.
     */
    imageShas?: StringFilterList;
    /**
     * The image tags.
     */
    imageTags?: StringFilterList;
    /**
     * The container repositories.
     */
    repositories?: StringFilterList;
    /**
     * The container resource IDs.
     */
    resourceIds?: StringFilterList;
    /**
     * The value to sort by.
     */
    sortBy?: AwsEcrContainerSortBy;
    /**
     * The sort order (ascending or descending).
     */
    sortOrder?: SortOrder;
  }
  export interface AwsEcrContainerAggregationResponse {
    /**
     * The Amazon Web Services account ID of the account that owns the container.
     */
    accountId?: AccountId;
    /**
     * The architecture of the container.
     */
    architecture?: String;
    /**
     * The SHA value of the container image.
     */
    imageSha?: String;
    /**
     * The container image stags.
     */
    imageTags?: StringList;
    /**
     * The container repository.
     */
    repository?: String;
    /**
     * The resource ID of the container.
     */
    resourceId: NonEmptyString;
    /**
     * The number of finding by severity.
     */
    severityCounts?: SeverityCounts;
  }
  export interface AwsEcrContainerImageDetails {
    /**
     * The architecture of the Amazon ECR container image.
     */
    architecture?: NonEmptyString;
    /**
     * The image author of the Amazon ECR container image.
     */
    author?: String;
    /**
     * The image hash of the Amazon ECR container image.
     */
    imageHash: ImageHash;
    /**
     * The image tags attached to the Amazon ECR container image.
     */
    imageTags?: ImageTagList;
    /**
     * The platform of the Amazon ECR container image.
     */
    platform?: Platform;
    /**
     * The date and time the Amazon ECR container image was pushed.
     */
    pushedAt?: DateTimeTimestamp;
    /**
     * The registry the Amazon ECR container image belongs to.
     */
    registry: NonEmptyString;
    /**
     * The name of the repository the Amazon ECR container image resides in.
     */
    repositoryName: NonEmptyString;
  }
  export type AwsEcrContainerSortBy = "CRITICAL"|"HIGH"|"ALL"|string;
  export interface BatchGetAccountStatusRequest {
    /**
     * The 12-digit Amazon Web Services account IDs of the accounts to retrieve Amazon Inspector status for.
     */
    accountIds?: AccountIdSet;
  }
  export interface BatchGetAccountStatusResponse {
    /**
     * An array of objects that provide details on the status of Amazon Inspector for each of the requested accounts.
     */
    accounts: AccountStateList;
    /**
     * An array of objects detailing any accounts that failed to enable Amazon Inspector and why.
     */
    failedAccounts?: FailedAccountList;
  }
  export interface BatchGetFreeTrialInfoRequest {
    /**
     * The account IDs to get free trial status for.
     */
    accountIds: BatchGetFreeTrialInfoRequestAccountIdsList;
  }
  export type BatchGetFreeTrialInfoRequestAccountIdsList = MeteringAccountId[];
  export interface BatchGetFreeTrialInfoResponse {
    /**
     * An array of objects that provide Amazon Inspector free trial details for each of the requested accounts. 
     */
    accounts: FreeTrialAccountInfoList;
    /**
     * An array of objects detailing any accounts that free trial data could not be returned for.
     */
    failedAccounts: FreeTrialInfoErrorList;
  }
  export type Boolean = boolean;
  export interface CancelFindingsReportRequest {
    /**
     * The ID of the report to be canceled.
     */
    reportId: ReportId;
  }
  export interface CancelFindingsReportResponse {
    /**
     * The ID of the canceled report.
     */
    reportId: ReportId;
  }
  export type ClientToken = string;
  export type Component = string;
  export type ComponentType = string;
  export interface Counts {
    /**
     * The number of resources.
     */
    count?: AggCounts;
    /**
     * The key associated with this group
     */
    groupKey?: GroupKey;
  }
  export type CountsList = Counts[];
  export interface CoverageFilterCriteria {
    /**
     * An array of Amazon Web Services account IDs to return coverage statistics for.
     */
    accountId?: CoverageStringFilterList;
    /**
     * The Amazon EC2 instance tags to filter on.
     */
    ec2InstanceTags?: CoverageMapFilterList;
    /**
     * The Amazon ECR image tags to filter on.
     */
    ecrImageTags?: CoverageStringFilterList;
    /**
     * The Amazon ECR repository name to filter on.
     */
    ecrRepositoryName?: CoverageStringFilterList;
    /**
     * An array of Amazon Web Services resource IDs to return coverage statistics for.
     */
    resourceId?: CoverageStringFilterList;
    /**
     * An array of Amazon Web Services resource types to return coverage statistics for. The values can be AWS_EC2_INSTANCE or AWS_ECR_REPOSITORY.
     */
    resourceType?: CoverageStringFilterList;
    /**
     * The scan status code to filter on.
     */
    scanStatusCode?: CoverageStringFilterList;
    /**
     * The scan status reason to filter on.
     */
    scanStatusReason?: CoverageStringFilterList;
    /**
     * An array of Amazon Inspector scan types to return coverage statistics for.
     */
    scanType?: CoverageStringFilterList;
  }
  export type CoverageMapComparison = "EQUALS"|string;
  export interface CoverageMapFilter {
    /**
     * The operator to compare coverage on.
     */
    comparison: CoverageMapComparison;
    /**
     * The tag key associated with the coverage map filter.
     */
    key: NonEmptyString;
    /**
     * The tag value associated with the coverage map filter.
     */
    value?: NonEmptyString;
  }
  export type CoverageMapFilterList = CoverageMapFilter[];
  export type CoverageResourceType = "AWS_EC2_INSTANCE"|"AWS_ECR_CONTAINER_IMAGE"|"AWS_ECR_REPOSITORY"|string;
  export type CoverageStringComparison = "EQUALS"|"NOT_EQUALS"|string;
  export interface CoverageStringFilter {
    /**
     * The operator to compare strings on.
     */
    comparison: CoverageStringComparison;
    /**
     * The value to compare strings on.
     */
    value: CoverageStringInput;
  }
  export type CoverageStringFilterList = CoverageStringFilter[];
  export type CoverageStringInput = string;
  export interface CoveredResource {
    /**
     * The Amazon Web Services account ID of the covered resource.
     */
    accountId: AccountId;
    /**
     * The ID of the covered resource.
     */
    resourceId: ResourceId;
    /**
     * An object that contains details about the metadata.
     */
    resourceMetadata?: ResourceScanMetadata;
    /**
     * The type of the covered resource.
     */
    resourceType: CoverageResourceType;
    /**
     * The status of the scan covering the resource.
     */
    scanStatus?: ScanStatus;
    /**
     * The Amazon Inspector scan type covering the resource.
     */
    scanType: ScanType;
  }
  export type CoveredResources = CoveredResource[];
  export interface CreateFilterRequest {
    /**
     * Defines the action that is to be applied to the findings that match the filter.
     */
    action: FilterAction;
    /**
     * A description of the filter.
     */
    description?: FilterDescription;
    /**
     * Defines the criteria to be used in the filter for querying findings.
     */
    filterCriteria: FilterCriteria;
    /**
     * The name of the filter. Minimum length of 3. Maximum length of 64. Valid characters include alphanumeric characters, dot (.), underscore (_), and dash (-). Spaces are not allowed.
     */
    name: FilterName;
    /**
     * The reason for creating the filter.
     */
    reason?: FilterReason;
    /**
     * A list of tags for the filter.
     */
    tags?: TagMap;
  }
  export interface CreateFilterResponse {
    /**
     * The Amazon Resource Number (ARN) of the successfully created filter.
     */
    arn: FilterArn;
  }
  export interface CreateFindingsReportRequest {
    /**
     * The filter criteria to apply to the results of the finding report.
     */
    filterCriteria?: FilterCriteria;
    /**
     * The format to generate the report in.
     */
    reportFormat: ReportFormat;
    /**
     * The Amazon S3 export destination for the report.
     */
    s3Destination: Destination;
  }
  export interface CreateFindingsReportResponse {
    /**
     * The ID of the report.
     */
    reportId?: ReportId;
  }
  export type Currency = "USD"|string;
  export interface CvssScore {
    /**
     * The base CVSS score used for the finding.
     */
    baseScore: Double;
    /**
     * The vector string of the CVSS score.
     */
    scoringVector: NonEmptyString;
    /**
     * The source of the CVSS score.
     */
    source: NonEmptyString;
    /**
     * The version of CVSS used for the score.
     */
    version: NonEmptyString;
  }
  export interface CvssScoreAdjustment {
    /**
     * The metric used to adjust the CVSS score.
     */
    metric: NonEmptyString;
    /**
     * The reason the CVSS score has been adjustment.
     */
    reason: NonEmptyString;
  }
  export type CvssScoreAdjustmentList = CvssScoreAdjustment[];
  export interface CvssScoreDetails {
    /**
     * An object that contains details about adjustment Amazon Inspector made to the CVSS score.
     */
    adjustments?: CvssScoreAdjustmentList;
    /**
     * The source of the CVSS data.
     */
    cvssSource?: NonEmptyString;
    /**
     * The CVSS score.
     */
    score: Double;
    /**
     * The source for the CVSS score.
     */
    scoreSource: NonEmptyString;
    /**
     * The vector for the CVSS score.
     */
    scoringVector: NonEmptyString;
    /**
     * The CVSS version used in scoring.
     */
    version: NonEmptyString;
  }
  export type CvssScoreList = CvssScore[];
  export interface DateFilter {
    /**
     * A timestamp representing the end of the time period filtered on.
     */
    endInclusive?: Timestamp;
    /**
     * A timestamp representing the start of the time period filtered on.
     */
    startInclusive?: Timestamp;
  }
  export type DateFilterList = DateFilter[];
  export type DateTimeTimestamp = Date;
  export interface DelegatedAdmin {
    /**
     * The Amazon Web Services account ID of the Amazon Inspector delegated administrator for your organization.
     */
    accountId?: AccountId;
    /**
     * The status of the Amazon Inspector delegated administrator.
     */
    relationshipStatus?: RelationshipStatus;
  }
  export interface DelegatedAdminAccount {
    /**
     * The Amazon Web Services account ID of the Amazon Inspector delegated administrator for your organization.
     */
    accountId?: AccountId;
    /**
     * The status of the Amazon Inspector delegated administrator.
     */
    status?: DelegatedAdminStatus;
  }
  export type DelegatedAdminAccountList = DelegatedAdminAccount[];
  export type DelegatedAdminStatus = "ENABLED"|"DISABLE_IN_PROGRESS"|string;
  export interface DeleteFilterRequest {
    /**
     * The Amazon Resource Number (ARN) of the filter to be deleted.
     */
    arn: FilterArn;
  }
  export interface DeleteFilterResponse {
    /**
     * The Amazon Resource Number (ARN) of the filter that has been deleted.
     */
    arn: FilterArn;
  }
  export interface DescribeOrganizationConfigurationRequest {
  }
  export interface DescribeOrganizationConfigurationResponse {
    /**
     * The scan types are automatically enabled for new members of your organization.
     */
    autoEnable?: AutoEnable;
    /**
     * Represents whether your organization has reached the maximum Amazon Web Services account limit for Amazon Inspector.
     */
    maxAccountLimitReached?: Boolean;
  }
  export interface Destination {
    /**
     * The name of the Amazon S3 bucket to export findings to.
     */
    bucketName: String;
    /**
     * The prefix of the KMS key used to export findings.
     */
    keyPrefix?: String;
    /**
     * The ARN of the KMS key used to encrypt data when exporting findings.
     */
    kmsKeyArn: String;
  }
  export interface DisableDelegatedAdminAccountRequest {
    /**
     * The Amazon Web Services account ID of the current Amazon Inspector delegated administrator.
     */
    delegatedAdminAccountId: AccountId;
  }
  export interface DisableDelegatedAdminAccountResponse {
    /**
     * The Amazon Web Services account ID of the successfully disabled delegated administrator.
     */
    delegatedAdminAccountId: AccountId;
  }
  export interface DisableRequest {
    /**
     * An array of account IDs you want to disable Amazon Inspector scans for.
     */
    accountIds?: AccountIdSet;
    /**
     * The resource scan types you want to disable.
     */
    resourceTypes?: DisableResourceTypeList;
  }
  export type DisableResourceTypeList = ResourceScanType[];
  export interface DisableResponse {
    /**
     * Information on the accounts that have had Amazon Inspector scans successfully disabled. Details are provided for each account.
     */
    accounts: AccountList;
    /**
     * Information on any accounts for which Amazon Inspector scans could not be disabled. Details are provided for each account.
     */
    failedAccounts?: FailedAccountList;
  }
  export interface DisassociateMemberRequest {
    /**
     * The Amazon Web Services account ID of the member account to disassociate.
     */
    accountId: AccountId;
  }
  export interface DisassociateMemberResponse {
    /**
     * The Amazon Web Services account ID of the successfully disassociated member.
     */
    accountId: AccountId;
  }
  export type Double = number;
  export interface Ec2InstanceAggregation {
    /**
     * The AMI IDs associated with the Amazon EC2 instances to aggregate findings for.
     */
    amis?: StringFilterList;
    /**
     * The Amazon EC2 instance IDs to aggregate findings for.
     */
    instanceIds?: StringFilterList;
    /**
     * The Amazon EC2 instance tags to aggregate findings for.
     */
    instanceTags?: MapFilterList;
    /**
     * The operating system types to aggregate findings for. Valid values must be uppercase and underscore separated, examples are ORACLE_LINUX_7 and ALPINE_LINUX_3_8.
     */
    operatingSystems?: StringFilterList;
    /**
     * The value to sort results by.
     */
    sortBy?: Ec2InstanceSortBy;
    /**
     * The order to sort results by.
     */
    sortOrder?: SortOrder;
  }
  export interface Ec2InstanceAggregationResponse {
    /**
     * The Amazon Web Services account the Amazon EC2 instance belongs to.
     */
    accountId?: String;
    /**
     * The Amazon Machine Image (AMI) of the Amazon EC2 instance.
     */
    ami?: AmiId;
    /**
     * The Amazon EC2 instance ID.
     */
    instanceId: NonEmptyString;
    /**
     * The tags attached to the instance.
     */
    instanceTags?: TagMap;
    /**
     * The number of network findings for the Amazon EC2 instance.
     */
    networkFindings?: Long;
    /**
     * The operating system of the Amazon EC2 instance.
     */
    operatingSystem?: String;
    /**
     * An object that contains the count of matched findings per severity.
     */
    severityCounts?: SeverityCounts;
  }
  export type Ec2InstanceSortBy = "NETWORK_FINDINGS"|"CRITICAL"|"HIGH"|"ALL"|string;
  export interface Ec2Metadata {
    /**
     * The ID of the Amazon Machine Image (AMI) used to launch the instance.
     */
    amiId?: AmiId;
    /**
     * The platform of the instance.
     */
    platform?: Ec2Platform;
    /**
     * The tags attached to the instance.
     */
    tags?: TagMap;
  }
  export type Ec2Platform = "WINDOWS"|"LINUX"|"UNKNOWN"|string;
  export interface EcrConfiguration {
    /**
     * The ECR automated re-scan duration defines how long an ECR image will be actively scanned by Amazon Inspector. When the number of days since an image was last pushed exceeds the automated re-scan duration the monitoring state of that image becomes inactive and all associated findings are scheduled for closure.
     */
    rescanDuration: EcrRescanDuration;
  }
  export interface EcrConfigurationState {
    /**
     * An object that contains details about the state of the ECR automated re-scan setting.
     */
    rescanDurationState?: EcrRescanDurationState;
  }
  export interface EcrContainerImageMetadata {
    /**
     * Tags associated with the Amazon ECR image metadata.
     */
    tags?: TagList;
  }
  export interface EcrRepositoryMetadata {
    /**
     * The name of the Amazon ECR repository.
     */
    name?: String;
    /**
     * The frequency of scans.
     */
    scanFrequency?: EcrScanFrequency;
  }
  export type EcrRescanDuration = "LIFETIME"|"DAYS_30"|"DAYS_180"|string;
  export interface EcrRescanDurationState {
    /**
     * The ECR automated re-scan duration defines how long an ECR image will be actively scanned by Amazon Inspector. When the number of days since an image was last pushed exceeds the automated re-scan duration the monitoring state of that image becomes inactive and all associated findings are scheduled for closure.
     */
    rescanDuration?: EcrRescanDuration;
    /**
     * The status of changes to the ECR automated re-scan duration.
     */
    status?: EcrRescanDurationStatus;
    /**
     * A timestamp representing when the last time the ECR scan duration setting was changed.
     */
    updatedAt?: DateTimeTimestamp;
  }
  export type EcrRescanDurationStatus = "SUCCESS"|"PENDING"|"FAILED"|string;
  export type EcrScanFrequency = "MANUAL"|"SCAN_ON_PUSH"|"CONTINUOUS_SCAN"|string;
  export interface EnableDelegatedAdminAccountRequest {
    /**
     * The idempotency token for the request.
     */
    clientToken?: ClientToken;
    /**
     * The Amazon Web Services account ID of the Amazon Inspector delegated administrator.
     */
    delegatedAdminAccountId: AccountId;
  }
  export interface EnableDelegatedAdminAccountResponse {
    /**
     * The Amazon Web Services account ID of the successfully Amazon Inspector delegated administrator.
     */
    delegatedAdminAccountId: AccountId;
  }
  export interface EnableRequest {
    /**
     * A list of account IDs you want to enable Amazon Inspector scans for.
     */
    accountIds?: AccountIdSet;
    /**
     * The idempotency token for the request.
     */
    clientToken?: ClientToken;
    /**
     * The resource scan types you want to enable.
     */
    resourceTypes: EnableResourceTypeList;
  }
  export type EnableResourceTypeList = ResourceScanType[];
  export interface EnableResponse {
    /**
     * Information on the accounts that have had Amazon Inspector scans successfully enabled. Details are provided for each account.
     */
    accounts: AccountList;
    /**
     * Information on any accounts for which Amazon Inspector scans could not be enabled. Details are provided for each account.
     */
    failedAccounts?: FailedAccountList;
  }
  export type ErrorCode = "ALREADY_ENABLED"|"ENABLE_IN_PROGRESS"|"DISABLE_IN_PROGRESS"|"SUSPEND_IN_PROGRESS"|"RESOURCE_NOT_FOUND"|"ACCESS_DENIED"|"INTERNAL_ERROR"|"SSM_UNAVAILABLE"|"SSM_THROTTLED"|"EVENTBRIDGE_UNAVAILABLE"|"EVENTBRIDGE_THROTTLED"|"RESOURCE_SCAN_NOT_DISABLED"|"DISASSOCIATE_ALL_MEMBERS"|"ACCOUNT_IS_ISOLATED"|string;
  export type ErrorMessage = string;
  export type ExternalReportStatus = "SUCCEEDED"|"IN_PROGRESS"|"CANCELLED"|"FAILED"|string;
  export interface FailedAccount {
    /**
     * The Amazon Web Services account ID.
     */
    accountId: AccountId;
    /**
     * The error code explaining why the account failed to enable Amazon Inspector.
     */
    errorCode: ErrorCode;
    /**
     * The error message received when the account failed to enable Amazon Inspector.
     */
    errorMessage: NonEmptyString;
    /**
     * An object detailing which resources Amazon Inspector is enabled to scan for the account.
     */
    resourceStatus?: ResourceStatus;
    /**
     * The status of Amazon Inspector for the account.
     */
    status?: Status;
  }
  export type FailedAccountList = FailedAccount[];
  export type FilePath = string;
  export interface Filter {
    /**
     * The action that is to be applied to the findings that match the filter.
     */
    action: FilterAction;
    /**
     * The Amazon Resource Number (ARN) associated with this filter.
     */
    arn: FilterArn;
    /**
     * The date and time this filter was created at.
     */
    createdAt: DateTimeTimestamp;
    /**
     * Details on the filter criteria associated with this filter.
     */
    criteria: FilterCriteria;
    /**
     * A description of the filter.
     */
    description?: FilterDescription;
    /**
     * The name of the filter.
     */
    name: FilterName;
    /**
     * The Amazon Web Services account ID of the account that created the filter.
     */
    ownerId: OwnerId;
    /**
     * The reason for the filter.
     */
    reason?: FilterReason;
    /**
     * The tags attached to the filter.
     */
    tags?: TagMap;
    /**
     * The date and time the filter was last updated at.
     */
    updatedAt: DateTimeTimestamp;
  }
  export type FilterAction = "NONE"|"SUPPRESS"|string;
  export type FilterArn = string;
  export type FilterArnList = FilterArn[];
  export interface FilterCriteria {
    /**
     * Details of the Amazon Web Services account IDs used to filter findings.
     */
    awsAccountId?: StringFilterList;
    /**
     * Details of the component IDs used to filter findings.
     */
    componentId?: StringFilterList;
    /**
     * Details of the component types used to filter findings.
     */
    componentType?: StringFilterList;
    /**
     * Details of the Amazon EC2 instance image IDs used to filter findings.
     */
    ec2InstanceImageId?: StringFilterList;
    /**
     * Details of the Amazon EC2 instance subnet IDs used to filter findings.
     */
    ec2InstanceSubnetId?: StringFilterList;
    /**
     * Details of the Amazon EC2 instance VPC IDs used to filter findings.
     */
    ec2InstanceVpcId?: StringFilterList;
    /**
     * Details of the Amazon ECR image architecture types used to filter findings.
     */
    ecrImageArchitecture?: StringFilterList;
    /**
     * Details of the Amazon ECR image hashes used to filter findings.
     */
    ecrImageHash?: StringFilterList;
    /**
     * Details on the Amazon ECR image push date and time used to filter findings.
     */
    ecrImagePushedAt?: DateFilterList;
    /**
     * Details on the Amazon ECR registry used to filter findings.
     */
    ecrImageRegistry?: StringFilterList;
    /**
     * Details on the name of the Amazon ECR repository used to filter findings.
     */
    ecrImageRepositoryName?: StringFilterList;
    /**
     * The tags attached to the Amazon ECR container image.
     */
    ecrImageTags?: StringFilterList;
    /**
     * Details on the finding ARNs used to filter findings.
     */
    findingArn?: StringFilterList;
    /**
     * Details on the finding status types used to filter findings.
     */
    findingStatus?: StringFilterList;
    /**
     * Details on the finding types used to filter findings.
     */
    findingType?: StringFilterList;
    /**
     * Details on the date and time a finding was first seen used to filter findings.
     */
    firstObservedAt?: DateFilterList;
    /**
     * Details on whether a fix is available through a version update. This value can be YES, NO, or PARTIAL. A PARTIAL fix means that some, but not all, of the packages identified in the finding have fixes available through updated versions.
     */
    fixAvailable?: StringFilterList;
    /**
     * The Amazon Inspector score to filter on.
     */
    inspectorScore?: NumberFilterList;
    /**
     * Details on the date and time a finding was last seen used to filter findings.
     */
    lastObservedAt?: DateFilterList;
    /**
     * Details on the ingress source addresses used to filter findings.
     */
    networkProtocol?: StringFilterList;
    /**
     * Details on the port ranges used to filter findings.
     */
    portRange?: PortRangeFilterList;
    /**
     * Details on the related vulnerabilities used to filter findings.
     */
    relatedVulnerabilities?: StringFilterList;
    /**
     * Details on the resource IDs used to filter findings.
     */
    resourceId?: StringFilterList;
    /**
     * Details on the resource tags used to filter findings.
     */
    resourceTags?: MapFilterList;
    /**
     * Details on the resource types used to filter findings.
     */
    resourceType?: StringFilterList;
    /**
     * Details on the severity used to filter findings.
     */
    severity?: StringFilterList;
    /**
     * Details on the finding title used to filter findings.
     */
    title?: StringFilterList;
    /**
     * Details on the date and time a finding was last updated at used to filter findings.
     */
    updatedAt?: DateFilterList;
    /**
     * Details on the vendor severity used to filter findings.
     */
    vendorSeverity?: StringFilterList;
    /**
     * Details on the vulnerability ID used to filter findings.
     */
    vulnerabilityId?: StringFilterList;
    /**
     * Details on the vulnerability type used to filter findings.
     */
    vulnerabilitySource?: StringFilterList;
    /**
     * Details on the vulnerable packages used to filter findings.
     */
    vulnerablePackages?: PackageFilterList;
  }
  export type FilterDescription = string;
  export type FilterList = Filter[];
  export type FilterName = string;
  export type FilterReason = string;
  export interface Finding {
    /**
     * The Amazon Web Services account ID associated with the finding.
     */
    awsAccountId: AccountId;
    /**
     * The description of the finding.
     */
    description: FindingDescription;
    /**
     * The Amazon Resource Number (ARN) of the finding.
     */
    findingArn: FindingArn;
    /**
     * The date and time that the finding was first observed.
     */
    firstObservedAt: DateTimeTimestamp;
    /**
     * Details on whether a fix is available through a version update. This value can be YES, NO, or PARTIAL. A PARTIAL fix means that some, but not all, of the packages identified in the finding have fixes available through updated versions.
     */
    fixAvailable?: FixAvailable;
    /**
     * The Amazon Inspector score given to the finding.
     */
    inspectorScore?: Double;
    /**
     * An object that contains details of the Amazon Inspector score.
     */
    inspectorScoreDetails?: InspectorScoreDetails;
    /**
     * The date and time that the finding was last observed.
     */
    lastObservedAt: DateTimeTimestamp;
    /**
     * An object that contains the details of a network reachability finding.
     */
    networkReachabilityDetails?: NetworkReachabilityDetails;
    /**
     * An object that contains the details of a package vulnerability finding.
     */
    packageVulnerabilityDetails?: PackageVulnerabilityDetails;
    /**
     * An object that contains the details about how to remediate a finding.
     */
    remediation: Remediation;
    /**
     * Contains information on the resources involved in a finding.
     */
    resources: ResourceList;
    /**
     * The severity of the finding.
     */
    severity: Severity;
    /**
     * The status of the finding.
     */
    status: FindingStatus;
    /**
     * The title of the finding.
     */
    title?: FindingTitle;
    /**
     * The type of the finding.
     */
    type: FindingType;
    /**
     * The date and time the finding was last updated at.
     */
    updatedAt?: DateTimeTimestamp;
  }
  export type FindingArn = string;
  export type FindingDescription = string;
  export type FindingList = Finding[];
  export type FindingStatus = "ACTIVE"|"SUPPRESSED"|"CLOSED"|string;
  export type FindingTitle = string;
  export type FindingType = "NETWORK_REACHABILITY"|"PACKAGE_VULNERABILITY"|string;
  export interface FindingTypeAggregation {
    /**
     * The finding type to aggregate.
     */
    findingType?: AggregationFindingType;
    /**
     * The resource type to aggregate.
     */
    resourceType?: AggregationResourceType;
    /**
     * The value to sort results by.
     */
    sortBy?: FindingTypeSortBy;
    /**
     * The order to sort results by.
     */
    sortOrder?: SortOrder;
  }
  export interface FindingTypeAggregationResponse {
    /**
     * The ID of the Amazon Web Services account associated with the findings.
     */
    accountId?: AccountId;
    /**
     * The value to sort results by.
     */
    severityCounts?: SeverityCounts;
  }
  export type FindingTypeSortBy = "CRITICAL"|"HIGH"|"ALL"|string;
  export type FixAvailable = "YES"|"NO"|"PARTIAL"|string;
  export interface FreeTrialAccountInfo {
    /**
     * The account associated with the Amazon Inspector free trial information.
     */
    accountId: MeteringAccountId;
    /**
     * Contains information about the Amazon Inspector free trial for an account.
     */
    freeTrialInfo: FreeTrialInfoList;
  }
  export type FreeTrialAccountInfoList = FreeTrialAccountInfo[];
  export interface FreeTrialInfo {
    /**
     * The date and time that the Amazon Inspector free trail ends for a given account.
     */
    end: Timestamp;
    /**
     * The date and time that the Amazon Inspector free trail started for a given account.
     */
    start: Timestamp;
    /**
     * The order to sort results by.
     */
    status: FreeTrialStatus;
    /**
     * The type of scan covered by the Amazon Inspector free trail.
     */
    type: FreeTrialType;
  }
  export interface FreeTrialInfoError {
    /**
     * The account associated with the Amazon Inspector free trial information.
     */
    accountId: MeteringAccountId;
    /**
     * The error code.
     */
    code: FreeTrialInfoErrorCode;
    /**
     * The error message returned.
     */
    message: String;
  }
  export type FreeTrialInfoErrorCode = "ACCESS_DENIED"|"INTERNAL_ERROR"|string;
  export type FreeTrialInfoErrorList = FreeTrialInfoError[];
  export type FreeTrialInfoList = FreeTrialInfo[];
  export type FreeTrialStatus = "ACTIVE"|"INACTIVE"|string;
  export type FreeTrialType = "EC2"|"ECR"|string;
  export interface GetConfigurationRequest {
  }
  export interface GetConfigurationResponse {
    /**
     * Specifies how the ECR automated re-scan duration is currently configured for your environment.
     */
    ecrConfiguration?: EcrConfigurationState;
  }
  export interface GetDelegatedAdminAccountRequest {
  }
  export interface GetDelegatedAdminAccountResponse {
    /**
     * The Amazon Web Services account ID of the Amazon Inspector delegated administrator.
     */
    delegatedAdmin?: DelegatedAdmin;
  }
  export interface GetFindingsReportStatusRequest {
    /**
     * The ID of the report to retrieve the status of.
     */
    reportId?: ReportId;
  }
  export interface GetFindingsReportStatusResponse {
    /**
     * The destination of the report.
     */
    destination?: Destination;
    /**
     * The error code of the report.
     */
    errorCode?: ReportingErrorCode;
    /**
     * The error message of the report.
     */
    errorMessage?: ErrorMessage;
    /**
     * The filter criteria associated with the report.
     */
    filterCriteria?: FilterCriteria;
    /**
     * The ID of the report.
     */
    reportId?: ReportId;
    /**
     * The status of the report.
     */
    status?: ExternalReportStatus;
  }
  export interface GetMemberRequest {
    /**
     * The Amazon Web Services account ID of the member account to retrieve information on.
     */
    accountId: AccountId;
  }
  export interface GetMemberResponse {
    /**
     * Details of the retrieved member account.
     */
    member?: Member;
  }
  export type GroupKey = "SCAN_STATUS_CODE"|"SCAN_STATUS_REASON"|"ACCOUNT_ID"|"RESOURCE_TYPE"|"ECR_REPOSITORY_NAME"|string;
  export type ImageHash = string;
  export interface ImageLayerAggregation {
    /**
     * The hashes associated with the layers.
     */
    layerHashes?: StringFilterList;
    /**
     * The repository associated with the container image hosting the layers.
     */
    repositories?: StringFilterList;
    /**
     * The ID of the container image layer.
     */
    resourceIds?: StringFilterList;
    /**
     * The value to sort results by.
     */
    sortBy?: ImageLayerSortBy;
    /**
     * The order to sort results by.
     */
    sortOrder?: SortOrder;
  }
  export interface ImageLayerAggregationResponse {
    /**
     * The ID of the Amazon Web Services account that owns the container image hosting the layer image.
     */
    accountId: AccountId;
    /**
     * The layer hash.
     */
    layerHash: NonEmptyString;
    /**
     * The repository the layer resides in.
     */
    repository: NonEmptyString;
    /**
     * The resource ID of the container image layer.
     */
    resourceId: NonEmptyString;
    /**
     * An object that represents the count of matched findings per severity.
     */
    severityCounts?: SeverityCounts;
  }
  export type ImageLayerSortBy = "CRITICAL"|"HIGH"|"ALL"|string;
  export type ImageTagList = NonEmptyString[];
  export interface InspectorScoreDetails {
    /**
     * An object that contains details about the CVSS score given to a finding.
     */
    adjustedCvss?: CvssScoreDetails;
  }
  export type IpV4Address = string;
  export type IpV4AddressList = IpV4Address[];
  export type IpV6Address = string;
  export type IpV6AddressList = IpV6Address[];
  export type ListAccountPermissionsMaxResults = number;
  export interface ListAccountPermissionsRequest {
    /**
     * The maximum number of results to return in the response.
     */
    maxResults?: ListAccountPermissionsMaxResults;
    /**
     * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page.
     */
    nextToken?: NextToken;
    /**
     * The service scan type to check permissions for.
     */
    service?: Service;
  }
  export interface ListAccountPermissionsResponse {
    /**
     * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page.
     */
    nextToken?: NextToken;
    /**
     * Contains details on the permissions an account has to configure Amazon Inspector.
     */
    permissions: Permissions;
  }
  export type ListCoverageMaxResults = number;
  export interface ListCoverageRequest {
    /**
     * An object that contains details on the filters to apply to the coverage data for your environment.
     */
    filterCriteria?: CoverageFilterCriteria;
    /**
     * The maximum number of results to return in the response.
     */
    maxResults?: ListCoverageMaxResults;
    /**
     * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page.
     */
    nextToken?: NextToken;
  }
  export interface ListCoverageResponse {
    /**
     * An object that contains details on the covered resources in your environment.
     */
    coveredResources?: CoveredResources;
    /**
     * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page.
     */
    nextToken?: NextToken;
  }
  export interface ListCoverageStatisticsRequest {
    /**
     * An object that contains details on the filters to apply to the coverage data for your environment.
     */
    filterCriteria?: CoverageFilterCriteria;
    /**
     * The value to group the results by.
     */
    groupBy?: GroupKey;
    /**
     * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page.
     */
    nextToken?: NextToken;
  }
  export interface ListCoverageStatisticsResponse {
    /**
     * An array with the number for each group.
     */
    countsByGroup?: CountsList;
    /**
     * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page.
     */
    nextToken?: NextToken;
    /**
     * The total number for all groups.
     */
    totalCounts: Long;
  }
  export interface ListDelegatedAdminAccountsRequest {
    /**
     * The maximum number of results to return in the response.
     */
    maxResults?: ListDelegatedAdminMaxResults;
    /**
     * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page.
     */
    nextToken?: NextToken;
  }
  export interface ListDelegatedAdminAccountsResponse {
    /**
     * Details of the Amazon Inspector delegated administrator of your organization.
     */
    delegatedAdminAccounts?: DelegatedAdminAccountList;
    /**
     * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page.
     */
    nextToken?: NextToken;
  }
  export type ListDelegatedAdminMaxResults = number;
  export type ListFilterMaxResults = number;
  export interface ListFiltersRequest {
    /**
     * The action the filter applies to matched findings.
     */
    action?: FilterAction;
    /**
     * The Amazon resource number (ARN) of the filter.
     */
    arns?: FilterArnList;
    /**
     * The maximum number of results to return in the response.
     */
    maxResults?: ListFilterMaxResults;
    /**
     * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page.
     */
    nextToken?: NextToken;
  }
  export interface ListFiltersResponse {
    /**
     * Contains details on the filters associated with your account.
     */
    filters: FilterList;
    /**
     * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page.
     */
    nextToken?: NextToken;
  }
  export type ListFindingAggregationsMaxResults = number;
  export interface ListFindingAggregationsRequest {
    /**
     * The Amazon Web Services account IDs to retrieve finding aggregation data for.
     */
    accountIds?: StringFilterList;
    /**
     * Details of the aggregation request that is used to filter your aggregation results.
     */
    aggregationRequest?: AggregationRequest;
    /**
     * The type of the aggregation request.
     */
    aggregationType: AggregationType;
    /**
     * The maximum number of results to return in the response.
     */
    maxResults?: ListFindingAggregationsMaxResults;
    /**
     * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page.
     */
    nextToken?: NextToken;
  }
  export interface ListFindingAggregationsResponse {
    /**
     * The type of aggregation to perform.
     */
    aggregationType: AggregationType;
    /**
     * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page.
     */
    nextToken?: NextToken;
    /**
     * Objects that contain the results of an aggregation operation.
     */
    responses?: AggregationResponseList;
  }
  export type ListFindingsMaxResults = number;
  export interface ListFindingsRequest {
    /**
     * Details on the filters to apply to your finding results.
     */
    filterCriteria?: FilterCriteria;
    /**
     * The maximum number of results to return in the response.
     */
    maxResults?: ListFindingsMaxResults;
    /**
     * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page.
     */
    nextToken?: NextToken;
    /**
     * Details on the sort criteria to apply to your finding results.
     */
    sortCriteria?: SortCriteria;
  }
  export interface ListFindingsResponse {
    /**
     * Contains details on the findings in your environment.
     */
    findings?: FindingList;
    /**
     * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page.
     */
    nextToken?: NextToken;
  }
  export type ListMembersMaxResults = number;
  export interface ListMembersRequest {
    /**
     * The maximum number of results to return in the response.
     */
    maxResults?: ListMembersMaxResults;
    /**
     * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page.
     */
    nextToken?: NextToken;
    /**
     * Specifies whether to list only currently associated members if True or to list all members within the organization if False.
     */
    onlyAssociated?: Boolean;
  }
  export interface ListMembersResponse {
    /**
     * An object that contains details for each member account.
     */
    members?: MemberList;
    /**
     * The pagination parameter to be used on the next list operation to retrieve more items.
     */
    nextToken?: NextToken;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon resource number (ARN) of the resource to list tags of.
     */
    resourceArn: Arn;
  }
  export interface ListTagsForResourceResponse {
    /**
     * The tags associated with the resource.
     */
    tags?: TagMap;
  }
  export type ListUsageTotalsMaxResults = number;
  export type ListUsageTotalsNextToken = string;
  export interface ListUsageTotalsRequest {
    /**
     * The Amazon Web Services account IDs to retrieve usage totals for.
     */
    accountIds?: UsageAccountIdList;
    /**
     * The maximum number of results to return in the response.
     */
    maxResults?: ListUsageTotalsMaxResults;
    /**
     * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page.
     */
    nextToken?: ListUsageTotalsNextToken;
  }
  export interface ListUsageTotalsResponse {
    /**
     * The pagination parameter to be used on the next list operation to retrieve more items.
     */
    nextToken?: ListUsageTotalsNextToken;
    /**
     * An object with details on the total usage for the requested account.
     */
    totals?: UsageTotalList;
  }
  export type Long = number;
  export type MapComparison = "EQUALS"|string;
  export interface MapFilter {
    /**
     * The operator to use when comparing values in the filter.
     */
    comparison: MapComparison;
    /**
     * The tag key used in the filter.
     */
    key: MapKey;
    /**
     * The tag value used in the filter.
     */
    value?: MapValue;
  }
  export type MapFilterList = MapFilter[];
  export type MapKey = string;
  export type MapValue = string;
  export interface Member {
    /**
     * The Amazon Web Services account ID of the member account.
     */
    accountId?: AccountId;
    /**
     * The Amazon Web Services account ID of the Amazon Inspector delegated administrator for this member account.
     */
    delegatedAdminAccountId?: AccountId;
    /**
     * The status of the member account.
     */
    relationshipStatus?: RelationshipStatus;
    /**
     * A timestamp showing when the status of this member was last updated.
     */
    updatedAt?: DateTimeTimestamp;
  }
  export type MemberList = Member[];
  export type MeteringAccountId = string;
  export type MonthlyCostEstimate = number;
  export interface NetworkPath {
    /**
     * The details on the steps in the network path.
     */
    steps?: StepList;
  }
  export type NetworkProtocol = "TCP"|"UDP"|string;
  export interface NetworkReachabilityDetails {
    /**
     * An object that contains details about a network path associated with a finding.
     */
    networkPath: NetworkPath;
    /**
     * An object that contains details about the open port range associated with a finding.
     */
    openPortRange: PortRange;
    /**
     * The protocol associated with a finding.
     */
    protocol: NetworkProtocol;
  }
  export type NextToken = string;
  export type NonEmptyString = string;
  export type NonEmptyStringList = NonEmptyString[];
  export interface NumberFilter {
    /**
     * The lowest number to be included in the filter.
     */
    lowerInclusive?: Double;
    /**
     * The highest number to be included in the filter.
     */
    upperInclusive?: Double;
  }
  export type NumberFilterList = NumberFilter[];
  export type Operation = "ENABLE_SCANNING"|"DISABLE_SCANNING"|"ENABLE_REPOSITORY"|"DISABLE_REPOSITORY"|string;
  export type OwnerId = string;
  export interface PackageAggregation {
    /**
     * The names of packages to aggregate findings on.
     */
    packageNames?: StringFilterList;
    /**
     * The value to sort results by.
     */
    sortBy?: PackageSortBy;
    /**
     * The order to sort results by.
     */
    sortOrder?: SortOrder;
  }
  export interface PackageAggregationResponse {
    /**
     * The ID of the Amazon Web Services account associated with the findings.
     */
    accountId?: AccountId;
    /**
     * The name of the operating system package.
     */
    packageName: NonEmptyString;
    /**
     * An object that contains the count of matched findings per severity.
     */
    severityCounts?: SeverityCounts;
  }
  export type PackageArchitecture = string;
  export type PackageEpoch = number;
  export interface PackageFilter {
    /**
     * An object that contains details on the package architecture type to filter on.
     */
    architecture?: StringFilter;
    /**
     * An object that contains details on the package epoch to filter on.
     */
    epoch?: NumberFilter;
    /**
     * An object that contains details on the name of the package to filter on.
     */
    name?: StringFilter;
    /**
     * An object that contains details on the package release to filter on.
     */
    release?: StringFilter;
    /**
     * An object that contains details on the source layer hash to filter on.
     */
    sourceLayerHash?: StringFilter;
    /**
     * The package version to filter on.
     */
    version?: StringFilter;
  }
  export type PackageFilterList = PackageFilter[];
  export type PackageManager = "BUNDLER"|"CARGO"|"COMPOSER"|"NPM"|"NUGET"|"PIPENV"|"POETRY"|"YARN"|"GOBINARY"|"GOMOD"|"JAR"|"OS"|"PIP"|"PYTHONPKG"|"NODEPKG"|"POM"|string;
  export type PackageName = string;
  export type PackageRelease = string;
  export type PackageSortBy = "CRITICAL"|"HIGH"|"ALL"|string;
  export type PackageVersion = string;
  export interface PackageVulnerabilityDetails {
    /**
     * An object that contains details about the CVSS score of a finding.
     */
    cvss?: CvssScoreList;
    /**
     * One or more URLs that contain details about this vulnerability type.
     */
    referenceUrls?: NonEmptyStringList;
    /**
     * One or more vulnerabilities related to the one identified in this finding.
     */
    relatedVulnerabilities?: VulnerabilityIdList;
    /**
     * The source of the vulnerability information.
     */
    source: NonEmptyString;
    /**
     * A URL to the source of the vulnerability information.
     */
    sourceUrl?: NonEmptyString;
    /**
     * The date and time that this vulnerability was first added to the vendor's database.
     */
    vendorCreatedAt?: DateTimeTimestamp;
    /**
     * The severity the vendor has given to this vulnerability type.
     */
    vendorSeverity?: NonEmptyString;
    /**
     * The date and time the vendor last updated this vulnerability in their database.
     */
    vendorUpdatedAt?: DateTimeTimestamp;
    /**
     * The ID given to this vulnerability.
     */
    vulnerabilityId: VulnerabilityId;
    /**
     * The packages impacted by this vulnerability.
     */
    vulnerablePackages?: VulnerablePackageList;
  }
  export interface Permission {
    /**
     * The operations that can be performed with the given permissions.
     */
    operation: Operation;
    /**
     * The services that the permissions allow an account to perform the given operations for.
     */
    service: Service;
  }
  export type Permissions = Permission[];
  export type Platform = string;
  export type Port = number;
  export interface PortRange {
    /**
     * The beginning port in a port range.
     */
    begin: Port;
    /**
     * The ending port in a port range.
     */
    end: Port;
  }
  export interface PortRangeFilter {
    /**
     * The port number the port range begins at.
     */
    beginInclusive?: Port;
    /**
     * The port number the port range ends at.
     */
    endInclusive?: Port;
  }
  export type PortRangeFilterList = PortRangeFilter[];
  export interface Recommendation {
    /**
     * The URL address to the CVE remediation recommendations.
     */
    Url?: NonEmptyString;
    /**
     * The recommended course of action to remediate the finding.
     */
    text?: NonEmptyString;
  }
  export type RelationshipStatus = "CREATED"|"INVITED"|"DISABLED"|"ENABLED"|"REMOVED"|"RESIGNED"|"DELETED"|"EMAIL_VERIFICATION_IN_PROGRESS"|"EMAIL_VERIFICATION_FAILED"|"REGION_DISABLED"|"ACCOUNT_SUSPENDED"|"CANNOT_CREATE_DETECTOR_IN_ORG_MASTER"|string;
  export interface Remediation {
    /**
     * An object that contains information about the recommended course of action to remediate the finding.
     */
    recommendation?: Recommendation;
  }
  export type ReportFormat = "CSV"|"JSON"|string;
  export type ReportId = string;
  export type ReportingErrorCode = "INTERNAL_ERROR"|"INVALID_PERMISSIONS"|"NO_FINDINGS_FOUND"|"BUCKET_NOT_FOUND"|"INCOMPATIBLE_BUCKET_REGION"|"MALFORMED_KMS_KEY"|string;
  export interface RepositoryAggregation {
    /**
     * The names of repositories to aggregate findings on.
     */
    repositories?: StringFilterList;
    /**
     * The value to sort results by.
     */
    sortBy?: RepositorySortBy;
    /**
     * The order to sort results by.
     */
    sortOrder?: SortOrder;
  }
  export interface RepositoryAggregationResponse {
    /**
     * The ID of the Amazon Web Services account associated with the findings.
     */
    accountId?: AccountId;
    /**
     * The number of container images impacted by the findings.
     */
    affectedImages?: Long;
    /**
     * The name of the repository associated with the findings.
     */
    repository: NonEmptyString;
    /**
     * An object that represent the count of matched findings per severity.
     */
    severityCounts?: SeverityCounts;
  }
  export type RepositorySortBy = "CRITICAL"|"HIGH"|"ALL"|"AFFECTED_IMAGES"|string;
  export interface Resource {
    /**
     * An object that contains details about the resource involved in a finding.
     */
    details?: ResourceDetails;
    /**
     * The ID of the resource.
     */
    id: NonEmptyString;
    /**
     * The partition of the resource.
     */
    partition?: NonEmptyString;
    /**
     * The Amazon Web Services Region the impacted resource is located in.
     */
    region?: NonEmptyString;
    /**
     * The tags attached to the resource.
     */
    tags?: TagMap;
    /**
     * The type of resource.
     */
    type: ResourceType;
  }
  export interface ResourceDetails {
    /**
     * An object that contains details about the Amazon EC2 instance involved in the finding.
     */
    awsEc2Instance?: AwsEc2InstanceDetails;
    /**
     * An object that contains details about the Amazon ECR container image involved in the finding.
     */
    awsEcrContainerImage?: AwsEcrContainerImageDetails;
  }
  export type ResourceId = string;
  export type ResourceList = Resource[];
  export interface ResourceScanMetadata {
    /**
     * An object that contains metadata details for an Amazon EC2 instance.
     */
    ec2?: Ec2Metadata;
    /**
     * An object that contains details about the container metadata for an Amazon ECR image.
     */
    ecrImage?: EcrContainerImageMetadata;
    /**
     * An object that contains details about the repository an Amazon ECR image resides in.
     */
    ecrRepository?: EcrRepositoryMetadata;
  }
  export type ResourceScanType = "EC2"|"ECR"|string;
  export interface ResourceState {
    /**
     * An object detailing the state of Amazon Inspector scanning for Amazon EC2 resources.
     */
    ec2: State;
    /**
     * An object detailing the state of Amazon Inspector scanning for Amazon ECR resources.
     */
    ecr: State;
  }
  export interface ResourceStatus {
    /**
     * The status of Amazon Inspector scanning for Amazon EC2 resources.
     */
    ec2: Status;
    /**
     * The status of Amazon Inspector scanning for Amazon ECR resources.
     */
    ecr: Status;
  }
  export type ResourceType = "AWS_EC2_INSTANCE"|"AWS_ECR_CONTAINER_IMAGE"|"AWS_ECR_REPOSITORY"|string;
  export interface ScanStatus {
    /**
     * The reason for the scan.
     */
    reason: ScanStatusReason;
    /**
     * The status code of the scan.
     */
    statusCode: ScanStatusCode;
  }
  export type ScanStatusCode = "ACTIVE"|"INACTIVE"|string;
  export type ScanStatusReason = "PENDING_INITIAL_SCAN"|"ACCESS_DENIED"|"INTERNAL_ERROR"|"UNMANAGED_EC2_INSTANCE"|"UNSUPPORTED_OS"|"SCAN_ELIGIBILITY_EXPIRED"|"RESOURCE_TERMINATED"|"SUCCESSFUL"|"NO_RESOURCES_FOUND"|"IMAGE_SIZE_EXCEEDED"|"SCAN_FREQUENCY_MANUAL"|"SCAN_FREQUENCY_SCAN_ON_PUSH"|"EC2_INSTANCE_STOPPED"|"PENDING_DISABLE"|"NO_INVENTORY"|"STALE_INVENTORY"|string;
  export type ScanType = "NETWORK"|"PACKAGE"|string;
  export type Service = "EC2"|"ECR"|string;
  export type Severity = "INFORMATIONAL"|"LOW"|"MEDIUM"|"HIGH"|"CRITICAL"|"UNTRIAGED"|string;
  export interface SeverityCounts {
    /**
     * The total count of findings from all severities.
     */
    all?: Long;
    /**
     * The total count of critical severity findings.
     */
    critical?: Long;
    /**
     * The total count of high severity findings.
     */
    high?: Long;
    /**
     * The total count of medium severity findings.
     */
    medium?: Long;
  }
  export interface SortCriteria {
    /**
     * The finding detail field by which results are sorted.
     */
    field: SortField;
    /**
     * The order by which findings are sorted.
     */
    sortOrder: SortOrder;
  }
  export type SortField = "AWS_ACCOUNT_ID"|"FINDING_TYPE"|"SEVERITY"|"FIRST_OBSERVED_AT"|"LAST_OBSERVED_AT"|"FINDING_STATUS"|"RESOURCE_TYPE"|"ECR_IMAGE_PUSHED_AT"|"ECR_IMAGE_REPOSITORY_NAME"|"ECR_IMAGE_REGISTRY"|"NETWORK_PROTOCOL"|"COMPONENT_TYPE"|"VULNERABILITY_ID"|"VULNERABILITY_SOURCE"|"INSPECTOR_SCORE"|"VENDOR_SEVERITY"|string;
  export type SortOrder = "ASC"|"DESC"|string;
  export type SourceLayerHash = string;
  export interface State {
    /**
     * The error code explaining why the account failed to enable Amazon Inspector.
     */
    errorCode: ErrorCode;
    /**
     * The error message received when the account failed to enable Amazon Inspector.
     */
    errorMessage: NonEmptyString;
    /**
     * The status of Amazon Inspector for the account.
     */
    status: Status;
  }
  export type Status = "ENABLING"|"ENABLED"|"DISABLING"|"DISABLED"|"SUSPENDING"|"SUSPENDED"|string;
  export interface Step {
    /**
     * The component ID.
     */
    componentId: Component;
    /**
     * The component type.
     */
    componentType: ComponentType;
  }
  export type StepList = Step[];
  export type String = string;
  export type StringComparison = "EQUALS"|"PREFIX"|"NOT_EQUALS"|string;
  export interface StringFilter {
    /**
     * The operator to use when comparing values in the filter
     */
    comparison: StringComparison;
    /**
     * The value to filter on.
     */
    value: StringInput;
  }
  export type StringFilterList = StringFilter[];
  export type StringInput = string;
  export type StringList = NonEmptyString[];
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = String[];
  export type TagMap = {[key: string]: MapValue};
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource to apply a tag to.
     */
    resourceArn: Arn;
    /**
     * The tags to be added to a resource.
     */
    tags: TagMap;
  }
  export interface TagResourceResponse {
  }
  export type Timestamp = Date;
  export interface TitleAggregation {
    /**
     * The resource type to aggregate on.
     */
    resourceType?: AggregationResourceType;
    /**
     * The value to sort results by.
     */
    sortBy?: TitleSortBy;
    /**
     * The order to sort results by.
     */
    sortOrder?: SortOrder;
    /**
     * The finding titles to aggregate on.
     */
    titles?: StringFilterList;
    /**
     * The vulnerability IDs of the findings.
     */
    vulnerabilityIds?: StringFilterList;
  }
  export interface TitleAggregationResponse {
    /**
     * The ID of the Amazon Web Services account associated with the findings.
     */
    accountId?: AccountId;
    /**
     * An object that represent the count of matched findings per severity.
     */
    severityCounts?: SeverityCounts;
    /**
     * The title that the findings were aggregated on.
     */
    title: NonEmptyString;
    /**
     * The vulnerability ID of the finding.
     */
    vulnerabilityId?: String;
  }
  export type TitleSortBy = "CRITICAL"|"HIGH"|"ALL"|string;
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) for the resource to remove tags from.
     */
    resourceArn: Arn;
    /**
     * The tag keys to remove from the resource.
     */
    tagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateConfigurationRequest {
    /**
     * Specifies how the ECR automated re-scan will be updated for your environment.
     */
    ecrConfiguration: EcrConfiguration;
  }
  export interface UpdateConfigurationResponse {
  }
  export interface UpdateFilterRequest {
    /**
     * Specifies the action that is to be applied to the findings that match the filter.
     */
    action?: FilterAction;
    /**
     * A description of the filter.
     */
    description?: FilterDescription;
    /**
     * The Amazon Resource Number (ARN) of the filter to update.
     */
    filterArn: FilterArn;
    /**
     * Defines the criteria to be update in the filter.
     */
    filterCriteria?: FilterCriteria;
    /**
     * The name of the filter.
     */
    name?: FilterName;
    /**
     * The reason the filter was updated.
     */
    reason?: FilterReason;
  }
  export interface UpdateFilterResponse {
    /**
     * The Amazon Resource Number (ARN) of the successfully updated filter.
     */
    arn: FilterArn;
  }
  export interface UpdateOrganizationConfigurationRequest {
    /**
     * Defines which scan types are enabled automatically for new members of your Amazon Inspector organization.
     */
    autoEnable: AutoEnable;
  }
  export interface UpdateOrganizationConfigurationResponse {
    /**
     * The updated status of scan types automatically enabled for new members of your Amazon Inspector organization.
     */
    autoEnable: AutoEnable;
  }
  export interface Usage {
    /**
     * The currency type used when calculating usage data.
     */
    currency?: Currency;
    /**
     * The estimated monthly cost of Amazon Inspector.
     */
    estimatedMonthlyCost?: MonthlyCostEstimate;
    /**
     * The total of usage.
     */
    total?: UsageValue;
    /**
     * The type scan.
     */
    type?: UsageType;
  }
  export type UsageAccountId = string;
  export type UsageAccountIdList = UsageAccountId[];
  export type UsageList = Usage[];
  export interface UsageTotal {
    /**
     * The account ID of the account that usage data was retrieved for.
     */
    accountId?: MeteringAccountId;
    /**
     * An object representing the total usage for an account.
     */
    usage?: UsageList;
  }
  export type UsageTotalList = UsageTotal[];
  export type UsageType = "EC2_INSTANCE_HOURS"|"ECR_INITIAL_SCAN"|"ECR_RESCAN"|string;
  export type UsageValue = number;
  export type VulnerabilityId = string;
  export type VulnerabilityIdList = VulnerabilityId[];
  export interface VulnerablePackage {
    /**
     * The architecture of the vulnerable package.
     */
    arch?: PackageArchitecture;
    /**
     * The epoch of the vulnerable package.
     */
    epoch?: PackageEpoch;
    /**
     * The file path of the vulnerable package.
     */
    filePath?: FilePath;
    /**
     * The version of the package that contains the vulnerability fix.
     */
    fixedInVersion?: PackageVersion;
    /**
     * The name of the vulnerable package.
     */
    name: PackageName;
    /**
     * The package manager of the vulnerable package.
     */
    packageManager?: PackageManager;
    /**
     * The release of the vulnerable package.
     */
    release?: PackageRelease;
    /**
     * The code to run in your environment to update packages with a fix available.
     */
    remediation?: VulnerablePackageRemediation;
    /**
     * The source layer hash of the vulnerable package.
     */
    sourceLayerHash?: SourceLayerHash;
    /**
     * The version of the vulnerable package.
     */
    version: PackageVersion;
  }
  export type VulnerablePackageList = VulnerablePackage[];
  export type VulnerablePackageRemediation = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2020-06-08"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Inspector2 client.
   */
  export import Types = Inspector2;
}
export = Inspector2;
