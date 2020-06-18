import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class Route53Resolver extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Route53Resolver.Types.ClientConfiguration)
  config: Config & Route53Resolver.Types.ClientConfiguration;
  /**
   * Adds IP addresses to an inbound or an outbound resolver endpoint. If you want to adding more than one IP address, submit one AssociateResolverEndpointIpAddress request for each IP address. To remove an IP address from an endpoint, see DisassociateResolverEndpointIpAddress.
   */
  associateResolverEndpointIpAddress(params: Route53Resolver.Types.AssociateResolverEndpointIpAddressRequest, callback?: (err: AWSError, data: Route53Resolver.Types.AssociateResolverEndpointIpAddressResponse) => void): Request<Route53Resolver.Types.AssociateResolverEndpointIpAddressResponse, AWSError>;
  /**
   * Adds IP addresses to an inbound or an outbound resolver endpoint. If you want to adding more than one IP address, submit one AssociateResolverEndpointIpAddress request for each IP address. To remove an IP address from an endpoint, see DisassociateResolverEndpointIpAddress.
   */
  associateResolverEndpointIpAddress(callback?: (err: AWSError, data: Route53Resolver.Types.AssociateResolverEndpointIpAddressResponse) => void): Request<Route53Resolver.Types.AssociateResolverEndpointIpAddressResponse, AWSError>;
  /**
   * Associates a resolver rule with a VPC. When you associate a rule with a VPC, Resolver forwards all DNS queries for the domain name that is specified in the rule and that originate in the VPC. The queries are forwarded to the IP addresses for the DNS resolvers that are specified in the rule. For more information about rules, see CreateResolverRule. 
   */
  associateResolverRule(params: Route53Resolver.Types.AssociateResolverRuleRequest, callback?: (err: AWSError, data: Route53Resolver.Types.AssociateResolverRuleResponse) => void): Request<Route53Resolver.Types.AssociateResolverRuleResponse, AWSError>;
  /**
   * Associates a resolver rule with a VPC. When you associate a rule with a VPC, Resolver forwards all DNS queries for the domain name that is specified in the rule and that originate in the VPC. The queries are forwarded to the IP addresses for the DNS resolvers that are specified in the rule. For more information about rules, see CreateResolverRule. 
   */
  associateResolverRule(callback?: (err: AWSError, data: Route53Resolver.Types.AssociateResolverRuleResponse) => void): Request<Route53Resolver.Types.AssociateResolverRuleResponse, AWSError>;
  /**
   * Creates a resolver endpoint. There are two types of resolver endpoints, inbound and outbound:   An inbound resolver endpoint forwards DNS queries to the DNS service for a VPC from your network or another VPC.   An outbound resolver endpoint forwards DNS queries from the DNS service for a VPC to your network or another VPC.  
   */
  createResolverEndpoint(params: Route53Resolver.Types.CreateResolverEndpointRequest, callback?: (err: AWSError, data: Route53Resolver.Types.CreateResolverEndpointResponse) => void): Request<Route53Resolver.Types.CreateResolverEndpointResponse, AWSError>;
  /**
   * Creates a resolver endpoint. There are two types of resolver endpoints, inbound and outbound:   An inbound resolver endpoint forwards DNS queries to the DNS service for a VPC from your network or another VPC.   An outbound resolver endpoint forwards DNS queries from the DNS service for a VPC to your network or another VPC.  
   */
  createResolverEndpoint(callback?: (err: AWSError, data: Route53Resolver.Types.CreateResolverEndpointResponse) => void): Request<Route53Resolver.Types.CreateResolverEndpointResponse, AWSError>;
  /**
   * For DNS queries that originate in your VPCs, specifies which resolver endpoint the queries pass through, one domain name that you want to forward to your network, and the IP addresses of the DNS resolvers in your network.
   */
  createResolverRule(params: Route53Resolver.Types.CreateResolverRuleRequest, callback?: (err: AWSError, data: Route53Resolver.Types.CreateResolverRuleResponse) => void): Request<Route53Resolver.Types.CreateResolverRuleResponse, AWSError>;
  /**
   * For DNS queries that originate in your VPCs, specifies which resolver endpoint the queries pass through, one domain name that you want to forward to your network, and the IP addresses of the DNS resolvers in your network.
   */
  createResolverRule(callback?: (err: AWSError, data: Route53Resolver.Types.CreateResolverRuleResponse) => void): Request<Route53Resolver.Types.CreateResolverRuleResponse, AWSError>;
  /**
   * Deletes a resolver endpoint. The effect of deleting a resolver endpoint depends on whether it's an inbound or an outbound resolver endpoint:    Inbound: DNS queries from your network or another VPC are no longer routed to the DNS service for the specified VPC.    Outbound: DNS queries from a VPC are no longer routed to your network or to another VPC.  
   */
  deleteResolverEndpoint(params: Route53Resolver.Types.DeleteResolverEndpointRequest, callback?: (err: AWSError, data: Route53Resolver.Types.DeleteResolverEndpointResponse) => void): Request<Route53Resolver.Types.DeleteResolverEndpointResponse, AWSError>;
  /**
   * Deletes a resolver endpoint. The effect of deleting a resolver endpoint depends on whether it's an inbound or an outbound resolver endpoint:    Inbound: DNS queries from your network or another VPC are no longer routed to the DNS service for the specified VPC.    Outbound: DNS queries from a VPC are no longer routed to your network or to another VPC.  
   */
  deleteResolverEndpoint(callback?: (err: AWSError, data: Route53Resolver.Types.DeleteResolverEndpointResponse) => void): Request<Route53Resolver.Types.DeleteResolverEndpointResponse, AWSError>;
  /**
   * Deletes a resolver rule. Before you can delete a resolver rule, you must disassociate it from all the VPCs that you associated the resolver rule with. For more infomation, see DisassociateResolverRule.
   */
  deleteResolverRule(params: Route53Resolver.Types.DeleteResolverRuleRequest, callback?: (err: AWSError, data: Route53Resolver.Types.DeleteResolverRuleResponse) => void): Request<Route53Resolver.Types.DeleteResolverRuleResponse, AWSError>;
  /**
   * Deletes a resolver rule. Before you can delete a resolver rule, you must disassociate it from all the VPCs that you associated the resolver rule with. For more infomation, see DisassociateResolverRule.
   */
  deleteResolverRule(callback?: (err: AWSError, data: Route53Resolver.Types.DeleteResolverRuleResponse) => void): Request<Route53Resolver.Types.DeleteResolverRuleResponse, AWSError>;
  /**
   * Removes IP addresses from an inbound or an outbound resolver endpoint. If you want to remove more than one IP address, submit one DisassociateResolverEndpointIpAddress request for each IP address. To add an IP address to an endpoint, see AssociateResolverEndpointIpAddress.
   */
  disassociateResolverEndpointIpAddress(params: Route53Resolver.Types.DisassociateResolverEndpointIpAddressRequest, callback?: (err: AWSError, data: Route53Resolver.Types.DisassociateResolverEndpointIpAddressResponse) => void): Request<Route53Resolver.Types.DisassociateResolverEndpointIpAddressResponse, AWSError>;
  /**
   * Removes IP addresses from an inbound or an outbound resolver endpoint. If you want to remove more than one IP address, submit one DisassociateResolverEndpointIpAddress request for each IP address. To add an IP address to an endpoint, see AssociateResolverEndpointIpAddress.
   */
  disassociateResolverEndpointIpAddress(callback?: (err: AWSError, data: Route53Resolver.Types.DisassociateResolverEndpointIpAddressResponse) => void): Request<Route53Resolver.Types.DisassociateResolverEndpointIpAddressResponse, AWSError>;
  /**
   * Removes the association between a specified resolver rule and a specified VPC.  If you disassociate a resolver rule from a VPC, Resolver stops forwarding DNS queries for the domain name that you specified in the resolver rule.  
   */
  disassociateResolverRule(params: Route53Resolver.Types.DisassociateResolverRuleRequest, callback?: (err: AWSError, data: Route53Resolver.Types.DisassociateResolverRuleResponse) => void): Request<Route53Resolver.Types.DisassociateResolverRuleResponse, AWSError>;
  /**
   * Removes the association between a specified resolver rule and a specified VPC.  If you disassociate a resolver rule from a VPC, Resolver stops forwarding DNS queries for the domain name that you specified in the resolver rule.  
   */
  disassociateResolverRule(callback?: (err: AWSError, data: Route53Resolver.Types.DisassociateResolverRuleResponse) => void): Request<Route53Resolver.Types.DisassociateResolverRuleResponse, AWSError>;
  /**
   * Gets information about a specified resolver endpoint, such as whether it's an inbound or an outbound resolver endpoint, and the current status of the endpoint.
   */
  getResolverEndpoint(params: Route53Resolver.Types.GetResolverEndpointRequest, callback?: (err: AWSError, data: Route53Resolver.Types.GetResolverEndpointResponse) => void): Request<Route53Resolver.Types.GetResolverEndpointResponse, AWSError>;
  /**
   * Gets information about a specified resolver endpoint, such as whether it's an inbound or an outbound resolver endpoint, and the current status of the endpoint.
   */
  getResolverEndpoint(callback?: (err: AWSError, data: Route53Resolver.Types.GetResolverEndpointResponse) => void): Request<Route53Resolver.Types.GetResolverEndpointResponse, AWSError>;
  /**
   * Gets information about a specified resolver rule, such as the domain name that the rule forwards DNS queries for and the ID of the outbound resolver endpoint that the rule is associated with.
   */
  getResolverRule(params: Route53Resolver.Types.GetResolverRuleRequest, callback?: (err: AWSError, data: Route53Resolver.Types.GetResolverRuleResponse) => void): Request<Route53Resolver.Types.GetResolverRuleResponse, AWSError>;
  /**
   * Gets information about a specified resolver rule, such as the domain name that the rule forwards DNS queries for and the ID of the outbound resolver endpoint that the rule is associated with.
   */
  getResolverRule(callback?: (err: AWSError, data: Route53Resolver.Types.GetResolverRuleResponse) => void): Request<Route53Resolver.Types.GetResolverRuleResponse, AWSError>;
  /**
   * Gets information about an association between a specified resolver rule and a VPC. You associate a resolver rule and a VPC using AssociateResolverRule. 
   */
  getResolverRuleAssociation(params: Route53Resolver.Types.GetResolverRuleAssociationRequest, callback?: (err: AWSError, data: Route53Resolver.Types.GetResolverRuleAssociationResponse) => void): Request<Route53Resolver.Types.GetResolverRuleAssociationResponse, AWSError>;
  /**
   * Gets information about an association between a specified resolver rule and a VPC. You associate a resolver rule and a VPC using AssociateResolverRule. 
   */
  getResolverRuleAssociation(callback?: (err: AWSError, data: Route53Resolver.Types.GetResolverRuleAssociationResponse) => void): Request<Route53Resolver.Types.GetResolverRuleAssociationResponse, AWSError>;
  /**
   * Gets information about a resolver rule policy. A resolver rule policy specifies the Resolver operations and resources that you want to allow another AWS account to be able to use. 
   */
  getResolverRulePolicy(params: Route53Resolver.Types.GetResolverRulePolicyRequest, callback?: (err: AWSError, data: Route53Resolver.Types.GetResolverRulePolicyResponse) => void): Request<Route53Resolver.Types.GetResolverRulePolicyResponse, AWSError>;
  /**
   * Gets information about a resolver rule policy. A resolver rule policy specifies the Resolver operations and resources that you want to allow another AWS account to be able to use. 
   */
  getResolverRulePolicy(callback?: (err: AWSError, data: Route53Resolver.Types.GetResolverRulePolicyResponse) => void): Request<Route53Resolver.Types.GetResolverRulePolicyResponse, AWSError>;
  /**
   * Gets the IP addresses for a specified resolver endpoint.
   */
  listResolverEndpointIpAddresses(params: Route53Resolver.Types.ListResolverEndpointIpAddressesRequest, callback?: (err: AWSError, data: Route53Resolver.Types.ListResolverEndpointIpAddressesResponse) => void): Request<Route53Resolver.Types.ListResolverEndpointIpAddressesResponse, AWSError>;
  /**
   * Gets the IP addresses for a specified resolver endpoint.
   */
  listResolverEndpointIpAddresses(callback?: (err: AWSError, data: Route53Resolver.Types.ListResolverEndpointIpAddressesResponse) => void): Request<Route53Resolver.Types.ListResolverEndpointIpAddressesResponse, AWSError>;
  /**
   * Lists all the resolver endpoints that were created using the current AWS account.
   */
  listResolverEndpoints(params: Route53Resolver.Types.ListResolverEndpointsRequest, callback?: (err: AWSError, data: Route53Resolver.Types.ListResolverEndpointsResponse) => void): Request<Route53Resolver.Types.ListResolverEndpointsResponse, AWSError>;
  /**
   * Lists all the resolver endpoints that were created using the current AWS account.
   */
  listResolverEndpoints(callback?: (err: AWSError, data: Route53Resolver.Types.ListResolverEndpointsResponse) => void): Request<Route53Resolver.Types.ListResolverEndpointsResponse, AWSError>;
  /**
   * Lists the associations that were created between resolver rules and VPCs using the current AWS account.
   */
  listResolverRuleAssociations(params: Route53Resolver.Types.ListResolverRuleAssociationsRequest, callback?: (err: AWSError, data: Route53Resolver.Types.ListResolverRuleAssociationsResponse) => void): Request<Route53Resolver.Types.ListResolverRuleAssociationsResponse, AWSError>;
  /**
   * Lists the associations that were created between resolver rules and VPCs using the current AWS account.
   */
  listResolverRuleAssociations(callback?: (err: AWSError, data: Route53Resolver.Types.ListResolverRuleAssociationsResponse) => void): Request<Route53Resolver.Types.ListResolverRuleAssociationsResponse, AWSError>;
  /**
   * Lists the resolver rules that were created using the current AWS account.
   */
  listResolverRules(params: Route53Resolver.Types.ListResolverRulesRequest, callback?: (err: AWSError, data: Route53Resolver.Types.ListResolverRulesResponse) => void): Request<Route53Resolver.Types.ListResolverRulesResponse, AWSError>;
  /**
   * Lists the resolver rules that were created using the current AWS account.
   */
  listResolverRules(callback?: (err: AWSError, data: Route53Resolver.Types.ListResolverRulesResponse) => void): Request<Route53Resolver.Types.ListResolverRulesResponse, AWSError>;
  /**
   * Lists the tags that you associated with the specified resource.
   */
  listTagsForResource(params: Route53Resolver.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: Route53Resolver.Types.ListTagsForResourceResponse) => void): Request<Route53Resolver.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists the tags that you associated with the specified resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: Route53Resolver.Types.ListTagsForResourceResponse) => void): Request<Route53Resolver.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Specifies the Resolver operations and resources that you want to allow another AWS account to be able to use.
   */
  putResolverRulePolicy(params: Route53Resolver.Types.PutResolverRulePolicyRequest, callback?: (err: AWSError, data: Route53Resolver.Types.PutResolverRulePolicyResponse) => void): Request<Route53Resolver.Types.PutResolverRulePolicyResponse, AWSError>;
  /**
   * Specifies the Resolver operations and resources that you want to allow another AWS account to be able to use.
   */
  putResolverRulePolicy(callback?: (err: AWSError, data: Route53Resolver.Types.PutResolverRulePolicyResponse) => void): Request<Route53Resolver.Types.PutResolverRulePolicyResponse, AWSError>;
  /**
   * Adds one or more tags to a specified resource.
   */
  tagResource(params: Route53Resolver.Types.TagResourceRequest, callback?: (err: AWSError, data: Route53Resolver.Types.TagResourceResponse) => void): Request<Route53Resolver.Types.TagResourceResponse, AWSError>;
  /**
   * Adds one or more tags to a specified resource.
   */
  tagResource(callback?: (err: AWSError, data: Route53Resolver.Types.TagResourceResponse) => void): Request<Route53Resolver.Types.TagResourceResponse, AWSError>;
  /**
   * Removes one or more tags from a specified resource.
   */
  untagResource(params: Route53Resolver.Types.UntagResourceRequest, callback?: (err: AWSError, data: Route53Resolver.Types.UntagResourceResponse) => void): Request<Route53Resolver.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes one or more tags from a specified resource.
   */
  untagResource(callback?: (err: AWSError, data: Route53Resolver.Types.UntagResourceResponse) => void): Request<Route53Resolver.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates the name of an inbound or an outbound resolver endpoint. 
   */
  updateResolverEndpoint(params: Route53Resolver.Types.UpdateResolverEndpointRequest, callback?: (err: AWSError, data: Route53Resolver.Types.UpdateResolverEndpointResponse) => void): Request<Route53Resolver.Types.UpdateResolverEndpointResponse, AWSError>;
  /**
   * Updates the name of an inbound or an outbound resolver endpoint. 
   */
  updateResolverEndpoint(callback?: (err: AWSError, data: Route53Resolver.Types.UpdateResolverEndpointResponse) => void): Request<Route53Resolver.Types.UpdateResolverEndpointResponse, AWSError>;
  /**
   * Updates settings for a specified resolver rule. ResolverRuleId is required, and all other parameters are optional. If you don't specify a parameter, it retains its current value.
   */
  updateResolverRule(params: Route53Resolver.Types.UpdateResolverRuleRequest, callback?: (err: AWSError, data: Route53Resolver.Types.UpdateResolverRuleResponse) => void): Request<Route53Resolver.Types.UpdateResolverRuleResponse, AWSError>;
  /**
   * Updates settings for a specified resolver rule. ResolverRuleId is required, and all other parameters are optional. If you don't specify a parameter, it retains its current value.
   */
  updateResolverRule(callback?: (err: AWSError, data: Route53Resolver.Types.UpdateResolverRuleResponse) => void): Request<Route53Resolver.Types.UpdateResolverRuleResponse, AWSError>;
}
declare namespace Route53Resolver {
  export type AccountId = string;
  export type Arn = string;
  export interface AssociateResolverEndpointIpAddressRequest {
    /**
     * The ID of the resolver endpoint that you want to associate IP addresses with.
     */
    ResolverEndpointId: ResourceId;
    /**
     * Either the IPv4 address that you want to add to a resolver endpoint or a subnet ID. If you specify a subnet ID, Resolver chooses an IP address for you from the available IPs in the specified subnet.
     */
    IpAddress: IpAddressUpdate;
  }
  export interface AssociateResolverEndpointIpAddressResponse {
    /**
     * The response to an AssociateResolverEndpointIpAddress request.
     */
    ResolverEndpoint?: ResolverEndpoint;
  }
  export interface AssociateResolverRuleRequest {
    /**
     * The ID of the resolver rule that you want to associate with the VPC. To list the existing resolver rules, use ListResolverRules.
     */
    ResolverRuleId: ResourceId;
    /**
     * A name for the association that you're creating between a resolver rule and a VPC.
     */
    Name?: Name;
    /**
     * The ID of the VPC that you want to associate the resolver rule with.
     */
    VPCId: ResourceId;
  }
  export interface AssociateResolverRuleResponse {
    /**
     * Information about the AssociateResolverRule request, including the status of the request.
     */
    ResolverRuleAssociation?: ResolverRuleAssociation;
  }
  export type Boolean = boolean;
  export interface CreateResolverEndpointRequest {
    /**
     * A unique string that identifies the request and that allows failed requests to be retried without the risk of executing the operation twice. CreatorRequestId can be any unique string, for example, a date/time stamp. 
     */
    CreatorRequestId: CreatorRequestId;
    /**
     * A friendly name that lets you easily find a configuration in the Resolver dashboard in the Route 53 console.
     */
    Name?: Name;
    /**
     * The ID of one or more security groups that you want to use to control access to this VPC. The security group that you specify must include one or more inbound rules (for inbound resolver endpoints) or outbound rules (for outbound resolver endpoints).
     */
    SecurityGroupIds: SecurityGroupIds;
    /**
     * Specify the applicable value:    INBOUND: Resolver forwards DNS queries to the DNS service for a VPC from your network or another VPC    OUTBOUND: Resolver forwards DNS queries from the DNS service for a VPC to your network or another VPC  
     */
    Direction: ResolverEndpointDirection;
    /**
     * The subnets and IP addresses in your VPC that you want DNS queries to pass through on the way from your VPCs to your network (for outbound endpoints) or on the way from your network to your VPCs (for inbound resolver endpoints). 
     */
    IpAddresses: IpAddressesRequest;
    /**
     * A list of the tag keys and values that you want to associate with the endpoint.
     */
    Tags?: TagList;
  }
  export interface CreateResolverEndpointResponse {
    /**
     * Information about the CreateResolverEndpoint request, including the status of the request.
     */
    ResolverEndpoint?: ResolverEndpoint;
  }
  export interface CreateResolverRuleRequest {
    /**
     * A unique string that identifies the request and that allows failed requests to be retried without the risk of executing the operation twice. CreatorRequestId can be any unique string, for example, a date/time stamp. 
     */
    CreatorRequestId: CreatorRequestId;
    /**
     * A friendly name that lets you easily find a rule in the Resolver dashboard in the Route 53 console.
     */
    Name?: Name;
    /**
     * Specify FORWARD. Other resolver rule types aren't supported.
     */
    RuleType: RuleTypeOption;
    /**
     * DNS queries for this domain name are forwarded to the IP addresses that you specify in TargetIps. If a query matches multiple resolver rules (example.com and www.example.com), outbound DNS queries are routed using the resolver rule that contains the most specific domain name (www.example.com).
     */
    DomainName: DomainName;
    /**
     * The IPs that you want Resolver to forward DNS queries to. You can specify only IPv4 addresses. Separate IP addresses with a comma.
     */
    TargetIps?: TargetList;
    /**
     * The ID of the outbound resolver endpoint that you want to use to route DNS queries to the IP addresses that you specify in TargetIps.
     */
    ResolverEndpointId?: ResourceId;
    /**
     * A list of the tag keys and values that you want to associate with the endpoint.
     */
    Tags?: TagList;
  }
  export interface CreateResolverRuleResponse {
    /**
     * Information about the CreateResolverRule request, including the status of the request.
     */
    ResolverRule?: ResolverRule;
  }
  export type CreatorRequestId = string;
  export interface DeleteResolverEndpointRequest {
    /**
     * The ID of the resolver endpoint that you want to delete.
     */
    ResolverEndpointId: ResourceId;
  }
  export interface DeleteResolverEndpointResponse {
    /**
     * Information about the DeleteResolverEndpoint request, including the status of the request.
     */
    ResolverEndpoint?: ResolverEndpoint;
  }
  export interface DeleteResolverRuleRequest {
    /**
     * The ID of the resolver rule that you want to delete.
     */
    ResolverRuleId: ResourceId;
  }
  export interface DeleteResolverRuleResponse {
    /**
     * Information about the DeleteResolverRule request, including the status of the request.
     */
    ResolverRule?: ResolverRule;
  }
  export interface DisassociateResolverEndpointIpAddressRequest {
    /**
     * The ID of the resolver endpoint that you want to disassociate an IP address from.
     */
    ResolverEndpointId: ResourceId;
    /**
     * The IPv4 address that you want to remove from a resolver endpoint.
     */
    IpAddress: IpAddressUpdate;
  }
  export interface DisassociateResolverEndpointIpAddressResponse {
    /**
     * The response to an DisassociateResolverEndpointIpAddress request.
     */
    ResolverEndpoint?: ResolverEndpoint;
  }
  export interface DisassociateResolverRuleRequest {
    /**
     * The ID of the VPC that you want to disassociate the resolver rule from.
     */
    VPCId: ResourceId;
    /**
     * The ID of the resolver rule that you want to disassociate from the specified VPC.
     */
    ResolverRuleId: ResourceId;
  }
  export interface DisassociateResolverRuleResponse {
    /**
     * Information about the DisassociateResolverRule request, including the status of the request.
     */
    ResolverRuleAssociation?: ResolverRuleAssociation;
  }
  export type DomainName = string;
  export interface Filter {
    /**
     * When you're using a List operation and you want the operation to return a subset of objects, such as resolver endpoints or resolver rules, the name of the parameter that you want to use to filter objects. For example, to list only inbound resolver endpoints, specify Direction for the value of Name.
     */
    Name?: FilterName;
    /**
     * When you're using a List operation and you want the operation to return a subset of objects, such as resolver endpoints or resolver rules, the value of the parameter that you want to use to filter objects. For example, to list only inbound resolver endpoints, specify INBOUND for the value of Values.
     */
    Values?: FilterValues;
  }
  export type FilterName = string;
  export type FilterValue = string;
  export type FilterValues = FilterValue[];
  export type Filters = Filter[];
  export interface GetResolverEndpointRequest {
    /**
     * The ID of the resolver endpoint that you want to get information about.
     */
    ResolverEndpointId: ResourceId;
  }
  export interface GetResolverEndpointResponse {
    /**
     * Information about the resolver endpoint that you specified in a GetResolverEndpoint request.
     */
    ResolverEndpoint?: ResolverEndpoint;
  }
  export interface GetResolverRuleAssociationRequest {
    /**
     * The ID of the resolver rule association that you want to get information about.
     */
    ResolverRuleAssociationId: ResourceId;
  }
  export interface GetResolverRuleAssociationResponse {
    /**
     * Information about the resolver rule association that you specified in a GetResolverRuleAssociation request.
     */
    ResolverRuleAssociation?: ResolverRuleAssociation;
  }
  export interface GetResolverRulePolicyRequest {
    /**
     * The ID of the resolver rule policy that you want to get information about.
     */
    Arn: Arn;
  }
  export interface GetResolverRulePolicyResponse {
    /**
     * Information about the resolver rule policy that you specified in a GetResolverRulePolicy request.
     */
    ResolverRulePolicy?: ResolverRulePolicy;
  }
  export interface GetResolverRuleRequest {
    /**
     * The ID of the resolver rule that you want to get information about.
     */
    ResolverRuleId: ResourceId;
  }
  export interface GetResolverRuleResponse {
    /**
     * Information about the resolver rule that you specified in a GetResolverRule request.
     */
    ResolverRule?: ResolverRule;
  }
  export type Ip = string;
  export type IpAddressCount = number;
  export interface IpAddressRequest {
    /**
     * The subnet that contains the IP address.
     */
    SubnetId: SubnetId;
    /**
     * The IP address that you want to use for DNS queries.
     */
    Ip?: Ip;
  }
  export interface IpAddressResponse {
    /**
     * The ID of one IP address.
     */
    IpId?: ResourceId;
    /**
     * The ID of one subnet.
     */
    SubnetId?: SubnetId;
    /**
     * One IP address that the resolver endpoint uses for DNS queries.
     */
    Ip?: Ip;
    /**
     * A status code that gives the current status of the request.
     */
    Status?: IpAddressStatus;
    /**
     * A message that provides additional information about the status of the request.
     */
    StatusMessage?: StatusMessage;
    /**
     * The date and time that the IP address was created, in Unix time format and Coordinated Universal Time (UTC).
     */
    CreationTime?: Rfc3339TimeString;
    /**
     * The date and time that the IP address was last modified, in Unix time format and Coordinated Universal Time (UTC).
     */
    ModificationTime?: Rfc3339TimeString;
  }
  export type IpAddressStatus = "CREATING"|"FAILED_CREATION"|"ATTACHING"|"ATTACHED"|"REMAP_DETACHING"|"REMAP_ATTACHING"|"DETACHING"|"FAILED_RESOURCE_GONE"|"DELETING"|"DELETE_FAILED_FAS_EXPIRED"|string;
  export interface IpAddressUpdate {
    /**
     *  Only when removing an IP address from a resolver endpoint: The ID of the IP address that you want to remove. To get this ID, use GetResolverEndpoint.
     */
    IpId?: ResourceId;
    /**
     * The ID of the subnet that includes the IP address that you want to update. To get this ID, use GetResolverEndpoint.
     */
    SubnetId?: SubnetId;
    /**
     * The new IP address.
     */
    Ip?: Ip;
  }
  export type IpAddressesRequest = IpAddressRequest[];
  export type IpAddressesResponse = IpAddressResponse[];
  export interface ListResolverEndpointIpAddressesRequest {
    /**
     * The ID of the resolver endpoint that you want to get IP addresses for.
     */
    ResolverEndpointId: ResourceId;
    /**
     * The maximum number of IP addresses that you want to return in the response to a ListResolverEndpointIpAddresses request. If you don't specify a value for MaxResults, Resolver returns up to 100 IP addresses. 
     */
    MaxResults?: MaxResults;
    /**
     * For the first ListResolverEndpointIpAddresses request, omit this value. If the specified resolver endpoint has more than MaxResults IP addresses, you can submit another ListResolverEndpointIpAddresses request to get the next group of IP addresses. In the next request, specify the value of NextToken from the previous response. 
     */
    NextToken?: NextToken;
  }
  export interface ListResolverEndpointIpAddressesResponse {
    /**
     * If the specified endpoint has more than MaxResults IP addresses, you can submit another ListResolverEndpointIpAddresses request to get the next group of IP addresses. In the next request, specify the value of NextToken from the previous response. 
     */
    NextToken?: NextToken;
    /**
     * The value that you specified for MaxResults in the request.
     */
    MaxResults?: MaxResults;
    /**
     * The IP addresses that DNS queries pass through on their way to your network (outbound endpoint) or on the way to Resolver (inbound endpoint).
     */
    IpAddresses?: IpAddressesResponse;
  }
  export interface ListResolverEndpointsRequest {
    /**
     * The maximum number of resolver endpoints that you want to return in the response to a ListResolverEndpoints request. If you don't specify a value for MaxResults, Resolver returns up to 100 resolver endpoints. 
     */
    MaxResults?: MaxResults;
    /**
     * For the first ListResolverEndpoints request, omit this value. If you have more than MaxResults resolver endpoints, you can submit another ListResolverEndpoints request to get the next group of resolver endpoints. In the next request, specify the value of NextToken from the previous response. 
     */
    NextToken?: NextToken;
    /**
     * An optional specification to return a subset of resolver endpoints, such as all inbound resolver endpoints.  If you submit a second or subsequent ListResolverEndpoints request and specify the NextToken parameter, you must use the same values for Filters, if any, as in the previous request. 
     */
    Filters?: Filters;
  }
  export interface ListResolverEndpointsResponse {
    /**
     * If more than MaxResults IP addresses match the specified criteria, you can submit another ListResolverEndpoint request to get the next group of results. In the next request, specify the value of NextToken from the previous response. 
     */
    NextToken?: NextToken;
    /**
     * The value that you specified for MaxResults in the request.
     */
    MaxResults?: MaxResults;
    /**
     * The resolver endpoints that were created by using the current AWS account, and that match the specified filters, if any.
     */
    ResolverEndpoints?: ResolverEndpoints;
  }
  export interface ListResolverRuleAssociationsRequest {
    /**
     * The maximum number of rule associations that you want to return in the response to a ListResolverRuleAssociations request. If you don't specify a value for MaxResults, Resolver returns up to 100 rule associations. 
     */
    MaxResults?: MaxResults;
    /**
     * For the first ListResolverRuleAssociation request, omit this value. If you have more than MaxResults rule associations, you can submit another ListResolverRuleAssociation request to get the next group of rule associations. In the next request, specify the value of NextToken from the previous response. 
     */
    NextToken?: NextToken;
    /**
     * An optional specification to return a subset of resolver rules, such as resolver rules that are associated with the same VPC ID.  If you submit a second or subsequent ListResolverRuleAssociations request and specify the NextToken parameter, you must use the same values for Filters, if any, as in the previous request. 
     */
    Filters?: Filters;
  }
  export interface ListResolverRuleAssociationsResponse {
    /**
     * If more than MaxResults rule associations match the specified criteria, you can submit another ListResolverRuleAssociation request to get the next group of results. In the next request, specify the value of NextToken from the previous response. 
     */
    NextToken?: NextToken;
    /**
     * The value that you specified for MaxResults in the request.
     */
    MaxResults?: MaxResults;
    /**
     * The associations that were created between resolver rules and VPCs using the current AWS account, and that match the specified filters, if any.
     */
    ResolverRuleAssociations?: ResolverRuleAssociations;
  }
  export interface ListResolverRulesRequest {
    /**
     * The maximum number of resolver rules that you want to return in the response to a ListResolverRules request. If you don't specify a value for MaxResults, Resolver returns up to 100 resolver rules.
     */
    MaxResults?: MaxResults;
    /**
     * For the first ListResolverRules request, omit this value. If you have more than MaxResults resolver rules, you can submit another ListResolverRules request to get the next group of resolver rules. In the next request, specify the value of NextToken from the previous response. 
     */
    NextToken?: NextToken;
    /**
     * An optional specification to return a subset of resolver rules, such as all resolver rules that are associated with the same resolver endpoint.  If you submit a second or subsequent ListResolverRules request and specify the NextToken parameter, you must use the same values for Filters, if any, as in the previous request. 
     */
    Filters?: Filters;
  }
  export interface ListResolverRulesResponse {
    /**
     * If more than MaxResults resolver rules match the specified criteria, you can submit another ListResolverRules request to get the next group of results. In the next request, specify the value of NextToken from the previous response. 
     */
    NextToken?: NextToken;
    /**
     * The value that you specified for MaxResults in the request.
     */
    MaxResults?: MaxResults;
    /**
     * The resolver rules that were created using the current AWS account and that match the specified filters, if any.
     */
    ResolverRules?: ResolverRules;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) for the resource that you want to list tags for.
     */
    ResourceArn: Arn;
    /**
     * The maximum number of tags that you want to return in the response to a ListTagsForResource request. If you don't specify a value for MaxResults, Resolver returns up to 100 tags.
     */
    MaxResults?: MaxResults;
    /**
     * For the first ListTagsForResource request, omit this value. If you have more than MaxResults tags, you can submit another ListTagsForResource request to get the next group of tags for the resource. In the next request, specify the value of NextToken from the previous response. 
     */
    NextToken?: NextToken;
  }
  export interface ListTagsForResourceResponse {
    /**
     * The tags that are associated with the resource that you specified in the ListTagsForResource request.
     */
    Tags?: TagList;
    /**
     * If more than MaxResults tags match the specified criteria, you can submit another ListTagsForResource request to get the next group of results. In the next request, specify the value of NextToken from the previous response. 
     */
    NextToken?: NextToken;
  }
  export type MaxResults = number;
  export type Name = string;
  export type NextToken = string;
  export type Port = number;
  export interface PutResolverRulePolicyRequest {
    /**
     * The Amazon Resource Name (ARN) of the account that you want to grant permissions to.
     */
    Arn: Arn;
    /**
     * An AWS Identity and Access Management policy statement that lists the permissions that you want to grant to another AWS account.
     */
    ResolverRulePolicy: ResolverRulePolicy;
  }
  export interface PutResolverRulePolicyResponse {
    /**
     * Whether the PutResolverRulePolicy request was successful.
     */
    ReturnValue?: Boolean;
  }
  export interface ResolverEndpoint {
    /**
     * The ID of the resolver endpoint.
     */
    Id?: ResourceId;
    /**
     * A unique string that identifies the request that created the resolver endpoint. The CreatorRequestId allows failed requests to be retried without the risk of executing the operation twice.
     */
    CreatorRequestId?: CreatorRequestId;
    /**
     * The ARN (Amazon Resource Name) for the resolver endpoint.
     */
    Arn?: Arn;
    /**
     * The name that you assigned to the resolver endpoint when you submitted a CreateResolverEndpoint request.
     */
    Name?: Name;
    /**
     * The ID of one or more security groups that control access to this VPC. The security group must include one or more inbound resolver rules.
     */
    SecurityGroupIds?: SecurityGroupIds;
    /**
     * Indicates whether the resolver endpoint allows inbound or outbound DNS queries:    INBOUND: allows DNS queries to your VPC from your network or another VPC    OUTBOUND: allows DNS queries from your VPC to your network or another VPC  
     */
    Direction?: ResolverEndpointDirection;
    /**
     * The number of IP addresses that the resolver endpoint can use for DNS queries.
     */
    IpAddressCount?: IpAddressCount;
    /**
     * The ID of the VPC that you want to create the resolver endpoint in.
     */
    HostVPCId?: ResourceId;
    /**
     * A code that specifies the current status of the resolver endpoint.
     */
    Status?: ResolverEndpointStatus;
    /**
     * A detailed description of the status of the resolver endpoint.
     */
    StatusMessage?: StatusMessage;
    /**
     * The date and time that the endpoint was created, in Unix time format and Coordinated Universal Time (UTC).
     */
    CreationTime?: Rfc3339TimeString;
    /**
     * The date and time that the endpoint was last modified, in Unix time format and Coordinated Universal Time (UTC).
     */
    ModificationTime?: Rfc3339TimeString;
  }
  export type ResolverEndpointDirection = "INBOUND"|"OUTBOUND"|string;
  export type ResolverEndpointStatus = "CREATING"|"OPERATIONAL"|"UPDATING"|"AUTO_RECOVERING"|"ACTION_NEEDED"|"DELETING"|string;
  export type ResolverEndpoints = ResolverEndpoint[];
  export interface ResolverRule {
    /**
     * The ID that Resolver assigned to the resolver rule when you created it.
     */
    Id?: ResourceId;
    /**
     * A unique string that you specified when you created the resolver rule. CreatorRequestIdidentifies the request and allows failed requests to be retried without the risk of executing the operation twice. 
     */
    CreatorRequestId?: CreatorRequestId;
    /**
     * The ARN (Amazon Resource Name) for the resolver rule specified by Id.
     */
    Arn?: Arn;
    /**
     * DNS queries for this domain name are forwarded to the IP addresses that are specified in TargetIps. If a query matches multiple resolver rules (example.com and www.example.com), the query is routed using the resolver rule that contains the most specific domain name (www.example.com).
     */
    DomainName?: DomainName;
    /**
     * A code that specifies the current status of the resolver rule.
     */
    Status?: ResolverRuleStatus;
    /**
     * A detailed description of the status of a resolver rule.
     */
    StatusMessage?: StatusMessage;
    /**
     * This value is always FORWARD. Other resolver rule types aren't supported.
     */
    RuleType?: RuleTypeOption;
    /**
     * The name for the resolver rule, which you specified when you created the resolver rule.
     */
    Name?: Name;
    /**
     * An array that contains the IP addresses and ports that you want to forward 
     */
    TargetIps?: TargetList;
    /**
     * The ID of the endpoint that the rule is associated with.
     */
    ResolverEndpointId?: ResourceId;
    /**
     * When a rule is shared with another AWS account, the account ID of the account that the rule is shared with.
     */
    OwnerId?: AccountId;
    /**
     * Whether the rules is shared and, if so, whether the current account is sharing the rule with another account, or another account is sharing the rule with the current account.
     */
    ShareStatus?: ShareStatus;
  }
  export interface ResolverRuleAssociation {
    /**
     * The ID of the association between a resolver rule and a VPC. Resolver assigns this value when you submit an AssociateResolverRule request.
     */
    Id?: ResourceId;
    /**
     * The ID of the resolver rule that you associated with the VPC that is specified by VPCId.
     */
    ResolverRuleId?: ResourceId;
    /**
     * The name of an association between a resolver rule and a VPC.
     */
    Name?: Name;
    /**
     * The ID of the VPC that you associated the resolver rule with.
     */
    VPCId?: ResourceId;
    /**
     * A code that specifies the current status of the association between a resolver rule and a VPC.
     */
    Status?: ResolverRuleAssociationStatus;
    /**
     * A detailed description of the status of the association between a resolver rule and a VPC.
     */
    StatusMessage?: StatusMessage;
  }
  export type ResolverRuleAssociationStatus = "CREATING"|"COMPLETE"|"DELETING"|"FAILED"|"OVERRIDDEN"|string;
  export type ResolverRuleAssociations = ResolverRuleAssociation[];
  export interface ResolverRuleConfig {
    /**
     * The new name for the resolver rule. The name that you specify appears in the Resolver dashboard in the Route 53 console. 
     */
    Name?: Name;
    /**
     * For DNS queries that originate in your VPC, the new IP addresses that you want to route outbound DNS queries to.
     */
    TargetIps?: TargetList;
    /**
     * The ID of the new outbound resolver endpoint that you want to use to route DNS queries to the IP addresses that you specify in TargetIps.
     */
    ResolverEndpointId?: ResourceId;
  }
  export type ResolverRulePolicy = string;
  export type ResolverRuleStatus = "COMPLETE"|"DELETING"|"UPDATING"|"FAILED"|string;
  export type ResolverRules = ResolverRule[];
  export type ResourceId = string;
  export type Rfc3339TimeString = string;
  export type RuleTypeOption = "FORWARD"|"SYSTEM"|"RECURSIVE"|string;
  export type SecurityGroupIds = ResourceId[];
  export type ShareStatus = "NOT_SHARED"|"SHARED_WITH_ME"|"SHARED_BY_ME"|string;
  export type StatusMessage = string;
  export type SubnetId = string;
  export interface Tag {
    /**
     * The name for the tag. For example, if you want to associate Resolver resources with the account IDs of your customers for billing purposes, the value of Key might be account-id.
     */
    Key?: TagKey;
    /**
     * The value for the tag. For example, if Key is account-id, then Value might be the ID of the customer account that you're creating the resource for.
     */
    Value?: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) for the resource that you want to add tags to. To get the ARN for a resource, use the applicable Get or List command:     GetResolverEndpoint     GetResolverRule     GetResolverRuleAssociation     ListResolverEndpoints     ListResolverRuleAssociations     ListResolverRules   
     */
    ResourceArn: Arn;
    /**
     * The tags that you want to add to the specified resource.
     */
    Tags: TagList;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export interface TargetAddress {
    /**
     * One IP address that you want to forward DNS queries to. You can specify only IPv4 addresses.
     */
    Ip: Ip;
    /**
     * The port at Ip that you want to forward DNS queries to.
     */
    Port?: Port;
  }
  export type TargetList = TargetAddress[];
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) for the resource that you want to remove tags from. To get the ARN for a resource, use the applicable Get or List command:     GetResolverEndpoint     GetResolverRule     GetResolverRuleAssociation     ListResolverEndpoints     ListResolverRuleAssociations     ListResolverRules   
     */
    ResourceArn: Arn;
    /**
     * The tags that you want to remove to the specified resource.
     */
    TagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateResolverEndpointRequest {
    /**
     * The ID of the resolver endpoint that you want to update.
     */
    ResolverEndpointId: ResourceId;
    /**
     * The name of the resolver endpoint that you want to update.
     */
    Name?: Name;
  }
  export interface UpdateResolverEndpointResponse {
    /**
     * The response to an UpdateResolverEndpoint request.
     */
    ResolverEndpoint?: ResolverEndpoint;
  }
  export interface UpdateResolverRuleRequest {
    /**
     * The ID of the resolver rule that you want to update.
     */
    ResolverRuleId: ResourceId;
    /**
     * The new settings for the resolver rule.
     */
    Config: ResolverRuleConfig;
  }
  export interface UpdateResolverRuleResponse {
    /**
     * The response to an UpdateResolverRule request.
     */
    ResolverRule?: ResolverRule;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-04-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Route53Resolver client.
   */
  export import Types = Route53Resolver;
}
export = Route53Resolver;
