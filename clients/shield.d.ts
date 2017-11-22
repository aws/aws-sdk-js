import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class Shield extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Shield.Types.ClientConfiguration)
  config: Config & Shield.Types.ClientConfiguration;
  /**
   * Enables AWS Shield Advanced for a specific AWS resource. The resource can be an Amazon CloudFront distribution, Elastic Load Balancing load balancer, Elastic IP Address, or an Amazon Route 53 hosted zone.
   */
  createProtection(params: Shield.Types.CreateProtectionRequest, callback?: (err: AWSError, data: Shield.Types.CreateProtectionResponse) => void): Request<Shield.Types.CreateProtectionResponse, AWSError>;
  /**
   * Enables AWS Shield Advanced for a specific AWS resource. The resource can be an Amazon CloudFront distribution, Elastic Load Balancing load balancer, Elastic IP Address, or an Amazon Route 53 hosted zone.
   */
  createProtection(callback?: (err: AWSError, data: Shield.Types.CreateProtectionResponse) => void): Request<Shield.Types.CreateProtectionResponse, AWSError>;
  /**
   * Activates AWS Shield Advanced for an account.
   */
  createSubscription(params: Shield.Types.CreateSubscriptionRequest, callback?: (err: AWSError, data: Shield.Types.CreateSubscriptionResponse) => void): Request<Shield.Types.CreateSubscriptionResponse, AWSError>;
  /**
   * Activates AWS Shield Advanced for an account.
   */
  createSubscription(callback?: (err: AWSError, data: Shield.Types.CreateSubscriptionResponse) => void): Request<Shield.Types.CreateSubscriptionResponse, AWSError>;
  /**
   * Deletes an AWS Shield Advanced Protection.
   */
  deleteProtection(params: Shield.Types.DeleteProtectionRequest, callback?: (err: AWSError, data: Shield.Types.DeleteProtectionResponse) => void): Request<Shield.Types.DeleteProtectionResponse, AWSError>;
  /**
   * Deletes an AWS Shield Advanced Protection.
   */
  deleteProtection(callback?: (err: AWSError, data: Shield.Types.DeleteProtectionResponse) => void): Request<Shield.Types.DeleteProtectionResponse, AWSError>;
  /**
   * Removes AWS Shield Advanced from an account. AWS Shield Advanced requires a 1-year subscription commitment. You cannot delete a subscription prior to the completion of that commitment. 
   */
  deleteSubscription(params: Shield.Types.DeleteSubscriptionRequest, callback?: (err: AWSError, data: Shield.Types.DeleteSubscriptionResponse) => void): Request<Shield.Types.DeleteSubscriptionResponse, AWSError>;
  /**
   * Removes AWS Shield Advanced from an account. AWS Shield Advanced requires a 1-year subscription commitment. You cannot delete a subscription prior to the completion of that commitment. 
   */
  deleteSubscription(callback?: (err: AWSError, data: Shield.Types.DeleteSubscriptionResponse) => void): Request<Shield.Types.DeleteSubscriptionResponse, AWSError>;
  /**
   * Describes the details of a DDoS attack. 
   */
  describeAttack(params: Shield.Types.DescribeAttackRequest, callback?: (err: AWSError, data: Shield.Types.DescribeAttackResponse) => void): Request<Shield.Types.DescribeAttackResponse, AWSError>;
  /**
   * Describes the details of a DDoS attack. 
   */
  describeAttack(callback?: (err: AWSError, data: Shield.Types.DescribeAttackResponse) => void): Request<Shield.Types.DescribeAttackResponse, AWSError>;
  /**
   * Lists the details of a Protection object.
   */
  describeProtection(params: Shield.Types.DescribeProtectionRequest, callback?: (err: AWSError, data: Shield.Types.DescribeProtectionResponse) => void): Request<Shield.Types.DescribeProtectionResponse, AWSError>;
  /**
   * Lists the details of a Protection object.
   */
  describeProtection(callback?: (err: AWSError, data: Shield.Types.DescribeProtectionResponse) => void): Request<Shield.Types.DescribeProtectionResponse, AWSError>;
  /**
   * Provides details about the AWS Shield Advanced subscription for an account.
   */
  describeSubscription(params: Shield.Types.DescribeSubscriptionRequest, callback?: (err: AWSError, data: Shield.Types.DescribeSubscriptionResponse) => void): Request<Shield.Types.DescribeSubscriptionResponse, AWSError>;
  /**
   * Provides details about the AWS Shield Advanced subscription for an account.
   */
  describeSubscription(callback?: (err: AWSError, data: Shield.Types.DescribeSubscriptionResponse) => void): Request<Shield.Types.DescribeSubscriptionResponse, AWSError>;
  /**
   * Returns the SubscriptionState, either Active or Inactive.
   */
  getSubscriptionState(params: Shield.Types.GetSubscriptionStateRequest, callback?: (err: AWSError, data: Shield.Types.GetSubscriptionStateResponse) => void): Request<Shield.Types.GetSubscriptionStateResponse, AWSError>;
  /**
   * Returns the SubscriptionState, either Active or Inactive.
   */
  getSubscriptionState(callback?: (err: AWSError, data: Shield.Types.GetSubscriptionStateResponse) => void): Request<Shield.Types.GetSubscriptionStateResponse, AWSError>;
  /**
   * Returns all ongoing DDoS attacks or all DDoS attacks during a specified time period.
   */
  listAttacks(params: Shield.Types.ListAttacksRequest, callback?: (err: AWSError, data: Shield.Types.ListAttacksResponse) => void): Request<Shield.Types.ListAttacksResponse, AWSError>;
  /**
   * Returns all ongoing DDoS attacks or all DDoS attacks during a specified time period.
   */
  listAttacks(callback?: (err: AWSError, data: Shield.Types.ListAttacksResponse) => void): Request<Shield.Types.ListAttacksResponse, AWSError>;
  /**
   * Lists all Protection objects for the account.
   */
  listProtections(params: Shield.Types.ListProtectionsRequest, callback?: (err: AWSError, data: Shield.Types.ListProtectionsResponse) => void): Request<Shield.Types.ListProtectionsResponse, AWSError>;
  /**
   * Lists all Protection objects for the account.
   */
  listProtections(callback?: (err: AWSError, data: Shield.Types.ListProtectionsResponse) => void): Request<Shield.Types.ListProtectionsResponse, AWSError>;
}
declare namespace Shield {
  export interface AttackDetail {
    /**
     * The unique identifier (ID) of the attack.
     */
    AttackId?: AttackId;
    /**
     * The ARN (Amazon Resource Name) of the resource that was attacked.
     */
    ResourceArn?: ResourceArn;
    /**
     * If applicable, additional detail about the resource being attacked, for example, IP address or URL.
     */
    SubResources?: SubResourceSummaryList;
    /**
     * The time the attack started, in Unix time in seconds. For more information see timestamp.
     */
    StartTime?: AttackTimestamp;
    /**
     * The time the attack ended, in Unix time in seconds. For more information see timestamp.
     */
    EndTime?: AttackTimestamp;
    /**
     * List of counters that describe the attack for the specified time period.
     */
    AttackCounters?: SummarizedCounterList;
    /**
     * The array of AttackProperty objects.
     */
    AttackProperties?: AttackProperties;
    /**
     * List of mitigation actions taken for the attack.
     */
    Mitigations?: MitigationList;
  }
  export type AttackId = string;
  export type AttackLayer = "NETWORK"|"APPLICATION"|string;
  export type AttackProperties = AttackProperty[];
  export interface AttackProperty {
    /**
     * The type of DDoS event that was observed. NETWORK indicates layer 3 and layer 4 events and APPLICATION indicates layer 7 events.
     */
    AttackLayer?: AttackLayer;
    /**
     * Defines the DDoS attack property information that is provided.
     */
    AttackPropertyIdentifier?: AttackPropertyIdentifier;
    /**
     * The array of Contributor objects that includes the top five contributors to an attack. 
     */
    TopContributors?: TopContributors;
    /**
     * The unit of the Value of the contributions.
     */
    Unit?: Unit;
    /**
     * The total contributions made to this attack by all contributors, not just the five listed in the TopContributors list.
     */
    Total?: Long;
  }
  export type AttackPropertyIdentifier = "DESTINATION_URL"|"REFERRER"|"SOURCE_ASN"|"SOURCE_COUNTRY"|"SOURCE_IP_ADDRESS"|"SOURCE_USER_AGENT"|string;
  export type AttackSummaries = AttackSummary[];
  export interface AttackSummary {
    /**
     * The unique identifier (ID) of the attack.
     */
    AttackId?: String;
    /**
     * The ARN (Amazon Resource Name) of the resource that was attacked.
     */
    ResourceArn?: String;
    /**
     * The start time of the attack, in Unix time in seconds. For more information see timestamp.
     */
    StartTime?: AttackTimestamp;
    /**
     * The end time of the attack, in Unix time in seconds. For more information see timestamp.
     */
    EndTime?: AttackTimestamp;
    /**
     * The list of attacks for a specified time period.
     */
    AttackVectors?: AttackVectorDescriptionList;
  }
  export type AttackTimestamp = Date;
  export interface AttackVectorDescription {
    /**
     * The attack type. Valid values:   UDP_TRAFFIC   UDP_FRAGMENT   GENERIC_UDP_REFLECTION   DNS_REFLECTION   NTP_REFLECTION   CHARGEN_REFLECTION   SSDP_REFLECTION   PORT_MAPPER   RIP_REFLECTION   SNMP_REFLECTION   MSSQL_REFLECTION   NET_BIOS_REFLECTION   SYN_FLOOD   ACK_FLOOD   REQUEST_FLOOD  
     */
    VectorType: String;
  }
  export type AttackVectorDescriptionList = AttackVectorDescription[];
  export interface Contributor {
    /**
     * The name of the contributor. This is dependent on the AttackPropertyIdentifier. For example, if the AttackPropertyIdentifier is SOURCE_COUNTRY, the Name could be United States.
     */
    Name?: String;
    /**
     * The contribution of this contributor expressed in Protection units. For example 10,000.
     */
    Value?: Long;
  }
  export interface CreateProtectionRequest {
    /**
     * Friendly name for the Protection you are creating.
     */
    Name: ProtectionName;
    /**
     * The ARN (Amazon Resource Name) of the resource to be protected. The ARN should be in one of the following formats:   For an Application Load Balancer: arn:aws:elasticloadbalancing:region:account-id:loadbalancer/app/load-balancer-name/load-balancer-id     For an Elastic Load Balancer (Classic Load Balancer): arn:aws:elasticloadbalancing:region:account-id:loadbalancer/load-balancer-name     For AWS CloudFront distribution: arn:aws:cloudfront::account-id:distribution/distribution-id     For Amazon Route 53: arn:aws:route53::account-id:hostedzone/hosted-zone-id     For an Elastic IP address: arn:aws:ec2:region:account-id:eip-allocation/allocation-id    
     */
    ResourceArn: ResourceArn;
  }
  export interface CreateProtectionResponse {
    /**
     * The unique identifier (ID) for the Protection object that is created.
     */
    ProtectionId?: ProtectionId;
  }
  export interface CreateSubscriptionRequest {
  }
  export interface CreateSubscriptionResponse {
  }
  export interface DeleteProtectionRequest {
    /**
     * The unique identifier (ID) for the Protection object to be deleted.
     */
    ProtectionId: ProtectionId;
  }
  export interface DeleteProtectionResponse {
  }
  export interface DeleteSubscriptionRequest {
  }
  export interface DeleteSubscriptionResponse {
  }
  export interface DescribeAttackRequest {
    /**
     * The unique identifier (ID) for the attack that to be described.
     */
    AttackId: AttackId;
  }
  export interface DescribeAttackResponse {
    /**
     * The attack that is described.
     */
    Attack?: AttackDetail;
  }
  export interface DescribeProtectionRequest {
    /**
     * The unique identifier (ID) for the Protection object that is described.
     */
    ProtectionId: ProtectionId;
  }
  export interface DescribeProtectionResponse {
    /**
     * The Protection object that is described.
     */
    Protection?: Protection;
  }
  export interface DescribeSubscriptionRequest {
  }
  export interface DescribeSubscriptionResponse {
    /**
     * The AWS Shield Advanced subscription details for an account.
     */
    Subscription?: Subscription;
  }
  export type Double = number;
  export type DurationInSeconds = number;
  export interface GetSubscriptionStateRequest {
  }
  export interface GetSubscriptionStateResponse {
    /**
     * The status of the subscription.
     */
    SubscriptionState: SubscriptionState;
  }
  export type Integer = number;
  export type LimitNumber = number;
  export type LimitType = string;
  export interface ListAttacksRequest {
    /**
     * The ARN (Amazon Resource Name) of the resource that was attacked. If this is left blank, all applicable resources for this account will be included.
     */
    ResourceArns?: ResourceArnFilterList;
    /**
     * The start of the time period for the attacks. This is a timestamp type. The sample request above indicates a number type because the default used by WAF is Unix time in seconds. However any valid timestamp format is allowed. 
     */
    StartTime?: TimeRange;
    /**
     * The end of the time period for the attacks. This is a timestamp type. The sample request above indicates a number type because the default used by WAF is Unix time in seconds. However any valid timestamp format is allowed. 
     */
    EndTime?: TimeRange;
    /**
     * The ListAttacksRequest.NextMarker value from a previous call to ListAttacksRequest. Pass null if this is the first call.
     */
    NextToken?: Token;
    /**
     * The maximum number of AttackSummary objects to be returned. If this is left blank, the first 20 results will be returned.
     */
    MaxResults?: MaxResults;
  }
  export interface ListAttacksResponse {
    /**
     * The attack information for the specified time range.
     */
    AttackSummaries?: AttackSummaries;
    /**
     * The token returned by a previous call to indicate that there is more data available. If not null, more results are available. Pass this value for the NextMarker parameter in a subsequent call to ListAttacks to retrieve the next set of items.
     */
    NextToken?: Token;
  }
  export interface ListProtectionsRequest {
    /**
     * The ListProtectionsRequest.NextToken value from a previous call to ListProtections. Pass null if this is the first call.
     */
    NextToken?: Token;
    /**
     * The maximum number of Protection objects to be returned. If this is left blank the first 20 results will be returned.
     */
    MaxResults?: MaxResults;
  }
  export interface ListProtectionsResponse {
    /**
     * The array of enabled Protection objects.
     */
    Protections?: Protections;
    /**
     * If you specify a value for MaxResults and you have more Protections than the value of MaxResults, AWS Shield Advanced returns a NextToken value in the response that allows you to list another group of Protections. For the second and subsequent ListProtections requests, specify the value of NextToken from the previous response to get information about another batch of Protections.
     */
    NextToken?: Token;
  }
  export type Long = number;
  export type MaxResults = number;
  export interface Mitigation {
    /**
     * The name of the mitigation taken for this attack.
     */
    MitigationName?: String;
  }
  export type MitigationList = Mitigation[];
  export interface Protection {
    /**
     * The unique identifier (ID) of the protection.
     */
    Id?: ProtectionId;
    /**
     * The friendly name of the protection. For example, My CloudFront distributions.
     */
    Name?: ProtectionName;
    /**
     * The ARN (Amazon Resource Name) of the AWS resource that is protected.
     */
    ResourceArn?: ResourceArn;
  }
  export type ProtectionId = string;
  export type ProtectionName = string;
  export type Protections = Protection[];
  export type ResourceArn = string;
  export type ResourceArnFilterList = ResourceArn[];
  export type String = string;
  export interface SubResourceSummary {
    /**
     * The SubResource type.
     */
    Type?: SubResourceType;
    /**
     * The unique identifier (ID) of the SubResource.
     */
    Id?: String;
    /**
     * The list of attack types and associated counters.
     */
    AttackVectors?: SummarizedAttackVectorList;
    /**
     * The counters that describe the details of the attack.
     */
    Counters?: SummarizedCounterList;
  }
  export type SubResourceSummaryList = SubResourceSummary[];
  export type SubResourceType = "IP"|"URL"|string;
  export interface Subscription {
    /**
     * The start time of the subscription, in Unix time in seconds. For more information see timestamp.
     */
    StartTime?: Timestamp;
    /**
     * The length, in seconds, of the AWS Shield Advanced subscription for the account.
     */
    TimeCommitmentInSeconds?: DurationInSeconds;
  }
  export type SubscriptionState = "ACTIVE"|"INACTIVE"|string;
  export interface SummarizedAttackVector {
    /**
     * The attack type, for example, SNMP reflection or SYN flood.
     */
    VectorType: String;
    /**
     * The list of counters that describe the details of the attack.
     */
    VectorCounters?: SummarizedCounterList;
  }
  export type SummarizedAttackVectorList = SummarizedAttackVector[];
  export interface SummarizedCounter {
    /**
     * The counter name.
     */
    Name?: String;
    /**
     * The maximum value of the counter for a specified time period.
     */
    Max?: Double;
    /**
     * The average value of the counter for a specified time period.
     */
    Average?: Double;
    /**
     * The total of counter values for a specified time period.
     */
    Sum?: Double;
    /**
     * The number of counters for a specified time period.
     */
    N?: Integer;
    /**
     * The unit of the counters.
     */
    Unit?: String;
  }
  export type SummarizedCounterList = SummarizedCounter[];
  export interface TimeRange {
    /**
     * The start time, in Unix time in seconds. For more information see timestamp.
     */
    FromInclusive?: AttackTimestamp;
    /**
     * The end time, in Unix time in seconds. For more information see timestamp.
     */
    ToExclusive?: AttackTimestamp;
  }
  export type Timestamp = Date;
  export type Token = string;
  export type TopContributors = Contributor[];
  export type Unit = "BITS"|"BYTES"|"PACKETS"|"REQUESTS"|string;
  export type errorMessage = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2016-06-02"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Shield client.
   */
  export import Types = Shield;
}
export = Shield;
