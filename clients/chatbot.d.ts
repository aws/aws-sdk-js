import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class Chatbot extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Chatbot.Types.ClientConfiguration)
  config: Config & Chatbot.Types.ClientConfiguration;
  /**
   * Creates Chime Webhook Configuration
   */
  createChimeWebhookConfiguration(params: Chatbot.Types.CreateChimeWebhookConfigurationRequest, callback?: (err: AWSError, data: Chatbot.Types.CreateChimeWebhookConfigurationResult) => void): Request<Chatbot.Types.CreateChimeWebhookConfigurationResult, AWSError>;
  /**
   * Creates Chime Webhook Configuration
   */
  createChimeWebhookConfiguration(callback?: (err: AWSError, data: Chatbot.Types.CreateChimeWebhookConfigurationResult) => void): Request<Chatbot.Types.CreateChimeWebhookConfigurationResult, AWSError>;
  /**
   * Creates MS Teams Channel Configuration
   */
  createMicrosoftTeamsChannelConfiguration(params: Chatbot.Types.CreateTeamsChannelConfigurationRequest, callback?: (err: AWSError, data: Chatbot.Types.CreateTeamsChannelConfigurationResult) => void): Request<Chatbot.Types.CreateTeamsChannelConfigurationResult, AWSError>;
  /**
   * Creates MS Teams Channel Configuration
   */
  createMicrosoftTeamsChannelConfiguration(callback?: (err: AWSError, data: Chatbot.Types.CreateTeamsChannelConfigurationResult) => void): Request<Chatbot.Types.CreateTeamsChannelConfigurationResult, AWSError>;
  /**
   * Creates Slack Channel Configuration
   */
  createSlackChannelConfiguration(params: Chatbot.Types.CreateSlackChannelConfigurationRequest, callback?: (err: AWSError, data: Chatbot.Types.CreateSlackChannelConfigurationResult) => void): Request<Chatbot.Types.CreateSlackChannelConfigurationResult, AWSError>;
  /**
   * Creates Slack Channel Configuration
   */
  createSlackChannelConfiguration(callback?: (err: AWSError, data: Chatbot.Types.CreateSlackChannelConfigurationResult) => void): Request<Chatbot.Types.CreateSlackChannelConfigurationResult, AWSError>;
  /**
   * Deletes a Chime Webhook Configuration
   */
  deleteChimeWebhookConfiguration(params: Chatbot.Types.DeleteChimeWebhookConfigurationRequest, callback?: (err: AWSError, data: Chatbot.Types.DeleteChimeWebhookConfigurationResult) => void): Request<Chatbot.Types.DeleteChimeWebhookConfigurationResult, AWSError>;
  /**
   * Deletes a Chime Webhook Configuration
   */
  deleteChimeWebhookConfiguration(callback?: (err: AWSError, data: Chatbot.Types.DeleteChimeWebhookConfigurationResult) => void): Request<Chatbot.Types.DeleteChimeWebhookConfigurationResult, AWSError>;
  /**
   * Deletes MS Teams Channel Configuration
   */
  deleteMicrosoftTeamsChannelConfiguration(params: Chatbot.Types.DeleteTeamsChannelConfigurationRequest, callback?: (err: AWSError, data: Chatbot.Types.DeleteTeamsChannelConfigurationResult) => void): Request<Chatbot.Types.DeleteTeamsChannelConfigurationResult, AWSError>;
  /**
   * Deletes MS Teams Channel Configuration
   */
  deleteMicrosoftTeamsChannelConfiguration(callback?: (err: AWSError, data: Chatbot.Types.DeleteTeamsChannelConfigurationResult) => void): Request<Chatbot.Types.DeleteTeamsChannelConfigurationResult, AWSError>;
  /**
   * Deletes the Microsoft Teams team authorization allowing for channels to be configured in that Microsoft Teams team. Note that the Microsoft Teams team must have no channels configured to remove it.
   */
  deleteMicrosoftTeamsConfiguredTeam(params: Chatbot.Types.DeleteTeamsConfiguredTeamRequest, callback?: (err: AWSError, data: Chatbot.Types.DeleteTeamsConfiguredTeamResult) => void): Request<Chatbot.Types.DeleteTeamsConfiguredTeamResult, AWSError>;
  /**
   * Deletes the Microsoft Teams team authorization allowing for channels to be configured in that Microsoft Teams team. Note that the Microsoft Teams team must have no channels configured to remove it.
   */
  deleteMicrosoftTeamsConfiguredTeam(callback?: (err: AWSError, data: Chatbot.Types.DeleteTeamsConfiguredTeamResult) => void): Request<Chatbot.Types.DeleteTeamsConfiguredTeamResult, AWSError>;
  /**
   * Deletes a Teams user identity
   */
  deleteMicrosoftTeamsUserIdentity(params: Chatbot.Types.DeleteMicrosoftTeamsUserIdentityRequest, callback?: (err: AWSError, data: Chatbot.Types.DeleteMicrosoftTeamsUserIdentityResult) => void): Request<Chatbot.Types.DeleteMicrosoftTeamsUserIdentityResult, AWSError>;
  /**
   * Deletes a Teams user identity
   */
  deleteMicrosoftTeamsUserIdentity(callback?: (err: AWSError, data: Chatbot.Types.DeleteMicrosoftTeamsUserIdentityResult) => void): Request<Chatbot.Types.DeleteMicrosoftTeamsUserIdentityResult, AWSError>;
  /**
   * Deletes Slack Channel Configuration
   */
  deleteSlackChannelConfiguration(params: Chatbot.Types.DeleteSlackChannelConfigurationRequest, callback?: (err: AWSError, data: Chatbot.Types.DeleteSlackChannelConfigurationResult) => void): Request<Chatbot.Types.DeleteSlackChannelConfigurationResult, AWSError>;
  /**
   * Deletes Slack Channel Configuration
   */
  deleteSlackChannelConfiguration(callback?: (err: AWSError, data: Chatbot.Types.DeleteSlackChannelConfigurationResult) => void): Request<Chatbot.Types.DeleteSlackChannelConfigurationResult, AWSError>;
  /**
   * Deletes a Slack user identity
   */
  deleteSlackUserIdentity(params: Chatbot.Types.DeleteSlackUserIdentityRequest, callback?: (err: AWSError, data: Chatbot.Types.DeleteSlackUserIdentityResult) => void): Request<Chatbot.Types.DeleteSlackUserIdentityResult, AWSError>;
  /**
   * Deletes a Slack user identity
   */
  deleteSlackUserIdentity(callback?: (err: AWSError, data: Chatbot.Types.DeleteSlackUserIdentityResult) => void): Request<Chatbot.Types.DeleteSlackUserIdentityResult, AWSError>;
  /**
   * Deletes the Slack workspace authorization that allows channels to be configured in that workspace. This requires all configured channels in the workspace to be deleted.
   */
  deleteSlackWorkspaceAuthorization(params: Chatbot.Types.DeleteSlackWorkspaceAuthorizationRequest, callback?: (err: AWSError, data: Chatbot.Types.DeleteSlackWorkspaceAuthorizationResult) => void): Request<Chatbot.Types.DeleteSlackWorkspaceAuthorizationResult, AWSError>;
  /**
   * Deletes the Slack workspace authorization that allows channels to be configured in that workspace. This requires all configured channels in the workspace to be deleted.
   */
  deleteSlackWorkspaceAuthorization(callback?: (err: AWSError, data: Chatbot.Types.DeleteSlackWorkspaceAuthorizationResult) => void): Request<Chatbot.Types.DeleteSlackWorkspaceAuthorizationResult, AWSError>;
  /**
   * Lists Chime Webhook Configurations optionally filtered by ChatConfigurationArn
   */
  describeChimeWebhookConfigurations(params: Chatbot.Types.DescribeChimeWebhookConfigurationsRequest, callback?: (err: AWSError, data: Chatbot.Types.DescribeChimeWebhookConfigurationsResult) => void): Request<Chatbot.Types.DescribeChimeWebhookConfigurationsResult, AWSError>;
  /**
   * Lists Chime Webhook Configurations optionally filtered by ChatConfigurationArn
   */
  describeChimeWebhookConfigurations(callback?: (err: AWSError, data: Chatbot.Types.DescribeChimeWebhookConfigurationsResult) => void): Request<Chatbot.Types.DescribeChimeWebhookConfigurationsResult, AWSError>;
  /**
   * Lists Slack Channel Configurations optionally filtered by ChatConfigurationArn
   */
  describeSlackChannelConfigurations(params: Chatbot.Types.DescribeSlackChannelConfigurationsRequest, callback?: (err: AWSError, data: Chatbot.Types.DescribeSlackChannelConfigurationsResult) => void): Request<Chatbot.Types.DescribeSlackChannelConfigurationsResult, AWSError>;
  /**
   * Lists Slack Channel Configurations optionally filtered by ChatConfigurationArn
   */
  describeSlackChannelConfigurations(callback?: (err: AWSError, data: Chatbot.Types.DescribeSlackChannelConfigurationsResult) => void): Request<Chatbot.Types.DescribeSlackChannelConfigurationsResult, AWSError>;
  /**
   * Lists all Slack user identities with a mapped role.
   */
  describeSlackUserIdentities(params: Chatbot.Types.DescribeSlackUserIdentitiesRequest, callback?: (err: AWSError, data: Chatbot.Types.DescribeSlackUserIdentitiesResult) => void): Request<Chatbot.Types.DescribeSlackUserIdentitiesResult, AWSError>;
  /**
   * Lists all Slack user identities with a mapped role.
   */
  describeSlackUserIdentities(callback?: (err: AWSError, data: Chatbot.Types.DescribeSlackUserIdentitiesResult) => void): Request<Chatbot.Types.DescribeSlackUserIdentitiesResult, AWSError>;
  /**
   * Lists all authorized Slack Workspaces for AWS Account
   */
  describeSlackWorkspaces(params: Chatbot.Types.DescribeSlackWorkspacesRequest, callback?: (err: AWSError, data: Chatbot.Types.DescribeSlackWorkspacesResult) => void): Request<Chatbot.Types.DescribeSlackWorkspacesResult, AWSError>;
  /**
   * Lists all authorized Slack Workspaces for AWS Account
   */
  describeSlackWorkspaces(callback?: (err: AWSError, data: Chatbot.Types.DescribeSlackWorkspacesResult) => void): Request<Chatbot.Types.DescribeSlackWorkspacesResult, AWSError>;
  /**
   * Get Chatbot account level preferences
   */
  getAccountPreferences(params: Chatbot.Types.GetAccountPreferencesRequest, callback?: (err: AWSError, data: Chatbot.Types.GetAccountPreferencesResult) => void): Request<Chatbot.Types.GetAccountPreferencesResult, AWSError>;
  /**
   * Get Chatbot account level preferences
   */
  getAccountPreferences(callback?: (err: AWSError, data: Chatbot.Types.GetAccountPreferencesResult) => void): Request<Chatbot.Types.GetAccountPreferencesResult, AWSError>;
  /**
   * Get a single MS Teams Channel Configurations
   */
  getMicrosoftTeamsChannelConfiguration(params: Chatbot.Types.GetTeamsChannelConfigurationRequest, callback?: (err: AWSError, data: Chatbot.Types.GetTeamsChannelConfigurationResult) => void): Request<Chatbot.Types.GetTeamsChannelConfigurationResult, AWSError>;
  /**
   * Get a single MS Teams Channel Configurations
   */
  getMicrosoftTeamsChannelConfiguration(callback?: (err: AWSError, data: Chatbot.Types.GetTeamsChannelConfigurationResult) => void): Request<Chatbot.Types.GetTeamsChannelConfigurationResult, AWSError>;
  /**
   * Lists MS Teams Channel Configurations optionally filtered by TeamId
   */
  listMicrosoftTeamsChannelConfigurations(params: Chatbot.Types.ListTeamsChannelConfigurationsRequest, callback?: (err: AWSError, data: Chatbot.Types.ListTeamsChannelConfigurationsResult) => void): Request<Chatbot.Types.ListTeamsChannelConfigurationsResult, AWSError>;
  /**
   * Lists MS Teams Channel Configurations optionally filtered by TeamId
   */
  listMicrosoftTeamsChannelConfigurations(callback?: (err: AWSError, data: Chatbot.Types.ListTeamsChannelConfigurationsResult) => void): Request<Chatbot.Types.ListTeamsChannelConfigurationsResult, AWSError>;
  /**
   * Lists all authorized MS teams for AWS Account
   */
  listMicrosoftTeamsConfiguredTeams(params: Chatbot.Types.ListMicrosoftTeamsConfiguredTeamsRequest, callback?: (err: AWSError, data: Chatbot.Types.ListMicrosoftTeamsConfiguredTeamsResult) => void): Request<Chatbot.Types.ListMicrosoftTeamsConfiguredTeamsResult, AWSError>;
  /**
   * Lists all authorized MS teams for AWS Account
   */
  listMicrosoftTeamsConfiguredTeams(callback?: (err: AWSError, data: Chatbot.Types.ListMicrosoftTeamsConfiguredTeamsResult) => void): Request<Chatbot.Types.ListMicrosoftTeamsConfiguredTeamsResult, AWSError>;
  /**
   * Lists all Microsoft Teams user identities with a mapped role.
   */
  listMicrosoftTeamsUserIdentities(params: Chatbot.Types.ListMicrosoftTeamsUserIdentitiesRequest, callback?: (err: AWSError, data: Chatbot.Types.ListMicrosoftTeamsUserIdentitiesResult) => void): Request<Chatbot.Types.ListMicrosoftTeamsUserIdentitiesResult, AWSError>;
  /**
   * Lists all Microsoft Teams user identities with a mapped role.
   */
  listMicrosoftTeamsUserIdentities(callback?: (err: AWSError, data: Chatbot.Types.ListMicrosoftTeamsUserIdentitiesResult) => void): Request<Chatbot.Types.ListMicrosoftTeamsUserIdentitiesResult, AWSError>;
  /**
   * Update Chatbot account level preferences
   */
  updateAccountPreferences(params: Chatbot.Types.UpdateAccountPreferencesRequest, callback?: (err: AWSError, data: Chatbot.Types.UpdateAccountPreferencesResult) => void): Request<Chatbot.Types.UpdateAccountPreferencesResult, AWSError>;
  /**
   * Update Chatbot account level preferences
   */
  updateAccountPreferences(callback?: (err: AWSError, data: Chatbot.Types.UpdateAccountPreferencesResult) => void): Request<Chatbot.Types.UpdateAccountPreferencesResult, AWSError>;
  /**
   * Updates a Chime Webhook Configuration
   */
  updateChimeWebhookConfiguration(params: Chatbot.Types.UpdateChimeWebhookConfigurationRequest, callback?: (err: AWSError, data: Chatbot.Types.UpdateChimeWebhookConfigurationResult) => void): Request<Chatbot.Types.UpdateChimeWebhookConfigurationResult, AWSError>;
  /**
   * Updates a Chime Webhook Configuration
   */
  updateChimeWebhookConfiguration(callback?: (err: AWSError, data: Chatbot.Types.UpdateChimeWebhookConfigurationResult) => void): Request<Chatbot.Types.UpdateChimeWebhookConfigurationResult, AWSError>;
  /**
   * Updates MS Teams Channel Configuration
   */
  updateMicrosoftTeamsChannelConfiguration(params: Chatbot.Types.UpdateTeamsChannelConfigurationRequest, callback?: (err: AWSError, data: Chatbot.Types.UpdateTeamsChannelConfigurationResult) => void): Request<Chatbot.Types.UpdateTeamsChannelConfigurationResult, AWSError>;
  /**
   * Updates MS Teams Channel Configuration
   */
  updateMicrosoftTeamsChannelConfiguration(callback?: (err: AWSError, data: Chatbot.Types.UpdateTeamsChannelConfigurationResult) => void): Request<Chatbot.Types.UpdateTeamsChannelConfigurationResult, AWSError>;
  /**
   * Updates Slack Channel Configuration
   */
  updateSlackChannelConfiguration(params: Chatbot.Types.UpdateSlackChannelConfigurationRequest, callback?: (err: AWSError, data: Chatbot.Types.UpdateSlackChannelConfigurationResult) => void): Request<Chatbot.Types.UpdateSlackChannelConfigurationResult, AWSError>;
  /**
   * Updates Slack Channel Configuration
   */
  updateSlackChannelConfiguration(callback?: (err: AWSError, data: Chatbot.Types.UpdateSlackChannelConfigurationResult) => void): Request<Chatbot.Types.UpdateSlackChannelConfigurationResult, AWSError>;
}
declare namespace Chatbot {
  export interface AccountPreferences {
    /**
     * Enables use of a user role requirement in your chat configuration.
     */
    UserAuthorizationRequired?: BooleanAccountPreference;
    /**
     * Turns on training data collection. This helps improve the AWS Chatbot experience by allowing AWS Chatbot to store and use your customer information, such as AWS Chatbot configurations, notifications, user inputs, AWS Chatbot generated responses, and interaction data. This data helps us to continuously improve and develop Artificial Intelligence (AI) technologies. Your data is not shared with any third parties and is protected using sophisticated controls to prevent unauthorized access and misuse. AWS Chatbot does not store or use interactions in chat channels with Amazon Q for training AWS Chatbot’s AI technologies.
     */
    TrainingDataCollectionEnabled?: BooleanAccountPreference;
  }
  export type Arn = string;
  export type AwsUserIdentity = string;
  export type BooleanAccountPreference = boolean;
  export type ChatConfigurationArn = string;
  export interface ChimeWebhookConfiguration {
    /**
     * Description of the webhook. Recommend using the convention `RoomName/WebhookName`. See Chime setup tutorial for more details: https://docs.aws.amazon.com/chatbot/latest/adminguide/chime-setup.html.
     */
    WebhookDescription: ChimeWebhookDescription;
    /**
     * The ARN of the ChimeWebhookConfiguration.
     */
    ChatConfigurationArn: ChatConfigurationArn;
    /**
     * The ARN of the IAM role that defines the permissions for AWS Chatbot. This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role. For more information, see IAM Policies for AWS Chatbot.
     */
    IamRoleArn: Arn;
    /**
     * The ARNs of the SNS topics that deliver notifications to AWS Chatbot.
     */
    SnsTopicArns: SnsTopicArnList;
    /**
     * The name of the configuration.
     */
    ConfigurationName?: ConfigurationName;
    /**
     * Specifies the logging level for this configuration. This property affects the log entries pushed to Amazon CloudWatch Logs.Logging levels include ERROR, INFO, or NONE.
     */
    LoggingLevel?: CustomerCwLogLevel;
  }
  export type ChimeWebhookConfigurationList = ChimeWebhookConfiguration[];
  export type ChimeWebhookDescription = string;
  export type ChimeWebhookUrl = string;
  export type ConfigurationName = string;
  export interface ConfiguredTeam {
    /**
     * The ID of the Microsoft Teams tenant.
     */
    TenantId: UUID;
    /**
     * The ID of the Microsoft Team authorized with AWS Chatbot. To get the team ID, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console. Then you can copy and paste the team ID from the console. For more details, see steps 1-4 in Get started with Microsoft Teams in the AWS Chatbot Administrator Guide.
     */
    TeamId: UUID;
    /**
     * The name of the Microsoft Teams Team.
     */
    TeamName?: UUID;
  }
  export type ConfiguredTeamsList = ConfiguredTeam[];
  export interface CreateChimeWebhookConfigurationRequest {
    /**
     * Description of the webhook. Recommend using the convention `RoomName/WebhookName`. See Chime setup tutorial for more details: https://docs.aws.amazon.com/chatbot/latest/adminguide/chime-setup.html.
     */
    WebhookDescription: ChimeWebhookDescription;
    /**
     * URL for the Chime webhook.
     */
    WebhookUrl: ChimeWebhookUrl;
    /**
     * The ARNs of the SNS topics that deliver notifications to AWS Chatbot.
     */
    SnsTopicArns: SnsTopicArnList;
    /**
     * This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role. For more information, see IAM Policies for AWS Chatbot.
     */
    IamRoleArn: Arn;
    /**
     * The name of the configuration.
     */
    ConfigurationName: ConfigurationName;
    /**
     * Logging levels include ERROR, INFO, or NONE.
     */
    LoggingLevel?: CustomerCwLogLevel;
  }
  export interface CreateChimeWebhookConfigurationResult {
    /**
     * Chime webhook configuration.
     */
    WebhookConfiguration?: ChimeWebhookConfiguration;
  }
  export interface CreateSlackChannelConfigurationRequest {
    /**
     * The ID of the Slack workspace authorized with AWS Chatbot.
     */
    SlackTeamId: SlackTeamId;
    /**
     * The ID of the Slack channel. To get the ID, open Slack, right click on the channel name in the left pane, then choose Copy Link. The channel ID is the 9-character string at the end of the URL. For example, ABCBBLZZZ.
     */
    SlackChannelId: SlackChannelId;
    /**
     * The name of the Slack Channel.
     */
    SlackChannelName?: SlackChannelDisplayName;
    /**
     * The ARNs of the SNS topics that deliver notifications to AWS Chatbot.
     */
    SnsTopicArns?: SnsTopicArnList;
    /**
     * The ARN of the IAM role that defines the permissions for AWS Chatbot. This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role. For more information, see IAM Policies for AWS Chatbot.
     */
    IamRoleArn: Arn;
    /**
     * The name of the configuration.
     */
    ConfigurationName: ConfigurationName;
    /**
     * Logging levels include ERROR, INFO, or NONE.
     */
    LoggingLevel?: CustomerCwLogLevel;
    /**
     * The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed 'AdministratorAccess' policy is applied by default if this is not set.
     */
    GuardrailPolicyArns?: GuardrailPolicyArnList;
    /**
     * Enables use of a user role requirement in your chat configuration.
     */
    UserAuthorizationRequired?: BooleanAccountPreference;
  }
  export interface CreateSlackChannelConfigurationResult {
    /**
     * The configuration for a Slack channel configured with AWS Chatbot.
     */
    ChannelConfiguration?: SlackChannelConfiguration;
  }
  export interface CreateTeamsChannelConfigurationRequest {
    /**
     * The ID of the Microsoft Teams channel.
     */
    ChannelId: TeamsChannelId;
    /**
     * The name of the Microsoft Teams channel.
     */
    ChannelName?: TeamsChannelName;
    /**
     * The ID of the Microsoft Team authorized with AWS Chatbot. To get the team ID, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console. Then you can copy and paste the team ID from the console. For more details, see steps 1-4 in Get started with Microsoft Teams in the AWS Chatbot Administrator Guide.
     */
    TeamId: UUID;
    /**
     * The name of the Microsoft Teams Team.
     */
    TeamName?: TeamName;
    /**
     * The ID of the Microsoft Teams tenant.
     */
    TenantId: UUID;
    /**
     * The ARNs of the SNS topics that deliver notifications to AWS Chatbot.
     */
    SnsTopicArns?: SnsTopicArnList;
    /**
     * The ARN of the IAM role that defines the permissions for AWS Chatbot. This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role. For more information, see IAM Policies for AWS Chatbot.
     */
    IamRoleArn: Arn;
    /**
     * The name of the configuration.
     */
    ConfigurationName: ConfigurationName;
    /**
     * Logging levels include ERROR, INFO, or NONE.
     */
    LoggingLevel?: CustomerCwLogLevel;
    /**
     * The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed 'AdministratorAccess' policy is applied by default if this is not set.
     */
    GuardrailPolicyArns?: GuardrailPolicyArnList;
    /**
     * Enables use of a user role requirement in your chat configuration.
     */
    UserAuthorizationRequired?: BooleanAccountPreference;
  }
  export interface CreateTeamsChannelConfigurationResult {
    /**
     * The configuration for a Microsoft Teams channel configured with AWS Chatbot.
     */
    ChannelConfiguration?: TeamsChannelConfiguration;
  }
  export type CustomerCwLogLevel = string;
  export interface DeleteChimeWebhookConfigurationRequest {
    /**
     * The ARN of the ChimeWebhookConfiguration to delete.
     */
    ChatConfigurationArn: ChatConfigurationArn;
  }
  export interface DeleteChimeWebhookConfigurationResult {
  }
  export interface DeleteMicrosoftTeamsUserIdentityRequest {
    /**
     * The ARN of the MicrosoftTeamsChannelConfiguration associated with the user identity to delete.
     */
    ChatConfigurationArn: ChatConfigurationArn;
    /**
     * Id from Microsoft Teams for user.
     */
    UserId: UUID;
  }
  export interface DeleteMicrosoftTeamsUserIdentityResult {
  }
  export interface DeleteSlackChannelConfigurationRequest {
    /**
     * The ARN of the SlackChannelConfiguration to delete.
     */
    ChatConfigurationArn: ChatConfigurationArn;
  }
  export interface DeleteSlackChannelConfigurationResult {
  }
  export interface DeleteSlackUserIdentityRequest {
    /**
     * The ARN of the SlackChannelConfiguration associated with the user identity to delete.
     */
    ChatConfigurationArn: ChatConfigurationArn;
    /**
     * The ID of the Slack workspace authorized with AWS Chatbot.
     */
    SlackTeamId: SlackTeamId;
    /**
     * The ID of the user in Slack.
     */
    SlackUserId: SlackUserId;
  }
  export interface DeleteSlackUserIdentityResult {
  }
  export interface DeleteSlackWorkspaceAuthorizationRequest {
    /**
     * The ID of the Slack workspace authorized with AWS Chatbot.
     */
    SlackTeamId: SlackTeamId;
  }
  export interface DeleteSlackWorkspaceAuthorizationResult {
  }
  export interface DeleteTeamsChannelConfigurationRequest {
    /**
     * The ARN of the MicrosoftTeamsChannelConfiguration to delete.
     */
    ChatConfigurationArn: ChatConfigurationArn;
  }
  export interface DeleteTeamsChannelConfigurationResult {
  }
  export interface DeleteTeamsConfiguredTeamRequest {
    /**
     * The ID of the Microsoft Team authorized with AWS Chatbot. To get the team ID, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console. Then you can copy and paste the team ID from the console. For more details, see steps 1-4 in Get started with Microsoft Teams in the AWS Chatbot Administrator Guide.
     */
    TeamId: UUID;
  }
  export interface DeleteTeamsConfiguredTeamResult {
  }
  export interface DescribeChimeWebhookConfigurationsRequest {
    /**
     * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
     */
    MaxResults?: MaxResults;
    /**
     * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
     */
    NextToken?: PaginationToken;
    /**
     * An optional ARN of a ChimeWebhookConfiguration to describe.
     */
    ChatConfigurationArn?: ChatConfigurationArn;
  }
  export interface DescribeChimeWebhookConfigurationsResult {
    /**
     * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
     */
    NextToken?: PaginationToken;
    /**
     * A list of Chime webhooks associated with the account.
     */
    WebhookConfigurations?: ChimeWebhookConfigurationList;
  }
  export interface DescribeSlackChannelConfigurationsRequest {
    /**
     * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
     */
    MaxResults?: MaxResults;
    /**
     * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
     */
    NextToken?: PaginationToken;
    /**
     * An optional ARN of a SlackChannelConfiguration to describe.
     */
    ChatConfigurationArn?: ChatConfigurationArn;
  }
  export interface DescribeSlackChannelConfigurationsResult {
    /**
     * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
     */
    NextToken?: PaginationToken;
    /**
     * A list of Slack channel configurations.
     */
    SlackChannelConfigurations?: SlackChannelConfigurationList;
  }
  export interface DescribeSlackUserIdentitiesRequest {
    /**
     * The ARN of the SlackChannelConfiguration associated with the user identities to describe.
     */
    ChatConfigurationArn?: ChatConfigurationArn;
    /**
     * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
     */
    NextToken?: PaginationToken;
    /**
     * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
     */
    MaxResults?: MaxResults;
  }
  export interface DescribeSlackUserIdentitiesResult {
    /**
     * A list of Slack User Identities.
     */
    SlackUserIdentities?: SlackUserIdentitiesList;
    /**
     * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
     */
    NextToken?: PaginationToken;
  }
  export interface DescribeSlackWorkspacesRequest {
    /**
     * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
     */
    MaxResults?: MaxResults;
    /**
     * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
     */
    NextToken?: PaginationToken;
  }
  export interface DescribeSlackWorkspacesResult {
    /**
     * A list of Slack Workspaces registered with AWS Chatbot.
     */
    SlackWorkspaces?: SlackWorkspacesList;
    /**
     * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
     */
    NextToken?: PaginationToken;
  }
  export interface GetAccountPreferencesRequest {
  }
  export interface GetAccountPreferencesResult {
    /**
     * Preferences which apply for AWS Chatbot usage in the calling AWS account.
     */
    AccountPreferences?: AccountPreferences;
  }
  export interface GetTeamsChannelConfigurationRequest {
    /**
     * The ARN of the MicrosoftTeamsChannelConfiguration to retrieve.
     */
    ChatConfigurationArn: ChatConfigurationArn;
  }
  export interface GetTeamsChannelConfigurationResult {
    /**
     * The configuration for a Microsoft Teams channel configured with AWS Chatbot.
     */
    ChannelConfiguration?: TeamsChannelConfiguration;
  }
  export type GuardrailPolicyArn = string;
  export type GuardrailPolicyArnList = GuardrailPolicyArn[];
  export interface ListMicrosoftTeamsConfiguredTeamsRequest {
    /**
     * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
     */
    MaxResults?: MaxResults;
    /**
     * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
     */
    NextToken?: PaginationToken;
  }
  export interface ListMicrosoftTeamsConfiguredTeamsResult {
    /**
     * A list of teams in Microsoft Teams that have been configured with AWS Chatbot.
     */
    ConfiguredTeams?: ConfiguredTeamsList;
    /**
     * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
     */
    NextToken?: PaginationToken;
  }
  export interface ListMicrosoftTeamsUserIdentitiesRequest {
    /**
     * The ARN of the MicrosoftTeamsChannelConfiguration associated with the user identities to list.
     */
    ChatConfigurationArn?: ChatConfigurationArn;
    /**
     * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
     */
    NextToken?: PaginationToken;
    /**
     * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
     */
    MaxResults?: MaxResults;
  }
  export interface ListMicrosoftTeamsUserIdentitiesResult {
    /**
     * User level permissions associated to a channel configuration.
     */
    TeamsUserIdentities?: TeamsUserIdentitiesList;
    /**
     * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
     */
    NextToken?: PaginationToken;
  }
  export interface ListTeamsChannelConfigurationsRequest {
    /**
     * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
     */
    MaxResults?: MaxResults;
    /**
     * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
     */
    NextToken?: PaginationToken;
    /**
     * The ID of the Microsoft Team authorized with AWS Chatbot. To get the team ID, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console. Then you can copy and paste the team ID from the console. For more details, see steps 1-4 in Get started with Microsoft Teams in the AWS Chatbot Administrator Guide.
     */
    TeamId?: UUID;
  }
  export interface ListTeamsChannelConfigurationsResult {
    /**
     * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
     */
    NextToken?: PaginationToken;
    /**
     * A list of AWS Chatbot channel configurations for Microsoft Teams.
     */
    TeamChannelConfigurations?: TeamChannelConfigurationsList;
  }
  export type MaxResults = number;
  export type PaginationToken = string;
  export interface SlackChannelConfiguration {
    /**
     * Name of the Slack Workspace.
     */
    SlackTeamName: SlackTeamName;
    /**
     * The ID of the Slack workspace authorized with AWS Chatbot.
     */
    SlackTeamId: SlackTeamId;
    /**
     * The ID of the Slack channel. To get the ID, open Slack, right click on the channel name in the left pane, then choose Copy Link. The channel ID is the 9-character string at the end of the URL. For example, ABCBBLZZZ.
     */
    SlackChannelId: SlackChannelId;
    /**
     * The name of the Slack Channel.
     */
    SlackChannelName: SlackChannelDisplayName;
    /**
     * The ARN of the SlackChannelConfiguration.
     */
    ChatConfigurationArn: ChatConfigurationArn;
    /**
     * The ARN of the IAM role that defines the permissions for AWS Chatbot. This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role. For more information, see IAM Policies for AWS Chatbot.
     */
    IamRoleArn: Arn;
    /**
     * The ARNs of the SNS topics that deliver notifications to AWS Chatbot.
     */
    SnsTopicArns: SnsTopicArnList;
    /**
     * The name of the configuration.
     */
    ConfigurationName?: ConfigurationName;
    /**
     * Logging levels include ERROR, INFO, or NONE.
     */
    LoggingLevel?: CustomerCwLogLevel;
    /**
     * The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed 'AdministratorAccess' policy is applied by default if this is not set.
     */
    GuardrailPolicyArns?: GuardrailPolicyArnList;
    /**
     * Enables use of a user role requirement in your chat configuration.
     */
    UserAuthorizationRequired?: BooleanAccountPreference;
  }
  export type SlackChannelConfigurationList = SlackChannelConfiguration[];
  export type SlackChannelDisplayName = string;
  export type SlackChannelId = string;
  export type SlackTeamId = string;
  export type SlackTeamName = string;
  export type SlackUserId = string;
  export type SlackUserIdentitiesList = SlackUserIdentity[];
  export interface SlackUserIdentity {
    /**
     * The ARN of the IAM role that defines the permissions for AWS Chatbot. This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role. For more information, see IAM Policies for AWS Chatbot.
     */
    IamRoleArn: Arn;
    /**
     * The ARN of the SlackChannelConfiguration associated with the user identity.
     */
    ChatConfigurationArn: ChatConfigurationArn;
    /**
     * The ID of the Slack workspace authorized with AWS Chatbot.
     */
    SlackTeamId: SlackTeamId;
    /**
     * The ID of the user in Slack.
     */
    SlackUserId: SlackUserId;
    /**
     * The AWS user identity ARN used to associate a Slack User Identity with an IAM Role.
     */
    AwsUserIdentity?: AwsUserIdentity;
  }
  export interface SlackWorkspace {
    /**
     * The ID of the Slack workspace authorized with AWS Chatbot.
     */
    SlackTeamId: SlackTeamId;
    /**
     * Name of the Slack Workspace.
     */
    SlackTeamName: SlackTeamName;
  }
  export type SlackWorkspacesList = SlackWorkspace[];
  export type SnsTopicArnList = Arn[];
  export type String = string;
  export type TeamChannelConfigurationsList = TeamsChannelConfiguration[];
  export type TeamName = string;
  export interface TeamsChannelConfiguration {
    /**
     * The ID of the Microsoft Teams channel.
     */
    ChannelId: TeamsChannelId;
    /**
     * The name of the Microsoft Teams channel.
     */
    ChannelName?: TeamsChannelName;
    /**
     * The ID of the Microsoft Team authorized with AWS Chatbot. To get the team ID, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console. Then you can copy and paste the team ID from the console. For more details, see steps 1-4 in Get started with Microsoft Teams in the AWS Chatbot Administrator Guide.
     */
    TeamId: UUID;
    /**
     * The name of the Microsoft Teams Team.
     */
    TeamName?: String;
    /**
     * The ID of the Microsoft Teams tenant.
     */
    TenantId: UUID;
    /**
     * The ARN of the MicrosoftTeamsChannelConfiguration.
     */
    ChatConfigurationArn: ChatConfigurationArn;
    /**
     * The ARN of the IAM role that defines the permissions for AWS Chatbot. This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role. For more information, see IAM Policies for AWS Chatbot.
     */
    IamRoleArn: Arn;
    /**
     * The ARNs of the SNS topics that deliver notifications to AWS Chatbot.
     */
    SnsTopicArns: SnsTopicArnList;
    /**
     * The name of the configuration.
     */
    ConfigurationName?: ConfigurationName;
    /**
     * Logging levels include ERROR, INFO, or NONE.
     */
    LoggingLevel?: CustomerCwLogLevel;
    /**
     * The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed 'AdministratorAccess' policy is applied by default if this is not set.
     */
    GuardrailPolicyArns?: GuardrailPolicyArnList;
    /**
     * Enables use of a user role requirement in your chat configuration.
     */
    UserAuthorizationRequired?: BooleanAccountPreference;
  }
  export type TeamsChannelId = string;
  export type TeamsChannelName = string;
  export type TeamsUserIdentitiesList = TeamsUserIdentity[];
  export interface TeamsUserIdentity {
    /**
     * The ARN of the IAM role that defines the permissions for AWS Chatbot. This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role. For more information, see IAM Policies for AWS Chatbot.
     */
    IamRoleArn: Arn;
    /**
     * The ARN of the MicrosoftTeamsChannelConfiguration associated with the user identity.
     */
    ChatConfigurationArn: ChatConfigurationArn;
    /**
     * The ID of the Microsoft Team authorized with AWS Chatbot. To get the team ID, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console. Then you can copy and paste the team ID from the console. For more details, see steps 1-4 in Get started with Microsoft Teams in the AWS Chatbot Administrator Guide.
     */
    TeamId: UUID;
    /**
     * Id from Microsoft Teams for user.
     */
    UserId?: UUID;
    /**
     * The AWS user identity ARN used to associate a Microsoft Teams User Identity with an IAM Role.
     */
    AwsUserIdentity?: AwsUserIdentity;
    /**
     * The ID of the Microsoft Teams channel.
     */
    TeamsChannelId?: TeamsChannelId;
    /**
     * The ID of the Microsoft Teams tenant.
     */
    TeamsTenantId?: UUID;
  }
  export type UUID = string;
  export interface UpdateAccountPreferencesRequest {
    /**
     * Enables use of a user role requirement in your chat configuration.
     */
    UserAuthorizationRequired?: BooleanAccountPreference;
    /**
     * Turns on training data collection. This helps improve the AWS Chatbot experience by allowing AWS Chatbot to store and use your customer information, such as AWS Chatbot configurations, notifications, user inputs, AWS Chatbot generated responses, and interaction data. This data helps us to continuously improve and develop Artificial Intelligence (AI) technologies. Your data is not shared with any third parties and is protected using sophisticated controls to prevent unauthorized access and misuse. AWS Chatbot does not store or use interactions in chat channels with Amazon Q for training AWS Chatbot’s AI technologies.
     */
    TrainingDataCollectionEnabled?: BooleanAccountPreference;
  }
  export interface UpdateAccountPreferencesResult {
    /**
     * Preferences which apply for AWS Chatbot usage in the calling AWS account.
     */
    AccountPreferences?: AccountPreferences;
  }
  export interface UpdateChimeWebhookConfigurationRequest {
    /**
     * The ARN of the ChimeWebhookConfiguration to update.
     */
    ChatConfigurationArn: ChatConfigurationArn;
    /**
     * Description of the webhook. Recommend using the convention `RoomName/WebhookName`. See Chime setup tutorial for more details: https://docs.aws.amazon.com/chatbot/latest/adminguide/chime-setup.html.
     */
    WebhookDescription?: ChimeWebhookDescription;
    /**
     * URL for the Chime webhook.
     */
    WebhookUrl?: ChimeWebhookUrl;
    /**
     * The ARNs of the SNS topics that deliver notifications to AWS Chatbot.
     */
    SnsTopicArns?: SnsTopicArnList;
    /**
     * The ARN of the IAM role that defines the permissions for AWS Chatbot. This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role. For more information, see IAM Policies for AWS Chatbot.
     */
    IamRoleArn?: Arn;
    /**
     * Logging levels include ERROR, INFO, or NONE.
     */
    LoggingLevel?: CustomerCwLogLevel;
  }
  export interface UpdateChimeWebhookConfigurationResult {
    /**
     * Chime webhook configuration.
     */
    WebhookConfiguration?: ChimeWebhookConfiguration;
  }
  export interface UpdateSlackChannelConfigurationRequest {
    /**
     * The ARN of the SlackChannelConfiguration to update.
     */
    ChatConfigurationArn: ChatConfigurationArn;
    /**
     * The ID of the Slack channel. To get the ID, open Slack, right click on the channel name in the left pane, then choose Copy Link. The channel ID is the 9-character string at the end of the URL. For example, ABCBBLZZZ.
     */
    SlackChannelId: SlackChannelId;
    /**
     * The name of the Slack Channel.
     */
    SlackChannelName?: SlackChannelDisplayName;
    /**
     * The ARNs of the SNS topics that deliver notifications to AWS Chatbot.
     */
    SnsTopicArns?: SnsTopicArnList;
    /**
     * The ARN of the IAM role that defines the permissions for AWS Chatbot. This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role. For more information, see IAM Policies for AWS Chatbot.
     */
    IamRoleArn?: Arn;
    /**
     * Logging levels include ERROR, INFO, or NONE.
     */
    LoggingLevel?: CustomerCwLogLevel;
    /**
     * The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed 'AdministratorAccess' policy is applied by default if this is not set.
     */
    GuardrailPolicyArns?: GuardrailPolicyArnList;
    /**
     * Enables use of a user role requirement in your chat configuration.
     */
    UserAuthorizationRequired?: BooleanAccountPreference;
  }
  export interface UpdateSlackChannelConfigurationResult {
    /**
     * The configuration for a Slack channel configured with AWS Chatbot.
     */
    ChannelConfiguration?: SlackChannelConfiguration;
  }
  export interface UpdateTeamsChannelConfigurationRequest {
    /**
     * The ARN of the MicrosoftTeamsChannelConfiguration to update.
     */
    ChatConfigurationArn: ChatConfigurationArn;
    /**
     * The ID of the Microsoft Teams channel.
     */
    ChannelId: TeamsChannelId;
    /**
     * The name of the Microsoft Teams channel.
     */
    ChannelName?: TeamsChannelName;
    /**
     * The ARNs of the SNS topics that deliver notifications to AWS Chatbot.
     */
    SnsTopicArns?: SnsTopicArnList;
    /**
     * The ARN of the IAM role that defines the permissions for AWS Chatbot. This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role. For more information, see IAM Policies for AWS Chatbot.
     */
    IamRoleArn?: Arn;
    /**
     * Logging levels include ERROR, INFO, or NONE.
     */
    LoggingLevel?: CustomerCwLogLevel;
    /**
     * The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed 'AdministratorAccess' policy is applied by default if this is not set.
     */
    GuardrailPolicyArns?: GuardrailPolicyArnList;
    /**
     * Enables use of a user role requirement in your chat configuration.
     */
    UserAuthorizationRequired?: BooleanAccountPreference;
  }
  export interface UpdateTeamsChannelConfigurationResult {
    /**
     * The configuration for a Microsoft Teams channel configured with AWS Chatbot.
     */
    ChannelConfiguration?: TeamsChannelConfiguration;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-10-11"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Chatbot client.
   */
  export import Types = Chatbot;
}
export = Chatbot;
