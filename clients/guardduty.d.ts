import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class GuardDuty extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: GuardDuty.Types.ClientConfiguration)
  config: Config & GuardDuty.Types.ClientConfiguration;
  /**
   * Accepts the invitation to be monitored by a master GuardDuty account.
   */
  acceptInvitation(params: GuardDuty.Types.AcceptInvitationRequest, callback?: (err: AWSError, data: GuardDuty.Types.AcceptInvitationResponse) => void): Request<GuardDuty.Types.AcceptInvitationResponse, AWSError>;
  /**
   * Accepts the invitation to be monitored by a master GuardDuty account.
   */
  acceptInvitation(callback?: (err: AWSError, data: GuardDuty.Types.AcceptInvitationResponse) => void): Request<GuardDuty.Types.AcceptInvitationResponse, AWSError>;
  /**
   * Archives Amazon GuardDuty findings specified by the list of finding IDs.
   */
  archiveFindings(params: GuardDuty.Types.ArchiveFindingsRequest, callback?: (err: AWSError, data: GuardDuty.Types.ArchiveFindingsResponse) => void): Request<GuardDuty.Types.ArchiveFindingsResponse, AWSError>;
  /**
   * Archives Amazon GuardDuty findings specified by the list of finding IDs.
   */
  archiveFindings(callback?: (err: AWSError, data: GuardDuty.Types.ArchiveFindingsResponse) => void): Request<GuardDuty.Types.ArchiveFindingsResponse, AWSError>;
  /**
   * Creates a single Amazon GuardDuty detector. A detector is an object that represents the GuardDuty service. A detector must be created in order for GuardDuty to become operational.
   */
  createDetector(params: GuardDuty.Types.CreateDetectorRequest, callback?: (err: AWSError, data: GuardDuty.Types.CreateDetectorResponse) => void): Request<GuardDuty.Types.CreateDetectorResponse, AWSError>;
  /**
   * Creates a single Amazon GuardDuty detector. A detector is an object that represents the GuardDuty service. A detector must be created in order for GuardDuty to become operational.
   */
  createDetector(callback?: (err: AWSError, data: GuardDuty.Types.CreateDetectorResponse) => void): Request<GuardDuty.Types.CreateDetectorResponse, AWSError>;
  /**
   * Creates a filter using the specified finding criteria.
   */
  createFilter(params: GuardDuty.Types.CreateFilterRequest, callback?: (err: AWSError, data: GuardDuty.Types.CreateFilterResponse) => void): Request<GuardDuty.Types.CreateFilterResponse, AWSError>;
  /**
   * Creates a filter using the specified finding criteria.
   */
  createFilter(callback?: (err: AWSError, data: GuardDuty.Types.CreateFilterResponse) => void): Request<GuardDuty.Types.CreateFilterResponse, AWSError>;
  /**
   * Creates a new IPSet - a list of trusted IP addresses that have been whitelisted for secure communication with AWS infrastructure and applications.
   */
  createIPSet(params: GuardDuty.Types.CreateIPSetRequest, callback?: (err: AWSError, data: GuardDuty.Types.CreateIPSetResponse) => void): Request<GuardDuty.Types.CreateIPSetResponse, AWSError>;
  /**
   * Creates a new IPSet - a list of trusted IP addresses that have been whitelisted for secure communication with AWS infrastructure and applications.
   */
  createIPSet(callback?: (err: AWSError, data: GuardDuty.Types.CreateIPSetResponse) => void): Request<GuardDuty.Types.CreateIPSetResponse, AWSError>;
  /**
   * Creates member accounts of the current AWS account by specifying a list of AWS account IDs. The current AWS account can then invite these members to manage GuardDuty in their accounts.
   */
  createMembers(params: GuardDuty.Types.CreateMembersRequest, callback?: (err: AWSError, data: GuardDuty.Types.CreateMembersResponse) => void): Request<GuardDuty.Types.CreateMembersResponse, AWSError>;
  /**
   * Creates member accounts of the current AWS account by specifying a list of AWS account IDs. The current AWS account can then invite these members to manage GuardDuty in their accounts.
   */
  createMembers(callback?: (err: AWSError, data: GuardDuty.Types.CreateMembersResponse) => void): Request<GuardDuty.Types.CreateMembersResponse, AWSError>;
  /**
   * Generates example findings of types specified by the list of finding types. If 'NULL' is specified for findingTypes, the API generates example findings of all supported finding types.
   */
  createSampleFindings(params: GuardDuty.Types.CreateSampleFindingsRequest, callback?: (err: AWSError, data: GuardDuty.Types.CreateSampleFindingsResponse) => void): Request<GuardDuty.Types.CreateSampleFindingsResponse, AWSError>;
  /**
   * Generates example findings of types specified by the list of finding types. If 'NULL' is specified for findingTypes, the API generates example findings of all supported finding types.
   */
  createSampleFindings(callback?: (err: AWSError, data: GuardDuty.Types.CreateSampleFindingsResponse) => void): Request<GuardDuty.Types.CreateSampleFindingsResponse, AWSError>;
  /**
   * Create a new ThreatIntelSet. ThreatIntelSets consist of known malicious IP addresses. GuardDuty generates findings based on ThreatIntelSets.
   */
  createThreatIntelSet(params: GuardDuty.Types.CreateThreatIntelSetRequest, callback?: (err: AWSError, data: GuardDuty.Types.CreateThreatIntelSetResponse) => void): Request<GuardDuty.Types.CreateThreatIntelSetResponse, AWSError>;
  /**
   * Create a new ThreatIntelSet. ThreatIntelSets consist of known malicious IP addresses. GuardDuty generates findings based on ThreatIntelSets.
   */
  createThreatIntelSet(callback?: (err: AWSError, data: GuardDuty.Types.CreateThreatIntelSetResponse) => void): Request<GuardDuty.Types.CreateThreatIntelSetResponse, AWSError>;
  /**
   * Declines invitations sent to the current member account by AWS account specified by their account IDs.
   */
  declineInvitations(params: GuardDuty.Types.DeclineInvitationsRequest, callback?: (err: AWSError, data: GuardDuty.Types.DeclineInvitationsResponse) => void): Request<GuardDuty.Types.DeclineInvitationsResponse, AWSError>;
  /**
   * Declines invitations sent to the current member account by AWS account specified by their account IDs.
   */
  declineInvitations(callback?: (err: AWSError, data: GuardDuty.Types.DeclineInvitationsResponse) => void): Request<GuardDuty.Types.DeclineInvitationsResponse, AWSError>;
  /**
   * Deletes a Amazon GuardDuty detector specified by the detector ID.
   */
  deleteDetector(params: GuardDuty.Types.DeleteDetectorRequest, callback?: (err: AWSError, data: GuardDuty.Types.DeleteDetectorResponse) => void): Request<GuardDuty.Types.DeleteDetectorResponse, AWSError>;
  /**
   * Deletes a Amazon GuardDuty detector specified by the detector ID.
   */
  deleteDetector(callback?: (err: AWSError, data: GuardDuty.Types.DeleteDetectorResponse) => void): Request<GuardDuty.Types.DeleteDetectorResponse, AWSError>;
  /**
   * Deletes the filter specified by the filter name.
   */
  deleteFilter(params: GuardDuty.Types.DeleteFilterRequest, callback?: (err: AWSError, data: GuardDuty.Types.DeleteFilterResponse) => void): Request<GuardDuty.Types.DeleteFilterResponse, AWSError>;
  /**
   * Deletes the filter specified by the filter name.
   */
  deleteFilter(callback?: (err: AWSError, data: GuardDuty.Types.DeleteFilterResponse) => void): Request<GuardDuty.Types.DeleteFilterResponse, AWSError>;
  /**
   * Deletes the IPSet specified by the IPSet ID.
   */
  deleteIPSet(params: GuardDuty.Types.DeleteIPSetRequest, callback?: (err: AWSError, data: GuardDuty.Types.DeleteIPSetResponse) => void): Request<GuardDuty.Types.DeleteIPSetResponse, AWSError>;
  /**
   * Deletes the IPSet specified by the IPSet ID.
   */
  deleteIPSet(callback?: (err: AWSError, data: GuardDuty.Types.DeleteIPSetResponse) => void): Request<GuardDuty.Types.DeleteIPSetResponse, AWSError>;
  /**
   * Deletes invitations sent to the current member account by AWS accounts specified by their account IDs.
   */
  deleteInvitations(params: GuardDuty.Types.DeleteInvitationsRequest, callback?: (err: AWSError, data: GuardDuty.Types.DeleteInvitationsResponse) => void): Request<GuardDuty.Types.DeleteInvitationsResponse, AWSError>;
  /**
   * Deletes invitations sent to the current member account by AWS accounts specified by their account IDs.
   */
  deleteInvitations(callback?: (err: AWSError, data: GuardDuty.Types.DeleteInvitationsResponse) => void): Request<GuardDuty.Types.DeleteInvitationsResponse, AWSError>;
  /**
   * Deletes GuardDuty member accounts (to the current GuardDuty master account) specified by the account IDs.
   */
  deleteMembers(params: GuardDuty.Types.DeleteMembersRequest, callback?: (err: AWSError, data: GuardDuty.Types.DeleteMembersResponse) => void): Request<GuardDuty.Types.DeleteMembersResponse, AWSError>;
  /**
   * Deletes GuardDuty member accounts (to the current GuardDuty master account) specified by the account IDs.
   */
  deleteMembers(callback?: (err: AWSError, data: GuardDuty.Types.DeleteMembersResponse) => void): Request<GuardDuty.Types.DeleteMembersResponse, AWSError>;
  /**
   * Deletes ThreatIntelSet specified by the ThreatIntelSet ID.
   */
  deleteThreatIntelSet(params: GuardDuty.Types.DeleteThreatIntelSetRequest, callback?: (err: AWSError, data: GuardDuty.Types.DeleteThreatIntelSetResponse) => void): Request<GuardDuty.Types.DeleteThreatIntelSetResponse, AWSError>;
  /**
   * Deletes ThreatIntelSet specified by the ThreatIntelSet ID.
   */
  deleteThreatIntelSet(callback?: (err: AWSError, data: GuardDuty.Types.DeleteThreatIntelSetResponse) => void): Request<GuardDuty.Types.DeleteThreatIntelSetResponse, AWSError>;
  /**
   * Disassociates the current GuardDuty member account from its master account.
   */
  disassociateFromMasterAccount(params: GuardDuty.Types.DisassociateFromMasterAccountRequest, callback?: (err: AWSError, data: GuardDuty.Types.DisassociateFromMasterAccountResponse) => void): Request<GuardDuty.Types.DisassociateFromMasterAccountResponse, AWSError>;
  /**
   * Disassociates the current GuardDuty member account from its master account.
   */
  disassociateFromMasterAccount(callback?: (err: AWSError, data: GuardDuty.Types.DisassociateFromMasterAccountResponse) => void): Request<GuardDuty.Types.DisassociateFromMasterAccountResponse, AWSError>;
  /**
   * Disassociates GuardDuty member accounts (to the current GuardDuty master account) specified by the account IDs.
   */
  disassociateMembers(params: GuardDuty.Types.DisassociateMembersRequest, callback?: (err: AWSError, data: GuardDuty.Types.DisassociateMembersResponse) => void): Request<GuardDuty.Types.DisassociateMembersResponse, AWSError>;
  /**
   * Disassociates GuardDuty member accounts (to the current GuardDuty master account) specified by the account IDs.
   */
  disassociateMembers(callback?: (err: AWSError, data: GuardDuty.Types.DisassociateMembersResponse) => void): Request<GuardDuty.Types.DisassociateMembersResponse, AWSError>;
  /**
   * Retrieves an Amazon GuardDuty detector specified by the detectorId.
   */
  getDetector(params: GuardDuty.Types.GetDetectorRequest, callback?: (err: AWSError, data: GuardDuty.Types.GetDetectorResponse) => void): Request<GuardDuty.Types.GetDetectorResponse, AWSError>;
  /**
   * Retrieves an Amazon GuardDuty detector specified by the detectorId.
   */
  getDetector(callback?: (err: AWSError, data: GuardDuty.Types.GetDetectorResponse) => void): Request<GuardDuty.Types.GetDetectorResponse, AWSError>;
  /**
   * Returns the details of the filter specified by the filter name.
   */
  getFilter(params: GuardDuty.Types.GetFilterRequest, callback?: (err: AWSError, data: GuardDuty.Types.GetFilterResponse) => void): Request<GuardDuty.Types.GetFilterResponse, AWSError>;
  /**
   * Returns the details of the filter specified by the filter name.
   */
  getFilter(callback?: (err: AWSError, data: GuardDuty.Types.GetFilterResponse) => void): Request<GuardDuty.Types.GetFilterResponse, AWSError>;
  /**
   * Describes Amazon GuardDuty findings specified by finding IDs.
   */
  getFindings(params: GuardDuty.Types.GetFindingsRequest, callback?: (err: AWSError, data: GuardDuty.Types.GetFindingsResponse) => void): Request<GuardDuty.Types.GetFindingsResponse, AWSError>;
  /**
   * Describes Amazon GuardDuty findings specified by finding IDs.
   */
  getFindings(callback?: (err: AWSError, data: GuardDuty.Types.GetFindingsResponse) => void): Request<GuardDuty.Types.GetFindingsResponse, AWSError>;
  /**
   * Lists Amazon GuardDuty findings' statistics for the specified detector ID.
   */
  getFindingsStatistics(params: GuardDuty.Types.GetFindingsStatisticsRequest, callback?: (err: AWSError, data: GuardDuty.Types.GetFindingsStatisticsResponse) => void): Request<GuardDuty.Types.GetFindingsStatisticsResponse, AWSError>;
  /**
   * Lists Amazon GuardDuty findings' statistics for the specified detector ID.
   */
  getFindingsStatistics(callback?: (err: AWSError, data: GuardDuty.Types.GetFindingsStatisticsResponse) => void): Request<GuardDuty.Types.GetFindingsStatisticsResponse, AWSError>;
  /**
   * Retrieves the IPSet specified by the IPSet ID.
   */
  getIPSet(params: GuardDuty.Types.GetIPSetRequest, callback?: (err: AWSError, data: GuardDuty.Types.GetIPSetResponse) => void): Request<GuardDuty.Types.GetIPSetResponse, AWSError>;
  /**
   * Retrieves the IPSet specified by the IPSet ID.
   */
  getIPSet(callback?: (err: AWSError, data: GuardDuty.Types.GetIPSetResponse) => void): Request<GuardDuty.Types.GetIPSetResponse, AWSError>;
  /**
   * Returns the count of all GuardDuty membership invitations that were sent to the current member account except the currently accepted invitation.
   */
  getInvitationsCount(params: GuardDuty.Types.GetInvitationsCountRequest, callback?: (err: AWSError, data: GuardDuty.Types.GetInvitationsCountResponse) => void): Request<GuardDuty.Types.GetInvitationsCountResponse, AWSError>;
  /**
   * Returns the count of all GuardDuty membership invitations that were sent to the current member account except the currently accepted invitation.
   */
  getInvitationsCount(callback?: (err: AWSError, data: GuardDuty.Types.GetInvitationsCountResponse) => void): Request<GuardDuty.Types.GetInvitationsCountResponse, AWSError>;
  /**
   * Provides the details for the GuardDuty master account to the current GuardDuty member account.
   */
  getMasterAccount(params: GuardDuty.Types.GetMasterAccountRequest, callback?: (err: AWSError, data: GuardDuty.Types.GetMasterAccountResponse) => void): Request<GuardDuty.Types.GetMasterAccountResponse, AWSError>;
  /**
   * Provides the details for the GuardDuty master account to the current GuardDuty member account.
   */
  getMasterAccount(callback?: (err: AWSError, data: GuardDuty.Types.GetMasterAccountResponse) => void): Request<GuardDuty.Types.GetMasterAccountResponse, AWSError>;
  /**
   * Retrieves GuardDuty member accounts (to the current GuardDuty master account) specified by the account IDs.
   */
  getMembers(params: GuardDuty.Types.GetMembersRequest, callback?: (err: AWSError, data: GuardDuty.Types.GetMembersResponse) => void): Request<GuardDuty.Types.GetMembersResponse, AWSError>;
  /**
   * Retrieves GuardDuty member accounts (to the current GuardDuty master account) specified by the account IDs.
   */
  getMembers(callback?: (err: AWSError, data: GuardDuty.Types.GetMembersResponse) => void): Request<GuardDuty.Types.GetMembersResponse, AWSError>;
  /**
   * Retrieves the ThreatIntelSet that is specified by the ThreatIntelSet ID.
   */
  getThreatIntelSet(params: GuardDuty.Types.GetThreatIntelSetRequest, callback?: (err: AWSError, data: GuardDuty.Types.GetThreatIntelSetResponse) => void): Request<GuardDuty.Types.GetThreatIntelSetResponse, AWSError>;
  /**
   * Retrieves the ThreatIntelSet that is specified by the ThreatIntelSet ID.
   */
  getThreatIntelSet(callback?: (err: AWSError, data: GuardDuty.Types.GetThreatIntelSetResponse) => void): Request<GuardDuty.Types.GetThreatIntelSetResponse, AWSError>;
  /**
   * Invites other AWS accounts (created as members of the current AWS account by CreateMembers) to enable GuardDuty and allow the current AWS account to view and manage these accounts' GuardDuty findings on their behalf as the master account.
   */
  inviteMembers(params: GuardDuty.Types.InviteMembersRequest, callback?: (err: AWSError, data: GuardDuty.Types.InviteMembersResponse) => void): Request<GuardDuty.Types.InviteMembersResponse, AWSError>;
  /**
   * Invites other AWS accounts (created as members of the current AWS account by CreateMembers) to enable GuardDuty and allow the current AWS account to view and manage these accounts' GuardDuty findings on their behalf as the master account.
   */
  inviteMembers(callback?: (err: AWSError, data: GuardDuty.Types.InviteMembersResponse) => void): Request<GuardDuty.Types.InviteMembersResponse, AWSError>;
  /**
   * Lists detectorIds of all the existing Amazon GuardDuty detector resources.
   */
  listDetectors(params: GuardDuty.Types.ListDetectorsRequest, callback?: (err: AWSError, data: GuardDuty.Types.ListDetectorsResponse) => void): Request<GuardDuty.Types.ListDetectorsResponse, AWSError>;
  /**
   * Lists detectorIds of all the existing Amazon GuardDuty detector resources.
   */
  listDetectors(callback?: (err: AWSError, data: GuardDuty.Types.ListDetectorsResponse) => void): Request<GuardDuty.Types.ListDetectorsResponse, AWSError>;
  /**
   * Returns a paginated list of the current filters.
   */
  listFilters(params: GuardDuty.Types.ListFiltersRequest, callback?: (err: AWSError, data: GuardDuty.Types.ListFiltersResponse) => void): Request<GuardDuty.Types.ListFiltersResponse, AWSError>;
  /**
   * Returns a paginated list of the current filters.
   */
  listFilters(callback?: (err: AWSError, data: GuardDuty.Types.ListFiltersResponse) => void): Request<GuardDuty.Types.ListFiltersResponse, AWSError>;
  /**
   * Lists Amazon GuardDuty findings for the specified detector ID.
   */
  listFindings(params: GuardDuty.Types.ListFindingsRequest, callback?: (err: AWSError, data: GuardDuty.Types.ListFindingsResponse) => void): Request<GuardDuty.Types.ListFindingsResponse, AWSError>;
  /**
   * Lists Amazon GuardDuty findings for the specified detector ID.
   */
  listFindings(callback?: (err: AWSError, data: GuardDuty.Types.ListFindingsResponse) => void): Request<GuardDuty.Types.ListFindingsResponse, AWSError>;
  /**
   * Lists the IPSets of the GuardDuty service specified by the detector ID.
   */
  listIPSets(params: GuardDuty.Types.ListIPSetsRequest, callback?: (err: AWSError, data: GuardDuty.Types.ListIPSetsResponse) => void): Request<GuardDuty.Types.ListIPSetsResponse, AWSError>;
  /**
   * Lists the IPSets of the GuardDuty service specified by the detector ID.
   */
  listIPSets(callback?: (err: AWSError, data: GuardDuty.Types.ListIPSetsResponse) => void): Request<GuardDuty.Types.ListIPSetsResponse, AWSError>;
  /**
   * Lists all GuardDuty membership invitations that were sent to the current AWS account.
   */
  listInvitations(params: GuardDuty.Types.ListInvitationsRequest, callback?: (err: AWSError, data: GuardDuty.Types.ListInvitationsResponse) => void): Request<GuardDuty.Types.ListInvitationsResponse, AWSError>;
  /**
   * Lists all GuardDuty membership invitations that were sent to the current AWS account.
   */
  listInvitations(callback?: (err: AWSError, data: GuardDuty.Types.ListInvitationsResponse) => void): Request<GuardDuty.Types.ListInvitationsResponse, AWSError>;
  /**
   * Lists details about all member accounts for the current GuardDuty master account.
   */
  listMembers(params: GuardDuty.Types.ListMembersRequest, callback?: (err: AWSError, data: GuardDuty.Types.ListMembersResponse) => void): Request<GuardDuty.Types.ListMembersResponse, AWSError>;
  /**
   * Lists details about all member accounts for the current GuardDuty master account.
   */
  listMembers(callback?: (err: AWSError, data: GuardDuty.Types.ListMembersResponse) => void): Request<GuardDuty.Types.ListMembersResponse, AWSError>;
  /**
   * Lists the ThreatIntelSets of the GuardDuty service specified by the detector ID.
   */
  listThreatIntelSets(params: GuardDuty.Types.ListThreatIntelSetsRequest, callback?: (err: AWSError, data: GuardDuty.Types.ListThreatIntelSetsResponse) => void): Request<GuardDuty.Types.ListThreatIntelSetsResponse, AWSError>;
  /**
   * Lists the ThreatIntelSets of the GuardDuty service specified by the detector ID.
   */
  listThreatIntelSets(callback?: (err: AWSError, data: GuardDuty.Types.ListThreatIntelSetsResponse) => void): Request<GuardDuty.Types.ListThreatIntelSetsResponse, AWSError>;
  /**
   * Re-enables GuardDuty to monitor findings of the member accounts specified by the account IDs. A master GuardDuty account can run this command after disabling GuardDuty from monitoring these members' findings by running StopMonitoringMembers.
   */
  startMonitoringMembers(params: GuardDuty.Types.StartMonitoringMembersRequest, callback?: (err: AWSError, data: GuardDuty.Types.StartMonitoringMembersResponse) => void): Request<GuardDuty.Types.StartMonitoringMembersResponse, AWSError>;
  /**
   * Re-enables GuardDuty to monitor findings of the member accounts specified by the account IDs. A master GuardDuty account can run this command after disabling GuardDuty from monitoring these members' findings by running StopMonitoringMembers.
   */
  startMonitoringMembers(callback?: (err: AWSError, data: GuardDuty.Types.StartMonitoringMembersResponse) => void): Request<GuardDuty.Types.StartMonitoringMembersResponse, AWSError>;
  /**
   * Disables GuardDuty from monitoring findings of the member accounts specified by the account IDs. After running this command, a master GuardDuty account can run StartMonitoringMembers to re-enable GuardDuty to monitor these members’ findings.
   */
  stopMonitoringMembers(params: GuardDuty.Types.StopMonitoringMembersRequest, callback?: (err: AWSError, data: GuardDuty.Types.StopMonitoringMembersResponse) => void): Request<GuardDuty.Types.StopMonitoringMembersResponse, AWSError>;
  /**
   * Disables GuardDuty from monitoring findings of the member accounts specified by the account IDs. After running this command, a master GuardDuty account can run StartMonitoringMembers to re-enable GuardDuty to monitor these members’ findings.
   */
  stopMonitoringMembers(callback?: (err: AWSError, data: GuardDuty.Types.StopMonitoringMembersResponse) => void): Request<GuardDuty.Types.StopMonitoringMembersResponse, AWSError>;
  /**
   * Unarchives Amazon GuardDuty findings specified by the list of finding IDs.
   */
  unarchiveFindings(params: GuardDuty.Types.UnarchiveFindingsRequest, callback?: (err: AWSError, data: GuardDuty.Types.UnarchiveFindingsResponse) => void): Request<GuardDuty.Types.UnarchiveFindingsResponse, AWSError>;
  /**
   * Unarchives Amazon GuardDuty findings specified by the list of finding IDs.
   */
  unarchiveFindings(callback?: (err: AWSError, data: GuardDuty.Types.UnarchiveFindingsResponse) => void): Request<GuardDuty.Types.UnarchiveFindingsResponse, AWSError>;
  /**
   * Updates an Amazon GuardDuty detector specified by the detectorId.
   */
  updateDetector(params: GuardDuty.Types.UpdateDetectorRequest, callback?: (err: AWSError, data: GuardDuty.Types.UpdateDetectorResponse) => void): Request<GuardDuty.Types.UpdateDetectorResponse, AWSError>;
  /**
   * Updates an Amazon GuardDuty detector specified by the detectorId.
   */
  updateDetector(callback?: (err: AWSError, data: GuardDuty.Types.UpdateDetectorResponse) => void): Request<GuardDuty.Types.UpdateDetectorResponse, AWSError>;
  /**
   * Updates the filter specified by the filter name.
   */
  updateFilter(params: GuardDuty.Types.UpdateFilterRequest, callback?: (err: AWSError, data: GuardDuty.Types.UpdateFilterResponse) => void): Request<GuardDuty.Types.UpdateFilterResponse, AWSError>;
  /**
   * Updates the filter specified by the filter name.
   */
  updateFilter(callback?: (err: AWSError, data: GuardDuty.Types.UpdateFilterResponse) => void): Request<GuardDuty.Types.UpdateFilterResponse, AWSError>;
  /**
   * Marks specified Amazon GuardDuty findings as useful or not useful.
   */
  updateFindingsFeedback(params: GuardDuty.Types.UpdateFindingsFeedbackRequest, callback?: (err: AWSError, data: GuardDuty.Types.UpdateFindingsFeedbackResponse) => void): Request<GuardDuty.Types.UpdateFindingsFeedbackResponse, AWSError>;
  /**
   * Marks specified Amazon GuardDuty findings as useful or not useful.
   */
  updateFindingsFeedback(callback?: (err: AWSError, data: GuardDuty.Types.UpdateFindingsFeedbackResponse) => void): Request<GuardDuty.Types.UpdateFindingsFeedbackResponse, AWSError>;
  /**
   * Updates the IPSet specified by the IPSet ID.
   */
  updateIPSet(params: GuardDuty.Types.UpdateIPSetRequest, callback?: (err: AWSError, data: GuardDuty.Types.UpdateIPSetResponse) => void): Request<GuardDuty.Types.UpdateIPSetResponse, AWSError>;
  /**
   * Updates the IPSet specified by the IPSet ID.
   */
  updateIPSet(callback?: (err: AWSError, data: GuardDuty.Types.UpdateIPSetResponse) => void): Request<GuardDuty.Types.UpdateIPSetResponse, AWSError>;
  /**
   * Updates the ThreatIntelSet specified by ThreatIntelSet ID.
   */
  updateThreatIntelSet(params: GuardDuty.Types.UpdateThreatIntelSetRequest, callback?: (err: AWSError, data: GuardDuty.Types.UpdateThreatIntelSetResponse) => void): Request<GuardDuty.Types.UpdateThreatIntelSetResponse, AWSError>;
  /**
   * Updates the ThreatIntelSet specified by ThreatIntelSet ID.
   */
  updateThreatIntelSet(callback?: (err: AWSError, data: GuardDuty.Types.UpdateThreatIntelSetResponse) => void): Request<GuardDuty.Types.UpdateThreatIntelSetResponse, AWSError>;
}
declare namespace GuardDuty {
  export interface AcceptInvitationRequest {
    /**
     * The unique ID of the detector of the GuardDuty member account.
     */
    DetectorId: DetectorId;
    /**
     * The account ID of the master GuardDuty account whose invitation you're accepting.
     */
    MasterId: String;
    /**
     * This value is used to validate the master account to the member account.
     */
    InvitationId: String;
  }
  export interface AcceptInvitationResponse {
  }
  export interface AccessKeyDetails {
    /**
     * Access key ID of the user.
     */
    AccessKeyId?: String;
    /**
     * The principal ID of the user.
     */
    PrincipalId?: String;
    /**
     * The name of the user.
     */
    UserName?: String;
    /**
     * The type of the user.
     */
    UserType?: String;
  }
  export interface AccountDetail {
    /**
     * Member account ID.
     */
    AccountId: AccountId;
    /**
     * Member account's email address.
     */
    Email: Email;
  }
  export type AccountDetails = AccountDetail[];
  export type AccountId = string;
  export type AccountIds = AccountId[];
  export interface Action {
    /**
     * GuardDuty Finding activity type.
     */
    ActionType?: String;
    /**
     * Information about the AWS_API_CALL action described in this finding.
     */
    AwsApiCallAction?: AwsApiCallAction;
    /**
     * Information about the DNS_REQUEST action described in this finding.
     */
    DnsRequestAction?: DnsRequestAction;
    /**
     * Information about the NETWORK_CONNECTION action described in this finding.
     */
    NetworkConnectionAction?: NetworkConnectionAction;
    /**
     * Information about the PORT_PROBE action described in this finding.
     */
    PortProbeAction?: PortProbeAction;
  }
  export interface ArchiveFindingsRequest {
    /**
     * The ID of the detector that specifies the GuardDuty service whose findings you want to archive.
     */
    DetectorId: DetectorId;
    /**
     * IDs of the findings that you want to archive.
     */
    FindingIds: FindingIds;
  }
  export interface ArchiveFindingsResponse {
  }
  export interface AwsApiCallAction {
    /**
     * AWS API name.
     */
    Api?: String;
    /**
     * AWS API caller type.
     */
    CallerType?: String;
    /**
     * Domain information for the AWS API call.
     */
    DomainDetails?: DomainDetails;
    /**
     * Remote IP information of the connection.
     */
    RemoteIpDetails?: RemoteIpDetails;
    /**
     * AWS service name whose API was invoked.
     */
    ServiceName?: String;
  }
  export type Boolean = boolean;
  export interface City {
    /**
     * City name of the remote IP address.
     */
    CityName?: String;
  }
  export type ClientToken = string;
  export interface Condition {
    /**
     * Represents the equal condition to be applied to a single field when querying for findings.
     */
    Eq?: Eq;
    /**
     * Represents the not equal condition to be applied to a single field when querying for findings.
     */
    Neq?: Neq;
    /**
     * Represents a greater than condition to be applied to a single field when querying for findings.
     */
    Gt?: Integer;
    /**
     * Represents a greater than equal condition to be applied to a single field when querying for findings.
     */
    Gte?: Integer;
    /**
     * Represents a less than condition to be applied to a single field when querying for findings.
     */
    Lt?: Integer;
    /**
     * Represents a less than equal condition to be applied to a single field when querying for findings.
     */
    Lte?: Integer;
    Equals?: Equals;
    NotEquals?: NotEquals;
    /**
     * Represents a greater than condition to be applied to a single field when querying for findings.
     */
    GreaterThan?: Long;
    /**
     * Represents a greater than equal condition to be applied to a single field when querying for findings.
     */
    GreaterThanOrEqual?: Long;
    /**
     * Represents a less than condition to be applied to a single field when querying for findings.
     */
    LessThan?: Long;
    /**
     * Represents a less than equal condition to be applied to a single field when querying for findings.
     */
    LessThanOrEqual?: Long;
  }
  export type CountBySeverity = {[key: string]: Integer};
  export interface Country {
    /**
     * Country code of the remote IP address.
     */
    CountryCode?: String;
    /**
     * Country name of the remote IP address.
     */
    CountryName?: String;
  }
  export interface CreateDetectorRequest {
    /**
     * A boolean value that specifies whether the detector is to be enabled.
     */
    Enable: Boolean;
    /**
     * The idempotency token for the create request.
     */
    ClientToken?: ClientToken;
    /**
     * A enum value that specifies how frequently customer got Finding updates published.
     */
    FindingPublishingFrequency?: FindingPublishingFrequency;
  }
  export interface CreateDetectorResponse {
    /**
     * The unique ID of the created detector.
     */
    DetectorId?: DetectorId;
  }
  export interface CreateFilterRequest {
    /**
     * The unique ID of the detector of the GuardDuty account for which you want to create a filter.
     */
    DetectorId: DetectorId;
    /**
     * The name of the filter.
     */
    Name: FilterName;
    /**
     * The description of the filter.
     */
    Description?: FilterDescription;
    /**
     * Specifies the action that is to be applied to the findings that match the filter.
     */
    Action?: FilterAction;
    /**
     * Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings.
     */
    Rank?: FilterRank;
    /**
     * Represents the criteria to be used in the filter for querying findings.
     */
    FindingCriteria: FindingCriteria;
    /**
     * The idempotency token for the create request.
     */
    ClientToken?: ClientToken;
  }
  export interface CreateFilterResponse {
    /**
     * The name of the successfully created filter.
     */
    Name: FilterName;
  }
  export interface CreateIPSetRequest {
    /**
     * The unique ID of the detector of the GuardDuty account for which you want to create an IPSet.
     */
    DetectorId: DetectorId;
    /**
     * The user friendly name to identify the IPSet. This name is displayed in all findings that are triggered by activity that involves IP addresses included in this IPSet.
     */
    Name: Name;
    /**
     * The format of the file that contains the IPSet.
     */
    Format: IpSetFormat;
    /**
     * The URI of the file that contains the IPSet. For example (https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key)
     */
    Location: Location;
    /**
     * A boolean value that indicates whether GuardDuty is to start using the uploaded IPSet.
     */
    Activate: Boolean;
    /**
     * The idempotency token for the create request.
     */
    ClientToken?: ClientToken;
  }
  export interface CreateIPSetResponse {
    /**
     * The ID of the IPSet resource.
     */
    IpSetId: String;
  }
  export interface CreateMembersRequest {
    /**
     * The unique ID of the detector of the GuardDuty account with which you want to associate member accounts.
     */
    DetectorId: DetectorId;
    /**
     * A list of account ID and email address pairs of the accounts that you want to associate with the master GuardDuty account.
     */
    AccountDetails: AccountDetails;
  }
  export interface CreateMembersResponse {
    /**
     * A list of objects containing the unprocessed account and a result string explaining why it was unprocessed.
     */
    UnprocessedAccounts: UnprocessedAccounts;
  }
  export interface CreateSampleFindingsRequest {
    /**
     * The ID of the detector to create sample findings for.
     */
    DetectorId: DetectorId;
    /**
     * Types of sample findings that you want to generate.
     */
    FindingTypes?: FindingTypes;
  }
  export interface CreateSampleFindingsResponse {
  }
  export interface CreateThreatIntelSetRequest {
    /**
     * The unique ID of the detector of the GuardDuty account for which you want to create a threatIntelSet.
     */
    DetectorId: DetectorId;
    /**
     * A user-friendly ThreatIntelSet name that is displayed in all finding generated by activity that involves IP addresses included in this ThreatIntelSet.
     */
    Name: Name;
    /**
     * The format of the file that contains the ThreatIntelSet.
     */
    Format: ThreatIntelSetFormat;
    /**
     * The URI of the file that contains the ThreatIntelSet. For example (https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key).
     */
    Location: Location;
    /**
     * A boolean value that indicates whether GuardDuty is to start using the uploaded ThreatIntelSet.
     */
    Activate: Boolean;
    /**
     * The idempotency token for the create request.
     */
    ClientToken?: ClientToken;
  }
  export interface CreateThreatIntelSetResponse {
    /**
     * The ID of the ThreatIntelSet resource.
     */
    ThreatIntelSetId: String;
  }
  export type Criterion = {[key: string]: Condition};
  export interface DeclineInvitationsRequest {
    /**
     * A list of account IDs of the AWS accounts that sent invitations to the current member account that you want to decline invitations from.
     */
    AccountIds: AccountIds;
  }
  export interface DeclineInvitationsResponse {
    /**
     * A list of objects containing the unprocessed account and a result string explaining why it was unprocessed.
     */
    UnprocessedAccounts: UnprocessedAccounts;
  }
  export interface DeleteDetectorRequest {
    /**
     * The unique ID of the detector that you want to delete.
     */
    DetectorId: DetectorId;
  }
  export interface DeleteDetectorResponse {
  }
  export interface DeleteFilterRequest {
    /**
     * The unique ID of the detector the filter is associated with.
     */
    DetectorId: DetectorId;
    /**
     * The name of the filter you want to delete.
     */
    FilterName: String;
  }
  export interface DeleteFilterResponse {
  }
  export interface DeleteIPSetRequest {
    /**
     * The unique ID of the detector the ipSet is associated with.
     */
    DetectorId: DetectorId;
    /**
     * The unique ID of the ipSet you want to delete.
     */
    IpSetId: String;
  }
  export interface DeleteIPSetResponse {
  }
  export interface DeleteInvitationsRequest {
    /**
     * A list of account IDs of the AWS accounts that sent invitations to the current member account that you want to delete invitations from.
     */
    AccountIds: AccountIds;
  }
  export interface DeleteInvitationsResponse {
    /**
     * A list of objects containing the unprocessed account and a result string explaining why it was unprocessed.
     */
    UnprocessedAccounts: UnprocessedAccounts;
  }
  export interface DeleteMembersRequest {
    /**
     * The unique ID of the detector of the GuardDuty account whose members you want to delete.
     */
    DetectorId: DetectorId;
    /**
     * A list of account IDs of the GuardDuty member accounts that you want to delete.
     */
    AccountIds: AccountIds;
  }
  export interface DeleteMembersResponse {
    /**
     * A list of objects containing the unprocessed account and a result string explaining why it was unprocessed.
     */
    UnprocessedAccounts: UnprocessedAccounts;
  }
  export interface DeleteThreatIntelSetRequest {
    /**
     * The unique ID of the detector the threatIntelSet is associated with.
     */
    DetectorId: DetectorId;
    /**
     * The unique ID of the threatIntelSet you want to delete.
     */
    ThreatIntelSetId: String;
  }
  export interface DeleteThreatIntelSetResponse {
  }
  export type DetectorId = string;
  export type DetectorIds = DetectorId[];
  export type DetectorStatus = "ENABLED"|"DISABLED"|string;
  export interface DisassociateFromMasterAccountRequest {
    /**
     * The unique ID of the detector of the GuardDuty member account.
     */
    DetectorId: DetectorId;
  }
  export interface DisassociateFromMasterAccountResponse {
  }
  export interface DisassociateMembersRequest {
    /**
     * The unique ID of the detector of the GuardDuty account whose members you want to disassociate from master.
     */
    DetectorId: DetectorId;
    /**
     * A list of account IDs of the GuardDuty member accounts that you want to disassociate from master.
     */
    AccountIds: AccountIds;
  }
  export interface DisassociateMembersResponse {
    /**
     * A list of objects containing the unprocessed account and a result string explaining why it was unprocessed.
     */
    UnprocessedAccounts: UnprocessedAccounts;
  }
  export interface DnsRequestAction {
    /**
     * Domain information for the DNS request.
     */
    Domain?: String;
  }
  export interface DomainDetails {
    /**
     * Domain information for the AWS API call.
     */
    Domain?: String;
  }
  export type Double = number;
  export type Email = string;
  export type Eq = String[];
  export type Equals = String[];
  export type Feedback = "USEFUL"|"NOT_USEFUL"|string;
  export type FilterAction = "NOOP"|"ARCHIVE"|string;
  export type FilterDescription = string;
  export type FilterName = string;
  export type FilterNames = FilterName[];
  export type FilterRank = number;
  export interface Finding {
    /**
     * AWS account ID where the activity occurred that prompted GuardDuty to generate a finding.
     */
    AccountId: String;
    /**
     * The ARN of a finding described by the action.
     */
    Arn: String;
    /**
     * The confidence level of a finding.
     */
    Confidence?: Double;
    /**
     * The time stamp at which a finding was generated.
     */
    CreatedAt: String;
    /**
     * The description of a finding.
     */
    Description?: String;
    /**
     * The identifier that corresponds to a finding described by the action.
     */
    Id: String;
    /**
     * The AWS resource partition.
     */
    Partition?: String;
    /**
     * The AWS region where the activity occurred that prompted GuardDuty to generate a finding.
     */
    Region: String;
    /**
     * The AWS resource associated with the activity that prompted GuardDuty to generate a finding.
     */
    Resource: Resource;
    /**
     * Findings' schema version.
     */
    SchemaVersion: String;
    /**
     * Additional information assigned to the generated finding by GuardDuty.
     */
    Service?: Service;
    /**
     * The severity of a finding.
     */
    Severity: Double;
    /**
     * The title of a finding.
     */
    Title?: String;
    /**
     * The type of a finding described by the action.
     */
    Type: FindingType;
    /**
     * The time stamp at which a finding was last updated.
     */
    UpdatedAt: String;
  }
  export interface FindingCriteria {
    /**
     * Represents a map of finding properties that match specified conditions and values when querying findings.
     */
    Criterion?: Criterion;
  }
  export type FindingId = string;
  export type FindingIds = FindingId[];
  export type FindingPublishingFrequency = "FIFTEEN_MINUTES"|"ONE_HOUR"|"SIX_HOURS"|string;
  export type FindingStatisticType = "COUNT_BY_SEVERITY"|string;
  export type FindingStatisticTypes = FindingStatisticType[];
  export interface FindingStatistics {
    /**
     * Represents a map of severity to count statistic for a set of findings
     */
    CountBySeverity?: CountBySeverity;
  }
  export type FindingType = string;
  export type FindingTypes = FindingType[];
  export type Findings = Finding[];
  export interface GeoLocation {
    /**
     * Latitude information of remote IP address.
     */
    Lat?: Double;
    /**
     * Longitude information of remote IP address.
     */
    Lon?: Double;
  }
  export interface GetDetectorRequest {
    /**
     * The unique ID of the detector that you want to get.
     */
    DetectorId: DetectorId;
  }
  export interface GetDetectorResponse {
    /**
     * Detector creation timestamp.
     */
    CreatedAt?: String;
    /**
     * Finding publishing frequency.
     */
    FindingPublishingFrequency?: FindingPublishingFrequency;
    /**
     * The GuardDuty service role.
     */
    ServiceRole: String;
    /**
     * The detector status.
     */
    Status: DetectorStatus;
    /**
     * Detector last update timestamp.
     */
    UpdatedAt?: String;
  }
  export interface GetFilterRequest {
    /**
     * The unique ID of the detector the filter is associated with.
     */
    DetectorId: DetectorId;
    /**
     * The name of the filter you want to get.
     */
    FilterName: String;
  }
  export interface GetFilterResponse {
    /**
     * The name of the filter.
     */
    Name: FilterName;
    /**
     * The description of the filter.
     */
    Description?: FilterDescription;
    /**
     * Specifies the action that is to be applied to the findings that match the filter.
     */
    Action: FilterAction;
    /**
     * Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings.
     */
    Rank?: FilterRank;
    /**
     * Represents the criteria to be used in the filter for querying findings.
     */
    FindingCriteria: FindingCriteria;
  }
  export interface GetFindingsRequest {
    /**
     * The ID of the detector that specifies the GuardDuty service whose findings you want to retrieve.
     */
    DetectorId: DetectorId;
    /**
     * IDs of the findings that you want to retrieve.
     */
    FindingIds: FindingIds;
    /**
     * Represents the criteria used for sorting findings.
     */
    SortCriteria?: SortCriteria;
  }
  export interface GetFindingsResponse {
    /**
     * A list of findings.
     */
    Findings: Findings;
  }
  export interface GetFindingsStatisticsRequest {
    /**
     * The ID of the detector that specifies the GuardDuty service whose findings' statistics you want to retrieve.
     */
    DetectorId: DetectorId;
    /**
     * Types of finding statistics to retrieve.
     */
    FindingStatisticTypes: FindingStatisticTypes;
    /**
     * Represents the criteria used for querying findings.
     */
    FindingCriteria?: FindingCriteria;
  }
  export interface GetFindingsStatisticsResponse {
    /**
     * Finding statistics object.
     */
    FindingStatistics: FindingStatistics;
  }
  export interface GetIPSetRequest {
    /**
     * The unique ID of the detector the ipSet is associated with.
     */
    DetectorId: DetectorId;
    /**
     * The unique ID of the ipSet you want to get.
     */
    IpSetId: String;
  }
  export interface GetIPSetResponse {
    /**
     * The user friendly name to identify the IPSet. This name is displayed in all findings that are triggered by activity that involves IP addresses included in this IPSet.
     */
    Name: Name;
    /**
     * The format of the file that contains the IPSet.
     */
    Format: IpSetFormat;
    /**
     * The URI of the file that contains the IPSet. For example (https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key)
     */
    Location: Location;
    /**
     * The status of ipSet file uploaded.
     */
    Status: IpSetStatus;
  }
  export interface GetInvitationsCountRequest {
  }
  export interface GetInvitationsCountResponse {
    /**
     * The number of received invitations.
     */
    InvitationsCount?: Integer;
  }
  export interface GetMasterAccountRequest {
    /**
     * The unique ID of the detector of the GuardDuty member account.
     */
    DetectorId: DetectorId;
  }
  export interface GetMasterAccountResponse {
    /**
     * Master account details.
     */
    Master: Master;
  }
  export interface GetMembersRequest {
    /**
     * The unique ID of the detector of the GuardDuty account whose members you want to retrieve.
     */
    DetectorId: DetectorId;
    /**
     * A list of account IDs of the GuardDuty member accounts that you want to describe.
     */
    AccountIds: AccountIds;
  }
  export interface GetMembersResponse {
    /**
     * A list of members.
     */
    Members: Members;
    /**
     * A list of objects containing the unprocessed account and a result string explaining why it was unprocessed.
     */
    UnprocessedAccounts: UnprocessedAccounts;
  }
  export interface GetThreatIntelSetRequest {
    /**
     * The unique ID of the detector the threatIntelSet is associated with.
     */
    DetectorId: DetectorId;
    /**
     * The unique ID of the threatIntelSet you want to get.
     */
    ThreatIntelSetId: String;
  }
  export interface GetThreatIntelSetResponse {
    /**
     * A user-friendly ThreatIntelSet name that is displayed in all finding generated by activity that involves IP addresses included in this ThreatIntelSet.
     */
    Name: Name;
    /**
     * The format of the threatIntelSet.
     */
    Format: ThreatIntelSetFormat;
    /**
     * The URI of the file that contains the ThreatIntelSet. For example (https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key).
     */
    Location: Location;
    /**
     * The status of threatIntelSet file uploaded.
     */
    Status: ThreatIntelSetStatus;
  }
  export interface IamInstanceProfile {
    /**
     * AWS EC2 instance profile ARN.
     */
    Arn?: String;
    /**
     * AWS EC2 instance profile ID.
     */
    Id?: String;
  }
  export interface InstanceDetails {
    /**
     * The availability zone of the EC2 instance.
     */
    AvailabilityZone?: String;
    /**
     * The profile information of the EC2 instance.
     */
    IamInstanceProfile?: IamInstanceProfile;
    /**
     * The image description of the EC2 instance.
     */
    ImageDescription?: String;
    /**
     * The image ID of the EC2 instance.
     */
    ImageId?: String;
    /**
     * The ID of the EC2 instance.
     */
    InstanceId?: String;
    /**
     * The state of the EC2 instance.
     */
    InstanceState?: String;
    /**
     * The type of the EC2 instance.
     */
    InstanceType?: String;
    /**
     * The launch time of the EC2 instance.
     */
    LaunchTime?: String;
    /**
     * The network interface information of the EC2 instance.
     */
    NetworkInterfaces?: NetworkInterfaces;
    /**
     * The platform of the EC2 instance.
     */
    Platform?: String;
    /**
     * The product code of the EC2 instance.
     */
    ProductCodes?: ProductCodes;
    /**
     * The tags of the EC2 instance.
     */
    Tags?: Tags;
  }
  export type Integer = number;
  export interface Invitation {
    /**
     * Inviter account ID
     */
    AccountId?: AccountId;
    /**
     * This value is used to validate the inviter account to the member account.
     */
    InvitationId?: String;
    /**
     * The status of the relationship between the inviter and invitee accounts.
     */
    RelationshipStatus?: String;
    /**
     * Timestamp at which the invitation was sent
     */
    InvitedAt?: String;
  }
  export type Invitations = Invitation[];
  export interface InviteMembersRequest {
    /**
     * The unique ID of the detector of the GuardDuty account with which you want to invite members.
     */
    DetectorId: DetectorId;
    /**
     * A list of account IDs of the accounts that you want to invite to GuardDuty as members.
     */
    AccountIds: AccountIds;
    /**
     * A boolean value that specifies whether you want to disable email notification to the accounts that you’re inviting to GuardDuty as members.
     */
    DisableEmailNotification?: Boolean;
    /**
     * The invitation message that you want to send to the accounts that you’re inviting to GuardDuty as members.
     */
    Message?: String;
  }
  export interface InviteMembersResponse {
    /**
     * A list of objects containing the unprocessed account and a result string explaining why it was unprocessed.
     */
    UnprocessedAccounts: UnprocessedAccounts;
  }
  export type IpSetFormat = "TXT"|"STIX"|"OTX_CSV"|"ALIEN_VAULT"|"PROOF_POINT"|"FIRE_EYE"|string;
  export type IpSetIds = String[];
  export type IpSetStatus = "INACTIVE"|"ACTIVATING"|"ACTIVE"|"DEACTIVATING"|"ERROR"|"DELETE_PENDING"|"DELETED"|string;
  export type Ipv6Addresses = String[];
  export interface ListDetectorsRequest {
    /**
     * You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50.
     */
    MaxResults?: MaxResults;
    /**
     * You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action fill nextToken in the request with the value of NextToken from the previous response to continue listing data.
     */
    NextToken?: String;
  }
  export interface ListDetectorsResponse {
    /**
     * A list of detector Ids.
     */
    DetectorIds: DetectorIds;
    /**
     * Pagination parameter to be used on the next list operation to retrieve more items.
     */
    NextToken?: String;
  }
  export interface ListFiltersRequest {
    /**
     * The unique ID of the detector the filter is associated with.
     */
    DetectorId: DetectorId;
    /**
     * You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50.
     */
    MaxResults?: MaxResults;
    /**
     * You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action fill nextToken in the request with the value of NextToken from the previous response to continue listing data.
     */
    NextToken?: String;
  }
  export interface ListFiltersResponse {
    /**
     * A list of filter names
     */
    FilterNames: FilterNames;
    /**
     * Pagination parameter to be used on the next list operation to retrieve more items.
     */
    NextToken?: String;
  }
  export interface ListFindingsRequest {
    /**
     * The ID of the detector that specifies the GuardDuty service whose findings you want to list.
     */
    DetectorId: DetectorId;
    /**
     * Represents the criteria used for querying findings.
     */
    FindingCriteria?: FindingCriteria;
    /**
     * Represents the criteria used for sorting findings.
     */
    SortCriteria?: SortCriteria;
    /**
     * You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50.
     */
    MaxResults?: MaxResults;
    /**
     * You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action fill nextToken in the request with the value of NextToken from the previous response to continue listing data.
     */
    NextToken?: String;
  }
  export interface ListFindingsResponse {
    /**
     * The IDs of the findings you are listing.
     */
    FindingIds: FindingIds;
    /**
     * Pagination parameter to be used on the next list operation to retrieve more items.
     */
    NextToken?: String;
  }
  export interface ListIPSetsRequest {
    /**
     * The unique ID of the detector the ipSet is associated with.
     */
    DetectorId: DetectorId;
    /**
     * You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50.
     */
    MaxResults?: MaxResults;
    /**
     * You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action fill nextToken in the request with the value of NextToken from the previous response to continue listing data.
     */
    NextToken?: String;
  }
  export interface ListIPSetsResponse {
    /**
     * The IDs of the IPSet resources.
     */
    IpSetIds: IpSetIds;
    /**
     * Pagination parameter to be used on the next list operation to retrieve more items.
     */
    NextToken?: String;
  }
  export interface ListInvitationsRequest {
    /**
     * You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50.
     */
    MaxResults?: MaxResults;
    /**
     * You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action fill nextToken in the request with the value of NextToken from the previous response to continue listing data.
     */
    NextToken?: String;
  }
  export interface ListInvitationsResponse {
    /**
     * A list of invitation descriptions.
     */
    Invitations?: Invitations;
    /**
     * Pagination parameter to be used on the next list operation to retrieve more items.
     */
    NextToken?: String;
  }
  export interface ListMembersRequest {
    /**
     * The unique ID of the detector the member is associated with.
     */
    DetectorId: DetectorId;
    /**
     * You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50.
     */
    MaxResults?: MaxResults;
    /**
     * You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action fill nextToken in the request with the value of NextToken from the previous response to continue listing data.
     */
    NextToken?: String;
    /**
     * Specifies whether to only return associated members or to return all members (including members which haven't been invited yet or have been disassociated).
     */
    OnlyAssociated?: String;
  }
  export interface ListMembersResponse {
    /**
     * A list of members.
     */
    Members?: Members;
    /**
     * Pagination parameter to be used on the next list operation to retrieve more items.
     */
    NextToken?: String;
  }
  export interface ListThreatIntelSetsRequest {
    /**
     * The unique ID of the detector the threatIntelSet is associated with.
     */
    DetectorId: DetectorId;
    /**
     * You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50.
     */
    MaxResults?: MaxResults;
    /**
     * You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action fill nextToken in the request with the value of NextToken from the previous response to continue listing data.
     */
    NextToken?: String;
  }
  export interface ListThreatIntelSetsResponse {
    /**
     * The IDs of the ThreatIntelSet resources.
     */
    ThreatIntelSetIds: ThreatIntelSetIds;
    /**
     * Pagination parameter to be used on the next list operation to retrieve more items.
     */
    NextToken?: String;
  }
  export interface LocalPortDetails {
    /**
     * Port number of the local connection.
     */
    Port?: Integer;
    /**
     * Port name of the local connection.
     */
    PortName?: String;
  }
  export type Location = string;
  export type Long = number;
  export interface Master {
    /**
     * Master account ID
     */
    AccountId?: AccountId;
    /**
     * This value is used to validate the master account to the member account.
     */
    InvitationId?: String;
    /**
     * The status of the relationship between the master and member accounts.
     */
    RelationshipStatus?: String;
    /**
     * Timestamp at which the invitation was sent
     */
    InvitedAt?: String;
  }
  export type MaxResults = number;
  export interface Member {
    /**
     * Member account ID.
     */
    AccountId: AccountId;
    /**
     * Member account's detector ID.
     */
    DetectorId?: DetectorId;
    /**
     * Master account ID.
     */
    MasterId: String;
    /**
     * Member account's email address.
     */
    Email: Email;
    /**
     * The status of the relationship between the member and the master.
     */
    RelationshipStatus: String;
    /**
     * Timestamp at which the invitation was sent
     */
    InvitedAt?: String;
    /**
     * Member last updated timestamp.
     */
    UpdatedAt: String;
  }
  export type Members = Member[];
  export type Name = string;
  export type Neq = String[];
  export interface NetworkConnectionAction {
    /**
     * Network connection blocked information.
     */
    Blocked?: Boolean;
    /**
     * Network connection direction.
     */
    ConnectionDirection?: String;
    /**
     * Local port information of the connection.
     */
    LocalPortDetails?: LocalPortDetails;
    /**
     * Network connection protocol.
     */
    Protocol?: String;
    /**
     * Remote IP information of the connection.
     */
    RemoteIpDetails?: RemoteIpDetails;
    /**
     * Remote port information of the connection.
     */
    RemotePortDetails?: RemotePortDetails;
  }
  export interface NetworkInterface {
    /**
     * A list of EC2 instance IPv6 address information.
     */
    Ipv6Addresses?: Ipv6Addresses;
    /**
     * The ID of the network interface
     */
    NetworkInterfaceId?: String;
    /**
     * Private DNS name of the EC2 instance.
     */
    PrivateDnsName?: String;
    /**
     * Private IP address of the EC2 instance.
     */
    PrivateIpAddress?: String;
    /**
     * Other private IP address information of the EC2 instance.
     */
    PrivateIpAddresses?: PrivateIpAddresses;
    /**
     * Public DNS name of the EC2 instance.
     */
    PublicDnsName?: String;
    /**
     * Public IP address of the EC2 instance.
     */
    PublicIp?: String;
    /**
     * Security groups associated with the EC2 instance.
     */
    SecurityGroups?: SecurityGroups;
    /**
     * The subnet ID of the EC2 instance.
     */
    SubnetId?: String;
    /**
     * The VPC ID of the EC2 instance.
     */
    VpcId?: String;
  }
  export type NetworkInterfaces = NetworkInterface[];
  export type NotEquals = String[];
  export type OrderBy = "ASC"|"DESC"|string;
  export interface Organization {
    /**
     * Autonomous system number of the internet provider of the remote IP address.
     */
    Asn?: String;
    /**
     * Organization that registered this ASN.
     */
    AsnOrg?: String;
    /**
     * ISP information for the internet provider.
     */
    Isp?: String;
    /**
     * Name of the internet provider.
     */
    Org?: String;
  }
  export interface PortProbeAction {
    /**
     * Port probe blocked information.
     */
    Blocked?: Boolean;
    /**
     * A list of port probe details objects.
     */
    PortProbeDetails?: PortProbeDetails;
  }
  export interface PortProbeDetail {
    /**
     * Local port information of the connection.
     */
    LocalPortDetails?: LocalPortDetails;
    /**
     * Remote IP information of the connection.
     */
    RemoteIpDetails?: RemoteIpDetails;
  }
  export type PortProbeDetails = PortProbeDetail[];
  export interface PrivateIpAddressDetails {
    /**
     * Private DNS name of the EC2 instance.
     */
    PrivateDnsName?: String;
    /**
     * Private IP address of the EC2 instance.
     */
    PrivateIpAddress?: String;
  }
  export type PrivateIpAddresses = PrivateIpAddressDetails[];
  export interface ProductCode {
    /**
     * Product code information.
     */
    Code?: String;
    /**
     * Product code type.
     */
    ProductType?: String;
  }
  export type ProductCodes = ProductCode[];
  export interface RemoteIpDetails {
    /**
     * City information of the remote IP address.
     */
    City?: City;
    /**
     * Country code of the remote IP address.
     */
    Country?: Country;
    /**
     * Location information of the remote IP address.
     */
    GeoLocation?: GeoLocation;
    /**
     * IPV4 remote address of the connection.
     */
    IpAddressV4?: String;
    /**
     * ISP Organization information of the remote IP address.
     */
    Organization?: Organization;
  }
  export interface RemotePortDetails {
    /**
     * Port number of the remote connection.
     */
    Port?: Integer;
    /**
     * Port name of the remote connection.
     */
    PortName?: String;
  }
  export interface Resource {
    /**
     * The IAM access key details (IAM user information) of a user that engaged in the activity that prompted GuardDuty to generate a finding.
     */
    AccessKeyDetails?: AccessKeyDetails;
    /**
     * The information about the EC2 instance associated with the activity that prompted GuardDuty to generate a finding.
     */
    InstanceDetails?: InstanceDetails;
    /**
     * The type of the AWS resource.
     */
    ResourceType?: String;
  }
  export interface SecurityGroup {
    /**
     * EC2 instance's security group ID.
     */
    GroupId?: String;
    /**
     * EC2 instance's security group name.
     */
    GroupName?: String;
  }
  export type SecurityGroups = SecurityGroup[];
  export interface Service {
    /**
     * Information about the activity described in a finding.
     */
    Action?: Action;
    /**
     * Indicates whether this finding is archived.
     */
    Archived?: Boolean;
    /**
     * Total count of the occurrences of this finding type.
     */
    Count?: Integer;
    /**
     * Detector ID for the GuardDuty service.
     */
    DetectorId?: DetectorId;
    /**
     * First seen timestamp of the activity that prompted GuardDuty to generate this finding.
     */
    EventFirstSeen?: String;
    /**
     * Last seen timestamp of the activity that prompted GuardDuty to generate this finding.
     */
    EventLastSeen?: String;
    /**
     * Resource role information for this finding.
     */
    ResourceRole?: String;
    /**
     * The name of the AWS service (GuardDuty) that generated a finding.
     */
    ServiceName?: String;
    /**
     * Feedback left about the finding.
     */
    UserFeedback?: String;
  }
  export interface SortCriteria {
    /**
     * Represents the finding attribute (for example, accountId) by which to sort findings.
     */
    AttributeName?: String;
    /**
     * Order by which the sorted findings are to be displayed.
     */
    OrderBy?: OrderBy;
  }
  export interface StartMonitoringMembersRequest {
    /**
     * The unique ID of the detector of the GuardDuty account whom you want to re-enable to monitor members' findings.
     */
    DetectorId: DetectorId;
    /**
     * A list of account IDs of the GuardDuty member accounts whose findings you want the master account to monitor.
     */
    AccountIds: AccountIds;
  }
  export interface StartMonitoringMembersResponse {
    /**
     * A list of objects containing the unprocessed account and a result string explaining why it was unprocessed.
     */
    UnprocessedAccounts: UnprocessedAccounts;
  }
  export interface StopMonitoringMembersRequest {
    /**
     * The unique ID of the detector of the GuardDuty account that you want to stop from monitor members' findings.
     */
    DetectorId: DetectorId;
    /**
     * A list of account IDs of the GuardDuty member accounts whose findings you want the master account to stop monitoring.
     */
    AccountIds: AccountIds;
  }
  export interface StopMonitoringMembersResponse {
    /**
     * A list of objects containing the unprocessed account and a result string explaining why it was unprocessed.
     */
    UnprocessedAccounts: UnprocessedAccounts;
  }
  export type String = string;
  export interface Tag {
    /**
     * EC2 instance tag key.
     */
    Key?: String;
    /**
     * EC2 instance tag value.
     */
    Value?: String;
  }
  export type Tags = Tag[];
  export type ThreatIntelSetFormat = "TXT"|"STIX"|"OTX_CSV"|"ALIEN_VAULT"|"PROOF_POINT"|"FIRE_EYE"|string;
  export type ThreatIntelSetIds = String[];
  export type ThreatIntelSetStatus = "INACTIVE"|"ACTIVATING"|"ACTIVE"|"DEACTIVATING"|"ERROR"|"DELETE_PENDING"|"DELETED"|string;
  export interface UnarchiveFindingsRequest {
    /**
     * The ID of the detector that specifies the GuardDuty service whose findings you want to unarchive.
     */
    DetectorId: DetectorId;
    /**
     * IDs of the findings that you want to unarchive.
     */
    FindingIds: FindingIds;
  }
  export interface UnarchiveFindingsResponse {
  }
  export interface UnprocessedAccount {
    /**
     * AWS Account ID.
     */
    AccountId: AccountId;
    /**
     * A reason why the account hasn't been processed.
     */
    Result: String;
  }
  export type UnprocessedAccounts = UnprocessedAccount[];
  export interface UpdateDetectorRequest {
    /**
     * The unique ID of the detector that you want to update.
     */
    DetectorId: DetectorId;
    /**
     * Updated boolean value for the detector that specifies whether the detector is enabled.
     */
    Enable?: Boolean;
    /**
     * A enum value that specifies how frequently customer got Finding updates published.
     */
    FindingPublishingFrequency?: FindingPublishingFrequency;
  }
  export interface UpdateDetectorResponse {
  }
  export interface UpdateFilterRequest {
    /**
     * The unique ID of the detector that specifies the GuardDuty service where you want to update a filter.
     */
    DetectorId: DetectorId;
    /**
     * The name of the filter.
     */
    FilterName: String;
    /**
     * The description of the filter.
     */
    Description?: FilterDescription;
    /**
     * Specifies the action that is to be applied to the findings that match the filter.
     */
    Action?: FilterAction;
    /**
     * Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings.
     */
    Rank?: FilterRank;
    /**
     * Represents the criteria to be used in the filter for querying findings.
     */
    FindingCriteria?: FindingCriteria;
  }
  export interface UpdateFilterResponse {
    /**
     * The name of the filter.
     */
    Name: FilterName;
  }
  export interface UpdateFindingsFeedbackRequest {
    /**
     * The ID of the detector that specifies the GuardDuty service whose findings you want to mark as useful or not useful.
     */
    DetectorId: DetectorId;
    /**
     * IDs of the findings that you want to mark as useful or not useful.
     */
    FindingIds: FindingIds;
    /**
     * Valid values: USEFUL | NOT_USEFUL
     */
    Feedback: Feedback;
    /**
     * Additional feedback about the GuardDuty findings.
     */
    Comments?: String;
  }
  export interface UpdateFindingsFeedbackResponse {
  }
  export interface UpdateIPSetRequest {
    /**
     * The detectorID that specifies the GuardDuty service whose IPSet you want to update.
     */
    DetectorId: DetectorId;
    /**
     * The unique ID that specifies the IPSet that you want to update.
     */
    IpSetId: String;
    /**
     * The unique ID that specifies the IPSet that you want to update.
     */
    Name?: Name;
    /**
     * The updated URI of the file that contains the IPSet. For example (https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key).
     */
    Location?: Location;
    /**
     * The updated boolean value that specifies whether the IPSet is active or not.
     */
    Activate?: Boolean;
  }
  export interface UpdateIPSetResponse {
  }
  export interface UpdateThreatIntelSetRequest {
    /**
     * The detectorID that specifies the GuardDuty service whose ThreatIntelSet you want to update.
     */
    DetectorId: DetectorId;
    /**
     * The unique ID that specifies the ThreatIntelSet that you want to update.
     */
    ThreatIntelSetId: String;
    /**
     * The unique ID that specifies the ThreatIntelSet that you want to update.
     */
    Name?: Name;
    /**
     * The updated URI of the file that contains the ThreateIntelSet. For example (https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key)
     */
    Location?: Location;
    /**
     * The updated boolean value that specifies whether the ThreateIntelSet is active or not.
     */
    Activate?: Boolean;
  }
  export interface UpdateThreatIntelSetResponse {
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-11-28"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the GuardDuty client.
   */
  export import Types = GuardDuty;
}
export = GuardDuty;
