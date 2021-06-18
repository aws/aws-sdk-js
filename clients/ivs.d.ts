import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class IVS extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: IVS.Types.ClientConfiguration)
  config: Config & IVS.Types.ClientConfiguration;
  /**
   * Performs GetChannel on multiple ARNs simultaneously.
   */
  batchGetChannel(params: IVS.Types.BatchGetChannelRequest, callback?: (err: AWSError, data: IVS.Types.BatchGetChannelResponse) => void): Request<IVS.Types.BatchGetChannelResponse, AWSError>;
  /**
   * Performs GetChannel on multiple ARNs simultaneously.
   */
  batchGetChannel(callback?: (err: AWSError, data: IVS.Types.BatchGetChannelResponse) => void): Request<IVS.Types.BatchGetChannelResponse, AWSError>;
  /**
   * Performs GetStreamKey on multiple ARNs simultaneously.
   */
  batchGetStreamKey(params: IVS.Types.BatchGetStreamKeyRequest, callback?: (err: AWSError, data: IVS.Types.BatchGetStreamKeyResponse) => void): Request<IVS.Types.BatchGetStreamKeyResponse, AWSError>;
  /**
   * Performs GetStreamKey on multiple ARNs simultaneously.
   */
  batchGetStreamKey(callback?: (err: AWSError, data: IVS.Types.BatchGetStreamKeyResponse) => void): Request<IVS.Types.BatchGetStreamKeyResponse, AWSError>;
  /**
   * Creates a new channel and an associated stream key to start streaming.
   */
  createChannel(params: IVS.Types.CreateChannelRequest, callback?: (err: AWSError, data: IVS.Types.CreateChannelResponse) => void): Request<IVS.Types.CreateChannelResponse, AWSError>;
  /**
   * Creates a new channel and an associated stream key to start streaming.
   */
  createChannel(callback?: (err: AWSError, data: IVS.Types.CreateChannelResponse) => void): Request<IVS.Types.CreateChannelResponse, AWSError>;
  /**
   * Creates a new recording configuration, used to enable recording to Amazon S3.  Known issue: In the us-east-1 region, if you use the AWS CLI to create a recording configuration, it returns success even if the S3 bucket is in a different region. In this case, the state of the recording configuration is CREATE_FAILED (instead of ACTIVE). (In other regions, the CLI correctly returns failure if the bucket is in a different region.)  Workaround: Ensure that your S3 bucket is in the same region as the recording configuration. If you create a recording configuration in a different region as your S3 bucket, delete that recording configuration and create a new one with an S3 bucket from the correct region.
   */
  createRecordingConfiguration(params: IVS.Types.CreateRecordingConfigurationRequest, callback?: (err: AWSError, data: IVS.Types.CreateRecordingConfigurationResponse) => void): Request<IVS.Types.CreateRecordingConfigurationResponse, AWSError>;
  /**
   * Creates a new recording configuration, used to enable recording to Amazon S3.  Known issue: In the us-east-1 region, if you use the AWS CLI to create a recording configuration, it returns success even if the S3 bucket is in a different region. In this case, the state of the recording configuration is CREATE_FAILED (instead of ACTIVE). (In other regions, the CLI correctly returns failure if the bucket is in a different region.)  Workaround: Ensure that your S3 bucket is in the same region as the recording configuration. If you create a recording configuration in a different region as your S3 bucket, delete that recording configuration and create a new one with an S3 bucket from the correct region.
   */
  createRecordingConfiguration(callback?: (err: AWSError, data: IVS.Types.CreateRecordingConfigurationResponse) => void): Request<IVS.Types.CreateRecordingConfigurationResponse, AWSError>;
  /**
   * Creates a stream key, used to initiate a stream, for the specified channel ARN. Note that CreateChannel creates a stream key. If you subsequently use CreateStreamKey on the same channel, it will fail because a stream key already exists and there is a limit of 1 stream key per channel. To reset the stream key on a channel, use DeleteStreamKey and then CreateStreamKey.
   */
  createStreamKey(params: IVS.Types.CreateStreamKeyRequest, callback?: (err: AWSError, data: IVS.Types.CreateStreamKeyResponse) => void): Request<IVS.Types.CreateStreamKeyResponse, AWSError>;
  /**
   * Creates a stream key, used to initiate a stream, for the specified channel ARN. Note that CreateChannel creates a stream key. If you subsequently use CreateStreamKey on the same channel, it will fail because a stream key already exists and there is a limit of 1 stream key per channel. To reset the stream key on a channel, use DeleteStreamKey and then CreateStreamKey.
   */
  createStreamKey(callback?: (err: AWSError, data: IVS.Types.CreateStreamKeyResponse) => void): Request<IVS.Types.CreateStreamKeyResponse, AWSError>;
  /**
   * Deletes the specified channel and its associated stream keys. If you try to delete a live channel, you will get an error (409 ConflictException). To delete a channel that is live, call StopStream, wait for the Amazon EventBridge "Stream End" event (to verify that the stream's state was changed from Live to Offline), then call DeleteChannel. (See  Using EventBridge with Amazon IVS.) 
   */
  deleteChannel(params: IVS.Types.DeleteChannelRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified channel and its associated stream keys. If you try to delete a live channel, you will get an error (409 ConflictException). To delete a channel that is live, call StopStream, wait for the Amazon EventBridge "Stream End" event (to verify that the stream's state was changed from Live to Offline), then call DeleteChannel. (See  Using EventBridge with Amazon IVS.) 
   */
  deleteChannel(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a specified authorization key pair. This invalidates future viewer tokens generated using the key pair’s privateKey. For more information, see Setting Up Private Channels in the Amazon IVS User Guide.
   */
  deletePlaybackKeyPair(params: IVS.Types.DeletePlaybackKeyPairRequest, callback?: (err: AWSError, data: IVS.Types.DeletePlaybackKeyPairResponse) => void): Request<IVS.Types.DeletePlaybackKeyPairResponse, AWSError>;
  /**
   * Deletes a specified authorization key pair. This invalidates future viewer tokens generated using the key pair’s privateKey. For more information, see Setting Up Private Channels in the Amazon IVS User Guide.
   */
  deletePlaybackKeyPair(callback?: (err: AWSError, data: IVS.Types.DeletePlaybackKeyPairResponse) => void): Request<IVS.Types.DeletePlaybackKeyPairResponse, AWSError>;
  /**
   * Deletes the recording configuration for the specified ARN. If you try to delete a recording configuration that is associated with a channel, you will get an error (409 ConflictException). To avoid this, for all channels that reference the recording configuration, first use UpdateChannel to set the recordingConfigurationArn field to an empty string, then use DeleteRecordingConfiguration.
   */
  deleteRecordingConfiguration(params: IVS.Types.DeleteRecordingConfigurationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the recording configuration for the specified ARN. If you try to delete a recording configuration that is associated with a channel, you will get an error (409 ConflictException). To avoid this, for all channels that reference the recording configuration, first use UpdateChannel to set the recordingConfigurationArn field to an empty string, then use DeleteRecordingConfiguration.
   */
  deleteRecordingConfiguration(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the stream key for the specified ARN, so it can no longer be used to stream.
   */
  deleteStreamKey(params: IVS.Types.DeleteStreamKeyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the stream key for the specified ARN, so it can no longer be used to stream.
   */
  deleteStreamKey(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Gets the channel configuration for the specified channel ARN. See also BatchGetChannel.
   */
  getChannel(params: IVS.Types.GetChannelRequest, callback?: (err: AWSError, data: IVS.Types.GetChannelResponse) => void): Request<IVS.Types.GetChannelResponse, AWSError>;
  /**
   * Gets the channel configuration for the specified channel ARN. See also BatchGetChannel.
   */
  getChannel(callback?: (err: AWSError, data: IVS.Types.GetChannelResponse) => void): Request<IVS.Types.GetChannelResponse, AWSError>;
  /**
   * Gets a specified playback authorization key pair and returns the arn and fingerprint. The privateKey held by the caller can be used to generate viewer authorization tokens, to grant viewers access to private channels. For more information, see Setting Up Private Channels in the Amazon IVS User Guide.
   */
  getPlaybackKeyPair(params: IVS.Types.GetPlaybackKeyPairRequest, callback?: (err: AWSError, data: IVS.Types.GetPlaybackKeyPairResponse) => void): Request<IVS.Types.GetPlaybackKeyPairResponse, AWSError>;
  /**
   * Gets a specified playback authorization key pair and returns the arn and fingerprint. The privateKey held by the caller can be used to generate viewer authorization tokens, to grant viewers access to private channels. For more information, see Setting Up Private Channels in the Amazon IVS User Guide.
   */
  getPlaybackKeyPair(callback?: (err: AWSError, data: IVS.Types.GetPlaybackKeyPairResponse) => void): Request<IVS.Types.GetPlaybackKeyPairResponse, AWSError>;
  /**
   * Gets the recording configuration for the specified ARN.
   */
  getRecordingConfiguration(params: IVS.Types.GetRecordingConfigurationRequest, callback?: (err: AWSError, data: IVS.Types.GetRecordingConfigurationResponse) => void): Request<IVS.Types.GetRecordingConfigurationResponse, AWSError>;
  /**
   * Gets the recording configuration for the specified ARN.
   */
  getRecordingConfiguration(callback?: (err: AWSError, data: IVS.Types.GetRecordingConfigurationResponse) => void): Request<IVS.Types.GetRecordingConfigurationResponse, AWSError>;
  /**
   * Gets information about the active (live) stream on a specified channel.
   */
  getStream(params: IVS.Types.GetStreamRequest, callback?: (err: AWSError, data: IVS.Types.GetStreamResponse) => void): Request<IVS.Types.GetStreamResponse, AWSError>;
  /**
   * Gets information about the active (live) stream on a specified channel.
   */
  getStream(callback?: (err: AWSError, data: IVS.Types.GetStreamResponse) => void): Request<IVS.Types.GetStreamResponse, AWSError>;
  /**
   * Gets stream-key information for a specified ARN.
   */
  getStreamKey(params: IVS.Types.GetStreamKeyRequest, callback?: (err: AWSError, data: IVS.Types.GetStreamKeyResponse) => void): Request<IVS.Types.GetStreamKeyResponse, AWSError>;
  /**
   * Gets stream-key information for a specified ARN.
   */
  getStreamKey(callback?: (err: AWSError, data: IVS.Types.GetStreamKeyResponse) => void): Request<IVS.Types.GetStreamKeyResponse, AWSError>;
  /**
   * Imports the public portion of a new key pair and returns its arn and fingerprint. The privateKey can then be used to generate viewer authorization tokens, to grant viewers access to private channels. For more information, see Setting Up Private Channels in the Amazon IVS User Guide.
   */
  importPlaybackKeyPair(params: IVS.Types.ImportPlaybackKeyPairRequest, callback?: (err: AWSError, data: IVS.Types.ImportPlaybackKeyPairResponse) => void): Request<IVS.Types.ImportPlaybackKeyPairResponse, AWSError>;
  /**
   * Imports the public portion of a new key pair and returns its arn and fingerprint. The privateKey can then be used to generate viewer authorization tokens, to grant viewers access to private channels. For more information, see Setting Up Private Channels in the Amazon IVS User Guide.
   */
  importPlaybackKeyPair(callback?: (err: AWSError, data: IVS.Types.ImportPlaybackKeyPairResponse) => void): Request<IVS.Types.ImportPlaybackKeyPairResponse, AWSError>;
  /**
   * Gets summary information about all channels in your account, in the AWS region where the API request is processed. This list can be filtered to match a specified name or recording-configuration ARN. Filters are mutually exclusive and cannot be used together. If you try to use both filters, you will get an error (409 ConflictException).
   */
  listChannels(params: IVS.Types.ListChannelsRequest, callback?: (err: AWSError, data: IVS.Types.ListChannelsResponse) => void): Request<IVS.Types.ListChannelsResponse, AWSError>;
  /**
   * Gets summary information about all channels in your account, in the AWS region where the API request is processed. This list can be filtered to match a specified name or recording-configuration ARN. Filters are mutually exclusive and cannot be used together. If you try to use both filters, you will get an error (409 ConflictException).
   */
  listChannels(callback?: (err: AWSError, data: IVS.Types.ListChannelsResponse) => void): Request<IVS.Types.ListChannelsResponse, AWSError>;
  /**
   * Gets summary information about playback key pairs. For more information, see Setting Up Private Channels in the Amazon IVS User Guide.
   */
  listPlaybackKeyPairs(params: IVS.Types.ListPlaybackKeyPairsRequest, callback?: (err: AWSError, data: IVS.Types.ListPlaybackKeyPairsResponse) => void): Request<IVS.Types.ListPlaybackKeyPairsResponse, AWSError>;
  /**
   * Gets summary information about playback key pairs. For more information, see Setting Up Private Channels in the Amazon IVS User Guide.
   */
  listPlaybackKeyPairs(callback?: (err: AWSError, data: IVS.Types.ListPlaybackKeyPairsResponse) => void): Request<IVS.Types.ListPlaybackKeyPairsResponse, AWSError>;
  /**
   * Gets summary information about all recording configurations in your account, in the AWS region where the API request is processed.
   */
  listRecordingConfigurations(params: IVS.Types.ListRecordingConfigurationsRequest, callback?: (err: AWSError, data: IVS.Types.ListRecordingConfigurationsResponse) => void): Request<IVS.Types.ListRecordingConfigurationsResponse, AWSError>;
  /**
   * Gets summary information about all recording configurations in your account, in the AWS region where the API request is processed.
   */
  listRecordingConfigurations(callback?: (err: AWSError, data: IVS.Types.ListRecordingConfigurationsResponse) => void): Request<IVS.Types.ListRecordingConfigurationsResponse, AWSError>;
  /**
   * Gets summary information about stream keys for the specified channel.
   */
  listStreamKeys(params: IVS.Types.ListStreamKeysRequest, callback?: (err: AWSError, data: IVS.Types.ListStreamKeysResponse) => void): Request<IVS.Types.ListStreamKeysResponse, AWSError>;
  /**
   * Gets summary information about stream keys for the specified channel.
   */
  listStreamKeys(callback?: (err: AWSError, data: IVS.Types.ListStreamKeysResponse) => void): Request<IVS.Types.ListStreamKeysResponse, AWSError>;
  /**
   * Gets summary information about live streams in your account, in the AWS region where the API request is processed.
   */
  listStreams(params: IVS.Types.ListStreamsRequest, callback?: (err: AWSError, data: IVS.Types.ListStreamsResponse) => void): Request<IVS.Types.ListStreamsResponse, AWSError>;
  /**
   * Gets summary information about live streams in your account, in the AWS region where the API request is processed.
   */
  listStreams(callback?: (err: AWSError, data: IVS.Types.ListStreamsResponse) => void): Request<IVS.Types.ListStreamsResponse, AWSError>;
  /**
   * Gets information about AWS tags for the specified ARN.
   */
  listTagsForResource(params: IVS.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: IVS.Types.ListTagsForResourceResponse) => void): Request<IVS.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Gets information about AWS tags for the specified ARN.
   */
  listTagsForResource(callback?: (err: AWSError, data: IVS.Types.ListTagsForResourceResponse) => void): Request<IVS.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Inserts metadata into the active stream of the specified channel. A maximum of 5 requests per second per channel is allowed, each with a maximum 1 KB payload. (If 5 TPS is not sufficient for your needs, we recommend batching your data into a single PutMetadata call.) Also see Embedding Metadata within a Video Stream in the Amazon IVS User Guide.
   */
  putMetadata(params: IVS.Types.PutMetadataRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Inserts metadata into the active stream of the specified channel. A maximum of 5 requests per second per channel is allowed, each with a maximum 1 KB payload. (If 5 TPS is not sufficient for your needs, we recommend batching your data into a single PutMetadata call.) Also see Embedding Metadata within a Video Stream in the Amazon IVS User Guide.
   */
  putMetadata(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disconnects the incoming RTMPS stream for the specified channel. Can be used in conjunction with DeleteStreamKey to prevent further streaming to a channel.  Many streaming client-software libraries automatically reconnect a dropped RTMPS session, so to stop the stream permanently, you may want to first revoke the streamKey attached to the channel. 
   */
  stopStream(params: IVS.Types.StopStreamRequest, callback?: (err: AWSError, data: IVS.Types.StopStreamResponse) => void): Request<IVS.Types.StopStreamResponse, AWSError>;
  /**
   * Disconnects the incoming RTMPS stream for the specified channel. Can be used in conjunction with DeleteStreamKey to prevent further streaming to a channel.  Many streaming client-software libraries automatically reconnect a dropped RTMPS session, so to stop the stream permanently, you may want to first revoke the streamKey attached to the channel. 
   */
  stopStream(callback?: (err: AWSError, data: IVS.Types.StopStreamResponse) => void): Request<IVS.Types.StopStreamResponse, AWSError>;
  /**
   * Adds or updates tags for the AWS resource with the specified ARN.
   */
  tagResource(params: IVS.Types.TagResourceRequest, callback?: (err: AWSError, data: IVS.Types.TagResourceResponse) => void): Request<IVS.Types.TagResourceResponse, AWSError>;
  /**
   * Adds or updates tags for the AWS resource with the specified ARN.
   */
  tagResource(callback?: (err: AWSError, data: IVS.Types.TagResourceResponse) => void): Request<IVS.Types.TagResourceResponse, AWSError>;
  /**
   * Removes tags from the resource with the specified ARN.
   */
  untagResource(params: IVS.Types.UntagResourceRequest, callback?: (err: AWSError, data: IVS.Types.UntagResourceResponse) => void): Request<IVS.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes tags from the resource with the specified ARN.
   */
  untagResource(callback?: (err: AWSError, data: IVS.Types.UntagResourceResponse) => void): Request<IVS.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates a channel's configuration. This does not affect an ongoing stream of this channel. You must stop and restart the stream for the changes to take effect.
   */
  updateChannel(params: IVS.Types.UpdateChannelRequest, callback?: (err: AWSError, data: IVS.Types.UpdateChannelResponse) => void): Request<IVS.Types.UpdateChannelResponse, AWSError>;
  /**
   * Updates a channel's configuration. This does not affect an ongoing stream of this channel. You must stop and restart the stream for the changes to take effect.
   */
  updateChannel(callback?: (err: AWSError, data: IVS.Types.UpdateChannelResponse) => void): Request<IVS.Types.UpdateChannelResponse, AWSError>;
}
declare namespace IVS {
  export interface BatchError {
    /**
     * Channel ARN.
     */
    arn?: ResourceArn;
    /**
     * Error code.
     */
    code?: errorCode;
    /**
     * Error message, determined by the application.
     */
    message?: errorMessage;
  }
  export type BatchErrors = BatchError[];
  export interface BatchGetChannelRequest {
    /**
     * Array of ARNs, one per channel.
     */
    arns: ChannelArnList;
  }
  export interface BatchGetChannelResponse {
    channels?: Channels;
    /**
     * Each error object is related to a specific ARN in the request.
     */
    errors?: BatchErrors;
  }
  export interface BatchGetStreamKeyRequest {
    /**
     * Array of ARNs, one per channel.
     */
    arns: StreamKeyArnList;
  }
  export interface BatchGetStreamKeyResponse {
    streamKeys?: StreamKeys;
    errors?: BatchErrors;
  }
  export type Boolean = boolean;
  export interface Channel {
    /**
     * Channel ARN.
     */
    arn?: ChannelArn;
    /**
     * Channel name.
     */
    name?: ChannelName;
    /**
     * Channel latency mode. Use NORMAL to broadcast and deliver live video up to Full HD. Use LOW for near-real-time interaction with viewers. Default: LOW. (Note: In the Amazon IVS console, LOW and NORMAL correspond to Ultra-low and Standard, respectively.)
     */
    latencyMode?: ChannelLatencyMode;
    /**
     * Channel type, which determines the allowable resolution and bitrate. If you exceed the allowable resolution or bitrate, the stream probably will disconnect immediately. Default: STANDARD. Valid values:    STANDARD: Multiple qualities are generated from the original input, to automatically give viewers the best experience for their devices and network conditions. Vertical resolution can be up to 1080 and bitrate can be up to 8.5 Mbps.    BASIC: Amazon IVS delivers the original input to viewers. The viewer’s video-quality choice is limited to the original input. Vertical resolution can be up to 480 and bitrate can be up to 1.5 Mbps.  
     */
    type?: ChannelType;
    /**
     * Recording-configuration ARN. A value other than an empty string indicates that recording is enabled. Default: "" (empty string, recording is disabled).
     */
    recordingConfigurationArn?: ChannelRecordingConfigurationArn;
    /**
     * Channel ingest endpoint, part of the definition of an ingest server, used when you set up streaming software.
     */
    ingestEndpoint?: IngestEndpoint;
    /**
     * Channel playback URL.
     */
    playbackUrl?: PlaybackURL;
    /**
     * Whether the channel is private (enabled for playback authorization). Default: false.
     */
    authorized?: IsAuthorized;
    /**
     * Array of 1-50 maps, each of the form string:string (key:value).
     */
    tags?: Tags;
  }
  export type ChannelArn = string;
  export type ChannelArnList = ChannelArn[];
  export type ChannelLatencyMode = "NORMAL"|"LOW"|string;
  export type ChannelList = ChannelSummary[];
  export type ChannelName = string;
  export type ChannelRecordingConfigurationArn = string;
  export interface ChannelSummary {
    /**
     * Channel ARN.
     */
    arn?: ChannelArn;
    /**
     * Channel name.
     */
    name?: ChannelName;
    /**
     * Channel latency mode. Use NORMAL to broadcast and deliver live video up to Full HD. Use LOW for near-real-time interaction with viewers. Default: LOW. (Note: In the Amazon IVS console, LOW and NORMAL correspond to Ultra-low and Standard, respectively.)
     */
    latencyMode?: ChannelLatencyMode;
    /**
     * Whether the channel is private (enabled for playback authorization). Default: false.
     */
    authorized?: IsAuthorized;
    /**
     * Recording-configuration ARN. A value other than an empty string indicates that recording is enabled. Default: "" (empty string, recording is disabled).
     */
    recordingConfigurationArn?: ChannelRecordingConfigurationArn;
    /**
     * Array of 1-50 maps, each of the form string:string (key:value).
     */
    tags?: Tags;
  }
  export type ChannelType = "BASIC"|"STANDARD"|string;
  export type Channels = Channel[];
  export interface CreateChannelRequest {
    /**
     * Channel name.
     */
    name?: ChannelName;
    /**
     * Channel latency mode. Use NORMAL to broadcast and deliver live video up to Full HD. Use LOW for near-real-time interaction with viewers. (Note: In the Amazon IVS console, LOW and NORMAL correspond to Ultra-low and Standard, respectively.) Default: LOW.
     */
    latencyMode?: ChannelLatencyMode;
    /**
     * Channel type, which determines the allowable resolution and bitrate. If you exceed the allowable resolution or bitrate, the stream probably will disconnect immediately. Default: STANDARD. Valid values:    STANDARD: Multiple qualities are generated from the original input, to automatically give viewers the best experience for their devices and network conditions. Vertical resolution can be up to 1080 and bitrate can be up to 8.5 Mbps.    BASIC: Amazon IVS delivers the original input to viewers. The viewer’s video-quality choice is limited to the original input. Vertical resolution can be up to 480 and bitrate can be up to 1.5 Mbps.  
     */
    type?: ChannelType;
    /**
     * Whether the channel is private (enabled for playback authorization). Default: false.
     */
    authorized?: Boolean;
    /**
     * Recording-configuration ARN. Default: "" (empty string, recording is disabled).
     */
    recordingConfigurationArn?: ChannelRecordingConfigurationArn;
    /**
     * Array of 1-50 maps, each of the form string:string (key:value).
     */
    tags?: Tags;
  }
  export interface CreateChannelResponse {
    channel?: Channel;
    streamKey?: StreamKey;
  }
  export interface CreateRecordingConfigurationRequest {
    /**
     * An arbitrary string (a nickname) that helps the customer identify that resource. The value does not need to be unique.
     */
    name?: RecordingConfigurationName;
    /**
     * A complex type that contains a destination configuration for where recorded video will be stored.
     */
    destinationConfiguration: DestinationConfiguration;
    /**
     * Array of 1-50 maps, each of the form string:string (key:value).
     */
    tags?: Tags;
  }
  export interface CreateRecordingConfigurationResponse {
    recordingConfiguration?: RecordingConfiguration;
  }
  export interface CreateStreamKeyRequest {
    /**
     * ARN of the channel for which to create the stream key.
     */
    channelArn: ChannelArn;
    /**
     * Array of 1-50 maps, each of the form string:string (key:value).
     */
    tags?: Tags;
  }
  export interface CreateStreamKeyResponse {
    /**
     * Stream key used to authenticate an RTMPS stream for ingestion.
     */
    streamKey?: StreamKey;
  }
  export interface DeleteChannelRequest {
    /**
     * ARN of the channel to be deleted.
     */
    arn: ChannelArn;
  }
  export interface DeletePlaybackKeyPairRequest {
    /**
     * ARN of the key pair to be deleted.
     */
    arn: PlaybackKeyPairArn;
  }
  export interface DeletePlaybackKeyPairResponse {
  }
  export interface DeleteRecordingConfigurationRequest {
    /**
     * ARN of the recording configuration to be deleted.
     */
    arn: RecordingConfigurationArn;
  }
  export interface DeleteStreamKeyRequest {
    /**
     * ARN of the stream key to be deleted.
     */
    arn: StreamKeyArn;
  }
  export interface DestinationConfiguration {
    /**
     * An S3 destination configuration where recorded videos will be stored.
     */
    s3?: S3DestinationConfiguration;
  }
  export interface GetChannelRequest {
    /**
     * ARN of the channel for which the configuration is to be retrieved.
     */
    arn: ChannelArn;
  }
  export interface GetChannelResponse {
    channel?: Channel;
  }
  export interface GetPlaybackKeyPairRequest {
    /**
     * ARN of the key pair to be returned.
     */
    arn: PlaybackKeyPairArn;
  }
  export interface GetPlaybackKeyPairResponse {
    keyPair?: PlaybackKeyPair;
  }
  export interface GetRecordingConfigurationRequest {
    /**
     * ARN of the recording configuration to be retrieved.
     */
    arn: RecordingConfigurationArn;
  }
  export interface GetRecordingConfigurationResponse {
    recordingConfiguration?: RecordingConfiguration;
  }
  export interface GetStreamKeyRequest {
    /**
     * ARN for the stream key to be retrieved.
     */
    arn: StreamKeyArn;
  }
  export interface GetStreamKeyResponse {
    streamKey?: StreamKey;
  }
  export interface GetStreamRequest {
    /**
     * Channel ARN for stream to be accessed.
     */
    channelArn: ChannelArn;
  }
  export interface GetStreamResponse {
    stream?: Stream;
  }
  export interface ImportPlaybackKeyPairRequest {
    /**
     * The public portion of a customer-generated key pair.
     */
    publicKeyMaterial: PlaybackPublicKeyMaterial;
    /**
     * An arbitrary string (a nickname) assigned to a playback key pair that helps the customer identify that resource. The value does not need to be unique.
     */
    name?: PlaybackKeyPairName;
    /**
     * Any tags provided with the request are added to the playback key pair tags.
     */
    tags?: Tags;
  }
  export interface ImportPlaybackKeyPairResponse {
    keyPair?: PlaybackKeyPair;
  }
  export type IngestEndpoint = string;
  export type IsAuthorized = boolean;
  export interface ListChannelsRequest {
    /**
     * Filters the channel list to match the specified name.
     */
    filterByName?: ChannelName;
    /**
     * Filters the channel list to match the specified recording-configuration ARN.
     */
    filterByRecordingConfigurationArn?: ChannelRecordingConfigurationArn;
    /**
     * The first channel to retrieve. This is used for pagination; see the nextToken response field.
     */
    nextToken?: PaginationToken;
    /**
     * Maximum number of channels to return. Default: 50.
     */
    maxResults?: MaxChannelResults;
  }
  export interface ListChannelsResponse {
    /**
     * List of the matching channels.
     */
    channels: ChannelList;
    /**
     * If there are more channels than maxResults, use nextToken in the request to get the next set.
     */
    nextToken?: PaginationToken;
  }
  export interface ListPlaybackKeyPairsRequest {
    /**
     * Maximum number of key pairs to return.
     */
    nextToken?: PaginationToken;
    /**
     * The first key pair to retrieve. This is used for pagination; see the nextToken response field. Default: 50.
     */
    maxResults?: MaxPlaybackKeyPairResults;
  }
  export interface ListPlaybackKeyPairsResponse {
    /**
     * List of key pairs.
     */
    keyPairs: PlaybackKeyPairList;
    /**
     * If there are more key pairs than maxResults, use nextToken in the request to get the next set.
     */
    nextToken?: PaginationToken;
  }
  export interface ListRecordingConfigurationsRequest {
    /**
     * The first recording configuration to retrieve. This is used for pagination; see the nextToken response field.
     */
    nextToken?: PaginationToken;
    /**
     * Maximum number of recording configurations to return. Default: 50. 
     */
    maxResults?: MaxRecordingConfigurationResults;
  }
  export interface ListRecordingConfigurationsResponse {
    /**
     * List of the matching recording configurations.
     */
    recordingConfigurations: RecordingConfigurationList;
    /**
     * If there are more recording configurations than maxResults, use nextToken in the request to get the next set.
     */
    nextToken?: PaginationToken;
  }
  export interface ListStreamKeysRequest {
    /**
     * Channel ARN used to filter the list.
     */
    channelArn: ChannelArn;
    /**
     * The first stream key to retrieve. This is used for pagination; see the nextToken response field.
     */
    nextToken?: PaginationToken;
    /**
     * Maximum number of streamKeys to return. Default: 50.
     */
    maxResults?: MaxStreamKeyResults;
  }
  export interface ListStreamKeysResponse {
    /**
     * List of stream keys.
     */
    streamKeys: StreamKeyList;
    /**
     * If there are more stream keys than maxResults, use nextToken in the request to get the next set.
     */
    nextToken?: PaginationToken;
  }
  export interface ListStreamsRequest {
    /**
     * The first stream to retrieve. This is used for pagination; see the nextToken response field.
     */
    nextToken?: PaginationToken;
    /**
     * Maximum number of streams to return. Default: 50.
     */
    maxResults?: MaxStreamResults;
  }
  export interface ListStreamsResponse {
    /**
     * List of streams.
     */
    streams: StreamList;
    /**
     * If there are more streams than maxResults, use nextToken in the request to get the next set.
     */
    nextToken?: PaginationToken;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The ARN of the resource to be retrieved.
     */
    resourceArn: ResourceArn;
    /**
     * The first tag to retrieve. This is used for pagination; see the nextToken response field.
     */
    nextToken?: String;
    /**
     * Maximum number of tags to return. Default: 50.
     */
    maxResults?: MaxTagResults;
  }
  export interface ListTagsForResourceResponse {
    tags: Tags;
    /**
     * If there are more tags than maxResults, use nextToken in the request to get the next set.
     */
    nextToken?: String;
  }
  export type MaxChannelResults = number;
  export type MaxPlaybackKeyPairResults = number;
  export type MaxRecordingConfigurationResults = number;
  export type MaxStreamKeyResults = number;
  export type MaxStreamResults = number;
  export type MaxTagResults = number;
  export type PaginationToken = string;
  export interface PlaybackKeyPair {
    /**
     * Key-pair ARN.
     */
    arn?: PlaybackKeyPairArn;
    /**
     * An arbitrary string (a nickname) assigned to a playback key pair that helps the customer identify that resource. The value does not need to be unique.
     */
    name?: PlaybackKeyPairName;
    /**
     * Key-pair identifier.
     */
    fingerprint?: PlaybackKeyPairFingerprint;
    /**
     * Array of 1-50 maps, each of the form string:string (key:value).
     */
    tags?: Tags;
  }
  export type PlaybackKeyPairArn = string;
  export type PlaybackKeyPairFingerprint = string;
  export type PlaybackKeyPairList = PlaybackKeyPairSummary[];
  export type PlaybackKeyPairName = string;
  export interface PlaybackKeyPairSummary {
    /**
     * Key-pair ARN.
     */
    arn?: PlaybackKeyPairArn;
    /**
     * An arbitrary string (a nickname) assigned to a playback key pair that helps the customer identify that resource. The value does not need to be unique.
     */
    name?: PlaybackKeyPairName;
    /**
     * Array of 1-50 maps, each of the form string:string (key:value).
     */
    tags?: Tags;
  }
  export type PlaybackPublicKeyMaterial = string;
  export type PlaybackURL = string;
  export interface PutMetadataRequest {
    /**
     * ARN of the channel into which metadata is inserted. This channel must have an active stream.
     */
    channelArn: ChannelArn;
    /**
     * Metadata to insert into the stream. Maximum: 1 KB per request.
     */
    metadata: StreamMetadata;
  }
  export interface RecordingConfiguration {
    /**
     * Recording-configuration ARN.
     */
    arn: RecordingConfigurationArn;
    /**
     * An arbitrary string (a nickname) assigned to a recording configuration that helps the customer identify that resource. The value does not need to be unique.
     */
    name?: RecordingConfigurationName;
    /**
     * A complex type that contains information about where recorded video will be stored.
     */
    destinationConfiguration: DestinationConfiguration;
    /**
     * Indicates the current state of the recording configuration. When the state is ACTIVE, the configuration is ready for recording a channel stream.
     */
    state: RecordingConfigurationState;
    /**
     * Array of 1-50 maps, each of the form string:string (key:value).
     */
    tags?: Tags;
  }
  export type RecordingConfigurationArn = string;
  export type RecordingConfigurationList = RecordingConfigurationSummary[];
  export type RecordingConfigurationName = string;
  export type RecordingConfigurationState = "CREATING"|"CREATE_FAILED"|"ACTIVE"|string;
  export interface RecordingConfigurationSummary {
    /**
     * Recording-configuration ARN.
     */
    arn: RecordingConfigurationArn;
    /**
     * An arbitrary string (a nickname) assigned to a recording configuration that helps the customer identify that resource. The value does not need to be unique.
     */
    name?: RecordingConfigurationName;
    /**
     * A complex type that contains information about where recorded video will be stored.
     */
    destinationConfiguration: DestinationConfiguration;
    /**
     * Indicates the current state of the recording configuration. When the state is ACTIVE, the configuration is ready for recording a channel stream.
     */
    state: RecordingConfigurationState;
    /**
     * Array of 1-50 maps, each of the form string:string (key:value).
     */
    tags?: Tags;
  }
  export type ResourceArn = string;
  export type S3DestinationBucketName = string;
  export interface S3DestinationConfiguration {
    /**
     * Location (S3 bucket name) where recorded videos will be stored.
     */
    bucketName: S3DestinationBucketName;
  }
  export interface StopStreamRequest {
    /**
     * ARN of the channel for which the stream is to be stopped.
     */
    channelArn: ChannelArn;
  }
  export interface StopStreamResponse {
  }
  export interface Stream {
    /**
     * Channel ARN for the stream.
     */
    channelArn?: ChannelArn;
    /**
     * URL of the master playlist, required by the video player to play the HLS stream.
     */
    playbackUrl?: PlaybackURL;
    /**
     * ISO-8601 formatted timestamp of the stream’s start.
     */
    startTime?: StreamStartTime;
    /**
     * The stream’s state.
     */
    state?: StreamState;
    /**
     * The stream’s health.
     */
    health?: StreamHealth;
    /**
     * Number of current viewers of the stream. A value of -1 indicates that the request timed out; in this case, retry.
     */
    viewerCount?: StreamViewerCount;
  }
  export type StreamHealth = "HEALTHY"|"STARVING"|"UNKNOWN"|string;
  export interface StreamKey {
    /**
     * Stream-key ARN.
     */
    arn?: StreamKeyArn;
    /**
     * Stream-key value.
     */
    value?: StreamKeyValue;
    /**
     * Channel ARN for the stream.
     */
    channelArn?: ChannelArn;
    /**
     * Array of 1-50 maps, each of the form string:string (key:value).
     */
    tags?: Tags;
  }
  export type StreamKeyArn = string;
  export type StreamKeyArnList = StreamKeyArn[];
  export type StreamKeyList = StreamKeySummary[];
  export interface StreamKeySummary {
    /**
     * Stream-key ARN.
     */
    arn?: StreamKeyArn;
    /**
     * Channel ARN for the stream.
     */
    channelArn?: ChannelArn;
    /**
     * Array of 1-50 maps, each of the form string:string (key:value).
     */
    tags?: Tags;
  }
  export type StreamKeyValue = string;
  export type StreamKeys = StreamKey[];
  export type StreamList = StreamSummary[];
  export type StreamMetadata = string;
  export type StreamStartTime = Date;
  export type StreamState = "LIVE"|"OFFLINE"|string;
  export interface StreamSummary {
    /**
     * Channel ARN for the stream.
     */
    channelArn?: ChannelArn;
    /**
     * The stream’s state.
     */
    state?: StreamState;
    /**
     * The stream’s health.
     */
    health?: StreamHealth;
    /**
     * Number of current viewers of the stream. A value of -1 indicates that the request timed out; in this case, retry.
     */
    viewerCount?: StreamViewerCount;
    /**
     * ISO-8601 formatted timestamp of the stream’s start.
     */
    startTime?: StreamStartTime;
  }
  export type StreamViewerCount = number;
  export type String = string;
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export interface TagResourceRequest {
    /**
     * ARN of the resource for which tags are to be added or updated.
     */
    resourceArn: ResourceArn;
    /**
     * Array of tags to be added or updated.
     */
    tags: Tags;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type Tags = {[key: string]: TagValue};
  export interface UntagResourceRequest {
    /**
     * ARN of the resource for which tags are to be removed.
     */
    resourceArn: ResourceArn;
    /**
     * Array of tags to be removed.
     */
    tagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateChannelRequest {
    /**
     * ARN of the channel to be updated.
     */
    arn: ChannelArn;
    /**
     * Channel name.
     */
    name?: ChannelName;
    /**
     * Channel latency mode. Use NORMAL to broadcast and deliver live video up to Full HD. Use LOW for near-real-time interaction with viewers. (Note: In the Amazon IVS console, LOW and NORMAL correspond to Ultra-low and Standard, respectively.)
     */
    latencyMode?: ChannelLatencyMode;
    /**
     * Channel type, which determines the allowable resolution and bitrate. If you exceed the allowable resolution or bitrate, the stream probably will disconnect immediately. Valid values:    STANDARD: Multiple qualities are generated from the original input, to automatically give viewers the best experience for their devices and network conditions. Vertical resolution can be up to 1080 and bitrate can be up to 8.5 Mbps.    BASIC: Amazon IVS delivers the original input to viewers. The viewer’s video-quality choice is limited to the original input. Vertical resolution can be up to 480 and bitrate can be up to 1.5 Mbps.  
     */
    type?: ChannelType;
    /**
     * Whether the channel is private (enabled for playback authorization).
     */
    authorized?: Boolean;
    /**
     * Recording-configuration ARN. If this is set to an empty string, recording is disabled. A value other than an empty string indicates that recording is enabled
     */
    recordingConfigurationArn?: ChannelRecordingConfigurationArn;
  }
  export interface UpdateChannelResponse {
    channel?: Channel;
  }
  export type errorCode = string;
  export type errorMessage = string;
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
   * Contains interfaces for use with the IVS client.
   */
  export import Types = IVS;
}
export = IVS;
