import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class MWAA extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: MWAA.Types.ClientConfiguration)
  config: Config & MWAA.Types.ClientConfiguration;
  /**
   * Create a CLI token to use Airflow CLI.
   */
  createCliToken(params: MWAA.Types.CreateCliTokenRequest, callback?: (err: AWSError, data: MWAA.Types.CreateCliTokenResponse) => void): Request<MWAA.Types.CreateCliTokenResponse, AWSError>;
  /**
   * Create a CLI token to use Airflow CLI.
   */
  createCliToken(callback?: (err: AWSError, data: MWAA.Types.CreateCliTokenResponse) => void): Request<MWAA.Types.CreateCliTokenResponse, AWSError>;
  /**
   * JSON blob that describes the environment to create.
   */
  createEnvironment(params: MWAA.Types.CreateEnvironmentInput, callback?: (err: AWSError, data: MWAA.Types.CreateEnvironmentOutput) => void): Request<MWAA.Types.CreateEnvironmentOutput, AWSError>;
  /**
   * JSON blob that describes the environment to create.
   */
  createEnvironment(callback?: (err: AWSError, data: MWAA.Types.CreateEnvironmentOutput) => void): Request<MWAA.Types.CreateEnvironmentOutput, AWSError>;
  /**
   * Create a JWT token to be used to login to Airflow Web UI with claims based Authentication.
   */
  createWebLoginToken(params: MWAA.Types.CreateWebLoginTokenRequest, callback?: (err: AWSError, data: MWAA.Types.CreateWebLoginTokenResponse) => void): Request<MWAA.Types.CreateWebLoginTokenResponse, AWSError>;
  /**
   * Create a JWT token to be used to login to Airflow Web UI with claims based Authentication.
   */
  createWebLoginToken(callback?: (err: AWSError, data: MWAA.Types.CreateWebLoginTokenResponse) => void): Request<MWAA.Types.CreateWebLoginTokenResponse, AWSError>;
  /**
   * Delete an existing environment.
   */
  deleteEnvironment(params: MWAA.Types.DeleteEnvironmentInput, callback?: (err: AWSError, data: MWAA.Types.DeleteEnvironmentOutput) => void): Request<MWAA.Types.DeleteEnvironmentOutput, AWSError>;
  /**
   * Delete an existing environment.
   */
  deleteEnvironment(callback?: (err: AWSError, data: MWAA.Types.DeleteEnvironmentOutput) => void): Request<MWAA.Types.DeleteEnvironmentOutput, AWSError>;
  /**
   * Get details of an existing environment.
   */
  getEnvironment(params: MWAA.Types.GetEnvironmentInput, callback?: (err: AWSError, data: MWAA.Types.GetEnvironmentOutput) => void): Request<MWAA.Types.GetEnvironmentOutput, AWSError>;
  /**
   * Get details of an existing environment.
   */
  getEnvironment(callback?: (err: AWSError, data: MWAA.Types.GetEnvironmentOutput) => void): Request<MWAA.Types.GetEnvironmentOutput, AWSError>;
  /**
   * List Amazon MWAA Environments.
   */
  listEnvironments(params: MWAA.Types.ListEnvironmentsInput, callback?: (err: AWSError, data: MWAA.Types.ListEnvironmentsOutput) => void): Request<MWAA.Types.ListEnvironmentsOutput, AWSError>;
  /**
   * List Amazon MWAA Environments.
   */
  listEnvironments(callback?: (err: AWSError, data: MWAA.Types.ListEnvironmentsOutput) => void): Request<MWAA.Types.ListEnvironmentsOutput, AWSError>;
  /**
   * List the tags for MWAA environments.
   */
  listTagsForResource(params: MWAA.Types.ListTagsForResourceInput, callback?: (err: AWSError, data: MWAA.Types.ListTagsForResourceOutput) => void): Request<MWAA.Types.ListTagsForResourceOutput, AWSError>;
  /**
   * List the tags for MWAA environments.
   */
  listTagsForResource(callback?: (err: AWSError, data: MWAA.Types.ListTagsForResourceOutput) => void): Request<MWAA.Types.ListTagsForResourceOutput, AWSError>;
  /**
   * An operation for publishing metrics from the customers to the Ops plane.
   */
  publishMetrics(params: MWAA.Types.PublishMetricsInput, callback?: (err: AWSError, data: MWAA.Types.PublishMetricsOutput) => void): Request<MWAA.Types.PublishMetricsOutput, AWSError>;
  /**
   * An operation for publishing metrics from the customers to the Ops plane.
   */
  publishMetrics(callback?: (err: AWSError, data: MWAA.Types.PublishMetricsOutput) => void): Request<MWAA.Types.PublishMetricsOutput, AWSError>;
  /**
   * Add tag to the MWAA environments.
   */
  tagResource(params: MWAA.Types.TagResourceInput, callback?: (err: AWSError, data: MWAA.Types.TagResourceOutput) => void): Request<MWAA.Types.TagResourceOutput, AWSError>;
  /**
   * Add tag to the MWAA environments.
   */
  tagResource(callback?: (err: AWSError, data: MWAA.Types.TagResourceOutput) => void): Request<MWAA.Types.TagResourceOutput, AWSError>;
  /**
   * Remove a tag from the MWAA environments.
   */
  untagResource(params: MWAA.Types.UntagResourceInput, callback?: (err: AWSError, data: MWAA.Types.UntagResourceOutput) => void): Request<MWAA.Types.UntagResourceOutput, AWSError>;
  /**
   * Remove a tag from the MWAA environments.
   */
  untagResource(callback?: (err: AWSError, data: MWAA.Types.UntagResourceOutput) => void): Request<MWAA.Types.UntagResourceOutput, AWSError>;
  /**
   * Update an MWAA environment.
   */
  updateEnvironment(params: MWAA.Types.UpdateEnvironmentInput, callback?: (err: AWSError, data: MWAA.Types.UpdateEnvironmentOutput) => void): Request<MWAA.Types.UpdateEnvironmentOutput, AWSError>;
  /**
   * Update an MWAA environment.
   */
  updateEnvironment(callback?: (err: AWSError, data: MWAA.Types.UpdateEnvironmentOutput) => void): Request<MWAA.Types.UpdateEnvironmentOutput, AWSError>;
}
declare namespace MWAA {
  export type AirflowConfigurationOptions = {[key: string]: ConfigValue};
  export type AirflowVersion = string;
  export type CloudWatchLogGroupArn = string;
  export type ConfigKey = string;
  export type ConfigValue = string;
  export interface CreateCliTokenRequest {
    /**
     * Create a CLI token request for a MWAA environment.
     */
    Name: EnvironmentName;
  }
  export interface CreateCliTokenResponse {
    /**
     * Create an Airflow CLI login token response for the provided JWT token.
     */
    CliToken?: SyntheticCreateCliTokenResponseToken;
    /**
     * Create an Airflow CLI login token response for the provided webserver hostname.
     */
    WebServerHostname?: Hostname;
  }
  export interface CreateEnvironmentInput {
    /**
     * The Apache Airflow configuration setting you want to override in your environment. For more information, see Environment configuration.
     */
    AirflowConfigurationOptions?: SyntheticCreateEnvironmentInputAirflowConfigurationOptions;
    /**
     * The Apache Airflow version you want to use for your environment.
     */
    AirflowVersion?: AirflowVersion;
    /**
     * The relative path to the DAG folder on your Amazon S3 storage bucket. For example, dags. For more information, see Importing DAGs on Amazon MWAA.
     */
    DagS3Path: RelativePath;
    /**
     * The environment class you want to use for your environment. The environment class determines the size of the containers and database used for your Apache Airflow services.
     */
    EnvironmentClass?: EnvironmentClass;
    /**
     * The Amazon Resource Name (ARN) of the execution role for your environment. An execution role is an AWS Identity and Access Management (IAM) role that grants MWAA permission to access AWS services and resources used by your environment. For example, arn:aws:iam::123456789:role/my-execution-role. For more information, see Managing access to Amazon Managed Workflows for Apache Airflow.
     */
    ExecutionRoleArn: IamRoleArn;
    /**
     * The AWS Key Management Service (KMS) key to encrypt and decrypt the data in your environment. You can use an AWS KMS key managed by MWAA, or a custom KMS key (advanced). For more information, see Customer master keys (CMKs) in the AWS KMS developer guide.
     */
    KmsKey?: KmsKey;
    /**
     * The Apache Airflow logs you want to send to Amazon CloudWatch Logs.
     */
    LoggingConfiguration?: LoggingConfigurationInput;
    /**
     * The maximum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers and the Fargate containers that run your tasks up to the number you specify in this field. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra containers leaving the one worker that is included with your environment.
     */
    MaxWorkers?: MaxWorkers;
    /**
     * The minimum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers and the Fargate containers that run your tasks up to the number you specify in the MaxWorkers field. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra containers leaving the worker count you specify in the MinWorkers field.
     */
    MinWorkers?: MinWorkers;
    /**
     * The name of your MWAA environment.
     */
    Name: EnvironmentName;
    /**
     * The VPC networking components you want to use for your environment. At least two private subnet identifiers and one VPC security group identifier are required to create an environment. For more information, see Creating the VPC network for a MWAA environment.
     */
    NetworkConfiguration: NetworkConfiguration;
    /**
     * The plugins.zip file version you want to use.
     */
    PluginsS3ObjectVersion?: S3ObjectVersion;
    /**
     * The relative path to the plugins.zip file on your Amazon S3 storage bucket. For example, plugins.zip. If a relative path is provided in the request, then PluginsS3ObjectVersion is required. For more information, see Importing DAGs on Amazon MWAA.
     */
    PluginsS3Path?: RelativePath;
    /**
     * The requirements.txt file version you want to use.
     */
    RequirementsS3ObjectVersion?: S3ObjectVersion;
    /**
     * The relative path to the requirements.txt file on your Amazon S3 storage bucket. For example, requirements.txt. If a relative path is provided in the request, then RequirementsS3ObjectVersion is required. For more information, see Importing DAGs on Amazon MWAA.
     */
    RequirementsS3Path?: RelativePath;
    /**
     * The Amazon Resource Name (ARN) of your Amazon S3 storage bucket. For example, arn:aws:s3:::airflow-mybucketname.
     */
    SourceBucketArn: S3BucketArn;
    /**
     * The metadata tags you want to attach to your environment. For more information, see Tagging AWS resources.
     */
    Tags?: TagMap;
    /**
     * The networking access of your Apache Airflow web server. A public network allows your Airflow UI to be accessed over the Internet by users granted access in your IAM policy. A private network limits access of your Airflow UI to users within your VPC. For more information, see Creating the VPC network for a MWAA environment.
     */
    WebserverAccessMode?: WebserverAccessMode;
    /**
     * The day and time you want MWAA to start weekly maintenance updates on your environment.
     */
    WeeklyMaintenanceWindowStart?: WeeklyMaintenanceWindowStart;
  }
  export interface CreateEnvironmentOutput {
    /**
     * The resulting Amazon MWAA envirnonment ARN.
     */
    Arn?: EnvironmentArn;
  }
  export interface CreateWebLoginTokenRequest {
    /**
     * Create an Airflow Web UI login token request for a MWAA environment.
     */
    Name: EnvironmentName;
  }
  export interface CreateWebLoginTokenResponse {
    /**
     * Create an Airflow Web UI login token response for the provided webserver hostname.
     */
    WebServerHostname?: Hostname;
    /**
     * Create an Airflow Web UI login token response for the provided JWT token.
     */
    WebToken?: SyntheticCreateWebLoginTokenResponseToken;
  }
  export type CreatedAt = Date;
  export interface DeleteEnvironmentInput {
    /**
     * The name of the environment to delete.
     */
    Name: EnvironmentName;
  }
  export interface DeleteEnvironmentOutput {
  }
  export interface Dimension {
    /**
     * Internal only API.
     */
    Name: String;
    /**
     * Internal only API.
     */
    Value: String;
  }
  export type Dimensions = Dimension[];
  export type Double = number;
  export interface Environment {
    /**
     * The Airflow Configuration Options of the Amazon MWAA Environment.
     */
    AirflowConfigurationOptions?: AirflowConfigurationOptions;
    /**
     * The AirflowV ersion of the Amazon MWAA Environment.
     */
    AirflowVersion?: AirflowVersion;
    /**
     * The ARN of the Amazon MWAA Environment.
     */
    Arn?: EnvironmentArn;
    /**
     * The Created At date of the Amazon MWAA Environment.
     */
    CreatedAt?: CreatedAt;
    /**
     * The Dags S3 Path of the Amazon MWAA Environment.
     */
    DagS3Path?: RelativePath;
    /**
     * The Environment Class (size) of the Amazon MWAA Environment.
     */
    EnvironmentClass?: EnvironmentClass;
    /**
     * The Execution Role ARN of the Amazon MWAA Environment.
     */
    ExecutionRoleArn?: IamRoleArn;
    /**
     * The Kms Key of the Amazon MWAA Environment.
     */
    KmsKey?: KmsKey;
    LastUpdate?: LastUpdate;
    /**
     * The Logging Configuration of the Amazon MWAA Environment.
     */
    LoggingConfiguration?: LoggingConfiguration;
    /**
     * The maximum number of workers to run in your Amazon MWAA Environment.
     */
    MaxWorkers?: MaxWorkers;
    /**
     * The minimum number of workers to run in your Amazon MWAA Environment.
     */
    MinWorkers?: MinWorkers;
    /**
     * The name of the Amazon MWAA Environment.
     */
    Name?: EnvironmentName;
    NetworkConfiguration?: NetworkConfiguration;
    /**
     * The Plugins.zip S3 Object Version of the Amazon MWAA Environment.
     */
    PluginsS3ObjectVersion?: S3ObjectVersion;
    /**
     * The Plugins.zip S3 Path of the Amazon MWAA Environment.
     */
    PluginsS3Path?: RelativePath;
    /**
     * The Requirements.txt file S3 Object Version of the Amazon MWAA Environment.
     */
    RequirementsS3ObjectVersion?: S3ObjectVersion;
    /**
     * The Requirement.txt S3 Path of the Amazon MWAA Environment.
     */
    RequirementsS3Path?: RelativePath;
    /**
     * The Service Role ARN of the Amazon MWAA Environment.
     */
    ServiceRoleArn?: IamRoleArn;
    /**
     * The Source S3 Bucket ARN of the Amazon MWAA Environment.
     */
    SourceBucketArn?: S3BucketArn;
    /**
     * The status of the Amazon MWAA Environment.
     */
    Status?: EnvironmentStatus;
    /**
     * The Tags of the Amazon MWAA Environment.
     */
    Tags?: TagMap;
    /**
     * The Webserver Access Mode of the Amazon MWAA Environment (public or private only).
     */
    WebserverAccessMode?: WebserverAccessMode;
    /**
     * The Webserver URL of the Amazon MWAA Environment.
     */
    WebserverUrl?: WebserverUrl;
    /**
     * The Weekly Maintenance Window Start of the Amazon MWAA Environment.
     */
    WeeklyMaintenanceWindowStart?: WeeklyMaintenanceWindowStart;
  }
  export type EnvironmentArn = string;
  export type EnvironmentClass = string;
  export type EnvironmentList = EnvironmentName[];
  export type EnvironmentName = string;
  export type EnvironmentStatus = "CREATING"|"CREATE_FAILED"|"AVAILABLE"|"UPDATING"|"DELETING"|"DELETED"|"UNAVAILABLE"|"UPDATE_FAILED"|string;
  export type ErrorCode = string;
  export type ErrorMessage = string;
  export interface GetEnvironmentInput {
    /**
     * The name of the environment to retrieve.
     */
    Name: EnvironmentName;
  }
  export interface GetEnvironmentOutput {
    /**
     * A JSON blob with environment details.
     */
    Environment?: Environment;
  }
  export type Hostname = string;
  export type IamRoleArn = string;
  export type Integer = number;
  export type KmsKey = string;
  export interface LastUpdate {
    /**
     * Time that last update occurred.
     */
    CreatedAt?: UpdateCreatedAt;
    /**
     * Error string of last update, if applicable.
     */
    Error?: UpdateError;
    /**
     * Status of last update of SUCCESS, FAILED, CREATING, DELETING.
     */
    Status?: UpdateStatus;
  }
  export interface ListEnvironmentsInput {
    /**
     * The maximum results when listing MWAA environments.
     */
    MaxResults?: ListEnvironmentsInputMaxResultsInteger;
    /**
     * The Next Token when listing MWAA environments.
     */
    NextToken?: NextToken;
  }
  export type ListEnvironmentsInputMaxResultsInteger = number;
  export interface ListEnvironmentsOutput {
    /**
     * The list of Amazon MWAA Environments.
     */
    Environments: EnvironmentList;
    /**
     * The Next Token when listing MWAA environments.
     */
    NextToken?: NextToken;
  }
  export interface ListTagsForResourceInput {
    /**
     * The ARN of the MWAA environment.
     */
    ResourceArn: EnvironmentArn;
  }
  export interface ListTagsForResourceOutput {
    /**
     * The tags of the MWAA environments.
     */
    Tags?: TagMap;
  }
  export interface LoggingConfiguration {
    DagProcessingLogs?: ModuleLoggingConfiguration;
    SchedulerLogs?: ModuleLoggingConfiguration;
    TaskLogs?: ModuleLoggingConfiguration;
    WebserverLogs?: ModuleLoggingConfiguration;
    WorkerLogs?: ModuleLoggingConfiguration;
  }
  export interface LoggingConfigurationInput {
    DagProcessingLogs?: ModuleLoggingConfigurationInput;
    SchedulerLogs?: ModuleLoggingConfigurationInput;
    TaskLogs?: ModuleLoggingConfigurationInput;
    WebserverLogs?: ModuleLoggingConfigurationInput;
    WorkerLogs?: ModuleLoggingConfigurationInput;
  }
  export type LoggingEnabled = boolean;
  export type LoggingLevel = "CRITICAL"|"ERROR"|"WARNING"|"INFO"|"DEBUG"|string;
  export type MaxWorkers = number;
  export type MetricData = MetricDatum[];
  export interface MetricDatum {
    /**
     * Internal only API.
     */
    Dimensions?: Dimensions;
    /**
     * Internal only API.
     */
    MetricName: String;
    /**
     * Internal only API.
     */
    StatisticValues?: StatisticSet;
    /**
     * Internal only API.
     */
    Timestamp: Timestamp;
    Unit?: Unit;
    /**
     * Internal only API.
     */
    Value?: Double;
  }
  export type MinWorkers = number;
  export interface ModuleLoggingConfiguration {
    /**
     * Provides the ARN for the CloudWatch group where the logs will be published.
     */
    CloudWatchLogGroupArn?: CloudWatchLogGroupArn;
    /**
     * Defines that the logging module is enabled.
     */
    Enabled?: LoggingEnabled;
    /**
     * Defines the log level, which can be CRITICAL, ERROR, WARNING, or INFO.
     */
    LogLevel?: LoggingLevel;
  }
  export interface ModuleLoggingConfigurationInput {
    /**
     * Defines that the logging module is enabled.
     */
    Enabled: LoggingEnabled;
    /**
     * Defines the log level, which can be CRITICAL, ERROR, WARNING, or INFO.
     */
    LogLevel: LoggingLevel;
  }
  export interface NetworkConfiguration {
    /**
     * A JSON list of 1 or more security groups IDs by name, in the same VPC as the subnets.
     */
    SecurityGroupIds?: SecurityGroupList;
    /**
     * Provide a JSON list of 2 subnet IDs by name. These must be private subnets, in the same VPC, in two different availability zones.
     */
    SubnetIds?: SubnetList;
  }
  export type NextToken = string;
  export interface PublishMetricsInput {
    /**
     * Publishes environment metric data to Amazon CloudWatch.
     */
    EnvironmentName: EnvironmentName;
    /**
     * Publishes metric data points to Amazon CloudWatch. CloudWatch associates the data points with the specified metrica.
     */
    MetricData: MetricData;
  }
  export interface PublishMetricsOutput {
  }
  export type RelativePath = string;
  export type S3BucketArn = string;
  export type S3ObjectVersion = string;
  export type SecurityGroupId = string;
  export type SecurityGroupList = SecurityGroupId[];
  export interface StatisticSet {
    /**
     * Internal only API.
     */
    Maximum?: Double;
    /**
     * Internal only API.
     */
    Minimum?: Double;
    /**
     * Internal only API.
     */
    SampleCount?: Integer;
    /**
     * Internal only API.
     */
    Sum?: Double;
  }
  export type String = string;
  export type SubnetId = string;
  export type SubnetList = SubnetId[];
  export type SyntheticCreateCliTokenResponseToken = string;
  export type SyntheticCreateEnvironmentInputAirflowConfigurationOptions = {[key: string]: ConfigValue};
  export type SyntheticCreateWebLoginTokenResponseToken = string;
  export type SyntheticUpdateEnvironmentInputAirflowConfigurationOptions = {[key: string]: ConfigValue};
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagMap = {[key: string]: TagValue};
  export interface TagResourceInput {
    /**
     * The tag resource ARN of the MWAA environments.
     */
    ResourceArn: EnvironmentArn;
    /**
     * The tag resource tag of the MWAA environments.
     */
    Tags: TagMap;
  }
  export interface TagResourceOutput {
  }
  export type TagValue = string;
  export type Timestamp = Date;
  export type Unit = "Seconds"|"Microseconds"|"Milliseconds"|"Bytes"|"Kilobytes"|"Megabytes"|"Gigabytes"|"Terabytes"|"Bits"|"Kilobits"|"Megabits"|"Gigabits"|"Terabits"|"Percent"|"Count"|"Bytes/Second"|"Kilobytes/Second"|"Megabytes/Second"|"Gigabytes/Second"|"Terabytes/Second"|"Bits/Second"|"Kilobits/Second"|"Megabits/Second"|"Gigabits/Second"|"Terabits/Second"|"Count/Second"|"None"|string;
  export interface UntagResourceInput {
    /**
     * The tag resource ARN of the MWAA environments.
     */
    ResourceArn: EnvironmentArn;
    /**
     * The tag resource key of the MWAA environments.
     */
    tagKeys: TagKeyList;
  }
  export interface UntagResourceOutput {
  }
  export type UpdateCreatedAt = Date;
  export interface UpdateEnvironmentInput {
    /**
     * The Airflow Configuration Options to update of your Amazon MWAA environment.
     */
    AirflowConfigurationOptions?: SyntheticUpdateEnvironmentInputAirflowConfigurationOptions;
    /**
     * The Airflow Version to update of your Amazon MWAA environment.
     */
    AirflowVersion?: AirflowVersion;
    /**
     * The Dags folder S3 Path to update of your Amazon MWAA environment.
     */
    DagS3Path?: RelativePath;
    /**
     * The Environment Class to update of your Amazon MWAA environment.
     */
    EnvironmentClass?: EnvironmentClass;
    /**
     * The Executio Role ARN to update of your Amazon MWAA environment.
     */
    ExecutionRoleArn?: IamRoleArn;
    /**
     * The Logging Configuration to update of your Amazon MWAA environment.
     */
    LoggingConfiguration?: LoggingConfigurationInput;
    /**
     * The maximum number of workers to update of your Amazon MWAA environment.
     */
    MaxWorkers?: MaxWorkers;
    /**
     * The minimum number of workers to update of your Amazon MWAA environment.
     */
    MinWorkers?: MinWorkers;
    /**
     * The name of your Amazon MWAA environment that you wish to update.
     */
    Name: EnvironmentName;
    /**
     * The Network Configuration to update of your Amazon MWAA environment.
     */
    NetworkConfiguration?: UpdateNetworkConfigurationInput;
    /**
     * The Plugins.zip S3 Object Version to update of your Amazon MWAA environment.
     */
    PluginsS3ObjectVersion?: S3ObjectVersion;
    /**
     * The Plugins.zip S3 Path to update of your Amazon MWAA environment.
     */
    PluginsS3Path?: RelativePath;
    /**
     * The Requirements.txt S3 ObjectV ersion to update of your Amazon MWAA environment.
     */
    RequirementsS3ObjectVersion?: S3ObjectVersion;
    /**
     * The Requirements.txt S3 Path to update of your Amazon MWAA environment.
     */
    RequirementsS3Path?: RelativePath;
    /**
     * The S3 Source Bucket ARN to update of your Amazon MWAA environment.
     */
    SourceBucketArn?: S3BucketArn;
    /**
     * The Webserver Access Mode to update of your Amazon MWAA environment.
     */
    WebserverAccessMode?: WebserverAccessMode;
    /**
     * The Weekly Maintenance Window Start to update of your Amazon MWAA environment.
     */
    WeeklyMaintenanceWindowStart?: WeeklyMaintenanceWindowStart;
  }
  export interface UpdateEnvironmentOutput {
    /**
     * The ARN to update of your Amazon MWAA environment.
     */
    Arn?: EnvironmentArn;
  }
  export interface UpdateError {
    /**
     * Error code of update.
     */
    ErrorCode?: ErrorCode;
    /**
     * Error message of update.
     */
    ErrorMessage?: ErrorMessage;
  }
  export interface UpdateNetworkConfigurationInput {
    /**
     * Provide a JSON list of 1 or more security groups IDs by name, in the same VPC as the subnets.
     */
    SecurityGroupIds: SecurityGroupList;
  }
  export type UpdateStatus = "SUCCESS"|"PENDING"|"FAILED"|string;
  export type WebserverAccessMode = "PRIVATE_ONLY"|"PUBLIC_ONLY"|string;
  export type WebserverUrl = string;
  export type WeeklyMaintenanceWindowStart = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2020-07-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the MWAA client.
   */
  export import Types = MWAA;
}
export = MWAA;
