import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class AuditManager extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: AuditManager.Types.ClientConfiguration)
  config: Config & AuditManager.Types.ClientConfiguration;
  /**
   *  Associates an evidence folder to the specified assessment report in AWS Audit Manager. 
   */
  associateAssessmentReportEvidenceFolder(params: AuditManager.Types.AssociateAssessmentReportEvidenceFolderRequest, callback?: (err: AWSError, data: AuditManager.Types.AssociateAssessmentReportEvidenceFolderResponse) => void): Request<AuditManager.Types.AssociateAssessmentReportEvidenceFolderResponse, AWSError>;
  /**
   *  Associates an evidence folder to the specified assessment report in AWS Audit Manager. 
   */
  associateAssessmentReportEvidenceFolder(callback?: (err: AWSError, data: AuditManager.Types.AssociateAssessmentReportEvidenceFolderResponse) => void): Request<AuditManager.Types.AssociateAssessmentReportEvidenceFolderResponse, AWSError>;
  /**
   *  Associates a list of evidence to an assessment report in an AWS Audit Manager assessment. 
   */
  batchAssociateAssessmentReportEvidence(params: AuditManager.Types.BatchAssociateAssessmentReportEvidenceRequest, callback?: (err: AWSError, data: AuditManager.Types.BatchAssociateAssessmentReportEvidenceResponse) => void): Request<AuditManager.Types.BatchAssociateAssessmentReportEvidenceResponse, AWSError>;
  /**
   *  Associates a list of evidence to an assessment report in an AWS Audit Manager assessment. 
   */
  batchAssociateAssessmentReportEvidence(callback?: (err: AWSError, data: AuditManager.Types.BatchAssociateAssessmentReportEvidenceResponse) => void): Request<AuditManager.Types.BatchAssociateAssessmentReportEvidenceResponse, AWSError>;
  /**
   *  Create a batch of delegations for a specified assessment in AWS Audit Manager. 
   */
  batchCreateDelegationByAssessment(params: AuditManager.Types.BatchCreateDelegationByAssessmentRequest, callback?: (err: AWSError, data: AuditManager.Types.BatchCreateDelegationByAssessmentResponse) => void): Request<AuditManager.Types.BatchCreateDelegationByAssessmentResponse, AWSError>;
  /**
   *  Create a batch of delegations for a specified assessment in AWS Audit Manager. 
   */
  batchCreateDelegationByAssessment(callback?: (err: AWSError, data: AuditManager.Types.BatchCreateDelegationByAssessmentResponse) => void): Request<AuditManager.Types.BatchCreateDelegationByAssessmentResponse, AWSError>;
  /**
   *  Deletes the delegations in the specified AWS Audit Manager assessment. 
   */
  batchDeleteDelegationByAssessment(params: AuditManager.Types.BatchDeleteDelegationByAssessmentRequest, callback?: (err: AWSError, data: AuditManager.Types.BatchDeleteDelegationByAssessmentResponse) => void): Request<AuditManager.Types.BatchDeleteDelegationByAssessmentResponse, AWSError>;
  /**
   *  Deletes the delegations in the specified AWS Audit Manager assessment. 
   */
  batchDeleteDelegationByAssessment(callback?: (err: AWSError, data: AuditManager.Types.BatchDeleteDelegationByAssessmentResponse) => void): Request<AuditManager.Types.BatchDeleteDelegationByAssessmentResponse, AWSError>;
  /**
   *  Disassociates a list of evidence from the specified assessment report in AWS Audit Manager. 
   */
  batchDisassociateAssessmentReportEvidence(params: AuditManager.Types.BatchDisassociateAssessmentReportEvidenceRequest, callback?: (err: AWSError, data: AuditManager.Types.BatchDisassociateAssessmentReportEvidenceResponse) => void): Request<AuditManager.Types.BatchDisassociateAssessmentReportEvidenceResponse, AWSError>;
  /**
   *  Disassociates a list of evidence from the specified assessment report in AWS Audit Manager. 
   */
  batchDisassociateAssessmentReportEvidence(callback?: (err: AWSError, data: AuditManager.Types.BatchDisassociateAssessmentReportEvidenceResponse) => void): Request<AuditManager.Types.BatchDisassociateAssessmentReportEvidenceResponse, AWSError>;
  /**
   *  Uploads one or more pieces of evidence to the specified control in the assessment in AWS Audit Manager. 
   */
  batchImportEvidenceToAssessmentControl(params: AuditManager.Types.BatchImportEvidenceToAssessmentControlRequest, callback?: (err: AWSError, data: AuditManager.Types.BatchImportEvidenceToAssessmentControlResponse) => void): Request<AuditManager.Types.BatchImportEvidenceToAssessmentControlResponse, AWSError>;
  /**
   *  Uploads one or more pieces of evidence to the specified control in the assessment in AWS Audit Manager. 
   */
  batchImportEvidenceToAssessmentControl(callback?: (err: AWSError, data: AuditManager.Types.BatchImportEvidenceToAssessmentControlResponse) => void): Request<AuditManager.Types.BatchImportEvidenceToAssessmentControlResponse, AWSError>;
  /**
   *  Creates an assessment in AWS Audit Manager. 
   */
  createAssessment(params: AuditManager.Types.CreateAssessmentRequest, callback?: (err: AWSError, data: AuditManager.Types.CreateAssessmentResponse) => void): Request<AuditManager.Types.CreateAssessmentResponse, AWSError>;
  /**
   *  Creates an assessment in AWS Audit Manager. 
   */
  createAssessment(callback?: (err: AWSError, data: AuditManager.Types.CreateAssessmentResponse) => void): Request<AuditManager.Types.CreateAssessmentResponse, AWSError>;
  /**
   *  Creates a custom framework in AWS Audit Manager. 
   */
  createAssessmentFramework(params: AuditManager.Types.CreateAssessmentFrameworkRequest, callback?: (err: AWSError, data: AuditManager.Types.CreateAssessmentFrameworkResponse) => void): Request<AuditManager.Types.CreateAssessmentFrameworkResponse, AWSError>;
  /**
   *  Creates a custom framework in AWS Audit Manager. 
   */
  createAssessmentFramework(callback?: (err: AWSError, data: AuditManager.Types.CreateAssessmentFrameworkResponse) => void): Request<AuditManager.Types.CreateAssessmentFrameworkResponse, AWSError>;
  /**
   *  Creates an assessment report for the specified assessment. 
   */
  createAssessmentReport(params: AuditManager.Types.CreateAssessmentReportRequest, callback?: (err: AWSError, data: AuditManager.Types.CreateAssessmentReportResponse) => void): Request<AuditManager.Types.CreateAssessmentReportResponse, AWSError>;
  /**
   *  Creates an assessment report for the specified assessment. 
   */
  createAssessmentReport(callback?: (err: AWSError, data: AuditManager.Types.CreateAssessmentReportResponse) => void): Request<AuditManager.Types.CreateAssessmentReportResponse, AWSError>;
  /**
   *  Creates a new custom control in AWS Audit Manager. 
   */
  createControl(params: AuditManager.Types.CreateControlRequest, callback?: (err: AWSError, data: AuditManager.Types.CreateControlResponse) => void): Request<AuditManager.Types.CreateControlResponse, AWSError>;
  /**
   *  Creates a new custom control in AWS Audit Manager. 
   */
  createControl(callback?: (err: AWSError, data: AuditManager.Types.CreateControlResponse) => void): Request<AuditManager.Types.CreateControlResponse, AWSError>;
  /**
   *  Deletes an assessment in AWS Audit Manager. 
   */
  deleteAssessment(params: AuditManager.Types.DeleteAssessmentRequest, callback?: (err: AWSError, data: AuditManager.Types.DeleteAssessmentResponse) => void): Request<AuditManager.Types.DeleteAssessmentResponse, AWSError>;
  /**
   *  Deletes an assessment in AWS Audit Manager. 
   */
  deleteAssessment(callback?: (err: AWSError, data: AuditManager.Types.DeleteAssessmentResponse) => void): Request<AuditManager.Types.DeleteAssessmentResponse, AWSError>;
  /**
   *  Deletes a custom framework in AWS Audit Manager. 
   */
  deleteAssessmentFramework(params: AuditManager.Types.DeleteAssessmentFrameworkRequest, callback?: (err: AWSError, data: AuditManager.Types.DeleteAssessmentFrameworkResponse) => void): Request<AuditManager.Types.DeleteAssessmentFrameworkResponse, AWSError>;
  /**
   *  Deletes a custom framework in AWS Audit Manager. 
   */
  deleteAssessmentFramework(callback?: (err: AWSError, data: AuditManager.Types.DeleteAssessmentFrameworkResponse) => void): Request<AuditManager.Types.DeleteAssessmentFrameworkResponse, AWSError>;
  /**
   *  Deletes an assessment report from an assessment in AWS Audit Manager. 
   */
  deleteAssessmentReport(params: AuditManager.Types.DeleteAssessmentReportRequest, callback?: (err: AWSError, data: AuditManager.Types.DeleteAssessmentReportResponse) => void): Request<AuditManager.Types.DeleteAssessmentReportResponse, AWSError>;
  /**
   *  Deletes an assessment report from an assessment in AWS Audit Manager. 
   */
  deleteAssessmentReport(callback?: (err: AWSError, data: AuditManager.Types.DeleteAssessmentReportResponse) => void): Request<AuditManager.Types.DeleteAssessmentReportResponse, AWSError>;
  /**
   *  Deletes a custom control in AWS Audit Manager. 
   */
  deleteControl(params: AuditManager.Types.DeleteControlRequest, callback?: (err: AWSError, data: AuditManager.Types.DeleteControlResponse) => void): Request<AuditManager.Types.DeleteControlResponse, AWSError>;
  /**
   *  Deletes a custom control in AWS Audit Manager. 
   */
  deleteControl(callback?: (err: AWSError, data: AuditManager.Types.DeleteControlResponse) => void): Request<AuditManager.Types.DeleteControlResponse, AWSError>;
  /**
   *  Deregisters an account in AWS Audit Manager. 
   */
  deregisterAccount(params: AuditManager.Types.DeregisterAccountRequest, callback?: (err: AWSError, data: AuditManager.Types.DeregisterAccountResponse) => void): Request<AuditManager.Types.DeregisterAccountResponse, AWSError>;
  /**
   *  Deregisters an account in AWS Audit Manager. 
   */
  deregisterAccount(callback?: (err: AWSError, data: AuditManager.Types.DeregisterAccountResponse) => void): Request<AuditManager.Types.DeregisterAccountResponse, AWSError>;
  /**
   *  Deregisters the delegated AWS administrator account from the AWS organization. 
   */
  deregisterOrganizationAdminAccount(params: AuditManager.Types.DeregisterOrganizationAdminAccountRequest, callback?: (err: AWSError, data: AuditManager.Types.DeregisterOrganizationAdminAccountResponse) => void): Request<AuditManager.Types.DeregisterOrganizationAdminAccountResponse, AWSError>;
  /**
   *  Deregisters the delegated AWS administrator account from the AWS organization. 
   */
  deregisterOrganizationAdminAccount(callback?: (err: AWSError, data: AuditManager.Types.DeregisterOrganizationAdminAccountResponse) => void): Request<AuditManager.Types.DeregisterOrganizationAdminAccountResponse, AWSError>;
  /**
   *  Disassociates an evidence folder from the specified assessment report in AWS Audit Manager. 
   */
  disassociateAssessmentReportEvidenceFolder(params: AuditManager.Types.DisassociateAssessmentReportEvidenceFolderRequest, callback?: (err: AWSError, data: AuditManager.Types.DisassociateAssessmentReportEvidenceFolderResponse) => void): Request<AuditManager.Types.DisassociateAssessmentReportEvidenceFolderResponse, AWSError>;
  /**
   *  Disassociates an evidence folder from the specified assessment report in AWS Audit Manager. 
   */
  disassociateAssessmentReportEvidenceFolder(callback?: (err: AWSError, data: AuditManager.Types.DisassociateAssessmentReportEvidenceFolderResponse) => void): Request<AuditManager.Types.DisassociateAssessmentReportEvidenceFolderResponse, AWSError>;
  /**
   *  Returns the registration status of an account in AWS Audit Manager. 
   */
  getAccountStatus(params: AuditManager.Types.GetAccountStatusRequest, callback?: (err: AWSError, data: AuditManager.Types.GetAccountStatusResponse) => void): Request<AuditManager.Types.GetAccountStatusResponse, AWSError>;
  /**
   *  Returns the registration status of an account in AWS Audit Manager. 
   */
  getAccountStatus(callback?: (err: AWSError, data: AuditManager.Types.GetAccountStatusResponse) => void): Request<AuditManager.Types.GetAccountStatusResponse, AWSError>;
  /**
   *  Returns an assessment from AWS Audit Manager. 
   */
  getAssessment(params: AuditManager.Types.GetAssessmentRequest, callback?: (err: AWSError, data: AuditManager.Types.GetAssessmentResponse) => void): Request<AuditManager.Types.GetAssessmentResponse, AWSError>;
  /**
   *  Returns an assessment from AWS Audit Manager. 
   */
  getAssessment(callback?: (err: AWSError, data: AuditManager.Types.GetAssessmentResponse) => void): Request<AuditManager.Types.GetAssessmentResponse, AWSError>;
  /**
   *  Returns a framework from AWS Audit Manager. 
   */
  getAssessmentFramework(params: AuditManager.Types.GetAssessmentFrameworkRequest, callback?: (err: AWSError, data: AuditManager.Types.GetAssessmentFrameworkResponse) => void): Request<AuditManager.Types.GetAssessmentFrameworkResponse, AWSError>;
  /**
   *  Returns a framework from AWS Audit Manager. 
   */
  getAssessmentFramework(callback?: (err: AWSError, data: AuditManager.Types.GetAssessmentFrameworkResponse) => void): Request<AuditManager.Types.GetAssessmentFrameworkResponse, AWSError>;
  /**
   *  Returns the URL of a specified assessment report in AWS Audit Manager. 
   */
  getAssessmentReportUrl(params: AuditManager.Types.GetAssessmentReportUrlRequest, callback?: (err: AWSError, data: AuditManager.Types.GetAssessmentReportUrlResponse) => void): Request<AuditManager.Types.GetAssessmentReportUrlResponse, AWSError>;
  /**
   *  Returns the URL of a specified assessment report in AWS Audit Manager. 
   */
  getAssessmentReportUrl(callback?: (err: AWSError, data: AuditManager.Types.GetAssessmentReportUrlResponse) => void): Request<AuditManager.Types.GetAssessmentReportUrlResponse, AWSError>;
  /**
   *  Returns a list of changelogs from AWS Audit Manager. 
   */
  getChangeLogs(params: AuditManager.Types.GetChangeLogsRequest, callback?: (err: AWSError, data: AuditManager.Types.GetChangeLogsResponse) => void): Request<AuditManager.Types.GetChangeLogsResponse, AWSError>;
  /**
   *  Returns a list of changelogs from AWS Audit Manager. 
   */
  getChangeLogs(callback?: (err: AWSError, data: AuditManager.Types.GetChangeLogsResponse) => void): Request<AuditManager.Types.GetChangeLogsResponse, AWSError>;
  /**
   *  Returns a control from AWS Audit Manager. 
   */
  getControl(params: AuditManager.Types.GetControlRequest, callback?: (err: AWSError, data: AuditManager.Types.GetControlResponse) => void): Request<AuditManager.Types.GetControlResponse, AWSError>;
  /**
   *  Returns a control from AWS Audit Manager. 
   */
  getControl(callback?: (err: AWSError, data: AuditManager.Types.GetControlResponse) => void): Request<AuditManager.Types.GetControlResponse, AWSError>;
  /**
   *  Returns a list of delegations from an audit owner to a delegate. 
   */
  getDelegations(params: AuditManager.Types.GetDelegationsRequest, callback?: (err: AWSError, data: AuditManager.Types.GetDelegationsResponse) => void): Request<AuditManager.Types.GetDelegationsResponse, AWSError>;
  /**
   *  Returns a list of delegations from an audit owner to a delegate. 
   */
  getDelegations(callback?: (err: AWSError, data: AuditManager.Types.GetDelegationsResponse) => void): Request<AuditManager.Types.GetDelegationsResponse, AWSError>;
  /**
   *  Returns evidence from AWS Audit Manager. 
   */
  getEvidence(params: AuditManager.Types.GetEvidenceRequest, callback?: (err: AWSError, data: AuditManager.Types.GetEvidenceResponse) => void): Request<AuditManager.Types.GetEvidenceResponse, AWSError>;
  /**
   *  Returns evidence from AWS Audit Manager. 
   */
  getEvidence(callback?: (err: AWSError, data: AuditManager.Types.GetEvidenceResponse) => void): Request<AuditManager.Types.GetEvidenceResponse, AWSError>;
  /**
   *  Returns all evidence from a specified evidence folder in AWS Audit Manager. 
   */
  getEvidenceByEvidenceFolder(params: AuditManager.Types.GetEvidenceByEvidenceFolderRequest, callback?: (err: AWSError, data: AuditManager.Types.GetEvidenceByEvidenceFolderResponse) => void): Request<AuditManager.Types.GetEvidenceByEvidenceFolderResponse, AWSError>;
  /**
   *  Returns all evidence from a specified evidence folder in AWS Audit Manager. 
   */
  getEvidenceByEvidenceFolder(callback?: (err: AWSError, data: AuditManager.Types.GetEvidenceByEvidenceFolderResponse) => void): Request<AuditManager.Types.GetEvidenceByEvidenceFolderResponse, AWSError>;
  /**
   *  Returns an evidence folder from the specified assessment in AWS Audit Manager. 
   */
  getEvidenceFolder(params: AuditManager.Types.GetEvidenceFolderRequest, callback?: (err: AWSError, data: AuditManager.Types.GetEvidenceFolderResponse) => void): Request<AuditManager.Types.GetEvidenceFolderResponse, AWSError>;
  /**
   *  Returns an evidence folder from the specified assessment in AWS Audit Manager. 
   */
  getEvidenceFolder(callback?: (err: AWSError, data: AuditManager.Types.GetEvidenceFolderResponse) => void): Request<AuditManager.Types.GetEvidenceFolderResponse, AWSError>;
  /**
   *  Returns the evidence folders from a specified assessment in AWS Audit Manager. 
   */
  getEvidenceFoldersByAssessment(params: AuditManager.Types.GetEvidenceFoldersByAssessmentRequest, callback?: (err: AWSError, data: AuditManager.Types.GetEvidenceFoldersByAssessmentResponse) => void): Request<AuditManager.Types.GetEvidenceFoldersByAssessmentResponse, AWSError>;
  /**
   *  Returns the evidence folders from a specified assessment in AWS Audit Manager. 
   */
  getEvidenceFoldersByAssessment(callback?: (err: AWSError, data: AuditManager.Types.GetEvidenceFoldersByAssessmentResponse) => void): Request<AuditManager.Types.GetEvidenceFoldersByAssessmentResponse, AWSError>;
  /**
   *  Returns a list of evidence folders associated with a specified control of an assessment in AWS Audit Manager. 
   */
  getEvidenceFoldersByAssessmentControl(params: AuditManager.Types.GetEvidenceFoldersByAssessmentControlRequest, callback?: (err: AWSError, data: AuditManager.Types.GetEvidenceFoldersByAssessmentControlResponse) => void): Request<AuditManager.Types.GetEvidenceFoldersByAssessmentControlResponse, AWSError>;
  /**
   *  Returns a list of evidence folders associated with a specified control of an assessment in AWS Audit Manager. 
   */
  getEvidenceFoldersByAssessmentControl(callback?: (err: AWSError, data: AuditManager.Types.GetEvidenceFoldersByAssessmentControlResponse) => void): Request<AuditManager.Types.GetEvidenceFoldersByAssessmentControlResponse, AWSError>;
  /**
   *  Returns the name of the delegated AWS administrator account for the AWS organization. 
   */
  getOrganizationAdminAccount(params: AuditManager.Types.GetOrganizationAdminAccountRequest, callback?: (err: AWSError, data: AuditManager.Types.GetOrganizationAdminAccountResponse) => void): Request<AuditManager.Types.GetOrganizationAdminAccountResponse, AWSError>;
  /**
   *  Returns the name of the delegated AWS administrator account for the AWS organization. 
   */
  getOrganizationAdminAccount(callback?: (err: AWSError, data: AuditManager.Types.GetOrganizationAdminAccountResponse) => void): Request<AuditManager.Types.GetOrganizationAdminAccountResponse, AWSError>;
  /**
   *  Returns a list of the in-scope AWS services for the specified assessment. 
   */
  getServicesInScope(params: AuditManager.Types.GetServicesInScopeRequest, callback?: (err: AWSError, data: AuditManager.Types.GetServicesInScopeResponse) => void): Request<AuditManager.Types.GetServicesInScopeResponse, AWSError>;
  /**
   *  Returns a list of the in-scope AWS services for the specified assessment. 
   */
  getServicesInScope(callback?: (err: AWSError, data: AuditManager.Types.GetServicesInScopeResponse) => void): Request<AuditManager.Types.GetServicesInScopeResponse, AWSError>;
  /**
   *  Returns the settings for the specified AWS account. 
   */
  getSettings(params: AuditManager.Types.GetSettingsRequest, callback?: (err: AWSError, data: AuditManager.Types.GetSettingsResponse) => void): Request<AuditManager.Types.GetSettingsResponse, AWSError>;
  /**
   *  Returns the settings for the specified AWS account. 
   */
  getSettings(callback?: (err: AWSError, data: AuditManager.Types.GetSettingsResponse) => void): Request<AuditManager.Types.GetSettingsResponse, AWSError>;
  /**
   *  Returns a list of the frameworks available in the AWS Audit Manager framework library. 
   */
  listAssessmentFrameworks(params: AuditManager.Types.ListAssessmentFrameworksRequest, callback?: (err: AWSError, data: AuditManager.Types.ListAssessmentFrameworksResponse) => void): Request<AuditManager.Types.ListAssessmentFrameworksResponse, AWSError>;
  /**
   *  Returns a list of the frameworks available in the AWS Audit Manager framework library. 
   */
  listAssessmentFrameworks(callback?: (err: AWSError, data: AuditManager.Types.ListAssessmentFrameworksResponse) => void): Request<AuditManager.Types.ListAssessmentFrameworksResponse, AWSError>;
  /**
   *  Returns a list of assessment reports created in AWS Audit Manager. 
   */
  listAssessmentReports(params: AuditManager.Types.ListAssessmentReportsRequest, callback?: (err: AWSError, data: AuditManager.Types.ListAssessmentReportsResponse) => void): Request<AuditManager.Types.ListAssessmentReportsResponse, AWSError>;
  /**
   *  Returns a list of assessment reports created in AWS Audit Manager. 
   */
  listAssessmentReports(callback?: (err: AWSError, data: AuditManager.Types.ListAssessmentReportsResponse) => void): Request<AuditManager.Types.ListAssessmentReportsResponse, AWSError>;
  /**
   *  Returns a list of current and past assessments from AWS Audit Manager. 
   */
  listAssessments(params: AuditManager.Types.ListAssessmentsRequest, callback?: (err: AWSError, data: AuditManager.Types.ListAssessmentsResponse) => void): Request<AuditManager.Types.ListAssessmentsResponse, AWSError>;
  /**
   *  Returns a list of current and past assessments from AWS Audit Manager. 
   */
  listAssessments(callback?: (err: AWSError, data: AuditManager.Types.ListAssessmentsResponse) => void): Request<AuditManager.Types.ListAssessmentsResponse, AWSError>;
  /**
   *  Returns a list of controls from AWS Audit Manager. 
   */
  listControls(params: AuditManager.Types.ListControlsRequest, callback?: (err: AWSError, data: AuditManager.Types.ListControlsResponse) => void): Request<AuditManager.Types.ListControlsResponse, AWSError>;
  /**
   *  Returns a list of controls from AWS Audit Manager. 
   */
  listControls(callback?: (err: AWSError, data: AuditManager.Types.ListControlsResponse) => void): Request<AuditManager.Types.ListControlsResponse, AWSError>;
  /**
   *  Returns a list of keywords that pre-mapped to the specified control data source. 
   */
  listKeywordsForDataSource(params: AuditManager.Types.ListKeywordsForDataSourceRequest, callback?: (err: AWSError, data: AuditManager.Types.ListKeywordsForDataSourceResponse) => void): Request<AuditManager.Types.ListKeywordsForDataSourceResponse, AWSError>;
  /**
   *  Returns a list of keywords that pre-mapped to the specified control data source. 
   */
  listKeywordsForDataSource(callback?: (err: AWSError, data: AuditManager.Types.ListKeywordsForDataSourceResponse) => void): Request<AuditManager.Types.ListKeywordsForDataSourceResponse, AWSError>;
  /**
   *  Returns a list of all AWS Audit Manager notifications. 
   */
  listNotifications(params: AuditManager.Types.ListNotificationsRequest, callback?: (err: AWSError, data: AuditManager.Types.ListNotificationsResponse) => void): Request<AuditManager.Types.ListNotificationsResponse, AWSError>;
  /**
   *  Returns a list of all AWS Audit Manager notifications. 
   */
  listNotifications(callback?: (err: AWSError, data: AuditManager.Types.ListNotificationsResponse) => void): Request<AuditManager.Types.ListNotificationsResponse, AWSError>;
  /**
   *  Returns a list of tags for the specified resource in AWS Audit Manager. 
   */
  listTagsForResource(params: AuditManager.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: AuditManager.Types.ListTagsForResourceResponse) => void): Request<AuditManager.Types.ListTagsForResourceResponse, AWSError>;
  /**
   *  Returns a list of tags for the specified resource in AWS Audit Manager. 
   */
  listTagsForResource(callback?: (err: AWSError, data: AuditManager.Types.ListTagsForResourceResponse) => void): Request<AuditManager.Types.ListTagsForResourceResponse, AWSError>;
  /**
   *  Enables AWS Audit Manager for the specified AWS account. 
   */
  registerAccount(params: AuditManager.Types.RegisterAccountRequest, callback?: (err: AWSError, data: AuditManager.Types.RegisterAccountResponse) => void): Request<AuditManager.Types.RegisterAccountResponse, AWSError>;
  /**
   *  Enables AWS Audit Manager for the specified AWS account. 
   */
  registerAccount(callback?: (err: AWSError, data: AuditManager.Types.RegisterAccountResponse) => void): Request<AuditManager.Types.RegisterAccountResponse, AWSError>;
  /**
   *  Enables an AWS account within the organization as the delegated administrator for AWS Audit Manager. 
   */
  registerOrganizationAdminAccount(params: AuditManager.Types.RegisterOrganizationAdminAccountRequest, callback?: (err: AWSError, data: AuditManager.Types.RegisterOrganizationAdminAccountResponse) => void): Request<AuditManager.Types.RegisterOrganizationAdminAccountResponse, AWSError>;
  /**
   *  Enables an AWS account within the organization as the delegated administrator for AWS Audit Manager. 
   */
  registerOrganizationAdminAccount(callback?: (err: AWSError, data: AuditManager.Types.RegisterOrganizationAdminAccountResponse) => void): Request<AuditManager.Types.RegisterOrganizationAdminAccountResponse, AWSError>;
  /**
   *  Tags the specified resource in AWS Audit Manager. 
   */
  tagResource(params: AuditManager.Types.TagResourceRequest, callback?: (err: AWSError, data: AuditManager.Types.TagResourceResponse) => void): Request<AuditManager.Types.TagResourceResponse, AWSError>;
  /**
   *  Tags the specified resource in AWS Audit Manager. 
   */
  tagResource(callback?: (err: AWSError, data: AuditManager.Types.TagResourceResponse) => void): Request<AuditManager.Types.TagResourceResponse, AWSError>;
  /**
   *  Removes a tag from a resource in AWS Audit Manager. 
   */
  untagResource(params: AuditManager.Types.UntagResourceRequest, callback?: (err: AWSError, data: AuditManager.Types.UntagResourceResponse) => void): Request<AuditManager.Types.UntagResourceResponse, AWSError>;
  /**
   *  Removes a tag from a resource in AWS Audit Manager. 
   */
  untagResource(callback?: (err: AWSError, data: AuditManager.Types.UntagResourceResponse) => void): Request<AuditManager.Types.UntagResourceResponse, AWSError>;
  /**
   *  Edits an AWS Audit Manager assessment. 
   */
  updateAssessment(params: AuditManager.Types.UpdateAssessmentRequest, callback?: (err: AWSError, data: AuditManager.Types.UpdateAssessmentResponse) => void): Request<AuditManager.Types.UpdateAssessmentResponse, AWSError>;
  /**
   *  Edits an AWS Audit Manager assessment. 
   */
  updateAssessment(callback?: (err: AWSError, data: AuditManager.Types.UpdateAssessmentResponse) => void): Request<AuditManager.Types.UpdateAssessmentResponse, AWSError>;
  /**
   *  Updates a control within an assessment in AWS Audit Manager. 
   */
  updateAssessmentControl(params: AuditManager.Types.UpdateAssessmentControlRequest, callback?: (err: AWSError, data: AuditManager.Types.UpdateAssessmentControlResponse) => void): Request<AuditManager.Types.UpdateAssessmentControlResponse, AWSError>;
  /**
   *  Updates a control within an assessment in AWS Audit Manager. 
   */
  updateAssessmentControl(callback?: (err: AWSError, data: AuditManager.Types.UpdateAssessmentControlResponse) => void): Request<AuditManager.Types.UpdateAssessmentControlResponse, AWSError>;
  /**
   *  Updates the status of a control set in an AWS Audit Manager assessment. 
   */
  updateAssessmentControlSetStatus(params: AuditManager.Types.UpdateAssessmentControlSetStatusRequest, callback?: (err: AWSError, data: AuditManager.Types.UpdateAssessmentControlSetStatusResponse) => void): Request<AuditManager.Types.UpdateAssessmentControlSetStatusResponse, AWSError>;
  /**
   *  Updates the status of a control set in an AWS Audit Manager assessment. 
   */
  updateAssessmentControlSetStatus(callback?: (err: AWSError, data: AuditManager.Types.UpdateAssessmentControlSetStatusResponse) => void): Request<AuditManager.Types.UpdateAssessmentControlSetStatusResponse, AWSError>;
  /**
   *  Updates a custom framework in AWS Audit Manager. 
   */
  updateAssessmentFramework(params: AuditManager.Types.UpdateAssessmentFrameworkRequest, callback?: (err: AWSError, data: AuditManager.Types.UpdateAssessmentFrameworkResponse) => void): Request<AuditManager.Types.UpdateAssessmentFrameworkResponse, AWSError>;
  /**
   *  Updates a custom framework in AWS Audit Manager. 
   */
  updateAssessmentFramework(callback?: (err: AWSError, data: AuditManager.Types.UpdateAssessmentFrameworkResponse) => void): Request<AuditManager.Types.UpdateAssessmentFrameworkResponse, AWSError>;
  /**
   *  Updates the status of an assessment in AWS Audit Manager. 
   */
  updateAssessmentStatus(params: AuditManager.Types.UpdateAssessmentStatusRequest, callback?: (err: AWSError, data: AuditManager.Types.UpdateAssessmentStatusResponse) => void): Request<AuditManager.Types.UpdateAssessmentStatusResponse, AWSError>;
  /**
   *  Updates the status of an assessment in AWS Audit Manager. 
   */
  updateAssessmentStatus(callback?: (err: AWSError, data: AuditManager.Types.UpdateAssessmentStatusResponse) => void): Request<AuditManager.Types.UpdateAssessmentStatusResponse, AWSError>;
  /**
   *  Updates a custom control in AWS Audit Manager. 
   */
  updateControl(params: AuditManager.Types.UpdateControlRequest, callback?: (err: AWSError, data: AuditManager.Types.UpdateControlResponse) => void): Request<AuditManager.Types.UpdateControlResponse, AWSError>;
  /**
   *  Updates a custom control in AWS Audit Manager. 
   */
  updateControl(callback?: (err: AWSError, data: AuditManager.Types.UpdateControlResponse) => void): Request<AuditManager.Types.UpdateControlResponse, AWSError>;
  /**
   *  Updates AWS Audit Manager settings for the current user account. 
   */
  updateSettings(params: AuditManager.Types.UpdateSettingsRequest, callback?: (err: AWSError, data: AuditManager.Types.UpdateSettingsResponse) => void): Request<AuditManager.Types.UpdateSettingsResponse, AWSError>;
  /**
   *  Updates AWS Audit Manager settings for the current user account. 
   */
  updateSettings(callback?: (err: AWSError, data: AuditManager.Types.UpdateSettingsResponse) => void): Request<AuditManager.Types.UpdateSettingsResponse, AWSError>;
  /**
   *  Validates the integrity of an assessment report in AWS Audit Manager. 
   */
  validateAssessmentReportIntegrity(params: AuditManager.Types.ValidateAssessmentReportIntegrityRequest, callback?: (err: AWSError, data: AuditManager.Types.ValidateAssessmentReportIntegrityResponse) => void): Request<AuditManager.Types.ValidateAssessmentReportIntegrityResponse, AWSError>;
  /**
   *  Validates the integrity of an assessment report in AWS Audit Manager. 
   */
  validateAssessmentReportIntegrity(callback?: (err: AWSError, data: AuditManager.Types.ValidateAssessmentReportIntegrityResponse) => void): Request<AuditManager.Types.ValidateAssessmentReportIntegrityResponse, AWSError>;
}
declare namespace AuditManager {
  export interface AWSAccount {
    /**
     *  The identifier for the specified AWS account. 
     */
    id?: AccountId;
    /**
     *  The email address associated with the specified AWS account. 
     */
    emailAddress?: EmailAddress;
    /**
     *  The name of the specified AWS account. 
     */
    name?: AccountName;
  }
  export type AWSAccounts = AWSAccount[];
  export interface AWSService {
    /**
     *  The name of the AWS service. 
     */
    serviceName?: AWSServiceName;
  }
  export type AWSServiceName = string;
  export type AWSServices = AWSService[];
  export type AccountId = string;
  export type AccountName = string;
  export type AccountStatus = "ACTIVE"|"INACTIVE"|"PENDING_ACTIVATION"|string;
  export type ActionEnum = "CREATE"|"UPDATE_METADATA"|"ACTIVE"|"INACTIVE"|"DELETE"|"UNDER_REVIEW"|"REVIEWED"|"IMPORT_EVIDENCE"|string;
  export type ActionPlanInstructions = string;
  export type ActionPlanTitle = string;
  export interface Assessment {
    /**
     *  The Amazon Resource Name (ARN) of the assessment. 
     */
    arn?: AuditManagerArn;
    /**
     *  The AWS account associated with the assessment. 
     */
    awsAccount?: AWSAccount;
    /**
     *  The metadata for the specified assessment. 
     */
    metadata?: AssessmentMetadata;
    /**
     *  The framework from which the assessment was created. 
     */
    framework?: AssessmentFramework;
    /**
     *  The tags associated with the assessment. 
     */
    tags?: TagMap;
  }
  export interface AssessmentControl {
    /**
     *  The identifier for the specified control. 
     */
    id?: UUID;
    /**
     *  The name of the specified control. 
     */
    name?: ControlName;
    /**
     *  The description of the specified control. 
     */
    description?: ControlDescription;
    /**
     *  The status of the specified control. 
     */
    status?: ControlStatus;
    /**
     *  The response of the specified control. 
     */
    response?: ControlResponse;
    /**
     *  The list of comments attached to the specified control. 
     */
    comments?: ControlComments;
    /**
     *  The list of data sources for the specified evidence. 
     */
    evidenceSources?: EvidenceSources;
    /**
     *  The amount of evidence generated for the control. 
     */
    evidenceCount?: Integer;
    /**
     *  The amount of evidence in the assessment report. 
     */
    assessmentReportEvidenceCount?: Integer;
  }
  export interface AssessmentControlSet {
    /**
     *  The identifier of the control set in the assessment. This is the control set name in a plain string format. 
     */
    id?: ControlSetId;
    /**
     *  The description for the control set. 
     */
    description?: NonEmptyString;
    /**
     *  Specifies the current status of the control set. 
     */
    status?: ControlSetStatus;
    /**
     *  The roles associated with the control set. 
     */
    roles?: Roles;
    /**
     *  The list of controls contained with the control set. 
     */
    controls?: AssessmentControls;
    /**
     *  The delegations associated with the control set. 
     */
    delegations?: Delegations;
    /**
     *  The total number of evidence objects retrieved automatically for the control set. 
     */
    systemEvidenceCount?: Integer;
    /**
     *  The total number of evidence objects uploaded manually to the control set. 
     */
    manualEvidenceCount?: Integer;
  }
  export type AssessmentControlSets = AssessmentControlSet[];
  export type AssessmentControls = AssessmentControl[];
  export type AssessmentDescription = string;
  export interface AssessmentEvidenceFolder {
    /**
     *  The name of the specified evidence folder. 
     */
    name?: AssessmentEvidenceFolderName;
    /**
     *  The date when the first evidence was added to the evidence folder. 
     */
    date?: Timestamp;
    /**
     *  The identifier for the specified assessment. 
     */
    assessmentId?: UUID;
    /**
     *  The identifier for the control set. 
     */
    controlSetId?: ControlSetId;
    /**
     *  The unique identifier for the specified control. 
     */
    controlId?: UUID;
    /**
     *  The identifier for the folder in which evidence is stored. 
     */
    id?: UUID;
    /**
     *  The AWS service from which the evidence was collected. 
     */
    dataSource?: String;
    /**
     *  The name of the user who created the evidence folder. 
     */
    author?: String;
    /**
     *  The total amount of evidence in the evidence folder. 
     */
    totalEvidence?: Integer;
    /**
     *  The total count of evidence included in the assessment report. 
     */
    assessmentReportSelectionCount?: Integer;
    /**
     *  The name of the control. 
     */
    controlName?: ControlName;
    /**
     *  The amount of evidence included in the evidence folder. 
     */
    evidenceResourcesIncludedCount?: Integer;
    /**
     *  The number of evidence that falls under the configuration data category. This evidence is collected from configuration snapshots of other AWS services such as Amazon EC2, Amazon S3, or IAM. 
     */
    evidenceByTypeConfigurationDataCount?: Integer;
    /**
     *  The number of evidence that falls under the manual category. This evidence is imported manually. 
     */
    evidenceByTypeManualCount?: Integer;
    /**
     *  The number of evidence that falls under the compliance check category. This evidence is collected from AWS Config or AWS Security Hub. 
     */
    evidenceByTypeComplianceCheckCount?: Integer;
    /**
     *  The total number of issues that were reported directly from AWS Security Hub, AWS Config, or both. 
     */
    evidenceByTypeComplianceCheckIssuesCount?: Integer;
    /**
     *  The number of evidence that falls under the user activity category. This evidence is collected from AWS CloudTrail logs. 
     */
    evidenceByTypeUserActivityCount?: Integer;
    /**
     *  The total number of AWS resources assessed to generate the evidence. 
     */
    evidenceAwsServiceSourceCount?: Integer;
  }
  export type AssessmentEvidenceFolderName = string;
  export type AssessmentEvidenceFolders = AssessmentEvidenceFolder[];
  export interface AssessmentFramework {
    /**
     *  The unique identifier for the framework. 
     */
    id?: UUID;
    /**
     *  The Amazon Resource Name (ARN) of the specified framework. 
     */
    arn?: AuditManagerArn;
    metadata?: FrameworkMetadata;
    /**
     *  The control sets associated with the framework. 
     */
    controlSets?: AssessmentControlSets;
  }
  export type AssessmentFrameworkDescription = string;
  export interface AssessmentFrameworkMetadata {
    /**
     *  The Amazon Resource Name (ARN) of the framework. 
     */
    arn?: AuditManagerArn;
    /**
     *  The unique identified for the specified framework. 
     */
    id?: UUID;
    /**
     *  The framework type, such as standard or custom. 
     */
    type?: FrameworkType;
    /**
     *  The name of the specified framework. 
     */
    name?: FrameworkName;
    /**
     *  The description of the specified framework. 
     */
    description?: FrameworkDescription;
    /**
     *  The logo associated with the framework. 
     */
    logo?: Filename;
    /**
     *  The compliance type that the new custom framework supports, such as CIS or HIPAA. 
     */
    complianceType?: ComplianceType;
    /**
     *  The number of controls associated with the specified framework. 
     */
    controlsCount?: ControlsCount;
    /**
     *  The number of control sets associated with the specified framework. 
     */
    controlSetsCount?: ControlSetsCount;
    /**
     *  Specifies when the framework was created. 
     */
    createdAt?: Timestamp;
    /**
     *  Specifies when the framework was most recently updated. 
     */
    lastUpdatedAt?: Timestamp;
  }
  export interface AssessmentMetadata {
    /**
     *  The name of the assessment. 
     */
    name?: AssessmentName;
    /**
     *  The unique identifier for the assessment. 
     */
    id?: UUID;
    /**
     *  The description of the assessment. 
     */
    description?: AssessmentDescription;
    /**
     *  The name of a compliance standard related to the assessment, such as PCI-DSS. 
     */
    complianceType?: ComplianceType;
    /**
     *  The overall status of the assessment. 
     */
    status?: AssessmentStatus;
    /**
     *  The destination in which evidence reports are stored for the specified assessment. 
     */
    assessmentReportsDestination?: AssessmentReportsDestination;
    /**
     *  The wrapper of AWS accounts and services in scope for the assessment. 
     */
    scope?: Scope;
    /**
     *  The roles associated with the assessment. 
     */
    roles?: Roles;
    /**
     *  The delegations associated with the assessment. 
     */
    delegations?: Delegations;
    /**
     *  Specifies when the assessment was created. 
     */
    creationTime?: Timestamp;
    /**
     *  The time of the most recent update. 
     */
    lastUpdated?: Timestamp;
  }
  export interface AssessmentMetadataItem {
    /**
     *  The name of the assessment. 
     */
    name?: AssessmentName;
    /**
     *  The unique identifier for the assessment. 
     */
    id?: UUID;
    /**
     *  The name of the compliance standard related to the assessment, such as PCI-DSS. 
     */
    complianceType?: ComplianceType;
    /**
     *  The current status of the assessment. 
     */
    status?: AssessmentStatus;
    /**
     *  The roles associated with the assessment. 
     */
    roles?: Roles;
    /**
     *  The delegations associated with the assessment. 
     */
    delegations?: Delegations;
    /**
     *  Specifies when the assessment was created. 
     */
    creationTime?: Timestamp;
    /**
     *  The time of the most recent update. 
     */
    lastUpdated?: Timestamp;
  }
  export type AssessmentName = string;
  export interface AssessmentReport {
    /**
     *  The unique identifier for the specified assessment report. 
     */
    id?: UUID;
    /**
     *  The name given to the assessment report. 
     */
    name?: AssessmentReportName;
    /**
     *  The description of the specified assessment report. 
     */
    description?: AssessmentReportDescription;
    /**
     *  The identifier for the specified AWS account. 
     */
    awsAccountId?: AccountId;
    /**
     *  The identifier for the specified assessment. 
     */
    assessmentId?: UUID;
    /**
     *  The name of the associated assessment. 
     */
    assessmentName?: AssessmentName;
    /**
     *  The name of the user who created the assessment report. 
     */
    author?: Username;
    /**
     *  The current status of the specified assessment report. 
     */
    status?: AssessmentReportStatus;
    /**
     *  Specifies when the assessment report was created. 
     */
    creationTime?: Timestamp;
  }
  export type AssessmentReportDescription = string;
  export type AssessmentReportDestinationType = "S3"|string;
  export interface AssessmentReportEvidenceError {
    /**
     *  The identifier for the evidence. 
     */
    evidenceId?: UUID;
    /**
     *  The error code returned by the AssessmentReportEvidence API. 
     */
    errorCode?: ErrorCode;
    /**
     *  The error message returned by the AssessmentReportEvidence API. 
     */
    errorMessage?: ErrorMessage;
  }
  export type AssessmentReportEvidenceErrors = AssessmentReportEvidenceError[];
  export interface AssessmentReportMetadata {
    /**
     *  The unique identifier for the assessment report. 
     */
    id?: UUID;
    /**
     *  The name of the assessment report. 
     */
    name?: AssessmentReportName;
    /**
     *  The description of the specified assessment report. 
     */
    description?: AssessmentReportDescription;
    /**
     *  The unique identifier for the associated assessment. 
     */
    assessmentId?: UUID;
    /**
     * The name of the associated assessment. 
     */
    assessmentName?: AssessmentName;
    /**
     *  The name of the user who created the assessment report. 
     */
    author?: Username;
    /**
     *  The current status of the assessment report. 
     */
    status?: AssessmentReportStatus;
    /**
     *  Specifies when the assessment report was created. 
     */
    creationTime?: Timestamp;
  }
  export type AssessmentReportName = string;
  export type AssessmentReportStatus = "COMPLETE"|"IN_PROGRESS"|"FAILED"|string;
  export interface AssessmentReportsDestination {
    /**
     *  The destination type, such as Amazon S3. 
     */
    destinationType?: AssessmentReportDestinationType;
    /**
     *  The destination of the assessment report. 
     */
    destination?: S3Url;
  }
  export type AssessmentReportsMetadata = AssessmentReportMetadata[];
  export type AssessmentStatus = "ACTIVE"|"INACTIVE"|string;
  export interface AssociateAssessmentReportEvidenceFolderRequest {
    /**
     *  The identifier for the specified assessment. 
     */
    assessmentId: UUID;
    /**
     *  The identifier for the folder in which evidence is stored. 
     */
    evidenceFolderId: UUID;
  }
  export interface AssociateAssessmentReportEvidenceFolderResponse {
  }
  export type AuditManagerArn = string;
  export interface BatchAssociateAssessmentReportEvidenceRequest {
    /**
     *  The unique identifier for the specified assessment. 
     */
    assessmentId: UUID;
    /**
     *  The identifier for the folder in which the evidence is stored. 
     */
    evidenceFolderId: UUID;
    /**
     *  The list of evidence identifiers. 
     */
    evidenceIds: EvidenceIds;
  }
  export interface BatchAssociateAssessmentReportEvidenceResponse {
    /**
     *  The identifier for the evidence. 
     */
    evidenceIds?: EvidenceIds;
    /**
     *  A list of errors returned by the BatchAssociateAssessmentReportEvidence API. 
     */
    errors?: AssessmentReportEvidenceErrors;
  }
  export interface BatchCreateDelegationByAssessmentError {
    /**
     *  The API request to batch create delegations in AWS Audit Manager. 
     */
    createDelegationRequest?: CreateDelegationRequest;
    /**
     *  The error code returned by the BatchCreateDelegationByAssessment API. 
     */
    errorCode?: ErrorCode;
    /**
     *  The error message returned by the BatchCreateDelegationByAssessment API. 
     */
    errorMessage?: ErrorMessage;
  }
  export type BatchCreateDelegationByAssessmentErrors = BatchCreateDelegationByAssessmentError[];
  export interface BatchCreateDelegationByAssessmentRequest {
    /**
     *  The API request to batch create delegations in AWS Audit Manager. 
     */
    createDelegationRequests: CreateDelegationRequests;
    /**
     *  The identifier for the specified assessment. 
     */
    assessmentId: UUID;
  }
  export interface BatchCreateDelegationByAssessmentResponse {
    /**
     *  The delegations associated with the assessment. 
     */
    delegations?: Delegations;
    /**
     *  A list of errors returned by the BatchCreateDelegationByAssessment API. 
     */
    errors?: BatchCreateDelegationByAssessmentErrors;
  }
  export interface BatchDeleteDelegationByAssessmentError {
    /**
     *  The identifier for the specified delegation. 
     */
    delegationId?: UUID;
    /**
     *  The error code returned by the BatchDeleteDelegationByAssessment API. 
     */
    errorCode?: ErrorCode;
    /**
     *  The error message returned by the BatchDeleteDelegationByAssessment API. 
     */
    errorMessage?: ErrorMessage;
  }
  export type BatchDeleteDelegationByAssessmentErrors = BatchDeleteDelegationByAssessmentError[];
  export interface BatchDeleteDelegationByAssessmentRequest {
    /**
     *  The identifiers for the specified delegations. 
     */
    delegationIds: DelegationIds;
    /**
     *  The identifier for the specified assessment. 
     */
    assessmentId: UUID;
  }
  export interface BatchDeleteDelegationByAssessmentResponse {
    /**
     *  A list of errors returned by the BatchDeleteDelegationByAssessment API. 
     */
    errors?: BatchDeleteDelegationByAssessmentErrors;
  }
  export interface BatchDisassociateAssessmentReportEvidenceRequest {
    /**
     *  The identifier for the specified assessment. 
     */
    assessmentId: UUID;
    /**
     *  The identifier for the folder in which evidence is stored. 
     */
    evidenceFolderId: UUID;
    /**
     *  The list of evidence identifiers. 
     */
    evidenceIds: EvidenceIds;
  }
  export interface BatchDisassociateAssessmentReportEvidenceResponse {
    /**
     *  The identifier for the evidence. 
     */
    evidenceIds?: EvidenceIds;
    /**
     *  A list of errors returned by the BatchDisassociateAssessmentReportEvidence API. 
     */
    errors?: AssessmentReportEvidenceErrors;
  }
  export interface BatchImportEvidenceToAssessmentControlError {
    /**
     *  Manual evidence that cannot be collected automatically by AWS Audit Manager. 
     */
    manualEvidence?: ManualEvidence;
    /**
     *  The error code returned by the BatchImportEvidenceToAssessmentControl API. 
     */
    errorCode?: ErrorCode;
    /**
     *  The error message returned by the BatchImportEvidenceToAssessmentControl API. 
     */
    errorMessage?: ErrorMessage;
  }
  export type BatchImportEvidenceToAssessmentControlErrors = BatchImportEvidenceToAssessmentControlError[];
  export interface BatchImportEvidenceToAssessmentControlRequest {
    /**
     *  The identifier for the specified assessment. 
     */
    assessmentId: UUID;
    /**
     *  The identifier for the specified control set. 
     */
    controlSetId: ControlSetId;
    /**
     *  The identifier for the specified control. 
     */
    controlId: UUID;
    /**
     *  The list of manual evidence objects. 
     */
    manualEvidence: ManualEvidenceList;
  }
  export interface BatchImportEvidenceToAssessmentControlResponse {
    /**
     *  A list of errors returned by the BatchImportEvidenceToAssessmentControl API. 
     */
    errors?: BatchImportEvidenceToAssessmentControlErrors;
  }
  export type Boolean = boolean;
  export interface ChangeLog {
    /**
     *  The changelog object type, such as an assessment, control, or control set. 
     */
    objectType?: ObjectTypeEnum;
    /**
     *  The name of the changelog object. 
     */
    objectName?: NonEmptyString;
    /**
     *  The action performed. 
     */
    action?: ActionEnum;
    /**
     *  The time of creation for the changelog object. 
     */
    createdAt?: Timestamp;
    /**
     *  The IAM user or role that performed the action. 
     */
    createdBy?: IamArn;
  }
  export type ChangeLogs = ChangeLog[];
  export type ComplianceType = string;
  export interface Control {
    /**
     *  The Amazon Resource Name (ARN) of the specified control. 
     */
    arn?: AuditManagerArn;
    /**
     *  The unique identifier for the control. 
     */
    id?: UUID;
    /**
     *  The type of control, such as custom or standard. 
     */
    type?: ControlType;
    /**
     *  The name of the specified control. 
     */
    name?: ControlName;
    /**
     *  The description of the specified control. 
     */
    description?: ControlDescription;
    /**
     *  The steps to follow to determine if the control has been satisfied. 
     */
    testingInformation?: TestingInformation;
    /**
     *  The title of the action plan for remediating the control. 
     */
    actionPlanTitle?: ActionPlanTitle;
    /**
     *  The recommended actions to carry out if the control is not fulfilled. 
     */
    actionPlanInstructions?: ActionPlanInstructions;
    /**
     *  The data source that determines from where AWS Audit Manager collects evidence for the control. 
     */
    controlSources?: ControlSources;
    /**
     *  The data mapping sources for the specified control. 
     */
    controlMappingSources?: ControlMappingSources;
    /**
     *  Specifies when the control was created. 
     */
    createdAt?: Timestamp;
    /**
     *  Specifies when the control was most recently updated. 
     */
    lastUpdatedAt?: Timestamp;
    /**
     *  The IAM user or role that created the control. 
     */
    createdBy?: CreatedBy;
    /**
     *  The IAM user or role that most recently updated the control. 
     */
    lastUpdatedBy?: LastUpdatedBy;
    /**
     *  The tags associated with the control. 
     */
    tags?: TagMap;
  }
  export interface ControlComment {
    /**
     *  The name of the user who authored the comment. 
     */
    authorName?: Username;
    /**
     *  The body text of a control comment. 
     */
    commentBody?: ControlCommentBody;
    /**
     *  The time when the comment was posted. 
     */
    postedDate?: Timestamp;
  }
  export type ControlCommentBody = string;
  export type ControlComments = ControlComment[];
  export type ControlDescription = string;
  export interface ControlMappingSource {
    /**
     *  The unique identifier for the specified source. 
     */
    sourceId?: UUID;
    /**
     *  The name of the specified source. 
     */
    sourceName?: SourceName;
    /**
     *  The description of the specified source. 
     */
    sourceDescription?: SourceDescription;
    /**
     *  The setup option for the data source, which reflects if the evidence collection is automated or manual. 
     */
    sourceSetUpOption?: SourceSetUpOption;
    /**
     *  Specifies one of the five types of data sources for evidence collection. 
     */
    sourceType?: SourceType;
    sourceKeyword?: SourceKeyword;
    /**
     *  The frequency of evidence collection for the specified control mapping source. 
     */
    sourceFrequency?: SourceFrequency;
    /**
     *  The instructions for troubleshooting the specified control. 
     */
    troubleshootingText?: TroubleshootingText;
  }
  export type ControlMappingSources = ControlMappingSource[];
  export interface ControlMetadata {
    /**
     *  The Amazon Resource Name (ARN) of the specified control. 
     */
    arn?: AuditManagerArn;
    /**
     *  The unique identifier for the specified control. 
     */
    id?: UUID;
    /**
     *  The name of the specified control. 
     */
    name?: ControlName;
    /**
     *  The data source that determines from where AWS Audit Manager collects evidence for the control. 
     */
    controlSources?: ControlSources;
    /**
     *  Specifies when the control was created. 
     */
    createdAt?: Timestamp;
    /**
     *  Specifies when the control was most recently updated. 
     */
    lastUpdatedAt?: Timestamp;
  }
  export type ControlMetadataList = ControlMetadata[];
  export type ControlName = string;
  export type ControlResponse = "MANUAL"|"AUTOMATE"|"DEFER"|"IGNORE"|string;
  export interface ControlSet {
    /**
     *  The identifier of the control set in the assessment. This is the control set name in a plain string format. 
     */
    id?: UUID;
    /**
     *  The name of the control set. 
     */
    name?: ControlSetName;
    /**
     *  The list of controls within the control set. 
     */
    controls?: Controls;
  }
  export type ControlSetId = string;
  export type ControlSetName = string;
  export type ControlSetStatus = "ACTIVE"|"UNDER_REVIEW"|"REVIEWED"|string;
  export type ControlSets = ControlSet[];
  export type ControlSetsCount = number;
  export type ControlSources = string;
  export type ControlStatus = "UNDER_REVIEW"|"REVIEWED"|"INACTIVE"|string;
  export type ControlType = "Standard"|"Custom"|string;
  export type Controls = Control[];
  export type ControlsCount = number;
  export interface CreateAssessmentFrameworkControl {
    /**
     *  The unique identifier of the control. 
     */
    id?: UUID;
  }
  export interface CreateAssessmentFrameworkControlSet {
    /**
     *  The name of the specified control set. 
     */
    name?: ControlSetName;
    /**
     *  The list of controls within the control set. This does not contain the control set ID. 
     */
    controls?: CreateAssessmentFrameworkControls;
  }
  export type CreateAssessmentFrameworkControlSets = CreateAssessmentFrameworkControlSet[];
  export type CreateAssessmentFrameworkControls = CreateAssessmentFrameworkControl[];
  export interface CreateAssessmentFrameworkRequest {
    /**
     *  The name of the new custom framework. 
     */
    name: FrameworkName;
    /**
     *  An optional description for the new custom framework. 
     */
    description?: FrameworkDescription;
    /**
     *  The compliance type that the new custom framework supports, such as CIS or HIPAA. 
     */
    complianceType?: ComplianceType;
    /**
     *  The control sets to be associated with the framework. 
     */
    controlSets: CreateAssessmentFrameworkControlSets;
    /**
     *  The tags associated with the framework. 
     */
    tags?: TagMap;
  }
  export interface CreateAssessmentFrameworkResponse {
    /**
     *  The name of the new framework returned by the CreateAssessmentFramework API. 
     */
    framework?: Framework;
  }
  export interface CreateAssessmentReportRequest {
    /**
     *  The name of the new assessment report. 
     */
    name: AssessmentReportName;
    /**
     *  The description of the assessment report. 
     */
    description?: AssessmentReportDescription;
    /**
     *  The identifier for the specified assessment. 
     */
    assessmentId: UUID;
  }
  export interface CreateAssessmentReportResponse {
    /**
     *  The new assessment report returned by the CreateAssessmentReport API. 
     */
    assessmentReport?: AssessmentReport;
  }
  export interface CreateAssessmentRequest {
    /**
     *  The name of the assessment to be created. 
     */
    name: AssessmentName;
    /**
     *  The optional description of the assessment to be created. 
     */
    description?: AssessmentDescription;
    /**
     *  The assessment report storage destination for the specified assessment that is being created. 
     */
    assessmentReportsDestination: AssessmentReportsDestination;
    scope: Scope;
    /**
     *  The list of roles for the specified assessment. 
     */
    roles: Roles;
    /**
     *  The identifier for the specified framework. 
     */
    frameworkId: UUID;
    /**
     *  The tags associated with the assessment. 
     */
    tags?: TagMap;
  }
  export interface CreateAssessmentResponse {
    assessment?: Assessment;
  }
  export interface CreateControlMappingSource {
    /**
     *  The name of the control mapping data source. 
     */
    sourceName?: SourceName;
    /**
     *  The description of the data source that determines from where AWS Audit Manager collects evidence for the control. 
     */
    sourceDescription?: SourceDescription;
    /**
     *  The setup option for the data source, which reflects if the evidence collection is automated or manual. 
     */
    sourceSetUpOption?: SourceSetUpOption;
    /**
     *  Specifies one of the five types of data sources for evidence collection. 
     */
    sourceType?: SourceType;
    sourceKeyword?: SourceKeyword;
    /**
     *  The frequency of evidence collection for the specified control mapping source. 
     */
    sourceFrequency?: SourceFrequency;
    /**
     *  The instructions for troubleshooting the specified control. 
     */
    troubleshootingText?: TroubleshootingText;
  }
  export type CreateControlMappingSources = CreateControlMappingSource[];
  export interface CreateControlRequest {
    /**
     *  The name of the control. 
     */
    name: ControlName;
    /**
     *  The description of the control. 
     */
    description?: ControlDescription;
    /**
     *  The steps to follow to determine if the control has been satisfied. 
     */
    testingInformation?: TestingInformation;
    /**
     *  The title of the action plan for remediating the control. 
     */
    actionPlanTitle?: ActionPlanTitle;
    /**
     *  The recommended actions to carry out if the control is not fulfilled. 
     */
    actionPlanInstructions?: ActionPlanInstructions;
    /**
     *  The data mapping sources for the specified control. 
     */
    controlMappingSources: CreateControlMappingSources;
    /**
     *  The tags associated with the control. 
     */
    tags?: TagMap;
  }
  export interface CreateControlResponse {
    /**
     *  The new control returned by the CreateControl API. 
     */
    control?: Control;
  }
  export interface CreateDelegationRequest {
    /**
     *  A comment related to the delegation request. 
     */
    comment?: DelegationComment;
    /**
     *  The unique identifier for the control set. 
     */
    controlSetId?: ControlSetId;
    /**
     *  The Amazon Resource Name (ARN) of the IAM role. 
     */
    roleArn?: IamArn;
    /**
     *  The type of customer persona.   In CreateAssessment, roleType can only be PROCESS_OWNER.  In UpdateSettings, roleType can only be PROCESS_OWNER. In BatchCreateDelegationByAssessment, roleType can only be RESOURCE_OWNER. 
     */
    roleType?: RoleType;
  }
  export type CreateDelegationRequests = CreateDelegationRequest[];
  export type CreatedBy = string;
  export interface Delegation {
    /**
     *  The unique identifier for the delegation. 
     */
    id?: UUID;
    /**
     *  The name of the associated assessment. 
     */
    assessmentName?: AssessmentName;
    /**
     *  The identifier for the associated assessment. 
     */
    assessmentId?: UUID;
    /**
     *  The status of the delegation. 
     */
    status?: DelegationStatus;
    /**
     *  The Amazon Resource Name (ARN) of the IAM role. 
     */
    roleArn?: IamArn;
    /**
     *  The type of customer persona.   In CreateAssessment, roleType can only be PROCESS_OWNER.  In UpdateSettings, roleType can only be PROCESS_OWNER. In BatchCreateDelegationByAssessment, roleType can only be RESOURCE_OWNER. 
     */
    roleType?: RoleType;
    /**
     *  Specifies when the delegation was created. 
     */
    creationTime?: Timestamp;
    /**
     *  Specifies when the delegation was last updated. 
     */
    lastUpdated?: Timestamp;
    /**
     *  The identifier for the associated control set. 
     */
    controlSetId?: ControlSetId;
    /**
     *  The comment related to the delegation. 
     */
    comment?: DelegationComment;
    /**
     *  The IAM user or role that created the delegation. 
     */
    createdBy?: CreatedBy;
  }
  export type DelegationComment = string;
  export type DelegationIds = UUID[];
  export interface DelegationMetadata {
    /**
     *  The unique identifier for the delegation. 
     */
    id?: UUID;
    /**
     *  The name of the associated assessment. 
     */
    assessmentName?: AssessmentName;
    /**
     *  The unique identifier for the specified assessment. 
     */
    assessmentId?: UUID;
    /**
     *  The current status of the delgation. 
     */
    status?: DelegationStatus;
    /**
     *  The Amazon Resource Name (ARN) of the IAM role. 
     */
    roleArn?: IamArn;
    /**
     *  Specifies when the delegation was created. 
     */
    creationTime?: Timestamp;
    /**
     *  Specifies the name of the control set delegated for review. 
     */
    controlSetName?: NonEmptyString;
  }
  export type DelegationMetadataList = DelegationMetadata[];
  export type DelegationStatus = "IN_PROGRESS"|"UNDER_REVIEW"|"COMPLETE"|string;
  export type Delegations = Delegation[];
  export interface DeleteAssessmentFrameworkRequest {
    /**
     *  The identifier for the specified framework. 
     */
    frameworkId: UUID;
  }
  export interface DeleteAssessmentFrameworkResponse {
  }
  export interface DeleteAssessmentReportRequest {
    /**
     *  The identifier for the specified assessment. 
     */
    assessmentId: UUID;
    /**
     *  The unique identifier for the assessment report. 
     */
    assessmentReportId: UUID;
  }
  export interface DeleteAssessmentReportResponse {
  }
  export interface DeleteAssessmentRequest {
    /**
     *  The identifier for the specified assessment. 
     */
    assessmentId: UUID;
  }
  export interface DeleteAssessmentResponse {
  }
  export interface DeleteControlRequest {
    /**
     *  The identifier for the specified control. 
     */
    controlId: UUID;
  }
  export interface DeleteControlResponse {
  }
  export interface DeregisterAccountRequest {
  }
  export interface DeregisterAccountResponse {
    /**
     *  The registration status of the account. 
     */
    status?: AccountStatus;
  }
  export interface DeregisterOrganizationAdminAccountRequest {
    /**
     *  The identifier for the specified administrator account. 
     */
    adminAccountId?: AccountId;
  }
  export interface DeregisterOrganizationAdminAccountResponse {
  }
  export interface DisassociateAssessmentReportEvidenceFolderRequest {
    /**
     *  The identifier for the specified assessment. 
     */
    assessmentId: UUID;
    /**
     *  The identifier for the folder in which evidence is stored. 
     */
    evidenceFolderId: UUID;
  }
  export interface DisassociateAssessmentReportEvidenceFolderResponse {
  }
  export type EmailAddress = string;
  export type ErrorCode = string;
  export type ErrorMessage = string;
  export type EventName = string;
  export interface Evidence {
    /**
     *  The data source from which the specified evidence was collected. 
     */
    dataSource?: String;
    /**
     *  The identifier for the specified AWS account. 
     */
    evidenceAwsAccountId?: AccountId;
    /**
     *  The timestamp that represents when the evidence was collected. 
     */
    time?: Timestamp;
    /**
     *  The AWS service from which the evidence is collected. 
     */
    eventSource?: AWSServiceName;
    /**
     *  The name of the specified evidence event. 
     */
    eventName?: EventName;
    /**
     *  The type of automated evidence. 
     */
    evidenceByType?: String;
    /**
     *  The list of resources assessed to generate the evidence. 
     */
    resourcesIncluded?: Resources;
    /**
     *  The names and values used by the evidence event, including an attribute name (such as allowUsersToChangePassword) and value (such as true or false). 
     */
    attributes?: EvidenceAttributes;
    /**
     *  The unique identifier for the IAM user or role associated with the evidence. 
     */
    iamId?: IamArn;
    /**
     *  The evaluation status for evidence that falls under the compliance check category. For evidence collected from AWS Security Hub, a Pass or Fail result is shown. For evidence collected from AWS Config, a Compliant or Noncompliant result is shown. 
     */
    complianceCheck?: String;
    /**
     *  The AWS account from which the evidence is collected, and its AWS organization path. 
     */
    awsOrganization?: String;
    /**
     *  The identifier for the specified AWS account. 
     */
    awsAccountId?: AccountId;
    /**
     *  The identifier for the folder in which the evidence is stored. 
     */
    evidenceFolderId?: UUID;
    /**
     *  The identifier for the evidence. 
     */
    id?: UUID;
    /**
     *  Specifies whether the evidence is inclded in the assessment report. 
     */
    assessmentReportSelection?: String;
  }
  export type EvidenceAttributeKey = string;
  export type EvidenceAttributeValue = string;
  export type EvidenceAttributes = {[key: string]: EvidenceAttributeValue};
  export type EvidenceIds = UUID[];
  export type EvidenceList = Evidence[];
  export type EvidenceSources = NonEmptyString[];
  export type Filename = string;
  export interface Framework {
    /**
     *  The Amazon Resource Name (ARN) of the specified framework. 
     */
    arn?: AuditManagerArn;
    /**
     *  The unique identifier for the specified framework. 
     */
    id?: UUID;
    /**
     *  The name of the specified framework. 
     */
    name?: FrameworkName;
    /**
     *  The framework type, such as custom or standard. 
     */
    type?: FrameworkType;
    /**
     *  The compliance type that the new custom framework supports, such as CIS or HIPAA. 
     */
    complianceType?: ComplianceType;
    /**
     *  The description of the specified framework. 
     */
    description?: FrameworkDescription;
    /**
     *  The logo associated with the framework. 
     */
    logo?: Filename;
    /**
     *  The sources from which AWS Audit Manager collects evidence for the control. 
     */
    controlSources?: ControlSources;
    /**
     *  The control sets associated with the framework. 
     */
    controlSets?: ControlSets;
    /**
     *  Specifies when the framework was created. 
     */
    createdAt?: Timestamp;
    /**
     *  Specifies when the framework was most recently updated. 
     */
    lastUpdatedAt?: Timestamp;
    /**
     *  The IAM user or role that created the framework. 
     */
    createdBy?: CreatedBy;
    /**
     *  The IAM user or role that most recently updated the framework. 
     */
    lastUpdatedBy?: LastUpdatedBy;
    /**
     *  The tags associated with the framework. 
     */
    tags?: TagMap;
  }
  export type FrameworkDescription = string;
  export interface FrameworkMetadata {
    /**
     *  The name of the framework. 
     */
    name?: AssessmentName;
    /**
     *  The description of the framework. 
     */
    description?: AssessmentFrameworkDescription;
    /**
     *  The logo associated with the framework. 
     */
    logo?: Filename;
    /**
     *  The compliance standard associated with the framework, such as PCI-DSS or HIPAA. 
     */
    complianceType?: ComplianceType;
  }
  export type FrameworkMetadataList = AssessmentFrameworkMetadata[];
  export type FrameworkName = string;
  export type FrameworkType = "Standard"|"Custom"|string;
  export type GenericArn = string;
  export interface GetAccountStatusRequest {
  }
  export interface GetAccountStatusResponse {
    /**
     *  The status of the specified AWS account. 
     */
    status?: AccountStatus;
  }
  export interface GetAssessmentFrameworkRequest {
    /**
     *  The identifier for the specified framework. 
     */
    frameworkId: UUID;
  }
  export interface GetAssessmentFrameworkResponse {
    /**
     *  The framework returned by the GetAssessmentFramework API. 
     */
    framework?: Framework;
  }
  export interface GetAssessmentReportUrlRequest {
    /**
     *  The identifier for the assessment report. 
     */
    assessmentReportId: UUID;
    /**
     *  The identifier for the specified assessment. 
     */
    assessmentId: UUID;
  }
  export interface GetAssessmentReportUrlResponse {
    preSignedUrl?: URL;
  }
  export interface GetAssessmentRequest {
    /**
     *  The identifier for the specified assessment. 
     */
    assessmentId: UUID;
  }
  export interface GetAssessmentResponse {
    assessment?: Assessment;
  }
  export interface GetChangeLogsRequest {
    /**
     *  The identifier for the specified assessment. 
     */
    assessmentId: UUID;
    /**
     *  The identifier for the specified control set. 
     */
    controlSetId?: ControlSetId;
    /**
     *  The identifier for the specified control. 
     */
    controlId?: UUID;
    /**
     *  The pagination token used to fetch the next set of results. 
     */
    nextToken?: Token;
    /**
     *  Represents the maximum number of results per page, or per API request call. 
     */
    maxResults?: MaxResults;
  }
  export interface GetChangeLogsResponse {
    /**
     *  The list of user activity for the control. 
     */
    changeLogs?: ChangeLogs;
    /**
     *  The pagination token used to fetch the next set of results. 
     */
    nextToken?: Token;
  }
  export interface GetControlRequest {
    /**
     *  The identifier for the specified control. 
     */
    controlId: UUID;
  }
  export interface GetControlResponse {
    /**
     *  The name of the control returned by the GetControl API. 
     */
    control?: Control;
  }
  export interface GetDelegationsRequest {
    /**
     *  The pagination token used to fetch the next set of results. 
     */
    nextToken?: Token;
    /**
     *  Represents the maximum number of results per page, or per API request call. 
     */
    maxResults?: MaxResults;
  }
  export interface GetDelegationsResponse {
    /**
     *  The list of delegations returned by the GetDelegations API. 
     */
    delegations?: DelegationMetadataList;
    /**
     *  The pagination token used to fetch the next set of results. 
     */
    nextToken?: Token;
  }
  export interface GetEvidenceByEvidenceFolderRequest {
    /**
     *  The identifier for the specified assessment. 
     */
    assessmentId: UUID;
    /**
     *  The identifier for the control set. 
     */
    controlSetId: ControlSetId;
    /**
     *  The unique identifier for the folder in which the evidence is stored. 
     */
    evidenceFolderId: UUID;
    /**
     *  The pagination token used to fetch the next set of results. 
     */
    nextToken?: Token;
    /**
     *  Represents the maximum number of results per page, or per API request call. 
     */
    maxResults?: MaxResults;
  }
  export interface GetEvidenceByEvidenceFolderResponse {
    /**
     *  The list of evidence returned by the GetEvidenceByEvidenceFolder API. 
     */
    evidence?: EvidenceList;
    /**
     *  The pagination token used to fetch the next set of results. 
     */
    nextToken?: Token;
  }
  export interface GetEvidenceFolderRequest {
    /**
     *  The identifier for the specified assessment. 
     */
    assessmentId: UUID;
    /**
     *  The identifier for the specified control set. 
     */
    controlSetId: ControlSetId;
    /**
     *  The identifier for the folder in which the evidence is stored. 
     */
    evidenceFolderId: UUID;
  }
  export interface GetEvidenceFolderResponse {
    /**
     *  The folder in which evidence is stored. 
     */
    evidenceFolder?: AssessmentEvidenceFolder;
  }
  export interface GetEvidenceFoldersByAssessmentControlRequest {
    /**
     *  The identifier for the specified assessment. 
     */
    assessmentId: UUID;
    /**
     *  The identifier for the specified control set. 
     */
    controlSetId: ControlSetId;
    /**
     *  The identifier for the specified control. 
     */
    controlId: UUID;
    /**
     *  The pagination token used to fetch the next set of results. 
     */
    nextToken?: Token;
    /**
     *  Represents the maximum number of results per page, or per API request call. 
     */
    maxResults?: MaxResults;
  }
  export interface GetEvidenceFoldersByAssessmentControlResponse {
    /**
     *  The list of evidence folders returned by the GetEvidenceFoldersByAssessmentControl API. 
     */
    evidenceFolders?: AssessmentEvidenceFolders;
    /**
     *  The pagination token used to fetch the next set of results. 
     */
    nextToken?: Token;
  }
  export interface GetEvidenceFoldersByAssessmentRequest {
    /**
     *  The identifier for the specified assessment. 
     */
    assessmentId: UUID;
    /**
     *  The pagination token used to fetch the next set of results. 
     */
    nextToken?: Token;
    /**
     *  Represents the maximum number of results per page, or per API request call. 
     */
    maxResults?: MaxResults;
  }
  export interface GetEvidenceFoldersByAssessmentResponse {
    /**
     *  The list of evidence folders returned by the GetEvidenceFoldersByAssessment API. 
     */
    evidenceFolders?: AssessmentEvidenceFolders;
    /**
     *  The pagination token used to fetch the next set of results. 
     */
    nextToken?: Token;
  }
  export interface GetEvidenceRequest {
    /**
     *  The identifier for the specified assessment. 
     */
    assessmentId: UUID;
    /**
     *  The identifier for the specified control set. 
     */
    controlSetId: ControlSetId;
    /**
     *  The identifier for the folder in which the evidence is stored. 
     */
    evidenceFolderId: UUID;
    /**
     *  The identifier for the evidence. 
     */
    evidenceId: UUID;
  }
  export interface GetEvidenceResponse {
    /**
     *  The evidence returned by the GetEvidenceResponse API. 
     */
    evidence?: Evidence;
  }
  export interface GetOrganizationAdminAccountRequest {
  }
  export interface GetOrganizationAdminAccountResponse {
    /**
     *  The identifier for the specified administrator account. 
     */
    adminAccountId?: AccountId;
    /**
     *  The identifier for the specified organization. 
     */
    organizationId?: organizationId;
  }
  export interface GetServicesInScopeRequest {
  }
  export interface GetServicesInScopeResponse {
    /**
     *  The metadata associated with the aAWS service. 
     */
    serviceMetadata?: ServiceMetadataList;
  }
  export interface GetSettingsRequest {
    /**
     *  The list of SettingAttribute enum values. 
     */
    attribute: SettingAttribute;
  }
  export interface GetSettingsResponse {
    /**
     *  The settings object that holds all supported AWS Audit Manager settings. 
     */
    settings?: Settings;
  }
  export type HyperlinkName = string;
  export type IamArn = string;
  export type Integer = number;
  export type KeywordInputType = "SELECT_FROM_LIST"|string;
  export type KeywordValue = string;
  export type Keywords = KeywordValue[];
  export type KmsKey = string;
  export type LastUpdatedBy = string;
  export interface ListAssessmentFrameworksRequest {
    /**
     *  The type of framework, such as standard or custom. 
     */
    frameworkType: FrameworkType;
    /**
     *  The pagination token used to fetch the next set of results. 
     */
    nextToken?: Token;
    /**
     *  Represents the maximum number of results per page, or per API request call. 
     */
    maxResults?: MaxResults;
  }
  export interface ListAssessmentFrameworksResponse {
    /**
     *  The list of metadata objects for the specified framework. 
     */
    frameworkMetadataList?: FrameworkMetadataList;
    /**
     *  The pagination token used to fetch the next set of results. 
     */
    nextToken?: Token;
  }
  export type ListAssessmentMetadata = AssessmentMetadataItem[];
  export interface ListAssessmentReportsRequest {
    /**
     *  The pagination token used to fetch the next set of results. 
     */
    nextToken?: Token;
    /**
     *  Represents the maximum number of results per page, or per API request call. 
     */
    maxResults?: MaxResults;
  }
  export interface ListAssessmentReportsResponse {
    /**
     *  The list of assessment reports returned by the ListAssessmentReports API. 
     */
    assessmentReports?: AssessmentReportsMetadata;
    /**
     *  The pagination token used to fetch the next set of results. 
     */
    nextToken?: Token;
  }
  export interface ListAssessmentsRequest {
    /**
     *  The pagination token used to fetch the next set of results. 
     */
    nextToken?: Token;
    /**
     *  Represents the maximum number of results per page, or per API request call. 
     */
    maxResults?: MaxResults;
  }
  export interface ListAssessmentsResponse {
    /**
     *  The metadata associated with the assessment. 
     */
    assessmentMetadata?: ListAssessmentMetadata;
    /**
     *  The pagination token used to fetch the next set of results. 
     */
    nextToken?: Token;
  }
  export interface ListControlsRequest {
    /**
     *  The type of control, such as standard or custom. 
     */
    controlType: ControlType;
    /**
     *  The pagination token used to fetch the next set of results. 
     */
    nextToken?: Token;
    /**
     *  Represents the maximum number of results per page, or per API request call. 
     */
    maxResults?: MaxResults;
  }
  export interface ListControlsResponse {
    /**
     *  The list of control metadata objects returned by the ListControls API. 
     */
    controlMetadataList?: ControlMetadataList;
    /**
     *  The pagination token used to fetch the next set of results. 
     */
    nextToken?: Token;
  }
  export interface ListKeywordsForDataSourceRequest {
    /**
     *  The control mapping data source to which the keywords apply. 
     */
    source: SourceType;
    /**
     *  The pagination token used to fetch the next set of results. 
     */
    nextToken?: Token;
    /**
     *  Represents the maximum number of results per page, or per API request call. 
     */
    maxResults?: MaxResults;
  }
  export interface ListKeywordsForDataSourceResponse {
    /**
     *  The list of keywords for the specified event mapping source. 
     */
    keywords?: Keywords;
    /**
     *  The pagination token used to fetch the next set of results. 
     */
    nextToken?: Token;
  }
  export interface ListNotificationsRequest {
    /**
     *  The pagination token used to fetch the next set of results. 
     */
    nextToken?: Token;
    /**
     *  Represents the maximum number of results per page, or per API request call. 
     */
    maxResults?: MaxResults;
  }
  export interface ListNotificationsResponse {
    /**
     *  The returned list of notifications. 
     */
    notifications?: Notifications;
    /**
     *  The pagination token used to fetch the next set of results. 
     */
    nextToken?: Token;
  }
  export interface ListTagsForResourceRequest {
    /**
     *  The Amazon Resource Name (ARN) of the specified resource. 
     */
    resourceArn: AuditManagerArn;
  }
  export interface ListTagsForResourceResponse {
    /**
     *  The list of tags returned by the ListTagsForResource API. 
     */
    tags?: TagMap;
  }
  export interface ManualEvidence {
    /**
     *  The Amazon S3 URL that points to a manual evidence object. 
     */
    s3ResourcePath?: S3Url;
  }
  export type ManualEvidenceList = ManualEvidence[];
  export type MaxResults = number;
  export type NonEmptyString = string;
  export interface Notification {
    /**
     *  The unique identifier for the notification. 
     */
    id?: TimestampUUID;
    /**
     *  The identifier for the specified assessment. 
     */
    assessmentId?: UUID;
    /**
     *  The name of the related assessment. 
     */
    assessmentName?: AssessmentName;
    /**
     *  The identifier for the specified control set. 
     */
    controlSetId?: ControlSetId;
    /**
     *  Specifies the name of the control set that the notification is about. 
     */
    controlSetName?: NonEmptyString;
    /**
     *  The description of the notification. 
     */
    description?: NonEmptyString;
    /**
     *  The time when the notification was sent. 
     */
    eventTime?: Timestamp;
    /**
     *  The sender of the notification. 
     */
    source?: NonEmptyString;
  }
  export type Notifications = Notification[];
  export type ObjectTypeEnum = "ASSESSMENT"|"CONTROL_SET"|"CONTROL"|"DELEGATION"|"ASSESSMENT_REPORT"|string;
  export interface RegisterAccountRequest {
    /**
     *  The AWS KMS key details. 
     */
    kmsKey?: KmsKey;
    /**
     *  The delegated administrator account for AWS Audit Manager. 
     */
    delegatedAdminAccount?: AccountId;
  }
  export interface RegisterAccountResponse {
    /**
     *  The status of the account registration request. 
     */
    status?: AccountStatus;
  }
  export interface RegisterOrganizationAdminAccountRequest {
    /**
     *  The identifier for the specified delegated administrator account. 
     */
    adminAccountId: AccountId;
  }
  export interface RegisterOrganizationAdminAccountResponse {
    /**
     *  The identifier for the specified delegated administrator account. 
     */
    adminAccountId?: AccountId;
    /**
     *  The identifier for the specified AWS organization. 
     */
    organizationId?: organizationId;
  }
  export interface Resource {
    /**
     *  The Amazon Resource Name (ARN) for the specified resource. 
     */
    arn?: GenericArn;
    /**
     *  The value of the specified resource. 
     */
    value?: String;
  }
  export type Resources = Resource[];
  export interface Role {
    /**
     *  The type of customer persona.   In CreateAssessment, roleType can only be PROCESS_OWNER.  In UpdateSettings, roleType can only be PROCESS_OWNER. In BatchCreateDelegationByAssessment, roleType can only be RESOURCE_OWNER. 
     */
    roleType?: RoleType;
    /**
     *  The Amazon Resource Name (ARN) of the IAM role. 
     */
    roleArn?: IamArn;
  }
  export type RoleType = "PROCESS_OWNER"|"RESOURCE_OWNER"|string;
  export type Roles = Role[];
  export type S3Url = string;
  export type SNSTopic = string;
  export interface Scope {
    /**
     *  The AWS accounts included in the scope of the assessment. 
     */
    awsAccounts?: AWSAccounts;
    /**
     *  The AWS services included in the scope of the assessment. 
     */
    awsServices?: AWSServices;
  }
  export interface ServiceMetadata {
    /**
     *  The name of the AWS service. 
     */
    name?: AWSServiceName;
    /**
     *  The display name of the AWS service. 
     */
    displayName?: NonEmptyString;
    /**
     *  The description of the specified AWS service. 
     */
    description?: NonEmptyString;
    /**
     *  The category in which the AWS service belongs, such as compute, storage, database, and so on. 
     */
    category?: NonEmptyString;
  }
  export type ServiceMetadataList = ServiceMetadata[];
  export type SettingAttribute = "ALL"|"IS_AWS_ORG_ENABLED"|"SNS_TOPIC"|"DEFAULT_ASSESSMENT_REPORTS_DESTINATION"|"DEFAULT_PROCESS_OWNERS"|string;
  export interface Settings {
    /**
     *  Specifies whether AWS Organizations is enabled. 
     */
    isAwsOrgEnabled?: Boolean;
    /**
     *  The designated Amazon Simple Notification Service (Amazon SNS) topic. 
     */
    snsTopic?: SNSTopic;
    /**
     *  The default storage destination for assessment reports. 
     */
    defaultAssessmentReportsDestination?: AssessmentReportsDestination;
    /**
     *  The designated default audit owners. 
     */
    defaultProcessOwners?: Roles;
    /**
     *  The AWS KMS key details. 
     */
    kmsKey?: KmsKey;
  }
  export type SnsArn = string;
  export type SourceDescription = string;
  export type SourceFrequency = "DAILY"|"WEEKLY"|"MONTHLY"|string;
  export interface SourceKeyword {
    /**
     *  The method of input for the specified keyword. 
     */
    keywordInputType?: KeywordInputType;
    /**
     *  The value of the keyword used to search AWS CloudTrail logs when mapping a control data source. 
     */
    keywordValue?: KeywordValue;
  }
  export type SourceName = string;
  export type SourceSetUpOption = "System_Controls_Mapping"|"Procedural_Controls_Mapping"|string;
  export type SourceType = "AWS_Cloudtrail"|"AWS_Config"|"AWS_Security_Hub"|"AWS_API_Call"|"MANUAL"|string;
  export type String = string;
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagMap = {[key: string]: TagValue};
  export interface TagResourceRequest {
    /**
     *  The Amazon Resource Name (ARN) of the specified resource. 
     */
    resourceArn: AuditManagerArn;
    /**
     *  The tags to be associated with the resource. 
     */
    tags: TagMap;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type TestingInformation = string;
  export type Timestamp = Date;
  export type TimestampUUID = string;
  export type Token = string;
  export type TroubleshootingText = string;
  export interface URL {
    /**
     *  The name or word used as a hyperlink to the URL. 
     */
    hyperlinkName?: HyperlinkName;
    /**
     *  The unique identifier for the internet resource. 
     */
    link?: UrlLink;
  }
  export type UUID = string;
  export interface UntagResourceRequest {
    /**
     *  The Amazon Resource Name (ARN) of the specified resource. 
     */
    resourceArn: AuditManagerArn;
    /**
     *  The name or key of the tag. 
     */
    tagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateAssessmentControlRequest {
    /**
     *  The identifier for the specified assessment. 
     */
    assessmentId: UUID;
    /**
     *  The identifier for the specified control set. 
     */
    controlSetId: ControlSetId;
    /**
     *  The identifier for the specified control. 
     */
    controlId: UUID;
    /**
     *  The status of the specified control. 
     */
    controlStatus?: ControlStatus;
    /**
     *  The comment body text for the specified control. 
     */
    commentBody?: ControlCommentBody;
  }
  export interface UpdateAssessmentControlResponse {
    /**
     *  The name of the updated control set returned by the UpdateAssessmentControl API. 
     */
    control?: AssessmentControl;
  }
  export interface UpdateAssessmentControlSetStatusRequest {
    /**
     *  The identifier for the specified assessment. 
     */
    assessmentId: UUID;
    /**
     *  The identifier for the specified control set. 
     */
    controlSetId: String;
    /**
     *  The status of the control set that is being updated. 
     */
    status: ControlSetStatus;
    /**
     *  The comment related to the status update. 
     */
    comment: DelegationComment;
  }
  export interface UpdateAssessmentControlSetStatusResponse {
    /**
     *  The name of the updated control set returned by the UpdateAssessmentControlSetStatus API. 
     */
    controlSet?: AssessmentControlSet;
  }
  export interface UpdateAssessmentFrameworkControlSet {
    /**
     *  The unique identifier for the control set. 
     */
    id?: UUID;
    /**
     *  The name of the control set. 
     */
    name?: ControlSetName;
    /**
     *  The list of controls contained within the control set. 
     */
    controls?: CreateAssessmentFrameworkControls;
  }
  export type UpdateAssessmentFrameworkControlSets = UpdateAssessmentFrameworkControlSet[];
  export interface UpdateAssessmentFrameworkRequest {
    /**
     *  The identifier for the specified framework. 
     */
    frameworkId: UUID;
    /**
     *  The name of the framework to be updated. 
     */
    name: FrameworkName;
    /**
     *  The description of the framework that is to be updated. 
     */
    description?: FrameworkDescription;
    /**
     *  The compliance type that the new custom framework supports, such as CIS or HIPAA. 
     */
    complianceType?: ComplianceType;
    /**
     *  The control sets associated with the framework. 
     */
    controlSets: UpdateAssessmentFrameworkControlSets;
  }
  export interface UpdateAssessmentFrameworkResponse {
    /**
     *  The name of the specified framework. 
     */
    framework?: Framework;
  }
  export interface UpdateAssessmentRequest {
    /**
     *  The identifier for the specified assessment. 
     */
    assessmentId: UUID;
    /**
     *  The name of the specified assessment to be updated. 
     */
    assessmentName?: AssessmentName;
    /**
     *  The description of the specified assessment. 
     */
    assessmentDescription?: AssessmentDescription;
    /**
     *  The scope of the specified assessment. 
     */
    scope: Scope;
    /**
     *  The assessment report storage destination for the specified assessment that is being updated. 
     */
    assessmentReportsDestination?: AssessmentReportsDestination;
    /**
     *  The list of roles for the specified assessment. 
     */
    roles?: Roles;
  }
  export interface UpdateAssessmentResponse {
    /**
     *  The response object (name of the updated assessment) for the UpdateAssessmentRequest API. 
     */
    assessment?: Assessment;
  }
  export interface UpdateAssessmentStatusRequest {
    /**
     *  The identifier for the specified assessment. 
     */
    assessmentId: UUID;
    /**
     *  The current status of the specified assessment. 
     */
    status: AssessmentStatus;
  }
  export interface UpdateAssessmentStatusResponse {
    /**
     *  The name of the updated assessment returned by the UpdateAssessmentStatus API. 
     */
    assessment?: Assessment;
  }
  export interface UpdateControlRequest {
    /**
     *  The identifier for the specified control. 
     */
    controlId: UUID;
    /**
     *  The name of the control to be updated. 
     */
    name: ControlName;
    /**
     *  The optional description of the control. 
     */
    description?: ControlDescription;
    /**
     *  The steps that to follow to determine if the control has been satisfied. 
     */
    testingInformation?: TestingInformation;
    /**
     *  The title of the action plan for remediating the control. 
     */
    actionPlanTitle?: ActionPlanTitle;
    /**
     *  The recommended actions to carry out if the control is not fulfilled. 
     */
    actionPlanInstructions?: ActionPlanInstructions;
    /**
     *  The data mapping sources for the specified control. 
     */
    controlMappingSources: ControlMappingSources;
  }
  export interface UpdateControlResponse {
    /**
     *  The name of the updated control set returned by the UpdateControl API. 
     */
    control?: Control;
  }
  export interface UpdateSettingsRequest {
    /**
     *  The Amazon Simple Notification Service (Amazon SNS) topic to which AWS Audit Manager sends notifications. 
     */
    snsTopic?: SnsArn;
    /**
     *  The default storage destination for assessment reports. 
     */
    defaultAssessmentReportsDestination?: AssessmentReportsDestination;
    /**
     *  A list of the default audit owners. 
     */
    defaultProcessOwners?: Roles;
    /**
     *  The AWS KMS key details. 
     */
    kmsKey?: KmsKey;
  }
  export interface UpdateSettingsResponse {
    /**
     *  The current list of settings. 
     */
    settings?: Settings;
  }
  export type UrlLink = string;
  export type Username = string;
  export interface ValidateAssessmentReportIntegrityRequest {
    /**
     *  The relative path of the specified Amazon S3 bucket in which the assessment report is stored. 
     */
    s3RelativePath: S3Url;
  }
  export interface ValidateAssessmentReportIntegrityResponse {
    /**
     *  Specifies whether the signature key is valid. 
     */
    signatureValid?: Boolean;
    /**
     *  The signature algorithm used to code sign the assessment report file. 
     */
    signatureAlgorithm?: String;
    /**
     *  The date and time signature that specifies when the assessment report was created. 
     */
    signatureDateTime?: String;
    /**
     *  The unique identifier for the validation signature key. 
     */
    signatureKeyId?: String;
    /**
     *  Represents any errors that occurred when validating the assessment report. 
     */
    validationErrors?: ValidationErrors;
  }
  export type ValidationErrors = NonEmptyString[];
  export type organizationId = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-07-25"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the AuditManager client.
   */
  export import Types = AuditManager;
}
export = AuditManager;
