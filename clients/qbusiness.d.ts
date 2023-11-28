import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class QBusiness extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: QBusiness.Types.ClientConfiguration)
  config: Config & QBusiness.Types.ClientConfiguration;
  /**
   * Asynchronously deletes one or more documents added using the BatchPutDocument API from an Amazon Q index. You can see the progress of the deletion, and any error messages related to the process, by using CloudWatch.
   */
  batchDeleteDocument(params: QBusiness.Types.BatchDeleteDocumentRequest, callback?: (err: AWSError, data: QBusiness.Types.BatchDeleteDocumentResponse) => void): Request<QBusiness.Types.BatchDeleteDocumentResponse, AWSError>;
  /**
   * Asynchronously deletes one or more documents added using the BatchPutDocument API from an Amazon Q index. You can see the progress of the deletion, and any error messages related to the process, by using CloudWatch.
   */
  batchDeleteDocument(callback?: (err: AWSError, data: QBusiness.Types.BatchDeleteDocumentResponse) => void): Request<QBusiness.Types.BatchDeleteDocumentResponse, AWSError>;
  /**
   * Adds one or more documents to an Amazon Q index. You use this API to:   ingest your structured and unstructured documents and documents stored in an Amazon S3 bucket into an Amazon Q index.   add custom attributes to documents in an Amazon Q index.   attach an access control list to the documents added to an Amazon Q index.   You can see the progress of the deletion, and any error messages related to the process, by using CloudWatch.
   */
  batchPutDocument(params: QBusiness.Types.BatchPutDocumentRequest, callback?: (err: AWSError, data: QBusiness.Types.BatchPutDocumentResponse) => void): Request<QBusiness.Types.BatchPutDocumentResponse, AWSError>;
  /**
   * Adds one or more documents to an Amazon Q index. You use this API to:   ingest your structured and unstructured documents and documents stored in an Amazon S3 bucket into an Amazon Q index.   add custom attributes to documents in an Amazon Q index.   attach an access control list to the documents added to an Amazon Q index.   You can see the progress of the deletion, and any error messages related to the process, by using CloudWatch.
   */
  batchPutDocument(callback?: (err: AWSError, data: QBusiness.Types.BatchPutDocumentResponse) => void): Request<QBusiness.Types.BatchPutDocumentResponse, AWSError>;
  /**
   * Starts or continues a non-streaming Amazon Q conversation.
   */
  chatSync(params: QBusiness.Types.ChatSyncInput, callback?: (err: AWSError, data: QBusiness.Types.ChatSyncOutput) => void): Request<QBusiness.Types.ChatSyncOutput, AWSError>;
  /**
   * Starts or continues a non-streaming Amazon Q conversation.
   */
  chatSync(callback?: (err: AWSError, data: QBusiness.Types.ChatSyncOutput) => void): Request<QBusiness.Types.ChatSyncOutput, AWSError>;
  /**
   * Creates an Amazon Q application.
   */
  createApplication(params: QBusiness.Types.CreateApplicationRequest, callback?: (err: AWSError, data: QBusiness.Types.CreateApplicationResponse) => void): Request<QBusiness.Types.CreateApplicationResponse, AWSError>;
  /**
   * Creates an Amazon Q application.
   */
  createApplication(callback?: (err: AWSError, data: QBusiness.Types.CreateApplicationResponse) => void): Request<QBusiness.Types.CreateApplicationResponse, AWSError>;
  /**
   * Creates a data source connector for an Amazon Q application.  CreateDataSource is a synchronous operation. The operation returns 200 if the data source was successfully created. Otherwise, an exception is raised.
   */
  createDataSource(params: QBusiness.Types.CreateDataSourceRequest, callback?: (err: AWSError, data: QBusiness.Types.CreateDataSourceResponse) => void): Request<QBusiness.Types.CreateDataSourceResponse, AWSError>;
  /**
   * Creates a data source connector for an Amazon Q application.  CreateDataSource is a synchronous operation. The operation returns 200 if the data source was successfully created. Otherwise, an exception is raised.
   */
  createDataSource(callback?: (err: AWSError, data: QBusiness.Types.CreateDataSourceResponse) => void): Request<QBusiness.Types.CreateDataSourceResponse, AWSError>;
  /**
   * Creates an Amazon Q index. To determine if index creation has completed, check the Status field returned from a call to DescribeIndex. The Status field is set to ACTIVE when the index is ready to use. Once the index is active, you can index your documents using the  BatchPutDocument  API or the  CreateDataSource  API.
   */
  createIndex(params: QBusiness.Types.CreateIndexRequest, callback?: (err: AWSError, data: QBusiness.Types.CreateIndexResponse) => void): Request<QBusiness.Types.CreateIndexResponse, AWSError>;
  /**
   * Creates an Amazon Q index. To determine if index creation has completed, check the Status field returned from a call to DescribeIndex. The Status field is set to ACTIVE when the index is ready to use. Once the index is active, you can index your documents using the  BatchPutDocument  API or the  CreateDataSource  API.
   */
  createIndex(callback?: (err: AWSError, data: QBusiness.Types.CreateIndexResponse) => void): Request<QBusiness.Types.CreateIndexResponse, AWSError>;
  /**
   * Creates an Amazon Q plugin.
   */
  createPlugin(params: QBusiness.Types.CreatePluginRequest, callback?: (err: AWSError, data: QBusiness.Types.CreatePluginResponse) => void): Request<QBusiness.Types.CreatePluginResponse, AWSError>;
  /**
   * Creates an Amazon Q plugin.
   */
  createPlugin(callback?: (err: AWSError, data: QBusiness.Types.CreatePluginResponse) => void): Request<QBusiness.Types.CreatePluginResponse, AWSError>;
  /**
   * Adds a retriever to your Amazon Q application.
   */
  createRetriever(params: QBusiness.Types.CreateRetrieverRequest, callback?: (err: AWSError, data: QBusiness.Types.CreateRetrieverResponse) => void): Request<QBusiness.Types.CreateRetrieverResponse, AWSError>;
  /**
   * Adds a retriever to your Amazon Q application.
   */
  createRetriever(callback?: (err: AWSError, data: QBusiness.Types.CreateRetrieverResponse) => void): Request<QBusiness.Types.CreateRetrieverResponse, AWSError>;
  /**
   * Creates a universally unique identifier (UUID) mapped to a list of local user ids within an application.
   */
  createUser(params: QBusiness.Types.CreateUserRequest, callback?: (err: AWSError, data: QBusiness.Types.CreateUserResponse) => void): Request<QBusiness.Types.CreateUserResponse, AWSError>;
  /**
   * Creates a universally unique identifier (UUID) mapped to a list of local user ids within an application.
   */
  createUser(callback?: (err: AWSError, data: QBusiness.Types.CreateUserResponse) => void): Request<QBusiness.Types.CreateUserResponse, AWSError>;
  /**
   * Creates an Amazon Q web experience.
   */
  createWebExperience(params: QBusiness.Types.CreateWebExperienceRequest, callback?: (err: AWSError, data: QBusiness.Types.CreateWebExperienceResponse) => void): Request<QBusiness.Types.CreateWebExperienceResponse, AWSError>;
  /**
   * Creates an Amazon Q web experience.
   */
  createWebExperience(callback?: (err: AWSError, data: QBusiness.Types.CreateWebExperienceResponse) => void): Request<QBusiness.Types.CreateWebExperienceResponse, AWSError>;
  /**
   * Deletes an Amazon Q application.
   */
  deleteApplication(params: QBusiness.Types.DeleteApplicationRequest, callback?: (err: AWSError, data: QBusiness.Types.DeleteApplicationResponse) => void): Request<QBusiness.Types.DeleteApplicationResponse, AWSError>;
  /**
   * Deletes an Amazon Q application.
   */
  deleteApplication(callback?: (err: AWSError, data: QBusiness.Types.DeleteApplicationResponse) => void): Request<QBusiness.Types.DeleteApplicationResponse, AWSError>;
  /**
   * Deletes chat controls configured for an existing Amazon Q application.
   */
  deleteChatControlsConfiguration(params: QBusiness.Types.DeleteChatControlsConfigurationRequest, callback?: (err: AWSError, data: QBusiness.Types.DeleteChatControlsConfigurationResponse) => void): Request<QBusiness.Types.DeleteChatControlsConfigurationResponse, AWSError>;
  /**
   * Deletes chat controls configured for an existing Amazon Q application.
   */
  deleteChatControlsConfiguration(callback?: (err: AWSError, data: QBusiness.Types.DeleteChatControlsConfigurationResponse) => void): Request<QBusiness.Types.DeleteChatControlsConfigurationResponse, AWSError>;
  /**
   * Deletes an Amazon Q web experience conversation.
   */
  deleteConversation(params: QBusiness.Types.DeleteConversationRequest, callback?: (err: AWSError, data: QBusiness.Types.DeleteConversationResponse) => void): Request<QBusiness.Types.DeleteConversationResponse, AWSError>;
  /**
   * Deletes an Amazon Q web experience conversation.
   */
  deleteConversation(callback?: (err: AWSError, data: QBusiness.Types.DeleteConversationResponse) => void): Request<QBusiness.Types.DeleteConversationResponse, AWSError>;
  /**
   * Deletes an Amazon Q data source connector. While the data source is being deleted, the Status field returned by a call to the DescribeDataSource API is set to DELETING. 
   */
  deleteDataSource(params: QBusiness.Types.DeleteDataSourceRequest, callback?: (err: AWSError, data: QBusiness.Types.DeleteDataSourceResponse) => void): Request<QBusiness.Types.DeleteDataSourceResponse, AWSError>;
  /**
   * Deletes an Amazon Q data source connector. While the data source is being deleted, the Status field returned by a call to the DescribeDataSource API is set to DELETING. 
   */
  deleteDataSource(callback?: (err: AWSError, data: QBusiness.Types.DeleteDataSourceResponse) => void): Request<QBusiness.Types.DeleteDataSourceResponse, AWSError>;
  /**
   * Deletes a group so that all users and sub groups that belong to the group can no longer access documents only available to that group. For example, after deleting the group "Summer Interns", all interns who belonged to that group no longer see intern-only documents in their chat results.  If you want to delete, update, or replace users or sub groups of a group, you need to use the PutGroup operation. For example, if a user in the group "Engineering" leaves the engineering team and another user takes their place, you provide an updated list of users or sub groups that belong to the "Engineering" group when calling PutGroup.
   */
  deleteGroup(params: QBusiness.Types.DeleteGroupRequest, callback?: (err: AWSError, data: QBusiness.Types.DeleteGroupResponse) => void): Request<QBusiness.Types.DeleteGroupResponse, AWSError>;
  /**
   * Deletes a group so that all users and sub groups that belong to the group can no longer access documents only available to that group. For example, after deleting the group "Summer Interns", all interns who belonged to that group no longer see intern-only documents in their chat results.  If you want to delete, update, or replace users or sub groups of a group, you need to use the PutGroup operation. For example, if a user in the group "Engineering" leaves the engineering team and another user takes their place, you provide an updated list of users or sub groups that belong to the "Engineering" group when calling PutGroup.
   */
  deleteGroup(callback?: (err: AWSError, data: QBusiness.Types.DeleteGroupResponse) => void): Request<QBusiness.Types.DeleteGroupResponse, AWSError>;
  /**
   * Deletes an Amazon Q index.
   */
  deleteIndex(params: QBusiness.Types.DeleteIndexRequest, callback?: (err: AWSError, data: QBusiness.Types.DeleteIndexResponse) => void): Request<QBusiness.Types.DeleteIndexResponse, AWSError>;
  /**
   * Deletes an Amazon Q index.
   */
  deleteIndex(callback?: (err: AWSError, data: QBusiness.Types.DeleteIndexResponse) => void): Request<QBusiness.Types.DeleteIndexResponse, AWSError>;
  /**
   * Deletes an Amazon Q plugin.
   */
  deletePlugin(params: QBusiness.Types.DeletePluginRequest, callback?: (err: AWSError, data: QBusiness.Types.DeletePluginResponse) => void): Request<QBusiness.Types.DeletePluginResponse, AWSError>;
  /**
   * Deletes an Amazon Q plugin.
   */
  deletePlugin(callback?: (err: AWSError, data: QBusiness.Types.DeletePluginResponse) => void): Request<QBusiness.Types.DeletePluginResponse, AWSError>;
  /**
   * Deletes the retriever used by an Amazon Q application.
   */
  deleteRetriever(params: QBusiness.Types.DeleteRetrieverRequest, callback?: (err: AWSError, data: QBusiness.Types.DeleteRetrieverResponse) => void): Request<QBusiness.Types.DeleteRetrieverResponse, AWSError>;
  /**
   * Deletes the retriever used by an Amazon Q application.
   */
  deleteRetriever(callback?: (err: AWSError, data: QBusiness.Types.DeleteRetrieverResponse) => void): Request<QBusiness.Types.DeleteRetrieverResponse, AWSError>;
  /**
   * Deletes a user by email id.
   */
  deleteUser(params: QBusiness.Types.DeleteUserRequest, callback?: (err: AWSError, data: QBusiness.Types.DeleteUserResponse) => void): Request<QBusiness.Types.DeleteUserResponse, AWSError>;
  /**
   * Deletes a user by email id.
   */
  deleteUser(callback?: (err: AWSError, data: QBusiness.Types.DeleteUserResponse) => void): Request<QBusiness.Types.DeleteUserResponse, AWSError>;
  /**
   * Deletes an Amazon Q web experience.
   */
  deleteWebExperience(params: QBusiness.Types.DeleteWebExperienceRequest, callback?: (err: AWSError, data: QBusiness.Types.DeleteWebExperienceResponse) => void): Request<QBusiness.Types.DeleteWebExperienceResponse, AWSError>;
  /**
   * Deletes an Amazon Q web experience.
   */
  deleteWebExperience(callback?: (err: AWSError, data: QBusiness.Types.DeleteWebExperienceResponse) => void): Request<QBusiness.Types.DeleteWebExperienceResponse, AWSError>;
  /**
   * Gets information about an existing Amazon Q application.
   */
  getApplication(params: QBusiness.Types.GetApplicationRequest, callback?: (err: AWSError, data: QBusiness.Types.GetApplicationResponse) => void): Request<QBusiness.Types.GetApplicationResponse, AWSError>;
  /**
   * Gets information about an existing Amazon Q application.
   */
  getApplication(callback?: (err: AWSError, data: QBusiness.Types.GetApplicationResponse) => void): Request<QBusiness.Types.GetApplicationResponse, AWSError>;
  /**
   * Gets information about an chat controls configured for an existing Amazon Q application.
   */
  getChatControlsConfiguration(params: QBusiness.Types.GetChatControlsConfigurationRequest, callback?: (err: AWSError, data: QBusiness.Types.GetChatControlsConfigurationResponse) => void): Request<QBusiness.Types.GetChatControlsConfigurationResponse, AWSError>;
  /**
   * Gets information about an chat controls configured for an existing Amazon Q application.
   */
  getChatControlsConfiguration(callback?: (err: AWSError, data: QBusiness.Types.GetChatControlsConfigurationResponse) => void): Request<QBusiness.Types.GetChatControlsConfigurationResponse, AWSError>;
  /**
   * Gets information about an existing Amazon Q data source connector.
   */
  getDataSource(params: QBusiness.Types.GetDataSourceRequest, callback?: (err: AWSError, data: QBusiness.Types.GetDataSourceResponse) => void): Request<QBusiness.Types.GetDataSourceResponse, AWSError>;
  /**
   * Gets information about an existing Amazon Q data source connector.
   */
  getDataSource(callback?: (err: AWSError, data: QBusiness.Types.GetDataSourceResponse) => void): Request<QBusiness.Types.GetDataSourceResponse, AWSError>;
  /**
   * Describes a group by group name.
   */
  getGroup(params: QBusiness.Types.GetGroupRequest, callback?: (err: AWSError, data: QBusiness.Types.GetGroupResponse) => void): Request<QBusiness.Types.GetGroupResponse, AWSError>;
  /**
   * Describes a group by group name.
   */
  getGroup(callback?: (err: AWSError, data: QBusiness.Types.GetGroupResponse) => void): Request<QBusiness.Types.GetGroupResponse, AWSError>;
  /**
   * Gets information about an existing Amazon Q index.
   */
  getIndex(params: QBusiness.Types.GetIndexRequest, callback?: (err: AWSError, data: QBusiness.Types.GetIndexResponse) => void): Request<QBusiness.Types.GetIndexResponse, AWSError>;
  /**
   * Gets information about an existing Amazon Q index.
   */
  getIndex(callback?: (err: AWSError, data: QBusiness.Types.GetIndexResponse) => void): Request<QBusiness.Types.GetIndexResponse, AWSError>;
  /**
   * Gets information about an existing Amazon Q plugin.
   */
  getPlugin(params: QBusiness.Types.GetPluginRequest, callback?: (err: AWSError, data: QBusiness.Types.GetPluginResponse) => void): Request<QBusiness.Types.GetPluginResponse, AWSError>;
  /**
   * Gets information about an existing Amazon Q plugin.
   */
  getPlugin(callback?: (err: AWSError, data: QBusiness.Types.GetPluginResponse) => void): Request<QBusiness.Types.GetPluginResponse, AWSError>;
  /**
   * Gets information about an existing retriever used by an Amazon Q application.
   */
  getRetriever(params: QBusiness.Types.GetRetrieverRequest, callback?: (err: AWSError, data: QBusiness.Types.GetRetrieverResponse) => void): Request<QBusiness.Types.GetRetrieverResponse, AWSError>;
  /**
   * Gets information about an existing retriever used by an Amazon Q application.
   */
  getRetriever(callback?: (err: AWSError, data: QBusiness.Types.GetRetrieverResponse) => void): Request<QBusiness.Types.GetRetrieverResponse, AWSError>;
  /**
   * Describes the universally unique identifier (UUID) associated with a local user in a data source.
   */
  getUser(params: QBusiness.Types.GetUserRequest, callback?: (err: AWSError, data: QBusiness.Types.GetUserResponse) => void): Request<QBusiness.Types.GetUserResponse, AWSError>;
  /**
   * Describes the universally unique identifier (UUID) associated with a local user in a data source.
   */
  getUser(callback?: (err: AWSError, data: QBusiness.Types.GetUserResponse) => void): Request<QBusiness.Types.GetUserResponse, AWSError>;
  /**
   * Gets information about an existing Amazon Q web experience.
   */
  getWebExperience(params: QBusiness.Types.GetWebExperienceRequest, callback?: (err: AWSError, data: QBusiness.Types.GetWebExperienceResponse) => void): Request<QBusiness.Types.GetWebExperienceResponse, AWSError>;
  /**
   * Gets information about an existing Amazon Q web experience.
   */
  getWebExperience(callback?: (err: AWSError, data: QBusiness.Types.GetWebExperienceResponse) => void): Request<QBusiness.Types.GetWebExperienceResponse, AWSError>;
  /**
   * Lists Amazon Q applications.
   */
  listApplications(params: QBusiness.Types.ListApplicationsRequest, callback?: (err: AWSError, data: QBusiness.Types.ListApplicationsResponse) => void): Request<QBusiness.Types.ListApplicationsResponse, AWSError>;
  /**
   * Lists Amazon Q applications.
   */
  listApplications(callback?: (err: AWSError, data: QBusiness.Types.ListApplicationsResponse) => void): Request<QBusiness.Types.ListApplicationsResponse, AWSError>;
  /**
   * Lists one or more Amazon Q conversations.
   */
  listConversations(params: QBusiness.Types.ListConversationsRequest, callback?: (err: AWSError, data: QBusiness.Types.ListConversationsResponse) => void): Request<QBusiness.Types.ListConversationsResponse, AWSError>;
  /**
   * Lists one or more Amazon Q conversations.
   */
  listConversations(callback?: (err: AWSError, data: QBusiness.Types.ListConversationsResponse) => void): Request<QBusiness.Types.ListConversationsResponse, AWSError>;
  /**
   * Get information about an Amazon Q data source connector synchronization.
   */
  listDataSourceSyncJobs(params: QBusiness.Types.ListDataSourceSyncJobsRequest, callback?: (err: AWSError, data: QBusiness.Types.ListDataSourceSyncJobsResponse) => void): Request<QBusiness.Types.ListDataSourceSyncJobsResponse, AWSError>;
  /**
   * Get information about an Amazon Q data source connector synchronization.
   */
  listDataSourceSyncJobs(callback?: (err: AWSError, data: QBusiness.Types.ListDataSourceSyncJobsResponse) => void): Request<QBusiness.Types.ListDataSourceSyncJobsResponse, AWSError>;
  /**
   * Lists the Amazon Q data source connectors that you have created.
   */
  listDataSources(params: QBusiness.Types.ListDataSourcesRequest, callback?: (err: AWSError, data: QBusiness.Types.ListDataSourcesResponse) => void): Request<QBusiness.Types.ListDataSourcesResponse, AWSError>;
  /**
   * Lists the Amazon Q data source connectors that you have created.
   */
  listDataSources(callback?: (err: AWSError, data: QBusiness.Types.ListDataSourcesResponse) => void): Request<QBusiness.Types.ListDataSourcesResponse, AWSError>;
  /**
   * A list of documents attached to an index.
   */
  listDocuments(params: QBusiness.Types.ListDocumentsRequest, callback?: (err: AWSError, data: QBusiness.Types.ListDocumentsResponse) => void): Request<QBusiness.Types.ListDocumentsResponse, AWSError>;
  /**
   * A list of documents attached to an index.
   */
  listDocuments(callback?: (err: AWSError, data: QBusiness.Types.ListDocumentsResponse) => void): Request<QBusiness.Types.ListDocumentsResponse, AWSError>;
  /**
   * Provides a list of groups that are mapped to users.
   */
  listGroups(params: QBusiness.Types.ListGroupsRequest, callback?: (err: AWSError, data: QBusiness.Types.ListGroupsResponse) => void): Request<QBusiness.Types.ListGroupsResponse, AWSError>;
  /**
   * Provides a list of groups that are mapped to users.
   */
  listGroups(callback?: (err: AWSError, data: QBusiness.Types.ListGroupsResponse) => void): Request<QBusiness.Types.ListGroupsResponse, AWSError>;
  /**
   * Lists the Amazon Q indices you have created.
   */
  listIndices(params: QBusiness.Types.ListIndicesRequest, callback?: (err: AWSError, data: QBusiness.Types.ListIndicesResponse) => void): Request<QBusiness.Types.ListIndicesResponse, AWSError>;
  /**
   * Lists the Amazon Q indices you have created.
   */
  listIndices(callback?: (err: AWSError, data: QBusiness.Types.ListIndicesResponse) => void): Request<QBusiness.Types.ListIndicesResponse, AWSError>;
  /**
   * Gets a list of messages associated with an Amazon Q web experience.
   */
  listMessages(params: QBusiness.Types.ListMessagesRequest, callback?: (err: AWSError, data: QBusiness.Types.ListMessagesResponse) => void): Request<QBusiness.Types.ListMessagesResponse, AWSError>;
  /**
   * Gets a list of messages associated with an Amazon Q web experience.
   */
  listMessages(callback?: (err: AWSError, data: QBusiness.Types.ListMessagesResponse) => void): Request<QBusiness.Types.ListMessagesResponse, AWSError>;
  /**
   * Lists configured Amazon Q plugins.
   */
  listPlugins(params: QBusiness.Types.ListPluginsRequest, callback?: (err: AWSError, data: QBusiness.Types.ListPluginsResponse) => void): Request<QBusiness.Types.ListPluginsResponse, AWSError>;
  /**
   * Lists configured Amazon Q plugins.
   */
  listPlugins(callback?: (err: AWSError, data: QBusiness.Types.ListPluginsResponse) => void): Request<QBusiness.Types.ListPluginsResponse, AWSError>;
  /**
   * Lists the retriever used by an Amazon Q application.
   */
  listRetrievers(params: QBusiness.Types.ListRetrieversRequest, callback?: (err: AWSError, data: QBusiness.Types.ListRetrieversResponse) => void): Request<QBusiness.Types.ListRetrieversResponse, AWSError>;
  /**
   * Lists the retriever used by an Amazon Q application.
   */
  listRetrievers(callback?: (err: AWSError, data: QBusiness.Types.ListRetrieversResponse) => void): Request<QBusiness.Types.ListRetrieversResponse, AWSError>;
  /**
   * Gets a list of tags associated with a specified resource. Amazon Q applications and data sources can have tags associated with them.
   */
  listTagsForResource(params: QBusiness.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: QBusiness.Types.ListTagsForResourceResponse) => void): Request<QBusiness.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Gets a list of tags associated with a specified resource. Amazon Q applications and data sources can have tags associated with them.
   */
  listTagsForResource(callback?: (err: AWSError, data: QBusiness.Types.ListTagsForResourceResponse) => void): Request<QBusiness.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists one or more Amazon Q Web Experiences.
   */
  listWebExperiences(params: QBusiness.Types.ListWebExperiencesRequest, callback?: (err: AWSError, data: QBusiness.Types.ListWebExperiencesResponse) => void): Request<QBusiness.Types.ListWebExperiencesResponse, AWSError>;
  /**
   * Lists one or more Amazon Q Web Experiences.
   */
  listWebExperiences(callback?: (err: AWSError, data: QBusiness.Types.ListWebExperiencesResponse) => void): Request<QBusiness.Types.ListWebExperiencesResponse, AWSError>;
  /**
   * Enables your end user to to provide feedback on their Amazon Q generated chat responses.
   */
  putFeedback(params: QBusiness.Types.PutFeedbackRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Enables your end user to to provide feedback on their Amazon Q generated chat responses.
   */
  putFeedback(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Create, or updates, a mapping of users—who have access to a document—to groups. You can also map sub groups to groups. For example, the group "Company Intellectual Property Teams" includes sub groups "Research" and "Engineering". These sub groups include their own list of users or people who work in these teams. Only users who work in research and engineering, and therefore belong in the intellectual property group, can see top-secret company documents in their Amazon Q chat results.
   */
  putGroup(params: QBusiness.Types.PutGroupRequest, callback?: (err: AWSError, data: QBusiness.Types.PutGroupResponse) => void): Request<QBusiness.Types.PutGroupResponse, AWSError>;
  /**
   * Create, or updates, a mapping of users—who have access to a document—to groups. You can also map sub groups to groups. For example, the group "Company Intellectual Property Teams" includes sub groups "Research" and "Engineering". These sub groups include their own list of users or people who work in these teams. Only users who work in research and engineering, and therefore belong in the intellectual property group, can see top-secret company documents in their Amazon Q chat results.
   */
  putGroup(callback?: (err: AWSError, data: QBusiness.Types.PutGroupResponse) => void): Request<QBusiness.Types.PutGroupResponse, AWSError>;
  /**
   * Starts a data source connector synchronization job. If a synchronization job is already in progress, Amazon Q returns a ConflictException.
   */
  startDataSourceSyncJob(params: QBusiness.Types.StartDataSourceSyncJobRequest, callback?: (err: AWSError, data: QBusiness.Types.StartDataSourceSyncJobResponse) => void): Request<QBusiness.Types.StartDataSourceSyncJobResponse, AWSError>;
  /**
   * Starts a data source connector synchronization job. If a synchronization job is already in progress, Amazon Q returns a ConflictException.
   */
  startDataSourceSyncJob(callback?: (err: AWSError, data: QBusiness.Types.StartDataSourceSyncJobResponse) => void): Request<QBusiness.Types.StartDataSourceSyncJobResponse, AWSError>;
  /**
   * Stops an Amazon Q data source connector synchronization job already in progress.
   */
  stopDataSourceSyncJob(params: QBusiness.Types.StopDataSourceSyncJobRequest, callback?: (err: AWSError, data: QBusiness.Types.StopDataSourceSyncJobResponse) => void): Request<QBusiness.Types.StopDataSourceSyncJobResponse, AWSError>;
  /**
   * Stops an Amazon Q data source connector synchronization job already in progress.
   */
  stopDataSourceSyncJob(callback?: (err: AWSError, data: QBusiness.Types.StopDataSourceSyncJobResponse) => void): Request<QBusiness.Types.StopDataSourceSyncJobResponse, AWSError>;
  /**
   * Adds the specified tag to the specified Amazon Q application or data source resource. If the tag already exists, the existing value is replaced with the new value.
   */
  tagResource(params: QBusiness.Types.TagResourceRequest, callback?: (err: AWSError, data: QBusiness.Types.TagResourceResponse) => void): Request<QBusiness.Types.TagResourceResponse, AWSError>;
  /**
   * Adds the specified tag to the specified Amazon Q application or data source resource. If the tag already exists, the existing value is replaced with the new value.
   */
  tagResource(callback?: (err: AWSError, data: QBusiness.Types.TagResourceResponse) => void): Request<QBusiness.Types.TagResourceResponse, AWSError>;
  /**
   * Removes a tag from an Amazon Q application or a data source.
   */
  untagResource(params: QBusiness.Types.UntagResourceRequest, callback?: (err: AWSError, data: QBusiness.Types.UntagResourceResponse) => void): Request<QBusiness.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes a tag from an Amazon Q application or a data source.
   */
  untagResource(callback?: (err: AWSError, data: QBusiness.Types.UntagResourceResponse) => void): Request<QBusiness.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates an existing Amazon Q application.
   */
  updateApplication(params: QBusiness.Types.UpdateApplicationRequest, callback?: (err: AWSError, data: QBusiness.Types.UpdateApplicationResponse) => void): Request<QBusiness.Types.UpdateApplicationResponse, AWSError>;
  /**
   * Updates an existing Amazon Q application.
   */
  updateApplication(callback?: (err: AWSError, data: QBusiness.Types.UpdateApplicationResponse) => void): Request<QBusiness.Types.UpdateApplicationResponse, AWSError>;
  /**
   * Updates an set of chat controls configured for an existing Amazon Q application.
   */
  updateChatControlsConfiguration(params: QBusiness.Types.UpdateChatControlsConfigurationRequest, callback?: (err: AWSError, data: QBusiness.Types.UpdateChatControlsConfigurationResponse) => void): Request<QBusiness.Types.UpdateChatControlsConfigurationResponse, AWSError>;
  /**
   * Updates an set of chat controls configured for an existing Amazon Q application.
   */
  updateChatControlsConfiguration(callback?: (err: AWSError, data: QBusiness.Types.UpdateChatControlsConfigurationResponse) => void): Request<QBusiness.Types.UpdateChatControlsConfigurationResponse, AWSError>;
  /**
   * Updates an existing Amazon Q data source connector.
   */
  updateDataSource(params: QBusiness.Types.UpdateDataSourceRequest, callback?: (err: AWSError, data: QBusiness.Types.UpdateDataSourceResponse) => void): Request<QBusiness.Types.UpdateDataSourceResponse, AWSError>;
  /**
   * Updates an existing Amazon Q data source connector.
   */
  updateDataSource(callback?: (err: AWSError, data: QBusiness.Types.UpdateDataSourceResponse) => void): Request<QBusiness.Types.UpdateDataSourceResponse, AWSError>;
  /**
   * Updates an Amazon Q index.
   */
  updateIndex(params: QBusiness.Types.UpdateIndexRequest, callback?: (err: AWSError, data: QBusiness.Types.UpdateIndexResponse) => void): Request<QBusiness.Types.UpdateIndexResponse, AWSError>;
  /**
   * Updates an Amazon Q index.
   */
  updateIndex(callback?: (err: AWSError, data: QBusiness.Types.UpdateIndexResponse) => void): Request<QBusiness.Types.UpdateIndexResponse, AWSError>;
  /**
   * Updates an Amazon Q plugin.
   */
  updatePlugin(params: QBusiness.Types.UpdatePluginRequest, callback?: (err: AWSError, data: QBusiness.Types.UpdatePluginResponse) => void): Request<QBusiness.Types.UpdatePluginResponse, AWSError>;
  /**
   * Updates an Amazon Q plugin.
   */
  updatePlugin(callback?: (err: AWSError, data: QBusiness.Types.UpdatePluginResponse) => void): Request<QBusiness.Types.UpdatePluginResponse, AWSError>;
  /**
   * Updates the retriever used for your Amazon Q application.
   */
  updateRetriever(params: QBusiness.Types.UpdateRetrieverRequest, callback?: (err: AWSError, data: QBusiness.Types.UpdateRetrieverResponse) => void): Request<QBusiness.Types.UpdateRetrieverResponse, AWSError>;
  /**
   * Updates the retriever used for your Amazon Q application.
   */
  updateRetriever(callback?: (err: AWSError, data: QBusiness.Types.UpdateRetrieverResponse) => void): Request<QBusiness.Types.UpdateRetrieverResponse, AWSError>;
  /**
   * Updates a information associated with a user id.
   */
  updateUser(params: QBusiness.Types.UpdateUserRequest, callback?: (err: AWSError, data: QBusiness.Types.UpdateUserResponse) => void): Request<QBusiness.Types.UpdateUserResponse, AWSError>;
  /**
   * Updates a information associated with a user id.
   */
  updateUser(callback?: (err: AWSError, data: QBusiness.Types.UpdateUserResponse) => void): Request<QBusiness.Types.UpdateUserResponse, AWSError>;
  /**
   * Updates an Amazon Q web experience. 
   */
  updateWebExperience(params: QBusiness.Types.UpdateWebExperienceRequest, callback?: (err: AWSError, data: QBusiness.Types.UpdateWebExperienceResponse) => void): Request<QBusiness.Types.UpdateWebExperienceResponse, AWSError>;
  /**
   * Updates an Amazon Q web experience. 
   */
  updateWebExperience(callback?: (err: AWSError, data: QBusiness.Types.UpdateWebExperienceResponse) => void): Request<QBusiness.Types.UpdateWebExperienceResponse, AWSError>;
}
declare namespace QBusiness {
  export interface AccessConfiguration {
    /**
     * A list of AccessControlList objects.
     */
    accessControls: AccessControls;
    /**
     * Describes the member relation within the AccessControlList object.
     */
    memberRelation?: MemberRelation;
  }
  export interface AccessControl {
    /**
     * Describes the member relation within a principal list.
     */
    memberRelation?: MemberRelation;
    /**
     * Contains a list of principals, where a principal can be either a USER or a GROUP. Each principal can be have the following type of document access: ALLOW or DENY.
     */
    principals: Principals;
  }
  export type AccessControls = AccessControl[];
  export interface ActionExecution {
    /**
     * A mapping of field names to the field values in input that an end user provides to Amazon Q requests to perform their plugin action. 
     */
    payload: ActionExecutionPayload;
    /**
     * A string used to retain information about the hierarchical contexts within an action execution event payload.
     */
    payloadFieldNameSeparator: ActionPayloadFieldNameSeparator;
    /**
     * The identifier of the plugin the action is attached to.
     */
    pluginId: PluginId;
  }
  export type ActionExecutionPayload = {[key: string]: ActionExecutionPayloadField};
  export interface ActionExecutionPayloadField {
    /**
     * The content of a user input field in an plugin action execution payload.
     */
    value: ActionPayloadFieldValue;
  }
  export type ActionPayloadFieldKey = string;
  export type ActionPayloadFieldNameSeparator = string;
  export type ActionPayloadFieldType = "STRING"|"NUMBER"|"ARRAY"|"BOOLEAN"|string;
  export interface ActionPayloadFieldValue {
  }
  export interface ActionReview {
    /**
     * Field values that an end user needs to provide to Amazon Q for Amazon Q to perform the requested plugin action.
     */
    payload?: ActionReviewPayload;
    /**
     * A string used to retain information about the hierarchical contexts within an action review payload.
     */
    payloadFieldNameSeparator?: ActionPayloadFieldNameSeparator;
    /**
     * The identifier of the plugin associated with the action review.
     */
    pluginId?: PluginId;
    /**
     * The type of plugin.
     */
    pluginType?: PluginType;
  }
  export type ActionReviewPayload = {[key: string]: ActionReviewPayloadField};
  export interface ActionReviewPayloadField {
    /**
     * Information about the field values that an end user can use to provide to Amazon Q for Amazon Q to perform the requested plugin action.
     */
    allowedValues?: ActionReviewPayloadFieldAllowedValues;
    /**
     *  The name of the field. 
     */
    displayName?: String;
    /**
     * The display order of fields in a payload.
     */
    displayOrder?: Integer;
    /**
     * Information about whether the field is required.
     */
    required?: Boolean;
    /**
     * The type of field. 
     */
    type?: ActionPayloadFieldType;
    /**
     * The field value.
     */
    value?: ActionPayloadFieldValue;
  }
  export interface ActionReviewPayloadFieldAllowedValue {
    /**
     * The name of the field.
     */
    displayValue?: ActionPayloadFieldValue;
    /**
     * The field value.
     */
    value?: ActionPayloadFieldValue;
  }
  export type ActionReviewPayloadFieldAllowedValues = ActionReviewPayloadFieldAllowedValue[];
  export type AmazonResourceName = string;
  export interface Application {
    /**
     * The identifier for the Amazon Q application.
     */
    applicationId?: ApplicationId;
    /**
     * The Unix timestamp when the Amazon Q application was created.
     */
    createdAt?: Timestamp;
    /**
     * The name of the Amazon Q application.
     */
    displayName?: ApplicationName;
    /**
     * The status of the Amazon Q application. The application is ready to use when the status is ACTIVE.
     */
    status?: ApplicationStatus;
    /**
     * The Unix timestamp when the Amazon Q application was last updated. 
     */
    updatedAt?: Timestamp;
  }
  export type ApplicationArn = string;
  export type ApplicationId = string;
  export type ApplicationName = string;
  export type ApplicationStatus = "CREATING"|"ACTIVE"|"DELETING"|"FAILED"|"UPDATING"|string;
  export type Applications = Application[];
  export interface AppliedAttachmentsConfiguration {
    /**
     * Information about whether file upload during chat functionality is activated for your application.
     */
    attachmentsControlMode?: AttachmentsControlMode;
  }
  export interface AttachmentInput {
    /**
     * The data contained within the uploaded file.
     */
    data: _Blob;
    /**
     * The name of the file.
     */
    name: AttachmentName;
  }
  export type AttachmentName = string;
  export interface AttachmentOutput {
    /**
     * An error associated with a file uploaded during chat.
     */
    error?: ErrorDetail;
    /**
     * The name of a file uploaded during chat.
     */
    name?: AttachmentName;
    /**
     * The status of a file uploaded during chat.
     */
    status?: AttachmentStatus;
  }
  export type AttachmentStatus = "FAILED"|"SUCCEEDED"|string;
  export interface AttachmentsConfiguration {
    /**
     * Status information about whether file upload functionality is activated or deactivated for your end user.
     */
    attachmentsControlMode: AttachmentsControlMode;
  }
  export type AttachmentsControlMode = "ENABLED"|"DISABLED"|string;
  export type AttachmentsInput = AttachmentInput[];
  export type AttachmentsOutput = AttachmentOutput[];
  export interface AttributeFilter {
    /**
     * Performs a logical AND operation on all supplied filters.
     */
    andAllFilters?: AttributeFilters;
    /**
     * Returns true when a document contains all the specified document attributes or metadata fields.
     */
    containsAll?: DocumentAttribute;
    /**
     * Returns true when a document contains any of the specified document attributes or metadata fields.
     */
    containsAny?: DocumentAttribute;
    /**
     * Performs an equals operation on two document attributes or metadata fields.
     */
    equalsTo?: DocumentAttribute;
    /**
     * Performs a greater than operation on two document attributes or metadata fields. Use with a document attribute of type Date or Long.
     */
    greaterThan?: DocumentAttribute;
    /**
     * Performs a greater or equals than operation on two document attributes or metadata fields. Use with a document attribute of type Date or Long. 
     */
    greaterThanOrEquals?: DocumentAttribute;
    /**
     * Performs a less than operation on two document attributes or metadata fields. Use with a document attribute of type Date or Long.
     */
    lessThan?: DocumentAttribute;
    /**
     * Performs a less than or equals operation on two document attributes or metadata fields. Use with a document attribute of type Date or Long. 
     */
    lessThanOrEquals?: DocumentAttribute;
    /**
     * Performs a logical NOT operation on all supplied filters. 
     */
    notFilter?: AttributeFilter;
    /**
     *  Performs a logical OR operation on all supplied filters. 
     */
    orAllFilters?: AttributeFilters;
  }
  export type AttributeFilters = AttributeFilter[];
  export type AttributeType = "STRING"|"STRING_LIST"|"NUMBER"|"DATE"|string;
  export type AttributeValueOperator = "DELETE"|string;
  export interface BasicAuthConfiguration {
    /**
     * The ARN of an IAM role used by Amazon Q to access the basic authentication credentials stored in a Secrets Manager secret.
     */
    roleArn: RoleArn;
    /**
     * The ARN of the Secrets Manager secret that stores the basic authentication credentials used for plugin configuration..
     */
    secretArn: SecretArn;
  }
  export interface BatchDeleteDocumentRequest {
    /**
     * The identifier of the Amazon Q application.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the data source sync during which the documents were deleted.
     */
    dataSourceSyncId?: ExecutionId;
    /**
     * Documents deleted from the Amazon Q index.
     */
    documents: DeleteDocuments;
    /**
     * The identifier of the Amazon Q index that contains the documents to delete.
     */
    indexId: IndexId;
  }
  export interface BatchDeleteDocumentResponse {
    /**
     * A list of documents that couldn't be removed from the Amazon Q index. Each entry contains an error message that indicates why the document couldn't be removed from the index. 
     */
    failedDocuments?: FailedDocuments;
  }
  export interface BatchPutDocumentRequest {
    /**
     * The identifier of the Amazon Q application.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the data source sync during which the documents were added.
     */
    dataSourceSyncId?: ExecutionId;
    /**
     * One or more documents to add to the index.
     */
    documents: Documents;
    /**
     * The identifier of the Amazon Q index to add the documents to. 
     */
    indexId: IndexId;
    /**
     * The Amazon Resource Name (ARN) of an IAM role with permission to access your S3 bucket.
     */
    roleArn?: RoleArn;
  }
  export interface BatchPutDocumentResponse {
    /**
     *  A list of documents that were not added to the Amazon Q index because the document failed a validation check. Each document contains an error message that indicates why the document couldn't be added to the index. 
     */
    failedDocuments?: FailedDocuments;
  }
  export type _Blob = Buffer|Uint8Array|Blob|string;
  export type BlockedPhrase = string;
  export type BlockedPhrases = BlockedPhrase[];
  export interface BlockedPhrasesConfiguration {
    /**
     * A list of phrases blocked from a Amazon Q web experience chat.
     */
    blockedPhrases?: BlockedPhrases;
    /**
     * The configured custom message displayed to an end user informing them that they've used a blocked phrase during chat.
     */
    systemMessageOverride?: SystemMessageOverride;
  }
  export interface BlockedPhrasesConfigurationUpdate {
    /**
     * Creates or updates a blocked phrases configuration in your Amazon Q application.
     */
    blockedPhrasesToCreateOrUpdate?: BlockedPhrases;
    /**
     * Deletes a blocked phrases configuration in your Amazon Q application.
     */
    blockedPhrasesToDelete?: BlockedPhrases;
    /**
     * The configured custom message displayed to your end user when they use blocked phrase during chat.
     */
    systemMessageOverride?: SystemMessageOverride;
  }
  export type Boolean = boolean;
  export interface ChatSyncInput {
    /**
     * A request from an end user to perform an Amazon Q plugin action.
     */
    actionExecution?: ActionExecution;
    /**
     * The identifier of the Amazon Q application linked to the Amazon Q conversation.
     */
    applicationId: ApplicationId;
    /**
     * A list of files uploaded directly during chat. You can upload a maximum of 5 files of upto 10 MB each.
     */
    attachments?: AttachmentsInput;
    /**
     * Enables filtering of Amazon Q web experience responses based on document attributes or metadata fields.
     */
    attributeFilter?: AttributeFilter;
    /**
     * A token that you provide to identify a chat request.
     */
    clientToken?: ClientToken;
    /**
     * The identifier of the Amazon Q conversation.
     */
    conversationId?: ConversationId;
    /**
     * The identifier of the previous end user text input message in a conversation.
     */
    parentMessageId?: MessageId;
    /**
     * The groups that a user associated with the chat input belongs to.
     */
    userGroups?: UserGroups;
    /**
     * The identifier of the user attached to the chat input.
     */
    userId: UserId;
    /**
     * A end user message in a conversation.
     */
    userMessage?: UserMessage;
  }
  export interface ChatSyncOutput {
    /**
     * A request from Amazon Q to the end user for information Amazon Q needs to successfully complete a requested plugin action.
     */
    actionReview?: ActionReview;
    /**
     * The identifier of the Amazon Q conversation.
     */
    conversationId?: ConversationId;
    /**
     * A list of files which failed to upload during chat.
     */
    failedAttachments?: AttachmentsOutput;
    /**
     * The source documents used to generate the conversation response.
     */
    sourceAttributions?: SourceAttributions;
    /**
     * An AI-generated message in a conversation.
     */
    systemMessage?: String;
    /**
     * The identifier of an Amazon Q AI generated message within the conversation.
     */
    systemMessageId?: MessageId;
    /**
     * The identifier of an Amazon Q end user text input message within the conversation.
     */
    userMessageId?: MessageId;
  }
  export type ClientToken = string;
  export interface ContentBlockerRule {
    /**
     * The configured custom message displayed to an end user informing them that they've used a blocked phrase during chat.
     */
    systemMessageOverride?: SystemMessageOverride;
  }
  export interface ContentRetrievalRule {
    /**
     * Specifies data sources in a Amazon Q application to use for content generation.
     */
    eligibleDataSources?: EligibleDataSources;
  }
  export type ContentType = "PDF"|"HTML"|"MS_WORD"|"PLAIN_TEXT"|"PPT"|"RTF"|"XML"|"XSLT"|"MS_EXCEL"|"CSV"|"JSON"|"MD"|string;
  export interface Conversation {
    /**
     * The identifier of the Amazon Q conversation.
     */
    conversationId?: ConversationId;
    /**
     * The start time of the conversation.
     */
    startTime?: Timestamp;
    /**
     * The title of the conversation.
     */
    title?: ConversationTitle;
  }
  export type ConversationId = string;
  export type ConversationTitle = string;
  export type Conversations = Conversation[];
  export interface CreateApplicationRequest {
    /**
     * An option to allow end users to upload files directly during chat.
     */
    attachmentsConfiguration?: AttachmentsConfiguration;
    /**
     * A token that you provide to identify the request to create your Amazon Q application.
     */
    clientToken?: ClientToken;
    /**
     * A description for the Amazon Q application. 
     */
    description?: Description;
    /**
     * A name for the Amazon Q application. 
     */
    displayName: ApplicationName;
    /**
     * The identifier of the KMS key that is used to encrypt your data. Amazon Q doesn't support asymmetric keys.
     */
    encryptionConfiguration?: EncryptionConfiguration;
    /**
     *  The Amazon Resource Name (ARN) of an IAM role with permissions to access your Amazon CloudWatch logs and metrics.
     */
    roleArn: RoleArn;
    /**
     * A list of key-value pairs that identify or categorize your Amazon Q application. You can also use tags to help control access to the application. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.
     */
    tags?: Tags;
  }
  export interface CreateApplicationResponse {
    /**
     *  The Amazon Resource Name (ARN) of the Amazon Q application. 
     */
    applicationArn?: ApplicationArn;
    /**
     * The identifier of the Amazon Q application.
     */
    applicationId?: ApplicationId;
  }
  export interface CreateDataSourceRequest {
    /**
     *  The identifier of the Amazon Q application the data source will be attached to.
     */
    applicationId: ApplicationId;
    /**
     * A token you provide to identify a request to create a data source connector. Multiple calls to the CreateDataSource API with the same client token will create only one data source connector. 
     */
    clientToken?: ClientToken;
    /**
     * Configuration information to connect to your data source repository. For configuration templates for your specific data source, see Supported connectors.
     */
    configuration: DataSourceConfiguration;
    /**
     * A description for the data source connector.
     */
    description?: Description;
    /**
     * A name for the data source connector.
     */
    displayName: DataSourceName;
    documentEnrichmentConfiguration?: DocumentEnrichmentConfiguration;
    /**
     * The identifier of the index that you want to use with the data source connector.
     */
    indexId: IndexId;
    /**
     * The Amazon Resource Name (ARN) of an IAM role with permission to access the data source and required resources.
     */
    roleArn?: RoleArn;
    /**
     * Sets the frequency for Amazon Q to check the documents in your data source repository and update your index. If you don't set a schedule, Amazon Q won't periodically update the index. Specify a cron- format schedule string or an empty string to indicate that the index is updated on demand. You can't specify the Schedule parameter when the Type parameter is set to CUSTOM. If you do, you receive a ValidationException exception. 
     */
    syncSchedule?: SyncSchedule;
    /**
     * A list of key-value pairs that identify or categorize the data source connector. You can also use tags to help control access to the data source connector. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.
     */
    tags?: Tags;
    /**
     * Configuration information for an Amazon VPC (Virtual Private Cloud) to connect to your data source. For more information, see Using Amazon VPC with Amazon Q connectors.
     */
    vpcConfiguration?: DataSourceVpcConfiguration;
  }
  export interface CreateDataSourceResponse {
    /**
     *  The Amazon Resource Name (ARN) of a data source in an Amazon Q application. 
     */
    dataSourceArn?: DataSourceArn;
    /**
     * The identifier of the data source connector.
     */
    dataSourceId?: DataSourceId;
  }
  export interface CreateIndexRequest {
    /**
     * The identifier of the Amazon Q application using the index.
     */
    applicationId: ApplicationId;
    /**
     * The capacity units you want to provision for your index. You can add and remove capacity to fit your usage needs.
     */
    capacityConfiguration?: IndexCapacityConfiguration;
    /**
     * A token that you provide to identify the request to create an index. Multiple calls to the CreateIndex API with the same client token will create only one index.
     */
    clientToken?: ClientToken;
    /**
     * A description for the Amazon Q index.
     */
    description?: Description;
    /**
     * A name for the Amazon Q index.
     */
    displayName: IndexName;
    /**
     * A list of key-value pairs that identify or categorize the index. You can also use tags to help control access to the index. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.
     */
    tags?: Tags;
  }
  export interface CreateIndexResponse {
    /**
     *  The Amazon Resource Name (ARN) of an Amazon Q index.
     */
    indexArn?: IndexArn;
    /**
     * The identifier for the Amazon Q index.
     */
    indexId?: IndexId;
  }
  export interface CreatePluginRequest {
    /**
     * The identifier of the application that will contain the plugin.
     */
    applicationId: ApplicationId;
    authConfiguration: PluginAuthConfiguration;
    /**
     * A token that you provide to identify the request to create your Amazon Q plugin.
     */
    clientToken?: ClientToken;
    /**
     * A the name for your plugin.
     */
    displayName: PluginName;
    /**
     * The source URL used for plugin configuration.
     */
    serverUrl: Url;
    /**
     * A list of key-value pairs that identify or categorize the data source connector. You can also use tags to help control access to the data source connector. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.
     */
    tags?: Tags;
    /**
     * The type of plugin you want to create.
     */
    type: PluginType;
  }
  export interface CreatePluginResponse {
    /**
     * The Amazon Resource Name (ARN) of a plugin.
     */
    pluginArn?: PluginArn;
    /**
     * The identifier of the plugin created.
     */
    pluginId?: PluginId;
  }
  export interface CreateRetrieverRequest {
    /**
     * The identifier of your Amazon Q application.
     */
    applicationId: ApplicationId;
    /**
     * A token that you provide to identify the request to create your Amazon Q application retriever.
     */
    clientToken?: ClientToken;
    configuration: RetrieverConfiguration;
    /**
     * The name of your retriever.
     */
    displayName: RetrieverName;
    /**
     * The ARN of an IAM role used by Amazon Q to access the basic authentication credentials stored in a Secrets Manager secret.
     */
    roleArn?: RoleArn;
    /**
     * A list of key-value pairs that identify or categorize the retriever. You can also use tags to help control access to the retriever. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.
     */
    tags?: Tags;
    /**
     * The type of retriever you are using.
     */
    type: RetrieverType;
  }
  export interface CreateRetrieverResponse {
    /**
     * The Amazon Resource Name (ARN) of an IAM role associated with a retriever.
     */
    retrieverArn?: RetrieverArn;
    /**
     * The identifier of the retriever you are using.
     */
    retrieverId?: RetrieverId;
  }
  export interface CreateUserRequest {
    /**
     * The identifier of the application for which the user mapping will be created.
     */
    applicationId: ApplicationId;
    /**
     * A token that you provide to identify the request to create your Amazon Q user mapping.
     */
    clientToken?: ClientToken;
    /**
     * The list of user aliases in the mapping.
     */
    userAliases?: CreateUserRequestUserAliasesList;
    /**
     * The user emails attached to a user mapping.
     */
    userId: String;
  }
  export type CreateUserRequestUserAliasesList = UserAlias[];
  export interface CreateUserResponse {
  }
  export interface CreateWebExperienceRequest {
    /**
     * The identifier of the Amazon Q web experience.
     */
    applicationId: ApplicationId;
    /**
     * A token you provide to identify a request to create an Amazon Q web experience. 
     */
    clientToken?: ClientToken;
    /**
     * Determines whether sample prompts are enabled in the web experience for an end user.
     */
    samplePromptsControlMode?: WebExperienceSamplePromptsControlMode;
    /**
     * A subtitle to personalize your Amazon Q web experience.
     */
    subtitle?: WebExperienceSubtitle;
    /**
     * A list of key-value pairs that identify or categorize your Amazon Q web experience. You can also use tags to help control access to the web experience. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.
     */
    tags?: Tags;
    /**
     * The title for your Amazon Q web experience.
     */
    title?: WebExperienceTitle;
    /**
     * The customized welcome message for end users of an Amazon Q web experience.
     */
    welcomeMessage?: WebExperienceWelcomeMessage;
  }
  export interface CreateWebExperienceResponse {
    /**
     *  The Amazon Resource Name (ARN) of an Amazon Q web experience.
     */
    webExperienceArn?: WebExperienceArn;
    /**
     * The identifier of the Amazon Q web experience.
     */
    webExperienceId?: WebExperienceId;
  }
  export interface DataSource {
    /**
     * The Unix timestamp when the Amazon Q data source was created.
     */
    createdAt?: Timestamp;
    /**
     * The identifier of the Amazon Q data source.
     */
    dataSourceId?: DataSourceId;
    /**
     * The name of the Amazon Q data source.
     */
    displayName?: DataSourceName;
    /**
     * The status of the Amazon Q data source.
     */
    status?: DataSourceStatus;
    /**
     * The type of the Amazon Q data source.
     */
    type?: String;
    /**
     * The Unix timestamp when the Amazon Q data source was last updated. 
     */
    updatedAt?: Timestamp;
  }
  export type DataSourceArn = string;
  export interface DataSourceConfiguration {
  }
  export type DataSourceId = string;
  export type DataSourceIds = DataSourceId[];
  export type DataSourceName = string;
  export type DataSourceStatus = "PENDING_CREATION"|"CREATING"|"ACTIVE"|"DELETING"|"FAILED"|"UPDATING"|string;
  export interface DataSourceSyncJob {
    /**
     * If the reason that the synchronization failed is due to an error with the underlying data source, this field contains a code that identifies the error.
     */
    dataSourceErrorCode?: String;
    /**
     * The Unix timestamp when the synchronization job completed.
     */
    endTime?: Timestamp;
    /**
     * If the Status field is set to FAILED, the ErrorCode field indicates the reason the synchronization failed. 
     */
    error?: ErrorDetail;
    /**
     * The identifier of a data source synchronization job.
     */
    executionId?: ExecutionId;
    /**
     * Maps a batch delete document request to a specific data source sync job. This is optional and should only be supplied when documents are deleted by a data source connector.
     */
    metrics?: DataSourceSyncJobMetrics;
    /**
     * The Unix time stamp when the data source synchronization job started.
     */
    startTime?: Timestamp;
    /**
     * The status of the synchronization job. When the Status field is set to SUCCEEDED, the synchronization job is done. If the status code is FAILED, the ErrorCode and ErrorMessage fields give you the reason for the failure.
     */
    status?: DataSourceSyncJobStatus;
  }
  export interface DataSourceSyncJobMetrics {
    /**
     * The current count of documents added from the data source during the data source sync.
     */
    documentsAdded?: MetricValue;
    /**
     * The current count of documents deleted from the data source during the data source sync.
     */
    documentsDeleted?: MetricValue;
    /**
     * The current count of documents that failed to sync from the data source during the data source sync.
     */
    documentsFailed?: MetricValue;
    /**
     * The current count of documents modified in the data source during the data source sync.
     */
    documentsModified?: MetricValue;
    /**
     * The current count of documents crawled by the ongoing sync job in the data source.
     */
    documentsScanned?: MetricValue;
  }
  export type DataSourceSyncJobStatus = "FAILED"|"SUCCEEDED"|"SYNCING"|"INCOMPLETE"|"STOPPING"|"ABORTED"|"SYNCING_INDEXING"|string;
  export type DataSourceSyncJobs = DataSourceSyncJob[];
  export type DataSourceUserId = string;
  export interface DataSourceVpcConfiguration {
    /**
     * A list of identifiers of security groups within your Amazon VPC. The security groups should enable Amazon Q to connect to the data source.
     */
    securityGroupIds: SecurityGroupIds;
    /**
     * A list of identifiers for subnets within your Amazon VPC. The subnets should be able to connect to each other in the VPC, and they should have outgoing access to the Internet through a NAT device.
     */
    subnetIds: SubnetIds;
  }
  export type DataSources = DataSource[];
  export interface DeleteApplicationRequest {
    /**
     * The identifier of the Amazon Q application.
     */
    applicationId: ApplicationId;
  }
  export interface DeleteApplicationResponse {
  }
  export interface DeleteChatControlsConfigurationRequest {
    /**
     * The identifier of the application the chat controls have been configured for.
     */
    applicationId: ApplicationId;
  }
  export interface DeleteChatControlsConfigurationResponse {
  }
  export interface DeleteConversationRequest {
    /**
     * The identifier of the Amazon Q application associated with the conversation.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the Amazon Q web experience conversation being deleted.
     */
    conversationId: ConversationId;
    /**
     * The identifier of the user who is deleting the conversation.
     */
    userId: UserId;
  }
  export interface DeleteConversationResponse {
  }
  export interface DeleteDataSourceRequest {
    /**
     * The identifier of the Amazon Q application used with the data source connector.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the data source connector that you want to delete. 
     */
    dataSourceId: DataSourceId;
    /**
     * The identifier of the index used with the data source connector.
     */
    indexId: IndexId;
  }
  export interface DeleteDataSourceResponse {
  }
  export interface DeleteDocument {
    /**
     * The identifier of the deleted document.
     */
    documentId: DocumentId;
  }
  export type DeleteDocuments = DeleteDocument[];
  export interface DeleteGroupRequest {
    /**
     * The identifier of the application in which the group mapping belongs.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the data source linked to the group A group can be tied to multiple data sources. You can delete a group from accessing documents in a certain data source. For example, the groups "Research", "Engineering", and "Sales and Marketing" are all tied to the company's documents stored in the data sources Confluence and Salesforce. You want to delete "Research" and "Engineering" groups from Salesforce, so that these groups cannot access customer-related documents stored in Salesforce. Only "Sales and Marketing" should access documents in the Salesforce data source.
     */
    dataSourceId?: DataSourceId;
    /**
     * The name of the group you want to delete.
     */
    groupName: GroupName;
    /**
     * The identifier of the index you want to delete the group from.
     */
    indexId: IndexId;
  }
  export interface DeleteGroupResponse {
  }
  export interface DeleteIndexRequest {
    /**
     * The identifier of the Amazon Q application the Amazon Q index is linked to.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the Amazon Q index.
     */
    indexId: IndexId;
  }
  export interface DeleteIndexResponse {
  }
  export interface DeletePluginRequest {
    /**
     * The identifier the application attached to the Amazon Q plugin.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the plugin being deleted.
     */
    pluginId: PluginId;
  }
  export interface DeletePluginResponse {
  }
  export interface DeleteRetrieverRequest {
    /**
     * The identifier of the Amazon Q application using the retriever.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the retriever being deleted.
     */
    retrieverId: RetrieverId;
  }
  export interface DeleteRetrieverResponse {
  }
  export interface DeleteUserRequest {
    /**
     * The identifier of the application from which the user is being deleted.
     */
    applicationId: ApplicationId;
    /**
     * The user email being deleted.
     */
    userId: String;
  }
  export interface DeleteUserResponse {
  }
  export interface DeleteWebExperienceRequest {
    /**
     * The identifier of the Amazon Q application linked to the Amazon Q web experience.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the Amazon Q web experience being deleted.
     */
    webExperienceId: WebExperienceId;
  }
  export interface DeleteWebExperienceResponse {
  }
  export type Description = string;
  export interface Document {
    /**
     * Configuration information for access permission to a document.
     */
    accessConfiguration?: AccessConfiguration;
    /**
     * Custom attributes to apply to the document for refining Amazon Q web experience responses.
     */
    attributes?: DocumentAttributes;
    /**
     * The contents of the document.
     */
    content?: DocumentContent;
    /**
     * The file type of the document in the Blob field. If you want to index snippets or subsets of HTML documents instead of the entirety of the HTML documents, you add the HTML start and closing tags (&lt;HTML&gt;content&lt;/HTML&gt;) around the content.
     */
    contentType?: ContentType;
    /**
     * The configuration information for altering document metadata and content during the document ingestion process.
     */
    documentEnrichmentConfiguration?: DocumentEnrichmentConfiguration;
    /**
     * The identifier of the document.
     */
    id: DocumentId;
    /**
     * The title of the document.
     */
    title?: Title;
  }
  export interface DocumentAttribute {
    /**
     * The identifier for the attribute.
     */
    name: DocumentAttributeKey;
    /**
     * The value of the attribute. 
     */
    value: DocumentAttributeValue;
  }
  export interface DocumentAttributeCondition {
    /**
     * The identifier of the document attribute used for the condition. For example, 'Source_URI' could be an identifier for the attribute or metadata field that contains source URIs associated with the documents. Amazon Q currently doesn't support _document_body as an attribute key used for the condition.
     */
    key: DocumentAttributeKey;
    /**
     * The identifier of the document attribute used for the condition. For example, 'Source_URI' could be an identifier for the attribute or metadata field that contains source URIs associated with the documents. Amazon Kendra currently does not support _document_body as an attribute key used for the condition.
     */
    operator: DocumentEnrichmentConditionOperator;
    value?: DocumentAttributeValue;
  }
  export interface DocumentAttributeConfiguration {
    /**
     * The name of the document attribute.
     */
    name?: String;
    /**
     * Information about whether the document attribute can be used by an end user to search for information on their web experience.
     */
    search?: Status;
    /**
     * The type of document attribute.
     */
    type?: AttributeType;
  }
  export type DocumentAttributeConfigurations = DocumentAttributeConfiguration[];
  export type DocumentAttributeKey = string;
  export type DocumentAttributeStringListValue = String[];
  export interface DocumentAttributeTarget {
    /**
     *  TRUE to delete the existing target value for your specified target attribute key. You cannot create a target value and set this to TRUE.
     */
    attributeValueOperator?: AttributeValueOperator;
    /**
     * The identifier of the target document attribute or metadata field. For example, 'Department' could be an identifier for the target attribute or metadata field that includes the department names associated with the documents.
     */
    key: DocumentAttributeKey;
    value?: DocumentAttributeValue;
  }
  export interface DocumentAttributeValue {
    /**
     * A date expressed as an ISO 8601 string. It's important for the time zone to be included in the ISO 8601 date-time format. For example, 2012-03-25T12:30:10+01:00 is the ISO 8601 date-time format for March 25th 2012 at 12:30PM (plus 10 seconds) in Central European Time. 
     */
    dateValue?: Timestamp;
    /**
     * A long integer value. 
     */
    longValue?: Long;
    /**
     * A list of strings.
     */
    stringListValue?: DocumentAttributeStringListValue;
    /**
     * A string.
     */
    stringValue?: DocumentAttributeValueStringValueString;
  }
  export type DocumentAttributeValueStringValueString = string;
  export type DocumentAttributes = DocumentAttribute[];
  export interface DocumentContent {
    /**
     * The contents of the document. Documents passed to the blob parameter must be base64 encoded. Your code might not need to encode the document file bytes if you're using an Amazon Web Services SDK to call Amazon Q APIs. If you are calling the Amazon Q endpoint directly using REST, you must base64 encode the contents before sending.
     */
    blob?: _Blob;
    /**
     * The path to the document in an Amazon S3 bucket.
     */
    s3?: S3;
  }
  export type DocumentContentOperator = "DELETE"|string;
  export type DocumentDetailList = DocumentDetails[];
  export interface DocumentDetails {
    /**
     * The timestamp for when the document was created.
     */
    createdAt?: Timestamp;
    /**
     * The identifier of the document.
     */
    documentId?: DocumentId;
    /**
     * An error message associated with the document.
     */
    error?: ErrorDetail;
    /**
     * The current status of the document.
     */
    status?: DocumentStatus;
    /**
     * The timestamp for when the document was last updated.
     */
    updatedAt?: Timestamp;
  }
  export type DocumentEnrichmentConditionOperator = "GREATER_THAN"|"GREATER_THAN_OR_EQUALS"|"LESS_THAN"|"LESS_THAN_OR_EQUALS"|"EQUALS"|"NOT_EQUALS"|"CONTAINS"|"NOT_CONTAINS"|"EXISTS"|"NOT_EXISTS"|"BEGINS_WITH"|string;
  export interface DocumentEnrichmentConfiguration {
    /**
     * Configuration information to alter document attributes or metadata fields and content when ingesting documents into Amazon Q.
     */
    inlineConfigurations?: InlineDocumentEnrichmentConfigurations;
    postExtractionHookConfiguration?: HookConfiguration;
    preExtractionHookConfiguration?: HookConfiguration;
  }
  export type DocumentId = string;
  export type DocumentStatus = "RECEIVED"|"PROCESSING"|"INDEXED"|"UPDATED"|"FAILED"|"DELETING"|"DELETED"|"DOCUMENT_FAILED_TO_INDEX"|string;
  export type Documents = Document[];
  export interface EligibleDataSource {
    /**
     * The identifier of the data source.
     */
    dataSourceId?: DataSourceId;
    /**
     * The identifier of the index the data source is attached to.
     */
    indexId?: IndexId;
  }
  export type EligibleDataSources = EligibleDataSource[];
  export interface EncryptionConfiguration {
    /**
     * The identifier of the KMS key. Amazon Q doesn't support asymmetric keys.
     */
    kmsKeyId?: KmsKeyId;
  }
  export type ErrorCode = "InternalError"|"InvalidRequest"|"ResourceInactive"|"ResourceNotFound"|string;
  export interface ErrorDetail {
    /**
     * The code associated with the data source sync error.
     */
    errorCode?: ErrorCode;
    /**
     * The message explaining the data source sync error.
     */
    errorMessage?: ErrorMessage;
  }
  export type ErrorMessage = string;
  export type ExampleChatMessage = string;
  export type ExampleChatMessages = ExampleChatMessage[];
  export type ExecutionId = string;
  export interface FailedDocument {
    /**
     * The identifier of the Amazon Q data source connector that contains the failed document.
     */
    dataSourceId?: DataSourceId;
    /**
     * An explanation for why the document couldn't be removed from the index.
     */
    error?: ErrorDetail;
    /**
     * The identifier of the document that couldn't be removed from the Amazon Q index.
     */
    id?: DocumentId;
  }
  export type FailedDocuments = FailedDocument[];
  export interface GetApplicationRequest {
    /**
     * The identifier of the Amazon Q application.
     */
    applicationId: ApplicationId;
  }
  export interface GetApplicationResponse {
    /**
     * The Amazon Resource Name (ARN) of the Amazon Q application.
     */
    applicationArn?: ApplicationArn;
    /**
     * The identifier of the Amazon Q application.
     */
    applicationId?: ApplicationId;
    /**
     * Settings for whether end users can upload files directly during chat.
     */
    attachmentsConfiguration?: AppliedAttachmentsConfiguration;
    /**
     * The Unix timestamp when the Amazon Q application was last updated.
     */
    createdAt?: Timestamp;
    /**
     * A description for the Amazon Q application.
     */
    description?: Description;
    /**
     * The name of the Amazon Q application.
     */
    displayName?: ApplicationName;
    /**
     * The identifier of the Amazon Web Services KMS key that is used to encrypt your data. Amazon Q doesn't support asymmetric keys.
     */
    encryptionConfiguration?: EncryptionConfiguration;
    /**
     * If the Status field is set to ERROR, the ErrorMessage field contains a description of the error that caused the synchronization to fail.
     */
    error?: ErrorDetail;
    /**
     * The Amazon Resource Name (ARN) of the IAM with permissions to access your CloudWatch logs and metrics.
     */
    roleArn?: RoleArn;
    /**
     * The status of the Amazon Q application.
     */
    status?: ApplicationStatus;
    /**
     * The Unix timestamp when the Amazon Q application was last updated.
     */
    updatedAt?: Timestamp;
  }
  export interface GetChatControlsConfigurationRequest {
    /**
     * The identifier of the application for which the chat controls are configured.
     */
    applicationId: ApplicationId;
    /**
     * The maximum number of configured chat controls to return.
     */
    maxResults?: MaxResultsIntegerForGetTopicConfigurations;
    /**
     * If the maxResults response was incomplete because there is more data to retrieve, Amazon Q returns a pagination token in the response. You can use this pagination token to retrieve the next set of Amazon Q chat controls configured.
     */
    nextToken?: NextToken;
  }
  export interface GetChatControlsConfigurationResponse {
    /**
     * The phrases blocked from chat by your chat control configuration.
     */
    blockedPhrases?: BlockedPhrasesConfiguration;
    /**
     * If the maxResults response was incomplete because there is more data to retrieve, Amazon Q returns a pagination token in the response. You can use this pagination token to retrieve the next set of Amazon Q chat controls configured.
     */
    nextToken?: NextToken;
    /**
     * The response scope configured for a Amazon Q application. This determines whether your application uses its retrieval augmented generation (RAG) system to generate answers only from your enterprise data, or also uses the large language models (LLM) knowledge to respons to end user questions in chat.
     */
    responseScope?: ResponseScope;
    /**
     * The topic specific controls configured for a Amazon Q application.
     */
    topicConfigurations?: TopicConfigurations;
  }
  export interface GetDataSourceRequest {
    /**
     * The identifier of the Amazon Q application.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the data source connector.
     */
    dataSourceId: DataSourceId;
    /**
     * The identfier of the index used with the data source connector.
     */
    indexId: IndexId;
  }
  export interface GetDataSourceResponse {
    /**
     * The identifier of the Amazon Q application.
     */
    applicationId?: ApplicationId;
    /**
     * The details of how the data source connector is configured.
     */
    configuration?: DataSourceConfiguration;
    /**
     * The Unix timestamp when the data source connector was created.
     */
    createdAt?: Timestamp;
    /**
     * The Amazon Resource Name (ARN) of the data source.
     */
    dataSourceArn?: DataSourceArn;
    /**
     * The identifier of the data source connector.
     */
    dataSourceId?: DataSourceId;
    /**
     * The description for the data source connector.
     */
    description?: Description;
    /**
     * The name for the data source connector.
     */
    displayName?: DataSourceName;
    documentEnrichmentConfiguration?: DocumentEnrichmentConfiguration;
    /**
     * When the Status field value is FAILED, the ErrorMessage field contains a description of the error that caused the data source connector to fail.
     */
    error?: ErrorDetail;
    /**
     * The identifier of the index linked to the data source connector.
     */
    indexId?: IndexId;
    /**
     * The Amazon Resource Name (ARN) of the role with permission to access the data source and required resources.
     */
    roleArn?: RoleArn;
    /**
     * The current status of the data source connector. When the Status field value is FAILED, the ErrorMessage field contains a description of the error that caused the data source connector to fail.
     */
    status?: DataSourceStatus;
    /**
     * The schedule for Amazon Q to update the index.
     */
    syncSchedule?: SyncSchedule;
    /**
     * The type of the data source connector. For example, S3.
     */
    type?: String;
    /**
     * The Unix timestamp when the data source connector was last updated.
     */
    updatedAt?: Timestamp;
    /**
     * Configuration information for an Amazon VPC (Virtual Private Cloud) to connect to your data source.
     */
    vpcConfiguration?: DataSourceVpcConfiguration;
  }
  export interface GetGroupRequest {
    /**
     * The identifier of the application id the group is attached to.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the data source the group is attached to.
     */
    dataSourceId?: DataSourceId;
    /**
     * The name of the group.
     */
    groupName: GroupName;
    /**
     * The identifier of the index the group is attached to.
     */
    indexId: IndexId;
  }
  export interface GetGroupResponse {
    /**
     * The current status of the group.
     */
    status?: GroupStatusDetail;
    /**
     * The status history of the group.
     */
    statusHistory?: GroupStatusDetails;
  }
  export interface GetIndexRequest {
    /**
     * The identifier of the Amazon Q application connected to the index.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the Amazon Q index you want information on.
     */
    indexId: IndexId;
  }
  export interface GetIndexResponse {
    /**
     * The identifier of the Amazon Q application associated with the index.
     */
    applicationId?: ApplicationId;
    /**
     * The storage capacity units chosen for your Amazon Q index.
     */
    capacityConfiguration?: IndexCapacityConfiguration;
    /**
     * The Unix timestamp when the Amazon Q index was created.
     */
    createdAt?: Timestamp;
    /**
     * The description for the Amazon Q index.
     */
    description?: Description;
    /**
     * The name of the Amazon Q index.
     */
    displayName?: IndexName;
    /**
     * Configuration information for document attributes or metadata. Document metadata are fields associated with your documents. For example, the company department name associated with each document. For more information, see Understanding document attributes.
     */
    documentAttributeConfigurations?: DocumentAttributeConfigurations;
    /**
     * When the Status field value is FAILED, the ErrorMessage field contains a message that explains why.
     */
    error?: ErrorDetail;
    /**
     *  The Amazon Resource Name (ARN) of the Amazon Q index. 
     */
    indexArn?: IndexArn;
    /**
     * The identifier of the Amazon Q index.
     */
    indexId?: IndexId;
    /**
     * Provides information about the number of documents indexed.
     */
    indexStatistics?: IndexStatistics;
    /**
     * The current status of the index. When the value is ACTIVE, the index is ready for use. If the Status field value is FAILED, the ErrorMessage field contains a message that explains why.
     */
    status?: IndexStatus;
    /**
     * The Unix timestamp when the Amazon Q index was last updated.
     */
    updatedAt?: Timestamp;
  }
  export interface GetPluginRequest {
    /**
     * The identifier of the application which contains the plugin.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the plugin.
     */
    pluginId: PluginId;
  }
  export interface GetPluginResponse {
    /**
     * The identifier of the application which contains the plugin.
     */
    applicationId?: ApplicationId;
    authConfiguration?: PluginAuthConfiguration;
    /**
     * The timestamp for when the plugin was created.
     */
    createdAt?: Timestamp;
    /**
     * The name of the plugin.
     */
    displayName?: PluginName;
    /**
     * The Amazon Resource Name (ARN) of the role with permission to access resources needed to create the plugin.
     */
    pluginArn?: PluginArn;
    /**
     * The identifier of the plugin.
     */
    pluginId?: PluginId;
    /**
     * The source URL used for plugin configuration.
     */
    serverUrl?: Url;
    /**
     * The current state of the plugin.
     */
    state?: PluginState;
    /**
     * The type of the plugin.
     */
    type?: PluginType;
    /**
     * The timestamp for when the plugin was last updated.
     */
    updatedAt?: Timestamp;
  }
  export interface GetRetrieverRequest {
    /**
     * The identifier of the Amazon Q application using the retriever.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the retriever.
     */
    retrieverId: RetrieverId;
  }
  export interface GetRetrieverResponse {
    /**
     * The identifier of the Amazon Q application using the retriever. 
     */
    applicationId?: ApplicationId;
    configuration?: RetrieverConfiguration;
    /**
     * The Unix timestamp when the retriever was created.
     */
    createdAt?: Timestamp;
    /**
     * The name of the retriever.
     */
    displayName?: RetrieverName;
    /**
     * The Amazon Resource Name (ARN) of the IAM role associated with the retriever.
     */
    retrieverArn?: RetrieverArn;
    /**
     * The identifier of the retriever.
     */
    retrieverId?: RetrieverId;
    /**
     * The Amazon Resource Name (ARN) of the role with the permission to access the retriever and required resources.
     */
    roleArn?: RoleArn;
    /**
     * The status of the retriever.
     */
    status?: RetrieverStatus;
    /**
     * The type of the retriever.
     */
    type?: RetrieverType;
    /**
     * The Unix timestamp when the retriever was last updated.
     */
    updatedAt?: Timestamp;
  }
  export interface GetUserRequest {
    /**
     * The identifier of the application connected to the user.
     */
    applicationId: ApplicationId;
    /**
     * The user email address attached to the user.
     */
    userId: String;
  }
  export interface GetUserResponse {
    /**
     * A list of user aliases attached to a user.
     */
    userAliases?: UserAliases;
  }
  export interface GetWebExperienceRequest {
    /**
     * The identifier of the Amazon Q application linked to the web experience.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the Amazon Q web experience. 
     */
    webExperienceId: WebExperienceId;
  }
  export interface GetWebExperienceResponse {
    /**
     * The identifier of the Amazon Q application linked to the web experience.
     */
    applicationId?: ApplicationId;
    /**
     * The authentication configuration information for your Amazon Q web experience.
     */
    authenticationConfiguration?: WebExperienceAuthConfiguration;
    /**
     * The Unix timestamp when the retriever was created.
     */
    createdAt?: Timestamp;
    /**
     * The endpoint of your Amazon Q web experience.
     */
    defaultEndpoint?: Url;
    /**
     * When the Status field value is FAILED, the ErrorMessage field contains a description of the error that caused the data source connector to fail.
     */
    error?: ErrorDetail;
    /**
     * Determines whether sample prompts are enabled in the web experience for an end user.
     */
    samplePromptsControlMode?: WebExperienceSamplePromptsControlMode;
    /**
     * The current status of the Amazon Q web experience. When the Status field value is FAILED, the ErrorMessage field contains a description of the error that caused the data source connector to fail. 
     */
    status?: WebExperienceStatus;
    /**
     * The subtitle for your Amazon Q web experience. 
     */
    subtitle?: WebExperienceSubtitle;
    /**
     * The title for your Amazon Q web experience. 
     */
    title?: WebExperienceTitle;
    /**
     * The Unix timestamp when the data source connector was last updated.
     */
    updatedAt?: Timestamp;
    /**
     * The Amazon Resource Name (ARN) of the role with the permission to access the Amazon Q web experience and required resources.
     */
    webExperienceArn?: WebExperienceArn;
    /**
     * The identifier of the Amazon Q web experience.
     */
    webExperienceId?: WebExperienceId;
    /**
     * The customized welcome message for end users of an Amazon Q web experience.
     */
    welcomeMessage?: WebExperienceWelcomeMessage;
  }
  export interface GroupMembers {
    /**
     * A list of sub groups that belong to a group. For example, the sub groups "Research", "Engineering", and "Sales and Marketing" all belong to the group "Company".
     */
    memberGroups?: MemberGroups;
    /**
     * A list of users that belong to a group. For example, a list of interns all belong to the "Interns" group.
     */
    memberUsers?: MemberUsers;
  }
  export type GroupName = string;
  export type GroupStatus = "FAILED"|"SUCCEEDED"|"PROCESSING"|"DELETING"|"DELETED"|string;
  export interface GroupStatusDetail {
    /**
     * The details of an error associated a group status.
     */
    errorDetail?: ErrorDetail;
    /**
     * The Unix timestamp when the Amazon Q application was last updated.
     */
    lastUpdatedAt?: Timestamp;
    /**
     * The status of a group.
     */
    status?: GroupStatus;
  }
  export type GroupStatusDetails = GroupStatusDetail[];
  export interface GroupSummary {
    /**
     * The name of the group the summary information is for.
     */
    groupName?: GroupName;
  }
  export type GroupSummaryList = GroupSummary[];
  export interface HookConfiguration {
    /**
     * The condition used for when a Lambda function should be invoked. For example, you can specify a condition that if there are empty date-time values, then Amazon Q should invoke a function that inserts the current date-time.
     */
    invocationCondition?: DocumentAttributeCondition;
    /**
     * The Amazon Resource Name (ARN) of a role with permission to run a Lambda function during ingestion. For more information, see IAM roles for Custom Document Enrichment (CDE).
     */
    lambdaArn?: LambdaArn;
    /**
     * The Amazon Resource Name (ARN) of a role with permission to run PreExtractionHookConfiguration and PostExtractionHookConfiguration for altering document metadata and content during the document ingestion process.
     */
    roleArn?: RoleArn;
    /**
     * Stores the original, raw documents or the structured, parsed documents before and after altering them. For more information, see Data contracts for Lambda functions.
     */
    s3BucketName?: S3BucketName;
  }
  export interface Index {
    /**
     * The Unix timestamp when the index was created.
     */
    createdAt?: Timestamp;
    /**
     * The name of the index.
     */
    displayName?: IndexName;
    /**
     * The identifier for the index.
     */
    indexId?: IndexId;
    /**
     * The current status of the index. When the status is ACTIVE, the index is ready.
     */
    status?: IndexStatus;
    /**
     * The Unix timestamp when the index was last updated.
     */
    updatedAt?: Timestamp;
  }
  export type IndexArn = string;
  export interface IndexCapacityConfiguration {
    /**
     * The number of storage units configured for an Amazon Q index.
     */
    units?: IndexCapacityInteger;
  }
  export type IndexCapacityInteger = number;
  export type IndexId = string;
  export type IndexName = string;
  export interface IndexStatistics {
    /**
     * The number of documents indexed.
     */
    textDocumentStatistics?: TextDocumentStatistics;
  }
  export type IndexStatus = "CREATING"|"ACTIVE"|"DELETING"|"FAILED"|"UPDATING"|string;
  export type IndexedTextBytes = number;
  export type IndexedTextDocument = number;
  export type Indices = Index[];
  export interface InlineDocumentEnrichmentConfiguration {
    condition?: DocumentAttributeCondition;
    /**
     *  TRUE to delete content if the condition used for the target attribute is met.
     */
    documentContentOperator?: DocumentContentOperator;
    target?: DocumentAttributeTarget;
  }
  export type InlineDocumentEnrichmentConfigurations = InlineDocumentEnrichmentConfiguration[];
  export type Integer = number;
  export interface KendraIndexConfiguration {
    /**
     * The identifier of the Amazon Kendra index.
     */
    indexId: KendraIndexId;
  }
  export type KendraIndexId = string;
  export type KmsKeyId = string;
  export type LambdaArn = string;
  export interface ListApplicationsRequest {
    /**
     * The maximum number of Amazon Q applications to return.
     */
    maxResults?: MaxResultsIntegerForListApplications;
    /**
     * If the maxResults response was incomplete because there is more data to retrieve, Amazon Q returns a pagination token in the response. You can use this pagination token to retrieve the next set of Amazon Q applications.
     */
    nextToken?: NextToken;
  }
  export interface ListApplicationsResponse {
    /**
     * An array of summary information on the configuration of one or more Amazon Q applications.
     */
    applications?: Applications;
    /**
     * If the response is truncated, Amazon Q returns this token. You can use this token in a subsequent request to retrieve the next set of applications.
     */
    nextToken?: NextToken;
  }
  export interface ListConversationsRequest {
    /**
     * The identifier of the Amazon Q application.
     */
    applicationId: ApplicationId;
    /**
     * The maximum number of Amazon Q conversations to return.
     */
    maxResults?: MaxResultsIntegerForListConversations;
    /**
     * If the maxResults response was incomplete because there is more data to retrieve, Amazon Q returns a pagination token in the response. You can use this pagination token to retrieve the next set of Amazon Q conversations.
     */
    nextToken?: NextToken;
    /**
     * The identifier of the user involved in the Amazon Q web experience conversation. 
     */
    userId: UserId;
  }
  export interface ListConversationsResponse {
    /**
     * An array of summary information on the configuration of one or more Amazon Q web experiences.
     */
    conversations?: Conversations;
    /**
     * If the response is truncated, Amazon Q returns this token, which you can use in a later request to list the next set of messages.
     */
    nextToken?: NextToken;
  }
  export interface ListDataSourceSyncJobsRequest {
    /**
     * The identifier of the Amazon Q application connected to the data source.
     */
    applicationId: ApplicationId;
    /**
     *  The identifier of the data source connector.
     */
    dataSourceId: DataSourceId;
    /**
     *  The end time of the data source connector sync.
     */
    endTime?: Timestamp;
    /**
     * The identifier of the index used with the Amazon Q data source connector.
     */
    indexId: IndexId;
    /**
     * The maximum number of synchronization jobs to return in the response.
     */
    maxResults?: MaxResultsIntegerForListDataSourcesSyncJobs;
    /**
     * If the maxResults response was incpmplete because there is more data to retriever, Amazon Q returns a pagination token in the response. You can use this pagination token to retrieve the next set of responses.
     */
    nextToken?: NextToken;
    /**
     *  The start time of the data source connector sync. 
     */
    startTime?: Timestamp;
    /**
     * Only returns synchronization jobs with the Status field equal to the specified status.
     */
    statusFilter?: DataSourceSyncJobStatus;
  }
  export interface ListDataSourceSyncJobsResponse {
    /**
     * A history of synchronization jobs for the data source connector.
     */
    history?: DataSourceSyncJobs;
    /**
     * If the response is truncated, Amazon Q returns this token. You can use this token in any subsequent request to retrieve the next set of jobs.
     */
    nextToken?: NextToken;
  }
  export interface ListDataSourcesRequest {
    /**
     * The identifier of the Amazon Q application linked to the data source connectors.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the index used with one or more data source connectors.
     */
    indexId: IndexId;
    /**
     * The maximum number of data source connectors to return.
     */
    maxResults?: MaxResultsIntegerForListDataSources;
    /**
     * If the maxResults response was incomplete because there is more data to retrieve, Amazon Q returns a pagination token in the response. You can use this pagination token to retrieve the next set of Amazon Q data source connectors.
     */
    nextToken?: NextToken;
  }
  export interface ListDataSourcesResponse {
    /**
     * An array of summary information for one or more data source connector.
     */
    dataSources?: DataSources;
    /**
     * If the response is truncated, Amazon Q returns this token. You can use this token in a subsequent request to retrieve the next set of data source connectors.
     */
    nextToken?: NextToken;
  }
  export interface ListDocumentsRequest {
    /**
     * The identifier of the application id the documents are attached to.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the data sources the documents are attached to.
     */
    dataSourceIds?: DataSourceIds;
    /**
     * The identifier of the index the documents are attached to.
     */
    indexId: IndexId;
    /**
     * The maximum number of documents to return.
     */
    maxResults?: MaxResultsIntegerForListDocuments;
    /**
     * If the maxResults response was incomplete because there is more data to retrieve, Amazon Q returns a pagination token in the response. You can use this pagination token to retrieve the next set of documents.
     */
    nextToken?: NextToken;
  }
  export interface ListDocumentsResponse {
    /**
     * A list of document details.
     */
    documentDetailList?: DocumentDetailList;
    /**
     * If the maxResults response was incomplete because there is more data to retrieve, Amazon Q returns a pagination token in the response. You can use this pagination token to retrieve the next set of documents.
     */
    nextToken?: NextToken;
  }
  export interface ListGroupsRequest {
    /**
     * The identifier of the application for getting a list of groups mapped to users.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the data source for getting a list of groups mapped to users.
     */
    dataSourceId?: DataSourceId;
    /**
     * The identifier of the index for getting a list of groups mapped to users.
     */
    indexId: IndexId;
    /**
     * The maximum number of returned groups that are mapped to users.
     */
    maxResults?: MaxResultsIntegerForListGroupsRequest;
    /**
     * If the previous response was incomplete (because there is more data to retrieve), Amazon Q returns a pagination token in the response. You can use this pagination token to retrieve the next set of groups that are mapped to users.
     */
    nextToken?: NextToken;
    /**
     * The timestamp identifier used for the latest PUT or DELETE action for mapping users to their groups.
     */
    updatedEarlierThan: Timestamp;
  }
  export interface ListGroupsResponse {
    /**
     * Summary information for list of groups that are mapped to users.
     */
    items?: GroupSummaryList;
    /**
     * If the response is truncated, Amazon Q returns this token that you can use in the subsequent request to retrieve the next set of groups that are mapped to users.
     */
    nextToken?: NextToken;
  }
  export interface ListIndicesRequest {
    /**
     * The identifier of the Amazon Q application connected to the index.
     */
    applicationId: ApplicationId;
    /**
     * The maximum number of indices to return.
     */
    maxResults?: MaxResultsIntegerForListIndices;
    /**
     * If the maxResults response was incomplete because there is more data to retrieve, Amazon Q returns a pagination token in the response. You can use this pagination token to retrieve the next set of Amazon Q indices.
     */
    nextToken?: NextToken;
  }
  export interface ListIndicesResponse {
    /**
     * An array of information on the items in one or more indexes.
     */
    indices?: Indices;
    /**
     * If the response is truncated, Amazon Q returns this token that you can use in the subsequent request to retrieve the next set of indexes.
     */
    nextToken?: NextToken;
  }
  export interface ListMessagesRequest {
    /**
     * The identifier for the Amazon Q application.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the Amazon Q web experience conversation.
     */
    conversationId: ConversationId;
    /**
     * The maximum number of messages to return.
     */
    maxResults?: MaxResultsIntegerForListMessages;
    /**
     * If the number of retrievers returned exceeds maxResults, Amazon Q returns a next token as a pagination token to retrieve the next set of messages.
     */
    nextToken?: NextToken;
    /**
     * The identifier of the user involved in the Amazon Q web experience conversation.
     */
    userId: UserId;
  }
  export interface ListMessagesResponse {
    /**
     * An array of information on one or more messages.
     */
    messages?: Messages;
    /**
     * If the response is truncated, Amazon Q returns this token, which you can use in a later request to list the next set of messages.
     */
    nextToken?: NextToken;
  }
  export interface ListPluginsRequest {
    /**
     * The identifier of the application the plugin is attached to.
     */
    applicationId: ApplicationId;
    /**
     * The maximum number of documents to return.
     */
    maxResults?: MaxResultsIntegerForListPlugins;
    /**
     * If the maxResults response was incomplete because there is more data to retrieve, Amazon Q returns a pagination token in the response. You can use this pagination token to retrieve the next set of plugins.
     */
    nextToken?: NextToken;
  }
  export interface ListPluginsResponse {
    /**
     * If the maxResults response was incomplete because there is more data to retrieve, Amazon Q returns a pagination token in the response. You can use this pagination token to retrieve the next set of plugins.
     */
    nextToken?: NextToken;
    /**
     * Information about a configured plugin.
     */
    plugins?: Plugins;
  }
  export interface ListRetrieversRequest {
    /**
     * The identifier of the Amazon Q application using the retriever.
     */
    applicationId: ApplicationId;
    /**
     * The maximum number of retrievers returned.
     */
    maxResults?: MaxResultsIntegerForListRetrieversRequest;
    /**
     * If the number of retrievers returned exceeds maxResults, Amazon Q returns a next token as a pagination token to retrieve the next set of retrievers.
     */
    nextToken?: NextToken;
  }
  export interface ListRetrieversResponse {
    /**
     * If the response is truncated, Amazon Q returns this token, which you can use in a later request to list the next set of retrievers.
     */
    nextToken?: NextToken;
    /**
     * An array of summary information for one or more retrievers.
     */
    retrievers?: Retrievers;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the Amazon Q application or data source to get a list of tags for.
     */
    resourceARN: AmazonResourceName;
  }
  export interface ListTagsForResourceResponse {
    /**
     * A list of tags associated with the Amazon Q application or data source.
     */
    tags?: Tags;
  }
  export interface ListWebExperiencesRequest {
    /**
     * The identifier of the Amazon Q application linked to the listed web experiences.
     */
    applicationId: ApplicationId;
    /**
     * The maximum number of Amazon Q Web Experiences to return.
     */
    maxResults?: MaxResultsIntegerForListWebExperiencesRequest;
    /**
     * If the maxResults response was incomplete because there is more data to retrieve, Amazon Q returns a pagination token in the response. You can use this pagination token to retrieve the next set of Amazon Q conversations.
     */
    nextToken?: NextToken;
  }
  export interface ListWebExperiencesResponse {
    /**
     * If the response is truncated, Amazon Q returns this token, which you can use in a later request to list the next set of messages.
     */
    nextToken?: NextToken;
    /**
     * An array of summary information for one or more Amazon Q experiences.
     */
    webExperiences?: WebExperiences;
  }
  export type Long = number;
  export type MaxResultsIntegerForGetTopicConfigurations = number;
  export type MaxResultsIntegerForListApplications = number;
  export type MaxResultsIntegerForListConversations = number;
  export type MaxResultsIntegerForListDataSources = number;
  export type MaxResultsIntegerForListDataSourcesSyncJobs = number;
  export type MaxResultsIntegerForListDocuments = number;
  export type MaxResultsIntegerForListGroupsRequest = number;
  export type MaxResultsIntegerForListIndices = number;
  export type MaxResultsIntegerForListMessages = number;
  export type MaxResultsIntegerForListPlugins = number;
  export type MaxResultsIntegerForListRetrieversRequest = number;
  export type MaxResultsIntegerForListWebExperiencesRequest = number;
  export interface MemberGroup {
    /**
     * The name of the sub group.
     */
    groupName: GroupName;
    /**
     * The type of the sub group.
     */
    type?: MembershipType;
  }
  export type MemberGroups = MemberGroup[];
  export type MemberRelation = "AND"|"OR"|string;
  export interface MemberUser {
    /**
     * The type of the user.
     */
    type?: MembershipType;
    /**
     * The identifier of the user you want to map to a group.
     */
    userId: DataSourceUserId;
  }
  export type MemberUsers = MemberUser[];
  export type MembershipType = "INDEX"|"DATASOURCE"|string;
  export interface Message {
    actionExecution?: ActionExecution;
    actionReview?: ActionReview;
    /**
     * A file directly uploaded into an Amazon Q web experience chat.
     */
    attachments?: AttachmentsOutput;
    /**
     * The content of the Amazon Q web experience message.
     */
    body?: MessageBody;
    /**
     * The identifier of the Amazon Q web experience message.
     */
    messageId?: String;
    /**
     * The source documents used to generate Amazon Q web experience message.
     */
    sourceAttribution?: SourceAttributions;
    /**
     * The timestamp of the first Amazon Q web experience message.
     */
    time?: Timestamp;
    /**
     * The type of Amazon Q message, whether HUMAN or AI generated.
     */
    type?: MessageType;
  }
  export type MessageBody = string;
  export type MessageId = string;
  export type MessageType = "USER"|"SYSTEM"|string;
  export type MessageUsefulness = "USEFUL"|"NOT_USEFUL"|string;
  export type MessageUsefulnessComment = string;
  export interface MessageUsefulnessFeedback {
    /**
     * A comment given by an end user on the usefulness of an AI-generated chat message.
     */
    comment?: MessageUsefulnessComment;
    /**
     * The reason for a usefulness rating.
     */
    reason?: MessageUsefulnessReason;
    /**
     * The timestamp for when the feedback was submitted.
     */
    submittedAt: Timestamp;
    /**
     * The usefulness value assigned by an end user to a message.
     */
    usefulness: MessageUsefulness;
  }
  export type MessageUsefulnessReason = "NOT_FACTUALLY_CORRECT"|"HARMFUL_OR_UNSAFE"|"INCORRECT_OR_MISSING_SOURCES"|"NOT_HELPFUL"|"FACTUALLY_CORRECT"|"COMPLETE"|"RELEVANT_SOURCES"|"HELPFUL"|string;
  export type Messages = Message[];
  export type MetricValue = string;
  export interface NativeIndexConfiguration {
    /**
     * The identifier for the Amazon Q index.
     */
    indexId: IndexId;
  }
  export type NextToken = string;
  export interface OAuth2ClientCredentialConfiguration {
    /**
     * The ARN of an IAM role used by Amazon Q to access the OAuth 2.0 authentication credentials stored in a Secrets Manager secret.
     */
    roleArn: RoleArn;
    /**
     * The ARN of the Secrets Manager secret that stores the OAuth 2.0 credentials/token used for plugin configuration.
     */
    secretArn: SecretArn;
  }
  export interface Plugin {
    /**
     * The timestamp for when the plugin was created.
     */
    createdAt?: Timestamp;
    /**
     * The name of the plugin.
     */
    displayName?: PluginName;
    /**
     * The identifier of the plugin.
     */
    pluginId?: PluginId;
    /**
     * The plugin server URL used for configuration.
     */
    serverUrl?: Url;
    /**
     * The current status of the plugin.
     */
    state?: PluginState;
    /**
     * The type of the plugin.
     */
    type?: PluginType;
    /**
     * The timestamp for when the plugin was last updated.
     */
    updatedAt?: Timestamp;
  }
  export type PluginArn = string;
  export interface PluginAuthConfiguration {
    /**
     * Information about the basic authentication credentials used to configure a plugin.
     */
    basicAuthConfiguration?: BasicAuthConfiguration;
    /**
     * Information about the OAuth 2.0 authentication credential/token used to configure a plugin.
     */
    oAuth2ClientCredentialConfiguration?: OAuth2ClientCredentialConfiguration;
  }
  export type PluginId = string;
  export type PluginName = string;
  export type PluginState = "ENABLED"|"DISABLED"|string;
  export type PluginType = "SERVICE_NOW"|"SALESFORCE"|"JIRA"|"ZENDESK"|string;
  export type Plugins = Plugin[];
  export interface Principal {
    /**
     *  The group associated with the principal.
     */
    group?: PrincipalGroup;
    /**
     * The user associated with the principal.
     */
    user?: PrincipalUser;
  }
  export interface PrincipalGroup {
    /**
     * Provides information about whether to allow or deny access to the principal.
     */
    access: ReadAccessType;
    /**
     * The type of group.
     */
    membershipType?: MembershipType;
    /**
     * The name of the group.
     */
    name?: GroupName;
  }
  export interface PrincipalUser {
    /**
     * Provides information about whether to allow or deny access to the principal.
     */
    access: ReadAccessType;
    /**
     *  The identifier of the user. 
     */
    id?: UserId;
    /**
     * The type of group.
     */
    membershipType?: MembershipType;
  }
  export type Principals = Principal[];
  export interface PutFeedbackRequest {
    /**
     * The identifier of the application associated with the feedback.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the conversation the feedback is attached to.
     */
    conversationId: ConversationId;
    /**
     * The timestamp for when the feedback was recorded.
     */
    messageCopiedAt?: Timestamp;
    /**
     * The identifier of the chat message that the feedback was given for.
     */
    messageId: SystemMessageId;
    /**
     * The feedback usefulness value given by the user to the chat message.
     */
    messageUsefulness?: MessageUsefulnessFeedback;
    /**
     * The identifier of the user giving the feedback.
     */
    userId: UserId;
  }
  export interface PutGroupRequest {
    /**
     * The identifier of the application in which the user and group mapping belongs.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the data source for which you want to map users to their groups. This is useful if a group is tied to multiple data sources, but you only want the group to access documents of a certain data source. For example, the groups "Research", "Engineering", and "Sales and Marketing" are all tied to the company's documents stored in the data sources Confluence and Salesforce. However, "Sales and Marketing" team only needs access to customer-related documents stored in Salesforce.
     */
    dataSourceId?: DataSourceId;
    groupMembers: GroupMembers;
    /**
     * The list that contains your users or sub groups that belong the same group. For example, the group "Company" includes the user "CEO" and the sub groups "Research", "Engineering", and "Sales and Marketing". If you have more than 1000 users and/or sub groups for a single group, you need to provide the path to the S3 file that lists your users and sub groups for a group. Your sub groups can contain more than 1000 users, but the list of sub groups that belong to a group (and/or users) must be no more than 1000.
     */
    groupName: GroupName;
    /**
     * The identifier of the index in which you want to map users to their groups.
     */
    indexId: IndexId;
    /**
     * The type of the group.
     */
    type: MembershipType;
  }
  export interface PutGroupResponse {
  }
  export type ReadAccessType = "ALLOW"|"DENY"|string;
  export type ResponseScope = "ENTERPRISE_CONTENT_ONLY"|"EXTENDED_KNOWLEDGE_ENABLED"|string;
  export interface Retriever {
    /**
     * The identifier of the Amazon Q application using the retriever.
     */
    applicationId?: ApplicationId;
    /**
     * The name of your retriever.
     */
    displayName?: RetrieverName;
    /**
     * The identifier of the retriever used by your Amazon Q application.
     */
    retrieverId?: RetrieverId;
    /**
     * The status of your retriever.
     */
    status?: RetrieverStatus;
    /**
     * The type of your retriever.
     */
    type?: RetrieverType;
  }
  export type RetrieverArn = string;
  export interface RetrieverConfiguration {
    /**
     * Provides information on how the Amazon Kendra index used as a retriever for your Amazon Q application is configured.
     */
    kendraIndexConfiguration?: KendraIndexConfiguration;
    /**
     * Provides information on how a Amazon Q index used as a retriever for your Amazon Q application is configured.
     */
    nativeIndexConfiguration?: NativeIndexConfiguration;
  }
  export type RetrieverId = string;
  export type RetrieverName = string;
  export type RetrieverStatus = "CREATING"|"ACTIVE"|"FAILED"|string;
  export type RetrieverType = "NATIVE_INDEX"|"KENDRA_INDEX"|string;
  export type Retrievers = Retriever[];
  export type RoleArn = string;
  export interface Rule {
    /**
     * Users and groups to be excluded from a rule.
     */
    excludedUsersAndGroups?: UsersAndGroups;
    /**
     * Users and groups to be included in a rule.
     */
    includedUsersAndGroups?: UsersAndGroups;
    /**
     * The configuration information for a rule.
     */
    ruleConfiguration?: RuleConfiguration;
    /**
     * The type fo rule.
     */
    ruleType: RuleType;
  }
  export interface RuleConfiguration {
    /**
     * A rule for configuring how Amazon Q responds when it encounters a a blocked topic.
     */
    contentBlockerRule?: ContentBlockerRule;
    contentRetrievalRule?: ContentRetrievalRule;
  }
  export type RuleType = "CONTENT_BLOCKER_RULE"|"CONTENT_RETRIEVAL_RULE"|string;
  export type Rules = Rule[];
  export interface S3 {
    /**
     * The name of the S3 bucket that contains the file.
     */
    bucket: S3BucketName;
    /**
     * The name of the file.
     */
    key: S3ObjectKey;
  }
  export type S3BucketName = string;
  export type S3ObjectKey = string;
  export type SamlAttribute = string;
  export interface SamlConfiguration {
    /**
     * The metadata XML that your IdP generated.
     */
    metadataXML: SamlMetadataXML;
    /**
     * The Amazon Resource Name (ARN) of an IAM role assumed by users when they authenticate into their Amazon Q web experience, containing the relevant Amazon Q permissions for conversing with Amazon Q.
     */
    roleArn: RoleArn;
    /**
     * The group attribute name in your IdP that maps to user groups.
     */
    userGroupAttribute?: SamlAttribute;
    /**
     * The user attribute name in your IdP that maps to the user email.
     */
    userIdAttribute: SamlAttribute;
  }
  export type SamlMetadataXML = string;
  export type SecretArn = string;
  export type SecurityGroupId = string;
  export type SecurityGroupIds = SecurityGroupId[];
  export interface SourceAttribution {
    /**
     * The number attached to a citation in an Amazon Q generated response.
     */
    citationNumber?: Integer;
    /**
     * The content extract from the document on which the generated response is based. 
     */
    snippet?: String;
    /**
     * A text extract from a source document that is used for source attribution.
     */
    textMessageSegments?: TextSegmentList;
    /**
     * The title of the document which is the source for the Amazon Q generated response. 
     */
    title?: String;
    /**
     * The Unix timestamp when the Amazon Q application was last updated.
     */
    updatedAt?: Timestamp;
    /**
     * The URL of the document which is the source for the Amazon Q generated response. 
     */
    url?: String;
  }
  export type SourceAttributions = SourceAttribution[];
  export interface StartDataSourceSyncJobRequest {
    /**
     * The identifier of Amazon Q application the data source is connected to.
     */
    applicationId: ApplicationId;
    /**
     *  The identifier of the data source connector. 
     */
    dataSourceId: DataSourceId;
    /**
     * The identifier of the index used with the data source connector.
     */
    indexId: IndexId;
  }
  export interface StartDataSourceSyncJobResponse {
    /**
     * The identifier for a particular synchronization job.
     */
    executionId?: ExecutionId;
  }
  export type Status = "ENABLED"|"DISABLED"|string;
  export interface StopDataSourceSyncJobRequest {
    /**
     * The identifier of the Amazon Q application that the data source is connected to.
     */
    applicationId: ApplicationId;
    /**
     *  The identifier of the data source connector. 
     */
    dataSourceId: DataSourceId;
    /**
     * The identifier of the index used with the Amazon Q data source connector.
     */
    indexId: IndexId;
  }
  export interface StopDataSourceSyncJobResponse {
  }
  export type String = string;
  export type SubnetId = string;
  export type SubnetIds = SubnetId[];
  export type SyncSchedule = string;
  export type SystemMessageId = string;
  export type SystemMessageOverride = string;
  export interface Tag {
    /**
     *  The key for the tag. Keys are not case sensitive and must be unique for the Amazon Q application or data source.
     */
    key: TagKey;
    /**
     * The value associated with the tag. The value may be an empty string but it can't be null.
     */
    value: TagValue;
  }
  export type TagKey = string;
  export type TagKeys = TagKey[];
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the Amazon Q application or data source to tag.
     */
    resourceARN: AmazonResourceName;
    /**
     * A list of tag keys to add to the Amazon Q application or data source. If a tag already exists, the existing value is replaced with the new value.
     */
    tags: Tags;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type Tags = Tag[];
  export interface TextDocumentStatistics {
    /**
     * The total size, in bytes, of the indexed documents.
     */
    indexedTextBytes?: IndexedTextBytes;
    /**
     * The number of text documents indexed.
     */
    indexedTextDocumentCount?: IndexedTextDocument;
  }
  export interface TextSegment {
    /**
     * The zero-based location in the response string where the source attribution starts.
     */
    beginOffset?: Integer;
    /**
     * The zero-based location in the response string where the source attribution ends.
     */
    endOffset?: Integer;
  }
  export type TextSegmentList = TextSegment[];
  export type Timestamp = Date;
  export type Title = string;
  export interface TopicConfiguration {
    /**
     * A description for your topic control configuration. Use this outline how the large language model (LLM) should use this topic control configuration.
     */
    description?: TopicDescription;
    /**
     * A list of example phrases that you expect the end user to use in relation to the topic.
     */
    exampleChatMessages?: ExampleChatMessages;
    /**
     * A name for your topic control configuration.
     */
    name: TopicConfigurationName;
    /**
     * Rules defined for a topic configuration.
     */
    rules: Rules;
  }
  export type TopicConfigurationName = string;
  export type TopicConfigurations = TopicConfiguration[];
  export type TopicDescription = string;
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the Amazon Q application, or data source to remove the tag from.
     */
    resourceARN: AmazonResourceName;
    /**
     * A list of tag keys to remove from the Amazon Q application or data source. If a tag key does not exist on the resource, it is ignored.
     */
    tagKeys: TagKeys;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateApplicationRequest {
    /**
     * The identifier of the Amazon Q application.
     */
    applicationId: ApplicationId;
    /**
     * An option to allow end users to upload files directly during chat.
     */
    attachmentsConfiguration?: AttachmentsConfiguration;
    /**
     * A description for the Amazon Q application.
     */
    description?: Description;
    /**
     * A name for the Amazon Q application.
     */
    displayName?: ApplicationName;
    /**
     * An Amazon Web Services Identity and Access Management (IAM) role that gives Amazon Q permission to access Amazon CloudWatch logs and metrics.
     */
    roleArn?: RoleArn;
  }
  export interface UpdateApplicationResponse {
  }
  export interface UpdateChatControlsConfigurationRequest {
    /**
     * The identifier of the application for which the chat controls are configured.
     */
    applicationId: ApplicationId;
    /**
     * The phrases blocked from chat by your chat control configuration.
     */
    blockedPhrasesConfigurationUpdate?: BlockedPhrasesConfigurationUpdate;
    /**
     * A token that you provide to identify the request to update a Amazon Q application chat configuration.
     */
    clientToken?: ClientToken;
    /**
     * The response scope configured for your application. This determines whether your application uses its retrieval augmented generation (RAG) system to generate answers only from your enterprise data, or also uses the large language models (LLM) knowledge to respons to end user questions in chat.
     */
    responseScope?: ResponseScope;
    /**
     * The configured topic specific chat controls you want to update.
     */
    topicConfigurationsToCreateOrUpdate?: TopicConfigurations;
    /**
     * The configured topic specific chat controls you want to delete.
     */
    topicConfigurationsToDelete?: TopicConfigurations;
  }
  export interface UpdateChatControlsConfigurationResponse {
  }
  export interface UpdateDataSourceRequest {
    /**
     *  The identifier of the Amazon Q application the data source is attached to.
     */
    applicationId: ApplicationId;
    configuration?: DataSourceConfiguration;
    /**
     * The identifier of the data source connector.
     */
    dataSourceId: DataSourceId;
    /**
     * The description of the data source connector.
     */
    description?: Description;
    /**
     * A name of the data source connector.
     */
    displayName?: DataSourceName;
    documentEnrichmentConfiguration?: DocumentEnrichmentConfiguration;
    /**
     * The identifier of the index attached to the data source connector.
     */
    indexId: IndexId;
    /**
     * The Amazon Resource Name (ARN) of an IAM role with permission to access the data source and required resources.
     */
    roleArn?: RoleArn;
    /**
     * The chosen update frequency for your data source.
     */
    syncSchedule?: SyncSchedule;
    vpcConfiguration?: DataSourceVpcConfiguration;
  }
  export interface UpdateDataSourceResponse {
  }
  export interface UpdateIndexRequest {
    /**
     * The identifier of the Amazon Q application connected to the index.
     */
    applicationId: ApplicationId;
    /**
     * The storage capacity units you want to provision for your Amazon Q index. You can add and remove capacity to fit your usage needs.
     */
    capacityConfiguration?: IndexCapacityConfiguration;
    /**
     * The description of the Amazon Q index.
     */
    description?: Description;
    /**
     * The name of the Amazon Q index.
     */
    displayName?: ApplicationName;
    /**
     * Configuration information for document metadata or fields. Document metadata are fields or attributes associated with your documents. For example, the company department name associated with each document. For more information, see Understanding document attributes.
     */
    documentAttributeConfigurations?: DocumentAttributeConfigurations;
    /**
     * The identifier of the Amazon Q index.
     */
    indexId: IndexId;
  }
  export interface UpdateIndexResponse {
  }
  export interface UpdatePluginRequest {
    /**
     * The identifier of the application the plugin is attached to.
     */
    applicationId: ApplicationId;
    /**
     * The authentication configuration the plugin is using.
     */
    authConfiguration?: PluginAuthConfiguration;
    /**
     * The name of the plugin.
     */
    displayName?: PluginName;
    /**
     * The identifier of the plugin.
     */
    pluginId: PluginId;
    /**
     * The source URL used for plugin configuration.
     */
    serverUrl?: Url;
    /**
     * The status of the plugin. 
     */
    state?: PluginState;
  }
  export interface UpdatePluginResponse {
  }
  export interface UpdateRetrieverRequest {
    /**
     * The identifier of your Amazon Q application.
     */
    applicationId: ApplicationId;
    configuration?: RetrieverConfiguration;
    /**
     * The name of your retriever.
     */
    displayName?: RetrieverName;
    /**
     * The identifier of your retriever.
     */
    retrieverId: RetrieverId;
    /**
     * The Amazon Resource Name (ARN) of an IAM role with permission to access the retriever and required resources. 
     */
    roleArn?: RoleArn;
  }
  export interface UpdateRetrieverResponse {
  }
  export interface UpdateUserRequest {
    /**
     * The identifier of the application the user is attached to.
     */
    applicationId: ApplicationId;
    /**
     * The user aliases attached to the user id that are to be deleted.
     */
    userAliasesToDelete?: UserAliases;
    /**
     * The user aliases attached to the user id that are to be updated.
     */
    userAliasesToUpdate?: UserAliases;
    /**
     * The email id attached to the user.
     */
    userId: String;
  }
  export interface UpdateUserResponse {
    /**
     * The user aliases that have been to be added to a user id.
     */
    userAliasesAdded?: UserAliases;
    /**
     * The user aliases that have been deleted from a user id.
     */
    userAliasesDeleted?: UserAliases;
    /**
     * The user aliases attached to a user id that have been updated.
     */
    userAliasesUpdated?: UserAliases;
  }
  export interface UpdateWebExperienceRequest {
    /**
     * The identifier of the Amazon Q application attached to the web experience.
     */
    applicationId: ApplicationId;
    /**
     * The authentication configuration of the Amazon Q web experience.
     */
    authenticationConfiguration?: WebExperienceAuthConfiguration;
    /**
     * Determines whether sample prompts are enabled in the web experience for an end user.
     */
    samplePromptsControlMode?: WebExperienceSamplePromptsControlMode;
    /**
     * The subtitle of the Amazon Q web experience.
     */
    subtitle?: WebExperienceSubtitle;
    /**
     * The title of the Amazon Q web experience.
     */
    title?: WebExperienceTitle;
    /**
     * The identifier of the Amazon Q web experience.
     */
    webExperienceId: WebExperienceId;
    /**
     * A customized welcome message for an end user in an Amazon Q web experience.
     */
    welcomeMessage?: WebExperienceWelcomeMessage;
  }
  export interface UpdateWebExperienceResponse {
  }
  export type Url = string;
  export interface UserAlias {
    /**
     * The identifier of the data source that the user aliases are associated with.
     */
    dataSourceId?: DataSourceId;
    /**
     * The identifier of the index that the user aliases are associated with.
     */
    indexId?: IndexId;
    /**
     * The identifier of the user id associated with the user aliases.
     */
    userId: String;
  }
  export type UserAliases = UserAlias[];
  export type UserGroups = String[];
  export type UserId = string;
  export type UserIds = String[];
  export type UserMessage = string;
  export interface UsersAndGroups {
    /**
     * The user groups associated with a topic control rule.
     */
    userGroups?: UserGroups;
    /**
     * The user ids associated with a topic control rule.
     */
    userIds?: UserIds;
  }
  export interface WebExperience {
    /**
     * The Unix timestamp when the Amazon Q application was last updated.
     */
    createdAt?: Timestamp;
    /**
     * The endpoint URLs for your Amazon Q web experience. The URLs are unique and fully hosted by Amazon Web Services.
     */
    defaultEndpoint?: Url;
    /**
     * The status of your Amazon Q web experience.
     */
    status?: WebExperienceStatus;
    /**
     * The Unix timestamp when your Amazon Q web experience was updated.
     */
    updatedAt?: Timestamp;
    /**
     * The identifier of your Amazon Q web experience.
     */
    webExperienceId?: WebExperienceId;
  }
  export type WebExperienceArn = string;
  export interface WebExperienceAuthConfiguration {
    samlConfiguration?: SamlConfiguration;
  }
  export type WebExperienceId = string;
  export type WebExperienceSamplePromptsControlMode = "ENABLED"|"DISABLED"|string;
  export type WebExperienceStatus = "CREATING"|"ACTIVE"|"DELETING"|"FAILED"|"PENDING_AUTH_CONFIG"|string;
  export type WebExperienceSubtitle = string;
  export type WebExperienceTitle = string;
  export type WebExperienceWelcomeMessage = string;
  export type WebExperiences = WebExperience[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2023-11-27"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the QBusiness client.
   */
  export import Types = QBusiness;
}
export = QBusiness;
