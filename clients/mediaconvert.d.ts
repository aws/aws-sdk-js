import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class MediaConvert extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: MediaConvert.Types.ClientConfiguration)
  config: Config & MediaConvert.Types.ClientConfiguration;
  /**
   * Permanently remove a job from a queue. Once you have canceled a job, you can't start it again. You can't delete a running job.
   */
  cancelJob(params: MediaConvert.Types.CancelJobRequest, callback?: (err: AWSError, data: MediaConvert.Types.CancelJobResponse) => void): Request<MediaConvert.Types.CancelJobResponse, AWSError>;
  /**
   * Permanently remove a job from a queue. Once you have canceled a job, you can't start it again. You can't delete a running job.
   */
  cancelJob(callback?: (err: AWSError, data: MediaConvert.Types.CancelJobResponse) => void): Request<MediaConvert.Types.CancelJobResponse, AWSError>;
  /**
   * Create a new transcoding job. For information about jobs and job settings, see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   */
  createJob(params: MediaConvert.Types.CreateJobRequest, callback?: (err: AWSError, data: MediaConvert.Types.CreateJobResponse) => void): Request<MediaConvert.Types.CreateJobResponse, AWSError>;
  /**
   * Create a new transcoding job. For information about jobs and job settings, see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   */
  createJob(callback?: (err: AWSError, data: MediaConvert.Types.CreateJobResponse) => void): Request<MediaConvert.Types.CreateJobResponse, AWSError>;
  /**
   * Create a new job template. For information about job templates see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   */
  createJobTemplate(params: MediaConvert.Types.CreateJobTemplateRequest, callback?: (err: AWSError, data: MediaConvert.Types.CreateJobTemplateResponse) => void): Request<MediaConvert.Types.CreateJobTemplateResponse, AWSError>;
  /**
   * Create a new job template. For information about job templates see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   */
  createJobTemplate(callback?: (err: AWSError, data: MediaConvert.Types.CreateJobTemplateResponse) => void): Request<MediaConvert.Types.CreateJobTemplateResponse, AWSError>;
  /**
   * Create a new preset. For information about job templates see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   */
  createPreset(params: MediaConvert.Types.CreatePresetRequest, callback?: (err: AWSError, data: MediaConvert.Types.CreatePresetResponse) => void): Request<MediaConvert.Types.CreatePresetResponse, AWSError>;
  /**
   * Create a new preset. For information about job templates see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   */
  createPreset(callback?: (err: AWSError, data: MediaConvert.Types.CreatePresetResponse) => void): Request<MediaConvert.Types.CreatePresetResponse, AWSError>;
  /**
   * Create a new transcoding queue. For information about job templates see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   */
  createQueue(params: MediaConvert.Types.CreateQueueRequest, callback?: (err: AWSError, data: MediaConvert.Types.CreateQueueResponse) => void): Request<MediaConvert.Types.CreateQueueResponse, AWSError>;
  /**
   * Create a new transcoding queue. For information about job templates see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   */
  createQueue(callback?: (err: AWSError, data: MediaConvert.Types.CreateQueueResponse) => void): Request<MediaConvert.Types.CreateQueueResponse, AWSError>;
  /**
   * Permanently delete a job template you have created.
   */
  deleteJobTemplate(params: MediaConvert.Types.DeleteJobTemplateRequest, callback?: (err: AWSError, data: MediaConvert.Types.DeleteJobTemplateResponse) => void): Request<MediaConvert.Types.DeleteJobTemplateResponse, AWSError>;
  /**
   * Permanently delete a job template you have created.
   */
  deleteJobTemplate(callback?: (err: AWSError, data: MediaConvert.Types.DeleteJobTemplateResponse) => void): Request<MediaConvert.Types.DeleteJobTemplateResponse, AWSError>;
  /**
   * Permanently delete a preset you have created.
   */
  deletePreset(params: MediaConvert.Types.DeletePresetRequest, callback?: (err: AWSError, data: MediaConvert.Types.DeletePresetResponse) => void): Request<MediaConvert.Types.DeletePresetResponse, AWSError>;
  /**
   * Permanently delete a preset you have created.
   */
  deletePreset(callback?: (err: AWSError, data: MediaConvert.Types.DeletePresetResponse) => void): Request<MediaConvert.Types.DeletePresetResponse, AWSError>;
  /**
   * Permanently delete a queue you have created.
   */
  deleteQueue(params: MediaConvert.Types.DeleteQueueRequest, callback?: (err: AWSError, data: MediaConvert.Types.DeleteQueueResponse) => void): Request<MediaConvert.Types.DeleteQueueResponse, AWSError>;
  /**
   * Permanently delete a queue you have created.
   */
  deleteQueue(callback?: (err: AWSError, data: MediaConvert.Types.DeleteQueueResponse) => void): Request<MediaConvert.Types.DeleteQueueResponse, AWSError>;
  /**
   * Send an request with an empty body to the regional API endpoint to get your account API endpoint.
   */
  describeEndpoints(params: MediaConvert.Types.DescribeEndpointsRequest, callback?: (err: AWSError, data: MediaConvert.Types.DescribeEndpointsResponse) => void): Request<MediaConvert.Types.DescribeEndpointsResponse, AWSError>;
  /**
   * Send an request with an empty body to the regional API endpoint to get your account API endpoint.
   */
  describeEndpoints(callback?: (err: AWSError, data: MediaConvert.Types.DescribeEndpointsResponse) => void): Request<MediaConvert.Types.DescribeEndpointsResponse, AWSError>;
  /**
   * Retrieve the JSON for a specific completed transcoding job.
   */
  getJob(params: MediaConvert.Types.GetJobRequest, callback?: (err: AWSError, data: MediaConvert.Types.GetJobResponse) => void): Request<MediaConvert.Types.GetJobResponse, AWSError>;
  /**
   * Retrieve the JSON for a specific completed transcoding job.
   */
  getJob(callback?: (err: AWSError, data: MediaConvert.Types.GetJobResponse) => void): Request<MediaConvert.Types.GetJobResponse, AWSError>;
  /**
   * Retrieve the JSON for a specific job template.
   */
  getJobTemplate(params: MediaConvert.Types.GetJobTemplateRequest, callback?: (err: AWSError, data: MediaConvert.Types.GetJobTemplateResponse) => void): Request<MediaConvert.Types.GetJobTemplateResponse, AWSError>;
  /**
   * Retrieve the JSON for a specific job template.
   */
  getJobTemplate(callback?: (err: AWSError, data: MediaConvert.Types.GetJobTemplateResponse) => void): Request<MediaConvert.Types.GetJobTemplateResponse, AWSError>;
  /**
   * Retrieve the JSON for a specific preset.
   */
  getPreset(params: MediaConvert.Types.GetPresetRequest, callback?: (err: AWSError, data: MediaConvert.Types.GetPresetResponse) => void): Request<MediaConvert.Types.GetPresetResponse, AWSError>;
  /**
   * Retrieve the JSON for a specific preset.
   */
  getPreset(callback?: (err: AWSError, data: MediaConvert.Types.GetPresetResponse) => void): Request<MediaConvert.Types.GetPresetResponse, AWSError>;
  /**
   * Retrieve the JSON for a specific queue.
   */
  getQueue(params: MediaConvert.Types.GetQueueRequest, callback?: (err: AWSError, data: MediaConvert.Types.GetQueueResponse) => void): Request<MediaConvert.Types.GetQueueResponse, AWSError>;
  /**
   * Retrieve the JSON for a specific queue.
   */
  getQueue(callback?: (err: AWSError, data: MediaConvert.Types.GetQueueResponse) => void): Request<MediaConvert.Types.GetQueueResponse, AWSError>;
  /**
   * Retrieve a JSON array of up to twenty of your job templates. This will return the templates themselves, not just a list of them. To retrieve the next twenty templates, use the nextToken string returned with the array
   */
  listJobTemplates(params: MediaConvert.Types.ListJobTemplatesRequest, callback?: (err: AWSError, data: MediaConvert.Types.ListJobTemplatesResponse) => void): Request<MediaConvert.Types.ListJobTemplatesResponse, AWSError>;
  /**
   * Retrieve a JSON array of up to twenty of your job templates. This will return the templates themselves, not just a list of them. To retrieve the next twenty templates, use the nextToken string returned with the array
   */
  listJobTemplates(callback?: (err: AWSError, data: MediaConvert.Types.ListJobTemplatesResponse) => void): Request<MediaConvert.Types.ListJobTemplatesResponse, AWSError>;
  /**
   * Retrieve a JSON array of up to twenty of your most recently created jobs. This array includes in-process, completed, and errored jobs. This will return the jobs themselves, not just a list of the jobs. To retrieve the twenty next most recent jobs, use the nextToken string returned with the array.
   */
  listJobs(params: MediaConvert.Types.ListJobsRequest, callback?: (err: AWSError, data: MediaConvert.Types.ListJobsResponse) => void): Request<MediaConvert.Types.ListJobsResponse, AWSError>;
  /**
   * Retrieve a JSON array of up to twenty of your most recently created jobs. This array includes in-process, completed, and errored jobs. This will return the jobs themselves, not just a list of the jobs. To retrieve the twenty next most recent jobs, use the nextToken string returned with the array.
   */
  listJobs(callback?: (err: AWSError, data: MediaConvert.Types.ListJobsResponse) => void): Request<MediaConvert.Types.ListJobsResponse, AWSError>;
  /**
   * Retrieve a JSON array of up to twenty of your presets. This will return the presets themselves, not just a list of them. To retrieve the next twenty presets, use the nextToken string returned with the array.
   */
  listPresets(params: MediaConvert.Types.ListPresetsRequest, callback?: (err: AWSError, data: MediaConvert.Types.ListPresetsResponse) => void): Request<MediaConvert.Types.ListPresetsResponse, AWSError>;
  /**
   * Retrieve a JSON array of up to twenty of your presets. This will return the presets themselves, not just a list of them. To retrieve the next twenty presets, use the nextToken string returned with the array.
   */
  listPresets(callback?: (err: AWSError, data: MediaConvert.Types.ListPresetsResponse) => void): Request<MediaConvert.Types.ListPresetsResponse, AWSError>;
  /**
   * Retrieve a JSON array of up to twenty of your queues. This will return the queues themselves, not just a list of them. To retrieve the next twenty queues, use the nextToken string returned with the array.
   */
  listQueues(params: MediaConvert.Types.ListQueuesRequest, callback?: (err: AWSError, data: MediaConvert.Types.ListQueuesResponse) => void): Request<MediaConvert.Types.ListQueuesResponse, AWSError>;
  /**
   * Retrieve a JSON array of up to twenty of your queues. This will return the queues themselves, not just a list of them. To retrieve the next twenty queues, use the nextToken string returned with the array.
   */
  listQueues(callback?: (err: AWSError, data: MediaConvert.Types.ListQueuesResponse) => void): Request<MediaConvert.Types.ListQueuesResponse, AWSError>;
  /**
   * Retrieve the tags for a MediaConvert resource.
   */
  listTagsForResource(params: MediaConvert.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: MediaConvert.Types.ListTagsForResourceResponse) => void): Request<MediaConvert.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Retrieve the tags for a MediaConvert resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: MediaConvert.Types.ListTagsForResourceResponse) => void): Request<MediaConvert.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Tag a MediaConvert queue, preset, or job template. For information about these resource types, see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   */
  tagResource(params: MediaConvert.Types.TagResourceRequest, callback?: (err: AWSError, data: MediaConvert.Types.TagResourceResponse) => void): Request<MediaConvert.Types.TagResourceResponse, AWSError>;
  /**
   * Tag a MediaConvert queue, preset, or job template. For information about these resource types, see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   */
  tagResource(callback?: (err: AWSError, data: MediaConvert.Types.TagResourceResponse) => void): Request<MediaConvert.Types.TagResourceResponse, AWSError>;
  /**
   * Untag a MediaConvert queue, preset, or job template. For information about these resource types, see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   */
  untagResource(params: MediaConvert.Types.UntagResourceRequest, callback?: (err: AWSError, data: MediaConvert.Types.UntagResourceResponse) => void): Request<MediaConvert.Types.UntagResourceResponse, AWSError>;
  /**
   * Untag a MediaConvert queue, preset, or job template. For information about these resource types, see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
   */
  untagResource(callback?: (err: AWSError, data: MediaConvert.Types.UntagResourceResponse) => void): Request<MediaConvert.Types.UntagResourceResponse, AWSError>;
  /**
   * Modify one of your existing job templates.
   */
  updateJobTemplate(params: MediaConvert.Types.UpdateJobTemplateRequest, callback?: (err: AWSError, data: MediaConvert.Types.UpdateJobTemplateResponse) => void): Request<MediaConvert.Types.UpdateJobTemplateResponse, AWSError>;
  /**
   * Modify one of your existing job templates.
   */
  updateJobTemplate(callback?: (err: AWSError, data: MediaConvert.Types.UpdateJobTemplateResponse) => void): Request<MediaConvert.Types.UpdateJobTemplateResponse, AWSError>;
  /**
   * Modify one of your existing presets.
   */
  updatePreset(params: MediaConvert.Types.UpdatePresetRequest, callback?: (err: AWSError, data: MediaConvert.Types.UpdatePresetResponse) => void): Request<MediaConvert.Types.UpdatePresetResponse, AWSError>;
  /**
   * Modify one of your existing presets.
   */
  updatePreset(callback?: (err: AWSError, data: MediaConvert.Types.UpdatePresetResponse) => void): Request<MediaConvert.Types.UpdatePresetResponse, AWSError>;
  /**
   * Modify one of your existing queues.
   */
  updateQueue(params: MediaConvert.Types.UpdateQueueRequest, callback?: (err: AWSError, data: MediaConvert.Types.UpdateQueueResponse) => void): Request<MediaConvert.Types.UpdateQueueResponse, AWSError>;
  /**
   * Modify one of your existing queues.
   */
  updateQueue(callback?: (err: AWSError, data: MediaConvert.Types.UpdateQueueResponse) => void): Request<MediaConvert.Types.UpdateQueueResponse, AWSError>;
}
declare namespace MediaConvert {
  export type AacAudioDescriptionBroadcasterMix = "BROADCASTER_MIXED_AD"|"NORMAL"|string;
  export type AacCodecProfile = "LC"|"HEV1"|"HEV2"|string;
  export type AacCodingMode = "AD_RECEIVER_MIX"|"CODING_MODE_1_0"|"CODING_MODE_1_1"|"CODING_MODE_2_0"|"CODING_MODE_5_1"|string;
  export type AacRateControlMode = "CBR"|"VBR"|string;
  export type AacRawFormat = "LATM_LOAS"|"NONE"|string;
  export interface AacSettings {
    AudioDescriptionBroadcasterMix?: AacAudioDescriptionBroadcasterMix;
    /**
     * Average bitrate in bits/second. Defaults and valid values depend on rate control mode and profile.
     */
    Bitrate?: __integerMin6000Max1024000;
    CodecProfile?: AacCodecProfile;
    CodingMode: AacCodingMode;
    RateControlMode?: AacRateControlMode;
    RawFormat?: AacRawFormat;
    /**
     * Sample rate in Hz. Valid values depend on rate control mode and profile.
     */
    SampleRate: __integerMin8000Max96000;
    Specification?: AacSpecification;
    VbrQuality?: AacVbrQuality;
  }
  export type AacSpecification = "MPEG2"|"MPEG4"|string;
  export type AacVbrQuality = "LOW"|"MEDIUM_LOW"|"MEDIUM_HIGH"|"HIGH"|string;
  export type Ac3BitstreamMode = "COMPLETE_MAIN"|"COMMENTARY"|"DIALOGUE"|"EMERGENCY"|"HEARING_IMPAIRED"|"MUSIC_AND_EFFECTS"|"VISUALLY_IMPAIRED"|"VOICE_OVER"|string;
  export type Ac3CodingMode = "CODING_MODE_1_0"|"CODING_MODE_1_1"|"CODING_MODE_2_0"|"CODING_MODE_3_2_LFE"|string;
  export type Ac3DynamicRangeCompressionProfile = "FILM_STANDARD"|"NONE"|string;
  export type Ac3LfeFilter = "ENABLED"|"DISABLED"|string;
  export type Ac3MetadataControl = "FOLLOW_INPUT"|"USE_CONFIGURED"|string;
  export interface Ac3Settings {
    /**
     * Average bitrate in bits/second. Valid bitrates depend on the coding mode.
     */
    Bitrate?: __integerMin64000Max640000;
    BitstreamMode?: Ac3BitstreamMode;
    CodingMode?: Ac3CodingMode;
    /**
     * Sets the dialnorm for the output. If blank and input audio is Dolby Digital, dialnorm will be passed through.
     */
    Dialnorm?: __integerMin1Max31;
    DynamicRangeCompressionProfile?: Ac3DynamicRangeCompressionProfile;
    LfeFilter?: Ac3LfeFilter;
    MetadataControl?: Ac3MetadataControl;
    /**
     * Sample rate in hz. Sample rate is always 48000.
     */
    SampleRate?: __integerMin48000Max48000;
  }
  export type AfdSignaling = "NONE"|"AUTO"|"FIXED"|string;
  export interface AiffSettings {
    /**
     * Specify Bit depth (BitDepth), in bits per sample, to choose the encoding quality for this audio track.
     */
    BitDepth?: __integerMin16Max24;
    /**
     * Set Channels to specify the number of channels in this output audio track. Choosing Mono in the console will give you 1 output channel; choosing Stereo will give you 2. In the API, valid values are 1 and 2.
     */
    Channels?: __integerMin1Max2;
    /**
     * Sample rate in hz.
     */
    SampleRate?: __integerMin8000Max192000;
  }
  export interface AncillarySourceSettings {
    /**
     * Specifies the 608 channel number in the ancillary data track from which to extract captions. Unused for passthrough.
     */
    SourceAncillaryChannelNumber?: __integerMin1Max4;
  }
  export type AntiAlias = "DISABLED"|"ENABLED"|string;
  export type AudioCodec = "AAC"|"MP2"|"WAV"|"AIFF"|"AC3"|"EAC3"|"PASSTHROUGH"|string;
  export interface AudioCodecSettings {
    AacSettings?: AacSettings;
    Ac3Settings?: Ac3Settings;
    AiffSettings?: AiffSettings;
    Codec: AudioCodec;
    Eac3Settings?: Eac3Settings;
    Mp2Settings?: Mp2Settings;
    WavSettings?: WavSettings;
  }
  export type AudioDefaultSelection = "DEFAULT"|"NOT_DEFAULT"|string;
  export interface AudioDescription {
    AudioNormalizationSettings?: AudioNormalizationSettings;
    /**
     * Specifies which audio data to use from each input. In the simplest case, specify an "Audio Selector":#inputs-audio_selector by name based on its order within each input. For example if you specify "Audio Selector 3", then the third audio selector will be used from each input. If an input does not have an "Audio Selector 3", then the audio selector marked as "default" in that input will be used. If there is no audio selector marked as "default", silence will be inserted for the duration of that input. Alternatively, an "Audio Selector Group":#inputs-audio_selector_group name may be specified, with similar default/silence behavior. If no audio_source_name is specified, then "Audio Selector 1" will be chosen automatically.
     */
    AudioSourceName?: __string;
    /**
     * Applies only if Follow Input Audio Type is unchecked (false). A number between 0 and 255. The following are defined in ISO-IEC 13818-1: 0 = Undefined, 1 = Clean Effects, 2 = Hearing Impaired, 3 = Visually Impaired Commentary, 4-255 = Reserved.
     */
    AudioType?: __integerMin0Max255;
    AudioTypeControl?: AudioTypeControl;
    CodecSettings: AudioCodecSettings;
    /**
     * Specify the language for this audio output track, using the ISO 639-2 or ISO 639-3 three-letter language code. The language specified will be used when 'Follow Input Language Code' is not selected or when 'Follow Input Language Code' is selected but there is no ISO 639 language code specified by the input.
     */
    CustomLanguageCode?: __stringMin3Max3PatternAZaZ3;
    /**
     * Indicates the language of the audio output track. The ISO 639 language specified in the 'Language Code' drop down will be used when 'Follow Input Language Code' is not selected or when 'Follow Input Language Code' is selected but there is no ISO 639 language code specified by the input.
     */
    LanguageCode?: LanguageCode;
    LanguageCodeControl?: AudioLanguageCodeControl;
    /**
     * Advanced audio remixing settings.
     */
    RemixSettings?: RemixSettings;
    /**
     * Used for MS Smooth and Apple HLS outputs. Indicates the name displayed by the player (eg. English, or Director Commentary). Alphanumeric characters, spaces, and underscore are legal.
     */
    StreamName?: __stringPatternWS;
  }
  export type AudioLanguageCodeControl = "FOLLOW_INPUT"|"USE_CONFIGURED"|string;
  export type AudioNormalizationAlgorithm = "ITU_BS_1770_1"|"ITU_BS_1770_2"|string;
  export type AudioNormalizationAlgorithmControl = "CORRECT_AUDIO"|"MEASURE_ONLY"|string;
  export type AudioNormalizationLoudnessLogging = "LOG"|"DONT_LOG"|string;
  export type AudioNormalizationPeakCalculation = "TRUE_PEAK"|"NONE"|string;
  export interface AudioNormalizationSettings {
    Algorithm?: AudioNormalizationAlgorithm;
    AlgorithmControl?: AudioNormalizationAlgorithmControl;
    /**
     * Content measuring above this level will be corrected to the target level. Content measuring below this level will not be corrected. Gating only applies when not using real_time_correction.
     */
    CorrectionGateLevel?: __integerMinNegative70Max0;
    LoudnessLogging?: AudioNormalizationLoudnessLogging;
    PeakCalculation?: AudioNormalizationPeakCalculation;
    /**
     * Target LKFS(loudness) to adjust volume to. If no value is entered, a default value will be used according to the chosen algorithm. The CALM Act (1770-1) recommends a target of -24 LKFS. The EBU R-128 specification (1770-2) recommends a target of -23 LKFS.
     */
    TargetLkfs?: __doubleMinNegative59Max0;
  }
  export interface AudioSelector {
    /**
     * Selects a specific language code from within an audio source, using the ISO 639-2 or ISO 639-3 three-letter language code
     */
    CustomLanguageCode?: __stringMin3Max3PatternAZaZ3;
    DefaultSelection?: AudioDefaultSelection;
    /**
     * Specifies audio data from an external file source.
     */
    ExternalAudioFileInput?: __stringPatternS3MM2VVMMPPEEGGAAVVIIMMPP4FFLLVVMMPPTTMMPPGGMM4VVTTRRPPFF4VVMM2TTSSTTSS264HH264MMKKVVMMOOVVMMTTSSMM2TTWWMMVVAASSFFVVOOBB3GGPP3GGPPPPMMXXFFDDIIVVXXXXVVIIDDRRAAWWDDVVGGXXFFMM1VV3GG2VVMMFFMM3UU8LLCCHHGGXXFFMMPPEEGG2MMXXFFMMPPEEGG2MMXXFFHHDDWWAAVVYY4MMAAAACCAAIIFFFFMMPP2AACC3EECC3DDTTSSEE;
    /**
     * Selects a specific language code from within an audio source.
     */
    LanguageCode?: LanguageCode;
    /**
     * Specifies a time delta in milliseconds to offset the audio from the input video.
     */
    Offset?: __integerMinNegative2147483648Max2147483647;
    /**
     * Selects a specific PID from within an audio source (e.g. 257 selects PID 0x101).
     */
    Pids?: __listOf__integerMin1Max2147483647;
    /**
     * Use this setting for input streams that contain Dolby E, to have the service extract specific program data from the track. To select multiple programs, create multiple selectors with the same Track and different Program numbers. In the console, this setting is visible when you set Selector type to Track. Choose the program number from the dropdown list. If you are sending a JSON file, provide the program ID, which is part of the audio metadata. If your input file has incorrect metadata, you can choose All channels instead of a program number to have the service ignore the program IDs and include all the programs in the track.
     */
    ProgramSelection?: __integerMin0Max8;
    /**
     * Use these settings to reorder the audio channels of one input to match those of another input. This allows you to combine the two files into a single output, one after the other.
     */
    RemixSettings?: RemixSettings;
    SelectorType?: AudioSelectorType;
    /**
     * Identify a track from the input audio to include in this selector by entering the track index number. To include several tracks in a single audio selector, specify multiple tracks as follows. Using the console, enter a comma-separated list. For examle, type "1,2,3" to include tracks 1 through 3. Specifying directly in your JSON job file, provide the track numbers in an array. For example, "tracks": [1,2,3].
     */
    Tracks?: __listOf__integerMin1Max2147483647;
  }
  export interface AudioSelectorGroup {
    /**
     * Name of an Audio Selector within the same input to include in the group.  Audio selector names are standardized, based on their order within the input (e.g., "Audio Selector 1"). The audio selector name parameter can be repeated to add any number of audio selectors to the group.
     */
    AudioSelectorNames: __listOf__stringMin1;
  }
  export type AudioSelectorType = "PID"|"TRACK"|"LANGUAGE_CODE"|string;
  export type AudioTypeControl = "FOLLOW_INPUT"|"USE_CONFIGURED"|string;
  export interface AvailBlanking {
    /**
     * Blanking image to be used. Leave empty for solid black. Only bmp and png images are supported.
     */
    AvailBlankingImage?: __stringMin14PatternS3BmpBMPPngPNG;
  }
  export interface BurninDestinationSettings {
    Alignment: BurninSubtitleAlignment;
    BackgroundColor?: BurninSubtitleBackgroundColor;
    /**
     * Specifies the opacity of the background rectangle. 255 is opaque; 0 is transparent. Leaving this parameter blank is equivalent to setting it to 0 (transparent). All burn-in and DVB-Sub font settings must match.
     */
    BackgroundOpacity?: __integerMin0Max255;
    FontColor?: BurninSubtitleFontColor;
    /**
     * Specifies the opacity of the burned-in captions. 255 is opaque; 0 is transparent.
All burn-in and DVB-Sub font settings must match.
     */
    FontOpacity: __integerMin0Max255;
    /**
     * Font resolution in DPI (dots per inch); default is 96 dpi.
All burn-in and DVB-Sub font settings must match.
     */
    FontResolution?: __integerMin96Max600;
    /**
     * A positive integer indicates the exact font size in points. Set to 0 for automatic font size selection. All burn-in and DVB-Sub font settings must match.
     */
    FontSize?: __integerMin0Max96;
    OutlineColor: BurninSubtitleOutlineColor;
    /**
     * Specifies font outline size in pixels. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
     */
    OutlineSize: __integerMin0Max10;
    ShadowColor?: BurninSubtitleShadowColor;
    /**
     * Specifies the opacity of the shadow. 255 is opaque; 0 is transparent. Leaving this parameter blank is equivalent to setting it to 0 (transparent). All burn-in and DVB-Sub font settings must match.
     */
    ShadowOpacity?: __integerMin0Max255;
    /**
     * Specifies the horizontal offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels to the left. All burn-in and DVB-Sub font settings must match.
     */
    ShadowXOffset?: __integerMinNegative2147483648Max2147483647;
    /**
     * Specifies the vertical offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels above the text. All burn-in and DVB-Sub font settings must match.
     */
    ShadowYOffset?: __integerMinNegative2147483648Max2147483647;
    TeletextSpacing?: BurninSubtitleTeletextSpacing;
    /**
     * Specifies the horizontal position of the caption relative to the left side of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the left of the output. If no explicit x_position is provided, the horizontal caption position will be determined by the alignment parameter. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
     */
    XPosition?: __integerMin0Max2147483647;
    /**
     * Specifies the vertical position of the caption relative to the top of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the top of the output. If no explicit y_position is provided, the caption will be positioned towards the bottom of the output. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
     */
    YPosition?: __integerMin0Max2147483647;
  }
  export type BurninSubtitleAlignment = "CENTERED"|"LEFT"|string;
  export type BurninSubtitleBackgroundColor = "NONE"|"BLACK"|"WHITE"|string;
  export type BurninSubtitleFontColor = "WHITE"|"BLACK"|"YELLOW"|"RED"|"GREEN"|"BLUE"|string;
  export type BurninSubtitleOutlineColor = "BLACK"|"WHITE"|"YELLOW"|"RED"|"GREEN"|"BLUE"|string;
  export type BurninSubtitleShadowColor = "NONE"|"BLACK"|"WHITE"|string;
  export type BurninSubtitleTeletextSpacing = "FIXED_GRID"|"PROPORTIONAL"|string;
  export interface CancelJobRequest {
    /**
     * The Job ID of the job to be cancelled.
     */
    Id: __string;
  }
  export interface CancelJobResponse {
  }
  export interface CaptionDescription {
    /**
     * Specifies which "Caption Selector":#inputs-caption_selector to use from each input when generating captions. The name should be of the format "Caption Selector ", which denotes that the Nth Caption Selector will be used from each input.
     */
    CaptionSelectorName: __stringMin1;
    /**
     * Indicates the language of the caption output track, using the ISO 639-2 or ISO 639-3 three-letter language code
     */
    CustomLanguageCode?: __stringMin3Max3PatternAZaZ3;
    DestinationSettings: CaptionDestinationSettings;
    /**
     * Indicates the language of the caption output track.
     */
    LanguageCode?: LanguageCode;
    /**
     * Human readable information to indicate captions available for players (eg. English, or Spanish). Alphanumeric characters, spaces, and underscore are legal.
     */
    LanguageDescription?: __string;
  }
  export interface CaptionDescriptionPreset {
    /**
     * Indicates the language of the caption output track, using the ISO 639-2 or ISO 639-3 three-letter language code
     */
    CustomLanguageCode?: __stringMin3Max3PatternAZaZ3;
    DestinationSettings: CaptionDestinationSettings;
    /**
     * Indicates the language of the caption output track.
     */
    LanguageCode?: LanguageCode;
    /**
     * Human readable information to indicate captions available for players (eg. English, or Spanish). Alphanumeric characters, spaces, and underscore are legal.
     */
    LanguageDescription?: __string;
  }
  export interface CaptionDestinationSettings {
    BurninDestinationSettings?: BurninDestinationSettings;
    DestinationType: CaptionDestinationType;
    DvbSubDestinationSettings?: DvbSubDestinationSettings;
    SccDestinationSettings?: SccDestinationSettings;
    TeletextDestinationSettings?: TeletextDestinationSettings;
    TtmlDestinationSettings?: TtmlDestinationSettings;
  }
  export type CaptionDestinationType = "BURN_IN"|"DVB_SUB"|"EMBEDDED"|"SCC"|"SRT"|"TELETEXT"|"TTML"|"WEBVTT"|string;
  export interface CaptionSelector {
    /**
     * The specific language to extract from source, using the ISO 639-2 or ISO 639-3 three-letter language code. If input is SCTE-27, complete this field and/or PID to select the caption language to extract. If input is DVB-Sub and output is Burn-in or SMPTE-TT, complete this field and/or PID to select the caption language to extract. If input is DVB-Sub that is being passed through, omit this field (and PID field); there is no way to extract a specific language with pass-through captions.
     */
    CustomLanguageCode?: __stringMin3Max3PatternAZaZ3;
    /**
     * The specific language to extract from source. If input is SCTE-27, complete this field and/or PID to select the caption language to extract. If input is DVB-Sub and output is Burn-in or SMPTE-TT, complete this field and/or PID to select the caption language to extract. If input is DVB-Sub that is being passed through, omit this field (and PID field); there is no way to extract a specific language with pass-through captions.
     */
    LanguageCode?: LanguageCode;
    SourceSettings: CaptionSourceSettings;
  }
  export interface CaptionSourceSettings {
    AncillarySourceSettings?: AncillarySourceSettings;
    DvbSubSourceSettings?: DvbSubSourceSettings;
    EmbeddedSourceSettings?: EmbeddedSourceSettings;
    FileSourceSettings?: FileSourceSettings;
    SourceType: CaptionSourceType;
    TeletextSourceSettings?: TeletextSourceSettings;
  }
  export type CaptionSourceType = "ANCILLARY"|"DVB_SUB"|"EMBEDDED"|"SCC"|"TTML"|"STL"|"SRT"|"TELETEXT"|"NULL_SOURCE"|string;
  export interface ChannelMapping {
    /**
     * List of output channels
     */
    OutputChannels: __listOfOutputChannelMapping;
  }
  export type CmafClientCache = "DISABLED"|"ENABLED"|string;
  export type CmafCodecSpecification = "RFC_6381"|"RFC_4281"|string;
  export interface CmafEncryptionSettings {
    /**
     * This is a 128-bit, 16-byte hex value represented by a 32-character text string. If this parameter is not set then the Initialization Vector will follow the segment number by default.
     */
    ConstantInitializationVector?: __stringMin32Max32Pattern09aFAF32;
    EncryptionMethod?: CmafEncryptionType;
    InitializationVectorInManifest?: CmafInitializationVectorInManifest;
    StaticKeyProvider?: StaticKeyProvider;
    Type: CmafKeyProviderType;
  }
  export type CmafEncryptionType = "SAMPLE_AES"|string;
  export interface CmafGroupSettings {
    /**
     * A partial URI prefix that will be put in the manifest file at the top level BaseURL element. Can be used if streams are delivered from a different URL than the manifest file.
     */
    BaseUrl?: __string;
    ClientCache?: CmafClientCache;
    CodecSpecification?: CmafCodecSpecification;
    /**
     * Use Destination (Destination) to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file.
     */
    Destination?: __stringPatternS3;
    /**
     * DRM settings.
     */
    Encryption?: CmafEncryptionSettings;
    /**
     * Length of fragments to generate (in seconds). Fragment length must be compatible with GOP size and Framerate. Note that fragments will end on the next keyframe after this number of seconds, so actual fragment length may be longer. When Emit Single File is checked, the fragmentation is internal to a single output file and it does not cause the creation of many output files as in other output types.
     */
    FragmentLength: __integerMin1Max2147483647;
    ManifestCompression?: CmafManifestCompression;
    ManifestDurationFormat?: CmafManifestDurationFormat;
    /**
     * Minimum time of initially buffered media that is needed to ensure smooth playout.
     */
    MinBufferTime?: __integerMin0Max2147483647;
    SegmentControl?: CmafSegmentControl;
    /**
     * Use this setting to specify the length, in seconds, of each individual CMAF segment. This value applies to the whole package; that is, to every output in the output group. Note that segments end on the first keyframe after this number of seconds, so the actual segment length might be slightly longer. If you set Segment control (CmafSegmentControl) to single file, the service puts the content of each output in a single file that has metadata that marks these segments. If you set it to segmented files, the service creates multiple files for each output, each with the content of one segment.
     */
    SegmentLength: __integerMin1Max2147483647;
    StreamInfResolution?: CmafStreamInfResolution;
    WriteDashManifest?: CmafWriteDASHManifest;
    WriteHlsManifest?: CmafWriteHLSManifest;
  }
  export type CmafInitializationVectorInManifest = "INCLUDE"|"EXCLUDE"|string;
  export type CmafKeyProviderType = "STATIC_KEY"|string;
  export type CmafManifestCompression = "GZIP"|"NONE"|string;
  export type CmafManifestDurationFormat = "FLOATING_POINT"|"INTEGER"|string;
  export type CmafSegmentControl = "SINGLE_FILE"|"SEGMENTED_FILES"|string;
  export type CmafStreamInfResolution = "INCLUDE"|"EXCLUDE"|string;
  export type CmafWriteDASHManifest = "DISABLED"|"ENABLED"|string;
  export type CmafWriteHLSManifest = "DISABLED"|"ENABLED"|string;
  export interface ColorCorrector {
    /**
     * Brightness level.
     */
    Brightness?: __integerMin1Max100;
    ColorSpaceConversion?: ColorSpaceConversion;
    /**
     * Contrast level.
     */
    Contrast?: __integerMin1Max100;
    Hdr10Metadata?: Hdr10Metadata;
    /**
     * Hue in degrees.
     */
    Hue?: __integerMinNegative180Max180;
    /**
     * Saturation level.
     */
    Saturation?: __integerMin1Max100;
  }
  export type ColorMetadata = "IGNORE"|"INSERT"|string;
  export type ColorSpace = "FOLLOW"|"REC_601"|"REC_709"|"HDR10"|"HLG_2020"|string;
  export type ColorSpaceConversion = "NONE"|"FORCE_601"|"FORCE_709"|"FORCE_HDR10"|"FORCE_HLG_2020"|string;
  export type ColorSpaceUsage = "FORCE"|"FALLBACK"|string;
  export interface ContainerSettings {
    Container: ContainerType;
    F4vSettings?: F4vSettings;
    M2tsSettings?: M2tsSettings;
    M3u8Settings?: M3u8Settings;
    MovSettings?: MovSettings;
    Mp4Settings?: Mp4Settings;
  }
  export type ContainerType = "F4V"|"ISMV"|"M2TS"|"M3U8"|"CMFC"|"MOV"|"MP4"|"MPD"|"MXF"|"RAW"|string;
  export interface CreateJobRequest {
    /**
     * Idempotency token for CreateJob operation.
     */
    ClientRequestToken?: __string;
    /**
     * When you create a job, you can either specify a job template or specify the transcoding settings individually
     */
    JobTemplate?: __string;
    /**
     * Optional. When you create a job, you can specify a queue to send it to. If you don't specify, the job will go to the default queue. For more about queues, see the User Guide topic at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html.
     */
    Queue?: __string;
    /**
     * Required. The IAM role you use for creating this job. For details about permissions, see the User Guide topic at the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html.
     */
    Role: __string;
    Settings: JobSettings;
    /**
     * User-defined metadata that you want to associate with an MediaConvert job. You specify metadata in key/value pairs.
     */
    UserMetadata?: __mapOf__string;
  }
  export interface CreateJobResponse {
    Job?: Job;
  }
  export interface CreateJobTemplateRequest {
    /**
     * Optional. A category for the job template you are creating
     */
    Category?: __string;
    /**
     * Optional. A description of the job template you are creating.
     */
    Description?: __string;
    /**
     * The name of the job template you are creating.
     */
    Name: __string;
    /**
     * Optional. The queue that jobs created from this template are assigned to. If you don't specify this, jobs will go to the default queue.
     */
    Queue?: __string;
    Settings: JobTemplateSettings;
    /**
     * The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
     */
    Tags?: __mapOf__string;
  }
  export interface CreateJobTemplateResponse {
    JobTemplate?: JobTemplate;
  }
  export interface CreatePresetRequest {
    /**
     * Optional. A category for the preset you are creating.
     */
    Category?: __string;
    /**
     * Optional. A description of the preset you are creating.
     */
    Description?: __string;
    /**
     * The name of the preset you are creating.
     */
    Name: __string;
    Settings: PresetSettings;
    /**
     * The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
     */
    Tags?: __mapOf__string;
  }
  export interface CreatePresetResponse {
    Preset?: Preset;
  }
  export interface CreateQueueRequest {
    /**
     * Optional. A description of the queue you are creating.
     */
    Description?: __string;
    /**
     * The name of the queue you are creating.
     */
    Name: __string;
    /**
     * The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
     */
    Tags?: __mapOf__string;
  }
  export interface CreateQueueResponse {
    Queue?: Queue;
  }
  export interface DashIsoEncryptionSettings {
    SpekeKeyProvider: SpekeKeyProvider;
  }
  export interface DashIsoGroupSettings {
    /**
     * A partial URI prefix that will be put in the manifest (.mpd) file at the top level BaseURL element. Can be used if streams are delivered from a different URL than the manifest file.
     */
    BaseUrl?: __string;
    /**
     * Use Destination (Destination) to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file.
     */
    Destination?: __stringPatternS3;
    /**
     * DRM settings.
     */
    Encryption?: DashIsoEncryptionSettings;
    /**
     * Length of fragments to generate (in seconds). Fragment length must be compatible with GOP size and Framerate. Note that fragments will end on the next keyframe after this number of seconds, so actual fragment length may be longer. When Emit Single File is checked, the fragmentation is internal to a single output file and it does not cause the creation of many output files as in other output types.
     */
    FragmentLength: __integerMin1Max2147483647;
    HbbtvCompliance?: DashIsoHbbtvCompliance;
    /**
     * Minimum time of initially buffered media that is needed to ensure smooth playout.
     */
    MinBufferTime?: __integerMin0Max2147483647;
    SegmentControl?: DashIsoSegmentControl;
    /**
     * Length of mpd segments to create (in seconds). Note that segments will end on the next keyframe after this number of seconds, so actual segment length may be longer. When Emit Single File is checked, the segmentation is internal to a single output file and it does not cause the creation of many output files as in other output types.
     */
    SegmentLength: __integerMin1Max2147483647;
  }
  export type DashIsoHbbtvCompliance = "HBBTV_1_5"|"NONE"|string;
  export type DashIsoSegmentControl = "SINGLE_FILE"|"SEGMENTED_FILES"|string;
  export type DeinterlaceAlgorithm = "INTERPOLATE"|"INTERPOLATE_TICKER"|"BLEND"|"BLEND_TICKER"|string;
  export interface Deinterlacer {
    Algorithm?: DeinterlaceAlgorithm;
    Control?: DeinterlacerControl;
    Mode?: DeinterlacerMode;
  }
  export type DeinterlacerControl = "FORCE_ALL_FRAMES"|"NORMAL"|string;
  export type DeinterlacerMode = "DEINTERLACE"|"INVERSE_TELECINE"|"ADAPTIVE"|string;
  export interface DeleteJobTemplateRequest {
    /**
     * The name of the job template to be deleted.
     */
    Name: __string;
  }
  export interface DeleteJobTemplateResponse {
  }
  export interface DeletePresetRequest {
    /**
     * The name of the preset to be deleted.
     */
    Name: __string;
  }
  export interface DeletePresetResponse {
  }
  export interface DeleteQueueRequest {
    /**
     * The name of the queue to be deleted.
     */
    Name: __string;
  }
  export interface DeleteQueueResponse {
  }
  export interface DescribeEndpointsRequest {
    /**
     * Optional. Max number of endpoints, up to twenty, that will be returned at one time.
     */
    MaxResults?: __integer;
    /**
     * Use this string, provided with the response to a previous request, to request the next batch of endpoints.
     */
    NextToken?: __string;
  }
  export interface DescribeEndpointsResponse {
    /**
     * List of endpoints
     */
    Endpoints?: __listOfEndpoint;
    /**
     * Use this string to request the next batch of endpoints.
     */
    NextToken?: __string;
  }
  export type DropFrameTimecode = "DISABLED"|"ENABLED"|string;
  export interface DvbNitSettings {
    /**
     * The numeric value placed in the Network Information Table (NIT).
     */
    NetworkId: __integerMin0Max65535;
    /**
     * The network name text placed in the network_name_descriptor inside the Network Information Table. Maximum length is 256 characters.
     */
    NetworkName: __stringMin1Max256;
    /**
     * The number of milliseconds between instances of this table in the output transport stream.
     */
    NitInterval: __integerMin25Max10000;
  }
  export interface DvbSdtSettings {
    OutputSdt?: OutputSdt;
    /**
     * The number of milliseconds between instances of this table in the output transport stream.
     */
    SdtInterval?: __integerMin25Max2000;
    /**
     * The service name placed in the service_descriptor in the Service Description Table. Maximum length is 256 characters.
     */
    ServiceName?: __stringMin1Max256;
    /**
     * The service provider name placed in the service_descriptor in the Service Description Table. Maximum length is 256 characters.
     */
    ServiceProviderName?: __stringMin1Max256;
  }
  export interface DvbSubDestinationSettings {
    Alignment: DvbSubtitleAlignment;
    BackgroundColor?: DvbSubtitleBackgroundColor;
    /**
     * Specifies the opacity of the background rectangle. 255 is opaque; 0 is transparent. Leaving this parameter blank is equivalent to setting it to 0 (transparent). All burn-in and DVB-Sub font settings must match.
     */
    BackgroundOpacity?: __integerMin0Max255;
    FontColor?: DvbSubtitleFontColor;
    /**
     * Specifies the opacity of the burned-in captions. 255 is opaque; 0 is transparent.
All burn-in and DVB-Sub font settings must match.
     */
    FontOpacity: __integerMin0Max255;
    /**
     * Font resolution in DPI (dots per inch); default is 96 dpi.
All burn-in and DVB-Sub font settings must match.
     */
    FontResolution?: __integerMin96Max600;
    /**
     * A positive integer indicates the exact font size in points. Set to 0 for automatic font size selection. All burn-in and DVB-Sub font settings must match.
     */
    FontSize?: __integerMin0Max96;
    OutlineColor: DvbSubtitleOutlineColor;
    /**
     * Specifies font outline size in pixels. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
     */
    OutlineSize: __integerMin0Max10;
    ShadowColor?: DvbSubtitleShadowColor;
    /**
     * Specifies the opacity of the shadow. 255 is opaque; 0 is transparent. Leaving this parameter blank is equivalent to setting it to 0 (transparent). All burn-in and DVB-Sub font settings must match.
     */
    ShadowOpacity?: __integerMin0Max255;
    /**
     * Specifies the horizontal offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels to the left. All burn-in and DVB-Sub font settings must match.
     */
    ShadowXOffset?: __integerMinNegative2147483648Max2147483647;
    /**
     * Specifies the vertical offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels above the text. All burn-in and DVB-Sub font settings must match.
     */
    ShadowYOffset?: __integerMinNegative2147483648Max2147483647;
    TeletextSpacing?: DvbSubtitleTeletextSpacing;
    /**
     * Specifies the horizontal position of the caption relative to the left side of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the left of the output. If no explicit x_position is provided, the horizontal caption position will be determined by the alignment parameter. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
     */
    XPosition?: __integerMin0Max2147483647;
    /**
     * Specifies the vertical position of the caption relative to the top of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the top of the output. If no explicit y_position is provided, the caption will be positioned towards the bottom of the output. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
     */
    YPosition?: __integerMin0Max2147483647;
  }
  export interface DvbSubSourceSettings {
    /**
     * When using DVB-Sub with Burn-In or SMPTE-TT, use this PID for the source content. Unused for DVB-Sub passthrough. All DVB-Sub content is passed through, regardless of selectors.
     */
    Pid?: __integerMin1Max2147483647;
  }
  export type DvbSubtitleAlignment = "CENTERED"|"LEFT"|string;
  export type DvbSubtitleBackgroundColor = "NONE"|"BLACK"|"WHITE"|string;
  export type DvbSubtitleFontColor = "WHITE"|"BLACK"|"YELLOW"|"RED"|"GREEN"|"BLUE"|string;
  export type DvbSubtitleOutlineColor = "BLACK"|"WHITE"|"YELLOW"|"RED"|"GREEN"|"BLUE"|string;
  export type DvbSubtitleShadowColor = "NONE"|"BLACK"|"WHITE"|string;
  export type DvbSubtitleTeletextSpacing = "FIXED_GRID"|"PROPORTIONAL"|string;
  export interface DvbTdtSettings {
    /**
     * The number of milliseconds between instances of this table in the output transport stream.
     */
    TdtInterval: __integerMin1000Max30000;
  }
  export type Eac3AttenuationControl = "ATTENUATE_3_DB"|"NONE"|string;
  export type Eac3BitstreamMode = "COMPLETE_MAIN"|"COMMENTARY"|"EMERGENCY"|"HEARING_IMPAIRED"|"VISUALLY_IMPAIRED"|string;
  export type Eac3CodingMode = "CODING_MODE_1_0"|"CODING_MODE_2_0"|"CODING_MODE_3_2"|string;
  export type Eac3DcFilter = "ENABLED"|"DISABLED"|string;
  export type Eac3DynamicRangeCompressionLine = "NONE"|"FILM_STANDARD"|"FILM_LIGHT"|"MUSIC_STANDARD"|"MUSIC_LIGHT"|"SPEECH"|string;
  export type Eac3DynamicRangeCompressionRf = "NONE"|"FILM_STANDARD"|"FILM_LIGHT"|"MUSIC_STANDARD"|"MUSIC_LIGHT"|"SPEECH"|string;
  export type Eac3LfeControl = "LFE"|"NO_LFE"|string;
  export type Eac3LfeFilter = "ENABLED"|"DISABLED"|string;
  export type Eac3MetadataControl = "FOLLOW_INPUT"|"USE_CONFIGURED"|string;
  export type Eac3PassthroughControl = "WHEN_POSSIBLE"|"NO_PASSTHROUGH"|string;
  export type Eac3PhaseControl = "SHIFT_90_DEGREES"|"NO_SHIFT"|string;
  export interface Eac3Settings {
    AttenuationControl?: Eac3AttenuationControl;
    /**
     * Average bitrate in bits/second. Valid bitrates depend on the coding mode.
     */
    Bitrate?: __integerMin64000Max640000;
    BitstreamMode?: Eac3BitstreamMode;
    CodingMode?: Eac3CodingMode;
    DcFilter?: Eac3DcFilter;
    /**
     * Sets the dialnorm for the output. If blank and input audio is Dolby Digital Plus, dialnorm will be passed through.
     */
    Dialnorm?: __integerMin1Max31;
    DynamicRangeCompressionLine?: Eac3DynamicRangeCompressionLine;
    DynamicRangeCompressionRf?: Eac3DynamicRangeCompressionRf;
    LfeControl?: Eac3LfeControl;
    LfeFilter?: Eac3LfeFilter;
    /**
     * Left only/Right only center mix level. Only used for 3/2 coding mode.
Valid values: 3.0, 1.5, 0.0, -1.5 -3.0 -4.5 -6.0 -60
     */
    LoRoCenterMixLevel?: __doubleMinNegative60Max3;
    /**
     * Left only/Right only surround mix level. Only used for 3/2 coding mode.
Valid values: -1.5 -3.0 -4.5 -6.0 -60
     */
    LoRoSurroundMixLevel?: __doubleMinNegative60MaxNegative1;
    /**
     * Left total/Right total center mix level. Only used for 3/2 coding mode.
Valid values: 3.0, 1.5, 0.0, -1.5 -3.0 -4.5 -6.0 -60
     */
    LtRtCenterMixLevel?: __doubleMinNegative60Max3;
    /**
     * Left total/Right total surround mix level. Only used for 3/2 coding mode.
Valid values: -1.5 -3.0 -4.5 -6.0 -60
     */
    LtRtSurroundMixLevel?: __doubleMinNegative60MaxNegative1;
    MetadataControl?: Eac3MetadataControl;
    PassthroughControl?: Eac3PassthroughControl;
    PhaseControl?: Eac3PhaseControl;
    /**
     * Sample rate in hz. Sample rate is always 48000.
     */
    SampleRate?: __integerMin48000Max48000;
    StereoDownmix?: Eac3StereoDownmix;
    SurroundExMode?: Eac3SurroundExMode;
    SurroundMode?: Eac3SurroundMode;
  }
  export type Eac3StereoDownmix = "NOT_INDICATED"|"LO_RO"|"LT_RT"|"DPL2"|string;
  export type Eac3SurroundExMode = "NOT_INDICATED"|"ENABLED"|"DISABLED"|string;
  export type Eac3SurroundMode = "NOT_INDICATED"|"ENABLED"|"DISABLED"|string;
  export type EmbeddedConvert608To708 = "UPCONVERT"|"DISABLED"|string;
  export interface EmbeddedSourceSettings {
    Convert608To708?: EmbeddedConvert608To708;
    /**
     * Specifies the 608/708 channel number within the video track from which to extract captions. Unused for passthrough.
     */
    Source608ChannelNumber?: __integerMin1Max4;
    /**
     * Specifies the video track index used for extracting captions. The system only supports one input video track, so this should always be set to '1'.
     */
    Source608TrackNumber?: __integerMin1Max1;
  }
  export interface Endpoint {
    /**
     * URL of endpoint
     */
    Url?: __string;
  }
  export interface ExceptionBody {
    Message?: __string;
  }
  export type F4vMoovPlacement = "PROGRESSIVE_DOWNLOAD"|"NORMAL"|string;
  export interface F4vSettings {
    MoovPlacement?: F4vMoovPlacement;
  }
  export interface FileGroupSettings {
    /**
     * Use Destination (Destination) to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file.
     */
    Destination?: __stringPatternS3;
  }
  export type FileSourceConvert608To708 = "UPCONVERT"|"DISABLED"|string;
  export interface FileSourceSettings {
    Convert608To708?: FileSourceConvert608To708;
    /**
     * External caption file used for loading captions. Accepted file extensions are 'scc', 'ttml', 'dfxp', 'stl', 'srt', and 'smi'.
     */
    SourceFile: __stringMin14PatternS3SccSCCTtmlTTMLDfxpDFXPStlSTLSrtSRTSmiSMI;
    /**
     * Specifies a time delta in seconds to offset the captions from the source file.
     */
    TimeDelta?: __integerMinNegative2147483648Max2147483647;
  }
  export interface FrameCaptureSettings {
    /**
     * Frame capture will encode the first frame of the output stream, then one frame every framerateDenominator/framerateNumerator seconds. For example, settings of framerateNumerator = 1 and framerateDenominator = 3 (a rate of 1/3 frame per second) will capture the first frame, then 1 frame every 3s. Files will be named as filename.n.jpg where n is the 0-based sequence number of each Capture.
     */
    FramerateDenominator?: __integerMin1Max2147483647;
    /**
     * Frame capture will encode the first frame of the output stream, then one frame every framerateDenominator/framerateNumerator seconds. For example, settings of framerateNumerator = 1 and framerateDenominator = 3 (a rate of 1/3 frame per second) will capture the first frame, then 1 frame every 3s. Files will be named as filename.NNNNNNN.jpg where N is the 0-based frame sequence number zero padded to 7 decimal places.
     */
    FramerateNumerator?: __integerMin1Max2147483647;
    /**
     * Maximum number of captures (encoded jpg output files).
     */
    MaxCaptures?: __integerMin1Max10000000;
    /**
     * JPEG Quality - a higher value equals higher quality.
     */
    Quality?: __integerMin1Max100;
  }
  export interface GetJobRequest {
    /**
     * the job ID of the job.
     */
    Id: __string;
  }
  export interface GetJobResponse {
    Job?: Job;
  }
  export interface GetJobTemplateRequest {
    /**
     * The name of the job template.
     */
    Name: __string;
  }
  export interface GetJobTemplateResponse {
    JobTemplate?: JobTemplate;
  }
  export interface GetPresetRequest {
    /**
     * The name of the preset.
     */
    Name: __string;
  }
  export interface GetPresetResponse {
    Preset?: Preset;
  }
  export interface GetQueueRequest {
    /**
     * The name of the queue.
     */
    Name: __string;
  }
  export interface GetQueueResponse {
    Queue?: Queue;
  }
  export type H264AdaptiveQuantization = "OFF"|"LOW"|"MEDIUM"|"HIGH"|"HIGHER"|"MAX"|string;
  export type H264CodecLevel = "AUTO"|"LEVEL_1"|"LEVEL_1_1"|"LEVEL_1_2"|"LEVEL_1_3"|"LEVEL_2"|"LEVEL_2_1"|"LEVEL_2_2"|"LEVEL_3"|"LEVEL_3_1"|"LEVEL_3_2"|"LEVEL_4"|"LEVEL_4_1"|"LEVEL_4_2"|"LEVEL_5"|"LEVEL_5_1"|"LEVEL_5_2"|string;
  export type H264CodecProfile = "BASELINE"|"HIGH"|"HIGH_10BIT"|"HIGH_422"|"HIGH_422_10BIT"|"MAIN"|string;
  export type H264EntropyEncoding = "CABAC"|"CAVLC"|string;
  export type H264FieldEncoding = "PAFF"|"FORCE_FIELD"|string;
  export type H264FlickerAdaptiveQuantization = "DISABLED"|"ENABLED"|string;
  export type H264FramerateControl = "INITIALIZE_FROM_SOURCE"|"SPECIFIED"|string;
  export type H264FramerateConversionAlgorithm = "DUPLICATE_DROP"|"INTERPOLATE"|string;
  export type H264GopBReference = "DISABLED"|"ENABLED"|string;
  export type H264GopSizeUnits = "FRAMES"|"SECONDS"|string;
  export type H264InterlaceMode = "PROGRESSIVE"|"TOP_FIELD"|"BOTTOM_FIELD"|"FOLLOW_TOP_FIELD"|"FOLLOW_BOTTOM_FIELD"|string;
  export type H264ParControl = "INITIALIZE_FROM_SOURCE"|"SPECIFIED"|string;
  export type H264QualityTuningLevel = "SINGLE_PASS"|"SINGLE_PASS_HQ"|"MULTI_PASS_HQ"|string;
  export type H264RateControlMode = "VBR"|"CBR"|string;
  export type H264RepeatPps = "DISABLED"|"ENABLED"|string;
  export type H264SceneChangeDetect = "DISABLED"|"ENABLED"|string;
  export interface H264Settings {
    AdaptiveQuantization?: H264AdaptiveQuantization;
    /**
     * Average bitrate in bits/second. Required for VBR and CBR. For MS Smooth outputs, bitrates must be unique when rounded down to the nearest multiple of 1000.
     */
    Bitrate?: __integerMin1000Max1152000000;
    CodecLevel?: H264CodecLevel;
    CodecProfile?: H264CodecProfile;
    EntropyEncoding?: H264EntropyEncoding;
    FieldEncoding?: H264FieldEncoding;
    FlickerAdaptiveQuantization?: H264FlickerAdaptiveQuantization;
    FramerateControl?: H264FramerateControl;
    FramerateConversionAlgorithm?: H264FramerateConversionAlgorithm;
    /**
     * When you use the API for transcode jobs that use framerate conversion, specify the framerate as a fraction. For example,  24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use framerate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
     */
    FramerateDenominator?: __integerMin1Max2147483647;
    /**
     * Framerate numerator - framerate is a fraction, e.g. 24000 / 1001 = 23.976 fps.
     */
    FramerateNumerator?: __integerMin1Max2147483647;
    GopBReference?: H264GopBReference;
    /**
     * Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting.
     */
    GopClosedCadence?: __integerMin0Max2147483647;
    /**
     * GOP Length (keyframe interval) in frames or seconds. Must be greater than zero.
     */
    GopSize?: __doubleMin0;
    GopSizeUnits?: H264GopSizeUnits;
    /**
     * Percentage of the buffer that should initially be filled (HRD buffer model).
     */
    HrdBufferInitialFillPercentage?: __integerMin0Max100;
    /**
     * Size of buffer (HRD buffer model) in bits. For example, enter five megabits as 5000000.
     */
    HrdBufferSize?: __integerMin0Max1152000000;
    InterlaceMode?: H264InterlaceMode;
    /**
     * Maximum bitrate in bits/second. For example, enter five megabits per second as 5000000.
     */
    MaxBitrate?: __integerMin1000Max1152000000;
    /**
     * Enforces separation between repeated (cadence) I-frames and I-frames inserted by Scene Change Detection. If a scene change I-frame is within I-interval frames of a cadence I-frame, the GOP is shrunk and/or stretched to the scene change I-frame. GOP stretch requires enabling lookahead as well as setting I-interval. The normal cadence resumes for the next GOP. This setting is only used when Scene Change Detect is enabled. Note: Maximum GOP stretch = GOP size + Min-I-interval - 1
     */
    MinIInterval?: __integerMin0Max30;
    /**
     * Number of B-frames between reference frames.
     */
    NumberBFramesBetweenReferenceFrames?: __integerMin0Max7;
    /**
     * Number of reference frames to use. The encoder may use more than requested if using B-frames and/or interlaced encoding.
     */
    NumberReferenceFrames?: __integerMin1Max6;
    ParControl?: H264ParControl;
    /**
     * Pixel Aspect Ratio denominator.
     */
    ParDenominator?: __integerMin1Max2147483647;
    /**
     * Pixel Aspect Ratio numerator.
     */
    ParNumerator?: __integerMin1Max2147483647;
    QualityTuningLevel?: H264QualityTuningLevel;
    RateControlMode?: H264RateControlMode;
    RepeatPps?: H264RepeatPps;
    SceneChangeDetect?: H264SceneChangeDetect;
    /**
     * Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.
     */
    Slices?: __integerMin1Max32;
    SlowPal?: H264SlowPal;
    /**
     * Softness. Selects quantizer matrix, larger values reduce high-frequency content in the encoded image.
     */
    Softness?: __integerMin0Max128;
    SpatialAdaptiveQuantization?: H264SpatialAdaptiveQuantization;
    Syntax?: H264Syntax;
    Telecine?: H264Telecine;
    TemporalAdaptiveQuantization?: H264TemporalAdaptiveQuantization;
    UnregisteredSeiTimecode?: H264UnregisteredSeiTimecode;
  }
  export type H264SlowPal = "DISABLED"|"ENABLED"|string;
  export type H264SpatialAdaptiveQuantization = "DISABLED"|"ENABLED"|string;
  export type H264Syntax = "DEFAULT"|"RP2027"|string;
  export type H264Telecine = "NONE"|"SOFT"|"HARD"|string;
  export type H264TemporalAdaptiveQuantization = "DISABLED"|"ENABLED"|string;
  export type H264UnregisteredSeiTimecode = "DISABLED"|"ENABLED"|string;
  export type H265AdaptiveQuantization = "OFF"|"LOW"|"MEDIUM"|"HIGH"|"HIGHER"|"MAX"|string;
  export type H265AlternateTransferFunctionSei = "DISABLED"|"ENABLED"|string;
  export type H265CodecLevel = "AUTO"|"LEVEL_1"|"LEVEL_2"|"LEVEL_2_1"|"LEVEL_3"|"LEVEL_3_1"|"LEVEL_4"|"LEVEL_4_1"|"LEVEL_5"|"LEVEL_5_1"|"LEVEL_5_2"|"LEVEL_6"|"LEVEL_6_1"|"LEVEL_6_2"|string;
  export type H265CodecProfile = "MAIN_MAIN"|"MAIN_HIGH"|"MAIN10_MAIN"|"MAIN10_HIGH"|"MAIN_422_8BIT_MAIN"|"MAIN_422_8BIT_HIGH"|"MAIN_422_10BIT_MAIN"|"MAIN_422_10BIT_HIGH"|string;
  export type H265FlickerAdaptiveQuantization = "DISABLED"|"ENABLED"|string;
  export type H265FramerateControl = "INITIALIZE_FROM_SOURCE"|"SPECIFIED"|string;
  export type H265FramerateConversionAlgorithm = "DUPLICATE_DROP"|"INTERPOLATE"|string;
  export type H265GopBReference = "DISABLED"|"ENABLED"|string;
  export type H265GopSizeUnits = "FRAMES"|"SECONDS"|string;
  export type H265InterlaceMode = "PROGRESSIVE"|"TOP_FIELD"|"BOTTOM_FIELD"|"FOLLOW_TOP_FIELD"|"FOLLOW_BOTTOM_FIELD"|string;
  export type H265ParControl = "INITIALIZE_FROM_SOURCE"|"SPECIFIED"|string;
  export type H265QualityTuningLevel = "SINGLE_PASS"|"SINGLE_PASS_HQ"|"MULTI_PASS_HQ"|string;
  export type H265RateControlMode = "VBR"|"CBR"|string;
  export type H265SampleAdaptiveOffsetFilterMode = "DEFAULT"|"ADAPTIVE"|"OFF"|string;
  export type H265SceneChangeDetect = "DISABLED"|"ENABLED"|string;
  export interface H265Settings {
    AdaptiveQuantization?: H265AdaptiveQuantization;
    AlternateTransferFunctionSei?: H265AlternateTransferFunctionSei;
    /**
     * Average bitrate in bits/second. Required for VBR and CBR. For MS Smooth outputs, bitrates must be unique when rounded down to the nearest multiple of 1000.
     */
    Bitrate?: __integerMin1000Max1466400000;
    CodecLevel?: H265CodecLevel;
    CodecProfile?: H265CodecProfile;
    FlickerAdaptiveQuantization?: H265FlickerAdaptiveQuantization;
    FramerateControl?: H265FramerateControl;
    FramerateConversionAlgorithm?: H265FramerateConversionAlgorithm;
    /**
     * Framerate denominator.
     */
    FramerateDenominator?: __integerMin1Max2147483647;
    /**
     * Framerate numerator - framerate is a fraction, e.g. 24000 / 1001 = 23.976 fps.
     */
    FramerateNumerator?: __integerMin1Max2147483647;
    GopBReference?: H265GopBReference;
    /**
     * Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting.
     */
    GopClosedCadence?: __integerMin0Max2147483647;
    /**
     * GOP Length (keyframe interval) in frames or seconds. Must be greater than zero.
     */
    GopSize?: __doubleMin0;
    GopSizeUnits?: H265GopSizeUnits;
    /**
     * Percentage of the buffer that should initially be filled (HRD buffer model).
     */
    HrdBufferInitialFillPercentage?: __integerMin0Max100;
    /**
     * Size of buffer (HRD buffer model) in bits. For example, enter five megabits as 5000000.
     */
    HrdBufferSize?: __integerMin0Max1466400000;
    InterlaceMode?: H265InterlaceMode;
    /**
     * Maximum bitrate in bits/second.
     */
    MaxBitrate?: __integerMin1000Max1466400000;
    /**
     * Enforces separation between repeated (cadence) I-frames and I-frames inserted by Scene Change Detection. If a scene change I-frame is within I-interval frames of a cadence I-frame, the GOP is shrunk and/or stretched to the scene change I-frame. GOP stretch requires enabling lookahead as well as setting I-interval. The normal cadence resumes for the next GOP. This setting is only used when Scene Change Detect is enabled. Note: Maximum GOP stretch = GOP size + Min-I-interval - 1
     */
    MinIInterval?: __integerMin0Max30;
    /**
     * Number of B-frames between reference frames.
     */
    NumberBFramesBetweenReferenceFrames?: __integerMin0Max7;
    /**
     * Number of reference frames to use. The encoder may use more than requested if using B-frames and/or interlaced encoding.
     */
    NumberReferenceFrames?: __integerMin1Max6;
    ParControl?: H265ParControl;
    /**
     * Pixel Aspect Ratio denominator.
     */
    ParDenominator?: __integerMin1Max2147483647;
    /**
     * Pixel Aspect Ratio numerator.
     */
    ParNumerator?: __integerMin1Max2147483647;
    QualityTuningLevel?: H265QualityTuningLevel;
    RateControlMode?: H265RateControlMode;
    SampleAdaptiveOffsetFilterMode?: H265SampleAdaptiveOffsetFilterMode;
    SceneChangeDetect?: H265SceneChangeDetect;
    /**
     * Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.
     */
    Slices?: __integerMin1Max32;
    SlowPal?: H265SlowPal;
    SpatialAdaptiveQuantization?: H265SpatialAdaptiveQuantization;
    Telecine?: H265Telecine;
    TemporalAdaptiveQuantization?: H265TemporalAdaptiveQuantization;
    TemporalIds?: H265TemporalIds;
    Tiles?: H265Tiles;
    UnregisteredSeiTimecode?: H265UnregisteredSeiTimecode;
    WriteMp4PackagingType?: H265WriteMp4PackagingType;
  }
  export type H265SlowPal = "DISABLED"|"ENABLED"|string;
  export type H265SpatialAdaptiveQuantization = "DISABLED"|"ENABLED"|string;
  export type H265Telecine = "NONE"|"SOFT"|"HARD"|string;
  export type H265TemporalAdaptiveQuantization = "DISABLED"|"ENABLED"|string;
  export type H265TemporalIds = "DISABLED"|"ENABLED"|string;
  export type H265Tiles = "DISABLED"|"ENABLED"|string;
  export type H265UnregisteredSeiTimecode = "DISABLED"|"ENABLED"|string;
  export type H265WriteMp4PackagingType = "HVC1"|"HEV1"|string;
  export interface Hdr10Metadata {
    /**
     * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
     */
    BluePrimaryX?: __integerMin0Max50000;
    /**
     * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
     */
    BluePrimaryY?: __integerMin0Max50000;
    /**
     * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
     */
    GreenPrimaryX?: __integerMin0Max50000;
    /**
     * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
     */
    GreenPrimaryY?: __integerMin0Max50000;
    /**
     * Maximum light level among all samples in the coded video sequence, in units of candelas per square meter.
     */
    MaxContentLightLevel: __integerMin0Max65535;
    /**
     * Maximum average light level of any frame in the coded video sequence, in units of candelas per square meter.
     */
    MaxFrameAverageLightLevel: __integerMin0Max65535;
    /**
     * Nominal maximum mastering display luminance in units of of 0.0001 candelas per square meter.
     */
    MaxLuminance?: __integerMin0Max2147483647;
    /**
     * Nominal minimum mastering display luminance in units of of 0.0001 candelas per square meter
     */
    MinLuminance?: __integerMin0Max2147483647;
    /**
     * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
     */
    RedPrimaryX?: __integerMin0Max50000;
    /**
     * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
     */
    RedPrimaryY?: __integerMin0Max50000;
    /**
     * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
     */
    WhitePointX?: __integerMin0Max50000;
    /**
     * HDR Master Display Information must be provided by a color grader, using color grading tools. Range is 0 to 50,000, each increment represents 0.00002 in CIE1931 color coordinate. Note that this setting is not for color correction.
     */
    WhitePointY?: __integerMin0Max50000;
  }
  export type HlsAdMarkers = "ELEMENTAL"|"ELEMENTAL_SCTE35"|string;
  export type HlsAudioTrackType = "ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT"|"ALTERNATE_AUDIO_AUTO_SELECT"|"ALTERNATE_AUDIO_NOT_AUTO_SELECT"|"AUDIO_ONLY_VARIANT_STREAM"|string;
  export interface HlsCaptionLanguageMapping {
    /**
     * Caption channel.
     */
    CaptionChannel?: __integerMinNegative2147483648Max2147483647;
    /**
     * Specify the language for this caption channel, using the ISO 639-2 or ISO 639-3 three-letter language code
     */
    CustomLanguageCode?: __stringMin3Max3PatternAZaZ3;
    LanguageCode?: LanguageCode;
    /**
     * Caption language description.
     */
    LanguageDescription?: __string;
  }
  export type HlsCaptionLanguageSetting = "INSERT"|"OMIT"|"NONE"|string;
  export type HlsClientCache = "DISABLED"|"ENABLED"|string;
  export type HlsCodecSpecification = "RFC_6381"|"RFC_4281"|string;
  export type HlsDirectoryStructure = "SINGLE_DIRECTORY"|"SUBDIRECTORY_PER_STREAM"|string;
  export interface HlsEncryptionSettings {
    /**
     * This is a 128-bit, 16-byte hex value represented by a 32-character text string. If this parameter is not set then the Initialization Vector will follow the segment number by default.
     */
    ConstantInitializationVector?: __stringMin32Max32Pattern09aFAF32;
    EncryptionMethod?: HlsEncryptionType;
    InitializationVectorInManifest?: HlsInitializationVectorInManifest;
    SpekeKeyProvider?: SpekeKeyProvider;
    StaticKeyProvider?: StaticKeyProvider;
    Type: HlsKeyProviderType;
  }
  export type HlsEncryptionType = "AES128"|"SAMPLE_AES"|string;
  export interface HlsGroupSettings {
    /**
     * Choose one or more ad marker types to pass SCTE35 signals through to this group of Apple HLS outputs.
     */
    AdMarkers?: __listOfHlsAdMarkers;
    /**
     * A partial URI prefix that will be prepended to each output in the media .m3u8 file. Can be used if base manifest is delivered from a different URL than the main .m3u8 file.
     */
    BaseUrl?: __string;
    /**
     * Language to be used on Caption outputs
     */
    CaptionLanguageMappings?: __listOfHlsCaptionLanguageMapping;
    CaptionLanguageSetting?: HlsCaptionLanguageSetting;
    ClientCache?: HlsClientCache;
    CodecSpecification?: HlsCodecSpecification;
    /**
     * Use Destination (Destination) to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file.
     */
    Destination?: __stringPatternS3;
    DirectoryStructure?: HlsDirectoryStructure;
    /**
     * DRM settings.
     */
    Encryption?: HlsEncryptionSettings;
    ManifestCompression?: HlsManifestCompression;
    ManifestDurationFormat?: HlsManifestDurationFormat;
    /**
     * When set, Minimum Segment Size is enforced by looking ahead and back within the specified range for a nearby avail and extending the segment size if needed.
     */
    MinSegmentLength: __integerMin0Max2147483647;
    OutputSelection?: HlsOutputSelection;
    ProgramDateTime?: HlsProgramDateTime;
    /**
     * Period of insertion of EXT-X-PROGRAM-DATE-TIME entry, in seconds.
     */
    ProgramDateTimePeriod?: __integerMin0Max3600;
    SegmentControl?: HlsSegmentControl;
    /**
     * Length of MPEG-2 Transport Stream segments to create (in seconds). Note that segments will end on the next keyframe after this number of seconds, so actual segment length may be longer.
     */
    SegmentLength: __integerMin1Max2147483647;
    /**
     * Number of segments to write to a subdirectory before starting a new one. directoryStructure must be SINGLE_DIRECTORY for this setting to have an effect.
     */
    SegmentsPerSubdirectory?: __integerMin1Max2147483647;
    StreamInfResolution?: HlsStreamInfResolution;
    TimedMetadataId3Frame?: HlsTimedMetadataId3Frame;
    /**
     * Timed Metadata interval in seconds.
     */
    TimedMetadataId3Period?: __integerMinNegative2147483648Max2147483647;
    /**
     * Provides an extra millisecond delta offset to fine tune the timestamps.
     */
    TimestampDeltaMilliseconds?: __integerMinNegative2147483648Max2147483647;
  }
  export type HlsIFrameOnlyManifest = "INCLUDE"|"EXCLUDE"|string;
  export type HlsInitializationVectorInManifest = "INCLUDE"|"EXCLUDE"|string;
  export type HlsKeyProviderType = "SPEKE"|"STATIC_KEY"|string;
  export type HlsManifestCompression = "GZIP"|"NONE"|string;
  export type HlsManifestDurationFormat = "FLOATING_POINT"|"INTEGER"|string;
  export type HlsOutputSelection = "MANIFESTS_AND_SEGMENTS"|"SEGMENTS_ONLY"|string;
  export type HlsProgramDateTime = "INCLUDE"|"EXCLUDE"|string;
  export type HlsSegmentControl = "SINGLE_FILE"|"SEGMENTED_FILES"|string;
  export interface HlsSettings {
    /**
     * Specifies the group to which the audio Rendition belongs.
     */
    AudioGroupId?: __string;
    /**
     * List all the audio groups that are used with the video output stream. Input all the audio GROUP-IDs that are associated to the video, separate by ','.
     */
    AudioRenditionSets?: __string;
    AudioTrackType?: HlsAudioTrackType;
    IFrameOnlyManifest?: HlsIFrameOnlyManifest;
    /**
     * String concatenated to end of segment filenames. Accepts "Format Identifiers":#format_identifier_parameters.
     */
    SegmentModifier?: __string;
  }
  export type HlsStreamInfResolution = "INCLUDE"|"EXCLUDE"|string;
  export type HlsTimedMetadataId3Frame = "NONE"|"PRIV"|"TDRL"|string;
  export interface Id3Insertion {
    /**
     * Use ID3 tag (Id3) to provide a tag value in base64-encode format.
     */
    Id3: __stringPatternAZaZ0902;
    /**
     * Provide a Timecode (TimeCode) in HH:MM:SS:FF or HH:MM:SS;FF format.
     */
    Timecode: __stringPattern010920405090509092;
  }
  export interface ImageInserter {
    /**
     * Image to insert. Must be 32 bit windows BMP, PNG, or TGA file. Must not be  larger than the output frames.
     */
    InsertableImages: __listOfInsertableImage;
  }
  export interface Input {
    /**
     * Specifies set of audio selectors within an input to combine. An input may have multiple audio selector groups. See "Audio Selector Group":#inputs-audio_selector_group for more information.
     */
    AudioSelectorGroups?: __mapOfAudioSelectorGroup;
    /**
     * Use Audio selectors (AudioSelectors) to specify a track or set of tracks from the input that you will use in your outputs. You can use mutiple Audio selectors per input.
     */
    AudioSelectors?: __mapOfAudioSelector;
    /**
     * Use Captions selectors (CaptionSelectors) to specify the captions data from the input that you will use in your outputs. You can use mutiple captions selectors per input.
     */
    CaptionSelectors?: __mapOfCaptionSelector;
    DeblockFilter?: InputDeblockFilter;
    DenoiseFilter?: InputDenoiseFilter;
    /**
     * Use Input (fileInput) to define the source file used in the transcode job. There can be multiple inputs in a job. These inputs are concantenated, in the order they are specified in the job, to create the output.
     */
    FileInput: __stringPatternS3MM2VVMMPPEEGGAAVVIIMMPP4FFLLVVMMPPTTMMPPGGMM4VVTTRRPPFF4VVMM2TTSSTTSS264HH264MMKKVVMMOOVVMMTTSSMM2TTWWMMVVAASSFFVVOOBB3GGPP3GGPPPPMMXXFFDDIIVVXXXXVVIIDDRRAAWWDDVVGGXXFFMM1VV3GG2VVMMFFMM3UU8LLCCHHGGXXFFMMPPEEGG2MMXXFFMMPPEEGG2MMXXFFHHDDWWAAVVYY4MM;
    FilterEnable?: InputFilterEnable;
    /**
     * Use Filter strength (FilterStrength) to adjust the magnitude the input filter settings (Deblock and Denoise). The range is -5 to 5. Default is 0.
     */
    FilterStrength?: __integerMinNegative5Max5;
    /**
     * (InputClippings) contains sets of start and end times that together specify a portion of the input to be used in the outputs. If you provide only a start time, the clip will be the entire input from that point to the end. If you provide only an end time, it will be the entire input up to that point. When you specify more than one input clip, the transcoding service creates the job outputs by stringing the clips together in the order you specify them.
     */
    InputClippings?: __listOfInputClipping;
    /**
     * Use Program (programNumber) to select a specific program from within a multi-program transport stream. Note that Quad 4K is not currently supported. Default is the first program within the transport stream. If the program you specify doesn't exist, the transcoding service will use this default.
     */
    ProgramNumber?: __integerMin1Max2147483647;
    PsiControl?: InputPsiControl;
    TimecodeSource?: InputTimecodeSource;
    VideoSelector?: VideoSelector;
  }
  export interface InputClipping {
    /**
     * Set End timecode (EndTimecode) to the end of the portion of the input you are clipping. The frame corresponding to the End timecode value is included in the clip. Start timecode or End timecode may be left blank, but not both. Use the format HH:MM:SS:FF or HH:MM:SS;FF, where HH is the hour, MM is the minute, SS is the second, and FF is the frame number. When choosing this value, take into account your setting for timecode source under input settings (InputTimecodeSource). For example, if you have embedded timecodes that start at 01:00:00:00 and you want your clip to end six minutes into the video, use 01:06:00:00.
     */
    EndTimecode?: __stringPattern010920405090509092;
    /**
     * Set Start timecode (StartTimecode) to the beginning of the portion of the input you are clipping. The frame corresponding to the Start timecode value is included in the clip. Start timecode or End timecode may be left blank, but not both. Use the format HH:MM:SS:FF or HH:MM:SS;FF, where HH is the hour, MM is the minute, SS is the second, and FF is the frame number. When choosing this value, take into account your setting for Input timecode source. For example, if you have embedded timecodes that start at 01:00:00:00 and you want your clip to begin five minutes into the video, use 01:05:00:00.
     */
    StartTimecode?: __stringPattern010920405090509092;
  }
  export type InputDeblockFilter = "ENABLED"|"DISABLED"|string;
  export type InputDenoiseFilter = "ENABLED"|"DISABLED"|string;
  export type InputFilterEnable = "AUTO"|"DISABLE"|"FORCE"|string;
  export type InputPsiControl = "IGNORE_PSI"|"USE_PSI"|string;
  export interface InputTemplate {
    /**
     * Specifies set of audio selectors within an input to combine. An input may have multiple audio selector groups. See "Audio Selector Group":#inputs-audio_selector_group for more information.
     */
    AudioSelectorGroups?: __mapOfAudioSelectorGroup;
    /**
     * Use Audio selectors (AudioSelectors) to specify a track or set of tracks from the input that you will use in your outputs. You can use mutiple Audio selectors per input.
     */
    AudioSelectors?: __mapOfAudioSelector;
    /**
     * Use Captions selectors (CaptionSelectors) to specify the captions data from the input that you will use in your outputs. You can use mutiple captions selectors per input.
     */
    CaptionSelectors?: __mapOfCaptionSelector;
    DeblockFilter?: InputDeblockFilter;
    DenoiseFilter?: InputDenoiseFilter;
    FilterEnable?: InputFilterEnable;
    /**
     * Use Filter strength (FilterStrength) to adjust the magnitude the input filter settings (Deblock and Denoise). The range is -5 to 5. Default is 0.
     */
    FilterStrength?: __integerMinNegative5Max5;
    /**
     * (InputClippings) contains sets of start and end times that together specify a portion of the input to be used in the outputs. If you provide only a start time, the clip will be the entire input from that point to the end. If you provide only an end time, it will be the entire input up to that point. When you specify more than one input clip, the transcoding service creates the job outputs by stringing the clips together in the order you specify them.
     */
    InputClippings?: __listOfInputClipping;
    /**
     * Use Program (programNumber) to select a specific program from within a multi-program transport stream. Note that Quad 4K is not currently supported. Default is the first program within the transport stream. If the program you specify doesn't exist, the transcoding service will use this default.
     */
    ProgramNumber?: __integerMin1Max2147483647;
    PsiControl?: InputPsiControl;
    TimecodeSource?: InputTimecodeSource;
    VideoSelector?: VideoSelector;
  }
  export type InputTimecodeSource = "EMBEDDED"|"ZEROBASED"|"SPECIFIEDSTART"|string;
  export interface InsertableImage {
    /**
     * Use Duration (Duration) to set the time, in milliseconds, for the image to remain on the output video.
     */
    Duration?: __integerMinNegative2147483648Max2147483647;
    /**
     * Use Fade in (FadeIut) to set the length, in milliseconds, of the inserted image fade in. If you don't specify a value for Fade in, the image will appear abruptly at the Start time.
     */
    FadeIn?: __integerMinNegative2147483648Max2147483647;
    /**
     * Use Fade out (FadeOut) to set the length, in milliseconds, of the inserted image fade out. If you don't specify a value for Fade out, the image will disappear abruptly at the end of the inserted image duration.
     */
    FadeOut?: __integerMinNegative2147483648Max2147483647;
    /**
     * Specify the Height (Height) of the inserted image. Use a value that is less than or equal to the video resolution height. Leave this setting blank to use the native height of the image.
     */
    Height?: __integerMinNegative2147483648Max2147483647;
    /**
     * Use Image location (imageInserterInput) to specify the Amazon S3 location of the image to be inserted into the output. Use a 32 bit BMP, PNG, or TGA file that fits inside the video frame.
     */
    ImageInserterInput: __stringMin14PatternS3BmpBMPPngPNGTgaTGA;
    /**
     * Use Left (ImageX) to set the distance, in pixels, between the inserted image and the left edge of the frame. Required for BMP, PNG and TGA input.
     */
    ImageX: __integerMinNegative2147483648Max2147483647;
    /**
     * Use Top (ImageY) to set the distance, in pixels, between the inserted image and the top edge of the video frame. Required for BMP, PNG and TGA input.
     */
    ImageY: __integerMinNegative2147483648Max2147483647;
    /**
     * Use Layer (Layer) to specify how overlapping inserted images appear. Images with higher values of layer appear on top of images with lower values of layer.
     */
    Layer: __integerMin0Max99;
    /**
     * Use Opacity (Opacity) to specify how much of the underlying video shows through the inserted image. 0 is transparent and 100 is fully opaque. Default is 50.
     */
    Opacity: __integerMin0Max100;
    /**
     * Use Start time (StartTime) to specify the video timecode when the image is inserted in the output. This must be in timecode (HH:MM:SS:FF or HH:MM:SS;FF) format.
     */
    StartTime?: __stringPattern01D20305D205D;
    /**
     * Specify the Width (Width) of the inserted image. Use a value that is less than or equal to the video resolution width. Leave this setting blank to use the native width of the image.
     */
    Width?: __integerMinNegative2147483648Max2147483647;
  }
  export interface Job {
    /**
     * An identifier for this resource that is unique within all of AWS.
     */
    Arn?: __string;
    /**
     * The time, in Unix epoch format in seconds, when the job got created.
     */
    CreatedAt?: __timestampUnix;
    /**
     * Error code for the job
     */
    ErrorCode?: __integer;
    /**
     * Error message of Job
     */
    ErrorMessage?: __string;
    /**
     * A portion of the job's ARN, unique within your AWS Elemental MediaConvert resources
     */
    Id?: __string;
    /**
     * The job template that the job is created from, if it is created from a job template.
     */
    JobTemplate?: __string;
    /**
     * List of output group details
     */
    OutputGroupDetails?: __listOfOutputGroupDetail;
    /**
     * Optional. When you create a job, you can specify a queue to send it to. If you don't specify, the job will go to the default queue. For more about queues, see the User Guide topic at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
     */
    Queue?: __string;
    /**
     * The IAM role you use for creating this job. For details about permissions, see the User Guide topic at the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html
     */
    Role: __string;
    Settings: JobSettings;
    Status?: JobStatus;
    Timing?: Timing;
    /**
     * User-defined metadata that you want to associate with an MediaConvert job. You specify metadata in key/value pairs.
     */
    UserMetadata?: __mapOf__string;
  }
  export interface JobSettings {
    /**
     * When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time.
     */
    AdAvailOffset?: __integerMinNegative1000Max1000;
    /**
     * Settings for ad avail blanking.  Video can be blanked or overlaid with an image, and audio muted during SCTE-35 triggered ad avails.
     */
    AvailBlanking?: AvailBlanking;
    /**
     * Use Inputs (inputs) to define source file used in the transcode job. There can be multiple inputs add in a job. These inputs will be concantenated together to create the output.
     */
    Inputs: __listOfInput;
    NielsenConfiguration?: NielsenConfiguration;
    /**
     * (OutputGroups) contains one group of settings for each set of outputs that share a common package type. All unpackaged files (MPEG-4, MPEG-2 TS, Quicktime, MXF, and no container) are grouped in a single output group as well. Required in (OutputGroups) is a group of settings that apply to the whole group. This required object depends on the value you set for (Type) under (OutputGroups)>(OutputGroupSettings). Type, settings object pairs are as follows. * FILE_GROUP_SETTINGS, FileGroupSettings * HLS_GROUP_SETTINGS, HlsGroupSettings * DASH_ISO_GROUP_SETTINGS, DashIsoGroupSettings * MS_SMOOTH_GROUP_SETTINGS, MsSmoothGroupSettings * CMAF_GROUP_SETTINGS, CmafGroupSettings
     */
    OutputGroups: __listOfOutputGroup;
    /**
     * Contains settings used to acquire and adjust timecode information from inputs.
     */
    TimecodeConfig?: TimecodeConfig;
    TimedMetadataInsertion?: TimedMetadataInsertion;
  }
  export type JobStatus = "SUBMITTED"|"PROGRESSING"|"COMPLETE"|"CANCELED"|"ERROR"|string;
  export interface JobTemplate {
    /**
     * An identifier for this resource that is unique within all of AWS.
     */
    Arn?: __string;
    /**
     * An optional category you create to organize your job templates.
     */
    Category?: __string;
    /**
     * The timestamp in epoch seconds for Job template creation.
     */
    CreatedAt?: __timestampUnix;
    /**
     * An optional description you create for each job template.
     */
    Description?: __string;
    /**
     * The timestamp in epoch seconds when the Job template was last updated.
     */
    LastUpdated?: __timestampUnix;
    /**
     * A name you create for each job template. Each name must be unique within your account.
     */
    Name: __string;
    /**
     * Optional. The queue that jobs created from this template are assigned to. If you don't specify this, jobs will go to the default queue.
     */
    Queue?: __string;
    Settings: JobTemplateSettings;
    /**
     * A job template can be of two types: system or custom. System or built-in job templates can't be modified or deleted by the user.
     */
    Type?: Type;
  }
  export type JobTemplateListBy = "NAME"|"CREATION_DATE"|"SYSTEM"|string;
  export interface JobTemplateSettings {
    /**
     * When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time.
     */
    AdAvailOffset?: __integerMinNegative1000Max1000;
    /**
     * Settings for ad avail blanking.  Video can be blanked or overlaid with an image, and audio muted during SCTE-35 triggered ad avails.
     */
    AvailBlanking?: AvailBlanking;
    /**
     * Use Inputs (inputs) to define the source file used in the transcode job. There can only be one input in a job template.  Using the API, you can include multiple inputs when referencing a job template.
     */
    Inputs?: __listOfInputTemplate;
    NielsenConfiguration?: NielsenConfiguration;
    /**
     * (OutputGroups) contains one group of settings for each set of outputs that share a common package type. All unpackaged files (MPEG-4, MPEG-2 TS, Quicktime, MXF, and no container) are grouped in a single output group as well. Required in (OutputGroups) is a group of settings that apply to the whole group. This required object depends on the value you set for (Type) under (OutputGroups)>(OutputGroupSettings). Type, settings object pairs are as follows. * FILE_GROUP_SETTINGS, FileGroupSettings * HLS_GROUP_SETTINGS, HlsGroupSettings * DASH_ISO_GROUP_SETTINGS, DashIsoGroupSettings * MS_SMOOTH_GROUP_SETTINGS, MsSmoothGroupSettings * CMAF_GROUP_SETTINGS, CmafGroupSettings
     */
    OutputGroups: __listOfOutputGroup;
    /**
     * Contains settings used to acquire and adjust timecode information from inputs.
     */
    TimecodeConfig?: TimecodeConfig;
    TimedMetadataInsertion?: TimedMetadataInsertion;
  }
  export type LanguageCode = "ENG"|"SPA"|"FRA"|"DEU"|"GER"|"ZHO"|"ARA"|"HIN"|"JPN"|"RUS"|"POR"|"ITA"|"URD"|"VIE"|"KOR"|"PAN"|"ABK"|"AAR"|"AFR"|"AKA"|"SQI"|"AMH"|"ARG"|"HYE"|"ASM"|"AVA"|"AVE"|"AYM"|"AZE"|"BAM"|"BAK"|"EUS"|"BEL"|"BEN"|"BIH"|"BIS"|"BOS"|"BRE"|"BUL"|"MYA"|"CAT"|"KHM"|"CHA"|"CHE"|"NYA"|"CHU"|"CHV"|"COR"|"COS"|"CRE"|"HRV"|"CES"|"DAN"|"DIV"|"NLD"|"DZO"|"ENM"|"EPO"|"EST"|"EWE"|"FAO"|"FIJ"|"FIN"|"FRM"|"FUL"|"GLA"|"GLG"|"LUG"|"KAT"|"ELL"|"GRN"|"GUJ"|"HAT"|"HAU"|"HEB"|"HER"|"HMO"|"HUN"|"ISL"|"IDO"|"IBO"|"IND"|"INA"|"ILE"|"IKU"|"IPK"|"GLE"|"JAV"|"KAL"|"KAN"|"KAU"|"KAS"|"KAZ"|"KIK"|"KIN"|"KIR"|"KOM"|"KON"|"KUA"|"KUR"|"LAO"|"LAT"|"LAV"|"LIM"|"LIN"|"LIT"|"LUB"|"LTZ"|"MKD"|"MLG"|"MSA"|"MAL"|"MLT"|"GLV"|"MRI"|"MAR"|"MAH"|"MON"|"NAU"|"NAV"|"NDE"|"NBL"|"NDO"|"NEP"|"SME"|"NOR"|"NOB"|"NNO"|"OCI"|"OJI"|"ORI"|"ORM"|"OSS"|"PLI"|"FAS"|"POL"|"PUS"|"QUE"|"QAA"|"RON"|"ROH"|"RUN"|"SMO"|"SAG"|"SAN"|"SRD"|"SRB"|"SNA"|"III"|"SND"|"SIN"|"SLK"|"SLV"|"SOM"|"SOT"|"SUN"|"SWA"|"SSW"|"SWE"|"TGL"|"TAH"|"TGK"|"TAM"|"TAT"|"TEL"|"THA"|"BOD"|"TIR"|"TON"|"TSO"|"TSN"|"TUR"|"TUK"|"TWI"|"UIG"|"UKR"|"UZB"|"VEN"|"VOL"|"WLN"|"CYM"|"FRY"|"WOL"|"XHO"|"YID"|"YOR"|"ZHA"|"ZUL"|"ORJ"|"QPC"|"TNG"|string;
  export interface ListJobTemplatesRequest {
    /**
     * Optionally, specify a job template category to limit responses to only job templates from that category.
     */
    Category?: __string;
    ListBy?: JobTemplateListBy;
    /**
     * Optional. Number of job templates, up to twenty, that will be returned at one time.
     */
    MaxResults?: __integerMin1Max20;
    /**
     * Use this string, provided with the response to a previous request, to request the next batch of job templates.
     */
    NextToken?: __string;
    Order?: Order;
  }
  export interface ListJobTemplatesResponse {
    /**
     * List of Job templates.
     */
    JobTemplates?: __listOfJobTemplate;
    /**
     * Use this string to request the next batch of job templates.
     */
    NextToken?: __string;
  }
  export interface ListJobsRequest {
    /**
     * Optional. Number of jobs, up to twenty, that will be returned at one time.
     */
    MaxResults?: __integerMin1Max20;
    /**
     * Use this string, provided with the response to a previous request, to request the next batch of jobs.
     */
    NextToken?: __string;
    Order?: Order;
    /**
     * Provide a queue name to get back only jobs from that queue.
     */
    Queue?: __string;
    Status?: JobStatus;
  }
  export interface ListJobsResponse {
    /**
     * List of jobs
     */
    Jobs?: __listOfJob;
    /**
     * Use this string to request the next batch of jobs.
     */
    NextToken?: __string;
  }
  export interface ListPresetsRequest {
    /**
     * Optionally, specify a preset category to limit responses to only presets from that category.
     */
    Category?: __string;
    ListBy?: PresetListBy;
    /**
     * Optional. Number of presets, up to twenty, that will be returned at one time
     */
    MaxResults?: __integerMin1Max20;
    /**
     * Use this string, provided with the response to a previous request, to request the next batch of presets.
     */
    NextToken?: __string;
    Order?: Order;
  }
  export interface ListPresetsResponse {
    /**
     * Use this string to request the next batch of presets.
     */
    NextToken?: __string;
    /**
     * List of presets
     */
    Presets?: __listOfPreset;
  }
  export interface ListQueuesRequest {
    ListBy?: QueueListBy;
    /**
     * Optional. Number of queues, up to twenty, that will be returned at one time.
     */
    MaxResults?: __integerMin1Max20;
    /**
     * Use this string, provided with the response to a previous request, to request the next batch of queues.
     */
    NextToken?: __string;
    Order?: Order;
  }
  export interface ListQueuesResponse {
    /**
     * Use this string to request the next batch of queues.
     */
    NextToken?: __string;
    /**
     * List of queues
     */
    Queues?: __listOfQueue;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource that you want to list tags for. To get the ARN, send a GET request with the resource name.
     */
    Arn: __string;
  }
  export interface ListTagsForResourceResponse {
    ResourceTags?: ResourceTags;
  }
  export type M2tsAudioBufferModel = "DVB"|"ATSC"|string;
  export type M2tsBufferModel = "MULTIPLEX"|"NONE"|string;
  export type M2tsEbpAudioInterval = "VIDEO_AND_FIXED_INTERVALS"|"VIDEO_INTERVAL"|string;
  export type M2tsEbpPlacement = "VIDEO_AND_AUDIO_PIDS"|"VIDEO_PID"|string;
  export type M2tsEsRateInPes = "INCLUDE"|"EXCLUDE"|string;
  export type M2tsNielsenId3 = "INSERT"|"NONE"|string;
  export type M2tsPcrControl = "PCR_EVERY_PES_PACKET"|"CONFIGURED_PCR_PERIOD"|string;
  export type M2tsRateMode = "VBR"|"CBR"|string;
  export type M2tsScte35Source = "PASSTHROUGH"|"NONE"|string;
  export type M2tsSegmentationMarkers = "NONE"|"RAI_SEGSTART"|"RAI_ADAPT"|"PSI_SEGSTART"|"EBP"|"EBP_LEGACY"|string;
  export type M2tsSegmentationStyle = "MAINTAIN_CADENCE"|"RESET_CADENCE"|string;
  export interface M2tsSettings {
    AudioBufferModel?: M2tsAudioBufferModel;
    /**
     * The number of audio frames to insert for each PES packet.
     */
    AudioFramesPerPes?: __integerMin0Max2147483647;
    /**
     * Packet Identifier (PID) of the elementary audio stream(s) in the transport stream. Multiple values are accepted, and can be entered in ranges and/or by comma separation.
     */
    AudioPids?: __listOf__integerMin32Max8182;
    /**
     * The output bitrate of the transport stream in bits per second. Setting to 0 lets the muxer automatically determine the appropriate bitrate. Other common values are 3750000, 7500000, and 15000000.
     */
    Bitrate?: __integerMin0Max2147483647;
    BufferModel?: M2tsBufferModel;
    DvbNitSettings?: DvbNitSettings;
    DvbSdtSettings?: DvbSdtSettings;
    /**
     * Packet Identifier (PID) for input source DVB Subtitle data to this output. Multiple values are accepted, and can be entered in ranges and/or by comma separation.
     */
    DvbSubPids?: __listOf__integerMin32Max8182;
    DvbTdtSettings?: DvbTdtSettings;
    /**
     * Packet Identifier (PID) for input source DVB Teletext data to this output.
     */
    DvbTeletextPid?: __integerMin32Max8182;
    EbpAudioInterval?: M2tsEbpAudioInterval;
    EbpPlacement?: M2tsEbpPlacement;
    EsRateInPes?: M2tsEsRateInPes;
    /**
     * The length in seconds of each fragment. Only used with EBP markers.
     */
    FragmentTime?: __doubleMin0;
    /**
     * Maximum time in milliseconds between Program Clock References (PCRs) inserted into the transport stream.
     */
    MaxPcrInterval?: __integerMin0Max500;
    /**
     * When set, enforces that Encoder Boundary Points do not come within the specified time interval of each other by looking ahead at input video. If another EBP is going to come in within the specified time interval, the current EBP is not emitted, and the segment is "stretched" to the next marker. The lookahead value does not add latency to the system. The Live Event must be configured elsewhere to create sufficient latency to make the lookahead accurate.
     */
    MinEbpInterval?: __integerMin0Max10000;
    NielsenId3?: M2tsNielsenId3;
    /**
     * Value in bits per second of extra null packets to insert into the transport stream. This can be used if a downstream encryption system requires periodic null packets.
     */
    NullPacketBitrate?: __doubleMin0;
    /**
     * The number of milliseconds between instances of this table in the output transport stream.
     */
    PatInterval?: __integerMin0Max1000;
    PcrControl?: M2tsPcrControl;
    /**
     * Packet Identifier (PID) of the Program Clock Reference (PCR) in the transport stream. When no value is given, the encoder will assign the same value as the Video PID.
     */
    PcrPid?: __integerMin32Max8182;
    /**
     * The number of milliseconds between instances of this table in the output transport stream.
     */
    PmtInterval?: __integerMin0Max1000;
    /**
     * Packet Identifier (PID) for the Program Map Table (PMT) in the transport stream.
     */
    PmtPid?: __integerMin32Max8182;
    /**
     * Packet Identifier (PID) of the private metadata stream in the transport stream.
     */
    PrivateMetadataPid?: __integerMin32Max8182;
    /**
     * The value of the program number field in the Program Map Table.
     */
    ProgramNumber?: __integerMin0Max65535;
    RateMode?: M2tsRateMode;
    /**
     * Packet Identifier (PID) of the SCTE-35 stream in the transport stream.
     */
    Scte35Pid?: __integerMin32Max8182;
    Scte35Source?: M2tsScte35Source;
    SegmentationMarkers?: M2tsSegmentationMarkers;
    SegmentationStyle?: M2tsSegmentationStyle;
    /**
     * The length in seconds of each segment. Required unless markers is set to _none_.
     */
    SegmentationTime?: __doubleMin0;
    /**
     * Packet Identifier (PID) of the timed metadata stream in the transport stream.
     */
    TimedMetadataPid?: __integerMin32Max8182;
    /**
     * The value of the transport stream ID field in the Program Map Table.
     */
    TransportStreamId?: __integerMin0Max65535;
    /**
     * Packet Identifier (PID) of the elementary video stream in the transport stream.
     */
    VideoPid?: __integerMin32Max8182;
  }
  export type M3u8NielsenId3 = "INSERT"|"NONE"|string;
  export type M3u8PcrControl = "PCR_EVERY_PES_PACKET"|"CONFIGURED_PCR_PERIOD"|string;
  export type M3u8Scte35Source = "PASSTHROUGH"|"NONE"|string;
  export interface M3u8Settings {
    /**
     * The number of audio frames to insert for each PES packet.
     */
    AudioFramesPerPes?: __integerMin0Max2147483647;
    /**
     * Packet Identifier (PID) of the elementary audio stream(s) in the transport stream. Multiple values are accepted, and can be entered in ranges and/or by comma separation.
     */
    AudioPids?: __listOf__integerMin32Max8182;
    NielsenId3?: M3u8NielsenId3;
    /**
     * The number of milliseconds between instances of this table in the output transport stream.
     */
    PatInterval?: __integerMin0Max1000;
    PcrControl?: M3u8PcrControl;
    /**
     * Packet Identifier (PID) of the Program Clock Reference (PCR) in the transport stream. When no value is given, the encoder will assign the same value as the Video PID.
     */
    PcrPid?: __integerMin32Max8182;
    /**
     * The number of milliseconds between instances of this table in the output transport stream.
     */
    PmtInterval?: __integerMin0Max1000;
    /**
     * Packet Identifier (PID) for the Program Map Table (PMT) in the transport stream.
     */
    PmtPid?: __integerMin32Max8182;
    /**
     * Packet Identifier (PID) of the private metadata stream in the transport stream.
     */
    PrivateMetadataPid?: __integerMin32Max8182;
    /**
     * The value of the program number field in the Program Map Table.
     */
    ProgramNumber?: __integerMin0Max65535;
    /**
     * Packet Identifier (PID) of the SCTE-35 stream in the transport stream.
     */
    Scte35Pid?: __integerMin32Max8182;
    Scte35Source?: M3u8Scte35Source;
    TimedMetadata?: TimedMetadata;
    /**
     * Packet Identifier (PID) of the timed metadata stream in the transport stream.
     */
    TimedMetadataPid?: __integerMin32Max8182;
    /**
     * The value of the transport stream ID field in the Program Map Table.
     */
    TransportStreamId?: __integerMin0Max65535;
    /**
     * Packet Identifier (PID) of the elementary video stream in the transport stream.
     */
    VideoPid?: __integerMin32Max8182;
  }
  export type MovClapAtom = "INCLUDE"|"EXCLUDE"|string;
  export type MovCslgAtom = "INCLUDE"|"EXCLUDE"|string;
  export type MovMpeg2FourCCControl = "XDCAM"|"MPEG"|string;
  export type MovPaddingControl = "OMNEON"|"NONE"|string;
  export type MovReference = "SELF_CONTAINED"|"EXTERNAL"|string;
  export interface MovSettings {
    ClapAtom?: MovClapAtom;
    CslgAtom?: MovCslgAtom;
    Mpeg2FourCCControl?: MovMpeg2FourCCControl;
    PaddingControl?: MovPaddingControl;
    Reference?: MovReference;
  }
  export interface Mp2Settings {
    /**
     * Average bitrate in bits/second.
     */
    Bitrate?: __integerMin32000Max384000;
    /**
     * Set Channels to specify the number of channels in this output audio track. Choosing Mono in the console will give you 1 output channel; choosing Stereo will give you 2. In the API, valid values are 1 and 2.
     */
    Channels?: __integerMin1Max2;
    /**
     * Sample rate in hz.
     */
    SampleRate?: __integerMin32000Max48000;
  }
  export type Mp4CslgAtom = "INCLUDE"|"EXCLUDE"|string;
  export type Mp4FreeSpaceBox = "INCLUDE"|"EXCLUDE"|string;
  export type Mp4MoovPlacement = "PROGRESSIVE_DOWNLOAD"|"NORMAL"|string;
  export interface Mp4Settings {
    CslgAtom?: Mp4CslgAtom;
    FreeSpaceBox?: Mp4FreeSpaceBox;
    MoovPlacement?: Mp4MoovPlacement;
    /**
     * Overrides the "Major Brand" field in the output file. Usually not necessary to specify.
     */
    Mp4MajorBrand?: __string;
  }
  export type Mpeg2AdaptiveQuantization = "OFF"|"LOW"|"MEDIUM"|"HIGH"|string;
  export type Mpeg2CodecLevel = "AUTO"|"LOW"|"MAIN"|"HIGH1440"|"HIGH"|string;
  export type Mpeg2CodecProfile = "MAIN"|"PROFILE_422"|string;
  export type Mpeg2FramerateControl = "INITIALIZE_FROM_SOURCE"|"SPECIFIED"|string;
  export type Mpeg2FramerateConversionAlgorithm = "DUPLICATE_DROP"|"INTERPOLATE"|string;
  export type Mpeg2GopSizeUnits = "FRAMES"|"SECONDS"|string;
  export type Mpeg2InterlaceMode = "PROGRESSIVE"|"TOP_FIELD"|"BOTTOM_FIELD"|"FOLLOW_TOP_FIELD"|"FOLLOW_BOTTOM_FIELD"|string;
  export type Mpeg2IntraDcPrecision = "AUTO"|"INTRA_DC_PRECISION_8"|"INTRA_DC_PRECISION_9"|"INTRA_DC_PRECISION_10"|"INTRA_DC_PRECISION_11"|string;
  export type Mpeg2ParControl = "INITIALIZE_FROM_SOURCE"|"SPECIFIED"|string;
  export type Mpeg2QualityTuningLevel = "SINGLE_PASS"|"MULTI_PASS"|string;
  export type Mpeg2RateControlMode = "VBR"|"CBR"|string;
  export type Mpeg2SceneChangeDetect = "DISABLED"|"ENABLED"|string;
  export interface Mpeg2Settings {
    AdaptiveQuantization?: Mpeg2AdaptiveQuantization;
    /**
     * Average bitrate in bits/second. Required for VBR and CBR. For MS Smooth outputs, bitrates must be unique when rounded down to the nearest multiple of 1000.
     */
    Bitrate?: __integerMin1000Max288000000;
    CodecLevel?: Mpeg2CodecLevel;
    CodecProfile?: Mpeg2CodecProfile;
    FramerateControl?: Mpeg2FramerateControl;
    FramerateConversionAlgorithm?: Mpeg2FramerateConversionAlgorithm;
    /**
     * Framerate denominator.
     */
    FramerateDenominator?: __integerMin1Max1001;
    /**
     * Framerate numerator - framerate is a fraction, e.g. 24000 / 1001 = 23.976 fps.
     */
    FramerateNumerator?: __integerMin24Max60000;
    /**
     * Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting.
     */
    GopClosedCadence?: __integerMin0Max2147483647;
    /**
     * GOP Length (keyframe interval) in frames or seconds. Must be greater than zero.
     */
    GopSize?: __doubleMin0;
    GopSizeUnits?: Mpeg2GopSizeUnits;
    /**
     * Percentage of the buffer that should initially be filled (HRD buffer model).
     */
    HrdBufferInitialFillPercentage?: __integerMin0Max100;
    /**
     * Size of buffer (HRD buffer model) in bits. For example, enter five megabits as 5000000.
     */
    HrdBufferSize?: __integerMin0Max47185920;
    InterlaceMode?: Mpeg2InterlaceMode;
    IntraDcPrecision?: Mpeg2IntraDcPrecision;
    /**
     * Maximum bitrate in bits/second. For example, enter five megabits per second as 5000000.
     */
    MaxBitrate?: __integerMin1000Max300000000;
    /**
     * Enforces separation between repeated (cadence) I-frames and I-frames inserted by Scene Change Detection. If a scene change I-frame is within I-interval frames of a cadence I-frame, the GOP is shrunk and/or stretched to the scene change I-frame. GOP stretch requires enabling lookahead as well as setting I-interval. The normal cadence resumes for the next GOP. This setting is only used when Scene Change Detect is enabled. Note: Maximum GOP stretch = GOP size + Min-I-interval - 1
     */
    MinIInterval?: __integerMin0Max30;
    /**
     * Number of B-frames between reference frames.
     */
    NumberBFramesBetweenReferenceFrames?: __integerMin0Max7;
    ParControl?: Mpeg2ParControl;
    /**
     * Pixel Aspect Ratio denominator.
     */
    ParDenominator?: __integerMin1Max2147483647;
    /**
     * Pixel Aspect Ratio numerator.
     */
    ParNumerator?: __integerMin1Max2147483647;
    QualityTuningLevel?: Mpeg2QualityTuningLevel;
    RateControlMode?: Mpeg2RateControlMode;
    SceneChangeDetect?: Mpeg2SceneChangeDetect;
    SlowPal?: Mpeg2SlowPal;
    /**
     * Softness. Selects quantizer matrix, larger values reduce high-frequency content in the encoded image.
     */
    Softness?: __integerMin0Max128;
    SpatialAdaptiveQuantization?: Mpeg2SpatialAdaptiveQuantization;
    Syntax?: Mpeg2Syntax;
    Telecine?: Mpeg2Telecine;
    TemporalAdaptiveQuantization?: Mpeg2TemporalAdaptiveQuantization;
  }
  export type Mpeg2SlowPal = "DISABLED"|"ENABLED"|string;
  export type Mpeg2SpatialAdaptiveQuantization = "DISABLED"|"ENABLED"|string;
  export type Mpeg2Syntax = "DEFAULT"|"D_10"|string;
  export type Mpeg2Telecine = "NONE"|"SOFT"|"HARD"|string;
  export type Mpeg2TemporalAdaptiveQuantization = "DISABLED"|"ENABLED"|string;
  export type MsSmoothAudioDeduplication = "COMBINE_DUPLICATE_STREAMS"|"NONE"|string;
  export interface MsSmoothEncryptionSettings {
    SpekeKeyProvider: SpekeKeyProvider;
  }
  export interface MsSmoothGroupSettings {
    AudioDeduplication?: MsSmoothAudioDeduplication;
    /**
     * Use Destination (Destination) to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file.
     */
    Destination?: __stringPatternS3;
    Encryption?: MsSmoothEncryptionSettings;
    /**
     * Use Fragment length (FragmentLength) to specify the mp4 fragment sizes in seconds. Fragment length must be compatible with GOP size and framerate.
     */
    FragmentLength: __integerMin1Max2147483647;
    ManifestEncoding?: MsSmoothManifestEncoding;
  }
  export type MsSmoothManifestEncoding = "UTF8"|"UTF16"|string;
  export interface NielsenConfiguration {
    /**
     * Use Nielsen Configuration (NielsenConfiguration) to set the Nielsen measurement system breakout code. Supported values are 0, 3, 7, and 9.
     */
    BreakoutCode?: __integerMin0Max9;
    /**
     * Use Distributor ID (DistributorID) to specify the distributor ID that is assigned to your organization by Neilsen.
     */
    DistributorId?: __string;
  }
  export interface NoiseReducer {
    Filter: NoiseReducerFilter;
    FilterSettings?: NoiseReducerFilterSettings;
    SpatialFilterSettings?: NoiseReducerSpatialFilterSettings;
  }
  export type NoiseReducerFilter = "BILATERAL"|"MEAN"|"GAUSSIAN"|"LANCZOS"|"SHARPEN"|"CONSERVE"|"SPATIAL"|string;
  export interface NoiseReducerFilterSettings {
    /**
     * Relative strength of noise reducing filter. Higher values produce stronger filtering.
     */
    Strength?: __integerMin0Max3;
  }
  export interface NoiseReducerSpatialFilterSettings {
    /**
     * Specify strength of post noise reduction sharpening filter, with 0 disabling the filter and 3 enabling it at maximum strength.
     */
    PostFilterSharpenStrength?: __integerMin0Max3;
    /**
     * The speed of the filter, from -2 (lower speed) to 3 (higher speed), with 0 being the nominal value.
     */
    Speed?: __integerMinNegative2Max3;
    /**
     * Relative strength of noise reducing filter. Higher values produce stronger filtering.
     */
    Strength?: __integerMin0Max16;
  }
  export type Order = "ASCENDING"|"DESCENDING"|string;
  export interface Output {
    /**
     * (AudioDescriptions) contains groups of audio encoding settings organized by audio codec. Include one instance of (AudioDescriptions) per output. (AudioDescriptions) can contain multiple groups of encoding settings.
     */
    AudioDescriptions?: __listOfAudioDescription;
    /**
     * (CaptionDescriptions) contains groups of captions settings. For each output that has captions, include one instance of (CaptionDescriptions). (CaptionDescriptions) can contain multiple groups of captions settings.
     */
    CaptionDescriptions?: __listOfCaptionDescription;
    ContainerSettings?: ContainerSettings;
    /**
     * Use Extension (Extension) to specify the file extension for outputs in File output groups. If you do not specify a value, the service will use default extensions by container type as follows * MPEG-2 transport stream, m2ts * Quicktime, mov * MXF container, mxf * MPEG-4 container, mp4 * No Container, the service will use codec extensions (e.g. AAC, H265, H265, AC3)
     */
    Extension?: __string;
    /**
     * Use Name modifier (NameModifier) to have the service add a string to the end of each output filename. You specify the base filename as part of your destination URI. When you create multiple outputs in the same output group, Name modifier (NameModifier) is required. Name modifier also accepts format identifiers. For DASH ISO outputs, if you use the format identifiers $Number$ or $Time$ in one output, you must use them in the same way in all outputs of the output group.
     */
    NameModifier?: __stringMin1;
    OutputSettings?: OutputSettings;
    /**
     * Use Preset (Preset) to specifiy a preset for your transcoding settings. Provide the system or custom preset name. You can specify either Preset (Preset) or Container settings (ContainerSettings), but not both.
     */
    Preset?: __stringMin0;
    /**
     * (VideoDescription) contains a group of video encoding settings. The specific video settings depend on the video codec you choose when you specify a value for Video codec (codec). Include one instance of (VideoDescription) per output.
     */
    VideoDescription?: VideoDescription;
  }
  export interface OutputChannelMapping {
    /**
     * List of input channels
     */
    InputChannels: __listOf__integerMinNegative60Max6;
  }
  export interface OutputDetail {
    /**
     * Duration in milliseconds
     */
    DurationInMs?: __integer;
    VideoDetails?: VideoDetail;
  }
  export interface OutputGroup {
    /**
     * Use Custom Group Name (CustomName) to specify a name for the output group. This value is displayed on the console and can make your job settings JSON more human-readable. It does not affect your outputs. Use up to twelve characters that are either letters, numbers, spaces, or underscores.
     */
    CustomName?: __string;
    /**
     * Name of the output group
     */
    Name?: __string;
    OutputGroupSettings: OutputGroupSettings;
    /**
     * This object holds groups of encoding settings, one group of settings per output.
     */
    Outputs: __listOfOutput;
  }
  export interface OutputGroupDetail {
    /**
     * Details about the output
     */
    OutputDetails?: __listOfOutputDetail;
  }
  export interface OutputGroupSettings {
    CmafGroupSettings?: CmafGroupSettings;
    DashIsoGroupSettings?: DashIsoGroupSettings;
    FileGroupSettings?: FileGroupSettings;
    HlsGroupSettings?: HlsGroupSettings;
    MsSmoothGroupSettings?: MsSmoothGroupSettings;
    Type: OutputGroupType;
  }
  export type OutputGroupType = "HLS_GROUP_SETTINGS"|"DASH_ISO_GROUP_SETTINGS"|"FILE_GROUP_SETTINGS"|"MS_SMOOTH_GROUP_SETTINGS"|"CMAF_GROUP_SETTINGS"|string;
  export type OutputSdt = "SDT_FOLLOW"|"SDT_FOLLOW_IF_PRESENT"|"SDT_MANUAL"|"SDT_NONE"|string;
  export interface OutputSettings {
    HlsSettings?: HlsSettings;
  }
  export interface Preset {
    /**
     * An identifier for this resource that is unique within all of AWS.
     */
    Arn?: __string;
    /**
     * An optional category you create to organize your presets.
     */
    Category?: __string;
    /**
     * The timestamp in epoch seconds for preset creation.
     */
    CreatedAt?: __timestampUnix;
    /**
     * An optional description you create for each preset.
     */
    Description?: __string;
    /**
     * The timestamp in epoch seconds when the preset was last updated.
     */
    LastUpdated?: __timestampUnix;
    /**
     * A name you create for each preset. Each name must be unique within your account.
     */
    Name: __string;
    Settings: PresetSettings;
    /**
     * A preset can be of two types: system or custom. System or built-in preset can't be modified or deleted by the user.
     */
    Type?: Type;
  }
  export type PresetListBy = "NAME"|"CREATION_DATE"|"SYSTEM"|string;
  export interface PresetSettings {
    /**
     * (AudioDescriptions) contains groups of audio encoding settings organized by audio codec. Include one instance of (AudioDescriptions) per output. (AudioDescriptions) can contain multiple groups of encoding settings.
     */
    AudioDescriptions?: __listOfAudioDescription;
    /**
     * Caption settings for this preset. There can be multiple caption settings in a single output.
     */
    CaptionDescriptions?: __listOfCaptionDescriptionPreset;
    ContainerSettings?: ContainerSettings;
    /**
     * (VideoDescription) contains a group of video encoding settings. The specific video settings depend on the video codec you choose when you specify a value for Video codec (codec). Include one instance of (VideoDescription) per output.
     */
    VideoDescription?: VideoDescription;
  }
  export type ProresCodecProfile = "APPLE_PRORES_422"|"APPLE_PRORES_422_HQ"|"APPLE_PRORES_422_LT"|"APPLE_PRORES_422_PROXY"|string;
  export type ProresFramerateControl = "INITIALIZE_FROM_SOURCE"|"SPECIFIED"|string;
  export type ProresFramerateConversionAlgorithm = "DUPLICATE_DROP"|"INTERPOLATE"|string;
  export type ProresInterlaceMode = "PROGRESSIVE"|"TOP_FIELD"|"BOTTOM_FIELD"|"FOLLOW_TOP_FIELD"|"FOLLOW_BOTTOM_FIELD"|string;
  export type ProresParControl = "INITIALIZE_FROM_SOURCE"|"SPECIFIED"|string;
  export interface ProresSettings {
    CodecProfile?: ProresCodecProfile;
    FramerateControl?: ProresFramerateControl;
    FramerateConversionAlgorithm?: ProresFramerateConversionAlgorithm;
    /**
     * Framerate denominator.
     */
    FramerateDenominator?: __integerMin1Max2147483647;
    /**
     * When you use the API for transcode jobs that use framerate conversion, specify the framerate as a fraction. For example,  24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator.
     */
    FramerateNumerator?: __integerMin1Max2147483647;
    InterlaceMode?: ProresInterlaceMode;
    ParControl?: ProresParControl;
    /**
     * Pixel Aspect Ratio denominator.
     */
    ParDenominator?: __integerMin1Max2147483647;
    /**
     * Pixel Aspect Ratio numerator.
     */
    ParNumerator?: __integerMin1Max2147483647;
    SlowPal?: ProresSlowPal;
    Telecine?: ProresTelecine;
  }
  export type ProresSlowPal = "DISABLED"|"ENABLED"|string;
  export type ProresTelecine = "NONE"|"HARD"|string;
  export interface Queue {
    /**
     * An identifier for this resource that is unique within all of AWS.
     */
    Arn?: __string;
    /**
     * The timestamp in epoch seconds for queue creation.
     */
    CreatedAt?: __timestampUnix;
    /**
     * An optional description you create for each queue.
     */
    Description?: __string;
    /**
     * The timestamp in epoch seconds when the queue was last updated.
     */
    LastUpdated?: __timestampUnix;
    /**
     * A name you create for each queue. Each name must be unique within your account.
     */
    Name: __string;
    /**
     * Estimated number of jobs in PROGRESSING status.
     */
    ProgressingJobsCount?: __integer;
    Status?: QueueStatus;
    /**
     * Estimated number of jobs in SUBMITTED status.
     */
    SubmittedJobsCount?: __integer;
    /**
     * A queue can be of two types: system or custom. System or built-in queues can't be modified or deleted by the user.
     */
    Type?: Type;
  }
  export type QueueListBy = "NAME"|"CREATION_DATE"|string;
  export type QueueStatus = "ACTIVE"|"PAUSED"|string;
  export interface Rectangle {
    /**
     * Height of rectangle in pixels.
     */
    Height: __integerMinNegative2147483648Max2147483647;
    /**
     * Width of rectangle in pixels.
     */
    Width: __integerMinNegative2147483648Max2147483647;
    /**
     * The distance, in pixels, between the rectangle and the left edge of the video frame.
     */
    X: __integerMinNegative2147483648Max2147483647;
    /**
     * The distance, in pixels, between the rectangle and the top edge of the video frame.
     */
    Y: __integerMinNegative2147483648Max2147483647;
  }
  export interface RemixSettings {
    ChannelMapping: ChannelMapping;
    /**
     * Specify the number of audio channels from your input that you want to use in your output. With remixing, you might combine or split the data in these channels, so the number of channels in your final output might be different.
     */
    ChannelsIn: __integerMin1Max16;
    /**
     * Specify the number of channels in this output after remixing. Valid values: 1, 2, 4, 6, 8
     */
    ChannelsOut: __integerMin1Max8;
  }
  export interface ResourceTags {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    Arn?: __string;
    /**
     * The tags for the resource.
     */
    Tags?: __mapOf__string;
  }
  export type RespondToAfd = "NONE"|"RESPOND"|"PASSTHROUGH"|string;
  export type ScalingBehavior = "DEFAULT"|"STRETCH_TO_OUTPUT"|string;
  export type SccDestinationFramerate = "FRAMERATE_23_97"|"FRAMERATE_24"|"FRAMERATE_29_97_DROPFRAME"|"FRAMERATE_29_97_NON_DROPFRAME"|string;
  export interface SccDestinationSettings {
    Framerate?: SccDestinationFramerate;
  }
  export interface SpekeKeyProvider {
    /**
     * The SPEKE-compliant server uses Resource ID (ResourceId) to identify content.
     */
    ResourceId: __string;
    /**
     * Relates to SPEKE implementation. DRM system identifiers. DASH output groups support a max of two system ids. Other group types support one system id.
     */
    SystemIds: __listOf__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12;
    /**
     * Use URL (Url) to specify the SPEKE-compliant server that will provide keys for content.
     */
    Url: __stringPatternHttps;
  }
  export interface StaticKeyProvider {
    /**
     * Relates to DRM implementation. Sets the value of the KEYFORMAT attribute. Must be 'identity' or a reverse DNS string. May be omitted to indicate an implicit value of 'identity'.
     */
    KeyFormat?: __stringPatternIdentityAZaZ26AZaZ09163;
    /**
     * Relates to DRM implementation. Either a single positive integer version value or a slash delimited list of version values (1/2/3).
     */
    KeyFormatVersions?: __stringPatternDD;
    /**
     * Relates to DRM implementation. Use a 32-character hexidecimal string to specify Key Value (StaticKeyValue).
     */
    StaticKeyValue: __stringPatternAZaZ0932;
    /**
     * Relates to DRM implementation. The location of the license server used for protecting content.
     */
    Url: __string;
  }
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource that you want to tag. To get the ARN, send a GET request with the resource name.
     */
    Arn: __string;
    /**
     * The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
     */
    Tags: __mapOf__string;
  }
  export interface TagResourceResponse {
  }
  export interface TeletextDestinationSettings {
    /**
     * Set pageNumber to the Teletext page number for the destination captions for this output. This value must be a three-digit hexadecimal string; strings ending in -FF are invalid. If you are passing through the entire set of Teletext data, do not use this field.
     */
    PageNumber?: __stringMin3Max3Pattern1809aFAF09aEAE;
  }
  export interface TeletextSourceSettings {
    /**
     * Use Page Number (PageNumber) to specify the three-digit hexadecimal page number that will be used for Teletext captions. Do not use this setting if you are passing through teletext from the input source to output.
     */
    PageNumber?: __stringMin3Max3Pattern1809aFAF09aEAE;
  }
  export interface TimecodeBurnin {
    /**
     * Use Font Size (FontSize) to set the font size of any burned-in timecode. Valid values are 10, 16, 32, 48.
     */
    FontSize?: __integerMin10Max48;
    Position?: TimecodeBurninPosition;
    /**
     * Use Prefix (Prefix) to place ASCII characters before any burned-in timecode. For example, a prefix of "EZ-" will result in the timecode "EZ-00:00:00:00". Provide either the characters themselves or the ASCII code equivalents. The supported range of characters is 0x20 through 0x7e. This includes letters, numbers, and all special characters represented on a standard English keyboard.
     */
    Prefix?: __stringPattern;
  }
  export type TimecodeBurninPosition = "TOP_CENTER"|"TOP_LEFT"|"TOP_RIGHT"|"MIDDLE_LEFT"|"MIDDLE_CENTER"|"MIDDLE_RIGHT"|"BOTTOM_LEFT"|"BOTTOM_CENTER"|"BOTTOM_RIGHT"|string;
  export interface TimecodeConfig {
    /**
     * If you use an editing platform that relies on an anchor timecode, use Anchor Timecode (Anchor) to specify a timecode that will match the input video frame to the output video frame. Use 24-hour format with frame number, (HH:MM:SS:FF) or (HH:MM:SS;FF). This setting ignores framerate conversion. System behavior for Anchor Timecode varies depending on your setting for Source (TimecodeSource). * If Source (TimecodeSource) is set to Specified Start (SPECIFIEDSTART), the first input frame is the specified value in Start Timecode (Start). Anchor Timecode (Anchor) and Start Timecode (Start) are used calculate output timecode. * If Source (TimecodeSource) is set to Start at 0 (ZEROBASED)  the  first frame is 00:00:00:00. * If Source (TimecodeSource) is set to Embedded (EMBEDDED), the  first frame is the timecode value on the first input frame of the input.
     */
    Anchor?: __stringPattern010920405090509092;
    Source?: TimecodeSource;
    /**
     * Only use when you set Source (TimecodeSource) to Specified start (SPECIFIEDSTART). Use Start timecode (Start) to specify the timecode for the initial frame. Use 24-hour format with frame number, (HH:MM:SS:FF) or (HH:MM:SS;FF).
     */
    Start?: __stringPattern010920405090509092;
    /**
     * Only applies to outputs that support program-date-time stamp. Use Timestamp offset (TimestampOffset) to overwrite the timecode date without affecting the time and frame number. Provide the new date as a string in the format "yyyy-mm-dd".  To use Time stamp offset, you must also enable Insert program-date-time (InsertProgramDateTime) in the output settings. For example, if the date part of your timecodes is 2002-1-25 and you want to change it to one year later, set Timestamp offset (TimestampOffset) to 2003-1-25.
     */
    TimestampOffset?: __stringPattern0940191020191209301;
  }
  export type TimecodeSource = "EMBEDDED"|"ZEROBASED"|"SPECIFIEDSTART"|string;
  export type TimedMetadata = "PASSTHROUGH"|"NONE"|string;
  export interface TimedMetadataInsertion {
    /**
     * Id3Insertions contains the array of Id3Insertion instances.
     */
    Id3Insertions: __listOfId3Insertion;
  }
  export interface Timing {
    /**
     * The time, in Unix epoch format, that the transcoding job finished
     */
    FinishTime?: __timestampUnix;
    /**
     * The time, in Unix epoch format, that transcoding for the job began.
     */
    StartTime?: __timestampUnix;
    /**
     * The time, in Unix epoch format, that you submitted the job.
     */
    SubmitTime?: __timestampUnix;
  }
  export interface TtmlDestinationSettings {
    StylePassthrough?: TtmlStylePassthrough;
  }
  export type TtmlStylePassthrough = "ENABLED"|"DISABLED"|string;
  export type Type = "SYSTEM"|"CUSTOM"|string;
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource that you want to remove tags from. To get the ARN, send a GET request with the resource name.
     */
    Arn?: __string;
    /**
     * The keys of the tags that you want to remove from the resource.
     */
    TagKeys?: __listOf__string;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateJobTemplateRequest {
    /**
     * The new category for the job template, if you are changing it.
     */
    Category?: __string;
    /**
     * The new description for the job template, if you are changing it.
     */
    Description?: __string;
    /**
     * The name of the job template you are modifying
     */
    Name: __string;
    /**
     * The new queue for the job template, if you are changing it.
     */
    Queue?: __string;
    Settings?: JobTemplateSettings;
  }
  export interface UpdateJobTemplateResponse {
    JobTemplate?: JobTemplate;
  }
  export interface UpdatePresetRequest {
    /**
     * The new category for the preset, if you are changing it.
     */
    Category?: __string;
    /**
     * The new description for the preset, if you are changing it.
     */
    Description?: __string;
    /**
     * The name of the preset you are modifying.
     */
    Name: __string;
    Settings?: PresetSettings;
  }
  export interface UpdatePresetResponse {
    Preset?: Preset;
  }
  export interface UpdateQueueRequest {
    /**
     * The new description for the queue, if you are changing it.
     */
    Description?: __string;
    /**
     * The name of the queue you are modifying.
     */
    Name: __string;
    Status?: QueueStatus;
  }
  export interface UpdateQueueResponse {
    Queue?: Queue;
  }
  export type VideoCodec = "FRAME_CAPTURE"|"H_264"|"H_265"|"MPEG2"|"PRORES"|string;
  export interface VideoCodecSettings {
    Codec: VideoCodec;
    FrameCaptureSettings?: FrameCaptureSettings;
    H264Settings?: H264Settings;
    H265Settings?: H265Settings;
    Mpeg2Settings?: Mpeg2Settings;
    ProresSettings?: ProresSettings;
  }
  export interface VideoDescription {
    AfdSignaling?: AfdSignaling;
    AntiAlias?: AntiAlias;
    CodecSettings: VideoCodecSettings;
    ColorMetadata?: ColorMetadata;
    /**
     * Applies only if your input aspect ratio is different from your output aspect ratio. Use Input cropping rectangle (Crop) to specify the  video area the service will include in the output. This will crop the input source, causing video pixels to be removed on encode. Do not use this setting if you have enabled Stretch to output (stretchToOutput) in your output settings.
     */
    Crop?: Rectangle;
    DropFrameTimecode?: DropFrameTimecode;
    /**
     * Applies only if you set AFD Signaling(AfdSignaling) to Fixed (FIXED). Use Fixed (FixedAfd) to specify a four-bit AFD value which the service will write on all  frames of this video output.
     */
    FixedAfd?: __integerMin0Max15;
    /**
     * Use the Height (Height) setting to define the video resolution height for this output. Specify in pixels. If you don't provide a value here, the service will use the input height.
     */
    Height?: __integerMin32Max2160;
    /**
     * Use Position (Position) to point to a rectangle object to define your position. This setting overrides any other aspect ratio.
     */
    Position?: Rectangle;
    RespondToAfd?: RespondToAfd;
    ScalingBehavior?: ScalingBehavior;
    /**
     * Use Sharpness (Sharpness)setting to specify the strength of anti-aliasing. This setting changes the width of the anti-alias filter kernel used for scaling. Sharpness only applies if your output resolution is different from your input resolution, and if you set Anti-alias (AntiAlias) to ENABLED. 0 is the softest setting, 100 the sharpest, and 50 recommended for most content.
     */
    Sharpness?: __integerMin0Max100;
    TimecodeInsertion?: VideoTimecodeInsertion;
    /**
     * Find additional transcoding features under Preprocessors (VideoPreprocessors). Enable the features at each output individually. These features are disabled by default.
     */
    VideoPreprocessors?: VideoPreprocessor;
    /**
     * Use Width (Width) to define the video resolution width, in pixels, for this output. If you don't provide a value here, the service will use the input width.
     */
    Width?: __integerMin32Max4096;
  }
  export interface VideoDetail {
    /**
     * Height in pixels for the output
     */
    HeightInPx?: __integer;
    /**
     * Width in pixels for the output
     */
    WidthInPx?: __integer;
  }
  export interface VideoPreprocessor {
    /**
     * Enable the Color corrector (ColorCorrector) feature if necessary. Enable or disable this feature for each output individually. This setting is disabled by default.
     */
    ColorCorrector?: ColorCorrector;
    /**
     * Use Deinterlacer (Deinterlacer) to produce smoother motion and a clearer picture.
     */
    Deinterlacer?: Deinterlacer;
    /**
     * Enable the Image inserter (ImageInserter) feature to include a graphic overlay on your video. Enable or disable this feature for each output individually. This setting is disabled by default.
     */
    ImageInserter?: ImageInserter;
    /**
     * Enable the Noise reducer (NoiseReducer) feature to remove noise from your video output if necessary. Enable or disable this feature for each output individually. This setting is disabled by default.
     */
    NoiseReducer?: NoiseReducer;
    /**
     * Timecode burn-in (TimecodeBurnIn)--Burns the output timecode and specified prefix into the output.
     */
    TimecodeBurnin?: TimecodeBurnin;
  }
  export interface VideoSelector {
    ColorSpace?: ColorSpace;
    ColorSpaceUsage?: ColorSpaceUsage;
    Hdr10Metadata?: Hdr10Metadata;
    /**
     * Use PID (Pid) to select specific video data from an input file. Specify this value as an integer; the system automatically converts it to the hexidecimal value. For example, 257 selects PID 0x101. A PID, or packet identifier, is an identifier for a set of data in an MPEG-2 transport stream container.
     */
    Pid?: __integerMin1Max2147483647;
    /**
     * Selects a specific program from within a multi-program transport stream. Note that Quad 4K is not currently supported.
     */
    ProgramNumber?: __integerMinNegative2147483648Max2147483647;
  }
  export type VideoTimecodeInsertion = "DISABLED"|"PIC_TIMING_SEI"|string;
  export type WavFormat = "RIFF"|"RF64"|string;
  export interface WavSettings {
    /**
     * Specify Bit depth (BitDepth), in bits per sample, to choose the encoding quality for this audio track.
     */
    BitDepth?: __integerMin16Max24;
    /**
     * Set Channels to specify the number of channels in this output audio track. With WAV, valid values 1, 2, 4, and 8. In the console, these values are Mono, Stereo, 4-Channel, and 8-Channel, respectively.
     */
    Channels?: __integerMin1Max8;
    Format?: WavFormat;
    /**
     * Sample rate in Hz.
     */
    SampleRate?: __integerMin8000Max192000;
  }
  export type __boolean = boolean;
  export type __double = number;
  export type __doubleMin0 = number;
  export type __doubleMinNegative59Max0 = number;
  export type __doubleMinNegative60Max3 = number;
  export type __doubleMinNegative60MaxNegative1 = number;
  export type __integer = number;
  export type __integerMin0Max10 = number;
  export type __integerMin0Max100 = number;
  export type __integerMin0Max1000 = number;
  export type __integerMin0Max10000 = number;
  export type __integerMin0Max1152000000 = number;
  export type __integerMin0Max128 = number;
  export type __integerMin0Max1466400000 = number;
  export type __integerMin0Max15 = number;
  export type __integerMin0Max16 = number;
  export type __integerMin0Max2147483647 = number;
  export type __integerMin0Max255 = number;
  export type __integerMin0Max3 = number;
  export type __integerMin0Max30 = number;
  export type __integerMin0Max3600 = number;
  export type __integerMin0Max47185920 = number;
  export type __integerMin0Max500 = number;
  export type __integerMin0Max50000 = number;
  export type __integerMin0Max65535 = number;
  export type __integerMin0Max7 = number;
  export type __integerMin0Max8 = number;
  export type __integerMin0Max9 = number;
  export type __integerMin0Max96 = number;
  export type __integerMin0Max99 = number;
  export type __integerMin1000Max1152000000 = number;
  export type __integerMin1000Max1466400000 = number;
  export type __integerMin1000Max288000000 = number;
  export type __integerMin1000Max30000 = number;
  export type __integerMin1000Max300000000 = number;
  export type __integerMin10Max48 = number;
  export type __integerMin16Max24 = number;
  export type __integerMin1Max1 = number;
  export type __integerMin1Max100 = number;
  export type __integerMin1Max10000000 = number;
  export type __integerMin1Max1001 = number;
  export type __integerMin1Max16 = number;
  export type __integerMin1Max2 = number;
  export type __integerMin1Max20 = number;
  export type __integerMin1Max2147483647 = number;
  export type __integerMin1Max31 = number;
  export type __integerMin1Max32 = number;
  export type __integerMin1Max4 = number;
  export type __integerMin1Max6 = number;
  export type __integerMin1Max8 = number;
  export type __integerMin24Max60000 = number;
  export type __integerMin25Max10000 = number;
  export type __integerMin25Max2000 = number;
  export type __integerMin32000Max384000 = number;
  export type __integerMin32000Max48000 = number;
  export type __integerMin32Max2160 = number;
  export type __integerMin32Max4096 = number;
  export type __integerMin32Max8182 = number;
  export type __integerMin48000Max48000 = number;
  export type __integerMin6000Max1024000 = number;
  export type __integerMin64000Max640000 = number;
  export type __integerMin8000Max192000 = number;
  export type __integerMin8000Max96000 = number;
  export type __integerMin96Max600 = number;
  export type __integerMinNegative1000Max1000 = number;
  export type __integerMinNegative180Max180 = number;
  export type __integerMinNegative2147483648Max2147483647 = number;
  export type __integerMinNegative2Max3 = number;
  export type __integerMinNegative5Max5 = number;
  export type __integerMinNegative60Max6 = number;
  export type __integerMinNegative70Max0 = number;
  export type __listOfAudioDescription = AudioDescription[];
  export type __listOfCaptionDescription = CaptionDescription[];
  export type __listOfCaptionDescriptionPreset = CaptionDescriptionPreset[];
  export type __listOfEndpoint = Endpoint[];
  export type __listOfHlsAdMarkers = HlsAdMarkers[];
  export type __listOfHlsCaptionLanguageMapping = HlsCaptionLanguageMapping[];
  export type __listOfId3Insertion = Id3Insertion[];
  export type __listOfInput = Input[];
  export type __listOfInputClipping = InputClipping[];
  export type __listOfInputTemplate = InputTemplate[];
  export type __listOfInsertableImage = InsertableImage[];
  export type __listOfJob = Job[];
  export type __listOfJobTemplate = JobTemplate[];
  export type __listOfOutput = Output[];
  export type __listOfOutputChannelMapping = OutputChannelMapping[];
  export type __listOfOutputDetail = OutputDetail[];
  export type __listOfOutputGroup = OutputGroup[];
  export type __listOfOutputGroupDetail = OutputGroupDetail[];
  export type __listOfPreset = Preset[];
  export type __listOfQueue = Queue[];
  export type __listOf__integerMin1Max2147483647 = __integerMin1Max2147483647[];
  export type __listOf__integerMin32Max8182 = __integerMin32Max8182[];
  export type __listOf__integerMinNegative60Max6 = __integerMinNegative60Max6[];
  export type __listOf__string = __string[];
  export type __listOf__stringMin1 = __stringMin1[];
  export type __listOf__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12 = __stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12[];
  export type __long = number;
  export type __mapOfAudioSelector = {[key: string]: AudioSelector};
  export type __mapOfAudioSelectorGroup = {[key: string]: AudioSelectorGroup};
  export type __mapOfCaptionSelector = {[key: string]: CaptionSelector};
  export type __mapOf__string = {[key: string]: __string};
  export type __string = string;
  export type __stringMin0 = string;
  export type __stringMin1 = string;
  export type __stringMin14PatternS3BmpBMPPngPNG = string;
  export type __stringMin14PatternS3BmpBMPPngPNGTgaTGA = string;
  export type __stringMin14PatternS3SccSCCTtmlTTMLDfxpDFXPStlSTLSrtSRTSmiSMI = string;
  export type __stringMin1Max256 = string;
  export type __stringMin32Max32Pattern09aFAF32 = string;
  export type __stringMin3Max3Pattern1809aFAF09aEAE = string;
  export type __stringMin3Max3PatternAZaZ3 = string;
  export type __stringPattern = string;
  export type __stringPattern010920405090509092 = string;
  export type __stringPattern01D20305D205D = string;
  export type __stringPattern0940191020191209301 = string;
  export type __stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12 = string;
  export type __stringPatternAZaZ0902 = string;
  export type __stringPatternAZaZ0932 = string;
  export type __stringPatternDD = string;
  export type __stringPatternHttps = string;
  export type __stringPatternIdentityAZaZ26AZaZ09163 = string;
  export type __stringPatternS3 = string;
  export type __stringPatternS3MM2VVMMPPEEGGAAVVIIMMPP4FFLLVVMMPPTTMMPPGGMM4VVTTRRPPFF4VVMM2TTSSTTSS264HH264MMKKVVMMOOVVMMTTSSMM2TTWWMMVVAASSFFVVOOBB3GGPP3GGPPPPMMXXFFDDIIVVXXXXVVIIDDRRAAWWDDVVGGXXFFMM1VV3GG2VVMMFFMM3UU8LLCCHHGGXXFFMMPPEEGG2MMXXFFMMPPEEGG2MMXXFFHHDDWWAAVVYY4MM = string;
  export type __stringPatternS3MM2VVMMPPEEGGAAVVIIMMPP4FFLLVVMMPPTTMMPPGGMM4VVTTRRPPFF4VVMM2TTSSTTSS264HH264MMKKVVMMOOVVMMTTSSMM2TTWWMMVVAASSFFVVOOBB3GGPP3GGPPPPMMXXFFDDIIVVXXXXVVIIDDRRAAWWDDVVGGXXFFMM1VV3GG2VVMMFFMM3UU8LLCCHHGGXXFFMMPPEEGG2MMXXFFMMPPEEGG2MMXXFFHHDDWWAAVVYY4MMAAAACCAAIIFFFFMMPP2AACC3EECC3DDTTSSEE = string;
  export type __stringPatternWS = string;
  export type __timestampIso8601 = Date;
  export type __timestampUnix = Date;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-08-29"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the MediaConvert client.
   */
  export import Types = MediaConvert;
}
export = MediaConvert;
