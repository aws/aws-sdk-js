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
   * Disables the standards specified by the provided StandardsSubscriptionArns. For more information, see Security Standards section of the AWS Security Hub User Guide.
   */
  batchDisableStandards(params: SecurityHub.Types.BatchDisableStandardsRequest, callback?: (err: AWSError, data: SecurityHub.Types.BatchDisableStandardsResponse) => void): Request<SecurityHub.Types.BatchDisableStandardsResponse, AWSError>;
  /**
   * Disables the standards specified by the provided StandardsSubscriptionArns. For more information, see Security Standards section of the AWS Security Hub User Guide.
   */
  batchDisableStandards(callback?: (err: AWSError, data: SecurityHub.Types.BatchDisableStandardsResponse) => void): Request<SecurityHub.Types.BatchDisableStandardsResponse, AWSError>;
  /**
   * Enables the standards specified by the provided StandardsArn. To obtain the ARN for a standard, use the  DescribeStandards  operation. For more information, see the Security Standards section of the AWS Security Hub User Guide.
   */
  batchEnableStandards(params: SecurityHub.Types.BatchEnableStandardsRequest, callback?: (err: AWSError, data: SecurityHub.Types.BatchEnableStandardsResponse) => void): Request<SecurityHub.Types.BatchEnableStandardsResponse, AWSError>;
  /**
   * Enables the standards specified by the provided StandardsArn. To obtain the ARN for a standard, use the  DescribeStandards  operation. For more information, see the Security Standards section of the AWS Security Hub User Guide.
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
   * Creates a custom insight in Security Hub. An insight is a consolidation of findings that relate to a security issue that requires attention or remediation. To group the related findings in the insight, use the GroupByAttribute.
   */
  createInsight(params: SecurityHub.Types.CreateInsightRequest, callback?: (err: AWSError, data: SecurityHub.Types.CreateInsightResponse) => void): Request<SecurityHub.Types.CreateInsightResponse, AWSError>;
  /**
   * Creates a custom insight in Security Hub. An insight is a consolidation of findings that relate to a security issue that requires attention or remediation. To group the related findings in the insight, use the GroupByAttribute.
   */
  createInsight(callback?: (err: AWSError, data: SecurityHub.Types.CreateInsightResponse) => void): Request<SecurityHub.Types.CreateInsightResponse, AWSError>;
  /**
   * Creates a member association in Security Hub between the specified accounts and the account used to make the request, which is the master account. To successfully create a member, you must use this action from an account that already has Security Hub enabled. To enable Security Hub, you can use the  EnableSecurityHub  operation. After you use CreateMembers to create member account associations in Security Hub, you must use the  InviteMembers  operation to invite the accounts to enable Security Hub and become member accounts in Security Hub. If the account owner accepts the invitation, the account becomes a member account in Security Hub, and a permission policy is added that permits the master account to view the findings generated in the member account. When Security Hub is enabled in the invited account, findings start to be sent to both the member and master accounts. To remove the association between the master and member accounts, use the  DisassociateFromMasterAccount  or  DisassociateMembers  operation.
   */
  createMembers(params: SecurityHub.Types.CreateMembersRequest, callback?: (err: AWSError, data: SecurityHub.Types.CreateMembersResponse) => void): Request<SecurityHub.Types.CreateMembersResponse, AWSError>;
  /**
   * Creates a member association in Security Hub between the specified accounts and the account used to make the request, which is the master account. To successfully create a member, you must use this action from an account that already has Security Hub enabled. To enable Security Hub, you can use the  EnableSecurityHub  operation. After you use CreateMembers to create member account associations in Security Hub, you must use the  InviteMembers  operation to invite the accounts to enable Security Hub and become member accounts in Security Hub. If the account owner accepts the invitation, the account becomes a member account in Security Hub, and a permission policy is added that permits the master account to view the findings generated in the member account. When Security Hub is enabled in the invited account, findings start to be sent to both the member and master accounts. To remove the association between the master and member accounts, use the  DisassociateFromMasterAccount  or  DisassociateMembers  operation.
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
   * Deletes a custom action target from Security Hub. Deleting a custom action target does not affect any findings or insights that were already sent to Amazon CloudWatch Events using the custom action.
   */
  deleteActionTarget(params: SecurityHub.Types.DeleteActionTargetRequest, callback?: (err: AWSError, data: SecurityHub.Types.DeleteActionTargetResponse) => void): Request<SecurityHub.Types.DeleteActionTargetResponse, AWSError>;
  /**
   * Deletes a custom action target from Security Hub. Deleting a custom action target does not affect any findings or insights that were already sent to Amazon CloudWatch Events using the custom action.
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
   * Returns information about the available products that you can subscribe to and integrate with Security Hub in order to consolidate findings.
   */
  describeProducts(params: SecurityHub.Types.DescribeProductsRequest, callback?: (err: AWSError, data: SecurityHub.Types.DescribeProductsResponse) => void): Request<SecurityHub.Types.DescribeProductsResponse, AWSError>;
  /**
   * Returns information about the available products that you can subscribe to and integrate with Security Hub in order to consolidate findings.
   */
  describeProducts(callback?: (err: AWSError, data: SecurityHub.Types.DescribeProductsResponse) => void): Request<SecurityHub.Types.DescribeProductsResponse, AWSError>;
  /**
   * Returns a list of the available standards in Security Hub. For each standard, the results include the standard ARN, the name, and a description. 
   */
  describeStandards(params: SecurityHub.Types.DescribeStandardsRequest, callback?: (err: AWSError, data: SecurityHub.Types.DescribeStandardsResponse) => void): Request<SecurityHub.Types.DescribeStandardsResponse, AWSError>;
  /**
   * Returns a list of the available standards in Security Hub. For each standard, the results include the standard ARN, the name, and a description. 
   */
  describeStandards(callback?: (err: AWSError, data: SecurityHub.Types.DescribeStandardsResponse) => void): Request<SecurityHub.Types.DescribeStandardsResponse, AWSError>;
  /**
   * Returns a list of security standards controls. For each control, the results include information about whether it is currently enabled, the severity, and a link to remediation information.
   */
  describeStandardsControls(params: SecurityHub.Types.DescribeStandardsControlsRequest, callback?: (err: AWSError, data: SecurityHub.Types.DescribeStandardsControlsResponse) => void): Request<SecurityHub.Types.DescribeStandardsControlsResponse, AWSError>;
  /**
   * Returns a list of security standards controls. For each control, the results include information about whether it is currently enabled, the severity, and a link to remediation information.
   */
  describeStandardsControls(callback?: (err: AWSError, data: SecurityHub.Types.DescribeStandardsControlsResponse) => void): Request<SecurityHub.Types.DescribeStandardsControlsResponse, AWSError>;
  /**
   * Disables the integration of the specified product with Security Hub. After the integration is disabled, findings from that product are no longer sent to Security Hub.
   */
  disableImportFindingsForProduct(params: SecurityHub.Types.DisableImportFindingsForProductRequest, callback?: (err: AWSError, data: SecurityHub.Types.DisableImportFindingsForProductResponse) => void): Request<SecurityHub.Types.DisableImportFindingsForProductResponse, AWSError>;
  /**
   * Disables the integration of the specified product with Security Hub. After the integration is disabled, findings from that product are no longer sent to Security Hub.
   */
  disableImportFindingsForProduct(callback?: (err: AWSError, data: SecurityHub.Types.DisableImportFindingsForProductResponse) => void): Request<SecurityHub.Types.DisableImportFindingsForProductResponse, AWSError>;
  /**
   * Disables Security Hub in your account only in the current Region. To disable Security Hub in all Regions, you must submit one request per Region where you have enabled Security Hub. When you disable Security Hub for a master account, it doesn't disable Security Hub for any associated member accounts. When you disable Security Hub, your existing findings and insights and any Security Hub configuration settings are deleted after 90 days and cannot be recovered. Any standards that were enabled are disabled, and your master and member account associations are removed. If you want to save your existing findings, you must export them before you disable Security Hub.
   */
  disableSecurityHub(params: SecurityHub.Types.DisableSecurityHubRequest, callback?: (err: AWSError, data: SecurityHub.Types.DisableSecurityHubResponse) => void): Request<SecurityHub.Types.DisableSecurityHubResponse, AWSError>;
  /**
   * Disables Security Hub in your account only in the current Region. To disable Security Hub in all Regions, you must submit one request per Region where you have enabled Security Hub. When you disable Security Hub for a master account, it doesn't disable Security Hub for any associated member accounts. When you disable Security Hub, your existing findings and insights and any Security Hub configuration settings are deleted after 90 days and cannot be recovered. Any standards that were enabled are disabled, and your master and member account associations are removed. If you want to save your existing findings, you must export them before you disable Security Hub.
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
   * Enables Security Hub for your account in the current Region or the Region you specify in the request. When you enable Security Hub, you grant to Security Hub the permissions necessary to gather findings from AWS Config, Amazon GuardDuty, Amazon Inspector, and Amazon Macie. When you use the EnableSecurityHub operation to enable Security Hub, you also automatically enable the CIS AWS Foundations standard. You do not enable the Payment Card Industry Data Security Standard (PCI DSS) standard. To enable a standard, use the  BatchEnableStandards  operation. To disable a standard, use the  BatchDisableStandards  operation. To learn more, see Setting Up AWS Security Hub in the AWS Security Hub User Guide.
   */
  enableSecurityHub(params: SecurityHub.Types.EnableSecurityHubRequest, callback?: (err: AWSError, data: SecurityHub.Types.EnableSecurityHubResponse) => void): Request<SecurityHub.Types.EnableSecurityHubResponse, AWSError>;
  /**
   * Enables Security Hub for your account in the current Region or the Region you specify in the request. When you enable Security Hub, you grant to Security Hub the permissions necessary to gather findings from AWS Config, Amazon GuardDuty, Amazon Inspector, and Amazon Macie. When you use the EnableSecurityHub operation to enable Security Hub, you also automatically enable the CIS AWS Foundations standard. You do not enable the Payment Card Industry Data Security Standard (PCI DSS) standard. To enable a standard, use the  BatchEnableStandards  operation. To disable a standard, use the  BatchDisableStandards  operation. To learn more, see Setting Up AWS Security Hub in the AWS Security Hub User Guide.
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
   * Lists the results of the Security Hub insight specified by the insight ARN.
   */
  getInsightResults(params: SecurityHub.Types.GetInsightResultsRequest, callback?: (err: AWSError, data: SecurityHub.Types.GetInsightResultsResponse) => void): Request<SecurityHub.Types.GetInsightResultsResponse, AWSError>;
  /**
   * Lists the results of the Security Hub insight specified by the insight ARN.
   */
  getInsightResults(callback?: (err: AWSError, data: SecurityHub.Types.GetInsightResultsResponse) => void): Request<SecurityHub.Types.GetInsightResultsResponse, AWSError>;
  /**
   * Lists and describes insights for the specified insight ARNs.
   */
  getInsights(params: SecurityHub.Types.GetInsightsRequest, callback?: (err: AWSError, data: SecurityHub.Types.GetInsightsResponse) => void): Request<SecurityHub.Types.GetInsightsResponse, AWSError>;
  /**
   * Lists and describes insights for the specified insight ARNs.
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
   * Provides the details for the Security Hub master account for the current member account. 
   */
  getMasterAccount(params: SecurityHub.Types.GetMasterAccountRequest, callback?: (err: AWSError, data: SecurityHub.Types.GetMasterAccountResponse) => void): Request<SecurityHub.Types.GetMasterAccountResponse, AWSError>;
  /**
   * Provides the details for the Security Hub master account for the current member account. 
   */
  getMasterAccount(callback?: (err: AWSError, data: SecurityHub.Types.GetMasterAccountResponse) => void): Request<SecurityHub.Types.GetMasterAccountResponse, AWSError>;
  /**
   * Returns the details for the Security Hub member accounts for the specified account IDs.
   */
  getMembers(params: SecurityHub.Types.GetMembersRequest, callback?: (err: AWSError, data: SecurityHub.Types.GetMembersResponse) => void): Request<SecurityHub.Types.GetMembersResponse, AWSError>;
  /**
   * Returns the details for the Security Hub member accounts for the specified account IDs.
   */
  getMembers(callback?: (err: AWSError, data: SecurityHub.Types.GetMembersResponse) => void): Request<SecurityHub.Types.GetMembersResponse, AWSError>;
  /**
   * Invites other AWS accounts to become member accounts for the Security Hub master account that the invitation is sent from. Before you can use this action to invite a member, you must first use the  CreateMembers  action to create the member account in Security Hub. When the account owner accepts the invitation to become a member account and enables Security Hub, the master account can view the findings generated from the member account.
   */
  inviteMembers(params: SecurityHub.Types.InviteMembersRequest, callback?: (err: AWSError, data: SecurityHub.Types.InviteMembersResponse) => void): Request<SecurityHub.Types.InviteMembersResponse, AWSError>;
  /**
   * Invites other AWS accounts to become member accounts for the Security Hub master account that the invitation is sent from. Before you can use this action to invite a member, you must first use the  CreateMembers  action to create the member account in Security Hub. When the account owner accepts the invitation to become a member account and enables Security Hub, the master account can view the findings generated from the member account.
   */
  inviteMembers(callback?: (err: AWSError, data: SecurityHub.Types.InviteMembersResponse) => void): Request<SecurityHub.Types.InviteMembersResponse, AWSError>;
  /**
   * Lists all findings-generating solutions (products) that you are subscribed to receive findings from in Security Hub.
   */
  listEnabledProductsForImport(params: SecurityHub.Types.ListEnabledProductsForImportRequest, callback?: (err: AWSError, data: SecurityHub.Types.ListEnabledProductsForImportResponse) => void): Request<SecurityHub.Types.ListEnabledProductsForImportResponse, AWSError>;
  /**
   * Lists all findings-generating solutions (products) that you are subscribed to receive findings from in Security Hub.
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
   * Updates the Security Hub insight identified by the specified insight ARN.
   */
  updateInsight(params: SecurityHub.Types.UpdateInsightRequest, callback?: (err: AWSError, data: SecurityHub.Types.UpdateInsightResponse) => void): Request<SecurityHub.Types.UpdateInsightResponse, AWSError>;
  /**
   * Updates the Security Hub insight identified by the specified insight ARN.
   */
  updateInsight(callback?: (err: AWSError, data: SecurityHub.Types.UpdateInsightResponse) => void): Request<SecurityHub.Types.UpdateInsightResponse, AWSError>;
  /**
   * Used to control whether an individual security standard control is enabled or disabled.
   */
  updateStandardsControl(params: SecurityHub.Types.UpdateStandardsControlRequest, callback?: (err: AWSError, data: SecurityHub.Types.UpdateStandardsControlResponse) => void): Request<SecurityHub.Types.UpdateStandardsControlResponse, AWSError>;
  /**
   * Used to control whether an individual security standard control is enabled or disabled.
   */
  updateStandardsControl(callback?: (err: AWSError, data: SecurityHub.Types.UpdateStandardsControlResponse) => void): Request<SecurityHub.Types.UpdateStandardsControlResponse, AWSError>;
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
  export interface AvailabilityZone {
    /**
     * The name of the Availability Zone.
     */
    ZoneName?: NonEmptyString;
    /**
     * The ID of the subnet. You can specify one subnet per Availability Zone.
     */
    SubnetId?: NonEmptyString;
  }
  export type AvailabilityZones = AvailabilityZone[];
  export interface AwsCloudFrontDistributionDetails {
    /**
     * The domain name corresponding to the distribution.
     */
    DomainName?: NonEmptyString;
    /**
     * The entity tag is a hash of the object.
     */
    ETag?: NonEmptyString;
    /**
     * The date and time that the distribution was last modified.
     */
    LastModifiedTime?: NonEmptyString;
    /**
     * A complex type that controls whether access logs are written for the distribution.
     */
    Logging?: AwsCloudFrontDistributionLogging;
    /**
     * A complex type that contains information about origins for this distribution.
     */
    Origins?: AwsCloudFrontDistributionOrigins;
    /**
     * Indicates the current status of the distribution.
     */
    Status?: NonEmptyString;
    /**
     * A unique identifier that specifies the AWS WAF web ACL, if any, to associate with this distribution.
     */
    WebAclId?: NonEmptyString;
  }
  export interface AwsCloudFrontDistributionLogging {
    /**
     * The Amazon S3 bucket to store the access logs in.
     */
    Bucket?: NonEmptyString;
    /**
     * With this field, you can enable or disable the selected distribution.
     */
    Enabled?: Boolean;
    /**
     * Specifies whether you want CloudFront to include cookies in access logs.
     */
    IncludeCookies?: Boolean;
    /**
     * An optional string that you want CloudFront to use as a prefix to the access log filenames for this distribution.
     */
    Prefix?: NonEmptyString;
  }
  export interface AwsCloudFrontDistributionOriginItem {
    /**
     * Amazon S3 origins: The DNS name of the Amazon S3 bucket from which you want CloudFront to get objects for this origin.
     */
    DomainName?: NonEmptyString;
    /**
     * A unique identifier for the origin or origin group.
     */
    Id?: NonEmptyString;
    /**
     * An optional element that causes CloudFront to request your content from a directory in your Amazon S3 bucket or your custom origin.
     */
    OriginPath?: NonEmptyString;
  }
  export type AwsCloudFrontDistributionOriginItemList = AwsCloudFrontDistributionOriginItem[];
  export interface AwsCloudFrontDistributionOrigins {
    /**
     * A complex type that contains origins or origin groups for this distribution.
     */
    Items?: AwsCloudFrontDistributionOriginItemList;
  }
  export interface AwsCodeBuildProjectDetails {
    /**
     * The AWS Key Management Service (AWS KMS) customer master key (CMK) used to encrypt the build output artifacts. You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK alias (using the format alias/alias-name). 
     */
    EncryptionKey?: NonEmptyString;
    /**
     * Information about the build environment for this build project.
     */
    Environment?: AwsCodeBuildProjectEnvironment;
    /**
     * The name of the build project.
     */
    Name?: NonEmptyString;
    /**
     * Information about the build input source code for this build project.
     */
    Source?: AwsCodeBuildProjectSource;
    /**
     * The ARN of the IAM role that enables AWS CodeBuild to interact with dependent AWS services on behalf of the AWS account.
     */
    ServiceRole?: NonEmptyString;
    /**
     * Information about the VPC configuration that AWS CodeBuild accesses.
     */
    VpcConfig?: AwsCodeBuildProjectVpcConfig;
  }
  export interface AwsCodeBuildProjectEnvironment {
    /**
     * The certificate to use with this build project.
     */
    Certificate?: NonEmptyString;
    /**
     * The type of credentials AWS CodeBuild uses to pull images in your build. Valid values:    CODEBUILD specifies that AWS CodeBuild uses its own credentials. This requires that you modify your ECR repository policy to trust the AWS CodeBuild service principal.    SERVICE_ROLE specifies that AWS CodeBuild uses your build project's service role.   When you use a cross-account or private registry image, you must use SERVICE_ROLE credentials. When you use an AWS CodeBuild curated image, you must use CODEBUILD credentials.
     */
    ImagePullCredentialsType?: NonEmptyString;
    /**
     * The credentials for access to a private registry.
     */
    RegistryCredential?: AwsCodeBuildProjectEnvironmentRegistryCredential;
    /**
     * The type of build environment to use for related builds. The environment type ARM_CONTAINER is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), Europe (Ireland), Asia Pacific (Mumbai), Asia Pacific (Tokyo), Asia Pacific (Sydney), and Europe (Frankfurt). The environment type LINUX_CONTAINER with compute type build.general1.2xlarge is available only in regions US East (N. Virginia), US East (N. Virginia), US West (Oregon), Canada (Central), Europe (Ireland), Europe (London), Europe (Frankfurt), Asia Pacific (Tokyo), Asia Pacific (Seoul), Asia Pacific (Singapore), Asia Pacific (Sydney), China (Beijing), and China (Ningxia). The environment type LINUX_GPU_CONTAINER is available only in regions US East (N. Virginia), US East (N. Virginia), US West (Oregon), Canada (Central), Europe (Ireland), Europe (London), Europe (Frankfurt), Asia Pacific (Tokyo), Asia Pacific (Seoul), Asia Pacific (Singapore), Asia Pacific (Sydney) , China (Beijing), and China (Ningxia). Valid values: WINDOWS_CONTAINER | LINUX_CONTAINER | LINUX_GPU_CONTAINER | ARM_CONTAINER 
     */
    Type?: NonEmptyString;
  }
  export interface AwsCodeBuildProjectEnvironmentRegistryCredential {
    /**
     * The Amazon Resource Name (ARN) or name of credentials created using AWS Secrets Manager.  The credential can use the name of the credentials only if they exist in your current AWS Region.  
     */
    Credential?: NonEmptyString;
    /**
     * The service that created the credentials to access a private Docker registry. The valid value, SECRETS_MANAGER, is for AWS Secrets Manager.
     */
    CredentialProvider?: NonEmptyString;
  }
  export interface AwsCodeBuildProjectSource {
    /**
     * The type of repository that contains the source code to be built. Valid values are:    BITBUCKET - The source code is in a Bitbucket repository.    CODECOMMIT - The source code is in an AWS CodeCommit repository.    CODEPIPELINE - The source code settings are specified in the source action of a pipeline in AWS CodePipeline.    GITHUB - The source code is in a GitHub repository.    GITHUB_ENTERPRISE - The source code is in a GitHub Enterprise repository.    NO_SOURCE - The project does not have input source code.    S3 - The source code is in an S3 input bucket.   
     */
    Type?: NonEmptyString;
    /**
     * Information about the location of the source code to be built. Valid values include:   For source code settings that are specified in the source action of a pipeline in AWS CodePipeline, location should not be specified. If it is specified, AWS CodePipeline ignores it. This is because AWS CodePipeline uses the settings in a pipeline's source action instead of this value.   For source code in an AWS CodeCommit repository, the HTTPS clone URL to the repository that contains the source code and the buildspec file (for example, https://git-codecommit.region-ID.amazonaws.com/v1/repos/repo-name ).   For source code in an S3 input bucket, one of the following.   The path to the ZIP file that contains the source code (for example, bucket-name/path/to/object-name.zip).    The path to the folder that contains the source code (for example, bucket-name/path/to/source-code/folder/).     For source code in a GitHub repository, the HTTPS clone URL to the repository that contains the source and the buildspec file.   For source code in a Bitbucket repository, the HTTPS clone URL to the repository that contains the source and the buildspec file.   
     */
    Location?: NonEmptyString;
    /**
     * Information about the Git clone depth for the build project.
     */
    GitCloneDepth?: Integer;
    /**
     * Whether to ignore SSL warnings while connecting to the project source code.
     */
    InsecureSsl?: Boolean;
  }
  export interface AwsCodeBuildProjectVpcConfig {
    /**
     * The ID of the VPC.
     */
    VpcId?: NonEmptyString;
    /**
     * A list of one or more subnet IDs in your Amazon VPC.
     */
    Subnets?: NonEmptyStringList;
    /**
     * A list of one or more security group IDs in your Amazon VPC.
     */
    SecurityGroupIds?: NonEmptyStringList;
  }
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
  export interface AwsEc2NetworkInterfaceAttachment {
    /**
     * The timestamp indicating when the attachment initiated.
     */
    AttachTime?: NonEmptyString;
    /**
     * The identifier of the network interface attachment
     */
    AttachmentId?: NonEmptyString;
    /**
     * Indicates whether the network interface is deleted when the instance is terminated.
     */
    DeleteOnTermination?: Boolean;
    /**
     * The device index of the network interface attachment on the instance.
     */
    DeviceIndex?: Integer;
    /**
     * The ID of the instance.
     */
    InstanceId?: NonEmptyString;
    /**
     * The AWS account ID of the owner of the instance.
     */
    InstanceOwnerId?: NonEmptyString;
    /**
     * The attachment state. Valid values: attaching | attached | detaching | detached 
     */
    Status?: NonEmptyString;
  }
  export interface AwsEc2NetworkInterfaceDetails {
    /**
     * The network interface attachment.
     */
    Attachment?: AwsEc2NetworkInterfaceAttachment;
    /**
     * The ID of the network interface.
     */
    NetworkInterfaceId?: NonEmptyString;
    /**
     * Security groups for the network interface.
     */
    SecurityGroups?: AwsEc2NetworkInterfaceSecurityGroupList;
    /**
     * Indicates whether traffic to or from the instance is validated.
     */
    SourceDestCheck?: Boolean;
  }
  export interface AwsEc2NetworkInterfaceSecurityGroup {
    /**
     * The name of the security group.
     */
    GroupName?: NonEmptyString;
    /**
     * The ID of the security group.
     */
    GroupId?: NonEmptyString;
  }
  export type AwsEc2NetworkInterfaceSecurityGroupList = AwsEc2NetworkInterfaceSecurityGroup[];
  export interface AwsEc2SecurityGroupDetails {
    /**
     * The name of the security group.
     */
    GroupName?: NonEmptyString;
    /**
     * The ID of the security group.
     */
    GroupId?: NonEmptyString;
    /**
     * The AWS account ID of the owner of the security group.
     */
    OwnerId?: NonEmptyString;
    /**
     * [VPC only] The ID of the VPC for the security group.
     */
    VpcId?: NonEmptyString;
    /**
     * The inbound rules associated with the security group.
     */
    IpPermissions?: AwsEc2SecurityGroupIpPermissionList;
    /**
     * [VPC only] The outbound rules associated with the security group.
     */
    IpPermissionsEgress?: AwsEc2SecurityGroupIpPermissionList;
  }
  export interface AwsEc2SecurityGroupIpPermission {
    /**
     * The IP protocol name (tcp, udp, icmp, icmpv6) or number. [VPC only] Use -1 to specify all protocols. When authorizing security group rules, specifying -1 or a protocol number other than tcp, udp, icmp, or icmpv6 allows traffic on all ports, regardless of any port range you specify. For tcp, udp, and icmp, you must specify a port range. For icmpv6, the port range is optional. If you omit the port range, traffic for all types and codes is allowed. 
     */
    IpProtocol?: NonEmptyString;
    /**
     * The start of the port range for the TCP and UDP protocols, or an ICMP/ICMPv6 type number. A value of -1 indicates all ICMP/ICMPv6 types. If you specify all ICMP/ICMPv6 types, you must specify all codes. 
     */
    FromPort?: Integer;
    /**
     * The end of the port range for the TCP and UDP protocols, or an ICMP/ICMPv6 code. A value of -1 indicates all ICMP/ICMPv6 codes. If you specify all ICMP/ICMPv6 types, you must specify all codes.
     */
    ToPort?: Integer;
    /**
     * The security group and AWS account ID pairs.
     */
    UserIdGroupPairs?: AwsEc2SecurityGroupUserIdGroupPairList;
    /**
     * The IPv4 ranges.
     */
    IpRanges?: AwsEc2SecurityGroupIpRangeList;
    /**
     * The IPv6 ranges.
     */
    Ipv6Ranges?: AwsEc2SecurityGroupIpv6RangeList;
    /**
     * [VPC only] The prefix list IDs for an AWS service. With outbound rules, this is the AWS service to access through a VPC endpoint from instances associated with the security group.
     */
    PrefixListIds?: AwsEc2SecurityGroupPrefixListIdList;
  }
  export type AwsEc2SecurityGroupIpPermissionList = AwsEc2SecurityGroupIpPermission[];
  export interface AwsEc2SecurityGroupIpRange {
    /**
     * The IPv4 CIDR range. You can either specify either a CIDR range or a source security group, but not both. To specify a single IPv4 address, use the /32 prefix length.
     */
    CidrIp?: NonEmptyString;
  }
  export type AwsEc2SecurityGroupIpRangeList = AwsEc2SecurityGroupIpRange[];
  export interface AwsEc2SecurityGroupIpv6Range {
    /**
     * The IPv6 CIDR range. You can either specify either a CIDR range or a source security group, but not both. To specify a single IPv6 address, use the /128 prefix length.
     */
    CidrIpv6?: NonEmptyString;
  }
  export type AwsEc2SecurityGroupIpv6RangeList = AwsEc2SecurityGroupIpv6Range[];
  export interface AwsEc2SecurityGroupPrefixListId {
    /**
     * The ID of the prefix.
     */
    PrefixListId?: NonEmptyString;
  }
  export type AwsEc2SecurityGroupPrefixListIdList = AwsEc2SecurityGroupPrefixListId[];
  export interface AwsEc2SecurityGroupUserIdGroupPair {
    /**
     * The ID of the security group.
     */
    GroupId?: NonEmptyString;
    /**
     * The name of the security group.
     */
    GroupName?: NonEmptyString;
    /**
     * The status of a VPC peering connection, if applicable.
     */
    PeeringStatus?: NonEmptyString;
    /**
     * The ID of an AWS account. For a referenced security group in another VPC, the account ID of the referenced security group is returned in the response. If the referenced security group is deleted, this value is not returned. [EC2-Classic] Required when adding or removing rules that reference a security group in another AWS. 
     */
    UserId?: NonEmptyString;
    /**
     * The ID of the VPC for the referenced security group, if applicable.
     */
    VpcId?: NonEmptyString;
    /**
     * The ID of the VPC peering connection, if applicable.
     */
    VpcPeeringConnectionId?: NonEmptyString;
  }
  export type AwsEc2SecurityGroupUserIdGroupPairList = AwsEc2SecurityGroupUserIdGroupPair[];
  export interface AwsElasticsearchDomainDetails {
    /**
     * IAM policy document specifying the access policies for the new Amazon ES domain.
     */
    AccessPolicies?: NonEmptyString;
    /**
     * Additional options for the domain endpoint.
     */
    DomainEndpointOptions?: AwsElasticsearchDomainDomainEndpointOptions;
    /**
     * Unique identifier for an Amazon ES domain.
     */
    DomainId?: NonEmptyString;
    /**
     * Name of an Amazon ES domain. Domain names are unique across all domains owned by the same account within an AWS Region. Domain names must start with a lowercase letter and must be between 3 and 28 characters. Valid characters are a-z (lowercase only), 0-9, and – (hyphen). 
     */
    DomainName?: NonEmptyString;
    /**
     * Domain-specific endpoint used to submit index, search, and data upload requests to an Amazon ES domain. The endpoint is a service URL. 
     */
    Endpoint?: NonEmptyString;
    /**
     * The key-value pair that exists if the Amazon ES domain uses VPC endpoints.
     */
    Endpoints?: FieldMap;
    /**
     * Elasticsearch version.
     */
    ElasticsearchVersion?: NonEmptyString;
    /**
     * Details about the configuration for encryption at rest.
     */
    EncryptionAtRestOptions?: AwsElasticsearchDomainEncryptionAtRestOptions;
    /**
     * Details about the configuration for node-to-node encryption.
     */
    NodeToNodeEncryptionOptions?: AwsElasticsearchDomainNodeToNodeEncryptionOptions;
    /**
     * Information that Amazon ES derives based on VPCOptions for the domain.
     */
    VPCOptions?: AwsElasticsearchDomainVPCOptions;
  }
  export interface AwsElasticsearchDomainDomainEndpointOptions {
    /**
     * Whether to require that all traffic to the domain arrive over HTTPS.
     */
    EnforceHTTPS?: Boolean;
    /**
     * The TLS security policy to apply to the HTTPS endpoint of the Elasticsearch domain. Valid values:    Policy-Min-TLS-1-0-2019-07, which supports TLSv1.0 and higher    Policy-Min-TLS-1-2-2019-07, which only supports TLSv1.2  
     */
    TLSSecurityPolicy?: NonEmptyString;
  }
  export interface AwsElasticsearchDomainEncryptionAtRestOptions {
    /**
     * Whether encryption at rest is enabled.
     */
    Enabled?: Boolean;
    /**
     * The KMS key ID. Takes the form 1a2a3a4-1a2a-3a4a-5a6a-1a2a3a4a5a6a.
     */
    KmsKeyId?: NonEmptyString;
  }
  export interface AwsElasticsearchDomainNodeToNodeEncryptionOptions {
    /**
     * Whether node-to-node encryption is enabled.
     */
    Enabled?: Boolean;
  }
  export interface AwsElasticsearchDomainVPCOptions {
    /**
     * The list of Availability Zones associated with the VPC subnets.
     */
    AvailabilityZones?: NonEmptyStringList;
    /**
     * The list of security group IDs associated with the VPC endpoints for the domain.
     */
    SecurityGroupIds?: NonEmptyStringList;
    /**
     * A list of subnet IDs associated with the VPC endpoints for the domain.
     */
    SubnetIds?: NonEmptyStringList;
    /**
     * ID for the VPC.
     */
    VPCId?: NonEmptyString;
  }
  export interface AwsElbv2LoadBalancerDetails {
    /**
     * The Availability Zones for the load balancer.
     */
    AvailabilityZones?: AvailabilityZones;
    /**
     * The ID of the Amazon Route 53 hosted zone associated with the load balancer.
     */
    CanonicalHostedZoneId?: NonEmptyString;
    /**
     * The date and time the load balancer was created.
     */
    CreatedTime?: NonEmptyString;
    /**
     * The public DNS name of the load balancer.
     */
    DNSName?: NonEmptyString;
    /**
     * The type of IP addresses used by the subnets for your load balancer. The possible values are ipv4 (for IPv4 addresses) and dualstack (for IPv4 and IPv6 addresses).
     */
    IpAddressType?: NonEmptyString;
    /**
     * The nodes of an Internet-facing load balancer have public IP addresses.
     */
    Scheme?: NonEmptyString;
    /**
     * The IDs of the security groups for the load balancer.
     */
    SecurityGroups?: SecurityGroups;
    /**
     * The state of the load balancer.
     */
    State?: LoadBalancerState;
    /**
     * The type of load balancer.
     */
    Type?: NonEmptyString;
    /**
     * The ID of the VPC for the load balancer.
     */
    VpcId?: NonEmptyString;
  }
  export interface AwsIamAccessKeyDetails {
    /**
     * The user associated with the IAM access key related to a finding. The UserName parameter has been replaced with the PrincipalName parameter because access keys can also be assigned to principals that are not IAM users.
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
    /**
     * The ID of the principal associated with an access key.
     */
    PrincipalId?: NonEmptyString;
    /**
     * The type of principal associated with an access key.
     */
    PrincipalType?: NonEmptyString;
    /**
     * The name of the principal.
     */
    PrincipalName?: NonEmptyString;
  }
  export type AwsIamAccessKeyStatus = "Active"|"Inactive"|string;
  export type AwsIamRoleAssumeRolePolicyDocument = string;
  export interface AwsIamRoleDetails {
    /**
     * The trust policy that grants permission to assume the role.
     */
    AssumeRolePolicyDocument?: AwsIamRoleAssumeRolePolicyDocument;
    /**
     * The date and time, in ISO 8601 date-time format, when the role was created.
     */
    CreateDate?: NonEmptyString;
    /**
     * The stable and unique string identifying the role.
     */
    RoleId?: NonEmptyString;
    /**
     * The friendly name that identifies the role.
     */
    RoleName?: NonEmptyString;
    /**
     * The maximum session duration (in seconds) that you want to set for the specified role.
     */
    MaxSessionDuration?: Integer;
    /**
     * The path to the role.
     */
    Path?: NonEmptyString;
  }
  export interface AwsKmsKeyDetails {
    /**
     * The twelve-digit account ID of the AWS account that owns the CMK.
     */
    AWSAccountId?: NonEmptyString;
    /**
     * The date and time when the CMK was created.
     */
    CreationDate?: Double;
    /**
     * The globally unique identifier for the CMK.
     */
    KeyId?: NonEmptyString;
    /**
     * The manager of the CMK. CMKs in your AWS account are either customer managed or AWS managed.
     */
    KeyManager?: NonEmptyString;
    /**
     * The state of the CMK.
     */
    KeyState?: NonEmptyString;
    /**
     * The source of the CMK's key material. When this value is AWS_KMS, AWS KMS created the key material. When this value is EXTERNAL, the key material was imported from your existing key management infrastructure or the CMK lacks key material. When this value is AWS_CLOUDHSM, the key material was created in the AWS CloudHSM cluster associated with a custom key store.
     */
    Origin?: NonEmptyString;
  }
  export interface AwsLambdaFunctionCode {
    /**
     * An Amazon S3 bucket in the same AWS Region as your function. The bucket can be in a different AWS account.
     */
    S3Bucket?: NonEmptyString;
    /**
     * The Amazon S3 key of the deployment package.
     */
    S3Key?: NonEmptyString;
    /**
     * For versioned objects, the version of the deployment package object to use.
     */
    S3ObjectVersion?: NonEmptyString;
    /**
     * The base64-encoded contents of the deployment package. AWS SDK and AWS CLI clients handle the encoding for you.
     */
    ZipFile?: NonEmptyString;
  }
  export interface AwsLambdaFunctionDeadLetterConfig {
    /**
     * The Amazon Resource Name (ARN) of an Amazon SQS queue or Amazon SNS topic.
     */
    TargetArn?: NonEmptyString;
  }
  export interface AwsLambdaFunctionDetails {
    /**
     * An AwsLambdaFunctionCode object.
     */
    Code?: AwsLambdaFunctionCode;
    /**
     * The SHA256 hash of the function's deployment package.
     */
    CodeSha256?: NonEmptyString;
    /**
     * The function's dead letter queue.
     */
    DeadLetterConfig?: AwsLambdaFunctionDeadLetterConfig;
    /**
     * The function's environment variables.
     */
    Environment?: AwsLambdaFunctionEnvironment;
    /**
     * The name of the function.
     */
    FunctionName?: NonEmptyString;
    /**
     * The function that Lambda calls to begin executing your function.
     */
    Handler?: NonEmptyString;
    /**
     * The KMS key that's used to encrypt the function's environment variables. This key is only returned if you've configured a customer managed CMK.
     */
    KmsKeyArn?: NonEmptyString;
    /**
     * The date and time that the function was last updated, in ISO-8601 format (YYYY-MM-DDThh:mm:ss.sTZD).
     */
    LastModified?: NonEmptyString;
    /**
     * The function's layers.
     */
    Layers?: AwsLambdaFunctionLayerList;
    /**
     * For Lambda@Edge functions, the ARN of the master function.
     */
    MasterArn?: NonEmptyString;
    /**
     * The memory that's allocated to the function.
     */
    MemorySize?: Integer;
    /**
     * The latest updated revision of the function or alias.
     */
    RevisionId?: NonEmptyString;
    /**
     * The function's execution role.
     */
    Role?: NonEmptyString;
    /**
     * The runtime environment for the Lambda function.
     */
    Runtime?: NonEmptyString;
    /**
     * The amount of time that Lambda allows a function to run before stopping it.
     */
    Timeout?: Integer;
    /**
     * The function's AWS X-Ray tracing configuration.
     */
    TracingConfig?: AwsLambdaFunctionTracingConfig;
    /**
     * The function's networking configuration.
     */
    VpcConfig?: AwsLambdaFunctionVpcConfig;
    /**
     * The version of the Lambda function.
     */
    Version?: NonEmptyString;
  }
  export interface AwsLambdaFunctionEnvironment {
    /**
     * Environment variable key-value pairs.
     */
    Variables?: FieldMap;
    /**
     * An AwsLambdaFunctionEnvironmentError object.
     */
    Error?: AwsLambdaFunctionEnvironmentError;
  }
  export interface AwsLambdaFunctionEnvironmentError {
    /**
     * The error code.
     */
    ErrorCode?: NonEmptyString;
    /**
     * The error message.
     */
    Message?: NonEmptyString;
  }
  export interface AwsLambdaFunctionLayer {
    /**
     * The Amazon Resource Name (ARN) of the function layer.
     */
    Arn?: NonEmptyString;
    /**
     * The size of the layer archive in bytes.
     */
    CodeSize?: Integer;
  }
  export type AwsLambdaFunctionLayerList = AwsLambdaFunctionLayer[];
  export interface AwsLambdaFunctionTracingConfig {
    /**
     * The tracing mode.
     */
    Mode?: NonEmptyString;
  }
  export interface AwsLambdaFunctionVpcConfig {
    /**
     * A list of VPC security groups IDs.
     */
    SecurityGroupIds?: NonEmptyStringList;
    /**
     * A list of VPC subnet IDs.
     */
    SubnetIds?: NonEmptyStringList;
    /**
     * The ID of the VPC.
     */
    VpcId?: NonEmptyString;
  }
  export interface AwsLambdaLayerVersionDetails {
    /**
     * The version number.
     */
    Version?: AwsLambdaLayerVersionNumber;
    /**
     * The layer's compatible runtimes. Maximum number of 5 items. Valid values: nodejs10.x | nodejs12.x | java8 | java11 | python2.7 | python3.6 | python3.7 | python3.8 | dotnetcore1.0 | dotnetcore2.1 | go1.x | ruby2.5 | provided 
     */
    CompatibleRuntimes?: NonEmptyStringList;
    /**
     * The date that the version was created, in ISO 8601 format. For example, 2018-11-27T15:10:45.123+0000. 
     */
    CreatedDate?: NonEmptyString;
  }
  export type AwsLambdaLayerVersionNumber = number;
  export interface AwsRdsDbInstanceAssociatedRole {
    /**
     * The Amazon Resource Name (ARN) of the IAM role that is associated with the DB instance.
     */
    RoleArn?: NonEmptyString;
    /**
     * The name of the feature associated with the IAM)role.
     */
    FeatureName?: NonEmptyString;
    /**
     * Describes the state of the association between the IAM role and the DB instance. The Status property returns one of the following values:    ACTIVE - the IAM role ARN is associated with the DB instance and can be used to access other AWS services on your behalf.    PENDING - the IAM role ARN is being associated with the DB instance.    INVALID - the IAM role ARN is associated with the DB instance, but the DB instance is unable to assume the IAM role in order to access other AWS services on your behalf.   
     */
    Status?: NonEmptyString;
  }
  export type AwsRdsDbInstanceAssociatedRoles = AwsRdsDbInstanceAssociatedRole[];
  export interface AwsRdsDbInstanceDetails {
    /**
     * The AWS Identity and Access Management (IAM) roles associated with the DB instance.
     */
    AssociatedRoles?: AwsRdsDbInstanceAssociatedRoles;
    /**
     * The identifier of the CA certificate for this DB instance.
     */
    CACertificateIdentifier?: NonEmptyString;
    /**
     * If the DB instance is a member of a DB cluster, contains the name of the DB cluster that the DB instance is a member of.
     */
    DBClusterIdentifier?: NonEmptyString;
    /**
     * Contains a user-supplied database identifier. This identifier is the unique key that identifies a DB instance.
     */
    DBInstanceIdentifier?: NonEmptyString;
    /**
     * Contains the name of the compute and memory capacity class of the DB instance.
     */
    DBInstanceClass?: NonEmptyString;
    /**
     * Specifies the port that the DB instance listens on. If the DB instance is part of a DB cluster, this can be a different port than the DB cluster port.
     */
    DbInstancePort?: Integer;
    /**
     * The AWS Region-unique, immutable identifier for the DB instance. This identifier is found in AWS CloudTrail log entries whenever the AWS KMS key for the DB instance is accessed. 
     */
    DbiResourceId?: NonEmptyString;
    /**
     * The meaning of this parameter differs according to the database engine you use.  MySQL, MariaDB, SQL Server, PostgreSQL  Contains the name of the initial database of this instance that was provided at create time, if one was specified when the DB instance was created. This same name is returned for the life of the DB instance.  Oracle  Contains the Oracle System ID (SID) of the created DB instance. Not shown when the returned parameters do not apply to an Oracle DB instance. 
     */
    DBName?: NonEmptyString;
    /**
     * Indicates whether the DB instance has deletion protection enabled. When deletion protection is enabled, the database cannot be deleted.
     */
    DeletionProtection?: Boolean;
    /**
     * Specifies the connection endpoint.
     */
    Endpoint?: AwsRdsDbInstanceEndpoint;
    /**
     * Provides the name of the database engine to use for this DB instance.
     */
    Engine?: NonEmptyString;
    /**
     * Indicates the database engine version.
     */
    EngineVersion?: NonEmptyString;
    /**
     * True if mapping of AWS Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false. IAM database authentication can be enabled for the following database engines.   For MySQL 5.6, minor version 5.6.34 or higher   For MySQL 5.7, minor version 5.7.16 or higher   Aurora 5.6 or higher  
     */
    IAMDatabaseAuthenticationEnabled?: Boolean;
    /**
     * Provides the date and time the DB instance was created.
     */
    InstanceCreateTime?: NonEmptyString;
    /**
     * If StorageEncrypted is true, the AWS KMS key identifier for the encrypted DB instance.
     */
    KmsKeyId?: NonEmptyString;
    /**
     * Specifies the accessibility options for the DB instance. A value of true specifies an Internet-facing instance with a publicly resolvable DNS name, which resolves to a public IP address. A value of false specifies an internal instance with a DNS name that resolves to a private IP address. 
     */
    PubliclyAccessible?: Boolean;
    /**
     * Specifies whether the DB instance is encrypted.
     */
    StorageEncrypted?: Boolean;
    /**
     * The ARN from the key store with which the instance is associated for TDE encryption.
     */
    TdeCredentialArn?: NonEmptyString;
    /**
     * A list of VPC security groups that the DB instance belongs to.
     */
    VpcSecurityGroups?: AwsRdsDbInstanceVpcSecurityGroups;
  }
  export interface AwsRdsDbInstanceEndpoint {
    /**
     * Specifies the DNS address of the DB instance.
     */
    Address?: NonEmptyString;
    /**
     * Specifies the port that the database engine is listening on.
     */
    Port?: Integer;
    /**
     * Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.
     */
    HostedZoneId?: NonEmptyString;
  }
  export interface AwsRdsDbInstanceVpcSecurityGroup {
    /**
     * The name of the VPC security group.
     */
    VpcSecurityGroupId?: NonEmptyString;
    /**
     * The status of the VPC security group.
     */
    Status?: NonEmptyString;
  }
  export type AwsRdsDbInstanceVpcSecurityGroups = AwsRdsDbInstanceVpcSecurityGroup[];
  export interface AwsS3BucketDetails {
    /**
     * The canonical user ID of the owner of the S3 bucket.
     */
    OwnerId?: NonEmptyString;
    /**
     * The display name of the owner of the S3 bucket.
     */
    OwnerName?: NonEmptyString;
    /**
     * The date and time when the S3 bucket was created.
     */
    CreatedAt?: NonEmptyString;
    /**
     * The encryption rules that are applied to the S3 bucket.
     */
    ServerSideEncryptionConfiguration?: AwsS3BucketServerSideEncryptionConfiguration;
  }
  export interface AwsS3BucketServerSideEncryptionByDefault {
    /**
     * Server-side encryption algorithm to use for the default encryption.
     */
    SSEAlgorithm?: NonEmptyString;
    /**
     * AWS KMS customer master key (CMK) ID to use for the default encryption.
     */
    KMSMasterKeyID?: NonEmptyString;
  }
  export interface AwsS3BucketServerSideEncryptionConfiguration {
    /**
     * The encryption rules that are applied to the S3 bucket.
     */
    Rules?: AwsS3BucketServerSideEncryptionRules;
  }
  export interface AwsS3BucketServerSideEncryptionRule {
    /**
     * Specifies the default server-side encryption to apply to new objects in the bucket. If a PUT Object request doesn't specify any server-side encryption, this default encryption is applied.
     */
    ApplyServerSideEncryptionByDefault?: AwsS3BucketServerSideEncryptionByDefault;
  }
  export type AwsS3BucketServerSideEncryptionRules = AwsS3BucketServerSideEncryptionRule[];
  export interface AwsS3ObjectDetails {
    /**
     * The date and time when the object was last modified.
     */
    LastModified?: NonEmptyString;
    /**
     * The opaque identifier assigned by a web server to a specific version of a resource found at a URL.
     */
    ETag?: NonEmptyString;
    /**
     * The version of the object.
     */
    VersionId?: NonEmptyString;
    /**
     * A standard MIME type describing the format of the object data.
     */
    ContentType?: NonEmptyString;
    /**
     * If the object is stored using server-side encryption, the value of the server-side encryption algorithm used when storing this object in Amazon S3.
     */
    ServerSideEncryption?: NonEmptyString;
    /**
     * The identifier of the AWS Key Management Service (AWS KMS) symmetric customer managed customer master key (CMK) that was used for the object.
     */
    SSEKMSKeyId?: NonEmptyString;
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
     * The ARN generated by Security Hub that uniquely identifies a product that generates findings. This can be the ARN for a third-party product that is integrated with Security Hub, or the ARN for a custom integration.
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
     * Threat intelligence details related to a finding.
     */
    ThreatIntelIndicators?: ThreatIntelIndicatorList;
    /**
     * A set of resource data types that describe the resources that the finding refers to.
     */
    Resources: ResourceList;
    /**
     * This data type is exclusive to findings that are generated as the result of a check run against a specific rule in a supported security standard, such as CIS AWS Foundations. Contains security standard-related finding details.
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
     * Provides information about the status of the investigation into a finding.
     */
    Workflow?: Workflow;
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
     * The type of a threat intelligence indicator.
     */
    ThreatIntelIndicatorType?: StringFilterList;
    /**
     * The value of a threat intelligence indicator.
     */
    ThreatIntelIndicatorValue?: StringFilterList;
    /**
     * The category of a threat intelligence indicator.
     */
    ThreatIntelIndicatorCategory?: StringFilterList;
    /**
     * The date/time of the last observation of a threat intelligence indicator.
     */
    ThreatIntelIndicatorLastObservedAt?: DateFilterList;
    /**
     * The source of the threat intelligence.
     */
    ThreatIntelIndicatorSource?: StringFilterList;
    /**
     * The URL for more details from the source of the threat intelligence.
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
     * The date and time the instance was launched.
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
     * Exclusive to findings that are generated as the result of a check run against a specific rule in a supported standard, such as CIS AWS Foundations. Contains security standard-related finding details.
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
     * The status of the investigation into a finding. Allowed values are the following.    NEW - The initial state of a finding, before it is reviewed.    NOTIFIED - Indicates that the resource owner has been notified about the security issue. Used when the initial reviewer is not the resource owner, and needs intervention from the resource owner.    SUPPRESSED - The finding will not be reviewed again and will not be acted upon.    RESOLVED - The finding was reviewed and remediated and is now considered resolved.   
     */
    WorkflowStatus?: StringFilterList;
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
  export interface AwsSnsTopicDetails {
    /**
     * The ID of an AWS-managed customer master key (CMK) for Amazon SNS or a custom CMK.
     */
    KmsMasterKeyId?: NonEmptyString;
    /**
     * Subscription is an embedded property that describes the subscription endpoints of an Amazon SNS topic.
     */
    Subscription?: AwsSnsTopicSubscriptionList;
    /**
     * The name of the topic.
     */
    TopicName?: NonEmptyString;
    /**
     * The subscription's owner.
     */
    Owner?: NonEmptyString;
  }
  export interface AwsSnsTopicSubscription {
    /**
     * The subscription's endpoint (format depends on the protocol).
     */
    Endpoint?: NonEmptyString;
    /**
     * The subscription's protocol.
     */
    Protocol?: NonEmptyString;
  }
  export type AwsSnsTopicSubscriptionList = AwsSnsTopicSubscription[];
  export interface AwsSqsQueueDetails {
    /**
     * The length of time, in seconds, for which Amazon SQS can reuse a data key to encrypt or decrypt messages before calling AWS KMS again.
     */
    KmsDataKeyReusePeriodSeconds?: Integer;
    /**
     * The ID of an AWS-managed customer master key (CMK) for Amazon SQS or a custom CMK.
     */
    KmsMasterKeyId?: NonEmptyString;
    /**
     * The name of the new queue.
     */
    QueueName?: NonEmptyString;
    /**
     * The Amazon Resource Name (ARN) of the dead-letter queue to which Amazon SQS moves messages after the value of maxReceiveCount is exceeded. 
     */
    DeadLetterTargetArn?: NonEmptyString;
  }
  export interface AwsWafWebAclDetails {
    /**
     * A friendly name or description of the WebACL. You can't change the name of a WebACL after you create it.
     */
    Name?: NonEmptyString;
    /**
     * The action to perform if none of the Rules contained in the WebACL match.
     */
    DefaultAction?: NonEmptyString;
    /**
     * An array that contains the action for each rule in a WebACL, the priority of the rule, and the ID of the rule.
     */
    Rules?: AwsWafWebAclRuleList;
    /**
     * A unique identifier for a WebACL.
     */
    WebAclId?: NonEmptyString;
  }
  export interface AwsWafWebAclRule {
    /**
     * Specifies the action that CloudFront or AWS WAF takes when a web request matches the conditions in the Rule. 
     */
    Action?: WafAction;
    /**
     * Rules to exclude from a rule group.
     */
    ExcludedRules?: WafExcludedRuleList;
    /**
     * Use the OverrideAction to test your RuleGroup. Any rule in a RuleGroup can potentially block a request. If you set the OverrideAction to None, the RuleGroup blocks a request if any individual rule in the RuleGroup matches the request and is configured to block that request. However, if you first want to test the RuleGroup, set the OverrideAction to Count. The RuleGroup then overrides any block action specified by individual rules contained within the group. Instead of blocking matching requests, those requests are counted.  ActivatedRule|OverrideAction applies only when updating or adding a RuleGroup to a WebACL. In this case you do not use ActivatedRule|Action. For all other update requests, ActivatedRule|Action is used instead of ActivatedRule|OverrideAction. 
     */
    OverrideAction?: WafOverrideAction;
    /**
     * Specifies the order in which the Rules in a WebACL are evaluated. Rules with a lower value for Priority are evaluated before Rules with a higher value. The value must be a unique integer. If you add multiple Rules to a WebACL, the values do not need to be consecutive.
     */
    Priority?: Integer;
    /**
     * The identifier for a Rule.
     */
    RuleId?: NonEmptyString;
    /**
     * The rule type. Valid values: REGULAR | RATE_BASED | GROUP  The default is REGULAR.
     */
    Type?: NonEmptyString;
  }
  export type AwsWafWebAclRuleList = AwsWafWebAclRule[];
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
     * The list of standards checks to enable.
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
     * A list of findings to import. To successfully import a finding, it must follow the AWS Security Finding Format. Maximum of 100 findings per request.
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
     * The list of findings that failed to import.
     */
    FailedFindings?: ImportFindingsErrorList;
  }
  export type Boolean = boolean;
  export type CategoryList = NonEmptyString[];
  export interface Compliance {
    /**
     * The result of a standards check.
     */
    Status?: ComplianceStatus;
    /**
     * List of requirements that are related to a standards control.
     */
    RelatedRequirements?: RelatedRequirementsList;
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
  export type ControlStatus = "ENABLED"|"DISABLED"|string;
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
     * One or more attributes used to filter the findings included in the insight. The insight only includes findings that match the criteria defined in the filters.
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
     * The list of accounts to associate with the Security Hub master account. For each account, the list includes the account ID and the email address.
     */
    AccountDetails?: AccountDetailsList;
  }
  export interface CreateMembersResponse {
    /**
     * The list of AWS accounts that were not processed. For each account, the list includes the account ID and the email address.
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
     * The list of account IDs for the accounts from which to decline the invitations to Security Hub.
     */
    AccountIds: AccountIdList;
  }
  export interface DeclineInvitationsResponse {
    /**
     * The list of AWS accounts that were not processed. For each account, the list includes the account ID and the email address.
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
     * The list of the account IDs that sent the invitations to delete.
     */
    AccountIds: AccountIdList;
  }
  export interface DeleteInvitationsResponse {
    /**
     * The list of AWS accounts for which the invitations were not deleted. For each account, the list includes the account ID and the email address.
     */
    UnprocessedAccounts?: ResultList;
  }
  export interface DeleteMembersRequest {
    /**
     * The list of account IDs for the member accounts to delete.
     */
    AccountIds?: AccountIdList;
  }
  export interface DeleteMembersResponse {
    /**
     * The list of AWS accounts that were not deleted. For each account, the list includes the account ID and the email address.
     */
    UnprocessedAccounts?: ResultList;
  }
  export interface DescribeActionTargetsRequest {
    /**
     * A list of custom action target ARNs for the custom action targets to retrieve.
     */
    ActionTargetArns?: ArnList;
    /**
     * The token that is required for pagination. On your first call to the DescribeActionTargets operation, set the value of this parameter to NULL. For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.
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
     * The pagination token to use to request the next page of results.
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
     * The ARN of the Hub resource that was retrieved.
     */
    HubArn?: NonEmptyString;
    /**
     * The date and time when Security Hub was enabled in the account.
     */
    SubscribedAt?: NonEmptyString;
  }
  export interface DescribeProductsRequest {
    /**
     * The token that is required for pagination. On your first call to the DescribeProducts operation, set the value of this parameter to NULL. For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.
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
     * The pagination token to use to request the next page of results.
     */
    NextToken?: NextToken;
  }
  export interface DescribeStandardsControlsRequest {
    /**
     * The ARN of a resource that represents your subscription to a supported standard.
     */
    StandardsSubscriptionArn: NonEmptyString;
    /**
     * The token that is required for pagination. On your first call to the DescribeStandardsControls operation, set the value of this parameter to NULL. For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of security standard controls to return.
     */
    MaxResults?: MaxResults;
  }
  export interface DescribeStandardsControlsResponse {
    /**
     * A list of security standards controls.
     */
    Controls?: StandardsControls;
    /**
     * The pagination token to use to request the next page of results.
     */
    NextToken?: NextToken;
  }
  export interface DescribeStandardsRequest {
    /**
     * The token that is required for pagination. On your first call to the DescribeStandards operation, set the value of this parameter to NULL. For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of standards to return.
     */
    MaxResults?: MaxResults;
  }
  export interface DescribeStandardsResponse {
    /**
     * A list of available standards.
     */
    Standards?: Standards;
    /**
     * The pagination token to use to request the next page of results.
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
     * The list of the standards subscription ARNs for the standards to retrieve.
     */
    StandardsSubscriptionArns?: StandardsSubscriptionArns;
    /**
     * The token that is required for pagination. On your first call to the GetEnabledStandards operation, set the value of this parameter to NULL. For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return in the response.
     */
    MaxResults?: MaxResults;
  }
  export interface GetEnabledStandardsResponse {
    /**
     * The list of StandardsSubscriptions objects that include information about the enabled standards.
     */
    StandardsSubscriptions?: StandardsSubscriptions;
    /**
     * The pagination token to use to request the next page of results.
     */
    NextToken?: NextToken;
  }
  export interface GetFindingsRequest {
    /**
     * The finding attributes used to define a condition to filter the returned findings.
     */
    Filters?: AwsSecurityFindingFilters;
    /**
     * The finding attributes used to sort the list of returned findings.
     */
    SortCriteria?: SortCriteria;
    /**
     * The token that is required for pagination. On your first call to the GetFindings operation, set the value of this parameter to NULL. For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.
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
     * The pagination token to use to request the next page of results.
     */
    NextToken?: NextToken;
  }
  export interface GetInsightResultsRequest {
    /**
     * The ARN of the insight for which to return results.
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
     * The ARNs of the insights to describe. If you do not provide any insight ARNs, then GetInsights returns all of your custom insights. It does not return any managed insights.
     */
    InsightArns?: ArnList;
    /**
     * The token that is required for pagination. On your first call to the GetInsights operation, set the value of this parameter to NULL. For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of items to return in the response.
     */
    MaxResults?: MaxResults;
  }
  export interface GetInsightsResponse {
    /**
     * The insights returned by the operation.
     */
    Insights: InsightList;
    /**
     * The pagination token to use to request the next page of results.
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
     * The list of account IDs for the Security Hub member accounts to return the details for. 
     */
    AccountIds: AccountIdList;
  }
  export interface GetMembersResponse {
    /**
     * The list of details about the Security Hub member accounts.
     */
    Members?: MemberList;
    /**
     * The list of AWS accounts that could not be processed. For each account, the list includes the account ID and the email address.
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
     * One or more attributes used to filter the findings included in the insight. The insight only includes findings that match the criteria defined in the filters.
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
  export type IntegrationType = "SEND_FINDINGS_TO_SECURITY_HUB"|"RECEIVE_FINDINGS_FROM_SECURITY_HUB"|string;
  export type IntegrationTypeList = IntegrationType[];
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
     * The current status of the association between the member and master accounts.
     */
    MemberStatus?: NonEmptyString;
  }
  export type InvitationList = Invitation[];
  export interface InviteMembersRequest {
    /**
     * The list of account IDs of the AWS accounts to invite to Security Hub as members. 
     */
    AccountIds?: AccountIdList;
  }
  export interface InviteMembersResponse {
    /**
     * The list of AWS accounts that could not be processed. For each account, the list includes the account ID and the email address.
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
     * The token that is required for pagination. On your first call to the ListEnabledProductsForImport operation, set the value of this parameter to NULL. For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of items to return in the response.
     */
    MaxResults?: MaxResults;
  }
  export interface ListEnabledProductsForImportResponse {
    /**
     * The list of ARNs for the resources that represent your subscriptions to products. 
     */
    ProductSubscriptions?: ProductSubscriptionArnList;
    /**
     * The pagination token to use to request the next page of results.
     */
    NextToken?: NextToken;
  }
  export interface ListInvitationsRequest {
    /**
     * The maximum number of items to return in the response. 
     */
    MaxResults?: MaxResults;
    /**
     * The token that is required for pagination. On your first call to the ListInvitations operation, set the value of this parameter to NULL. For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.
     */
    NextToken?: NextToken;
  }
  export interface ListInvitationsResponse {
    /**
     * The details of the invitations returned by the operation.
     */
    Invitations?: InvitationList;
    /**
     * The pagination token to use to request the next page of results.
     */
    NextToken?: NonEmptyString;
  }
  export interface ListMembersRequest {
    /**
     * Specifies which member accounts to include in the response based on their relationship status with the master account. The default value is TRUE. If OnlyAssociated is set to TRUE, the response includes member accounts whose relationship status with the master is set to ENABLED or DISABLED. If OnlyAssociated is set to FALSE, the response includes all existing member accounts. 
     */
    OnlyAssociated?: Boolean;
    /**
     * The maximum number of items to return in the response. 
     */
    MaxResults?: MaxResults;
    /**
     * The token that is required for pagination. On your first call to the ListMembers operation, set the value of this parameter to NULL. For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.
     */
    NextToken?: NextToken;
  }
  export interface ListMembersResponse {
    /**
     * Member details returned by the operation.
     */
    Members?: MemberList;
    /**
     * The pagination token to use to request the next page of results.
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
  export interface LoadBalancerState {
    /**
     * The state code. The initial state of the load balancer is provisioning. After the load balancer is fully set up and ready to route traffic, its state is active. If the load balancer could not be set up, its state is failed. 
     */
    Code?: NonEmptyString;
    /**
     * A description of the state.
     */
    Reason?: NonEmptyString;
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
  export type NonEmptyStringList = NonEmptyString[];
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
     * The types of integration that the product supports. Available values are the following.    SEND_FINDINGS_TO_SECURITY_HUB - Indicates that the integration sends findings to Security Hub.    RECEIVE_FINDINGS_FROM_SECURITY_HUB - Indicates that the integration receives findings from Security Hub.  
     */
    IntegrationTypes?: IntegrationTypeList;
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
  export type RelatedRequirementsList = NonEmptyString[];
  export interface Remediation {
    /**
     * A recommendation on the steps to take to remediate the issue identified by a finding.
     */
    Recommendation?: Recommendation;
  }
  export interface Resource {
    /**
     * The type of the resource that details are provided for. If possible, set Type to one of the supported resource types. For example, if the resource is an EC2 instance, then set Type to AwsEc2Instance. If the resource does not match any of the provided types, then set Type to Other. 
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
     * Details for an AWS CodeBuild project.
     */
    AwsCodeBuildProject?: AwsCodeBuildProjectDetails;
    /**
     * Details about a CloudFront distribution.
     */
    AwsCloudFrontDistribution?: AwsCloudFrontDistributionDetails;
    /**
     * Details about an Amazon EC2 instance related to a finding.
     */
    AwsEc2Instance?: AwsEc2InstanceDetails;
    /**
     * Details for an AWS EC2 network interface.
     */
    AwsEc2NetworkInterface?: AwsEc2NetworkInterfaceDetails;
    /**
     * Details for an EC2 security group.
     */
    AwsEc2SecurityGroup?: AwsEc2SecurityGroupDetails;
    /**
     * Details about a load balancer.
     */
    AwsElbv2LoadBalancer?: AwsElbv2LoadBalancerDetails;
    /**
     * Details for an Elasticsearch domain.
     */
    AwsElasticsearchDomain?: AwsElasticsearchDomainDetails;
    /**
     * Details about an Amazon S3 Bucket related to a finding.
     */
    AwsS3Bucket?: AwsS3BucketDetails;
    /**
     * Details about an Amazon S3 object related to a finding.
     */
    AwsS3Object?: AwsS3ObjectDetails;
    /**
     * Details about an IAM access key related to a finding.
     */
    AwsIamAccessKey?: AwsIamAccessKeyDetails;
    /**
     * Details about an IAM role.
     */
    AwsIamRole?: AwsIamRoleDetails;
    /**
     * Details about a KMS key.
     */
    AwsKmsKey?: AwsKmsKeyDetails;
    /**
     * Details about a Lambda function.
     */
    AwsLambdaFunction?: AwsLambdaFunctionDetails;
    /**
     * Details for a Lambda layer version.
     */
    AwsLambdaLayerVersion?: AwsLambdaLayerVersionDetails;
    /**
     * Details for an RDS database instance.
     */
    AwsRdsDbInstance?: AwsRdsDbInstanceDetails;
    /**
     * Details about an SNS topic.
     */
    AwsSnsTopic?: AwsSnsTopicDetails;
    /**
     * Details about an SQS queue.
     */
    AwsSqsQueue?: AwsSqsQueueDetails;
    /**
     * Details for a WAF WebACL.
     */
    AwsWafWebAcl?: AwsWafWebAclDetails;
    /**
     * Details about a container resource related to a finding.
     */
    Container?: ContainerDetails;
    /**
     * Details about a resource that are not available in a type-specific details object. Use the Other object in the following cases.   The type-specific object does not contain all of the fields that you want to populate. In this case, first use the type-specific object to populate those fields. Use the Other object to populate the fields that are missing from the type-specific object.   The resource type does not have a corresponding object. This includes resources for which the type is Other.   
     */
    Other?: FieldMap;
  }
  export type ResourceList = Resource[];
  export interface Result {
    /**
     * An AWS account ID of the account that was not processed.
     */
    AccountId?: AccountId;
    /**
     * The reason that the account was not processed.
     */
    ProcessingResult?: NonEmptyString;
  }
  export type ResultList = Result[];
  export type SecurityGroups = NonEmptyString[];
  export interface Severity {
    /**
     * The native severity as defined by the AWS service or integrated partner product that generated the finding.
     */
    Product?: Double;
    /**
     * The severity value of the finding. The allowed values are the following.    INFORMATIONAL - No issue was found.    LOW - The issue does not require action on its own.    MEDIUM - The issue must be addressed but not urgently.    HIGH - The issue must be addressed as a priority.    CRITICAL - The issue must be remediated immediately to avoid it escalating.  
     */
    Label?: SeverityLabel;
    /**
     * Deprecated. This attribute is being deprecated. Instead of providing Normalized, provide Label. If you provide Normalized and do not provide Label, Label is set automatically as follows.    0 - INFORMATIONAL    1–39 - LOW    40–69 - MEDIUM    70–89 - HIGH    90–100 - CRITICAL   
     */
    Normalized?: Integer;
  }
  export type SeverityLabel = "INFORMATIONAL"|"LOW"|"MEDIUM"|"HIGH"|"CRITICAL"|string;
  export type SeverityRating = "LOW"|"MEDIUM"|"HIGH"|"CRITICAL"|string;
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
  export interface Standard {
    /**
     * The ARN of a standard.
     */
    StandardsArn?: NonEmptyString;
    /**
     * The name of the standard.
     */
    Name?: NonEmptyString;
    /**
     * A description of the standard.
     */
    Description?: NonEmptyString;
  }
  export type Standards = Standard[];
  export interface StandardsControl {
    /**
     * The ARN of the security standard control.
     */
    StandardsControlArn?: NonEmptyString;
    /**
     * The current status of the security standard control. Indicates whether the control is enabled or disabled. Security Hub does not check against disabled controls.
     */
    ControlStatus?: ControlStatus;
    /**
     * The reason provided for the most recent change in status for the control.
     */
    DisabledReason?: NonEmptyString;
    /**
     * The date and time that the status of the security standard control was most recently updated.
     */
    ControlStatusUpdatedAt?: Timestamp;
    /**
     * The identifier of the security standard control.
     */
    ControlId?: NonEmptyString;
    /**
     * The title of the security standard control.
     */
    Title?: NonEmptyString;
    /**
     * The longer description of the security standard control. Provides information about what the control is checking for.
     */
    Description?: NonEmptyString;
    /**
     * A link to remediation information for the control in the Security Hub user documentation.
     */
    RemediationUrl?: NonEmptyString;
    /**
     * The severity of findings generated from this security standard control. The finding severity is based on an assessment of how easy it would be to compromise AWS resources if the issue is detected.
     */
    SeverityRating?: SeverityRating;
    /**
     * The list of requirements that are related to this control.
     */
    RelatedRequirements?: RelatedRequirementsList;
  }
  export type StandardsControls = StandardsControl[];
  export type StandardsInputParameterMap = {[key: string]: NonEmptyString};
  export type StandardsStatus = "PENDING"|"READY"|"FAILED"|"DELETING"|"INCOMPLETE"|string;
  export interface StandardsSubscription {
    /**
     * The ARN of a resource that represents your subscription to a supported standard.
     */
    StandardsSubscriptionArn: NonEmptyString;
    /**
     * The ARN of a standard.
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
     * The ARN of the standard that you want to enable. To view the list of available standards and their ARNs, use the  DescribeStandards  operation.
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
     * The type of threat intelligence indicator.
     */
    Type?: ThreatIntelIndicatorType;
    /**
     * The value of a threat intelligence indicator.
     */
    Value?: NonEmptyString;
    /**
     * The category of a threat intelligence indicator.
     */
    Category?: ThreatIntelIndicatorCategory;
    /**
     * The date and time when the most recent instance of a threat intelligence indicator was observed.
     */
    LastObservedAt?: NonEmptyString;
    /**
     * The source of the threat intelligence indicator.
     */
    Source?: NonEmptyString;
    /**
     * The URL to the page or site where you can get more information about the threat intelligence indicator.
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
  export interface UpdateStandardsControlRequest {
    /**
     * The ARN of the security standard control to enable or disable.
     */
    StandardsControlArn: NonEmptyString;
    /**
     * The updated status of the security standard control.
     */
    ControlStatus?: ControlStatus;
    /**
     * A description of the reason why you are disabling a security standard control.
     */
    DisabledReason?: NonEmptyString;
  }
  export interface UpdateStandardsControlResponse {
  }
  export type VerificationState = "UNKNOWN"|"TRUE_POSITIVE"|"FALSE_POSITIVE"|"BENIGN_POSITIVE"|string;
  export interface WafAction {
    /**
     * Specifies how you want AWS WAF to respond to requests that match the settings in a Rule. Valid settings include the following:    ALLOW - AWS WAF allows requests    BLOCK - AWS WAF blocks requests    COUNT - AWS WAF increments a counter of the requests that match all of the conditions in the rule. AWS WAF then continues to inspect the web request based on the remaining rules in the web ACL. You can't specify COUNT for the default action for a WebACL.  
     */
    Type?: NonEmptyString;
  }
  export interface WafExcludedRule {
    /**
     * The unique identifier for the rule to exclude from the rule group.
     */
    RuleId?: NonEmptyString;
  }
  export type WafExcludedRuleList = WafExcludedRule[];
  export interface WafOverrideAction {
    /**
     *  COUNT overrides the action specified by the individual rule within a RuleGroup . If set to NONE, the rule's action takes place.
     */
    Type?: NonEmptyString;
  }
  export interface Workflow {
    /**
     * The status of the investigation into the finding. The allowed values are the following.    NEW - The initial state of a finding, before it is reviewed.    NOTIFIED - Indicates that you notified the resource owner about the security issue. Used when the initial reviewer is not the resource owner, and needs intervention from the resource owner.    SUPPRESSED - The finding will not be reviewed again and will not be acted upon.    RESOLVED - The finding was reviewed and remediated and is now considered resolved.   
     */
    Status?: WorkflowStatus;
  }
  export type WorkflowState = "NEW"|"ASSIGNED"|"IN_PROGRESS"|"DEFERRED"|"RESOLVED"|string;
  export type WorkflowStatus = "NEW"|"NOTIFIED"|"RESOLVED"|"SUPPRESSED"|string;
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
