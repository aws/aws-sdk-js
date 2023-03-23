import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class IVSRealTime extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: IVSRealTime.Types.ClientConfiguration)
  config: Config & IVSRealTime.Types.ClientConfiguration;
  /**
   * Creates an additional token for a specified stage. This can be done after stage creation or when tokens expire. Tokens always are scoped to the stage for which they are created. Encryption keys are owned by Amazon IVS and never used directly by your application.
   */
  createParticipantToken(params: IVSRealTime.Types.CreateParticipantTokenRequest, callback?: (err: AWSError, data: IVSRealTime.Types.CreateParticipantTokenResponse) => void): Request<IVSRealTime.Types.CreateParticipantTokenResponse, AWSError>;
  /**
   * Creates an additional token for a specified stage. This can be done after stage creation or when tokens expire. Tokens always are scoped to the stage for which they are created. Encryption keys are owned by Amazon IVS and never used directly by your application.
   */
  createParticipantToken(callback?: (err: AWSError, data: IVSRealTime.Types.CreateParticipantTokenResponse) => void): Request<IVSRealTime.Types.CreateParticipantTokenResponse, AWSError>;
  /**
   * Creates a new stage (and optionally participant tokens).
   */
  createStage(params: IVSRealTime.Types.CreateStageRequest, callback?: (err: AWSError, data: IVSRealTime.Types.CreateStageResponse) => void): Request<IVSRealTime.Types.CreateStageResponse, AWSError>;
  /**
   * Creates a new stage (and optionally participant tokens).
   */
  createStage(callback?: (err: AWSError, data: IVSRealTime.Types.CreateStageResponse) => void): Request<IVSRealTime.Types.CreateStageResponse, AWSError>;
  /**
   * Shuts down and deletes the specified stage (disconnecting all participants).
   */
  deleteStage(params: IVSRealTime.Types.DeleteStageRequest, callback?: (err: AWSError, data: IVSRealTime.Types.DeleteStageResponse) => void): Request<IVSRealTime.Types.DeleteStageResponse, AWSError>;
  /**
   * Shuts down and deletes the specified stage (disconnecting all participants).
   */
  deleteStage(callback?: (err: AWSError, data: IVSRealTime.Types.DeleteStageResponse) => void): Request<IVSRealTime.Types.DeleteStageResponse, AWSError>;
  /**
   * Disconnects a specified participant and revokes the participant permanently from a specified stage.
   */
  disconnectParticipant(params: IVSRealTime.Types.DisconnectParticipantRequest, callback?: (err: AWSError, data: IVSRealTime.Types.DisconnectParticipantResponse) => void): Request<IVSRealTime.Types.DisconnectParticipantResponse, AWSError>;
  /**
   * Disconnects a specified participant and revokes the participant permanently from a specified stage.
   */
  disconnectParticipant(callback?: (err: AWSError, data: IVSRealTime.Types.DisconnectParticipantResponse) => void): Request<IVSRealTime.Types.DisconnectParticipantResponse, AWSError>;
  /**
   * Gets information for the specified stage.
   */
  getStage(params: IVSRealTime.Types.GetStageRequest, callback?: (err: AWSError, data: IVSRealTime.Types.GetStageResponse) => void): Request<IVSRealTime.Types.GetStageResponse, AWSError>;
  /**
   * Gets information for the specified stage.
   */
  getStage(callback?: (err: AWSError, data: IVSRealTime.Types.GetStageResponse) => void): Request<IVSRealTime.Types.GetStageResponse, AWSError>;
  /**
   * Gets summary information about all stages in your account, in the AWS region where the API request is processed.
   */
  listStages(params: IVSRealTime.Types.ListStagesRequest, callback?: (err: AWSError, data: IVSRealTime.Types.ListStagesResponse) => void): Request<IVSRealTime.Types.ListStagesResponse, AWSError>;
  /**
   * Gets summary information about all stages in your account, in the AWS region where the API request is processed.
   */
  listStages(callback?: (err: AWSError, data: IVSRealTime.Types.ListStagesResponse) => void): Request<IVSRealTime.Types.ListStagesResponse, AWSError>;
  /**
   * Gets information about AWS tags for the specified ARN.
   */
  listTagsForResource(params: IVSRealTime.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: IVSRealTime.Types.ListTagsForResourceResponse) => void): Request<IVSRealTime.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Gets information about AWS tags for the specified ARN.
   */
  listTagsForResource(callback?: (err: AWSError, data: IVSRealTime.Types.ListTagsForResourceResponse) => void): Request<IVSRealTime.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Adds or updates tags for the AWS resource with the specified ARN.
   */
  tagResource(params: IVSRealTime.Types.TagResourceRequest, callback?: (err: AWSError, data: IVSRealTime.Types.TagResourceResponse) => void): Request<IVSRealTime.Types.TagResourceResponse, AWSError>;
  /**
   * Adds or updates tags for the AWS resource with the specified ARN.
   */
  tagResource(callback?: (err: AWSError, data: IVSRealTime.Types.TagResourceResponse) => void): Request<IVSRealTime.Types.TagResourceResponse, AWSError>;
  /**
   * Removes tags from the resource with the specified ARN.
   */
  untagResource(params: IVSRealTime.Types.UntagResourceRequest, callback?: (err: AWSError, data: IVSRealTime.Types.UntagResourceResponse) => void): Request<IVSRealTime.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes tags from the resource with the specified ARN.
   */
  untagResource(callback?: (err: AWSError, data: IVSRealTime.Types.UntagResourceResponse) => void): Request<IVSRealTime.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates a stage’s configuration.
   */
  updateStage(params: IVSRealTime.Types.UpdateStageRequest, callback?: (err: AWSError, data: IVSRealTime.Types.UpdateStageResponse) => void): Request<IVSRealTime.Types.UpdateStageResponse, AWSError>;
  /**
   * Updates a stage’s configuration.
   */
  updateStage(callback?: (err: AWSError, data: IVSRealTime.Types.UpdateStageResponse) => void): Request<IVSRealTime.Types.UpdateStageResponse, AWSError>;
}
declare namespace IVSRealTime {
  export interface CreateParticipantTokenRequest {
    /**
     * Application-provided attributes to encode into the token and attach to a stage. Map keys and values can contain UTF-8 encoded text. The maximum length of this field is 1 KB total. This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information. 
     */
    attributes?: ParticipantTokenAttributes;
    /**
     * Set of capabilities that the user is allowed to perform in the stage. Default: PUBLISH, SUBSCRIBE.
     */
    capabilities?: ParticipantTokenCapabilities;
    /**
     * Duration (in minutes), after which the token expires. Default: 60 (1 hour).
     */
    duration?: ParticipantTokenDurationMinutes;
    /**
     * ARN of the stage to which this token is scoped.
     */
    stageArn: StageArn;
    /**
     * Name that can be specified to help identify the token. This can be any UTF-8 encoded text. This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information. 
     */
    userId?: ParticipantTokenUserId;
  }
  export interface CreateParticipantTokenResponse {
    /**
     * The participant token that was created.
     */
    participantToken?: ParticipantToken;
  }
  export interface CreateStageRequest {
    /**
     * Optional name that can be specified for the stage being created.
     */
    name?: StageName;
    /**
     * Array of participant token configuration objects to attach to the new stage.
     */
    participantTokenConfigurations?: ParticipantTokenConfigurations;
    /**
     * Tags attached to the resource. Array of maps, each of the form string:string (key:value). See Tagging AWS Resources for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there. 
     */
    tags?: Tags;
  }
  export interface CreateStageResponse {
    /**
     * Participant tokens attached to the stage. These correspond to the participants in the request.
     */
    participantTokens?: ParticipantTokenList;
    /**
     * The stage that was created.
     */
    stage?: Stage;
  }
  export interface DeleteStageRequest {
    /**
     * ARN of the stage to be deleted.
     */
    arn: StageArn;
  }
  export interface DeleteStageResponse {
  }
  export type DisconnectParticipantReason = string;
  export interface DisconnectParticipantRequest {
    /**
     * Identifier of the participant to be disconnected. This is returned by CreateParticipantToken.
     */
    participantId: ParticipantTokenId;
    /**
     * Description of why this participant is being disconnected.
     */
    reason?: DisconnectParticipantReason;
    /**
     * ARN of the stage to which the participant is attached.
     */
    stageArn: StageArn;
  }
  export interface DisconnectParticipantResponse {
  }
  export interface GetStageRequest {
    /**
     * ARN of the stage for which the information is to be retrieved.
     */
    arn: StageArn;
  }
  export interface GetStageResponse {
    /**
     * 
     */
    stage?: Stage;
  }
  export interface ListStagesRequest {
    /**
     * Maximum number of results to return. Default: 50.
     */
    maxResults?: MaxStageResults;
    /**
     * The first stage to retrieve. This is used for pagination; see the nextToken response field.
     */
    nextToken?: PaginationToken;
  }
  export interface ListStagesResponse {
    /**
     * If there are more rooms than maxResults, use nextToken in the request to get the next set.
     */
    nextToken?: PaginationToken;
    /**
     * List of the matching stages (summary information only).
     */
    stages: StageSummaryList;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The ARN of the resource to be retrieved. The ARN must be URL-encoded.
     */
    resourceArn: ResourceArn;
  }
  export interface ListTagsForResourceResponse {
    /**
     * Tags attached to the resource. Array of maps, each of the form string:string (key:value).
     */
    tags: Tags;
  }
  export type MaxStageResults = number;
  export type PaginationToken = string;
  export interface ParticipantToken {
    /**
     * Application-provided attributes to encode into the token and attach to a stage. This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information. 
     */
    attributes?: ParticipantTokenAttributes;
    /**
     * Set of capabilities that the user is allowed to perform in the stage.
     */
    capabilities?: ParticipantTokenCapabilities;
    /**
     * Duration (in minutes), after which the participant token expires. Default: 60 (1 hour).
     */
    duration?: ParticipantTokenDurationMinutes;
    /**
     * ISO 8601 timestamp (returned as a string) for when this token expires.
     */
    expirationTime?: ParticipantTokenExpirationTime;
    /**
     * Unique identifier for this participant token, assigned by IVS.
     */
    participantId?: ParticipantTokenId;
    /**
     * The issued client token, encrypted.
     */
    token?: ParticipantTokenString;
    /**
     * Name to help identify the token. This can be any UTF-8 encoded text. This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information. 
     */
    userId?: ParticipantTokenUserId;
  }
  export type ParticipantTokenAttributes = {[key: string]: String};
  export type ParticipantTokenCapabilities = ParticipantTokenCapability[];
  export type ParticipantTokenCapability = "PUBLISH"|"SUBSCRIBE"|string;
  export interface ParticipantTokenConfiguration {
    /**
     * Application-provided attributes to encode into the corresponding participant token and attach to a stage. Map keys and values can contain UTF-8 encoded text. The maximum length of this field is 1 KB total. This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information. 
     */
    attributes?: ParticipantTokenAttributes;
    /**
     * Set of capabilities that the user is allowed to perform in the stage.
     */
    capabilities?: ParticipantTokenCapabilities;
    /**
     * Duration (in minutes), after which the corresponding participant token expires. Default: 60 (1 hour).
     */
    duration?: ParticipantTokenDurationMinutes;
    /**
     * Name that can be specified to help identify the corresponding participant token. This can be any UTF-8 encoded text. This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information. 
     */
    userId?: ParticipantTokenUserId;
  }
  export type ParticipantTokenConfigurations = ParticipantTokenConfiguration[];
  export type ParticipantTokenDurationMinutes = number;
  export type ParticipantTokenExpirationTime = Date;
  export type ParticipantTokenId = string;
  export type ParticipantTokenList = ParticipantToken[];
  export type ParticipantTokenString = string;
  export type ParticipantTokenUserId = string;
  export type ResourceArn = string;
  export interface Stage {
    /**
     * ID of the active session within the stage.
     */
    activeSessionId?: StageSessionId;
    /**
     * Stage ARN.
     */
    arn: StageArn;
    /**
     * Stage name.
     */
    name?: StageName;
    /**
     * Tags attached to the resource. Array of maps, each of the form string:string (key:value). See Tagging AWS Resources for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.
     */
    tags?: Tags;
  }
  export type StageArn = string;
  export type StageName = string;
  export type StageSessionId = string;
  export interface StageSummary {
    /**
     * ID of the active session within the stage.
     */
    activeSessionId?: StageSessionId;
    /**
     * Stage ARN.
     */
    arn: StageArn;
    /**
     * Stage name.
     */
    name?: StageName;
    /**
     * Tags attached to the resource. Array of maps, each of the form string:string (key:value). See Tagging AWS Resources for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.
     */
    tags?: Tags;
  }
  export type StageSummaryList = StageSummary[];
  export type String = string;
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export interface TagResourceRequest {
    /**
     * The ARN of the resource to be tagged. The ARN must be URL-encoded.
     */
    resourceArn: ResourceArn;
    /**
     * Array of tags to be added or updated. Array of maps, each of the form string:string (key:value). See Tagging AWS Resources for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints beyond what is documented there.
     */
    tags: Tags;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type Tags = {[key: string]: TagValue};
  export interface UntagResourceRequest {
    /**
     * The ARN of the resource to be untagged. The ARN must be URL-encoded.
     */
    resourceArn: ResourceArn;
    /**
     * Array of tags to be removed. Array of maps, each of the form string:string (key:value). See Tagging AWS Resources for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints beyond what is documented there.
     */
    tagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateStageRequest {
    /**
     * ARN of the stage to be updated.
     */
    arn: StageArn;
    /**
     * Name of the stage to be updated.
     */
    name?: StageName;
  }
  export interface UpdateStageResponse {
    /**
     * The updated stage. 
     */
    stage?: Stage;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2020-07-14"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the IVSRealTime client.
   */
  export import Types = IVSRealTime;
}
export = IVSRealTime;
