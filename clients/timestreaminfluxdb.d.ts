import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class TimestreamInfluxDB extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: TimestreamInfluxDB.Types.ClientConfiguration)
  config: Config & TimestreamInfluxDB.Types.ClientConfiguration;
  /**
   * Creates a new Timestream for InfluxDB DB instance.
   */
  createDbInstance(params: TimestreamInfluxDB.Types.CreateDbInstanceInput, callback?: (err: AWSError, data: TimestreamInfluxDB.Types.CreateDbInstanceOutput) => void): Request<TimestreamInfluxDB.Types.CreateDbInstanceOutput, AWSError>;
  /**
   * Creates a new Timestream for InfluxDB DB instance.
   */
  createDbInstance(callback?: (err: AWSError, data: TimestreamInfluxDB.Types.CreateDbInstanceOutput) => void): Request<TimestreamInfluxDB.Types.CreateDbInstanceOutput, AWSError>;
  /**
   * Creates a new Timestream for InfluxDB DB parameter group to associate with DB instances.
   */
  createDbParameterGroup(params: TimestreamInfluxDB.Types.CreateDbParameterGroupInput, callback?: (err: AWSError, data: TimestreamInfluxDB.Types.CreateDbParameterGroupOutput) => void): Request<TimestreamInfluxDB.Types.CreateDbParameterGroupOutput, AWSError>;
  /**
   * Creates a new Timestream for InfluxDB DB parameter group to associate with DB instances.
   */
  createDbParameterGroup(callback?: (err: AWSError, data: TimestreamInfluxDB.Types.CreateDbParameterGroupOutput) => void): Request<TimestreamInfluxDB.Types.CreateDbParameterGroupOutput, AWSError>;
  /**
   * Deletes a Timestream for InfluxDB DB instance.
   */
  deleteDbInstance(params: TimestreamInfluxDB.Types.DeleteDbInstanceInput, callback?: (err: AWSError, data: TimestreamInfluxDB.Types.DeleteDbInstanceOutput) => void): Request<TimestreamInfluxDB.Types.DeleteDbInstanceOutput, AWSError>;
  /**
   * Deletes a Timestream for InfluxDB DB instance.
   */
  deleteDbInstance(callback?: (err: AWSError, data: TimestreamInfluxDB.Types.DeleteDbInstanceOutput) => void): Request<TimestreamInfluxDB.Types.DeleteDbInstanceOutput, AWSError>;
  /**
   * Returns a Timestream for InfluxDB DB instance.
   */
  getDbInstance(params: TimestreamInfluxDB.Types.GetDbInstanceInput, callback?: (err: AWSError, data: TimestreamInfluxDB.Types.GetDbInstanceOutput) => void): Request<TimestreamInfluxDB.Types.GetDbInstanceOutput, AWSError>;
  /**
   * Returns a Timestream for InfluxDB DB instance.
   */
  getDbInstance(callback?: (err: AWSError, data: TimestreamInfluxDB.Types.GetDbInstanceOutput) => void): Request<TimestreamInfluxDB.Types.GetDbInstanceOutput, AWSError>;
  /**
   * Returns a Timestream for InfluxDB DB parameter group.
   */
  getDbParameterGroup(params: TimestreamInfluxDB.Types.GetDbParameterGroupInput, callback?: (err: AWSError, data: TimestreamInfluxDB.Types.GetDbParameterGroupOutput) => void): Request<TimestreamInfluxDB.Types.GetDbParameterGroupOutput, AWSError>;
  /**
   * Returns a Timestream for InfluxDB DB parameter group.
   */
  getDbParameterGroup(callback?: (err: AWSError, data: TimestreamInfluxDB.Types.GetDbParameterGroupOutput) => void): Request<TimestreamInfluxDB.Types.GetDbParameterGroupOutput, AWSError>;
  /**
   * Returns a list of Timestream for InfluxDB DB instances.
   */
  listDbInstances(params: TimestreamInfluxDB.Types.ListDbInstancesInput, callback?: (err: AWSError, data: TimestreamInfluxDB.Types.ListDbInstancesOutput) => void): Request<TimestreamInfluxDB.Types.ListDbInstancesOutput, AWSError>;
  /**
   * Returns a list of Timestream for InfluxDB DB instances.
   */
  listDbInstances(callback?: (err: AWSError, data: TimestreamInfluxDB.Types.ListDbInstancesOutput) => void): Request<TimestreamInfluxDB.Types.ListDbInstancesOutput, AWSError>;
  /**
   * Returns a list of Timestream for InfluxDB DB parameter groups.
   */
  listDbParameterGroups(params: TimestreamInfluxDB.Types.ListDbParameterGroupsInput, callback?: (err: AWSError, data: TimestreamInfluxDB.Types.ListDbParameterGroupsOutput) => void): Request<TimestreamInfluxDB.Types.ListDbParameterGroupsOutput, AWSError>;
  /**
   * Returns a list of Timestream for InfluxDB DB parameter groups.
   */
  listDbParameterGroups(callback?: (err: AWSError, data: TimestreamInfluxDB.Types.ListDbParameterGroupsOutput) => void): Request<TimestreamInfluxDB.Types.ListDbParameterGroupsOutput, AWSError>;
  /**
   * A list of tags applied to the resource.
   */
  listTagsForResource(params: TimestreamInfluxDB.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: TimestreamInfluxDB.Types.ListTagsForResourceResponse) => void): Request<TimestreamInfluxDB.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * A list of tags applied to the resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: TimestreamInfluxDB.Types.ListTagsForResourceResponse) => void): Request<TimestreamInfluxDB.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Tags are composed of a Key/Value pairs. You can use tags to categorize and track your Timestream for InfluxDB resources.
   */
  tagResource(params: TimestreamInfluxDB.Types.TagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Tags are composed of a Key/Value pairs. You can use tags to categorize and track your Timestream for InfluxDB resources.
   */
  tagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the tag from the specified resource.
   */
  untagResource(params: TimestreamInfluxDB.Types.UntagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the tag from the specified resource.
   */
  untagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates a Timestream for InfluxDB DB instance.
   */
  updateDbInstance(params: TimestreamInfluxDB.Types.UpdateDbInstanceInput, callback?: (err: AWSError, data: TimestreamInfluxDB.Types.UpdateDbInstanceOutput) => void): Request<TimestreamInfluxDB.Types.UpdateDbInstanceOutput, AWSError>;
  /**
   * Updates a Timestream for InfluxDB DB instance.
   */
  updateDbInstance(callback?: (err: AWSError, data: TimestreamInfluxDB.Types.UpdateDbInstanceOutput) => void): Request<TimestreamInfluxDB.Types.UpdateDbInstanceOutput, AWSError>;
}
declare namespace TimestreamInfluxDB {
  export type AllocatedStorage = number;
  export type Arn = string;
  export type Boolean = boolean;
  export type Bucket = string;
  export interface CreateDbInstanceInput {
    /**
     * The name that uniquely identifies the DB instance when interacting with the Amazon Timestream for InfluxDB API and CLI commands. This name will also be a prefix included in the endpoint. DB instance names must be unique per customer and per region.
     */
    name: DbInstanceName;
    /**
     * The username of the initial admin user created in InfluxDB. Must start with a letter and can't end with a hyphen or contain two consecutive hyphens. For example, my-user1. This username will allow you to access the InfluxDB UI to perform various administrative tasks and also use the InfluxDB CLI to create an operator token. These attributes will be stored in a Secret created in Amazon Secrets Manager in your account.
     */
    username?: Username;
    /**
     * The password of the initial admin user created in InfluxDB. This password will allow you to access the InfluxDB UI to perform various administrative tasks and also use the InfluxDB CLI to create an operator token. These attributes will be stored in a Secret created in AWS SecretManager in your account.
     */
    password: Password;
    /**
     * The name of the initial organization for the initial admin user in InfluxDB. An InfluxDB organization is a workspace for a group of users.
     */
    organization?: Organization;
    /**
     * The name of the initial InfluxDB bucket. All InfluxDB data is stored in a bucket. A bucket combines the concept of a database and a retention period (the duration of time that each data point persists). A bucket belongs to an organization.
     */
    bucket?: Bucket;
    /**
     * The Timestream for InfluxDB DB instance type to run InfluxDB on.
     */
    dbInstanceType: DbInstanceType;
    /**
     * A list of VPC subnet IDs to associate with the DB instance. Provide at least two VPC subnet IDs in different availability zones when deploying with a Multi-AZ standby.
     */
    vpcSubnetIds: VpcSubnetIdList;
    /**
     * A list of VPC security group IDs to associate with the DB instance.
     */
    vpcSecurityGroupIds: VpcSecurityGroupIdList;
    /**
     * Configures the DB instance with a public IP to facilitate access.
     */
    publiclyAccessible?: Boolean;
    /**
     * The Timestream for InfluxDB DB storage type to read and write InfluxDB data. You can choose between 3 different types of provisioned Influx IOPS included storage according to your workloads requirements:   Influx IO Included 3000 IOPS   Influx IO Included 12000 IOPS   Influx IO Included 16000 IOPS  
     */
    dbStorageType?: DbStorageType;
    /**
     * The amount of storage to allocate for your DB storage type in GiB (gibibytes).
     */
    allocatedStorage: AllocatedStorage;
    /**
     * The id of the DB parameter group to assign to your DB instance. DB parameter groups specify how the database is configured. For example, DB parameter groups can specify the limit for query concurrency.
     */
    dbParameterGroupIdentifier?: DbParameterGroupIdentifier;
    /**
     * Specifies whether the DB instance will be deployed as a standalone instance or with a Multi-AZ standby for high availability.
     */
    deploymentType?: DeploymentType;
    /**
     * Configuration for sending InfluxDB engine logs to a specified S3 bucket.
     */
    logDeliveryConfiguration?: LogDeliveryConfiguration;
    /**
     * A list of key-value pairs to associate with the DB instance.
     */
    tags?: RequestTagMap;
  }
  export interface CreateDbInstanceOutput {
    /**
     * A service-generated unique identifier.
     */
    id: DbInstanceId;
    /**
     * The customer-supplied name that uniquely identifies the DB instance when interacting with the Amazon Timestream for InfluxDB API and CLI commands.
     */
    name: DbInstanceName;
    /**
     * The Amazon Resource Name (ARN) of the DB instance.
     */
    arn: Arn;
    /**
     * The status of the DB instance.
     */
    status?: Status;
    /**
     * The endpoint used to connect to InfluxDB. The default InfluxDB port is 8086.
     */
    endpoint?: String;
    /**
     * The Timestream for InfluxDB instance type that InfluxDB runs on.
     */
    dbInstanceType?: DbInstanceType;
    /**
     * The Timestream for InfluxDB DB storage type that InfluxDB stores data on.
     */
    dbStorageType?: DbStorageType;
    /**
     * The amount of storage allocated for your DB storage type (in gibibytes).
     */
    allocatedStorage?: AllocatedStorage;
    /**
     * Specifies whether the Timestream for InfluxDB is deployed as Single-AZ or with a MultiAZ Standby for High availability.
     */
    deploymentType?: DeploymentType;
    /**
     * A list of VPC subnet IDs associated with the DB instance.
     */
    vpcSubnetIds: VpcSubnetIdList;
    /**
     * Indicates if the DB instance has a public IP to facilitate access.
     */
    publiclyAccessible?: Boolean;
    /**
     * A list of VPC security group IDs associated with the DB instance.
     */
    vpcSecurityGroupIds?: VpcSecurityGroupIdList;
    /**
     * The id of the DB parameter group assigned to your DB instance.
     */
    dbParameterGroupIdentifier?: DbParameterGroupIdentifier;
    /**
     * The Availability Zone in which the DB instance resides.
     */
    availabilityZone?: String;
    /**
     * The Availability Zone in which the standby instance is located when deploying with a MultiAZ standby instance.
     */
    secondaryAvailabilityZone?: String;
    /**
     * Configuration for sending InfluxDB engine logs to send to specified S3 bucket.
     */
    logDeliveryConfiguration?: LogDeliveryConfiguration;
    /**
     * The Amazon Resource Name (ARN) of the AWS Secrets Manager secret containing the initial InfluxDB authorization parameters. The secret value is a JSON formatted key-value pair holding InfluxDB authorization values: organization, bucket, username, and password.
     */
    influxAuthParametersSecretArn?: String;
  }
  export interface CreateDbParameterGroupInput {
    /**
     * The name of the DB parameter group. The name must be unique per customer and per region.
     */
    name: DbParameterGroupName;
    /**
     * A description of the DB parameter group.
     */
    description?: CreateDbParameterGroupInputDescriptionString;
    /**
     * A list of the parameters that comprise the DB parameter group.
     */
    parameters?: Parameters;
    /**
     * A list of key-value pairs to associate with the DB parameter group.
     */
    tags?: RequestTagMap;
  }
  export type CreateDbParameterGroupInputDescriptionString = string;
  export interface CreateDbParameterGroupOutput {
    /**
     * A service-generated unique identifier.
     */
    id: DbParameterGroupId;
    /**
     * The customer-supplied name that uniquely identifies the DB parameter group when interacting with the Amazon Timestream for InfluxDB API and CLI commands.
     */
    name: DbParameterGroupName;
    /**
     * The Amazon Resource Name (ARM) of the DB parameter group.
     */
    arn: Arn;
    /**
     * The description of the DB parameter group.
     */
    description?: String;
    /**
     * A list of the parameters that comprise the DB parameter group.
     */
    parameters?: Parameters;
  }
  export type DbInstanceId = string;
  export type DbInstanceIdentifier = string;
  export type DbInstanceName = string;
  export interface DbInstanceSummary {
    /**
     * The service-generated unique identifier of the DB instance.
     */
    id: DbInstanceId;
    /**
     * This customer-supplied name uniquely identifies the DB instance when interacting with the Amazon Timestream for InfluxDB API and AWS CLI commands.
     */
    name: DbInstanceName;
    /**
     * The Amazon Resource Name (ARN) of the DB instance.
     */
    arn: Arn;
    /**
     * The status of the DB instance.
     */
    status?: Status;
    /**
     * The endpoint used to connect to InfluxDB. The default InfluxDB port is 8086.
     */
    endpoint?: String;
    /**
     * The Timestream for InfluxDB instance type to run InfluxDB on.
     */
    dbInstanceType?: DbInstanceType;
    /**
     * The storage type for your DB instance.
     */
    dbStorageType?: DbStorageType;
    /**
     * The amount of storage to allocate for your DbStorageType in GiB (gibibytes).
     */
    allocatedStorage?: AllocatedStorage;
    /**
     * Single-Instance or with a MultiAZ Standby for High availability.
     */
    deploymentType?: DeploymentType;
  }
  export type DbInstanceSummaryList = DbInstanceSummary[];
  export type DbInstanceType = "db.influx.medium"|"db.influx.large"|"db.influx.xlarge"|"db.influx.2xlarge"|"db.influx.4xlarge"|"db.influx.8xlarge"|"db.influx.12xlarge"|"db.influx.16xlarge"|string;
  export type DbParameterGroupId = string;
  export type DbParameterGroupIdentifier = string;
  export type DbParameterGroupName = string;
  export interface DbParameterGroupSummary {
    /**
     * A service-generated unique identifier.
     */
    id: DbParameterGroupId;
    /**
     * This customer-supplied name uniquely identifies the parameter group.
     */
    name: DbParameterGroupName;
    /**
     * The Amazon Resource Name (ARN) of the DB parameter group.
     */
    arn: Arn;
    /**
     * A description of the DB parameter group.
     */
    description?: String;
  }
  export type DbParameterGroupSummaryList = DbParameterGroupSummary[];
  export type DbStorageType = "InfluxIOIncludedT1"|"InfluxIOIncludedT2"|"InfluxIOIncludedT3"|string;
  export interface DeleteDbInstanceInput {
    /**
     * The id of the DB instance.
     */
    identifier: DbInstanceIdentifier;
  }
  export interface DeleteDbInstanceOutput {
    /**
     * A service-generated unique identifier.
     */
    id: DbInstanceId;
    /**
     * The customer-supplied name that uniquely identifies the DB instance when interacting with the Amazon Timestream for InfluxDB API and CLI commands.
     */
    name: DbInstanceName;
    /**
     * The Amazon Resource Name (ARN) of the DB instance.
     */
    arn: Arn;
    /**
     * The status of the DB instance.
     */
    status?: Status;
    /**
     * The endpoint used to connect to InfluxDB. The default InfluxDB port is 8086.
     */
    endpoint?: String;
    /**
     * The Timestream for InfluxDB instance type that InfluxDB runs on.
     */
    dbInstanceType?: DbInstanceType;
    /**
     * The Timestream for InfluxDB DB storage type that InfluxDB stores data on.
     */
    dbStorageType?: DbStorageType;
    /**
     * The amount of storage allocated for your DB storage type (in gibibytes).
     */
    allocatedStorage?: AllocatedStorage;
    /**
     * Specifies whether the Timestream for InfluxDB is deployed as Single-AZ or with a MultiAZ Standby for High availability.
     */
    deploymentType?: DeploymentType;
    /**
     * A list of VPC subnet IDs associated with the DB instance.
     */
    vpcSubnetIds: VpcSubnetIdList;
    /**
     * Indicates if the DB instance has a public IP to facilitate access.
     */
    publiclyAccessible?: Boolean;
    /**
     * A list of VPC security group IDs associated with the DB instance.
     */
    vpcSecurityGroupIds?: VpcSecurityGroupIdList;
    /**
     * The id of the DB parameter group assigned to your DB instance.
     */
    dbParameterGroupIdentifier?: DbParameterGroupIdentifier;
    /**
     * The Availability Zone in which the DB instance resides.
     */
    availabilityZone?: String;
    /**
     * The Availability Zone in which the standby instance is located when deploying with a MultiAZ standby instance.
     */
    secondaryAvailabilityZone?: String;
    /**
     * Configuration for sending InfluxDB engine logs to send to specified S3 bucket.
     */
    logDeliveryConfiguration?: LogDeliveryConfiguration;
    /**
     * The Amazon Resource Name (ARN) of the AWS Secrets Manager secret containing the initial InfluxDB authorization parameters. The secret value is a JSON formatted key-value pair holding InfluxDB authorization values: organization, bucket, username, and password.
     */
    influxAuthParametersSecretArn?: String;
  }
  export type DeploymentType = "SINGLE_AZ"|"WITH_MULTIAZ_STANDBY"|string;
  export interface GetDbInstanceInput {
    /**
     * The id of the DB instance.
     */
    identifier: DbInstanceIdentifier;
  }
  export interface GetDbInstanceOutput {
    /**
     * A service-generated unique identifier.
     */
    id: DbInstanceId;
    /**
     * The customer-supplied name that uniquely identifies the DB instance when interacting with the Amazon Timestream for InfluxDB API and CLI commands.
     */
    name: DbInstanceName;
    /**
     * The Amazon Resource Name (ARN) of the DB instance.
     */
    arn: Arn;
    /**
     * The status of the DB instance.
     */
    status?: Status;
    /**
     * The endpoint used to connect to InfluxDB. The default InfluxDB port is 8086.
     */
    endpoint?: String;
    /**
     * The Timestream for InfluxDB instance type that InfluxDB runs on.
     */
    dbInstanceType?: DbInstanceType;
    /**
     * The Timestream for InfluxDB DB storage type that InfluxDB stores data on.
     */
    dbStorageType?: DbStorageType;
    /**
     * The amount of storage allocated for your DB storage type (in gibibytes).
     */
    allocatedStorage?: AllocatedStorage;
    /**
     * Specifies whether the Timestream for InfluxDB is deployed as Single-AZ or with a MultiAZ Standby for High availability.
     */
    deploymentType?: DeploymentType;
    /**
     * A list of VPC subnet IDs associated with the DB instance.
     */
    vpcSubnetIds: VpcSubnetIdList;
    /**
     * Indicates if the DB instance has a public IP to facilitate access.
     */
    publiclyAccessible?: Boolean;
    /**
     * A list of VPC security group IDs associated with the DB instance.
     */
    vpcSecurityGroupIds?: VpcSecurityGroupIdList;
    /**
     * The id of the DB parameter group assigned to your DB instance.
     */
    dbParameterGroupIdentifier?: DbParameterGroupIdentifier;
    /**
     * The Availability Zone in which the DB instance resides.
     */
    availabilityZone?: String;
    /**
     * The Availability Zone in which the standby instance is located when deploying with a MultiAZ standby instance.
     */
    secondaryAvailabilityZone?: String;
    /**
     * Configuration for sending InfluxDB engine logs to send to specified S3 bucket.
     */
    logDeliveryConfiguration?: LogDeliveryConfiguration;
    /**
     * The Amazon Resource Name (ARN) of the AWS Secrets Manager secret containing the initial InfluxDB authorization parameters. The secret value is a JSON formatted key-value pair holding InfluxDB authorization values: organization, bucket, username, and password.
     */
    influxAuthParametersSecretArn?: String;
  }
  export interface GetDbParameterGroupInput {
    /**
     * The id of the DB parameter group.
     */
    identifier: DbParameterGroupIdentifier;
  }
  export interface GetDbParameterGroupOutput {
    /**
     * A service-generated unique identifier.
     */
    id: DbParameterGroupId;
    /**
     * The customer-supplied name that uniquely identifies the DB parameter group when interacting with the Amazon Timestream for InfluxDB API and CLI commands.
     */
    name: DbParameterGroupName;
    /**
     * The Amazon Resource Name (ARN) of the DB parameter group.
     */
    arn: Arn;
    /**
     * A description of the DB parameter group.
     */
    description?: String;
    /**
     * The parameters that comprise the DB parameter group.
     */
    parameters?: Parameters;
  }
  export interface InfluxDBv2Parameters {
    /**
     * Include option to show detailed logs for Flux queries. Default: false
     */
    fluxLogEnabled?: Boolean;
    /**
     * Log output level. InfluxDB outputs log entries with severity levels greater than or equal to the level specified. Default: info
     */
    logLevel?: LogLevel;
    /**
     * Disable the task scheduler. If problematic tasks prevent InfluxDB from starting, use this option to start InfluxDB without scheduling or executing tasks. Default: false
     */
    noTasks?: Boolean;
    /**
     * Number of queries allowed to execute concurrently. Setting to 0 allows an unlimited number of concurrent queries. Default: 0
     */
    queryConcurrency?: InfluxDBv2ParametersQueryConcurrencyInteger;
    /**
     * Maximum number of queries allowed in execution queue. When queue limit is reached, new queries are rejected. Setting to 0 allows an unlimited number of queries in the queue. Default: 0
     */
    queryQueueSize?: InfluxDBv2ParametersQueryQueueSizeInteger;
    /**
     * Enable tracing in InfluxDB and specifies the tracing type. Tracing is disabled by default.
     */
    tracingType?: TracingType;
    /**
     * Disable the HTTP /metrics endpoint which exposes internal InfluxDB metrics. Default: false
     */
    metricsDisabled?: Boolean;
  }
  export type InfluxDBv2ParametersQueryConcurrencyInteger = number;
  export type InfluxDBv2ParametersQueryQueueSizeInteger = number;
  export interface ListDbInstancesInput {
    /**
     * The pagination token. To resume pagination, provide the NextToken value as argument of a subsequent API invocation.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of items to return in the output. If the total number of items available is more than the value specified, a NextToken is provided in the output. To resume pagination, provide the NextToken value as argument of a subsequent API invocation.
     */
    maxResults?: MaxResults;
  }
  export interface ListDbInstancesOutput {
    /**
     * A list of Timestream for InfluxDB DB instance summaries.
     */
    items: DbInstanceSummaryList;
    /**
     * Token from a previous call of the operation. When this value is provided, the service returns results from where the previous response left off.
     */
    nextToken?: NextToken;
  }
  export interface ListDbParameterGroupsInput {
    /**
     * The pagination token. To resume pagination, provide the NextToken value as argument of a subsequent API invocation.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of items to return in the output. If the total number of items available is more than the value specified, a NextToken is provided in the output. To resume pagination, provide the NextToken value as argument of a subsequent API invocation.
     */
    maxResults?: MaxResults;
  }
  export interface ListDbParameterGroupsOutput {
    /**
     * A list of Timestream for InfluxDB DB parameter group summaries.
     */
    items: DbParameterGroupSummaryList;
    /**
     * Token from a previous call of the operation. When this value is provided, the service returns results from where the previous response left off.
     */
    nextToken?: NextToken;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the tagged resource.
     */
    resourceArn: Arn;
  }
  export interface ListTagsForResourceResponse {
    /**
     * A list of tags used to categorize and track resources.
     */
    tags?: ResponseTagMap;
  }
  export interface LogDeliveryConfiguration {
    /**
     * Configuration for S3 bucket log delivery.
     */
    s3Configuration: S3Configuration;
  }
  export type LogLevel = "debug"|"info"|"error"|string;
  export type MaxResults = number;
  export type NextToken = string;
  export type Organization = string;
  export interface Parameters {
    /**
     * All the customer-modifiable InfluxDB v2 parameters in Timestream for InfluxDB.
     */
    InfluxDBv2?: InfluxDBv2Parameters;
  }
  export type Password = string;
  export type RequestTagMap = {[key: string]: TagValue};
  export type ResponseTagMap = {[key: string]: TagValue};
  export interface S3Configuration {
    /**
     * The name of the S3 bucket to deliver logs to.
     */
    bucketName: S3ConfigurationBucketNameString;
    /**
     * Indicates whether log delivery to the S3 bucket is enabled.
     */
    enabled: Boolean;
  }
  export type S3ConfigurationBucketNameString = string;
  export type Status = "CREATING"|"AVAILABLE"|"DELETING"|"MODIFYING"|"UPDATING"|"DELETED"|"FAILED"|"UPDATING_DEPLOYMENT_TYPE"|"UPDATING_INSTANCE_TYPE"|string;
  export type String = string;
  export type TagKey = string;
  export type TagKeys = TagKey[];
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the tagged resource.
     */
    resourceArn: Arn;
    /**
     * A list of tags used to categorize and track resources.
     */
    tags: RequestTagMap;
  }
  export type TagValue = string;
  export type TracingType = "log"|"jaeger"|string;
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the tagged resource.
     */
    resourceArn: Arn;
    /**
     * The keys used to identify the tags.
     */
    tagKeys: TagKeys;
  }
  export interface UpdateDbInstanceInput {
    /**
     * The id of the DB instance.
     */
    identifier: DbInstanceIdentifier;
    /**
     * Configuration for sending InfluxDB engine logs to send to specified S3 bucket.
     */
    logDeliveryConfiguration?: LogDeliveryConfiguration;
    /**
     * The id of the DB parameter group to assign to your DB instance. DB parameter groups specify how the database is configured. For example, DB parameter groups can specify the limit for query concurrency.
     */
    dbParameterGroupIdentifier?: DbParameterGroupIdentifier;
    /**
     * The Timestream for InfluxDB DB instance type to run InfluxDB on.
     */
    dbInstanceType?: DbInstanceType;
    /**
     * Specifies whether the DB instance will be deployed as a standalone instance or with a Multi-AZ standby for high availability.
     */
    deploymentType?: DeploymentType;
  }
  export interface UpdateDbInstanceOutput {
    /**
     * A service-generated unique identifier.
     */
    id: DbInstanceId;
    /**
     * This customer-supplied name uniquely identifies the DB instance when interacting with the Amazon Timestream for InfluxDB API and AWS CLI commands.
     */
    name: DbInstanceName;
    /**
     * The Amazon Resource Name (ARN) of the DB instance.
     */
    arn: Arn;
    /**
     * The status of the DB instance.
     */
    status?: Status;
    /**
     * The endpoint used to connect to InfluxDB. The default InfluxDB port is 8086.
     */
    endpoint?: String;
    /**
     * The Timestream for InfluxDB instance type that InfluxDB runs on.
     */
    dbInstanceType?: DbInstanceType;
    /**
     * The Timestream for InfluxDB DB storage type that InfluxDB stores data on.
     */
    dbStorageType?: DbStorageType;
    /**
     * The amount of storage allocated for your DB storage type (in gibibytes).
     */
    allocatedStorage?: AllocatedStorage;
    /**
     * Specifies whether the Timestream for InfluxDB is deployed as Single-AZ or with a MultiAZ Standby for High availability.
     */
    deploymentType?: DeploymentType;
    /**
     * A list of VPC subnet IDs associated with the DB instance.
     */
    vpcSubnetIds: VpcSubnetIdList;
    /**
     * Indicates if the DB instance has a public IP to facilitate access.
     */
    publiclyAccessible?: Boolean;
    /**
     * A list of VPC security group IDs associated with the DB instance.
     */
    vpcSecurityGroupIds?: VpcSecurityGroupIdList;
    /**
     * The id of the DB parameter group assigned to your DB instance.
     */
    dbParameterGroupIdentifier?: DbParameterGroupIdentifier;
    /**
     * The Availability Zone in which the DB instance resides.
     */
    availabilityZone?: String;
    /**
     * The Availability Zone in which the standby instance is located when deploying with a MultiAZ standby instance.
     */
    secondaryAvailabilityZone?: String;
    /**
     * Configuration for sending InfluxDB engine logs to send to specified S3 bucket.
     */
    logDeliveryConfiguration?: LogDeliveryConfiguration;
    /**
     * The Amazon Resource Name (ARN) of the AWS Secrets Manager secret containing the initial InfluxDB authorization parameters. The secret value is a JSON formatted key-value pair holding InfluxDB authorization values: organization, bucket, username, and password.
     */
    influxAuthParametersSecretArn?: String;
  }
  export type Username = string;
  export type VpcSecurityGroupId = string;
  export type VpcSecurityGroupIdList = VpcSecurityGroupId[];
  export type VpcSubnetId = string;
  export type VpcSubnetIdList = VpcSubnetId[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2023-01-27"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the TimestreamInfluxDB client.
   */
  export import Types = TimestreamInfluxDB;
}
export = TimestreamInfluxDB;
