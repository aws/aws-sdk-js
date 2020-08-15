import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class EventBridge extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: EventBridge.Types.ClientConfiguration)
  config: Config & EventBridge.Types.ClientConfiguration;
  /**
   * Activates a partner event source that has been deactivated. Once activated, your matching event bus will start receiving events from the event source.
   */
  activateEventSource(params: EventBridge.Types.ActivateEventSourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Activates a partner event source that has been deactivated. Once activated, your matching event bus will start receiving events from the event source.
   */
  activateEventSource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates a new event bus within your account. This can be a custom event bus which you can use to receive events from your custom applications and services, or it can be a partner event bus which can be matched to a partner event source.
   */
  createEventBus(params: EventBridge.Types.CreateEventBusRequest, callback?: (err: AWSError, data: EventBridge.Types.CreateEventBusResponse) => void): Request<EventBridge.Types.CreateEventBusResponse, AWSError>;
  /**
   * Creates a new event bus within your account. This can be a custom event bus which you can use to receive events from your custom applications and services, or it can be a partner event bus which can be matched to a partner event source.
   */
  createEventBus(callback?: (err: AWSError, data: EventBridge.Types.CreateEventBusResponse) => void): Request<EventBridge.Types.CreateEventBusResponse, AWSError>;
  /**
   * Called by an SaaS partner to create a partner event source. This operation is not used by AWS customers. Each partner event source can be used by one AWS account to create a matching partner event bus in that AWS account. A SaaS partner must create one partner event source for each AWS account that wants to receive those event types.  A partner event source creates events based on resources within the SaaS partner's service or application. An AWS account that creates a partner event bus that matches the partner event source can use that event bus to receive events from the partner, and then process them using AWS Events rules and targets. Partner event source names follow this format:   partner_name/event_namespace/event_name    partner_name is determined during partner registration and identifies the partner to AWS customers. event_namespace is determined by the partner and is a way for the partner to categorize their events. event_name is determined by the partner, and should uniquely identify an event-generating resource within the partner system. The combination of event_namespace and event_name should help AWS customers decide whether to create an event bus to receive these events.
   */
  createPartnerEventSource(params: EventBridge.Types.CreatePartnerEventSourceRequest, callback?: (err: AWSError, data: EventBridge.Types.CreatePartnerEventSourceResponse) => void): Request<EventBridge.Types.CreatePartnerEventSourceResponse, AWSError>;
  /**
   * Called by an SaaS partner to create a partner event source. This operation is not used by AWS customers. Each partner event source can be used by one AWS account to create a matching partner event bus in that AWS account. A SaaS partner must create one partner event source for each AWS account that wants to receive those event types.  A partner event source creates events based on resources within the SaaS partner's service or application. An AWS account that creates a partner event bus that matches the partner event source can use that event bus to receive events from the partner, and then process them using AWS Events rules and targets. Partner event source names follow this format:   partner_name/event_namespace/event_name    partner_name is determined during partner registration and identifies the partner to AWS customers. event_namespace is determined by the partner and is a way for the partner to categorize their events. event_name is determined by the partner, and should uniquely identify an event-generating resource within the partner system. The combination of event_namespace and event_name should help AWS customers decide whether to create an event bus to receive these events.
   */
  createPartnerEventSource(callback?: (err: AWSError, data: EventBridge.Types.CreatePartnerEventSourceResponse) => void): Request<EventBridge.Types.CreatePartnerEventSourceResponse, AWSError>;
  /**
   * You can use this operation to temporarily stop receiving events from the specified partner event source. The matching event bus is not deleted.  When you deactivate a partner event source, the source goes into PENDING state. If it remains in PENDING state for more than two weeks, it is deleted. To activate a deactivated partner event source, use ActivateEventSource.
   */
  deactivateEventSource(params: EventBridge.Types.DeactivateEventSourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * You can use this operation to temporarily stop receiving events from the specified partner event source. The matching event bus is not deleted.  When you deactivate a partner event source, the source goes into PENDING state. If it remains in PENDING state for more than two weeks, it is deleted. To activate a deactivated partner event source, use ActivateEventSource.
   */
  deactivateEventSource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified custom event bus or partner event bus. All rules associated with this event bus need to be deleted. You can't delete your account's default event bus.
   */
  deleteEventBus(params: EventBridge.Types.DeleteEventBusRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified custom event bus or partner event bus. All rules associated with this event bus need to be deleted. You can't delete your account's default event bus.
   */
  deleteEventBus(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This operation is used by SaaS partners to delete a partner event source. This operation is not used by AWS customers. When you delete an event source, the status of the corresponding partner event bus in the AWS customer account becomes DELETED. 
   */
  deletePartnerEventSource(params: EventBridge.Types.DeletePartnerEventSourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This operation is used by SaaS partners to delete a partner event source. This operation is not used by AWS customers. When you delete an event source, the status of the corresponding partner event bus in the AWS customer account becomes DELETED. 
   */
  deletePartnerEventSource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified rule. Before you can delete the rule, you must remove all targets, using RemoveTargets. When you delete a rule, incoming events might continue to match to the deleted rule. Allow a short period of time for changes to take effect. Managed rules are rules created and managed by another AWS service on your behalf. These rules are created by those other AWS services to support functionality in those services. You can delete these rules using the Force option, but you should do so only if you are sure the other service is not still using that rule.
   */
  deleteRule(params: EventBridge.Types.DeleteRuleRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified rule. Before you can delete the rule, you must remove all targets, using RemoveTargets. When you delete a rule, incoming events might continue to match to the deleted rule. Allow a short period of time for changes to take effect. Managed rules are rules created and managed by another AWS service on your behalf. These rules are created by those other AWS services to support functionality in those services. You can delete these rules using the Force option, but you should do so only if you are sure the other service is not still using that rule.
   */
  deleteRule(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Displays details about an event bus in your account. This can include the external AWS accounts that are permitted to write events to your default event bus, and the associated policy. For custom event buses and partner event buses, it displays the name, ARN, policy, state, and creation time.  To enable your account to receive events from other accounts on its default event bus, use PutPermission. For more information about partner event buses, see CreateEventBus.
   */
  describeEventBus(params: EventBridge.Types.DescribeEventBusRequest, callback?: (err: AWSError, data: EventBridge.Types.DescribeEventBusResponse) => void): Request<EventBridge.Types.DescribeEventBusResponse, AWSError>;
  /**
   * Displays details about an event bus in your account. This can include the external AWS accounts that are permitted to write events to your default event bus, and the associated policy. For custom event buses and partner event buses, it displays the name, ARN, policy, state, and creation time.  To enable your account to receive events from other accounts on its default event bus, use PutPermission. For more information about partner event buses, see CreateEventBus.
   */
  describeEventBus(callback?: (err: AWSError, data: EventBridge.Types.DescribeEventBusResponse) => void): Request<EventBridge.Types.DescribeEventBusResponse, AWSError>;
  /**
   * This operation lists details about a partner event source that is shared with your account.
   */
  describeEventSource(params: EventBridge.Types.DescribeEventSourceRequest, callback?: (err: AWSError, data: EventBridge.Types.DescribeEventSourceResponse) => void): Request<EventBridge.Types.DescribeEventSourceResponse, AWSError>;
  /**
   * This operation lists details about a partner event source that is shared with your account.
   */
  describeEventSource(callback?: (err: AWSError, data: EventBridge.Types.DescribeEventSourceResponse) => void): Request<EventBridge.Types.DescribeEventSourceResponse, AWSError>;
  /**
   * An SaaS partner can use this operation to list details about a partner event source that they have created. AWS customers do not use this operation. Instead, AWS customers can use DescribeEventSource to see details about a partner event source that is shared with them.
   */
  describePartnerEventSource(params: EventBridge.Types.DescribePartnerEventSourceRequest, callback?: (err: AWSError, data: EventBridge.Types.DescribePartnerEventSourceResponse) => void): Request<EventBridge.Types.DescribePartnerEventSourceResponse, AWSError>;
  /**
   * An SaaS partner can use this operation to list details about a partner event source that they have created. AWS customers do not use this operation. Instead, AWS customers can use DescribeEventSource to see details about a partner event source that is shared with them.
   */
  describePartnerEventSource(callback?: (err: AWSError, data: EventBridge.Types.DescribePartnerEventSourceResponse) => void): Request<EventBridge.Types.DescribePartnerEventSourceResponse, AWSError>;
  /**
   * Describes the specified rule. DescribeRule does not list the targets of a rule. To see the targets associated with a rule, use ListTargetsByRule.
   */
  describeRule(params: EventBridge.Types.DescribeRuleRequest, callback?: (err: AWSError, data: EventBridge.Types.DescribeRuleResponse) => void): Request<EventBridge.Types.DescribeRuleResponse, AWSError>;
  /**
   * Describes the specified rule. DescribeRule does not list the targets of a rule. To see the targets associated with a rule, use ListTargetsByRule.
   */
  describeRule(callback?: (err: AWSError, data: EventBridge.Types.DescribeRuleResponse) => void): Request<EventBridge.Types.DescribeRuleResponse, AWSError>;
  /**
   * Disables the specified rule. A disabled rule won't match any events, and won't self-trigger if it has a schedule expression. When you disable a rule, incoming events might continue to match to the disabled rule. Allow a short period of time for changes to take effect.
   */
  disableRule(params: EventBridge.Types.DisableRuleRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disables the specified rule. A disabled rule won't match any events, and won't self-trigger if it has a schedule expression. When you disable a rule, incoming events might continue to match to the disabled rule. Allow a short period of time for changes to take effect.
   */
  disableRule(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Enables the specified rule. If the rule does not exist, the operation fails. When you enable a rule, incoming events might not immediately start matching to a newly enabled rule. Allow a short period of time for changes to take effect.
   */
  enableRule(params: EventBridge.Types.EnableRuleRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Enables the specified rule. If the rule does not exist, the operation fails. When you enable a rule, incoming events might not immediately start matching to a newly enabled rule. Allow a short period of time for changes to take effect.
   */
  enableRule(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Lists all the event buses in your account, including the default event bus, custom event buses, and partner event buses.
   */
  listEventBuses(params: EventBridge.Types.ListEventBusesRequest, callback?: (err: AWSError, data: EventBridge.Types.ListEventBusesResponse) => void): Request<EventBridge.Types.ListEventBusesResponse, AWSError>;
  /**
   * Lists all the event buses in your account, including the default event bus, custom event buses, and partner event buses.
   */
  listEventBuses(callback?: (err: AWSError, data: EventBridge.Types.ListEventBusesResponse) => void): Request<EventBridge.Types.ListEventBusesResponse, AWSError>;
  /**
   * You can use this to see all the partner event sources that have been shared with your AWS account. For more information about partner event sources, see CreateEventBus.
   */
  listEventSources(params: EventBridge.Types.ListEventSourcesRequest, callback?: (err: AWSError, data: EventBridge.Types.ListEventSourcesResponse) => void): Request<EventBridge.Types.ListEventSourcesResponse, AWSError>;
  /**
   * You can use this to see all the partner event sources that have been shared with your AWS account. For more information about partner event sources, see CreateEventBus.
   */
  listEventSources(callback?: (err: AWSError, data: EventBridge.Types.ListEventSourcesResponse) => void): Request<EventBridge.Types.ListEventSourcesResponse, AWSError>;
  /**
   * An SaaS partner can use this operation to display the AWS account ID that a particular partner event source name is associated with. This operation is not used by AWS customers.
   */
  listPartnerEventSourceAccounts(params: EventBridge.Types.ListPartnerEventSourceAccountsRequest, callback?: (err: AWSError, data: EventBridge.Types.ListPartnerEventSourceAccountsResponse) => void): Request<EventBridge.Types.ListPartnerEventSourceAccountsResponse, AWSError>;
  /**
   * An SaaS partner can use this operation to display the AWS account ID that a particular partner event source name is associated with. This operation is not used by AWS customers.
   */
  listPartnerEventSourceAccounts(callback?: (err: AWSError, data: EventBridge.Types.ListPartnerEventSourceAccountsResponse) => void): Request<EventBridge.Types.ListPartnerEventSourceAccountsResponse, AWSError>;
  /**
   * An SaaS partner can use this operation to list all the partner event source names that they have created. This operation is not used by AWS customers.
   */
  listPartnerEventSources(params: EventBridge.Types.ListPartnerEventSourcesRequest, callback?: (err: AWSError, data: EventBridge.Types.ListPartnerEventSourcesResponse) => void): Request<EventBridge.Types.ListPartnerEventSourcesResponse, AWSError>;
  /**
   * An SaaS partner can use this operation to list all the partner event source names that they have created. This operation is not used by AWS customers.
   */
  listPartnerEventSources(callback?: (err: AWSError, data: EventBridge.Types.ListPartnerEventSourcesResponse) => void): Request<EventBridge.Types.ListPartnerEventSourcesResponse, AWSError>;
  /**
   * Lists the rules for the specified target. You can see which of the rules in Amazon EventBridge can invoke a specific target in your account.
   */
  listRuleNamesByTarget(params: EventBridge.Types.ListRuleNamesByTargetRequest, callback?: (err: AWSError, data: EventBridge.Types.ListRuleNamesByTargetResponse) => void): Request<EventBridge.Types.ListRuleNamesByTargetResponse, AWSError>;
  /**
   * Lists the rules for the specified target. You can see which of the rules in Amazon EventBridge can invoke a specific target in your account.
   */
  listRuleNamesByTarget(callback?: (err: AWSError, data: EventBridge.Types.ListRuleNamesByTargetResponse) => void): Request<EventBridge.Types.ListRuleNamesByTargetResponse, AWSError>;
  /**
   * Lists your Amazon EventBridge rules. You can either list all the rules or you can provide a prefix to match to the rule names. ListRules does not list the targets of a rule. To see the targets associated with a rule, use ListTargetsByRule.
   */
  listRules(params: EventBridge.Types.ListRulesRequest, callback?: (err: AWSError, data: EventBridge.Types.ListRulesResponse) => void): Request<EventBridge.Types.ListRulesResponse, AWSError>;
  /**
   * Lists your Amazon EventBridge rules. You can either list all the rules or you can provide a prefix to match to the rule names. ListRules does not list the targets of a rule. To see the targets associated with a rule, use ListTargetsByRule.
   */
  listRules(callback?: (err: AWSError, data: EventBridge.Types.ListRulesResponse) => void): Request<EventBridge.Types.ListRulesResponse, AWSError>;
  /**
   * Displays the tags associated with an EventBridge resource. In EventBridge, rules and event buses can be tagged.
   */
  listTagsForResource(params: EventBridge.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: EventBridge.Types.ListTagsForResourceResponse) => void): Request<EventBridge.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Displays the tags associated with an EventBridge resource. In EventBridge, rules and event buses can be tagged.
   */
  listTagsForResource(callback?: (err: AWSError, data: EventBridge.Types.ListTagsForResourceResponse) => void): Request<EventBridge.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists the targets assigned to the specified rule.
   */
  listTargetsByRule(params: EventBridge.Types.ListTargetsByRuleRequest, callback?: (err: AWSError, data: EventBridge.Types.ListTargetsByRuleResponse) => void): Request<EventBridge.Types.ListTargetsByRuleResponse, AWSError>;
  /**
   * Lists the targets assigned to the specified rule.
   */
  listTargetsByRule(callback?: (err: AWSError, data: EventBridge.Types.ListTargetsByRuleResponse) => void): Request<EventBridge.Types.ListTargetsByRuleResponse, AWSError>;
  /**
   * Sends custom events to Amazon EventBridge so that they can be matched to rules.
   */
  putEvents(params: EventBridge.Types.PutEventsRequest, callback?: (err: AWSError, data: EventBridge.Types.PutEventsResponse) => void): Request<EventBridge.Types.PutEventsResponse, AWSError>;
  /**
   * Sends custom events to Amazon EventBridge so that they can be matched to rules.
   */
  putEvents(callback?: (err: AWSError, data: EventBridge.Types.PutEventsResponse) => void): Request<EventBridge.Types.PutEventsResponse, AWSError>;
  /**
   * This is used by SaaS partners to write events to a customer's partner event bus. AWS customers do not use this operation.
   */
  putPartnerEvents(params: EventBridge.Types.PutPartnerEventsRequest, callback?: (err: AWSError, data: EventBridge.Types.PutPartnerEventsResponse) => void): Request<EventBridge.Types.PutPartnerEventsResponse, AWSError>;
  /**
   * This is used by SaaS partners to write events to a customer's partner event bus. AWS customers do not use this operation.
   */
  putPartnerEvents(callback?: (err: AWSError, data: EventBridge.Types.PutPartnerEventsResponse) => void): Request<EventBridge.Types.PutPartnerEventsResponse, AWSError>;
  /**
   * Running PutPermission permits the specified AWS account or AWS organization to put events to the specified event bus. Amazon EventBridge (CloudWatch Events) rules in your account are triggered by these events arriving to an event bus in your account.  For another account to send events to your account, that external account must have an EventBridge rule with your account's event bus as a target. To enable multiple AWS accounts to put events to your event bus, run PutPermission once for each of these accounts. Or, if all the accounts are members of the same AWS organization, you can run PutPermission once specifying Principal as "*" and specifying the AWS organization ID in Condition, to grant permissions to all accounts in that organization. If you grant permissions using an organization, then accounts in that organization must specify a RoleArn with proper permissions when they use PutTarget to add your account's event bus as a target. For more information, see Sending and Receiving Events Between AWS Accounts in the Amazon EventBridge User Guide. The permission policy on the default event bus cannot exceed 10 KB in size.
   */
  putPermission(params: EventBridge.Types.PutPermissionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Running PutPermission permits the specified AWS account or AWS organization to put events to the specified event bus. Amazon EventBridge (CloudWatch Events) rules in your account are triggered by these events arriving to an event bus in your account.  For another account to send events to your account, that external account must have an EventBridge rule with your account's event bus as a target. To enable multiple AWS accounts to put events to your event bus, run PutPermission once for each of these accounts. Or, if all the accounts are members of the same AWS organization, you can run PutPermission once specifying Principal as "*" and specifying the AWS organization ID in Condition, to grant permissions to all accounts in that organization. If you grant permissions using an organization, then accounts in that organization must specify a RoleArn with proper permissions when they use PutTarget to add your account's event bus as a target. For more information, see Sending and Receiving Events Between AWS Accounts in the Amazon EventBridge User Guide. The permission policy on the default event bus cannot exceed 10 KB in size.
   */
  putPermission(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates or updates the specified rule. Rules are enabled by default, or based on value of the state. You can disable a rule using DisableRule. A single rule watches for events from a single event bus. Events generated by AWS services go to your account's default event bus. Events generated by SaaS partner services or applications go to the matching partner event bus. If you have custom applications or services, you can specify whether their events go to your default event bus or a custom event bus that you have created. For more information, see CreateEventBus. If you are updating an existing rule, the rule is replaced with what you specify in this PutRule command. If you omit arguments in PutRule, the old values for those arguments are not kept. Instead, they are replaced with null values. When you create or update a rule, incoming events might not immediately start matching to new or updated rules. Allow a short period of time for changes to take effect. A rule must contain at least an EventPattern or ScheduleExpression. Rules with EventPatterns are triggered when a matching event is observed. Rules with ScheduleExpressions self-trigger based on the given schedule. A rule can have both an EventPattern and a ScheduleExpression, in which case the rule triggers on matching events as well as on a schedule. When you initially create a rule, you can optionally assign one or more tags to the rule. Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only rules with certain tag values. To use the PutRule operation and assign tags, you must have both the events:PutRule and events:TagResource permissions. If you are updating an existing rule, any tags you specify in the PutRule operation are ignored. To update the tags of an existing rule, use TagResource and UntagResource. Most services in AWS treat : or / as the same character in Amazon Resource Names (ARNs). However, EventBridge uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match. In EventBridge, it is possible to create rules that lead to infinite loops, where a rule is fired repeatedly. For example, a rule might detect that ACLs have changed on an S3 bucket, and trigger software to change them to the desired state. If the rule is not written carefully, the subsequent change to the ACLs fires the rule again, creating an infinite loop. To prevent this, write the rules so that the triggered actions do not re-fire the same rule. For example, your rule could fire only if ACLs are found to be in a bad state, instead of after any change.  An infinite loop can quickly cause higher than expected charges. We recommend that you use budgeting, which alerts you when charges exceed your specified limit. For more information, see Managing Your Costs with Budgets.
   */
  putRule(params: EventBridge.Types.PutRuleRequest, callback?: (err: AWSError, data: EventBridge.Types.PutRuleResponse) => void): Request<EventBridge.Types.PutRuleResponse, AWSError>;
  /**
   * Creates or updates the specified rule. Rules are enabled by default, or based on value of the state. You can disable a rule using DisableRule. A single rule watches for events from a single event bus. Events generated by AWS services go to your account's default event bus. Events generated by SaaS partner services or applications go to the matching partner event bus. If you have custom applications or services, you can specify whether their events go to your default event bus or a custom event bus that you have created. For more information, see CreateEventBus. If you are updating an existing rule, the rule is replaced with what you specify in this PutRule command. If you omit arguments in PutRule, the old values for those arguments are not kept. Instead, they are replaced with null values. When you create or update a rule, incoming events might not immediately start matching to new or updated rules. Allow a short period of time for changes to take effect. A rule must contain at least an EventPattern or ScheduleExpression. Rules with EventPatterns are triggered when a matching event is observed. Rules with ScheduleExpressions self-trigger based on the given schedule. A rule can have both an EventPattern and a ScheduleExpression, in which case the rule triggers on matching events as well as on a schedule. When you initially create a rule, you can optionally assign one or more tags to the rule. Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only rules with certain tag values. To use the PutRule operation and assign tags, you must have both the events:PutRule and events:TagResource permissions. If you are updating an existing rule, any tags you specify in the PutRule operation are ignored. To update the tags of an existing rule, use TagResource and UntagResource. Most services in AWS treat : or / as the same character in Amazon Resource Names (ARNs). However, EventBridge uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match. In EventBridge, it is possible to create rules that lead to infinite loops, where a rule is fired repeatedly. For example, a rule might detect that ACLs have changed on an S3 bucket, and trigger software to change them to the desired state. If the rule is not written carefully, the subsequent change to the ACLs fires the rule again, creating an infinite loop. To prevent this, write the rules so that the triggered actions do not re-fire the same rule. For example, your rule could fire only if ACLs are found to be in a bad state, instead of after any change.  An infinite loop can quickly cause higher than expected charges. We recommend that you use budgeting, which alerts you when charges exceed your specified limit. For more information, see Managing Your Costs with Budgets.
   */
  putRule(callback?: (err: AWSError, data: EventBridge.Types.PutRuleResponse) => void): Request<EventBridge.Types.PutRuleResponse, AWSError>;
  /**
   * Adds the specified targets to the specified rule, or updates the targets if they are already associated with the rule. Targets are the resources that are invoked when a rule is triggered. You can configure the following as targets for Events:   EC2 instances   SSM Run Command   SSM Automation   AWS Lambda functions   Data streams in Amazon Kinesis Data Streams   Data delivery streams in Amazon Kinesis Data Firehose   Amazon ECS tasks   AWS Step Functions state machines   AWS Batch jobs   AWS CodeBuild projects   Pipelines in AWS CodePipeline   Amazon Inspector assessment templates   Amazon SNS topics   Amazon SQS queues, including FIFO queues   The default event bus of another AWS account   Amazon API Gateway REST APIs   Creating rules with built-in targets is supported only in the AWS Management Console. The built-in targets are EC2 CreateSnapshot API call, EC2 RebootInstances API call, EC2 StopInstances API call, and EC2 TerminateInstances API call.  For some target types, PutTargets provides target-specific parameters. If the target is a Kinesis data stream, you can optionally specify which shard the event goes to by using the KinesisParameters argument. To invoke a command on multiple EC2 instances with one rule, you can use the RunCommandParameters field. To be able to make API calls against the resources that you own, Amazon EventBridge (CloudWatch Events) needs the appropriate permissions. For AWS Lambda and Amazon SNS resources, EventBridge relies on resource-based policies. For EC2 instances, Kinesis data streams, AWS Step Functions state machines and API Gateway REST APIs, EventBridge relies on IAM roles that you specify in the RoleARN argument in PutTargets. For more information, see Authentication and Access Control in the Amazon EventBridge User Guide. If another AWS account is in the same region and has granted you permission (using PutPermission), you can send events to that account. Set that account's event bus as a target of the rules in your account. To send the matched events to the other account, specify that account's event bus as the Arn value when you run PutTargets. If your account sends events to another account, your account is charged for each sent event. Each event sent to another account is charged as a custom event. The account receiving the event is not charged. For more information, see Amazon EventBridge (CloudWatch Events) Pricing.   Input, InputPath, and InputTransformer are not available with PutTarget if the target is an event bus of a different AWS account.  If you are setting the event bus of another account as the target, and that account granted permission to your account through an organization instead of directly by the account ID, then you must specify a RoleArn with proper permissions in the Target structure. For more information, see Sending and Receiving Events Between AWS Accounts in the Amazon EventBridge User Guide. For more information about enabling cross-account events, see PutPermission.  Input, InputPath, and InputTransformer are mutually exclusive and optional parameters of a target. When a rule is triggered due to a matched event:   If none of the following arguments are specified for a target, then the entire event is passed to the target in JSON format (unless the target is Amazon EC2 Run Command or Amazon ECS task, in which case nothing from the event is passed to the target).   If Input is specified in the form of valid JSON, then the matched event is overridden with this constant.   If InputPath is specified in the form of JSONPath (for example, $.detail), then only the part of the event specified in the path is passed to the target (for example, only the detail part of the event is passed).   If InputTransformer is specified, then one or more specified JSONPaths are extracted from the event and used as values in a template that you specify as the input to the target.   When you specify InputPath or InputTransformer, you must use JSON dot notation, not bracket notation. When you add targets to a rule and the associated rule triggers soon after, new or updated targets might not be immediately invoked. Allow a short period of time for changes to take effect. This action can partially fail if too many requests are made at the same time. If that happens, FailedEntryCount is non-zero in the response and each entry in FailedEntries provides the ID of the failed target and the error code.
   */
  putTargets(params: EventBridge.Types.PutTargetsRequest, callback?: (err: AWSError, data: EventBridge.Types.PutTargetsResponse) => void): Request<EventBridge.Types.PutTargetsResponse, AWSError>;
  /**
   * Adds the specified targets to the specified rule, or updates the targets if they are already associated with the rule. Targets are the resources that are invoked when a rule is triggered. You can configure the following as targets for Events:   EC2 instances   SSM Run Command   SSM Automation   AWS Lambda functions   Data streams in Amazon Kinesis Data Streams   Data delivery streams in Amazon Kinesis Data Firehose   Amazon ECS tasks   AWS Step Functions state machines   AWS Batch jobs   AWS CodeBuild projects   Pipelines in AWS CodePipeline   Amazon Inspector assessment templates   Amazon SNS topics   Amazon SQS queues, including FIFO queues   The default event bus of another AWS account   Amazon API Gateway REST APIs   Creating rules with built-in targets is supported only in the AWS Management Console. The built-in targets are EC2 CreateSnapshot API call, EC2 RebootInstances API call, EC2 StopInstances API call, and EC2 TerminateInstances API call.  For some target types, PutTargets provides target-specific parameters. If the target is a Kinesis data stream, you can optionally specify which shard the event goes to by using the KinesisParameters argument. To invoke a command on multiple EC2 instances with one rule, you can use the RunCommandParameters field. To be able to make API calls against the resources that you own, Amazon EventBridge (CloudWatch Events) needs the appropriate permissions. For AWS Lambda and Amazon SNS resources, EventBridge relies on resource-based policies. For EC2 instances, Kinesis data streams, AWS Step Functions state machines and API Gateway REST APIs, EventBridge relies on IAM roles that you specify in the RoleARN argument in PutTargets. For more information, see Authentication and Access Control in the Amazon EventBridge User Guide. If another AWS account is in the same region and has granted you permission (using PutPermission), you can send events to that account. Set that account's event bus as a target of the rules in your account. To send the matched events to the other account, specify that account's event bus as the Arn value when you run PutTargets. If your account sends events to another account, your account is charged for each sent event. Each event sent to another account is charged as a custom event. The account receiving the event is not charged. For more information, see Amazon EventBridge (CloudWatch Events) Pricing.   Input, InputPath, and InputTransformer are not available with PutTarget if the target is an event bus of a different AWS account.  If you are setting the event bus of another account as the target, and that account granted permission to your account through an organization instead of directly by the account ID, then you must specify a RoleArn with proper permissions in the Target structure. For more information, see Sending and Receiving Events Between AWS Accounts in the Amazon EventBridge User Guide. For more information about enabling cross-account events, see PutPermission.  Input, InputPath, and InputTransformer are mutually exclusive and optional parameters of a target. When a rule is triggered due to a matched event:   If none of the following arguments are specified for a target, then the entire event is passed to the target in JSON format (unless the target is Amazon EC2 Run Command or Amazon ECS task, in which case nothing from the event is passed to the target).   If Input is specified in the form of valid JSON, then the matched event is overridden with this constant.   If InputPath is specified in the form of JSONPath (for example, $.detail), then only the part of the event specified in the path is passed to the target (for example, only the detail part of the event is passed).   If InputTransformer is specified, then one or more specified JSONPaths are extracted from the event and used as values in a template that you specify as the input to the target.   When you specify InputPath or InputTransformer, you must use JSON dot notation, not bracket notation. When you add targets to a rule and the associated rule triggers soon after, new or updated targets might not be immediately invoked. Allow a short period of time for changes to take effect. This action can partially fail if too many requests are made at the same time. If that happens, FailedEntryCount is non-zero in the response and each entry in FailedEntries provides the ID of the failed target and the error code.
   */
  putTargets(callback?: (err: AWSError, data: EventBridge.Types.PutTargetsResponse) => void): Request<EventBridge.Types.PutTargetsResponse, AWSError>;
  /**
   * Revokes the permission of another AWS account to be able to put events to the specified event bus. Specify the account to revoke by the StatementId value that you associated with the account when you granted it permission with PutPermission. You can find the StatementId by using DescribeEventBus.
   */
  removePermission(params: EventBridge.Types.RemovePermissionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Revokes the permission of another AWS account to be able to put events to the specified event bus. Specify the account to revoke by the StatementId value that you associated with the account when you granted it permission with PutPermission. You can find the StatementId by using DescribeEventBus.
   */
  removePermission(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the specified targets from the specified rule. When the rule is triggered, those targets are no longer be invoked. When you remove a target, when the associated rule triggers, removed targets might continue to be invoked. Allow a short period of time for changes to take effect. This action can partially fail if too many requests are made at the same time. If that happens, FailedEntryCount is non-zero in the response and each entry in FailedEntries provides the ID of the failed target and the error code.
   */
  removeTargets(params: EventBridge.Types.RemoveTargetsRequest, callback?: (err: AWSError, data: EventBridge.Types.RemoveTargetsResponse) => void): Request<EventBridge.Types.RemoveTargetsResponse, AWSError>;
  /**
   * Removes the specified targets from the specified rule. When the rule is triggered, those targets are no longer be invoked. When you remove a target, when the associated rule triggers, removed targets might continue to be invoked. Allow a short period of time for changes to take effect. This action can partially fail if too many requests are made at the same time. If that happens, FailedEntryCount is non-zero in the response and each entry in FailedEntries provides the ID of the failed target and the error code.
   */
  removeTargets(callback?: (err: AWSError, data: EventBridge.Types.RemoveTargetsResponse) => void): Request<EventBridge.Types.RemoveTargetsResponse, AWSError>;
  /**
   * Assigns one or more tags (key-value pairs) to the specified EventBridge resource. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. In EventBridge, rules and event buses can be tagged. Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters. You can use the TagResource action with a resource that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag. You can associate as many as 50 tags with a resource.
   */
  tagResource(params: EventBridge.Types.TagResourceRequest, callback?: (err: AWSError, data: EventBridge.Types.TagResourceResponse) => void): Request<EventBridge.Types.TagResourceResponse, AWSError>;
  /**
   * Assigns one or more tags (key-value pairs) to the specified EventBridge resource. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. In EventBridge, rules and event buses can be tagged. Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters. You can use the TagResource action with a resource that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag. You can associate as many as 50 tags with a resource.
   */
  tagResource(callback?: (err: AWSError, data: EventBridge.Types.TagResourceResponse) => void): Request<EventBridge.Types.TagResourceResponse, AWSError>;
  /**
   * Tests whether the specified event pattern matches the provided event. Most services in AWS treat : or / as the same character in Amazon Resource Names (ARNs). However, EventBridge uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match.
   */
  testEventPattern(params: EventBridge.Types.TestEventPatternRequest, callback?: (err: AWSError, data: EventBridge.Types.TestEventPatternResponse) => void): Request<EventBridge.Types.TestEventPatternResponse, AWSError>;
  /**
   * Tests whether the specified event pattern matches the provided event. Most services in AWS treat : or / as the same character in Amazon Resource Names (ARNs). However, EventBridge uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match.
   */
  testEventPattern(callback?: (err: AWSError, data: EventBridge.Types.TestEventPatternResponse) => void): Request<EventBridge.Types.TestEventPatternResponse, AWSError>;
  /**
   * Removes one or more tags from the specified EventBridge resource. In Amazon EventBridge (CloudWatch Events, rules and event buses can be tagged.
   */
  untagResource(params: EventBridge.Types.UntagResourceRequest, callback?: (err: AWSError, data: EventBridge.Types.UntagResourceResponse) => void): Request<EventBridge.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes one or more tags from the specified EventBridge resource. In Amazon EventBridge (CloudWatch Events, rules and event buses can be tagged.
   */
  untagResource(callback?: (err: AWSError, data: EventBridge.Types.UntagResourceResponse) => void): Request<EventBridge.Types.UntagResourceResponse, AWSError>;
}
declare namespace EventBridge {
  export type AccountId = string;
  export type Action = string;
  export interface ActivateEventSourceRequest {
    /**
     * The name of the partner event source to activate.
     */
    Name: EventSourceName;
  }
  export type Arn = string;
  export type AssignPublicIp = "ENABLED"|"DISABLED"|string;
  export interface AwsVpcConfiguration {
    /**
     * Specifies the subnets associated with the task. These subnets must all be in the same VPC. You can specify as many as 16 subnets.
     */
    Subnets: StringList;
    /**
     * Specifies the security groups associated with the task. These security groups must all be in the same VPC. You can specify as many as five security groups. If you do not specify a security group, the default security group for the VPC is used.
     */
    SecurityGroups?: StringList;
    /**
     * Specifies whether the task's elastic network interface receives a public IP address. You can specify ENABLED only when LaunchType in EcsParameters is set to FARGATE.
     */
    AssignPublicIp?: AssignPublicIp;
  }
  export interface BatchArrayProperties {
    /**
     * The size of the array, if this is an array batch job. Valid values are integers between 2 and 10,000.
     */
    Size?: Integer;
  }
  export interface BatchParameters {
    /**
     * The ARN or name of the job definition to use if the event target is an AWS Batch job. This job definition must already exist.
     */
    JobDefinition: String;
    /**
     * The name to use for this execution of the job, if the target is an AWS Batch job.
     */
    JobName: String;
    /**
     * The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an AWS Batch job.
     */
    ArrayProperties?: BatchArrayProperties;
    /**
     * The retry strategy to use for failed jobs, if the target is an AWS Batch job. The retry strategy is the number of times to retry the failed job execution. Valid values are 1–10. When you specify a retry strategy here, it overrides the retry strategy defined in the job definition.
     */
    RetryStrategy?: BatchRetryStrategy;
  }
  export interface BatchRetryStrategy {
    /**
     * The number of times to attempt to retry, if the job fails. Valid values are 1–10.
     */
    Attempts?: Integer;
  }
  export type Boolean = boolean;
  export interface Condition {
    /**
     * Specifies the type of condition. Currently the only supported value is StringEquals.
     */
    Type: String;
    /**
     * Specifies the key for the condition. Currently the only supported key is aws:PrincipalOrgID.
     */
    Key: String;
    /**
     * Specifies the value for the key. Currently, this must be the ID of the organization.
     */
    Value: String;
  }
  export interface CreateEventBusRequest {
    /**
     * The name of the new event bus.  Event bus names cannot contain the / character. You can't use the name default for a custom event bus, as this name is already used for your account's default event bus. If this is a partner event bus, the name must exactly match the name of the partner event source that this event bus is matched to.
     */
    Name: EventBusName;
    /**
     * If you are creating a partner event bus, this specifies the partner event source that the new event bus will be matched with.
     */
    EventSourceName?: EventSourceName;
    /**
     * Tags to associate with the event bus.
     */
    Tags?: TagList;
  }
  export interface CreateEventBusResponse {
    /**
     * The ARN of the new event bus.
     */
    EventBusArn?: String;
  }
  export interface CreatePartnerEventSourceRequest {
    /**
     * The name of the partner event source. This name must be unique and must be in the format  partner_name/event_namespace/event_name . The AWS account that wants to use this partner event source must create a partner event bus with a name that matches the name of the partner event source.
     */
    Name: EventSourceName;
    /**
     * The AWS account ID that is permitted to create a matching partner event bus for this partner event source.
     */
    Account: AccountId;
  }
  export interface CreatePartnerEventSourceResponse {
    /**
     * The ARN of the partner event source.
     */
    EventSourceArn?: String;
  }
  export interface DeactivateEventSourceRequest {
    /**
     * The name of the partner event source to deactivate.
     */
    Name: EventSourceName;
  }
  export interface DeleteEventBusRequest {
    /**
     * The name of the event bus to delete.
     */
    Name: EventBusName;
  }
  export interface DeletePartnerEventSourceRequest {
    /**
     * The name of the event source to delete.
     */
    Name: EventSourceName;
    /**
     * The AWS account ID of the AWS customer that the event source was created for.
     */
    Account: AccountId;
  }
  export interface DeleteRuleRequest {
    /**
     * The name of the rule.
     */
    Name: RuleName;
    /**
     * The event bus associated with the rule. If you omit this, the default event bus is used.
     */
    EventBusName?: EventBusName;
    /**
     * If this is a managed rule, created by an AWS service on your behalf, you must specify Force as True to delete the rule. This parameter is ignored for rules that are not managed rules. You can check whether a rule is a managed rule by using DescribeRule or ListRules and checking the ManagedBy field of the response.
     */
    Force?: Boolean;
  }
  export interface DescribeEventBusRequest {
    /**
     * The name of the event bus to show details for. If you omit this, the default event bus is displayed.
     */
    Name?: EventBusName;
  }
  export interface DescribeEventBusResponse {
    /**
     * The name of the event bus. Currently, this is always default.
     */
    Name?: String;
    /**
     * The Amazon Resource Name (ARN) of the account permitted to write events to the current account.
     */
    Arn?: String;
    /**
     * The policy that enables the external account to send events to your account.
     */
    Policy?: String;
  }
  export interface DescribeEventSourceRequest {
    /**
     * The name of the partner event source to display the details of.
     */
    Name: EventSourceName;
  }
  export interface DescribeEventSourceResponse {
    /**
     * The ARN of the partner event source.
     */
    Arn?: String;
    /**
     * The name of the SaaS partner that created the event source.
     */
    CreatedBy?: String;
    /**
     * The date and time that the event source was created.
     */
    CreationTime?: Timestamp;
    /**
     * The date and time that the event source will expire if you do not create a matching event bus.
     */
    ExpirationTime?: Timestamp;
    /**
     * The name of the partner event source.
     */
    Name?: String;
    /**
     * The state of the event source. If it is ACTIVE, you have already created a matching event bus for this event source, and that event bus is active. If it is PENDING, either you haven't yet created a matching event bus, or that event bus is deactivated. If it is DELETED, you have created a matching event bus, but the event source has since been deleted.
     */
    State?: EventSourceState;
  }
  export interface DescribePartnerEventSourceRequest {
    /**
     * The name of the event source to display.
     */
    Name: EventSourceName;
  }
  export interface DescribePartnerEventSourceResponse {
    /**
     * The ARN of the event source.
     */
    Arn?: String;
    /**
     * The name of the event source.
     */
    Name?: String;
  }
  export interface DescribeRuleRequest {
    /**
     * The name of the rule.
     */
    Name: RuleName;
    /**
     * The event bus associated with the rule. If you omit this, the default event bus is used.
     */
    EventBusName?: EventBusName;
  }
  export interface DescribeRuleResponse {
    /**
     * The name of the rule.
     */
    Name?: RuleName;
    /**
     * The Amazon Resource Name (ARN) of the rule.
     */
    Arn?: RuleArn;
    /**
     * The event pattern. For more information, see Events and Event Patterns in the Amazon EventBridge User Guide.
     */
    EventPattern?: EventPattern;
    /**
     * The scheduling expression. For example, "cron(0 20 * * ? *)", "rate(5 minutes)".
     */
    ScheduleExpression?: ScheduleExpression;
    /**
     * Specifies whether the rule is enabled or disabled.
     */
    State?: RuleState;
    /**
     * The description of the rule.
     */
    Description?: RuleDescription;
    /**
     * The Amazon Resource Name (ARN) of the IAM role associated with the rule.
     */
    RoleArn?: RoleArn;
    /**
     * If this is a managed rule, created by an AWS service on your behalf, this field displays the principal name of the AWS service that created the rule.
     */
    ManagedBy?: ManagedBy;
    /**
     * The event bus associated with the rule.
     */
    EventBusName?: EventBusName;
  }
  export interface DisableRuleRequest {
    /**
     * The name of the rule.
     */
    Name: RuleName;
    /**
     * The event bus associated with the rule. If you omit this, the default event bus is used.
     */
    EventBusName?: EventBusName;
  }
  export interface EcsParameters {
    /**
     * The ARN of the task definition to use if the event target is an Amazon ECS task. 
     */
    TaskDefinitionArn: Arn;
    /**
     * The number of tasks to create based on TaskDefinition. The default is 1.
     */
    TaskCount?: LimitMin1;
    /**
     * Specifies the launch type on which your task is running. The launch type that you specify here must match one of the launch type (compatibilities) of the target task. The FARGATE value is supported only in the Regions where AWS Fargate with Amazon ECS is supported. For more information, see AWS Fargate on Amazon ECS in the Amazon Elastic Container Service Developer Guide.
     */
    LaunchType?: LaunchType;
    /**
     * Use this structure if the ECS task uses the awsvpc network mode. This structure specifies the VPC subnets and security groups associated with the task, and whether a public IP address is to be used. This structure is required if LaunchType is FARGATE because the awsvpc mode is required for Fargate tasks. If you specify NetworkConfiguration when the target ECS task does not use the awsvpc network mode, the task fails.
     */
    NetworkConfiguration?: NetworkConfiguration;
    /**
     * Specifies the platform version for the task. Specify only the numeric portion of the platform version, such as 1.1.0. This structure is used only if LaunchType is FARGATE. For more information about valid platform versions, see AWS Fargate Platform Versions in the Amazon Elastic Container Service Developer Guide.
     */
    PlatformVersion?: String;
    /**
     * Specifies an ECS task group for the task. The maximum length is 255 characters.
     */
    Group?: String;
  }
  export interface EnableRuleRequest {
    /**
     * The name of the rule.
     */
    Name: RuleName;
    /**
     * The event bus associated with the rule. If you omit this, the default event bus is used.
     */
    EventBusName?: EventBusName;
  }
  export type ErrorCode = string;
  export type ErrorMessage = string;
  export interface EventBus {
    /**
     * The name of the event bus.
     */
    Name?: String;
    /**
     * The ARN of the event bus.
     */
    Arn?: String;
    /**
     * The permissions policy of the event bus, describing which other AWS accounts can write events to this event bus.
     */
    Policy?: String;
  }
  export type EventBusList = EventBus[];
  export type EventBusName = string;
  export type EventId = string;
  export type EventPattern = string;
  export type EventResource = string;
  export type EventResourceList = EventResource[];
  export interface EventSource {
    /**
     * The ARN of the event source.
     */
    Arn?: String;
    /**
     * The name of the partner that created the event source.
     */
    CreatedBy?: String;
    /**
     * The date and time the event source was created.
     */
    CreationTime?: Timestamp;
    /**
     * The date and time that the event source will expire, if the AWS account doesn't create a matching event bus for it.
     */
    ExpirationTime?: Timestamp;
    /**
     * The name of the event source.
     */
    Name?: String;
    /**
     * The state of the event source. If it is ACTIVE, you have already created a matching event bus for this event source, and that event bus is active. If it is PENDING, either you haven't yet created a matching event bus, or that event bus is deactivated. If it is DELETED, you have created a matching event bus, but the event source has since been deleted.
     */
    State?: EventSourceState;
  }
  export type EventSourceList = EventSource[];
  export type EventSourceName = string;
  export type EventSourceNamePrefix = string;
  export type EventSourceState = "PENDING"|"ACTIVE"|"DELETED"|string;
  export type EventTime = Date;
  export type HeaderKey = string;
  export type HeaderParametersMap = {[key: string]: HeaderValue};
  export type HeaderValue = string;
  export interface HttpParameters {
    /**
     * The path parameter values to be used to populate API Gateway REST API path wildcards ("*").
     */
    PathParameterValues?: PathParameterList;
    /**
     * The headers that need to be sent as part of request invoking the API Gateway REST API.
     */
    HeaderParameters?: HeaderParametersMap;
    /**
     * The query string keys/values that need to be sent as part of request invoking the API Gateway REST API.
     */
    QueryStringParameters?: QueryStringParametersMap;
  }
  export interface InputTransformer {
    /**
     * Map of JSON paths to be extracted from the event. You can then insert these in the template in InputTemplate to produce the output you want to be sent to the target.  InputPathsMap is an array key-value pairs, where each value is a valid JSON path. You can have as many as 10 key-value pairs. You must use JSON dot notation, not bracket notation. The keys cannot start with "AWS." 
     */
    InputPathsMap?: TransformerPaths;
    /**
     * Input template where you specify placeholders that will be filled with the values of the keys from InputPathsMap to customize the data sent to the target. Enclose each InputPathsMaps value in brackets: &lt;value&gt; The InputTemplate must be valid JSON. If InputTemplate is a JSON object (surrounded by curly braces), the following restrictions apply:   The placeholder cannot be used as an object key.   Object values cannot include quote marks.   The following example shows the syntax for using InputPathsMap and InputTemplate.   "InputTransformer":   {   "InputPathsMap": {"instance": "$.detail.instance","status": "$.detail.status"},   "InputTemplate": "&lt;instance&gt; is in state &lt;status&gt;"   }  To have the InputTemplate include quote marks within a JSON string, escape each quote marks with a slash, as in the following example:   "InputTransformer":   {   "InputPathsMap": {"instance": "$.detail.instance","status": "$.detail.status"},   "InputTemplate": "&lt;instance&gt; is in state \"&lt;status&gt;\""   } 
     */
    InputTemplate: TransformerInput;
  }
  export type InputTransformerPathKey = string;
  export type Integer = number;
  export interface KinesisParameters {
    /**
     * The JSON path to be extracted from the event and used as the partition key. For more information, see Amazon Kinesis Streams Key Concepts in the Amazon Kinesis Streams Developer Guide.
     */
    PartitionKeyPath: TargetPartitionKeyPath;
  }
  export type LaunchType = "EC2"|"FARGATE"|string;
  export type LimitMax100 = number;
  export type LimitMin1 = number;
  export interface ListEventBusesRequest {
    /**
     * Specifying this limits the results to only those event buses with names that start with the specified prefix.
     */
    NamePrefix?: EventBusName;
    /**
     * The token returned by a previous call to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * Specifying this limits the number of results returned by this operation. The operation also returns a NextToken which you can use in a subsequent operation to retrieve the next set of results.
     */
    Limit?: LimitMax100;
  }
  export interface ListEventBusesResponse {
    /**
     * This list of event buses.
     */
    EventBuses?: EventBusList;
    /**
     * A token you can use in a subsequent operation to retrieve the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListEventSourcesRequest {
    /**
     * Specifying this limits the results to only those partner event sources with names that start with the specified prefix.
     */
    NamePrefix?: EventSourceNamePrefix;
    /**
     * The token returned by a previous call to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * Specifying this limits the number of results returned by this operation. The operation also returns a NextToken which you can use in a subsequent operation to retrieve the next set of results.
     */
    Limit?: LimitMax100;
  }
  export interface ListEventSourcesResponse {
    /**
     * The list of event sources.
     */
    EventSources?: EventSourceList;
    /**
     * A token you can use in a subsequent operation to retrieve the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListPartnerEventSourceAccountsRequest {
    /**
     * The name of the partner event source to display account information about.
     */
    EventSourceName: EventSourceName;
    /**
     * The token returned by a previous call to this operation. Specifying this retrieves the next set of results.
     */
    NextToken?: NextToken;
    /**
     * Specifying this limits the number of results returned by this operation. The operation also returns a NextToken which you can use in a subsequent operation to retrieve the next set of results.
     */
    Limit?: LimitMax100;
  }
  export interface ListPartnerEventSourceAccountsResponse {
    /**
     * The list of partner event sources returned by the operation.
     */
    PartnerEventSourceAccounts?: PartnerEventSourceAccountList;
    /**
     * A token you can use in a subsequent operation to retrieve the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListPartnerEventSourcesRequest {
    /**
     * If you specify this, the results are limited to only those partner event sources that start with the string you specify.
     */
    NamePrefix: PartnerEventSourceNamePrefix;
    /**
     * The token returned by a previous call to this operation. Specifying this retrieves the next set of results.
     */
    NextToken?: NextToken;
    /**
     * pecifying this limits the number of results returned by this operation. The operation also returns a NextToken which you can use in a subsequent operation to retrieve the next set of results.
     */
    Limit?: LimitMax100;
  }
  export interface ListPartnerEventSourcesResponse {
    /**
     * The list of partner event sources returned by the operation.
     */
    PartnerEventSources?: PartnerEventSourceList;
    /**
     * A token you can use in a subsequent operation to retrieve the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListRuleNamesByTargetRequest {
    /**
     * The Amazon Resource Name (ARN) of the target resource.
     */
    TargetArn: TargetArn;
    /**
     * Limits the results to show only the rules associated with the specified event bus.
     */
    EventBusName?: EventBusName;
    /**
     * The token returned by a previous call to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return.
     */
    Limit?: LimitMax100;
  }
  export interface ListRuleNamesByTargetResponse {
    /**
     * The names of the rules that can invoke the given target.
     */
    RuleNames?: RuleNameList;
    /**
     * Indicates whether there are additional results to retrieve. If there are no more results, the value is null.
     */
    NextToken?: NextToken;
  }
  export interface ListRulesRequest {
    /**
     * The prefix matching the rule name.
     */
    NamePrefix?: RuleName;
    /**
     * Limits the results to show only the rules associated with the specified event bus.
     */
    EventBusName?: EventBusName;
    /**
     * The token returned by a previous call to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return.
     */
    Limit?: LimitMax100;
  }
  export interface ListRulesResponse {
    /**
     * The rules that match the specified criteria.
     */
    Rules?: RuleResponseList;
    /**
     * Indicates whether there are additional results to retrieve. If there are no more results, the value is null.
     */
    NextToken?: NextToken;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The ARN of the EventBridge resource for which you want to view tags.
     */
    ResourceARN: Arn;
  }
  export interface ListTagsForResourceResponse {
    /**
     * The list of tag keys and values associated with the resource you specified
     */
    Tags?: TagList;
  }
  export interface ListTargetsByRuleRequest {
    /**
     * The name of the rule.
     */
    Rule: RuleName;
    /**
     * The event bus associated with the rule. If you omit this, the default event bus is used.
     */
    EventBusName?: EventBusName;
    /**
     * The token returned by a previous call to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return.
     */
    Limit?: LimitMax100;
  }
  export interface ListTargetsByRuleResponse {
    /**
     * The targets assigned to the rule.
     */
    Targets?: TargetList;
    /**
     * Indicates whether there are additional results to retrieve. If there are no more results, the value is null.
     */
    NextToken?: NextToken;
  }
  export type ManagedBy = string;
  export type MessageGroupId = string;
  export interface NetworkConfiguration {
    /**
     * Use this structure to specify the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the awsvpc network mode.
     */
    awsvpcConfiguration?: AwsVpcConfiguration;
  }
  export type NextToken = string;
  export type NonPartnerEventBusName = string;
  export interface PartnerEventSource {
    /**
     * The ARN of the partner event source.
     */
    Arn?: String;
    /**
     * The name of the partner event source.
     */
    Name?: String;
  }
  export interface PartnerEventSourceAccount {
    /**
     * The AWS account ID that the partner event source was offered to.
     */
    Account?: AccountId;
    /**
     * The date and time the event source was created.
     */
    CreationTime?: Timestamp;
    /**
     * The date and time that the event source will expire, if the AWS account doesn't create a matching event bus for it.
     */
    ExpirationTime?: Timestamp;
    /**
     * The state of the event source. If it is ACTIVE, you have already created a matching event bus for this event source, and that event bus is active. If it is PENDING, either you haven't yet created a matching event bus, or that event bus is deactivated. If it is DELETED, you have created a matching event bus, but the event source has since been deleted.
     */
    State?: EventSourceState;
  }
  export type PartnerEventSourceAccountList = PartnerEventSourceAccount[];
  export type PartnerEventSourceList = PartnerEventSource[];
  export type PartnerEventSourceNamePrefix = string;
  export type PathParameter = string;
  export type PathParameterList = PathParameter[];
  export type Principal = string;
  export interface PutEventsRequest {
    /**
     * The entry that defines an event in your system. You can specify several parameters for the entry such as the source and type of the event, resources associated with the event, and so on.
     */
    Entries: PutEventsRequestEntryList;
  }
  export interface PutEventsRequestEntry {
    /**
     * The time stamp of the event, per RFC3339. If no time stamp is provided, the time stamp of the PutEvents call is used.
     */
    Time?: EventTime;
    /**
     * The source of the event.
     */
    Source?: String;
    /**
     * AWS resources, identified by Amazon Resource Name (ARN), which the event primarily concerns. Any number, including zero, may be present.
     */
    Resources?: EventResourceList;
    /**
     * Free-form string used to decide what fields to expect in the event detail.
     */
    DetailType?: String;
    /**
     * A valid JSON string. There is no other schema imposed. The JSON string may contain fields and nested subobjects.
     */
    Detail?: String;
    /**
     * The event bus that will receive the event. Only the rules that are associated with this event bus will be able to match the event.
     */
    EventBusName?: NonPartnerEventBusName;
  }
  export type PutEventsRequestEntryList = PutEventsRequestEntry[];
  export interface PutEventsResponse {
    /**
     * The number of failed entries.
     */
    FailedEntryCount?: Integer;
    /**
     * The successfully and unsuccessfully ingested events results. If the ingestion was successful, the entry has the event ID in it. Otherwise, you can use the error code and error message to identify the problem with the entry.
     */
    Entries?: PutEventsResultEntryList;
  }
  export interface PutEventsResultEntry {
    /**
     * The ID of the event.
     */
    EventId?: EventId;
    /**
     * The error code that indicates why the event submission failed.
     */
    ErrorCode?: ErrorCode;
    /**
     * The error message that explains why the event submission failed.
     */
    ErrorMessage?: ErrorMessage;
  }
  export type PutEventsResultEntryList = PutEventsResultEntry[];
  export interface PutPartnerEventsRequest {
    /**
     * The list of events to write to the event bus.
     */
    Entries: PutPartnerEventsRequestEntryList;
  }
  export interface PutPartnerEventsRequestEntry {
    /**
     * The date and time of the event.
     */
    Time?: EventTime;
    /**
     * The event source that is generating the evntry.
     */
    Source?: EventSourceName;
    /**
     * AWS resources, identified by Amazon Resource Name (ARN), which the event primarily concerns. Any number, including zero, may be present.
     */
    Resources?: EventResourceList;
    /**
     * A free-form string used to decide what fields to expect in the event detail.
     */
    DetailType?: String;
    /**
     * A valid JSON string. There is no other schema imposed. The JSON string may contain fields and nested subobjects.
     */
    Detail?: String;
  }
  export type PutPartnerEventsRequestEntryList = PutPartnerEventsRequestEntry[];
  export interface PutPartnerEventsResponse {
    /**
     * The number of events from this operation that could not be written to the partner event bus.
     */
    FailedEntryCount?: Integer;
    /**
     * The list of events from this operation that were successfully written to the partner event bus.
     */
    Entries?: PutPartnerEventsResultEntryList;
  }
  export interface PutPartnerEventsResultEntry {
    /**
     * The ID of the event.
     */
    EventId?: EventId;
    /**
     * The error code that indicates why the event submission failed.
     */
    ErrorCode?: ErrorCode;
    /**
     * The error message that explains why the event submission failed.
     */
    ErrorMessage?: ErrorMessage;
  }
  export type PutPartnerEventsResultEntryList = PutPartnerEventsResultEntry[];
  export interface PutPermissionRequest {
    /**
     * The event bus associated with the rule. If you omit this, the default event bus is used.
     */
    EventBusName?: NonPartnerEventBusName;
    /**
     * The action that you are enabling the other account to perform. Currently, this must be events:PutEvents.
     */
    Action: Action;
    /**
     * The 12-digit AWS account ID that you are permitting to put events to your default event bus. Specify "*" to permit any account to put events to your default event bus. If you specify "*" without specifying Condition, avoid creating rules that may match undesirable events. To create more secure rules, make sure that the event pattern for each rule contains an account field with a specific account ID from which to receive events. Rules with an account field do not match any events sent from other accounts.
     */
    Principal: Principal;
    /**
     * An identifier string for the external account that you are granting permissions to. If you later want to revoke the permission for this external account, specify this StatementId when you run RemovePermission.
     */
    StatementId: StatementId;
    /**
     * This parameter enables you to limit the permission to accounts that fulfill a certain condition, such as being a member of a certain AWS organization. For more information about AWS Organizations, see What Is AWS Organizations in the AWS Organizations User Guide. If you specify Condition with an AWS organization ID, and specify "*" as the value for Principal, you grant permission to all the accounts in the named organization. The Condition is a JSON string which must contain Type, Key, and Value fields.
     */
    Condition?: Condition;
  }
  export interface PutRuleRequest {
    /**
     * The name of the rule that you are creating or updating.
     */
    Name: RuleName;
    /**
     * The scheduling expression. For example, "cron(0 20 * * ? *)" or "rate(5 minutes)".
     */
    ScheduleExpression?: ScheduleExpression;
    /**
     * The event pattern. For more information, see Events and Event Patterns in the Amazon EventBridge User Guide.
     */
    EventPattern?: EventPattern;
    /**
     * Indicates whether the rule is enabled or disabled.
     */
    State?: RuleState;
    /**
     * A description of the rule.
     */
    Description?: RuleDescription;
    /**
     * The Amazon Resource Name (ARN) of the IAM role associated with the rule.
     */
    RoleArn?: RoleArn;
    /**
     * The list of key-value pairs to associate with the rule.
     */
    Tags?: TagList;
    /**
     * The event bus to associate with this rule. If you omit this, the default event bus is used.
     */
    EventBusName?: EventBusName;
  }
  export interface PutRuleResponse {
    /**
     * The Amazon Resource Name (ARN) of the rule.
     */
    RuleArn?: RuleArn;
  }
  export interface PutTargetsRequest {
    /**
     * The name of the rule.
     */
    Rule: RuleName;
    /**
     * The name of the event bus associated with the rule. If you omit this, the default event bus is used.
     */
    EventBusName?: EventBusName;
    /**
     * The targets to update or add to the rule.
     */
    Targets: TargetList;
  }
  export interface PutTargetsResponse {
    /**
     * The number of failed entries.
     */
    FailedEntryCount?: Integer;
    /**
     * The failed target entries.
     */
    FailedEntries?: PutTargetsResultEntryList;
  }
  export interface PutTargetsResultEntry {
    /**
     * The ID of the target.
     */
    TargetId?: TargetId;
    /**
     * The error code that indicates why the target addition failed. If the value is ConcurrentModificationException, too many requests were made at the same time.
     */
    ErrorCode?: ErrorCode;
    /**
     * The error message that explains why the target addition failed.
     */
    ErrorMessage?: ErrorMessage;
  }
  export type PutTargetsResultEntryList = PutTargetsResultEntry[];
  export type QueryStringKey = string;
  export type QueryStringParametersMap = {[key: string]: QueryStringValue};
  export type QueryStringValue = string;
  export interface RemovePermissionRequest {
    /**
     * The statement ID corresponding to the account that is no longer allowed to put events to the default event bus.
     */
    StatementId: StatementId;
    /**
     * The name of the event bus to revoke permissions for. If you omit this, the default event bus is used.
     */
    EventBusName?: NonPartnerEventBusName;
  }
  export interface RemoveTargetsRequest {
    /**
     * The name of the rule.
     */
    Rule: RuleName;
    /**
     * The name of the event bus associated with the rule.
     */
    EventBusName?: EventBusName;
    /**
     * The IDs of the targets to remove from the rule.
     */
    Ids: TargetIdList;
    /**
     * If this is a managed rule, created by an AWS service on your behalf, you must specify Force as True to remove targets. This parameter is ignored for rules that are not managed rules. You can check whether a rule is a managed rule by using DescribeRule or ListRules and checking the ManagedBy field of the response.
     */
    Force?: Boolean;
  }
  export interface RemoveTargetsResponse {
    /**
     * The number of failed entries.
     */
    FailedEntryCount?: Integer;
    /**
     * The failed target entries.
     */
    FailedEntries?: RemoveTargetsResultEntryList;
  }
  export interface RemoveTargetsResultEntry {
    /**
     * The ID of the target.
     */
    TargetId?: TargetId;
    /**
     * The error code that indicates why the target removal failed. If the value is ConcurrentModificationException, too many requests were made at the same time.
     */
    ErrorCode?: ErrorCode;
    /**
     * The error message that explains why the target removal failed.
     */
    ErrorMessage?: ErrorMessage;
  }
  export type RemoveTargetsResultEntryList = RemoveTargetsResultEntry[];
  export type RoleArn = string;
  export interface Rule {
    /**
     * The name of the rule.
     */
    Name?: RuleName;
    /**
     * The Amazon Resource Name (ARN) of the rule.
     */
    Arn?: RuleArn;
    /**
     * The event pattern of the rule. For more information, see Events and Event Patterns in the Amazon EventBridge User Guide.
     */
    EventPattern?: EventPattern;
    /**
     * The state of the rule.
     */
    State?: RuleState;
    /**
     * The description of the rule.
     */
    Description?: RuleDescription;
    /**
     * The scheduling expression. For example, "cron(0 20 * * ? *)", "rate(5 minutes)".
     */
    ScheduleExpression?: ScheduleExpression;
    /**
     * The Amazon Resource Name (ARN) of the role that is used for target invocation.
     */
    RoleArn?: RoleArn;
    /**
     * If the rule was created on behalf of your account by an AWS service, this field displays the principal name of the service that created the rule.
     */
    ManagedBy?: ManagedBy;
    /**
     * The event bus associated with the rule.
     */
    EventBusName?: EventBusName;
  }
  export type RuleArn = string;
  export type RuleDescription = string;
  export type RuleName = string;
  export type RuleNameList = RuleName[];
  export type RuleResponseList = Rule[];
  export type RuleState = "ENABLED"|"DISABLED"|string;
  export interface RunCommandParameters {
    /**
     * Currently, we support including only one RunCommandTarget block, which specifies either an array of InstanceIds or a tag.
     */
    RunCommandTargets: RunCommandTargets;
  }
  export interface RunCommandTarget {
    /**
     * Can be either tag: tag-key or InstanceIds.
     */
    Key: RunCommandTargetKey;
    /**
     * If Key is tag: tag-key, Values is a list of tag values. If Key is InstanceIds, Values is a list of Amazon EC2 instance IDs.
     */
    Values: RunCommandTargetValues;
  }
  export type RunCommandTargetKey = string;
  export type RunCommandTargetValue = string;
  export type RunCommandTargetValues = RunCommandTargetValue[];
  export type RunCommandTargets = RunCommandTarget[];
  export type ScheduleExpression = string;
  export interface SqsParameters {
    /**
     * The FIFO message group ID to use as the target.
     */
    MessageGroupId?: MessageGroupId;
  }
  export type StatementId = string;
  export type String = string;
  export type StringList = String[];
  export interface Tag {
    /**
     * A string you can use to assign a value. The combination of tag keys and values can help you organize and categorize your resources.
     */
    Key: TagKey;
    /**
     * The value for the specified tag key.
     */
    Value: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export interface TagResourceRequest {
    /**
     * The ARN of the EventBridge resource that you're adding tags to.
     */
    ResourceARN: Arn;
    /**
     * The list of key-value pairs to associate with the resource.
     */
    Tags: TagList;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export interface Target {
    /**
     * The ID of the target.
     */
    Id: TargetId;
    /**
     * The Amazon Resource Name (ARN) of the target.
     */
    Arn: TargetArn;
    /**
     * The Amazon Resource Name (ARN) of the IAM role to be used for this target when the rule is triggered. If one rule triggers multiple targets, you can use a different IAM role for each target.
     */
    RoleArn?: RoleArn;
    /**
     * Valid JSON text passed to the target. In this case, nothing from the event itself is passed to the target. For more information, see The JavaScript Object Notation (JSON) Data Interchange Format.
     */
    Input?: TargetInput;
    /**
     * The value of the JSONPath that is used for extracting part of the matched event when passing it to the target. You must use JSON dot notation, not bracket notation. For more information about JSON paths, see JSONPath.
     */
    InputPath?: TargetInputPath;
    /**
     * Settings to enable you to provide custom input to a target based on certain event data. You can extract one or more key-value pairs from the event and then use that data to send customized input to the target.
     */
    InputTransformer?: InputTransformer;
    /**
     * The custom parameter you can use to control the shard assignment, when the target is a Kinesis data stream. If you do not include this parameter, the default is to use the eventId as the partition key.
     */
    KinesisParameters?: KinesisParameters;
    /**
     * Parameters used when you are using the rule to invoke Amazon EC2 Run Command.
     */
    RunCommandParameters?: RunCommandParameters;
    /**
     * Contains the Amazon ECS task definition and task count to be used, if the event target is an Amazon ECS task. For more information about Amazon ECS tasks, see Task Definitions  in the Amazon EC2 Container Service Developer Guide.
     */
    EcsParameters?: EcsParameters;
    /**
     * If the event target is an AWS Batch job, this contains the job definition, job name, and other parameters. For more information, see Jobs in the AWS Batch User Guide.
     */
    BatchParameters?: BatchParameters;
    /**
     * Contains the message group ID to use when the target is a FIFO queue. If you specify an SQS FIFO queue as a target, the queue must have content-based deduplication enabled.
     */
    SqsParameters?: SqsParameters;
    /**
     * Contains the HTTP parameters to use when the target is a API Gateway REST endpoint. If you specify an API Gateway REST API as a target, you can use this parameter to specify headers, path parameter, query string keys/values as part of your target invoking request.
     */
    HttpParameters?: HttpParameters;
  }
  export type TargetArn = string;
  export type TargetId = string;
  export type TargetIdList = TargetId[];
  export type TargetInput = string;
  export type TargetInputPath = string;
  export type TargetList = Target[];
  export type TargetPartitionKeyPath = string;
  export interface TestEventPatternRequest {
    /**
     * The event pattern. For more information, see Events and Event Patterns in the Amazon EventBridge User Guide.
     */
    EventPattern: EventPattern;
    /**
     * The event, in JSON format, to test against the event pattern.
     */
    Event: String;
  }
  export interface TestEventPatternResponse {
    /**
     * Indicates whether the event matches the event pattern.
     */
    Result?: Boolean;
  }
  export type Timestamp = Date;
  export type TransformerInput = string;
  export type TransformerPaths = {[key: string]: TargetInputPath};
  export interface UntagResourceRequest {
    /**
     * The ARN of the EventBridge resource from which you are removing tags.
     */
    ResourceARN: Arn;
    /**
     * The list of tag keys to remove from the resource.
     */
    TagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2015-10-07"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the EventBridge client.
   */
  export import Types = EventBridge;
}
export = EventBridge;
