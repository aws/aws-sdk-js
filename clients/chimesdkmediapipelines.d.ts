import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class ChimeSDKMediaPipelines extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ChimeSDKMediaPipelines.Types.ClientConfiguration)
  config: Config & ChimeSDKMediaPipelines.Types.ClientConfiguration;
  /**
   * Creates a media pipeline.
   */
  createMediaCapturePipeline(params: ChimeSDKMediaPipelines.Types.CreateMediaCapturePipelineRequest, callback?: (err: AWSError, data: ChimeSDKMediaPipelines.Types.CreateMediaCapturePipelineResponse) => void): Request<ChimeSDKMediaPipelines.Types.CreateMediaCapturePipelineResponse, AWSError>;
  /**
   * Creates a media pipeline.
   */
  createMediaCapturePipeline(callback?: (err: AWSError, data: ChimeSDKMediaPipelines.Types.CreateMediaCapturePipelineResponse) => void): Request<ChimeSDKMediaPipelines.Types.CreateMediaCapturePipelineResponse, AWSError>;
  /**
   * Creates a media concatenation pipeline.
   */
  createMediaConcatenationPipeline(params: ChimeSDKMediaPipelines.Types.CreateMediaConcatenationPipelineRequest, callback?: (err: AWSError, data: ChimeSDKMediaPipelines.Types.CreateMediaConcatenationPipelineResponse) => void): Request<ChimeSDKMediaPipelines.Types.CreateMediaConcatenationPipelineResponse, AWSError>;
  /**
   * Creates a media concatenation pipeline.
   */
  createMediaConcatenationPipeline(callback?: (err: AWSError, data: ChimeSDKMediaPipelines.Types.CreateMediaConcatenationPipelineResponse) => void): Request<ChimeSDKMediaPipelines.Types.CreateMediaConcatenationPipelineResponse, AWSError>;
  /**
   * Creates a streaming media pipeline in an Amazon Chime SDK meeting.
   */
  createMediaLiveConnectorPipeline(params: ChimeSDKMediaPipelines.Types.CreateMediaLiveConnectorPipelineRequest, callback?: (err: AWSError, data: ChimeSDKMediaPipelines.Types.CreateMediaLiveConnectorPipelineResponse) => void): Request<ChimeSDKMediaPipelines.Types.CreateMediaLiveConnectorPipelineResponse, AWSError>;
  /**
   * Creates a streaming media pipeline in an Amazon Chime SDK meeting.
   */
  createMediaLiveConnectorPipeline(callback?: (err: AWSError, data: ChimeSDKMediaPipelines.Types.CreateMediaLiveConnectorPipelineResponse) => void): Request<ChimeSDKMediaPipelines.Types.CreateMediaLiveConnectorPipelineResponse, AWSError>;
  /**
   * Deletes the media pipeline.
   */
  deleteMediaCapturePipeline(params: ChimeSDKMediaPipelines.Types.DeleteMediaCapturePipelineRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the media pipeline.
   */
  deleteMediaCapturePipeline(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the media pipeline.
   */
  deleteMediaPipeline(params: ChimeSDKMediaPipelines.Types.DeleteMediaPipelineRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the media pipeline.
   */
  deleteMediaPipeline(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Gets an existing media pipeline.
   */
  getMediaCapturePipeline(params: ChimeSDKMediaPipelines.Types.GetMediaCapturePipelineRequest, callback?: (err: AWSError, data: ChimeSDKMediaPipelines.Types.GetMediaCapturePipelineResponse) => void): Request<ChimeSDKMediaPipelines.Types.GetMediaCapturePipelineResponse, AWSError>;
  /**
   * Gets an existing media pipeline.
   */
  getMediaCapturePipeline(callback?: (err: AWSError, data: ChimeSDKMediaPipelines.Types.GetMediaCapturePipelineResponse) => void): Request<ChimeSDKMediaPipelines.Types.GetMediaCapturePipelineResponse, AWSError>;
  /**
   * Gets an existing media pipeline.
   */
  getMediaPipeline(params: ChimeSDKMediaPipelines.Types.GetMediaPipelineRequest, callback?: (err: AWSError, data: ChimeSDKMediaPipelines.Types.GetMediaPipelineResponse) => void): Request<ChimeSDKMediaPipelines.Types.GetMediaPipelineResponse, AWSError>;
  /**
   * Gets an existing media pipeline.
   */
  getMediaPipeline(callback?: (err: AWSError, data: ChimeSDKMediaPipelines.Types.GetMediaPipelineResponse) => void): Request<ChimeSDKMediaPipelines.Types.GetMediaPipelineResponse, AWSError>;
  /**
   * Returns a list of media pipelines.
   */
  listMediaCapturePipelines(params: ChimeSDKMediaPipelines.Types.ListMediaCapturePipelinesRequest, callback?: (err: AWSError, data: ChimeSDKMediaPipelines.Types.ListMediaCapturePipelinesResponse) => void): Request<ChimeSDKMediaPipelines.Types.ListMediaCapturePipelinesResponse, AWSError>;
  /**
   * Returns a list of media pipelines.
   */
  listMediaCapturePipelines(callback?: (err: AWSError, data: ChimeSDKMediaPipelines.Types.ListMediaCapturePipelinesResponse) => void): Request<ChimeSDKMediaPipelines.Types.ListMediaCapturePipelinesResponse, AWSError>;
  /**
   * Returns a list of media pipelines.
   */
  listMediaPipelines(params: ChimeSDKMediaPipelines.Types.ListMediaPipelinesRequest, callback?: (err: AWSError, data: ChimeSDKMediaPipelines.Types.ListMediaPipelinesResponse) => void): Request<ChimeSDKMediaPipelines.Types.ListMediaPipelinesResponse, AWSError>;
  /**
   * Returns a list of media pipelines.
   */
  listMediaPipelines(callback?: (err: AWSError, data: ChimeSDKMediaPipelines.Types.ListMediaPipelinesResponse) => void): Request<ChimeSDKMediaPipelines.Types.ListMediaPipelinesResponse, AWSError>;
  /**
   * Lists the tags available for a media pipeline.
   */
  listTagsForResource(params: ChimeSDKMediaPipelines.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: ChimeSDKMediaPipelines.Types.ListTagsForResourceResponse) => void): Request<ChimeSDKMediaPipelines.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists the tags available for a media pipeline.
   */
  listTagsForResource(callback?: (err: AWSError, data: ChimeSDKMediaPipelines.Types.ListTagsForResourceResponse) => void): Request<ChimeSDKMediaPipelines.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * The ARN of the media pipeline that you want to tag. Consists of he pipeline's endpoint region, resource ID, and pipeline ID.
   */
  tagResource(params: ChimeSDKMediaPipelines.Types.TagResourceRequest, callback?: (err: AWSError, data: ChimeSDKMediaPipelines.Types.TagResourceResponse) => void): Request<ChimeSDKMediaPipelines.Types.TagResourceResponse, AWSError>;
  /**
   * The ARN of the media pipeline that you want to tag. Consists of he pipeline's endpoint region, resource ID, and pipeline ID.
   */
  tagResource(callback?: (err: AWSError, data: ChimeSDKMediaPipelines.Types.TagResourceResponse) => void): Request<ChimeSDKMediaPipelines.Types.TagResourceResponse, AWSError>;
  /**
   * Removes any tags from a media pipeline.
   */
  untagResource(params: ChimeSDKMediaPipelines.Types.UntagResourceRequest, callback?: (err: AWSError, data: ChimeSDKMediaPipelines.Types.UntagResourceResponse) => void): Request<ChimeSDKMediaPipelines.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes any tags from a media pipeline.
   */
  untagResource(callback?: (err: AWSError, data: ChimeSDKMediaPipelines.Types.UntagResourceResponse) => void): Request<ChimeSDKMediaPipelines.Types.UntagResourceResponse, AWSError>;
}
declare namespace ChimeSDKMediaPipelines {
  export type AmazonResourceName = string;
  export type Arn = string;
  export interface ArtifactsConcatenationConfiguration {
    /**
     * The configuration for the audio artifacts concatenation.
     */
    Audio: AudioConcatenationConfiguration;
    /**
     * The configuration for the video artifacts concatenation.
     */
    Video: VideoConcatenationConfiguration;
    /**
     * The configuration for the content artifacts concatenation.
     */
    Content: ContentConcatenationConfiguration;
    /**
     * The configuration for the data channel artifacts concatenation.
     */
    DataChannel: DataChannelConcatenationConfiguration;
    /**
     * The configuration for the transcription messages artifacts concatenation.
     */
    TranscriptionMessages: TranscriptionMessagesConcatenationConfiguration;
    /**
     * The configuration for the meeting events artifacts concatenation.
     */
    MeetingEvents: MeetingEventsConcatenationConfiguration;
    /**
     * The configuration for the composited video artifacts concatenation.
     */
    CompositedVideo: CompositedVideoConcatenationConfiguration;
  }
  export type ArtifactsConcatenationState = "Enabled"|"Disabled"|string;
  export interface ArtifactsConfiguration {
    /**
     * The configuration for the audio artifacts.
     */
    Audio: AudioArtifactsConfiguration;
    /**
     * The configuration for the video artifacts.
     */
    Video: VideoArtifactsConfiguration;
    /**
     * The configuration for the content artifacts.
     */
    Content: ContentArtifactsConfiguration;
    /**
     * Enables video compositing.
     */
    CompositedVideo?: CompositedVideoArtifactsConfiguration;
  }
  export type ArtifactsState = "Enabled"|"Disabled"|string;
  export type AttendeeIdList = GuidString[];
  export type AudioArtifactsConcatenationState = "Enabled"|string;
  export interface AudioArtifactsConfiguration {
    /**
     * The MUX type of the audio artifact configuration object.
     */
    MuxType: AudioMuxType;
  }
  export type AudioChannelsOption = "Stereo"|"Mono"|string;
  export interface AudioConcatenationConfiguration {
    /**
     * Enables the name object, where name is the name of the configuration object, such as AudioConcatenation.
     */
    State: AudioArtifactsConcatenationState;
  }
  export type AudioMuxType = "AudioOnly"|"AudioWithActiveSpeakerVideo"|"AudioWithCompositedVideo"|string;
  export type AudioSampleRateOption = string;
  export interface ChimeSdkMeetingConcatenationConfiguration {
    /**
     * The configuration for the artifacts in an Amazon Chime SDK meeting concatenation.
     */
    ArtifactsConfiguration: ArtifactsConcatenationConfiguration;
  }
  export interface ChimeSdkMeetingConfiguration {
    /**
     * The source configuration for a specified media pipline.
     */
    SourceConfiguration?: SourceConfiguration;
    /**
     * The configuration for the artifacts in an Amazon Chime SDK meeting.
     */
    ArtifactsConfiguration?: ArtifactsConfiguration;
  }
  export interface ChimeSdkMeetingLiveConnectorConfiguration {
    /**
     * The configuration object's Chime SDK meeting ARN.
     */
    Arn: Arn;
    /**
     * The configuration object's multiplex type.
     */
    MuxType: LiveConnectorMuxType;
    /**
     * The media pipeline's composited video.
     */
    CompositedVideo?: CompositedVideoArtifactsConfiguration;
    /**
     * The source configuration settings of the media pipeline's configuration object.
     */
    SourceConfiguration?: SourceConfiguration;
  }
  export type ClientRequestToken = string;
  export interface CompositedVideoArtifactsConfiguration {
    /**
     * The layout setting, such as GridView in the configuration object.
     */
    Layout?: LayoutOption;
    /**
     * The video resolution setting in the configuration object. Default: HD at 1280 x 720. FHD resolution: 1920 x 1080.
     */
    Resolution?: ResolutionOption;
    /**
     * The GridView configuration setting.
     */
    GridViewConfiguration: GridViewConfiguration;
  }
  export interface CompositedVideoConcatenationConfiguration {
    /**
     * Enables or disables the configuration object.
     */
    State: ArtifactsConcatenationState;
  }
  export interface ConcatenationSink {
    /**
     * The type of data sink in the configuration object.
     */
    Type: ConcatenationSinkType;
    /**
     * The configuration settings for an Amazon S3 bucket sink.
     */
    S3BucketSinkConfiguration: S3BucketSinkConfiguration;
  }
  export type ConcatenationSinkList = ConcatenationSink[];
  export type ConcatenationSinkType = "S3Bucket"|string;
  export interface ConcatenationSource {
    /**
     * The type of concatenation source in a configuration object.
     */
    Type: ConcatenationSourceType;
    /**
     * The concatenation settings for the media pipeline in a configuration object.
     */
    MediaCapturePipelineSourceConfiguration: MediaCapturePipelineSourceConfiguration;
  }
  export type ConcatenationSourceList = ConcatenationSource[];
  export type ConcatenationSourceType = "MediaCapturePipeline"|string;
  export interface ContentArtifactsConfiguration {
    /**
     * Indicates whether the content artifact is enabled or disabled.
     */
    State: ArtifactsState;
    /**
     * The MUX type of the artifact configuration.
     */
    MuxType?: ContentMuxType;
  }
  export interface ContentConcatenationConfiguration {
    /**
     * Enables or disables the configuration object.
     */
    State: ArtifactsConcatenationState;
  }
  export type ContentMuxType = "ContentOnly"|string;
  export type ContentShareLayoutOption = "PresenterOnly"|"Horizontal"|"Vertical"|string;
  export interface CreateMediaCapturePipelineRequest {
    /**
     * Source type from which the media artifacts are captured. A Chime SDK Meeting is the only supported source.
     */
    SourceType: MediaPipelineSourceType;
    /**
     * ARN of the source from which the media artifacts are captured.
     */
    SourceArn: Arn;
    /**
     * Destination type to which the media artifacts are saved. You must use an S3 bucket.
     */
    SinkType: MediaPipelineSinkType;
    /**
     * The ARN of the sink type.
     */
    SinkArn: Arn;
    /**
     * The unique identifier for the client request. The token makes the API request idempotent. Use a unique token for each media pipeline request.
     */
    ClientRequestToken?: ClientRequestToken;
    /**
     * The configuration for a specified media pipeline. SourceType must be ChimeSdkMeeting.
     */
    ChimeSdkMeetingConfiguration?: ChimeSdkMeetingConfiguration;
    /**
     * The tag key-value pairs.
     */
    Tags?: TagList;
  }
  export interface CreateMediaCapturePipelineResponse {
    /**
     * A media pipeline object, the ID, source type, source ARN, sink type, and sink ARN of a media pipeline object.
     */
    MediaCapturePipeline?: MediaCapturePipeline;
  }
  export interface CreateMediaConcatenationPipelineRequest {
    /**
     * An object that specifies the sources for the media concatenation pipeline.
     */
    Sources: ConcatenationSourceList;
    /**
     * An object that specifies the data sinks for the media concatenation pipeline.
     */
    Sinks: ConcatenationSinkList;
    /**
     * The unique identifier for the client request. The token makes the API request idempotent. Use a unique token for each media concatenation pipeline request.
     */
    ClientRequestToken?: ClientRequestToken;
    /**
     * The tags associated with the media concatenation pipeline.
     */
    Tags?: TagList;
  }
  export interface CreateMediaConcatenationPipelineResponse {
    /**
     * A media concatenation pipeline object, the ID, source type, MediaPipelineARN, and sink of a media concatenation pipeline object.
     */
    MediaConcatenationPipeline?: MediaConcatenationPipeline;
  }
  export interface CreateMediaLiveConnectorPipelineRequest {
    /**
     * The media pipeline's data sources.
     */
    Sources: LiveConnectorSourceList;
    /**
     * The media pipeline's data sinks.
     */
    Sinks: LiveConnectorSinkList;
    /**
     * The token assigned to the client making the request.
     */
    ClientRequestToken?: ClientRequestToken;
    /**
     * The tags associated with the media pipeline.
     */
    Tags?: TagList;
  }
  export interface CreateMediaLiveConnectorPipelineResponse {
    /**
     * The new media pipeline.
     */
    MediaLiveConnectorPipeline?: MediaLiveConnectorPipeline;
  }
  export interface DataChannelConcatenationConfiguration {
    /**
     * Enables or disables the configuration object.
     */
    State: ArtifactsConcatenationState;
  }
  export interface DeleteMediaCapturePipelineRequest {
    /**
     * The ID of the media pipeline being deleted. 
     */
    MediaPipelineId: GuidString;
  }
  export interface DeleteMediaPipelineRequest {
    /**
     * The ID of the media pipeline to delete.
     */
    MediaPipelineId: GuidString;
  }
  export type ExternalUserIdList = ExternalUserIdType[];
  export type ExternalUserIdType = string;
  export interface GetMediaCapturePipelineRequest {
    /**
     * The ID of the pipeline that you want to get.
     */
    MediaPipelineId: GuidString;
  }
  export interface GetMediaCapturePipelineResponse {
    /**
     * The media pipeline object.
     */
    MediaCapturePipeline?: MediaCapturePipeline;
  }
  export interface GetMediaPipelineRequest {
    /**
     * The ID of the pipeline that you want to get.
     */
    MediaPipelineId: GuidString;
  }
  export interface GetMediaPipelineResponse {
    /**
     * The media pipeline object.
     */
    MediaPipeline?: MediaPipeline;
  }
  export interface GridViewConfiguration {
    /**
     * Defines the layout of the video tiles when content sharing is enabled.
     */
    ContentShareLayout: ContentShareLayoutOption;
    /**
     * Defines the configuration options for a presenter only video tile.
     */
    PresenterOnlyConfiguration?: PresenterOnlyConfiguration;
  }
  export type GuidString = string;
  export type Iso8601Timestamp = Date;
  export type LayoutOption = "GridView"|string;
  export interface ListMediaCapturePipelinesRequest {
    /**
     * The token used to retrieve the next page of results.
     */
    NextToken?: String;
    /**
     * The maximum number of results to return in a single call. Valid Range: 1 - 99.
     */
    MaxResults?: ResultMax;
  }
  export interface ListMediaCapturePipelinesResponse {
    /**
     * The media pipeline objects in the list.
     */
    MediaCapturePipelines?: MediaCapturePipelineSummaryList;
    /**
     * The token used to retrieve the next page of results. 
     */
    NextToken?: String;
  }
  export interface ListMediaPipelinesRequest {
    /**
     * The token used to retrieve the next page of results.
     */
    NextToken?: String;
    /**
     * The maximum number of results to return in a single call. Valid Range: 1 - 99.
     */
    MaxResults?: ResultMax;
  }
  export interface ListMediaPipelinesResponse {
    /**
     * The media pipeline objects in the list.
     */
    MediaPipelines?: MediaPipelineList;
    /**
     * The token used to retrieve the next page of results. 
     */
    NextToken?: String;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The ARN of the media pipeline associated with any tags. The ARN consists of the pipeline's region, resource ID, and pipeline ID.
     */
    ResourceARN: AmazonResourceName;
  }
  export interface ListTagsForResourceResponse {
    /**
     * The tags associated with the specified media pipeline.
     */
    Tags?: TagList;
  }
  export type LiveConnectorMuxType = "AudioWithCompositedVideo"|"AudioWithActiveSpeakerVideo"|string;
  export interface LiveConnectorRTMPConfiguration {
    /**
     * The URL of the RTMP configuration.
     */
    Url: SensitiveString;
    /**
     * The audio channels set for the RTMP configuration
     */
    AudioChannels?: AudioChannelsOption;
    /**
     * The audio sample rate set for the RTMP configuration. Default: 48000.
     */
    AudioSampleRate?: AudioSampleRateOption;
  }
  export interface LiveConnectorSinkConfiguration {
    /**
     * The sink configuration's sink type.
     */
    SinkType: LiveConnectorSinkType;
    /**
     * The sink configuration's RTMP configuration setttings.
     */
    RTMPConfiguration: LiveConnectorRTMPConfiguration;
  }
  export type LiveConnectorSinkList = LiveConnectorSinkConfiguration[];
  export type LiveConnectorSinkType = "RTMP"|string;
  export interface LiveConnectorSourceConfiguration {
    /**
     * The source configuration's media source type.
     */
    SourceType: LiveConnectorSourceType;
    /**
     * The configuration settings of the connector pipeline.
     */
    ChimeSdkMeetingLiveConnectorConfiguration: ChimeSdkMeetingLiveConnectorConfiguration;
  }
  export type LiveConnectorSourceList = LiveConnectorSourceConfiguration[];
  export type LiveConnectorSourceType = "ChimeSdkMeeting"|string;
  export interface MediaCapturePipeline {
    /**
     * The ID of a media pipeline.
     */
    MediaPipelineId?: GuidString;
    /**
     * The ARN of the media capture pipeline
     */
    MediaPipelineArn?: AmazonResourceName;
    /**
     * Source type from which media artifacts are saved. You must use ChimeMeeting.
     */
    SourceType?: MediaPipelineSourceType;
    /**
     * ARN of the source from which the media artifacts are saved.
     */
    SourceArn?: Arn;
    /**
     * The status of the media pipeline.
     */
    Status?: MediaPipelineStatus;
    /**
     * Destination type to which the media artifacts are saved. You must use an S3 Bucket.
     */
    SinkType?: MediaPipelineSinkType;
    /**
     * ARN of the destination to which the media artifacts are saved.
     */
    SinkArn?: Arn;
    /**
     * The time at which the pipeline was created, in ISO 8601 format.
     */
    CreatedTimestamp?: Iso8601Timestamp;
    /**
     * The time at which the pipeline was updated, in ISO 8601 format.
     */
    UpdatedTimestamp?: Iso8601Timestamp;
    /**
     * The configuration for a specified media pipeline. SourceType must be ChimeSdkMeeting.
     */
    ChimeSdkMeetingConfiguration?: ChimeSdkMeetingConfiguration;
  }
  export interface MediaCapturePipelineSourceConfiguration {
    /**
     * The media pipeline ARN in the configuration object of a media capture pipeline.
     */
    MediaPipelineArn: Arn;
    /**
     * The meeting configuration settings in a media capture pipeline configuration object. 
     */
    ChimeSdkMeetingConfiguration: ChimeSdkMeetingConcatenationConfiguration;
  }
  export interface MediaCapturePipelineSummary {
    /**
     * The ID of the media pipeline in the summary.
     */
    MediaPipelineId?: GuidString;
    /**
     * The ARN of the media pipeline in the summary.
     */
    MediaPipelineArn?: AmazonResourceName;
  }
  export type MediaCapturePipelineSummaryList = MediaCapturePipelineSummary[];
  export interface MediaConcatenationPipeline {
    /**
     * The ID of the media pipeline being concatenated.
     */
    MediaPipelineId?: GuidString;
    /**
     * The ARN of the media pipeline that you specify in the SourceConfiguration object.
     */
    MediaPipelineArn?: AmazonResourceName;
    /**
     * The data sources being concatnated.
     */
    Sources?: ConcatenationSourceList;
    /**
     * The data sinks of the concatenation pipeline.
     */
    Sinks?: ConcatenationSinkList;
    /**
     * The status of the concatenation pipeline.
     */
    Status?: MediaPipelineStatus;
    /**
     * The time at which the concatenation pipeline was created.
     */
    CreatedTimestamp?: Iso8601Timestamp;
    /**
     * The time at which the concatenation pipeline was last updated.
     */
    UpdatedTimestamp?: Iso8601Timestamp;
  }
  export interface MediaLiveConnectorPipeline {
    /**
     * The connector pipeline's data sources.
     */
    Sources?: LiveConnectorSourceList;
    /**
     * The connector pipeline's data sinks.
     */
    Sinks?: LiveConnectorSinkList;
    /**
     * The connector pipeline's ID.
     */
    MediaPipelineId?: GuidString;
    /**
     * The connector pipeline's ARN.
     */
    MediaPipelineArn?: AmazonResourceName;
    /**
     * The connector pipeline's status.
     */
    Status?: MediaPipelineStatus;
    /**
     * Thetime at which the connector pipeline was created.
     */
    CreatedTimestamp?: Iso8601Timestamp;
    /**
     * The time at which the connector pipeline was last updated.
     */
    UpdatedTimestamp?: Iso8601Timestamp;
  }
  export interface MediaPipeline {
    /**
     * A pipeline that enables users to capture audio and video.
     */
    MediaCapturePipeline?: MediaCapturePipeline;
    /**
     * The connector pipeline of the media pipeline.
     */
    MediaLiveConnectorPipeline?: MediaLiveConnectorPipeline;
    /**
     * The media concatenation pipeline in a media pipeline.
     */
    MediaConcatenationPipeline?: MediaConcatenationPipeline;
  }
  export type MediaPipelineList = MediaPipelineSummary[];
  export type MediaPipelineSinkType = "S3Bucket"|string;
  export type MediaPipelineSourceType = "ChimeSdkMeeting"|string;
  export type MediaPipelineStatus = "Initializing"|"InProgress"|"Failed"|"Stopping"|"Stopped"|string;
  export interface MediaPipelineSummary {
    /**
     * The ID of the media pipeline in the summary.
     */
    MediaPipelineId?: GuidString;
    /**
     * The ARN of the media pipeline in the summary.
     */
    MediaPipelineArn?: AmazonResourceName;
  }
  export interface MeetingEventsConcatenationConfiguration {
    /**
     * Enables or disables the configuration object.
     */
    State: ArtifactsConcatenationState;
  }
  export interface PresenterOnlyConfiguration {
    /**
     * Defines the position of the presenter video tile. Default: TopRight.
     */
    PresenterPosition?: PresenterPosition;
  }
  export type PresenterPosition = "TopLeft"|"TopRight"|"BottomLeft"|"BottomRight"|string;
  export type ResolutionOption = "HD"|"FHD"|string;
  export type ResultMax = number;
  export interface S3BucketSinkConfiguration {
    /**
     * The destination URL of the S3 bucket.
     */
    Destination: Arn;
  }
  export interface SelectedVideoStreams {
    /**
     * The attendee IDs of the streams selected for a media pipeline. 
     */
    AttendeeIds?: AttendeeIdList;
    /**
     * The external user IDs of the streams selected for a media pipeline.
     */
    ExternalUserIds?: ExternalUserIdList;
  }
  export type SensitiveString = string;
  export interface SourceConfiguration {
    /**
     * The selected video streams for a specified media pipeline. The number of video streams can't exceed 25.
     */
    SelectedVideoStreams?: SelectedVideoStreams;
  }
  export type String = string;
  export interface Tag {
    /**
     * The key half of a tag.
     */
    Key: TagKey;
    /**
     * The value half of a tag.
     */
    Value: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export interface TagResourceRequest {
    /**
     * The ARN of the media pipeline associated with any tags. The ARN consists of the pipeline's endpoint region, resource ID, and pipeline ID.
     */
    ResourceARN: AmazonResourceName;
    /**
     * The tags associated with the specified media pipeline.
     */
    Tags: TagList;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export interface TranscriptionMessagesConcatenationConfiguration {
    /**
     * Enables or disables the configuration object.
     */
    State: ArtifactsConcatenationState;
  }
  export interface UntagResourceRequest {
    /**
     * The ARN of the pipeline that you want to untag.
     */
    ResourceARN: AmazonResourceName;
    /**
     * The key/value pairs in the tag that you want to remove.
     */
    TagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface VideoArtifactsConfiguration {
    /**
     * Indicates whether the video artifact is enabled or disabled.
     */
    State: ArtifactsState;
    /**
     * The MUX type of the video artifact configuration object.
     */
    MuxType?: VideoMuxType;
  }
  export interface VideoConcatenationConfiguration {
    /**
     * Enables or disables the configuration object.
     */
    State: ArtifactsConcatenationState;
  }
  export type VideoMuxType = "VideoOnly"|string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2021-07-15"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the ChimeSDKMediaPipelines client.
   */
  export import Types = ChimeSDKMediaPipelines;
}
export = ChimeSDKMediaPipelines;
