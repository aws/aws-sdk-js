import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class MQ extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: MQ.Types.ClientConfiguration)
  config: Config & MQ.Types.ClientConfiguration;
  /**
   * Creates a broker. Note: This API is asynchronous.
   */
  createBroker(params: MQ.Types.CreateBrokerRequest, callback?: (err: AWSError, data: MQ.Types.CreateBrokerResponse) => void): Request<MQ.Types.CreateBrokerResponse, AWSError>;
  /**
   * Creates a broker. Note: This API is asynchronous.
   */
  createBroker(callback?: (err: AWSError, data: MQ.Types.CreateBrokerResponse) => void): Request<MQ.Types.CreateBrokerResponse, AWSError>;
  /**
   * Creates a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and version).
   */
  createConfiguration(params: MQ.Types.CreateConfigurationRequest, callback?: (err: AWSError, data: MQ.Types.CreateConfigurationResponse) => void): Request<MQ.Types.CreateConfigurationResponse, AWSError>;
  /**
   * Creates a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and version).
   */
  createConfiguration(callback?: (err: AWSError, data: MQ.Types.CreateConfigurationResponse) => void): Request<MQ.Types.CreateConfigurationResponse, AWSError>;
  /**
   * Add a tag to a resource.
   */
  createTags(params: MQ.Types.CreateTagsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Add a tag to a resource.
   */
  createTags(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates an ActiveMQ user.
   */
  createUser(params: MQ.Types.CreateUserRequest, callback?: (err: AWSError, data: MQ.Types.CreateUserResponse) => void): Request<MQ.Types.CreateUserResponse, AWSError>;
  /**
   * Creates an ActiveMQ user.
   */
  createUser(callback?: (err: AWSError, data: MQ.Types.CreateUserResponse) => void): Request<MQ.Types.CreateUserResponse, AWSError>;
  /**
   * Deletes a broker. Note: This API is asynchronous.
   */
  deleteBroker(params: MQ.Types.DeleteBrokerRequest, callback?: (err: AWSError, data: MQ.Types.DeleteBrokerResponse) => void): Request<MQ.Types.DeleteBrokerResponse, AWSError>;
  /**
   * Deletes a broker. Note: This API is asynchronous.
   */
  deleteBroker(callback?: (err: AWSError, data: MQ.Types.DeleteBrokerResponse) => void): Request<MQ.Types.DeleteBrokerResponse, AWSError>;
  /**
   * Removes a tag from a resource.
   */
  deleteTags(params: MQ.Types.DeleteTagsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes a tag from a resource.
   */
  deleteTags(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an ActiveMQ user.
   */
  deleteUser(params: MQ.Types.DeleteUserRequest, callback?: (err: AWSError, data: MQ.Types.DeleteUserResponse) => void): Request<MQ.Types.DeleteUserResponse, AWSError>;
  /**
   * Deletes an ActiveMQ user.
   */
  deleteUser(callback?: (err: AWSError, data: MQ.Types.DeleteUserResponse) => void): Request<MQ.Types.DeleteUserResponse, AWSError>;
  /**
   * Returns information about the specified broker.
   */
  describeBroker(params: MQ.Types.DescribeBrokerRequest, callback?: (err: AWSError, data: MQ.Types.DescribeBrokerResponse) => void): Request<MQ.Types.DescribeBrokerResponse, AWSError>;
  /**
   * Returns information about the specified broker.
   */
  describeBroker(callback?: (err: AWSError, data: MQ.Types.DescribeBrokerResponse) => void): Request<MQ.Types.DescribeBrokerResponse, AWSError>;
  /**
   * Describe available engine types and versions.
   */
  describeBrokerEngineTypes(params: MQ.Types.DescribeBrokerEngineTypesRequest, callback?: (err: AWSError, data: MQ.Types.DescribeBrokerEngineTypesResponse) => void): Request<MQ.Types.DescribeBrokerEngineTypesResponse, AWSError>;
  /**
   * Describe available engine types and versions.
   */
  describeBrokerEngineTypes(callback?: (err: AWSError, data: MQ.Types.DescribeBrokerEngineTypesResponse) => void): Request<MQ.Types.DescribeBrokerEngineTypesResponse, AWSError>;
  /**
   * Describe available broker instance options.
   */
  describeBrokerInstanceOptions(params: MQ.Types.DescribeBrokerInstanceOptionsRequest, callback?: (err: AWSError, data: MQ.Types.DescribeBrokerInstanceOptionsResponse) => void): Request<MQ.Types.DescribeBrokerInstanceOptionsResponse, AWSError>;
  /**
   * Describe available broker instance options.
   */
  describeBrokerInstanceOptions(callback?: (err: AWSError, data: MQ.Types.DescribeBrokerInstanceOptionsResponse) => void): Request<MQ.Types.DescribeBrokerInstanceOptionsResponse, AWSError>;
  /**
   * Returns information about the specified configuration.
   */
  describeConfiguration(params: MQ.Types.DescribeConfigurationRequest, callback?: (err: AWSError, data: MQ.Types.DescribeConfigurationResponse) => void): Request<MQ.Types.DescribeConfigurationResponse, AWSError>;
  /**
   * Returns information about the specified configuration.
   */
  describeConfiguration(callback?: (err: AWSError, data: MQ.Types.DescribeConfigurationResponse) => void): Request<MQ.Types.DescribeConfigurationResponse, AWSError>;
  /**
   * Returns the specified configuration revision for the specified configuration.
   */
  describeConfigurationRevision(params: MQ.Types.DescribeConfigurationRevisionRequest, callback?: (err: AWSError, data: MQ.Types.DescribeConfigurationRevisionResponse) => void): Request<MQ.Types.DescribeConfigurationRevisionResponse, AWSError>;
  /**
   * Returns the specified configuration revision for the specified configuration.
   */
  describeConfigurationRevision(callback?: (err: AWSError, data: MQ.Types.DescribeConfigurationRevisionResponse) => void): Request<MQ.Types.DescribeConfigurationRevisionResponse, AWSError>;
  /**
   * Returns information about an ActiveMQ user.
   */
  describeUser(params: MQ.Types.DescribeUserRequest, callback?: (err: AWSError, data: MQ.Types.DescribeUserResponse) => void): Request<MQ.Types.DescribeUserResponse, AWSError>;
  /**
   * Returns information about an ActiveMQ user.
   */
  describeUser(callback?: (err: AWSError, data: MQ.Types.DescribeUserResponse) => void): Request<MQ.Types.DescribeUserResponse, AWSError>;
  /**
   * Returns a list of all brokers.
   */
  listBrokers(params: MQ.Types.ListBrokersRequest, callback?: (err: AWSError, data: MQ.Types.ListBrokersResponse) => void): Request<MQ.Types.ListBrokersResponse, AWSError>;
  /**
   * Returns a list of all brokers.
   */
  listBrokers(callback?: (err: AWSError, data: MQ.Types.ListBrokersResponse) => void): Request<MQ.Types.ListBrokersResponse, AWSError>;
  /**
   * Returns a list of all revisions for the specified configuration.
   */
  listConfigurationRevisions(params: MQ.Types.ListConfigurationRevisionsRequest, callback?: (err: AWSError, data: MQ.Types.ListConfigurationRevisionsResponse) => void): Request<MQ.Types.ListConfigurationRevisionsResponse, AWSError>;
  /**
   * Returns a list of all revisions for the specified configuration.
   */
  listConfigurationRevisions(callback?: (err: AWSError, data: MQ.Types.ListConfigurationRevisionsResponse) => void): Request<MQ.Types.ListConfigurationRevisionsResponse, AWSError>;
  /**
   * Returns a list of all configurations.
   */
  listConfigurations(params: MQ.Types.ListConfigurationsRequest, callback?: (err: AWSError, data: MQ.Types.ListConfigurationsResponse) => void): Request<MQ.Types.ListConfigurationsResponse, AWSError>;
  /**
   * Returns a list of all configurations.
   */
  listConfigurations(callback?: (err: AWSError, data: MQ.Types.ListConfigurationsResponse) => void): Request<MQ.Types.ListConfigurationsResponse, AWSError>;
  /**
   * Lists tags for a resource.
   */
  listTags(params: MQ.Types.ListTagsRequest, callback?: (err: AWSError, data: MQ.Types.ListTagsResponse) => void): Request<MQ.Types.ListTagsResponse, AWSError>;
  /**
   * Lists tags for a resource.
   */
  listTags(callback?: (err: AWSError, data: MQ.Types.ListTagsResponse) => void): Request<MQ.Types.ListTagsResponse, AWSError>;
  /**
   * Returns a list of all ActiveMQ users.
   */
  listUsers(params: MQ.Types.ListUsersRequest, callback?: (err: AWSError, data: MQ.Types.ListUsersResponse) => void): Request<MQ.Types.ListUsersResponse, AWSError>;
  /**
   * Returns a list of all ActiveMQ users.
   */
  listUsers(callback?: (err: AWSError, data: MQ.Types.ListUsersResponse) => void): Request<MQ.Types.ListUsersResponse, AWSError>;
  /**
   * Reboots a broker. Note: This API is asynchronous.
   */
  rebootBroker(params: MQ.Types.RebootBrokerRequest, callback?: (err: AWSError, data: MQ.Types.RebootBrokerResponse) => void): Request<MQ.Types.RebootBrokerResponse, AWSError>;
  /**
   * Reboots a broker. Note: This API is asynchronous.
   */
  rebootBroker(callback?: (err: AWSError, data: MQ.Types.RebootBrokerResponse) => void): Request<MQ.Types.RebootBrokerResponse, AWSError>;
  /**
   * Adds a pending configuration change to a broker.
   */
  updateBroker(params: MQ.Types.UpdateBrokerRequest, callback?: (err: AWSError, data: MQ.Types.UpdateBrokerResponse) => void): Request<MQ.Types.UpdateBrokerResponse, AWSError>;
  /**
   * Adds a pending configuration change to a broker.
   */
  updateBroker(callback?: (err: AWSError, data: MQ.Types.UpdateBrokerResponse) => void): Request<MQ.Types.UpdateBrokerResponse, AWSError>;
  /**
   * Updates the specified configuration.
   */
  updateConfiguration(params: MQ.Types.UpdateConfigurationRequest, callback?: (err: AWSError, data: MQ.Types.UpdateConfigurationResponse) => void): Request<MQ.Types.UpdateConfigurationResponse, AWSError>;
  /**
   * Updates the specified configuration.
   */
  updateConfiguration(callback?: (err: AWSError, data: MQ.Types.UpdateConfigurationResponse) => void): Request<MQ.Types.UpdateConfigurationResponse, AWSError>;
  /**
   * Updates the information for an ActiveMQ user.
   */
  updateUser(params: MQ.Types.UpdateUserRequest, callback?: (err: AWSError, data: MQ.Types.UpdateUserResponse) => void): Request<MQ.Types.UpdateUserResponse, AWSError>;
  /**
   * Updates the information for an ActiveMQ user.
   */
  updateUser(callback?: (err: AWSError, data: MQ.Types.UpdateUserResponse) => void): Request<MQ.Types.UpdateUserResponse, AWSError>;
}
declare namespace MQ {
  export interface AvailabilityZone {
    /**
     * Id for the availability zone.
     */
    Name?: __string;
  }
  export interface BrokerEngineType {
    /**
     * The type of broker engine.
     */
    EngineType?: EngineType;
    /**
     * The list of engine versions.
     */
    EngineVersions?: __listOfEngineVersion;
  }
  export interface BrokerInstance {
    /**
     * The URL of the broker's ActiveMQ Web Console.
     */
    ConsoleURL?: __string;
    /**
     * The broker's wire-level protocol endpoints.
     */
    Endpoints?: __listOf__string;
    /**
     * The IP address of the Elastic Network Interface (ENI) attached to the broker.
     */
    IpAddress?: __string;
  }
  export interface BrokerInstanceOption {
    /**
     * The list of available az.
     */
    AvailabilityZones?: __listOfAvailabilityZone;
    /**
     * The type of broker engine.
     */
    EngineType?: EngineType;
    /**
     * The type of broker instance.
     */
    HostInstanceType?: __string;
    /**
     * The list of supported engine versions.
     */
    SupportedEngineVersions?: __listOf__string;
  }
  export type BrokerState = "CREATION_IN_PROGRESS"|"CREATION_FAILED"|"DELETION_IN_PROGRESS"|"RUNNING"|"REBOOT_IN_PROGRESS"|string;
  export interface BrokerSummary {
    /**
     * The Amazon Resource Name (ARN) of the broker.
     */
    BrokerArn?: __string;
    /**
     * The unique ID that Amazon MQ generates for the broker.
     */
    BrokerId?: __string;
    /**
     * The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters.
     */
    BrokerName?: __string;
    /**
     * The status of the broker.
     */
    BrokerState?: BrokerState;
    /**
     * The time when the broker was created.
     */
    Created?: __timestampIso8601;
    /**
     * Required. The deployment mode of the broker.
     */
    DeploymentMode?: DeploymentMode;
    /**
     * The broker's instance type.
     */
    HostInstanceType?: __string;
  }
  export type ChangeType = "CREATE"|"UPDATE"|"DELETE"|string;
  export interface Configuration {
    /**
     * Required. The ARN of the configuration.
     */
    Arn?: __string;
    /**
     * Required. The date and time of the configuration revision.
     */
    Created?: __timestampIso8601;
    /**
     * Required. The description of the configuration.
     */
    Description?: __string;
    /**
     * Required. The type of broker engine. Note: Currently, Amazon MQ supports only ACTIVEMQ.
     */
    EngineType?: EngineType;
    /**
     * Required. The version of the broker engine. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html
     */
    EngineVersion?: __string;
    /**
     * Required. The unique ID that Amazon MQ generates for the configuration.
     */
    Id?: __string;
    /**
     * Required. The latest revision of the configuration.
     */
    LatestRevision?: ConfigurationRevision;
    /**
     * Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.
     */
    Name?: __string;
    /**
     * The list of all tags associated with this configuration.
     */
    Tags?: __mapOf__string;
  }
  export interface ConfigurationId {
    /**
     * Required. The unique ID that Amazon MQ generates for the configuration.
     */
    Id?: __string;
    /**
     * The revision number of the configuration.
     */
    Revision?: __integer;
  }
  export interface ConfigurationRevision {
    /**
     * Required. The date and time of the configuration revision.
     */
    Created?: __timestampIso8601;
    /**
     * The description of the configuration revision.
     */
    Description?: __string;
    /**
     * Required. The revision number of the configuration.
     */
    Revision?: __integer;
  }
  export interface Configurations {
    /**
     * The current configuration of the broker.
     */
    Current?: ConfigurationId;
    /**
     * The history of configurations applied to the broker.
     */
    History?: __listOfConfigurationId;
    /**
     * The pending configuration of the broker.
     */
    Pending?: ConfigurationId;
  }
  export interface CreateBrokerRequest {
    /**
     * Required. Enables automatic upgrades to new minor versions for brokers, as Apache releases the versions. The automatic upgrades occur during the maintenance window of the broker or after a manual broker reboot.
     */
    AutoMinorVersionUpgrade?: __boolean;
    /**
     * Required. The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters.
     */
    BrokerName?: __string;
    /**
     * A list of information about the configuration.
     */
    Configuration?: ConfigurationId;
    /**
     * The unique ID that the requester receives for the created broker. Amazon MQ passes your ID with the API action. Note: We recommend using a Universally Unique Identifier (UUID) for the creatorRequestId. You may omit the creatorRequestId if your application doesn't require idempotency.
     */
    CreatorRequestId?: __string;
    /**
     * Required. The deployment mode of the broker.
     */
    DeploymentMode?: DeploymentMode;
    /**
     * Required. The type of broker engine. Note: Currently, Amazon MQ supports only ACTIVEMQ.
     */
    EngineType?: EngineType;
    /**
     * Required. The version of the broker engine. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html
     */
    EngineVersion?: __string;
    /**
     * Required. The broker's instance type.
     */
    HostInstanceType?: __string;
    /**
     * Enables Amazon CloudWatch logging for brokers.
     */
    Logs?: Logs;
    /**
     * The parameters that determine the WeeklyStartTime.
     */
    MaintenanceWindowStartTime?: WeeklyStartTime;
    /**
     * Required. Enables connections from applications outside of the VPC that hosts the broker's subnets.
     */
    PubliclyAccessible?: __boolean;
    /**
     * The list of rules (1 minimum, 125 maximum) that authorize connections to brokers.
     */
    SecurityGroups?: __listOf__string;
    /**
     * The list of groups (2 maximum) that define which subnets and IP ranges the broker can use from different Availability Zones. A SINGLE_INSTANCE deployment requires one subnet (for example, the default subnet). An ACTIVE_STANDBY_MULTI_AZ deployment requires two subnets.
     */
    SubnetIds?: __listOf__string;
    /**
     * Create tags when creating the broker.
     */
    Tags?: __mapOf__string;
    /**
     * Required. The list of ActiveMQ users (persons or applications) who can access queues and topics. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
     */
    Users?: __listOfUser;
  }
  export interface CreateBrokerResponse {
    /**
     * The Amazon Resource Name (ARN) of the broker.
     */
    BrokerArn?: __string;
    /**
     * The unique ID that Amazon MQ generates for the broker.
     */
    BrokerId?: __string;
  }
  export interface CreateConfigurationRequest {
    /**
     * Required. The type of broker engine. Note: Currently, Amazon MQ supports only ACTIVEMQ.
     */
    EngineType?: EngineType;
    /**
     * Required. The version of the broker engine. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html
     */
    EngineVersion?: __string;
    /**
     * Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.
     */
    Name?: __string;
    /**
     * Create tags when creating the configuration.
     */
    Tags?: __mapOf__string;
  }
  export interface CreateConfigurationResponse {
    /**
     * Required. The Amazon Resource Name (ARN) of the configuration.
     */
    Arn?: __string;
    /**
     * Required. The date and time of the configuration.
     */
    Created?: __timestampIso8601;
    /**
     * Required. The unique ID that Amazon MQ generates for the configuration.
     */
    Id?: __string;
    /**
     * The latest revision of the configuration.
     */
    LatestRevision?: ConfigurationRevision;
    /**
     * Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.
     */
    Name?: __string;
  }
  export interface CreateTagsRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource tag.
     */
    ResourceArn: __string;
    /**
     * The key-value pair for the resource tag.
     */
    Tags?: __mapOf__string;
  }
  export interface CreateUserRequest {
    /**
     * The unique ID that Amazon MQ generates for the broker.
     */
    BrokerId: __string;
    /**
     * Enables access to the the ActiveMQ Web Console for the ActiveMQ user.
     */
    ConsoleAccess?: __boolean;
    /**
     * The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
     */
    Groups?: __listOf__string;
    /**
     * Required. The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas.
     */
    Password?: __string;
    /**
     * The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
     */
    Username: __string;
  }
  export interface CreateUserResponse {
  }
  export type DayOfWeek = "MONDAY"|"TUESDAY"|"WEDNESDAY"|"THURSDAY"|"FRIDAY"|"SATURDAY"|"SUNDAY"|string;
  export interface DeleteBrokerRequest {
    /**
     * The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters.
     */
    BrokerId: __string;
  }
  export interface DeleteBrokerResponse {
    /**
     * The unique ID that Amazon MQ generates for the broker.
     */
    BrokerId?: __string;
  }
  export interface DeleteTagsRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource tag.
     */
    ResourceArn: __string;
    /**
     * An array of tag keys to delete
     */
    TagKeys: __listOf__string;
  }
  export interface DeleteUserRequest {
    /**
     * The unique ID that Amazon MQ generates for the broker.
     */
    BrokerId: __string;
    /**
     * The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
     */
    Username: __string;
  }
  export interface DeleteUserResponse {
  }
  export type DeploymentMode = "SINGLE_INSTANCE"|"ACTIVE_STANDBY_MULTI_AZ"|string;
  export interface DescribeBrokerEngineTypesRequest {
    /**
     * Filter response by engine type.
     */
    EngineType?: __string;
    /**
     * The maximum number of engine types that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
     */
    MaxResults?: MaxResults;
    /**
     * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
     */
    NextToken?: __string;
  }
  export interface DescribeBrokerEngineTypesResponse {
    /**
     * List of available engine types and versions.
     */
    BrokerEngineTypes?: __listOfBrokerEngineType;
    /**
     * Required. The maximum number of engine types that can be returned per page (20 by default). This value must be an integer from 5 to 100.
     */
    MaxResults?: __integerMin5Max100;
    /**
     * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
     */
    NextToken?: __string;
  }
  export interface DescribeBrokerInstanceOptionsRequest {
    /**
     * Filter response by engine type.
     */
    EngineType?: __string;
    /**
     * Filter response by host instance type.
     */
    HostInstanceType?: __string;
    /**
     * The maximum number of instance options that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
     */
    MaxResults?: MaxResults;
    /**
     * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
     */
    NextToken?: __string;
  }
  export interface DescribeBrokerInstanceOptionsResponse {
    /**
     * List of available broker instance options.
     */
    BrokerInstanceOptions?: __listOfBrokerInstanceOption;
    /**
     * Required. The maximum number of instance options that can be returned per page (20 by default). This value must be an integer from 5 to 100.
     */
    MaxResults?: __integerMin5Max100;
    /**
     * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
     */
    NextToken?: __string;
  }
  export interface DescribeBrokerRequest {
    /**
     * The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters.
     */
    BrokerId: __string;
  }
  export interface DescribeBrokerResponse {
    /**
     * Required. Enables automatic upgrades to new minor versions for brokers, as Apache releases the versions. The automatic upgrades occur during the maintenance window of the broker or after a manual broker reboot.
     */
    AutoMinorVersionUpgrade?: __boolean;
    /**
     * The Amazon Resource Name (ARN) of the broker.
     */
    BrokerArn?: __string;
    /**
     * The unique ID that Amazon MQ generates for the broker.
     */
    BrokerId?: __string;
    /**
     * A list of information about allocated brokers.
     */
    BrokerInstances?: __listOfBrokerInstance;
    /**
     * The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters.
     */
    BrokerName?: __string;
    /**
     * The status of the broker.
     */
    BrokerState?: BrokerState;
    /**
     * The list of all revisions for the specified configuration.
     */
    Configurations?: Configurations;
    /**
     * The time when the broker was created.
     */
    Created?: __timestampIso8601;
    /**
     * Required. The deployment mode of the broker.
     */
    DeploymentMode?: DeploymentMode;
    /**
     * Required. The type of broker engine. Note: Currently, Amazon MQ supports only ACTIVEMQ.
     */
    EngineType?: EngineType;
    /**
     * The version of the broker engine. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html
     */
    EngineVersion?: __string;
    /**
     * The broker's instance type.
     */
    HostInstanceType?: __string;
    /**
     * The list of information about logs currently enabled and pending to be deployed for the specified broker.
     */
    Logs?: LogsSummary;
    /**
     * The parameters that determine the WeeklyStartTime.
     */
    MaintenanceWindowStartTime?: WeeklyStartTime;
    /**
     * The version of the broker engine to upgrade to. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html
     */
    PendingEngineVersion?: __string;
    /**
     * Required. Enables connections from applications outside of the VPC that hosts the broker's subnets.
     */
    PubliclyAccessible?: __boolean;
    /**
     * Required. The list of rules (1 minimum, 125 maximum) that authorize connections to brokers.
     */
    SecurityGroups?: __listOf__string;
    /**
     * The list of groups (2 maximum) that define which subnets and IP ranges the broker can use from different Availability Zones. A SINGLE_INSTANCE deployment requires one subnet (for example, the default subnet). An ACTIVE_STANDBY_MULTI_AZ deployment requires two subnets.
     */
    SubnetIds?: __listOf__string;
    /**
     * The list of all tags associated with this broker.
     */
    Tags?: __mapOf__string;
    /**
     * The list of all ActiveMQ usernames for the specified broker.
     */
    Users?: __listOfUserSummary;
  }
  export interface DescribeConfigurationRequest {
    /**
     * The unique ID that Amazon MQ generates for the configuration.
     */
    ConfigurationId: __string;
  }
  export interface DescribeConfigurationResponse {
    /**
     * Required. The ARN of the configuration.
     */
    Arn?: __string;
    /**
     * Required. The date and time of the configuration revision.
     */
    Created?: __timestampIso8601;
    /**
     * Required. The description of the configuration.
     */
    Description?: __string;
    /**
     * Required. The type of broker engine. Note: Currently, Amazon MQ supports only ACTIVEMQ.
     */
    EngineType?: EngineType;
    /**
     * Required. The version of the broker engine. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html
     */
    EngineVersion?: __string;
    /**
     * Required. The unique ID that Amazon MQ generates for the configuration.
     */
    Id?: __string;
    /**
     * Required. The latest revision of the configuration.
     */
    LatestRevision?: ConfigurationRevision;
    /**
     * Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.
     */
    Name?: __string;
    /**
     * The list of all tags associated with this configuration.
     */
    Tags?: __mapOf__string;
  }
  export interface DescribeConfigurationRevisionRequest {
    /**
     * The unique ID that Amazon MQ generates for the configuration.
     */
    ConfigurationId: __string;
    /**
     * The revision of the configuration.
     */
    ConfigurationRevision: __string;
  }
  export interface DescribeConfigurationRevisionResponse {
    /**
     * Required. The unique ID that Amazon MQ generates for the configuration.
     */
    ConfigurationId?: __string;
    /**
     * Required. The date and time of the configuration.
     */
    Created?: __timestampIso8601;
    /**
     * Required. The base64-encoded XML configuration.
     */
    Data?: __string;
    /**
     * The description of the configuration.
     */
    Description?: __string;
  }
  export interface DescribeUserRequest {
    /**
     * The unique ID that Amazon MQ generates for the broker.
     */
    BrokerId: __string;
    /**
     * The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
     */
    Username: __string;
  }
  export interface DescribeUserResponse {
    /**
     * Required. The unique ID that Amazon MQ generates for the broker.
     */
    BrokerId?: __string;
    /**
     * Enables access to the the ActiveMQ Web Console for the ActiveMQ user.
     */
    ConsoleAccess?: __boolean;
    /**
     * The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
     */
    Groups?: __listOf__string;
    /**
     * The status of the changes pending for the ActiveMQ user.
     */
    Pending?: UserPendingChanges;
    /**
     * Required. The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
     */
    Username?: __string;
  }
  export type EngineType = "ACTIVEMQ"|string;
  export interface EngineVersion {
    /**
     * Id for the version.
     */
    Name?: __string;
  }
  export interface ListBrokersRequest {
    /**
     * The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
     */
    MaxResults?: MaxResults;
    /**
     * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
     */
    NextToken?: __string;
  }
  export interface ListBrokersResponse {
    /**
     * A list of information about all brokers.
     */
    BrokerSummaries?: __listOfBrokerSummary;
    /**
     * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
     */
    NextToken?: __string;
  }
  export interface ListConfigurationRevisionsRequest {
    /**
     * The unique ID that Amazon MQ generates for the configuration.
     */
    ConfigurationId: __string;
    /**
     * The maximum number of configurations that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
     */
    MaxResults?: MaxResults;
    /**
     * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
     */
    NextToken?: __string;
  }
  export interface ListConfigurationRevisionsResponse {
    /**
     * The unique ID that Amazon MQ generates for the configuration.
     */
    ConfigurationId?: __string;
    /**
     * The maximum number of configuration revisions that can be returned per page (20 by default). This value must be an integer from 5 to 100.
     */
    MaxResults?: __integer;
    /**
     * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
     */
    NextToken?: __string;
    /**
     * The list of all revisions for the specified configuration.
     */
    Revisions?: __listOfConfigurationRevision;
  }
  export interface ListConfigurationsRequest {
    /**
     * The maximum number of configurations that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
     */
    MaxResults?: MaxResults;
    /**
     * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
     */
    NextToken?: __string;
  }
  export interface ListConfigurationsResponse {
    /**
     * The list of all revisions for the specified configuration.
     */
    Configurations?: __listOfConfiguration;
    /**
     * The maximum number of configurations that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
     */
    MaxResults?: __integer;
    /**
     * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
     */
    NextToken?: __string;
  }
  export interface ListTagsRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource tag.
     */
    ResourceArn: __string;
  }
  export interface ListTagsResponse {
    /**
     * The key-value pair for the resource tag.
     */
    Tags?: __mapOf__string;
  }
  export interface ListUsersRequest {
    /**
     * The unique ID that Amazon MQ generates for the broker.
     */
    BrokerId: __string;
    /**
     * The maximum number of ActiveMQ users that can be returned per page (20 by default). This value must be an integer from 5 to 100.
     */
    MaxResults?: MaxResults;
    /**
     * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
     */
    NextToken?: __string;
  }
  export interface ListUsersResponse {
    /**
     * Required. The unique ID that Amazon MQ generates for the broker.
     */
    BrokerId?: __string;
    /**
     * Required. The maximum number of ActiveMQ users that can be returned per page (20 by default). This value must be an integer from 5 to 100.
     */
    MaxResults?: __integerMin5Max100;
    /**
     * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
     */
    NextToken?: __string;
    /**
     * Required. The list of all ActiveMQ usernames for the specified broker.
     */
    Users?: __listOfUserSummary;
  }
  export interface Logs {
    /**
     * Enables audit logging. Every user management action made using JMX or the ActiveMQ Web Console is logged.
     */
    Audit?: __boolean;
    /**
     * Enables general logging.
     */
    General?: __boolean;
  }
  export interface LogsSummary {
    /**
     * Enables audit logging. Every user management action made using JMX or the ActiveMQ Web Console is logged.
     */
    Audit?: __boolean;
    /**
     * The location of the CloudWatch Logs log group where audit logs are sent.
     */
    AuditLogGroup?: __string;
    /**
     * Enables general logging.
     */
    General?: __boolean;
    /**
     * The location of the CloudWatch Logs log group where general logs are sent.
     */
    GeneralLogGroup?: __string;
    /**
     * The list of information about logs pending to be deployed for the specified broker.
     */
    Pending?: PendingLogs;
  }
  export type MaxResults = number;
  export interface PendingLogs {
    /**
     * Enables audit logging. Every user management action made using JMX or the ActiveMQ Web Console is logged.
     */
    Audit?: __boolean;
    /**
     * Enables general logging.
     */
    General?: __boolean;
  }
  export interface RebootBrokerRequest {
    /**
     * The unique ID that Amazon MQ generates for the broker.
     */
    BrokerId: __string;
  }
  export interface RebootBrokerResponse {
  }
  export interface SanitizationWarning {
    /**
     * The name of the XML attribute that has been sanitized.
     */
    AttributeName?: __string;
    /**
     * The name of the XML element that has been sanitized.
     */
    ElementName?: __string;
    /**
     * Required. The reason for which the XML elements or attributes were sanitized.
     */
    Reason?: SanitizationWarningReason;
  }
  export type SanitizationWarningReason = "DISALLOWED_ELEMENT_REMOVED"|"DISALLOWED_ATTRIBUTE_REMOVED"|"INVALID_ATTRIBUTE_VALUE_REMOVED"|string;
  export interface UpdateBrokerRequest {
    /**
     * Enables automatic upgrades to new minor versions for brokers, as Apache releases the versions. The automatic upgrades occur during the maintenance window of the broker or after a manual broker reboot.
     */
    AutoMinorVersionUpgrade?: __boolean;
    /**
     * The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters.
     */
    BrokerId: __string;
    /**
     * A list of information about the configuration.
     */
    Configuration?: ConfigurationId;
    /**
     * The version of the broker engine. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html
     */
    EngineVersion?: __string;
    /**
     * Enables Amazon CloudWatch logging for brokers.
     */
    Logs?: Logs;
  }
  export interface UpdateBrokerResponse {
    /**
     * The new value of automatic upgrades to new minor version for brokers.
     */
    AutoMinorVersionUpgrade?: __boolean;
    /**
     * Required. The unique ID that Amazon MQ generates for the broker.
     */
    BrokerId?: __string;
    /**
     * The ID of the updated configuration.
     */
    Configuration?: ConfigurationId;
    /**
     * The version of the broker engine to upgrade to. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html
     */
    EngineVersion?: __string;
    /**
     * The list of information about logs to be enabled for the specified broker.
     */
    Logs?: Logs;
  }
  export interface UpdateConfigurationRequest {
    /**
     * The unique ID that Amazon MQ generates for the configuration.
     */
    ConfigurationId: __string;
    /**
     * Required. The base64-encoded XML configuration.
     */
    Data?: __string;
    /**
     * The description of the configuration.
     */
    Description?: __string;
  }
  export interface UpdateConfigurationResponse {
    /**
     * Required. The Amazon Resource Name (ARN) of the configuration.
     */
    Arn?: __string;
    /**
     * Required. The date and time of the configuration.
     */
    Created?: __timestampIso8601;
    /**
     * Required. The unique ID that Amazon MQ generates for the configuration.
     */
    Id?: __string;
    /**
     * The latest revision of the configuration.
     */
    LatestRevision?: ConfigurationRevision;
    /**
     * Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.
     */
    Name?: __string;
    /**
     * The list of the first 20 warnings about the configuration XML elements or attributes that were sanitized.
     */
    Warnings?: __listOfSanitizationWarning;
  }
  export interface UpdateUserRequest {
    /**
     * The unique ID that Amazon MQ generates for the broker.
     */
    BrokerId: __string;
    /**
     * Enables access to the the ActiveMQ Web Console for the ActiveMQ user.
     */
    ConsoleAccess?: __boolean;
    /**
     * The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
     */
    Groups?: __listOf__string;
    /**
     * The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas.
     */
    Password?: __string;
    /**
     * Required. The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
     */
    Username: __string;
  }
  export interface UpdateUserResponse {
  }
  export interface User {
    /**
     * Enables access to the the ActiveMQ Web Console for the ActiveMQ user.
     */
    ConsoleAccess?: __boolean;
    /**
     * The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
     */
    Groups?: __listOf__string;
    /**
     * Required. The password of the ActiveMQ user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas.
     */
    Password?: __string;
    /**
     * Required. The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
     */
    Username?: __string;
  }
  export interface UserPendingChanges {
    /**
     * Enables access to the the ActiveMQ Web Console for the ActiveMQ user.
     */
    ConsoleAccess?: __boolean;
    /**
     * The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
     */
    Groups?: __listOf__string;
    /**
     * Required. The type of change pending for the ActiveMQ user.
     */
    PendingChange?: ChangeType;
  }
  export interface UserSummary {
    /**
     * The type of change pending for the ActiveMQ user.
     */
    PendingChange?: ChangeType;
    /**
     * Required. The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
     */
    Username?: __string;
  }
  export interface WeeklyStartTime {
    /**
     * Required. The day of the week.
     */
    DayOfWeek?: DayOfWeek;
    /**
     * Required. The time, in 24-hour format.
     */
    TimeOfDay?: __string;
    /**
     * The time zone, UTC by default, in either the Country/City format, or the UTC offset format.
     */
    TimeZone?: __string;
  }
  export type __boolean = boolean;
  export type __integer = number;
  export type __integerMin5Max100 = number;
  export type __listOfAvailabilityZone = AvailabilityZone[];
  export type __listOfBrokerEngineType = BrokerEngineType[];
  export type __listOfBrokerInstance = BrokerInstance[];
  export type __listOfBrokerInstanceOption = BrokerInstanceOption[];
  export type __listOfBrokerSummary = BrokerSummary[];
  export type __listOfConfiguration = Configuration[];
  export type __listOfConfigurationId = ConfigurationId[];
  export type __listOfConfigurationRevision = ConfigurationRevision[];
  export type __listOfEngineVersion = EngineVersion[];
  export type __listOfSanitizationWarning = SanitizationWarning[];
  export type __listOfUser = User[];
  export type __listOfUserSummary = UserSummary[];
  export type __listOf__string = __string[];
  export type __mapOf__string = {[key: string]: __string};
  export type __string = string;
  export type __timestampIso8601 = Date;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-11-27"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the MQ client.
   */
  export import Types = MQ;
}
export = MQ;
