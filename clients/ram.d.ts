import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class RAM extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: RAM.Types.ClientConfiguration)
  config: Config & RAM.Types.ClientConfiguration;
  /**
   * Accepts an invitation to a resource share from another AWS account.
   */
  acceptResourceShareInvitation(params: RAM.Types.AcceptResourceShareInvitationRequest, callback?: (err: AWSError, data: RAM.Types.AcceptResourceShareInvitationResponse) => void): Request<RAM.Types.AcceptResourceShareInvitationResponse, AWSError>;
  /**
   * Accepts an invitation to a resource share from another AWS account.
   */
  acceptResourceShareInvitation(callback?: (err: AWSError, data: RAM.Types.AcceptResourceShareInvitationResponse) => void): Request<RAM.Types.AcceptResourceShareInvitationResponse, AWSError>;
  /**
   * Associates the specified resource share with the specified principals and resources.
   */
  associateResourceShare(params: RAM.Types.AssociateResourceShareRequest, callback?: (err: AWSError, data: RAM.Types.AssociateResourceShareResponse) => void): Request<RAM.Types.AssociateResourceShareResponse, AWSError>;
  /**
   * Associates the specified resource share with the specified principals and resources.
   */
  associateResourceShare(callback?: (err: AWSError, data: RAM.Types.AssociateResourceShareResponse) => void): Request<RAM.Types.AssociateResourceShareResponse, AWSError>;
  /**
   * Creates a resource share.
   */
  createResourceShare(params: RAM.Types.CreateResourceShareRequest, callback?: (err: AWSError, data: RAM.Types.CreateResourceShareResponse) => void): Request<RAM.Types.CreateResourceShareResponse, AWSError>;
  /**
   * Creates a resource share.
   */
  createResourceShare(callback?: (err: AWSError, data: RAM.Types.CreateResourceShareResponse) => void): Request<RAM.Types.CreateResourceShareResponse, AWSError>;
  /**
   * Deletes the specified resource share.
   */
  deleteResourceShare(params: RAM.Types.DeleteResourceShareRequest, callback?: (err: AWSError, data: RAM.Types.DeleteResourceShareResponse) => void): Request<RAM.Types.DeleteResourceShareResponse, AWSError>;
  /**
   * Deletes the specified resource share.
   */
  deleteResourceShare(callback?: (err: AWSError, data: RAM.Types.DeleteResourceShareResponse) => void): Request<RAM.Types.DeleteResourceShareResponse, AWSError>;
  /**
   * Disassociates the specified principals or resources from the specified resource share.
   */
  disassociateResourceShare(params: RAM.Types.DisassociateResourceShareRequest, callback?: (err: AWSError, data: RAM.Types.DisassociateResourceShareResponse) => void): Request<RAM.Types.DisassociateResourceShareResponse, AWSError>;
  /**
   * Disassociates the specified principals or resources from the specified resource share.
   */
  disassociateResourceShare(callback?: (err: AWSError, data: RAM.Types.DisassociateResourceShareResponse) => void): Request<RAM.Types.DisassociateResourceShareResponse, AWSError>;
  /**
   * Enables resource sharing within your organization.
   */
  enableSharingWithAwsOrganization(params: RAM.Types.EnableSharingWithAwsOrganizationRequest, callback?: (err: AWSError, data: RAM.Types.EnableSharingWithAwsOrganizationResponse) => void): Request<RAM.Types.EnableSharingWithAwsOrganizationResponse, AWSError>;
  /**
   * Enables resource sharing within your organization.
   */
  enableSharingWithAwsOrganization(callback?: (err: AWSError, data: RAM.Types.EnableSharingWithAwsOrganizationResponse) => void): Request<RAM.Types.EnableSharingWithAwsOrganizationResponse, AWSError>;
  /**
   * Gets the policies for the specifies resources.
   */
  getResourcePolicies(params: RAM.Types.GetResourcePoliciesRequest, callback?: (err: AWSError, data: RAM.Types.GetResourcePoliciesResponse) => void): Request<RAM.Types.GetResourcePoliciesResponse, AWSError>;
  /**
   * Gets the policies for the specifies resources.
   */
  getResourcePolicies(callback?: (err: AWSError, data: RAM.Types.GetResourcePoliciesResponse) => void): Request<RAM.Types.GetResourcePoliciesResponse, AWSError>;
  /**
   * Gets the associations for the specified resource share.
   */
  getResourceShareAssociations(params: RAM.Types.GetResourceShareAssociationsRequest, callback?: (err: AWSError, data: RAM.Types.GetResourceShareAssociationsResponse) => void): Request<RAM.Types.GetResourceShareAssociationsResponse, AWSError>;
  /**
   * Gets the associations for the specified resource share.
   */
  getResourceShareAssociations(callback?: (err: AWSError, data: RAM.Types.GetResourceShareAssociationsResponse) => void): Request<RAM.Types.GetResourceShareAssociationsResponse, AWSError>;
  /**
   * Gets the specified invitations for resource sharing.
   */
  getResourceShareInvitations(params: RAM.Types.GetResourceShareInvitationsRequest, callback?: (err: AWSError, data: RAM.Types.GetResourceShareInvitationsResponse) => void): Request<RAM.Types.GetResourceShareInvitationsResponse, AWSError>;
  /**
   * Gets the specified invitations for resource sharing.
   */
  getResourceShareInvitations(callback?: (err: AWSError, data: RAM.Types.GetResourceShareInvitationsResponse) => void): Request<RAM.Types.GetResourceShareInvitationsResponse, AWSError>;
  /**
   * Gets the specified resource shares or all of your resource shares.
   */
  getResourceShares(params: RAM.Types.GetResourceSharesRequest, callback?: (err: AWSError, data: RAM.Types.GetResourceSharesResponse) => void): Request<RAM.Types.GetResourceSharesResponse, AWSError>;
  /**
   * Gets the specified resource shares or all of your resource shares.
   */
  getResourceShares(callback?: (err: AWSError, data: RAM.Types.GetResourceSharesResponse) => void): Request<RAM.Types.GetResourceSharesResponse, AWSError>;
  /**
   * Lists the principals with access to the specified resource.
   */
  listPrincipals(params: RAM.Types.ListPrincipalsRequest, callback?: (err: AWSError, data: RAM.Types.ListPrincipalsResponse) => void): Request<RAM.Types.ListPrincipalsResponse, AWSError>;
  /**
   * Lists the principals with access to the specified resource.
   */
  listPrincipals(callback?: (err: AWSError, data: RAM.Types.ListPrincipalsResponse) => void): Request<RAM.Types.ListPrincipalsResponse, AWSError>;
  /**
   * Lists the resources that the specified principal can access.
   */
  listResources(params: RAM.Types.ListResourcesRequest, callback?: (err: AWSError, data: RAM.Types.ListResourcesResponse) => void): Request<RAM.Types.ListResourcesResponse, AWSError>;
  /**
   * Lists the resources that the specified principal can access.
   */
  listResources(callback?: (err: AWSError, data: RAM.Types.ListResourcesResponse) => void): Request<RAM.Types.ListResourcesResponse, AWSError>;
  /**
   * Rejects an invitation to a resource share from another AWS account.
   */
  rejectResourceShareInvitation(params: RAM.Types.RejectResourceShareInvitationRequest, callback?: (err: AWSError, data: RAM.Types.RejectResourceShareInvitationResponse) => void): Request<RAM.Types.RejectResourceShareInvitationResponse, AWSError>;
  /**
   * Rejects an invitation to a resource share from another AWS account.
   */
  rejectResourceShareInvitation(callback?: (err: AWSError, data: RAM.Types.RejectResourceShareInvitationResponse) => void): Request<RAM.Types.RejectResourceShareInvitationResponse, AWSError>;
  /**
   * Adds the specified tags to the specified resource share.
   */
  tagResource(params: RAM.Types.TagResourceRequest, callback?: (err: AWSError, data: RAM.Types.TagResourceResponse) => void): Request<RAM.Types.TagResourceResponse, AWSError>;
  /**
   * Adds the specified tags to the specified resource share.
   */
  tagResource(callback?: (err: AWSError, data: RAM.Types.TagResourceResponse) => void): Request<RAM.Types.TagResourceResponse, AWSError>;
  /**
   * Removes the specified tags from the specified resource share.
   */
  untagResource(params: RAM.Types.UntagResourceRequest, callback?: (err: AWSError, data: RAM.Types.UntagResourceResponse) => void): Request<RAM.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes the specified tags from the specified resource share.
   */
  untagResource(callback?: (err: AWSError, data: RAM.Types.UntagResourceResponse) => void): Request<RAM.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates the specified resource share.
   */
  updateResourceShare(params: RAM.Types.UpdateResourceShareRequest, callback?: (err: AWSError, data: RAM.Types.UpdateResourceShareResponse) => void): Request<RAM.Types.UpdateResourceShareResponse, AWSError>;
  /**
   * Updates the specified resource share.
   */
  updateResourceShare(callback?: (err: AWSError, data: RAM.Types.UpdateResourceShareResponse) => void): Request<RAM.Types.UpdateResourceShareResponse, AWSError>;
}
declare namespace RAM {
  export interface AcceptResourceShareInvitationRequest {
    /**
     * The Amazon Resource Name (ARN) of the invitation.
     */
    resourceShareInvitationArn: String;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientToken?: String;
  }
  export interface AcceptResourceShareInvitationResponse {
    /**
     * Information about the invitation.
     */
    resourceShareInvitation?: ResourceShareInvitation;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientToken?: String;
  }
  export interface AssociateResourceShareRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource share.
     */
    resourceShareArn: String;
    /**
     * The Amazon Resource Names (ARN) of the resources.
     */
    resourceArns?: ResourceArnList;
    /**
     * The principals.
     */
    principals?: PrincipalArnOrIdList;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientToken?: String;
  }
  export interface AssociateResourceShareResponse {
    /**
     * Information about the associations.
     */
    resourceShareAssociations?: ResourceShareAssociationList;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientToken?: String;
  }
  export type Boolean = boolean;
  export interface CreateResourceShareRequest {
    /**
     * The name of the resource share.
     */
    name: String;
    /**
     * The Amazon Resource Names (ARN) of the resources to associate with the resource share.
     */
    resourceArns?: ResourceArnList;
    /**
     * The principals to associate with the resource share. The possible values are IDs of AWS accounts, the ARN of an OU or organization from AWS Organizations.
     */
    principals?: PrincipalArnOrIdList;
    /**
     * One or more tags.
     */
    tags?: TagList;
    /**
     * Indicates whether principals outside your organization can be associated with a resource share.
     */
    allowExternalPrincipals?: Boolean;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientToken?: String;
  }
  export interface CreateResourceShareResponse {
    /**
     * Information about the resource share.
     */
    resourceShare?: ResourceShare;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientToken?: String;
  }
  export type DateTime = Date;
  export interface DeleteResourceShareRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource share.
     */
    resourceShareArn: String;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientToken?: String;
  }
  export interface DeleteResourceShareResponse {
    /**
     * Indicates whether the request succeeded.
     */
    returnValue?: Boolean;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientToken?: String;
  }
  export interface DisassociateResourceShareRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource share.
     */
    resourceShareArn: String;
    /**
     * The Amazon Resource Names (ARN) of the resources.
     */
    resourceArns?: ResourceArnList;
    /**
     * The principals.
     */
    principals?: PrincipalArnOrIdList;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientToken?: String;
  }
  export interface DisassociateResourceShareResponse {
    /**
     * Information about the associations.
     */
    resourceShareAssociations?: ResourceShareAssociationList;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientToken?: String;
  }
  export interface EnableSharingWithAwsOrganizationRequest {
  }
  export interface EnableSharingWithAwsOrganizationResponse {
    /**
     * Indicates whether the request succeeded.
     */
    returnValue?: Boolean;
  }
  export interface GetResourcePoliciesRequest {
    /**
     * The Amazon Resource Names (ARN) of the resources.
     */
    resourceArns: ResourceArnList;
    /**
     * The principal.
     */
    principal?: String;
    /**
     * The token for the next page of results.
     */
    nextToken?: String;
    /**
     * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.
     */
    maxResults?: MaxResults;
  }
  export interface GetResourcePoliciesResponse {
    /**
     * A key policy document, in JSON format.
     */
    policies?: PolicyList;
    /**
     * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
     */
    nextToken?: String;
  }
  export interface GetResourceShareAssociationsRequest {
    /**
     * The association type.
     */
    associationType: ResourceShareAssociationType;
    /**
     * The Amazon Resource Names (ARN) of the resource shares.
     */
    resourceShareArns?: ResourceShareArnList;
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    resourceArn?: String;
    /**
     * The principal.
     */
    principal?: String;
    /**
     * The status of the association.
     */
    associationStatus?: ResourceShareAssociationStatus;
    /**
     * The token for the next page of results.
     */
    nextToken?: String;
    /**
     * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.
     */
    maxResults?: MaxResults;
  }
  export interface GetResourceShareAssociationsResponse {
    /**
     * Information about the association.
     */
    resourceShareAssociations?: ResourceShareAssociationList;
    /**
     * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
     */
    nextToken?: String;
  }
  export interface GetResourceShareInvitationsRequest {
    /**
     * The Amazon Resource Names (ARN) of the invitations.
     */
    resourceShareInvitationArns?: ResourceShareInvitationArnList;
    /**
     * The Amazon Resource Names (ARN) of the resource shares.
     */
    resourceShareArns?: ResourceShareArnList;
    /**
     * The token for the next page of results.
     */
    nextToken?: String;
    /**
     * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.
     */
    maxResults?: MaxResults;
  }
  export interface GetResourceShareInvitationsResponse {
    /**
     * Information about the invitations.
     */
    resourceShareInvitations?: ResourceShareInvitationList;
    /**
     * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
     */
    nextToken?: String;
  }
  export interface GetResourceSharesRequest {
    /**
     * The Amazon Resource Names (ARN) of the resource shares.
     */
    resourceShareArns?: ResourceShareArnList;
    /**
     * The status of the resource share.
     */
    resourceShareStatus?: ResourceShareStatus;
    /**
     * The type of owner.
     */
    resourceOwner: ResourceOwner;
    /**
     * The name of the resource share.
     */
    name?: String;
    /**
     * One or more tag filters.
     */
    tagFilters?: TagFilters;
    /**
     * The token for the next page of results.
     */
    nextToken?: String;
    /**
     * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.
     */
    maxResults?: MaxResults;
  }
  export interface GetResourceSharesResponse {
    /**
     * Information about the resource shares.
     */
    resourceShares?: ResourceShareList;
    /**
     * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
     */
    nextToken?: String;
  }
  export interface ListPrincipalsRequest {
    /**
     * The type of owner.
     */
    resourceOwner: ResourceOwner;
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    resourceArn?: String;
    /**
     * The principals.
     */
    principals?: PrincipalArnOrIdList;
    /**
     * The resource type.
     */
    resourceType?: String;
    /**
     * The Amazon Resource Names (ARN) of the resource shares.
     */
    resourceShareArns?: ResourceShareArnList;
    /**
     * The token for the next page of results.
     */
    nextToken?: String;
    /**
     * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.
     */
    maxResults?: MaxResults;
  }
  export interface ListPrincipalsResponse {
    /**
     * The principals.
     */
    principals?: PrincipalList;
    /**
     * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
     */
    nextToken?: String;
  }
  export interface ListResourcesRequest {
    /**
     * The type of owner.
     */
    resourceOwner: ResourceOwner;
    /**
     * The principal.
     */
    principal?: String;
    /**
     * The resource type.
     */
    resourceType?: String;
    /**
     * The Amazon Resource Names (ARN) of the resources.
     */
    resourceArns?: ResourceArnList;
    /**
     * The Amazon Resource Names (ARN) of the resource shares.
     */
    resourceShareArns?: ResourceShareArnList;
    /**
     * The token for the next page of results.
     */
    nextToken?: String;
    /**
     * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.
     */
    maxResults?: MaxResults;
  }
  export interface ListResourcesResponse {
    /**
     * Information about the resources.
     */
    resources?: ResourceList;
    /**
     * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
     */
    nextToken?: String;
  }
  export type MaxResults = number;
  export type Policy = string;
  export type PolicyList = Policy[];
  export interface Principal {
    /**
     * The ID of the principal.
     */
    id?: String;
    /**
     * The Amazon Resource Name (ARN) of the resource share.
     */
    resourceShareArn?: String;
    /**
     * The time when the principal was associated with the resource share.
     */
    creationTime?: DateTime;
    /**
     * The time when the association was last updated.
     */
    lastUpdatedTime?: DateTime;
    /**
     * Indicates whether the principal belongs to the same organization as the AWS account that owns the resource share.
     */
    external?: Boolean;
  }
  export type PrincipalArnOrIdList = String[];
  export type PrincipalList = Principal[];
  export interface RejectResourceShareInvitationRequest {
    /**
     * The Amazon Resource Name (ARN) of the invitation.
     */
    resourceShareInvitationArn: String;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientToken?: String;
  }
  export interface RejectResourceShareInvitationResponse {
    /**
     * Information about the invitation.
     */
    resourceShareInvitation?: ResourceShareInvitation;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientToken?: String;
  }
  export interface Resource {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    arn?: String;
    /**
     * The resource type.
     */
    type?: String;
    /**
     * The Amazon Resource Name (ARN) of the resource share.
     */
    resourceShareArn?: String;
    /**
     * The status of the resource.
     */
    status?: ResourceStatus;
    /**
     * A message about the status of the resource.
     */
    statusMessage?: String;
    /**
     * The time when the resource was associated with the resource share.
     */
    creationTime?: DateTime;
    /**
     * The time when the association was last updated.
     */
    lastUpdatedTime?: DateTime;
  }
  export type ResourceArnList = String[];
  export type ResourceList = Resource[];
  export type ResourceOwner = "SELF"|"OTHER-ACCOUNTS"|string;
  export interface ResourceShare {
    /**
     * The Amazon Resource Name (ARN) of the resource share.
     */
    resourceShareArn?: String;
    /**
     * The name of the resource share.
     */
    name?: String;
    /**
     * The ID of the AWS account that owns the resource share.
     */
    owningAccountId?: String;
    /**
     * Indicates whether principals outside your organization can be associated with a resource share.
     */
    allowExternalPrincipals?: Boolean;
    /**
     * The status of the resource share.
     */
    status?: ResourceShareStatus;
    /**
     * A message about the status of the resource share.
     */
    statusMessage?: String;
    /**
     * The tags for the resource share.
     */
    tags?: TagList;
    /**
     * The time when the resource share was created.
     */
    creationTime?: DateTime;
    /**
     * The time when the resource share was last updated.
     */
    lastUpdatedTime?: DateTime;
  }
  export type ResourceShareArnList = String[];
  export interface ResourceShareAssociation {
    /**
     * The Amazon Resource Name (ARN) of the resource share.
     */
    resourceShareArn?: String;
    /**
     * The associated entity. For resource associations, this is the ARN of the resource. For principal associations, this is the ID of an AWS account or the ARN of an OU or organization from AWS Organizations.
     */
    associatedEntity?: String;
    /**
     * The association type.
     */
    associationType?: ResourceShareAssociationType;
    /**
     * The status of the association.
     */
    status?: ResourceShareAssociationStatus;
    /**
     * A message about the status of the association.
     */
    statusMessage?: String;
    /**
     * The time when the association was created.
     */
    creationTime?: DateTime;
    /**
     * The time when the association was last updated.
     */
    lastUpdatedTime?: DateTime;
    /**
     * Indicates whether the principal belongs to the same organization as the AWS account that owns the resource share.
     */
    external?: Boolean;
  }
  export type ResourceShareAssociationList = ResourceShareAssociation[];
  export type ResourceShareAssociationStatus = "ASSOCIATING"|"ASSOCIATED"|"FAILED"|"DISASSOCIATING"|"DISASSOCIATED"|string;
  export type ResourceShareAssociationType = "PRINCIPAL"|"RESOURCE"|string;
  export interface ResourceShareInvitation {
    /**
     * The Amazon Resource Name (ARN) of the invitation.
     */
    resourceShareInvitationArn?: String;
    /**
     * The name of the resource share.
     */
    resourceShareName?: String;
    /**
     * The Amazon Resource Name (ARN) of the resource share.
     */
    resourceShareArn?: String;
    /**
     * The ID of the AWS account that sent the invitation.
     */
    senderAccountId?: String;
    /**
     * The ID of the AWS account that received the invitation.
     */
    receiverAccountId?: String;
    /**
     * The date and time when the invitation was sent.
     */
    invitationTimestamp?: DateTime;
    /**
     * The status of the invitation.
     */
    status?: ResourceShareInvitationStatus;
    /**
     * The resources associated with the resource share.
     */
    resourceShareAssociations?: ResourceShareAssociationList;
  }
  export type ResourceShareInvitationArnList = String[];
  export type ResourceShareInvitationList = ResourceShareInvitation[];
  export type ResourceShareInvitationStatus = "PENDING"|"ACCEPTED"|"REJECTED"|"EXPIRED"|string;
  export type ResourceShareList = ResourceShare[];
  export type ResourceShareStatus = "PENDING"|"ACTIVE"|"FAILED"|"DELETING"|"DELETED"|string;
  export type ResourceStatus = "AVAILABLE"|"ZONAL_RESOURCE_INACCESSIBLE"|"LIMIT_EXCEEDED"|"UNAVAILABLE"|string;
  export type String = string;
  export interface Tag {
    /**
     * The key of the tag.
     */
    key?: TagKey;
    /**
     * The value of the tag.
     */
    value?: TagValue;
  }
  export interface TagFilter {
    /**
     * The tag key.
     */
    tagKey?: TagKey;
    /**
     * The tag values.
     */
    tagValues?: TagValueList;
  }
  export type TagFilters = TagFilter[];
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource share.
     */
    resourceShareArn: String;
    /**
     * One or more tags.
     */
    tags: TagList;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type TagValueList = TagValue[];
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource share.
     */
    resourceShareArn: String;
    /**
     * The tag keys of the tags to remove.
     */
    tagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateResourceShareRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource share.
     */
    resourceShareArn: String;
    /**
     * The name of the resource share.
     */
    name?: String;
    /**
     * Indicates whether principals outside your organization can be associated with a resource share.
     */
    allowExternalPrincipals?: Boolean;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientToken?: String;
  }
  export interface UpdateResourceShareResponse {
    /**
     * Information about the resource share.
     */
    resourceShare?: ResourceShare;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientToken?: String;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-01-04"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the RAM client.
   */
  export import Types = RAM;
}
export = RAM;
