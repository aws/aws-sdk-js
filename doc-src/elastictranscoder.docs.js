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
 * Constructs a service interface and a low-level {Client}.  Use the `client`
 * property to make API calls.  Each API operation is exposed as a function on
 * the `client`.
 *
 * ### Sending a Request Using ElasticTranscoder
 *
 * ```js
 * svc = new AWS.ElasticTranscoder();
 * svc.client.OPERATION_NAME(params, function (err, data) {
 *   if (err) {
 *     console.log(err); // an error occurred
 *   } else {
 *     console.log(data); // successful response
 *   }
 * });
 * ```
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
 *     * `Id` &mdash; **required** &mdash; (`String`) The identifier of
 *       the job that you want to delete. To get a list of the jobs
 *       (including their jobId) that have a status of Submitted, use the
 *       ListJobsByStatus API action.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createJob(params, callback)
 *   Calls the CreateJob API operation.
 *   @param params [Object]
 *     * `PipelineId` &mdash; **required** &mdash; (`String`) The Id of
 *       the pipeline that you want Elastic Transcoder to use for
 *       transcoding. The pipeline determines several settings, including
 *       the Amazon S3 bucket from which Elastic Transcoder gets the
 *       files to transcode and the bucket into which Elastic Transcoder
 *       puts the transcoded files.
 *     * `Input` &mdash; **required** &mdash; (`Object`) A section of the
 *       request body that provides information about the file that is
 *       being transcoded.
 *       * `Key` &mdash; (`String`) The name of the file to transcode.
 *         Elsewhere in the body of the JSON block is the the ID of the
 *         pipeline to use for processing the job. The InputBucket object
 *         in that pipeline tells Elastic Transcoder which Amazon S3
 *         bucket to get the file from. If the file name includes a
 *         prefix, such as cooking/lasagna.mpg, include the prefix in the
 *         key. If the file isn't in the specified bucket, Elastic
 *         Transcoder returns an error.
 *       * `FrameRate` &mdash; (`String`) The frame rate of the input
 *         file. If you want Elastic Transcoder to automatically detect
 *         the frame rate of the input file, specify auto. If you want to
 *         specify the frame rate for the input file, enter one of the
 *         following values: 10, 15, 23.97, 24, 25, 29.97, 30, 60 If you
 *         specify a value other than auto, Elastic Transcoder disables
 *         automatic detection of the frame rate.
 *       * `Resolution` &mdash; (`String`) The resolution, in pixels, of
 *         the input file. If you want Elastic Transcoder to
 *         automatically detect the resolution of the input file, specify
 *         auto. If you want to specify the resolution for the input
 *         file, enter values in the format width in pixels by height in
 *         pixels. If you specify a value other than auto, Elastic
 *         Transcoder disables automatic detection of the resolution.
 *       * `AspectRatio` &mdash; (`String`) The aspect ratio of the input
 *         file. If you want Elastic Transcoder to automatically detect
 *         the aspect ratio of the input file, specify auto. If you want
 *         to specify the aspect ratio for the output file, enter one of
 *         the following values: 1:1, 4:3, 3:2, 16:9 If you specify a
 *         value other than auto, Elastic Transcoder disables automatic
 *         detection of the aspect ratio.
 *       * `Interlaced` &mdash; (`String`) Whether the input file is
 *         interlaced. If you want Elastic Transcoder to automatically
 *         detect whether the input file is interlaced, specify auto. If
 *         you want to specify whether the input file is interlaced,
 *         enter one of the following values: true, false If you specify
 *         a value other than auto, Elastic Transcoder disables automatic
 *         detection of interlacing.
 *       * `Container` &mdash; (`String`) The container type for the
 *         input file. If you want Elastic Transcoder to automatically
 *         detect the container type of the input file, specify auto. If
 *         you want to specify the container type for the input file,
 *         enter one of the following values: 3gp, asf, avi, divx, flv,
 *         mkv, mov, mp4, mpeg, mpeg-ps, mpeg-ts, mxf, ogg, vob, wav,
 *         webm
 *     * `Output` &mdash; **required** &mdash; (`Object`) A section of
 *       the request body that provides information about the transcoded
 *       (target) file.
 *       * `Key` &mdash; (`String`) The name to assign to the transcoded
 *         file. Elastic Transcoder saves the file in the Amazon S3
 *         bucket specified by the OutputBucket object in the pipeline
 *         that is specified by the pipeline ID. If a file with the
 *         specified name already exists in the output bucket, the job
 *         fails.
 *       * `ThumbnailPattern` &mdash; (`String`) Whether you want Elastic
 *         Transcoder to create thumbnails for your videos and, if so,
 *         how you want Elastic Transcoder to name the files. If you
 *         don't want Elastic Transcoder to create thumbnails, specify
 *         "". If you do want Elastic Transcoder to create thumbnails,
 *         specify the information that you want to include in the file
 *         name for each thumbnail. You can specify the following values
 *         in any sequence: `{count}` (Required): If you want to create
 *         thumbnails, you must include `{count}` in the ThumbnailPattern
 *         object. Wherever you specify `{count}`, Elastic Transcoder
 *         adds a five-digit sequence number (beginning with 00001) to
 *         thumbnail file names. The number indicates where a given
 *         thumbnail appears in the sequence of thumbnails for a
 *         transcoded file. If you specify a literal value and/or
 *         `{resolution}` but you omit `{count}`, Elastic Transcoder
 *         returns a validation error and does not create the job.
 *         Literal values (Optional): You can specify literal values
 *         anywhere in the ThumbnailPattern object. For example, you can
 *         include them as a file name prefix or as a delimiter between
 *         `{resolution}` and `{count}`. `{resolution}` (Optional): If
 *         you want Elastic Transcoder to include the resolution in the
 *         file name, include `{resolution}` in the ThumbnailPattern
 *         object. When creating thumbnails, Elastic Transcoder
 *         automatically saves the files in the format (.jpg or .png)
 *         that appears in the preset that you specified in the PresetID
 *         value of CreateJobOutput. Elastic Transcoder also appends the
 *         applicable file name extension.
 *       * `Rotate` &mdash; (`String`) The number of degrees clockwise by
 *         which you want Elastic Transcoder to rotate the output
 *         relative to the input. Enter one of the following values:
 *         auto, 0, 90, 180, 270 The value auto generally works only if
 *         the file that you're transcoding contains rotation metadata.
 *       * `PresetId` &mdash; (`String`) The Id of the preset to use for
 *         this job. The preset determines the audio, video, and
 *         thumbnail settings that Elastic Transcoder uses for
 *         transcoding.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `Job` &mdash; (`Object`) A section of the response body that
 *         provides information about the job that is created.
 *         * `Id` &mdash; (`String`) The identifier that Elastic Transcoder
 *           assigned to the job. You use this value to get settings for
 *           the job or to delete the job.
 *         * `PipelineId` &mdash; (`String`) The Id of the pipeline that
 *           you want Elastic Transcoder to use for transcoding. The
 *           pipeline determines several settings, including the Amazon S3
 *           bucket from which Elastic Transcoder gets the files to
 *           transcode and the bucket into which Elastic Transcoder puts
 *           the transcoded files.
 *         * `Input` &mdash; (`Object`) A section of the request or
 *           response body that provides information about the file that is
 *           being transcoded.
 *           * `Key` &mdash; (`String`) The name of the file to transcode.
 *             Elsewhere in the body of the JSON block is the the ID of the
 *             pipeline to use for processing the job. The InputBucket
 *             object in that pipeline tells Elastic Transcoder which
 *             Amazon S3 bucket to get the file from. If the file name
 *             includes a prefix, such as cooking/lasagna.mpg, include the
 *             prefix in the key. If the file isn't in the specified
 *             bucket, Elastic Transcoder returns an error.
 *           * `FrameRate` &mdash; (`String`) The frame rate of the input
 *             file. If you want Elastic Transcoder to automatically detect
 *             the frame rate of the input file, specify auto. If you want
 *             to specify the frame rate for the input file, enter one of
 *             the following values: 10, 15, 23.97, 24, 25, 29.97, 30, 60
 *             If you specify a value other than auto, Elastic Transcoder
 *             disables automatic detection of the frame rate.
 *           * `Resolution` &mdash; (`String`) The resolution, in pixels,
 *             of the input file. If you want Elastic Transcoder to
 *             automatically detect the resolution of the input file,
 *             specify auto. If you want to specify the resolution for the
 *             input file, enter values in the format width in pixels by
 *             height in pixels. If you specify a value other than auto,
 *             Elastic Transcoder disables automatic detection of the
 *             resolution.
 *           * `AspectRatio` &mdash; (`String`) The aspect ratio of the
 *             input file. If you want Elastic Transcoder to automatically
 *             detect the aspect ratio of the input file, specify auto. If
 *             you want to specify the aspect ratio for the output file,
 *             enter one of the following values: 1:1, 4:3, 3:2, 16:9 If
 *             you specify a value other than auto, Elastic Transcoder
 *             disables automatic detection of the aspect ratio.
 *           * `Interlaced` &mdash; (`String`) Whether the input file is
 *             interlaced. If you want Elastic Transcoder to automatically
 *             detect whether the input file is interlaced, specify auto.
 *             If you want to specify whether the input file is interlaced,
 *             enter one of the following values: true, false If you
 *             specify a value other than auto, Elastic Transcoder disables
 *             automatic detection of interlacing.
 *           * `Container` &mdash; (`String`) The container type for the
 *             input file. If you want Elastic Transcoder to automatically
 *             detect the container type of the input file, specify auto.
 *             If you want to specify the container type for the input
 *             file, enter one of the following values: 3gp, asf, avi,
 *             divx, flv, mkv, mov, mp4, mpeg, mpeg-ps, mpeg-ts, mxf, ogg,
 *             vob, wav, webm
 *         * `Output` &mdash; (`Object`) A section of the request or
 *           response body that provides information about the transcoded
 *           (target) file.
 *           * `Key` &mdash; (`String`) The name to assign to the
 *             transcoded file. Elastic Transcoder saves the file in the
 *             Amazon S3 bucket specified by the OutputBucket object in the
 *             pipeline that is specified by the pipeline ID. If a file
 *             with the specified name already exists in the output bucket,
 *             the job fails.
 *           * `ThumbnailPattern` &mdash; (`String`) Whether you want
 *             Elastic Transcoder to create thumbnails for your videos and,
 *             if so, how you want Elastic Transcoder to name the files. If
 *             you don't want Elastic Transcoder to create thumbnails,
 *             specify "". If you do want Elastic Transcoder to create
 *             thumbnails, specify the information that you want to include
 *             in the file name for each thumbnail. You can specify the
 *             following values in any sequence: `{count}` (Required): If
 *             you want to create thumbnails, you must include `{count}` in
 *             the ThumbnailPattern object. Wherever you specify `{count}`,
 *             Elastic Transcoder adds a five-digit sequence number
 *             (beginning with 00001) to thumbnail file names. The number
 *             indicates where a given thumbnail appears in the sequence of
 *             thumbnails for a transcoded file. If you specify a literal
 *             value and/or `{resolution}` but you omit `{count}`, Elastic
 *             Transcoder returns a validation error and does not create
 *             the job. Literal values (Optional): You can specify literal
 *             values anywhere in the ThumbnailPattern object. For example,
 *             you can include them as a file name prefix or as a delimiter
 *             between `{resolution}` and `{count}`. `{resolution}`
 *             (Optional): If you want Elastic Transcoder to include the
 *             resolution in the file name, include `{resolution}` in the
 *             ThumbnailPattern object. When creating thumbnails, Elastic
 *             Transcoder automatically saves the files in the format (.jpg
 *             or .png) that appears in the preset that you specified in
 *             the PresetID value of CreateJobOutput. Elastic Transcoder
 *             also appends the applicable file name extension.
 *           * `Rotate` &mdash; (`String`) The number of degrees clockwise
 *             by which you want Elastic Transcoder to rotate the output
 *             relative to the input. Enter one of the following values:
 *             auto, 0, 90, 180, 270 The value auto generally works only if
 *             the file that you're transcoding contains rotation metadata.
 *           * `PresetId` &mdash; (`String`) The Id of the preset to use
 *             for this job. The preset determines the audio, video, and
 *             thumbnail settings that Elastic Transcoder uses for
 *             transcoding.
 *           * `Status` &mdash; (`String`) Status of the job. The value of
 *             Status is one of the following: Submitted, Progressing,
 *             Completed, Canceled, or Error.
 *           * `StatusDetail` &mdash; (`String`) Information that further
 *             explains Status.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createPipeline(params, callback)
 *   Calls the CreatePipeline API operation.
 *   @param params [Object]
 *     * `Name` &mdash; **required** &mdash; (`String`) The name of the
 *       pipeline. We recommend that the name be unique within the AWS
 *       account, but uniqueness is not enforced. Constraints: Maximum 40
 *       characters.
 *     * `InputBucket` &mdash; **required** &mdash; (`String`) The Amazon
 *       S3 bucket in which you saved the media files that you want to
 *       transcode.
 *     * `OutputBucket` &mdash; **required** &mdash; (`String`) The
 *       Amazon S3 bucket in which you want Elastic Transcoder to save
 *       the transcoded files.
 *     * `Role` &mdash; **required** &mdash; (`String`) The IAM Amazon
 *       Resource Name (ARN) for the role that you want Elastic
 *       Transcoder to use to create the pipeline.
 *     * `Notifications` &mdash; **required** &mdash; (`Object`) The
 *       Amazon Simple Notification Service (Amazon SNS) topic that you
 *       want to notify to report job status. To receive notifications,
 *       you must also subscribe to the new topic in the Amazon SNS
 *       console. Progressing: The Amazon Simple Notification Service
 *       (Amazon SNS) topic that you want to notify when Elastic
 *       Transcoder has started to process the job. Completed: The Amazon
 *       SNS topic that you want to notify when Elastic Transcoder has
 *       finished processing the job. Warning: The Amazon SNS topic that
 *       you want to notify when Elastic Transcoder encounters a warning
 *       condition. Error: The Amazon SNS topic that you want to notify
 *       when Elastic Transcoder encounters an error condition.
 *       * `Progressing` &mdash; (`String`) The Amazon Simple
 *         Notification Service (Amazon SNS) topic that you want to
 *         notify when Elastic Transcoder has started to process the job.
 *       * `Completed` &mdash; (`String`) The Amazon SNS topic that you
 *         want to notify when Elastic Transcoder has finished processing
 *         the job.
 *       * `Warning` &mdash; (`String`) The Amazon SNS topic that you
 *         want to notify when Elastic Transcoder encounters a warning
 *         condition.
 *       * `Error` &mdash; (`String`) The Amazon SNS topic that you want
 *         to notify when Elastic Transcoder encounters an error
 *         condition.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `Pipeline` &mdash; (`Object`) A section of the response body
 *         that provides information about the pipeline that is created.
 *         * `Id` &mdash; (`String`) The identifier for the pipeline. You
 *           use this value to identify the pipeline in which you want to
 *           perform a variety of operations, such as creating a job or a
 *           preset.
 *         * `Name` &mdash; (`String`) The name of the pipeline. We
 *           recommend that the name be unique within the AWS account, but
 *           uniqueness is not enforced. Constraints: Maximum 40 characters
 *         * `Status` &mdash; (`String`) The current status of the
 *           pipeline: active: The pipeline is processing jobs. paused: The
 *           pipeline is not currently processing jobs.
 *         * `InputBucket` &mdash; (`String`) The Amazon S3 bucket in which
 *           you saved the media files that you want to transcode.
 *         * `OutputBucket` &mdash; (`String`) The Amazon S3 bucket in
 *           which you want Elastic Transcoder to save the transcoded
 *           files.
 *         * `Role` &mdash; (`String`) The IAM Amazon Resource Name (ARN)
 *           for the role that you want Elastic Transcoder to use to create
 *           the pipeline.
 *         * `Notifications` &mdash; (`Object`) The Amazon Simple
 *           Notification Service (Amazon SNS) topic that you want to
 *           notify to report job status. To receive notifications, you
 *           must also subscribe to the new topic in the Amazon SNS
 *           console. Progressing: The Amazon Simple Notification Service
 *           (Amazon SNS) topic that you want to notify when Elastic
 *           Transcoder has started to process the job. Completed: The
 *           Amazon SNS topic that you want to notify when Elastic
 *           Transcoder has finished processing the job. Warning: The
 *           Amazon SNS topic that you want to notify when Elastic
 *           Transcoder encounters a warning condition. Error: The Amazon
 *           SNS topic that you want to notify when Elastic Transcoder
 *           encounters an error condition.
 *           * `Progressing` &mdash; (`String`) The Amazon Simple
 *             Notification Service (Amazon SNS) topic that you want to
 *             notify when Elastic Transcoder has started to process the
 *             job.
 *           * `Completed` &mdash; (`String`) The Amazon SNS topic that you
 *             want to notify when Elastic Transcoder has finished
 *             processing the job.
 *           * `Warning` &mdash; (`String`) The Amazon SNS topic that you
 *             want to notify when Elastic Transcoder encounters a warning
 *             condition.
 *           * `Error` &mdash; (`String`) The Amazon SNS topic that you
 *             want to notify when Elastic Transcoder encounters an error
 *             condition.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createPreset(params, callback)
 *   Calls the CreatePreset API operation.
 *   @param params [Object]
 *     * `Name` &mdash; **required** &mdash; (`String`) The name of the
 *       preset. We recommend that the name be unique within the AWS
 *       account, but uniqueness is not enforced.
 *     * `Description` &mdash; (`String`) A description of the preset.
 *     * `Container` &mdash; **required** &mdash; (`String`) The
 *       container type for the output file. This value must be mp4.
 *     * `Video` &mdash; **required** &mdash; (`Object`) A section of the
 *       request body that specifies the video parameters.
 *       * `Codec` &mdash; (`String`) The video codec for the output
 *         file. This value must be H.264.
 *       * `CodecOptions` &mdash; (`Object<String>`) Profile The H.264
 *         profile that you want to use for the output file. Elastic
 *         Transcoder supports the following profiles: baseline: The
 *         profile most commonly used for videoconferencing and for
 *         mobile applications. main: The profile used for
 *         standard-definition digital TV broadcasts. high: The profile
 *         used for high-definition digital TV broadcasts and for Blu-ray
 *         discs. Level The H.264 level that you want to use for the
 *         output file. Elastic Transcoder supports the following levels:
 *         1, 1b, 1.1, 1.2, 1.3, 2, 2.1, 2.2, 3, 3.1, 3.2, 4, 4.1
 *         MaxReferenceFrames The maximum number of previously decoded
 *         frames to use as a reference for decoding future frames. Valid
 *         values are integers 0 through 16, but we recommend that you
 *         not use a value greater than the following: Min(Floor(Maximum
 *         decoded picture buffer in macroblocks * 256 / (Width in pixels
 *         * Height in pixels)), 16) where Width in pixels and Height in
 *         pixels represent the resolution of the output video and
 *         Maximum decoded picture buffer in macroblocks depends on the
 *         value of the Level object. (A macroblock is a block of pixels
 *         measuring 16x16.) Note that the calculation for maximum
 *         decoded picture buffer, which is similar to the calculation
 *         for maximum reference frames, uses macroblocks instead of
 *         pixels for the width and height of the video. To determine the
 *         value of maximum decoded picture buffer in macroblocks, see
 *         the following list (Level - Maximum decoded picture buffer): 1
 *         \- 396 1b - 396 1.1 - 900 1.2 - 2376 1.3 - 2376 2 - 2376 2.1 -
 *         4752 2.2 - 8100 3 - 8100 3.1 - 18000 3.2 - 20480 4 - 32768 4.1
 *         \- 32768
 *       * `KeyframesMaxDist` &mdash; (`String`) The maximum number of
 *         frames between key frames. Key frames are fully encoded
 *         frames; the frames between key frames are encoded based, in
 *         part, on the content of the key frames. The value is an
 *         integer formatted as a string; valid values are between 1 and
 *         100000, inclusive. A higher value results in higher
 *         compression but may also discernibly decrease video quality.
 *       * `FixedGOP` &mdash; (`String`) Whether to use a fixed value for
 *         FixedGOP. Valid values are true and false: true: Elastic
 *         Transcoder uses the value of KeyframesMaxDist for the distance
 *         between key frames (the number of frames in a group of
 *         pictures, or GOP). false: The distance between key frames can
 *         vary.
 *       * `BitRate` &mdash; (`String`) The bit rate of the video stream
 *         in the output file, in kilobits/second. Valid values depend on
 *         the values of Level and Profile. We recommend that you specify
 *         a value less than or equal to the maximum H.264-compliant
 *         value listed in the following list for your level and profile:
 *         Level - Maximum video bit rate in kilobits/second (baseline
 *         and main Profile) : maximum video bit rate in kilobits/second
 *         (high Profile) 1 - 64 : 80 1b - 128 : 160 1.1 - 192 : 240 1.2
 *         \- 384 : 480 1.3 - 768 : 960 2 - 2000 : 2500 3 - 10000 : 12500
 *         3.1 - 14000 : 17500 3.2 - 20000 : 25000 4 - 20000 : 25000 4.1
 *         \- 50000 : 62500
 *       * `FrameRate` &mdash; (`String`) The frames per second for the
 *         video stream in the output file. Valid values include: auto,
 *         10, 15, 23.97, 24, 25, 29.97, 30, 60 If you specify auto,
 *         Elastic Transcoder uses the detected frame rate of the input
 *         source. If you specify a frame rate, we recommend that you
 *         perform the following calculation: Frame rate = maximum
 *         recommended decoding speed in luma samples/second / (width in
 *         pixels * height in pixels) where: width in pixels and height
 *         in pixels represent the Resolution of the output video.
 *         maximum recommended decoding speed in Luma samples/second is
 *         less than or equal to the maximum value listed in the
 *         following table, based on the value that you specified for
 *         Level. The maximum recommended decoding speed in Luma
 *         samples/second for each level is described in the following
 *         list (Level - Decoding speed): 1 - 380160 1b - 380160 1.1 -
 *         76800 1.2 - 1536000 1.3 - 3041280 2 - 3041280 2.1 - 5068800
 *         2.2 - 5184000 3 - 10368000 3.1 - 27648000 3.2 - 55296000 4 -
 *         62914560 4.1 - 62914560
 *       * `Resolution` &mdash; (`String`) The width and height of the
 *         video in the output file, in pixels. Valid values are auto and
 *         width x height: auto: Elastic Transcoder attempts to preserve
 *         the width and height of the input file, subject to the
 *         following rules. width x height: The width and height of the
 *         output video in pixels. Note the following about specifying
 *         the width and height: The width must be an even integer
 *         between 128 and 4096, inclusive. The height must be an even
 *         integer between 96 and 3072, inclusive. If you specify a
 *         resolution that is less than the resolution of the input file,
 *         Elastic Transcoder rescales the output file to the lower
 *         resolution. If you specify a resolution that is greater than
 *         the resolution of the input file, Elastic Transcoder rescales
 *         the output to the higher resolution. We recommend that you
 *         specify a resolution for which the product of width and height
 *         is less than or equal to the applicable value in the following
 *         list (List - Max width x height value): 1 - 25344 1b - 25344
 *         1.1 - 101376 1.2 - 101376 1.3 - 101376 2 - 101376 2.1 - 202752
 *         2.2 - 404720 3 - 404720 3.1 - 921600 3.2 - 1310720 4 - 2097152
 *         4.1 - 2097152
 *       * `AspectRatio` &mdash; (`String`) The display aspect ratio of
 *         the video in the output file. Valid values include: auto, 1:1,
 *         4:3, 3:2, 16:9 If you specify auto, Elastic Transcoder tries
 *         to preserve the aspect ratio of the input file. If you specify
 *         an aspect ratio for the output file that differs from aspect
 *         ratio of the input file, Elastic Transcoder adds pillarboxing
 *         (black bars on the sides) or letterboxing (black bars on the
 *         top and bottom) to maintain the aspect ratio of the active
 *         region of the video.
 *     * `Audio` &mdash; **required** &mdash; (`Object`) A section of the
 *       request body that specifies the audio parameters
 *       * `Codec` &mdash; (`String`) The audio codec for the output
 *         file. This value must be AAC.
 *       * `SampleRate` &mdash; (`String`) The sample rate of the audio
 *         stream in the output file, in Hertz. Valid values include:
 *         auto, 22050, 32000, 44100, 48000, 96000 If you specify auto,
 *         Elastic Transcoder automatically detects the sample rate.
 *       * `BitRate` &mdash; (`String`) The bit rate of the audio stream
 *         in the output file, in kilobits/second. Enter an integer
 *         between 64 and 320, inclusive.
 *       * `Channels` &mdash; (`String`) The number of audio channels in
 *         the output file. Valid values include: auto, 0, 1, 2 If you
 *         specify auto, Elastic Transcoder automatically detects the
 *         number of channels in the input file.
 *     * `Thumbnails` &mdash; **required** &mdash; (`Object`) A section
 *       of the request body that specifies the thumbnail parameters, if
 *       any.
 *       * `Format` &mdash; (`String`) The format of thumbnails, if any.
 *         Valid values are jpg and png. You specify whether you want
 *         Elastic Transcoder to create thumbnails when you create a job.
 *       * `Interval` &mdash; (`String`) The number of seconds between
 *         thumbnails. Specify an integer value.
 *       * `Resolution` &mdash; (`String`) The width and height of
 *         thumbnail files in pixels. Specify a value in the format width
 *         x height where both values are even integers. The values
 *         cannot exceed the width and height that you specified in the
 *         Video:Resolution object.
 *       * `AspectRatio` &mdash; (`String`) The aspect ratio of
 *         thumbnails. Valid values include: auto, 1:1, 4:3, 3:2, 16:9 If
 *         you specify auto, Elastic Transcoder tries to preserve the
 *         aspect ratio of the video in the output file.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `Preset` &mdash; (`Object`) A section of the response body that
 *         provides information about the preset that is created.
 *         * `Id` &mdash; (`String`) Identifier for the new preset. You use
 *           this value to get settings for the preset or to delete it.
 *         * `Name` &mdash; (`String`) The name of the preset.
 *         * `Description` &mdash; (`String`) A description of the preset.
 *         * `Container` &mdash; (`String`) The container type for the
 *           output file. This value must be mp4.
 *         * `Audio` &mdash; (`Object`) A section of the response body that
 *           provides information about the audio preset values.
 *           * `Codec` &mdash; (`String`) The audio codec for the output
 *             file. This value must be AAC.
 *           * `SampleRate` &mdash; (`String`) The sample rate of the audio
 *             stream in the output file, in Hertz. Valid values include:
 *             auto, 22050, 32000, 44100, 48000, 96000 If you specify auto,
 *             Elastic Transcoder automatically detects the sample rate.
 *           * `BitRate` &mdash; (`String`) The bit rate of the audio
 *             stream in the output file, in kilobits/second. Enter an
 *             integer between 64 and 320, inclusive.
 *           * `Channels` &mdash; (`String`) The number of audio channels
 *             in the output file. Valid values include: auto, 0, 1, 2 If
 *             you specify auto, Elastic Transcoder automatically detects
 *             the number of channels in the input file.
 *         * `Video` &mdash; (`Object`) A section of the response body that
 *           provides information about the video preset values.
 *           * `Codec` &mdash; (`String`) The video codec for the output
 *             file. This value must be H.264.
 *           * `CodecOptions` &mdash; (`Object<String>`) Profile The H.264
 *             profile that you want to use for the output file. Elastic
 *             Transcoder supports the following profiles: baseline: The
 *             profile most commonly used for videoconferencing and for
 *             mobile applications. main: The profile used for
 *             standard-definition digital TV broadcasts. high: The profile
 *             used for high-definition digital TV broadcasts and for
 *             Blu-ray discs. Level The H.264 level that you want to use
 *             for the output file. Elastic Transcoder supports the
 *             following levels: 1, 1b, 1.1, 1.2, 1.3, 2, 2.1, 2.2, 3, 3.1,
 *             3.2, 4, 4.1 MaxReferenceFrames The maximum number of
 *             previously decoded frames to use as a reference for decoding
 *             future frames. Valid values are integers 0 through 16, but
 *             we recommend that you not use a value greater than the
 *             following: Min(Floor(Maximum decoded picture buffer in
 *             macroblocks * 256 / (Width in pixels * Height in pixels)),
 *             16) where Width in pixels and Height in pixels represent the
 *             resolution of the output video and Maximum decoded picture
 *             buffer in macroblocks depends on the value of the Level
 *             object. (A macroblock is a block of pixels measuring 16x16.)
 *             Note that the calculation for maximum decoded picture
 *             buffer, which is similar to the calculation for maximum
 *             reference frames, uses macroblocks instead of pixels for the
 *             width and height of the video. To determine the value of
 *             maximum decoded picture buffer in macroblocks, see the
 *             following list (Level - Maximum decoded picture buffer): 1 -
 *             396 1b - 396 1.1 - 900 1.2 - 2376 1.3 - 2376 2 - 2376 2.1 -
 *             4752 2.2 - 8100 3 - 8100 3.1 - 18000 3.2 - 20480 4 - 32768
 *             4.1 - 32768
 *           * `KeyframesMaxDist` &mdash; (`String`) The maximum number of
 *             frames between key frames. Key frames are fully encoded
 *             frames; the frames between key frames are encoded based, in
 *             part, on the content of the key frames. The value is an
 *             integer formatted as a string; valid values are between 1
 *             and 100000, inclusive. A higher value results in higher
 *             compression but may also discernibly decrease video quality.
 *           * `FixedGOP` &mdash; (`String`) Whether to use a fixed value
 *             for FixedGOP. Valid values are true and false: true: Elastic
 *             Transcoder uses the value of KeyframesMaxDist for the
 *             distance between key frames (the number of frames in a group
 *             of pictures, or GOP). false: The distance between key frames
 *             can vary.
 *           * `BitRate` &mdash; (`String`) The bit rate of the video
 *             stream in the output file, in kilobits/second. Valid values
 *             depend on the values of Level and Profile. We recommend that
 *             you specify a value less than or equal to the maximum
 *             H.264-compliant value listed in the following list for your
 *             level and profile: Level - Maximum video bit rate in
 *             kilobits/second (baseline and main Profile) : maximum video
 *             bit rate in kilobits/second (high Profile) 1 - 64 : 80 1b -
 *             128 : 160 1.1 - 192 : 240 1.2 - 384 : 480 1.3 - 768 : 960 2
 *             \- 2000 : 2500 3 - 10000 : 12500 3.1 - 14000 : 17500 3.2 -
 *             20000 : 25000 4 - 20000 : 25000 4.1 - 50000 : 62500
 *           * `FrameRate` &mdash; (`String`) The frames per second for the
 *             video stream in the output file. Valid values include: auto,
 *             10, 15, 23.97, 24, 25, 29.97, 30, 60 If you specify auto,
 *             Elastic Transcoder uses the detected frame rate of the input
 *             source. If you specify a frame rate, we recommend that you
 *             perform the following calculation: Frame rate = maximum
 *             recommended decoding speed in luma samples/second / (width
 *             in pixels * height in pixels) where: width in pixels and
 *             height in pixels represent the Resolution of the output
 *             video. maximum recommended decoding speed in Luma
 *             samples/second is less than or equal to the maximum value
 *             listed in the following table, based on the value that you
 *             specified for Level. The maximum recommended decoding speed
 *             in Luma samples/second for each level is described in the
 *             following list (Level - Decoding speed): 1 - 380160 1b -
 *             380160 1.1 - 76800 1.2 - 1536000 1.3 - 3041280 2 - 3041280
 *             2.1 - 5068800 2.2 - 5184000 3 - 10368000 3.1 - 27648000 3.2
 *             \- 55296000 4 - 62914560 4.1 - 62914560
 *           * `Resolution` &mdash; (`String`) The width and height of the
 *             video in the output file, in pixels. Valid values are auto
 *             and width x height: auto: Elastic Transcoder attempts to
 *             preserve the width and height of the input file, subject to
 *             the following rules. width x height: The width and height of
 *             the output video in pixels. Note the following about
 *             specifying the width and height: The width must be an even
 *             integer between 128 and 4096, inclusive. The height must be
 *             an even integer between 96 and 3072, inclusive. If you
 *             specify a resolution that is less than the resolution of the
 *             input file, Elastic Transcoder rescales the output file to
 *             the lower resolution. If you specify a resolution that is
 *             greater than the resolution of the input file, Elastic
 *             Transcoder rescales the output to the higher resolution. We
 *             recommend that you specify a resolution for which the
 *             product of width and height is less than or equal to the
 *             applicable value in the following list (List - Max width x
 *             height value): 1 - 25344 1b - 25344 1.1 - 101376 1.2 -
 *             101376 1.3 - 101376 2 - 101376 2.1 - 202752 2.2 - 404720 3 -
 *             404720 3.1 - 921600 3.2 - 1310720 4 - 2097152 4.1 - 2097152
 *           * `AspectRatio` &mdash; (`String`) The display aspect ratio of
 *             the video in the output file. Valid values include: auto,
 *             1:1, 4:3, 3:2, 16:9 If you specify auto, Elastic Transcoder
 *             tries to preserve the aspect ratio of the input file. If you
 *             specify an aspect ratio for the output file that differs
 *             from aspect ratio of the input file, Elastic Transcoder adds
 *             pillarboxing (black bars on the sides) or letterboxing
 *             (black bars on the top and bottom) to maintain the aspect
 *             ratio of the active region of the video.
 *         * `Thumbnails` &mdash; (`Object`) A section of the response body
 *           that provides information about the thumbnail preset values,
 *           if any.
 *           * `Format` &mdash; (`String`) The format of thumbnails, if
 *             any. Valid values are jpg and png. You specify whether you
 *             want Elastic Transcoder to create thumbnails when you create
 *             a job.
 *           * `Interval` &mdash; (`String`) The number of seconds between
 *             thumbnails. Specify an integer value.
 *           * `Resolution` &mdash; (`String`) The width and height of
 *             thumbnail files in pixels. Specify a value in the format
 *             width x height where both values are even integers. The
 *             values cannot exceed the width and height that you specified
 *             in the Video:Resolution object.
 *           * `AspectRatio` &mdash; (`String`) The aspect ratio of
 *             thumbnails. Valid values include: auto, 1:1, 4:3, 3:2, 16:9
 *             If you specify auto, Elastic Transcoder tries to preserve
 *             the aspect ratio of the video in the output file.
 *         * `Type` &mdash; (`String`) Whether the preset is a default
 *           preset provided by Elastic Transcoder (System) or a preset
 *           that you have defined (Custom).
 *       * `Warning` &mdash; (`String`) If the preset settings don't comply
 *         with the standards for the video codec but Elastic Transcoder
 *         created the preset, this message explains the reason the preset
 *         settings don't meet the standard. Elastic Transcoder created the
 *         preset because the settings might produce acceptable output.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deletePipeline(params, callback)
 *   Calls the DeletePipeline API operation.
 *   @param params [Object]
 *     * `Id` &mdash; **required** &mdash; (`String`) The identifier of
 *       the pipeline that you want to delete.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deletePreset(params, callback)
 *   Calls the DeletePreset API operation.
 *   @param params [Object]
 *     * `Id` &mdash; **required** &mdash; (`String`) The identifier of
 *       the preset for which you want to get detailed information.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listJobsByPipeline(params, callback)
 *   Calls the ListJobsByPipeline API operation.
 *   @param params [Object]
 *     * `PipelineId` &mdash; **required** &mdash; (`String`) The ID of
 *       the pipeline for which you want to get job information.
 *     * `Ascending` &mdash; (`String`) To list jobs in chronological
 *       order by the date and time that they were submitted, enter true.
 *       To list jobs in reverse chronological order, enter false.
 *     * `PageToken` &mdash; (`String`) When Elastic Transcoder returns
 *       more than one page of results, use pageToken in subsequent GET
 *       requests to get each successive page of results.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `Jobs` &mdash; (`Array<Object>`) An array of Job objects that
 *         are in the specified pipeline.
 *         * `Id` &mdash; (`String`) The identifier that Elastic Transcoder
 *           assigned to the job. You use this value to get settings for
 *           the job or to delete the job.
 *         * `PipelineId` &mdash; (`String`) The Id of the pipeline that
 *           you want Elastic Transcoder to use for transcoding. The
 *           pipeline determines several settings, including the Amazon S3
 *           bucket from which Elastic Transcoder gets the files to
 *           transcode and the bucket into which Elastic Transcoder puts
 *           the transcoded files.
 *         * `Input` &mdash; (`Object`) A section of the request or
 *           response body that provides information about the file that is
 *           being transcoded.
 *           * `Key` &mdash; (`String`) The name of the file to transcode.
 *             Elsewhere in the body of the JSON block is the the ID of the
 *             pipeline to use for processing the job. The InputBucket
 *             object in that pipeline tells Elastic Transcoder which
 *             Amazon S3 bucket to get the file from. If the file name
 *             includes a prefix, such as cooking/lasagna.mpg, include the
 *             prefix in the key. If the file isn't in the specified
 *             bucket, Elastic Transcoder returns an error.
 *           * `FrameRate` &mdash; (`String`) The frame rate of the input
 *             file. If you want Elastic Transcoder to automatically detect
 *             the frame rate of the input file, specify auto. If you want
 *             to specify the frame rate for the input file, enter one of
 *             the following values: 10, 15, 23.97, 24, 25, 29.97, 30, 60
 *             If you specify a value other than auto, Elastic Transcoder
 *             disables automatic detection of the frame rate.
 *           * `Resolution` &mdash; (`String`) The resolution, in pixels,
 *             of the input file. If you want Elastic Transcoder to
 *             automatically detect the resolution of the input file,
 *             specify auto. If you want to specify the resolution for the
 *             input file, enter values in the format width in pixels by
 *             height in pixels. If you specify a value other than auto,
 *             Elastic Transcoder disables automatic detection of the
 *             resolution.
 *           * `AspectRatio` &mdash; (`String`) The aspect ratio of the
 *             input file. If you want Elastic Transcoder to automatically
 *             detect the aspect ratio of the input file, specify auto. If
 *             you want to specify the aspect ratio for the output file,
 *             enter one of the following values: 1:1, 4:3, 3:2, 16:9 If
 *             you specify a value other than auto, Elastic Transcoder
 *             disables automatic detection of the aspect ratio.
 *           * `Interlaced` &mdash; (`String`) Whether the input file is
 *             interlaced. If you want Elastic Transcoder to automatically
 *             detect whether the input file is interlaced, specify auto.
 *             If you want to specify whether the input file is interlaced,
 *             enter one of the following values: true, false If you
 *             specify a value other than auto, Elastic Transcoder disables
 *             automatic detection of interlacing.
 *           * `Container` &mdash; (`String`) The container type for the
 *             input file. If you want Elastic Transcoder to automatically
 *             detect the container type of the input file, specify auto.
 *             If you want to specify the container type for the input
 *             file, enter one of the following values: 3gp, asf, avi,
 *             divx, flv, mkv, mov, mp4, mpeg, mpeg-ps, mpeg-ts, mxf, ogg,
 *             vob, wav, webm
 *         * `Output` &mdash; (`Object`) A section of the request or
 *           response body that provides information about the transcoded
 *           (target) file.
 *           * `Key` &mdash; (`String`) The name to assign to the
 *             transcoded file. Elastic Transcoder saves the file in the
 *             Amazon S3 bucket specified by the OutputBucket object in the
 *             pipeline that is specified by the pipeline ID. If a file
 *             with the specified name already exists in the output bucket,
 *             the job fails.
 *           * `ThumbnailPattern` &mdash; (`String`) Whether you want
 *             Elastic Transcoder to create thumbnails for your videos and,
 *             if so, how you want Elastic Transcoder to name the files. If
 *             you don't want Elastic Transcoder to create thumbnails,
 *             specify "". If you do want Elastic Transcoder to create
 *             thumbnails, specify the information that you want to include
 *             in the file name for each thumbnail. You can specify the
 *             following values in any sequence: `{count}` (Required): If
 *             you want to create thumbnails, you must include `{count}` in
 *             the ThumbnailPattern object. Wherever you specify `{count}`,
 *             Elastic Transcoder adds a five-digit sequence number
 *             (beginning with 00001) to thumbnail file names. The number
 *             indicates where a given thumbnail appears in the sequence of
 *             thumbnails for a transcoded file. If you specify a literal
 *             value and/or `{resolution}` but you omit `{count}`, Elastic
 *             Transcoder returns a validation error and does not create
 *             the job. Literal values (Optional): You can specify literal
 *             values anywhere in the ThumbnailPattern object. For example,
 *             you can include them as a file name prefix or as a delimiter
 *             between `{resolution}` and `{count}`. `{resolution}`
 *             (Optional): If you want Elastic Transcoder to include the
 *             resolution in the file name, include `{resolution}` in the
 *             ThumbnailPattern object. When creating thumbnails, Elastic
 *             Transcoder automatically saves the files in the format (.jpg
 *             or .png) that appears in the preset that you specified in
 *             the PresetID value of CreateJobOutput. Elastic Transcoder
 *             also appends the applicable file name extension.
 *           * `Rotate` &mdash; (`String`) The number of degrees clockwise
 *             by which you want Elastic Transcoder to rotate the output
 *             relative to the input. Enter one of the following values:
 *             auto, 0, 90, 180, 270 The value auto generally works only if
 *             the file that you're transcoding contains rotation metadata.
 *           * `PresetId` &mdash; (`String`) The Id of the preset to use
 *             for this job. The preset determines the audio, video, and
 *             thumbnail settings that Elastic Transcoder uses for
 *             transcoding.
 *           * `Status` &mdash; (`String`) Status of the job. The value of
 *             Status is one of the following: Submitted, Progressing,
 *             Completed, Canceled, or Error.
 *           * `StatusDetail` &mdash; (`String`) Information that further
 *             explains Status.
 *       * `NextPageToken` &mdash; (`String`) A value that you use to
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
 *     * `Status` &mdash; **required** &mdash; (`String`) To get
 *       information about all of the jobs associated with the current
 *       AWS account that have a given status, specify the following
 *       status: Submitted, Progressing, Completed, Canceled, or Error.
 *     * `Ascending` &mdash; (`String`) To list jobs in chronological
 *       order by the date and time that they were submitted, enter true.
 *       To list jobs in reverse chronological order, enter false.
 *     * `PageToken` &mdash; (`String`) When Elastic Transcoder returns
 *       more than one page of results, use pageToken in subsequent GET
 *       requests to get each successive page of results.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `Jobs` &mdash; (`Array<Object>`) An array of Job objects that
 *         have the specified status.
 *         * `Id` &mdash; (`String`) The identifier that Elastic Transcoder
 *           assigned to the job. You use this value to get settings for
 *           the job or to delete the job.
 *         * `PipelineId` &mdash; (`String`) The Id of the pipeline that
 *           you want Elastic Transcoder to use for transcoding. The
 *           pipeline determines several settings, including the Amazon S3
 *           bucket from which Elastic Transcoder gets the files to
 *           transcode and the bucket into which Elastic Transcoder puts
 *           the transcoded files.
 *         * `Input` &mdash; (`Object`) A section of the request or
 *           response body that provides information about the file that is
 *           being transcoded.
 *           * `Key` &mdash; (`String`) The name of the file to transcode.
 *             Elsewhere in the body of the JSON block is the the ID of the
 *             pipeline to use for processing the job. The InputBucket
 *             object in that pipeline tells Elastic Transcoder which
 *             Amazon S3 bucket to get the file from. If the file name
 *             includes a prefix, such as cooking/lasagna.mpg, include the
 *             prefix in the key. If the file isn't in the specified
 *             bucket, Elastic Transcoder returns an error.
 *           * `FrameRate` &mdash; (`String`) The frame rate of the input
 *             file. If you want Elastic Transcoder to automatically detect
 *             the frame rate of the input file, specify auto. If you want
 *             to specify the frame rate for the input file, enter one of
 *             the following values: 10, 15, 23.97, 24, 25, 29.97, 30, 60
 *             If you specify a value other than auto, Elastic Transcoder
 *             disables automatic detection of the frame rate.
 *           * `Resolution` &mdash; (`String`) The resolution, in pixels,
 *             of the input file. If you want Elastic Transcoder to
 *             automatically detect the resolution of the input file,
 *             specify auto. If you want to specify the resolution for the
 *             input file, enter values in the format width in pixels by
 *             height in pixels. If you specify a value other than auto,
 *             Elastic Transcoder disables automatic detection of the
 *             resolution.
 *           * `AspectRatio` &mdash; (`String`) The aspect ratio of the
 *             input file. If you want Elastic Transcoder to automatically
 *             detect the aspect ratio of the input file, specify auto. If
 *             you want to specify the aspect ratio for the output file,
 *             enter one of the following values: 1:1, 4:3, 3:2, 16:9 If
 *             you specify a value other than auto, Elastic Transcoder
 *             disables automatic detection of the aspect ratio.
 *           * `Interlaced` &mdash; (`String`) Whether the input file is
 *             interlaced. If you want Elastic Transcoder to automatically
 *             detect whether the input file is interlaced, specify auto.
 *             If you want to specify whether the input file is interlaced,
 *             enter one of the following values: true, false If you
 *             specify a value other than auto, Elastic Transcoder disables
 *             automatic detection of interlacing.
 *           * `Container` &mdash; (`String`) The container type for the
 *             input file. If you want Elastic Transcoder to automatically
 *             detect the container type of the input file, specify auto.
 *             If you want to specify the container type for the input
 *             file, enter one of the following values: 3gp, asf, avi,
 *             divx, flv, mkv, mov, mp4, mpeg, mpeg-ps, mpeg-ts, mxf, ogg,
 *             vob, wav, webm
 *         * `Output` &mdash; (`Object`) A section of the request or
 *           response body that provides information about the transcoded
 *           (target) file.
 *           * `Key` &mdash; (`String`) The name to assign to the
 *             transcoded file. Elastic Transcoder saves the file in the
 *             Amazon S3 bucket specified by the OutputBucket object in the
 *             pipeline that is specified by the pipeline ID. If a file
 *             with the specified name already exists in the output bucket,
 *             the job fails.
 *           * `ThumbnailPattern` &mdash; (`String`) Whether you want
 *             Elastic Transcoder to create thumbnails for your videos and,
 *             if so, how you want Elastic Transcoder to name the files. If
 *             you don't want Elastic Transcoder to create thumbnails,
 *             specify "". If you do want Elastic Transcoder to create
 *             thumbnails, specify the information that you want to include
 *             in the file name for each thumbnail. You can specify the
 *             following values in any sequence: `{count}` (Required): If
 *             you want to create thumbnails, you must include `{count}` in
 *             the ThumbnailPattern object. Wherever you specify `{count}`,
 *             Elastic Transcoder adds a five-digit sequence number
 *             (beginning with 00001) to thumbnail file names. The number
 *             indicates where a given thumbnail appears in the sequence of
 *             thumbnails for a transcoded file. If you specify a literal
 *             value and/or `{resolution}` but you omit `{count}`, Elastic
 *             Transcoder returns a validation error and does not create
 *             the job. Literal values (Optional): You can specify literal
 *             values anywhere in the ThumbnailPattern object. For example,
 *             you can include them as a file name prefix or as a delimiter
 *             between `{resolution}` and `{count}`. `{resolution}`
 *             (Optional): If you want Elastic Transcoder to include the
 *             resolution in the file name, include `{resolution}` in the
 *             ThumbnailPattern object. When creating thumbnails, Elastic
 *             Transcoder automatically saves the files in the format (.jpg
 *             or .png) that appears in the preset that you specified in
 *             the PresetID value of CreateJobOutput. Elastic Transcoder
 *             also appends the applicable file name extension.
 *           * `Rotate` &mdash; (`String`) The number of degrees clockwise
 *             by which you want Elastic Transcoder to rotate the output
 *             relative to the input. Enter one of the following values:
 *             auto, 0, 90, 180, 270 The value auto generally works only if
 *             the file that you're transcoding contains rotation metadata.
 *           * `PresetId` &mdash; (`String`) The Id of the preset to use
 *             for this job. The preset determines the audio, video, and
 *             thumbnail settings that Elastic Transcoder uses for
 *             transcoding.
 *           * `Status` &mdash; (`String`) Status of the job. The value of
 *             Status is one of the following: Submitted, Progressing,
 *             Completed, Canceled, or Error.
 *           * `StatusDetail` &mdash; (`String`) Information that further
 *             explains Status.
 *       * `NextPageToken` &mdash; (`String`) A value that you use to
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
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `Pipelines` &mdash; (`Array<Object>`) An array of Pipeline
 *         objects.
 *         * `Id` &mdash; (`String`) The identifier for the pipeline. You
 *           use this value to identify the pipeline in which you want to
 *           perform a variety of operations, such as creating a job or a
 *           preset.
 *         * `Name` &mdash; (`String`) The name of the pipeline. We
 *           recommend that the name be unique within the AWS account, but
 *           uniqueness is not enforced. Constraints: Maximum 40 characters
 *         * `Status` &mdash; (`String`) The current status of the
 *           pipeline: active: The pipeline is processing jobs. paused: The
 *           pipeline is not currently processing jobs.
 *         * `InputBucket` &mdash; (`String`) The Amazon S3 bucket in which
 *           you saved the media files that you want to transcode.
 *         * `OutputBucket` &mdash; (`String`) The Amazon S3 bucket in
 *           which you want Elastic Transcoder to save the transcoded
 *           files.
 *         * `Role` &mdash; (`String`) The IAM Amazon Resource Name (ARN)
 *           for the role that you want Elastic Transcoder to use to create
 *           the pipeline.
 *         * `Notifications` &mdash; (`Object`) The Amazon Simple
 *           Notification Service (Amazon SNS) topic that you want to
 *           notify to report job status. To receive notifications, you
 *           must also subscribe to the new topic in the Amazon SNS
 *           console. Progressing: The Amazon Simple Notification Service
 *           (Amazon SNS) topic that you want to notify when Elastic
 *           Transcoder has started to process the job. Completed: The
 *           Amazon SNS topic that you want to notify when Elastic
 *           Transcoder has finished processing the job. Warning: The
 *           Amazon SNS topic that you want to notify when Elastic
 *           Transcoder encounters a warning condition. Error: The Amazon
 *           SNS topic that you want to notify when Elastic Transcoder
 *           encounters an error condition.
 *           * `Progressing` &mdash; (`String`) The Amazon Simple
 *             Notification Service (Amazon SNS) topic that you want to
 *             notify when Elastic Transcoder has started to process the
 *             job.
 *           * `Completed` &mdash; (`String`) The Amazon SNS topic that you
 *             want to notify when Elastic Transcoder has finished
 *             processing the job.
 *           * `Warning` &mdash; (`String`) The Amazon SNS topic that you
 *             want to notify when Elastic Transcoder encounters a warning
 *             condition.
 *           * `Error` &mdash; (`String`) The Amazon SNS topic that you
 *             want to notify when Elastic Transcoder encounters an error
 *             condition.
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
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `Presets` &mdash; (`Array<Object>`) An array of Preset objects.
 *         * `Id` &mdash; (`String`) Identifier for the new preset. You use
 *           this value to get settings for the preset or to delete it.
 *         * `Name` &mdash; (`String`) The name of the preset.
 *         * `Description` &mdash; (`String`) A description of the preset.
 *         * `Container` &mdash; (`String`) The container type for the
 *           output file. This value must be mp4.
 *         * `Audio` &mdash; (`Object`) A section of the response body that
 *           provides information about the audio preset values.
 *           * `Codec` &mdash; (`String`) The audio codec for the output
 *             file. This value must be AAC.
 *           * `SampleRate` &mdash; (`String`) The sample rate of the audio
 *             stream in the output file, in Hertz. Valid values include:
 *             auto, 22050, 32000, 44100, 48000, 96000 If you specify auto,
 *             Elastic Transcoder automatically detects the sample rate.
 *           * `BitRate` &mdash; (`String`) The bit rate of the audio
 *             stream in the output file, in kilobits/second. Enter an
 *             integer between 64 and 320, inclusive.
 *           * `Channels` &mdash; (`String`) The number of audio channels
 *             in the output file. Valid values include: auto, 0, 1, 2 If
 *             you specify auto, Elastic Transcoder automatically detects
 *             the number of channels in the input file.
 *         * `Video` &mdash; (`Object`) A section of the response body that
 *           provides information about the video preset values.
 *           * `Codec` &mdash; (`String`) The video codec for the output
 *             file. This value must be H.264.
 *           * `CodecOptions` &mdash; (`Object<String>`) Profile The H.264
 *             profile that you want to use for the output file. Elastic
 *             Transcoder supports the following profiles: baseline: The
 *             profile most commonly used for videoconferencing and for
 *             mobile applications. main: The profile used for
 *             standard-definition digital TV broadcasts. high: The profile
 *             used for high-definition digital TV broadcasts and for
 *             Blu-ray discs. Level The H.264 level that you want to use
 *             for the output file. Elastic Transcoder supports the
 *             following levels: 1, 1b, 1.1, 1.2, 1.3, 2, 2.1, 2.2, 3, 3.1,
 *             3.2, 4, 4.1 MaxReferenceFrames The maximum number of
 *             previously decoded frames to use as a reference for decoding
 *             future frames. Valid values are integers 0 through 16, but
 *             we recommend that you not use a value greater than the
 *             following: Min(Floor(Maximum decoded picture buffer in
 *             macroblocks * 256 / (Width in pixels * Height in pixels)),
 *             16) where Width in pixels and Height in pixels represent the
 *             resolution of the output video and Maximum decoded picture
 *             buffer in macroblocks depends on the value of the Level
 *             object. (A macroblock is a block of pixels measuring 16x16.)
 *             Note that the calculation for maximum decoded picture
 *             buffer, which is similar to the calculation for maximum
 *             reference frames, uses macroblocks instead of pixels for the
 *             width and height of the video. To determine the value of
 *             maximum decoded picture buffer in macroblocks, see the
 *             following list (Level - Maximum decoded picture buffer): 1 -
 *             396 1b - 396 1.1 - 900 1.2 - 2376 1.3 - 2376 2 - 2376 2.1 -
 *             4752 2.2 - 8100 3 - 8100 3.1 - 18000 3.2 - 20480 4 - 32768
 *             4.1 - 32768
 *           * `KeyframesMaxDist` &mdash; (`String`) The maximum number of
 *             frames between key frames. Key frames are fully encoded
 *             frames; the frames between key frames are encoded based, in
 *             part, on the content of the key frames. The value is an
 *             integer formatted as a string; valid values are between 1
 *             and 100000, inclusive. A higher value results in higher
 *             compression but may also discernibly decrease video quality.
 *           * `FixedGOP` &mdash; (`String`) Whether to use a fixed value
 *             for FixedGOP. Valid values are true and false: true: Elastic
 *             Transcoder uses the value of KeyframesMaxDist for the
 *             distance between key frames (the number of frames in a group
 *             of pictures, or GOP). false: The distance between key frames
 *             can vary.
 *           * `BitRate` &mdash; (`String`) The bit rate of the video
 *             stream in the output file, in kilobits/second. Valid values
 *             depend on the values of Level and Profile. We recommend that
 *             you specify a value less than or equal to the maximum
 *             H.264-compliant value listed in the following list for your
 *             level and profile: Level - Maximum video bit rate in
 *             kilobits/second (baseline and main Profile) : maximum video
 *             bit rate in kilobits/second (high Profile) 1 - 64 : 80 1b -
 *             128 : 160 1.1 - 192 : 240 1.2 - 384 : 480 1.3 - 768 : 960 2
 *             \- 2000 : 2500 3 - 10000 : 12500 3.1 - 14000 : 17500 3.2 -
 *             20000 : 25000 4 - 20000 : 25000 4.1 - 50000 : 62500
 *           * `FrameRate` &mdash; (`String`) The frames per second for the
 *             video stream in the output file. Valid values include: auto,
 *             10, 15, 23.97, 24, 25, 29.97, 30, 60 If you specify auto,
 *             Elastic Transcoder uses the detected frame rate of the input
 *             source. If you specify a frame rate, we recommend that you
 *             perform the following calculation: Frame rate = maximum
 *             recommended decoding speed in luma samples/second / (width
 *             in pixels * height in pixels) where: width in pixels and
 *             height in pixels represent the Resolution of the output
 *             video. maximum recommended decoding speed in Luma
 *             samples/second is less than or equal to the maximum value
 *             listed in the following table, based on the value that you
 *             specified for Level. The maximum recommended decoding speed
 *             in Luma samples/second for each level is described in the
 *             following list (Level - Decoding speed): 1 - 380160 1b -
 *             380160 1.1 - 76800 1.2 - 1536000 1.3 - 3041280 2 - 3041280
 *             2.1 - 5068800 2.2 - 5184000 3 - 10368000 3.1 - 27648000 3.2
 *             \- 55296000 4 - 62914560 4.1 - 62914560
 *           * `Resolution` &mdash; (`String`) The width and height of the
 *             video in the output file, in pixels. Valid values are auto
 *             and width x height: auto: Elastic Transcoder attempts to
 *             preserve the width and height of the input file, subject to
 *             the following rules. width x height: The width and height of
 *             the output video in pixels. Note the following about
 *             specifying the width and height: The width must be an even
 *             integer between 128 and 4096, inclusive. The height must be
 *             an even integer between 96 and 3072, inclusive. If you
 *             specify a resolution that is less than the resolution of the
 *             input file, Elastic Transcoder rescales the output file to
 *             the lower resolution. If you specify a resolution that is
 *             greater than the resolution of the input file, Elastic
 *             Transcoder rescales the output to the higher resolution. We
 *             recommend that you specify a resolution for which the
 *             product of width and height is less than or equal to the
 *             applicable value in the following list (List - Max width x
 *             height value): 1 - 25344 1b - 25344 1.1 - 101376 1.2 -
 *             101376 1.3 - 101376 2 - 101376 2.1 - 202752 2.2 - 404720 3 -
 *             404720 3.1 - 921600 3.2 - 1310720 4 - 2097152 4.1 - 2097152
 *           * `AspectRatio` &mdash; (`String`) The display aspect ratio of
 *             the video in the output file. Valid values include: auto,
 *             1:1, 4:3, 3:2, 16:9 If you specify auto, Elastic Transcoder
 *             tries to preserve the aspect ratio of the input file. If you
 *             specify an aspect ratio for the output file that differs
 *             from aspect ratio of the input file, Elastic Transcoder adds
 *             pillarboxing (black bars on the sides) or letterboxing
 *             (black bars on the top and bottom) to maintain the aspect
 *             ratio of the active region of the video.
 *         * `Thumbnails` &mdash; (`Object`) A section of the response body
 *           that provides information about the thumbnail preset values,
 *           if any.
 *           * `Format` &mdash; (`String`) The format of thumbnails, if
 *             any. Valid values are jpg and png. You specify whether you
 *             want Elastic Transcoder to create thumbnails when you create
 *             a job.
 *           * `Interval` &mdash; (`String`) The number of seconds between
 *             thumbnails. Specify an integer value.
 *           * `Resolution` &mdash; (`String`) The width and height of
 *             thumbnail files in pixels. Specify a value in the format
 *             width x height where both values are even integers. The
 *             values cannot exceed the width and height that you specified
 *             in the Video:Resolution object.
 *           * `AspectRatio` &mdash; (`String`) The aspect ratio of
 *             thumbnails. Valid values include: auto, 1:1, 4:3, 3:2, 16:9
 *             If you specify auto, Elastic Transcoder tries to preserve
 *             the aspect ratio of the video in the output file.
 *         * `Type` &mdash; (`String`) Whether the preset is a default
 *           preset provided by Elastic Transcoder (System) or a preset
 *           that you have defined (Custom).
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method readJob(params, callback)
 *   Calls the ReadJob API operation.
 *   @param params [Object]
 *     * `Id` &mdash; **required** &mdash; (`String`) The identifier of
 *       the job for which you want to get detailed information.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `Job` &mdash; (`Object`) A section of the response body that
 *         provides information about the job.
 *         * `Id` &mdash; (`String`) The identifier that Elastic Transcoder
 *           assigned to the job. You use this value to get settings for
 *           the job or to delete the job.
 *         * `PipelineId` &mdash; (`String`) The Id of the pipeline that
 *           you want Elastic Transcoder to use for transcoding. The
 *           pipeline determines several settings, including the Amazon S3
 *           bucket from which Elastic Transcoder gets the files to
 *           transcode and the bucket into which Elastic Transcoder puts
 *           the transcoded files.
 *         * `Input` &mdash; (`Object`) A section of the request or
 *           response body that provides information about the file that is
 *           being transcoded.
 *           * `Key` &mdash; (`String`) The name of the file to transcode.
 *             Elsewhere in the body of the JSON block is the the ID of the
 *             pipeline to use for processing the job. The InputBucket
 *             object in that pipeline tells Elastic Transcoder which
 *             Amazon S3 bucket to get the file from. If the file name
 *             includes a prefix, such as cooking/lasagna.mpg, include the
 *             prefix in the key. If the file isn't in the specified
 *             bucket, Elastic Transcoder returns an error.
 *           * `FrameRate` &mdash; (`String`) The frame rate of the input
 *             file. If you want Elastic Transcoder to automatically detect
 *             the frame rate of the input file, specify auto. If you want
 *             to specify the frame rate for the input file, enter one of
 *             the following values: 10, 15, 23.97, 24, 25, 29.97, 30, 60
 *             If you specify a value other than auto, Elastic Transcoder
 *             disables automatic detection of the frame rate.
 *           * `Resolution` &mdash; (`String`) The resolution, in pixels,
 *             of the input file. If you want Elastic Transcoder to
 *             automatically detect the resolution of the input file,
 *             specify auto. If you want to specify the resolution for the
 *             input file, enter values in the format width in pixels by
 *             height in pixels. If you specify a value other than auto,
 *             Elastic Transcoder disables automatic detection of the
 *             resolution.
 *           * `AspectRatio` &mdash; (`String`) The aspect ratio of the
 *             input file. If you want Elastic Transcoder to automatically
 *             detect the aspect ratio of the input file, specify auto. If
 *             you want to specify the aspect ratio for the output file,
 *             enter one of the following values: 1:1, 4:3, 3:2, 16:9 If
 *             you specify a value other than auto, Elastic Transcoder
 *             disables automatic detection of the aspect ratio.
 *           * `Interlaced` &mdash; (`String`) Whether the input file is
 *             interlaced. If you want Elastic Transcoder to automatically
 *             detect whether the input file is interlaced, specify auto.
 *             If you want to specify whether the input file is interlaced,
 *             enter one of the following values: true, false If you
 *             specify a value other than auto, Elastic Transcoder disables
 *             automatic detection of interlacing.
 *           * `Container` &mdash; (`String`) The container type for the
 *             input file. If you want Elastic Transcoder to automatically
 *             detect the container type of the input file, specify auto.
 *             If you want to specify the container type for the input
 *             file, enter one of the following values: 3gp, asf, avi,
 *             divx, flv, mkv, mov, mp4, mpeg, mpeg-ps, mpeg-ts, mxf, ogg,
 *             vob, wav, webm
 *         * `Output` &mdash; (`Object`) A section of the request or
 *           response body that provides information about the transcoded
 *           (target) file.
 *           * `Key` &mdash; (`String`) The name to assign to the
 *             transcoded file. Elastic Transcoder saves the file in the
 *             Amazon S3 bucket specified by the OutputBucket object in the
 *             pipeline that is specified by the pipeline ID. If a file
 *             with the specified name already exists in the output bucket,
 *             the job fails.
 *           * `ThumbnailPattern` &mdash; (`String`) Whether you want
 *             Elastic Transcoder to create thumbnails for your videos and,
 *             if so, how you want Elastic Transcoder to name the files. If
 *             you don't want Elastic Transcoder to create thumbnails,
 *             specify "". If you do want Elastic Transcoder to create
 *             thumbnails, specify the information that you want to include
 *             in the file name for each thumbnail. You can specify the
 *             following values in any sequence: `{count}` (Required): If
 *             you want to create thumbnails, you must include `{count}` in
 *             the ThumbnailPattern object. Wherever you specify `{count}`,
 *             Elastic Transcoder adds a five-digit sequence number
 *             (beginning with 00001) to thumbnail file names. The number
 *             indicates where a given thumbnail appears in the sequence of
 *             thumbnails for a transcoded file. If you specify a literal
 *             value and/or `{resolution}` but you omit `{count}`, Elastic
 *             Transcoder returns a validation error and does not create
 *             the job. Literal values (Optional): You can specify literal
 *             values anywhere in the ThumbnailPattern object. For example,
 *             you can include them as a file name prefix or as a delimiter
 *             between `{resolution}` and `{count}`. `{resolution}`
 *             (Optional): If you want Elastic Transcoder to include the
 *             resolution in the file name, include `{resolution}` in the
 *             ThumbnailPattern object. When creating thumbnails, Elastic
 *             Transcoder automatically saves the files in the format (.jpg
 *             or .png) that appears in the preset that you specified in
 *             the PresetID value of CreateJobOutput. Elastic Transcoder
 *             also appends the applicable file name extension.
 *           * `Rotate` &mdash; (`String`) The number of degrees clockwise
 *             by which you want Elastic Transcoder to rotate the output
 *             relative to the input. Enter one of the following values:
 *             auto, 0, 90, 180, 270 The value auto generally works only if
 *             the file that you're transcoding contains rotation metadata.
 *           * `PresetId` &mdash; (`String`) The Id of the preset to use
 *             for this job. The preset determines the audio, video, and
 *             thumbnail settings that Elastic Transcoder uses for
 *             transcoding.
 *           * `Status` &mdash; (`String`) Status of the job. The value of
 *             Status is one of the following: Submitted, Progressing,
 *             Completed, Canceled, or Error.
 *           * `StatusDetail` &mdash; (`String`) Information that further
 *             explains Status.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method readPipeline(params, callback)
 *   Calls the ReadPipeline API operation.
 *   @param params [Object]
 *     * `Id` &mdash; **required** &mdash; (`String`) The identifier of
 *       the pipeline to read.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `Pipeline` &mdash; (`Object`) A section of the response body
 *         that provides information about the pipeline.
 *         * `Id` &mdash; (`String`) The identifier for the pipeline. You
 *           use this value to identify the pipeline in which you want to
 *           perform a variety of operations, such as creating a job or a
 *           preset.
 *         * `Name` &mdash; (`String`) The name of the pipeline. We
 *           recommend that the name be unique within the AWS account, but
 *           uniqueness is not enforced. Constraints: Maximum 40 characters
 *         * `Status` &mdash; (`String`) The current status of the
 *           pipeline: active: The pipeline is processing jobs. paused: The
 *           pipeline is not currently processing jobs.
 *         * `InputBucket` &mdash; (`String`) The Amazon S3 bucket in which
 *           you saved the media files that you want to transcode.
 *         * `OutputBucket` &mdash; (`String`) The Amazon S3 bucket in
 *           which you want Elastic Transcoder to save the transcoded
 *           files.
 *         * `Role` &mdash; (`String`) The IAM Amazon Resource Name (ARN)
 *           for the role that you want Elastic Transcoder to use to create
 *           the pipeline.
 *         * `Notifications` &mdash; (`Object`) The Amazon Simple
 *           Notification Service (Amazon SNS) topic that you want to
 *           notify to report job status. To receive notifications, you
 *           must also subscribe to the new topic in the Amazon SNS
 *           console. Progressing: The Amazon Simple Notification Service
 *           (Amazon SNS) topic that you want to notify when Elastic
 *           Transcoder has started to process the job. Completed: The
 *           Amazon SNS topic that you want to notify when Elastic
 *           Transcoder has finished processing the job. Warning: The
 *           Amazon SNS topic that you want to notify when Elastic
 *           Transcoder encounters a warning condition. Error: The Amazon
 *           SNS topic that you want to notify when Elastic Transcoder
 *           encounters an error condition.
 *           * `Progressing` &mdash; (`String`) The Amazon Simple
 *             Notification Service (Amazon SNS) topic that you want to
 *             notify when Elastic Transcoder has started to process the
 *             job.
 *           * `Completed` &mdash; (`String`) The Amazon SNS topic that you
 *             want to notify when Elastic Transcoder has finished
 *             processing the job.
 *           * `Warning` &mdash; (`String`) The Amazon SNS topic that you
 *             want to notify when Elastic Transcoder encounters a warning
 *             condition.
 *           * `Error` &mdash; (`String`) The Amazon SNS topic that you
 *             want to notify when Elastic Transcoder encounters an error
 *             condition.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method readPreset(params, callback)
 *   Calls the ReadPreset API operation.
 *   @param params [Object]
 *     * `Id` &mdash; **required** &mdash; (`String`) The identifier of
 *       the preset for which you want to get detailed information.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `Preset` &mdash; (`Object`) A section of the response body that
 *         provides information about the preset.
 *         * `Id` &mdash; (`String`) Identifier for the new preset. You use
 *           this value to get settings for the preset or to delete it.
 *         * `Name` &mdash; (`String`) The name of the preset.
 *         * `Description` &mdash; (`String`) A description of the preset.
 *         * `Container` &mdash; (`String`) The container type for the
 *           output file. This value must be mp4.
 *         * `Audio` &mdash; (`Object`) A section of the response body that
 *           provides information about the audio preset values.
 *           * `Codec` &mdash; (`String`) The audio codec for the output
 *             file. This value must be AAC.
 *           * `SampleRate` &mdash; (`String`) The sample rate of the audio
 *             stream in the output file, in Hertz. Valid values include:
 *             auto, 22050, 32000, 44100, 48000, 96000 If you specify auto,
 *             Elastic Transcoder automatically detects the sample rate.
 *           * `BitRate` &mdash; (`String`) The bit rate of the audio
 *             stream in the output file, in kilobits/second. Enter an
 *             integer between 64 and 320, inclusive.
 *           * `Channels` &mdash; (`String`) The number of audio channels
 *             in the output file. Valid values include: auto, 0, 1, 2 If
 *             you specify auto, Elastic Transcoder automatically detects
 *             the number of channels in the input file.
 *         * `Video` &mdash; (`Object`) A section of the response body that
 *           provides information about the video preset values.
 *           * `Codec` &mdash; (`String`) The video codec for the output
 *             file. This value must be H.264.
 *           * `CodecOptions` &mdash; (`Object<String>`) Profile The H.264
 *             profile that you want to use for the output file. Elastic
 *             Transcoder supports the following profiles: baseline: The
 *             profile most commonly used for videoconferencing and for
 *             mobile applications. main: The profile used for
 *             standard-definition digital TV broadcasts. high: The profile
 *             used for high-definition digital TV broadcasts and for
 *             Blu-ray discs. Level The H.264 level that you want to use
 *             for the output file. Elastic Transcoder supports the
 *             following levels: 1, 1b, 1.1, 1.2, 1.3, 2, 2.1, 2.2, 3, 3.1,
 *             3.2, 4, 4.1 MaxReferenceFrames The maximum number of
 *             previously decoded frames to use as a reference for decoding
 *             future frames. Valid values are integers 0 through 16, but
 *             we recommend that you not use a value greater than the
 *             following: Min(Floor(Maximum decoded picture buffer in
 *             macroblocks * 256 / (Width in pixels * Height in pixels)),
 *             16) where Width in pixels and Height in pixels represent the
 *             resolution of the output video and Maximum decoded picture
 *             buffer in macroblocks depends on the value of the Level
 *             object. (A macroblock is a block of pixels measuring 16x16.)
 *             Note that the calculation for maximum decoded picture
 *             buffer, which is similar to the calculation for maximum
 *             reference frames, uses macroblocks instead of pixels for the
 *             width and height of the video. To determine the value of
 *             maximum decoded picture buffer in macroblocks, see the
 *             following list (Level - Maximum decoded picture buffer): 1 -
 *             396 1b - 396 1.1 - 900 1.2 - 2376 1.3 - 2376 2 - 2376 2.1 -
 *             4752 2.2 - 8100 3 - 8100 3.1 - 18000 3.2 - 20480 4 - 32768
 *             4.1 - 32768
 *           * `KeyframesMaxDist` &mdash; (`String`) The maximum number of
 *             frames between key frames. Key frames are fully encoded
 *             frames; the frames between key frames are encoded based, in
 *             part, on the content of the key frames. The value is an
 *             integer formatted as a string; valid values are between 1
 *             and 100000, inclusive. A higher value results in higher
 *             compression but may also discernibly decrease video quality.
 *           * `FixedGOP` &mdash; (`String`) Whether to use a fixed value
 *             for FixedGOP. Valid values are true and false: true: Elastic
 *             Transcoder uses the value of KeyframesMaxDist for the
 *             distance between key frames (the number of frames in a group
 *             of pictures, or GOP). false: The distance between key frames
 *             can vary.
 *           * `BitRate` &mdash; (`String`) The bit rate of the video
 *             stream in the output file, in kilobits/second. Valid values
 *             depend on the values of Level and Profile. We recommend that
 *             you specify a value less than or equal to the maximum
 *             H.264-compliant value listed in the following list for your
 *             level and profile: Level - Maximum video bit rate in
 *             kilobits/second (baseline and main Profile) : maximum video
 *             bit rate in kilobits/second (high Profile) 1 - 64 : 80 1b -
 *             128 : 160 1.1 - 192 : 240 1.2 - 384 : 480 1.3 - 768 : 960 2
 *             \- 2000 : 2500 3 - 10000 : 12500 3.1 - 14000 : 17500 3.2 -
 *             20000 : 25000 4 - 20000 : 25000 4.1 - 50000 : 62500
 *           * `FrameRate` &mdash; (`String`) The frames per second for the
 *             video stream in the output file. Valid values include: auto,
 *             10, 15, 23.97, 24, 25, 29.97, 30, 60 If you specify auto,
 *             Elastic Transcoder uses the detected frame rate of the input
 *             source. If you specify a frame rate, we recommend that you
 *             perform the following calculation: Frame rate = maximum
 *             recommended decoding speed in luma samples/second / (width
 *             in pixels * height in pixels) where: width in pixels and
 *             height in pixels represent the Resolution of the output
 *             video. maximum recommended decoding speed in Luma
 *             samples/second is less than or equal to the maximum value
 *             listed in the following table, based on the value that you
 *             specified for Level. The maximum recommended decoding speed
 *             in Luma samples/second for each level is described in the
 *             following list (Level - Decoding speed): 1 - 380160 1b -
 *             380160 1.1 - 76800 1.2 - 1536000 1.3 - 3041280 2 - 3041280
 *             2.1 - 5068800 2.2 - 5184000 3 - 10368000 3.1 - 27648000 3.2
 *             \- 55296000 4 - 62914560 4.1 - 62914560
 *           * `Resolution` &mdash; (`String`) The width and height of the
 *             video in the output file, in pixels. Valid values are auto
 *             and width x height: auto: Elastic Transcoder attempts to
 *             preserve the width and height of the input file, subject to
 *             the following rules. width x height: The width and height of
 *             the output video in pixels. Note the following about
 *             specifying the width and height: The width must be an even
 *             integer between 128 and 4096, inclusive. The height must be
 *             an even integer between 96 and 3072, inclusive. If you
 *             specify a resolution that is less than the resolution of the
 *             input file, Elastic Transcoder rescales the output file to
 *             the lower resolution. If you specify a resolution that is
 *             greater than the resolution of the input file, Elastic
 *             Transcoder rescales the output to the higher resolution. We
 *             recommend that you specify a resolution for which the
 *             product of width and height is less than or equal to the
 *             applicable value in the following list (List - Max width x
 *             height value): 1 - 25344 1b - 25344 1.1 - 101376 1.2 -
 *             101376 1.3 - 101376 2 - 101376 2.1 - 202752 2.2 - 404720 3 -
 *             404720 3.1 - 921600 3.2 - 1310720 4 - 2097152 4.1 - 2097152
 *           * `AspectRatio` &mdash; (`String`) The display aspect ratio of
 *             the video in the output file. Valid values include: auto,
 *             1:1, 4:3, 3:2, 16:9 If you specify auto, Elastic Transcoder
 *             tries to preserve the aspect ratio of the input file. If you
 *             specify an aspect ratio for the output file that differs
 *             from aspect ratio of the input file, Elastic Transcoder adds
 *             pillarboxing (black bars on the sides) or letterboxing
 *             (black bars on the top and bottom) to maintain the aspect
 *             ratio of the active region of the video.
 *         * `Thumbnails` &mdash; (`Object`) A section of the response body
 *           that provides information about the thumbnail preset values,
 *           if any.
 *           * `Format` &mdash; (`String`) The format of thumbnails, if
 *             any. Valid values are jpg and png. You specify whether you
 *             want Elastic Transcoder to create thumbnails when you create
 *             a job.
 *           * `Interval` &mdash; (`String`) The number of seconds between
 *             thumbnails. Specify an integer value.
 *           * `Resolution` &mdash; (`String`) The width and height of
 *             thumbnail files in pixels. Specify a value in the format
 *             width x height where both values are even integers. The
 *             values cannot exceed the width and height that you specified
 *             in the Video:Resolution object.
 *           * `AspectRatio` &mdash; (`String`) The aspect ratio of
 *             thumbnails. Valid values include: auto, 1:1, 4:3, 3:2, 16:9
 *             If you specify auto, Elastic Transcoder tries to preserve
 *             the aspect ratio of the video in the output file.
 *         * `Type` &mdash; (`String`) Whether the preset is a default
 *           preset provided by Elastic Transcoder (System) or a preset
 *           that you have defined (Custom).
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method testRole(params, callback)
 *   Calls the TestRole API operation.
 *   @param params [Object]
 *     * `Role` &mdash; **required** &mdash; (`String`) The IAM Amazon
 *       Resource Name (ARN) for the role that you want Elastic
 *       Transcoder to test.
 *     * `InputBucket` &mdash; **required** &mdash; (`String`) The Amazon
 *       S3 bucket that contains media files to be transcoded. The action
 *       attempts to read from this bucket.
 *     * `OutputBucket` &mdash; **required** &mdash; (`String`) The
 *       Amazon S3 bucket that Elastic Transcoder will write transcoded
 *       media files to. The action attempts to read from this bucket.
 *     * `Topics` &mdash; **required** &mdash; (`Array<String>`) The ARNs
 *       of one or more Amazon Simple Notification Service (Amazon SNS)
 *       topics that you want the action to send a test notification to.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `Success` &mdash; (`String`) If the operation is successful,
 *         this value is true; otherwise, the value is false.
 *       * `Messages` &mdash; (`Array<String>`) If the Success element
 *         contains false, this value is an array of one or more error
 *         messages that were generated during the test process.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method updatePipelineNotifications(params, callback)
 *   Calls the UpdatePipelineNotifications API operation.
 *   @param params [Object]
 *     * `Id` &mdash; **required** &mdash; (`String`) The identifier of
 *       the pipeline for which you want to change notification settings.
 *     * `Notifications` &mdash; **required** &mdash; (`Object`) The
 *       Amazon Simple Notification Service (Amazon SNS) topic that you
 *       want to notify to report job status. To receive notifications,
 *       you must also subscribe to the new topic in the Amazon SNS
 *       console. Progressing: The Amazon Simple Notification Service
 *       (Amazon SNS) topic that you want to notify when Elastic
 *       Transcoder has started to process the job. Completed: The Amazon
 *       SNS topic that you want to notify when Elastic Transcoder has
 *       finished processing the job. Warning: The Amazon SNS topic that
 *       you want to notify when Elastic Transcoder encounters a warning
 *       condition. Error: The Amazon SNS topic that you want to notify
 *       when Elastic Transcoder encounters an error condition.
 *       * `Progressing` &mdash; (`String`) The Amazon Simple
 *         Notification Service (Amazon SNS) topic that you want to
 *         notify when Elastic Transcoder has started to process the job.
 *       * `Completed` &mdash; (`String`) The Amazon SNS topic that you
 *         want to notify when Elastic Transcoder has finished processing
 *         the job.
 *       * `Warning` &mdash; (`String`) The Amazon SNS topic that you
 *         want to notify when Elastic Transcoder encounters a warning
 *         condition.
 *       * `Error` &mdash; (`String`) The Amazon SNS topic that you want
 *         to notify when Elastic Transcoder encounters an error
 *         condition.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `Pipeline` &mdash; (`Object`) A section of the response body
 *         that provides information about the pipeline.
 *         * `Id` &mdash; (`String`) The identifier for the pipeline. You
 *           use this value to identify the pipeline in which you want to
 *           perform a variety of operations, such as creating a job or a
 *           preset.
 *         * `Name` &mdash; (`String`) The name of the pipeline. We
 *           recommend that the name be unique within the AWS account, but
 *           uniqueness is not enforced. Constraints: Maximum 40 characters
 *         * `Status` &mdash; (`String`) The current status of the
 *           pipeline: active: The pipeline is processing jobs. paused: The
 *           pipeline is not currently processing jobs.
 *         * `InputBucket` &mdash; (`String`) The Amazon S3 bucket in which
 *           you saved the media files that you want to transcode.
 *         * `OutputBucket` &mdash; (`String`) The Amazon S3 bucket in
 *           which you want Elastic Transcoder to save the transcoded
 *           files.
 *         * `Role` &mdash; (`String`) The IAM Amazon Resource Name (ARN)
 *           for the role that you want Elastic Transcoder to use to create
 *           the pipeline.
 *         * `Notifications` &mdash; (`Object`) The Amazon Simple
 *           Notification Service (Amazon SNS) topic that you want to
 *           notify to report job status. To receive notifications, you
 *           must also subscribe to the new topic in the Amazon SNS
 *           console. Progressing: The Amazon Simple Notification Service
 *           (Amazon SNS) topic that you want to notify when Elastic
 *           Transcoder has started to process the job. Completed: The
 *           Amazon SNS topic that you want to notify when Elastic
 *           Transcoder has finished processing the job. Warning: The
 *           Amazon SNS topic that you want to notify when Elastic
 *           Transcoder encounters a warning condition. Error: The Amazon
 *           SNS topic that you want to notify when Elastic Transcoder
 *           encounters an error condition.
 *           * `Progressing` &mdash; (`String`) The Amazon Simple
 *             Notification Service (Amazon SNS) topic that you want to
 *             notify when Elastic Transcoder has started to process the
 *             job.
 *           * `Completed` &mdash; (`String`) The Amazon SNS topic that you
 *             want to notify when Elastic Transcoder has finished
 *             processing the job.
 *           * `Warning` &mdash; (`String`) The Amazon SNS topic that you
 *             want to notify when Elastic Transcoder encounters a warning
 *             condition.
 *           * `Error` &mdash; (`String`) The Amazon SNS topic that you
 *             want to notify when Elastic Transcoder encounters an error
 *             condition.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method updatePipelineStatus(params, callback)
 *   Calls the UpdatePipelineStatus API operation.
 *   @param params [Object]
 *     * `Id` &mdash; **required** &mdash; (`String`) The identifier of
 *       the pipeline to update.
 *     * `Status` &mdash; **required** &mdash; (`String`) The new status
 *       of the pipeline: active: Enable the pipeline, so it starts
 *       processing jobs. paused: Disable the pipeline, so it stops
 *       processing jobs.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `Pipeline` &mdash; (`Object`) A section of the response body
 *         that provides information about the pipeline.
 *         * `Id` &mdash; (`String`) The identifier for the pipeline. You
 *           use this value to identify the pipeline in which you want to
 *           perform a variety of operations, such as creating a job or a
 *           preset.
 *         * `Name` &mdash; (`String`) The name of the pipeline. We
 *           recommend that the name be unique within the AWS account, but
 *           uniqueness is not enforced. Constraints: Maximum 40 characters
 *         * `Status` &mdash; (`String`) The current status of the
 *           pipeline: active: The pipeline is processing jobs. paused: The
 *           pipeline is not currently processing jobs.
 *         * `InputBucket` &mdash; (`String`) The Amazon S3 bucket in which
 *           you saved the media files that you want to transcode.
 *         * `OutputBucket` &mdash; (`String`) The Amazon S3 bucket in
 *           which you want Elastic Transcoder to save the transcoded
 *           files.
 *         * `Role` &mdash; (`String`) The IAM Amazon Resource Name (ARN)
 *           for the role that you want Elastic Transcoder to use to create
 *           the pipeline.
 *         * `Notifications` &mdash; (`Object`) The Amazon Simple
 *           Notification Service (Amazon SNS) topic that you want to
 *           notify to report job status. To receive notifications, you
 *           must also subscribe to the new topic in the Amazon SNS
 *           console. Progressing: The Amazon Simple Notification Service
 *           (Amazon SNS) topic that you want to notify when Elastic
 *           Transcoder has started to process the job. Completed: The
 *           Amazon SNS topic that you want to notify when Elastic
 *           Transcoder has finished processing the job. Warning: The
 *           Amazon SNS topic that you want to notify when Elastic
 *           Transcoder encounters a warning condition. Error: The Amazon
 *           SNS topic that you want to notify when Elastic Transcoder
 *           encounters an error condition.
 *           * `Progressing` &mdash; (`String`) The Amazon Simple
 *             Notification Service (Amazon SNS) topic that you want to
 *             notify when Elastic Transcoder has started to process the
 *             job.
 *           * `Completed` &mdash; (`String`) The Amazon SNS topic that you
 *             want to notify when Elastic Transcoder has finished
 *             processing the job.
 *           * `Warning` &mdash; (`String`) The Amazon SNS topic that you
 *             want to notify when Elastic Transcoder encounters a warning
 *             condition.
 *           * `Error` &mdash; (`String`) The Amazon SNS topic that you
 *             want to notify when Elastic Transcoder encounters an error
 *             condition.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 *
 * @!method constructor(options)
 *   Constructs a service client object.  This client has one method for
 *   each API operation.
 *   @option options [String] endpoint The endpoint URI to send requests
 *     to.  The default endpoint is built from the configured `region`.
 *     The endpoint should be a string like `'https://s3.amazonaws.com'`.
 *   @option (see AWS.Config.constructor)
 *
 * @!attribute endpoint
 *   @return [AWS.Endpoint] an Endpoint object representing'
 *     the endpoint URL for service requests.'
 *
 */
AWS.ElasticTranscoder.Client = inherit({});
