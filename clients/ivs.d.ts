import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
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
   * Creates a stream key, used to initiate a stream, for the specified channel ARN. Note that CreateChannel creates a stream key. If you subsequently use CreateStreamKey on the same channel, it will fail because a stream key already exists and there is a limit of 1 stream key per channel. To reset the stream key on a channel, use DeleteStreamKey and then CreateStreamKey.
   */
  createStreamKey(params: IVS.Types.CreateStreamKeyRequest, callback?: (err: AWSError, data: IVS.Types.CreateStreamKeyResponse) => void): Request<IVS.Types.CreateStreamKeyResponse, AWSError>;
  /**
   * Creates a stream key, used to initiate a stream, for the specified channel ARN. Note that CreateChannel creates a stream key. If you subsequently use CreateStreamKey on the same channel, it will fail because a stream key already exists and there is a limit of 1 stream key per channel. To reset the stream key on a channel, use DeleteStreamKey and then CreateStreamKey.
   */
  createStreamKey(callback?: (err: AWSError, data: IVS.Types.CreateStreamKeyResponse) => void): Request<IVS.Types.CreateStreamKeyResponse, AWSError>;
  /**
   * Deletes the specified channel and its associated stream keys.
   */
  deleteChannel(params: IVS.Types.DeleteChannelRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified channel and its associated stream keys.
   */
  deleteChannel(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
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
   * Gets summary information about all channels in your account, in the AWS region where the API request is processed. This list can be filtered to match a specified string.
   */
  listChannels(params: IVS.Types.ListChannelsRequest, callback?: (err: AWSError, data: IVS.Types.ListChannelsResponse) => void): Request<IVS.Types.ListChannelsResponse, AWSError>;
  /**
   * Gets summary information about all channels in your account, in the AWS region where the API request is processed. This list can be filtered to match a specified string.
   */
  listChannels(callback?: (err: AWSError, data: IVS.Types.ListChannelsResponse) => void): Request<IVS.Types.ListChannelsResponse, AWSError>;
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
   * Inserts metadata into an RTMPS stream for the specified channel. A maximum of 5 requests per second per channel is allowed, each with a maximum 1KB payload.
   */
  putMetadata(params: IVS.Types.PutMetadataRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Inserts metadata into an RTMPS stream for the specified channel. A maximum of 5 requests per second per channel is allowed, each with a maximum 1KB payload.
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
     * Channel latency mode. Default: LOW.
     */
    latencyMode?: ChannelLatencyMode;
    /**
     * Channel type, which determines the allowable resolution and bitrate. If you exceed the allowable resolution or bitrate, the stream probably will disconnect immediately. Valid values:    STANDARD: Multiple qualities are generated from the original input, to automatically give viewers the best experience for their devices and network conditions. Vertical resolution can be up to 1080 and bitrate can be up to 8.5 Mbps.    BASIC: Amazon IVS delivers the original input to viewers. The viewer’s video-quality choice is limited to the original input. Vertical resolution can be up to 480 and bitrate can be up to 1.5 Mbps.   Default: STANDARD.
     */
    type?: ChannelType;
    /**
     * Channel ingest endpoint, part of the definition of an ingest server, used when you set up streaming software.
     */
    ingestEndpoint?: IngestEndpoint;
    /**
     * Channel playback URL.
     */
    playbackUrl?: PlaybackURL;
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
     * Channel latency mode. Default: LOW.
     */
    latencyMode?: ChannelLatencyMode;
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
     * Channel latency mode. Default: LOW.
     */
    latencyMode?: ChannelLatencyMode;
    /**
     * Channel type, which determines the allowable resolution and bitrate. If you exceed the allowable resolution or bitrate, the stream probably will disconnect immediately. Valid values:    STANDARD: Multiple qualities are generated from the original input, to automatically give viewers the best experience for their devices and network conditions. Vertical resolution can be up to 1080 and bitrate can be up to 8.5 Mbps.    BASIC: Amazon IVS delivers the original input to viewers. The viewer’s video-quality choice is limited to the original input. Vertical resolution can be up to 480 and bitrate can be up to 1.5 Mbps.   Default: STANDARD.
     */
    type?: ChannelType;
    /**
     * See Channel$tags.
     */
    tags?: Tags;
  }
  export interface CreateChannelResponse {
    channel?: Channel;
    streamKey?: StreamKey;
  }
  export interface CreateStreamKeyRequest {
    /**
     * ARN of the channel for which to create the stream key.
     */
    channelArn: ChannelArn;
    /**
     * See Channel$tags.
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
  export interface DeleteStreamKeyRequest {
    /**
     * ARN of the stream key to be deleted.
     */
    arn: StreamKeyArn;
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
  export type IngestEndpoint = string;
  export interface ListChannelsRequest {
    /**
     * Filters the channel list to match the specified name.
     */
    filterByName?: ChannelName;
    /**
     * The first channel to retrieve. This is used for pagination; see the nextToken response field.
     */
    nextToken?: PaginationToken;
    /**
     * Maximum number of channels to return.
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
     * Maximum number of streamKeys to return.
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
     * Maximum number of streams to return.
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
     * Maximum number of tags to return.
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
  export type MaxStreamKeyResults = number;
  export type MaxStreamResults = number;
  export type MaxTagResults = number;
  export type PaginationToken = string;
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
  export type ResourceArn = string;
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
     * URL of the video master manifest, required by the video player to play the HLS stream.
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
     * Number of current viewers of the stream.
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
     * Array of 1-50 maps, each of the form string:string (key:value) 
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
     * Array of 1-50 maps, each of the form string:string (key:value) 
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
     * Number of current viewers of the stream.
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
     * Channel latency mode. Default: LOW.
     */
    latencyMode?: ChannelLatencyMode;
    /**
     * Channel type, which determines the allowable resolution and bitrate. If you exceed the allowable resolution or bitrate, the stream probably will disconnect immediately. Valid values:    STANDARD: Multiple qualities are generated from the original input, to automatically give viewers the best experience for their devices and network conditions. Vertical resolution can be up to 1080 and bitrate can be up to 8.5 Mbps.    BASIC: Amazon IVS delivers the original input to viewers. The viewer’s video-quality choice is limited to the original input. Vertical resolution can be up to 480 and bitrate can be up to 1.5 Mbps.   Default: STANDARD.
     */
    type?: ChannelType;
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
