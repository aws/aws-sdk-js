import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class Macie2 extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Macie2.Types.ClientConfiguration)
  config: Config & Macie2.Types.ClientConfiguration;
  /**
   * Accepts an Amazon Macie membership invitation that was received from a specific account.
   */
  acceptInvitation(params: Macie2.Types.AcceptInvitationRequest, callback?: (err: AWSError, data: Macie2.Types.AcceptInvitationResponse) => void): Request<Macie2.Types.AcceptInvitationResponse, AWSError>;
  /**
   * Accepts an Amazon Macie membership invitation that was received from a specific account.
   */
  acceptInvitation(callback?: (err: AWSError, data: Macie2.Types.AcceptInvitationResponse) => void): Request<Macie2.Types.AcceptInvitationResponse, AWSError>;
  /**
   * Retrieves information about one or more custom data identifiers.
   */
  batchGetCustomDataIdentifiers(params: Macie2.Types.BatchGetCustomDataIdentifiersRequest, callback?: (err: AWSError, data: Macie2.Types.BatchGetCustomDataIdentifiersResponse) => void): Request<Macie2.Types.BatchGetCustomDataIdentifiersResponse, AWSError>;
  /**
   * Retrieves information about one or more custom data identifiers.
   */
  batchGetCustomDataIdentifiers(callback?: (err: AWSError, data: Macie2.Types.BatchGetCustomDataIdentifiersResponse) => void): Request<Macie2.Types.BatchGetCustomDataIdentifiersResponse, AWSError>;
  /**
   *  Creates and defines the settings for a classification job.
   */
  createClassificationJob(params: Macie2.Types.CreateClassificationJobRequest, callback?: (err: AWSError, data: Macie2.Types.CreateClassificationJobResponse) => void): Request<Macie2.Types.CreateClassificationJobResponse, AWSError>;
  /**
   *  Creates and defines the settings for a classification job.
   */
  createClassificationJob(callback?: (err: AWSError, data: Macie2.Types.CreateClassificationJobResponse) => void): Request<Macie2.Types.CreateClassificationJobResponse, AWSError>;
  /**
   * Creates and defines the criteria and other settings for a custom data identifier.
   */
  createCustomDataIdentifier(params: Macie2.Types.CreateCustomDataIdentifierRequest, callback?: (err: AWSError, data: Macie2.Types.CreateCustomDataIdentifierResponse) => void): Request<Macie2.Types.CreateCustomDataIdentifierResponse, AWSError>;
  /**
   * Creates and defines the criteria and other settings for a custom data identifier.
   */
  createCustomDataIdentifier(callback?: (err: AWSError, data: Macie2.Types.CreateCustomDataIdentifierResponse) => void): Request<Macie2.Types.CreateCustomDataIdentifierResponse, AWSError>;
  /**
   * Creates and defines the criteria and other settings for a findings filter.
   */
  createFindingsFilter(params: Macie2.Types.CreateFindingsFilterRequest, callback?: (err: AWSError, data: Macie2.Types.CreateFindingsFilterResponse) => void): Request<Macie2.Types.CreateFindingsFilterResponse, AWSError>;
  /**
   * Creates and defines the criteria and other settings for a findings filter.
   */
  createFindingsFilter(callback?: (err: AWSError, data: Macie2.Types.CreateFindingsFilterResponse) => void): Request<Macie2.Types.CreateFindingsFilterResponse, AWSError>;
  /**
   *  Sends an Amazon Macie membership invitation to one or more accounts.
   */
  createInvitations(params: Macie2.Types.CreateInvitationsRequest, callback?: (err: AWSError, data: Macie2.Types.CreateInvitationsResponse) => void): Request<Macie2.Types.CreateInvitationsResponse, AWSError>;
  /**
   *  Sends an Amazon Macie membership invitation to one or more accounts.
   */
  createInvitations(callback?: (err: AWSError, data: Macie2.Types.CreateInvitationsResponse) => void): Request<Macie2.Types.CreateInvitationsResponse, AWSError>;
  /**
   *  Associates an account with an Amazon Macie master account.
   */
  createMember(params: Macie2.Types.CreateMemberRequest, callback?: (err: AWSError, data: Macie2.Types.CreateMemberResponse) => void): Request<Macie2.Types.CreateMemberResponse, AWSError>;
  /**
   *  Associates an account with an Amazon Macie master account.
   */
  createMember(callback?: (err: AWSError, data: Macie2.Types.CreateMemberResponse) => void): Request<Macie2.Types.CreateMemberResponse, AWSError>;
  /**
   *  Creates sample findings.
   */
  createSampleFindings(params: Macie2.Types.CreateSampleFindingsRequest, callback?: (err: AWSError, data: Macie2.Types.CreateSampleFindingsResponse) => void): Request<Macie2.Types.CreateSampleFindingsResponse, AWSError>;
  /**
   *  Creates sample findings.
   */
  createSampleFindings(callback?: (err: AWSError, data: Macie2.Types.CreateSampleFindingsResponse) => void): Request<Macie2.Types.CreateSampleFindingsResponse, AWSError>;
  /**
   * Declines Amazon Macie membership invitations that were received from specific accounts.
   */
  declineInvitations(params: Macie2.Types.DeclineInvitationsRequest, callback?: (err: AWSError, data: Macie2.Types.DeclineInvitationsResponse) => void): Request<Macie2.Types.DeclineInvitationsResponse, AWSError>;
  /**
   * Declines Amazon Macie membership invitations that were received from specific accounts.
   */
  declineInvitations(callback?: (err: AWSError, data: Macie2.Types.DeclineInvitationsResponse) => void): Request<Macie2.Types.DeclineInvitationsResponse, AWSError>;
  /**
   * Soft deletes a custom data identifier.
   */
  deleteCustomDataIdentifier(params: Macie2.Types.DeleteCustomDataIdentifierRequest, callback?: (err: AWSError, data: Macie2.Types.DeleteCustomDataIdentifierResponse) => void): Request<Macie2.Types.DeleteCustomDataIdentifierResponse, AWSError>;
  /**
   * Soft deletes a custom data identifier.
   */
  deleteCustomDataIdentifier(callback?: (err: AWSError, data: Macie2.Types.DeleteCustomDataIdentifierResponse) => void): Request<Macie2.Types.DeleteCustomDataIdentifierResponse, AWSError>;
  /**
   * Deletes a findings filter.
   */
  deleteFindingsFilter(params: Macie2.Types.DeleteFindingsFilterRequest, callback?: (err: AWSError, data: Macie2.Types.DeleteFindingsFilterResponse) => void): Request<Macie2.Types.DeleteFindingsFilterResponse, AWSError>;
  /**
   * Deletes a findings filter.
   */
  deleteFindingsFilter(callback?: (err: AWSError, data: Macie2.Types.DeleteFindingsFilterResponse) => void): Request<Macie2.Types.DeleteFindingsFilterResponse, AWSError>;
  /**
   * Deletes Amazon Macie membership invitations that were received from specific accounts.
   */
  deleteInvitations(params: Macie2.Types.DeleteInvitationsRequest, callback?: (err: AWSError, data: Macie2.Types.DeleteInvitationsResponse) => void): Request<Macie2.Types.DeleteInvitationsResponse, AWSError>;
  /**
   * Deletes Amazon Macie membership invitations that were received from specific accounts.
   */
  deleteInvitations(callback?: (err: AWSError, data: Macie2.Types.DeleteInvitationsResponse) => void): Request<Macie2.Types.DeleteInvitationsResponse, AWSError>;
  /**
   * Deletes the association between an Amazon Macie master account and an account.
   */
  deleteMember(params: Macie2.Types.DeleteMemberRequest, callback?: (err: AWSError, data: Macie2.Types.DeleteMemberResponse) => void): Request<Macie2.Types.DeleteMemberResponse, AWSError>;
  /**
   * Deletes the association between an Amazon Macie master account and an account.
   */
  deleteMember(callback?: (err: AWSError, data: Macie2.Types.DeleteMemberResponse) => void): Request<Macie2.Types.DeleteMemberResponse, AWSError>;
  /**
   *  Retrieves (queries) statistical data and other information about one or more S3 buckets that Amazon Macie monitors and analyzes.
   */
  describeBuckets(params: Macie2.Types.DescribeBucketsRequest, callback?: (err: AWSError, data: Macie2.Types.DescribeBucketsResponse) => void): Request<Macie2.Types.DescribeBucketsResponse, AWSError>;
  /**
   *  Retrieves (queries) statistical data and other information about one or more S3 buckets that Amazon Macie monitors and analyzes.
   */
  describeBuckets(callback?: (err: AWSError, data: Macie2.Types.DescribeBucketsResponse) => void): Request<Macie2.Types.DescribeBucketsResponse, AWSError>;
  /**
   * Retrieves the status and settings for a classification job.
   */
  describeClassificationJob(params: Macie2.Types.DescribeClassificationJobRequest, callback?: (err: AWSError, data: Macie2.Types.DescribeClassificationJobResponse) => void): Request<Macie2.Types.DescribeClassificationJobResponse, AWSError>;
  /**
   * Retrieves the status and settings for a classification job.
   */
  describeClassificationJob(callback?: (err: AWSError, data: Macie2.Types.DescribeClassificationJobResponse) => void): Request<Macie2.Types.DescribeClassificationJobResponse, AWSError>;
  /**
   * Retrieves the Amazon Macie configuration settings for an AWS organization.
   */
  describeOrganizationConfiguration(params: Macie2.Types.DescribeOrganizationConfigurationRequest, callback?: (err: AWSError, data: Macie2.Types.DescribeOrganizationConfigurationResponse) => void): Request<Macie2.Types.DescribeOrganizationConfigurationResponse, AWSError>;
  /**
   * Retrieves the Amazon Macie configuration settings for an AWS organization.
   */
  describeOrganizationConfiguration(callback?: (err: AWSError, data: Macie2.Types.DescribeOrganizationConfigurationResponse) => void): Request<Macie2.Types.DescribeOrganizationConfigurationResponse, AWSError>;
  /**
   * Disables an Amazon Macie account and deletes Macie resources for the account.
   */
  disableMacie(params: Macie2.Types.DisableMacieRequest, callback?: (err: AWSError, data: Macie2.Types.DisableMacieResponse) => void): Request<Macie2.Types.DisableMacieResponse, AWSError>;
  /**
   * Disables an Amazon Macie account and deletes Macie resources for the account.
   */
  disableMacie(callback?: (err: AWSError, data: Macie2.Types.DisableMacieResponse) => void): Request<Macie2.Types.DisableMacieResponse, AWSError>;
  /**
   * Disables an account as the delegated Amazon Macie administrator account for an AWS organization.
   */
  disableOrganizationAdminAccount(params: Macie2.Types.DisableOrganizationAdminAccountRequest, callback?: (err: AWSError, data: Macie2.Types.DisableOrganizationAdminAccountResponse) => void): Request<Macie2.Types.DisableOrganizationAdminAccountResponse, AWSError>;
  /**
   * Disables an account as the delegated Amazon Macie administrator account for an AWS organization.
   */
  disableOrganizationAdminAccount(callback?: (err: AWSError, data: Macie2.Types.DisableOrganizationAdminAccountResponse) => void): Request<Macie2.Types.DisableOrganizationAdminAccountResponse, AWSError>;
  /**
   * Disassociates a member account from its Amazon Macie master account.
   */
  disassociateFromMasterAccount(params: Macie2.Types.DisassociateFromMasterAccountRequest, callback?: (err: AWSError, data: Macie2.Types.DisassociateFromMasterAccountResponse) => void): Request<Macie2.Types.DisassociateFromMasterAccountResponse, AWSError>;
  /**
   * Disassociates a member account from its Amazon Macie master account.
   */
  disassociateFromMasterAccount(callback?: (err: AWSError, data: Macie2.Types.DisassociateFromMasterAccountResponse) => void): Request<Macie2.Types.DisassociateFromMasterAccountResponse, AWSError>;
  /**
   * Disassociates an Amazon Macie master account from a member account.
   */
  disassociateMember(params: Macie2.Types.DisassociateMemberRequest, callback?: (err: AWSError, data: Macie2.Types.DisassociateMemberResponse) => void): Request<Macie2.Types.DisassociateMemberResponse, AWSError>;
  /**
   * Disassociates an Amazon Macie master account from a member account.
   */
  disassociateMember(callback?: (err: AWSError, data: Macie2.Types.DisassociateMemberResponse) => void): Request<Macie2.Types.DisassociateMemberResponse, AWSError>;
  /**
   * Enables Amazon Macie and specifies the configuration settings for a Macie account.
   */
  enableMacie(params: Macie2.Types.EnableMacieRequest, callback?: (err: AWSError, data: Macie2.Types.EnableMacieResponse) => void): Request<Macie2.Types.EnableMacieResponse, AWSError>;
  /**
   * Enables Amazon Macie and specifies the configuration settings for a Macie account.
   */
  enableMacie(callback?: (err: AWSError, data: Macie2.Types.EnableMacieResponse) => void): Request<Macie2.Types.EnableMacieResponse, AWSError>;
  /**
   * Designates an account as the delegated Amazon Macie administrator account for an AWS organization.
   */
  enableOrganizationAdminAccount(params: Macie2.Types.EnableOrganizationAdminAccountRequest, callback?: (err: AWSError, data: Macie2.Types.EnableOrganizationAdminAccountResponse) => void): Request<Macie2.Types.EnableOrganizationAdminAccountResponse, AWSError>;
  /**
   * Designates an account as the delegated Amazon Macie administrator account for an AWS organization.
   */
  enableOrganizationAdminAccount(callback?: (err: AWSError, data: Macie2.Types.EnableOrganizationAdminAccountResponse) => void): Request<Macie2.Types.EnableOrganizationAdminAccountResponse, AWSError>;
  /**
   *  Retrieves (queries) aggregated statistical data for all the S3 buckets that Amazon Macie monitors and analyzes.
   */
  getBucketStatistics(params: Macie2.Types.GetBucketStatisticsRequest, callback?: (err: AWSError, data: Macie2.Types.GetBucketStatisticsResponse) => void): Request<Macie2.Types.GetBucketStatisticsResponse, AWSError>;
  /**
   *  Retrieves (queries) aggregated statistical data for all the S3 buckets that Amazon Macie monitors and analyzes.
   */
  getBucketStatistics(callback?: (err: AWSError, data: Macie2.Types.GetBucketStatisticsResponse) => void): Request<Macie2.Types.GetBucketStatisticsResponse, AWSError>;
  /**
   * Retrieves the configuration settings for storing data classification results.
   */
  getClassificationExportConfiguration(params: Macie2.Types.GetClassificationExportConfigurationRequest, callback?: (err: AWSError, data: Macie2.Types.GetClassificationExportConfigurationResponse) => void): Request<Macie2.Types.GetClassificationExportConfigurationResponse, AWSError>;
  /**
   * Retrieves the configuration settings for storing data classification results.
   */
  getClassificationExportConfiguration(callback?: (err: AWSError, data: Macie2.Types.GetClassificationExportConfigurationResponse) => void): Request<Macie2.Types.GetClassificationExportConfigurationResponse, AWSError>;
  /**
   * Retrieves the criteria and other settings for a custom data identifier.
   */
  getCustomDataIdentifier(params: Macie2.Types.GetCustomDataIdentifierRequest, callback?: (err: AWSError, data: Macie2.Types.GetCustomDataIdentifierResponse) => void): Request<Macie2.Types.GetCustomDataIdentifierResponse, AWSError>;
  /**
   * Retrieves the criteria and other settings for a custom data identifier.
   */
  getCustomDataIdentifier(callback?: (err: AWSError, data: Macie2.Types.GetCustomDataIdentifierResponse) => void): Request<Macie2.Types.GetCustomDataIdentifierResponse, AWSError>;
  /**
   *  Retrieves (queries) aggregated statistical data about findings.
   */
  getFindingStatistics(params: Macie2.Types.GetFindingStatisticsRequest, callback?: (err: AWSError, data: Macie2.Types.GetFindingStatisticsResponse) => void): Request<Macie2.Types.GetFindingStatisticsResponse, AWSError>;
  /**
   *  Retrieves (queries) aggregated statistical data about findings.
   */
  getFindingStatistics(callback?: (err: AWSError, data: Macie2.Types.GetFindingStatisticsResponse) => void): Request<Macie2.Types.GetFindingStatisticsResponse, AWSError>;
  /**
   * Retrieves the details of one or more findings.
   */
  getFindings(params: Macie2.Types.GetFindingsRequest, callback?: (err: AWSError, data: Macie2.Types.GetFindingsResponse) => void): Request<Macie2.Types.GetFindingsResponse, AWSError>;
  /**
   * Retrieves the details of one or more findings.
   */
  getFindings(callback?: (err: AWSError, data: Macie2.Types.GetFindingsResponse) => void): Request<Macie2.Types.GetFindingsResponse, AWSError>;
  /**
   * Retrieves the criteria and other settings for a findings filter.
   */
  getFindingsFilter(params: Macie2.Types.GetFindingsFilterRequest, callback?: (err: AWSError, data: Macie2.Types.GetFindingsFilterResponse) => void): Request<Macie2.Types.GetFindingsFilterResponse, AWSError>;
  /**
   * Retrieves the criteria and other settings for a findings filter.
   */
  getFindingsFilter(callback?: (err: AWSError, data: Macie2.Types.GetFindingsFilterResponse) => void): Request<Macie2.Types.GetFindingsFilterResponse, AWSError>;
  /**
   * Retrieves the count of Amazon Macie membership invitations that were received by an account.
   */
  getInvitationsCount(params: Macie2.Types.GetInvitationsCountRequest, callback?: (err: AWSError, data: Macie2.Types.GetInvitationsCountResponse) => void): Request<Macie2.Types.GetInvitationsCountResponse, AWSError>;
  /**
   * Retrieves the count of Amazon Macie membership invitations that were received by an account.
   */
  getInvitationsCount(callback?: (err: AWSError, data: Macie2.Types.GetInvitationsCountResponse) => void): Request<Macie2.Types.GetInvitationsCountResponse, AWSError>;
  /**
   * Retrieves the current status and configuration settings for an Amazon Macie account.
   */
  getMacieSession(params: Macie2.Types.GetMacieSessionRequest, callback?: (err: AWSError, data: Macie2.Types.GetMacieSessionResponse) => void): Request<Macie2.Types.GetMacieSessionResponse, AWSError>;
  /**
   * Retrieves the current status and configuration settings for an Amazon Macie account.
   */
  getMacieSession(callback?: (err: AWSError, data: Macie2.Types.GetMacieSessionResponse) => void): Request<Macie2.Types.GetMacieSessionResponse, AWSError>;
  /**
   * Retrieves information about the Amazon Macie master account for an account.
   */
  getMasterAccount(params: Macie2.Types.GetMasterAccountRequest, callback?: (err: AWSError, data: Macie2.Types.GetMasterAccountResponse) => void): Request<Macie2.Types.GetMasterAccountResponse, AWSError>;
  /**
   * Retrieves information about the Amazon Macie master account for an account.
   */
  getMasterAccount(callback?: (err: AWSError, data: Macie2.Types.GetMasterAccountResponse) => void): Request<Macie2.Types.GetMasterAccountResponse, AWSError>;
  /**
   * Retrieves information about a member account that's associated with an Amazon Macie master account.
   */
  getMember(params: Macie2.Types.GetMemberRequest, callback?: (err: AWSError, data: Macie2.Types.GetMemberResponse) => void): Request<Macie2.Types.GetMemberResponse, AWSError>;
  /**
   * Retrieves information about a member account that's associated with an Amazon Macie master account.
   */
  getMember(callback?: (err: AWSError, data: Macie2.Types.GetMemberResponse) => void): Request<Macie2.Types.GetMemberResponse, AWSError>;
  /**
   * Retrieves (queries) quotas and aggregated usage data for one or more accounts.
   */
  getUsageStatistics(params: Macie2.Types.GetUsageStatisticsRequest, callback?: (err: AWSError, data: Macie2.Types.GetUsageStatisticsResponse) => void): Request<Macie2.Types.GetUsageStatisticsResponse, AWSError>;
  /**
   * Retrieves (queries) quotas and aggregated usage data for one or more accounts.
   */
  getUsageStatistics(callback?: (err: AWSError, data: Macie2.Types.GetUsageStatisticsResponse) => void): Request<Macie2.Types.GetUsageStatisticsResponse, AWSError>;
  /**
   * Retrieves (queries) aggregated usage data for an account.
   */
  getUsageTotals(params: Macie2.Types.GetUsageTotalsRequest, callback?: (err: AWSError, data: Macie2.Types.GetUsageTotalsResponse) => void): Request<Macie2.Types.GetUsageTotalsResponse, AWSError>;
  /**
   * Retrieves (queries) aggregated usage data for an account.
   */
  getUsageTotals(callback?: (err: AWSError, data: Macie2.Types.GetUsageTotalsResponse) => void): Request<Macie2.Types.GetUsageTotalsResponse, AWSError>;
  /**
   * Retrieves a subset of information about one or more classification jobs.
   */
  listClassificationJobs(params: Macie2.Types.ListClassificationJobsRequest, callback?: (err: AWSError, data: Macie2.Types.ListClassificationJobsResponse) => void): Request<Macie2.Types.ListClassificationJobsResponse, AWSError>;
  /**
   * Retrieves a subset of information about one or more classification jobs.
   */
  listClassificationJobs(callback?: (err: AWSError, data: Macie2.Types.ListClassificationJobsResponse) => void): Request<Macie2.Types.ListClassificationJobsResponse, AWSError>;
  /**
   * Retrieves a subset of information about all the custom data identifiers for an account.
   */
  listCustomDataIdentifiers(params: Macie2.Types.ListCustomDataIdentifiersRequest, callback?: (err: AWSError, data: Macie2.Types.ListCustomDataIdentifiersResponse) => void): Request<Macie2.Types.ListCustomDataIdentifiersResponse, AWSError>;
  /**
   * Retrieves a subset of information about all the custom data identifiers for an account.
   */
  listCustomDataIdentifiers(callback?: (err: AWSError, data: Macie2.Types.ListCustomDataIdentifiersResponse) => void): Request<Macie2.Types.ListCustomDataIdentifiersResponse, AWSError>;
  /**
   *  Retrieves a subset of information about one or more findings.
   */
  listFindings(params: Macie2.Types.ListFindingsRequest, callback?: (err: AWSError, data: Macie2.Types.ListFindingsResponse) => void): Request<Macie2.Types.ListFindingsResponse, AWSError>;
  /**
   *  Retrieves a subset of information about one or more findings.
   */
  listFindings(callback?: (err: AWSError, data: Macie2.Types.ListFindingsResponse) => void): Request<Macie2.Types.ListFindingsResponse, AWSError>;
  /**
   * Retrieves a subset of information about all the findings filters for an account.
   */
  listFindingsFilters(params: Macie2.Types.ListFindingsFiltersRequest, callback?: (err: AWSError, data: Macie2.Types.ListFindingsFiltersResponse) => void): Request<Macie2.Types.ListFindingsFiltersResponse, AWSError>;
  /**
   * Retrieves a subset of information about all the findings filters for an account.
   */
  listFindingsFilters(callback?: (err: AWSError, data: Macie2.Types.ListFindingsFiltersResponse) => void): Request<Macie2.Types.ListFindingsFiltersResponse, AWSError>;
  /**
   * Retrieves information about all the Amazon Macie membership invitations that were received by an account.
   */
  listInvitations(params: Macie2.Types.ListInvitationsRequest, callback?: (err: AWSError, data: Macie2.Types.ListInvitationsResponse) => void): Request<Macie2.Types.ListInvitationsResponse, AWSError>;
  /**
   * Retrieves information about all the Amazon Macie membership invitations that were received by an account.
   */
  listInvitations(callback?: (err: AWSError, data: Macie2.Types.ListInvitationsResponse) => void): Request<Macie2.Types.ListInvitationsResponse, AWSError>;
  /**
   * Retrieves information about the accounts that are associated with an Amazon Macie master account.
   */
  listMembers(params: Macie2.Types.ListMembersRequest, callback?: (err: AWSError, data: Macie2.Types.ListMembersResponse) => void): Request<Macie2.Types.ListMembersResponse, AWSError>;
  /**
   * Retrieves information about the accounts that are associated with an Amazon Macie master account.
   */
  listMembers(callback?: (err: AWSError, data: Macie2.Types.ListMembersResponse) => void): Request<Macie2.Types.ListMembersResponse, AWSError>;
  /**
   * Retrieves information about the delegated Amazon Macie administrator account for an AWS organization.
   */
  listOrganizationAdminAccounts(params: Macie2.Types.ListOrganizationAdminAccountsRequest, callback?: (err: AWSError, data: Macie2.Types.ListOrganizationAdminAccountsResponse) => void): Request<Macie2.Types.ListOrganizationAdminAccountsResponse, AWSError>;
  /**
   * Retrieves information about the delegated Amazon Macie administrator account for an AWS organization.
   */
  listOrganizationAdminAccounts(callback?: (err: AWSError, data: Macie2.Types.ListOrganizationAdminAccountsResponse) => void): Request<Macie2.Types.ListOrganizationAdminAccountsResponse, AWSError>;
  /**
   * Retrieves the tags (keys and values) that are associated with a classification job, custom data identifier, findings filter, or member account.
   */
  listTagsForResource(params: Macie2.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: Macie2.Types.ListTagsForResourceResponse) => void): Request<Macie2.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Retrieves the tags (keys and values) that are associated with a classification job, custom data identifier, findings filter, or member account.
   */
  listTagsForResource(callback?: (err: AWSError, data: Macie2.Types.ListTagsForResourceResponse) => void): Request<Macie2.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Creates or updates the configuration settings for storing data classification results.
   */
  putClassificationExportConfiguration(params: Macie2.Types.PutClassificationExportConfigurationRequest, callback?: (err: AWSError, data: Macie2.Types.PutClassificationExportConfigurationResponse) => void): Request<Macie2.Types.PutClassificationExportConfigurationResponse, AWSError>;
  /**
   * Creates or updates the configuration settings for storing data classification results.
   */
  putClassificationExportConfiguration(callback?: (err: AWSError, data: Macie2.Types.PutClassificationExportConfigurationResponse) => void): Request<Macie2.Types.PutClassificationExportConfigurationResponse, AWSError>;
  /**
   * Adds or updates one or more tags (keys and values) that are associated with a classification job, custom data identifier, findings filter, or member account.
   */
  tagResource(params: Macie2.Types.TagResourceRequest, callback?: (err: AWSError, data: Macie2.Types.TagResourceResponse) => void): Request<Macie2.Types.TagResourceResponse, AWSError>;
  /**
   * Adds or updates one or more tags (keys and values) that are associated with a classification job, custom data identifier, findings filter, or member account.
   */
  tagResource(callback?: (err: AWSError, data: Macie2.Types.TagResourceResponse) => void): Request<Macie2.Types.TagResourceResponse, AWSError>;
  /**
   * Tests a custom data identifier.
   */
  testCustomDataIdentifier(params: Macie2.Types.TestCustomDataIdentifierRequest, callback?: (err: AWSError, data: Macie2.Types.TestCustomDataIdentifierResponse) => void): Request<Macie2.Types.TestCustomDataIdentifierResponse, AWSError>;
  /**
   * Tests a custom data identifier.
   */
  testCustomDataIdentifier(callback?: (err: AWSError, data: Macie2.Types.TestCustomDataIdentifierResponse) => void): Request<Macie2.Types.TestCustomDataIdentifierResponse, AWSError>;
  /**
   * Removes one or more tags (keys and values) from a classification job, custom data identifier, findings filter, or member account.
   */
  untagResource(params: Macie2.Types.UntagResourceRequest, callback?: (err: AWSError, data: Macie2.Types.UntagResourceResponse) => void): Request<Macie2.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes one or more tags (keys and values) from a classification job, custom data identifier, findings filter, or member account.
   */
  untagResource(callback?: (err: AWSError, data: Macie2.Types.UntagResourceResponse) => void): Request<Macie2.Types.UntagResourceResponse, AWSError>;
  /**
   * Changes the status of a classification job.
   */
  updateClassificationJob(params: Macie2.Types.UpdateClassificationJobRequest, callback?: (err: AWSError, data: Macie2.Types.UpdateClassificationJobResponse) => void): Request<Macie2.Types.UpdateClassificationJobResponse, AWSError>;
  /**
   * Changes the status of a classification job.
   */
  updateClassificationJob(callback?: (err: AWSError, data: Macie2.Types.UpdateClassificationJobResponse) => void): Request<Macie2.Types.UpdateClassificationJobResponse, AWSError>;
  /**
   * Updates the criteria and other settings for a findings filter.
   */
  updateFindingsFilter(params: Macie2.Types.UpdateFindingsFilterRequest, callback?: (err: AWSError, data: Macie2.Types.UpdateFindingsFilterResponse) => void): Request<Macie2.Types.UpdateFindingsFilterResponse, AWSError>;
  /**
   * Updates the criteria and other settings for a findings filter.
   */
  updateFindingsFilter(callback?: (err: AWSError, data: Macie2.Types.UpdateFindingsFilterResponse) => void): Request<Macie2.Types.UpdateFindingsFilterResponse, AWSError>;
  /**
   * Suspends or re-enables an Amazon Macie account, or updates the configuration settings for a Macie account.
   */
  updateMacieSession(params: Macie2.Types.UpdateMacieSessionRequest, callback?: (err: AWSError, data: Macie2.Types.UpdateMacieSessionResponse) => void): Request<Macie2.Types.UpdateMacieSessionResponse, AWSError>;
  /**
   * Suspends or re-enables an Amazon Macie account, or updates the configuration settings for a Macie account.
   */
  updateMacieSession(callback?: (err: AWSError, data: Macie2.Types.UpdateMacieSessionResponse) => void): Request<Macie2.Types.UpdateMacieSessionResponse, AWSError>;
  /**
   *  Enables an Amazon Macie master account to suspend or re-enable a member account.
   */
  updateMemberSession(params: Macie2.Types.UpdateMemberSessionRequest, callback?: (err: AWSError, data: Macie2.Types.UpdateMemberSessionResponse) => void): Request<Macie2.Types.UpdateMemberSessionResponse, AWSError>;
  /**
   *  Enables an Amazon Macie master account to suspend or re-enable a member account.
   */
  updateMemberSession(callback?: (err: AWSError, data: Macie2.Types.UpdateMemberSessionResponse) => void): Request<Macie2.Types.UpdateMemberSessionResponse, AWSError>;
  /**
   * Updates the Amazon Macie configuration settings for an AWS organization.
   */
  updateOrganizationConfiguration(params: Macie2.Types.UpdateOrganizationConfigurationRequest, callback?: (err: AWSError, data: Macie2.Types.UpdateOrganizationConfigurationResponse) => void): Request<Macie2.Types.UpdateOrganizationConfigurationResponse, AWSError>;
  /**
   * Updates the Amazon Macie configuration settings for an AWS organization.
   */
  updateOrganizationConfiguration(callback?: (err: AWSError, data: Macie2.Types.UpdateOrganizationConfigurationResponse) => void): Request<Macie2.Types.UpdateOrganizationConfigurationResponse, AWSError>;
}
declare namespace Macie2 {
  export interface AcceptInvitationRequest {
    /**
     * The unique identifier for the invitation to accept.
     */
    invitationId: __string;
    /**
     * The AWS account ID for the account that sent the invitation.
     */
    masterAccount: __string;
  }
  export interface AcceptInvitationResponse {
  }
  export interface AccessControlList {
    /**
     * Specifies whether the ACL grants the general public with read access permissions for the bucket.
     */
    allowsPublicReadAccess?: __boolean;
    /**
     * Specifies whether the ACL grants the general public with write access permissions for the bucket.
     */
    allowsPublicWriteAccess?: __boolean;
  }
  export interface AccountDetail {
    /**
     * The AWS account ID for the account.
     */
    accountId: __string;
    /**
     * The email address for the account.
     */
    email: __string;
  }
  export interface AccountLevelPermissions {
    /**
     * The block public access settings for the bucket.
     */
    blockPublicAccess?: BlockPublicAccess;
  }
  export interface AdminAccount {
    /**
     * The AWS account ID for the account.
     */
    accountId?: __string;
    /**
     * The current status of the account as a delegated administrator of Amazon Macie for the organization.
     */
    status?: AdminStatus;
  }
  export type AdminStatus = "ENABLED"|"DISABLING_IN_PROGRESS"|string;
  export interface ApiCallDetails {
    /**
     * The name of the operation that was invoked most recently and produced the finding.
     */
    api?: __string;
    /**
     * The URL of the AWS service that provides the operation, for example: s3.amazonaws.com.
     */
    apiServiceName?: __string;
    /**
     * The first date and time, in UTC and extended ISO 8601 format, when any operation was invoked and produced the finding.
     */
    firstSeen?: __timestampIso8601;
    /**
     * The most recent date and time, in UTC and extended ISO 8601 format, when the specified operation (api) was invoked and produced the finding.
     */
    lastSeen?: __timestampIso8601;
  }
  export interface AssumedRole {
    /**
     * The AWS access key ID that identifies the credentials.
     */
    accessKeyId?: __string;
    /**
     * The unique identifier for the AWS account that owns the entity that was used to get the credentials.
     */
    accountId?: __string;
    /**
     * The Amazon Resource Name (ARN) of the entity that was used to get the credentials.
     */
    arn?: __string;
    /**
     * The unique identifier for the entity that was used to get the credentials.
     */
    principalId?: __string;
    /**
     * The details of the session that was created for the credentials, including the entity that issued the session.
     */
    sessionContext?: SessionContext;
  }
  export interface AwsAccount {
    /**
     * The unique identifier for the AWS account.
     */
    accountId?: __string;
    /**
     * The unique identifier for the entity that performed the action.
     */
    principalId?: __string;
  }
  export interface AwsService {
    /**
     * The name of the AWS service that performed the action.
     */
    invokedBy?: __string;
  }
  export interface BatchGetCustomDataIdentifierSummary {
    /**
     * The Amazon Resource Name (ARN) of the custom data identifier.
     */
    arn?: __string;
    /**
     * The date and time, in UTC and extended ISO 8601 format, when the custom data identifier was created.
     */
    createdAt?: __timestampIso8601;
    /**
     * Specifies whether the custom data identifier was deleted. If you delete a custom data identifier, Amazon Macie doesn't delete it permanently. Instead, it soft deletes the identifier.
     */
    deleted?: __boolean;
    /**
     * The custom description of the custom data identifier.
     */
    description?: __string;
    /**
     * The unique identifier for the custom data identifier.
     */
    id?: __string;
    /**
     * The custom name of the custom data identifier.
     */
    name?: __string;
  }
  export interface BatchGetCustomDataIdentifiersRequest {
    /**
     * An array of strings that lists the unique identifiers for the custom data identifiers to retrieve information about.
     */
    ids?: __listOf__string;
  }
  export interface BatchGetCustomDataIdentifiersResponse {
    /**
     * An array of objects, one for each custom data identifier that meets the criteria specified in the request.
     */
    customDataIdentifiers?: __listOfBatchGetCustomDataIdentifierSummary;
    /**
     * An array of identifiers, one for each identifier that was specified in the request, but doesn't correlate to an existing custom data identifier.
     */
    notFoundIdentifierIds?: __listOf__string;
  }
  export interface BlockPublicAccess {
    /**
     * Specifies whether Amazon S3 blocks public access control lists (ACLs) for the bucket and objects in the bucket.
     */
    blockPublicAcls?: __boolean;
    /**
     * Specifies whether Amazon S3 blocks public bucket policies for the bucket.
     */
    blockPublicPolicy?: __boolean;
    /**
     * Specifies whether Amazon S3 ignores public ACLs for the bucket and objects in the bucket.
     */
    ignorePublicAcls?: __boolean;
    /**
     * Specifies whether Amazon S3 restricts public bucket policies for the bucket.
     */
    restrictPublicBuckets?: __boolean;
  }
  export interface BucketCountByEffectivePermission {
    /**
     * The total number of buckets that allow the general public to have read or write access to the bucket.
     */
    publiclyAccessible?: __long;
    /**
     * The total number of buckets that allow the general public to have read access to the bucket.
     */
    publiclyReadable?: __long;
    /**
     * The total number of buckets that allow the general public to have write access to the bucket.
     */
    publiclyWritable?: __long;
    /**
     * The total number of buckets that Amazon Macie wasn't able to evaluate permissions settings for. Macie can't determine whether these buckets are publicly accessible.
     */
    unknown?: __long;
  }
  export interface BucketCountByEncryptionType {
    /**
     *  The total number of buckets that use an AWS Key Management Service (AWS KMS) customer master key (CMK) by default to encrypt objects. These buckets use AWS managed AWS KMS (AWS-KMS) encryption or customer managed AWS KMS (SSE-KMS) encryption.
     */
    kmsManaged?: __long;
    /**
     * The total number of buckets that use an Amazon S3 managed key by default to encrypt objects. These buckets use Amazon S3 managed (SSE-S3) encryption.
     */
    s3Managed?: __long;
    /**
     * The total number of buckets that don't encrypt objects by default. Default encryption is disabled for these buckets.
     */
    unencrypted?: __long;
  }
  export interface BucketCountBySharedAccessType {
    /**
     * The total number of buckets that are shared with an AWS account that isn't part of the same Amazon Macie organization.
     */
    external?: __long;
    /**
     * The total number of buckets that are shared with an AWS account that's part of the same Amazon Macie organization.
     */
    internal?: __long;
    /**
     * The total number of buckets that aren't shared with other AWS accounts.
     */
    notShared?: __long;
    /**
     * The total number of buckets that Amazon Macie wasn't able to evaluate shared access settings for. Macie can't determine whether these buckets are shared with other AWS accounts.
     */
    unknown?: __long;
  }
  export type BucketCriteria = {[key: string]: BucketCriteriaAdditionalProperties};
  export interface BucketCriteriaAdditionalProperties {
    /**
     * The value for the property matches (equals) the specified value. If you specify multiple values, Macie uses OR logic to join the values.
     */
    eq?: __listOf__string;
    /**
     * The value for the property is greater than the specified value.
     */
    gt?: __long;
    /**
     * The value for the property is greater than or equal to the specified value.
     */
    gte?: __long;
    /**
     * The value for the property is less than the specified value.
     */
    lt?: __long;
    /**
     * The value for the property is less than or equal to the specified value.
     */
    lte?: __long;
    /**
     * The value for the property doesn't match (doesn't equal) the specified value. If you specify multiple values, Amazon Macie uses OR logic to join the values.
     */
    neq?: __listOf__string;
    /**
     * The name of the bucket begins with the specified value.
     */
    prefix?: __string;
  }
  export interface BucketLevelPermissions {
    /**
     * The permissions settings of the access control list (ACL) for the bucket. This value is null if an ACL hasn't been defined for the bucket.
     */
    accessControlList?: AccessControlList;
    /**
     * The block public access settings for the bucket.
     */
    blockPublicAccess?: BlockPublicAccess;
    /**
     * The permissions settings of the bucket policy for the bucket. This value is null if a bucket policy hasn't been defined for the bucket.
     */
    bucketPolicy?: BucketPolicy;
  }
  export interface BucketMetadata {
    /**
     * The unique identifier for the AWS account that owns the bucket.
     */
    accountId?: __string;
    /**
     * The Amazon Resource Name (ARN) of the bucket.
     */
    bucketArn?: __string;
    /**
     * The date and time, in UTC and extended ISO 8601 format, when the bucket was created.
     */
    bucketCreatedAt?: __timestampIso8601;
    /**
     * The name of the bucket.
     */
    bucketName?: __string;
    /**
     * The total number of objects that Amazon Macie can analyze in the bucket. These objects use a supported storage class and have a file name extension for a supported file or storage format.
     */
    classifiableObjectCount?: __long;
    /**
     * The total storage size, in bytes, of the objects that Amazon Macie can analyze in the bucket. These objects use a supported storage class and have a file name extension for a supported file or storage format.
     */
    classifiableSizeInBytes?: __long;
    /**
     * Specifies whether any one-time or recurring classification jobs are configured to analyze data in the bucket, and, if so, the details of the job that ran most recently.
     */
    jobDetails?: JobDetails;
    /**
     * The date and time, in UTC and extended ISO 8601 format, when Amazon Macie most recently retrieved data about the bucket from Amazon S3.
     */
    lastUpdated?: __timestampIso8601;
    /**
     * The total number of objects in the bucket.
     */
    objectCount?: __long;
    /**
     * The total number of objects that are in the bucket, grouped by server-side encryption type. This includes a grouping that reports the total number of objects that aren't encrypted or use client-side encryption.
     */
    objectCountByEncryptionType?: ObjectCountByEncryptionType;
    /**
     * Specifies whether the bucket is publicly accessible. If this value is true, an access control list (ACL), bucket policy, or block public access settings allow the bucket to be accessed by the general public.
     */
    publicAccess?: BucketPublicAccess;
    /**
     * The AWS Region that hosts the bucket.
     */
    region?: __string;
    /**
     * Specifies whether the bucket is configured to replicate one or more objects to buckets for other AWS accounts and, if so, which accounts.
     */
    replicationDetails?: ReplicationDetails;
    /**
     *  Specifies whether the bucket is shared with another AWS account. Possible values are: EXTERNAL - The bucket is shared with an AWS account that isn't part of the same Amazon Macie organization. INTERNAL - The bucket is shared with an AWS account that's part of the same Amazon Macie organization. NOT_SHARED - The bucket isn't shared with other AWS accounts. UNKNOWN - Amazon Macie wasn't able to evaluate the shared access settings for the bucket.
     */
    sharedAccess?: SharedAccess;
    /**
     * The total storage size, in bytes, of the bucket.
     */
    sizeInBytes?: __long;
    /**
     * The total compressed storage size, in bytes, of the bucket.
     */
    sizeInBytesCompressed?: __long;
    /**
     * An array that specifies the tags (keys and values) that are associated with the bucket.
     */
    tags?: __listOfKeyValuePair;
    /**
     * The total number of objects that Amazon Macie can't analyze in the bucket. These objects don't use a supported storage class or don't have a file name extension for a supported file or storage format.
     */
    unclassifiableObjectCount?: ObjectLevelStatistics;
    /**
     * The total storage size, in bytes, of the objects that Amazon Macie can't analyze in the bucket. These objects don't use a supported storage class or don't have a file name extension for a supported file or storage format.
     */
    unclassifiableObjectSizeInBytes?: ObjectLevelStatistics;
    /**
     * Specifies whether versioning is enabled for the bucket.
     */
    versioning?: __boolean;
  }
  export interface BucketPermissionConfiguration {
    /**
     * The account-level permissions settings that apply to the bucket.
     */
    accountLevelPermissions?: AccountLevelPermissions;
    /**
     * The bucket-level permissions settings for the bucket.
     */
    bucketLevelPermissions?: BucketLevelPermissions;
  }
  export interface BucketPolicy {
    /**
     * Specifies whether the bucket policy allows the general public to have read access to the bucket.
     */
    allowsPublicReadAccess?: __boolean;
    /**
     * Specifies whether the bucket policy allows the general public to have write access to the bucket.
     */
    allowsPublicWriteAccess?: __boolean;
  }
  export interface BucketPublicAccess {
    /**
     *  Specifies whether the bucket is publicly accessible due to the combination of permissions settings that apply to the bucket. Possible values are: NOT_PUBLIC - The bucket isn't publicly accessible. PUBLIC - The bucket is publicly accessible. UNKNOWN - Amazon Macie can't determine whether the bucket is publicly accessible.
     */
    effectivePermission?: EffectivePermission;
    /**
     * The account-level and bucket-level permissions for the bucket.
     */
    permissionConfiguration?: BucketPermissionConfiguration;
  }
  export interface BucketSortCriteria {
    /**
     * The name of the property to sort the results by. This value can be the name of any property that Amazon Macie defines as bucket metadata, such as bucketName or accountId.
     */
    attributeName?: __string;
    /**
     * The sort order to apply to the results, based on the value for the property specified by the attributeName property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.
     */
    orderBy?: OrderBy;
  }
  export interface Cell {
    /**
     * The location of the cell, as an absolute cell reference, that contains the data. For example, Sheet2!C5 for cell C5 on Sheet2 in a Microsoft Excel workbook. This value is null for CSV and TSV files.
     */
    cellReference?: __string;
    /**
     * The column number of the column that contains the data. For a Microsoft Excel workbook, this value correlates to the alphabetical character(s) for a column identifier. For example, 1 for column A, 2 for column B, and so on.
     */
    column?: __long;
    /**
     * The name of the column that contains the data, if available.
     */
    columnName?: __string;
    /**
     * The row number of the row that contains the data.
     */
    row?: __long;
  }
  export type Cells = Cell[];
  export interface ClassificationDetails {
    /**
     * The path to the folder or file (in Amazon S3) that contains the corresponding sensitive data discovery result for the finding. If a finding applies to a large archive or compressed file, this value is the path to a folder. Otherwise, this value is the path to a file.
     */
    detailedResultsLocation?: __string;
    /**
     * The Amazon Resource Name (ARN) of the classification job that produced the finding.
     */
    jobArn?: __string;
    /**
     * The unique identifier for the classification job that produced the finding.
     */
    jobId?: __string;
    /**
     * The status and other details for the finding.
     */
    result?: ClassificationResult;
  }
  export interface ClassificationExportConfiguration {
    /**
     * The S3 bucket to store data classification results in, and the encryption settings to use when storing results in that bucket.
     */
    s3Destination?: S3Destination;
  }
  export interface ClassificationResult {
    /**
     * Specifies whether Amazon Macie detected additional occurrences of sensitive data in the S3 object. A finding includes location data for a maximum of 15 occurrences of sensitive data. This value can help you determine whether to investigate additional occurrences of sensitive data in an object. You can do this by referring to the corresponding sensitive data discovery result for the finding (ClassificationDetails.detailedResultsLocation).
     */
    additionalOccurrences?: __boolean;
    /**
     * The custom data identifiers that detected the sensitive data and the number of occurrences of the data that they detected.
     */
    customDataIdentifiers?: CustomDataIdentifiers;
    /**
     * The type of content, as a MIME type, that the finding applies to. For example, application/gzip, for a GNU Gzip compressed archive file, or application/pdf, for an Adobe Portable Document Format file.
     */
    mimeType?: __string;
    /**
     * The category, types, and number of occurrences of the sensitive data that produced the finding.
     */
    sensitiveData?: SensitiveData;
    /**
     * The total size, in bytes, of the data that the finding applies to.
     */
    sizeClassified?: __long;
    /**
     * The status of the finding.
     */
    status?: ClassificationResultStatus;
  }
  export interface ClassificationResultStatus {
    /**
     *  The status of the finding. Possible values are: COMPLETE - Amazon Macie successfully completed its analysis of the object that the finding applies to. PARTIAL - Macie analyzed only a subset of the data in the object that the finding applies to. For example, the object is an archive file that contains files in an unsupported format. SKIPPED - Macie wasn't able to analyze the object that the finding applies to. For example, the object is a malformed file or a file that uses an unsupported format.
     */
    code?: __string;
    /**
     * A brief description of the status of the finding. Amazon Macie uses this value to notify you of any errors, warnings, or considerations that might impact your analysis of the finding.
     */
    reason?: __string;
  }
  export interface CreateClassificationJobRequest {
    /**
     * A unique, case-sensitive token that you provide to ensure the idempotency of the request.
     */
    clientToken: __string;
    /**
     * The custom data identifiers to use for data analysis and classification.
     */
    customDataIdentifierIds?: __listOf__string;
    /**
     * A custom description of the job. The description can contain as many as 200 characters.
     */
    description?: __string;
    /**
     * Specifies whether to analyze all existing, eligible objects immediately after the job is created.
     */
    initialRun?: __boolean;
    /**
     * The schedule for running the job. Valid values are: ONE_TIME - Run the job only once. If you specify this value, don't specify a value for the scheduleFrequency property. SCHEDULED - Run the job on a daily, weekly, or monthly basis. If you specify this value, use the scheduleFrequency property to define the recurrence pattern for the job.
     */
    jobType: JobType;
    /**
     * A custom name for the job. The name can contain as many as 500 characters.
     */
    name: __string;
    /**
     * The S3 buckets that contain the objects to analyze, and the scope of that analysis.
     */
    s3JobDefinition: S3JobDefinition;
    /**
     * The sampling depth, as a percentage, to apply when processing objects. This value determines the percentage of eligible objects that the job analyzes. If this value is less than 100, Amazon Macie selects the objects to analyze at random, up to the specified percentage, and analyzes all the data in those objects.
     */
    samplingPercentage?: __integer;
    /**
     * The recurrence pattern for running the job. To run the job only once, don't specify a value for this property and set the value for the jobType property to ONE_TIME.
     */
    scheduleFrequency?: JobScheduleFrequency;
    /**
     * A map of key-value pairs that specifies the tags to associate with the job. A job can have a maximum of 50 tags. Each tag consists of a tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.
     */
    tags?: TagMap;
  }
  export interface CreateClassificationJobResponse {
    /**
     * The Amazon Resource Name (ARN) of the job.
     */
    jobArn?: __string;
    /**
     * The unique identifier for the job.
     */
    jobId?: __string;
  }
  export interface CreateCustomDataIdentifierRequest {
    /**
     * A unique, case-sensitive token that you provide to ensure the idempotency of the request.
     */
    clientToken?: __string;
    /**
     * A custom description of the custom data identifier. The description can contain as many as 512 characters. We strongly recommend that you avoid including any sensitive data in the description of a custom data identifier. Other users of your account might be able to see the identifier's description, depending on the actions that they're allowed to perform in Amazon Macie.
     */
    description?: __string;
    /**
     * An array that lists specific character sequences (ignore words) to exclude from the results. If the text matched by the regular expression is the same as any string in this array, Amazon Macie ignores it. The array can contain as many as 10 ignore words. Each ignore word can contain 4 - 90 characters. Ignore words are case sensitive.
     */
    ignoreWords?: __listOf__string;
    /**
     * An array that lists specific character sequences (keywords), one of which must be within proximity (maximumMatchDistance) of the regular expression to match. The array can contain as many as 50 keywords. Each keyword can contain 4 - 90 characters. Keywords aren't case sensitive.
     */
    keywords?: __listOf__string;
    /**
     * The maximum number of characters that can exist between text that matches the regex pattern and the character sequences specified by the keywords array. Macie includes or excludes a result based on the proximity of a keyword to text that matches the regex pattern. The distance can be 1 - 300 characters. The default value is 50.
     */
    maximumMatchDistance?: __integer;
    /**
     * A custom name for the custom data identifier. The name can contain as many as 128 characters. We strongly recommend that you avoid including any sensitive data in the name of a custom data identifier. Other users of your account might be able to see the identifier's name, depending on the actions that they're allowed to perform in Amazon Macie.
     */
    name?: __string;
    /**
     * The regular expression (regex) that defines the pattern to match. The expression can contain as many as 512 characters.
     */
    regex?: __string;
    /**
     * A map of key-value pairs that specifies the tags to associate with the custom data identifier. A custom data identifier can have a maximum of 50 tags. Each tag consists of a tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.
     */
    tags?: TagMap;
  }
  export interface CreateCustomDataIdentifierResponse {
    /**
     * The unique identifier for the custom data identifier that was created.
     */
    customDataIdentifierId?: __string;
  }
  export interface CreateFindingsFilterRequest {
    /**
     * The action to perform on findings that meet the filter criteria (findingCriteria). Valid values are: ARCHIVE, suppress (automatically archive) the findings; and, NOOP, don't perform any action on the findings.
     */
    action: FindingsFilterAction;
    /**
     * A unique, case-sensitive token that you provide to ensure the idempotency of the request.
     */
    clientToken?: __string;
    /**
     * A custom description of the filter. The description can contain as many as 512 characters. We strongly recommend that you avoid including any sensitive data in the description of a filter. Other users of your account might be able to see the filter's description, depending on the actions that they're allowed to perform in Amazon Macie.
     */
    description?: __string;
    /**
     * The criteria to use to filter findings.
     */
    findingCriteria: FindingCriteria;
    /**
     * A custom name for the filter. The name must contain at least 3 characters and can contain as many as 64 characters. We strongly recommend that you avoid including any sensitive data in the name of a filter. Other users of your account might be able to see the filter's name, depending on the actions that they're allowed to perform in Amazon Macie.
     */
    name: __string;
    /**
     * The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings.
     */
    position?: __integer;
    /**
     * A map of key-value pairs that specifies the tags to associate with the filter. A findings filter can have a maximum of 50 tags. Each tag consists of a tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.
     */
    tags?: TagMap;
  }
  export interface CreateFindingsFilterResponse {
    /**
     * The Amazon Resource Name (ARN) of the filter that was created.
     */
    arn?: __string;
    /**
     * The unique identifier for the filter that was created.
     */
    id?: __string;
  }
  export interface CreateInvitationsRequest {
    /**
     * An array that lists AWS account IDs, one for each account to send the invitation to.
     */
    accountIds: __listOf__string;
    /**
     * Specifies whether to send an email notification to the root user of each account that the invitation will be sent to. This notification is in addition to an alert that the root user receives in AWS Personal Health Dashboard. To send an email notification to the root user of each account, set this value to true.
     */
    disableEmailNotification?: __boolean;
    /**
     * A custom message to include in the invitation. Amazon Macie adds this message to the standard content that it sends for an invitation.
     */
    message?: __string;
  }
  export interface CreateInvitationsResponse {
    /**
     * An array of objects, one for each account whose invitation hasn't been processed. Each object identifies the account and explains why the invitation hasn't been processed for the account.
     */
    unprocessedAccounts?: __listOfUnprocessedAccount;
  }
  export interface CreateMemberRequest {
    /**
     * The details for the account to associate with the master account.
     */
    account: AccountDetail;
    /**
     * A map of key-value pairs that specifies the tags to associate with the account in Amazon Macie. An account can have a maximum of 50 tags. Each tag consists of a tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.
     */
    tags?: TagMap;
  }
  export interface CreateMemberResponse {
    /**
     * The Amazon Resource Name (ARN) of the account that was associated with the master account.
     */
    arn?: __string;
  }
  export interface CreateSampleFindingsRequest {
    /**
     * An array that lists one or more types of findings to include in the set of sample findings. Currently, the only supported value is Policy:IAMUser/S3BucketEncryptionDisabled. 
     */
    findingTypes?: __listOfFindingType;
  }
  export interface CreateSampleFindingsResponse {
  }
  export type Criterion = {[key: string]: CriterionAdditionalProperties};
  export interface CriterionAdditionalProperties {
    /**
     * The value for the property matches (equals) the specified value. If you specify multiple values, Macie uses OR logic to join the values.
     */
    eq?: __listOf__string;
    /**
     * The value for the property exclusively matches (equals an exact match for) all the specified values. If you specify multiple values, Amazon Macie uses AND logic to join the values. You can use this operator with the following properties: customDataIdentifiers.detections.arn, customDataIdentifiers.detections.name, resourcesAffected.s3Bucket.tags.key, resourcesAffected.s3Bucket.tags.value, resourcesAffected.s3Object.tags.key, resourcesAffected.s3Object.tags.value, sensitiveData.category, and sensitiveData.detections.type.
     */
    eqExactMatch?: __listOf__string;
    /**
     * The value for the property is greater than the specified value.
     */
    gt?: __long;
    /**
     * The value for the property is greater than or equal to the specified value.
     */
    gte?: __long;
    /**
     * The value for the property is less than the specified value.
     */
    lt?: __long;
    /**
     * The value for the property is less than or equal to the specified value.
     */
    lte?: __long;
    /**
     * The value for the property doesn't match (doesn't equal) the specified value. If you specify multiple values, Macie uses OR logic to join the values.
     */
    neq?: __listOf__string;
  }
  export type Currency = "USD"|string;
  export interface CustomDataIdentifierSummary {
    /**
     * The Amazon Resource Name (ARN) of the custom data identifier.
     */
    arn?: __string;
    /**
     * The date and time, in UTC and extended ISO 8601 format, when the custom data identifier was created.
     */
    createdAt?: __timestampIso8601;
    /**
     * The custom description of the custom data identifier.
     */
    description?: __string;
    /**
     * The unique identifier for the custom data identifier.
     */
    id?: __string;
    /**
     * The custom name of the custom data identifier.
     */
    name?: __string;
  }
  export interface CustomDataIdentifiers {
    /**
     * The custom data identifiers that detected the data, and the number of occurrences of the data that each identifier detected.
     */
    detections?: CustomDetections;
    /**
     * The total number of occurrences of the data that was detected by the custom data identifiers and produced the finding.
     */
    totalCount?: __long;
  }
  export interface CustomDetection {
    /**
     * The Amazon Resource Name (ARN) of the custom data identifier.
     */
    arn?: __string;
    /**
     * The total number of occurrences of the sensitive data that the custom data identifier detected.
     */
    count?: __long;
    /**
     * The name of the custom data identifier.
     */
    name?: __string;
    /**
     * The location of 1-15 occurrences of the sensitive data that the custom data identifier detected. A finding includes location data for a maximum of 15 occurrences of sensitive data.
     */
    occurrences?: Occurrences;
  }
  export type CustomDetections = CustomDetection[];
  export interface DailySchedule {
  }
  export type DayOfWeek = "SUNDAY"|"MONDAY"|"TUESDAY"|"WEDNESDAY"|"THURSDAY"|"FRIDAY"|"SATURDAY"|string;
  export interface DeclineInvitationsRequest {
    /**
     * An array that lists AWS account IDs, one for each account that sent an invitation to decline.
     */
    accountIds: __listOf__string;
  }
  export interface DeclineInvitationsResponse {
    /**
     * An array of objects, one for each account whose invitation hasn't been declined. Each object identifies the account and explains why the request hasn't been processed for that account.
     */
    unprocessedAccounts?: __listOfUnprocessedAccount;
  }
  export interface DefaultDetection {
    /**
     * The total number of occurrences of the type of sensitive data that was detected.
     */
    count?: __long;
    /**
     * The location of 1-15 occurrences of the sensitive data that was detected. A finding includes location data for a maximum of 15 occurrences of sensitive data.
     */
    occurrences?: Occurrences;
    /**
     * The type of sensitive data that was detected. For example, AWS_CREDENTIALS, PHONE_NUMBER, or ADDRESS.
     */
    type?: __string;
  }
  export type DefaultDetections = DefaultDetection[];
  export interface DeleteCustomDataIdentifierRequest {
    /**
     * The unique identifier for the Amazon Macie resource or account that the request applies to.
     */
    id: __string;
  }
  export interface DeleteCustomDataIdentifierResponse {
  }
  export interface DeleteFindingsFilterRequest {
    /**
     * The unique identifier for the Amazon Macie resource or account that the request applies to.
     */
    id: __string;
  }
  export interface DeleteFindingsFilterResponse {
  }
  export interface DeleteInvitationsRequest {
    /**
     * An array that lists AWS account IDs, one for each account that sent an invitation to delete.
     */
    accountIds: __listOf__string;
  }
  export interface DeleteInvitationsResponse {
    /**
     * An array of objects, one for each account whose invitation hasn't been deleted. Each object identifies the account and explains why the request hasn't been processed for that account.
     */
    unprocessedAccounts?: __listOfUnprocessedAccount;
  }
  export interface DeleteMemberRequest {
    /**
     * The unique identifier for the Amazon Macie resource or account that the request applies to.
     */
    id: __string;
  }
  export interface DeleteMemberResponse {
  }
  export interface DescribeBucketsRequest {
    /**
     * The criteria to use to filter the query results.
     */
    criteria?: BucketCriteria;
    /**
     * The maximum number of items to include in each page of the response. The default value is 50.
     */
    maxResults?: __integer;
    /**
     * The nextToken string that specifies which page of results to return in a paginated response.
     */
    nextToken?: __string;
    /**
     * The criteria to use to sort the query results.
     */
    sortCriteria?: BucketSortCriteria;
  }
  export interface DescribeBucketsResponse {
    /**
     * An array of objects, one for each bucket that meets the filter criteria specified in the request.
     */
    buckets?: __listOfBucketMetadata;
    /**
     * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.
     */
    nextToken?: __string;
  }
  export interface DescribeClassificationJobRequest {
    /**
     * The unique identifier for the classification job.
     */
    jobId: __string;
  }
  export interface DescribeClassificationJobResponse {
    /**
     * The token that was provided to ensure the idempotency of the request to create the job.
     */
    clientToken?: __string;
    /**
     * The date and time, in UTC and extended ISO 8601 format, when the job was created.
     */
    createdAt?: __timestampIso8601;
    /**
     * The custom data identifiers that the job uses to analyze data.
     */
    customDataIdentifierIds?: __listOf__string;
    /**
     * The custom description of the job.
     */
    description?: __string;
    /**
     * Specifies whether the job is configured to analyze all existing, eligible objects immediately after it's created.
     */
    initialRun?: __boolean;
    /**
     * The Amazon Resource Name (ARN) of the job.
     */
    jobArn?: __string;
    /**
     * The unique identifier for the job.
     */
    jobId?: __string;
    /**
     * The current status of the job. Possible values are: CANCELLED - You cancelled the job or, if it's a one-time job, you paused the job and didn't resume it within 30 days. COMPLETE - For a one-time job, Amazon Macie finished processing the data specified for the job. This value doesn't apply to recurring jobs. IDLE - For a recurring job, the previous scheduled run is complete and the next scheduled run is pending. This value doesn't apply to one-time jobs. PAUSED - Amazon Macie started running the job but additional processing would exceed the monthly sensitive data discovery quota for your account or one or more member accounts that the job analyzes data for. RUNNING - For a one-time job, the job is in progress. For a recurring job, a scheduled run is in progress. USER_PAUSED - You paused the job. If you paused the job while it had a status of RUNNING and you don't resume it within 30 days of pausing it, the job or job run will expire and be cancelled, depending on the job's type. To check the expiration date, refer to the UserPausedDetails.jobExpiresAt property.
     */
    jobStatus?: JobStatus;
    /**
     * The schedule for running the job. Possible values are: ONE_TIME - The job runs only once. SCHEDULED - The job runs on a daily, weekly, or monthly basis. The scheduleFrequency property indicates the recurrence pattern for the job.
     */
    jobType?: JobType;
    /**
     * Specifies whether any account- or bucket-level access errors occurred when the job ran. For a recurring job, this value indicates the error status of the job's most recent run.
     */
    lastRunErrorStatus?: LastRunErrorStatus;
    /**
     * The date and time, in UTC and extended ISO 8601 format, when the job started. If the job is a recurring job, this value indicates when the most recent run started.
     */
    lastRunTime?: __timestampIso8601;
    /**
     * The custom name of the job.
     */
    name?: __string;
    /**
     * The S3 buckets that the job is configured to analyze, and the scope of that analysis.
     */
    s3JobDefinition?: S3JobDefinition;
    /**
     * The sampling depth, as a percentage, that determines the percentage of eligible objects that the job analyzes.
     */
    samplingPercentage?: __integer;
    /**
     * The recurrence pattern for running the job. If the job is configured to run only once, this value is null.
     */
    scheduleFrequency?: JobScheduleFrequency;
    /**
     * The number of times that the job has run and processing statistics for the job's current run.
     */
    statistics?: Statistics;
    /**
     * A map of key-value pairs that specifies which tags (keys and values) are associated with the classification job.
     */
    tags?: TagMap;
    /**
     * If the current status of the job is USER_PAUSED, specifies when the job was paused and when the job or job run will expire and be cancelled if it isn't resumed. This value is present only if the value for jobStatus is USER_PAUSED.
     */
    userPausedDetails?: UserPausedDetails;
  }
  export interface DescribeOrganizationConfigurationRequest {
  }
  export interface DescribeOrganizationConfigurationResponse {
    /**
     * Specifies whether Amazon Macie is enabled automatically for accounts that are added to the AWS organization.
     */
    autoEnable?: __boolean;
    /**
     * Specifies whether the maximum number of Amazon Macie member accounts are part of the AWS organization.
     */
    maxAccountLimitReached?: __boolean;
  }
  export interface DisableMacieRequest {
  }
  export interface DisableMacieResponse {
  }
  export interface DisableOrganizationAdminAccountRequest {
    /**
     * The AWS account ID of the delegated administrator account.
     */
    adminAccountId: __string;
  }
  export interface DisableOrganizationAdminAccountResponse {
  }
  export interface DisassociateFromMasterAccountRequest {
  }
  export interface DisassociateFromMasterAccountResponse {
  }
  export interface DisassociateMemberRequest {
    /**
     * The unique identifier for the Amazon Macie resource or account that the request applies to.
     */
    id: __string;
  }
  export interface DisassociateMemberResponse {
  }
  export interface DomainDetails {
    /**
     * The name of the domain.
     */
    domainName?: __string;
  }
  export type EffectivePermission = "PUBLIC"|"NOT_PUBLIC"|"UNKNOWN"|string;
  export interface EnableMacieRequest {
    /**
     * A unique, case-sensitive token that you provide to ensure the idempotency of the request.
     */
    clientToken?: __string;
    /**
     * Specifies how often to publish updates to policy findings for the account. This includes publishing updates to AWS Security Hub and Amazon EventBridge (formerly called Amazon CloudWatch Events).
     */
    findingPublishingFrequency?: FindingPublishingFrequency;
    /**
     * Specifies the status for the account. To enable Amazon Macie and start all Amazon Macie activities for the account, set this value to ENABLED.
     */
    status?: MacieStatus;
  }
  export interface EnableMacieResponse {
  }
  export interface EnableOrganizationAdminAccountRequest {
    /**
     * The AWS account ID for the account to designate as the delegated Amazon Macie administrator account for the organization.
     */
    adminAccountId: __string;
    /**
     * A unique, case-sensitive token that you provide to ensure the idempotency of the request.
     */
    clientToken?: __string;
  }
  export interface EnableOrganizationAdminAccountResponse {
  }
  export type EncryptionType = "NONE"|"AES256"|"aws:kms"|"UNKNOWN"|string;
  export type ErrorCode = "ClientError"|"InternalError"|string;
  export interface FederatedUser {
    /**
     * The AWS access key ID that identifies the credentials.
     */
    accessKeyId?: __string;
    /**
     * The unique identifier for the AWS account that owns the entity that was used to get the credentials.
     */
    accountId?: __string;
    /**
     * The Amazon Resource Name (ARN) of the entity that was used to get the credentials.
     */
    arn?: __string;
    /**
     * The unique identifier for the entity that was used to get the credentials.
     */
    principalId?: __string;
    /**
     * The details of the session that was created for the credentials, including the entity that issued the session.
     */
    sessionContext?: SessionContext;
  }
  export interface Finding {
    /**
     * The unique identifier for the AWS account that the finding applies to. This is typically the account that owns the affected resource.
     */
    accountId?: __string;
    /**
     * Specifies whether the finding is archived.
     */
    archived?: __boolean;
    /**
     * The category of the finding. Possible values are: CLASSIFICATION, for a sensitive data finding; and, POLICY, for a policy finding.
     */
    category?: FindingCategory;
    /**
     * The details of a sensitive data finding. This value is null for a policy finding.
     */
    classificationDetails?: ClassificationDetails;
    /**
     * The total number of occurrences of the finding. For sensitive data findings, this value is always 1. All sensitive data findings are considered new (unique) because they derive from individual classification jobs.
     */
    count?: __long;
    /**
     * The date and time, in UTC and extended ISO 8601 format, when the finding was created.
     */
    createdAt?: __timestampIso8601;
    /**
     * The description of the finding.
     */
    description?: __string;
    /**
     * The unique identifier for the finding. This is a random string that Amazon Macie generates and assigns to a finding when it creates the finding.
     */
    id?: __string;
    /**
     * The AWS partition that Amazon Macie created the finding in.
     */
    partition?: __string;
    /**
     * The details of a policy finding. This value is null for a sensitive data finding.
     */
    policyDetails?: PolicyDetails;
    /**
     * The AWS Region that Amazon Macie created the finding in.
     */
    region?: __string;
    /**
     * The resources that the finding applies to.
     */
    resourcesAffected?: ResourcesAffected;
    /**
     * Specifies whether the finding is a sample finding. A sample finding is a finding that uses example data to demonstrate what a finding might contain.
     */
    sample?: __boolean;
    /**
     * The version of the schema that was used to define the data structures in the finding.
     */
    schemaVersion?: __string;
    /**
     * The severity level and score for the finding.
     */
    severity?: Severity;
    /**
     * The brief description of the finding.
     */
    title?: __string;
    /**
     * The type of the finding.
     */
    type?: FindingType;
    /**
     * The date and time, in UTC and extended ISO 8601 format, when the finding was last updated. For sensitive data findings, this value is the same as the value for the createdAt property. All sensitive data findings are considered new (unique) because they derive from individual classification jobs.
     */
    updatedAt?: __timestampIso8601;
  }
  export interface FindingAction {
    /**
     * The type of action that occurred for the affected resource. This value is typically AWS_API_CALL, which indicates that an entity invoked an API operation for the resource.
     */
    actionType?: FindingActionType;
    /**
     * The invocation details of the API operation that an entity invoked for the affected resource, if the value for the actionType property is AWS_API_CALL.
     */
    apiCallDetails?: ApiCallDetails;
  }
  export type FindingActionType = "AWS_API_CALL"|string;
  export interface FindingActor {
    /**
     * The domain name of the device that the entity used to perform the action on the affected resource.
     */
    domainDetails?: DomainDetails;
    /**
     * The IP address of the device that the entity used to perform the action on the affected resource. This object also provides information such as the owner and geographic location for the IP address.
     */
    ipAddressDetails?: IpAddressDetails;
    /**
     * The type and other characteristics of the entity that performed the action on the affected resource.
     */
    userIdentity?: UserIdentity;
  }
  export type FindingCategory = "CLASSIFICATION"|"POLICY"|string;
  export interface FindingCriteria {
    /**
     * A condition that specifies the property, operator, and one or more values to use to filter the results.
     */
    criterion?: Criterion;
  }
  export type FindingPublishingFrequency = "FIFTEEN_MINUTES"|"ONE_HOUR"|"SIX_HOURS"|string;
  export type FindingStatisticsSortAttributeName = "groupKey"|"count"|string;
  export interface FindingStatisticsSortCriteria {
    /**
     * The grouping to sort the results by. Valid values are: count, sort the results by the number of findings in each group of results; and, groupKey, sort the results by the name of each group of results.
     */
    attributeName?: FindingStatisticsSortAttributeName;
    /**
     * The sort order to apply to the results, based on the value for the property specified by the attributeName property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.
     */
    orderBy?: OrderBy;
  }
  export type FindingType = "SensitiveData:S3Object/Multiple"|"SensitiveData:S3Object/Financial"|"SensitiveData:S3Object/Personal"|"SensitiveData:S3Object/Credentials"|"SensitiveData:S3Object/CustomIdentifier"|"Policy:IAMUser/S3BucketPublic"|"Policy:IAMUser/S3BucketSharedExternally"|"Policy:IAMUser/S3BucketReplicatedExternally"|"Policy:IAMUser/S3BucketEncryptionDisabled"|"Policy:IAMUser/S3BlockPublicAccessDisabled"|string;
  export type FindingsFilterAction = "ARCHIVE"|"NOOP"|string;
  export interface FindingsFilterListItem {
    /**
     * The action that's performed on findings that meet the filter criteria. Possible values are: ARCHIVE, suppress (automatically archive) the findings; and, NOOP, don't perform any action on the findings.
     */
    action?: FindingsFilterAction;
    /**
     * The Amazon Resource Name (ARN) of the filter.
     */
    arn?: __string;
    /**
     * The unique identifier for the filter.
     */
    id?: __string;
    /**
     * The custom name of the filter.
     */
    name?: __string;
    /**
     * A map of key-value pairs that identifies the tags (keys and values) that are associated with the filter.
     */
    tags?: TagMap;
  }
  export interface GetBucketStatisticsRequest {
    /**
     * The unique identifier for the AWS account.
     */
    accountId?: __string;
  }
  export interface GetBucketStatisticsResponse {
    /**
     * The total number of buckets.
     */
    bucketCount?: __long;
    /**
     * The total number of buckets that are publicly accessible based on a combination of permissions settings for each bucket.
     */
    bucketCountByEffectivePermission?: BucketCountByEffectivePermission;
    /**
     * The total number of buckets, grouped by server-side encryption type. This object also reports the total number of buckets that don't encrypt objects by default.
     */
    bucketCountByEncryptionType?: BucketCountByEncryptionType;
    /**
     * The total number of buckets that are shared with another AWS account.
     */
    bucketCountBySharedAccessType?: BucketCountBySharedAccessType;
    /**
     * The total number of objects that Amazon Macie can analyze in the buckets. These objects use a supported storage class and have a file name extension for a supported file or storage format.
     */
    classifiableObjectCount?: __long;
    /**
     * The total storage size, in bytes, of all the objects that Amazon Macie can analyze in the buckets. These objects use a supported storage class and have a file name extension for a supported file or storage format.
     */
    classifiableSizeInBytes?: __long;
    /**
     * The date and time, in UTC and extended ISO 8601 format, when Amazon Macie most recently retrieved data about the buckets from Amazon S3.
     */
    lastUpdated?: __timestampIso8601;
    /**
     * The total number of objects in the buckets.
     */
    objectCount?: __long;
    /**
     * The total storage size, in bytes, of the buckets.
     */
    sizeInBytes?: __long;
    /**
     * The total compressed storage size, in bytes, of the buckets.
     */
    sizeInBytesCompressed?: __long;
    /**
     * The total number of objects that Amazon Macie can't analyze in the buckets. These objects don't use a supported storage class or don't have a file name extension for a supported file or storage format.
     */
    unclassifiableObjectCount?: ObjectLevelStatistics;
    /**
     * The total storage size, in bytes, of all the objects that Amazon Macie can't analyze in the buckets. These objects don't use a supported storage class or don't have a file name extension for a supported file or storage format.
     */
    unclassifiableObjectSizeInBytes?: ObjectLevelStatistics;
  }
  export interface GetClassificationExportConfigurationRequest {
  }
  export interface GetClassificationExportConfigurationResponse {
    /**
     * The location where data classification results are stored, and the encryption settings that are used when storing results in that location.
     */
    configuration?: ClassificationExportConfiguration;
  }
  export interface GetCustomDataIdentifierRequest {
    /**
     * The unique identifier for the Amazon Macie resource or account that the request applies to.
     */
    id: __string;
  }
  export interface GetCustomDataIdentifierResponse {
    /**
     * The Amazon Resource Name (ARN) of the custom data identifier.
     */
    arn?: __string;
    /**
     * The date and time, in UTC and extended ISO 8601 format, when the custom data identifier was created.
     */
    createdAt?: __timestampIso8601;
    /**
     * Specifies whether the custom data identifier was deleted. If you delete a custom data identifier, Amazon Macie doesn't delete it permanently. Instead, it soft deletes the identifier.
     */
    deleted?: __boolean;
    /**
     * The custom description of the custom data identifier.
     */
    description?: __string;
    /**
     * The unique identifier for the custom data identifier.
     */
    id?: __string;
    /**
     * An array that lists specific character sequences (ignore words) to exclude from the results. If the text matched by the regular expression is the same as any string in this array, Amazon Macie ignores it. Ignore words are case sensitive.
     */
    ignoreWords?: __listOf__string;
    /**
     * An array that lists specific character sequences (keywords), one of which must be within proximity (maximumMatchDistance) of the regular expression to match. Keywords aren't case sensitive.
     */
    keywords?: __listOf__string;
    /**
     * The maximum number of characters that can exist between text that matches the regex pattern and the character sequences specified by the keywords array. Macie includes or excludes a result based on the proximity of a keyword to text that matches the regex pattern.
     */
    maximumMatchDistance?: __integer;
    /**
     * The custom name of the custom data identifier.
     */
    name?: __string;
    /**
     * The regular expression (regex) that defines the pattern to match.
     */
    regex?: __string;
    /**
     * A map of key-value pairs that identifies the tags (keys and values) that are associated with the custom data identifier.
     */
    tags?: TagMap;
  }
  export interface GetFindingStatisticsRequest {
    /**
     * The criteria to use to filter the query results.
     */
    findingCriteria?: FindingCriteria;
    /**
     * The finding property to use to group the query results. Valid values are: classificationDetails.jobId - The unique identifier for the classification job that produced the finding. resourcesAffected.s3Bucket.name - The name of the S3 bucket that the finding applies to. severity.description - The severity level of the finding, such as High or Medium. type - The type of finding, such as Policy:IAMUser/S3BucketPublic and SensitiveData:S3Object/Personal.
     */
    groupBy: GroupBy;
    /**
     * The maximum number of items to include in each page of the response.
     */
    size?: __integer;
    /**
     * The criteria to use to sort the query results.
     */
    sortCriteria?: FindingStatisticsSortCriteria;
  }
  export interface GetFindingStatisticsResponse {
    /**
     * An array of objects, one for each group of findings that meet the filter criteria specified in the request.
     */
    countsByGroup?: __listOfGroupCount;
  }
  export interface GetFindingsFilterRequest {
    /**
     * The unique identifier for the Amazon Macie resource or account that the request applies to.
     */
    id: __string;
  }
  export interface GetFindingsFilterResponse {
    /**
     * The action that's performed on findings that meet the filter criteria (findingCriteria). Possible values are: ARCHIVE, suppress (automatically archive) the findings; and, NOOP, don't perform any action on the findings.
     */
    action?: FindingsFilterAction;
    /**
     * The Amazon Resource Name (ARN) of the filter.
     */
    arn?: __string;
    /**
     * The custom description of the filter.
     */
    description?: __string;
    /**
     * The criteria that's used to filter findings.
     */
    findingCriteria?: FindingCriteria;
    /**
     * The unique identifier for the filter.
     */
    id?: __string;
    /**
     * The custom name of the filter.
     */
    name?: __string;
    /**
     * The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings.
     */
    position?: __integer;
    /**
     * A map of key-value pairs that identifies the tags (keys and values) that are associated with the filter.
     */
    tags?: TagMap;
  }
  export interface GetFindingsRequest {
    /**
     * An array of strings that lists the unique identifiers for the findings to retrieve.
     */
    findingIds: __listOf__string;
    /**
     * The criteria for sorting the results of the request.
     */
    sortCriteria?: SortCriteria;
  }
  export interface GetFindingsResponse {
    /**
     * An array of objects, one for each finding that meets the criteria specified in the request.
     */
    findings?: __listOfFinding;
  }
  export interface GetInvitationsCountRequest {
  }
  export interface GetInvitationsCountResponse {
    /**
     * The total number of invitations that were received by the account, not including the currently accepted invitation.
     */
    invitationsCount?: __long;
  }
  export interface GetMacieSessionRequest {
  }
  export interface GetMacieSessionResponse {
    /**
     * The date and time, in UTC and extended ISO 8601 format, when the Amazon Macie account was created.
     */
    createdAt?: __timestampIso8601;
    /**
     * The frequency with which Amazon Macie publishes updates to policy findings for the account. This includes publishing updates to AWS Security Hub and Amazon EventBridge (formerly called Amazon CloudWatch Events).
     */
    findingPublishingFrequency?: FindingPublishingFrequency;
    /**
     * The Amazon Resource Name (ARN) of the service-linked role that allows Amazon Macie to monitor and analyze data in AWS resources for the account.
     */
    serviceRole?: __string;
    /**
     * The current status of the Amazon Macie account. Possible values are: PAUSED, the account is enabled but all Amazon Macie activities are suspended (paused) for the account; and, ENABLED, the account is enabled and all Amazon Macie activities are enabled for the account.
     */
    status?: MacieStatus;
    /**
     * The date and time, in UTC and extended ISO 8601 format, of the most recent change to the status of the Amazon Macie account.
     */
    updatedAt?: __timestampIso8601;
  }
  export interface GetMasterAccountRequest {
  }
  export interface GetMasterAccountResponse {
    /**
     * The AWS account ID for the master account. If the accounts are associated by a Macie membership invitation, this object also provides details about the invitation that was sent and accepted to establish the relationship between the accounts.
     */
    master?: Invitation;
  }
  export interface GetMemberRequest {
    /**
     * The unique identifier for the Amazon Macie resource or account that the request applies to.
     */
    id: __string;
  }
  export interface GetMemberResponse {
    /**
     * The AWS account ID for the account.
     */
    accountId?: __string;
    /**
     * The Amazon Resource Name (ARN) of the account.
     */
    arn?: __string;
    /**
     * The email address for the account.
     */
    email?: __string;
    /**
     * The date and time, in UTC and extended ISO 8601 format, when an Amazon Macie membership invitation was last sent to the account. This value is null if a Macie invitation hasn't been sent to the account.
     */
    invitedAt?: __timestampIso8601;
    /**
     * The AWS account ID for the master account.
     */
    masterAccountId?: __string;
    /**
     * The current status of the relationship between the account and the master account.
     */
    relationshipStatus?: RelationshipStatus;
    /**
     * A map of key-value pairs that identifies the tags (keys and values) that are associated with the member account in Amazon Macie.
     */
    tags?: TagMap;
    /**
     * The date and time, in UTC and extended ISO 8601 format, of the most recent change to the status of the relationship between the account and the master account.
     */
    updatedAt?: __timestampIso8601;
  }
  export interface GetUsageStatisticsRequest {
    /**
     * An array of objects, one for each condition to use to filter the query results. If the array contains more than one object, Amazon Macie uses an AND operator to join the conditions specified by the objects.
     */
    filterBy?: __listOfUsageStatisticsFilter;
    /**
     * The maximum number of items to include in each page of the response.
     */
    maxResults?: __integer;
    /**
     * The nextToken string that specifies which page of results to return in a paginated response.
     */
    nextToken?: __string;
    /**
     * The criteria to use to sort the query results.
     */
    sortBy?: UsageStatisticsSortBy;
  }
  export interface GetUsageStatisticsResponse {
    /**
     * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.
     */
    nextToken?: __string;
    /**
     * An array of objects that contains the results of the query. Each object contains the data for an account that meets the filter criteria specified in the request.
     */
    records?: __listOfUsageRecord;
  }
  export interface GetUsageTotalsRequest {
  }
  export interface GetUsageTotalsResponse {
    /**
     * An array of objects that contains the results of the query. Each object contains the data for a specific usage metric.
     */
    usageTotals?: __listOfUsageTotal;
  }
  export type GroupBy = "resourcesAffected.s3Bucket.name"|"type"|"classificationDetails.jobId"|"severity.description"|string;
  export interface GroupCount {
    /**
     * The total number of findings in the group of query results.
     */
    count?: __long;
    /**
     * The name of the property that defines the group in the query results, as specified by the groupBy property in the query request.
     */
    groupKey?: __string;
  }
  export interface IamUser {
    /**
     * The unique identifier for the AWS account that's associated with the IAM user who performed the action.
     */
    accountId?: __string;
    /**
     * The Amazon Resource Name (ARN) of the principal that performed the action. The last section of the ARN contains the name of the user who performed the action.
     */
    arn?: __string;
    /**
     * The unique identifier for the IAM user who performed the action.
     */
    principalId?: __string;
    /**
     * The user name of the IAM user who performed the action.
     */
    userName?: __string;
  }
  export interface Invitation {
    /**
     * The AWS account ID for the account that sent the invitation.
     */
    accountId?: __string;
    /**
     * The unique identifier for the invitation. Amazon Macie uses this identifier to validate the inviter account with the invitee account.
     */
    invitationId?: __string;
    /**
     * The date and time, in UTC and extended ISO 8601 format, when the invitation was sent.
     */
    invitedAt?: __timestampIso8601;
    /**
     * The status of the relationship between the account that sent the invitation (inviter account) and the account that received the invitation (invitee account).
     */
    relationshipStatus?: RelationshipStatus;
  }
  export interface IpAddressDetails {
    /**
     * The Internet Protocol version 4 (IPv4) address of the device.
     */
    ipAddressV4?: __string;
    /**
     * The city that the IP address originated from.
     */
    ipCity?: IpCity;
    /**
     * The country that the IP address originated from.
     */
    ipCountry?: IpCountry;
    /**
     * The geographic coordinates of the location that the IP address originated from.
     */
    ipGeoLocation?: IpGeoLocation;
    /**
     * The registered owner of the IP address.
     */
    ipOwner?: IpOwner;
  }
  export interface IpCity {
    /**
     * The name of the city.
     */
    name?: __string;
  }
  export interface IpCountry {
    /**
     * The two-character code, in ISO 3166-1 alpha-2 format, for the country that the IP address originated from. For example, US for the United States.
     */
    code?: __string;
    /**
     * The name of the country that the IP address originated from.
     */
    name?: __string;
  }
  export interface IpGeoLocation {
    /**
     * The latitude coordinate of the location, rounded to four decimal places.
     */
    lat?: __double;
    /**
     * The longitude coordinate of the location, rounded to four decimal places.
     */
    lon?: __double;
  }
  export interface IpOwner {
    /**
     * The autonomous system number (ASN) for the autonomous system that included the IP address.
     */
    asn?: __string;
    /**
     * The organization identifier that's associated with the autonomous system number (ASN) for the autonomous system that included the IP address.
     */
    asnOrg?: __string;
    /**
     * The name of the internet service provider (ISP) that owned the IP address.
     */
    isp?: __string;
    /**
     * The name of the organization that owned the IP address.
     */
    org?: __string;
  }
  export type IsDefinedInJob = "TRUE"|"FALSE"|"UNKNOWN"|string;
  export type IsMonitoredByJob = "TRUE"|"FALSE"|"UNKNOWN"|string;
  export type JobComparator = "EQ"|"GT"|"GTE"|"LT"|"LTE"|"NE"|"CONTAINS"|string;
  export interface JobDetails {
    /**
     * Specifies whether any one-time or recurring jobs are configured to analyze data in the bucket. Possible values are: TRUE - One or more jobs is configured to analyze data in the bucket, and at least one of those jobs has a status other than CANCELLED. FALSE - No jobs are configured to analyze data in the bucket, or all the jobs that are configured to analyze data in the bucket have a status of CANCELLED. UNKNOWN - An exception occurred when Amazon Macie attempted to retrieve job data for the bucket. 
     */
    isDefinedInJob?: IsDefinedInJob;
    /**
     * Specifies whether any recurring jobs are configured to analyze data in the bucket. Possible values are: TRUE - One or more recurring jobs is configured to analyze data in the bucket, and at least one of those jobs has a status other than CANCELLED. FALSE - No recurring jobs are configured to analyze data in the bucket, or all the recurring jobs that are configured to analyze data in the bucket have a status of CANCELLED. UNKNOWN - An exception occurred when Amazon Macie attempted to retrieve job data for the bucket.
     */
    isMonitoredByJob?: IsMonitoredByJob;
    /**
     * The unique identifier for the job that ran most recently (either the latest run of a recurring job or the only run of a one-time job) and is configured to analyze data in the bucket. This value is null if the value for the isDefinedInJob property is FALSE or UNKNOWN.
     */
    lastJobId?: __string;
    /**
     * The date and time, in UTC and extended ISO 8601 format, when the job (lastJobId) started. If the job is a recurring job, this value indicates when the most recent run started. This value is null if the value for the isDefinedInJob property is FALSE or UNKNOWN.
     */
    lastJobRunTime?: __timestampIso8601;
  }
  export interface JobScheduleFrequency {
    /**
     * Specifies a daily recurrence pattern for running the job.
     */
    dailySchedule?: DailySchedule;
    /**
     * Specifies a monthly recurrence pattern for running the job.
     */
    monthlySchedule?: MonthlySchedule;
    /**
     * Specifies a weekly recurrence pattern for running the job.
     */
    weeklySchedule?: WeeklySchedule;
  }
  export interface JobScopeTerm {
    /**
     * A property-based condition that defines a property, operator, and one or more values for including or excluding an object from the job.
     */
    simpleScopeTerm?: SimpleScopeTerm;
    /**
     * A tag-based condition that defines the operator and tag keys or tag key and value pairs for including or excluding an object from the job.
     */
    tagScopeTerm?: TagScopeTerm;
  }
  export interface JobScopingBlock {
    /**
     * An array of conditions, one for each condition that determines which objects to include or exclude from the job.
     */
    and?: __listOfJobScopeTerm;
  }
  export type JobStatus = "RUNNING"|"PAUSED"|"CANCELLED"|"COMPLETE"|"IDLE"|"USER_PAUSED"|string;
  export interface JobSummary {
    /**
     * The S3 buckets that the job is configured to analyze.
     */
    bucketDefinitions?: __listOfS3BucketDefinitionForJob;
    /**
     * The date and time, in UTC and extended ISO 8601 format, when the job was created.
     */
    createdAt?: __timestampIso8601;
    /**
     * The unique identifier for the job.
     */
    jobId?: __string;
    /**
     * The current status of the job. Possible values are: CANCELLED - You cancelled the job or, if it's a one-time job, you paused the job and didn't resume it within 30 days. COMPLETE - For a one-time job, Amazon Macie finished processing the data specified for the job. This value doesn't apply to recurring jobs. IDLE - For a recurring job, the previous scheduled run is complete and the next scheduled run is pending. This value doesn't apply to one-time jobs. PAUSED - Amazon Macie started running the job but additional processing would exceed the monthly sensitive data discovery quota for your account or one or more member accounts that the job analyzes data for. RUNNING - For a one-time job, the job is in progress. For a recurring job, a scheduled run is in progress. USER_PAUSED - You paused the job. If you paused the job while it had a status of RUNNING and you don't resume it within 30 days of pausing it, the job or job run will expire and be cancelled, depending on the job's type. To check the expiration date, refer to the UserPausedDetails.jobExpiresAt property.
     */
    jobStatus?: JobStatus;
    /**
     * The schedule for running the job. Possible values are: ONE_TIME - The job runs only once. SCHEDULED - The job runs on a daily, weekly, or monthly basis.
     */
    jobType?: JobType;
    /**
     * Specifies whether any account- or bucket-level access errors occurred when the job ran. For a recurring job, this value indicates the error status of the job's most recent run.
     */
    lastRunErrorStatus?: LastRunErrorStatus;
    /**
     * The custom name of the job.
     */
    name?: __string;
    /**
     * If the current status of the job is USER_PAUSED, specifies when the job was paused and when the job or job run will expire and be cancelled if it isn't resumed. This value is present only if the value for jobStatus is USER_PAUSED.
     */
    userPausedDetails?: UserPausedDetails;
  }
  export type JobType = "ONE_TIME"|"SCHEDULED"|string;
  export interface KeyValuePair {
    /**
     * One part of a key-value pair that comprises a tag. A tag key is a general label that acts as a category for more specific tag values.
     */
    key?: __string;
    /**
     * One part of a key-value pair that comprises a tag. A tag value acts as a descriptor for a tag key. A tag value can be an empty string.
     */
    value?: __string;
  }
  export type KeyValuePairList = KeyValuePair[];
  export interface LastRunErrorStatus {
    /**
     * Specifies whether any account- or bucket-level access errors occurred when the job ran. For a recurring job, this value indicates the error status of the job's most recent run. Possible values are: ERROR - One or more errors occurred. Amazon Macie didn't process all the data specified for the job. NONE - No errors occurred. Macie processed all the data specified for the job.
     */
    code?: LastRunErrorStatusCode;
  }
  export type LastRunErrorStatusCode = "NONE"|"ERROR"|string;
  export interface ListClassificationJobsRequest {
    /**
     * The criteria to use to filter the results.
     */
    filterCriteria?: ListJobsFilterCriteria;
    /**
     * The maximum number of items to include in each page of the response.
     */
    maxResults?: __integer;
    /**
     * The nextToken string that specifies which page of results to return in a paginated response.
     */
    nextToken?: __string;
    /**
     * The criteria to use to sort the results.
     */
    sortCriteria?: ListJobsSortCriteria;
  }
  export interface ListClassificationJobsResponse {
    /**
     * An array of objects, one for each job that meets the filter criteria specified in the request.
     */
    items?: __listOfJobSummary;
    /**
     * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.
     */
    nextToken?: __string;
  }
  export interface ListCustomDataIdentifiersRequest {
    /**
     * The maximum number of items to include in each page of the response.
     */
    maxResults?: __integer;
    /**
     * The nextToken string that specifies which page of results to return in a paginated response.
     */
    nextToken?: __string;
  }
  export interface ListCustomDataIdentifiersResponse {
    /**
     * An array of objects, one for each custom data identifier.
     */
    items?: __listOfCustomDataIdentifierSummary;
    /**
     * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.
     */
    nextToken?: __string;
  }
  export interface ListFindingsFiltersRequest {
    /**
     * The maximum number of items to include in each page of a paginated response.
     */
    maxResults?: MaxResults;
    /**
     * The nextToken string that specifies which page of results to return in a paginated response.
     */
    nextToken?: __string;
  }
  export interface ListFindingsFiltersResponse {
    /**
     * An array of objects, one for each filter that's associated with the account.
     */
    findingsFilterListItems?: __listOfFindingsFilterListItem;
    /**
     * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.
     */
    nextToken?: __string;
  }
  export interface ListFindingsRequest {
    /**
     * The criteria to use to filter the results.
     */
    findingCriteria?: FindingCriteria;
    /**
     * The maximum number of items to include in each page of the response.
     */
    maxResults?: __integer;
    /**
     * The nextToken string that specifies which page of results to return in a paginated response.
     */
    nextToken?: __string;
    /**
     * The criteria to use to sort the results.
     */
    sortCriteria?: SortCriteria;
  }
  export interface ListFindingsResponse {
    /**
     * An array of strings, where each string is the unique identifier for a finding that meets the filter criteria specified in the request.
     */
    findingIds?: __listOf__string;
    /**
     * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.
     */
    nextToken?: __string;
  }
  export interface ListInvitationsRequest {
    /**
     * The maximum number of items to include in each page of a paginated response.
     */
    maxResults?: MaxResults;
    /**
     * The nextToken string that specifies which page of results to return in a paginated response.
     */
    nextToken?: __string;
  }
  export interface ListInvitationsResponse {
    /**
     * An array of objects, one for each invitation that was received by the account.
     */
    invitations?: __listOfInvitation;
    /**
     * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.
     */
    nextToken?: __string;
  }
  export interface ListJobsFilterCriteria {
    /**
     * An array of objects, one for each condition that determines which jobs to exclude from the results.
     */
    excludes?: __listOfListJobsFilterTerm;
    /**
     * An array of objects, one for each condition that determines which jobs to include in the results.
     */
    includes?: __listOfListJobsFilterTerm;
  }
  export type ListJobsFilterKey = "jobType"|"jobStatus"|"createdAt"|"name"|string;
  export interface ListJobsFilterTerm {
    /**
     * The operator to use to filter the results.
     */
    comparator?: JobComparator;
    /**
     * The property to use to filter the results.
     */
    key?: ListJobsFilterKey;
    /**
     * An array that lists one or more values to use to filter the results.
     */
    values?: __listOf__string;
  }
  export type ListJobsSortAttributeName = "createdAt"|"jobStatus"|"name"|"jobType"|string;
  export interface ListJobsSortCriteria {
    /**
     * The property to sort the results by.
     */
    attributeName?: ListJobsSortAttributeName;
    /**
     * The sort order to apply to the results, based on the value for the property specified by the attributeName property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.
     */
    orderBy?: OrderBy;
  }
  export interface ListMembersRequest {
    /**
     * The maximum number of items to include in each page of a paginated response.
     */
    maxResults?: MaxResults;
    /**
     * The nextToken string that specifies which page of results to return in a paginated response.
     */
    nextToken?: __string;
    /**
     * Specifies which accounts to include in the response, based on the status of an account's relationship with the master account. By default, the response includes only current member accounts. To include all accounts, set the value for this parameter to false.
     */
    onlyAssociated?: __string;
  }
  export interface ListMembersResponse {
    /**
     * An array of objects, one for each account that's associated with the master account and meets the criteria specified by the onlyAssociated request parameter.
     */
    members?: __listOfMember;
    /**
     * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.
     */
    nextToken?: __string;
  }
  export interface ListOrganizationAdminAccountsRequest {
    /**
     * The maximum number of items to include in each page of a paginated response.
     */
    maxResults?: MaxResults;
    /**
     * The nextToken string that specifies which page of results to return in a paginated response.
     */
    nextToken?: __string;
  }
  export interface ListOrganizationAdminAccountsResponse {
    /**
     * An array of objects, one for each delegated Amazon Macie administrator account for the organization. Only one of these accounts can have a status of ENABLED.
     */
    adminAccounts?: __listOfAdminAccount;
    /**
     * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.
     */
    nextToken?: __string;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the classification job, custom data identifier, findings filter, or member account.
     */
    resourceArn: __string;
  }
  export interface ListTagsForResourceResponse {
    /**
     * A map of key-value pairs that identifies the tags (keys and values) that are associated with the resource.
     */
    tags?: TagMap;
  }
  export type MacieStatus = "PAUSED"|"ENABLED"|string;
  export type MaxResults = number;
  export interface Member {
    /**
     * The AWS account ID for the account.
     */
    accountId?: __string;
    /**
     * The Amazon Resource Name (ARN) of the account.
     */
    arn?: __string;
    /**
     * The email address for the account.
     */
    email?: __string;
    /**
     * The date and time, in UTC and extended ISO 8601 format, when an Amazon Macie membership invitation was last sent to the account. This value is null if a Macie invitation hasn't been sent to the account.
     */
    invitedAt?: __timestampIso8601;
    /**
     * The AWS account ID for the master account.
     */
    masterAccountId?: __string;
    /**
     * The current status of the relationship between the account and the master account.
     */
    relationshipStatus?: RelationshipStatus;
    /**
     * A map of key-value pairs that identifies the tags (keys and values) that are associated with the account in Amazon Macie.
     */
    tags?: TagMap;
    /**
     * The date and time, in UTC and extended ISO 8601 format, of the most recent change to the status of the relationship between the account and the master account.
     */
    updatedAt?: __timestampIso8601;
  }
  export interface MonthlySchedule {
    /**
     * The numeric day of the month when Amazon Macie runs the job. This value can be an integer from 1 through 31. If this value exceeds the number of days in a certain month, Macie runs the job on the last day of that month. For example, if this value is 31 and a month has only 30 days, Macie runs the job on day 30 of that month.
     */
    dayOfMonth?: __integer;
  }
  export interface ObjectCountByEncryptionType {
    /**
     * The total number of objects that are encrypted using a customer-managed key. The objects use customer-provided server-side (SSE-C) encryption.
     */
    customerManaged?: __long;
    /**
     * The total number of objects that are encrypted using an AWS Key Management Service (AWS KMS) customer master key (CMK). The objects use AWS managed AWS KMS (AWS-KMS) encryption or customer managed AWS KMS (SSE-KMS) encryption.
     */
    kmsManaged?: __long;
    /**
     * The total number of objects that are encrypted using an Amazon S3 managed key. The objects use Amazon S3 managed (SSE-S3) encryption.
     */
    s3Managed?: __long;
    /**
     * The total number of objects that aren't encrypted or use client-side encryption.
     */
    unencrypted?: __long;
  }
  export interface ObjectLevelStatistics {
    /**
     * The total storage size (in bytes) or number of objects that Amazon Macie can't analyze because the objects don't have a file name extension for a supported file or storage format.
     */
    fileType?: __long;
    /**
     * The total storage size (in bytes) or number of objects that Amazon Macie can't analyze because the objects use an unsupported storage class.
     */
    storageClass?: __long;
    /**
     * The total storage size (in bytes) or number of objects that Amazon Macie can't analyze because the objects use an unsupported storage class or don't have a file name extension for a supported file or storage format.
     */
    total?: __long;
  }
  export interface Occurrences {
    /**
     * An array of objects, one for each occurrence of sensitive data in a Microsoft Excel workbook, CSV file, or TSV file. Each object specifies the cell or field that contains the data. This value is null for all other types of files.
     */
    cells?: Cells;
    /**
     * An array of objects, one for each occurrence of sensitive data in a Microsoft Word document or non-binary text file, such as an HTML, JSON, TXT, or XML file. Each object specifies the line that contains the data, and the position of the data on that line. This value is often null for file types that are supported by Cell, Page, or Record objects. Exceptions are the locations of: data in unstructured sections of an otherwise structured file, such as a comment in a file; and, data in a malformed file that Amazon Macie analyzes as plain text.
     */
    lineRanges?: Ranges;
    /**
     * An array of objects, one for each occurrence of sensitive data in a binary text file. Each object specifies the position of the data relative to the beginning of the file. This value is typically null. For binary text files, Amazon Macie adds location data to a lineRanges.Range or Page object, depending on the file type.
     */
    offsetRanges?: Ranges;
    /**
     * An array of objects, one for each occurrence of sensitive data in an Adobe Portable Document Format file. Each object specifies the page that contains the data, and the position of the data on that page. This value is null for all other types of files.
     */
    pages?: Pages;
    /**
     * An array of objects, one for each occurrence of sensitive data in an Apache Avro object container or Apache Parquet file. Each object specifies the record index and the path to the field in the record that contains the data. This value is null for all other types of files.
     */
    records?: Records;
  }
  export type OrderBy = "ASC"|"DESC"|string;
  export interface Page {
    /**
     * The line that contains the data, and the position of the data on that line.
     */
    lineRange?: Range;
    /**
     * The position of the data on the page, relative to the beginning of the page.
     */
    offsetRange?: Range;
    /**
     * The page number of the page that contains the data.
     */
    pageNumber?: __long;
  }
  export type Pages = Page[];
  export interface PolicyDetails {
    /**
     * The action that produced the finding.
     */
    action?: FindingAction;
    /**
     * The entity that performed the action that produced the finding.
     */
    actor?: FindingActor;
  }
  export interface PutClassificationExportConfigurationRequest {
    /**
     * The location to store data classification results in, and the encryption settings to use when storing results in that location.
     */
    configuration: ClassificationExportConfiguration;
  }
  export interface PutClassificationExportConfigurationResponse {
    /**
     * The location where the data classification results are stored, and the encryption settings that are used when storing results in that location.
     */
    configuration?: ClassificationExportConfiguration;
  }
  export interface Range {
    /**
     * Possible values are: In an Occurrences.lineRanges array, the number of lines from the beginning of the file to the end of the sensitive data. In an Occurrences.offsetRanges array, the number of characters from the beginning of the file to the end of the sensitive data. In a Page object, the number of lines (lineRange) or characters (offsetRange) from the beginning of the page to the end of the sensitive data.
     */
    end?: __long;
    /**
     * Possible values are: In an Occurrences.lineRanges array, the number of lines from the beginning of the file to the beginning of the sensitive data. In an Occurrences.offsetRanges array, the number of characters from the beginning of the file to the beginning of the sensitive data. In a Page object, the number of lines (lineRange) or characters (offsetRange) from the beginning of the page to the beginning of the sensitive data.
     */
    start?: __long;
    /**
     * The column number for the column that contains the data, if the file contains structured data.
     */
    startColumn?: __long;
  }
  export type Ranges = Range[];
  export interface Record {
    /**
     * The path, as a JSONPath expression, to the field in the record that contains the data. If the name of an element exceeds 20 characters, Amazon Macie truncates the name by removing characters from the beginning of the name. If the resulting full path exceeds 250 characters, Macie also truncates the path, starting with the first element in the path, until the path contains 250 or fewer characters.
     */
    jsonPath?: __string;
    /**
     * The record index, starting from 0, for the record that contains the data.
     */
    recordIndex?: __long;
  }
  export type Records = Record[];
  export type RelationshipStatus = "Enabled"|"Paused"|"Invited"|"Created"|"Removed"|"Resigned"|"EmailVerificationInProgress"|"EmailVerificationFailed"|"RegionDisabled"|"AccountSuspended"|string;
  export interface ReplicationDetails {
    /**
     * Specifies whether the bucket is configured to replicate one or more objects to any destination.
     */
    replicated?: __boolean;
    /**
     * Specifies whether the bucket is configured to replicate one or more objects to an AWS account that isn't part of the same Amazon Macie organization.
     */
    replicatedExternally?: __boolean;
    /**
     * An array of AWS account IDs, one for each AWS account that the bucket is configured to replicate one or more objects to.
     */
    replicationAccounts?: __listOf__string;
  }
  export interface ResourcesAffected {
    /**
     * An array of objects, one for each S3 bucket that the finding applies to. Each object provides a set of metadata about an affected S3 bucket.
     */
    s3Bucket?: S3Bucket;
    /**
     * An array of objects, one for each S3 object that the finding applies to. Each object provides a set of metadata about an affected S3 object.
     */
    s3Object?: S3Object;
  }
  export interface S3Bucket {
    /**
     * The Amazon Resource Name (ARN) of the bucket.
     */
    arn?: __string;
    /**
     * The date and time, in UTC and extended ISO 8601 format, when the bucket was created.
     */
    createdAt?: __timestampIso8601;
    /**
     * The type of server-side encryption that's used by default to encrypt objects in the bucket.
     */
    defaultServerSideEncryption?: ServerSideEncryption;
    /**
     * The name of the bucket.
     */
    name?: __string;
    /**
     * The display name and account identifier for the user who owns the bucket.
     */
    owner?: S3BucketOwner;
    /**
     * The permissions settings that determine whether the bucket is publicly accessible.
     */
    publicAccess?: BucketPublicAccess;
    /**
     * The tags that are associated with the bucket.
     */
    tags?: KeyValuePairList;
  }
  export interface S3BucketDefinitionForJob {
    /**
     * The unique identifier for the AWS account that owns the buckets. If you specify this value and don't specify a value for the buckets array, the job analyzes objects in all the buckets that are owned by the account and meet other conditions specified for the job.
     */
    accountId?: __string;
    /**
     * An array that lists the names of the buckets.
     */
    buckets?: __listOf__string;
  }
  export interface S3BucketOwner {
    /**
     * The display name of the user who owns the bucket.
     */
    displayName?: __string;
    /**
     * The AWS account ID for the user who owns the bucket.
     */
    id?: __string;
  }
  export interface S3Destination {
    /**
     * The name of the bucket.
     */
    bucketName: __string;
    /**
     * The path prefix to use in the path to the location in the bucket. This prefix specifies where to store classification results in the bucket.
     */
    keyPrefix?: __string;
    /**
     * The Amazon Resource Name (ARN) of the AWS Key Management Service (AWS KMS) customer master key (CMK) to use for encryption of the results. This must be the ARN of an existing CMK that's in the same AWS Region as the bucket.
     */
    kmsKeyArn: __string;
  }
  export interface S3JobDefinition {
    /**
     * An array of objects, one for each AWS account that owns buckets to analyze. Each object specifies the account ID for an account and one or more buckets to analyze for the account.
     */
    bucketDefinitions?: __listOfS3BucketDefinitionForJob;
    /**
     * The property- and tag-based conditions that determine which objects to include or exclude from the analysis.
     */
    scoping?: Scoping;
  }
  export interface S3Object {
    /**
     * The Amazon Resource Name (ARN) of the bucket that contains the object.
     */
    bucketArn?: __string;
    /**
     * The entity tag (ETag) that identifies the affected version of the object. If the object was overwritten or changed after Amazon Macie produced the finding, this value might be different from the current ETag for the object.
     */
    eTag?: __string;
    /**
     * The file name extension of the object. If the object doesn't have a file name extension, this value is "".
     */
    extension?: __string;
    /**
     * The full key (name) that's assigned to the object.
     */
    key?: __string;
    /**
     * The date and time, in UTC and extended ISO 8601 format, when the object was last modified.
     */
    lastModified?: __timestampIso8601;
    /**
     * The path to the object, including the full key (name).
     */
    path?: __string;
    /**
     * Specifies whether the object is publicly accessible due to the combination of permissions settings that apply to the object.
     */
    publicAccess?: __boolean;
    /**
     * The type of server-side encryption that's used for the object.
     */
    serverSideEncryption?: ServerSideEncryption;
    /**
     * The total storage size, in bytes, of the object.
     */
    size?: __long;
    /**
     * The storage class of the object.
     */
    storageClass?: StorageClass;
    /**
     * The tags that are associated with the object.
     */
    tags?: KeyValuePairList;
    /**
     * The identifier for the affected version of the object.
     */
    versionId?: __string;
  }
  export type ScopeFilterKey = "BUCKET_CREATION_DATE"|"OBJECT_EXTENSION"|"OBJECT_LAST_MODIFIED_DATE"|"OBJECT_SIZE"|"TAG"|string;
  export interface Scoping {
    /**
     * The property- or tag-based conditions that determine which objects to exclude from the analysis.
     */
    excludes?: JobScopingBlock;
    /**
     * The property- or tag-based conditions that determine which objects to include in the analysis.
     */
    includes?: JobScopingBlock;
  }
  export type SensitiveData = SensitiveDataItem[];
  export interface SensitiveDataItem {
    /**
     * The category of sensitive data that was detected. For example: CREDENTIALS, for credentials data such as private keys or AWS secret keys; FINANCIAL_INFORMATION, for financial data such as credit card numbers; or, PERSONAL_INFORMATION, for personal health information, such as health insurance identification numbers, or personally identifiable information, such as driver's license identification numbers.
     */
    category?: SensitiveDataItemCategory;
    /**
     * An array of objects, one for each type of sensitive data that was detected. Each object reports the number of occurrences of a specific type of sensitive data that was detected, and the location of up to 15 of those occurrences.
     */
    detections?: DefaultDetections;
    /**
     * The total number of occurrences of the sensitive data that was detected.
     */
    totalCount?: __long;
  }
  export type SensitiveDataItemCategory = "FINANCIAL_INFORMATION"|"PERSONAL_INFORMATION"|"CREDENTIALS"|"CUSTOM_IDENTIFIER"|string;
  export interface ServerSideEncryption {
    /**
     * The server-side encryption algorithm that's used when storing data in the bucket or object. If encryption is disabled for the bucket or object, this value is NONE.
     */
    encryptionType?: EncryptionType;
    /**
     * The unique identifier for the AWS Key Management Service (AWS KMS) master key that's used to encrypt the bucket or object. This value is null if AWS KMS isn't used to encrypt the bucket or object.
     */
    kmsMasterKeyId?: __string;
  }
  export interface ServiceLimit {
    /**
     * Specifies whether the account has met the quota that corresponds to the metric specified by the UsageByAccount.type field in the response.
     */
    isServiceLimited?: __boolean;
    /**
     * The unit of measurement for the value specified by the value field.
     */
    unit?: Unit;
    /**
     * The value for the metric specified by the UsageByAccount.type field in the response.
     */
    value?: __long;
  }
  export interface SessionContext {
    /**
     * The date and time when the credentials were issued, and whether the credentials were authenticated with a multi-factor authentication (MFA) device.
     */
    attributes?: SessionContextAttributes;
    /**
     * The source and type of credentials that were issued to the entity.
     */
    sessionIssuer?: SessionIssuer;
  }
  export interface SessionContextAttributes {
    /**
     * The date and time, in UTC and ISO 8601 format, when the credentials were issued.
     */
    creationDate?: __timestampIso8601;
    /**
     * Specifies whether the credentials were authenticated with a multi-factor authentication (MFA) device.
     */
    mfaAuthenticated?: __boolean;
  }
  export interface SessionIssuer {
    /**
     * The unique identifier for the AWS account that owns the entity that was used to get the credentials.
     */
    accountId?: __string;
    /**
     * The Amazon Resource Name (ARN) of the source account, IAM user, or role that was used to get the credentials.
     */
    arn?: __string;
    /**
     * The unique identifier for the entity that was used to get the credentials.
     */
    principalId?: __string;
    /**
     * The source of the temporary security credentials, such as Root, IAMUser, or Role.
     */
    type?: __string;
    /**
     * The name or alias of the user or role that issued the session. This value is null if the credentials were obtained from a root account that doesn't have an alias.
     */
    userName?: __string;
  }
  export interface Severity {
    /**
     * The qualitative representation of the finding's severity, ranging from Low (least severe) to High (most severe).
     */
    description?: SeverityDescription;
    /**
     * The numerical representation of the finding's severity, ranging from 1 (least severe) to 3 (most severe).
     */
    score?: __long;
  }
  export type SeverityDescription = "Low"|"Medium"|"High"|string;
  export type SharedAccess = "EXTERNAL"|"INTERNAL"|"NOT_SHARED"|"UNKNOWN"|string;
  export interface SimpleScopeTerm {
    /**
     * The operator to use in the condition. Valid operators for each supported property (key) are: OBJECT_EXTENSION - EQ (equals) or NE (not equals) OBJECT_LAST_MODIFIED_DATE - Any operator except CONTAINS OBJECT_SIZE - Any operator except CONTAINS TAG - EQ (equals) or NE (not equals)
     */
    comparator?: JobComparator;
    /**
     * The object property to use in the condition.
     */
    key?: ScopeFilterKey;
    /**
     * An array that lists the values to use in the condition. If the value for the key property is OBJECT_EXTENSION, this array can specify multiple values and Amazon Macie uses an OR operator to join the values. Otherwise, this array can specify only one value. Valid values for each supported property (key) are: OBJECT_EXTENSION - A string that represents the file name extension of an object. For example: doc, docx, pdf OBJECT_LAST_MODIFIED_DATE - The date and time (in UTC and extended ISO 8601 format) when an object was created or last changed, whichever is latest. For example: 2020-09-28T14:31:13Z OBJECT_SIZE - An integer that represents the storage size (in bytes) of an object. TAG - A string that represents a tag key for an object. For advanced options, use a TagScopeTerm object, instead of a SimpleScopeTerm object, to define a tag-based condition for the job.
     */
    values?: __listOf__string;
  }
  export interface SortCriteria {
    /**
     * The name of the property to sort the results by. This value can be the name of any property that Amazon Macie defines for a finding.
     */
    attributeName?: __string;
    /**
     * The sort order to apply to the results, based on the value for the property specified by the attributeName property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.
     */
    orderBy?: OrderBy;
  }
  export interface Statistics {
    /**
     * The approximate number of objects that the job has yet to process during its current run.
     */
    approximateNumberOfObjectsToProcess?: __double;
    /**
     * The number of times that the job has run.
     */
    numberOfRuns?: __double;
  }
  export type StorageClass = "STANDARD"|"REDUCED_REDUNDANCY"|"STANDARD_IA"|"INTELLIGENT_TIERING"|"DEEP_ARCHIVE"|"ONEZONE_IA"|"GLACIER"|string;
  export type TagMap = {[key: string]: __string};
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the classification job, custom data identifier, findings filter, or member account.
     */
    resourceArn: __string;
    /**
     * A map of key-value pairs that specifies the tags to associate with the resource. A resource can have a maximum of 50 tags. Each tag consists of a tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.
     */
    tags: TagMap;
  }
  export interface TagResourceResponse {
  }
  export interface TagScopeTerm {
    /**
     * The operator to use in the condition. Valid operators are EQ (equals) or NE (not equals).
     */
    comparator?: JobComparator;
    /**
     * The tag key to use in the condition.
     */
    key?: __string;
    /**
     * The tag keys or tag key and value pairs to use in the condition.
     */
    tagValues?: __listOfTagValuePair;
    /**
     * The type of object to apply the condition to.
     */
    target?: TagTarget;
  }
  export type TagTarget = "S3_OBJECT"|string;
  export interface TagValuePair {
    /**
     * The value for the tag key to use in the condition.
     */
    key?: __string;
    /**
     * The tag value, associated with the specified tag key (key), to use in the condition. To specify only a tag key for a condition, specify the tag key for the key property and set this value to an empty string.
     */
    value?: __string;
  }
  export interface TestCustomDataIdentifierRequest {
    /**
     * An array that lists specific character sequences (ignore words) to exclude from the results. If the text matched by the regular expression is the same as any string in this array, Amazon Macie ignores it. The array can contain as many as 10 ignore words. Each ignore word can contain 4 - 90 characters. Ignore words are case sensitive.
     */
    ignoreWords?: __listOf__string;
    /**
     * An array that lists specific character sequences (keywords), one of which must be within proximity (maximumMatchDistance) of the regular expression to match. The array can contain as many as 50 keywords. Each keyword can contain 4 - 90 characters. Keywords aren't case sensitive.
     */
    keywords?: __listOf__string;
    /**
     * The maximum number of characters that can exist between text that matches the regex pattern and the character sequences specified by the keywords array. Macie includes or excludes a result based on the proximity of a keyword to text that matches the regex pattern. The distance can be 1 - 300 characters. The default value is 50.
     */
    maximumMatchDistance?: __integer;
    /**
     * The regular expression (regex) that defines the pattern to match. The expression can contain as many as 512 characters.
     */
    regex: __string;
    /**
     * The sample text to inspect by using the custom data identifier. The text can contain as many as 1,000 characters.
     */
    sampleText: __string;
  }
  export interface TestCustomDataIdentifierResponse {
    /**
     * The number of instances of sample text that matched the detection criteria specified in the custom data identifier.
     */
    matchCount?: __integer;
  }
  export type Unit = "TERABYTES"|string;
  export interface UnprocessedAccount {
    /**
     * The AWS account ID for the account that the request applies to.
     */
    accountId?: __string;
    /**
     * The source of the issue or delay in processing the request.
     */
    errorCode?: ErrorCode;
    /**
     * The reason why the request hasn't been processed.
     */
    errorMessage?: __string;
  }
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the classification job, custom data identifier, findings filter, or member account.
     */
    resourceArn: __string;
    /**
     * The key of the tag to remove from the resource. To remove multiple tags, append the tagKeys parameter and argument for each additional tag to remove, separated by an ampersand (&amp;).
     */
    tagKeys: __listOf__string;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateClassificationJobRequest {
    /**
     * The unique identifier for the classification job.
     */
    jobId: __string;
    /**
     * The new status for the job. Valid values are: CANCELLED - Stops the job permanently and cancels it. This value is valid only if the job's current status is IDLE, PAUSED, RUNNING, or USER_PAUSED. If you specify this value and the job's current status is RUNNING, Amazon Macie immediately begins to stop all processing tasks for the job. You can't resume or restart a job after you cancel it. RUNNING - Resumes the job. This value is valid only if the job's current status is USER_PAUSED. If you paused the job while it was actively running and you specify this value less than 30 days after you paused the job, Macie immediately resumes processing from the point where you paused the job. Otherwise, Macie resumes the job according to the schedule and other settings for the job. USER_PAUSED - Pauses the job temporarily. This value is valid only if the job's current status is IDLE or RUNNING. If you specify this value and the job's current status is RUNNING, Macie immediately begins to pause all processing tasks for the job. If you pause a one-time job and you don't resume it within 30 days, the job expires and Macie cancels the job. If you pause a recurring job when its status is RUNNING and you don't resume it within 30 days, the job run expires and Macie cancels the run. To check the expiration date, refer to the UserPausedDetails.jobExpiresAt property.
     */
    jobStatus: JobStatus;
  }
  export interface UpdateClassificationJobResponse {
  }
  export interface UpdateFindingsFilterRequest {
    /**
     * The action to perform on findings that meet the filter criteria (findingCriteria). Valid values are: ARCHIVE, suppress (automatically archive) the findings; and, NOOP, don't perform any action on the findings.
     */
    action?: FindingsFilterAction;
    /**
     * A custom description of the filter. The description can contain as many as 512 characters. We strongly recommend that you avoid including any sensitive data in the description of a filter. Other users might be able to see the filter's description, depending on the actions that they're allowed to perform in Amazon Macie.
     */
    description?: __string;
    /**
     * The criteria to use to filter findings.
     */
    findingCriteria?: FindingCriteria;
    /**
     * The unique identifier for the Amazon Macie resource or account that the request applies to.
     */
    id: __string;
    /**
     * A custom name for the filter. The name must contain at least 3 characters and can contain as many as 64 characters. We strongly recommend that you avoid including any sensitive data in the name of a filter. Other users might be able to see the filter's name, depending on the actions that they're allowed to perform in Amazon Macie.
     */
    name?: __string;
    /**
     * The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings.
     */
    position?: __integer;
  }
  export interface UpdateFindingsFilterResponse {
    /**
     * The Amazon Resource Name (ARN) of the filter that was updated.
     */
    arn?: __string;
    /**
     * The unique identifier for the filter that was updated.
     */
    id?: __string;
  }
  export interface UpdateMacieSessionRequest {
    /**
     * Specifies how often to publish updates to policy findings for the account. This includes publishing updates to AWS Security Hub and Amazon EventBridge (formerly called Amazon CloudWatch Events).
     */
    findingPublishingFrequency?: FindingPublishingFrequency;
    /**
     * Specifies whether to change the status of the account. Valid values are: ENABLED, resume all Amazon Macie activities for the account; and, PAUSED, suspend all Macie activities for the account.
     */
    status?: MacieStatus;
  }
  export interface UpdateMacieSessionResponse {
  }
  export interface UpdateMemberSessionRequest {
    /**
     * The unique identifier for the Amazon Macie resource or account that the request applies to.
     */
    id: __string;
    /**
     * Specifies the new status for the account. Valid values are: ENABLED, resume all Amazon Macie activities for the account; and, PAUSED, suspend all Macie activities for the account.
     */
    status: MacieStatus;
  }
  export interface UpdateMemberSessionResponse {
  }
  export interface UpdateOrganizationConfigurationRequest {
    /**
     * Specifies whether Amazon Macie is enabled automatically for each account, when the account is added to the AWS organization.
     */
    autoEnable: __boolean;
  }
  export interface UpdateOrganizationConfigurationResponse {
  }
  export interface UsageByAccount {
    /**
     * The type of currency that the value for the metric (estimatedCost) is reported in.
     */
    currency?: Currency;
    /**
     * The estimated value for the metric.
     */
    estimatedCost?: __string;
    /**
     * The current value for the quota that corresponds to the metric specified by the type field.
     */
    serviceLimit?: ServiceLimit;
    /**
     * The name of the metric. Possible values are: DATA_INVENTORY_EVALUATION, for monitoring S3 buckets; and, SENSITIVE_DATA_DISCOVERY, for analyzing sensitive data.
     */
    type?: UsageType;
  }
  export interface UsageRecord {
    /**
     * The unique identifier for the AWS account that the data applies to.
     */
    accountId?: __string;
    /**
     * The date and time, in UTC and extended ISO 8601 format, when the free trial started for the account.
     */
    freeTrialStartDate?: __timestampIso8601;
    /**
     * An array of objects that contains usage data and quotas for the account. Each object contains the data for a specific usage metric and the corresponding quota.
     */
    usage?: __listOfUsageByAccount;
  }
  export interface UsageStatisticsFilter {
    /**
     * The operator to use in the condition. If the value for the key property is accountId, this value must be CONTAINS. If the value for the key property is any other supported field, this value can be EQ, GT, GTE, LT, LTE, or NE.
     */
    comparator?: UsageStatisticsFilterComparator;
    /**
     * The field to use in the condition.
     */
    key?: UsageStatisticsFilterKey;
    /**
     * An array that lists values to use in the condition, based on the value for the field specified by the key property. If the value for the key property is accountId, this array can specify multiple values. Otherwise, this array can specify only one value. Valid values for each supported field are: accountId - The unique identifier for an AWS account. freeTrialStartDate - The date and time, in UTC and extended ISO 8601 format, when the free trial started for an account. serviceLimit - A Boolean (true or false) value that indicates whether an account has reached its monthly quota. total - A string that represents the current, estimated month-to-date cost for an account.
     */
    values?: __listOf__string;
  }
  export type UsageStatisticsFilterComparator = "GT"|"GTE"|"LT"|"LTE"|"EQ"|"NE"|"CONTAINS"|string;
  export type UsageStatisticsFilterKey = "accountId"|"serviceLimit"|"freeTrialStartDate"|"total"|string;
  export interface UsageStatisticsSortBy {
    /**
     * The field to sort the results by.
     */
    key?: UsageStatisticsSortKey;
    /**
     * The sort order to apply to the results, based on the value for the field specified by the key property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.
     */
    orderBy?: OrderBy;
  }
  export type UsageStatisticsSortKey = "accountId"|"total"|"serviceLimitValue"|"freeTrialStartDate"|string;
  export interface UsageTotal {
    /**
     * The type of currency that the value for the metric (estimatedCost) is reported in.
     */
    currency?: Currency;
    /**
     * The estimated value for the metric.
     */
    estimatedCost?: __string;
    /**
     * The name of the metric. Possible values are: DATA_INVENTORY_EVALUATION, for monitoring S3 buckets; and, SENSITIVE_DATA_DISCOVERY, for analyzing sensitive data.
     */
    type?: UsageType;
  }
  export type UsageType = "DATA_INVENTORY_EVALUATION"|"SENSITIVE_DATA_DISCOVERY"|string;
  export interface UserIdentity {
    /**
     * If the action was performed with temporary security credentials that were obtained using the AssumeRole operation of the AWS Security Token Service (AWS STS) API, the identifiers, session context, and other details about the identity.
     */
    assumedRole?: AssumedRole;
    /**
     * If the action was performed using the credentials for another AWS account, the details of that account.
     */
    awsAccount?: AwsAccount;
    /**
     * If the action was performed by an AWS account that belongs to an AWS service, the name of the service.
     */
    awsService?: AwsService;
    /**
     * If the action was performed with temporary security credentials that were obtained using the GetFederationToken operation of the AWS Security Token Service (AWS STS) API, the identifiers, session context, and other details about the identity.
     */
    federatedUser?: FederatedUser;
    /**
     * If the action was performed using the credentials for an AWS Identity and Access Management (IAM) user, the name and other details about the user.
     */
    iamUser?: IamUser;
    /**
     * If the action was performed using the credentials for your AWS account, the details of your account.
     */
    root?: UserIdentityRoot;
    /**
     * The type of entity that performed the action.
     */
    type?: UserIdentityType;
  }
  export interface UserIdentityRoot {
    /**
     * The unique identifier for the AWS account.
     */
    accountId?: __string;
    /**
     * The Amazon Resource Name (ARN) of the principal that performed the action. The last section of the ARN contains the name of the user or role that performed the action.
     */
    arn?: __string;
    /**
     * The unique identifier for the entity that performed the action.
     */
    principalId?: __string;
  }
  export type UserIdentityType = "AssumedRole"|"IAMUser"|"FederatedUser"|"Root"|"AWSAccount"|"AWSService"|string;
  export interface UserPausedDetails {
    /**
     * The date and time, in UTC and extended ISO 8601 format, when the job or job run will expire and be cancelled if you don't resume it first.
     */
    jobExpiresAt?: __timestampIso8601;
    /**
     * The Amazon Resource Name (ARN) of the AWS Health event that Amazon Macie sent to notify you of the job or job run's pending expiration and cancellation. This value is null if a job has been paused for less than 23 days.
     */
    jobImminentExpirationHealthEventArn?: __string;
    /**
     * The date and time, in UTC and extended ISO 8601 format, when you paused the job.
     */
    jobPausedAt?: __timestampIso8601;
  }
  export interface WeeklySchedule {
    /**
     * The day of the week when Amazon Macie runs the job.
     */
    dayOfWeek?: DayOfWeek;
  }
  export type __boolean = boolean;
  export type __double = number;
  export type __integer = number;
  export type __listOfAdminAccount = AdminAccount[];
  export type __listOfBatchGetCustomDataIdentifierSummary = BatchGetCustomDataIdentifierSummary[];
  export type __listOfBucketMetadata = BucketMetadata[];
  export type __listOfCustomDataIdentifierSummary = CustomDataIdentifierSummary[];
  export type __listOfFinding = Finding[];
  export type __listOfFindingType = FindingType[];
  export type __listOfFindingsFilterListItem = FindingsFilterListItem[];
  export type __listOfGroupCount = GroupCount[];
  export type __listOfInvitation = Invitation[];
  export type __listOfJobScopeTerm = JobScopeTerm[];
  export type __listOfJobSummary = JobSummary[];
  export type __listOfKeyValuePair = KeyValuePair[];
  export type __listOfListJobsFilterTerm = ListJobsFilterTerm[];
  export type __listOfMember = Member[];
  export type __listOfS3BucketDefinitionForJob = S3BucketDefinitionForJob[];
  export type __listOfTagValuePair = TagValuePair[];
  export type __listOfUnprocessedAccount = UnprocessedAccount[];
  export type __listOfUsageByAccount = UsageByAccount[];
  export type __listOfUsageRecord = UsageRecord[];
  export type __listOfUsageStatisticsFilter = UsageStatisticsFilter[];
  export type __listOfUsageTotal = UsageTotal[];
  export type __listOf__string = __string[];
  export type __long = number;
  export type __string = string;
  export type __timestampIso8601 = Date;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2020-01-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Macie2 client.
   */
  export import Types = Macie2;
}
export = Macie2;
