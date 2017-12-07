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
   * Creates a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and version). Note: If the configuration name already exists, Amazon MQ doesn't create a configuration.
   */
  createConfiguration(params: MQ.Types.CreateConfigurationRequest, callback?: (err: AWSError, data: MQ.Types.CreateConfigurationResponse) => void): Request<MQ.Types.CreateConfigurationResponse, AWSError>;
  /**
   * Creates a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and version). Note: If the configuration name already exists, Amazon MQ doesn't create a configuration.
   */
  createConfiguration(callback?: (err: AWSError, data: MQ.Types.CreateConfigurationResponse) => void): Request<MQ.Types.CreateConfigurationResponse, AWSError>;
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
  export interface BrokerInstance {
    /**
     * The URL of the broker's ActiveMQ Web Console.
     */
    ConsoleURL?: __string;
    /**
     * The broker's wire-level protocol endpoints.
     */
    Endpoints?: ListOf__string;
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
     * The status of the broker. Possible values: CREATION_IN_PROGRESS, CREATION_FAILED, DELETION_IN_PROGRESS, RUNNING, REBOOT_IN_PROGRESS
     */
    BrokerState?: BrokerState;
    /**
     * Required. The deployment mode of the broker. Possible values: SINGLE_INSTANCE, ACTIVE_STANDBY_MULTI_AZ SINGLE_INSTANCE creates a single-instance broker in a single Availability Zone. ACTIVE_STANDBY_MULTI_AZ creates an active/standby broker for high availability.
     */
    DeploymentMode?: DeploymentMode;
    /**
     * The broker's instance type. Possible values: mq.t2.micro, mq.m4.large
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
     * Required. The description of the configuration.
     */
    Description?: __string;
    /**
     * Required. The type of broker engine. Note: Currently, Amazon MQ supports only ACTIVEMQ.
     */
    EngineType?: EngineType;
    /**
     * Required. The version of the broker engine.
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
  }
  export interface ConfigurationId {
    /**
     * Required. The unique ID that Amazon MQ generates for the configuration.
     */
    Id?: __string;
    /**
     * The Universally Unique Identifier (UUID) of the request.
     */
    Revision?: __integer;
  }
  export interface ConfigurationRevision {
    /**
     * The description of the configuration revision.
     */
    Description?: __string;
    /**
     * Required. The revision of the configuration.
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
    History?: ListOfConfigurationId;
    /**
     * The pending configuration of the broker.
     */
    Pending?: ConfigurationId;
  }
  export interface CreateBrokerInput {
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
     * Required. The deployment mode of the broker. Possible values: SINGLE_INSTANCE, ACTIVE_STANDBY_MULTI_AZ SINGLE_INSTANCE creates a single-instance broker in a single Availability Zone. ACTIVE_STANDBY_MULTI_AZ creates an active/standby broker for high availability.
     */
    DeploymentMode?: DeploymentMode;
    /**
     * Required. The type of broker engine. Note: Currently, Amazon MQ supports only ACTIVEMQ.
     */
    EngineType?: EngineType;
    /**
     * Required. The version of the broker engine. Note: Currently, Amazon MQ supports only 5.15.0.
     */
    EngineVersion?: __string;
    /**
     * Required. The broker's instance type. Possible values: mq.t2.micro, mq.m4.large
     */
    HostInstanceType?: __string;
    /**
     * The parameters that determine the WeeklyStartTime.
     */
    MaintenanceWindowStartTime?: WeeklyStartTime;
    /**
     * Required. Enables connections from applications outside of the VPC that hosts the broker's subnets.
     */
    PubliclyAccessible?: __boolean;
    /**
     * Required. The list of rules (1 minimum, 125 maximum) that authorize connections to brokers.
     */
    SecurityGroups?: ListOf__string;
    /**
     * Required. The list of groups (2 maximum) that define which subnets and IP ranges the broker can use from different Availability Zones. A SINGLE_INSTANCE deployment requires one subnet (for example, the default subnet). An ACTIVE_STANDBY_MULTI_AZ deployment requires two subnets.
     */
    SubnetIds?: ListOf__string;
    /**
     * Required. The list of ActiveMQ users (persons or applications) who can access queues and topics. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
     */
    Users?: ListOfUser;
  }
  export interface CreateBrokerOutput {
    /**
     * The Amazon Resource Name (ARN) of the broker.
     */
    BrokerArn?: __string;
    /**
     * The unique ID that Amazon MQ generates for the broker.
     */
    BrokerId?: __string;
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
     * Required. The deployment mode of the broker. Possible values: SINGLE_INSTANCE, ACTIVE_STANDBY_MULTI_AZ SINGLE_INSTANCE creates a single-instance broker in a single Availability Zone. ACTIVE_STANDBY_MULTI_AZ creates an active/standby broker for high availability.
     */
    DeploymentMode?: DeploymentMode;
    /**
     * Required. The type of broker engine. Note: Currently, Amazon MQ supports only ACTIVEMQ.
     */
    EngineType?: EngineType;
    /**
     * Required. The version of the broker engine. Note: Currently, Amazon MQ supports only 5.15.0.
     */
    EngineVersion?: __string;
    /**
     * Required. The broker's instance type. Possible values: mq.t2.micro, mq.m4.large
     */
    HostInstanceType?: __string;
    /**
     * The parameters that determine the WeeklyStartTime.
     */
    MaintenanceWindowStartTime?: WeeklyStartTime;
    /**
     * Required. Enables connections from applications outside of the VPC that hosts the broker's subnets.
     */
    PubliclyAccessible?: __boolean;
    /**
     * Required. The list of rules (1 minimum, 125 maximum) that authorize connections to brokers.
     */
    SecurityGroups?: ListOf__string;
    /**
     * Required. The list of groups (2 maximum) that define which subnets and IP ranges the broker can use from different Availability Zones. A SINGLE_INSTANCE deployment requires one subnet (for example, the default subnet). An ACTIVE_STANDBY_MULTI_AZ deployment requires two subnets.
     */
    SubnetIds?: ListOf__string;
    /**
     * Required. The list of ActiveMQ users (persons or applications) who can access queues and topics. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
     */
    Users?: ListOfUser;
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
  export interface CreateConfigurationInput {
    /**
     * Required. The type of broker engine. Note: Currently, Amazon MQ supports only ACTIVEMQ.
     */
    EngineType?: EngineType;
    /**
     * Required. The version of the broker engine. Note: Currently, Amazon MQ supports only 5.15.0.
     */
    EngineVersion?: __string;
    /**
     * Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.
     */
    Name?: __string;
  }
  export interface CreateConfigurationOutput {
    /**
     * Required. The Amazon Resource Name (ARN) of the configuration.
     */
    Arn?: __string;
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
  export interface CreateConfigurationRequest {
    /**
     * Required. The type of broker engine. Note: Currently, Amazon MQ supports only ACTIVEMQ.
     */
    EngineType?: EngineType;
    /**
     * Required. The version of the broker engine. Note: Currently, Amazon MQ supports only 5.15.0.
     */
    EngineVersion?: __string;
    /**
     * Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.
     */
    Name?: __string;
  }
  export interface CreateConfigurationResponse {
    /**
     * Required. The Amazon Resource Name (ARN) of the configuration.
     */
    Arn?: __string;
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
  export interface CreateUserInput {
    /**
     * Enables access to the the ActiveMQ Web Console for the ActiveMQ user.
     */
    ConsoleAccess?: __boolean;
    /**
     * The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
     */
    Groups?: ListOf__string;
    /**
     * Required. The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas.
     */
    Password?: __string;
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
    Groups?: ListOf__string;
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
  export interface DeleteBrokerOutput {
    /**
     * The unique ID that Amazon MQ generates for the broker.
     */
    BrokerId?: __string;
  }
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
  export interface DescribeBrokerOutput {
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
    BrokerInstances?: ListOfBrokerInstance;
    /**
     * The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters.
     */
    BrokerName?: __string;
    /**
     * The status of the broker. Possible values: CREATION_IN_PROGRESS, CREATION_FAILED, DELETION_IN_PROGRESS, RUNNING, REBOOT_IN_PROGRESS
     */
    BrokerState?: BrokerState;
    /**
     * The list of all revisions for the specified configuration.
     */
    Configurations?: Configurations;
    /**
     * Required. The deployment mode of the broker. Possible values: SINGLE_INSTANCE, ACTIVE_STANDBY_MULTI_AZ SINGLE_INSTANCE creates a single-instance broker in a single Availability Zone. ACTIVE_STANDBY_MULTI_AZ creates an active/standby broker for high availability.
     */
    DeploymentMode?: DeploymentMode;
    /**
     * Required. The type of broker engine. Note: Currently, Amazon MQ supports only ACTIVEMQ.
     */
    EngineType?: EngineType;
    /**
     * The version of the broker engine. Note: Currently, Amazon MQ supports only 5.15.0.
     */
    EngineVersion?: __string;
    /**
     * The broker's instance type. Possible values: mq.t2.micro, mq.m4.large
     */
    HostInstanceType?: __string;
    /**
     * The parameters that determine the WeeklyStartTime.
     */
    MaintenanceWindowStartTime?: WeeklyStartTime;
    /**
     * Required. Enables connections from applications outside of the VPC that hosts the broker's subnets.
     */
    PubliclyAccessible?: __boolean;
    /**
     * Required. The list of rules (1 minimum, 125 maximum) that authorize connections to brokers.
     */
    SecurityGroups?: ListOf__string;
    /**
     * The list of groups (2 maximum) that define which subnets and IP ranges the broker can use from different Availability Zones. A SINGLE_INSTANCE deployment requires one subnet (for example, the default subnet). An ACTIVE_STANDBY_MULTI_AZ deployment requires two subnets.
     */
    SubnetIds?: ListOf__string;
    /**
     * The list of all ActiveMQ usernames for the specified broker.
     */
    Users?: ListOfUserSummary;
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
    BrokerInstances?: ListOfBrokerInstance;
    /**
     * The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters.
     */
    BrokerName?: __string;
    /**
     * The status of the broker. Possible values: CREATION_IN_PROGRESS, CREATION_FAILED, DELETION_IN_PROGRESS, RUNNING, REBOOT_IN_PROGRESS
     */
    BrokerState?: BrokerState;
    /**
     * The list of all revisions for the specified configuration.
     */
    Configurations?: Configurations;
    /**
     * Required. The deployment mode of the broker. Possible values: SINGLE_INSTANCE, ACTIVE_STANDBY_MULTI_AZ SINGLE_INSTANCE creates a single-instance broker in a single Availability Zone. ACTIVE_STANDBY_MULTI_AZ creates an active/standby broker for high availability.
     */
    DeploymentMode?: DeploymentMode;
    /**
     * Required. The type of broker engine. Note: Currently, Amazon MQ supports only ACTIVEMQ.
     */
    EngineType?: EngineType;
    /**
     * The version of the broker engine. Note: Currently, Amazon MQ supports only 5.15.0.
     */
    EngineVersion?: __string;
    /**
     * The broker's instance type. Possible values: mq.t2.micro, mq.m4.large
     */
    HostInstanceType?: __string;
    /**
     * The parameters that determine the WeeklyStartTime.
     */
    MaintenanceWindowStartTime?: WeeklyStartTime;
    /**
     * Required. Enables connections from applications outside of the VPC that hosts the broker's subnets.
     */
    PubliclyAccessible?: __boolean;
    /**
     * Required. The list of rules (1 minimum, 125 maximum) that authorize connections to brokers.
     */
    SecurityGroups?: ListOf__string;
    /**
     * The list of groups (2 maximum) that define which subnets and IP ranges the broker can use from different Availability Zones. A SINGLE_INSTANCE deployment requires one subnet (for example, the default subnet). An ACTIVE_STANDBY_MULTI_AZ deployment requires two subnets.
     */
    SubnetIds?: ListOf__string;
    /**
     * The list of all ActiveMQ usernames for the specified broker.
     */
    Users?: ListOfUserSummary;
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
     * Required. The description of the configuration.
     */
    Description?: __string;
    /**
     * Required. The type of broker engine. Note: Currently, Amazon MQ supports only ACTIVEMQ.
     */
    EngineType?: EngineType;
    /**
     * Required. The version of the broker engine.
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
  }
  export interface DescribeConfigurationRevisionOutput {
    /**
     * Required. The unique ID that Amazon MQ generates for the configuration.
     */
    ConfigurationId?: __string;
    /**
     * Required. The base64-encoded XML configuration.
     */
    Data?: __string;
    /**
     * The description of the configuration.
     */
    Description?: __string;
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
     * Required. The base64-encoded XML configuration.
     */
    Data?: __string;
    /**
     * The description of the configuration.
     */
    Description?: __string;
  }
  export interface DescribeUserOutput {
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
    Groups?: ListOf__string;
    /**
     * The status of the changes pending for the ActiveMQ user.
     */
    Pending?: UserPendingChanges;
    /**
     * Required. The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
     */
    Username?: __string;
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
    Groups?: ListOf__string;
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
  export interface Error {
    /**
     * The error attribute.
     */
    ErrorAttribute?: __string;
    /**
     * The error message.
     */
    Message?: __string;
  }
  export interface ListBrokersOutput {
    /**
     * A list of information about all brokers.
     */
    BrokerSummaries?: ListOfBrokerSummary;
    /**
     * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
     */
    NextToken?: __string;
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
    BrokerSummaries?: ListOfBrokerSummary;
    /**
     * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
     */
    NextToken?: __string;
  }
  export interface ListConfigurationRevisionsOutput {
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
    Revisions?: ListOfConfigurationRevision;
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
    Revisions?: ListOfConfigurationRevision;
  }
  export interface ListConfigurationsOutput {
    /**
     * The list of all revisions for the specified configuration.
     */
    Configurations?: ListOfConfiguration;
    /**
     * The maximum number of configurations that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
     */
    MaxResults?: __integer;
    /**
     * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
     */
    NextToken?: __string;
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
    Configurations?: ListOfConfiguration;
    /**
     * The maximum number of configurations that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
     */
    MaxResults?: __integer;
    /**
     * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
     */
    NextToken?: __string;
  }
  export type ListOfBrokerInstance = BrokerInstance[];
  export type ListOfBrokerSummary = BrokerSummary[];
  export type ListOfConfiguration = Configuration[];
  export type ListOfConfigurationId = ConfigurationId[];
  export type ListOfConfigurationRevision = ConfigurationRevision[];
  export type ListOfSanitizationWarning = SanitizationWarning[];
  export type ListOfUser = User[];
  export type ListOfUserSummary = UserSummary[];
  export type ListOf__string = __string[];
  export interface ListUsersOutput {
    /**
     * Required. The unique ID that Amazon MQ generates for the broker.
     */
    BrokerId?: __string;
    /**
     * Required. The maximum number of ActiveMQ users that can be returned per page (20 by default). This value must be an integer from 5 to 100.
     */
    MaxResults?: __integer;
    /**
     * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
     */
    NextToken?: __string;
    /**
     * Required. The list of all ActiveMQ usernames for the specified broker.
     */
    Users?: ListOfUserSummary;
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
    MaxResults?: __integer;
    /**
     * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
     */
    NextToken?: __string;
    /**
     * Required. The list of all ActiveMQ usernames for the specified broker.
     */
    Users?: ListOfUserSummary;
  }
  export type MaxResults = number;
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
     * Required. The reason for which the XML elements or attributes were sanitized. Possible values: DISALLOWED_ELEMENT_REMOVED, DISALLOWED_ATTRIBUTE_REMOVED, INVALID_ATTRIBUTE_VALUE_REMOVED DISALLOWED_ELEMENT_REMOVED shows that the provided element isn't allowed and has been removed. DISALLOWED_ATTRIBUTE_REMOVED shows that the provided attribute isn't allowed and has been removed. INVALID_ATTRIBUTE_VALUE_REMOVED shows that the provided value for the attribute isn't allowed and has been removed.
     */
    Reason?: SanitizationWarningReason;
  }
  export type SanitizationWarningReason = "DISALLOWED_ELEMENT_REMOVED"|"DISALLOWED_ATTRIBUTE_REMOVED"|"INVALID_ATTRIBUTE_VALUE_REMOVED"|string;
  export interface UpdateBrokerInput {
    /**
     * A list of information about the configuration.
     */
    Configuration?: ConfigurationId;
  }
  export interface UpdateBrokerOutput {
    /**
     * Required. The unique ID that Amazon MQ generates for the broker.
     */
    BrokerId?: __string;
    /**
     * The ID of the updated configuration.
     */
    Configuration?: ConfigurationId;
  }
  export interface UpdateBrokerRequest {
    /**
     * The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters.
     */
    BrokerId: __string;
    /**
     * A list of information about the configuration.
     */
    Configuration?: ConfigurationId;
  }
  export interface UpdateBrokerResponse {
    /**
     * Required. The unique ID that Amazon MQ generates for the broker.
     */
    BrokerId?: __string;
    /**
     * The ID of the updated configuration.
     */
    Configuration?: ConfigurationId;
  }
  export interface UpdateConfigurationInput {
    /**
     * Required. The base64-encoded XML configuration.
     */
    Data?: __string;
    /**
     * The description of the configuration.
     */
    Description?: __string;
  }
  export interface UpdateConfigurationOutput {
    /**
     * Required. The Amazon Resource Name (ARN) of the configuration.
     */
    Arn?: __string;
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
    Warnings?: ListOfSanitizationWarning;
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
    Warnings?: ListOfSanitizationWarning;
  }
  export interface UpdateUserInput {
    /**
     * Enables access to the the ActiveMQ Web Console for the ActiveMQ user.
     */
    ConsoleAccess?: __boolean;
    /**
     * The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
     */
    Groups?: ListOf__string;
    /**
     * The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas.
     */
    Password?: __string;
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
    Groups?: ListOf__string;
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
    Groups?: ListOf__string;
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
    Groups?: ListOf__string;
    /**
     * Required. The type of change pending for the ActiveMQ user. Possible values: CREATE, UPDATE, DELETE
     */
    PendingChange?: ChangeType;
  }
  export interface UserSummary {
    /**
     * The type of change pending for the ActiveMQ user. Possible values: CREATE, UPDATE, DELETE
     */
    PendingChange?: ChangeType;
    /**
     * Required. The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
     */
    Username?: __string;
  }
  export interface WeeklyStartTime {
    /**
     * Required. The day of the week. Possible values: MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
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
  export type __double = number;
  export type __integer = number;
  export type __string = string;
  export type __timestamp = Date;
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
