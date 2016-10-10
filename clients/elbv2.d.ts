import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
declare class ELBv2 extends Service {
  /**
   * Adds the specified tags to the specified resource. You can tag your Application load balancers and your target groups. Each tag consists of a key and an optional value. If a resource already has a tag with the same key, AddTags updates its value. To list the current tags for your resources, use DescribeTags. To remove tags from your resources, use RemoveTags.
   */
  addTags(params: ELBv2.AddTagsInput, callback?: (err: AWSError, data: ELBv2.AddTagsOutput) => void): Request<ELBv2.AddTagsOutput, AWSError>;
  /**
   * Adds the specified tags to the specified resource. You can tag your Application load balancers and your target groups. Each tag consists of a key and an optional value. If a resource already has a tag with the same key, AddTags updates its value. To list the current tags for your resources, use DescribeTags. To remove tags from your resources, use RemoveTags.
   */
  addTags(callback?: (err: AWSError, data: ELBv2.AddTagsOutput) => void): Request<ELBv2.AddTagsOutput, AWSError>;
  /**
   * Creates a listener for the specified Application load balancer. To update a listener, use ModifyListener. When you are finished with a listener, you can delete it using DeleteListener. If you are finished with both the listener and the load balancer, you can delete them both using DeleteLoadBalancer. For more information, see Listeners for Your Application Load Balancers in the Application Load Balancers Guide.
   */
  createListener(params: ELBv2.CreateListenerInput, callback?: (err: AWSError, data: ELBv2.CreateListenerOutput) => void): Request<ELBv2.CreateListenerOutput, AWSError>;
  /**
   * Creates a listener for the specified Application load balancer. To update a listener, use ModifyListener. When you are finished with a listener, you can delete it using DeleteListener. If you are finished with both the listener and the load balancer, you can delete them both using DeleteLoadBalancer. For more information, see Listeners for Your Application Load Balancers in the Application Load Balancers Guide.
   */
  createListener(callback?: (err: AWSError, data: ELBv2.CreateListenerOutput) => void): Request<ELBv2.CreateListenerOutput, AWSError>;
  /**
   * Creates an Application load balancer. To create listeners for your load balancer, use CreateListener. You can add security groups, subnets, and tags when you create your load balancer, or you can add them later using SetSecurityGroups, SetSubnets, and AddTags. To describe your current load balancers, see DescribeLoadBalancers. When you are finished with a load balancer, you can delete it using DeleteLoadBalancer. You can create up to 20 load balancers per region per account. You can request an increase for the number of load balancers for your account. For more information, see Limits for Your Application Load Balancer in the Application Load Balancers Guide.
   */
  createLoadBalancer(params: ELBv2.CreateLoadBalancerInput, callback?: (err: AWSError, data: ELBv2.CreateLoadBalancerOutput) => void): Request<ELBv2.CreateLoadBalancerOutput, AWSError>;
  /**
   * Creates an Application load balancer. To create listeners for your load balancer, use CreateListener. You can add security groups, subnets, and tags when you create your load balancer, or you can add them later using SetSecurityGroups, SetSubnets, and AddTags. To describe your current load balancers, see DescribeLoadBalancers. When you are finished with a load balancer, you can delete it using DeleteLoadBalancer. You can create up to 20 load balancers per region per account. You can request an increase for the number of load balancers for your account. For more information, see Limits for Your Application Load Balancer in the Application Load Balancers Guide.
   */
  createLoadBalancer(callback?: (err: AWSError, data: ELBv2.CreateLoadBalancerOutput) => void): Request<ELBv2.CreateLoadBalancerOutput, AWSError>;
  /**
   * Creates a rule for the specified listener. A rule consists conditions and actions. Rules are evaluated in priority order, from the lowest value to the highest value. When the conditions for a rule are met, the specified actions are taken. If no rule's conditions are met, the default actions for the listener are taken. To view your current rules, use DescribeRules. To update a rule, use ModifyRule. To set the priorities of your rules, use SetRulePriorities. To delete a rule, use DeleteRule.
   */
  createRule(params: ELBv2.CreateRuleInput, callback?: (err: AWSError, data: ELBv2.CreateRuleOutput) => void): Request<ELBv2.CreateRuleOutput, AWSError>;
  /**
   * Creates a rule for the specified listener. A rule consists conditions and actions. Rules are evaluated in priority order, from the lowest value to the highest value. When the conditions for a rule are met, the specified actions are taken. If no rule's conditions are met, the default actions for the listener are taken. To view your current rules, use DescribeRules. To update a rule, use ModifyRule. To set the priorities of your rules, use SetRulePriorities. To delete a rule, use DeleteRule.
   */
  createRule(callback?: (err: AWSError, data: ELBv2.CreateRuleOutput) => void): Request<ELBv2.CreateRuleOutput, AWSError>;
  /**
   * Creates a target group. To register targets with the target group, use RegisterTargets. To update the health check settings for the target group, use ModifyTargetGroup. To monitor the health of targets in the target group, use DescribeTargetHealth. To route traffic to the targets in a target group, specify the target group in an action using CreateListener or CreateRule. To delete a target group, use DeleteTargetGroup. For more information, see Target Groups for Your Application Load Balancers in the Application Load Balancers Guide.
   */
  createTargetGroup(params: ELBv2.CreateTargetGroupInput, callback?: (err: AWSError, data: ELBv2.CreateTargetGroupOutput) => void): Request<ELBv2.CreateTargetGroupOutput, AWSError>;
  /**
   * Creates a target group. To register targets with the target group, use RegisterTargets. To update the health check settings for the target group, use ModifyTargetGroup. To monitor the health of targets in the target group, use DescribeTargetHealth. To route traffic to the targets in a target group, specify the target group in an action using CreateListener or CreateRule. To delete a target group, use DeleteTargetGroup. For more information, see Target Groups for Your Application Load Balancers in the Application Load Balancers Guide.
   */
  createTargetGroup(callback?: (err: AWSError, data: ELBv2.CreateTargetGroupOutput) => void): Request<ELBv2.CreateTargetGroupOutput, AWSError>;
  /**
   * Deletes the specified listener. Alternatively, your listener is deleted when you delete the load balancer it is attached to using DeleteLoadBalancer.
   */
  deleteListener(params: ELBv2.DeleteListenerInput, callback?: (err: AWSError, data: ELBv2.DeleteListenerOutput) => void): Request<ELBv2.DeleteListenerOutput, AWSError>;
  /**
   * Deletes the specified listener. Alternatively, your listener is deleted when you delete the load balancer it is attached to using DeleteLoadBalancer.
   */
  deleteListener(callback?: (err: AWSError, data: ELBv2.DeleteListenerOutput) => void): Request<ELBv2.DeleteListenerOutput, AWSError>;
  /**
   * Deletes the specified load balancer and its attached listeners. You can't delete a load balancer if deletion protection is enabled. If the load balancer does not exist or has already been deleted, the call succeeds. Deleting a load balancer does not affect its registered targets. For example, your EC2 instances continue to run and are still registered to their target groups. If you no longer need these EC2 instances, you can stop or terminate them.
   */
  deleteLoadBalancer(params: ELBv2.DeleteLoadBalancerInput, callback?: (err: AWSError, data: ELBv2.DeleteLoadBalancerOutput) => void): Request<ELBv2.DeleteLoadBalancerOutput, AWSError>;
  /**
   * Deletes the specified load balancer and its attached listeners. You can't delete a load balancer if deletion protection is enabled. If the load balancer does not exist or has already been deleted, the call succeeds. Deleting a load balancer does not affect its registered targets. For example, your EC2 instances continue to run and are still registered to their target groups. If you no longer need these EC2 instances, you can stop or terminate them.
   */
  deleteLoadBalancer(callback?: (err: AWSError, data: ELBv2.DeleteLoadBalancerOutput) => void): Request<ELBv2.DeleteLoadBalancerOutput, AWSError>;
  /**
   * Deletes the specified rule.
   */
  deleteRule(params: ELBv2.DeleteRuleInput, callback?: (err: AWSError, data: ELBv2.DeleteRuleOutput) => void): Request<ELBv2.DeleteRuleOutput, AWSError>;
  /**
   * Deletes the specified rule.
   */
  deleteRule(callback?: (err: AWSError, data: ELBv2.DeleteRuleOutput) => void): Request<ELBv2.DeleteRuleOutput, AWSError>;
  /**
   * Deletes the specified target group. You can delete a target group if it is not referenced by any actions. Deleting a target group also deletes any associated health checks.
   */
  deleteTargetGroup(params: ELBv2.DeleteTargetGroupInput, callback?: (err: AWSError, data: ELBv2.DeleteTargetGroupOutput) => void): Request<ELBv2.DeleteTargetGroupOutput, AWSError>;
  /**
   * Deletes the specified target group. You can delete a target group if it is not referenced by any actions. Deleting a target group also deletes any associated health checks.
   */
  deleteTargetGroup(callback?: (err: AWSError, data: ELBv2.DeleteTargetGroupOutput) => void): Request<ELBv2.DeleteTargetGroupOutput, AWSError>;
  /**
   * Deregisters the specified targets from the specified target group. After the targets are deregistered, they no longer receive traffic from the load balancer.
   */
  deregisterTargets(params: ELBv2.DeregisterTargetsInput, callback?: (err: AWSError, data: ELBv2.DeregisterTargetsOutput) => void): Request<ELBv2.DeregisterTargetsOutput, AWSError>;
  /**
   * Deregisters the specified targets from the specified target group. After the targets are deregistered, they no longer receive traffic from the load balancer.
   */
  deregisterTargets(callback?: (err: AWSError, data: ELBv2.DeregisterTargetsOutput) => void): Request<ELBv2.DeregisterTargetsOutput, AWSError>;
  /**
   * Describes the specified listeners or the listeners for the specified load balancer. You must specify either a load balancer or one or more listeners.
   */
  describeListeners(params: ELBv2.DescribeListenersInput, callback?: (err: AWSError, data: ELBv2.DescribeListenersOutput) => void): Request<ELBv2.DescribeListenersOutput, AWSError>;
  /**
   * Describes the specified listeners or the listeners for the specified load balancer. You must specify either a load balancer or one or more listeners.
   */
  describeListeners(callback?: (err: AWSError, data: ELBv2.DescribeListenersOutput) => void): Request<ELBv2.DescribeListenersOutput, AWSError>;
  /**
   * Describes the attributes for the specified load balancer.
   */
  describeLoadBalancerAttributes(params: ELBv2.DescribeLoadBalancerAttributesInput, callback?: (err: AWSError, data: ELBv2.DescribeLoadBalancerAttributesOutput) => void): Request<ELBv2.DescribeLoadBalancerAttributesOutput, AWSError>;
  /**
   * Describes the attributes for the specified load balancer.
   */
  describeLoadBalancerAttributes(callback?: (err: AWSError, data: ELBv2.DescribeLoadBalancerAttributesOutput) => void): Request<ELBv2.DescribeLoadBalancerAttributesOutput, AWSError>;
  /**
   * Describes the specified Application load balancers or all of your Application load balancers. To describe the listeners for a load balancer, use DescribeListeners. To describe the attributes for a load balancer, use DescribeLoadBalancerAttributes.
   */
  describeLoadBalancers(params: ELBv2.DescribeLoadBalancersInput, callback?: (err: AWSError, data: ELBv2.DescribeLoadBalancersOutput) => void): Request<ELBv2.DescribeLoadBalancersOutput, AWSError>;
  /**
   * Describes the specified Application load balancers or all of your Application load balancers. To describe the listeners for a load balancer, use DescribeListeners. To describe the attributes for a load balancer, use DescribeLoadBalancerAttributes.
   */
  describeLoadBalancers(callback?: (err: AWSError, data: ELBv2.DescribeLoadBalancersOutput) => void): Request<ELBv2.DescribeLoadBalancersOutput, AWSError>;
  /**
   * Describes the specified rules or the rules for the specified listener. You must specify either a listener or one or more rules.
   */
  describeRules(params: ELBv2.DescribeRulesInput, callback?: (err: AWSError, data: ELBv2.DescribeRulesOutput) => void): Request<ELBv2.DescribeRulesOutput, AWSError>;
  /**
   * Describes the specified rules or the rules for the specified listener. You must specify either a listener or one or more rules.
   */
  describeRules(callback?: (err: AWSError, data: ELBv2.DescribeRulesOutput) => void): Request<ELBv2.DescribeRulesOutput, AWSError>;
  /**
   * Describes the specified policies or all policies used for SSL negotiation. Note that the only supported policy at this time is ELBSecurityPolicy-2015-05.
   */
  describeSSLPolicies(params: ELBv2.DescribeSSLPoliciesInput, callback?: (err: AWSError, data: ELBv2.DescribeSSLPoliciesOutput) => void): Request<ELBv2.DescribeSSLPoliciesOutput, AWSError>;
  /**
   * Describes the specified policies or all policies used for SSL negotiation. Note that the only supported policy at this time is ELBSecurityPolicy-2015-05.
   */
  describeSSLPolicies(callback?: (err: AWSError, data: ELBv2.DescribeSSLPoliciesOutput) => void): Request<ELBv2.DescribeSSLPoliciesOutput, AWSError>;
  /**
   * Describes the tags for the specified resources.
   */
  describeTags(params: ELBv2.DescribeTagsInput, callback?: (err: AWSError, data: ELBv2.DescribeTagsOutput) => void): Request<ELBv2.DescribeTagsOutput, AWSError>;
  /**
   * Describes the tags for the specified resources.
   */
  describeTags(callback?: (err: AWSError, data: ELBv2.DescribeTagsOutput) => void): Request<ELBv2.DescribeTagsOutput, AWSError>;
  /**
   * Describes the attributes for the specified target group.
   */
  describeTargetGroupAttributes(params: ELBv2.DescribeTargetGroupAttributesInput, callback?: (err: AWSError, data: ELBv2.DescribeTargetGroupAttributesOutput) => void): Request<ELBv2.DescribeTargetGroupAttributesOutput, AWSError>;
  /**
   * Describes the attributes for the specified target group.
   */
  describeTargetGroupAttributes(callback?: (err: AWSError, data: ELBv2.DescribeTargetGroupAttributesOutput) => void): Request<ELBv2.DescribeTargetGroupAttributesOutput, AWSError>;
  /**
   * Describes the specified target groups or all of your target groups. By default, all target groups are described. Alternatively, you can specify one of the following to filter the results: the ARN of the load balancer, the names of one or more target groups, or the ARNs of one or more target groups. To describe the targets for a target group, use DescribeTargetHealth. To describe the attributes of a target group, use DescribeTargetGroupAttributes.
   */
  describeTargetGroups(params: ELBv2.DescribeTargetGroupsInput, callback?: (err: AWSError, data: ELBv2.DescribeTargetGroupsOutput) => void): Request<ELBv2.DescribeTargetGroupsOutput, AWSError>;
  /**
   * Describes the specified target groups or all of your target groups. By default, all target groups are described. Alternatively, you can specify one of the following to filter the results: the ARN of the load balancer, the names of one or more target groups, or the ARNs of one or more target groups. To describe the targets for a target group, use DescribeTargetHealth. To describe the attributes of a target group, use DescribeTargetGroupAttributes.
   */
  describeTargetGroups(callback?: (err: AWSError, data: ELBv2.DescribeTargetGroupsOutput) => void): Request<ELBv2.DescribeTargetGroupsOutput, AWSError>;
  /**
   * Describes the health of the specified targets or all of your targets.
   */
  describeTargetHealth(params: ELBv2.DescribeTargetHealthInput, callback?: (err: AWSError, data: ELBv2.DescribeTargetHealthOutput) => void): Request<ELBv2.DescribeTargetHealthOutput, AWSError>;
  /**
   * Describes the health of the specified targets or all of your targets.
   */
  describeTargetHealth(callback?: (err: AWSError, data: ELBv2.DescribeTargetHealthOutput) => void): Request<ELBv2.DescribeTargetHealthOutput, AWSError>;
  /**
   * Modifies the specified properties of the specified listener. Any properties that you do not specify retain their current values. However, changing the protocol from HTTPS to HTTP removes the security policy and SSL certificate properties. If you change the protocol from HTTP to HTTPS, you must add the security policy.
   */
  modifyListener(params: ELBv2.ModifyListenerInput, callback?: (err: AWSError, data: ELBv2.ModifyListenerOutput) => void): Request<ELBv2.ModifyListenerOutput, AWSError>;
  /**
   * Modifies the specified properties of the specified listener. Any properties that you do not specify retain their current values. However, changing the protocol from HTTPS to HTTP removes the security policy and SSL certificate properties. If you change the protocol from HTTP to HTTPS, you must add the security policy.
   */
  modifyListener(callback?: (err: AWSError, data: ELBv2.ModifyListenerOutput) => void): Request<ELBv2.ModifyListenerOutput, AWSError>;
  /**
   * Modifies the specified attributes of the specified load balancer. If any of the specified attributes can't be modified as requested, the call fails. Any existing attributes that you do not modify retain their current values.
   */
  modifyLoadBalancerAttributes(params: ELBv2.ModifyLoadBalancerAttributesInput, callback?: (err: AWSError, data: ELBv2.ModifyLoadBalancerAttributesOutput) => void): Request<ELBv2.ModifyLoadBalancerAttributesOutput, AWSError>;
  /**
   * Modifies the specified attributes of the specified load balancer. If any of the specified attributes can't be modified as requested, the call fails. Any existing attributes that you do not modify retain their current values.
   */
  modifyLoadBalancerAttributes(callback?: (err: AWSError, data: ELBv2.ModifyLoadBalancerAttributesOutput) => void): Request<ELBv2.ModifyLoadBalancerAttributesOutput, AWSError>;
  /**
   * Modifies the specified rule. Any existing properties that you do not modify retain their current values. To modify the default action, use ModifyListener.
   */
  modifyRule(params: ELBv2.ModifyRuleInput, callback?: (err: AWSError, data: ELBv2.ModifyRuleOutput) => void): Request<ELBv2.ModifyRuleOutput, AWSError>;
  /**
   * Modifies the specified rule. Any existing properties that you do not modify retain their current values. To modify the default action, use ModifyListener.
   */
  modifyRule(callback?: (err: AWSError, data: ELBv2.ModifyRuleOutput) => void): Request<ELBv2.ModifyRuleOutput, AWSError>;
  /**
   * Modifies the health checks used when evaluating the health state of the targets in the specified target group. To monitor the health of the targets, use DescribeTargetHealth.
   */
  modifyTargetGroup(params: ELBv2.ModifyTargetGroupInput, callback?: (err: AWSError, data: ELBv2.ModifyTargetGroupOutput) => void): Request<ELBv2.ModifyTargetGroupOutput, AWSError>;
  /**
   * Modifies the health checks used when evaluating the health state of the targets in the specified target group. To monitor the health of the targets, use DescribeTargetHealth.
   */
  modifyTargetGroup(callback?: (err: AWSError, data: ELBv2.ModifyTargetGroupOutput) => void): Request<ELBv2.ModifyTargetGroupOutput, AWSError>;
  /**
   * Modifies the specified attributes of the specified target group.
   */
  modifyTargetGroupAttributes(params: ELBv2.ModifyTargetGroupAttributesInput, callback?: (err: AWSError, data: ELBv2.ModifyTargetGroupAttributesOutput) => void): Request<ELBv2.ModifyTargetGroupAttributesOutput, AWSError>;
  /**
   * Modifies the specified attributes of the specified target group.
   */
  modifyTargetGroupAttributes(callback?: (err: AWSError, data: ELBv2.ModifyTargetGroupAttributesOutput) => void): Request<ELBv2.ModifyTargetGroupAttributesOutput, AWSError>;
  /**
   * Registers the specified targets with the specified target group. The target must be in the virtual private cloud (VPC) that you specified for the target group. To remove a target from a target group, use DeregisterTargets.
   */
  registerTargets(params: ELBv2.RegisterTargetsInput, callback?: (err: AWSError, data: ELBv2.RegisterTargetsOutput) => void): Request<ELBv2.RegisterTargetsOutput, AWSError>;
  /**
   * Registers the specified targets with the specified target group. The target must be in the virtual private cloud (VPC) that you specified for the target group. To remove a target from a target group, use DeregisterTargets.
   */
  registerTargets(callback?: (err: AWSError, data: ELBv2.RegisterTargetsOutput) => void): Request<ELBv2.RegisterTargetsOutput, AWSError>;
  /**
   * Removes the specified tags from the specified resource. To list the current tags for your resources, use DescribeTags.
   */
  removeTags(params: ELBv2.RemoveTagsInput, callback?: (err: AWSError, data: ELBv2.RemoveTagsOutput) => void): Request<ELBv2.RemoveTagsOutput, AWSError>;
  /**
   * Removes the specified tags from the specified resource. To list the current tags for your resources, use DescribeTags.
   */
  removeTags(callback?: (err: AWSError, data: ELBv2.RemoveTagsOutput) => void): Request<ELBv2.RemoveTagsOutput, AWSError>;
  /**
   * Sets the priorities of the specified rules. You can reorder the rules as long as there are no priority conflicts in the new order. Any existing rules that you do not specify retain their current priority.
   */
  setRulePriorities(params: ELBv2.SetRulePrioritiesInput, callback?: (err: AWSError, data: ELBv2.SetRulePrioritiesOutput) => void): Request<ELBv2.SetRulePrioritiesOutput, AWSError>;
  /**
   * Sets the priorities of the specified rules. You can reorder the rules as long as there are no priority conflicts in the new order. Any existing rules that you do not specify retain their current priority.
   */
  setRulePriorities(callback?: (err: AWSError, data: ELBv2.SetRulePrioritiesOutput) => void): Request<ELBv2.SetRulePrioritiesOutput, AWSError>;
  /**
   * Associates the specified security groups with the specified load balancer. The specified security groups override the previously associated security groups.
   */
  setSecurityGroups(params: ELBv2.SetSecurityGroupsInput, callback?: (err: AWSError, data: ELBv2.SetSecurityGroupsOutput) => void): Request<ELBv2.SetSecurityGroupsOutput, AWSError>;
  /**
   * Associates the specified security groups with the specified load balancer. The specified security groups override the previously associated security groups.
   */
  setSecurityGroups(callback?: (err: AWSError, data: ELBv2.SetSecurityGroupsOutput) => void): Request<ELBv2.SetSecurityGroupsOutput, AWSError>;
  /**
   * Enables the Availability Zone for the specified subnets for the specified load balancer. The specified subnets replace the previously enabled subnets.
   */
  setSubnets(params: ELBv2.SetSubnetsInput, callback?: (err: AWSError, data: ELBv2.SetSubnetsOutput) => void): Request<ELBv2.SetSubnetsOutput, AWSError>;
  /**
   * Enables the Availability Zone for the specified subnets for the specified load balancer. The specified subnets replace the previously enabled subnets.
   */
  setSubnets(callback?: (err: AWSError, data: ELBv2.SetSubnetsOutput) => void): Request<ELBv2.SetSubnetsOutput, AWSError>;
}
declare namespace ELBv2 {
  export interface Action {
    /**
     * The type of action.
     */
    Type: ActionTypeEnum;
    /**
     * The Amazon Resource Name (ARN) of the target group.
     */
    TargetGroupArn?: TargetGroupArn;
  }
  export type ActionTypeEnum = string;
  export type Actions = Action[];
  export interface AddTagsInput {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    ResourceArns: ResourceArns;
    /**
     * The tags. Each resource can have a maximum of 10 tags.
     */
    Tags?: TagList;
  }
  export interface AddTagsOutput {
  }
  export interface AvailabilityZone {
    /**
     * The name of the Availability Zone.
     */
    ZoneName?: ZoneName;
    /**
     * The ID of the subnet.
     */
    SubnetId?: SubnetId;
  }
  export type AvailabilityZones = AvailabilityZone[];
  export type CanonicalHostedZoneId = string;
  export interface Certificate {
    /**
     * The Amazon Resource Name (ARN) of the certificate.
     */
    CertificateArn?: CertificateArn;
  }
  export type CertificateArn = string;
  export type CertificateList = Certificate[];
  export interface Cipher {
    /**
     * The name of the cipher.
     */
    Name?: CipherName;
    /**
     * The priority of the cipher.
     */
    Priority?: CipherPriority;
  }
  export type CipherName = string;
  export type CipherPriority = number;
  export type Ciphers = Cipher[];
  export type ConditionFieldName = string;
  export interface CreateListenerInput {
    /**
     * The Amazon Resource Name (ARN) of the load balancer.
     */
    LoadBalancerArn: LoadBalancerArn;
    /**
     * The protocol for connections from clients to the load balancer.
     */
    Protocol?: ProtocolEnum;
    /**
     * The port on which the load balancer is listening.
     */
    Port?: Port;
    /**
     * The security policy that defines which ciphers and protocols are supported. The default is the current predefined security policy.
     */
    SslPolicy?: SslPolicyName;
    /**
     * The SSL server certificate. You must provide exactly one certificate if the protocol is HTTPS.
     */
    Certificates?: CertificateList;
    /**
     * The default actions for the listener.
     */
    DefaultActions?: Actions;
  }
  export interface CreateListenerOutput {
    /**
     * Information about the listener.
     */
    Listeners?: Listeners;
  }
  export interface CreateLoadBalancerInput {
    /**
     * The name of the load balancer. This name must be unique within your AWS account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, and must not begin or end with a hyphen.
     */
    Name: LoadBalancerName;
    /**
     * The IDs of the subnets to attach to the load balancer. You can specify only one subnet per Availability Zone. You must specify subnets from at least two Availability Zones.
     */
    Subnets?: Subnets;
    /**
     * The IDs of the security groups to assign to the load balancer.
     */
    SecurityGroups?: SecurityGroups;
    /**
     * The nodes of an Internet-facing load balancer have public IP addresses. The DNS name of an Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing load balancers can route requests from clients over the Internet. The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the private IP addresses of the nodes. Therefore, internal load balancers can only route requests from clients with access to the VPC for the load balancer. The default is an Internet-facing load balancer.
     */
    Scheme?: LoadBalancerSchemeEnum;
    /**
     * One or more tags to assign to the load balancer.
     */
    Tags?: TagList;
  }
  export interface CreateLoadBalancerOutput {
    /**
     * Information about the load balancer.
     */
    LoadBalancers?: LoadBalancers;
  }
  export interface CreateRuleInput {
    /**
     * The Amazon Resource Name (ARN) of the listener.
     */
    ListenerArn: ListenerArn;
    /**
     * The conditions.
     */
    Conditions?: RuleConditionList;
    /**
     * The priority for the rule. A listener can't have multiple rules with the same priority.
     */
    Priority?: RulePriority;
    /**
     * The actions for the rule.
     */
    Actions?: Actions;
  }
  export interface CreateRuleOutput {
    /**
     * Information about the rule.
     */
    Rules?: Rules;
  }
  export interface CreateTargetGroupInput {
    /**
     * The name of the target group.
     */
    Name: TargetGroupName;
    /**
     * The protocol to use for routing traffic to the targets.
     */
    Protocol?: ProtocolEnum;
    /**
     * The port on which the targets receive traffic. This port is used unless you specify a port override when registering the target.
     */
    Port?: Port;
    /**
     * The identifier of the virtual private cloud (VPC).
     */
    VpcId?: VpcId;
    /**
     * The protocol the load balancer uses when performing health checks on targets. The default is the HTTP protocol.
     */
    HealthCheckProtocol?: ProtocolEnum;
    /**
     * The port the load balancer uses when performing health checks on targets. The default is traffic-port, which indicates the port on which each target receives traffic from the load balancer.
     */
    HealthCheckPort?: HealthCheckPort;
    /**
     * The ping path that is the destination on the targets for health checks. The default is /.
     */
    HealthCheckPath?: Path;
    /**
     * The approximate amount of time, in seconds, between health checks of an individual target. The default is 30 seconds.
     */
    HealthCheckIntervalSeconds?: HealthCheckIntervalSeconds;
    /**
     * The amount of time, in seconds, during which no response from a target means a failed health check. The default is 5 seconds.
     */
    HealthCheckTimeoutSeconds?: HealthCheckTimeoutSeconds;
    /**
     * The number of consecutive health checks successes required before considering an unhealthy target healthy. The default is 5.
     */
    HealthyThresholdCount?: HealthCheckThresholdCount;
    /**
     * The number of consecutive health check failures required before considering a target unhealthy. The default is 2.
     */
    UnhealthyThresholdCount?: HealthCheckThresholdCount;
    /**
     * The HTTP codes to use when checking for a successful response from a target. The default is 200.
     */
    Matcher?: Matcher;
  }
  export interface CreateTargetGroupOutput {
    /**
     * Information about the target group.
     */
    TargetGroups?: TargetGroups;
  }
  export type CreatedTime = Date;
  export type DNSName = string;
  export interface DeleteListenerInput {
    /**
     * The Amazon Resource Name (ARN) of the listener.
     */
    ListenerArn: ListenerArn;
  }
  export interface DeleteListenerOutput {
  }
  export interface DeleteLoadBalancerInput {
    /**
     * The Amazon Resource Name (ARN) of the load balancer.
     */
    LoadBalancerArn: LoadBalancerArn;
  }
  export interface DeleteLoadBalancerOutput {
  }
  export interface DeleteRuleInput {
    /**
     * The Amazon Resource Name (ARN) of the rule.
     */
    RuleArn: RuleArn;
  }
  export interface DeleteRuleOutput {
  }
  export interface DeleteTargetGroupInput {
    /**
     * The Amazon Resource Name (ARN) of the target group.
     */
    TargetGroupArn: TargetGroupArn;
  }
  export interface DeleteTargetGroupOutput {
  }
  export interface DeregisterTargetsInput {
    /**
     * The Amazon Resource Name (ARN) of the target group.
     */
    TargetGroupArn: TargetGroupArn;
    /**
     * The targets.
     */
    Targets?: TargetDescriptions;
  }
  export interface DeregisterTargetsOutput {
  }
  export interface DescribeListenersInput {
    /**
     * The Amazon Resource Name (ARN) of the load balancer.
     */
    LoadBalancerArn?: LoadBalancerArn;
    /**
     * The Amazon Resource Names (ARN) of the listeners.
     */
    ListenerArns?: ListenerArns;
    /**
     * The marker for the next set of results. (You received this marker from a previous call.)
     */
    Marker?: Marker;
    /**
     * The maximum number of results to return with this call.
     */
    PageSize?: PageSize;
  }
  export interface DescribeListenersOutput {
    /**
     * Information about the listeners.
     */
    Listeners?: Listeners;
    /**
     * The marker to use when requesting the next set of results. If there are no additional results, the string is empty.
     */
    NextMarker?: Marker;
  }
  export interface DescribeLoadBalancerAttributesInput {
    /**
     * The Amazon Resource Name (ARN) of the load balancer.
     */
    LoadBalancerArn: LoadBalancerArn;
  }
  export interface DescribeLoadBalancerAttributesOutput {
    /**
     * Information about the load balancer attributes.
     */
    Attributes?: LoadBalancerAttributes;
  }
  export interface DescribeLoadBalancersInput {
    /**
     * The Amazon Resource Names (ARN) of the load balancers.
     */
    LoadBalancerArns?: LoadBalancerArns;
    /**
     * The names of the load balancers.
     */
    Names?: LoadBalancerNames;
    /**
     * The marker for the next set of results. (You received this marker from a previous call.)
     */
    Marker?: Marker;
    /**
     * The maximum number of results to return with this call.
     */
    PageSize?: PageSize;
  }
  export interface DescribeLoadBalancersOutput {
    /**
     * Information about the load balancers.
     */
    LoadBalancers?: LoadBalancers;
    /**
     * The marker to use when requesting the next set of results. If there are no additional results, the string is empty.
     */
    NextMarker?: Marker;
  }
  export interface DescribeRulesInput {
    /**
     * The Amazon Resource Name (ARN) of the listener.
     */
    ListenerArn?: ListenerArn;
    /**
     * The Amazon Resource Names (ARN) of the rules.
     */
    RuleArns?: RuleArns;
  }
  export interface DescribeRulesOutput {
    /**
     * Information about the rules.
     */
    Rules?: Rules;
  }
  export interface DescribeSSLPoliciesInput {
    /**
     * The names of the policies.
     */
    Names?: SslPolicyNames;
    /**
     * The marker for the next set of results. (You received this marker from a previous call.)
     */
    Marker?: Marker;
    /**
     * The maximum number of results to return with this call.
     */
    PageSize?: PageSize;
  }
  export interface DescribeSSLPoliciesOutput {
    /**
     * Information about the policies.
     */
    SslPolicies?: SslPolicies;
    /**
     * The marker to use when requesting the next set of results. If there are no additional results, the string is empty.
     */
    NextMarker?: Marker;
  }
  export interface DescribeTagsInput {
    /**
     * The Amazon Resource Names (ARN) of the resources.
     */
    ResourceArns: ResourceArns;
  }
  export interface DescribeTagsOutput {
    /**
     * Information about the tags.
     */
    TagDescriptions?: TagDescriptions;
  }
  export interface DescribeTargetGroupAttributesInput {
    /**
     * The Amazon Resource Name (ARN) of the target group.
     */
    TargetGroupArn: TargetGroupArn;
  }
  export interface DescribeTargetGroupAttributesOutput {
    /**
     * Information about the target group attributes
     */
    Attributes?: TargetGroupAttributes;
  }
  export interface DescribeTargetGroupsInput {
    /**
     * The Amazon Resource Name (ARN) of the load balancer.
     */
    LoadBalancerArn?: LoadBalancerArn;
    /**
     * The Amazon Resource Names (ARN) of the target groups.
     */
    TargetGroupArns?: TargetGroupArns;
    /**
     * The names of the target groups.
     */
    Names?: TargetGroupNames;
    /**
     * The marker for the next set of results. (You received this marker from a previous call.)
     */
    Marker?: Marker;
    /**
     * The maximum number of results to return with this call.
     */
    PageSize?: PageSize;
  }
  export interface DescribeTargetGroupsOutput {
    /**
     * Information about the target groups.
     */
    TargetGroups?: TargetGroups;
    /**
     * The marker to use when requesting the next set of results. If there are no additional results, the string is empty.
     */
    NextMarker?: Marker;
  }
  export interface DescribeTargetHealthInput {
    /**
     * The Amazon Resource Name (ARN) of the target group.
     */
    TargetGroupArn: TargetGroupArn;
    /**
     * The targets.
     */
    Targets?: TargetDescriptions;
  }
  export interface DescribeTargetHealthOutput {
    /**
     * Information about the health of the targets.
     */
    TargetHealthDescriptions?: TargetHealthDescriptions;
  }
  export type Description = string;
  export type HealthCheckIntervalSeconds = number;
  export type HealthCheckPort = string;
  export type HealthCheckThresholdCount = number;
  export type HealthCheckTimeoutSeconds = number;
  export type HttpCode = string;
  export type IsDefault = boolean;
  export type ListOfString = StringValue[];
  export interface Listener {
    /**
     * The Amazon Resource Name (ARN) of the listener.
     */
    ListenerArn?: ListenerArn;
    /**
     * The Amazon Resource Name (ARN) of the load balancer.
     */
    LoadBalancerArn?: LoadBalancerArn;
    /**
     * The port on which the load balancer is listening.
     */
    Port?: Port;
    /**
     * The protocol for connections from clients to the load balancer.
     */
    Protocol?: ProtocolEnum;
    /**
     * The SSL server certificate. You must provide a certificate if the protocol is HTTPS.
     */
    Certificates?: CertificateList;
    /**
     * The security policy that defines which ciphers and protocols are supported. The default is the current predefined security policy.
     */
    SslPolicy?: SslPolicyName;
    /**
     * The default actions for the listener.
     */
    DefaultActions?: Actions;
  }
  export type ListenerArn = string;
  export type ListenerArns = ListenerArn[];
  export type Listeners = Listener[];
  export interface LoadBalancer {
    /**
     * The Amazon Resource Name (ARN) of the load balancer.
     */
    LoadBalancerArn?: LoadBalancerArn;
    /**
     * The public DNS name of the load balancer.
     */
    DNSName?: DNSName;
    /**
     * The ID of the Amazon Route 53 hosted zone associated with the load balancer.
     */
    CanonicalHostedZoneId?: CanonicalHostedZoneId;
    /**
     * The date and time the load balancer was created.
     */
    CreatedTime?: CreatedTime;
    /**
     * The name of the load balancer.
     */
    LoadBalancerName?: LoadBalancerName;
    /**
     * The nodes of an Internet-facing load balancer have public IP addresses. The DNS name of an Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing load balancers can route requests from clients over the Internet. The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the private IP addresses of the nodes. Therefore, internal load balancers can only route requests from clients with access to the VPC for the load balancer.
     */
    Scheme?: LoadBalancerSchemeEnum;
    /**
     * The ID of the VPC for the load balancer.
     */
    VpcId?: VpcId;
    /**
     * The state of the load balancer.
     */
    State?: LoadBalancerState;
    /**
     * The type of load balancer.
     */
    Type?: LoadBalancerTypeEnum;
    /**
     * The Availability Zones for the load balancer.
     */
    AvailabilityZones?: AvailabilityZones;
    /**
     * The IDs of the security groups for the load balancer.
     */
    SecurityGroups?: SecurityGroups;
  }
  export type LoadBalancerArn = string;
  export type LoadBalancerArns = LoadBalancerArn[];
  export interface LoadBalancerAttribute {
    /**
     * The name of the attribute.    access_logs.s3.enabled - Indicates whether access logs stored in Amazon S3 are enabled.    access_logs.s3.bucket - The name of the S3 bucket for the access logs. This attribute is required if access logs in Amazon S3 are enabled. The bucket must exist in the same region as the load balancer and have a bucket policy that grants Elastic Load Balancing permission to write to the bucket.    access_logs.s3.prefix - The prefix for the location in the S3 bucket. If you don't specify a prefix, the access logs are stored in the root of the bucket.    deletion_protection.enabled - Indicates whether deletion protection is enabled.    idle_timeout.timeout_seconds - The idle timeout value, in seconds. The valid range is 1-3600. The default is 60 seconds.  
     */
    Key?: LoadBalancerAttributeKey;
    /**
     * The value of the attribute.
     */
    Value?: LoadBalancerAttributeValue;
  }
  export type LoadBalancerAttributeKey = string;
  export type LoadBalancerAttributeValue = string;
  export type LoadBalancerAttributes = LoadBalancerAttribute[];
  export type LoadBalancerName = string;
  export type LoadBalancerNames = LoadBalancerName[];
  export type LoadBalancerSchemeEnum = string;
  export interface LoadBalancerState {
    /**
     * The state code. The initial state of the load balancer is provisioning. After the load balancer is fully set up and ready to route traffic, its state is active. If the load balancer could not be set up, its state is failed.
     */
    Code?: LoadBalancerStateEnum;
    /**
     * A description of the state.
     */
    Reason?: StateReason;
  }
  export type LoadBalancerStateEnum = string;
  export type LoadBalancerTypeEnum = string;
  export type LoadBalancers = LoadBalancer[];
  export type Marker = string;
  export interface Matcher {
    /**
     * The HTTP codes. The default value is 200. You can specify multiple values (for example, "200,202") or a range of values (for example, "200-299").
     */
    HttpCode: HttpCode;
  }
  export interface ModifyListenerInput {
    /**
     * The Amazon Resource Name (ARN) of the listener.
     */
    ListenerArn: ListenerArn;
    /**
     * The port for connections from clients to the load balancer.
     */
    Port?: Port;
    /**
     * The protocol for connections from clients to the load balancer.
     */
    Protocol?: ProtocolEnum;
    /**
     * The security policy that defines which ciphers and protocols are supported.
     */
    SslPolicy?: SslPolicyName;
    /**
     * The SSL server certificate.
     */
    Certificates?: CertificateList;
    /**
     * The default actions.
     */
    DefaultActions?: Actions;
  }
  export interface ModifyListenerOutput {
    /**
     * Information about the modified listeners.
     */
    Listeners?: Listeners;
  }
  export interface ModifyLoadBalancerAttributesInput {
    /**
     * The Amazon Resource Name (ARN) of the load balancer.
     */
    LoadBalancerArn: LoadBalancerArn;
    /**
     * The load balancer attributes.
     */
    Attributes?: LoadBalancerAttributes;
  }
  export interface ModifyLoadBalancerAttributesOutput {
    /**
     * Information about the load balancer attributes.
     */
    Attributes?: LoadBalancerAttributes;
  }
  export interface ModifyRuleInput {
    /**
     * The Amazon Resource Name (ARN) of the rule.
     */
    RuleArn: RuleArn;
    /**
     * The conditions.
     */
    Conditions?: RuleConditionList;
    /**
     * The actions.
     */
    Actions?: Actions;
  }
  export interface ModifyRuleOutput {
    /**
     * Information about the rule.
     */
    Rules?: Rules;
  }
  export interface ModifyTargetGroupAttributesInput {
    /**
     * The Amazon Resource Name (ARN) of the target group.
     */
    TargetGroupArn: TargetGroupArn;
    /**
     * The attributes.
     */
    Attributes?: TargetGroupAttributes;
  }
  export interface ModifyTargetGroupAttributesOutput {
    /**
     * Information about the attributes.
     */
    Attributes?: TargetGroupAttributes;
  }
  export interface ModifyTargetGroupInput {
    /**
     * The Amazon Resource Name (ARN) of the target group.
     */
    TargetGroupArn: TargetGroupArn;
    /**
     * The protocol to use to connect with the target.
     */
    HealthCheckProtocol?: ProtocolEnum;
    /**
     * The port to use to connect with the target.
     */
    HealthCheckPort?: HealthCheckPort;
    /**
     * The ping path that is the destination for the health check request.
     */
    HealthCheckPath?: Path;
    /**
     * The approximate amount of time, in seconds, between health checks of an individual target.
     */
    HealthCheckIntervalSeconds?: HealthCheckIntervalSeconds;
    /**
     * The amount of time, in seconds, during which no response means a failed health check.
     */
    HealthCheckTimeoutSeconds?: HealthCheckTimeoutSeconds;
    /**
     * The number of consecutive health checks successes required before considering an unhealthy target healthy.
     */
    HealthyThresholdCount?: HealthCheckThresholdCount;
    /**
     * The number of consecutive health check failures required before considering the target unhealthy.
     */
    UnhealthyThresholdCount?: HealthCheckThresholdCount;
    /**
     * The HTTP codes to use when checking for a successful response from a target.
     */
    Matcher?: Matcher;
  }
  export interface ModifyTargetGroupOutput {
    /**
     * Information about the target group.
     */
    TargetGroups?: TargetGroups;
  }
  export type PageSize = number;
  export type Path = string;
  export type Port = number;
  export type ProtocolEnum = string;
  export interface RegisterTargetsInput {
    /**
     * The Amazon Resource Name (ARN) of the target group.
     */
    TargetGroupArn: TargetGroupArn;
    /**
     * The targets.
     */
    Targets?: TargetDescriptions;
  }
  export interface RegisterTargetsOutput {
  }
  export interface RemoveTagsInput {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    ResourceArns: ResourceArns;
    /**
     * The tag keys for the tags to remove.
     */
    TagKeys?: TagKeys;
  }
  export interface RemoveTagsOutput {
  }
  export type ResourceArn = string;
  export type ResourceArns = ResourceArn[];
  export interface Rule {
    /**
     * The Amazon Resource Name (ARN) of the rule.
     */
    RuleArn?: RuleArn;
    /**
     * The priority.
     */
    Priority?: String;
    /**
     * The conditions.
     */
    Conditions?: RuleConditionList;
    /**
     * The actions.
     */
    Actions?: Actions;
    /**
     * Indicates whether this is the default rule.
     */
    IsDefault?: IsDefault;
  }
  export type RuleArn = string;
  export type RuleArns = RuleArn[];
  export interface RuleCondition {
    /**
     * The name of the field. The possible value is path-pattern.
     */
    Field?: ConditionFieldName;
    /**
     * The values for the field. A path pattern is case sensitive, can be up to 255 characters in length, and can contain any of the following characters:   A-Z, a-z, 0-9   _ - . $ / ~ " ' @ : +   &amp;amp; (using &amp;amp;amp;)   * (matches 0 or more characters)   ? (matches exactly 1 character)  
     */
    Values?: ListOfString;
  }
  export type RuleConditionList = RuleCondition[];
  export type RulePriority = number;
  export type RulePriorityList = RulePriorityPair[];
  export interface RulePriorityPair {
    /**
     * The Amazon Resource Name (ARN) of the rule.
     */
    RuleArn?: RuleArn;
    /**
     * The rule priority.
     */
    Priority?: RulePriority;
  }
  export type Rules = Rule[];
  export type SecurityGroupId = string;
  export type SecurityGroups = SecurityGroupId[];
  export interface SetRulePrioritiesInput {
    /**
     * The rule priorities.
     */
    RulePriorities: RulePriorityList;
  }
  export interface SetRulePrioritiesOutput {
    /**
     * Information about the rules.
     */
    Rules?: Rules;
  }
  export interface SetSecurityGroupsInput {
    /**
     * The Amazon Resource Name (ARN) of the load balancer.
     */
    LoadBalancerArn: LoadBalancerArn;
    /**
     * The IDs of the security groups.
     */
    SecurityGroups?: SecurityGroups;
  }
  export interface SetSecurityGroupsOutput {
    /**
     * The IDs of the security groups associated with the load balancer.
     */
    SecurityGroupIds?: SecurityGroups;
  }
  export interface SetSubnetsInput {
    /**
     * The Amazon Resource Name (ARN) of the load balancer.
     */
    LoadBalancerArn: LoadBalancerArn;
    /**
     * The IDs of the subnets. You must specify at least two subnets. You can add only one subnet per Availability Zone.
     */
    Subnets?: Subnets;
  }
  export interface SetSubnetsOutput {
    /**
     * Information about the subnet and Availability Zone.
     */
    AvailabilityZones?: AvailabilityZones;
  }
  export type SslPolicies = SslPolicy[];
  export interface SslPolicy {
    /**
     * The protocols.
     */
    SslProtocols?: SslProtocols;
    /**
     * The ciphers.
     */
    Ciphers?: Ciphers;
    /**
     * The name of the policy.
     */
    Name?: SslPolicyName;
  }
  export type SslPolicyName = string;
  export type SslPolicyNames = SslPolicyName[];
  export type SslProtocol = string;
  export type SslProtocols = SslProtocol[];
  export type StateReason = string;
  export type String = string;
  export type StringValue = string;
  export type SubnetId = string;
  export type Subnets = SubnetId[];
  export interface Tag {
    /**
     * The key of the tag.
     */
    Key: TagKey;
    /**
     * The value of the tag.
     */
    Value?: TagValue;
  }
  export interface TagDescription {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    ResourceArn?: ResourceArn;
    /**
     * Information about the tags.
     */
    Tags?: TagList;
  }
  export type TagDescriptions = TagDescription[];
  export type TagKey = string;
  export type TagKeys = TagKey[];
  export type TagList = Tag[];
  export type TagValue = string;
  export interface TargetDescription {
    /**
     * The ID of the target.
     */
    Id: TargetId;
    /**
     * The port on which the target is listening.
     */
    Port?: Port;
  }
  export type TargetDescriptions = TargetDescription[];
  export interface TargetGroup {
    /**
     * The Amazon Resource Name (ARN) of the target group.
     */
    TargetGroupArn?: TargetGroupArn;
    /**
     * The name of the target group.
     */
    TargetGroupName?: TargetGroupName;
    /**
     * The protocol to use for routing traffic to the targets.
     */
    Protocol?: ProtocolEnum;
    /**
     * The port on which the targets are listening.
     */
    Port?: Port;
    /**
     * The ID of the VPC for the targets.
     */
    VpcId?: VpcId;
    /**
     * The protocol to use to connect with the target.
     */
    HealthCheckProtocol?: ProtocolEnum;
    /**
     * The port to use to connect with the target.
     */
    HealthCheckPort?: HealthCheckPort;
    /**
     * The approximate amount of time, in seconds, between health checks of an individual target.
     */
    HealthCheckIntervalSeconds?: HealthCheckIntervalSeconds;
    /**
     * The amount of time, in seconds, during which no response means a failed health check.
     */
    HealthCheckTimeoutSeconds?: HealthCheckTimeoutSeconds;
    /**
     * The number of consecutive health checks successes required before considering an unhealthy target healthy.
     */
    HealthyThresholdCount?: HealthCheckThresholdCount;
    /**
     * The number of consecutive health check failures required before considering the target unhealthy.
     */
    UnhealthyThresholdCount?: HealthCheckThresholdCount;
    /**
     * The destination for the health check request.
     */
    HealthCheckPath?: Path;
    /**
     * The HTTP codes to use when checking for a successful response from a target.
     */
    Matcher?: Matcher;
    /**
     * The Amazon Resource Names (ARN) of the load balancers that route traffic to this target group.
     */
    LoadBalancerArns?: LoadBalancerArns;
  }
  export type TargetGroupArn = string;
  export type TargetGroupArns = TargetGroupArn[];
  export interface TargetGroupAttribute {
    /**
     * The name of the attribute.    deregistration_delay.timeout_seconds - The amount time for Elastic Load Balancing to wait before changing the state of a deregistering target from draining to unused. The range is 0-3600 seconds. The default value is 300 seconds.    stickiness.enabled - Indicates whether sticky sessions are enabled.    stickiness.type - The type of sticky sessions. The possible value is lb_cookie.    stickiness.lb_cookie.duration_seconds - The time period, in seconds, during which requests from a client should be routed to the same target. After this time period expires, the load balancer-generated cookie is considered stale. The range is 1 second to 1 week (604800 seconds). The default value is 1 day (86400 seconds).  
     */
    Key?: TargetGroupAttributeKey;
    /**
     * The value of the attribute.
     */
    Value?: TargetGroupAttributeValue;
  }
  export type TargetGroupAttributeKey = string;
  export type TargetGroupAttributeValue = string;
  export type TargetGroupAttributes = TargetGroupAttribute[];
  export type TargetGroupName = string;
  export type TargetGroupNames = TargetGroupName[];
  export type TargetGroups = TargetGroup[];
  export interface TargetHealth {
    /**
     * The state of the target.
     */
    State?: TargetHealthStateEnum;
    /**
     * The reason code. If the target state is healthy, a reason code is not provided. If the target state is initial, the reason code can be one of the following values:    Elb.RegistrationInProgress - The target is in the process of being registered with the load balancer.    Elb.InitialHealthChecking - The load balancer is still sending the target the minimum number of health checks required to determine its health status.   If the target state is unhealthy, the reason code can be one of the following values:    Target.ResponseCodeMismatch - The health checks did not return an expected HTTP code.    Target.Timeout - The health check requests timed out.    Target.FailedHealthChecks - The health checks failed because the connection to the target timed out, the target response was malformed, or the target failed the health check for an unknown reason.    Elb.InternalError - The health checks failed due to an internal error.   If the target state is unused, the reason code can be one of the following values:    Target.NotRegistered - The target is not registered with the target group.    Target.NotInUse - The target group is not used by any load balancer or the target is in an Availability Zone that is not enabled for its load balancer.    Target.InvalidState - The target is in the stopped or terminated state.   If the target state is draining, the reason code can be the following value:    Target.DeregistrationInProgress - The target is in the process of being deregistered and the deregistration delay period has not expired.  
     */
    Reason?: TargetHealthReasonEnum;
    /**
     * A description of the target health that provides additional details. If the state is healthy, a description is not provided.
     */
    Description?: Description;
  }
  export interface TargetHealthDescription {
    /**
     * The description of the target.
     */
    Target?: TargetDescription;
    /**
     * The port to use to connect with the target.
     */
    HealthCheckPort?: HealthCheckPort;
    /**
     * The health information for the target.
     */
    TargetHealth?: TargetHealth;
  }
  export type TargetHealthDescriptions = TargetHealthDescription[];
  export type TargetHealthReasonEnum = string;
  export type TargetHealthStateEnum = string;
  export type TargetId = string;
  export type VpcId = string;
  export type ZoneName = string;
}
export = ELBv2;
