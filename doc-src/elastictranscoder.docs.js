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
 *       that you want to delete. To get a list of the jobs (including
 *       their jobId) that have a status of Submitted, use the
 *       ListJobsByStatus API action.
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
 *       transcoding. The pipeline determines several settings, including
 *       the Amazon S3 bucket from which Elastic Transcoder gets the
 *       files to transcode and the bucket into which Elastic Transcoder
 *       puts the transcoded files.
 *     * +Input+ - (*required*, <tt>Object</tt>) A section of the request
 *       body that provides information about the file that is being
 *       transcoded.
 *       * +Key+ - (<tt>String</tt>) The name of the file to transcode.
 *         Elsewhere in the body of the JSON block is the the ID of the
 *         pipeline to use for processing the job. The InputBucket object
 *         in that pipeline tells &ET; which &S3; bucket to get the file
 *         from. If the file name includes a prefix, such as
 *         cooking/lasagna.mpg, include the prefix in the key. If the
 *         file isn't in the specified bucket, &ET; returns an error.
 *       * +FrameRate+ - (<tt>String</tt>) The frame rate of the input
 *         file. If you want &ET; to automatically detect the frame rate
 *         of the input file, specify auto. If you want to specify the
 *         frame rate for the input file, enter one of the following
 *         values: 10, 15, 23.97, 24, 25, 29.97, 30, 60 If you specify a
 *         value other than auto, &ET; disables automatic detection of
 *         the frame rate.
 *       * +Resolution+ - (<tt>String</tt>) The resolution, in pixels, of
 *         the input file. If you want &ET; to automatically detect the
 *         resolution of the input file, specify auto. If you want to
 *         specify the resolution for the input file, enter values in the
 *         format width in pixels by height in pixels. If you specify a
 *         value other than auto, &ET; disables automatic detection of
 *         the resolution.
 *       * +AspectRatio+ - (<tt>String</tt>) The aspect ratio of the
 *         input file. If you want &ET; to automatically detect the
 *         aspect ratio of the input file, specify auto. If you want to
 *         specify the aspect ratio for the output file, enter one of the
 *         following values: 1:1, 4:3, 3:2, 16:9 If you specify a value
 *         other than auto, &ET; disables automatic detection of the
 *         aspect ratio.
 *       * +Interlaced+ - (<tt>String</tt>) Whether the input file is
 *         interlaced. If you want &ET; to automatically detect whether
 *         the input file is interlaced, specify auto. If you want to
 *         specify whether the input file is interlaced, enter one of the
 *         following values: true, false If you specify a value other
 *         than auto, &ET; disables automatic detection of interlacing.
 *       * +Container+ - (<tt>String</tt>) The container type for the
 *         input file. If you want &ET; to automatically detect the
 *         container type of the input file, specify auto. If you want to
 *         specify the container type for the input file, enter one of
 *         the following values: 3gp, asf, avi, divx, flv, mkv, mov, mp4,
 *         mpeg, mpeg-ps, mpeg-ts, mxf, ogg, vob, wav, webm
 *     * +Output+ - (*required*, <tt>Object</tt>) A section of the
 *       request body that provides information about the transcoded
 *       (target) file.
 *       * +Key+ - (<tt>String</tt>) The name to assign to the transcoded
 *         file. &ET; saves the file in the &S3; bucket specified by the
 *         OutputBucket object in the pipeline that is specified by the
 *         pipeline ID. If a file with the specified name already exists
 *         in the output bucket, the job fails.
 *       * +ThumbnailPattern+ - (<tt>String</tt>) Whether you want &ET;
 *         to create thumbnails for your videos and, if so, how you want
 *         &ET; to name the files. If you don't want &ET; to create
 *         thumbnails, specify "". If you do want &ET; to create
 *         thumbnails, specify the information that you want to include
 *         in the file name for each thumbnail. You can specify the
 *         following values in any sequence: <tt>{count}</tt> (Required):
 *         If you want to create thumbnails, you must include
 *         <tt>{count}</tt> in the ThumbnailPattern object. Wherever you
 *         specify <tt>{count}</tt>, &ET; adds a five-digit sequence
 *         number (beginning with 00001) to thumbnail file names. The
 *         number indicates where a given thumbnail appears in the
 *         sequence of thumbnails for a transcoded file. If you specify a
 *         literal value and/or <tt>{resolution}</tt> but you omit
 *         <tt>{count}</tt>, &ET; returns a validation error and does not
 *         create the job. Literal values (Optional): You can specify
 *         literal values anywhere in the ThumbnailPattern object. For
 *         example, you can include them as a file name prefix or as a
 *         delimiter between <tt>{resolution}</tt> and <tt>{count}</tt>.
 *         <tt>{resolution}</tt> (Optional): If you want &ET; to include
 *         the resolution in the file name, include <tt>{resolution}</tt>
 *         in the ThumbnailPattern object. When creating thumbnails, &ET;
 *         automatically saves the files in the format (.jpg or .png)
 *         that appears in the preset that you specified in the PresetID
 *         value of CreateJobOutput. &ET; also appends the applicable
 *         file name extension.
 *       * +Rotate+ - (<tt>String</tt>) The number of degrees clockwise
 *         by which you want &ET; to rotate the output relative to the
 *         input. Enter one of the following values: auto, 0, 90, 180,
 *         270 The value auto generally works only if the file that
 *         you're transcoding contains rotation metadata.
 *       * +PresetId+ - (<tt>String</tt>) The Id of the preset to use for
 *         this job. The preset determines the audio, video, and
 *         thumbnail settings that &ET; uses for transcoding.
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
 *           the job. You use this value to get settings for the job or to
 *           delete the job.
 *         * +PipelineId+ - (<tt>String</tt>) The Id of the pipeline that
 *           you want &ET; to use for transcoding. The pipeline determines
 *           several settings, including the &S3; bucket from which &ET;
 *           gets the files to transcode and the bucket into which &ET;
 *           puts the transcoded files.
 *         * +Input+ - (<tt>Object</tt>) A section of the request or
 *           response body that provides information about the file that is
 *           being transcoded.
 *           * +Key+ - (<tt>String</tt>) The name of the file to transcode.
 *             Elsewhere in the body of the JSON block is the the ID of the
 *             pipeline to use for processing the job. The InputBucket
 *             object in that pipeline tells &ET; which &S3; bucket to get
 *             the file from. If the file name includes a prefix, such as
 *             cooking/lasagna.mpg, include the prefix in the key. If the
 *             file isn't in the specified bucket, &ET; returns an error.
 *           * +FrameRate+ - (<tt>String</tt>) The frame rate of the input
 *             file. If you want &ET; to automatically detect the frame
 *             rate of the input file, specify auto. If you want to specify
 *             the frame rate for the input file, enter one of the
 *             following values: 10, 15, 23.97, 24, 25, 29.97, 30, 60 If
 *             you specify a value other than auto, &ET; disables automatic
 *             detection of the frame rate.
 *           * +Resolution+ - (<tt>String</tt>) The resolution, in pixels,
 *             of the input file. If you want &ET; to automatically detect
 *             the resolution of the input file, specify auto. If you want
 *             to specify the resolution for the input file, enter values
 *             in the format width in pixels by height in pixels. If you
 *             specify a value other than auto, &ET; disables automatic
 *             detection of the resolution.
 *           * +AspectRatio+ - (<tt>String</tt>) The aspect ratio of the
 *             input file. If you want &ET; to automatically detect the
 *             aspect ratio of the input file, specify auto. If you want to
 *             specify the aspect ratio for the output file, enter one of
 *             the following values: 1:1, 4:3, 3:2, 16:9 If you specify a
 *             value other than auto, &ET; disables automatic detection of
 *             the aspect ratio.
 *           * +Interlaced+ - (<tt>String</tt>) Whether the input file is
 *             interlaced. If you want &ET; to automatically detect whether
 *             the input file is interlaced, specify auto. If you want to
 *             specify whether the input file is interlaced, enter one of
 *             the following values: true, false If you specify a value
 *             other than auto, &ET; disables automatic detection of
 *             interlacing.
 *           * +Container+ - (<tt>String</tt>) The container type for the
 *             input file. If you want &ET; to automatically detect the
 *             container type of the input file, specify auto. If you want
 *             to specify the container type for the input file, enter one
 *             of the following values: 3gp, asf, avi, divx, flv, mkv, mov,
 *             mp4, mpeg, mpeg-ps, mpeg-ts, mxf, ogg, vob, wav, webm
 *         * +Output+ - (<tt>Object</tt>) A section of the request or
 *           response body that provides information about the transcoded
 *           (target) file.
 *           * +Key+ - (<tt>String</tt>) The name to assign to the
 *             transcoded file. &ET; saves the file in the &S3; bucket
 *             specified by the OutputBucket object in the pipeline that is
 *             specified by the pipeline ID. If a file with the specified
 *             name already exists in the output bucket, the job fails.
 *           * +ThumbnailPattern+ - (<tt>String</tt>) Whether you want &ET;
 *             to create thumbnails for your videos and, if so, how you
 *             want &ET; to name the files. If you don't want &ET; to
 *             create thumbnails, specify "". If you do want &ET; to create
 *             thumbnails, specify the information that you want to include
 *             in the file name for each thumbnail. You can specify the
 *             following values in any sequence: <tt>{count}</tt>
 *             (Required): If you want to create thumbnails, you must
 *             include <tt>{count}</tt> in the ThumbnailPattern object.
 *             Wherever you specify <tt>{count}</tt>, &ET; adds a
 *             five-digit sequence number (beginning with 00001) to
 *             thumbnail file names. The number indicates where a given
 *             thumbnail appears in the sequence of thumbnails for a
 *             transcoded file. If you specify a literal value and/or
 *             <tt>{resolution}</tt> but you omit <tt>{count}</tt>, &ET;
 *             returns a validation error and does not create the job.
 *             Literal values (Optional): You can specify literal values
 *             anywhere in the ThumbnailPattern object. For example, you
 *             can include them as a file name prefix or as a delimiter
 *             between <tt>{resolution}</tt> and <tt>{count}</tt>.
 *             <tt>{resolution}</tt> (Optional): If you want &ET; to
 *             include the resolution in the file name, include
 *             <tt>{resolution}</tt> in the ThumbnailPattern object. When
 *             creating thumbnails, &ET; automatically saves the files in
 *             the format (.jpg or .png) that appears in the preset that
 *             you specified in the PresetID value of CreateJobOutput. &ET;
 *             also appends the applicable file name extension.
 *           * +Rotate+ - (<tt>String</tt>) The number of degrees clockwise
 *             by which you want &ET; to rotate the output relative to the
 *             input. Enter one of the following values: auto, 0, 90, 180,
 *             270 The value auto generally works only if the file that
 *             you're transcoding contains rotation metadata.
 *           * +PresetId+ - (<tt>String</tt>) The Id of the preset to use
 *             for this job. The preset determines the audio, video, and
 *             thumbnail settings that &ET; uses for transcoding.
 *           * +Status+ - (<tt>String</tt>) Status of the job. The value of
 *             Status is one of the following: Submitted, Progressing,
 *             Completed, Canceled, or Error.
 *           * +StatusDetail+ - (<tt>String</tt>) Information that further
 *             explains Status.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createPipeline(params, callback)
 *   Calls the CreatePipeline API operation.
 *   @param params [Object]
 *     * +Name+ - (*required*, <tt>String</tt>) The name of the pipeline.
 *       We recommend that the name be unique within the AWS account, but
 *       uniqueness is not enforced. Constraints: Maximum 40 characters.
 *     * +InputBucket+ - (*required*, <tt>String</tt>) The &S3; bucket in
 *       which you saved the media files that you want to transcode.
 *     * +OutputBucket+ - (*required*, <tt>String</tt>) The &S3; bucket
 *       in which you want &ET; to save the transcoded files.
 *     * +Role+ - (*required*, <tt>String</tt>) The IAM Amazon Resource
 *       Name (ARN) for the role that you want &ET; to use to create the
 *       pipeline.
 *     * +Notifications+ - (*required*, <tt>Object</tt>) The &SNSlong;
 *       (&SNS;) topic that you want to notify to report job status. To
 *       receive notifications, you must also subscribe to the new topic
 *       in the &SNS; console. Progressing: The &SNSlong; (&SNS;) topic
 *       that you want to notify when &ET; has started to process the
 *       job. Completed: The &SNS; topic that you want to notify when
 *       &ET; has finished processing the job. Warning: The &SNS; topic
 *       that you want to notify when &ET; encounters a warning
 *       condition. Error: The &SNS; topic that you want to notify when
 *       &ET; encounters an error condition.
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
 *         * +Id+ - (<tt>String</tt>) The identifier for the pipeline. You
 *           use this value to identify the pipeline in which you want to
 *           perform a variety of operations, such as creating a job or a
 *           preset.
 *         * +Name+ - (<tt>String</tt>) The name of the pipeline. We
 *           recommend that the name be unique within the AWS account, but
 *           uniqueness is not enforced. Constraints: Maximum 40 characters
 *         * +Status+ - (<tt>String</tt>) The current status of the
 *           pipeline: active: The pipeline is processing jobs. paused: The
 *           pipeline is not currently processing jobs.
 *         * +InputBucket+ - (<tt>String</tt>) The &S3; bucket in which you
 *           saved the media files that you want to transcode.
 *         * +OutputBucket+ - (<tt>String</tt>) The &S3; bucket in which
 *           you want &ET; to save the transcoded files.
 *         * +Role+ - (<tt>String</tt>) The IAM Amazon Resource Name (ARN)
 *           for the role that you want &ET; to use to create the pipeline.
 *         * +Notifications+ - (<tt>Object</tt>) The &SNSlong; (&SNS;)
 *           topic that you want to notify to report job status. To receive
 *           notifications, you must also subscribe to the new topic in the
 *           &SNS; console. Progressing: The &SNSlong; (&SNS;) topic that
 *           you want to notify when &ET; has started to process the job.
 *           Completed: The &SNS; topic that you want to notify when &ET;
 *           has finished processing the job. Warning: The &SNS; topic that
 *           you want to notify when &ET; encounters a warning condition.
 *           Error: The &SNS; topic that you want to notify when &ET;
 *           encounters an error condition.
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
 *       We recommend that the name be unique within the AWS account, but
 *       uniqueness is not enforced.
 *     * +Description+ - (<tt>String</tt>) A description of the preset.
 *     * +Container+ - (*required*, <tt>String</tt>) The container type
 *       for the output file. This value must be mp4.
 *     * +Video+ - (*required*, <tt>Object</tt>) A section of the request
 *       body that specifies the video parameters.
 *       * +Codec+ - (<tt>String</tt>) The video codec for the output
 *         file. This value must be H.264.
 *       * +CodecOptions+ - (<tt>Object<String></tt>) Profile The H.264
 *         profile that you want to use for the output file. &ET;
 *         supports the following profiles: baseline: The profile most
 *         commonly used for videoconferencing and for mobile
 *         applications. main: The profile used for standard-definition
 *         digital TV broadcasts. high: The profile used for
 *         high-definition digital TV broadcasts and for Blu-ray discs.
 *         Level The H.264 level that you want to use for the output
 *         file. &ET; supports the following levels: 1, 1b, 1.1, 1.2,
 *         1.3, 2, 2.1, 2.2, 3, 3.1, 3.2, 4, 4.1 MaxReferenceFrames The
 *         maximum number of previously decoded frames to use as a
 *         reference for decoding future frames. Valid values are
 *         integers 0 through 16, but we recommend that you not use a
 *         value greater than the following: Min(Floor(Maximum decoded
 *         picture buffer in macroblocks * 256 / (Width in pixels *
 *         Height in pixels)), 16) where Width in pixels and Height in
 *         pixels represent the resolution of the output video and
 *         Maximum decoded picture buffer in macroblocks depends on the
 *         value of the Level object. (A macroblock is a block of pixels
 *         measuring 16x16.) Note that the calculation for maximum
 *         decoded picture buffer, which is similar to the calculation
 *         for maximum reference frames, uses macroblocks instead of
 *         pixels for the width and height of the video. To determine the
 *         value of maximum decoded picture buffer in macroblocks, see
 *         the following list (Level - Maximum decoded picture buffer): 1
 *         - 396 1b - 396 1.1 - 900 1.2 - 2376 1.3 - 2376 2 - 2376 2.1 -
 *         4752 2.2 - 8100 3 - 8100 3.1 - 18000 3.2 - 20480 4 - 32768 4.1
 *         - 32768
 *       * +KeyframesMaxDist+ - (<tt>String</tt>) The maximum number of
 *         frames between key frames. Key frames are fully encoded
 *         frames; the frames between key frames are encoded based, in
 *         part, on the content of the key frames. The value is an
 *         integer formatted as a string; valid values are between 1 and
 *         100000, inclusive. A higher value results in higher
 *         compression but may also discernibly decrease video quality.
 *       * +FixedGOP+ - (<tt>String</tt>) Whether to use a fixed value
 *         for FixedGOP. Valid values are true and false: true: &ET; uses
 *         the value of KeyframesMaxDist for the distance between key
 *         frames (the number of frames in a group of pictures, or GOP).
 *         false: The distance between key frames can vary.
 *       * +BitRate+ - (<tt>String</tt>) The bit rate of the video stream
 *         in the output file, in kilobits/second. Valid values depend on
 *         the values of Level and Profile. We recommend that you specify
 *         a value less than or equal to the maximum H.264-compliant
 *         value listed in the following list for your level and profile:
 *         Level - Maximum video bit rate in kilobits/second (baseline
 *         and main Profile) : maximum video bit rate in kilobits/second
 *         (high Profile) 1 - 64 : 80 1b - 128 : 160 1.1 - 192 : 240 1.2
 *         - 384 : 480 1.3 - 768 : 960 2 - 2000 : 2500 3 - 10000 : 12500
 *         3.1 - 14000 : 17500 3.2 - 20000 : 25000 4 - 20000 : 25000 4.1
 *         - 50000 : 62500
 *       * +FrameRate+ - (<tt>String</tt>) The frames per second for the
 *         video stream in the output file. Valid values include: auto,
 *         10, 15, 23.97, 24, 25, 29.97, 30, 60 If you specify auto, &ET;
 *         uses the detected frame rate of the input source. If you
 *         specify a frame rate, we recommend that you perform the
 *         following calculation: Frame rate = maximum recommended
 *         decoding speed in luma samples/second / (width in pixels *
 *         height in pixels) where: width in pixels and height in pixels
 *         represent the Resolution of the output video. maximum
 *         recommended decoding speed in Luma samples/second is less than
 *         or equal to the maximum value listed in the following table,
 *         based on the value that you specified for Level. The maximum
 *         recommended decoding speed in Luma samples/second for each
 *         level is described in the following list (Level - Decoding
 *         speed): 1 - 380160 1b - 380160 1.1 - 76800 1.2 - 1536000 1.3 -
 *         3041280 2 - 3041280 2.1 - 5068800 2.2 - 5184000 3 - 10368000
 *         3.1 - 27648000 3.2 - 55296000 4 - 62914560 4.1 - 62914560
 *       * +Resolution+ - (<tt>String</tt>) The width and height of the
 *         video in the output file, in pixels. Valid values are auto and
 *         width x height: auto: &ET; attempts to preserve the width and
 *         height of the input file, subject to the following rules.
 *         width x height: The width and height of the output video in
 *         pixels. Note the following about specifying the width and
 *         height: The width must be an even integer between 128 and
 *         4096, inclusive. The height must be an even integer between 96
 *         and 3072, inclusive. If you specify a resolution that is less
 *         than the resolution of the input file, &ET; rescales the
 *         output file to the lower resolution. If you specify a
 *         resolution that is greater than the resolution of the input
 *         file, &ET; rescales the output to the higher resolution. We
 *         recommend that you specify a resolution for which the product
 *         of width and height is less than or equal to the applicable
 *         value in the following list (List - Max width x height value):
 *         1 - 25344 1b - 25344 1.1 - 101376 1.2 - 101376 1.3 - 101376 2
 *         - 101376 2.1 - 202752 2.2 - 404720 3 - 404720 3.1 - 921600 3.2
 *         - 1310720 4 - 2097152 4.1 - 2097152
 *       * +AspectRatio+ - (<tt>String</tt>) The display aspect ratio of
 *         the video in the output file. Valid values include: auto, 1:1,
 *         4:3, 3:2, 16:9 If you specify auto, &ET; tries to preserve the
 *         aspect ratio of the input file. If you specify an aspect ratio
 *         for the output file that differs from aspect ratio of the
 *         input file, &ET; adds pillarboxing (black bars on the sides)
 *         or letterboxing (black bars on the top and bottom) to maintain
 *         the aspect ratio of the active region of the video.
 *     * +Audio+ - (*required*, <tt>Object</tt>) A section of the request
 *       body that specifies the audio parameters
 *       * +Codec+ - (<tt>String</tt>) The audio codec for the output
 *         file. This value must be AAC.
 *       * +SampleRate+ - (<tt>String</tt>) The sample rate of the audio
 *         stream in the output file, in Hertz. Valid values include:
 *         auto, 22050, 32000, 44100, 48000, 96000 If you specify auto,
 *         &ET; automatically detects the sample rate.
 *       * +BitRate+ - (<tt>String</tt>) The bit rate of the audio stream
 *         in the output file, in kilobits/second. Enter an integer
 *         between 8 and 320, inclusive.
 *       * +Channels+ - (<tt>String</tt>) The number of audio channels in
 *         the output file. Valid values include: auto, 0, 1, 2 If you
 *         specify auto, &ET; automatically detects the number of
 *         channels in the input file.
 *     * +Thumbnails+ - (*required*, <tt>Object</tt>) A section of the
 *       request body that specifies the thumbnail parameters, if any.
 *       * +Format+ - (<tt>String</tt>) The format of thumbnails, if any.
 *         Valid values are jpg and png. You specify whether you want
 *         &ET; to create thumbnails when you create a job.
 *       * +Interval+ - (<tt>String</tt>) The number of seconds between
 *         thumbnails. Specify an integer value.
 *       * +Resolution+ - (<tt>String</tt>) The width and height of
 *         thumbnail files in pixels. Specify a value in the format width
 *         x height where both values are even integers. The values
 *         cannot exceed the width and height that you specified in the
 *         Video:Resolution object.
 *       * +AspectRatio+ - (<tt>String</tt>) The aspect ratio of
 *         thumbnails. Valid values include: auto, 1:1, 4:3, 3:2, 16:9 If
 *         you specify auto, &ET; tries to preserve the aspect ratio of
 *         the video in the output file.
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
 *         * +Id+ - (<tt>String</tt>) Identifier for the new preset. You
 *           use this value to get settings for the preset or to delete it.
 *         * +Name+ - (<tt>String</tt>) The name of the preset.
 *         * +Description+ - (<tt>String</tt>) A description of the preset.
 *         * +Container+ - (<tt>String</tt>) The container type for the
 *           output file. This value must be mp4.
 *         * +Audio+ - (<tt>Object</tt>) A section of the response body
 *           that provides information about the audio preset values.
 *           * +Codec+ - (<tt>String</tt>) The audio codec for the output
 *             file. This value must be AAC.
 *           * +SampleRate+ - (<tt>String</tt>) The sample rate of the
 *             audio stream in the output file, in Hertz. Valid values
 *             include: auto, 22050, 32000, 44100, 48000, 96000 If you
 *             specify auto, &ET; automatically detects the sample rate.
 *           * +BitRate+ - (<tt>String</tt>) The bit rate of the audio
 *             stream in the output file, in kilobits/second. Enter an
 *             integer between 8 and 320, inclusive.
 *           * +Channels+ - (<tt>String</tt>) The number of audio channels
 *             in the output file. Valid values include: auto, 0, 1, 2 If
 *             you specify auto, &ET; automatically detects the number of
 *             channels in the input file.
 *         * +Video+ - (<tt>Object</tt>) A section of the response body
 *           that provides information about the video preset values.
 *           * +Codec+ - (<tt>String</tt>) The video codec for the output
 *             file. This value must be H.264.
 *           * +CodecOptions+ - (<tt>Object<String></tt>) Profile The H.264
 *             profile that you want to use for the output file. &ET;
 *             supports the following profiles: baseline: The profile most
 *             commonly used for videoconferencing and for mobile
 *             applications. main: The profile used for standard-definition
 *             digital TV broadcasts. high: The profile used for
 *             high-definition digital TV broadcasts and for Blu-ray discs.
 *             Level The H.264 level that you want to use for the output
 *             file. &ET; supports the following levels: 1, 1b, 1.1, 1.2,
 *             1.3, 2, 2.1, 2.2, 3, 3.1, 3.2, 4, 4.1 MaxReferenceFrames The
 *             maximum number of previously decoded frames to use as a
 *             reference for decoding future frames. Valid values are
 *             integers 0 through 16, but we recommend that you not use a
 *             value greater than the following: Min(Floor(Maximum decoded
 *             picture buffer in macroblocks * 256 / (Width in pixels *
 *             Height in pixels)), 16) where Width in pixels and Height in
 *             pixels represent the resolution of the output video and
 *             Maximum decoded picture buffer in macroblocks depends on the
 *             value of the Level object. (A macroblock is a block of
 *             pixels measuring 16x16.) Note that the calculation for
 *             maximum decoded picture buffer, which is similar to the
 *             calculation for maximum reference frames, uses macroblocks
 *             instead of pixels for the width and height of the video. To
 *             determine the value of maximum decoded picture buffer in
 *             macroblocks, see the following list (Level - Maximum decoded
 *             picture buffer): 1 - 396 1b - 396 1.1 - 900 1.2 - 2376 1.3 -
 *             2376 2 - 2376 2.1 - 4752 2.2 - 8100 3 - 8100 3.1 - 18000 3.2
 *             - 20480 4 - 32768 4.1 - 32768
 *           * +KeyframesMaxDist+ - (<tt>String</tt>) The maximum number of
 *             frames between key frames. Key frames are fully encoded
 *             frames; the frames between key frames are encoded based, in
 *             part, on the content of the key frames. The value is an
 *             integer formatted as a string; valid values are between 1
 *             and 100000, inclusive. A higher value results in higher
 *             compression but may also discernibly decrease video quality.
 *           * +FixedGOP+ - (<tt>String</tt>) Whether to use a fixed value
 *             for FixedGOP. Valid values are true and false: true: &ET;
 *             uses the value of KeyframesMaxDist for the distance between
 *             key frames (the number of frames in a group of pictures, or
 *             GOP). false: The distance between key frames can vary.
 *           * +BitRate+ - (<tt>String</tt>) The bit rate of the video
 *             stream in the output file, in kilobits/second. Valid values
 *             depend on the values of Level and Profile. We recommend that
 *             you specify a value less than or equal to the maximum
 *             H.264-compliant value listed in the following list for your
 *             level and profile: Level - Maximum video bit rate in
 *             kilobits/second (baseline and main Profile) : maximum video
 *             bit rate in kilobits/second (high Profile) 1 - 64 : 80 1b -
 *             128 : 160 1.1 - 192 : 240 1.2 - 384 : 480 1.3 - 768 : 960 2
 *             - 2000 : 2500 3 - 10000 : 12500 3.1 - 14000 : 17500 3.2 -
 *             20000 : 25000 4 - 20000 : 25000 4.1 - 50000 : 62500
 *           * +FrameRate+ - (<tt>String</tt>) The frames per second for
 *             the video stream in the output file. Valid values include:
 *             auto, 10, 15, 23.97, 24, 25, 29.97, 30, 60 If you specify
 *             auto, &ET; uses the detected frame rate of the input source.
 *             If you specify a frame rate, we recommend that you perform
 *             the following calculation: Frame rate = maximum recommended
 *             decoding speed in luma samples/second / (width in pixels *
 *             height in pixels) where: width in pixels and height in
 *             pixels represent the Resolution of the output video. maximum
 *             recommended decoding speed in Luma samples/second is less
 *             than or equal to the maximum value listed in the following
 *             table, based on the value that you specified for Level. The
 *             maximum recommended decoding speed in Luma samples/second
 *             for each level is described in the following list (Level -
 *             Decoding speed): 1 - 380160 1b - 380160 1.1 - 76800 1.2 -
 *             1536000 1.3 - 3041280 2 - 3041280 2.1 - 5068800 2.2 -
 *             5184000 3 - 10368000 3.1 - 27648000 3.2 - 55296000 4 -
 *             62914560 4.1 - 62914560
 *           * +Resolution+ - (<tt>String</tt>) The width and height of the
 *             video in the output file, in pixels. Valid values are auto
 *             and width x height: auto: &ET; attempts to preserve the
 *             width and height of the input file, subject to the following
 *             rules. width x height: The width and height of the output
 *             video in pixels. Note the following about specifying the
 *             width and height: The width must be an even integer between
 *             128 and 4096, inclusive. The height must be an even integer
 *             between 96 and 3072, inclusive. If you specify a resolution
 *             that is less than the resolution of the input file, &ET;
 *             rescales the output file to the lower resolution. If you
 *             specify a resolution that is greater than the resolution of
 *             the input file, &ET; rescales the output to the higher
 *             resolution. We recommend that you specify a resolution for
 *             which the product of width and height is less than or equal
 *             to the applicable value in the following list (List - Max
 *             width x height value): 1 - 25344 1b - 25344 1.1 - 101376 1.2
 *             - 101376 1.3 - 101376 2 - 101376 2.1 - 202752 2.2 - 404720 3
 *             - 404720 3.1 - 921600 3.2 - 1310720 4 - 2097152 4.1 -
 *             2097152
 *           * +AspectRatio+ - (<tt>String</tt>) The display aspect ratio
 *             of the video in the output file. Valid values include: auto,
 *             1:1, 4:3, 3:2, 16:9 If you specify auto, &ET; tries to
 *             preserve the aspect ratio of the input file. If you specify
 *             an aspect ratio for the output file that differs from aspect
 *             ratio of the input file, &ET; adds pillarboxing (black bars
 *             on the sides) or letterboxing (black bars on the top and
 *             bottom) to maintain the aspect ratio of the active region of
 *             the video.
 *         * +Thumbnails+ - (<tt>Object</tt>) A section of the response
 *           body that provides information about the thumbnail preset
 *           values, if any.
 *           * +Format+ - (<tt>String</tt>) The format of thumbnails, if
 *             any. Valid values are jpg and png. You specify whether you
 *             want &ET; to create thumbnails when you create a job.
 *           * +Interval+ - (<tt>String</tt>) The number of seconds between
 *             thumbnails. Specify an integer value.
 *           * +Resolution+ - (<tt>String</tt>) The width and height of
 *             thumbnail files in pixels. Specify a value in the format
 *             width x height where both values are even integers. The
 *             values cannot exceed the width and height that you specified
 *             in the Video:Resolution object.
 *           * +AspectRatio+ - (<tt>String</tt>) The aspect ratio of
 *             thumbnails. Valid values include: auto, 1:1, 4:3, 3:2, 16:9
 *             If you specify auto, &ET; tries to preserve the aspect ratio
 *             of the video in the output file.
 *         * +Type+ - (<tt>String</tt>) Whether the preset is a default
 *           preset provided by Elastic Transcoder (System) or a preset
 *           that you have defined (Custom).
 *       * +Warning+ - (<tt>String</tt>) The &SNS; topic that you want to
 *         notify when &ET; encounters a warning condition.
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
 *       To list jobs in reverse chronological order, enter false.
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
 *           the job. You use this value to get settings for the job or to
 *           delete the job.
 *         * +PipelineId+ - (<tt>String</tt>) The Id of the pipeline that
 *           you want &ET; to use for transcoding. The pipeline determines
 *           several settings, including the &S3; bucket from which &ET;
 *           gets the files to transcode and the bucket into which &ET;
 *           puts the transcoded files.
 *         * +Input+ - (<tt>Object</tt>) A section of the request or
 *           response body that provides information about the file that is
 *           being transcoded.
 *           * +Key+ - (<tt>String</tt>) The name of the file to transcode.
 *             Elsewhere in the body of the JSON block is the the ID of the
 *             pipeline to use for processing the job. The InputBucket
 *             object in that pipeline tells &ET; which &S3; bucket to get
 *             the file from. If the file name includes a prefix, such as
 *             cooking/lasagna.mpg, include the prefix in the key. If the
 *             file isn't in the specified bucket, &ET; returns an error.
 *           * +FrameRate+ - (<tt>String</tt>) The frame rate of the input
 *             file. If you want &ET; to automatically detect the frame
 *             rate of the input file, specify auto. If you want to specify
 *             the frame rate for the input file, enter one of the
 *             following values: 10, 15, 23.97, 24, 25, 29.97, 30, 60 If
 *             you specify a value other than auto, &ET; disables automatic
 *             detection of the frame rate.
 *           * +Resolution+ - (<tt>String</tt>) The resolution, in pixels,
 *             of the input file. If you want &ET; to automatically detect
 *             the resolution of the input file, specify auto. If you want
 *             to specify the resolution for the input file, enter values
 *             in the format width in pixels by height in pixels. If you
 *             specify a value other than auto, &ET; disables automatic
 *             detection of the resolution.
 *           * +AspectRatio+ - (<tt>String</tt>) The aspect ratio of the
 *             input file. If you want &ET; to automatically detect the
 *             aspect ratio of the input file, specify auto. If you want to
 *             specify the aspect ratio for the output file, enter one of
 *             the following values: 1:1, 4:3, 3:2, 16:9 If you specify a
 *             value other than auto, &ET; disables automatic detection of
 *             the aspect ratio.
 *           * +Interlaced+ - (<tt>String</tt>) Whether the input file is
 *             interlaced. If you want &ET; to automatically detect whether
 *             the input file is interlaced, specify auto. If you want to
 *             specify whether the input file is interlaced, enter one of
 *             the following values: true, false If you specify a value
 *             other than auto, &ET; disables automatic detection of
 *             interlacing.
 *           * +Container+ - (<tt>String</tt>) The container type for the
 *             input file. If you want &ET; to automatically detect the
 *             container type of the input file, specify auto. If you want
 *             to specify the container type for the input file, enter one
 *             of the following values: 3gp, asf, avi, divx, flv, mkv, mov,
 *             mp4, mpeg, mpeg-ps, mpeg-ts, mxf, ogg, vob, wav, webm
 *         * +Output+ - (<tt>Object</tt>) A section of the request or
 *           response body that provides information about the transcoded
 *           (target) file.
 *           * +Key+ - (<tt>String</tt>) The name to assign to the
 *             transcoded file. &ET; saves the file in the &S3; bucket
 *             specified by the OutputBucket object in the pipeline that is
 *             specified by the pipeline ID. If a file with the specified
 *             name already exists in the output bucket, the job fails.
 *           * +ThumbnailPattern+ - (<tt>String</tt>) Whether you want &ET;
 *             to create thumbnails for your videos and, if so, how you
 *             want &ET; to name the files. If you don't want &ET; to
 *             create thumbnails, specify "". If you do want &ET; to create
 *             thumbnails, specify the information that you want to include
 *             in the file name for each thumbnail. You can specify the
 *             following values in any sequence: <tt>{count}</tt>
 *             (Required): If you want to create thumbnails, you must
 *             include <tt>{count}</tt> in the ThumbnailPattern object.
 *             Wherever you specify <tt>{count}</tt>, &ET; adds a
 *             five-digit sequence number (beginning with 00001) to
 *             thumbnail file names. The number indicates where a given
 *             thumbnail appears in the sequence of thumbnails for a
 *             transcoded file. If you specify a literal value and/or
 *             <tt>{resolution}</tt> but you omit <tt>{count}</tt>, &ET;
 *             returns a validation error and does not create the job.
 *             Literal values (Optional): You can specify literal values
 *             anywhere in the ThumbnailPattern object. For example, you
 *             can include them as a file name prefix or as a delimiter
 *             between <tt>{resolution}</tt> and <tt>{count}</tt>.
 *             <tt>{resolution}</tt> (Optional): If you want &ET; to
 *             include the resolution in the file name, include
 *             <tt>{resolution}</tt> in the ThumbnailPattern object. When
 *             creating thumbnails, &ET; automatically saves the files in
 *             the format (.jpg or .png) that appears in the preset that
 *             you specified in the PresetID value of CreateJobOutput. &ET;
 *             also appends the applicable file name extension.
 *           * +Rotate+ - (<tt>String</tt>) The number of degrees clockwise
 *             by which you want &ET; to rotate the output relative to the
 *             input. Enter one of the following values: auto, 0, 90, 180,
 *             270 The value auto generally works only if the file that
 *             you're transcoding contains rotation metadata.
 *           * +PresetId+ - (<tt>String</tt>) The Id of the preset to use
 *             for this job. The preset determines the audio, video, and
 *             thumbnail settings that &ET; uses for transcoding.
 *           * +Status+ - (<tt>String</tt>) Status of the job. The value of
 *             Status is one of the following: Submitted, Progressing,
 *             Completed, Canceled, or Error.
 *           * +StatusDetail+ - (<tt>String</tt>) Information that further
 *             explains Status.
 *       * +NextPageToken+ - (<tt>String</tt>) A value that you use to
 *         access the second and subsequent pages of results, if any. When
 *         the jobs in the specified pipeline fit on one page or when
 *         you've reached the last page of results, the value of
 *         NextPageToken is null.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listJobsByStatus(params, callback)
 *   Calls the ListJobsByStatus API operation.
 *   @param params [Object]
 *     * +Status+ - (*required*, <tt>String</tt>) To get information
 *       about all of the jobs associated with the current AWS account
 *       that have a given status, specify the following status:
 *       Submitted, Progressing, Completed, Canceled, or Error.
 *     * +Ascending+ - (<tt>String</tt>) To list jobs in chronological
 *       order by the date and time that they were submitted, enter true.
 *       To list jobs in reverse chronological order, enter false.
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
 *           the job. You use this value to get settings for the job or to
 *           delete the job.
 *         * +PipelineId+ - (<tt>String</tt>) The Id of the pipeline that
 *           you want &ET; to use for transcoding. The pipeline determines
 *           several settings, including the &S3; bucket from which &ET;
 *           gets the files to transcode and the bucket into which &ET;
 *           puts the transcoded files.
 *         * +Input+ - (<tt>Object</tt>) A section of the request or
 *           response body that provides information about the file that is
 *           being transcoded.
 *           * +Key+ - (<tt>String</tt>) The name of the file to transcode.
 *             Elsewhere in the body of the JSON block is the the ID of the
 *             pipeline to use for processing the job. The InputBucket
 *             object in that pipeline tells &ET; which &S3; bucket to get
 *             the file from. If the file name includes a prefix, such as
 *             cooking/lasagna.mpg, include the prefix in the key. If the
 *             file isn't in the specified bucket, &ET; returns an error.
 *           * +FrameRate+ - (<tt>String</tt>) The frame rate of the input
 *             file. If you want &ET; to automatically detect the frame
 *             rate of the input file, specify auto. If you want to specify
 *             the frame rate for the input file, enter one of the
 *             following values: 10, 15, 23.97, 24, 25, 29.97, 30, 60 If
 *             you specify a value other than auto, &ET; disables automatic
 *             detection of the frame rate.
 *           * +Resolution+ - (<tt>String</tt>) The resolution, in pixels,
 *             of the input file. If you want &ET; to automatically detect
 *             the resolution of the input file, specify auto. If you want
 *             to specify the resolution for the input file, enter values
 *             in the format width in pixels by height in pixels. If you
 *             specify a value other than auto, &ET; disables automatic
 *             detection of the resolution.
 *           * +AspectRatio+ - (<tt>String</tt>) The aspect ratio of the
 *             input file. If you want &ET; to automatically detect the
 *             aspect ratio of the input file, specify auto. If you want to
 *             specify the aspect ratio for the output file, enter one of
 *             the following values: 1:1, 4:3, 3:2, 16:9 If you specify a
 *             value other than auto, &ET; disables automatic detection of
 *             the aspect ratio.
 *           * +Interlaced+ - (<tt>String</tt>) Whether the input file is
 *             interlaced. If you want &ET; to automatically detect whether
 *             the input file is interlaced, specify auto. If you want to
 *             specify whether the input file is interlaced, enter one of
 *             the following values: true, false If you specify a value
 *             other than auto, &ET; disables automatic detection of
 *             interlacing.
 *           * +Container+ - (<tt>String</tt>) The container type for the
 *             input file. If you want &ET; to automatically detect the
 *             container type of the input file, specify auto. If you want
 *             to specify the container type for the input file, enter one
 *             of the following values: 3gp, asf, avi, divx, flv, mkv, mov,
 *             mp4, mpeg, mpeg-ps, mpeg-ts, mxf, ogg, vob, wav, webm
 *         * +Output+ - (<tt>Object</tt>) A section of the request or
 *           response body that provides information about the transcoded
 *           (target) file.
 *           * +Key+ - (<tt>String</tt>) The name to assign to the
 *             transcoded file. &ET; saves the file in the &S3; bucket
 *             specified by the OutputBucket object in the pipeline that is
 *             specified by the pipeline ID. If a file with the specified
 *             name already exists in the output bucket, the job fails.
 *           * +ThumbnailPattern+ - (<tt>String</tt>) Whether you want &ET;
 *             to create thumbnails for your videos and, if so, how you
 *             want &ET; to name the files. If you don't want &ET; to
 *             create thumbnails, specify "". If you do want &ET; to create
 *             thumbnails, specify the information that you want to include
 *             in the file name for each thumbnail. You can specify the
 *             following values in any sequence: <tt>{count}</tt>
 *             (Required): If you want to create thumbnails, you must
 *             include <tt>{count}</tt> in the ThumbnailPattern object.
 *             Wherever you specify <tt>{count}</tt>, &ET; adds a
 *             five-digit sequence number (beginning with 00001) to
 *             thumbnail file names. The number indicates where a given
 *             thumbnail appears in the sequence of thumbnails for a
 *             transcoded file. If you specify a literal value and/or
 *             <tt>{resolution}</tt> but you omit <tt>{count}</tt>, &ET;
 *             returns a validation error and does not create the job.
 *             Literal values (Optional): You can specify literal values
 *             anywhere in the ThumbnailPattern object. For example, you
 *             can include them as a file name prefix or as a delimiter
 *             between <tt>{resolution}</tt> and <tt>{count}</tt>.
 *             <tt>{resolution}</tt> (Optional): If you want &ET; to
 *             include the resolution in the file name, include
 *             <tt>{resolution}</tt> in the ThumbnailPattern object. When
 *             creating thumbnails, &ET; automatically saves the files in
 *             the format (.jpg or .png) that appears in the preset that
 *             you specified in the PresetID value of CreateJobOutput. &ET;
 *             also appends the applicable file name extension.
 *           * +Rotate+ - (<tt>String</tt>) The number of degrees clockwise
 *             by which you want &ET; to rotate the output relative to the
 *             input. Enter one of the following values: auto, 0, 90, 180,
 *             270 The value auto generally works only if the file that
 *             you're transcoding contains rotation metadata.
 *           * +PresetId+ - (<tt>String</tt>) The Id of the preset to use
 *             for this job. The preset determines the audio, video, and
 *             thumbnail settings that &ET; uses for transcoding.
 *           * +Status+ - (<tt>String</tt>) Status of the job. The value of
 *             Status is one of the following: Submitted, Progressing,
 *             Completed, Canceled, or Error.
 *           * +StatusDetail+ - (<tt>String</tt>) Information that further
 *             explains Status.
 *       * +NextPageToken+ - (<tt>String</tt>) A value that you use to
 *         access the second and subsequent pages of results, if any. When
 *         the jobs in the specified pipeline fit on one page or when
 *         you've reached the last page of results, the value of
 *         NextPageToken is null.
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
 *         * +Id+ - (<tt>String</tt>) The identifier for the pipeline. You
 *           use this value to identify the pipeline in which you want to
 *           perform a variety of operations, such as creating a job or a
 *           preset.
 *         * +Name+ - (<tt>String</tt>) The name of the pipeline. We
 *           recommend that the name be unique within the AWS account, but
 *           uniqueness is not enforced. Constraints: Maximum 40 characters
 *         * +Status+ - (<tt>String</tt>) The current status of the
 *           pipeline: active: The pipeline is processing jobs. paused: The
 *           pipeline is not currently processing jobs.
 *         * +InputBucket+ - (<tt>String</tt>) The &S3; bucket in which you
 *           saved the media files that you want to transcode.
 *         * +OutputBucket+ - (<tt>String</tt>) The &S3; bucket in which
 *           you want &ET; to save the transcoded files.
 *         * +Role+ - (<tt>String</tt>) The IAM Amazon Resource Name (ARN)
 *           for the role that you want &ET; to use to create the pipeline.
 *         * +Notifications+ - (<tt>Object</tt>) The &SNSlong; (&SNS;)
 *           topic that you want to notify to report job status. To receive
 *           notifications, you must also subscribe to the new topic in the
 *           &SNS; console. Progressing: The &SNSlong; (&SNS;) topic that
 *           you want to notify when &ET; has started to process the job.
 *           Completed: The &SNS; topic that you want to notify when &ET;
 *           has finished processing the job. Warning: The &SNS; topic that
 *           you want to notify when &ET; encounters a warning condition.
 *           Error: The &SNS; topic that you want to notify when &ET;
 *           encounters an error condition.
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
 *         * +Id+ - (<tt>String</tt>) Identifier for the new preset. You
 *           use this value to get settings for the preset or to delete it.
 *         * +Name+ - (<tt>String</tt>) The name of the preset.
 *         * +Description+ - (<tt>String</tt>) A description of the preset.
 *         * +Container+ - (<tt>String</tt>) The container type for the
 *           output file. This value must be mp4.
 *         * +Audio+ - (<tt>Object</tt>) A section of the response body
 *           that provides information about the audio preset values.
 *           * +Codec+ - (<tt>String</tt>) The audio codec for the output
 *             file. This value must be AAC.
 *           * +SampleRate+ - (<tt>String</tt>) The sample rate of the
 *             audio stream in the output file, in Hertz. Valid values
 *             include: auto, 22050, 32000, 44100, 48000, 96000 If you
 *             specify auto, &ET; automatically detects the sample rate.
 *           * +BitRate+ - (<tt>String</tt>) The bit rate of the audio
 *             stream in the output file, in kilobits/second. Enter an
 *             integer between 8 and 320, inclusive.
 *           * +Channels+ - (<tt>String</tt>) The number of audio channels
 *             in the output file. Valid values include: auto, 0, 1, 2 If
 *             you specify auto, &ET; automatically detects the number of
 *             channels in the input file.
 *         * +Video+ - (<tt>Object</tt>) A section of the response body
 *           that provides information about the video preset values.
 *           * +Codec+ - (<tt>String</tt>) The video codec for the output
 *             file. This value must be H.264.
 *           * +CodecOptions+ - (<tt>Object<String></tt>) Profile The H.264
 *             profile that you want to use for the output file. &ET;
 *             supports the following profiles: baseline: The profile most
 *             commonly used for videoconferencing and for mobile
 *             applications. main: The profile used for standard-definition
 *             digital TV broadcasts. high: The profile used for
 *             high-definition digital TV broadcasts and for Blu-ray discs.
 *             Level The H.264 level that you want to use for the output
 *             file. &ET; supports the following levels: 1, 1b, 1.1, 1.2,
 *             1.3, 2, 2.1, 2.2, 3, 3.1, 3.2, 4, 4.1 MaxReferenceFrames The
 *             maximum number of previously decoded frames to use as a
 *             reference for decoding future frames. Valid values are
 *             integers 0 through 16, but we recommend that you not use a
 *             value greater than the following: Min(Floor(Maximum decoded
 *             picture buffer in macroblocks * 256 / (Width in pixels *
 *             Height in pixels)), 16) where Width in pixels and Height in
 *             pixels represent the resolution of the output video and
 *             Maximum decoded picture buffer in macroblocks depends on the
 *             value of the Level object. (A macroblock is a block of
 *             pixels measuring 16x16.) Note that the calculation for
 *             maximum decoded picture buffer, which is similar to the
 *             calculation for maximum reference frames, uses macroblocks
 *             instead of pixels for the width and height of the video. To
 *             determine the value of maximum decoded picture buffer in
 *             macroblocks, see the following list (Level - Maximum decoded
 *             picture buffer): 1 - 396 1b - 396 1.1 - 900 1.2 - 2376 1.3 -
 *             2376 2 - 2376 2.1 - 4752 2.2 - 8100 3 - 8100 3.1 - 18000 3.2
 *             - 20480 4 - 32768 4.1 - 32768
 *           * +KeyframesMaxDist+ - (<tt>String</tt>) The maximum number of
 *             frames between key frames. Key frames are fully encoded
 *             frames; the frames between key frames are encoded based, in
 *             part, on the content of the key frames. The value is an
 *             integer formatted as a string; valid values are between 1
 *             and 100000, inclusive. A higher value results in higher
 *             compression but may also discernibly decrease video quality.
 *           * +FixedGOP+ - (<tt>String</tt>) Whether to use a fixed value
 *             for FixedGOP. Valid values are true and false: true: &ET;
 *             uses the value of KeyframesMaxDist for the distance between
 *             key frames (the number of frames in a group of pictures, or
 *             GOP). false: The distance between key frames can vary.
 *           * +BitRate+ - (<tt>String</tt>) The bit rate of the video
 *             stream in the output file, in kilobits/second. Valid values
 *             depend on the values of Level and Profile. We recommend that
 *             you specify a value less than or equal to the maximum
 *             H.264-compliant value listed in the following list for your
 *             level and profile: Level - Maximum video bit rate in
 *             kilobits/second (baseline and main Profile) : maximum video
 *             bit rate in kilobits/second (high Profile) 1 - 64 : 80 1b -
 *             128 : 160 1.1 - 192 : 240 1.2 - 384 : 480 1.3 - 768 : 960 2
 *             - 2000 : 2500 3 - 10000 : 12500 3.1 - 14000 : 17500 3.2 -
 *             20000 : 25000 4 - 20000 : 25000 4.1 - 50000 : 62500
 *           * +FrameRate+ - (<tt>String</tt>) The frames per second for
 *             the video stream in the output file. Valid values include:
 *             auto, 10, 15, 23.97, 24, 25, 29.97, 30, 60 If you specify
 *             auto, &ET; uses the detected frame rate of the input source.
 *             If you specify a frame rate, we recommend that you perform
 *             the following calculation: Frame rate = maximum recommended
 *             decoding speed in luma samples/second / (width in pixels *
 *             height in pixels) where: width in pixels and height in
 *             pixels represent the Resolution of the output video. maximum
 *             recommended decoding speed in Luma samples/second is less
 *             than or equal to the maximum value listed in the following
 *             table, based on the value that you specified for Level. The
 *             maximum recommended decoding speed in Luma samples/second
 *             for each level is described in the following list (Level -
 *             Decoding speed): 1 - 380160 1b - 380160 1.1 - 76800 1.2 -
 *             1536000 1.3 - 3041280 2 - 3041280 2.1 - 5068800 2.2 -
 *             5184000 3 - 10368000 3.1 - 27648000 3.2 - 55296000 4 -
 *             62914560 4.1 - 62914560
 *           * +Resolution+ - (<tt>String</tt>) The width and height of the
 *             video in the output file, in pixels. Valid values are auto
 *             and width x height: auto: &ET; attempts to preserve the
 *             width and height of the input file, subject to the following
 *             rules. width x height: The width and height of the output
 *             video in pixels. Note the following about specifying the
 *             width and height: The width must be an even integer between
 *             128 and 4096, inclusive. The height must be an even integer
 *             between 96 and 3072, inclusive. If you specify a resolution
 *             that is less than the resolution of the input file, &ET;
 *             rescales the output file to the lower resolution. If you
 *             specify a resolution that is greater than the resolution of
 *             the input file, &ET; rescales the output to the higher
 *             resolution. We recommend that you specify a resolution for
 *             which the product of width and height is less than or equal
 *             to the applicable value in the following list (List - Max
 *             width x height value): 1 - 25344 1b - 25344 1.1 - 101376 1.2
 *             - 101376 1.3 - 101376 2 - 101376 2.1 - 202752 2.2 - 404720 3
 *             - 404720 3.1 - 921600 3.2 - 1310720 4 - 2097152 4.1 -
 *             2097152
 *           * +AspectRatio+ - (<tt>String</tt>) The display aspect ratio
 *             of the video in the output file. Valid values include: auto,
 *             1:1, 4:3, 3:2, 16:9 If you specify auto, &ET; tries to
 *             preserve the aspect ratio of the input file. If you specify
 *             an aspect ratio for the output file that differs from aspect
 *             ratio of the input file, &ET; adds pillarboxing (black bars
 *             on the sides) or letterboxing (black bars on the top and
 *             bottom) to maintain the aspect ratio of the active region of
 *             the video.
 *         * +Thumbnails+ - (<tt>Object</tt>) A section of the response
 *           body that provides information about the thumbnail preset
 *           values, if any.
 *           * +Format+ - (<tt>String</tt>) The format of thumbnails, if
 *             any. Valid values are jpg and png. You specify whether you
 *             want &ET; to create thumbnails when you create a job.
 *           * +Interval+ - (<tt>String</tt>) The number of seconds between
 *             thumbnails. Specify an integer value.
 *           * +Resolution+ - (<tt>String</tt>) The width and height of
 *             thumbnail files in pixels. Specify a value in the format
 *             width x height where both values are even integers. The
 *             values cannot exceed the width and height that you specified
 *             in the Video:Resolution object.
 *           * +AspectRatio+ - (<tt>String</tt>) The aspect ratio of
 *             thumbnails. Valid values include: auto, 1:1, 4:3, 3:2, 16:9
 *             If you specify auto, &ET; tries to preserve the aspect ratio
 *             of the video in the output file.
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
 *           the job. You use this value to get settings for the job or to
 *           delete the job.
 *         * +PipelineId+ - (<tt>String</tt>) The Id of the pipeline that
 *           you want &ET; to use for transcoding. The pipeline determines
 *           several settings, including the &S3; bucket from which &ET;
 *           gets the files to transcode and the bucket into which &ET;
 *           puts the transcoded files.
 *         * +Input+ - (<tt>Object</tt>) A section of the request or
 *           response body that provides information about the file that is
 *           being transcoded.
 *           * +Key+ - (<tt>String</tt>) The name of the file to transcode.
 *             Elsewhere in the body of the JSON block is the the ID of the
 *             pipeline to use for processing the job. The InputBucket
 *             object in that pipeline tells &ET; which &S3; bucket to get
 *             the file from. If the file name includes a prefix, such as
 *             cooking/lasagna.mpg, include the prefix in the key. If the
 *             file isn't in the specified bucket, &ET; returns an error.
 *           * +FrameRate+ - (<tt>String</tt>) The frame rate of the input
 *             file. If you want &ET; to automatically detect the frame
 *             rate of the input file, specify auto. If you want to specify
 *             the frame rate for the input file, enter one of the
 *             following values: 10, 15, 23.97, 24, 25, 29.97, 30, 60 If
 *             you specify a value other than auto, &ET; disables automatic
 *             detection of the frame rate.
 *           * +Resolution+ - (<tt>String</tt>) The resolution, in pixels,
 *             of the input file. If you want &ET; to automatically detect
 *             the resolution of the input file, specify auto. If you want
 *             to specify the resolution for the input file, enter values
 *             in the format width in pixels by height in pixels. If you
 *             specify a value other than auto, &ET; disables automatic
 *             detection of the resolution.
 *           * +AspectRatio+ - (<tt>String</tt>) The aspect ratio of the
 *             input file. If you want &ET; to automatically detect the
 *             aspect ratio of the input file, specify auto. If you want to
 *             specify the aspect ratio for the output file, enter one of
 *             the following values: 1:1, 4:3, 3:2, 16:9 If you specify a
 *             value other than auto, &ET; disables automatic detection of
 *             the aspect ratio.
 *           * +Interlaced+ - (<tt>String</tt>) Whether the input file is
 *             interlaced. If you want &ET; to automatically detect whether
 *             the input file is interlaced, specify auto. If you want to
 *             specify whether the input file is interlaced, enter one of
 *             the following values: true, false If you specify a value
 *             other than auto, &ET; disables automatic detection of
 *             interlacing.
 *           * +Container+ - (<tt>String</tt>) The container type for the
 *             input file. If you want &ET; to automatically detect the
 *             container type of the input file, specify auto. If you want
 *             to specify the container type for the input file, enter one
 *             of the following values: 3gp, asf, avi, divx, flv, mkv, mov,
 *             mp4, mpeg, mpeg-ps, mpeg-ts, mxf, ogg, vob, wav, webm
 *         * +Output+ - (<tt>Object</tt>) A section of the request or
 *           response body that provides information about the transcoded
 *           (target) file.
 *           * +Key+ - (<tt>String</tt>) The name to assign to the
 *             transcoded file. &ET; saves the file in the &S3; bucket
 *             specified by the OutputBucket object in the pipeline that is
 *             specified by the pipeline ID. If a file with the specified
 *             name already exists in the output bucket, the job fails.
 *           * +ThumbnailPattern+ - (<tt>String</tt>) Whether you want &ET;
 *             to create thumbnails for your videos and, if so, how you
 *             want &ET; to name the files. If you don't want &ET; to
 *             create thumbnails, specify "". If you do want &ET; to create
 *             thumbnails, specify the information that you want to include
 *             in the file name for each thumbnail. You can specify the
 *             following values in any sequence: <tt>{count}</tt>
 *             (Required): If you want to create thumbnails, you must
 *             include <tt>{count}</tt> in the ThumbnailPattern object.
 *             Wherever you specify <tt>{count}</tt>, &ET; adds a
 *             five-digit sequence number (beginning with 00001) to
 *             thumbnail file names. The number indicates where a given
 *             thumbnail appears in the sequence of thumbnails for a
 *             transcoded file. If you specify a literal value and/or
 *             <tt>{resolution}</tt> but you omit <tt>{count}</tt>, &ET;
 *             returns a validation error and does not create the job.
 *             Literal values (Optional): You can specify literal values
 *             anywhere in the ThumbnailPattern object. For example, you
 *             can include them as a file name prefix or as a delimiter
 *             between <tt>{resolution}</tt> and <tt>{count}</tt>.
 *             <tt>{resolution}</tt> (Optional): If you want &ET; to
 *             include the resolution in the file name, include
 *             <tt>{resolution}</tt> in the ThumbnailPattern object. When
 *             creating thumbnails, &ET; automatically saves the files in
 *             the format (.jpg or .png) that appears in the preset that
 *             you specified in the PresetID value of CreateJobOutput. &ET;
 *             also appends the applicable file name extension.
 *           * +Rotate+ - (<tt>String</tt>) The number of degrees clockwise
 *             by which you want &ET; to rotate the output relative to the
 *             input. Enter one of the following values: auto, 0, 90, 180,
 *             270 The value auto generally works only if the file that
 *             you're transcoding contains rotation metadata.
 *           * +PresetId+ - (<tt>String</tt>) The Id of the preset to use
 *             for this job. The preset determines the audio, video, and
 *             thumbnail settings that &ET; uses for transcoding.
 *           * +Status+ - (<tt>String</tt>) Status of the job. The value of
 *             Status is one of the following: Submitted, Progressing,
 *             Completed, Canceled, or Error.
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
 *         * +Id+ - (<tt>String</tt>) The identifier for the pipeline. You
 *           use this value to identify the pipeline in which you want to
 *           perform a variety of operations, such as creating a job or a
 *           preset.
 *         * +Name+ - (<tt>String</tt>) The name of the pipeline. We
 *           recommend that the name be unique within the AWS account, but
 *           uniqueness is not enforced. Constraints: Maximum 40 characters
 *         * +Status+ - (<tt>String</tt>) The current status of the
 *           pipeline: active: The pipeline is processing jobs. paused: The
 *           pipeline is not currently processing jobs.
 *         * +InputBucket+ - (<tt>String</tt>) The &S3; bucket in which you
 *           saved the media files that you want to transcode.
 *         * +OutputBucket+ - (<tt>String</tt>) The &S3; bucket in which
 *           you want &ET; to save the transcoded files.
 *         * +Role+ - (<tt>String</tt>) The IAM Amazon Resource Name (ARN)
 *           for the role that you want &ET; to use to create the pipeline.
 *         * +Notifications+ - (<tt>Object</tt>) The &SNSlong; (&SNS;)
 *           topic that you want to notify to report job status. To receive
 *           notifications, you must also subscribe to the new topic in the
 *           &SNS; console. Progressing: The &SNSlong; (&SNS;) topic that
 *           you want to notify when &ET; has started to process the job.
 *           Completed: The &SNS; topic that you want to notify when &ET;
 *           has finished processing the job. Warning: The &SNS; topic that
 *           you want to notify when &ET; encounters a warning condition.
 *           Error: The &SNS; topic that you want to notify when &ET;
 *           encounters an error condition.
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
 *         * +Id+ - (<tt>String</tt>) Identifier for the new preset. You
 *           use this value to get settings for the preset or to delete it.
 *         * +Name+ - (<tt>String</tt>) The name of the preset.
 *         * +Description+ - (<tt>String</tt>) A description of the preset.
 *         * +Container+ - (<tt>String</tt>) The container type for the
 *           output file. This value must be mp4.
 *         * +Audio+ - (<tt>Object</tt>) A section of the response body
 *           that provides information about the audio preset values.
 *           * +Codec+ - (<tt>String</tt>) The audio codec for the output
 *             file. This value must be AAC.
 *           * +SampleRate+ - (<tt>String</tt>) The sample rate of the
 *             audio stream in the output file, in Hertz. Valid values
 *             include: auto, 22050, 32000, 44100, 48000, 96000 If you
 *             specify auto, &ET; automatically detects the sample rate.
 *           * +BitRate+ - (<tt>String</tt>) The bit rate of the audio
 *             stream in the output file, in kilobits/second. Enter an
 *             integer between 8 and 320, inclusive.
 *           * +Channels+ - (<tt>String</tt>) The number of audio channels
 *             in the output file. Valid values include: auto, 0, 1, 2 If
 *             you specify auto, &ET; automatically detects the number of
 *             channels in the input file.
 *         * +Video+ - (<tt>Object</tt>) A section of the response body
 *           that provides information about the video preset values.
 *           * +Codec+ - (<tt>String</tt>) The video codec for the output
 *             file. This value must be H.264.
 *           * +CodecOptions+ - (<tt>Object<String></tt>) Profile The H.264
 *             profile that you want to use for the output file. &ET;
 *             supports the following profiles: baseline: The profile most
 *             commonly used for videoconferencing and for mobile
 *             applications. main: The profile used for standard-definition
 *             digital TV broadcasts. high: The profile used for
 *             high-definition digital TV broadcasts and for Blu-ray discs.
 *             Level The H.264 level that you want to use for the output
 *             file. &ET; supports the following levels: 1, 1b, 1.1, 1.2,
 *             1.3, 2, 2.1, 2.2, 3, 3.1, 3.2, 4, 4.1 MaxReferenceFrames The
 *             maximum number of previously decoded frames to use as a
 *             reference for decoding future frames. Valid values are
 *             integers 0 through 16, but we recommend that you not use a
 *             value greater than the following: Min(Floor(Maximum decoded
 *             picture buffer in macroblocks * 256 / (Width in pixels *
 *             Height in pixels)), 16) where Width in pixels and Height in
 *             pixels represent the resolution of the output video and
 *             Maximum decoded picture buffer in macroblocks depends on the
 *             value of the Level object. (A macroblock is a block of
 *             pixels measuring 16x16.) Note that the calculation for
 *             maximum decoded picture buffer, which is similar to the
 *             calculation for maximum reference frames, uses macroblocks
 *             instead of pixels for the width and height of the video. To
 *             determine the value of maximum decoded picture buffer in
 *             macroblocks, see the following list (Level - Maximum decoded
 *             picture buffer): 1 - 396 1b - 396 1.1 - 900 1.2 - 2376 1.3 -
 *             2376 2 - 2376 2.1 - 4752 2.2 - 8100 3 - 8100 3.1 - 18000 3.2
 *             - 20480 4 - 32768 4.1 - 32768
 *           * +KeyframesMaxDist+ - (<tt>String</tt>) The maximum number of
 *             frames between key frames. Key frames are fully encoded
 *             frames; the frames between key frames are encoded based, in
 *             part, on the content of the key frames. The value is an
 *             integer formatted as a string; valid values are between 1
 *             and 100000, inclusive. A higher value results in higher
 *             compression but may also discernibly decrease video quality.
 *           * +FixedGOP+ - (<tt>String</tt>) Whether to use a fixed value
 *             for FixedGOP. Valid values are true and false: true: &ET;
 *             uses the value of KeyframesMaxDist for the distance between
 *             key frames (the number of frames in a group of pictures, or
 *             GOP). false: The distance between key frames can vary.
 *           * +BitRate+ - (<tt>String</tt>) The bit rate of the video
 *             stream in the output file, in kilobits/second. Valid values
 *             depend on the values of Level and Profile. We recommend that
 *             you specify a value less than or equal to the maximum
 *             H.264-compliant value listed in the following list for your
 *             level and profile: Level - Maximum video bit rate in
 *             kilobits/second (baseline and main Profile) : maximum video
 *             bit rate in kilobits/second (high Profile) 1 - 64 : 80 1b -
 *             128 : 160 1.1 - 192 : 240 1.2 - 384 : 480 1.3 - 768 : 960 2
 *             - 2000 : 2500 3 - 10000 : 12500 3.1 - 14000 : 17500 3.2 -
 *             20000 : 25000 4 - 20000 : 25000 4.1 - 50000 : 62500
 *           * +FrameRate+ - (<tt>String</tt>) The frames per second for
 *             the video stream in the output file. Valid values include:
 *             auto, 10, 15, 23.97, 24, 25, 29.97, 30, 60 If you specify
 *             auto, &ET; uses the detected frame rate of the input source.
 *             If you specify a frame rate, we recommend that you perform
 *             the following calculation: Frame rate = maximum recommended
 *             decoding speed in luma samples/second / (width in pixels *
 *             height in pixels) where: width in pixels and height in
 *             pixels represent the Resolution of the output video. maximum
 *             recommended decoding speed in Luma samples/second is less
 *             than or equal to the maximum value listed in the following
 *             table, based on the value that you specified for Level. The
 *             maximum recommended decoding speed in Luma samples/second
 *             for each level is described in the following list (Level -
 *             Decoding speed): 1 - 380160 1b - 380160 1.1 - 76800 1.2 -
 *             1536000 1.3 - 3041280 2 - 3041280 2.1 - 5068800 2.2 -
 *             5184000 3 - 10368000 3.1 - 27648000 3.2 - 55296000 4 -
 *             62914560 4.1 - 62914560
 *           * +Resolution+ - (<tt>String</tt>) The width and height of the
 *             video in the output file, in pixels. Valid values are auto
 *             and width x height: auto: &ET; attempts to preserve the
 *             width and height of the input file, subject to the following
 *             rules. width x height: The width and height of the output
 *             video in pixels. Note the following about specifying the
 *             width and height: The width must be an even integer between
 *             128 and 4096, inclusive. The height must be an even integer
 *             between 96 and 3072, inclusive. If you specify a resolution
 *             that is less than the resolution of the input file, &ET;
 *             rescales the output file to the lower resolution. If you
 *             specify a resolution that is greater than the resolution of
 *             the input file, &ET; rescales the output to the higher
 *             resolution. We recommend that you specify a resolution for
 *             which the product of width and height is less than or equal
 *             to the applicable value in the following list (List - Max
 *             width x height value): 1 - 25344 1b - 25344 1.1 - 101376 1.2
 *             - 101376 1.3 - 101376 2 - 101376 2.1 - 202752 2.2 - 404720 3
 *             - 404720 3.1 - 921600 3.2 - 1310720 4 - 2097152 4.1 -
 *             2097152
 *           * +AspectRatio+ - (<tt>String</tt>) The display aspect ratio
 *             of the video in the output file. Valid values include: auto,
 *             1:1, 4:3, 3:2, 16:9 If you specify auto, &ET; tries to
 *             preserve the aspect ratio of the input file. If you specify
 *             an aspect ratio for the output file that differs from aspect
 *             ratio of the input file, &ET; adds pillarboxing (black bars
 *             on the sides) or letterboxing (black bars on the top and
 *             bottom) to maintain the aspect ratio of the active region of
 *             the video.
 *         * +Thumbnails+ - (<tt>Object</tt>) A section of the response
 *           body that provides information about the thumbnail preset
 *           values, if any.
 *           * +Format+ - (<tt>String</tt>) The format of thumbnails, if
 *             any. Valid values are jpg and png. You specify whether you
 *             want &ET; to create thumbnails when you create a job.
 *           * +Interval+ - (<tt>String</tt>) The number of seconds between
 *             thumbnails. Specify an integer value.
 *           * +Resolution+ - (<tt>String</tt>) The width and height of
 *             thumbnail files in pixels. Specify a value in the format
 *             width x height where both values are even integers. The
 *             values cannot exceed the width and height that you specified
 *             in the Video:Resolution object.
 *           * +AspectRatio+ - (<tt>String</tt>) The aspect ratio of
 *             thumbnails. Valid values include: auto, 1:1, 4:3, 3:2, 16:9
 *             If you specify auto, &ET; tries to preserve the aspect ratio
 *             of the video in the output file.
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
 *       Name (ARN) for the role that you want Elastic Transcoder to use
 *       to create the pipeline.
 *     * +InputBucket+ - (*required*, <tt>String</tt>) The &S3; bucket in
 *       which you saved the media files that you want to transcode.
 *     * +OutputBucket+ - (*required*, <tt>String</tt>) The &S3; bucket
 *       in which you want &ET; to save the transcoded files.
 *     * +Topics+ - (*required*, <tt>Array<String></tt>) The &SNSlong;
 *       (&SNS;) topics that you want to notify to report job status.
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
 *         successful, this value is true.
 *       * +Messages+ - (<tt>Array<String></tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method updatePipelineNotifications(params, callback)
 *   Calls the UpdatePipelineNotifications API operation.
 *   @param params [Object]
 *     * +Id+ - (*required*, <tt>String</tt>) The identifier of the
 *       pipeline for which you want to change notification settings.
 *     * +Notifications+ - (*required*, <tt>Object</tt>) The &SNSlong;
 *       (&SNS;) topic that you want to notify to report job status. To
 *       receive notifications, you must also subscribe to the new topic
 *       in the &SNS; console. Progressing: The &SNSlong; (&SNS;) topic
 *       that you want to notify when &ET; has started to process the
 *       job. Completed: The &SNS; topic that you want to notify when
 *       &ET; has finished processing the job. Warning: The &SNS; topic
 *       that you want to notify when &ET; encounters a warning
 *       condition. Error: The &SNS; topic that you want to notify when
 *       &ET; encounters an error condition.
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
 *         * +Id+ - (<tt>String</tt>) The identifier for the pipeline. You
 *           use this value to identify the pipeline in which you want to
 *           perform a variety of operations, such as creating a job or a
 *           preset.
 *         * +Name+ - (<tt>String</tt>) The name of the pipeline. We
 *           recommend that the name be unique within the AWS account, but
 *           uniqueness is not enforced. Constraints: Maximum 40 characters
 *         * +Status+ - (<tt>String</tt>) The current status of the
 *           pipeline: active: The pipeline is processing jobs. paused: The
 *           pipeline is not currently processing jobs.
 *         * +InputBucket+ - (<tt>String</tt>) The &S3; bucket in which you
 *           saved the media files that you want to transcode.
 *         * +OutputBucket+ - (<tt>String</tt>) The &S3; bucket in which
 *           you want &ET; to save the transcoded files.
 *         * +Role+ - (<tt>String</tt>) The IAM Amazon Resource Name (ARN)
 *           for the role that you want &ET; to use to create the pipeline.
 *         * +Notifications+ - (<tt>Object</tt>) The &SNSlong; (&SNS;)
 *           topic that you want to notify to report job status. To receive
 *           notifications, you must also subscribe to the new topic in the
 *           &SNS; console. Progressing: The &SNSlong; (&SNS;) topic that
 *           you want to notify when &ET; has started to process the job.
 *           Completed: The &SNS; topic that you want to notify when &ET;
 *           has finished processing the job. Warning: The &SNS; topic that
 *           you want to notify when &ET; encounters a warning condition.
 *           Error: The &SNS; topic that you want to notify when &ET;
 *           encounters an error condition.
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
 *       pipeline: active: Enable the pipeline, so it starts processing
 *       jobs. paused: Disable the pipeline, so it stops processing jobs.
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
 *         * +Id+ - (<tt>String</tt>) The identifier for the pipeline. You
 *           use this value to identify the pipeline in which you want to
 *           perform a variety of operations, such as creating a job or a
 *           preset.
 *         * +Name+ - (<tt>String</tt>) The name of the pipeline. We
 *           recommend that the name be unique within the AWS account, but
 *           uniqueness is not enforced. Constraints: Maximum 40 characters
 *         * +Status+ - (<tt>String</tt>) The current status of the
 *           pipeline: active: The pipeline is processing jobs. paused: The
 *           pipeline is not currently processing jobs.
 *         * +InputBucket+ - (<tt>String</tt>) The &S3; bucket in which you
 *           saved the media files that you want to transcode.
 *         * +OutputBucket+ - (<tt>String</tt>) The &S3; bucket in which
 *           you want &ET; to save the transcoded files.
 *         * +Role+ - (<tt>String</tt>) The IAM Amazon Resource Name (ARN)
 *           for the role that you want &ET; to use to create the pipeline.
 *         * +Notifications+ - (<tt>Object</tt>) The &SNSlong; (&SNS;)
 *           topic that you want to notify to report job status. To receive
 *           notifications, you must also subscribe to the new topic in the
 *           &SNS; console. Progressing: The &SNSlong; (&SNS;) topic that
 *           you want to notify when &ET; has started to process the job.
 *           Completed: The &SNS; topic that you want to notify when &ET;
 *           has finished processing the job. Warning: The &SNS; topic that
 *           you want to notify when &ET; encounters a warning condition.
 *           Error: The &SNS; topic that you want to notify when &ET;
 *           encounters an error condition.
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
