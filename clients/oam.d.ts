import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class OAM extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: OAM.Types.ClientConfiguration)
  config: Config & OAM.Types.ClientConfiguration;
  /**
   * Creates a link between a source account and a sink that you have created in a monitoring account. After the link is created, data is sent from the source account to the monitoring account. When you create a link, you can optionally specify filters that specify which metric namespaces and which log groups are shared from the source account to the monitoring account. Before you create a link, you must create a sink in the monitoring account and create a sink policy in that account. The sink policy must permit the source account to link to it. You can grant permission to source accounts by granting permission to an entire organization or to individual accounts. For more information, see CreateSink and PutSinkPolicy. Each monitoring account can be linked to as many as 100,000 source accounts. Each source account can be linked to as many as five monitoring accounts.
   */
  createLink(params: OAM.Types.CreateLinkInput, callback?: (err: AWSError, data: OAM.Types.CreateLinkOutput) => void): Request<OAM.Types.CreateLinkOutput, AWSError>;
  /**
   * Creates a link between a source account and a sink that you have created in a monitoring account. After the link is created, data is sent from the source account to the monitoring account. When you create a link, you can optionally specify filters that specify which metric namespaces and which log groups are shared from the source account to the monitoring account. Before you create a link, you must create a sink in the monitoring account and create a sink policy in that account. The sink policy must permit the source account to link to it. You can grant permission to source accounts by granting permission to an entire organization or to individual accounts. For more information, see CreateSink and PutSinkPolicy. Each monitoring account can be linked to as many as 100,000 source accounts. Each source account can be linked to as many as five monitoring accounts.
   */
  createLink(callback?: (err: AWSError, data: OAM.Types.CreateLinkOutput) => void): Request<OAM.Types.CreateLinkOutput, AWSError>;
  /**
   * Use this to create a sink in the current account, so that it can be used as a monitoring account in CloudWatch cross-account observability. A sink is a resource that represents an attachment point in a monitoring account. Source accounts can link to the sink to send observability data. After you create a sink, you must create a sink policy that allows source accounts to attach to it. For more information, see PutSinkPolicy. Each account can contain one sink per Region. If you delete a sink, you can then create a new one in that Region.
   */
  createSink(params: OAM.Types.CreateSinkInput, callback?: (err: AWSError, data: OAM.Types.CreateSinkOutput) => void): Request<OAM.Types.CreateSinkOutput, AWSError>;
  /**
   * Use this to create a sink in the current account, so that it can be used as a monitoring account in CloudWatch cross-account observability. A sink is a resource that represents an attachment point in a monitoring account. Source accounts can link to the sink to send observability data. After you create a sink, you must create a sink policy that allows source accounts to attach to it. For more information, see PutSinkPolicy. Each account can contain one sink per Region. If you delete a sink, you can then create a new one in that Region.
   */
  createSink(callback?: (err: AWSError, data: OAM.Types.CreateSinkOutput) => void): Request<OAM.Types.CreateSinkOutput, AWSError>;
  /**
   * Deletes a link between a monitoring account sink and a source account. You must run this operation in the source account.
   */
  deleteLink(params: OAM.Types.DeleteLinkInput, callback?: (err: AWSError, data: OAM.Types.DeleteLinkOutput) => void): Request<OAM.Types.DeleteLinkOutput, AWSError>;
  /**
   * Deletes a link between a monitoring account sink and a source account. You must run this operation in the source account.
   */
  deleteLink(callback?: (err: AWSError, data: OAM.Types.DeleteLinkOutput) => void): Request<OAM.Types.DeleteLinkOutput, AWSError>;
  /**
   * Deletes a sink. You must delete all links to a sink before you can delete that sink.
   */
  deleteSink(params: OAM.Types.DeleteSinkInput, callback?: (err: AWSError, data: OAM.Types.DeleteSinkOutput) => void): Request<OAM.Types.DeleteSinkOutput, AWSError>;
  /**
   * Deletes a sink. You must delete all links to a sink before you can delete that sink.
   */
  deleteSink(callback?: (err: AWSError, data: OAM.Types.DeleteSinkOutput) => void): Request<OAM.Types.DeleteSinkOutput, AWSError>;
  /**
   * Returns complete information about one link. To use this operation, provide the link ARN. To retrieve a list of link ARNs, use ListLinks.
   */
  getLink(params: OAM.Types.GetLinkInput, callback?: (err: AWSError, data: OAM.Types.GetLinkOutput) => void): Request<OAM.Types.GetLinkOutput, AWSError>;
  /**
   * Returns complete information about one link. To use this operation, provide the link ARN. To retrieve a list of link ARNs, use ListLinks.
   */
  getLink(callback?: (err: AWSError, data: OAM.Types.GetLinkOutput) => void): Request<OAM.Types.GetLinkOutput, AWSError>;
  /**
   * Returns complete information about one monitoring account sink. To use this operation, provide the sink ARN. To retrieve a list of sink ARNs, use ListSinks.
   */
  getSink(params: OAM.Types.GetSinkInput, callback?: (err: AWSError, data: OAM.Types.GetSinkOutput) => void): Request<OAM.Types.GetSinkOutput, AWSError>;
  /**
   * Returns complete information about one monitoring account sink. To use this operation, provide the sink ARN. To retrieve a list of sink ARNs, use ListSinks.
   */
  getSink(callback?: (err: AWSError, data: OAM.Types.GetSinkOutput) => void): Request<OAM.Types.GetSinkOutput, AWSError>;
  /**
   * Returns the current sink policy attached to this sink. The sink policy specifies what accounts can attach to this sink as source accounts, and what types of data they can share.
   */
  getSinkPolicy(params: OAM.Types.GetSinkPolicyInput, callback?: (err: AWSError, data: OAM.Types.GetSinkPolicyOutput) => void): Request<OAM.Types.GetSinkPolicyOutput, AWSError>;
  /**
   * Returns the current sink policy attached to this sink. The sink policy specifies what accounts can attach to this sink as source accounts, and what types of data they can share.
   */
  getSinkPolicy(callback?: (err: AWSError, data: OAM.Types.GetSinkPolicyOutput) => void): Request<OAM.Types.GetSinkPolicyOutput, AWSError>;
  /**
   * Returns a list of source account links that are linked to this monitoring account sink. To use this operation, provide the sink ARN. To retrieve a list of sink ARNs, use ListSinks. To find a list of links for one source account, use ListLinks.
   */
  listAttachedLinks(params: OAM.Types.ListAttachedLinksInput, callback?: (err: AWSError, data: OAM.Types.ListAttachedLinksOutput) => void): Request<OAM.Types.ListAttachedLinksOutput, AWSError>;
  /**
   * Returns a list of source account links that are linked to this monitoring account sink. To use this operation, provide the sink ARN. To retrieve a list of sink ARNs, use ListSinks. To find a list of links for one source account, use ListLinks.
   */
  listAttachedLinks(callback?: (err: AWSError, data: OAM.Types.ListAttachedLinksOutput) => void): Request<OAM.Types.ListAttachedLinksOutput, AWSError>;
  /**
   * Use this operation in a source account to return a list of links to monitoring account sinks that this source account has. To find a list of links for one monitoring account sink, use ListAttachedLinks from within the monitoring account.
   */
  listLinks(params: OAM.Types.ListLinksInput, callback?: (err: AWSError, data: OAM.Types.ListLinksOutput) => void): Request<OAM.Types.ListLinksOutput, AWSError>;
  /**
   * Use this operation in a source account to return a list of links to monitoring account sinks that this source account has. To find a list of links for one monitoring account sink, use ListAttachedLinks from within the monitoring account.
   */
  listLinks(callback?: (err: AWSError, data: OAM.Types.ListLinksOutput) => void): Request<OAM.Types.ListLinksOutput, AWSError>;
  /**
   * Use this operation in a monitoring account to return the list of sinks created in that account.
   */
  listSinks(params: OAM.Types.ListSinksInput, callback?: (err: AWSError, data: OAM.Types.ListSinksOutput) => void): Request<OAM.Types.ListSinksOutput, AWSError>;
  /**
   * Use this operation in a monitoring account to return the list of sinks created in that account.
   */
  listSinks(callback?: (err: AWSError, data: OAM.Types.ListSinksOutput) => void): Request<OAM.Types.ListSinksOutput, AWSError>;
  /**
   * Displays the tags associated with a resource. Both sinks and links support tagging.
   */
  listTagsForResource(params: OAM.Types.ListTagsForResourceInput, callback?: (err: AWSError, data: OAM.Types.ListTagsForResourceOutput) => void): Request<OAM.Types.ListTagsForResourceOutput, AWSError>;
  /**
   * Displays the tags associated with a resource. Both sinks and links support tagging.
   */
  listTagsForResource(callback?: (err: AWSError, data: OAM.Types.ListTagsForResourceOutput) => void): Request<OAM.Types.ListTagsForResourceOutput, AWSError>;
  /**
   * Creates or updates the resource policy that grants permissions to source accounts to link to the monitoring account sink. When you create a sink policy, you can grant permissions to all accounts in an organization or to individual accounts. You can also use a sink policy to limit the types of data that is shared. The three types that you can allow or deny are:    Metrics - Specify with AWS::CloudWatch::Metric     Log groups - Specify with AWS::Logs::LogGroup     Traces - Specify with AWS::XRay::Trace     Application Insights - Applications - Specify with AWS::ApplicationInsights::Application    See the examples in this section to see how to specify permitted source accounts and data types.
   */
  putSinkPolicy(params: OAM.Types.PutSinkPolicyInput, callback?: (err: AWSError, data: OAM.Types.PutSinkPolicyOutput) => void): Request<OAM.Types.PutSinkPolicyOutput, AWSError>;
  /**
   * Creates or updates the resource policy that grants permissions to source accounts to link to the monitoring account sink. When you create a sink policy, you can grant permissions to all accounts in an organization or to individual accounts. You can also use a sink policy to limit the types of data that is shared. The three types that you can allow or deny are:    Metrics - Specify with AWS::CloudWatch::Metric     Log groups - Specify with AWS::Logs::LogGroup     Traces - Specify with AWS::XRay::Trace     Application Insights - Applications - Specify with AWS::ApplicationInsights::Application    See the examples in this section to see how to specify permitted source accounts and data types.
   */
  putSinkPolicy(callback?: (err: AWSError, data: OAM.Types.PutSinkPolicyOutput) => void): Request<OAM.Types.PutSinkPolicyOutput, AWSError>;
  /**
   * Assigns one or more tags (key-value pairs) to the specified resource. Both sinks and links can be tagged.  Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters. You can use the TagResource action with a resource that already has tags. If you specify a new tag key for the alarm, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the alarm, the new tag value that you specify replaces the previous value for that tag. You can associate as many as 50 tags with a resource.  Unlike tagging permissions in other Amazon Web Services services, to tag or untag links and sinks you must have the oam:ResourceTag permission. The iam:ResourceTag permission does not allow you to tag and untag links and sinks. 
   */
  tagResource(params: OAM.Types.TagResourceInput, callback?: (err: AWSError, data: OAM.Types.TagResourceOutput) => void): Request<OAM.Types.TagResourceOutput, AWSError>;
  /**
   * Assigns one or more tags (key-value pairs) to the specified resource. Both sinks and links can be tagged.  Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters. You can use the TagResource action with a resource that already has tags. If you specify a new tag key for the alarm, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the alarm, the new tag value that you specify replaces the previous value for that tag. You can associate as many as 50 tags with a resource.  Unlike tagging permissions in other Amazon Web Services services, to tag or untag links and sinks you must have the oam:ResourceTag permission. The iam:ResourceTag permission does not allow you to tag and untag links and sinks. 
   */
  tagResource(callback?: (err: AWSError, data: OAM.Types.TagResourceOutput) => void): Request<OAM.Types.TagResourceOutput, AWSError>;
  /**
   * Removes one or more tags from the specified resource.  Unlike tagging permissions in other Amazon Web Services services, to tag or untag links and sinks you must have the oam:ResourceTag permission. The iam:TagResource permission does not allow you to tag and untag links and sinks. 
   */
  untagResource(params: OAM.Types.UntagResourceInput, callback?: (err: AWSError, data: OAM.Types.UntagResourceOutput) => void): Request<OAM.Types.UntagResourceOutput, AWSError>;
  /**
   * Removes one or more tags from the specified resource.  Unlike tagging permissions in other Amazon Web Services services, to tag or untag links and sinks you must have the oam:ResourceTag permission. The iam:TagResource permission does not allow you to tag and untag links and sinks. 
   */
  untagResource(callback?: (err: AWSError, data: OAM.Types.UntagResourceOutput) => void): Request<OAM.Types.UntagResourceOutput, AWSError>;
  /**
   * Use this operation to change what types of data are shared from a source account to its linked monitoring account sink. You can't change the sink or change the monitoring account with this operation. When you update a link, you can optionally specify filters that specify which metric namespaces and which log groups are shared from the source account to the monitoring account. To update the list of tags associated with the sink, use TagResource.
   */
  updateLink(params: OAM.Types.UpdateLinkInput, callback?: (err: AWSError, data: OAM.Types.UpdateLinkOutput) => void): Request<OAM.Types.UpdateLinkOutput, AWSError>;
  /**
   * Use this operation to change what types of data are shared from a source account to its linked monitoring account sink. You can't change the sink or change the monitoring account with this operation. When you update a link, you can optionally specify filters that specify which metric namespaces and which log groups are shared from the source account to the monitoring account. To update the list of tags associated with the sink, use TagResource.
   */
  updateLink(callback?: (err: AWSError, data: OAM.Types.UpdateLinkOutput) => void): Request<OAM.Types.UpdateLinkOutput, AWSError>;
}
declare namespace OAM {
  export type Arn = string;
  export interface CreateLinkInput {
    /**
     * Specify a friendly human-readable name to use to identify this source account when you are viewing data from it in the monitoring account. You can use a custom label or use the following variables:    $AccountName is the name of the account    $AccountEmail is the globally unique email address of the account    $AccountEmailNoDomain is the email address of the account without the domain name  
     */
    LabelTemplate: LabelTemplate;
    /**
     * Use this structure to optionally create filters that specify that only some metric namespaces or log groups are to be shared from the source account to the monitoring account.
     */
    LinkConfiguration?: LinkConfiguration;
    /**
     * An array of strings that define which types of data that the source account shares with the monitoring account.
     */
    ResourceTypes: ResourceTypesInput;
    /**
     * The ARN of the sink to use to create this link. You can use ListSinks to find the ARNs of sinks. For more information about sinks, see CreateSink.
     */
    SinkIdentifier: ResourceIdentifier;
    /**
     * Assigns one or more tags (key-value pairs) to the link.  Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. For more information about using tags to control access, see Controlling access to Amazon Web Services resources using tags.
     */
    Tags?: TagMapInput;
  }
  export interface CreateLinkOutput {
    /**
     * The ARN of the link that is newly created.
     */
    Arn?: String;
    /**
     * The random ID string that Amazon Web Services generated as part of the link ARN.
     */
    Id?: String;
    /**
     * The label that you assigned to this link. If the labelTemplate includes variables, this field displays the variables resolved to their actual values.
     */
    Label?: String;
    /**
     * The exact label template that you specified, with the variables not resolved.
     */
    LabelTemplate?: String;
    /**
     * This structure includes filters that specify which metric namespaces and which log groups are shared from the source account to the monitoring account.
     */
    LinkConfiguration?: LinkConfiguration;
    /**
     * The resource types supported by this link.
     */
    ResourceTypes?: ResourceTypesOutput;
    /**
     * The ARN of the sink that is used for this link.
     */
    SinkArn?: String;
    /**
     * The tags assigned to the link.
     */
    Tags?: TagMapOutput;
  }
  export interface CreateSinkInput {
    /**
     * A name for the sink.
     */
    Name: SinkName;
    /**
     * Assigns one or more tags (key-value pairs) to the link.  Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. For more information about using tags to control access, see Controlling access to Amazon Web Services resources using tags.
     */
    Tags?: TagMapInput;
  }
  export interface CreateSinkOutput {
    /**
     * The ARN of the sink that is newly created.
     */
    Arn?: String;
    /**
     * The random ID string that Amazon Web Services generated as part of the sink ARN.
     */
    Id?: String;
    /**
     * The name of the sink.
     */
    Name?: String;
    /**
     * The tags assigned to the sink.
     */
    Tags?: TagMapOutput;
  }
  export interface DeleteLinkInput {
    /**
     * The ARN of the link to delete.
     */
    Identifier: ResourceIdentifier;
  }
  export interface DeleteLinkOutput {
  }
  export interface DeleteSinkInput {
    /**
     * The ARN of the sink to delete.
     */
    Identifier: ResourceIdentifier;
  }
  export interface DeleteSinkOutput {
  }
  export interface GetLinkInput {
    /**
     * The ARN of the link to retrieve information for.
     */
    Identifier: ResourceIdentifier;
  }
  export interface GetLinkOutput {
    /**
     * The ARN of the link.
     */
    Arn?: String;
    /**
     * The random ID string that Amazon Web Services generated as part of the link ARN.
     */
    Id?: String;
    /**
     * The label that you assigned to this link, with the variables resolved to their actual values.
     */
    Label?: String;
    /**
     * The exact label template that was specified when the link was created, with the template variables not resolved.
     */
    LabelTemplate?: String;
    /**
     * This structure includes filters that specify which metric namespaces and which log groups are shared from the source account to the monitoring account.
     */
    LinkConfiguration?: LinkConfiguration;
    /**
     * The resource types supported by this link.
     */
    ResourceTypes?: ResourceTypesOutput;
    /**
     * The ARN of the sink that is used for this link.
     */
    SinkArn?: String;
    /**
     * The tags assigned to the link.
     */
    Tags?: TagMapOutput;
  }
  export interface GetSinkInput {
    /**
     * The ARN of the sink to retrieve information for.
     */
    Identifier: ResourceIdentifier;
  }
  export interface GetSinkOutput {
    /**
     * The ARN of the sink.
     */
    Arn?: String;
    /**
     * The random ID string that Amazon Web Services generated as part of the sink ARN.
     */
    Id?: String;
    /**
     * The name of the sink.
     */
    Name?: String;
    /**
     * The tags assigned to the sink.
     */
    Tags?: TagMapOutput;
  }
  export interface GetSinkPolicyInput {
    /**
     * The ARN of the sink to retrieve the policy of.
     */
    SinkIdentifier: ResourceIdentifier;
  }
  export interface GetSinkPolicyOutput {
    /**
     * The policy that you specified, in JSON format.
     */
    Policy?: String;
    /**
     * The ARN of the sink.
     */
    SinkArn?: String;
    /**
     * The random ID string that Amazon Web Services generated as part of the sink ARN.
     */
    SinkId?: String;
  }
  export type LabelTemplate = string;
  export interface LinkConfiguration {
    /**
     * Use this structure to filter which log groups are to send log events from the source account to the monitoring account.
     */
    LogGroupConfiguration?: LogGroupConfiguration;
    /**
     * Use this structure to filter which metric namespaces are to be shared from the source account to the monitoring account.
     */
    MetricConfiguration?: MetricConfiguration;
  }
  export interface ListAttachedLinksInput {
    /**
     * Limits the number of returned links to the specified number.
     */
    MaxResults?: ListAttachedLinksMaxResults;
    /**
     * The token for the next set of items to return. You received this token from a previous call.
     */
    NextToken?: NextToken;
    /**
     * The ARN of the sink that you want to retrieve links for.
     */
    SinkIdentifier: ResourceIdentifier;
  }
  export interface ListAttachedLinksItem {
    /**
     * The label that was assigned to this link at creation, with the variables resolved to their actual values.
     */
    Label?: String;
    /**
     * The ARN of the link.
     */
    LinkArn?: String;
    /**
     * The resource types supported by this link.
     */
    ResourceTypes?: ResourceTypesOutput;
  }
  export type ListAttachedLinksItems = ListAttachedLinksItem[];
  export type ListAttachedLinksMaxResults = number;
  export interface ListAttachedLinksOutput {
    /**
     * An array of structures that contain the information about the attached links.
     */
    Items: ListAttachedLinksItems;
    /**
     * The token to use when requesting the next set of links.
     */
    NextToken?: String;
  }
  export interface ListLinksInput {
    /**
     * Limits the number of returned links to the specified number.
     */
    MaxResults?: ListLinksMaxResults;
    /**
     * The token for the next set of items to return. You received this token from a previous call.
     */
    NextToken?: NextToken;
  }
  export interface ListLinksItem {
    /**
     * The ARN of the link.
     */
    Arn?: String;
    /**
     * The random ID string that Amazon Web Services generated as part of the link ARN.
     */
    Id?: String;
    /**
     * The label that was assigned to this link at creation, with the variables resolved to their actual values.
     */
    Label?: String;
    /**
     * The resource types supported by this link.
     */
    ResourceTypes?: ResourceTypesOutput;
    /**
     * The ARN of the sink that this link is attached to.
     */
    SinkArn?: String;
  }
  export type ListLinksItems = ListLinksItem[];
  export type ListLinksMaxResults = number;
  export interface ListLinksOutput {
    /**
     * An array of structures that contain the information about the returned links.
     */
    Items: ListLinksItems;
    /**
     * The token to use when requesting the next set of links.
     */
    NextToken?: String;
  }
  export interface ListSinksInput {
    /**
     * Limits the number of returned links to the specified number.
     */
    MaxResults?: ListSinksMaxResults;
    /**
     * The token for the next set of items to return. You received this token from a previous call.
     */
    NextToken?: NextToken;
  }
  export interface ListSinksItem {
    /**
     * The ARN of the sink.
     */
    Arn?: String;
    /**
     * The random ID string that Amazon Web Services generated as part of the sink ARN.
     */
    Id?: String;
    /**
     * The name of the sink.
     */
    Name?: String;
  }
  export type ListSinksItems = ListSinksItem[];
  export type ListSinksMaxResults = number;
  export interface ListSinksOutput {
    /**
     * An array of structures that contain the information about the returned sinks.
     */
    Items: ListSinksItems;
    /**
     * The token to use when requesting the next set of sinks.
     */
    NextToken?: String;
  }
  export interface ListTagsForResourceInput {
    /**
     * The ARN of the resource that you want to view tags for. The ARN format of a sink is arn:aws:oam:Region:account-id:sink/sink-id   The ARN format of a link is arn:aws:oam:Region:account-id:link/link-id   For more information about ARN format, see CloudWatch Logs resources and operations.  Unlike tagging permissions in other Amazon Web Services services, to retrieve the list of tags for links or sinks you must have the oam:RequestTag permission. The aws:ReguestTag permission does not allow you to tag and untag links and sinks. 
     */
    ResourceArn: Arn;
  }
  export interface ListTagsForResourceOutput {
    /**
     * The list of tags associated with the requested resource.&gt;
     */
    Tags?: TagMapOutput;
  }
  export interface LogGroupConfiguration {
    /**
     * Use this field to specify which log groups are to share their log events with the monitoring account. Use the term LogGroupName and one or more of the following operands. Use single quotation marks (') around log group names. The matching of log group names is case sensitive. Each filter has a limit of five conditional operands. Conditional operands are AND and OR.    = and !=     AND     OR     LIKE and NOT LIKE. These can be used only as prefix searches. Include a % at the end of the string that you want to search for and include.    IN and NOT IN, using parentheses ( )    Examples:    LogGroupName IN ('This-Log-Group', 'Other-Log-Group') includes only the log groups with names This-Log-Group and Other-Log-Group.    LogGroupName NOT IN ('Private-Log-Group', 'Private-Log-Group-2') includes all log groups except the log groups with names Private-Log-Group and Private-Log-Group-2.    LogGroupName LIKE 'aws/lambda/%' OR LogGroupName LIKE 'AWSLogs%' includes all log groups that have names that start with aws/lambda/ or AWSLogs.    If you are updating a link that uses filters, you can specify * as the only value for the filter parameter to delete the filter and share all log groups with the monitoring account. 
     */
    Filter: LogsFilter;
  }
  export type LogsFilter = string;
  export interface MetricConfiguration {
    /**
     * Use this field to specify which metrics are to be shared with the monitoring account. Use the term Namespace and one or more of the following operands. Use single quotation marks (') around namespace names. The matching of namespace names is case sensitive. Each filter has a limit of five conditional operands. Conditional operands are AND and OR.    = and !=     AND     OR     LIKE and NOT LIKE. These can be used only as prefix searches. Include a % at the end of the string that you want to search for and include.    IN and NOT IN, using parentheses ( )    Examples:    Namespace NOT LIKE 'AWS/%' includes only namespaces that don't start with AWS/, such as custom namespaces.    Namespace IN ('AWS/EC2', 'AWS/ELB', 'AWS/S3') includes only the metrics in the EC2, Elastic Load Balancing, and Amazon S3 namespaces.     Namespace = 'AWS/EC2' OR Namespace NOT LIKE 'AWS/%' includes only the EC2 namespace and your custom namespaces.    If you are updating a link that uses filters, you can specify * as the only value for the filter parameter to delete the filter and share all metric namespaces with the monitoring account. 
     */
    Filter: MetricsFilter;
  }
  export type MetricsFilter = string;
  export type NextToken = string;
  export interface PutSinkPolicyInput {
    /**
     * The JSON policy to use. If you are updating an existing policy, the entire existing policy is replaced by what you specify here. The policy must be in JSON string format with quotation marks escaped and no newlines. For examples of different types of policies, see the Examples section on this page.
     */
    Policy: SinkPolicy;
    /**
     * The ARN of the sink to attach this policy to.
     */
    SinkIdentifier: ResourceIdentifier;
  }
  export interface PutSinkPolicyOutput {
    /**
     * The policy that you specified.
     */
    Policy?: String;
    /**
     * The ARN of the sink.
     */
    SinkArn?: String;
    /**
     * The random ID string that Amazon Web Services generated as part of the sink ARN.
     */
    SinkId?: String;
  }
  export type ResourceIdentifier = string;
  export type ResourceType = "AWS::CloudWatch::Metric"|"AWS::Logs::LogGroup"|"AWS::XRay::Trace"|"AWS::ApplicationInsights::Application"|"AWS::InternetMonitor::Monitor"|string;
  export type ResourceTypesInput = ResourceType[];
  export type ResourceTypesOutput = String[];
  export type SinkName = string;
  export type SinkPolicy = string;
  export type String = string;
  export type TagKey = string;
  export type TagKeys = TagKey[];
  export type TagMapInput = {[key: string]: TagValue};
  export type TagMapOutput = {[key: string]: String};
  export interface TagResourceInput {
    /**
     * The ARN of the resource that you're adding tags to. The ARN format of a sink is arn:aws:oam:Region:account-id:sink/sink-id   The ARN format of a link is arn:aws:oam:Region:account-id:link/link-id   For more information about ARN format, see CloudWatch Logs resources and operations.
     */
    ResourceArn: Arn;
    /**
     * The list of key-value pairs to associate with the resource.
     */
    Tags: TagMapInput;
  }
  export interface TagResourceOutput {
  }
  export type TagValue = string;
  export interface UntagResourceInput {
    /**
     * The ARN of the resource that you're removing tags from. The ARN format of a sink is arn:aws:oam:Region:account-id:sink/sink-id   The ARN format of a link is arn:aws:oam:Region:account-id:link/link-id   For more information about ARN format, see CloudWatch Logs resources and operations.
     */
    ResourceArn: Arn;
    /**
     * The list of tag keys to remove from the resource.
     */
    TagKeys: TagKeys;
  }
  export interface UntagResourceOutput {
  }
  export interface UpdateLinkInput {
    /**
     * The ARN of the link that you want to update.
     */
    Identifier: ResourceIdentifier;
    /**
     * Use this structure to filter which metric namespaces and which log groups are to be shared from the source account to the monitoring account.
     */
    LinkConfiguration?: LinkConfiguration;
    /**
     * An array of strings that define which types of data that the source account will send to the monitoring account. Your input here replaces the current set of data types that are shared.
     */
    ResourceTypes: ResourceTypesInput;
  }
  export interface UpdateLinkOutput {
    /**
     * The ARN of the link that you have updated.
     */
    Arn?: String;
    /**
     * The random ID string that Amazon Web Services generated as part of the sink ARN.
     */
    Id?: String;
    /**
     * The label assigned to this link, with the variables resolved to their actual values.
     */
    Label?: String;
    /**
     * The exact label template that was specified when the link was created, with the template variables not resolved.
     */
    LabelTemplate?: LabelTemplate;
    /**
     * This structure includes filters that specify which metric namespaces and which log groups are shared from the source account to the monitoring account.
     */
    LinkConfiguration?: LinkConfiguration;
    /**
     * The resource types now supported by this link.
     */
    ResourceTypes?: ResourceTypesOutput;
    /**
     * The ARN of the sink that is used for this link.
     */
    SinkArn?: String;
    /**
     * The tags assigned to the link.
     */
    Tags?: TagMapOutput;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2022-06-10"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the OAM client.
   */
  export import Types = OAM;
}
export = OAM;
