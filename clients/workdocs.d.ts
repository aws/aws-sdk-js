import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class WorkDocs extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: WorkDocs.Types.ClientConfiguration)
  config: Config & WorkDocs.Types.ClientConfiguration;
  /**
   * Aborts the upload of the specified document version that was previously initiated by InitiateDocumentVersionUpload. The client should make this call only when it no longer intends or fails to upload the document version.
   */
  abortDocumentVersionUpload(params: WorkDocs.Types.AbortDocumentVersionUploadRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Aborts the upload of the specified document version that was previously initiated by InitiateDocumentVersionUpload. The client should make this call only when it no longer intends or fails to upload the document version.
   */
  abortDocumentVersionUpload(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Activates the specified user. Only active users can access Amazon WorkDocs.
   */
  activateUser(params: WorkDocs.Types.ActivateUserRequest, callback?: (err: AWSError, data: WorkDocs.Types.ActivateUserResponse) => void): Request<WorkDocs.Types.ActivateUserResponse, AWSError>;
  /**
   * Activates the specified user. Only active users can access Amazon WorkDocs.
   */
  activateUser(callback?: (err: AWSError, data: WorkDocs.Types.ActivateUserResponse) => void): Request<WorkDocs.Types.ActivateUserResponse, AWSError>;
  /**
   * Creates a set of permissions for the specified folder or document. The resource permissions are overwritten if the principals already have different permissions.
   */
  addResourcePermissions(params: WorkDocs.Types.AddResourcePermissionsRequest, callback?: (err: AWSError, data: WorkDocs.Types.AddResourcePermissionsResponse) => void): Request<WorkDocs.Types.AddResourcePermissionsResponse, AWSError>;
  /**
   * Creates a set of permissions for the specified folder or document. The resource permissions are overwritten if the principals already have different permissions.
   */
  addResourcePermissions(callback?: (err: AWSError, data: WorkDocs.Types.AddResourcePermissionsResponse) => void): Request<WorkDocs.Types.AddResourcePermissionsResponse, AWSError>;
  /**
   * Creates a folder with the specified name and parent folder.
   */
  createFolder(params: WorkDocs.Types.CreateFolderRequest, callback?: (err: AWSError, data: WorkDocs.Types.CreateFolderResponse) => void): Request<WorkDocs.Types.CreateFolderResponse, AWSError>;
  /**
   * Creates a folder with the specified name and parent folder.
   */
  createFolder(callback?: (err: AWSError, data: WorkDocs.Types.CreateFolderResponse) => void): Request<WorkDocs.Types.CreateFolderResponse, AWSError>;
  /**
   * Configure WorkDocs to use Amazon SNS notifications. The endpoint receives a confirmation message, and must confirm the subscription. For more information, see Confirm the Subscription in the Amazon Simple Notification Service Developer Guide.
   */
  createNotificationSubscription(params: WorkDocs.Types.CreateNotificationSubscriptionRequest, callback?: (err: AWSError, data: WorkDocs.Types.CreateNotificationSubscriptionResponse) => void): Request<WorkDocs.Types.CreateNotificationSubscriptionResponse, AWSError>;
  /**
   * Configure WorkDocs to use Amazon SNS notifications. The endpoint receives a confirmation message, and must confirm the subscription. For more information, see Confirm the Subscription in the Amazon Simple Notification Service Developer Guide.
   */
  createNotificationSubscription(callback?: (err: AWSError, data: WorkDocs.Types.CreateNotificationSubscriptionResponse) => void): Request<WorkDocs.Types.CreateNotificationSubscriptionResponse, AWSError>;
  /**
   * Creates a user in a Simple AD or Microsoft AD directory. The status of a newly created user is "ACTIVE". New users can access Amazon WorkDocs.
   */
  createUser(params: WorkDocs.Types.CreateUserRequest, callback?: (err: AWSError, data: WorkDocs.Types.CreateUserResponse) => void): Request<WorkDocs.Types.CreateUserResponse, AWSError>;
  /**
   * Creates a user in a Simple AD or Microsoft AD directory. The status of a newly created user is "ACTIVE". New users can access Amazon WorkDocs.
   */
  createUser(callback?: (err: AWSError, data: WorkDocs.Types.CreateUserResponse) => void): Request<WorkDocs.Types.CreateUserResponse, AWSError>;
  /**
   * Deactivates the specified user, which revokes the user's access to Amazon WorkDocs.
   */
  deactivateUser(params: WorkDocs.Types.DeactivateUserRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deactivates the specified user, which revokes the user's access to Amazon WorkDocs.
   */
  deactivateUser(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Permanently deletes the specified document and its associated metadata.
   */
  deleteDocument(params: WorkDocs.Types.DeleteDocumentRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Permanently deletes the specified document and its associated metadata.
   */
  deleteDocument(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Permanently deletes the specified folder and its contents.
   */
  deleteFolder(params: WorkDocs.Types.DeleteFolderRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Permanently deletes the specified folder and its contents.
   */
  deleteFolder(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the contents of the specified folder.
   */
  deleteFolderContents(params: WorkDocs.Types.DeleteFolderContentsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the contents of the specified folder.
   */
  deleteFolderContents(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified subscription from the specified organization.
   */
  deleteNotificationSubscription(params: WorkDocs.Types.DeleteNotificationSubscriptionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified subscription from the specified organization.
   */
  deleteNotificationSubscription(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified user from a Simple AD or Microsoft AD directory.
   */
  deleteUser(params: WorkDocs.Types.DeleteUserRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified user from a Simple AD or Microsoft AD directory.
   */
  deleteUser(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Retrieves the document versions for the specified document. By default, only active versions are returned.
   */
  describeDocumentVersions(params: WorkDocs.Types.DescribeDocumentVersionsRequest, callback?: (err: AWSError, data: WorkDocs.Types.DescribeDocumentVersionsResponse) => void): Request<WorkDocs.Types.DescribeDocumentVersionsResponse, AWSError>;
  /**
   * Retrieves the document versions for the specified document. By default, only active versions are returned.
   */
  describeDocumentVersions(callback?: (err: AWSError, data: WorkDocs.Types.DescribeDocumentVersionsResponse) => void): Request<WorkDocs.Types.DescribeDocumentVersionsResponse, AWSError>;
  /**
   * Describes the contents of the specified folder, including its documents and sub-folders. By default, Amazon WorkDocs returns the first 100 active document and folder metadata items. If there are more results, the response includes a marker that you can use to request the next set of results. You can also request initialized documents.
   */
  describeFolderContents(params: WorkDocs.Types.DescribeFolderContentsRequest, callback?: (err: AWSError, data: WorkDocs.Types.DescribeFolderContentsResponse) => void): Request<WorkDocs.Types.DescribeFolderContentsResponse, AWSError>;
  /**
   * Describes the contents of the specified folder, including its documents and sub-folders. By default, Amazon WorkDocs returns the first 100 active document and folder metadata items. If there are more results, the response includes a marker that you can use to request the next set of results. You can also request initialized documents.
   */
  describeFolderContents(callback?: (err: AWSError, data: WorkDocs.Types.DescribeFolderContentsResponse) => void): Request<WorkDocs.Types.DescribeFolderContentsResponse, AWSError>;
  /**
   * Lists the specified notification subscriptions.
   */
  describeNotificationSubscriptions(params: WorkDocs.Types.DescribeNotificationSubscriptionsRequest, callback?: (err: AWSError, data: WorkDocs.Types.DescribeNotificationSubscriptionsResponse) => void): Request<WorkDocs.Types.DescribeNotificationSubscriptionsResponse, AWSError>;
  /**
   * Lists the specified notification subscriptions.
   */
  describeNotificationSubscriptions(callback?: (err: AWSError, data: WorkDocs.Types.DescribeNotificationSubscriptionsResponse) => void): Request<WorkDocs.Types.DescribeNotificationSubscriptionsResponse, AWSError>;
  /**
   * Describes the permissions of a specified resource.
   */
  describeResourcePermissions(params: WorkDocs.Types.DescribeResourcePermissionsRequest, callback?: (err: AWSError, data: WorkDocs.Types.DescribeResourcePermissionsResponse) => void): Request<WorkDocs.Types.DescribeResourcePermissionsResponse, AWSError>;
  /**
   * Describes the permissions of a specified resource.
   */
  describeResourcePermissions(callback?: (err: AWSError, data: WorkDocs.Types.DescribeResourcePermissionsResponse) => void): Request<WorkDocs.Types.DescribeResourcePermissionsResponse, AWSError>;
  /**
   * Describes the specified users. You can describe all users or filter the results (for example, by status or organization). By default, Amazon WorkDocs returns the first 24 active or pending users. If there are more results, the response includes a marker that you can use to request the next set of results.
   */
  describeUsers(params: WorkDocs.Types.DescribeUsersRequest, callback?: (err: AWSError, data: WorkDocs.Types.DescribeUsersResponse) => void): Request<WorkDocs.Types.DescribeUsersResponse, AWSError>;
  /**
   * Describes the specified users. You can describe all users or filter the results (for example, by status or organization). By default, Amazon WorkDocs returns the first 24 active or pending users. If there are more results, the response includes a marker that you can use to request the next set of results.
   */
  describeUsers(callback?: (err: AWSError, data: WorkDocs.Types.DescribeUsersResponse) => void): Request<WorkDocs.Types.DescribeUsersResponse, AWSError>;
  /**
   * Retrieves the specified document object.
   */
  getDocument(params: WorkDocs.Types.GetDocumentRequest, callback?: (err: AWSError, data: WorkDocs.Types.GetDocumentResponse) => void): Request<WorkDocs.Types.GetDocumentResponse, AWSError>;
  /**
   * Retrieves the specified document object.
   */
  getDocument(callback?: (err: AWSError, data: WorkDocs.Types.GetDocumentResponse) => void): Request<WorkDocs.Types.GetDocumentResponse, AWSError>;
  /**
   * Retrieves the path information (the hierarchy from the root folder) for the requested document. By default, Amazon WorkDocs returns a maximum of 100 levels upwards from the requested document and only includes the IDs of the parent folders in the path. You can limit the maximum number of levels. You can also request the names of the parent folders.
   */
  getDocumentPath(params: WorkDocs.Types.GetDocumentPathRequest, callback?: (err: AWSError, data: WorkDocs.Types.GetDocumentPathResponse) => void): Request<WorkDocs.Types.GetDocumentPathResponse, AWSError>;
  /**
   * Retrieves the path information (the hierarchy from the root folder) for the requested document. By default, Amazon WorkDocs returns a maximum of 100 levels upwards from the requested document and only includes the IDs of the parent folders in the path. You can limit the maximum number of levels. You can also request the names of the parent folders.
   */
  getDocumentPath(callback?: (err: AWSError, data: WorkDocs.Types.GetDocumentPathResponse) => void): Request<WorkDocs.Types.GetDocumentPathResponse, AWSError>;
  /**
   * Retrieves version metadata for the specified document.
   */
  getDocumentVersion(params: WorkDocs.Types.GetDocumentVersionRequest, callback?: (err: AWSError, data: WorkDocs.Types.GetDocumentVersionResponse) => void): Request<WorkDocs.Types.GetDocumentVersionResponse, AWSError>;
  /**
   * Retrieves version metadata for the specified document.
   */
  getDocumentVersion(callback?: (err: AWSError, data: WorkDocs.Types.GetDocumentVersionResponse) => void): Request<WorkDocs.Types.GetDocumentVersionResponse, AWSError>;
  /**
   * Retrieves the metadata of the specified folder.
   */
  getFolder(params: WorkDocs.Types.GetFolderRequest, callback?: (err: AWSError, data: WorkDocs.Types.GetFolderResponse) => void): Request<WorkDocs.Types.GetFolderResponse, AWSError>;
  /**
   * Retrieves the metadata of the specified folder.
   */
  getFolder(callback?: (err: AWSError, data: WorkDocs.Types.GetFolderResponse) => void): Request<WorkDocs.Types.GetFolderResponse, AWSError>;
  /**
   * Retrieves the path information (the hierarchy from the root folder) for the specified folder. By default, Amazon WorkDocs returns a maximum of 100 levels upwards from the requested folder and only includes the IDs of the parent folders in the path. You can limit the maximum number of levels. You can also request the parent folder names.
   */
  getFolderPath(params: WorkDocs.Types.GetFolderPathRequest, callback?: (err: AWSError, data: WorkDocs.Types.GetFolderPathResponse) => void): Request<WorkDocs.Types.GetFolderPathResponse, AWSError>;
  /**
   * Retrieves the path information (the hierarchy from the root folder) for the specified folder. By default, Amazon WorkDocs returns a maximum of 100 levels upwards from the requested folder and only includes the IDs of the parent folders in the path. You can limit the maximum number of levels. You can also request the parent folder names.
   */
  getFolderPath(callback?: (err: AWSError, data: WorkDocs.Types.GetFolderPathResponse) => void): Request<WorkDocs.Types.GetFolderPathResponse, AWSError>;
  /**
   * Creates a new document object and version object. The client specifies the parent folder ID and name of the document to upload. The ID is optionally specified when creating a new version of an existing document. This is the first step to upload a document. Next, upload the document to the URL returned from the call, and then call UpdateDocumentVersion. To cancel the document upload, call AbortDocumentVersionUpload.
   */
  initiateDocumentVersionUpload(params: WorkDocs.Types.InitiateDocumentVersionUploadRequest, callback?: (err: AWSError, data: WorkDocs.Types.InitiateDocumentVersionUploadResponse) => void): Request<WorkDocs.Types.InitiateDocumentVersionUploadResponse, AWSError>;
  /**
   * Creates a new document object and version object. The client specifies the parent folder ID and name of the document to upload. The ID is optionally specified when creating a new version of an existing document. This is the first step to upload a document. Next, upload the document to the URL returned from the call, and then call UpdateDocumentVersion. To cancel the document upload, call AbortDocumentVersionUpload.
   */
  initiateDocumentVersionUpload(callback?: (err: AWSError, data: WorkDocs.Types.InitiateDocumentVersionUploadResponse) => void): Request<WorkDocs.Types.InitiateDocumentVersionUploadResponse, AWSError>;
  /**
   * Removes all the permissions from the specified resource.
   */
  removeAllResourcePermissions(params: WorkDocs.Types.RemoveAllResourcePermissionsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes all the permissions from the specified resource.
   */
  removeAllResourcePermissions(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the permission for the specified principal from the specified resource.
   */
  removeResourcePermission(params: WorkDocs.Types.RemoveResourcePermissionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the permission for the specified principal from the specified resource.
   */
  removeResourcePermission(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the specified attributes of the specified document. The user must have access to both the document and its parent folder, if applicable.
   */
  updateDocument(params: WorkDocs.Types.UpdateDocumentRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the specified attributes of the specified document. The user must have access to both the document and its parent folder, if applicable.
   */
  updateDocument(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Changes the status of the document version to ACTIVE.  Amazon WorkDocs also sets its document container to ACTIVE. This is the last step in a document upload, after the client uploads the document to an S3-presigned URL returned by InitiateDocumentVersionUpload. 
   */
  updateDocumentVersion(params: WorkDocs.Types.UpdateDocumentVersionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Changes the status of the document version to ACTIVE.  Amazon WorkDocs also sets its document container to ACTIVE. This is the last step in a document upload, after the client uploads the document to an S3-presigned URL returned by InitiateDocumentVersionUpload. 
   */
  updateDocumentVersion(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the specified attributes of the specified folder. The user must have access to both the folder and its parent folder, if applicable.
   */
  updateFolder(params: WorkDocs.Types.UpdateFolderRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the specified attributes of the specified folder. The user must have access to both the folder and its parent folder, if applicable.
   */
  updateFolder(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the specified attributes of the specified user, and grants or revokes administrative privileges to the Amazon WorkDocs site.
   */
  updateUser(params: WorkDocs.Types.UpdateUserRequest, callback?: (err: AWSError, data: WorkDocs.Types.UpdateUserResponse) => void): Request<WorkDocs.Types.UpdateUserResponse, AWSError>;
  /**
   * Updates the specified attributes of the specified user, and grants or revokes administrative privileges to the Amazon WorkDocs site.
   */
  updateUser(callback?: (err: AWSError, data: WorkDocs.Types.UpdateUserResponse) => void): Request<WorkDocs.Types.UpdateUserResponse, AWSError>;
}
declare namespace WorkDocs {
  export interface AbortDocumentVersionUploadRequest {
    /**
     * The ID of the document.
     */
    DocumentId: ResourceIdType;
    /**
     * The ID of the version.
     */
    VersionId: DocumentVersionIdType;
  }
  export interface ActivateUserRequest {
    /**
     * The ID of the user.
     */
    UserId: IdType;
  }
  export interface ActivateUserResponse {
    /**
     * The user information.
     */
    User?: User;
  }
  export interface AddResourcePermissionsRequest {
    /**
     * The ID of the resource.
     */
    ResourceId: ResourceIdType;
    /**
     * The users, groups, or organization being granted permission.
     */
    Principals: SharePrincipalList;
  }
  export interface AddResourcePermissionsResponse {
    /**
     * The share results.
     */
    ShareResults?: ShareResultsList;
  }
  export interface CreateFolderRequest {
    /**
     * The name of the new folder.
     */
    Name?: ResourceNameType;
    /**
     * The ID of the parent folder.
     */
    ParentFolderId: ResourceIdType;
  }
  export interface CreateFolderResponse {
    /**
     * The metadata of the folder.
     */
    Metadata?: FolderMetadata;
  }
  export interface CreateNotificationSubscriptionRequest {
    /**
     * The ID of the organization.
     */
    OrganizationId: IdType;
    /**
     * The endpoint to receive the notifications. If the protocol is HTTPS, the endpoint is a URL that begins with "https://".
     */
    Endpoint: SubscriptionEndPointType;
    /**
     * The protocol to use. The supported value is https, which delivers JSON-encoded messasges using HTTPS POST.
     */
    Protocol: SubscriptionProtocolType;
    /**
     * The notification type.
     */
    SubscriptionType: SubscriptionType;
  }
  export interface CreateNotificationSubscriptionResponse {
    /**
     * The subscription.
     */
    Subscription?: Subscription;
  }
  export interface CreateUserRequest {
    /**
     * The ID of the organization.
     */
    OrganizationId?: IdType;
    /**
     * The login name of the user.
     */
    Username: UsernameType;
    /**
     * The given name of the user.
     */
    GivenName: UserAttributeValueType;
    /**
     * The surname of the user.
     */
    Surname: UserAttributeValueType;
    /**
     * The password of the user.
     */
    Password: PasswordType;
    /**
     * The time zone ID of the user.
     */
    TimeZoneId?: TimeZoneIdType;
    /**
     * The amount of storage for the user.
     */
    StorageRule?: StorageRuleType;
  }
  export interface CreateUserResponse {
    /**
     * The user information.
     */
    User?: User;
  }
  export interface DeactivateUserRequest {
    /**
     * The ID of the user.
     */
    UserId: IdType;
  }
  export interface DeleteDocumentRequest {
    /**
     * The ID of the document.
     */
    DocumentId: ResourceIdType;
  }
  export interface DeleteFolderContentsRequest {
    /**
     * The ID of the folder.
     */
    FolderId: ResourceIdType;
  }
  export interface DeleteFolderRequest {
    /**
     * The ID of the folder.
     */
    FolderId: ResourceIdType;
  }
  export interface DeleteNotificationSubscriptionRequest {
    /**
     * The ID of the subscription.
     */
    SubscriptionId: IdType;
    /**
     * The ID of the organization.
     */
    OrganizationId: IdType;
  }
  export interface DeleteUserRequest {
    /**
     * The ID of the user.
     */
    UserId: IdType;
  }
  export interface DescribeDocumentVersionsRequest {
    /**
     * The ID of the document.
     */
    DocumentId: ResourceIdType;
    /**
     * The marker for the next set of results. (You received this marker from a previous call.)
     */
    Marker?: PageMarkerType;
    /**
     * The maximum number of versions to return with this call.
     */
    Limit?: LimitType;
    /**
     * A comma-separated list of values. Specify "INITIALIZED" to include incomplete versions.
     */
    Include?: FieldNamesType;
    /**
     * Specify "SOURCE" to include initialized versions and a URL for the source document.
     */
    Fields?: FieldNamesType;
  }
  export interface DescribeDocumentVersionsResponse {
    /**
     * The document versions.
     */
    DocumentVersions?: DocumentVersionMetadataList;
    /**
     * The marker to use when requesting the next set of results. If there are no additional results, the string is empty.
     */
    Marker?: PageMarkerType;
  }
  export interface DescribeFolderContentsRequest {
    /**
     * The ID of the folder.
     */
    FolderId: ResourceIdType;
    /**
     * The sorting criteria.
     */
    Sort?: ResourceSortType;
    /**
     * The order for the contents of the folder.
     */
    Order?: OrderType;
    /**
     * The maximum number of items to return with this call.
     */
    Limit?: LimitType;
    /**
     * The marker for the next set of results. (You received this marker from a previous call.)
     */
    Marker?: PageMarkerType;
    /**
     * The type of items.
     */
    Type?: FolderContentType;
    /**
     * The contents to include. Specify "INITIALIZED" to include initialized documents.
     */
    Include?: FieldNamesType;
  }
  export interface DescribeFolderContentsResponse {
    /**
     * The sub-folders in the specified folder.
     */
    Folders?: FolderMetadataList;
    /**
     * The documents in the specified folder.
     */
    Documents?: DocumentMetadataList;
    /**
     * The marker to use when requesting the next set of results. If there are no additional results, the string is empty.
     */
    Marker?: PageMarkerType;
  }
  export interface DescribeNotificationSubscriptionsRequest {
    /**
     * The ID of the organization.
     */
    OrganizationId: IdType;
    /**
     * The marker for the next set of results. (You received this marker from a previous call.)
     */
    Marker?: PageMarkerType;
    /**
     * The maximum number of items to return with this call.
     */
    Limit?: LimitType;
  }
  export interface DescribeNotificationSubscriptionsResponse {
    /**
     * The subscriptions.
     */
    Subscriptions?: SubscriptionList;
    /**
     * The marker to use when requesting the next set of results. If there are no additional results, the string is empty.
     */
    Marker?: PageMarkerType;
  }
  export interface DescribeResourcePermissionsRequest {
    /**
     * The ID of the resource.
     */
    ResourceId: ResourceIdType;
    /**
     * The maximum number of items to return with this call.
     */
    Limit?: LimitType;
    /**
     * The marker for the next set of results. (You received this marker from a previous call)
     */
    Marker?: PageMarkerType;
  }
  export interface DescribeResourcePermissionsResponse {
    /**
     * The principals.
     */
    Principals?: PrincipalList;
    /**
     * The marker to use when requesting the next set of results. If there are no additional results, the string is empty.
     */
    Marker?: PageMarkerType;
  }
  export interface DescribeUsersRequest {
    /**
     * The ID of the organization.
     */
    OrganizationId?: IdType;
    /**
     * The IDs of the users.
     */
    UserIds?: UserIdsType;
    /**
     * A query to filter users by user name.
     */
    Query?: SearchQueryType;
    /**
     * The state of the users. Specify "ALL" to include inactive users.
     */
    Include?: UserFilterType;
    /**
     * The order for the results.
     */
    Order?: OrderType;
    /**
     * The sorting criteria.
     */
    Sort?: UserSortType;
    /**
     * The marker for the next set of results. (You received this marker from a previous call.)
     */
    Marker?: PageMarkerType;
    /**
     * The maximum number of items to return.
     */
    Limit?: LimitType;
    /**
     * A comma-separated list of values. Specify "STORAGE_METADATA" to include the user storage quota and utilization information.
     */
    Fields?: FieldNamesType;
  }
  export interface DescribeUsersResponse {
    /**
     * The users.
     */
    Users?: OrganizationUserList;
    /**
     * The total number of users included in the results.
     */
    TotalNumberOfUsers?: SizeType;
    /**
     * The marker to use when requesting the next set of results. If there are no additional results, the string is empty.
     */
    Marker?: PageMarkerType;
  }
  export type DocumentContentType = string;
  export interface DocumentMetadata {
    /**
     * The ID of the document.
     */
    Id?: ResourceIdType;
    /**
     * The ID of the creator.
     */
    CreatorId?: IdType;
    /**
     * The ID of the parent folder.
     */
    ParentFolderId?: ResourceIdType;
    /**
     * The time when the document was created.
     */
    CreatedTimestamp?: TimestampType;
    /**
     * The time when the document was updated.
     */
    ModifiedTimestamp?: TimestampType;
    /**
     * The latest version of the document.
     */
    LatestVersionMetadata?: DocumentVersionMetadata;
    /**
     * The resource state.
     */
    ResourceState?: ResourceStateType;
  }
  export type DocumentMetadataList = DocumentMetadata[];
  export type DocumentSourceType = "ORIGINAL"|"WITH_COMMENTS"|string;
  export type DocumentSourceUrlMap = {[key: string]: UrlType};
  export type DocumentStatusType = "INITIALIZED"|"ACTIVE"|string;
  export type DocumentThumbnailType = "SMALL"|"SMALL_HQ"|"LARGE"|string;
  export type DocumentThumbnailUrlMap = {[key: string]: UrlType};
  export type DocumentVersionIdType = string;
  export interface DocumentVersionMetadata {
    /**
     * The ID of the version.
     */
    Id?: DocumentVersionIdType;
    /**
     * The name of the version.
     */
    Name?: ResourceNameType;
    /**
     * The content type of the document.
     */
    ContentType?: DocumentContentType;
    /**
     * The size of the document, in bytes.
     */
    Size?: SizeType;
    /**
     * The signature of the document.
     */
    Signature?: HashType;
    /**
     * The status of the document.
     */
    Status?: DocumentStatusType;
    /**
     * The time stamp when the document was first uploaded.
     */
    CreatedTimestamp?: TimestampType;
    /**
     * The time stamp when the document was last uploaded.
     */
    ModifiedTimestamp?: TimestampType;
    /**
     * The time stamp when the content of the document was originally created.
     */
    ContentCreatedTimestamp?: TimestampType;
    /**
     * The time stamp when the content of the document was modified.
     */
    ContentModifiedTimestamp?: TimestampType;
    /**
     * The ID of the creator.
     */
    CreatorId?: IdType;
    /**
     * The thumbnail of the document.
     */
    Thumbnail?: DocumentThumbnailUrlMap;
    /**
     * The source of the document.
     */
    Source?: DocumentSourceUrlMap;
  }
  export type DocumentVersionMetadataList = DocumentVersionMetadata[];
  export type DocumentVersionStatus = "ACTIVE"|string;
  export type EmailAddressType = string;
  export type EntityIdList = IdType[];
  export type ErrorMessageType = string;
  export type FieldNamesType = string;
  export type FolderContentType = "ALL"|"DOCUMENT"|"FOLDER"|string;
  export interface FolderMetadata {
    /**
     * The ID of the folder.
     */
    Id?: ResourceIdType;
    /**
     * The name of the folder.
     */
    Name?: ResourceNameType;
    /**
     * The ID of the creator.
     */
    CreatorId?: IdType;
    /**
     * The ID of the parent folder.
     */
    ParentFolderId?: ResourceIdType;
    /**
     * The time when the folder was created.
     */
    CreatedTimestamp?: TimestampType;
    /**
     * The time when the folder was updated.
     */
    ModifiedTimestamp?: TimestampType;
    /**
     * The resource state of the folder.
     */
    ResourceState?: ResourceStateType;
    /**
     * The unique identifier created from the subfolders and documents of the folder.
     */
    Signature?: HashType;
  }
  export type FolderMetadataList = FolderMetadata[];
  export interface GetDocumentPathRequest {
    /**
     * The ID of the document.
     */
    DocumentId: IdType;
    /**
     * The maximum number of levels in the hierarchy to return.
     */
    Limit?: LimitType;
    /**
     * A comma-separated list of values. Specify "NAME" to include the names of the parent folders.
     */
    Fields?: FieldNamesType;
    /**
     * This value is not supported.
     */
    Marker?: PageMarkerType;
  }
  export interface GetDocumentPathResponse {
    /**
     * The path information.
     */
    Path?: ResourcePath;
  }
  export interface GetDocumentRequest {
    /**
     * The ID of the document object.
     */
    DocumentId: ResourceIdType;
  }
  export interface GetDocumentResponse {
    /**
     * The document object.
     */
    Metadata?: DocumentMetadata;
  }
  export interface GetDocumentVersionRequest {
    /**
     * The ID of the document.
     */
    DocumentId: ResourceIdType;
    /**
     * The version ID of the document.
     */
    VersionId: DocumentVersionIdType;
    /**
     * A comma-separated list of values. Specify "SOURCE" to include a URL for the source document.
     */
    Fields?: FieldNamesType;
  }
  export interface GetDocumentVersionResponse {
    /**
     * The version metadata.
     */
    Metadata?: DocumentVersionMetadata;
  }
  export interface GetFolderPathRequest {
    /**
     * The ID of the folder.
     */
    FolderId: IdType;
    /**
     * The maximum number of levels in the hierarchy to return.
     */
    Limit?: LimitType;
    /**
     * A comma-separated list of values. Specify "NAME" to include the names of the parent folders.
     */
    Fields?: FieldNamesType;
    /**
     * This value is not supported.
     */
    Marker?: PageMarkerType;
  }
  export interface GetFolderPathResponse {
    /**
     * The path information.
     */
    Path?: ResourcePath;
  }
  export interface GetFolderRequest {
    /**
     * The ID of the folder.
     */
    FolderId: ResourceIdType;
  }
  export interface GetFolderResponse {
    /**
     * The metadata of the folder.
     */
    Metadata?: FolderMetadata;
  }
  export type HashType = string;
  export type HeaderNameType = string;
  export type HeaderValueType = string;
  export type IdType = string;
  export interface InitiateDocumentVersionUploadRequest {
    /**
     * The ID of the document.
     */
    Id?: ResourceIdType;
    /**
     * The name of the document.
     */
    Name?: ResourceNameType;
    /**
     * The time stamp when the content of the document was originally created.
     */
    ContentCreatedTimestamp?: TimestampType;
    /**
     * The time stamp when the content of the document was modified.
     */
    ContentModifiedTimestamp?: TimestampType;
    /**
     * The content type of the document.
     */
    ContentType?: DocumentContentType;
    /**
     * The size of the document, in bytes.
     */
    DocumentSizeInBytes?: SizeType;
    /**
     * The ID of the parent folder.
     */
    ParentFolderId: ResourceIdType;
  }
  export interface InitiateDocumentVersionUploadResponse {
    /**
     * The document metadata.
     */
    Metadata?: DocumentMetadata;
    /**
     * The upload metadata.
     */
    UploadMetadata?: UploadMetadata;
  }
  export type LimitType = number;
  export type LocaleType = "en"|"fr"|"ko"|"de"|"es"|"ja"|"ru"|"zh_CN"|"zh_TW"|"pt_BR"|"default"|string;
  export type MessageType = string;
  export type OrderType = "ASCENDING"|"DESCENDING"|string;
  export type OrganizationUserList = User[];
  export type PageMarkerType = string;
  export type PasswordType = string;
  export interface PermissionInfo {
    /**
     * The role of the user.
     */
    Role?: RoleType;
    /**
     * The type of permissions.
     */
    Type?: RolePermissionType;
  }
  export type PermissionInfoList = PermissionInfo[];
  export type PositiveSizeType = number;
  export interface Principal {
    /**
     * The ID of the resource.
     */
    Id?: IdType;
    /**
     * The type of resource.
     */
    Type?: PrincipalType;
    /**
     * The permission information for the resource.
     */
    Roles?: PermissionInfoList;
  }
  export type PrincipalList = Principal[];
  export type PrincipalType = "USER"|"GROUP"|"INVITE"|"ANONYMOUS"|"ORGANIZATION"|string;
  export interface RemoveAllResourcePermissionsRequest {
    /**
     * The ID of the resource.
     */
    ResourceId: ResourceIdType;
  }
  export interface RemoveResourcePermissionRequest {
    /**
     * The ID of the resource.
     */
    ResourceId: ResourceIdType;
    /**
     * The principal ID of the resource.
     */
    PrincipalId: IdType;
    /**
     * The principal type of the resource.
     */
    PrincipalType?: PrincipalType;
  }
  export type ResourceIdType = string;
  export type ResourceNameType = string;
  export interface ResourcePath {
    /**
     * The components of the resource path.
     */
    Components?: ResourcePathComponentList;
  }
  export interface ResourcePathComponent {
    /**
     * The ID of the resource path.
     */
    Id?: IdType;
    /**
     * The name of the resource path.
     */
    Name?: ResourceNameType;
  }
  export type ResourcePathComponentList = ResourcePathComponent[];
  export type ResourceSortType = "DATE"|"NAME"|string;
  export type ResourceStateType = "ACTIVE"|"RESTORING"|"RECYCLING"|"RECYCLED"|string;
  export type RolePermissionType = "DIRECT"|"INHERITED"|string;
  export type RoleType = "VIEWER"|"CONTRIBUTOR"|"OWNER"|"COOWNER"|string;
  export type SearchQueryType = string;
  export interface SharePrincipal {
    /**
     * The ID of the recipient.
     */
    Id: IdType;
    /**
     * The type of the recipient.
     */
    Type: PrincipalType;
    /**
     * The role of the recipient.
     */
    Role: RoleType;
  }
  export type SharePrincipalList = SharePrincipal[];
  export interface ShareResult {
    /**
     * The ID of the principal.
     */
    PrincipalId?: IdType;
    /**
     * The role.
     */
    Role?: RoleType;
    /**
     * The status.
     */
    Status?: ShareStatusType;
    /**
     * The ID of the resource that was shared.
     */
    ShareId?: ResourceIdType;
    /**
     * The status message.
     */
    StatusMessage?: MessageType;
  }
  export type ShareResultsList = ShareResult[];
  export type ShareStatusType = "SUCCESS"|"FAILURE"|string;
  export type SignedHeaderMap = {[key: string]: HeaderValueType};
  export type SizeType = number;
  export interface StorageRuleType {
    /**
     * The amount of storage allocated, in bytes.
     */
    StorageAllocatedInBytes?: PositiveSizeType;
    /**
     * The type of storage.
     */
    StorageType?: StorageType;
  }
  export type StorageType = "UNLIMITED"|"QUOTA"|string;
  export interface Subscription {
    /**
     * The ID of the subscription.
     */
    SubscriptionId?: IdType;
    /**
     * The endpoint of the subscription.
     */
    EndPoint?: SubscriptionEndPointType;
    /**
     * The protocol of the subscription.
     */
    Protocol?: SubscriptionProtocolType;
  }
  export type SubscriptionEndPointType = string;
  export type SubscriptionList = Subscription[];
  export type SubscriptionProtocolType = "HTTPS"|string;
  export type SubscriptionType = "ALL"|string;
  export type TimeZoneIdType = string;
  export type TimestampType = Date;
  export interface UpdateDocumentRequest {
    /**
     * The ID of the document.
     */
    DocumentId: ResourceIdType;
    /**
     * The name of the document.
     */
    Name?: ResourceNameType;
    /**
     * The ID of the parent folder.
     */
    ParentFolderId?: ResourceIdType;
    /**
     * The resource state of the document. Note that only ACTIVE and RECYCLED are supported.
     */
    ResourceState?: ResourceStateType;
  }
  export interface UpdateDocumentVersionRequest {
    /**
     * The ID of the document.
     */
    DocumentId: ResourceIdType;
    /**
     * The version ID of the document.
     */
    VersionId: DocumentVersionIdType;
    /**
     * The status of the version.
     */
    VersionStatus?: DocumentVersionStatus;
  }
  export interface UpdateFolderRequest {
    /**
     * The ID of the folder.
     */
    FolderId: ResourceIdType;
    /**
     * The name of the folder.
     */
    Name?: ResourceNameType;
    /**
     * The ID of the parent folder.
     */
    ParentFolderId?: ResourceIdType;
    /**
     * The resource state of the folder. Note that only ACTIVE and RECYCLED are accepted values from the API.
     */
    ResourceState?: ResourceStateType;
  }
  export interface UpdateUserRequest {
    /**
     * The ID of the user.
     */
    UserId: IdType;
    /**
     * The given name of the user.
     */
    GivenName?: UserAttributeValueType;
    /**
     * The surname of the user.
     */
    Surname?: UserAttributeValueType;
    /**
     * The type of the user.
     */
    Type?: UserType;
    /**
     * The amount of storage for the user.
     */
    StorageRule?: StorageRuleType;
    /**
     * The time zone ID of the user.
     */
    TimeZoneId?: TimeZoneIdType;
    /**
     * The locale of the user.
     */
    Locale?: LocaleType;
  }
  export interface UpdateUserResponse {
    /**
     * The user information.
     */
    User?: User;
  }
  export interface UploadMetadata {
    /**
     * The URL of the upload.
     */
    UploadUrl?: UrlType;
    /**
     * The signed headers.
     */
    SignedHeaders?: SignedHeaderMap;
  }
  export type UrlType = string;
  export interface User {
    /**
     * The ID of the user.
     */
    Id?: IdType;
    /**
     * The login name of the user.
     */
    Username?: UsernameType;
    /**
     * The email address of the user.
     */
    EmailAddress?: EmailAddressType;
    /**
     * The given name of the user.
     */
    GivenName?: UserAttributeValueType;
    /**
     * The surname of the user.
     */
    Surname?: UserAttributeValueType;
    /**
     * The ID of the organization.
     */
    OrganizationId?: IdType;
    /**
     * The ID of the root folder.
     */
    RootFolderId?: ResourceIdType;
    /**
     * The ID of the recycle bin folder.
     */
    RecycleBinFolderId?: ResourceIdType;
    /**
     * The status of the user.
     */
    Status?: UserStatusType;
    /**
     * The type of user.
     */
    Type?: UserType;
    /**
     * The time when the user was created.
     */
    CreatedTimestamp?: TimestampType;
    /**
     * The time when the user was modified.
     */
    ModifiedTimestamp?: TimestampType;
    /**
     * The time zone ID of the user.
     */
    TimeZoneId?: TimeZoneIdType;
    /**
     * The locale of the user.
     */
    Locale?: LocaleType;
    /**
     * The storage for the user.
     */
    Storage?: UserStorageMetadata;
  }
  export type UserAttributeValueType = string;
  export type UserFilterType = "ALL"|"ACTIVE_PENDING"|string;
  export type UserIdsType = string;
  export type UserSortType = "USER_NAME"|"FULL_NAME"|"STORAGE_LIMIT"|"USER_STATUS"|"STORAGE_USED"|string;
  export type UserStatusType = "ACTIVE"|"INACTIVE"|"PENDING"|string;
  export interface UserStorageMetadata {
    /**
     * The amount of storage utilized, in bytes.
     */
    StorageUtilizedInBytes?: SizeType;
    /**
     * The storage for a user.
     */
    StorageRule?: StorageRuleType;
  }
  export type UserType = "USER"|"ADMIN"|string;
  export type UsernameType = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2016-05-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the WorkDocs client.
   */
  export import Types = WorkDocs;
}
export = WorkDocs;
