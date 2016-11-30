import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class CloudWatchEvents extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: CloudWatchEvents.Types.ClientConfiguration)
  config: Config & CloudWatchEvents.Types.ClientConfiguration;
  /**
   * Deletes a rule. You must remove all targets from a rule using RemoveTargets before you can delete the rule.  Note: When you delete a rule, incoming events might still continue to match to the deleted rule. Please allow a short period of time for changes to take effect. 
   */
  deleteRule(params: CloudWatchEvents.Types.DeleteRuleRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a rule. You must remove all targets from a rule using RemoveTargets before you can delete the rule.  Note: When you delete a rule, incoming events might still continue to match to the deleted rule. Please allow a short period of time for changes to take effect. 
   */
  deleteRule(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Describes the details of the specified rule.
   */
  describeRule(params: CloudWatchEvents.Types.DescribeRuleRequest, callback?: (err: AWSError, data: CloudWatchEvents.Types.DescribeRuleResponse) => void): Request<CloudWatchEvents.Types.DescribeRuleResponse, AWSError>;
  /**
   * Describes the details of the specified rule.
   */
  describeRule(callback?: (err: AWSError, data: CloudWatchEvents.Types.DescribeRuleResponse) => void): Request<CloudWatchEvents.Types.DescribeRuleResponse, AWSError>;
  /**
   * Disables a rule. A disabled rule won't match any events, and won't self-trigger if it has a schedule expression.  Note: When you disable a rule, incoming events might still continue to match to the disabled rule. Please allow a short period of time for changes to take effect. 
   */
  disableRule(params: CloudWatchEvents.Types.DisableRuleRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disables a rule. A disabled rule won't match any events, and won't self-trigger if it has a schedule expression.  Note: When you disable a rule, incoming events might still continue to match to the disabled rule. Please allow a short period of time for changes to take effect. 
   */
  disableRule(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Enables a rule. If the rule does not exist, the operation fails.  Note: When you enable a rule, incoming events might not immediately start matching to a newly enabled rule. Please allow a short period of time for changes to take effect. 
   */
  enableRule(params: CloudWatchEvents.Types.EnableRuleRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Enables a rule. If the rule does not exist, the operation fails.  Note: When you enable a rule, incoming events might not immediately start matching to a newly enabled rule. Please allow a short period of time for changes to take effect. 
   */
  enableRule(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Lists the names of the rules that the given target is put to. You can see which of the rules in Amazon CloudWatch Events can invoke a specific target in your account. If you have more rules in your account than the given limit, the results will be paginated. In that case, use the next token returned in the response and repeat ListRulesByTarget until the NextToken in the response is returned as null.
   */
  listRuleNamesByTarget(params: CloudWatchEvents.Types.ListRuleNamesByTargetRequest, callback?: (err: AWSError, data: CloudWatchEvents.Types.ListRuleNamesByTargetResponse) => void): Request<CloudWatchEvents.Types.ListRuleNamesByTargetResponse, AWSError>;
  /**
   * Lists the names of the rules that the given target is put to. You can see which of the rules in Amazon CloudWatch Events can invoke a specific target in your account. If you have more rules in your account than the given limit, the results will be paginated. In that case, use the next token returned in the response and repeat ListRulesByTarget until the NextToken in the response is returned as null.
   */
  listRuleNamesByTarget(callback?: (err: AWSError, data: CloudWatchEvents.Types.ListRuleNamesByTargetResponse) => void): Request<CloudWatchEvents.Types.ListRuleNamesByTargetResponse, AWSError>;
  /**
   * Lists the Amazon CloudWatch Events rules in your account. You can either list all the rules or you can provide a prefix to match to the rule names. If you have more rules in your account than the given limit, the results will be paginated. In that case, use the next token returned in the response and repeat ListRules until the NextToken in the response is returned as null.
   */
  listRules(params: CloudWatchEvents.Types.ListRulesRequest, callback?: (err: AWSError, data: CloudWatchEvents.Types.ListRulesResponse) => void): Request<CloudWatchEvents.Types.ListRulesResponse, AWSError>;
  /**
   * Lists the Amazon CloudWatch Events rules in your account. You can either list all the rules or you can provide a prefix to match to the rule names. If you have more rules in your account than the given limit, the results will be paginated. In that case, use the next token returned in the response and repeat ListRules until the NextToken in the response is returned as null.
   */
  listRules(callback?: (err: AWSError, data: CloudWatchEvents.Types.ListRulesResponse) => void): Request<CloudWatchEvents.Types.ListRulesResponse, AWSError>;
  /**
   * Lists of targets assigned to the rule.
   */
  listTargetsByRule(params: CloudWatchEvents.Types.ListTargetsByRuleRequest, callback?: (err: AWSError, data: CloudWatchEvents.Types.ListTargetsByRuleResponse) => void): Request<CloudWatchEvents.Types.ListTargetsByRuleResponse, AWSError>;
  /**
   * Lists of targets assigned to the rule.
   */
  listTargetsByRule(callback?: (err: AWSError, data: CloudWatchEvents.Types.ListTargetsByRuleResponse) => void): Request<CloudWatchEvents.Types.ListTargetsByRuleResponse, AWSError>;
  /**
   * Sends custom events to Amazon CloudWatch Events so that they can be matched to rules.
   */
  putEvents(params: CloudWatchEvents.Types.PutEventsRequest, callback?: (err: AWSError, data: CloudWatchEvents.Types.PutEventsResponse) => void): Request<CloudWatchEvents.Types.PutEventsResponse, AWSError>;
  /**
   * Sends custom events to Amazon CloudWatch Events so that they can be matched to rules.
   */
  putEvents(callback?: (err: AWSError, data: CloudWatchEvents.Types.PutEventsResponse) => void): Request<CloudWatchEvents.Types.PutEventsResponse, AWSError>;
  /**
   * Creates or updates a rule. Rules are enabled by default, or based on value of the State parameter. You can disable a rule using DisableRule.  Note: When you create or update a rule, incoming events might not immediately start matching to new or updated rules. Please allow a short period of time for changes to take effect. A rule must contain at least an EventPattern or ScheduleExpression. Rules with EventPatterns are triggered when a matching event is observed. Rules with ScheduleExpressions self-trigger based on the given schedule. A rule can have both an EventPattern and a ScheduleExpression, in which case the rule will trigger on matching events as well as on a schedule.  Note: Most services in AWS treat : or / as the same character in Amazon Resource Names (ARNs). However, CloudWatch Events uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match. 
   */
  putRule(params: CloudWatchEvents.Types.PutRuleRequest, callback?: (err: AWSError, data: CloudWatchEvents.Types.PutRuleResponse) => void): Request<CloudWatchEvents.Types.PutRuleResponse, AWSError>;
  /**
   * Creates or updates a rule. Rules are enabled by default, or based on value of the State parameter. You can disable a rule using DisableRule.  Note: When you create or update a rule, incoming events might not immediately start matching to new or updated rules. Please allow a short period of time for changes to take effect. A rule must contain at least an EventPattern or ScheduleExpression. Rules with EventPatterns are triggered when a matching event is observed. Rules with ScheduleExpressions self-trigger based on the given schedule. A rule can have both an EventPattern and a ScheduleExpression, in which case the rule will trigger on matching events as well as on a schedule.  Note: Most services in AWS treat : or / as the same character in Amazon Resource Names (ARNs). However, CloudWatch Events uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match. 
   */
  putRule(callback?: (err: AWSError, data: CloudWatchEvents.Types.PutRuleResponse) => void): Request<CloudWatchEvents.Types.PutRuleResponse, AWSError>;
  /**
   * Adds target(s) to a rule. Targets are the resources that can be invoked when a rule is triggered. For example, AWS Lambda functions, Amazon Kinesis streams, and built-in targets. Updates the target(s) if they are already associated with the role. In other words, if there is already a target with the given target ID, then the target associated with that ID is updated. In order to be able to make API calls against the resources you own, Amazon CloudWatch Events needs the appropriate permissions. For AWS Lambda and Amazon SNS resources, CloudWatch Events relies on resource-based policies. For Amazon Kinesis streams, CloudWatch Events relies on IAM roles. For more information, see Permissions for Sending Events to Targets in the Amazon CloudWatch Developer Guide. Input and InputPath are mutually-exclusive and optional parameters of a target. When a rule is triggered due to a matched event, if for a target:  Neither Input nor InputPath is specified, then the entire event is passed to the target in JSON form.  InputPath is specified in the form of JSONPath (e.g. $.detail), then only the part of the event specified in the path is passed to the target (e.g. only the detail part of the event is passed).   Input is specified in the form of a valid JSON, then the matched event is overridden with this constant.   Note: When you add targets to a rule, when the associated rule triggers, new or updated targets might not be immediately invoked. Please allow a short period of time for changes to take effect. 
   */
  putTargets(params: CloudWatchEvents.Types.PutTargetsRequest, callback?: (err: AWSError, data: CloudWatchEvents.Types.PutTargetsResponse) => void): Request<CloudWatchEvents.Types.PutTargetsResponse, AWSError>;
  /**
   * Adds target(s) to a rule. Targets are the resources that can be invoked when a rule is triggered. For example, AWS Lambda functions, Amazon Kinesis streams, and built-in targets. Updates the target(s) if they are already associated with the role. In other words, if there is already a target with the given target ID, then the target associated with that ID is updated. In order to be able to make API calls against the resources you own, Amazon CloudWatch Events needs the appropriate permissions. For AWS Lambda and Amazon SNS resources, CloudWatch Events relies on resource-based policies. For Amazon Kinesis streams, CloudWatch Events relies on IAM roles. For more information, see Permissions for Sending Events to Targets in the Amazon CloudWatch Developer Guide. Input and InputPath are mutually-exclusive and optional parameters of a target. When a rule is triggered due to a matched event, if for a target:  Neither Input nor InputPath is specified, then the entire event is passed to the target in JSON form.  InputPath is specified in the form of JSONPath (e.g. $.detail), then only the part of the event specified in the path is passed to the target (e.g. only the detail part of the event is passed).   Input is specified in the form of a valid JSON, then the matched event is overridden with this constant.   Note: When you add targets to a rule, when the associated rule triggers, new or updated targets might not be immediately invoked. Please allow a short period of time for changes to take effect. 
   */
  putTargets(callback?: (err: AWSError, data: CloudWatchEvents.Types.PutTargetsResponse) => void): Request<CloudWatchEvents.Types.PutTargetsResponse, AWSError>;
  /**
   * Removes target(s) from a rule so that when the rule is triggered, those targets will no longer be invoked.  Note: When you remove a target, when the associated rule triggers, removed targets might still continue to be invoked. Please allow a short period of time for changes to take effect. 
   */
  removeTargets(params: CloudWatchEvents.Types.RemoveTargetsRequest, callback?: (err: AWSError, data: CloudWatchEvents.Types.RemoveTargetsResponse) => void): Request<CloudWatchEvents.Types.RemoveTargetsResponse, AWSError>;
  /**
   * Removes target(s) from a rule so that when the rule is triggered, those targets will no longer be invoked.  Note: When you remove a target, when the associated rule triggers, removed targets might still continue to be invoked. Please allow a short period of time for changes to take effect. 
   */
  removeTargets(callback?: (err: AWSError, data: CloudWatchEvents.Types.RemoveTargetsResponse) => void): Request<CloudWatchEvents.Types.RemoveTargetsResponse, AWSError>;
  /**
   * Tests whether an event pattern matches the provided event.  Note: Most services in AWS treat : or / as the same character in Amazon Resource Names (ARNs). However, CloudWatch Events uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match. 
   */
  testEventPattern(params: CloudWatchEvents.Types.TestEventPatternRequest, callback?: (err: AWSError, data: CloudWatchEvents.Types.TestEventPatternResponse) => void): Request<CloudWatchEvents.Types.TestEventPatternResponse, AWSError>;
  /**
   * Tests whether an event pattern matches the provided event.  Note: Most services in AWS treat : or / as the same character in Amazon Resource Names (ARNs). However, CloudWatch Events uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match. 
   */
  testEventPattern(callback?: (err: AWSError, data: CloudWatchEvents.Types.TestEventPatternResponse) => void): Request<CloudWatchEvents.Types.TestEventPatternResponse, AWSError>;
}
declare namespace CloudWatchEvents.Types {
  export type Boolean = boolean;
  export interface DeleteRuleRequest {
    /**
     * The name of the rule to be deleted.
     */
    Name: RuleName;
  }
  export interface DescribeRuleRequest {
    /**
     * The name of the rule you want to describe details for.
     */
    Name: RuleName;
  }
  export interface DescribeRuleResponse {
    /**
     * The rule's name.
     */
    Name?: RuleName;
    /**
     * The Amazon Resource Name (ARN) associated with the rule.
     */
    Arn?: RuleArn;
    /**
     * The event pattern.
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
     * The rule's description.
     */
    Description?: RuleDescription;
    /**
     * The Amazon Resource Name (ARN) of the IAM role associated with the rule.
     */
    RoleArn?: RoleArn;
  }
  export interface DisableRuleRequest {
    /**
     * The name of the rule you want to disable.
     */
    Name: RuleName;
  }
  export interface EnableRuleRequest {
    /**
     * The name of the rule that you want to enable.
     */
    Name: RuleName;
  }
  export type ErrorCode = string;
  export type ErrorMessage = string;
  export type EventId = string;
  export type EventPattern = string;
  export type EventResource = string;
  export type EventResourceList = EventResource[];
  export type EventTime = Date;
  export type Integer = number;
  export type LimitMax100 = number;
  export interface ListRuleNamesByTargetRequest {
    /**
     * The Amazon Resource Name (ARN) of the target resource that you want to list the rules for.
     */
    TargetArn: TargetArn;
    /**
     * The token returned by a previous call to indicate that there is more data available.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return.
     */
    Limit?: LimitMax100;
  }
  export interface ListRuleNamesByTargetResponse {
    /**
     * List of rules names that can invoke the given target.
     */
    RuleNames?: RuleNameList;
    /**
     * Indicates that there are additional results to retrieve.
     */
    NextToken?: NextToken;
  }
  export interface ListRulesRequest {
    /**
     * The prefix matching the rule name.
     */
    NamePrefix?: RuleName;
    /**
     * The token returned by a previous call to indicate that there is more data available.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return.
     */
    Limit?: LimitMax100;
  }
  export interface ListRulesResponse {
    /**
     * List of rules matching the specified criteria.
     */
    Rules?: RuleResponseList;
    /**
     * Indicates that there are additional results to retrieve.
     */
    NextToken?: NextToken;
  }
  export interface ListTargetsByRuleRequest {
    /**
     * The name of the rule whose targets you want to list.
     */
    Rule: RuleName;
    /**
     * The token returned by a previous call to indicate that there is more data available.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return.
     */
    Limit?: LimitMax100;
  }
  export interface ListTargetsByRuleResponse {
    /**
     * Lists the targets assigned to the rule.
     */
    Targets?: TargetList;
    /**
     * Indicates that there are additional results to retrieve.
     */
    NextToken?: NextToken;
  }
  export type NextToken = string;
  export interface PutEventsRequest {
    /**
     * The entry that defines an event in your system. You can specify several parameters for the entry such as the source and type of the event, resources associated with the event, and so on.
     */
    Entries: PutEventsRequestEntryList;
  }
  export interface PutEventsRequestEntry {
    /**
     * Timestamp of event, per RFC3339. If no timestamp is provided, the timestamp of the PutEvents call will be used.
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
     * In the JSON sense, an object containing fields, which may also contain nested sub-objects. No constraints are imposed on its contents.
     */
    Detail?: String;
  }
  export type PutEventsRequestEntryList = PutEventsRequestEntry[];
  export interface PutEventsResponse {
    /**
     * The number of failed entries.
     */
    FailedEntryCount?: Integer;
    /**
     * A list of successfully and unsuccessfully ingested events results. If the ingestion was successful, the entry will have the event ID in it. If not, then the ErrorCode and ErrorMessage can be used to identify the problem with the entry.
     */
    Entries?: PutEventsResultEntryList;
  }
  export interface PutEventsResultEntry {
    /**
     * The ID of the event submitted to Amazon CloudWatch Events.
     */
    EventId?: EventId;
    /**
     * The error code representing why the event submission failed on this entry.
     */
    ErrorCode?: ErrorCode;
    /**
     * The error message explaining why the event submission failed on this entry.
     */
    ErrorMessage?: ErrorMessage;
  }
  export type PutEventsResultEntryList = PutEventsResultEntry[];
  export interface PutRuleRequest {
    /**
     * The name of the rule that you are creating or updating.
     */
    Name: RuleName;
    /**
     * The scheduling expression. For example, "cron(0 20 * * ? *)", "rate(5 minutes)".
     */
    ScheduleExpression?: ScheduleExpression;
    /**
     * The event pattern.
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
  }
  export interface PutRuleResponse {
    /**
     * The Amazon Resource Name (ARN) that identifies the rule.
     */
    RuleArn?: RuleArn;
  }
  export interface PutTargetsRequest {
    /**
     * The name of the rule you want to add targets to.
     */
    Rule: RuleName;
    /**
     * List of targets you want to update or add to the rule.
     */
    Targets: TargetList;
  }
  export interface PutTargetsResponse {
    /**
     * The number of failed entries.
     */
    FailedEntryCount?: Integer;
    /**
     * An array of failed target entries.
     */
    FailedEntries?: PutTargetsResultEntryList;
  }
  export interface PutTargetsResultEntry {
    /**
     * The ID of the target submitted to Amazon CloudWatch Events.
     */
    TargetId?: TargetId;
    /**
     * The error code representing why the target submission failed on this entry.
     */
    ErrorCode?: ErrorCode;
    /**
     * The error message explaining why the target submission failed on this entry.
     */
    ErrorMessage?: ErrorMessage;
  }
  export type PutTargetsResultEntryList = PutTargetsResultEntry[];
  export interface RemoveTargetsRequest {
    /**
     * The name of the rule you want to remove targets from.
     */
    Rule: RuleName;
    /**
     * The list of target IDs to remove from the rule.
     */
    Ids: TargetIdList;
  }
  export interface RemoveTargetsResponse {
    /**
     * The number of failed entries.
     */
    FailedEntryCount?: Integer;
    /**
     * An array of failed target entries.
     */
    FailedEntries?: RemoveTargetsResultEntryList;
  }
  export interface RemoveTargetsResultEntry {
    /**
     * The ID of the target requested to be removed by Amazon CloudWatch Events.
     */
    TargetId?: TargetId;
    /**
     * The error code representing why the target removal failed on this entry.
     */
    ErrorCode?: ErrorCode;
    /**
     * The error message explaining why the target removal failed on this entry.
     */
    ErrorMessage?: ErrorMessage;
  }
  export type RemoveTargetsResultEntryList = RemoveTargetsResultEntry[];
  export type RoleArn = string;
  export interface Rule {
    /**
     * The rule's name.
     */
    Name?: RuleName;
    /**
     * The Amazon Resource Name (ARN) of the rule.
     */
    Arn?: RuleArn;
    /**
     * The event pattern of the rule.
     */
    EventPattern?: EventPattern;
    /**
     * The rule's state.
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
     * The Amazon Resource Name (ARN) associated with the role that is used for target invocation.
     */
    RoleArn?: RoleArn;
  }
  export type RuleArn = string;
  export type RuleDescription = string;
  export type RuleName = string;
  export type RuleNameList = RuleName[];
  export type RuleResponseList = Rule[];
  export type RuleState = "ENABLED"|"DISABLED"|string;
  export type ScheduleExpression = string;
  export type String = string;
  export interface Target {
    /**
     * The unique target assignment ID.
     */
    Id: TargetId;
    /**
     * The Amazon Resource Name (ARN) associated of the target.
     */
    Arn: TargetArn;
    /**
     * Valid JSON text passed to the target. For more information about JSON text, see The JavaScript Object Notation (JSON) Data Interchange Format.
     */
    Input?: TargetInput;
    /**
     * The value of the JSONPath that is used for extracting part of the matched event when passing it to the target. For more information about JSON paths, see JSONPath.
     */
    InputPath?: TargetInputPath;
  }
  export type TargetArn = string;
  export type TargetId = string;
  export type TargetIdList = TargetId[];
  export type TargetInput = string;
  export type TargetInputPath = string;
  export type TargetList = Target[];
  export interface TestEventPatternRequest {
    /**
     * The event pattern you want to test.
     */
    EventPattern: EventPattern;
    /**
     * The event in the JSON format to test against the event pattern.
     */
    Event: String;
  }
  export interface TestEventPatternResponse {
    /**
     * Indicates whether the event matches the event pattern.
     */
    Result?: Boolean;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2014-02-03"|"2015-10-07"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
}
export = CloudWatchEvents;
