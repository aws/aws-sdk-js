import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class Athena extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Athena.Types.ClientConfiguration)
  config: Config & Athena.Types.ClientConfiguration;
  /**
   * Returns the details of a single named query or a list of up to 50 queries, which you provide as an array of query ID strings. Requires you to have access to the workgroup in which the queries were saved. Use ListNamedQueriesInput to get the list of named query IDs in the specified workgroup. If information could not be retrieved for a submitted query ID, information about the query ID submitted is listed under UnprocessedNamedQueryId. Named queries differ from executed queries. Use BatchGetQueryExecutionInput to get details about each unique query execution, and ListQueryExecutionsInput to get a list of query execution IDs.
   */
  batchGetNamedQuery(params: Athena.Types.BatchGetNamedQueryInput, callback?: (err: AWSError, data: Athena.Types.BatchGetNamedQueryOutput) => void): Request<Athena.Types.BatchGetNamedQueryOutput, AWSError>;
  /**
   * Returns the details of a single named query or a list of up to 50 queries, which you provide as an array of query ID strings. Requires you to have access to the workgroup in which the queries were saved. Use ListNamedQueriesInput to get the list of named query IDs in the specified workgroup. If information could not be retrieved for a submitted query ID, information about the query ID submitted is listed under UnprocessedNamedQueryId. Named queries differ from executed queries. Use BatchGetQueryExecutionInput to get details about each unique query execution, and ListQueryExecutionsInput to get a list of query execution IDs.
   */
  batchGetNamedQuery(callback?: (err: AWSError, data: Athena.Types.BatchGetNamedQueryOutput) => void): Request<Athena.Types.BatchGetNamedQueryOutput, AWSError>;
  /**
   * Returns the details of a single query execution or a list of up to 50 query executions, which you provide as an array of query execution ID strings. Requires you to have access to the workgroup in which the queries ran. To get a list of query execution IDs, use ListQueryExecutionsInput$WorkGroup. Query executions differ from named (saved) queries. Use BatchGetNamedQueryInput to get details about named queries.
   */
  batchGetQueryExecution(params: Athena.Types.BatchGetQueryExecutionInput, callback?: (err: AWSError, data: Athena.Types.BatchGetQueryExecutionOutput) => void): Request<Athena.Types.BatchGetQueryExecutionOutput, AWSError>;
  /**
   * Returns the details of a single query execution or a list of up to 50 query executions, which you provide as an array of query execution ID strings. Requires you to have access to the workgroup in which the queries ran. To get a list of query execution IDs, use ListQueryExecutionsInput$WorkGroup. Query executions differ from named (saved) queries. Use BatchGetNamedQueryInput to get details about named queries.
   */
  batchGetQueryExecution(callback?: (err: AWSError, data: Athena.Types.BatchGetQueryExecutionOutput) => void): Request<Athena.Types.BatchGetQueryExecutionOutput, AWSError>;
  /**
   * Creates a named query in the specified workgroup. Requires that you have access to the workgroup. For code samples using the AWS SDK for Java, see Examples and Code Samples in the Amazon Athena User Guide.
   */
  createNamedQuery(params: Athena.Types.CreateNamedQueryInput, callback?: (err: AWSError, data: Athena.Types.CreateNamedQueryOutput) => void): Request<Athena.Types.CreateNamedQueryOutput, AWSError>;
  /**
   * Creates a named query in the specified workgroup. Requires that you have access to the workgroup. For code samples using the AWS SDK for Java, see Examples and Code Samples in the Amazon Athena User Guide.
   */
  createNamedQuery(callback?: (err: AWSError, data: Athena.Types.CreateNamedQueryOutput) => void): Request<Athena.Types.CreateNamedQueryOutput, AWSError>;
  /**
   * Creates a workgroup with the specified name.
   */
  createWorkGroup(params: Athena.Types.CreateWorkGroupInput, callback?: (err: AWSError, data: Athena.Types.CreateWorkGroupOutput) => void): Request<Athena.Types.CreateWorkGroupOutput, AWSError>;
  /**
   * Creates a workgroup with the specified name.
   */
  createWorkGroup(callback?: (err: AWSError, data: Athena.Types.CreateWorkGroupOutput) => void): Request<Athena.Types.CreateWorkGroupOutput, AWSError>;
  /**
   * Deletes the named query if you have access to the workgroup in which the query was saved. For code samples using the AWS SDK for Java, see Examples and Code Samples in the Amazon Athena User Guide.
   */
  deleteNamedQuery(params: Athena.Types.DeleteNamedQueryInput, callback?: (err: AWSError, data: Athena.Types.DeleteNamedQueryOutput) => void): Request<Athena.Types.DeleteNamedQueryOutput, AWSError>;
  /**
   * Deletes the named query if you have access to the workgroup in which the query was saved. For code samples using the AWS SDK for Java, see Examples and Code Samples in the Amazon Athena User Guide.
   */
  deleteNamedQuery(callback?: (err: AWSError, data: Athena.Types.DeleteNamedQueryOutput) => void): Request<Athena.Types.DeleteNamedQueryOutput, AWSError>;
  /**
   * Deletes the workgroup with the specified name. The primary workgroup cannot be deleted.
   */
  deleteWorkGroup(params: Athena.Types.DeleteWorkGroupInput, callback?: (err: AWSError, data: Athena.Types.DeleteWorkGroupOutput) => void): Request<Athena.Types.DeleteWorkGroupOutput, AWSError>;
  /**
   * Deletes the workgroup with the specified name. The primary workgroup cannot be deleted.
   */
  deleteWorkGroup(callback?: (err: AWSError, data: Athena.Types.DeleteWorkGroupOutput) => void): Request<Athena.Types.DeleteWorkGroupOutput, AWSError>;
  /**
   * Returns information about a single query. Requires that you have access to the workgroup in which the query was saved.
   */
  getNamedQuery(params: Athena.Types.GetNamedQueryInput, callback?: (err: AWSError, data: Athena.Types.GetNamedQueryOutput) => void): Request<Athena.Types.GetNamedQueryOutput, AWSError>;
  /**
   * Returns information about a single query. Requires that you have access to the workgroup in which the query was saved.
   */
  getNamedQuery(callback?: (err: AWSError, data: Athena.Types.GetNamedQueryOutput) => void): Request<Athena.Types.GetNamedQueryOutput, AWSError>;
  /**
   * Returns information about a single execution of a query if you have access to the workgroup in which the query ran. Each time a query executes, information about the query execution is saved with a unique ID.
   */
  getQueryExecution(params: Athena.Types.GetQueryExecutionInput, callback?: (err: AWSError, data: Athena.Types.GetQueryExecutionOutput) => void): Request<Athena.Types.GetQueryExecutionOutput, AWSError>;
  /**
   * Returns information about a single execution of a query if you have access to the workgroup in which the query ran. Each time a query executes, information about the query execution is saved with a unique ID.
   */
  getQueryExecution(callback?: (err: AWSError, data: Athena.Types.GetQueryExecutionOutput) => void): Request<Athena.Types.GetQueryExecutionOutput, AWSError>;
  /**
   * Streams the results of a single query execution specified by QueryExecutionId from the Athena query results location in Amazon S3. For more information, see Query Results in the Amazon Athena User Guide. This request does not execute the query but returns results. Use StartQueryExecution to run a query. To stream query results successfully, the IAM principal with permission to call GetQueryResults also must have permissions to the Amazon S3 GetObject action for the Athena query results location.  IAM principals with permission to the Amazon S3 GetObject action for the query results location are able to retrieve query results from Amazon S3 even if permission to the GetQueryResults action is denied. To restrict user or role access, ensure that Amazon S3 permissions to the Athena query location are denied. 
   */
  getQueryResults(params: Athena.Types.GetQueryResultsInput, callback?: (err: AWSError, data: Athena.Types.GetQueryResultsOutput) => void): Request<Athena.Types.GetQueryResultsOutput, AWSError>;
  /**
   * Streams the results of a single query execution specified by QueryExecutionId from the Athena query results location in Amazon S3. For more information, see Query Results in the Amazon Athena User Guide. This request does not execute the query but returns results. Use StartQueryExecution to run a query. To stream query results successfully, the IAM principal with permission to call GetQueryResults also must have permissions to the Amazon S3 GetObject action for the Athena query results location.  IAM principals with permission to the Amazon S3 GetObject action for the query results location are able to retrieve query results from Amazon S3 even if permission to the GetQueryResults action is denied. To restrict user or role access, ensure that Amazon S3 permissions to the Athena query location are denied. 
   */
  getQueryResults(callback?: (err: AWSError, data: Athena.Types.GetQueryResultsOutput) => void): Request<Athena.Types.GetQueryResultsOutput, AWSError>;
  /**
   * Returns information about the workgroup with the specified name.
   */
  getWorkGroup(params: Athena.Types.GetWorkGroupInput, callback?: (err: AWSError, data: Athena.Types.GetWorkGroupOutput) => void): Request<Athena.Types.GetWorkGroupOutput, AWSError>;
  /**
   * Returns information about the workgroup with the specified name.
   */
  getWorkGroup(callback?: (err: AWSError, data: Athena.Types.GetWorkGroupOutput) => void): Request<Athena.Types.GetWorkGroupOutput, AWSError>;
  /**
   * Provides a list of available query IDs only for queries saved in the specified workgroup. Requires that you have access to the workgroup. For code samples using the AWS SDK for Java, see Examples and Code Samples in the Amazon Athena User Guide.
   */
  listNamedQueries(params: Athena.Types.ListNamedQueriesInput, callback?: (err: AWSError, data: Athena.Types.ListNamedQueriesOutput) => void): Request<Athena.Types.ListNamedQueriesOutput, AWSError>;
  /**
   * Provides a list of available query IDs only for queries saved in the specified workgroup. Requires that you have access to the workgroup. For code samples using the AWS SDK for Java, see Examples and Code Samples in the Amazon Athena User Guide.
   */
  listNamedQueries(callback?: (err: AWSError, data: Athena.Types.ListNamedQueriesOutput) => void): Request<Athena.Types.ListNamedQueriesOutput, AWSError>;
  /**
   * Provides a list of available query execution IDs for the queries in the specified workgroup. Requires you to have access to the workgroup in which the queries ran. For code samples using the AWS SDK for Java, see Examples and Code Samples in the Amazon Athena User Guide.
   */
  listQueryExecutions(params: Athena.Types.ListQueryExecutionsInput, callback?: (err: AWSError, data: Athena.Types.ListQueryExecutionsOutput) => void): Request<Athena.Types.ListQueryExecutionsOutput, AWSError>;
  /**
   * Provides a list of available query execution IDs for the queries in the specified workgroup. Requires you to have access to the workgroup in which the queries ran. For code samples using the AWS SDK for Java, see Examples and Code Samples in the Amazon Athena User Guide.
   */
  listQueryExecutions(callback?: (err: AWSError, data: Athena.Types.ListQueryExecutionsOutput) => void): Request<Athena.Types.ListQueryExecutionsOutput, AWSError>;
  /**
   * Lists the tags associated with this workgroup.
   */
  listTagsForResource(params: Athena.Types.ListTagsForResourceInput, callback?: (err: AWSError, data: Athena.Types.ListTagsForResourceOutput) => void): Request<Athena.Types.ListTagsForResourceOutput, AWSError>;
  /**
   * Lists the tags associated with this workgroup.
   */
  listTagsForResource(callback?: (err: AWSError, data: Athena.Types.ListTagsForResourceOutput) => void): Request<Athena.Types.ListTagsForResourceOutput, AWSError>;
  /**
   * Lists available workgroups for the account.
   */
  listWorkGroups(params: Athena.Types.ListWorkGroupsInput, callback?: (err: AWSError, data: Athena.Types.ListWorkGroupsOutput) => void): Request<Athena.Types.ListWorkGroupsOutput, AWSError>;
  /**
   * Lists available workgroups for the account.
   */
  listWorkGroups(callback?: (err: AWSError, data: Athena.Types.ListWorkGroupsOutput) => void): Request<Athena.Types.ListWorkGroupsOutput, AWSError>;
  /**
   * Runs the SQL query statements contained in the Query. Requires you to have access to the workgroup in which the query ran. For code samples using the AWS SDK for Java, see Examples and Code Samples in the Amazon Athena User Guide.
   */
  startQueryExecution(params: Athena.Types.StartQueryExecutionInput, callback?: (err: AWSError, data: Athena.Types.StartQueryExecutionOutput) => void): Request<Athena.Types.StartQueryExecutionOutput, AWSError>;
  /**
   * Runs the SQL query statements contained in the Query. Requires you to have access to the workgroup in which the query ran. For code samples using the AWS SDK for Java, see Examples and Code Samples in the Amazon Athena User Guide.
   */
  startQueryExecution(callback?: (err: AWSError, data: Athena.Types.StartQueryExecutionOutput) => void): Request<Athena.Types.StartQueryExecutionOutput, AWSError>;
  /**
   * Stops a query execution. Requires you to have access to the workgroup in which the query ran. For code samples using the AWS SDK for Java, see Examples and Code Samples in the Amazon Athena User Guide.
   */
  stopQueryExecution(params: Athena.Types.StopQueryExecutionInput, callback?: (err: AWSError, data: Athena.Types.StopQueryExecutionOutput) => void): Request<Athena.Types.StopQueryExecutionOutput, AWSError>;
  /**
   * Stops a query execution. Requires you to have access to the workgroup in which the query ran. For code samples using the AWS SDK for Java, see Examples and Code Samples in the Amazon Athena User Guide.
   */
  stopQueryExecution(callback?: (err: AWSError, data: Athena.Types.StopQueryExecutionOutput) => void): Request<Athena.Types.StopQueryExecutionOutput, AWSError>;
  /**
   * Adds one or more tags to the resource, such as a workgroup. A tag is a label that you assign to an AWS Athena resource (a workgroup). Each tag consists of a key and an optional value, both of which you define. Tags enable you to categorize resources (workgroups) in Athena, for example, by purpose, owner, or environment. Use a consistent set of tag keys to make it easier to search and filter workgroups in your account. For best practices, see AWS Tagging Strategies. The key length is from 1 (minimum) to 128 (maximum) Unicode characters in UTF-8. The tag value length is from 0 (minimum) to 256 (maximum) Unicode characters in UTF-8. You can use letters and numbers representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Tag keys must be unique per resource. If you specify more than one, separate them by commas.
   */
  tagResource(params: Athena.Types.TagResourceInput, callback?: (err: AWSError, data: Athena.Types.TagResourceOutput) => void): Request<Athena.Types.TagResourceOutput, AWSError>;
  /**
   * Adds one or more tags to the resource, such as a workgroup. A tag is a label that you assign to an AWS Athena resource (a workgroup). Each tag consists of a key and an optional value, both of which you define. Tags enable you to categorize resources (workgroups) in Athena, for example, by purpose, owner, or environment. Use a consistent set of tag keys to make it easier to search and filter workgroups in your account. For best practices, see AWS Tagging Strategies. The key length is from 1 (minimum) to 128 (maximum) Unicode characters in UTF-8. The tag value length is from 0 (minimum) to 256 (maximum) Unicode characters in UTF-8. You can use letters and numbers representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Tag keys must be unique per resource. If you specify more than one, separate them by commas.
   */
  tagResource(callback?: (err: AWSError, data: Athena.Types.TagResourceOutput) => void): Request<Athena.Types.TagResourceOutput, AWSError>;
  /**
   * Removes one or more tags from the workgroup resource. Takes as an input a list of TagKey Strings separated by commas, and removes their tags at the same time.
   */
  untagResource(params: Athena.Types.UntagResourceInput, callback?: (err: AWSError, data: Athena.Types.UntagResourceOutput) => void): Request<Athena.Types.UntagResourceOutput, AWSError>;
  /**
   * Removes one or more tags from the workgroup resource. Takes as an input a list of TagKey Strings separated by commas, and removes their tags at the same time.
   */
  untagResource(callback?: (err: AWSError, data: Athena.Types.UntagResourceOutput) => void): Request<Athena.Types.UntagResourceOutput, AWSError>;
  /**
   * Updates the workgroup with the specified name. The workgroup's name cannot be changed.
   */
  updateWorkGroup(params: Athena.Types.UpdateWorkGroupInput, callback?: (err: AWSError, data: Athena.Types.UpdateWorkGroupOutput) => void): Request<Athena.Types.UpdateWorkGroupOutput, AWSError>;
  /**
   * Updates the workgroup with the specified name. The workgroup's name cannot be changed.
   */
  updateWorkGroup(callback?: (err: AWSError, data: Athena.Types.UpdateWorkGroupOutput) => void): Request<Athena.Types.UpdateWorkGroupOutput, AWSError>;
}
declare namespace Athena {
  export type AmazonResourceName = string;
  export interface BatchGetNamedQueryInput {
    /**
     * An array of query IDs.
     */
    NamedQueryIds: NamedQueryIdList;
  }
  export interface BatchGetNamedQueryOutput {
    /**
     * Information about the named query IDs submitted.
     */
    NamedQueries?: NamedQueryList;
    /**
     * Information about provided query IDs.
     */
    UnprocessedNamedQueryIds?: UnprocessedNamedQueryIdList;
  }
  export interface BatchGetQueryExecutionInput {
    /**
     * An array of query execution IDs.
     */
    QueryExecutionIds: QueryExecutionIdList;
  }
  export interface BatchGetQueryExecutionOutput {
    /**
     * Information about a query execution.
     */
    QueryExecutions?: QueryExecutionList;
    /**
     * Information about the query executions that failed to run.
     */
    UnprocessedQueryExecutionIds?: UnprocessedQueryExecutionIdList;
  }
  export type Boolean = boolean;
  export type BoxedBoolean = boolean;
  export type BytesScannedCutoffValue = number;
  export interface ColumnInfo {
    /**
     * The catalog to which the query results belong.
     */
    CatalogName?: String;
    /**
     * The schema name (database name) to which the query results belong.
     */
    SchemaName?: String;
    /**
     * The table name for the query results.
     */
    TableName?: String;
    /**
     * The name of the column.
     */
    Name: String;
    /**
     * A column label.
     */
    Label?: String;
    /**
     * The data type of the column.
     */
    Type: String;
    /**
     * For DECIMAL data types, specifies the total number of digits, up to 38. For performance reasons, we recommend up to 18 digits.
     */
    Precision?: Integer;
    /**
     * For DECIMAL data types, specifies the total number of digits in the fractional part of the value. Defaults to 0.
     */
    Scale?: Integer;
    /**
     * Indicates the column's nullable status.
     */
    Nullable?: ColumnNullable;
    /**
     * Indicates whether values in the column are case-sensitive.
     */
    CaseSensitive?: Boolean;
  }
  export type ColumnInfoList = ColumnInfo[];
  export type ColumnNullable = "NOT_NULL"|"NULLABLE"|"UNKNOWN"|string;
  export interface CreateNamedQueryInput {
    /**
     * The query name.
     */
    Name: NameString;
    /**
     * The query description.
     */
    Description?: DescriptionString;
    /**
     * The database to which the query belongs.
     */
    Database: DatabaseString;
    /**
     * The contents of the query with all query statements.
     */
    QueryString: QueryString;
    /**
     * A unique case-sensitive string used to ensure the request to create the query is idempotent (executes only once). If another CreateNamedQuery request is received, the same response is returned and another query is not created. If a parameter has changed, for example, the QueryString, an error is returned.  This token is listed as not required because AWS SDKs (for example the AWS SDK for Java) auto-generate the token for users. If you are not using the AWS SDK or the AWS CLI, you must provide this token or the action will fail. 
     */
    ClientRequestToken?: IdempotencyToken;
    /**
     * The name of the workgroup in which the named query is being created.
     */
    WorkGroup?: WorkGroupName;
  }
  export interface CreateNamedQueryOutput {
    /**
     * The unique ID of the query.
     */
    NamedQueryId?: NamedQueryId;
  }
  export interface CreateWorkGroupInput {
    /**
     * The workgroup name.
     */
    Name: WorkGroupName;
    /**
     * The configuration for the workgroup, which includes the location in Amazon S3 where query results are stored, the encryption configuration, if any, used for encrypting query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup, the limit for the amount of bytes scanned (cutoff) per query, if it is specified, and whether workgroup's settings (specified with EnforceWorkGroupConfiguration) in the WorkGroupConfiguration override client-side settings. See WorkGroupConfiguration$EnforceWorkGroupConfiguration.
     */
    Configuration?: WorkGroupConfiguration;
    /**
     * The workgroup description.
     */
    Description?: WorkGroupDescriptionString;
    /**
     * One or more tags, separated by commas, that you want to attach to the workgroup as you create it.
     */
    Tags?: TagList;
  }
  export interface CreateWorkGroupOutput {
  }
  export type DatabaseString = string;
  export type _Date = Date;
  export interface Datum {
    /**
     * The value of the datum.
     */
    VarCharValue?: datumString;
  }
  export interface DeleteNamedQueryInput {
    /**
     * The unique ID of the query to delete.
     */
    NamedQueryId: NamedQueryId;
  }
  export interface DeleteNamedQueryOutput {
  }
  export interface DeleteWorkGroupInput {
    /**
     * The unique name of the workgroup to delete.
     */
    WorkGroup: WorkGroupName;
    /**
     * The option to delete the workgroup and its contents even if the workgroup contains any named queries.
     */
    RecursiveDeleteOption?: BoxedBoolean;
  }
  export interface DeleteWorkGroupOutput {
  }
  export type DescriptionString = string;
  export interface EncryptionConfiguration {
    /**
     * Indicates whether Amazon S3 server-side encryption with Amazon S3-managed keys (SSE-S3), server-side encryption with KMS-managed keys (SSE-KMS), or client-side encryption with KMS-managed keys (CSE-KMS) is used. If a query runs in a workgroup and the workgroup overrides client-side settings, then the workgroup's setting for encryption is used. It specifies whether query results must be encrypted, for all queries that run in this workgroup. 
     */
    EncryptionOption: EncryptionOption;
    /**
     * For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.
     */
    KmsKey?: String;
  }
  export type EncryptionOption = "SSE_S3"|"SSE_KMS"|"CSE_KMS"|string;
  export type ErrorCode = string;
  export type ErrorMessage = string;
  export interface GetNamedQueryInput {
    /**
     * The unique ID of the query. Use ListNamedQueries to get query IDs.
     */
    NamedQueryId: NamedQueryId;
  }
  export interface GetNamedQueryOutput {
    /**
     * Information about the query.
     */
    NamedQuery?: NamedQuery;
  }
  export interface GetQueryExecutionInput {
    /**
     * The unique ID of the query execution.
     */
    QueryExecutionId: QueryExecutionId;
  }
  export interface GetQueryExecutionOutput {
    /**
     * Information about the query execution.
     */
    QueryExecution?: QueryExecution;
  }
  export interface GetQueryResultsInput {
    /**
     * The unique ID of the query execution.
     */
    QueryExecutionId: QueryExecutionId;
    /**
     * The token that specifies where to start pagination if a previous request was truncated.
     */
    NextToken?: Token;
    /**
     * The maximum number of results (rows) to return in this request.
     */
    MaxResults?: MaxQueryResults;
  }
  export interface GetQueryResultsOutput {
    /**
     * The number of rows inserted with a CREATE TABLE AS SELECT statement. 
     */
    UpdateCount?: Long;
    /**
     * The results of the query execution.
     */
    ResultSet?: ResultSet;
    /**
     * A token to be used by the next request if this request is truncated.
     */
    NextToken?: Token;
  }
  export interface GetWorkGroupInput {
    /**
     * The name of the workgroup.
     */
    WorkGroup: WorkGroupName;
  }
  export interface GetWorkGroupOutput {
    /**
     * Information about the workgroup.
     */
    WorkGroup?: WorkGroup;
  }
  export type IdempotencyToken = string;
  export type Integer = number;
  export interface ListNamedQueriesInput {
    /**
     * The token that specifies where to start pagination if a previous request was truncated.
     */
    NextToken?: Token;
    /**
     * The maximum number of queries to return in this request.
     */
    MaxResults?: MaxNamedQueriesCount;
    /**
     * The name of the workgroup from which the named queries are being returned.
     */
    WorkGroup?: WorkGroupName;
  }
  export interface ListNamedQueriesOutput {
    /**
     * The list of unique query IDs.
     */
    NamedQueryIds?: NamedQueryIdList;
    /**
     * A token to be used by the next request if this request is truncated.
     */
    NextToken?: Token;
  }
  export interface ListQueryExecutionsInput {
    /**
     * The token that specifies where to start pagination if a previous request was truncated.
     */
    NextToken?: Token;
    /**
     * The maximum number of query executions to return in this request.
     */
    MaxResults?: MaxQueryExecutionsCount;
    /**
     * The name of the workgroup from which queries are being returned.
     */
    WorkGroup?: WorkGroupName;
  }
  export interface ListQueryExecutionsOutput {
    /**
     * The unique IDs of each query execution as an array of strings.
     */
    QueryExecutionIds?: QueryExecutionIdList;
    /**
     * A token to be used by the next request if this request is truncated.
     */
    NextToken?: Token;
  }
  export interface ListTagsForResourceInput {
    /**
     * Lists the tags for the workgroup resource with the specified ARN.
     */
    ResourceARN: AmazonResourceName;
    /**
     * The token for the next set of results, or null if there are no additional results for this request, where the request lists the tags for the workgroup resource with the specified ARN.
     */
    NextToken?: Token;
    /**
     * The maximum number of results to be returned per request that lists the tags for the workgroup resource.
     */
    MaxResults?: MaxTagsCount;
  }
  export interface ListTagsForResourceOutput {
    /**
     * The list of tags associated with this workgroup.
     */
    Tags?: TagList;
    /**
     * A token to be used by the next request if this request is truncated.
     */
    NextToken?: Token;
  }
  export interface ListWorkGroupsInput {
    /**
     * A token to be used by the next request if this request is truncated.
     */
    NextToken?: Token;
    /**
     * The maximum number of workgroups to return in this request.
     */
    MaxResults?: MaxWorkGroupsCount;
  }
  export interface ListWorkGroupsOutput {
    /**
     * The list of workgroups, including their names, descriptions, creation times, and states.
     */
    WorkGroups?: WorkGroupsList;
    /**
     * A token to be used by the next request if this request is truncated.
     */
    NextToken?: Token;
  }
  export type Long = number;
  export type MaxNamedQueriesCount = number;
  export type MaxQueryExecutionsCount = number;
  export type MaxQueryResults = number;
  export type MaxTagsCount = number;
  export type MaxWorkGroupsCount = number;
  export type NameString = string;
  export interface NamedQuery {
    /**
     * The query name.
     */
    Name: NameString;
    /**
     * The query description.
     */
    Description?: DescriptionString;
    /**
     * The database to which the query belongs.
     */
    Database: DatabaseString;
    /**
     * The SQL query statements that comprise the query.
     */
    QueryString: QueryString;
    /**
     * The unique identifier of the query.
     */
    NamedQueryId?: NamedQueryId;
    /**
     * The name of the workgroup that contains the named query.
     */
    WorkGroup?: WorkGroupName;
  }
  export type NamedQueryId = string;
  export type NamedQueryIdList = NamedQueryId[];
  export type NamedQueryList = NamedQuery[];
  export interface QueryExecution {
    /**
     * The unique identifier for each query execution.
     */
    QueryExecutionId?: QueryExecutionId;
    /**
     * The SQL query statements which the query execution ran.
     */
    Query?: QueryString;
    /**
     * The type of query statement that was run. DDL indicates DDL query statements. DML indicates DML (Data Manipulation Language) query statements, such as CREATE TABLE AS SELECT. UTILITY indicates query statements other than DDL and DML, such as SHOW CREATE TABLE, or DESCRIBE &lt;table&gt;.
     */
    StatementType?: StatementType;
    /**
     * The location in Amazon S3 where query results were stored and the encryption option, if any, used for query results. These are known as "client-side settings". If workgroup settings override client-side settings, then the query uses the location for the query results and the encryption configuration that are specified for the workgroup.
     */
    ResultConfiguration?: ResultConfiguration;
    /**
     * The database in which the query execution occurred.
     */
    QueryExecutionContext?: QueryExecutionContext;
    /**
     * The completion date, current state, submission time, and state change reason (if applicable) for the query execution.
     */
    Status?: QueryExecutionStatus;
    /**
     * The location of a manifest file that tracks file locations generated by the query, the amount of data scanned by the query, and the amount of time that it took the query to run.
     */
    Statistics?: QueryExecutionStatistics;
    /**
     * The name of the workgroup in which the query ran.
     */
    WorkGroup?: WorkGroupName;
  }
  export interface QueryExecutionContext {
    /**
     * The name of the database.
     */
    Database?: DatabaseString;
  }
  export type QueryExecutionId = string;
  export type QueryExecutionIdList = QueryExecutionId[];
  export type QueryExecutionList = QueryExecution[];
  export type QueryExecutionState = "QUEUED"|"RUNNING"|"SUCCEEDED"|"FAILED"|"CANCELLED"|string;
  export interface QueryExecutionStatistics {
    /**
     * The number of milliseconds that the query took to execute.
     */
    EngineExecutionTimeInMillis?: Long;
    /**
     * The number of bytes in the data that was queried.
     */
    DataScannedInBytes?: Long;
    /**
     * The location and file name of a data manifest file. The manifest file is saved to the Athena query results location in Amazon S3. It tracks files that the query wrote to Amazon S3. If the query fails, the manifest file also tracks files that the query intended to write. The manifest is useful for identifying orphaned files resulting from a failed query. For more information, see Working with Query Output Files in the Amazon Athena User Guide.
     */
    DataManifestLocation?: String;
  }
  export interface QueryExecutionStatus {
    /**
     * The state of query execution. QUEUED state is listed but is not used by Athena and is reserved for future use. RUNNING indicates that the query has been submitted to the service, and Athena will execute the query as soon as resources are available. SUCCEEDED indicates that the query completed without errors. FAILED indicates that the query experienced an error and did not complete processing. CANCELLED indicates that a user input interrupted query execution. 
     */
    State?: QueryExecutionState;
    /**
     * Further detail about the status of the query.
     */
    StateChangeReason?: String;
    /**
     * The date and time that the query was submitted.
     */
    SubmissionDateTime?: _Date;
    /**
     * The date and time that the query completed.
     */
    CompletionDateTime?: _Date;
  }
  export type QueryString = string;
  export interface ResultConfiguration {
    /**
     * The location in Amazon S3 where your query results are stored, such as s3://path/to/query/bucket/. To run the query, you must specify the query results location using one of the ways: either for individual queries using either this setting (client-side), or in the workgroup, using WorkGroupConfiguration. If none of them is set, Athena issues an error that no output location is provided. For more information, see Query Results. If workgroup settings override client-side settings, then the query uses the settings specified for the workgroup. See WorkGroupConfiguration$EnforceWorkGroupConfiguration.
     */
    OutputLocation?: String;
    /**
     * If query results are encrypted in Amazon S3, indicates the encryption option used (for example, SSE-KMS or CSE-KMS) and key information. This is a client-side setting. If workgroup settings override client-side settings, then the query uses the encryption configuration that is specified for the workgroup, and also uses the location for storing query results specified in the workgroup. See WorkGroupConfiguration$EnforceWorkGroupConfiguration and Workgroup Settings Override Client-Side Settings.
     */
    EncryptionConfiguration?: EncryptionConfiguration;
  }
  export interface ResultConfigurationUpdates {
    /**
     * The location in Amazon S3 where your query results are stored, such as s3://path/to/query/bucket/. For more information, see Query Results If workgroup settings override client-side settings, then the query uses the location for the query results and the encryption configuration that are specified for the workgroup. The "workgroup settings override" is specified in EnforceWorkGroupConfiguration (true/false) in the WorkGroupConfiguration. See WorkGroupConfiguration$EnforceWorkGroupConfiguration.
     */
    OutputLocation?: String;
    /**
     * If set to "true", indicates that the previously-specified query results location (also known as a client-side setting) for queries in this workgroup should be ignored and set to null. If set to "false" or not set, and a value is present in the OutputLocation in ResultConfigurationUpdates (the client-side setting), the OutputLocation in the workgroup's ResultConfiguration will be updated with the new value. For more information, see Workgroup Settings Override Client-Side Settings.
     */
    RemoveOutputLocation?: BoxedBoolean;
    /**
     * The encryption configuration for the query results.
     */
    EncryptionConfiguration?: EncryptionConfiguration;
    /**
     * If set to "true", indicates that the previously-specified encryption configuration (also known as the client-side setting) for queries in this workgroup should be ignored and set to null. If set to "false" or not set, and a value is present in the EncryptionConfiguration in ResultConfigurationUpdates (the client-side setting), the EncryptionConfiguration in the workgroup's ResultConfiguration will be updated with the new value. For more information, see Workgroup Settings Override Client-Side Settings.
     */
    RemoveEncryptionConfiguration?: BoxedBoolean;
  }
  export interface ResultSet {
    /**
     * The rows in the table.
     */
    Rows?: RowList;
    /**
     * The metadata that describes the column structure and data types of a table of query results.
     */
    ResultSetMetadata?: ResultSetMetadata;
  }
  export interface ResultSetMetadata {
    /**
     * Information about the columns returned in a query result metadata.
     */
    ColumnInfo?: ColumnInfoList;
  }
  export interface Row {
    /**
     * The data that populates a row in a query result table.
     */
    Data?: datumList;
  }
  export type RowList = Row[];
  export interface StartQueryExecutionInput {
    /**
     * The SQL query statements to be executed.
     */
    QueryString: QueryString;
    /**
     * A unique case-sensitive string used to ensure the request to create the query is idempotent (executes only once). If another StartQueryExecution request is received, the same response is returned and another query is not created. If a parameter has changed, for example, the QueryString, an error is returned.  This token is listed as not required because AWS SDKs (for example the AWS SDK for Java) auto-generate the token for users. If you are not using the AWS SDK or the AWS CLI, you must provide this token or the action will fail. 
     */
    ClientRequestToken?: IdempotencyToken;
    /**
     * The database within which the query executes.
     */
    QueryExecutionContext?: QueryExecutionContext;
    /**
     * Specifies information about where and how to save the results of the query execution. If the query runs in a workgroup, then workgroup's settings may override query settings. This affects the query results location. The workgroup settings override is specified in EnforceWorkGroupConfiguration (true/false) in the WorkGroupConfiguration. See WorkGroupConfiguration$EnforceWorkGroupConfiguration.
     */
    ResultConfiguration?: ResultConfiguration;
    /**
     * The name of the workgroup in which the query is being started.
     */
    WorkGroup?: WorkGroupName;
  }
  export interface StartQueryExecutionOutput {
    /**
     * The unique ID of the query that ran as a result of this request.
     */
    QueryExecutionId?: QueryExecutionId;
  }
  export type StatementType = "DDL"|"DML"|"UTILITY"|string;
  export interface StopQueryExecutionInput {
    /**
     * The unique ID of the query execution to stop.
     */
    QueryExecutionId: QueryExecutionId;
  }
  export interface StopQueryExecutionOutput {
  }
  export type String = string;
  export interface Tag {
    /**
     * A tag key. The tag key length is from 1 to 128 Unicode characters in UTF-8. You can use letters and numbers representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys are case-sensitive and must be unique per resource. 
     */
    Key?: TagKey;
    /**
     * A tag value. The tag value length is from 0 to 256 Unicode characters in UTF-8. You can use letters and numbers representable in UTF-8, and the following characters: + - = . _ : / @. Tag values are case-sensitive. 
     */
    Value?: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export interface TagResourceInput {
    /**
     * Requests that one or more tags are added to the resource (such as a workgroup) for the specified ARN.
     */
    ResourceARN: AmazonResourceName;
    /**
     * One or more tags, separated by commas, to be added to the resource, such as a workgroup.
     */
    Tags: TagList;
  }
  export interface TagResourceOutput {
  }
  export type TagValue = string;
  export type Token = string;
  export interface UnprocessedNamedQueryId {
    /**
     * The unique identifier of the named query.
     */
    NamedQueryId?: NamedQueryId;
    /**
     * The error code returned when the processing request for the named query failed, if applicable.
     */
    ErrorCode?: ErrorCode;
    /**
     * The error message returned when the processing request for the named query failed, if applicable.
     */
    ErrorMessage?: ErrorMessage;
  }
  export type UnprocessedNamedQueryIdList = UnprocessedNamedQueryId[];
  export interface UnprocessedQueryExecutionId {
    /**
     * The unique identifier of the query execution.
     */
    QueryExecutionId?: QueryExecutionId;
    /**
     * The error code returned when the query execution failed to process, if applicable.
     */
    ErrorCode?: ErrorCode;
    /**
     * The error message returned when the query execution failed to process, if applicable.
     */
    ErrorMessage?: ErrorMessage;
  }
  export type UnprocessedQueryExecutionIdList = UnprocessedQueryExecutionId[];
  export interface UntagResourceInput {
    /**
     * Removes one or more tags from the workgroup resource for the specified ARN.
     */
    ResourceARN: AmazonResourceName;
    /**
     * Removes the tags associated with one or more tag keys from the workgroup resource.
     */
    TagKeys: TagKeyList;
  }
  export interface UntagResourceOutput {
  }
  export interface UpdateWorkGroupInput {
    /**
     * The specified workgroup that will be updated.
     */
    WorkGroup: WorkGroupName;
    /**
     * The workgroup description.
     */
    Description?: WorkGroupDescriptionString;
    /**
     * The workgroup configuration that will be updated for the given workgroup.
     */
    ConfigurationUpdates?: WorkGroupConfigurationUpdates;
    /**
     * The workgroup state that will be updated for the given workgroup.
     */
    State?: WorkGroupState;
  }
  export interface UpdateWorkGroupOutput {
  }
  export interface WorkGroup {
    /**
     * The workgroup name.
     */
    Name: WorkGroupName;
    /**
     * The state of the workgroup: ENABLED or DISABLED.
     */
    State?: WorkGroupState;
    /**
     * The configuration of the workgroup, which includes the location in Amazon S3 where query results are stored, the encryption configuration, if any, used for query results; whether the Amazon CloudWatch Metrics are enabled for the workgroup; whether workgroup settings override client-side settings; and the data usage limits for the amount of data scanned per query or per workgroup. The workgroup settings override is specified in EnforceWorkGroupConfiguration (true/false) in the WorkGroupConfiguration. See WorkGroupConfiguration$EnforceWorkGroupConfiguration.
     */
    Configuration?: WorkGroupConfiguration;
    /**
     * The workgroup description.
     */
    Description?: WorkGroupDescriptionString;
    /**
     * The date and time the workgroup was created.
     */
    CreationTime?: _Date;
  }
  export interface WorkGroupConfiguration {
    /**
     * The configuration for the workgroup, which includes the location in Amazon S3 where query results are stored and the encryption option, if any, used for query results. To run the query, you must specify the query results location using one of the ways: either in the workgroup using this setting, or for individual queries (client-side), using ResultConfiguration$OutputLocation. If none of them is set, Athena issues an error that no output location is provided. For more information, see Query Results.
     */
    ResultConfiguration?: ResultConfiguration;
    /**
     * If set to "true", the settings for the workgroup override client-side settings. If set to "false", client-side settings are used. For more information, see Workgroup Settings Override Client-Side Settings.
     */
    EnforceWorkGroupConfiguration?: BoxedBoolean;
    /**
     * Indicates that the Amazon CloudWatch metrics are enabled for the workgroup.
     */
    PublishCloudWatchMetricsEnabled?: BoxedBoolean;
    /**
     * The upper data usage limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan.
     */
    BytesScannedCutoffPerQuery?: BytesScannedCutoffValue;
    /**
     * If set to true, allows members assigned to a workgroup to reference Amazon S3 Requester Pays buckets in queries. If set to false, workgroup members cannot query data from Requester Pays buckets, and queries that retrieve data from Requester Pays buckets cause an error. The default is false. For more information about Requester Pays buckets, see Requester Pays Buckets in the Amazon Simple Storage Service Developer Guide.
     */
    RequesterPaysEnabled?: BoxedBoolean;
  }
  export interface WorkGroupConfigurationUpdates {
    /**
     * If set to "true", the settings for the workgroup override client-side settings. If set to "false" client-side settings are used. For more information, see Workgroup Settings Override Client-Side Settings.
     */
    EnforceWorkGroupConfiguration?: BoxedBoolean;
    /**
     * The result configuration information about the queries in this workgroup that will be updated. Includes the updated results location and an updated option for encrypting query results.
     */
    ResultConfigurationUpdates?: ResultConfigurationUpdates;
    /**
     * Indicates whether this workgroup enables publishing metrics to Amazon CloudWatch.
     */
    PublishCloudWatchMetricsEnabled?: BoxedBoolean;
    /**
     * The upper limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan.
     */
    BytesScannedCutoffPerQuery?: BytesScannedCutoffValue;
    /**
     * Indicates that the data usage control limit per query is removed. WorkGroupConfiguration$BytesScannedCutoffPerQuery 
     */
    RemoveBytesScannedCutoffPerQuery?: BoxedBoolean;
    /**
     * If set to true, allows members assigned to a workgroup to specify Amazon S3 Requester Pays buckets in queries. If set to false, workgroup members cannot query data from Requester Pays buckets, and queries that retrieve data from Requester Pays buckets cause an error. The default is false. For more information about Requester Pays buckets, see Requester Pays Buckets in the Amazon Simple Storage Service Developer Guide.
     */
    RequesterPaysEnabled?: BoxedBoolean;
  }
  export type WorkGroupDescriptionString = string;
  export type WorkGroupName = string;
  export type WorkGroupState = "ENABLED"|"DISABLED"|string;
  export interface WorkGroupSummary {
    /**
     * The name of the workgroup.
     */
    Name?: WorkGroupName;
    /**
     * The state of the workgroup.
     */
    State?: WorkGroupState;
    /**
     * The workgroup description.
     */
    Description?: WorkGroupDescriptionString;
    /**
     * The workgroup creation date and time.
     */
    CreationTime?: _Date;
  }
  export type WorkGroupsList = WorkGroupSummary[];
  export type datumList = Datum[];
  export type datumString = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-05-18"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Athena client.
   */
  export import Types = Athena;
}
export = Athena;
