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
   * Creates an EncoderConfiguration object.
   */
  createEncoderConfiguration(params: IVSRealTime.Types.CreateEncoderConfigurationRequest, callback?: (err: AWSError, data: IVSRealTime.Types.CreateEncoderConfigurationResponse) => void): Request<IVSRealTime.Types.CreateEncoderConfigurationResponse, AWSError>;
  /**
   * Creates an EncoderConfiguration object.
   */
  createEncoderConfiguration(callback?: (err: AWSError, data: IVSRealTime.Types.CreateEncoderConfigurationResponse) => void): Request<IVSRealTime.Types.CreateEncoderConfigurationResponse, AWSError>;
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
   * Creates a new storage configuration, used to enable recording to Amazon S3. When a StorageConfiguration is created, IVS will modify the S3 bucketPolicy of the provided bucket. This will ensure that IVS has sufficient permissions to write content to the provided bucket.
   */
  createStorageConfiguration(params: IVSRealTime.Types.CreateStorageConfigurationRequest, callback?: (err: AWSError, data: IVSRealTime.Types.CreateStorageConfigurationResponse) => void): Request<IVSRealTime.Types.CreateStorageConfigurationResponse, AWSError>;
  /**
   * Creates a new storage configuration, used to enable recording to Amazon S3. When a StorageConfiguration is created, IVS will modify the S3 bucketPolicy of the provided bucket. This will ensure that IVS has sufficient permissions to write content to the provided bucket.
   */
  createStorageConfiguration(callback?: (err: AWSError, data: IVSRealTime.Types.CreateStorageConfigurationResponse) => void): Request<IVSRealTime.Types.CreateStorageConfigurationResponse, AWSError>;
  /**
   * Deletes an EncoderConfiguration resource. Ensures that no Compositions are using this template; otherwise, returns an error.
   */
  deleteEncoderConfiguration(params: IVSRealTime.Types.DeleteEncoderConfigurationRequest, callback?: (err: AWSError, data: IVSRealTime.Types.DeleteEncoderConfigurationResponse) => void): Request<IVSRealTime.Types.DeleteEncoderConfigurationResponse, AWSError>;
  /**
   * Deletes an EncoderConfiguration resource. Ensures that no Compositions are using this template; otherwise, returns an error.
   */
  deleteEncoderConfiguration(callback?: (err: AWSError, data: IVSRealTime.Types.DeleteEncoderConfigurationResponse) => void): Request<IVSRealTime.Types.DeleteEncoderConfigurationResponse, AWSError>;
  /**
   * Shuts down and deletes the specified stage (disconnecting all participants).
   */
  deleteStage(params: IVSRealTime.Types.DeleteStageRequest, callback?: (err: AWSError, data: IVSRealTime.Types.DeleteStageResponse) => void): Request<IVSRealTime.Types.DeleteStageResponse, AWSError>;
  /**
   * Shuts down and deletes the specified stage (disconnecting all participants).
   */
  deleteStage(callback?: (err: AWSError, data: IVSRealTime.Types.DeleteStageResponse) => void): Request<IVSRealTime.Types.DeleteStageResponse, AWSError>;
  /**
   * Deletes the storage configuration for the specified ARN. If you try to delete a storage configuration that is used by a Composition, you will get an error (409 ConflictException). To avoid this, for all Compositions that reference the storage configuration, first use StopComposition and wait for it to complete, then use DeleteStorageConfiguration.
   */
  deleteStorageConfiguration(params: IVSRealTime.Types.DeleteStorageConfigurationRequest, callback?: (err: AWSError, data: IVSRealTime.Types.DeleteStorageConfigurationResponse) => void): Request<IVSRealTime.Types.DeleteStorageConfigurationResponse, AWSError>;
  /**
   * Deletes the storage configuration for the specified ARN. If you try to delete a storage configuration that is used by a Composition, you will get an error (409 ConflictException). To avoid this, for all Compositions that reference the storage configuration, first use StopComposition and wait for it to complete, then use DeleteStorageConfiguration.
   */
  deleteStorageConfiguration(callback?: (err: AWSError, data: IVSRealTime.Types.DeleteStorageConfigurationResponse) => void): Request<IVSRealTime.Types.DeleteStorageConfigurationResponse, AWSError>;
  /**
   * Disconnects a specified participant and revokes the participant permanently from a specified stage.
   */
  disconnectParticipant(params: IVSRealTime.Types.DisconnectParticipantRequest, callback?: (err: AWSError, data: IVSRealTime.Types.DisconnectParticipantResponse) => void): Request<IVSRealTime.Types.DisconnectParticipantResponse, AWSError>;
  /**
   * Disconnects a specified participant and revokes the participant permanently from a specified stage.
   */
  disconnectParticipant(callback?: (err: AWSError, data: IVSRealTime.Types.DisconnectParticipantResponse) => void): Request<IVSRealTime.Types.DisconnectParticipantResponse, AWSError>;
  /**
   * Get information about the specified Composition resource.
   */
  getComposition(params: IVSRealTime.Types.GetCompositionRequest, callback?: (err: AWSError, data: IVSRealTime.Types.GetCompositionResponse) => void): Request<IVSRealTime.Types.GetCompositionResponse, AWSError>;
  /**
   * Get information about the specified Composition resource.
   */
  getComposition(callback?: (err: AWSError, data: IVSRealTime.Types.GetCompositionResponse) => void): Request<IVSRealTime.Types.GetCompositionResponse, AWSError>;
  /**
   * Gets information about the specified EncoderConfiguration resource. 
   */
  getEncoderConfiguration(params: IVSRealTime.Types.GetEncoderConfigurationRequest, callback?: (err: AWSError, data: IVSRealTime.Types.GetEncoderConfigurationResponse) => void): Request<IVSRealTime.Types.GetEncoderConfigurationResponse, AWSError>;
  /**
   * Gets information about the specified EncoderConfiguration resource. 
   */
  getEncoderConfiguration(callback?: (err: AWSError, data: IVSRealTime.Types.GetEncoderConfigurationResponse) => void): Request<IVSRealTime.Types.GetEncoderConfigurationResponse, AWSError>;
  /**
   * Gets information about the specified participant token.
   */
  getParticipant(params: IVSRealTime.Types.GetParticipantRequest, callback?: (err: AWSError, data: IVSRealTime.Types.GetParticipantResponse) => void): Request<IVSRealTime.Types.GetParticipantResponse, AWSError>;
  /**
   * Gets information about the specified participant token.
   */
  getParticipant(callback?: (err: AWSError, data: IVSRealTime.Types.GetParticipantResponse) => void): Request<IVSRealTime.Types.GetParticipantResponse, AWSError>;
  /**
   * Gets information for the specified stage.
   */
  getStage(params: IVSRealTime.Types.GetStageRequest, callback?: (err: AWSError, data: IVSRealTime.Types.GetStageResponse) => void): Request<IVSRealTime.Types.GetStageResponse, AWSError>;
  /**
   * Gets information for the specified stage.
   */
  getStage(callback?: (err: AWSError, data: IVSRealTime.Types.GetStageResponse) => void): Request<IVSRealTime.Types.GetStageResponse, AWSError>;
  /**
   * Gets information for the specified stage session.
   */
  getStageSession(params: IVSRealTime.Types.GetStageSessionRequest, callback?: (err: AWSError, data: IVSRealTime.Types.GetStageSessionResponse) => void): Request<IVSRealTime.Types.GetStageSessionResponse, AWSError>;
  /**
   * Gets information for the specified stage session.
   */
  getStageSession(callback?: (err: AWSError, data: IVSRealTime.Types.GetStageSessionResponse) => void): Request<IVSRealTime.Types.GetStageSessionResponse, AWSError>;
  /**
   * Gets the storage configuration for the specified ARN.
   */
  getStorageConfiguration(params: IVSRealTime.Types.GetStorageConfigurationRequest, callback?: (err: AWSError, data: IVSRealTime.Types.GetStorageConfigurationResponse) => void): Request<IVSRealTime.Types.GetStorageConfigurationResponse, AWSError>;
  /**
   * Gets the storage configuration for the specified ARN.
   */
  getStorageConfiguration(callback?: (err: AWSError, data: IVSRealTime.Types.GetStorageConfigurationResponse) => void): Request<IVSRealTime.Types.GetStorageConfigurationResponse, AWSError>;
  /**
   * Gets summary information about all Compositions in your account, in the AWS region where the API request is processed. 
   */
  listCompositions(params: IVSRealTime.Types.ListCompositionsRequest, callback?: (err: AWSError, data: IVSRealTime.Types.ListCompositionsResponse) => void): Request<IVSRealTime.Types.ListCompositionsResponse, AWSError>;
  /**
   * Gets summary information about all Compositions in your account, in the AWS region where the API request is processed. 
   */
  listCompositions(callback?: (err: AWSError, data: IVSRealTime.Types.ListCompositionsResponse) => void): Request<IVSRealTime.Types.ListCompositionsResponse, AWSError>;
  /**
   * Gets summary information about all EncoderConfigurations in your account, in the AWS region where the API request is processed.
   */
  listEncoderConfigurations(params: IVSRealTime.Types.ListEncoderConfigurationsRequest, callback?: (err: AWSError, data: IVSRealTime.Types.ListEncoderConfigurationsResponse) => void): Request<IVSRealTime.Types.ListEncoderConfigurationsResponse, AWSError>;
  /**
   * Gets summary information about all EncoderConfigurations in your account, in the AWS region where the API request is processed.
   */
  listEncoderConfigurations(callback?: (err: AWSError, data: IVSRealTime.Types.ListEncoderConfigurationsResponse) => void): Request<IVSRealTime.Types.ListEncoderConfigurationsResponse, AWSError>;
  /**
   * Lists events for a specified participant that occurred during a specified stage session.
   */
  listParticipantEvents(params: IVSRealTime.Types.ListParticipantEventsRequest, callback?: (err: AWSError, data: IVSRealTime.Types.ListParticipantEventsResponse) => void): Request<IVSRealTime.Types.ListParticipantEventsResponse, AWSError>;
  /**
   * Lists events for a specified participant that occurred during a specified stage session.
   */
  listParticipantEvents(callback?: (err: AWSError, data: IVSRealTime.Types.ListParticipantEventsResponse) => void): Request<IVSRealTime.Types.ListParticipantEventsResponse, AWSError>;
  /**
   * Lists all participants in a specified stage session.
   */
  listParticipants(params: IVSRealTime.Types.ListParticipantsRequest, callback?: (err: AWSError, data: IVSRealTime.Types.ListParticipantsResponse) => void): Request<IVSRealTime.Types.ListParticipantsResponse, AWSError>;
  /**
   * Lists all participants in a specified stage session.
   */
  listParticipants(callback?: (err: AWSError, data: IVSRealTime.Types.ListParticipantsResponse) => void): Request<IVSRealTime.Types.ListParticipantsResponse, AWSError>;
  /**
   * Gets all sessions for a specified stage.
   */
  listStageSessions(params: IVSRealTime.Types.ListStageSessionsRequest, callback?: (err: AWSError, data: IVSRealTime.Types.ListStageSessionsResponse) => void): Request<IVSRealTime.Types.ListStageSessionsResponse, AWSError>;
  /**
   * Gets all sessions for a specified stage.
   */
  listStageSessions(callback?: (err: AWSError, data: IVSRealTime.Types.ListStageSessionsResponse) => void): Request<IVSRealTime.Types.ListStageSessionsResponse, AWSError>;
  /**
   * Gets summary information about all stages in your account, in the AWS region where the API request is processed.
   */
  listStages(params: IVSRealTime.Types.ListStagesRequest, callback?: (err: AWSError, data: IVSRealTime.Types.ListStagesResponse) => void): Request<IVSRealTime.Types.ListStagesResponse, AWSError>;
  /**
   * Gets summary information about all stages in your account, in the AWS region where the API request is processed.
   */
  listStages(callback?: (err: AWSError, data: IVSRealTime.Types.ListStagesResponse) => void): Request<IVSRealTime.Types.ListStagesResponse, AWSError>;
  /**
   * Gets summary information about all storage configurations in your account, in the AWS region where the API request is processed.
   */
  listStorageConfigurations(params: IVSRealTime.Types.ListStorageConfigurationsRequest, callback?: (err: AWSError, data: IVSRealTime.Types.ListStorageConfigurationsResponse) => void): Request<IVSRealTime.Types.ListStorageConfigurationsResponse, AWSError>;
  /**
   * Gets summary information about all storage configurations in your account, in the AWS region where the API request is processed.
   */
  listStorageConfigurations(callback?: (err: AWSError, data: IVSRealTime.Types.ListStorageConfigurationsResponse) => void): Request<IVSRealTime.Types.ListStorageConfigurationsResponse, AWSError>;
  /**
   * Gets information about AWS tags for the specified ARN.
   */
  listTagsForResource(params: IVSRealTime.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: IVSRealTime.Types.ListTagsForResourceResponse) => void): Request<IVSRealTime.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Gets information about AWS tags for the specified ARN.
   */
  listTagsForResource(callback?: (err: AWSError, data: IVSRealTime.Types.ListTagsForResourceResponse) => void): Request<IVSRealTime.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Starts a Composition from a stage based on the configuration provided in the request. A Composition is an ephemeral resource that exists after this endpoint returns successfully. Composition stops and the resource is deleted:   When StopComposition is called.   After a 1-minute timeout, when all participants are disconnected from the stage.   After a 1-minute timeout, if there are no participants in the stage when StartComposition is called.   When broadcasting to the IVS channel fails and all retries are exhausted.   When broadcasting is disconnected and all attempts to reconnect are exhausted.  
   */
  startComposition(params: IVSRealTime.Types.StartCompositionRequest, callback?: (err: AWSError, data: IVSRealTime.Types.StartCompositionResponse) => void): Request<IVSRealTime.Types.StartCompositionResponse, AWSError>;
  /**
   * Starts a Composition from a stage based on the configuration provided in the request. A Composition is an ephemeral resource that exists after this endpoint returns successfully. Composition stops and the resource is deleted:   When StopComposition is called.   After a 1-minute timeout, when all participants are disconnected from the stage.   After a 1-minute timeout, if there are no participants in the stage when StartComposition is called.   When broadcasting to the IVS channel fails and all retries are exhausted.   When broadcasting is disconnected and all attempts to reconnect are exhausted.  
   */
  startComposition(callback?: (err: AWSError, data: IVSRealTime.Types.StartCompositionResponse) => void): Request<IVSRealTime.Types.StartCompositionResponse, AWSError>;
  /**
   * Stops and deletes a Composition resource. Any broadcast from the Composition resource is stopped.
   */
  stopComposition(params: IVSRealTime.Types.StopCompositionRequest, callback?: (err: AWSError, data: IVSRealTime.Types.StopCompositionResponse) => void): Request<IVSRealTime.Types.StopCompositionResponse, AWSError>;
  /**
   * Stops and deletes a Composition resource. Any broadcast from the Composition resource is stopped.
   */
  stopComposition(callback?: (err: AWSError, data: IVSRealTime.Types.StopCompositionResponse) => void): Request<IVSRealTime.Types.StopCompositionResponse, AWSError>;
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
  export type AttributeKey = string;
  export type Bitrate = number;
  export type ChannelArn = string;
  export interface ChannelDestinationConfiguration {
    /**
     * ARN of the channel to use for broadcasting. The channel and stage resources must be in the same AWS account and region. The channel must be offline (not broadcasting).
     */
    channelArn: ChannelArn;
    /**
     * ARN of the EncoderConfiguration resource. The encoder configuration and stage resources must be in the same AWS account and region.
     */
    encoderConfigurationArn?: EncoderConfigurationArn;
  }
  export interface Composition {
    /**
     * ARN of the Composition resource.
     */
    arn: CompositionArn;
    /**
     * Array of Destination objects. A Composition can contain either one destination (channel or s3) or two (one channel and one s3).
     */
    destinations: DestinationList;
    /**
     * UTC time of the Composition end. This is an ISO 8601 timestamp; note that this is returned as a string.
     */
    endTime?: Time;
    /**
     * Layout object to configure composition parameters.
     */
    layout: LayoutConfiguration;
    /**
     * ARN of the stage used as input
     */
    stageArn: StageArn;
    /**
     * UTC time of the Composition start. This is an ISO 8601 timestamp; note that this is returned as a string.
     */
    startTime?: Time;
    /**
     * State of the Composition.
     */
    state: CompositionState;
    /**
     * Tags attached to the resource. Array of maps, each of the form string:string (key:value). See Tagging AWS Resources for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.
     */
    tags?: Tags;
  }
  export type CompositionArn = string;
  export type CompositionClientToken = string;
  export type CompositionState = "STARTING"|"ACTIVE"|"STOPPING"|"FAILED"|"STOPPED"|string;
  export interface CompositionSummary {
    /**
     * ARN of the Composition resource.
     */
    arn: CompositionArn;
    /**
     * Array of Destination objects.
     */
    destinations: DestinationSummaryList;
    /**
     * UTC time of the Composition end. This is an ISO 8601 timestamp; note that this is returned as a string.
     */
    endTime?: Time;
    /**
     * ARN of the attached stage.
     */
    stageArn: StageArn;
    /**
     * UTC time of the Composition start. This is an ISO 8601 timestamp; note that this is returned as a string.
     */
    startTime?: Time;
    /**
     * State of the Composition resource.
     */
    state: CompositionState;
    /**
     * Tags attached to the resource. Array of maps, each of the form string:string (key:value). See Tagging AWS Resources for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.
     */
    tags?: Tags;
  }
  export type CompositionSummaryList = CompositionSummary[];
  export interface CreateEncoderConfigurationRequest {
    /**
     * Optional name to identify the resource.
     */
    name?: EncoderConfigurationName;
    /**
     * Tags attached to the resource. Array of maps, each of the form string:string (key:value). See Tagging AWS Resources for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.
     */
    tags?: Tags;
    /**
     * Video configuration. Default: video resolution 1280x720, bitrate 2500 kbps, 30 fps.
     */
    video?: Video;
  }
  export interface CreateEncoderConfigurationResponse {
    /**
     * The EncoderConfiguration that was created.
     */
    encoderConfiguration?: EncoderConfiguration;
  }
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
     * Duration (in minutes), after which the token expires. Default: 720 (12 hours).
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
  export interface CreateStorageConfigurationRequest {
    /**
     * Storage configuration name. The value does not need to be unique.
     */
    name?: StorageConfigurationName;
    /**
     * A complex type that contains a storage configuration for where recorded video will be stored.
     */
    s3: S3StorageConfiguration;
    /**
     * Tags attached to the resource. Array of maps, each of the form string:string (key:value). See Tagging AWS Resources for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.
     */
    tags?: Tags;
  }
  export interface CreateStorageConfigurationResponse {
    /**
     * The StorageConfiguration that was created.
     */
    storageConfiguration?: StorageConfiguration;
  }
  export interface DeleteEncoderConfigurationRequest {
    /**
     * ARN of the EncoderConfiguration.
     */
    arn: EncoderConfigurationArn;
  }
  export interface DeleteEncoderConfigurationResponse {
  }
  export interface DeleteStageRequest {
    /**
     * ARN of the stage to be deleted.
     */
    arn: StageArn;
  }
  export interface DeleteStageResponse {
  }
  export interface DeleteStorageConfigurationRequest {
    /**
     * ARN of the storage configuration to be deleted.
     */
    arn: StorageConfigurationArn;
  }
  export interface DeleteStorageConfigurationResponse {
  }
  export interface Destination {
    /**
     * Configuration used to create this destination.
     */
    configuration: DestinationConfiguration;
    /**
     * Optional details regarding the status of the destination.
     */
    detail?: DestinationDetail;
    /**
     * UTC time of the destination end. This is an ISO 8601 timestamp; note that this is returned as a string.
     */
    endTime?: Time;
    /**
     * Unique identifier for this destination, assigned by IVS.
     */
    id: String;
    /**
     * UTC time of the destination start. This is an ISO 8601 timestamp; note that this is returned as a string.
     */
    startTime?: Time;
    /**
     * State of the Composition Destination.
     */
    state: DestinationState;
  }
  export interface DestinationConfiguration {
    /**
     * An IVS channel to be used for broadcasting, for server-side composition. Either a channel or an s3 must be specified. 
     */
    channel?: ChannelDestinationConfiguration;
    /**
     * Name that can be specified to help identify the destination.
     */
    name?: DestinationConfigurationName;
    /**
     * An S3 storage configuration to be used for recording video data. Either a channel or an s3 must be specified.
     */
    s3?: S3DestinationConfiguration;
  }
  export type DestinationConfigurationList = DestinationConfiguration[];
  export type DestinationConfigurationName = string;
  export interface DestinationDetail {
    /**
     * An S3 detail object to return information about the S3 destination.
     */
    s3?: S3Detail;
  }
  export type DestinationList = Destination[];
  export type DestinationState = "STARTING"|"ACTIVE"|"STOPPING"|"RECONNECTING"|"FAILED"|"STOPPED"|string;
  export interface DestinationSummary {
    /**
     * UTC time of the destination end. This is an ISO 8601 timestamp; note that this is returned as a string.
     */
    endTime?: Time;
    /**
     * Unique identifier for this destination, assigned by IVS.
     */
    id: String;
    /**
     * UTC time of the destination start. This is an ISO 8601 timestamp; note that this is returned as a string.
     */
    startTime?: Time;
    /**
     * State of the Composition Destination.
     */
    state: DestinationState;
  }
  export type DestinationSummaryList = DestinationSummary[];
  export type DisconnectParticipantReason = string;
  export interface DisconnectParticipantRequest {
    /**
     * Identifier of the participant to be disconnected. This is assigned by IVS and returned by CreateParticipantToken.
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
  export interface EncoderConfiguration {
    /**
     * ARN of the EncoderConfiguration resource.
     */
    arn: EncoderConfigurationArn;
    /**
     * Optional name to identify the resource.
     */
    name?: EncoderConfigurationName;
    /**
     * Tags attached to the resource. Array of maps, each of the form string:string (key:value). See Tagging AWS Resources for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.
     */
    tags?: Tags;
    /**
     * Video configuration. Default: video resolution 1280x720, bitrate 2500 kbps, 30 fps
     */
    video?: Video;
  }
  export type EncoderConfigurationArn = string;
  export type EncoderConfigurationArnList = EncoderConfigurationArn[];
  export type EncoderConfigurationName = string;
  export interface EncoderConfigurationSummary {
    /**
     * ARN of the EncoderConfiguration resource.
     */
    arn: EncoderConfigurationArn;
    /**
     * Optional name to identify the resource.
     */
    name?: EncoderConfigurationName;
    /**
     * Tags attached to the resource. Array of maps, each of the form string:string (key:value). See Tagging AWS Resources for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.
     */
    tags?: Tags;
  }
  export type EncoderConfigurationSummaryList = EncoderConfigurationSummary[];
  export interface Event {
    /**
     * If the event is an error event, the error code is provided to give insight into the specific error that occurred. If the event is not an error event, this field is null. INSUFFICIENT_CAPABILITIES indicates that the participant tried to take an action that the participant’s token is not allowed to do. For more information about participant capabilities, see the capabilities field in CreateParticipantToken. QUOTA_EXCEEDED indicates that the number of participants who want to publish/subscribe to a stage exceeds the quota; for more information, see Service Quotas. PUBLISHER_NOT_FOUND indicates that the participant tried to subscribe to a publisher that doesn’t exist. 
     */
    errorCode?: EventErrorCode;
    /**
     * ISO 8601 timestamp (returned as a string) for when the event occurred.
     */
    eventTime?: Time;
    /**
     * The name of the event.
     */
    name?: EventName;
    /**
     * Unique identifier for the participant who triggered the event. This is assigned by IVS.
     */
    participantId?: ParticipantId;
    /**
     * Unique identifier for the remote participant. For a subscribe event, this is the publisher. For a publish or join event, this is null. This is assigned by IVS.
     */
    remoteParticipantId?: ParticipantId;
  }
  export type EventErrorCode = "INSUFFICIENT_CAPABILITIES"|"QUOTA_EXCEEDED"|"PUBLISHER_NOT_FOUND"|string;
  export type EventList = Event[];
  export type EventName = "JOINED"|"LEFT"|"PUBLISH_STARTED"|"PUBLISH_STOPPED"|"SUBSCRIBE_STARTED"|"SUBSCRIBE_STOPPED"|"PUBLISH_ERROR"|"SUBSCRIBE_ERROR"|"JOIN_ERROR"|string;
  export type Framerate = number;
  export interface GetCompositionRequest {
    /**
     * ARN of the Composition resource.
     */
    arn: CompositionArn;
  }
  export interface GetCompositionResponse {
    /**
     * The Composition that was returned.
     */
    composition?: Composition;
  }
  export interface GetEncoderConfigurationRequest {
    /**
     * ARN of the EncoderConfiguration resource.
     */
    arn: EncoderConfigurationArn;
  }
  export interface GetEncoderConfigurationResponse {
    /**
     * The EncoderConfiguration that was returned.
     */
    encoderConfiguration?: EncoderConfiguration;
  }
  export interface GetParticipantRequest {
    /**
     * Unique identifier for the participant. This is assigned by IVS and returned by CreateParticipantToken.
     */
    participantId: ParticipantId;
    /**
     * ID of a session within the stage.
     */
    sessionId: StageSessionId;
    /**
     * Stage ARN.
     */
    stageArn: StageArn;
  }
  export interface GetParticipantResponse {
    /**
     * The participant that is returned.
     */
    participant?: Participant;
  }
  export interface GetStageRequest {
    /**
     * ARN of the stage for which the information is to be retrieved.
     */
    arn: StageArn;
  }
  export interface GetStageResponse {
    /**
     * The stage that is returned.
     */
    stage?: Stage;
  }
  export interface GetStageSessionRequest {
    /**
     * ID of a session within the stage.
     */
    sessionId: StageSessionId;
    /**
     * ARN of the stage for which the information is to be retrieved.
     */
    stageArn: StageArn;
  }
  export interface GetStageSessionResponse {
    /**
     * The stage session that is returned.
     */
    stageSession?: StageSession;
  }
  export interface GetStorageConfigurationRequest {
    /**
     * ARN of the storage configuration to be retrieved.
     */
    arn: StorageConfigurationArn;
  }
  export interface GetStorageConfigurationResponse {
    /**
     * The StorageConfiguration that was returned.
     */
    storageConfiguration?: StorageConfiguration;
  }
  export interface GridConfiguration {
    /**
     * This attribute name identifies the featured slot. A participant with this attribute set to "true" (as a string value) in ParticipantTokenConfiguration is placed in the featured slot.
     */
    featuredParticipantAttribute?: AttributeKey;
    /**
     * Specifies the spacing between participant tiles in pixels. Default: 2.
     */
    gridGap?: GridGap;
    /**
     * Determines whether to omit participants with stopped video in the composition. Default: false.
     */
    omitStoppedVideo?: OmitStoppedVideo;
    /**
     * Sets the non-featured participant display mode. Default: VIDEO.
     */
    videoAspectRatio?: VideoAspectRatio;
    /**
     * Defines how video fits within the participant tile. When not set, videoFillMode defaults to COVER fill mode for participants in the grid and to CONTAIN fill mode for featured participants.
     */
    videoFillMode?: VideoFillMode;
  }
  export type GridGap = number;
  export type Height = number;
  export interface LayoutConfiguration {
    /**
     * Configuration related to grid layout. Default: Grid layout.
     */
    grid?: GridConfiguration;
    /**
     * Configuration related to PiP layout.
     */
    pip?: PipConfiguration;
  }
  export interface ListCompositionsRequest {
    /**
     * Filters the Composition list to match the specified EncoderConfiguration attached to at least one of its output.
     */
    filterByEncoderConfigurationArn?: EncoderConfigurationArn;
    /**
     * Filters the Composition list to match the specified Stage ARN.
     */
    filterByStageArn?: StageArn;
    /**
     * Maximum number of results to return. Default: 100.
     */
    maxResults?: MaxCompositionResults;
    /**
     * The first Composition to retrieve. This is used for pagination; see the nextToken response field.
     */
    nextToken?: PaginationToken;
  }
  export interface ListCompositionsResponse {
    /**
     * List of the matching Compositions (summary information only).
     */
    compositions: CompositionSummaryList;
    /**
     * If there are more compositions than maxResults, use nextToken in the request to get the next set.
     */
    nextToken?: PaginationToken;
  }
  export interface ListEncoderConfigurationsRequest {
    /**
     * Maximum number of results to return. Default: 100.
     */
    maxResults?: MaxEncoderConfigurationResults;
    /**
     * The first encoder configuration to retrieve. This is used for pagination; see the nextToken response field.
     */
    nextToken?: PaginationToken;
  }
  export interface ListEncoderConfigurationsResponse {
    /**
     * List of the matching EncoderConfigurations (summary information only).
     */
    encoderConfigurations: EncoderConfigurationSummaryList;
    /**
     * If there are more encoder configurations than maxResults, use nextToken in the request to get the next set.
     */
    nextToken?: PaginationToken;
  }
  export interface ListParticipantEventsRequest {
    /**
     * Maximum number of results to return. Default: 50.
     */
    maxResults?: MaxParticipantEventResults;
    /**
     * The first participant event to retrieve. This is used for pagination; see the nextToken response field.
     */
    nextToken?: PaginationToken;
    /**
     * Unique identifier for this participant. This is assigned by IVS and returned by CreateParticipantToken.
     */
    participantId: ParticipantId;
    /**
     * ID of a session within the stage.
     */
    sessionId: StageSessionId;
    /**
     * Stage ARN.
     */
    stageArn: StageArn;
  }
  export interface ListParticipantEventsResponse {
    /**
     * List of the matching events.
     */
    events: EventList;
    /**
     * If there are more events than maxResults, use nextToken in the request to get the next set. 
     */
    nextToken?: PaginationToken;
  }
  export interface ListParticipantsRequest {
    /**
     * Filters the response list to only show participants who published during the stage session. Only one of filterByUserId, filterByPublished, or filterByState can be provided per request.
     */
    filterByPublished?: Published;
    /**
     * Filters the response list to only show participants in the specified state. Only one of filterByUserId, filterByPublished, or filterByState can be provided per request.
     */
    filterByState?: ParticipantState;
    /**
     * Filters the response list to match the specified user ID. Only one of filterByUserId, filterByPublished, or filterByState can be provided per request. A userId is a customer-assigned name to help identify the token; this can be used to link a participant to a user in the customer’s own systems.
     */
    filterByUserId?: UserId;
    /**
     * Maximum number of results to return. Default: 50.
     */
    maxResults?: MaxParticipantResults;
    /**
     * The first participant to retrieve. This is used for pagination; see the nextToken response field.
     */
    nextToken?: PaginationToken;
    /**
     * ID of the session within the stage.
     */
    sessionId: StageSessionId;
    /**
     * Stage ARN.
     */
    stageArn: StageArn;
  }
  export interface ListParticipantsResponse {
    /**
     * If there are more participants than maxResults, use nextToken in the request to get the next set.
     */
    nextToken?: PaginationToken;
    /**
     * List of the matching participants (summary information only).
     */
    participants: ParticipantList;
  }
  export interface ListStageSessionsRequest {
    /**
     * Maximum number of results to return. Default: 50.
     */
    maxResults?: MaxStageSessionResults;
    /**
     * The first stage session to retrieve. This is used for pagination; see the nextToken response field.
     */
    nextToken?: PaginationToken;
    /**
     * Stage ARN.
     */
    stageArn: StageArn;
  }
  export interface ListStageSessionsResponse {
    /**
     * If there are more stage sessions than maxResults, use nextToken in the request to get the next set.
     */
    nextToken?: PaginationToken;
    /**
     * List of matching stage sessions.
     */
    stageSessions: StageSessionList;
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
     * If there are more stages than maxResults, use nextToken in the request to get the next set.
     */
    nextToken?: PaginationToken;
    /**
     * List of the matching stages (summary information only).
     */
    stages: StageSummaryList;
  }
  export interface ListStorageConfigurationsRequest {
    /**
     * Maximum number of storage configurations to return. Default: your service quota or 100, whichever is smaller.
     */
    maxResults?: MaxStorageConfigurationResults;
    /**
     * The first storage configuration to retrieve. This is used for pagination; see the nextToken response field.
     */
    nextToken?: PaginationToken;
  }
  export interface ListStorageConfigurationsResponse {
    /**
     * If there are more storage configurations than maxResults, use nextToken in the request to get the next set.
     */
    nextToken?: PaginationToken;
    /**
     * List of the matching storage configurations.
     */
    storageConfigurations: StorageConfigurationSummaryList;
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
  export type MaxCompositionResults = number;
  export type MaxEncoderConfigurationResults = number;
  export type MaxParticipantEventResults = number;
  export type MaxParticipantResults = number;
  export type MaxStageResults = number;
  export type MaxStageSessionResults = number;
  export type MaxStorageConfigurationResults = number;
  export type OmitStoppedVideo = boolean;
  export type PaginationToken = string;
  export interface Participant {
    /**
     * Application-provided attributes to encode into the token and attach to a stage. Map keys and values can contain UTF-8 encoded text. The maximum length of this field is 1 KB total. This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information.
     */
    attributes?: ParticipantAttributes;
    /**
     * The participant’s browser.
     */
    browserName?: ParticipantClientAttribute;
    /**
     * The participant’s browser version.
     */
    browserVersion?: ParticipantClientAttribute;
    /**
     * ISO 8601 timestamp (returned as a string) when the participant first joined the stage session.
     */
    firstJoinTime?: Time;
    /**
     * The participant’s Internet Service Provider.
     */
    ispName?: ParticipantClientAttribute;
    /**
     * The participant’s operating system.
     */
    osName?: ParticipantClientAttribute;
    /**
     * The participant’s operating system version.
     */
    osVersion?: ParticipantClientAttribute;
    /**
     * Unique identifier for this participant, assigned by IVS.
     */
    participantId?: ParticipantId;
    /**
     * Whether the participant ever published to the stage session.
     */
    published?: Published;
    /**
     * The participant’s SDK version.
     */
    sdkVersion?: ParticipantClientAttribute;
    /**
     * Whether the participant is connected to or disconnected from the stage.
     */
    state?: ParticipantState;
    /**
     * Customer-assigned name to help identify the token; this can be used to link a participant to a user in the customer’s own systems. This can be any UTF-8 encoded text. This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information.
     */
    userId?: UserId;
  }
  export type ParticipantAttributes = {[key: string]: String};
  export type ParticipantClientAttribute = string;
  export type ParticipantId = string;
  export type ParticipantList = ParticipantSummary[];
  export type ParticipantState = "CONNECTED"|"DISCONNECTED"|string;
  export interface ParticipantSummary {
    /**
     * ISO 8601 timestamp (returned as a string) when the participant first joined the stage session.
     */
    firstJoinTime?: Time;
    /**
     * Unique identifier for this participant, assigned by IVS.
     */
    participantId?: ParticipantId;
    /**
     * Whether the participant ever published to the stage session.
     */
    published?: Published;
    /**
     * Whether the participant is connected to or disconnected from the stage.
     */
    state?: ParticipantState;
    /**
     * Customer-assigned name to help identify the token; this can be used to link a participant to a user in the customer’s own systems. This can be any UTF-8 encoded text. This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information.
     */
    userId?: UserId;
  }
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
     * Duration (in minutes), after which the participant token expires. Default: 720 (12 hours).
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
     * Customer-assigned name to help identify the token; this can be used to link a participant to a user in the customer’s own systems. This can be any UTF-8 encoded text. This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information. 
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
     * Duration (in minutes), after which the corresponding participant token expires. Default: 720 (12 hours).
     */
    duration?: ParticipantTokenDurationMinutes;
    /**
     * Customer-assigned name to help identify the token; this can be used to link a participant to a user in the customer’s own systems. This can be any UTF-8 encoded text. This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information. 
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
  export type PipBehavior = "STATIC"|"DYNAMIC"|string;
  export interface PipConfiguration {
    /**
     * This attribute name identifies the featured slot. A participant with this attribute set to "true" (as a string value) in ParticipantTokenConfiguration is placed in the featured slot.
     */
    featuredParticipantAttribute?: AttributeKey;
    /**
     * Specifies the spacing between participant tiles in pixels. Default: 0.
     */
    gridGap?: GridGap;
    /**
     * Determines whether to omit participants with stopped video in the composition. Default: false.
     */
    omitStoppedVideo?: OmitStoppedVideo;
    /**
     * Defines PiP behavior when all participants have left. Default: STATIC.
     */
    pipBehavior?: PipBehavior;
    /**
     * Specifies the height of the PiP window in pixels. When this is not set explicitly, pipHeight’s value will be based on the size of the composition and the aspect ratio of the participant’s video.
     */
    pipHeight?: PipHeight;
    /**
     * Sets the PiP window’s offset position in pixels from the closest edges determined by PipPosition. Default: 0.
     */
    pipOffset?: PipOffset;
    /**
     * Identifies the PiP slot. A participant with this attribute set to "true" (as a string value) in ParticipantTokenConfiguration is placed in the PiP slot.
     */
    pipParticipantAttribute?: AttributeKey;
    /**
     * Determines the corner position of the PiP window. Default: BOTTOM_RIGHT.
     */
    pipPosition?: PipPosition;
    /**
     * Specifies the width of the PiP window in pixels. When this is not set explicitly, pipWidth’s value will be based on the size of the composition and the aspect ratio of the participant’s video.
     */
    pipWidth?: PipWidth;
    /**
     * Defines how video fits within the participant tile. Default: COVER. 
     */
    videoFillMode?: VideoFillMode;
  }
  export type PipHeight = number;
  export type PipOffset = number;
  export type PipPosition = "TOP_LEFT"|"TOP_RIGHT"|"BOTTOM_LEFT"|"BOTTOM_RIGHT"|string;
  export type PipWidth = number;
  export type Published = boolean;
  export interface RecordingConfiguration {
    /**
     * The recording format for storing a recording in Amazon S3.
     */
    format?: RecordingConfigurationFormat;
  }
  export type RecordingConfigurationFormat = "HLS"|string;
  export type ResourceArn = string;
  export type S3BucketName = string;
  export interface S3DestinationConfiguration {
    /**
     * ARNs of the EncoderConfiguration resource. The encoder configuration and stage resources must be in the same AWS account and region. 
     */
    encoderConfigurationArns: EncoderConfigurationArnList;
    /**
     * Array of maps, each of the form string:string (key:value). This is an optional customer specification, currently used only to specify the recording format for storing a recording in Amazon S3.
     */
    recordingConfiguration?: RecordingConfiguration;
    /**
     * ARN of the StorageConfiguration where recorded videos will be stored.
     */
    storageConfigurationArn: StorageConfigurationArn;
  }
  export interface S3Detail {
    /**
     * The S3 bucket prefix under which the recording is stored.
     */
    recordingPrefix: String;
  }
  export interface S3StorageConfiguration {
    /**
     * Location (S3 bucket name) where recorded videos will be stored. Note that the StorageConfiguration and S3 bucket must be in the same region as the Composition.
     */
    bucketName: S3BucketName;
  }
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
  export interface StageSession {
    /**
     * ISO 8601 timestamp (returned as a string) when the stage session ended. This is null if the stage is active.
     */
    endTime?: Time;
    /**
     * ID of the session within the stage.
     */
    sessionId?: StageSessionId;
    /**
     *  ISO 8601 timestamp (returned as a string) when this stage session began.
     */
    startTime?: Time;
  }
  export type StageSessionId = string;
  export type StageSessionList = StageSessionSummary[];
  export interface StageSessionSummary {
    /**
     * ISO 8601 timestamp (returned as a string) when the stage session ended. This is null if the stage is active.
     */
    endTime?: Time;
    /**
     * ID of the session within the stage.
     */
    sessionId?: StageSessionId;
    /**
     *  ISO 8601 timestamp (returned as a string) when this stage session began.
     */
    startTime?: Time;
  }
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
  export interface StartCompositionRequest {
    /**
     * Array of destination configuration.
     */
    destinations: DestinationConfigurationList;
    /**
     * Idempotency token.
     */
    idempotencyToken?: CompositionClientToken;
    /**
     * Layout object to configure composition parameters.
     */
    layout?: LayoutConfiguration;
    /**
     * ARN of the stage to be used for compositing.
     */
    stageArn: StageArn;
    /**
     * Tags attached to the resource. Array of maps, each of the form string:string (key:value). See Tagging AWS Resources for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.
     */
    tags?: Tags;
  }
  export interface StartCompositionResponse {
    /**
     * The Composition that was created.
     */
    composition?: Composition;
  }
  export interface StopCompositionRequest {
    /**
     * ARN of the Composition.
     */
    arn: CompositionArn;
  }
  export interface StopCompositionResponse {
  }
  export interface StorageConfiguration {
    /**
     * ARN of the storage configuration.
     */
    arn: StorageConfigurationArn;
    /**
     * Name of the storage configuration.
     */
    name?: StorageConfigurationName;
    /**
     * An S3 destination configuration where recorded videos will be stored.
     */
    s3?: S3StorageConfiguration;
    /**
     * Tags attached to the resource. Array of maps, each of the form string:string (key:value). See Tagging AWS Resources for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.
     */
    tags?: Tags;
  }
  export type StorageConfigurationArn = string;
  export type StorageConfigurationName = string;
  export interface StorageConfigurationSummary {
    /**
     * ARN of the storage configuration.
     */
    arn: StorageConfigurationArn;
    /**
     * Name of the storage configuration.
     */
    name?: StorageConfigurationName;
    /**
     * An S3 destination configuration where recorded videos will be stored.
     */
    s3?: S3StorageConfiguration;
    /**
     * Tags attached to the resource. Array of maps, each of the form string:string (key:value). See Tagging AWS Resources for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there.
     */
    tags?: Tags;
  }
  export type StorageConfigurationSummaryList = StorageConfigurationSummary[];
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
  export type Time = Date;
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
  export type UserId = string;
  export interface Video {
    /**
     * Bitrate for generated output, in bps. Default: 2500000.
     */
    bitrate?: Bitrate;
    /**
     * Video frame rate, in fps. Default: 30.
     */
    framerate?: Framerate;
    /**
     * Video-resolution height. Note that the maximum value is determined by width times height, such that the maximum total pixels is 2073600 (1920x1080 or 1080x1920). Default: 720.
     */
    height?: Height;
    /**
     * Video-resolution width. Note that the maximum value is determined by width times height, such that the maximum total pixels is 2073600 (1920x1080 or 1080x1920). Default: 1280.
     */
    width?: Width;
  }
  export type VideoAspectRatio = "AUTO"|"VIDEO"|"SQUARE"|"PORTRAIT"|string;
  export type VideoFillMode = "FILL"|"COVER"|"CONTAIN"|string;
  export type Width = number;
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
