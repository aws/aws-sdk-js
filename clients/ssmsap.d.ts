import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class SsmSap extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: SsmSap.Types.ClientConfiguration)
  config: Config & SsmSap.Types.ClientConfiguration;
  /**
   * Removes permissions associated with the target database.
   */
  deleteResourcePermission(params: SsmSap.Types.DeleteResourcePermissionInput, callback?: (err: AWSError, data: SsmSap.Types.DeleteResourcePermissionOutput) => void): Request<SsmSap.Types.DeleteResourcePermissionOutput, AWSError>;
  /**
   * Removes permissions associated with the target database.
   */
  deleteResourcePermission(callback?: (err: AWSError, data: SsmSap.Types.DeleteResourcePermissionOutput) => void): Request<SsmSap.Types.DeleteResourcePermissionOutput, AWSError>;
  /**
   * Deregister an SAP application with AWS Systems Manager for SAP. This action does not aﬀect the existing setup of your SAP workloads on Amazon EC2.
   */
  deregisterApplication(params: SsmSap.Types.DeregisterApplicationInput, callback?: (err: AWSError, data: SsmSap.Types.DeregisterApplicationOutput) => void): Request<SsmSap.Types.DeregisterApplicationOutput, AWSError>;
  /**
   * Deregister an SAP application with AWS Systems Manager for SAP. This action does not aﬀect the existing setup of your SAP workloads on Amazon EC2.
   */
  deregisterApplication(callback?: (err: AWSError, data: SsmSap.Types.DeregisterApplicationOutput) => void): Request<SsmSap.Types.DeregisterApplicationOutput, AWSError>;
  /**
   * Gets an application registered with AWS Systems Manager for SAP. It also returns the components of the application.
   */
  getApplication(params: SsmSap.Types.GetApplicationInput, callback?: (err: AWSError, data: SsmSap.Types.GetApplicationOutput) => void): Request<SsmSap.Types.GetApplicationOutput, AWSError>;
  /**
   * Gets an application registered with AWS Systems Manager for SAP. It also returns the components of the application.
   */
  getApplication(callback?: (err: AWSError, data: SsmSap.Types.GetApplicationOutput) => void): Request<SsmSap.Types.GetApplicationOutput, AWSError>;
  /**
   * Gets the component of an application registered with AWS Systems Manager for SAP.
   */
  getComponent(params: SsmSap.Types.GetComponentInput, callback?: (err: AWSError, data: SsmSap.Types.GetComponentOutput) => void): Request<SsmSap.Types.GetComponentOutput, AWSError>;
  /**
   * Gets the component of an application registered with AWS Systems Manager for SAP.
   */
  getComponent(callback?: (err: AWSError, data: SsmSap.Types.GetComponentOutput) => void): Request<SsmSap.Types.GetComponentOutput, AWSError>;
  /**
   * Gets the SAP HANA database of an application registered with AWS Systems Manager for SAP.
   */
  getDatabase(params: SsmSap.Types.GetDatabaseInput, callback?: (err: AWSError, data: SsmSap.Types.GetDatabaseOutput) => void): Request<SsmSap.Types.GetDatabaseOutput, AWSError>;
  /**
   * Gets the SAP HANA database of an application registered with AWS Systems Manager for SAP.
   */
  getDatabase(callback?: (err: AWSError, data: SsmSap.Types.GetDatabaseOutput) => void): Request<SsmSap.Types.GetDatabaseOutput, AWSError>;
  /**
   * Gets the details of an operation by specifying the operation ID.
   */
  getOperation(params: SsmSap.Types.GetOperationInput, callback?: (err: AWSError, data: SsmSap.Types.GetOperationOutput) => void): Request<SsmSap.Types.GetOperationOutput, AWSError>;
  /**
   * Gets the details of an operation by specifying the operation ID.
   */
  getOperation(callback?: (err: AWSError, data: SsmSap.Types.GetOperationOutput) => void): Request<SsmSap.Types.GetOperationOutput, AWSError>;
  /**
   * Gets permissions associated with the target database.
   */
  getResourcePermission(params: SsmSap.Types.GetResourcePermissionInput, callback?: (err: AWSError, data: SsmSap.Types.GetResourcePermissionOutput) => void): Request<SsmSap.Types.GetResourcePermissionOutput, AWSError>;
  /**
   * Gets permissions associated with the target database.
   */
  getResourcePermission(callback?: (err: AWSError, data: SsmSap.Types.GetResourcePermissionOutput) => void): Request<SsmSap.Types.GetResourcePermissionOutput, AWSError>;
  /**
   * Lists all the applications registered with AWS Systems Manager for SAP.
   */
  listApplications(params: SsmSap.Types.ListApplicationsInput, callback?: (err: AWSError, data: SsmSap.Types.ListApplicationsOutput) => void): Request<SsmSap.Types.ListApplicationsOutput, AWSError>;
  /**
   * Lists all the applications registered with AWS Systems Manager for SAP.
   */
  listApplications(callback?: (err: AWSError, data: SsmSap.Types.ListApplicationsOutput) => void): Request<SsmSap.Types.ListApplicationsOutput, AWSError>;
  /**
   * Lists all the components registered with AWS Systems Manager for SAP.
   */
  listComponents(params: SsmSap.Types.ListComponentsInput, callback?: (err: AWSError, data: SsmSap.Types.ListComponentsOutput) => void): Request<SsmSap.Types.ListComponentsOutput, AWSError>;
  /**
   * Lists all the components registered with AWS Systems Manager for SAP.
   */
  listComponents(callback?: (err: AWSError, data: SsmSap.Types.ListComponentsOutput) => void): Request<SsmSap.Types.ListComponentsOutput, AWSError>;
  /**
   * Lists the SAP HANA databases of an application registered with AWS Systems Manager for SAP.
   */
  listDatabases(params: SsmSap.Types.ListDatabasesInput, callback?: (err: AWSError, data: SsmSap.Types.ListDatabasesOutput) => void): Request<SsmSap.Types.ListDatabasesOutput, AWSError>;
  /**
   * Lists the SAP HANA databases of an application registered with AWS Systems Manager for SAP.
   */
  listDatabases(callback?: (err: AWSError, data: SsmSap.Types.ListDatabasesOutput) => void): Request<SsmSap.Types.ListDatabasesOutput, AWSError>;
  /**
   * Lists all tags on an SAP HANA application and/or database registered with AWS Systems Manager for SAP.
   */
  listTagsForResource(params: SsmSap.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: SsmSap.Types.ListTagsForResourceResponse) => void): Request<SsmSap.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists all tags on an SAP HANA application and/or database registered with AWS Systems Manager for SAP.
   */
  listTagsForResource(callback?: (err: AWSError, data: SsmSap.Types.ListTagsForResourceResponse) => void): Request<SsmSap.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Adds permissions to the target database.
   */
  putResourcePermission(params: SsmSap.Types.PutResourcePermissionInput, callback?: (err: AWSError, data: SsmSap.Types.PutResourcePermissionOutput) => void): Request<SsmSap.Types.PutResourcePermissionOutput, AWSError>;
  /**
   * Adds permissions to the target database.
   */
  putResourcePermission(callback?: (err: AWSError, data: SsmSap.Types.PutResourcePermissionOutput) => void): Request<SsmSap.Types.PutResourcePermissionOutput, AWSError>;
  /**
   * Register an SAP application with AWS Systems Manager for SAP. You must meet the following requirements before registering.  The SAP application you want to register with AWS Systems Manager for SAP is running on Amazon EC2. AWS Systems Manager Agent must be setup on an Amazon EC2 instance along with the required IAM permissions. Amazon EC2 instance(s) must have access to the secrets created in AWS Secrets Manager to manage SAP applications and components.
   */
  registerApplication(params: SsmSap.Types.RegisterApplicationInput, callback?: (err: AWSError, data: SsmSap.Types.RegisterApplicationOutput) => void): Request<SsmSap.Types.RegisterApplicationOutput, AWSError>;
  /**
   * Register an SAP application with AWS Systems Manager for SAP. You must meet the following requirements before registering.  The SAP application you want to register with AWS Systems Manager for SAP is running on Amazon EC2. AWS Systems Manager Agent must be setup on an Amazon EC2 instance along with the required IAM permissions. Amazon EC2 instance(s) must have access to the secrets created in AWS Secrets Manager to manage SAP applications and components.
   */
  registerApplication(callback?: (err: AWSError, data: SsmSap.Types.RegisterApplicationOutput) => void): Request<SsmSap.Types.RegisterApplicationOutput, AWSError>;
  /**
   * Creates tag for a resource by specifying the ARN.
   */
  tagResource(params: SsmSap.Types.TagResourceRequest, callback?: (err: AWSError, data: SsmSap.Types.TagResourceResponse) => void): Request<SsmSap.Types.TagResourceResponse, AWSError>;
  /**
   * Creates tag for a resource by specifying the ARN.
   */
  tagResource(callback?: (err: AWSError, data: SsmSap.Types.TagResourceResponse) => void): Request<SsmSap.Types.TagResourceResponse, AWSError>;
  /**
   * Delete the tags for a resource.
   */
  untagResource(params: SsmSap.Types.UntagResourceRequest, callback?: (err: AWSError, data: SsmSap.Types.UntagResourceResponse) => void): Request<SsmSap.Types.UntagResourceResponse, AWSError>;
  /**
   * Delete the tags for a resource.
   */
  untagResource(callback?: (err: AWSError, data: SsmSap.Types.UntagResourceResponse) => void): Request<SsmSap.Types.UntagResourceResponse, AWSError>;
  /**
   * 
   */
  updateApplicationSettings(params: SsmSap.Types.UpdateApplicationSettingsInput, callback?: (err: AWSError, data: SsmSap.Types.UpdateApplicationSettingsOutput) => void): Request<SsmSap.Types.UpdateApplicationSettingsOutput, AWSError>;
  /**
   * 
   */
  updateApplicationSettings(callback?: (err: AWSError, data: SsmSap.Types.UpdateApplicationSettingsOutput) => void): Request<SsmSap.Types.UpdateApplicationSettingsOutput, AWSError>;
}
declare namespace SsmSap {
  export type AppRegistryArn = string;
  export interface Application {
    /**
     * 
     */
    Id?: ApplicationId;
    /**
     * 
     */
    Type?: ApplicationType;
    /**
     * 
     */
    Arn?: SsmSapArn;
    /**
     * 
     */
    AppRegistryArn?: AppRegistryArn;
    /**
     * 
     */
    Status?: ApplicationStatus;
    /**
     * 
     */
    Components?: ComponentIdList;
    /**
     * 
     */
    LastUpdated?: Timestamp;
    /**
     * 
     */
    StatusMessage?: String;
  }
  export interface ApplicationCredential {
    /**
     * 
     */
    DatabaseName: DatabaseName;
    /**
     * 
     */
    CredentialType: CredentialType;
    /**
     * 
     */
    SecretId: SecretId;
  }
  export type ApplicationCredentialList = ApplicationCredential[];
  export type ApplicationId = string;
  export type ApplicationStatus = "ACTIVATED"|"STARTING"|"STOPPED"|"STOPPING"|"FAILED"|"REGISTERING"|"DELETING"|"UNKNOWN"|string;
  export interface ApplicationSummary {
    /**
     * 
     */
    Id?: ApplicationId;
    /**
     * 
     */
    Type?: ApplicationType;
    /**
     * 
     */
    Arn?: SsmSapArn;
    /**
     * 
     */
    Tags?: TagMap;
  }
  export type ApplicationSummaryList = ApplicationSummary[];
  export type ApplicationType = "HANA"|string;
  export type Arn = string;
  export interface Component {
    /**
     * 
     */
    ComponentId?: ComponentId;
    /**
     * 
     */
    ApplicationId?: ApplicationId;
    /**
     * 
     */
    ComponentType?: ComponentType;
    /**
     * 
     */
    Status?: ComponentStatus;
    /**
     * 
     */
    Databases?: DatabaseIdList;
    /**
     * 
     */
    Hosts?: HostList;
    /**
     * 
     */
    PrimaryHost?: String;
    /**
     * 
     */
    LastUpdated?: Timestamp;
  }
  export type ComponentId = string;
  export type ComponentIdList = ComponentId[];
  export type ComponentStatus = "ACTIVATED"|string;
  export interface ComponentSummary {
    /**
     * 
     */
    ApplicationId?: ApplicationId;
    /**
     * 
     */
    ComponentId?: ComponentId;
    /**
     * 
     */
    ComponentType?: ComponentType;
    /**
     * 
     */
    Tags?: TagMap;
  }
  export type ComponentSummaryList = ComponentSummary[];
  export type ComponentType = "HANA"|string;
  export type CredentialType = "ADMIN"|string;
  export interface Database {
    /**
     * 
     */
    ApplicationId?: ApplicationId;
    /**
     * 
     */
    ComponentId?: ComponentId;
    /**
     * 
     */
    Credentials?: ApplicationCredentialList;
    /**
     * 
     */
    DatabaseId?: DatabaseId;
    /**
     * 
     */
    DatabaseName?: String;
    /**
     * 
     */
    DatabaseType?: DatabaseType;
    /**
     * 
     */
    Arn?: SsmSapArn;
    /**
     * 
     */
    Status?: DatabaseStatus;
    /**
     * 
     */
    PrimaryHost?: String;
    /**
     * 
     */
    SQLPort?: Integer;
    /**
     * 
     */
    LastUpdated?: Timestamp;
  }
  export type DatabaseId = string;
  export type DatabaseIdList = DatabaseId[];
  export type DatabaseName = string;
  export type DatabaseStatus = "RUNNING"|"STARTING"|"STOPPED"|"WARNING"|"UNKNOWN"|string;
  export interface DatabaseSummary {
    /**
     * 
     */
    ApplicationId?: ApplicationId;
    /**
     * 
     */
    ComponentId?: ComponentId;
    /**
     * 
     */
    DatabaseId?: DatabaseId;
    /**
     * 
     */
    DatabaseType?: DatabaseType;
    /**
     * 
     */
    Arn?: SsmSapArn;
    /**
     * 
     */
    Tags?: TagMap;
  }
  export type DatabaseSummaryList = DatabaseSummary[];
  export type DatabaseType = "SYSTEM"|"TENANT"|string;
  export interface DeleteResourcePermissionInput {
    /**
     * 
     */
    ActionType?: PermissionActionType;
    /**
     * 
     */
    SourceResourceArn?: Arn;
    /**
     * 
     */
    ResourceArn: Arn;
  }
  export interface DeleteResourcePermissionOutput {
    /**
     * 
     */
    Policy?: String;
  }
  export interface DeregisterApplicationInput {
    /**
     * 
     */
    ApplicationId: ApplicationId;
  }
  export interface DeregisterApplicationOutput {
  }
  export interface GetApplicationInput {
    /**
     * 
     */
    ApplicationId?: ApplicationId;
    /**
     * 
     */
    ApplicationArn?: SsmSapArn;
  }
  export interface GetApplicationOutput {
    /**
     * 
     */
    Application?: Application;
    /**
     * 
     */
    Tags?: TagMap;
  }
  export interface GetComponentInput {
    /**
     * 
     */
    ApplicationId: ApplicationId;
    /**
     * 
     */
    ComponentId: ComponentId;
  }
  export interface GetComponentOutput {
    /**
     * 
     */
    Component?: Component;
  }
  export interface GetDatabaseInput {
    /**
     * 
     */
    ApplicationId?: ApplicationId;
    /**
     * 
     */
    ComponentId?: ComponentId;
    /**
     * 
     */
    DatabaseId?: DatabaseId;
    /**
     * 
     */
    DatabaseArn?: SsmSapArn;
  }
  export interface GetDatabaseOutput {
    /**
     * 
     */
    Database?: Database;
    /**
     * 
     */
    Tags?: TagMap;
  }
  export interface GetOperationInput {
    /**
     * 
     */
    OperationId: OperationId;
  }
  export interface GetOperationOutput {
    /**
     * 
     */
    Operation?: Operation;
  }
  export interface GetResourcePermissionInput {
    /**
     * 
     */
    ActionType?: PermissionActionType;
    /**
     * 
     */
    ResourceArn: Arn;
  }
  export interface GetResourcePermissionOutput {
    /**
     * 
     */
    Policy?: String;
  }
  export interface Host {
    /**
     * 
     */
    HostName?: String;
    /**
     * 
     */
    HostRole?: HostRole;
    /**
     * 
     */
    HostIp?: String;
    /**
     * 
     */
    InstanceId?: String;
  }
  export type HostList = Host[];
  export type HostRole = "LEADER"|"WORKER"|"STANDBY"|"UNKNOWN"|string;
  export type InstanceId = string;
  export type InstanceList = InstanceId[];
  export type Integer = number;
  export interface ListApplicationsInput {
    /**
     * 
     */
    NextToken?: NextToken;
    /**
     * 
     */
    MaxResults?: MaxResults;
  }
  export interface ListApplicationsOutput {
    /**
     * 
     */
    Applications?: ApplicationSummaryList;
    /**
     * 
     */
    NextToken?: NextToken;
  }
  export interface ListComponentsInput {
    /**
     * 
     */
    ApplicationId?: ApplicationId;
    /**
     * 
     */
    NextToken?: NextToken;
    /**
     * 
     */
    MaxResults?: MaxResults;
  }
  export interface ListComponentsOutput {
    /**
     * 
     */
    Components?: ComponentSummaryList;
    /**
     * 
     */
    NextToken?: NextToken;
  }
  export interface ListDatabasesInput {
    /**
     * 
     */
    ApplicationId?: ApplicationId;
    /**
     * 
     */
    ComponentId?: ComponentId;
    /**
     * 
     */
    NextToken?: NextToken;
    /**
     * 
     */
    MaxResults?: MaxResults;
  }
  export interface ListDatabasesOutput {
    /**
     * 
     */
    Databases?: DatabaseSummaryList;
    /**
     * 
     */
    NextToken?: NextToken;
  }
  export interface ListTagsForResourceRequest {
    /**
     * 
     */
    resourceArn: SsmSapArn;
  }
  export interface ListTagsForResourceResponse {
    /**
     * 
     */
    tags?: TagMap;
  }
  export type MaxResults = number;
  export type NextToken = string;
  export interface Operation {
    /**
     * 
     */
    Id?: OperationId;
    /**
     * 
     */
    Type?: OperationType;
    /**
     * 
     */
    Status?: OperationStatus;
    /**
     * 
     */
    StatusMessage?: String;
    /**
     * 
     */
    Properties?: OperationProperties;
    /**
     * 
     */
    ResourceType?: ResourceType;
    /**
     * 
     */
    ResourceId?: ResourceId;
    /**
     * 
     */
    ResourceArn?: Arn;
    /**
     * 
     */
    StartTime?: Timestamp;
    /**
     * 
     */
    EndTime?: Timestamp;
    /**
     * 
     */
    LastUpdatedTime?: Timestamp;
  }
  export type OperationId = string;
  export type OperationIdList = OperationId[];
  export type OperationProperties = {[key: string]: String};
  export type OperationStatus = "INPROGRESS"|"SUCCESS"|"ERROR"|string;
  export type OperationType = string;
  export type PermissionActionType = "RESTORE"|string;
  export interface PutResourcePermissionInput {
    /**
     * 
     */
    ActionType: PermissionActionType;
    /**
     * 
     */
    SourceResourceArn: Arn;
    /**
     * 
     */
    ResourceArn: Arn;
  }
  export interface PutResourcePermissionOutput {
    /**
     * 
     */
    Policy?: String;
  }
  export interface RegisterApplicationInput {
    /**
     * 
     */
    ApplicationId: ApplicationId;
    /**
     * 
     */
    ApplicationType: ApplicationType;
    /**
     * 
     */
    Instances: InstanceList;
    /**
     * 
     */
    SapInstanceNumber?: SAPInstanceNumber;
    /**
     * 
     */
    Sid?: SID;
    /**
     * 
     */
    Tags?: TagMap;
    /**
     * 
     */
    Credentials: ApplicationCredentialList;
  }
  export interface RegisterApplicationOutput {
    /**
     * 
     */
    Application?: Application;
    /**
     * 
     */
    OperationId?: OperationId;
  }
  export type ResourceId = string;
  export type ResourceType = string;
  export type SAPInstanceNumber = string;
  export type SID = string;
  export type SecretId = string;
  export type SsmSapArn = string;
  export type String = string;
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagMap = {[key: string]: TagValue};
  export interface TagResourceRequest {
    /**
     * 
     */
    resourceArn: SsmSapArn;
    /**
     * 
     */
    tags: TagMap;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type Timestamp = Date;
  export interface UntagResourceRequest {
    /**
     * 
     */
    resourceArn: SsmSapArn;
    /**
     * Adds/updates or removes credentials for applications registered with AWS Systems Manager for SAP.
     */
    tagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateApplicationSettingsInput {
    /**
     * 
     */
    ApplicationId: ApplicationId;
    /**
     * 
     */
    CredentialsToAddOrUpdate?: ApplicationCredentialList;
    /**
     * 
     */
    CredentialsToRemove?: ApplicationCredentialList;
  }
  export interface UpdateApplicationSettingsOutput {
    /**
     * 
     */
    Message?: String;
    /**
     * 
     */
    OperationIds?: OperationIdList;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-05-10"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the SsmSap client.
   */
  export import Types = SsmSap;
}
export = SsmSap;
