import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class LakeFormation extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: LakeFormation.Types.ClientConfiguration)
  config: Config & LakeFormation.Types.ClientConfiguration;
  /**
   * Batch operation to grant permissions to the principal.
   */
  batchGrantPermissions(params: LakeFormation.Types.BatchGrantPermissionsRequest, callback?: (err: AWSError, data: LakeFormation.Types.BatchGrantPermissionsResponse) => void): Request<LakeFormation.Types.BatchGrantPermissionsResponse, AWSError>;
  /**
   * Batch operation to grant permissions to the principal.
   */
  batchGrantPermissions(callback?: (err: AWSError, data: LakeFormation.Types.BatchGrantPermissionsResponse) => void): Request<LakeFormation.Types.BatchGrantPermissionsResponse, AWSError>;
  /**
   * Batch operation to revoke permissions from the principal.
   */
  batchRevokePermissions(params: LakeFormation.Types.BatchRevokePermissionsRequest, callback?: (err: AWSError, data: LakeFormation.Types.BatchRevokePermissionsResponse) => void): Request<LakeFormation.Types.BatchRevokePermissionsResponse, AWSError>;
  /**
   * Batch operation to revoke permissions from the principal.
   */
  batchRevokePermissions(callback?: (err: AWSError, data: LakeFormation.Types.BatchRevokePermissionsResponse) => void): Request<LakeFormation.Types.BatchRevokePermissionsResponse, AWSError>;
  /**
   * Deregisters the resource as managed by the Data Catalog. When you deregister a path, Lake Formation removes the path from the inline policy attached to your service-linked role.
   */
  deregisterResource(params: LakeFormation.Types.DeregisterResourceRequest, callback?: (err: AWSError, data: LakeFormation.Types.DeregisterResourceResponse) => void): Request<LakeFormation.Types.DeregisterResourceResponse, AWSError>;
  /**
   * Deregisters the resource as managed by the Data Catalog. When you deregister a path, Lake Formation removes the path from the inline policy attached to your service-linked role.
   */
  deregisterResource(callback?: (err: AWSError, data: LakeFormation.Types.DeregisterResourceResponse) => void): Request<LakeFormation.Types.DeregisterResourceResponse, AWSError>;
  /**
   * Retrieves the current data access role for the given resource registered in AWS Lake Formation.
   */
  describeResource(params: LakeFormation.Types.DescribeResourceRequest, callback?: (err: AWSError, data: LakeFormation.Types.DescribeResourceResponse) => void): Request<LakeFormation.Types.DescribeResourceResponse, AWSError>;
  /**
   * Retrieves the current data access role for the given resource registered in AWS Lake Formation.
   */
  describeResource(callback?: (err: AWSError, data: LakeFormation.Types.DescribeResourceResponse) => void): Request<LakeFormation.Types.DescribeResourceResponse, AWSError>;
  /**
   * Retrieves the list of the data lake administrators of a Lake Formation-managed data lake. 
   */
  getDataLakeSettings(params: LakeFormation.Types.GetDataLakeSettingsRequest, callback?: (err: AWSError, data: LakeFormation.Types.GetDataLakeSettingsResponse) => void): Request<LakeFormation.Types.GetDataLakeSettingsResponse, AWSError>;
  /**
   * Retrieves the list of the data lake administrators of a Lake Formation-managed data lake. 
   */
  getDataLakeSettings(callback?: (err: AWSError, data: LakeFormation.Types.GetDataLakeSettingsResponse) => void): Request<LakeFormation.Types.GetDataLakeSettingsResponse, AWSError>;
  /**
   * Returns the Lake Formation permissions for a specified table or database resource located at a path in Amazon S3. GetEffectivePermissionsForPath will not return databases and tables if the catalog is encrypted.
   */
  getEffectivePermissionsForPath(params: LakeFormation.Types.GetEffectivePermissionsForPathRequest, callback?: (err: AWSError, data: LakeFormation.Types.GetEffectivePermissionsForPathResponse) => void): Request<LakeFormation.Types.GetEffectivePermissionsForPathResponse, AWSError>;
  /**
   * Returns the Lake Formation permissions for a specified table or database resource located at a path in Amazon S3. GetEffectivePermissionsForPath will not return databases and tables if the catalog is encrypted.
   */
  getEffectivePermissionsForPath(callback?: (err: AWSError, data: LakeFormation.Types.GetEffectivePermissionsForPathResponse) => void): Request<LakeFormation.Types.GetEffectivePermissionsForPathResponse, AWSError>;
  /**
   * Grants permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3. For information about permissions, see Security and Access Control to Metadata and Data.
   */
  grantPermissions(params: LakeFormation.Types.GrantPermissionsRequest, callback?: (err: AWSError, data: LakeFormation.Types.GrantPermissionsResponse) => void): Request<LakeFormation.Types.GrantPermissionsResponse, AWSError>;
  /**
   * Grants permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3. For information about permissions, see Security and Access Control to Metadata and Data.
   */
  grantPermissions(callback?: (err: AWSError, data: LakeFormation.Types.GrantPermissionsResponse) => void): Request<LakeFormation.Types.GrantPermissionsResponse, AWSError>;
  /**
   * Returns a list of the principal permissions on the resource, filtered by the permissions of the caller. For example, if you are granted an ALTER permission, you are able to see only the principal permissions for ALTER. This operation returns only those permissions that have been explicitly granted. For information about permissions, see Security and Access Control to Metadata and Data.
   */
  listPermissions(params: LakeFormation.Types.ListPermissionsRequest, callback?: (err: AWSError, data: LakeFormation.Types.ListPermissionsResponse) => void): Request<LakeFormation.Types.ListPermissionsResponse, AWSError>;
  /**
   * Returns a list of the principal permissions on the resource, filtered by the permissions of the caller. For example, if you are granted an ALTER permission, you are able to see only the principal permissions for ALTER. This operation returns only those permissions that have been explicitly granted. For information about permissions, see Security and Access Control to Metadata and Data.
   */
  listPermissions(callback?: (err: AWSError, data: LakeFormation.Types.ListPermissionsResponse) => void): Request<LakeFormation.Types.ListPermissionsResponse, AWSError>;
  /**
   * Lists the resources registered to be managed by the Data Catalog.
   */
  listResources(params: LakeFormation.Types.ListResourcesRequest, callback?: (err: AWSError, data: LakeFormation.Types.ListResourcesResponse) => void): Request<LakeFormation.Types.ListResourcesResponse, AWSError>;
  /**
   * Lists the resources registered to be managed by the Data Catalog.
   */
  listResources(callback?: (err: AWSError, data: LakeFormation.Types.ListResourcesResponse) => void): Request<LakeFormation.Types.ListResourcesResponse, AWSError>;
  /**
   * Sets the list of data lake administrators who have admin privileges on all resources managed by Lake Formation. For more information on admin privileges, see Granting Lake Formation Permissions. This API replaces the current list of data lake admins with the new list being passed. To add an admin, fetch the current list and add the new admin to that list and pass that list in this API.
   */
  putDataLakeSettings(params: LakeFormation.Types.PutDataLakeSettingsRequest, callback?: (err: AWSError, data: LakeFormation.Types.PutDataLakeSettingsResponse) => void): Request<LakeFormation.Types.PutDataLakeSettingsResponse, AWSError>;
  /**
   * Sets the list of data lake administrators who have admin privileges on all resources managed by Lake Formation. For more information on admin privileges, see Granting Lake Formation Permissions. This API replaces the current list of data lake admins with the new list being passed. To add an admin, fetch the current list and add the new admin to that list and pass that list in this API.
   */
  putDataLakeSettings(callback?: (err: AWSError, data: LakeFormation.Types.PutDataLakeSettingsResponse) => void): Request<LakeFormation.Types.PutDataLakeSettingsResponse, AWSError>;
  /**
   * Registers the resource as managed by the Data Catalog. To add or update data, Lake Formation needs read/write access to the chosen Amazon S3 path. Choose a role that you know has permission to do this, or choose the AWSServiceRoleForLakeFormationDataAccess service-linked role. When you register the first Amazon S3 path, the service-linked role and a new inline policy are created on your behalf. Lake Formation adds the first path to the inline policy and attaches it to the service-linked role. When you register subsequent paths, Lake Formation adds the path to the existing policy. The following request registers a new location and gives AWS Lake Formation permission to use the service-linked role to access that location.  ResourceArn = arn:aws:s3:::my-bucket UseServiceLinkedRole = true  If UseServiceLinkedRole is not set to true, you must provide or set the RoleArn:  arn:aws:iam::12345:role/my-data-access-role 
   */
  registerResource(params: LakeFormation.Types.RegisterResourceRequest, callback?: (err: AWSError, data: LakeFormation.Types.RegisterResourceResponse) => void): Request<LakeFormation.Types.RegisterResourceResponse, AWSError>;
  /**
   * Registers the resource as managed by the Data Catalog. To add or update data, Lake Formation needs read/write access to the chosen Amazon S3 path. Choose a role that you know has permission to do this, or choose the AWSServiceRoleForLakeFormationDataAccess service-linked role. When you register the first Amazon S3 path, the service-linked role and a new inline policy are created on your behalf. Lake Formation adds the first path to the inline policy and attaches it to the service-linked role. When you register subsequent paths, Lake Formation adds the path to the existing policy. The following request registers a new location and gives AWS Lake Formation permission to use the service-linked role to access that location.  ResourceArn = arn:aws:s3:::my-bucket UseServiceLinkedRole = true  If UseServiceLinkedRole is not set to true, you must provide or set the RoleArn:  arn:aws:iam::12345:role/my-data-access-role 
   */
  registerResource(callback?: (err: AWSError, data: LakeFormation.Types.RegisterResourceResponse) => void): Request<LakeFormation.Types.RegisterResourceResponse, AWSError>;
  /**
   * Revokes permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.
   */
  revokePermissions(params: LakeFormation.Types.RevokePermissionsRequest, callback?: (err: AWSError, data: LakeFormation.Types.RevokePermissionsResponse) => void): Request<LakeFormation.Types.RevokePermissionsResponse, AWSError>;
  /**
   * Revokes permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.
   */
  revokePermissions(callback?: (err: AWSError, data: LakeFormation.Types.RevokePermissionsResponse) => void): Request<LakeFormation.Types.RevokePermissionsResponse, AWSError>;
  /**
   * Updates the data access role used for vending access to the given (registered) resource in AWS Lake Formation. 
   */
  updateResource(params: LakeFormation.Types.UpdateResourceRequest, callback?: (err: AWSError, data: LakeFormation.Types.UpdateResourceResponse) => void): Request<LakeFormation.Types.UpdateResourceResponse, AWSError>;
  /**
   * Updates the data access role used for vending access to the given (registered) resource in AWS Lake Formation. 
   */
  updateResource(callback?: (err: AWSError, data: LakeFormation.Types.UpdateResourceResponse) => void): Request<LakeFormation.Types.UpdateResourceResponse, AWSError>;
}
declare namespace LakeFormation {
  export interface BatchGrantPermissionsRequest {
    /**
     * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment. 
     */
    CatalogId?: CatalogIdString;
    /**
     * A list of up to 20 entries for resource permissions to be granted by batch operation to the principal.
     */
    Entries: BatchPermissionsRequestEntryList;
  }
  export interface BatchGrantPermissionsResponse {
    /**
     * A list of failures to grant permissions to the resources.
     */
    Failures?: BatchPermissionsFailureList;
  }
  export interface BatchPermissionsFailureEntry {
    /**
     * An identifier for an entry of the batch request.
     */
    RequestEntry?: BatchPermissionsRequestEntry;
    /**
     * An error message that applies to the failure of the entry.
     */
    Error?: ErrorDetail;
  }
  export type BatchPermissionsFailureList = BatchPermissionsFailureEntry[];
  export interface BatchPermissionsRequestEntry {
    /**
     * A unique identifier for the batch permissions request entry.
     */
    Id: Identifier;
    /**
     * The principal to be granted a permission.
     */
    Principal?: DataLakePrincipal;
    /**
     * The resource to which the principal is to be granted a permission.
     */
    Resource?: Resource;
    /**
     * The permissions to be granted.
     */
    Permissions?: PermissionList;
    /**
     * Indicates if the option to pass permissions is granted.
     */
    PermissionsWithGrantOption?: PermissionList;
  }
  export type BatchPermissionsRequestEntryList = BatchPermissionsRequestEntry[];
  export interface BatchRevokePermissionsRequest {
    /**
     * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment. 
     */
    CatalogId?: CatalogIdString;
    /**
     * A list of up to 20 entries for resource permissions to be revoked by batch operation to the principal.
     */
    Entries: BatchPermissionsRequestEntryList;
  }
  export interface BatchRevokePermissionsResponse {
    /**
     * A list of failures to revoke permissions to the resources.
     */
    Failures?: BatchPermissionsFailureList;
  }
  export type CatalogIdString = string;
  export interface CatalogResource {
  }
  export type ColumnNames = NameString[];
  export interface ColumnWildcard {
    /**
     * Excludes column names. Any column with this name will be excluded.
     */
    ExcludedColumnNames?: ColumnNames;
  }
  export type ComparisonOperator = "EQ"|"NE"|"LE"|"LT"|"GE"|"GT"|"CONTAINS"|"NOT_CONTAINS"|"BEGINS_WITH"|"IN"|"BETWEEN"|string;
  export interface DataLakePrincipal {
    /**
     * An identifier for the AWS Lake Formation principal.
     */
    DataLakePrincipalIdentifier?: DataLakePrincipalString;
  }
  export type DataLakePrincipalList = DataLakePrincipal[];
  export type DataLakePrincipalString = string;
  export type DataLakeResourceType = "CATALOG"|"DATABASE"|"TABLE"|"DATA_LOCATION"|string;
  export interface DataLakeSettings {
    /**
     * A list of AWS Lake Formation principals. Supported principals are IAM users or IAM roles.
     */
    DataLakeAdmins?: DataLakePrincipalList;
    /**
     * A structure representing a list of up to three principal permissions entries for default create database permissions.
     */
    CreateDatabaseDefaultPermissions?: PrincipalPermissionsList;
    /**
     * A structure representing a list of up to three principal permissions entries for default create table permissions.
     */
    CreateTableDefaultPermissions?: PrincipalPermissionsList;
    /**
     * A list of the resource-owning account IDs that the caller's account can use to share their user access details (user ARNs). The user ARNs can be logged in the resource owner's AWS CloudTrail log. You may want to specify this property when you are in a high-trust boundary, such as the same team or company. 
     */
    TrustedResourceOwners?: TrustedResourceOwners;
  }
  export interface DataLocationResource {
    /**
     * The identifier for the Data Catalog where the location is registered with AWS Lake Formation. By default, it is the account ID of the caller.
     */
    CatalogId?: CatalogIdString;
    /**
     * The Amazon Resource Name (ARN) that uniquely identifies the data location resource.
     */
    ResourceArn: ResourceArnString;
  }
  export interface DatabaseResource {
    /**
     * The identifier for the Data Catalog. By default, it is the account ID of the caller.
     */
    CatalogId?: CatalogIdString;
    /**
     * The name of the database resource. Unique to the Data Catalog.
     */
    Name: NameString;
  }
  export interface DeregisterResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource that you want to deregister.
     */
    ResourceArn: ResourceArnString;
  }
  export interface DeregisterResourceResponse {
  }
  export interface DescribeResourceRequest {
    /**
     * The resource ARN.
     */
    ResourceArn: ResourceArnString;
  }
  export interface DescribeResourceResponse {
    /**
     * A structure containing information about an AWS Lake Formation resource.
     */
    ResourceInfo?: ResourceInfo;
  }
  export type DescriptionString = string;
  export interface ErrorDetail {
    /**
     * The code associated with this error.
     */
    ErrorCode?: NameString;
    /**
     * A message describing the error.
     */
    ErrorMessage?: DescriptionString;
  }
  export type FieldNameString = "RESOURCE_ARN"|"ROLE_ARN"|"LAST_MODIFIED"|string;
  export interface FilterCondition {
    /**
     * The field to filter in the filter condition.
     */
    Field?: FieldNameString;
    /**
     * The comparison operator used in the filter condition.
     */
    ComparisonOperator?: ComparisonOperator;
    /**
     * A string with values used in evaluating the filter condition.
     */
    StringValueList?: StringValueList;
  }
  export type FilterConditionList = FilterCondition[];
  export interface GetDataLakeSettingsRequest {
    /**
     * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment. 
     */
    CatalogId?: CatalogIdString;
  }
  export interface GetDataLakeSettingsResponse {
    /**
     * A structure representing a list of AWS Lake Formation principals designated as data lake administrators.
     */
    DataLakeSettings?: DataLakeSettings;
  }
  export interface GetEffectivePermissionsForPathRequest {
    /**
     * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment. 
     */
    CatalogId?: CatalogIdString;
    /**
     * The Amazon Resource Name (ARN) of the resource for which you want to get permissions.
     */
    ResourceArn: ResourceArnString;
    /**
     * A continuation token, if this is not the first call to retrieve this list.
     */
    NextToken?: Token;
    /**
     * The maximum number of results to return.
     */
    MaxResults?: PageSize;
  }
  export interface GetEffectivePermissionsForPathResponse {
    /**
     * A list of the permissions for the specified table or database resource located at the path in Amazon S3.
     */
    Permissions?: PrincipalResourcePermissionsList;
    /**
     * A continuation token, if this is not the first call to retrieve this list.
     */
    NextToken?: Token;
  }
  export interface GrantPermissionsRequest {
    /**
     * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment. 
     */
    CatalogId?: CatalogIdString;
    /**
     * The principal to be granted the permissions on the resource. Supported principals are IAM users or IAM roles, and they are defined by their principal type and their ARN. Note that if you define a resource with a particular ARN, then later delete, and recreate a resource with that same ARN, the resource maintains the permissions already granted. 
     */
    Principal: DataLakePrincipal;
    /**
     * The resource to which permissions are to be granted. Resources in AWS Lake Formation are the Data Catalog, databases, and tables.
     */
    Resource: Resource;
    /**
     * The permissions granted to the principal on the resource. AWS Lake Formation defines privileges to grant and revoke access to metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3. AWS Lake Formation requires that each principal be authorized to perform a specific task on AWS Lake Formation resources. 
     */
    Permissions: PermissionList;
    /**
     * Indicates a list of the granted permissions that the principal may pass to other users. These permissions may only be a subset of the permissions granted in the Privileges.
     */
    PermissionsWithGrantOption?: PermissionList;
  }
  export interface GrantPermissionsResponse {
  }
  export type IAMRoleArn = string;
  export type Identifier = string;
  export type LastModifiedTimestamp = Date;
  export interface ListPermissionsRequest {
    /**
     * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment. 
     */
    CatalogId?: CatalogIdString;
    /**
     * Specifies a principal to filter the permissions returned.
     */
    Principal?: DataLakePrincipal;
    /**
     * Specifies a resource type to filter the permissions returned.
     */
    ResourceType?: DataLakeResourceType;
    /**
     * A resource where you will get a list of the principal permissions. This operation does not support getting privileges on a table with columns. Instead, call this operation on the table, and the operation returns the table and the table w columns.
     */
    Resource?: Resource;
    /**
     * A continuation token, if this is not the first call to retrieve this list.
     */
    NextToken?: Token;
    /**
     * The maximum number of results to return.
     */
    MaxResults?: PageSize;
  }
  export interface ListPermissionsResponse {
    /**
     * A list of principals and their permissions on the resource for the specified principal and resource types.
     */
    PrincipalResourcePermissions?: PrincipalResourcePermissionsList;
    /**
     * A continuation token, if this is not the first call to retrieve this list.
     */
    NextToken?: Token;
  }
  export interface ListResourcesRequest {
    /**
     * Any applicable row-level and/or column-level filtering conditions for the resources.
     */
    FilterConditionList?: FilterConditionList;
    /**
     * The maximum number of resource results.
     */
    MaxResults?: PageSize;
    /**
     * A continuation token, if this is not the first call to retrieve these resources.
     */
    NextToken?: Token;
  }
  export interface ListResourcesResponse {
    /**
     * A summary of the data lake resources.
     */
    ResourceInfoList?: ResourceInfoList;
    /**
     * A continuation token, if this is not the first call to retrieve these resources.
     */
    NextToken?: Token;
  }
  export type NameString = string;
  export type NullableBoolean = boolean;
  export type PageSize = number;
  export type Permission = "ALL"|"SELECT"|"ALTER"|"DROP"|"DELETE"|"INSERT"|"DESCRIBE"|"CREATE_DATABASE"|"CREATE_TABLE"|"DATA_LOCATION_ACCESS"|string;
  export type PermissionList = Permission[];
  export interface PrincipalPermissions {
    /**
     * The principal who is granted permissions.
     */
    Principal?: DataLakePrincipal;
    /**
     * The permissions that are granted to the principal.
     */
    Permissions?: PermissionList;
  }
  export type PrincipalPermissionsList = PrincipalPermissions[];
  export interface PrincipalResourcePermissions {
    /**
     * The Data Lake principal to be granted or revoked permissions.
     */
    Principal?: DataLakePrincipal;
    /**
     * The resource where permissions are to be granted or revoked.
     */
    Resource?: Resource;
    /**
     * The permissions to be granted or revoked on the resource.
     */
    Permissions?: PermissionList;
    /**
     * Indicates whether to grant the ability to grant permissions (as a subset of permissions granted).
     */
    PermissionsWithGrantOption?: PermissionList;
  }
  export type PrincipalResourcePermissionsList = PrincipalResourcePermissions[];
  export interface PutDataLakeSettingsRequest {
    /**
     * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment. 
     */
    CatalogId?: CatalogIdString;
    /**
     * A structure representing a list of AWS Lake Formation principals designated as data lake administrators.
     */
    DataLakeSettings: DataLakeSettings;
  }
  export interface PutDataLakeSettingsResponse {
  }
  export interface RegisterResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource that you want to register.
     */
    ResourceArn: ResourceArnString;
    /**
     * Designates an AWS Identity and Access Management (IAM) service-linked role by registering this role with the Data Catalog. A service-linked role is a unique type of IAM role that is linked directly to Lake Formation. For more information, see Using Service-Linked Roles for Lake Formation.
     */
    UseServiceLinkedRole?: NullableBoolean;
    /**
     * The identifier for the role that registers the resource.
     */
    RoleArn?: IAMRoleArn;
  }
  export interface RegisterResourceResponse {
  }
  export interface Resource {
    /**
     * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment. 
     */
    Catalog?: CatalogResource;
    /**
     * The database for the resource. Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database permissions to a principal. 
     */
    Database?: DatabaseResource;
    /**
     * The table for the resource. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal. 
     */
    Table?: TableResource;
    /**
     * The table with columns for the resource. A principal with permissions to this resource can select metadata from the columns of a table in the Data Catalog and the underlying data in Amazon S3.
     */
    TableWithColumns?: TableWithColumnsResource;
    /**
     * The location of an Amazon S3 path where permissions are granted or revoked. 
     */
    DataLocation?: DataLocationResource;
  }
  export type ResourceArnString = string;
  export interface ResourceInfo {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    ResourceArn?: ResourceArnString;
    /**
     * The IAM role that registered a resource.
     */
    RoleArn?: IAMRoleArn;
    /**
     * The date and time the resource was last modified.
     */
    LastModified?: LastModifiedTimestamp;
  }
  export type ResourceInfoList = ResourceInfo[];
  export interface RevokePermissionsRequest {
    /**
     * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment. 
     */
    CatalogId?: CatalogIdString;
    /**
     * The principal to be revoked permissions on the resource.
     */
    Principal: DataLakePrincipal;
    /**
     * The resource to which permissions are to be revoked.
     */
    Resource: Resource;
    /**
     * The permissions revoked to the principal on the resource. For information about permissions, see Security and Access Control to Metadata and Data.
     */
    Permissions: PermissionList;
    /**
     * Indicates a list of permissions for which to revoke the grant option allowing the principal to pass permissions to other principals.
     */
    PermissionsWithGrantOption?: PermissionList;
  }
  export interface RevokePermissionsResponse {
  }
  export type StringValue = string;
  export type StringValueList = StringValue[];
  export interface TableResource {
    /**
     * The identifier for the Data Catalog. By default, it is the account ID of the caller.
     */
    CatalogId?: CatalogIdString;
    /**
     * The name of the database for the table. Unique to a Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal. 
     */
    DatabaseName: NameString;
    /**
     * The name of the table.
     */
    Name?: NameString;
    /**
     * A wildcard object representing every table under a database. At least one of TableResource$Name or TableResource$TableWildcard is required.
     */
    TableWildcard?: TableWildcard;
  }
  export interface TableWildcard {
  }
  export interface TableWithColumnsResource {
    /**
     * The identifier for the Data Catalog. By default, it is the account ID of the caller.
     */
    CatalogId?: CatalogIdString;
    /**
     * The name of the database for the table with columns resource. Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal. 
     */
    DatabaseName: NameString;
    /**
     * The name of the table resource. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal. 
     */
    Name: NameString;
    /**
     * The list of column names for the table. At least one of ColumnNames or ColumnWildcard is required.
     */
    ColumnNames?: ColumnNames;
    /**
     * A wildcard specified by a ColumnWildcard object. At least one of ColumnNames or ColumnWildcard is required.
     */
    ColumnWildcard?: ColumnWildcard;
  }
  export type Token = string;
  export type TrustedResourceOwners = CatalogIdString[];
  export interface UpdateResourceRequest {
    /**
     * The new role to use for the given resource registered in AWS Lake Formation.
     */
    RoleArn: IAMRoleArn;
    /**
     * The resource ARN.
     */
    ResourceArn: ResourceArnString;
  }
  export interface UpdateResourceResponse {
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-03-31"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the LakeFormation client.
   */
  export import Types = LakeFormation;
}
export = LakeFormation;
