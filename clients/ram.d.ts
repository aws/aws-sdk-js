import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class RAM extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: RAM.Types.ClientConfiguration)
  config: Config & RAM.Types.ClientConfiguration;
  /**
   * Accepts an invitation to a resource share from another Amazon Web Services account. After you accept the invitation, the resources included in the resource share are available to interact with in the relevant Amazon Web Services Management Consoles and tools.
   */
  acceptResourceShareInvitation(params: RAM.Types.AcceptResourceShareInvitationRequest, callback?: (err: AWSError, data: RAM.Types.AcceptResourceShareInvitationResponse) => void): Request<RAM.Types.AcceptResourceShareInvitationResponse, AWSError>;
  /**
   * Accepts an invitation to a resource share from another Amazon Web Services account. After you accept the invitation, the resources included in the resource share are available to interact with in the relevant Amazon Web Services Management Consoles and tools.
   */
  acceptResourceShareInvitation(callback?: (err: AWSError, data: RAM.Types.AcceptResourceShareInvitationResponse) => void): Request<RAM.Types.AcceptResourceShareInvitationResponse, AWSError>;
  /**
   * Adds the specified list of principals and list of resources to a resource share. Principals that already have access to this resource share immediately receive access to the added resources. Newly added principals immediately receive access to the resources shared in this resource share. 
   */
  associateResourceShare(params: RAM.Types.AssociateResourceShareRequest, callback?: (err: AWSError, data: RAM.Types.AssociateResourceShareResponse) => void): Request<RAM.Types.AssociateResourceShareResponse, AWSError>;
  /**
   * Adds the specified list of principals and list of resources to a resource share. Principals that already have access to this resource share immediately receive access to the added resources. Newly added principals immediately receive access to the resources shared in this resource share. 
   */
  associateResourceShare(callback?: (err: AWSError, data: RAM.Types.AssociateResourceShareResponse) => void): Request<RAM.Types.AssociateResourceShareResponse, AWSError>;
  /**
   * Adds or replaces the RAM permission for a resource type included in a resource share. You can have exactly one permission associated with each resource type in the resource share. You can add a new RAM permission only if there are currently no resources of that resource type currently in the resource share.
   */
  associateResourceSharePermission(params: RAM.Types.AssociateResourceSharePermissionRequest, callback?: (err: AWSError, data: RAM.Types.AssociateResourceSharePermissionResponse) => void): Request<RAM.Types.AssociateResourceSharePermissionResponse, AWSError>;
  /**
   * Adds or replaces the RAM permission for a resource type included in a resource share. You can have exactly one permission associated with each resource type in the resource share. You can add a new RAM permission only if there are currently no resources of that resource type currently in the resource share.
   */
  associateResourceSharePermission(callback?: (err: AWSError, data: RAM.Types.AssociateResourceSharePermissionResponse) => void): Request<RAM.Types.AssociateResourceSharePermissionResponse, AWSError>;
  /**
   * Creates a resource share. You can provide a list of the Amazon Resource Names (ARNs) for the resources that you want to share, a list of principals you want to share the resources with, and the permissions to grant those principals.  Sharing a resource makes it available for use by principals outside of the Amazon Web Services account that created the resource. Sharing doesn't change any permissions or quotas that apply to the resource in the account that created it. 
   */
  createResourceShare(params: RAM.Types.CreateResourceShareRequest, callback?: (err: AWSError, data: RAM.Types.CreateResourceShareResponse) => void): Request<RAM.Types.CreateResourceShareResponse, AWSError>;
  /**
   * Creates a resource share. You can provide a list of the Amazon Resource Names (ARNs) for the resources that you want to share, a list of principals you want to share the resources with, and the permissions to grant those principals.  Sharing a resource makes it available for use by principals outside of the Amazon Web Services account that created the resource. Sharing doesn't change any permissions or quotas that apply to the resource in the account that created it. 
   */
  createResourceShare(callback?: (err: AWSError, data: RAM.Types.CreateResourceShareResponse) => void): Request<RAM.Types.CreateResourceShareResponse, AWSError>;
  /**
   * Deletes the specified resource share. This doesn't delete any of the resources that were associated with the resource share; it only stops the sharing of those resources outside of the Amazon Web Services account that created them.
   */
  deleteResourceShare(params: RAM.Types.DeleteResourceShareRequest, callback?: (err: AWSError, data: RAM.Types.DeleteResourceShareResponse) => void): Request<RAM.Types.DeleteResourceShareResponse, AWSError>;
  /**
   * Deletes the specified resource share. This doesn't delete any of the resources that were associated with the resource share; it only stops the sharing of those resources outside of the Amazon Web Services account that created them.
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
   * Disassociates an RAM permission from a resource share. Permission changes take effect immediately. You can remove a RAM permission from a resource share only if there are currently no resources of the relevant resource type currently attached to the resource share.
   */
  disassociateResourceSharePermission(params: RAM.Types.DisassociateResourceSharePermissionRequest, callback?: (err: AWSError, data: RAM.Types.DisassociateResourceSharePermissionResponse) => void): Request<RAM.Types.DisassociateResourceSharePermissionResponse, AWSError>;
  /**
   * Disassociates an RAM permission from a resource share. Permission changes take effect immediately. You can remove a RAM permission from a resource share only if there are currently no resources of the relevant resource type currently attached to the resource share.
   */
  disassociateResourceSharePermission(callback?: (err: AWSError, data: RAM.Types.DisassociateResourceSharePermissionResponse) => void): Request<RAM.Types.DisassociateResourceSharePermissionResponse, AWSError>;
  /**
   * Enables resource sharing within your organization in Organizations. Calling this operation enables RAM to retrieve information about the organization and its structure. This lets you share resources with all of the accounts in an organization by specifying the organization's ID, or all of the accounts in an organizational unit (OU) by specifying the OU's ID. Until you enable sharing within the organization, you can specify only individual Amazon Web Services accounts, or for supported resource types, IAM users and roles. You must call this operation from an IAM user or role in the organization's management account.
   */
  enableSharingWithAwsOrganization(params: RAM.Types.EnableSharingWithAwsOrganizationRequest, callback?: (err: AWSError, data: RAM.Types.EnableSharingWithAwsOrganizationResponse) => void): Request<RAM.Types.EnableSharingWithAwsOrganizationResponse, AWSError>;
  /**
   * Enables resource sharing within your organization in Organizations. Calling this operation enables RAM to retrieve information about the organization and its structure. This lets you share resources with all of the accounts in an organization by specifying the organization's ID, or all of the accounts in an organizational unit (OU) by specifying the OU's ID. Until you enable sharing within the organization, you can specify only individual Amazon Web Services accounts, or for supported resource types, IAM users and roles. You must call this operation from an IAM user or role in the organization's management account.
   */
  enableSharingWithAwsOrganization(callback?: (err: AWSError, data: RAM.Types.EnableSharingWithAwsOrganizationResponse) => void): Request<RAM.Types.EnableSharingWithAwsOrganizationResponse, AWSError>;
  /**
   * Gets the contents of an RAM permission in JSON format.
   */
  getPermission(params: RAM.Types.GetPermissionRequest, callback?: (err: AWSError, data: RAM.Types.GetPermissionResponse) => void): Request<RAM.Types.GetPermissionResponse, AWSError>;
  /**
   * Gets the contents of an RAM permission in JSON format.
   */
  getPermission(callback?: (err: AWSError, data: RAM.Types.GetPermissionResponse) => void): Request<RAM.Types.GetPermissionResponse, AWSError>;
  /**
   * Retrieves the resource policies for the specified resources that you own and have shared.
   */
  getResourcePolicies(params: RAM.Types.GetResourcePoliciesRequest, callback?: (err: AWSError, data: RAM.Types.GetResourcePoliciesResponse) => void): Request<RAM.Types.GetResourcePoliciesResponse, AWSError>;
  /**
   * Retrieves the resource policies for the specified resources that you own and have shared.
   */
  getResourcePolicies(callback?: (err: AWSError, data: RAM.Types.GetResourcePoliciesResponse) => void): Request<RAM.Types.GetResourcePoliciesResponse, AWSError>;
  /**
   * Retrieves the resource and principal associations for resource shares that you own.
   */
  getResourceShareAssociations(params: RAM.Types.GetResourceShareAssociationsRequest, callback?: (err: AWSError, data: RAM.Types.GetResourceShareAssociationsResponse) => void): Request<RAM.Types.GetResourceShareAssociationsResponse, AWSError>;
  /**
   * Retrieves the resource and principal associations for resource shares that you own.
   */
  getResourceShareAssociations(callback?: (err: AWSError, data: RAM.Types.GetResourceShareAssociationsResponse) => void): Request<RAM.Types.GetResourceShareAssociationsResponse, AWSError>;
  /**
   * Retrieves details about invitations that you have received for resource shares.
   */
  getResourceShareInvitations(params: RAM.Types.GetResourceShareInvitationsRequest, callback?: (err: AWSError, data: RAM.Types.GetResourceShareInvitationsResponse) => void): Request<RAM.Types.GetResourceShareInvitationsResponse, AWSError>;
  /**
   * Retrieves details about invitations that you have received for resource shares.
   */
  getResourceShareInvitations(callback?: (err: AWSError, data: RAM.Types.GetResourceShareInvitationsResponse) => void): Request<RAM.Types.GetResourceShareInvitationsResponse, AWSError>;
  /**
   * Retrieves details about the resource shares that you own or that are shared with you.
   */
  getResourceShares(params: RAM.Types.GetResourceSharesRequest, callback?: (err: AWSError, data: RAM.Types.GetResourceSharesResponse) => void): Request<RAM.Types.GetResourceSharesResponse, AWSError>;
  /**
   * Retrieves details about the resource shares that you own or that are shared with you.
   */
  getResourceShares(callback?: (err: AWSError, data: RAM.Types.GetResourceSharesResponse) => void): Request<RAM.Types.GetResourceSharesResponse, AWSError>;
  /**
   * Lists the resources in a resource share that is shared with you but for which the invitation is still PENDING. That means that you haven't accepted or rejected the invitation and the invitation hasn't expired.
   */
  listPendingInvitationResources(params: RAM.Types.ListPendingInvitationResourcesRequest, callback?: (err: AWSError, data: RAM.Types.ListPendingInvitationResourcesResponse) => void): Request<RAM.Types.ListPendingInvitationResourcesResponse, AWSError>;
  /**
   * Lists the resources in a resource share that is shared with you but for which the invitation is still PENDING. That means that you haven't accepted or rejected the invitation and the invitation hasn't expired.
   */
  listPendingInvitationResources(callback?: (err: AWSError, data: RAM.Types.ListPendingInvitationResourcesResponse) => void): Request<RAM.Types.ListPendingInvitationResourcesResponse, AWSError>;
  /**
   * Lists the available versions of the specified RAM permission.
   */
  listPermissionVersions(params: RAM.Types.ListPermissionVersionsRequest, callback?: (err: AWSError, data: RAM.Types.ListPermissionVersionsResponse) => void): Request<RAM.Types.ListPermissionVersionsResponse, AWSError>;
  /**
   * Lists the available versions of the specified RAM permission.
   */
  listPermissionVersions(callback?: (err: AWSError, data: RAM.Types.ListPermissionVersionsResponse) => void): Request<RAM.Types.ListPermissionVersionsResponse, AWSError>;
  /**
   * Retrieves a list of available RAM permissions that you can use for the supported resource types. 
   */
  listPermissions(params: RAM.Types.ListPermissionsRequest, callback?: (err: AWSError, data: RAM.Types.ListPermissionsResponse) => void): Request<RAM.Types.ListPermissionsResponse, AWSError>;
  /**
   * Retrieves a list of available RAM permissions that you can use for the supported resource types. 
   */
  listPermissions(callback?: (err: AWSError, data: RAM.Types.ListPermissionsResponse) => void): Request<RAM.Types.ListPermissionsResponse, AWSError>;
  /**
   * Lists the principals that you are sharing resources with or that are sharing resources with you.
   */
  listPrincipals(params: RAM.Types.ListPrincipalsRequest, callback?: (err: AWSError, data: RAM.Types.ListPrincipalsResponse) => void): Request<RAM.Types.ListPrincipalsResponse, AWSError>;
  /**
   * Lists the principals that you are sharing resources with or that are sharing resources with you.
   */
  listPrincipals(callback?: (err: AWSError, data: RAM.Types.ListPrincipalsResponse) => void): Request<RAM.Types.ListPrincipalsResponse, AWSError>;
  /**
   * Lists the RAM permissions that are associated with a resource share.
   */
  listResourceSharePermissions(params: RAM.Types.ListResourceSharePermissionsRequest, callback?: (err: AWSError, data: RAM.Types.ListResourceSharePermissionsResponse) => void): Request<RAM.Types.ListResourceSharePermissionsResponse, AWSError>;
  /**
   * Lists the RAM permissions that are associated with a resource share.
   */
  listResourceSharePermissions(callback?: (err: AWSError, data: RAM.Types.ListResourceSharePermissionsResponse) => void): Request<RAM.Types.ListResourceSharePermissionsResponse, AWSError>;
  /**
   * Lists the resource types that can be shared by RAM.
   */
  listResourceTypes(params: RAM.Types.ListResourceTypesRequest, callback?: (err: AWSError, data: RAM.Types.ListResourceTypesResponse) => void): Request<RAM.Types.ListResourceTypesResponse, AWSError>;
  /**
   * Lists the resource types that can be shared by RAM.
   */
  listResourceTypes(callback?: (err: AWSError, data: RAM.Types.ListResourceTypesResponse) => void): Request<RAM.Types.ListResourceTypesResponse, AWSError>;
  /**
   * Lists the resources that you added to a resource share or the resources that are shared with you.
   */
  listResources(params: RAM.Types.ListResourcesRequest, callback?: (err: AWSError, data: RAM.Types.ListResourcesResponse) => void): Request<RAM.Types.ListResourcesResponse, AWSError>;
  /**
   * Lists the resources that you added to a resource share or the resources that are shared with you.
   */
  listResources(callback?: (err: AWSError, data: RAM.Types.ListResourcesResponse) => void): Request<RAM.Types.ListResourcesResponse, AWSError>;
  /**
   * When you attach a resource-based permission policy to a resource, it automatically creates a resource share. However, resource shares created this way are visible only to the resource share owner, and the resource share can't be modified in RAM. You can use this operation to promote the resource share to a full RAM resource share. When you promote a resource share, you can then manage the resource share in RAM and it becomes visible to all of the principals you shared it with.
   */
  promoteResourceShareCreatedFromPolicy(params: RAM.Types.PromoteResourceShareCreatedFromPolicyRequest, callback?: (err: AWSError, data: RAM.Types.PromoteResourceShareCreatedFromPolicyResponse) => void): Request<RAM.Types.PromoteResourceShareCreatedFromPolicyResponse, AWSError>;
  /**
   * When you attach a resource-based permission policy to a resource, it automatically creates a resource share. However, resource shares created this way are visible only to the resource share owner, and the resource share can't be modified in RAM. You can use this operation to promote the resource share to a full RAM resource share. When you promote a resource share, you can then manage the resource share in RAM and it becomes visible to all of the principals you shared it with.
   */
  promoteResourceShareCreatedFromPolicy(callback?: (err: AWSError, data: RAM.Types.PromoteResourceShareCreatedFromPolicyResponse) => void): Request<RAM.Types.PromoteResourceShareCreatedFromPolicyResponse, AWSError>;
  /**
   * Rejects an invitation to a resource share from another Amazon Web Services account.
   */
  rejectResourceShareInvitation(params: RAM.Types.RejectResourceShareInvitationRequest, callback?: (err: AWSError, data: RAM.Types.RejectResourceShareInvitationResponse) => void): Request<RAM.Types.RejectResourceShareInvitationResponse, AWSError>;
  /**
   * Rejects an invitation to a resource share from another Amazon Web Services account.
   */
  rejectResourceShareInvitation(callback?: (err: AWSError, data: RAM.Types.RejectResourceShareInvitationResponse) => void): Request<RAM.Types.RejectResourceShareInvitationResponse, AWSError>;
  /**
   * Adds the specified tag keys and values to the specified resource share. The tags are attached only to the resource share, not to the resources that are in the resource share.
   */
  tagResource(params: RAM.Types.TagResourceRequest, callback?: (err: AWSError, data: RAM.Types.TagResourceResponse) => void): Request<RAM.Types.TagResourceResponse, AWSError>;
  /**
   * Adds the specified tag keys and values to the specified resource share. The tags are attached only to the resource share, not to the resources that are in the resource share.
   */
  tagResource(callback?: (err: AWSError, data: RAM.Types.TagResourceResponse) => void): Request<RAM.Types.TagResourceResponse, AWSError>;
  /**
   * Removes the specified tag key and value pairs from the specified resource share.
   */
  untagResource(params: RAM.Types.UntagResourceRequest, callback?: (err: AWSError, data: RAM.Types.UntagResourceResponse) => void): Request<RAM.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes the specified tag key and value pairs from the specified resource share.
   */
  untagResource(callback?: (err: AWSError, data: RAM.Types.UntagResourceResponse) => void): Request<RAM.Types.UntagResourceResponse, AWSError>;
  /**
   * Modifies some of the properties of the specified resource share.
   */
  updateResourceShare(params: RAM.Types.UpdateResourceShareRequest, callback?: (err: AWSError, data: RAM.Types.UpdateResourceShareResponse) => void): Request<RAM.Types.UpdateResourceShareResponse, AWSError>;
  /**
   * Modifies some of the properties of the specified resource share.
   */
  updateResourceShare(callback?: (err: AWSError, data: RAM.Types.UpdateResourceShareResponse) => void): Request<RAM.Types.UpdateResourceShareResponse, AWSError>;
}
declare namespace RAM {
  export interface AcceptResourceShareInvitationRequest {
    /**
     * The Amazon Resoure Name (ARN) of the invitation that you want to accept.
     */
    resourceShareInvitationArn: String;
    /**
     * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value.. If you don't provide this value, then Amazon Web Services generates a random one for you.
     */
    clientToken?: String;
  }
  export interface AcceptResourceShareInvitationResponse {
    /**
     * An object that contains information about the specified invitation.
     */
    resourceShareInvitation?: ResourceShareInvitation;
    /**
     * The idempotency identifier associated with this request. If you want to repeat the same operation in an idempotent manner then you must include this value in the clientToken request parameter of that later call. All other parameters must also have the same values that you used in the first call.
     */
    clientToken?: String;
  }
  export interface AssociateResourceSharePermissionRequest {
    /**
     * Specifies the Amazon Resoure Name (ARN) of the resource share to which you want to add or replace permissions.
     */
    resourceShareArn: String;
    /**
     * Specifies the Amazon Resoure Name (ARN) of the RAM permission to associate with the resource share. To find the ARN for a permission, use either the ListPermissions operation or go to the Permissions library page in the RAM console and then choose the name of the permission. The ARN is displayed on the detail page.
     */
    permissionArn: String;
    /**
     * Specifies whether the specified permission should replace or add to the existing permission associated with the resource share. Use true to replace the current permissions. Use false to add the permission to the current permission. The default value is false.  A resource share can have only one permission per resource type. If a resource share already has a permission for the specified resource type and you don't set replace to true then the operation returns an error. This helps prevent accidental overwriting of a permission. 
     */
    replace?: Boolean;
    /**
     * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value.. If you don't provide this value, then Amazon Web Services generates a random one for you.
     */
    clientToken?: String;
    /**
     * Specifies the version of the RAM permission to associate with the resource share. If you don't specify this parameter, the operation uses the version designated as the default. You can use the ListPermissionVersions operation to discover the available versions of a permission.
     */
    permissionVersion?: Integer;
  }
  export interface AssociateResourceSharePermissionResponse {
    /**
     * A return value of true indicates that the request succeeded. A value of false indicates that the request failed.
     */
    returnValue?: Boolean;
    /**
     * The idempotency identifier associated with this request. If you want to repeat the same operation in an idempotent manner then you must include this value in the clientToken request parameter of that later call. All other parameters must also have the same values that you used in the first call.
     */
    clientToken?: String;
  }
  export interface AssociateResourceShareRequest {
    /**
     * Specifies the Amazon Resoure Name (ARN) of the resource share that you want to add principals or resources to.
     */
    resourceShareArn: String;
    /**
     * Specifies a list of Amazon Resource Names (ARNs) of the resources that you want to share. This can be null if you want to add only principals.
     */
    resourceArns?: ResourceArnList;
    /**
     * Specifies a list of principals to whom you want to the resource share. This can be null if you want to add only resources. What the principals can do with the resources in the share is determined by the RAM permissions that you associate with the resource share. See AssociateResourceSharePermission. You can include the following values:   An Amazon Web Services account ID, for example: 123456789012    An Amazon Resoure Name (ARN) of an organization in Organizations, for example: organizations::123456789012:organization/o-exampleorgid    An ARN of an organizational unit (OU) in Organizations, for example: organizations::123456789012:ou/o-exampleorgid/ou-examplerootid-exampleouid123    An ARN of an IAM role, for example: iam::123456789012:role/rolename    An ARN of an IAM user, for example: iam::123456789012user/username     Not all resource types can be shared with IAM roles and users. For more information, see Sharing with IAM roles and users in the Resource Access Manager User Guide. 
     */
    principals?: PrincipalArnOrIdList;
    /**
     * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value.. If you don't provide this value, then Amazon Web Services generates a random one for you.
     */
    clientToken?: String;
  }
  export interface AssociateResourceShareResponse {
    /**
     * An array of objects that contain information about the associations.
     */
    resourceShareAssociations?: ResourceShareAssociationList;
    /**
     * The idempotency identifier associated with this request. If you want to repeat the same operation in an idempotent manner then you must include this value in the clientToken request parameter of that later call. All other parameters must also have the same values that you used in the first call.
     */
    clientToken?: String;
  }
  export type Boolean = boolean;
  export interface CreateResourceShareRequest {
    /**
     * Specifies the name of the resource share.
     */
    name: String;
    /**
     * Specifies a list of one or more ARNs of the resources to associate with the resource share.
     */
    resourceArns?: ResourceArnList;
    /**
     * Specifies a list of one or more principals to associate with the resource share. You can include the following values:   An Amazon Web Services account ID, for example: 123456789012    An Amazon Resoure Name (ARN) of an organization in Organizations, for example: organizations::123456789012:organization/o-exampleorgid    An ARN of an organizational unit (OU) in Organizations, for example: organizations::123456789012:ou/o-exampleorgid/ou-examplerootid-exampleouid123    An ARN of an IAM role, for example: iam::123456789012:role/rolename    An ARN of an IAM user, for example: iam::123456789012user/username     Not all resource types can be shared with IAM roles and users. For more information, see Sharing with IAM roles and users in the Resource Access Manager User Guide. 
     */
    principals?: PrincipalArnOrIdList;
    /**
     * Specifies one or more tags to attach to the resource share itself. It doesn't attach the tags to the resources associated with the resource share.
     */
    tags?: TagList;
    /**
     * Specifies whether principals outside your organization in Organizations can be associated with a resource share. A value of true lets you share with individual Amazon Web Services accounts that are not in your organization. A value of false only has meaning if your account is a member of an Amazon Web Services Organization. The default value is true.
     */
    allowExternalPrincipals?: Boolean;
    /**
     * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value.. If you don't provide this value, then Amazon Web Services generates a random one for you.
     */
    clientToken?: String;
    /**
     * Specifies the Amazon Resource Names (ARNs) of the RAM permission to associate with the resource share. If you do not specify an ARN for the permission, RAM automatically attaches the default version of the permission for each resource type. You can associate only one permission with each resource type included in the resource share.
     */
    permissionArns?: PermissionArnList;
  }
  export interface CreateResourceShareResponse {
    /**
     * An object with information about the new resource share.
     */
    resourceShare?: ResourceShare;
    /**
     * The idempotency identifier associated with this request. If you want to repeat the same operation in an idempotent manner then you must include this value in the clientToken request parameter of that later call. All other parameters must also have the same values that you used in the first call.
     */
    clientToken?: String;
  }
  export type DateTime = Date;
  export interface DeleteResourceShareRequest {
    /**
     * Specifies the Amazon Resoure Name (ARN) of the resource share to delete.
     */
    resourceShareArn: String;
    /**
     * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value.. If you don't provide this value, then Amazon Web Services generates a random one for you.
     */
    clientToken?: String;
  }
  export interface DeleteResourceShareResponse {
    /**
     * A return value of true indicates that the request succeeded. A value of false indicates that the request failed.
     */
    returnValue?: Boolean;
    /**
     * The idempotency identifier associated with this request. If you want to repeat the same operation in an idempotent manner then you must include this value in the clientToken request parameter of that later call. All other parameters must also have the same values that you used in the first call.
     */
    clientToken?: String;
  }
  export interface DisassociateResourceSharePermissionRequest {
    /**
     * The Amazon Resoure Name (ARN) of the resource share from which you want to disassociate a permission.
     */
    resourceShareArn: String;
    /**
     * The Amazon Resoure Name (ARN) of the permission to disassociate from the resource share. Changes to permissions take effect immediately.
     */
    permissionArn: String;
    /**
     * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value.. If you don't provide this value, then Amazon Web Services generates a random one for you.
     */
    clientToken?: String;
  }
  export interface DisassociateResourceSharePermissionResponse {
    /**
     * A return value of true indicates that the request succeeded. A value of false indicates that the request failed.
     */
    returnValue?: Boolean;
    /**
     * The idempotency identifier associated with this request. If you want to repeat the same operation in an idempotent manner then you must include this value in the clientToken request parameter of that later call. All other parameters must also have the same values that you used in the first call.
     */
    clientToken?: String;
  }
  export interface DisassociateResourceShareRequest {
    /**
     * Specifies Amazon Resoure Name (ARN) of the resource share that you want to remove resources from.
     */
    resourceShareArn: String;
    /**
     * Specifies a list of Amazon Resource Names (ARNs) for one or more resources that you want to remove from the resource share. After the operation runs, these resources are no longer shared with principals outside of the Amazon Web Services account that created the resources.
     */
    resourceArns?: ResourceArnList;
    /**
     * Specifies a list of one or more principals that no longer are to have access to the resources in this resource share. You can include the following values:   An Amazon Web Services account ID, for example: 123456789012    An Amazon Resoure Name (ARN) of an organization in Organizations, for example: organizations::123456789012:organization/o-exampleorgid    An ARN of an organizational unit (OU) in Organizations, for example: organizations::123456789012:ou/o-exampleorgid/ou-examplerootid-exampleouid123    An ARN of an IAM role, for example: iam::123456789012:role/rolename    An ARN of an IAM user, for example: iam::123456789012user/username     Not all resource types can be shared with IAM roles and users. For more information, see Sharing with IAM roles and users in the Resource Access Manager User Guide. 
     */
    principals?: PrincipalArnOrIdList;
    /**
     * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value.. If you don't provide this value, then Amazon Web Services generates a random one for you.
     */
    clientToken?: String;
  }
  export interface DisassociateResourceShareResponse {
    /**
     * An array of objects that contain information about the updated associations for this resource share.
     */
    resourceShareAssociations?: ResourceShareAssociationList;
    /**
     * The idempotency identifier associated with this request. If you want to repeat the same operation in an idempotent manner then you must include this value in the clientToken request parameter of that later call. All other parameters must also have the same values that you used in the first call.
     */
    clientToken?: String;
  }
  export interface EnableSharingWithAwsOrganizationRequest {
  }
  export interface EnableSharingWithAwsOrganizationResponse {
    /**
     * A return value of true indicates that the request succeeded. A value of false indicates that the request failed.
     */
    returnValue?: Boolean;
  }
  export interface GetPermissionRequest {
    /**
     * Specifies the Amazon Resoure Name (ARN) of the permission whose contents you want to retrieve. To find the ARN for a permission, use either the ListPermissions operation or go to the Permissions library page in the RAM console and then choose the name of the permission. The ARN is displayed on the detail page.
     */
    permissionArn: String;
    /**
     * Specifies identifier for the version of the RAM permission to retrieve. If you don't specify this parameter, the operation retrieves the default version.
     */
    permissionVersion?: Integer;
  }
  export interface GetPermissionResponse {
    /**
     * An object that contains information about the permission.
     */
    permission?: ResourceSharePermissionDetail;
  }
  export interface GetResourcePoliciesRequest {
    /**
     * Specifies the Amazon Resource Names (ARNs) of the resources whose policies you want to retrieve.
     */
    resourceArns: ResourceArnList;
    /**
     * Specifies the principal.
     */
    principal?: String;
    /**
     * Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results.
     */
    nextToken?: String;
    /**
     * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the NextToken response element is returned with a value (not null). Include the specified value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results.
     */
    maxResults?: MaxResults;
  }
  export interface GetResourcePoliciesResponse {
    /**
     * An array of resource policy documents in JSON format.
     */
    policies?: PolicyList;
    /**
     * If present, this value indicates that more output is available than is included in the current response. Use this value in the NextToken request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the NextToken response element comes back as null. This indicates that this is the last page of results.
     */
    nextToken?: String;
  }
  export interface GetResourceShareAssociationsRequest {
    /**
     * Specifies whether you want to retrieve the associations that involve a specified resource or principal.    PRINCIPAL – list the principals that are associated with the specified resource share.    RESOURCE – list the resources that are associated with the specified resource share.  
     */
    associationType: ResourceShareAssociationType;
    /**
     * Specifies a list of Amazon Resource Names (ARNs) of the resource share whose associations you want to retrieve.
     */
    resourceShareArns?: ResourceShareArnList;
    /**
     * Specifies the Amazon Resoure Name (ARN) of the resource whose resource shares you want to retrieve. You cannot specify this parameter if the association type is PRINCIPAL.
     */
    resourceArn?: String;
    /**
     * Specifies the ID of the principal whose resource shares you want to retrieve. This can be an Amazon Web Services account ID, an organization ID, an organizational unit ID, or the Amazon Resoure Name (ARN) of an individual IAM user or role. You cannot specify this parameter if the association type is RESOURCE.
     */
    principal?: String;
    /**
     * Specifies that you want to retrieve only associations with this status.
     */
    associationStatus?: ResourceShareAssociationStatus;
    /**
     * Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results.
     */
    nextToken?: String;
    /**
     * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the NextToken response element is returned with a value (not null). Include the specified value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results.
     */
    maxResults?: MaxResults;
  }
  export interface GetResourceShareAssociationsResponse {
    /**
     * An array of objects that contain the details about the associations.
     */
    resourceShareAssociations?: ResourceShareAssociationList;
    /**
     * If present, this value indicates that more output is available than is included in the current response. Use this value in the NextToken request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the NextToken response element comes back as null. This indicates that this is the last page of results.
     */
    nextToken?: String;
  }
  export interface GetResourceShareInvitationsRequest {
    /**
     * Specifies the Amazon Resource Names (ARNs) of the resource share invitations you want information about.
     */
    resourceShareInvitationArns?: ResourceShareInvitationArnList;
    /**
     * Specifies that you want details about invitations only for the resource shares described by this list of Amazon Resource Names (ARNs) 
     */
    resourceShareArns?: ResourceShareArnList;
    /**
     * Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results.
     */
    nextToken?: String;
    /**
     * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the NextToken response element is returned with a value (not null). Include the specified value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results.
     */
    maxResults?: MaxResults;
  }
  export interface GetResourceShareInvitationsResponse {
    /**
     * An array of objects that contain the details about the invitations.
     */
    resourceShareInvitations?: ResourceShareInvitationList;
    /**
     * If present, this value indicates that more output is available than is included in the current response. Use this value in the NextToken request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the NextToken response element comes back as null. This indicates that this is the last page of results.
     */
    nextToken?: String;
  }
  export interface GetResourceSharesRequest {
    /**
     * Specifies the Amazon Resource Names (ARNs) of individual resource shares that you want information about.
     */
    resourceShareArns?: ResourceShareArnList;
    /**
     * Specifies that you want to retrieve details of only those resource shares that have this status.
     */
    resourceShareStatus?: ResourceShareStatus;
    /**
     * Specifies that you want to retrieve details of only those resource shares that match the following:     SELF  – resource shares that your account shares with other accounts     OTHER-ACCOUNTS  – resource shares that other accounts share with your account  
     */
    resourceOwner: ResourceOwner;
    /**
     * Specifies the name of an individual resource share that you want to retrieve details about.
     */
    name?: String;
    /**
     * Specifies that you want to retrieve details of only those resource shares that match the specified tag keys and values.
     */
    tagFilters?: TagFilters;
    /**
     * Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results.
     */
    nextToken?: String;
    /**
     * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the NextToken response element is returned with a value (not null). Include the specified value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results.
     */
    maxResults?: MaxResults;
    /**
     * Specifies that you want to retrieve details of only those resource shares that use the RAM permission with this Amazon Resoure Name (ARN).
     */
    permissionArn?: String;
  }
  export interface GetResourceSharesResponse {
    /**
     * An array of objects that contain the information about the resource shares.
     */
    resourceShares?: ResourceShareList;
    /**
     * If present, this value indicates that more output is available than is included in the current response. Use this value in the NextToken request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the NextToken response element comes back as null. This indicates that this is the last page of results.
     */
    nextToken?: String;
  }
  export type Integer = number;
  export interface ListPendingInvitationResourcesRequest {
    /**
     * Specifies the Amazon Resoure Name (ARN) of the invitation. You can use GetResourceShareInvitations to find the ARN of the invitation.
     */
    resourceShareInvitationArn: String;
    /**
     * Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results.
     */
    nextToken?: String;
    /**
     * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the NextToken response element is returned with a value (not null). Include the specified value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results.
     */
    maxResults?: MaxResults;
    /**
     * Specifies that you want the results to include only resources that have the specified scope.    ALL – the results include both global and regional resources or resource types.    GLOBAL – the results include only global resources or resource types.    REGIONAL – the results include only regional resources or resource types.   The default value is ALL.
     */
    resourceRegionScope?: ResourceRegionScopeFilter;
  }
  export interface ListPendingInvitationResourcesResponse {
    /**
     * An array of objects that contain the information about the resources included the specified resource share.
     */
    resources?: ResourceList;
    /**
     * If present, this value indicates that more output is available than is included in the current response. Use this value in the NextToken request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the NextToken response element comes back as null. This indicates that this is the last page of results.
     */
    nextToken?: String;
  }
  export interface ListPermissionVersionsRequest {
    /**
     * Specifies the Amazon Resoure Name (ARN) of the RAM permission whose versions you want to list. You can use the permissionVersion parameter on the AssociateResourceSharePermission operation to specify a non-default version to attach.
     */
    permissionArn: String;
    /**
     * Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results.
     */
    nextToken?: String;
    /**
     * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the NextToken response element is returned with a value (not null). Include the specified value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results.
     */
    maxResults?: MaxResults;
  }
  export interface ListPermissionVersionsResponse {
    /**
     * An array of objects that contain details for each of the available versions.
     */
    permissions?: ResourceSharePermissionList;
    /**
     * If present, this value indicates that more output is available than is included in the current response. Use this value in the NextToken request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the NextToken response element comes back as null. This indicates that this is the last page of results.
     */
    nextToken?: String;
  }
  export interface ListPermissionsRequest {
    /**
     * Specifies that you want to list permissions for only the specified resource type. For example, to list only permissions that apply to EC2 subnets, specify ec2:Subnet. You can use the ListResourceTypes operation to get the specific string required.
     */
    resourceType?: String;
    /**
     * Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results.
     */
    nextToken?: String;
    /**
     * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the NextToken response element is returned with a value (not null). Include the specified value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results.
     */
    maxResults?: MaxResults;
  }
  export interface ListPermissionsResponse {
    /**
     * An array of objects with information about the permissions.
     */
    permissions?: ResourceSharePermissionList;
    /**
     * If present, this value indicates that more output is available than is included in the current response. Use this value in the NextToken request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the NextToken response element comes back as null. This indicates that this is the last page of results.
     */
    nextToken?: String;
  }
  export interface ListPrincipalsRequest {
    /**
     * Specifies that you want to list information for only resource shares that match the following:     SELF  – principals that your account is sharing resources with     OTHER-ACCOUNTS  – principals that are sharing resources with your account  
     */
    resourceOwner: ResourceOwner;
    /**
     * Specifies that you want to list principal information for the resource share with the specified Amazon Resoure Name (ARN).
     */
    resourceArn?: String;
    /**
     * Specifies that you want to list information for only the listed principals. You can include the following values:   An Amazon Web Services account ID, for example: 123456789012    An Amazon Resoure Name (ARN) of an organization in Organizations, for example: organizations::123456789012:organization/o-exampleorgid    An ARN of an organizational unit (OU) in Organizations, for example: organizations::123456789012:ou/o-exampleorgid/ou-examplerootid-exampleouid123    An ARN of an IAM role, for example: iam::123456789012:role/rolename    An ARN of an IAM user, for example: iam::123456789012user/username     Not all resource types can be shared with IAM roles and users. For more information, see Sharing with IAM roles and users in the Resource Access Manager User Guide. 
     */
    principals?: PrincipalArnOrIdList;
    /**
     * Specifies that you want to list information for only principals associated with resource shares that include the specified resource type. For a list of valid values, query the ListResourceTypes operation.
     */
    resourceType?: String;
    /**
     * Specifies that you want to list information for only principals associated with the resource shares specified by a list the Amazon Resource Names (ARNs).
     */
    resourceShareArns?: ResourceShareArnList;
    /**
     * Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results.
     */
    nextToken?: String;
    /**
     * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the NextToken response element is returned with a value (not null). Include the specified value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results.
     */
    maxResults?: MaxResults;
  }
  export interface ListPrincipalsResponse {
    /**
     * An array of objects that contain the details about the principals.
     */
    principals?: PrincipalList;
    /**
     * If present, this value indicates that more output is available than is included in the current response. Use this value in the NextToken request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the NextToken response element comes back as null. This indicates that this is the last page of results.
     */
    nextToken?: String;
  }
  export interface ListResourceSharePermissionsRequest {
    /**
     * Specifies the Amazon Resoure Name (ARN) of the resource share for which you want to retrieve the associated permissions.
     */
    resourceShareArn: String;
    /**
     * Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results.
     */
    nextToken?: String;
    /**
     * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the NextToken response element is returned with a value (not null). Include the specified value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results.
     */
    maxResults?: MaxResults;
  }
  export interface ListResourceSharePermissionsResponse {
    /**
     * An array of objects that describe the permissions associated with the resource share.
     */
    permissions?: ResourceSharePermissionList;
    /**
     * If present, this value indicates that more output is available than is included in the current response. Use this value in the NextToken request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the NextToken response element comes back as null. This indicates that this is the last page of results.
     */
    nextToken?: String;
  }
  export interface ListResourceTypesRequest {
    /**
     * Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results.
     */
    nextToken?: String;
    /**
     * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the NextToken response element is returned with a value (not null). Include the specified value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results.
     */
    maxResults?: MaxResults;
    /**
     * Specifies that you want the results to include only resources that have the specified scope.    ALL – the results include both global and regional resources or resource types.    GLOBAL – the results include only global resources or resource types.    REGIONAL – the results include only regional resources or resource types.   The default value is ALL.
     */
    resourceRegionScope?: ResourceRegionScopeFilter;
  }
  export interface ListResourceTypesResponse {
    /**
     * An array of objects that contain information about the resource types that can be shared using RAM.
     */
    resourceTypes?: ServiceNameAndResourceTypeList;
    /**
     * If present, this value indicates that more output is available than is included in the current response. Use this value in the NextToken request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the NextToken response element comes back as null. This indicates that this is the last page of results.
     */
    nextToken?: String;
  }
  export interface ListResourcesRequest {
    /**
     * Specifies that you want to list only the resource shares that match the following:     SELF  – resources that your account shares with other accounts     OTHER-ACCOUNTS  – resources that other accounts share with your account  
     */
    resourceOwner: ResourceOwner;
    /**
     * Specifies that you want to list only the resource shares that are associated with the specified principal.
     */
    principal?: String;
    /**
     * Specifies that you want to list only the resource shares that include resources of the specified resource type. For valid values, query the ListResourceTypes operation.
     */
    resourceType?: String;
    /**
     * Specifies that you want to list only the resource shares that include resources with the specified Amazon Resource Names (ARNs).
     */
    resourceArns?: ResourceArnList;
    /**
     * Specifies that you want to list only resources in the resource shares identified by the specified Amazon Resource Names (ARNs).
     */
    resourceShareArns?: ResourceShareArnList;
    /**
     * Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results.
     */
    nextToken?: String;
    /**
     * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the NextToken response element is returned with a value (not null). Include the specified value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results.
     */
    maxResults?: MaxResults;
    /**
     * Specifies that you want the results to include only resources that have the specified scope.    ALL – the results include both global and regional resources or resource types.    GLOBAL – the results include only global resources or resource types.    REGIONAL – the results include only regional resources or resource types.   The default value is ALL.
     */
    resourceRegionScope?: ResourceRegionScopeFilter;
  }
  export interface ListResourcesResponse {
    /**
     * An array of objects that contain information about the resources.
     */
    resources?: ResourceList;
    /**
     * If present, this value indicates that more output is available than is included in the current response. Use this value in the NextToken request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the NextToken response element comes back as null. This indicates that this is the last page of results.
     */
    nextToken?: String;
  }
  export type MaxResults = number;
  export type PermissionArnList = String[];
  export type Policy = string;
  export type PolicyList = Policy[];
  export interface Principal {
    /**
     * The ID of the principal.
     */
    id?: String;
    /**
     * The Amazon Resoure Name (ARN) of a resource share the principal is associated with.
     */
    resourceShareArn?: String;
    /**
     * The date and time when the principal was associated with the resource share.
     */
    creationTime?: DateTime;
    /**
     * The date and time when the association was last updated.
     */
    lastUpdatedTime?: DateTime;
    /**
     * Indicates whether the principal belongs to the same organization in Organizations as the Amazon Web Services account that owns the resource share.
     */
    external?: Boolean;
  }
  export type PrincipalArnOrIdList = String[];
  export type PrincipalList = Principal[];
  export interface PromoteResourceShareCreatedFromPolicyRequest {
    /**
     * Specifies the Amazon Resoure Name (ARN) of the resource share to promote.
     */
    resourceShareArn: String;
  }
  export interface PromoteResourceShareCreatedFromPolicyResponse {
    /**
     * A return value of true indicates that the request succeeded. A value of false indicates that the request failed.
     */
    returnValue?: Boolean;
  }
  export interface RejectResourceShareInvitationRequest {
    /**
     * Specifies the Amazon Resoure Name (ARN) of the invitation that you want to reject.
     */
    resourceShareInvitationArn: String;
    /**
     * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value.. If you don't provide this value, then Amazon Web Services generates a random one for you.
     */
    clientToken?: String;
  }
  export interface RejectResourceShareInvitationResponse {
    /**
     * An object that contains the details about the rejected invitation.
     */
    resourceShareInvitation?: ResourceShareInvitation;
    /**
     * The idempotency identifier associated with this request. If you want to repeat the same operation in an idempotent manner then you must include this value in the clientToken request parameter of that later call. All other parameters must also have the same values that you used in the first call.
     */
    clientToken?: String;
  }
  export interface Resource {
    /**
     * The Amazon Resoure Name (ARN) of the resource.
     */
    arn?: String;
    /**
     * The resource type. This takes the form of: service-code:resource-code 
     */
    type?: String;
    /**
     * The Amazon Resoure Name (ARN) of the resource share this resource is associated with.
     */
    resourceShareArn?: String;
    /**
     * The Amazon Resoure Name (ARN) of the resource group. This value is available only if the resource is part of a resource group.
     */
    resourceGroupArn?: String;
    /**
     * The current status of the resource.
     */
    status?: ResourceStatus;
    /**
     * A message about the status of the resource.
     */
    statusMessage?: String;
    /**
     * The date and time when the resource was associated with the resource share.
     */
    creationTime?: DateTime;
    /**
     * The date an time when the association was last updated.
     */
    lastUpdatedTime?: DateTime;
    /**
     * Specifies the scope of visibility of this resource:    REGIONAL – The resource can be accessed only by using requests that target the Amazon Web Services Region in which the resource exists.    GLOBAL – The resource can be accessed from any Amazon Web Services Region.  
     */
    resourceRegionScope?: ResourceRegionScope;
  }
  export type ResourceArnList = String[];
  export type ResourceList = Resource[];
  export type ResourceOwner = "SELF"|"OTHER-ACCOUNTS"|string;
  export type ResourceRegionScope = "REGIONAL"|"GLOBAL"|string;
  export type ResourceRegionScopeFilter = "ALL"|"REGIONAL"|"GLOBAL"|string;
  export interface ResourceShare {
    /**
     * The Amazon Resoure Name (ARN) of the resource share
     */
    resourceShareArn?: String;
    /**
     * The name of the resource share.
     */
    name?: String;
    /**
     * The ID of the Amazon Web Services account that owns the resource share.
     */
    owningAccountId?: String;
    /**
     * Indicates whether principals outside your organization in Organizations can be associated with a resource share.
     */
    allowExternalPrincipals?: Boolean;
    /**
     * The current status of the resource share.
     */
    status?: ResourceShareStatus;
    /**
     * A message about the status of the resource share.
     */
    statusMessage?: String;
    /**
     * The tag key and value pairs attached to the resource share.
     */
    tags?: TagList;
    /**
     * The date and time when the resource share was created.
     */
    creationTime?: DateTime;
    /**
     * The date and time when the resource share was last updated.
     */
    lastUpdatedTime?: DateTime;
    /**
     * Indicates how the resource share was created. Possible values include:    CREATED_FROM_POLICY - Indicates that the resource share was created from an Identity and Access Management (IAM) resource-based permission policy attached to the resource. This type of resource share is visible only to the Amazon Web Services account that created it. You can't modify it in RAM unless you promote it. For more information, see PromoteResourceShareCreatedFromPolicy.    PROMOTING_TO_STANDARD - The resource share is in the process of being promoted. For more information, see PromoteResourceShareCreatedFromPolicy.    STANDARD - Indicates that the resource share was created in RAM using the console or APIs. These resource shares are visible to all principals you share the resource share with. You can modify these resource shares in RAM using the console or APIs.  
     */
    featureSet?: ResourceShareFeatureSet;
  }
  export type ResourceShareArnList = String[];
  export interface ResourceShareAssociation {
    /**
     * The Amazon Resoure Name (ARN) of the resource share.
     */
    resourceShareArn?: String;
    /**
     * The name of the resource share.
     */
    resourceShareName?: String;
    /**
     * The associated entity. This can be either of the following:   For a resource association, this is the Amazon Resoure Name (ARN) of the resource.   For principal associations, this is one of the following:   The ID of an Amazon Web Services account   The Amazon Resoure Name (ARN) of an organization in Organizations   The ARN of an organizational unit (OU) in Organizations   The ARN of an IAM role   The ARN of an IAM user    
     */
    associatedEntity?: String;
    /**
     * The type of entity included in this association.
     */
    associationType?: ResourceShareAssociationType;
    /**
     * The current status of the association.
     */
    status?: ResourceShareAssociationStatus;
    /**
     * A message about the status of the association.
     */
    statusMessage?: String;
    /**
     * The date and time when the association was created.
     */
    creationTime?: DateTime;
    /**
     * The date and time when the association was last updated.
     */
    lastUpdatedTime?: DateTime;
    /**
     * Indicates whether the principal belongs to the same organization in Organizations as the Amazon Web Services account that owns the resource share.
     */
    external?: Boolean;
  }
  export type ResourceShareAssociationList = ResourceShareAssociation[];
  export type ResourceShareAssociationStatus = "ASSOCIATING"|"ASSOCIATED"|"FAILED"|"DISASSOCIATING"|"DISASSOCIATED"|string;
  export type ResourceShareAssociationType = "PRINCIPAL"|"RESOURCE"|string;
  export type ResourceShareFeatureSet = "CREATED_FROM_POLICY"|"PROMOTING_TO_STANDARD"|"STANDARD"|string;
  export interface ResourceShareInvitation {
    /**
     * The Amazon Resoure Name (ARN) of the invitation.
     */
    resourceShareInvitationArn?: String;
    /**
     * The name of the resource share.
     */
    resourceShareName?: String;
    /**
     * The Amazon Resoure Name (ARN) of the resource share
     */
    resourceShareArn?: String;
    /**
     * The ID of the Amazon Web Services account that sent the invitation.
     */
    senderAccountId?: String;
    /**
     * The ID of the Amazon Web Services account that received the invitation.
     */
    receiverAccountId?: String;
    /**
     * The date and time when the invitation was sent.
     */
    invitationTimestamp?: DateTime;
    /**
     * The current status of the invitation.
     */
    status?: ResourceShareInvitationStatus;
    /**
     * To view the resources associated with a pending resource share invitation, use ListPendingInvitationResources.
     */
    resourceShareAssociations?: ResourceShareAssociationList;
    /**
     * The Amazon Resoure Name (ARN) of the IAM user or role that received the invitation.
     */
    receiverArn?: String;
  }
  export type ResourceShareInvitationArnList = String[];
  export type ResourceShareInvitationList = ResourceShareInvitation[];
  export type ResourceShareInvitationStatus = "PENDING"|"ACCEPTED"|"REJECTED"|"EXPIRED"|string;
  export type ResourceShareList = ResourceShare[];
  export interface ResourceSharePermissionDetail {
    /**
     * The Amazon Resoure Name (ARN) of this RAM permission.
     */
    arn?: String;
    /**
     * The version of the permission represented in this structure.
     */
    version?: String;
    /**
     * Specifies whether the version of the permission represented in this structure is the default version for this permission.
     */
    defaultVersion?: Boolean;
    /**
     * The name of this permission.
     */
    name?: String;
    /**
     * The resource type to which this permission applies.
     */
    resourceType?: String;
    /**
     * The permission's effect and actions in JSON format. The effect indicates whether the specified actions are allowed or denied. The actions list the operations to which the principal is granted or denied access.
     */
    permission?: String;
    /**
     * The date and time when the permission was created.
     */
    creationTime?: DateTime;
    /**
     * The date and time when the permission was last updated.
     */
    lastUpdatedTime?: DateTime;
    /**
     * Specifies whether the version of the permission represented in this structure is the default version for all resources of this resource type.
     */
    isResourceTypeDefault?: Boolean;
  }
  export type ResourceSharePermissionList = ResourceSharePermissionSummary[];
  export interface ResourceSharePermissionSummary {
    /**
     * The Amazon Resoure Name (ARN) of the permission you want information about.
     */
    arn?: String;
    /**
     * The version of the permission represented in this structure.
     */
    version?: String;
    /**
     * Specifies whether the version of the permission represented in this structure is the default version for this permission.
     */
    defaultVersion?: Boolean;
    /**
     * The name of this permission.
     */
    name?: String;
    /**
     * The type of resource to which this permission applies.
     */
    resourceType?: String;
    /**
     * The current status of the permission.
     */
    status?: String;
    /**
     * The date and time when the permission was created.
     */
    creationTime?: DateTime;
    /**
     * The date and time when the permission was last updated.
     */
    lastUpdatedTime?: DateTime;
    /**
     * Specifies whether the version of the permission represented in this structure is the default version for all resources of this resource type.
     */
    isResourceTypeDefault?: Boolean;
  }
  export type ResourceShareStatus = "PENDING"|"ACTIVE"|"FAILED"|"DELETING"|"DELETED"|string;
  export type ResourceStatus = "AVAILABLE"|"ZONAL_RESOURCE_INACCESSIBLE"|"LIMIT_EXCEEDED"|"UNAVAILABLE"|"PENDING"|string;
  export interface ServiceNameAndResourceType {
    /**
     * The type of the resource.
     */
    resourceType?: String;
    /**
     * The name of the Amazon Web Services service to which resources of this type belong.
     */
    serviceName?: String;
    /**
     * Specifies the scope of visibility of resources of this type:    REGIONAL – The resource can be accessed only by using requests that target the Amazon Web Services Region in which the resource exists.    GLOBAL – The resource can be accessed from any Amazon Web Services Region.  
     */
    resourceRegionScope?: ResourceRegionScope;
  }
  export type ServiceNameAndResourceTypeList = ServiceNameAndResourceType[];
  export type String = string;
  export interface Tag {
    /**
     * The key, or name, attached to the tag. Every tag must have a key. Key names are case sensitive.
     */
    key?: TagKey;
    /**
     * The string value attached to the tag. The value can be an empty string. Key values are case sensitive.
     */
    value?: TagValue;
  }
  export interface TagFilter {
    /**
     * The tag key. This must have a valid string value and can't be empty.
     */
    tagKey?: TagKey;
    /**
     * A list of zero or more tag values. If no values are provided, then the filter matches any tag with the specified key, regardless of its value.
     */
    tagValues?: TagValueList;
  }
  export type TagFilters = TagFilter[];
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export interface TagResourceRequest {
    /**
     * Specifies the Amazon Resoure Name (ARN) of the resource share that you want to add tags to.
     */
    resourceShareArn: String;
    /**
     * A list of one or more tag key and value pairs. The tag key must be present and not be an empty string. The tag value must be present but can be an empty string.
     */
    tags: TagList;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type TagValueList = TagValue[];
  export interface UntagResourceRequest {
    /**
     * Specifies the Amazon Resoure Name (ARN) of the resource share that you want to remove tags from. The tags are removed from the resource share, not the resources in the resource share.
     */
    resourceShareArn: String;
    /**
     * Specifies a list of one or more tag keys that you want to remove.
     */
    tagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateResourceShareRequest {
    /**
     * Specifies the Amazon Resoure Name (ARN) of the resource share that you want to modify.
     */
    resourceShareArn: String;
    /**
     * If specified, the new name that you want to attach to the resource share.
     */
    name?: String;
    /**
     * Specifies whether principals outside your organization in Organizations can be associated with a resource share.
     */
    allowExternalPrincipals?: Boolean;
    /**
     * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value.. If you don't provide this value, then Amazon Web Services generates a random one for you.
     */
    clientToken?: String;
  }
  export interface UpdateResourceShareResponse {
    /**
     * Information about the resource share.
     */
    resourceShare?: ResourceShare;
    /**
     * The idempotency identifier associated with this request. If you want to repeat the same operation in an idempotent manner then you must include this value in the clientToken request parameter of that later call. All other parameters must also have the same values that you used in the first call.
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
