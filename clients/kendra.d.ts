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
   * Grants users or groups in your Amazon Web Services SSO identity source access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code.
   */
  associateEntitiesToExperience(params: Kendra.Types.AssociateEntitiesToExperienceRequest, callback?: (err: AWSError, data: Kendra.Types.AssociateEntitiesToExperienceResponse) => void): Request<Kendra.Types.AssociateEntitiesToExperienceResponse, AWSError>;
  /**
   * Grants users or groups in your Amazon Web Services SSO identity source access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code.
   */
  associateEntitiesToExperience(callback?: (err: AWSError, data: Kendra.Types.AssociateEntitiesToExperienceResponse) => void): Request<Kendra.Types.AssociateEntitiesToExperienceResponse, AWSError>;
  /**
   * Defines the specific permissions of users or groups in your Amazon Web Services SSO identity source with access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code.
   */
  associatePersonasToEntities(params: Kendra.Types.AssociatePersonasToEntitiesRequest, callback?: (err: AWSError, data: Kendra.Types.AssociatePersonasToEntitiesResponse) => void): Request<Kendra.Types.AssociatePersonasToEntitiesResponse, AWSError>;
  /**
   * Defines the specific permissions of users or groups in your Amazon Web Services SSO identity source with access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code.
   */
  associatePersonasToEntities(callback?: (err: AWSError, data: Kendra.Types.AssociatePersonasToEntitiesResponse) => void): Request<Kendra.Types.AssociatePersonasToEntitiesResponse, AWSError>;
  /**
   * Removes one or more documents from an index. The documents must have been added with the BatchPutDocument API. The documents are deleted asynchronously. You can see the progress of the deletion by using Amazon Web Services CloudWatch. Any error messages related to the processing of the batch are sent to you CloudWatch log.
   */
  batchDeleteDocument(params: Kendra.Types.BatchDeleteDocumentRequest, callback?: (err: AWSError, data: Kendra.Types.BatchDeleteDocumentResponse) => void): Request<Kendra.Types.BatchDeleteDocumentResponse, AWSError>;
  /**
   * Removes one or more documents from an index. The documents must have been added with the BatchPutDocument API. The documents are deleted asynchronously. You can see the progress of the deletion by using Amazon Web Services CloudWatch. Any error messages related to the processing of the batch are sent to you CloudWatch log.
   */
  batchDeleteDocument(callback?: (err: AWSError, data: Kendra.Types.BatchDeleteDocumentResponse) => void): Request<Kendra.Types.BatchDeleteDocumentResponse, AWSError>;
  /**
   * Returns the indexing status for one or more documents submitted with the  BatchPutDocument API. When you use the BatchPutDocument API, documents are indexed asynchronously. You can use the BatchGetDocumentStatus API to get the current status of a list of documents so that you can determine if they have been successfully indexed. You can also use the BatchGetDocumentStatus API to check the status of the  BatchDeleteDocument API. When a document is deleted from the index, Amazon Kendra returns NOT_FOUND as the status.
   */
  batchGetDocumentStatus(params: Kendra.Types.BatchGetDocumentStatusRequest, callback?: (err: AWSError, data: Kendra.Types.BatchGetDocumentStatusResponse) => void): Request<Kendra.Types.BatchGetDocumentStatusResponse, AWSError>;
  /**
   * Returns the indexing status for one or more documents submitted with the  BatchPutDocument API. When you use the BatchPutDocument API, documents are indexed asynchronously. You can use the BatchGetDocumentStatus API to get the current status of a list of documents so that you can determine if they have been successfully indexed. You can also use the BatchGetDocumentStatus API to check the status of the  BatchDeleteDocument API. When a document is deleted from the index, Amazon Kendra returns NOT_FOUND as the status.
   */
  batchGetDocumentStatus(callback?: (err: AWSError, data: Kendra.Types.BatchGetDocumentStatusResponse) => void): Request<Kendra.Types.BatchGetDocumentStatusResponse, AWSError>;
  /**
   * Adds one or more documents to an index. The BatchPutDocument API enables you to ingest inline documents or a set of documents stored in an Amazon S3 bucket. Use this API to ingest your text and unstructured text into an index, add custom attributes to the documents, and to attach an access control list to the documents added to the index. The documents are indexed asynchronously. You can see the progress of the batch using Amazon Web Services CloudWatch. Any error messages related to processing the batch are sent to your Amazon Web Services CloudWatch log.
   */
  batchPutDocument(params: Kendra.Types.BatchPutDocumentRequest, callback?: (err: AWSError, data: Kendra.Types.BatchPutDocumentResponse) => void): Request<Kendra.Types.BatchPutDocumentResponse, AWSError>;
  /**
   * Adds one or more documents to an index. The BatchPutDocument API enables you to ingest inline documents or a set of documents stored in an Amazon S3 bucket. Use this API to ingest your text and unstructured text into an index, add custom attributes to the documents, and to attach an access control list to the documents added to the index. The documents are indexed asynchronously. You can see the progress of the batch using Amazon Web Services CloudWatch. Any error messages related to processing the batch are sent to your Amazon Web Services CloudWatch log.
   */
  batchPutDocument(callback?: (err: AWSError, data: Kendra.Types.BatchPutDocumentResponse) => void): Request<Kendra.Types.BatchPutDocumentResponse, AWSError>;
  /**
   * Clears existing query suggestions from an index. This deletes existing suggestions only, not the queries in the query log. After you clear suggestions, Amazon Kendra learns new suggestions based on new queries added to the query log from the time you cleared suggestions. If you do not see any new suggestions, then please allow Amazon Kendra to collect enough queries to learn new suggestions.  ClearQuerySuggestions is currently not supported in the Amazon Web Services GovCloud (US-West) region.
   */
  clearQuerySuggestions(params: Kendra.Types.ClearQuerySuggestionsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Clears existing query suggestions from an index. This deletes existing suggestions only, not the queries in the query log. After you clear suggestions, Amazon Kendra learns new suggestions based on new queries added to the query log from the time you cleared suggestions. If you do not see any new suggestions, then please allow Amazon Kendra to collect enough queries to learn new suggestions.  ClearQuerySuggestions is currently not supported in the Amazon Web Services GovCloud (US-West) region.
   */
  clearQuerySuggestions(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates a data source that you want to use with an Amazon Kendra index.  You specify a name, data source connector type and description for your data source. You also specify configuration information for the data source connector.  CreateDataSource is a synchronous operation. The operation returns 200 if the data source was successfully created. Otherwise, an exception is raised. Amazon S3 and custom data sources are the only supported data sources in the Amazon Web Services GovCloud (US-West) region.
   */
  createDataSource(params: Kendra.Types.CreateDataSourceRequest, callback?: (err: AWSError, data: Kendra.Types.CreateDataSourceResponse) => void): Request<Kendra.Types.CreateDataSourceResponse, AWSError>;
  /**
   * Creates a data source that you want to use with an Amazon Kendra index.  You specify a name, data source connector type and description for your data source. You also specify configuration information for the data source connector.  CreateDataSource is a synchronous operation. The operation returns 200 if the data source was successfully created. Otherwise, an exception is raised. Amazon S3 and custom data sources are the only supported data sources in the Amazon Web Services GovCloud (US-West) region.
   */
  createDataSource(callback?: (err: AWSError, data: Kendra.Types.CreateDataSourceResponse) => void): Request<Kendra.Types.CreateDataSourceResponse, AWSError>;
  /**
   * Creates an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code.
   */
  createExperience(params: Kendra.Types.CreateExperienceRequest, callback?: (err: AWSError, data: Kendra.Types.CreateExperienceResponse) => void): Request<Kendra.Types.CreateExperienceResponse, AWSError>;
  /**
   * Creates an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code.
   */
  createExperience(callback?: (err: AWSError, data: Kendra.Types.CreateExperienceResponse) => void): Request<Kendra.Types.CreateExperienceResponse, AWSError>;
  /**
   * Creates an new set of frequently asked question (FAQ) questions and answers. Adding FAQs to an index is an asynchronous operation.
   */
  createFaq(params: Kendra.Types.CreateFaqRequest, callback?: (err: AWSError, data: Kendra.Types.CreateFaqResponse) => void): Request<Kendra.Types.CreateFaqResponse, AWSError>;
  /**
   * Creates an new set of frequently asked question (FAQ) questions and answers. Adding FAQs to an index is an asynchronous operation.
   */
  createFaq(callback?: (err: AWSError, data: Kendra.Types.CreateFaqResponse) => void): Request<Kendra.Types.CreateFaqResponse, AWSError>;
  /**
   * Creates a new Amazon Kendra index. Index creation is an asynchronous API. To determine if index creation has completed, check the Status field returned from a call to DescribeIndex. The Status field is set to ACTIVE when the index is ready to use. Once the index is active you can index your documents using the BatchPutDocument API or using one of the supported data sources. 
   */
  createIndex(params: Kendra.Types.CreateIndexRequest, callback?: (err: AWSError, data: Kendra.Types.CreateIndexResponse) => void): Request<Kendra.Types.CreateIndexResponse, AWSError>;
  /**
   * Creates a new Amazon Kendra index. Index creation is an asynchronous API. To determine if index creation has completed, check the Status field returned from a call to DescribeIndex. The Status field is set to ACTIVE when the index is ready to use. Once the index is active you can index your documents using the BatchPutDocument API or using one of the supported data sources. 
   */
  createIndex(callback?: (err: AWSError, data: Kendra.Types.CreateIndexResponse) => void): Request<Kendra.Types.CreateIndexResponse, AWSError>;
  /**
   * Creates a block list to exlcude certain queries from suggestions. Any query that contains words or phrases specified in the block list is blocked or filtered out from being shown as a suggestion. You need to provide the file location of your block list text file in your S3 bucket. In your text file, enter each block word or phrase on a separate line. For information on the current quota limits for block lists, see Quotas for Amazon Kendra.  CreateQuerySuggestionsBlockList is currently not supported in the Amazon Web Services GovCloud (US-West) region.
   */
  createQuerySuggestionsBlockList(params: Kendra.Types.CreateQuerySuggestionsBlockListRequest, callback?: (err: AWSError, data: Kendra.Types.CreateQuerySuggestionsBlockListResponse) => void): Request<Kendra.Types.CreateQuerySuggestionsBlockListResponse, AWSError>;
  /**
   * Creates a block list to exlcude certain queries from suggestions. Any query that contains words or phrases specified in the block list is blocked or filtered out from being shown as a suggestion. You need to provide the file location of your block list text file in your S3 bucket. In your text file, enter each block word or phrase on a separate line. For information on the current quota limits for block lists, see Quotas for Amazon Kendra.  CreateQuerySuggestionsBlockList is currently not supported in the Amazon Web Services GovCloud (US-West) region.
   */
  createQuerySuggestionsBlockList(callback?: (err: AWSError, data: Kendra.Types.CreateQuerySuggestionsBlockListResponse) => void): Request<Kendra.Types.CreateQuerySuggestionsBlockListResponse, AWSError>;
  /**
   * Creates a thesaurus for an index. The thesaurus contains a list of synonyms in Solr format.
   */
  createThesaurus(params: Kendra.Types.CreateThesaurusRequest, callback?: (err: AWSError, data: Kendra.Types.CreateThesaurusResponse) => void): Request<Kendra.Types.CreateThesaurusResponse, AWSError>;
  /**
   * Creates a thesaurus for an index. The thesaurus contains a list of synonyms in Solr format.
   */
  createThesaurus(callback?: (err: AWSError, data: Kendra.Types.CreateThesaurusResponse) => void): Request<Kendra.Types.CreateThesaurusResponse, AWSError>;
  /**
   * Deletes an Amazon Kendra data source. An exception is not thrown if the data source is already being deleted. While the data source is being deleted, the Status field returned by a call to the DescribeDataSource API is set to DELETING. For more information, see Deleting Data Sources.
   */
  deleteDataSource(params: Kendra.Types.DeleteDataSourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an Amazon Kendra data source. An exception is not thrown if the data source is already being deleted. While the data source is being deleted, the Status field returned by a call to the DescribeDataSource API is set to DELETING. For more information, see Deleting Data Sources.
   */
  deleteDataSource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes your Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code.
   */
  deleteExperience(params: Kendra.Types.DeleteExperienceRequest, callback?: (err: AWSError, data: Kendra.Types.DeleteExperienceResponse) => void): Request<Kendra.Types.DeleteExperienceResponse, AWSError>;
  /**
   * Deletes your Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code.
   */
  deleteExperience(callback?: (err: AWSError, data: Kendra.Types.DeleteExperienceResponse) => void): Request<Kendra.Types.DeleteExperienceResponse, AWSError>;
  /**
   * Removes an FAQ from an index.
   */
  deleteFaq(params: Kendra.Types.DeleteFaqRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes an FAQ from an index.
   */
  deleteFaq(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an existing Amazon Kendra index. An exception is not thrown if the index is already being deleted. While the index is being deleted, the Status field returned by a call to the DescribeIndex API is set to DELETING.
   */
  deleteIndex(params: Kendra.Types.DeleteIndexRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an existing Amazon Kendra index. An exception is not thrown if the index is already being deleted. While the index is being deleted, the Status field returned by a call to the DescribeIndex API is set to DELETING.
   */
  deleteIndex(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a group so that all users and sub groups that belong to the group can no longer access documents only available to that group. For example, after deleting the group "Summer Interns", all interns who belonged to that group no longer see intern-only documents in their search results. If you want to delete or replace users or sub groups of a group, you need to use the PutPrincipalMapping operation. For example, if a user in the group "Engineering" leaves the engineering team and another user takes their place, you provide an updated list of users or sub groups that belong to the "Engineering" group when calling PutPrincipalMapping. You can update your internal list of users or sub groups and input this list when calling PutPrincipalMapping.  DeletePrincipalMapping is currently not supported in the Amazon Web Services GovCloud (US-West) region.
   */
  deletePrincipalMapping(params: Kendra.Types.DeletePrincipalMappingRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a group so that all users and sub groups that belong to the group can no longer access documents only available to that group. For example, after deleting the group "Summer Interns", all interns who belonged to that group no longer see intern-only documents in their search results. If you want to delete or replace users or sub groups of a group, you need to use the PutPrincipalMapping operation. For example, if a user in the group "Engineering" leaves the engineering team and another user takes their place, you provide an updated list of users or sub groups that belong to the "Engineering" group when calling PutPrincipalMapping. You can update your internal list of users or sub groups and input this list when calling PutPrincipalMapping.  DeletePrincipalMapping is currently not supported in the Amazon Web Services GovCloud (US-West) region.
   */
  deletePrincipalMapping(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a block list used for query suggestions for an index. A deleted block list might not take effect right away. Amazon Kendra needs to refresh the entire suggestions list to add back the queries that were previously blocked.  DeleteQuerySuggestionsBlockList is currently not supported in the Amazon Web Services GovCloud (US-West) region.
   */
  deleteQuerySuggestionsBlockList(params: Kendra.Types.DeleteQuerySuggestionsBlockListRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a block list used for query suggestions for an index. A deleted block list might not take effect right away. Amazon Kendra needs to refresh the entire suggestions list to add back the queries that were previously blocked.  DeleteQuerySuggestionsBlockList is currently not supported in the Amazon Web Services GovCloud (US-West) region.
   */
  deleteQuerySuggestionsBlockList(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an existing Amazon Kendra thesaurus. 
   */
  deleteThesaurus(params: Kendra.Types.DeleteThesaurusRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an existing Amazon Kendra thesaurus. 
   */
  deleteThesaurus(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Gets information about an Amazon Kendra data source.
   */
  describeDataSource(params: Kendra.Types.DescribeDataSourceRequest, callback?: (err: AWSError, data: Kendra.Types.DescribeDataSourceResponse) => void): Request<Kendra.Types.DescribeDataSourceResponse, AWSError>;
  /**
   * Gets information about an Amazon Kendra data source.
   */
  describeDataSource(callback?: (err: AWSError, data: Kendra.Types.DescribeDataSourceResponse) => void): Request<Kendra.Types.DescribeDataSourceResponse, AWSError>;
  /**
   * Gets information about your Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code.
   */
  describeExperience(params: Kendra.Types.DescribeExperienceRequest, callback?: (err: AWSError, data: Kendra.Types.DescribeExperienceResponse) => void): Request<Kendra.Types.DescribeExperienceResponse, AWSError>;
  /**
   * Gets information about your Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code.
   */
  describeExperience(callback?: (err: AWSError, data: Kendra.Types.DescribeExperienceResponse) => void): Request<Kendra.Types.DescribeExperienceResponse, AWSError>;
  /**
   * Gets information about an FAQ list.
   */
  describeFaq(params: Kendra.Types.DescribeFaqRequest, callback?: (err: AWSError, data: Kendra.Types.DescribeFaqResponse) => void): Request<Kendra.Types.DescribeFaqResponse, AWSError>;
  /**
   * Gets information about an FAQ list.
   */
  describeFaq(callback?: (err: AWSError, data: Kendra.Types.DescribeFaqResponse) => void): Request<Kendra.Types.DescribeFaqResponse, AWSError>;
  /**
   * Describes an existing Amazon Kendra index.
   */
  describeIndex(params: Kendra.Types.DescribeIndexRequest, callback?: (err: AWSError, data: Kendra.Types.DescribeIndexResponse) => void): Request<Kendra.Types.DescribeIndexResponse, AWSError>;
  /**
   * Describes an existing Amazon Kendra index.
   */
  describeIndex(callback?: (err: AWSError, data: Kendra.Types.DescribeIndexResponse) => void): Request<Kendra.Types.DescribeIndexResponse, AWSError>;
  /**
   * Describes the processing of PUT and DELETE actions for mapping users to their groups. This includes information on the status of actions currently processing or yet to be processed, when actions were last updated, when actions were received by Amazon Kendra, the latest action that should process and apply after other actions, and useful error messages if an action could not be processed.  DescribePrincipalMapping is currently not supported in the Amazon Web Services GovCloud (US-West) region.
   */
  describePrincipalMapping(params: Kendra.Types.DescribePrincipalMappingRequest, callback?: (err: AWSError, data: Kendra.Types.DescribePrincipalMappingResponse) => void): Request<Kendra.Types.DescribePrincipalMappingResponse, AWSError>;
  /**
   * Describes the processing of PUT and DELETE actions for mapping users to their groups. This includes information on the status of actions currently processing or yet to be processed, when actions were last updated, when actions were received by Amazon Kendra, the latest action that should process and apply after other actions, and useful error messages if an action could not be processed.  DescribePrincipalMapping is currently not supported in the Amazon Web Services GovCloud (US-West) region.
   */
  describePrincipalMapping(callback?: (err: AWSError, data: Kendra.Types.DescribePrincipalMappingResponse) => void): Request<Kendra.Types.DescribePrincipalMappingResponse, AWSError>;
  /**
   * Describes a block list used for query suggestions for an index. This is used to check the current settings that are applied to a block list.  DescribeQuerySuggestionsBlockList is currently not supported in the Amazon Web Services GovCloud (US-West) region.
   */
  describeQuerySuggestionsBlockList(params: Kendra.Types.DescribeQuerySuggestionsBlockListRequest, callback?: (err: AWSError, data: Kendra.Types.DescribeQuerySuggestionsBlockListResponse) => void): Request<Kendra.Types.DescribeQuerySuggestionsBlockListResponse, AWSError>;
  /**
   * Describes a block list used for query suggestions for an index. This is used to check the current settings that are applied to a block list.  DescribeQuerySuggestionsBlockList is currently not supported in the Amazon Web Services GovCloud (US-West) region.
   */
  describeQuerySuggestionsBlockList(callback?: (err: AWSError, data: Kendra.Types.DescribeQuerySuggestionsBlockListResponse) => void): Request<Kendra.Types.DescribeQuerySuggestionsBlockListResponse, AWSError>;
  /**
   * Describes the settings of query suggestions for an index. This is used to check the current settings applied to query suggestions.  DescribeQuerySuggestionsConfig is currently not supported in the Amazon Web Services GovCloud (US-West) region.
   */
  describeQuerySuggestionsConfig(params: Kendra.Types.DescribeQuerySuggestionsConfigRequest, callback?: (err: AWSError, data: Kendra.Types.DescribeQuerySuggestionsConfigResponse) => void): Request<Kendra.Types.DescribeQuerySuggestionsConfigResponse, AWSError>;
  /**
   * Describes the settings of query suggestions for an index. This is used to check the current settings applied to query suggestions.  DescribeQuerySuggestionsConfig is currently not supported in the Amazon Web Services GovCloud (US-West) region.
   */
  describeQuerySuggestionsConfig(callback?: (err: AWSError, data: Kendra.Types.DescribeQuerySuggestionsConfigResponse) => void): Request<Kendra.Types.DescribeQuerySuggestionsConfigResponse, AWSError>;
  /**
   * Describes an existing Amazon Kendra thesaurus.
   */
  describeThesaurus(params: Kendra.Types.DescribeThesaurusRequest, callback?: (err: AWSError, data: Kendra.Types.DescribeThesaurusResponse) => void): Request<Kendra.Types.DescribeThesaurusResponse, AWSError>;
  /**
   * Describes an existing Amazon Kendra thesaurus.
   */
  describeThesaurus(callback?: (err: AWSError, data: Kendra.Types.DescribeThesaurusResponse) => void): Request<Kendra.Types.DescribeThesaurusResponse, AWSError>;
  /**
   * Prevents users or groups in your Amazon Web Services SSO identity source from accessing your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code.
   */
  disassociateEntitiesFromExperience(params: Kendra.Types.DisassociateEntitiesFromExperienceRequest, callback?: (err: AWSError, data: Kendra.Types.DisassociateEntitiesFromExperienceResponse) => void): Request<Kendra.Types.DisassociateEntitiesFromExperienceResponse, AWSError>;
  /**
   * Prevents users or groups in your Amazon Web Services SSO identity source from accessing your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code.
   */
  disassociateEntitiesFromExperience(callback?: (err: AWSError, data: Kendra.Types.DisassociateEntitiesFromExperienceResponse) => void): Request<Kendra.Types.DisassociateEntitiesFromExperienceResponse, AWSError>;
  /**
   * Removes the specific permissions of users or groups in your Amazon Web Services SSO identity source with access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code.
   */
  disassociatePersonasFromEntities(params: Kendra.Types.DisassociatePersonasFromEntitiesRequest, callback?: (err: AWSError, data: Kendra.Types.DisassociatePersonasFromEntitiesResponse) => void): Request<Kendra.Types.DisassociatePersonasFromEntitiesResponse, AWSError>;
  /**
   * Removes the specific permissions of users or groups in your Amazon Web Services SSO identity source with access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code.
   */
  disassociatePersonasFromEntities(callback?: (err: AWSError, data: Kendra.Types.DisassociatePersonasFromEntitiesResponse) => void): Request<Kendra.Types.DisassociatePersonasFromEntitiesResponse, AWSError>;
  /**
   * Fetches the queries that are suggested to your users.  GetQuerySuggestions is currently not supported in the Amazon Web Services GovCloud (US-West) region.
   */
  getQuerySuggestions(params: Kendra.Types.GetQuerySuggestionsRequest, callback?: (err: AWSError, data: Kendra.Types.GetQuerySuggestionsResponse) => void): Request<Kendra.Types.GetQuerySuggestionsResponse, AWSError>;
  /**
   * Fetches the queries that are suggested to your users.  GetQuerySuggestions is currently not supported in the Amazon Web Services GovCloud (US-West) region.
   */
  getQuerySuggestions(callback?: (err: AWSError, data: Kendra.Types.GetQuerySuggestionsResponse) => void): Request<Kendra.Types.GetQuerySuggestionsResponse, AWSError>;
  /**
   * Retrieves search metrics data. The data provides a snapshot of how your users interact with your search application and how effective the application is.
   */
  getSnapshots(params: Kendra.Types.GetSnapshotsRequest, callback?: (err: AWSError, data: Kendra.Types.GetSnapshotsResponse) => void): Request<Kendra.Types.GetSnapshotsResponse, AWSError>;
  /**
   * Retrieves search metrics data. The data provides a snapshot of how your users interact with your search application and how effective the application is.
   */
  getSnapshots(callback?: (err: AWSError, data: Kendra.Types.GetSnapshotsResponse) => void): Request<Kendra.Types.GetSnapshotsResponse, AWSError>;
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
   * Lists specific permissions of users and groups with access to your Amazon Kendra experience.
   */
  listEntityPersonas(params: Kendra.Types.ListEntityPersonasRequest, callback?: (err: AWSError, data: Kendra.Types.ListEntityPersonasResponse) => void): Request<Kendra.Types.ListEntityPersonasResponse, AWSError>;
  /**
   * Lists specific permissions of users and groups with access to your Amazon Kendra experience.
   */
  listEntityPersonas(callback?: (err: AWSError, data: Kendra.Types.ListEntityPersonasResponse) => void): Request<Kendra.Types.ListEntityPersonasResponse, AWSError>;
  /**
   * Lists users or groups in your Amazon Web Services SSO identity source that are granted access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code.
   */
  listExperienceEntities(params: Kendra.Types.ListExperienceEntitiesRequest, callback?: (err: AWSError, data: Kendra.Types.ListExperienceEntitiesResponse) => void): Request<Kendra.Types.ListExperienceEntitiesResponse, AWSError>;
  /**
   * Lists users or groups in your Amazon Web Services SSO identity source that are granted access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code.
   */
  listExperienceEntities(callback?: (err: AWSError, data: Kendra.Types.ListExperienceEntitiesResponse) => void): Request<Kendra.Types.ListExperienceEntitiesResponse, AWSError>;
  /**
   * Lists one or more Amazon Kendra experiences. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code.
   */
  listExperiences(params: Kendra.Types.ListExperiencesRequest, callback?: (err: AWSError, data: Kendra.Types.ListExperiencesResponse) => void): Request<Kendra.Types.ListExperiencesResponse, AWSError>;
  /**
   * Lists one or more Amazon Kendra experiences. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code.
   */
  listExperiences(callback?: (err: AWSError, data: Kendra.Types.ListExperiencesResponse) => void): Request<Kendra.Types.ListExperiencesResponse, AWSError>;
  /**
   * Gets a list of FAQ lists associated with an index.
   */
  listFaqs(params: Kendra.Types.ListFaqsRequest, callback?: (err: AWSError, data: Kendra.Types.ListFaqsResponse) => void): Request<Kendra.Types.ListFaqsResponse, AWSError>;
  /**
   * Gets a list of FAQ lists associated with an index.
   */
  listFaqs(callback?: (err: AWSError, data: Kendra.Types.ListFaqsResponse) => void): Request<Kendra.Types.ListFaqsResponse, AWSError>;
  /**
   * Provides a list of groups that are mapped to users before a given ordering or timestamp identifier.  ListGroupsOlderThanOrderingId is currently not supported in the Amazon Web Services GovCloud (US-West) region.
   */
  listGroupsOlderThanOrderingId(params: Kendra.Types.ListGroupsOlderThanOrderingIdRequest, callback?: (err: AWSError, data: Kendra.Types.ListGroupsOlderThanOrderingIdResponse) => void): Request<Kendra.Types.ListGroupsOlderThanOrderingIdResponse, AWSError>;
  /**
   * Provides a list of groups that are mapped to users before a given ordering or timestamp identifier.  ListGroupsOlderThanOrderingId is currently not supported in the Amazon Web Services GovCloud (US-West) region.
   */
  listGroupsOlderThanOrderingId(callback?: (err: AWSError, data: Kendra.Types.ListGroupsOlderThanOrderingIdResponse) => void): Request<Kendra.Types.ListGroupsOlderThanOrderingIdResponse, AWSError>;
  /**
   * Lists the Amazon Kendra indexes that you created.
   */
  listIndices(params: Kendra.Types.ListIndicesRequest, callback?: (err: AWSError, data: Kendra.Types.ListIndicesResponse) => void): Request<Kendra.Types.ListIndicesResponse, AWSError>;
  /**
   * Lists the Amazon Kendra indexes that you created.
   */
  listIndices(callback?: (err: AWSError, data: Kendra.Types.ListIndicesResponse) => void): Request<Kendra.Types.ListIndicesResponse, AWSError>;
  /**
   * Lists the block lists used for query suggestions for an index. For information on the current quota limits for block lists, see Quotas for Amazon Kendra.  ListQuerySuggestionsBlockLists is currently not supported in the Amazon Web Services GovCloud (US-West) region.
   */
  listQuerySuggestionsBlockLists(params: Kendra.Types.ListQuerySuggestionsBlockListsRequest, callback?: (err: AWSError, data: Kendra.Types.ListQuerySuggestionsBlockListsResponse) => void): Request<Kendra.Types.ListQuerySuggestionsBlockListsResponse, AWSError>;
  /**
   * Lists the block lists used for query suggestions for an index. For information on the current quota limits for block lists, see Quotas for Amazon Kendra.  ListQuerySuggestionsBlockLists is currently not supported in the Amazon Web Services GovCloud (US-West) region.
   */
  listQuerySuggestionsBlockLists(callback?: (err: AWSError, data: Kendra.Types.ListQuerySuggestionsBlockListsResponse) => void): Request<Kendra.Types.ListQuerySuggestionsBlockListsResponse, AWSError>;
  /**
   * Gets a list of tags associated with a specified resource. Indexes, FAQs, and data sources can have tags associated with them.
   */
  listTagsForResource(params: Kendra.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: Kendra.Types.ListTagsForResourceResponse) => void): Request<Kendra.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Gets a list of tags associated with a specified resource. Indexes, FAQs, and data sources can have tags associated with them.
   */
  listTagsForResource(callback?: (err: AWSError, data: Kendra.Types.ListTagsForResourceResponse) => void): Request<Kendra.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists the Amazon Kendra thesauri associated with an index.
   */
  listThesauri(params: Kendra.Types.ListThesauriRequest, callback?: (err: AWSError, data: Kendra.Types.ListThesauriResponse) => void): Request<Kendra.Types.ListThesauriResponse, AWSError>;
  /**
   * Lists the Amazon Kendra thesauri associated with an index.
   */
  listThesauri(callback?: (err: AWSError, data: Kendra.Types.ListThesauriResponse) => void): Request<Kendra.Types.ListThesauriResponse, AWSError>;
  /**
   * Maps users to their groups so that you only need to provide the user ID when you issue the query. You can also map sub groups to groups. For example, the group "Company Intellectual Property Teams" includes sub groups "Research" and "Engineering". These sub groups include their own list of users or people who work in these teams. Only users who work in research and engineering, and therefore belong in the intellectual property group, can see top-secret company documents in their search results. You map users to their groups when you want to filter search results for different users based on their group’s access to documents. For more information on filtering search results for different users, see Filtering on user context. If more than five PUT actions for a group are currently processing, a validation exception is thrown.  PutPrincipalMapping is currently not supported in the Amazon Web Services GovCloud (US-West) region.
   */
  putPrincipalMapping(params: Kendra.Types.PutPrincipalMappingRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Maps users to their groups so that you only need to provide the user ID when you issue the query. You can also map sub groups to groups. For example, the group "Company Intellectual Property Teams" includes sub groups "Research" and "Engineering". These sub groups include their own list of users or people who work in these teams. Only users who work in research and engineering, and therefore belong in the intellectual property group, can see top-secret company documents in their search results. You map users to their groups when you want to filter search results for different users based on their group’s access to documents. For more information on filtering search results for different users, see Filtering on user context. If more than five PUT actions for a group are currently processing, a validation exception is thrown.  PutPrincipalMapping is currently not supported in the Amazon Web Services GovCloud (US-West) region.
   */
  putPrincipalMapping(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Searches an active index. Use this API to search your documents using query. The Query API enables to do faceted search and to filter results based on document attributes. It also enables you to provide user context that Amazon Kendra uses to enforce document access control in the search results. Amazon Kendra searches your index for text content and question and answer (FAQ) content. By default the response contains three types of results.   Relevant passages   Matching FAQs   Relevant documents   You can specify that the query return only one type of result using the QueryResultTypeConfig parameter. Each query returns the 100 most relevant results. 
   */
  query(params: Kendra.Types.QueryRequest, callback?: (err: AWSError, data: Kendra.Types.QueryResult) => void): Request<Kendra.Types.QueryResult, AWSError>;
  /**
   * Searches an active index. Use this API to search your documents using query. The Query API enables to do faceted search and to filter results based on document attributes. It also enables you to provide user context that Amazon Kendra uses to enforce document access control in the search results. Amazon Kendra searches your index for text content and question and answer (FAQ) content. By default the response contains three types of results.   Relevant passages   Matching FAQs   Relevant documents   You can specify that the query return only one type of result using the QueryResultTypeConfig parameter. Each query returns the 100 most relevant results. 
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
   * Stops a synchronization job that is currently running. You can't stop a scheduled synchronization job.
   */
  stopDataSourceSyncJob(params: Kendra.Types.StopDataSourceSyncJobRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Stops a synchronization job that is currently running. You can't stop a scheduled synchronization job.
   */
  stopDataSourceSyncJob(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Enables you to provide feedback to Amazon Kendra to improve the performance of your index.  SubmitFeedback is currently not supported in the Amazon Web Services GovCloud (US-West) region.
   */
  submitFeedback(params: Kendra.Types.SubmitFeedbackRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Enables you to provide feedback to Amazon Kendra to improve the performance of your index.  SubmitFeedback is currently not supported in the Amazon Web Services GovCloud (US-West) region.
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
   * Updates your Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code.
   */
  updateExperience(params: Kendra.Types.UpdateExperienceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates your Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code.
   */
  updateExperience(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates an existing Amazon Kendra index.
   */
  updateIndex(params: Kendra.Types.UpdateIndexRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates an existing Amazon Kendra index.
   */
  updateIndex(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates a block list used for query suggestions for an index. Updates to a block list might not take effect right away. Amazon Kendra needs to refresh the entire suggestions list to apply any updates to the block list. Other changes not related to the block list apply immediately. If a block list is updating, then you need to wait for the first update to finish before submitting another update. Amazon Kendra supports partial updates, so you only need to provide the fields you want to update.  UpdateQuerySuggestionsBlockList is currently not supported in the Amazon Web Services GovCloud (US-West) region.
   */
  updateQuerySuggestionsBlockList(params: Kendra.Types.UpdateQuerySuggestionsBlockListRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates a block list used for query suggestions for an index. Updates to a block list might not take effect right away. Amazon Kendra needs to refresh the entire suggestions list to apply any updates to the block list. Other changes not related to the block list apply immediately. If a block list is updating, then you need to wait for the first update to finish before submitting another update. Amazon Kendra supports partial updates, so you only need to provide the fields you want to update.  UpdateQuerySuggestionsBlockList is currently not supported in the Amazon Web Services GovCloud (US-West) region.
   */
  updateQuerySuggestionsBlockList(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the settings of query suggestions for an index. Amazon Kendra supports partial updates, so you only need to provide the fields you want to update. If an update is currently processing (i.e. 'happening'), you need to wait for the update to finish before making another update. Updates to query suggestions settings might not take effect right away. The time for your updated settings to take effect depends on the updates made and the number of search queries in your index. You can still enable/disable query suggestions at any time.  UpdateQuerySuggestionsConfig is currently not supported in the Amazon Web Services GovCloud (US-West) region.
   */
  updateQuerySuggestionsConfig(params: Kendra.Types.UpdateQuerySuggestionsConfigRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the settings of query suggestions for an index. Amazon Kendra supports partial updates, so you only need to provide the fields you want to update. If an update is currently processing (i.e. 'happening'), you need to wait for the update to finish before making another update. Updates to query suggestions settings might not take effect right away. The time for your updated settings to take effect depends on the updates made and the number of search queries in your index. You can still enable/disable query suggestions at any time.  UpdateQuerySuggestionsConfig is currently not supported in the Amazon Web Services GovCloud (US-West) region.
   */
  updateQuerySuggestionsConfig(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates a thesaurus file associated with an index.
   */
  updateThesaurus(params: Kendra.Types.UpdateThesaurusRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates a thesaurus file associated with an index.
   */
  updateThesaurus(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
}
declare namespace Kendra {
  export interface AccessControlListConfiguration {
    /**
     * Path to the Amazon Web Services S3 bucket that contains the ACL files.
     */
    KeyPath?: S3ObjectKey;
  }
  export interface AclConfiguration {
    /**
     * A list of groups, separated by semi-colons, that filters a query response based on user context. The document is only returned to users that are in one of the groups specified in the UserContext field of the Query API.
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
  export type AssociateEntitiesToExperienceFailedEntityList = FailedEntity[];
  export interface AssociateEntitiesToExperienceRequest {
    /**
     * The identifier of your Amazon Kendra experience.
     */
    Id: ExperienceId;
    /**
     * The identifier of the index for your Amazon Kendra experience.
     */
    IndexId: IndexId;
    /**
     * Lists users or groups in your Amazon Web Services SSO identity source.
     */
    EntityList: AssociateEntityList;
  }
  export interface AssociateEntitiesToExperienceResponse {
    /**
     * Lists the users or groups in your Amazon Web Services SSO identity source that failed to properly configure with your Amazon Kendra experience.
     */
    FailedEntityList?: AssociateEntitiesToExperienceFailedEntityList;
  }
  export type AssociateEntityList = EntityConfiguration[];
  export interface AssociatePersonasToEntitiesRequest {
    /**
     * The identifier of your Amazon Kendra experience.
     */
    Id: ExperienceId;
    /**
     * The identifier of the index for your Amazon Kendra experience.
     */
    IndexId: IndexId;
    /**
     * The personas that define the specific permissions of users or groups in your Amazon Web Services SSO identity source. The available personas or access roles are Owner and Viewer. For more information on these personas, see Providing access to your search page.
     */
    Personas: EntityPersonaConfigurationList;
  }
  export interface AssociatePersonasToEntitiesResponse {
    /**
     * Lists the users or groups in your Amazon Web Services SSO identity source that failed to properly configure with your Amazon Kendra experience.
     */
    FailedEntityList?: FailedEntityList;
  }
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
     * Performs a greater than operation on two document attributes. Use with a document attribute of type Date or Long.
     */
    GreaterThan?: DocumentAttribute;
    /**
     * Performs a greater or equals than operation on two document attributes. Use with a document attribute of type Date or Long.
     */
    GreaterThanOrEquals?: DocumentAttribute;
    /**
     * Performs a less than operation on two document attributes. Use with a document attribute of type Date or Long.
     */
    LessThan?: DocumentAttribute;
    /**
     * Performs a less than or equals operation on two document attributes. Use with a document attribute of type Date or Long.
     */
    LessThanOrEquals?: DocumentAttribute;
  }
  export type AttributeFilterList = AttributeFilter[];
  export interface AuthenticationConfiguration {
    /**
     * The list of configuration information that's required to connect to and crawl a website host using basic authentication credentials. The list includes the name and port number of the website host.
     */
    BasicAuthentication?: BasicAuthenticationConfigurationList;
  }
  export interface BasicAuthenticationConfiguration {
    /**
     * The name of the website host you want to connect to using authentication credentials. For example, the host name of https://a.example.com/page1.html is "a.example.com".
     */
    Host: Host;
    /**
     * The port number of the website host you want to connect to using authentication credentials. For example, the port for https://a.example.com/page1.html is 443, the standard port for HTTPS.
     */
    Port: Port;
    /**
     * Your secret ARN, which you can create in Secrets Manager  You use a secret if basic authentication credentials are required to connect to a website. The secret stores your credentials of user name and password.
     */
    Credentials: SecretArn;
  }
  export type BasicAuthenticationConfigurationList = BasicAuthenticationConfiguration[];
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
  export interface BatchGetDocumentStatusRequest {
    /**
     * The identifier of the index to add documents to. The index ID is returned by the CreateIndex  API.
     */
    IndexId: IndexId;
    /**
     * A list of DocumentInfo objects that identify the documents for which to get the status. You identify the documents by their document ID and optional attributes.
     */
    DocumentInfoList: DocumentInfoList;
  }
  export interface BatchGetDocumentStatusResponse {
    /**
     * A list of documents that Amazon Kendra couldn't get the status for. The list includes the ID of the document and the reason that the status couldn't be found.
     */
    Errors?: BatchGetDocumentStatusResponseErrors;
    /**
     * The status of documents. The status indicates if the document is waiting to be indexed, is in the process of indexing, has completed indexing, or failed indexing. If a document failed indexing, the status provides the reason why.
     */
    DocumentStatusList?: DocumentStatusList;
  }
  export interface BatchGetDocumentStatusResponseError {
    /**
     * The unique identifier of the document whose status could not be retrieved.
     */
    DocumentId?: DocumentId;
    /**
     * Indicates the source of the error.
     */
    ErrorCode?: ErrorCode;
    /**
     * States that the API could not get the status of a document. This could be because the request is not valid or there is a system error.
     */
    ErrorMessage?: ErrorMessage;
  }
  export type BatchGetDocumentStatusResponseErrors = BatchGetDocumentStatusResponseError[];
  export interface BatchPutDocumentRequest {
    /**
     * The identifier of the index to add the documents to. You need to create the index first using the CreateIndex API.
     */
    IndexId: IndexId;
    /**
     * The Amazon Resource Name (ARN) of a role that is allowed to run the BatchPutDocument API. For more information, see IAM Roles for Amazon Kendra.
     */
    RoleArn?: RoleArn;
    /**
     * One or more documents to add to the index. Documents have the following file size limits.   5 MB total size for inline documents   50 MB total size for files from an S3 bucket   5 MB extracted text for any file   For more information about file size and transaction per second quotas, see Quotas.
     */
    Documents: DocumentList;
    /**
     * Configuration information for altering your document metadata and content during the document ingestion process when you use the BatchPutDocument API. For more information on how to create, modify and delete document metadata, or make other content alterations when you ingest documents into Amazon Kendra, see Customizing document metadata during the ingestion process.
     */
    CustomDocumentEnrichmentConfiguration?: CustomDocumentEnrichmentConfiguration;
  }
  export interface BatchPutDocumentResponse {
    /**
     * A list of documents that were not added to the index because the document failed a validation check. Each document contains an error message that indicates why the document couldn't be added to the index. If there was an error adding a document to an index the error is reported in your Amazon Web Services CloudWatch log. For more information, see Monitoring Amazon Kendra with Amazon CloudWatch Logs 
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
  export interface BoxConfiguration {
    /**
     * The identifier of the Box Enterprise platform. You can find the enterprise ID in the Box Developer Console settings or when you create an app in Box and download your authentication credentials. For example, 801234567.
     */
    EnterpriseId: EnterpriseId;
    /**
     * The Amazon Resource Name (ARN) of an Secrets Manager secret that contains the key-value pairs required to connect to your Box platform. The secret must contain a JSON structure with the following keys:   clientID—The identifier of the client OAuth 2.0 authentication application created in Box.   clientSecret—A set of characters known only to the OAuth 2.0 authentication application created in Box.   publicKeyId—The identifier of the public key contained within an identity certificate.   privateKey—A set of characters that make up an encryption key.   passphrase—A set of characters that act like a password.   You create an application in Box to generate the keys or credentials required for the secret. For more information, see Authentication for a Box data source.
     */
    SecretArn: SecretArn;
    /**
     *  TRUE to use the Slack change log to determine which documents require updating in the index. Depending on the data source change log's size, it may take longer for Amazon Kendra to use the change log than to scan all of your documents.
     */
    UseChangeLog?: Boolean;
    /**
     *  TRUE to index comments.
     */
    CrawlComments?: Boolean;
    /**
     *  TRUE to index the contents of tasks.
     */
    CrawlTasks?: Boolean;
    /**
     *  TRUE to index web links.
     */
    CrawlWebLinks?: Boolean;
    /**
     * A list of DataSourceToIndexFieldMapping objects that map attributes or field names of Box files to Amazon Kendra index field names. To create custom fields, use the UpdateIndex API before you map to Box fields. For more information, see Mapping data source fields. The Box field names must exist in your Box custom metadata.
     */
    FileFieldMappings?: DataSourceToIndexFieldMappingList;
    /**
     * A list of DataSourceToIndexFieldMapping objects that map attributes or field names of Box tasks to Amazon Kendra index field names. To create custom fields, use the UpdateIndex API before you map to Box fields. For more information, see Mapping data source fields. The Box field names must exist in your Box custom metadata.
     */
    TaskFieldMappings?: DataSourceToIndexFieldMappingList;
    /**
     * A list of DataSourceToIndexFieldMapping objects that map attributes or field names of Box comments to Amazon Kendra index field names. To create custom fields, use the UpdateIndex API before you map to Box fields. For more information, see Mapping data source fields. The Box field names must exist in your Box custom metadata.
     */
    CommentFieldMappings?: DataSourceToIndexFieldMappingList;
    /**
     * A list of DataSourceToIndexFieldMapping objects that map attributes or field names of Box web links to Amazon Kendra index field names. To create custom fields, use the UpdateIndex API before you map to Box fields. For more information, see Mapping data source fields. The Box field names must exist in your Box custom metadata.
     */
    WebLinkFieldMappings?: DataSourceToIndexFieldMappingList;
    /**
     * A list of regular expression patterns to include certain files and folders in your Box platform. Files and folders that match the patterns are included in the index. Files and folders that don't match the patterns are excluded from the index. If a file or folder matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the file or folder isn't included in the index.
     */
    InclusionPatterns?: DataSourceInclusionsExclusionsStrings;
    /**
     * A list of regular expression patterns to exclude certain files and folders from your Box platform. Files and folders that match the patterns are excluded from the index.Files and folders that don't match the patterns are included in the index. If a file or folder matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the file or folder isn't included in the index.
     */
    ExclusionPatterns?: DataSourceInclusionsExclusionsStrings;
    /**
     * Configuration information for an Amazon VPC to connect to your Box. For more information, see Configuring a VPC.
     */
    VpcConfiguration?: DataSourceVpcConfiguration;
  }
  export interface CapacityUnitsConfiguration {
    /**
     * The amount of extra storage capacity for an index. A single capacity unit provides 30 GB of storage space or 100,000 documents, whichever is reached first.
     */
    StorageCapacityUnits: StorageCapacityUnit;
    /**
     * The amount of extra query capacity for an index and GetQuerySuggestions capacity. A single extra capacity unit for an index provides 0.1 queries per second or approximately 8,000 queries per day.  GetQuerySuggestions capacity is five times the provisioned query capacity for an index, or the base capacity of 2.5 calls per second, whichever is higher. For example, the base capacity for an index is 0.1 queries per second, and GetQuerySuggestions capacity has a base of 2.5 calls per second. If you add another 0.1 queries per second to total 0.2 queries per second for an index, the GetQuerySuggestions capacity is 2.5 calls per second (higher than five times 0.2 queries per second).
     */
    QueryCapacityUnits: QueryCapacityUnit;
  }
  export type ChangeDetectingColumns = ColumnName[];
  export type ClaimRegex = string;
  export interface ClearQuerySuggestionsRequest {
    /**
     * The identifier of the index you want to clear query suggestions from.
     */
    IndexId: IndexId;
  }
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
     * An array of objects that map database column names to the corresponding fields in an index. You must first create the fields in the index using the UpdateIndex API.
     */
    FieldMappings?: DataSourceToIndexFieldMappingList;
    /**
     * One to five columns that indicate when a document in the database has changed.
     */
    ChangeDetectingColumns: ChangeDetectingColumns;
  }
  export type ColumnName = string;
  export type ConditionOperator = "GreaterThan"|"GreaterThanOrEquals"|"LessThan"|"LessThanOrEquals"|"Equals"|"NotEquals"|"Contains"|"NotContains"|"Exists"|"NotExists"|"BeginsWith"|string;
  export interface ConfluenceAttachmentConfiguration {
    /**
     * Indicates whether Amazon Kendra indexes attachments to the pages and blogs in the Confluence data source. 
     */
    CrawlAttachments?: Boolean;
    /**
     * Maps attributes or field names of Confluence attachments to Amazon Kendra index field names. To create custom fields, use the UpdateIndex API before you map to Confluence fields. For more information, see Mapping data source fields. The Confluence data source field names must exist in your Confluence custom metadata. If you specify the AttachentFieldMappings parameter, you must specify at least one field mapping.
     */
    AttachmentFieldMappings?: ConfluenceAttachmentFieldMappingsList;
  }
  export type ConfluenceAttachmentFieldMappingsList = ConfluenceAttachmentToIndexFieldMapping[];
  export type ConfluenceAttachmentFieldName = "AUTHOR"|"CONTENT_TYPE"|"CREATED_DATE"|"DISPLAY_URL"|"FILE_SIZE"|"ITEM_TYPE"|"PARENT_ID"|"SPACE_KEY"|"SPACE_NAME"|"URL"|"VERSION"|string;
  export interface ConfluenceAttachmentToIndexFieldMapping {
    /**
     * The name of the field in the data source.  You must first create the index field using the UpdateIndex API. 
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
     * Maps attributes or field names of Confluence blogs to Amazon Kendra index field names. To create custom fields, use the UpdateIndex API before you map to Confluence fields. For more information, see Mapping data source fields. The Confluence data source field names must exist in your Confluence custom metadata. If you specify the BlogFieldMappings parameter, you must specify at least one field mapping.
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
     * The Amazon Resource Name (ARN) of an Secrets Manager secret that contains the key-value pairs required to connect to your Confluence server. The secret must contain a JSON structure with the following keys:   username—The user name or email address of a user with administrative privileges for the Confluence server.   password—The password associated with the user logging in to the Confluence server.  
     */
    SecretArn: SecretArn;
    /**
     * Specifies the version of the Confluence installation that you are connecting to.
     */
    Version: ConfluenceVersion;
    /**
     * Configuration information for indexing Confluence spaces.
     */
    SpaceConfiguration?: ConfluenceSpaceConfiguration;
    /**
     * Configuration information for indexing Confluence pages.
     */
    PageConfiguration?: ConfluencePageConfiguration;
    /**
     * Configuration information for indexing Confluence blogs.
     */
    BlogConfiguration?: ConfluenceBlogConfiguration;
    /**
     * Configuration information for indexing attachments to Confluence blogs and pages.
     */
    AttachmentConfiguration?: ConfluenceAttachmentConfiguration;
    /**
     * Configuration information for an Amazon Virtual Private Cloud to connect to your Confluence. For more information, see Configuring a VPC.
     */
    VpcConfiguration?: DataSourceVpcConfiguration;
    /**
     * A list of regular expression patterns to include certain blog posts, pages, spaces, or attachments in your Confluence. Content that matches the patterns are included in the index. Content that doesn't match the patterns is excluded from the index. If content matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the content isn't included in the index.
     */
    InclusionPatterns?: DataSourceInclusionsExclusionsStrings;
    /**
     * &gt;A list of regular expression patterns to exclude certain blog posts, pages, spaces, or attachments in your Confluence. Content that matches the patterns are excluded from the index. Content that doesn't match the patterns is included in the index. If content matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the content isn't included in the index.
     */
    ExclusionPatterns?: DataSourceInclusionsExclusionsStrings;
  }
  export interface ConfluencePageConfiguration {
    /**
     * &gt;Maps attributes or field names of Confluence pages to Amazon Kendra index field names. To create custom fields, use the UpdateIndex API before you map to Confluence fields. For more information, see Mapping data source fields. The Confluence data source field names must exist in your Confluence custom metadata. If you specify the PageFieldMappings parameter, you must specify at least one field mapping.
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
     * Maps attributes or field names of Confluence spaces to Amazon Kendra index field names. To create custom fields, use the UpdateIndex API before you map to Confluence fields. For more information, see Mapping data source fields. The Confluence data source field names must exist in your Confluence custom metadata. If you specify the SpaceFieldMappings parameter, you must specify at least one field mapping.
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
     * The Amazon Resource Name (ARN) of credentials stored in Secrets Manager. The credentials should be a user/password pair. For more information, see Using a Database Data Source. For more information about Secrets Manager, see  What Is Secrets Manager in the  Secrets Manager  user guide.
     */
    SecretArn: SecretArn;
  }
  export interface ContentSourceConfiguration {
    /**
     * The identifier of the data sources you want to use for your Amazon Kendra experience.
     */
    DataSourceIds?: DataSourceIdList;
    /**
     * The identifier of the FAQs that you want to use for your Amazon Kendra experience.
     */
    FaqIds?: FaqIdsList;
    /**
     *  TRUE to use documents you indexed directly using the BatchPutDocument API.
     */
    DirectPutContent?: Boolean;
  }
  export type ContentType = "PDF"|"HTML"|"MS_WORD"|"PLAIN_TEXT"|"PPT"|string;
  export interface Correction {
    /**
     * The zero-based location in the response string or text where the corrected word starts.
     */
    BeginOffset?: Integer;
    /**
     * The zero-based location in the response string or text where the corrected word ends.
     */
    EndOffset?: Integer;
    /**
     * The string or text of a misspelled word in a query.
     */
    Term?: String;
    /**
     * The string or text of a corrected misspelled word in a query.
     */
    CorrectedTerm?: String;
  }
  export type CorrectionList = Correction[];
  export type CrawlDepth = number;
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
     * Configuration information that is required to access the data source repository. You can't specify the Configuration parameter when the Type parameter is set to CUSTOM. If you do, you receive a ValidationException exception. The Configuration parameter is required for all other data sources.
     */
    Configuration?: DataSourceConfiguration;
    /**
     * A description for the data source.
     */
    Description?: Description;
    /**
     * Sets the frequency for Amazon Kendra to check the documents in your repository and update the index. If you don't set a schedule Amazon Kendra will not periodically update the index. You can call the StartDataSourceSyncJob API to update the index. You can't specify the Schedule parameter when the Type parameter is set to CUSTOM. If you do, you receive a ValidationException exception.
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
     * A token that you provide to identify the request to create a data source. Multiple calls to the CreateDataSource API with the same client token will create only one data source.
     */
    ClientToken?: ClientTokenName;
    /**
     * The code for a language. This allows you to support a language for all documents when creating the data source. English is supported by default. For more information on supported languages, including their codes, see Adding documents in languages other than English.
     */
    LanguageCode?: LanguageCode;
    /**
     * Configuration information for altering document metadata and content during the document ingestion process when you create a data source. For more information on how to create, modify and delete document metadata, or make other content alterations when you ingest documents into Amazon Kendra, see Customizing document metadata during the ingestion process.
     */
    CustomDocumentEnrichmentConfiguration?: CustomDocumentEnrichmentConfiguration;
  }
  export interface CreateDataSourceResponse {
    /**
     * A unique identifier for the data source.
     */
    Id: DataSourceId;
  }
  export interface CreateExperienceRequest {
    /**
     * A name for your Amazon Kendra experience.
     */
    Name: ExperienceName;
    /**
     * The identifier of the index for your Amazon Kendra experience.
     */
    IndexId: IndexId;
    /**
     * The Amazon Resource Name (ARN) of a role with permission to access Query API, QuerySuggestions API, SubmitFeedback API, and Amazon Web Services SSO that stores your user and group information. For more information, see IAM roles for Amazon Kendra.
     */
    RoleArn?: RoleArn;
    /**
     * Configuration information for your Amazon Kendra experience. This includes ContentSourceConfiguration, which specifies the data source IDs and/or FAQ IDs, and UserIdentityConfiguration, which specifies the user or group information to grant access to your Amazon Kendra experience.
     */
    Configuration?: ExperienceConfiguration;
    /**
     * A description for your Amazon Kendra experience.
     */
    Description?: Description;
    /**
     * A token that you provide to identify the request to create your Amazon Kendra experience. Multiple calls to the CreateExperience API with the same client token creates only one Amazon Kendra experience.
     */
    ClientToken?: ClientTokenName;
  }
  export interface CreateExperienceResponse {
    /**
     * The identifier for your created Amazon Kendra experience.
     */
    Id: ExperienceId;
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
     * A token that you provide to identify the request to create a FAQ. Multiple calls to the CreateFaqRequest API with the same client token will create only one FAQ. 
     */
    ClientToken?: ClientTokenName;
    /**
     * The code for a language. This allows you to support a language for the FAQ document. English is supported by default. For more information on supported languages, including their codes, see Adding documents in languages other than English.
     */
    LanguageCode?: LanguageCode;
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
     * The Amazon Kendra edition to use for the index. Choose DEVELOPER_EDITION for indexes intended for development, testing, or proof of concept. Use ENTERPRISE_EDITION for your production databases. Once you set the edition for an index, it can't be changed. The Edition parameter is optional. If you don't supply a value, the default is ENTERPRISE_EDITION. For more information on quota limits for enterprise and developer editions, see Quotas.
     */
    Edition?: IndexEdition;
    /**
     * An Identity and Access Management (IAM) role that gives Amazon Kendra permissions to access your Amazon CloudWatch logs and metrics. This is also the role you use when you call the BatchPutDocument API to index documents from an Amazon S3 bucket.
     */
    RoleArn: RoleArn;
    /**
     * The identifier of the KMS customer managed key (CMK) that's used to encrypt data indexed by Amazon Kendra. Amazon Kendra doesn't support asymmetric CMKs.
     */
    ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
    /**
     * A description for the index.
     */
    Description?: Description;
    /**
     * A token that you provide to identify the request to create an index. Multiple calls to the CreateIndex API with the same client token will create only one index.
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
     * The user context policy.  ATTRIBUTE_FILTER  All indexed content is searchable and displayable for all users. If you want to filter search results on user context, you can use the attribute filters of _user_id and _group_ids or you can provide user and group information in UserContext.   USER_TOKEN  Enables token-based user access control to filter search results on user context. All documents with no access control and all documents accessible to the user will be searchable and displayable.   
     */
    UserContextPolicy?: UserContextPolicy;
    /**
     * Enables fetching access levels of groups and users from an Amazon Web Services Single Sign On identity source. To configure this, see UserGroupResolutionConfiguration.
     */
    UserGroupResolutionConfiguration?: UserGroupResolutionConfiguration;
  }
  export interface CreateIndexResponse {
    /**
     * The unique identifier of the index. Use this identifier when you query an index, set up a data source, or index a document.
     */
    Id?: IndexId;
  }
  export interface CreateQuerySuggestionsBlockListRequest {
    /**
     * The identifier of the index you want to create a query suggestions block list for.
     */
    IndexId: IndexId;
    /**
     * A user friendly name for the block list. For example, the block list named 'offensive-words' includes all offensive words that could appear in user queries and need to be blocked from suggestions.
     */
    Name: QuerySuggestionsBlockListName;
    /**
     * A user-friendly description for the block list. For example, the description "List of all offensive words that can appear in user queries and need to be blocked from suggestions."
     */
    Description?: Description;
    /**
     * The S3 path to your block list text file in your S3 bucket. Each block word or phrase should be on a separate line in a text file. For information on the current quota limits for block lists, see Quotas for Amazon Kendra.
     */
    SourceS3Path: S3Path;
    /**
     * A token that you provide to identify the request to create a query suggestions block list.
     */
    ClientToken?: ClientTokenName;
    /**
     * The IAM (Identity and Access Management) role used by Amazon Kendra to access the block list text file in your S3 bucket. You need permissions to the role ARN (Amazon Web Services Resource Name). The role needs S3 read permissions to your file in S3 and needs to give STS (Security Token Service) assume role permissions to Amazon Kendra.
     */
    RoleArn: RoleArn;
    /**
     * A tag that you can assign to a block list that categorizes the block list.
     */
    Tags?: TagList;
  }
  export interface CreateQuerySuggestionsBlockListResponse {
    /**
     * The unique identifier of the created block list.
     */
    Id?: QuerySuggestionsBlockListId;
  }
  export interface CreateThesaurusRequest {
    /**
     * The unique identifier of the index for the new thesaurus. 
     */
    IndexId: IndexId;
    /**
     * The name for the new thesaurus.
     */
    Name: ThesaurusName;
    /**
     * The description for the new thesaurus.
     */
    Description?: Description;
    /**
     * An IAM role that gives Amazon Kendra permissions to access thesaurus file specified in SourceS3Path. 
     */
    RoleArn: RoleArn;
    /**
     * A list of key-value pairs that identify the thesaurus. You can use the tags to identify and organize your resources and to control access to resources. 
     */
    Tags?: TagList;
    /**
     * The thesaurus file Amazon S3 source path. 
     */
    SourceS3Path: S3Path;
    /**
     * A token that you provide to identify the request to create a thesaurus. Multiple calls to the CreateThesaurus API with the same client token will create only one thesaurus. 
     */
    ClientToken?: ClientTokenName;
  }
  export interface CreateThesaurusResponse {
    /**
     * The unique identifier of the thesaurus. 
     */
    Id?: ThesaurusId;
  }
  export interface CustomDocumentEnrichmentConfiguration {
    /**
     * Configuration information to alter document attributes or metadata fields and content when ingesting documents into Amazon Kendra.
     */
    InlineConfigurations?: InlineCustomDocumentEnrichmentConfigurationList;
    /**
     * Configuration information for invoking a Lambda function in Lambda on the original or raw documents before extracting their metadata and text. You can use a Lambda function to apply advanced logic for creating, modifying, or deleting document metadata and content. For more information, see Advanced data manipulation.
     */
    PreExtractionHookConfiguration?: HookConfiguration;
    /**
     * Configuration information for invoking a Lambda function in Lambda on the structured documents with their metadata and text extracted. You can use a Lambda function to apply advanced logic for creating, modifying, or deleting document metadata and content. For more information, see Advanced data manipulation.
     */
    PostExtractionHookConfiguration?: HookConfiguration;
    /**
     * The Amazon Resource Name (ARN) of a role with permission to run PreExtractionHookConfiguration and PostExtractionHookConfiguration for altering document metadata and content during the document ingestion process. For more information, see IAM roles for Amazon Kendra.
     */
    RoleArn?: RoleArn;
  }
  export interface DataSourceConfiguration {
    /**
     * Provides the configuration information to connect to an Amazon S3 bucket as your data source.
     */
    S3Configuration?: S3DataSourceConfiguration;
    /**
     * Provides the configuration information to connect to Microsoft SharePoint as your data source.
     */
    SharePointConfiguration?: SharePointConfiguration;
    /**
     * Provides the configuration information to connect to a database as your data source.
     */
    DatabaseConfiguration?: DatabaseConfiguration;
    /**
     * Provides the configuration information to connect to Salesforce as your data source.
     */
    SalesforceConfiguration?: SalesforceConfiguration;
    /**
     * Provides the configuration information to connect to Microsoft OneDrive as your data source.
     */
    OneDriveConfiguration?: OneDriveConfiguration;
    /**
     * Provides the configuration information to connect to ServiceNow as your data source.
     */
    ServiceNowConfiguration?: ServiceNowConfiguration;
    /**
     * Provides the configuration information to connect to Confluence as your data source.
     */
    ConfluenceConfiguration?: ConfluenceConfiguration;
    /**
     * Provides the configuration information to connect to Google Drive as your data source.
     */
    GoogleDriveConfiguration?: GoogleDriveConfiguration;
    WebCrawlerConfiguration?: WebCrawlerConfiguration;
    /**
     * Provides the configuration information to connect to Amazon WorkDocs as your data source.
     */
    WorkDocsConfiguration?: WorkDocsConfiguration;
    /**
     * Provides the configuration information to connect to Amazon FSx as your data source.
     */
    FsxConfiguration?: FsxConfiguration;
    /**
     * Provides the configuration information to connect to Slack as your data source.
     */
    SlackConfiguration?: SlackConfiguration;
    /**
     * Provides the configuration information to connect to Box as your data source.
     */
    BoxConfiguration?: BoxConfiguration;
    /**
     * Provides the configuration information to connect to Quip as your data source.
     */
    QuipConfiguration?: QuipConfiguration;
    /**
     * Provides the configuration information to connect to Jira as your data source.
     */
    JiraConfiguration?: JiraConfiguration;
  }
  export type DataSourceDateFieldFormat = string;
  export type DataSourceFieldName = string;
  export interface DataSourceGroup {
    /**
     * The identifier of the group you want to add to your list of groups. This is for filtering search results based on the groups' access to documents.
     */
    GroupId: PrincipalName;
    /**
     * The identifier of the data source group you want to add to your list of data source groups. This is for filtering search results based on the groups' access to documents in that data source.
     */
    DataSourceId: DataSourceId;
  }
  export type DataSourceGroups = DataSourceGroup[];
  export type DataSourceId = string;
  export type DataSourceIdList = DataSourceId[];
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
     * The status of the data source. When the status is ACTIVE the data source is ready to use.
     */
    Status?: DataSourceStatus;
    /**
     * The code for a language. This shows a supported language for all documents in the data source. English is supported by default. For more information on supported languages, including their codes, see Adding documents in languages other than English.
     */
    LanguageCode?: LanguageCode;
  }
  export type DataSourceSummaryList = DataSourceSummary[];
  export interface DataSourceSyncJob {
    /**
     * A unique identifier for the synchronization job.
     */
    ExecutionId?: String;
    /**
     * The UNIX datetime that the synchronization job started.
     */
    StartTime?: Timestamp;
    /**
     * The UNIX datetime that the synchronization job completed.
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
     * If the Status field is set to FAILED, the ErrorCode field indicates the reason the synchronization failed.
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
     * The ID of the sync job that is running on the data source. If the ID of a sync job is not provided and there is a sync job running, then the ID of this sync job is used and metrics are generated for this sync job. If the ID of a sync job is not provided and there is no sync job running, then no metrics are generated and documents are indexed/deleted at the index level without sync job metrics included.
     */
    DataSourceSyncJobId?: DataSourceSyncJobId;
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
  export type DataSourceType = "S3"|"SHAREPOINT"|"DATABASE"|"SALESFORCE"|"ONEDRIVE"|"SERVICENOW"|"CUSTOM"|"CONFLUENCE"|"GOOGLEDRIVE"|"WEBCRAWLER"|"WORKDOCS"|"FSX"|"SLACK"|"BOX"|"QUIP"|"JIRA"|string;
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
     * Configuration information that's required to connect to a database.
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
  export interface DeleteExperienceRequest {
    /**
     * The identifier of your Amazon Kendra experience you want to delete.
     */
    Id: ExperienceId;
    /**
     * The identifier of the index for your Amazon Kendra experience you want to delete.
     */
    IndexId: IndexId;
  }
  export interface DeleteExperienceResponse {
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
  export interface DeletePrincipalMappingRequest {
    /**
     * The identifier of the index you want to delete a group from.
     */
    IndexId: IndexId;
    /**
     * The identifier of the data source you want to delete a group from. This is useful if a group is tied to multiple data sources and you want to delete a group from accessing documents in a certain data source. For example, the groups "Research", "Engineering", and "Sales and Marketing" are all tied to the company's documents stored in the data sources Confluence and Salesforce. You want to delete "Research" and "Engineering" groups from Salesforce, so that these groups cannot access customer-related documents stored in Salesforce. Only "Sales and Marketing" should access documents in the Salesforce data source.
     */
    DataSourceId?: DataSourceId;
    /**
     * The identifier of the group you want to delete.
     */
    GroupId: GroupId;
    /**
     * The timestamp identifier you specify to ensure Amazon Kendra does not override the latest DELETE action with previous actions. The highest number ID, which is the ordering ID, is the latest action you want to process and apply on top of other actions with lower number IDs. This prevents previous actions with lower number IDs from possibly overriding the latest action. The ordering ID can be the UNIX time of the last update you made to a group members list. You would then provide this list when calling PutPrincipalMapping. This ensures your DELETE action for that updated group with the latest members list doesn't get overwritten by earlier DELETE actions for the same group which are yet to be processed. The default ordering ID is the current UNIX time in milliseconds that the action was received by Amazon Kendra. 
     */
    OrderingId?: PrincipalOrderingId;
  }
  export interface DeleteQuerySuggestionsBlockListRequest {
    /**
     * The identifier of the you want to delete a block list from.
     */
    IndexId: IndexId;
    /**
     * The unique identifier of the block list that needs to be deleted.
     */
    Id: QuerySuggestionsBlockListId;
  }
  export interface DeleteThesaurusRequest {
    /**
     * The identifier of the thesaurus to delete.
     */
    Id: ThesaurusId;
    /**
     * The identifier of the index associated with the thesaurus to delete.
     */
    IndexId: IndexId;
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
     * Describes how the data source is configured. The specific information in the description depends on the data source provider.
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
     * The schedule for Amazon Kendra to update the index.
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
    /**
     * The code for a language. This shows a supported language for all documents in the data source. English is supported by default. For more information on supported languages, including their codes, see Adding documents in languages other than English.
     */
    LanguageCode?: LanguageCode;
    /**
     * Configuration information for altering document metadata and content during the document ingestion process when you describe a data source. For more information on how to create, modify and delete document metadata, or make other content alterations when you ingest documents into Amazon Kendra, see Customizing document metadata during the ingestion process.
     */
    CustomDocumentEnrichmentConfiguration?: CustomDocumentEnrichmentConfiguration;
  }
  export interface DescribeExperienceRequest {
    /**
     * The identifier of your Amazon Kendra experience you want to get information on.
     */
    Id: ExperienceId;
    /**
     * The identifier of the index for your Amazon Kendra experience you want to get information on.
     */
    IndexId: IndexId;
  }
  export interface DescribeExperienceResponse {
    /**
     * Shows the identifier of your Amazon Kendra experience.
     */
    Id?: ExperienceId;
    /**
     * Shows the identifier of the index for your Amazon Kendra experience.
     */
    IndexId?: IndexId;
    /**
     * Shows the name of your Amazon Kendra experience.
     */
    Name?: ExperienceName;
    /**
     * Shows the endpoint URLs for your Amazon Kendra experiences. The URLs are unique and fully hosted by Amazon Web Services.
     */
    Endpoints?: ExperienceEndpoints;
    /**
     * Shows the configuration information for your Amazon Kendra experience. This includes ContentSourceConfiguration, which specifies the data source IDs and/or FAQ IDs, and UserIdentityConfiguration, which specifies the user or group information to grant access to your Amazon Kendra experience.
     */
    Configuration?: ExperienceConfiguration;
    /**
     * Shows the date-time your Amazon Kendra experience was created.
     */
    CreatedAt?: Timestamp;
    /**
     * Shows the date-time your Amazon Kendra experience was last updated.
     */
    UpdatedAt?: Timestamp;
    /**
     * Shows the description for your Amazon Kendra experience.
     */
    Description?: Description;
    /**
     * The current processing status of your Amazon Kendra experience. When the status is ACTIVE, your Amazon Kendra experience is ready to use. When the status is FAILED, the ErrorMessage field contains the reason that this failed.
     */
    Status?: ExperienceStatus;
    /**
     * Shows the Amazon Resource Name (ARN) of a role with permission to access Query API, QuerySuggestions API, SubmitFeedback API, and Amazon Web Services SSO that stores your user and group information.
     */
    RoleArn?: RoleArn;
    /**
     * The reason your Amazon Kendra experience could not properly process.
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
    /**
     * The code for a language. This shows a supported language for the FAQ document. English is supported by default. For more information on supported languages, including their codes, see Adding documents in languages other than English.
     */
    LanguageCode?: LanguageCode;
  }
  export interface DescribeIndexRequest {
    /**
     * The identifier of the index to describe.
     */
    Id: IndexId;
  }
  export interface DescribeIndexResponse {
    /**
     * The name of the index.
     */
    Name?: IndexName;
    /**
     * The identifier of the index.
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
     * The identifier of the KMScustomer master key (CMK) that is used to encrypt your data. Amazon Kendra doesn't support asymmetric CMKs.
     */
    ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
    /**
     * The current status of the index. When the value is ACTIVE, the index is ready for use. If the Status field value is FAILED, the ErrorMessage field contains a message that explains why.
     */
    Status?: IndexStatus;
    /**
     * The description for the index.
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
     * When the Status field value is FAILED, the ErrorMessage field contains a message that explains why.
     */
    ErrorMessage?: ErrorMessage;
    /**
     * For Enterprise Edition indexes, you can choose to use additional capacity to meet the needs of your application. This contains the capacity units used for the index. A query or document storage capacity of zero indicates that the index is using the default capacity. For more information on the default capacity for an index and adjusting this, see Adjusting capacity.
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
    /**
     * Shows whether you have enabled the configuration for fetching access levels of groups and users from an Amazon Web Services Single Sign On identity source.
     */
    UserGroupResolutionConfiguration?: UserGroupResolutionConfiguration;
  }
  export interface DescribePrincipalMappingRequest {
    /**
     * The identifier of the index required to check the processing of PUT and DELETE actions for mapping users to their groups.
     */
    IndexId: IndexId;
    /**
     * The identifier of the data source to check the processing of PUT and DELETE actions for mapping users to their groups.
     */
    DataSourceId?: DataSourceId;
    /**
     * The identifier of the group required to check the processing of PUT and DELETE actions for mapping users to their groups.
     */
    GroupId: GroupId;
  }
  export interface DescribePrincipalMappingResponse {
    /**
     * Shows the identifier of the index to see information on the processing of PUT and DELETE actions for mapping users to their groups.
     */
    IndexId?: IndexId;
    /**
     * Shows the identifier of the data source to see information on the processing of PUT and DELETE actions for mapping users to their groups.
     */
    DataSourceId?: DataSourceId;
    /**
     * Shows the identifier of the group to see information on the processing of PUT and DELETE actions for mapping users to their groups.
     */
    GroupId?: GroupId;
    /**
     * Shows the following information on the processing of PUT and DELETE actions for mapping users to their groups:   Status – the status can be either PROCESSING, SUCCEEDED, DELETING, DELETED, or FAILED.   Last updated – the last date-time an action was updated.   Received – the last date-time an action was received or submitted.   Ordering ID – the latest action that should process and apply after other actions.   Failure reason – the reason an action could not be processed.  
     */
    GroupOrderingIdSummaries?: GroupOrderingIdSummaries;
  }
  export interface DescribeQuerySuggestionsBlockListRequest {
    /**
     * The identifier of the index for the block list.
     */
    IndexId: IndexId;
    /**
     * The unique identifier of the block list.
     */
    Id: QuerySuggestionsBlockListId;
  }
  export interface DescribeQuerySuggestionsBlockListResponse {
    /**
     * Shows the identifier of the index for the block list.
     */
    IndexId?: IndexId;
    /**
     * Shows the unique identifier of the block list.
     */
    Id?: QuerySuggestionsBlockListId;
    /**
     * Shows the name of the block list.
     */
    Name?: QuerySuggestionsBlockListName;
    /**
     * Shows the description for the block list.
     */
    Description?: Description;
    /**
     * Shows whether the current status of the block list is ACTIVE or INACTIVE.
     */
    Status?: QuerySuggestionsBlockListStatus;
    /**
     * Shows the error message with details when there are issues in processing the block list.
     */
    ErrorMessage?: ErrorMessage;
    /**
     * Shows the date-time a block list for query suggestions was created.
     */
    CreatedAt?: Timestamp;
    /**
     * Shows the date-time a block list for query suggestions was last updated.
     */
    UpdatedAt?: Timestamp;
    /**
     * Shows the current S3 path to your block list text file in your S3 bucket. Each block word or phrase should be on a separate line in a text file. For information on the current quota limits for block lists, see Quotas for Amazon Kendra.
     */
    SourceS3Path?: S3Path;
    /**
     * Shows the current number of valid, non-empty words or phrases in the block list text file.
     */
    ItemCount?: Integer;
    /**
     * Shows the current size of the block list text file in S3.
     */
    FileSizeBytes?: Long;
    /**
     * Shows the current IAM (Identity and Access Management) role used by Amazon Kendra to access the block list text file in S3. The role needs S3 read permissions to your file in S3 and needs to give STS (Security Token Service) assume role permissions to Amazon Kendra.
     */
    RoleArn?: RoleArn;
  }
  export interface DescribeQuerySuggestionsConfigRequest {
    /**
     * The identifier of the index you want to describe query suggestions settings for.
     */
    IndexId: IndexId;
  }
  export interface DescribeQuerySuggestionsConfigResponse {
    /**
     * Shows whether query suggestions are currently in ENABLED mode or LEARN_ONLY mode. By default, Amazon Kendra enables query suggestions.LEARN_ONLY turns off query suggestions for your users. You can change the mode using the UpdateQuerySuggestionsConfig API.
     */
    Mode?: Mode;
    /**
     * Shows whether the status of query suggestions settings is currently Active or Updating. Active means the current settings apply and Updating means your changed settings are in the process of applying.
     */
    Status?: QuerySuggestionsStatus;
    /**
     * Shows how recent your queries are in your query log time window (in days).
     */
    QueryLogLookBackWindowInDays?: Integer;
    /**
     * Shows whether Amazon Kendra uses all queries or only uses queries that include user information to generate query suggestions.
     */
    IncludeQueriesWithoutUserInformation?: ObjectBoolean;
    /**
     * Shows the minimum number of unique users who must search a query in order for the query to be eligible to suggest to your users.
     */
    MinimumNumberOfQueryingUsers?: MinimumNumberOfQueryingUsers;
    /**
     * Shows the minimum number of times a query must be searched in order for the query to be eligible to suggest to your users.
     */
    MinimumQueryCount?: MinimumQueryCount;
    /**
     * Shows the date-time query suggestions for an index was last updated.
     */
    LastSuggestionsBuildTime?: Timestamp;
    /**
     * Shows the date-time query suggestions for an index was last cleared. After you clear suggestions, Amazon Kendra learns new suggestions based on new queries added to the query log from the time you cleared suggestions. Amazon Kendra only considers re-occurences of a query from the time you cleared suggestions. 
     */
    LastClearTime?: Timestamp;
    /**
     * Shows the current total count of query suggestions for an index. This count can change when you update your query suggestions settings, if you filter out certain queries from suggestions using a block list, and as the query log accumulates more queries for Amazon Kendra to learn from.
     */
    TotalSuggestionsCount?: Integer;
  }
  export interface DescribeThesaurusRequest {
    /**
     * The identifier of the thesaurus to describe.
     */
    Id: ThesaurusId;
    /**
     * The identifier of the index associated with the thesaurus to describe.
     */
    IndexId: IndexId;
  }
  export interface DescribeThesaurusResponse {
    /**
     * The identifier of the thesaurus.
     */
    Id?: ThesaurusId;
    /**
     * The identifier of the index associated with the thesaurus to describe.
     */
    IndexId?: IndexId;
    /**
     * The thesaurus name.
     */
    Name?: ThesaurusName;
    /**
     * The thesaurus description.
     */
    Description?: Description;
    /**
     * The current status of the thesaurus. When the value is ACTIVE, queries are able to use the thesaurus. If the Status field value is FAILED, the ErrorMessage field provides more information.  If the status is ACTIVE_BUT_UPDATE_FAILED, it means that Amazon Kendra could not ingest the new thesaurus file. The old thesaurus file is still active. 
     */
    Status?: ThesaurusStatus;
    /**
     * When the Status field value is FAILED, the ErrorMessage field provides more information. 
     */
    ErrorMessage?: ErrorMessage;
    /**
     * The Unix datetime that the thesaurus was created.
     */
    CreatedAt?: Timestamp;
    /**
     * The Unix datetime that the thesaurus was last updated.
     */
    UpdatedAt?: Timestamp;
    /**
     * An IAM role that gives Amazon Kendra permissions to access thesaurus file specified in SourceS3Path. 
     */
    RoleArn?: RoleArn;
    SourceS3Path?: S3Path;
    /**
     * The size of the thesaurus file in bytes.
     */
    FileSizeBytes?: Long;
    /**
     * The number of unique terms in the thesaurus file. For example, the synonyms a,b,c and a=&gt;d, the term count would be 4. 
     */
    TermCount?: Long;
    /**
     * The number of synonym rules in the thesaurus file.
     */
    SynonymRuleCount?: Long;
  }
  export type Description = string;
  export interface DisassociateEntitiesFromExperienceRequest {
    /**
     * The identifier of your Amazon Kendra experience.
     */
    Id: ExperienceId;
    /**
     * The identifier of the index for your Amazon Kendra experience.
     */
    IndexId: IndexId;
    /**
     * Lists users or groups in your Amazon Web Services SSO identity source.
     */
    EntityList: DisassociateEntityList;
  }
  export interface DisassociateEntitiesFromExperienceResponse {
    /**
     * Lists the users or groups in your Amazon Web Services SSO identity source that failed to properly remove access to your Amazon Kendra experience.
     */
    FailedEntityList?: FailedEntityList;
  }
  export type DisassociateEntityList = EntityConfiguration[];
  export interface DisassociatePersonasFromEntitiesRequest {
    /**
     * The identifier of your Amazon Kendra experience.
     */
    Id: ExperienceId;
    /**
     * The identifier of the index for your Amazon Kendra experience.
     */
    IndexId: IndexId;
    /**
     * The identifiers of users or groups in your Amazon Web Services SSO identity source. For example, user IDs could be user emails.
     */
    EntityIds: EntityIdsList;
  }
  export interface DisassociatePersonasFromEntitiesResponse {
    /**
     * Lists the users or groups in your Amazon Web Services SSO identity source that failed to properly remove access to your Amazon Kendra experience.
     */
    FailedEntityList?: FailedEntityList;
  }
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
     * The contents of the document.  Documents passed to the Blob parameter must be base64 encoded. Your code might not need to encode the document file bytes if you're using an Amazon Web Services SDK to call Amazon Kendra APIs. If you are calling the Amazon Kendra endpoint directly using REST, you must base64 encode the contents before sending.
     */
    Blob?: _Blob;
    S3Path?: S3Path;
    /**
     * Custom attributes to apply to the document. Use the custom attributes to provide additional information for searching, to provide facets for refining searches, and to provide additional information in the query response. For example, 'DataSourceId' and 'DataSourceSyncJobId' are custom attributes that provide information on the synchronization of documents running on a data source. Note, 'DataSourceSyncJobId' could be an optional custom attribute as Amazon Kendra will use the ID of a running sync job.
     */
    Attributes?: DocumentAttributeList;
    /**
     * Information on user and group access rights, which is used for user context filtering.
     */
    AccessControlList?: PrincipalList;
    /**
     * The list of principal lists that define the hierarchy for which documents users should have access to.
     */
    HierarchicalAccessControlList?: HierarchicalPrincipalList;
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
  export interface DocumentAttributeCondition {
    /**
     * The identifier of the document attribute used for the condition. For example, 'Source_URI' could be an identifier for the attribute or metadata field that contains source URIs associated with the documents. Amazon Kendra currently does not support _document_body as an attribute key used for the condition.
     */
    ConditionDocumentAttributeKey: DocumentAttributeKey;
    /**
     * The condition operator. For example, you can use 'Contains' to partially match a string.
     */
    Operator: ConditionOperator;
    /**
     * The value used by the operator. For example, you can specify the value 'financial' for strings in the 'Source_URI' field that partially match or contain this value.
     */
    ConditionOnValue?: DocumentAttributeValue;
  }
  export type DocumentAttributeKey = string;
  export type DocumentAttributeKeyList = DocumentAttributeKey[];
  export type DocumentAttributeList = DocumentAttribute[];
  export type DocumentAttributeStringListValue = String[];
  export type DocumentAttributeStringValue = string;
  export interface DocumentAttributeTarget {
    /**
     * The identifier of the target document attribute or metadata field. For example, 'Department' could be an identifier for the target attribute or metadata field that includes the department names associated with the documents.
     */
    TargetDocumentAttributeKey?: DocumentAttributeKey;
    /**
     *  TRUE to delete the existing target value for your specified target attribute key. You cannot create a target value and set this to TRUE. To create a target value (TargetDocumentAttributeValue), set this to FALSE.
     */
    TargetDocumentAttributeValueDeletion?: Boolean;
    /**
     * The target value you want to create for the target attribute. For example, 'Finance' could be the target value for the target attribute key 'Department'.
     */
    TargetDocumentAttributeValue?: DocumentAttributeValue;
  }
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
     * A date expressed as an ISO 8601 string. It is important for the time zone to be included in the ISO 8601 date-time format. For example, 2012-03-25T12:30:10+01:00 is the ISO 8601 date-time format for March 25th 2012 at 12:30PM (plus 10 seconds) in Central European Time.
     */
    DateValue?: Timestamp;
  }
  export interface DocumentAttributeValueCountPair {
    /**
     * The value of the attribute. For example, "HR".
     */
    DocumentAttributeValue?: DocumentAttributeValue;
    /**
     * The number of documents in the response that have the attribute value for the key.
     */
    Count?: Integer;
    /**
     * Contains the results of a document attribute that is a nested facet. A FacetResult contains the counts for each facet nested within a facet. For example, the document attribute or facet "Department" includes a value called "Engineering". In addition, the document attribute or facet "SubDepartment" includes the values "Frontend" and "Backend" for documents assigned to "Engineering". You can display nested facets in the search results so that documents can be searched not only by department but also by a sub department within a department. The counts for documents that belong to "Frontend" and "Backend" within "Engineering" are returned for a query.
     */
    FacetResults?: FacetResultList;
  }
  export type DocumentAttributeValueCountPairList = DocumentAttributeValueCountPair[];
  export type DocumentAttributeValueType = "STRING_VALUE"|"STRING_LIST_VALUE"|"LONG_VALUE"|"DATE_VALUE"|string;
  export type DocumentId = string;
  export type DocumentIdList = DocumentId[];
  export interface DocumentInfo {
    /**
     * The unique identifier of the document.
     */
    DocumentId: DocumentId;
    /**
     * Attributes that identify a specific version of a document to check. The only valid attributes are:   version   datasourceId   jobExecutionId   The attributes follow these rules:    dataSourceId and jobExecutionId must be used together.    version is ignored if dataSourceId and jobExecutionId are not provided.   If dataSourceId and jobExecutionId are provided, but version is not, the version defaults to "0".  
     */
    Attributes?: DocumentAttributeList;
  }
  export type DocumentInfoList = DocumentInfo[];
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
  export interface DocumentRelevanceConfiguration {
    /**
     * The name of the tuning configuration to override document relevance at the index level.
     */
    Name: DocumentMetadataConfigurationName;
    Relevance: Relevance;
  }
  export type DocumentRelevanceOverrideConfigurationList = DocumentRelevanceConfiguration[];
  export type DocumentStatus = "NOT_FOUND"|"PROCESSING"|"INDEXED"|"UPDATED"|"FAILED"|"UPDATE_FAILED"|string;
  export type DocumentStatusList = Status[];
  export interface DocumentsMetadataConfiguration {
    /**
     * A prefix used to filter metadata configuration files in the Amazon Web Services S3 bucket. The S3 bucket might contain multiple metadata files. Use S3Prefix to include only the desired metadata files.
     */
    S3Prefix?: S3ObjectKey;
  }
  export type Domain = string;
  export type Duration = string;
  export type Endpoint = string;
  export type EndpointType = "HOME"|string;
  export type EnterpriseId = string;
  export interface EntityConfiguration {
    /**
     * The identifier of a user or group in your Amazon Web Services SSO identity source. For example, a user ID could be an email.
     */
    EntityId: EntityId;
    /**
     * Specifies whether you are configuring a User or a Group.
     */
    EntityType: EntityType;
  }
  export interface EntityDisplayData {
    /**
     * The name of the user.
     */
    UserName?: NameType;
    /**
     * The name of the group.
     */
    GroupName?: NameType;
    /**
     * The user name of the user.
     */
    IdentifiedUserName?: NameType;
    /**
     * The first name of the user.
     */
    FirstName?: NameType;
    /**
     * The last name of the user.
     */
    LastName?: NameType;
  }
  export type EntityId = string;
  export type EntityIdsList = EntityId[];
  export interface EntityPersonaConfiguration {
    /**
     * The identifier of a user or group in your Amazon Web Services SSO identity source. For example, a user ID could be an email.
     */
    EntityId: EntityId;
    /**
     * The persona that defines the specific permissions of the user or group in your Amazon Web Services SSO identity source. The available personas or access roles are Owner and Viewer. For more information on these personas, see Providing access to your search page.
     */
    Persona: Persona;
  }
  export type EntityPersonaConfigurationList = EntityPersonaConfiguration[];
  export type EntityType = "USER"|"GROUP"|string;
  export type ErrorCode = "InternalError"|"InvalidRequest"|string;
  export type ErrorMessage = string;
  export type ExcludeMimeTypesList = MimeType[];
  export type ExcludeSharedDrivesList = SharedDriveId[];
  export type ExcludeUserAccountsList = UserAccount[];
  export interface ExperienceConfiguration {
    /**
     * The identifiers of your data sources and FAQs. Or, you can specify that you want to use documents indexed via the BatchPutDocument API. This is the content you want to use for your Amazon Kendra experience.
     */
    ContentSourceConfiguration?: ContentSourceConfiguration;
    /**
     * The Amazon Web Services SSO field name that contains the identifiers of your users, such as their emails.
     */
    UserIdentityConfiguration?: UserIdentityConfiguration;
  }
  export interface ExperienceEndpoint {
    /**
     * The type of endpoint for your Amazon Kendra experience. The type currently available is HOME, which is a unique and fully hosted URL to the home page of your Amazon Kendra experience.
     */
    EndpointType?: EndpointType;
    /**
     * The endpoint of your Amazon Kendra experience.
     */
    Endpoint?: Endpoint;
  }
  export type ExperienceEndpoints = ExperienceEndpoint[];
  export interface ExperienceEntitiesSummary {
    /**
     * The identifier of a user or group in your Amazon Web Services SSO identity source. For example, a user ID could be an email.
     */
    EntityId?: EntityId;
    /**
     * Shows the type as User or Group.
     */
    EntityType?: EntityType;
    /**
     * Information about the user entity.
     */
    DisplayData?: EntityDisplayData;
  }
  export type ExperienceEntitiesSummaryList = ExperienceEntitiesSummary[];
  export type ExperienceId = string;
  export type ExperienceName = string;
  export type ExperienceStatus = "CREATING"|"ACTIVE"|"DELETING"|"FAILED"|string;
  export interface ExperiencesSummary {
    /**
     * The name of your Amazon Kendra experience.
     */
    Name?: ExperienceName;
    /**
     * The identifier of your Amazon Kendra experience.
     */
    Id?: ExperienceId;
    /**
     * The date-time your Amazon Kendra experience was created.
     */
    CreatedAt?: Timestamp;
    /**
     * The processing status of your Amazon Kendra experience.
     */
    Status?: ExperienceStatus;
    /**
     * The endpoint URLs for your Amazon Kendra experiences. The URLs are unique and fully hosted by Amazon Web Services.
     */
    Endpoints?: ExperienceEndpoints;
  }
  export type ExperiencesSummaryList = ExperiencesSummary[];
  export interface Facet {
    /**
     * The unique key for the document attribute.
     */
    DocumentAttributeKey?: DocumentAttributeKey;
    /**
     * An array of document attributes that are nested facets within a facet. For example, the document attribute or facet "Department" includes a value called "Engineering". In addition, the document attribute or facet "SubDepartment" includes the values "Frontend" and "Backend" for documents assigned to "Engineering". You can display nested facets in the search results so that documents can be searched not only by department but also by a sub department within a department. This helps your users further narrow their search. You can only have one nested facet within a facet. If you want to increase this limit, contact Support.
     */
    Facets?: FacetList;
    /**
     * Maximum number of facet values per facet. The default is 10. You can use this to limit the number of facet values to less than 10. If you want to increase the default, contact Support.
     */
    MaxResults?: TopDocumentAttributeValueCountPairsSize;
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
  export interface FailedEntity {
    /**
     * The identifier of the user or group in your Amazon Web Services SSO identity source. For example, a user ID could be an email.
     */
    EntityId?: EntityId;
    /**
     * The reason the user or group in your Amazon Web Services SSO identity source failed to properly configure with your Amazon Kendra experience.
     */
    ErrorMessage?: ErrorMessage;
  }
  export type FailedEntityList = FailedEntity[];
  export type FailureReason = string;
  export type FaqFileFormat = "CSV"|"CSV_WITH_HEADER"|"JSON"|string;
  export type FaqId = string;
  export type FaqIdsList = FaqId[];
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
    /**
     * The code for a language. This shows a supported language for the FAQ document as part of the summary information for FAQs. English is supported by default. For more information on supported languages, including their codes, see Adding documents in languages other than English.
     */
    LanguageCode?: LanguageCode;
  }
  export type FaqSummaryItems = FaqSummary[];
  export type FeedbackToken = string;
  export type FileSystemId = string;
  export type FolderId = string;
  export type FolderIdList = FolderId[];
  export interface FsxConfiguration {
    /**
     * The identifier of the Amazon FSx file system. You can find your file system ID on the file system dashboard in the Amazon FSx console. For information on how to create a file system in Amazon FSx console, using Windows File Server as an example, see Amazon FSx Getting started guide.
     */
    FileSystemId: FileSystemId;
    /**
     * The Amazon FSx file system type. Windows is currently the only supported type.
     */
    FileSystemType: FsxFileSystemType;
    /**
     * Configuration information for an Amazon Virtual Private Cloud to connect to your Amazon FSx. Your Amazon FSx instance must reside inside your VPC.
     */
    VpcConfiguration: DataSourceVpcConfiguration;
    /**
     * The Amazon Resource Name (ARN) of an Secrets Manager secret that contains the key-value pairs required to connect to your Amazon FSx file system. Windows is currently the only supported type. The secret must contain a JSON structure with the following keys:   username—The Active Directory user name, along with the Domain Name System (DNS) domain name. For example, user@corp.example.com. The Active Directory user account must have read and mounting access to the Amazon FSx file system for Windows.   password—The password of the Active Directory user account with read and mounting access to the Amazon FSx Windows file system.  
     */
    SecretArn?: SecretArn;
    /**
     * A list of regular expression patterns to include certain files in your Amazon FSx file system. Files that match the patterns are included in the index. Files that don't match the patterns are excluded from the index. If a file matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the file isn't included in the index.
     */
    InclusionPatterns?: DataSourceInclusionsExclusionsStrings;
    /**
     * A list of regular expression patterns to exclude certain files in your Amazon FSx file system. Files that match the patterns are excluded from the index. Files that don't match the patterns are included in the index. If a file matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the file isn't included in the index.
     */
    ExclusionPatterns?: DataSourceInclusionsExclusionsStrings;
    /**
     * A list of DataSourceToIndexFieldMapping objects that map Amazon FSx data source attributes or field names to Amazon Kendra index field names. To create custom fields, use the UpdateIndex API before you map to Amazon FSx fields. For more information, see Mapping data source fields. The Amazon FSx data source field names must exist in your Amazon FSx custom metadata.
     */
    FieldMappings?: DataSourceToIndexFieldMappingList;
  }
  export type FsxFileSystemType = "WINDOWS"|string;
  export interface GetQuerySuggestionsRequest {
    /**
     * The identifier of the index you want to get query suggestions from.
     */
    IndexId: IndexId;
    /**
     * The text of a user's query to generate query suggestions. A query is suggested if the query prefix matches what a user starts to type as their query. Amazon Kendra does not show any suggestions if a user types fewer than two characters or more than 60 characters. A query must also have at least one search result and contain at least one word of more than four characters.
     */
    QueryText: SuggestionQueryText;
    /**
     * The maximum number of query suggestions you want to show to your users.
     */
    MaxSuggestionsCount?: Integer;
  }
  export interface GetQuerySuggestionsResponse {
    /**
     * The unique identifier for a list of query suggestions for an index.
     */
    QuerySuggestionsId?: QuerySuggestionsId;
    /**
     * A list of query suggestions for an index.
     */
    Suggestions?: SuggestionList;
  }
  export interface GetSnapshotsRequest {
    /**
     * The identifier of the index to get search metrics data.
     */
    IndexId: IndexId;
    /**
     * The time interval or time window to get search metrics data. The time interval uses the time zone of your index. You can view data in the following time windows:    THIS_WEEK: The current week, starting on the Sunday and ending on the day before the current date.    ONE_WEEK_AGO: The previous week, starting on the Sunday and ending on the following Saturday.    TWO_WEEKS_AGO: The week before the previous week, starting on the Sunday and ending on the following Saturday.    THIS_MONTH: The current month, starting on the first day of the month and ending on the day before the current date.    ONE_MONTH_AGO: The previous month, starting on the first day of the month and ending on the last day of the month.    TWO_MONTHS_AGO: The month before the previous month, starting on the first day of the month and ending on last day of the month.  
     */
    Interval: Interval;
    /**
     * The metric you want to retrieve. You can specify only one metric per call. For more information about the metrics you can view, see Gaining insights with search analytics.
     */
    MetricType: MetricType;
    /**
     * If the previous response was incomplete (because there is more data to retrieve), Amazon Kendra returns a pagination token in the response. You can use this pagination token to retrieve the next set of search metrics data.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of returned data for the metric.
     */
    MaxResults?: Integer;
  }
  export interface GetSnapshotsResponse {
    /**
     * The date-time for the beginning and end of the time window for the search metrics data.
     */
    SnapShotTimeFilter?: TimeRange;
    /**
     * The column headers for the search metrics data.
     */
    SnapshotsDataHeader?: SnapshotsDataHeaderFields;
    /**
     * The search metrics data. The data returned depends on the metric type you requested.
     */
    SnapshotsData?: SnapshotsDataRecords;
    /**
     * If the response is truncated, Amazon Kendra returns this token, which you can use in a later request to retrieve the next set of search metrics data.
     */
    NextToken?: NextToken;
  }
  export interface GoogleDriveConfiguration {
    /**
     * The Amazon Resource Name (ARN) of a Secrets Managersecret that contains the credentials required to connect to Google Drive. For more information, see Using a Google Workspace Drive data source.
     */
    SecretArn: SecretArn;
    /**
     * A list of regular expression patterns to include certain items in your Google Drive, including shared drives and users' My Drives. Items that match the patterns are included in the index. Items that don't match the patterns are excluded from the index. If an item matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the item isn't included in the index.
     */
    InclusionPatterns?: DataSourceInclusionsExclusionsStrings;
    /**
     * A list of regular expression patterns to exclude certain items in your Google Drive, including shared drives and users' My Drives. Items that match the patterns are excluded from the index. Items that don't match the patterns are included in the index. If an item matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the item isn't included in the index.
     */
    ExclusionPatterns?: DataSourceInclusionsExclusionsStrings;
    /**
     * Maps Google Drive data source attributes or field names to Amazon Kendra index field names. To create custom fields, use the UpdateIndex API before you map to Google Drive fields. For more information, see Mapping data source fields. The Google Drive data source field names must exist in your Google Drive custom metadata.
     */
    FieldMappings?: DataSourceToIndexFieldMappingList;
    /**
     * A list of MIME types to exclude from the index. All documents matching the specified MIME type are excluded.  For a list of MIME types, see Using a Google Workspace Drive data source.
     */
    ExcludeMimeTypes?: ExcludeMimeTypesList;
    /**
     * A list of email addresses of the users. Documents owned by these users are excluded from the index. Documents shared with excluded users are indexed unless they are excluded in another way.
     */
    ExcludeUserAccounts?: ExcludeUserAccountsList;
    /**
     * A list of identifiers or shared drives to exclude from the index. All files and folders stored on the shared drive are excluded.
     */
    ExcludeSharedDrives?: ExcludeSharedDrivesList;
  }
  export type GroupAttributeField = string;
  export type GroupId = string;
  export interface GroupMembers {
    /**
     * A list of sub groups that belong to a group. For example, the sub groups "Research", "Engineering", and "Sales and Marketing" all belong to the group "Company".
     */
    MemberGroups?: MemberGroups;
    /**
     * A list of users that belong to a group. For example, a list of interns all belong to the "Interns" group.
     */
    MemberUsers?: MemberUsers;
    /**
     * If you have more than 1000 users and/or sub groups for a single group, you need to provide the path to the S3 file that lists your users and sub groups for a group. Your sub groups can contain more than 1000 users, but the list of sub groups that belong to a group (and/or users) must be no more than 1000. You can download this example S3 file that uses the correct format for listing group members. Note, dataSourceId is optional. The value of type for a group is always GROUP and for a user it is always USER.
     */
    S3PathforGroupMembers?: S3Path;
  }
  export type GroupOrderingIdSummaries = GroupOrderingIdSummary[];
  export interface GroupOrderingIdSummary {
    /**
     * The current processing status of actions for mapping users to their groups. The status can be either PROCESSING, SUCCEEDED, DELETING, DELETED, or FAILED.
     */
    Status?: PrincipalMappingStatus;
    /**
     * The last date-time an action was updated. An action can be a PUT or DELETE action for mapping users to their groups.
     */
    LastUpdatedAt?: Timestamp;
    /**
     * The date-time an action was received by Amazon Kendra. An action can be a PUT or DELETE action for mapping users to their groups.
     */
    ReceivedAt?: Timestamp;
    /**
     * The order in which actions should complete processing. An action can be a PUT or DELETE action for mapping users to their groups.
     */
    OrderingId?: PrincipalOrderingId;
    /**
     * The reason an action could not be processed. An action can be a PUT or DELETE action for mapping users to their groups.
     */
    FailureReason?: FailureReason;
  }
  export interface GroupSummary {
    /**
     *  The identifier of the group you want group summary information on. 
     */
    GroupId?: GroupId;
    /**
     *  The timestamp identifier used for the latest PUT or DELETE action. 
     */
    OrderingId?: PrincipalOrderingId;
  }
  export type Groups = PrincipalName[];
  export interface HierarchicalPrincipal {
    /**
     * A list of principal lists that define the hierarchy for which documents users should have access to. Each hierarchical list specifies which user or group has allow or deny access for each document.
     */
    PrincipalList: PrincipalList;
  }
  export type HierarchicalPrincipalList = HierarchicalPrincipal[];
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
    /**
     * The highlight type. 
     */
    Type?: HighlightType;
  }
  export type HighlightList = Highlight[];
  export type HighlightType = "STANDARD"|"THESAURUS_SYNONYM"|string;
  export interface HookConfiguration {
    /**
     * The condition used for when a Lambda function should be invoked. For example, you can specify a condition that if there are empty date-time values, then Amazon Kendra should invoke a function that inserts the current date-time.
     */
    InvocationCondition?: DocumentAttributeCondition;
    /**
     * The Amazon Resource Name (ARN) of a role with permission to run a Lambda function during ingestion. For more information, see IAM roles for Amazon Kendra.
     */
    LambdaArn: LambdaArn;
    /**
     * Stores the original, raw documents or the structured, parsed documents before and after altering them. For more information, see Data contracts for Lambda functions.
     */
    S3Bucket: S3BucketName;
  }
  export type Host = string;
  export type IdentityAttributeName = string;
  export type Importance = number;
  export interface IndexConfigurationSummary {
    /**
     * The identifier of the index.
     */
    Name?: IndexName;
    /**
     * A unique identifier for the index. Use this to identify the index when you are using APIs such as Query, DescribeIndex, UpdateIndex, and DeleteIndex.
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
     * The Unix timestamp when the index was last updated by the UpdateIndex API.
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
  export interface InlineCustomDocumentEnrichmentConfiguration {
    /**
     * Configuration of the condition used for the target document attribute or metadata field when ingesting documents into Amazon Kendra.
     */
    Condition?: DocumentAttributeCondition;
    /**
     * Configuration of the target document attribute or metadata field when ingesting documents into Amazon Kendra. You can also include a value.
     */
    Target?: DocumentAttributeTarget;
    /**
     *  TRUE to delete content if the condition used for the target attribute is met.
     */
    DocumentContentDeletion?: Boolean;
  }
  export type InlineCustomDocumentEnrichmentConfigurationList = InlineCustomDocumentEnrichmentConfiguration[];
  export type Integer = number;
  export type Interval = "THIS_MONTH"|"THIS_WEEK"|"ONE_WEEK_AGO"|"TWO_WEEKS_AGO"|"ONE_MONTH_AGO"|"TWO_MONTHS_AGO"|string;
  export type IssueSubEntity = "COMMENTS"|"ATTACHMENTS"|"WORKLOGS"|string;
  export type IssueSubEntityFilter = IssueSubEntity[];
  export type IssueType = String[];
  export type Issuer = string;
  export type JiraAccountUrl = string;
  export interface JiraConfiguration {
    /**
     * The URL of the Jira account. For example, company.attlassian.net or https://jira.company.com. You can find your Jira account URL in the URL of your profile page for Jira desktop.
     */
    JiraAccountUrl: JiraAccountUrl;
    /**
     * The Amazon Resource Name (ARN) of an Secrets Manager secret that contains the key-value pairs required to connect to your Jira data source. The secret must contain a JSON structure with the following keys:   jira-id—The Active Directory user name, along with the Domain Name System (DNS) domain name. For example, user@corp.example.com.   jiraCredentials—The password of the Jira account user.  
     */
    SecretArn: SecretArn;
    /**
     * Specify to use the change log option to update your index.
     */
    UseChangeLog?: Boolean;
    /**
     * Specify which projects to crawl in your Jira data source. You can specify one or more Jira project IDs.
     */
    Project?: Project;
    /**
     * Specify which issue types to crawl in your Jira data source. You can specify one or more of these options to crawl.
     */
    IssueType?: IssueType;
    /**
     * Specify which statuses to crawl in your Jira data source. You can specify one or more of these options to crawl.
     */
    Status?: JiraStatus;
    /**
     * Specify whether to crawl comments, attachments, and work logs. You can specify one or more of these options.
     */
    IssueSubEntityFilter?: IssueSubEntityFilter;
    /**
     * A list of DataSourceToIndexFieldMapping objects that map attributes or field names of Jira attachments to Amazon Kendra index field names. To create custom fields, use the UpdateIndex API before you map to Jira fields. For more information, see  Mapping data source fields. The Jira data source field names must exist in your Jira custom metadata.
     */
    AttachmentFieldMappings?: DataSourceToIndexFieldMappingList;
    /**
     * A list of DataSourceToIndexFieldMapping objects that map attributes or field names of Jira comments to Amazon Kendra index field names. To create custom fields, use the UpdateIndex API before you map to Jira fields. For more information, see  Mapping data source fields. The Jira data source field names must exist in your Jira custom metadata.
     */
    CommentFieldMappings?: DataSourceToIndexFieldMappingList;
    /**
     * A list of DataSourceToIndexFieldMapping objects that map attributes or field names of Jira issues to Amazon Kendra index field names. To create custom fields, use the UpdateIndex API before you map to Jira fields. For more information, see  Mapping data source fields. The Jira data source field names must exist in your Jira custom metadata.
     */
    IssueFieldMappings?: DataSourceToIndexFieldMappingList;
    /**
     * A list of DataSourceToIndexFieldMapping objects that map attributes or field names of Jira projects to Amazon Kendra index field names. To create custom fields, use the UpdateIndex API before you map to Jira fields. For more information, see  Mapping data source fields. The Jira data source field names must exist in your Jira custom metadata.
     */
    ProjectFieldMappings?: DataSourceToIndexFieldMappingList;
    /**
     * A list of DataSourceToIndexFieldMapping objects that map attributes or field names of Jira work logs to Amazon Kendra index field names. To create custom fields, use the UpdateIndex API before you map to Jira fields. For more information, see  Mapping data source fields. The Jira data source field names must exist in your Jira custom metadata.
     */
    WorkLogFieldMappings?: DataSourceToIndexFieldMappingList;
    /**
     * A list of regular expression patterns to include certain file paths, file names, and file types in your Jira data source. Files that match the patterns are included in the index. Files that don't match the patterns are excluded from the index. If a file matches both an inclusion pattern and an exclusion pattern, the exclusion pattern takes precedence and the file isn't included in the index.
     */
    InclusionPatterns?: DataSourceInclusionsExclusionsStrings;
    /**
     * A list of regular expression patterns to exclude certain file paths, file names, and file types in your Jira data source. Files that match the patterns are excluded from the index. Files that don’t match the patterns are included in the index. If a file matches both an inclusion pattern and an exclusion pattern, the exclusion pattern takes precedence and the file isn't included in the index.
     */
    ExclusionPatterns?: DataSourceInclusionsExclusionsStrings;
    /**
     * Configuration information for an Amazon Virtual Private Cloud to connect to your Jira. Your Jira account must reside inside your VPC.
     */
    VpcConfiguration?: DataSourceVpcConfiguration;
  }
  export type JiraStatus = String[];
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
  export type LambdaArn = string;
  export type LanguageCode = string;
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
     * If the previous response was incomplete (because there is more data to retrieve), Amazon Kendra returns a pagination token in the response. You can use this pagination token to retrieve the next set of jobs.
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
     * If the response is truncated, Amazon Kendra returns this token that you can use in the subsequent request to retrieve the next set of jobs.
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
  export interface ListEntityPersonasRequest {
    /**
     * The identifier of your Amazon Kendra experience.
     */
    Id: ExperienceId;
    /**
     * The identifier of the index for your Amazon Kendra experience.
     */
    IndexId: IndexId;
    /**
     * If the previous response was incomplete (because there is more data to retrieve), Amazon Kendra returns a pagination token in the response. You can use this pagination token to retrieve the next set of users or groups.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of returned users or groups.
     */
    MaxResults?: MaxResultsIntegerForListEntityPersonasRequest;
  }
  export interface ListEntityPersonasResponse {
    /**
     * An array of summary information for one or more users or groups.
     */
    SummaryItems?: PersonasSummaryList;
    /**
     * If the response is truncated, Amazon Kendra returns this token, which you can use in a later request to retrieve the next set of users or groups.
     */
    NextToken?: NextToken;
  }
  export interface ListExperienceEntitiesRequest {
    /**
     * The identifier of your Amazon Kendra experience.
     */
    Id: ExperienceId;
    /**
     * The identifier of the index for your Amazon Kendra experience.
     */
    IndexId: IndexId;
    /**
     * If the previous response was incomplete (because there is more data to retrieve), Amazon Kendra returns a pagination token in the response. You can use this pagination token to retrieve the next set of users or groups.
     */
    NextToken?: NextToken;
  }
  export interface ListExperienceEntitiesResponse {
    /**
     * An array of summary information for one or more users or groups.
     */
    SummaryItems?: ExperienceEntitiesSummaryList;
    /**
     * If the response is truncated, Amazon Kendra returns this token, which you can use in a later request to retrieve the next set of users or groups.
     */
    NextToken?: NextToken;
  }
  export interface ListExperiencesRequest {
    /**
     * The identifier of the index for your Amazon Kendra experience.
     */
    IndexId: IndexId;
    /**
     * If the previous response was incomplete (because there is more data to retrieve), Amazon Kendra returns a pagination token in the response. You can use this pagination token to retrieve the next set of Amazon Kendra experiences.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of returned Amazon Kendra experiences.
     */
    MaxResults?: MaxResultsIntegerForListExperiencesRequest;
  }
  export interface ListExperiencesResponse {
    /**
     * An array of summary information for one or more Amazon Kendra experiences.
     */
    SummaryItems?: ExperiencesSummaryList;
    /**
     * If the response is truncated, Amazon Kendra returns this token, which you can use in a later request to retrieve the next set of Amazon Kendra experiences.
     */
    NextToken?: NextToken;
  }
  export interface ListFaqsRequest {
    /**
     * The index that contains the FAQ lists.
     */
    IndexId: IndexId;
    /**
     * If the previous response was incomplete (because there is more data to retrieve), Amazon Kendra returns a pagination token in the response. You can use this pagination token to retrieve the next set of FAQs.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of FAQs to return in the response. If there are fewer results in the list, this response contains only the actual results.
     */
    MaxResults?: MaxResultsIntegerForListFaqsRequest;
  }
  export interface ListFaqsResponse {
    /**
     * If the response is truncated, Amazon Kendra returns this token that you can use in the subsequent request to retrieve the next set of FAQs.
     */
    NextToken?: NextToken;
    /**
     * information about the FAQs associated with the specified index.
     */
    FaqSummaryItems?: FaqSummaryItems;
  }
  export interface ListGroupsOlderThanOrderingIdRequest {
    /**
     * The identifier of the index for getting a list of groups mapped to users before a given ordering or timestamp identifier.
     */
    IndexId: IndexId;
    /**
     * The identifier of the data source for getting a list of groups mapped to users before a given ordering timestamp identifier.
     */
    DataSourceId?: DataSourceId;
    /**
     * The timestamp identifier used for the latest PUT or DELETE action for mapping users to their groups.
     */
    OrderingId: PrincipalOrderingId;
    /**
     *  If the previous response was incomplete (because there is more data to retrieve), Amazon Kendra returns a pagination token in the response. You can use this pagination token to retrieve the next set of groups that are mapped to users before a given ordering or timestamp identifier. 
     */
    NextToken?: NextToken;
    /**
     *  The maximum number of returned groups that are mapped to users before a given ordering or timestamp identifier. 
     */
    MaxResults?: MaxResultsIntegerForListPrincipalsRequest;
  }
  export interface ListGroupsOlderThanOrderingIdResponse {
    /**
     *  Summary information for list of groups that are mapped to users before a given ordering or timestamp identifier. 
     */
    GroupsSummaries?: ListOfGroupSummaries;
    /**
     *  If the response is truncated, Amazon Kendra returns this token that you can use in the subsequent request to retrieve the next set of groups that are mapped to users before a given ordering or timestamp identifier. 
     */
    NextToken?: NextToken;
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
     * An array of summary information on the configuration of one or more indexes.
     */
    IndexConfigurationSummaryItems?: IndexConfigurationSummaryList;
    /**
     * If the response is truncated, Amazon Kendra returns this token that you can use in the subsequent request to retrieve the next set of indexes.
     */
    NextToken?: NextToken;
  }
  export type ListOfGroupSummaries = GroupSummary[];
  export interface ListQuerySuggestionsBlockListsRequest {
    /**
     * The identifier of the index for a list of all block lists that exist for that index. For information on the current quota limits for block lists, see Quotas for Amazon Kendra.
     */
    IndexId: IndexId;
    /**
     * If the previous response was incomplete (because there is more data to retrieve), Amazon Kendra returns a pagination token in the response. You can use this pagination token to retrieve the next set of block lists (BlockListSummaryItems).
     */
    NextToken?: NextToken;
    /**
     * The maximum number of block lists to return.
     */
    MaxResults?: MaxResultsIntegerForListQuerySuggestionsBlockLists;
  }
  export interface ListQuerySuggestionsBlockListsResponse {
    /**
     * Summary items for a block list. This includes summary items on the block list ID, block list name, when the block list was created, when the block list was last updated, and the count of block words/phrases in the block list. For information on the current quota limits for block lists, see Quotas for Amazon Kendra.
     */
    BlockListSummaryItems?: QuerySuggestionsBlockListSummaryItems;
    /**
     * If the response is truncated, Amazon Kendra returns this token that you can use in the subsequent request to retrieve the next set of block lists.
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
  export interface ListThesauriRequest {
    /**
     * The identifier of the index associated with the thesaurus to list.
     */
    IndexId: IndexId;
    /**
     * If the previous response was incomplete (because there is more data to retrieve), Amazon Kendra returns a pagination token in the response. You can use this pagination token to retrieve the next set of thesauri (ThesaurusSummaryItems). 
     */
    NextToken?: NextToken;
    /**
     * The maximum number of thesauri to return.
     */
    MaxResults?: MaxResultsIntegerForListThesauriRequest;
  }
  export interface ListThesauriResponse {
    /**
     * If the response is truncated, Amazon Kendra returns this token that you can use in the subsequent request to retrieve the next set of thesauri. 
     */
    NextToken?: NextToken;
    /**
     * An array of summary information for a thesaurus or multiple thesauri.
     */
    ThesaurusSummaryItems?: ThesaurusSummaryItems;
  }
  export type Long = number;
  export type LookBackPeriod = number;
  export type MaxContentSizePerPageInMegaBytes = number;
  export type MaxLinksPerPage = number;
  export type MaxResultsIntegerForListDataSourceSyncJobsRequest = number;
  export type MaxResultsIntegerForListDataSourcesRequest = number;
  export type MaxResultsIntegerForListEntityPersonasRequest = number;
  export type MaxResultsIntegerForListExperiencesRequest = number;
  export type MaxResultsIntegerForListFaqsRequest = number;
  export type MaxResultsIntegerForListIndicesRequest = number;
  export type MaxResultsIntegerForListPrincipalsRequest = number;
  export type MaxResultsIntegerForListQuerySuggestionsBlockLists = number;
  export type MaxResultsIntegerForListThesauriRequest = number;
  export type MaxUrlsPerMinuteCrawlRate = number;
  export interface MemberGroup {
    /**
     * The identifier of the sub group you want to map to a group.
     */
    GroupId: GroupId;
    /**
     * The identifier of the data source for the sub group you want to map to a group.
     */
    DataSourceId?: DataSourceId;
  }
  export type MemberGroups = MemberGroup[];
  export interface MemberUser {
    /**
     * The identifier of the user you want to map to a group.
     */
    UserId: UserId;
  }
  export type MemberUsers = MemberUser[];
  export type MetricType = "QUERIES_BY_COUNT"|"QUERIES_BY_ZERO_CLICK_RATE"|"QUERIES_BY_ZERO_RESULT_RATE"|"DOCS_BY_CLICK_COUNT"|"AGG_QUERY_DOC_METRICS"|"TREND_QUERY_DOC_METRICS"|string;
  export type MetricValue = string;
  export type MimeType = string;
  export type MinimumNumberOfQueryingUsers = number;
  export type MinimumQueryCount = number;
  export type Mode = "ENABLED"|"LEARN_ONLY"|string;
  export type NameType = string;
  export type NextToken = string;
  export type ObjectBoolean = boolean;
  export interface OneDriveConfiguration {
    /**
     * The Azure Active Directory domain of the organization. 
     */
    TenantDomain: TenantDomain;
    /**
     * The Amazon Resource Name (ARN) of an Secrets Managersecret that contains the user name and password to connect to OneDrive. The user namd should be the application ID for the OneDrive application, and the password is the application key for the OneDrive application.
     */
    SecretArn: SecretArn;
    /**
     * A list of user accounts whose documents should be indexed.
     */
    OneDriveUsers: OneDriveUsers;
    /**
     * A list of regular expression patterns to include certain documents in your OneDrive. Documents that match the patterns are included in the index. Documents that don't match the patterns are excluded from the index. If a document matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the document isn't included in the index. The pattern is applied to the file name.
     */
    InclusionPatterns?: DataSourceInclusionsExclusionsStrings;
    /**
     * A list of regular expression patterns to exclude certain documents in your OneDrive. Documents that match the patterns are excluded from the index. Documents that don't match the patterns are included in the index. If a document matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the document isn't included in the index. The pattern is applied to the file name.
     */
    ExclusionPatterns?: DataSourceInclusionsExclusionsStrings;
    /**
     * A list of DataSourceToIndexFieldMapping objects that map OneDrive data source attributes or field names to Amazon Kendra index field names. To create custom fields, use the UpdateIndex API before you map to OneDrive fields. For more information, see Mapping data source fields. The OneDrive data source field names must exist in your OneDrive custom metadata.
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
  export type OrganizationId = string;
  export type Persona = "OWNER"|"VIEWER"|string;
  export interface PersonasSummary {
    /**
     * The identifier of a user or group in your Amazon Web Services SSO identity source. For example, a user ID could be an email.
     */
    EntityId?: EntityId;
    /**
     * The persona that defines the specific permissions of the user or group in your Amazon Web Services SSO identity source. The available personas or access roles are Owner and Viewer. For more information on these personas, see Providing access to your search page.
     */
    Persona?: Persona;
    /**
     * The date-time the summary information was created.
     */
    CreatedAt?: Timestamp;
    /**
     * The date-time the summary information was last updated.
     */
    UpdatedAt?: Timestamp;
  }
  export type PersonasSummaryList = PersonasSummary[];
  export type Port = number;
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
    /**
     * The identifier of the data source the principal should access documents from.
     */
    DataSourceId?: DataSourceId;
  }
  export type PrincipalList = Principal[];
  export type PrincipalMappingStatus = "FAILED"|"SUCCEEDED"|"PROCESSING"|"DELETING"|"DELETED"|string;
  export type PrincipalName = string;
  export type PrincipalOrderingId = number;
  export type PrincipalType = "USER"|"GROUP"|string;
  export type PrivateChannelFilter = String[];
  export type Project = String[];
  export interface ProxyConfiguration {
    /**
     * The name of the website host you want to connect to via a web proxy server. For example, the host name of https://a.example.com/page1.html is "a.example.com".
     */
    Host: Host;
    /**
     * The port number of the website host you want to connect to via a web proxy server.  For example, the port for https://a.example.com/page1.html is 443, the standard port for HTTPS.
     */
    Port: Port;
    /**
     * Your secret ARN, which you can create in Secrets Manager  The credentials are optional. You use a secret if web proxy credentials are required to connect to a website host. Amazon Kendra currently support basic authentication to connect to a web proxy server. The secret stores your credentials.
     */
    Credentials?: SecretArn;
  }
  export type PublicChannelFilter = String[];
  export interface PutPrincipalMappingRequest {
    /**
     * The identifier of the index you want to map users to their groups.
     */
    IndexId: IndexId;
    /**
     * The identifier of the data source you want to map users to their groups. This is useful if a group is tied to multiple data sources, but you only want the group to access documents of a certain data source. For example, the groups "Research", "Engineering", and "Sales and Marketing" are all tied to the company's documents stored in the data sources Confluence and Salesforce. However, "Sales and Marketing" team only needs access to customer-related documents stored in Salesforce.
     */
    DataSourceId?: DataSourceId;
    /**
     * The identifier of the group you want to map its users to.
     */
    GroupId: GroupId;
    /**
     * The list that contains your users or sub groups that belong the same group. For example, the group "Company" includes the user "CEO" and the sub groups "Research", "Engineering", and "Sales and Marketing". If you have more than 1000 users and/or sub groups for a single group, you need to provide the path to the S3 file that lists your users and sub groups for a group. Your sub groups can contain more than 1000 users, but the list of sub groups that belong to a group (and/or users) must be no more than 1000.
     */
    GroupMembers: GroupMembers;
    /**
     * The timestamp identifier you specify to ensure Amazon Kendra does not override the latest PUT action with previous actions. The highest number ID, which is the ordering ID, is the latest action you want to process and apply on top of other actions with lower number IDs. This prevents previous actions with lower number IDs from possibly overriding the latest action. The ordering ID can be the UNIX time of the last update you made to a group members list. You would then provide this list when calling PutPrincipalMapping. This ensures your PUT action for that updated group with the latest members list doesn't get overwritten by earlier PUT actions for the same group which are yet to be processed. The default ordering ID is the current UNIX time in milliseconds that the action was received by Amazon Kendra.
     */
    OrderingId?: PrincipalOrderingId;
    /**
     * The Amazon Resource Name (ARN) of a role that has access to the S3 file that contains your list of users or sub groups that belong to a group. For more information, see IAM roles for Amazon Kendra.
     */
    RoleArn?: RoleArn;
  }
  export type QueryCapacityUnit = number;
  export type QueryId = string;
  export type QueryIdentifiersEnclosingOption = "DOUBLE_QUOTES"|"NONE"|string;
  export interface QueryRequest {
    /**
     * The unique identifier of the index to search. The identifier is returned in the response from the CreateIndex API.
     */
    IndexId: IndexId;
    /**
     * The text to search for.
     */
    QueryText?: QueryText;
    /**
     * Enables filtered searches based on document attributes. You can only provide one attribute filter; however, the AndAllFilters, NotFilter, and OrAllFilters parameters contain a list of other filters. The AttributeFilter parameter enables you to create a set of filtering rules that a document must satisfy to be included in the query results.
     */
    AttributeFilter?: AttributeFilter;
    /**
     * An array of documents attributes. Amazon Kendra returns a count for each attribute key specified. This helps your users narrow their search.
     */
    Facets?: FacetList;
    /**
     * An array of document attributes to include in the response. You can limit the response to include certain document attributes. By default all document attributes are included in the response.
     */
    RequestedDocumentAttributes?: DocumentAttributeKeyList;
    /**
     * Sets the type of query. Only results for the specified query type are returned.
     */
    QueryResultTypeFilter?: QueryResultType;
    /**
     * Overrides relevance tuning configurations of fields or attributes set at the index level. If you use this API to override the relevance tuning configured at the index level, but there is no relevance tuning configured at the index level, then Amazon Kendra does not apply any relevance tuning. If there is relevance tuning configured at the index level, but you do not use this API to override any relevance tuning in the index, then Amazon Kendra uses the relevance tuning that is configured at the index level. If there is relevance tuning configured for fields at the index level, but you use this API to override only some of these fields, then for the fields you did not override, the importance is set to 1.
     */
    DocumentRelevanceOverrideConfigurations?: DocumentRelevanceOverrideConfigurationList;
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
     * The user context token or user and group information.
     */
    UserContext?: UserContext;
    /**
     * Provides an identifier for a specific user. The VisitorId should be a unique identifier, such as a GUID. Don't use personally identifiable information, such as the user's email address, as the VisitorId.
     */
    VisitorId?: VisitorId;
    /**
     * Enables suggested spell corrections for queries.
     */
    SpellCorrectionConfiguration?: SpellCorrectionConfiguration;
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
    /**
     * A list of warning codes and their messages on problems with your query. Amazon Kendra currently only supports one type of warning, which is a warning on invalid syntax used in the query. For examples of invalid query syntax, see Searching with advanced query syntax.
     */
    Warnings?: WarningList;
    /**
     * A list of information related to suggested spell corrections for a query.
     */
    SpellCorrectedQueries?: SpellCorrectedQueryList;
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
     * An array of document attributes assigned to a document in the search results. For example, the document author (_author) or the source URI (_source_uri) of the document.
     */
    DocumentAttributes?: DocumentAttributeList;
    /**
     * Indicates the confidence that Amazon Kendra has that a result matches the query that you provided. Each result is placed into a bin that indicates the confidence, VERY_HIGH, HIGH, MEDIUM and LOW. You can use the score to determine if a response meets the confidence needed for your application. The field is only set to LOW when the Type field is set to DOCUMENT and Amazon Kendra is not confident that the result matches the query.
     */
    ScoreAttributes?: ScoreAttributes;
    /**
     * A token that identifies a particular result from a particular query. Use this token to provide click-through feedback for the result. For more information, see  Submitting feedback .
     */
    FeedbackToken?: FeedbackToken;
  }
  export type QueryResultItemList = QueryResultItem[];
  export type QueryResultType = "DOCUMENT"|"QUESTION_ANSWER"|"ANSWER"|string;
  export type QuerySuggestionsBlockListId = string;
  export type QuerySuggestionsBlockListName = string;
  export type QuerySuggestionsBlockListStatus = "ACTIVE"|"CREATING"|"DELETING"|"UPDATING"|"ACTIVE_BUT_UPDATE_FAILED"|"FAILED"|string;
  export interface QuerySuggestionsBlockListSummary {
    /**
     * The identifier of a block list.
     */
    Id?: QuerySuggestionsBlockListId;
    /**
     * The name of the block list.
     */
    Name?: QuerySuggestionsBlockListName;
    /**
     * The status of the block list.
     */
    Status?: QuerySuggestionsBlockListStatus;
    /**
     * The date-time summary information for a query suggestions block list was last created.
     */
    CreatedAt?: Timestamp;
    /**
     * The date-time the block list was last updated.
     */
    UpdatedAt?: Timestamp;
    /**
     * The number of items in the block list file.
     */
    ItemCount?: Integer;
  }
  export type QuerySuggestionsBlockListSummaryItems = QuerySuggestionsBlockListSummary[];
  export type QuerySuggestionsId = string;
  export type QuerySuggestionsStatus = "ACTIVE"|"UPDATING"|string;
  export type QueryText = string;
  export interface QuipConfiguration {
    /**
     * The Quip site domain.
     */
    Domain: Domain;
    /**
     * The Amazon Resource Name (ARN) of an Secrets Manager secret that contains the key-value pairs that are required to connect to your Quip. The secret must contain a JSON structure with the following keys:   accessToken—The token created in Quip. For more information, see Authentication for a Quip data source.  
     */
    SecretArn: SecretArn;
    /**
     * Specify whether to crawl file comments in Quip. You can specify one or more of these options.
     */
    CrawlFileComments?: Boolean;
    /**
     * Specify whether to crawl chat rooms in Quip. You can specify one or more of these options.
     */
    CrawlChatRooms?: Boolean;
    /**
     * Specify whether to crawl attachments in Quip. You can specify one or more of these options.
     */
    CrawlAttachments?: Boolean;
    /**
     * The identifier of the Quip folder IDs to index.
     */
    FolderIds?: FolderIdList;
    /**
     * A list of DataSourceToIndexFieldMapping objects that map attributes or field names of Quip threads to Amazon Kendra index field names. To create custom fields, use the UpdateIndex API before you map to Quip fields. For more information, see Mapping data source fields. The Quip field names must exist in your Quip custom metadata.
     */
    ThreadFieldMappings?: DataSourceToIndexFieldMappingList;
    /**
     * A list of DataSourceToIndexFieldMapping objects that map attributes or field names of Quip messages to Amazon Kendra index field names. To create custom fields, use the UpdateIndex API before you map to Quip fields. For more information, see Mapping data source fields. The Quip field names must exist in your Quip custom metadata.
     */
    MessageFieldMappings?: DataSourceToIndexFieldMappingList;
    /**
     * A list of DataSourceToIndexFieldMapping objects that map attributes or field names of Quip attachments to Amazon Kendra index field names. To create custom fields, use the UpdateIndex API before you map to Quip fields. For more information, see Mapping data source fields. The Quip field names must exist in your Quip custom metadata.
     */
    AttachmentFieldMappings?: DataSourceToIndexFieldMappingList;
    /**
     * A list of regular expression patterns to include certain files in your Quip file system. Files that match the patterns are included in the index. Files that don't match the patterns are excluded from the index. If a file matches both an inclusion pattern and an exclusion pattern, the exclusion pattern takes precedence, and the file isn't included in the index.
     */
    InclusionPatterns?: DataSourceInclusionsExclusionsStrings;
    /**
     * A list of regular expression patterns to exclude certain files in your Quip file system. Files that match the patterns are excluded from the index. Files that don’t match the patterns are included in the index. If a file matches both an inclusion pattern and an exclusion pattern, the exclusion pattern takes precedence, and the file isn't included in the index.
     */
    ExclusionPatterns?: DataSourceInclusionsExclusionsStrings;
    /**
     * Configuration information for an Amazon Virtual Private Cloud (VPC) to connect to your Quip. For more information, see Configuring a VPC.
     */
    VpcConfiguration?: DataSourceVpcConfiguration;
  }
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
     * A list of glob patterns for documents that should be indexed. If a document that matches an inclusion pattern also matches an exclusion pattern, the document is not indexed. Some examples are:    *.txt will include all text files in a directory (files with the extension .txt).    ***.txt will include all text files in a directory and its subdirectories.    *tax* will include all files in a directory that contain 'tax' in the file name, such as 'tax', 'taxes', 'income_tax'.  
     */
    InclusionPatterns?: DataSourceInclusionsExclusionsStrings;
    /**
     * A list of glob patterns for documents that should not be indexed. If a document that matches an inclusion prefix or inclusion pattern also matches an exclusion pattern, the document is not indexed. Some examples are:    *.png , *.jpg will exclude all PNG and JPEG image files in a directory (files with the extensions .png and .jpg).    *internal* will exclude all files in a directory that contain 'internal' in the file name, such as 'internal', 'internal_only', 'company_internal'.    ***internal* will exclude all internal-related files in a directory and its subdirectories.  
     */
    ExclusionPatterns?: DataSourceInclusionsExclusionsStrings;
    DocumentsMetadataConfiguration?: DocumentsMetadataConfiguration;
    /**
     * Provides the path to the S3 bucket that contains the user context filtering files for the data source. For the format of the file, see Access control for S3 data sources.
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
     * The name of the column in the Salesforce FeedItem table that contains the title of the document. This is typically the Title column.
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
     * The Amazon Resource Name (ARN) of an Secrets Managersecret that contains the key/value pairs required to connect to your Salesforce instance. The secret must contain a JSON structure with the following keys:   authenticationUrl - The OAUTH endpoint that Amazon Kendra connects to get an OAUTH token.    consumerKey - The application public key generated when you created your Salesforce application.   consumerSecret - The application private key generated when you created your Salesforce application.   password - The password associated with the user logging in to the Salesforce instance.   securityToken - The token associated with the user account logging in to the Salesforce instance.   username - The user name of the user logging in to the Salesforce instance.  
     */
    SecretArn: SecretArn;
    /**
     * Configuration of the Salesforce standard objects that Amazon Kendra indexes.
     */
    StandardObjectConfigurations?: SalesforceStandardObjectConfigurationList;
    /**
     * Configuration information for the knowledge article types that Amazon Kendra indexes. Amazon Kendra indexes standard knowledge articles and the standard fields of knowledge articles, or the custom fields of custom knowledge articles, but not both.
     */
    KnowledgeArticleConfiguration?: SalesforceKnowledgeArticleConfiguration;
    /**
     * Configuration information for Salesforce chatter feeds.
     */
    ChatterFeedConfiguration?: SalesforceChatterFeedConfiguration;
    /**
     * Indicates whether Amazon Kendra should index attachments to Salesforce objects.
     */
    CrawlAttachments?: Boolean;
    /**
     * Configuration information for processing attachments to Salesforce standard objects. 
     */
    StandardObjectAttachmentConfiguration?: SalesforceStandardObjectAttachmentConfiguration;
    /**
     * A list of regular expression patterns to include certain documents in your Salesforce. Documents that match the patterns are included in the index. Documents that don't match the patterns are excluded from the index. If a document matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the document isn't included in the index. The pattern is applied to the name of the attached file.
     */
    IncludeAttachmentFilePatterns?: DataSourceInclusionsExclusionsStrings;
    /**
     * A list of regular expression patterns to exclude certain documents in your Salesforce. Documents that match the patterns are excluded from the index. Documents that don't match the patterns are included in the index. If a document matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the document isn't included in the index. The pattern is applied to the name of the attached file.
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
     * Maps attributes or field names of the custom knowledge article to Amazon Kendra index field names. To create custom fields, use the UpdateIndex API before you map to Salesforce fields. For more information, see Mapping data source fields. The Salesforce data source field names must exist in your Salesforce custom metadata.
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
     * Configuration information for standard Salesforce knowledge articles.
     */
    StandardKnowledgeArticleTypeConfiguration?: SalesforceStandardKnowledgeArticleTypeConfiguration;
    /**
     * Configuration information for custom Salesforce knowledge articles.
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
     * Maps attributes or field names of the knowledge article to Amazon Kendra index field names. To create custom fields, use the UpdateIndex API before you map to Salesforce fields. For more information, see Mapping data source fields. The Salesforce data source field names must exist in your Salesforce custom metadata.
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
     * The name of the field in the standard object table that contains the document title.
     */
    DocumentTitleFieldName?: DataSourceFieldName;
    /**
     * Maps attributes or field names of the standard object to Amazon Kendra index field names. To create custom fields, use the UpdateIndex API before you map to Salesforce fields. For more information, see Mapping data source fields. The Salesforce data source field names must exist in your Salesforce custom metadata.
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
  export type ScoreConfidence = "VERY_HIGH"|"HIGH"|"MEDIUM"|"LOW"|"NOT_AVAILABLE"|string;
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
  export type SeedUrl = string;
  export interface SeedUrlConfiguration {
    /**
     * The list of seed or starting point URLs of the websites you want to crawl. The list can include a maximum of 100 seed URLs.
     */
    SeedUrls: SeedUrlList;
    /**
     * You can choose one of the following modes:    HOST_ONLY – crawl only the website host names. For example, if the seed URL is "abc.example.com", then only URLs with host name "abc.example.com" are crawled.    SUBDOMAINS – crawl the website host names with subdomains. For example, if the seed URL is "abc.example.com", then "a.abc.example.com" and "b.abc.example.com" are also crawled.    EVERYTHING – crawl the website host names with subdomains and other domains that the webpages link to.   The default mode is set to HOST_ONLY.
     */
    WebCrawlerMode?: WebCrawlerMode;
  }
  export type SeedUrlList = SeedUrl[];
  export interface ServerSideEncryptionConfiguration {
    /**
     * The identifier of the KMScustomer master key (CMK). Amazon Kendra doesn't support asymmetric CMKs.
     */
    KmsKeyId?: KmsKeyId;
  }
  export type ServiceNowAuthenticationType = "HTTP_BASIC"|"OAUTH2"|string;
  export type ServiceNowBuildVersionType = "LONDON"|"OTHERS"|string;
  export interface ServiceNowConfiguration {
    /**
     * The ServiceNow instance that the data source connects to. The host endpoint should look like the following: {instance}.service-now.com. 
     */
    HostUrl: ServiceNowHostUrl;
    /**
     * The Amazon Resource Name (ARN) of the Secrets Manager secret that contains the user name and password required to connect to the ServiceNow instance.
     */
    SecretArn: SecretArn;
    /**
     * The identifier of the release that the ServiceNow host is running. If the host is not running the LONDON release, use OTHERS.
     */
    ServiceNowBuildVersion: ServiceNowBuildVersionType;
    /**
     * Configuration information for crawling knowledge articles in the ServiceNow site.
     */
    KnowledgeArticleConfiguration?: ServiceNowKnowledgeArticleConfiguration;
    /**
     * Configuration information for crawling service catalogs in the ServiceNow site.
     */
    ServiceCatalogConfiguration?: ServiceNowServiceCatalogConfiguration;
    /**
     * The type of authentication used to connect to the ServiceNow instance. If you choose HTTP_BASIC, Amazon Kendra is authenticated using the user name and password provided in the Secrets Manager secret in the SecretArn field. When you choose OAUTH2, Amazon Kendra is authenticated using the OAuth token and secret provided in the Secrets Manager secret, and the user name and password are used to determine which information Amazon Kendra has access to. When you use OAUTH2 authentication, you must generate a token and a client secret using the ServiceNow console. For more information, see Using a ServiceNow data source.
     */
    AuthenticationType?: ServiceNowAuthenticationType;
  }
  export type ServiceNowHostUrl = string;
  export interface ServiceNowKnowledgeArticleConfiguration {
    /**
     * Indicates whether Amazon Kendra should index attachments to knowledge articles.
     */
    CrawlAttachments?: Boolean;
    /**
     * A list of regular expression patterns to include certain attachments of knowledge articles in your ServiceNow. Item that match the patterns are included in the index. Items that don't match the patterns are excluded from the index. If an item matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the item isn't included in the index. The regex is applied to the field specified in the PatternTargetField.
     */
    IncludeAttachmentFilePatterns?: DataSourceInclusionsExclusionsStrings;
    /**
     * A list of regular expression patterns to exclude certain attachments of knowledge articles in your ServiceNow. Item that match the patterns are excluded from the index. Items that don't match the patterns are included in the index. If an item matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the item isn't included in the index. The regex is applied to the field specified in the PatternTargetField.
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
     * Maps attributes or field names of knoweldge articles to Amazon Kendra index field names. To create custom fields, use the UpdateIndex API before you map to ServiceNow fields. For more information, see Mapping data source fields. The ServiceNow data source field names must exist in your ServiceNow custom metadata.
     */
    FieldMappings?: DataSourceToIndexFieldMappingList;
    /**
     * A query that selects the knowledge articles to index. The query can return articles from multiple knowledge bases, and the knowledge bases can be public or private. The query string must be one generated by the ServiceNow console. For more information, see Specifying documents to index with a query. 
     */
    FilterQuery?: ServiceNowKnowledgeArticleFilterQuery;
  }
  export type ServiceNowKnowledgeArticleFilterQuery = string;
  export interface ServiceNowServiceCatalogConfiguration {
    /**
     * Indicates whether Amazon Kendra should crawl attachments to the service catalog items. 
     */
    CrawlAttachments?: Boolean;
    /**
     * A list of regular expression patterns to include certain attachments of catalogs in your ServiceNow. Item that match the patterns are included in the index. Items that don't match the patterns are excluded from the index. If an item matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the item isn't included in the index. The regex is applied to the file name of the attachment.
     */
    IncludeAttachmentFilePatterns?: DataSourceInclusionsExclusionsStrings;
    /**
     * A list of regular expression patterns to exclude certain attachments of catalogs in your ServiceNow. Item that match the patterns are excluded from the index. Items that don't match the patterns are included in the index. If an item matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the item isn't included in the index. The regex is applied to the file name of the attachment.
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
     * Maps attributes or field names of catalogs to Amazon Kendra index field names. To create custom fields, use the UpdateIndex API before you map to ServiceNow fields. For more information, see Mapping data source fields. The ServiceNow data source field names must exist in your ServiceNow custom metadata.
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
     * The Amazon Resource Name (ARN) of credentials stored in Secrets Manager. The credentials should be a user/password pair. If you use SharePoint Server, you also need to provide the sever domain name as part of the credentials. For more information, see Using a Microsoft SharePoint Data Source. For more information about Secrets Manager see  What Is Secrets Manager in the Secrets Manager  user guide.
     */
    SecretArn: SecretArn;
    /**
     *  TRUE to include attachments to documents stored in your Microsoft SharePoint site in the index; otherwise, FALSE.
     */
    CrawlAttachments?: Boolean;
    /**
     *  TRUE to use the SharePoint change log to determine which documents require updating in the index. Depending on the change log's size, it may take longer for Amazon Kendra to use the change log than to scan all of your documents in SharePoint.
     */
    UseChangeLog?: Boolean;
    /**
     * A list of regular expression patterns to include certain documents in your SharePoint. Documents that match the patterns are included in the index. Documents that don't match the patterns are excluded from the index. If a document matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the document isn't included in the index. The regex is applied to the display URL of the SharePoint document.
     */
    InclusionPatterns?: DataSourceInclusionsExclusionsStrings;
    /**
     * A list of regular expression patterns to exclude certain documents in your SharePoint. Documents that match the patterns are excluded from the index. Documents that don't match the patterns are included in the index. If a document matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the document isn't included in the index. The regex is applied to the display URL of the SharePoint document.
     */
    ExclusionPatterns?: DataSourceInclusionsExclusionsStrings;
    VpcConfiguration?: DataSourceVpcConfiguration;
    /**
     * A list of DataSourceToIndexFieldMapping objects that map SharePoint data source attributes or field names to Amazon Kendra index field names. To create custom fields, use the UpdateIndex API before you map to SharePoint fields. For more information, see Mapping data source fields. The SharePoint data source field names must exist in your SharePoint custom metadata.
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
    SslCertificateS3Path?: S3Path;
  }
  export type SharePointUrlList = Url[];
  export type SharePointVersion = "SHAREPOINT_2013"|"SHAREPOINT_2016"|"SHAREPOINT_ONLINE"|string;
  export type SharedDriveId = string;
  export type SinceCrawlDate = string;
  export type SiteMap = string;
  export interface SiteMapsConfiguration {
    /**
     * The list of sitemap URLs of the websites you want to crawl. The list can include a maximum of three sitemap URLs.
     */
    SiteMaps: SiteMapsList;
  }
  export type SiteMapsList = SiteMap[];
  export interface SlackConfiguration {
    /**
     * The identifier of the team in the Slack workspace. For example, T0123456789. You can find your team ID in the URL of the main page of your Slack workspace. When you log in to Slack via a browser, you are directed to the URL of the main page. For example, https://app.slack.com/client/T0123456789/....
     */
    TeamId: TeamId;
    /**
     * The Amazon Resource Name (ARN) of an Secrets Manager secret that contains the key-value pairs required to connect to your Slack workspace team. The secret must contain a JSON structure with the following keys:   slackToken—The user or bot token created in Slack. For more information on creating a token in Slack, see Authentication for a Slack data source.  
     */
    SecretArn: SecretArn;
    /**
     * Configuration information for an Amazon Virtual Private Cloud to connect to your Slack. For more information, see Configuring a VPC.
     */
    VpcConfiguration?: DataSourceVpcConfiguration;
    /**
     * Specify whether to index public channels, private channels, group messages, and direct messages. You can specify one or more of these options.
     */
    SlackEntityList: SlackEntityList;
    /**
     *  TRUE to use the Slack change log to determine which documents require updating in the index. Depending on the Slack change log's size, it may take longer for Amazon Kendra to use the change log than to scan all of your documents in Slack.
     */
    UseChangeLog?: Boolean;
    /**
     *  TRUE to index bot messages from your Slack workspace team.
     */
    CrawlBotMessage?: Boolean;
    /**
     *  TRUE to exclude archived messages to index from your Slack workspace team.
     */
    ExcludeArchived?: Boolean;
    /**
     * The date to start crawling your data from your Slack workspace team. The date must follow this format: yyyy-mm-dd.
     */
    SinceCrawlDate: SinceCrawlDate;
    /**
     * The number of hours for change log to look back from when you last synchronized your data. You can look back up to 7 days or 168 hours. Change log updates your index only if new content was added since you last synced your data. Updated or deleted content from before you last synced does not get updated in your index. To capture updated or deleted content before you last synced, set the LookBackPeriod to the number of hours you want change log to look back.
     */
    LookBackPeriod?: LookBackPeriod;
    /**
     * The list of private channel names from your Slack workspace team. You use this if you want to index specific private channels, not all private channels. You can also use regular expression patterns to filter private channels.
     */
    PrivateChannelFilter?: PrivateChannelFilter;
    /**
     * The list of public channel names to index from your Slack workspace team. You use this if you want to index specific public channels, not all public channels. You can also use regular expression patterns to filter public channels.
     */
    PublicChannelFilter?: PublicChannelFilter;
    /**
     * A list of regular expression patterns to include certain attached files in your Slack workspace team. Files that match the patterns are included in the index. Files that don't match the patterns are excluded from the index. If a file matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the file isn't included in the index.
     */
    InclusionPatterns?: DataSourceInclusionsExclusionsStrings;
    /**
     * A list of regular expression patterns to exclude certain attached files in your Slack workspace team. Files that match the patterns are excluded from the index. Files that don’t match the patterns are included in the index. If a file matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the file isn't included in the index.
     */
    ExclusionPatterns?: DataSourceInclusionsExclusionsStrings;
    /**
     * A list of DataSourceToIndexFieldMapping objects that map Slack data source attributes or field names to Amazon Kendra index field names. To create custom fields, use the UpdateIndex API before you map to Slack fields. For more information, see Mapping data source fields. The Slack data source field names must exist in your Slack custom metadata.
     */
    FieldMappings?: DataSourceToIndexFieldMappingList;
  }
  export type SlackEntity = "PUBLIC_CHANNEL"|"PRIVATE_CHANNEL"|"GROUP_MESSAGE"|"DIRECT_MESSAGE"|string;
  export type SlackEntityList = SlackEntity[];
  export type SnapshotsDataHeaderFields = String[];
  export type SnapshotsDataRecord = String[];
  export type SnapshotsDataRecords = SnapshotsDataRecord[];
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
  export interface SpellCorrectedQuery {
    /**
     * The query with the suggested spell corrections.
     */
    SuggestedQueryText?: SuggestedQueryText;
    /**
     * The corrected misspelled word or words in a query.
     */
    Corrections?: CorrectionList;
  }
  export type SpellCorrectedQueryList = SpellCorrectedQuery[];
  export interface SpellCorrectionConfiguration {
    /**
     *  TRUE to suggest spell corrections for queries.
     */
    IncludeQuerySpellCheckSuggestions: Boolean;
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
  export interface Status {
    /**
     * The unique identifier of the document.
     */
    DocumentId?: DocumentId;
    /**
     * The current status of a document. If the document was submitted for deletion, the status is NOT_FOUND after the document is deleted.
     */
    DocumentStatus?: DocumentStatus;
    /**
     * Indicates the source of the error.
     */
    FailureCode?: String;
    /**
     * Provides detailed information about why the document couldn't be indexed. Use this information to correct the error before you resubmit the document for indexing.
     */
    FailureReason?: String;
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
     * The identifier of the specific query for which you are submitting feedback. The query ID is returned in the response to the Query API.
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
  export type SuggestedQueryText = string;
  export interface Suggestion {
    /**
     * The unique UUID (universally unique identifier) of a single query suggestion.
     */
    Id?: ResultId;
    /**
     * The value for the unique UUID (universally unique identifier) of a single query suggestion. The value is the text string of a suggestion.
     */
    Value?: SuggestionValue;
  }
  export interface SuggestionHighlight {
    /**
     * The zero-based location in the response string where the highlight starts.
     */
    BeginOffset?: Integer;
    /**
     * The zero-based location in the response string where the highlight ends.
     */
    EndOffset?: Integer;
  }
  export type SuggestionHighlightList = SuggestionHighlight[];
  export type SuggestionList = Suggestion[];
  export type SuggestionQueryText = string;
  export interface SuggestionTextWithHighlights {
    /**
     * The query suggestion text to display to the user.
     */
    Text?: String;
    /**
     * The beginning and end of the query suggestion text that should be highlighted.
     */
    Highlights?: SuggestionHighlightList;
  }
  export interface SuggestionValue {
    /**
     * The SuggestionTextWithHighlights structure that contains the query suggestion text and highlights.
     */
    Text?: SuggestionTextWithHighlights;
  }
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
  export type TeamId = string;
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
  export type ThesaurusId = string;
  export type ThesaurusName = string;
  export type ThesaurusStatus = "CREATING"|"ACTIVE"|"DELETING"|"UPDATING"|"ACTIVE_BUT_UPDATE_FAILED"|"FAILED"|string;
  export interface ThesaurusSummary {
    /**
     * The identifier of the thesaurus.
     */
    Id?: ThesaurusId;
    /**
     * The name of the thesaurus.
     */
    Name?: ThesaurusName;
    /**
     * The status of the thesaurus.
     */
    Status?: ThesaurusStatus;
    /**
     * The Unix datetime that the thesaurus was created.
     */
    CreatedAt?: Timestamp;
    /**
     * The Unix datetime that the thesaurus was last updated.
     */
    UpdatedAt?: Timestamp;
  }
  export type ThesaurusSummaryItems = ThesaurusSummary[];
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
  export type TopDocumentAttributeValueCountPairsSize = number;
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
    /**
     * Configuration information for an Amazon Kendra data source you want to update.
     */
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
    /**
     * The code for a language. This allows you to support a language for all documents when updating the data source. English is supported by default. For more information on supported languages, including their codes, see Adding documents in languages other than English.
     */
    LanguageCode?: LanguageCode;
    /**
     * Configuration information for altering document metadata and content during the document ingestion process when you update a data source. For more information on how to create, modify and delete document metadata, or make other content alterations when you ingest documents into Amazon Kendra, see Customizing document metadata during the ingestion process.
     */
    CustomDocumentEnrichmentConfiguration?: CustomDocumentEnrichmentConfiguration;
  }
  export interface UpdateExperienceRequest {
    /**
     * The identifier of your Amazon Kendra experience you want to update.
     */
    Id: ExperienceId;
    /**
     * The name of your Amazon Kendra experience you want to update.
     */
    Name?: ExperienceName;
    /**
     * The identifier of the index for your Amazon Kendra experience you want to update.
     */
    IndexId: IndexId;
    /**
     * The Amazon Resource Name (ARN) of a role with permission to access Query API, QuerySuggestions API, SubmitFeedback API, and Amazon Web Services SSO that stores your user and group information. For more information, see IAM roles for Amazon Kendra.
     */
    RoleArn?: RoleArn;
    /**
     * Configuration information for your Amazon Kendra you want to update.
     */
    Configuration?: ExperienceConfiguration;
    /**
     * The description of your Amazon Kendra experience you want to update.
     */
    Description?: Description;
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
     * The document metadata you want to update.
     */
    DocumentMetadataConfigurationUpdates?: DocumentMetadataConfigurationList;
    /**
     * Sets the number of additional document storage and query capacity units that should be used by the index. You can change the capacity of the index up to 5 times per day, or make 5 API calls. If you are using extra storage units, you can't reduce the storage capacity below what is required to meet the storage needs for your index.
     */
    CapacityUnits?: CapacityUnitsConfiguration;
    /**
     * The user token configuration.
     */
    UserTokenConfigurations?: UserTokenConfigurationList;
    /**
     * The user context policy.
     */
    UserContextPolicy?: UserContextPolicy;
    /**
     * Enables fetching access levels of groups and users from an Amazon Web Services Single Sign On identity source. To configure this, see UserGroupResolutionConfiguration.
     */
    UserGroupResolutionConfiguration?: UserGroupResolutionConfiguration;
  }
  export interface UpdateQuerySuggestionsBlockListRequest {
    /**
     * The identifier of the index for a block list.
     */
    IndexId: IndexId;
    /**
     * The unique identifier of a block list.
     */
    Id: QuerySuggestionsBlockListId;
    /**
     * The name of a block list.
     */
    Name?: QuerySuggestionsBlockListName;
    /**
     * The description for a block list.
     */
    Description?: Description;
    /**
     * The S3 path where your block list text file sits in S3. If you update your block list and provide the same path to the block list text file in S3, then Amazon Kendra reloads the file to refresh the block list. Amazon Kendra does not automatically refresh your block list. You need to call the UpdateQuerySuggestionsBlockList API to refresh you block list. If you update your block list, then Amazon Kendra asynchronously refreshes all query suggestions with the latest content in the S3 file. This means changes might not take effect immediately.
     */
    SourceS3Path?: S3Path;
    /**
     * The IAM (Identity and Access Management) role used to access the block list text file in S3.
     */
    RoleArn?: RoleArn;
  }
  export interface UpdateQuerySuggestionsConfigRequest {
    /**
     * The identifier of the index you want to update query suggestions settings for.
     */
    IndexId: IndexId;
    /**
     * Set the mode to ENABLED or LEARN_ONLY. By default, Amazon Kendra enables query suggestions. LEARN_ONLY mode allows you to turn off query suggestions. You can to update this at any time. In LEARN_ONLY mode, Amazon Kendra continues to learn from new queries to keep suggestions up to date for when you are ready to switch to ENABLED mode again.
     */
    Mode?: Mode;
    /**
     * How recent your queries are in your query log time window. The time window is the number of days from current day to past days. By default, Amazon Kendra sets this to 180.
     */
    QueryLogLookBackWindowInDays?: Integer;
    /**
     *  TRUE to include queries without user information (i.e. all queries, irrespective of the user), otherwise FALSE to only include queries with user information. If you pass user information to Amazon Kendra along with the queries, you can set this flag to FALSE and instruct Amazon Kendra to only consider queries with user information. If you set to FALSE, Amazon Kendra only considers queries searched at least MinimumQueryCount times across MinimumNumberOfQueryingUsers unique users for suggestions. If you set to TRUE, Amazon Kendra ignores all user information and learns from all queries.
     */
    IncludeQueriesWithoutUserInformation?: ObjectBoolean;
    /**
     * The minimum number of unique users who must search a query in order for the query to be eligible to suggest to your users. Increasing this number might decrease the number of suggestions. However, this ensures a query is searched by many users and is truly popular to suggest to users. How you tune this setting depends on your specific needs.
     */
    MinimumNumberOfQueryingUsers?: MinimumNumberOfQueryingUsers;
    /**
     * The the minimum number of times a query must be searched in order to be eligible to suggest to your users. Decreasing this number increases the number of suggestions. However, this affects the quality of suggestions as it sets a low bar for a query to be considered popular to suggest to users. How you tune this setting depends on your specific needs.
     */
    MinimumQueryCount?: MinimumQueryCount;
  }
  export interface UpdateThesaurusRequest {
    /**
     * The identifier of the thesaurus to update.
     */
    Id: ThesaurusId;
    /**
     * The updated name of the thesaurus.
     */
    Name?: ThesaurusName;
    /**
     * The identifier of the index associated with the thesaurus to update.
     */
    IndexId: IndexId;
    /**
     * The updated description of the thesaurus.
     */
    Description?: Description;
    /**
     * The updated role ARN of the thesaurus.
     */
    RoleArn?: RoleArn;
    SourceS3Path?: S3Path;
  }
  export type Url = string;
  export interface Urls {
    /**
     * Configuration of the seed or starting point URLs of the websites you want to crawl. You can choose to crawl only the website host names, or the website host names with subdomains, or the website host names with subdomains and other domains that the webpages link to. You can list up to 100 seed URLs.
     */
    SeedUrlConfiguration?: SeedUrlConfiguration;
    /**
     * Configuration of the sitemap URLs of the websites you want to crawl. Only URLs belonging to the same website host names are crawled. You can list up to three sitemap URLs.
     */
    SiteMapsConfiguration?: SiteMapsConfiguration;
  }
  export type UserAccount = string;
  export interface UserContext {
    /**
     * The user context token for filtering search results for a user. It must be a JWT or a JSON token.
     */
    Token?: Token;
    /**
     * The identifier of the user you want to filter search results based on their access to documents.
     */
    UserId?: PrincipalName;
    /**
     * The list of groups you want to filter search results based on the groups' access to documents.
     */
    Groups?: Groups;
    /**
     * The list of data source groups you want to filter search results based on groups' access to documents in that data source.
     */
    DataSourceGroups?: DataSourceGroups;
  }
  export type UserContextPolicy = "ATTRIBUTE_FILTER"|"USER_TOKEN"|string;
  export interface UserGroupResolutionConfiguration {
    /**
     * The identity store provider (mode) you want to use to fetch access levels of groups and users. Amazon Web Services Single Sign On is currently the only available mode. Your users and groups must exist in an Amazon Web Services SSO identity source in order to use this mode.
     */
    UserGroupResolutionMode: UserGroupResolutionMode;
  }
  export type UserGroupResolutionMode = "AWS_SSO"|"NONE"|string;
  export type UserId = string;
  export interface UserIdentityConfiguration {
    /**
     * The Amazon Web Services SSO field name that contains the identifiers of your users, such as their emails. This is used for user context filtering and for granting access to your Amazon Kendra experience. You must set up Amazon Web Services SSO with Amazon Kendra. You must include your users and groups in your Access Control List when you ingest documents into your index. For more information, see Getting started with an Amazon Web Services SSO identity source.
     */
    IdentityAttributeName?: IdentityAttributeName;
  }
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
  export type VisitorId = string;
  export type VpcSecurityGroupId = string;
  export interface Warning {
    /**
     * The message that explains the problem with the query.
     */
    Message?: WarningMessage;
    /**
     * The code used to show the type of warning for the query.
     */
    Code?: WarningCode;
  }
  export type WarningCode = "QUERY_LANGUAGE_INVALID_SYNTAX"|string;
  export type WarningList = Warning[];
  export type WarningMessage = string;
  export interface WebCrawlerConfiguration {
    /**
     * Specifies the seed or starting point URLs of the websites or the sitemap URLs of the websites you want to crawl. You can include website subdomains. You can list up to 100 seed URLs and up to three sitemap URLs. You can only crawl websites that use the secure communication protocol, Hypertext Transfer Protocol Secure (HTTPS). If you receive an error when crawling a website, it could be that the website is blocked from crawling.  When selecting websites to index, you must adhere to the Amazon Acceptable Use Policy and all other Amazon terms. Remember that you must only use Amazon Kendra Web Crawler to index your own webpages, or webpages that you have authorization to index. 
     */
    Urls: Urls;
    /**
     * Specifies the number of levels in a website that you want to crawl. The first level begins from the website seed or starting point URL. For example, if a website has 3 levels – index level (i.e. seed in this example), sections level, and subsections level – and you are only interested in crawling information up to the sections level (i.e. levels 0-1), you can set your depth to 1. The default crawl depth is set to 2.
     */
    CrawlDepth?: CrawlDepth;
    /**
     * The maximum number of URLs on a webpage to include when crawling a website. This number is per webpage. As a website’s webpages are crawled, any URLs the webpages link to are also crawled. URLs on a webpage are crawled in order of appearance. The default maximum links per page is 100.
     */
    MaxLinksPerPage?: MaxLinksPerPage;
    /**
     * The maximum size (in MB) of a webpage or attachment to crawl. Files larger than this size (in MB) are skipped/not crawled. The default maximum size of a webpage or attachment is set to 50 MB.
     */
    MaxContentSizePerPageInMegaBytes?: MaxContentSizePerPageInMegaBytes;
    /**
     * The maximum number of URLs crawled per website host per minute. A minimum of one URL is required. The default maximum number of URLs crawled per website host per minute is 300.
     */
    MaxUrlsPerMinuteCrawlRate?: MaxUrlsPerMinuteCrawlRate;
    /**
     * A list of regular expression patterns to include certain URLs to crawl. URLs that match the patterns are included in the index. URLs that don't match the patterns are excluded from the index. If a URL matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the URL file isn't included in the index.
     */
    UrlInclusionPatterns?: DataSourceInclusionsExclusionsStrings;
    /**
     * A list of regular expression patterns to exclude certain URLs to crawl. URLs that match the patterns are excluded from the index. URLs that don't match the patterns are included in the index. If a URL matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the URL file isn't included in the index.
     */
    UrlExclusionPatterns?: DataSourceInclusionsExclusionsStrings;
    /**
     * Configuration information required to connect to your internal websites via a web proxy. You must provide the website host name and port number. For example, the host name of https://a.example.com/page1.html is "a.example.com" and the port is 443, the standard port for HTTPS. Web proxy credentials are optional and you can use them to connect to a web proxy server that requires basic authentication. To store web proxy credentials, you use a secret in Secrets Manager.
     */
    ProxyConfiguration?: ProxyConfiguration;
    /**
     * Configuration information required to connect to websites using authentication. You can connect to websites using basic authentication of user name and password. You must provide the website host name and port number. For example, the host name of https://a.example.com/page1.html is "a.example.com" and the port is 443, the standard port for HTTPS. You use a secret in Secrets Manager to store your authentication credentials.
     */
    AuthenticationConfiguration?: AuthenticationConfiguration;
  }
  export type WebCrawlerMode = "HOST_ONLY"|"SUBDOMAINS"|"EVERYTHING"|string;
  export interface WorkDocsConfiguration {
    /**
     * The identifier of the directory corresponding to your Amazon WorkDocs site repository. You can find the organization ID in the Directory Service by going to Active Directory, then Directories. Your Amazon WorkDocs site directory has an ID, which is the organization ID. You can also set up a new Amazon WorkDocs directory in the Directory Service console and enable a Amazon WorkDocs site for the directory in the Amazon WorkDocs console.
     */
    OrganizationId: OrganizationId;
    /**
     *  TRUE to include comments on documents in your index. Including comments in your index means each comment is a document that can be searched on. The default is set to FALSE.
     */
    CrawlComments?: Boolean;
    /**
     *  TRUE to use the Amazon WorkDocs change log to determine which documents require updating in the index. Depending on the change log's size, it may take longer for Amazon Kendra to use the change log than to scan all of your documents in Amazon WorkDocs.
     */
    UseChangeLog?: Boolean;
    /**
     * A list of regular expression patterns to include certain files in your Amazon WorkDocs site repository. Files that match the patterns are included in the index. Files that don't match the patterns are excluded from the index. If a file matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the file isn't included in the index.
     */
    InclusionPatterns?: DataSourceInclusionsExclusionsStrings;
    /**
     * A list of regular expression patterns to exclude certain files in your Amazon WorkDocs site repository. Files that match the patterns are excluded from the index. Files that don’t match the patterns are included in the index. If a file matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the file isn't included in the index.
     */
    ExclusionPatterns?: DataSourceInclusionsExclusionsStrings;
    /**
     * A list of DataSourceToIndexFieldMapping objects that map Amazon WorkDocs data source attributes or field names to Amazon Kendra index field names. To create custom fields, use the UpdateIndex API before you map to Amazon WorkDocs fields. For more information, see Mapping data source fields. The Amazon WorkDocs data source field names must exist in your Amazon WorkDocs custom metadata.
     */
    FieldMappings?: DataSourceToIndexFieldMappingList;
  }
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
