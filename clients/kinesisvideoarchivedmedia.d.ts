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
   * Gets media for a list of fragments (specified by fragment number) from the archived data in a Kinesis video stream.  This operation is only available for the AWS SDK for Java. It is not supported in AWS SDKs for other languages.  The following limits apply when using the GetMediaForFragmentList API:   A client can call GetMediaForFragmentList up to five times per second per stream.    Kinesis Video Streams sends media data at a rate of up to 25 megabytes per second (or 200 megabits per second) during a GetMediaForFragmentList session.   
   */
  getMediaForFragmentList(params: KinesisVideoArchivedMedia.Types.GetMediaForFragmentListInput, callback?: (err: AWSError, data: KinesisVideoArchivedMedia.Types.GetMediaForFragmentListOutput) => void): Request<KinesisVideoArchivedMedia.Types.GetMediaForFragmentListOutput, AWSError>;
  /**
   * Gets media for a list of fragments (specified by fragment number) from the archived data in a Kinesis video stream.  This operation is only available for the AWS SDK for Java. It is not supported in AWS SDKs for other languages.  The following limits apply when using the GetMediaForFragmentList API:   A client can call GetMediaForFragmentList up to five times per second per stream.    Kinesis Video Streams sends media data at a rate of up to 25 megabytes per second (or 200 megabits per second) during a GetMediaForFragmentList session.   
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
  export type ErrorMessage = string;
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
