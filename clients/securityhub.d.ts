import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class SecurityHub extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: SecurityHub.Types.ClientConfiguration)
  config: Config & SecurityHub.Types.ClientConfiguration;
  /**
   * Accepts the invitation to be a member account and be monitored by the Security Hub master account that the invitation was sent from. When the member account accepts the invitation, permission is granted to the master account to view findings generated in the member account.
   */
  acceptInvitation(params: SecurityHub.Types.AcceptInvitationRequest, callback?: (err: AWSError, data: SecurityHub.Types.AcceptInvitationResponse) => void): Request<SecurityHub.Types.AcceptInvitationResponse, AWSError>;
  /**
   * Accepts the invitation to be a member account and be monitored by the Security Hub master account that the invitation was sent from. When the member account accepts the invitation, permission is granted to the master account to view findings generated in the member account.
   */
  acceptInvitation(callback?: (err: AWSError, data: SecurityHub.Types.AcceptInvitationResponse) => void): Request<SecurityHub.Types.AcceptInvitationResponse, AWSError>;
  /**
   * Disables the standards specified by the provided StandardsSubscriptionArns. For more information, see Standards Supported in AWS Security Hub.
   */
  batchDisableStandards(params: SecurityHub.Types.BatchDisableStandardsRequest, callback?: (err: AWSError, data: SecurityHub.Types.BatchDisableStandardsResponse) => void): Request<SecurityHub.Types.BatchDisableStandardsResponse, AWSError>;
  /**
   * Disables the standards specified by the provided StandardsSubscriptionArns. For more information, see Standards Supported in AWS Security Hub.
   */
  batchDisableStandards(callback?: (err: AWSError, data: SecurityHub.Types.BatchDisableStandardsResponse) => void): Request<SecurityHub.Types.BatchDisableStandardsResponse, AWSError>;
  /**
   * Enables the standards specified by the provided standardsArn. In this release, only CIS AWS Foundations standards are supported. For more information, see Standards Supported in AWS Security Hub.
   */
  batchEnableStandards(params: SecurityHub.Types.BatchEnableStandardsRequest, callback?: (err: AWSError, data: SecurityHub.Types.BatchEnableStandardsResponse) => void): Request<SecurityHub.Types.BatchEnableStandardsResponse, AWSError>;
  /**
   * Enables the standards specified by the provided standardsArn. In this release, only CIS AWS Foundations standards are supported. For more information, see Standards Supported in AWS Security Hub.
   */
  batchEnableStandards(callback?: (err: AWSError, data: SecurityHub.Types.BatchEnableStandardsResponse) => void): Request<SecurityHub.Types.BatchEnableStandardsResponse, AWSError>;
  /**
   * Imports security findings generated from an integrated third-party product into Security Hub. This action is requested by the integrated product to import its findings into Security Hub. The maximum allowed size for a finding is 240 Kb. An error is returned for any finding larger than 240 Kb.
   */
  batchImportFindings(params: SecurityHub.Types.BatchImportFindingsRequest, callback?: (err: AWSError, data: SecurityHub.Types.BatchImportFindingsResponse) => void): Request<SecurityHub.Types.BatchImportFindingsResponse, AWSError>;
  /**
   * Imports security findings generated from an integrated third-party product into Security Hub. This action is requested by the integrated product to import its findings into Security Hub. The maximum allowed size for a finding is 240 Kb. An error is returned for any finding larger than 240 Kb.
   */
  batchImportFindings(callback?: (err: AWSError, data: SecurityHub.Types.BatchImportFindingsResponse) => void): Request<SecurityHub.Types.BatchImportFindingsResponse, AWSError>;
  /**
   * Creates a custom action target in Security Hub. You can use custom actions on findings and insights in Security Hub to trigger target actions in Amazon CloudWatch Events.
   */
  createActionTarget(params: SecurityHub.Types.CreateActionTargetRequest, callback?: (err: AWSError, data: SecurityHub.Types.CreateActionTargetResponse) => void): Request<SecurityHub.Types.CreateActionTargetResponse, AWSError>;
  /**
   * Creates a custom action target in Security Hub. You can use custom actions on findings and insights in Security Hub to trigger target actions in Amazon CloudWatch Events.
   */
  createActionTarget(callback?: (err: AWSError, data: SecurityHub.Types.CreateActionTargetResponse) => void): Request<SecurityHub.Types.CreateActionTargetResponse, AWSError>;
  /**
   * Creates a custom insight in Security Hub. An insight is a consolidation of findings that relate to a security issue that requires attention or remediation. Use the GroupByAttribute to group the related findings in the insight.
   */
  createInsight(params: SecurityHub.Types.CreateInsightRequest, callback?: (err: AWSError, data: SecurityHub.Types.CreateInsightResponse) => void): Request<SecurityHub.Types.CreateInsightResponse, AWSError>;
  /**
   * Creates a custom insight in Security Hub. An insight is a consolidation of findings that relate to a security issue that requires attention or remediation. Use the GroupByAttribute to group the related findings in the insight.
   */
  createInsight(callback?: (err: AWSError, data: SecurityHub.Types.CreateInsightResponse) => void): Request<SecurityHub.Types.CreateInsightResponse, AWSError>;
  /**
   * Creates a member association in Security Hub between the specified accounts and the account used to make the request, which is the master account. To successfully create a member, you must use this action from an account that already has Security Hub enabled. You can use the EnableSecurityHub to enable Security Hub. After you use CreateMembers to create member account associations in Security Hub, you need to use the InviteMembers action, which invites the accounts to enable Security Hub and become member accounts in Security Hub. If the invitation is accepted by the account owner, the account becomes a member account in Security Hub, and a permission policy is added that permits the master account to view the findings generated in the member account. When Security Hub is enabled in the invited account, findings start being sent to both the member and master accounts. You can remove the association between the master and member accounts by using the DisassociateFromMasterAccount or DisassociateMembers operation.
   */
  createMembers(params: SecurityHub.Types.CreateMembersRequest, callback?: (err: AWSError, data: SecurityHub.Types.CreateMembersResponse) => void): Request<SecurityHub.Types.CreateMembersResponse, AWSError>;
  /**
   * Creates a member association in Security Hub between the specified accounts and the account used to make the request, which is the master account. To successfully create a member, you must use this action from an account that already has Security Hub enabled. You can use the EnableSecurityHub to enable Security Hub. After you use CreateMembers to create member account associations in Security Hub, you need to use the InviteMembers action, which invites the accounts to enable Security Hub and become member accounts in Security Hub. If the invitation is accepted by the account owner, the account becomes a member account in Security Hub, and a permission policy is added that permits the master account to view the findings generated in the member account. When Security Hub is enabled in the invited account, findings start being sent to both the member and master accounts. You can remove the association between the master and member accounts by using the DisassociateFromMasterAccount or DisassociateMembers operation.
   */
  createMembers(callback?: (err: AWSError, data: SecurityHub.Types.CreateMembersResponse) => void): Request<SecurityHub.Types.CreateMembersResponse, AWSError>;
  /**
   * Declines invitations to become a member account.
   */
  declineInvitations(params: SecurityHub.Types.DeclineInvitationsRequest, callback?: (err: AWSError, data: SecurityHub.Types.DeclineInvitationsResponse) => void): Request<SecurityHub.Types.DeclineInvitationsResponse, AWSError>;
  /**
   * Declines invitations to become a member account.
   */
  declineInvitations(callback?: (err: AWSError, data: SecurityHub.Types.DeclineInvitationsResponse) => void): Request<SecurityHub.Types.DeclineInvitationsResponse, AWSError>;
  /**
   * Deletes a custom action target from Security Hub. Deleting a custom action target doesn't affect any findings or insights that were already sent to Amazon CloudWatch Events using the custom action.
   */
  deleteActionTarget(params: SecurityHub.Types.DeleteActionTargetRequest, callback?: (err: AWSError, data: SecurityHub.Types.DeleteActionTargetResponse) => void): Request<SecurityHub.Types.DeleteActionTargetResponse, AWSError>;
  /**
   * Deletes a custom action target from Security Hub. Deleting a custom action target doesn't affect any findings or insights that were already sent to Amazon CloudWatch Events using the custom action.
   */
  deleteActionTarget(callback?: (err: AWSError, data: SecurityHub.Types.DeleteActionTargetResponse) => void): Request<SecurityHub.Types.DeleteActionTargetResponse, AWSError>;
  /**
   * Deletes the insight specified by the InsightArn.
   */
  deleteInsight(params: SecurityHub.Types.DeleteInsightRequest, callback?: (err: AWSError, data: SecurityHub.Types.DeleteInsightResponse) => void): Request<SecurityHub.Types.DeleteInsightResponse, AWSError>;
  /**
   * Deletes the insight specified by the InsightArn.
   */
  deleteInsight(callback?: (err: AWSError, data: SecurityHub.Types.DeleteInsightResponse) => void): Request<SecurityHub.Types.DeleteInsightResponse, AWSError>;
  /**
   * Deletes invitations received by the AWS account to become a member account.
   */
  deleteInvitations(params: SecurityHub.Types.DeleteInvitationsRequest, callback?: (err: AWSError, data: SecurityHub.Types.DeleteInvitationsResponse) => void): Request<SecurityHub.Types.DeleteInvitationsResponse, AWSError>;
  /**
   * Deletes invitations received by the AWS account to become a member account.
   */
  deleteInvitations(callback?: (err: AWSError, data: SecurityHub.Types.DeleteInvitationsResponse) => void): Request<SecurityHub.Types.DeleteInvitationsResponse, AWSError>;
  /**
   * Deletes the specified member accounts from Security Hub.
   */
  deleteMembers(params: SecurityHub.Types.DeleteMembersRequest, callback?: (err: AWSError, data: SecurityHub.Types.DeleteMembersResponse) => void): Request<SecurityHub.Types.DeleteMembersResponse, AWSError>;
  /**
   * Deletes the specified member accounts from Security Hub.
   */
  deleteMembers(callback?: (err: AWSError, data: SecurityHub.Types.DeleteMembersResponse) => void): Request<SecurityHub.Types.DeleteMembersResponse, AWSError>;
  /**
   * Returns a list of the custom action targets in Security Hub in your account.
   */
  describeActionTargets(params: SecurityHub.Types.DescribeActionTargetsRequest, callback?: (err: AWSError, data: SecurityHub.Types.DescribeActionTargetsResponse) => void): Request<SecurityHub.Types.DescribeActionTargetsResponse, AWSError>;
  /**
   * Returns a list of the custom action targets in Security Hub in your account.
   */
  describeActionTargets(callback?: (err: AWSError, data: SecurityHub.Types.DescribeActionTargetsResponse) => void): Request<SecurityHub.Types.DescribeActionTargetsResponse, AWSError>;
  /**
   * Returns details about the Hub resource in your account, including the HubArn and the time when you enabled Security Hub.
   */
  describeHub(params: SecurityHub.Types.DescribeHubRequest, callback?: (err: AWSError, data: SecurityHub.Types.DescribeHubResponse) => void): Request<SecurityHub.Types.DescribeHubResponse, AWSError>;
  /**
   * Returns details about the Hub resource in your account, including the HubArn and the time when you enabled Security Hub.
   */
  describeHub(callback?: (err: AWSError, data: SecurityHub.Types.DescribeHubResponse) => void): Request<SecurityHub.Types.DescribeHubResponse, AWSError>;
  /**
   * Returns information about the products available that you can subscribe to and integrate with Security Hub to consolidate findings.
   */
  describeProducts(params: SecurityHub.Types.DescribeProductsRequest, callback?: (err: AWSError, data: SecurityHub.Types.DescribeProductsResponse) => void): Request<SecurityHub.Types.DescribeProductsResponse, AWSError>;
  /**
   * Returns information about the products available that you can subscribe to and integrate with Security Hub to consolidate findings.
   */
  describeProducts(callback?: (err: AWSError, data: SecurityHub.Types.DescribeProductsResponse) => void): Request<SecurityHub.Types.DescribeProductsResponse, AWSError>;
  /**
   * Disables the integration of the specified product with Security Hub. Findings from that product are no longer sent to Security Hub after the integration is disabled.
   */
  disableImportFindingsForProduct(params: SecurityHub.Types.DisableImportFindingsForProductRequest, callback?: (err: AWSError, data: SecurityHub.Types.DisableImportFindingsForProductResponse) => void): Request<SecurityHub.Types.DisableImportFindingsForProductResponse, AWSError>;
  /**
   * Disables the integration of the specified product with Security Hub. Findings from that product are no longer sent to Security Hub after the integration is disabled.
   */
  disableImportFindingsForProduct(callback?: (err: AWSError, data: SecurityHub.Types.DisableImportFindingsForProductResponse) => void): Request<SecurityHub.Types.DisableImportFindingsForProductResponse, AWSError>;
  /**
   * Disables Security Hub in your account only in the current Region. To disable Security Hub in all Regions, you must submit one request per Region where you have enabled Security Hub. When you disable Security Hub for a master account, it doesn't disable Security Hub for any associated member accounts. When you disable Security Hub, your existing findings and insights and any Security Hub configuration settings are deleted after 90 days and can't be recovered. Any standards that were enabled are disabled, and your master and member account associations are removed. If you want to save your existing findings, you must export them before you disable Security Hub.
   */
  disableSecurityHub(params: SecurityHub.Types.DisableSecurityHubRequest, callback?: (err: AWSError, data: SecurityHub.Types.DisableSecurityHubResponse) => void): Request<SecurityHub.Types.DisableSecurityHubResponse, AWSError>;
  /**
   * Disables Security Hub in your account only in the current Region. To disable Security Hub in all Regions, you must submit one request per Region where you have enabled Security Hub. When you disable Security Hub for a master account, it doesn't disable Security Hub for any associated member accounts. When you disable Security Hub, your existing findings and insights and any Security Hub configuration settings are deleted after 90 days and can't be recovered. Any standards that were enabled are disabled, and your master and member account associations are removed. If you want to save your existing findings, you must export them before you disable Security Hub.
   */
  disableSecurityHub(callback?: (err: AWSError, data: SecurityHub.Types.DisableSecurityHubResponse) => void): Request<SecurityHub.Types.DisableSecurityHubResponse, AWSError>;
  /**
   * Disassociates the current Security Hub member account from the associated master account.
   */
  disassociateFromMasterAccount(params: SecurityHub.Types.DisassociateFromMasterAccountRequest, callback?: (err: AWSError, data: SecurityHub.Types.DisassociateFromMasterAccountResponse) => void): Request<SecurityHub.Types.DisassociateFromMasterAccountResponse, AWSError>;
  /**
   * Disassociates the current Security Hub member account from the associated master account.
   */
  disassociateFromMasterAccount(callback?: (err: AWSError, data: SecurityHub.Types.DisassociateFromMasterAccountResponse) => void): Request<SecurityHub.Types.DisassociateFromMasterAccountResponse, AWSError>;
  /**
   * Disassociates the specified member accounts from the associated master account.
   */
  disassociateMembers(params: SecurityHub.Types.DisassociateMembersRequest, callback?: (err: AWSError, data: SecurityHub.Types.DisassociateMembersResponse) => void): Request<SecurityHub.Types.DisassociateMembersResponse, AWSError>;
  /**
   * Disassociates the specified member accounts from the associated master account.
   */
  disassociateMembers(callback?: (err: AWSError, data: SecurityHub.Types.DisassociateMembersResponse) => void): Request<SecurityHub.Types.DisassociateMembersResponse, AWSError>;
  /**
   * Enables the integration of a partner product with Security Hub. Integrated products send findings to Security Hub. When you enable a product integration, a permission policy that grants permission for the product to send findings to Security Hub is applied.
   */
  enableImportFindingsForProduct(params: SecurityHub.Types.EnableImportFindingsForProductRequest, callback?: (err: AWSError, data: SecurityHub.Types.EnableImportFindingsForProductResponse) => void): Request<SecurityHub.Types.EnableImportFindingsForProductResponse, AWSError>;
  /**
   * Enables the integration of a partner product with Security Hub. Integrated products send findings to Security Hub. When you enable a product integration, a permission policy that grants permission for the product to send findings to Security Hub is applied.
   */
  enableImportFindingsForProduct(callback?: (err: AWSError, data: SecurityHub.Types.EnableImportFindingsForProductResponse) => void): Request<SecurityHub.Types.EnableImportFindingsForProductResponse, AWSError>;
  /**
   * Enables Security Hub for your account in the current Region or the Region you specify in the request. When you enable Security Hub, you grant to Security Hub the permissions necessary to gather findings from AWS Config, Amazon GuardDuty, Amazon Inspector, and Amazon Macie. To learn more, see Setting Up AWS Security Hub.
   */
  enableSecurityHub(params: SecurityHub.Types.EnableSecurityHubRequest, callback?: (err: AWSError, data: SecurityHub.Types.EnableSecurityHubResponse) => void): Request<SecurityHub.Types.EnableSecurityHubResponse, AWSError>;
  /**
   * Enables Security Hub for your account in the current Region or the Region you specify in the request. When you enable Security Hub, you grant to Security Hub the permissions necessary to gather findings from AWS Config, Amazon GuardDuty, Amazon Inspector, and Amazon Macie. To learn more, see Setting Up AWS Security Hub.
   */
  enableSecurityHub(callback?: (err: AWSError, data: SecurityHub.Types.EnableSecurityHubResponse) => void): Request<SecurityHub.Types.EnableSecurityHubResponse, AWSError>;
  /**
   * Returns a list of the standards that are currently enabled.
   */
  getEnabledStandards(params: SecurityHub.Types.GetEnabledStandardsRequest, callback?: (err: AWSError, data: SecurityHub.Types.GetEnabledStandardsResponse) => void): Request<SecurityHub.Types.GetEnabledStandardsResponse, AWSError>;
  /**
   * Returns a list of the standards that are currently enabled.
   */
  getEnabledStandards(callback?: (err: AWSError, data: SecurityHub.Types.GetEnabledStandardsResponse) => void): Request<SecurityHub.Types.GetEnabledStandardsResponse, AWSError>;
  /**
   * Returns a list of findings that match the specified criteria.
   */
  getFindings(params: SecurityHub.Types.GetFindingsRequest, callback?: (err: AWSError, data: SecurityHub.Types.GetFindingsResponse) => void): Request<SecurityHub.Types.GetFindingsResponse, AWSError>;
  /**
   * Returns a list of findings that match the specified criteria.
   */
  getFindings(callback?: (err: AWSError, data: SecurityHub.Types.GetFindingsResponse) => void): Request<SecurityHub.Types.GetFindingsResponse, AWSError>;
  /**
   * Lists the results of the Security Hub insight that the insight ARN specifies.
   */
  getInsightResults(params: SecurityHub.Types.GetInsightResultsRequest, callback?: (err: AWSError, data: SecurityHub.Types.GetInsightResultsResponse) => void): Request<SecurityHub.Types.GetInsightResultsResponse, AWSError>;
  /**
   * Lists the results of the Security Hub insight that the insight ARN specifies.
   */
  getInsightResults(callback?: (err: AWSError, data: SecurityHub.Types.GetInsightResultsResponse) => void): Request<SecurityHub.Types.GetInsightResultsResponse, AWSError>;
  /**
   * Lists and describes insights that insight ARNs specify.
   */
  getInsights(params: SecurityHub.Types.GetInsightsRequest, callback?: (err: AWSError, data: SecurityHub.Types.GetInsightsResponse) => void): Request<SecurityHub.Types.GetInsightsResponse, AWSError>;
  /**
   * Lists and describes insights that insight ARNs specify.
   */
  getInsights(callback?: (err: AWSError, data: SecurityHub.Types.GetInsightsResponse) => void): Request<SecurityHub.Types.GetInsightsResponse, AWSError>;
  /**
   * Returns the count of all Security Hub membership invitations that were sent to the current member account, not including the currently accepted invitation. 
   */
  getInvitationsCount(params: SecurityHub.Types.GetInvitationsCountRequest, callback?: (err: AWSError, data: SecurityHub.Types.GetInvitationsCountResponse) => void): Request<SecurityHub.Types.GetInvitationsCountResponse, AWSError>;
  /**
   * Returns the count of all Security Hub membership invitations that were sent to the current member account, not including the currently accepted invitation. 
   */
  getInvitationsCount(callback?: (err: AWSError, data: SecurityHub.Types.GetInvitationsCountResponse) => void): Request<SecurityHub.Types.GetInvitationsCountResponse, AWSError>;
  /**
   * Provides the details for the Security Hub master account to the current member account. 
   */
  getMasterAccount(params: SecurityHub.Types.GetMasterAccountRequest, callback?: (err: AWSError, data: SecurityHub.Types.GetMasterAccountResponse) => void): Request<SecurityHub.Types.GetMasterAccountResponse, AWSError>;
  /**
   * Provides the details for the Security Hub master account to the current member account. 
   */
  getMasterAccount(callback?: (err: AWSError, data: SecurityHub.Types.GetMasterAccountResponse) => void): Request<SecurityHub.Types.GetMasterAccountResponse, AWSError>;
  /**
   * Returns the details on the Security Hub member accounts that the account IDs specify.
   */
  getMembers(params: SecurityHub.Types.GetMembersRequest, callback?: (err: AWSError, data: SecurityHub.Types.GetMembersResponse) => void): Request<SecurityHub.Types.GetMembersResponse, AWSError>;
  /**
   * Returns the details on the Security Hub member accounts that the account IDs specify.
   */
  getMembers(callback?: (err: AWSError, data: SecurityHub.Types.GetMembersResponse) => void): Request<SecurityHub.Types.GetMembersResponse, AWSError>;
  /**
   * Invites other AWS accounts to become member accounts for the Security Hub master account that the invitation is sent from. Before you can use this action to invite a member, you must first create the member account in Security Hub by using the CreateMembers action. When the account owner accepts the invitation to become a member account and enables Security Hub, the master account can view the findings generated from member account.
   */
  inviteMembers(params: SecurityHub.Types.InviteMembersRequest, callback?: (err: AWSError, data: SecurityHub.Types.InviteMembersResponse) => void): Request<SecurityHub.Types.InviteMembersResponse, AWSError>;
  /**
   * Invites other AWS accounts to become member accounts for the Security Hub master account that the invitation is sent from. Before you can use this action to invite a member, you must first create the member account in Security Hub by using the CreateMembers action. When the account owner accepts the invitation to become a member account and enables Security Hub, the master account can view the findings generated from member account.
   */
  inviteMembers(callback?: (err: AWSError, data: SecurityHub.Types.InviteMembersResponse) => void): Request<SecurityHub.Types.InviteMembersResponse, AWSError>;
  /**
   * Lists all findings-generating solutions (products) whose findings you have subscribed to receive in Security Hub.
   */
  listEnabledProductsForImport(params: SecurityHub.Types.ListEnabledProductsForImportRequest, callback?: (err: AWSError, data: SecurityHub.Types.ListEnabledProductsForImportResponse) => void): Request<SecurityHub.Types.ListEnabledProductsForImportResponse, AWSError>;
  /**
   * Lists all findings-generating solutions (products) whose findings you have subscribed to receive in Security Hub.
   */
  listEnabledProductsForImport(callback?: (err: AWSError, data: SecurityHub.Types.ListEnabledProductsForImportResponse) => void): Request<SecurityHub.Types.ListEnabledProductsForImportResponse, AWSError>;
  /**
   * Lists all Security Hub membership invitations that were sent to the current AWS account. 
   */
  listInvitations(params: SecurityHub.Types.ListInvitationsRequest, callback?: (err: AWSError, data: SecurityHub.Types.ListInvitationsResponse) => void): Request<SecurityHub.Types.ListInvitationsResponse, AWSError>;
  /**
   * Lists all Security Hub membership invitations that were sent to the current AWS account. 
   */
  listInvitations(callback?: (err: AWSError, data: SecurityHub.Types.ListInvitationsResponse) => void): Request<SecurityHub.Types.ListInvitationsResponse, AWSError>;
  /**
   * Lists details about all member accounts for the current Security Hub master account.
   */
  listMembers(params: SecurityHub.Types.ListMembersRequest, callback?: (err: AWSError, data: SecurityHub.Types.ListMembersResponse) => void): Request<SecurityHub.Types.ListMembersResponse, AWSError>;
  /**
   * Lists details about all member accounts for the current Security Hub master account.
   */
  listMembers(callback?: (err: AWSError, data: SecurityHub.Types.ListMembersResponse) => void): Request<SecurityHub.Types.ListMembersResponse, AWSError>;
  /**
   * Returns a list of tags associated with a resource.
   */
  listTagsForResource(params: SecurityHub.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: SecurityHub.Types.ListTagsForResourceResponse) => void): Request<SecurityHub.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Returns a list of tags associated with a resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: SecurityHub.Types.ListTagsForResourceResponse) => void): Request<SecurityHub.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Adds one or more tags to a resource.
   */
  tagResource(params: SecurityHub.Types.TagResourceRequest, callback?: (err: AWSError, data: SecurityHub.Types.TagResourceResponse) => void): Request<SecurityHub.Types.TagResourceResponse, AWSError>;
  /**
   * Adds one or more tags to a resource.
   */
  tagResource(callback?: (err: AWSError, data: SecurityHub.Types.TagResourceResponse) => void): Request<SecurityHub.Types.TagResourceResponse, AWSError>;
  /**
   * Removes one or more tags from a resource.
   */
  untagResource(params: SecurityHub.Types.UntagResourceRequest, callback?: (err: AWSError, data: SecurityHub.Types.UntagResourceResponse) => void): Request<SecurityHub.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes one or more tags from a resource.
   */
  untagResource(callback?: (err: AWSError, data: SecurityHub.Types.UntagResourceResponse) => void): Request<SecurityHub.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates the name and description of a custom action target in Security Hub.
   */
  updateActionTarget(params: SecurityHub.Types.UpdateActionTargetRequest, callback?: (err: AWSError, data: SecurityHub.Types.UpdateActionTargetResponse) => void): Request<SecurityHub.Types.UpdateActionTargetResponse, AWSError>;
  /**
   * Updates the name and description of a custom action target in Security Hub.
   */
  updateActionTarget(callback?: (err: AWSError, data: SecurityHub.Types.UpdateActionTargetResponse) => void): Request<SecurityHub.Types.UpdateActionTargetResponse, AWSError>;
  /**
   * Updates the Note and RecordState of the Security Hub-aggregated findings that the filter attributes specify. Any member account that can view the finding also sees the update to the finding.
   */
  updateFindings(params: SecurityHub.Types.UpdateFindingsRequest, callback?: (err: AWSError, data: SecurityHub.Types.UpdateFindingsResponse) => void): Request<SecurityHub.Types.UpdateFindingsResponse, AWSError>;
  /**
   * Updates the Note and RecordState of the Security Hub-aggregated findings that the filter attributes specify. Any member account that can view the finding also sees the update to the finding.
   */
  updateFindings(callback?: (err: AWSError, data: SecurityHub.Types.UpdateFindingsResponse) => void): Request<SecurityHub.Types.UpdateFindingsResponse, AWSError>;
  /**
   * Updates the Security Hub insight that the insight ARN specifies.
   */
  updateInsight(params: SecurityHub.Types.UpdateInsightRequest, callback?: (err: AWSError, data: SecurityHub.Types.UpdateInsightResponse) => void): Request<SecurityHub.Types.UpdateInsightResponse, AWSError>;
  /**
   * Updates the Security Hub insight that the insight ARN specifies.
   */
  updateInsight(callback?: (err: AWSError, data: SecurityHub.Types.UpdateInsightResponse) => void): Request<SecurityHub.Types.UpdateInsightResponse, AWSError>;
}
declare namespace SecurityHub {
  export interface AcceptInvitationRequest {
    /**
     * The account ID of the Security Hub master account that sent the invitation.
     */
    MasterId: NonEmptyString;
    /**
     * The ID of the invitation sent from the Security Hub master account.
     */
    InvitationId: NonEmptyString;
  }
  export interface AcceptInvitationResponse {
  }
  export interface AccountDetails {
    /**
     * The ID of an AWS account.
     */
    AccountId?: AccountId;
    /**
     * The email of an AWS account.
     */
    Email?: NonEmptyString;
  }
  export type AccountDetailsList = AccountDetails[];
  export type AccountId = string;
  export type AccountIdList = NonEmptyString[];
  export interface ActionTarget {
    /**
     * The ARN for the target action.
     */
    ActionTargetArn: NonEmptyString;
    /**
     * The name of the action target.
     */
    Name: NonEmptyString;
    /**
     * The description of the target action.
     */
    Description: NonEmptyString;
  }
  export type ActionTargetList = ActionTarget[];
  export type ArnList = NonEmptyString[];
  export interface AwsEc2InstanceDetails {
    /**
     * The instance type of the instance. 
     */
    Type?: NonEmptyString;
    /**
     * The Amazon Machine Image (AMI) ID of the instance.
     */
    ImageId?: NonEmptyString;
    /**
     * The IPv4 addresses associated with the instance.
     */
    IpV4Addresses?: StringList;
    /**
     * The IPv6 addresses associated with the instance.
     */
    IpV6Addresses?: StringList;
    /**
     * The key name associated with the instance.
     */
    KeyName?: NonEmptyString;
    /**
     * The IAM profile ARN of the instance.
     */
    IamInstanceProfileArn?: NonEmptyString;
    /**
     * The identifier of the VPC that the instance was launched in.
     */
    VpcId?: NonEmptyString;
    /**
     * The identifier of the subnet that the instance was launched in.
     */
    SubnetId?: NonEmptyString;
    /**
     * The date/time the instance was launched.
     */
    LaunchedAt?: NonEmptyString;
  }
  export interface AwsIamAccessKeyDetails {
    /**
     * The user associated with the IAM access key related to a finding.
     */
    UserName?: NonEmptyString;
    /**
     * The status of the IAM access key related to a finding.
     */
    Status?: AwsIamAccessKeyStatus;
    /**
     * The creation date/time of the IAM access key related to a finding.
     */
    CreatedAt?: NonEmptyString;
  }
  export type AwsIamAccessKeyStatus = "Active"|"Inactive"|string;
  export interface AwsS3BucketDetails {
    /**
     * The canonical user ID of the owner of the S3 bucket.
     */
    OwnerId?: NonEmptyString;
    /**
     * The display name of the owner of the S3 bucket.
     */
    OwnerName?: NonEmptyString;
  }
  export interface AwsSecurityFinding {
    /**
     * The schema version that a finding is formatted for.
     */
    SchemaVersion: NonEmptyString;
    /**
     * The security findings provider-specific identifier for a finding.
     */
    Id: NonEmptyString;
    /**
     * The ARN generated by Security Hub that uniquely identifies a third-party company (security-findings provider) after this provider's product (solution that generates findings) is registered with Security Hub. 
     */
    ProductArn: NonEmptyString;
    /**
     * The identifier for the solution-specific component (a discrete unit of logic) that generated a finding. In various security-findings providers' solutions, this generator can be called a rule, a check, a detector, a plug-in, etc. 
     */
    GeneratorId: NonEmptyString;
    /**
     * The AWS account ID that a finding is generated in.
     */
    AwsAccountId: NonEmptyString;
    /**
     * One or more finding types in the format of namespace/category/classifier that classify a finding. Valid namespace values are: Software and Configuration Checks | TTPs | Effects | Unusual Behaviors | Sensitive Data Identifications
     */
    Types: TypeList;
    /**
     * An ISO8601-formatted timestamp that indicates when the security-findings provider first observed the potential security issue that a finding captured.
     */
    FirstObservedAt?: NonEmptyString;
    /**
     * An ISO8601-formatted timestamp that indicates when the security-findings provider most recently observed the potential security issue that a finding captured.
     */
    LastObservedAt?: NonEmptyString;
    /**
     * An ISO8601-formatted timestamp that indicates when the security-findings provider created the potential security issue that a finding captured.
     */
    CreatedAt: NonEmptyString;
    /**
     * An ISO8601-formatted timestamp that indicates when the security-findings provider last updated the finding record. 
     */
    UpdatedAt: NonEmptyString;
    /**
     * A finding's severity.
     */
    Severity: Severity;
    /**
     * A finding's confidence. Confidence is defined as the likelihood that a finding accurately identifies the behavior or issue that it was intended to identify. Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent confidence and 100 means 100 percent confidence.
     */
    Confidence?: Integer;
    /**
     * The level of importance assigned to the resources associated with the finding. A score of 0 means that the underlying resources have no criticality, and a score of 100 is reserved for the most critical resources.
     */
    Criticality?: Integer;
    /**
     * A finding's title.  In this release, Title is a required property. 
     */
    Title: NonEmptyString;
    /**
     * A finding's description.  In this release, Description is a required property. 
     */
    Description: NonEmptyString;
    /**
     * A data type that describes the remediation options for a finding.
     */
    Remediation?: Remediation;
    /**
     * A URL that links to a page about the current finding in the security-findings provider's solution.
     */
    SourceUrl?: NonEmptyString;
    /**
     * A data type where security-findings providers can include additional solution-specific details that aren't part of the defined AwsSecurityFinding format.
     */
    ProductFields?: FieldMap;
    /**
     * A list of name/value string pairs associated with the finding. These are custom, user-defined fields added to a finding. 
     */
    UserDefinedFields?: FieldMap;
    /**
     * A list of malware related to a finding.
     */
    Malware?: MalwareList;
    /**
     * The details of network-related information about a finding.
     */
    Network?: Network;
    /**
     * The details of process-related information about a finding.
     */
    Process?: ProcessDetails;
    /**
     * Threat intel details related to a finding.
     */
    ThreatIntelIndicators?: ThreatIntelIndicatorList;
    /**
     * A set of resource data types that describe the resources that the finding refers to.
     */
    Resources: ResourceList;
    /**
     * This data type is exclusive to findings that are generated as the result of a check run against a specific rule in a supported standard (for example, CIS AWS Foundations). Contains compliance-related finding details.
     */
    Compliance?: Compliance;
    /**
     * Indicates the veracity of a finding. 
     */
    VerificationState?: VerificationState;
    /**
     * The workflow state of a finding. 
     */
    WorkflowState?: WorkflowState;
    /**
     * The record state of a finding.
     */
    RecordState?: RecordState;
    /**
     * A list of related findings.
     */
    RelatedFindings?: RelatedFindingList;
    /**
     * A user-defined note added to a finding.
     */
    Note?: Note;
  }
  export interface AwsSecurityFindingFilters {
    /**
     * The ARN generated by Security Hub that uniquely identifies a third-party company (security findings provider) after this provider's product (solution that generates findings) is registered with Security Hub.
     */
    ProductArn?: StringFilterList;
    /**
     * The AWS account ID that a finding is generated in.
     */
    AwsAccountId?: StringFilterList;
    /**
     * The security findings provider-specific identifier for a finding.
     */
    Id?: StringFilterList;
    /**
     * The identifier for the solution-specific component (a discrete unit of logic) that generated a finding. In various security-findings providers' solutions, this generator can be called a rule, a check, a detector, a plug-in, etc.
     */
    GeneratorId?: StringFilterList;
    /**
     * A finding type in the format of namespace/category/classifier that classifies a finding.
     */
    Type?: StringFilterList;
    /**
     * An ISO8601-formatted timestamp that indicates when the security-findings provider first observed the potential security issue that a finding captured.
     */
    FirstObservedAt?: DateFilterList;
    /**
     * An ISO8601-formatted timestamp that indicates when the security-findings provider most recently observed the potential security issue that a finding captured.
     */
    LastObservedAt?: DateFilterList;
    /**
     * An ISO8601-formatted timestamp that indicates when the security-findings provider captured the potential security issue that a finding captured.
     */
    CreatedAt?: DateFilterList;
    /**
     * An ISO8601-formatted timestamp that indicates when the security-findings provider last updated the finding record. 
     */
    UpdatedAt?: DateFilterList;
    /**
     * The native severity as defined by the security-findings provider's solution that generated the finding.
     */
    SeverityProduct?: NumberFilterList;
    /**
     * The normalized severity of a finding.
     */
    SeverityNormalized?: NumberFilterList;
    /**
     * The label of a finding's severity.
     */
    SeverityLabel?: StringFilterList;
    /**
     * A finding's confidence. Confidence is defined as the likelihood that a finding accurately identifies the behavior or issue that it was intended to identify. Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent confidence and 100 means 100 percent confidence.
     */
    Confidence?: NumberFilterList;
    /**
     * The level of importance assigned to the resources associated with the finding. A score of 0 means that the underlying resources have no criticality, and a score of 100 is reserved for the most critical resources.
     */
    Criticality?: NumberFilterList;
    /**
     * A finding's title.
     */
    Title?: StringFilterList;
    /**
     * A finding's description.
     */
    Description?: StringFilterList;
    /**
     * The recommendation of what to do about the issue described in a finding.
     */
    RecommendationText?: StringFilterList;
    /**
     * A URL that links to a page about the current finding in the security-findings provider's solution.
     */
    SourceUrl?: StringFilterList;
    /**
     * A data type where security-findings providers can include additional solution-specific details that aren't part of the defined AwsSecurityFinding format.
     */
    ProductFields?: MapFilterList;
    /**
     * The name of the solution (product) that generates findings.
     */
    ProductName?: StringFilterList;
    /**
     * The name of the findings provider (company) that owns the solution (product) that generates findings.
     */
    CompanyName?: StringFilterList;
    /**
     * A list of name/value string pairs associated with the finding. These are custom, user-defined fields added to a finding. 
     */
    UserDefinedFields?: MapFilterList;
    /**
     * The name of the malware that was observed.
     */
    MalwareName?: StringFilterList;
    /**
     * The type of the malware that was observed.
     */
    MalwareType?: StringFilterList;
    /**
     * The filesystem path of the malware that was observed.
     */
    MalwarePath?: StringFilterList;
    /**
     * The state of the malware that was observed.
     */
    MalwareState?: StringFilterList;
    /**
     * Indicates the direction of network traffic associated with a finding.
     */
    NetworkDirection?: StringFilterList;
    /**
     * The protocol of network-related information about a finding.
     */
    NetworkProtocol?: StringFilterList;
    /**
     * The source IPv4 address of network-related information about a finding.
     */
    NetworkSourceIpV4?: IpFilterList;
    /**
     * The source IPv6 address of network-related information about a finding.
     */
    NetworkSourceIpV6?: IpFilterList;
    /**
     * The source port of network-related information about a finding.
     */
    NetworkSourcePort?: NumberFilterList;
    /**
     * The source domain of network-related information about a finding.
     */
    NetworkSourceDomain?: StringFilterList;
    /**
     * The source media access control (MAC) address of network-related information about a finding.
     */
    NetworkSourceMac?: StringFilterList;
    /**
     * The destination IPv4 address of network-related information about a finding.
     */
    NetworkDestinationIpV4?: IpFilterList;
    /**
     * The destination IPv6 address of network-related information about a finding.
     */
    NetworkDestinationIpV6?: IpFilterList;
    /**
     * The destination port of network-related information about a finding.
     */
    NetworkDestinationPort?: NumberFilterList;
    /**
     * The destination domain of network-related information about a finding.
     */
    NetworkDestinationDomain?: StringFilterList;
    /**
     * The name of the process.
     */
    ProcessName?: StringFilterList;
    /**
     * The path to the process executable.
     */
    ProcessPath?: StringFilterList;
    /**
     * The process ID.
     */
    ProcessPid?: NumberFilterList;
    /**
     * The parent process ID.
     */
    ProcessParentPid?: NumberFilterList;
    /**
     * The date/time that the process was launched.
     */
    ProcessLaunchedAt?: DateFilterList;
    /**
     * The date/time that the process was terminated.
     */
    ProcessTerminatedAt?: DateFilterList;
    /**
     * The type of a threat intel indicator.
     */
    ThreatIntelIndicatorType?: StringFilterList;
    /**
     * The value of a threat intel indicator.
     */
    ThreatIntelIndicatorValue?: StringFilterList;
    /**
     * The category of a threat intel indicator.
     */
    ThreatIntelIndicatorCategory?: StringFilterList;
    /**
     * The date/time of the last observation of a threat intel indicator.
     */
    ThreatIntelIndicatorLastObservedAt?: DateFilterList;
    /**
     * The source of the threat intel.
     */
    ThreatIntelIndicatorSource?: StringFilterList;
    /**
     * The URL for more details from the source of the threat intel.
     */
    ThreatIntelIndicatorSourceUrl?: StringFilterList;
    /**
     * Specifies the type of the resource that details are provided for.
     */
    ResourceType?: StringFilterList;
    /**
     * The canonical identifier for the given resource type.
     */
    ResourceId?: StringFilterList;
    /**
     * The canonical AWS partition name that the Region is assigned to.
     */
    ResourcePartition?: StringFilterList;
    /**
     * The canonical AWS external Region name where this resource is located.
     */
    ResourceRegion?: StringFilterList;
    /**
     * A list of AWS tags associated with a resource at the time the finding was processed.
     */
    ResourceTags?: MapFilterList;
    /**
     * The instance type of the instance.
     */
    ResourceAwsEc2InstanceType?: StringFilterList;
    /**
     * The Amazon Machine Image (AMI) ID of the instance.
     */
    ResourceAwsEc2InstanceImageId?: StringFilterList;
    /**
     * The IPv4 addresses associated with the instance.
     */
    ResourceAwsEc2InstanceIpV4Addresses?: IpFilterList;
    /**
     * The IPv6 addresses associated with the instance.
     */
    ResourceAwsEc2InstanceIpV6Addresses?: IpFilterList;
    /**
     * The key name associated with the instance.
     */
    ResourceAwsEc2InstanceKeyName?: StringFilterList;
    /**
     * The IAM profile ARN of the instance.
     */
    ResourceAwsEc2InstanceIamInstanceProfileArn?: StringFilterList;
    /**
     * The identifier of the VPC that the instance was launched in.
     */
    ResourceAwsEc2InstanceVpcId?: StringFilterList;
    /**
     * The identifier of the subnet that the instance was launched in.
     */
    ResourceAwsEc2InstanceSubnetId?: StringFilterList;
    /**
     * The date/time the instance was launched.
     */
    ResourceAwsEc2InstanceLaunchedAt?: DateFilterList;
    /**
     * The canonical user ID of the owner of the S3 bucket.
     */
    ResourceAwsS3BucketOwnerId?: StringFilterList;
    /**
     * The display name of the owner of the S3 bucket.
     */
    ResourceAwsS3BucketOwnerName?: StringFilterList;
    /**
     * The user associated with the IAM access key related to a finding.
     */
    ResourceAwsIamAccessKeyUserName?: StringFilterList;
    /**
     * The status of the IAM access key related to a finding.
     */
    ResourceAwsIamAccessKeyStatus?: StringFilterList;
    /**
     * The creation date/time of the IAM access key related to a finding.
     */
    ResourceAwsIamAccessKeyCreatedAt?: DateFilterList;
    /**
     * The name of the container related to a finding.
     */
    ResourceContainerName?: StringFilterList;
    /**
     * The identifier of the image related to a finding.
     */
    ResourceContainerImageId?: StringFilterList;
    /**
     * The name of the image related to a finding.
     */
    ResourceContainerImageName?: StringFilterList;
    /**
     * The date/time that the container was started.
     */
    ResourceContainerLaunchedAt?: DateFilterList;
    /**
     * The details of a resource that doesn't have a specific subfield for the resource type defined.
     */
    ResourceDetailsOther?: MapFilterList;
    /**
     * Exclusive to findings that are generated as the result of a check run against a specific rule in a supported standard (for example, CIS AWS Foundations). Contains compliance-related finding details.
     */
    ComplianceStatus?: StringFilterList;
    /**
     * The veracity of a finding.
     */
    VerificationState?: StringFilterList;
    /**
     * The workflow state of a finding.
     */
    WorkflowState?: StringFilterList;
    /**
     * The updated record state for the finding.
     */
    RecordState?: StringFilterList;
    /**
     * The ARN of the solution that generated a related finding.
     */
    RelatedFindingsProductArn?: StringFilterList;
    /**
     * The solution-generated identifier for a related finding.
     */
    RelatedFindingsId?: StringFilterList;
    /**
     * The text of a note.
     */
    NoteText?: StringFilterList;
    /**
     * The timestamp of when the note was updated.
     */
    NoteUpdatedAt?: DateFilterList;
    /**
     * The principal that created a note.
     */
    NoteUpdatedBy?: StringFilterList;
    /**
     * A keyword for a finding.
     */
    Keyword?: KeywordFilterList;
  }
  export type AwsSecurityFindingList = AwsSecurityFinding[];
  export interface BatchDisableStandardsRequest {
    /**
     * The ARNs of the standards subscriptions to disable.
     */
    StandardsSubscriptionArns: StandardsSubscriptionArns;
  }
  export interface BatchDisableStandardsResponse {
    /**
     * The details of the standards subscriptions that were disabled.
     */
    StandardsSubscriptions?: StandardsSubscriptions;
  }
  export interface BatchEnableStandardsRequest {
    /**
     * The list of standards compliance checks to enable.  In this release, Security Hub supports only the CIS AWS Foundations standard. The ARN for the standard is arn:aws:securityhub:::ruleset/cis-aws-foundations-benchmark/v/1.2.0. 
     */
    StandardsSubscriptionRequests: StandardsSubscriptionRequests;
  }
  export interface BatchEnableStandardsResponse {
    /**
     * The details of the standards subscriptions that were enabled.
     */
    StandardsSubscriptions?: StandardsSubscriptions;
  }
  export interface BatchImportFindingsRequest {
    /**
     * A list of findings to import. To successfully import a finding, it must follow the AWS Security Finding Format.
     */
    Findings: AwsSecurityFindingList;
  }
  export interface BatchImportFindingsResponse {
    /**
     * The number of findings that failed to import.
     */
    FailedCount: Integer;
    /**
     * The number of findings that were successfully imported.
     */
    SuccessCount: Integer;
    /**
     * The list of the findings that failed to import.
     */
    FailedFindings?: ImportFindingsErrorList;
  }
  export type Boolean = boolean;
  export type CategoryList = NonEmptyString[];
  export interface Compliance {
    /**
     * The result of a compliance check.
     */
    Status?: ComplianceStatus;
  }
  export type ComplianceStatus = "PASSED"|"WARNING"|"FAILED"|"NOT_AVAILABLE"|string;
  export interface ContainerDetails {
    /**
     * The name of the container related to a finding.
     */
    Name?: NonEmptyString;
    /**
     * The identifier of the image related to a finding.
     */
    ImageId?: NonEmptyString;
    /**
     * The name of the image related to a finding.
     */
    ImageName?: NonEmptyString;
    /**
     * The date and time when the container started.
     */
    LaunchedAt?: NonEmptyString;
  }
  export interface CreateActionTargetRequest {
    /**
     * The name of the custom action target.
     */
    Name: NonEmptyString;
    /**
     * The description for the custom action target.
     */
    Description: NonEmptyString;
    /**
     * The ID for the custom action target.
     */
    Id: NonEmptyString;
  }
  export interface CreateActionTargetResponse {
    /**
     * The ARN for the custom action target.
     */
    ActionTargetArn: NonEmptyString;
  }
  export interface CreateInsightRequest {
    /**
     * The name of the custom insight to create.
     */
    Name: NonEmptyString;
    /**
     * One or more attributes used to filter the findings included in the insight. Only findings that match the criteria defined in the filters are included in the insight.
     */
    Filters: AwsSecurityFindingFilters;
    /**
     * The attribute used as the aggregator to group related findings for the insight.
     */
    GroupByAttribute: NonEmptyString;
  }
  export interface CreateInsightResponse {
    /**
     * The ARN of the insight created.
     */
    InsightArn: NonEmptyString;
  }
  export interface CreateMembersRequest {
    /**
     * A list of account ID and email address pairs of the accounts to associate with the Security Hub master account.
     */
    AccountDetails?: AccountDetailsList;
  }
  export interface CreateMembersResponse {
    /**
     * A list of account ID and email address pairs of the AWS accounts that weren't processed.
     */
    UnprocessedAccounts?: ResultList;
  }
  export interface DateFilter {
    /**
     * A start date for the date filter.
     */
    Start?: NonEmptyString;
    /**
     * An end date for the date filter.
     */
    End?: NonEmptyString;
    /**
     * A date range for the date filter.
     */
    DateRange?: DateRange;
  }
  export type DateFilterList = DateFilter[];
  export interface DateRange {
    /**
     * A date range value for the date filter.
     */
    Value?: Integer;
    /**
     * A date range unit for the date filter.
     */
    Unit?: DateRangeUnit;
  }
  export type DateRangeUnit = "DAYS"|string;
  export interface DeclineInvitationsRequest {
    /**
     * A list of account IDs that specify the accounts that invitations to Security Hub are declined from.
     */
    AccountIds: AccountIdList;
  }
  export interface DeclineInvitationsResponse {
    /**
     * A list of account ID and email address pairs of the AWS accounts that weren't processed.
     */
    UnprocessedAccounts?: ResultList;
  }
  export interface DeleteActionTargetRequest {
    /**
     * The ARN of the custom action target to delete.
     */
    ActionTargetArn: NonEmptyString;
  }
  export interface DeleteActionTargetResponse {
    /**
     * The ARN of the custom action target that was deleted.
     */
    ActionTargetArn: NonEmptyString;
  }
  export interface DeleteInsightRequest {
    /**
     * The ARN of the insight to delete.
     */
    InsightArn: NonEmptyString;
  }
  export interface DeleteInsightResponse {
    /**
     * The ARN of the insight that was deleted.
     */
    InsightArn: NonEmptyString;
  }
  export interface DeleteInvitationsRequest {
    /**
     * A list of the account IDs that sent the invitations to delete.
     */
    AccountIds: AccountIdList;
  }
  export interface DeleteInvitationsResponse {
    /**
     * A list of account ID and email address pairs of the AWS accounts that invitations weren't deleted for.
     */
    UnprocessedAccounts?: ResultList;
  }
  export interface DeleteMembersRequest {
    /**
     * A list of account IDs of the member accounts to delete.
     */
    AccountIds?: AccountIdList;
  }
  export interface DeleteMembersResponse {
    /**
     * A list of account ID and email address pairs of the AWS accounts that weren't deleted.
     */
    UnprocessedAccounts?: ResultList;
  }
  export interface DescribeActionTargetsRequest {
    /**
     * A list of custom action target ARNs for the custom action targets to retrieve.
     */
    ActionTargetArns?: ArnList;
    /**
     * The token that is required for pagination.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return.
     */
    MaxResults?: MaxResults;
  }
  export interface DescribeActionTargetsResponse {
    /**
     * A list of ActionTarget objects. Each object includes the ActionTargetArn, Description, and Name of a custom action target available in Security Hub.
     */
    ActionTargets: ActionTargetList;
    /**
     * The token that is required for pagination.
     */
    NextToken?: NextToken;
  }
  export interface DescribeHubRequest {
    /**
     * The ARN of the Hub resource to retrieve.
     */
    HubArn?: NonEmptyString;
  }
  export interface DescribeHubResponse {
    /**
     * The ARN of the Hub resource retrieved.
     */
    HubArn?: NonEmptyString;
    /**
     * The date and time when Security Hub was enabled in the account.
     */
    SubscribedAt?: NonEmptyString;
  }
  export interface DescribeProductsRequest {
    /**
     * The token that is required for pagination.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return.
     */
    MaxResults?: MaxResults;
  }
  export interface DescribeProductsResponse {
    /**
     * A list of products, including details for each product.
     */
    Products: ProductsList;
    /**
     * The token that is required for pagination.
     */
    NextToken?: NextToken;
  }
  export interface DisableImportFindingsForProductRequest {
    /**
     * The ARN of the integrated product to disable the integration for.
     */
    ProductSubscriptionArn: NonEmptyString;
  }
  export interface DisableImportFindingsForProductResponse {
  }
  export interface DisableSecurityHubRequest {
  }
  export interface DisableSecurityHubResponse {
  }
  export interface DisassociateFromMasterAccountRequest {
  }
  export interface DisassociateFromMasterAccountResponse {
  }
  export interface DisassociateMembersRequest {
    /**
     * The account IDs of the member accounts to disassociate from the master account.
     */
    AccountIds?: AccountIdList;
  }
  export interface DisassociateMembersResponse {
  }
  export type Double = number;
  export interface EnableImportFindingsForProductRequest {
    /**
     * The ARN of the product to enable the integration for.
     */
    ProductArn: NonEmptyString;
  }
  export interface EnableImportFindingsForProductResponse {
    /**
     * The ARN of your subscription to the product to enable integrations for.
     */
    ProductSubscriptionArn?: NonEmptyString;
  }
  export interface EnableSecurityHubRequest {
    /**
     * The tags to add to the Hub resource when you enable Security Hub.
     */
    Tags?: TagMap;
  }
  export interface EnableSecurityHubResponse {
  }
  export type FieldMap = {[key: string]: NonEmptyString};
  export interface GetEnabledStandardsRequest {
    /**
     * A list of the standards subscription ARNs for the standards to retrieve.
     */
    StandardsSubscriptionArns?: StandardsSubscriptionArns;
    /**
     * Paginates results. On your first call to the GetEnabledStandards operation, set the value of this parameter to NULL. For subsequent calls to the operation, fill nextToken in the request with the value of nextToken from the previous response to continue listing data.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return in the response.
     */
    MaxResults?: MaxResults;
  }
  export interface GetEnabledStandardsResponse {
    /**
     * A list of StandardsSubscriptions objects that include information about the enabled standards.
     */
    StandardsSubscriptions?: StandardsSubscriptions;
    /**
     * The token that is required for pagination.
     */
    NextToken?: NextToken;
  }
  export interface GetFindingsRequest {
    /**
     * The findings attributes used to define a condition to filter the findings returned.
     */
    Filters?: AwsSecurityFindingFilters;
    /**
     * Findings attributes used to sort the list of findings returned.
     */
    SortCriteria?: SortCriteria;
    /**
     * Paginates results. On your first call to the GetFindings operation, set the value of this parameter to NULL. For subsequent calls to the operation, fill nextToken in the request with the value of nextToken from the previous response to continue listing data.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of findings to return.
     */
    MaxResults?: MaxResults;
  }
  export interface GetFindingsResponse {
    /**
     * The findings that matched the filters specified in the request.
     */
    Findings: AwsSecurityFindingList;
    /**
     * The token that is required for pagination.
     */
    NextToken?: NextToken;
  }
  export interface GetInsightResultsRequest {
    /**
     * The ARN of the insight whose results you want to see.
     */
    InsightArn: NonEmptyString;
  }
  export interface GetInsightResultsResponse {
    /**
     * The insight results returned by the operation.
     */
    InsightResults: InsightResults;
  }
  export interface GetInsightsRequest {
    /**
     * The ARNs of the insights that you want to describe.
     */
    InsightArns?: ArnList;
    /**
     * Paginates results. On your first call to the GetInsights operation, set the value of this parameter to NULL. For subsequent calls to the operation, fill nextToken in the request with the value of nextToken from the previous response to continue listing data.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of items that you want in the response.
     */
    MaxResults?: MaxResults;
  }
  export interface GetInsightsResponse {
    /**
     * The insights returned by the operation.
     */
    Insights: InsightList;
    /**
     * The token that is required for pagination.
     */
    NextToken?: NextToken;
  }
  export interface GetInvitationsCountRequest {
  }
  export interface GetInvitationsCountResponse {
    /**
     * The number of all membership invitations sent to this Security Hub member account, not including the currently accepted invitation. 
     */
    InvitationsCount?: Integer;
  }
  export interface GetMasterAccountRequest {
  }
  export interface GetMasterAccountResponse {
    /**
     * A list of details about the Security Hub master account for the current member account. 
     */
    Master?: Invitation;
  }
  export interface GetMembersRequest {
    /**
     * A list of account IDs for the Security Hub member accounts that you want to return the details for. 
     */
    AccountIds: AccountIdList;
  }
  export interface GetMembersResponse {
    /**
     * A list of details about the Security Hub member accounts.
     */
    Members?: MemberList;
    /**
     * A list of account ID and email address pairs of the AWS accounts that couldn't be processed.
     */
    UnprocessedAccounts?: ResultList;
  }
  export interface ImportFindingsError {
    /**
     * The ID of the error made during the BatchImportFindings operation.
     */
    Id: NonEmptyString;
    /**
     * The code of the error made during the BatchImportFindings operation.
     */
    ErrorCode: NonEmptyString;
    /**
     * The message of the error made during the BatchImportFindings operation.
     */
    ErrorMessage: NonEmptyString;
  }
  export type ImportFindingsErrorList = ImportFindingsError[];
  export interface Insight {
    /**
     * The ARN of a Security Hub insight.
     */
    InsightArn: NonEmptyString;
    /**
     * The name of a Security Hub insight.
     */
    Name: NonEmptyString;
    /**
     * One or more attributes used to filter the findings included in the insight. Only findings that match the criteria defined in the filters are included in the insight.
     */
    Filters: AwsSecurityFindingFilters;
    /**
     * The attribute that the insight's findings are grouped by. This attribute is used as a findings aggregator for the purposes of viewing and managing multiple related findings under a single operand.
     */
    GroupByAttribute: NonEmptyString;
  }
  export type InsightList = Insight[];
  export interface InsightResultValue {
    /**
     * The value of the attribute that the findings are grouped by for the insight whose results are returned by the GetInsightResults operation.
     */
    GroupByAttributeValue: NonEmptyString;
    /**
     * The number of findings returned for each GroupByAttributeValue.
     */
    Count: Integer;
  }
  export type InsightResultValueList = InsightResultValue[];
  export interface InsightResults {
    /**
     * The ARN of the insight whose results are returned by the GetInsightResults operation.
     */
    InsightArn: NonEmptyString;
    /**
     * The attribute that the findings are grouped by for the insight whose results are returned by the GetInsightResults operation.
     */
    GroupByAttribute: NonEmptyString;
    /**
     * The list of insight result values returned by the GetInsightResults operation.
     */
    ResultValues: InsightResultValueList;
  }
  export type Integer = number;
  export interface Invitation {
    /**
     * The account ID of the Security Hub master account that the invitation was sent from.
     */
    AccountId?: AccountId;
    /**
     * The ID of the invitation sent to the member account.
     */
    InvitationId?: NonEmptyString;
    /**
     * The timestamp of when the invitation was sent.
     */
    InvitedAt?: Timestamp;
    /**
     * The current status of the association between member and master accounts.
     */
    MemberStatus?: NonEmptyString;
  }
  export type InvitationList = Invitation[];
  export interface InviteMembersRequest {
    /**
     * A list of IDs of the AWS accounts that you want to invite to Security Hub as members. 
     */
    AccountIds?: AccountIdList;
  }
  export interface InviteMembersResponse {
    /**
     * A list of account ID and email address pairs of the AWS accounts that couldn't be processed. 
     */
    UnprocessedAccounts?: ResultList;
  }
  export interface IpFilter {
    /**
     * A finding's CIDR value.
     */
    Cidr?: NonEmptyString;
  }
  export type IpFilterList = IpFilter[];
  export interface KeywordFilter {
    /**
     * A value for the keyword.
     */
    Value?: NonEmptyString;
  }
  export type KeywordFilterList = KeywordFilter[];
  export interface ListEnabledProductsForImportRequest {
    /**
     * Paginates results. On your first call to the ListEnabledProductsForImport operation, set the value of this parameter to NULL. For subsequent calls to the operation, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of items that you want in the response.
     */
    MaxResults?: MaxResults;
  }
  export interface ListEnabledProductsForImportResponse {
    /**
     * A list of ARNs for the resources that represent your subscriptions to products. 
     */
    ProductSubscriptions?: ProductSubscriptionArnList;
    /**
     * The token that is required for pagination.
     */
    NextToken?: NextToken;
  }
  export interface ListInvitationsRequest {
    /**
     * The maximum number of items that you want in the response. 
     */
    MaxResults?: MaxResults;
    /**
     * Paginates results. On your first call to the ListInvitations operation, set the value of this parameter to NULL. For subsequent calls to the operation, fill nextToken in the request with the value of NextToken from the previous response to continue listing data. 
     */
    NextToken?: NextToken;
  }
  export interface ListInvitationsResponse {
    /**
     * The details of the invitations returned by the operation.
     */
    Invitations?: InvitationList;
    /**
     * The token that is required for pagination.
     */
    NextToken?: NonEmptyString;
  }
  export interface ListMembersRequest {
    /**
     * Specifies which member accounts the response includes based on their relationship status with the master account. The default value is TRUE. If onlyAssociated is set to TRUE, the response includes member accounts whose relationship status with the master is set to ENABLED or DISABLED. If onlyAssociated is set to FALSE, the response includes all existing member accounts. 
     */
    OnlyAssociated?: Boolean;
    /**
     * The maximum number of items that you want in the response. 
     */
    MaxResults?: MaxResults;
    /**
     * Paginates results. Set the value of this parameter to NULL on your first call to the ListMembers operation. For subsequent calls to the operation, fill nextToken in the request with the value of nextToken from the previous response to continue listing data. 
     */
    NextToken?: NextToken;
  }
  export interface ListMembersResponse {
    /**
     * Member details returned by the operation.
     */
    Members?: MemberList;
    /**
     * The token that is required for pagination.
     */
    NextToken?: NonEmptyString;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The ARN of the resource to retrieve tags for.
     */
    ResourceArn: ResourceArn;
  }
  export interface ListTagsForResourceResponse {
    /**
     * The tags associated with a resource.
     */
    Tags?: TagMap;
  }
  export interface Malware {
    /**
     * The name of the malware that was observed.
     */
    Name: NonEmptyString;
    /**
     * The type of the malware that was observed.
     */
    Type?: MalwareType;
    /**
     * The file system path of the malware that was observed.
     */
    Path?: NonEmptyString;
    /**
     * The state of the malware that was observed.
     */
    State?: MalwareState;
  }
  export type MalwareList = Malware[];
  export type MalwareState = "OBSERVED"|"REMOVAL_FAILED"|"REMOVED"|string;
  export type MalwareType = "ADWARE"|"BLENDED_THREAT"|"BOTNET_AGENT"|"COIN_MINER"|"EXPLOIT_KIT"|"KEYLOGGER"|"MACRO"|"POTENTIALLY_UNWANTED"|"SPYWARE"|"RANSOMWARE"|"REMOTE_ACCESS"|"ROOTKIT"|"TROJAN"|"VIRUS"|"WORM"|string;
  export interface MapFilter {
    /**
     * The key of the map filter.
     */
    Key?: NonEmptyString;
    /**
     * The value for the key in the map filter.
     */
    Value?: NonEmptyString;
    /**
     * The condition to apply to a key value when querying for findings with a map filter.
     */
    Comparison?: MapFilterComparison;
  }
  export type MapFilterComparison = "EQUALS"|string;
  export type MapFilterList = MapFilter[];
  export type MaxResults = number;
  export interface Member {
    /**
     * The AWS account ID of the member account.
     */
    AccountId?: AccountId;
    /**
     * The email address of the member account.
     */
    Email?: NonEmptyString;
    /**
     * The AWS account ID of the Security Hub master account associated with this member account.
     */
    MasterId?: NonEmptyString;
    /**
     * The status of the relationship between the member account and its master account. 
     */
    MemberStatus?: NonEmptyString;
    /**
     * A timestamp for the date and time when the invitation was sent to the member account.
     */
    InvitedAt?: Timestamp;
    /**
     * The timestamp for the date and time when the member account was updated.
     */
    UpdatedAt?: Timestamp;
  }
  export type MemberList = Member[];
  export interface Network {
    /**
     * The direction of network traffic associated with a finding.
     */
    Direction?: NetworkDirection;
    /**
     * The protocol of network-related information about a finding.
     */
    Protocol?: NonEmptyString;
    /**
     * The source IPv4 address of network-related information about a finding.
     */
    SourceIpV4?: NonEmptyString;
    /**
     * The source IPv6 address of network-related information about a finding.
     */
    SourceIpV6?: NonEmptyString;
    /**
     * The source port of network-related information about a finding.
     */
    SourcePort?: Integer;
    /**
     * The source domain of network-related information about a finding.
     */
    SourceDomain?: NonEmptyString;
    /**
     * The source media access control (MAC) address of network-related information about a finding.
     */
    SourceMac?: NonEmptyString;
    /**
     * The destination IPv4 address of network-related information about a finding.
     */
    DestinationIpV4?: NonEmptyString;
    /**
     * The destination IPv6 address of network-related information about a finding.
     */
    DestinationIpV6?: NonEmptyString;
    /**
     * The destination port of network-related information about a finding.
     */
    DestinationPort?: Integer;
    /**
     * The destination domain of network-related information about a finding.
     */
    DestinationDomain?: NonEmptyString;
  }
  export type NetworkDirection = "IN"|"OUT"|string;
  export type NextToken = string;
  export type NonEmptyString = string;
  export interface Note {
    /**
     * The text of a note.
     */
    Text: NonEmptyString;
    /**
     * The principal that created a note.
     */
    UpdatedBy: NonEmptyString;
    /**
     * The timestamp of when the note was updated.
     */
    UpdatedAt: NonEmptyString;
  }
  export interface NoteUpdate {
    /**
     * The updated note text.
     */
    Text: NonEmptyString;
    /**
     * The principal that updated the note.
     */
    UpdatedBy: NonEmptyString;
  }
  export interface NumberFilter {
    /**
     * The greater-than-equal condition to be applied to a single field when querying for findings. 
     */
    Gte?: Double;
    /**
     * The less-than-equal condition to be applied to a single field when querying for findings. 
     */
    Lte?: Double;
    /**
     * The equal-to condition to be applied to a single field when querying for findings.
     */
    Eq?: Double;
  }
  export type NumberFilterList = NumberFilter[];
  export type Partition = "aws"|"aws-cn"|"aws-us-gov"|string;
  export interface ProcessDetails {
    /**
     * The name of the process.
     */
    Name?: NonEmptyString;
    /**
     * The path to the process executable.
     */
    Path?: NonEmptyString;
    /**
     * The process ID.
     */
    Pid?: Integer;
    /**
     * The parent process ID.
     */
    ParentPid?: Integer;
    /**
     * The date/time that the process was launched.
     */
    LaunchedAt?: NonEmptyString;
    /**
     * The date and time when the process was terminated.
     */
    TerminatedAt?: NonEmptyString;
  }
  export interface Product {
    /**
     * The ARN assigned to the product.
     */
    ProductArn: NonEmptyString;
    /**
     * The name of the product.
     */
    ProductName?: NonEmptyString;
    /**
     * The name of the company that provides the product.
     */
    CompanyName?: NonEmptyString;
    /**
     * A description of the product.
     */
    Description?: NonEmptyString;
    /**
     * The categories assigned to the product.
     */
    Categories?: CategoryList;
    /**
     * The URL for the page that contains more information about the product.
     */
    MarketplaceUrl?: NonEmptyString;
    /**
     * The URL used to activate the product.
     */
    ActivationUrl?: NonEmptyString;
    /**
     * The resource policy associated with the product.
     */
    ProductSubscriptionResourcePolicy?: NonEmptyString;
  }
  export type ProductSubscriptionArnList = NonEmptyString[];
  export type ProductsList = Product[];
  export interface Recommendation {
    /**
     * Describes the recommended steps to take to remediate an issue identified in a finding.
     */
    Text?: NonEmptyString;
    /**
     * A URL to a page or site that contains information about how to remediate a finding.
     */
    Url?: NonEmptyString;
  }
  export type RecordState = "ACTIVE"|"ARCHIVED"|string;
  export interface RelatedFinding {
    /**
     * The ARN of the product that generated a related finding.
     */
    ProductArn: NonEmptyString;
    /**
     * The product-generated identifier for a related finding.
     */
    Id: NonEmptyString;
  }
  export type RelatedFindingList = RelatedFinding[];
  export interface Remediation {
    /**
     * A recommendation on the steps to take to remediate the issue identified by a finding.
     */
    Recommendation?: Recommendation;
  }
  export interface Resource {
    /**
     * The type of the resource that details are provided for.
     */
    Type: NonEmptyString;
    /**
     * The canonical identifier for the given resource type.
     */
    Id: NonEmptyString;
    /**
     * The canonical AWS partition name that the Region is assigned to.
     */
    Partition?: Partition;
    /**
     * The canonical AWS external Region name where this resource is located.
     */
    Region?: NonEmptyString;
    /**
     * A list of AWS tags associated with a resource at the time the finding was processed.
     */
    Tags?: FieldMap;
    /**
     * Additional details about the resource related to a finding.
     */
    Details?: ResourceDetails;
  }
  export type ResourceArn = string;
  export interface ResourceDetails {
    /**
     * Details about an Amazon EC2 instance related to a finding.
     */
    AwsEc2Instance?: AwsEc2InstanceDetails;
    /**
     * Details about an Amazon S3 Bucket related to a finding.
     */
    AwsS3Bucket?: AwsS3BucketDetails;
    /**
     * Details about an IAM access key related to a finding.
     */
    AwsIamAccessKey?: AwsIamAccessKeyDetails;
    /**
     * Details about a container resource related to a finding.
     */
    Container?: ContainerDetails;
    /**
     * Details about a resource that doesn't have a specific type defined.
     */
    Other?: FieldMap;
  }
  export type ResourceList = Resource[];
  export interface Result {
    /**
     * An AWS account ID of the account that wasn't be processed.
     */
    AccountId?: AccountId;
    /**
     * The reason that the account wasn't be processed.
     */
    ProcessingResult?: NonEmptyString;
  }
  export type ResultList = Result[];
  export interface Severity {
    /**
     * The native severity as defined by the AWS service or integrated partner product that generated the finding.
     */
    Product?: Double;
    /**
     * The normalized severity of a finding.
     */
    Normalized: Integer;
  }
  export type SortCriteria = SortCriterion[];
  export interface SortCriterion {
    /**
     * The finding attribute used to sort findings.
     */
    Field?: NonEmptyString;
    /**
     * The order used to sort findings.
     */
    SortOrder?: SortOrder;
  }
  export type SortOrder = "asc"|"desc"|string;
  export type StandardsInputParameterMap = {[key: string]: NonEmptyString};
  export type StandardsStatus = "PENDING"|"READY"|"FAILED"|"DELETING"|"INCOMPLETE"|string;
  export interface StandardsSubscription {
    /**
     * The ARN of a resource that represents your subscription to a supported standard.
     */
    StandardsSubscriptionArn: NonEmptyString;
    /**
     * The ARN of a standard. In this release, Security Hub supports only the CIS AWS Foundations standard, which uses the following ARN: arn:aws:securityhub:::ruleset/cis-aws-foundations-benchmark/v/1.2.0. 
     */
    StandardsArn: NonEmptyString;
    /**
     * A key-value pair of input for the standard.
     */
    StandardsInput: StandardsInputParameterMap;
    /**
     * The status of the standards subscription.
     */
    StandardsStatus: StandardsStatus;
  }
  export type StandardsSubscriptionArns = NonEmptyString[];
  export interface StandardsSubscriptionRequest {
    /**
     * The ARN of the standard that you want to enable.  In this release, Security Hub only supports the CIS AWS Foundations standard.  Its ARN is arn:aws:securityhub:::ruleset/cis-aws-foundations-benchmark/v/1.2.0. 
     */
    StandardsArn: NonEmptyString;
    /**
     * A key-value pair of input for the standard.
     */
    StandardsInput?: StandardsInputParameterMap;
  }
  export type StandardsSubscriptionRequests = StandardsSubscriptionRequest[];
  export type StandardsSubscriptions = StandardsSubscription[];
  export interface StringFilter {
    /**
     * The string filter value.
     */
    Value?: NonEmptyString;
    /**
     * The condition to be applied to a string value when querying for findings. 
     */
    Comparison?: StringFilterComparison;
  }
  export type StringFilterComparison = "EQUALS"|"PREFIX"|string;
  export type StringFilterList = StringFilter[];
  export type StringList = NonEmptyString[];
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagMap = {[key: string]: TagValue};
  export interface TagResourceRequest {
    /**
     * The ARN of the resource to apply the tags to.
     */
    ResourceArn: ResourceArn;
    /**
     * The tags to add to the resource.
     */
    Tags: TagMap;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export interface ThreatIntelIndicator {
    /**
     * The type of a threat intel indicator.
     */
    Type?: ThreatIntelIndicatorType;
    /**
     * The value of a threat intel indicator.
     */
    Value?: NonEmptyString;
    /**
     * The category of a threat intel indicator.
     */
    Category?: ThreatIntelIndicatorCategory;
    /**
     * The date and time when the most recent instance of a threat intel indicator was observed.
     */
    LastObservedAt?: NonEmptyString;
    /**
     * The source of the threat intel indicator.
     */
    Source?: NonEmptyString;
    /**
     * The URL to the page or site where you can get more information about the threat intel indicator.
     */
    SourceUrl?: NonEmptyString;
  }
  export type ThreatIntelIndicatorCategory = "BACKDOOR"|"CARD_STEALER"|"COMMAND_AND_CONTROL"|"DROP_SITE"|"EXPLOIT_SITE"|"KEYLOGGER"|string;
  export type ThreatIntelIndicatorList = ThreatIntelIndicator[];
  export type ThreatIntelIndicatorType = "DOMAIN"|"EMAIL_ADDRESS"|"HASH_MD5"|"HASH_SHA1"|"HASH_SHA256"|"HASH_SHA512"|"IPV4_ADDRESS"|"IPV6_ADDRESS"|"MUTEX"|"PROCESS"|"URL"|string;
  export type Timestamp = Date;
  export type TypeList = NonEmptyString[];
  export interface UntagResourceRequest {
    /**
     * The ARN of the resource to remove the tags from.
     */
    ResourceArn: ResourceArn;
    /**
     * The tag keys associated with the tags to remove from the resource.
     */
    TagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateActionTargetRequest {
    /**
     * The ARN of the custom action target to update.
     */
    ActionTargetArn: NonEmptyString;
    /**
     * The updated name of the custom action target.
     */
    Name?: NonEmptyString;
    /**
     * The updated description for the custom action target.
     */
    Description?: NonEmptyString;
  }
  export interface UpdateActionTargetResponse {
  }
  export interface UpdateFindingsRequest {
    /**
     * A collection of attributes that specify which findings you want to update.
     */
    Filters: AwsSecurityFindingFilters;
    /**
     * The updated note for the finding.
     */
    Note?: NoteUpdate;
    /**
     * The updated record state for the finding.
     */
    RecordState?: RecordState;
  }
  export interface UpdateFindingsResponse {
  }
  export interface UpdateInsightRequest {
    /**
     * The ARN of the insight that you want to update.
     */
    InsightArn: NonEmptyString;
    /**
     * The updated name for the insight.
     */
    Name?: NonEmptyString;
    /**
     * The updated filters that define this insight.
     */
    Filters?: AwsSecurityFindingFilters;
    /**
     * The updated GroupBy attribute that defines this insight.
     */
    GroupByAttribute?: NonEmptyString;
  }
  export interface UpdateInsightResponse {
  }
  export type VerificationState = "UNKNOWN"|"TRUE_POSITIVE"|"FALSE_POSITIVE"|"BENIGN_POSITIVE"|string;
  export type WorkflowState = "NEW"|"ASSIGNED"|"IN_PROGRESS"|"DEFERRED"|"RESOLVED"|string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-10-26"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the SecurityHub client.
   */
  export import Types = SecurityHub;
}
export = SecurityHub;
