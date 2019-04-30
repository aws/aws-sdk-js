import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class ManagedBlockchain extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ManagedBlockchain.Types.ClientConfiguration)
  config: Config & ManagedBlockchain.Types.ClientConfiguration;
  /**
   * Creates a member within a Managed Blockchain network.
   */
  createMember(params: ManagedBlockchain.Types.CreateMemberInput, callback?: (err: AWSError, data: ManagedBlockchain.Types.CreateMemberOutput) => void): Request<ManagedBlockchain.Types.CreateMemberOutput, AWSError>;
  /**
   * Creates a member within a Managed Blockchain network.
   */
  createMember(callback?: (err: AWSError, data: ManagedBlockchain.Types.CreateMemberOutput) => void): Request<ManagedBlockchain.Types.CreateMemberOutput, AWSError>;
  /**
   * Creates a new blockchain network using Amazon Managed Blockchain.
   */
  createNetwork(params: ManagedBlockchain.Types.CreateNetworkInput, callback?: (err: AWSError, data: ManagedBlockchain.Types.CreateNetworkOutput) => void): Request<ManagedBlockchain.Types.CreateNetworkOutput, AWSError>;
  /**
   * Creates a new blockchain network using Amazon Managed Blockchain.
   */
  createNetwork(callback?: (err: AWSError, data: ManagedBlockchain.Types.CreateNetworkOutput) => void): Request<ManagedBlockchain.Types.CreateNetworkOutput, AWSError>;
  /**
   * Creates a peer node in a member.
   */
  createNode(params: ManagedBlockchain.Types.CreateNodeInput, callback?: (err: AWSError, data: ManagedBlockchain.Types.CreateNodeOutput) => void): Request<ManagedBlockchain.Types.CreateNodeOutput, AWSError>;
  /**
   * Creates a peer node in a member.
   */
  createNode(callback?: (err: AWSError, data: ManagedBlockchain.Types.CreateNodeOutput) => void): Request<ManagedBlockchain.Types.CreateNodeOutput, AWSError>;
  /**
   * Creates a proposal for a change to the network that other members of the network can vote on, for example, a proposal to add a new member to the network. Any member can create a proposal.
   */
  createProposal(params: ManagedBlockchain.Types.CreateProposalInput, callback?: (err: AWSError, data: ManagedBlockchain.Types.CreateProposalOutput) => void): Request<ManagedBlockchain.Types.CreateProposalOutput, AWSError>;
  /**
   * Creates a proposal for a change to the network that other members of the network can vote on, for example, a proposal to add a new member to the network. Any member can create a proposal.
   */
  createProposal(callback?: (err: AWSError, data: ManagedBlockchain.Types.CreateProposalOutput) => void): Request<ManagedBlockchain.Types.CreateProposalOutput, AWSError>;
  /**
   * Deletes a member. Deleting a member removes the member and all associated resources from the network. DeleteMember can only be called for a specified MemberId if the principal performing the action is associated with the AWS account that owns the member. In all other cases, the DeleteMember action is carried out as the result of an approved proposal to remove a member. If MemberId is the last member in a network specified by the last AWS account, the network is deleted also.
   */
  deleteMember(params: ManagedBlockchain.Types.DeleteMemberInput, callback?: (err: AWSError, data: ManagedBlockchain.Types.DeleteMemberOutput) => void): Request<ManagedBlockchain.Types.DeleteMemberOutput, AWSError>;
  /**
   * Deletes a member. Deleting a member removes the member and all associated resources from the network. DeleteMember can only be called for a specified MemberId if the principal performing the action is associated with the AWS account that owns the member. In all other cases, the DeleteMember action is carried out as the result of an approved proposal to remove a member. If MemberId is the last member in a network specified by the last AWS account, the network is deleted also.
   */
  deleteMember(callback?: (err: AWSError, data: ManagedBlockchain.Types.DeleteMemberOutput) => void): Request<ManagedBlockchain.Types.DeleteMemberOutput, AWSError>;
  /**
   * Deletes a peer node from a member that your AWS account owns. All data on the node is lost and cannot be recovered.
   */
  deleteNode(params: ManagedBlockchain.Types.DeleteNodeInput, callback?: (err: AWSError, data: ManagedBlockchain.Types.DeleteNodeOutput) => void): Request<ManagedBlockchain.Types.DeleteNodeOutput, AWSError>;
  /**
   * Deletes a peer node from a member that your AWS account owns. All data on the node is lost and cannot be recovered.
   */
  deleteNode(callback?: (err: AWSError, data: ManagedBlockchain.Types.DeleteNodeOutput) => void): Request<ManagedBlockchain.Types.DeleteNodeOutput, AWSError>;
  /**
   * Returns detailed information about a member.
   */
  getMember(params: ManagedBlockchain.Types.GetMemberInput, callback?: (err: AWSError, data: ManagedBlockchain.Types.GetMemberOutput) => void): Request<ManagedBlockchain.Types.GetMemberOutput, AWSError>;
  /**
   * Returns detailed information about a member.
   */
  getMember(callback?: (err: AWSError, data: ManagedBlockchain.Types.GetMemberOutput) => void): Request<ManagedBlockchain.Types.GetMemberOutput, AWSError>;
  /**
   * Returns detailed information about a network.
   */
  getNetwork(params: ManagedBlockchain.Types.GetNetworkInput, callback?: (err: AWSError, data: ManagedBlockchain.Types.GetNetworkOutput) => void): Request<ManagedBlockchain.Types.GetNetworkOutput, AWSError>;
  /**
   * Returns detailed information about a network.
   */
  getNetwork(callback?: (err: AWSError, data: ManagedBlockchain.Types.GetNetworkOutput) => void): Request<ManagedBlockchain.Types.GetNetworkOutput, AWSError>;
  /**
   * Returns detailed information about a peer node.
   */
  getNode(params: ManagedBlockchain.Types.GetNodeInput, callback?: (err: AWSError, data: ManagedBlockchain.Types.GetNodeOutput) => void): Request<ManagedBlockchain.Types.GetNodeOutput, AWSError>;
  /**
   * Returns detailed information about a peer node.
   */
  getNode(callback?: (err: AWSError, data: ManagedBlockchain.Types.GetNodeOutput) => void): Request<ManagedBlockchain.Types.GetNodeOutput, AWSError>;
  /**
   * Returns detailed information about a proposal.
   */
  getProposal(params: ManagedBlockchain.Types.GetProposalInput, callback?: (err: AWSError, data: ManagedBlockchain.Types.GetProposalOutput) => void): Request<ManagedBlockchain.Types.GetProposalOutput, AWSError>;
  /**
   * Returns detailed information about a proposal.
   */
  getProposal(callback?: (err: AWSError, data: ManagedBlockchain.Types.GetProposalOutput) => void): Request<ManagedBlockchain.Types.GetProposalOutput, AWSError>;
  /**
   * Returns a listing of all invitations made on the specified network.
   */
  listInvitations(params: ManagedBlockchain.Types.ListInvitationsInput, callback?: (err: AWSError, data: ManagedBlockchain.Types.ListInvitationsOutput) => void): Request<ManagedBlockchain.Types.ListInvitationsOutput, AWSError>;
  /**
   * Returns a listing of all invitations made on the specified network.
   */
  listInvitations(callback?: (err: AWSError, data: ManagedBlockchain.Types.ListInvitationsOutput) => void): Request<ManagedBlockchain.Types.ListInvitationsOutput, AWSError>;
  /**
   * Returns a listing of the members in a network and properties of their configurations.
   */
  listMembers(params: ManagedBlockchain.Types.ListMembersInput, callback?: (err: AWSError, data: ManagedBlockchain.Types.ListMembersOutput) => void): Request<ManagedBlockchain.Types.ListMembersOutput, AWSError>;
  /**
   * Returns a listing of the members in a network and properties of their configurations.
   */
  listMembers(callback?: (err: AWSError, data: ManagedBlockchain.Types.ListMembersOutput) => void): Request<ManagedBlockchain.Types.ListMembersOutput, AWSError>;
  /**
   * Returns information about the networks in which the current AWS account has members.
   */
  listNetworks(params: ManagedBlockchain.Types.ListNetworksInput, callback?: (err: AWSError, data: ManagedBlockchain.Types.ListNetworksOutput) => void): Request<ManagedBlockchain.Types.ListNetworksOutput, AWSError>;
  /**
   * Returns information about the networks in which the current AWS account has members.
   */
  listNetworks(callback?: (err: AWSError, data: ManagedBlockchain.Types.ListNetworksOutput) => void): Request<ManagedBlockchain.Types.ListNetworksOutput, AWSError>;
  /**
   * Returns information about the nodes within a network.
   */
  listNodes(params: ManagedBlockchain.Types.ListNodesInput, callback?: (err: AWSError, data: ManagedBlockchain.Types.ListNodesOutput) => void): Request<ManagedBlockchain.Types.ListNodesOutput, AWSError>;
  /**
   * Returns information about the nodes within a network.
   */
  listNodes(callback?: (err: AWSError, data: ManagedBlockchain.Types.ListNodesOutput) => void): Request<ManagedBlockchain.Types.ListNodesOutput, AWSError>;
  /**
   * Returns the listing of votes for a specified proposal, including the value of each vote and the unique identifier of the member that cast the vote.
   */
  listProposalVotes(params: ManagedBlockchain.Types.ListProposalVotesInput, callback?: (err: AWSError, data: ManagedBlockchain.Types.ListProposalVotesOutput) => void): Request<ManagedBlockchain.Types.ListProposalVotesOutput, AWSError>;
  /**
   * Returns the listing of votes for a specified proposal, including the value of each vote and the unique identifier of the member that cast the vote.
   */
  listProposalVotes(callback?: (err: AWSError, data: ManagedBlockchain.Types.ListProposalVotesOutput) => void): Request<ManagedBlockchain.Types.ListProposalVotesOutput, AWSError>;
  /**
   * Returns a listing of proposals for the network.
   */
  listProposals(params: ManagedBlockchain.Types.ListProposalsInput, callback?: (err: AWSError, data: ManagedBlockchain.Types.ListProposalsOutput) => void): Request<ManagedBlockchain.Types.ListProposalsOutput, AWSError>;
  /**
   * Returns a listing of proposals for the network.
   */
  listProposals(callback?: (err: AWSError, data: ManagedBlockchain.Types.ListProposalsOutput) => void): Request<ManagedBlockchain.Types.ListProposalsOutput, AWSError>;
  /**
   * Rejects an invitation to join a network. This action can be called by a principal in an AWS account that has received an invitation to create a member and join a network.
   */
  rejectInvitation(params: ManagedBlockchain.Types.RejectInvitationInput, callback?: (err: AWSError, data: ManagedBlockchain.Types.RejectInvitationOutput) => void): Request<ManagedBlockchain.Types.RejectInvitationOutput, AWSError>;
  /**
   * Rejects an invitation to join a network. This action can be called by a principal in an AWS account that has received an invitation to create a member and join a network.
   */
  rejectInvitation(callback?: (err: AWSError, data: ManagedBlockchain.Types.RejectInvitationOutput) => void): Request<ManagedBlockchain.Types.RejectInvitationOutput, AWSError>;
  /**
   * Casts a vote for a specified ProposalId on behalf of a member. The member to vote as, specified by VoterMemberId, must be in the same AWS account as the principal that calls the action.
   */
  voteOnProposal(params: ManagedBlockchain.Types.VoteOnProposalInput, callback?: (err: AWSError, data: ManagedBlockchain.Types.VoteOnProposalOutput) => void): Request<ManagedBlockchain.Types.VoteOnProposalOutput, AWSError>;
  /**
   * Casts a vote for a specified ProposalId on behalf of a member. The member to vote as, specified by VoterMemberId, must be in the same AWS account as the principal that calls the action.
   */
  voteOnProposal(callback?: (err: AWSError, data: ManagedBlockchain.Types.VoteOnProposalOutput) => void): Request<ManagedBlockchain.Types.VoteOnProposalOutput, AWSError>;
}
declare namespace ManagedBlockchain {
  export interface ApprovalThresholdPolicy {
    /**
     * The percentage of votes among all members that must be YES for a proposal to be approved. For example, a ThresholdPercentage value of 50 indicates 50%. The ThresholdComparator determines the precise comparison. If a ThresholdPercentage value of 50 is specified on a network with 10 members, along with a ThresholdComparator value of GREATER_THAN, this indicates that 6 YES votes are required for the proposal to be approved.
     */
    ThresholdPercentage?: ThresholdPercentageInt;
    /**
     * The duration from the time that a proposal is created until it expires. If members cast neither the required number of YES votes to approve the proposal nor the number of NO votes required to reject it before the duration expires, the proposal is EXPIRED and ProposalActions are not carried out.
     */
    ProposalDurationInHours?: ProposalDurationInt;
    /**
     * Determines whether the vote percentage must be greater than the ThresholdPercentage or must be greater than or equal to the ThreholdPercentage to be approved.
     */
    ThresholdComparator?: ThresholdComparator;
  }
  export type AvailabilityZoneString = string;
  export type ClientRequestTokenString = string;
  export interface CreateMemberInput {
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an AWS SDK or the AWS CLI.
     */
    ClientRequestToken: ClientRequestTokenString;
    /**
     * The unique identifier of the invitation that is sent to the member to join the network.
     */
    InvitationId: ResourceIdString;
    /**
     * The unique identifier of the network in which the member is created.
     */
    NetworkId: ResourceIdString;
    /**
     * Member configuration parameters.
     */
    MemberConfiguration: MemberConfiguration;
  }
  export interface CreateMemberOutput {
    /**
     * The unique identifier of the member.
     */
    MemberId?: ResourceIdString;
  }
  export interface CreateNetworkInput {
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an AWS SDK or the AWS CLI.
     */
    ClientRequestToken: ClientRequestTokenString;
    /**
     * The name of the network.
     */
    Name: NameString;
    /**
     * An optional description for the network.
     */
    Description?: DescriptionString;
    /**
     * The blockchain framework that the network uses.
     */
    Framework: Framework;
    /**
     * The version of the blockchain framework that the network uses.
     */
    FrameworkVersion: FrameworkVersionString;
    /**
     *  Configuration properties of the blockchain framework relevant to the network configuration. 
     */
    FrameworkConfiguration?: NetworkFrameworkConfiguration;
    /**
     *  The voting rules used by the network to determine if a proposal is approved. 
     */
    VotingPolicy: VotingPolicy;
    /**
     * Configuration properties for the first member within the network.
     */
    MemberConfiguration: MemberConfiguration;
  }
  export interface CreateNetworkOutput {
    /**
     * The unique identifier for the network.
     */
    NetworkId?: ResourceIdString;
    /**
     * The unique identifier for the first member within the network.
     */
    MemberId?: ResourceIdString;
  }
  export interface CreateNodeInput {
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an AWS SDK or the AWS CLI.
     */
    ClientRequestToken: ClientRequestTokenString;
    /**
     * The unique identifier of the network in which this node runs.
     */
    NetworkId: ResourceIdString;
    /**
     * The unique identifier of the member that owns this node.
     */
    MemberId: ResourceIdString;
    /**
     * The properties of a node configuration.
     */
    NodeConfiguration: NodeConfiguration;
  }
  export interface CreateNodeOutput {
    /**
     * The unique identifier of the node.
     */
    NodeId?: ResourceIdString;
  }
  export interface CreateProposalInput {
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an AWS SDK or the AWS CLI.
     */
    ClientRequestToken: ClientRequestTokenString;
    /**
     *  The unique identifier of the network for which the proposal is made.
     */
    NetworkId: ResourceIdString;
    /**
     * The unique identifier of the member that is creating the proposal. This identifier is especially useful for identifying the member making the proposal when multiple members exist in a single AWS account.
     */
    MemberId: ResourceIdString;
    /**
     * The type of actions proposed, such as inviting a member or removing a member. The types of Actions in a proposal are mutually exclusive. For example, a proposal with Invitations actions cannot also contain Removals actions.
     */
    Actions: ProposalActions;
    /**
     * A description for the proposal that is visible to voting members, for example, "Proposal to add Example Corp. as member."
     */
    Description?: DescriptionString;
  }
  export interface CreateProposalOutput {
    /**
     * The unique identifier of the proposal.
     */
    ProposalId?: ResourceIdString;
  }
  export interface DeleteMemberInput {
    /**
     * The unique identifier of the network from which the member is removed.
     */
    NetworkId: ResourceIdString;
    /**
     * The unique identifier of the member to remove.
     */
    MemberId: ResourceIdString;
  }
  export interface DeleteMemberOutput {
  }
  export interface DeleteNodeInput {
    /**
     * The unique identifier of the network that the node belongs to.
     */
    NetworkId: ResourceIdString;
    /**
     * The unique identifier of the member that owns this node.
     */
    MemberId: ResourceIdString;
    /**
     * The unique identifier of the node.
     */
    NodeId: ResourceIdString;
  }
  export interface DeleteNodeOutput {
  }
  export type DescriptionString = string;
  export type Edition = "STARTER"|"STANDARD"|string;
  export type Framework = "HYPERLEDGER_FABRIC"|string;
  export type FrameworkVersionString = string;
  export interface GetMemberInput {
    /**
     * The unique identifier of the network to which the member belongs.
     */
    NetworkId: ResourceIdString;
    /**
     * The unique identifier of the member.
     */
    MemberId: ResourceIdString;
  }
  export interface GetMemberOutput {
    /**
     * The properties of a member.
     */
    Member?: Member;
  }
  export interface GetNetworkInput {
    /**
     * The unique identifier of the network to get information about.
     */
    NetworkId: ResourceIdString;
  }
  export interface GetNetworkOutput {
    /**
     * An object containing network configuration parameters.
     */
    Network?: Network;
  }
  export interface GetNodeInput {
    /**
     * The unique identifier of the network to which the node belongs.
     */
    NetworkId: ResourceIdString;
    /**
     * The unique identifier of the member that owns the node.
     */
    MemberId: ResourceIdString;
    /**
     * The unique identifier of the node.
     */
    NodeId: ResourceIdString;
  }
  export interface GetNodeOutput {
    /**
     * Properties of the node configuration.
     */
    Node?: Node;
  }
  export interface GetProposalInput {
    /**
     * The unique identifier of the network for which the proposal is made.
     */
    NetworkId: ResourceIdString;
    /**
     * The unique identifier of the proposal.
     */
    ProposalId: ResourceIdString;
  }
  export interface GetProposalOutput {
    /**
     * Information about a proposal.
     */
    Proposal?: Proposal;
  }
  export type InstanceTypeString = string;
  export interface Invitation {
    /**
     * The unique identifier for the invitation.
     */
    InvitationId?: ResourceIdString;
    /**
     * The date and time that the invitation was created.
     */
    CreationDate?: Timestamp;
    /**
     * The date and time that the invitation expires. This is the CreationDate plus the ProposalDurationInHours that is specified in the ProposalThresholdPolicy. After this date and time, the invitee can no longer create a member and join the network using this InvitationId.
     */
    ExpirationDate?: Timestamp;
    /**
     * The status of the invitation:    PENDING - The invitee has not created a member to join the network, and the invitation has not yet expired.    ACCEPTING - The invitee has begun creating a member, and creation has not yet completed.    ACCEPTED - The invitee created a member and joined the network using the InvitationID.    REJECTED - The invitee rejected the invitation.    EXPIRED - The invitee neither created a member nor rejected the invitation before the ExpirationDate.  
     */
    Status?: InvitationStatus;
    NetworkSummary?: NetworkSummary;
  }
  export type InvitationList = Invitation[];
  export type InvitationStatus = "PENDING"|"ACCEPTED"|"ACCEPTING"|"REJECTED"|"EXPIRED"|string;
  export interface InviteAction {
    /**
     * The AWS account ID to invite.
     */
    Principal: PrincipalString;
  }
  export type InviteActionList = InviteAction[];
  export type IsOwned = boolean;
  export interface ListInvitationsInput {
    /**
     * The maximum number of invitations to return.
     */
    MaxResults?: ProposalListMaxResults;
    /**
     * The pagination token that indicates the next set of results to retrieve.
     */
    NextToken?: PaginationToken;
  }
  export interface ListInvitationsOutput {
    /**
     * The invitations for the network.
     */
    Invitations?: InvitationList;
    /**
     * The pagination token that indicates the next set of results to retrieve.
     */
    NextToken?: PaginationToken;
  }
  export interface ListMembersInput {
    /**
     * The unique identifier of the network for which to list members.
     */
    NetworkId: ResourceIdString;
    /**
     * The optional name of the member to list.
     */
    Name?: String;
    /**
     * An optional status specifier. If provided, only members currently in this status are listed.
     */
    Status?: MemberStatus;
    /**
     * An optional Boolean value. If provided, the request is limited either to members that the current AWS account owns (true) or that other AWS accounts own (false). If omitted, all members are listed.
     */
    IsOwned?: IsOwned;
    /**
     * The maximum number of members to return in the request.
     */
    MaxResults?: MemberListMaxResults;
    /**
     * The pagination token that indicates the next set of results to retrieve.
     */
    NextToken?: PaginationToken;
  }
  export interface ListMembersOutput {
    /**
     * An array of MemberSummary objects. Each object contains details about a network member.
     */
    Members?: MemberSummaryList;
    /**
     * The pagination token that indicates the next set of results to retrieve.
     */
    NextToken?: PaginationToken;
  }
  export interface ListNetworksInput {
    /**
     * The name of the network.
     */
    Name?: String;
    /**
     * An optional framework specifier. If provided, only networks of this framework type are listed.
     */
    Framework?: Framework;
    /**
     * An optional status specifier. If provided, only networks currently in this status are listed.
     */
    Status?: NetworkStatus;
    /**
     * The maximum number of networks to list.
     */
    MaxResults?: NetworkListMaxResults;
    /**
     * The pagination token that indicates the next set of results to retrieve.
     */
    NextToken?: PaginationToken;
  }
  export interface ListNetworksOutput {
    /**
     * An array of NetworkSummary objects that contain configuration properties for each network.
     */
    Networks?: NetworkSummaryList;
    /**
     * The pagination token that indicates the next set of results to retrieve.
     */
    NextToken?: PaginationToken;
  }
  export interface ListNodesInput {
    /**
     * The unique identifier of the network for which to list nodes.
     */
    NetworkId: ResourceIdString;
    /**
     * The unique identifier of the member who owns the nodes to list.
     */
    MemberId: ResourceIdString;
    /**
     * An optional status specifier. If provided, only nodes currently in this status are listed.
     */
    Status?: NodeStatus;
    /**
     * The maximum number of nodes to list.
     */
    MaxResults?: NodeListMaxResults;
    /**
     * The pagination token that indicates the next set of results to retrieve.
     */
    NextToken?: PaginationToken;
  }
  export interface ListNodesOutput {
    /**
     * An array of NodeSummary objects that contain configuration properties for each node.
     */
    Nodes?: NodeSummaryList;
    /**
     * The pagination token that indicates the next set of results to retrieve.
     */
    NextToken?: PaginationToken;
  }
  export interface ListProposalVotesInput {
    /**
     *  The unique identifier of the network. 
     */
    NetworkId: ResourceIdString;
    /**
     *  The unique identifier of the proposal. 
     */
    ProposalId: ResourceIdString;
    /**
     *  The maximum number of votes to return. 
     */
    MaxResults?: ProposalListMaxResults;
    /**
     *  The pagination token that indicates the next set of results to retrieve. 
     */
    NextToken?: PaginationToken;
  }
  export interface ListProposalVotesOutput {
    /**
     *  The listing of votes. 
     */
    ProposalVotes?: ProposalVoteList;
    /**
     *  The pagination token that indicates the next set of results to retrieve. 
     */
    NextToken?: PaginationToken;
  }
  export interface ListProposalsInput {
    /**
     *  The unique identifier of the network. 
     */
    NetworkId: ResourceIdString;
    /**
     *  The maximum number of proposals to return. 
     */
    MaxResults?: ProposalListMaxResults;
    /**
     *  The pagination token that indicates the next set of results to retrieve. 
     */
    NextToken?: PaginationToken;
  }
  export interface ListProposalsOutput {
    /**
     * The summary of each proposal made on the network.
     */
    Proposals?: ProposalSummaryList;
    /**
     * The pagination token that indicates the next set of results to retrieve.
     */
    NextToken?: PaginationToken;
  }
  export interface Member {
    /**
     * The unique identifier of the network to which the member belongs.
     */
    NetworkId?: ResourceIdString;
    /**
     * The unique identifier of the member.
     */
    Id?: ResourceIdString;
    /**
     * The name of the member.
     */
    Name?: NetworkMemberNameString;
    /**
     * An optional description for the member.
     */
    Description?: DescriptionString;
    /**
     * Attributes relevant to a member for the blockchain framework that the Managed Blockchain network uses.
     */
    FrameworkAttributes?: MemberFrameworkAttributes;
    /**
     * The status of a member.    CREATING - The AWS account is in the process of creating a member.    AVAILABLE - The member has been created and can participate in the network.    CREATE_FAILED - The AWS account attempted to create a member and creation failed.    DELETING - The member and all associated resources are in the process of being deleted. Either the AWS account that owns the member deleted it, or the member is being deleted as the result of an APPROVED PROPOSAL to remove the member.    DELETED - The member can no longer participate on the network and all associated resources are deleted. Either the AWS account that owns the member deleted it, or the member is being deleted as the result of an APPROVED PROPOSAL to remove the member.  
     */
    Status?: MemberStatus;
    /**
     * The date and time that the member was created.
     */
    CreationDate?: Timestamp;
  }
  export interface MemberConfiguration {
    /**
     * The name of the member.
     */
    Name: NetworkMemberNameString;
    /**
     * An optional description of the member.
     */
    Description?: DescriptionString;
    /**
     * Configuration properties of the blockchain framework relevant to the member.
     */
    FrameworkConfiguration: MemberFrameworkConfiguration;
  }
  export interface MemberFabricAttributes {
    /**
     * The user name for the initial administrator user for the member.
     */
    AdminUsername?: UsernameString;
    /**
     * The endpoint used to access the member's certificate authority.
     */
    CaEndpoint?: String;
  }
  export interface MemberFabricConfiguration {
    /**
     * The user name for the member's initial administrative user.
     */
    AdminUsername: UsernameString;
    /**
     * The password for the member's initial administrative user. The AdminPassword must be at least eight characters long and no more than 32 characters. It must contain at least one uppercase letter, one lowercase letter, and one digit. It cannot have a single quote(‘), double quote(“), forward slash(/), backward slash(\), @, or a space.
     */
    AdminPassword: PasswordString;
  }
  export interface MemberFrameworkAttributes {
    /**
     * Attributes of Hyperledger Fabric relevant to a member on a Managed Blockchain network that uses Hyperledger Fabric.
     */
    Fabric?: MemberFabricAttributes;
  }
  export interface MemberFrameworkConfiguration {
    /**
     * Attributes of Hyperledger Fabric for a member on a Managed Blockchain network that uses Hyperledger Fabric.
     */
    Fabric?: MemberFabricConfiguration;
  }
  export type MemberListMaxResults = number;
  export type MemberStatus = "CREATING"|"AVAILABLE"|"CREATE_FAILED"|"DELETING"|"DELETED"|string;
  export interface MemberSummary {
    /**
     * The unique identifier of the member.
     */
    Id?: ResourceIdString;
    /**
     * The name of the member.
     */
    Name?: NetworkMemberNameString;
    /**
     * An optional description of the member.
     */
    Description?: DescriptionString;
    /**
     * The status of the member.    CREATING - The AWS account is in the process of creating a member.    AVAILABLE - The member has been created and can participate in the network.    CREATE_FAILED - The AWS account attempted to create a member and creation failed.    DELETING - The member and all associated resources are in the process of being deleted. Either the AWS account that owns the member deleted it, or the member is being deleted as the result of an APPROVED PROPOSAL to remove the member.    DELETED - The member can no longer participate on the network and all associated resources are deleted. Either the AWS account that owns the member deleted it, or the member is being deleted as the result of an APPROVED PROPOSAL to remove the member.  
     */
    Status?: MemberStatus;
    /**
     * The date and time that the member was created.
     */
    CreationDate?: Timestamp;
    /**
     * An indicator of whether the member is owned by your AWS account or a different AWS account.
     */
    IsOwned?: IsOwned;
  }
  export type MemberSummaryList = MemberSummary[];
  export type NameString = string;
  export interface Network {
    /**
     * The unique identifier of the network.
     */
    Id?: ResourceIdString;
    /**
     * The name of the network.
     */
    Name?: NameString;
    /**
     * Attributes of the blockchain framework for the network.
     */
    Description?: DescriptionString;
    /**
     * The blockchain framework that the network uses.
     */
    Framework?: Framework;
    /**
     * The version of the blockchain framework that the network uses.
     */
    FrameworkVersion?: FrameworkVersionString;
    /**
     * Attributes of the blockchain framework that the network uses.
     */
    FrameworkAttributes?: NetworkFrameworkAttributes;
    /**
     * The VPC endpoint service name of the VPC endpoint service of the network. Members use the VPC endpoint service name to create a VPC endpoint to access network resources.
     */
    VpcEndpointServiceName?: String;
    /**
     * The voting rules for the network to decide if a proposal is accepted.
     */
    VotingPolicy?: VotingPolicy;
    /**
     * The current status of the network.
     */
    Status?: NetworkStatus;
    /**
     * The date and time that the network was created.
     */
    CreationDate?: Timestamp;
  }
  export interface NetworkFabricAttributes {
    /**
     * The endpoint of the ordering service for the network.
     */
    OrderingServiceEndpoint?: String;
    /**
     * The edition of Amazon Managed Blockchain that Hyperledger Fabric uses. For more information, see Amazon Managed Blockchain Pricing.
     */
    Edition?: Edition;
  }
  export interface NetworkFabricConfiguration {
    /**
     * The edition of Amazon Managed Blockchain that the network uses. For more information, see Amazon Managed Blockchain Pricing.
     */
    Edition: Edition;
  }
  export interface NetworkFrameworkAttributes {
    /**
     * Attributes of Hyperledger Fabric for a Managed Blockchain network that uses Hyperledger Fabric.
     */
    Fabric?: NetworkFabricAttributes;
  }
  export interface NetworkFrameworkConfiguration {
    /**
     *  Hyperledger Fabric configuration properties for a Managed Blockchain network that uses Hyperledger Fabric. 
     */
    Fabric?: NetworkFabricConfiguration;
  }
  export type NetworkListMaxResults = number;
  export type NetworkMemberNameString = string;
  export type NetworkStatus = "CREATING"|"AVAILABLE"|"CREATE_FAILED"|"DELETING"|"DELETED"|string;
  export interface NetworkSummary {
    /**
     * The unique identifier of the network.
     */
    Id?: ResourceIdString;
    /**
     * The name of the network.
     */
    Name?: NameString;
    /**
     * An optional description of the network.
     */
    Description?: DescriptionString;
    /**
     * The blockchain framework that the network uses.
     */
    Framework?: Framework;
    /**
     * The version of the blockchain framework that the network uses.
     */
    FrameworkVersion?: FrameworkVersionString;
    /**
     * The current status of the network.
     */
    Status?: NetworkStatus;
    /**
     * The date and time that the network was created.
     */
    CreationDate?: Timestamp;
  }
  export type NetworkSummaryList = NetworkSummary[];
  export interface Node {
    /**
     * The unique identifier of the network that the node is in.
     */
    NetworkId?: ResourceIdString;
    /**
     * The unique identifier of the member to which the node belongs.
     */
    MemberId?: ResourceIdString;
    /**
     * The unique identifier of the node.
     */
    Id?: ResourceIdString;
    /**
     * The instance type of the node.
     */
    InstanceType?: InstanceTypeString;
    /**
     * The Availability Zone in which the node exists.
     */
    AvailabilityZone?: AvailabilityZoneString;
    /**
     * Attributes of the blockchain framework being used.
     */
    FrameworkAttributes?: NodeFrameworkAttributes;
    /**
     * The status of the node.
     */
    Status?: NodeStatus;
    /**
     * The date and time that the node was created.
     */
    CreationDate?: Timestamp;
  }
  export interface NodeConfiguration {
    /**
     * The Amazon Managed Blockchain instance type for the node.
     */
    InstanceType: InstanceTypeString;
    /**
     * The Availability Zone in which the node exists.
     */
    AvailabilityZone: AvailabilityZoneString;
  }
  export interface NodeFabricAttributes {
    /**
     * The endpoint that identifies the peer node for all services except peer channel-based event services.
     */
    PeerEndpoint?: String;
    /**
     * The endpoint that identifies the peer node for peer channel-based event services.
     */
    PeerEventEndpoint?: String;
  }
  export interface NodeFrameworkAttributes {
    /**
     * Attributes of Hyperledger Fabric for a peer node on a Managed Blockchain network that uses Hyperledger Fabric.
     */
    Fabric?: NodeFabricAttributes;
  }
  export type NodeListMaxResults = number;
  export type NodeStatus = "CREATING"|"AVAILABLE"|"CREATE_FAILED"|"DELETING"|"DELETED"|"FAILED"|string;
  export interface NodeSummary {
    /**
     * The unique identifier of the node.
     */
    Id?: ResourceIdString;
    /**
     * The status of the node.
     */
    Status?: NodeStatus;
    /**
     * The date and time that the node was created.
     */
    CreationDate?: Timestamp;
    /**
     * The Availability Zone in which the node exists.
     */
    AvailabilityZone?: AvailabilityZoneString;
    /**
     * The EC2 instance type for the node.
     */
    InstanceType?: InstanceTypeString;
  }
  export type NodeSummaryList = NodeSummary[];
  export type PaginationToken = string;
  export type PasswordString = string;
  export type PrincipalString = string;
  export interface Proposal {
    /**
     * The unique identifier of the proposal.
     */
    ProposalId?: ResourceIdString;
    /**
     * The unique identifier of the network for which the proposal is made.
     */
    NetworkId?: ResourceIdString;
    /**
     * The description of the proposal.
     */
    Description?: DescriptionString;
    /**
     * The actions to perform on the network if the proposal is APPROVED.
     */
    Actions?: ProposalActions;
    /**
     * The unique identifier of the member that created the proposal.
     */
    ProposedByMemberId?: ResourceIdString;
    /**
     * The name of the member that created the proposal.
     */
    ProposedByMemberName?: NetworkMemberNameString;
    /**
     * The status of the proposal. Values are as follows:    IN_PROGRESS - The proposal is active and open for member voting.    APPROVED - The proposal was approved with sufficient YES votes among members according to the VotingPolicy specified for the Network. The specified proposal actions are carried out.    REJECTED - The proposal was rejected with insufficient YES votes among members according to the VotingPolicy specified for the Network. The specified ProposalActions are not carried out.    EXPIRED - Members did not cast the number of votes required to determine the proposal outcome before the proposal expired. The specified ProposalActions are not carried out.    ACTION_FAILED - One or more of the specified ProposalActions in a proposal that was approved could not be completed because of an error.  
     */
    Status?: ProposalStatus;
    /**
     *  The date and time that the proposal was created. 
     */
    CreationDate?: Timestamp;
    /**
     *  The date and time that the proposal expires. This is the CreationDate plus the ProposalDurationInHours that is specified in the ProposalThresholdPolicy. After this date and time, if members have not cast enough votes to determine the outcome according to the voting policy, the proposal is EXPIRED and Actions are not carried out. 
     */
    ExpirationDate?: Timestamp;
    /**
     *  The current total of YES votes cast on the proposal by members. 
     */
    YesVoteCount?: VoteCount;
    /**
     *  The current total of NO votes cast on the proposal by members. 
     */
    NoVoteCount?: VoteCount;
    /**
     *  The number of votes remaining to be cast on the proposal by members. In other words, the number of members minus the sum of YES votes and NO votes. 
     */
    OutstandingVoteCount?: VoteCount;
  }
  export interface ProposalActions {
    /**
     *  The actions to perform for an APPROVED proposal to invite an AWS account to create a member and join the network. 
     */
    Invitations?: InviteActionList;
    /**
     *  The actions to perform for an APPROVED proposal to remove a member from the network, which deletes the member and all associated member resources from the network. 
     */
    Removals?: RemoveActionList;
  }
  export type ProposalDurationInt = number;
  export type ProposalListMaxResults = number;
  export type ProposalStatus = "IN_PROGRESS"|"APPROVED"|"REJECTED"|"EXPIRED"|"ACTION_FAILED"|string;
  export interface ProposalSummary {
    /**
     *  The unique identifier of the proposal. 
     */
    ProposalId?: ResourceIdString;
    /**
     *  The description of the proposal. 
     */
    Description?: DescriptionString;
    /**
     *  The unique identifier of the member that created the proposal. 
     */
    ProposedByMemberId?: ResourceIdString;
    /**
     *  The name of the member that created the proposal. 
     */
    ProposedByMemberName?: NetworkMemberNameString;
    /**
     * The status of the proposal. Values are as follows:    IN_PROGRESS - The proposal is active and open for member voting.    APPROVED - The proposal was approved with sufficient YES votes among members according to the VotingPolicy specified for the Network. The specified proposal actions are carried out.    REJECTED - The proposal was rejected with insufficient YES votes among members according to the VotingPolicy specified for the Network. The specified ProposalActions are not carried out.    EXPIRED - Members did not cast the number of votes required to determine the proposal outcome before the proposal expired. The specified ProposalActions are not carried out.    ACTION_FAILED - One or more of the specified ProposalActions in a proposal that was approved could not be completed because of an error.  
     */
    Status?: ProposalStatus;
    /**
     *  The date and time that the proposal was created. 
     */
    CreationDate?: Timestamp;
    /**
     *  The date and time that the proposal expires. This is the CreationDate plus the ProposalDurationInHours that is specified in the ProposalThresholdPolicy. After this date and time, if members have not cast enough votes to determine the outcome according to the voting policy, the proposal is EXPIRED and Actions are not carried out. 
     */
    ExpirationDate?: Timestamp;
  }
  export type ProposalSummaryList = ProposalSummary[];
  export type ProposalVoteList = VoteSummary[];
  export interface RejectInvitationInput {
    /**
     * The unique identifier of the invitation to reject.
     */
    InvitationId: ResourceIdString;
  }
  export interface RejectInvitationOutput {
  }
  export interface RemoveAction {
    /**
     * The unique identifier of the member to remove.
     */
    MemberId: ResourceIdString;
  }
  export type RemoveActionList = RemoveAction[];
  export type ResourceIdString = string;
  export type String = string;
  export type ThresholdComparator = "GREATER_THAN"|"GREATER_THAN_OR_EQUAL_TO"|string;
  export type ThresholdPercentageInt = number;
  export type Timestamp = Date;
  export type UsernameString = string;
  export type VoteCount = number;
  export interface VoteOnProposalInput {
    /**
     *  The unique identifier of the network. 
     */
    NetworkId: ResourceIdString;
    /**
     *  The unique identifier of the proposal. 
     */
    ProposalId: ResourceIdString;
    /**
     * The unique identifier of the member casting the vote. 
     */
    VoterMemberId: ResourceIdString;
    /**
     *  The value of the vote. 
     */
    Vote: VoteValue;
  }
  export interface VoteOnProposalOutput {
  }
  export interface VoteSummary {
    /**
     *  The vote value, either YES or NO. 
     */
    Vote?: VoteValue;
    /**
     *  The name of the member that cast the vote. 
     */
    MemberName?: NetworkMemberNameString;
    /**
     *  The unique identifier of the member that cast the vote. 
     */
    MemberId?: ResourceIdString;
  }
  export type VoteValue = "YES"|"NO"|string;
  export interface VotingPolicy {
    /**
     * Defines the rules for the network for voting on proposals, such as the percentage of YES votes required for the proposal to be approved and the duration of the proposal. The policy applies to all proposals and is specified when the network is created.
     */
    ApprovalThresholdPolicy?: ApprovalThresholdPolicy;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-09-24"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the ManagedBlockchain client.
   */
  export import Types = ManagedBlockchain;
}
export = ManagedBlockchain;
