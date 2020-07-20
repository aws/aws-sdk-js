import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class FMS extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: FMS.Types.ClientConfiguration)
  config: Config & FMS.Types.ClientConfiguration;
  /**
   * Sets the AWS Firewall Manager administrator account. AWS Firewall Manager must be associated with the master account of your AWS organization or associated with a member account that has the appropriate permissions. If the account ID that you submit is not an AWS Organizations master account, AWS Firewall Manager will set the appropriate permissions for the given member account. The account that you associate with AWS Firewall Manager is called the AWS Firewall Manager administrator account. 
   */
  associateAdminAccount(params: FMS.Types.AssociateAdminAccountRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the AWS Firewall Manager administrator account. AWS Firewall Manager must be associated with the master account of your AWS organization or associated with a member account that has the appropriate permissions. If the account ID that you submit is not an AWS Organizations master account, AWS Firewall Manager will set the appropriate permissions for the given member account. The account that you associate with AWS Firewall Manager is called the AWS Firewall Manager administrator account. 
   */
  associateAdminAccount(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Permanently deletes an AWS Firewall Manager applications list.
   */
  deleteAppsList(params: FMS.Types.DeleteAppsListRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Permanently deletes an AWS Firewall Manager applications list.
   */
  deleteAppsList(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an AWS Firewall Manager association with the IAM role and the Amazon Simple Notification Service (SNS) topic that is used to record AWS Firewall Manager SNS logs.
   */
  deleteNotificationChannel(params: FMS.Types.DeleteNotificationChannelRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an AWS Firewall Manager association with the IAM role and the Amazon Simple Notification Service (SNS) topic that is used to record AWS Firewall Manager SNS logs.
   */
  deleteNotificationChannel(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Permanently deletes an AWS Firewall Manager policy. 
   */
  deletePolicy(params: FMS.Types.DeletePolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Permanently deletes an AWS Firewall Manager policy. 
   */
  deletePolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Permanently deletes an AWS Firewall Manager protocols list.
   */
  deleteProtocolsList(params: FMS.Types.DeleteProtocolsListRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Permanently deletes an AWS Firewall Manager protocols list.
   */
  deleteProtocolsList(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disassociates the account that has been set as the AWS Firewall Manager administrator account. To set a different account as the administrator account, you must submit an AssociateAdminAccount request.
   */
  disassociateAdminAccount(params: FMS.Types.DisassociateAdminAccountRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disassociates the account that has been set as the AWS Firewall Manager administrator account. To set a different account as the administrator account, you must submit an AssociateAdminAccount request.
   */
  disassociateAdminAccount(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Returns the AWS Organizations master account that is associated with AWS Firewall Manager as the AWS Firewall Manager administrator.
   */
  getAdminAccount(params: FMS.Types.GetAdminAccountRequest, callback?: (err: AWSError, data: FMS.Types.GetAdminAccountResponse) => void): Request<FMS.Types.GetAdminAccountResponse, AWSError>;
  /**
   * Returns the AWS Organizations master account that is associated with AWS Firewall Manager as the AWS Firewall Manager administrator.
   */
  getAdminAccount(callback?: (err: AWSError, data: FMS.Types.GetAdminAccountResponse) => void): Request<FMS.Types.GetAdminAccountResponse, AWSError>;
  /**
   * Returns information about the specified AWS Firewall Manager applications list.
   */
  getAppsList(params: FMS.Types.GetAppsListRequest, callback?: (err: AWSError, data: FMS.Types.GetAppsListResponse) => void): Request<FMS.Types.GetAppsListResponse, AWSError>;
  /**
   * Returns information about the specified AWS Firewall Manager applications list.
   */
  getAppsList(callback?: (err: AWSError, data: FMS.Types.GetAppsListResponse) => void): Request<FMS.Types.GetAppsListResponse, AWSError>;
  /**
   * Returns detailed compliance information about the specified member account. Details include resources that are in and out of compliance with the specified policy. Resources are considered noncompliant for AWS WAF and Shield Advanced policies if the specified policy has not been applied to them. Resources are considered noncompliant for security group policies if they are in scope of the policy, they violate one or more of the policy rules, and remediation is disabled or not possible. 
   */
  getComplianceDetail(params: FMS.Types.GetComplianceDetailRequest, callback?: (err: AWSError, data: FMS.Types.GetComplianceDetailResponse) => void): Request<FMS.Types.GetComplianceDetailResponse, AWSError>;
  /**
   * Returns detailed compliance information about the specified member account. Details include resources that are in and out of compliance with the specified policy. Resources are considered noncompliant for AWS WAF and Shield Advanced policies if the specified policy has not been applied to them. Resources are considered noncompliant for security group policies if they are in scope of the policy, they violate one or more of the policy rules, and remediation is disabled or not possible. 
   */
  getComplianceDetail(callback?: (err: AWSError, data: FMS.Types.GetComplianceDetailResponse) => void): Request<FMS.Types.GetComplianceDetailResponse, AWSError>;
  /**
   * Information about the Amazon Simple Notification Service (SNS) topic that is used to record AWS Firewall Manager SNS logs.
   */
  getNotificationChannel(params: FMS.Types.GetNotificationChannelRequest, callback?: (err: AWSError, data: FMS.Types.GetNotificationChannelResponse) => void): Request<FMS.Types.GetNotificationChannelResponse, AWSError>;
  /**
   * Information about the Amazon Simple Notification Service (SNS) topic that is used to record AWS Firewall Manager SNS logs.
   */
  getNotificationChannel(callback?: (err: AWSError, data: FMS.Types.GetNotificationChannelResponse) => void): Request<FMS.Types.GetNotificationChannelResponse, AWSError>;
  /**
   * Returns information about the specified AWS Firewall Manager policy.
   */
  getPolicy(params: FMS.Types.GetPolicyRequest, callback?: (err: AWSError, data: FMS.Types.GetPolicyResponse) => void): Request<FMS.Types.GetPolicyResponse, AWSError>;
  /**
   * Returns information about the specified AWS Firewall Manager policy.
   */
  getPolicy(callback?: (err: AWSError, data: FMS.Types.GetPolicyResponse) => void): Request<FMS.Types.GetPolicyResponse, AWSError>;
  /**
   * If you created a Shield Advanced policy, returns policy-level attack summary information in the event of a potential DDoS attack. Other policy types are currently unsupported.
   */
  getProtectionStatus(params: FMS.Types.GetProtectionStatusRequest, callback?: (err: AWSError, data: FMS.Types.GetProtectionStatusResponse) => void): Request<FMS.Types.GetProtectionStatusResponse, AWSError>;
  /**
   * If you created a Shield Advanced policy, returns policy-level attack summary information in the event of a potential DDoS attack. Other policy types are currently unsupported.
   */
  getProtectionStatus(callback?: (err: AWSError, data: FMS.Types.GetProtectionStatusResponse) => void): Request<FMS.Types.GetProtectionStatusResponse, AWSError>;
  /**
   * Returns information about the specified AWS Firewall Manager protocols list.
   */
  getProtocolsList(params: FMS.Types.GetProtocolsListRequest, callback?: (err: AWSError, data: FMS.Types.GetProtocolsListResponse) => void): Request<FMS.Types.GetProtocolsListResponse, AWSError>;
  /**
   * Returns information about the specified AWS Firewall Manager protocols list.
   */
  getProtocolsList(callback?: (err: AWSError, data: FMS.Types.GetProtocolsListResponse) => void): Request<FMS.Types.GetProtocolsListResponse, AWSError>;
  /**
   * Retrieves violations for a resource based on the specified AWS Firewall Manager policy and AWS account.
   */
  getViolationDetails(params: FMS.Types.GetViolationDetailsRequest, callback?: (err: AWSError, data: FMS.Types.GetViolationDetailsResponse) => void): Request<FMS.Types.GetViolationDetailsResponse, AWSError>;
  /**
   * Retrieves violations for a resource based on the specified AWS Firewall Manager policy and AWS account.
   */
  getViolationDetails(callback?: (err: AWSError, data: FMS.Types.GetViolationDetailsResponse) => void): Request<FMS.Types.GetViolationDetailsResponse, AWSError>;
  /**
   * Returns an array of AppsListDataSummary objects.
   */
  listAppsLists(params: FMS.Types.ListAppsListsRequest, callback?: (err: AWSError, data: FMS.Types.ListAppsListsResponse) => void): Request<FMS.Types.ListAppsListsResponse, AWSError>;
  /**
   * Returns an array of AppsListDataSummary objects.
   */
  listAppsLists(callback?: (err: AWSError, data: FMS.Types.ListAppsListsResponse) => void): Request<FMS.Types.ListAppsListsResponse, AWSError>;
  /**
   * Returns an array of PolicyComplianceStatus objects. Use PolicyComplianceStatus to get a summary of which member accounts are protected by the specified policy. 
   */
  listComplianceStatus(params: FMS.Types.ListComplianceStatusRequest, callback?: (err: AWSError, data: FMS.Types.ListComplianceStatusResponse) => void): Request<FMS.Types.ListComplianceStatusResponse, AWSError>;
  /**
   * Returns an array of PolicyComplianceStatus objects. Use PolicyComplianceStatus to get a summary of which member accounts are protected by the specified policy. 
   */
  listComplianceStatus(callback?: (err: AWSError, data: FMS.Types.ListComplianceStatusResponse) => void): Request<FMS.Types.ListComplianceStatusResponse, AWSError>;
  /**
   * Returns a MemberAccounts object that lists the member accounts in the administrator's AWS organization. The ListMemberAccounts must be submitted by the account that is set as the AWS Firewall Manager administrator.
   */
  listMemberAccounts(params: FMS.Types.ListMemberAccountsRequest, callback?: (err: AWSError, data: FMS.Types.ListMemberAccountsResponse) => void): Request<FMS.Types.ListMemberAccountsResponse, AWSError>;
  /**
   * Returns a MemberAccounts object that lists the member accounts in the administrator's AWS organization. The ListMemberAccounts must be submitted by the account that is set as the AWS Firewall Manager administrator.
   */
  listMemberAccounts(callback?: (err: AWSError, data: FMS.Types.ListMemberAccountsResponse) => void): Request<FMS.Types.ListMemberAccountsResponse, AWSError>;
  /**
   * Returns an array of PolicySummary objects.
   */
  listPolicies(params: FMS.Types.ListPoliciesRequest, callback?: (err: AWSError, data: FMS.Types.ListPoliciesResponse) => void): Request<FMS.Types.ListPoliciesResponse, AWSError>;
  /**
   * Returns an array of PolicySummary objects.
   */
  listPolicies(callback?: (err: AWSError, data: FMS.Types.ListPoliciesResponse) => void): Request<FMS.Types.ListPoliciesResponse, AWSError>;
  /**
   * Returns an array of ProtocolsListDataSummary objects.
   */
  listProtocolsLists(params: FMS.Types.ListProtocolsListsRequest, callback?: (err: AWSError, data: FMS.Types.ListProtocolsListsResponse) => void): Request<FMS.Types.ListProtocolsListsResponse, AWSError>;
  /**
   * Returns an array of ProtocolsListDataSummary objects.
   */
  listProtocolsLists(callback?: (err: AWSError, data: FMS.Types.ListProtocolsListsResponse) => void): Request<FMS.Types.ListProtocolsListsResponse, AWSError>;
  /**
   * Retrieves the list of tags for the specified AWS resource. 
   */
  listTagsForResource(params: FMS.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: FMS.Types.ListTagsForResourceResponse) => void): Request<FMS.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Retrieves the list of tags for the specified AWS resource. 
   */
  listTagsForResource(callback?: (err: AWSError, data: FMS.Types.ListTagsForResourceResponse) => void): Request<FMS.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Creates an AWS Firewall Manager applications list.
   */
  putAppsList(params: FMS.Types.PutAppsListRequest, callback?: (err: AWSError, data: FMS.Types.PutAppsListResponse) => void): Request<FMS.Types.PutAppsListResponse, AWSError>;
  /**
   * Creates an AWS Firewall Manager applications list.
   */
  putAppsList(callback?: (err: AWSError, data: FMS.Types.PutAppsListResponse) => void): Request<FMS.Types.PutAppsListResponse, AWSError>;
  /**
   * Designates the IAM role and Amazon Simple Notification Service (SNS) topic that AWS Firewall Manager uses to record SNS logs.
   */
  putNotificationChannel(params: FMS.Types.PutNotificationChannelRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Designates the IAM role and Amazon Simple Notification Service (SNS) topic that AWS Firewall Manager uses to record SNS logs.
   */
  putNotificationChannel(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates an AWS Firewall Manager policy. Firewall Manager provides the following types of policies:    A Shield Advanced policy, which applies Shield Advanced protection to specified accounts and resources   An AWS WAF policy (type WAFV2), which defines rule groups to run first in the corresponding AWS WAF web ACL and rule groups to run last in the web ACL.   An AWS WAF Classic policy (type WAF), which defines a rule group.    A security group policy, which manages VPC security groups across your AWS organization.    Each policy is specific to one of the types. If you want to enforce more than one policy type across accounts, create multiple policies. You can create multiple policies for each type. You must be subscribed to Shield Advanced to create a Shield Advanced policy. For more information about subscribing to Shield Advanced, see CreateSubscription.
   */
  putPolicy(params: FMS.Types.PutPolicyRequest, callback?: (err: AWSError, data: FMS.Types.PutPolicyResponse) => void): Request<FMS.Types.PutPolicyResponse, AWSError>;
  /**
   * Creates an AWS Firewall Manager policy. Firewall Manager provides the following types of policies:    A Shield Advanced policy, which applies Shield Advanced protection to specified accounts and resources   An AWS WAF policy (type WAFV2), which defines rule groups to run first in the corresponding AWS WAF web ACL and rule groups to run last in the web ACL.   An AWS WAF Classic policy (type WAF), which defines a rule group.    A security group policy, which manages VPC security groups across your AWS organization.    Each policy is specific to one of the types. If you want to enforce more than one policy type across accounts, create multiple policies. You can create multiple policies for each type. You must be subscribed to Shield Advanced to create a Shield Advanced policy. For more information about subscribing to Shield Advanced, see CreateSubscription.
   */
  putPolicy(callback?: (err: AWSError, data: FMS.Types.PutPolicyResponse) => void): Request<FMS.Types.PutPolicyResponse, AWSError>;
  /**
   * Creates an AWS Firewall Manager protocols list.
   */
  putProtocolsList(params: FMS.Types.PutProtocolsListRequest, callback?: (err: AWSError, data: FMS.Types.PutProtocolsListResponse) => void): Request<FMS.Types.PutProtocolsListResponse, AWSError>;
  /**
   * Creates an AWS Firewall Manager protocols list.
   */
  putProtocolsList(callback?: (err: AWSError, data: FMS.Types.PutProtocolsListResponse) => void): Request<FMS.Types.PutProtocolsListResponse, AWSError>;
  /**
   * Adds one or more tags to an AWS resource.
   */
  tagResource(params: FMS.Types.TagResourceRequest, callback?: (err: AWSError, data: FMS.Types.TagResourceResponse) => void): Request<FMS.Types.TagResourceResponse, AWSError>;
  /**
   * Adds one or more tags to an AWS resource.
   */
  tagResource(callback?: (err: AWSError, data: FMS.Types.TagResourceResponse) => void): Request<FMS.Types.TagResourceResponse, AWSError>;
  /**
   * Removes one or more tags from an AWS resource.
   */
  untagResource(params: FMS.Types.UntagResourceRequest, callback?: (err: AWSError, data: FMS.Types.UntagResourceResponse) => void): Request<FMS.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes one or more tags from an AWS resource.
   */
  untagResource(callback?: (err: AWSError, data: FMS.Types.UntagResourceResponse) => void): Request<FMS.Types.UntagResourceResponse, AWSError>;
}
declare namespace FMS {
  export type AWSAccountId = string;
  export type AccountRoleStatus = "READY"|"CREATING"|"PENDING_DELETION"|"DELETING"|"DELETED"|string;
  export interface App {
    /**
     * The application's name.
     */
    AppName: ResourceName;
    /**
     * The IP protocol name or number. The name can be one of tcp, udp, or icmp. For information on possible numbers, see Protocol Numbers.
     */
    Protocol: Protocol;
    /**
     * The application's port number, for example 80.
     */
    Port: IPPortNumber;
  }
  export type AppsList = App[];
  export interface AppsListData {
    /**
     * The ID of the AWS Firewall Manager applications list.
     */
    ListId?: ListId;
    /**
     * The name of the AWS Firewall Manager applications list.
     */
    ListName: ResourceName;
    /**
     * A unique identifier for each update to the list. When you update the list, the update token must match the token of the current version of the application list. You can retrieve the update token by getting the list. 
     */
    ListUpdateToken?: UpdateToken;
    /**
     * The time that the AWS Firewall Manager applications list was created.
     */
    CreateTime?: TimeStamp;
    /**
     * The time that the AWS Firewall Manager applications list was last updated.
     */
    LastUpdateTime?: TimeStamp;
    /**
     * An array of applications in the AWS Firewall Manager applications list.
     */
    AppsList: AppsList;
    /**
     * A map of previous version numbers to their corresponding App object arrays.
     */
    PreviousAppsList?: PreviousAppsList;
  }
  export interface AppsListDataSummary {
    /**
     * The Amazon Resource Name (ARN) of the applications list.
     */
    ListArn?: ResourceArn;
    /**
     * The ID of the applications list.
     */
    ListId?: ListId;
    /**
     * The name of the applications list.
     */
    ListName?: ResourceName;
    /**
     * An array of App objects in the AWS Firewall Manager applications list.
     */
    AppsList?: AppsList;
  }
  export type AppsListsData = AppsListDataSummary[];
  export interface AssociateAdminAccountRequest {
    /**
     * The AWS account ID to associate with AWS Firewall Manager as the AWS Firewall Manager administrator account. This can be an AWS Organizations master account or a member account. For more information about AWS Organizations and master accounts, see Managing the AWS Accounts in Your Organization. 
     */
    AdminAccount: AWSAccountId;
  }
  export interface AwsEc2InstanceViolation {
    /**
     * The resource ID of the EC2 instance.
     */
    ViolationTarget?: ViolationTarget;
    /**
     * Violations for network interfaces associated with the EC2 instance.
     */
    AwsEc2NetworkInterfaceViolations?: AwsEc2NetworkInterfaceViolations;
  }
  export interface AwsEc2NetworkInterfaceViolation {
    /**
     * The resource ID of the network interface.
     */
    ViolationTarget?: ViolationTarget;
    /**
     * List of security groups that violate the rules specified in the master security group of the AWS Firewall Manager policy.
     */
    ViolatingSecurityGroups?: ResourceIdList;
  }
  export type AwsEc2NetworkInterfaceViolations = AwsEc2NetworkInterfaceViolation[];
  export interface AwsVPCSecurityGroupViolation {
    /**
     * The security group rule that is being evaluated.
     */
    ViolationTarget?: ViolationTarget;
    /**
     * A description of the security group that violates the policy.
     */
    ViolationTargetDescription?: LengthBoundedString;
    /**
     * List of rules specified in the security group of the AWS Firewall Manager policy that partially match the ViolationTarget rule.
     */
    PartialMatches?: PartialMatches;
    /**
     * Remediation options for the rule specified in the ViolationTarget.
     */
    PossibleSecurityGroupRemediationActions?: SecurityGroupRemediationActions;
  }
  export type Boolean = boolean;
  export type CIDR = string;
  export interface ComplianceViolator {
    /**
     * The resource ID.
     */
    ResourceId?: ResourceId;
    /**
     * The reason that the resource is not protected by the policy.
     */
    ViolationReason?: ViolationReason;
    /**
     * The resource type. This is in the format shown in the AWS Resource Types Reference. For example: AWS::ElasticLoadBalancingV2::LoadBalancer or AWS::CloudFront::Distribution.
     */
    ResourceType?: ResourceType;
  }
  export type ComplianceViolators = ComplianceViolator[];
  export type CustomerPolicyScopeId = string;
  export type CustomerPolicyScopeIdList = CustomerPolicyScopeId[];
  export type CustomerPolicyScopeIdType = "ACCOUNT"|"ORG_UNIT"|string;
  export type CustomerPolicyScopeMap = {[key: string]: CustomerPolicyScopeIdList};
  export interface DeleteAppsListRequest {
    /**
     * The ID of the applications list that you want to delete. You can retrieve this ID from PutAppsList, ListAppsLists, and GetAppsList.
     */
    ListId: ListId;
  }
  export interface DeleteNotificationChannelRequest {
  }
  export interface DeletePolicyRequest {
    /**
     * The ID of the policy that you want to delete. You can retrieve this ID from PutPolicy and ListPolicies.
     */
    PolicyId: PolicyId;
    /**
     * If True, the request performs cleanup according to the policy type.  For AWS WAF and Shield Advanced policies, the cleanup does the following:   Deletes rule groups created by AWS Firewall Manager   Removes web ACLs from in-scope resources   Deletes web ACLs that contain no rules or rule groups   For security group policies, the cleanup does the following for each security group in the policy:   Disassociates the security group from in-scope resources    Deletes the security group if it was created through Firewall Manager and if it's no longer associated with any resources through another policy   After the cleanup, in-scope resources are no longer protected by web ACLs in this policy. Protection of out-of-scope resources remains unchanged. Scope is determined by tags that you create and accounts that you associate with the policy. When creating the policy, if you specify that only resources in specific accounts or with specific tags are in scope of the policy, those accounts and resources are handled by the policy. All others are out of scope. If you don't specify tags or accounts, all resources are in scope. 
     */
    DeleteAllPolicyResources?: Boolean;
  }
  export interface DeleteProtocolsListRequest {
    /**
     * The ID of the protocols list that you want to delete. You can retrieve this ID from PutProtocolsList, ListProtocolsLists, and GetProtocolsLost.
     */
    ListId: ListId;
  }
  export type DependentServiceName = "AWSCONFIG"|"AWSWAF"|"AWSSHIELD_ADVANCED"|"AWSVPC"|string;
  export type DetailedInfo = string;
  export interface DisassociateAdminAccountRequest {
  }
  export interface EvaluationResult {
    /**
     * Describes an AWS account's compliance with the AWS Firewall Manager policy.
     */
    ComplianceStatus?: PolicyComplianceStatusType;
    /**
     * The number of resources that are noncompliant with the specified policy. For AWS WAF and Shield Advanced policies, a resource is considered noncompliant if it is not associated with the policy. For security group policies, a resource is considered noncompliant if it doesn't comply with the rules of the policy and remediation is disabled or not possible.
     */
    ViolatorCount?: ResourceCount;
    /**
     * Indicates that over 100 resources are noncompliant with the AWS Firewall Manager policy.
     */
    EvaluationLimitExceeded?: Boolean;
  }
  export type EvaluationResults = EvaluationResult[];
  export interface GetAdminAccountRequest {
  }
  export interface GetAdminAccountResponse {
    /**
     * The AWS account that is set as the AWS Firewall Manager administrator.
     */
    AdminAccount?: AWSAccountId;
    /**
     * The status of the AWS account that you set as the AWS Firewall Manager administrator.
     */
    RoleStatus?: AccountRoleStatus;
  }
  export interface GetAppsListRequest {
    /**
     * The ID of the AWS Firewall Manager applications list that you want the details for.
     */
    ListId: ListId;
    /**
     * Specifies whether the list to retrieve is a default list owned by AWS Firewall Manager.
     */
    DefaultList?: Boolean;
  }
  export interface GetAppsListResponse {
    /**
     * Information about the specified AWS Firewall Manager applications list.
     */
    AppsList?: AppsListData;
    /**
     * The Amazon Resource Name (ARN) of the applications list.
     */
    AppsListArn?: ResourceArn;
  }
  export interface GetComplianceDetailRequest {
    /**
     * The ID of the policy that you want to get the details for. PolicyId is returned by PutPolicy and by ListPolicies.
     */
    PolicyId: PolicyId;
    /**
     * The AWS account that owns the resources that you want to get the details for.
     */
    MemberAccount: AWSAccountId;
  }
  export interface GetComplianceDetailResponse {
    /**
     * Information about the resources and the policy that you specified in the GetComplianceDetail request.
     */
    PolicyComplianceDetail?: PolicyComplianceDetail;
  }
  export interface GetNotificationChannelRequest {
  }
  export interface GetNotificationChannelResponse {
    /**
     * The SNS topic that records AWS Firewall Manager activity. 
     */
    SnsTopicArn?: ResourceArn;
    /**
     * The IAM role that is used by AWS Firewall Manager to record activity to SNS.
     */
    SnsRoleName?: ResourceArn;
  }
  export interface GetPolicyRequest {
    /**
     * The ID of the AWS Firewall Manager policy that you want the details for.
     */
    PolicyId: PolicyId;
  }
  export interface GetPolicyResponse {
    /**
     * Information about the specified AWS Firewall Manager policy.
     */
    Policy?: Policy;
    /**
     * The Amazon Resource Name (ARN) of the specified policy.
     */
    PolicyArn?: ResourceArn;
  }
  export interface GetProtectionStatusRequest {
    /**
     * The ID of the policy for which you want to get the attack information.
     */
    PolicyId: PolicyId;
    /**
     * The AWS account that is in scope of the policy that you want to get the details for.
     */
    MemberAccountId?: AWSAccountId;
    /**
     * The start of the time period to query for the attacks. This is a timestamp type. The request syntax listing indicates a number type because the default used by AWS Firewall Manager is Unix time in seconds. However, any valid timestamp format is allowed.
     */
    StartTime?: TimeStamp;
    /**
     * The end of the time period to query for the attacks. This is a timestamp type. The request syntax listing indicates a number type because the default used by AWS Firewall Manager is Unix time in seconds. However, any valid timestamp format is allowed.
     */
    EndTime?: TimeStamp;
    /**
     * If you specify a value for MaxResults and you have more objects than the number that you specify for MaxResults, AWS Firewall Manager returns a NextToken value in the response, which you can use to retrieve another group of objects. For the second and subsequent GetProtectionStatus requests, specify the value of NextToken from the previous response to get information about another batch of objects.
     */
    NextToken?: PaginationToken;
    /**
     * Specifies the number of objects that you want AWS Firewall Manager to return for this request. If you have more objects than the number that you specify for MaxResults, the response includes a NextToken value that you can use to get another batch of objects.
     */
    MaxResults?: PaginationMaxResults;
  }
  export interface GetProtectionStatusResponse {
    /**
     * The ID of the AWS Firewall administrator account for this policy.
     */
    AdminAccountId?: AWSAccountId;
    /**
     * The service type that is protected by the policy. Currently, this is always SHIELD_ADVANCED.
     */
    ServiceType?: SecurityServiceType;
    /**
     * Details about the attack, including the following:   Attack type   Account ID   ARN of the resource attacked   Start time of the attack   End time of the attack (ongoing attacks will not have an end time)   The details are in JSON format. 
     */
    Data?: ProtectionData;
    /**
     * If you have more objects than the number that you specified for MaxResults in the request, the response includes a NextToken value. To list more objects, submit another GetProtectionStatus request, and specify the NextToken value from the response in the NextToken value in the next request. AWS SDKs provide auto-pagination that identify NextToken in a response and make subsequent request calls automatically on your behalf. However, this feature is not supported by GetProtectionStatus. You must submit subsequent requests with NextToken using your own processes. 
     */
    NextToken?: PaginationToken;
  }
  export interface GetProtocolsListRequest {
    /**
     * The ID of the AWS Firewall Manager protocols list that you want the details for.
     */
    ListId: ListId;
    /**
     * Specifies whether the list to retrieve is a default list owned by AWS Firewall Manager.
     */
    DefaultList?: Boolean;
  }
  export interface GetProtocolsListResponse {
    /**
     * Information about the specified AWS Firewall Manager protocols list.
     */
    ProtocolsList?: ProtocolsListData;
    /**
     * The Amazon Resource Name (ARN) of the specified protocols list.
     */
    ProtocolsListArn?: ResourceArn;
  }
  export interface GetViolationDetailsRequest {
    /**
     * The ID of the AWS Firewall Manager policy that you want the details for. This currently only supports security group content audit policies.
     */
    PolicyId: PolicyId;
    /**
     * The AWS account ID that you want the details for.
     */
    MemberAccount: AWSAccountId;
    /**
     * The ID of the resource that has violations.
     */
    ResourceId: ResourceId;
    /**
     * The resource type. This is in the format shown in the AWS Resource Types Reference. Supported resource types are: AWS::EC2::Instance, AWS::EC2::NetworkInterface, or AWS::EC2::SecurityGroup. 
     */
    ResourceType: ResourceType;
  }
  export interface GetViolationDetailsResponse {
    /**
     * Violation detail for a resource.
     */
    ViolationDetail?: ViolationDetail;
  }
  export type IPPortNumber = number;
  export type IssueInfoMap = {[key: string]: DetailedInfo};
  export type LengthBoundedString = string;
  export interface ListAppsListsRequest {
    /**
     * Specifies whether the lists to retrieve are default lists owned by AWS Firewall Manager.
     */
    DefaultLists?: Boolean;
    /**
     * If you specify a value for MaxResults in your list request, and you have more objects than the maximum, AWS Firewall Manager returns this token in the response. For all but the first request, you provide the token returned by the prior request in the request parameters, to retrieve the next batch of objects.
     */
    NextToken?: PaginationToken;
    /**
     * The maximum number of objects that you want AWS Firewall Manager to return for this request. If more objects are available, in the response, AWS Firewall Manager provides a NextToken value that you can use in a subsequent call to get the next batch of objects. If you don't specify this, AWS Firewall Manager returns all available objects.
     */
    MaxResults: PaginationMaxResults;
  }
  export interface ListAppsListsResponse {
    /**
     * An array of AppsListDataSummary objects.
     */
    AppsLists?: AppsListsData;
    /**
     * If you specify a value for MaxResults in your list request, and you have more objects than the maximum, AWS Firewall Manager returns this token in the response. You can use this token in subsequent requests to retrieve the next batch of objects.
     */
    NextToken?: PaginationToken;
  }
  export interface ListComplianceStatusRequest {
    /**
     * The ID of the AWS Firewall Manager policy that you want the details for.
     */
    PolicyId: PolicyId;
    /**
     * If you specify a value for MaxResults and you have more PolicyComplianceStatus objects than the number that you specify for MaxResults, AWS Firewall Manager returns a NextToken value in the response that allows you to list another group of PolicyComplianceStatus objects. For the second and subsequent ListComplianceStatus requests, specify the value of NextToken from the previous response to get information about another batch of PolicyComplianceStatus objects.
     */
    NextToken?: PaginationToken;
    /**
     * Specifies the number of PolicyComplianceStatus objects that you want AWS Firewall Manager to return for this request. If you have more PolicyComplianceStatus objects than the number that you specify for MaxResults, the response includes a NextToken value that you can use to get another batch of PolicyComplianceStatus objects.
     */
    MaxResults?: PaginationMaxResults;
  }
  export interface ListComplianceStatusResponse {
    /**
     * An array of PolicyComplianceStatus objects.
     */
    PolicyComplianceStatusList?: PolicyComplianceStatusList;
    /**
     * If you have more PolicyComplianceStatus objects than the number that you specified for MaxResults in the request, the response includes a NextToken value. To list more PolicyComplianceStatus objects, submit another ListComplianceStatus request, and specify the NextToken value from the response in the NextToken value in the next request.
     */
    NextToken?: PaginationToken;
  }
  export type ListId = string;
  export interface ListMemberAccountsRequest {
    /**
     * If you specify a value for MaxResults and you have more account IDs than the number that you specify for MaxResults, AWS Firewall Manager returns a NextToken value in the response that allows you to list another group of IDs. For the second and subsequent ListMemberAccountsRequest requests, specify the value of NextToken from the previous response to get information about another batch of member account IDs.
     */
    NextToken?: PaginationToken;
    /**
     * Specifies the number of member account IDs that you want AWS Firewall Manager to return for this request. If you have more IDs than the number that you specify for MaxResults, the response includes a NextToken value that you can use to get another batch of member account IDs.
     */
    MaxResults?: PaginationMaxResults;
  }
  export interface ListMemberAccountsResponse {
    /**
     * An array of account IDs.
     */
    MemberAccounts?: MemberAccounts;
    /**
     * If you have more member account IDs than the number that you specified for MaxResults in the request, the response includes a NextToken value. To list more IDs, submit another ListMemberAccounts request, and specify the NextToken value from the response in the NextToken value in the next request.
     */
    NextToken?: PaginationToken;
  }
  export interface ListPoliciesRequest {
    /**
     * If you specify a value for MaxResults and you have more PolicySummary objects than the number that you specify for MaxResults, AWS Firewall Manager returns a NextToken value in the response that allows you to list another group of PolicySummary objects. For the second and subsequent ListPolicies requests, specify the value of NextToken from the previous response to get information about another batch of PolicySummary objects.
     */
    NextToken?: PaginationToken;
    /**
     * Specifies the number of PolicySummary objects that you want AWS Firewall Manager to return for this request. If you have more PolicySummary objects than the number that you specify for MaxResults, the response includes a NextToken value that you can use to get another batch of PolicySummary objects.
     */
    MaxResults?: PaginationMaxResults;
  }
  export interface ListPoliciesResponse {
    /**
     * An array of PolicySummary objects.
     */
    PolicyList?: PolicySummaryList;
    /**
     * If you have more PolicySummary objects than the number that you specified for MaxResults in the request, the response includes a NextToken value. To list more PolicySummary objects, submit another ListPolicies request, and specify the NextToken value from the response in the NextToken value in the next request.
     */
    NextToken?: PaginationToken;
  }
  export interface ListProtocolsListsRequest {
    /**
     * Specifies whether the lists to retrieve are default lists owned by AWS Firewall Manager.
     */
    DefaultLists?: Boolean;
    /**
     * If you specify a value for MaxResults in your list request, and you have more objects than the maximum, AWS Firewall Manager returns this token in the response. For all but the first request, you provide the token returned by the prior request in the request parameters, to retrieve the next batch of objects.
     */
    NextToken?: PaginationToken;
    /**
     * The maximum number of objects that you want AWS Firewall Manager to return for this request. If more objects are available, in the response, AWS Firewall Manager provides a NextToken value that you can use in a subsequent call to get the next batch of objects. If you don't specify this, AWS Firewall Manager returns all available objects.
     */
    MaxResults: PaginationMaxResults;
  }
  export interface ListProtocolsListsResponse {
    /**
     * An array of ProtocolsListDataSummary objects.
     */
    ProtocolsLists?: ProtocolsListsData;
    /**
     * If you specify a value for MaxResults in your list request, and you have more objects than the maximum, AWS Firewall Manager returns this token in the response. You can use this token in subsequent requests to retrieve the next batch of objects.
     */
    NextToken?: PaginationToken;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource to return tags for. The AWS Firewall Manager resources that support tagging are policies, applications lists, and protocols lists. 
     */
    ResourceArn: ResourceArn;
  }
  export interface ListTagsForResourceResponse {
    /**
     * The tags associated with the resource.
     */
    TagList?: TagList;
  }
  export type ManagedServiceData = string;
  export type MemberAccounts = AWSAccountId[];
  export type PaginationMaxResults = number;
  export type PaginationToken = string;
  export interface PartialMatch {
    /**
     * The reference rule from the master security group of the AWS Firewall Manager policy.
     */
    Reference?: ReferenceRule;
    /**
     * The violation reason.
     */
    TargetViolationReasons?: TargetViolationReasons;
  }
  export type PartialMatches = PartialMatch[];
  export interface Policy {
    /**
     * The ID of the AWS Firewall Manager policy.
     */
    PolicyId?: PolicyId;
    /**
     * The name of the AWS Firewall Manager policy.
     */
    PolicyName: ResourceName;
    /**
     * A unique identifier for each update to the policy. When issuing a PutPolicy request, the PolicyUpdateToken in the request must match the PolicyUpdateToken of the current policy version. To get the PolicyUpdateToken of the current policy version, use a GetPolicy request.
     */
    PolicyUpdateToken?: PolicyUpdateToken;
    /**
     * Details about the security service that is being used to protect the resources.
     */
    SecurityServicePolicyData: SecurityServicePolicyData;
    /**
     * The type of resource protected by or in scope of the policy. This is in the format shown in the AWS Resource Types Reference. For AWS WAF and Shield Advanced, examples include AWS::ElasticLoadBalancingV2::LoadBalancer and AWS::CloudFront::Distribution. For a security group common policy, valid values are AWS::EC2::NetworkInterface and AWS::EC2::Instance. For a security group content audit policy, valid values are AWS::EC2::SecurityGroup, AWS::EC2::NetworkInterface, and AWS::EC2::Instance. For a security group usage audit policy, the value is AWS::EC2::SecurityGroup. 
     */
    ResourceType: ResourceType;
    /**
     * An array of ResourceType.
     */
    ResourceTypeList?: ResourceTypeList;
    /**
     * An array of ResourceTag objects.
     */
    ResourceTags?: ResourceTags;
    /**
     * If set to True, resources with the tags that are specified in the ResourceTag array are not in scope of the policy. If set to False, and the ResourceTag array is not null, only resources with the specified tags are in scope of the policy.
     */
    ExcludeResourceTags: Boolean;
    /**
     * Indicates if the policy should be automatically applied to new resources.
     */
    RemediationEnabled: Boolean;
    /**
     * Specifies the AWS account IDs and AWS Organizations organizational units (OUs) to include in the policy. Specifying an OU is the equivalent of specifying all accounts in the OU and in any of its child OUs, including any child OUs and accounts that are added at a later time. You can specify inclusions or exclusions, but not both. If you specify an IncludeMap, AWS Firewall Manager applies the policy to all accounts specified by the IncludeMap, and does not evaluate any ExcludeMap specifications. If you do not specify an IncludeMap, then Firewall Manager applies the policy to all accounts except for those specified by the ExcludeMap. You can specify account IDs, OUs, or a combination:    Specify account IDs by setting the key to ACCOUNT. For example, the following is a valid map: {“ACCOUNT” : [“accountID1”, “accountID2”]}.   Specify OUs by setting the key to ORG_UNIT. For example, the following is a valid map: {“ORG_UNIT” : [“ouid111”, “ouid112”]}.   Specify accounts and OUs together in a single map, separated with a comma. For example, the following is a valid map: {“ACCOUNT” : [“accountID1”, “accountID2”], “ORG_UNIT” : [“ouid111”, “ouid112”]}.  
     */
    IncludeMap?: CustomerPolicyScopeMap;
    /**
     * Specifies the AWS account IDs and AWS Organizations organizational units (OUs) to exclude from the policy. Specifying an OU is the equivalent of specifying all accounts in the OU and in any of its child OUs, including any child OUs and accounts that are added at a later time. You can specify inclusions or exclusions, but not both. If you specify an IncludeMap, AWS Firewall Manager applies the policy to all accounts specified by the IncludeMap, and does not evaluate any ExcludeMap specifications. If you do not specify an IncludeMap, then Firewall Manager applies the policy to all accounts except for those specified by the ExcludeMap. You can specify account IDs, OUs, or a combination:    Specify account IDs by setting the key to ACCOUNT. For example, the following is a valid map: {“ACCOUNT” : [“accountID1”, “accountID2”]}.   Specify OUs by setting the key to ORG_UNIT. For example, the following is a valid map: {“ORG_UNIT” : [“ouid111”, “ouid112”]}.   Specify accounts and OUs together in a single map, separated with a comma. For example, the following is a valid map: {“ACCOUNT” : [“accountID1”, “accountID2”], “ORG_UNIT” : [“ouid111”, “ouid112”]}.  
     */
    ExcludeMap?: CustomerPolicyScopeMap;
  }
  export interface PolicyComplianceDetail {
    /**
     * The AWS account that created the AWS Firewall Manager policy.
     */
    PolicyOwner?: AWSAccountId;
    /**
     * The ID of the AWS Firewall Manager policy.
     */
    PolicyId?: PolicyId;
    /**
     * The AWS account ID.
     */
    MemberAccount?: AWSAccountId;
    /**
     * An array of resources that aren't protected by the AWS WAF or Shield Advanced policy or that aren't in compliance with the security group policy.
     */
    Violators?: ComplianceViolators;
    /**
     * Indicates if over 100 resources are noncompliant with the AWS Firewall Manager policy.
     */
    EvaluationLimitExceeded?: Boolean;
    /**
     * A timestamp that indicates when the returned information should be considered out of date.
     */
    ExpiredAt?: TimeStamp;
    /**
     * Details about problems with dependent services, such as AWS WAF or AWS Config, that are causing a resource to be noncompliant. The details include the name of the dependent service and the error message received that indicates the problem with the service.
     */
    IssueInfoMap?: IssueInfoMap;
  }
  export interface PolicyComplianceStatus {
    /**
     * The AWS account that created the AWS Firewall Manager policy.
     */
    PolicyOwner?: AWSAccountId;
    /**
     * The ID of the AWS Firewall Manager policy.
     */
    PolicyId?: PolicyId;
    /**
     * The name of the AWS Firewall Manager policy.
     */
    PolicyName?: ResourceName;
    /**
     * The member account ID.
     */
    MemberAccount?: AWSAccountId;
    /**
     * An array of EvaluationResult objects.
     */
    EvaluationResults?: EvaluationResults;
    /**
     * Timestamp of the last update to the EvaluationResult objects.
     */
    LastUpdated?: TimeStamp;
    /**
     * Details about problems with dependent services, such as AWS WAF or AWS Config, that are causing a resource to be noncompliant. The details include the name of the dependent service and the error message received that indicates the problem with the service.
     */
    IssueInfoMap?: IssueInfoMap;
  }
  export type PolicyComplianceStatusList = PolicyComplianceStatus[];
  export type PolicyComplianceStatusType = "COMPLIANT"|"NON_COMPLIANT"|string;
  export type PolicyId = string;
  export interface PolicySummary {
    /**
     * The Amazon Resource Name (ARN) of the specified policy.
     */
    PolicyArn?: ResourceArn;
    /**
     * The ID of the specified policy.
     */
    PolicyId?: PolicyId;
    /**
     * The name of the specified policy.
     */
    PolicyName?: ResourceName;
    /**
     * The type of resource protected by or in scope of the policy. This is in the format shown in the AWS Resource Types Reference. For AWS WAF and Shield Advanced, examples include AWS::ElasticLoadBalancingV2::LoadBalancer and AWS::CloudFront::Distribution. For a security group common policy, valid values are AWS::EC2::NetworkInterface and AWS::EC2::Instance. For a security group content audit policy, valid values are AWS::EC2::SecurityGroup, AWS::EC2::NetworkInterface, and AWS::EC2::Instance. For a security group usage audit policy, the value is AWS::EC2::SecurityGroup. 
     */
    ResourceType?: ResourceType;
    /**
     * The service that the policy is using to protect the resources. This specifies the type of policy that is created, either an AWS WAF policy, a Shield Advanced policy, or a security group policy.
     */
    SecurityServiceType?: SecurityServiceType;
    /**
     * Indicates if the policy should be automatically applied to new resources.
     */
    RemediationEnabled?: Boolean;
  }
  export type PolicySummaryList = PolicySummary[];
  export type PolicyUpdateToken = string;
  export type PreviousAppsList = {[key: string]: AppsList};
  export type PreviousListVersion = string;
  export type PreviousProtocolsList = {[key: string]: ProtocolsList};
  export type ProtectionData = string;
  export type Protocol = string;
  export type ProtocolsList = Protocol[];
  export interface ProtocolsListData {
    /**
     * The ID of the AWS Firewall Manager protocols list.
     */
    ListId?: ListId;
    /**
     * The name of the AWS Firewall Manager protocols list.
     */
    ListName: ResourceName;
    /**
     * A unique identifier for each update to the list. When you update the list, the update token must match the token of the current version of the application list. You can retrieve the update token by getting the list. 
     */
    ListUpdateToken?: UpdateToken;
    /**
     * The time that the AWS Firewall Manager protocols list was created.
     */
    CreateTime?: TimeStamp;
    /**
     * The time that the AWS Firewall Manager protocols list was last updated.
     */
    LastUpdateTime?: TimeStamp;
    /**
     * An array of protocols in the AWS Firewall Manager protocols list.
     */
    ProtocolsList: ProtocolsList;
    /**
     * A map of previous version numbers to their corresponding protocol arrays.
     */
    PreviousProtocolsList?: PreviousProtocolsList;
  }
  export interface ProtocolsListDataSummary {
    /**
     * The Amazon Resource Name (ARN) of the specified protocols list.
     */
    ListArn?: ResourceArn;
    /**
     * The ID of the specified protocols list.
     */
    ListId?: ListId;
    /**
     * The name of the specified protocols list.
     */
    ListName?: ResourceName;
    /**
     * An array of protocols in the AWS Firewall Manager protocols list.
     */
    ProtocolsList?: ProtocolsList;
  }
  export type ProtocolsListsData = ProtocolsListDataSummary[];
  export interface PutAppsListRequest {
    /**
     * The details of the AWS Firewall Manager applications list to be created.
     */
    AppsList: AppsListData;
    /**
     * The tags associated with the resource.
     */
    TagList?: TagList;
  }
  export interface PutAppsListResponse {
    /**
     * The details of the AWS Firewall Manager applications list.
     */
    AppsList?: AppsListData;
    /**
     * The Amazon Resource Name (ARN) of the applications list.
     */
    AppsListArn?: ResourceArn;
  }
  export interface PutNotificationChannelRequest {
    /**
     * The Amazon Resource Name (ARN) of the SNS topic that collects notifications from AWS Firewall Manager.
     */
    SnsTopicArn: ResourceArn;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that allows Amazon SNS to record AWS Firewall Manager activity. 
     */
    SnsRoleName: ResourceArn;
  }
  export interface PutPolicyRequest {
    /**
     * The details of the AWS Firewall Manager policy to be created.
     */
    Policy: Policy;
    /**
     * The tags to add to the AWS resource.
     */
    TagList?: TagList;
  }
  export interface PutPolicyResponse {
    /**
     * The details of the AWS Firewall Manager policy.
     */
    Policy?: Policy;
    /**
     * The Amazon Resource Name (ARN) of the policy.
     */
    PolicyArn?: ResourceArn;
  }
  export interface PutProtocolsListRequest {
    /**
     * The details of the AWS Firewall Manager protocols list to be created.
     */
    ProtocolsList: ProtocolsListData;
    /**
     * The tags associated with the resource.
     */
    TagList?: TagList;
  }
  export interface PutProtocolsListResponse {
    /**
     * The details of the AWS Firewall Manager protocols list.
     */
    ProtocolsList?: ProtocolsListData;
    /**
     * The Amazon Resource Name (ARN) of the protocols list.
     */
    ProtocolsListArn?: ResourceArn;
  }
  export type ReferenceRule = string;
  export type RemediationActionDescription = string;
  export type RemediationActionType = "REMOVE"|"MODIFY"|string;
  export type ResourceArn = string;
  export type ResourceCount = number;
  export type ResourceId = string;
  export type ResourceIdList = ResourceId[];
  export type ResourceName = string;
  export interface ResourceTag {
    /**
     * The resource tag key.
     */
    Key: ResourceTagKey;
    /**
     * The resource tag value.
     */
    Value?: ResourceTagValue;
  }
  export type ResourceTagKey = string;
  export type ResourceTagValue = string;
  export type ResourceTags = ResourceTag[];
  export type ResourceType = string;
  export type ResourceTypeList = ResourceType[];
  export interface ResourceViolation {
    /**
     * Violation details for security groups.
     */
    AwsVPCSecurityGroupViolation?: AwsVPCSecurityGroupViolation;
    /**
     * Violation details for network interface.
     */
    AwsEc2NetworkInterfaceViolation?: AwsEc2NetworkInterfaceViolation;
    /**
     * Violation details for an EC2 instance.
     */
    AwsEc2InstanceViolation?: AwsEc2InstanceViolation;
  }
  export type ResourceViolations = ResourceViolation[];
  export interface SecurityGroupRemediationAction {
    /**
     * The remediation action that will be performed.
     */
    RemediationActionType?: RemediationActionType;
    /**
     * Brief description of the action that will be performed.
     */
    Description?: RemediationActionDescription;
    /**
     * The final state of the rule specified in the ViolationTarget after it is remediated.
     */
    RemediationResult?: SecurityGroupRuleDescription;
    /**
     * Indicates if the current action is the default action.
     */
    IsDefaultAction?: Boolean;
  }
  export type SecurityGroupRemediationActions = SecurityGroupRemediationAction[];
  export interface SecurityGroupRuleDescription {
    /**
     * The IPv4 ranges for the security group rule.
     */
    IPV4Range?: CIDR;
    /**
     * The IPv6 ranges for the security group rule.
     */
    IPV6Range?: CIDR;
    /**
     * The ID of the prefix list for the security group rule.
     */
    PrefixListId?: ResourceId;
    /**
     * The IP protocol name (tcp, udp, icmp, icmpv6) or number.
     */
    Protocol?: LengthBoundedString;
    /**
     * The start of the port range for the TCP and UDP protocols, or an ICMP/ICMPv6 type number. A value of -1 indicates all ICMP/ICMPv6 types.
     */
    FromPort?: IPPortNumber;
    /**
     * The end of the port range for the TCP and UDP protocols, or an ICMP/ICMPv6 code. A value of -1 indicates all ICMP/ICMPv6 codes.
     */
    ToPort?: IPPortNumber;
  }
  export interface SecurityServicePolicyData {
    /**
     * The service that the policy is using to protect the resources. This specifies the type of policy that is created, either an AWS WAF policy, a Shield Advanced policy, or a security group policy. For security group policies, Firewall Manager supports one security group for each common policy and for each content audit policy. This is an adjustable limit that you can increase by contacting AWS Support.
     */
    Type: SecurityServiceType;
    /**
     * Details about the service that are specific to the service type, in JSON format. For service type SHIELD_ADVANCED, this is an empty string.   Example: WAFV2   "ManagedServiceData": "{\"type\":\"WAFV2\",\"defaultAction\":{\"type\":\"ALLOW\"},\"preProcessRuleGroups\":[{\"managedRuleGroupIdentifier\":null,\"ruleGroupArn\":\"rulegrouparn\",\"overrideAction\":{\"type\":\"COUNT\"},\"excludeRules\":[{\"name\":\"EntityName\"}],\"ruleGroupType\":\"RuleGroup\"}],\"postProcessRuleGroups\":[{\"managedRuleGroupIdentifier\":{\"managedRuleGroupName\":\"AWSManagedRulesAdminProtectionRuleSet\",\"vendorName\":\"AWS\"},\"ruleGroupArn\":\"rulegrouparn\",\"overrideAction\":{\"type\":\"NONE\"},\"excludeRules\":[],\"ruleGroupType\":\"ManagedRuleGroup\"}],\"overrideCustomerWebACLAssociation\":false}"    Example: WAF Classic   "ManagedServiceData": "{\"type\": \"WAF\", \"ruleGroups\": [{\"id\": \"12345678-1bcd-9012-efga-0987654321ab\", \"overrideAction\" : {\"type\": \"COUNT\"}}], \"defaultAction\": {\"type\": \"BLOCK\"}}    Example: SECURITY_GROUPS_COMMON   "SecurityServicePolicyData":{"Type":"SECURITY_GROUPS_COMMON","ManagedServiceData":"{\"type\":\"SECURITY_GROUPS_COMMON\",\"revertManualSecurityGroupChanges\":false,\"exclusiveResourceSecurityGroupManagement\":false, \"applyToAllEC2InstanceENIs\":false,\"securityGroups\":[{\"id\":\" sg-000e55995d61a06bd\"}]}"},"RemediationEnabled":false,"ResourceType":"AWS::EC2::NetworkInterface"}    Example: SECURITY_GROUPS_CONTENT_AUDIT   "SecurityServicePolicyData":{"Type":"SECURITY_GROUPS_CONTENT_AUDIT","ManagedServiceData":"{\"type\":\"SECURITY_GROUPS_CONTENT_AUDIT\",\"securityGroups\":[{\"id\":\" sg-000e55995d61a06bd \"}],\"securityGroupAction\":{\"type\":\"ALLOW\"}}"},"RemediationEnabled":false,"ResourceType":"AWS::EC2::NetworkInterface"}  The security group action for content audit can be ALLOW or DENY. For ALLOW, all in-scope security group rules must be within the allowed range of the policy's security group rules. For DENY, all in-scope security group rules must not contain a value or a range that matches a rule value or range in the policy security group.   Example: SECURITY_GROUPS_USAGE_AUDIT   "SecurityServicePolicyData":{"Type":"SECURITY_GROUPS_USAGE_AUDIT","ManagedServiceData":"{\"type\":\"SECURITY_GROUPS_USAGE_AUDIT\",\"deleteUnusedSecurityGroups\":true,\"coalesceRedundantSecurityGroups\":true}"},"RemediationEnabled":false,"Resou rceType":"AWS::EC2::SecurityGroup"}   
     */
    ManagedServiceData?: ManagedServiceData;
  }
  export type SecurityServiceType = "WAF"|"WAFV2"|"SHIELD_ADVANCED"|"SECURITY_GROUPS_COMMON"|"SECURITY_GROUPS_CONTENT_AUDIT"|"SECURITY_GROUPS_USAGE_AUDIT"|string;
  export interface Tag {
    /**
     * Part of the key:value pair that defines a tag. You can use a tag key to describe a category of information, such as "customer." Tag keys are case-sensitive.
     */
    Key: TagKey;
    /**
     * Part of the key:value pair that defines a tag. You can use a tag value to describe a specific value within a category, such as "companyA" or "companyB." Tag values are case-sensitive. 
     */
    Value: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource to return tags for. The AWS Firewall Manager resources that support tagging are policies, applications lists, and protocols lists. 
     */
    ResourceArn: ResourceArn;
    /**
     * The tags to add to the resource.
     */
    TagList: TagList;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type TargetViolationReason = string;
  export type TargetViolationReasons = TargetViolationReason[];
  export type TimeStamp = Date;
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource to return tags for. The AWS Firewall Manager resources that support tagging are policies, applications lists, and protocols lists. 
     */
    ResourceArn: ResourceArn;
    /**
     * The keys of the tags to remove from the resource. 
     */
    TagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export type UpdateToken = string;
  export interface ViolationDetail {
    /**
     * The ID of the AWS Firewall Manager policy that the violation details were requested for.
     */
    PolicyId: PolicyId;
    /**
     * The AWS account that the violation details were requested for.
     */
    MemberAccount: AWSAccountId;
    /**
     * The resource ID that the violation details were requested for.
     */
    ResourceId: ResourceId;
    /**
     * The resource type that the violation details were requested for.
     */
    ResourceType: ResourceType;
    /**
     * List of violations for the requested resource.
     */
    ResourceViolations: ResourceViolations;
    /**
     * The ResourceTag objects associated with the resource.
     */
    ResourceTags?: TagList;
    /**
     * Brief description for the requested resource.
     */
    ResourceDescription?: LengthBoundedString;
  }
  export type ViolationReason = "WEB_ACL_MISSING_RULE_GROUP"|"RESOURCE_MISSING_WEB_ACL"|"RESOURCE_INCORRECT_WEB_ACL"|"RESOURCE_MISSING_SHIELD_PROTECTION"|"RESOURCE_MISSING_WEB_ACL_OR_SHIELD_PROTECTION"|"RESOURCE_MISSING_SECURITY_GROUP"|"RESOURCE_VIOLATES_AUDIT_SECURITY_GROUP"|"SECURITY_GROUP_UNUSED"|"SECURITY_GROUP_REDUNDANT"|string;
  export type ViolationTarget = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-01-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the FMS client.
   */
  export import Types = FMS;
}
export = FMS;
