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
   * Asynchronously deletes one or more documents added using the BatchPutDocument API from an Amazon Q Business index. You can see the progress of the deletion, and any error messages related to the process, by using CloudWatch.
   */
  batchDeleteDocument(params: QBusiness.Types.BatchDeleteDocumentRequest, callback?: (err: AWSError, data: QBusiness.Types.BatchDeleteDocumentResponse) => void): Request<QBusiness.Types.BatchDeleteDocumentResponse, AWSError>;
  /**
   * Asynchronously deletes one or more documents added using the BatchPutDocument API from an Amazon Q Business index. You can see the progress of the deletion, and any error messages related to the process, by using CloudWatch.
   */
  batchDeleteDocument(callback?: (err: AWSError, data: QBusiness.Types.BatchDeleteDocumentResponse) => void): Request<QBusiness.Types.BatchDeleteDocumentResponse, AWSError>;
  /**
   * Adds one or more documents to an Amazon Q Business index. You use this API to:   ingest your structured and unstructured documents and documents stored in an Amazon S3 bucket into an Amazon Q Business index.   add custom attributes to documents in an Amazon Q Business index.   attach an access control list to the documents added to an Amazon Q Business index.   You can see the progress of the deletion, and any error messages related to the process, by using CloudWatch.
   */
  batchPutDocument(params: QBusiness.Types.BatchPutDocumentRequest, callback?: (err: AWSError, data: QBusiness.Types.BatchPutDocumentResponse) => void): Request<QBusiness.Types.BatchPutDocumentResponse, AWSError>;
  /**
   * Adds one or more documents to an Amazon Q Business index. You use this API to:   ingest your structured and unstructured documents and documents stored in an Amazon S3 bucket into an Amazon Q Business index.   add custom attributes to documents in an Amazon Q Business index.   attach an access control list to the documents added to an Amazon Q Business index.   You can see the progress of the deletion, and any error messages related to the process, by using CloudWatch.
   */
  batchPutDocument(callback?: (err: AWSError, data: QBusiness.Types.BatchPutDocumentResponse) => void): Request<QBusiness.Types.BatchPutDocumentResponse, AWSError>;
  /**
   * Starts or continues a non-streaming Amazon Q Business conversation.
   */
  chatSync(params: QBusiness.Types.ChatSyncInput, callback?: (err: AWSError, data: QBusiness.Types.ChatSyncOutput) => void): Request<QBusiness.Types.ChatSyncOutput, AWSError>;
  /**
   * Starts or continues a non-streaming Amazon Q Business conversation.
   */
  chatSync(callback?: (err: AWSError, data: QBusiness.Types.ChatSyncOutput) => void): Request<QBusiness.Types.ChatSyncOutput, AWSError>;
  /**
   * Creates an Amazon Q Business application.  There are new tiers for Amazon Q Business. Not all features in Amazon Q Business Pro are also available in Amazon Q Business Lite. For information on what's included in Amazon Q Business Lite and what's included in Amazon Q Business Pro, see Amazon Q Business tiers. You must use the Amazon Q Business console to assign subscription tiers to users. 
   */
  createApplication(params: QBusiness.Types.CreateApplicationRequest, callback?: (err: AWSError, data: QBusiness.Types.CreateApplicationResponse) => void): Request<QBusiness.Types.CreateApplicationResponse, AWSError>;
  /**
   * Creates an Amazon Q Business application.  There are new tiers for Amazon Q Business. Not all features in Amazon Q Business Pro are also available in Amazon Q Business Lite. For information on what's included in Amazon Q Business Lite and what's included in Amazon Q Business Pro, see Amazon Q Business tiers. You must use the Amazon Q Business console to assign subscription tiers to users. 
   */
  createApplication(callback?: (err: AWSError, data: QBusiness.Types.CreateApplicationResponse) => void): Request<QBusiness.Types.CreateApplicationResponse, AWSError>;
  /**
   * Creates a data source connector for an Amazon Q Business application.  CreateDataSource is a synchronous operation. The operation returns 200 if the data source was successfully created. Otherwise, an exception is raised.
   */
  createDataSource(params: QBusiness.Types.CreateDataSourceRequest, callback?: (err: AWSError, data: QBusiness.Types.CreateDataSourceResponse) => void): Request<QBusiness.Types.CreateDataSourceResponse, AWSError>;
  /**
   * Creates a data source connector for an Amazon Q Business application.  CreateDataSource is a synchronous operation. The operation returns 200 if the data source was successfully created. Otherwise, an exception is raised.
   */
  createDataSource(callback?: (err: AWSError, data: QBusiness.Types.CreateDataSourceResponse) => void): Request<QBusiness.Types.CreateDataSourceResponse, AWSError>;
  /**
   * Creates an Amazon Q Business index. To determine if index creation has completed, check the Status field returned from a call to DescribeIndex. The Status field is set to ACTIVE when the index is ready to use. Once the index is active, you can index your documents using the  BatchPutDocument  API or the  CreateDataSource  API.
   */
  createIndex(params: QBusiness.Types.CreateIndexRequest, callback?: (err: AWSError, data: QBusiness.Types.CreateIndexResponse) => void): Request<QBusiness.Types.CreateIndexResponse, AWSError>;
  /**
   * Creates an Amazon Q Business index. To determine if index creation has completed, check the Status field returned from a call to DescribeIndex. The Status field is set to ACTIVE when the index is ready to use. Once the index is active, you can index your documents using the  BatchPutDocument  API or the  CreateDataSource  API.
   */
  createIndex(callback?: (err: AWSError, data: QBusiness.Types.CreateIndexResponse) => void): Request<QBusiness.Types.CreateIndexResponse, AWSError>;
  /**
   * Creates an Amazon Q Business plugin.
   */
  createPlugin(params: QBusiness.Types.CreatePluginRequest, callback?: (err: AWSError, data: QBusiness.Types.CreatePluginResponse) => void): Request<QBusiness.Types.CreatePluginResponse, AWSError>;
  /**
   * Creates an Amazon Q Business plugin.
   */
  createPlugin(callback?: (err: AWSError, data: QBusiness.Types.CreatePluginResponse) => void): Request<QBusiness.Types.CreatePluginResponse, AWSError>;
  /**
   * Adds a retriever to your Amazon Q Business application.
   */
  createRetriever(params: QBusiness.Types.CreateRetrieverRequest, callback?: (err: AWSError, data: QBusiness.Types.CreateRetrieverResponse) => void): Request<QBusiness.Types.CreateRetrieverResponse, AWSError>;
  /**
   * Adds a retriever to your Amazon Q Business application.
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
   * Creates an Amazon Q Business web experience.
   */
  createWebExperience(params: QBusiness.Types.CreateWebExperienceRequest, callback?: (err: AWSError, data: QBusiness.Types.CreateWebExperienceResponse) => void): Request<QBusiness.Types.CreateWebExperienceResponse, AWSError>;
  /**
   * Creates an Amazon Q Business web experience.
   */
  createWebExperience(callback?: (err: AWSError, data: QBusiness.Types.CreateWebExperienceResponse) => void): Request<QBusiness.Types.CreateWebExperienceResponse, AWSError>;
  /**
   * Deletes an Amazon Q Business application.
   */
  deleteApplication(params: QBusiness.Types.DeleteApplicationRequest, callback?: (err: AWSError, data: QBusiness.Types.DeleteApplicationResponse) => void): Request<QBusiness.Types.DeleteApplicationResponse, AWSError>;
  /**
   * Deletes an Amazon Q Business application.
   */
  deleteApplication(callback?: (err: AWSError, data: QBusiness.Types.DeleteApplicationResponse) => void): Request<QBusiness.Types.DeleteApplicationResponse, AWSError>;
  /**
   * Deletes chat controls configured for an existing Amazon Q Business application.
   */
  deleteChatControlsConfiguration(params: QBusiness.Types.DeleteChatControlsConfigurationRequest, callback?: (err: AWSError, data: QBusiness.Types.DeleteChatControlsConfigurationResponse) => void): Request<QBusiness.Types.DeleteChatControlsConfigurationResponse, AWSError>;
  /**
   * Deletes chat controls configured for an existing Amazon Q Business application.
   */
  deleteChatControlsConfiguration(callback?: (err: AWSError, data: QBusiness.Types.DeleteChatControlsConfigurationResponse) => void): Request<QBusiness.Types.DeleteChatControlsConfigurationResponse, AWSError>;
  /**
   * Deletes an Amazon Q Business web experience conversation.
   */
  deleteConversation(params: QBusiness.Types.DeleteConversationRequest, callback?: (err: AWSError, data: QBusiness.Types.DeleteConversationResponse) => void): Request<QBusiness.Types.DeleteConversationResponse, AWSError>;
  /**
   * Deletes an Amazon Q Business web experience conversation.
   */
  deleteConversation(callback?: (err: AWSError, data: QBusiness.Types.DeleteConversationResponse) => void): Request<QBusiness.Types.DeleteConversationResponse, AWSError>;
  /**
   * Deletes an Amazon Q Business data source connector. While the data source is being deleted, the Status field returned by a call to the DescribeDataSource API is set to DELETING. 
   */
  deleteDataSource(params: QBusiness.Types.DeleteDataSourceRequest, callback?: (err: AWSError, data: QBusiness.Types.DeleteDataSourceResponse) => void): Request<QBusiness.Types.DeleteDataSourceResponse, AWSError>;
  /**
   * Deletes an Amazon Q Business data source connector. While the data source is being deleted, the Status field returned by a call to the DescribeDataSource API is set to DELETING. 
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
   * Deletes an Amazon Q Business index.
   */
  deleteIndex(params: QBusiness.Types.DeleteIndexRequest, callback?: (err: AWSError, data: QBusiness.Types.DeleteIndexResponse) => void): Request<QBusiness.Types.DeleteIndexResponse, AWSError>;
  /**
   * Deletes an Amazon Q Business index.
   */
  deleteIndex(callback?: (err: AWSError, data: QBusiness.Types.DeleteIndexResponse) => void): Request<QBusiness.Types.DeleteIndexResponse, AWSError>;
  /**
   * Deletes an Amazon Q Business plugin.
   */
  deletePlugin(params: QBusiness.Types.DeletePluginRequest, callback?: (err: AWSError, data: QBusiness.Types.DeletePluginResponse) => void): Request<QBusiness.Types.DeletePluginResponse, AWSError>;
  /**
   * Deletes an Amazon Q Business plugin.
   */
  deletePlugin(callback?: (err: AWSError, data: QBusiness.Types.DeletePluginResponse) => void): Request<QBusiness.Types.DeletePluginResponse, AWSError>;
  /**
   * Deletes the retriever used by an Amazon Q Business application.
   */
  deleteRetriever(params: QBusiness.Types.DeleteRetrieverRequest, callback?: (err: AWSError, data: QBusiness.Types.DeleteRetrieverResponse) => void): Request<QBusiness.Types.DeleteRetrieverResponse, AWSError>;
  /**
   * Deletes the retriever used by an Amazon Q Business application.
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
   * Deletes an Amazon Q Business web experience.
   */
  deleteWebExperience(params: QBusiness.Types.DeleteWebExperienceRequest, callback?: (err: AWSError, data: QBusiness.Types.DeleteWebExperienceResponse) => void): Request<QBusiness.Types.DeleteWebExperienceResponse, AWSError>;
  /**
   * Deletes an Amazon Q Business web experience.
   */
  deleteWebExperience(callback?: (err: AWSError, data: QBusiness.Types.DeleteWebExperienceResponse) => void): Request<QBusiness.Types.DeleteWebExperienceResponse, AWSError>;
  /**
   * Gets information about an existing Amazon Q Business application.
   */
  getApplication(params: QBusiness.Types.GetApplicationRequest, callback?: (err: AWSError, data: QBusiness.Types.GetApplicationResponse) => void): Request<QBusiness.Types.GetApplicationResponse, AWSError>;
  /**
   * Gets information about an existing Amazon Q Business application.
   */
  getApplication(callback?: (err: AWSError, data: QBusiness.Types.GetApplicationResponse) => void): Request<QBusiness.Types.GetApplicationResponse, AWSError>;
  /**
   * Gets information about an chat controls configured for an existing Amazon Q Business application.
   */
  getChatControlsConfiguration(params: QBusiness.Types.GetChatControlsConfigurationRequest, callback?: (err: AWSError, data: QBusiness.Types.GetChatControlsConfigurationResponse) => void): Request<QBusiness.Types.GetChatControlsConfigurationResponse, AWSError>;
  /**
   * Gets information about an chat controls configured for an existing Amazon Q Business application.
   */
  getChatControlsConfiguration(callback?: (err: AWSError, data: QBusiness.Types.GetChatControlsConfigurationResponse) => void): Request<QBusiness.Types.GetChatControlsConfigurationResponse, AWSError>;
  /**
   * Gets information about an existing Amazon Q Business data source connector.
   */
  getDataSource(params: QBusiness.Types.GetDataSourceRequest, callback?: (err: AWSError, data: QBusiness.Types.GetDataSourceResponse) => void): Request<QBusiness.Types.GetDataSourceResponse, AWSError>;
  /**
   * Gets information about an existing Amazon Q Business data source connector.
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
   * Gets information about an existing Amazon Q Business index.
   */
  getIndex(params: QBusiness.Types.GetIndexRequest, callback?: (err: AWSError, data: QBusiness.Types.GetIndexResponse) => void): Request<QBusiness.Types.GetIndexResponse, AWSError>;
  /**
   * Gets information about an existing Amazon Q Business index.
   */
  getIndex(callback?: (err: AWSError, data: QBusiness.Types.GetIndexResponse) => void): Request<QBusiness.Types.GetIndexResponse, AWSError>;
  /**
   * Gets information about an existing Amazon Q Business plugin.
   */
  getPlugin(params: QBusiness.Types.GetPluginRequest, callback?: (err: AWSError, data: QBusiness.Types.GetPluginResponse) => void): Request<QBusiness.Types.GetPluginResponse, AWSError>;
  /**
   * Gets information about an existing Amazon Q Business plugin.
   */
  getPlugin(callback?: (err: AWSError, data: QBusiness.Types.GetPluginResponse) => void): Request<QBusiness.Types.GetPluginResponse, AWSError>;
  /**
   * Gets information about an existing retriever used by an Amazon Q Business application.
   */
  getRetriever(params: QBusiness.Types.GetRetrieverRequest, callback?: (err: AWSError, data: QBusiness.Types.GetRetrieverResponse) => void): Request<QBusiness.Types.GetRetrieverResponse, AWSError>;
  /**
   * Gets information about an existing retriever used by an Amazon Q Business application.
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
   * Gets information about an existing Amazon Q Business web experience.
   */
  getWebExperience(params: QBusiness.Types.GetWebExperienceRequest, callback?: (err: AWSError, data: QBusiness.Types.GetWebExperienceResponse) => void): Request<QBusiness.Types.GetWebExperienceResponse, AWSError>;
  /**
   * Gets information about an existing Amazon Q Business web experience.
   */
  getWebExperience(callback?: (err: AWSError, data: QBusiness.Types.GetWebExperienceResponse) => void): Request<QBusiness.Types.GetWebExperienceResponse, AWSError>;
  /**
   * Lists Amazon Q Business applications.
   */
  listApplications(params: QBusiness.Types.ListApplicationsRequest, callback?: (err: AWSError, data: QBusiness.Types.ListApplicationsResponse) => void): Request<QBusiness.Types.ListApplicationsResponse, AWSError>;
  /**
   * Lists Amazon Q Business applications.
   */
  listApplications(callback?: (err: AWSError, data: QBusiness.Types.ListApplicationsResponse) => void): Request<QBusiness.Types.ListApplicationsResponse, AWSError>;
  /**
   * Lists one or more Amazon Q Business conversations.
   */
  listConversations(params: QBusiness.Types.ListConversationsRequest, callback?: (err: AWSError, data: QBusiness.Types.ListConversationsResponse) => void): Request<QBusiness.Types.ListConversationsResponse, AWSError>;
  /**
   * Lists one or more Amazon Q Business conversations.
   */
  listConversations(callback?: (err: AWSError, data: QBusiness.Types.ListConversationsResponse) => void): Request<QBusiness.Types.ListConversationsResponse, AWSError>;
  /**
   * Get information about an Amazon Q Business data source connector synchronization.
   */
  listDataSourceSyncJobs(params: QBusiness.Types.ListDataSourceSyncJobsRequest, callback?: (err: AWSError, data: QBusiness.Types.ListDataSourceSyncJobsResponse) => void): Request<QBusiness.Types.ListDataSourceSyncJobsResponse, AWSError>;
  /**
   * Get information about an Amazon Q Business data source connector synchronization.
   */
  listDataSourceSyncJobs(callback?: (err: AWSError, data: QBusiness.Types.ListDataSourceSyncJobsResponse) => void): Request<QBusiness.Types.ListDataSourceSyncJobsResponse, AWSError>;
  /**
   * Lists the Amazon Q Business data source connectors that you have created.
   */
  listDataSources(params: QBusiness.Types.ListDataSourcesRequest, callback?: (err: AWSError, data: QBusiness.Types.ListDataSourcesResponse) => void): Request<QBusiness.Types.ListDataSourcesResponse, AWSError>;
  /**
   * Lists the Amazon Q Business data source connectors that you have created.
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
   * Lists the Amazon Q Business indices you have created.
   */
  listIndices(params: QBusiness.Types.ListIndicesRequest, callback?: (err: AWSError, data: QBusiness.Types.ListIndicesResponse) => void): Request<QBusiness.Types.ListIndicesResponse, AWSError>;
  /**
   * Lists the Amazon Q Business indices you have created.
   */
  listIndices(callback?: (err: AWSError, data: QBusiness.Types.ListIndicesResponse) => void): Request<QBusiness.Types.ListIndicesResponse, AWSError>;
  /**
   * Gets a list of messages associated with an Amazon Q Business web experience.
   */
  listMessages(params: QBusiness.Types.ListMessagesRequest, callback?: (err: AWSError, data: QBusiness.Types.ListMessagesResponse) => void): Request<QBusiness.Types.ListMessagesResponse, AWSError>;
  /**
   * Gets a list of messages associated with an Amazon Q Business web experience.
   */
  listMessages(callback?: (err: AWSError, data: QBusiness.Types.ListMessagesResponse) => void): Request<QBusiness.Types.ListMessagesResponse, AWSError>;
  /**
   * Lists configured Amazon Q Business plugins.
   */
  listPlugins(params: QBusiness.Types.ListPluginsRequest, callback?: (err: AWSError, data: QBusiness.Types.ListPluginsResponse) => void): Request<QBusiness.Types.ListPluginsResponse, AWSError>;
  /**
   * Lists configured Amazon Q Business plugins.
   */
  listPlugins(callback?: (err: AWSError, data: QBusiness.Types.ListPluginsResponse) => void): Request<QBusiness.Types.ListPluginsResponse, AWSError>;
  /**
   * Lists the retriever used by an Amazon Q Business application.
   */
  listRetrievers(params: QBusiness.Types.ListRetrieversRequest, callback?: (err: AWSError, data: QBusiness.Types.ListRetrieversResponse) => void): Request<QBusiness.Types.ListRetrieversResponse, AWSError>;
  /**
   * Lists the retriever used by an Amazon Q Business application.
   */
  listRetrievers(callback?: (err: AWSError, data: QBusiness.Types.ListRetrieversResponse) => void): Request<QBusiness.Types.ListRetrieversResponse, AWSError>;
  /**
   * Gets a list of tags associated with a specified resource. Amazon Q Business applications and data sources can have tags associated with them.
   */
  listTagsForResource(params: QBusiness.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: QBusiness.Types.ListTagsForResourceResponse) => void): Request<QBusiness.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Gets a list of tags associated with a specified resource. Amazon Q Business applications and data sources can have tags associated with them.
   */
  listTagsForResource(callback?: (err: AWSError, data: QBusiness.Types.ListTagsForResourceResponse) => void): Request<QBusiness.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists one or more Amazon Q Business Web Experiences.
   */
  listWebExperiences(params: QBusiness.Types.ListWebExperiencesRequest, callback?: (err: AWSError, data: QBusiness.Types.ListWebExperiencesResponse) => void): Request<QBusiness.Types.ListWebExperiencesResponse, AWSError>;
  /**
   * Lists one or more Amazon Q Business Web Experiences.
   */
  listWebExperiences(callback?: (err: AWSError, data: QBusiness.Types.ListWebExperiencesResponse) => void): Request<QBusiness.Types.ListWebExperiencesResponse, AWSError>;
  /**
   * Enables your end user to provide feedback on their Amazon Q Business generated chat responses.
   */
  putFeedback(params: QBusiness.Types.PutFeedbackRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Enables your end user to provide feedback on their Amazon Q Business generated chat responses.
   */
  putFeedback(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Create, or updates, a mapping of users—who have access to a document—to groups. You can also map sub groups to groups. For example, the group "Company Intellectual Property Teams" includes sub groups "Research" and "Engineering". These sub groups include their own list of users or people who work in these teams. Only users who work in research and engineering, and therefore belong in the intellectual property group, can see top-secret company documents in their Amazon Q Business chat results.
   */
  putGroup(params: QBusiness.Types.PutGroupRequest, callback?: (err: AWSError, data: QBusiness.Types.PutGroupResponse) => void): Request<QBusiness.Types.PutGroupResponse, AWSError>;
  /**
   * Create, or updates, a mapping of users—who have access to a document—to groups. You can also map sub groups to groups. For example, the group "Company Intellectual Property Teams" includes sub groups "Research" and "Engineering". These sub groups include their own list of users or people who work in these teams. Only users who work in research and engineering, and therefore belong in the intellectual property group, can see top-secret company documents in their Amazon Q Business chat results.
   */
  putGroup(callback?: (err: AWSError, data: QBusiness.Types.PutGroupResponse) => void): Request<QBusiness.Types.PutGroupResponse, AWSError>;
  /**
   * Starts a data source connector synchronization job. If a synchronization job is already in progress, Amazon Q Business returns a ConflictException.
   */
  startDataSourceSyncJob(params: QBusiness.Types.StartDataSourceSyncJobRequest, callback?: (err: AWSError, data: QBusiness.Types.StartDataSourceSyncJobResponse) => void): Request<QBusiness.Types.StartDataSourceSyncJobResponse, AWSError>;
  /**
   * Starts a data source connector synchronization job. If a synchronization job is already in progress, Amazon Q Business returns a ConflictException.
   */
  startDataSourceSyncJob(callback?: (err: AWSError, data: QBusiness.Types.StartDataSourceSyncJobResponse) => void): Request<QBusiness.Types.StartDataSourceSyncJobResponse, AWSError>;
  /**
   * Stops an Amazon Q Business data source connector synchronization job already in progress.
   */
  stopDataSourceSyncJob(params: QBusiness.Types.StopDataSourceSyncJobRequest, callback?: (err: AWSError, data: QBusiness.Types.StopDataSourceSyncJobResponse) => void): Request<QBusiness.Types.StopDataSourceSyncJobResponse, AWSError>;
  /**
   * Stops an Amazon Q Business data source connector synchronization job already in progress.
   */
  stopDataSourceSyncJob(callback?: (err: AWSError, data: QBusiness.Types.StopDataSourceSyncJobResponse) => void): Request<QBusiness.Types.StopDataSourceSyncJobResponse, AWSError>;
  /**
   * Adds the specified tag to the specified Amazon Q Business application or data source resource. If the tag already exists, the existing value is replaced with the new value.
   */
  tagResource(params: QBusiness.Types.TagResourceRequest, callback?: (err: AWSError, data: QBusiness.Types.TagResourceResponse) => void): Request<QBusiness.Types.TagResourceResponse, AWSError>;
  /**
   * Adds the specified tag to the specified Amazon Q Business application or data source resource. If the tag already exists, the existing value is replaced with the new value.
   */
  tagResource(callback?: (err: AWSError, data: QBusiness.Types.TagResourceResponse) => void): Request<QBusiness.Types.TagResourceResponse, AWSError>;
  /**
   * Removes a tag from an Amazon Q Business application or a data source.
   */
  untagResource(params: QBusiness.Types.UntagResourceRequest, callback?: (err: AWSError, data: QBusiness.Types.UntagResourceResponse) => void): Request<QBusiness.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes a tag from an Amazon Q Business application or a data source.
   */
  untagResource(callback?: (err: AWSError, data: QBusiness.Types.UntagResourceResponse) => void): Request<QBusiness.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates an existing Amazon Q Business application.
   */
  updateApplication(params: QBusiness.Types.UpdateApplicationRequest, callback?: (err: AWSError, data: QBusiness.Types.UpdateApplicationResponse) => void): Request<QBusiness.Types.UpdateApplicationResponse, AWSError>;
  /**
   * Updates an existing Amazon Q Business application.
   */
  updateApplication(callback?: (err: AWSError, data: QBusiness.Types.UpdateApplicationResponse) => void): Request<QBusiness.Types.UpdateApplicationResponse, AWSError>;
  /**
   * Updates an set of chat controls configured for an existing Amazon Q Business application.
   */
  updateChatControlsConfiguration(params: QBusiness.Types.UpdateChatControlsConfigurationRequest, callback?: (err: AWSError, data: QBusiness.Types.UpdateChatControlsConfigurationResponse) => void): Request<QBusiness.Types.UpdateChatControlsConfigurationResponse, AWSError>;
  /**
   * Updates an set of chat controls configured for an existing Amazon Q Business application.
   */
  updateChatControlsConfiguration(callback?: (err: AWSError, data: QBusiness.Types.UpdateChatControlsConfigurationResponse) => void): Request<QBusiness.Types.UpdateChatControlsConfigurationResponse, AWSError>;
  /**
   * Updates an existing Amazon Q Business data source connector.
   */
  updateDataSource(params: QBusiness.Types.UpdateDataSourceRequest, callback?: (err: AWSError, data: QBusiness.Types.UpdateDataSourceResponse) => void): Request<QBusiness.Types.UpdateDataSourceResponse, AWSError>;
  /**
   * Updates an existing Amazon Q Business data source connector.
   */
  updateDataSource(callback?: (err: AWSError, data: QBusiness.Types.UpdateDataSourceResponse) => void): Request<QBusiness.Types.UpdateDataSourceResponse, AWSError>;
  /**
   * Updates an Amazon Q Business index.
   */
  updateIndex(params: QBusiness.Types.UpdateIndexRequest, callback?: (err: AWSError, data: QBusiness.Types.UpdateIndexResponse) => void): Request<QBusiness.Types.UpdateIndexResponse, AWSError>;
  /**
   * Updates an Amazon Q Business index.
   */
  updateIndex(callback?: (err: AWSError, data: QBusiness.Types.UpdateIndexResponse) => void): Request<QBusiness.Types.UpdateIndexResponse, AWSError>;
  /**
   * Updates an Amazon Q Business plugin.
   */
  updatePlugin(params: QBusiness.Types.UpdatePluginRequest, callback?: (err: AWSError, data: QBusiness.Types.UpdatePluginResponse) => void): Request<QBusiness.Types.UpdatePluginResponse, AWSError>;
  /**
   * Updates an Amazon Q Business plugin.
   */
  updatePlugin(callback?: (err: AWSError, data: QBusiness.Types.UpdatePluginResponse) => void): Request<QBusiness.Types.UpdatePluginResponse, AWSError>;
  /**
   * Updates the retriever used for your Amazon Q Business application.
   */
  updateRetriever(params: QBusiness.Types.UpdateRetrieverRequest, callback?: (err: AWSError, data: QBusiness.Types.UpdateRetrieverResponse) => void): Request<QBusiness.Types.UpdateRetrieverResponse, AWSError>;
  /**
   * Updates the retriever used for your Amazon Q Business application.
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
   * Updates an Amazon Q Business web experience. 
   */
  updateWebExperience(params: QBusiness.Types.UpdateWebExperienceRequest, callback?: (err: AWSError, data: QBusiness.Types.UpdateWebExperienceResponse) => void): Request<QBusiness.Types.UpdateWebExperienceResponse, AWSError>;
  /**
   * Updates an Amazon Q Business web experience. 
   */
  updateWebExperience(callback?: (err: AWSError, data: QBusiness.Types.UpdateWebExperienceResponse) => void): Request<QBusiness.Types.UpdateWebExperienceResponse, AWSError>;
}
declare namespace QBusiness {
  export interface APISchema {
    /**
     * The JSON or YAML-formatted payload defining the OpenAPI schema for a custom plugin. 
     */
    payload?: Payload;
    /**
     * Contains details about the S3 object containing the OpenAPI schema for a custom plugin. The schema could be in either JSON or YAML format.
     */
    s3?: S3;
  }
  export type APISchemaType = "OPEN_API_V3"|string;
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
     * Contains a list of principals, where a principal can be either a USER or a GROUP. Each principal can be have the following type of document access: ALLOW or DENY.
     */
    principals: Principals;
    /**
     * Describes the member relation within a principal list.
     */
    memberRelation?: MemberRelation;
  }
  export type AccessControls = AccessControl[];
  export interface ActionExecution {
    /**
     * The identifier of the plugin the action is attached to.
     */
    pluginId: PluginId;
    /**
     * A mapping of field names to the field values in input that an end user provides to Amazon Q Business requests to perform their plugin action. 
     */
    payload: ActionExecutionPayload;
    /**
     * A string used to retain information about the hierarchical contexts within an action execution event payload.
     */
    payloadFieldNameSeparator: ActionPayloadFieldNameSeparator;
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
     * The identifier of the plugin associated with the action review.
     */
    pluginId?: PluginId;
    /**
     * The type of plugin.
     */
    pluginType?: PluginType;
    /**
     * Field values that an end user needs to provide to Amazon Q Business for Amazon Q Business to perform the requested plugin action.
     */
    payload?: ActionReviewPayload;
    /**
     * A string used to retain information about the hierarchical contexts within an action review payload.
     */
    payloadFieldNameSeparator?: ActionPayloadFieldNameSeparator;
  }
  export type ActionReviewPayload = {[key: string]: ActionReviewPayloadField};
  export interface ActionReviewPayloadField {
    /**
     *  The name of the field. 
     */
    displayName?: String;
    /**
     * The display order of fields in a payload.
     */
    displayOrder?: Integer;
    /**
     * The field level description of each action review input field. This could be an explanation of the field. In the Amazon Q Business web experience, these descriptions could be used to display as tool tips to help users understand the field. 
     */
    displayDescription?: String;
    /**
     * The type of field. 
     */
    type?: ActionPayloadFieldType;
    /**
     * The field value.
     */
    value?: ActionPayloadFieldValue;
    /**
     * Information about the field values that an end user can use to provide to Amazon Q Business for Amazon Q Business to perform the requested plugin action.
     */
    allowedValues?: ActionReviewPayloadFieldAllowedValues;
    /**
     * The expected data format for the action review input field value. For example, in PTO request, from and to would be of datetime allowed format. 
     */
    allowedFormat?: String;
    /**
     * Information about whether the field is required.
     */
    required?: Boolean;
  }
  export interface ActionReviewPayloadFieldAllowedValue {
    /**
     * The field value.
     */
    value?: ActionPayloadFieldValue;
    /**
     * The name of the field.
     */
    displayValue?: ActionPayloadFieldValue;
  }
  export type ActionReviewPayloadFieldAllowedValues = ActionReviewPayloadFieldAllowedValue[];
  export type AmazonResourceName = string;
  export interface Application {
    /**
     * The name of the Amazon Q Business application.
     */
    displayName?: ApplicationName;
    /**
     * The identifier for the Amazon Q Business application.
     */
    applicationId?: ApplicationId;
    /**
     * The Unix timestamp when the Amazon Q Business application was created.
     */
    createdAt?: Timestamp;
    /**
     * The Unix timestamp when the Amazon Q Business application was last updated. 
     */
    updatedAt?: Timestamp;
    /**
     * The status of the Amazon Q Business application. The application is ready to use when the status is ACTIVE.
     */
    status?: ApplicationStatus;
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
  export interface AppliedCreatorModeConfiguration {
    /**
     *  Information about whether creator mode is enabled or disabled for an Amazon Q Business application. 
     */
    creatorModeControl: CreatorModeControl;
  }
  export interface AttachmentInput {
    /**
     * The name of the file.
     */
    name: AttachmentName;
    /**
     * The data contained within the uploaded file.
     */
    data: _Blob;
  }
  export type AttachmentName = string;
  export interface AttachmentOutput {
    /**
     * The name of a file uploaded during chat.
     */
    name?: AttachmentName;
    /**
     * The status of a file uploaded during chat.
     */
    status?: AttachmentStatus;
    /**
     * An error associated with a file uploaded during chat.
     */
    error?: ErrorDetail;
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
     *  Performs a logical OR operation on all supplied filters. 
     */
    orAllFilters?: AttributeFilters;
    /**
     * Performs a logical NOT operation on all supplied filters. 
     */
    notFilter?: AttributeFilter;
    /**
     * Performs an equals operation on two document attributes or metadata fields. Supported for the following document attribute value types: dateValue, longValue, stringListValue and stringValue.
     */
    equalsTo?: DocumentAttribute;
    /**
     * Returns true when a document contains all the specified document attributes or metadata fields. Supported for the following document attribute value types: stringListValue.
     */
    containsAll?: DocumentAttribute;
    /**
     * Returns true when a document contains any of the specified document attributes or metadata fields. Supported for the following document attribute value types: stringListValue.
     */
    containsAny?: DocumentAttribute;
    /**
     * Performs a greater than operation on two document attributes or metadata fields. Supported for the following document attribute value types: dateValue and longValue.
     */
    greaterThan?: DocumentAttribute;
    /**
     * Performs a greater or equals than operation on two document attributes or metadata fields. Supported for the following document attribute value types: dateValue and longValue. 
     */
    greaterThanOrEquals?: DocumentAttribute;
    /**
     * Performs a less than operation on two document attributes or metadata fields. Supported for the following document attribute value types: dateValue and longValue.
     */
    lessThan?: DocumentAttribute;
    /**
     * Performs a less than or equals operation on two document attributes or metadata fields.Supported for the following document attribute value type: dateValue and longValue. 
     */
    lessThanOrEquals?: DocumentAttribute;
  }
  export type AttributeFilters = AttributeFilter[];
  export type AttributeType = "STRING"|"STRING_LIST"|"NUMBER"|"DATE"|string;
  export type AttributeValueOperator = "DELETE"|string;
  export interface AuthChallengeRequest {
    /**
     * The URL sent by Amazon Q Business to the third party authentication server to authenticate a custom plugin user through an OAuth protocol.
     */
    authorizationUrl: Url;
  }
  export interface AuthChallengeResponse {
    /**
     * The mapping of key-value pairs in an authentication challenge response.
     */
    responseMap: AuthorizationResponseMap;
  }
  export type AuthResponseKey = string;
  export type AuthResponseValue = string;
  export type AuthorizationResponseMap = {[key: string]: AuthResponseValue};
  export interface BasicAuthConfiguration {
    /**
     * The ARN of the Secrets Manager secret that stores the basic authentication credentials used for plugin configuration..
     */
    secretArn: SecretArn;
    /**
     * The ARN of an IAM role used by Amazon Q Business to access the basic authentication credentials stored in a Secrets Manager secret.
     */
    roleArn: RoleArn;
  }
  export interface BatchDeleteDocumentRequest {
    /**
     * The identifier of the Amazon Q Business application.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the Amazon Q Business index that contains the documents to delete.
     */
    indexId: IndexId;
    /**
     * Documents deleted from the Amazon Q Business index.
     */
    documents: DeleteDocuments;
    /**
     * The identifier of the data source sync during which the documents were deleted.
     */
    dataSourceSyncId?: ExecutionId;
  }
  export interface BatchDeleteDocumentResponse {
    /**
     * A list of documents that couldn't be removed from the Amazon Q Business index. Each entry contains an error message that indicates why the document couldn't be removed from the index. 
     */
    failedDocuments?: FailedDocuments;
  }
  export interface BatchPutDocumentRequest {
    /**
     * The identifier of the Amazon Q Business application.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the Amazon Q Business index to add the documents to. 
     */
    indexId: IndexId;
    /**
     * One or more documents to add to the index.
     */
    documents: Documents;
    /**
     * The Amazon Resource Name (ARN) of an IAM role with permission to access your S3 bucket.
     */
    roleArn?: RoleArn;
    /**
     * The identifier of the data source sync during which the documents were added.
     */
    dataSourceSyncId?: ExecutionId;
  }
  export interface BatchPutDocumentResponse {
    /**
     *  A list of documents that were not added to the Amazon Q Business index because the document failed a validation check. Each document contains an error message that indicates why the document couldn't be added to the index. 
     */
    failedDocuments?: FailedDocuments;
  }
  export type _Blob = Buffer|Uint8Array|Blob|string;
  export type BlockedPhrase = string;
  export type BlockedPhrases = BlockedPhrase[];
  export interface BlockedPhrasesConfiguration {
    /**
     * A list of phrases blocked from a Amazon Q Business web experience chat.
     */
    blockedPhrases?: BlockedPhrases;
    /**
     * The configured custom message displayed to an end user informing them that they've used a blocked phrase during chat.
     */
    systemMessageOverride?: SystemMessageOverride;
  }
  export interface BlockedPhrasesConfigurationUpdate {
    /**
     * Creates or updates a blocked phrases configuration in your Amazon Q Business application.
     */
    blockedPhrasesToCreateOrUpdate?: BlockedPhrases;
    /**
     * Deletes a blocked phrases configuration in your Amazon Q Business application.
     */
    blockedPhrasesToDelete?: BlockedPhrases;
    /**
     * The configured custom message displayed to your end user when they use blocked phrase during chat.
     */
    systemMessageOverride?: SystemMessageOverride;
  }
  export type Boolean = boolean;
  export type BoostingDurationInSeconds = number;
  export type ChatMode = "RETRIEVAL_MODE"|"CREATOR_MODE"|"PLUGIN_MODE"|string;
  export interface ChatModeConfiguration {
    /**
     * Configuration information required to invoke chat in PLUGIN_MODE.
     */
    pluginConfiguration?: PluginConfiguration;
  }
  export interface ChatSyncInput {
    /**
     * The identifier of the Amazon Q Business application linked to the Amazon Q Business conversation.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the user attached to the chat input.
     */
    userId?: UserId;
    /**
     * The groups that a user associated with the chat input belongs to.
     */
    userGroups?: UserGroups;
    /**
     * A end user message in a conversation.
     */
    userMessage?: UserMessage;
    /**
     * A list of files uploaded directly during chat. You can upload a maximum of 5 files of upto 10 MB each.
     */
    attachments?: AttachmentsInput;
    /**
     * A request from an end user to perform an Amazon Q Business plugin action.
     */
    actionExecution?: ActionExecution;
    /**
     * An authentication verification event response by a third party authentication server to Amazon Q Business.
     */
    authChallengeResponse?: AuthChallengeResponse;
    /**
     * The identifier of the Amazon Q Business conversation.
     */
    conversationId?: ConversationId;
    /**
     * The identifier of the previous system message in a conversation.
     */
    parentMessageId?: MessageId;
    /**
     * Enables filtering of Amazon Q Business web experience responses based on document attributes or metadata fields.
     */
    attributeFilter?: AttributeFilter;
    /**
     * The chat modes available to an Amazon Q Business end user.    RETRIEVAL_MODE - The default chat mode for an Amazon Q Business application. When this mode is enabled, Amazon Q Business generates responses only from data sources connected to an Amazon Q Business application.    CREATOR_MODE - By selecting this mode, users can choose to generate responses only from the LLM knowledge, without consulting connected data sources, for a chat request.    PLUGIN_MODE - By selecting this mode, users can choose to use plugins in chat.   For more information, see Admin controls and guardrails, Plugins, and Conversation settings.
     */
    chatMode?: ChatMode;
    /**
     * The chat mode configuration for an Amazon Q Business application.
     */
    chatModeConfiguration?: ChatModeConfiguration;
    /**
     * A token that you provide to identify a chat request.
     */
    clientToken?: ClientToken;
  }
  export interface ChatSyncOutput {
    /**
     * The identifier of the Amazon Q Business conversation.
     */
    conversationId?: ConversationId;
    /**
     * An AI-generated message in a conversation.
     */
    systemMessage?: String;
    /**
     * The identifier of an Amazon Q Business AI generated message within the conversation.
     */
    systemMessageId?: MessageId;
    /**
     * The identifier of an Amazon Q Business end user text input message within the conversation.
     */
    userMessageId?: MessageId;
    /**
     * A request from Amazon Q Business to the end user for information Amazon Q Business needs to successfully complete a requested plugin action.
     */
    actionReview?: ActionReview;
    /**
     * An authentication verification event activated by an end user request to use a custom plugin.
     */
    authChallengeRequest?: AuthChallengeRequest;
    /**
     * The source documents used to generate the conversation response.
     */
    sourceAttributions?: SourceAttributions;
    /**
     * A list of files which failed to upload during chat.
     */
    failedAttachments?: AttachmentsOutput;
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
     * Specifies data sources in a Amazon Q Business application to use for content generation.
     */
    eligibleDataSources?: EligibleDataSources;
  }
  export type ContentType = "PDF"|"HTML"|"MS_WORD"|"PLAIN_TEXT"|"PPT"|"RTF"|"XML"|"XSLT"|"MS_EXCEL"|"CSV"|"JSON"|"MD"|string;
  export interface Conversation {
    /**
     * The identifier of the Amazon Q Business conversation.
     */
    conversationId?: ConversationId;
    /**
     * The title of the conversation.
     */
    title?: ConversationTitle;
    /**
     * The start time of the conversation.
     */
    startTime?: Timestamp;
  }
  export type ConversationId = string;
  export type ConversationTitle = string;
  export type Conversations = Conversation[];
  export interface CreateApplicationRequest {
    /**
     * A name for the Amazon Q Business application. 
     */
    displayName: ApplicationName;
    /**
     *  The Amazon Resource Name (ARN) of an IAM role with permissions to access your Amazon CloudWatch logs and metrics.
     */
    roleArn?: RoleArn;
    /**
     *  The Amazon Resource Name (ARN) of the IAM Identity Center instance you are either creating for—or connecting to—your Amazon Q Business application.
     */
    identityCenterInstanceArn?: InstanceArn;
    /**
     * A description for the Amazon Q Business application. 
     */
    description?: Description;
    /**
     * The identifier of the KMS key that is used to encrypt your data. Amazon Q Business doesn't support asymmetric keys.
     */
    encryptionConfiguration?: EncryptionConfiguration;
    /**
     * A list of key-value pairs that identify or categorize your Amazon Q Business application. You can also use tags to help control access to the application. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.
     */
    tags?: Tags;
    /**
     * A token that you provide to identify the request to create your Amazon Q Business application.
     */
    clientToken?: ClientToken;
    /**
     * An option to allow end users to upload files directly during chat.
     */
    attachmentsConfiguration?: AttachmentsConfiguration;
    /**
     * An option to allow end users to create and use Amazon Q Apps in the web experience.
     */
    qAppsConfiguration?: QAppsConfiguration;
    /**
     * Configuration information about chat response personalization. For more information, see Personalizing chat responses 
     */
    personalizationConfiguration?: PersonalizationConfiguration;
  }
  export interface CreateApplicationResponse {
    /**
     * The identifier of the Amazon Q Business application.
     */
    applicationId?: ApplicationId;
    /**
     *  The Amazon Resource Name (ARN) of the Amazon Q Business application. 
     */
    applicationArn?: ApplicationArn;
  }
  export interface CreateDataSourceRequest {
    /**
     *  The identifier of the Amazon Q Business application the data source will be attached to.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the index that you want to use with the data source connector.
     */
    indexId: IndexId;
    /**
     * A name for the data source connector.
     */
    displayName: DataSourceName;
    /**
     * Configuration information to connect to your data source repository. For configuration templates for your specific data source, see Supported connectors.
     */
    configuration: DataSourceConfiguration;
    /**
     * Configuration information for an Amazon VPC (Virtual Private Cloud) to connect to your data source. For more information, see Using Amazon VPC with Amazon Q Business connectors.
     */
    vpcConfiguration?: DataSourceVpcConfiguration;
    /**
     * A description for the data source connector.
     */
    description?: Description;
    /**
     * A list of key-value pairs that identify or categorize the data source connector. You can also use tags to help control access to the data source connector. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.
     */
    tags?: Tags;
    /**
     * Sets the frequency for Amazon Q Business to check the documents in your data source repository and update your index. If you don't set a schedule, Amazon Q Business won't periodically update the index. Specify a cron- format schedule string or an empty string to indicate that the index is updated on demand. You can't specify the Schedule parameter when the Type parameter is set to CUSTOM. If you do, you receive a ValidationException exception. 
     */
    syncSchedule?: SyncSchedule;
    /**
     * The Amazon Resource Name (ARN) of an IAM role with permission to access the data source and required resources.
     */
    roleArn?: RoleArn;
    /**
     * A token you provide to identify a request to create a data source connector. Multiple calls to the CreateDataSource API with the same client token will create only one data source connector. 
     */
    clientToken?: ClientToken;
    documentEnrichmentConfiguration?: DocumentEnrichmentConfiguration;
  }
  export interface CreateDataSourceResponse {
    /**
     * The identifier of the data source connector.
     */
    dataSourceId?: DataSourceId;
    /**
     *  The Amazon Resource Name (ARN) of a data source in an Amazon Q Business application. 
     */
    dataSourceArn?: DataSourceArn;
  }
  export interface CreateIndexRequest {
    /**
     * The identifier of the Amazon Q Business application using the index.
     */
    applicationId: ApplicationId;
    /**
     * A name for the Amazon Q Business index.
     */
    displayName: IndexName;
    /**
     * The index type that's suitable for your needs. For more information on what's included in each type of index, see Amazon Q Business tiers.
     */
    type?: IndexType;
    /**
     * A description for the Amazon Q Business index.
     */
    description?: Description;
    /**
     * A list of key-value pairs that identify or categorize the index. You can also use tags to help control access to the index. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.
     */
    tags?: Tags;
    /**
     * The capacity units you want to provision for your index. You can add and remove capacity to fit your usage needs.
     */
    capacityConfiguration?: IndexCapacityConfiguration;
    /**
     * A token that you provide to identify the request to create an index. Multiple calls to the CreateIndex API with the same client token will create only one index.
     */
    clientToken?: ClientToken;
  }
  export interface CreateIndexResponse {
    /**
     * The identifier for the Amazon Q Business index.
     */
    indexId?: IndexId;
    /**
     *  The Amazon Resource Name (ARN) of an Amazon Q Business index.
     */
    indexArn?: IndexArn;
  }
  export interface CreatePluginRequest {
    /**
     * The identifier of the application that will contain the plugin.
     */
    applicationId: ApplicationId;
    /**
     * A the name for your plugin.
     */
    displayName: PluginName;
    /**
     * The type of plugin you want to create.
     */
    type: PluginType;
    authConfiguration: PluginAuthConfiguration;
    /**
     * The source URL used for plugin configuration.
     */
    serverUrl?: Url;
    /**
     * Contains configuration for a custom plugin.
     */
    customPluginConfiguration?: CustomPluginConfiguration;
    /**
     * A list of key-value pairs that identify or categorize the data source connector. You can also use tags to help control access to the data source connector. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.
     */
    tags?: Tags;
    /**
     * A token that you provide to identify the request to create your Amazon Q Business plugin.
     */
    clientToken?: ClientToken;
  }
  export interface CreatePluginResponse {
    /**
     * The identifier of the plugin created.
     */
    pluginId?: PluginId;
    /**
     * The Amazon Resource Name (ARN) of a plugin.
     */
    pluginArn?: PluginArn;
    /**
     * The current status of a plugin. A plugin is modified asynchronously.
     */
    buildStatus?: PluginBuildStatus;
  }
  export interface CreateRetrieverRequest {
    /**
     * The identifier of your Amazon Q Business application.
     */
    applicationId: ApplicationId;
    /**
     * The type of retriever you are using.
     */
    type: RetrieverType;
    /**
     * The name of your retriever.
     */
    displayName: RetrieverName;
    configuration: RetrieverConfiguration;
    /**
     * The ARN of an IAM role used by Amazon Q Business to access the basic authentication credentials stored in a Secrets Manager secret.
     */
    roleArn?: RoleArn;
    /**
     * A token that you provide to identify the request to create your Amazon Q Business application retriever.
     */
    clientToken?: ClientToken;
    /**
     * A list of key-value pairs that identify or categorize the retriever. You can also use tags to help control access to the retriever. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.
     */
    tags?: Tags;
  }
  export interface CreateRetrieverResponse {
    /**
     * The identifier of the retriever you are using.
     */
    retrieverId?: RetrieverId;
    /**
     * The Amazon Resource Name (ARN) of an IAM role associated with a retriever.
     */
    retrieverArn?: RetrieverArn;
  }
  export interface CreateUserRequest {
    /**
     * The identifier of the application for which the user mapping will be created.
     */
    applicationId: ApplicationId;
    /**
     * The user emails attached to a user mapping.
     */
    userId: String;
    /**
     * The list of user aliases in the mapping.
     */
    userAliases?: CreateUserRequestUserAliasesList;
    /**
     * A token that you provide to identify the request to create your Amazon Q Business user mapping.
     */
    clientToken?: ClientToken;
  }
  export type CreateUserRequestUserAliasesList = UserAlias[];
  export interface CreateUserResponse {
  }
  export interface CreateWebExperienceRequest {
    /**
     * The identifier of the Amazon Q Business web experience.
     */
    applicationId: ApplicationId;
    /**
     * The title for your Amazon Q Business web experience.
     */
    title?: WebExperienceTitle;
    /**
     * A subtitle to personalize your Amazon Q Business web experience.
     */
    subtitle?: WebExperienceSubtitle;
    /**
     * The customized welcome message for end users of an Amazon Q Business web experience.
     */
    welcomeMessage?: WebExperienceWelcomeMessage;
    /**
     * Determines whether sample prompts are enabled in the web experience for an end user.
     */
    samplePromptsControlMode?: WebExperienceSamplePromptsControlMode;
    /**
     * The Amazon Resource Name (ARN) of the service role attached to your web experience.
     */
    roleArn?: RoleArn;
    /**
     * A list of key-value pairs that identify or categorize your Amazon Q Business web experience. You can also use tags to help control access to the web experience. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.
     */
    tags?: Tags;
    /**
     * A token you provide to identify a request to create an Amazon Q Business web experience. 
     */
    clientToken?: ClientToken;
  }
  export interface CreateWebExperienceResponse {
    /**
     * The identifier of the Amazon Q Business web experience.
     */
    webExperienceId?: WebExperienceId;
    /**
     *  The Amazon Resource Name (ARN) of an Amazon Q Business web experience.
     */
    webExperienceArn?: WebExperienceArn;
  }
  export interface CreatorModeConfiguration {
    /**
     * Status information about whether CREATOR_MODE has been enabled or disabled. The default status is DISABLED.
     */
    creatorModeControl: CreatorModeControl;
  }
  export type CreatorModeControl = "ENABLED"|"DISABLED"|string;
  export interface CustomPluginConfiguration {
    /**
     * A description for your custom plugin configuration.
     */
    description: PluginDescription;
    /**
     * The type of OpenAPI schema to use.
     */
    apiSchemaType: APISchemaType;
    /**
     * Contains either details about the S3 object containing the OpenAPI schema for the action group or the JSON or YAML-formatted payload defining the schema.
     */
    apiSchema: APISchema;
  }
  export interface DataSource {
    /**
     * The name of the Amazon Q Business data source.
     */
    displayName?: DataSourceName;
    /**
     * The identifier of the Amazon Q Business data source.
     */
    dataSourceId?: DataSourceId;
    /**
     * The type of the Amazon Q Business data source.
     */
    type?: String;
    /**
     * The Unix timestamp when the Amazon Q Business data source was created.
     */
    createdAt?: Timestamp;
    /**
     * The Unix timestamp when the Amazon Q Business data source was last updated. 
     */
    updatedAt?: Timestamp;
    /**
     * The status of the Amazon Q Business data source.
     */
    status?: DataSourceStatus;
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
     * The identifier of a data source synchronization job.
     */
    executionId?: ExecutionId;
    /**
     * The Unix time stamp when the data source synchronization job started.
     */
    startTime?: Timestamp;
    /**
     * The Unix timestamp when the synchronization job completed.
     */
    endTime?: Timestamp;
    /**
     * The status of the synchronization job. When the Status field is set to SUCCEEDED, the synchronization job is done. If the status code is FAILED, the ErrorCode and ErrorMessage fields give you the reason for the failure.
     */
    status?: DataSourceSyncJobStatus;
    /**
     * If the Status field is set to FAILED, the ErrorCode field indicates the reason the synchronization failed. 
     */
    error?: ErrorDetail;
    /**
     * If the reason that the synchronization failed is due to an error with the underlying data source, this field contains a code that identifies the error.
     */
    dataSourceErrorCode?: String;
    /**
     * Maps a batch delete document request to a specific data source sync job. This is optional and should only be supplied when documents are deleted by a data source connector.
     */
    metrics?: DataSourceSyncJobMetrics;
  }
  export interface DataSourceSyncJobMetrics {
    /**
     * The current count of documents added from the data source during the data source sync.
     */
    documentsAdded?: MetricValue;
    /**
     * The current count of documents modified in the data source during the data source sync.
     */
    documentsModified?: MetricValue;
    /**
     * The current count of documents deleted from the data source during the data source sync.
     */
    documentsDeleted?: MetricValue;
    /**
     * The current count of documents that failed to sync from the data source during the data source sync.
     */
    documentsFailed?: MetricValue;
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
     * A list of identifiers for subnets within your Amazon VPC. The subnets should be able to connect to each other in the VPC, and they should have outgoing access to the Internet through a NAT device.
     */
    subnetIds: SubnetIds;
    /**
     * A list of identifiers of security groups within your Amazon VPC. The security groups should enable Amazon Q Business to connect to the data source.
     */
    securityGroupIds: SecurityGroupIds;
  }
  export type DataSources = DataSource[];
  export interface DateAttributeBoostingConfiguration {
    /**
     * Specifies how much a document attribute is boosted.
     */
    boostingLevel: DocumentAttributeBoostingLevel;
    /**
     * Specifies the duration, in seconds, of a boost applies to a DATE type document attribute.
     */
    boostingDurationInSeconds?: BoostingDurationInSeconds;
  }
  export interface DeleteApplicationRequest {
    /**
     * The identifier of the Amazon Q Business application.
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
     * The identifier of the Amazon Q Business web experience conversation being deleted.
     */
    conversationId: ConversationId;
    /**
     * The identifier of the Amazon Q Business application associated with the conversation.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the user who is deleting the conversation.
     */
    userId?: UserId;
  }
  export interface DeleteConversationResponse {
  }
  export interface DeleteDataSourceRequest {
    /**
     * The identifier of the Amazon Q Business application used with the data source connector.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the index used with the data source connector.
     */
    indexId: IndexId;
    /**
     * The identifier of the data source connector that you want to delete. 
     */
    dataSourceId: DataSourceId;
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
     * The identifier of the index you want to delete the group from.
     */
    indexId: IndexId;
    /**
     * The name of the group you want to delete.
     */
    groupName: GroupName;
    /**
     * The identifier of the data source linked to the group A group can be tied to multiple data sources. You can delete a group from accessing documents in a certain data source. For example, the groups "Research", "Engineering", and "Sales and Marketing" are all tied to the company's documents stored in the data sources Confluence and Salesforce. You want to delete "Research" and "Engineering" groups from Salesforce, so that these groups cannot access customer-related documents stored in Salesforce. Only "Sales and Marketing" should access documents in the Salesforce data source.
     */
    dataSourceId?: DataSourceId;
  }
  export interface DeleteGroupResponse {
  }
  export interface DeleteIndexRequest {
    /**
     * The identifier of the Amazon Q Business application the Amazon Q Business index is linked to.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the Amazon Q Business index.
     */
    indexId: IndexId;
  }
  export interface DeleteIndexResponse {
  }
  export interface DeletePluginRequest {
    /**
     * The identifier the application attached to the Amazon Q Business plugin.
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
     * The identifier of the Amazon Q Business application using the retriever.
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
     * The identifier of the Amazon Q Business application linked to the Amazon Q Business web experience.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the Amazon Q Business web experience being deleted.
     */
    webExperienceId: WebExperienceId;
  }
  export interface DeleteWebExperienceResponse {
  }
  export type Description = string;
  export interface Document {
    /**
     * The identifier of the document.
     */
    id: DocumentId;
    /**
     * Custom attributes to apply to the document for refining Amazon Q Business web experience responses.
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
     * The title of the document.
     */
    title?: Title;
    /**
     * Configuration information for access permission to a document.
     */
    accessConfiguration?: AccessConfiguration;
    /**
     * The configuration information for altering document metadata and content during the document ingestion process.
     */
    documentEnrichmentConfiguration?: DocumentEnrichmentConfiguration;
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
  export interface DocumentAttributeBoostingConfiguration {
    /**
     * Provides information on boosting NUMBER type document attributes.
     */
    numberConfiguration?: NumberAttributeBoostingConfiguration;
    /**
     * Provides information on boosting STRING type document attributes.
     */
    stringConfiguration?: StringAttributeBoostingConfiguration;
    /**
     * Provides information on boosting DATE type document attributes.
     */
    dateConfiguration?: DateAttributeBoostingConfiguration;
    /**
     * Provides information on boosting STRING_LIST type document attributes.
     */
    stringListConfiguration?: StringListAttributeBoostingConfiguration;
  }
  export type DocumentAttributeBoostingLevel = "NONE"|"LOW"|"MEDIUM"|"HIGH"|"VERY_HIGH"|string;
  export type DocumentAttributeBoostingOverrideMap = {[key: string]: DocumentAttributeBoostingConfiguration};
  export interface DocumentAttributeCondition {
    /**
     * The identifier of the document attribute used for the condition. For example, 'Source_URI' could be an identifier for the attribute or metadata field that contains source URIs associated with the documents. Amazon Q Business currently doesn't support _document_body as an attribute key used for the condition.
     */
    key: DocumentAttributeKey;
    /**
     * The identifier of the document attribute used for the condition. For example, 'Source_URI' could be an identifier for the attribute or metadata field that contains source URIs associated with the documents. Amazon Q Business currently does not support _document_body as an attribute key used for the condition.
     */
    operator: DocumentEnrichmentConditionOperator;
    value?: DocumentAttributeValue;
  }
  export interface DocumentAttributeConfiguration {
    /**
     * The name of the document attribute.
     */
    name?: DocumentMetadataConfigurationName;
    /**
     * The type of document attribute.
     */
    type?: AttributeType;
    /**
     * Information about whether the document attribute can be used by an end user to search for information on their web experience.
     */
    search?: Status;
  }
  export type DocumentAttributeConfigurations = DocumentAttributeConfiguration[];
  export type DocumentAttributeKey = string;
  export type DocumentAttributeStringListValue = String[];
  export interface DocumentAttributeTarget {
    /**
     * The identifier of the target document attribute or metadata field. For example, 'Department' could be an identifier for the target attribute or metadata field that includes the department names associated with the documents.
     */
    key: DocumentAttributeKey;
    value?: DocumentAttributeValue;
    /**
     *  TRUE to delete the existing target value for your specified target attribute key. You cannot create a target value and set this to TRUE.
     */
    attributeValueOperator?: AttributeValueOperator;
  }
  export interface DocumentAttributeValue {
    /**
     * A string.
     */
    stringValue?: DocumentAttributeValueStringValueString;
    /**
     * A list of strings.
     */
    stringListValue?: DocumentAttributeStringListValue;
    /**
     * A long integer value. 
     */
    longValue?: Long;
    /**
     * A date expressed as an ISO 8601 string. It's important for the time zone to be included in the ISO 8601 date-time format. For example, 2012-03-25T12:30:10+01:00 is the ISO 8601 date-time format for March 25th 2012 at 12:30PM (plus 10 seconds) in Central European Time. 
     */
    dateValue?: Timestamp;
  }
  export type DocumentAttributeValueStringValueString = string;
  export type DocumentAttributes = DocumentAttribute[];
  export interface DocumentContent {
    /**
     * The contents of the document. Documents passed to the blob parameter must be base64 encoded. Your code might not need to encode the document file bytes if you're using an Amazon Web Services SDK to call Amazon Q Business APIs. If you are calling the Amazon Q Business endpoint directly using REST, you must base64 encode the contents before sending.
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
     * The identifier of the document.
     */
    documentId?: DocumentId;
    /**
     * The current status of the document.
     */
    status?: DocumentStatus;
    /**
     * An error message associated with the document.
     */
    error?: ErrorDetail;
    /**
     * The timestamp for when the document was created.
     */
    createdAt?: Timestamp;
    /**
     * The timestamp for when the document was last updated.
     */
    updatedAt?: Timestamp;
  }
  export type DocumentEnrichmentConditionOperator = "GREATER_THAN"|"GREATER_THAN_OR_EQUALS"|"LESS_THAN"|"LESS_THAN_OR_EQUALS"|"EQUALS"|"NOT_EQUALS"|"CONTAINS"|"NOT_CONTAINS"|"EXISTS"|"NOT_EXISTS"|"BEGINS_WITH"|string;
  export interface DocumentEnrichmentConfiguration {
    /**
     * Configuration information to alter document attributes or metadata fields and content when ingesting documents into Amazon Q Business.
     */
    inlineConfigurations?: InlineDocumentEnrichmentConfigurations;
    preExtractionHookConfiguration?: HookConfiguration;
    postExtractionHookConfiguration?: HookConfiguration;
  }
  export type DocumentId = string;
  export type DocumentMetadataConfigurationName = string;
  export type DocumentStatus = "RECEIVED"|"PROCESSING"|"INDEXED"|"UPDATED"|"FAILED"|"DELETING"|"DELETED"|"DOCUMENT_FAILED_TO_INDEX"|string;
  export type Documents = Document[];
  export interface EligibleDataSource {
    /**
     * The identifier of the index the data source is attached to.
     */
    indexId?: IndexId;
    /**
     * The identifier of the data source.
     */
    dataSourceId?: DataSourceId;
  }
  export type EligibleDataSources = EligibleDataSource[];
  export interface EncryptionConfiguration {
    /**
     * The identifier of the KMS key. Amazon Q Business doesn't support asymmetric keys.
     */
    kmsKeyId?: KmsKeyId;
  }
  export type ErrorCode = "InternalError"|"InvalidRequest"|"ResourceInactive"|"ResourceNotFound"|string;
  export interface ErrorDetail {
    /**
     * The message explaining the data source sync error.
     */
    errorMessage?: ErrorMessage;
    /**
     * The code associated with the data source sync error.
     */
    errorCode?: ErrorCode;
  }
  export type ErrorMessage = string;
  export type ExampleChatMessage = string;
  export type ExampleChatMessages = ExampleChatMessage[];
  export type ExecutionId = string;
  export interface FailedDocument {
    /**
     * The identifier of the document that couldn't be removed from the Amazon Q Business index.
     */
    id?: DocumentId;
    /**
     * An explanation for why the document couldn't be removed from the index.
     */
    error?: ErrorDetail;
    /**
     * The identifier of the Amazon Q Business data source connector that contains the failed document.
     */
    dataSourceId?: DataSourceId;
  }
  export type FailedDocuments = FailedDocument[];
  export interface GetApplicationRequest {
    /**
     * The identifier of the Amazon Q Business application.
     */
    applicationId: ApplicationId;
  }
  export interface GetApplicationResponse {
    /**
     * The name of the Amazon Q Business application.
     */
    displayName?: ApplicationName;
    /**
     * The identifier of the Amazon Q Business application.
     */
    applicationId?: ApplicationId;
    /**
     * The Amazon Resource Name (ARN) of the Amazon Q Business application.
     */
    applicationArn?: ApplicationArn;
    /**
     * The Amazon Resource Name (ARN) of the AWS IAM Identity Center instance attached to your Amazon Q Business application.
     */
    identityCenterApplicationArn?: IdcApplicationArn;
    /**
     * The Amazon Resource Name (ARN) of the IAM with permissions to access your CloudWatch logs and metrics.
     */
    roleArn?: RoleArn;
    /**
     * The status of the Amazon Q Business application.
     */
    status?: ApplicationStatus;
    /**
     * A description for the Amazon Q Business application.
     */
    description?: Description;
    /**
     * The identifier of the Amazon Web Services KMS key that is used to encrypt your data. Amazon Q Business doesn't support asymmetric keys.
     */
    encryptionConfiguration?: EncryptionConfiguration;
    /**
     * The Unix timestamp when the Amazon Q Business application was last updated.
     */
    createdAt?: Timestamp;
    /**
     * The Unix timestamp when the Amazon Q Business application was last updated.
     */
    updatedAt?: Timestamp;
    /**
     * If the Status field is set to ERROR, the ErrorMessage field contains a description of the error that caused the synchronization to fail.
     */
    error?: ErrorDetail;
    /**
     * Settings for whether end users can upload files directly during chat.
     */
    attachmentsConfiguration?: AppliedAttachmentsConfiguration;
    /**
     * Settings for whether end users can create and use Amazon Q Apps in the web experience.
     */
    qAppsConfiguration?: QAppsConfiguration;
    /**
     * Configuration information about chat response personalization. For more information, see Personalizing chat responses.
     */
    personalizationConfiguration?: PersonalizationConfiguration;
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
     * If the maxResults response was incomplete because there is more data to retrieve, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of Amazon Q Business chat controls configured.
     */
    nextToken?: NextToken;
  }
  export interface GetChatControlsConfigurationResponse {
    /**
     * The response scope configured for a Amazon Q Business application. This determines whether your application uses its retrieval augmented generation (RAG) system to generate answers only from your enterprise data, or also uses the large language models (LLM) knowledge to respons to end user questions in chat.
     */
    responseScope?: ResponseScope;
    /**
     * The phrases blocked from chat by your chat control configuration.
     */
    blockedPhrases?: BlockedPhrasesConfiguration;
    /**
     * The topic specific controls configured for a Amazon Q Business application.
     */
    topicConfigurations?: TopicConfigurations;
    /**
     * The configuration details for CREATOR_MODE.
     */
    creatorModeConfiguration?: AppliedCreatorModeConfiguration;
    /**
     * If the maxResults response was incomplete because there is more data to retrieve, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of Amazon Q Business chat controls configured.
     */
    nextToken?: NextToken;
  }
  export interface GetDataSourceRequest {
    /**
     * The identifier of the Amazon Q Business application.
     */
    applicationId: ApplicationId;
    /**
     * The identfier of the index used with the data source connector.
     */
    indexId: IndexId;
    /**
     * The identifier of the data source connector.
     */
    dataSourceId: DataSourceId;
  }
  export interface GetDataSourceResponse {
    /**
     * The identifier of the Amazon Q Business application.
     */
    applicationId?: ApplicationId;
    /**
     * The identifier of the index linked to the data source connector.
     */
    indexId?: IndexId;
    /**
     * The identifier of the data source connector.
     */
    dataSourceId?: DataSourceId;
    /**
     * The Amazon Resource Name (ARN) of the data source.
     */
    dataSourceArn?: DataSourceArn;
    /**
     * The name for the data source connector.
     */
    displayName?: DataSourceName;
    /**
     * The type of the data source connector. For example, S3.
     */
    type?: String;
    /**
     * The details of how the data source connector is configured.
     */
    configuration?: DataSourceConfiguration;
    /**
     * Configuration information for an Amazon VPC (Virtual Private Cloud) to connect to your data source.
     */
    vpcConfiguration?: DataSourceVpcConfiguration;
    /**
     * The Unix timestamp when the data source connector was created.
     */
    createdAt?: Timestamp;
    /**
     * The Unix timestamp when the data source connector was last updated.
     */
    updatedAt?: Timestamp;
    /**
     * The description for the data source connector.
     */
    description?: Description;
    /**
     * The current status of the data source connector. When the Status field value is FAILED, the ErrorMessage field contains a description of the error that caused the data source connector to fail.
     */
    status?: DataSourceStatus;
    /**
     * The schedule for Amazon Q Business to update the index.
     */
    syncSchedule?: SyncSchedule;
    /**
     * The Amazon Resource Name (ARN) of the role with permission to access the data source and required resources.
     */
    roleArn?: RoleArn;
    /**
     * When the Status field value is FAILED, the ErrorMessage field contains a description of the error that caused the data source connector to fail.
     */
    error?: ErrorDetail;
    documentEnrichmentConfiguration?: DocumentEnrichmentConfiguration;
  }
  export interface GetGroupRequest {
    /**
     * The identifier of the application id the group is attached to.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the index the group is attached to.
     */
    indexId: IndexId;
    /**
     * The name of the group.
     */
    groupName: GroupName;
    /**
     * The identifier of the data source the group is attached to.
     */
    dataSourceId?: DataSourceId;
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
     * The identifier of the Amazon Q Business application connected to the index.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the Amazon Q Business index you want information on.
     */
    indexId: IndexId;
  }
  export interface GetIndexResponse {
    /**
     * The identifier of the Amazon Q Business application associated with the index.
     */
    applicationId?: ApplicationId;
    /**
     * The identifier of the Amazon Q Business index.
     */
    indexId?: IndexId;
    /**
     * The name of the Amazon Q Business index.
     */
    displayName?: IndexName;
    /**
     * The type of index attached to your Amazon Q Business application.
     */
    type?: IndexType;
    /**
     *  The Amazon Resource Name (ARN) of the Amazon Q Business index. 
     */
    indexArn?: IndexArn;
    /**
     * The current status of the index. When the value is ACTIVE, the index is ready for use. If the Status field value is FAILED, the ErrorMessage field contains a message that explains why.
     */
    status?: IndexStatus;
    /**
     * The description for the Amazon Q Business index.
     */
    description?: Description;
    /**
     * The Unix timestamp when the Amazon Q Business index was created.
     */
    createdAt?: Timestamp;
    /**
     * The Unix timestamp when the Amazon Q Business index was last updated.
     */
    updatedAt?: Timestamp;
    /**
     * The storage capacity units chosen for your Amazon Q Business index.
     */
    capacityConfiguration?: IndexCapacityConfiguration;
    /**
     * Configuration information for document attributes or metadata. Document metadata are fields associated with your documents. For example, the company department name associated with each document. For more information, see Understanding document attributes.
     */
    documentAttributeConfigurations?: DocumentAttributeConfigurations;
    /**
     * When the Status field value is FAILED, the ErrorMessage field contains a message that explains why.
     */
    error?: ErrorDetail;
    /**
     * Provides information about the number of documents indexed.
     */
    indexStatistics?: IndexStatistics;
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
    /**
     * The identifier of the plugin.
     */
    pluginId?: PluginId;
    /**
     * The name of the plugin.
     */
    displayName?: PluginName;
    /**
     * The type of the plugin.
     */
    type?: PluginType;
    /**
     * The source URL used for plugin configuration.
     */
    serverUrl?: Url;
    authConfiguration?: PluginAuthConfiguration;
    /**
     * Configuration information required to create a custom plugin.
     */
    customPluginConfiguration?: CustomPluginConfiguration;
    /**
     * The current status of a plugin. A plugin is modified asynchronously.
     */
    buildStatus?: PluginBuildStatus;
    /**
     * The Amazon Resource Name (ARN) of the role with permission to access resources needed to create the plugin.
     */
    pluginArn?: PluginArn;
    /**
     * The current state of the plugin.
     */
    state?: PluginState;
    /**
     * The timestamp for when the plugin was created.
     */
    createdAt?: Timestamp;
    /**
     * The timestamp for when the plugin was last updated.
     */
    updatedAt?: Timestamp;
  }
  export interface GetRetrieverRequest {
    /**
     * The identifier of the Amazon Q Business application using the retriever.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the retriever.
     */
    retrieverId: RetrieverId;
  }
  export interface GetRetrieverResponse {
    /**
     * The identifier of the Amazon Q Business application using the retriever. 
     */
    applicationId?: ApplicationId;
    /**
     * The identifier of the retriever.
     */
    retrieverId?: RetrieverId;
    /**
     * The Amazon Resource Name (ARN) of the IAM role associated with the retriever.
     */
    retrieverArn?: RetrieverArn;
    /**
     * The type of the retriever.
     */
    type?: RetrieverType;
    /**
     * The status of the retriever.
     */
    status?: RetrieverStatus;
    /**
     * The name of the retriever.
     */
    displayName?: RetrieverName;
    configuration?: RetrieverConfiguration;
    /**
     * The Amazon Resource Name (ARN) of the role with the permission to access the retriever and required resources.
     */
    roleArn?: RoleArn;
    /**
     * The Unix timestamp when the retriever was created.
     */
    createdAt?: Timestamp;
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
     * The identifier of the Amazon Q Business application linked to the web experience.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the Amazon Q Business web experience. 
     */
    webExperienceId: WebExperienceId;
  }
  export interface GetWebExperienceResponse {
    /**
     * The identifier of the Amazon Q Business application linked to the web experience.
     */
    applicationId?: ApplicationId;
    /**
     * The identifier of the Amazon Q Business web experience.
     */
    webExperienceId?: WebExperienceId;
    /**
     * The Amazon Resource Name (ARN) of the role with the permission to access the Amazon Q Business web experience and required resources.
     */
    webExperienceArn?: WebExperienceArn;
    /**
     * The endpoint of your Amazon Q Business web experience.
     */
    defaultEndpoint?: Url;
    /**
     * The current status of the Amazon Q Business web experience. When the Status field value is FAILED, the ErrorMessage field contains a description of the error that caused the data source connector to fail. 
     */
    status?: WebExperienceStatus;
    /**
     * The Unix timestamp when the Amazon Q Business web experience was last created.
     */
    createdAt?: Timestamp;
    /**
     * The Unix timestamp when the Amazon Q Business web experience was last updated.
     */
    updatedAt?: Timestamp;
    /**
     * The title for your Amazon Q Business web experience. 
     */
    title?: WebExperienceTitle;
    /**
     * The subtitle for your Amazon Q Business web experience. 
     */
    subtitle?: WebExperienceSubtitle;
    /**
     * The customized welcome message for end users of an Amazon Q Business web experience.
     */
    welcomeMessage?: WebExperienceWelcomeMessage;
    /**
     * Determines whether sample prompts are enabled in the web experience for an end user.
     */
    samplePromptsControlMode?: WebExperienceSamplePromptsControlMode;
    /**
     *  The Amazon Resource Name (ARN) of the service role attached to your web experience.
     */
    roleArn?: RoleArn;
    /**
     * The authentication configuration information for your Amazon Q Business web experience.
     */
    authenticationConfiguration?: WebExperienceAuthConfiguration;
    /**
     * When the Status field value is FAILED, the ErrorMessage field contains a description of the error that caused the data source connector to fail.
     */
    error?: ErrorDetail;
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
     * The status of a group.
     */
    status?: GroupStatus;
    /**
     * The Unix timestamp when the Amazon Q Business application was last updated.
     */
    lastUpdatedAt?: Timestamp;
    /**
     * The details of an error associated a group status.
     */
    errorDetail?: ErrorDetail;
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
     * The condition used for when a Lambda function should be invoked. For example, you can specify a condition that if there are empty date-time values, then Amazon Q Business should invoke a function that inserts the current date-time.
     */
    invocationCondition?: DocumentAttributeCondition;
    /**
     * The Amazon Resource Name (ARN) of a role with permission to run a Lambda function during ingestion. For more information, see IAM roles for Custom Document Enrichment (CDE).
     */
    lambdaArn?: LambdaArn;
    /**
     * Stores the original, raw documents or the structured, parsed documents before and after altering them. For more information, see Data contracts for Lambda functions.
     */
    s3BucketName?: S3BucketName;
    /**
     * The Amazon Resource Name (ARN) of a role with permission to run PreExtractionHookConfiguration and PostExtractionHookConfiguration for altering document metadata and content during the document ingestion process.
     */
    roleArn?: RoleArn;
  }
  export type IdcApplicationArn = string;
  export interface Index {
    /**
     * The name of the index.
     */
    displayName?: IndexName;
    /**
     * The identifier for the index.
     */
    indexId?: IndexId;
    /**
     * The Unix timestamp when the index was created.
     */
    createdAt?: Timestamp;
    /**
     * The Unix timestamp when the index was last updated.
     */
    updatedAt?: Timestamp;
    /**
     * The current status of the index. When the status is ACTIVE, the index is ready.
     */
    status?: IndexStatus;
  }
  export type IndexArn = string;
  export interface IndexCapacityConfiguration {
    /**
     * The number of storage units configured for an Amazon Q Business index.
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
  export type IndexType = "ENTERPRISE"|"STARTER"|string;
  export type IndexedTextBytes = number;
  export type IndexedTextDocument = number;
  export type Indices = Index[];
  export interface InlineDocumentEnrichmentConfiguration {
    condition?: DocumentAttributeCondition;
    target?: DocumentAttributeTarget;
    /**
     *  TRUE to delete content if the condition used for the target attribute is met.
     */
    documentContentOperator?: DocumentContentOperator;
  }
  export type InlineDocumentEnrichmentConfigurations = InlineDocumentEnrichmentConfiguration[];
  export type InstanceArn = string;
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
     * If the maxResults response was incomplete because there is more data to retrieve, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of Amazon Q Business applications.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of Amazon Q Business applications to return.
     */
    maxResults?: MaxResultsIntegerForListApplications;
  }
  export interface ListApplicationsResponse {
    /**
     * If the response is truncated, Amazon Q Business returns this token. You can use this token in a subsequent request to retrieve the next set of applications.
     */
    nextToken?: NextToken;
    /**
     * An array of summary information on the configuration of one or more Amazon Q Business applications.
     */
    applications?: Applications;
  }
  export interface ListConversationsRequest {
    /**
     * The identifier of the Amazon Q Business application.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the user involved in the Amazon Q Business web experience conversation. 
     */
    userId?: UserId;
    /**
     * If the maxResults response was incomplete because there is more data to retrieve, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of Amazon Q Business conversations.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of Amazon Q Business conversations to return.
     */
    maxResults?: MaxResultsIntegerForListConversations;
  }
  export interface ListConversationsResponse {
    /**
     * If the response is truncated, Amazon Q Business returns this token, which you can use in a later request to list the next set of messages.
     */
    nextToken?: NextToken;
    /**
     * An array of summary information on the configuration of one or more Amazon Q Business web experiences.
     */
    conversations?: Conversations;
  }
  export interface ListDataSourceSyncJobsRequest {
    /**
     *  The identifier of the data source connector.
     */
    dataSourceId: DataSourceId;
    /**
     * The identifier of the Amazon Q Business application connected to the data source.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the index used with the Amazon Q Business data source connector.
     */
    indexId: IndexId;
    /**
     * If the maxResults response was incpmplete because there is more data to retriever, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of responses.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of synchronization jobs to return in the response.
     */
    maxResults?: MaxResultsIntegerForListDataSourcesSyncJobs;
    /**
     *  The start time of the data source connector sync. 
     */
    startTime?: Timestamp;
    /**
     *  The end time of the data source connector sync.
     */
    endTime?: Timestamp;
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
     * If the response is truncated, Amazon Q Business returns this token. You can use this token in any subsequent request to retrieve the next set of jobs.
     */
    nextToken?: NextToken;
  }
  export interface ListDataSourcesRequest {
    /**
     * The identifier of the Amazon Q Business application linked to the data source connectors.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the index used with one or more data source connectors.
     */
    indexId: IndexId;
    /**
     * If the maxResults response was incomplete because there is more data to retrieve, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of Amazon Q Business data source connectors.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of data source connectors to return.
     */
    maxResults?: MaxResultsIntegerForListDataSources;
  }
  export interface ListDataSourcesResponse {
    /**
     * An array of summary information for one or more data source connector.
     */
    dataSources?: DataSources;
    /**
     * If the response is truncated, Amazon Q Business returns this token. You can use this token in a subsequent request to retrieve the next set of data source connectors.
     */
    nextToken?: NextToken;
  }
  export interface ListDocumentsRequest {
    /**
     * The identifier of the application id the documents are attached to.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the index the documents are attached to.
     */
    indexId: IndexId;
    /**
     * The identifier of the data sources the documents are attached to.
     */
    dataSourceIds?: DataSourceIds;
    /**
     * If the maxResults response was incomplete because there is more data to retrieve, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of documents.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of documents to return.
     */
    maxResults?: MaxResultsIntegerForListDocuments;
  }
  export interface ListDocumentsResponse {
    /**
     * A list of document details.
     */
    documentDetailList?: DocumentDetailList;
    /**
     * If the maxResults response was incomplete because there is more data to retrieve, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of documents.
     */
    nextToken?: NextToken;
  }
  export interface ListGroupsRequest {
    /**
     * The identifier of the application for getting a list of groups mapped to users.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the index for getting a list of groups mapped to users.
     */
    indexId: IndexId;
    /**
     * The timestamp identifier used for the latest PUT or DELETE action for mapping users to their groups.
     */
    updatedEarlierThan: Timestamp;
    /**
     * The identifier of the data source for getting a list of groups mapped to users.
     */
    dataSourceId?: DataSourceId;
    /**
     * If the previous response was incomplete (because there is more data to retrieve), Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of groups that are mapped to users.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of returned groups that are mapped to users.
     */
    maxResults?: MaxResultsIntegerForListGroupsRequest;
  }
  export interface ListGroupsResponse {
    /**
     * If the response is truncated, Amazon Q Business returns this token that you can use in the subsequent request to retrieve the next set of groups that are mapped to users.
     */
    nextToken?: NextToken;
    /**
     * Summary information for list of groups that are mapped to users.
     */
    items?: GroupSummaryList;
  }
  export interface ListIndicesRequest {
    /**
     * The identifier of the Amazon Q Business application connected to the index.
     */
    applicationId: ApplicationId;
    /**
     * If the maxResults response was incomplete because there is more data to retrieve, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of Amazon Q Business indices.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of indices to return.
     */
    maxResults?: MaxResultsIntegerForListIndices;
  }
  export interface ListIndicesResponse {
    /**
     * If the response is truncated, Amazon Q Business returns this token that you can use in the subsequent request to retrieve the next set of indexes.
     */
    nextToken?: NextToken;
    /**
     * An array of information on the items in one or more indexes.
     */
    indices?: Indices;
  }
  export interface ListMessagesRequest {
    /**
     * The identifier of the Amazon Q Business web experience conversation.
     */
    conversationId: ConversationId;
    /**
     * The identifier for the Amazon Q Business application.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the user involved in the Amazon Q Business web experience conversation.
     */
    userId?: UserId;
    /**
     * If the number of retrievers returned exceeds maxResults, Amazon Q Business returns a next token as a pagination token to retrieve the next set of messages.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of messages to return.
     */
    maxResults?: MaxResultsIntegerForListMessages;
  }
  export interface ListMessagesResponse {
    /**
     * An array of information on one or more messages.
     */
    messages?: Messages;
    /**
     * If the response is truncated, Amazon Q Business returns this token, which you can use in a later request to list the next set of messages.
     */
    nextToken?: NextToken;
  }
  export interface ListPluginsRequest {
    /**
     * The identifier of the application the plugin is attached to.
     */
    applicationId: ApplicationId;
    /**
     * If the maxResults response was incomplete because there is more data to retrieve, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of plugins.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of documents to return.
     */
    maxResults?: MaxResultsIntegerForListPlugins;
  }
  export interface ListPluginsResponse {
    /**
     * If the maxResults response was incomplete because there is more data to retrieve, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of plugins.
     */
    nextToken?: NextToken;
    /**
     * Information about a configured plugin.
     */
    plugins?: Plugins;
  }
  export interface ListRetrieversRequest {
    /**
     * The identifier of the Amazon Q Business application using the retriever.
     */
    applicationId: ApplicationId;
    /**
     * If the number of retrievers returned exceeds maxResults, Amazon Q Business returns a next token as a pagination token to retrieve the next set of retrievers.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of retrievers returned.
     */
    maxResults?: MaxResultsIntegerForListRetrieversRequest;
  }
  export interface ListRetrieversResponse {
    /**
     * An array of summary information for one or more retrievers.
     */
    retrievers?: Retrievers;
    /**
     * If the response is truncated, Amazon Q Business returns this token, which you can use in a later request to list the next set of retrievers.
     */
    nextToken?: NextToken;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the Amazon Q Business application or data source to get a list of tags for.
     */
    resourceARN: AmazonResourceName;
  }
  export interface ListTagsForResourceResponse {
    /**
     * A list of tags associated with the Amazon Q Business application or data source.
     */
    tags?: Tags;
  }
  export interface ListWebExperiencesRequest {
    /**
     * The identifier of the Amazon Q Business application linked to the listed web experiences.
     */
    applicationId: ApplicationId;
    /**
     * If the maxResults response was incomplete because there is more data to retrieve, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of Amazon Q Business conversations.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of Amazon Q Business Web Experiences to return.
     */
    maxResults?: MaxResultsIntegerForListWebExperiencesRequest;
  }
  export interface ListWebExperiencesResponse {
    /**
     * An array of summary information for one or more Amazon Q Business experiences.
     */
    webExperiences?: WebExperiences;
    /**
     * If the response is truncated, Amazon Q Business returns this token, which you can use in a later request to list the next set of messages.
     */
    nextToken?: NextToken;
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
     * The identifier of the user you want to map to a group.
     */
    userId: DataSourceUserId;
    /**
     * The type of the user.
     */
    type?: MembershipType;
  }
  export type MemberUsers = MemberUser[];
  export type MembershipType = "INDEX"|"DATASOURCE"|string;
  export interface Message {
    /**
     * The identifier of the Amazon Q Business web experience message.
     */
    messageId?: String;
    /**
     * The content of the Amazon Q Business web experience message.
     */
    body?: MessageBody;
    /**
     * The timestamp of the first Amazon Q Business web experience message.
     */
    time?: Timestamp;
    /**
     * The type of Amazon Q Business message, whether HUMAN or AI generated.
     */
    type?: MessageType;
    /**
     * A file directly uploaded into an Amazon Q Business web experience chat.
     */
    attachments?: AttachmentsOutput;
    /**
     * The source documents used to generate Amazon Q Business web experience message.
     */
    sourceAttribution?: SourceAttributions;
    actionReview?: ActionReview;
    actionExecution?: ActionExecution;
  }
  export type MessageBody = string;
  export type MessageId = string;
  export type MessageType = "USER"|"SYSTEM"|string;
  export type MessageUsefulness = "USEFUL"|"NOT_USEFUL"|string;
  export type MessageUsefulnessComment = string;
  export interface MessageUsefulnessFeedback {
    /**
     * The usefulness value assigned by an end user to a message.
     */
    usefulness: MessageUsefulness;
    /**
     * The reason for a usefulness rating.
     */
    reason?: MessageUsefulnessReason;
    /**
     * A comment given by an end user on the usefulness of an AI-generated chat message.
     */
    comment?: MessageUsefulnessComment;
    /**
     * The timestamp for when the feedback was submitted.
     */
    submittedAt: Timestamp;
  }
  export type MessageUsefulnessReason = "NOT_FACTUALLY_CORRECT"|"HARMFUL_OR_UNSAFE"|"INCORRECT_OR_MISSING_SOURCES"|"NOT_HELPFUL"|"FACTUALLY_CORRECT"|"COMPLETE"|"RELEVANT_SOURCES"|"HELPFUL"|"NOT_BASED_ON_DOCUMENTS"|"NOT_COMPLETE"|"NOT_CONCISE"|"OTHER"|string;
  export type Messages = Message[];
  export type MetricValue = string;
  export interface NativeIndexConfiguration {
    /**
     * The identifier for the Amazon Q Business index.
     */
    indexId: IndexId;
    /**
     * Overrides the default boosts applied by Amazon Q Business to supported document attribute data types.
     */
    boostingOverride?: DocumentAttributeBoostingOverrideMap;
  }
  export type NextToken = string;
  export interface NoAuthConfiguration {
  }
  export interface NumberAttributeBoostingConfiguration {
    /**
     * Specifies the duration, in seconds, of a boost applies to a NUMBER type document attribute.
     */
    boostingLevel: DocumentAttributeBoostingLevel;
    /**
     * Specifies how much a document attribute is boosted.
     */
    boostingType?: NumberAttributeBoostingType;
  }
  export type NumberAttributeBoostingType = "PRIORITIZE_LARGER_VALUES"|"PRIORITIZE_SMALLER_VALUES"|string;
  export interface OAuth2ClientCredentialConfiguration {
    /**
     * The ARN of the Secrets Manager secret that stores the OAuth 2.0 credentials/token used for plugin configuration.
     */
    secretArn: SecretArn;
    /**
     * The ARN of an IAM role used by Amazon Q Business to access the OAuth 2.0 authentication credentials stored in a Secrets Manager secret.
     */
    roleArn: RoleArn;
  }
  export type Payload = string;
  export interface PersonalizationConfiguration {
    /**
     * An option to allow Amazon Q Business to customize chat responses using user specific metadata—specifically, location and job information—in your IAM Identity Center instance.
     */
    personalizationControlMode: PersonalizationControlMode;
  }
  export type PersonalizationControlMode = "ENABLED"|"DISABLED"|string;
  export interface Plugin {
    /**
     * The identifier of the plugin.
     */
    pluginId?: PluginId;
    /**
     * The name of the plugin.
     */
    displayName?: PluginName;
    /**
     * The type of the plugin.
     */
    type?: PluginType;
    /**
     * The plugin server URL used for configuration.
     */
    serverUrl?: Url;
    /**
     * The current status of the plugin.
     */
    state?: PluginState;
    /**
     * The status of the plugin.
     */
    buildStatus?: PluginBuildStatus;
    /**
     * The timestamp for when the plugin was created.
     */
    createdAt?: Timestamp;
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
    /**
     * Information about invoking a custom plugin without any authentication.
     */
    noAuthConfiguration?: NoAuthConfiguration;
  }
  export type PluginBuildStatus = "READY"|"CREATE_IN_PROGRESS"|"CREATE_FAILED"|"UPDATE_IN_PROGRESS"|"UPDATE_FAILED"|"DELETE_IN_PROGRESS"|"DELETE_FAILED"|string;
  export interface PluginConfiguration {
    /**
     *  The identifier of the plugin you want to use.
     */
    pluginId: PluginId;
  }
  export type PluginDescription = string;
  export type PluginId = string;
  export type PluginName = string;
  export type PluginState = "ENABLED"|"DISABLED"|string;
  export type PluginType = "SERVICE_NOW"|"SALESFORCE"|"JIRA"|"ZENDESK"|"CUSTOM"|string;
  export type Plugins = Plugin[];
  export interface Principal {
    /**
     * The user associated with the principal.
     */
    user?: PrincipalUser;
    /**
     *  The group associated with the principal.
     */
    group?: PrincipalGroup;
  }
  export interface PrincipalGroup {
    /**
     * The name of the group.
     */
    name?: GroupName;
    /**
     * Provides information about whether to allow or deny access to the principal.
     */
    access: ReadAccessType;
    /**
     * The type of group.
     */
    membershipType?: MembershipType;
  }
  export interface PrincipalUser {
    /**
     *  The identifier of the user. 
     */
    id?: UserId;
    /**
     * Provides information about whether to allow or deny access to the principal.
     */
    access: ReadAccessType;
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
     * The identifier of the user giving the feedback.
     */
    userId?: UserId;
    /**
     * The identifier of the conversation the feedback is attached to.
     */
    conversationId: ConversationId;
    /**
     * The identifier of the chat message that the feedback was given for.
     */
    messageId: SystemMessageId;
    /**
     * The timestamp for when the feedback was recorded.
     */
    messageCopiedAt?: Timestamp;
    /**
     * The feedback usefulness value given by the user to the chat message.
     */
    messageUsefulness?: MessageUsefulnessFeedback;
  }
  export interface PutGroupRequest {
    /**
     * The identifier of the application in which the user and group mapping belongs.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the index in which you want to map users to their groups.
     */
    indexId: IndexId;
    /**
     * The list that contains your users or sub groups that belong the same group. For example, the group "Company" includes the user "CEO" and the sub groups "Research", "Engineering", and "Sales and Marketing". If you have more than 1000 users and/or sub groups for a single group, you need to provide the path to the S3 file that lists your users and sub groups for a group. Your sub groups can contain more than 1000 users, but the list of sub groups that belong to a group (and/or users) must be no more than 1000.
     */
    groupName: GroupName;
    /**
     * The identifier of the data source for which you want to map users to their groups. This is useful if a group is tied to multiple data sources, but you only want the group to access documents of a certain data source. For example, the groups "Research", "Engineering", and "Sales and Marketing" are all tied to the company's documents stored in the data sources Confluence and Salesforce. However, "Sales and Marketing" team only needs access to customer-related documents stored in Salesforce.
     */
    dataSourceId?: DataSourceId;
    /**
     * The type of the group.
     */
    type: MembershipType;
    groupMembers: GroupMembers;
  }
  export interface PutGroupResponse {
  }
  export interface QAppsConfiguration {
    /**
     * Status information about whether end users can create and use Amazon Q Apps in the web experience.
     */
    qAppsControlMode: QAppsControlMode;
  }
  export type QAppsControlMode = "ENABLED"|"DISABLED"|string;
  export type ReadAccessType = "ALLOW"|"DENY"|string;
  export type ResponseScope = "ENTERPRISE_CONTENT_ONLY"|"EXTENDED_KNOWLEDGE_ENABLED"|string;
  export interface Retriever {
    /**
     * The identifier of the Amazon Q Business application using the retriever.
     */
    applicationId?: ApplicationId;
    /**
     * The identifier of the retriever used by your Amazon Q Business application.
     */
    retrieverId?: RetrieverId;
    /**
     * The type of your retriever.
     */
    type?: RetrieverType;
    /**
     * The status of your retriever.
     */
    status?: RetrieverStatus;
    /**
     * The name of your retriever.
     */
    displayName?: RetrieverName;
  }
  export type RetrieverArn = string;
  export interface RetrieverConfiguration {
    /**
     * Provides information on how a Amazon Q Business index used as a retriever for your Amazon Q Business application is configured.
     */
    nativeIndexConfiguration?: NativeIndexConfiguration;
    /**
     * Provides information on how the Amazon Kendra index used as a retriever for your Amazon Q Business application is configured.
     */
    kendraIndexConfiguration?: KendraIndexConfiguration;
  }
  export type RetrieverId = string;
  export type RetrieverName = string;
  export type RetrieverStatus = "CREATING"|"ACTIVE"|"FAILED"|string;
  export type RetrieverType = "NATIVE_INDEX"|"KENDRA_INDEX"|string;
  export type Retrievers = Retriever[];
  export type RoleArn = string;
  export interface Rule {
    /**
     * Users and groups to be included in a rule.
     */
    includedUsersAndGroups?: UsersAndGroups;
    /**
     * Users and groups to be excluded from a rule.
     */
    excludedUsersAndGroups?: UsersAndGroups;
    /**
     * The type of rule.
     */
    ruleType: RuleType;
    /**
     * The configuration information for a rule.
     */
    ruleConfiguration?: RuleConfiguration;
  }
  export interface RuleConfiguration {
    /**
     * A rule for configuring how Amazon Q Business responds when it encounters a a blocked topic.
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
     * The Amazon Resource Name (ARN) of an IAM role assumed by users when they authenticate into their Amazon Q Business web experience, containing the relevant Amazon Q Business permissions for conversing with Amazon Q Business.
     */
    roleArn: RoleArn;
    /**
     * The user attribute name in your IdP that maps to the user email.
     */
    userIdAttribute: SamlAttribute;
    /**
     * The group attribute name in your IdP that maps to user groups.
     */
    userGroupAttribute?: SamlAttribute;
  }
  export type SamlMetadataXML = string;
  export type SecretArn = string;
  export type SecurityGroupId = string;
  export type SecurityGroupIds = SecurityGroupId[];
  export interface SnippetExcerpt {
    /**
     * The relevant text excerpt from a source that was used to generate a citation text segment in an Amazon Q chat response.
     */
    text?: SnippetExcerptText;
  }
  export type SnippetExcerptText = string;
  export interface SourceAttribution {
    /**
     * The title of the document which is the source for the Amazon Q Business generated response. 
     */
    title?: String;
    /**
     * The content extract from the document on which the generated response is based. 
     */
    snippet?: String;
    /**
     * The URL of the document which is the source for the Amazon Q Business generated response. 
     */
    url?: String;
    /**
     * The number attached to a citation in an Amazon Q Business generated response.
     */
    citationNumber?: Integer;
    /**
     * The Unix timestamp when the Amazon Q Business application was last updated.
     */
    updatedAt?: Timestamp;
    /**
     * A text extract from a source document that is used for source attribution.
     */
    textMessageSegments?: TextSegmentList;
  }
  export type SourceAttributions = SourceAttribution[];
  export interface StartDataSourceSyncJobRequest {
    /**
     *  The identifier of the data source connector. 
     */
    dataSourceId: DataSourceId;
    /**
     * The identifier of Amazon Q Business application the data source is connected to.
     */
    applicationId: ApplicationId;
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
     *  The identifier of the data source connector. 
     */
    dataSourceId: DataSourceId;
    /**
     * The identifier of the Amazon Q Business application that the data source is connected to.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the index used with the Amazon Q Business data source connector.
     */
    indexId: IndexId;
  }
  export interface StopDataSourceSyncJobResponse {
  }
  export type String = string;
  export interface StringAttributeBoostingConfiguration {
    /**
     * Specifies how much a document attribute is boosted.
     */
    boostingLevel: DocumentAttributeBoostingLevel;
    /**
     * Specifies specific values of a STRING type document attribute being boosted.
     */
    attributeValueBoosting?: StringAttributeValueBoosting;
  }
  export type StringAttributeValueBoosting = {[key: string]: StringAttributeValueBoostingLevel};
  export type StringAttributeValueBoostingLevel = "LOW"|"MEDIUM"|"HIGH"|"VERY_HIGH"|string;
  export interface StringListAttributeBoostingConfiguration {
    /**
     * Specifies how much a document attribute is boosted.
     */
    boostingLevel: DocumentAttributeBoostingLevel;
  }
  export type SubnetId = string;
  export type SubnetIds = SubnetId[];
  export type SyncSchedule = string;
  export type SystemMessageId = string;
  export type SystemMessageOverride = string;
  export interface Tag {
    /**
     *  The key for the tag. Keys are not case sensitive and must be unique for the Amazon Q Business application or data source.
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
     * The Amazon Resource Name (ARN) of the Amazon Q Business application or data source to tag.
     */
    resourceARN: AmazonResourceName;
    /**
     * A list of tag keys to add to the Amazon Q Business application or data source. If a tag already exists, the existing value is replaced with the new value.
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
    /**
     * The relevant text excerpt from a source that was used to generate a citation text segment in an Amazon Q Business chat response.
     */
    snippetExcerpt?: SnippetExcerpt;
  }
  export type TextSegmentList = TextSegment[];
  export type Timestamp = Date;
  export type Title = string;
  export interface TopicConfiguration {
    /**
     * A name for your topic control configuration.
     */
    name: TopicConfigurationName;
    /**
     * A description for your topic control configuration. Use this to outline how the large language model (LLM) should use this topic control configuration.
     */
    description?: TopicDescription;
    /**
     * A list of example phrases that you expect the end user to use in relation to the topic.
     */
    exampleChatMessages?: ExampleChatMessages;
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
     * The Amazon Resource Name (ARN) of the Amazon Q Business application, or data source to remove the tag from.
     */
    resourceARN: AmazonResourceName;
    /**
     * A list of tag keys to remove from the Amazon Q Business application or data source. If a tag key does not exist on the resource, it is ignored.
     */
    tagKeys: TagKeys;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateApplicationRequest {
    /**
     * The identifier of the Amazon Q Business application.
     */
    applicationId: ApplicationId;
    /**
     *  The Amazon Resource Name (ARN) of the IAM Identity Center instance you are either creating for—or connecting to—your Amazon Q Business application.
     */
    identityCenterInstanceArn?: InstanceArn;
    /**
     * A name for the Amazon Q Business application.
     */
    displayName?: ApplicationName;
    /**
     * A description for the Amazon Q Business application.
     */
    description?: Description;
    /**
     * An Amazon Web Services Identity and Access Management (IAM) role that gives Amazon Q Business permission to access Amazon CloudWatch logs and metrics.
     */
    roleArn?: RoleArn;
    /**
     * An option to allow end users to upload files directly during chat.
     */
    attachmentsConfiguration?: AttachmentsConfiguration;
    /**
     * An option to allow end users to create and use Amazon Q Apps in the web experience.
     */
    qAppsConfiguration?: QAppsConfiguration;
    /**
     * Configuration information about chat response personalization. For more information, see Personalizing chat responses.
     */
    personalizationConfiguration?: PersonalizationConfiguration;
  }
  export interface UpdateApplicationResponse {
  }
  export interface UpdateChatControlsConfigurationRequest {
    /**
     * The identifier of the application for which the chat controls are configured.
     */
    applicationId: ApplicationId;
    /**
     * A token that you provide to identify the request to update a Amazon Q Business application chat configuration.
     */
    clientToken?: ClientToken;
    /**
     * The response scope configured for your application. This determines whether your application uses its retrieval augmented generation (RAG) system to generate answers only from your enterprise data, or also uses the large language models (LLM) knowledge to respons to end user questions in chat.
     */
    responseScope?: ResponseScope;
    /**
     * The phrases blocked from chat by your chat control configuration.
     */
    blockedPhrasesConfigurationUpdate?: BlockedPhrasesConfigurationUpdate;
    /**
     * The configured topic specific chat controls you want to update.
     */
    topicConfigurationsToCreateOrUpdate?: TopicConfigurations;
    /**
     * The configured topic specific chat controls you want to delete.
     */
    topicConfigurationsToDelete?: TopicConfigurations;
    /**
     * The configuration details for CREATOR_MODE.
     */
    creatorModeConfiguration?: CreatorModeConfiguration;
  }
  export interface UpdateChatControlsConfigurationResponse {
  }
  export interface UpdateDataSourceRequest {
    /**
     *  The identifier of the Amazon Q Business application the data source is attached to.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the index attached to the data source connector.
     */
    indexId: IndexId;
    /**
     * The identifier of the data source connector.
     */
    dataSourceId: DataSourceId;
    /**
     * A name of the data source connector.
     */
    displayName?: DataSourceName;
    configuration?: DataSourceConfiguration;
    vpcConfiguration?: DataSourceVpcConfiguration;
    /**
     * The description of the data source connector.
     */
    description?: Description;
    /**
     * The chosen update frequency for your data source.
     */
    syncSchedule?: SyncSchedule;
    /**
     * The Amazon Resource Name (ARN) of an IAM role with permission to access the data source and required resources.
     */
    roleArn?: RoleArn;
    documentEnrichmentConfiguration?: DocumentEnrichmentConfiguration;
  }
  export interface UpdateDataSourceResponse {
  }
  export interface UpdateIndexRequest {
    /**
     * The identifier of the Amazon Q Business application connected to the index.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the Amazon Q Business index.
     */
    indexId: IndexId;
    /**
     * The name of the Amazon Q Business index.
     */
    displayName?: ApplicationName;
    /**
     * The description of the Amazon Q Business index.
     */
    description?: Description;
    /**
     * The storage capacity units you want to provision for your Amazon Q Business index. You can add and remove capacity to fit your usage needs.
     */
    capacityConfiguration?: IndexCapacityConfiguration;
    /**
     * Configuration information for document metadata or fields. Document metadata are fields or attributes associated with your documents. For example, the company department name associated with each document. For more information, see Understanding document attributes.
     */
    documentAttributeConfigurations?: DocumentAttributeConfigurations;
  }
  export interface UpdateIndexResponse {
  }
  export interface UpdatePluginRequest {
    /**
     * The identifier of the application the plugin is attached to.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the plugin.
     */
    pluginId: PluginId;
    /**
     * The name of the plugin.
     */
    displayName?: PluginName;
    /**
     * The status of the plugin. 
     */
    state?: PluginState;
    /**
     * The source URL used for plugin configuration.
     */
    serverUrl?: Url;
    /**
     * The configuration for a custom plugin.
     */
    customPluginConfiguration?: CustomPluginConfiguration;
    /**
     * The authentication configuration the plugin is using.
     */
    authConfiguration?: PluginAuthConfiguration;
  }
  export interface UpdatePluginResponse {
  }
  export interface UpdateRetrieverRequest {
    /**
     * The identifier of your Amazon Q Business application.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of your retriever.
     */
    retrieverId: RetrieverId;
    configuration?: RetrieverConfiguration;
    /**
     * The name of your retriever.
     */
    displayName?: RetrieverName;
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
     * The email id attached to the user.
     */
    userId: String;
    /**
     * The user aliases attached to the user id that are to be updated.
     */
    userAliasesToUpdate?: UserAliases;
    /**
     * The user aliases attached to the user id that are to be deleted.
     */
    userAliasesToDelete?: UserAliases;
  }
  export interface UpdateUserResponse {
    /**
     * The user aliases that have been to be added to a user id.
     */
    userAliasesAdded?: UserAliases;
    /**
     * The user aliases attached to a user id that have been updated.
     */
    userAliasesUpdated?: UserAliases;
    /**
     * The user aliases that have been deleted from a user id.
     */
    userAliasesDeleted?: UserAliases;
  }
  export interface UpdateWebExperienceRequest {
    /**
     * The identifier of the Amazon Q Business application attached to the web experience.
     */
    applicationId: ApplicationId;
    /**
     * The identifier of the Amazon Q Business web experience.
     */
    webExperienceId: WebExperienceId;
    /**
     * The Amazon Resource Name (ARN) of the role with permission to access the Amazon Q Business web experience and required resources.
     */
    roleArn?: RoleArn;
    /**
     * The authentication configuration of the Amazon Q Business web experience.
     */
    authenticationConfiguration?: WebExperienceAuthConfiguration;
    /**
     * The title of the Amazon Q Business web experience.
     */
    title?: WebExperienceTitle;
    /**
     * The subtitle of the Amazon Q Business web experience.
     */
    subtitle?: WebExperienceSubtitle;
    /**
     * A customized welcome message for an end user in an Amazon Q Business web experience.
     */
    welcomeMessage?: WebExperienceWelcomeMessage;
    /**
     * Determines whether sample prompts are enabled in the web experience for an end user.
     */
    samplePromptsControlMode?: WebExperienceSamplePromptsControlMode;
  }
  export interface UpdateWebExperienceResponse {
  }
  export type Url = string;
  export interface UserAlias {
    /**
     * The identifier of the index that the user aliases are associated with.
     */
    indexId?: IndexId;
    /**
     * The identifier of the data source that the user aliases are associated with.
     */
    dataSourceId?: DataSourceId;
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
     * The user ids associated with a topic control rule.
     */
    userIds?: UserIds;
    /**
     * The user groups associated with a topic control rule.
     */
    userGroups?: UserGroups;
  }
  export interface WebExperience {
    /**
     * The identifier of your Amazon Q Business web experience.
     */
    webExperienceId?: WebExperienceId;
    /**
     * The Unix timestamp when the Amazon Q Business application was last updated.
     */
    createdAt?: Timestamp;
    /**
     * The Unix timestamp when your Amazon Q Business web experience was updated.
     */
    updatedAt?: Timestamp;
    /**
     * The endpoint URLs for your Amazon Q Business web experience. The URLs are unique and fully hosted by Amazon Web Services.
     */
    defaultEndpoint?: Url;
    /**
     * The status of your Amazon Q Business web experience.
     */
    status?: WebExperienceStatus;
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
