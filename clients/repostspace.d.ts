import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class Repostspace extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Repostspace.Types.ClientConfiguration)
  config: Config & Repostspace.Types.ClientConfiguration;
  /**
   * Creates an AWS re:Post Private private re:Post.
   */
  createSpace(params: Repostspace.Types.CreateSpaceInput, callback?: (err: AWSError, data: Repostspace.Types.CreateSpaceOutput) => void): Request<Repostspace.Types.CreateSpaceOutput, AWSError>;
  /**
   * Creates an AWS re:Post Private private re:Post.
   */
  createSpace(callback?: (err: AWSError, data: Repostspace.Types.CreateSpaceOutput) => void): Request<Repostspace.Types.CreateSpaceOutput, AWSError>;
  /**
   * Deletes an AWS re:Post Private private re:Post.
   */
  deleteSpace(params: Repostspace.Types.DeleteSpaceInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an AWS re:Post Private private re:Post.
   */
  deleteSpace(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the user or group from the list of administrators of the private re:Post.
   */
  deregisterAdmin(params: Repostspace.Types.DeregisterAdminInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the user or group from the list of administrators of the private re:Post.
   */
  deregisterAdmin(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Displays information about the AWS re:Post Private private re:Post.
   */
  getSpace(params: Repostspace.Types.GetSpaceInput, callback?: (err: AWSError, data: Repostspace.Types.GetSpaceOutput) => void): Request<Repostspace.Types.GetSpaceOutput, AWSError>;
  /**
   * Displays information about the AWS re:Post Private private re:Post.
   */
  getSpace(callback?: (err: AWSError, data: Repostspace.Types.GetSpaceOutput) => void): Request<Repostspace.Types.GetSpaceOutput, AWSError>;
  /**
   * Returns a list of AWS re:Post Private private re:Posts in the account with some information about each private re:Post.
   */
  listSpaces(params: Repostspace.Types.ListSpacesInput, callback?: (err: AWSError, data: Repostspace.Types.ListSpacesOutput) => void): Request<Repostspace.Types.ListSpacesOutput, AWSError>;
  /**
   * Returns a list of AWS re:Post Private private re:Posts in the account with some information about each private re:Post.
   */
  listSpaces(callback?: (err: AWSError, data: Repostspace.Types.ListSpacesOutput) => void): Request<Repostspace.Types.ListSpacesOutput, AWSError>;
  /**
   * Returns the tags that are associated with the AWS re:Post Private resource specified by the resourceArn. The only resource that can be tagged is a private re:Post.
   */
  listTagsForResource(params: Repostspace.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: Repostspace.Types.ListTagsForResourceResponse) => void): Request<Repostspace.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Returns the tags that are associated with the AWS re:Post Private resource specified by the resourceArn. The only resource that can be tagged is a private re:Post.
   */
  listTagsForResource(callback?: (err: AWSError, data: Repostspace.Types.ListTagsForResourceResponse) => void): Request<Repostspace.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Adds a user or group to the list of administrators of the private re:Post.
   */
  registerAdmin(params: Repostspace.Types.RegisterAdminInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds a user or group to the list of administrators of the private re:Post.
   */
  registerAdmin(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sends an invitation email to selected users and groups.
   */
  sendInvites(params: Repostspace.Types.SendInvitesInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sends an invitation email to selected users and groups.
   */
  sendInvites(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Associates tags with an AWS re:Post Private resource. Currently, the only resource that can be tagged is the private re:Post. If you specify a new tag key for the resource, the tag is appended to the list of tags that are associated with the resource. If you specify a tag key that’s already associated with the resource, the new tag value that you specify replaces the previous value for that tag.
   */
  tagResource(params: Repostspace.Types.TagResourceRequest, callback?: (err: AWSError, data: Repostspace.Types.TagResourceResponse) => void): Request<Repostspace.Types.TagResourceResponse, AWSError>;
  /**
   * Associates tags with an AWS re:Post Private resource. Currently, the only resource that can be tagged is the private re:Post. If you specify a new tag key for the resource, the tag is appended to the list of tags that are associated with the resource. If you specify a tag key that’s already associated with the resource, the new tag value that you specify replaces the previous value for that tag.
   */
  tagResource(callback?: (err: AWSError, data: Repostspace.Types.TagResourceResponse) => void): Request<Repostspace.Types.TagResourceResponse, AWSError>;
  /**
   * Removes the association of the tag with the AWS re:Post Private resource.
   */
  untagResource(params: Repostspace.Types.UntagResourceRequest, callback?: (err: AWSError, data: Repostspace.Types.UntagResourceResponse) => void): Request<Repostspace.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes the association of the tag with the AWS re:Post Private resource.
   */
  untagResource(callback?: (err: AWSError, data: Repostspace.Types.UntagResourceResponse) => void): Request<Repostspace.Types.UntagResourceResponse, AWSError>;
  /**
   * Modifies an existing AWS re:Post Private private re:Post.
   */
  updateSpace(params: Repostspace.Types.UpdateSpaceInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Modifies an existing AWS re:Post Private private re:Post.
   */
  updateSpace(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
}
declare namespace Repostspace {
  export type AccessorId = string;
  export type AccessorIdList = AccessorId[];
  export type AdminId = string;
  export type Arn = string;
  export type ClientId = string;
  export type ConfigurationStatus = "CONFIGURED"|"UNCONFIGURED"|string;
  export type ContentSize = number;
  export interface CreateSpaceInput {
    /**
     * A description for the private re:Post. This is used only to help you identify this private re:Post.
     */
    description?: SpaceDescription;
    /**
     * The name for the private re:Post. This must be unique in your account.
     */
    name: SpaceName;
    /**
     * The IAM role that grants permissions to the private re:Post to convert unanswered questions into AWS support tickets.
     */
    roleArn?: Arn;
    /**
     * The subdomain that you use to access your AWS re:Post Private private re:Post. All custom subdomains must be approved by AWS before use. In addition to your custom subdomain, all private re:Posts are issued an AWS generated subdomain for immediate use.
     */
    subdomain: SpaceSubdomain;
    /**
     * The list of tags associated with the private re:Post.
     */
    tags?: Tags;
    /**
     * The pricing tier for the private re:Post.
     */
    tier: TierLevel;
    /**
     * The AWS KMS key ARN that’s used for the AWS KMS encryption. If you don't provide a key, your data is encrypted by default with a key that AWS owns and manages for you.
     */
    userKMSKey?: KMSKey;
  }
  export interface CreateSpaceOutput {
    /**
     * The unique ID of the private re:Post.
     */
    spaceId: SpaceId;
  }
  export interface DeleteSpaceInput {
    /**
     * The unique ID of the private re:Post.
     */
    spaceId: SpaceId;
  }
  export interface DeregisterAdminInput {
    /**
     * The ID of the admin to remove.
     */
    adminId: AdminId;
    /**
     * The ID of the private re:Post to remove the admin from.
     */
    spaceId: SpaceId;
  }
  export interface GetSpaceInput {
    /**
     * The ID of the private re:Post.
     */
    spaceId: SpaceId;
  }
  export interface GetSpaceOutput {
    /**
     * The ARN of the private re:Post.
     */
    arn: Arn;
    /**
     * The Identity Center identifier for the Application Instance.
     */
    clientId: ClientId;
    /**
     * The configuration status of the private re:Post.
     */
    configurationStatus: ConfigurationStatus;
    /**
     * The content size of the private re:Post.
     */
    contentSize?: ContentSize;
    /**
     * The date when the private re:Post was created.
     */
    createDateTime: SyntheticTimestamp_date_time;
    /**
     * The IAM role that grants permissions to the private re:Post to convert unanswered questions into AWS support tickets.
     */
    customerRoleArn?: Arn;
    /**
     * The date when the private re:Post was deleted.
     */
    deleteDateTime?: SyntheticTimestamp_date_time;
    /**
     * The description of the private re:Post.
     */
    description?: SpaceDescription;
    /**
     * The list of groups that are administrators of the private re:Post.
     */
    groupAdmins?: GroupAdmins;
    /**
     * The name of the private re:Post.
     */
    name: SpaceName;
    /**
     * The AWS generated subdomain of the private re:Post
     */
    randomDomain: Url;
    /**
     * The unique ID of the private re:Post.
     */
    spaceId: SpaceId;
    /**
     * The creation or deletion status of the private re:Post.
     */
    status: ProvisioningStatus;
    /**
     * The storage limit of the private re:Post.
     */
    storageLimit: StorageLimit;
    /**
     * The pricing tier of the private re:Post.
     */
    tier: TierLevel;
    /**
     * The list of users that are administrators of the private re:Post.
     */
    userAdmins?: UserAdmins;
    /**
     * The number of users that have onboarded to the private re:Post.
     */
    userCount?: UserCount;
    /**
     * The custom AWS KMS key ARN that’s used for the AWS KMS encryption.
     */
    userKMSKey?: KMSKey;
    /**
     * The custom subdomain that you use to access your private re:Post. All custom subdomains must be approved by AWS before use.
     */
    vanityDomain: Url;
    /**
     * The approval status of the custom subdomain.
     */
    vanityDomainStatus: VanityDomainStatus;
  }
  export type GroupAdmins = AdminId[];
  export type InviteBody = string;
  export type InviteTitle = string;
  export type KMSKey = string;
  export interface ListSpacesInput {
    /**
     * The maximum number of private re:Posts to include in the results.
     */
    maxResults?: ListSpacesLimit;
    /**
     * The token for the next set of private re:Posts to return. You receive this token from a previous ListSpaces operation.
     */
    nextToken?: String;
  }
  export type ListSpacesLimit = number;
  export interface ListSpacesOutput {
    /**
     * The token that you use when you request the next set of private re:Posts.
     */
    nextToken?: String;
    /**
     * An array of structures that contain some information about the private re:Posts in the account.
     */
    spaces: SpacesList;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The ARN of the resource that the tags are associated with.
     */
    resourceArn: Arn;
  }
  export interface ListTagsForResourceResponse {
    /**
     * The list of tags that are associated with the resource.
     */
    tags?: Tags;
  }
  export type ProvisioningStatus = string;
  export interface RegisterAdminInput {
    /**
     * The ID of the administrator.
     */
    adminId: AdminId;
    /**
     * The ID of the private re:Post.
     */
    spaceId: SpaceId;
  }
  export interface SendInvitesInput {
    /**
     * The array of identifiers for the users and groups.
     */
    accessorIds: AccessorIdList;
    /**
     * The body of the invite.
     */
    body: InviteBody;
    /**
     * The ID of the private re:Post.
     */
    spaceId: SpaceId;
    /**
     * The title of the invite.
     */
    title: InviteTitle;
  }
  export interface SpaceData {
    /**
     * The ARN of the private re:Post.
     */
    arn: Arn;
    /**
     * The configuration status of the private re:Post.
     */
    configurationStatus: ConfigurationStatus;
    /**
     * The content size of the private re:Post.
     */
    contentSize?: ContentSize;
    /**
     * The date when the private re:Post was created.
     */
    createDateTime: SyntheticTimestamp_date_time;
    /**
     * The date when the private re:Post was deleted.
     */
    deleteDateTime?: SyntheticTimestamp_date_time;
    /**
     * The description for the private re:Post. This is used only to help you identify this private re:Post.
     */
    description?: SpaceDescription;
    /**
     * The name for the private re:Post.
     */
    name: SpaceName;
    /**
     * The AWS generated subdomain of the private re:Post.
     */
    randomDomain: Url;
    /**
     * The unique ID of the private re:Post.
     */
    spaceId: SpaceId;
    /**
     * The creation/deletion status of the private re:Post.
     */
    status: ProvisioningStatus;
    /**
     * The storage limit of the private re:Post.
     */
    storageLimit: StorageLimit;
    /**
     * The pricing tier of the private re:Post.
     */
    tier: TierLevel;
    /**
     * The number of onboarded users to the private re:Post.
     */
    userCount?: UserCount;
    /**
     * The custom AWS KMS key ARN that’s used for the AWS KMS encryption.
     */
    userKMSKey?: KMSKey;
    /**
     * This custom subdomain that you use to access your private re:Post. All custom subdomains must be approved by AWS before use.
     */
    vanityDomain: Url;
    /**
     * This approval status of the custom subdomain.
     */
    vanityDomainStatus: VanityDomainStatus;
  }
  export type SpaceDescription = string;
  export type SpaceId = string;
  export type SpaceName = string;
  export type SpaceSubdomain = string;
  export type SpacesList = SpaceData[];
  export type StorageLimit = number;
  export type String = string;
  export type SyntheticTimestamp_date_time = Date;
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export interface TagResourceRequest {
    /**
     * The ARN of the resource that the tag is associated with.
     */
    resourceArn: Arn;
    /**
     * The list of tag keys and values that must be associated with the resource. You can associate tag keys only, tags (key and values) only, or a combination of tag keys and tags.
     */
    tags: Tags;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type Tags = {[key: string]: TagValue};
  export type TierLevel = "BASIC"|"STANDARD"|string;
  export interface UntagResourceRequest {
    /**
     * The ARN of the resource.
     */
    resourceArn: Arn;
    /**
     * The key values of the tag.
     */
    tagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateSpaceInput {
    /**
     * A description for the private re:Post. This is used only to help you identify this private re:Post.
     */
    description?: SpaceDescription;
    /**
     * The IAM role that grants permissions to the private re:Post to convert unanswered questions into AWS support tickets.
     */
    roleArn?: Arn;
    /**
     * The unique ID of this private re:Post.
     */
    spaceId: SpaceId;
    /**
     * The pricing tier of this private re:Post.
     */
    tier?: TierLevel;
  }
  export type Url = string;
  export type UserAdmins = AdminId[];
  export type UserCount = number;
  export type VanityDomainStatus = "PENDING"|"APPROVED"|"UNAPPROVED"|string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2022-05-13"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Repostspace client.
   */
  export import Types = Repostspace;
}
export = Repostspace;
