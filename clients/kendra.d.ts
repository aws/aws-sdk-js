import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
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
   * Creates a data source that you use to with an Amazon Kendra index.  You specify a name, data source connector type and description for your data source. You also specify configuration information such as document metadata (author, source URI, and so on) and user context information.  CreateDataSource is a synchronous operation. The operation returns 200 if the data source was successfully created. Otherwise, an exception is raised.
   */
  createDataSource(params: Kendra.Types.CreateDataSourceRequest, callback?: (err: AWSError, data: Kendra.Types.CreateDataSourceResponse) => void): Request<Kendra.Types.CreateDataSourceResponse, AWSError>;
  /**
   * Creates a data source that you use to with an Amazon Kendra index.  You specify a name, data source connector type and description for your data source. You also specify configuration information such as document metadata (author, source URI, and so on) and user context information.  CreateDataSource is a synchronous operation. The operation returns 200 if the data source was successfully created. Otherwise, an exception is raised.
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
   * Deletes an Amazon Kendra data source. An exception is not thrown if the data source is already being deleted. While the data source is being deleted, the Status field returned by a call to the operation is set to DELETING. For more information, see Deleting Data Sources.
   */
  deleteDataSource(params: Kendra.Types.DeleteDataSourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an Amazon Kendra data source. An exception is not thrown if the data source is already being deleted. While the data source is being deleted, the Status field returned by a call to the operation is set to DELETING. For more information, see Deleting Data Sources.
   */
  deleteDataSource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
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
   * Gets a list of tags associated with a specified resource. Indexes, FAQs, and data sources can have tags associated with them.
   */
  listTagsForResource(params: Kendra.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: Kendra.Types.ListTagsForResourceResponse) => void): Request<Kendra.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Gets a list of tags associated with a specified resource. Indexes, FAQs, and data sources can have tags associated with them.
   */
  listTagsForResource(callback?: (err: AWSError, data: Kendra.Types.ListTagsForResourceResponse) => void): Request<Kendra.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Searches an active index. Use this API to search your documents using query. The Query operation enables to do faceted search and to filter results based on document attributes. It also enables you to provide user context that Amazon Kendra uses to enforce document access control in the search results.  Amazon Kendra searches your index for text content and question and answer (FAQ) content. By default the response contains three types of results.   Relevant passages   Matching FAQs   Relevant documents   You can specify that the query return only one type of result using the QueryResultTypeConfig parameter. Each query returns the 100 most relevant results. 
   */
  query(params: Kendra.Types.QueryRequest, callback?: (err: AWSError, data: Kendra.Types.QueryResult) => void): Request<Kendra.Types.QueryResult, AWSError>;
  /**
   * Searches an active index. Use this API to search your documents using query. The Query operation enables to do faceted search and to filter results based on document attributes. It also enables you to provide user context that Amazon Kendra uses to enforce document access control in the search results.  Amazon Kendra searches your index for text content and question and answer (FAQ) content. By default the response contains three types of results.   Relevant passages   Matching FAQs   Relevant documents   You can specify that the query return only one type of result using the QueryResultTypeConfig parameter. Each query returns the 100 most relevant results. 
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
   * Adds the specified tag to the specified index, FAQ, or data source resource. If the tag already exists, the existing value is replaced with the new value.
   */
  tagResource(params: Kendra.Types.TagResourceRequest, callback?: (err: AWSError, data: Kendra.Types.TagResourceResponse) => void): Request<Kendra.Types.TagResourceResponse, AWSError>;
  /**
   * Adds the specified tag to the specified index, FAQ, or data source resource. If the tag already exists, the existing value is replaced with the new value.
   */
  tagResource(callback?: (err: AWSError, data: Kendra.Types.TagResourceResponse) => void): Request<Kendra.Types.TagResourceResponse, AWSError>;
  /**
   * Removes a tag from an index, FAQ, or a data source.
   */
  untagResource(params: Kendra.Types.UntagResourceRequest, callback?: (err: AWSError, data: Kendra.Types.UntagResourceResponse) => void): Request<Kendra.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes a tag from an index, FAQ, or a data source.
   */
  untagResource(callback?: (err: AWSError, data: Kendra.Types.UntagResourceResponse) => void): Request<Kendra.Types.UntagResourceResponse, AWSError>;
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
     * The key that identifies the attribute.
     */
    Key: String;
    /**
     * The data type of the Value property.
     */
    ValueType: AdditionalResultAttributeValueType;
    /**
     * An object that contains the attribute value.
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
  export type AmazonResourceName = string;
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
     * Returns true when a document contains all of the specified document attributes. This filter is only applicable to StringListValue metadata.
     */
    ContainsAll?: DocumentAttribute;
    /**
     * Returns true when a document contains any of the specified document attributes. This filter is only applicable to StringListValue metadata.
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
    DataSourceSyncJobMetricTarget?: DataSourceSyncJobMetricTarget;
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
     * One or more documents to add to the index.  Documents have the following file size limits.   5 MB total size for inline documents   50 MB total size for files from an S3 bucket   5 MB extracted text for any file   For more information about file size and transaction per second quotas, see Quotas.
     */
    Documents: DocumentList;
  }
  export interface BatchPutDocumentResponse {
    /**
     * A list of documents that were not added to the index because the document failed a validation check. Each document contains an error message that indicates why the document couldn't be added to the index. If there was an error adding a document to an index the error is reported in your AWS CloudWatch log. For more information, see Monitoring Amazon Kendra with Amazon CloudWatch Logs 
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
  export interface CapacityUnitsConfiguration {
    /**
     * The amount of extra storage capacity for an index. Each capacity unit provides 150 Gb of storage space or 500,000 documents, whichever is reached first.
     */
    StorageCapacityUnits: StorageCapacityUnit;
    /**
     * The amount of extra query capacity for an index. Each capacity unit provides 0.5 queries per second and 40,000 queries per day.
     */
    QueryCapacityUnits: QueryCapacityUnit;
  }
  export type ChangeDetectingColumns = ColumnName[];
  export type ClaimRegex = string;
  export interface ClickFeedback {
    /**
     * The unique identifier of the search result that was clicked.
     */
    ResultId: ResultId;
    /**
     * The Unix timestamp of the date and time that the result was clicked.
     */
    ClickTime: Timestamp;
  }
  export type ClickFeedbackList = ClickFeedback[];
  export type ClientTokenName = string;
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
  export interface ConfluenceAttachmentConfiguration {
    /**
     * Indicates whether Amazon Kendra indexes attachments to the pages and blogs in the Confluence data source. 
     */
    CrawlAttachments?: Boolean;
    /**
     * Defines how attachment metadata fields should be mapped to index fields. Before you can map a field, you must first create an index field with a matching type using the console or the UpdateIndex operation. If you specify the AttachentFieldMappings parameter, you must specify at least one field mapping.
     */
    AttachmentFieldMappings?: ConfluenceAttachmentFieldMappingsList;
  }
  export type ConfluenceAttachmentFieldMappingsList = ConfluenceAttachmentToIndexFieldMapping[];
  export type ConfluenceAttachmentFieldName = "AUTHOR"|"CONTENT_TYPE"|"CREATED_DATE"|"DISPLAY_URL"|"FILE_SIZE"|"ITEM_TYPE"|"PARENT_ID"|"SPACE_KEY"|"SPACE_NAME"|"URL"|"VERSION"|string;
  export interface ConfluenceAttachmentToIndexFieldMapping {
    /**
     * The name of the field in the data source.  You must first create the index field using the operation. 
     */
    DataSourceFieldName?: ConfluenceAttachmentFieldName;
    /**
     * The format for date fields in the data source. If the field specified in DataSourceFieldName is a date field you must specify the date format. If the field is not a date field, an exception is thrown.
     */
    DateFieldFormat?: DataSourceDateFieldFormat;
    /**
     * The name of the index field to map to the Confluence data source field. The index field type must match the Confluence field type.
     */
    IndexFieldName?: IndexFieldName;
  }
  export interface ConfluenceBlogConfiguration {
    /**
     * Defines how blog metadata fields should be mapped to index fields. Before you can map a field, you must first create an index field with a matching type using the console or the UpdateIndex operation. If you specify the BlogFieldMappings parameter, you must specify at least one field mapping.
     */
    BlogFieldMappings?: ConfluenceBlogFieldMappingsList;
  }
  export type ConfluenceBlogFieldMappingsList = ConfluenceBlogToIndexFieldMapping[];
  export type ConfluenceBlogFieldName = "AUTHOR"|"DISPLAY_URL"|"ITEM_TYPE"|"LABELS"|"PUBLISH_DATE"|"SPACE_KEY"|"SPACE_NAME"|"URL"|"VERSION"|string;
  export interface ConfluenceBlogToIndexFieldMapping {
    /**
     * The name of the field in the data source. 
     */
    DataSourceFieldName?: ConfluenceBlogFieldName;
    /**
     * The format for date fields in the data source. If the field specified in DataSourceFieldName is a date field you must specify the date format. If the field is not a date field, an exception is thrown.
     */
    DateFieldFormat?: DataSourceDateFieldFormat;
    /**
     * The name of the index field to map to the Confluence data source field. The index field type must match the Confluence field type.
     */
    IndexFieldName?: IndexFieldName;
  }
  export interface ConfluenceConfiguration {
    /**
     * The URL of your Confluence instance. Use the full URL of the server. For example, https://server.example.com:port/. You can also use an IP address, for example, https://192.168.1.113/.
     */
    ServerUrl: Url;
    /**
     * The Amazon Resource Name (ARN) of an AWS Secrets Manager secret that contains the key/value pairs required to connect to your Confluence server. The secret must contain a JSON structure with the following keys:   username - The user name or email address of a user with administrative privileges for the Confluence server.   password - The password associated with the user logging in to the Confluence server.  
     */
    SecretArn: SecretArn;
    /**
     * Specifies the version of the Confluence installation that you are connecting to.
     */
    Version: ConfluenceVersion;
    /**
     * Specifies configuration information for indexing Confluence spaces.
     */
    SpaceConfiguration?: ConfluenceSpaceConfiguration;
    /**
     * Specifies configuration information for indexing Confluence pages.
     */
    PageConfiguration?: ConfluencePageConfiguration;
    /**
     *  Specifies configuration information for indexing Confluence blogs.
     */
    BlogConfiguration?: ConfluenceBlogConfiguration;
    /**
     * Specifies configuration information for indexing attachments to Confluence blogs and pages.
     */
    AttachmentConfiguration?: ConfluenceAttachmentConfiguration;
    /**
     * Specifies the information for connecting to an Amazon VPC.
     */
    VpcConfiguration?: DataSourceVpcConfiguration;
    /**
     * A list of regular expression patterns that apply to a URL on the Confluence server. An inclusion pattern can apply to a blog post, a page, a space, or an attachment. Items that match the patterns are included in the index. Items that don't match the pattern are excluded from the index. If an item matches both an inclusion pattern and an exclusion pattern, the item isn't included in the index.
     */
    InclusionPatterns?: DataSourceInclusionsExclusionsStrings;
    /**
     * A list of regular expression patterns that apply to a URL on the Confluence server. An exclusion pattern can apply to a blog post, a page, a space, or an attachment. Items that match the pattern are excluded from the index. Items that don't match the pattern are included in the index. If a item matches both an exclusion pattern and an inclusion pattern, the item isn't included in the index.
     */
    ExclusionPatterns?: DataSourceInclusionsExclusionsStrings;
  }
  export interface ConfluencePageConfiguration {
    /**
     * Defines how page metadata fields should be mapped to index fields. Before you can map a field, you must first create an index field with a matching type using the console or the UpdateIndex operation. If you specify the PageFieldMappings parameter, you must specify at least one field mapping.
     */
    PageFieldMappings?: ConfluencePageFieldMappingsList;
  }
  export type ConfluencePageFieldMappingsList = ConfluencePageToIndexFieldMapping[];
  export type ConfluencePageFieldName = "AUTHOR"|"CONTENT_STATUS"|"CREATED_DATE"|"DISPLAY_URL"|"ITEM_TYPE"|"LABELS"|"MODIFIED_DATE"|"PARENT_ID"|"SPACE_KEY"|"SPACE_NAME"|"URL"|"VERSION"|string;
  export interface ConfluencePageToIndexFieldMapping {
    /**
     * The name of the field in the data source. 
     */
    DataSourceFieldName?: ConfluencePageFieldName;
    /**
     * The format for date fields in the data source. If the field specified in DataSourceFieldName is a date field you must specify the date format. If the field is not a date field, an exception is thrown.
     */
    DateFieldFormat?: DataSourceDateFieldFormat;
    /**
     * The name of the index field to map to the Confluence data source field. The index field type must match the Confluence field type.
     */
    IndexFieldName?: IndexFieldName;
  }
  export interface ConfluenceSpaceConfiguration {
    /**
     * Specifies whether Amazon Kendra should index personal spaces. Users can add restrictions to items in personal spaces. If personal spaces are indexed, queries without user context information may return restricted items from a personal space in their results. For more information, see Filtering on user context.
     */
    CrawlPersonalSpaces?: Boolean;
    /**
     * Specifies whether Amazon Kendra should index archived spaces.
     */
    CrawlArchivedSpaces?: Boolean;
    /**
     * A list of space keys for Confluence spaces. If you include a key, the blogs, documents, and attachments in the space are indexed. Spaces that aren't in the list aren't indexed. A space in the list must exist. Otherwise, Amazon Kendra logs an error when the data source is synchronized. If a space is in both the IncludeSpaces and the ExcludeSpaces list, the space is excluded.
     */
    IncludeSpaces?: ConfluenceSpaceList;
    /**
     * A list of space keys of Confluence spaces. If you include a key, the blogs, documents, and attachments in the space are not indexed. If a space is in both the ExcludeSpaces and the IncludeSpaces list, the space is excluded.
     */
    ExcludeSpaces?: ConfluenceSpaceList;
    /**
     * Defines how space metadata fields should be mapped to index fields. Before you can map a field, you must first create an index field with a matching type using the console or the UpdateIndex operation. If you specify the SpaceFieldMappings parameter, you must specify at least one field mapping.
     */
    SpaceFieldMappings?: ConfluenceSpaceFieldMappingsList;
  }
  export type ConfluenceSpaceFieldMappingsList = ConfluenceSpaceToIndexFieldMapping[];
  export type ConfluenceSpaceFieldName = "DISPLAY_URL"|"ITEM_TYPE"|"SPACE_KEY"|"URL"|string;
  export type ConfluenceSpaceIdentifier = string;
  export type ConfluenceSpaceList = ConfluenceSpaceIdentifier[];
  export interface ConfluenceSpaceToIndexFieldMapping {
    /**
     * The name of the field in the data source. 
     */
    DataSourceFieldName?: ConfluenceSpaceFieldName;
    /**
     * The format for date fields in the data source. If the field specified in DataSourceFieldName is a date field you must specify the date format. If the field is not a date field, an exception is thrown.
     */
    DateFieldFormat?: DataSourceDateFieldFormat;
    /**
     * The name of the index field to map to the Confluence data source field. The index field type must match the Confluence field type.
     */
    IndexFieldName?: IndexFieldName;
  }
  export type ConfluenceVersion = "CLOUD"|"SERVER"|string;
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
     * The connector configuration information that is required to access the repository. You can't specify the Configuration parameter when the Type parameter is set to CUSTOM. If you do, you receive a ValidationException exception. The Configuration parameter is required for all other data sources.
     */
    Configuration?: DataSourceConfiguration;
    /**
     * A description for the data source.
     */
    Description?: Description;
    /**
     * Sets the frequency that Amazon Kendra will check the documents in your repository and update the index. If you don't set a schedule Amazon Kendra will not periodically update the index. You can call the StartDataSourceSyncJob operation to update the index. You can't specify the Schedule parameter when the Type parameter is set to CUSTOM. If you do, you receive a ValidationException exception.
     */
    Schedule?: ScanSchedule;
    /**
     * The Amazon Resource Name (ARN) of a role with permission to access the data source. For more information, see IAM Roles for Amazon Kendra. You can't specify the RoleArn parameter when the Type parameter is set to CUSTOM. If you do, you receive a ValidationException exception. The RoleArn parameter is required for all other data sources.
     */
    RoleArn?: RoleArn;
    /**
     * A list of key-value pairs that identify the data source. You can use the tags to identify and organize your resources and to control access to resources.
     */
    Tags?: TagList;
    /**
     * A token that you provide to identify the request to create a data source. Multiple calls to the CreateDataSource operation with the same client token will create only one data source.
     */
    ClientToken?: ClientTokenName;
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
    /**
     * A list of key-value pairs that identify the FAQ. You can use the tags to identify and organize your resources and to control access to resources.
     */
    Tags?: TagList;
    /**
     * The format of the input file. You can choose between a basic CSV format, a CSV format that includes customs attributes in a header, and a JSON format that includes custom attributes. The format must match the format of the file stored in the S3 bucket identified in the S3Path parameter. For more information, see Adding questions and answers.
     */
    FileFormat?: FaqFileFormat;
    /**
     * A token that you provide to identify the request to create a FAQ. Multiple calls to the CreateFaqRequest operation with the same client token will create only one FAQ. 
     */
    ClientToken?: ClientTokenName;
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
     * The Amazon Kendra edition to use for the index. Choose DEVELOPER_EDITION for indexes intended for development, testing, or proof of concept. Use ENTERPRISE_EDITION for your production databases. Once you set the edition for an index, it can't be changed.  The Edition parameter is optional. If you don't supply a value, the default is ENTERPRISE_EDITION.
     */
    Edition?: IndexEdition;
    /**
     * An AWS Identity and Access Management (IAM) role that gives Amazon Kendra permissions to access your Amazon CloudWatch logs and metrics. This is also the role used when you use the BatchPutDocument operation to index documents from an Amazon S3 bucket.
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
    /**
     * A token that you provide to identify the request to create an index. Multiple calls to the CreateIndex operation with the same client token will create only one index.
     */
    ClientToken?: ClientTokenName;
    /**
     * A list of key-value pairs that identify the index. You can use the tags to identify and organize your resources and to control access to resources.
     */
    Tags?: TagList;
    /**
     * The user token configuration.
     */
    UserTokenConfigurations?: UserTokenConfigurationList;
    /**
     * The user context policy.  ATTRIBUTE_FILTER  All indexed content is searchable and displayable for all users. If there is an access control list, it is ignored. You can filter on user and group attributes.   USER_TOKEN  Enables SSO and token-based user access control. All documents with no access control and all documents accessible to the user will be searchable and displayable.   
     */
    UserContextPolicy?: UserContextPolicy;
  }
  export interface CreateIndexResponse {
    /**
     * The unique identifier of the index. Use this identifier when you query an index, set up a data source, or index a document.
     */
    Id?: IndexId;
  }
  export interface DataSourceConfiguration {
    /**
     * Provides information to create a data source connector for a document repository in an Amazon S3 bucket.
     */
    S3Configuration?: S3DataSourceConfiguration;
    /**
     * Provides information necessary to create a data source connector for a Microsoft SharePoint site.
     */
    SharePointConfiguration?: SharePointConfiguration;
    /**
     * Provides information necessary to create a data source connector for a database.
     */
    DatabaseConfiguration?: DatabaseConfiguration;
    /**
     * Provides configuration information for data sources that connect to a Salesforce site.
     */
    SalesforceConfiguration?: SalesforceConfiguration;
    /**
     * Provided configuration for data sources that connect to Microsoft OneDrive.
     */
    OneDriveConfiguration?: OneDriveConfiguration;
    /**
     * Provides configuration for data sources that connect to ServiceNow instances.
     */
    ServiceNowConfiguration?: ServiceNowConfiguration;
    /**
     * Provides configuration information for connecting to a Confluence data source.
     */
    ConfluenceConfiguration?: ConfluenceConfiguration;
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
    /**
     * Maps a batch delete document request to a specific data source sync job. This is optional and should only be supplied when documents are deleted by a data source connector.
     */
    Metrics?: DataSourceSyncJobMetrics;
  }
  export type DataSourceSyncJobHistoryList = DataSourceSyncJob[];
  export type DataSourceSyncJobId = string;
  export interface DataSourceSyncJobMetricTarget {
    /**
     * The ID of the data source that is running the sync job.
     */
    DataSourceId: DataSourceId;
    /**
     * The ID of the sync job that is running on the data source.
     */
    DataSourceSyncJobId: DataSourceSyncJobId;
  }
  export interface DataSourceSyncJobMetrics {
    /**
     * The number of documents added from the data source up to now in the data source sync.
     */
    DocumentsAdded?: MetricValue;
    /**
     * The number of documents modified in the data source up to now in the data source sync run.
     */
    DocumentsModified?: MetricValue;
    /**
     * The number of documents deleted from the data source up to now in the data source sync run.
     */
    DocumentsDeleted?: MetricValue;
    /**
     * The number of documents that failed to sync from the data source up to now in the data source sync run.
     */
    DocumentsFailed?: MetricValue;
    /**
     * The current number of documents crawled by the current sync job in the data source.
     */
    DocumentsScanned?: MetricValue;
  }
  export type DataSourceSyncJobStatus = "FAILED"|"SUCCEEDED"|"SYNCING"|"INCOMPLETE"|"STOPPING"|"ABORTED"|"SYNCING_INDEXING"|string;
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
  export type DataSourceType = "S3"|"SHAREPOINT"|"DATABASE"|"SALESFORCE"|"ONEDRIVE"|"SERVICENOW"|"CUSTOM"|"CONFLUENCE"|string;
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
    /**
     * Provides information about how Amazon Kendra uses quote marks around SQL identifiers when querying a database data source.
     */
    SqlConfiguration?: SqlConfiguration;
  }
  export type DatabaseEngineType = "RDS_AURORA_MYSQL"|"RDS_AURORA_POSTGRESQL"|"RDS_MYSQL"|"RDS_POSTGRESQL"|string;
  export type DatabaseHost = string;
  export type DatabaseName = string;
  export type DatabasePort = number;
  export interface DeleteDataSourceRequest {
    /**
     * The unique identifier of the data source to delete.
     */
    Id: DataSourceId;
    /**
     * The unique identifier of the index associated with the data source.
     */
    IndexId: IndexId;
  }
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
    /**
     * The file format used by the input files for the FAQ.
     */
    FileFormat?: FaqFileFormat;
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
     * The Amazon Kendra edition used for the index. You decide the edition when you create the index.
     */
    Edition?: IndexEdition;
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
    /**
     * For enterprise edtion indexes, you can choose to use additional capacity to meet the needs of your application. This contains the capacity units used for the index. A 0 for the query capacity or the storage capacity indicates that the index is using the default capacity for the index.
     */
    CapacityUnits?: CapacityUnitsConfiguration;
    /**
     * The user token configuration for the Amazon Kendra index.
     */
    UserTokenConfigurations?: UserTokenConfigurationList;
    /**
     * The user context policy for the Amazon Kendra index.
     */
    UserContextPolicy?: UserContextPolicy;
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
     * The contents of the document.  Documents passed to the Blob parameter must be base64 encoded. Your code might not need to encode the document file bytes if you're using an AWS SDK to call Amazon Kendra operations. If you are calling the Amazon Kendra endpoint directly using REST, you must base64 encode the contents before sending.
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
     * A date expressed as an ISO 8601 string.
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
     * The data type of the facet value. This is the same as the type defined for the index field when it was created.
     */
    DocumentAttributeValueType?: DocumentAttributeValueType;
    /**
     * An array of key/value pairs, where the key is the value of the attribute and the count is the number of documents that share the key value.
     */
    DocumentAttributeValueCountPairs?: DocumentAttributeValueCountPairList;
  }
  export type FacetResultList = FacetResult[];
  export type FaqFileFormat = "CSV"|"CSV_WITH_HEADER"|"JSON"|string;
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
    /**
     * The file type used to create the FAQ. 
     */
    FileFormat?: FaqFileFormat;
  }
  export type FaqSummaryItems = FaqSummary[];
  export type GroupAttributeField = string;
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
     * Indicates whether the index is a enterprise edition index or a developer edition index. 
     */
    Edition?: IndexEdition;
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
  export type IndexEdition = "DEVELOPER_EDITION"|"ENTERPRISE_EDITION"|string;
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
  export type IndexStatus = "CREATING"|"ACTIVE"|"DELETING"|"FAILED"|"UPDATING"|"SYSTEM_UPDATING"|string;
  export type IndexedQuestionAnswersCount = number;
  export type IndexedTextBytes = number;
  export type IndexedTextDocumentsCount = number;
  export type Integer = number;
  export type Issuer = string;
  export interface JsonTokenTypeConfiguration {
    /**
     * The user name attribute field.
     */
    UserNameAttributeField: String;
    /**
     * The group attribute field.
     */
    GroupAttributeField: String;
  }
  export interface JwtTokenTypeConfiguration {
    /**
     * The location of the key.
     */
    KeyLocation: KeyLocation;
    /**
     * The signing key URL.
     */
    URL?: Url;
    /**
     * The Amazon Resource Name (arn) of the secret.
     */
    SecretManagerArn?: RoleArn;
    /**
     * The user name attribute field.
     */
    UserNameAttributeField?: UserNameAttributeField;
    /**
     * The group attribute field.
     */
    GroupAttributeField?: GroupAttributeField;
    /**
     * The issuer of the token.
     */
    Issuer?: Issuer;
    /**
     * The regular expression that identifies the claim.
     */
    ClaimRegex?: ClaimRegex;
  }
  export type KeyLocation = "URL"|"SECRET_MANAGER"|string;
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
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the index, FAQ, or data source to get a list of tags for.
     */
    ResourceARN: AmazonResourceName;
  }
  export interface ListTagsForResourceResponse {
    /**
     * A list of tags associated with the index, FAQ, or data source.
     */
    Tags?: TagList;
  }
  export type Long = number;
  export type MaxResultsIntegerForListDataSourceSyncJobsRequest = number;
  export type MaxResultsIntegerForListDataSourcesRequest = number;
  export type MaxResultsIntegerForListFaqsRequest = number;
  export type MaxResultsIntegerForListIndicesRequest = number;
  export type MetricValue = string;
  export type NextToken = string;
  export interface OneDriveConfiguration {
    /**
     * Tha Azure Active Directory domain of the organization. 
     */
    TenantDomain: TenantDomain;
    /**
     * The Amazon Resource Name (ARN) of an AWS Secrets Manager secret that contains the user name and password to connect to OneDrive. The user namd should be the application ID for the OneDrive application, and the password is the application key for the OneDrive application.
     */
    SecretArn: SecretArn;
    /**
     * A list of user accounts whose documents should be indexed.
     */
    OneDriveUsers: OneDriveUsers;
    /**
     * A list of regular expression patterns. Documents that match the pattern are included in the index. Documents that don't match the pattern are excluded from the index. If a document matches both an inclusion pattern and an exclusion pattern, the document is not included in the index.  The exclusion pattern is applied to the file name.
     */
    InclusionPatterns?: DataSourceInclusionsExclusionsStrings;
    /**
     * List of regular expressions applied to documents. Items that match the exclusion pattern are not indexed. If you provide both an inclusion pattern and an exclusion pattern, any item that matches the exclusion pattern isn't indexed.  The exclusion pattern is applied to the file name.
     */
    ExclusionPatterns?: DataSourceInclusionsExclusionsStrings;
    /**
     * A list of DataSourceToIndexFieldMapping objects that map Microsoft OneDrive fields to custom fields in the Amazon Kendra index. You must first create the index fields before you map OneDrive fields.
     */
    FieldMappings?: DataSourceToIndexFieldMappingList;
    /**
     * A Boolean value that specifies whether local groups are disabled (True) or enabled (False). 
     */
    DisableLocalGroups?: Boolean;
  }
  export type OneDriveUser = string;
  export type OneDriveUserList = OneDriveUser[];
  export interface OneDriveUsers {
    /**
     * A list of users whose documents should be indexed. Specify the user names in email format, for example, username@tenantdomain. If you need to index the documents of more than 100 users, use the OneDriveUserS3Path field to specify the location of a file containing a list of users.
     */
    OneDriveUserList?: OneDriveUserList;
    /**
     * The S3 bucket location of a file containing a list of users whose documents should be indexed.
     */
    OneDriveUserS3Path?: S3Path;
  }
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
  export type QueryCapacityUnit = number;
  export type QueryId = string;
  export type QueryIdentifiersEnclosingOption = "DOUBLE_QUOTES"|"NONE"|string;
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
     * Sets the number of results that are returned in each page of results. The default page size is 10. The maximum number of results returned is 100. If you ask for more than 100 results, only 100 are returned.
     */
    PageSize?: Integer;
    /**
     * Provides information that determines how the results of the query are sorted. You can set the field that Amazon Kendra should sort the results on, and specify whether the results should be sorted in ascending or descending order. In the case of ties in sorting the results, the results are sorted by relevance. If you don't provide sorting configuration, the results are sorted by the relevance that Amazon Kendra determines for the result.
     */
    SortingConfiguration?: SortingConfiguration;
    /**
     * The user context token.
     */
    UserContext?: UserContext;
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
     * The total number of items found by the search; however, you can only retrieve up to 100 items. For example, if the search found 192 items, you can only retrieve the first 100 of the items.
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
     * One or more additional attributes associated with the query result.
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
    /**
     * Indicates the confidence that Amazon Kendra has that a result matches the query that you provided. Each result is placed into a bin that indicates the confidence, VERY_HIGH, HIGH, MEDIUM and LOW. You can use the score to determine if a response meets the confidence needed for your application. The field is only set to LOW when the Type field is set to DOCUMENT and Amazon Kendra is not confident that the result matches the query.
     */
    ScoreAttributes?: ScoreAttributes;
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
     * A list of glob patterns for documents that should be indexed. If a document that matches an inclusion pattern also matches an exclusion pattern, the document is not indexed. For more information about glob patterns, see glob (programming) in Wikipedia.
     */
    InclusionPatterns?: DataSourceInclusionsExclusionsStrings;
    /**
     * A list of glob patterns for documents that should not be indexed. If a document that matches an inclusion prefix or inclusion pattern also matches an exclusion pattern, the document is not indexed. For more information about glob patterns, see glob (programming) in Wikipedia.
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
  export interface SalesforceChatterFeedConfiguration {
    /**
     * The name of the column in the Salesforce FeedItem table that contains the content to index. Typically this is the Body column.
     */
    DocumentDataFieldName: DataSourceFieldName;
    /**
     * The name of the column in the Salesforce FeedItem table that contains the title of the document. This is typically the Title collumn.
     */
    DocumentTitleFieldName?: DataSourceFieldName;
    /**
     * Maps fields from a Salesforce chatter feed into Amazon Kendra index fields.
     */
    FieldMappings?: DataSourceToIndexFieldMappingList;
    /**
     * Filters the documents in the feed based on status of the user. When you specify ACTIVE_USERS only documents from users who have an active account are indexed. When you specify STANDARD_USER only documents for Salesforce standard users are documented. You can specify both.
     */
    IncludeFilterTypes?: SalesforceChatterFeedIncludeFilterTypes;
  }
  export type SalesforceChatterFeedIncludeFilterType = "ACTIVE_USER"|"STANDARD_USER"|string;
  export type SalesforceChatterFeedIncludeFilterTypes = SalesforceChatterFeedIncludeFilterType[];
  export interface SalesforceConfiguration {
    /**
     * The instance URL for the Salesforce site that you want to index.
     */
    ServerUrl: Url;
    /**
     * The Amazon Resource Name (ARN) of an AWS Secrets Manager secret that contains the key/value pairs required to connect to your Salesforce instance. The secret must contain a JSON structure with the following keys:   authenticationUrl - The OAUTH endpoint that Amazon Kendra connects to get an OAUTH token.    consumerKey - The application public key generated when you created your Salesforce application.   consumerSecret - The application private key generated when you created your Salesforce application.   password - The password associated with the user logging in to the Salesforce instance.   securityToken - The token associated with the user account logging in to the Salesforce instance.   username - The user name of the user logging in to the Salesforce instance.  
     */
    SecretArn: SecretArn;
    /**
     * Specifies the Salesforce standard objects that Amazon Kendra indexes.
     */
    StandardObjectConfigurations?: SalesforceStandardObjectConfigurationList;
    /**
     * Specifies configuration information for the knowlege article types that Amazon Kendra indexes. Amazon Kendra indexes standard knowledge articles and the standard fields of knowledge articles, or the custom fields of custom knowledge articles, but not both.
     */
    KnowledgeArticleConfiguration?: SalesforceKnowledgeArticleConfiguration;
    /**
     * Specifies configuration information for Salesforce chatter feeds.
     */
    ChatterFeedConfiguration?: SalesforceChatterFeedConfiguration;
    /**
     * Indicates whether Amazon Kendra should index attachments to Salesforce objects.
     */
    CrawlAttachments?: Boolean;
    /**
     * Provides configuration information for processing attachments to Salesforce standard objects. 
     */
    StandardObjectAttachmentConfiguration?: SalesforceStandardObjectAttachmentConfiguration;
    /**
     * A list of regular expression patterns. Documents that match the patterns are included in the index. Documents that don't match the patterns are excluded from the index. If a document matches both an inclusion pattern and an exclusion pattern, the document is not included in the index. The regex is applied to the name of the attached file.
     */
    IncludeAttachmentFilePatterns?: DataSourceInclusionsExclusionsStrings;
    /**
     * A list of regular expression patterns. Documents that match the patterns are excluded from the index. Documents that don't match the patterns are included in the index. If a document matches both an exclusion pattern and an inclusion pattern, the document is not included in the index. The regex is applied to the name of the attached file.
     */
    ExcludeAttachmentFilePatterns?: DataSourceInclusionsExclusionsStrings;
  }
  export interface SalesforceCustomKnowledgeArticleTypeConfiguration {
    /**
     * The name of the configuration.
     */
    Name: SalesforceCustomKnowledgeArticleTypeName;
    /**
     * The name of the field in the custom knowledge article that contains the document data to index.
     */
    DocumentDataFieldName: DataSourceFieldName;
    /**
     * The name of the field in the custom knowledge article that contains the document title.
     */
    DocumentTitleFieldName?: DataSourceFieldName;
    /**
     * One or more objects that map fields in the custom knowledge article to fields in the Amazon Kendra index.
     */
    FieldMappings?: DataSourceToIndexFieldMappingList;
  }
  export type SalesforceCustomKnowledgeArticleTypeConfigurationList = SalesforceCustomKnowledgeArticleTypeConfiguration[];
  export type SalesforceCustomKnowledgeArticleTypeName = string;
  export interface SalesforceKnowledgeArticleConfiguration {
    /**
     * Specifies the document states that should be included when Amazon Kendra indexes knowledge articles. You must specify at least one state.
     */
    IncludedStates: SalesforceKnowledgeArticleStateList;
    /**
     * Provides configuration information for standard Salesforce knowledge articles.
     */
    StandardKnowledgeArticleTypeConfiguration?: SalesforceStandardKnowledgeArticleTypeConfiguration;
    /**
     * Provides configuration information for custom Salesforce knowledge articles.
     */
    CustomKnowledgeArticleTypeConfigurations?: SalesforceCustomKnowledgeArticleTypeConfigurationList;
  }
  export type SalesforceKnowledgeArticleState = "DRAFT"|"PUBLISHED"|"ARCHIVED"|string;
  export type SalesforceKnowledgeArticleStateList = SalesforceKnowledgeArticleState[];
  export interface SalesforceStandardKnowledgeArticleTypeConfiguration {
    /**
     * The name of the field that contains the document data to index.
     */
    DocumentDataFieldName: DataSourceFieldName;
    /**
     * The name of the field that contains the document title.
     */
    DocumentTitleFieldName?: DataSourceFieldName;
    /**
     * One or more objects that map fields in the knowledge article to Amazon Kendra index fields. The index field must exist before you can map a Salesforce field to it.
     */
    FieldMappings?: DataSourceToIndexFieldMappingList;
  }
  export interface SalesforceStandardObjectAttachmentConfiguration {
    /**
     * The name of the field used for the document title.
     */
    DocumentTitleFieldName?: DataSourceFieldName;
    /**
     * One or more objects that map fields in attachments to Amazon Kendra index fields.
     */
    FieldMappings?: DataSourceToIndexFieldMappingList;
  }
  export interface SalesforceStandardObjectConfiguration {
    /**
     * The name of the standard object.
     */
    Name: SalesforceStandardObjectName;
    /**
     * The name of the field in the standard object table that contains the document contents.
     */
    DocumentDataFieldName: DataSourceFieldName;
    /**
     * The name of the field in the standard object table that contains the document titleB.
     */
    DocumentTitleFieldName?: DataSourceFieldName;
    /**
     * One or more objects that map fields in the standard object to Amazon Kendra index fields. The index field must exist before you can map a Salesforce field to it.
     */
    FieldMappings?: DataSourceToIndexFieldMappingList;
  }
  export type SalesforceStandardObjectConfigurationList = SalesforceStandardObjectConfiguration[];
  export type SalesforceStandardObjectName = "ACCOUNT"|"CAMPAIGN"|"CASE"|"CONTACT"|"CONTRACT"|"DOCUMENT"|"GROUP"|"IDEA"|"LEAD"|"OPPORTUNITY"|"PARTNER"|"PRICEBOOK"|"PRODUCT"|"PROFILE"|"SOLUTION"|"TASK"|"USER"|string;
  export type ScanSchedule = string;
  export interface ScoreAttributes {
    /**
     * A relative ranking for how well the response matches the query.
     */
    ScoreConfidence?: ScoreConfidence;
  }
  export type ScoreConfidence = "VERY_HIGH"|"HIGH"|"MEDIUM"|"LOW"|string;
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
    /**
     * Determines whether the field can be used to sort the results of a query. If you specify sorting on a field that does not have Sortable set to true, Amazon Kendra returns an exception. The default is false.
     */
    Sortable?: Boolean;
  }
  export type SecretArn = string;
  export type SecurityGroupIdList = VpcSecurityGroupId[];
  export interface ServerSideEncryptionConfiguration {
    /**
     * The identifier of the AWS KMS customer master key (CMK). Amazon Kendra doesn't support asymmetric CMKs.
     */
    KmsKeyId?: KmsKeyId;
  }
  export type ServiceNowBuildVersionType = "LONDON"|"OTHERS"|string;
  export interface ServiceNowConfiguration {
    /**
     * The ServiceNow instance that the data source connects to. The host endpoint should look like the following: {instance}.service-now.com. 
     */
    HostUrl: ServiceNowHostUrl;
    /**
     * The Amazon Resource Name (ARN) of the AWS Secret Manager secret that contains the user name and password required to connect to the ServiceNow instance.
     */
    SecretArn: SecretArn;
    /**
     * The identifier of the release that the ServiceNow host is running. If the host is not running the LONDON release, use OTHERS.
     */
    ServiceNowBuildVersion: ServiceNowBuildVersionType;
    /**
     * Provides configuration information for crawling knowledge articles in the ServiceNow site.
     */
    KnowledgeArticleConfiguration?: ServiceNowKnowledgeArticleConfiguration;
    /**
     * Provides configuration information for crawling service catalogs in the ServiceNow site.
     */
    ServiceCatalogConfiguration?: ServiceNowServiceCatalogConfiguration;
  }
  export type ServiceNowHostUrl = string;
  export interface ServiceNowKnowledgeArticleConfiguration {
    /**
     * Indicates whether Amazon Kendra should index attachments to knowledge articles.
     */
    CrawlAttachments?: Boolean;
    /**
     * List of regular expressions applied to knowledge articles. Items that don't match the inclusion pattern are not indexed. The regex is applied to the field specified in the PatternTargetField.
     */
    IncludeAttachmentFilePatterns?: DataSourceInclusionsExclusionsStrings;
    /**
     * List of regular expressions applied to knowledge articles. Items that don't match the inclusion pattern are not indexed. The regex is applied to the field specified in the PatternTargetField 
     */
    ExcludeAttachmentFilePatterns?: DataSourceInclusionsExclusionsStrings;
    /**
     * The name of the ServiceNow field that is mapped to the index document contents field in the Amazon Kendra index.
     */
    DocumentDataFieldName: DataSourceFieldName;
    /**
     * The name of the ServiceNow field that is mapped to the index document title field.
     */
    DocumentTitleFieldName?: DataSourceFieldName;
    /**
     * Mapping between ServiceNow fields and Amazon Kendra index fields. You must create the index field before you map the field.
     */
    FieldMappings?: DataSourceToIndexFieldMappingList;
  }
  export interface ServiceNowServiceCatalogConfiguration {
    /**
     * Indicates whether Amazon Kendra should crawl attachments to the service catalog items. 
     */
    CrawlAttachments?: Boolean;
    /**
     * Determines the types of file attachments that are included in the index. 
     */
    IncludeAttachmentFilePatterns?: DataSourceInclusionsExclusionsStrings;
    /**
     * Determines the types of file attachments that are excluded from the index.
     */
    ExcludeAttachmentFilePatterns?: DataSourceInclusionsExclusionsStrings;
    /**
     * The name of the ServiceNow field that is mapped to the index document contents field in the Amazon Kendra index.
     */
    DocumentDataFieldName: DataSourceFieldName;
    /**
     * The name of the ServiceNow field that is mapped to the index document title field.
     */
    DocumentTitleFieldName?: DataSourceFieldName;
    /**
     * Mapping between ServiceNow fields and Amazon Kendra index fields. You must create the index field before you map the field.
     */
    FieldMappings?: DataSourceToIndexFieldMappingList;
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
    /**
     * Set to TRUE to use the Microsoft SharePoint change log to determine the documents that need to be updated in the index. Depending on the size of the SharePoint change log, it may take longer for Amazon Kendra to use the change log than it takes it to determine the changed documents using the Amazon Kendra document crawler.
     */
    UseChangeLog?: Boolean;
    /**
     * A list of regular expression patterns. Documents that match the patterns are included in the index. Documents that don't match the patterns are excluded from the index. If a document matches both an inclusion pattern and an exclusion pattern, the document is not included in the index. The regex is applied to the display URL of the SharePoint document.
     */
    InclusionPatterns?: DataSourceInclusionsExclusionsStrings;
    /**
     * A list of regular expression patterns. Documents that match the patterns are excluded from the index. Documents that don't match the patterns are included in the index. If a document matches both an exclusion pattern and an inclusion pattern, the document is not included in the index. The regex is applied to the display URL of the SharePoint document.
     */
    ExclusionPatterns?: DataSourceInclusionsExclusionsStrings;
    VpcConfiguration?: DataSourceVpcConfiguration;
    /**
     * A list of DataSourceToIndexFieldMapping objects that map Microsoft SharePoint attributes to custom fields in the Amazon Kendra index. You must first create the index fields using the operation before you map SharePoint attributes. For more information, see Mapping Data Source Fields.
     */
    FieldMappings?: DataSourceToIndexFieldMappingList;
    /**
     * The Microsoft SharePoint attribute field that contains the title of the document.
     */
    DocumentTitleFieldName?: DataSourceFieldName;
    /**
     * A Boolean value that specifies whether local groups are disabled (True) or enabled (False). 
     */
    DisableLocalGroups?: Boolean;
  }
  export type SharePointUrlList = Url[];
  export type SharePointVersion = "SHAREPOINT_ONLINE"|string;
  export type SortOrder = "DESC"|"ASC"|string;
  export interface SortingConfiguration {
    /**
     * The name of the document attribute used to sort the response. You can use any field that has the Sortable flag set to true. You can also sort by any of the following built-in attributes:   _category   _created_at   _last_updated_at   _version   _view_count  
     */
    DocumentAttributeKey: DocumentAttributeKey;
    /**
     * The order that the results should be returned in. In case of ties, the relevance assigned to the result by Amazon Kendra is used as the tie-breaker.
     */
    SortOrder: SortOrder;
  }
  export interface SqlConfiguration {
    /**
     * Determines whether Amazon Kendra encloses SQL identifiers for tables and column names in double quotes (") when making a database query. By default, Amazon Kendra passes SQL identifiers the way that they are entered into the data source configuration. It does not change the case of identifiers or enclose them in quotes. PostgreSQL internally converts uppercase characters to lower case characters in identifiers unless they are quoted. Choosing this option encloses identifiers in quotes so that PostgreSQL does not convert the character's case. For MySQL databases, you must enable the ansi_quotes option when you set this field to DOUBLE_QUOTES.
     */
    QueryIdentifiersEnclosingOption?: QueryIdentifiersEnclosingOption;
  }
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
  export type StorageCapacityUnit = number;
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
  export interface Tag {
    /**
     * The key for the tag. Keys are not case sensitive and must be unique for the index, FAQ, or data source.
     */
    Key: TagKey;
    /**
     * The value associated with the tag. The value may be an empty string but it can't be null.
     */
    Value: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the index, FAQ, or data source to tag.
     */
    ResourceARN: AmazonResourceName;
    /**
     * A list of tag keys to add to the index, FAQ, or data source. If a tag already exists, the existing value is replaced with the new value.
     */
    Tags: TagList;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type TenantDomain = string;
  export interface TextDocumentStatistics {
    /**
     * The number of text documents indexed.
     */
    IndexedTextDocumentsCount: IndexedTextDocumentsCount;
    /**
     * The total size, in bytes, of the indexed documents.
     */
    IndexedTextBytes: IndexedTextBytes;
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
  export type Token = string;
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the index, FAQ, or data source to remove the tag from.
     */
    ResourceARN: AmazonResourceName;
    /**
     * A list of tag keys to remove from the index, FAQ, or data source. If a tag key does not exist on the resource, it is ignored.
     */
    TagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
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
    /**
     * Sets the number of addtional storage and query capacity units that should be used by the index. You can change the capacity of the index up to 5 times per day. If you are using extra storage units, you can't reduce the storage capacity below that required to meet the storage needs for your index.
     */
    CapacityUnits?: CapacityUnitsConfiguration;
    /**
     * The user token configuration.
     */
    UserTokenConfigurations?: UserTokenConfigurationList;
    /**
     * The user user token context policy.
     */
    UserContextPolicy?: UserContextPolicy;
  }
  export type Url = string;
  export interface UserContext {
    /**
     * The user context token. It must be a JWT or a JSON token.
     */
    Token?: Token;
  }
  export type UserContextPolicy = "ATTRIBUTE_FILTER"|"USER_TOKEN"|string;
  export type UserNameAttributeField = string;
  export interface UserTokenConfiguration {
    /**
     * Information about the JWT token type configuration.
     */
    JwtTokenTypeConfiguration?: JwtTokenTypeConfiguration;
    /**
     * Information about the JSON token type configuration.
     */
    JsonTokenTypeConfiguration?: JsonTokenTypeConfiguration;
  }
  export type UserTokenConfigurationList = UserTokenConfiguration[];
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
