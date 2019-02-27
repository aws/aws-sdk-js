import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class RDSDataService extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: RDSDataService.Types.ClientConfiguration)
  config: Config & RDSDataService.Types.ClientConfiguration;
  /**
   * Executes any SQL statement on the target database synchronously
   */
  executeSql(params: RDSDataService.Types.ExecuteSqlRequest, callback?: (err: AWSError, data: RDSDataService.Types.ExecuteSqlResponse) => void): Request<RDSDataService.Types.ExecuteSqlResponse, AWSError>;
  /**
   * Executes any SQL statement on the target database synchronously
   */
  executeSql(callback?: (err: AWSError, data: RDSDataService.Types.ExecuteSqlResponse) => void): Request<RDSDataService.Types.ExecuteSqlResponse, AWSError>;
}
declare namespace RDSDataService {
  export type Boolean = boolean;
  export interface Value {
    /**
     * Arbitrarily nested arrays
     */
    arrayValues?: ArrayValues;
    /**
     * Long value
     */
    bigIntValue?: Long;
    /**
     * Bit value
     */
    bitValue?: Boolean;
    /**
     * Blob value
     */
    blobValue?: _Blob;
    /**
     * Double value
     */
    doubleValue?: Double;
    /**
     * Integer value
     */
    intValue?: Integer;
    /**
     * Is column null
     */
    isNull?: Boolean;
    /**
     * Float value
     */
    realValue?: Float;
    /**
     * String value
     */
    stringValue?: String;
    /**
     * Struct or UDT
     */
    structValue?: StructValue;
  }
  export type SqlStatementResults = SqlStatementResult[];
  export type ColumnMetadataList = ColumnMetadata[];
  export interface ResultFrame {
    /**
     * ResultSet Metadata.
     */
    records?: Records;
    /**
     * ResultSet Metadata.
     */
    resultSetMetadata?: ResultSetMetadata;
  }
  export type Long = number;
  export type Row = Value[];
  export type String = string;
  export type ArrayValues = Value[];
  export type Float = number;
  export interface ExecuteSqlResponse {
    /**
     * Results returned by executing the sql statement(s)
     */
    sqlStatementResults: SqlStatementResults;
  }
  export interface SqlStatementResult {
    /**
     * Number of rows updated.
     */
    numberOfRecordsUpdated?: Long;
    /**
     * ResultFrame returned by executing the sql statement
     */
    resultFrame?: ResultFrame;
  }
  export interface ResultSetMetadata {
    /**
     * Number of columns
     */
    columnCount?: Long;
    /**
     * List of columns and their types
     */
    columnMetadata?: ColumnMetadataList;
  }
  export type Records = Record[];
  export interface ExecuteSqlRequest {
    /**
     * ARN of the db credentials in AWS Secret Store or the friendly secret name
     */
    awsSecretStoreArn: Arn;
    /**
     * Target DB name
     */
    database?: DbName;
    /**
     * ARN of the target db cluster or instance
     */
    dbClusterOrInstanceArn: Arn;
    /**
     * Target Schema name
     */
    schema?: DbName;
    /**
     * SQL statement(s) to be executed. Statements can be chained by using semicolons
     */
    sqlStatements: SqlStatement;
  }
  export type Arn = string;
  export interface StructValue {
    /**
     * Struct or UDT
     */
    attributes?: ArrayValues;
  }
  export type _Blob = Buffer|Uint8Array|Blob|string;
  export type SqlStatement = string;
  export type Double = number;
  export interface ColumnMetadata {
    /**
     * Homogenous array base SQL type from java.sql.Types.
     */
    arrayBaseColumnType?: Integer;
    /**
     * Whether the designated column is automatically numbered
     */
    isAutoIncrement?: Boolean;
    /**
     * Whether values in the designated column's case matters
     */
    isCaseSensitive?: Boolean;
    /**
     * Whether values in the designated column is a cash value
     */
    isCurrency?: Boolean;
    /**
     * Whether values in the designated column are signed numbers
     */
    isSigned?: Boolean;
    /**
     * Usually specified by the SQL AS. If not specified, return column name.
     */
    label?: String;
    /**
     * Name of the column.
     */
    name?: String;
    /**
     * Indicates the nullability of values in the designated column. One of columnNoNulls (0), columnNullable (1), columnNullableUnknown (2)
     */
    nullable?: Integer;
    /**
     * Get the designated column's specified column size.For numeric data, this is the maximum precision.  For character data, this is the length in characters. For datetime datatypes, this is the length in characters of the String representation (assuming the maximum allowed precision of the fractional seconds component). For binary data, this is the length in bytes.  For the ROWID datatype, this is the length in bytes. 0 is returned for data types where the column size is not applicable.
     */
    precision?: Integer;
    /**
     * Designated column's number of digits to right of the decimal point. 0 is returned for data types where the scale is not applicable.
     */
    scale?: Integer;
    /**
     * Designated column's table's schema
     */
    schemaName?: String;
    /**
     * Designated column's table name
     */
    tableName?: String;
    /**
     * SQL type from java.sql.Types.
     */
    type?: Integer;
    /**
     * Database-specific type name.
     */
    typeName?: String;
  }
  export type Integer = number;
  export type DbName = string;
  export interface Record {
    /**
     * Record
     */
    values?: Row;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-08-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the RDSDataService client.
   */
  export import Types = RDSDataService;
}
export = RDSDataService;
