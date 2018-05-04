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
    DetectorId: __string;
    /**
     * This value is used to validate the master account to the member account.
     */
    InvitationId?: InvitationId;
    /**
     * The account ID of the master GuardDuty account whose invitation you're accepting.
     */
    MasterId?: MasterId;
  }
  export interface AcceptInvitationResponse {
  }
  export interface AccessKeyDetails {
    /**
     * Access key ID of the user.
     */
    AccessKeyId?: __string;
    /**
     * The principal ID of the user.
     */
    PrincipalId?: __string;
    /**
     * The name of the user.
     */
    UserName?: __string;
    /**
     * The type of the user.
     */
    UserType?: __string;
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
  export type AccountIds = __string[];
  export interface Action {
    /**
     * GuardDuty Finding activity type.
     */
    ActionType?: __string;
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
  export type Activate = boolean;
  export interface ArchiveFindingsRequest {
    /**
     * The ID of the detector that specifies the GuardDuty service whose findings you want to archive.
     */
    DetectorId: __string;
    /**
     * IDs of the findings that you want to archive.
     */
    FindingIds?: FindingIds;
  }
  export interface ArchiveFindingsResponse {
  }
  export interface AwsApiCallAction {
    /**
     * AWS API name.
     */
    Api?: __string;
    /**
     * AWS API caller type.
     */
    CallerType?: __string;
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
    ServiceName?: __string;
  }
  export interface City {
    /**
     * City name of the remote IP address.
     */
    CityName?: __string;
  }
  export type Comments = string;
  export interface Condition {
    /**
     * Represents the equal condition to be applied to a single field when querying for findings.
     */
    Eq?: Eq;
    /**
     * Represents the greater than condition to be applied to a single field when querying for findings.
     */
    Gt?: __integer;
    /**
     * Represents the greater than equal condition to be applied to a single field when querying for findings.
     */
    Gte?: __integer;
    /**
     * Represents the less than condition to be applied to a single field when querying for findings.
     */
    Lt?: __integer;
    /**
     * Represents the less than equal condition to be applied to a single field when querying for findings.
     */
    Lte?: __integer;
    /**
     * Represents the not equal condition to be applied to a single field when querying for findings.
     */
    Neq?: Neq;
  }
  export type CountBySeverityFindingStatistic = number;
  export interface Country {
    /**
     * Country code of the remote IP address.
     */
    CountryCode?: __string;
    /**
     * Country name of the remote IP address.
     */
    CountryName?: __string;
  }
  export interface CreateDetectorRequest {
    /**
     * A boolean value that specifies whether the detector is to be enabled.
     */
    Enable?: Enable;
  }
  export interface CreateDetectorResponse {
    /**
     * The unique ID of the created detector.
     */
    DetectorId?: DetectorId;
  }
  export interface CreateFilterRequest {
    /**
     * Specifies the action that is to be applied to the findings that match the filter.
     */
    Action?: FilterAction;
    /**
     * The idempotency token for the create request.
     */
    ClientToken?: __stringMin0Max64;
    /**
     * The description of the filter.
     */
    Description?: FilterDescription;
    /**
     * The unique ID of the detector that you want to update.
     */
    DetectorId: __string;
    /**
     * Represents the criteria to be used in the filter for querying findings.
     */
    FindingCriteria?: FindingCriteria;
    /**
     * The name of the filter.
     */
    Name?: FilterName;
    /**
     * Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings.
     */
    Rank?: FilterRank;
  }
  export interface CreateFilterResponse {
    /**
     * The name of the successfully created filter.
     */
    Name?: FilterName;
  }
  export interface CreateIPSetRequest {
    /**
     * A boolean value that indicates whether GuardDuty is to start using the uploaded IPSet.
     */
    Activate?: Activate;
    /**
     * The unique ID of the detector that you want to update.
     */
    DetectorId: __string;
    /**
     * The format of the file that contains the IPSet.
     */
    Format?: IpSetFormat;
    /**
     * The URI of the file that contains the IPSet. For example (https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key)
     */
    Location?: Location;
    /**
     * The user friendly name to identify the IPSet. This name is displayed in all findings that are triggered by activity that involves IP addresses included in this IPSet.
     */
    Name?: Name;
  }
  export interface CreateIPSetResponse {
    IpSetId?: IpSetId;
  }
  export interface CreateMembersRequest {
    /**
     * A list of account ID and email address pairs of the accounts that you want to associate with the master GuardDuty account.
     */
    AccountDetails?: AccountDetails;
    /**
     * The unique ID of the detector of the GuardDuty account with which you want to associate member accounts.
     */
    DetectorId: __string;
  }
  export interface CreateMembersResponse {
    /**
     * A list of objects containing the unprocessed account and a result string explaining why it was unprocessed.
     */
    UnprocessedAccounts?: UnprocessedAccounts;
  }
  export interface CreateSampleFindingsRequest {
    /**
     * The ID of the detector to create sample findings for.
     */
    DetectorId: __string;
    /**
     * Types of sample findings that you want to generate.
     */
    FindingTypes?: FindingTypes;
  }
  export interface CreateSampleFindingsResponse {
  }
  export interface CreateThreatIntelSetRequest {
    /**
     * A boolean value that indicates whether GuardDuty is to start using the uploaded ThreatIntelSet.
     */
    Activate?: Activate;
    /**
     * The unique ID of the detector that you want to update.
     */
    DetectorId: __string;
    /**
     * The format of the file that contains the ThreatIntelSet.
     */
    Format?: ThreatIntelSetFormat;
    /**
     * The URI of the file that contains the ThreatIntelSet. For example (https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key).
     */
    Location?: Location;
    /**
     * A user-friendly ThreatIntelSet name that is displayed in all finding generated by activity that involves IP addresses included in this ThreatIntelSet.
     */
    Name?: Name;
  }
  export interface CreateThreatIntelSetResponse {
    ThreatIntelSetId?: ThreatIntelSetId;
  }
  export type CreatedAt = string;
  export interface DeclineInvitationsRequest {
    /**
     * A list of account IDs of the AWS accounts that sent invitations to the current member account that you want to decline invitations from.
     */
    AccountIds?: AccountIds;
  }
  export interface DeclineInvitationsResponse {
    /**
     * A list of objects containing the unprocessed account and a result string explaining why it was unprocessed.
     */
    UnprocessedAccounts?: UnprocessedAccounts;
  }
  export interface DeleteDetectorRequest {
    /**
     * The unique ID that specifies the detector that you want to delete.
     */
    DetectorId: __string;
  }
  export interface DeleteDetectorResponse {
  }
  export interface DeleteFilterRequest {
    /**
     * The unique ID that specifies the detector where you want to delete a filter.
     */
    DetectorId: __string;
    /**
     * The name of the filter.
     */
    FilterName: __string;
  }
  export interface DeleteFilterResponse {
  }
  export interface DeleteIPSetRequest {
    /**
     * The detectorID that specifies the GuardDuty service whose IPSet you want to delete.
     */
    DetectorId: __string;
    /**
     * The unique ID that specifies the IPSet that you want to delete.
     */
    IpSetId: __string;
  }
  export interface DeleteIPSetResponse {
  }
  export interface DeleteInvitationsRequest {
    /**
     * A list of account IDs of the AWS accounts that sent invitations to the current member account that you want to delete invitations from.
     */
    AccountIds?: AccountIds;
  }
  export interface DeleteInvitationsResponse {
    /**
     * A list of objects containing the unprocessed account and a result string explaining why it was unprocessed.
     */
    UnprocessedAccounts?: UnprocessedAccounts;
  }
  export interface DeleteMembersRequest {
    /**
     * A list of account IDs of the GuardDuty member accounts that you want to delete.
     */
    AccountIds?: AccountIds;
    /**
     * The unique ID of the detector of the GuardDuty account whose members you want to delete.
     */
    DetectorId: __string;
  }
  export interface DeleteMembersResponse {
    /**
     * A list of objects containing the unprocessed account and a result string explaining why it was unprocessed.
     */
    UnprocessedAccounts?: UnprocessedAccounts;
  }
  export interface DeleteThreatIntelSetRequest {
    /**
     * The detectorID that specifies the GuardDuty service whose ThreatIntelSet you want to delete.
     */
    DetectorId: __string;
    /**
     * The unique ID that specifies the ThreatIntelSet that you want to delete.
     */
    ThreatIntelSetId: __string;
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
    DetectorId: __string;
  }
  export interface DisassociateFromMasterAccountResponse {
  }
  export interface DisassociateMembersRequest {
    /**
     * A list of account IDs of the GuardDuty member accounts that you want to disassociate from master.
     */
    AccountIds?: AccountIds;
    /**
     * The unique ID of the detector of the GuardDuty account whose members you want to disassociate from master.
     */
    DetectorId: __string;
  }
  export interface DisassociateMembersResponse {
    /**
     * A list of objects containing the unprocessed account and a result string explaining why it was unprocessed.
     */
    UnprocessedAccounts?: UnprocessedAccounts;
  }
  export interface DnsRequestAction {
    /**
     * Domain information for the DNS request.
     */
    Domain?: Domain;
  }
  export type Domain = string;
  export interface DomainDetails {
  }
  export type Email = string;
  export type Enable = boolean;
  export type Eq = __string[];
  export interface ErrorResponse {
    /**
     * The error message.
     */
    Message?: __string;
    /**
     * The error type.
     */
    Type?: __string;
  }
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
    AccountId: __string;
    /**
     * The ARN of a finding described by the action.
     */
    Arn: __string;
    /**
     * The confidence level of a finding.
     */
    Confidence?: __double;
    /**
     * The time stamp at which a finding was generated.
     */
    CreatedAt: CreatedAt;
    /**
     * The description of a finding.
     */
    Description?: __string;
    /**
     * The identifier that corresponds to a finding described by the action.
     */
    Id: __string;
    /**
     * The AWS resource partition.
     */
    Partition?: __string;
    /**
     * The AWS region where the activity occurred that prompted GuardDuty to generate a finding.
     */
    Region: __string;
    /**
     * The AWS resource associated with the activity that prompted GuardDuty to generate a finding.
     */
    Resource: Resource;
    /**
     * Findings' schema version.
     */
    SchemaVersion: __string;
    /**
     * Additional information assigned to the generated finding by GuardDuty.
     */
    Service?: Service;
    /**
     * The severity of a finding.
     */
    Severity: __double;
    /**
     * The title of a finding.
     */
    Title?: __string;
    /**
     * The type of a finding described by the action.
     */
    Type: __string;
    /**
     * The time stamp at which a finding was last updated.
     */
    UpdatedAt: UpdatedAt;
  }
  export interface FindingCriteria {
    /**
     * Represents a map of finding properties that match specified conditions and values when querying findings.
     */
    Criterion?: __mapOfCondition;
  }
  export type FindingId = string;
  export type FindingIds = FindingId[];
  export type FindingStatisticType = "COUNT_BY_SEVERITY"|string;
  export type FindingStatisticTypes = FindingStatisticType[];
  export interface FindingStatistics {
    /**
     * Represents a map of severity to count statistic for a set of findings
     */
    CountBySeverity?: __mapOfCountBySeverityFindingStatistic;
  }
  export type FindingType = string;
  export type FindingTypes = FindingType[];
  export type Findings = Finding[];
  export interface GeoLocation {
    /**
     * Latitude information of remote IP address.
     */
    Lat?: __double;
    /**
     * Longitude information of remote IP address.
     */
    Lon?: __double;
  }
  export interface GetDetectorRequest {
    /**
     * The unique ID of the detector that you want to retrieve.
     */
    DetectorId: __string;
  }
  export interface GetDetectorResponse {
    CreatedAt?: CreatedAt;
    ServiceRole?: ServiceRole;
    Status?: DetectorStatus;
    UpdatedAt?: UpdatedAt;
  }
  export interface GetFilterRequest {
    /**
     * The detector ID that specifies the GuardDuty service where you want to list the details of the specified filter.
     */
    DetectorId: __string;
    /**
     * The name of the filter whose details you want to get.
     */
    FilterName: __string;
  }
  export interface GetFilterResponse {
    /**
     * Specifies the action that is to be applied to the findings that match the filter.
     */
    Action?: FilterAction;
    /**
     * The description of the filter.
     */
    Description?: FilterDescription;
    /**
     * Represents the criteria to be used in the filter for querying findings.
     */
    FindingCriteria?: FindingCriteria;
    /**
     * The name of the filter.
     */
    Name?: FilterName;
    /**
     * Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings.
     */
    Rank?: FilterRank;
  }
  export interface GetFindingsRequest {
    /**
     * The ID of the detector that specifies the GuardDuty service whose findings you want to retrieve.
     */
    DetectorId: __string;
    /**
     * IDs of the findings that you want to retrieve.
     */
    FindingIds?: FindingIds;
    /**
     * Represents the criteria used for sorting findings.
     */
    SortCriteria?: SortCriteria;
  }
  export interface GetFindingsResponse {
    Findings?: Findings;
  }
  export interface GetFindingsStatisticsRequest {
    /**
     * The ID of the detector that specifies the GuardDuty service whose findings' statistics you want to retrieve.
     */
    DetectorId: __string;
    /**
     * Represents the criteria used for querying findings.
     */
    FindingCriteria?: FindingCriteria;
    /**
     * Types of finding statistics to retrieve.
     */
    FindingStatisticTypes?: FindingStatisticTypes;
  }
  export interface GetFindingsStatisticsResponse {
    /**
     * Finding statistics object.
     */
    FindingStatistics?: FindingStatistics;
  }
  export interface GetIPSetRequest {
    /**
     * The detectorID that specifies the GuardDuty service whose IPSet you want to retrieve.
     */
    DetectorId: __string;
    /**
     * The unique ID that specifies the IPSet that you want to describe.
     */
    IpSetId: __string;
  }
  export interface GetIPSetResponse {
    /**
     * The format of the file that contains the IPSet.
     */
    Format?: IpSetFormat;
    /**
     * The URI of the file that contains the IPSet. For example (https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key)
     */
    Location?: Location;
    /**
     * The user friendly name to identify the IPSet. This name is displayed in all findings that are triggered by activity that involves IP addresses included in this IPSet.
     */
    Name?: Name;
    /**
     * The status of ipSet file uploaded.
     */
    Status?: IpSetStatus;
  }
  export interface GetInvitationsCountRequest {
  }
  export interface GetInvitationsCountResponse {
    /**
     * The number of received invitations.
     */
    InvitationsCount?: __integer;
  }
  export interface GetMasterAccountRequest {
    /**
     * The unique ID of the detector of the GuardDuty member account.
     */
    DetectorId: __string;
  }
  export interface GetMasterAccountResponse {
    Master?: Master;
  }
  export interface GetMembersRequest {
    /**
     * A list of account IDs of the GuardDuty member accounts that you want to describe.
     */
    AccountIds?: AccountIds;
    /**
     * The unique ID of the detector of the GuardDuty account whose members you want to retrieve.
     */
    DetectorId: __string;
  }
  export interface GetMembersResponse {
    Members?: Members;
    /**
     * A list of objects containing the unprocessed account and a result string explaining why it was unprocessed.
     */
    UnprocessedAccounts?: UnprocessedAccounts;
  }
  export interface GetThreatIntelSetRequest {
    /**
     * The detectorID that specifies the GuardDuty service whose ThreatIntelSet you want to describe.
     */
    DetectorId: __string;
    /**
     * The unique ID that specifies the ThreatIntelSet that you want to describe.
     */
    ThreatIntelSetId: __string;
  }
  export interface GetThreatIntelSetResponse {
    /**
     * The format of the threatIntelSet.
     */
    Format?: ThreatIntelSetFormat;
    /**
     * The URI of the file that contains the ThreatIntelSet. For example (https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key).
     */
    Location?: Location;
    /**
     * A user-friendly ThreatIntelSet name that is displayed in all finding generated by activity that involves IP addresses included in this ThreatIntelSet.
     */
    Name?: Name;
    /**
     * The status of threatIntelSet file uploaded.
     */
    Status?: ThreatIntelSetStatus;
  }
  export interface IamInstanceProfile {
    /**
     * AWS EC2 instance profile ARN.
     */
    Arn?: __string;
    /**
     * AWS EC2 instance profile ID.
     */
    Id?: __string;
  }
  export interface InstanceDetails {
    /**
     * The availability zone of the EC2 instance.
     */
    AvailabilityZone?: __string;
    IamInstanceProfile?: IamInstanceProfile;
    /**
     * The image description of the EC2 instance.
     */
    ImageDescription?: __string;
    /**
     * The image ID of the EC2 instance.
     */
    ImageId?: __string;
    /**
     * The ID of the EC2 instance.
     */
    InstanceId?: __string;
    /**
     * The state of the EC2 instance.
     */
    InstanceState?: __string;
    /**
     * The type of the EC2 instance.
     */
    InstanceType?: __string;
    /**
     * The launch time of the EC2 instance.
     */
    LaunchTime?: __string;
    /**
     * The network interface information of the EC2 instance.
     */
    NetworkInterfaces?: NetworkInterfaces;
    /**
     * The platform of the EC2 instance.
     */
    Platform?: __string;
    /**
     * The product code of the EC2 instance.
     */
    ProductCodes?: ProductCodes;
    /**
     * The tags of the EC2 instance.
     */
    Tags?: Tags;
  }
  export interface Invitation {
    /**
     * Inviter account ID
     */
    AccountId?: __string;
    /**
     * This value is used to validate the inviter account to the member account.
     */
    InvitationId?: InvitationId;
    /**
     * Timestamp at which the invitation was sent
     */
    InvitedAt?: InvitedAt;
    /**
     * The status of the relationship between the inviter and invitee accounts.
     */
    RelationshipStatus?: __string;
  }
  export type InvitationId = string;
  export type Invitations = Invitation[];
  export interface InviteMembersRequest {
    /**
     * A list of account IDs of the accounts that you want to invite to GuardDuty as members.
     */
    AccountIds?: AccountIds;
    /**
     * The unique ID of the detector of the GuardDuty account with which you want to invite members.
     */
    DetectorId: __string;
    /**
     * A boolean value that specifies whether you want to disable email notification to the accounts that you’re inviting to GuardDuty as members.
     */
    DisableEmailNotification?: __boolean;
    /**
     * The invitation message that you want to send to the accounts that you’re inviting to GuardDuty as members.
     */
    Message?: Message;
  }
  export interface InviteMembersResponse {
    /**
     * A list of objects containing the unprocessed account and a result string explaining why it was unprocessed.
     */
    UnprocessedAccounts?: UnprocessedAccounts;
  }
  export type InvitedAt = string;
  export type IpSetFormat = "TXT"|"STIX"|"OTX_CSV"|"ALIEN_VAULT"|"PROOF_POINT"|"FIRE_EYE"|string;
  export type IpSetId = string;
  export type IpSetIds = IpSetId[];
  export type IpSetStatus = "INACTIVE"|"ACTIVATING"|"ACTIVE"|"DEACTIVATING"|"ERROR"|"DELETE_PENDING"|"DELETED"|string;
  export type Ipv6Address = string;
  export type Ipv6Addresses = Ipv6Address[];
  export interface ListDetectorsRequest {
    /**
     * You can use this parameter to indicate the maximum number of detectors that you want in the response.
     */
    MaxResults?: MaxResults;
    /**
     * You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the ListDetectors action. For subsequent calls to the action fill nextToken in the request with the value of nextToken from the previous response to continue listing data.
     */
    NextToken?: __string;
  }
  export interface ListDetectorsResponse {
    DetectorIds?: DetectorIds;
    NextToken?: NextToken;
  }
  export interface ListFiltersRequest {
    /**
     * The ID of the detector that specifies the GuardDuty service where you want to list filters.
     */
    DetectorId: __string;
    /**
     * Indicates the maximum number of items that you want in the response. The maximum value is 50.
     */
    MaxResults?: MaxResults;
    /**
     * Paginates results. Set the value of this parameter to NULL on your first call to the ListFilters operation.For subsequent calls to the operation, fill nextToken in the request with the value of nextToken from the previous response to continue listing data.
     */
    NextToken?: __string;
  }
  export interface ListFiltersResponse {
    FilterNames?: FilterNames;
    NextToken?: NextToken;
  }
  export interface ListFindingsRequest {
    /**
     * The ID of the detector that specifies the GuardDuty service whose findings you want to list.
     */
    DetectorId: __string;
    /**
     * Represents the criteria used for querying findings.
     */
    FindingCriteria?: FindingCriteria;
    /**
     * You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50.
     */
    MaxResults?: MaxResults;
    /**
     * You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the ListFindings action. For subsequent calls to the action fill nextToken in the request with the value of nextToken from the previous response to continue listing data.
     */
    NextToken?: NextToken;
    /**
     * Represents the criteria used for sorting findings.
     */
    SortCriteria?: SortCriteria;
  }
  export interface ListFindingsResponse {
    FindingIds?: FindingIds;
    NextToken?: NextToken;
  }
  export interface ListIPSetsRequest {
    /**
     * The unique ID of the detector that you want to retrieve.
     */
    DetectorId: __string;
    /**
     * You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 7. The maximum value is 7.
     */
    MaxResults?: MaxResults;
    /**
     * You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the ListIPSet action. For subsequent calls to the action fill nextToken in the request with the value of NextToken from the previous response to continue listing data.
     */
    NextToken?: __string;
  }
  export interface ListIPSetsResponse {
    IpSetIds?: IpSetIds;
    NextToken?: NextToken;
  }
  export interface ListInvitationsRequest {
    /**
     * You can use this parameter to indicate the maximum number of invitations you want in the response. The default value is 50. The maximum value is 50.
     */
    MaxResults?: MaxResults;
    /**
     * You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the ListInvitations action. Subsequent calls to the action fill nextToken in the request with the value of NextToken from the previous response to continue listing data.
     */
    NextToken?: __string;
  }
  export interface ListInvitationsResponse {
    Invitations?: Invitations;
    NextToken?: NextToken;
  }
  export interface ListMembersRequest {
    /**
     * The unique ID of the detector of the GuardDuty account whose members you want to list.
     */
    DetectorId: __string;
    /**
     * You can use this parameter to indicate the maximum number of items you want in the response. The default value is 1. The maximum value is 50.
     */
    MaxResults?: MaxResults;
    /**
     * You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the ListMembers action. Subsequent calls to the action fill nextToken in the request with the value of NextToken from the previous response to continue listing data.
     */
    NextToken?: __string;
    /**
     * Specifies what member accounts the response is to include based on their relationship status with the master account. The default value is TRUE. If onlyAssociated is set to TRUE, the response will include member accounts whose relationship status with the master is set to Enabled, Disabled. If onlyAssociated is set to FALSE, the response will include all existing member accounts.
     */
    OnlyAssociated?: __string;
  }
  export interface ListMembersResponse {
    Members?: Members;
    NextToken?: NextToken;
  }
  export interface ListThreatIntelSetsRequest {
    /**
     * The detectorID that specifies the GuardDuty service whose ThreatIntelSets you want to list.
     */
    DetectorId: __string;
    /**
     * You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 7. The maximum value is 7.
     */
    MaxResults?: MaxResults;
    /**
     * Pagination token to start retrieving threat intel sets from.
     */
    NextToken?: __string;
  }
  export interface ListThreatIntelSetsResponse {
    NextToken?: NextToken;
    ThreatIntelSetIds?: ThreatIntelSetIds;
  }
  export interface LocalPortDetails {
    /**
     * Port number of the local connection.
     */
    Port?: __integer;
    /**
     * Port name of the local connection.
     */
    PortName?: __string;
  }
  export type Location = string;
  export interface Master {
    /**
     * Master account ID
     */
    AccountId?: __string;
    /**
     * This value is used to validate the master account to the member account.
     */
    InvitationId?: InvitationId;
    /**
     * Timestamp at which the invitation was sent
     */
    InvitedAt?: InvitedAt;
    /**
     * The status of the relationship between the master and member accounts.
     */
    RelationshipStatus?: __string;
  }
  export type MasterId = string;
  export type MaxResults = number;
  export interface Member {
    AccountId: AccountId;
    DetectorId?: DetectorId;
    /**
     * Member account's email address.
     */
    Email: Email;
    /**
     * Timestamp at which the invitation was sent
     */
    InvitedAt?: InvitedAt;
    MasterId: MasterId;
    /**
     * The status of the relationship between the member and the master.
     */
    RelationshipStatus: __string;
    UpdatedAt: UpdatedAt;
  }
  export type Members = Member[];
  export type Message = string;
  export type Name = string;
  export type Neq = __string[];
  export interface NetworkConnectionAction {
    /**
     * Network connection blocked information.
     */
    Blocked?: __boolean;
    /**
     * Network connection direction.
     */
    ConnectionDirection?: __string;
    /**
     * Local port information of the connection.
     */
    LocalPortDetails?: LocalPortDetails;
    /**
     * Network connection protocol.
     */
    Protocol?: __string;
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
    NetworkInterfaceId?: NetworkInterfaceId;
    /**
     * Private DNS name of the EC2 instance.
     */
    PrivateDnsName?: PrivateDnsName;
    /**
     * Private IP address of the EC2 instance.
     */
    PrivateIpAddress?: PrivateIpAddress;
    /**
     * Other private IP address information of the EC2 instance.
     */
    PrivateIpAddresses?: PrivateIpAddresses;
    /**
     * Public DNS name of the EC2 instance.
     */
    PublicDnsName?: __string;
    /**
     * Public IP address of the EC2 instance.
     */
    PublicIp?: __string;
    /**
     * Security groups associated with the EC2 instance.
     */
    SecurityGroups?: SecurityGroups;
    /**
     * The subnet ID of the EC2 instance.
     */
    SubnetId?: __string;
    /**
     * The VPC ID of the EC2 instance.
     */
    VpcId?: __string;
  }
  export type NetworkInterfaceId = string;
  export type NetworkInterfaces = NetworkInterface[];
  export type NextToken = string;
  export type OrderBy = "ASC"|"DESC"|string;
  export interface Organization {
    /**
     * Autonomous system number of the internet provider of the remote IP address.
     */
    Asn?: __string;
    /**
     * Organization that registered this ASN.
     */
    AsnOrg?: __string;
    /**
     * ISP information for the internet provider.
     */
    Isp?: __string;
    /**
     * Name of the internet provider.
     */
    Org?: __string;
  }
  export interface PortProbeAction {
    /**
     * Port probe blocked information.
     */
    Blocked?: __boolean;
    /**
     * A list of port probe details objects.
     */
    PortProbeDetails?: __listOfPortProbeDetail;
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
  export type PrivateDnsName = string;
  export type PrivateIpAddress = string;
  export interface PrivateIpAddressDetails {
    /**
     * Private DNS name of the EC2 instance.
     */
    PrivateDnsName?: PrivateDnsName;
    /**
     * Private IP address of the EC2 instance.
     */
    PrivateIpAddress?: PrivateIpAddress;
  }
  export type PrivateIpAddresses = PrivateIpAddressDetails[];
  export interface ProductCode {
    /**
     * Product code information.
     */
    Code?: __string;
    /**
     * Product code type.
     */
    ProductType?: __string;
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
    IpAddressV4?: __string;
    /**
     * ISP Organization information of the remote IP address.
     */
    Organization?: Organization;
  }
  export interface RemotePortDetails {
    /**
     * Port number of the remote connection.
     */
    Port?: __integer;
    /**
     * Port name of the remote connection.
     */
    PortName?: __string;
  }
  export interface Resource {
    AccessKeyDetails?: AccessKeyDetails;
    InstanceDetails?: InstanceDetails;
    /**
     * The type of the AWS resource.
     */
    ResourceType?: __string;
  }
  export interface SecurityGroup {
    /**
     * EC2 instance's security group ID.
     */
    GroupId?: __string;
    /**
     * EC2 instance's security group name.
     */
    GroupName?: __string;
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
    Archived?: __boolean;
    /**
     * Total count of the occurrences of this finding type.
     */
    Count?: __integer;
    /**
     * Detector ID for the GuardDuty service.
     */
    DetectorId?: DetectorId;
    /**
     * First seen timestamp of the activity that prompted GuardDuty to generate this finding.
     */
    EventFirstSeen?: __string;
    /**
     * Last seen timestamp of the activity that prompted GuardDuty to generate this finding.
     */
    EventLastSeen?: __string;
    /**
     * Resource role information for this finding.
     */
    ResourceRole?: __string;
    /**
     * The name of the AWS service (GuardDuty) that generated a finding.
     */
    ServiceName?: __string;
    /**
     * Feedback left about the finding.
     */
    UserFeedback?: __string;
  }
  export type ServiceRole = string;
  export interface SortCriteria {
    /**
     * Represents the finding attribute (for example, accountId) by which to sort findings.
     */
    AttributeName?: __string;
    /**
     * Order by which the sorted findings are to be displayed.
     */
    OrderBy?: OrderBy;
  }
  export interface StartMonitoringMembersRequest {
    /**
     * A list of account IDs of the GuardDuty member accounts whose findings you want the master account to monitor.
     */
    AccountIds?: AccountIds;
    /**
     * The unique ID of the detector of the GuardDuty account whom you want to re-enable to monitor members' findings.
     */
    DetectorId: __string;
  }
  export interface StartMonitoringMembersResponse {
    /**
     * A list of objects containing the unprocessed account and a result string explaining why it was unprocessed.
     */
    UnprocessedAccounts?: UnprocessedAccounts;
  }
  export interface StopMonitoringMembersRequest {
    /**
     * A list of account IDs of the GuardDuty member accounts whose findings you want the master account to stop monitoring.
     */
    AccountIds?: AccountIds;
    /**
     * The unique ID of the detector of the GuardDuty account that you want to stop from monitor members' findings.
     */
    DetectorId: __string;
  }
  export interface StopMonitoringMembersResponse {
    /**
     * A list of objects containing the unprocessed account and a result string explaining why it was unprocessed.
     */
    UnprocessedAccounts?: UnprocessedAccounts;
  }
  export interface Tag {
    /**
     * EC2 instance tag key.
     */
    Key?: __string;
    /**
     * EC2 instance tag value.
     */
    Value?: __string;
  }
  export type Tags = Tag[];
  export type ThreatIntelSetFormat = "TXT"|"STIX"|"OTX_CSV"|"ALIEN_VAULT"|"PROOF_POINT"|"FIRE_EYE"|string;
  export type ThreatIntelSetId = string;
  export type ThreatIntelSetIds = ThreatIntelSetId[];
  export type ThreatIntelSetStatus = "INACTIVE"|"ACTIVATING"|"ACTIVE"|"DEACTIVATING"|"ERROR"|"DELETE_PENDING"|"DELETED"|string;
  export interface UnarchiveFindingsRequest {
    /**
     * The ID of the detector that specifies the GuardDuty service whose findings you want to unarchive.
     */
    DetectorId: __string;
    /**
     * IDs of the findings that you want to unarchive.
     */
    FindingIds?: FindingIds;
  }
  export interface UnarchiveFindingsResponse {
  }
  export interface UnprocessedAccount {
    /**
     * AWS Account ID.
     */
    AccountId: __string;
    /**
     * A reason why the account hasn't been processed.
     */
    Result: __string;
  }
  export type UnprocessedAccounts = UnprocessedAccount[];
  export interface UpdateDetectorRequest {
    /**
     * The unique ID of the detector that you want to update.
     */
    DetectorId: __string;
    /**
     * Updated boolean value for the detector that specifies whether the detector is enabled.
     */
    Enable?: Enable;
  }
  export interface UpdateDetectorResponse {
  }
  export interface UpdateFilterRequest {
    /**
     * Specifies the action that is to be applied to the findings that match the filter.
     */
    Action?: FilterAction;
    /**
     * The description of the filter.
     */
    Description?: FilterDescription;
    /**
     * The unique ID of the detector that specifies the GuardDuty service where you want to update a filter.
     */
    DetectorId: __string;
    /**
     * The name of the filter.
     */
    FilterName: __string;
    /**
     * Represents the criteria to be used in the filter for querying findings.
     */
    FindingCriteria?: FindingCriteria;
    /**
     * Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings.
     */
    Rank?: FilterRank;
  }
  export interface UpdateFilterResponse {
    /**
     * The name of the filter.
     */
    Name?: FilterName;
  }
  export interface UpdateFindingsFeedbackRequest {
    /**
     * Additional feedback about the GuardDuty findings.
     */
    Comments?: Comments;
    /**
     * The ID of the detector that specifies the GuardDuty service whose findings you want to mark as useful or not useful.
     */
    DetectorId: __string;
    /**
     * Valid values: USEFUL | NOT_USEFUL
     */
    Feedback?: Feedback;
    /**
     * IDs of the findings that you want to mark as useful or not useful.
     */
    FindingIds?: FindingIds;
  }
  export interface UpdateFindingsFeedbackResponse {
  }
  export interface UpdateIPSetRequest {
    /**
     * The updated boolean value that specifies whether the IPSet is active or not.
     */
    Activate?: Activate;
    /**
     * The detectorID that specifies the GuardDuty service whose IPSet you want to update.
     */
    DetectorId: __string;
    /**
     * The unique ID that specifies the IPSet that you want to update.
     */
    IpSetId: __string;
    /**
     * The updated URI of the file that contains the IPSet. For example (https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key).
     */
    Location?: Location;
    /**
     * The unique ID that specifies the IPSet that you want to update.
     */
    Name?: Name;
  }
  export interface UpdateIPSetResponse {
  }
  export interface UpdateThreatIntelSetRequest {
    /**
     * The updated boolean value that specifies whether the ThreateIntelSet is active or not.
     */
    Activate?: Activate;
    /**
     * The detectorID that specifies the GuardDuty service whose ThreatIntelSet you want to update.
     */
    DetectorId: __string;
    /**
     * The updated URI of the file that contains the ThreateIntelSet. For example (https://s3.us-west-2.amazonaws.com/my-bucket/my-object-key)
     */
    Location?: Location;
    /**
     * The unique ID that specifies the ThreatIntelSet that you want to update.
     */
    Name?: Name;
    /**
     * The unique ID that specifies the ThreatIntelSet that you want to update.
     */
    ThreatIntelSetId: __string;
  }
  export interface UpdateThreatIntelSetResponse {
  }
  export type UpdatedAt = string;
  export type __boolean = boolean;
  export type __double = number;
  export type __integer = number;
  export type __listOfPortProbeDetail = PortProbeDetail[];
  export type __long = number;
  export type __mapOfCondition = {[key: string]: Condition};
  export type __mapOfCountBySeverityFindingStatistic = {[key: string]: CountBySeverityFindingStatistic};
  export type __string = string;
  export type __stringMin0Max64 = string;
  export type __timestamp = Date;
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
