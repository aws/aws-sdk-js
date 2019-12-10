import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class Kendra extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Kendra.Types.ClientConfiguration)
  config: Config & Kendra.Types.ClientConfiguration;
  /**
   * Removes one or more documents from an index. The documents must have been added with the BatchPutDocument operation. The documents are deleted asynchronously. You can see the progress of the deletion by using AWS CloudWatch. Any error messages releated to the processing of the batch are sent to you CloudWatch log.
   */
  batchDeleteDocument(params: Kendra.Types.BatchDeleteDocumentRequest, callback?: (err: AWSError, data: Kendra.Types.BatchDeleteDocumentResponse) => void): Request<Kendra.Types.BatchDeleteDocumentResponse, AWSError>;
  /**
   * Removes one or more documents from an index. The documents must have been added with the BatchPutDocument operation. The documents are deleted asynchronously. You can see the progress of the deletion by using AWS CloudWatch. Any error messages releated to the processing of the batch are sent to you CloudWatch log.
   */
  batchDeleteDocument(callback?: (err: AWSError, data: Kendra.Types.BatchDeleteDocumentResponse) => void): Request<Kendra.Types.BatchDeleteDocumentResponse, AWSError>;
  /**
   * Adds one or more documents to an index. The BatchPutDocument operation enables you to ingest inline documents or a set of documents stored in an Amazon S3 bucket. Use this operation to ingest your text and unstructured text into an index, add custom attributes to the documents, and to attach an access control list to the documents added to the index. The documents are indexed asynchronously. You can see the progress of the batch using AWS CloudWatch. Any error messages related to processing the batch are sent to your AWS CloudWatch log.
   */
  batchPutDocument(params: Kendra.Types.BatchPutDocumentRequest, callback?: (err: AWSError, data: Kendra.Types.BatchPutDocumentResponse) => void): Request<Kendra.Types.BatchPutDocumentResponse, AWSError>;
  /**
   * Adds one or more documents to an index. The BatchPutDocument operation enables you to ingest inline documents or a set of documents stored in an Amazon S3 bucket. Use this operation to ingest your text and unstructured text into an index, add custom attributes to the documents, and to attach an access control list to the documents added to the index. The documents are indexed asynchronously. You can see the progress of the batch using AWS CloudWatch. Any error messages related to processing the batch are sent to your AWS CloudWatch log.
   */
  batchPutDocument(callback?: (err: AWSError, data: Kendra.Types.BatchPutDocumentResponse) => void): Request<Kendra.Types.BatchPutDocumentResponse, AWSError>;
  /**
   * Creates a data source that you use to with an Amazon Kendra index.  You specify a name, connector type and description for your data source. You can choose between an S3 connector, a SharePoint Online connector, and a database connector. You also specify configuration information such as document metadata (author, source URI, and so on) and user context information.  CreateDataSource is a synchronous operation. The operation returns 200 if the data source was successfully created. Otherwise, an exception is raised.
   */
  createDataSource(params: Kendra.Types.CreateDataSourceRequest, callback?: (err: AWSError, data: Kendra.Types.CreateDataSourceResponse) => void): Request<Kendra.Types.CreateDataSourceResponse, AWSError>;
  /**
   * Creates a data source that you use to with an Amazon Kendra index.  You specify a name, connector type and description for your data source. You can choose between an S3 connector, a SharePoint Online connector, and a database connector. You also specify configuration information such as document metadata (author, source URI, and so on) and user context information.  CreateDataSource is a synchronous operation. The operation returns 200 if the data source was successfully created. Otherwise, an exception is raised.
   */
  createDataSource(callback?: (err: AWSError, data: Kendra.Types.CreateDataSourceResponse) => void): Request<Kendra.Types.CreateDataSourceResponse, AWSError>;
  /**
   * Creates an new set of frequently asked question (FAQ) questions and answers.
   */
  createFaq(params: Kendra.Types.CreateFaqRequest, callback?: (err: AWSError, data: Kendra.Types.CreateFaqResponse) => void): Request<Kendra.Types.CreateFaqResponse, AWSError>;
  /**
   * Creates an new set of frequently asked question (FAQ) questions and answers.
   */
  createFaq(callback?: (err: AWSError, data: Kendra.Types.CreateFaqResponse) => void): Request<Kendra.Types.CreateFaqResponse, AWSError>;
  /**
   * Creates a new Amazon Kendra index. Index creation is an asynchronous operation. To determine if index creation has completed, check the Status field returned from a call to . The Status field is set to ACTIVE when the index is ready to use. Once the index is active you can index your documents using the operation or using one of the supported data sources. 
   */
  createIndex(params: Kendra.Types.CreateIndexRequest, callback?: (err: AWSError, data: Kendra.Types.CreateIndexResponse) => void): Request<Kendra.Types.CreateIndexResponse, AWSError>;
  /**
   * Creates a new Amazon Kendra index. Index creation is an asynchronous operation. To determine if index creation has completed, check the Status field returned from a call to . The Status field is set to ACTIVE when the index is ready to use. Once the index is active you can index your documents using the operation or using one of the supported data sources. 
   */
  createIndex(callback?: (err: AWSError, data: Kendra.Types.CreateIndexResponse) => void): Request<Kendra.Types.CreateIndexResponse, AWSError>;
  /**
   * Removes an FAQ from an index.
   */
  deleteFaq(params: Kendra.Types.DeleteFaqRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes an FAQ from an index.
   */
  deleteFaq(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an existing Amazon Kendra index. An exception is not thrown if the index is already being deleted. While the index is being deleted, the Status field returned by a call to the DescribeIndex operation is set to DELETING.
   */
  deleteIndex(params: Kendra.Types.DeleteIndexRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an existing Amazon Kendra index. An exception is not thrown if the index is already being deleted. While the index is being deleted, the Status field returned by a call to the DescribeIndex operation is set to DELETING.
   */
  deleteIndex(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Gets information about a Amazon Kendra data source.
   */
  describeDataSource(params: Kendra.Types.DescribeDataSourceRequest, callback?: (err: AWSError, data: Kendra.Types.DescribeDataSourceResponse) => void): Request<Kendra.Types.DescribeDataSourceResponse, AWSError>;
  /**
   * Gets information about a Amazon Kendra data source.
   */
  describeDataSource(callback?: (err: AWSError, data: Kendra.Types.DescribeDataSourceResponse) => void): Request<Kendra.Types.DescribeDataSourceResponse, AWSError>;
  /**
   * Gets information about an FAQ list.
   */
  describeFaq(params: Kendra.Types.DescribeFaqRequest, callback?: (err: AWSError, data: Kendra.Types.DescribeFaqResponse) => void): Request<Kendra.Types.DescribeFaqResponse, AWSError>;
  /**
   * Gets information about an FAQ list.
   */
  describeFaq(callback?: (err: AWSError, data: Kendra.Types.DescribeFaqResponse) => void): Request<Kendra.Types.DescribeFaqResponse, AWSError>;
  /**
   * Describes an existing Amazon Kendra index
   */
  describeIndex(params: Kendra.Types.DescribeIndexRequest, callback?: (err: AWSError, data: Kendra.Types.DescribeIndexResponse) => void): Request<Kendra.Types.DescribeIndexResponse, AWSError>;
  /**
   * Describes an existing Amazon Kendra index
   */
  describeIndex(callback?: (err: AWSError, data: Kendra.Types.DescribeIndexResponse) => void): Request<Kendra.Types.DescribeIndexResponse, AWSError>;
  /**
   * Gets statistics about synchronizing Amazon Kendra with a data source.
   */
  listDataSourceSyncJobs(params: Kendra.Types.ListDataSourceSyncJobsRequest, callback?: (err: AWSError, data: Kendra.Types.ListDataSourceSyncJobsResponse) => void): Request<Kendra.Types.ListDataSourceSyncJobsResponse, AWSError>;
  /**
   * Gets statistics about synchronizing Amazon Kendra with a data source.
   */
  listDataSourceSyncJobs(callback?: (err: AWSError, data: Kendra.Types.ListDataSourceSyncJobsResponse) => void): Request<Kendra.Types.ListDataSourceSyncJobsResponse, AWSError>;
  /**
   * Lists the data sources that you have created.
   */
  listDataSources(params: Kendra.Types.ListDataSourcesRequest, callback?: (err: AWSError, data: Kendra.Types.ListDataSourcesResponse) => void): Request<Kendra.Types.ListDataSourcesResponse, AWSError>;
  /**
   * Lists the data sources that you have created.
   */
  listDataSources(callback?: (err: AWSError, data: Kendra.Types.ListDataSourcesResponse) => void): Request<Kendra.Types.ListDataSourcesResponse, AWSError>;
  /**
   * Gets a list of FAQ lists associated with an index.
   */
  listFaqs(params: Kendra.Types.ListFaqsRequest, callback?: (err: AWSError, data: Kendra.Types.ListFaqsResponse) => void): Request<Kendra.Types.ListFaqsResponse, AWSError>;
  /**
   * Gets a list of FAQ lists associated with an index.
   */
  listFaqs(callback?: (err: AWSError, data: Kendra.Types.ListFaqsResponse) => void): Request<Kendra.Types.ListFaqsResponse, AWSError>;
  /**
   * Lists the Amazon Kendra indexes that you have created.
   */
  listIndices(params: Kendra.Types.ListIndicesRequest, callback?: (err: AWSError, data: Kendra.Types.ListIndicesResponse) => void): Request<Kendra.Types.ListIndicesResponse, AWSError>;
  /**
   * Lists the Amazon Kendra indexes that you have created.
   */
  listIndices(callback?: (err: AWSError, data: Kendra.Types.ListIndicesResponse) => void): Request<Kendra.Types.ListIndicesResponse, AWSError>;
  /**
   * Searches an active index. Use this API to search your documents using query. The Query operation enables to do faceted search and to filter results based on document attributes. It also enables you to provide user context that Amazon Kendra uses to enforce document access control in the search results.  Amazon Kendra searches your index for text content and question and answer (FAQ) content. By default the response contains three types of results.   Relevant passages   Matching FAQs   Relevant documents   You can specify that the query return only one type of result using the QueryResultTypeConfig parameter.
   */
  query(params: Kendra.Types.QueryRequest, callback?: (err: AWSError, data: Kendra.Types.QueryResult) => void): Request<Kendra.Types.QueryResult, AWSError>;
  /**
   * Searches an active index. Use this API to search your documents using query. The Query operation enables to do faceted search and to filter results based on document attributes. It also enables you to provide user context that Amazon Kendra uses to enforce document access control in the search results.  Amazon Kendra searches your index for text content and question and answer (FAQ) content. By default the response contains three types of results.   Relevant passages   Matching FAQs   Relevant documents   You can specify that the query return only one type of result using the QueryResultTypeConfig parameter.
   */
  query(callback?: (err: AWSError, data: Kendra.Types.QueryResult) => void): Request<Kendra.Types.QueryResult, AWSError>;
  /**
   * Starts a synchronization job for a data source. If a synchronization job is already in progress, Amazon Kendra returns a ResourceInUseException exception.
   */
  startDataSourceSyncJob(params: Kendra.Types.StartDataSourceSyncJobRequest, callback?: (err: AWSError, data: Kendra.Types.StartDataSourceSyncJobResponse) => void): Request<Kendra.Types.StartDataSourceSyncJobResponse, AWSError>;
  /**
   * Starts a synchronization job for a data source. If a synchronization job is already in progress, Amazon Kendra returns a ResourceInUseException exception.
   */
  startDataSourceSyncJob(callback?: (err: AWSError, data: Kendra.Types.StartDataSourceSyncJobResponse) => void): Request<Kendra.Types.StartDataSourceSyncJobResponse, AWSError>;
  /**
   * Stops a running synchronization job. You can't stop a scheduled synchronization job.
   */
  stopDataSourceSyncJob(params: Kendra.Types.StopDataSourceSyncJobRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Stops a running synchronization job. You can't stop a scheduled synchronization job.
   */
  stopDataSourceSyncJob(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Enables you to provide feedback to Amazon Kendra to improve the performance of the service. 
   */
  submitFeedback(params: Kendra.Types.SubmitFeedbackRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Enables you to provide feedback to Amazon Kendra to improve the performance of the service. 
   */
  submitFeedback(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates an existing Amazon Kendra data source.
   */
  updateDataSource(params: Kendra.Types.UpdateDataSourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates an existing Amazon Kendra data source.
   */
  updateDataSource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates an existing Amazon Kendra index.
   */
  updateIndex(params: Kendra.Types.UpdateIndexRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates an existing Amazon Kendra index.
   */
  updateIndex(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
}
declare namespace Kendra {
  export interface AccessControlListConfiguration {
    /**
     * Path to the AWS S3 bucket that contains the ACL files.
     */
    KeyPath?: S3ObjectKey;
  }
  export interface AclConfiguration {
    /**
     * A list of groups, separated by semi-colons, that filters a query response based on user context. The document is only returned to users that are in one of the groups specified in the UserContext field of the Query operation.
     */
    AllowedGroupsColumnName: ColumnName;
  }
  export interface AdditionalResultAttribute {
    /**
     * 
     */
    Key: String;
    /**
     * 
     */
    ValueType: AdditionalResultAttributeValueType;
    /**
     * 
     */
    Value: AdditionalResultAttributeValue;
  }
  export type AdditionalResultAttributeList = AdditionalResultAttribute[];
  export interface AdditionalResultAttributeValue {
    /**
     * The text associated with the attribute and information about the highlight to apply to the text.
     */
    TextWithHighlightsValue?: TextWithHighlights;
  }
  export type AdditionalResultAttributeValueType = "TEXT_WITH_HIGHLIGHTS_VALUE"|string;
  export interface AttributeFilter {
    /**
     * Performs a logical AND operation on all supplied filters.
     */
    AndAllFilters?: AttributeFilterList;
    /**
     * Performs a logical OR operation on all supplied filters.
     */
    OrAllFilters?: AttributeFilterList;
    /**
     * Performs a logical NOT operation on all supplied filters.
     */
    NotFilter?: AttributeFilter;
    /**
     * Performs an equals operation on two document attributes.
     */
    EqualsTo?: DocumentAttribute;
    /**
     * Returns true when a document contains all of the specified document attributes.
     */
    ContainsAll?: DocumentAttribute;
    /**
     * Returns true when a document contains any of the specified document attributes.
     */
    ContainsAny?: DocumentAttribute;
    /**
     * Performs a greater than operation on two document attributes. Use with a document attribute of type Integer or Long.
     */
    GreaterThan?: DocumentAttribute;
    /**
     * Performs a greater or equals than operation on two document attributes. Use with a document attribute of type Integer or Long.
     */
    GreaterThanOrEquals?: DocumentAttribute;
    /**
     * Performs a less than operation on two document attributes. Use with a document attribute of type Integer or Long.
     */
    LessThan?: DocumentAttribute;
    /**
     * Performs a less than or equals operation on two document attributes. Use with a document attribute of type Integer or Long.
     */
    LessThanOrEquals?: DocumentAttribute;
  }
  export type AttributeFilterList = AttributeFilter[];
  export interface BatchDeleteDocumentRequest {
    /**
     * The identifier of the index that contains the documents to delete.
     */
    IndexId: IndexId;
    /**
     * One or more identifiers for documents to delete from the index.
     */
    DocumentIdList: DocumentIdList;
  }
  export interface BatchDeleteDocumentResponse {
    /**
     * A list of documents that could not be removed from the index. Each entry contains an error message that indicates why the document couldn't be removed from the index.
     */
    FailedDocuments?: BatchDeleteDocumentResponseFailedDocuments;
  }
  export interface BatchDeleteDocumentResponseFailedDocument {
    /**
     * The identifier of the document that couldn't be removed from the index.
     */
    Id?: DocumentId;
    /**
     * The error code for why the document couldn't be removed from the index.
     */
    ErrorCode?: ErrorCode;
    /**
     * An explanation for why the document couldn't be removed from the index.
     */
    ErrorMessage?: ErrorMessage;
  }
  export type BatchDeleteDocumentResponseFailedDocuments = BatchDeleteDocumentResponseFailedDocument[];
  export interface BatchPutDocumentRequest {
    /**
     * The identifier of the index to add the documents to. You need to create the index first using the CreateIndex operation.
     */
    IndexId: IndexId;
    /**
     * The Amazon Resource Name (ARN) of a role that is allowed to run the BatchPutDocument operation. For more information, see IAM Roles for Amazon Kendra.
     */
    RoleArn?: RoleArn;
    /**
     * One or more documents to add to the index.  Each document is limited to 5 Mb, the total size of the list is limited to 50 Mb.
     */
    Documents: DocumentList;
  }
  export interface BatchPutDocumentResponse {
    /**
     * A list of documents that were not added to the index because the document failed a validation check. Each document contains an error message that indicates why the document couldn't be added to the index. If there was an error adding a document to an index the error is reported in your AWS CloudWatch log.
     */
    FailedDocuments?: BatchPutDocumentResponseFailedDocuments;
  }
  export interface BatchPutDocumentResponseFailedDocument {
    /**
     * The unique identifier of the document.
     */
    Id?: DocumentId;
    /**
     * The type of error that caused the document to fail to be indexed.
     */
    ErrorCode?: ErrorCode;
    /**
     * A description of the reason why the document could not be indexed.
     */
    ErrorMessage?: ErrorMessage;
  }
  export type BatchPutDocumentResponseFailedDocuments = BatchPutDocumentResponseFailedDocument[];
  export type _Blob = Buffer|Uint8Array|Blob|string;
  export type Boolean = boolean;
  export type ChangeDetectingColumns = ColumnName[];
  export interface ClickFeedback {
    /**
     * The unique identifier of the search result that was clicked.
     */
    ResultId: ResultId;
    /**
     * The Unix timestamp of the data and time that the result was clicked.
     */
    ClickTime: Timestamp;
  }
  export type ClickFeedbackList = ClickFeedback[];
  export interface ColumnConfiguration {
    /**
     * The column that provides the document's unique identifier.
     */
    DocumentIdColumnName: ColumnName;
    /**
     * The column that contains the contents of the document.
     */
    DocumentDataColumnName: ColumnName;
    /**
     * The column that contains the title of the document.
     */
    DocumentTitleColumnName?: ColumnName;
    /**
     * An array of objects that map database column names to the corresponding fields in an index. You must first create the fields in the index using the UpdateIndex operation.
     */
    FieldMappings?: DataSourceToIndexFieldMappingList;
    /**
     * One to five columns that indicate when a document in the database has changed.
     */
    ChangeDetectingColumns: ChangeDetectingColumns;
  }
  export type ColumnName = string;
  export interface ConnectionConfiguration {
    /**
     * The name of the host for the database. Can be either a string (host.subdomain.domain.tld) or an IPv4 or IPv6 address.
     */
    DatabaseHost: DatabaseHost;
    /**
     * The port that the database uses for connections.
     */
    DatabasePort: DatabasePort;
    /**
     * The name of the database containing the document data.
     */
    DatabaseName: DatabaseName;
    /**
     * The name of the table that contains the document data.
     */
    TableName: TableName;
    /**
     * The Amazon Resource Name (ARN) of credentials stored in AWS Secrets Manager. The credentials should be a user/password pair. For more information, see Using a Database Data Source. For more information about AWS Secrets Manager, see  What Is AWS Secrets Manager  in the AWS Secrets Manager user guide.
     */
    SecretArn: SecretArn;
  }
  export type ContentType = "PDF"|"HTML"|"MS_WORD"|"PLAIN_TEXT"|"PPT"|string;
  export interface CreateDataSourceRequest {
    /**
     * A unique name for the data source. A data source name can't be changed without deleting and recreating the data source.
     */
    Name: DataSourceName;
    /**
     * The identifier of the index that should be associated with this data source.
     */
    IndexId: IndexId;
    /**
     * The type of repository that contains the data source.
     */
    Type: DataSourceType;
    /**
     * The connector configuration information that is required to access the repository.
     */
    Configuration: DataSourceConfiguration;
    /**
     * A description for the data source.
     */
    Description?: Description;
    /**
     * Sets the frequency that Amazon Kendra will check the documents in your repository and update the index. If you don't set a schedule Amazon Kendra will not periodically update the index. You can call the StartDataSourceSyncJob operation to update the index.
     */
    Schedule?: ScanSchedule;
    /**
     * The Amazon Resource Name (ARN) of a role with permission to access the data source. For more information, see IAM Roles for Amazon Kendra.
     */
    RoleArn: RoleArn;
  }
  export interface CreateDataSourceResponse {
    /**
     * A unique identifier for the data source.
     */
    Id: DataSourceId;
  }
  export interface CreateFaqRequest {
    /**
     * The identifier of the index that contains the FAQ.
     */
    IndexId: IndexId;
    /**
     * The name that should be associated with the FAQ.
     */
    Name: FaqName;
    /**
     * A description of the FAQ.
     */
    Description?: Description;
    /**
     * The S3 location of the FAQ input data.
     */
    S3Path: S3Path;
    /**
     * The Amazon Resource Name (ARN) of a role with permission to access the S3 bucket that contains the FAQs. For more information, see IAM Roles for Amazon Kendra.
     */
    RoleArn: RoleArn;
  }
  export interface CreateFaqResponse {
    /**
     * The unique identifier of the FAQ.
     */
    Id?: FaqId;
  }
  export interface CreateIndexRequest {
    /**
     * The name for the new index.
     */
    Name: IndexName;
    /**
     * An IAM role that gives Amazon Kendra permissions to access your Amazon CloudWatch logs and metrics. This is also the role used when you use the BatchPutDocument operation to index documents from an Amazon S3 bucket.
     */
    RoleArn: RoleArn;
    /**
     * The identifier of the AWS KMS customer managed key (CMK) to use to encrypt data indexed by Amazon Kendra. Amazon Kendra doesn't support asymmetric CMKs.
     */
    ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
    /**
     * A description for the index.
     */
    Description?: Description;
  }
  export interface CreateIndexResponse {
    /**
     * The unique identifier of the index. Use this identifier when you query an index, set up a data source, or index a document.
     */
    Id?: IndexId;
  }
  export interface DataSourceConfiguration {
    /**
     * Provides information to create a connector for a document repository in an Amazon S3 bucket.
     */
    S3Configuration?: S3DataSourceConfiguration;
    /**
     * Provides information necessary to create a connector for a Microsoft SharePoint site.
     */
    SharePointConfiguration?: SharePointConfiguration;
    /**
     * Provides information necessary to create a connector for a database.
     */
    DatabaseConfiguration?: DatabaseConfiguration;
  }
  export type DataSourceDateFieldFormat = string;
  export type DataSourceFieldName = string;
  export type DataSourceId = string;
  export type DataSourceInclusionsExclusionsStrings = DataSourceInclusionsExclusionsStringsMember[];
  export type DataSourceInclusionsExclusionsStringsMember = string;
  export type DataSourceName = string;
  export type DataSourceStatus = "CREATING"|"DELETING"|"FAILED"|"UPDATING"|"ACTIVE"|string;
  export interface DataSourceSummary {
    /**
     * The name of the data source.
     */
    Name?: DataSourceName;
    /**
     * The unique identifier for the data source.
     */
    Id?: DataSourceId;
    /**
     * The type of the data source.
     */
    Type?: DataSourceType;
    /**
     * The UNIX datetime that the data source was created.
     */
    CreatedAt?: Timestamp;
    /**
     * The UNIX datetime that the data source was lasted updated. 
     */
    UpdatedAt?: Timestamp;
    /**
     * The status of the data source. When the status is ATIVE the data source is ready to use.
     */
    Status?: DataSourceStatus;
  }
  export type DataSourceSummaryList = DataSourceSummary[];
  export interface DataSourceSyncJob {
    /**
     * A unique identifier for the synchronization job.
     */
    ExecutionId?: String;
    /**
     * The UNIX datetime that the synchronization job was started.
     */
    StartTime?: Timestamp;
    /**
     * The UNIX datetime that the synchronization job was completed.
     */
    EndTime?: Timestamp;
    /**
     * The execution status of the synchronization job. When the Status field is set to SUCCEEDED, the synchronization job is done. If the status code is set to FAILED, the ErrorCode and ErrorMessage fields give you the reason for the failure.
     */
    Status?: DataSourceSyncJobStatus;
    /**
     * If the Status field is set to ERROR, the ErrorMessage field contains a description of the error that caused the synchronization to fail.
     */
    ErrorMessage?: ErrorMessage;
    /**
     * If the Status field is set to FAILED, the ErrorCode field contains a the reason that the synchronization failed.
     */
    ErrorCode?: ErrorCode;
    /**
     * If the reason that the synchronization failed is due to an error with the underlying data source, this field contains a code that identifies the error.
     */
    DataSourceErrorCode?: String;
  }
  export type DataSourceSyncJobHistoryList = DataSourceSyncJob[];
  export type DataSourceSyncJobStatus = "FAILED"|"SUCCEEDED"|"SYNCING"|"INCOMPLETE"|"STOPPING"|"ABORTED"|string;
  export interface DataSourceToIndexFieldMapping {
    /**
     * The name of the column or attribute in the data source.
     */
    DataSourceFieldName: DataSourceFieldName;
    /**
     * The type of data stored in the column or attribute.
     */
    DateFieldFormat?: DataSourceDateFieldFormat;
    /**
     * The name of the field in the index.
     */
    IndexFieldName: IndexFieldName;
  }
  export type DataSourceToIndexFieldMappingList = DataSourceToIndexFieldMapping[];
  export type DataSourceType = "S3"|"SHAREPOINT"|"DATABASE"|string;
  export interface DataSourceVpcConfiguration {
    /**
     * A list of identifiers for subnets within your Amazon VPC. The subnets should be able to connect to each other in the VPC, and they should have outgoing access to the Internet through a NAT device.
     */
    SubnetIds: SubnetIdList;
    /**
     * A list of identifiers of security groups within your Amazon VPC. The security groups should enable Amazon Kendra to connect to the data source.
     */
    SecurityGroupIds: SecurityGroupIdList;
  }
  export interface DatabaseConfiguration {
    /**
     * The type of database engine that runs the database.
     */
    DatabaseEngineType: DatabaseEngineType;
    /**
     * The information necessary to connect to a database.
     */
    ConnectionConfiguration: ConnectionConfiguration;
    VpcConfiguration?: DataSourceVpcConfiguration;
    /**
     * Information about where the index should get the document information from the database.
     */
    ColumnConfiguration: ColumnConfiguration;
    /**
     * Information about the database column that provides information for user context filtering.
     */
    AclConfiguration?: AclConfiguration;
  }
  export type DatabaseEngineType = "RDS_AURORA_MYSQL"|"RDS_AURORA_POSTGRESQL"|"RDS_MYSQL"|"RDS_POSTGRESQL"|string;
  export type DatabaseHost = string;
  export type DatabaseName = string;
  export type DatabasePort = number;
  export interface DeleteFaqRequest {
    /**
     * The identifier of the FAQ to remove.
     */
    Id: FaqId;
    /**
     * The index to remove the FAQ from.
     */
    IndexId: IndexId;
  }
  export interface DeleteIndexRequest {
    /**
     * The identifier of the index to delete.
     */
    Id: IndexId;
  }
  export interface DescribeDataSourceRequest {
    /**
     * The unique identifier of the data source to describe.
     */
    Id: DataSourceId;
    /**
     * The identifier of the index that contains the data source.
     */
    IndexId: IndexId;
  }
  export interface DescribeDataSourceResponse {
    /**
     * The identifier of the data source.
     */
    Id?: DataSourceId;
    /**
     * The identifier of the index that contains the data source.
     */
    IndexId?: IndexId;
    /**
     * The name that you gave the data source when it was created.
     */
    Name?: DataSourceName;
    /**
     * The type of the data source.
     */
    Type?: DataSourceType;
    /**
     * Information that describes where the data source is located and how the data source is configured. The specific information in the description depends on the data source provider.
     */
    Configuration?: DataSourceConfiguration;
    /**
     * The Unix timestamp of when the data source was created.
     */
    CreatedAt?: Timestamp;
    /**
     * The Unix timestamp of when the data source was last updated.
     */
    UpdatedAt?: Timestamp;
    /**
     * The description of the data source.
     */
    Description?: Description;
    /**
     * The current status of the data source. When the status is ACTIVE the data source is ready to use. When the status is FAILED, the ErrorMessage field contains the reason that the data source failed.
     */
    Status?: DataSourceStatus;
    /**
     * The schedule that Amazon Kendra will update the data source.
     */
    Schedule?: ScanSchedule;
    /**
     * The Amazon Resource Name (ARN) of the role that enables the data source to access its resources.
     */
    RoleArn?: RoleArn;
    /**
     * When the Status field value is FAILED, the ErrorMessage field contains a description of the error that caused the data source to fail.
     */
    ErrorMessage?: ErrorMessage;
  }
  export interface DescribeFaqRequest {
    /**
     * The unique identifier of the FAQ.
     */
    Id: FaqId;
    /**
     * The identifier of the index that contains the FAQ.
     */
    IndexId: IndexId;
  }
  export interface DescribeFaqResponse {
    /**
     * The identifier of the FAQ.
     */
    Id?: FaqId;
    /**
     * The identifier of the index that contains the FAQ.
     */
    IndexId?: IndexId;
    /**
     * The name that you gave the FAQ when it was created.
     */
    Name?: FaqName;
    /**
     * The description of the FAQ that you provided when it was created.
     */
    Description?: Description;
    /**
     * The date and time that the FAQ was created.
     */
    CreatedAt?: Timestamp;
    /**
     * The date and time that the FAQ was last updated.
     */
    UpdatedAt?: Timestamp;
    S3Path?: S3Path;
    /**
     * The status of the FAQ. It is ready to use when the status is ACTIVE.
     */
    Status?: FaqStatus;
    /**
     * The Amazon Resource Name (ARN) of the role that provides access to the S3 bucket containing the input files for the FAQ.
     */
    RoleArn?: RoleArn;
    /**
     * If the Status field is FAILED, the ErrorMessage field contains the reason why the FAQ failed.
     */
    ErrorMessage?: ErrorMessage;
  }
  export interface DescribeIndexRequest {
    /**
     * The name of the index to describe.
     */
    Id: IndexId;
  }
  export interface DescribeIndexResponse {
    /**
     * The name of the index.
     */
    Name?: IndexName;
    /**
     * the name of the index.
     */
    Id?: IndexId;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that gives Amazon Kendra permission to write to your Amazon Cloudwatch logs.
     */
    RoleArn?: RoleArn;
    /**
     * The identifier of the AWS KMS customer master key (CMK) used to encrypt your data. Amazon Kendra doesn't support asymmetric CMKs.
     */
    ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
    /**
     * The current status of the index. When the value is ACTIVE, the index is ready for use. If the Status field value is FAILED, the ErrorMessage field contains a message that explains why.
     */
    Status?: IndexStatus;
    /**
     * The description of the index.
     */
    Description?: Description;
    /**
     * The Unix datetime that the index was created.
     */
    CreatedAt?: Timestamp;
    /**
     * The Unix datetime that the index was last updated.
     */
    UpdatedAt?: Timestamp;
    /**
     * Configuration settings for any metadata applied to the documents in the index.
     */
    DocumentMetadataConfigurations?: DocumentMetadataConfigurationList;
    /**
     * Provides information about the number of FAQ questions and answers and the number of text documents indexed.
     */
    IndexStatistics?: IndexStatistics;
    /**
     * When th eStatus field value is FAILED, the ErrorMessage field contains a message that explains why.
     */
    ErrorMessage?: ErrorMessage;
  }
  export type Description = string;
  export interface Document {
    /**
     * A unique identifier of the document in the index.
     */
    Id: DocumentId;
    /**
     * The title of the document.
     */
    Title?: Title;
    /**
     * The contents of the document as a base-64 encoded string.
     */
    Blob?: _Blob;
    S3Path?: S3Path;
    /**
     * Custom attributes to apply to the document. Use the custom attributes to provide additional information for searching, to provide facets for refining searches, and to provide additional information in the query response.
     */
    Attributes?: DocumentAttributeList;
    /**
     * Information to use for user context filtering.
     */
    AccessControlList?: PrincipalList;
    /**
     * The file type of the document in the Blob field.
     */
    ContentType?: ContentType;
  }
  export interface DocumentAttribute {
    /**
     * The identifier for the attribute.
     */
    Key: DocumentAttributeKey;
    /**
     * The value of the attribute.
     */
    Value: DocumentAttributeValue;
  }
  export type DocumentAttributeKey = string;
  export type DocumentAttributeKeyList = DocumentAttributeKey[];
  export type DocumentAttributeList = DocumentAttribute[];
  export type DocumentAttributeStringListValue = String[];
  export type DocumentAttributeStringValue = string;
  export interface DocumentAttributeValue {
    /**
     * A string, such as "department".
     */
    StringValue?: DocumentAttributeStringValue;
    /**
     * A list of strings. 
     */
    StringListValue?: DocumentAttributeStringListValue;
    /**
     * A long integer value.
     */
    LongValue?: Long;
    /**
     * A date value expressed as seconds from the Unix epoch.
     */
    DateValue?: Timestamp;
  }
  export interface DocumentAttributeValueCountPair {
    /**
     * The value of the attribute. For example, "HR."
     */
    DocumentAttributeValue?: DocumentAttributeValue;
    /**
     * The number of documents in the response that have the attribute value for the key.
     */
    Count?: Integer;
  }
  export type DocumentAttributeValueCountPairList = DocumentAttributeValueCountPair[];
  export type DocumentAttributeValueType = "STRING_VALUE"|"STRING_LIST_VALUE"|"LONG_VALUE"|"DATE_VALUE"|string;
  export type DocumentId = string;
  export type DocumentIdList = DocumentId[];
  export type DocumentList = Document[];
  export type DocumentMetadataBoolean = boolean;
  export interface DocumentMetadataConfiguration {
    /**
     * The name of the index field.
     */
    Name: DocumentMetadataConfigurationName;
    /**
     * The data type of the index field. 
     */
    Type: DocumentAttributeValueType;
    /**
     * Provides manual tuning parameters to determine how the field affects the search results.
     */
    Relevance?: Relevance;
    /**
     * Provides information about how the field is used during a search.
     */
    Search?: Search;
  }
  export type DocumentMetadataConfigurationList = DocumentMetadataConfiguration[];
  export type DocumentMetadataConfigurationName = string;
  export interface DocumentsMetadataConfiguration {
    /**
     * A prefix used to filter metadata configuration files in the AWS S3 bucket. The S3 bucket might contain multiple metadata files. Use S3Prefix to include only the desired metadata files.
     */
    S3Prefix?: S3ObjectKey;
  }
  export type Duration = string;
  export type ErrorCode = "InternalError"|"InvalidRequest"|string;
  export type ErrorMessage = string;
  export interface Facet {
    /**
     * The unique key for the document attribute.
     */
    DocumentAttributeKey?: DocumentAttributeKey;
  }
  export type FacetList = Facet[];
  export interface FacetResult {
    /**
     * The key for the facet values. This is the same as the DocumentAttributeKey provided in the query.
     */
    DocumentAttributeKey?: DocumentAttributeKey;
    /**
     * An array of key/value pairs, where the key is the value of the attribute and the count is the number of documents that share the key value.
     */
    DocumentAttributeValueCountPairs?: DocumentAttributeValueCountPairList;
  }
  export type FacetResultList = FacetResult[];
  export type FaqId = string;
  export type FaqName = string;
  export interface FaqStatistics {
    /**
     * The total number of FAQ questions and answers contained in the index.
     */
    IndexedQuestionAnswersCount: IndexedQuestionAnswersCount;
  }
  export type FaqStatus = "CREATING"|"UPDATING"|"ACTIVE"|"DELETING"|"FAILED"|string;
  export interface FaqSummary {
    /**
     * The unique identifier of the FAQ.
     */
    Id?: FaqId;
    /**
     * The name that you assigned the FAQ when you created or updated the FAQ.
     */
    Name?: FaqName;
    /**
     * The current status of the FAQ. When the status is ACTIVE the FAQ is ready for use.
     */
    Status?: FaqStatus;
    /**
     * The UNIX datetime that the FAQ was added to the index.
     */
    CreatedAt?: Timestamp;
    /**
     * The UNIX datetime that the FAQ was last updated.
     */
    UpdatedAt?: Timestamp;
  }
  export type FaqSummaryItems = FaqSummary[];
  export interface Highlight {
    /**
     * The zero-based location in the response string where the highlight starts.
     */
    BeginOffset: Integer;
    /**
     * The zero-based location in the response string where the highlight ends.
     */
    EndOffset: Integer;
    /**
     * Indicates whether the response is the best response. True if this is the best response; otherwise, false.
     */
    TopAnswer?: Boolean;
  }
  export type HighlightList = Highlight[];
  export type Importance = number;
  export interface IndexConfigurationSummary {
    /**
     * The name of the index.
     */
    Name?: IndexName;
    /**
     * A unique identifier for the index. Use this to identify the index when you are using operations such as Query, DescribeIndex, UpdateIndex, and DeleteIndex.
     */
    Id?: IndexId;
    /**
     * The Unix timestamp when the index was created.
     */
    CreatedAt: Timestamp;
    /**
     * The Unix timestamp when the index was last updated by the UpdateIndex operation.
     */
    UpdatedAt: Timestamp;
    /**
     * The current status of the index. When the status is ACTIVE, the index is ready to search.
     */
    Status: IndexStatus;
  }
  export type IndexConfigurationSummaryList = IndexConfigurationSummary[];
  export type IndexFieldName = string;
  export type IndexId = string;
  export type IndexName = string;
  export interface IndexStatistics {
    /**
     * The number of question and answer topics in the index.
     */
    FaqStatistics: FaqStatistics;
    /**
     * The number of text documents indexed.
     */
    TextDocumentStatistics: TextDocumentStatistics;
  }
  export type IndexStatus = "CREATING"|"ACTIVE"|"DELETING"|"FAILED"|"SYSTEM_UPDATING"|string;
  export type IndexedQuestionAnswersCount = number;
  export type IndexedTextDocumentsCount = number;
  export type Integer = number;
  export type KmsKeyId = string;
  export interface ListDataSourceSyncJobsRequest {
    /**
     * The identifier of the data source.
     */
    Id: DataSourceId;
    /**
     * The identifier of the index that contains the data source.
     */
    IndexId: IndexId;
    /**
     * If the result of the previous request to GetDataSourceSyncJobHistory was truncated, include the NextToken to fetch the next set of jobs.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of synchronization jobs to return in the response. If there are fewer results in the list, this response contains only the actual results.
     */
    MaxResults?: MaxResultsIntegerForListDataSourceSyncJobsRequest;
    /**
     * When specified, the synchronization jobs returned in the list are limited to jobs between the specified dates. 
     */
    StartTimeFilter?: TimeRange;
    /**
     * When specified, only returns synchronization jobs with the Status field equal to the specified status.
     */
    StatusFilter?: DataSourceSyncJobStatus;
  }
  export interface ListDataSourceSyncJobsResponse {
    /**
     * A history of synchronization jobs for the data source.
     */
    History?: DataSourceSyncJobHistoryList;
    /**
     * The GetDataSourceSyncJobHistory operation returns a page of vocabularies at a time. The maximum size of the page is set by the MaxResults parameter. If there are more jobs in the list than the page size, Amazon Kendra returns the NextPage token. Include the token in the next request to the GetDataSourceSyncJobHistory operation to return in the next page of jobs.
     */
    NextToken?: NextToken;
  }
  export interface ListDataSourcesRequest {
    /**
     * The identifier of the index that contains the data source.
     */
    IndexId: IndexId;
    /**
     * If the previous response was incomplete (because there is more data to retrieve), Amazon Kendra returns a pagination token in the response. You can use this pagination token to retrieve the next set of data sources (DataSourceSummaryItems). 
     */
    NextToken?: NextToken;
    /**
     * The maximum number of data sources to return.
     */
    MaxResults?: MaxResultsIntegerForListDataSourcesRequest;
  }
  export interface ListDataSourcesResponse {
    /**
     * An array of summary information for one or more data sources.
     */
    SummaryItems?: DataSourceSummaryList;
    /**
     * If the response is truncated, Amazon Kendra returns this token that you can use in the subsequent request to retrieve the next set of data sources. 
     */
    NextToken?: NextToken;
  }
  export interface ListFaqsRequest {
    /**
     * The index that contains the FAQ lists.
     */
    IndexId: IndexId;
    /**
     * If the result of the previous request to ListFaqs was truncated, include the NextToken to fetch the next set of FAQs.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of FAQs to return in the response. If there are fewer results in the list, this response contains only the actual results.
     */
    MaxResults?: MaxResultsIntegerForListFaqsRequest;
  }
  export interface ListFaqsResponse {
    /**
     * The ListFaqs operation returns a page of FAQs at a time. The maximum size of the page is set by the MaxResults parameter. If there are more jobs in the list than the page size, Amazon Kendra returns the NextPage token. Include the token in the next request to the ListFaqs operation to return the next page of FAQs.
     */
    NextToken?: NextToken;
    /**
     * information about the FAQs associated with the specified index.
     */
    FaqSummaryItems?: FaqSummaryItems;
  }
  export interface ListIndicesRequest {
    /**
     * If the previous response was incomplete (because there is more data to retrieve), Amazon Kendra returns a pagination token in the response. You can use this pagination token to retrieve the next set of indexes (DataSourceSummaryItems). 
     */
    NextToken?: NextToken;
    /**
     * The maximum number of data sources to return.
     */
    MaxResults?: MaxResultsIntegerForListIndicesRequest;
  }
  export interface ListIndicesResponse {
    /**
     * An array of summary information for one or more indexes.
     */
    IndexConfigurationSummaryItems?: IndexConfigurationSummaryList;
    /**
     * If the response is truncated, Amazon Kendra returns this token that you can use in the subsequent request to retrieve the next set of indexes.
     */
    NextToken?: NextToken;
  }
  export type Long = number;
  export type MaxResultsIntegerForListDataSourceSyncJobsRequest = number;
  export type MaxResultsIntegerForListDataSourcesRequest = number;
  export type MaxResultsIntegerForListFaqsRequest = number;
  export type MaxResultsIntegerForListIndicesRequest = number;
  export type NextToken = string;
  export type Order = "ASCENDING"|"DESCENDING"|string;
  export interface Principal {
    /**
     * The name of the user or group.
     */
    Name: PrincipalName;
    /**
     * The type of principal.
     */
    Type: PrincipalType;
    /**
     * Whether to allow or deny access to the principal.
     */
    Access: ReadAccessType;
  }
  export type PrincipalList = Principal[];
  export type PrincipalName = string;
  export type PrincipalType = "USER"|"GROUP"|string;
  export type QueryId = string;
  export interface QueryRequest {
    /**
     * The unique identifier of the index to search. The identifier is returned in the response from the operation.
     */
    IndexId: IndexId;
    /**
     * The text to search for.
     */
    QueryText: QueryText;
    /**
     * Enables filtered searches based on document attributes. You can only provide one attribute filter; however, the AndAllFilters, NotFilter, and OrAllFilters parameters contain a list of other filters. The AttributeFilter parameter enables you to create a set of filtering rules that a document must satisfy to be included in the query results.
     */
    AttributeFilter?: AttributeFilter;
    /**
     * An array of documents attributes. Amazon Kendra returns a count for each attribute key specified. You can use this information to help narrow the search for your user.
     */
    Facets?: FacetList;
    /**
     * An array of document attributes to include in the response. No other document attributes are included in the response. By default all document attributes are included in the response. 
     */
    RequestedDocumentAttributes?: DocumentAttributeKeyList;
    /**
     * Sets the type of query. Only results for the specified query type are returned.
     */
    QueryResultTypeFilter?: QueryResultType;
    /**
     * Query results are returned in pages the size of the PageSize parameter. By default, Amazon Kendra returns the first page of results. Use this parameter to get result pages after the first one.
     */
    PageNumber?: Integer;
    /**
     * Sets the number of results that are returned in each page of results. The default page size is 100.
     */
    PageSize?: Integer;
  }
  export interface QueryResult {
    /**
     * The unique identifier for the search. You use QueryId to identify the search when using the feedback API.
     */
    QueryId?: QueryId;
    /**
     * The results of the search.
     */
    ResultItems?: QueryResultItemList;
    /**
     * Contains the facet results. A FacetResult contains the counts for each attribute key that was specified in the Facets input parameter.
     */
    FacetResults?: FacetResultList;
    /**
     * The number of items returned by the search. Use this to determine when you have requested the last set of results.
     */
    TotalNumberOfResults?: Integer;
  }
  export interface QueryResultItem {
    /**
     * The unique identifier for the query result.
     */
    Id?: ResultId;
    /**
     * The type of document. 
     */
    Type?: QueryResultType;
    /**
     * 
     */
    AdditionalAttributes?: AdditionalResultAttributeList;
    /**
     * The unique identifier for the document.
     */
    DocumentId?: DocumentId;
    /**
     * The title of the document. Contains the text of the title and information for highlighting the relevant terms in the title.
     */
    DocumentTitle?: TextWithHighlights;
    /**
     * An extract of the text in the document. Contains information about highlighting the relevant terms in the excerpt.
     */
    DocumentExcerpt?: TextWithHighlights;
    /**
     * The URI of the original location of the document.
     */
    DocumentURI?: Url;
    /**
     * An array of document attributes for the document that the query result maps to. For example, the document author (Author) or the source URI (SourceUri) of the document.
     */
    DocumentAttributes?: DocumentAttributeList;
  }
  export type QueryResultItemList = QueryResultItem[];
  export type QueryResultType = "DOCUMENT"|"QUESTION_ANSWER"|"ANSWER"|string;
  export type QueryText = string;
  export type ReadAccessType = "ALLOW"|"DENY"|string;
  export interface Relevance {
    /**
     * Indicates that this field determines how "fresh" a document is. For example, if document 1 was created on November 5, and document 2 was created on October 31, document 1 is "fresher" than document 2. You can only set the Freshness field on one DATE type field. Only applies to DATE fields.
     */
    Freshness?: DocumentMetadataBoolean;
    /**
     * The relative importance of the field in the search. Larger numbers provide more of a boost than smaller numbers.
     */
    Importance?: Importance;
    /**
     * Specifies the time period that the boost applies to. For example, to make the boost apply to documents with the field value within the last month, you would use "2628000s". Once the field value is beyond the specified range, the effect of the boost drops off. The higher the importance, the faster the effect drops off. If you don't specify a value, the default is 3 months. The value of the field is a numeric string followed by the character "s", for example "86400s" for one day, or "604800s" for one week.  Only applies to DATE fields.
     */
    Duration?: Duration;
    /**
     * Determines how values should be interpreted. When the RankOrder field is ASCENDING, higher numbers are better. For example, a document with a rating score of 10 is higher ranking than a document with a rating score of 1. When the RankOrder field is DESCENDING, lower numbers are better. For example, in a task tracking application, a priority 1 task is more important than a priority 5 task. Only applies to LONG and DOUBLE fields.
     */
    RankOrder?: Order;
    /**
     * A list of values that should be given a different boost when they appear in the result list. For example, if you are boosting a field called "department," query terms that match the department field are boosted in the result. However, you can add entries from the department field to boost documents with those values higher.  For example, you can add entries to the map with names of departments. If you add "HR",5 and "Legal",3 those departments are given special attention when they appear in the metadata of a document. When those terms appear they are given the specified importance instead of the regular importance for the boost.
     */
    ValueImportanceMap?: ValueImportanceMap;
  }
  export interface RelevanceFeedback {
    /**
     * The unique identifier of the search result that the user provided relevance feedback for.
     */
    ResultId: ResultId;
    /**
     * Whether to document was relevant or not relevant to the search.
     */
    RelevanceValue: RelevanceType;
  }
  export type RelevanceFeedbackList = RelevanceFeedback[];
  export type RelevanceType = "RELEVANT"|"NOT_RELEVANT"|string;
  export type ResultId = string;
  export type RoleArn = string;
  export type S3BucketName = string;
  export interface S3DataSourceConfiguration {
    /**
     * The name of the bucket that contains the documents.
     */
    BucketName: S3BucketName;
    /**
     * A list of S3 prefixes for the documents that should be included in the index.
     */
    InclusionPrefixes?: DataSourceInclusionsExclusionsStrings;
    /**
     * A list of glob patterns for documents that should not be indexed. If a document that matches an inclusion prefix also matches an exclusion pattern, the document is not indexed. For more information about glob patterns, see glob (programming) in Wikipedia.
     */
    ExclusionPatterns?: DataSourceInclusionsExclusionsStrings;
    DocumentsMetadataConfiguration?: DocumentsMetadataConfiguration;
    /**
     * Provides the path to the S3 bucket that contains the user context filtering files for the data source.
     */
    AccessControlListConfiguration?: AccessControlListConfiguration;
  }
  export type S3ObjectKey = string;
  export interface S3Path {
    /**
     * The name of the S3 bucket that contains the file.
     */
    Bucket: S3BucketName;
    /**
     * The name of the file.
     */
    Key: S3ObjectKey;
  }
  export type ScanSchedule = string;
  export interface Search {
    /**
     * Indicates that the field can be used to create search facets, a count of results for each value in the field. The default is false .
     */
    Facetable?: Boolean;
    /**
     * Determines whether the field is used in the search. If the Searchable field is true, you can use relevance tuning to manually tune how Amazon Kendra weights the field in the search. The default is true for string fields and false for number and date fields.
     */
    Searchable?: Boolean;
    /**
     * Determines whether the field is returned in the query response. The default is true.
     */
    Displayable?: Boolean;
  }
  export type SecretArn = string;
  export type SecurityGroupIdList = VpcSecurityGroupId[];
  export interface ServerSideEncryptionConfiguration {
    /**
     * The identifier of the AWS KMS customer master key (CMK). Amazon Kendra doesn't support asymmetric CMKs.
     */
    KmsKeyId?: KmsKeyId;
  }
  export interface SharePointConfiguration {
    /**
     * The version of Microsoft SharePoint that you are using as a data source.
     */
    SharePointVersion: SharePointVersion;
    /**
     * The URLs of the Microsoft SharePoint site that contains the documents that should be indexed.
     */
    Urls: SharePointUrlList;
    /**
     * The Amazon Resource Name (ARN) of credentials stored in AWS Secrets Manager. The credentials should be a user/password pair. For more information, see Using a Microsoft SharePoint Data Source. For more information about AWS Secrets Manager, see  What Is AWS Secrets Manager  in the AWS Secrets Manager user guide.
     */
    SecretArn: SecretArn;
    /**
     *  TRUE to include attachments to documents stored in your Microsoft SharePoint site in the index; otherwise, FALSE.
     */
    CrawlAttachments?: Boolean;
    VpcConfiguration?: DataSourceVpcConfiguration;
    /**
     * A list of DataSourceToIndexFieldMapping objects that map Microsoft SharePoint attributes to custom fields in the Amazon Kendra index. You must first create the index fields using the operation before you map SharePoint attributes. For more information, see Mapping Data Source Fields.
     */
    FieldMappings?: DataSourceToIndexFieldMappingList;
    /**
     * The Microsoft SharePoint attribute field that contains the title of the document.
     */
    DocumentTitleFieldName?: DataSourceFieldName;
  }
  export type SharePointUrlList = Url[];
  export type SharePointVersion = "SHAREPOINT_ONLINE"|string;
  export interface StartDataSourceSyncJobRequest {
    /**
     * The identifier of the data source to synchronize.
     */
    Id: DataSourceId;
    /**
     * The identifier of the index that contains the data source.
     */
    IndexId: IndexId;
  }
  export interface StartDataSourceSyncJobResponse {
    /**
     * Identifies a particular synchronization job.
     */
    ExecutionId?: String;
  }
  export interface StopDataSourceSyncJobRequest {
    /**
     * The identifier of the data source for which to stop the synchronization jobs.
     */
    Id: DataSourceId;
    /**
     * The identifier of the index that contains the data source.
     */
    IndexId: IndexId;
  }
  export type String = string;
  export interface SubmitFeedbackRequest {
    /**
     * The identifier of the index that was queried.
     */
    IndexId: IndexId;
    /**
     * The identifier of the specific query for which you are submitting feedback. The query ID is returned in the response to the operation.
     */
    QueryId: QueryId;
    /**
     * Tells Amazon Kendra that a particular search result link was chosen by the user. 
     */
    ClickFeedbackItems?: ClickFeedbackList;
    /**
     * Provides Amazon Kendra with relevant or not relevant feedback for whether a particular item was relevant to the search.
     */
    RelevanceFeedbackItems?: RelevanceFeedbackList;
  }
  export type SubnetId = string;
  export type SubnetIdList = SubnetId[];
  export type TableName = string;
  export interface TextDocumentStatistics {
    /**
     * The number of text documents indexed.
     */
    IndexedTextDocumentsCount: IndexedTextDocumentsCount;
  }
  export interface TextWithHighlights {
    /**
     * The text to display to the user.
     */
    Text?: String;
    /**
     * The beginning and end of the text that should be highlighted.
     */
    Highlights?: HighlightList;
  }
  export interface TimeRange {
    /**
     * The UNIX datetime of the beginning of the time range.
     */
    StartTime?: Timestamp;
    /**
     * The UNIX datetime of the end of the time range.
     */
    EndTime?: Timestamp;
  }
  export type Timestamp = Date;
  export type Title = string;
  export interface UpdateDataSourceRequest {
    /**
     * The unique identifier of the data source to update.
     */
    Id: DataSourceId;
    /**
     * The name of the data source to update. The name of the data source can't be updated. To rename a data source you must delete the data source and re-create it.
     */
    Name?: DataSourceName;
    /**
     * The identifier of the index that contains the data source to update.
     */
    IndexId: IndexId;
    Configuration?: DataSourceConfiguration;
    /**
     * The new description for the data source.
     */
    Description?: Description;
    /**
     * The new update schedule for the data source.
     */
    Schedule?: ScanSchedule;
    /**
     * The Amazon Resource Name (ARN) of the new role to use when the data source is accessing resources on your behalf.
     */
    RoleArn?: RoleArn;
  }
  export interface UpdateIndexRequest {
    /**
     * The identifier of the index to update.
     */
    Id: IndexId;
    /**
     * The name of the index to update.
     */
    Name?: IndexName;
    /**
     * A new IAM role that gives Amazon Kendra permission to access your Amazon CloudWatch logs.
     */
    RoleArn?: RoleArn;
    /**
     * A new description for the index.
     */
    Description?: Description;
    /**
     * The document metadata to update. 
     */
    DocumentMetadataConfigurationUpdates?: DocumentMetadataConfigurationList;
  }
  export type Url = string;
  export type ValueImportanceMap = {[key: string]: Importance};
  export type ValueImportanceMapKey = string;
  export type VpcSecurityGroupId = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2019-02-03"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Kendra client.
   */
  export import Types = Kendra;
}
export = Kendra;
