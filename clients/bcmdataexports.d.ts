import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class BCMDataExports extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: BCMDataExports.Types.ClientConfiguration)
  config: Config & BCMDataExports.Types.ClientConfiguration;
  /**
   * Creates a data export and specifies the data query, the delivery preference, and any optional resource tags. A DataQuery consists of both a QueryStatement and TableConfigurations. The QueryStatement is an SQL statement. Data Exports only supports a limited subset of the SQL syntax. For more information on the SQL syntax that is supported, see Data query. To view the available tables and columns, see the Data Exports table dictionary. The TableConfigurations is a collection of specified TableProperties for the table being queried in the QueryStatement. TableProperties are additional configurations you can provide to change the data and schema of a table. Each table can have different TableProperties. However, tables are not required to have any TableProperties. Each table property has a default value that it assumes if not specified. For more information on table configurations, see Data query. To view the table properties available for each table, see the Data Exports table dictionary or use the ListTables API to get a response of all tables and their available properties.
   */
  createExport(params: BCMDataExports.Types.CreateExportRequest, callback?: (err: AWSError, data: BCMDataExports.Types.CreateExportResponse) => void): Request<BCMDataExports.Types.CreateExportResponse, AWSError>;
  /**
   * Creates a data export and specifies the data query, the delivery preference, and any optional resource tags. A DataQuery consists of both a QueryStatement and TableConfigurations. The QueryStatement is an SQL statement. Data Exports only supports a limited subset of the SQL syntax. For more information on the SQL syntax that is supported, see Data query. To view the available tables and columns, see the Data Exports table dictionary. The TableConfigurations is a collection of specified TableProperties for the table being queried in the QueryStatement. TableProperties are additional configurations you can provide to change the data and schema of a table. Each table can have different TableProperties. However, tables are not required to have any TableProperties. Each table property has a default value that it assumes if not specified. For more information on table configurations, see Data query. To view the table properties available for each table, see the Data Exports table dictionary or use the ListTables API to get a response of all tables and their available properties.
   */
  createExport(callback?: (err: AWSError, data: BCMDataExports.Types.CreateExportResponse) => void): Request<BCMDataExports.Types.CreateExportResponse, AWSError>;
  /**
   * Deletes an existing data export.
   */
  deleteExport(params: BCMDataExports.Types.DeleteExportRequest, callback?: (err: AWSError, data: BCMDataExports.Types.DeleteExportResponse) => void): Request<BCMDataExports.Types.DeleteExportResponse, AWSError>;
  /**
   * Deletes an existing data export.
   */
  deleteExport(callback?: (err: AWSError, data: BCMDataExports.Types.DeleteExportResponse) => void): Request<BCMDataExports.Types.DeleteExportResponse, AWSError>;
  /**
   * Exports data based on the source data update.
   */
  getExecution(params: BCMDataExports.Types.GetExecutionRequest, callback?: (err: AWSError, data: BCMDataExports.Types.GetExecutionResponse) => void): Request<BCMDataExports.Types.GetExecutionResponse, AWSError>;
  /**
   * Exports data based on the source data update.
   */
  getExecution(callback?: (err: AWSError, data: BCMDataExports.Types.GetExecutionResponse) => void): Request<BCMDataExports.Types.GetExecutionResponse, AWSError>;
  /**
   * Views the definition of an existing data export.
   */
  getExport(params: BCMDataExports.Types.GetExportRequest, callback?: (err: AWSError, data: BCMDataExports.Types.GetExportResponse) => void): Request<BCMDataExports.Types.GetExportResponse, AWSError>;
  /**
   * Views the definition of an existing data export.
   */
  getExport(callback?: (err: AWSError, data: BCMDataExports.Types.GetExportResponse) => void): Request<BCMDataExports.Types.GetExportResponse, AWSError>;
  /**
   * Returns the metadata for the specified table and table properties. This includes the list of columns in the table schema, their data types, and column descriptions.
   */
  getTable(params: BCMDataExports.Types.GetTableRequest, callback?: (err: AWSError, data: BCMDataExports.Types.GetTableResponse) => void): Request<BCMDataExports.Types.GetTableResponse, AWSError>;
  /**
   * Returns the metadata for the specified table and table properties. This includes the list of columns in the table schema, their data types, and column descriptions.
   */
  getTable(callback?: (err: AWSError, data: BCMDataExports.Types.GetTableResponse) => void): Request<BCMDataExports.Types.GetTableResponse, AWSError>;
  /**
   * Lists the historical executions for the export.
   */
  listExecutions(params: BCMDataExports.Types.ListExecutionsRequest, callback?: (err: AWSError, data: BCMDataExports.Types.ListExecutionsResponse) => void): Request<BCMDataExports.Types.ListExecutionsResponse, AWSError>;
  /**
   * Lists the historical executions for the export.
   */
  listExecutions(callback?: (err: AWSError, data: BCMDataExports.Types.ListExecutionsResponse) => void): Request<BCMDataExports.Types.ListExecutionsResponse, AWSError>;
  /**
   * Lists all data export definitions.
   */
  listExports(params: BCMDataExports.Types.ListExportsRequest, callback?: (err: AWSError, data: BCMDataExports.Types.ListExportsResponse) => void): Request<BCMDataExports.Types.ListExportsResponse, AWSError>;
  /**
   * Lists all data export definitions.
   */
  listExports(callback?: (err: AWSError, data: BCMDataExports.Types.ListExportsResponse) => void): Request<BCMDataExports.Types.ListExportsResponse, AWSError>;
  /**
   * Lists all available tables in data exports.
   */
  listTables(params: BCMDataExports.Types.ListTablesRequest, callback?: (err: AWSError, data: BCMDataExports.Types.ListTablesResponse) => void): Request<BCMDataExports.Types.ListTablesResponse, AWSError>;
  /**
   * Lists all available tables in data exports.
   */
  listTables(callback?: (err: AWSError, data: BCMDataExports.Types.ListTablesResponse) => void): Request<BCMDataExports.Types.ListTablesResponse, AWSError>;
  /**
   * List tags associated with an existing data export.
   */
  listTagsForResource(params: BCMDataExports.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: BCMDataExports.Types.ListTagsForResourceResponse) => void): Request<BCMDataExports.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * List tags associated with an existing data export.
   */
  listTagsForResource(callback?: (err: AWSError, data: BCMDataExports.Types.ListTagsForResourceResponse) => void): Request<BCMDataExports.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Adds tags for an existing data export definition.
   */
  tagResource(params: BCMDataExports.Types.TagResourceRequest, callback?: (err: AWSError, data: BCMDataExports.Types.TagResourceResponse) => void): Request<BCMDataExports.Types.TagResourceResponse, AWSError>;
  /**
   * Adds tags for an existing data export definition.
   */
  tagResource(callback?: (err: AWSError, data: BCMDataExports.Types.TagResourceResponse) => void): Request<BCMDataExports.Types.TagResourceResponse, AWSError>;
  /**
   * Deletes tags associated with an existing data export definition.
   */
  untagResource(params: BCMDataExports.Types.UntagResourceRequest, callback?: (err: AWSError, data: BCMDataExports.Types.UntagResourceResponse) => void): Request<BCMDataExports.Types.UntagResourceResponse, AWSError>;
  /**
   * Deletes tags associated with an existing data export definition.
   */
  untagResource(callback?: (err: AWSError, data: BCMDataExports.Types.UntagResourceResponse) => void): Request<BCMDataExports.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates an existing data export by overwriting all export parameters. All export parameters must be provided in the UpdateExport request.
   */
  updateExport(params: BCMDataExports.Types.UpdateExportRequest, callback?: (err: AWSError, data: BCMDataExports.Types.UpdateExportResponse) => void): Request<BCMDataExports.Types.UpdateExportResponse, AWSError>;
  /**
   * Updates an existing data export by overwriting all export parameters. All export parameters must be provided in the UpdateExport request.
   */
  updateExport(callback?: (err: AWSError, data: BCMDataExports.Types.UpdateExportResponse) => void): Request<BCMDataExports.Types.UpdateExportResponse, AWSError>;
}
declare namespace BCMDataExports {
  export type Arn = string;
  export interface Column {
    /**
     * The description for a column.
     */
    Description?: GenericString;
    /**
     * The column name.
     */
    Name?: GenericString;
    /**
     * The kind of data a column stores.
     */
    Type?: GenericString;
  }
  export type ColumnList = Column[];
  export type CompressionOption = "GZIP"|"PARQUET"|string;
  export interface CreateExportRequest {
    /**
     * The details of the export, including data query, name, description, and destination configuration.
     */
    Export: Export;
    /**
     * An optional list of tags to associate with the specified export. Each tag consists of a key and a value, and each key must be unique for the resource.
     */
    ResourceTags?: ResourceTagList;
  }
  export interface CreateExportResponse {
    /**
     * The Amazon Resource Name (ARN) for this export.
     */
    ExportArn?: Arn;
  }
  export interface DataQuery {
    /**
     * The query statement.
     */
    QueryStatement: QueryStatement;
    /**
     * The table configuration.
     */
    TableConfigurations?: TableConfigurations;
  }
  export interface DeleteExportRequest {
    /**
     * The Amazon Resource Name (ARN) for this export.
     */
    ExportArn: Arn;
  }
  export interface DeleteExportResponse {
    /**
     * The Amazon Resource Name (ARN) for this export.
     */
    ExportArn?: Arn;
  }
  export interface DestinationConfigurations {
    /**
     * An object that describes the destination of the data exports file.
     */
    S3Destination: S3Destination;
  }
  export interface ExecutionReference {
    /**
     * The ID for this specific execution.
     */
    ExecutionId: GenericString;
    /**
     * The status of this specific execution.
     */
    ExecutionStatus: ExecutionStatus;
  }
  export type ExecutionReferenceList = ExecutionReference[];
  export interface ExecutionStatus {
    /**
     * The time when the execution was completed.
     */
    CompletedAt?: SyntheticTimestamp_date_time;
    /**
     * The time when the execution was created.
     */
    CreatedAt?: SyntheticTimestamp_date_time;
    /**
     * The time when the execution was last updated.
     */
    LastUpdatedAt?: SyntheticTimestamp_date_time;
    /**
     * The code for the status of the execution.
     */
    StatusCode?: ExecutionStatusCode;
    /**
     * The reason for the failed status.
     */
    StatusReason?: ExecutionStatusReason;
  }
  export type ExecutionStatusCode = "INITIATION_IN_PROCESS"|"QUERY_QUEUED"|"QUERY_IN_PROCESS"|"QUERY_FAILURE"|"DELIVERY_IN_PROCESS"|"DELIVERY_SUCCESS"|"DELIVERY_FAILURE"|string;
  export type ExecutionStatusReason = "INSUFFICIENT_PERMISSION"|"BILL_OWNER_CHANGED"|"INTERNAL_FAILURE"|string;
  export interface Export {
    /**
     * The data query for this specific data export.
     */
    DataQuery: DataQuery;
    /**
     * The description for this specific data export.
     */
    Description?: GenericString;
    /**
     * The destination configuration for this specific data export.
     */
    DestinationConfigurations: DestinationConfigurations;
    /**
     * The Amazon Resource Name (ARN) for this export.
     */
    ExportArn?: Arn;
    /**
     * The name of this specific data export.
     */
    Name: ExportName;
    /**
     * The cadence for Amazon Web Services to update the export in your S3 bucket.
     */
    RefreshCadence: RefreshCadence;
  }
  export type ExportName = string;
  export interface ExportReference {
    /**
     * The Amazon Resource Name (ARN) for this export.
     */
    ExportArn: Arn;
    /**
     * The name of this specific data export.
     */
    ExportName: ExportName;
    /**
     * The status of this specific data export.
     */
    ExportStatus: ExportStatus;
  }
  export type ExportReferenceList = ExportReference[];
  export interface ExportStatus {
    /**
     * The timestamp of when the export was created.
     */
    CreatedAt?: SyntheticTimestamp_date_time;
    /**
     * The timestamp of when the export was last generated.
     */
    LastRefreshedAt?: SyntheticTimestamp_date_time;
    /**
     * The timestamp of when the export was updated.
     */
    LastUpdatedAt?: SyntheticTimestamp_date_time;
    /**
     * The status code for the request.
     */
    StatusCode?: ExportStatusCode;
    /**
     * The description for the status code.
     */
    StatusReason?: ExecutionStatusReason;
  }
  export type ExportStatusCode = "HEALTHY"|"UNHEALTHY"|string;
  export type FormatOption = "TEXT_OR_CSV"|"PARQUET"|string;
  export type FrequencyOption = "SYNCHRONOUS"|string;
  export type GenericString = string;
  export type GenericStringList = GenericString[];
  export interface GetExecutionRequest {
    /**
     * The ID for this specific execution.
     */
    ExecutionId: GenericString;
    /**
     * The Amazon Resource Name (ARN) of the Export object that generated this specific execution.
     */
    ExportArn: Arn;
  }
  export interface GetExecutionResponse {
    /**
     * The ID for this specific execution.
     */
    ExecutionId?: GenericString;
    /**
     * The status of this specific execution.
     */
    ExecutionStatus?: ExecutionStatus;
    /**
     * The export data for this specific execution. This export data is a snapshot from when the execution was generated. The data could be different from the current export data if the export was updated since the execution was generated.
     */
    Export?: Export;
  }
  export interface GetExportRequest {
    /**
     * The Amazon Resource Name (ARN) for this export.
     */
    ExportArn: Arn;
  }
  export interface GetExportResponse {
    /**
     * The data for this specific export.
     */
    Export?: Export;
    /**
     * The status of this specific export.
     */
    ExportStatus?: ExportStatus;
  }
  export interface GetTableRequest {
    /**
     * The name of the table.
     */
    TableName: TableName;
    /**
     * TableProperties are additional configurations you can provide to change the data and schema of a table. Each table can have different TableProperties. Tables are not required to have any TableProperties. Each table property has a default value that it assumes if not specified.
     */
    TableProperties?: TableProperties;
  }
  export interface GetTableResponse {
    /**
     * The table description.
     */
    Description?: GenericString;
    /**
     * The schema of the table.
     */
    Schema?: ColumnList;
    /**
     * The name of the table.
     */
    TableName?: TableName;
    /**
     * TableProperties are additional configurations you can provide to change the data and schema of a table. Each table can have different TableProperties. Tables are not required to have any TableProperties. Each table property has a default value that it assumes if not specified.
     */
    TableProperties?: TableProperties;
  }
  export interface ListExecutionsRequest {
    /**
     * The Amazon Resource Name (ARN) for this export.
     */
    ExportArn: Arn;
    /**
     * The maximum number of objects that are returned for the request.
     */
    MaxResults?: MaxResults;
    /**
     * The token to retrieve the next set of results.
     */
    NextToken?: NextPageToken;
  }
  export interface ListExecutionsResponse {
    /**
     * The list of executions.
     */
    Executions?: ExecutionReferenceList;
    /**
     * The token to retrieve the next set of results.
     */
    NextToken?: NextPageToken;
  }
  export interface ListExportsRequest {
    /**
     * The maximum number of objects that are returned for the request.
     */
    MaxResults?: MaxResults;
    /**
     * The token to retrieve the next set of results.
     */
    NextToken?: NextPageToken;
  }
  export interface ListExportsResponse {
    /**
     * The details of the exports, including name and export status.
     */
    Exports?: ExportReferenceList;
    /**
     * The token to retrieve the next set of results.
     */
    NextToken?: NextPageToken;
  }
  export interface ListTablesRequest {
    /**
     * The maximum number of objects that are returned for the request.
     */
    MaxResults?: MaxResults;
    /**
     * The token to retrieve the next set of results.
     */
    NextToken?: NextPageToken;
  }
  export interface ListTablesResponse {
    /**
     * The token to retrieve the next set of results.
     */
    NextToken?: NextPageToken;
    /**
     * The list of tables.
     */
    Tables?: TableList;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The maximum number of objects that are returned for the request.
     */
    MaxResults?: MaxResults;
    /**
     * The token to retrieve the next set of results.
     */
    NextToken?: NextPageToken;
    /**
     * The unique identifier for the resource.
     */
    ResourceArn: Arn;
  }
  export interface ListTagsForResourceResponse {
    /**
     * The token to retrieve the next set of results.
     */
    NextToken?: NextPageToken;
    /**
     * An optional list of tags to associate with the specified export. Each tag consists of a key and a value, and each key must be unique for the resource.
     */
    ResourceTags?: ResourceTagList;
  }
  export type MaxResults = number;
  export type NextPageToken = string;
  export type OverwriteOption = "CREATE_NEW_REPORT"|"OVERWRITE_REPORT"|string;
  export type QueryStatement = string;
  export interface RefreshCadence {
    /**
     * The frequency that data exports are updated. The export refreshes each time the source data updates, up to three times daily.
     */
    Frequency: FrequencyOption;
  }
  export interface ResourceTag {
    /**
     * The key that's associated with the tag.
     */
    Key: ResourceTagKey;
    /**
     * The value that's associated with the tag.
     */
    Value: ResourceTagValue;
  }
  export type ResourceTagKey = string;
  export type ResourceTagKeyList = ResourceTagKey[];
  export type ResourceTagList = ResourceTag[];
  export type ResourceTagValue = string;
  export interface S3Destination {
    /**
     * The name of the Amazon S3 bucket used as the destination of a data export file.
     */
    S3Bucket: GenericString;
    /**
     * The output configuration for the data export.
     */
    S3OutputConfigurations: S3OutputConfigurations;
    /**
     * The S3 path prefix you want prepended to the name of your data export.
     */
    S3Prefix: GenericString;
    /**
     * The S3 bucket Region.
     */
    S3Region: GenericString;
  }
  export interface S3OutputConfigurations {
    /**
     * The compression type for the data export.
     */
    Compression: CompressionOption;
    /**
     * The file format for the data export.
     */
    Format: FormatOption;
    /**
     * The output type for the data export.
     */
    OutputType: S3OutputType;
    /**
     * The rule to follow when generating a version of the data export file. You have the choice to overwrite the previous version or to be delivered in addition to the previous versions. Overwriting exports can save on Amazon S3 storage costs. Creating new export versions allows you to track the changes in cost and usage data over time.
     */
    Overwrite: OverwriteOption;
  }
  export type S3OutputType = "CUSTOM"|string;
  export type SyntheticTimestamp_date_time = Date;
  export interface Table {
    /**
     * The description for the table.
     */
    Description?: GenericString;
    /**
     * The name of the table.
     */
    TableName?: TableName;
    /**
     * The properties for the table.
     */
    TableProperties?: TablePropertyDescriptionList;
  }
  export type TableConfigurations = {[key: string]: TableProperties};
  export type TableList = Table[];
  export type TableName = string;
  export type TableProperties = {[key: string]: GenericString};
  export type TableProperty = string;
  export interface TablePropertyDescription {
    /**
     * The default value for the table.
     */
    DefaultValue?: GenericString;
    /**
     * The description for the table.
     */
    Description?: GenericString;
    /**
     * The name of the table.
     */
    Name?: GenericString;
    /**
     * The valid values for the table.
     */
    ValidValues?: GenericStringList;
  }
  export type TablePropertyDescriptionList = TablePropertyDescription[];
  export interface TagResourceRequest {
    /**
     * The unique identifier for the resource.
     */
    ResourceArn: Arn;
    /**
     * The tags to associate with the resource. Each tag consists of a key and a value, and each key must be unique for the resource.
     */
    ResourceTags: ResourceTagList;
  }
  export interface TagResourceResponse {
  }
  export interface UntagResourceRequest {
    /**
     * The unique identifier for the resource.
     */
    ResourceArn: Arn;
    /**
     * The tag keys that are associated with the resource ARN.
     */
    ResourceTagKeys: ResourceTagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateExportRequest {
    /**
     * The name and query details for the export.
     */
    Export: Export;
    /**
     * The Amazon Resource Name (ARN) for this export.
     */
    ExportArn: Arn;
  }
  export interface UpdateExportResponse {
    /**
     * The Amazon Resource Name (ARN) for this export.
     */
    ExportArn?: Arn;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2023-11-26"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the BCMDataExports client.
   */
  export import Types = BCMDataExports;
}
export = BCMDataExports;
