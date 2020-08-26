import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class Route53Resolver extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Route53Resolver.Types.ClientConfiguration)
  config: Config & Route53Resolver.Types.ClientConfiguration;
  /**
   * Adds IP addresses to an inbound or an outbound Resolver endpoint. If you want to add more than one IP address, submit one AssociateResolverEndpointIpAddress request for each IP address. To remove an IP address from an endpoint, see DisassociateResolverEndpointIpAddress. 
   */
  associateResolverEndpointIpAddress(params: Route53Resolver.Types.AssociateResolverEndpointIpAddressRequest, callback?: (err: AWSError, data: Route53Resolver.Types.AssociateResolverEndpointIpAddressResponse) => void): Request<Route53Resolver.Types.AssociateResolverEndpointIpAddressResponse, AWSError>;
  /**
   * Adds IP addresses to an inbound or an outbound Resolver endpoint. If you want to add more than one IP address, submit one AssociateResolverEndpointIpAddress request for each IP address. To remove an IP address from an endpoint, see DisassociateResolverEndpointIpAddress. 
   */
  associateResolverEndpointIpAddress(callback?: (err: AWSError, data: Route53Resolver.Types.AssociateResolverEndpointIpAddressResponse) => void): Request<Route53Resolver.Types.AssociateResolverEndpointIpAddressResponse, AWSError>;
  /**
   * Associates an Amazon VPC with a specified query logging configuration. Route 53 Resolver logs DNS queries that originate in all of the Amazon VPCs that are associated with a specified query logging configuration. To associate more than one VPC with a configuration, submit one AssociateResolverQueryLogConfig request for each VPC.  The VPCs that you associate with a query logging configuration must be in the same Region as the configuration.  To remove a VPC from a query logging configuration, see DisassociateResolverQueryLogConfig. 
   */
  associateResolverQueryLogConfig(params: Route53Resolver.Types.AssociateResolverQueryLogConfigRequest, callback?: (err: AWSError, data: Route53Resolver.Types.AssociateResolverQueryLogConfigResponse) => void): Request<Route53Resolver.Types.AssociateResolverQueryLogConfigResponse, AWSError>;
  /**
   * Associates an Amazon VPC with a specified query logging configuration. Route 53 Resolver logs DNS queries that originate in all of the Amazon VPCs that are associated with a specified query logging configuration. To associate more than one VPC with a configuration, submit one AssociateResolverQueryLogConfig request for each VPC.  The VPCs that you associate with a query logging configuration must be in the same Region as the configuration.  To remove a VPC from a query logging configuration, see DisassociateResolverQueryLogConfig. 
   */
  associateResolverQueryLogConfig(callback?: (err: AWSError, data: Route53Resolver.Types.AssociateResolverQueryLogConfigResponse) => void): Request<Route53Resolver.Types.AssociateResolverQueryLogConfigResponse, AWSError>;
  /**
   * Associates a Resolver rule with a VPC. When you associate a rule with a VPC, Resolver forwards all DNS queries for the domain name that is specified in the rule and that originate in the VPC. The queries are forwarded to the IP addresses for the DNS resolvers that are specified in the rule. For more information about rules, see CreateResolverRule. 
   */
  associateResolverRule(params: Route53Resolver.Types.AssociateResolverRuleRequest, callback?: (err: AWSError, data: Route53Resolver.Types.AssociateResolverRuleResponse) => void): Request<Route53Resolver.Types.AssociateResolverRuleResponse, AWSError>;
  /**
   * Associates a Resolver rule with a VPC. When you associate a rule with a VPC, Resolver forwards all DNS queries for the domain name that is specified in the rule and that originate in the VPC. The queries are forwarded to the IP addresses for the DNS resolvers that are specified in the rule. For more information about rules, see CreateResolverRule. 
   */
  associateResolverRule(callback?: (err: AWSError, data: Route53Resolver.Types.AssociateResolverRuleResponse) => void): Request<Route53Resolver.Types.AssociateResolverRuleResponse, AWSError>;
  /**
   * Creates a Resolver endpoint. There are two types of Resolver endpoints, inbound and outbound:   An inbound Resolver endpoint forwards DNS queries to the DNS service for a VPC from your network.   An outbound Resolver endpoint forwards DNS queries from the DNS service for a VPC to your network.  
   */
  createResolverEndpoint(params: Route53Resolver.Types.CreateResolverEndpointRequest, callback?: (err: AWSError, data: Route53Resolver.Types.CreateResolverEndpointResponse) => void): Request<Route53Resolver.Types.CreateResolverEndpointResponse, AWSError>;
  /**
   * Creates a Resolver endpoint. There are two types of Resolver endpoints, inbound and outbound:   An inbound Resolver endpoint forwards DNS queries to the DNS service for a VPC from your network.   An outbound Resolver endpoint forwards DNS queries from the DNS service for a VPC to your network.  
   */
  createResolverEndpoint(callback?: (err: AWSError, data: Route53Resolver.Types.CreateResolverEndpointResponse) => void): Request<Route53Resolver.Types.CreateResolverEndpointResponse, AWSError>;
  /**
   * Creates a Resolver query logging configuration, which defines where you want Resolver to save DNS query logs that originate in your VPCs. Resolver can log queries only for VPCs that are in the same Region as the query logging configuration. To specify which VPCs you want to log queries for, you use AssociateResolverQueryLogConfig. For more information, see AssociateResolverQueryLogConfig.  You can optionally use AWS Resource Access Manager (AWS RAM) to share a query logging configuration with other AWS accounts. The other accounts can then associate VPCs with the configuration. The query logs that Resolver creates for a configuration include all DNS queries that originate in all VPCs that are associated with the configuration.
   */
  createResolverQueryLogConfig(params: Route53Resolver.Types.CreateResolverQueryLogConfigRequest, callback?: (err: AWSError, data: Route53Resolver.Types.CreateResolverQueryLogConfigResponse) => void): Request<Route53Resolver.Types.CreateResolverQueryLogConfigResponse, AWSError>;
  /**
   * Creates a Resolver query logging configuration, which defines where you want Resolver to save DNS query logs that originate in your VPCs. Resolver can log queries only for VPCs that are in the same Region as the query logging configuration. To specify which VPCs you want to log queries for, you use AssociateResolverQueryLogConfig. For more information, see AssociateResolverQueryLogConfig.  You can optionally use AWS Resource Access Manager (AWS RAM) to share a query logging configuration with other AWS accounts. The other accounts can then associate VPCs with the configuration. The query logs that Resolver creates for a configuration include all DNS queries that originate in all VPCs that are associated with the configuration.
   */
  createResolverQueryLogConfig(callback?: (err: AWSError, data: Route53Resolver.Types.CreateResolverQueryLogConfigResponse) => void): Request<Route53Resolver.Types.CreateResolverQueryLogConfigResponse, AWSError>;
  /**
   * For DNS queries that originate in your VPCs, specifies which Resolver endpoint the queries pass through, one domain name that you want to forward to your network, and the IP addresses of the DNS resolvers in your network.
   */
  createResolverRule(params: Route53Resolver.Types.CreateResolverRuleRequest, callback?: (err: AWSError, data: Route53Resolver.Types.CreateResolverRuleResponse) => void): Request<Route53Resolver.Types.CreateResolverRuleResponse, AWSError>;
  /**
   * For DNS queries that originate in your VPCs, specifies which Resolver endpoint the queries pass through, one domain name that you want to forward to your network, and the IP addresses of the DNS resolvers in your network.
   */
  createResolverRule(callback?: (err: AWSError, data: Route53Resolver.Types.CreateResolverRuleResponse) => void): Request<Route53Resolver.Types.CreateResolverRuleResponse, AWSError>;
  /**
   * Deletes a Resolver endpoint. The effect of deleting a Resolver endpoint depends on whether it's an inbound or an outbound Resolver endpoint:    Inbound: DNS queries from your network are no longer routed to the DNS service for the specified VPC.    Outbound: DNS queries from a VPC are no longer routed to your network.  
   */
  deleteResolverEndpoint(params: Route53Resolver.Types.DeleteResolverEndpointRequest, callback?: (err: AWSError, data: Route53Resolver.Types.DeleteResolverEndpointResponse) => void): Request<Route53Resolver.Types.DeleteResolverEndpointResponse, AWSError>;
  /**
   * Deletes a Resolver endpoint. The effect of deleting a Resolver endpoint depends on whether it's an inbound or an outbound Resolver endpoint:    Inbound: DNS queries from your network are no longer routed to the DNS service for the specified VPC.    Outbound: DNS queries from a VPC are no longer routed to your network.  
   */
  deleteResolverEndpoint(callback?: (err: AWSError, data: Route53Resolver.Types.DeleteResolverEndpointResponse) => void): Request<Route53Resolver.Types.DeleteResolverEndpointResponse, AWSError>;
  /**
   * Deletes a query logging configuration. When you delete a configuration, Resolver stops logging DNS queries for all of the Amazon VPCs that are associated with the configuration. This also applies if the query logging configuration is shared with other AWS accounts, and the other accounts have associated VPCs with the shared configuration. Before you can delete a query logging configuration, you must first disassociate all VPCs from the configuration. See DisassociateResolverQueryLogConfig. If you used Resource Access Manager (RAM) to share a query logging configuration with other accounts, you must stop sharing the configuration before you can delete a configuration. The accounts that you shared the configuration with can first disassociate VPCs that they associated with the configuration, but that's not necessary. If you stop sharing the configuration, those VPCs are automatically disassociated from the configuration.
   */
  deleteResolverQueryLogConfig(params: Route53Resolver.Types.DeleteResolverQueryLogConfigRequest, callback?: (err: AWSError, data: Route53Resolver.Types.DeleteResolverQueryLogConfigResponse) => void): Request<Route53Resolver.Types.DeleteResolverQueryLogConfigResponse, AWSError>;
  /**
   * Deletes a query logging configuration. When you delete a configuration, Resolver stops logging DNS queries for all of the Amazon VPCs that are associated with the configuration. This also applies if the query logging configuration is shared with other AWS accounts, and the other accounts have associated VPCs with the shared configuration. Before you can delete a query logging configuration, you must first disassociate all VPCs from the configuration. See DisassociateResolverQueryLogConfig. If you used Resource Access Manager (RAM) to share a query logging configuration with other accounts, you must stop sharing the configuration before you can delete a configuration. The accounts that you shared the configuration with can first disassociate VPCs that they associated with the configuration, but that's not necessary. If you stop sharing the configuration, those VPCs are automatically disassociated from the configuration.
   */
  deleteResolverQueryLogConfig(callback?: (err: AWSError, data: Route53Resolver.Types.DeleteResolverQueryLogConfigResponse) => void): Request<Route53Resolver.Types.DeleteResolverQueryLogConfigResponse, AWSError>;
  /**
   * Deletes a Resolver rule. Before you can delete a Resolver rule, you must disassociate it from all the VPCs that you associated the Resolver rule with. For more information, see DisassociateResolverRule.
   */
  deleteResolverRule(params: Route53Resolver.Types.DeleteResolverRuleRequest, callback?: (err: AWSError, data: Route53Resolver.Types.DeleteResolverRuleResponse) => void): Request<Route53Resolver.Types.DeleteResolverRuleResponse, AWSError>;
  /**
   * Deletes a Resolver rule. Before you can delete a Resolver rule, you must disassociate it from all the VPCs that you associated the Resolver rule with. For more information, see DisassociateResolverRule.
   */
  deleteResolverRule(callback?: (err: AWSError, data: Route53Resolver.Types.DeleteResolverRuleResponse) => void): Request<Route53Resolver.Types.DeleteResolverRuleResponse, AWSError>;
  /**
   * Removes IP addresses from an inbound or an outbound Resolver endpoint. If you want to remove more than one IP address, submit one DisassociateResolverEndpointIpAddress request for each IP address. To add an IP address to an endpoint, see AssociateResolverEndpointIpAddress. 
   */
  disassociateResolverEndpointIpAddress(params: Route53Resolver.Types.DisassociateResolverEndpointIpAddressRequest, callback?: (err: AWSError, data: Route53Resolver.Types.DisassociateResolverEndpointIpAddressResponse) => void): Request<Route53Resolver.Types.DisassociateResolverEndpointIpAddressResponse, AWSError>;
  /**
   * Removes IP addresses from an inbound or an outbound Resolver endpoint. If you want to remove more than one IP address, submit one DisassociateResolverEndpointIpAddress request for each IP address. To add an IP address to an endpoint, see AssociateResolverEndpointIpAddress. 
   */
  disassociateResolverEndpointIpAddress(callback?: (err: AWSError, data: Route53Resolver.Types.DisassociateResolverEndpointIpAddressResponse) => void): Request<Route53Resolver.Types.DisassociateResolverEndpointIpAddressResponse, AWSError>;
  /**
   * Disassociates a VPC from a query logging configuration.  Before you can delete a query logging configuration, you must first disassociate all VPCs from the configuration. If you used Resource Access Manager (RAM) to share a query logging configuration with other accounts, VPCs can be disassociated from the configuration in the following ways:   The accounts that you shared the configuration with can disassociate VPCs from the configuration.   You can stop sharing the configuration.   
   */
  disassociateResolverQueryLogConfig(params: Route53Resolver.Types.DisassociateResolverQueryLogConfigRequest, callback?: (err: AWSError, data: Route53Resolver.Types.DisassociateResolverQueryLogConfigResponse) => void): Request<Route53Resolver.Types.DisassociateResolverQueryLogConfigResponse, AWSError>;
  /**
   * Disassociates a VPC from a query logging configuration.  Before you can delete a query logging configuration, you must first disassociate all VPCs from the configuration. If you used Resource Access Manager (RAM) to share a query logging configuration with other accounts, VPCs can be disassociated from the configuration in the following ways:   The accounts that you shared the configuration with can disassociate VPCs from the configuration.   You can stop sharing the configuration.   
   */
  disassociateResolverQueryLogConfig(callback?: (err: AWSError, data: Route53Resolver.Types.DisassociateResolverQueryLogConfigResponse) => void): Request<Route53Resolver.Types.DisassociateResolverQueryLogConfigResponse, AWSError>;
  /**
   * Removes the association between a specified Resolver rule and a specified VPC.  If you disassociate a Resolver rule from a VPC, Resolver stops forwarding DNS queries for the domain name that you specified in the Resolver rule.  
   */
  disassociateResolverRule(params: Route53Resolver.Types.DisassociateResolverRuleRequest, callback?: (err: AWSError, data: Route53Resolver.Types.DisassociateResolverRuleResponse) => void): Request<Route53Resolver.Types.DisassociateResolverRuleResponse, AWSError>;
  /**
   * Removes the association between a specified Resolver rule and a specified VPC.  If you disassociate a Resolver rule from a VPC, Resolver stops forwarding DNS queries for the domain name that you specified in the Resolver rule.  
   */
  disassociateResolverRule(callback?: (err: AWSError, data: Route53Resolver.Types.DisassociateResolverRuleResponse) => void): Request<Route53Resolver.Types.DisassociateResolverRuleResponse, AWSError>;
  /**
   * Gets information about a specified Resolver endpoint, such as whether it's an inbound or an outbound Resolver endpoint, and the current status of the endpoint.
   */
  getResolverEndpoint(params: Route53Resolver.Types.GetResolverEndpointRequest, callback?: (err: AWSError, data: Route53Resolver.Types.GetResolverEndpointResponse) => void): Request<Route53Resolver.Types.GetResolverEndpointResponse, AWSError>;
  /**
   * Gets information about a specified Resolver endpoint, such as whether it's an inbound or an outbound Resolver endpoint, and the current status of the endpoint.
   */
  getResolverEndpoint(callback?: (err: AWSError, data: Route53Resolver.Types.GetResolverEndpointResponse) => void): Request<Route53Resolver.Types.GetResolverEndpointResponse, AWSError>;
  /**
   * Gets information about a specified Resolver query logging configuration, such as the number of VPCs that the configuration is logging queries for and the location that logs are sent to. 
   */
  getResolverQueryLogConfig(params: Route53Resolver.Types.GetResolverQueryLogConfigRequest, callback?: (err: AWSError, data: Route53Resolver.Types.GetResolverQueryLogConfigResponse) => void): Request<Route53Resolver.Types.GetResolverQueryLogConfigResponse, AWSError>;
  /**
   * Gets information about a specified Resolver query logging configuration, such as the number of VPCs that the configuration is logging queries for and the location that logs are sent to. 
   */
  getResolverQueryLogConfig(callback?: (err: AWSError, data: Route53Resolver.Types.GetResolverQueryLogConfigResponse) => void): Request<Route53Resolver.Types.GetResolverQueryLogConfigResponse, AWSError>;
  /**
   * Gets information about a specified association between a Resolver query logging configuration and an Amazon VPC. When you associate a VPC with a query logging configuration, Resolver logs DNS queries that originate in that VPC.
   */
  getResolverQueryLogConfigAssociation(params: Route53Resolver.Types.GetResolverQueryLogConfigAssociationRequest, callback?: (err: AWSError, data: Route53Resolver.Types.GetResolverQueryLogConfigAssociationResponse) => void): Request<Route53Resolver.Types.GetResolverQueryLogConfigAssociationResponse, AWSError>;
  /**
   * Gets information about a specified association between a Resolver query logging configuration and an Amazon VPC. When you associate a VPC with a query logging configuration, Resolver logs DNS queries that originate in that VPC.
   */
  getResolverQueryLogConfigAssociation(callback?: (err: AWSError, data: Route53Resolver.Types.GetResolverQueryLogConfigAssociationResponse) => void): Request<Route53Resolver.Types.GetResolverQueryLogConfigAssociationResponse, AWSError>;
  /**
   * Gets information about a query logging policy. A query logging policy specifies the Resolver query logging operations and resources that you want to allow another AWS account to be able to use.
   */
  getResolverQueryLogConfigPolicy(params: Route53Resolver.Types.GetResolverQueryLogConfigPolicyRequest, callback?: (err: AWSError, data: Route53Resolver.Types.GetResolverQueryLogConfigPolicyResponse) => void): Request<Route53Resolver.Types.GetResolverQueryLogConfigPolicyResponse, AWSError>;
  /**
   * Gets information about a query logging policy. A query logging policy specifies the Resolver query logging operations and resources that you want to allow another AWS account to be able to use.
   */
  getResolverQueryLogConfigPolicy(callback?: (err: AWSError, data: Route53Resolver.Types.GetResolverQueryLogConfigPolicyResponse) => void): Request<Route53Resolver.Types.GetResolverQueryLogConfigPolicyResponse, AWSError>;
  /**
   * Gets information about a specified Resolver rule, such as the domain name that the rule forwards DNS queries for and the ID of the outbound Resolver endpoint that the rule is associated with.
   */
  getResolverRule(params: Route53Resolver.Types.GetResolverRuleRequest, callback?: (err: AWSError, data: Route53Resolver.Types.GetResolverRuleResponse) => void): Request<Route53Resolver.Types.GetResolverRuleResponse, AWSError>;
  /**
   * Gets information about a specified Resolver rule, such as the domain name that the rule forwards DNS queries for and the ID of the outbound Resolver endpoint that the rule is associated with.
   */
  getResolverRule(callback?: (err: AWSError, data: Route53Resolver.Types.GetResolverRuleResponse) => void): Request<Route53Resolver.Types.GetResolverRuleResponse, AWSError>;
  /**
   * Gets information about an association between a specified Resolver rule and a VPC. You associate a Resolver rule and a VPC using AssociateResolverRule. 
   */
  getResolverRuleAssociation(params: Route53Resolver.Types.GetResolverRuleAssociationRequest, callback?: (err: AWSError, data: Route53Resolver.Types.GetResolverRuleAssociationResponse) => void): Request<Route53Resolver.Types.GetResolverRuleAssociationResponse, AWSError>;
  /**
   * Gets information about an association between a specified Resolver rule and a VPC. You associate a Resolver rule and a VPC using AssociateResolverRule. 
   */
  getResolverRuleAssociation(callback?: (err: AWSError, data: Route53Resolver.Types.GetResolverRuleAssociationResponse) => void): Request<Route53Resolver.Types.GetResolverRuleAssociationResponse, AWSError>;
  /**
   * Gets information about a Resolver rule policy. A Resolver rule policy specifies the Resolver operations and resources that you want to allow another AWS account to be able to use. 
   */
  getResolverRulePolicy(params: Route53Resolver.Types.GetResolverRulePolicyRequest, callback?: (err: AWSError, data: Route53Resolver.Types.GetResolverRulePolicyResponse) => void): Request<Route53Resolver.Types.GetResolverRulePolicyResponse, AWSError>;
  /**
   * Gets information about a Resolver rule policy. A Resolver rule policy specifies the Resolver operations and resources that you want to allow another AWS account to be able to use. 
   */
  getResolverRulePolicy(callback?: (err: AWSError, data: Route53Resolver.Types.GetResolverRulePolicyResponse) => void): Request<Route53Resolver.Types.GetResolverRulePolicyResponse, AWSError>;
  /**
   * Gets the IP addresses for a specified Resolver endpoint.
   */
  listResolverEndpointIpAddresses(params: Route53Resolver.Types.ListResolverEndpointIpAddressesRequest, callback?: (err: AWSError, data: Route53Resolver.Types.ListResolverEndpointIpAddressesResponse) => void): Request<Route53Resolver.Types.ListResolverEndpointIpAddressesResponse, AWSError>;
  /**
   * Gets the IP addresses for a specified Resolver endpoint.
   */
  listResolverEndpointIpAddresses(callback?: (err: AWSError, data: Route53Resolver.Types.ListResolverEndpointIpAddressesResponse) => void): Request<Route53Resolver.Types.ListResolverEndpointIpAddressesResponse, AWSError>;
  /**
   * Lists all the Resolver endpoints that were created using the current AWS account.
   */
  listResolverEndpoints(params: Route53Resolver.Types.ListResolverEndpointsRequest, callback?: (err: AWSError, data: Route53Resolver.Types.ListResolverEndpointsResponse) => void): Request<Route53Resolver.Types.ListResolverEndpointsResponse, AWSError>;
  /**
   * Lists all the Resolver endpoints that were created using the current AWS account.
   */
  listResolverEndpoints(callback?: (err: AWSError, data: Route53Resolver.Types.ListResolverEndpointsResponse) => void): Request<Route53Resolver.Types.ListResolverEndpointsResponse, AWSError>;
  /**
   * Lists information about associations between Amazon VPCs and query logging configurations.
   */
  listResolverQueryLogConfigAssociations(params: Route53Resolver.Types.ListResolverQueryLogConfigAssociationsRequest, callback?: (err: AWSError, data: Route53Resolver.Types.ListResolverQueryLogConfigAssociationsResponse) => void): Request<Route53Resolver.Types.ListResolverQueryLogConfigAssociationsResponse, AWSError>;
  /**
   * Lists information about associations between Amazon VPCs and query logging configurations.
   */
  listResolverQueryLogConfigAssociations(callback?: (err: AWSError, data: Route53Resolver.Types.ListResolverQueryLogConfigAssociationsResponse) => void): Request<Route53Resolver.Types.ListResolverQueryLogConfigAssociationsResponse, AWSError>;
  /**
   * Lists information about the specified query logging configurations. Each configuration defines where you want Resolver to save DNS query logs and specifies the VPCs that you want to log queries for.
   */
  listResolverQueryLogConfigs(params: Route53Resolver.Types.ListResolverQueryLogConfigsRequest, callback?: (err: AWSError, data: Route53Resolver.Types.ListResolverQueryLogConfigsResponse) => void): Request<Route53Resolver.Types.ListResolverQueryLogConfigsResponse, AWSError>;
  /**
   * Lists information about the specified query logging configurations. Each configuration defines where you want Resolver to save DNS query logs and specifies the VPCs that you want to log queries for.
   */
  listResolverQueryLogConfigs(callback?: (err: AWSError, data: Route53Resolver.Types.ListResolverQueryLogConfigsResponse) => void): Request<Route53Resolver.Types.ListResolverQueryLogConfigsResponse, AWSError>;
  /**
   * Lists the associations that were created between Resolver rules and VPCs using the current AWS account.
   */
  listResolverRuleAssociations(params: Route53Resolver.Types.ListResolverRuleAssociationsRequest, callback?: (err: AWSError, data: Route53Resolver.Types.ListResolverRuleAssociationsResponse) => void): Request<Route53Resolver.Types.ListResolverRuleAssociationsResponse, AWSError>;
  /**
   * Lists the associations that were created between Resolver rules and VPCs using the current AWS account.
   */
  listResolverRuleAssociations(callback?: (err: AWSError, data: Route53Resolver.Types.ListResolverRuleAssociationsResponse) => void): Request<Route53Resolver.Types.ListResolverRuleAssociationsResponse, AWSError>;
  /**
   * Lists the Resolver rules that were created using the current AWS account.
   */
  listResolverRules(params: Route53Resolver.Types.ListResolverRulesRequest, callback?: (err: AWSError, data: Route53Resolver.Types.ListResolverRulesResponse) => void): Request<Route53Resolver.Types.ListResolverRulesResponse, AWSError>;
  /**
   * Lists the Resolver rules that were created using the current AWS account.
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
   * Specifies an AWS account that you want to share a query logging configuration with, the query logging configuration that you want to share, and the operations that you want the account to be able to perform on the configuration.
   */
  putResolverQueryLogConfigPolicy(params: Route53Resolver.Types.PutResolverQueryLogConfigPolicyRequest, callback?: (err: AWSError, data: Route53Resolver.Types.PutResolverQueryLogConfigPolicyResponse) => void): Request<Route53Resolver.Types.PutResolverQueryLogConfigPolicyResponse, AWSError>;
  /**
   * Specifies an AWS account that you want to share a query logging configuration with, the query logging configuration that you want to share, and the operations that you want the account to be able to perform on the configuration.
   */
  putResolverQueryLogConfigPolicy(callback?: (err: AWSError, data: Route53Resolver.Types.PutResolverQueryLogConfigPolicyResponse) => void): Request<Route53Resolver.Types.PutResolverQueryLogConfigPolicyResponse, AWSError>;
  /**
   * Specifies an AWS account that you want to share rules with, the Resolver rules that you want to share, and the operations that you want the account to be able to perform on those rules.
   */
  putResolverRulePolicy(params: Route53Resolver.Types.PutResolverRulePolicyRequest, callback?: (err: AWSError, data: Route53Resolver.Types.PutResolverRulePolicyResponse) => void): Request<Route53Resolver.Types.PutResolverRulePolicyResponse, AWSError>;
  /**
   * Specifies an AWS account that you want to share rules with, the Resolver rules that you want to share, and the operations that you want the account to be able to perform on those rules.
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
   * Updates the name of an inbound or an outbound Resolver endpoint. 
   */
  updateResolverEndpoint(params: Route53Resolver.Types.UpdateResolverEndpointRequest, callback?: (err: AWSError, data: Route53Resolver.Types.UpdateResolverEndpointResponse) => void): Request<Route53Resolver.Types.UpdateResolverEndpointResponse, AWSError>;
  /**
   * Updates the name of an inbound or an outbound Resolver endpoint. 
   */
  updateResolverEndpoint(callback?: (err: AWSError, data: Route53Resolver.Types.UpdateResolverEndpointResponse) => void): Request<Route53Resolver.Types.UpdateResolverEndpointResponse, AWSError>;
  /**
   * Updates settings for a specified Resolver rule. ResolverRuleId is required, and all other parameters are optional. If you don't specify a parameter, it retains its current value.
   */
  updateResolverRule(params: Route53Resolver.Types.UpdateResolverRuleRequest, callback?: (err: AWSError, data: Route53Resolver.Types.UpdateResolverRuleResponse) => void): Request<Route53Resolver.Types.UpdateResolverRuleResponse, AWSError>;
  /**
   * Updates settings for a specified Resolver rule. ResolverRuleId is required, and all other parameters are optional. If you don't specify a parameter, it retains its current value.
   */
  updateResolverRule(callback?: (err: AWSError, data: Route53Resolver.Types.UpdateResolverRuleResponse) => void): Request<Route53Resolver.Types.UpdateResolverRuleResponse, AWSError>;
}
declare namespace Route53Resolver {
  export type AccountId = string;
  export type Arn = string;
  export interface AssociateResolverEndpointIpAddressRequest {
    /**
     * The ID of the Resolver endpoint that you want to associate IP addresses with.
     */
    ResolverEndpointId: ResourceId;
    /**
     * Either the IPv4 address that you want to add to a Resolver endpoint or a subnet ID. If you specify a subnet ID, Resolver chooses an IP address for you from the available IPs in the specified subnet.
     */
    IpAddress: IpAddressUpdate;
  }
  export interface AssociateResolverEndpointIpAddressResponse {
    /**
     * The response to an AssociateResolverEndpointIpAddress request.
     */
    ResolverEndpoint?: ResolverEndpoint;
  }
  export interface AssociateResolverQueryLogConfigRequest {
    /**
     * The ID of the query logging configuration that you want to associate a VPC with.
     */
    ResolverQueryLogConfigId: ResourceId;
    /**
     * The ID of an Amazon VPC that you want this query logging configuration to log queries for.  The VPCs and the query logging configuration must be in the same Region. 
     */
    ResourceId: ResourceId;
  }
  export interface AssociateResolverQueryLogConfigResponse {
    /**
     * A complex type that contains settings for a specified association between an Amazon VPC and a query logging configuration.
     */
    ResolverQueryLogConfigAssociation?: ResolverQueryLogConfigAssociation;
  }
  export interface AssociateResolverRuleRequest {
    /**
     * The ID of the Resolver rule that you want to associate with the VPC. To list the existing Resolver rules, use ListResolverRules.
     */
    ResolverRuleId: ResourceId;
    /**
     * A name for the association that you're creating between a Resolver rule and a VPC.
     */
    Name?: Name;
    /**
     * The ID of the VPC that you want to associate the Resolver rule with.
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
  export type Count = number;
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
     * The ID of one or more security groups that you want to use to control access to this VPC. The security group that you specify must include one or more inbound rules (for inbound Resolver endpoints) or outbound rules (for outbound Resolver endpoints). Inbound and outbound rules must allow TCP and UDP access. For inbound access, open port 53. For outbound access, open the port that you're using for DNS queries on your network.
     */
    SecurityGroupIds: SecurityGroupIds;
    /**
     * Specify the applicable value:    INBOUND: Resolver forwards DNS queries to the DNS service for a VPC from your network    OUTBOUND: Resolver forwards DNS queries from the DNS service for a VPC to your network  
     */
    Direction: ResolverEndpointDirection;
    /**
     * The subnets and IP addresses in your VPC that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints). The subnet ID uniquely identifies a VPC. 
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
  export interface CreateResolverQueryLogConfigRequest {
    /**
     * The name that you want to give the query logging configuration
     */
    Name: ResolverQueryLogConfigName;
    /**
     * The ARN of the resource that you want Resolver to send query logs. You can send query logs to an S3 bucket, a CloudWatch Logs log group, or a Kinesis Data Firehose delivery stream. Examples of valid values include the following:    S3 bucket:   arn:aws:s3:::examplebucket  You can optionally append a file prefix to the end of the ARN.  arn:aws:s3:::examplebucket/development/     CloudWatch Logs log group:   arn:aws:logs:us-west-1:123456789012:log-group:/mystack-testgroup-12ABC1AB12A1:*     Kinesis Data Firehose delivery stream:  arn:aws:kinesis:us-east-2:0123456789:stream/my_stream_name   
     */
    DestinationArn: DestinationArn;
    /**
     * A unique string that identifies the request and that allows failed requests to be retried without the risk of executing the operation twice. CreatorRequestId can be any unique string, for example, a date/time stamp. 
     */
    CreatorRequestId: CreatorRequestId;
    /**
     * A list of the tag keys and values that you want to associate with the query logging configuration.
     */
    Tags?: TagList;
  }
  export interface CreateResolverQueryLogConfigResponse {
    /**
     * Information about the CreateResolverQueryLogConfig request, including the status of the request.
     */
    ResolverQueryLogConfig?: ResolverQueryLogConfig;
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
     * When you want to forward DNS queries for specified domain name to resolvers on your network, specify FORWARD. When you have a forwarding rule to forward DNS queries for a domain to your network and you want Resolver to process queries for a subdomain of that domain, specify SYSTEM. For example, to forward DNS queries for example.com to resolvers on your network, you create a rule and specify FORWARD for RuleType. To then have Resolver process queries for apex.example.com, you create a rule and specify SYSTEM for RuleType. Currently, only Resolver can create rules that have a value of RECURSIVE for RuleType.
     */
    RuleType: RuleTypeOption;
    /**
     * DNS queries for this domain name are forwarded to the IP addresses that you specify in TargetIps. If a query matches multiple Resolver rules (example.com and www.example.com), outbound DNS queries are routed using the Resolver rule that contains the most specific domain name (www.example.com).
     */
    DomainName: DomainName;
    /**
     * The IPs that you want Resolver to forward DNS queries to. You can specify only IPv4 addresses. Separate IP addresses with a comma.  TargetIps is available only when the value of Rule type is FORWARD.
     */
    TargetIps?: TargetList;
    /**
     * The ID of the outbound Resolver endpoint that you want to use to route DNS queries to the IP addresses that you specify in TargetIps.
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
     * The ID of the Resolver endpoint that you want to delete.
     */
    ResolverEndpointId: ResourceId;
  }
  export interface DeleteResolverEndpointResponse {
    /**
     * Information about the DeleteResolverEndpoint request, including the status of the request.
     */
    ResolverEndpoint?: ResolverEndpoint;
  }
  export interface DeleteResolverQueryLogConfigRequest {
    /**
     * The ID of the query logging configuration that you want to delete.
     */
    ResolverQueryLogConfigId: ResourceId;
  }
  export interface DeleteResolverQueryLogConfigResponse {
    /**
     * Information about the query logging configuration that you deleted, including the status of the request.
     */
    ResolverQueryLogConfig?: ResolverQueryLogConfig;
  }
  export interface DeleteResolverRuleRequest {
    /**
     * The ID of the Resolver rule that you want to delete.
     */
    ResolverRuleId: ResourceId;
  }
  export interface DeleteResolverRuleResponse {
    /**
     * Information about the DeleteResolverRule request, including the status of the request.
     */
    ResolverRule?: ResolverRule;
  }
  export type DestinationArn = string;
  export interface DisassociateResolverEndpointIpAddressRequest {
    /**
     * The ID of the Resolver endpoint that you want to disassociate an IP address from.
     */
    ResolverEndpointId: ResourceId;
    /**
     * The IPv4 address that you want to remove from a Resolver endpoint.
     */
    IpAddress: IpAddressUpdate;
  }
  export interface DisassociateResolverEndpointIpAddressResponse {
    /**
     * The response to an DisassociateResolverEndpointIpAddress request.
     */
    ResolverEndpoint?: ResolverEndpoint;
  }
  export interface DisassociateResolverQueryLogConfigRequest {
    /**
     * The ID of the query logging configuration that you want to disassociate a specified VPC from.
     */
    ResolverQueryLogConfigId: ResourceId;
    /**
     * The ID of the Amazon VPC that you want to disassociate from a specified query logging configuration.
     */
    ResourceId: ResourceId;
  }
  export interface DisassociateResolverQueryLogConfigResponse {
    /**
     * A complex type that contains settings for the association that you deleted between an Amazon VPC and a query logging configuration.
     */
    ResolverQueryLogConfigAssociation?: ResolverQueryLogConfigAssociation;
  }
  export interface DisassociateResolverRuleRequest {
    /**
     * The ID of the VPC that you want to disassociate the Resolver rule from.
     */
    VPCId: ResourceId;
    /**
     * The ID of the Resolver rule that you want to disassociate from the specified VPC.
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
     * The name of the parameter that you want to use to filter objects. The valid values for Name depend on the action that you're including the filter in, ListResolverEndpoints, ListResolverRules, ListResolverRuleAssociations, ListResolverQueryLogConfigs, or ListResolverQueryLogConfigAssociations.  In early versions of Resolver, values for Name were listed as uppercase, with underscore (_) delimiters. For example, CreatorRequestId was originally listed as CREATOR_REQUEST_ID. Uppercase values for Name are still supported.   ListResolverEndpoints  Valid values for Name include the following:    CreatorRequestId: The value that you specified when you created the Resolver endpoint.    Direction: Whether you want to return inbound or outbound Resolver endpoints. If you specify DIRECTION for Name, specify INBOUND or OUTBOUND for Values.    HostVpcId: The ID of the VPC that inbound DNS queries pass through on the way from your network to your VPCs in a region, or the VPC that outbound queries pass through on the way from your VPCs to your network. In a CreateResolverEndpoint request, SubnetId indirectly identifies the VPC. In a GetResolverEndpoint request, the VPC ID for a Resolver endpoint is returned in the HostVPCId element.     IpAddressCount: The number of IP addresses that you have associated with the Resolver endpoint.    Name: The name of the Resolver endpoint.    SecurityGroupIds: The IDs of the VPC security groups that you specified when you created the Resolver endpoint.    Status: The status of the Resolver endpoint. If you specify Status for Name, specify one of the following status codes for Values: CREATING, OPERATIONAL, UPDATING, AUTO_RECOVERING, ACTION_NEEDED, or DELETING. For more information, see Status in ResolverEndpoint.    ListResolverRules  Valid values for Name include the following:    CreatorRequestId: The value that you specified when you created the Resolver rule.    DomainName: The domain name for which Resolver is forwarding DNS queries to your network. In the value that you specify for Values, include a trailing dot (.) after the domain name. For example, if the domain name is example.com, specify the following value. Note the "." after com:  example.com.     Name: The name of the Resolver rule.    ResolverEndpointId: The ID of the Resolver endpoint that the Resolver rule is associated with.  You can filter on the Resolver endpoint only for rules that have a value of FORWARD for RuleType.     Status: The status of the Resolver rule. If you specify Status for Name, specify one of the following status codes for Values: COMPLETE, DELETING, UPDATING, or FAILED.    Type: The type of the Resolver rule. If you specify TYPE for Name, specify FORWARD or SYSTEM for Values.    ListResolverRuleAssociations  Valid values for Name include the following:    Name: The name of the Resolver rule association.    ResolverRuleId: The ID of the Resolver rule that is associated with one or more VPCs.    Status: The status of the Resolver rule association. If you specify Status for Name, specify one of the following status codes for Values: CREATING, COMPLETE, DELETING, or FAILED.    VPCId: The ID of the VPC that the Resolver rule is associated with.    ListResolverQueryLogConfigs  Valid values for Name include the following:    Arn: The ARN for the query logging configuration.    AssociationCount: The number of VPCs that are associated with the query logging configuration.    CreationTime: The date and time that the query logging configuration was created, in Unix time format and Coordinated Universal Time (UTC).     CreatorRequestId: A unique string that identifies the request that created the query logging configuration.    Destination: The AWS service that you want to forward query logs to. Valid values include the following:    S3     CloudWatchLogs     KinesisFirehose       DestinationArn: The ARN of the location that Resolver is sending query logs to. This value can be the ARN for an S3 bucket, a CloudWatch Logs log group, or a Kinesis Data Firehose delivery stream.    Id: The ID of the query logging configuration    Name: The name of the query logging configuration    OwnerId: The AWS account ID for the account that created the query logging configuration.    ShareStatus: An indication of whether the query logging configuration is shared with other AWS accounts, or was shared with the current account by another AWS account. Valid values include: NOT_SHARED, SHARED_WITH_ME, or SHARED_BY_ME.    Status: The status of the query logging configuration. If you specify Status for Name, specify the applicable status code for Values: CREATING, CREATED, DELETING, or FAILED. For more information, see Status.     ListResolverQueryLogConfigAssociations  Valid values for Name include the following:    CreationTime: The date and time that the VPC was associated with the query logging configuration, in Unix time format and Coordinated Universal Time (UTC).    Error: If the value of Status is FAILED, specify the cause: DESTINATION_NOT_FOUND or ACCESS_DENIED.    Id: The ID of the query logging association.    ResolverQueryLogConfigId: The ID of the query logging configuration that a VPC is associated with.    ResourceId: The ID of the Amazon VPC that is associated with the query logging configuration.    Status: The status of the query logging association. If you specify Status for Name, specify the applicable status code for Values: CREATING, CREATED, DELETING, or FAILED. For more information, see Status.   
     */
    Name?: FilterName;
    /**
     * When you're using a List operation and you want the operation to return a subset of objects, such as Resolver endpoints or Resolver rules, the value of the parameter that you want to use to filter objects. For example, to list only inbound Resolver endpoints, specify Direction for Name and specify INBOUND for Values.
     */
    Values?: FilterValues;
  }
  export type FilterName = string;
  export type FilterValue = string;
  export type FilterValues = FilterValue[];
  export type Filters = Filter[];
  export interface GetResolverEndpointRequest {
    /**
     * The ID of the Resolver endpoint that you want to get information about.
     */
    ResolverEndpointId: ResourceId;
  }
  export interface GetResolverEndpointResponse {
    /**
     * Information about the Resolver endpoint that you specified in a GetResolverEndpoint request.
     */
    ResolverEndpoint?: ResolverEndpoint;
  }
  export interface GetResolverQueryLogConfigAssociationRequest {
    /**
     * The ID of the Resolver query logging configuration association that you want to get information about.
     */
    ResolverQueryLogConfigAssociationId: ResourceId;
  }
  export interface GetResolverQueryLogConfigAssociationResponse {
    /**
     * Information about the Resolver query logging configuration association that you specified in a GetQueryLogConfigAssociation request.
     */
    ResolverQueryLogConfigAssociation?: ResolverQueryLogConfigAssociation;
  }
  export interface GetResolverQueryLogConfigPolicyRequest {
    /**
     * The ARN of the query logging configuration that you want to get the query logging policy for.
     */
    Arn: Arn;
  }
  export interface GetResolverQueryLogConfigPolicyResponse {
    /**
     * Information about the query logging policy for the query logging configuration that you specified in a GetResolverQueryLogConfigPolicy request.
     */
    ResolverQueryLogConfigPolicy?: ResolverQueryLogConfigPolicy;
  }
  export interface GetResolverQueryLogConfigRequest {
    /**
     * The ID of the Resolver query logging configuration that you want to get information about.
     */
    ResolverQueryLogConfigId: ResourceId;
  }
  export interface GetResolverQueryLogConfigResponse {
    /**
     * Information about the Resolver query logging configuration that you specified in a GetQueryLogConfig request.
     */
    ResolverQueryLogConfig?: ResolverQueryLogConfig;
  }
  export interface GetResolverRuleAssociationRequest {
    /**
     * The ID of the Resolver rule association that you want to get information about.
     */
    ResolverRuleAssociationId: ResourceId;
  }
  export interface GetResolverRuleAssociationResponse {
    /**
     * Information about the Resolver rule association that you specified in a GetResolverRuleAssociation request.
     */
    ResolverRuleAssociation?: ResolverRuleAssociation;
  }
  export interface GetResolverRulePolicyRequest {
    /**
     * The ID of the Resolver rule policy that you want to get information about.
     */
    Arn: Arn;
  }
  export interface GetResolverRulePolicyResponse {
    /**
     * Information about the Resolver rule policy that you specified in a GetResolverRulePolicy request.
     */
    ResolverRulePolicy?: ResolverRulePolicy;
  }
  export interface GetResolverRuleRequest {
    /**
     * The ID of the Resolver rule that you want to get information about.
     */
    ResolverRuleId: ResourceId;
  }
  export interface GetResolverRuleResponse {
    /**
     * Information about the Resolver rule that you specified in a GetResolverRule request.
     */
    ResolverRule?: ResolverRule;
  }
  export type Ip = string;
  export type IpAddressCount = number;
  export interface IpAddressRequest {
    /**
     * The ID of the subnet that contains the IP address. 
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
     * One IP address that the Resolver endpoint uses for DNS queries.
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
     *  Only when removing an IP address from a Resolver endpoint: The ID of the IP address that you want to remove. To get this ID, use GetResolverEndpoint.
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
     * The ID of the Resolver endpoint that you want to get IP addresses for.
     */
    ResolverEndpointId: ResourceId;
    /**
     * The maximum number of IP addresses that you want to return in the response to a ListResolverEndpointIpAddresses request. If you don't specify a value for MaxResults, Resolver returns up to 100 IP addresses. 
     */
    MaxResults?: MaxResults;
    /**
     * For the first ListResolverEndpointIpAddresses request, omit this value. If the specified Resolver endpoint has more than MaxResults IP addresses, you can submit another ListResolverEndpointIpAddresses request to get the next group of IP addresses. In the next request, specify the value of NextToken from the previous response. 
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
     * Information about the IP addresses in your VPC that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints).
     */
    IpAddresses?: IpAddressesResponse;
  }
  export interface ListResolverEndpointsRequest {
    /**
     * The maximum number of Resolver endpoints that you want to return in the response to a ListResolverEndpoints request. If you don't specify a value for MaxResults, Resolver returns up to 100 Resolver endpoints. 
     */
    MaxResults?: MaxResults;
    /**
     * For the first ListResolverEndpoints request, omit this value. If you have more than MaxResults Resolver endpoints, you can submit another ListResolverEndpoints request to get the next group of Resolver endpoints. In the next request, specify the value of NextToken from the previous response. 
     */
    NextToken?: NextToken;
    /**
     * An optional specification to return a subset of Resolver endpoints, such as all inbound Resolver endpoints.  If you submit a second or subsequent ListResolverEndpoints request and specify the NextToken parameter, you must use the same values for Filters, if any, as in the previous request. 
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
     * The Resolver endpoints that were created by using the current AWS account, and that match the specified filters, if any.
     */
    ResolverEndpoints?: ResolverEndpoints;
  }
  export interface ListResolverQueryLogConfigAssociationsRequest {
    /**
     * The maximum number of query logging associations that you want to return in the response to a ListResolverQueryLogConfigAssociations request. If you don't specify a value for MaxResults, Resolver returns up to 100 query logging associations. 
     */
    MaxResults?: MaxResults;
    /**
     * For the first ListResolverQueryLogConfigAssociations request, omit this value. If there are more than MaxResults query logging associations that match the values that you specify for Filters, you can submit another ListResolverQueryLogConfigAssociations request to get the next group of associations. In the next request, specify the value of NextToken from the previous response. 
     */
    NextToken?: NextToken;
    /**
     * An optional specification to return a subset of query logging associations.  If you submit a second or subsequent ListResolverQueryLogConfigAssociations request and specify the NextToken parameter, you must use the same values for Filters, if any, as in the previous request. 
     */
    Filters?: Filters;
    /**
     * The element that you want Resolver to sort query logging associations by.   If you submit a second or subsequent ListResolverQueryLogConfigAssociations request and specify the NextToken parameter, you must use the same value for SortBy, if any, as in the previous request.  Valid values include the following elements:    CreationTime: The ID of the query logging association.    Error: If the value of Status is FAILED, the value of Error indicates the cause:     DESTINATION_NOT_FOUND: The specified destination (for example, an Amazon S3 bucket) was deleted.    ACCESS_DENIED: Permissions don't allow sending logs to the destination.   If Status is a value other than FAILED, ERROR is null.    Id: The ID of the query logging association    ResolverQueryLogConfigId: The ID of the query logging configuration    ResourceId: The ID of the VPC that is associated with the query logging configuration    Status: The current status of the configuration. Valid values include the following:    CREATING: Resolver is creating an association between an Amazon VPC and a query logging configuration.    CREATED: The association between an Amazon VPC and a query logging configuration was successfully created. Resolver is logging queries that originate in the specified VPC.    DELETING: Resolver is deleting this query logging association.    FAILED: Resolver either couldn't create or couldn't delete the query logging association. Here are two common causes:   The specified destination (for example, an Amazon S3 bucket) was deleted.   Permissions don't allow sending logs to the destination.      
     */
    SortBy?: SortByKey;
    /**
     * If you specified a value for SortBy, the order that you want query logging associations to be listed in, ASCENDING or DESCENDING.  If you submit a second or subsequent ListResolverQueryLogConfigAssociations request and specify the NextToken parameter, you must use the same value for SortOrder, if any, as in the previous request. 
     */
    SortOrder?: SortOrder;
  }
  export interface ListResolverQueryLogConfigAssociationsResponse {
    /**
     * If there are more than MaxResults query logging associations, you can submit another ListResolverQueryLogConfigAssociations request to get the next group of associations. In the next request, specify the value of NextToken from the previous response. 
     */
    NextToken?: NextToken;
    /**
     * The total number of query logging associations that were created by the current account in the specified Region. This count can differ from the number of associations that are returned in a ListResolverQueryLogConfigAssociations response, depending on the values that you specify in the request.
     */
    TotalCount?: Count;
    /**
     * The total number of query logging associations that were created by the current account in the specified Region and that match the filters that were specified in the ListResolverQueryLogConfigAssociations request. For the total number of associations that were created by the current account in the specified Region, see TotalCount.
     */
    TotalFilteredCount?: Count;
    /**
     * A list that contains one ResolverQueryLogConfigAssociations element for each query logging association that matches the values that you specified for Filter.
     */
    ResolverQueryLogConfigAssociations?: ResolverQueryLogConfigAssociationList;
  }
  export interface ListResolverQueryLogConfigsRequest {
    /**
     * The maximum number of query logging configurations that you want to return in the response to a ListResolverQueryLogConfigs request. If you don't specify a value for MaxResults, Resolver returns up to 100 query logging configurations. 
     */
    MaxResults?: MaxResults;
    /**
     * For the first ListResolverQueryLogConfigs request, omit this value. If there are more than MaxResults query logging configurations that match the values that you specify for Filters, you can submit another ListResolverQueryLogConfigs request to get the next group of configurations. In the next request, specify the value of NextToken from the previous response. 
     */
    NextToken?: NextToken;
    /**
     * An optional specification to return a subset of query logging configurations.  If you submit a second or subsequent ListResolverQueryLogConfigs request and specify the NextToken parameter, you must use the same values for Filters, if any, as in the previous request. 
     */
    Filters?: Filters;
    /**
     * The element that you want Resolver to sort query logging configurations by.   If you submit a second or subsequent ListResolverQueryLogConfigs request and specify the NextToken parameter, you must use the same value for SortBy, if any, as in the previous request.  Valid values include the following elements:    Arn: The ARN of the query logging configuration    AssociationCount: The number of VPCs that are associated with the specified configuration     CreationTime: The date and time that Resolver returned when the configuration was created    CreatorRequestId: The value that was specified for CreatorRequestId when the configuration was created    DestinationArn: The location that logs are sent to    Id: The ID of the configuration    Name: The name of the configuration    OwnerId: The AWS account number of the account that created the configuration    ShareStatus: Whether the configuration is shared with other AWS accounts or shared with the current account by another AWS account. Sharing is configured through AWS Resource Access Manager (AWS RAM).    Status: The current status of the configuration. Valid values include the following:    CREATING: Resolver is creating the query logging configuration.    CREATED: The query logging configuration was successfully created. Resolver is logging queries that originate in the specified VPC.    DELETING: Resolver is deleting this query logging configuration.    FAILED: Resolver either couldn't create or couldn't delete the query logging configuration. Here are two common causes:   The specified destination (for example, an Amazon S3 bucket) was deleted.   Permissions don't allow sending logs to the destination.      
     */
    SortBy?: SortByKey;
    /**
     * If you specified a value for SortBy, the order that you want query logging configurations to be listed in, ASCENDING or DESCENDING.  If you submit a second or subsequent ListResolverQueryLogConfigs request and specify the NextToken parameter, you must use the same value for SortOrder, if any, as in the previous request. 
     */
    SortOrder?: SortOrder;
  }
  export interface ListResolverQueryLogConfigsResponse {
    /**
     * If there are more than MaxResults query logging configurations, you can submit another ListResolverQueryLogConfigs request to get the next group of configurations. In the next request, specify the value of NextToken from the previous response. 
     */
    NextToken?: NextToken;
    /**
     * The total number of query logging configurations that were created by the current account in the specified Region. This count can differ from the number of query logging configurations that are returned in a ListResolverQueryLogConfigs response, depending on the values that you specify in the request.
     */
    TotalCount?: Count;
    /**
     * The total number of query logging configurations that were created by the current account in the specified Region and that match the filters that were specified in the ListResolverQueryLogConfigs request. For the total number of query logging configurations that were created by the current account in the specified Region, see TotalCount.
     */
    TotalFilteredCount?: Count;
    /**
     * A list that contains one ResolverQueryLogConfig element for each query logging configuration that matches the values that you specified for Filter.
     */
    ResolverQueryLogConfigs?: ResolverQueryLogConfigList;
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
     * An optional specification to return a subset of Resolver rules, such as Resolver rules that are associated with the same VPC ID.  If you submit a second or subsequent ListResolverRuleAssociations request and specify the NextToken parameter, you must use the same values for Filters, if any, as in the previous request. 
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
     * The associations that were created between Resolver rules and VPCs using the current AWS account, and that match the specified filters, if any.
     */
    ResolverRuleAssociations?: ResolverRuleAssociations;
  }
  export interface ListResolverRulesRequest {
    /**
     * The maximum number of Resolver rules that you want to return in the response to a ListResolverRules request. If you don't specify a value for MaxResults, Resolver returns up to 100 Resolver rules.
     */
    MaxResults?: MaxResults;
    /**
     * For the first ListResolverRules request, omit this value. If you have more than MaxResults Resolver rules, you can submit another ListResolverRules request to get the next group of Resolver rules. In the next request, specify the value of NextToken from the previous response. 
     */
    NextToken?: NextToken;
    /**
     * An optional specification to return a subset of Resolver rules, such as all Resolver rules that are associated with the same Resolver endpoint.  If you submit a second or subsequent ListResolverRules request and specify the NextToken parameter, you must use the same values for Filters, if any, as in the previous request. 
     */
    Filters?: Filters;
  }
  export interface ListResolverRulesResponse {
    /**
     * If more than MaxResults Resolver rules match the specified criteria, you can submit another ListResolverRules request to get the next group of results. In the next request, specify the value of NextToken from the previous response. 
     */
    NextToken?: NextToken;
    /**
     * The value that you specified for MaxResults in the request.
     */
    MaxResults?: MaxResults;
    /**
     * The Resolver rules that were created using the current AWS account and that match the specified filters, if any.
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
  export interface PutResolverQueryLogConfigPolicyRequest {
    /**
     * The Amazon Resource Name (ARN) of the account that you want to share rules with.
     */
    Arn: Arn;
    /**
     * An AWS Identity and Access Management policy statement that lists the query logging configurations that you want to share with another AWS account and the operations that you want the account to be able to perform. You can specify the following operations in the Actions section of the statement:    route53resolver:AssociateResolverQueryLogConfig     route53resolver:DisassociateResolverQueryLogConfig     route53resolver:ListResolverQueryLogConfigAssociations     route53resolver:ListResolverQueryLogConfigs    In the Resource section of the statement, you specify the ARNs for the query logging configurations that you want to share with the account that you specified in Arn. 
     */
    ResolverQueryLogConfigPolicy: ResolverQueryLogConfigPolicy;
  }
  export interface PutResolverQueryLogConfigPolicyResponse {
    /**
     * Whether the PutResolverQueryLogConfigPolicy request was successful.
     */
    ReturnValue?: Boolean;
  }
  export interface PutResolverRulePolicyRequest {
    /**
     * The Amazon Resource Name (ARN) of the account that you want to share rules with.
     */
    Arn: Arn;
    /**
     * An AWS Identity and Access Management policy statement that lists the rules that you want to share with another AWS account and the operations that you want the account to be able to perform. You can specify the following operations in the Actions section of the statement:    route53resolver:GetResolverRule     route53resolver:AssociateResolverRule     route53resolver:DisassociateResolverRule     route53resolver:ListResolverRules     route53resolver:ListResolverRuleAssociations    In the Resource section of the statement, you specify the ARNs for the rules that you want to share with the account that you specified in Arn. 
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
     * The ID of the Resolver endpoint.
     */
    Id?: ResourceId;
    /**
     * A unique string that identifies the request that created the Resolver endpoint. The CreatorRequestId allows failed requests to be retried without the risk of executing the operation twice.
     */
    CreatorRequestId?: CreatorRequestId;
    /**
     * The ARN (Amazon Resource Name) for the Resolver endpoint.
     */
    Arn?: Arn;
    /**
     * The name that you assigned to the Resolver endpoint when you submitted a CreateResolverEndpoint request.
     */
    Name?: Name;
    /**
     * The ID of one or more security groups that control access to this VPC. The security group must include one or more inbound rules (for inbound endpoints) or outbound rules (for outbound endpoints). Inbound and outbound rules must allow TCP and UDP access. For inbound access, open port 53. For outbound access, open the port that you're using for DNS queries on your network.
     */
    SecurityGroupIds?: SecurityGroupIds;
    /**
     * Indicates whether the Resolver endpoint allows inbound or outbound DNS queries:    INBOUND: allows DNS queries to your VPC from your network    OUTBOUND: allows DNS queries from your VPC to your network  
     */
    Direction?: ResolverEndpointDirection;
    /**
     * The number of IP addresses that the Resolver endpoint can use for DNS queries.
     */
    IpAddressCount?: IpAddressCount;
    /**
     * The ID of the VPC that you want to create the Resolver endpoint in.
     */
    HostVPCId?: ResourceId;
    /**
     * A code that specifies the current status of the Resolver endpoint. Valid values include the following:    CREATING: Resolver is creating and configuring one or more Amazon VPC network interfaces for this endpoint.    OPERATIONAL: The Amazon VPC network interfaces for this endpoint are correctly configured and able to pass inbound or outbound DNS queries between your network and Resolver.    UPDATING: Resolver is associating or disassociating one or more network interfaces with this endpoint.    AUTO_RECOVERING: Resolver is trying to recover one or more of the network interfaces that are associated with this endpoint. During the recovery process, the endpoint functions with limited capacity because of the limit on the number of DNS queries per IP address (per network interface). For the current limit, see Limits on Route 53 Resolver.    ACTION_NEEDED: This endpoint is unhealthy, and Resolver can't automatically recover it. To resolve the problem, we recommend that you check each IP address that you associated with the endpoint. For each IP address that isn't available, add another IP address and then delete the IP address that isn't available. (An endpoint must always include at least two IP addresses.) A status of ACTION_NEEDED can have a variety of causes. Here are two common causes:   One or more of the network interfaces that are associated with the endpoint were deleted using Amazon VPC.   The network interface couldn't be created for some reason that's outside the control of Resolver.      DELETING: Resolver is deleting this endpoint and the associated network interfaces.  
     */
    Status?: ResolverEndpointStatus;
    /**
     * A detailed description of the status of the Resolver endpoint.
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
  export interface ResolverQueryLogConfig {
    /**
     * The ID for the query logging configuration.
     */
    Id?: ResourceId;
    /**
     * The AWS account ID for the account that created the query logging configuration. 
     */
    OwnerId?: AccountId;
    /**
     * The status of the specified query logging configuration. Valid values include the following:    CREATING: Resolver is creating the query logging configuration.    CREATED: The query logging configuration was successfully created. Resolver is logging queries that originate in the specified VPC.    DELETING: Resolver is deleting this query logging configuration.    FAILED: Resolver can't deliver logs to the location that is specified in the query logging configuration. Here are two common causes:   The specified destination (for example, an Amazon S3 bucket) was deleted.   Permissions don't allow sending logs to the destination.    
     */
    Status?: ResolverQueryLogConfigStatus;
    /**
     * An indication of whether the query logging configuration is shared with other AWS accounts, or was shared with the current account by another AWS account. Sharing is configured through AWS Resource Access Manager (AWS RAM).
     */
    ShareStatus?: ShareStatus;
    /**
     * The number of VPCs that are associated with the query logging configuration.
     */
    AssociationCount?: Count;
    /**
     * The ARN for the query logging configuration.
     */
    Arn?: Arn;
    /**
     * The name of the query logging configuration. 
     */
    Name?: ResolverQueryLogConfigName;
    /**
     * The ARN of the resource that you want Resolver to send query logs: an Amazon S3 bucket, a CloudWatch Logs log group, or a Kinesis Data Firehose delivery stream.
     */
    DestinationArn?: DestinationArn;
    /**
     * A unique string that identifies the request that created the query logging configuration. The CreatorRequestId allows failed requests to be retried without the risk of executing the operation twice.
     */
    CreatorRequestId?: CreatorRequestId;
    /**
     * The date and time that the query logging configuration was created, in Unix time format and Coordinated Universal Time (UTC).
     */
    CreationTime?: Rfc3339TimeString;
  }
  export interface ResolverQueryLogConfigAssociation {
    /**
     * The ID of the query logging association.
     */
    Id?: ResourceId;
    /**
     * The ID of the query logging configuration that a VPC is associated with.
     */
    ResolverQueryLogConfigId?: ResourceId;
    /**
     * The ID of the Amazon VPC that is associated with the query logging configuration.
     */
    ResourceId?: ResourceId;
    /**
     * The status of the specified query logging association. Valid values include the following:    CREATING: Resolver is creating an association between an Amazon VPC and a query logging configuration.    CREATED: The association between an Amazon VPC and a query logging configuration was successfully created. Resolver is logging queries that originate in the specified VPC.    DELETING: Resolver is deleting this query logging association.    FAILED: Resolver either couldn't create or couldn't delete the query logging association.  
     */
    Status?: ResolverQueryLogConfigAssociationStatus;
    /**
     * If the value of Status is FAILED, the value of Error indicates the cause:    DESTINATION_NOT_FOUND: The specified destination (for example, an Amazon S3 bucket) was deleted.    ACCESS_DENIED: Permissions don't allow sending logs to the destination.   If the value of Status is a value other than FAILED, Error is null. 
     */
    Error?: ResolverQueryLogConfigAssociationError;
    /**
     * Contains additional information about the error. If the value or Error is null, the value of ErrorMessage also is null.
     */
    ErrorMessage?: ResolverQueryLogConfigAssociationErrorMessage;
    /**
     * The date and time that the VPC was associated with the query logging configuration, in Unix time format and Coordinated Universal Time (UTC).
     */
    CreationTime?: Rfc3339TimeString;
  }
  export type ResolverQueryLogConfigAssociationError = "NONE"|"DESTINATION_NOT_FOUND"|"ACCESS_DENIED"|"INTERNAL_SERVICE_ERROR"|string;
  export type ResolverQueryLogConfigAssociationErrorMessage = string;
  export type ResolverQueryLogConfigAssociationList = ResolverQueryLogConfigAssociation[];
  export type ResolverQueryLogConfigAssociationStatus = "CREATING"|"ACTIVE"|"ACTION_NEEDED"|"DELETING"|"FAILED"|string;
  export type ResolverQueryLogConfigList = ResolverQueryLogConfig[];
  export type ResolverQueryLogConfigName = string;
  export type ResolverQueryLogConfigPolicy = string;
  export type ResolverQueryLogConfigStatus = "CREATING"|"CREATED"|"DELETING"|"FAILED"|string;
  export interface ResolverRule {
    /**
     * The ID that Resolver assigned to the Resolver rule when you created it.
     */
    Id?: ResourceId;
    /**
     * A unique string that you specified when you created the Resolver rule. CreatorRequestId identifies the request and allows failed requests to be retried without the risk of executing the operation twice. 
     */
    CreatorRequestId?: CreatorRequestId;
    /**
     * The ARN (Amazon Resource Name) for the Resolver rule specified by Id.
     */
    Arn?: Arn;
    /**
     * DNS queries for this domain name are forwarded to the IP addresses that are specified in TargetIps. If a query matches multiple Resolver rules (example.com and www.example.com), the query is routed using the Resolver rule that contains the most specific domain name (www.example.com).
     */
    DomainName?: DomainName;
    /**
     * A code that specifies the current status of the Resolver rule.
     */
    Status?: ResolverRuleStatus;
    /**
     * A detailed description of the status of a Resolver rule.
     */
    StatusMessage?: StatusMessage;
    /**
     * When you want to forward DNS queries for specified domain name to resolvers on your network, specify FORWARD. When you have a forwarding rule to forward DNS queries for a domain to your network and you want Resolver to process queries for a subdomain of that domain, specify SYSTEM. For example, to forward DNS queries for example.com to resolvers on your network, you create a rule and specify FORWARD for RuleType. To then have Resolver process queries for apex.example.com, you create a rule and specify SYSTEM for RuleType. Currently, only Resolver can create rules that have a value of RECURSIVE for RuleType.
     */
    RuleType?: RuleTypeOption;
    /**
     * The name for the Resolver rule, which you specified when you created the Resolver rule.
     */
    Name?: Name;
    /**
     * An array that contains the IP addresses and ports that an outbound endpoint forwards DNS queries to. Typically, these are the IP addresses of DNS resolvers on your network. Specify IPv4 addresses. IPv6 is not supported.
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
    /**
     * The date and time that the Resolver rule was created, in Unix time format and Coordinated Universal Time (UTC).
     */
    CreationTime?: Rfc3339TimeString;
    /**
     * The date and time that the Resolver rule was last updated, in Unix time format and Coordinated Universal Time (UTC).
     */
    ModificationTime?: Rfc3339TimeString;
  }
  export interface ResolverRuleAssociation {
    /**
     * The ID of the association between a Resolver rule and a VPC. Resolver assigns this value when you submit an AssociateResolverRule request.
     */
    Id?: ResourceId;
    /**
     * The ID of the Resolver rule that you associated with the VPC that is specified by VPCId.
     */
    ResolverRuleId?: ResourceId;
    /**
     * The name of an association between a Resolver rule and a VPC.
     */
    Name?: Name;
    /**
     * The ID of the VPC that you associated the Resolver rule with.
     */
    VPCId?: ResourceId;
    /**
     * A code that specifies the current status of the association between a Resolver rule and a VPC.
     */
    Status?: ResolverRuleAssociationStatus;
    /**
     * A detailed description of the status of the association between a Resolver rule and a VPC.
     */
    StatusMessage?: StatusMessage;
  }
  export type ResolverRuleAssociationStatus = "CREATING"|"COMPLETE"|"DELETING"|"FAILED"|"OVERRIDDEN"|string;
  export type ResolverRuleAssociations = ResolverRuleAssociation[];
  export interface ResolverRuleConfig {
    /**
     * The new name for the Resolver rule. The name that you specify appears in the Resolver dashboard in the Route 53 console. 
     */
    Name?: Name;
    /**
     * For DNS queries that originate in your VPC, the new IP addresses that you want to route outbound DNS queries to.
     */
    TargetIps?: TargetList;
    /**
     * The ID of the new outbound Resolver endpoint that you want to use to route DNS queries to the IP addresses that you specify in TargetIps.
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
  export type SortByKey = string;
  export type SortOrder = "ASCENDING"|"DESCENDING"|string;
  export type StatusMessage = string;
  export type SubnetId = string;
  export interface Tag {
    /**
     * The name for the tag. For example, if you want to associate Resolver resources with the account IDs of your customers for billing purposes, the value of Key might be account-id.
     */
    Key: TagKey;
    /**
     * The value for the tag. For example, if Key is account-id, then Value might be the ID of the customer account that you're creating the resource for.
     */
    Value: TagValue;
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
     * The ID of the Resolver endpoint that you want to update.
     */
    ResolverEndpointId: ResourceId;
    /**
     * The name of the Resolver endpoint that you want to update.
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
     * The ID of the Resolver rule that you want to update.
     */
    ResolverRuleId: ResourceId;
    /**
     * The new settings for the Resolver rule.
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
