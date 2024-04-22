import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class Route53Profiles extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Route53Profiles.Types.ClientConfiguration)
  config: Config & Route53Profiles.Types.ClientConfiguration;
  /**
   *  Associates a Route 53 Profiles profile with a VPC. A VPC can have only one Profile associated with it, but a Profile can be associated with up to 5000 VPCs. 
   */
  associateProfile(params: Route53Profiles.Types.AssociateProfileRequest, callback?: (err: AWSError, data: Route53Profiles.Types.AssociateProfileResponse) => void): Request<Route53Profiles.Types.AssociateProfileResponse, AWSError>;
  /**
   *  Associates a Route 53 Profiles profile with a VPC. A VPC can have only one Profile associated with it, but a Profile can be associated with up to 5000 VPCs. 
   */
  associateProfile(callback?: (err: AWSError, data: Route53Profiles.Types.AssociateProfileResponse) => void): Request<Route53Profiles.Types.AssociateProfileResponse, AWSError>;
  /**
   *  Associates a DNS reource configuration to a Route 53 Profile. 
   */
  associateResourceToProfile(params: Route53Profiles.Types.AssociateResourceToProfileRequest, callback?: (err: AWSError, data: Route53Profiles.Types.AssociateResourceToProfileResponse) => void): Request<Route53Profiles.Types.AssociateResourceToProfileResponse, AWSError>;
  /**
   *  Associates a DNS reource configuration to a Route 53 Profile. 
   */
  associateResourceToProfile(callback?: (err: AWSError, data: Route53Profiles.Types.AssociateResourceToProfileResponse) => void): Request<Route53Profiles.Types.AssociateResourceToProfileResponse, AWSError>;
  /**
   *  Creates an empty Route 53 Profile. 
   */
  createProfile(params: Route53Profiles.Types.CreateProfileRequest, callback?: (err: AWSError, data: Route53Profiles.Types.CreateProfileResponse) => void): Request<Route53Profiles.Types.CreateProfileResponse, AWSError>;
  /**
   *  Creates an empty Route 53 Profile. 
   */
  createProfile(callback?: (err: AWSError, data: Route53Profiles.Types.CreateProfileResponse) => void): Request<Route53Profiles.Types.CreateProfileResponse, AWSError>;
  /**
   *  Deletes the specified Route 53 Profile. Before you can delete a profile, you must first disassociate it from all VPCs. 
   */
  deleteProfile(params: Route53Profiles.Types.DeleteProfileRequest, callback?: (err: AWSError, data: Route53Profiles.Types.DeleteProfileResponse) => void): Request<Route53Profiles.Types.DeleteProfileResponse, AWSError>;
  /**
   *  Deletes the specified Route 53 Profile. Before you can delete a profile, you must first disassociate it from all VPCs. 
   */
  deleteProfile(callback?: (err: AWSError, data: Route53Profiles.Types.DeleteProfileResponse) => void): Request<Route53Profiles.Types.DeleteProfileResponse, AWSError>;
  /**
   *  Dissociates a specified Route 53 Profile from the specified VPC. 
   */
  disassociateProfile(params: Route53Profiles.Types.DisassociateProfileRequest, callback?: (err: AWSError, data: Route53Profiles.Types.DisassociateProfileResponse) => void): Request<Route53Profiles.Types.DisassociateProfileResponse, AWSError>;
  /**
   *  Dissociates a specified Route 53 Profile from the specified VPC. 
   */
  disassociateProfile(callback?: (err: AWSError, data: Route53Profiles.Types.DisassociateProfileResponse) => void): Request<Route53Profiles.Types.DisassociateProfileResponse, AWSError>;
  /**
   *  Dissoaciated a specified resource, from the Route 53 Profile. 
   */
  disassociateResourceFromProfile(params: Route53Profiles.Types.DisassociateResourceFromProfileRequest, callback?: (err: AWSError, data: Route53Profiles.Types.DisassociateResourceFromProfileResponse) => void): Request<Route53Profiles.Types.DisassociateResourceFromProfileResponse, AWSError>;
  /**
   *  Dissoaciated a specified resource, from the Route 53 Profile. 
   */
  disassociateResourceFromProfile(callback?: (err: AWSError, data: Route53Profiles.Types.DisassociateResourceFromProfileResponse) => void): Request<Route53Profiles.Types.DisassociateResourceFromProfileResponse, AWSError>;
  /**
   *  Returns information about a specified Route 53 Profile, such as whether whether the Profile is shared, and the current status of the Profile. 
   */
  getProfile(params: Route53Profiles.Types.GetProfileRequest, callback?: (err: AWSError, data: Route53Profiles.Types.GetProfileResponse) => void): Request<Route53Profiles.Types.GetProfileResponse, AWSError>;
  /**
   *  Returns information about a specified Route 53 Profile, such as whether whether the Profile is shared, and the current status of the Profile. 
   */
  getProfile(callback?: (err: AWSError, data: Route53Profiles.Types.GetProfileResponse) => void): Request<Route53Profiles.Types.GetProfileResponse, AWSError>;
  /**
   *  Retrieves a Route 53 Profile association for a VPC. A VPC can have only one Profile association, but a Profile can be associated with up to 5000 VPCs. 
   */
  getProfileAssociation(params: Route53Profiles.Types.GetProfileAssociationRequest, callback?: (err: AWSError, data: Route53Profiles.Types.GetProfileAssociationResponse) => void): Request<Route53Profiles.Types.GetProfileAssociationResponse, AWSError>;
  /**
   *  Retrieves a Route 53 Profile association for a VPC. A VPC can have only one Profile association, but a Profile can be associated with up to 5000 VPCs. 
   */
  getProfileAssociation(callback?: (err: AWSError, data: Route53Profiles.Types.GetProfileAssociationResponse) => void): Request<Route53Profiles.Types.GetProfileAssociationResponse, AWSError>;
  /**
   *  Returns information about a specified Route 53 Profile resource association. 
   */
  getProfileResourceAssociation(params: Route53Profiles.Types.GetProfileResourceAssociationRequest, callback?: (err: AWSError, data: Route53Profiles.Types.GetProfileResourceAssociationResponse) => void): Request<Route53Profiles.Types.GetProfileResourceAssociationResponse, AWSError>;
  /**
   *  Returns information about a specified Route 53 Profile resource association. 
   */
  getProfileResourceAssociation(callback?: (err: AWSError, data: Route53Profiles.Types.GetProfileResourceAssociationResponse) => void): Request<Route53Profiles.Types.GetProfileResourceAssociationResponse, AWSError>;
  /**
   *  Lists all the VPCs that the specified Route 53 Profile is associated with. 
   */
  listProfileAssociations(params: Route53Profiles.Types.ListProfileAssociationsRequest, callback?: (err: AWSError, data: Route53Profiles.Types.ListProfileAssociationsResponse) => void): Request<Route53Profiles.Types.ListProfileAssociationsResponse, AWSError>;
  /**
   *  Lists all the VPCs that the specified Route 53 Profile is associated with. 
   */
  listProfileAssociations(callback?: (err: AWSError, data: Route53Profiles.Types.ListProfileAssociationsResponse) => void): Request<Route53Profiles.Types.ListProfileAssociationsResponse, AWSError>;
  /**
   *  Lists all the resource associations for the specified Route 53 Profile. 
   */
  listProfileResourceAssociations(params: Route53Profiles.Types.ListProfileResourceAssociationsRequest, callback?: (err: AWSError, data: Route53Profiles.Types.ListProfileResourceAssociationsResponse) => void): Request<Route53Profiles.Types.ListProfileResourceAssociationsResponse, AWSError>;
  /**
   *  Lists all the resource associations for the specified Route 53 Profile. 
   */
  listProfileResourceAssociations(callback?: (err: AWSError, data: Route53Profiles.Types.ListProfileResourceAssociationsResponse) => void): Request<Route53Profiles.Types.ListProfileResourceAssociationsResponse, AWSError>;
  /**
   *  Lists all the Route 53 Profiles associated with your Amazon Web Services account. 
   */
  listProfiles(params: Route53Profiles.Types.ListProfilesRequest, callback?: (err: AWSError, data: Route53Profiles.Types.ListProfilesResponse) => void): Request<Route53Profiles.Types.ListProfilesResponse, AWSError>;
  /**
   *  Lists all the Route 53 Profiles associated with your Amazon Web Services account. 
   */
  listProfiles(callback?: (err: AWSError, data: Route53Profiles.Types.ListProfilesResponse) => void): Request<Route53Profiles.Types.ListProfilesResponse, AWSError>;
  /**
   *  Lists the tags that you associated with the specified resource. 
   */
  listTagsForResource(params: Route53Profiles.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: Route53Profiles.Types.ListTagsForResourceResponse) => void): Request<Route53Profiles.Types.ListTagsForResourceResponse, AWSError>;
  /**
   *  Lists the tags that you associated with the specified resource. 
   */
  listTagsForResource(callback?: (err: AWSError, data: Route53Profiles.Types.ListTagsForResourceResponse) => void): Request<Route53Profiles.Types.ListTagsForResourceResponse, AWSError>;
  /**
   *  Adds one or more tags to a specified resource. 
   */
  tagResource(params: Route53Profiles.Types.TagResourceRequest, callback?: (err: AWSError, data: Route53Profiles.Types.TagResourceResponse) => void): Request<Route53Profiles.Types.TagResourceResponse, AWSError>;
  /**
   *  Adds one or more tags to a specified resource. 
   */
  tagResource(callback?: (err: AWSError, data: Route53Profiles.Types.TagResourceResponse) => void): Request<Route53Profiles.Types.TagResourceResponse, AWSError>;
  /**
   *  Removes one or more tags from a specified resource. 
   */
  untagResource(params: Route53Profiles.Types.UntagResourceRequest, callback?: (err: AWSError, data: Route53Profiles.Types.UntagResourceResponse) => void): Request<Route53Profiles.Types.UntagResourceResponse, AWSError>;
  /**
   *  Removes one or more tags from a specified resource. 
   */
  untagResource(callback?: (err: AWSError, data: Route53Profiles.Types.UntagResourceResponse) => void): Request<Route53Profiles.Types.UntagResourceResponse, AWSError>;
  /**
   *  Updates the specified Route 53 Profile resourse association. 
   */
  updateProfileResourceAssociation(params: Route53Profiles.Types.UpdateProfileResourceAssociationRequest, callback?: (err: AWSError, data: Route53Profiles.Types.UpdateProfileResourceAssociationResponse) => void): Request<Route53Profiles.Types.UpdateProfileResourceAssociationResponse, AWSError>;
  /**
   *  Updates the specified Route 53 Profile resourse association. 
   */
  updateProfileResourceAssociation(callback?: (err: AWSError, data: Route53Profiles.Types.UpdateProfileResourceAssociationResponse) => void): Request<Route53Profiles.Types.UpdateProfileResourceAssociationResponse, AWSError>;
}
declare namespace Route53Profiles {
  export type AccountId = string;
  export type Arn = string;
  export interface AssociateProfileRequest {
    /**
     *  A name for the association. 
     */
    Name: Name;
    /**
     *  ID of the Profile. 
     */
    ProfileId: ResourceId;
    /**
     *  The ID of the VPC. 
     */
    ResourceId: ResourceId;
    /**
     *  A list of the tag keys and values that you want to identify the Profile association. 
     */
    Tags?: TagList;
  }
  export interface AssociateProfileResponse {
    /**
     *  The association that you just created. The association has an ID that you can use to identify it in other requests, like update and delete. 
     */
    ProfileAssociation?: ProfileAssociation;
  }
  export interface AssociateResourceToProfileRequest {
    /**
     *  Name for the resource association. 
     */
    Name: Name;
    /**
     *  ID of the Profile. 
     */
    ProfileId: ResourceId;
    /**
     *  Amazon resource number, ARN, of the DNS resource. 
     */
    ResourceArn: Arn;
    /**
     *  If you are adding a DNS Firewall rule group, include also a priority in this format:   Key=FirewallRuleGroupPriority,Value=100 
     */
    ResourceProperties?: ResourceProperties;
  }
  export interface AssociateResourceToProfileResponse {
    /**
     *  Infromation about the AssociateResourceToProfile, including a status message. 
     */
    ProfileResourceAssociation?: ProfileResourceAssociation;
  }
  export interface CreateProfileRequest {
    /**
     *  ClientToken is an idempotency token that ensures a call to CreateProfile completes only once. You choose the value to pass. For example, an issue might prevent you from getting a response from CreateProfile. In this case, safely retry your call to CreateProfile by using the same CreateProfile parameter value. 
     */
    ClientToken: CreatorRequestId;
    /**
     *  A name for the Profile. 
     */
    Name: Name;
    /**
     *  A list of the tag keys and values that you want to associate with the Route 53 Profile. 
     */
    Tags?: TagList;
  }
  export interface CreateProfileResponse {
    /**
     *  The Profile that you just created. 
     */
    Profile?: Profile;
  }
  export type CreatorRequestId = string;
  export interface DeleteProfileRequest {
    /**
     *  The ID of the Profile that you want to delete. 
     */
    ProfileId: ResourceId;
  }
  export interface DeleteProfileResponse {
    /**
     *  Information about the DeleteProfile request, including the status of the request. 
     */
    Profile?: Profile;
  }
  export interface DisassociateProfileRequest {
    /**
     *  ID of the Profile. 
     */
    ProfileId: ResourceId;
    /**
     *  The ID of the VPC. 
     */
    ResourceId: ResourceId;
  }
  export interface DisassociateProfileResponse {
    /**
     *  Information about the DisassociateProfile request. 
     */
    ProfileAssociation?: ProfileAssociation;
  }
  export interface DisassociateResourceFromProfileRequest {
    /**
     *  The ID of the Profile. 
     */
    ProfileId: ResourceId;
    /**
     * The Amazon Resource Name (ARN) of the resource. 
     */
    ResourceArn: Arn;
  }
  export interface DisassociateResourceFromProfileResponse {
    /**
     *  Information about the DisassociateResourceFromProfile request, including the status of the request. 
     */
    ProfileResourceAssociation?: ProfileResourceAssociation;
  }
  export interface GetProfileAssociationRequest {
    /**
     *  The identifier of the association you want to get information about. 
     */
    ProfileAssociationId: ResourceId;
  }
  export interface GetProfileAssociationResponse {
    /**
     *  Information about the Profile association that you specified in a GetProfileAssociation request. 
     */
    ProfileAssociation?: ProfileAssociation;
  }
  export interface GetProfileRequest {
    /**
     *  ID of the Profile. 
     */
    ProfileId: ResourceId;
  }
  export interface GetProfileResourceAssociationRequest {
    /**
     *  The ID of the profile resource association that you want to get information about. 
     */
    ProfileResourceAssociationId: ResourceId;
  }
  export interface GetProfileResourceAssociationResponse {
    /**
     *  Information about the Profile resource association that you specified in a GetProfileResourceAssociation request. 
     */
    ProfileResourceAssociation?: ProfileResourceAssociation;
  }
  export interface GetProfileResponse {
    /**
     *  Information about the Profile, including the status of the Profile. 
     */
    Profile?: Profile;
  }
  export interface ListProfileAssociationsRequest {
    /**
     *  The maximum number of objects that you want to return for this request. If more objects are available, in the response, a NextToken value, which you can use in a subsequent call to get the next batch of objects, is provided.  If you don't specify a value for MaxResults, up to 100 objects are returned. 
     */
    MaxResults?: MaxResults;
    /**
     *  For the first call to this list request, omit this value.  When you request a list of objects, at most the number of objects specified by MaxResults is returned. If more objects are available for retrieval, a NextToken value is returned in the response. To retrieve the next batch of objects, use the token that was returned for the prior request in your next request.
     */
    NextToken?: NextToken;
    /**
     *  ID of the Profile. 
     */
    ProfileId?: ResourceId;
    /**
     *  ID of the VPC. 
     */
    ResourceId?: ResourceId;
  }
  export interface ListProfileAssociationsResponse {
    /**
     *  If more than MaxResults profile associations match the specified criteria, you can submit another ListProfileAssociations request to get the next group of results. In the next request, specify the value of NextToken from the previous response. 
     */
    NextToken?: NextToken;
    /**
     *  A complex type that containts settings information about the profile's VPC associations. 
     */
    ProfileAssociations?: ProfileAssociations;
  }
  export interface ListProfileResourceAssociationsRequest {
    /**
     *  The maximum number of objects that you want to return for this request. If more objects are available, in the response, a NextToken value, which you can use in a subsequent call to get the next batch of objects, is provided.  If you don't specify a value for MaxResults, up to 100 objects are returned. 
     */
    MaxResults?: MaxResults;
    /**
     *  For the first call to this list request, omit this value.  When you request a list of objects, at most the number of objects specified by MaxResults is returned. If more objects are available for retrieval, a NextToken value is returned in the response. To retrieve the next batch of objects, use the token that was returned for the prior request in your next request.
     */
    NextToken?: NextToken;
    /**
     *  The ID of the Profile. 
     */
    ProfileId: ResourceId;
    /**
     *  ID of a resource if you want information on only one type. 
     */
    ResourceType?: String;
  }
  export interface ListProfileResourceAssociationsResponse {
    /**
     *  If more than MaxResults resource associations match the specified criteria, you can submit another ListProfileResourceAssociations request to get the next group of results. In the next request, specify the value of NextToken from the previous response. 
     */
    NextToken?: NextToken;
    /**
     *  Information about the profile resource association that you specified in a GetProfileResourceAssociation request. 
     */
    ProfileResourceAssociations?: ProfileResourceAssociations;
  }
  export interface ListProfilesRequest {
    /**
     *  The maximum number of objects that you want to return for this request. If more objects are available, in the response, a NextToken value, which you can use in a subsequent call to get the next batch of objects, is provided.  If you don't specify a value for MaxResults, up to 100 objects are returned. 
     */
    MaxResults?: MaxResults;
    /**
     *  For the first call to this list request, omit this value.  When you request a list of objects, at most the number of objects specified by MaxResults is returned. If more objects are available for retrieval, a NextToken value is returned in the response. To retrieve the next batch of objects, use the token that was returned for the prior request in your next request.
     */
    NextToken?: NextToken;
  }
  export interface ListProfilesResponse {
    /**
     *  If more than MaxResults resource associations match the specified criteria, you can submit another ListProfiles request to get the next group of results. In the next request, specify the value of NextToken from the previous response. 
     */
    NextToken?: NextToken;
    /**
     *  Summary information about the Profiles. 
     */
    ProfileSummaries?: ProfileSummaryList;
  }
  export interface ListTagsForResourceRequest {
    /**
     *  The Amazon Resource Name (ARN) for the resource that you want to list the tags for. 
     */
    ResourceArn: Arn;
  }
  export interface ListTagsForResourceResponse {
    /**
     *  The tags that are associated with the resource that you specified in the ListTagsForResource request. 
     */
    Tags: TagMap;
  }
  export type MaxResults = number;
  export type Name = string;
  export type NextToken = string;
  export interface Profile {
    /**
     *  The Amazon Resource Name (ARN) of the Profile. 
     */
    Arn?: Arn;
    /**
     *  The ClientToken value that was assigned when the Profile was created. 
     */
    ClientToken?: CreatorRequestId;
    /**
     *  The date and time that the Profile was created, in Unix time format and Coordinated Universal Time (UTC). 
     */
    CreationTime?: Rfc3339Timestamp;
    /**
     *  ID of the Profile. 
     */
    Id?: ResourceId;
    /**
     *  The date and time that the Profile was modified, in Unix time format and Coordinated Universal Time (UTC). 
     */
    ModificationTime?: Rfc3339Timestamp;
    /**
     *  Name of the Profile. 
     */
    Name?: Name;
    /**
     *  Amazon Web Services account ID of the Profile owner. 
     */
    OwnerId?: AccountId;
    /**
     *  Sharing status for the Profile. 
     */
    ShareStatus?: ShareStatus;
    /**
     *  The status for the Profile. 
     */
    Status?: ProfileStatus;
    /**
     *  Status message that includes additiona information about the Profile. 
     */
    StatusMessage?: String;
  }
  export interface ProfileAssociation {
    /**
     *  The date and time that the Profile association was created, in Unix time format and Coordinated Universal Time (UTC). 
     */
    CreationTime?: Rfc3339Timestamp;
    /**
     *  ID of the Profile association. 
     */
    Id?: ResourceId;
    /**
     *  The date and time that the Profile association was modified, in Unix time format and Coordinated Universal Time (UTC). 
     */
    ModificationTime?: Rfc3339Timestamp;
    /**
     *  Name of the Profile association. 
     */
    Name?: Name;
    /**
     *  Amazon Web Services account ID of the Profile association owner. 
     */
    OwnerId?: AccountId;
    /**
     *  ID of the Profile. 
     */
    ProfileId?: ResourceId;
    /**
     *  The Amazon Resource Name (ARN) of the VPC. 
     */
    ResourceId?: ResourceId;
    /**
     *  Status of the Profile association. 
     */
    Status?: ProfileStatus;
    /**
     *  Additional information about the Profile association. 
     */
    StatusMessage?: String;
  }
  export type ProfileAssociations = ProfileAssociation[];
  export interface ProfileResourceAssociation {
    /**
     *  The date and time that the Profile resource association was created, in Unix time format and Coordinated Universal Time (UTC). 
     */
    CreationTime?: Rfc3339Timestamp;
    /**
     *  ID of the Profile resource association. 
     */
    Id?: ResourceId;
    /**
     *  The date and time that the Profile resource association was modified, in Unix time format and Coordinated Universal Time (UTC). 
     */
    ModificationTime?: Rfc3339Timestamp;
    /**
     *  Name of the Profile resource association. 
     */
    Name?: Name;
    /**
     *  Amazon Web Services account ID of the Profile resource association owner. 
     */
    OwnerId?: AccountId;
    /**
     *  Profile ID of the Profile that the resources are associated with. 
     */
    ProfileId?: ResourceId;
    /**
     *  The Amazon Resource Name (ARN) of the resource association. 
     */
    ResourceArn?: Arn;
    /**
     *  If the DNS resource is a DNS Firewall rule group, this indicates the priority. 
     */
    ResourceProperties?: ResourceProperties;
    /**
     *  Resource type, such as a private hosted zone, or DNS Firewall rule group. 
     */
    ResourceType?: String;
    /**
     *  Status of the Profile resource association. 
     */
    Status?: ProfileStatus;
    /**
     *  Additional information about the Profile resource association. 
     */
    StatusMessage?: String;
  }
  export type ProfileResourceAssociations = ProfileResourceAssociation[];
  export type ProfileStatus = "COMPLETE"|"DELETING"|"UPDATING"|"CREATING"|"DELETED"|"FAILED"|string;
  export interface ProfileSummary {
    /**
     *  The Amazon Resource Name (ARN) of the Profile. 
     */
    Arn?: Arn;
    /**
     *  ID of the Profile. 
     */
    Id?: ResourceId;
    /**
     *  Name of the Profile. 
     */
    Name?: Name;
    /**
     *  Share status of the Profile. 
     */
    ShareStatus?: ShareStatus;
  }
  export type ProfileSummaryList = ProfileSummary[];
  export type ResourceId = string;
  export type ResourceProperties = string;
  export type Rfc3339Timestamp = Date;
  export type ShareStatus = "NOT_SHARED"|"SHARED_WITH_ME"|"SHARED_BY_ME"|string;
  export type String = string;
  export interface Tag {
    /**
     *  Key associated with the Tag. 
     */
    Key: TagKey;
    /**
     *  Value for the Tag. 
     */
    Value: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export type TagMap = {[key: string]: TagValue};
  export interface TagResourceRequest {
    /**
     *  The Amazon Resource Name (ARN) for the resource that you want to add tags to. 
     */
    ResourceArn: Arn;
    /**
     *  The tags that you want to add to the specified resource. 
     */
    Tags: TagMap;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export interface UntagResourceRequest {
    /**
     *  The Amazon Resource Name (ARN) for the resource that you want to remove tags from. 
     */
    ResourceArn: Arn;
    /**
     *  The tags that you want to remove to the specified resource. 
     */
    TagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateProfileResourceAssociationRequest {
    /**
     *  Name of the resource association. 
     */
    Name?: Name;
    /**
     *  ID of the resource association. 
     */
    ProfileResourceAssociationId: ResourceId;
    /**
     *  If you are adding a DNS Firewall rule group, include also a priority in this format:  Key=FirewallRuleGroupPriority,Value=100. 
     */
    ResourceProperties?: ResourceProperties;
  }
  export interface UpdateProfileResourceAssociationResponse {
    /**
     *  Information about the UpdateProfileResourceAssociation request, including a status message. 
     */
    ProfileResourceAssociation?: ProfileResourceAssociation;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-05-10"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Route53Profiles client.
   */
  export import Types = Route53Profiles;
}
export = Route53Profiles;
