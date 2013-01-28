/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You
 * may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 */


AWS = {};

/**
 * Constructs a service interface and a low-level {Client}.  Use the +client+
 * property to make API calls.  Each API operation is exposed as a function on
 * the +client+.
 *
 * === Sending a Request Using ElasticTranscoder
 *
 *   svc = new AWS.ElasticTranscoder();
 *   svc.client.OPERATION_NAME(params, function (err, data) {
 *     if (err) {
 *       console.log(err); // an error occurred
 *     } else {
 *       console.log(data); // successful response
 *     }
 *   });
 *
 * @!method constructor(options)
 *   Constructs a service interface.  The returned service will have a {client}
 *   property that provides access to the API operations.
 *   @option (see AWS.ElasticTranscoder.Client.constructor)
 *
 * @!attribute client
 *   @return [AWS.ElasticTranscoder.Client] A client that provides one method for each
 *     API operation.
 *
 * @see AWS.ElasticTranscoder.Client
 *
 */
AWS.ElasticTranscoder = inherit({})

/**
 * The low-level ElasticTranscoder client class.  This class provides one function
 * for each API operation on the service.
 *
 * @!method cancelJob(params, callback)
 *   Calls the CancelJob API operation.
 *   @param params [Object]
 *     * +Id+ - (*required*, <tt>String</tt>) The identifier of the job
 *       that you want to delete.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createJob(params, callback)
 *   Calls the CreateJob API operation.
 *   @param params [Object]
 *     * +PipelineId+ - (*required*, <tt>String</tt>) The Id of the
 *       pipeline that you want Elastic Transcoder to use for
 *       transcoding.
 *     * +Input+ - (*required*, <tt>Object</tt>) A section of the request
 *       body that provides information about the file that is being
 *       transcoded.
 *       * +Key+ - (<tt>String</tt>) The name of the file to transcode.
 *       * +FrameRate+ - (<tt>String</tt>) The frame rate of the input
 *         file.
 *       * +Resolution+ - (<tt>String</tt>) The resolution, in pixels, of
 *         the input file.
 *       * +AspectRatio+ - (<tt>String</tt>) The aspect ratio of the
 *         input file.
 *       * +Interlaced+ - (<tt>String</tt>) Whether the input file is
 *         interlaced.
 *       * +Container+ - (<tt>String</tt>) The container type for the
 *         input file.
 *     * +Output+ - (*required*, <tt>Object</tt>) A section of the
 *       request body that provides information about the transcoded
 *       (target) file.
 *       * +Key+ - (<tt>String</tt>) The name to assign to the transcoded
 *         file.
 *       * +ThumbnailPattern+ - (<tt>String</tt>) Whether you want &ET;
 *         to create thumbnails for your videos and, if so, how you want
 *         &ET; to name the files.
 *       * +Rotate+ - (<tt>String</tt>) The number of degrees clockwise
 *         by which you want &ET; to rotate the output relative to the
 *         input.
 *       * +PresetId+ - (<tt>String</tt>) The Id of the preset to use for
 *         this job.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Job+ - (<tt>Object</tt>) A section of the response
 *         body that provides information about the job that is created.
 *         * +Id+ - (<tt>String</tt>) The identifier that &ET; assigned to
 *           the job.
 *         * +PipelineId+ - (<tt>String</tt>) The Id of the pipeline that
 *           you want &ET; to use for transcoding.
 *         * +Input+ - (<tt>Object</tt>) A section of the request or
 *           response body that provides information about the file that is
 *           being transcoded.
 *           * +Key+ - (<tt>String</tt>) The name of the file to transcode.
 *           * +FrameRate+ - (<tt>String</tt>) The frame rate of the input
 *             file.
 *           * +Resolution+ - (<tt>String</tt>) The resolution, in pixels,
 *             of the input file.
 *           * +AspectRatio+ - (<tt>String</tt>) The aspect ratio of the
 *             input file.
 *           * +Interlaced+ - (<tt>String</tt>) Whether the input file is
 *             interlaced.
 *           * +Container+ - (<tt>String</tt>) The container type for the
 *             input file.
 *         * +Output+ - (<tt>Object</tt>) A section of the request or
 *           response body that provides information about the transcoded
 *           (target) file.
 *           * +Key+ - (<tt>String</tt>) The name to assign to the
 *             transcoded file.
 *           * +ThumbnailPattern+ - (<tt>String</tt>) Whether you want &ET;
 *             to create thumbnails for your videos and, if so, how you
 *             want &ET; to name the files.
 *           * +Rotate+ - (<tt>String</tt>) The number of degrees clockwise
 *             by which you want &ET; to rotate the output relative to the
 *             input.
 *           * +PresetId+ - (<tt>String</tt>) The Id of the preset to use
 *             for this job.
 *           * +Status+ - (<tt>String</tt>) Status of the job.
 *           * +StatusDetail+ - (<tt>String</tt>) Information that further
 *             explains Status.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createPipeline(params, callback)
 *   Calls the CreatePipeline API operation.
 *   @param params [Object]
 *     * +Name+ - (*required*, <tt>String</tt>) The name of the pipeline.
 *     * +InputBucket+ - (*required*, <tt>String</tt>) The &S3; bucket in
 *       which you saved the media files that you want to transcode.
 *     * +OutputBucket+ - (*required*, <tt>String</tt>) The &S3; bucket
 *       in which you want &ET; to save the transcoded files.
 *     * +Role+ - (*required*, <tt>String</tt>) The IAM Amazon Resource
 *       Name (ARN) for the role that you want &ET; to use to create the
 *       pipeline.
 *     * +Notifications+ - (*required*, <tt>Object</tt>) The &SNSlong;
 *       (&SNS;) topic that you want to notify to report job status.
 *       * +Progressing+ - (<tt>String</tt>) The &SNSlong; (&SNS;) topic
 *         that you want to notify when &ET; has started to process the
 *         job.
 *       * +Completed+ - (<tt>String</tt>) The &SNS; topic that you want
 *         to notify when &ET; has finished processing the job.
 *       * +Warning+ - (<tt>String</tt>) The &SNS; topic that you want to
 *         notify when &ET; encounters a warning condition.
 *       * +Error+ - (<tt>String</tt>) The &SNS; topic that you want to
 *         notify when &ET; encounters an error condition.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Pipeline+ - (<tt>Object</tt>) A section of the
 *         response body that provides information about the pipeline that
 *         is created.
 *         * +Id+ - (<tt>String</tt>) The identifier for the pipeline.
 *         * +Name+ - (<tt>String</tt>) The name of the pipeline.
 *         * +Status+ - (<tt>String</tt>) The current status of the
 *           pipeline.
 *         * +InputBucket+ - (<tt>String</tt>) The &S3; bucket in which you
 *           saved the media files that you want to transcode.
 *         * +OutputBucket+ - (<tt>String</tt>) The &S3; bucket in which
 *           you want &ET; to save the transcoded files.
 *         * +Role+ - (<tt>String</tt>) The IAM Amazon Resource Name (ARN)
 *           for the role that you want &ET; to use to create the pipeline.
 *         * +Notifications+ - (<tt>Object</tt>) The &SNSlong; (&SNS;)
 *           topic that you want to notify to report job status.
 *           * +Progressing+ - (<tt>String</tt>) The &SNSlong; (&SNS;)
 *             topic that you want to notify when &ET; has started to
 *             process the job.
 *           * +Completed+ - (<tt>String</tt>) The &SNS; topic that you
 *             want to notify when &ET; has finished processing the job.
 *           * +Warning+ - (<tt>String</tt>) The &SNS; topic that you want
 *             to notify when &ET; encounters a warning condition.
 *           * +Error+ - (<tt>String</tt>) The &SNS; topic that you want to
 *             notify when &ET; encounters an error condition.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createPreset(params, callback)
 *   Calls the CreatePreset API operation.
 *   @param params [Object]
 *     * +Name+ - (*required*, <tt>String</tt>) The name of the preset.
 *     * +Description+ - (<tt>String</tt>) A description of the preset.
 *     * +Container+ - (*required*, <tt>String</tt>) The container type
 *       for the output file.
 *     * +Video+ - (*required*, <tt>Object</tt>) A section of the request
 *       body that specifies the video parameters.
 *       * +Codec+ - (<tt>String</tt>) The video codec for the output
 *         file.
 *       * +CodecOptions+ - (<tt>Object<String></tt>) Profile The H.264
 *         profile that you want to use for the output file.
 *       * +KeyframesMaxDist+ - (<tt>String</tt>) The maximum number of
 *         frames between key frames.
 *       * +FixedGOP+ - (<tt>String</tt>) Whether to use a fixed value
 *         for FixedGOP.
 *       * +BitRate+ - (<tt>String</tt>) The bit rate of the video stream
 *         in the output file, in kilobits/second.
 *       * +FrameRate+ - (<tt>String</tt>) The frames per second for the
 *         video stream in the output file.
 *       * +Resolution+ - (<tt>String</tt>) The width and height of the
 *         video in the output file, in pixels.
 *       * +AspectRatio+ - (<tt>String</tt>) The display aspect ratio of
 *         the video in the output file.
 *     * +Audio+ - (*required*, <tt>Object</tt>) A section of the request
 *       body that specifies the audio parameters.
 *       * +Codec+ - (<tt>String</tt>) The audio codec for the output
 *         file.
 *       * +SampleRate+ - (<tt>String</tt>) The sample rate of the audio
 *         stream in the output file, in Hertz.
 *       * +BitRate+ - (<tt>String</tt>) The bit rate of the audio stream
 *         in the output file, in kilobits/second.
 *       * +Channels+ - (<tt>String</tt>) The number of audio channels in
 *         the output file.
 *     * +Thumbnails+ - (*required*, <tt>Object</tt>) A section of the
 *       request body that specifies the thumbnail parameters, if any.
 *       * +Format+ - (<tt>String</tt>) The format of thumbnails, if any.
 *       * +Interval+ - (<tt>String</tt>) The number of seconds between
 *         thumbnails.
 *       * +Resolution+ - (<tt>String</tt>) The width and height of
 *         thumbnail files in pixels.
 *       * +AspectRatio+ - (<tt>String</tt>) The aspect ratio of
 *         thumbnails.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Preset+ - (<tt>Object</tt>) A section of the
 *         response body that provides information about the preset that is
 *         created.
 *         * +Id+ - (<tt>String</tt>) Identifier for the new preset.
 *         * +Name+ - (<tt>String</tt>) The name of the preset.
 *         * +Description+ - (<tt>String</tt>) A description of the preset.
 *         * +Container+ - (<tt>String</tt>) The container type for the
 *           output file.
 *         * +Audio+ - (<tt>Object</tt>) A section of the response body
 *           that provides information about the audio preset values.
 *           * +Codec+ - (<tt>String</tt>) The audio codec for the output
 *             file.
 *           * +SampleRate+ - (<tt>String</tt>) The sample rate of the
 *             audio stream in the output file, in Hertz.
 *           * +BitRate+ - (<tt>String</tt>) The bit rate of the audio
 *             stream in the output file, in kilobits/second.
 *           * +Channels+ - (<tt>String</tt>) The number of audio channels
 *             in the output file.
 *         * +Video+ - (<tt>Object</tt>) A section of the response body
 *           that provides information about the video preset values.
 *           * +Codec+ - (<tt>String</tt>) The video codec for the output
 *             file.
 *           * +CodecOptions+ - (<tt>Object<String></tt>) Profile The H.264
 *             profile that you want to use for the output file.
 *           * +KeyframesMaxDist+ - (<tt>String</tt>) The maximum number of
 *             frames between key frames.
 *           * +FixedGOP+ - (<tt>String</tt>) Whether to use a fixed value
 *             for FixedGOP.
 *           * +BitRate+ - (<tt>String</tt>) The bit rate of the video
 *             stream in the output file, in kilobits/second.
 *           * +FrameRate+ - (<tt>String</tt>) The frames per second for
 *             the video stream in the output file.
 *           * +Resolution+ - (<tt>String</tt>) The width and height of the
 *             video in the output file, in pixels.
 *           * +AspectRatio+ - (<tt>String</tt>) The display aspect ratio
 *             of the video in the output file.
 *         * +Thumbnails+ - (<tt>Object</tt>) A section of the response
 *           body that provides information about the thumbnail preset
 *           values, if any.
 *           * +Format+ - (<tt>String</tt>) The format of thumbnails, if
 *             any.
 *           * +Interval+ - (<tt>String</tt>) The number of seconds between
 *             thumbnails.
 *           * +Resolution+ - (<tt>String</tt>) The width and height of
 *             thumbnail files in pixels.
 *           * +AspectRatio+ - (<tt>String</tt>) The aspect ratio of
 *             thumbnails.
 *         * +Type+ - (<tt>String</tt>) Whether the preset is a default
 *           preset provided by Elastic Transcoder (System) or a preset
 *           that you have defined (Custom).
 *       * +Warning+ - (<tt>String</tt>) If the preset settings don't
 *         comply with the standards for the video codec but &ET; created
 *         the preset, this message explains the reason the preset settings
 *         don't meet the standard.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deletePipeline(params, callback)
 *   Calls the DeletePipeline API operation.
 *   @param params [Object]
 *     * +Id+ - (*required*, <tt>String</tt>) The identifier of the
 *       pipeline that you want to delete.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deletePreset(params, callback)
 *   Calls the DeletePreset API operation.
 *   @param params [Object]
 *     * +Id+ - (*required*, <tt>String</tt>) The identifier of the
 *       preset for which you want to get detailed information.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listJobsByPipeline(params, callback)
 *   Calls the ListJobsByPipeline API operation.
 *   @param params [Object]
 *     * +PipelineId+ - (*required*, <tt>String</tt>) The ID of the
 *       pipeline for which you want to get job information.
 *     * +Ascending+ - (<tt>String</tt>) To list jobs in chronological
 *       order by the date and time that they were submitted, enter true.
 *     * +PageToken+ - (<tt>String</tt>) When &ET; returns more than one
 *       page of results, use pageToken in subsequent GET requests to get
 *       each successive page of results.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Jobs+ - (<tt>Array<Object></tt>) An array of Job
 *         objects that are in the specified pipeline.
 *         * +Id+ - (<tt>String</tt>) The identifier that &ET; assigned to
 *           the job.
 *         * +PipelineId+ - (<tt>String</tt>) The Id of the pipeline that
 *           you want &ET; to use for transcoding.
 *         * +Input+ - (<tt>Object</tt>) A section of the request or
 *           response body that provides information about the file that is
 *           being transcoded.
 *           * +Key+ - (<tt>String</tt>) The name of the file to transcode.
 *           * +FrameRate+ - (<tt>String</tt>) The frame rate of the input
 *             file.
 *           * +Resolution+ - (<tt>String</tt>) The resolution, in pixels,
 *             of the input file.
 *           * +AspectRatio+ - (<tt>String</tt>) The aspect ratio of the
 *             input file.
 *           * +Interlaced+ - (<tt>String</tt>) Whether the input file is
 *             interlaced.
 *           * +Container+ - (<tt>String</tt>) The container type for the
 *             input file.
 *         * +Output+ - (<tt>Object</tt>) A section of the request or
 *           response body that provides information about the transcoded
 *           (target) file.
 *           * +Key+ - (<tt>String</tt>) The name to assign to the
 *             transcoded file.
 *           * +ThumbnailPattern+ - (<tt>String</tt>) Whether you want &ET;
 *             to create thumbnails for your videos and, if so, how you
 *             want &ET; to name the files.
 *           * +Rotate+ - (<tt>String</tt>) The number of degrees clockwise
 *             by which you want &ET; to rotate the output relative to the
 *             input.
 *           * +PresetId+ - (<tt>String</tt>) The Id of the preset to use
 *             for this job.
 *           * +Status+ - (<tt>String</tt>) Status of the job.
 *           * +StatusDetail+ - (<tt>String</tt>) Information that further
 *             explains Status.
 *       * +NextPageToken+ - (<tt>String</tt>) A value that you use to
 *         access the second and subsequent pages of results, if any.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listJobsByStatus(params, callback)
 *   Calls the ListJobsByStatus API operation.
 *   @param params [Object]
 *     * +Status+ - (*required*, <tt>String</tt>) To get information
 *       about all of the jobs associated with the current AWS account
 *       that have a given status, specify the following status.
 *     * +Ascending+ - (<tt>String</tt>) To list jobs in chronological
 *       order by the date and time that they were submitted, enter true.
 *     * +PageToken+ - (<tt>String</tt>) When &ET; returns more than one
 *       page of results, use pageToken in subsequent GET requests to get
 *       each successive page of results.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Jobs+ - (<tt>Array<Object></tt>) An array of Job
 *         objects that have the specified status.
 *         * +Id+ - (<tt>String</tt>) The identifier that &ET; assigned to
 *           the job.
 *         * +PipelineId+ - (<tt>String</tt>) The Id of the pipeline that
 *           you want &ET; to use for transcoding.
 *         * +Input+ - (<tt>Object</tt>) A section of the request or
 *           response body that provides information about the file that is
 *           being transcoded.
 *           * +Key+ - (<tt>String</tt>) The name of the file to transcode.
 *           * +FrameRate+ - (<tt>String</tt>) The frame rate of the input
 *             file.
 *           * +Resolution+ - (<tt>String</tt>) The resolution, in pixels,
 *             of the input file.
 *           * +AspectRatio+ - (<tt>String</tt>) The aspect ratio of the
 *             input file.
 *           * +Interlaced+ - (<tt>String</tt>) Whether the input file is
 *             interlaced.
 *           * +Container+ - (<tt>String</tt>) The container type for the
 *             input file.
 *         * +Output+ - (<tt>Object</tt>) A section of the request or
 *           response body that provides information about the transcoded
 *           (target) file.
 *           * +Key+ - (<tt>String</tt>) The name to assign to the
 *             transcoded file.
 *           * +ThumbnailPattern+ - (<tt>String</tt>) Whether you want &ET;
 *             to create thumbnails for your videos and, if so, how you
 *             want &ET; to name the files.
 *           * +Rotate+ - (<tt>String</tt>) The number of degrees clockwise
 *             by which you want &ET; to rotate the output relative to the
 *             input.
 *           * +PresetId+ - (<tt>String</tt>) The Id of the preset to use
 *             for this job.
 *           * +Status+ - (<tt>String</tt>) Status of the job.
 *           * +StatusDetail+ - (<tt>String</tt>) Information that further
 *             explains Status.
 *       * +NextPageToken+ - (<tt>String</tt>) A value that you use to
 *         access the second and subsequent pages of results, if any.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listPipelines(params, callback)
 *   Calls the ListPipelines API operation.
 *   @param params [Object]
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Pipelines+ - (<tt>Array<Object></tt>) An array of
 *         Pipeline objects.
 *         * +Id+ - (<tt>String</tt>) The identifier for the pipeline.
 *         * +Name+ - (<tt>String</tt>) The name of the pipeline.
 *         * +Status+ - (<tt>String</tt>) The current status of the
 *           pipeline.
 *         * +InputBucket+ - (<tt>String</tt>) The &S3; bucket in which you
 *           saved the media files that you want to transcode.
 *         * +OutputBucket+ - (<tt>String</tt>) The &S3; bucket in which
 *           you want &ET; to save the transcoded files.
 *         * +Role+ - (<tt>String</tt>) The IAM Amazon Resource Name (ARN)
 *           for the role that you want &ET; to use to create the pipeline.
 *         * +Notifications+ - (<tt>Object</tt>) The &SNSlong; (&SNS;)
 *           topic that you want to notify to report job status.
 *           * +Progressing+ - (<tt>String</tt>) The &SNSlong; (&SNS;)
 *             topic that you want to notify when &ET; has started to
 *             process the job.
 *           * +Completed+ - (<tt>String</tt>) The &SNS; topic that you
 *             want to notify when &ET; has finished processing the job.
 *           * +Warning+ - (<tt>String</tt>) The &SNS; topic that you want
 *             to notify when &ET; encounters a warning condition.
 *           * +Error+ - (<tt>String</tt>) The &SNS; topic that you want to
 *             notify when &ET; encounters an error condition.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listPresets(params, callback)
 *   Calls the ListPresets API operation.
 *   @param params [Object]
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Presets+ - (<tt>Array<Object></tt>) An array of
 *         Preset objects.
 *         * +Id+ - (<tt>String</tt>) Identifier for the new preset.
 *         * +Name+ - (<tt>String</tt>) The name of the preset.
 *         * +Description+ - (<tt>String</tt>) A description of the preset.
 *         * +Container+ - (<tt>String</tt>) The container type for the
 *           output file.
 *         * +Audio+ - (<tt>Object</tt>) A section of the response body
 *           that provides information about the audio preset values.
 *           * +Codec+ - (<tt>String</tt>) The audio codec for the output
 *             file.
 *           * +SampleRate+ - (<tt>String</tt>) The sample rate of the
 *             audio stream in the output file, in Hertz.
 *           * +BitRate+ - (<tt>String</tt>) The bit rate of the audio
 *             stream in the output file, in kilobits/second.
 *           * +Channels+ - (<tt>String</tt>) The number of audio channels
 *             in the output file.
 *         * +Video+ - (<tt>Object</tt>) A section of the response body
 *           that provides information about the video preset values.
 *           * +Codec+ - (<tt>String</tt>) The video codec for the output
 *             file.
 *           * +CodecOptions+ - (<tt>Object<String></tt>) Profile The H.264
 *             profile that you want to use for the output file.
 *           * +KeyframesMaxDist+ - (<tt>String</tt>) The maximum number of
 *             frames between key frames.
 *           * +FixedGOP+ - (<tt>String</tt>) Whether to use a fixed value
 *             for FixedGOP.
 *           * +BitRate+ - (<tt>String</tt>) The bit rate of the video
 *             stream in the output file, in kilobits/second.
 *           * +FrameRate+ - (<tt>String</tt>) The frames per second for
 *             the video stream in the output file.
 *           * +Resolution+ - (<tt>String</tt>) The width and height of the
 *             video in the output file, in pixels.
 *           * +AspectRatio+ - (<tt>String</tt>) The display aspect ratio
 *             of the video in the output file.
 *         * +Thumbnails+ - (<tt>Object</tt>) A section of the response
 *           body that provides information about the thumbnail preset
 *           values, if any.
 *           * +Format+ - (<tt>String</tt>) The format of thumbnails, if
 *             any.
 *           * +Interval+ - (<tt>String</tt>) The number of seconds between
 *             thumbnails.
 *           * +Resolution+ - (<tt>String</tt>) The width and height of
 *             thumbnail files in pixels.
 *           * +AspectRatio+ - (<tt>String</tt>) The aspect ratio of
 *             thumbnails.
 *         * +Type+ - (<tt>String</tt>) Whether the preset is a default
 *           preset provided by Elastic Transcoder (System) or a preset
 *           that you have defined (Custom).
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method readJob(params, callback)
 *   Calls the ReadJob API operation.
 *   @param params [Object]
 *     * +Id+ - (*required*, <tt>String</tt>) The identifier of the job
 *       for which you want to get detailed information.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Job+ - (<tt>Object</tt>) A section of the response
 *         body that provides information about the job.
 *         * +Id+ - (<tt>String</tt>) The identifier that &ET; assigned to
 *           the job.
 *         * +PipelineId+ - (<tt>String</tt>) The Id of the pipeline that
 *           you want &ET; to use for transcoding.
 *         * +Input+ - (<tt>Object</tt>) A section of the request or
 *           response body that provides information about the file that is
 *           being transcoded.
 *           * +Key+ - (<tt>String</tt>) The name of the file to transcode.
 *           * +FrameRate+ - (<tt>String</tt>) The frame rate of the input
 *             file.
 *           * +Resolution+ - (<tt>String</tt>) The resolution, in pixels,
 *             of the input file.
 *           * +AspectRatio+ - (<tt>String</tt>) The aspect ratio of the
 *             input file.
 *           * +Interlaced+ - (<tt>String</tt>) Whether the input file is
 *             interlaced.
 *           * +Container+ - (<tt>String</tt>) The container type for the
 *             input file.
 *         * +Output+ - (<tt>Object</tt>) A section of the request or
 *           response body that provides information about the transcoded
 *           (target) file.
 *           * +Key+ - (<tt>String</tt>) The name to assign to the
 *             transcoded file.
 *           * +ThumbnailPattern+ - (<tt>String</tt>) Whether you want &ET;
 *             to create thumbnails for your videos and, if so, how you
 *             want &ET; to name the files.
 *           * +Rotate+ - (<tt>String</tt>) The number of degrees clockwise
 *             by which you want &ET; to rotate the output relative to the
 *             input.
 *           * +PresetId+ - (<tt>String</tt>) The Id of the preset to use
 *             for this job.
 *           * +Status+ - (<tt>String</tt>) Status of the job.
 *           * +StatusDetail+ - (<tt>String</tt>) Information that further
 *             explains Status.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method readPipeline(params, callback)
 *   Calls the ReadPipeline API operation.
 *   @param params [Object]
 *     * +Id+ - (*required*, <tt>String</tt>) The identifier of the
 *       pipeline to read.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Pipeline+ - (<tt>Object</tt>) A section of the
 *         response body that provides information about the pipeline.
 *         * +Id+ - (<tt>String</tt>) The identifier for the pipeline.
 *         * +Name+ - (<tt>String</tt>) The name of the pipeline.
 *         * +Status+ - (<tt>String</tt>) The current status of the
 *           pipeline.
 *         * +InputBucket+ - (<tt>String</tt>) The &S3; bucket in which you
 *           saved the media files that you want to transcode.
 *         * +OutputBucket+ - (<tt>String</tt>) The &S3; bucket in which
 *           you want &ET; to save the transcoded files.
 *         * +Role+ - (<tt>String</tt>) The IAM Amazon Resource Name (ARN)
 *           for the role that you want &ET; to use to create the pipeline.
 *         * +Notifications+ - (<tt>Object</tt>) The &SNSlong; (&SNS;)
 *           topic that you want to notify to report job status.
 *           * +Progressing+ - (<tt>String</tt>) The &SNSlong; (&SNS;)
 *             topic that you want to notify when &ET; has started to
 *             process the job.
 *           * +Completed+ - (<tt>String</tt>) The &SNS; topic that you
 *             want to notify when &ET; has finished processing the job.
 *           * +Warning+ - (<tt>String</tt>) The &SNS; topic that you want
 *             to notify when &ET; encounters a warning condition.
 *           * +Error+ - (<tt>String</tt>) The &SNS; topic that you want to
 *             notify when &ET; encounters an error condition.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method readPreset(params, callback)
 *   Calls the ReadPreset API operation.
 *   @param params [Object]
 *     * +Id+ - (*required*, <tt>String</tt>) The identifier of the
 *       preset for which you want to get detailed information.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Preset+ - (<tt>Object</tt>) A section of the
 *         response body that provides information about the preset.
 *         * +Id+ - (<tt>String</tt>) Identifier for the new preset.
 *         * +Name+ - (<tt>String</tt>) The name of the preset.
 *         * +Description+ - (<tt>String</tt>) A description of the preset.
 *         * +Container+ - (<tt>String</tt>) The container type for the
 *           output file.
 *         * +Audio+ - (<tt>Object</tt>) A section of the response body
 *           that provides information about the audio preset values.
 *           * +Codec+ - (<tt>String</tt>) The audio codec for the output
 *             file.
 *           * +SampleRate+ - (<tt>String</tt>) The sample rate of the
 *             audio stream in the output file, in Hertz.
 *           * +BitRate+ - (<tt>String</tt>) The bit rate of the audio
 *             stream in the output file, in kilobits/second.
 *           * +Channels+ - (<tt>String</tt>) The number of audio channels
 *             in the output file.
 *         * +Video+ - (<tt>Object</tt>) A section of the response body
 *           that provides information about the video preset values.
 *           * +Codec+ - (<tt>String</tt>) The video codec for the output
 *             file.
 *           * +CodecOptions+ - (<tt>Object<String></tt>) Profile The H.264
 *             profile that you want to use for the output file.
 *           * +KeyframesMaxDist+ - (<tt>String</tt>) The maximum number of
 *             frames between key frames.
 *           * +FixedGOP+ - (<tt>String</tt>) Whether to use a fixed value
 *             for FixedGOP.
 *           * +BitRate+ - (<tt>String</tt>) The bit rate of the video
 *             stream in the output file, in kilobits/second.
 *           * +FrameRate+ - (<tt>String</tt>) The frames per second for
 *             the video stream in the output file.
 *           * +Resolution+ - (<tt>String</tt>) The width and height of the
 *             video in the output file, in pixels.
 *           * +AspectRatio+ - (<tt>String</tt>) The display aspect ratio
 *             of the video in the output file.
 *         * +Thumbnails+ - (<tt>Object</tt>) A section of the response
 *           body that provides information about the thumbnail preset
 *           values, if any.
 *           * +Format+ - (<tt>String</tt>) The format of thumbnails, if
 *             any.
 *           * +Interval+ - (<tt>String</tt>) The number of seconds between
 *             thumbnails.
 *           * +Resolution+ - (<tt>String</tt>) The width and height of
 *             thumbnail files in pixels.
 *           * +AspectRatio+ - (<tt>String</tt>) The aspect ratio of
 *             thumbnails.
 *         * +Type+ - (<tt>String</tt>) Whether the preset is a default
 *           preset provided by Elastic Transcoder (System) or a preset
 *           that you have defined (Custom).
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method testRole(params, callback)
 *   Calls the TestRole API operation.
 *   @param params [Object]
 *     * +Role+ - (*required*, <tt>String</tt>) The IAM Amazon Resource
 *       Name (ARN) for the role that you want Elastic Transcoder to
 *       test.
 *     * +InputBucket+ - (*required*, <tt>String</tt>) The &S3; bucket
 *       that contains media files to be transcoded.
 *     * +OutputBucket+ - (*required*, <tt>String</tt>) The &S3; bucket
 *       that &ET; will write transcoded media files to.
 *     * +Topics+ - (*required*, <tt>Array<String></tt>) The ARNs of one
 *       or more &SNSlong; (&SNS;) topics that you want the action to
 *       send a test notification to.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Success+ - (<tt>String</tt>) If the operation is
 *         successful, this value is true; otherwise, the value is false.
 *       * +Messages+ - (<tt>Array<String></tt>) If the Success element
 *         contains false, this value is an array of one or more error
 *         messages that were generated during the test process.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method updatePipelineNotifications(params, callback)
 *   Calls the UpdatePipelineNotifications API operation.
 *   @param params [Object]
 *     * +Id+ - (*required*, <tt>String</tt>) The identifier of the
 *       pipeline for which you want to change notification settings.
 *     * +Notifications+ - (*required*, <tt>Object</tt>) The &SNSlong;
 *       (&SNS;) topic that you want to notify to report job status.
 *       * +Progressing+ - (<tt>String</tt>) The &SNSlong; (&SNS;) topic
 *         that you want to notify when &ET; has started to process the
 *         job.
 *       * +Completed+ - (<tt>String</tt>) The &SNS; topic that you want
 *         to notify when &ET; has finished processing the job.
 *       * +Warning+ - (<tt>String</tt>) The &SNS; topic that you want to
 *         notify when &ET; encounters a warning condition.
 *       * +Error+ - (<tt>String</tt>) The &SNS; topic that you want to
 *         notify when &ET; encounters an error condition.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Pipeline+ - (<tt>Object</tt>) A section of the
 *         response body that provides information about the pipeline.
 *         * +Id+ - (<tt>String</tt>) The identifier for the pipeline.
 *         * +Name+ - (<tt>String</tt>) The name of the pipeline.
 *         * +Status+ - (<tt>String</tt>) The current status of the
 *           pipeline.
 *         * +InputBucket+ - (<tt>String</tt>) The &S3; bucket in which you
 *           saved the media files that you want to transcode.
 *         * +OutputBucket+ - (<tt>String</tt>) The &S3; bucket in which
 *           you want &ET; to save the transcoded files.
 *         * +Role+ - (<tt>String</tt>) The IAM Amazon Resource Name (ARN)
 *           for the role that you want &ET; to use to create the pipeline.
 *         * +Notifications+ - (<tt>Object</tt>) The &SNSlong; (&SNS;)
 *           topic that you want to notify to report job status.
 *           * +Progressing+ - (<tt>String</tt>) The &SNSlong; (&SNS;)
 *             topic that you want to notify when &ET; has started to
 *             process the job.
 *           * +Completed+ - (<tt>String</tt>) The &SNS; topic that you
 *             want to notify when &ET; has finished processing the job.
 *           * +Warning+ - (<tt>String</tt>) The &SNS; topic that you want
 *             to notify when &ET; encounters a warning condition.
 *           * +Error+ - (<tt>String</tt>) The &SNS; topic that you want to
 *             notify when &ET; encounters an error condition.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method updatePipelineStatus(params, callback)
 *   Calls the UpdatePipelineStatus API operation.
 *   @param params [Object]
 *     * +Id+ - (*required*, <tt>String</tt>) The identifier of the
 *       pipeline to update.
 *     * +Status+ - (*required*, <tt>String</tt>) The new status of the
 *       pipeline.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Pipeline+ - (<tt>Object</tt>) A section of the
 *         response body that provides information about the pipeline.
 *         * +Id+ - (<tt>String</tt>) The identifier for the pipeline.
 *         * +Name+ - (<tt>String</tt>) The name of the pipeline.
 *         * +Status+ - (<tt>String</tt>) The current status of the
 *           pipeline.
 *         * +InputBucket+ - (<tt>String</tt>) The &S3; bucket in which you
 *           saved the media files that you want to transcode.
 *         * +OutputBucket+ - (<tt>String</tt>) The &S3; bucket in which
 *           you want &ET; to save the transcoded files.
 *         * +Role+ - (<tt>String</tt>) The IAM Amazon Resource Name (ARN)
 *           for the role that you want &ET; to use to create the pipeline.
 *         * +Notifications+ - (<tt>Object</tt>) The &SNSlong; (&SNS;)
 *           topic that you want to notify to report job status.
 *           * +Progressing+ - (<tt>String</tt>) The &SNSlong; (&SNS;)
 *             topic that you want to notify when &ET; has started to
 *             process the job.
 *           * +Completed+ - (<tt>String</tt>) The &SNS; topic that you
 *             want to notify when &ET; has finished processing the job.
 *           * +Warning+ - (<tt>String</tt>) The &SNS; topic that you want
 *             to notify when &ET; encounters a warning condition.
 *           * +Error+ - (<tt>String</tt>) The &SNS; topic that you want to
 *             notify when &ET; encounters an error condition.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 *
 * @!method constructor(options)
 *   Constructs a service client object.  This client has one method for
 *   each API operation.
 *   @option options [String] endpoint The endpoint URI to send requests
 *     to.  The default endpoint is built from the configured +region+.
 *     The endpoint should be a string like <tt>'https://s3.amazonaws.com'</tt>.
 *   @option (see AWS.Config.constructor)
 *
 * @!attribute endpoint
 *   @return [AWS.Endpoint] an Endpoint object representing'
 *     the endpoint URL for service requests.'
 *
 */
AWS.ElasticTranscoder.Client = inherit({});
