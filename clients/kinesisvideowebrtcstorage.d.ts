import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class KinesisVideoWebRTCStorage extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: KinesisVideoWebRTCStorage.Types.ClientConfiguration)
  config: Config & KinesisVideoWebRTCStorage.Types.ClientConfiguration;
  /**
   *  Before using this API, you must call the GetSignalingChannelEndpoint API to request the WEBRTC endpoint. You then specify the endpoint and region in your JoinStorageSession API request.  Join the ongoing one way-video and/or multi-way audio WebRTC session as a video producing device for an input channel. If there’s no existing session for the channel, a new streaming session needs to be created, and the Amazon Resource Name (ARN) of the signaling channel must be provided.  Currently for the SINGLE_MASTER type, a video producing device is able to ingest both audio and video media into a stream. Only video producing devices can join the session and record media.  Both audio and video tracks are currently required for WebRTC ingestion. Current requirements:   Video track: H.264   Audio track: Opus    The resulting ingested video in the Kinesis video stream will have the following parameters: H.264 video and AAC audio. Once a master participant has negotiated a connection through WebRTC, the ingested media session will be stored in the Kinesis video stream. Multiple viewers are then able to play back real-time media through our Playback APIs. You can also use existing Kinesis Video Streams features like HLS or DASH playback, image generation via GetImages, and more with ingested WebRTC media.  S3 image delivery and notifications are not currently supported.   Assume that only one video producing device client can be associated with a session for the channel. If more than one client joins the session of a specific channel as a video producing device, the most recent client request takes precedence.    Additional information     Idempotent - This API is not idempotent.    Retry behavior - This is counted as a new API call.    Concurrent calls - Concurrent calls are allowed. An offer is sent once per each call.  
   */
  joinStorageSession(params: KinesisVideoWebRTCStorage.Types.JoinStorageSessionInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  Before using this API, you must call the GetSignalingChannelEndpoint API to request the WEBRTC endpoint. You then specify the endpoint and region in your JoinStorageSession API request.  Join the ongoing one way-video and/or multi-way audio WebRTC session as a video producing device for an input channel. If there’s no existing session for the channel, a new streaming session needs to be created, and the Amazon Resource Name (ARN) of the signaling channel must be provided.  Currently for the SINGLE_MASTER type, a video producing device is able to ingest both audio and video media into a stream. Only video producing devices can join the session and record media.  Both audio and video tracks are currently required for WebRTC ingestion. Current requirements:   Video track: H.264   Audio track: Opus    The resulting ingested video in the Kinesis video stream will have the following parameters: H.264 video and AAC audio. Once a master participant has negotiated a connection through WebRTC, the ingested media session will be stored in the Kinesis video stream. Multiple viewers are then able to play back real-time media through our Playback APIs. You can also use existing Kinesis Video Streams features like HLS or DASH playback, image generation via GetImages, and more with ingested WebRTC media.  S3 image delivery and notifications are not currently supported.   Assume that only one video producing device client can be associated with a session for the channel. If more than one client joins the session of a specific channel as a video producing device, the most recent client request takes precedence.    Additional information     Idempotent - This API is not idempotent.    Retry behavior - This is counted as a new API call.    Concurrent calls - Concurrent calls are allowed. An offer is sent once per each call.  
   */
  joinStorageSession(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  Join the ongoing one way-video and/or multi-way audio WebRTC session as a viewer for an input channel. If there’s no existing session for the channel, create a new streaming session and provide the Amazon Resource Name (ARN) of the signaling channel (channelArn) and client id (clientId).  Currently for SINGLE_MASTER type, a video producing device is able to ingest both audio and video media into a stream, while viewers can only ingest audio. Both a video producing device and viewers can join a session first and wait for other participants. While participants are having peer to peer conversations through WebRTC, the ingested media session will be stored into the Kinesis Video Stream. Multiple viewers are able to playback real-time media.  Customers can also use existing Kinesis Video Streams features like HLS or DASH playback, Image generation, and more with ingested WebRTC media. If there’s an existing session with the same clientId that's found in the join session request, the new request takes precedence.
   */
  joinStorageSessionAsViewer(params: KinesisVideoWebRTCStorage.Types.JoinStorageSessionAsViewerInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  Join the ongoing one way-video and/or multi-way audio WebRTC session as a viewer for an input channel. If there’s no existing session for the channel, create a new streaming session and provide the Amazon Resource Name (ARN) of the signaling channel (channelArn) and client id (clientId).  Currently for SINGLE_MASTER type, a video producing device is able to ingest both audio and video media into a stream, while viewers can only ingest audio. Both a video producing device and viewers can join a session first and wait for other participants. While participants are having peer to peer conversations through WebRTC, the ingested media session will be stored into the Kinesis Video Stream. Multiple viewers are able to playback real-time media.  Customers can also use existing Kinesis Video Streams features like HLS or DASH playback, Image generation, and more with ingested WebRTC media. If there’s an existing session with the same clientId that's found in the join session request, the new request takes precedence.
   */
  joinStorageSessionAsViewer(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
}
declare namespace KinesisVideoWebRTCStorage {
  export type ChannelArn = string;
  export type ClientId = string;
  export interface JoinStorageSessionAsViewerInput {
    /**
     *  The Amazon Resource Name (ARN) of the signaling channel. 
     */
    channelArn: ChannelArn;
    /**
     *  The unique identifier for the sender client. 
     */
    clientId: ClientId;
  }
  export interface JoinStorageSessionInput {
    /**
     *  The Amazon Resource Name (ARN) of the signaling channel. 
     */
    channelArn: ChannelArn;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-05-10"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the KinesisVideoWebRTCStorage client.
   */
  export import Types = KinesisVideoWebRTCStorage;
}
export = KinesisVideoWebRTCStorage;
