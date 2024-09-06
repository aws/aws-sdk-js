import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class QApps extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: QApps.Types.ClientConfiguration)
  config: Config & QApps.Types.ClientConfiguration;
  /**
   * Associates a rating or review for a library item with the user submitting the request. This increments the rating count for the specified library item.
   */
  associateLibraryItemReview(params: QApps.Types.AssociateLibraryItemReviewInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Associates a rating or review for a library item with the user submitting the request. This increments the rating count for the specified library item.
   */
  associateLibraryItemReview(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This operation creates a link between the user's identity calling the operation and a specific Q App. This is useful to mark the Q App as a favorite for the user if the user doesn't own the Amazon Q App so they can still run it and see it in their inventory of Q Apps.
   */
  associateQAppWithUser(params: QApps.Types.AssociateQAppWithUserInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This operation creates a link between the user's identity calling the operation and a specific Q App. This is useful to mark the Q App as a favorite for the user if the user doesn't own the Amazon Q App so they can still run it and see it in their inventory of Q Apps.
   */
  associateQAppWithUser(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates a new library item for an Amazon Q App, allowing it to be discovered and used by other allowed users. 
   */
  createLibraryItem(params: QApps.Types.CreateLibraryItemInput, callback?: (err: AWSError, data: QApps.Types.CreateLibraryItemOutput) => void): Request<QApps.Types.CreateLibraryItemOutput, AWSError>;
  /**
   * Creates a new library item for an Amazon Q App, allowing it to be discovered and used by other allowed users. 
   */
  createLibraryItem(callback?: (err: AWSError, data: QApps.Types.CreateLibraryItemOutput) => void): Request<QApps.Types.CreateLibraryItemOutput, AWSError>;
  /**
   * Creates a new Amazon Q App based on the provided definition. The Q App definition specifies the cards and flow of the Q App. This operation also calculates the dependencies between the cards by inspecting the references in the prompts. 
   */
  createQApp(params: QApps.Types.CreateQAppInput, callback?: (err: AWSError, data: QApps.Types.CreateQAppOutput) => void): Request<QApps.Types.CreateQAppOutput, AWSError>;
  /**
   * Creates a new Amazon Q App based on the provided definition. The Q App definition specifies the cards and flow of the Q App. This operation also calculates the dependencies between the cards by inspecting the references in the prompts. 
   */
  createQApp(callback?: (err: AWSError, data: QApps.Types.CreateQAppOutput) => void): Request<QApps.Types.CreateQAppOutput, AWSError>;
  /**
   * Deletes a library item for an Amazon Q App, removing it from the library so it can no longer be discovered or used by other users.
   */
  deleteLibraryItem(params: QApps.Types.DeleteLibraryItemInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a library item for an Amazon Q App, removing it from the library so it can no longer be discovered or used by other users.
   */
  deleteLibraryItem(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an Amazon Q App owned by the user. If the Q App was previously published to the library, it is also removed from the library.
   */
  deleteQApp(params: QApps.Types.DeleteQAppInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an Amazon Q App owned by the user. If the Q App was previously published to the library, it is also removed from the library.
   */
  deleteQApp(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes a rating or review previously submitted by the user for a library item.
   */
  disassociateLibraryItemReview(params: QApps.Types.DisassociateLibraryItemReviewInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes a rating or review previously submitted by the user for a library item.
   */
  disassociateLibraryItemReview(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disassociates a Q App from a user removing the user's access to run the Q App.
   */
  disassociateQAppFromUser(params: QApps.Types.DisassociateQAppFromUserInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disassociates a Q App from a user removing the user's access to run the Q App.
   */
  disassociateQAppFromUser(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Retrieves details about a library item for an Amazon Q App, including its metadata, categories, ratings, and usage statistics.
   */
  getLibraryItem(params: QApps.Types.GetLibraryItemInput, callback?: (err: AWSError, data: QApps.Types.GetLibraryItemOutput) => void): Request<QApps.Types.GetLibraryItemOutput, AWSError>;
  /**
   * Retrieves details about a library item for an Amazon Q App, including its metadata, categories, ratings, and usage statistics.
   */
  getLibraryItem(callback?: (err: AWSError, data: QApps.Types.GetLibraryItemOutput) => void): Request<QApps.Types.GetLibraryItemOutput, AWSError>;
  /**
   * Retrieves the full details of an Q App, including its definition specifying the cards and flow.
   */
  getQApp(params: QApps.Types.GetQAppInput, callback?: (err: AWSError, data: QApps.Types.GetQAppOutput) => void): Request<QApps.Types.GetQAppOutput, AWSError>;
  /**
   * Retrieves the full details of an Q App, including its definition specifying the cards and flow.
   */
  getQApp(callback?: (err: AWSError, data: QApps.Types.GetQAppOutput) => void): Request<QApps.Types.GetQAppOutput, AWSError>;
  /**
   * Retrieves the current state and results for an active session of an Amazon Q App.
   */
  getQAppSession(params: QApps.Types.GetQAppSessionInput, callback?: (err: AWSError, data: QApps.Types.GetQAppSessionOutput) => void): Request<QApps.Types.GetQAppSessionOutput, AWSError>;
  /**
   * Retrieves the current state and results for an active session of an Amazon Q App.
   */
  getQAppSession(callback?: (err: AWSError, data: QApps.Types.GetQAppSessionOutput) => void): Request<QApps.Types.GetQAppSessionOutput, AWSError>;
  /**
   * Uploads a file that can then be used either as a default in a FileUploadCard from Q App definition or as a file that is used inside a single Q App run. The purpose of the document is determined by a scope parameter that indicates whether it is at the app definition level or at the app session level.
   */
  importDocument(params: QApps.Types.ImportDocumentInput, callback?: (err: AWSError, data: QApps.Types.ImportDocumentOutput) => void): Request<QApps.Types.ImportDocumentOutput, AWSError>;
  /**
   * Uploads a file that can then be used either as a default in a FileUploadCard from Q App definition or as a file that is used inside a single Q App run. The purpose of the document is determined by a scope parameter that indicates whether it is at the app definition level or at the app session level.
   */
  importDocument(callback?: (err: AWSError, data: QApps.Types.ImportDocumentOutput) => void): Request<QApps.Types.ImportDocumentOutput, AWSError>;
  /**
   * Lists the library items for Amazon Q Apps that are published and available for users in your Amazon Web Services account.
   */
  listLibraryItems(params: QApps.Types.ListLibraryItemsInput, callback?: (err: AWSError, data: QApps.Types.ListLibraryItemsOutput) => void): Request<QApps.Types.ListLibraryItemsOutput, AWSError>;
  /**
   * Lists the library items for Amazon Q Apps that are published and available for users in your Amazon Web Services account.
   */
  listLibraryItems(callback?: (err: AWSError, data: QApps.Types.ListLibraryItemsOutput) => void): Request<QApps.Types.ListLibraryItemsOutput, AWSError>;
  /**
   * Lists the Amazon Q Apps owned by or associated with the user either because they created it or because they used it from the library in the past. The user identity is extracted from the credentials used to invoke this operation..
   */
  listQApps(params: QApps.Types.ListQAppsInput, callback?: (err: AWSError, data: QApps.Types.ListQAppsOutput) => void): Request<QApps.Types.ListQAppsOutput, AWSError>;
  /**
   * Lists the Amazon Q Apps owned by or associated with the user either because they created it or because they used it from the library in the past. The user identity is extracted from the credentials used to invoke this operation..
   */
  listQApps(callback?: (err: AWSError, data: QApps.Types.ListQAppsOutput) => void): Request<QApps.Types.ListQAppsOutput, AWSError>;
  /**
   * Lists the tags associated with an Amazon Q Apps resource.
   */
  listTagsForResource(params: QApps.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: QApps.Types.ListTagsForResourceResponse) => void): Request<QApps.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists the tags associated with an Amazon Q Apps resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: QApps.Types.ListTagsForResourceResponse) => void): Request<QApps.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Generates an Amazon Q App definition based on either a conversation or a problem statement provided as input.The resulting app definition can be used to call CreateQApp. This API doesn't create Amazon Q Apps directly.
   */
  predictQApp(params: QApps.Types.PredictQAppInput, callback?: (err: AWSError, data: QApps.Types.PredictQAppOutput) => void): Request<QApps.Types.PredictQAppOutput, AWSError>;
  /**
   * Generates an Amazon Q App definition based on either a conversation or a problem statement provided as input.The resulting app definition can be used to call CreateQApp. This API doesn't create Amazon Q Apps directly.
   */
  predictQApp(callback?: (err: AWSError, data: QApps.Types.PredictQAppOutput) => void): Request<QApps.Types.PredictQAppOutput, AWSError>;
  /**
   * Starts a new session for an Amazon Q App, allowing inputs to be provided and the app to be run.  Each Q App session will be condensed into a single conversation in the web experience. 
   */
  startQAppSession(params: QApps.Types.StartQAppSessionInput, callback?: (err: AWSError, data: QApps.Types.StartQAppSessionOutput) => void): Request<QApps.Types.StartQAppSessionOutput, AWSError>;
  /**
   * Starts a new session for an Amazon Q App, allowing inputs to be provided and the app to be run.  Each Q App session will be condensed into a single conversation in the web experience. 
   */
  startQAppSession(callback?: (err: AWSError, data: QApps.Types.StartQAppSessionOutput) => void): Request<QApps.Types.StartQAppSessionOutput, AWSError>;
  /**
   * Stops an active session for an Amazon Q App.This deletes all data related to the session and makes it invalid for future uses. The results of the session will be persisted as part of the conversation.
   */
  stopQAppSession(params: QApps.Types.StopQAppSessionInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Stops an active session for an Amazon Q App.This deletes all data related to the session and makes it invalid for future uses. The results of the session will be persisted as part of the conversation.
   */
  stopQAppSession(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Associates tags with an Amazon Q Apps resource.
   */
  tagResource(params: QApps.Types.TagResourceRequest, callback?: (err: AWSError, data: QApps.Types.TagResourceResponse) => void): Request<QApps.Types.TagResourceResponse, AWSError>;
  /**
   * Associates tags with an Amazon Q Apps resource.
   */
  tagResource(callback?: (err: AWSError, data: QApps.Types.TagResourceResponse) => void): Request<QApps.Types.TagResourceResponse, AWSError>;
  /**
   * Disassociates tags from an Amazon Q Apps resource.
   */
  untagResource(params: QApps.Types.UntagResourceRequest, callback?: (err: AWSError, data: QApps.Types.UntagResourceResponse) => void): Request<QApps.Types.UntagResourceResponse, AWSError>;
  /**
   * Disassociates tags from an Amazon Q Apps resource.
   */
  untagResource(callback?: (err: AWSError, data: QApps.Types.UntagResourceResponse) => void): Request<QApps.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates the library item for an Amazon Q App.
   */
  updateLibraryItem(params: QApps.Types.UpdateLibraryItemInput, callback?: (err: AWSError, data: QApps.Types.UpdateLibraryItemOutput) => void): Request<QApps.Types.UpdateLibraryItemOutput, AWSError>;
  /**
   * Updates the library item for an Amazon Q App.
   */
  updateLibraryItem(callback?: (err: AWSError, data: QApps.Types.UpdateLibraryItemOutput) => void): Request<QApps.Types.UpdateLibraryItemOutput, AWSError>;
  /**
   * Updates the verification status of a library item for an Amazon Q App.
   */
  updateLibraryItemMetadata(params: QApps.Types.UpdateLibraryItemMetadataInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the verification status of a library item for an Amazon Q App.
   */
  updateLibraryItemMetadata(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates an existing Amazon Q App, allowing modifications to its title, description, and definition.
   */
  updateQApp(params: QApps.Types.UpdateQAppInput, callback?: (err: AWSError, data: QApps.Types.UpdateQAppOutput) => void): Request<QApps.Types.UpdateQAppOutput, AWSError>;
  /**
   * Updates an existing Amazon Q App, allowing modifications to its title, description, and definition.
   */
  updateQApp(callback?: (err: AWSError, data: QApps.Types.UpdateQAppOutput) => void): Request<QApps.Types.UpdateQAppOutput, AWSError>;
  /**
   * Updates the session for a given Q App sessionId. This is only valid when at least one card of the session is in the WAITING state. Data for each WAITING card can be provided as input. If inputs are not provided, the call will be accepted but session will not move forward. Inputs for cards that are not in the WAITING status will be ignored.
   */
  updateQAppSession(params: QApps.Types.UpdateQAppSessionInput, callback?: (err: AWSError, data: QApps.Types.UpdateQAppSessionOutput) => void): Request<QApps.Types.UpdateQAppSessionOutput, AWSError>;
  /**
   * Updates the session for a given Q App sessionId. This is only valid when at least one card of the session is in the WAITING state. Data for each WAITING card can be provided as input. If inputs are not provided, the call will be accepted but session will not move forward. Inputs for cards that are not in the WAITING status will be ignored.
   */
  updateQAppSession(callback?: (err: AWSError, data: QApps.Types.UpdateQAppSessionOutput) => void): Request<QApps.Types.UpdateQAppSessionOutput, AWSError>;
}
declare namespace QApps {
  export type AmazonResourceName = string;
  export type AppArn = string;
  export interface AppDefinition {
    /**
     * The version of the app definition schema or specification.
     */
    appDefinitionVersion: String;
    /**
     * The cards that make up the Q App, such as text input, file upload, or query cards.
     */
    cards: CardModelList;
    /**
     * A flag indicating whether the Q App's definition can be edited by the user.
     */
    canEdit?: Boolean;
  }
  export interface AppDefinitionInput {
    /**
     * The cards that make up the Q App definition.
     */
    cards: CardList;
    /**
     * The initial prompt displayed when the Q App is started.
     */
    initialPrompt?: InitialPrompt;
  }
  export type AppRequiredCapabilities = AppRequiredCapability[];
  export type AppRequiredCapability = "FileUpload"|"CreatorMode"|"RetrievalMode"|"PluginMode"|string;
  export type AppStatus = "PUBLISHED"|"DRAFT"|"DELETED"|string;
  export type AppVersion = number;
  export interface AssociateLibraryItemReviewInput {
    /**
     * The unique identifier for the Amazon Q Business application environment instance.
     */
    instanceId: InstanceId;
    /**
     * The unique identifier of the library item to associate the review with.
     */
    libraryItemId: UUID;
  }
  export interface AssociateQAppWithUserInput {
    /**
     * The unique identifier of the Amazon Q Business application environment instance.
     */
    instanceId: InstanceId;
    /**
     * The ID of the Amazon Q App to associate with the user.
     */
    appId: UUID;
  }
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
     * Performs a greater than or equals operation on two document attributes or metadata fields. Supported for the following document attribute value types: dateValue and longValue. 
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
  export type Boolean = boolean;
  export interface Card {
    /**
     * A container for the properties of the text input card.
     */
    textInput?: TextInputCard;
    /**
     * A container for the properties of the query card.
     */
    qQuery?: QQueryCard;
    /**
     * A container for the properties of the plugin card.
     */
    qPlugin?: QPluginCard;
    /**
     * A container for the properties of the file upload card.
     */
    fileUpload?: FileUploadCard;
  }
  export interface CardInput {
    /**
     * A container for the properties of the text input card.
     */
    textInput?: TextInputCardInput;
    /**
     * A container for the properties of the query input card.
     */
    qQuery?: QQueryCardInput;
    /**
     * A container for the properties of the plugin input card.
     */
    qPlugin?: QPluginCardInput;
    /**
     * A container for the properties of the file upload input card.
     */
    fileUpload?: FileUploadCardInput;
  }
  export type CardList = CardInput[];
  export type CardModelList = Card[];
  export type CardOutputSource = "approved-sources"|"llm"|string;
  export interface CardStatus {
    /**
     * The current state of the card.
     */
    currentState: ExecutionStatus;
    /**
     * The current value or result associated with the card.
     */
    currentValue: String;
  }
  export type CardStatusMap = {[key: string]: CardStatus};
  export type CardType = "text-input"|"q-query"|"file-upload"|"q-plugin"|string;
  export interface CardValue {
    /**
     * The unique identifier of the card.
     */
    cardId: UUID;
    /**
     * The value or result associated with the card.
     */
    value: CardValueValueString;
  }
  export type CardValueList = CardValue[];
  export type CardValueValueString = string;
  export interface Category {
    /**
     * The unique identifier of the category.
     */
    id: UUID;
    /**
     * The title or name of the category.
     */
    title: String;
  }
  export type CategoryIdList = UUID[];
  export type CategoryList = Category[];
  export interface ConversationMessage {
    /**
     * The text content of the conversation message.
     */
    body: ConversationMessageBodyString;
    /**
     * The type of the conversation message.
     */
    type: Sender;
  }
  export type ConversationMessageBodyString = string;
  export interface CreateLibraryItemInput {
    /**
     * The unique identifier of the Amazon Q Business application environment instance.
     */
    instanceId: InstanceId;
    /**
     * The unique identifier of the Amazon Q App to publish to the library.
     */
    appId: UUID;
    /**
     * The version of the Amazon Q App to publish to the library.
     */
    appVersion: AppVersion;
    /**
     * The categories to associate with the library item for easier discovery.
     */
    categories: CategoryIdList;
  }
  export interface CreateLibraryItemOutput {
    /**
     * The unique identifier of the new library item.
     */
    libraryItemId: UUID;
    /**
     * The status of the new library item, such as "Published".
     */
    status: String;
    /**
     * The date and time the library item was created.
     */
    createdAt: QAppsTimestamp;
    /**
     * The user who created the library item.
     */
    createdBy: String;
    /**
     * The date and time the library item was last updated.
     */
    updatedAt?: QAppsTimestamp;
    /**
     * The user who last updated the library item.
     */
    updatedBy?: String;
    /**
     * The number of ratings the library item has received from users.
     */
    ratingCount: Integer;
    /**
     * Indicates whether the library item has been verified.
     */
    isVerified?: Boolean;
  }
  export interface CreateQAppInput {
    /**
     * The unique identifier of the Amazon Q Business application environment instance.
     */
    instanceId: InstanceId;
    /**
     * The title of the new Q App.
     */
    title: Title;
    /**
     * The description of the new Q App.
     */
    description?: Description;
    /**
     * The definition of the new Q App, specifying the cards and flow.
     */
    appDefinition: AppDefinitionInput;
    /**
     * Optional tags to associate with the new Q App.
     */
    tags?: TagMap;
  }
  export interface CreateQAppOutput {
    /**
     * The unique identifier of the new Q App.
     */
    appId: UUID;
    /**
     * The Amazon Resource Name (ARN) of the new Q App.
     */
    appArn: AppArn;
    /**
     * The title of the new Q App.
     */
    title: Title;
    /**
     * The description of the new Q App.
     */
    description?: Description;
    /**
     * The initial prompt displayed when the Q App is started.
     */
    initialPrompt?: InitialPrompt;
    /**
     * The version of the new Q App.
     */
    appVersion: AppVersion;
    /**
     * The status of the new Q App, such as "Created".
     */
    status: AppStatus;
    /**
     * The date and time the Q App was created.
     */
    createdAt: QAppsTimestamp;
    /**
     * The user who created the Q App.
     */
    createdBy: String;
    /**
     * The date and time the Q App was last updated.
     */
    updatedAt: QAppsTimestamp;
    /**
     * The user who last updated the Q App.
     */
    updatedBy: String;
    /**
     * The capabilities required to run the Q App, such as file upload or third-party integrations.
     */
    requiredCapabilities?: AppRequiredCapabilities;
  }
  export type Default = string;
  export interface DeleteLibraryItemInput {
    /**
     * The unique identifier of the Amazon Q Business application environment instance.
     */
    instanceId: InstanceId;
    /**
     * The unique identifier of the library item to delete.
     */
    libraryItemId: UUID;
  }
  export interface DeleteQAppInput {
    /**
     * The unique identifier of the Amazon Q Business application environment instance.
     */
    instanceId: InstanceId;
    /**
     * The unique identifier of the Q App to delete.
     */
    appId: UUID;
  }
  export type DependencyList = String[];
  export type Description = string;
  export interface DisassociateLibraryItemReviewInput {
    /**
     * The unique identifier of the Amazon Q Business application environment instance.
     */
    instanceId: InstanceId;
    /**
     * The unique identifier of the library item to remove the review from.
     */
    libraryItemId: UUID;
  }
  export interface DisassociateQAppFromUserInput {
    /**
     * The unique identifier of the Amazon Q Business application environment instance.
     */
    instanceId: InstanceId;
    /**
     * The unique identifier of the Q App to disassociate from the user.
     */
    appId: UUID;
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
  export type DocumentAttributeKey = string;
  export type DocumentAttributeStringListValue = PlatoString[];
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
  export type DocumentScope = "APPLICATION"|"SESSION"|string;
  export type ExecutionStatus = "IN_PROGRESS"|"WAITING"|"COMPLETED"|string;
  export interface FileUploadCard {
    /**
     * The unique identifier of the file upload card.
     */
    id: UUID;
    /**
     * The title of the file upload card.
     */
    title: Title;
    /**
     * Any dependencies or requirements for the file upload card.
     */
    dependencies: DependencyList;
    /**
     * The type of the card.
     */
    type: CardType;
    /**
     * The name of the file being uploaded.
     */
    filename?: String;
    /**
     * The unique identifier of the file associated with the card.
     */
    fileId?: String;
    /**
     * A flag indicating if the user can override the default file for the upload card.
     */
    allowOverride?: Boolean;
  }
  export interface FileUploadCardInput {
    /**
     * The title or label of the file upload card.
     */
    title: Title;
    /**
     * The unique identifier of the file upload card.
     */
    id: UUID;
    /**
     * The type of the card.
     */
    type: CardType;
    /**
     * The default filename to use for the file upload card.
     */
    filename?: Filename;
    /**
     * The identifier of a pre-uploaded file associated with the card.
     */
    fileId?: UUID;
    /**
     * A flag indicating if the user can override the default file for the upload card.
     */
    allowOverride?: Boolean;
  }
  export type Filename = string;
  export interface GetLibraryItemInput {
    /**
     * The unique identifier of the Amazon Q Business application environment instance.
     */
    instanceId: InstanceId;
    /**
     * The unique identifier of the library item to retrieve.
     */
    libraryItemId: UUID;
    /**
     * The unique identifier of the Amazon Q App associated with the library item.
     */
    appId?: UUID;
  }
  export interface GetLibraryItemOutput {
    /**
     * The unique identifier of the library item.
     */
    libraryItemId: UUID;
    /**
     * The unique identifier of the Q App associated with the library item.
     */
    appId: UUID;
    /**
     * The version of the Q App associated with the library item.
     */
    appVersion: AppVersion;
    /**
     * The categories associated with the library item for discovery.
     */
    categories: CategoryList;
    /**
     * The status of the library item, such as "Published".
     */
    status: String;
    /**
     * The date and time the library item was created.
     */
    createdAt: QAppsTimestamp;
    /**
     * The user who created the library item.
     */
    createdBy: String;
    /**
     * The date and time the library item was last updated.
     */
    updatedAt?: QAppsTimestamp;
    /**
     * The user who last updated the library item.
     */
    updatedBy?: String;
    /**
     * The number of ratings the library item has received from users.
     */
    ratingCount: Integer;
    /**
     * Whether the current user has rated the library item.
     */
    isRatedByUser?: Boolean;
    /**
     * The number of users who have associated the Q App with their account.
     */
    userCount?: Integer;
    /**
     * Indicates whether the library item has been verified.
     */
    isVerified?: Boolean;
  }
  export interface GetQAppInput {
    /**
     * The unique identifier of the Amazon Q Business application environment instance.
     */
    instanceId: InstanceId;
    /**
     * The unique identifier of the Q App to retrieve.
     */
    appId: UUID;
  }
  export interface GetQAppOutput {
    /**
     * The unique identifier of the Q App.
     */
    appId: UUID;
    /**
     * The Amazon Resource Name (ARN) of the Q App.
     */
    appArn: AppArn;
    /**
     * The title of the Q App.
     */
    title: Title;
    /**
     * The description of the Q App.
     */
    description?: Description;
    /**
     * The initial prompt displayed when the Q App is started.
     */
    initialPrompt?: InitialPrompt;
    /**
     * The version of the Q App.
     */
    appVersion: AppVersion;
    /**
     * The status of the Q App.
     */
    status: AppStatus;
    /**
     * The date and time the Q App was created.
     */
    createdAt: QAppsTimestamp;
    /**
     * The user who created the Q App.
     */
    createdBy: String;
    /**
     * The date and time the Q App was last updated.
     */
    updatedAt: QAppsTimestamp;
    /**
     * The user who last updated the Q App.
     */
    updatedBy: String;
    /**
     * The capabilities required to run the Q App, such as file upload or third-party integrations.
     */
    requiredCapabilities?: AppRequiredCapabilities;
    /**
     * The full definition of the Q App, specifying the cards and flow.
     */
    appDefinition: AppDefinition;
  }
  export interface GetQAppSessionInput {
    /**
     * The unique identifier of the Amazon Q Business application environment instance.
     */
    instanceId: InstanceId;
    /**
     * The unique identifier of the Q App session to retrieve.
     */
    sessionId: UUID;
  }
  export interface GetQAppSessionOutput {
    /**
     * The unique identifier of the Q App session.
     */
    sessionId: String;
    /**
     * The Amazon Resource Name (ARN) of the Q App session.
     */
    sessionArn: String;
    /**
     * The current status of the Q App session.
     */
    status: ExecutionStatus;
    /**
     * The current status for each card in the Q App session.
     */
    cardStatus: CardStatusMap;
  }
  export interface ImportDocumentInput {
    /**
     * The unique identifier of the Amazon Q Business application environment instance.
     */
    instanceId: InstanceId;
    /**
     * The unique identifier of the card the file is associated with, if applicable.
     */
    cardId: UUID;
    /**
     * The unique identifier of the Q App the file is associated with.
     */
    appId: UUID;
    /**
     * The base64-encoded contents of the file to upload.
     */
    fileContentsBase64: String;
    /**
     * The name of the file being uploaded.
     */
    fileName: Filename;
    /**
     * Whether the file is associated with an Q App definition or a specific Q App session.
     */
    scope: DocumentScope;
    /**
     * The unique identifier of the Q App session the file is associated with, if applicable.
     */
    sessionId?: UUID;
  }
  export interface ImportDocumentOutput {
    /**
     * The unique identifier assigned to the uploaded file.
     */
    fileId?: String;
  }
  export type InitialPrompt = string;
  export type InstanceId = string;
  export type Integer = number;
  export type LibraryItemList = LibraryItemMember[];
  export interface LibraryItemMember {
    /**
     * The unique identifier of the library item.
     */
    libraryItemId: UUID;
    /**
     * The unique identifier of the Q App associated with the library item.
     */
    appId: UUID;
    /**
     * The version of the Q App associated with the library item.
     */
    appVersion: AppVersion;
    /**
     * The categories associated with the library item.
     */
    categories: CategoryList;
    /**
     * The status of the library item.
     */
    status: String;
    /**
     * The date and time the library item was created.
     */
    createdAt: QAppsTimestamp;
    /**
     * The user who created the library item.
     */
    createdBy: String;
    /**
     * The date and time the library item was last updated.
     */
    updatedAt?: QAppsTimestamp;
    /**
     * The user who last updated the library item.
     */
    updatedBy?: String;
    /**
     * The number of ratings the library item has received.
     */
    ratingCount: Integer;
    /**
     * Whether the current user has rated the library item.
     */
    isRatedByUser?: Boolean;
    /**
     * The number of users who have the associated Q App.
     */
    userCount?: Integer;
    /**
     * Indicates whether the library item has been verified.
     */
    isVerified?: Boolean;
  }
  export type LibraryItemStatus = "PUBLISHED"|"DISABLED"|string;
  export interface ListLibraryItemsInput {
    /**
     * The unique identifier of the Amazon Q Business application environment instance.
     */
    instanceId: InstanceId;
    /**
     * The maximum number of library items to return in the response.
     */
    limit?: PageLimit;
    /**
     * The token to request the next page of results.
     */
    nextToken?: PaginationToken;
    /**
     * Optional category to filter the library items by.
     */
    categoryId?: UUID;
  }
  export interface ListLibraryItemsOutput {
    /**
     * The list of library items meeting the request criteria.
     */
    libraryItems?: LibraryItemList;
    /**
     * The token to use to request the next page of results.
     */
    nextToken?: String;
  }
  export interface ListQAppsInput {
    /**
     * The unique identifier of the Amazon Q Business application environment instance.
     */
    instanceId: InstanceId;
    /**
     * The maximum number of Q Apps to return in the response.
     */
    limit?: PageLimit;
    /**
     * The token to request the next page of results.
     */
    nextToken?: PaginationToken;
  }
  export interface ListQAppsOutput {
    /**
     * The list of Amazon Q Apps meeting the request criteria.
     */
    apps: UserAppsList;
    /**
     * The token to use to request the next page of results.
     */
    nextToken?: String;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource whose tags should be listed.
     */
    resourceARN: AmazonResourceName;
  }
  export interface ListTagsForResourceResponse {
    /**
     * The list of tags that are assigned to the resource.
     */
    tags?: Tags;
  }
  export type Long = number;
  export type PageLimit = number;
  export type PaginationToken = string;
  export type Placeholder = string;
  export type PlatoString = string;
  export type PluginId = string;
  export type PluginType = "SERVICE_NOW"|"SALESFORCE"|"JIRA"|"ZENDESK"|"CUSTOM"|string;
  export interface PredictAppDefinition {
    /**
     * The title of the generated Q App definition.
     */
    title: Title;
    /**
     * The description of the generated Q App definition.
     */
    description?: Description;
    /**
     * The definition specifying the cards and flow of the generated Q App.
     */
    appDefinition: AppDefinitionInput;
  }
  export interface PredictQAppInput {
    /**
     * The unique identifier of the Amazon Q Business application environment instance.
     */
    instanceId: InstanceId;
    /**
     * The input to generate the Q App definition from, either a conversation or problem statement.
     */
    options?: PredictQAppInputOptions;
  }
  export interface PredictQAppInputOptions {
    /**
     * A conversation to use as input for generating the Q App definition.
     */
    conversation?: PredictQAppInputOptionsConversationList;
    /**
     * A problem statement to use as input for generating the Q App definition.
     */
    problemStatement?: PredictQAppInputOptionsProblemStatementString;
  }
  export type PredictQAppInputOptionsConversationList = ConversationMessage[];
  export type PredictQAppInputOptionsProblemStatementString = string;
  export interface PredictQAppOutput {
    /**
     * The generated Q App definition.
     */
    app: PredictAppDefinition;
    /**
     * The problem statement extracted from the input conversation, if provided.
     */
    problemStatement: String;
  }
  export type Prompt = string;
  export type QAppsTimestamp = Date;
  export interface QPluginCard {
    /**
     * The unique identifier of the plugin card.
     */
    id: UUID;
    /**
     * The title or label of the plugin card.
     */
    title: Title;
    /**
     * Any dependencies or requirements for the plugin card.
     */
    dependencies: DependencyList;
    /**
     * The type of the card.
     */
    type: CardType;
    /**
     * The prompt or instructions displayed for the plugin card.
     */
    prompt: Prompt;
    /**
     * The type or category of the plugin used by the card.
     */
    pluginType: PluginType;
    /**
     * The unique identifier of the plugin used by the card.
     */
    pluginId: String;
  }
  export interface QPluginCardInput {
    /**
     * The title or label of the plugin card.
     */
    title: Title;
    /**
     * The unique identifier of the plugin card.
     */
    id: UUID;
    /**
     * The type of the card.
     */
    type: CardType;
    /**
     * The prompt or instructions displayed for the plugin card.
     */
    prompt: Prompt;
    /**
     * The unique identifier of the plugin used by the card.
     */
    pluginId: PluginId;
  }
  export interface QQueryCard {
    /**
     * The unique identifier of the query card. 
     */
    id: UUID;
    /**
     * The title or label of the query card.
     */
    title: Title;
    /**
     * Any dependencies or requirements for the query card.
     */
    dependencies: DependencyList;
    /**
     * The type of the card.
     */
    type: CardType;
    /**
     * The prompt or instructions displayed for the query card.
     */
    prompt: Prompt;
    /**
     * The source or type of output generated by the query card.
     */
    outputSource: CardOutputSource;
    /**
     * The Amazon Q Business filters applied in this query card when resolving data sources
     */
    attributeFilter?: AttributeFilter;
  }
  export interface QQueryCardInput {
    /**
     * The title or label of the query card.
     */
    title: Title;
    /**
     * The unique identifier of the query card.
     */
    id: UUID;
    /**
     * The type of the card.
     */
    type: CardType;
    /**
     * The prompt or instructions displayed for the query card.
     */
    prompt: Prompt;
    /**
     * The source or type of output to generate for the query card.
     */
    outputSource?: CardOutputSource;
    /**
     * Turns on filtering of responses based on document attributes or metadata fields.
     */
    attributeFilter?: AttributeFilter;
  }
  export type Sender = "USER"|"SYSTEM"|string;
  export interface StartQAppSessionInput {
    /**
     * The unique identifier of the Amazon Q Business application environment instance.
     */
    instanceId: InstanceId;
    /**
     * The unique identifier of the Q App to start a session for.
     */
    appId: UUID;
    /**
     * The version of the Q App to use for the session.
     */
    appVersion: AppVersion;
    /**
     * Optional initial input values to provide for the Q App session.
     */
    initialValues?: CardValueList;
    /**
     * Optional tags to associate with the new Q App session.
     */
    tags?: TagMap;
  }
  export interface StartQAppSessionOutput {
    /**
     * The unique identifier of the new Q App session.
     */
    sessionId: String;
    /**
     * The Amazon Resource Name (ARN) of the new Q App session.
     */
    sessionArn: String;
  }
  export interface StopQAppSessionInput {
    /**
     * The unique identifier of the Amazon Q Business application environment instance.
     */
    instanceId: InstanceId;
    /**
     * The unique identifier of the Q App session to stop.
     */
    sessionId: UUID;
  }
  export type String = string;
  export type TagKey = string;
  export type TagKeys = TagKey[];
  export type TagMap = {[key: string]: String};
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource to tag.
     */
    resourceARN: AmazonResourceName;
    /**
     * The tags to associate with the resource.
     */
    tags: Tags;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type Tags = {[key: string]: TagValue};
  export interface TextInputCard {
    /**
     * The unique identifier of the text input card.
     */
    id: UUID;
    /**
     * The title or label of the text input card.
     */
    title: Title;
    /**
     * Any dependencies or requirements for the text input card.
     */
    dependencies: DependencyList;
    /**
     * The type of the card.
     */
    type: CardType;
    /**
     * The placeholder text to display in the text input field.
     */
    placeholder?: Placeholder;
    /**
     * The default value to pre-populate in the text input field.
     */
    defaultValue?: Default;
  }
  export interface TextInputCardInput {
    /**
     * The title or label of the text input card.
     */
    title: Title;
    /**
     * The unique identifier of the text input card.
     */
    id: UUID;
    /**
     * The type of the card.
     */
    type: CardType;
    /**
     * The placeholder text to display in the text input field.
     */
    placeholder?: Placeholder;
    /**
     * The default value to pre-populate in the text input field.
     */
    defaultValue?: Default;
  }
  export type Timestamp = Date;
  export type Title = string;
  export type UUID = string;
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource to disassociate the tag from.
     */
    resourceARN: AmazonResourceName;
    /**
     * The keys of the tags to disassociate from the resource.
     */
    tagKeys: TagKeys;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateLibraryItemInput {
    /**
     * The unique identifier of the Amazon Q Business application environment instance.
     */
    instanceId: InstanceId;
    /**
     * The unique identifier of the library item to update.
     */
    libraryItemId: UUID;
    /**
     * The new status to set for the library item, such as "Published" or "Hidden".
     */
    status?: LibraryItemStatus;
    /**
     * The new categories to associate with the library item.
     */
    categories?: CategoryIdList;
  }
  export interface UpdateLibraryItemMetadataInput {
    /**
     * The unique identifier of the Amazon Q Business application environment instance.
     */
    instanceId: InstanceId;
    /**
     * The unique identifier of the updated library item.
     */
    libraryItemId: UUID;
    /**
     * The verification status of the library item
     */
    isVerified?: Boolean;
  }
  export interface UpdateLibraryItemOutput {
    /**
     * The unique identifier of the updated library item.
     */
    libraryItemId: UUID;
    /**
     * The unique identifier of the Q App associated with the library item.
     */
    appId: UUID;
    /**
     * The version of the Q App associated with the library item.
     */
    appVersion: AppVersion;
    /**
     * The categories associated with the updated library item.
     */
    categories: CategoryList;
    /**
     * The new status of the updated library item.
     */
    status: String;
    /**
     * The date and time the library item was originally created.
     */
    createdAt: QAppsTimestamp;
    /**
     * The user who originally created the library item.
     */
    createdBy: String;
    /**
     * The date and time the library item was last updated.
     */
    updatedAt?: QAppsTimestamp;
    /**
     * The user who last updated the library item.
     */
    updatedBy?: String;
    /**
     * The number of ratings the library item has received.
     */
    ratingCount: Integer;
    /**
     * Whether the current user has rated the library item.
     */
    isRatedByUser?: Boolean;
    /**
     * The number of users who have the associated Q App.
     */
    userCount?: Integer;
    /**
     * Indicates whether the library item has been verified.
     */
    isVerified?: Boolean;
  }
  export interface UpdateQAppInput {
    /**
     * The unique identifier of the Amazon Q Business application environment instance.
     */
    instanceId: InstanceId;
    /**
     * The unique identifier of the Q App to update.
     */
    appId: UUID;
    /**
     * The new title for the Q App.
     */
    title?: Title;
    /**
     * The new description for the Q App.
     */
    description?: Description;
    /**
     * The new definition specifying the cards and flow for the Q App.
     */
    appDefinition?: AppDefinitionInput;
  }
  export interface UpdateQAppOutput {
    /**
     * The unique identifier of the updated Q App.
     */
    appId: UUID;
    /**
     * The Amazon Resource Name (ARN) of the updated Q App.
     */
    appArn: AppArn;
    /**
     * The new title of the updated Q App.
     */
    title: Title;
    /**
     * The new description of the updated Q App.
     */
    description?: Description;
    /**
     * The initial prompt for the updated Q App.
     */
    initialPrompt?: InitialPrompt;
    /**
     * The new version of the updated Q App.
     */
    appVersion: AppVersion;
    /**
     * The status of the updated Q App.
     */
    status: AppStatus;
    /**
     * The date and time the Q App was originally created.
     */
    createdAt: QAppsTimestamp;
    /**
     * The user who originally created the Q App.
     */
    createdBy: String;
    /**
     * The date and time the Q App was last updated.
     */
    updatedAt: QAppsTimestamp;
    /**
     * The user who last updated the Q App.
     */
    updatedBy: String;
    /**
     * The capabilities required for the updated Q App.
     */
    requiredCapabilities?: AppRequiredCapabilities;
  }
  export interface UpdateQAppSessionInput {
    /**
     * The unique identifier of the Amazon Q Business application environment instance.
     */
    instanceId: InstanceId;
    /**
     * The unique identifier of the Q App session to provide input for.
     */
    sessionId: UUID;
    /**
     * The input values to provide for the current state of the Q App session.
     */
    values?: CardValueList;
  }
  export interface UpdateQAppSessionOutput {
    /**
     * The unique identifier of the updated Q App session.
     */
    sessionId: String;
    /**
     * The Amazon Resource Name (ARN) of the updated Q App session.
     */
    sessionArn: String;
  }
  export interface UserAppItem {
    /**
     * The unique identifier of the Q App.
     */
    appId: UUID;
    /**
     * The Amazon Resource Name (ARN) of the Q App.
     */
    appArn: AppArn;
    /**
     * The title of the Q App.
     */
    title: Title;
    /**
     * The description of the Q App.
     */
    description?: Description;
    /**
     * The date and time the user's association with the Q App was created.
     */
    createdAt: QAppsTimestamp;
    /**
     * A flag indicating whether the user can edit the Q App.
     */
    canEdit?: Boolean;
    /**
     * The status of the user's association with the Q App.
     */
    status?: String;
    /**
     * Indicates whether the Q App has been verified.
     */
    isVerified?: Boolean;
  }
  export type UserAppsList = UserAppItem[];
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
   * Contains interfaces for use with the QApps client.
   */
  export import Types = QApps;
}
export = QApps;
