import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class KinesisVideo extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: KinesisVideo.Types.ClientConfiguration)
  config: Config & KinesisVideo.Types.ClientConfiguration;
  /**
   * Creates a new Kinesis video stream.  When you create a new stream, Kinesis Video Streams assigns it a version number. When you change the stream's metadata, Kinesis Video Streams updates the version.   CreateStream is an asynchronous operation. For information about how the service works, see How it Works.  You must have permissions for the KinesisVideo:CreateStream action.
   */
  createStream(params: KinesisVideo.Types.CreateStreamInput, callback?: (err: AWSError, data: KinesisVideo.Types.CreateStreamOutput) => void): Request<KinesisVideo.Types.CreateStreamOutput, AWSError>;
  /**
   * Creates a new Kinesis video stream.  When you create a new stream, Kinesis Video Streams assigns it a version number. When you change the stream's metadata, Kinesis Video Streams updates the version.   CreateStream is an asynchronous operation. For information about how the service works, see How it Works.  You must have permissions for the KinesisVideo:CreateStream action.
   */
  createStream(callback?: (err: AWSError, data: KinesisVideo.Types.CreateStreamOutput) => void): Request<KinesisVideo.Types.CreateStreamOutput, AWSError>;
  /**
   * Deletes a Kinesis video stream and the data contained in the stream.  This method marks the stream for deletion, and makes the data in the stream inaccessible immediately.    To ensure that you have the latest version of the stream before deleting it, you can specify the stream version. Kinesis Video Streams assigns a version to each stream. When you update a stream, Kinesis Video Streams assigns a new version number. To get the latest stream version, use the DescribeStream API.  This operation requires permission for the KinesisVideo:DeleteStream action.
   */
  deleteStream(params: KinesisVideo.Types.DeleteStreamInput, callback?: (err: AWSError, data: KinesisVideo.Types.DeleteStreamOutput) => void): Request<KinesisVideo.Types.DeleteStreamOutput, AWSError>;
  /**
   * Deletes a Kinesis video stream and the data contained in the stream.  This method marks the stream for deletion, and makes the data in the stream inaccessible immediately.    To ensure that you have the latest version of the stream before deleting it, you can specify the stream version. Kinesis Video Streams assigns a version to each stream. When you update a stream, Kinesis Video Streams assigns a new version number. To get the latest stream version, use the DescribeStream API.  This operation requires permission for the KinesisVideo:DeleteStream action.
   */
  deleteStream(callback?: (err: AWSError, data: KinesisVideo.Types.DeleteStreamOutput) => void): Request<KinesisVideo.Types.DeleteStreamOutput, AWSError>;
  /**
   * Returns the most current information about the specified stream. You must specify either the StreamName or the StreamARN. 
   */
  describeStream(params: KinesisVideo.Types.DescribeStreamInput, callback?: (err: AWSError, data: KinesisVideo.Types.DescribeStreamOutput) => void): Request<KinesisVideo.Types.DescribeStreamOutput, AWSError>;
  /**
   * Returns the most current information about the specified stream. You must specify either the StreamName or the StreamARN. 
   */
  describeStream(callback?: (err: AWSError, data: KinesisVideo.Types.DescribeStreamOutput) => void): Request<KinesisVideo.Types.DescribeStreamOutput, AWSError>;
  /**
   * Gets an endpoint for a specified stream for either reading or writing. Use this endpoint in your application to read from the specified stream (using the GetMedia or GetMediaForFragmentList operations) or write to it (using the PutMedia operation).   The returned endpoint does not have the API name appended. The client needs to add the API name to the returned endpoint.  In the request, specify the stream either by StreamName or StreamARN.
   */
  getDataEndpoint(params: KinesisVideo.Types.GetDataEndpointInput, callback?: (err: AWSError, data: KinesisVideo.Types.GetDataEndpointOutput) => void): Request<KinesisVideo.Types.GetDataEndpointOutput, AWSError>;
  /**
   * Gets an endpoint for a specified stream for either reading or writing. Use this endpoint in your application to read from the specified stream (using the GetMedia or GetMediaForFragmentList operations) or write to it (using the PutMedia operation).   The returned endpoint does not have the API name appended. The client needs to add the API name to the returned endpoint.  In the request, specify the stream either by StreamName or StreamARN.
   */
  getDataEndpoint(callback?: (err: AWSError, data: KinesisVideo.Types.GetDataEndpointOutput) => void): Request<KinesisVideo.Types.GetDataEndpointOutput, AWSError>;
  /**
   * Returns an array of StreamInfo objects. Each object describes a stream. To retrieve only streams that satisfy a specific condition, you can specify a StreamNameCondition. 
   */
  listStreams(params: KinesisVideo.Types.ListStreamsInput, callback?: (err: AWSError, data: KinesisVideo.Types.ListStreamsOutput) => void): Request<KinesisVideo.Types.ListStreamsOutput, AWSError>;
  /**
   * Returns an array of StreamInfo objects. Each object describes a stream. To retrieve only streams that satisfy a specific condition, you can specify a StreamNameCondition. 
   */
  listStreams(callback?: (err: AWSError, data: KinesisVideo.Types.ListStreamsOutput) => void): Request<KinesisVideo.Types.ListStreamsOutput, AWSError>;
  /**
   * Returns a list of tags associated with the specified stream. In the request, you must specify either the StreamName or the StreamARN. 
   */
  listTagsForStream(params: KinesisVideo.Types.ListTagsForStreamInput, callback?: (err: AWSError, data: KinesisVideo.Types.ListTagsForStreamOutput) => void): Request<KinesisVideo.Types.ListTagsForStreamOutput, AWSError>;
  /**
   * Returns a list of tags associated with the specified stream. In the request, you must specify either the StreamName or the StreamARN. 
   */
  listTagsForStream(callback?: (err: AWSError, data: KinesisVideo.Types.ListTagsForStreamOutput) => void): Request<KinesisVideo.Types.ListTagsForStreamOutput, AWSError>;
  /**
   * Adds one or more tags to a stream. A tag is a key-value pair (the value is optional) that you can define and assign to AWS resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. For more information, see Using Cost Allocation Tags in the AWS Billing and Cost Management User Guide.  You must provide either the StreamName or the StreamARN. This operation requires permission for the KinesisVideo:TagStream action. Kinesis video streams support up to 50 tags.
   */
  tagStream(params: KinesisVideo.Types.TagStreamInput, callback?: (err: AWSError, data: KinesisVideo.Types.TagStreamOutput) => void): Request<KinesisVideo.Types.TagStreamOutput, AWSError>;
  /**
   * Adds one or more tags to a stream. A tag is a key-value pair (the value is optional) that you can define and assign to AWS resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. For more information, see Using Cost Allocation Tags in the AWS Billing and Cost Management User Guide.  You must provide either the StreamName or the StreamARN. This operation requires permission for the KinesisVideo:TagStream action. Kinesis video streams support up to 50 tags.
   */
  tagStream(callback?: (err: AWSError, data: KinesisVideo.Types.TagStreamOutput) => void): Request<KinesisVideo.Types.TagStreamOutput, AWSError>;
  /**
   * Removes one or more tags from a stream. In the request, specify only a tag key or keys; don't specify the value. If you specify a tag key that does not exist, it's ignored. In the request, you must provide the StreamName or StreamARN.
   */
  untagStream(params: KinesisVideo.Types.UntagStreamInput, callback?: (err: AWSError, data: KinesisVideo.Types.UntagStreamOutput) => void): Request<KinesisVideo.Types.UntagStreamOutput, AWSError>;
  /**
   * Removes one or more tags from a stream. In the request, specify only a tag key or keys; don't specify the value. If you specify a tag key that does not exist, it's ignored. In the request, you must provide the StreamName or StreamARN.
   */
  untagStream(callback?: (err: AWSError, data: KinesisVideo.Types.UntagStreamOutput) => void): Request<KinesisVideo.Types.UntagStreamOutput, AWSError>;
  /**
   *  Increases or decreases the stream's data retention period by the value that you specify. To indicate whether you want to increase or decrease the data retention period, specify the Operation parameter in the request body. In the request, you must specify either the StreamName or the StreamARN.   The retention period that you specify replaces the current value.  This operation requires permission for the KinesisVideo:UpdateDataRetention action. Changing the data retention period affects the data in the stream as follows:   If the data retention period is increased, existing data is retained for the new retention period. For example, if the data retention period is increased from one hour to seven hours, all existing data is retained for seven hours.   If the data retention period is decreased, existing data is retained for the new retention period. For example, if the data retention period is decreased from seven hours to one hour, all existing data is retained for one hour, and any data older than one hour is deleted immediately.  
   */
  updateDataRetention(params: KinesisVideo.Types.UpdateDataRetentionInput, callback?: (err: AWSError, data: KinesisVideo.Types.UpdateDataRetentionOutput) => void): Request<KinesisVideo.Types.UpdateDataRetentionOutput, AWSError>;
  /**
   *  Increases or decreases the stream's data retention period by the value that you specify. To indicate whether you want to increase or decrease the data retention period, specify the Operation parameter in the request body. In the request, you must specify either the StreamName or the StreamARN.   The retention period that you specify replaces the current value.  This operation requires permission for the KinesisVideo:UpdateDataRetention action. Changing the data retention period affects the data in the stream as follows:   If the data retention period is increased, existing data is retained for the new retention period. For example, if the data retention period is increased from one hour to seven hours, all existing data is retained for seven hours.   If the data retention period is decreased, existing data is retained for the new retention period. For example, if the data retention period is decreased from seven hours to one hour, all existing data is retained for one hour, and any data older than one hour is deleted immediately.  
   */
  updateDataRetention(callback?: (err: AWSError, data: KinesisVideo.Types.UpdateDataRetentionOutput) => void): Request<KinesisVideo.Types.UpdateDataRetentionOutput, AWSError>;
  /**
   * Updates stream metadata, such as the device name and media type. You must provide the stream name or the Amazon Resource Name (ARN) of the stream. To make sure that you have the latest version of the stream before updating it, you can specify the stream version. Kinesis Video Streams assigns a version to each stream. When you update a stream, Kinesis Video Streams assigns a new version number. To get the latest stream version, use the DescribeStream API.   UpdateStream is an asynchronous operation, and takes time to complete.
   */
  updateStream(params: KinesisVideo.Types.UpdateStreamInput, callback?: (err: AWSError, data: KinesisVideo.Types.UpdateStreamOutput) => void): Request<KinesisVideo.Types.UpdateStreamOutput, AWSError>;
  /**
   * Updates stream metadata, such as the device name and media type. You must provide the stream name or the Amazon Resource Name (ARN) of the stream. To make sure that you have the latest version of the stream before updating it, you can specify the stream version. Kinesis Video Streams assigns a version to each stream. When you update a stream, Kinesis Video Streams assigns a new version number. To get the latest stream version, use the DescribeStream API.   UpdateStream is an asynchronous operation, and takes time to complete.
   */
  updateStream(callback?: (err: AWSError, data: KinesisVideo.Types.UpdateStreamOutput) => void): Request<KinesisVideo.Types.UpdateStreamOutput, AWSError>;
}
declare namespace KinesisVideo {
  export type APIName = "PUT_MEDIA"|"GET_MEDIA"|"LIST_FRAGMENTS"|"GET_MEDIA_FOR_FRAGMENT_LIST"|"GET_HLS_STREAMING_SESSION_URL"|string;
  export type ComparisonOperator = "BEGINS_WITH"|string;
  export interface CreateStreamInput {
    /**
     * The name of the device that is writing to the stream.   In the current implementation, Kinesis Video Streams does not use this name. 
     */
    DeviceName?: DeviceName;
    /**
     * A name for the stream that you are creating. The stream name is an identifier for the stream, and must be unique for each account and region.
     */
    StreamName: StreamName;
    /**
     * The media type of the stream. Consumers of the stream can use this information when processing the stream. For more information about media types, see Media Types. If you choose to specify the MediaType, see Naming Requirements for guidelines. To play video on the console, the media must be H.264 encoded, and you need to specify this video type in this parameter as video/h264.  This parameter is optional; the default value is null (or empty in JSON).
     */
    MediaType?: MediaType;
    /**
     * The ID of the AWS Key Management Service (AWS KMS) key that you want Kinesis Video Streams to use to encrypt stream data. If no key ID is specified, the default, Kinesis Video-managed key (aws/kinesisvideo) is used.  For more information, see DescribeKey. 
     */
    KmsKeyId?: KmsKeyId;
    /**
     * The number of hours that you want to retain the data in the stream. Kinesis Video Streams retains the data in a data store that is associated with the stream. The default value is 0, indicating that the stream does not persist data. When the DataRetentionInHours value is 0, consumers can still consume the fragments that remain in the service host buffer, which has a retention time limit of 5 minutes and a retention memory limit of 200 MB. Fragments are removed from the buffer when either limit is reached.
     */
    DataRetentionInHours?: DataRetentionInHours;
  }
  export interface CreateStreamOutput {
    /**
     * The Amazon Resource Name (ARN) of the stream.
     */
    StreamARN?: ResourceARN;
  }
  export type DataEndpoint = string;
  export type DataRetentionChangeInHours = number;
  export type DataRetentionInHours = number;
  export interface DeleteStreamInput {
    /**
     * The Amazon Resource Name (ARN) of the stream that you want to delete. 
     */
    StreamARN: ResourceARN;
    /**
     * Optional: The version of the stream that you want to delete.  Specify the version as a safeguard to ensure that your are deleting the correct stream. To get the stream version, use the DescribeStream API. If not specified, only the CreationTime is checked before deleting the stream.
     */
    CurrentVersion?: Version;
  }
  export interface DeleteStreamOutput {
  }
  export interface DescribeStreamInput {
    /**
     * The name of the stream.
     */
    StreamName?: StreamName;
    /**
     * The Amazon Resource Name (ARN) of the stream.
     */
    StreamARN?: ResourceARN;
  }
  export interface DescribeStreamOutput {
    /**
     * An object that describes the stream.
     */
    StreamInfo?: StreamInfo;
  }
  export type DeviceName = string;
  export interface GetDataEndpointInput {
    /**
     * The name of the stream that you want to get the endpoint for. You must specify either this parameter or a StreamARN in the request.
     */
    StreamName?: StreamName;
    /**
     * The Amazon Resource Name (ARN) of the stream that you want to get the endpoint for. You must specify either this parameter or a StreamName in the request. 
     */
    StreamARN?: ResourceARN;
    /**
     * The name of the API action for which to get an endpoint.
     */
    APIName: APIName;
  }
  export interface GetDataEndpointOutput {
    /**
     * The endpoint value. To read data from the stream or to write data to it, specify this endpoint in your application.
     */
    DataEndpoint?: DataEndpoint;
  }
  export type KmsKeyId = string;
  export interface ListStreamsInput {
    /**
     * The maximum number of streams to return in the response. The default is 10,000.
     */
    MaxResults?: ListStreamsInputLimit;
    /**
     * If you specify this parameter, when the result of a ListStreams operation is truncated, the call returns the NextToken in the response. To get another batch of streams, provide this token in your next request.
     */
    NextToken?: NextToken;
    /**
     * Optional: Returns only streams that satisfy a specific condition. Currently, you can specify only the prefix of a stream name as a condition. 
     */
    StreamNameCondition?: StreamNameCondition;
  }
  export type ListStreamsInputLimit = number;
  export interface ListStreamsOutput {
    /**
     * An array of StreamInfo objects.
     */
    StreamInfoList?: StreamInfoList;
    /**
     * If the response is truncated, the call returns this element with a token. To get the next batch of streams, use this token in your next request. 
     */
    NextToken?: NextToken;
  }
  export interface ListTagsForStreamInput {
    /**
     * If you specify this parameter and the result of a ListTagsForStream call is truncated, the response includes a token that you can use in the next request to fetch the next batch of tags.
     */
    NextToken?: NextToken;
    /**
     * The Amazon Resource Name (ARN) of the stream that you want to list tags for.
     */
    StreamARN?: ResourceARN;
    /**
     * The name of the stream that you want to list tags for.
     */
    StreamName?: StreamName;
  }
  export interface ListTagsForStreamOutput {
    /**
     * If you specify this parameter and the result of a ListTags call is truncated, the response includes a token that you can use in the next request to fetch the next set of tags.
     */
    NextToken?: NextToken;
    /**
     * A map of tag keys and values associated with the specified stream.
     */
    Tags?: ResourceTags;
  }
  export type MediaType = string;
  export type NextToken = string;
  export type ResourceARN = string;
  export type ResourceTags = {[key: string]: TagValue};
  export type Status = "CREATING"|"ACTIVE"|"UPDATING"|"DELETING"|string;
  export interface StreamInfo {
    /**
     * The name of the device that is associated with the stream.
     */
    DeviceName?: DeviceName;
    /**
     * The name of the stream.
     */
    StreamName?: StreamName;
    /**
     * The Amazon Resource Name (ARN) of the stream.
     */
    StreamARN?: ResourceARN;
    /**
     * The MediaType of the stream. 
     */
    MediaType?: MediaType;
    /**
     * The ID of the AWS Key Management Service (AWS KMS) key that Kinesis Video Streams uses to encrypt data on the stream.
     */
    KmsKeyId?: KmsKeyId;
    /**
     * The version of the stream.
     */
    Version?: Version;
    /**
     * The status of the stream.
     */
    Status?: Status;
    /**
     * A time stamp that indicates when the stream was created.
     */
    CreationTime?: Timestamp;
    /**
     * How long the stream retains data, in hours.
     */
    DataRetentionInHours?: DataRetentionInHours;
  }
  export type StreamInfoList = StreamInfo[];
  export type StreamName = string;
  export interface StreamNameCondition {
    /**
     * A comparison operator. Currently, you can specify only the BEGINS_WITH operator, which finds streams whose names start with a given prefix.
     */
    ComparisonOperator?: ComparisonOperator;
    /**
     * A value to compare.
     */
    ComparisonValue?: StreamName;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export interface TagStreamInput {
    /**
     * The Amazon Resource Name (ARN) of the resource that you want to add the tag or tags to.
     */
    StreamARN?: ResourceARN;
    /**
     * The name of the stream that you want to add the tag or tags to.
     */
    StreamName?: StreamName;
    /**
     * A list of tags to associate with the specified stream. Each tag is a key-value pair (the value is optional).
     */
    Tags: ResourceTags;
  }
  export interface TagStreamOutput {
  }
  export type TagValue = string;
  export type Timestamp = Date;
  export interface UntagStreamInput {
    /**
     * The Amazon Resource Name (ARN) of the stream that you want to remove tags from.
     */
    StreamARN?: ResourceARN;
    /**
     * The name of the stream that you want to remove tags from.
     */
    StreamName?: StreamName;
    /**
     * A list of the keys of the tags that you want to remove.
     */
    TagKeyList: TagKeyList;
  }
  export interface UntagStreamOutput {
  }
  export interface UpdateDataRetentionInput {
    /**
     * The name of the stream whose retention period you want to change.
     */
    StreamName?: StreamName;
    /**
     * The Amazon Resource Name (ARN) of the stream whose retention period you want to change.
     */
    StreamARN?: ResourceARN;
    /**
     * The version of the stream whose retention period you want to change. To get the version, call either the DescribeStream or the ListStreams API.
     */
    CurrentVersion: Version;
    /**
     * Indicates whether you want to increase or decrease the retention period.
     */
    Operation: UpdateDataRetentionOperation;
    /**
     * The retention period, in hours. The value you specify replaces the current value.
     */
    DataRetentionChangeInHours: DataRetentionChangeInHours;
  }
  export type UpdateDataRetentionOperation = "INCREASE_DATA_RETENTION"|"DECREASE_DATA_RETENTION"|string;
  export interface UpdateDataRetentionOutput {
  }
  export interface UpdateStreamInput {
    /**
     * The name of the stream whose metadata you want to update. The stream name is an identifier for the stream, and must be unique for each account and region.
     */
    StreamName?: StreamName;
    /**
     * The ARN of the stream whose metadata you want to update.
     */
    StreamARN?: ResourceARN;
    /**
     * The version of the stream whose metadata you want to update.
     */
    CurrentVersion: Version;
    /**
     * The name of the device that is writing to the stream.    In the current implementation, Kinesis Video Streams does not use this name.  
     */
    DeviceName?: DeviceName;
    /**
     * The stream's media type. Use MediaType to specify the type of content that the stream contains to the consumers of the stream. For more information about media types, see Media Types. If you choose to specify the MediaType, see Naming Requirements. To play video on the console, you must specify the correct video type. For example, if the video in the stream is H.264, specify video/h264 as the MediaType.
     */
    MediaType?: MediaType;
  }
  export interface UpdateStreamOutput {
  }
  export type Version = string;
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
   * Contains interfaces for use with the KinesisVideo client.
   */
  export import Types = KinesisVideo;
}
export = KinesisVideo;
