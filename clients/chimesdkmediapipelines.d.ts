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
   * Creates a media capture pipeline.
   */
  createMediaCapturePipeline(params: ChimeSDKMediaPipelines.Types.CreateMediaCapturePipelineRequest, callback?: (err: AWSError, data: ChimeSDKMediaPipelines.Types.CreateMediaCapturePipelineResponse) => void): Request<ChimeSDKMediaPipelines.Types.CreateMediaCapturePipelineResponse, AWSError>;
  /**
   * Creates a media capture pipeline.
   */
  createMediaCapturePipeline(callback?: (err: AWSError, data: ChimeSDKMediaPipelines.Types.CreateMediaCapturePipelineResponse) => void): Request<ChimeSDKMediaPipelines.Types.CreateMediaCapturePipelineResponse, AWSError>;
  /**
   * Deletes the media capture pipeline.
   */
  deleteMediaCapturePipeline(params: ChimeSDKMediaPipelines.Types.DeleteMediaCapturePipelineRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the media capture pipeline.
   */
  deleteMediaCapturePipeline(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Gets an existing media capture pipeline.
   */
  getMediaCapturePipeline(params: ChimeSDKMediaPipelines.Types.GetMediaCapturePipelineRequest, callback?: (err: AWSError, data: ChimeSDKMediaPipelines.Types.GetMediaCapturePipelineResponse) => void): Request<ChimeSDKMediaPipelines.Types.GetMediaCapturePipelineResponse, AWSError>;
  /**
   * Gets an existing media capture pipeline.
   */
  getMediaCapturePipeline(callback?: (err: AWSError, data: ChimeSDKMediaPipelines.Types.GetMediaCapturePipelineResponse) => void): Request<ChimeSDKMediaPipelines.Types.GetMediaCapturePipelineResponse, AWSError>;
  /**
   * Returns a list of media capture pipelines.
   */
  listMediaCapturePipelines(params: ChimeSDKMediaPipelines.Types.ListMediaCapturePipelinesRequest, callback?: (err: AWSError, data: ChimeSDKMediaPipelines.Types.ListMediaCapturePipelinesResponse) => void): Request<ChimeSDKMediaPipelines.Types.ListMediaCapturePipelinesResponse, AWSError>;
  /**
   * Returns a list of media capture pipelines.
   */
  listMediaCapturePipelines(callback?: (err: AWSError, data: ChimeSDKMediaPipelines.Types.ListMediaCapturePipelinesResponse) => void): Request<ChimeSDKMediaPipelines.Types.ListMediaCapturePipelinesResponse, AWSError>;
  /**
   * Lists the tags applied to an Amazon Chime SDK media capture pipeline.
   */
  listTagsForResource(params: ChimeSDKMediaPipelines.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: ChimeSDKMediaPipelines.Types.ListTagsForResourceResponse) => void): Request<ChimeSDKMediaPipelines.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists the tags applied to an Amazon Chime SDK media capture pipeline.
   */
  listTagsForResource(callback?: (err: AWSError, data: ChimeSDKMediaPipelines.Types.ListTagsForResourceResponse) => void): Request<ChimeSDKMediaPipelines.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Applies the specified tags to the specified Amazon Chime SDK media capture pipeline.
   */
  tagResource(params: ChimeSDKMediaPipelines.Types.TagResourceRequest, callback?: (err: AWSError, data: ChimeSDKMediaPipelines.Types.TagResourceResponse) => void): Request<ChimeSDKMediaPipelines.Types.TagResourceResponse, AWSError>;
  /**
   * Applies the specified tags to the specified Amazon Chime SDK media capture pipeline.
   */
  tagResource(callback?: (err: AWSError, data: ChimeSDKMediaPipelines.Types.TagResourceResponse) => void): Request<ChimeSDKMediaPipelines.Types.TagResourceResponse, AWSError>;
  /**
   * Removes the specified tags from the specified Amazon Chime SDK media capture pipeline.
   */
  untagResource(params: ChimeSDKMediaPipelines.Types.UntagResourceRequest, callback?: (err: AWSError, data: ChimeSDKMediaPipelines.Types.UntagResourceResponse) => void): Request<ChimeSDKMediaPipelines.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes the specified tags from the specified Amazon Chime SDK media capture pipeline.
   */
  untagResource(callback?: (err: AWSError, data: ChimeSDKMediaPipelines.Types.UntagResourceResponse) => void): Request<ChimeSDKMediaPipelines.Types.UntagResourceResponse, AWSError>;
}
declare namespace ChimeSDKMediaPipelines {
  export type AmazonResourceName = string;
  export type Arn = string;
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
  }
  export type ArtifactsState = "Enabled"|"Disabled"|string;
  export type AttendeeIdList = GuidString[];
  export interface AudioArtifactsConfiguration {
    /**
     * The MUX type of the audio artifact configuration object.
     */
    MuxType: AudioMuxType;
  }
  export type AudioMuxType = "AudioOnly"|"AudioWithActiveSpeakerVideo"|string;
  export interface ChimeSdkMeetingConfiguration {
    /**
     * The source configuration for a specified media capture pipline.
     */
    SourceConfiguration?: SourceConfiguration;
    /**
     * The configuration for the artifacts in an Amazon Chime SDK meeting.
     */
    ArtifactsConfiguration?: ArtifactsConfiguration;
  }
  export type ClientRequestToken = string;
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
  export type ContentMuxType = "ContentOnly"|string;
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
     * The token assigned to the client making the pipeline request.
     */
    ClientRequestToken?: ClientRequestToken;
    /**
     * The configuration for a specified media capture pipeline. SourceType must be ChimeSdkMeeting.
     */
    ChimeSdkMeetingConfiguration?: ChimeSdkMeetingConfiguration;
    /**
     * The list of tags.
     */
    Tags?: TagList;
  }
  export interface CreateMediaCapturePipelineResponse {
    /**
     * A media capture pipeline object, the ID, source type, source ARN, sink type, and sink ARN of a media capture pipeline object.
     */
    MediaCapturePipeline?: MediaCapturePipeline;
  }
  export interface DeleteMediaCapturePipelineRequest {
    /**
     * The ID of the media capture pipeline being deleted. 
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
     * The media capture pipeline object.
     */
    MediaCapturePipeline?: MediaCapturePipeline;
  }
  export type GuidString = string;
  export type Iso8601Timestamp = Date;
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
     * The media capture pipeline objects in the list.
     */
    MediaCapturePipelines?: MediaCapturePipelineSummaryList;
    /**
     * The token used to retrieve the next page of results. 
     */
    NextToken?: String;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The resource ARN.
     */
    ResourceARN: AmazonResourceName;
  }
  export interface ListTagsForResourceResponse {
    /**
     * The tag key-value pairs.
     */
    Tags?: TagList;
  }
  export interface MediaCapturePipeline {
    /**
     * The ID of a media capture pipeline.
     */
    MediaPipelineId?: GuidString;
    /**
     * The ARN of a media capture pipeline.
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
     * The status of the media capture pipeline.
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
     * The time at which the capture pipeline was created, in ISO 8601 format.
     */
    CreatedTimestamp?: Iso8601Timestamp;
    /**
     * The time at which the capture pipeline was updated, in ISO 8601 format.
     */
    UpdatedTimestamp?: Iso8601Timestamp;
    /**
     * The configuration for a specified media capture pipeline. SourceType must be ChimeSdkMeeting.
     */
    ChimeSdkMeetingConfiguration?: ChimeSdkMeetingConfiguration;
  }
  export interface MediaCapturePipelineSummary {
    /**
     * The ID of a media capture pipeline.
     */
    MediaPipelineId?: GuidString;
    /**
     * The ARN of a media capture pipeline.
     */
    MediaPipelineArn?: AmazonResourceName;
  }
  export type MediaCapturePipelineSummaryList = MediaCapturePipelineSummary[];
  export type MediaPipelineSinkType = "S3Bucket"|string;
  export type MediaPipelineSourceType = "ChimeSdkMeeting"|string;
  export type MediaPipelineStatus = "Initializing"|"InProgress"|"Failed"|"Stopping"|"Stopped"|string;
  export type ResultMax = number;
  export interface SelectedVideoStreams {
    /**
     * The attendee IDs of the streams selected for a media capture pipeline. 
     */
    AttendeeIds?: AttendeeIdList;
    /**
     * The external user IDs of the streams selected for a media capture pipeline.
     */
    ExternalUserIds?: ExternalUserIdList;
  }
  export interface SourceConfiguration {
    /**
     * The selected video streams to capture for a specified media capture pipeline. The number of video streams can't exceed 25.
     */
    SelectedVideoStreams?: SelectedVideoStreams;
  }
  export type String = string;
  export interface Tag {
    /**
     * The key of the tag.
     */
    Key: TagKey;
    /**
     * The value of the tag.
     */
    Value: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export interface TagResourceRequest {
    /**
     * The resource ARN.
     */
    ResourceARN: AmazonResourceName;
    /**
     * The tag key-value pairs.
     */
    Tags: TagList;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export interface UntagResourceRequest {
    /**
     * The resource ARN.
     */
    ResourceARN: AmazonResourceName;
    /**
     * The tag keys.
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
