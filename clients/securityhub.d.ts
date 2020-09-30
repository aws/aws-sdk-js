import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
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
   * Imports security findings generated from an integrated third-party product into Security Hub. This action is requested by the integrated product to import its findings into Security Hub. The maximum allowed size for a finding is 240 Kb. An error is returned for any finding larger than 240 Kb. After a finding is created, BatchImportFindings cannot be used to update the following finding fields and objects, which Security Hub customers use to manage their investigation workflow.    Confidence     Criticality     Note     RelatedFindings     Severity     Types     UserDefinedFields     VerificationState     Workflow   
   */
  batchImportFindings(params: SecurityHub.Types.BatchImportFindingsRequest, callback?: (err: AWSError, data: SecurityHub.Types.BatchImportFindingsResponse) => void): Request<SecurityHub.Types.BatchImportFindingsResponse, AWSError>;
  /**
   * Imports security findings generated from an integrated third-party product into Security Hub. This action is requested by the integrated product to import its findings into Security Hub. The maximum allowed size for a finding is 240 Kb. An error is returned for any finding larger than 240 Kb. After a finding is created, BatchImportFindings cannot be used to update the following finding fields and objects, which Security Hub customers use to manage their investigation workflow.    Confidence     Criticality     Note     RelatedFindings     Severity     Types     UserDefinedFields     VerificationState     Workflow   
   */
  batchImportFindings(callback?: (err: AWSError, data: SecurityHub.Types.BatchImportFindingsResponse) => void): Request<SecurityHub.Types.BatchImportFindingsResponse, AWSError>;
  /**
   * Used by Security Hub customers to update information about their investigation into a finding. Requested by master accounts or member accounts. Master accounts can update findings for their account and their member accounts. Member accounts can update findings for their account. Updates from BatchUpdateFindings do not affect the value of UpdatedAt for a finding. Master and member accounts can use BatchUpdateFindings to update the following finding fields and objects.    Confidence     Criticality     Note     RelatedFindings     Severity     Types     UserDefinedFields     VerificationState     Workflow    You can configure IAM policies to restrict access to fields and field values. For example, you might not want member accounts to be able to suppress findings or change the finding severity. See Configuring access to BatchUpdateFindings in the AWS Security Hub User Guide.
   */
  batchUpdateFindings(params: SecurityHub.Types.BatchUpdateFindingsRequest, callback?: (err: AWSError, data: SecurityHub.Types.BatchUpdateFindingsResponse) => void): Request<SecurityHub.Types.BatchUpdateFindingsResponse, AWSError>;
  /**
   * Used by Security Hub customers to update information about their investigation into a finding. Requested by master accounts or member accounts. Master accounts can update findings for their account and their member accounts. Member accounts can update findings for their account. Updates from BatchUpdateFindings do not affect the value of UpdatedAt for a finding. Master and member accounts can use BatchUpdateFindings to update the following finding fields and objects.    Confidence     Criticality     Note     RelatedFindings     Severity     Types     UserDefinedFields     VerificationState     Workflow    You can configure IAM policies to restrict access to fields and field values. For example, you might not want member accounts to be able to suppress findings or change the finding severity. See Configuring access to BatchUpdateFindings in the AWS Security Hub User Guide.
   */
  batchUpdateFindings(callback?: (err: AWSError, data: SecurityHub.Types.BatchUpdateFindingsResponse) => void): Request<SecurityHub.Types.BatchUpdateFindingsResponse, AWSError>;
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
   * Creates a member association in Security Hub between the specified accounts and the account used to make the request, which is the master account. To successfully create a member, you must use this action from an account that already has Security Hub enabled. To enable Security Hub, you can use the  EnableSecurityHub  operation. After you use CreateMembers to create member account associations in Security Hub, you must use the  InviteMembers  operation to invite the accounts to enable Security Hub and become member accounts in Security Hub. If the account owner accepts the invitation, the account becomes a member account in Security Hub. A permissions policy is added that permits the master account to view the findings generated in the member account. When Security Hub is enabled in the invited account, findings start to be sent to both the member and master accounts. To remove the association between the master and member accounts, use the  DisassociateFromMasterAccount  or  DisassociateMembers  operation.
   */
  createMembers(params: SecurityHub.Types.CreateMembersRequest, callback?: (err: AWSError, data: SecurityHub.Types.CreateMembersResponse) => void): Request<SecurityHub.Types.CreateMembersResponse, AWSError>;
  /**
   * Creates a member association in Security Hub between the specified accounts and the account used to make the request, which is the master account. To successfully create a member, you must use this action from an account that already has Security Hub enabled. To enable Security Hub, you can use the  EnableSecurityHub  operation. After you use CreateMembers to create member account associations in Security Hub, you must use the  InviteMembers  operation to invite the accounts to enable Security Hub and become member accounts in Security Hub. If the account owner accepts the invitation, the account becomes a member account in Security Hub. A permissions policy is added that permits the master account to view the findings generated in the member account. When Security Hub is enabled in the invited account, findings start to be sent to both the member and master accounts. To remove the association between the master and member accounts, use the  DisassociateFromMasterAccount  or  DisassociateMembers  operation.
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
   * Enables the integration of a partner product with Security Hub. Integrated products send findings to Security Hub. When you enable a product integration, a permissions policy that grants permission for the product to send findings to Security Hub is applied.
   */
  enableImportFindingsForProduct(params: SecurityHub.Types.EnableImportFindingsForProductRequest, callback?: (err: AWSError, data: SecurityHub.Types.EnableImportFindingsForProductResponse) => void): Request<SecurityHub.Types.EnableImportFindingsForProductResponse, AWSError>;
  /**
   * Enables the integration of a partner product with Security Hub. Integrated products send findings to Security Hub. When you enable a product integration, a permissions policy that grants permission for the product to send findings to Security Hub is applied.
   */
  enableImportFindingsForProduct(callback?: (err: AWSError, data: SecurityHub.Types.EnableImportFindingsForProductResponse) => void): Request<SecurityHub.Types.EnableImportFindingsForProductResponse, AWSError>;
  /**
   * Enables Security Hub for your account in the current Region or the Region you specify in the request. When you enable Security Hub, you grant to Security Hub the permissions necessary to gather findings from other services that are integrated with Security Hub. When you use the EnableSecurityHub operation to enable Security Hub, you also automatically enable the following standards.   CIS AWS Foundations   AWS Foundational Security Best Practices   You do not enable the Payment Card Industry Data Security Standard (PCI DSS) standard.  To not enable the automatically enabled standards, set EnableDefaultStandards to false. After you enable Security Hub, to enable a standard, use the  BatchEnableStandards  operation. To disable a standard, use the  BatchDisableStandards  operation. To learn more, see Setting Up AWS Security Hub in the AWS Security Hub User Guide.
   */
  enableSecurityHub(params: SecurityHub.Types.EnableSecurityHubRequest, callback?: (err: AWSError, data: SecurityHub.Types.EnableSecurityHubResponse) => void): Request<SecurityHub.Types.EnableSecurityHubResponse, AWSError>;
  /**
   * Enables Security Hub for your account in the current Region or the Region you specify in the request. When you enable Security Hub, you grant to Security Hub the permissions necessary to gather findings from other services that are integrated with Security Hub. When you use the EnableSecurityHub operation to enable Security Hub, you also automatically enable the following standards.   CIS AWS Foundations   AWS Foundational Security Best Practices   You do not enable the Payment Card Industry Data Security Standard (PCI DSS) standard.  To not enable the automatically enabled standards, set EnableDefaultStandards to false. After you enable Security Hub, to enable a standard, use the  BatchEnableStandards  operation. To disable a standard, use the  BatchDisableStandards  operation. To learn more, see Setting Up AWS Security Hub in the AWS Security Hub User Guide.
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
   *  UpdateFindings is deprecated. Instead of UpdateFindings, use BatchUpdateFindings. Updates the Note and RecordState of the Security Hub-aggregated findings that the filter attributes specify. Any member account that can view the finding also sees the update to the finding.
   */
  updateFindings(params: SecurityHub.Types.UpdateFindingsRequest, callback?: (err: AWSError, data: SecurityHub.Types.UpdateFindingsResponse) => void): Request<SecurityHub.Types.UpdateFindingsResponse, AWSError>;
  /**
   *  UpdateFindings is deprecated. Instead of UpdateFindings, use BatchUpdateFindings. Updates the Note and RecordState of the Security Hub-aggregated findings that the filter attributes specify. Any member account that can view the finding also sees the update to the finding.
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
   * Updates configuration options for Security Hub.
   */
  updateSecurityHubConfiguration(params: SecurityHub.Types.UpdateSecurityHubConfigurationRequest, callback?: (err: AWSError, data: SecurityHub.Types.UpdateSecurityHubConfigurationResponse) => void): Request<SecurityHub.Types.UpdateSecurityHubConfigurationResponse, AWSError>;
  /**
   * Updates configuration options for Security Hub.
   */
  updateSecurityHubConfiguration(callback?: (err: AWSError, data: SecurityHub.Types.UpdateSecurityHubConfigurationResponse) => void): Request<SecurityHub.Types.UpdateSecurityHubConfigurationResponse, AWSError>;
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
  export interface AwsApiGatewayAccessLogSettings {
    /**
     * A single-line format of the access logs of data, as specified by selected $context variables. The format must include at least $context.requestId.
     */
    Format?: NonEmptyString;
    /**
     * The ARN of the CloudWatch Logs log group that receives the access logs.
     */
    DestinationArn?: NonEmptyString;
  }
  export interface AwsApiGatewayCanarySettings {
    /**
     * The percentage of traffic that is diverted to a canary deployment.
     */
    PercentTraffic?: Double;
    /**
     * The deployment identifier for the canary deployment.
     */
    DeploymentId?: NonEmptyString;
    /**
     * Stage variables that are overridden in the canary release deployment. The variables include new stage variables that are introduced in the canary. Each variable is represented as a string-to-string map between the stage variable name and the variable value.
     */
    StageVariableOverrides?: FieldMap;
    /**
     * Indicates whether the canary deployment uses the stage cache.
     */
    UseStageCache?: Boolean;
  }
  export interface AwsApiGatewayEndpointConfiguration {
    /**
     * A list of endpoint types for the REST API. For an edge-optimized API, the endpoint type is EDGE. For a Regional API, the endpoint type is REGIONAL. For a private API, the endpoint type is PRIVATE.
     */
    Types?: NonEmptyStringList;
  }
  export interface AwsApiGatewayMethodSettings {
    /**
     * Indicates whether CloudWatch metrics are enabled for the method. 
     */
    MetricsEnabled?: Boolean;
    /**
     * The logging level for this method. The logging level affects the log entries that are pushed to CloudWatch Logs. If the logging level is ERROR, then the logs only include error-level entries. If the logging level is INFO, then the logs include both ERROR events and extra informational events. Valid values: OFF | ERROR | INFO 
     */
    LoggingLevel?: NonEmptyString;
    /**
     * Indicates whether data trace logging is enabled for the method. Data trace logging affects the log entries that are pushed to CloudWatch Logs.
     */
    DataTraceEnabled?: Boolean;
    /**
     * The throttling burst limit for the method.
     */
    ThrottlingBurstLimit?: Integer;
    /**
     * The throttling rate limit for the method.
     */
    ThrottlingRateLimit?: Double;
    /**
     * Indicates whether responses are cached and returned for requests. For responses to be cached, a cache cluster must be enabled on the stage.
     */
    CachingEnabled?: Boolean;
    /**
     * Specifies the time to live (TTL), in seconds, for cached responses. The higher the TTL, the longer the response is cached.
     */
    CacheTtlInSeconds?: Integer;
    /**
     * Indicates whether the cached responses are encrypted. 
     */
    CacheDataEncrypted?: Boolean;
    /**
     * Indicates whether authorization is required for a cache invalidation request.
     */
    RequireAuthorizationForCacheControl?: Boolean;
    /**
     * Indicates how to handle unauthorized requests for cache invalidation. Valid values: FAIL_WITH_403 | SUCCEED_WITH_RESPONSE_HEADER | SUCCEED_WITHOUT_RESPONSE_HEADER 
     */
    UnauthorizedCacheControlHeaderStrategy?: NonEmptyString;
    /**
     * The HTTP method. You can use an asterisk (*) as a wildcard to apply method settings to multiple methods.
     */
    HttpMethod?: NonEmptyString;
    /**
     * The resource path for this method. Forward slashes (/) are encoded as ~1 . The initial slash must include a forward slash. For example, the path value /resource/subresource must be encoded as /~1resource~1subresource. To specify the root path, use only a slash (/). You can use an asterisk (*) as a wildcard to apply method settings to multiple methods.
     */
    ResourcePath?: NonEmptyString;
  }
  export type AwsApiGatewayMethodSettingsList = AwsApiGatewayMethodSettings[];
  export interface AwsApiGatewayRestApiDetails {
    /**
     * The identifier of the REST API.
     */
    Id?: NonEmptyString;
    /**
     * The name of the REST API.
     */
    Name?: NonEmptyString;
    /**
     * A description of the REST API.
     */
    Description?: NonEmptyString;
    /**
     * Indicates when the API was created. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    CreatedDate?: NonEmptyString;
    /**
     * The version identifier for the REST API.
     */
    Version?: NonEmptyString;
    /**
     * The list of binary media types supported by the REST API.
     */
    BinaryMediaTypes?: NonEmptyStringList;
    /**
     * The minimum size in bytes of a payload before compression is enabled. If null, then compression is disabled. If 0, then all payloads are compressed.
     */
    MinimumCompressionSize?: Integer;
    /**
     * The source of the API key for metering requests according to a usage plan.  HEADER indicates whether to read the API key from the X-API-Key header of a request.  AUTHORIZER indicates whether to read the API key from the UsageIdentifierKey from a custom authorizer.
     */
    ApiKeySource?: NonEmptyString;
    /**
     * The endpoint configuration of the REST API.
     */
    EndpointConfiguration?: AwsApiGatewayEndpointConfiguration;
  }
  export interface AwsApiGatewayStageDetails {
    /**
     * The identifier of the deployment that the stage points to.
     */
    DeploymentId?: NonEmptyString;
    /**
     * The identifier of the client certificate for the stage.
     */
    ClientCertificateId?: NonEmptyString;
    /**
     * The name of the stage.
     */
    StageName?: NonEmptyString;
    /**
     * A description of the stage.
     */
    Description?: NonEmptyString;
    /**
     * Indicates whether a cache cluster is enabled for the stage.
     */
    CacheClusterEnabled?: Boolean;
    /**
     * If a cache cluster is enabled, the size of the cache cluster.
     */
    CacheClusterSize?: NonEmptyString;
    /**
     * If a cache cluster is enabled, the status of the cache cluster.
     */
    CacheClusterStatus?: NonEmptyString;
    /**
     * Defines the method settings for the stage.
     */
    MethodSettings?: AwsApiGatewayMethodSettingsList;
    /**
     * A map that defines the stage variables for the stage. Variable names can have alphanumeric and underscore characters. Variable values can contain the following characters:   Uppercase and lowercase letters   Numbers   Special characters -._~:/?#&amp;=,  
     */
    Variables?: FieldMap;
    /**
     * The version of the API documentation that is associated with the stage.
     */
    DocumentationVersion?: NonEmptyString;
    /**
     * Settings for logging access for the stage.
     */
    AccessLogSettings?: AwsApiGatewayAccessLogSettings;
    /**
     * Information about settings for canary deployment in the stage.
     */
    CanarySettings?: AwsApiGatewayCanarySettings;
    /**
     * Indicates whether active tracing with AWS X-Ray is enabled for the stage.
     */
    TracingEnabled?: Boolean;
    /**
     * Indicates when the stage was created. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    CreatedDate?: NonEmptyString;
    /**
     * Indicates when the stage was most recently updated. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    LastUpdatedDate?: NonEmptyString;
    /**
     * The ARN of the web ACL associated with the stage.
     */
    WebAclArn?: NonEmptyString;
  }
  export interface AwsApiGatewayV2ApiDetails {
    /**
     * The URI of the API.  Uses the format  &lt;api-id&gt;.execute-api.&lt;region&gt;.amazonaws.com  The stage name is typically appended to the URI to form a complete path to a deployed API stage.
     */
    ApiEndpoint?: NonEmptyString;
    /**
     * The identifier of the API.
     */
    ApiId?: NonEmptyString;
    /**
     * An API key selection expression. Supported only for WebSocket APIs. 
     */
    ApiKeySelectionExpression?: NonEmptyString;
    /**
     * Indicates when the API was created. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    CreatedDate?: NonEmptyString;
    /**
     * A description of the API.
     */
    Description?: NonEmptyString;
    /**
     * The version identifier for the API.
     */
    Version?: NonEmptyString;
    /**
     * The name of the API.
     */
    Name?: NonEmptyString;
    /**
     * The API protocol for the API. Valid values: WEBSOCKET | HTTP 
     */
    ProtocolType?: NonEmptyString;
    /**
     * The route selection expression for the API. For HTTP APIs, must be ${request.method} ${request.path}. This is the default value for HTTP APIs. For WebSocket APIs, there is no default value.
     */
    RouteSelectionExpression?: NonEmptyString;
    /**
     * A cross-origin resource sharing (CORS) configuration. Supported only for HTTP APIs.
     */
    CorsConfiguration?: AwsCorsConfiguration;
  }
  export interface AwsApiGatewayV2RouteSettings {
    /**
     * Indicates whether detailed metrics are enabled.
     */
    DetailedMetricsEnabled?: Boolean;
    /**
     * The logging level. The logging level affects the log entries that are pushed to CloudWatch Logs. Supported only for WebSocket APIs. If the logging level is ERROR, then the logs only include error-level entries. If the logging level is INFO, then the logs include both ERROR events and extra informational events. Valid values: OFF | ERROR | INFO 
     */
    LoggingLevel?: NonEmptyString;
    /**
     * Indicates whether data trace logging is enabled. Data trace logging affects the log entries that are pushed to CloudWatch Logs. Supported only for WebSocket APIs.
     */
    DataTraceEnabled?: Boolean;
    /**
     * The throttling burst limit.
     */
    ThrottlingBurstLimit?: Integer;
    /**
     * The throttling rate limit.
     */
    ThrottlingRateLimit?: Double;
  }
  export interface AwsApiGatewayV2StageDetails {
    /**
     * Indicates when the stage was created. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    CreatedDate?: NonEmptyString;
    /**
     * The description of the stage.
     */
    Description?: NonEmptyString;
    /**
     * Default route settings for the stage.
     */
    DefaultRouteSettings?: AwsApiGatewayV2RouteSettings;
    /**
     * The identifier of the deployment that the stage is associated with. 
     */
    DeploymentId?: NonEmptyString;
    /**
     * Indicates when the stage was most recently updated. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    LastUpdatedDate?: NonEmptyString;
    /**
     * The route settings for the stage.
     */
    RouteSettings?: AwsApiGatewayV2RouteSettings;
    /**
     * The name of the stage.
     */
    StageName?: NonEmptyString;
    /**
     * A map that defines the stage variables for the stage. Variable names can have alphanumeric and underscore characters. Variable values can contain the following characters:   Uppercase and lowercase letters   Numbers   Special characters -._~:/?#&amp;=,  
     */
    StageVariables?: FieldMap;
    /**
     * Information about settings for logging access for the stage.
     */
    AccessLogSettings?: AwsApiGatewayAccessLogSettings;
    /**
     * Indicates whether updates to an API automatically trigger a new deployment.
     */
    AutoDeploy?: Boolean;
    /**
     * The status of the last deployment of a stage. Supported only if the stage has automatic deployment enabled.
     */
    LastDeploymentStatusMessage?: NonEmptyString;
    /**
     * Indicates whether the stage is managed by API Gateway.
     */
    ApiGatewayManaged?: Boolean;
  }
  export interface AwsAutoScalingAutoScalingGroupDetails {
    /**
     * The name of the launch configuration.
     */
    LaunchConfigurationName?: NonEmptyString;
    /**
     * The list of load balancers associated with the group.
     */
    LoadBalancerNames?: StringList;
    /**
     * The service to use for the health checks.
     */
    HealthCheckType?: NonEmptyString;
    /**
     * The amount of time, in seconds, that Amazon EC2 Auto Scaling waits before it checks the health status of an EC2 instance that has come into service.
     */
    HealthCheckGracePeriod?: Integer;
    /**
     * Indicates when the auto scaling group was created. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    CreatedTime?: NonEmptyString;
  }
  export interface AwsCertificateManagerCertificateDetails {
    /**
     * The ARN of the private certificate authority (CA) that will be used to issue the certificate.
     */
    CertificateAuthorityArn?: NonEmptyString;
    /**
     * Indicates when the certificate was requested. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    CreatedAt?: NonEmptyString;
    /**
     * The fully qualified domain name (FQDN), such as www.example.com, that is secured by the certificate.
     */
    DomainName?: NonEmptyString;
    /**
     * Contains information about the initial validation of each domain name that occurs as a result of the RequestCertificate request. Only provided if the certificate type is AMAZON_ISSUED.
     */
    DomainValidationOptions?: AwsCertificateManagerCertificateDomainValidationOptions;
    /**
     * Contains a list of Extended Key Usage X.509 v3 extension objects. Each object specifies a purpose for which the certificate public key can be used and consists of a name and an object identifier (OID).
     */
    ExtendedKeyUsages?: AwsCertificateManagerCertificateExtendedKeyUsages;
    /**
     * For a failed certificate request, the reason for the failure. Valid values: NO_AVAILABLE_CONTACTS | ADDITIONAL_VERIFICATION_REQUIRED | DOMAIN_NOT_ALLOWED | INVALID_PUBLIC_DOMAIN | DOMAIN_VALIDATION_DENIED | CAA_ERROR | PCA_LIMIT_EXCEEDED | PCA_INVALID_ARN | PCA_INVALID_STATE | PCA_REQUEST_FAILED | PCA_NAME_CONSTRAINTS_VALIDATION | PCA_RESOURCE_NOT_FOUND | PCA_INVALID_ARGS | PCA_INVALID_DURATION | PCA_ACCESS_DENIED | SLR_NOT_FOUND | OTHER 
     */
    FailureReason?: NonEmptyString;
    /**
     * Indicates when the certificate was imported. Provided if the certificate type is IMPORTED. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    ImportedAt?: NonEmptyString;
    /**
     * The list of ARNs for the AWS resources that use the certificate.
     */
    InUseBy?: StringList;
    /**
     * Indicates when the certificate was issued. Provided if the certificate type is AMAZON_ISSUED. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    IssuedAt?: NonEmptyString;
    /**
     * The name of the certificate authority that issued and signed the certificate.
     */
    Issuer?: NonEmptyString;
    /**
     * The algorithm that was used to generate the public-private key pair. Valid values: RSA_2048 | RSA_1024 | RSA_4096 | EC_prime256v1 | EC_secp384r1 | EC_secp521r1 
     */
    KeyAlgorithm?: NonEmptyString;
    /**
     * A list of key usage X.509 v3 extension objects.
     */
    KeyUsages?: AwsCertificateManagerCertificateKeyUsages;
    /**
     * The time after which the certificate becomes invalid. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    NotAfter?: NonEmptyString;
    /**
     * The time before which the certificate is not valid. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    NotBefore?: NonEmptyString;
    /**
     * Provides a value that specifies whether to add the certificate to a transparency log.
     */
    Options?: AwsCertificateManagerCertificateOptions;
    /**
     * Whether the certificate is eligible for renewal. Valid values: ELIGIBLE | INELIGIBLE 
     */
    RenewalEligibility?: NonEmptyString;
    /**
     * Information about the status of the AWS Certificate Manager managed renewal for the certificate. Provided only when the certificate type is AMAZON_ISSUED.
     */
    RenewalSummary?: AwsCertificateManagerCertificateRenewalSummary;
    /**
     * The serial number of the certificate.
     */
    Serial?: NonEmptyString;
    /**
     * The algorithm that was used to sign the certificate.
     */
    SignatureAlgorithm?: NonEmptyString;
    /**
     * The status of the certificate. Valid values: PENDING_VALIDATION | ISSUED | INACTIVE | EXPIRED | VALIDATION_TIMED_OUT | REVOKED | FAILED 
     */
    Status?: NonEmptyString;
    /**
     * The name of the entity that is associated with the public key contained in the certificate.
     */
    Subject?: NonEmptyString;
    /**
     * One or more domain names (subject alternative names) included in the certificate. This list contains the domain names that are bound to the public key that is contained in the certificate. The subject alternative names include the canonical domain name (CN) of the certificate and additional domain names that can be used to connect to the website.
     */
    SubjectAlternativeNames?: StringList;
    /**
     * The source of the certificate. For certificates that AWS Certificate Manager provides, Type is AMAZON_ISSUED. For certificates that are imported with ImportCertificate, Type is IMPORTED. Valid values: IMPORTED | AMAZON_ISSUED | PRIVATE 
     */
    Type?: NonEmptyString;
  }
  export interface AwsCertificateManagerCertificateDomainValidationOption {
    /**
     * A fully qualified domain name (FQDN) in the certificate.
     */
    DomainName?: NonEmptyString;
    /**
     * The CNAME record that is added to the DNS database for domain validation.
     */
    ResourceRecord?: AwsCertificateManagerCertificateResourceRecord;
    /**
     * The domain name that AWS Certificate Manager uses to send domain validation emails.
     */
    ValidationDomain?: NonEmptyString;
    /**
     * A list of email addresses that AWS Certificate Manager uses to send domain validation emails.
     */
    ValidationEmails?: StringList;
    /**
     * The method used to validate the domain name.
     */
    ValidationMethod?: NonEmptyString;
    /**
     * The validation status of the domain name.
     */
    ValidationStatus?: NonEmptyString;
  }
  export type AwsCertificateManagerCertificateDomainValidationOptions = AwsCertificateManagerCertificateDomainValidationOption[];
  export interface AwsCertificateManagerCertificateExtendedKeyUsage {
    /**
     * The name of an extension value. Indicates the purpose for which the certificate public key can be used.
     */
    Name?: NonEmptyString;
    /**
     * An object identifier (OID) for the extension value. The format is numbers separated by periods.
     */
    OId?: NonEmptyString;
  }
  export type AwsCertificateManagerCertificateExtendedKeyUsages = AwsCertificateManagerCertificateExtendedKeyUsage[];
  export interface AwsCertificateManagerCertificateKeyUsage {
    /**
     * The key usage extension name.
     */
    Name?: NonEmptyString;
  }
  export type AwsCertificateManagerCertificateKeyUsages = AwsCertificateManagerCertificateKeyUsage[];
  export interface AwsCertificateManagerCertificateOptions {
    /**
     * Whether to add the certificate to a transparency log. Valid values: DISABLED | ENABLED 
     */
    CertificateTransparencyLoggingPreference?: NonEmptyString;
  }
  export interface AwsCertificateManagerCertificateRenewalSummary {
    /**
     * Information about the validation of each domain name in the certificate, as it pertains to AWS Certificate Manager managed renewal. Provided only when the certificate type is AMAZON_ISSUED.
     */
    DomainValidationOptions?: AwsCertificateManagerCertificateDomainValidationOptions;
    /**
     * The status of the AWS Certificate Manager managed renewal of the certificate. Valid values: PENDING_AUTO_RENEWAL | PENDING_VALIDATION | SUCCESS | FAILED 
     */
    RenewalStatus?: NonEmptyString;
    /**
     * The reason that a renewal request was unsuccessful. Valid values: NO_AVAILABLE_CONTACTS | ADDITIONAL_VERIFICATION_REQUIRED | DOMAIN_NOT_ALLOWED | INVALID_PUBLIC_DOMAIN | DOMAIN_VALIDATION_DENIED | CAA_ERROR | PCA_LIMIT_EXCEEDED | PCA_INVALID_ARN | PCA_INVALID_STATE | PCA_REQUEST_FAILED | PCA_NAME_CONSTRAINTS_VALIDATION | PCA_RESOURCE_NOT_FOUND | PCA_INVALID_ARGS | PCA_INVALID_DURATION | PCA_ACCESS_DENIED | SLR_NOT_FOUND | OTHER 
     */
    RenewalStatusReason?: NonEmptyString;
    /**
     * Indicates when the renewal summary was last updated. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    UpdatedAt?: NonEmptyString;
  }
  export interface AwsCertificateManagerCertificateResourceRecord {
    /**
     * The name of the resource.
     */
    Name?: NonEmptyString;
    /**
     * The type of resource.
     */
    Type?: NonEmptyString;
    /**
     * The value of the resource.
     */
    Value?: NonEmptyString;
  }
  export interface AwsCloudFrontDistributionCacheBehavior {
    /**
     * The protocol that viewers can use to access the files in an origin. You can specify the following options:    allow-all - Viewers can use HTTP or HTTPS.    redirect-to-https - CloudFront responds to HTTP requests with an HTTP status code of 301 (Moved Permanently) and the HTTPS URL. The viewer then uses the new URL to resubmit.    https-only - CloudFront responds to HTTP request with an HTTP status code of 403 (Forbidden).  
     */
    ViewerProtocolPolicy?: NonEmptyString;
  }
  export interface AwsCloudFrontDistributionCacheBehaviors {
    /**
     * The cache behaviors for the distribution.
     */
    Items?: AwsCloudFrontDistributionCacheBehaviorsItemList;
  }
  export type AwsCloudFrontDistributionCacheBehaviorsItemList = AwsCloudFrontDistributionCacheBehavior[];
  export interface AwsCloudFrontDistributionDefaultCacheBehavior {
    /**
     * The protocol that viewers can use to access the files in an origin. You can specify the following options:    allow-all - Viewers can use HTTP or HTTPS.    redirect-to-https - CloudFront responds to HTTP requests with an HTTP status code of 301 (Moved Permanently) and the HTTPS URL. The viewer then uses the new URL to resubmit.    https-only - CloudFront responds to HTTP request with an HTTP status code of 403 (Forbidden).  
     */
    ViewerProtocolPolicy?: NonEmptyString;
  }
  export interface AwsCloudFrontDistributionDetails {
    /**
     * Provides information about the cache configuration for the distribution.
     */
    CacheBehaviors?: AwsCloudFrontDistributionCacheBehaviors;
    /**
     * The default cache behavior for the configuration.
     */
    DefaultCacheBehavior?: AwsCloudFrontDistributionDefaultCacheBehavior;
    /**
     * The object that CloudFront sends in response to requests from the origin (for example, index.html) when a viewer requests the root URL for the distribution (http://www.example.com) instead of an object in your distribution (http://www.example.com/product-description.html). 
     */
    DefaultRootObject?: NonEmptyString;
    /**
     * The domain name corresponding to the distribution.
     */
    DomainName?: NonEmptyString;
    /**
     * The entity tag is a hash of the object.
     */
    ETag?: NonEmptyString;
    /**
     * Indicates when that the distribution was last modified. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
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
     * Provides information about the origin groups in the distribution.
     */
    OriginGroups?: AwsCloudFrontDistributionOriginGroups;
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
  export interface AwsCloudFrontDistributionOriginGroup {
    /**
     * Provides the criteria for an origin group to fail over.
     */
    FailoverCriteria?: AwsCloudFrontDistributionOriginGroupFailover;
  }
  export interface AwsCloudFrontDistributionOriginGroupFailover {
    /**
     * Information about the status codes that cause an origin group to fail over.
     */
    StatusCodes?: AwsCloudFrontDistributionOriginGroupFailoverStatusCodes;
  }
  export interface AwsCloudFrontDistributionOriginGroupFailoverStatusCodes {
    /**
     * The list of status code values that can cause a failover to the next origin.
     */
    Items?: AwsCloudFrontDistributionOriginGroupFailoverStatusCodesItemList;
    /**
     * The number of status codes that can cause a failover.
     */
    Quantity?: Integer;
  }
  export type AwsCloudFrontDistributionOriginGroupFailoverStatusCodesItemList = Integer[];
  export interface AwsCloudFrontDistributionOriginGroups {
    /**
     * The list of origin groups.
     */
    Items?: AwsCloudFrontDistributionOriginGroupsItemList;
  }
  export type AwsCloudFrontDistributionOriginGroupsItemList = AwsCloudFrontDistributionOriginGroup[];
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
    /**
     * An origin that is an S3 bucket that is not configured with static website hosting.
     */
    S3OriginConfig?: AwsCloudFrontDistributionOriginS3OriginConfig;
  }
  export type AwsCloudFrontDistributionOriginItemList = AwsCloudFrontDistributionOriginItem[];
  export interface AwsCloudFrontDistributionOriginS3OriginConfig {
    /**
     * The CloudFront origin access identity to associate with the origin.
     */
    OriginAccessIdentity?: NonEmptyString;
  }
  export interface AwsCloudFrontDistributionOrigins {
    /**
     * A complex type that contains origins or origin groups for this distribution.
     */
    Items?: AwsCloudFrontDistributionOriginItemList;
  }
  export interface AwsCloudTrailTrailDetails {
    /**
     * The ARN of the log group that CloudTrail logs are delivered to.
     */
    CloudWatchLogsLogGroupArn?: NonEmptyString;
    /**
     * The ARN of the role that the CloudWatch Logs endpoint assumes when it writes to the log group.
     */
    CloudWatchLogsRoleArn?: NonEmptyString;
    /**
     * Indicates whether the trail has custom event selectors.
     */
    HasCustomEventSelectors?: Boolean;
    /**
     * The Region where the trail was created.
     */
    HomeRegion?: NonEmptyString;
    /**
     * Indicates whether the trail publishes events from global services such as IAM to the log files.
     */
    IncludeGlobalServiceEvents?: Boolean;
    /**
     * Indicates whether the trail applies only to the current Region or to all Regions.
     */
    IsMultiRegionTrail?: Boolean;
    /**
     * Whether the trail is created for all accounts in an organization in AWS Organizations, or only for the current AWS account.
     */
    IsOrganizationTrail?: Boolean;
    /**
     * The AWS KMS key ID to use to encrypt the logs.
     */
    KmsKeyId?: NonEmptyString;
    /**
     * Indicates whether CloudTrail log file validation is enabled.
     */
    LogFileValidationEnabled?: Boolean;
    /**
     * The name of the trail.
     */
    Name?: NonEmptyString;
    /**
     * The name of the S3 bucket where the log files are published.
     */
    S3BucketName?: NonEmptyString;
    /**
     * The S3 key prefix. The key prefix is added after the name of the S3 bucket where the log files are published.
     */
    S3KeyPrefix?: NonEmptyString;
    /**
     * The ARN of the SNS topic that is used for notifications of log file delivery.
     */
    SnsTopicArn?: NonEmptyString;
    /**
     * The name of the SNS topic that is used for notifications of log file delivery.
     */
    SnsTopicName?: NonEmptyString;
    /**
     * The ARN of the trail.
     */
    TrailArn?: NonEmptyString;
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
     * The type of build environment to use for related builds. The environment type ARM_CONTAINER is available only in Regions US East (N. Virginia), US East (Ohio), US West (Oregon), Europe (Ireland), Asia Pacific (Mumbai), Asia Pacific (Tokyo), Asia Pacific (Sydney), and Europe (Frankfurt). The environment type LINUX_CONTAINER with compute type build.general1.2xlarge is available only in Regions US East (N. Virginia), US East (N. Virginia), US West (Oregon), Canada (Central), Europe (Ireland), Europe (London), Europe (Frankfurt), Asia Pacific (Tokyo), Asia Pacific (Seoul), Asia Pacific (Singapore), Asia Pacific (Sydney), China (Beijing), and China (Ningxia). The environment type LINUX_GPU_CONTAINER is available only in Regions US East (N. Virginia), US East (N. Virginia), US West (Oregon), Canada (Central), Europe (Ireland), Europe (London), Europe (Frankfurt), Asia Pacific (Tokyo), Asia Pacific (Seoul), Asia Pacific (Singapore), Asia Pacific (Sydney), China (Beijing), and China (Ningxia). Valid values: WINDOWS_CONTAINER | LINUX_CONTAINER | LINUX_GPU_CONTAINER | ARM_CONTAINER 
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
     * Information about the location of the source code to be built. Valid values include:   For source code settings that are specified in the source action of a pipeline in AWS CodePipeline, location should not be specified. If it is specified, AWS CodePipeline ignores it. This is because AWS CodePipeline uses the settings in a pipeline's source action instead of this value.   For source code in an AWS CodeCommit repository, the HTTPS clone URL to the repository that contains the source code and the build spec file (for example, https://git-codecommit.region-ID.amazonaws.com/v1/repos/repo-name ).   For source code in an S3 input bucket, one of the following.   The path to the ZIP file that contains the source code (for example, bucket-name/path/to/object-name.zip).    The path to the folder that contains the source code (for example, bucket-name/path/to/source-code/folder/).     For source code in a GitHub repository, the HTTPS clone URL to the repository that contains the source and the build spec file.   For source code in a Bitbucket repository, the HTTPS clone URL to the repository that contains the source and the build spec file.   
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
  export interface AwsCorsConfiguration {
    /**
     * The allowed origins for CORS requests.
     */
    AllowOrigins?: NonEmptyStringList;
    /**
     * Indicates whether the CORS request includes credentials.
     */
    AllowCredentials?: Boolean;
    /**
     * The exposed headers for CORS requests.
     */
    ExposeHeaders?: NonEmptyStringList;
    /**
     * The number of seconds for which the browser caches preflight request results.
     */
    MaxAge?: Integer;
    /**
     * The allowed methods for CORS requests.
     */
    AllowMethods?: NonEmptyStringList;
    /**
     * The allowed headers for CORS requests.
     */
    AllowHeaders?: NonEmptyStringList;
  }
  export interface AwsDynamoDbTableAttributeDefinition {
    /**
     * The name of the attribute.
     */
    AttributeName?: NonEmptyString;
    /**
     * The type of the attribute.
     */
    AttributeType?: NonEmptyString;
  }
  export type AwsDynamoDbTableAttributeDefinitionList = AwsDynamoDbTableAttributeDefinition[];
  export interface AwsDynamoDbTableBillingModeSummary {
    /**
     * The method used to charge for read and write throughput and to manage capacity.
     */
    BillingMode?: NonEmptyString;
    /**
     * If the billing mode is PAY_PER_REQUEST, indicates when the billing mode was set to that value. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    LastUpdateToPayPerRequestDateTime?: NonEmptyString;
  }
  export interface AwsDynamoDbTableDetails {
    /**
     * A list of attribute definitions for the table.
     */
    AttributeDefinitions?: AwsDynamoDbTableAttributeDefinitionList;
    /**
     * Information about the billing for read/write capacity on the table.
     */
    BillingModeSummary?: AwsDynamoDbTableBillingModeSummary;
    /**
     * Indicates when the table was created. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    CreationDateTime?: NonEmptyString;
    /**
     * List of global secondary indexes for the table.
     */
    GlobalSecondaryIndexes?: AwsDynamoDbTableGlobalSecondaryIndexList;
    /**
     * The version of global tables being used.
     */
    GlobalTableVersion?: NonEmptyString;
    /**
     * The number of items in the table.
     */
    ItemCount?: Integer;
    /**
     * The primary key structure for the table.
     */
    KeySchema?: AwsDynamoDbTableKeySchemaList;
    /**
     * The ARN of the latest stream for the table.
     */
    LatestStreamArn?: NonEmptyString;
    /**
     * The label of the latest stream. The label is not a unique identifier.
     */
    LatestStreamLabel?: NonEmptyString;
    /**
     * The list of local secondary indexes for the table.
     */
    LocalSecondaryIndexes?: AwsDynamoDbTableLocalSecondaryIndexList;
    /**
     * Information about the provisioned throughput for the table.
     */
    ProvisionedThroughput?: AwsDynamoDbTableProvisionedThroughput;
    /**
     * The list of replicas of this table.
     */
    Replicas?: AwsDynamoDbTableReplicaList;
    /**
     * Information about the restore for the table.
     */
    RestoreSummary?: AwsDynamoDbTableRestoreSummary;
    /**
     * Information about the server-side encryption for the table.
     */
    SseDescription?: AwsDynamoDbTableSseDescription;
    /**
     * The current DynamoDB Streams configuration for the table.
     */
    StreamSpecification?: AwsDynamoDbTableStreamSpecification;
    /**
     * The identifier of the table.
     */
    TableId?: NonEmptyString;
    /**
     * The name of the table.
     */
    TableName?: NonEmptyString;
    /**
     * The total size of the table in bytes.
     */
    TableSizeBytes?: SizeBytes;
    /**
     * The current status of the table.
     */
    TableStatus?: NonEmptyString;
  }
  export interface AwsDynamoDbTableGlobalSecondaryIndex {
    /**
     * Whether the index is currently backfilling.
     */
    Backfilling?: Boolean;
    /**
     * The ARN of the index.
     */
    IndexArn?: NonEmptyString;
    /**
     * The name of the index.
     */
    IndexName?: NonEmptyString;
    /**
     * The total size in bytes of the index.
     */
    IndexSizeBytes?: SizeBytes;
    /**
     * The current status of the index.
     */
    IndexStatus?: NonEmptyString;
    /**
     * The number of items in the index.
     */
    ItemCount?: Integer;
    /**
     * The key schema for the index.
     */
    KeySchema?: AwsDynamoDbTableKeySchemaList;
    /**
     * Attributes that are copied from the table into an index.
     */
    Projection?: AwsDynamoDbTableProjection;
    /**
     * Information about the provisioned throughput settings for the indexes.
     */
    ProvisionedThroughput?: AwsDynamoDbTableProvisionedThroughput;
  }
  export type AwsDynamoDbTableGlobalSecondaryIndexList = AwsDynamoDbTableGlobalSecondaryIndex[];
  export interface AwsDynamoDbTableKeySchema {
    /**
     * The name of the key schema attribute.
     */
    AttributeName?: NonEmptyString;
    /**
     * The type of key used for the key schema attribute.
     */
    KeyType?: NonEmptyString;
  }
  export type AwsDynamoDbTableKeySchemaList = AwsDynamoDbTableKeySchema[];
  export interface AwsDynamoDbTableLocalSecondaryIndex {
    /**
     * The ARN of the index.
     */
    IndexArn?: NonEmptyString;
    /**
     * The name of the index.
     */
    IndexName?: NonEmptyString;
    /**
     * The complete key schema for the index.
     */
    KeySchema?: AwsDynamoDbTableKeySchemaList;
    /**
     * Attributes that are copied from the table into the index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
     */
    Projection?: AwsDynamoDbTableProjection;
  }
  export type AwsDynamoDbTableLocalSecondaryIndexList = AwsDynamoDbTableLocalSecondaryIndex[];
  export interface AwsDynamoDbTableProjection {
    /**
     * The nonkey attributes that are projected into the index. For each attribute, provide the attribute name.
     */
    NonKeyAttributes?: StringList;
    /**
     * The types of attributes that are projected into the index.
     */
    ProjectionType?: NonEmptyString;
  }
  export interface AwsDynamoDbTableProvisionedThroughput {
    /**
     * Indicates when the provisioned throughput was last decreased. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    LastDecreaseDateTime?: NonEmptyString;
    /**
     * Indicates when the provisioned throughput was last increased. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    LastIncreaseDateTime?: NonEmptyString;
    /**
     * The number of times during the current UTC calendar day that the provisioned throughput was decreased.
     */
    NumberOfDecreasesToday?: Integer;
    /**
     * The maximum number of strongly consistent reads consumed per second before DynamoDB returns a ThrottlingException.
     */
    ReadCapacityUnits?: Integer;
    /**
     * The maximum number of writes consumed per second before DynamoDB returns a ThrottlingException.
     */
    WriteCapacityUnits?: Integer;
  }
  export interface AwsDynamoDbTableProvisionedThroughputOverride {
    /**
     * The read capacity units for the replica.
     */
    ReadCapacityUnits?: Integer;
  }
  export interface AwsDynamoDbTableReplica {
    /**
     * List of global secondary indexes for the replica.
     */
    GlobalSecondaryIndexes?: AwsDynamoDbTableReplicaGlobalSecondaryIndexList;
    /**
     * The identifier of the AWS KMS customer master key (CMK) that will be used for AWS KMS encryption for the replica.
     */
    KmsMasterKeyId?: NonEmptyString;
    /**
     * Replica-specific configuration for the provisioned throughput.
     */
    ProvisionedThroughputOverride?: AwsDynamoDbTableProvisionedThroughputOverride;
    /**
     * The name of the Region where the replica is located.
     */
    RegionName?: NonEmptyString;
    /**
     * The current status of the replica.
     */
    ReplicaStatus?: NonEmptyString;
    /**
     * Detailed information about the replica status.
     */
    ReplicaStatusDescription?: NonEmptyString;
  }
  export interface AwsDynamoDbTableReplicaGlobalSecondaryIndex {
    /**
     * The name of the index.
     */
    IndexName?: NonEmptyString;
    /**
     * Replica-specific configuration for the provisioned throughput for the index.
     */
    ProvisionedThroughputOverride?: AwsDynamoDbTableProvisionedThroughputOverride;
  }
  export type AwsDynamoDbTableReplicaGlobalSecondaryIndexList = AwsDynamoDbTableReplicaGlobalSecondaryIndex[];
  export type AwsDynamoDbTableReplicaList = AwsDynamoDbTableReplica[];
  export interface AwsDynamoDbTableRestoreSummary {
    /**
     * The ARN of the source backup from which the table was restored.
     */
    SourceBackupArn?: NonEmptyString;
    /**
     * The ARN of the source table for the backup.
     */
    SourceTableArn?: NonEmptyString;
    /**
     * Indicates the point in time that the table was restored to. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    RestoreDateTime?: NonEmptyString;
    /**
     * Whether a restore is currently in progress.
     */
    RestoreInProgress?: Boolean;
  }
  export interface AwsDynamoDbTableSseDescription {
    /**
     * If the key is inaccessible, the date and time when DynamoDB detected that the key was inaccessible. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    InaccessibleEncryptionDateTime?: NonEmptyString;
    /**
     * The status of the server-side encryption.
     */
    Status?: NonEmptyString;
    /**
     * The type of server-side encryption.
     */
    SseType?: NonEmptyString;
    /**
     * The ARN of the AWS KMS customer master key (CMK) that is used for the AWS KMS encryption.
     */
    KmsMasterKeyArn?: NonEmptyString;
  }
  export interface AwsDynamoDbTableStreamSpecification {
    /**
     * Indicates whether DynamoDB Streams is enabled on the table.
     */
    StreamEnabled?: Boolean;
    /**
     * Determines the information that is written to the table.
     */
    StreamViewType?: NonEmptyString;
  }
  export interface AwsEc2EipDetails {
    /**
     * The identifier of the EC2 instance.
     */
    InstanceId?: NonEmptyString;
    /**
     * A public IP address that is associated with the EC2 instance.
     */
    PublicIp?: NonEmptyString;
    /**
     * The identifier that AWS assigns to represent the allocation of the Elastic IP address for use with Amazon VPC.
     */
    AllocationId?: NonEmptyString;
    /**
     * The identifier that represents the association of the Elastic IP address with an EC2 instance.
     */
    AssociationId?: NonEmptyString;
    /**
     * The domain in which to allocate the address. If the address is for use with EC2 instances in a VPC, then Domain is vpc. Otherwise, Domain is standard. 
     */
    Domain?: NonEmptyString;
    /**
     * The identifier of an IP address pool. This parameter allows Amazon EC2 to select an IP address from the address pool.
     */
    PublicIpv4Pool?: NonEmptyString;
    /**
     * The name of the location from which the Elastic IP address is advertised.
     */
    NetworkBorderGroup?: NonEmptyString;
    /**
     * The identifier of the network interface.
     */
    NetworkInterfaceId?: NonEmptyString;
    /**
     * The AWS account ID of the owner of the network interface.
     */
    NetworkInterfaceOwnerId?: NonEmptyString;
    /**
     * The private IP address that is associated with the Elastic IP address.
     */
    PrivateIpAddress?: NonEmptyString;
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
     * Indicates when the instance was launched. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    LaunchedAt?: NonEmptyString;
  }
  export interface AwsEc2NetworkInterfaceAttachment {
    /**
     * Indicates when the attachment initiated. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
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
     * The IPv4 CIDR range. You can specify either a CIDR range or a source security group, but not both. To specify a single IPv4 address, use the /32 prefix length.
     */
    CidrIp?: NonEmptyString;
  }
  export type AwsEc2SecurityGroupIpRangeList = AwsEc2SecurityGroupIpRange[];
  export interface AwsEc2SecurityGroupIpv6Range {
    /**
     * The IPv6 CIDR range. You can specify either a CIDR range or a source security group, but not both. To specify a single IPv6 address, use the /128 prefix length.
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
  export interface AwsEc2VolumeAttachment {
    /**
     * The datetime when the attachment initiated.
     */
    AttachTime?: NonEmptyString;
    /**
     * Whether the EBS volume is deleted when the EC2 instance is terminated.
     */
    DeleteOnTermination?: Boolean;
    /**
     * The identifier of the EC2 instance.
     */
    InstanceId?: NonEmptyString;
    /**
     * The attachment state of the volume.
     */
    Status?: NonEmptyString;
  }
  export type AwsEc2VolumeAttachmentList = AwsEc2VolumeAttachment[];
  export interface AwsEc2VolumeDetails {
    /**
     * Indicates when the volume was created. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    CreateTime?: NonEmptyString;
    /**
     * Whether the volume is encrypted.
     */
    Encrypted?: Boolean;
    /**
     * The size of the volume, in GiBs.
     */
    Size?: Integer;
    /**
     * The snapshot from which the volume was created.
     */
    SnapshotId?: NonEmptyString;
    /**
     * The volume state.
     */
    Status?: NonEmptyString;
    /**
     * The ARN of the AWS Key Management Service (AWS KMS) customer master key (CMK) that was used to protect the volume encryption key for the volume.
     */
    KmsKeyId?: NonEmptyString;
    /**
     * The volume attachments.
     */
    Attachments?: AwsEc2VolumeAttachmentList;
  }
  export interface AwsEc2VpcDetails {
    /**
     * Information about the IPv4 CIDR blocks associated with the VPC.
     */
    CidrBlockAssociationSet?: CidrBlockAssociationList;
    /**
     * Information about the IPv6 CIDR blocks associated with the VPC.
     */
    Ipv6CidrBlockAssociationSet?: Ipv6CidrBlockAssociationList;
    /**
     * The identifier of the set of Dynamic Host Configuration Protocol (DHCP) options that are associated with the VPC. If the default options are associated with the VPC, then this is default.
     */
    DhcpOptionsId?: NonEmptyString;
    /**
     * The current state of the VPC.
     */
    State?: NonEmptyString;
  }
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
  export type AwsElbAppCookieStickinessPolicies = AwsElbAppCookieStickinessPolicy[];
  export interface AwsElbAppCookieStickinessPolicy {
    /**
     * The name of the application cookie used for stickiness.
     */
    CookieName?: NonEmptyString;
    /**
     * The mnemonic name for the policy being created. The name must be unique within the set of policies for the load balancer.
     */
    PolicyName?: NonEmptyString;
  }
  export type AwsElbLbCookieStickinessPolicies = AwsElbLbCookieStickinessPolicy[];
  export interface AwsElbLbCookieStickinessPolicy {
    /**
     * The amount of time, in seconds, after which the cookie is considered stale. If an expiration period is not specified, the stickiness session lasts for the duration of the browser session.
     */
    CookieExpirationPeriod?: Long;
    /**
     * The name of the policy. The name must be unique within the set of policies for the load balancer.
     */
    PolicyName?: NonEmptyString;
  }
  export interface AwsElbLoadBalancerAccessLog {
    /**
     * The interval in minutes for publishing the access logs. You can publish access logs either every 5 minutes or every 60 minutes.
     */
    EmitInterval?: Integer;
    /**
     * Indicates whether access logs are enabled for the load balancer.
     */
    Enabled?: Boolean;
    /**
     * The name of the S3 bucket where the access logs are stored.
     */
    S3BucketName?: NonEmptyString;
    /**
     * The logical hierarchy that was created for the S3 bucket. If a prefix is not provided, the log is placed at the root level of the bucket.
     */
    S3BucketPrefix?: NonEmptyString;
  }
  export interface AwsElbLoadBalancerAttributes {
    /**
     * Information about the access log configuration for the load balancer. If the access log is enabled, the load balancer captures detailed information about all requests. It delivers the information to a specified S3 bucket.
     */
    AccessLog?: AwsElbLoadBalancerAccessLog;
    /**
     * Information about the connection draining configuration for the load balancer. If connection draining is enabled, the load balancer allows existing requests to complete before it shifts traffic away from a deregistered or unhealthy instance.
     */
    ConnectionDraining?: AwsElbLoadBalancerConnectionDraining;
    /**
     * Connection settings for the load balancer. If an idle timeout is configured, the load balancer allows connections to remain idle for the specified duration. When a connection is idle, no data is sent over the connection.
     */
    ConnectionSettings?: AwsElbLoadBalancerConnectionSettings;
    /**
     * Cross-zone load balancing settings for the load balancer. If cross-zone load balancing is enabled, the load balancer routes the request traffic evenly across all instances regardless of the Availability Zones.
     */
    CrossZoneLoadBalancing?: AwsElbLoadBalancerCrossZoneLoadBalancing;
  }
  export interface AwsElbLoadBalancerBackendServerDescription {
    /**
     * The port on which the EC2 instance is listening.
     */
    InstancePort?: Integer;
    /**
     * The names of the policies that are enabled for the EC2 instance.
     */
    PolicyNames?: StringList;
  }
  export type AwsElbLoadBalancerBackendServerDescriptions = AwsElbLoadBalancerBackendServerDescription[];
  export interface AwsElbLoadBalancerConnectionDraining {
    /**
     * Indicates whether connection draining is enabled for the load balancer.
     */
    Enabled?: Boolean;
    /**
     * The maximum time, in seconds, to keep the existing connections open before deregistering the instances.
     */
    Timeout?: Integer;
  }
  export interface AwsElbLoadBalancerConnectionSettings {
    /**
     * The time, in seconds, that the connection can be idle (no data is sent over the connection) before it is closed by the load balancer.
     */
    IdleTimeout?: Integer;
  }
  export interface AwsElbLoadBalancerCrossZoneLoadBalancing {
    /**
     * Indicates whether cross-zone load balancing is enabled for the load balancer.
     */
    Enabled?: Boolean;
  }
  export interface AwsElbLoadBalancerDetails {
    /**
     * The list of Availability Zones for the load balancer.
     */
    AvailabilityZones?: StringList;
    /**
     * Information about the configuration of the EC2 instances.
     */
    BackendServerDescriptions?: AwsElbLoadBalancerBackendServerDescriptions;
    /**
     * The name of the Amazon Route 53 hosted zone for the load balancer.
     */
    CanonicalHostedZoneName?: NonEmptyString;
    /**
     * The ID of the Amazon Route 53 hosted zone for the load balancer.
     */
    CanonicalHostedZoneNameID?: NonEmptyString;
    /**
     * Indicates when the load balancer was created. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    CreatedTime?: NonEmptyString;
    /**
     * The DNS name of the load balancer.
     */
    DnsName?: NonEmptyString;
    /**
     * Information about the health checks that are conducted on the load balancer.
     */
    HealthCheck?: AwsElbLoadBalancerHealthCheck;
    /**
     * List of EC2 instances for the load balancer.
     */
    Instances?: AwsElbLoadBalancerInstances;
    /**
     * The policies that are enabled for the load balancer listeners.
     */
    ListenerDescriptions?: AwsElbLoadBalancerListenerDescriptions;
    /**
     * The attributes for a load balancer.
     */
    LoadBalancerAttributes?: AwsElbLoadBalancerAttributes;
    /**
     * The name of the load balancer.
     */
    LoadBalancerName?: NonEmptyString;
    /**
     * The policies for a load balancer.
     */
    Policies?: AwsElbLoadBalancerPolicies;
    /**
     * The type of load balancer. Only provided if the load balancer is in a VPC. If Scheme is internet-facing, the load balancer has a public DNS name that resolves to a public IP address. If Scheme is internal, the load balancer has a public DNS name that resolves to a private IP address.
     */
    Scheme?: NonEmptyString;
    /**
     * The security groups for the load balancer. Only provided if the load balancer is in a VPC.
     */
    SecurityGroups?: StringList;
    /**
     * Information about the security group for the load balancer. This is the security group that is used for inbound rules.
     */
    SourceSecurityGroup?: AwsElbLoadBalancerSourceSecurityGroup;
    /**
     * The list of subnet identifiers for the load balancer.
     */
    Subnets?: StringList;
    /**
     * The identifier of the VPC for the load balancer.
     */
    VpcId?: NonEmptyString;
  }
  export interface AwsElbLoadBalancerHealthCheck {
    /**
     * The number of consecutive health check successes required before the instance is moved to the Healthy state.
     */
    HealthyThreshold?: Integer;
    /**
     * The approximate interval, in seconds, between health checks of an individual instance.
     */
    Interval?: Integer;
    /**
     * The instance that is being checked. The target specifies the protocol and port. The available protocols are TCP, SSL, HTTP, and HTTPS. The range of valid ports is 1 through 65535. For the HTTP and HTTPS protocols, the target also specifies the ping path. For the TCP protocol, the target is specified as TCP: &lt;port&gt; . For the SSL protocol, the target is specified as SSL.&lt;port&gt; . For the HTTP and HTTPS protocols, the target is specified as  &lt;protocol&gt;:&lt;port&gt;/&lt;path to ping&gt; .
     */
    Target?: NonEmptyString;
    /**
     * The amount of time, in seconds, during which no response means a failed health check.
     */
    Timeout?: Integer;
    /**
     * The number of consecutive health check failures that must occur before the instance is moved to the Unhealthy state.
     */
    UnhealthyThreshold?: Integer;
  }
  export interface AwsElbLoadBalancerInstance {
    /**
     * The instance identifier.
     */
    InstanceId?: NonEmptyString;
  }
  export type AwsElbLoadBalancerInstances = AwsElbLoadBalancerInstance[];
  export interface AwsElbLoadBalancerListener {
    /**
     * The port on which the instance is listening.
     */
    InstancePort?: Integer;
    /**
     * The protocol to use to route traffic to instances. Valid values: HTTP | HTTPS | TCP | SSL 
     */
    InstanceProtocol?: NonEmptyString;
    /**
     * The port on which the load balancer is listening. On EC2-VPC, you can specify any port from the range 1-65535. On EC2-Classic, you can specify any port from the following list: 25, 80, 443, 465, 587, 1024-65535.
     */
    LoadBalancerPort?: Integer;
    /**
     * The load balancer transport protocol to use for routing. Valid values: HTTP | HTTPS | TCP | SSL 
     */
    Protocol?: NonEmptyString;
    /**
     * The ARN of the server certificate.
     */
    SslCertificateId?: NonEmptyString;
  }
  export interface AwsElbLoadBalancerListenerDescription {
    /**
     * Information about the listener.
     */
    Listener?: AwsElbLoadBalancerListener;
    /**
     * The policies enabled for the listener.
     */
    PolicyNames?: StringList;
  }
  export type AwsElbLoadBalancerListenerDescriptions = AwsElbLoadBalancerListenerDescription[];
  export interface AwsElbLoadBalancerPolicies {
    /**
     * The stickiness policies that are created using CreateAppCookieStickinessPolicy.
     */
    AppCookieStickinessPolicies?: AwsElbAppCookieStickinessPolicies;
    /**
     * The stickiness policies that are created using CreateLBCookieStickinessPolicy.
     */
    LbCookieStickinessPolicies?: AwsElbLbCookieStickinessPolicies;
    /**
     * The policies other than the stickiness policies.
     */
    OtherPolicies?: StringList;
  }
  export interface AwsElbLoadBalancerSourceSecurityGroup {
    /**
     * The name of the security group.
     */
    GroupName?: NonEmptyString;
    /**
     * The owner of the security group.
     */
    OwnerAlias?: NonEmptyString;
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
     * Indicates when the load balancer was created. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
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
     * Indicates when the IAM access key was created. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
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
    /**
     * The AWS account ID of the account for the key.
     */
    AccountId?: NonEmptyString;
    /**
     * The identifier of the access key.
     */
    AccessKeyId?: NonEmptyString;
    /**
     * Information about the session that the key was used for.
     */
    SessionContext?: AwsIamAccessKeySessionContext;
  }
  export interface AwsIamAccessKeySessionContext {
    /**
     * Attributes of the session that the key was used for.
     */
    Attributes?: AwsIamAccessKeySessionContextAttributes;
    /**
     * Information about the entity that created the session.
     */
    SessionIssuer?: AwsIamAccessKeySessionContextSessionIssuer;
  }
  export interface AwsIamAccessKeySessionContextAttributes {
    /**
     * Indicates whether the session used multi-factor authentication (MFA).
     */
    MfaAuthenticated?: Boolean;
    /**
     * Indicates when the session was created. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    CreationDate?: NonEmptyString;
  }
  export interface AwsIamAccessKeySessionContextSessionIssuer {
    /**
     * The type of principal (user, role, or group) that created the session.
     */
    Type?: NonEmptyString;
    /**
     * The principal ID of the principal (user, role, or group) that created the session.
     */
    PrincipalId?: NonEmptyString;
    /**
     * The ARN of the session.
     */
    Arn?: NonEmptyString;
    /**
     * The identifier of the AWS account that created the session.
     */
    AccountId?: NonEmptyString;
    /**
     * The name of the principal that created the session.
     */
    UserName?: NonEmptyString;
  }
  export type AwsIamAccessKeyStatus = "Active"|"Inactive"|string;
  export interface AwsIamAttachedManagedPolicy {
    /**
     * The name of the policy.
     */
    PolicyName?: NonEmptyString;
    /**
     * The ARN of the policy.
     */
    PolicyArn?: NonEmptyString;
  }
  export type AwsIamAttachedManagedPolicyList = AwsIamAttachedManagedPolicy[];
  export interface AwsIamGroupDetails {
    /**
     * A list of the managed policies that are attached to the IAM group.
     */
    AttachedManagedPolicies?: AwsIamAttachedManagedPolicyList;
    /**
     * Indicates when the IAM group was created. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    CreateDate?: NonEmptyString;
    /**
     * The identifier of the IAM group.
     */
    GroupId?: NonEmptyString;
    /**
     * The name of the IAM group.
     */
    GroupName?: NonEmptyString;
    /**
     * The list of inline policies that are embedded in the group.
     */
    GroupPolicyList?: AwsIamGroupPolicyList;
    /**
     * The path to the group.
     */
    Path?: NonEmptyString;
  }
  export interface AwsIamGroupPolicy {
    /**
     * The name of the policy.
     */
    PolicyName?: NonEmptyString;
  }
  export type AwsIamGroupPolicyList = AwsIamGroupPolicy[];
  export interface AwsIamInstanceProfile {
    /**
     * The ARN of the instance profile.
     */
    Arn?: NonEmptyString;
    /**
     * Indicates when the instance profile was created. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    CreateDate?: NonEmptyString;
    /**
     * The identifier of the instance profile.
     */
    InstanceProfileId?: NonEmptyString;
    /**
     * The name of the instance profile.
     */
    InstanceProfileName?: NonEmptyString;
    /**
     * The path to the instance profile.
     */
    Path?: NonEmptyString;
    /**
     * The roles associated with the instance profile.
     */
    Roles?: AwsIamInstanceProfileRoles;
  }
  export type AwsIamInstanceProfileList = AwsIamInstanceProfile[];
  export interface AwsIamInstanceProfileRole {
    /**
     * The ARN of the role.
     */
    Arn?: NonEmptyString;
    /**
     * The policy that grants an entity permission to assume the role.
     */
    AssumeRolePolicyDocument?: AwsIamRoleAssumeRolePolicyDocument;
    /**
     * Indicates when the role was created. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    CreateDate?: NonEmptyString;
    /**
     * The path to the role.
     */
    Path?: NonEmptyString;
    /**
     * The identifier of the role.
     */
    RoleId?: NonEmptyString;
    /**
     * The name of the role.
     */
    RoleName?: NonEmptyString;
  }
  export type AwsIamInstanceProfileRoles = AwsIamInstanceProfileRole[];
  export interface AwsIamPermissionsBoundary {
    /**
     * The ARN of the policy used to set the permissions boundary.
     */
    PermissionsBoundaryArn?: NonEmptyString;
    /**
     * The usage type for the permissions boundary.
     */
    PermissionsBoundaryType?: NonEmptyString;
  }
  export interface AwsIamPolicyDetails {
    /**
     * The number of users, groups, and roles that the policy is attached to.
     */
    AttachmentCount?: Integer;
    /**
     * When the policy was created. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    CreateDate?: NonEmptyString;
    /**
     * The identifier of the default version of the policy.
     */
    DefaultVersionId?: NonEmptyString;
    /**
     * A description of the policy.
     */
    Description?: NonEmptyString;
    /**
     * Whether the policy can be attached to a user, group, or role.
     */
    IsAttachable?: Boolean;
    /**
     * The path to the policy.
     */
    Path?: NonEmptyString;
    /**
     * The number of users and roles that use the policy to set the permissions boundary.
     */
    PermissionsBoundaryUsageCount?: Integer;
    /**
     * The unique identifier of the policy.
     */
    PolicyId?: NonEmptyString;
    /**
     * The name of the policy.
     */
    PolicyName?: NonEmptyString;
    /**
     * List of versions of the policy.
     */
    PolicyVersionList?: AwsIamPolicyVersionList;
    /**
     * When the policy was most recently updated. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    UpdateDate?: NonEmptyString;
  }
  export interface AwsIamPolicyVersion {
    /**
     * The identifier of the policy version.
     */
    VersionId?: NonEmptyString;
    /**
     * Whether the version is the default version.
     */
    IsDefaultVersion?: Boolean;
    /**
     * Indicates when the version was created. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    CreateDate?: NonEmptyString;
  }
  export type AwsIamPolicyVersionList = AwsIamPolicyVersion[];
  export type AwsIamRoleAssumeRolePolicyDocument = string;
  export interface AwsIamRoleDetails {
    /**
     * The trust policy that grants permission to assume the role.
     */
    AssumeRolePolicyDocument?: AwsIamRoleAssumeRolePolicyDocument;
    /**
     * The list of the managed policies that are attached to the role.
     */
    AttachedManagedPolicies?: AwsIamAttachedManagedPolicyList;
    /**
     * Indicates when the role was created. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    CreateDate?: NonEmptyString;
    /**
     * The list of instance profiles that contain this role.
     */
    InstanceProfileList?: AwsIamInstanceProfileList;
    PermissionsBoundary?: AwsIamPermissionsBoundary;
    /**
     * The stable and unique string identifying the role.
     */
    RoleId?: NonEmptyString;
    /**
     * The friendly name that identifies the role.
     */
    RoleName?: NonEmptyString;
    /**
     * The list of inline policies that are embedded in the role.
     */
    RolePolicyList?: AwsIamRolePolicyList;
    /**
     * The maximum session duration (in seconds) that you want to set for the specified role.
     */
    MaxSessionDuration?: Integer;
    /**
     * The path to the role.
     */
    Path?: NonEmptyString;
  }
  export interface AwsIamRolePolicy {
    /**
     * The name of the policy.
     */
    PolicyName?: NonEmptyString;
  }
  export type AwsIamRolePolicyList = AwsIamRolePolicy[];
  export interface AwsIamUserDetails {
    /**
     * A list of the managed policies that are attached to the user.
     */
    AttachedManagedPolicies?: AwsIamAttachedManagedPolicyList;
    /**
     * Indicates when the user was created. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    CreateDate?: NonEmptyString;
    /**
     * A list of IAM groups that the user belongs to.
     */
    GroupList?: StringList;
    /**
     * The path to the user.
     */
    Path?: NonEmptyString;
    /**
     * The permissions boundary for the user.
     */
    PermissionsBoundary?: AwsIamPermissionsBoundary;
    /**
     * The unique identifier for the user.
     */
    UserId?: NonEmptyString;
    /**
     * The name of the user.
     */
    UserName?: NonEmptyString;
    /**
     * The list of inline policies that are embedded in the user.
     */
    UserPolicyList?: AwsIamUserPolicyList;
  }
  export interface AwsIamUserPolicy {
    /**
     * The name of the policy.
     */
    PolicyName?: NonEmptyString;
  }
  export type AwsIamUserPolicyList = AwsIamUserPolicy[];
  export interface AwsKmsKeyDetails {
    /**
     * The twelve-digit account ID of the AWS account that owns the CMK.
     */
    AWSAccountId?: NonEmptyString;
    /**
     * Indicates when the CMK was created. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
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
    /**
     * A description of the key.
     */
    Description?: NonEmptyString;
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
     * Indicates when the function was last updated. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
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
     * The layer's compatible runtimes. Maximum number of five items. Valid values: nodejs10.x | nodejs12.x | java8 | java11 | python2.7 | python3.6 | python3.7 | python3.8 | dotnetcore1.0 | dotnetcore2.1 | go1.x | ruby2.5 | provided 
     */
    CompatibleRuntimes?: NonEmptyStringList;
    /**
     * Indicates when the version was created. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    CreatedDate?: NonEmptyString;
  }
  export type AwsLambdaLayerVersionNumber = number;
  export interface AwsRdsDbClusterAssociatedRole {
    /**
     * The ARN of the IAM role.
     */
    RoleArn?: NonEmptyString;
    /**
     * The status of the association between the IAM role and the DB cluster.
     */
    Status?: NonEmptyString;
  }
  export type AwsRdsDbClusterAssociatedRoles = AwsRdsDbClusterAssociatedRole[];
  export interface AwsRdsDbClusterDetails {
    /**
     * For all database engines except Aurora, specifies the allocated storage size in gibibytes (GiB).
     */
    AllocatedStorage?: Integer;
    /**
     * A list of Availability Zones (AZs) where instances in the DB cluster can be created.
     */
    AvailabilityZones?: StringList;
    /**
     * The number of days for which automated backups are retained.
     */
    BackupRetentionPeriod?: Integer;
    /**
     * The name of the database.
     */
    DatabaseName?: NonEmptyString;
    /**
     * The current status of this DB cluster.
     */
    Status?: NonEmptyString;
    /**
     * The connection endpoint for the primary instance of the DB cluster.
     */
    Endpoint?: NonEmptyString;
    /**
     * The reader endpoint for the DB cluster.
     */
    ReaderEndpoint?: NonEmptyString;
    /**
     * A list of custom endpoints for the DB cluster.
     */
    CustomEndpoints?: StringList;
    /**
     * Whether the DB cluster has instances in multiple Availability Zones.
     */
    MultiAz?: Boolean;
    /**
     * The name of the database engine to use for this DB cluster.
     */
    Engine?: NonEmptyString;
    /**
     * The version number of the database engine to use.
     */
    EngineVersion?: NonEmptyString;
    /**
     * The port number on which the DB instances in the DB cluster accept connections.
     */
    Port?: Integer;
    /**
     * The name of the master user for the DB cluster.
     */
    MasterUsername?: NonEmptyString;
    /**
     * The range of time each day when automated backups are created, if automated backups are enabled. Uses the format HH:MM-HH:MM. For example, 04:52-05:22.
     */
    PreferredBackupWindow?: NonEmptyString;
    /**
     * The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). Uses the format &lt;day&gt;:HH:MM-&lt;day&gt;:HH:MM. For the day values, use mon|tue|wed|thu|fri|sat|sun. For example, sun:09:32-sun:10:02.
     */
    PreferredMaintenanceWindow?: NonEmptyString;
    /**
     * The identifiers of the read replicas that are associated with this DB cluster.
     */
    ReadReplicaIdentifiers?: StringList;
    /**
     * A list of VPC security groups that the DB cluster belongs to.
     */
    VpcSecurityGroups?: AwsRdsDbInstanceVpcSecurityGroups;
    /**
     * Specifies the identifier that Amazon Route 53 assigns when you create a hosted zone.
     */
    HostedZoneId?: NonEmptyString;
    /**
     * Whether the DB cluster is encrypted.
     */
    StorageEncrypted?: Boolean;
    /**
     * The ARN of the AWS KMS master key that is used to encrypt the database instances in the DB cluster.
     */
    KmsKeyId?: NonEmptyString;
    /**
     * The identifier of the DB cluster. The identifier must be unique within each AWS Region and is immutable.
     */
    DbClusterResourceId?: NonEmptyString;
    /**
     * A list of the IAM roles that are associated with the DB cluster.
     */
    AssociatedRoles?: AwsRdsDbClusterAssociatedRoles;
    /**
     * Indicates when the DB cluster was created, in Universal Coordinated Time (UTC). Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    ClusterCreateTime?: NonEmptyString;
    /**
     * A list of log types that this DB cluster is configured to export to CloudWatch Logs.
     */
    EnabledCloudWatchLogsExports?: StringList;
    /**
     * The database engine mode of the DB cluster.
     */
    EngineMode?: NonEmptyString;
    /**
     * Whether the DB cluster has deletion protection enabled.
     */
    DeletionProtection?: Boolean;
    /**
     * Whether the HTTP endpoint for an Aurora Serverless DB cluster is enabled.
     */
    HttpEndpointEnabled?: Boolean;
    /**
     * The status of the database activity stream.
     */
    ActivityStreamStatus?: NonEmptyString;
    /**
     * Whether tags are copied from the DB cluster to snapshots of the DB cluster.
     */
    CopyTagsToSnapshot?: Boolean;
    /**
     * Whether the DB cluster is a clone of a DB cluster owned by a different AWS account.
     */
    CrossAccountClone?: Boolean;
    /**
     * The Active Directory domain membership records that are associated with the DB cluster.
     */
    DomainMemberships?: AwsRdsDbDomainMemberships;
    /**
     * The name of the DB cluster parameter group for the DB cluster.
     */
    DbClusterParameterGroup?: NonEmptyString;
    /**
     * The subnet group that is associated with the DB cluster, including the name, description, and subnets in the subnet group.
     */
    DbSubnetGroup?: NonEmptyString;
    /**
     * The list of option group memberships for this DB cluster.
     */
    DbClusterOptionGroupMemberships?: AwsRdsDbClusterOptionGroupMemberships;
    /**
     * The DB cluster identifier that the user assigned to the cluster. This identifier is the unique key that identifies a DB cluster.
     */
    DbClusterIdentifier?: NonEmptyString;
    /**
     * The list of instances that make up the DB cluster.
     */
    DbClusterMembers?: AwsRdsDbClusterMembers;
    /**
     * Whether the mapping of IAM accounts to database accounts is enabled.
     */
    IamDatabaseAuthenticationEnabled?: Boolean;
  }
  export interface AwsRdsDbClusterMember {
    /**
     * Whether the cluster member is the primary instance for the DB cluster.
     */
    IsClusterWriter?: Boolean;
    /**
     * Specifies the order in which an Aurora replica is promoted to the primary instance when the existing primary instance fails.
     */
    PromotionTier?: Integer;
    /**
     * The instance identifier for this member of the DB cluster.
     */
    DbInstanceIdentifier?: NonEmptyString;
    /**
     * The status of the DB cluster parameter group for this member of the DB cluster.
     */
    DbClusterParameterGroupStatus?: NonEmptyString;
  }
  export type AwsRdsDbClusterMembers = AwsRdsDbClusterMember[];
  export interface AwsRdsDbClusterOptionGroupMembership {
    /**
     * The name of the DB cluster option group.
     */
    DbClusterOptionGroupName?: NonEmptyString;
    /**
     * The status of the DB cluster option group.
     */
    Status?: NonEmptyString;
  }
  export type AwsRdsDbClusterOptionGroupMemberships = AwsRdsDbClusterOptionGroupMembership[];
  export interface AwsRdsDbClusterSnapshotDetails {
    /**
     * A list of Availability Zones where instances in the DB cluster can be created.
     */
    AvailabilityZones?: StringList;
    /**
     * Indicates when the snapshot was taken. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    SnapshotCreateTime?: NonEmptyString;
    /**
     * 
     */
    Engine?: NonEmptyString;
    /**
     * Specifies the allocated storage size in gibibytes (GiB).
     */
    AllocatedStorage?: Integer;
    /**
     * The status of this DB cluster snapshot.
     */
    Status?: NonEmptyString;
    /**
     * The port number on which the DB instances in the DB cluster accept connections.
     */
    Port?: Integer;
    /**
     * The VPC ID that is associated with the DB cluster snapshot.
     */
    VpcId?: NonEmptyString;
    /**
     * Indicates when the DB cluster was created, in Universal Coordinated Time (UTC). Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    ClusterCreateTime?: NonEmptyString;
    /**
     * The name of the master user for the DB cluster.
     */
    MasterUsername?: NonEmptyString;
    /**
     * The version of the database engine to use.
     */
    EngineVersion?: NonEmptyString;
    /**
     * The license model information for this DB cluster snapshot.
     */
    LicenseModel?: NonEmptyString;
    /**
     * The type of DB cluster snapshot.
     */
    SnapshotType?: NonEmptyString;
    /**
     * Specifies the percentage of the estimated data that has been transferred.
     */
    PercentProgress?: Integer;
    /**
     * Whether the DB cluster is encrypted.
     */
    StorageEncrypted?: Boolean;
    /**
     * The ARN of the AWS KMS master key that is used to encrypt the database instances in the DB cluster.
     */
    KmsKeyId?: NonEmptyString;
    /**
     * The DB cluster identifier.
     */
    DbClusterIdentifier?: NonEmptyString;
    /**
     * The identifier of the DB cluster snapshot.
     */
    DbClusterSnapshotIdentifier?: NonEmptyString;
    /**
     * Whether mapping of IAM accounts to database accounts is enabled.
     */
    IamDatabaseAuthenticationEnabled?: Boolean;
  }
  export interface AwsRdsDbDomainMembership {
    /**
     * The identifier of the Active Directory domain.
     */
    Domain?: NonEmptyString;
    /**
     * The status of the Active Directory Domain membership for the DB instance.
     */
    Status?: NonEmptyString;
    /**
     * The fully qualified domain name of the Active Directory domain.
     */
    Fqdn?: NonEmptyString;
    /**
     * The name of the IAM role to use when making API calls to the Directory Service.
     */
    IamRoleName?: NonEmptyString;
  }
  export type AwsRdsDbDomainMemberships = AwsRdsDbDomainMembership[];
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
     * Describes the state of the association between the IAM role and the DB instance. The Status property returns one of the following values:    ACTIVE - The IAM role ARN is associated with the DB instance and can be used to access other AWS services on your behalf.    PENDING - The IAM role ARN is being associated with the DB instance.    INVALID - The IAM role ARN is associated with the DB instance. But the DB instance is unable to assume the IAM role in order to access other AWS services on your behalf.   
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
     * Indicates when the DB instance was created. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
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
    /**
     * Whether the DB instance is a multiple Availability Zone deployment.
     */
    MultiAz?: Boolean;
    /**
     * The ARN of the CloudWatch Logs log stream that receives the enhanced monitoring metrics data for the DB instance.
     */
    EnhancedMonitoringResourceArn?: NonEmptyString;
    /**
     * The current status of the DB instance.
     */
    DbInstanceStatus?: NonEmptyString;
    /**
     * The master user name of the DB instance.
     */
    MasterUsername?: NonEmptyString;
    /**
     * The amount of storage (in gigabytes) to initially allocate for the DB instance.
     */
    AllocatedStorage?: Integer;
    /**
     * The range of time each day when automated backups are created, if automated backups are enabled. Uses the format HH:MM-HH:MM. For example, 04:52-05:22.
     */
    PreferredBackupWindow?: NonEmptyString;
    /**
     * The number of days for which to retain automated backups.
     */
    BackupRetentionPeriod?: Integer;
    /**
     * A list of the DB security groups to assign to the DB instance.
     */
    DbSecurityGroups?: StringList;
    /**
     * A list of the DB parameter groups to assign to the DB instance.
     */
    DbParameterGroups?: AwsRdsDbParameterGroups;
    /**
     * The Availability Zone where the DB instance will be created.
     */
    AvailabilityZone?: NonEmptyString;
    /**
     * Information about the subnet group that is associated with the DB instance.
     */
    DbSubnetGroup?: AwsRdsDbSubnetGroup;
    /**
     * The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). Uses the format &lt;day&gt;:HH:MM-&lt;day&gt;:HH:MM. For the day values, use mon|tue|wed|thu|fri|sat|sun. For example, sun:09:32-sun:10:02.
     */
    PreferredMaintenanceWindow?: NonEmptyString;
    /**
     * Changes to the DB instance that are currently pending.
     */
    PendingModifiedValues?: AwsRdsDbPendingModifiedValues;
    /**
     * Specifies the latest time to which a database can be restored with point-in-time restore. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    LatestRestorableTime?: NonEmptyString;
    /**
     * Indicates whether minor version patches are applied automatically.
     */
    AutoMinorVersionUpgrade?: Boolean;
    /**
     * If this DB instance is a read replica, contains the identifier of the source DB instance.
     */
    ReadReplicaSourceDBInstanceIdentifier?: NonEmptyString;
    /**
     * List of identifiers of the read replicas associated with this DB instance.
     */
    ReadReplicaDBInstanceIdentifiers?: StringList;
    /**
     * List of identifiers of Aurora DB clusters to which the RDS DB instance is replicated as a read replica.
     */
    ReadReplicaDBClusterIdentifiers?: StringList;
    /**
     * License model information for this DB instance.
     */
    LicenseModel?: NonEmptyString;
    /**
     * Specifies the provisioned IOPS (I/O operations per second) for this DB instance.
     */
    Iops?: Integer;
    /**
     * The list of option group memberships for this DB instance.
     */
    OptionGroupMemberships?: AwsRdsDbOptionGroupMemberships;
    /**
     * The name of the character set that this DB instance is associated with.
     */
    CharacterSetName?: NonEmptyString;
    /**
     * For a DB instance with multi-Availability Zone support, the name of the secondary Availability Zone.
     */
    SecondaryAvailabilityZone?: NonEmptyString;
    /**
     * The status of a read replica. If the instance isn't a read replica, this is empty.
     */
    StatusInfos?: AwsRdsDbStatusInfos;
    /**
     * The storage type for the DB instance.
     */
    StorageType?: NonEmptyString;
    /**
     * The Active Directory domain membership records associated with the DB instance.
     */
    DomainMemberships?: AwsRdsDbDomainMemberships;
    /**
     * Whether to copy resource tags to snapshots of the DB instance.
     */
    CopyTagsToSnapshot?: Boolean;
    /**
     * The interval, in seconds, between points when enhanced monitoring metrics are collected for the DB instance.
     */
    MonitoringInterval?: Integer;
    /**
     * The ARN for the IAM role that permits Amazon RDS to send enhanced monitoring metrics to CloudWatch Logs.
     */
    MonitoringRoleArn?: NonEmptyString;
    /**
     * The order in which to promote an Aurora replica to the primary instance after a failure of the existing primary instance.
     */
    PromotionTier?: Integer;
    /**
     * The time zone of the DB instance.
     */
    Timezone?: NonEmptyString;
    /**
     * Indicates whether Performance Insights is enabled for the DB instance.
     */
    PerformanceInsightsEnabled?: Boolean;
    /**
     * The identifier of the AWS KMS key used to encrypt the Performance Insights data.
     */
    PerformanceInsightsKmsKeyId?: NonEmptyString;
    /**
     * The number of days to retain Performance Insights data.
     */
    PerformanceInsightsRetentionPeriod?: Integer;
    /**
     * A list of log types that this DB instance is configured to export to CloudWatch Logs.
     */
    EnabledCloudWatchLogsExports?: StringList;
    /**
     * The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.
     */
    ProcessorFeatures?: AwsRdsDbProcessorFeatures;
    ListenerEndpoint?: AwsRdsDbInstanceEndpoint;
    /**
     * The upper limit to which Amazon RDS can automatically scale the storage of the DB instance.
     */
    MaxAllocatedStorage?: Integer;
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
  export interface AwsRdsDbOptionGroupMembership {
    /**
     * 
     */
    OptionGroupName?: NonEmptyString;
    /**
     * 
     */
    Status?: NonEmptyString;
  }
  export type AwsRdsDbOptionGroupMemberships = AwsRdsDbOptionGroupMembership[];
  export interface AwsRdsDbParameterGroup {
    /**
     * 
     */
    DbParameterGroupName?: NonEmptyString;
    /**
     * 
     */
    ParameterApplyStatus?: NonEmptyString;
  }
  export type AwsRdsDbParameterGroups = AwsRdsDbParameterGroup[];
  export interface AwsRdsDbPendingModifiedValues {
    /**
     * 
     */
    DbInstanceClass?: NonEmptyString;
    /**
     * 
     */
    AllocatedStorage?: Integer;
    /**
     * 
     */
    MasterUserPassword?: NonEmptyString;
    /**
     * 
     */
    Port?: Integer;
    /**
     * 
     */
    BackupRetentionPeriod?: Integer;
    /**
     * 
     */
    MultiAZ?: Boolean;
    /**
     * 
     */
    EngineVersion?: NonEmptyString;
    /**
     * 
     */
    LicenseModel?: NonEmptyString;
    /**
     * 
     */
    Iops?: Integer;
    /**
     * 
     */
    DbInstanceIdentifier?: NonEmptyString;
    /**
     * 
     */
    StorageType?: NonEmptyString;
    /**
     * 
     */
    CaCertificateIdentifier?: NonEmptyString;
    /**
     * 
     */
    DbSubnetGroupName?: NonEmptyString;
    /**
     * 
     */
    PendingCloudWatchLogsExports?: AwsRdsPendingCloudWatchLogsExports;
    /**
     * 
     */
    ProcessorFeatures?: AwsRdsDbProcessorFeatures;
  }
  export interface AwsRdsDbProcessorFeature {
    /**
     * 
     */
    Name?: NonEmptyString;
    /**
     * 
     */
    Value?: NonEmptyString;
  }
  export type AwsRdsDbProcessorFeatures = AwsRdsDbProcessorFeature[];
  export interface AwsRdsDbSnapshotDetails {
    /**
     * 
     */
    DbSnapshotIdentifier?: NonEmptyString;
    /**
     * 
     */
    DbInstanceIdentifier?: NonEmptyString;
    /**
     * 
     */
    SnapshotCreateTime?: NonEmptyString;
    /**
     * 
     */
    Engine?: NonEmptyString;
    /**
     * 
     */
    AllocatedStorage?: Integer;
    /**
     * 
     */
    Status?: NonEmptyString;
    /**
     * 
     */
    Port?: Integer;
    /**
     * 
     */
    AvailabilityZone?: NonEmptyString;
    /**
     * 
     */
    VpcId?: NonEmptyString;
    /**
     * 
     */
    InstanceCreateTime?: NonEmptyString;
    /**
     * 
     */
    MasterUsername?: NonEmptyString;
    /**
     * 
     */
    EngineVersion?: NonEmptyString;
    /**
     * 
     */
    LicenseModel?: NonEmptyString;
    /**
     * 
     */
    SnapshotType?: NonEmptyString;
    /**
     * 
     */
    Iops?: Integer;
    /**
     * 
     */
    OptionGroupName?: NonEmptyString;
    /**
     * 
     */
    PercentProgress?: Integer;
    /**
     * 
     */
    SourceRegion?: NonEmptyString;
    /**
     * 
     */
    SourceDbSnapshotIdentifier?: NonEmptyString;
    /**
     * 
     */
    StorageType?: NonEmptyString;
    /**
     * 
     */
    TdeCredentialArn?: NonEmptyString;
    /**
     * 
     */
    Encrypted?: Boolean;
    /**
     * 
     */
    KmsKeyId?: NonEmptyString;
    /**
     * 
     */
    Timezone?: NonEmptyString;
    /**
     * 
     */
    IamDatabaseAuthenticationEnabled?: Boolean;
    /**
     * 
     */
    ProcessorFeatures?: AwsRdsDbProcessorFeatures;
    /**
     * 
     */
    DbiResourceId?: NonEmptyString;
  }
  export interface AwsRdsDbStatusInfo {
    /**
     * The type of status. For a read replica, the status type is read replication.
     */
    StatusType?: NonEmptyString;
    /**
     * Whether the read replica instance is operating normally.
     */
    Normal?: Boolean;
    /**
     * The status of the read replica instance.
     */
    Status?: NonEmptyString;
    /**
     * If the read replica is currently in an error state, provides the error details.
     */
    Message?: NonEmptyString;
  }
  export type AwsRdsDbStatusInfos = AwsRdsDbStatusInfo[];
  export interface AwsRdsDbSubnetGroup {
    /**
     * The name of the subnet group.
     */
    DbSubnetGroupName?: NonEmptyString;
    /**
     * The description of the subnet group.
     */
    DbSubnetGroupDescription?: NonEmptyString;
    /**
     * The VPC ID of the subnet group.
     */
    VpcId?: NonEmptyString;
    /**
     * The status of the subnet group.
     */
    SubnetGroupStatus?: NonEmptyString;
    /**
     * A list of subnets in the subnet group.
     */
    Subnets?: AwsRdsDbSubnetGroupSubnets;
    /**
     * The ARN of the subnet group.
     */
    DbSubnetGroupArn?: NonEmptyString;
  }
  export interface AwsRdsDbSubnetGroupSubnet {
    /**
     * The identifier of a subnet in the subnet group.
     */
    SubnetIdentifier?: NonEmptyString;
    /**
     * Information about the Availability Zone for a subnet in the subnet group.
     */
    SubnetAvailabilityZone?: AwsRdsDbSubnetGroupSubnetAvailabilityZone;
    /**
     * The status of a subnet in the subnet group.
     */
    SubnetStatus?: NonEmptyString;
  }
  export interface AwsRdsDbSubnetGroupSubnetAvailabilityZone {
    /**
     * The name of the Availability Zone for a subnet in the subnet group.
     */
    Name?: NonEmptyString;
  }
  export type AwsRdsDbSubnetGroupSubnets = AwsRdsDbSubnetGroupSubnet[];
  export interface AwsRdsPendingCloudWatchLogsExports {
    /**
     * A list of log types that are being enabled.
     */
    LogTypesToEnable?: StringList;
    /**
     * A list of log types that are being disabled.
     */
    LogTypesToDisable?: StringList;
  }
  export interface AwsRedshiftClusterClusterNode {
    /**
     * The role of the node. A node might be a leader node or a compute node.
     */
    NodeRole?: NonEmptyString;
    /**
     * The private IP address of the node.
     */
    PrivateIpAddress?: NonEmptyString;
    /**
     * The public IP address of the node.
     */
    PublicIpAddress?: NonEmptyString;
  }
  export type AwsRedshiftClusterClusterNodes = AwsRedshiftClusterClusterNode[];
  export interface AwsRedshiftClusterClusterParameterGroup {
    /**
     * The list of parameter statuses.
     */
    ClusterParameterStatusList?: AwsRedshiftClusterClusterParameterStatusList;
    /**
     * The status of updates to the parameters.
     */
    ParameterApplyStatus?: NonEmptyString;
    /**
     * The name of the parameter group.
     */
    ParameterGroupName?: NonEmptyString;
  }
  export type AwsRedshiftClusterClusterParameterGroups = AwsRedshiftClusterClusterParameterGroup[];
  export interface AwsRedshiftClusterClusterParameterStatus {
    /**
     * The name of the parameter.
     */
    ParameterName?: NonEmptyString;
    /**
     * The status of the parameter. Indicates whether the parameter is in sync with the database, waiting for a cluster reboot, or encountered an error when it was applied. Valid values: in-sync | pending-reboot | applying | invalid-parameter | apply-deferred | apply-error | unknown-error 
     */
    ParameterApplyStatus?: NonEmptyString;
    /**
     * The error that prevented the parameter from being applied to the database.
     */
    ParameterApplyErrorDescription?: NonEmptyString;
  }
  export type AwsRedshiftClusterClusterParameterStatusList = AwsRedshiftClusterClusterParameterStatus[];
  export interface AwsRedshiftClusterClusterSecurityGroup {
    /**
     * The name of the cluster security group.
     */
    ClusterSecurityGroupName?: NonEmptyString;
    /**
     * The status of the cluster security group.
     */
    Status?: NonEmptyString;
  }
  export type AwsRedshiftClusterClusterSecurityGroups = AwsRedshiftClusterClusterSecurityGroup[];
  export interface AwsRedshiftClusterClusterSnapshotCopyStatus {
    /**
     * The destination Region that snapshots are automatically copied to when cross-Region snapshot copy is enabled.
     */
    DestinationRegion?: NonEmptyString;
    /**
     * The number of days that manual snapshots are retained in the destination region after they are copied from a source region. If the value is -1, then the manual snapshot is retained indefinitely. Valid values: Either -1 or an integer between 1 and 3,653
     */
    ManualSnapshotRetentionPeriod?: Integer;
    /**
     * The number of days to retain automated snapshots in the destination Region after they are copied from a source Region.
     */
    RetentionPeriod?: Integer;
    /**
     * The name of the snapshot copy grant.
     */
    SnapshotCopyGrantName?: NonEmptyString;
  }
  export interface AwsRedshiftClusterDeferredMaintenanceWindow {
    /**
     * The end of the time window for which maintenance was deferred. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    DeferMaintenanceEndTime?: NonEmptyString;
    /**
     * The identifier of the maintenance window.
     */
    DeferMaintenanceIdentifier?: NonEmptyString;
    /**
     * The start of the time window for which maintenance was deferred. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    DeferMaintenanceStartTime?: NonEmptyString;
  }
  export type AwsRedshiftClusterDeferredMaintenanceWindows = AwsRedshiftClusterDeferredMaintenanceWindow[];
  export interface AwsRedshiftClusterDetails {
    /**
     * Indicates whether major version upgrades are applied automatically to the cluster during the maintenance window.
     */
    AllowVersionUpgrade?: Boolean;
    /**
     * The number of days that automatic cluster snapshots are retained.
     */
    AutomatedSnapshotRetentionPeriod?: Integer;
    /**
     * The name of the Availability Zone in which the cluster is located.
     */
    AvailabilityZone?: NonEmptyString;
    /**
     * The availability status of the cluster for queries. Possible values are the following:    Available - The cluster is available for queries.    Unavailable - The cluster is not available for queries.    Maintenance - The cluster is intermittently available for queries due to maintenance activities.    Modifying -The cluster is intermittently available for queries due to changes that modify the cluster.    Failed - The cluster failed and is not available for queries.  
     */
    ClusterAvailabilityStatus?: NonEmptyString;
    /**
     * Indicates when the cluster was created. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    ClusterCreateTime?: NonEmptyString;
    /**
     * The unique identifier of the cluster.
     */
    ClusterIdentifier?: NonEmptyString;
    /**
     * The nodes in the cluster.
     */
    ClusterNodes?: AwsRedshiftClusterClusterNodes;
    /**
     * The list of cluster parameter groups that are associated with this cluster.
     */
    ClusterParameterGroups?: AwsRedshiftClusterClusterParameterGroups;
    /**
     * The public key for the cluster.
     */
    ClusterPublicKey?: NonEmptyString;
    /**
     * The specific revision number of the database in the cluster.
     */
    ClusterRevisionNumber?: NonEmptyString;
    /**
     * A list of cluster security groups that are associated with the cluster.
     */
    ClusterSecurityGroups?: AwsRedshiftClusterClusterSecurityGroups;
    /**
     * Information about the destination Region and retention period for the cross-Region snapshot copy.
     */
    ClusterSnapshotCopyStatus?: AwsRedshiftClusterClusterSnapshotCopyStatus;
    /**
     * The current status of the cluster. Valid values: available | available, prep-for-resize | available, resize-cleanup | cancelling-resize | creating | deleting | final-snapshot | hardware-failure | incompatible-hsm | incompatible-network | incompatible-parameters | incompatible-restore | modifying | paused | rebooting | renaming | resizing | rotating-keys | storage-full | updating-hsm 
     */
    ClusterStatus?: NonEmptyString;
    /**
     * The name of the subnet group that is associated with the cluster. This parameter is valid only when the cluster is in a VPC.
     */
    ClusterSubnetGroupName?: NonEmptyString;
    /**
     * The version ID of the Amazon Redshift engine that runs on the cluster.
     */
    ClusterVersion?: NonEmptyString;
    /**
     * The name of the initial database that was created when the cluster was created. The same name is returned for the life of the cluster. If an initial database is not specified, a database named devdev is created by default.
     */
    DBName?: NonEmptyString;
    /**
     * List of time windows during which maintenance was deferred.
     */
    DeferredMaintenanceWindows?: AwsRedshiftClusterDeferredMaintenanceWindows;
    /**
     * Information about the status of the Elastic IP (EIP) address.
     */
    ElasticIpStatus?: AwsRedshiftClusterElasticIpStatus;
    /**
     * The number of nodes that you can use the elastic resize method to resize the cluster to.
     */
    ElasticResizeNumberOfNodeOptions?: NonEmptyString;
    /**
     * Indicates whether the data in the cluster is encrypted at rest.
     */
    Encrypted?: Boolean;
    /**
     * The connection endpoint.
     */
    Endpoint?: AwsRedshiftClusterEndpoint;
    /**
     * Indicates whether to create the cluster with enhanced VPC routing enabled.
     */
    EnhancedVpcRouting?: Boolean;
    /**
     * Indicates when the next snapshot is expected to be taken. The cluster must have a valid snapshot schedule and have backups enabled. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    ExpectedNextSnapshotScheduleTime?: NonEmptyString;
    /**
     * The status of the next expected snapshot. Valid values: OnTrack | Pending 
     */
    ExpectedNextSnapshotScheduleTimeStatus?: NonEmptyString;
    /**
     * Information about whether the Amazon Redshift cluster finished applying any changes to hardware security module (HSM) settings that were specified in a modify cluster command.
     */
    HsmStatus?: AwsRedshiftClusterHsmStatus;
    /**
     * A list of IAM roles that the cluster can use to access other AWS services.
     */
    IamRoles?: AwsRedshiftClusterIamRoles;
    /**
     * The identifier of the AWS KMS encryption key that is used to encrypt data in the cluster.
     */
    KmsKeyId?: NonEmptyString;
    /**
     * The name of the maintenance track for the cluster.
     */
    MaintenanceTrackName?: NonEmptyString;
    /**
     * The default number of days to retain a manual snapshot. If the value is -1, the snapshot is retained indefinitely. This setting doesn't change the retention period of existing snapshots. Valid values: Either -1 or an integer between 1 and 3,653
     */
    ManualSnapshotRetentionPeriod?: Integer;
    /**
     * The master user name for the cluster. This name is used to connect to the database that is specified in as the value of DBName.
     */
    MasterUsername?: NonEmptyString;
    /**
     * Indicates the start of the next maintenance window. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    NextMaintenanceWindowStartTime?: NonEmptyString;
    /**
     * The node type for the nodes in the cluster.
     */
    NodeType?: NonEmptyString;
    /**
     * The number of compute nodes in the cluster.
     */
    NumberOfNodes?: Integer;
    /**
     * A list of cluster operations that are waiting to start.
     */
    PendingActions?: StringList;
    /**
     * A list of changes to the cluster that are currently pending.
     */
    PendingModifiedValues?: AwsRedshiftClusterPendingModifiedValues;
    /**
     * The weekly time range, in Universal Coordinated Time (UTC), during which system maintenance can occur. Format:  &lt;day&gt;:HH:MM-&lt;day&gt;:HH:MM  For the day values, use mon | tue | wed | thu | fri | sat | sun  For example, sun:09:32-sun:10:02 
     */
    PreferredMaintenanceWindow?: NonEmptyString;
    /**
     * Whether the cluster can be accessed from a public network.
     */
    PubliclyAccessible?: Boolean;
    /**
     * Information about the resize operation for the cluster.
     */
    ResizeInfo?: AwsRedshiftClusterResizeInfo;
    /**
     * Information about the status of a cluster restore action. Only applies to a cluster that was created by restoring a snapshot.
     */
    RestoreStatus?: AwsRedshiftClusterRestoreStatus;
    /**
     * A unique identifier for the cluster snapshot schedule.
     */
    SnapshotScheduleIdentifier?: NonEmptyString;
    /**
     * The current state of the cluster snapshot schedule. Valid values: MODIFYING | ACTIVE | FAILED 
     */
    SnapshotScheduleState?: NonEmptyString;
    /**
     * The identifier of the VPC that the cluster is in, if the cluster is in a VPC.
     */
    VpcId?: NonEmptyString;
    /**
     * The list of VPC security groups that the cluster belongs to, if the cluster is in a VPC.
     */
    VpcSecurityGroups?: AwsRedshiftClusterVpcSecurityGroups;
  }
  export interface AwsRedshiftClusterElasticIpStatus {
    /**
     * The elastic IP address for the cluster.
     */
    ElasticIp?: NonEmptyString;
    /**
     * The status of the elastic IP address.
     */
    Status?: NonEmptyString;
  }
  export interface AwsRedshiftClusterEndpoint {
    /**
     * The DNS address of the cluster.
     */
    Address?: NonEmptyString;
    /**
     * The port that the database engine listens on.
     */
    Port?: Integer;
  }
  export interface AwsRedshiftClusterHsmStatus {
    /**
     * The name of the HSM client certificate that the Amazon Redshift cluster uses to retrieve the data encryption keys that are stored in an HSM.
     */
    HsmClientCertificateIdentifier?: NonEmptyString;
    /**
     * The name of the HSM configuration that contains the information that the Amazon Redshift cluster can use to retrieve and store keys in an HSM.
     */
    HsmConfigurationIdentifier?: NonEmptyString;
    /**
     * Indicates whether the Amazon Redshift cluster has finished applying any HSM settings changes specified in a modify cluster command. Type: String Valid values: active | applying 
     */
    Status?: NonEmptyString;
  }
  export interface AwsRedshiftClusterIamRole {
    /**
     * The status of the IAM role's association with the cluster. Valid values: in-sync | adding | removing 
     */
    ApplyStatus?: NonEmptyString;
    /**
     * The ARN of the IAM role.
     */
    IamRoleArn?: NonEmptyString;
  }
  export type AwsRedshiftClusterIamRoles = AwsRedshiftClusterIamRole[];
  export interface AwsRedshiftClusterPendingModifiedValues {
    /**
     * The pending or in-progress change to the automated snapshot retention period.
     */
    AutomatedSnapshotRetentionPeriod?: Integer;
    /**
     * The pending or in-progress change to the identifier for the cluster.
     */
    ClusterIdentifier?: NonEmptyString;
    /**
     * The pending or in-progress change to the cluster type.
     */
    ClusterType?: NonEmptyString;
    /**
     * The pending or in-progress change to the service version.
     */
    ClusterVersion?: NonEmptyString;
    /**
     * The encryption type for a cluster.
     */
    EncryptionType?: NonEmptyString;
    /**
     * Indicates whether to create the cluster with enhanced VPC routing enabled.
     */
    EnhancedVpcRouting?: Boolean;
    /**
     * The name of the maintenance track that the cluster changes to during the next maintenance window.
     */
    MaintenanceTrackName?: NonEmptyString;
    /**
     * The pending or in-progress change to the master user password for the cluster.
     */
    MasterUserPassword?: NonEmptyString;
    /**
     * The pending or in-progress change to the cluster's node type.
     */
    NodeType?: NonEmptyString;
    /**
     * The pending or in-progress change to the number of nodes in the cluster.
     */
    NumberOfNodes?: Integer;
    /**
     * The pending or in-progress change to whether the cluster can be connected to from the public network.
     */
    PubliclyAccessible?: Boolean;
  }
  export interface AwsRedshiftClusterResizeInfo {
    /**
     * Indicates whether the resize operation can be canceled.
     */
    AllowCancelResize?: Boolean;
    /**
     * The type of resize operation. Valid values: ClassicResize 
     */
    ResizeType?: NonEmptyString;
  }
  export interface AwsRedshiftClusterRestoreStatus {
    /**
     * The number of megabytes per second being transferred from the backup storage. Returns the average rate for a completed backup. This field is only updated when you restore to DC2 and DS2 node types.
     */
    CurrentRestoreRateInMegaBytesPerSecond?: Double;
    /**
     * The amount of time an in-progress restore has been running, or the amount of time it took a completed restore to finish. This field is only updated when you restore to DC2 and DS2 node types.
     */
    ElapsedTimeInSeconds?: Long;
    /**
     * The estimate of the time remaining before the restore is complete. Returns 0 for a completed restore. This field is only updated when you restore to DC2 and DS2 node types.
     */
    EstimatedTimeToCompletionInSeconds?: Long;
    /**
     * The number of megabytes that were transferred from snapshot storage. This field is only updated when you restore to DC2 and DS2 node types.
     */
    ProgressInMegaBytes?: Long;
    /**
     * The size of the set of snapshot data that was used to restore the cluster. This field is only updated when you restore to DC2 and DS2 node types.
     */
    SnapshotSizeInMegaBytes?: Long;
    /**
     * The status of the restore action. Valid values: starting | restoring | completed | failed 
     */
    Status?: NonEmptyString;
  }
  export interface AwsRedshiftClusterVpcSecurityGroup {
    /**
     * The status of the VPC security group.
     */
    Status?: NonEmptyString;
    /**
     * The identifier of the VPC security group.
     */
    VpcSecurityGroupId?: NonEmptyString;
  }
  export type AwsRedshiftClusterVpcSecurityGroups = AwsRedshiftClusterVpcSecurityGroup[];
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
     * Indicates when the S3 bucket was created. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
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
     * Specifies the default server-side encryption to apply to new objects in the bucket. If a PUT object request doesn't specify any server-side encryption, this default encryption is applied.
     */
    ApplyServerSideEncryptionByDefault?: AwsS3BucketServerSideEncryptionByDefault;
  }
  export type AwsS3BucketServerSideEncryptionRules = AwsS3BucketServerSideEncryptionRule[];
  export interface AwsS3ObjectDetails {
    /**
     * Indicates when the object was last modified. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
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
  export interface AwsSecretsManagerSecretDetails {
    /**
     * Defines the rotation schedule for the secret.
     */
    RotationRules?: AwsSecretsManagerSecretRotationRules;
    /**
     * Whether the rotation occurred within the specified rotation frequency.
     */
    RotationOccurredWithinFrequency?: Boolean;
    /**
     * The ARN, Key ID, or alias of the AWS KMS customer master key (CMK) used to encrypt the SecretString or SecretBinary values for versions of this secret.
     */
    KmsKeyId?: NonEmptyString;
    /**
     * Whether rotation is enabled.
     */
    RotationEnabled?: Boolean;
    /**
     * The ARN of the Lambda function that rotates the secret.
     */
    RotationLambdaArn?: NonEmptyString;
    /**
     * Whether the secret is deleted.
     */
    Deleted?: Boolean;
    /**
     * The name of the secret.
     */
    Name?: NonEmptyString;
    /**
     * The user-provided description of the secret.
     */
    Description?: NonEmptyString;
  }
  export interface AwsSecretsManagerSecretRotationRules {
    /**
     * The number of days after the previous rotation to rotate the secret.
     */
    AutomaticallyAfterDays?: Integer;
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
     * The identifier for the solution-specific component (a discrete unit of logic) that generated a finding. In various security-findings providers' solutions, this generator can be called a rule, a check, a detector, a plugin, etc. 
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
     * Indicates when the security-findings provider first observed the potential security issue that a finding captured. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    FirstObservedAt?: NonEmptyString;
    /**
     * Indicates when the security-findings provider most recently observed the potential security issue that a finding captured. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    LastObservedAt?: NonEmptyString;
    /**
     * Indicates when the security-findings provider created the potential security issue that a finding captured. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    CreatedAt: NonEmptyString;
    /**
     * Indicates when the security-findings provider last updated the finding record. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
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
     * Provides information about a network path that is relevant to a finding. Each entry under NetworkPath represents a component of that path.
     */
    NetworkPath?: NetworkPathList;
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
    /**
     * Provides a list of vulnerabilities associated with the findings.
     */
    Vulnerabilities?: VulnerabilityList;
    /**
     * Provides an overview of the patch compliance status for an instance against a selected compliance standard.
     */
    PatchSummary?: PatchSummary;
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
     * The identifier for the solution-specific component (a discrete unit of logic) that generated a finding. In various security-findings providers' solutions, this generator can be called a rule, a check, a detector, a plugin, etc.
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
     * The workflow state of a finding. Note that this field is deprecated. To search for a finding based on its workflow status, use WorkflowStatus.
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
  export interface AwsSecurityFindingIdentifier {
    /**
     * The identifier of the finding that was specified by the finding provider.
     */
    Id: NonEmptyString;
    /**
     * The ARN generated by Security Hub that uniquely identifies a product that generates findings. This can be the ARN for a third-party product that is integrated with Security Hub, or the ARN for a custom integration.
     */
    ProductArn: NonEmptyString;
  }
  export type AwsSecurityFindingIdentifierList = AwsSecurityFindingIdentifier[];
  export type AwsSecurityFindingList = AwsSecurityFinding[];
  export interface AwsSnsTopicDetails {
    /**
     * The ID of an AWS managed customer master key (CMK) for Amazon SNS or a custom CMK.
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
     * The ID of an AWS managed customer master key (CMK) for Amazon SQS or a custom CMK.
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
     * The action to perform if none of the rules contained in the WebACL match.
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
     * Specifies the action that CloudFront or AWS WAF takes when a web request matches the conditions in the rule. 
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
     * Specifies the order in which the rules in a WebACL are evaluated. Rules with a lower value for Priority are evaluated before rules with a higher value. The value must be a unique integer. If you add multiple rules to a WebACL, the values do not need to be consecutive.
     */
    Priority?: Integer;
    /**
     * The identifier for a rule.
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
  export interface BatchUpdateFindingsRequest {
    /**
     * The list of findings to update. BatchUpdateFindings can be used to update up to 100 findings at a time. For each finding, the list provides the finding identifier and the ARN of the finding provider.
     */
    FindingIdentifiers: AwsSecurityFindingIdentifierList;
    Note?: NoteUpdate;
    /**
     * Used to update the finding severity.
     */
    Severity?: SeverityUpdate;
    /**
     * Indicates the veracity of a finding. The available values for VerificationState are as follows.    UNKNOWN – The default disposition of a security finding    TRUE_POSITIVE – The security finding is confirmed    FALSE_POSITIVE – The security finding was determined to be a false alarm    BENIGN_POSITIVE – A special case of TRUE_POSITIVE where the finding doesn't pose any threat, is expected, or both  
     */
    VerificationState?: VerificationState;
    /**
     * The updated value for the finding confidence. Confidence is defined as the likelihood that a finding accurately identifies the behavior or issue that it was intended to identify. Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent confidence and 100 means 100 percent confidence.
     */
    Confidence?: RatioScale;
    /**
     * The updated value for the level of importance assigned to the resources associated with the findings. A score of 0 means that the underlying resources have no criticality, and a score of 100 is reserved for the most critical resources. 
     */
    Criticality?: RatioScale;
    /**
     * One or more finding types in the format of namespace/category/classifier that classify a finding. Valid namespace values are as follows.   Software and Configuration Checks   TTPs   Effects   Unusual Behaviors   Sensitive Data Identifications   
     */
    Types?: TypeList;
    /**
     * A list of name/value string pairs associated with the finding. These are custom, user-defined fields added to a finding.
     */
    UserDefinedFields?: FieldMap;
    /**
     * Used to update the workflow status of a finding. The workflow status indicates the progress of the investigation into the finding. 
     */
    Workflow?: WorkflowUpdate;
    /**
     * A list of findings that are related to the updated findings.
     */
    RelatedFindings?: RelatedFindingList;
  }
  export interface BatchUpdateFindingsResponse {
    /**
     * The list of findings that were updated successfully.
     */
    ProcessedFindings: AwsSecurityFindingIdentifierList;
    /**
     * The list of findings that were not updated.
     */
    UnprocessedFindings: BatchUpdateFindingsUnprocessedFindingsList;
  }
  export interface BatchUpdateFindingsUnprocessedFinding {
    /**
     * The identifier of the finding that was not updated.
     */
    FindingIdentifier: AwsSecurityFindingIdentifier;
    /**
     * The code associated with the error.
     */
    ErrorCode: NonEmptyString;
    /**
     * The message associated with the error.
     */
    ErrorMessage: NonEmptyString;
  }
  export type BatchUpdateFindingsUnprocessedFindingsList = BatchUpdateFindingsUnprocessedFinding[];
  export type Boolean = boolean;
  export type CategoryList = NonEmptyString[];
  export interface CidrBlockAssociation {
    /**
     * The association ID for the IPv4 CIDR block.
     */
    AssociationId?: NonEmptyString;
    /**
     * The IPv4 CIDR block.
     */
    CidrBlock?: NonEmptyString;
    /**
     * Information about the state of the IPv4 CIDR block.
     */
    CidrBlockState?: NonEmptyString;
  }
  export type CidrBlockAssociationList = CidrBlockAssociation[];
  export interface Compliance {
    /**
     * The result of a standards check. The valid values for Status are as follows.      PASSED - Standards check passed for all evaluated resources.    WARNING - Some information is missing or this check is not supported for your configuration.    FAILED - Standards check failed for at least one evaluated resource.    NOT_AVAILABLE - Check could not be performed due to a service outage, API error, or because the result of the AWS Config evaluation was NOT_APPLICABLE. If the AWS Config evaluation result was NOT_APPLICABLE, then after 3 days, Security Hub automatically archives the finding.    
     */
    Status?: ComplianceStatus;
    /**
     * For a control, the industry or regulatory framework requirements that are related to the control. The check for that control is aligned with these requirements.
     */
    RelatedRequirements?: RelatedRequirementsList;
    /**
     * For findings generated from controls, a list of reasons behind the value of Status. For the list of status reason codes and their meanings, see Standards-related information in the ASFF in the AWS Security Hub User Guide. 
     */
    StatusReasons?: StatusReasonsList;
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
     * Indicates when the container started. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
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
     * The attribute used to group the findings for the insight. The grouping attribute identifies the type of item that the insight applies to. For example, if an insight is grouped by resource identifier, then the insight produces a list of resource identifiers.
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
  export interface Cvss {
    /**
     * The version of CVSS for the CVSS score.
     */
    Version?: NonEmptyString;
    /**
     * The base CVSS score.
     */
    BaseScore?: Double;
    /**
     * The base scoring vector for the CVSS score.
     */
    BaseVector?: NonEmptyString;
  }
  export type CvssList = Cvss[];
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
    /**
     * Whether to automatically enable new controls when they are added to standards that are enabled. If set to true, then new controls for enabled standards are enabled automatically. If set to false, then new controls are not enabled.
     */
    AutoEnableControls?: Boolean;
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
     * The tags to add to the hub resource when you enable Security Hub.
     */
    Tags?: TagMap;
    /**
     * Whether to enable the security standards that Security Hub has designated as automatically enabled. If you do not provide a value for EnableDefaultStandards, it is set to true. To not enable the automatically enabled standards, set EnableDefaultStandards to false.
     */
    EnableDefaultStandards?: Boolean;
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
     * The finding attributes used to define a condition to filter the returned findings. You can filter by up to 10 finding attributes. For each attribute, you can provide up to 20 filter values. Note that in the available filter fields, WorkflowState is deprecated. To search for a finding based on its workflow status, use WorkflowStatus.
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
     * The identifier of the finding that could not be updated.
     */
    Id: NonEmptyString;
    /**
     * The code of the error returned by the BatchImportFindings operation.
     */
    ErrorCode: NonEmptyString;
    /**
     * The message of the error returned by the BatchImportFindings operation.
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
     * The grouping attribute for the insight's findings. Indicates how to group the matching findings, and identifies the type of item that the insight applies to. For example, if an insight is grouped by resource identifier, then the insight produces a list of resource identifiers.
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
  export interface Ipv6CidrBlockAssociation {
    /**
     * The association ID for the IPv6 CIDR block.
     */
    AssociationId?: NonEmptyString;
    /**
     * The IPv6 CIDR block.
     */
    Ipv6CidrBlock?: NonEmptyString;
    /**
     * Information about the state of the CIDR block.
     */
    CidrBlockState?: NonEmptyString;
  }
  export type Ipv6CidrBlockAssociationList = Ipv6CidrBlockAssociation[];
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
  export type Long = number;
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
     * The key of the map filter. For example, for ResourceTags, Key identifies the name of the tag. For UserDefinedFields, Key is the name of the field.
     */
    Key?: NonEmptyString;
    /**
     * The value for the key in the map filter. Filter values are case sensitive. For example, one of the values for a tag called Department might be Security. If you provide security as the filter value, then there is no match.
     */
    Value?: NonEmptyString;
    /**
     * The condition to apply to the key value when querying for findings with a map filter. To search for values that exactly match the filter value, use EQUALS. For example, for the ResourceTags field, the filter Department EQUALS Security matches findings that have the value Security for the tag Department. To search for values other than the filter value, use NOT_EQUALS. For example, for the ResourceTags field, the filter Department NOT_EQUALS Finance matches findings that do not have the value Finance for the tag Department.  EQUALS filters on the same field are joined by OR. A finding matches if it matches any one of those filters.  NOT_EQUALS filters on the same field are joined by AND. A finding matches only if it matches all of those filters. You cannot have both an EQUALS filter and a NOT_EQUALS filter on the same field.
     */
    Comparison?: MapFilterComparison;
  }
  export type MapFilterComparison = "EQUALS"|"NOT_EQUALS"|string;
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
     * The status of the relationship between the member account and its master account.  The status can have one of the following values:    CREATED - Indicates that the master account added the member account, but has not yet invited the member account.    INVITED - Indicates that the master account invited the member account. The member account has not yet responded to the invitation.    ASSOCIATED - Indicates that the member account accepted the invitation.    REMOVED - Indicates that the master account disassociated the member account.    RESIGNED - Indicates that the member account disassociated themselves from the master account.    DELETED - Indicates that the master account deleted the member account.  
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
     * The range of open ports that is present on the network.
     */
    OpenPortRange?: PortRange;
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
  export interface NetworkHeader {
    /**
     * The protocol used for the component.
     */
    Protocol?: NonEmptyString;
    /**
     * Information about the destination of the component.
     */
    Destination?: NetworkPathComponentDetails;
    /**
     * Information about the origin of the component.
     */
    Source?: NetworkPathComponentDetails;
  }
  export interface NetworkPathComponent {
    /**
     * The identifier of a component in the network path.
     */
    ComponentId?: NonEmptyString;
    /**
     * The type of component.
     */
    ComponentType?: NonEmptyString;
    /**
     * Information about the component that comes after the current component in the network path.
     */
    Egress?: NetworkHeader;
    /**
     * Information about the component that comes before the current node in the network path.
     */
    Ingress?: NetworkHeader;
  }
  export interface NetworkPathComponentDetails {
    /**
     * The IP addresses of the destination.
     */
    Address?: StringList;
    /**
     * A list of port ranges for the destination.
     */
    PortRanges?: PortRangeList;
  }
  export type NetworkPathList = NetworkPathComponent[];
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
     * The timestamp of when the note was updated. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
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
  export interface PatchSummary {
    /**
     * The identifier of the compliance standard that was used to determine the patch compliance status.
     */
    Id: NonEmptyString;
    /**
     * The number of patches from the compliance standard that were installed successfully.
     */
    InstalledCount?: Integer;
    /**
     * The number of patches that are part of the compliance standard but are not installed. The count includes patches that failed to install.
     */
    MissingCount?: Integer;
    /**
     * The number of patches from the compliance standard that failed to install.
     */
    FailedCount?: Integer;
    /**
     * The number of installed patches that are not part of the compliance standard.
     */
    InstalledOtherCount?: Integer;
    /**
     * The number of patches that are installed but are also on a list of patches that the customer rejected.
     */
    InstalledRejectedCount?: Integer;
    /**
     * The number of patches that were applied, but that require the instance to be rebooted in order to be marked as installed.
     */
    InstalledPendingReboot?: Integer;
    /**
     * Indicates when the operation started. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    OperationStartTime?: NonEmptyString;
    /**
     * Indicates when the operation completed. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    OperationEndTime?: NonEmptyString;
    /**
     * The reboot option specified for the instance.
     */
    RebootOption?: NonEmptyString;
    /**
     * The type of patch operation performed. For Patch Manager, the values are SCAN and INSTALL. 
     */
    Operation?: NonEmptyString;
  }
  export interface PortRange {
    /**
     * The first port in the port range.
     */
    Begin?: Integer;
    /**
     * The last port in the port range.
     */
    End?: Integer;
  }
  export type PortRangeList = PortRange[];
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
     * Indicates when the process was launched. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    LaunchedAt?: NonEmptyString;
    /**
     * Indicates when the process was terminated. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
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
  export type RatioScale = number;
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
     * 
     */
    ResourceRole?: NonEmptyString;
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
     * Details for an autoscaling group.
     */
    AwsAutoScalingAutoScalingGroup?: AwsAutoScalingAutoScalingGroupDetails;
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
     * Details for an Amazon EC2 network interface.
     */
    AwsEc2NetworkInterface?: AwsEc2NetworkInterfaceDetails;
    /**
     * Details for an EC2 security group.
     */
    AwsEc2SecurityGroup?: AwsEc2SecurityGroupDetails;
    /**
     * Details for an EC2 volume.
     */
    AwsEc2Volume?: AwsEc2VolumeDetails;
    /**
     * Details for an EC2 VPC.
     */
    AwsEc2Vpc?: AwsEc2VpcDetails;
    /**
     * Details about an Elastic IP address.
     */
    AwsEc2Eip?: AwsEc2EipDetails;
    /**
     * Details about a load balancer.
     */
    AwsElbv2LoadBalancer?: AwsElbv2LoadBalancerDetails;
    /**
     * Details for an Elasticsearch domain.
     */
    AwsElasticsearchDomain?: AwsElasticsearchDomainDetails;
    /**
     * Details about an Amazon S3 bucket related to a finding.
     */
    AwsS3Bucket?: AwsS3BucketDetails;
    /**
     * Details about an Amazon S3 object related to a finding.
     */
    AwsS3Object?: AwsS3ObjectDetails;
    /**
     * Details about a Secrets Manager secret.
     */
    AwsSecretsManagerSecret?: AwsSecretsManagerSecretDetails;
    /**
     * Details about an IAM access key related to a finding.
     */
    AwsIamAccessKey?: AwsIamAccessKeyDetails;
    /**
     * Details about an IAM user.
     */
    AwsIamUser?: AwsIamUserDetails;
    /**
     * Details about an IAM permissions policy.
     */
    AwsIamPolicy?: AwsIamPolicyDetails;
    /**
     * 
     */
    AwsApiGatewayV2Stage?: AwsApiGatewayV2StageDetails;
    /**
     * 
     */
    AwsApiGatewayV2Api?: AwsApiGatewayV2ApiDetails;
    /**
     * Details about a DynamoDB table.
     */
    AwsDynamoDbTable?: AwsDynamoDbTableDetails;
    /**
     * 
     */
    AwsApiGatewayStage?: AwsApiGatewayStageDetails;
    /**
     * 
     */
    AwsApiGatewayRestApi?: AwsApiGatewayRestApiDetails;
    /**
     * 
     */
    AwsCloudTrailTrail?: AwsCloudTrailTrailDetails;
    /**
     * 
     */
    AwsCertificateManagerCertificate?: AwsCertificateManagerCertificateDetails;
    /**
     * 
     */
    AwsRedshiftCluster?: AwsRedshiftClusterDetails;
    /**
     * 
     */
    AwsElbLoadBalancer?: AwsElbLoadBalancerDetails;
    /**
     * 
     */
    AwsIamGroup?: AwsIamGroupDetails;
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
     * Details about an Amazon RDS database instance.
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
     * Details about an Amazon RDS database snapshot.
     */
    AwsRdsDbSnapshot?: AwsRdsDbSnapshotDetails;
    /**
     * Details about an Amazon RDS database cluster snapshot.
     */
    AwsRdsDbClusterSnapshot?: AwsRdsDbClusterSnapshotDetails;
    /**
     * Details about an Amazon RDS database cluster.
     */
    AwsRdsDbCluster?: AwsRdsDbClusterDetails;
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
     * Deprecated. This attribute is being deprecated. Instead of providing Product, provide Original. The native severity as defined by the AWS service or integrated partner product that generated the finding.
     */
    Product?: Double;
    /**
     * The severity value of the finding. The allowed values are the following.    INFORMATIONAL - No issue was found.    LOW - The issue does not require action on its own.    MEDIUM - The issue must be addressed but not urgently.    HIGH - The issue must be addressed as a priority.    CRITICAL - The issue must be remediated immediately to avoid it escalating.   If you provide Normalized and do not provide Label, then Label is set automatically as follows.    0 - INFORMATIONAL    1–39 - LOW    40–69 - MEDIUM    70–89 - HIGH    90–100 - CRITICAL   
     */
    Label?: SeverityLabel;
    /**
     * Deprecated. The normalized severity of a finding. This attribute is being deprecated. Instead of providing Normalized, provide Label. If you provide Label and do not provide Normalized, then Normalized is set automatically as follows.    INFORMATIONAL - 0    LOW - 1    MEDIUM - 40    HIGH - 70    CRITICAL - 90  
     */
    Normalized?: Integer;
    /**
     * The native severity from the finding product that generated the finding.
     */
    Original?: NonEmptyString;
  }
  export type SeverityLabel = "INFORMATIONAL"|"LOW"|"MEDIUM"|"HIGH"|"CRITICAL"|string;
  export type SeverityRating = "LOW"|"MEDIUM"|"HIGH"|"CRITICAL"|string;
  export interface SeverityUpdate {
    /**
     * The normalized severity for the finding. This attribute is to be deprecated in favor of Label. If you provide Normalized and do not provide Label, Label is set automatically as follows.   0 - INFORMATIONAL    1–39 - LOW    40–69 - MEDIUM    70–89 - HIGH    90–100 - CRITICAL   
     */
    Normalized?: RatioScale;
    /**
     * The native severity as defined by the AWS service or integrated partner product that generated the finding.
     */
    Product?: Double;
    /**
     * The severity value of the finding. The allowed values are the following.    INFORMATIONAL - No issue was found.    LOW - The issue does not require action on its own.    MEDIUM - The issue must be addressed but not urgently.    HIGH - The issue must be addressed as a priority.    CRITICAL - The issue must be remediated immediately to avoid it escalating.  
     */
    Label?: SeverityLabel;
  }
  export type SizeBytes = number;
  export interface SoftwarePackage {
    /**
     * The name of the software package.
     */
    Name?: NonEmptyString;
    /**
     * The version of the software package.
     */
    Version?: NonEmptyString;
    /**
     * The epoch of the software package.
     */
    Epoch?: NonEmptyString;
    /**
     * The release of the software package.
     */
    Release?: NonEmptyString;
    /**
     * The architecture used for the software package.
     */
    Architecture?: NonEmptyString;
  }
  export type SoftwarePackageList = SoftwarePackage[];
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
    /**
     * Whether the standard is enabled by default. When Security Hub is enabled from the console, if a standard is enabled by default, the check box for that standard is selected by default. When Security Hub is enabled using the EnableSecurityHub API operation, the standard is enabled by default unless EnableDefaultStandards is set to false.
     */
    EnabledByDefault?: Boolean;
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
  export interface StatusReason {
    /**
     * A code that represents a reason for the control status. For the list of status reason codes and their meanings, see Standards-related information in the ASFF in the AWS Security Hub User Guide. 
     */
    ReasonCode: NonEmptyString;
    /**
     * The corresponding description for the status reason code.
     */
    Description?: NonEmptyString;
  }
  export type StatusReasonsList = StatusReason[];
  export interface StringFilter {
    /**
     * The string filter value. Filter values are case sensitive. For example, the product name for control-based findings is Security Hub. If you provide security hub as the filter text, then there is no match.
     */
    Value?: NonEmptyString;
    /**
     * The condition to apply to a string value when querying for findings. To search for values that contain the filter criteria value, use one of the following comparison operators:   To search for values that exactly match the filter value, use EQUALS. For example, the filter ResourceType EQUALS AwsEc2SecurityGroup only matches findings that have a resource type of AwsEc2SecurityGroup.   To search for values that start with the filter value, use PREFIX. For example, the filter ResourceType PREFIX AwsIam matches findings that have a resource type that starts with AwsIam. Findings with a resource type of AwsIamPolicy, AwsIamRole, or AwsIamUser would all match.    EQUALS and PREFIX filters on the same field are joined by OR. A finding matches if it matches any one of those filters. To search for values that do not contain the filter criteria value, use one of the following comparison operators:   To search for values that do not exactly match the filter value, use NOT_EQUALS. For example, the filter ResourceType NOT_EQUALS AwsIamPolicy matches findings that have a resource type other than AwsIamPolicy.   To search for values that do not start with the filter value, use PREFIX_NOT_EQUALS. For example, the filter ResourceType PREFIX_NOT_EQUALS AwsIam matches findings that have a resource type that does not start with AwsIam. Findings with a resource type of AwsIamPolicy, AwsIamRole, or AwsIamUser would all be excluded from the results.    NOT_EQUALS and PREFIX_NOT_EQUALS filters on the same field are joined by AND. A finding matches only if it matches all of those filters. For filters on the same field, you cannot provide both an EQUALS filter and a NOT_EQUALS or PREFIX_NOT_EQUALS filter. Combining filters in this way always returns an error, even if the provided filter values would return valid results. You can combine PREFIX filters with NOT_EQUALS or PREFIX_NOT_EQUALS filters for the same field. Security Hub first processes the PREFIX filters, then the NOT_EQUALS or PREFIX_NOT_EQUALS filters.  For example, for the following filter, Security Hub first identifies findings that have resource types that start with either AwsIAM or AwsEc2. It then excludes findings that have a resource type of AwsIamPolicy and findings that have a resource type of AwsEc2NetworkInterface.    ResourceType PREFIX AwsIam     ResourceType PREFIX AwsEc2     ResourceType NOT_EQUALS AwsIamPolicy     ResourceType NOT_EQUALS AwsEc2NetworkInterface   
     */
    Comparison?: StringFilterComparison;
  }
  export type StringFilterComparison = "EQUALS"|"PREFIX"|"NOT_EQUALS"|"PREFIX_NOT_EQUALS"|string;
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
     * Indicates when the most recent instance of a threat intelligence indicator was observed. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
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
  export interface UpdateSecurityHubConfigurationRequest {
    /**
     * Whether to automatically enable new controls when they are added to standards that are enabled. By default, this is set to true, and new controls are enabled automatically. To not automatically enable new controls, set this to false. 
     */
    AutoEnableControls?: Boolean;
  }
  export interface UpdateSecurityHubConfigurationResponse {
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
     * A description of the reason why you are disabling a security standard control. If you are disabling a control, then this is required.
     */
    DisabledReason?: NonEmptyString;
  }
  export interface UpdateStandardsControlResponse {
  }
  export type VerificationState = "UNKNOWN"|"TRUE_POSITIVE"|"FALSE_POSITIVE"|"BENIGN_POSITIVE"|string;
  export interface Vulnerability {
    /**
     * The identifier of the vulnerability.
     */
    Id: NonEmptyString;
    /**
     * List of software packages that have the vulnerability.
     */
    VulnerablePackages?: SoftwarePackageList;
    /**
     * CVSS scores from the advisory related to the vulnerability.
     */
    Cvss?: CvssList;
    /**
     * List of vulnerabilities that are related to this vulnerability.
     */
    RelatedVulnerabilities?: StringList;
    /**
     * Information about the vendor that generates the vulnerability report.
     */
    Vendor?: VulnerabilityVendor;
    /**
     * A list of URLs that provide additional information about the vulnerability.
     */
    ReferenceUrls?: StringList;
  }
  export type VulnerabilityList = Vulnerability[];
  export interface VulnerabilityVendor {
    /**
     * The name of the vendor.
     */
    Name: NonEmptyString;
    /**
     * The URL of the vulnerability advisory.
     */
    Url?: NonEmptyString;
    /**
     * The severity that the vendor assigned to the vulnerability.
     */
    VendorSeverity?: NonEmptyString;
    /**
     * Indicates when the vulnerability advisory was created. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    VendorCreatedAt?: NonEmptyString;
    /**
     * Indicates when the vulnerability advisory was last updated. Uses the date-time format specified in RFC 3339 section 5.6, Internet Date/Time Format. The value cannot contain spaces. For example, 2020-03-22T13:22:13.933Z.
     */
    VendorUpdatedAt?: NonEmptyString;
  }
  export interface WafAction {
    /**
     * Specifies how you want AWS WAF to respond to requests that match the settings in a rule. Valid settings include the following:    ALLOW - AWS WAF allows requests    BLOCK - AWS WAF blocks requests    COUNT - AWS WAF increments a counter of the requests that match all of the conditions in the rule. AWS WAF then continues to inspect the web request based on the remaining rules in the web ACL. You can't specify COUNT for the default action for a WebACL.  
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
  export interface WorkflowUpdate {
    /**
     * The status of the investigation into the finding. The allowed values are the following.    NEW - The initial state of a finding, before it is reviewed.    NOTIFIED - Indicates that you notified the resource owner about the security issue. Used when the initial reviewer is not the resource owner, and needs intervention from the resource owner.    RESOLVED - The finding was reviewed and remediated and is now considered resolved.    SUPPRESSED - The finding will not be reviewed again and will not be acted upon.  
     */
    Status?: WorkflowStatus;
  }
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
