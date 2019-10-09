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
   * Associates an AWS Certificate Manager (ACM) Amazon Resource Name (ARN) with AWS Elemental MediaConvert.
   */
  associateCertificate(params: MediaConvert.Types.AssociateCertificateRequest, callback?: (err: AWSError, data: MediaConvert.Types.AssociateCertificateResponse) => void): Request<MediaConvert.Types.AssociateCertificateResponse, AWSError>;
  /**
   * Associates an AWS Certificate Manager (ACM) Amazon Resource Name (ARN) with AWS Elemental MediaConvert.
   */
  associateCertificate(callback?: (err: AWSError, data: MediaConvert.Types.AssociateCertificateResponse) => void): Request<MediaConvert.Types.AssociateCertificateResponse, AWSError>;
  /**
   * Permanently cancel a job. Once you have canceled a job, you can't start it again.
   */
  cancelJob(params: MediaConvert.Types.CancelJobRequest, callback?: (err: AWSError, data: MediaConvert.Types.CancelJobResponse) => void): Request<MediaConvert.Types.CancelJobResponse, AWSError>;
  /**
   * Permanently cancel a job. Once you have canceled a job, you can't start it again.
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
   * Create a new transcoding queue. For information about queues, see Working With Queues in the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html
   */
  createQueue(params: MediaConvert.Types.CreateQueueRequest, callback?: (err: AWSError, data: MediaConvert.Types.CreateQueueResponse) => void): Request<MediaConvert.Types.CreateQueueResponse, AWSError>;
  /**
   * Create a new transcoding queue. For information about queues, see Working With Queues in the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html
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
   * Removes an association between the Amazon Resource Name (ARN) of an AWS Certificate Manager (ACM) certificate and an AWS Elemental MediaConvert resource.
   */
  disassociateCertificate(params: MediaConvert.Types.DisassociateCertificateRequest, callback?: (err: AWSError, data: MediaConvert.Types.DisassociateCertificateResponse) => void): Request<MediaConvert.Types.DisassociateCertificateResponse, AWSError>;
  /**
   * Removes an association between the Amazon Resource Name (ARN) of an AWS Certificate Manager (ACM) certificate and an AWS Elemental MediaConvert resource.
   */
  disassociateCertificate(callback?: (err: AWSError, data: MediaConvert.Types.DisassociateCertificateResponse) => void): Request<MediaConvert.Types.DisassociateCertificateResponse, AWSError>;
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
   * Add tags to a MediaConvert queue, preset, or job template. For information about tagging, see the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/tagging-resources.html
   */
  tagResource(params: MediaConvert.Types.TagResourceRequest, callback?: (err: AWSError, data: MediaConvert.Types.TagResourceResponse) => void): Request<MediaConvert.Types.TagResourceResponse, AWSError>;
  /**
   * Add tags to a MediaConvert queue, preset, or job template. For information about tagging, see the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/tagging-resources.html
   */
  tagResource(callback?: (err: AWSError, data: MediaConvert.Types.TagResourceResponse) => void): Request<MediaConvert.Types.TagResourceResponse, AWSError>;
  /**
   * Remove tags from a MediaConvert queue, preset, or job template. For information about tagging, see the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/tagging-resources.html
   */
  untagResource(params: MediaConvert.Types.UntagResourceRequest, callback?: (err: AWSError, data: MediaConvert.Types.UntagResourceResponse) => void): Request<MediaConvert.Types.UntagResourceResponse, AWSError>;
  /**
   * Remove tags from a MediaConvert queue, preset, or job template. For information about tagging, see the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/tagging-resources.html
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
    /**
     * Choose BROADCASTER_MIXED_AD when the input contains pre-mixed main audio + audio description (AD) as a stereo pair. The value for AudioType will be set to 3, which signals to downstream systems that this stream contains "broadcaster mixed AD". Note that the input received by the encoder must contain pre-mixed audio; the encoder does not perform the mixing. When you choose BROADCASTER_MIXED_AD, the encoder ignores any values you provide in AudioType and  FollowInputAudioType. Choose NORMAL when the input does not contain pre-mixed audio + audio description (AD). In this case, the encoder will use any values you provide for AudioType and FollowInputAudioType.
     */
    AudioDescriptionBroadcasterMix?: AacAudioDescriptionBroadcasterMix;
    /**
     * Specify the average bitrate in bits per second. The set of valid values for this setting is: 6000, 8000, 10000, 12000, 14000, 16000, 20000, 24000, 28000, 32000, 40000, 48000, 56000, 64000, 80000, 96000, 112000, 128000, 160000, 192000, 224000, 256000, 288000, 320000, 384000, 448000, 512000, 576000, 640000, 768000, 896000, 1024000. The value you set is also constrained by the values that you choose for Profile (codecProfile), Bitrate control mode (codingMode), and Sample rate (sampleRate). Default values depend on Bitrate control mode and Profile.
     */
    Bitrate?: __integerMin6000Max1024000;
    /**
     * AAC Profile.
     */
    CodecProfile?: AacCodecProfile;
    /**
     * Mono (Audio Description), Mono, Stereo, or 5.1 channel layout. Valid values depend on rate control mode and profile. "1.0 - Audio Description (Receiver Mix)" setting receives a stereo description plus control track and emits a mono AAC encode of the description track, with control data emitted in the PES header as per ETSI TS 101 154 Annex E.
     */
    CodingMode?: AacCodingMode;
    /**
     * Rate Control Mode.
     */
    RateControlMode?: AacRateControlMode;
    /**
     * Enables LATM/LOAS AAC output. Note that if you use LATM/LOAS AAC in an output, you must choose "No container" for the output container.
     */
    RawFormat?: AacRawFormat;
    /**
     * Sample rate in Hz. Valid values depend on rate control mode and profile.
     */
    SampleRate?: __integerMin8000Max96000;
    /**
     * Use MPEG-2 AAC instead of MPEG-4 AAC audio for raw or MPEG-2 Transport Stream containers.
     */
    Specification?: AacSpecification;
    /**
     * VBR Quality Level - Only used if rate_control_mode is VBR.
     */
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
     * Specify the average bitrate in bits per second. Valid bitrates depend on the coding mode.
     */
    Bitrate?: __integerMin64000Max640000;
    /**
     * Specify the bitstream mode for the AC-3 stream that the encoder emits. For more information about the AC3 bitstream mode, see ATSC A/52-2012 (Annex E).
     */
    BitstreamMode?: Ac3BitstreamMode;
    /**
     * Dolby Digital coding mode. Determines number of channels.
     */
    CodingMode?: Ac3CodingMode;
    /**
     * Sets the dialnorm for the output. If blank and input audio is Dolby Digital, dialnorm will be passed through.
     */
    Dialnorm?: __integerMin1Max31;
    /**
     * If set to FILM_STANDARD, adds dynamic range compression signaling to the output bitstream as defined in the Dolby Digital specification.
     */
    DynamicRangeCompressionProfile?: Ac3DynamicRangeCompressionProfile;
    /**
     * Applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid with 3_2_LFE coding mode.
     */
    LfeFilter?: Ac3LfeFilter;
    /**
     * When set to FOLLOW_INPUT, encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used.
     */
    MetadataControl?: Ac3MetadataControl;
    /**
     * This value is always 48000. It represents the sample rate in Hz.
     */
    SampleRate?: __integerMin48000Max48000;
  }
  export type AccelerationMode = "DISABLED"|"ENABLED"|"PREFERRED"|string;
  export interface AccelerationSettings {
    /**
     * Specify the conditions when the service will run your job with accelerated transcoding.
     */
    Mode: AccelerationMode;
  }
  export type AccelerationStatus = "NOT_APPLICABLE"|"IN_PROGRESS"|"ACCELERATED"|"NOT_ACCELERATED"|string;
  export type AfdSignaling = "NONE"|"AUTO"|"FIXED"|string;
  export interface AiffSettings {
    /**
     * Specify Bit depth (BitDepth), in bits per sample, to choose the encoding quality for this audio track.
     */
    BitDepth?: __integerMin16Max24;
    /**
     * Specify the number of channels in this output audio track. Valid values are 1 and even numbers up to 64. For example, 1, 2, 4, 6, and so on, up to 64.
     */
    Channels?: __integerMin1Max64;
    /**
     * Sample rate in hz.
     */
    SampleRate?: __integerMin8000Max192000;
  }
  export type AncillaryConvert608To708 = "UPCONVERT"|"DISABLED"|string;
  export interface AncillarySourceSettings {
    /**
     * Specify whether this set of input captions appears in your outputs in both 608 and 708 format. If you choose Upconvert (UPCONVERT), MediaConvert includes the captions data in two ways: it passes the 608 data through using the 608 compatibility bytes fields of the 708 wrapper, and it also translates the 608 data into 708.
     */
    Convert608To708?: AncillaryConvert608To708;
    /**
     * Specifies the 608 channel number in the ancillary data track from which to extract captions. Unused for passthrough.
     */
    SourceAncillaryChannelNumber?: __integerMin1Max4;
    /**
     * By default, the service terminates any unterminated captions at the end of each input. If you want the caption to continue onto your next input, disable this setting.
     */
    TerminateCaptions?: AncillaryTerminateCaptions;
  }
  export type AncillaryTerminateCaptions = "END_OF_INPUT"|"DISABLED"|string;
  export type AntiAlias = "DISABLED"|"ENABLED"|string;
  export interface AssociateCertificateRequest {
    /**
     * The ARN of the ACM certificate that you want to associate with your MediaConvert resource.
     */
    Arn: __string;
  }
  export interface AssociateCertificateResponse {
  }
  export type AudioCodec = "AAC"|"MP2"|"WAV"|"AIFF"|"AC3"|"EAC3"|"EAC3_ATMOS"|"PASSTHROUGH"|string;
  export interface AudioCodecSettings {
    /**
     * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AAC. The service accepts one of two mutually exclusive groups of AAC settings--VBR and CBR. To select one of these modes, set the value of Bitrate control mode (rateControlMode) to "VBR" or "CBR".  In VBR mode, you control the audio quality with the setting VBR quality (vbrQuality). In CBR mode, you use the setting Bitrate (bitrate). Defaults and valid values depend on the rate control mode.
     */
    AacSettings?: AacSettings;
    /**
     * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AC3.
     */
    Ac3Settings?: Ac3Settings;
    /**
     * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value AIFF.
     */
    AiffSettings?: AiffSettings;
    /**
     * Type of Audio codec.
     */
    Codec?: AudioCodec;
    /**
     * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value EAC3_ATMOS.
     */
    Eac3AtmosSettings?: Eac3AtmosSettings;
    /**
     * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value EAC3.
     */
    Eac3Settings?: Eac3Settings;
    /**
     * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value MP2.
     */
    Mp2Settings?: Mp2Settings;
    /**
     * Required when you set (Codec) under (AudioDescriptions)>(CodecSettings) to the value WAV.
     */
    WavSettings?: WavSettings;
  }
  export type AudioDefaultSelection = "DEFAULT"|"NOT_DEFAULT"|string;
  export interface AudioDescription {
    /**
     * Advanced audio normalization settings. Ignore these settings unless you need to comply with a loudness standard.
     */
    AudioNormalizationSettings?: AudioNormalizationSettings;
    /**
     * Specifies which audio data to use from each input. In the simplest case, specify an "Audio Selector":#inputs-audio_selector by name based on its order within each input. For example if you specify "Audio Selector 3", then the third audio selector will be used from each input. If an input does not have an "Audio Selector 3", then the audio selector marked as "default" in that input will be used. If there is no audio selector marked as "default", silence will be inserted for the duration of that input. Alternatively, an "Audio Selector Group":#inputs-audio_selector_group name may be specified, with similar default/silence behavior. If no audio_source_name is specified, then "Audio Selector 1" will be chosen automatically.
     */
    AudioSourceName?: __string;
    /**
     * Applies only if Follow Input Audio Type is unchecked (false). A number between 0 and 255. The following are defined in ISO-IEC 13818-1: 0 = Undefined, 1 = Clean Effects, 2 = Hearing Impaired, 3 = Visually Impaired Commentary, 4-255 = Reserved.
     */
    AudioType?: __integerMin0Max255;
    /**
     * When set to FOLLOW_INPUT, if the input contains an ISO 639 audio_type, then that value is passed through to the output. If the input contains no ISO 639 audio_type, the value in Audio Type is included in the output. Otherwise the value in Audio Type is included in the output. Note that this field and audioType are both ignored if audioDescriptionBroadcasterMix is set to BROADCASTER_MIXED_AD.
     */
    AudioTypeControl?: AudioTypeControl;
    /**
     * Audio codec settings (CodecSettings) under (AudioDescriptions) contains the group of settings related to audio encoding. The settings in this group vary depending on the value that you choose for Audio codec (Codec). For each codec enum that you choose, define the corresponding settings object. The following lists the codec enum, settings object pairs. * AAC, AacSettings * MP2, Mp2Settings * WAV, WavSettings * AIFF, AiffSettings * AC3, Ac3Settings * EAC3, Eac3Settings * EAC3_ATMOS, Eac3AtmosSettings
     */
    CodecSettings?: AudioCodecSettings;
    /**
     * Specify the language for this audio output track, using the ISO 639-2 or ISO 639-3 three-letter language code. The language specified will be used when 'Follow Input Language Code' is not selected or when 'Follow Input Language Code' is selected but there is no ISO 639 language code specified by the input.
     */
    CustomLanguageCode?: __stringMin3Max3PatternAZaZ3;
    /**
     * Indicates the language of the audio output track. The ISO 639 language specified in the 'Language Code' drop down will be used when 'Follow Input Language Code' is not selected or when 'Follow Input Language Code' is selected but there is no ISO 639 language code specified by the input.
     */
    LanguageCode?: LanguageCode;
    /**
     * Choosing FOLLOW_INPUT will cause the ISO 639 language code of the output to follow the ISO 639 language code of the input. The language specified for languageCode' will be used when USE_CONFIGURED is selected or when FOLLOW_INPUT is selected but there is no ISO 639 language code specified by the input.
     */
    LanguageCodeControl?: AudioLanguageCodeControl;
    /**
     * Advanced audio remixing settings.
     */
    RemixSettings?: RemixSettings;
    /**
     * Specify a label for this output audio stream. For example, "English", "Director commentary", or "track_2". For streaming outputs, MediaConvert passes this information into destination manifests for display on the end-viewer's player device. For outputs in other output groups, the service ignores this setting.
     */
    StreamName?: __stringPatternWS;
  }
  export type AudioLanguageCodeControl = "FOLLOW_INPUT"|"USE_CONFIGURED"|string;
  export type AudioNormalizationAlgorithm = "ITU_BS_1770_1"|"ITU_BS_1770_2"|"ITU_BS_1770_3"|"ITU_BS_1770_4"|string;
  export type AudioNormalizationAlgorithmControl = "CORRECT_AUDIO"|"MEASURE_ONLY"|string;
  export type AudioNormalizationLoudnessLogging = "LOG"|"DONT_LOG"|string;
  export type AudioNormalizationPeakCalculation = "TRUE_PEAK"|"NONE"|string;
  export interface AudioNormalizationSettings {
    /**
     * Choose one of the following audio normalization algorithms: ITU-R BS.1770-1: Ungated loudness. A measurement of ungated average loudness for an entire piece of content, suitable for measurement of short-form content under ATSC recommendation A/85. Supports up to 5.1 audio channels. ITU-R BS.1770-2: Gated loudness. A measurement of gated average loudness compliant with the requirements of EBU-R128. Supports up to 5.1 audio channels. ITU-R BS.1770-3: Modified peak. The same loudness measurement algorithm as 1770-2, with an updated true peak measurement. ITU-R BS.1770-4: Higher channel count. Allows for more audio channels than the other algorithms, including configurations such as 7.1.
     */
    Algorithm?: AudioNormalizationAlgorithm;
    /**
     * When enabled the output audio is corrected using the chosen algorithm. If disabled, the audio will be measured but not adjusted.
     */
    AlgorithmControl?: AudioNormalizationAlgorithmControl;
    /**
     * Content measuring above this level will be corrected to the target level. Content measuring below this level will not be corrected. Gating only applies when not using real_time_correction.
     */
    CorrectionGateLevel?: __integerMinNegative70Max0;
    /**
     * If set to LOG, log each output's audio track loudness to a CSV file.
     */
    LoudnessLogging?: AudioNormalizationLoudnessLogging;
    /**
     * If set to TRUE_PEAK, calculate and log the TruePeak for each output's audio track loudness.
     */
    PeakCalculation?: AudioNormalizationPeakCalculation;
    /**
     * When you use Audio normalization (AudioNormalizationSettings), optionally use this setting to specify a target loudness. If you don't specify a value here, the encoder chooses a value for you, based on the algorithm that you choose for Algorithm (algorithm). If you choose algorithm 1770-1, the encoder will choose -24 LKFS; otherwise, the encoder will choose -23 LKFS.
     */
    TargetLkfs?: __doubleMinNegative59Max0;
  }
  export interface AudioSelector {
    /**
     * Selects a specific language code from within an audio source, using the ISO 639-2 or ISO 639-3 three-letter language code
     */
    CustomLanguageCode?: __stringMin3Max3PatternAZaZ3;
    /**
     * Enable this setting on one audio selector to set it as the default for the job. The service uses this default for outputs where it can't find the specified input audio. If you don't set a default, those outputs have no audio.
     */
    DefaultSelection?: AudioDefaultSelection;
    /**
     * Specifies audio data from an external file source.
     */
    ExternalAudioFileInput?: __stringPatternHttpHttpsS3MM2VVMMPPEEGGMMPP3AAVVIIMMPP4FFLLVVMMPPTTMMPPGGMM4VVTTRRPPFF4VVMM2TTSSTTSS264HH264MMKKVVMMOOVVMMTTSSMM2TTWWMMVVAASSFFVVOOBB3GGPP3GGPPPPMMXXFFDDIIVVXXXXVVIIDDRRAAWWDDVVGGXXFFMM1VV3GG2VVMMFFMM3UU8LLCCHHGGXXFFMMPPEEGG2MMXXFFMMPPEEGG2MMXXFFHHDDWWAAVVYY4MMAAAACCAAIIFFFFMMPP2AACC3EECC3DDTTSSEE;
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
    /**
     * Specifies the type of the audio selector.
     */
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
    AudioSelectorNames?: __listOf__stringMin1;
  }
  export type AudioSelectorType = "PID"|"TRACK"|"LANGUAGE_CODE"|string;
  export type AudioTypeControl = "FOLLOW_INPUT"|"USE_CONFIGURED"|string;
  export interface AvailBlanking {
    /**
     * Blanking image to be used. Leave empty for solid black. Only bmp and png images are supported.
     */
    AvailBlankingImage?: __stringMin14PatternHttpHttpsS3BmpBMPPngPNG;
  }
  export type BillingTagsSource = "QUEUE"|"PRESET"|"JOB_TEMPLATE"|"JOB"|string;
  export interface BurninDestinationSettings {
    /**
     * If no explicit x_position or y_position is provided, setting alignment to centered will place the captions at the bottom center of the output. Similarly, setting a left alignment will align captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
     */
    Alignment?: BurninSubtitleAlignment;
    /**
     * Specifies the color of the rectangle behind the captions.
All burn-in and DVB-Sub font settings must match.
     */
    BackgroundColor?: BurninSubtitleBackgroundColor;
    /**
     * Specifies the opacity of the background rectangle. 255 is opaque; 0 is transparent. Leaving this parameter blank is equivalent to setting it to 0 (transparent). All burn-in and DVB-Sub font settings must match.
     */
    BackgroundOpacity?: __integerMin0Max255;
    /**
     * Specifies the color of the burned-in captions. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
     */
    FontColor?: BurninSubtitleFontColor;
    /**
     * Specifies the opacity of the burned-in captions. 255 is opaque; 0 is transparent.
All burn-in and DVB-Sub font settings must match.
     */
    FontOpacity?: __integerMin0Max255;
    /**
     * Font resolution in DPI (dots per inch); default is 96 dpi.
All burn-in and DVB-Sub font settings must match.
     */
    FontResolution?: __integerMin96Max600;
    /**
     * Provide the font script, using an ISO 15924 script code, if the LanguageCode is not sufficient for determining the script type. Where LanguageCode or CustomLanguageCode is sufficient, use "AUTOMATIC" or leave unset. This is used to help determine the appropriate font for rendering burn-in captions.
     */
    FontScript?: FontScript;
    /**
     * A positive integer indicates the exact font size in points. Set to 0 for automatic font size selection. All burn-in and DVB-Sub font settings must match.
     */
    FontSize?: __integerMin0Max96;
    /**
     * Specifies font outline color. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
     */
    OutlineColor?: BurninSubtitleOutlineColor;
    /**
     * Specifies font outline size in pixels. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
     */
    OutlineSize?: __integerMin0Max10;
    /**
     * Specifies the color of the shadow cast by the captions.
All burn-in and DVB-Sub font settings must match.
     */
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
    /**
     * Only applies to jobs with input captions in Teletext or STL formats. Specify whether the spacing between letters in your captions is set by the captions grid or varies depending on letter width. Choose fixed grid to conform to the spacing specified in the captions file more accurately. Choose proportional to make the text easier to read if the captions are closed caption.
     */
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
    CaptionSelectorName?: __stringMin1;
    /**
     * Indicates the language of the caption output track, using the ISO 639-2 or ISO 639-3 three-letter language code. For most captions output formats, the encoder puts this language information in the output captions metadata. If your output captions format is DVB-Sub or Burn in, the encoder uses this language information to choose the font language for rendering the captions text.
     */
    CustomLanguageCode?: __stringMin3Max3PatternAZaZ3;
    /**
     * Specific settings required by destination type. Note that burnin_destination_settings are not available if the source of the caption data is Embedded or Teletext.
     */
    DestinationSettings?: CaptionDestinationSettings;
    /**
     * Specify the language of this captions output track. For most captions output formats, the encoder puts this language information in the output captions metadata. If your output captions format is DVB-Sub or Burn in, the encoder uses this language information to choose the font language for rendering the captions text.
     */
    LanguageCode?: LanguageCode;
    /**
     * Specify a label for this set of output captions. For example, "English", "Director commentary", or "track_2". For streaming outputs, MediaConvert passes this information into destination manifests for display on the end-viewer's player device. For outputs in other output groups, the service ignores this setting.
     */
    LanguageDescription?: __string;
  }
  export interface CaptionDescriptionPreset {
    /**
     * Indicates the language of the caption output track, using the ISO 639-2 or ISO 639-3 three-letter language code. For most captions output formats, the encoder puts this language information in the output captions metadata. If your output captions format is DVB-Sub or Burn in, the encoder uses this language information to choose the font language for rendering the captions text.
     */
    CustomLanguageCode?: __stringMin3Max3PatternAZaZ3;
    /**
     * Specific settings required by destination type. Note that burnin_destination_settings are not available if the source of the caption data is Embedded or Teletext.
     */
    DestinationSettings?: CaptionDestinationSettings;
    /**
     * Specify the language of this captions output track. For most captions output formats, the encoder puts this language information in the output captions metadata. If your output captions format is DVB-Sub or Burn in, the encoder uses this language information to choose the font language for rendering the captions text.
     */
    LanguageCode?: LanguageCode;
    /**
     * Specify a label for this set of output captions. For example, "English", "Director commentary", or "track_2". For streaming outputs, MediaConvert passes this information into destination manifests for display on the end-viewer's player device. For outputs in other output groups, the service ignores this setting.
     */
    LanguageDescription?: __string;
  }
  export interface CaptionDestinationSettings {
    /**
     * Burn-In Destination Settings.
     */
    BurninDestinationSettings?: BurninDestinationSettings;
    /**
     * Specify the format for this set of captions on this output. The default format is embedded without SCTE-20. Other options are embedded with SCTE-20, burn-in, DVB-sub, IMSC, SCC, SRT, teletext, TTML, and web-VTT. If you are using SCTE-20, choose SCTE-20 plus embedded (SCTE20_PLUS_EMBEDDED) to create an output that complies with the SCTE-43 spec. To create a non-compliant output where the embedded captions come first, choose Embedded plus SCTE-20 (EMBEDDED_PLUS_SCTE20).
     */
    DestinationType?: CaptionDestinationType;
    /**
     * DVB-Sub Destination Settings
     */
    DvbSubDestinationSettings?: DvbSubDestinationSettings;
    /**
     * Settings specific to embedded/ancillary caption outputs, including 608/708 Channel destination number.
     */
    EmbeddedDestinationSettings?: EmbeddedDestinationSettings;
    /**
     * Settings specific to IMSC caption outputs.
     */
    ImscDestinationSettings?: ImscDestinationSettings;
    /**
     * Settings for SCC caption output.
     */
    SccDestinationSettings?: SccDestinationSettings;
    /**
     * Settings for Teletext caption output
     */
    TeletextDestinationSettings?: TeletextDestinationSettings;
    /**
     * Settings specific to TTML caption outputs, including Pass style information (TtmlStylePassthrough).
     */
    TtmlDestinationSettings?: TtmlDestinationSettings;
  }
  export type CaptionDestinationType = "BURN_IN"|"DVB_SUB"|"EMBEDDED"|"EMBEDDED_PLUS_SCTE20"|"IMSC"|"SCTE20_PLUS_EMBEDDED"|"SCC"|"SRT"|"SMI"|"TELETEXT"|"TTML"|"WEBVTT"|string;
  export interface CaptionSelector {
    /**
     * The specific language to extract from source, using the ISO 639-2 or ISO 639-3 three-letter language code. If input is SCTE-27, complete this field and/or PID to select the caption language to extract. If input is DVB-Sub and output is Burn-in or SMPTE-TT, complete this field and/or PID to select the caption language to extract. If input is DVB-Sub that is being passed through, omit this field (and PID field); there is no way to extract a specific language with pass-through captions.
     */
    CustomLanguageCode?: __stringMin3Max3PatternAZaZ3;
    /**
     * The specific language to extract from source. If input is SCTE-27, complete this field and/or PID to select the caption language to extract. If input is DVB-Sub and output is Burn-in or SMPTE-TT, complete this field and/or PID to select the caption language to extract. If input is DVB-Sub that is being passed through, omit this field (and PID field); there is no way to extract a specific language with pass-through captions.
     */
    LanguageCode?: LanguageCode;
    /**
     * If your input captions are SCC, TTML, STL, SMI, SRT, or IMSC in an xml file, specify the URI of the input captions source file. If your input captions are IMSC in an IMF package, use TrackSourceSettings instead of FileSoureSettings.
     */
    SourceSettings?: CaptionSourceSettings;
  }
  export interface CaptionSourceSettings {
    /**
     * Settings for ancillary captions source.
     */
    AncillarySourceSettings?: AncillarySourceSettings;
    /**
     * DVB Sub Source Settings
     */
    DvbSubSourceSettings?: DvbSubSourceSettings;
    /**
     * Settings for embedded captions Source
     */
    EmbeddedSourceSettings?: EmbeddedSourceSettings;
    /**
     * If your input captions are SCC, SMI, SRT, STL, TTML, or IMSC 1.1 in an xml file, specify the URI of the input caption source file. If your caption source is IMSC in an IMF package, use TrackSourceSettings instead of FileSoureSettings.
     */
    FileSourceSettings?: FileSourceSettings;
    /**
     * Use Source (SourceType) to identify the format of your input captions.  The service cannot auto-detect caption format.
     */
    SourceType?: CaptionSourceType;
    /**
     * Settings specific to Teletext caption sources, including Page number.
     */
    TeletextSourceSettings?: TeletextSourceSettings;
    /**
     * Settings specific to caption sources that are specified by track number. Currently, this is only IMSC captions in an IMF package. If your caption source is IMSC 1.1 in a separate xml file, use FileSourceSettings instead of TrackSourceSettings.
     */
    TrackSourceSettings?: TrackSourceSettings;
  }
  export type CaptionSourceType = "ANCILLARY"|"DVB_SUB"|"EMBEDDED"|"SCTE20"|"SCC"|"TTML"|"STL"|"SRT"|"SMI"|"TELETEXT"|"NULL_SOURCE"|"IMSC"|string;
  export interface ChannelMapping {
    /**
     * List of output channels
     */
    OutputChannels?: __listOfOutputChannelMapping;
  }
  export type CmafClientCache = "DISABLED"|"ENABLED"|string;
  export type CmafCodecSpecification = "RFC_6381"|"RFC_4281"|string;
  export interface CmafEncryptionSettings {
    /**
     * This is a 128-bit, 16-byte hex value represented by a 32-character text string. If this parameter is not set then the Initialization Vector will follow the segment number by default.
     */
    ConstantInitializationVector?: __stringMin32Max32Pattern09aFAF32;
    /**
     * Specify the encryption scheme that you want the service to use when encrypting your CMAF segments. Choose AES-CBC subsample (SAMPLE-AES) or AES_CTR (AES-CTR).
     */
    EncryptionMethod?: CmafEncryptionType;
    /**
     * When you use DRM with CMAF outputs, choose whether the service writes the 128-bit encryption initialization vector in the HLS and DASH manifests.
     */
    InitializationVectorInManifest?: CmafInitializationVectorInManifest;
    /**
     * If your output group type is CMAF, use these settings when doing DRM encryption with a SPEKE-compliant key provider. If your output group type is HLS, DASH, or Microsoft Smooth, use the SpekeKeyProvider settings instead.
     */
    SpekeKeyProvider?: SpekeKeyProviderCmaf;
    /**
     * Use these settings to set up encryption with a static key provider.
     */
    StaticKeyProvider?: StaticKeyProvider;
    /**
     * Specify whether your DRM encryption key is static or from a key provider that follows the SPEKE standard. For more information about SPEKE, see https://docs.aws.amazon.com/speke/latest/documentation/what-is-speke.html.
     */
    Type?: CmafKeyProviderType;
  }
  export type CmafEncryptionType = "SAMPLE_AES"|"AES_CTR"|string;
  export interface CmafGroupSettings {
    /**
     * A partial URI prefix that will be put in the manifest file at the top level BaseURL element. Can be used if streams are delivered from a different URL than the manifest file.
     */
    BaseUrl?: __string;
    /**
     * When set to ENABLED, sets #EXT-X-ALLOW-CACHE:no tag, which prevents client from saving media segments for later replay.
     */
    ClientCache?: CmafClientCache;
    /**
     * Specification to use (RFC-6381 or the default RFC-4281) during m3u8 playlist generation.
     */
    CodecSpecification?: CmafCodecSpecification;
    /**
     * Use Destination (Destination) to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file.
     */
    Destination?: __stringPatternS3;
    /**
     * Settings associated with the destination. Will vary based on the type of destination
     */
    DestinationSettings?: DestinationSettings;
    /**
     * DRM settings.
     */
    Encryption?: CmafEncryptionSettings;
    /**
     * Length of fragments to generate (in seconds). Fragment length must be compatible with GOP size and Framerate. Note that fragments will end on the next keyframe after this number of seconds, so actual fragment length may be longer. When Emit Single File is checked, the fragmentation is internal to a single output file and it does not cause the creation of many output files as in other output types.
     */
    FragmentLength?: __integerMin1Max2147483647;
    /**
     * When set to GZIP, compresses HLS playlist.
     */
    ManifestCompression?: CmafManifestCompression;
    /**
     * Indicates whether the output manifest should use floating point values for segment duration.
     */
    ManifestDurationFormat?: CmafManifestDurationFormat;
    /**
     * Minimum time of initially buffered media that is needed to ensure smooth playout.
     */
    MinBufferTime?: __integerMin0Max2147483647;
    /**
     * Keep this setting at the default value of 0, unless you are troubleshooting a problem with how devices play back the end of your video asset. If you know that player devices are hanging on the final segment of your video because the length of your final segment is too short, use this setting to specify a minimum final segment length, in seconds. Choose a value that is greater than or equal to 1 and less than your segment length. When you specify a value for this setting, the encoder will combine any final segment that is shorter than the length that you specify with the previous segment. For example, your segment length is 3 seconds and your final segment is .5 seconds without a minimum final segment length; when you set the minimum final segment length to 1, your final segment is 3.5 seconds.
     */
    MinFinalSegmentLength?: __doubleMin0Max2147483647;
    /**
     * Specify whether your DASH profile is on-demand or main. When you choose Main profile (MAIN_PROFILE), the service signals  urn:mpeg:dash:profile:isoff-main:2011 in your .mpd DASH manifest. When you choose On-demand (ON_DEMAND_PROFILE), the service signals urn:mpeg:dash:profile:isoff-on-demand:2011 in your .mpd. When you choose On-demand, you must also set the output group setting Segment control (SegmentControl) to Single file (SINGLE_FILE).
     */
    MpdProfile?: CmafMpdProfile;
    /**
     * When set to SINGLE_FILE, a single output file is generated, which is internally segmented using the Fragment Length and Segment Length. When set to SEGMENTED_FILES, separate segment files will be created.
     */
    SegmentControl?: CmafSegmentControl;
    /**
     * Use this setting to specify the length, in seconds, of each individual CMAF segment. This value applies to the whole package; that is, to every output in the output group. Note that segments end on the first keyframe after this number of seconds, so the actual segment length might be slightly longer. If you set Segment control (CmafSegmentControl) to single file, the service puts the content of each output in a single file that has metadata that marks these segments. If you set it to segmented files, the service creates multiple files for each output, each with the content of one segment.
     */
    SegmentLength?: __integerMin1Max2147483647;
    /**
     * Include or exclude RESOLUTION attribute for video in EXT-X-STREAM-INF tag of variant manifest.
     */
    StreamInfResolution?: CmafStreamInfResolution;
    /**
     * When set to ENABLED, a DASH MPD manifest will be generated for this output.
     */
    WriteDashManifest?: CmafWriteDASHManifest;
    /**
     * When set to ENABLED, an Apple HLS manifest will be generated for this output.
     */
    WriteHlsManifest?: CmafWriteHLSManifest;
  }
  export type CmafInitializationVectorInManifest = "INCLUDE"|"EXCLUDE"|string;
  export type CmafKeyProviderType = "SPEKE"|"STATIC_KEY"|string;
  export type CmafManifestCompression = "GZIP"|"NONE"|string;
  export type CmafManifestDurationFormat = "FLOATING_POINT"|"INTEGER"|string;
  export type CmafMpdProfile = "MAIN_PROFILE"|"ON_DEMAND_PROFILE"|string;
  export type CmafSegmentControl = "SINGLE_FILE"|"SEGMENTED_FILES"|string;
  export type CmafStreamInfResolution = "INCLUDE"|"EXCLUDE"|string;
  export type CmafWriteDASHManifest = "DISABLED"|"ENABLED"|string;
  export type CmafWriteHLSManifest = "DISABLED"|"ENABLED"|string;
  export interface ColorCorrector {
    /**
     * Brightness level.
     */
    Brightness?: __integerMin1Max100;
    /**
     * Specify the color space you want for this output. The service supports conversion between HDR formats, between SDR formats, and from SDR to HDR. The service doesn't support conversion from HDR to SDR. SDR to HDR conversion doesn't upgrade the dynamic range. The converted video has an HDR format, but visually appears the same as an unconverted output.
     */
    ColorSpaceConversion?: ColorSpaceConversion;
    /**
     * Contrast level.
     */
    Contrast?: __integerMin1Max100;
    /**
     * Use these settings when you convert to the HDR 10 color space. Specify the SMPTE ST 2086 Mastering Display Color Volume static metadata that you want signaled in the output. These values don't affect the pixel values that are encoded in the video stream. They are intended to help the downstream video player display content in a way that reflects the intentions of the the content creator. When you set Color space conversion (ColorSpaceConversion) to HDR 10 (FORCE_HDR10), these settings are required. You must set values for Max frame average light level (maxFrameAverageLightLevel) and Max content light level (maxContentLightLevel); these settings don't have a default value. The default values for the other HDR 10 metadata settings are defined by the P3D65 color space. For more information about MediaConvert HDR jobs, see https://docs.aws.amazon.com/console/mediaconvert/hdr.
     */
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
  export type Commitment = "ONE_YEAR"|string;
  export interface ContainerSettings {
    /**
     * Container for this output. Some containers require a container settings object. If not specified, the default object will be created.
     */
    Container?: ContainerType;
    /**
     * Settings for F4v container
     */
    F4vSettings?: F4vSettings;
    /**
     * MPEG-2 TS container settings. These apply to outputs in a File output group when the output's container (ContainerType) is MPEG-2 Transport Stream (M2TS). In these assets, data is organized by the program map table (PMT). Each transport stream program contains subsets of data, including audio, video, and metadata. Each of these subsets of data has a numerical label called a packet identifier (PID). Each transport stream program corresponds to one MediaConvert output. The PMT lists the types of data in a program along with their PID. Downstream systems and players use the program map table to look up the PID for each type of data it accesses and then uses the PIDs to locate specific data within the asset.
     */
    M2tsSettings?: M2tsSettings;
    /**
     * Settings for TS segments in HLS
     */
    M3u8Settings?: M3u8Settings;
    /**
     * Settings for MOV Container.
     */
    MovSettings?: MovSettings;
    /**
     * Settings for MP4 container. You can create audio-only AAC outputs with this container.
     */
    Mp4Settings?: Mp4Settings;
  }
  export type ContainerType = "F4V"|"ISMV"|"M2TS"|"M3U8"|"CMFC"|"MOV"|"MP4"|"MPD"|"MXF"|"RAW"|string;
  export interface CreateJobRequest {
    /**
     * Accelerated transcoding can significantly speed up jobs with long, visually complex content. Outputs that use this feature incur pro-tier pricing. For information about feature limitations, see the AWS Elemental MediaConvert User Guide.
     */
    AccelerationSettings?: AccelerationSettings;
    /**
     * Optional. Choose a tag type that AWS Billing and Cost Management will use to sort your AWS Elemental MediaConvert costs on any billing report that you set up. Any transcoding outputs that don't have an associated tag will appear in your billing report unsorted. If you don't choose a valid value for this field, your job outputs will appear on the billing report unsorted.
     */
    BillingTagsSource?: BillingTagsSource;
    /**
     * Idempotency token for CreateJob operation.
     */
    ClientRequestToken?: __string;
    /**
     * When you create a job, you can either specify a job template or specify the transcoding settings individually
     */
    JobTemplate?: __string;
    /**
     * Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.
     */
    Priority?: __integerMinNegative50Max50;
    /**
     * Optional. When you create a job, you can specify a queue to send it to. If you don't specify, the job will go to the default queue. For more about queues, see the User Guide topic at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html.
     */
    Queue?: __string;
    /**
     * Required. The IAM role you use for creating this job. For details about permissions, see the User Guide topic at the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html.
     */
    Role: __string;
    /**
     * JobSettings contains all the transcode settings for a job.
     */
    Settings: JobSettings;
    /**
     * Enable this setting when you run a test job to estimate how many reserved transcoding slots (RTS) you need. When this is enabled, MediaConvert runs your job from an on-demand queue with similar performance to what you will see with one RTS in a reserved queue. This setting is disabled by default.
     */
    SimulateReservedQueue?: SimulateReservedQueue;
    /**
     * Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.
     */
    StatusUpdateInterval?: StatusUpdateInterval;
    /**
     * The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
     */
    Tags?: __mapOf__string;
    /**
     * User-defined metadata that you want to associate with an MediaConvert job. You specify metadata in key/value pairs.
     */
    UserMetadata?: __mapOf__string;
  }
  export interface CreateJobResponse {
    /**
     * Each job converts an input file into an output file or files. For more information, see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
     */
    Job?: Job;
  }
  export interface CreateJobTemplateRequest {
    /**
     * Accelerated transcoding can significantly speed up jobs with long, visually complex content. Outputs that use this feature incur pro-tier pricing. For information about feature limitations, see the AWS Elemental MediaConvert User Guide.
     */
    AccelerationSettings?: AccelerationSettings;
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
     * Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.
     */
    Priority?: __integerMinNegative50Max50;
    /**
     * Optional. The queue that jobs created from this template are assigned to. If you don't specify this, jobs will go to the default queue.
     */
    Queue?: __string;
    /**
     * JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.
     */
    Settings: JobTemplateSettings;
    /**
     * Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.
     */
    StatusUpdateInterval?: StatusUpdateInterval;
    /**
     * The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
     */
    Tags?: __mapOf__string;
  }
  export interface CreateJobTemplateResponse {
    /**
     * A job template is a pre-made set of encoding instructions that you can use to quickly create a job.
     */
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
    /**
     * Settings for preset
     */
    Settings: PresetSettings;
    /**
     * The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
     */
    Tags?: __mapOf__string;
  }
  export interface CreatePresetResponse {
    /**
     * A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process.
     */
    Preset?: Preset;
  }
  export interface CreateQueueRequest {
    /**
     * Optional. A description of the queue that you are creating.
     */
    Description?: __string;
    /**
     * The name of the queue that you are creating.
     */
    Name: __string;
    /**
     * Specifies whether the pricing plan for the queue is on-demand or reserved. For on-demand, you pay per minute, billed in increments of .01 minute. For reserved, you pay for the transcoding capacity of the entire queue, regardless of how much or how little you use it. Reserved pricing requires a 12-month commitment. When you use the API to create a queue, the default is on-demand.
     */
    PricingPlan?: PricingPlan;
    /**
     * Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.
     */
    ReservationPlanSettings?: ReservationPlanSettings;
    /**
     * Initial state of the queue. If you create a paused queue, then jobs in that queue won't begin.
     */
    Status?: QueueStatus;
    /**
     * The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
     */
    Tags?: __mapOf__string;
  }
  export interface CreateQueueResponse {
    /**
     * You can use queues to manage the resources that are available to your AWS account for running multiple transcoding jobs at the same time. If you don't specify a queue, the service sends all jobs through the default queue. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html.
     */
    Queue?: Queue;
  }
  export interface DashIsoEncryptionSettings {
    /**
     * This setting can improve the compatibility of your output with video players on obsolete devices. It applies only to DASH H.264 outputs with DRM encryption. Choose Unencrypted SEI (UNENCRYPTED_SEI) only to correct problems with playback on older devices. Otherwise, keep the default setting CENC v1 (CENC_V1). If you choose Unencrypted SEI, for that output, the service will exclude the access unit delimiter and will leave the SEI NAL units unencrypted.
     */
    PlaybackDeviceCompatibility?: DashIsoPlaybackDeviceCompatibility;
    /**
     * If your output group type is HLS, DASH, or Microsoft Smooth, use these settings when doing DRM encryption with a SPEKE-compliant key provider.  If your output group type is CMAF, use the SpekeKeyProviderCmaf settings instead.
     */
    SpekeKeyProvider?: SpekeKeyProvider;
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
     * Settings associated with the destination. Will vary based on the type of destination
     */
    DestinationSettings?: DestinationSettings;
    /**
     * DRM settings.
     */
    Encryption?: DashIsoEncryptionSettings;
    /**
     * Length of fragments to generate (in seconds). Fragment length must be compatible with GOP size and Framerate. Note that fragments will end on the next keyframe after this number of seconds, so actual fragment length may be longer. When Emit Single File is checked, the fragmentation is internal to a single output file and it does not cause the creation of many output files as in other output types.
     */
    FragmentLength?: __integerMin1Max2147483647;
    /**
     * Supports HbbTV specification as indicated
     */
    HbbtvCompliance?: DashIsoHbbtvCompliance;
    /**
     * Minimum time of initially buffered media that is needed to ensure smooth playout.
     */
    MinBufferTime?: __integerMin0Max2147483647;
    /**
     * Specify whether your DASH profile is on-demand or main. When you choose Main profile (MAIN_PROFILE), the service signals  urn:mpeg:dash:profile:isoff-main:2011 in your .mpd DASH manifest. When you choose On-demand (ON_DEMAND_PROFILE), the service signals urn:mpeg:dash:profile:isoff-on-demand:2011 in your .mpd. When you choose On-demand, you must also set the output group setting Segment control (SegmentControl) to Single file (SINGLE_FILE).
     */
    MpdProfile?: DashIsoMpdProfile;
    /**
     * When set to SINGLE_FILE, a single output file is generated, which is internally segmented using the Fragment Length and Segment Length. When set to SEGMENTED_FILES, separate segment files will be created.
     */
    SegmentControl?: DashIsoSegmentControl;
    /**
     * Length of mpd segments to create (in seconds). Note that segments will end on the next keyframe after this number of seconds, so actual segment length may be longer. When Emit Single File is checked, the segmentation is internal to a single output file and it does not cause the creation of many output files as in other output types.
     */
    SegmentLength?: __integerMin1Max2147483647;
    /**
     * If you get an HTTP error in the 400 range when you play back your DASH output, enable this setting and run your transcoding job again. When you enable this setting, the service writes precise segment durations in the DASH manifest. The segment duration information appears inside the SegmentTimeline element, inside SegmentTemplate at the Representation level. When you don't enable this setting, the service writes approximate segment durations in your DASH manifest.
     */
    WriteSegmentTimelineInRepresentation?: DashIsoWriteSegmentTimelineInRepresentation;
  }
  export type DashIsoHbbtvCompliance = "HBBTV_1_5"|"NONE"|string;
  export type DashIsoMpdProfile = "MAIN_PROFILE"|"ON_DEMAND_PROFILE"|string;
  export type DashIsoPlaybackDeviceCompatibility = "CENC_V1"|"UNENCRYPTED_SEI"|string;
  export type DashIsoSegmentControl = "SINGLE_FILE"|"SEGMENTED_FILES"|string;
  export type DashIsoWriteSegmentTimelineInRepresentation = "ENABLED"|"DISABLED"|string;
  export type DecryptionMode = "AES_CTR"|"AES_CBC"|"AES_GCM"|string;
  export type DeinterlaceAlgorithm = "INTERPOLATE"|"INTERPOLATE_TICKER"|"BLEND"|"BLEND_TICKER"|string;
  export interface Deinterlacer {
    /**
     * Only applies when you set Deinterlacer (DeinterlaceMode) to Deinterlace (DEINTERLACE) or Adaptive (ADAPTIVE). Motion adaptive interpolate (INTERPOLATE) produces sharper pictures, while blend (BLEND) produces smoother motion. Use (INTERPOLATE_TICKER) OR (BLEND_TICKER) if your source file includes a ticker, such as a scrolling headline at the bottom of the frame.
     */
    Algorithm?: DeinterlaceAlgorithm;
    /**
     * - When set to NORMAL (default), the deinterlacer does not convert frames that are tagged  in metadata as progressive. It will only convert those that are tagged as some other type. - When set to FORCE_ALL_FRAMES, the deinterlacer converts every frame to progressive - even those that are already tagged as progressive. Turn Force mode on only if there is  a good chance that the metadata has tagged frames as progressive when they are not  progressive. Do not turn on otherwise; processing frames that are already progressive  into progressive will probably result in lower quality video.
     */
    Control?: DeinterlacerControl;
    /**
     * Use Deinterlacer (DeinterlaceMode) to choose how the service will do deinterlacing. Default is Deinterlace. - Deinterlace converts interlaced to progressive. - Inverse telecine converts Hard Telecine 29.97i to progressive 23.976p. - Adaptive auto-detects and converts to progressive.
     */
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
     * The name of the queue that you want to delete.
     */
    Name: __string;
  }
  export interface DeleteQueueResponse {
  }
  export type DescribeEndpointsMode = "DEFAULT"|"GET_ONLY"|string;
  export interface DescribeEndpointsRequest {
    /**
     * Optional. Max number of endpoints, up to twenty, that will be returned at one time.
     */
    MaxResults?: __integer;
    /**
     * Optional field, defaults to DEFAULT. Specify DEFAULT for this operation to return your endpoints if any exist, or to create an endpoint for you and return it if one doesn't already exist. Specify GET_ONLY to return your endpoints if any exist, or an empty list if none exist.
     */
    Mode?: DescribeEndpointsMode;
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
  export interface DestinationSettings {
    /**
     * Settings associated with S3 destination
     */
    S3Settings?: S3DestinationSettings;
  }
  export interface DisassociateCertificateRequest {
    /**
     * The ARN of the ACM certificate that you want to disassociate from your MediaConvert resource.
     */
    Arn: __string;
  }
  export interface DisassociateCertificateResponse {
  }
  export type DropFrameTimecode = "DISABLED"|"ENABLED"|string;
  export interface DvbNitSettings {
    /**
     * The numeric value placed in the Network Information Table (NIT).
     */
    NetworkId?: __integerMin0Max65535;
    /**
     * The network name text placed in the network_name_descriptor inside the Network Information Table. Maximum length is 256 characters.
     */
    NetworkName?: __stringMin1Max256;
    /**
     * The number of milliseconds between instances of this table in the output transport stream.
     */
    NitInterval?: __integerMin25Max10000;
  }
  export interface DvbSdtSettings {
    /**
     * Selects method of inserting SDT information into output stream.  "Follow input SDT" copies SDT information from input stream to  output stream. "Follow input SDT if present" copies SDT information from  input stream to output stream if SDT information is present in the input, otherwise it will fall back on the user-defined values. Enter "SDT  Manually" means user will enter the SDT information. "No SDT" means output  stream will not contain SDT information.
     */
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
    /**
     * If no explicit x_position or y_position is provided, setting alignment to centered will place the captions at the bottom center of the output. Similarly, setting a left alignment will align captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
     */
    Alignment?: DvbSubtitleAlignment;
    /**
     * Specifies the color of the rectangle behind the captions.
All burn-in and DVB-Sub font settings must match.
     */
    BackgroundColor?: DvbSubtitleBackgroundColor;
    /**
     * Specifies the opacity of the background rectangle. 255 is opaque; 0 is transparent. Leaving this parameter blank is equivalent to setting it to 0 (transparent). All burn-in and DVB-Sub font settings must match.
     */
    BackgroundOpacity?: __integerMin0Max255;
    /**
     * Specifies the color of the burned-in captions. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
     */
    FontColor?: DvbSubtitleFontColor;
    /**
     * Specifies the opacity of the burned-in captions. 255 is opaque; 0 is transparent.
All burn-in and DVB-Sub font settings must match.
     */
    FontOpacity?: __integerMin0Max255;
    /**
     * Font resolution in DPI (dots per inch); default is 96 dpi.
All burn-in and DVB-Sub font settings must match.
     */
    FontResolution?: __integerMin96Max600;
    /**
     * Provide the font script, using an ISO 15924 script code, if the LanguageCode is not sufficient for determining the script type. Where LanguageCode or CustomLanguageCode is sufficient, use "AUTOMATIC" or leave unset. This is used to help determine the appropriate font for rendering DVB-Sub captions.
     */
    FontScript?: FontScript;
    /**
     * A positive integer indicates the exact font size in points. Set to 0 for automatic font size selection. All burn-in and DVB-Sub font settings must match.
     */
    FontSize?: __integerMin0Max96;
    /**
     * Specifies font outline color. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
     */
    OutlineColor?: DvbSubtitleOutlineColor;
    /**
     * Specifies font outline size in pixels. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
     */
    OutlineSize?: __integerMin0Max10;
    /**
     * Specifies the color of the shadow cast by the captions.
All burn-in and DVB-Sub font settings must match.
     */
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
    /**
     * Only applies to jobs with input captions in Teletext or STL formats. Specify whether the spacing between letters in your captions is set by the captions grid or varies depending on letter width. Choose fixed grid to conform to the spacing specified in the captions file more accurately. Choose proportional to make the text easier to read if the captions are closed caption.
     */
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
    TdtInterval?: __integerMin1000Max30000;
  }
  export type Eac3AtmosBitstreamMode = "COMPLETE_MAIN"|string;
  export type Eac3AtmosCodingMode = "CODING_MODE_9_1_6"|string;
  export type Eac3AtmosDialogueIntelligence = "ENABLED"|"DISABLED"|string;
  export type Eac3AtmosDynamicRangeCompressionLine = "NONE"|"FILM_STANDARD"|"FILM_LIGHT"|"MUSIC_STANDARD"|"MUSIC_LIGHT"|"SPEECH"|string;
  export type Eac3AtmosDynamicRangeCompressionRf = "NONE"|"FILM_STANDARD"|"FILM_LIGHT"|"MUSIC_STANDARD"|"MUSIC_LIGHT"|"SPEECH"|string;
  export type Eac3AtmosMeteringMode = "LEQ_A"|"ITU_BS_1770_1"|"ITU_BS_1770_2"|"ITU_BS_1770_3"|"ITU_BS_1770_4"|string;
  export interface Eac3AtmosSettings {
    /**
     * Specify the average bitrate in bits per second.
Valid values: 384k, 448k, 640k, 768k
     */
    Bitrate?: __integerMin384000Max768000;
    /**
     * Specify the bitstream mode for the E-AC-3 stream that the encoder emits. For more information about the EAC3 bitstream mode, see ATSC A/52-2012 (Annex E).
     */
    BitstreamMode?: Eac3AtmosBitstreamMode;
    /**
     * The coding mode for Dolby Digital Plus JOC (Atmos) is always 9.1.6 (CODING_MODE_9_1_6).
     */
    CodingMode?: Eac3AtmosCodingMode;
    /**
     * Enable Dolby Dialogue Intelligence to adjust loudness based on dialogue analysis.
     */
    DialogueIntelligence?: Eac3AtmosDialogueIntelligence;
    /**
     * Specify the absolute peak level for a signal with dynamic range compression.
     */
    DynamicRangeCompressionLine?: Eac3AtmosDynamicRangeCompressionLine;
    /**
     * Specify how the service limits the audio dynamic range when compressing the audio.
     */
    DynamicRangeCompressionRf?: Eac3AtmosDynamicRangeCompressionRf;
    /**
     * Specify a value for the following Dolby Atmos setting: Left only/Right only center mix
(Lo/Ro center). MediaConvert uses this value for downmixing. How the service uses this
value depends on the value that you choose for Stereo downmix (Eac3AtmosStereoDownmix).
Valid values: 3.0, 1.5, 0.0, -1.5, -3.0, -4.5, and -6.0.
     */
    LoRoCenterMixLevel?: __doubleMinNegative6Max3;
    /**
     * Specify a value for the following Dolby Atmos setting: Left only/Right only (Lo/Ro surround). MediaConvert uses this value for downmixing. How the service uses this value depends on the value that you choose for Stereo downmix (Eac3AtmosStereoDownmix). Valid values: -1.5, -3.0, -4.5, -6.0, and -60. The value -60 mutes the channel.
     */
    LoRoSurroundMixLevel?: __doubleMinNegative60MaxNegative1;
    /**
     * Specify a value for the following Dolby Atmos setting: Left total/Right total center mix (Lt/Rt center). MediaConvert uses this value for downmixing. How the service uses this value depends on the value that you choose for Stereo downmix (Eac3AtmosStereoDownmix). Valid values: 3.0, 1.5, 0.0, -1.5, -3.0, -4.5, and -6.0.
     */
    LtRtCenterMixLevel?: __doubleMinNegative6Max3;
    /**
     * Specify a value for the following Dolby Atmos setting: Left total/Right total surround mix (Lt/Rt surround). MediaConvert uses this value for downmixing. How the service uses this value depends on the value that you choose for Stereo downmix (Eac3AtmosStereoDownmix). Valid values: -1.5, -3.0, -4.5, -6.0, and -60. The value -60 mutes the channel.
     */
    LtRtSurroundMixLevel?: __doubleMinNegative60MaxNegative1;
    /**
     * Choose how the service meters the loudness of your audio.
     */
    MeteringMode?: Eac3AtmosMeteringMode;
    /**
     * This value is always 48000. It represents the sample rate in Hz.
     */
    SampleRate?: __integerMin48000Max48000;
    /**
     * Specify the percentage of audio content that must be speech before the encoder uses the measured speech loudness as the overall program loudness.
     */
    SpeechThreshold?: __integerMin1Max100;
    /**
     * Choose how the service does stereo downmixing.
     */
    StereoDownmix?: Eac3AtmosStereoDownmix;
    /**
     * Specify whether your input audio has an additional center rear surround channel matrix encoded into your left and right surround channels.
     */
    SurroundExMode?: Eac3AtmosSurroundExMode;
  }
  export type Eac3AtmosStereoDownmix = "NOT_INDICATED"|"STEREO"|"SURROUND"|"DPL2"|string;
  export type Eac3AtmosSurroundExMode = "NOT_INDICATED"|"ENABLED"|"DISABLED"|string;
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
    /**
     * If set to ATTENUATE_3_DB, applies a 3 dB attenuation to the surround channels. Only used for 3/2 coding mode.
     */
    AttenuationControl?: Eac3AttenuationControl;
    /**
     * Specify the average bitrate in bits per second. Valid bitrates depend on the coding mode.
     */
    Bitrate?: __integerMin64000Max640000;
    /**
     * Specify the bitstream mode for the E-AC-3 stream that the encoder emits. For more information about the EAC3 bitstream mode, see ATSC A/52-2012 (Annex E).
     */
    BitstreamMode?: Eac3BitstreamMode;
    /**
     * Dolby Digital Plus coding mode. Determines number of channels.
     */
    CodingMode?: Eac3CodingMode;
    /**
     * Activates a DC highpass filter for all input channels.
     */
    DcFilter?: Eac3DcFilter;
    /**
     * Sets the dialnorm for the output. If blank and input audio is Dolby Digital Plus, dialnorm will be passed through.
     */
    Dialnorm?: __integerMin1Max31;
    /**
     * Specify the absolute peak level for a signal with dynamic range compression.
     */
    DynamicRangeCompressionLine?: Eac3DynamicRangeCompressionLine;
    /**
     * Specify how the service limits the audio dynamic range when compressing the audio.
     */
    DynamicRangeCompressionRf?: Eac3DynamicRangeCompressionRf;
    /**
     * When encoding 3/2 audio, controls whether the LFE channel is enabled
     */
    LfeControl?: Eac3LfeControl;
    /**
     * Applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid with 3_2_LFE coding mode.
     */
    LfeFilter?: Eac3LfeFilter;
    /**
     * Specify a value for the following Dolby Digital Plus setting: Left only/Right only center mix (Lo/Ro center). MediaConvert uses this value for downmixing. How the service uses this value depends on the value that you choose for Stereo downmix (Eac3StereoDownmix). Valid values: 3.0, 1.5, 0.0, -1.5, -3.0, -4.5, -6.0, and -60. The value -60 mutes the channel. This setting applies only if you keep the default value of 3/2 - L, R, C, Ls, Rs (CODING_MODE_3_2) for the setting Coding mode (Eac3CodingMode). If you choose a different value for Coding mode, the service ignores Left only/Right only center (loRoCenterMixLevel).
     */
    LoRoCenterMixLevel?: __doubleMinNegative60Max3;
    /**
     * Specify a value for the following Dolby Digital Plus setting: Left only/Right only (Lo/Ro surround). MediaConvert uses this value for downmixing. How the service uses this value depends on the value that you choose for Stereo downmix (Eac3StereoDownmix). Valid values: -1.5, -3.0, -4.5, -6.0, and -60. The value -60 mutes the channel. This setting applies only if you keep the default value of 3/2 - L, R, C, Ls, Rs (CODING_MODE_3_2) for the setting Coding mode (Eac3CodingMode). If you choose a different value for Coding mode, the service ignores Left only/Right only surround (loRoSurroundMixLevel).
     */
    LoRoSurroundMixLevel?: __doubleMinNegative60MaxNegative1;
    /**
     * Specify a value for the following Dolby Digital Plus setting: Left total/Right total center mix (Lt/Rt center). MediaConvert uses this value for downmixing. How the service uses this value depends on the value that you choose for Stereo downmix (Eac3StereoDownmix). Valid values: 3.0, 1.5, 0.0, -1.5, -3.0, -4.5, -6.0, and -60. The value -60 mutes the channel. This setting applies only if you keep the default value of 3/2 - L, R, C, Ls, Rs (CODING_MODE_3_2) for the setting Coding mode (Eac3CodingMode). If you choose a different value for Coding mode, the service ignores Left total/Right total center (ltRtCenterMixLevel).
     */
    LtRtCenterMixLevel?: __doubleMinNegative60Max3;
    /**
     * Specify a value for the following Dolby Digital Plus setting: Left total/Right total surround mix (Lt/Rt surround). MediaConvert uses this value for downmixing. How the service uses this value depends on the value that you choose for Stereo downmix (Eac3StereoDownmix). Valid values: -1.5, -3.0, -4.5, -6.0, and -60. The value -60 mutes the channel. This setting applies only if you keep the default value of 3/2 - L, R, C, Ls, Rs (CODING_MODE_3_2) for the setting Coding mode (Eac3CodingMode). If you choose a different value for Coding mode, the service ignores Left total/Right total surround (ltRtSurroundMixLevel).
     */
    LtRtSurroundMixLevel?: __doubleMinNegative60MaxNegative1;
    /**
     * When set to FOLLOW_INPUT, encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used.
     */
    MetadataControl?: Eac3MetadataControl;
    /**
     * When set to WHEN_POSSIBLE, input DD+ audio will be passed through if it is present on the input. this detection is dynamic over the life of the transcode. Inputs that alternate between DD+ and non-DD+ content will have a consistent DD+ output as the system alternates between passthrough and encoding.
     */
    PassthroughControl?: Eac3PassthroughControl;
    /**
     * Controls the amount of phase-shift applied to the surround channels. Only used for 3/2 coding mode.
     */
    PhaseControl?: Eac3PhaseControl;
    /**
     * This value is always 48000. It represents the sample rate in Hz.
     */
    SampleRate?: __integerMin48000Max48000;
    /**
     * Choose how the service does stereo downmixing. This setting only applies if you keep the default value of 3/2 - L, R, C, Ls, Rs (CODING_MODE_3_2) for the setting Coding mode (Eac3CodingMode). If you choose a different value for Coding mode, the service ignores Stereo downmix (Eac3StereoDownmix).
     */
    StereoDownmix?: Eac3StereoDownmix;
    /**
     * When encoding 3/2 audio, sets whether an extra center back surround channel is matrix encoded into the left and right surround channels.
     */
    SurroundExMode?: Eac3SurroundExMode;
    /**
     * When encoding 2/0 audio, sets whether Dolby Surround is matrix encoded into the two channels.
     */
    SurroundMode?: Eac3SurroundMode;
  }
  export type Eac3StereoDownmix = "NOT_INDICATED"|"LO_RO"|"LT_RT"|"DPL2"|string;
  export type Eac3SurroundExMode = "NOT_INDICATED"|"ENABLED"|"DISABLED"|string;
  export type Eac3SurroundMode = "NOT_INDICATED"|"ENABLED"|"DISABLED"|string;
  export type EmbeddedConvert608To708 = "UPCONVERT"|"DISABLED"|string;
  export interface EmbeddedDestinationSettings {
    /**
     * Ignore this setting unless your input captions are SCC format and your output captions are embedded in the video stream. Specify a CC number for each captions channel in this output. If you have two channels, choose CC numbers that aren't in the same field. For example, choose 1 and 3. For more information, see https://docs.aws.amazon.com/console/mediaconvert/dual-scc-to-embedded.
     */
    Destination608ChannelNumber?: __integerMin1Max4;
    /**
     * Ignore this setting unless your input captions are SCC format and you want both 608 and 708 captions embedded in your output stream. Optionally, specify the 708 service number for each output captions channel. Choose a different number for each channel. To use this setting, also set Force 608 to 708 upconvert (Convert608To708) to Upconvert (UPCONVERT) in your input captions selector settings. If you choose to upconvert but don't specify a 708 service number, MediaConvert uses the number that you specify for CC channel number (destination608ChannelNumber) for the 708 service number. For more information, see https://docs.aws.amazon.com/console/mediaconvert/dual-scc-to-embedded.
     */
    Destination708ServiceNumber?: __integerMin1Max6;
  }
  export interface EmbeddedSourceSettings {
    /**
     * Specify whether this set of input captions appears in your outputs in both 608 and 708 format. If you choose Upconvert (UPCONVERT), MediaConvert includes the captions data in two ways: it passes the 608 data through using the 608 compatibility bytes fields of the 708 wrapper, and it also translates the 608 data into 708.
     */
    Convert608To708?: EmbeddedConvert608To708;
    /**
     * Specifies the 608/708 channel number within the video track from which to extract captions. Unused for passthrough.
     */
    Source608ChannelNumber?: __integerMin1Max4;
    /**
     * Specifies the video track index used for extracting captions. The system only supports one input video track, so this should always be set to '1'.
     */
    Source608TrackNumber?: __integerMin1Max1;
    /**
     * By default, the service terminates any unterminated captions at the end of each input. If you want the caption to continue onto your next input, disable this setting.
     */
    TerminateCaptions?: EmbeddedTerminateCaptions;
  }
  export type EmbeddedTerminateCaptions = "END_OF_INPUT"|"DISABLED"|string;
  export interface Endpoint {
    /**
     * URL of endpoint
     */
    Url?: __string;
  }
  export interface EsamManifestConfirmConditionNotification {
    /**
     * Provide your ESAM ManifestConfirmConditionNotification XML document inside your JSON job settings. Form the XML document as per OC-SP-ESAM-API-I03-131025. The transcoder will use the Manifest Conditioning instructions in the message that you supply.
     */
    MccXml?: __stringPatternSNManifestConfirmConditionNotificationNS;
  }
  export interface EsamSettings {
    /**
     * Specifies an ESAM ManifestConfirmConditionNotification XML as per OC-SP-ESAM-API-I03-131025. The transcoder uses the manifest conditioning instructions that you provide in the setting MCC XML (mccXml).
     */
    ManifestConfirmConditionNotification?: EsamManifestConfirmConditionNotification;
    /**
     * Specifies the stream distance, in milliseconds, between the SCTE 35 messages that the transcoder places and the splice points that they refer to. If the time between the start of the asset and the SCTE-35 message is less than this value, then the transcoder places the SCTE-35 marker at the beginning of the stream.
     */
    ResponseSignalPreroll?: __integerMin0Max30000;
    /**
     * Specifies an ESAM SignalProcessingNotification XML as per OC-SP-ESAM-API-I03-131025. The transcoder uses the signal processing instructions that you provide in the setting SCC XML (sccXml).
     */
    SignalProcessingNotification?: EsamSignalProcessingNotification;
  }
  export interface EsamSignalProcessingNotification {
    /**
     * Provide your ESAM SignalProcessingNotification XML document inside your JSON job settings. Form the XML document as per OC-SP-ESAM-API-I03-131025. The transcoder will use the signal processing instructions in the message that you supply. Provide your ESAM SignalProcessingNotification XML document inside your JSON job settings. For your MPEG2-TS file outputs, if you want the service to place SCTE-35 markers at the insertion points you specify in the XML document, you must also enable SCTE-35 ESAM (scte35Esam). Note that you can either specify an ESAM XML document or enable SCTE-35 passthrough. You can't do both.
     */
    SccXml?: __stringPatternSNSignalProcessingNotificationNS;
  }
  export type F4vMoovPlacement = "PROGRESSIVE_DOWNLOAD"|"NORMAL"|string;
  export interface F4vSettings {
    /**
     * If set to PROGRESSIVE_DOWNLOAD, the MOOV atom is relocated to the beginning of the archive as required for progressive downloading. Otherwise it is placed normally at the end.
     */
    MoovPlacement?: F4vMoovPlacement;
  }
  export interface FileGroupSettings {
    /**
     * Use Destination (Destination) to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file.
     */
    Destination?: __stringPatternS3;
    /**
     * Settings associated with the destination. Will vary based on the type of destination
     */
    DestinationSettings?: DestinationSettings;
  }
  export type FileSourceConvert608To708 = "UPCONVERT"|"DISABLED"|string;
  export interface FileSourceSettings {
    /**
     * Specify whether this set of input captions appears in your outputs in both 608 and 708 format. If you choose Upconvert (UPCONVERT), MediaConvert includes the captions data in two ways: it passes the 608 data through using the 608 compatibility bytes fields of the 708 wrapper, and it also translates the 608 data into 708.
     */
    Convert608To708?: FileSourceConvert608To708;
    /**
     * External caption file used for loading captions. Accepted file extensions are 'scc', 'ttml', 'dfxp', 'stl', 'srt', 'xml', and 'smi'.
     */
    SourceFile?: __stringMin14PatternHttpHttpsS3SccSCCTtmlTTMLDfxpDFXPStlSTLSrtSRTXmlXMLSmiSMI;
    /**
     * Specifies a time delta in seconds to offset the captions from the source file.
     */
    TimeDelta?: __integerMinNegative2147483648Max2147483647;
  }
  export type FontScript = "AUTOMATIC"|"HANS"|"HANT"|string;
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
    /**
     * Each job converts an input file into an output file or files. For more information, see the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
     */
    Job?: Job;
  }
  export interface GetJobTemplateRequest {
    /**
     * The name of the job template.
     */
    Name: __string;
  }
  export interface GetJobTemplateResponse {
    /**
     * A job template is a pre-made set of encoding instructions that you can use to quickly create a job.
     */
    JobTemplate?: JobTemplate;
  }
  export interface GetPresetRequest {
    /**
     * The name of the preset.
     */
    Name: __string;
  }
  export interface GetPresetResponse {
    /**
     * A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process.
     */
    Preset?: Preset;
  }
  export interface GetQueueRequest {
    /**
     * The name of the queue that you want information about.
     */
    Name: __string;
  }
  export interface GetQueueResponse {
    /**
     * You can use queues to manage the resources that are available to your AWS account for running multiple transcoding jobs at the same time. If you don't specify a queue, the service sends all jobs through the default queue. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html.
     */
    Queue?: Queue;
  }
  export type H264AdaptiveQuantization = "OFF"|"LOW"|"MEDIUM"|"HIGH"|"HIGHER"|"MAX"|string;
  export type H264CodecLevel = "AUTO"|"LEVEL_1"|"LEVEL_1_1"|"LEVEL_1_2"|"LEVEL_1_3"|"LEVEL_2"|"LEVEL_2_1"|"LEVEL_2_2"|"LEVEL_3"|"LEVEL_3_1"|"LEVEL_3_2"|"LEVEL_4"|"LEVEL_4_1"|"LEVEL_4_2"|"LEVEL_5"|"LEVEL_5_1"|"LEVEL_5_2"|string;
  export type H264CodecProfile = "BASELINE"|"HIGH"|"HIGH_10BIT"|"HIGH_422"|"HIGH_422_10BIT"|"MAIN"|string;
  export type H264DynamicSubGop = "ADAPTIVE"|"STATIC"|string;
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
  export interface H264QvbrSettings {
    /**
     * Use this setting only when Rate control mode is QVBR and Quality tuning level is Multi-pass HQ. For Max average bitrate values suited to the complexity of your input video, the service limits the average bitrate of the video part of this output to the value that you choose. That is, the total size of the video element is less than or equal to the value you set multiplied by the number of seconds of encoded output.
     */
    MaxAverageBitrate?: __integerMin1000Max1152000000;
    /**
     * Required when you use QVBR rate control mode. That is, when you specify qvbrSettings within h264Settings. Specify the target quality level for this output, from 1 to 10. Use higher numbers for greater quality. Level 10 results in nearly lossless compression. The quality level for most broadcast-quality transcodes is between 6 and 9.
     */
    QvbrQualityLevel?: __integerMin1Max10;
  }
  export type H264RateControlMode = "VBR"|"CBR"|"QVBR"|string;
  export type H264RepeatPps = "DISABLED"|"ENABLED"|string;
  export type H264SceneChangeDetect = "DISABLED"|"ENABLED"|"TRANSITION_DETECTION"|string;
  export interface H264Settings {
    /**
     * Adaptive quantization. Allows intra-frame quantizers to vary to improve visual quality.
     */
    AdaptiveQuantization?: H264AdaptiveQuantization;
    /**
     * Specify the average bitrate in bits per second. Required for VBR and CBR. For MS Smooth outputs, bitrates must be unique when rounded down to the nearest multiple of 1000.
     */
    Bitrate?: __integerMin1000Max1152000000;
    /**
     * Specify an H.264 level that is consistent with your output video settings. If you aren't sure what level to specify, choose Auto (AUTO).
     */
    CodecLevel?: H264CodecLevel;
    /**
     * H.264 Profile. High 4:2:2 and 10-bit profiles are only available with the AVC-I License.
     */
    CodecProfile?: H264CodecProfile;
    /**
     * Choose Adaptive to improve subjective video quality for high-motion content. This will cause the service to use fewer B-frames (which infer information based on other frames) for high-motion portions of the video and more B-frames for low-motion portions. The maximum number of B-frames is limited by the value you provide for the setting B frames between reference frames (numberBFramesBetweenReferenceFrames).
     */
    DynamicSubGop?: H264DynamicSubGop;
    /**
     * Entropy encoding mode. Use CABAC (must be in Main or High profile) or CAVLC.
     */
    EntropyEncoding?: H264EntropyEncoding;
    /**
     * Choosing FORCE_FIELD disables PAFF encoding for interlaced outputs.
     */
    FieldEncoding?: H264FieldEncoding;
    /**
     * Adjust quantization within each frame to reduce flicker or 'pop' on I-frames.
     */
    FlickerAdaptiveQuantization?: H264FlickerAdaptiveQuantization;
    /**
     * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job specification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.
     */
    FramerateControl?: H264FramerateControl;
    /**
     * When set to INTERPOLATE, produces smoother motion during frame rate conversion.
     */
    FramerateConversionAlgorithm?: H264FramerateConversionAlgorithm;
    /**
     * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example,  24000 / 1001 = 23.976 fps. Use FramerateDenominator to specify the denominator of this fraction. In this example, use 1001 for the value of FramerateDenominator. When you use the console for transcode jobs that use frame rate conversion, provide the value as a decimal number for Framerate. In this example, specify 23.976.
     */
    FramerateDenominator?: __integerMin1Max2147483647;
    /**
     * Frame rate numerator - frame rate is a fraction, e.g. 24000 / 1001 = 23.976 fps.
     */
    FramerateNumerator?: __integerMin1Max2147483647;
    /**
     * If enable, use reference B frames for GOP structures that have B frames > 1.
     */
    GopBReference?: H264GopBReference;
    /**
     * Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting.
     */
    GopClosedCadence?: __integerMin0Max2147483647;
    /**
     * GOP Length (keyframe interval) in frames or seconds. Must be greater than zero.
     */
    GopSize?: __doubleMin0;
    /**
     * Indicates if the GOP Size in H264 is specified in frames or seconds. If seconds the system will convert the GOP Size into a frame count at run time.
     */
    GopSizeUnits?: H264GopSizeUnits;
    /**
     * Percentage of the buffer that should initially be filled (HRD buffer model).
     */
    HrdBufferInitialFillPercentage?: __integerMin0Max100;
    /**
     * Size of buffer (HRD buffer model) in bits. For example, enter five megabits as 5000000.
     */
    HrdBufferSize?: __integerMin0Max1152000000;
    /**
     * Use Interlace mode (InterlaceMode) to choose the scan line type for the output. * Top Field First (TOP_FIELD) and Bottom Field First (BOTTOM_FIELD) produce interlaced output with the entire output having the same field polarity (top or bottom first). * Follow, Default Top (FOLLOW_TOP_FIELD) and Follow, Default Bottom (FOLLOW_BOTTOM_FIELD) use the same field polarity as the source. Therefore, behavior depends on the input scan type, as follows.
  - If the source is interlaced, the output will be interlaced with the same polarity as the source (it will follow the source). The output could therefore be a mix of "top field first" and "bottom field first".
  - If the source is progressive, the output will be interlaced with "top field first" or "bottom field first" polarity, depending on which of the Follow options you chose.
     */
    InterlaceMode?: H264InterlaceMode;
    /**
     * Maximum bitrate in bits/second. For example, enter five megabits per second as 5000000. Required when Rate control mode is QVBR.
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
    /**
     * Using the API, enable ParFollowSource if you want the service to use the pixel aspect ratio from the input. Using the console, do this by choosing Follow source for Pixel aspect ratio.
     */
    ParControl?: H264ParControl;
    /**
     * Pixel Aspect Ratio denominator.
     */
    ParDenominator?: __integerMin1Max2147483647;
    /**
     * Pixel Aspect Ratio numerator.
     */
    ParNumerator?: __integerMin1Max2147483647;
    /**
     * Use Quality tuning level (H264QualityTuningLevel) to specifiy whether to use fast single-pass, high-quality singlepass, or high-quality multipass video encoding.
     */
    QualityTuningLevel?: H264QualityTuningLevel;
    /**
     * Settings for quality-defined variable bitrate encoding with the H.264 codec. Required when you set Rate control mode to QVBR. Not valid when you set Rate control mode to a value other than QVBR, or when you don't define Rate control mode.
     */
    QvbrSettings?: H264QvbrSettings;
    /**
     * Use this setting to specify whether this output has a variable bitrate (VBR), constant bitrate (CBR) or quality-defined variable bitrate (QVBR).
     */
    RateControlMode?: H264RateControlMode;
    /**
     * Places a PPS header on each encoded picture, even if repeated.
     */
    RepeatPps?: H264RepeatPps;
    /**
     * Enable this setting to insert I-frames at scene changes that the service automatically detects. This improves video quality and is enabled by default. If this output uses QVBR, choose Transition detection (TRANSITION_DETECTION) for further video quality improvement. For more information about QVBR, see https://docs.aws.amazon.com/console/mediaconvert/cbr-vbr-qvbr.
     */
    SceneChangeDetect?: H264SceneChangeDetect;
    /**
     * Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.
     */
    Slices?: __integerMin1Max32;
    /**
     * Enables Slow PAL rate conversion. 23.976fps and 24fps input is relabeled as 25fps, and audio is sped up correspondingly.
     */
    SlowPal?: H264SlowPal;
    /**
     * Softness. Selects quantizer matrix, larger values reduce high-frequency content in the encoded image.
     */
    Softness?: __integerMin0Max128;
    /**
     * Adjust quantization within each frame based on spatial variation of content complexity.
     */
    SpatialAdaptiveQuantization?: H264SpatialAdaptiveQuantization;
    /**
     * Produces a bitstream compliant with SMPTE RP-2027.
     */
    Syntax?: H264Syntax;
    /**
     * This field applies only if the Streams > Advanced > Framerate (framerate) field  is set to 29.970. This field works with the Streams > Advanced > Preprocessors > Deinterlacer  field (deinterlace_mode) and the Streams > Advanced > Interlaced Mode field (interlace_mode)  to identify the scan type for the output: Progressive, Interlaced, Hard Telecine or Soft Telecine. - Hard: produces 29.97i output from 23.976 input. - Soft: produces 23.976; the player converts this output to 29.97i.
     */
    Telecine?: H264Telecine;
    /**
     * Adjust quantization within each frame based on temporal variation of content complexity.
     */
    TemporalAdaptiveQuantization?: H264TemporalAdaptiveQuantization;
    /**
     * Inserts timecode for each frame as 4 bytes of an unregistered SEI message.
     */
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
  export type H265DynamicSubGop = "ADAPTIVE"|"STATIC"|string;
  export type H265FlickerAdaptiveQuantization = "DISABLED"|"ENABLED"|string;
  export type H265FramerateControl = "INITIALIZE_FROM_SOURCE"|"SPECIFIED"|string;
  export type H265FramerateConversionAlgorithm = "DUPLICATE_DROP"|"INTERPOLATE"|string;
  export type H265GopBReference = "DISABLED"|"ENABLED"|string;
  export type H265GopSizeUnits = "FRAMES"|"SECONDS"|string;
  export type H265InterlaceMode = "PROGRESSIVE"|"TOP_FIELD"|"BOTTOM_FIELD"|"FOLLOW_TOP_FIELD"|"FOLLOW_BOTTOM_FIELD"|string;
  export type H265ParControl = "INITIALIZE_FROM_SOURCE"|"SPECIFIED"|string;
  export type H265QualityTuningLevel = "SINGLE_PASS"|"SINGLE_PASS_HQ"|"MULTI_PASS_HQ"|string;
  export interface H265QvbrSettings {
    /**
     * Use this setting only when Rate control mode is QVBR and Quality tuning level is Multi-pass HQ. For Max average bitrate values suited to the complexity of your input video, the service limits the average bitrate of the video part of this output to the value that you choose. That is, the total size of the video element is less than or equal to the value you set multiplied by the number of seconds of encoded output.
     */
    MaxAverageBitrate?: __integerMin1000Max1466400000;
    /**
     * Required when you use QVBR rate control mode. That is, when you specify qvbrSettings within h265Settings. Specify the target quality level for this output, from 1 to 10. Use higher numbers for greater quality. Level 10 results in nearly lossless compression. The quality level for most broadcast-quality transcodes is between 6 and 9.
     */
    QvbrQualityLevel?: __integerMin1Max10;
  }
  export type H265RateControlMode = "VBR"|"CBR"|"QVBR"|string;
  export type H265SampleAdaptiveOffsetFilterMode = "DEFAULT"|"ADAPTIVE"|"OFF"|string;
  export type H265SceneChangeDetect = "DISABLED"|"ENABLED"|"TRANSITION_DETECTION"|string;
  export interface H265Settings {
    /**
     * Adaptive quantization. Allows intra-frame quantizers to vary to improve visual quality.
     */
    AdaptiveQuantization?: H265AdaptiveQuantization;
    /**
     * Enables Alternate Transfer Function SEI message for outputs using Hybrid Log Gamma (HLG) Electro-Optical Transfer Function (EOTF).
     */
    AlternateTransferFunctionSei?: H265AlternateTransferFunctionSei;
    /**
     * Specify the average bitrate in bits per second. Required for VBR and CBR. For MS Smooth outputs, bitrates must be unique when rounded down to the nearest multiple of 1000.
     */
    Bitrate?: __integerMin1000Max1466400000;
    /**
     * H.265 Level.
     */
    CodecLevel?: H265CodecLevel;
    /**
     * Represents the Profile and Tier, per the HEVC (H.265) specification. Selections are grouped as [Profile] / [Tier], so "Main/High" represents Main Profile with High Tier. 4:2:2 profiles are only available with the HEVC 4:2:2 License.
     */
    CodecProfile?: H265CodecProfile;
    /**
     * Choose Adaptive to improve subjective video quality for high-motion content. This will cause the service to use fewer B-frames (which infer information based on other frames) for high-motion portions of the video and more B-frames for low-motion portions. The maximum number of B-frames is limited by the value you provide for the setting B frames between reference frames (numberBFramesBetweenReferenceFrames).
     */
    DynamicSubGop?: H265DynamicSubGop;
    /**
     * Adjust quantization within each frame to reduce flicker or 'pop' on I-frames.
     */
    FlickerAdaptiveQuantization?: H265FlickerAdaptiveQuantization;
    /**
     * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job sepecification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.
     */
    FramerateControl?: H265FramerateControl;
    /**
     * When set to INTERPOLATE, produces smoother motion during frame rate conversion.
     */
    FramerateConversionAlgorithm?: H265FramerateConversionAlgorithm;
    /**
     * Frame rate denominator.
     */
    FramerateDenominator?: __integerMin1Max2147483647;
    /**
     * Frame rate numerator - frame rate is a fraction, e.g. 24000 / 1001 = 23.976 fps.
     */
    FramerateNumerator?: __integerMin1Max2147483647;
    /**
     * If enable, use reference B frames for GOP structures that have B frames > 1.
     */
    GopBReference?: H265GopBReference;
    /**
     * Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting.
     */
    GopClosedCadence?: __integerMin0Max2147483647;
    /**
     * GOP Length (keyframe interval) in frames or seconds. Must be greater than zero.
     */
    GopSize?: __doubleMin0;
    /**
     * Indicates if the GOP Size in H265 is specified in frames or seconds. If seconds the system will convert the GOP Size into a frame count at run time.
     */
    GopSizeUnits?: H265GopSizeUnits;
    /**
     * Percentage of the buffer that should initially be filled (HRD buffer model).
     */
    HrdBufferInitialFillPercentage?: __integerMin0Max100;
    /**
     * Size of buffer (HRD buffer model) in bits. For example, enter five megabits as 5000000.
     */
    HrdBufferSize?: __integerMin0Max1466400000;
    /**
     * Choose the scan line type for the output. Choose Progressive (PROGRESSIVE) to create a progressive output, regardless of the scan type of your input. Choose Top Field First (TOP_FIELD) or Bottom Field First (BOTTOM_FIELD) to create an output that's interlaced with the same field polarity throughout. Choose Follow, Default Top (FOLLOW_TOP_FIELD) or Follow, Default Bottom (FOLLOW_BOTTOM_FIELD) to create an interlaced output with the same field polarity as the source. If the source is interlaced, the output will be interlaced with the same polarity as the source (it will follow the source). The output could therefore be a mix of "top field first" and "bottom field first". If the source is progressive, your output will be interlaced with "top field first" or "bottom field first" polarity, depending on which of the Follow options you chose. If you don't choose a value, the service will default to Progressive (PROGRESSIVE).
     */
    InterlaceMode?: H265InterlaceMode;
    /**
     * Maximum bitrate in bits/second. For example, enter five megabits per second as 5000000. Required when Rate control mode is QVBR.
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
    /**
     * Using the API, enable ParFollowSource if you want the service to use the pixel aspect ratio from the input. Using the console, do this by choosing Follow source for Pixel aspect ratio.
     */
    ParControl?: H265ParControl;
    /**
     * Pixel Aspect Ratio denominator.
     */
    ParDenominator?: __integerMin1Max2147483647;
    /**
     * Pixel Aspect Ratio numerator.
     */
    ParNumerator?: __integerMin1Max2147483647;
    /**
     * Use Quality tuning level (H265QualityTuningLevel) to specifiy whether to use fast single-pass, high-quality singlepass, or high-quality multipass video encoding.
     */
    QualityTuningLevel?: H265QualityTuningLevel;
    /**
     * Settings for quality-defined variable bitrate encoding with the H.265 codec. Required when you set Rate control mode to QVBR. Not valid when you set Rate control mode to a value other than QVBR, or when you don't define Rate control mode.
     */
    QvbrSettings?: H265QvbrSettings;
    /**
     * Use this setting to specify whether this output has a variable bitrate (VBR), constant bitrate (CBR) or quality-defined variable bitrate (QVBR).
     */
    RateControlMode?: H265RateControlMode;
    /**
     * Specify Sample Adaptive Offset (SAO) filter strength.  Adaptive mode dynamically selects best strength based on content
     */
    SampleAdaptiveOffsetFilterMode?: H265SampleAdaptiveOffsetFilterMode;
    /**
     * Enable this setting to insert I-frames at scene changes that the service automatically detects. This improves video quality and is enabled by default. If this output uses QVBR, choose Transition detection (TRANSITION_DETECTION) for further video quality improvement. For more information about QVBR, see https://docs.aws.amazon.com/console/mediaconvert/cbr-vbr-qvbr.
     */
    SceneChangeDetect?: H265SceneChangeDetect;
    /**
     * Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.
     */
    Slices?: __integerMin1Max32;
    /**
     * Enables Slow PAL rate conversion. 23.976fps and 24fps input is relabeled as 25fps, and audio is sped up correspondingly.
     */
    SlowPal?: H265SlowPal;
    /**
     * Adjust quantization within each frame based on spatial variation of content complexity.
     */
    SpatialAdaptiveQuantization?: H265SpatialAdaptiveQuantization;
    /**
     * This field applies only if the Streams > Advanced > Framerate (framerate) field  is set to 29.970. This field works with the Streams > Advanced > Preprocessors > Deinterlacer  field (deinterlace_mode) and the Streams > Advanced > Interlaced Mode field (interlace_mode)  to identify the scan type for the output: Progressive, Interlaced, Hard Telecine or Soft Telecine. - Hard: produces 29.97i output from 23.976 input. - Soft: produces 23.976; the player converts this output to 29.97i.
     */
    Telecine?: H265Telecine;
    /**
     * Adjust quantization within each frame based on temporal variation of content complexity.
     */
    TemporalAdaptiveQuantization?: H265TemporalAdaptiveQuantization;
    /**
     * Enables temporal layer identifiers in the encoded bitstream. Up to 3 layers are supported depending on GOP structure: I- and P-frames form one layer, reference B-frames can form a second layer and non-reference b-frames can form a third layer. Decoders can optionally decode only the lower temporal layers to generate a lower frame rate output. For example, given a bitstream with temporal IDs and with b-frames = 1 (i.e. IbPbPb display order), a decoder could decode all the frames for full frame rate output or only the I and P frames (lowest temporal layer) for a half frame rate output.
     */
    TemporalIds?: H265TemporalIds;
    /**
     * Enable use of tiles, allowing horizontal as well as vertical subdivision of the encoded pictures.
     */
    Tiles?: H265Tiles;
    /**
     * Inserts timecode for each frame as 4 bytes of an unregistered SEI message.
     */
    UnregisteredSeiTimecode?: H265UnregisteredSeiTimecode;
    /**
     * If the location of parameter set NAL units doesn't matter in your workflow, ignore this setting. Use this setting in your CMAF, DASH, or file MP4 output. For file MP4 outputs, choosing HVC1 can create video that doesn't work properly with some downstream systems and video players. Choose HVC1 to mark your output as HVC1. This makes your output compliant with the following specification: ISO IECJTC1 SC29 N13798 Text ISO/IEC FDIS 14496-15 3rd Edition. For these outputs, the service stores parameter set NAL units in the sample headers but not in the samples directly. The service defaults to marking your output as HEV1. For these outputs, the service writes parameter set NAL units directly into the samples.
     */
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
     * Maximum light level among all samples in the coded video sequence, in units of candelas per square meter.  This setting doesn't have a default value; you must specify a value that is suitable for the content.
     */
    MaxContentLightLevel?: __integerMin0Max65535;
    /**
     * Maximum average light level of any frame in the coded video sequence, in units of candelas per square meter. This setting doesn't have a default value; you must specify a value that is suitable for the content.
     */
    MaxFrameAverageLightLevel?: __integerMin0Max65535;
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
  export type HlsAudioOnlyContainer = "AUTOMATIC"|"M2TS"|string;
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
    /**
     * Specify the language, using the ISO 639-2 three-letter code listed at https://www.loc.gov/standards/iso639-2/php/code_list.php.
     */
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
    /**
     * Encrypts the segments with the given encryption scheme. Leave blank to disable. Selecting 'Disabled' in the web interface also disables encryption.
     */
    EncryptionMethod?: HlsEncryptionType;
    /**
     * The Initialization Vector is a 128-bit number used in conjunction with the key for encrypting blocks. If set to INCLUDE, Initialization Vector is listed in the manifest. Otherwise Initialization Vector is not in the manifest.
     */
    InitializationVectorInManifest?: HlsInitializationVectorInManifest;
    /**
     * Enable this setting to insert the EXT-X-SESSION-KEY element into the master playlist. This allows for offline Apple HLS FairPlay content protection.
     */
    OfflineEncrypted?: HlsOfflineEncrypted;
    /**
     * If your output group type is HLS, DASH, or Microsoft Smooth, use these settings when doing DRM encryption with a SPEKE-compliant key provider.  If your output group type is CMAF, use the SpekeKeyProviderCmaf settings instead.
     */
    SpekeKeyProvider?: SpekeKeyProvider;
    /**
     * Use these settings to set up encryption with a static key provider.
     */
    StaticKeyProvider?: StaticKeyProvider;
    /**
     * Specify whether your DRM encryption key is static or from a key provider that follows the SPEKE standard. For more information about SPEKE, see https://docs.aws.amazon.com/speke/latest/documentation/what-is-speke.html.
     */
    Type?: HlsKeyProviderType;
  }
  export type HlsEncryptionType = "AES128"|"SAMPLE_AES"|string;
  export interface HlsGroupSettings {
    /**
     * Choose one or more ad marker types to decorate your Apple HLS manifest. This setting does not determine whether SCTE-35 markers appear in the outputs themselves.
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
    /**
     * Applies only to 608 Embedded output captions. Insert: Include CLOSED-CAPTIONS lines in the manifest. Specify at least one language in the CC1 Language Code field. One CLOSED-CAPTION line is added for each Language Code you specify. Make sure to specify the languages in the order in which they appear in the original source (if the source is embedded format) or the order of the caption selectors (if the source is other than embedded). Otherwise, languages in the manifest will not match up properly with the output captions. None: Include CLOSED-CAPTIONS=NONE line in the manifest. Omit: Omit any CLOSED-CAPTIONS line from the manifest.
     */
    CaptionLanguageSetting?: HlsCaptionLanguageSetting;
    /**
     * When set to ENABLED, sets #EXT-X-ALLOW-CACHE:no tag, which prevents client from saving media segments for later replay.
     */
    ClientCache?: HlsClientCache;
    /**
     * Specification to use (RFC-6381 or the default RFC-4281) during m3u8 playlist generation.
     */
    CodecSpecification?: HlsCodecSpecification;
    /**
     * Use Destination (Destination) to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file.
     */
    Destination?: __stringPatternS3;
    /**
     * Settings associated with the destination. Will vary based on the type of destination
     */
    DestinationSettings?: DestinationSettings;
    /**
     * Indicates whether segments should be placed in subdirectories.
     */
    DirectoryStructure?: HlsDirectoryStructure;
    /**
     * DRM settings.
     */
    Encryption?: HlsEncryptionSettings;
    /**
     * When set to GZIP, compresses HLS playlist.
     */
    ManifestCompression?: HlsManifestCompression;
    /**
     * Indicates whether the output manifest should use floating point values for segment duration.
     */
    ManifestDurationFormat?: HlsManifestDurationFormat;
    /**
     * Keep this setting at the default value of 0, unless you are troubleshooting a problem with how devices play back the end of your video asset. If you know that player devices are hanging on the final segment of your video because the length of your final segment is too short, use this setting to specify a minimum final segment length, in seconds. Choose a value that is greater than or equal to 1 and less than your segment length. When you specify a value for this setting, the encoder will combine any final segment that is shorter than the length that you specify with the previous segment. For example, your segment length is 3 seconds and your final segment is .5 seconds without a minimum final segment length; when you set the minimum final segment length to 1, your final segment is 3.5 seconds.
     */
    MinFinalSegmentLength?: __doubleMin0Max2147483647;
    /**
     * When set, Minimum Segment Size is enforced by looking ahead and back within the specified range for a nearby avail and extending the segment size if needed.
     */
    MinSegmentLength?: __integerMin0Max2147483647;
    /**
     * Indicates whether the .m3u8 manifest file should be generated for this HLS output group.
     */
    OutputSelection?: HlsOutputSelection;
    /**
     * Includes or excludes EXT-X-PROGRAM-DATE-TIME tag in .m3u8 manifest files. The value is calculated as follows: either the program date and time are initialized using the input timecode source, or the time is initialized using the input timecode source and the date is initialized using the timestamp_offset.
     */
    ProgramDateTime?: HlsProgramDateTime;
    /**
     * Period of insertion of EXT-X-PROGRAM-DATE-TIME entry, in seconds.
     */
    ProgramDateTimePeriod?: __integerMin0Max3600;
    /**
     * When set to SINGLE_FILE, emits program as a single media resource (.ts) file, uses #EXT-X-BYTERANGE tags to index segment for playback.
     */
    SegmentControl?: HlsSegmentControl;
    /**
     * Length of MPEG-2 Transport Stream segments to create (in seconds). Note that segments will end on the next keyframe after this number of seconds, so actual segment length may be longer.
     */
    SegmentLength?: __integerMin1Max2147483647;
    /**
     * Number of segments to write to a subdirectory before starting a new one. directoryStructure must be SINGLE_DIRECTORY for this setting to have an effect.
     */
    SegmentsPerSubdirectory?: __integerMin1Max2147483647;
    /**
     * Include or exclude RESOLUTION attribute for video in EXT-X-STREAM-INF tag of variant manifest.
     */
    StreamInfResolution?: HlsStreamInfResolution;
    /**
     * Indicates ID3 frame that has the timecode.
     */
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
  export type HlsOfflineEncrypted = "ENABLED"|"DISABLED"|string;
  export type HlsOutputSelection = "MANIFESTS_AND_SEGMENTS"|"SEGMENTS_ONLY"|string;
  export type HlsProgramDateTime = "INCLUDE"|"EXCLUDE"|string;
  export type HlsSegmentControl = "SINGLE_FILE"|"SEGMENTED_FILES"|string;
  export interface HlsSettings {
    /**
     * Specifies the group to which the audio Rendition belongs.
     */
    AudioGroupId?: __string;
    /**
     * Use this setting only in audio-only outputs. Choose MPEG-2 Transport Stream (M2TS) to create a file in an MPEG2-TS container. Keep the default value Automatic (AUTOMATIC) to create an audio-only file in a raw container. Regardless of the value that you specify here, if this output has video, the service will place the output into an MPEG2-TS container.
     */
    AudioOnlyContainer?: HlsAudioOnlyContainer;
    /**
     * List all the audio groups that are used with the video output stream. Input all the audio GROUP-IDs that are associated to the video, separate by ','.
     */
    AudioRenditionSets?: __string;
    /**
     * Four types of audio-only tracks are supported: Audio-Only Variant Stream The client can play back this audio-only stream instead of video in low-bandwidth scenarios. Represented as an EXT-X-STREAM-INF in the HLS manifest. Alternate Audio, Auto Select, Default Alternate rendition that the client should try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=YES, AUTOSELECT=YES Alternate Audio, Auto Select, Not Default Alternate rendition that the client may try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=YES Alternate Audio, not Auto Select Alternate rendition that the client will not try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=NO
     */
    AudioTrackType?: HlsAudioTrackType;
    /**
     * When set to INCLUDE, writes I-Frame Only Manifest in addition to the HLS manifest
     */
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
    Id3?: __stringPatternAZaZ0902;
    /**
     * Provide a Timecode (TimeCode) in HH:MM:SS:FF or HH:MM:SS;FF format.
     */
    Timecode?: __stringPattern010920405090509092;
  }
  export interface ImageInserter {
    /**
     * Specify the images that you want to overlay on your video. The images must be PNG or TGA files.
     */
    InsertableImages?: __listOfInsertableImage;
  }
  export interface ImscDestinationSettings {
    /**
     * Keep this setting enabled to have MediaConvert use the font style and position information from the captions source in the output. This option is available only when your input captions are CFF-TT, IMSC, SMPTE-TT, or TTML. Disable this setting for simplified output captions.
     */
    StylePassthrough?: ImscStylePassthrough;
  }
  export type ImscStylePassthrough = "ENABLED"|"DISABLED"|string;
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
    /**
     * Use Cropping selection (crop) to specify the video area that the service will include in the output video frame. If you specify a value here, it will override any value that you specify in the output setting Cropping selection (crop).
     */
    Crop?: Rectangle;
    /**
     * Enable Deblock (InputDeblockFilter) to produce smoother motion in the output. Default is disabled. Only manaully controllable for MPEG2 and uncompressed video inputs.
     */
    DeblockFilter?: InputDeblockFilter;
    /**
     * Settings for decrypting any input files that you encrypt before you upload them to Amazon S3. MediaConvert can decrypt files only when you use AWS Key Management Service (KMS) to encrypt the data key that you use to encrypt your content.
     */
    DecryptionSettings?: InputDecryptionSettings;
    /**
     * Enable Denoise (InputDenoiseFilter) to filter noise from the input.  Default is disabled. Only applicable to MPEG2, H.264, H.265, and uncompressed video inputs.
     */
    DenoiseFilter?: InputDenoiseFilter;
    /**
     * Specify the source file for your transcoding job. You can use multiple inputs in a single job. The service concatenates these inputs, in the order that you specify them in the job, to create the outputs. If your input format is IMF, specify your input by providing the path to your CPL. For example, "s3://bucket/vf/cpl.xml". If the CPL is in an incomplete IMP, make sure to use *Supplemental IMPs* (SupplementalImps) to specify any supplemental IMPs that contain assets referenced by the CPL.
     */
    FileInput?: __stringPatternHttpHttpsS3MM2VVMMPPEEGGMMPP3AAVVIIMMPP4FFLLVVMMPPTTMMPPGGMM4VVTTRRPPFF4VVMM2TTSSTTSS264HH264MMKKVVMMOOVVMMTTSSMM2TTWWMMVVAASSFFVVOOBB3GGPP3GGPPPPMMXXFFDDIIVVXXXXVVIIDDRRAAWWDDVVGGXXFFMM1VV3GG2VVMMFFMM3UU8WWEEBBMMLLCCHHGGXXFFMMPPEEGG2MMXXFFMMPPEEGG2MMXXFFHHDDWWAAVVYY4MMXXMMLL;
    /**
     * Use Filter enable (InputFilterEnable) to specify how the transcoding service applies the denoise and deblock filters. You must also enable the filters separately, with Denoise (InputDenoiseFilter) and Deblock (InputDeblockFilter). * Auto - The transcoding service determines whether to apply filtering, depending on input type and quality. * Disable - The input is not filtered. This is true even if you use the API to enable them in (InputDeblockFilter) and (InputDeblockFilter). * Force - The in put is filtered regardless of input type.
     */
    FilterEnable?: InputFilterEnable;
    /**
     * Use Filter strength (FilterStrength) to adjust the magnitude the input filter settings (Deblock and Denoise). The range is -5 to 5. Default is 0.
     */
    FilterStrength?: __integerMinNegative5Max5;
    /**
     * Enable the image inserter feature to include a graphic overlay on your video. Enable or disable this feature for each input individually. This setting is disabled by default.
     */
    ImageInserter?: ImageInserter;
    /**
     * (InputClippings) contains sets of start and end times that together specify a portion of the input to be used in the outputs. If you provide only a start time, the clip will be the entire input from that point to the end. If you provide only an end time, it will be the entire input up to that point. When you specify more than one input clip, the transcoding service creates the job outputs by stringing the clips together in the order you specify them.
     */
    InputClippings?: __listOfInputClipping;
    /**
     * Use Selection placement (position) to define the video area in your output frame. The area outside of the rectangle that you specify here is black. If you specify a value here, it will override any value that you specify in the output setting Selection placement (position). If you specify a value here, this will override any AFD values in your input, even if you set Respond to AFD (RespondToAfd) to Respond (RESPOND). If you specify a value here, this will ignore anything that you specify for the setting Scaling Behavior (scalingBehavior).
     */
    Position?: Rectangle;
    /**
     * Use Program (programNumber) to select a specific program from within a multi-program transport stream. Note that Quad 4K is not currently supported. Default is the first program within the transport stream. If the program you specify doesn't exist, the transcoding service will use this default.
     */
    ProgramNumber?: __integerMin1Max2147483647;
    /**
     * Set PSI control (InputPsiControl) for transport stream inputs to specify which data the demux process to scans. * Ignore PSI - Scan all PIDs for audio and video. * Use PSI - Scan only PSI data.
     */
    PsiControl?: InputPsiControl;
    /**
     * Provide a list of any necessary supplemental IMPs. You need supplemental IMPs if the CPL that you're using for your input is in an incomplete IMP. Specify either the supplemental IMP directories with a trailing slash or the ASSETMAP.xml files. For example ["s3://bucket/ov/", "s3://bucket/vf2/ASSETMAP.xml"]. You don't need to specify the IMP that contains your input CPL, because the service automatically detects it.
     */
    SupplementalImps?: __listOf__stringPatternS3ASSETMAPXml;
    /**
     * Use this Timecode source setting, located under the input settings (InputTimecodeSource), to specify how the service counts input video frames. This input frame count affects only the behavior of features that apply to a single input at a time, such as input clipping and synchronizing some captions formats. Choose Embedded (EMBEDDED) to use the timecodes in your input video. Choose Start at zero (ZEROBASED) to start the first frame at zero. Choose Specified start (SPECIFIEDSTART) to start the first frame at the timecode that you specify in the setting Start timecode (timecodeStart). If you don't specify a value for Timecode source, the service will use Embedded by default. For more information about timecodes, see https://docs.aws.amazon.com/console/mediaconvert/timecode.
     */
    TimecodeSource?: InputTimecodeSource;
    /**
     * Specify the timecode that you want the service to use for this input's initial frame. To use this setting, you must set the Timecode source setting, located under the input settings (InputTimecodeSource), to Specified start (SPECIFIEDSTART). For more information about timecodes, see https://docs.aws.amazon.com/console/mediaconvert/timecode.
     */
    TimecodeStart?: __stringMin11Max11Pattern01D20305D205D;
    /**
     * Selector for video.
     */
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
  export interface InputDecryptionSettings {
    /**
     * Specify the encryption mode that you used to encrypt your input files.
     */
    DecryptionMode?: DecryptionMode;
    /**
     * Warning! Don't provide your encryption key in plaintext. Your job settings could be intercepted, making your encrypted content vulnerable. Specify the encrypted version of the data key that you used to encrypt your content. The data key must be encrypted by AWS Key Management Service (KMS). The key can be 128, 192, or 256 bits.
     */
    EncryptedDecryptionKey?: __stringMin24Max512PatternAZaZ0902;
    /**
     * Specify the initialization vector that you used when you encrypted your content before uploading it to Amazon S3. You can use a 16-byte initialization vector with any encryption mode. Or, you can use a 12-byte initialization vector with GCM or CTR. MediaConvert accepts only initialization vectors that are base64-encoded.
     */
    InitializationVector?: __stringMin16Max24PatternAZaZ0922AZaZ0916;
    /**
     * Specify the AWS Region for AWS Key Management Service (KMS) that you used to encrypt your data key, if that Region is different from the one you are using for AWS Elemental MediaConvert.
     */
    KmsKeyRegion?: __stringMin9Max19PatternAZ26EastWestCentralNorthSouthEastWest1912;
  }
  export type InputDenoiseFilter = "ENABLED"|"DISABLED"|string;
  export type InputFilterEnable = "AUTO"|"DISABLE"|"FORCE"|string;
  export type InputPsiControl = "IGNORE_PSI"|"USE_PSI"|string;
  export type InputRotate = "DEGREE_0"|"DEGREES_90"|"DEGREES_180"|"DEGREES_270"|"AUTO"|string;
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
    /**
     * Use Cropping selection (crop) to specify the video area that the service will include in the output video frame. If you specify a value here, it will override any value that you specify in the output setting Cropping selection (crop).
     */
    Crop?: Rectangle;
    /**
     * Enable Deblock (InputDeblockFilter) to produce smoother motion in the output. Default is disabled. Only manaully controllable for MPEG2 and uncompressed video inputs.
     */
    DeblockFilter?: InputDeblockFilter;
    /**
     * Enable Denoise (InputDenoiseFilter) to filter noise from the input.  Default is disabled. Only applicable to MPEG2, H.264, H.265, and uncompressed video inputs.
     */
    DenoiseFilter?: InputDenoiseFilter;
    /**
     * Use Filter enable (InputFilterEnable) to specify how the transcoding service applies the denoise and deblock filters. You must also enable the filters separately, with Denoise (InputDenoiseFilter) and Deblock (InputDeblockFilter). * Auto - The transcoding service determines whether to apply filtering, depending on input type and quality. * Disable - The input is not filtered. This is true even if you use the API to enable them in (InputDeblockFilter) and (InputDeblockFilter). * Force - The in put is filtered regardless of input type.
     */
    FilterEnable?: InputFilterEnable;
    /**
     * Use Filter strength (FilterStrength) to adjust the magnitude the input filter settings (Deblock and Denoise). The range is -5 to 5. Default is 0.
     */
    FilterStrength?: __integerMinNegative5Max5;
    /**
     * Enable the image inserter feature to include a graphic overlay on your video. Enable or disable this feature for each input individually. This setting is disabled by default.
     */
    ImageInserter?: ImageInserter;
    /**
     * (InputClippings) contains sets of start and end times that together specify a portion of the input to be used in the outputs. If you provide only a start time, the clip will be the entire input from that point to the end. If you provide only an end time, it will be the entire input up to that point. When you specify more than one input clip, the transcoding service creates the job outputs by stringing the clips together in the order you specify them.
     */
    InputClippings?: __listOfInputClipping;
    /**
     * Use Selection placement (position) to define the video area in your output frame. The area outside of the rectangle that you specify here is black. If you specify a value here, it will override any value that you specify in the output setting Selection placement (position). If you specify a value here, this will override any AFD values in your input, even if you set Respond to AFD (RespondToAfd) to Respond (RESPOND). If you specify a value here, this will ignore anything that you specify for the setting Scaling Behavior (scalingBehavior).
     */
    Position?: Rectangle;
    /**
     * Use Program (programNumber) to select a specific program from within a multi-program transport stream. Note that Quad 4K is not currently supported. Default is the first program within the transport stream. If the program you specify doesn't exist, the transcoding service will use this default.
     */
    ProgramNumber?: __integerMin1Max2147483647;
    /**
     * Set PSI control (InputPsiControl) for transport stream inputs to specify which data the demux process to scans. * Ignore PSI - Scan all PIDs for audio and video. * Use PSI - Scan only PSI data.
     */
    PsiControl?: InputPsiControl;
    /**
     * Use this Timecode source setting, located under the input settings (InputTimecodeSource), to specify how the service counts input video frames. This input frame count affects only the behavior of features that apply to a single input at a time, such as input clipping and synchronizing some captions formats. Choose Embedded (EMBEDDED) to use the timecodes in your input video. Choose Start at zero (ZEROBASED) to start the first frame at zero. Choose Specified start (SPECIFIEDSTART) to start the first frame at the timecode that you specify in the setting Start timecode (timecodeStart). If you don't specify a value for Timecode source, the service will use Embedded by default. For more information about timecodes, see https://docs.aws.amazon.com/console/mediaconvert/timecode.
     */
    TimecodeSource?: InputTimecodeSource;
    /**
     * Specify the timecode that you want the service to use for this input's initial frame. To use this setting, you must set the Timecode source setting, located under the input settings (InputTimecodeSource), to Specified start (SPECIFIEDSTART). For more information about timecodes, see https://docs.aws.amazon.com/console/mediaconvert/timecode.
     */
    TimecodeStart?: __stringMin11Max11Pattern01D20305D205D;
    /**
     * Selector for video.
     */
    VideoSelector?: VideoSelector;
  }
  export type InputTimecodeSource = "EMBEDDED"|"ZEROBASED"|"SPECIFIEDSTART"|string;
  export interface InsertableImage {
    /**
     * Specify the time, in milliseconds, for the image to remain on the output video. This duration includes fade-in time but not fade-out time.
     */
    Duration?: __integerMin0Max2147483647;
    /**
     * Specify the length of time, in milliseconds, between the Start time that you specify for the image insertion and the time that the image appears at full opacity. Full opacity is the level that you specify for the opacity setting. If you don't specify a value for Fade-in, the image will appear abruptly at the overlay start time.
     */
    FadeIn?: __integerMin0Max2147483647;
    /**
     * Specify the length of time, in milliseconds, between the end of the time that you have specified for the image overlay Duration and when the overlaid image has faded to total transparency. If you don't specify a value for Fade-out, the image will disappear abruptly at the end of the inserted image duration.
     */
    FadeOut?: __integerMin0Max2147483647;
    /**
     * Specify the height of the inserted image in pixels. If you specify a value that's larger than the video resolution height, the service will crop your overlaid image to fit. To use the native height of the image, keep this setting blank.
     */
    Height?: __integerMin0Max2147483647;
    /**
     * Specify the HTTP, HTTPS, or Amazon S3 location of the image that you want to overlay on the video. Use a PNG or TGA file.
     */
    ImageInserterInput?: __stringMin14PatternHttpHttpsS3BmpBMPPngPNGTgaTGA;
    /**
     * Specify the distance, in pixels, between the inserted image and the left edge of the video frame. Required for any image overlay that you specify.
     */
    ImageX?: __integerMin0Max2147483647;
    /**
     * Specify the distance, in pixels, between the overlaid image and the top edge of the video frame. Required for any image overlay that you specify.
     */
    ImageY?: __integerMin0Max2147483647;
    /**
     * Specify how overlapping inserted images appear. Images with higher values for Layer appear on top of images with lower values for Layer.
     */
    Layer?: __integerMin0Max99;
    /**
     * Use Opacity (Opacity) to specify how much of the underlying video shows through the inserted image. 0 is transparent and 100 is fully opaque. Default is 50.
     */
    Opacity?: __integerMin0Max100;
    /**
     * Specify the timecode of the frame that you want the overlay to first appear on. This must be in timecode (HH:MM:SS:FF or HH:MM:SS;FF) format. Remember to take into account your timecode source settings.
     */
    StartTime?: __stringPattern01D20305D205D;
    /**
     * Specify the width of the inserted image in pixels. If you specify a value that's larger than the video resolution width, the service will crop your overlaid image to fit. To use the native width of the image, keep this setting blank.
     */
    Width?: __integerMin0Max2147483647;
  }
  export interface Job {
    /**
     * Accelerated transcoding can significantly speed up jobs with long, visually complex content.
     */
    AccelerationSettings?: AccelerationSettings;
    /**
     * Describes whether the current job is running with accelerated transcoding. For jobs that have Acceleration (AccelerationMode) set to DISABLED, AccelerationStatus is always NOT_APPLICABLE. For jobs that have Acceleration (AccelerationMode) set to ENABLED or PREFERRED, AccelerationStatus is one of the other states. AccelerationStatus is IN_PROGRESS initially, while the service determines whether the input files and job settings are compatible with accelerated transcoding. If they are, AcclerationStatus is ACCELERATED. If your input files and job settings aren't compatible with accelerated transcoding, the service either fails your job or runs it without accelerated transcoding, depending on how you set Acceleration (AccelerationMode). When the service runs your job without accelerated transcoding, AccelerationStatus is NOT_ACCELERATED.
     */
    AccelerationStatus?: AccelerationStatus;
    /**
     * An identifier for this resource that is unique within all of AWS.
     */
    Arn?: __string;
    /**
     * Optional. Choose a tag type that AWS Billing and Cost Management will use to sort your AWS Elemental MediaConvert costs on any billing report that you set up. Any transcoding outputs that don't have an associated tag will appear in your billing report unsorted. If you don't choose a valid value for this field, your job outputs will appear on the billing report unsorted.
     */
    BillingTagsSource?: BillingTagsSource;
    /**
     * The time, in Unix epoch format in seconds, when the job got created.
     */
    CreatedAt?: __timestampUnix;
    /**
     * A job's phase can be PROBING, TRANSCODING OR UPLOADING
     */
    CurrentPhase?: JobPhase;
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
     * An estimate of how far your job has progressed. This estimate is shown as a percentage of the total time from when your job leaves its queue to when your output files appear in your output Amazon S3 bucket. AWS Elemental MediaConvert provides jobPercentComplete in CloudWatch STATUS_UPDATE events and in the response to GetJob and ListJobs requests. The jobPercentComplete estimate is reliable for the following input containers: Quicktime, Transport Stream, MP4, and MXF. For some jobs, the service can't provide information about job progress. In those cases, jobPercentComplete returns a null value.
     */
    JobPercentComplete?: __integer;
    /**
     * The job template that the job is created from, if it is created from a job template.
     */
    JobTemplate?: __string;
    /**
     * Provides messages from the service about jobs that you have already successfully submitted.
     */
    Messages?: JobMessages;
    /**
     * List of output group details
     */
    OutputGroupDetails?: __listOfOutputGroupDetail;
    /**
     * Relative priority on the job.
     */
    Priority?: __integerMinNegative50Max50;
    /**
     * Optional. When you create a job, you can specify a queue to send it to. If you don't specify, the job will go to the default queue. For more about queues, see the User Guide topic at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html
     */
    Queue?: __string;
    /**
     * The number of times that the service automatically attempted to process your job after encountering an error.
     */
    RetryCount?: __integer;
    /**
     * The IAM role you use for creating this job. For details about permissions, see the User Guide topic at the User Guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/iam-role.html
     */
    Role: __string;
    /**
     * JobSettings contains all the transcode settings for a job.
     */
    Settings: JobSettings;
    /**
     * Enable this setting when you run a test job to estimate how many reserved transcoding slots (RTS) you need. When this is enabled, MediaConvert runs your job from an on-demand queue with similar performance to what you will see with one RTS in a reserved queue. This setting is disabled by default.
     */
    SimulateReservedQueue?: SimulateReservedQueue;
    /**
     * A job's status can be SUBMITTED, PROGRESSING, COMPLETE, CANCELED, or ERROR.
     */
    Status?: JobStatus;
    /**
     * Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.
     */
    StatusUpdateInterval?: StatusUpdateInterval;
    /**
     * Information about when jobs are submitted, started, and finished is specified in Unix epoch format in seconds.
     */
    Timing?: Timing;
    /**
     * User-defined metadata that you want to associate with an MediaConvert job. You specify metadata in key/value pairs.
     */
    UserMetadata?: __mapOf__string;
  }
  export interface JobMessages {
    /**
     * List of messages that are informational only and don't indicate a problem with your job.
     */
    Info?: __listOf__string;
    /**
     * List of messages that warn about conditions that might cause your job not to run or to fail.
     */
    Warning?: __listOf__string;
  }
  export type JobPhase = "PROBING"|"TRANSCODING"|"UPLOADING"|string;
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
     * Settings for Event Signaling And Messaging (ESAM).
     */
    Esam?: EsamSettings;
    /**
     * Use Inputs (inputs) to define source file used in the transcode job. There can be multiple inputs add in a job. These inputs will be concantenated together to create the output.
     */
    Inputs?: __listOfInput;
    /**
     * Overlay motion graphics on top of your video. The motion graphics that you specify here appear on all outputs in all output groups.
     */
    MotionImageInserter?: MotionImageInserter;
    /**
     * Settings for your Nielsen configuration. If you don't do Nielsen measurement and analytics, ignore these settings. When you enable Nielsen configuration (nielsenConfiguration), MediaConvert enables PCM to ID3 tagging for all outputs in the job. To enable Nielsen configuration programmatically, include an instance of nielsenConfiguration in your JSON job specification. Even if you don't include any children of nielsenConfiguration, you still enable the setting.
     */
    NielsenConfiguration?: NielsenConfiguration;
    /**
     * (OutputGroups) contains one group of settings for each set of outputs that share a common package type. All unpackaged files (MPEG-4, MPEG-2 TS, Quicktime, MXF, and no container) are grouped in a single output group as well. Required in (OutputGroups) is a group of settings that apply to the whole group. This required object depends on the value you set for (Type) under (OutputGroups)>(OutputGroupSettings). Type, settings object pairs are as follows. * FILE_GROUP_SETTINGS, FileGroupSettings * HLS_GROUP_SETTINGS, HlsGroupSettings * DASH_ISO_GROUP_SETTINGS, DashIsoGroupSettings * MS_SMOOTH_GROUP_SETTINGS, MsSmoothGroupSettings * CMAF_GROUP_SETTINGS, CmafGroupSettings
     */
    OutputGroups?: __listOfOutputGroup;
    /**
     * Contains settings used to acquire and adjust timecode information from inputs.
     */
    TimecodeConfig?: TimecodeConfig;
    /**
     * Enable Timed metadata insertion (TimedMetadataInsertion) to include ID3 tags in your job. To include timed metadata, you must enable it here, enable it in each output container, and specify tags and timecodes in ID3 insertion (Id3Insertion) objects.
     */
    TimedMetadataInsertion?: TimedMetadataInsertion;
  }
  export type JobStatus = "SUBMITTED"|"PROGRESSING"|"COMPLETE"|"CANCELED"|"ERROR"|string;
  export interface JobTemplate {
    /**
     * Accelerated transcoding can significantly speed up jobs with long, visually complex content.
     */
    AccelerationSettings?: AccelerationSettings;
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
     * Relative priority on the job.
     */
    Priority?: __integerMinNegative50Max50;
    /**
     * Optional. The queue that jobs created from this template are assigned to. If you don't specify this, jobs will go to the default queue.
     */
    Queue?: __string;
    /**
     * JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.
     */
    Settings: JobTemplateSettings;
    /**
     * Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.
     */
    StatusUpdateInterval?: StatusUpdateInterval;
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
     * Settings for Event Signaling And Messaging (ESAM).
     */
    Esam?: EsamSettings;
    /**
     * Use Inputs (inputs) to define the source file used in the transcode job. There can only be one input in a job template.  Using the API, you can include multiple inputs when referencing a job template.
     */
    Inputs?: __listOfInputTemplate;
    /**
     * Overlay motion graphics on top of your video. The motion graphics that you specify here appear on all outputs in all output groups.
     */
    MotionImageInserter?: MotionImageInserter;
    /**
     * Settings for your Nielsen configuration. If you don't do Nielsen measurement and analytics, ignore these settings. When you enable Nielsen configuration (nielsenConfiguration), MediaConvert enables PCM to ID3 tagging for all outputs in the job. To enable Nielsen configuration programmatically, include an instance of nielsenConfiguration in your JSON job specification. Even if you don't include any children of nielsenConfiguration, you still enable the setting.
     */
    NielsenConfiguration?: NielsenConfiguration;
    /**
     * (OutputGroups) contains one group of settings for each set of outputs that share a common package type. All unpackaged files (MPEG-4, MPEG-2 TS, Quicktime, MXF, and no container) are grouped in a single output group as well. Required in (OutputGroups) is a group of settings that apply to the whole group. This required object depends on the value you set for (Type) under (OutputGroups)>(OutputGroupSettings). Type, settings object pairs are as follows. * FILE_GROUP_SETTINGS, FileGroupSettings * HLS_GROUP_SETTINGS, HlsGroupSettings * DASH_ISO_GROUP_SETTINGS, DashIsoGroupSettings * MS_SMOOTH_GROUP_SETTINGS, MsSmoothGroupSettings * CMAF_GROUP_SETTINGS, CmafGroupSettings
     */
    OutputGroups?: __listOfOutputGroup;
    /**
     * Contains settings used to acquire and adjust timecode information from inputs.
     */
    TimecodeConfig?: TimecodeConfig;
    /**
     * Enable Timed metadata insertion (TimedMetadataInsertion) to include ID3 tags in your job. To include timed metadata, you must enable it here, enable it in each output container, and specify tags and timecodes in ID3 insertion (Id3Insertion) objects.
     */
    TimedMetadataInsertion?: TimedMetadataInsertion;
  }
  export type LanguageCode = "ENG"|"SPA"|"FRA"|"DEU"|"GER"|"ZHO"|"ARA"|"HIN"|"JPN"|"RUS"|"POR"|"ITA"|"URD"|"VIE"|"KOR"|"PAN"|"ABK"|"AAR"|"AFR"|"AKA"|"SQI"|"AMH"|"ARG"|"HYE"|"ASM"|"AVA"|"AVE"|"AYM"|"AZE"|"BAM"|"BAK"|"EUS"|"BEL"|"BEN"|"BIH"|"BIS"|"BOS"|"BRE"|"BUL"|"MYA"|"CAT"|"KHM"|"CHA"|"CHE"|"NYA"|"CHU"|"CHV"|"COR"|"COS"|"CRE"|"HRV"|"CES"|"DAN"|"DIV"|"NLD"|"DZO"|"ENM"|"EPO"|"EST"|"EWE"|"FAO"|"FIJ"|"FIN"|"FRM"|"FUL"|"GLA"|"GLG"|"LUG"|"KAT"|"ELL"|"GRN"|"GUJ"|"HAT"|"HAU"|"HEB"|"HER"|"HMO"|"HUN"|"ISL"|"IDO"|"IBO"|"IND"|"INA"|"ILE"|"IKU"|"IPK"|"GLE"|"JAV"|"KAL"|"KAN"|"KAU"|"KAS"|"KAZ"|"KIK"|"KIN"|"KIR"|"KOM"|"KON"|"KUA"|"KUR"|"LAO"|"LAT"|"LAV"|"LIM"|"LIN"|"LIT"|"LUB"|"LTZ"|"MKD"|"MLG"|"MSA"|"MAL"|"MLT"|"GLV"|"MRI"|"MAR"|"MAH"|"MON"|"NAU"|"NAV"|"NDE"|"NBL"|"NDO"|"NEP"|"SME"|"NOR"|"NOB"|"NNO"|"OCI"|"OJI"|"ORI"|"ORM"|"OSS"|"PLI"|"FAS"|"POL"|"PUS"|"QUE"|"QAA"|"RON"|"ROH"|"RUN"|"SMO"|"SAG"|"SAN"|"SRD"|"SRB"|"SNA"|"III"|"SND"|"SIN"|"SLK"|"SLV"|"SOM"|"SOT"|"SUN"|"SWA"|"SSW"|"SWE"|"TGL"|"TAH"|"TGK"|"TAM"|"TAT"|"TEL"|"THA"|"BOD"|"TIR"|"TON"|"TSO"|"TSN"|"TUR"|"TUK"|"TWI"|"UIG"|"UKR"|"UZB"|"VEN"|"VOL"|"WLN"|"CYM"|"FRY"|"WOL"|"XHO"|"YID"|"YOR"|"ZHA"|"ZUL"|"ORJ"|"QPC"|"TNG"|string;
  export interface ListJobTemplatesRequest {
    /**
     * Optionally, specify a job template category to limit responses to only job templates from that category.
     */
    Category?: __string;
    /**
     * Optional. When you request a list of job templates, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name.
     */
    ListBy?: JobTemplateListBy;
    /**
     * Optional. Number of job templates, up to twenty, that will be returned at one time.
     */
    MaxResults?: __integerMin1Max20;
    /**
     * Use this string, provided with the response to a previous request, to request the next batch of job templates.
     */
    NextToken?: __string;
    /**
     * When you request lists of resources, you can optionally specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
     */
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
    /**
     * When you request lists of resources, you can optionally specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
     */
    Order?: Order;
    /**
     * Provide a queue name to get back only jobs from that queue.
     */
    Queue?: __string;
    /**
     * A job's status can be SUBMITTED, PROGRESSING, COMPLETE, CANCELED, or ERROR.
     */
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
    /**
     * Optional. When you request a list of presets, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name.
     */
    ListBy?: PresetListBy;
    /**
     * Optional. Number of presets, up to twenty, that will be returned at one time
     */
    MaxResults?: __integerMin1Max20;
    /**
     * Use this string, provided with the response to a previous request, to request the next batch of presets.
     */
    NextToken?: __string;
    /**
     * When you request lists of resources, you can optionally specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
     */
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
    /**
     * Optional. When you request a list of queues, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by creation date.
     */
    ListBy?: QueueListBy;
    /**
     * Optional. Number of queues, up to twenty, that will be returned at one time.
     */
    MaxResults?: __integerMin1Max20;
    /**
     * Use this string, provided with the response to a previous request, to request the next batch of queues.
     */
    NextToken?: __string;
    /**
     * When you request lists of resources, you can optionally specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.
     */
    Order?: Order;
  }
  export interface ListQueuesResponse {
    /**
     * Use this string to request the next batch of queues.
     */
    NextToken?: __string;
    /**
     * List of queues.
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
    /**
     * The Amazon Resource Name (ARN) and tags for an AWS Elemental MediaConvert resource.
     */
    ResourceTags?: ResourceTags;
  }
  export type M2tsAudioBufferModel = "DVB"|"ATSC"|string;
  export type M2tsBufferModel = "MULTIPLEX"|"NONE"|string;
  export type M2tsEbpAudioInterval = "VIDEO_AND_FIXED_INTERVALS"|"VIDEO_INTERVAL"|string;
  export type M2tsEbpPlacement = "VIDEO_AND_AUDIO_PIDS"|"VIDEO_PID"|string;
  export type M2tsEsRateInPes = "INCLUDE"|"EXCLUDE"|string;
  export type M2tsForceTsVideoEbpOrder = "FORCE"|"DEFAULT"|string;
  export type M2tsNielsenId3 = "INSERT"|"NONE"|string;
  export type M2tsPcrControl = "PCR_EVERY_PES_PACKET"|"CONFIGURED_PCR_PERIOD"|string;
  export type M2tsRateMode = "VBR"|"CBR"|string;
  export interface M2tsScte35Esam {
    /**
     * Packet Identifier (PID) of the SCTE-35 stream in the transport stream generated by ESAM.
     */
    Scte35EsamPid?: __integerMin32Max8182;
  }
  export type M2tsScte35Source = "PASSTHROUGH"|"NONE"|string;
  export type M2tsSegmentationMarkers = "NONE"|"RAI_SEGSTART"|"RAI_ADAPT"|"PSI_SEGSTART"|"EBP"|"EBP_LEGACY"|string;
  export type M2tsSegmentationStyle = "MAINTAIN_CADENCE"|"RESET_CADENCE"|string;
  export interface M2tsSettings {
    /**
     * Selects between the DVB and ATSC buffer models for Dolby Digital audio.
     */
    AudioBufferModel?: M2tsAudioBufferModel;
    /**
     * The number of audio frames to insert for each PES packet.
     */
    AudioFramesPerPes?: __integerMin0Max2147483647;
    /**
     * Specify the packet identifiers (PIDs) for any elementary audio streams you include in this output. Specify multiple PIDs as a JSON array. Default is the range 482-492.
     */
    AudioPids?: __listOf__integerMin32Max8182;
    /**
     * Specify the output bitrate of the transport stream in bits per second. Setting to 0 lets the muxer automatically determine the appropriate bitrate. Other common values are 3750000, 7500000, and 15000000.
     */
    Bitrate?: __integerMin0Max2147483647;
    /**
     * Controls what buffer model to use for accurate interleaving. If set to MULTIPLEX, use multiplex  buffer model. If set to NONE, this can lead to lower latency, but low-memory devices may not be able to play back the stream without interruptions.
     */
    BufferModel?: M2tsBufferModel;
    /**
     * Inserts DVB Network Information Table (NIT) at the specified table repetition interval.
     */
    DvbNitSettings?: DvbNitSettings;
    /**
     * Inserts DVB Service Description Table (NIT) at the specified table repetition interval.
     */
    DvbSdtSettings?: DvbSdtSettings;
    /**
     * Specify the packet identifiers (PIDs) for DVB subtitle data included in this output. Specify multiple PIDs as a JSON array. Default is the range 460-479.
     */
    DvbSubPids?: __listOf__integerMin32Max8182;
    /**
     * Inserts DVB Time and Date Table (TDT) at the specified table repetition interval.
     */
    DvbTdtSettings?: DvbTdtSettings;
    /**
     * Specify the packet identifier (PID) for DVB teletext data you include in this output. Default is 499.
     */
    DvbTeletextPid?: __integerMin32Max8182;
    /**
     * When set to VIDEO_AND_FIXED_INTERVALS, audio EBP markers will be added to partitions 3 and 4. The interval between these additional markers will be fixed, and will be slightly shorter than the video EBP marker interval. When set to VIDEO_INTERVAL, these additional markers will not be inserted. Only applicable when EBP segmentation markers are is selected (segmentationMarkers is EBP or EBP_LEGACY).
     */
    EbpAudioInterval?: M2tsEbpAudioInterval;
    /**
     * Selects which PIDs to place EBP markers on. They can either be placed only on the video PID, or on both the video PID and all audio PIDs. Only applicable when EBP segmentation markers are is selected (segmentationMarkers is EBP or EBP_LEGACY).
     */
    EbpPlacement?: M2tsEbpPlacement;
    /**
     * Controls whether to include the ES Rate field in the PES header.
     */
    EsRateInPes?: M2tsEsRateInPes;
    /**
     * Keep the default value (DEFAULT) unless you know that your audio EBP markers are incorrectly appearing before your video EBP markers. To correct this problem, set this value to Force (FORCE).
     */
    ForceTsVideoEbpOrder?: M2tsForceTsVideoEbpOrder;
    /**
     * The length, in seconds, of each fragment. Only used with EBP markers.
     */
    FragmentTime?: __doubleMin0;
    /**
     * Specify the maximum time, in milliseconds, between Program Clock References (PCRs) inserted into the transport stream.
     */
    MaxPcrInterval?: __integerMin0Max500;
    /**
     * When set, enforces that Encoder Boundary Points do not come within the specified time interval of each other by looking ahead at input video. If another EBP is going to come in within the specified time interval, the current EBP is not emitted, and the segment is "stretched" to the next marker. The lookahead value does not add latency to the system. The Live Event must be configured elsewhere to create sufficient latency to make the lookahead accurate.
     */
    MinEbpInterval?: __integerMin0Max10000;
    /**
     * If INSERT, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.
     */
    NielsenId3?: M2tsNielsenId3;
    /**
     * Value in bits per second of extra null packets to insert into the transport stream. This can be used if a downstream encryption system requires periodic null packets.
     */
    NullPacketBitrate?: __doubleMin0;
    /**
     * The number of milliseconds between instances of this table in the output transport stream.
     */
    PatInterval?: __integerMin0Max1000;
    /**
     * When set to PCR_EVERY_PES_PACKET, a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This is effective only when the PCR PID is the same as the video or audio elementary stream.
     */
    PcrControl?: M2tsPcrControl;
    /**
     * Specify the packet identifier (PID) for the program clock reference (PCR) in this output. If you do not specify a value, the service will use the value for Video PID (VideoPid).
     */
    PcrPid?: __integerMin32Max8182;
    /**
     * Specify the number of milliseconds between instances of the program map table (PMT) in the output transport stream.
     */
    PmtInterval?: __integerMin0Max1000;
    /**
     * Specify the packet identifier (PID) for the program map table (PMT) itself. Default is 480.
     */
    PmtPid?: __integerMin32Max8182;
    /**
     * Specify the packet identifier (PID) of the private metadata stream. Default is 503.
     */
    PrivateMetadataPid?: __integerMin32Max8182;
    /**
     * Use Program number (programNumber) to specify the program number used in the program map table (PMT) for this output. Default is 1. Program numbers and program map tables are parts of MPEG-2 transport stream containers, used for organizing data.
     */
    ProgramNumber?: __integerMin0Max65535;
    /**
     * When set to CBR, inserts null packets into transport stream to fill specified bitrate. When set to VBR, the bitrate setting acts as the maximum bitrate, but the output will not be padded up to that bitrate.
     */
    RateMode?: M2tsRateMode;
    /**
     * Include this in your job settings to put SCTE-35 markers in your HLS and transport stream outputs at the insertion points that you specify in an ESAM XML document. Provide the document in the setting SCC XML (sccXml).
     */
    Scte35Esam?: M2tsScte35Esam;
    /**
     * Specify the packet identifier (PID) of the SCTE-35 stream in the transport stream.
     */
    Scte35Pid?: __integerMin32Max8182;
    /**
     * For SCTE-35 markers from your input-- Choose Passthrough (PASSTHROUGH) if you want SCTE-35 markers that appear in your input to also appear in this output. Choose None (NONE) if you don't want SCTE-35 markers in this output. For SCTE-35 markers from an ESAM XML document-- Choose None (NONE). Also provide the ESAM XML as a string in the setting Signal processing notification XML (sccXml). Also enable ESAM SCTE-35 (include the property scte35Esam).
     */
    Scte35Source?: M2tsScte35Source;
    /**
     * Inserts segmentation markers at each segmentation_time period. rai_segstart sets the Random Access Indicator bit in the adaptation field. rai_adapt sets the RAI bit and adds the current timecode in the private data bytes. psi_segstart inserts PAT and PMT tables at the start of segments. ebp adds Encoder Boundary Point information to the adaptation field as per OpenCable specification OC-SP-EBP-I01-130118. ebp_legacy adds Encoder Boundary Point information to the adaptation field using a legacy proprietary format.
     */
    SegmentationMarkers?: M2tsSegmentationMarkers;
    /**
     * The segmentation style parameter controls how segmentation markers are inserted into the transport stream. With avails, it is possible that segments may be truncated, which can influence where future segmentation markers are inserted. When a segmentation style of "reset_cadence" is selected and a segment is truncated due to an avail, we will reset the segmentation cadence. This means the subsequent segment will have a duration of of $segmentation_time seconds. When a segmentation style of "maintain_cadence" is selected and a segment is truncated due to an avail, we will not reset the segmentation cadence. This means the subsequent segment will likely be truncated as well. However, all segments after that will have a duration of $segmentation_time seconds. Note that EBP lookahead is a slight exception to this rule.
     */
    SegmentationStyle?: M2tsSegmentationStyle;
    /**
     * Specify the length, in seconds, of each segment. Required unless markers is set to _none_.
     */
    SegmentationTime?: __doubleMin0;
    /**
     * Specify the packet identifier (PID) for timed metadata in this output. Default is 502.
     */
    TimedMetadataPid?: __integerMin32Max8182;
    /**
     * Specify the ID for the transport stream itself in the program map table for this output. Transport stream IDs and program map tables are parts of MPEG-2 transport stream containers, used for organizing data.
     */
    TransportStreamId?: __integerMin0Max65535;
    /**
     * Specify the packet identifier (PID) of the elementary video stream in the transport stream.
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
    /**
     * If INSERT, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.
     */
    NielsenId3?: M3u8NielsenId3;
    /**
     * The number of milliseconds between instances of this table in the output transport stream.
     */
    PatInterval?: __integerMin0Max1000;
    /**
     * When set to PCR_EVERY_PES_PACKET a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This parameter is effective only when the PCR PID is the same as the video or audio elementary stream.
     */
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
    /**
     * For SCTE-35 markers from your input-- Choose Passthrough (PASSTHROUGH) if you want SCTE-35 markers that appear in your input to also appear in this output. Choose None (NONE) if you don't want SCTE-35 markers in this output. For SCTE-35 markers from an ESAM XML document-- Choose None (NONE) if you don't want manifest conditioning. Choose Passthrough (PASSTHROUGH) and choose Ad markers (adMarkers) if you do want manifest conditioning. In both cases, also provide the ESAM XML as a string in the setting Signal processing notification XML (sccXml).
     */
    Scte35Source?: M3u8Scte35Source;
    /**
     * Applies only to HLS outputs. Use this setting to specify whether the service inserts the ID3 timed metadata from the input in this output.
     */
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
  export interface MotionImageInserter {
    /**
     * If your motion graphic asset is a .mov file, keep this setting unspecified. If your motion graphic asset is a series of .png files, specify the frame rate of the overlay in frames per second, as a fraction. For example, specify 24 fps as 24/1. Make sure that the number of images in your series matches the frame rate and your intended overlay duration. For example, if you want a 30-second overlay at 30 fps, you should have 900 .png images. This overlay frame rate doesn't need to match the frame rate of the underlying video.
     */
    Framerate?: MotionImageInsertionFramerate;
    /**
     * Specify the .mov file or series of .png files that you want to overlay on your video. For .png files, provide the file name of the first file in the series. Make sure that the names of the .png files end with sequential numbers that specify the order that they are played in. For example, overlay_000.png, overlay_001.png, overlay_002.png, and so on. The sequence must start at zero, and each image file name must have the same number of digits. Pad your initial file names with enough zeros to complete the sequence. For example, if the first image is overlay_0.png, there can be only 10 images in the sequence, with the last image being overlay_9.png. But if the first image is overlay_00.png, there can be 100 images in the sequence.
     */
    Input?: __stringMin14Max1285PatternHttpHttpsS3Mov09Png;
    /**
     * Choose the type of motion graphic asset that you are providing for your overlay. You can choose either a .mov file or a series of .png files.
     */
    InsertionMode?: MotionImageInsertionMode;
    /**
     * Use Offset to specify the placement of your motion graphic overlay on the video frame. Specify in pixels, from the upper-left corner of the frame. If you don't specify an offset, the service scales your overlay to the full size of the frame. Otherwise, the service inserts the overlay at its native resolution and scales the size up or down with any video scaling.
     */
    Offset?: MotionImageInsertionOffset;
    /**
     * Specify whether your motion graphic overlay repeats on a loop or plays only once.
     */
    Playback?: MotionImagePlayback;
    /**
     * Specify when the motion overlay begins. Use timecode format (HH:MM:SS:FF or HH:MM:SS;FF). Make sure that the timecode you provide here takes into account how you have set up your timecode configuration under both job settings and input settings. The simplest way to do that is to set both to start at 0. If you need to set up your job to follow timecodes embedded in your source that don't start at zero, make sure that you specify a start time that is after the first embedded timecode. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/setting-up-timecode.html Find job-wide and input timecode configuration settings in your JSON job settings specification at settings>timecodeConfig>source and settings>inputs>timecodeSource.
     */
    StartTime?: __stringMin11Max11Pattern01D20305D205D;
  }
  export interface MotionImageInsertionFramerate {
    /**
     * The bottom of the fraction that expresses your overlay frame rate. For example, if your frame rate is 24 fps, set this value to 1.
     */
    FramerateDenominator?: __integerMin1Max17895697;
    /**
     * The top of the fraction that expresses your overlay frame rate. For example, if your frame rate is 24 fps, set this value to 24.
     */
    FramerateNumerator?: __integerMin1Max2147483640;
  }
  export type MotionImageInsertionMode = "MOV"|"PNG"|string;
  export interface MotionImageInsertionOffset {
    /**
     * Set the distance, in pixels, between the overlay and the left edge of the video frame.
     */
    ImageX?: __integerMin0Max2147483647;
    /**
     * Set the distance, in pixels, between the overlay and the top edge of the video frame.
     */
    ImageY?: __integerMin0Max2147483647;
  }
  export type MotionImagePlayback = "ONCE"|"REPEAT"|string;
  export type MovClapAtom = "INCLUDE"|"EXCLUDE"|string;
  export type MovCslgAtom = "INCLUDE"|"EXCLUDE"|string;
  export type MovMpeg2FourCCControl = "XDCAM"|"MPEG"|string;
  export type MovPaddingControl = "OMNEON"|"NONE"|string;
  export type MovReference = "SELF_CONTAINED"|"EXTERNAL"|string;
  export interface MovSettings {
    /**
     * When enabled, include 'clap' atom if appropriate for the video output settings.
     */
    ClapAtom?: MovClapAtom;
    /**
     * When enabled, file composition times will start at zero, composition times in the 'ctts' (composition time to sample) box for B-frames will be negative, and a 'cslg' (composition shift least greatest) box will be included per 14496-1 amendment 1. This improves compatibility with Apple players and tools.
     */
    CslgAtom?: MovCslgAtom;
    /**
     * When set to XDCAM, writes MPEG2 video streams into the QuickTime file using XDCAM fourcc codes. This increases compatibility with Apple editors and players, but may decrease compatibility with other players. Only applicable when the video codec is MPEG2.
     */
    Mpeg2FourCCControl?: MovMpeg2FourCCControl;
    /**
     * If set to OMNEON, inserts Omneon-compatible padding
     */
    PaddingControl?: MovPaddingControl;
    /**
     * Always keep the default value (SELF_CONTAINED) for this setting.
     */
    Reference?: MovReference;
  }
  export interface Mp2Settings {
    /**
     * Specify the average bitrate in bits per second.
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
    /**
     * When enabled, file composition times will start at zero, composition times in the 'ctts' (composition time to sample) box for B-frames will be negative, and a 'cslg' (composition shift least greatest) box will be included per 14496-1 amendment 1. This improves compatibility with Apple players and tools.
     */
    CslgAtom?: Mp4CslgAtom;
    /**
     * Inserts a free-space box immediately after the moov box.
     */
    FreeSpaceBox?: Mp4FreeSpaceBox;
    /**
     * If set to PROGRESSIVE_DOWNLOAD, the MOOV atom is relocated to the beginning of the archive as required for progressive downloading. Otherwise it is placed normally at the end.
     */
    MoovPlacement?: Mp4MoovPlacement;
    /**
     * Overrides the "Major Brand" field in the output file. Usually not necessary to specify.
     */
    Mp4MajorBrand?: __string;
  }
  export type Mpeg2AdaptiveQuantization = "OFF"|"LOW"|"MEDIUM"|"HIGH"|string;
  export type Mpeg2CodecLevel = "AUTO"|"LOW"|"MAIN"|"HIGH1440"|"HIGH"|string;
  export type Mpeg2CodecProfile = "MAIN"|"PROFILE_422"|string;
  export type Mpeg2DynamicSubGop = "ADAPTIVE"|"STATIC"|string;
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
    /**
     * Adaptive quantization. Allows intra-frame quantizers to vary to improve visual quality.
     */
    AdaptiveQuantization?: Mpeg2AdaptiveQuantization;
    /**
     * Specify the average bitrate in bits per second. Required for VBR and CBR. For MS Smooth outputs, bitrates must be unique when rounded down to the nearest multiple of 1000.
     */
    Bitrate?: __integerMin1000Max288000000;
    /**
     * Use Level (Mpeg2CodecLevel) to set the MPEG-2 level for the video output.
     */
    CodecLevel?: Mpeg2CodecLevel;
    /**
     * Use Profile (Mpeg2CodecProfile) to set the MPEG-2 profile for the video output.
     */
    CodecProfile?: Mpeg2CodecProfile;
    /**
     * Choose Adaptive to improve subjective video quality for high-motion content. This will cause the service to use fewer B-frames (which infer information based on other frames) for high-motion portions of the video and more B-frames for low-motion portions. The maximum number of B-frames is limited by the value you provide for the setting B frames between reference frames (numberBFramesBetweenReferenceFrames).
     */
    DynamicSubGop?: Mpeg2DynamicSubGop;
    /**
     * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job sepecification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.
     */
    FramerateControl?: Mpeg2FramerateControl;
    /**
     * When set to INTERPOLATE, produces smoother motion during frame rate conversion.
     */
    FramerateConversionAlgorithm?: Mpeg2FramerateConversionAlgorithm;
    /**
     * Frame rate denominator.
     */
    FramerateDenominator?: __integerMin1Max1001;
    /**
     * Frame rate numerator - frame rate is a fraction, e.g. 24000 / 1001 = 23.976 fps.
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
    /**
     * Indicates if the GOP Size in MPEG2 is specified in frames or seconds. If seconds the system will convert the GOP Size into a frame count at run time.
     */
    GopSizeUnits?: Mpeg2GopSizeUnits;
    /**
     * Percentage of the buffer that should initially be filled (HRD buffer model).
     */
    HrdBufferInitialFillPercentage?: __integerMin0Max100;
    /**
     * Size of buffer (HRD buffer model) in bits. For example, enter five megabits as 5000000.
     */
    HrdBufferSize?: __integerMin0Max47185920;
    /**
     * Use Interlace mode (InterlaceMode) to choose the scan line type for the output. * Top Field First (TOP_FIELD) and Bottom Field First (BOTTOM_FIELD) produce interlaced output with the entire output having the same field polarity (top or bottom first). * Follow, Default Top (FOLLOW_TOP_FIELD) and Follow, Default Bottom (FOLLOW_BOTTOM_FIELD) use the same field polarity as the source. Therefore, behavior depends on the input scan type.
  - If the source is interlaced, the output will be interlaced with the same polarity as the source (it will follow the source). The output could therefore be a mix of "top field first" and "bottom field first".
  - If the source is progressive, the output will be interlaced with "top field first" or "bottom field first" polarity, depending on which of the Follow options you chose.
     */
    InterlaceMode?: Mpeg2InterlaceMode;
    /**
     * Use Intra DC precision (Mpeg2IntraDcPrecision) to set quantization precision for intra-block DC coefficients. If you choose the value auto, the service will automatically select the precision based on the per-frame compression ratio.
     */
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
    /**
     * Using the API, enable ParFollowSource if you want the service to use the pixel aspect ratio from the input. Using the console, do this by choosing Follow source for Pixel aspect ratio.
     */
    ParControl?: Mpeg2ParControl;
    /**
     * Pixel Aspect Ratio denominator.
     */
    ParDenominator?: __integerMin1Max2147483647;
    /**
     * Pixel Aspect Ratio numerator.
     */
    ParNumerator?: __integerMin1Max2147483647;
    /**
     * Use Quality tuning level (Mpeg2QualityTuningLevel) to specifiy whether to use single-pass or multipass video encoding.
     */
    QualityTuningLevel?: Mpeg2QualityTuningLevel;
    /**
     * Use Rate control mode (Mpeg2RateControlMode) to specifiy whether the bitrate is variable (vbr) or constant (cbr).
     */
    RateControlMode?: Mpeg2RateControlMode;
    /**
     * Enable this setting to insert I-frames at scene changes that the service automatically detects. This improves video quality and is enabled by default.
     */
    SceneChangeDetect?: Mpeg2SceneChangeDetect;
    /**
     * Enables Slow PAL rate conversion. 23.976fps and 24fps input is relabeled as 25fps, and audio is sped up correspondingly.
     */
    SlowPal?: Mpeg2SlowPal;
    /**
     * Softness. Selects quantizer matrix, larger values reduce high-frequency content in the encoded image.
     */
    Softness?: __integerMin0Max128;
    /**
     * Adjust quantization within each frame based on spatial variation of content complexity.
     */
    SpatialAdaptiveQuantization?: Mpeg2SpatialAdaptiveQuantization;
    /**
     * Produces a Type D-10 compatible bitstream (SMPTE 356M-2001).
     */
    Syntax?: Mpeg2Syntax;
    /**
     * Only use Telecine (Mpeg2Telecine) when you set Framerate (Framerate) to 29.970. Set Telecine (Mpeg2Telecine) to Hard (hard) to produce a 29.97i output from a 23.976 input. Set it to Soft (soft) to produce 23.976 output and leave converstion to the player.
     */
    Telecine?: Mpeg2Telecine;
    /**
     * Adjust quantization within each frame based on temporal variation of content complexity.
     */
    TemporalAdaptiveQuantization?: Mpeg2TemporalAdaptiveQuantization;
  }
  export type Mpeg2SlowPal = "DISABLED"|"ENABLED"|string;
  export type Mpeg2SpatialAdaptiveQuantization = "DISABLED"|"ENABLED"|string;
  export type Mpeg2Syntax = "DEFAULT"|"D_10"|string;
  export type Mpeg2Telecine = "NONE"|"SOFT"|"HARD"|string;
  export type Mpeg2TemporalAdaptiveQuantization = "DISABLED"|"ENABLED"|string;
  export type MsSmoothAudioDeduplication = "COMBINE_DUPLICATE_STREAMS"|"NONE"|string;
  export interface MsSmoothEncryptionSettings {
    /**
     * If your output group type is HLS, DASH, or Microsoft Smooth, use these settings when doing DRM encryption with a SPEKE-compliant key provider.  If your output group type is CMAF, use the SpekeKeyProviderCmaf settings instead.
     */
    SpekeKeyProvider?: SpekeKeyProvider;
  }
  export interface MsSmoothGroupSettings {
    /**
     * COMBINE_DUPLICATE_STREAMS combines identical audio encoding settings across a Microsoft Smooth output group into a single audio stream.
     */
    AudioDeduplication?: MsSmoothAudioDeduplication;
    /**
     * Use Destination (Destination) to specify the S3 output location and the output filename base. Destination accepts format identifiers. If you do not specify the base filename in the URI, the service will use the filename of the input file. If your job has multiple inputs, the service uses the filename of the first input file.
     */
    Destination?: __stringPatternS3;
    /**
     * Settings associated with the destination. Will vary based on the type of destination
     */
    DestinationSettings?: DestinationSettings;
    /**
     * If you are using DRM, set DRM System (MsSmoothEncryptionSettings) to specify the value SpekeKeyProvider.
     */
    Encryption?: MsSmoothEncryptionSettings;
    /**
     * Use Fragment length (FragmentLength) to specify the mp4 fragment sizes in seconds. Fragment length must be compatible with GOP size and frame rate.
     */
    FragmentLength?: __integerMin1Max2147483647;
    /**
     * Use Manifest encoding (MsSmoothManifestEncoding) to specify the encoding format for the server and client manifest. Valid options are utf8 and utf16.
     */
    ManifestEncoding?: MsSmoothManifestEncoding;
  }
  export type MsSmoothManifestEncoding = "UTF8"|"UTF16"|string;
  export interface NielsenConfiguration {
    /**
     * Nielsen has discontinued the use of breakout code functionality. If you must include this property, set the value to zero.
     */
    BreakoutCode?: __integerMin0Max0;
    /**
     * Use Distributor ID (DistributorID) to specify the distributor ID that is assigned to your organization by Neilsen.
     */
    DistributorId?: __string;
  }
  export interface NoiseReducer {
    /**
     * Use Noise reducer filter (NoiseReducerFilter) to select one of the following spatial image filtering functions. To use this setting, you must also enable Noise reducer (NoiseReducer). * Bilateral preserves edges while reducing noise. * Mean (softest), Gaussian, Lanczos, and Sharpen (sharpest) do convolution filtering. * Conserve does min/max noise reduction. * Spatial does frequency-domain filtering based on JND principles. * Temporal optimizes video quality for complex motion.
     */
    Filter?: NoiseReducerFilter;
    /**
     * Settings for a noise reducer filter
     */
    FilterSettings?: NoiseReducerFilterSettings;
    /**
     * Noise reducer filter settings for spatial filter.
     */
    SpatialFilterSettings?: NoiseReducerSpatialFilterSettings;
    /**
     * Noise reducer filter settings for temporal filter.
     */
    TemporalFilterSettings?: NoiseReducerTemporalFilterSettings;
  }
  export type NoiseReducerFilter = "BILATERAL"|"MEAN"|"GAUSSIAN"|"LANCZOS"|"SHARPEN"|"CONSERVE"|"SPATIAL"|"TEMPORAL"|string;
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
  export interface NoiseReducerTemporalFilterSettings {
    /**
     * Use Aggressive mode for content that has complex motion. Higher values produce stronger temporal filtering. This filters highly complex scenes more aggressively and creates better VQ for low bitrate outputs.
     */
    AggressiveMode?: __integerMin0Max4;
    /**
     * The speed of the filter (higher number is faster). Low setting reduces bit rate at the cost of transcode time, high setting improves transcode time at the cost of bit rate.
     */
    Speed?: __integerMinNegative1Max3;
    /**
     * Specify the strength of the noise reducing filter on this output. Higher values produce stronger filtering. We recommend the following value ranges, depending on the result that you want: * 0-2 for complexity reduction with minimal sharpness loss * 2-8 for complexity reduction with image preservation * 8-16 for a high level of complexity reduction
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
    /**
     * Container specific settings.
     */
    ContainerSettings?: ContainerSettings;
    /**
     * Use Extension (Extension) to specify the file extension for outputs in File output groups. If you do not specify a value, the service will use default extensions by container type as follows * MPEG-2 transport stream, m2ts * Quicktime, mov * MXF container, mxf * MPEG-4 container, mp4 * No Container, the service will use codec extensions (e.g. AAC, H265, H265, AC3)
     */
    Extension?: __string;
    /**
     * Use Name modifier (NameModifier) to have the service add a string to the end of each output filename. You specify the base filename as part of your destination URI. When you create multiple outputs in the same output group, Name modifier (NameModifier) is required. Name modifier also accepts format identifiers. For DASH ISO outputs, if you use the format identifiers $Number$ or $Time$ in one output, you must use them in the same way in all outputs of the output group.
     */
    NameModifier?: __stringMin1;
    /**
     * Specific settings for this type of output.
     */
    OutputSettings?: OutputSettings;
    /**
     * Use Preset (Preset) to specifiy a preset for your transcoding settings. Provide the system or custom preset name. You can specify either Preset (Preset) or Container settings (ContainerSettings), but not both.
     */
    Preset?: __stringMin0;
    /**
     * (VideoDescription) contains a group of video encoding settings. The specific video settings depend on the video codec that you choose when you specify a value for Video codec (codec). Include one instance of (VideoDescription) per output.
     */
    VideoDescription?: VideoDescription;
  }
  export interface OutputChannelMapping {
    /**
     * List of input channels
     */
    InputChannels?: __listOf__integerMinNegative60Max6;
  }
  export interface OutputDetail {
    /**
     * Duration in milliseconds
     */
    DurationInMs?: __integer;
    /**
     * Contains details about the output's video stream
     */
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
    /**
     * Output Group settings, including type
     */
    OutputGroupSettings?: OutputGroupSettings;
    /**
     * This object holds groups of encoding settings, one group of settings per output.
     */
    Outputs?: __listOfOutput;
  }
  export interface OutputGroupDetail {
    /**
     * Details about the output
     */
    OutputDetails?: __listOfOutputDetail;
  }
  export interface OutputGroupSettings {
    /**
     * Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to CMAF_GROUP_SETTINGS. Each output in a CMAF Output Group may only contain a single video, audio, or caption output.
     */
    CmafGroupSettings?: CmafGroupSettings;
    /**
     * Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to DASH_ISO_GROUP_SETTINGS.
     */
    DashIsoGroupSettings?: DashIsoGroupSettings;
    /**
     * Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to FILE_GROUP_SETTINGS.
     */
    FileGroupSettings?: FileGroupSettings;
    /**
     * Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to HLS_GROUP_SETTINGS.
     */
    HlsGroupSettings?: HlsGroupSettings;
    /**
     * Required when you set (Type) under (OutputGroups)>(OutputGroupSettings) to MS_SMOOTH_GROUP_SETTINGS.
     */
    MsSmoothGroupSettings?: MsSmoothGroupSettings;
    /**
     * Type of output group (File group, Apple HLS, DASH ISO, Microsoft Smooth Streaming, CMAF)
     */
    Type?: OutputGroupType;
  }
  export type OutputGroupType = "HLS_GROUP_SETTINGS"|"DASH_ISO_GROUP_SETTINGS"|"FILE_GROUP_SETTINGS"|"MS_SMOOTH_GROUP_SETTINGS"|"CMAF_GROUP_SETTINGS"|string;
  export type OutputSdt = "SDT_FOLLOW"|"SDT_FOLLOW_IF_PRESENT"|"SDT_MANUAL"|"SDT_NONE"|string;
  export interface OutputSettings {
    /**
     * Settings for HLS output groups
     */
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
    /**
     * Settings for preset
     */
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
    /**
     * Container specific settings.
     */
    ContainerSettings?: ContainerSettings;
    /**
     * (VideoDescription) contains a group of video encoding settings. The specific video settings depend on the video codec that you choose when you specify a value for Video codec (codec). Include one instance of (VideoDescription) per output.
     */
    VideoDescription?: VideoDescription;
  }
  export type PricingPlan = "ON_DEMAND"|"RESERVED"|string;
  export type ProresCodecProfile = "APPLE_PRORES_422"|"APPLE_PRORES_422_HQ"|"APPLE_PRORES_422_LT"|"APPLE_PRORES_422_PROXY"|string;
  export type ProresFramerateControl = "INITIALIZE_FROM_SOURCE"|"SPECIFIED"|string;
  export type ProresFramerateConversionAlgorithm = "DUPLICATE_DROP"|"INTERPOLATE"|string;
  export type ProresInterlaceMode = "PROGRESSIVE"|"TOP_FIELD"|"BOTTOM_FIELD"|"FOLLOW_TOP_FIELD"|"FOLLOW_BOTTOM_FIELD"|string;
  export type ProresParControl = "INITIALIZE_FROM_SOURCE"|"SPECIFIED"|string;
  export interface ProresSettings {
    /**
     * Use Profile (ProResCodecProfile) to specifiy the type of Apple ProRes codec to use for this output.
     */
    CodecProfile?: ProresCodecProfile;
    /**
     * If you are using the console, use the Framerate setting to specify the frame rate for this output. If you want to keep the same frame rate as the input video, choose Follow source. If you want to do frame rate conversion, choose a frame rate from the dropdown list or choose Custom. The framerates shown in the dropdown list are decimal approximations of fractions. If you choose Custom, specify your frame rate as a fraction. If you are creating your transcoding job sepecification as a JSON file without the console, use FramerateControl to specify which value the service uses for the frame rate for this output. Choose INITIALIZE_FROM_SOURCE if you want the service to use the frame rate from the input. Choose SPECIFIED if you want the service to use the frame rate you specify in the settings FramerateNumerator and FramerateDenominator.
     */
    FramerateControl?: ProresFramerateControl;
    /**
     * When set to INTERPOLATE, produces smoother motion during frame rate conversion.
     */
    FramerateConversionAlgorithm?: ProresFramerateConversionAlgorithm;
    /**
     * Frame rate denominator.
     */
    FramerateDenominator?: __integerMin1Max2147483647;
    /**
     * When you use the API for transcode jobs that use frame rate conversion, specify the frame rate as a fraction. For example,  24000 / 1001 = 23.976 fps. Use FramerateNumerator to specify the numerator of this fraction. In this example, use 24000 for the value of FramerateNumerator.
     */
    FramerateNumerator?: __integerMin1Max2147483647;
    /**
     * Use Interlace mode (InterlaceMode) to choose the scan line type for the output. * Top Field First (TOP_FIELD) and Bottom Field First (BOTTOM_FIELD) produce interlaced output with the entire output having the same field polarity (top or bottom first). * Follow, Default Top (FOLLOW_TOP_FIELD) and Follow, Default Bottom (FOLLOW_BOTTOM_FIELD) use the same field polarity as the source. Therefore, behavior depends on the input scan type.
  - If the source is interlaced, the output will be interlaced with the same polarity as the source (it will follow the source). The output could therefore be a mix of "top field first" and "bottom field first".
  - If the source is progressive, the output will be interlaced with "top field first" or "bottom field first" polarity, depending on which of the Follow options you chose.
     */
    InterlaceMode?: ProresInterlaceMode;
    /**
     * Use (ProresParControl) to specify how the service determines the pixel aspect ratio. Set to Follow source (INITIALIZE_FROM_SOURCE) to use the pixel aspect ratio from the input.  To specify a different pixel aspect ratio: Using the console, choose it from the dropdown menu. Using the API, set ProresParControl to (SPECIFIED) and provide  for (ParNumerator) and (ParDenominator).
     */
    ParControl?: ProresParControl;
    /**
     * Pixel Aspect Ratio denominator.
     */
    ParDenominator?: __integerMin1Max2147483647;
    /**
     * Pixel Aspect Ratio numerator.
     */
    ParNumerator?: __integerMin1Max2147483647;
    /**
     * Enables Slow PAL rate conversion. 23.976fps and 24fps input is relabeled as 25fps, and audio is sped up correspondingly.
     */
    SlowPal?: ProresSlowPal;
    /**
     * Only use Telecine (ProresTelecine) when you set Framerate (Framerate) to 29.970. Set Telecine (ProresTelecine) to Hard (hard) to produce a 29.97i output from a 23.976 input. Set it to Soft (soft) to produce 23.976 output and leave converstion to the player.
     */
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
     * The timestamp in epoch seconds for when you created the queue.
     */
    CreatedAt?: __timestampUnix;
    /**
     * An optional description that you create for each queue.
     */
    Description?: __string;
    /**
     * The timestamp in epoch seconds for when you most recently updated the queue.
     */
    LastUpdated?: __timestampUnix;
    /**
     * A name that you create for each queue. Each name must be unique within your account.
     */
    Name: __string;
    /**
     * Specifies whether the pricing plan for the queue is on-demand or reserved. For on-demand, you pay per minute, billed in increments of .01 minute. For reserved, you pay for the transcoding capacity of the entire queue, regardless of how much or how little you use it. Reserved pricing requires a 12-month commitment.
     */
    PricingPlan?: PricingPlan;
    /**
     * The estimated number of jobs with a PROGRESSING status.
     */
    ProgressingJobsCount?: __integer;
    /**
     * Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.
     */
    ReservationPlan?: ReservationPlan;
    /**
     * Queues can be ACTIVE or PAUSED. If you pause a queue, the service won't begin processing jobs in that queue. Jobs that are running when you pause the queue continue to run until they finish or result in an error.
     */
    Status?: QueueStatus;
    /**
     * The estimated number of jobs with a SUBMITTED status.
     */
    SubmittedJobsCount?: __integer;
    /**
     * Specifies whether this on-demand queue is system or custom. System queues are built in. You can't modify or delete system queues. You can create and modify custom queues.
     */
    Type?: Type;
  }
  export type QueueListBy = "NAME"|"CREATION_DATE"|string;
  export type QueueStatus = "ACTIVE"|"PAUSED"|string;
  export interface Rectangle {
    /**
     * Height of rectangle in pixels. Specify only even numbers.
     */
    Height?: __integerMin2Max2147483647;
    /**
     * Width of rectangle in pixels. Specify only even numbers.
     */
    Width?: __integerMin2Max2147483647;
    /**
     * The distance, in pixels, between the rectangle and the left edge of the video frame. Specify only even numbers.
     */
    X?: __integerMin0Max2147483647;
    /**
     * The distance, in pixels, between the rectangle and the top edge of the video frame. Specify only even numbers.
     */
    Y?: __integerMin0Max2147483647;
  }
  export interface RemixSettings {
    /**
     * Channel mapping (ChannelMapping) contains the group of fields that hold the remixing value for each channel. Units are in dB. Acceptable values are within the range from -60 (mute) through 6. A setting of 0 passes the input channel unchanged to the output channel (no attenuation or amplification).
     */
    ChannelMapping?: ChannelMapping;
    /**
     * Specify the number of audio channels from your input that you want to use in your output. With remixing, you might combine or split the data in these channels, so the number of channels in your final output might be different.
     */
    ChannelsIn?: __integerMin1Max64;
    /**
     * Specify the number of channels in this output after remixing. Valid values: 1, 2, 4, 6, 8... 64. (1 and even numbers to 64.)
     */
    ChannelsOut?: __integerMin1Max64;
  }
  export type RenewalType = "AUTO_RENEW"|"EXPIRE"|string;
  export interface ReservationPlan {
    /**
     * The length of the term of your reserved queue pricing plan commitment.
     */
    Commitment?: Commitment;
    /**
     * The timestamp in epoch seconds for when the current pricing plan term for this reserved queue expires.
     */
    ExpiresAt?: __timestampUnix;
    /**
     * The timestamp in epoch seconds for when you set up the current pricing plan for this reserved queue.
     */
    PurchasedAt?: __timestampUnix;
    /**
     * Specifies whether the term of your reserved queue pricing plan is automatically extended (AUTO_RENEW) or expires (EXPIRE) at the end of the term.
     */
    RenewalType?: RenewalType;
    /**
     * Specifies the number of reserved transcode slots (RTS) for this queue. The number of RTS determines how many jobs the queue can process in parallel; each RTS can process one job at a time. When you increase this number, you extend your existing commitment with a new 12-month commitment for a larger number of RTS. The new commitment begins when you purchase the additional capacity. You can't decrease the number of RTS in your reserved queue.
     */
    ReservedSlots?: __integer;
    /**
     * Specifies whether the pricing plan for your reserved queue is ACTIVE or EXPIRED.
     */
    Status?: ReservationPlanStatus;
  }
  export interface ReservationPlanSettings {
    /**
     * The length of the term of your reserved queue pricing plan commitment.
     */
    Commitment: Commitment;
    /**
     * Specifies whether the term of your reserved queue pricing plan is automatically extended (AUTO_RENEW) or expires (EXPIRE) at the end of the term. When your term is auto renewed, you extend your commitment by 12 months from the auto renew date. You can cancel this commitment.
     */
    RenewalType: RenewalType;
    /**
     * Specifies the number of reserved transcode slots (RTS) for this queue. The number of RTS determines how many jobs the queue can process in parallel; each RTS can process one job at a time. You can't decrease the number of RTS in your reserved queue. You can increase the number of RTS by extending your existing commitment with a new 12-month commitment for the larger number. The new commitment begins when you purchase the additional capacity. You can't cancel your commitment or revert to your original commitment after you increase the capacity.
     */
    ReservedSlots: __integer;
  }
  export type ReservationPlanStatus = "ACTIVE"|"EXPIRED"|string;
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
  export interface S3DestinationSettings {
    /**
     * Settings for how your job outputs are encrypted as they are uploaded to Amazon S3.
     */
    Encryption?: S3EncryptionSettings;
  }
  export interface S3EncryptionSettings {
    /**
     * Specify how you want your data keys managed. AWS uses data keys to encrypt your content. AWS also encrypts the data keys themselves, using a customer master key (CMK), and then stores the encrypted data keys alongside your encrypted content. Use this setting to specify which AWS service manages the CMK. For simplest set up, choose Amazon S3 (SERVER_SIDE_ENCRYPTION_S3). If you want your master key to be managed by AWS Key Management Service (KMS), choose AWS KMS (SERVER_SIDE_ENCRYPTION_KMS). By default, when you choose AWS KMS, KMS uses the AWS managed customer master key (CMK) associated with Amazon S3 to encrypt your data keys. You can optionally choose to specify a different, customer managed CMK. Do so by specifying the Amazon Resource Name (ARN) of the key for the setting  KMS ARN (kmsKeyArn).
     */
    EncryptionType?: S3ServerSideEncryptionType;
    /**
     * Optionally, specify the customer master key (CMK) that you want to use to encrypt the data key that AWS uses to encrypt your output content. Enter the Amazon Resource Name (ARN) of the CMK. To use this setting, you must also set Server-side encryption (S3ServerSideEncryptionType) to AWS KMS (SERVER_SIDE_ENCRYPTION_KMS). If you set Server-side encryption to AWS KMS but don't specify a CMK here, AWS uses the AWS managed CMK associated with Amazon S3.
     */
    KmsKeyArn?: __stringPatternArnAwsUsGovCnKmsAZ26EastWestCentralNorthSouthEastWest1912D12KeyAFAF098AFAF094AFAF094AFAF094AFAF0912;
  }
  export type S3ServerSideEncryptionType = "SERVER_SIDE_ENCRYPTION_S3"|"SERVER_SIDE_ENCRYPTION_KMS"|string;
  export type ScalingBehavior = "DEFAULT"|"STRETCH_TO_OUTPUT"|string;
  export type SccDestinationFramerate = "FRAMERATE_23_97"|"FRAMERATE_24"|"FRAMERATE_29_97_DROPFRAME"|"FRAMERATE_29_97_NON_DROPFRAME"|string;
  export interface SccDestinationSettings {
    /**
     * Set Framerate (SccDestinationFramerate) to make sure that the captions and the video are synchronized in the output. Specify a frame rate that matches the frame rate of the associated video. If the video frame rate is 29.97, choose 29.97 dropframe (FRAMERATE_29_97_DROPFRAME) only if the video has video_insertion=true and drop_frame_timecode=true; otherwise, choose 29.97 non-dropframe (FRAMERATE_29_97_NON_DROPFRAME).
     */
    Framerate?: SccDestinationFramerate;
  }
  export type SimulateReservedQueue = "DISABLED"|"ENABLED"|string;
  export interface SpekeKeyProvider {
    /**
     * If you want your key provider to encrypt the content keys that it provides to MediaConvert, set up a certificate with a master key using AWS Certificate Manager. Specify the certificate's Amazon Resource Name (ARN) here.
     */
    CertificateArn?: __stringPatternArnAwsUsGovAcm;
    /**
     * Specify the resource ID that your SPEKE-compliant key provider uses to identify this content.
     */
    ResourceId?: __string;
    /**
     * Relates to SPEKE implementation. DRM system identifiers. DASH output groups support a max of two system ids. Other group types support one system id. See
 https://dashif.org/identifiers/content_protection/ for more details.
     */
    SystemIds?: __listOf__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12;
    /**
     * Specify the URL to the key server that your SPEKE-compliant DRM key provider uses to provide keys for encrypting your content.
     */
    Url?: __stringPatternHttps;
  }
  export interface SpekeKeyProviderCmaf {
    /**
     * If you want your key provider to encrypt the content keys that it provides to MediaConvert, set up a certificate with a master key using AWS Certificate Manager. Specify the certificate's Amazon Resource Name (ARN) here.
     */
    CertificateArn?: __stringPatternArnAwsUsGovAcm;
    /**
     * Specify the DRM system IDs that you want signaled in the DASH manifest that MediaConvert creates as part of this CMAF package. The DASH manifest can currently signal up to three system IDs. For more information, see https://dashif.org/identifiers/content_protection/.
     */
    DashSignaledSystemIds?: __listOf__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12;
    /**
     * Specify the DRM system ID that you want signaled in the HLS manifest that MediaConvert creates as part of this CMAF package. The HLS manifest can currently signal only one system ID. For more information, see https://dashif.org/identifiers/content_protection/.
     */
    HlsSignaledSystemIds?: __listOf__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12;
    /**
     * Specify the resource ID that your SPEKE-compliant key provider uses to identify this content.
     */
    ResourceId?: __stringPatternW;
    /**
     * Specify the URL to the key server that your SPEKE-compliant DRM key provider uses to provide keys for encrypting your content.
     */
    Url?: __stringPatternHttps;
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
    StaticKeyValue?: __stringPatternAZaZ0932;
    /**
     * Relates to DRM implementation. The location of the license server used for protecting content.
     */
    Url?: __string;
  }
  export type StatusUpdateInterval = "SECONDS_10"|"SECONDS_12"|"SECONDS_15"|"SECONDS_20"|"SECONDS_30"|"SECONDS_60"|"SECONDS_120"|"SECONDS_180"|"SECONDS_240"|"SECONDS_300"|"SECONDS_360"|"SECONDS_420"|"SECONDS_480"|"SECONDS_540"|"SECONDS_600"|string;
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
    /**
     * Specify the page types for this Teletext page. If you don't specify a value here, the service sets the page type to the default value Subtitle (PAGE_TYPE_SUBTITLE). If you pass through the entire set of Teletext data, don't use this field. When you pass through a set of Teletext pages, your output has the same page types as your input.
     */
    PageTypes?: __listOfTeletextPageType;
  }
  export type TeletextPageType = "PAGE_TYPE_INITIAL"|"PAGE_TYPE_SUBTITLE"|"PAGE_TYPE_ADDL_INFO"|"PAGE_TYPE_PROGRAM_SCHEDULE"|"PAGE_TYPE_HEARING_IMPAIRED_SUBTITLE"|string;
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
    /**
     * Use Position (Position) under under Timecode burn-in (TimecodeBurnIn) to specify the location the burned-in timecode on output video.
     */
    Position?: TimecodeBurninPosition;
    /**
     * Use Prefix (Prefix) to place ASCII characters before any burned-in timecode. For example, a prefix of "EZ-" will result in the timecode "EZ-00:00:00:00". Provide either the characters themselves or the ASCII code equivalents. The supported range of characters is 0x20 through 0x7e. This includes letters, numbers, and all special characters represented on a standard English keyboard.
     */
    Prefix?: __stringPattern;
  }
  export type TimecodeBurninPosition = "TOP_CENTER"|"TOP_LEFT"|"TOP_RIGHT"|"MIDDLE_LEFT"|"MIDDLE_CENTER"|"MIDDLE_RIGHT"|"BOTTOM_LEFT"|"BOTTOM_CENTER"|"BOTTOM_RIGHT"|string;
  export interface TimecodeConfig {
    /**
     * If you use an editing platform that relies on an anchor timecode, use Anchor Timecode (Anchor) to specify a timecode that will match the input video frame to the output video frame. Use 24-hour format with frame number, (HH:MM:SS:FF) or (HH:MM:SS;FF). This setting ignores frame rate conversion. System behavior for Anchor Timecode varies depending on your setting for Source (TimecodeSource). * If Source (TimecodeSource) is set to Specified Start (SPECIFIEDSTART), the first input frame is the specified value in Start Timecode (Start). Anchor Timecode (Anchor) and Start Timecode (Start) are used calculate output timecode. * If Source (TimecodeSource) is set to Start at 0 (ZEROBASED)  the  first frame is 00:00:00:00. * If Source (TimecodeSource) is set to Embedded (EMBEDDED), the  first frame is the timecode value on the first input frame of the input.
     */
    Anchor?: __stringPattern010920405090509092;
    /**
     * Use Source (TimecodeSource) to set how timecodes are handled within this job. To make sure that your video, audio, captions, and markers are synchronized and that time-based features, such as image inserter, work correctly, choose the Timecode source option that matches your assets. All timecodes are in a 24-hour format with frame number (HH:MM:SS:FF). * Embedded (EMBEDDED) - Use the timecode that is in the input video. If no embedded timecode is in the source, the service will use Start at 0 (ZEROBASED) instead. * Start at 0 (ZEROBASED) - Set the timecode of the initial frame to 00:00:00:00. * Specified Start (SPECIFIEDSTART) - Set the timecode of the initial frame to a value other than zero. You use Start timecode (Start) to provide this value.
     */
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
    Id3Insertions?: __listOfId3Insertion;
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
  export interface TrackSourceSettings {
    /**
     * Use this setting to select a single captions track from a source. Track numbers correspond to the order in the captions source file. For IMF sources, track numbering is based on the order that the captions appear in the CPL. For example, use 1 to select the captions asset that is listed first in the CPL. To include more than one captions track in your job outputs, create multiple input captions selectors. Specify one track per selector.
     */
    TrackNumber?: __integerMin1Max2147483647;
  }
  export interface TtmlDestinationSettings {
    /**
     * Pass through style and position information from a TTML-like input source (TTML, SMPTE-TT, CFF-TT) to the CFF-TT output or TTML output.
     */
    StylePassthrough?: TtmlStylePassthrough;
  }
  export type TtmlStylePassthrough = "ENABLED"|"DISABLED"|string;
  export type Type = "SYSTEM"|"CUSTOM"|string;
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource that you want to remove tags from. To get the ARN, send a GET request with the resource name.
     */
    Arn: __string;
    /**
     * The keys of the tags that you want to remove from the resource.
     */
    TagKeys?: __listOf__string;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateJobTemplateRequest {
    /**
     * Accelerated transcoding can significantly speed up jobs with long, visually complex content. Outputs that use this feature incur pro-tier pricing. For information about feature limitations, see the AWS Elemental MediaConvert User Guide.
     */
    AccelerationSettings?: AccelerationSettings;
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
     * Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0.
     */
    Priority?: __integerMinNegative50Max50;
    /**
     * The new queue for the job template, if you are changing it.
     */
    Queue?: __string;
    /**
     * JobTemplateSettings contains all the transcode settings saved in the template that will be applied to jobs created from it.
     */
    Settings?: JobTemplateSettings;
    /**
     * Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.
     */
    StatusUpdateInterval?: StatusUpdateInterval;
  }
  export interface UpdateJobTemplateResponse {
    /**
     * A job template is a pre-made set of encoding instructions that you can use to quickly create a job.
     */
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
    /**
     * Settings for preset
     */
    Settings?: PresetSettings;
  }
  export interface UpdatePresetResponse {
    /**
     * A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process.
     */
    Preset?: Preset;
  }
  export interface UpdateQueueRequest {
    /**
     * The new description for the queue, if you are changing it.
     */
    Description?: __string;
    /**
     * The name of the queue that you are modifying.
     */
    Name: __string;
    /**
     * The new details of your pricing plan for your reserved queue. When you set up a new pricing plan to replace an expired one, you enter into another 12-month commitment. When you add capacity to your queue by increasing the number of RTS, you extend the term of your commitment to 12 months from when you add capacity. After you make these commitments, you can't cancel them.
     */
    ReservationPlanSettings?: ReservationPlanSettings;
    /**
     * Pause or activate a queue by changing its status between ACTIVE and PAUSED. If you pause a queue, jobs in that queue won't begin. Jobs that are running when you pause the queue continue to run until they finish or result in an error.
     */
    Status?: QueueStatus;
  }
  export interface UpdateQueueResponse {
    /**
     * You can use queues to manage the resources that are available to your AWS account for running multiple transcoding jobs at the same time. If you don't specify a queue, the service sends all jobs through the default queue. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html.
     */
    Queue?: Queue;
  }
  export type VideoCodec = "FRAME_CAPTURE"|"H_264"|"H_265"|"MPEG2"|"PRORES"|string;
  export interface VideoCodecSettings {
    /**
     * Specifies the video codec. This must be equal to one of the enum values defined by the object  VideoCodec.
     */
    Codec?: VideoCodec;
    /**
     * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value FRAME_CAPTURE.
     */
    FrameCaptureSettings?: FrameCaptureSettings;
    /**
     * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value H_264.
     */
    H264Settings?: H264Settings;
    /**
     * Settings for H265 codec
     */
    H265Settings?: H265Settings;
    /**
     * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value MPEG2.
     */
    Mpeg2Settings?: Mpeg2Settings;
    /**
     * Required when you set (Codec) under (VideoDescription)>(CodecSettings) to the value PRORES.
     */
    ProresSettings?: ProresSettings;
  }
  export interface VideoDescription {
    /**
     * This setting only applies to H.264, H.265, and MPEG2 outputs. Use Insert AFD signaling (AfdSignaling) to specify whether the service includes AFD values in the output video data and what those values are. * Choose None to remove all AFD values from this output. * Choose Fixed to ignore input AFD values and instead encode the value specified in the job. * Choose Auto to calculate output AFD values based on the input AFD scaler data.
     */
    AfdSignaling?: AfdSignaling;
    /**
     * The anti-alias filter is automatically applied to all outputs. The service no longer accepts the value DISABLED for AntiAlias. If you specify that in your job, the service will ignore the setting.
     */
    AntiAlias?: AntiAlias;
    /**
     * Video codec settings, (CodecSettings) under (VideoDescription), contains the group of settings related to video encoding. The settings in this group vary depending on the value that you choose for Video codec (Codec). For each codec enum that you choose, define the corresponding settings object. The following lists the codec enum, settings object pairs. * H_264, H264Settings * H_265, H265Settings * MPEG2, Mpeg2Settings * PRORES, ProresSettings * FRAME_CAPTURE, FrameCaptureSettings
     */
    CodecSettings?: VideoCodecSettings;
    /**
     * Choose Insert (INSERT) for this setting to include color metadata in this output. Choose Ignore (IGNORE) to exclude color metadata from this output. If you don't specify a value, the service sets this to Insert by default.
     */
    ColorMetadata?: ColorMetadata;
    /**
     * Use Cropping selection (crop) to specify the video area that the service will include in the output video frame.
     */
    Crop?: Rectangle;
    /**
     * Applies only to 29.97 fps outputs. When this feature is enabled, the service will use drop-frame timecode on outputs. If it is not possible to use drop-frame timecode, the system will fall back to non-drop-frame. This setting is enabled by default when Timecode insertion (TimecodeInsertion) is enabled.
     */
    DropFrameTimecode?: DropFrameTimecode;
    /**
     * Applies only if you set AFD Signaling(AfdSignaling) to Fixed (FIXED). Use Fixed (FixedAfd) to specify a four-bit AFD value which the service will write on all  frames of this video output.
     */
    FixedAfd?: __integerMin0Max15;
    /**
     * Use the Height (Height) setting to define the video resolution height for this output. Specify in pixels. If you don't provide a value here, the service will use the input height.
     */
    Height?: __integerMin32Max4096;
    /**
     * Use Selection placement (position) to define the video area in your output frame. The area outside of the rectangle that you specify here is black.
     */
    Position?: Rectangle;
    /**
     * Use Respond to AFD (RespondToAfd) to specify how the service changes the video itself in response to AFD values in the input. * Choose Respond to clip the input video frame according to the AFD value, input display aspect ratio, and output display aspect ratio. * Choose Passthrough to include the input AFD values. Do not choose this when AfdSignaling is set to (NONE). A preferred implementation of this workflow is to set RespondToAfd to (NONE) and set AfdSignaling to (AUTO). * Choose None to remove all input AFD values from this output.
     */
    RespondToAfd?: RespondToAfd;
    /**
     * Specify how the service handles outputs that have a different aspect ratio from the input aspect ratio. Choose Stretch to output (STRETCH_TO_OUTPUT) to have the service stretch your video image to fit. Keep the setting Default (DEFAULT) to have the service letterbox your video instead. This setting overrides any value that you specify for the setting Selection placement (position) in this output.
     */
    ScalingBehavior?: ScalingBehavior;
    /**
     * Use Sharpness (Sharpness) setting to specify the strength of anti-aliasing. This setting changes the width of the anti-alias filter kernel used for scaling. Sharpness only applies if your output resolution is different from your input resolution. 0 is the softest setting, 100 the sharpest, and 50 recommended for most content.
     */
    Sharpness?: __integerMin0Max100;
    /**
     * Applies only to H.264, H.265, MPEG2, and ProRes outputs. Only enable Timecode insertion when the input frame rate is identical to the output frame rate. To include timecodes in this output, set Timecode insertion (VideoTimecodeInsertion) to PIC_TIMING_SEI. To leave them out, set it to DISABLED. Default is DISABLED. When the service inserts timecodes in an output, by default, it uses any embedded timecodes from the input. If none are present, the service will set the timecode for the first output frame to zero. To change this default behavior, adjust the settings under Timecode configuration (TimecodeConfig). In the console, these settings are located under Job > Job settings > Timecode configuration. Note - Timecode source under input settings (InputTimecodeSource) does not affect the timecodes that are inserted in the output. Source under Job settings > Timecode configuration (TimecodeSource) does.
     */
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
    /**
     * If your input video has accurate color space metadata, or if you don't know about color space, leave this set to the default value Follow (FOLLOW). The service will automatically detect your input color space. If your input video has metadata indicating the wrong color space, specify the accurate color space here. If your input video is HDR 10 and the SMPTE ST 2086 Mastering Display Color Volume static metadata isn't present in your video stream, or if that metadata is present but not accurate, choose Force HDR 10 (FORCE_HDR10) here and specify correct values in the input HDR 10 metadata (Hdr10Metadata) settings. For more information about MediaConvert HDR jobs, see https://docs.aws.amazon.com/console/mediaconvert/hdr.
     */
    ColorSpace?: ColorSpace;
    /**
     * There are two sources for color metadata, the input file and the job input settings Color space (ColorSpace) and HDR master display information settings(Hdr10Metadata). The Color space usage setting determines which takes precedence. Choose Force (FORCE) to use color metadata from the input job settings. If you don't specify values for those settings, the service defaults to using metadata from your input. FALLBACK - Choose Fallback (FALLBACK) to use color metadata from the source when it is present. If there's no color metadata in your input file, the service defaults to using values you specify in the input settings.
     */
    ColorSpaceUsage?: ColorSpaceUsage;
    /**
     * Use these settings to provide HDR 10 metadata that is missing or inaccurate in your input video. Appropriate values vary depending on the input video and must be provided by a color grader. The color grader generates these values during the HDR 10 mastering process. The valid range for each of these settings is 0 to 50,000. Each increment represents 0.00002 in CIE1931 color coordinate. Related settings - When you specify these values, you must also set Color space (ColorSpace) to HDR 10 (HDR10). To specify whether the the values you specify here take precedence over the values in the metadata of your input file, set Color space usage (ColorSpaceUsage). To specify whether color metadata is included in an output, set Color metadata (ColorMetadata). For more information about MediaConvert HDR jobs, see https://docs.aws.amazon.com/console/mediaconvert/hdr.
     */
    Hdr10Metadata?: Hdr10Metadata;
    /**
     * Use PID (Pid) to select specific video data from an input file. Specify this value as an integer; the system automatically converts it to the hexidecimal value. For example, 257 selects PID 0x101. A PID, or packet identifier, is an identifier for a set of data in an MPEG-2 transport stream container.
     */
    Pid?: __integerMin1Max2147483647;
    /**
     * Selects a specific program from within a multi-program transport stream. Note that Quad 4K is not currently supported.
     */
    ProgramNumber?: __integerMinNegative2147483648Max2147483647;
    /**
     * Use Rotate (InputRotate) to specify how the service rotates your video. You can choose automatic rotation or specify a rotation. You can specify a clockwise rotation of 0, 90, 180, or 270 degrees. If your input video container is .mov or .mp4 and your input has rotation metadata, you can choose Automatic to have the service rotate your video according to the rotation specified in the metadata. The rotation must be within one degree of 90, 180, or 270 degrees. If the rotation metadata specifies any other rotation, the service will default to no rotation. By default, the service does no rotation, even if your input video has rotation metadata. The service doesn't pass through rotation metadata.
     */
    Rotate?: InputRotate;
  }
  export type VideoTimecodeInsertion = "DISABLED"|"PIC_TIMING_SEI"|string;
  export type WavFormat = "RIFF"|"RF64"|string;
  export interface WavSettings {
    /**
     * Specify Bit depth (BitDepth), in bits per sample, to choose the encoding quality for this audio track.
     */
    BitDepth?: __integerMin16Max24;
    /**
     * Specify the number of channels in this output audio track. Valid values are 1 and even numbers up to 64. For example, 1, 2, 4, 6, and so on, up to 64.
     */
    Channels?: __integerMin1Max64;
    /**
     * The service defaults to using RIFF for WAV outputs. If your output audio is likely to exceed 4 GB in file size, or if you otherwise need the extended support of the RF64 format, set your output WAV file format to RF64.
     */
    Format?: WavFormat;
    /**
     * Sample rate in Hz.
     */
    SampleRate?: __integerMin8000Max192000;
  }
  export type __doubleMin0 = number;
  export type __doubleMin0Max2147483647 = number;
  export type __doubleMinNegative59Max0 = number;
  export type __doubleMinNegative60Max3 = number;
  export type __doubleMinNegative60MaxNegative1 = number;
  export type __doubleMinNegative6Max3 = number;
  export type __integer = number;
  export type __integerMin0Max0 = number;
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
  export type __integerMin0Max30000 = number;
  export type __integerMin0Max3600 = number;
  export type __integerMin0Max4 = number;
  export type __integerMin0Max47185920 = number;
  export type __integerMin0Max500 = number;
  export type __integerMin0Max50000 = number;
  export type __integerMin0Max65535 = number;
  export type __integerMin0Max7 = number;
  export type __integerMin0Max8 = number;
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
  export type __integerMin1Max10 = number;
  export type __integerMin1Max100 = number;
  export type __integerMin1Max10000000 = number;
  export type __integerMin1Max1001 = number;
  export type __integerMin1Max17895697 = number;
  export type __integerMin1Max2 = number;
  export type __integerMin1Max20 = number;
  export type __integerMin1Max2147483640 = number;
  export type __integerMin1Max2147483647 = number;
  export type __integerMin1Max31 = number;
  export type __integerMin1Max32 = number;
  export type __integerMin1Max4 = number;
  export type __integerMin1Max6 = number;
  export type __integerMin1Max64 = number;
  export type __integerMin24Max60000 = number;
  export type __integerMin25Max10000 = number;
  export type __integerMin25Max2000 = number;
  export type __integerMin2Max2147483647 = number;
  export type __integerMin32000Max384000 = number;
  export type __integerMin32000Max48000 = number;
  export type __integerMin32Max4096 = number;
  export type __integerMin32Max8182 = number;
  export type __integerMin384000Max768000 = number;
  export type __integerMin48000Max48000 = number;
  export type __integerMin6000Max1024000 = number;
  export type __integerMin64000Max640000 = number;
  export type __integerMin8000Max192000 = number;
  export type __integerMin8000Max96000 = number;
  export type __integerMin96Max600 = number;
  export type __integerMinNegative1000Max1000 = number;
  export type __integerMinNegative180Max180 = number;
  export type __integerMinNegative1Max3 = number;
  export type __integerMinNegative2147483648Max2147483647 = number;
  export type __integerMinNegative2Max3 = number;
  export type __integerMinNegative50Max50 = number;
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
  export type __listOfTeletextPageType = TeletextPageType[];
  export type __listOf__integerMin1Max2147483647 = __integerMin1Max2147483647[];
  export type __listOf__integerMin32Max8182 = __integerMin32Max8182[];
  export type __listOf__integerMinNegative60Max6 = __integerMinNegative60Max6[];
  export type __listOf__string = __string[];
  export type __listOf__stringMin1 = __stringMin1[];
  export type __listOf__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12 = __stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12[];
  export type __listOf__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12 = __stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12[];
  export type __listOf__stringPatternS3ASSETMAPXml = __stringPatternS3ASSETMAPXml[];
  export type __mapOfAudioSelector = {[key: string]: AudioSelector};
  export type __mapOfAudioSelectorGroup = {[key: string]: AudioSelectorGroup};
  export type __mapOfCaptionSelector = {[key: string]: CaptionSelector};
  export type __mapOf__string = {[key: string]: __string};
  export type __string = string;
  export type __stringMin0 = string;
  export type __stringMin1 = string;
  export type __stringMin11Max11Pattern01D20305D205D = string;
  export type __stringMin14Max1285PatternHttpHttpsS3Mov09Png = string;
  export type __stringMin14PatternHttpHttpsS3BmpBMPPngPNG = string;
  export type __stringMin14PatternHttpHttpsS3BmpBMPPngPNGTgaTGA = string;
  export type __stringMin14PatternHttpHttpsS3SccSCCTtmlTTMLDfxpDFXPStlSTLSrtSRTXmlXMLSmiSMI = string;
  export type __stringMin16Max24PatternAZaZ0922AZaZ0916 = string;
  export type __stringMin1Max256 = string;
  export type __stringMin24Max512PatternAZaZ0902 = string;
  export type __stringMin32Max32Pattern09aFAF32 = string;
  export type __stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12 = string;
  export type __stringMin3Max3Pattern1809aFAF09aEAE = string;
  export type __stringMin3Max3PatternAZaZ3 = string;
  export type __stringMin9Max19PatternAZ26EastWestCentralNorthSouthEastWest1912 = string;
  export type __stringPattern = string;
  export type __stringPattern010920405090509092 = string;
  export type __stringPattern01D20305D205D = string;
  export type __stringPattern0940191020191209301 = string;
  export type __stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12 = string;
  export type __stringPatternAZaZ0902 = string;
  export type __stringPatternAZaZ0932 = string;
  export type __stringPatternArnAwsUsGovAcm = string;
  export type __stringPatternArnAwsUsGovCnKmsAZ26EastWestCentralNorthSouthEastWest1912D12KeyAFAF098AFAF094AFAF094AFAF094AFAF0912 = string;
  export type __stringPatternDD = string;
  export type __stringPatternHttpHttpsS3MM2VVMMPPEEGGMMPP3AAVVIIMMPP4FFLLVVMMPPTTMMPPGGMM4VVTTRRPPFF4VVMM2TTSSTTSS264HH264MMKKVVMMOOVVMMTTSSMM2TTWWMMVVAASSFFVVOOBB3GGPP3GGPPPPMMXXFFDDIIVVXXXXVVIIDDRRAAWWDDVVGGXXFFMM1VV3GG2VVMMFFMM3UU8LLCCHHGGXXFFMMPPEEGG2MMXXFFMMPPEEGG2MMXXFFHHDDWWAAVVYY4MMAAAACCAAIIFFFFMMPP2AACC3EECC3DDTTSSEE = string;
  export type __stringPatternHttpHttpsS3MM2VVMMPPEEGGMMPP3AAVVIIMMPP4FFLLVVMMPPTTMMPPGGMM4VVTTRRPPFF4VVMM2TTSSTTSS264HH264MMKKVVMMOOVVMMTTSSMM2TTWWMMVVAASSFFVVOOBB3GGPP3GGPPPPMMXXFFDDIIVVXXXXVVIIDDRRAAWWDDVVGGXXFFMM1VV3GG2VVMMFFMM3UU8WWEEBBMMLLCCHHGGXXFFMMPPEEGG2MMXXFFMMPPEEGG2MMXXFFHHDDWWAAVVYY4MMXXMMLL = string;
  export type __stringPatternHttps = string;
  export type __stringPatternIdentityAZaZ26AZaZ09163 = string;
  export type __stringPatternS3 = string;
  export type __stringPatternS3ASSETMAPXml = string;
  export type __stringPatternSNManifestConfirmConditionNotificationNS = string;
  export type __stringPatternSNSignalProcessingNotificationNS = string;
  export type __stringPatternW = string;
  export type __stringPatternWS = string;
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
