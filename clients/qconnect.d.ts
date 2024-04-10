import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class QConnect extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: QConnect.Types.ClientConfiguration)
  config: Config & QConnect.Types.ClientConfiguration;
  /**
   * Creates an Amazon Q in Connect assistant.
   */
  createAssistant(params: QConnect.Types.CreateAssistantRequest, callback?: (err: AWSError, data: QConnect.Types.CreateAssistantResponse) => void): Request<QConnect.Types.CreateAssistantResponse, AWSError>;
  /**
   * Creates an Amazon Q in Connect assistant.
   */
  createAssistant(callback?: (err: AWSError, data: QConnect.Types.CreateAssistantResponse) => void): Request<QConnect.Types.CreateAssistantResponse, AWSError>;
  /**
   * Creates an association between an Amazon Q in Connect assistant and another resource. Currently, the only supported association is with a knowledge base. An assistant can have only a single association.
   */
  createAssistantAssociation(params: QConnect.Types.CreateAssistantAssociationRequest, callback?: (err: AWSError, data: QConnect.Types.CreateAssistantAssociationResponse) => void): Request<QConnect.Types.CreateAssistantAssociationResponse, AWSError>;
  /**
   * Creates an association between an Amazon Q in Connect assistant and another resource. Currently, the only supported association is with a knowledge base. An assistant can have only a single association.
   */
  createAssistantAssociation(callback?: (err: AWSError, data: QConnect.Types.CreateAssistantAssociationResponse) => void): Request<QConnect.Types.CreateAssistantAssociationResponse, AWSError>;
  /**
   * Creates Amazon Q in Connect content. Before to calling this API, use StartContentUpload to upload an asset.
   */
  createContent(params: QConnect.Types.CreateContentRequest, callback?: (err: AWSError, data: QConnect.Types.CreateContentResponse) => void): Request<QConnect.Types.CreateContentResponse, AWSError>;
  /**
   * Creates Amazon Q in Connect content. Before to calling this API, use StartContentUpload to upload an asset.
   */
  createContent(callback?: (err: AWSError, data: QConnect.Types.CreateContentResponse) => void): Request<QConnect.Types.CreateContentResponse, AWSError>;
  /**
   * Creates a knowledge base.  When using this API, you cannot reuse Amazon AppIntegrations DataIntegrations with external knowledge bases such as Salesforce and ServiceNow. If you do, you'll get an InvalidRequestException error.  For example, you're programmatically managing your external knowledge base, and you want to add or remove one of the fields that is being ingested from Salesforce. Do the following:   Call DeleteKnowledgeBase.   Call DeleteDataIntegration.   Call CreateDataIntegration to recreate the DataIntegration or a create different one.   Call CreateKnowledgeBase.   
   */
  createKnowledgeBase(params: QConnect.Types.CreateKnowledgeBaseRequest, callback?: (err: AWSError, data: QConnect.Types.CreateKnowledgeBaseResponse) => void): Request<QConnect.Types.CreateKnowledgeBaseResponse, AWSError>;
  /**
   * Creates a knowledge base.  When using this API, you cannot reuse Amazon AppIntegrations DataIntegrations with external knowledge bases such as Salesforce and ServiceNow. If you do, you'll get an InvalidRequestException error.  For example, you're programmatically managing your external knowledge base, and you want to add or remove one of the fields that is being ingested from Salesforce. Do the following:   Call DeleteKnowledgeBase.   Call DeleteDataIntegration.   Call CreateDataIntegration to recreate the DataIntegration or a create different one.   Call CreateKnowledgeBase.   
   */
  createKnowledgeBase(callback?: (err: AWSError, data: QConnect.Types.CreateKnowledgeBaseResponse) => void): Request<QConnect.Types.CreateKnowledgeBaseResponse, AWSError>;
  /**
   * Creates an Amazon Q in Connect quick response.
   */
  createQuickResponse(params: QConnect.Types.CreateQuickResponseRequest, callback?: (err: AWSError, data: QConnect.Types.CreateQuickResponseResponse) => void): Request<QConnect.Types.CreateQuickResponseResponse, AWSError>;
  /**
   * Creates an Amazon Q in Connect quick response.
   */
  createQuickResponse(callback?: (err: AWSError, data: QConnect.Types.CreateQuickResponseResponse) => void): Request<QConnect.Types.CreateQuickResponseResponse, AWSError>;
  /**
   * Creates a session. A session is a contextual container used for generating recommendations. Amazon Connect creates a new Amazon Q in Connect session for each contact on which Amazon Q in Connect is enabled.
   */
  createSession(params: QConnect.Types.CreateSessionRequest, callback?: (err: AWSError, data: QConnect.Types.CreateSessionResponse) => void): Request<QConnect.Types.CreateSessionResponse, AWSError>;
  /**
   * Creates a session. A session is a contextual container used for generating recommendations. Amazon Connect creates a new Amazon Q in Connect session for each contact on which Amazon Q in Connect is enabled.
   */
  createSession(callback?: (err: AWSError, data: QConnect.Types.CreateSessionResponse) => void): Request<QConnect.Types.CreateSessionResponse, AWSError>;
  /**
   * Deletes an assistant.
   */
  deleteAssistant(params: QConnect.Types.DeleteAssistantRequest, callback?: (err: AWSError, data: QConnect.Types.DeleteAssistantResponse) => void): Request<QConnect.Types.DeleteAssistantResponse, AWSError>;
  /**
   * Deletes an assistant.
   */
  deleteAssistant(callback?: (err: AWSError, data: QConnect.Types.DeleteAssistantResponse) => void): Request<QConnect.Types.DeleteAssistantResponse, AWSError>;
  /**
   * Deletes an assistant association.
   */
  deleteAssistantAssociation(params: QConnect.Types.DeleteAssistantAssociationRequest, callback?: (err: AWSError, data: QConnect.Types.DeleteAssistantAssociationResponse) => void): Request<QConnect.Types.DeleteAssistantAssociationResponse, AWSError>;
  /**
   * Deletes an assistant association.
   */
  deleteAssistantAssociation(callback?: (err: AWSError, data: QConnect.Types.DeleteAssistantAssociationResponse) => void): Request<QConnect.Types.DeleteAssistantAssociationResponse, AWSError>;
  /**
   * Deletes the content.
   */
  deleteContent(params: QConnect.Types.DeleteContentRequest, callback?: (err: AWSError, data: QConnect.Types.DeleteContentResponse) => void): Request<QConnect.Types.DeleteContentResponse, AWSError>;
  /**
   * Deletes the content.
   */
  deleteContent(callback?: (err: AWSError, data: QConnect.Types.DeleteContentResponse) => void): Request<QConnect.Types.DeleteContentResponse, AWSError>;
  /**
   * Deletes the quick response import job.
   */
  deleteImportJob(params: QConnect.Types.DeleteImportJobRequest, callback?: (err: AWSError, data: QConnect.Types.DeleteImportJobResponse) => void): Request<QConnect.Types.DeleteImportJobResponse, AWSError>;
  /**
   * Deletes the quick response import job.
   */
  deleteImportJob(callback?: (err: AWSError, data: QConnect.Types.DeleteImportJobResponse) => void): Request<QConnect.Types.DeleteImportJobResponse, AWSError>;
  /**
   * Deletes the knowledge base.  When you use this API to delete an external knowledge base such as Salesforce or ServiceNow, you must also delete the Amazon AppIntegrations DataIntegration. This is because you can't reuse the DataIntegration after it's been associated with an external knowledge base. However, you can delete and recreate it. See DeleteDataIntegration and CreateDataIntegration in the Amazon AppIntegrations API Reference. 
   */
  deleteKnowledgeBase(params: QConnect.Types.DeleteKnowledgeBaseRequest, callback?: (err: AWSError, data: QConnect.Types.DeleteKnowledgeBaseResponse) => void): Request<QConnect.Types.DeleteKnowledgeBaseResponse, AWSError>;
  /**
   * Deletes the knowledge base.  When you use this API to delete an external knowledge base such as Salesforce or ServiceNow, you must also delete the Amazon AppIntegrations DataIntegration. This is because you can't reuse the DataIntegration after it's been associated with an external knowledge base. However, you can delete and recreate it. See DeleteDataIntegration and CreateDataIntegration in the Amazon AppIntegrations API Reference. 
   */
  deleteKnowledgeBase(callback?: (err: AWSError, data: QConnect.Types.DeleteKnowledgeBaseResponse) => void): Request<QConnect.Types.DeleteKnowledgeBaseResponse, AWSError>;
  /**
   * Deletes a quick response.
   */
  deleteQuickResponse(params: QConnect.Types.DeleteQuickResponseRequest, callback?: (err: AWSError, data: QConnect.Types.DeleteQuickResponseResponse) => void): Request<QConnect.Types.DeleteQuickResponseResponse, AWSError>;
  /**
   * Deletes a quick response.
   */
  deleteQuickResponse(callback?: (err: AWSError, data: QConnect.Types.DeleteQuickResponseResponse) => void): Request<QConnect.Types.DeleteQuickResponseResponse, AWSError>;
  /**
   * Retrieves information about an assistant.
   */
  getAssistant(params: QConnect.Types.GetAssistantRequest, callback?: (err: AWSError, data: QConnect.Types.GetAssistantResponse) => void): Request<QConnect.Types.GetAssistantResponse, AWSError>;
  /**
   * Retrieves information about an assistant.
   */
  getAssistant(callback?: (err: AWSError, data: QConnect.Types.GetAssistantResponse) => void): Request<QConnect.Types.GetAssistantResponse, AWSError>;
  /**
   * Retrieves information about an assistant association.
   */
  getAssistantAssociation(params: QConnect.Types.GetAssistantAssociationRequest, callback?: (err: AWSError, data: QConnect.Types.GetAssistantAssociationResponse) => void): Request<QConnect.Types.GetAssistantAssociationResponse, AWSError>;
  /**
   * Retrieves information about an assistant association.
   */
  getAssistantAssociation(callback?: (err: AWSError, data: QConnect.Types.GetAssistantAssociationResponse) => void): Request<QConnect.Types.GetAssistantAssociationResponse, AWSError>;
  /**
   * Retrieves content, including a pre-signed URL to download the content.
   */
  getContent(params: QConnect.Types.GetContentRequest, callback?: (err: AWSError, data: QConnect.Types.GetContentResponse) => void): Request<QConnect.Types.GetContentResponse, AWSError>;
  /**
   * Retrieves content, including a pre-signed URL to download the content.
   */
  getContent(callback?: (err: AWSError, data: QConnect.Types.GetContentResponse) => void): Request<QConnect.Types.GetContentResponse, AWSError>;
  /**
   * Retrieves summary information about the content.
   */
  getContentSummary(params: QConnect.Types.GetContentSummaryRequest, callback?: (err: AWSError, data: QConnect.Types.GetContentSummaryResponse) => void): Request<QConnect.Types.GetContentSummaryResponse, AWSError>;
  /**
   * Retrieves summary information about the content.
   */
  getContentSummary(callback?: (err: AWSError, data: QConnect.Types.GetContentSummaryResponse) => void): Request<QConnect.Types.GetContentSummaryResponse, AWSError>;
  /**
   * Retrieves the started import job.
   */
  getImportJob(params: QConnect.Types.GetImportJobRequest, callback?: (err: AWSError, data: QConnect.Types.GetImportJobResponse) => void): Request<QConnect.Types.GetImportJobResponse, AWSError>;
  /**
   * Retrieves the started import job.
   */
  getImportJob(callback?: (err: AWSError, data: QConnect.Types.GetImportJobResponse) => void): Request<QConnect.Types.GetImportJobResponse, AWSError>;
  /**
   * Retrieves information about the knowledge base.
   */
  getKnowledgeBase(params: QConnect.Types.GetKnowledgeBaseRequest, callback?: (err: AWSError, data: QConnect.Types.GetKnowledgeBaseResponse) => void): Request<QConnect.Types.GetKnowledgeBaseResponse, AWSError>;
  /**
   * Retrieves information about the knowledge base.
   */
  getKnowledgeBase(callback?: (err: AWSError, data: QConnect.Types.GetKnowledgeBaseResponse) => void): Request<QConnect.Types.GetKnowledgeBaseResponse, AWSError>;
  /**
   * Retrieves the quick response.
   */
  getQuickResponse(params: QConnect.Types.GetQuickResponseRequest, callback?: (err: AWSError, data: QConnect.Types.GetQuickResponseResponse) => void): Request<QConnect.Types.GetQuickResponseResponse, AWSError>;
  /**
   * Retrieves the quick response.
   */
  getQuickResponse(callback?: (err: AWSError, data: QConnect.Types.GetQuickResponseResponse) => void): Request<QConnect.Types.GetQuickResponseResponse, AWSError>;
  /**
   *  This API will be discontinued starting June 1, 2024. To receive generative responses after March 1, 2024, you will need to create a new Assistant in the Amazon Connect console and integrate the Amazon Q in Connect JavaScript library (amazon-q-connectjs) into your applications.  Retrieves recommendations for the specified session. To avoid retrieving the same recommendations in subsequent calls, use NotifyRecommendationsReceived. This API supports long-polling behavior with the waitTimeSeconds parameter. Short poll is the default behavior and only returns recommendations already available. To perform a manual query against an assistant, use QueryAssistant.
   */
  getRecommendations(params: QConnect.Types.GetRecommendationsRequest, callback?: (err: AWSError, data: QConnect.Types.GetRecommendationsResponse) => void): Request<QConnect.Types.GetRecommendationsResponse, AWSError>;
  /**
   *  This API will be discontinued starting June 1, 2024. To receive generative responses after March 1, 2024, you will need to create a new Assistant in the Amazon Connect console and integrate the Amazon Q in Connect JavaScript library (amazon-q-connectjs) into your applications.  Retrieves recommendations for the specified session. To avoid retrieving the same recommendations in subsequent calls, use NotifyRecommendationsReceived. This API supports long-polling behavior with the waitTimeSeconds parameter. Short poll is the default behavior and only returns recommendations already available. To perform a manual query against an assistant, use QueryAssistant.
   */
  getRecommendations(callback?: (err: AWSError, data: QConnect.Types.GetRecommendationsResponse) => void): Request<QConnect.Types.GetRecommendationsResponse, AWSError>;
  /**
   * Retrieves information for a specified session.
   */
  getSession(params: QConnect.Types.GetSessionRequest, callback?: (err: AWSError, data: QConnect.Types.GetSessionResponse) => void): Request<QConnect.Types.GetSessionResponse, AWSError>;
  /**
   * Retrieves information for a specified session.
   */
  getSession(callback?: (err: AWSError, data: QConnect.Types.GetSessionResponse) => void): Request<QConnect.Types.GetSessionResponse, AWSError>;
  /**
   * Lists information about assistant associations.
   */
  listAssistantAssociations(params: QConnect.Types.ListAssistantAssociationsRequest, callback?: (err: AWSError, data: QConnect.Types.ListAssistantAssociationsResponse) => void): Request<QConnect.Types.ListAssistantAssociationsResponse, AWSError>;
  /**
   * Lists information about assistant associations.
   */
  listAssistantAssociations(callback?: (err: AWSError, data: QConnect.Types.ListAssistantAssociationsResponse) => void): Request<QConnect.Types.ListAssistantAssociationsResponse, AWSError>;
  /**
   * Lists information about assistants.
   */
  listAssistants(params: QConnect.Types.ListAssistantsRequest, callback?: (err: AWSError, data: QConnect.Types.ListAssistantsResponse) => void): Request<QConnect.Types.ListAssistantsResponse, AWSError>;
  /**
   * Lists information about assistants.
   */
  listAssistants(callback?: (err: AWSError, data: QConnect.Types.ListAssistantsResponse) => void): Request<QConnect.Types.ListAssistantsResponse, AWSError>;
  /**
   * Lists the content.
   */
  listContents(params: QConnect.Types.ListContentsRequest, callback?: (err: AWSError, data: QConnect.Types.ListContentsResponse) => void): Request<QConnect.Types.ListContentsResponse, AWSError>;
  /**
   * Lists the content.
   */
  listContents(callback?: (err: AWSError, data: QConnect.Types.ListContentsResponse) => void): Request<QConnect.Types.ListContentsResponse, AWSError>;
  /**
   * Lists information about import jobs.
   */
  listImportJobs(params: QConnect.Types.ListImportJobsRequest, callback?: (err: AWSError, data: QConnect.Types.ListImportJobsResponse) => void): Request<QConnect.Types.ListImportJobsResponse, AWSError>;
  /**
   * Lists information about import jobs.
   */
  listImportJobs(callback?: (err: AWSError, data: QConnect.Types.ListImportJobsResponse) => void): Request<QConnect.Types.ListImportJobsResponse, AWSError>;
  /**
   * Lists the knowledge bases.
   */
  listKnowledgeBases(params: QConnect.Types.ListKnowledgeBasesRequest, callback?: (err: AWSError, data: QConnect.Types.ListKnowledgeBasesResponse) => void): Request<QConnect.Types.ListKnowledgeBasesResponse, AWSError>;
  /**
   * Lists the knowledge bases.
   */
  listKnowledgeBases(callback?: (err: AWSError, data: QConnect.Types.ListKnowledgeBasesResponse) => void): Request<QConnect.Types.ListKnowledgeBasesResponse, AWSError>;
  /**
   * Lists information about quick response.
   */
  listQuickResponses(params: QConnect.Types.ListQuickResponsesRequest, callback?: (err: AWSError, data: QConnect.Types.ListQuickResponsesResponse) => void): Request<QConnect.Types.ListQuickResponsesResponse, AWSError>;
  /**
   * Lists information about quick response.
   */
  listQuickResponses(callback?: (err: AWSError, data: QConnect.Types.ListQuickResponsesResponse) => void): Request<QConnect.Types.ListQuickResponsesResponse, AWSError>;
  /**
   * Lists the tags for the specified resource.
   */
  listTagsForResource(params: QConnect.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: QConnect.Types.ListTagsForResourceResponse) => void): Request<QConnect.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists the tags for the specified resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: QConnect.Types.ListTagsForResourceResponse) => void): Request<QConnect.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Removes the specified recommendations from the specified assistant's queue of newly available recommendations. You can use this API in conjunction with GetRecommendations and a waitTimeSeconds input for long-polling behavior and avoiding duplicate recommendations.
   */
  notifyRecommendationsReceived(params: QConnect.Types.NotifyRecommendationsReceivedRequest, callback?: (err: AWSError, data: QConnect.Types.NotifyRecommendationsReceivedResponse) => void): Request<QConnect.Types.NotifyRecommendationsReceivedResponse, AWSError>;
  /**
   * Removes the specified recommendations from the specified assistant's queue of newly available recommendations. You can use this API in conjunction with GetRecommendations and a waitTimeSeconds input for long-polling behavior and avoiding duplicate recommendations.
   */
  notifyRecommendationsReceived(callback?: (err: AWSError, data: QConnect.Types.NotifyRecommendationsReceivedResponse) => void): Request<QConnect.Types.NotifyRecommendationsReceivedResponse, AWSError>;
  /**
   * Provides feedback against the specified assistant for the specified target. This API only supports generative targets.
   */
  putFeedback(params: QConnect.Types.PutFeedbackRequest, callback?: (err: AWSError, data: QConnect.Types.PutFeedbackResponse) => void): Request<QConnect.Types.PutFeedbackResponse, AWSError>;
  /**
   * Provides feedback against the specified assistant for the specified target. This API only supports generative targets.
   */
  putFeedback(callback?: (err: AWSError, data: QConnect.Types.PutFeedbackResponse) => void): Request<QConnect.Types.PutFeedbackResponse, AWSError>;
  /**
   *  This API will be discontinued starting June 1, 2024. To receive generative responses after March 1, 2024, you will need to create a new Assistant in the Amazon Connect console and integrate the Amazon Q in Connect JavaScript library (amazon-q-connectjs) into your applications.  Performs a manual search against the specified assistant. To retrieve recommendations for an assistant, use GetRecommendations. 
   */
  queryAssistant(params: QConnect.Types.QueryAssistantRequest, callback?: (err: AWSError, data: QConnect.Types.QueryAssistantResponse) => void): Request<QConnect.Types.QueryAssistantResponse, AWSError>;
  /**
   *  This API will be discontinued starting June 1, 2024. To receive generative responses after March 1, 2024, you will need to create a new Assistant in the Amazon Connect console and integrate the Amazon Q in Connect JavaScript library (amazon-q-connectjs) into your applications.  Performs a manual search against the specified assistant. To retrieve recommendations for an assistant, use GetRecommendations. 
   */
  queryAssistant(callback?: (err: AWSError, data: QConnect.Types.QueryAssistantResponse) => void): Request<QConnect.Types.QueryAssistantResponse, AWSError>;
  /**
   * Removes a URI template from a knowledge base.
   */
  removeKnowledgeBaseTemplateUri(params: QConnect.Types.RemoveKnowledgeBaseTemplateUriRequest, callback?: (err: AWSError, data: QConnect.Types.RemoveKnowledgeBaseTemplateUriResponse) => void): Request<QConnect.Types.RemoveKnowledgeBaseTemplateUriResponse, AWSError>;
  /**
   * Removes a URI template from a knowledge base.
   */
  removeKnowledgeBaseTemplateUri(callback?: (err: AWSError, data: QConnect.Types.RemoveKnowledgeBaseTemplateUriResponse) => void): Request<QConnect.Types.RemoveKnowledgeBaseTemplateUriResponse, AWSError>;
  /**
   * Searches for content in a specified knowledge base. Can be used to get a specific content resource by its name.
   */
  searchContent(params: QConnect.Types.SearchContentRequest, callback?: (err: AWSError, data: QConnect.Types.SearchContentResponse) => void): Request<QConnect.Types.SearchContentResponse, AWSError>;
  /**
   * Searches for content in a specified knowledge base. Can be used to get a specific content resource by its name.
   */
  searchContent(callback?: (err: AWSError, data: QConnect.Types.SearchContentResponse) => void): Request<QConnect.Types.SearchContentResponse, AWSError>;
  /**
   * Searches existing Amazon Q in Connect quick responses in an Amazon Q in Connect knowledge base.
   */
  searchQuickResponses(params: QConnect.Types.SearchQuickResponsesRequest, callback?: (err: AWSError, data: QConnect.Types.SearchQuickResponsesResponse) => void): Request<QConnect.Types.SearchQuickResponsesResponse, AWSError>;
  /**
   * Searches existing Amazon Q in Connect quick responses in an Amazon Q in Connect knowledge base.
   */
  searchQuickResponses(callback?: (err: AWSError, data: QConnect.Types.SearchQuickResponsesResponse) => void): Request<QConnect.Types.SearchQuickResponsesResponse, AWSError>;
  /**
   * Searches for sessions.
   */
  searchSessions(params: QConnect.Types.SearchSessionsRequest, callback?: (err: AWSError, data: QConnect.Types.SearchSessionsResponse) => void): Request<QConnect.Types.SearchSessionsResponse, AWSError>;
  /**
   * Searches for sessions.
   */
  searchSessions(callback?: (err: AWSError, data: QConnect.Types.SearchSessionsResponse) => void): Request<QConnect.Types.SearchSessionsResponse, AWSError>;
  /**
   * Get a URL to upload content to a knowledge base. To upload content, first make a PUT request to the returned URL with your file, making sure to include the required headers. Then use CreateContent to finalize the content creation process or UpdateContent to modify an existing resource. You can only upload content to a knowledge base of type CUSTOM.
   */
  startContentUpload(params: QConnect.Types.StartContentUploadRequest, callback?: (err: AWSError, data: QConnect.Types.StartContentUploadResponse) => void): Request<QConnect.Types.StartContentUploadResponse, AWSError>;
  /**
   * Get a URL to upload content to a knowledge base. To upload content, first make a PUT request to the returned URL with your file, making sure to include the required headers. Then use CreateContent to finalize the content creation process or UpdateContent to modify an existing resource. You can only upload content to a knowledge base of type CUSTOM.
   */
  startContentUpload(callback?: (err: AWSError, data: QConnect.Types.StartContentUploadResponse) => void): Request<QConnect.Types.StartContentUploadResponse, AWSError>;
  /**
   * Start an asynchronous job to import Amazon Q in Connect resources from an uploaded source file. Before calling this API, use StartContentUpload to upload an asset that contains the resource data.   For importing Amazon Q in Connect quick responses, you need to upload a csv file including the quick responses. For information about how to format the csv file for importing quick responses, see Import quick responses.  
   */
  startImportJob(params: QConnect.Types.StartImportJobRequest, callback?: (err: AWSError, data: QConnect.Types.StartImportJobResponse) => void): Request<QConnect.Types.StartImportJobResponse, AWSError>;
  /**
   * Start an asynchronous job to import Amazon Q in Connect resources from an uploaded source file. Before calling this API, use StartContentUpload to upload an asset that contains the resource data.   For importing Amazon Q in Connect quick responses, you need to upload a csv file including the quick responses. For information about how to format the csv file for importing quick responses, see Import quick responses.  
   */
  startImportJob(callback?: (err: AWSError, data: QConnect.Types.StartImportJobResponse) => void): Request<QConnect.Types.StartImportJobResponse, AWSError>;
  /**
   * Adds the specified tags to the specified resource.
   */
  tagResource(params: QConnect.Types.TagResourceRequest, callback?: (err: AWSError, data: QConnect.Types.TagResourceResponse) => void): Request<QConnect.Types.TagResourceResponse, AWSError>;
  /**
   * Adds the specified tags to the specified resource.
   */
  tagResource(callback?: (err: AWSError, data: QConnect.Types.TagResourceResponse) => void): Request<QConnect.Types.TagResourceResponse, AWSError>;
  /**
   * Removes the specified tags from the specified resource.
   */
  untagResource(params: QConnect.Types.UntagResourceRequest, callback?: (err: AWSError, data: QConnect.Types.UntagResourceResponse) => void): Request<QConnect.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes the specified tags from the specified resource.
   */
  untagResource(callback?: (err: AWSError, data: QConnect.Types.UntagResourceResponse) => void): Request<QConnect.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates information about the content.
   */
  updateContent(params: QConnect.Types.UpdateContentRequest, callback?: (err: AWSError, data: QConnect.Types.UpdateContentResponse) => void): Request<QConnect.Types.UpdateContentResponse, AWSError>;
  /**
   * Updates information about the content.
   */
  updateContent(callback?: (err: AWSError, data: QConnect.Types.UpdateContentResponse) => void): Request<QConnect.Types.UpdateContentResponse, AWSError>;
  /**
   * Updates the template URI of a knowledge base. This is only supported for knowledge bases of type EXTERNAL. Include a single variable in ${variable} format; this interpolated by Amazon Q in Connect using ingested content. For example, if you ingest a Salesforce article, it has an Id value, and you can set the template URI to https://myInstanceName.lightning.force.com/lightning/r/Knowledge__kav/*${Id}*view. 
   */
  updateKnowledgeBaseTemplateUri(params: QConnect.Types.UpdateKnowledgeBaseTemplateUriRequest, callback?: (err: AWSError, data: QConnect.Types.UpdateKnowledgeBaseTemplateUriResponse) => void): Request<QConnect.Types.UpdateKnowledgeBaseTemplateUriResponse, AWSError>;
  /**
   * Updates the template URI of a knowledge base. This is only supported for knowledge bases of type EXTERNAL. Include a single variable in ${variable} format; this interpolated by Amazon Q in Connect using ingested content. For example, if you ingest a Salesforce article, it has an Id value, and you can set the template URI to https://myInstanceName.lightning.force.com/lightning/r/Knowledge__kav/*${Id}*view. 
   */
  updateKnowledgeBaseTemplateUri(callback?: (err: AWSError, data: QConnect.Types.UpdateKnowledgeBaseTemplateUriResponse) => void): Request<QConnect.Types.UpdateKnowledgeBaseTemplateUriResponse, AWSError>;
  /**
   * Updates an existing Amazon Q in Connect quick response.
   */
  updateQuickResponse(params: QConnect.Types.UpdateQuickResponseRequest, callback?: (err: AWSError, data: QConnect.Types.UpdateQuickResponseResponse) => void): Request<QConnect.Types.UpdateQuickResponseResponse, AWSError>;
  /**
   * Updates an existing Amazon Q in Connect quick response.
   */
  updateQuickResponse(callback?: (err: AWSError, data: QConnect.Types.UpdateQuickResponseResponse) => void): Request<QConnect.Types.UpdateQuickResponseResponse, AWSError>;
  /**
   * Updates a session. A session is a contextual container used for generating recommendations. Amazon Connect updates the existing Amazon Q in Connect session for each contact on which Amazon Q in Connect is enabled.
   */
  updateSession(params: QConnect.Types.UpdateSessionRequest, callback?: (err: AWSError, data: QConnect.Types.UpdateSessionResponse) => void): Request<QConnect.Types.UpdateSessionResponse, AWSError>;
  /**
   * Updates a session. A session is a contextual container used for generating recommendations. Amazon Connect updates the existing Amazon Q in Connect session for each contact on which Amazon Q in Connect is enabled.
   */
  updateSession(callback?: (err: AWSError, data: QConnect.Types.UpdateSessionResponse) => void): Request<QConnect.Types.UpdateSessionResponse, AWSError>;
}
declare namespace QConnect {
  export type AndConditions = TagCondition[];
  export interface AppIntegrationsConfiguration {
    /**
     * The Amazon Resource Name (ARN) of the AppIntegrations DataIntegration to use for ingesting content.    For  Salesforce, your AppIntegrations DataIntegration must have an ObjectConfiguration if objectFields is not provided, including at least Id, ArticleNumber, VersionNumber, Title, PublishStatus, and IsDeleted as source fields.     For  ServiceNow, your AppIntegrations DataIntegration must have an ObjectConfiguration if objectFields is not provided, including at least number, short_description, sys_mod_count, workflow_state, and active as source fields.     For  Zendesk, your AppIntegrations DataIntegration must have an ObjectConfiguration if objectFields is not provided, including at least id, title, updated_at, and draft as source fields.     For SharePoint, your AppIntegrations DataIntegration must have a FileConfiguration, including only file extensions that are among docx, pdf, html, htm, and txt.     For Amazon S3, the ObjectConfiguration and FileConfiguration of your AppIntegrations DataIntegration must be null. The SourceURI of your DataIntegration must use the following format: s3://your_s3_bucket_name.  The bucket policy of the corresponding S3 bucket must allow the Amazon Web Services principal app-integrations.amazonaws.com to perform s3:ListBucket, s3:GetObject, and s3:GetBucketLocation against the bucket.   
     */
    appIntegrationArn: GenericArn;
    /**
     * The fields from the source that are made available to your agents in Amazon Q in Connect. Optional if ObjectConfiguration is included in the provided DataIntegration.     For  Salesforce, you must include at least Id, ArticleNumber, VersionNumber, Title, PublishStatus, and IsDeleted.    For  ServiceNow, you must include at least number, short_description, sys_mod_count, workflow_state, and active.    For  Zendesk, you must include at least id, title, updated_at, and draft.    Make sure to include additional fields. These fields are indexed and used to source recommendations. 
     */
    objectFields?: ObjectFieldsList;
  }
  export type Arn = string;
  export interface AssistantAssociationData {
    /**
     * The Amazon Resource Name (ARN) of the Amazon Q in Connect assistant.
     */
    assistantArn: Arn;
    /**
     * The Amazon Resource Name (ARN) of the assistant association.
     */
    assistantAssociationArn: Arn;
    /**
     * The identifier of the assistant association.
     */
    assistantAssociationId: Uuid;
    /**
     * The identifier of the Amazon Q in Connect assistant.
     */
    assistantId: Uuid;
    /**
     * A union type that currently has a single argument, the knowledge base ID.
     */
    associationData: AssistantAssociationOutputData;
    /**
     * The type of association.
     */
    associationType: AssociationType;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: Tags;
  }
  export interface AssistantAssociationInputData {
    /**
     * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base.
     */
    knowledgeBaseId?: Uuid;
  }
  export interface AssistantAssociationOutputData {
    /**
     * The knowledge base where output data is sent.
     */
    knowledgeBaseAssociation?: KnowledgeBaseAssociationData;
  }
  export interface AssistantAssociationSummary {
    /**
     * The Amazon Resource Name (ARN) of the Amazon Q in Connect assistant.
     */
    assistantArn: Arn;
    /**
     * The Amazon Resource Name (ARN) of the assistant association.
     */
    assistantAssociationArn: Arn;
    /**
     * The identifier of the assistant association.
     */
    assistantAssociationId: Uuid;
    /**
     * The identifier of the Amazon Q in Connect assistant.
     */
    assistantId: Uuid;
    /**
     * The association data.
     */
    associationData: AssistantAssociationOutputData;
    /**
     * The type of association.
     */
    associationType: AssociationType;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: Tags;
  }
  export type AssistantAssociationSummaryList = AssistantAssociationSummary[];
  export interface AssistantCapabilityConfiguration {
    /**
     * The type of Amazon Q in Connect assistant capability. 
     */
    type?: AssistantCapabilityType;
  }
  export type AssistantCapabilityType = "V1"|"V2"|string;
  export interface AssistantData {
    /**
     * The Amazon Resource Name (ARN) of the Amazon Q in Connect assistant.
     */
    assistantArn: Arn;
    /**
     * The identifier of the Amazon Q in Connect assistant.
     */
    assistantId: Uuid;
    /**
     * The configuration information for the Amazon Q in Connect assistant capability. 
     */
    capabilityConfiguration?: AssistantCapabilityConfiguration;
    /**
     * The description.
     */
    description?: Description;
    /**
     * The configuration information for the Amazon Q in Connect assistant integration.
     */
    integrationConfiguration?: AssistantIntegrationConfiguration;
    /**
     * The name.
     */
    name: Name;
    /**
     * The configuration information for the customer managed key used for encryption.  This KMS key must have a policy that allows kms:CreateGrant, kms:DescribeKey, kms:Decrypt, and kms:GenerateDataKey* permissions to the IAM identity using the key to invoke Amazon Q in Connect. To use Amazon Q in Connect with chat, the key policy must also allow kms:Decrypt, kms:GenerateDataKey*, and kms:DescribeKey permissions to the connect.amazonaws.com service principal.  For more information about setting up a customer managed key for Amazon Q in Connect, see Enable Amazon Q in Connect for your instance.
     */
    serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
    /**
     * The status of the assistant.
     */
    status: AssistantStatus;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: Tags;
    /**
     * The type of assistant.
     */
    type: AssistantType;
  }
  export interface AssistantIntegrationConfiguration {
    /**
     * The Amazon Resource Name (ARN) of the integrated Amazon SNS topic used for streaming chat messages.
     */
    topicIntegrationArn?: GenericArn;
  }
  export type AssistantList = AssistantSummary[];
  export type AssistantStatus = "CREATE_IN_PROGRESS"|"CREATE_FAILED"|"ACTIVE"|"DELETE_IN_PROGRESS"|"DELETE_FAILED"|"DELETED"|string;
  export interface AssistantSummary {
    /**
     * The Amazon Resource Name (ARN) of the Amazon Q in Connect assistant.
     */
    assistantArn: Arn;
    /**
     * The identifier of the Amazon Q in Connect assistant.
     */
    assistantId: Uuid;
    /**
     * The configuration information for the Amazon Q in Connect assistant capability. 
     */
    capabilityConfiguration?: AssistantCapabilityConfiguration;
    /**
     * The description of the assistant.
     */
    description?: Description;
    /**
     * The configuration information for the Amazon Q in Connect assistant integration.
     */
    integrationConfiguration?: AssistantIntegrationConfiguration;
    /**
     * The name of the assistant.
     */
    name: Name;
    /**
     * The configuration information for the customer managed key used for encryption.  This KMS key must have a policy that allows kms:CreateGrant, kms:DescribeKey, kms:Decrypt, and kms:GenerateDataKey* permissions to the IAM identity using the key to invoke Amazon Q in Connect. To use Amazon Q in Connect with chat, the key policy must also allow kms:Decrypt, kms:GenerateDataKey*, and kms:DescribeKey permissions to the connect.amazonaws.com service principal.  For more information about setting up a customer managed key for Amazon Q in Connect, see Enable Amazon Q in Connect for your instance.
     */
    serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
    /**
     * The status of the assistant.
     */
    status: AssistantStatus;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: Tags;
    /**
     * The type of the assistant.
     */
    type: AssistantType;
  }
  export type AssistantType = "AGENT"|string;
  export type AssociationType = "KNOWLEDGE_BASE"|string;
  export type Boolean = boolean;
  export type Channel = string;
  export type Channels = Channel[];
  export type ClientToken = string;
  export interface Configuration {
    /**
     * The configuration information of the Amazon Connect data source.
     */
    connectConfiguration?: ConnectConfiguration;
  }
  export interface ConnectConfiguration {
    /**
     * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
     */
    instanceId?: NonEmptyString;
  }
  export type ContactAttributeKey = string;
  export type ContactAttributeKeys = ContactAttributeKey[];
  export type ContactAttributeValue = string;
  export type ContactAttributes = {[key: string]: ContactAttributeValue};
  export interface ContentData {
    /**
     * The Amazon Resource Name (ARN) of the content.
     */
    contentArn: Arn;
    /**
     * The identifier of the content.
     */
    contentId: Uuid;
    /**
     * The media type of the content.
     */
    contentType: ContentType;
    /**
     * The Amazon Resource Name (ARN) of the knowledge base.
     */
    knowledgeBaseArn: Arn;
    /**
     * The identifier of the knowledge base.
     */
    knowledgeBaseId: Uuid;
    /**
     * The URI of the content.
     */
    linkOutUri?: Uri;
    /**
     * A key/value map to store attributes without affecting tagging or recommendations. For example, when synchronizing data between an external system and Amazon Q in Connect, you can store an external version identifier as metadata to utilize for determining drift.
     */
    metadata: ContentMetadata;
    /**
     * The name of the content.
     */
    name: Name;
    /**
     * The identifier of the content revision.
     */
    revisionId: NonEmptyString;
    /**
     * The status of the content.
     */
    status: ContentStatus;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: Tags;
    /**
     * The title of the content.
     */
    title: ContentTitle;
    /**
     * The URL of the content.
     */
    url: Url;
    /**
     * The expiration time of the URL as an epoch timestamp.
     */
    urlExpiry: SyntheticTimestamp_epoch_seconds;
  }
  export interface ContentDataDetails {
    /**
     * Details about the content ranking data.
     */
    rankingData: RankingData;
    /**
     * Details about the content text data.
     */
    textData: TextData;
  }
  export interface ContentFeedbackData {
    /**
     * Information about the feedback for a generative target type.
     */
    generativeContentFeedbackData?: GenerativeContentFeedbackData;
  }
  export type ContentMetadata = {[key: string]: NonEmptyString};
  export interface ContentReference {
    /**
     * The Amazon Resource Name (ARN) of the content.
     */
    contentArn?: Arn;
    /**
     * The identifier of the content.
     */
    contentId?: Uuid;
    /**
     * The Amazon Resource Name (ARN) of the knowledge base.
     */
    knowledgeBaseArn?: Arn;
    /**
     * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base.
     */
    knowledgeBaseId?: Uuid;
  }
  export type ContentStatus = "CREATE_IN_PROGRESS"|"CREATE_FAILED"|"ACTIVE"|"DELETE_IN_PROGRESS"|"DELETE_FAILED"|"DELETED"|"UPDATE_FAILED"|string;
  export interface ContentSummary {
    /**
     * The Amazon Resource Name (ARN) of the content.
     */
    contentArn: Arn;
    /**
     * The identifier of the content.
     */
    contentId: Uuid;
    /**
     * The media type of the content.
     */
    contentType: ContentType;
    /**
     * The Amazon Resource Name (ARN) of the knowledge base.
     */
    knowledgeBaseArn: Arn;
    /**
     * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base.
     */
    knowledgeBaseId: Uuid;
    /**
     * A key/value map to store attributes without affecting tagging or recommendations. For example, when synchronizing data between an external system and Amazon Q in Connect, you can store an external version identifier as metadata to utilize for determining drift.
     */
    metadata: ContentMetadata;
    /**
     * The name of the content.
     */
    name: Name;
    /**
     * The identifier of the revision of the content.
     */
    revisionId: NonEmptyString;
    /**
     * The status of the content.
     */
    status: ContentStatus;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: Tags;
    /**
     * The title of the content.
     */
    title: ContentTitle;
  }
  export type ContentSummaryList = ContentSummary[];
  export type ContentTitle = string;
  export type ContentType = string;
  export interface CreateAssistantAssociationRequest {
    /**
     * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    assistantId: UuidOrArn;
    /**
     * The identifier of the associated resource.
     */
    association: AssistantAssociationInputData;
    /**
     * The type of association.
     */
    associationType: AssociationType;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs.
     */
    clientToken?: ClientToken;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: Tags;
  }
  export interface CreateAssistantAssociationResponse {
    /**
     * The assistant association.
     */
    assistantAssociation?: AssistantAssociationData;
  }
  export interface CreateAssistantRequest {
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs.
     */
    clientToken?: ClientToken;
    /**
     * The description of the assistant.
     */
    description?: Description;
    /**
     * The name of the assistant.
     */
    name: Name;
    /**
     * The configuration information for the customer managed key used for encryption.  The customer managed key must have a policy that allows kms:CreateGrant,  kms:DescribeKey, kms:Decrypt, and kms:GenerateDataKey* permissions to the IAM identity using the key to invoke Amazon Q in Connect. To use Amazon Q in Connect with chat, the key policy must also allow kms:Decrypt, kms:GenerateDataKey*, and kms:DescribeKey permissions to the connect.amazonaws.com service principal.  For more information about setting up a customer managed key for Amazon Q in Connect, see Enable Amazon Q in Connect for your instance.
     */
    serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: Tags;
    /**
     * The type of assistant.
     */
    type: AssistantType;
  }
  export interface CreateAssistantResponse {
    /**
     * Information about the assistant.
     */
    assistant?: AssistantData;
  }
  export interface CreateContentRequest {
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs.
     */
    clientToken?: NonEmptyString;
    /**
     * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    knowledgeBaseId: UuidOrArn;
    /**
     * A key/value map to store attributes without affecting tagging or recommendations. For example, when synchronizing data between an external system and Amazon Q in Connect, you can store an external version identifier as metadata to utilize for determining drift.
     */
    metadata?: ContentMetadata;
    /**
     * The name of the content. Each piece of content in a knowledge base must have a unique name. You can retrieve a piece of content using only its knowledge base and its name with the SearchContent API.
     */
    name: Name;
    /**
     * The URI you want to use for the article. If the knowledge base has a templateUri, setting this argument overrides it for this piece of content.
     */
    overrideLinkOutUri?: Uri;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: Tags;
    /**
     * The title of the content. If not set, the title is equal to the name.
     */
    title?: ContentTitle;
    /**
     * A pointer to the uploaded asset. This value is returned by StartContentUpload.
     */
    uploadId: UploadId;
  }
  export interface CreateContentResponse {
    /**
     * The content.
     */
    content?: ContentData;
  }
  export interface CreateKnowledgeBaseRequest {
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs.
     */
    clientToken?: NonEmptyString;
    /**
     * The description.
     */
    description?: Description;
    /**
     * The type of knowledge base. Only CUSTOM knowledge bases allow you to upload your own content. EXTERNAL knowledge bases support integrations with third-party systems whose content is synchronized automatically. 
     */
    knowledgeBaseType: KnowledgeBaseType;
    /**
     * The name of the knowledge base.
     */
    name: Name;
    /**
     * Information about how to render the content.
     */
    renderingConfiguration?: RenderingConfiguration;
    /**
     * The configuration information for the customer managed key used for encryption.  This KMS key must have a policy that allows kms:CreateGrant, kms:DescribeKey, kms:Decrypt, and kms:GenerateDataKey* permissions to the IAM identity using the key to invoke Amazon Q in Connect. For more information about setting up a customer managed key for Amazon Q in Connect, see Enable Amazon Q in Connect for your instance.
     */
    serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
    /**
     * The source of the knowledge base content. Only set this argument for EXTERNAL knowledge bases.
     */
    sourceConfiguration?: SourceConfiguration;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: Tags;
  }
  export interface CreateKnowledgeBaseResponse {
    /**
     * The knowledge base.
     */
    knowledgeBase?: KnowledgeBaseData;
  }
  export interface CreateQuickResponseRequest {
    /**
     * The Amazon Connect channels this quick response applies to.
     */
    channels?: Channels;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs.
     */
    clientToken?: NonEmptyString;
    /**
     * The content of the quick response.
     */
    content: QuickResponseDataProvider;
    /**
     * The media type of the quick response content.   Use application/x.quickresponse;format=plain for a quick response written in plain text.   Use application/x.quickresponse;format=markdown for a quick response written in richtext.  
     */
    contentType?: QuickResponseType;
    /**
     * The description of the quick response.
     */
    description?: QuickResponseDescription;
    /**
     * The configuration information of the user groups that the quick response is accessible to.
     */
    groupingConfiguration?: GroupingConfiguration;
    /**
     * Whether the quick response is active.
     */
    isActive?: Boolean;
    /**
     * The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    knowledgeBaseId: UuidOrArn;
    /**
     * The language code value for the language in which the quick response is written. The supported language codes include de_DE, en_US, es_ES, fr_FR, id_ID, it_IT, ja_JP, ko_KR, pt_BR, zh_CN, zh_TW 
     */
    language?: LanguageCode;
    /**
     * The name of the quick response.
     */
    name: QuickResponseName;
    /**
     * The shortcut key of the quick response. The value should be unique across the knowledge base. 
     */
    shortcutKey?: ShortCutKey;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: Tags;
  }
  export interface CreateQuickResponseResponse {
    /**
     * The quick response.
     */
    quickResponse?: QuickResponseData;
  }
  export interface CreateSessionRequest {
    /**
     * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    assistantId: UuidOrArn;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs.
     */
    clientToken?: ClientToken;
    /**
     * The description.
     */
    description?: Description;
    /**
     * The name of the session.
     */
    name: Name;
    /**
     * An object that can be used to specify Tag conditions. 
     */
    tagFilter?: TagFilter;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: Tags;
  }
  export interface CreateSessionResponse {
    /**
     * The session.
     */
    session?: SessionData;
  }
  export interface DataDetails {
    /**
     * Details about the content data.
     */
    contentData?: ContentDataDetails;
    /**
     *  Details about the generative data.
     */
    generativeData?: GenerativeDataDetails;
    /**
     * Details about the content data.
     */
    sourceContentData?: SourceContentDataDetails;
  }
  export interface DataReference {
    contentReference?: ContentReference;
    /**
     * Reference information about the generative content.
     */
    generativeReference?: GenerativeReference;
  }
  export interface DataSummary {
    /**
     * Details about the data.
     */
    details: DataDetails;
    /**
     * Reference information about the content.
     */
    reference: DataReference;
  }
  export type DataSummaryList = DataSummary[];
  export interface DeleteAssistantAssociationRequest {
    /**
     * The identifier of the assistant association. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    assistantAssociationId: UuidOrArn;
    /**
     * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    assistantId: UuidOrArn;
  }
  export interface DeleteAssistantAssociationResponse {
  }
  export interface DeleteAssistantRequest {
    /**
     * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    assistantId: UuidOrArn;
  }
  export interface DeleteAssistantResponse {
  }
  export interface DeleteContentRequest {
    /**
     * The identifier of the content. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    contentId: UuidOrArn;
    /**
     * The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    knowledgeBaseId: UuidOrArn;
  }
  export interface DeleteContentResponse {
  }
  export interface DeleteImportJobRequest {
    /**
     * The identifier of the import job to be deleted.
     */
    importJobId: Uuid;
    /**
     * The identifier of the knowledge base.
     */
    knowledgeBaseId: UuidOrArn;
  }
  export interface DeleteImportJobResponse {
  }
  export interface DeleteKnowledgeBaseRequest {
    /**
     * The knowledge base to delete content from. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    knowledgeBaseId: UuidOrArn;
  }
  export interface DeleteKnowledgeBaseResponse {
  }
  export interface DeleteQuickResponseRequest {
    /**
     * The knowledge base from which the quick response is deleted. The identifier of the knowledge base.
     */
    knowledgeBaseId: UuidOrArn;
    /**
     * The identifier of the quick response to delete.
     */
    quickResponseId: UuidOrArn;
  }
  export interface DeleteQuickResponseResponse {
  }
  export type Description = string;
  export interface Document {
    /**
     * A reference to the content resource.
     */
    contentReference: ContentReference;
    /**
     * The excerpt from the document.
     */
    excerpt?: DocumentText;
    /**
     * The title of the document.
     */
    title?: DocumentText;
  }
  export interface DocumentText {
    /**
     * Highlights in the document text.
     */
    highlights?: Highlights;
    /**
     * Text in the document.
     */
    text?: SensitiveString;
  }
  export type ExternalSource = "AMAZON_CONNECT"|string;
  export interface ExternalSourceConfiguration {
    /**
     * The configuration information of the external data source.
     */
    configuration: Configuration;
    /**
     * The type of the external data source.
     */
    source: ExternalSource;
  }
  export interface Filter {
    /**
     * The field on which to filter.
     */
    field: FilterField;
    /**
     * The operator to use for comparing the field’s value with the provided value.
     */
    operator: FilterOperator;
    /**
     * The desired field value on which to filter.
     */
    value: NonEmptyString;
  }
  export type FilterField = "NAME"|string;
  export type FilterList = Filter[];
  export type FilterOperator = "EQUALS"|string;
  export interface GenerativeContentFeedbackData {
    /**
     * The relevance of the feedback.
     */
    relevance: Relevance;
  }
  export interface GenerativeDataDetails {
    /**
     * The LLM response.
     */
    completion: SensitiveString;
    /**
     * Details about the generative content ranking data.
     */
    rankingData: RankingData;
    /**
     * The references used to generative the LLM response.
     */
    references: DataSummaryList;
  }
  export interface GenerativeReference {
    /**
     *  The identifier of the LLM model. 
     */
    generationId?: Uuid;
    /**
     * The identifier of the LLM model. 
     */
    modelId?: LlmModelId;
  }
  export type GenericArn = string;
  export interface GetAssistantAssociationRequest {
    /**
     * The identifier of the assistant association. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    assistantAssociationId: UuidOrArn;
    /**
     * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    assistantId: UuidOrArn;
  }
  export interface GetAssistantAssociationResponse {
    /**
     * The assistant association.
     */
    assistantAssociation?: AssistantAssociationData;
  }
  export interface GetAssistantRequest {
    /**
     * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    assistantId: UuidOrArn;
  }
  export interface GetAssistantResponse {
    /**
     * Information about the assistant.
     */
    assistant?: AssistantData;
  }
  export interface GetContentRequest {
    /**
     * The identifier of the content. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    contentId: UuidOrArn;
    /**
     * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    knowledgeBaseId: UuidOrArn;
  }
  export interface GetContentResponse {
    /**
     * The content.
     */
    content?: ContentData;
  }
  export interface GetContentSummaryRequest {
    /**
     * The identifier of the content. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    contentId: UuidOrArn;
    /**
     * The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    knowledgeBaseId: UuidOrArn;
  }
  export interface GetContentSummaryResponse {
    /**
     * The content summary.
     */
    contentSummary?: ContentSummary;
  }
  export interface GetImportJobRequest {
    /**
     * The identifier of the import job to retrieve.
     */
    importJobId: Uuid;
    /**
     * The identifier of the knowledge base that the import job belongs to.
     */
    knowledgeBaseId: UuidOrArn;
  }
  export interface GetImportJobResponse {
    /**
     * The import job.
     */
    importJob?: ImportJobData;
  }
  export interface GetKnowledgeBaseRequest {
    /**
     * The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    knowledgeBaseId: UuidOrArn;
  }
  export interface GetKnowledgeBaseResponse {
    /**
     * The knowledge base.
     */
    knowledgeBase?: KnowledgeBaseData;
  }
  export interface GetQuickResponseRequest {
    /**
     * The identifier of the knowledge base. This should be a QUICK_RESPONSES type knowledge base.
     */
    knowledgeBaseId: UuidOrArn;
    /**
     * The identifier of the quick response.
     */
    quickResponseId: UuidOrArn;
  }
  export interface GetQuickResponseResponse {
    /**
     * The quick response.
     */
    quickResponse?: QuickResponseData;
  }
  export interface GetRecommendationsRequest {
    /**
     * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    assistantId: UuidOrArn;
    /**
     * The maximum number of results to return per page.
     */
    maxResults?: MaxResults;
    /**
     * The identifier of the session. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    sessionId: UuidOrArn;
    /**
     * The duration (in seconds) for which the call waits for a recommendation to be made available before returning. If a recommendation is available, the call returns sooner than WaitTimeSeconds. If no messages are available and the wait time expires, the call returns successfully with an empty list.
     */
    waitTimeSeconds?: WaitTimeSeconds;
  }
  export interface GetRecommendationsResponse {
    /**
     * The recommendations.
     */
    recommendations: RecommendationList;
    /**
     * The triggers corresponding to recommendations.
     */
    triggers?: RecommendationTriggerList;
  }
  export interface GetSessionRequest {
    /**
     * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    assistantId: UuidOrArn;
    /**
     * The identifier of the session. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    sessionId: UuidOrArn;
  }
  export interface GetSessionResponse {
    /**
     * The session.
     */
    session?: SessionData;
  }
  export interface GroupingConfiguration {
    /**
     * The criteria used for grouping Amazon Q in Connect users. The following is the list of supported criteria values.    RoutingProfileArn: Grouping the users by their Amazon Connect routing profile ARN. User should have SearchRoutingProfile and DescribeRoutingProfile permissions when setting criteria to this value.  
     */
    criteria?: GroupingCriteria;
    /**
     * The list of values that define different groups of Amazon Q in Connect users.   When setting criteria to RoutingProfileArn, you need to provide a list of ARNs of Amazon Connect routing profiles as values of this parameter.  
     */
    values?: GroupingValues;
  }
  export type GroupingCriteria = string;
  export type GroupingValue = string;
  export type GroupingValues = GroupingValue[];
  export type Headers = {[key: string]: NonEmptyString};
  export interface Highlight {
    /**
     * The offset for the start of the highlight.
     */
    beginOffsetInclusive?: HighlightOffset;
    /**
     * The offset for the end of the highlight.
     */
    endOffsetExclusive?: HighlightOffset;
  }
  export type HighlightOffset = number;
  export type Highlights = Highlight[];
  export interface ImportJobData {
    /**
     * The timestamp when the import job was created.
     */
    createdTime: SyntheticTimestamp_epoch_seconds;
    externalSourceConfiguration?: ExternalSourceConfiguration;
    /**
     * The link to donwload the information of resource data that failed to be imported.
     */
    failedRecordReport?: Url;
    /**
     * The identifier of the import job.
     */
    importJobId: Uuid;
    /**
     * The type of the import job.
     */
    importJobType: ImportJobType;
    /**
     * The Amazon Resource Name (ARN) of the knowledge base.
     */
    knowledgeBaseArn: Arn;
    /**
     * The identifier of the knowledge base.
     */
    knowledgeBaseId: Uuid;
    /**
     * The timestamp when the import job data was last modified.
     */
    lastModifiedTime: SyntheticTimestamp_epoch_seconds;
    /**
     * The metadata fields of the imported Amazon Q in Connect resources.
     */
    metadata?: ContentMetadata;
    /**
     * The status of the import job.
     */
    status: ImportJobStatus;
    /**
     * A pointer to the uploaded asset. This value is returned by StartContentUpload.
     */
    uploadId: UploadId;
    /**
     * The download link to the resource file that is uploaded to the import job.
     */
    url: Url;
    /**
     * The expiration time of the URL as an epoch timestamp.
     */
    urlExpiry: SyntheticTimestamp_epoch_seconds;
  }
  export type ImportJobList = ImportJobSummary[];
  export type ImportJobStatus = "START_IN_PROGRESS"|"FAILED"|"COMPLETE"|"DELETE_IN_PROGRESS"|"DELETE_FAILED"|"DELETED"|string;
  export interface ImportJobSummary {
    /**
     * The timestamp when the import job was created.
     */
    createdTime: SyntheticTimestamp_epoch_seconds;
    /**
     * The configuration information of the external source that the resource data are imported from.
     */
    externalSourceConfiguration?: ExternalSourceConfiguration;
    /**
     * The identifier of the import job.
     */
    importJobId: Uuid;
    /**
     * The type of import job.
     */
    importJobType: ImportJobType;
    /**
     * The Amazon Resource Name (ARN) of the knowledge base.
     */
    knowledgeBaseArn: Arn;
    /**
     * The identifier of the knowledge base.
     */
    knowledgeBaseId: Uuid;
    /**
     * The timestamp when the import job was last modified.
     */
    lastModifiedTime: SyntheticTimestamp_epoch_seconds;
    /**
     * The metadata fields of the imported Amazon Q in Connect resources.
     */
    metadata?: ContentMetadata;
    /**
     * The status of the import job.
     */
    status: ImportJobStatus;
    /**
     * A pointer to the uploaded asset. This value is returned by StartContentUpload.
     */
    uploadId: UploadId;
  }
  export type ImportJobType = "QUICK_RESPONSES"|string;
  export interface KnowledgeBaseAssociationData {
    /**
     * The Amazon Resource Name (ARN) of the knowledge base.
     */
    knowledgeBaseArn?: Arn;
    /**
     * The identifier of the knowledge base.
     */
    knowledgeBaseId?: Uuid;
  }
  export interface KnowledgeBaseData {
    /**
     * The description.
     */
    description?: Description;
    /**
     * The Amazon Resource Name (ARN) of the knowledge base.
     */
    knowledgeBaseArn: Arn;
    /**
     * The identifier of the knowledge base.
     */
    knowledgeBaseId: Uuid;
    /**
     * The type of knowledge base.
     */
    knowledgeBaseType: KnowledgeBaseType;
    /**
     * An epoch timestamp indicating the most recent content modification inside the knowledge base. If no content exists in a knowledge base, this value is unset.
     */
    lastContentModificationTime?: SyntheticTimestamp_epoch_seconds;
    /**
     * The name of the knowledge base.
     */
    name: Name;
    /**
     * Information about how to render the content.
     */
    renderingConfiguration?: RenderingConfiguration;
    /**
     * The configuration information for the customer managed key used for encryption.  This KMS key must have a policy that allows kms:CreateGrant, kms:DescribeKey, kms:Decrypt, and kms:GenerateDataKey* permissions to the IAM identity using the key to invoke Amazon Q in Connect.  For more information about setting up a customer managed key for Amazon Q in Connect, see Enable Amazon Q in Connect for your instance.
     */
    serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
    /**
     * Source configuration information about the knowledge base.
     */
    sourceConfiguration?: SourceConfiguration;
    /**
     * The status of the knowledge base.
     */
    status: KnowledgeBaseStatus;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: Tags;
  }
  export type KnowledgeBaseList = KnowledgeBaseSummary[];
  export type KnowledgeBaseStatus = "CREATE_IN_PROGRESS"|"CREATE_FAILED"|"ACTIVE"|"DELETE_IN_PROGRESS"|"DELETE_FAILED"|"DELETED"|string;
  export interface KnowledgeBaseSummary {
    /**
     * The description of the knowledge base.
     */
    description?: Description;
    /**
     * The Amazon Resource Name (ARN) of the knowledge base.
     */
    knowledgeBaseArn: Arn;
    /**
     * The identifier of the knowledge base.
     */
    knowledgeBaseId: Uuid;
    /**
     * The type of knowledge base.
     */
    knowledgeBaseType: KnowledgeBaseType;
    /**
     * The name of the knowledge base.
     */
    name: Name;
    /**
     * Information about how to render the content.
     */
    renderingConfiguration?: RenderingConfiguration;
    /**
     * The configuration information for the customer managed key used for encryption.  This KMS key must have a policy that allows kms:CreateGrant, kms:DescribeKey, kms:Decrypt, and kms:GenerateDataKey* permissions to the IAM identity using the key to invoke Amazon Q in Connect.  For more information about setting up a customer managed key for Amazon Q in Connect, see Enable Amazon Q in Connect for your instance.
     */
    serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
    /**
     * Configuration information about the external data source.
     */
    sourceConfiguration?: SourceConfiguration;
    /**
     * The status of the knowledge base summary.
     */
    status: KnowledgeBaseStatus;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: Tags;
  }
  export type KnowledgeBaseType = "EXTERNAL"|"CUSTOM"|"QUICK_RESPONSES"|string;
  export type LanguageCode = string;
  export interface ListAssistantAssociationsRequest {
    /**
     * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    assistantId: UuidOrArn;
    /**
     * The maximum number of results to return per page.
     */
    maxResults?: MaxResults;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    nextToken?: NextToken;
  }
  export interface ListAssistantAssociationsResponse {
    /**
     * Summary information about assistant associations.
     */
    assistantAssociationSummaries: AssistantAssociationSummaryList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    nextToken?: NextToken;
  }
  export interface ListAssistantsRequest {
    /**
     * The maximum number of results to return per page.
     */
    maxResults?: MaxResults;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    nextToken?: NextToken;
  }
  export interface ListAssistantsResponse {
    /**
     * Information about the assistants.
     */
    assistantSummaries: AssistantList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    nextToken?: NextToken;
  }
  export interface ListContentsRequest {
    /**
     * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    knowledgeBaseId: UuidOrArn;
    /**
     * The maximum number of results to return per page.
     */
    maxResults?: MaxResults;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    nextToken?: NextToken;
  }
  export interface ListContentsResponse {
    /**
     * Information about the content.
     */
    contentSummaries: ContentSummaryList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    nextToken?: NextToken;
  }
  export interface ListImportJobsRequest {
    /**
     * The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    knowledgeBaseId: UuidOrArn;
    /**
     * The maximum number of results to return per page.
     */
    maxResults?: MaxResults;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    nextToken?: NonEmptyString;
  }
  export interface ListImportJobsResponse {
    /**
     * Summary information about the import jobs.
     */
    importJobSummaries: ImportJobList;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    nextToken?: NonEmptyString;
  }
  export interface ListKnowledgeBasesRequest {
    /**
     * The maximum number of results to return per page.
     */
    maxResults?: MaxResults;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    nextToken?: NonEmptyString;
  }
  export interface ListKnowledgeBasesResponse {
    /**
     * Information about the knowledge bases.
     */
    knowledgeBaseSummaries: KnowledgeBaseList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    nextToken?: NonEmptyString;
  }
  export interface ListQuickResponsesRequest {
    /**
     * The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    knowledgeBaseId: UuidOrArn;
    /**
     * The maximum number of results to return per page.
     */
    maxResults?: MaxResults;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    nextToken?: NonEmptyString;
  }
  export interface ListQuickResponsesResponse {
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    nextToken?: NonEmptyString;
    /**
     * Summary information about the quick responses.
     */
    quickResponseSummaries: QuickResponseSummaryList;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    resourceArn: Arn;
  }
  export interface ListTagsForResourceResponse {
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: Tags;
  }
  export type LlmModelId = string;
  export type MaxResults = number;
  export type Name = string;
  export type NextToken = string;
  export type NonEmptyString = string;
  export interface NotifyRecommendationsReceivedError {
    /**
     * A recommendation is causing an error.
     */
    message?: NotifyRecommendationsReceivedErrorMessage;
    /**
     * The identifier of the recommendation that is in error.
     */
    recommendationId?: RecommendationId;
  }
  export type NotifyRecommendationsReceivedErrorList = NotifyRecommendationsReceivedError[];
  export type NotifyRecommendationsReceivedErrorMessage = string;
  export interface NotifyRecommendationsReceivedRequest {
    /**
     * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    assistantId: UuidOrArn;
    /**
     * The identifiers of the recommendations.
     */
    recommendationIds: RecommendationIdList;
    /**
     * The identifier of the session. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    sessionId: UuidOrArn;
  }
  export interface NotifyRecommendationsReceivedResponse {
    /**
     * The identifiers of recommendations that are causing errors.
     */
    errors?: NotifyRecommendationsReceivedErrorList;
    /**
     * The identifiers of the recommendations.
     */
    recommendationIds?: RecommendationIdList;
  }
  export type ObjectFieldsList = NonEmptyString[];
  export interface OrCondition {
    /**
     * A list of conditions which would be applied together with an AND condition.
     */
    andConditions?: AndConditions;
    /**
     * A leaf node condition which can be used to specify a tag condition.
     */
    tagCondition?: TagCondition;
  }
  export type OrConditions = OrCondition[];
  export type Order = "ASC"|"DESC"|string;
  export type Priority = "HIGH"|"MEDIUM"|"LOW"|string;
  export interface PutFeedbackRequest {
    /**
     * The identifier of the Amazon Q in Connect assistant.
     */
    assistantId: UuidOrArn;
    /**
     * Information about the feedback provided.
     */
    contentFeedback: ContentFeedbackData;
    /**
     * The identifier of the feedback target.
     */
    targetId: Uuid;
    /**
     * The type of the feedback target.
     */
    targetType: TargetType;
  }
  export interface PutFeedbackResponse {
    /**
     * The Amazon Resource Name (ARN) of the Amazon Q in Connect assistant.
     */
    assistantArn: UuidOrArn;
    /**
     * The identifier of the Amazon Q in Connect assistant.
     */
    assistantId: Uuid;
    /**
     * Information about the feedback provided.
     */
    contentFeedback: ContentFeedbackData;
    /**
     * The identifier of the feedback target.
     */
    targetId: Uuid;
    /**
     * The type of the feedback target.
     */
    targetType: TargetType;
  }
  export interface QueryAssistantRequest {
    /**
     * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    assistantId: UuidOrArn;
    /**
     * The maximum number of results to return per page.
     */
    maxResults?: MaxResults;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    nextToken?: NextToken;
    /**
     * Information about how to query content.
     */
    queryCondition?: QueryConditionExpression;
    /**
     * The text to search for.
     */
    queryText: QueryText;
    /**
     * The identifier of the Amazon Q in Connect session. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    sessionId?: UuidOrArn;
  }
  export interface QueryAssistantResponse {
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    nextToken?: NextToken;
    /**
     * The results of the query.
     */
    results: QueryResultsList;
  }
  export interface QueryCondition {
    /**
     * The condition for the query.
     */
    single?: QueryConditionItem;
  }
  export type QueryConditionComparisonOperator = "EQUALS"|string;
  export type QueryConditionExpression = QueryCondition[];
  export type QueryConditionFieldName = "RESULT_TYPE"|string;
  export interface QueryConditionItem {
    /**
     * The comparison operator for query condition to query on.
     */
    comparator: QueryConditionComparisonOperator;
    /**
     *  The name of the field for query condition to query on.
     */
    field: QueryConditionFieldName;
    /**
     * The value for the query condition to query on.
     */
    value: NonEmptyString;
  }
  export interface QueryRecommendationTriggerData {
    /**
     * The text associated with the recommendation trigger.
     */
    text?: QueryText;
  }
  export type QueryResultType = "KNOWLEDGE_CONTENT"|"GENERATIVE_ANSWER"|string;
  export type QueryResultsList = ResultData[];
  export type QueryText = string;
  export type QuickResponseContent = string;
  export interface QuickResponseContentProvider {
    /**
     * The content of the quick response.
     */
    content?: QuickResponseContent;
  }
  export interface QuickResponseContents {
    markdown?: QuickResponseContentProvider;
    plainText?: QuickResponseContentProvider;
  }
  export interface QuickResponseData {
    /**
     * The Amazon Connect contact channels this quick response applies to. The supported contact channel types include Chat.
     */
    channels?: Channels;
    /**
     * The media type of the quick response content.   Use application/x.quickresponse;format=plain for quick response written in plain text.   Use application/x.quickresponse;format=markdown for quick response written in richtext.  
     */
    contentType: QuickResponseType;
    /**
     * The contents of the quick response.
     */
    contents?: QuickResponseContents;
    /**
     * The timestamp when the quick response was created.
     */
    createdTime: SyntheticTimestamp_epoch_seconds;
    /**
     * The description of the quick response.
     */
    description?: QuickResponseDescription;
    /**
     * The configuration information of the user groups that the quick response is accessible to.
     */
    groupingConfiguration?: GroupingConfiguration;
    /**
     * Whether the quick response is active.
     */
    isActive?: Boolean;
    /**
     * The Amazon Resource Name (ARN) of the knowledge base.
     */
    knowledgeBaseArn: Arn;
    /**
     * The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    knowledgeBaseId: Uuid;
    /**
     * The language code value for the language in which the quick response is written.
     */
    language?: LanguageCode;
    /**
     * The Amazon Resource Name (ARN) of the user who last updated the quick response data.
     */
    lastModifiedBy?: GenericArn;
    /**
     * The timestamp when the quick response data was last modified.
     */
    lastModifiedTime: SyntheticTimestamp_epoch_seconds;
    /**
     * The name of the quick response.
     */
    name: QuickResponseName;
    /**
     * The Amazon Resource Name (ARN) of the quick response.
     */
    quickResponseArn: Arn;
    /**
     * The identifier of the quick response.
     */
    quickResponseId: Uuid;
    /**
     * The shortcut key of the quick response. The value should be unique across the knowledge base.
     */
    shortcutKey?: ShortCutKey;
    /**
     * The status of the quick response data.
     */
    status: QuickResponseStatus;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: Tags;
  }
  export interface QuickResponseDataProvider {
    /**
     * The content of the quick response.
     */
    content?: QuickResponseContent;
  }
  export type QuickResponseDescription = string;
  export interface QuickResponseFilterField {
    /**
     * Whether to treat null value as a match for the attribute field.
     */
    includeNoExistence?: Boolean;
    /**
     * The name of the attribute field to filter the quick responses by.
     */
    name: NonEmptyString;
    /**
     * The operator to use for filtering.
     */
    operator: QuickResponseFilterOperator;
    /**
     * The values of attribute field to filter the quick response by.
     */
    values?: QuickResponseFilterValueList;
  }
  export type QuickResponseFilterFieldList = QuickResponseFilterField[];
  export type QuickResponseFilterOperator = "EQUALS"|"PREFIX"|string;
  export type QuickResponseFilterValue = string;
  export type QuickResponseFilterValueList = QuickResponseFilterValue[];
  export type QuickResponseName = string;
  export interface QuickResponseOrderField {
    /**
     * The name of the attribute to order the quick response query results by.
     */
    name: NonEmptyString;
    /**
     * The order at which the quick responses are sorted by.
     */
    order?: Order;
  }
  export interface QuickResponseQueryField {
    /**
     * Whether the query expects only exact matches on the attribute field values. The results of the query will only include exact matches if this parameter is set to false.
     */
    allowFuzziness?: Boolean;
    /**
     * The name of the attribute to query the quick responses by.
     */
    name: NonEmptyString;
    /**
     * The operator to use for matching attribute field values in the query.
     */
    operator: QuickResponseQueryOperator;
    /**
     * The importance of the attribute field when calculating query result relevancy scores. The value set for this parameter affects the ordering of search results.
     */
    priority?: Priority;
    /**
     * The values of the attribute to query the quick responses by.
     */
    values: QuickResponseQueryValueList;
  }
  export type QuickResponseQueryFieldList = QuickResponseQueryField[];
  export type QuickResponseQueryOperator = "CONTAINS"|"CONTAINS_AND_PREFIX"|string;
  export type QuickResponseQueryValue = string;
  export type QuickResponseQueryValueList = QuickResponseQueryValue[];
  export interface QuickResponseSearchExpression {
    /**
     * The configuration of filtering rules applied to quick response query results.
     */
    filters?: QuickResponseFilterFieldList;
    /**
     * The quick response attribute fields on which the query results are ordered.
     */
    orderOnField?: QuickResponseOrderField;
    /**
     * The quick response query expressions.
     */
    queries?: QuickResponseQueryFieldList;
  }
  export interface QuickResponseSearchResultData {
    /**
     * The user defined contact attributes that are resolved when the search result is returned.
     */
    attributesInterpolated?: ContactAttributeKeys;
    /**
     * The user defined contact attributes that are not resolved when the search result is returned.
     */
    attributesNotInterpolated?: ContactAttributeKeys;
    /**
     * The Amazon Connect contact channels this quick response applies to. The supported contact channel types include Chat.
     */
    channels?: Channels;
    /**
     * The media type of the quick response content.   Use application/x.quickresponse;format=plain for quick response written in plain text.   Use application/x.quickresponse;format=markdown for quick response written in richtext.  
     */
    contentType: QuickResponseType;
    /**
     * The contents of the quick response.
     */
    contents: QuickResponseContents;
    /**
     * The timestamp when the quick response was created.
     */
    createdTime: SyntheticTimestamp_epoch_seconds;
    /**
     * The description of the quick response.
     */
    description?: QuickResponseDescription;
    /**
     * The configuration information of the user groups that the quick response is accessible to.
     */
    groupingConfiguration?: GroupingConfiguration;
    /**
     * Whether the quick response is active.
     */
    isActive: Boolean;
    /**
     * The Amazon Resource Name (ARN) of the knowledge base.
     */
    knowledgeBaseArn: Arn;
    /**
     * The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    knowledgeBaseId: Uuid;
    /**
     * The language code value for the language in which the quick response is written.
     */
    language?: LanguageCode;
    /**
     * The Amazon Resource Name (ARN) of the user who last updated the quick response search result data.
     */
    lastModifiedBy?: GenericArn;
    /**
     * The timestamp when the quick response search result data was last modified.
     */
    lastModifiedTime: SyntheticTimestamp_epoch_seconds;
    /**
     * The name of the quick response.
     */
    name: QuickResponseName;
    /**
     * The Amazon Resource Name (ARN) of the quick response.
     */
    quickResponseArn: Arn;
    /**
     * The identifier of the quick response.
     */
    quickResponseId: Uuid;
    /**
     * The shortcut key of the quick response. The value should be unique across the knowledge base.
     */
    shortcutKey?: ShortCutKey;
    /**
     * The resource status of the quick response.
     */
    status: QuickResponseStatus;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: Tags;
  }
  export type QuickResponseSearchResultsList = QuickResponseSearchResultData[];
  export type QuickResponseStatus = "CREATE_IN_PROGRESS"|"CREATE_FAILED"|"CREATED"|"DELETE_IN_PROGRESS"|"DELETE_FAILED"|"DELETED"|"UPDATE_IN_PROGRESS"|"UPDATE_FAILED"|string;
  export interface QuickResponseSummary {
    /**
     * The Amazon Connect contact channels this quick response applies to. The supported contact channel types include Chat.
     */
    channels?: Channels;
    /**
     * The media type of the quick response content.   Use application/x.quickresponse;format=plain for quick response written in plain text.   Use application/x.quickresponse;format=markdown for quick response written in richtext.  
     */
    contentType: QuickResponseType;
    /**
     * The timestamp when the quick response was created.
     */
    createdTime: SyntheticTimestamp_epoch_seconds;
    /**
     * The description of the quick response.
     */
    description?: QuickResponseDescription;
    /**
     * Whether the quick response is active.
     */
    isActive?: Boolean;
    /**
     * The Amazon Resource Name (ARN) of the knowledge base.
     */
    knowledgeBaseArn: Arn;
    /**
     * The identifier of the knowledge base.
     */
    knowledgeBaseId: Uuid;
    /**
     * The Amazon Resource Name (ARN) of the user who last updated the quick response data.
     */
    lastModifiedBy?: GenericArn;
    /**
     * The timestamp when the quick response summary was last modified.
     */
    lastModifiedTime: SyntheticTimestamp_epoch_seconds;
    /**
     * The name of the quick response.
     */
    name: QuickResponseName;
    /**
     * The Amazon Resource Name (ARN) of the quick response.
     */
    quickResponseArn: Arn;
    /**
     * The identifier of the quick response.
     */
    quickResponseId: Uuid;
    /**
     * The resource status of the quick response.
     */
    status: QuickResponseStatus;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: Tags;
  }
  export type QuickResponseSummaryList = QuickResponseSummary[];
  export type QuickResponseType = string;
  export interface RankingData {
    /**
     * The relevance score of the content.
     */
    relevanceLevel?: RelevanceLevel;
    /**
     * The relevance level of the recommendation.
     */
    relevanceScore?: RelevanceScore;
  }
  export interface RecommendationData {
    /**
     *  Summary of the recommended content.
     */
    data?: DataSummary;
    /**
     * The recommended document.
     */
    document?: Document;
    /**
     * The identifier of the recommendation.
     */
    recommendationId: RecommendationId;
    /**
     * The relevance level of the recommendation.
     */
    relevanceLevel?: RelevanceLevel;
    /**
     * The relevance score of the recommendation.
     */
    relevanceScore?: RelevanceScore;
    /**
     * The type of recommendation.
     */
    type?: RecommendationType;
  }
  export type RecommendationId = string;
  export type RecommendationIdList = RecommendationId[];
  export type RecommendationList = RecommendationData[];
  export type RecommendationSourceType = "ISSUE_DETECTION"|"RULE_EVALUATION"|"OTHER"|string;
  export interface RecommendationTrigger {
    /**
     * A union type containing information related to the trigger.
     */
    data: RecommendationTriggerData;
    /**
     * The identifier of the recommendation trigger.
     */
    id: Uuid;
    /**
     * The identifiers of the recommendations.
     */
    recommendationIds: RecommendationIdList;
    /**
     * The source of the recommendation trigger.   ISSUE_DETECTION: The corresponding recommendations were triggered by a Contact Lens issue.   RULE_EVALUATION: The corresponding recommendations were triggered by a Contact Lens rule.  
     */
    source: RecommendationSourceType;
    /**
     * The type of recommendation trigger.
     */
    type: RecommendationTriggerType;
  }
  export interface RecommendationTriggerData {
    /**
     * Data associated with the QUERY RecommendationTriggerType.
     */
    query?: QueryRecommendationTriggerData;
  }
  export type RecommendationTriggerList = RecommendationTrigger[];
  export type RecommendationTriggerType = "QUERY"|"GENERATIVE"|string;
  export type RecommendationType = "KNOWLEDGE_CONTENT"|"GENERATIVE_RESPONSE"|"GENERATIVE_ANSWER"|string;
  export type Relevance = "HELPFUL"|"NOT_HELPFUL"|string;
  export type RelevanceLevel = "HIGH"|"MEDIUM"|"LOW"|string;
  export type RelevanceScore = number;
  export interface RemoveKnowledgeBaseTemplateUriRequest {
    /**
     * The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    knowledgeBaseId: UuidOrArn;
  }
  export interface RemoveKnowledgeBaseTemplateUriResponse {
  }
  export interface RenderingConfiguration {
    /**
     * A URI template containing exactly one variable in ${variableName} format. This can only be set for EXTERNAL knowledge bases. For Salesforce, ServiceNow, and Zendesk, the variable must be one of the following:   Salesforce: Id, ArticleNumber, VersionNumber, Title, PublishStatus, or IsDeleted    ServiceNow: number, short_description, sys_mod_count, workflow_state, or active    Zendesk: id, title, updated_at, or draft    The variable is replaced with the actual value for a piece of content when calling GetContent. 
     */
    templateUri?: Uri;
  }
  export interface ResultData {
    /**
     *  Summary of the recommended content.
     */
    data?: DataSummary;
    /**
     * The document.
     */
    document?: Document;
    /**
     * The relevance score of the results.
     */
    relevanceScore?: RelevanceScore;
    /**
     * The identifier of the result data.
     */
    resultId: Uuid;
    /**
     * The type of the query result.
     */
    type?: QueryResultType;
  }
  export interface SearchContentRequest {
    /**
     * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    knowledgeBaseId: UuidOrArn;
    /**
     * The maximum number of results to return per page.
     */
    maxResults?: MaxResults;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    nextToken?: NextToken;
    /**
     * The search expression to filter results.
     */
    searchExpression: SearchExpression;
  }
  export interface SearchContentResponse {
    /**
     * Summary information about the content.
     */
    contentSummaries: ContentSummaryList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    nextToken?: NextToken;
  }
  export interface SearchExpression {
    /**
     * The search expression filters.
     */
    filters: FilterList;
  }
  export interface SearchQuickResponsesRequest {
    /**
     * The user-defined Amazon Connect contact attributes to be resolved when search results are returned.
     */
    attributes?: ContactAttributes;
    /**
     * The identifier of the knowledge base. This should be a QUICK_RESPONSES type knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    knowledgeBaseId: UuidOrArn;
    /**
     * The maximum number of results to return per page.
     */
    maxResults?: MaxResults;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    nextToken?: NonEmptyString;
    /**
     * The search expression for querying the quick response.
     */
    searchExpression: QuickResponseSearchExpression;
  }
  export interface SearchQuickResponsesResponse {
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    nextToken?: NonEmptyString;
    /**
     * The results of the quick response search.
     */
    results: QuickResponseSearchResultsList;
  }
  export interface SearchSessionsRequest {
    /**
     * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    assistantId: UuidOrArn;
    /**
     * The maximum number of results to return per page.
     */
    maxResults?: MaxResults;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    nextToken?: NextToken;
    /**
     * The search expression to filter results.
     */
    searchExpression: SearchExpression;
  }
  export interface SearchSessionsResponse {
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    nextToken?: NextToken;
    /**
     * Summary information about the sessions.
     */
    sessionSummaries: SessionSummaries;
  }
  export type SensitiveString = string;
  export interface ServerSideEncryptionConfiguration {
    /**
     * The customer managed key used for encryption. For more information about setting up a customer managed key for Amazon Q in Connect, see Enable Amazon Q in Connect for your instance. For information about valid ID values, see Key identifiers (KeyId).
     */
    kmsKeyId?: NonEmptyString;
  }
  export interface SessionData {
    /**
     * The description of the session.
     */
    description?: Description;
    /**
     * The configuration information for the session integration.
     */
    integrationConfiguration?: SessionIntegrationConfiguration;
    /**
     * The name of the session.
     */
    name: Name;
    /**
     * The Amazon Resource Name (ARN) of the session.
     */
    sessionArn: Arn;
    /**
     * The identifier of the session.
     */
    sessionId: Uuid;
    /**
     * An object that can be used to specify Tag conditions.
     */
    tagFilter?: TagFilter;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: Tags;
  }
  export interface SessionIntegrationConfiguration {
    /**
     * The Amazon Resource Name (ARN) of the integrated Amazon SNS topic used for streaming chat messages.
     */
    topicIntegrationArn?: GenericArn;
  }
  export type SessionSummaries = SessionSummary[];
  export interface SessionSummary {
    /**
     * The Amazon Resource Name (ARN) of the Amazon Q in Connect assistant.
     */
    assistantArn: Arn;
    /**
     * The identifier of the Amazon Q in Connect assistant.
     */
    assistantId: Uuid;
    /**
     * The Amazon Resource Name (ARN) of the session.
     */
    sessionArn: Arn;
    /**
     * The identifier of the session.
     */
    sessionId: Uuid;
  }
  export type ShortCutKey = string;
  export interface SourceConfiguration {
    /**
     * Configuration information for Amazon AppIntegrations to automatically ingest content.
     */
    appIntegrations?: AppIntegrationsConfiguration;
  }
  export interface SourceContentDataDetails {
    /**
     * The identifier of the source content.
     */
    id: Uuid;
    /**
     * Details about the source content ranking data.
     */
    rankingData: RankingData;
    /**
     *  Details about the source content text data.
     */
    textData: TextData;
    /**
     * The type of the source content.
     */
    type: SourceContentType;
  }
  export type SourceContentType = "KNOWLEDGE_CONTENT"|string;
  export interface StartContentUploadRequest {
    /**
     * The type of content to upload.
     */
    contentType: ContentType;
    /**
     * The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    knowledgeBaseId: UuidOrArn;
    /**
     * The expected expiration time of the generated presigned URL, specified in minutes.
     */
    presignedUrlTimeToLive?: TimeToLive;
  }
  export interface StartContentUploadResponse {
    /**
     * The headers to include in the upload.
     */
    headersToInclude: Headers;
    /**
     * The identifier of the upload.
     */
    uploadId: UploadId;
    /**
     * The URL of the upload.
     */
    url: Url;
    /**
     * The expiration time of the URL as an epoch timestamp.
     */
    urlExpiry: SyntheticTimestamp_epoch_seconds;
  }
  export interface StartImportJobRequest {
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    clientToken?: NonEmptyString;
    /**
     * The configuration information of the external source that the resource data are imported from.
     */
    externalSourceConfiguration?: ExternalSourceConfiguration;
    /**
     * The type of the import job.   For importing quick response resource, set the value to QUICK_RESPONSES.  
     */
    importJobType: ImportJobType;
    /**
     * The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.   For importing Amazon Q in Connect quick responses, this should be a QUICK_RESPONSES type knowledge base.  
     */
    knowledgeBaseId: UuidOrArn;
    /**
     * The metadata fields of the imported Amazon Q in Connect resources.
     */
    metadata?: ContentMetadata;
    /**
     * A pointer to the uploaded asset. This value is returned by StartContentUpload.
     */
    uploadId: UploadId;
  }
  export interface StartImportJobResponse {
    /**
     * The import job.
     */
    importJob?: ImportJobData;
  }
  export type SyntheticTimestamp_epoch_seconds = Date;
  export interface TagCondition {
    /**
     * The tag key in the tag condition.
     */
    key: TagKey;
    /**
     * The tag value in the tag condition.
     */
    value?: TagValue;
  }
  export interface TagFilter {
    /**
     * A list of conditions which would be applied together with an AND condition.
     */
    andConditions?: AndConditions;
    /**
     * A list of conditions which would be applied together with an OR condition.
     */
    orConditions?: OrConditions;
    /**
     * A leaf node condition which can be used to specify a tag condition.
     */
    tagCondition?: TagCondition;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    resourceArn: Arn;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags: Tags;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type Tags = {[key: string]: TagValue};
  export type TargetType = "RECOMMENDATION"|"RESULT"|string;
  export interface TextData {
    excerpt?: DocumentText;
    title?: DocumentText;
  }
  export type TimeToLive = number;
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    resourceArn: Arn;
    /**
     * The tag keys.
     */
    tagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateContentRequest {
    /**
     * The identifier of the content. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    contentId: UuidOrArn;
    /**
     * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base. Can be either the ID or the ARN
     */
    knowledgeBaseId: UuidOrArn;
    /**
     * A key/value map to store attributes without affecting tagging or recommendations. For example, when synchronizing data between an external system and Amazon Q in Connect, you can store an external version identifier as metadata to utilize for determining drift.
     */
    metadata?: ContentMetadata;
    /**
     * The URI for the article. If the knowledge base has a templateUri, setting this argument overrides it for this piece of content. To remove an existing overrideLinkOurUri, exclude this argument and set removeOverrideLinkOutUri to true.
     */
    overrideLinkOutUri?: Uri;
    /**
     * Unset the existing overrideLinkOutUri if it exists.
     */
    removeOverrideLinkOutUri?: Boolean;
    /**
     * The revisionId of the content resource to update, taken from an earlier call to GetContent, GetContentSummary, SearchContent, or ListContents. If included, this argument acts as an optimistic lock to ensure content was not modified since it was last read. If it has been modified, this API throws a PreconditionFailedException.
     */
    revisionId?: NonEmptyString;
    /**
     * The title of the content.
     */
    title?: ContentTitle;
    /**
     * A pointer to the uploaded asset. This value is returned by StartContentUpload. 
     */
    uploadId?: UploadId;
  }
  export interface UpdateContentResponse {
    /**
     * The content.
     */
    content?: ContentData;
  }
  export interface UpdateKnowledgeBaseTemplateUriRequest {
    /**
     * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    knowledgeBaseId: UuidOrArn;
    /**
     * The template URI to update.
     */
    templateUri: Uri;
  }
  export interface UpdateKnowledgeBaseTemplateUriResponse {
    /**
     * The knowledge base to update.
     */
    knowledgeBase?: KnowledgeBaseData;
  }
  export interface UpdateQuickResponseRequest {
    /**
     * The Amazon Connect contact channels this quick response applies to. The supported contact channel types include Chat.
     */
    channels?: Channels;
    /**
     * The updated content of the quick response.
     */
    content?: QuickResponseDataProvider;
    /**
     * The media type of the quick response content.   Use application/x.quickresponse;format=plain for quick response written in plain text.   Use application/x.quickresponse;format=markdown for quick response written in richtext.  
     */
    contentType?: QuickResponseType;
    /**
     * The updated description of the quick response.
     */
    description?: QuickResponseDescription;
    /**
     * The updated grouping configuration of the quick response.
     */
    groupingConfiguration?: GroupingConfiguration;
    /**
     * Whether the quick response is active. 
     */
    isActive?: Boolean;
    /**
     * The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    knowledgeBaseId: UuidOrArn;
    /**
     * The language code value for the language in which the quick response is written. The supported language codes include de_DE, en_US, es_ES, fr_FR, id_ID, it_IT, ja_JP, ko_KR, pt_BR, zh_CN, zh_TW 
     */
    language?: LanguageCode;
    /**
     * The name of the quick response.
     */
    name?: QuickResponseName;
    /**
     * The identifier of the quick response.
     */
    quickResponseId: UuidOrArn;
    /**
     * Whether to remove the description from the quick response.
     */
    removeDescription?: Boolean;
    /**
     * Whether to remove the grouping configuration of the quick response.
     */
    removeGroupingConfiguration?: Boolean;
    /**
     * Whether to remove the shortcut key of the quick response.
     */
    removeShortcutKey?: Boolean;
    /**
     * The shortcut key of the quick response. The value should be unique across the knowledge base.
     */
    shortcutKey?: ShortCutKey;
  }
  export interface UpdateQuickResponseResponse {
    /**
     * The quick response.
     */
    quickResponse?: QuickResponseData;
  }
  export interface UpdateSessionRequest {
    /**
     * The identifier of the Amazon Q in Connect assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    assistantId: UuidOrArn;
    /**
     * The description.
     */
    description?: Description;
    /**
     * The identifier of the session. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    sessionId: UuidOrArn;
    /**
     * An object that can be used to specify Tag conditions.
     */
    tagFilter?: TagFilter;
  }
  export interface UpdateSessionResponse {
    session?: SessionData;
  }
  export type UploadId = string;
  export type Uri = string;
  export type Url = string;
  export type Uuid = string;
  export type UuidOrArn = string;
  export type WaitTimeSeconds = number;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2020-10-19"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the QConnect client.
   */
  export import Types = QConnect;
}
export = QConnect;
