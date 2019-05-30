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
   * Runs a batch SQL statement over an array of data.
        You can run bulk update and insert operations for multiple records using a DML 
            statement with different parameter sets. Bulk operations can provide a significant 
            performance improvement over individual insert and update operations.
            
            If a call isn't part of a transaction because it doesn't include the
                    transactionID parameter, changes that result from the call are
                committed automatically.    
        
   */
  batchExecuteStatement(params: RDSDataService.Types.BatchExecuteStatementRequest, callback?: (err: AWSError, data: RDSDataService.Types.BatchExecuteStatementResponse) => void): Request<RDSDataService.Types.BatchExecuteStatementResponse, AWSError>;
  /**
   * Runs a batch SQL statement over an array of data.
        You can run bulk update and insert operations for multiple records using a DML 
            statement with different parameter sets. Bulk operations can provide a significant 
            performance improvement over individual insert and update operations.
            
            If a call isn't part of a transaction because it doesn't include the
                    transactionID parameter, changes that result from the call are
                committed automatically.    
        
   */
  batchExecuteStatement(callback?: (err: AWSError, data: RDSDataService.Types.BatchExecuteStatementResponse) => void): Request<RDSDataService.Types.BatchExecuteStatementResponse, AWSError>;
  /**
   * Starts a SQL transaction.
        
        
            A transaction can run for a maximum of 24 hours. A transaction is terminated and 
                rolled back automatically after 24 hours.
            A transaction times out if no calls use its transaction ID in three minutes. 
                If a transaction times out before it's committed, it's rolled back
                automatically.
            DDL statements inside a transaction cause an implicit commit. We recommend 
                that you run each DDL statement in a separate ExecuteStatement call with 
                continueAfterTimeout enabled.
        
   */
  beginTransaction(params: RDSDataService.Types.BeginTransactionRequest, callback?: (err: AWSError, data: RDSDataService.Types.BeginTransactionResponse) => void): Request<RDSDataService.Types.BeginTransactionResponse, AWSError>;
  /**
   * Starts a SQL transaction.
        
        
            A transaction can run for a maximum of 24 hours. A transaction is terminated and 
                rolled back automatically after 24 hours.
            A transaction times out if no calls use its transaction ID in three minutes. 
                If a transaction times out before it's committed, it's rolled back
                automatically.
            DDL statements inside a transaction cause an implicit commit. We recommend 
                that you run each DDL statement in a separate ExecuteStatement call with 
                continueAfterTimeout enabled.
        
   */
  beginTransaction(callback?: (err: AWSError, data: RDSDataService.Types.BeginTransactionResponse) => void): Request<RDSDataService.Types.BeginTransactionResponse, AWSError>;
  /**
   * Ends a SQL transaction started with the BeginTransaction operation and
            commits the changes.
   */
  commitTransaction(params: RDSDataService.Types.CommitTransactionRequest, callback?: (err: AWSError, data: RDSDataService.Types.CommitTransactionResponse) => void): Request<RDSDataService.Types.CommitTransactionResponse, AWSError>;
  /**
   * Ends a SQL transaction started with the BeginTransaction operation and
            commits the changes.
   */
  commitTransaction(callback?: (err: AWSError, data: RDSDataService.Types.CommitTransactionResponse) => void): Request<RDSDataService.Types.CommitTransactionResponse, AWSError>;
  /**
   * Runs one or more SQL statements.
        
            This operation is deprecated. Use the BatchExecuteStatement or
                    ExecuteStatement operation.
        
   */
  executeSql(params: RDSDataService.Types.ExecuteSqlRequest, callback?: (err: AWSError, data: RDSDataService.Types.ExecuteSqlResponse) => void): Request<RDSDataService.Types.ExecuteSqlResponse, AWSError>;
  /**
   * Runs one or more SQL statements.
        
            This operation is deprecated. Use the BatchExecuteStatement or
                    ExecuteStatement operation.
        
   */
  executeSql(callback?: (err: AWSError, data: RDSDataService.Types.ExecuteSqlResponse) => void): Request<RDSDataService.Types.ExecuteSqlResponse, AWSError>;
  /**
   * Runs a SQL statement against a database.
            
            If a call isn't part of a transaction because it doesn't include the
                    transactionID parameter, changes that result from the call are
                committed automatically.    
        
        The response size limit is 1 MB or 1,000 records. If the call returns more than 1 MB of response data or over 1,000 records, the call is terminated.
   */
  executeStatement(params: RDSDataService.Types.ExecuteStatementRequest, callback?: (err: AWSError, data: RDSDataService.Types.ExecuteStatementResponse) => void): Request<RDSDataService.Types.ExecuteStatementResponse, AWSError>;
  /**
   * Runs a SQL statement against a database.
            
            If a call isn't part of a transaction because it doesn't include the
                    transactionID parameter, changes that result from the call are
                committed automatically.    
        
        The response size limit is 1 MB or 1,000 records. If the call returns more than 1 MB of response data or over 1,000 records, the call is terminated.
   */
  executeStatement(callback?: (err: AWSError, data: RDSDataService.Types.ExecuteStatementResponse) => void): Request<RDSDataService.Types.ExecuteStatementResponse, AWSError>;
  /**
   * Performs a rollback of a transaction. Rolling back a transaction cancels its changes.
   */
  rollbackTransaction(params: RDSDataService.Types.RollbackTransactionRequest, callback?: (err: AWSError, data: RDSDataService.Types.RollbackTransactionResponse) => void): Request<RDSDataService.Types.RollbackTransactionResponse, AWSError>;
  /**
   * Performs a rollback of a transaction. Rolling back a transaction cancels its changes.
   */
  rollbackTransaction(callback?: (err: AWSError, data: RDSDataService.Types.RollbackTransactionResponse) => void): Request<RDSDataService.Types.RollbackTransactionResponse, AWSError>;
}
declare namespace RDSDataService {
  export type SqlStatementResults = SqlStatementResult[];
  export interface ResultFrame {
    /**
     * The records in the result set.
     */
    records?: Records;
    /**
     * The result-set metadata in the result set.
     */
    resultSetMetadata?: ResultSetMetadata;
  }
  export type SqlParameterSets = SqlParametersList[];
  export interface BatchExecuteStatementRequest {
    /**
     * The name of the database.
     */
    database?: DbName;
    /**
     * The parameter set for the batch operation.
     */
    parameterSets?: SqlParameterSets;
    /**
     * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
     */
    resourceArn: Arn;
    /**
     * The name of the database schema.
     */
    schema?: DbName;
    /**
     * The name or ARN of the secret that enables access to the DB cluster.
     */
    secretArn: Arn;
    /**
     * The SQL statement to run.
     */
    sql: SqlStatement;
    /**
     * The identifier of a transaction that was started by using the
                BeginTransaction operation. Specify the transaction ID of the
            transaction that you want to include the SQL statement in.
        If the SQL statement is not part of a transaction, don't set this
            parameter.
     */
    transactionId?: Id;
  }
  export type ArrayValueList = Value[];
  export type UpdateResults = UpdateResult[];
  export type Row = Value[];
  export type SqlRecords = FieldList[];
  export type Long = number;
  export type BoxedInteger = number;
  export interface CommitTransactionResponse {
    /**
     * The status of the commit operation.
     */
    transactionStatus?: TransactionStatus;
  }
  export type Integer = number;
  export type BoxedLong = number;
  export interface SqlParameter {
    /**
     * The name of the parameter.
     */
    name?: ParameterName;
    /**
     * The value of the parameter.
     */
    value?: Field;
  }
  export interface Field {
    /**
     * A value of BLOB data type.
     */
    blobValue?: _Blob;
    /**
     * A value of Boolean data type.
     */
    booleanValue?: BoxedBoolean;
    /**
     * A value of double data type.
     */
    doubleValue?: BoxedDouble;
    /**
     * A NULL value.
     */
    isNull?: BoxedBoolean;
    /**
     * A value of long data type.
     */
    longValue?: BoxedLong;
    /**
     * A value of string data type.
     */
    stringValue?: String;
  }
  export interface ExecuteSqlRequest {
    /**
     * The Amazon Resource Name (ARN) of the secret that enables access to the DB cluster.
     */
    awsSecretStoreArn: Arn;
    /**
     * The name of the database.
     */
    database?: DbName;
    /**
     * The ARN of the Aurora Serverless DB cluster.
     */
    dbClusterOrInstanceArn: Arn;
    /**
     * The name of the database schema.
     */
    schema?: DbName;
    /**
     * One or more SQL statements to run on the DB cluster.
        You can separate SQL statements from each other with a semicolon (;). Any valid SQL
            statement is permitted, including data definition, data manipulation, and commit
            statements. 
     */
    sqlStatements: SqlStatement;
  }
  export type Arn = string;
  export interface StructValue {
    /**
     * The attributes returned in the record.
     */
    attributes?: ArrayValueList;
  }
  export type Boolean = boolean;
  export type TransactionStatus = string;
  export type SqlStatement = string;
  export interface RollbackTransactionRequest {
    /**
     * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
     */
    resourceArn: Arn;
    /**
     * The name or ARN of the secret that enables access to the DB cluster.
     */
    secretArn: Arn;
    /**
     * The identifier of the transaction to roll back.
     */
    transactionId: Id;
  }
  export interface Record {
    /**
     * The values returned in the record.
     */
    values?: Row;
  }
  export type BoxedFloat = number;
  export type BoxedDouble = number;
  export interface Value {
    /**
     * An array of column values.
     */
    arrayValues?: ArrayValueList;
    /**
     * A value for a column of big integer data type.
     */
    bigIntValue?: BoxedLong;
    /**
     * A value for a column of BIT data type.
     */
    bitValue?: BoxedBoolean;
    /**
     * A value for a column of BLOB data type.
     */
    blobValue?: _Blob;
    /**
     * A value for a column of double data type.
     */
    doubleValue?: BoxedDouble;
    /**
     * A value for a column of integer data type.
     */
    intValue?: BoxedInteger;
    /**
     * A NULL value.
     */
    isNull?: BoxedBoolean;
    /**
     * A value for a column of real data type.
     */
    realValue?: BoxedFloat;
    /**
     * A value for a column of string data type.
     */
    stringValue?: String;
    /**
     * A value for a column of STRUCT data type.
     */
    structValue?: StructValue;
  }
  export type FieldList = Field[];
  export interface ExecuteStatementResponse {
    /**
     * Metadata for the columns included in the results.
     */
    columnMetadata?: Metadata;
    /**
     * Values for fields generated during the request.
     */
    generatedFields?: FieldList;
    /**
     * The number of records updated by the request.
     */
    numberOfRecordsUpdated?: RecordsUpdated;
    /**
     * The records returned by the SQL statement.
     */
    records?: SqlRecords;
  }
  export type BoxedBoolean = boolean;
  export type RecordsUpdated = number;
  export interface UpdateResult {
    /**
     * Values for fields generated during the request.
     */
    generatedFields?: FieldList;
  }
  export type SqlParametersList = SqlParameter[];
  export type ParameterName = string;
  export type Metadata = ColumnMetadata[];
  export interface ExecuteSqlResponse {
    /**
     * The results of the SQL statement or statements.
     */
    sqlStatementResults?: SqlStatementResults;
  }
  export interface SqlStatementResult {
    /**
     * The number of records updated by a SQL statement.
     */
    numberOfRecordsUpdated?: RecordsUpdated;
    /**
     * The result set of the SQL statement.
     */
    resultFrame?: ResultFrame;
  }
  export interface BeginTransactionRequest {
    /**
     * The name of the database.
     */
    database?: DbName;
    /**
     * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
     */
    resourceArn: Arn;
    /**
     * The name of the database schema.
     */
    schema?: DbName;
    /**
     * The name or ARN of the secret that enables access to the DB cluster.
     */
    secretArn: Arn;
  }
  export interface RollbackTransactionResponse {
    /**
     * The status of the rollback operation.
     */
    transactionStatus?: TransactionStatus;
  }
  export interface BatchExecuteStatementResponse {
    /**
     * The execution results of each batch entry.
     */
    updateResults?: UpdateResults;
  }
  export interface ResultSetMetadata {
    /**
     * The number of columns in the result set.
     */
    columnCount?: Long;
    /**
     * The metadata of the columns in the result set.
     */
    columnMetadata?: Metadata;
  }
  export type Records = Record[];
  export interface ExecuteStatementRequest {
    /**
     * A value that indicates whether to continue running the statement after 
            the call times out. By default, the statement stops running when the call 
            times out.
        
            For DDL statements, we recommend continuing to run the statement after 
               the call times out. When a DDL statement terminates before it is finished 
               running, it can result in errors and possibly corrupted data structures.
        
     */
    continueAfterTimeout?: Boolean;
    /**
     * The name of the database.
     */
    database?: DbName;
    /**
     * A value that indicates whether to include metadata in the results.
     */
    includeResultMetadata?: Boolean;
    /**
     * The parameters for the SQL statement.
     */
    parameters?: SqlParametersList;
    /**
     * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
     */
    resourceArn: Arn;
    /**
     * The name of the database schema.
     */
    schema?: DbName;
    /**
     * The name or ARN of the secret that enables access to the DB cluster.
     */
    secretArn: Arn;
    /**
     * The SQL statement to run.
     */
    sql: SqlStatement;
    /**
     * The identifier of a transaction that was started by using the
                BeginTransaction operation. Specify the transaction ID of the
            transaction that you want to include the SQL statement in.
        If the SQL statement is not part of a transaction, don't set this parameter.
     */
    transactionId?: Id;
  }
  export type _Blob = Buffer|Uint8Array|Blob|string;
  export type String = string;
  export interface BeginTransactionResponse {
    /**
     * The transaction ID of the transaction started by the call.
     */
    transactionId?: Id;
  }
  export type Id = string;
  export interface CommitTransactionRequest {
    /**
     * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
     */
    resourceArn: Arn;
    /**
     * The name or ARN of the secret that enables access to the DB cluster.
     */
    secretArn: Arn;
    /**
     * The identifier of the transaction to end and commit.
     */
    transactionId: Id;
  }
  export interface ColumnMetadata {
    /**
     * The type of the column.
     */
    arrayBaseColumnType?: Integer;
    /**
     * A value that indicates whether the column increments automatically.
     */
    isAutoIncrement?: Boolean;
    /**
     * A value that indicates whether the column is case-sensitive.
     */
    isCaseSensitive?: Boolean;
    /**
     * A value that indicates whether the column contains currency values.
     */
    isCurrency?: Boolean;
    /**
     * A value that indicates whether an integer column is signed.
     */
    isSigned?: Boolean;
    /**
     * The label for the column.
     */
    label?: String;
    /**
     * The name of the column.
     */
    name?: String;
    /**
     * A value that indicates whether the column is nullable.
     */
    nullable?: Integer;
    /**
     * The precision value of a decimal number column.
     */
    precision?: Integer;
    /**
     * The scale value of a decimal number column.
     */
    scale?: Integer;
    /**
     * The name of the schema that owns the table that includes the column.
     */
    schemaName?: String;
    /**
     * The name of the table that includes the column.
     */
    tableName?: String;
    /**
     * The type of the column.
     */
    type?: Integer;
    /**
     * The database-specific data type of the column.
     */
    typeName?: String;
  }
  export type DbName = string;
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
