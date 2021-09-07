import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class Amp extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Amp.Types.ClientConfiguration)
  config: Config & Amp.Types.ClientConfiguration;
  /**
   * Creates a new AMP workspace.
   */
  createWorkspace(params: Amp.Types.CreateWorkspaceRequest, callback?: (err: AWSError, data: Amp.Types.CreateWorkspaceResponse) => void): Request<Amp.Types.CreateWorkspaceResponse, AWSError>;
  /**
   * Creates a new AMP workspace.
   */
  createWorkspace(callback?: (err: AWSError, data: Amp.Types.CreateWorkspaceResponse) => void): Request<Amp.Types.CreateWorkspaceResponse, AWSError>;
  /**
   * Deletes an AMP workspace.
   */
  deleteWorkspace(params: Amp.Types.DeleteWorkspaceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an AMP workspace.
   */
  deleteWorkspace(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Describes an existing AMP workspace.
   */
  describeWorkspace(params: Amp.Types.DescribeWorkspaceRequest, callback?: (err: AWSError, data: Amp.Types.DescribeWorkspaceResponse) => void): Request<Amp.Types.DescribeWorkspaceResponse, AWSError>;
  /**
   * Describes an existing AMP workspace.
   */
  describeWorkspace(callback?: (err: AWSError, data: Amp.Types.DescribeWorkspaceResponse) => void): Request<Amp.Types.DescribeWorkspaceResponse, AWSError>;
  /**
   * Lists the tags you have assigned to the resource.
   */
  listTagsForResource(params: Amp.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: Amp.Types.ListTagsForResourceResponse) => void): Request<Amp.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists the tags you have assigned to the resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: Amp.Types.ListTagsForResourceResponse) => void): Request<Amp.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists all AMP workspaces, including workspaces being created or deleted.
   */
  listWorkspaces(params: Amp.Types.ListWorkspacesRequest, callback?: (err: AWSError, data: Amp.Types.ListWorkspacesResponse) => void): Request<Amp.Types.ListWorkspacesResponse, AWSError>;
  /**
   * Lists all AMP workspaces, including workspaces being created or deleted.
   */
  listWorkspaces(callback?: (err: AWSError, data: Amp.Types.ListWorkspacesResponse) => void): Request<Amp.Types.ListWorkspacesResponse, AWSError>;
  /**
   * Creates tags for the specified resource.
   */
  tagResource(params: Amp.Types.TagResourceRequest, callback?: (err: AWSError, data: Amp.Types.TagResourceResponse) => void): Request<Amp.Types.TagResourceResponse, AWSError>;
  /**
   * Creates tags for the specified resource.
   */
  tagResource(callback?: (err: AWSError, data: Amp.Types.TagResourceResponse) => void): Request<Amp.Types.TagResourceResponse, AWSError>;
  /**
   * Deletes tags from the specified resource.
   */
  untagResource(params: Amp.Types.UntagResourceRequest, callback?: (err: AWSError, data: Amp.Types.UntagResourceResponse) => void): Request<Amp.Types.UntagResourceResponse, AWSError>;
  /**
   * Deletes tags from the specified resource.
   */
  untagResource(callback?: (err: AWSError, data: Amp.Types.UntagResourceResponse) => void): Request<Amp.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates an AMP workspace alias.
   */
  updateWorkspaceAlias(params: Amp.Types.UpdateWorkspaceAliasRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates an AMP workspace alias.
   */
  updateWorkspaceAlias(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
}
declare namespace Amp {
  export interface CreateWorkspaceRequest {
    /**
     * An optional user-assigned alias for this workspace. This alias is for user reference and does not need to be unique.
     */
    alias?: WorkspaceAlias;
    /**
     * Optional, unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.
     */
    clientToken?: IdempotencyToken;
    /**
     * Optional, user-provided tags for this workspace.
     */
    tags?: TagMap;
  }
  export interface CreateWorkspaceResponse {
    /**
     * The ARN of the workspace that was just created.
     */
    arn: WorkspaceArn;
    /**
     * The status of the workspace that was just created (usually CREATING).
     */
    status: WorkspaceStatus;
    /**
     * The tags of this workspace.
     */
    tags?: TagMap;
    /**
     * The generated ID of the workspace that was just created.
     */
    workspaceId: WorkspaceId;
  }
  export interface DeleteWorkspaceRequest {
    /**
     * Optional, unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.
     */
    clientToken?: IdempotencyToken;
    /**
     * The ID of the workspace to delete.
     */
    workspaceId: WorkspaceId;
  }
  export interface DescribeWorkspaceRequest {
    /**
     * The ID of the workspace to describe.
     */
    workspaceId: WorkspaceId;
  }
  export interface DescribeWorkspaceResponse {
    /**
     * The properties of the selected workspace.
     */
    workspace: WorkspaceDescription;
  }
  export type IdempotencyToken = string;
  export interface ListTagsForResourceRequest {
    /**
     * The ARN of the resource.
     */
    resourceArn: String;
  }
  export interface ListTagsForResourceResponse {
    tags?: TagMap;
  }
  export interface ListWorkspacesRequest {
    /**
     * Optional filter for workspace alias. Only the workspaces with aliases that begin with this value will be returned.
     */
    alias?: WorkspaceAlias;
    /**
     * Maximum results to return in response (default=100, maximum=1000).
     */
    maxResults?: ListWorkspacesRequestMaxResultsInteger;
    /**
     * Pagination token to request the next page in a paginated list. This token is obtained from the output of the previous ListWorkspaces request.
     */
    nextToken?: PaginationToken;
  }
  export type ListWorkspacesRequestMaxResultsInteger = number;
  export interface ListWorkspacesResponse {
    /**
     * Pagination token to use when requesting the next page in this list.
     */
    nextToken?: PaginationToken;
    /**
     * The list of existing workspaces, including those undergoing creation or deletion.
     */
    workspaces: WorkspaceSummaryList;
  }
  export type PaginationToken = string;
  export type String = string;
  export type TagKey = string;
  export type TagKeys = TagKey[];
  export type TagMap = {[key: string]: TagValue};
  export interface TagResourceRequest {
    /**
     * The ARN of the resource.
     */
    resourceArn: String;
    tags: TagMap;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type Timestamp = Date;
  export interface UntagResourceRequest {
    /**
     * The ARN of the resource.
     */
    resourceArn: String;
    /**
     * One or more tag keys
     */
    tagKeys: TagKeys;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateWorkspaceAliasRequest {
    /**
     * The new alias of the workspace.
     */
    alias?: WorkspaceAlias;
    /**
     * Optional, unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.
     */
    clientToken?: IdempotencyToken;
    /**
     * The ID of the workspace being updated.
     */
    workspaceId: WorkspaceId;
  }
  export type Uri = string;
  export type WorkspaceAlias = string;
  export type WorkspaceArn = string;
  export interface WorkspaceDescription {
    /**
     * Alias of this workspace.
     */
    alias?: WorkspaceAlias;
    /**
     * The Amazon Resource Name (ARN) of this workspace.
     */
    arn: WorkspaceArn;
    /**
     * The time when the workspace was created.
     */
    createdAt: Timestamp;
    /**
     * Prometheus endpoint URI.
     */
    prometheusEndpoint?: Uri;
    /**
     * The status of this workspace.
     */
    status: WorkspaceStatus;
    /**
     * The tags of this workspace.
     */
    tags?: TagMap;
    /**
     * Unique string identifying this workspace.
     */
    workspaceId: WorkspaceId;
  }
  export type WorkspaceId = string;
  export interface WorkspaceStatus {
    /**
     * Status code of this workspace.
     */
    statusCode: WorkspaceStatusCode;
  }
  export type WorkspaceStatusCode = "CREATING"|"ACTIVE"|"UPDATING"|"DELETING"|"CREATION_FAILED"|string;
  export interface WorkspaceSummary {
    /**
     * Alias of this workspace.
     */
    alias?: WorkspaceAlias;
    /**
     * The AmazonResourceName of this workspace.
     */
    arn: WorkspaceArn;
    /**
     * The time when the workspace was created.
     */
    createdAt: Timestamp;
    /**
     * The status of this workspace.
     */
    status: WorkspaceStatus;
    /**
     * The tags of this workspace.
     */
    tags?: TagMap;
    /**
     * Unique string identifying this workspace.
     */
    workspaceId: WorkspaceId;
  }
  export type WorkspaceSummaryList = WorkspaceSummary[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2020-08-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Amp client.
   */
  export import Types = Amp;
}
export = Amp;
