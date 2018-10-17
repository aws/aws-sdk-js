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
   * Deletes the specified rule. Before you can delete the rule, you must remove all targets, using RemoveTargets. When you delete a rule, incoming events might continue to match to the deleted rule. Allow a short period of time for changes to take effect.
   */
  deleteRule(params: CloudWatchEvents.Types.DeleteRuleRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified rule. Before you can delete the rule, you must remove all targets, using RemoveTargets. When you delete a rule, incoming events might continue to match to the deleted rule. Allow a short period of time for changes to take effect.
   */
  deleteRule(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Displays the external AWS accounts that are permitted to write events to your account using your account's event bus, and the associated policy. To enable your account to receive events from other accounts, use PutPermission.
   */
  describeEventBus(params: CloudWatchEvents.Types.DescribeEventBusRequest, callback?: (err: AWSError, data: CloudWatchEvents.Types.DescribeEventBusResponse) => void): Request<CloudWatchEvents.Types.DescribeEventBusResponse, AWSError>;
  /**
   * Displays the external AWS accounts that are permitted to write events to your account using your account's event bus, and the associated policy. To enable your account to receive events from other accounts, use PutPermission.
   */
  describeEventBus(callback?: (err: AWSError, data: CloudWatchEvents.Types.DescribeEventBusResponse) => void): Request<CloudWatchEvents.Types.DescribeEventBusResponse, AWSError>;
  /**
   * Describes the specified rule. DescribeRule does not list the targets of a rule. To see the targets associated with a rule, use ListTargetsByRule.
   */
  describeRule(params: CloudWatchEvents.Types.DescribeRuleRequest, callback?: (err: AWSError, data: CloudWatchEvents.Types.DescribeRuleResponse) => void): Request<CloudWatchEvents.Types.DescribeRuleResponse, AWSError>;
  /**
   * Describes the specified rule. DescribeRule does not list the targets of a rule. To see the targets associated with a rule, use ListTargetsByRule.
   */
  describeRule(callback?: (err: AWSError, data: CloudWatchEvents.Types.DescribeRuleResponse) => void): Request<CloudWatchEvents.Types.DescribeRuleResponse, AWSError>;
  /**
   * Disables the specified rule. A disabled rule won't match any events, and won't self-trigger if it has a schedule expression. When you disable a rule, incoming events might continue to match to the disabled rule. Allow a short period of time for changes to take effect.
   */
  disableRule(params: CloudWatchEvents.Types.DisableRuleRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disables the specified rule. A disabled rule won't match any events, and won't self-trigger if it has a schedule expression. When you disable a rule, incoming events might continue to match to the disabled rule. Allow a short period of time for changes to take effect.
   */
  disableRule(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Enables the specified rule. If the rule does not exist, the operation fails. When you enable a rule, incoming events might not immediately start matching to a newly enabled rule. Allow a short period of time for changes to take effect.
   */
  enableRule(params: CloudWatchEvents.Types.EnableRuleRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Enables the specified rule. If the rule does not exist, the operation fails. When you enable a rule, incoming events might not immediately start matching to a newly enabled rule. Allow a short period of time for changes to take effect.
   */
  enableRule(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Lists the rules for the specified target. You can see which of the rules in Amazon CloudWatch Events can invoke a specific target in your account.
   */
  listRuleNamesByTarget(params: CloudWatchEvents.Types.ListRuleNamesByTargetRequest, callback?: (err: AWSError, data: CloudWatchEvents.Types.ListRuleNamesByTargetResponse) => void): Request<CloudWatchEvents.Types.ListRuleNamesByTargetResponse, AWSError>;
  /**
   * Lists the rules for the specified target. You can see which of the rules in Amazon CloudWatch Events can invoke a specific target in your account.
   */
  listRuleNamesByTarget(callback?: (err: AWSError, data: CloudWatchEvents.Types.ListRuleNamesByTargetResponse) => void): Request<CloudWatchEvents.Types.ListRuleNamesByTargetResponse, AWSError>;
  /**
   * Lists your Amazon CloudWatch Events rules. You can either list all the rules or you can provide a prefix to match to the rule names. ListRules does not list the targets of a rule. To see the targets associated with a rule, use ListTargetsByRule.
   */
  listRules(params: CloudWatchEvents.Types.ListRulesRequest, callback?: (err: AWSError, data: CloudWatchEvents.Types.ListRulesResponse) => void): Request<CloudWatchEvents.Types.ListRulesResponse, AWSError>;
  /**
   * Lists your Amazon CloudWatch Events rules. You can either list all the rules or you can provide a prefix to match to the rule names. ListRules does not list the targets of a rule. To see the targets associated with a rule, use ListTargetsByRule.
   */
  listRules(callback?: (err: AWSError, data: CloudWatchEvents.Types.ListRulesResponse) => void): Request<CloudWatchEvents.Types.ListRulesResponse, AWSError>;
  /**
   * Lists the targets assigned to the specified rule.
   */
  listTargetsByRule(params: CloudWatchEvents.Types.ListTargetsByRuleRequest, callback?: (err: AWSError, data: CloudWatchEvents.Types.ListTargetsByRuleResponse) => void): Request<CloudWatchEvents.Types.ListTargetsByRuleResponse, AWSError>;
  /**
   * Lists the targets assigned to the specified rule.
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
   * Running PutPermission permits the specified AWS account or AWS organization to put events to your account's default event bus. CloudWatch Events rules in your account are triggered by these events arriving to your default event bus.  For another account to send events to your account, that external account must have a CloudWatch Events rule with your account's default event bus as a target. To enable multiple AWS accounts to put events to your default event bus, run PutPermission once for each of these accounts. Or, if all the accounts are members of the same AWS organization, you can run PutPermission once specifying Principal as "*" and specifying the AWS organization ID in Condition, to grant permissions to all accounts in that organization. The permission policy on the default event bus cannot exceed 10 KB in size.
   */
  putPermission(params: CloudWatchEvents.Types.PutPermissionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Running PutPermission permits the specified AWS account or AWS organization to put events to your account's default event bus. CloudWatch Events rules in your account are triggered by these events arriving to your default event bus.  For another account to send events to your account, that external account must have a CloudWatch Events rule with your account's default event bus as a target. To enable multiple AWS accounts to put events to your default event bus, run PutPermission once for each of these accounts. Or, if all the accounts are members of the same AWS organization, you can run PutPermission once specifying Principal as "*" and specifying the AWS organization ID in Condition, to grant permissions to all accounts in that organization. The permission policy on the default event bus cannot exceed 10 KB in size.
   */
  putPermission(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates or updates the specified rule. Rules are enabled by default, or based on value of the state. You can disable a rule using DisableRule. If you are updating an existing rule, the rule is replaced with what you specify in this PutRule command. If you omit arguments in PutRule, the old values for those arguments are not kept. Instead, they are replaced with null values. When you create or update a rule, incoming events might not immediately start matching to new or updated rules. Allow a short period of time for changes to take effect. A rule must contain at least an EventPattern or ScheduleExpression. Rules with EventPatterns are triggered when a matching event is observed. Rules with ScheduleExpressions self-trigger based on the given schedule. A rule can have both an EventPattern and a ScheduleExpression, in which case the rule triggers on matching events as well as on a schedule. Most services in AWS treat : or / as the same character in Amazon Resource Names (ARNs). However, CloudWatch Events uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match.
   */
  putRule(params: CloudWatchEvents.Types.PutRuleRequest, callback?: (err: AWSError, data: CloudWatchEvents.Types.PutRuleResponse) => void): Request<CloudWatchEvents.Types.PutRuleResponse, AWSError>;
  /**
   * Creates or updates the specified rule. Rules are enabled by default, or based on value of the state. You can disable a rule using DisableRule. If you are updating an existing rule, the rule is replaced with what you specify in this PutRule command. If you omit arguments in PutRule, the old values for those arguments are not kept. Instead, they are replaced with null values. When you create or update a rule, incoming events might not immediately start matching to new or updated rules. Allow a short period of time for changes to take effect. A rule must contain at least an EventPattern or ScheduleExpression. Rules with EventPatterns are triggered when a matching event is observed. Rules with ScheduleExpressions self-trigger based on the given schedule. A rule can have both an EventPattern and a ScheduleExpression, in which case the rule triggers on matching events as well as on a schedule. Most services in AWS treat : or / as the same character in Amazon Resource Names (ARNs). However, CloudWatch Events uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match.
   */
  putRule(callback?: (err: AWSError, data: CloudWatchEvents.Types.PutRuleResponse) => void): Request<CloudWatchEvents.Types.PutRuleResponse, AWSError>;
  /**
   * Adds the specified targets to the specified rule, or updates the targets if they are already associated with the rule. Targets are the resources that are invoked when a rule is triggered. You can configure the following as targets for CloudWatch Events:   EC2 instances   SSM Run Command   SSM Automation   AWS Lambda functions   Data streams in Amazon Kinesis Data Streams   Data delivery streams in Amazon Kinesis Data Firehose   Amazon ECS tasks   AWS Step Functions state machines   AWS Batch jobs   AWS CodeBuild projects   Pipelines in AWS CodePipeline   Amazon Inspector assessment templates   Amazon SNS topics   Amazon SQS queues, including FIFO queues   The default event bus of another AWS account   Creating rules with built-in targets is supported only in the AWS Management Console. The built-in targets are EC2 CreateSnapshot API call, EC2 RebootInstances API call, EC2 StopInstances API call, and EC2 TerminateInstances API call.  For some target types, PutTargets provides target-specific parameters. If the target is a Kinesis data stream, you can optionally specify which shard the event goes to by using the KinesisParameters argument. To invoke a command on multiple EC2 instances with one rule, you can use the RunCommandParameters field. To be able to make API calls against the resources that you own, Amazon CloudWatch Events needs the appropriate permissions. For AWS Lambda and Amazon SNS resources, CloudWatch Events relies on resource-based policies. For EC2 instances, Kinesis data streams, and AWS Step Functions state machines, CloudWatch Events relies on IAM roles that you specify in the RoleARN argument in PutTargets. For more information, see Authentication and Access Control in the Amazon CloudWatch Events User Guide. If another AWS account is in the same region and has granted you permission (using PutPermission), you can send events to that account. Set that account's event bus as a target of the rules in your account. To send the matched events to the other account, specify that account's event bus as the Arn value when you run PutTargets. If your account sends events to another account, your account is charged for each sent event. Each event sent to another account is charged as a custom event. The account receiving the event is not charged. For more information, see Amazon CloudWatch Pricing. For more information about enabling cross-account events, see PutPermission.  Input, InputPath, and InputTransformer are mutually exclusive and optional parameters of a target. When a rule is triggered due to a matched event:   If none of the following arguments are specified for a target, then the entire event is passed to the target in JSON format (unless the target is Amazon EC2 Run Command or Amazon ECS task, in which case nothing from the event is passed to the target).   If Input is specified in the form of valid JSON, then the matched event is overridden with this constant.   If InputPath is specified in the form of JSONPath (for example, $.detail), then only the part of the event specified in the path is passed to the target (for example, only the detail part of the event is passed).   If InputTransformer is specified, then one or more specified JSONPaths are extracted from the event and used as values in a template that you specify as the input to the target.   When you specify InputPath or InputTransformer, you must use JSON dot notation, not bracket notation. When you add targets to a rule and the associated rule triggers soon after, new or updated targets might not be immediately invoked. Allow a short period of time for changes to take effect. This action can partially fail if too many requests are made at the same time. If that happens, FailedEntryCount is non-zero in the response and each entry in FailedEntries provides the ID of the failed target and the error code.
   */
  putTargets(params: CloudWatchEvents.Types.PutTargetsRequest, callback?: (err: AWSError, data: CloudWatchEvents.Types.PutTargetsResponse) => void): Request<CloudWatchEvents.Types.PutTargetsResponse, AWSError>;
  /**
   * Adds the specified targets to the specified rule, or updates the targets if they are already associated with the rule. Targets are the resources that are invoked when a rule is triggered. You can configure the following as targets for CloudWatch Events:   EC2 instances   SSM Run Command   SSM Automation   AWS Lambda functions   Data streams in Amazon Kinesis Data Streams   Data delivery streams in Amazon Kinesis Data Firehose   Amazon ECS tasks   AWS Step Functions state machines   AWS Batch jobs   AWS CodeBuild projects   Pipelines in AWS CodePipeline   Amazon Inspector assessment templates   Amazon SNS topics   Amazon SQS queues, including FIFO queues   The default event bus of another AWS account   Creating rules with built-in targets is supported only in the AWS Management Console. The built-in targets are EC2 CreateSnapshot API call, EC2 RebootInstances API call, EC2 StopInstances API call, and EC2 TerminateInstances API call.  For some target types, PutTargets provides target-specific parameters. If the target is a Kinesis data stream, you can optionally specify which shard the event goes to by using the KinesisParameters argument. To invoke a command on multiple EC2 instances with one rule, you can use the RunCommandParameters field. To be able to make API calls against the resources that you own, Amazon CloudWatch Events needs the appropriate permissions. For AWS Lambda and Amazon SNS resources, CloudWatch Events relies on resource-based policies. For EC2 instances, Kinesis data streams, and AWS Step Functions state machines, CloudWatch Events relies on IAM roles that you specify in the RoleARN argument in PutTargets. For more information, see Authentication and Access Control in the Amazon CloudWatch Events User Guide. If another AWS account is in the same region and has granted you permission (using PutPermission), you can send events to that account. Set that account's event bus as a target of the rules in your account. To send the matched events to the other account, specify that account's event bus as the Arn value when you run PutTargets. If your account sends events to another account, your account is charged for each sent event. Each event sent to another account is charged as a custom event. The account receiving the event is not charged. For more information, see Amazon CloudWatch Pricing. For more information about enabling cross-account events, see PutPermission.  Input, InputPath, and InputTransformer are mutually exclusive and optional parameters of a target. When a rule is triggered due to a matched event:   If none of the following arguments are specified for a target, then the entire event is passed to the target in JSON format (unless the target is Amazon EC2 Run Command or Amazon ECS task, in which case nothing from the event is passed to the target).   If Input is specified in the form of valid JSON, then the matched event is overridden with this constant.   If InputPath is specified in the form of JSONPath (for example, $.detail), then only the part of the event specified in the path is passed to the target (for example, only the detail part of the event is passed).   If InputTransformer is specified, then one or more specified JSONPaths are extracted from the event and used as values in a template that you specify as the input to the target.   When you specify InputPath or InputTransformer, you must use JSON dot notation, not bracket notation. When you add targets to a rule and the associated rule triggers soon after, new or updated targets might not be immediately invoked. Allow a short period of time for changes to take effect. This action can partially fail if too many requests are made at the same time. If that happens, FailedEntryCount is non-zero in the response and each entry in FailedEntries provides the ID of the failed target and the error code.
   */
  putTargets(callback?: (err: AWSError, data: CloudWatchEvents.Types.PutTargetsResponse) => void): Request<CloudWatchEvents.Types.PutTargetsResponse, AWSError>;
  /**
   * Revokes the permission of another AWS account to be able to put events to your default event bus. Specify the account to revoke by the StatementId value that you associated with the account when you granted it permission with PutPermission. You can find the StatementId by using DescribeEventBus.
   */
  removePermission(params: CloudWatchEvents.Types.RemovePermissionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Revokes the permission of another AWS account to be able to put events to your default event bus. Specify the account to revoke by the StatementId value that you associated with the account when you granted it permission with PutPermission. You can find the StatementId by using DescribeEventBus.
   */
  removePermission(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the specified targets from the specified rule. When the rule is triggered, those targets are no longer be invoked. When you remove a target, when the associated rule triggers, removed targets might continue to be invoked. Allow a short period of time for changes to take effect. This action can partially fail if too many requests are made at the same time. If that happens, FailedEntryCount is non-zero in the response and each entry in FailedEntries provides the ID of the failed target and the error code.
   */
  removeTargets(params: CloudWatchEvents.Types.RemoveTargetsRequest, callback?: (err: AWSError, data: CloudWatchEvents.Types.RemoveTargetsResponse) => void): Request<CloudWatchEvents.Types.RemoveTargetsResponse, AWSError>;
  /**
   * Removes the specified targets from the specified rule. When the rule is triggered, those targets are no longer be invoked. When you remove a target, when the associated rule triggers, removed targets might continue to be invoked. Allow a short period of time for changes to take effect. This action can partially fail if too many requests are made at the same time. If that happens, FailedEntryCount is non-zero in the response and each entry in FailedEntries provides the ID of the failed target and the error code.
   */
  removeTargets(callback?: (err: AWSError, data: CloudWatchEvents.Types.RemoveTargetsResponse) => void): Request<CloudWatchEvents.Types.RemoveTargetsResponse, AWSError>;
  /**
   * Tests whether the specified event pattern matches the provided event. Most services in AWS treat : or / as the same character in Amazon Resource Names (ARNs). However, CloudWatch Events uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match.
   */
  testEventPattern(params: CloudWatchEvents.Types.TestEventPatternRequest, callback?: (err: AWSError, data: CloudWatchEvents.Types.TestEventPatternResponse) => void): Request<CloudWatchEvents.Types.TestEventPatternResponse, AWSError>;
  /**
   * Tests whether the specified event pattern matches the provided event. Most services in AWS treat : or / as the same character in Amazon Resource Names (ARNs). However, CloudWatch Events uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match.
   */
  testEventPattern(callback?: (err: AWSError, data: CloudWatchEvents.Types.TestEventPatternResponse) => void): Request<CloudWatchEvents.Types.TestEventPatternResponse, AWSError>;
}
declare namespace CloudWatchEvents {
  export type Action = string;
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
  export interface DeleteRuleRequest {
    /**
     * The name of the rule.
     */
    Name: RuleName;
  }
  export interface DescribeEventBusRequest {
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
  export interface DescribeRuleRequest {
    /**
     * The name of the rule.
     */
    Name: RuleName;
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
     * The event pattern. For more information, see Events and Event Patterns in the Amazon CloudWatch Events User Guide.
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
  }
  export interface DisableRuleRequest {
    /**
     * The name of the rule.
     */
    Name: RuleName;
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
  }
  export type ErrorCode = string;
  export type ErrorMessage = string;
  export type EventId = string;
  export type EventPattern = string;
  export type EventResource = string;
  export type EventResourceList = EventResource[];
  export type EventTime = Date;
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
  export interface ListRuleNamesByTargetRequest {
    /**
     * The Amazon Resource Name (ARN) of the target resource.
     */
    TargetArn: TargetArn;
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
  export interface ListTargetsByRuleRequest {
    /**
     * The name of the rule.
     */
    Rule: RuleName;
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
  export type MessageGroupId = string;
  export interface NetworkConfiguration {
    /**
     * Use this structure to specify the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the awsvpc network mode.
     */
    awsvpcConfiguration?: AwsVpcConfiguration;
  }
  export type NextToken = string;
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
     * The source of the event. This field is required.
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
  export interface PutPermissionRequest {
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
     * The event pattern. For more information, see Events and Event Patterns in the Amazon CloudWatch Events User Guide.
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
  export interface RemovePermissionRequest {
    /**
     * The statement ID corresponding to the account that is no longer allowed to put events to the default event bus.
     */
    StatementId: StatementId;
  }
  export interface RemoveTargetsRequest {
    /**
     * The name of the rule.
     */
    Rule: RuleName;
    /**
     * The IDs of the targets to remove from the rule.
     */
    Ids: TargetIdList;
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
     * The event pattern of the rule. For more information, see Events and Event Patterns in the Amazon CloudWatch Events User Guide.
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
     * The event pattern. For more information, see Events and Event Patterns in the Amazon CloudWatch Events User Guide.
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
  export type TransformerInput = string;
  export type TransformerPaths = {[key: string]: TargetInputPath};
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
  /**
   * Contains interfaces for use with the CloudWatchEvents client.
   */
  export import Types = CloudWatchEvents;
}
export = CloudWatchEvents;
