import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
import {Readable} from 'stream';
interface Blob {}
declare class KinesisVideoArchivedMedia extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: KinesisVideoArchivedMedia.Types.ClientConfiguration)
  config: Config & KinesisVideoArchivedMedia.Types.ClientConfiguration;
  /**
   * Retrieves an HTTP Live Streaming (HLS) URL for the stream. You can then open the URL in a browser or media player to view the stream contents. You must specify either the StreamName or the StreamARN. An Amazon Kinesis video stream has the following requirements for providing data through HLS:   The media type must be video/h264.   Data retention must be greater than 0.   The fragments must contain codec private data in the AVC (Advanced Video Coding) for H.264 format (MPEG-4 specification ISO/IEC 14496-15). For information about adapting stream data to a given format, see NAL Adaptation Flags.   Kinesis Video Streams HLS sessions contain fragments in the fragmented MPEG-4 form (also called fMP4 or CMAF), rather than the MPEG-2 form (also called TS chunks, which the HLS specification also supports). For more information about HLS fragment types, see the HLS specification. The following procedure shows how to use HLS with Kinesis Video Streams:   Get an endpoint using GetDataEndpoint, specifying GET_HLS_STREAMING_SESSION_URL for the APIName parameter.   Retrieve the HLS URL using GetHLSStreamingSessionURL. Kinesis Video Streams creates an HLS streaming session to be used for accessing content in a stream using the HLS protocol. GetHLSStreamingSessionURL returns an authenticated URL (that includes an encrypted session token) for the session's HLS master playlist (the root resource needed for streaming with HLS).  Don't share or store this token where an unauthorized entity could access it. The token provides access to the content of the stream. Safeguard the token with the same measures that you would use with your AWS credentials.  The media that is made available through the playlist consists only of the requested stream, time range, and format. No other media data (such as frames outside the requested window or alternate bit rates) is made available.   Provide the URL (containing the encrypted session token) for the HLS master playlist to a media player that supports the HLS protocol. Kinesis Video Streams makes the HLS media playlist, initialization fragment, and media fragments available through the master playlist URL. The initialization fragment contains the codec private data for the stream, and other data needed to set up the video decoder and renderer. The media fragments contain H.264-encoded video frames and time stamps.   The media player receives the authenticated URL and requests stream metadata and media data normally. When the media player requests data, it calls the following actions:    GetHLSMasterPlaylist: Retrieves an HLS master playlist, which contains a URL for the GetHLSMediaPlaylist action, and additional metadata for the media player, including estimated bit rate and resolution.    GetHLSMediaPlaylist: Retrieves an HLS media playlist, which contains a URL to access the MP4 initialization fragment with the GetMP4InitFragment action, and URLs to access the MP4 media fragments with the GetMP4MediaFragment actions. The HLS media playlist also contains metadata about the stream that the player needs to play it, such as whether the PlaybackMode is LIVE or ON_DEMAND. The HLS media playlist is typically static for sessions with a PlaybackType of ON_DEMAND. The HLS media playlist is continually updated with new fragments for sessions with a PlaybackType of LIVE.    GetMP4InitFragment: Retrieves the MP4 initialization fragment. The media player typically loads the initialization fragment before loading any media fragments. This fragment contains the "fytp" and "moov" MP4 atoms, and the child atoms that are needed to initialize the media player decoder. The initialization fragment does not correspond to a fragment in a Kinesis video stream. It contains only the codec private data for the stream, which the media player needs to decode video frames.    GetMP4MediaFragment: Retrieves MP4 media fragments. These fragments contain the "moof" and "mdat" MP4 atoms and their child atoms, containing the encoded fragment's video frames and their time stamps.   After the first media fragment is made available in a streaming session, any fragments that don't contain the same codec private data are excluded in the HLS media playlist. Therefore, the codec private data does not change between fragments in a session.  Data retrieved with this action is billable. See Pricing for details.      The following restrictions apply to HLS sessions:   A streaming session URL should not be shared between players. The service might throttle a session if multiple media players are sharing it. For connection limits, see Kinesis Video Streams Limits.   A Kinesis video stream can have a maximum of five active HLS streaming sessions. If a new session is created when the maximum number of sessions is already active, the oldest (earliest created) session is closed. The number of active GetMedia connections on a Kinesis video stream does not count against this limit, and the number of active HLS sessions does not count against the active GetMedia connection limit.    You can monitor the amount of data that the media player consumes by monitoring the GetMP4MediaFragment.OutgoingBytes Amazon CloudWatch metric. For information about using CloudWatch to monitor Kinesis Video Streams, see Monitoring Kinesis Video Streams. For pricing information, see Amazon Kinesis Video Streams Pricing and AWS Pricing. Charges for both HLS sessions and outgoing AWS data apply. For more information about HLS, see HTTP Live Streaming on the Apple Developer site.
   */
  getHLSStreamingSessionURL(params: KinesisVideoArchivedMedia.Types.GetHLSStreamingSessionURLInput, callback?: (err: AWSError, data: KinesisVideoArchivedMedia.Types.GetHLSStreamingSessionURLOutput) => void): Request<KinesisVideoArchivedMedia.Types.GetHLSStreamingSessionURLOutput, AWSError>;
  /**
   * Retrieves an HTTP Live Streaming (HLS) URL for the stream. You can then open the URL in a browser or media player to view the stream contents. You must specify either the StreamName or the StreamARN. An Amazon Kinesis video stream has the following requirements for providing data through HLS:   The media type must be video/h264.   Data retention must be greater than 0.   The fragments must contain codec private data in the AVC (Advanced Video Coding) for H.264 format (MPEG-4 specification ISO/IEC 14496-15). For information about adapting stream data to a given format, see NAL Adaptation Flags.   Kinesis Video Streams HLS sessions contain fragments in the fragmented MPEG-4 form (also called fMP4 or CMAF), rather than the MPEG-2 form (also called TS chunks, which the HLS specification also supports). For more information about HLS fragment types, see the HLS specification. The following procedure shows how to use HLS with Kinesis Video Streams:   Get an endpoint using GetDataEndpoint, specifying GET_HLS_STREAMING_SESSION_URL for the APIName parameter.   Retrieve the HLS URL using GetHLSStreamingSessionURL. Kinesis Video Streams creates an HLS streaming session to be used for accessing content in a stream using the HLS protocol. GetHLSStreamingSessionURL returns an authenticated URL (that includes an encrypted session token) for the session's HLS master playlist (the root resource needed for streaming with HLS).  Don't share or store this token where an unauthorized entity could access it. The token provides access to the content of the stream. Safeguard the token with the same measures that you would use with your AWS credentials.  The media that is made available through the playlist consists only of the requested stream, time range, and format. No other media data (such as frames outside the requested window or alternate bit rates) is made available.   Provide the URL (containing the encrypted session token) for the HLS master playlist to a media player that supports the HLS protocol. Kinesis Video Streams makes the HLS media playlist, initialization fragment, and media fragments available through the master playlist URL. The initialization fragment contains the codec private data for the stream, and other data needed to set up the video decoder and renderer. The media fragments contain H.264-encoded video frames and time stamps.   The media player receives the authenticated URL and requests stream metadata and media data normally. When the media player requests data, it calls the following actions:    GetHLSMasterPlaylist: Retrieves an HLS master playlist, which contains a URL for the GetHLSMediaPlaylist action, and additional metadata for the media player, including estimated bit rate and resolution.    GetHLSMediaPlaylist: Retrieves an HLS media playlist, which contains a URL to access the MP4 initialization fragment with the GetMP4InitFragment action, and URLs to access the MP4 media fragments with the GetMP4MediaFragment actions. The HLS media playlist also contains metadata about the stream that the player needs to play it, such as whether the PlaybackMode is LIVE or ON_DEMAND. The HLS media playlist is typically static for sessions with a PlaybackType of ON_DEMAND. The HLS media playlist is continually updated with new fragments for sessions with a PlaybackType of LIVE.    GetMP4InitFragment: Retrieves the MP4 initialization fragment. The media player typically loads the initialization fragment before loading any media fragments. This fragment contains the "fytp" and "moov" MP4 atoms, and the child atoms that are needed to initialize the media player decoder. The initialization fragment does not correspond to a fragment in a Kinesis video stream. It contains only the codec private data for the stream, which the media player needs to decode video frames.    GetMP4MediaFragment: Retrieves MP4 media fragments. These fragments contain the "moof" and "mdat" MP4 atoms and their child atoms, containing the encoded fragment's video frames and their time stamps.   After the first media fragment is made available in a streaming session, any fragments that don't contain the same codec private data are excluded in the HLS media playlist. Therefore, the codec private data does not change between fragments in a session.  Data retrieved with this action is billable. See Pricing for details.      The following restrictions apply to HLS sessions:   A streaming session URL should not be shared between players. The service might throttle a session if multiple media players are sharing it. For connection limits, see Kinesis Video Streams Limits.   A Kinesis video stream can have a maximum of five active HLS streaming sessions. If a new session is created when the maximum number of sessions is already active, the oldest (earliest created) session is closed. The number of active GetMedia connections on a Kinesis video stream does not count against this limit, and the number of active HLS sessions does not count against the active GetMedia connection limit.    You can monitor the amount of data that the media player consumes by monitoring the GetMP4MediaFragment.OutgoingBytes Amazon CloudWatch metric. For information about using CloudWatch to monitor Kinesis Video Streams, see Monitoring Kinesis Video Streams. For pricing information, see Amazon Kinesis Video Streams Pricing and AWS Pricing. Charges for both HLS sessions and outgoing AWS data apply. For more information about HLS, see HTTP Live Streaming on the Apple Developer site.
   */
  getHLSStreamingSessionURL(callback?: (err: AWSError, data: KinesisVideoArchivedMedia.Types.GetHLSStreamingSessionURLOutput) => void): Request<KinesisVideoArchivedMedia.Types.GetHLSStreamingSessionURLOutput, AWSError>;
  /**
   * Gets media for a list of fragments (specified by fragment number) from the archived data in an Amazon Kinesis video stream. The following limits apply when using the GetMediaForFragmentList API:   A client can call GetMediaForFragmentList up to five times per second per stream.    Kinesis Video Streams sends media data at a rate of up to 25 megabytes per second (or 200 megabits per second) during a GetMediaForFragmentList session.   
   */
  getMediaForFragmentList(params: KinesisVideoArchivedMedia.Types.GetMediaForFragmentListInput, callback?: (err: AWSError, data: KinesisVideoArchivedMedia.Types.GetMediaForFragmentListOutput) => void): Request<KinesisVideoArchivedMedia.Types.GetMediaForFragmentListOutput, AWSError>;
  /**
   * Gets media for a list of fragments (specified by fragment number) from the archived data in an Amazon Kinesis video stream. The following limits apply when using the GetMediaForFragmentList API:   A client can call GetMediaForFragmentList up to five times per second per stream.    Kinesis Video Streams sends media data at a rate of up to 25 megabytes per second (or 200 megabits per second) during a GetMediaForFragmentList session.   
   */
  getMediaForFragmentList(callback?: (err: AWSError, data: KinesisVideoArchivedMedia.Types.GetMediaForFragmentListOutput) => void): Request<KinesisVideoArchivedMedia.Types.GetMediaForFragmentListOutput, AWSError>;
  /**
   * Returns a list of Fragment objects from the specified stream and start location within the archived data.
   */
  listFragments(params: KinesisVideoArchivedMedia.Types.ListFragmentsInput, callback?: (err: AWSError, data: KinesisVideoArchivedMedia.Types.ListFragmentsOutput) => void): Request<KinesisVideoArchivedMedia.Types.ListFragmentsOutput, AWSError>;
  /**
   * Returns a list of Fragment objects from the specified stream and start location within the archived data.
   */
  listFragments(callback?: (err: AWSError, data: KinesisVideoArchivedMedia.Types.ListFragmentsOutput) => void): Request<KinesisVideoArchivedMedia.Types.ListFragmentsOutput, AWSError>;
}
declare namespace KinesisVideoArchivedMedia {
  export type ContentType = string;
  export type DiscontinuityMode = "ALWAYS"|"NEVER"|string;
  export type ErrorMessage = string;
  export type Expires = number;
  export interface Fragment {
    /**
     * The index value of the fragment.
     */
    FragmentNumber?: String;
    /**
     * The total fragment size, including information about the fragment and contained media data.
     */
    FragmentSizeInBytes?: Long;
    /**
     * The time stamp from the producer corresponding to the fragment.
     */
    ProducerTimestamp?: Timestamp;
    /**
     * The time stamp from the AWS server corresponding to the fragment.
     */
    ServerTimestamp?: Timestamp;
    /**
     * The playback duration or other time value associated with the fragment.
     */
    FragmentLengthInMilliseconds?: Long;
  }
  export type FragmentList = Fragment[];
  export type FragmentNumberList = FragmentNumberString[];
  export type FragmentNumberString = string;
  export interface FragmentSelector {
    /**
     * The origin of the time stamps to use (Server or Producer).
     */
    FragmentSelectorType: FragmentSelectorType;
    /**
     * The range of time stamps to return.
     */
    TimestampRange: TimestampRange;
  }
  export type FragmentSelectorType = "PRODUCER_TIMESTAMP"|"SERVER_TIMESTAMP"|string;
  export interface GetHLSStreamingSessionURLInput {
    /**
     * The name of the stream for which to retrieve the HLS master playlist URL. You must specify either the StreamName or the StreamARN.
     */
    StreamName?: StreamName;
    /**
     * The Amazon Resource Name (ARN) of the stream for which to retrieve the HLS master playlist URL. You must specify either the StreamName or the StreamARN.
     */
    StreamARN?: ResourceARN;
    /**
     * Whether to retrieve live or archived, on-demand data. Features of the two types of session include the following:     LIVE : For sessions of this type, the HLS media playlist is continually updated with the latest fragments as they become available. We recommend that the media player retrieve a new playlist on a one-second interval. When this type of session is played in a media player, the user interface typically displays a "live" notification, with no scrubber control for choosing the position in the playback window to display.  In LIVE mode, the newest available fragments are included in an HLS media playlist, even if there is a gap between fragments (that is, if a fragment is missing). A gap like this might cause a media player to halt or cause a jump in playback. In this mode, fragments are not added to the HLS media playlist if they are older than the newest fragment in the playlist. If the missing fragment becomes available after a subsequent fragment is added to the playlist, the older fragment is not added, and the gap is not filled.      ON_DEMAND : For sessions of this type, the HLS media playlist contains all the fragments for the session, up to the number that is specified in MaxMediaPlaylistFragmentResults. The playlist must be retrieved only once for each session. When this type of session is played in a media player, the user interface typically displays a scrubber control for choosing the position in the playback window to display.   In both playback modes, if FragmentSelectorType is PRODUCER_TIMESTAMP, and if there are multiple fragments with the same start time stamp, the fragment that has the larger fragment number (that is, the newer fragment) is included in the HLS media playlist. The other fragments are not included. Fragments that have different time stamps but have overlapping durations are still included in the HLS media playlist. This can lead to unexpected behavior in the media player. The default is LIVE.
     */
    PlaybackMode?: PlaybackMode;
    /**
     * The time range of the requested fragment, and the source of the time stamps. This parameter is required if PlaybackMode is ON_DEMAND. This parameter is optional if PlaybackMode is LIVE. If PlaybackMode is LIVE, the FragmentSelectorType can be set, but the TimestampRange should not be set. If PlaybackMode is ON_DEMAND, both FragmentSelectorType and TimestampRange must be set.
     */
    HLSFragmentSelector?: HLSFragmentSelector;
    /**
     * Specifies when flags marking discontinuities between fragments will be added to the media playlists. The default is ALWAYS when HLSFragmentSelector is SERVER_TIMESTAMP, and NEVER when it is PRODUCER_TIMESTAMP. Media players typically build a timeline of media content to play, based on the time stamps of each fragment. This means that if there is any overlap between fragments (as is typical if HLSFragmentSelector is SERVER_TIMESTAMP), the media player timeline has small gaps between fragments in some places, and overwrites frames in other places. When there are discontinuity flags between fragments, the media player is expected to reset the timeline, resulting in the fragment being played immediately after the previous fragment. We recommend that you always have discontinuity flags between fragments if the fragment time stamps are not accurate or if fragments might be missing. You should not place discontinuity flags between fragments for the player timeline to accurately map to the producer time stamps.
     */
    DiscontinuityMode?: DiscontinuityMode;
    /**
     * The time in seconds until the requested session expires. This value can be between 300 (5 minutes) and 43200 (12 hours). When a session expires, no new calls to GetHLSMasterPlaylist, GetHLSMediaPlaylist, GetMP4InitFragment, or GetMP4MediaFragment can be made for that session. The default is 300 (5 minutes).
     */
    Expires?: Expires;
    /**
     * The maximum number of fragments that are returned in the HLS media playlists. When the PlaybackMode is LIVE, the most recent fragments are returned up to this value. When the PlaybackMode is ON_DEMAND, the oldest fragments are returned, up to this maximum number. When there are a higher number of fragments available in a live HLS media playlist, video players often buffer content before starting playback. Increasing the buffer size increases the playback latency, but it decreases the likelihood that rebuffering will occur during playback. We recommend that a live HLS media playlist have a minimum of 3 fragments and a maximum of 10 fragments. The default is 5 fragments if PlaybackMode is LIVE, and 1,000 if PlaybackMode is ON_DEMAND.  The maximum value of 1,000 fragments corresponds to more than 16 minutes of video on streams with 1-second fragments, and more than 2 1/2 hours of video on streams with 10-second fragments.
     */
    MaxMediaPlaylistFragmentResults?: PageLimit;
  }
  export interface GetHLSStreamingSessionURLOutput {
    /**
     * The URL (containing the session token) that a media player can use to retrieve the HLS master playlist.
     */
    HLSStreamingSessionURL?: HLSStreamingSessionURL;
  }
  export interface GetMediaForFragmentListInput {
    /**
     * The name of the stream from which to retrieve fragment media.
     */
    StreamName: StreamName;
    /**
     * A list of the numbers of fragments for which to retrieve media. You retrieve these values with ListFragments.
     */
    Fragments: FragmentNumberList;
  }
  export interface GetMediaForFragmentListOutput {
    /**
     * The content type of the requested media.
     */
    ContentType?: ContentType;
    /**
     * The payload that Kinesis Video Streams returns is a sequence of chunks from the specified stream. For information about the chunks, see PutMedia. The chunks that Kinesis Video Streams returns in the GetMediaForFragmentList call also include the following additional Matroska (MKV) tags:    AWS_KINESISVIDEO_FRAGMENT_NUMBER - Fragment number returned in the chunk.   AWS_KINESISVIDEO_SERVER_SIDE_TIMESTAMP - Server-side time stamp of the fragment.   AWS_KINESISVIDEO_PRODUCER_SIDE_TIMESTAMP - Producer-side time stamp of the fragment.   The following tags will be included if an exception occurs:   AWS_KINESISVIDEO_FRAGMENT_NUMBER - The number of the fragment that threw the exception   AWS_KINESISVIDEO_EXCEPTION_ERROR_CODE - The integer code of the exception   AWS_KINESISVIDEO_EXCEPTION_MESSAGE - A text description of the exception  
     */
    Payload?: Payload;
  }
  export interface HLSFragmentSelector {
    /**
     * The source of the time stamps for the requested media. When FragmentSelectorType is set to PRODUCER_TIMESTAMP and GetHLSStreamingSessionURLInput$PlaybackMode is ON_DEMAND, the first fragment ingested with a producer time stamp within the specified FragmentSelector$TimestampRange is included in the media playlist. In addition, the fragments with producer time stamps within the TimestampRange ingested immediately following the first fragment (up to the GetHLSStreamingSessionURLInput$MaxMediaPlaylistFragmentResults value) are included.  Fragments that have duplicate producer time stamps are deduplicated. This means that if producers are producing a stream of fragments with producer time stamps that are approximately equal to the true clock time, the HLS media playlists will contain all of the fragments within the requested time stamp range. If some fragments are ingested within the same time range and very different points in time, only the oldest ingested collection of fragments are returned. When FragmentSelectorType is set to PRODUCER_TIMESTAMP and GetHLSStreamingSessionURLInput$PlaybackMode is LIVE, the producer time stamps are used in the MP4 fragments and for deduplication. But the most recently ingested fragments based on server time stamps are included in the HLS media playlist. This means that even if fragments ingested in the past have producer time stamps with values now, they are not included in the HLS media playlist. The default is SERVER_TIMESTAMP.
     */
    FragmentSelectorType?: HLSFragmentSelectorType;
    /**
     * The start and end of the time stamp range for the requested media. This value should not be present if PlaybackType is LIVE.
     */
    TimestampRange?: HLSTimestampRange;
  }
  export type HLSFragmentSelectorType = "PRODUCER_TIMESTAMP"|"SERVER_TIMESTAMP"|string;
  export type HLSStreamingSessionURL = string;
  export interface HLSTimestampRange {
    /**
     * The start of the time stamp range for the requested media. If the HLSTimestampRange value is specified, the StartTimestamp value is required.  This value is inclusive. Fragments that start before the StartTimestamp and continue past it are included in the session. If FragmentSelectorType is SERVER_TIMESTAMP, the StartTimestamp must be later than the stream head. 
     */
    StartTimestamp?: Timestamp;
    /**
     * The end of the time stamp range for the requested media. This value must be within 3 hours of the specified StartTimestamp, and it must be later than the StartTimestamp value. If FragmentSelectorType for the request is SERVER_TIMESTAMP, this value must be in the past. If the HLSTimestampRange value is specified, the EndTimestamp value is required.  This value is inclusive. The EndTimestamp is compared to the (starting) time stamp of the fragment. Fragments that start before the EndTimestamp value and continue past it are included in the session. 
     */
    EndTimestamp?: Timestamp;
  }
  export interface ListFragmentsInput {
    /**
     * The name of the stream from which to retrieve a fragment list.
     */
    StreamName: StreamName;
    /**
     * The total number of fragments to return. If the total number of fragments available is more than the value specified in max-results, then a ListFragmentsOutput$NextToken is provided in the output that you can use to resume pagination.
     */
    MaxResults?: PageLimit;
    /**
     * A token to specify where to start paginating. This is the ListFragmentsOutput$NextToken from a previously truncated response.
     */
    NextToken?: String;
    /**
     * Describes the time stamp range and time stamp origin for the range of fragments to return.
     */
    FragmentSelector?: FragmentSelector;
  }
  export interface ListFragmentsOutput {
    /**
     * A list of fragment numbers that correspond to the time stamp range provided.
     */
    Fragments?: FragmentList;
    /**
     * If the returned list is truncated, the operation returns this token to use to retrieve the next page of results. This value is null when there are no more results to return.
     */
    NextToken?: String;
  }
  export type Long = number;
  export type PageLimit = number;
  export type Payload = Buffer|Uint8Array|Blob|string|Readable;
  export type PlaybackMode = "LIVE"|"ON_DEMAND"|string;
  export type ResourceARN = string;
  export type StreamName = string;
  export type String = string;
  export type Timestamp = Date;
  export interface TimestampRange {
    /**
     * The starting time stamp in the range of time stamps for which to return fragments.
     */
    StartTimestamp: Timestamp;
    /**
     * The ending time stamp in the range of time stamps for which to return fragments.
     */
    EndTimestamp: Timestamp;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-09-30"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the KinesisVideoArchivedMedia client.
   */
  export import Types = KinesisVideoArchivedMedia;
}
export = KinesisVideoArchivedMedia;
