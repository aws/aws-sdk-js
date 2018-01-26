import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class MediaLive extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: MediaLive.Types.ClientConfiguration)
  config: Config & MediaLive.Types.ClientConfiguration;
  /**
   * Creates a new channel
   */
  createChannel(params: MediaLive.Types.CreateChannelRequest, callback?: (err: AWSError, data: MediaLive.Types.CreateChannelResponse) => void): Request<MediaLive.Types.CreateChannelResponse, AWSError>;
  /**
   * Creates a new channel
   */
  createChannel(callback?: (err: AWSError, data: MediaLive.Types.CreateChannelResponse) => void): Request<MediaLive.Types.CreateChannelResponse, AWSError>;
  /**
   * Create an input
   */
  createInput(params: MediaLive.Types.CreateInputRequest, callback?: (err: AWSError, data: MediaLive.Types.CreateInputResponse) => void): Request<MediaLive.Types.CreateInputResponse, AWSError>;
  /**
   * Create an input
   */
  createInput(callback?: (err: AWSError, data: MediaLive.Types.CreateInputResponse) => void): Request<MediaLive.Types.CreateInputResponse, AWSError>;
  /**
   * Creates a Input Security Group
   */
  createInputSecurityGroup(params: MediaLive.Types.CreateInputSecurityGroupRequest, callback?: (err: AWSError, data: MediaLive.Types.CreateInputSecurityGroupResponse) => void): Request<MediaLive.Types.CreateInputSecurityGroupResponse, AWSError>;
  /**
   * Creates a Input Security Group
   */
  createInputSecurityGroup(callback?: (err: AWSError, data: MediaLive.Types.CreateInputSecurityGroupResponse) => void): Request<MediaLive.Types.CreateInputSecurityGroupResponse, AWSError>;
  /**
   * Starts deletion of channel. The associated outputs are also deleted.
   */
  deleteChannel(params: MediaLive.Types.DeleteChannelRequest, callback?: (err: AWSError, data: MediaLive.Types.DeleteChannelResponse) => void): Request<MediaLive.Types.DeleteChannelResponse, AWSError>;
  /**
   * Starts deletion of channel. The associated outputs are also deleted.
   */
  deleteChannel(callback?: (err: AWSError, data: MediaLive.Types.DeleteChannelResponse) => void): Request<MediaLive.Types.DeleteChannelResponse, AWSError>;
  /**
   * Deletes the input end point
   */
  deleteInput(params: MediaLive.Types.DeleteInputRequest, callback?: (err: AWSError, data: MediaLive.Types.DeleteInputResponse) => void): Request<MediaLive.Types.DeleteInputResponse, AWSError>;
  /**
   * Deletes the input end point
   */
  deleteInput(callback?: (err: AWSError, data: MediaLive.Types.DeleteInputResponse) => void): Request<MediaLive.Types.DeleteInputResponse, AWSError>;
  /**
   * Deletes an Input Security Group
   */
  deleteInputSecurityGroup(params: MediaLive.Types.DeleteInputSecurityGroupRequest, callback?: (err: AWSError, data: MediaLive.Types.DeleteInputSecurityGroupResponse) => void): Request<MediaLive.Types.DeleteInputSecurityGroupResponse, AWSError>;
  /**
   * Deletes an Input Security Group
   */
  deleteInputSecurityGroup(callback?: (err: AWSError, data: MediaLive.Types.DeleteInputSecurityGroupResponse) => void): Request<MediaLive.Types.DeleteInputSecurityGroupResponse, AWSError>;
  /**
   * Gets details about a channel
   */
  describeChannel(params: MediaLive.Types.DescribeChannelRequest, callback?: (err: AWSError, data: MediaLive.Types.DescribeChannelResponse) => void): Request<MediaLive.Types.DescribeChannelResponse, AWSError>;
  /**
   * Gets details about a channel
   */
  describeChannel(callback?: (err: AWSError, data: MediaLive.Types.DescribeChannelResponse) => void): Request<MediaLive.Types.DescribeChannelResponse, AWSError>;
  /**
   * Produces details about an input
   */
  describeInput(params: MediaLive.Types.DescribeInputRequest, callback?: (err: AWSError, data: MediaLive.Types.DescribeInputResponse) => void): Request<MediaLive.Types.DescribeInputResponse, AWSError>;
  /**
   * Produces details about an input
   */
  describeInput(callback?: (err: AWSError, data: MediaLive.Types.DescribeInputResponse) => void): Request<MediaLive.Types.DescribeInputResponse, AWSError>;
  /**
   * Produces a summary of an Input Security Group
   */
  describeInputSecurityGroup(params: MediaLive.Types.DescribeInputSecurityGroupRequest, callback?: (err: AWSError, data: MediaLive.Types.DescribeInputSecurityGroupResponse) => void): Request<MediaLive.Types.DescribeInputSecurityGroupResponse, AWSError>;
  /**
   * Produces a summary of an Input Security Group
   */
  describeInputSecurityGroup(callback?: (err: AWSError, data: MediaLive.Types.DescribeInputSecurityGroupResponse) => void): Request<MediaLive.Types.DescribeInputSecurityGroupResponse, AWSError>;
  /**
   * Produces list of channels that have been created
   */
  listChannels(params: MediaLive.Types.ListChannelsRequest, callback?: (err: AWSError, data: MediaLive.Types.ListChannelsResponse) => void): Request<MediaLive.Types.ListChannelsResponse, AWSError>;
  /**
   * Produces list of channels that have been created
   */
  listChannels(callback?: (err: AWSError, data: MediaLive.Types.ListChannelsResponse) => void): Request<MediaLive.Types.ListChannelsResponse, AWSError>;
  /**
   * Produces a list of Input Security Groups for an account
   */
  listInputSecurityGroups(params: MediaLive.Types.ListInputSecurityGroupsRequest, callback?: (err: AWSError, data: MediaLive.Types.ListInputSecurityGroupsResponse) => void): Request<MediaLive.Types.ListInputSecurityGroupsResponse, AWSError>;
  /**
   * Produces a list of Input Security Groups for an account
   */
  listInputSecurityGroups(callback?: (err: AWSError, data: MediaLive.Types.ListInputSecurityGroupsResponse) => void): Request<MediaLive.Types.ListInputSecurityGroupsResponse, AWSError>;
  /**
   * Produces list of inputs that have been created
   */
  listInputs(params: MediaLive.Types.ListInputsRequest, callback?: (err: AWSError, data: MediaLive.Types.ListInputsResponse) => void): Request<MediaLive.Types.ListInputsResponse, AWSError>;
  /**
   * Produces list of inputs that have been created
   */
  listInputs(callback?: (err: AWSError, data: MediaLive.Types.ListInputsResponse) => void): Request<MediaLive.Types.ListInputsResponse, AWSError>;
  /**
   * Starts an existing channel
   */
  startChannel(params: MediaLive.Types.StartChannelRequest, callback?: (err: AWSError, data: MediaLive.Types.StartChannelResponse) => void): Request<MediaLive.Types.StartChannelResponse, AWSError>;
  /**
   * Starts an existing channel
   */
  startChannel(callback?: (err: AWSError, data: MediaLive.Types.StartChannelResponse) => void): Request<MediaLive.Types.StartChannelResponse, AWSError>;
  /**
   * Stops a running channel
   */
  stopChannel(params: MediaLive.Types.StopChannelRequest, callback?: (err: AWSError, data: MediaLive.Types.StopChannelResponse) => void): Request<MediaLive.Types.StopChannelResponse, AWSError>;
  /**
   * Stops a running channel
   */
  stopChannel(callback?: (err: AWSError, data: MediaLive.Types.StopChannelResponse) => void): Request<MediaLive.Types.StopChannelResponse, AWSError>;
}
declare namespace MediaLive {
  export type AacCodingMode = "AD_RECEIVER_MIX"|"CODING_MODE_1_0"|"CODING_MODE_1_1"|"CODING_MODE_2_0"|"CODING_MODE_5_1"|string;
  export type AacInputType = "BROADCASTER_MIXED_AD"|"NORMAL"|string;
  export type AacProfile = "HEV1"|"HEV2"|"LC"|string;
  export type AacRateControlMode = "CBR"|"VBR"|string;
  export type AacRawFormat = "LATM_LOAS"|"NONE"|string;
  export interface AacSettings {
    /**
     * Average bitrate in bits/second. Valid values depend on rate control mode and profile.
     */
    Bitrate?: __double;
    /**
     * Mono, Stereo, or 5.1 channel layout. Valid values depend on rate control mode and profile. The adReceiverMix setting receives a stereo description plus control track and emits a mono AAC encode of the description track, with control data emitted in the PES header as per ETSI TS 101 154 Annex E.
     */
    CodingMode?: AacCodingMode;
    /**
     * Set to "broadcasterMixedAd" when input contains pre-mixed main audio + AD (narration) as a stereo pair.  The Audio Type field (audioType) will be set to 3, which signals to downstream systems that this stream contains "broadcaster mixed AD". Note that the input received by the encoder must contain pre-mixed audio; the encoder does not perform the mixing. The values in audioTypeControl and audioType (in AudioDescription) are ignored when set to broadcasterMixedAd.

Leave set to "normal" when input does not contain pre-mixed audio + AD.
     */
    InputType?: AacInputType;
    /**
     * AAC Profile.
     */
    Profile?: AacProfile;
    /**
     * Rate Control Mode.
     */
    RateControlMode?: AacRateControlMode;
    /**
     * Sets LATM / LOAS AAC output for raw containers.
     */
    RawFormat?: AacRawFormat;
    /**
     * Sample rate in Hz. Valid values depend on rate control mode and profile.
     */
    SampleRate?: __double;
    /**
     * Use MPEG-2 AAC audio instead of MPEG-4 AAC audio for raw or MPEG-2 Transport Stream containers.
     */
    Spec?: AacSpec;
    /**
     * VBR Quality Level - Only used if rateControlMode is VBR.
     */
    VbrQuality?: AacVbrQuality;
  }
  export type AacSpec = "MPEG2"|"MPEG4"|string;
  export type AacVbrQuality = "HIGH"|"LOW"|"MEDIUM_HIGH"|"MEDIUM_LOW"|string;
  export type Ac3BitstreamMode = "COMMENTARY"|"COMPLETE_MAIN"|"DIALOGUE"|"EMERGENCY"|"HEARING_IMPAIRED"|"MUSIC_AND_EFFECTS"|"VISUALLY_IMPAIRED"|"VOICE_OVER"|string;
  export type Ac3CodingMode = "CODING_MODE_1_0"|"CODING_MODE_1_1"|"CODING_MODE_2_0"|"CODING_MODE_3_2_LFE"|string;
  export type Ac3DrcProfile = "FILM_STANDARD"|"NONE"|string;
  export type Ac3LfeFilter = "DISABLED"|"ENABLED"|string;
  export type Ac3MetadataControl = "FOLLOW_INPUT"|"USE_CONFIGURED"|string;
  export interface Ac3Settings {
    /**
     * Average bitrate in bits/second. Valid bitrates depend on the coding mode.
     */
    Bitrate?: __double;
    /**
     * Specifies the bitstream mode (bsmod) for the emitted AC-3 stream. See ATSC A/52-2012 for background on these values.
     */
    BitstreamMode?: Ac3BitstreamMode;
    /**
     * Dolby Digital coding mode. Determines number of channels.
     */
    CodingMode?: Ac3CodingMode;
    /**
     * Sets the dialnorm for the output. If excluded and input audio is Dolby Digital, dialnorm will be passed through.
     */
    Dialnorm?: __integer;
    /**
     * If set to filmStandard, adds dynamic range compression signaling to the output bitstream as defined in the Dolby Digital specification.
     */
    DrcProfile?: Ac3DrcProfile;
    /**
     * When set to enabled, applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid in codingMode32Lfe mode.
     */
    LfeFilter?: Ac3LfeFilter;
    /**
     * When set to "followInput", encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used.
     */
    MetadataControl?: Ac3MetadataControl;
  }
  export interface AccessDenied {
    Message?: __string;
  }
  export type AfdSignaling = "AUTO"|"FIXED"|"NONE"|string;
  export interface ArchiveContainerSettings {
    M2tsSettings?: M2tsSettings;
  }
  export interface ArchiveGroupSettings {
    /**
     * A directory and base filename where archive files should be written.  If the base filename portion of the URI is left blank, the base filename of the first input will be automatically inserted.
     */
    Destination?: OutputLocationRef;
    /**
     * Number of seconds to write to archive file before closing and starting a new one.
     */
    RolloverInterval?: __integer;
  }
  export interface ArchiveOutputSettings {
    /**
     * Settings specific to the container type of the file.
     */
    ContainerSettings?: ArchiveContainerSettings;
    /**
     * Output file extension. If excluded, this will be auto-selected from the container type.
     */
    Extension?: __string;
    /**
     * String concatenated to the end of the destination filename.  Required for multiple outputs of the same type.
     */
    NameModifier?: __string;
  }
  export interface AribDestinationSettings {
  }
  export interface AribSourceSettings {
  }
  export interface AudioChannelMapping {
    /**
     * Indices and gain values for each input channel that should be remixed into this output channel.
     */
    InputChannelLevels?: ListOfInputChannelLevel;
    /**
     * The index of the output channel being produced.
     */
    OutputChannel?: __integer;
  }
  export interface AudioCodecSettings {
    AacSettings?: AacSettings;
    Ac3Settings?: Ac3Settings;
    Eac3Settings?: Eac3Settings;
    Mp2Settings?: Mp2Settings;
    PassThroughSettings?: PassThroughSettings;
  }
  export interface AudioDescription {
    /**
     * Advanced audio normalization settings.
     */
    AudioNormalizationSettings?: AudioNormalizationSettings;
    /**
     * The name of the AudioSelector used as the source for this AudioDescription.
     */
    AudioSelectorName?: __string;
    /**
     * Applies only if audioTypeControl is useConfigured. The values for audioType are defined in ISO-IEC 13818-1.
     */
    AudioType?: AudioType;
    /**
     * Determines how audio type is determined.
  followInput: If the input contains an ISO 639 audioType, then that value is passed through to the output. If the input contains no ISO 639 audioType, the value in Audio Type is included in the output.
  useConfigured: The value in Audio Type is included in the output.
Note that this field and audioType are both ignored if inputType is broadcasterMixedAd.
     */
    AudioTypeControl?: AudioDescriptionAudioTypeControl;
    /**
     * Audio codec settings.
     */
    CodecSettings?: AudioCodecSettings;
    /**
     * Indicates the language of the audio output track. Only used if languageControlMode is useConfigured, or there is no ISO 639 language code specified in the input.
     */
    LanguageCode?: __string;
    /**
     * Choosing followInput will cause the ISO 639 language code of the output to follow the ISO 639 language code of the input. The languageCode will be used when useConfigured is set, or when followInput is selected but there is no ISO 639 language code specified by the input.
     */
    LanguageCodeControl?: AudioDescriptionLanguageCodeControl;
    /**
     * The name of this AudioDescription. Outputs will use this name to uniquely identify this AudioDescription.  Description names should be unique within this Live Event.
     */
    Name?: __string;
    /**
     * Settings that control how input audio channels are remixed into the output audio channels.
     */
    RemixSettings?: RemixSettings;
    /**
     * Used for MS Smooth and Apple HLS outputs. Indicates the name displayed by the player (eg. English, or Director Commentary).
     */
    StreamName?: __string;
  }
  export type AudioDescriptionAudioTypeControl = "FOLLOW_INPUT"|"USE_CONFIGURED"|string;
  export type AudioDescriptionLanguageCodeControl = "FOLLOW_INPUT"|"USE_CONFIGURED"|string;
  export interface AudioLanguageSelection {
    /**
     * Selects a specific three-letter language code from within an audio source.
     */
    LanguageCode?: __string;
    /**
     * When set to "strict", the transport stream demux strictly identifies audio streams by their language descriptor. If a PMT update occurs such that an audio stream matching the initially selected language is no longer present then mute will be encoded until the language returns. If "loose", then on a PMT update the demux will choose another audio stream in the program with the same stream type if it can't find one with the same language.
     */
    LanguageSelectionPolicy?: AudioLanguageSelectionPolicy;
  }
  export type AudioLanguageSelectionPolicy = "LOOSE"|"STRICT"|string;
  export type AudioNormalizationAlgorithm = "ITU_1770_1"|"ITU_1770_2"|string;
  export type AudioNormalizationAlgorithmControl = "CORRECT_AUDIO"|string;
  export interface AudioNormalizationSettings {
    /**
     * Audio normalization algorithm to use. itu17701 conforms to the CALM Act specification, itu17702 conforms to the EBU R-128 specification.
     */
    Algorithm?: AudioNormalizationAlgorithm;
    /**
     * When set to correctAudio the output audio is corrected using the chosen algorithm. If set to measureOnly, the audio will be measured but not adjusted.
     */
    AlgorithmControl?: AudioNormalizationAlgorithmControl;
    /**
     * Target LKFS(loudness) to adjust volume to. If no value is entered, a default value will be used according to the chosen algorithm.  The CALM Act (1770-1) recommends a target of -24 LKFS. The EBU R-128 specification (1770-2) recommends a target of -23 LKFS.
     */
    TargetLkfs?: __double;
  }
  export interface AudioOnlyHlsSettings {
    /**
     * Specifies the group to which the audio Rendition belongs.
     */
    AudioGroupId?: __string;
    /**
     * For use with an audio only Stream. Must be a .jpg or .png file. If given, this image will be used as the cover-art for the audio only output. Ideally, it should be formatted for an iPhone screen for two reasons. The iPhone does not resize the image, it crops a centered image on the top/bottom and left/right. Additionally, this image file gets saved bit-for-bit into every 10-second segment file, so will increase bandwidth by {image file size} * {segment count} * {user count.}.
     */
    AudioOnlyImage?: InputLocation;
    /**
     * Four types of audio-only tracks are supported:

Audio-Only Variant Stream
The client can play back this audio-only stream instead of video in low-bandwidth scenarios. Represented as an EXT-X-STREAM-INF in the HLS manifest.

Alternate Audio, Auto Select, Default
Alternate rendition that the client should try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=YES, AUTOSELECT=YES

Alternate Audio, Auto Select, Not Default
Alternate rendition that the client may try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=YES

Alternate Audio, not Auto Select
Alternate rendition that the client will not try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=NO
     */
    AudioTrackType?: AudioOnlyHlsTrackType;
  }
  export type AudioOnlyHlsTrackType = "ALTERNATE_AUDIO_AUTO_SELECT"|"ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT"|"ALTERNATE_AUDIO_NOT_AUTO_SELECT"|"AUDIO_ONLY_VARIANT_STREAM"|string;
  export interface AudioPidSelection {
    /**
     * Selects a specific PID from within a source.
     */
    Pid?: __integer;
  }
  export interface AudioSelector {
    /**
     * The name of this AudioSelector. AudioDescriptions will use this name to uniquely identify this Selector.  Selector names should be unique per input.
     */
    Name?: __string;
    /**
     * The audio selector settings.
     */
    SelectorSettings?: AudioSelectorSettings;
  }
  export interface AudioSelectorSettings {
    AudioLanguageSelection?: AudioLanguageSelection;
    AudioPidSelection?: AudioPidSelection;
  }
  export type AudioType = "CLEAN_EFFECTS"|"HEARING_IMPAIRED"|"UNDEFINED"|"VISUAL_IMPAIRED_COMMENTARY"|string;
  export interface AvailBlanking {
    /**
     * Blanking image to be used. Leave empty for solid black. Only bmp and png images are supported.
     */
    AvailBlankingImage?: InputLocation;
    /**
     * When set to enabled, causes video, audio and captions to be blanked when insertion metadata is added.
     */
    State?: AvailBlankingState;
  }
  export type AvailBlankingState = "DISABLED"|"ENABLED"|string;
  export interface AvailConfiguration {
    /**
     * Ad avail settings.
     */
    AvailSettings?: AvailSettings;
  }
  export interface AvailSettings {
    Scte35SpliceInsert?: Scte35SpliceInsert;
    Scte35TimeSignalApos?: Scte35TimeSignalApos;
  }
  export interface BlackoutSlate {
    /**
     * Blackout slate image to be used. Leave empty for solid black. Only bmp and png images are supported.
     */
    BlackoutSlateImage?: InputLocation;
    /**
     * Setting to enabled causes the encoder to blackout the video, audio, and captions, and raise the "Network Blackout Image" slate when an SCTE104/35 Network End Segmentation Descriptor is encountered. The blackout will be lifted when the Network Start Segmentation Descriptor is encountered. The Network End and Network Start descriptors must contain a network ID that matches the value entered in "Network ID".
     */
    NetworkEndBlackout?: BlackoutSlateNetworkEndBlackout;
    /**
     * Path to local file to use as Network End Blackout image. Image will be scaled to fill the entire output raster.
     */
    NetworkEndBlackoutImage?: InputLocation;
    /**
     * Provides Network ID that matches EIDR ID format (e.g., "10.XXXX/XXXX-XXXX-XXXX-XXXX-XXXX-C").
     */
    NetworkId?: __string;
    /**
     * When set to enabled, causes video, audio and captions to be blanked when indicated by program metadata.
     */
    State?: BlackoutSlateState;
  }
  export type BlackoutSlateNetworkEndBlackout = "DISABLED"|"ENABLED"|string;
  export type BlackoutSlateState = "DISABLED"|"ENABLED"|string;
  export type BurnInAlignment = "CENTERED"|"LEFT"|"SMART"|string;
  export type BurnInBackgroundColor = "BLACK"|"NONE"|"WHITE"|string;
  export interface BurnInDestinationSettings {
    /**
     * If no explicit xPosition or yPosition is provided, setting alignment to centered will place the captions at the bottom center of the output. Similarly, setting a left alignment will align captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates. Selecting "smart" justification will left-justify live subtitles and center-justify pre-recorded subtitles.  All burn-in and DVB-Sub font settings must match.
     */
    Alignment?: BurnInAlignment;
    /**
     * Specifies the color of the rectangle behind the captions.  All burn-in and DVB-Sub font settings must match.
     */
    BackgroundColor?: BurnInBackgroundColor;
    /**
     * Specifies the opacity of the background rectangle. 255 is opaque; 0 is transparent. Leaving this parameter out is equivalent to setting it to 0 (transparent).  All burn-in and DVB-Sub font settings must match.
     */
    BackgroundOpacity?: __integer;
    /**
     * External font file used for caption burn-in. File extension must be 'ttf' or 'tte'.  Although the user can select output fonts for many different types of input captions,  embedded, STL and teletext sources use a strict grid system. Using external fonts with these caption sources could cause unexpected display of proportional fonts.  All burn-in and DVB-Sub font settings must match.
     */
    Font?: InputLocation;
    /**
     * Specifies the color of the burned-in captions.  This option is not valid for source captions that are STL, 608/embedded or teletext.  These source settings are already pre-defined by the caption stream.  All burn-in and DVB-Sub font settings must match.
     */
    FontColor?: BurnInFontColor;
    /**
     * Specifies the opacity of the burned-in captions. 255 is opaque; 0 is transparent.  All burn-in and DVB-Sub font settings must match.
     */
    FontOpacity?: __integer;
    /**
     * Font resolution in DPI (dots per inch); default is 96 dpi.  All burn-in and DVB-Sub font settings must match.
     */
    FontResolution?: __integer;
    /**
     * When set to 'auto' fontSize will scale depending on the size of the output.  Giving a positive integer will specify the exact font size in points.  All burn-in and DVB-Sub font settings must match.
     */
    FontSize?: __string;
    /**
     * Specifies font outline color. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
     */
    OutlineColor?: BurnInOutlineColor;
    /**
     * Specifies font outline size in pixels. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
     */
    OutlineSize?: __integer;
    /**
     * Specifies the color of the shadow cast by the captions.  All burn-in and DVB-Sub font settings must match.
     */
    ShadowColor?: BurnInShadowColor;
    /**
     * Specifies the opacity of the shadow. 255 is opaque; 0 is transparent. Leaving this parameter out is equivalent to setting it to 0 (transparent).  All burn-in and DVB-Sub font settings must match.
     */
    ShadowOpacity?: __integer;
    /**
     * Specifies the horizontal offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels to the left.  All burn-in and DVB-Sub font settings must match.
     */
    ShadowXOffset?: __integer;
    /**
     * Specifies the vertical offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels above the text.  All burn-in and DVB-Sub font settings must match.
     */
    ShadowYOffset?: __integer;
    /**
     * Controls whether a fixed grid size will be used to generate the output subtitles bitmap. Only applicable for Teletext inputs and DVB-Sub/Burn-in outputs.
     */
    TeletextGridControl?: BurnInTeletextGridControl;
    /**
     * Specifies the horizontal position of the caption relative to the left side of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the left of the output. If no explicit xPosition is provided, the horizontal caption position will be determined by the alignment parameter.  All burn-in and DVB-Sub font settings must match.
     */
    XPosition?: __integer;
    /**
     * Specifies the vertical position of the caption relative to the top of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the top of the output. If no explicit yPosition is provided, the caption will be positioned towards the bottom of the output.  All burn-in and DVB-Sub font settings must match.
     */
    YPosition?: __integer;
  }
  export type BurnInFontColor = "BLACK"|"BLUE"|"GREEN"|"RED"|"WHITE"|"YELLOW"|string;
  export type BurnInOutlineColor = "BLACK"|"BLUE"|"GREEN"|"RED"|"WHITE"|"YELLOW"|string;
  export type BurnInShadowColor = "BLACK"|"NONE"|"WHITE"|string;
  export type BurnInTeletextGridControl = "FIXED"|"SCALED"|string;
  export interface CaptionDescription {
    /**
     * Specifies which input caption selector to use as a caption source when generating output captions. This field should match a captionSelector name.
     */
    CaptionSelectorName?: __string;
    /**
     * Additional settings for captions destination that depend on the destination type.
     */
    DestinationSettings?: CaptionDestinationSettings;
    /**
     * ISO 639-2 three-digit code: http://www.loc.gov/standards/iso639-2/
     */
    LanguageCode?: __string;
    /**
     * Human readable information to indicate captions available for players (eg. English, or Spanish).
     */
    LanguageDescription?: __string;
    /**
     * Name of the caption description.  Used to associate a caption description with an output.  Names must be unique within an event.
     */
    Name?: __string;
  }
  export interface CaptionDestinationSettings {
    AribDestinationSettings?: AribDestinationSettings;
    BurnInDestinationSettings?: BurnInDestinationSettings;
    DvbSubDestinationSettings?: DvbSubDestinationSettings;
    EmbeddedDestinationSettings?: EmbeddedDestinationSettings;
    EmbeddedPlusScte20DestinationSettings?: EmbeddedPlusScte20DestinationSettings;
    Scte20PlusEmbeddedDestinationSettings?: Scte20PlusEmbeddedDestinationSettings;
    Scte27DestinationSettings?: Scte27DestinationSettings;
    SmpteTtDestinationSettings?: SmpteTtDestinationSettings;
    TeletextDestinationSettings?: TeletextDestinationSettings;
    TtmlDestinationSettings?: TtmlDestinationSettings;
    WebvttDestinationSettings?: WebvttDestinationSettings;
  }
  export interface CaptionLanguageMapping {
    /**
     * Channel to insert closed captions.  Each channel mapping must have a unique channel number (maximum of 4)
     */
    CaptionChannel?: __integer;
    /**
     * Three character ISO 639-2 language code (see http://www.loc.gov/standards/iso639-2)
     */
    LanguageCode?: __string;
    /**
     * Textual description of language
     */
    LanguageDescription?: __string;
  }
  export interface CaptionSelector {
    /**
     * When specified this field indicates the three letter language code of the caption track to extract from the source.
     */
    LanguageCode?: __string;
    /**
     * Name identifier for a caption selector.  This name is used to associate this caption selector with one or more caption descriptions.  Names must be unique within an event.
     */
    Name?: __string;
    /**
     * Caption selector settings.
     */
    SelectorSettings?: CaptionSelectorSettings;
  }
  export interface CaptionSelectorSettings {
    AribSourceSettings?: AribSourceSettings;
    DvbSubSourceSettings?: DvbSubSourceSettings;
    EmbeddedSourceSettings?: EmbeddedSourceSettings;
    Scte20SourceSettings?: Scte20SourceSettings;
    Scte27SourceSettings?: Scte27SourceSettings;
    TeletextSourceSettings?: TeletextSourceSettings;
  }
  export interface Channel {
    /**
     * The unique arn of the channel.
     */
    Arn?: __string;
    /**
     * A list of destinations of the channel. For UDP outputs, there is one
destination per output. For other types (HLS, for example), there is
one destination per packager.

     */
    Destinations?: ListOfOutputDestination;
    /**
     * The endpoints where outgoing connections initiate from
     */
    EgressEndpoints?: ListOfChannelEgressEndpoint;
    EncoderSettings?: EncoderSettings;
    /**
     * The unique id of the channel.
     */
    Id?: __string;
    /**
     * List of input attachments for channel.
     */
    InputAttachments?: ListOfInputAttachment;
    InputSpecification?: InputSpecification;
    /**
     * The name of the channel. (user-mutable)
     */
    Name?: __string;
    /**
     * The number of currently healthy pipelines.
     */
    PipelinesRunningCount?: __integer;
    /**
     * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
     */
    RoleArn?: __string;
    State?: ChannelState;
  }
  export interface ChannelConfigurationValidationError {
    Message?: __string;
    /**
     * A collection of validation error responses from attempting to create a channel with a bouquet of settings.
     */
    ValidationErrors?: ListOfValidationError;
  }
  export interface ChannelEgressEndpoint {
    /**
     * Public IP of where a channel's output comes from
     */
    SourceIp?: __string;
  }
  export type ChannelState = "CREATING"|"CREATE_FAILED"|"IDLE"|"STARTING"|"RUNNING"|"RECOVERING"|"STOPPING"|"DELETING"|"DELETED"|string;
  export interface ChannelSummary {
    /**
     * The unique arn of the channel.
     */
    Arn?: __string;
    /**
     * A list of destinations of the channel. For UDP outputs, there is one
destination per output. For other types (HLS, for example), there is
one destination per packager.

     */
    Destinations?: ListOfOutputDestination;
    /**
     * The endpoints where outgoing connections initiate from
     */
    EgressEndpoints?: ListOfChannelEgressEndpoint;
    /**
     * The unique id of the channel.
     */
    Id?: __string;
    /**
     * List of input attachments for channel.
     */
    InputAttachments?: ListOfInputAttachment;
    InputSpecification?: InputSpecification;
    /**
     * The name of the channel. (user-mutable)
     */
    Name?: __string;
    /**
     * The number of currently healthy pipelines.
     */
    PipelinesRunningCount?: __integer;
    /**
     * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
     */
    RoleArn?: __string;
    State?: ChannelState;
  }
  export interface CreateChannel {
    Destinations?: ListOfOutputDestination;
    EncoderSettings?: EncoderSettings;
    /**
     * List of input attachments for channel.
     */
    InputAttachments?: ListOfInputAttachment;
    /**
     * Specification of input for this channel (max. bitrate, resolution, codec, etc.)
     */
    InputSpecification?: InputSpecification;
    /**
     * Name of channel.
     */
    Name?: __string;
    /**
     * Unique request ID to be specified. This is needed to prevent retries from
creating multiple resources.

     */
    RequestId?: __string;
    /**
     * Reserved for future use.
     */
    Reserved?: __string;
    /**
     * An optional Amazon Resource Name (ARN) of the role to assume when running the Channel.
     */
    RoleArn?: __string;
  }
  export interface CreateChannelRequest {
    Destinations?: ListOfOutputDestination;
    EncoderSettings?: EncoderSettings;
    /**
     * List of input attachments for channel.
     */
    InputAttachments?: ListOfInputAttachment;
    /**
     * Specification of input for this channel (max. bitrate, resolution, codec, etc.)
     */
    InputSpecification?: InputSpecification;
    /**
     * Name of channel.
     */
    Name?: __string;
    /**
     * Unique request ID to be specified. This is needed to prevent retries from
creating multiple resources.

     */
    RequestId?: __string;
    /**
     * Reserved for future use.
     */
    Reserved?: __string;
    /**
     * An optional Amazon Resource Name (ARN) of the role to assume when running the Channel.
     */
    RoleArn?: __string;
  }
  export interface CreateChannelResponse {
    Channel?: Channel;
  }
  export interface CreateChannelResultModel {
    Channel?: Channel;
  }
  export interface CreateInput {
    /**
     * Destination settings for PUSH type inputs.
     */
    Destinations?: ListOfInputDestinationRequest;
    /**
     * A list of security groups referenced by IDs to attach to the input.
     */
    InputSecurityGroups?: ListOf__string;
    /**
     * Name of the input.
     */
    Name?: __string;
    /**
     * Unique identifier of the request to ensure the request is handled
exactly once in case of retries.

     */
    RequestId?: __string;
    /**
     * The source URLs for a PULL-type input. Every PULL type input needs
exactly two source URLs for redundancy.
Only specify sources for PULL type Inputs. Leave Destinations empty.

     */
    Sources?: ListOfInputSourceRequest;
    Type?: InputType;
  }
  export interface CreateInputRequest {
    /**
     * Destination settings for PUSH type inputs.
     */
    Destinations?: ListOfInputDestinationRequest;
    /**
     * A list of security groups referenced by IDs to attach to the input.
     */
    InputSecurityGroups?: ListOf__string;
    /**
     * Name of the input.
     */
    Name?: __string;
    /**
     * Unique identifier of the request to ensure the request is handled
exactly once in case of retries.

     */
    RequestId?: __string;
    /**
     * The source URLs for a PULL-type input. Every PULL type input needs
exactly two source URLs for redundancy.
Only specify sources for PULL type Inputs. Leave Destinations empty.

     */
    Sources?: ListOfInputSourceRequest;
    Type?: InputType;
  }
  export interface CreateInputResponse {
    Input?: Input;
  }
  export interface CreateInputResultModel {
    Input?: Input;
  }
  export interface CreateInputSecurityGroupRequest {
    /**
     * List of IPv4 CIDR addresses to whitelist
     */
    WhitelistRules?: ListOfInputWhitelistRuleCidr;
  }
  export interface CreateInputSecurityGroupResponse {
    SecurityGroup?: InputSecurityGroup;
  }
  export interface CreateInputSecurityGroupResultModel {
    SecurityGroup?: InputSecurityGroup;
  }
  export interface DeleteChannelRequest {
    /**
     * Unique ID of the channel.
     */
    ChannelId: __string;
  }
  export interface DeleteChannelResponse {
    /**
     * The unique arn of the channel.
     */
    Arn?: __string;
    /**
     * A list of destinations of the channel. For UDP outputs, there is one
destination per output. For other types (HLS, for example), there is
one destination per packager.

     */
    Destinations?: ListOfOutputDestination;
    /**
     * The endpoints where outgoing connections initiate from
     */
    EgressEndpoints?: ListOfChannelEgressEndpoint;
    EncoderSettings?: EncoderSettings;
    /**
     * The unique id of the channel.
     */
    Id?: __string;
    /**
     * List of input attachments for channel.
     */
    InputAttachments?: ListOfInputAttachment;
    InputSpecification?: InputSpecification;
    /**
     * The name of the channel. (user-mutable)
     */
    Name?: __string;
    /**
     * The number of currently healthy pipelines.
     */
    PipelinesRunningCount?: __integer;
    /**
     * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
     */
    RoleArn?: __string;
    State?: ChannelState;
  }
  export interface DeleteInputRequest {
    /**
     * Unique ID of the input
     */
    InputId: __string;
  }
  export interface DeleteInputResponse {
  }
  export interface DeleteInputSecurityGroupRequest {
    /**
     * The Input Security Group to delete
     */
    InputSecurityGroupId: __string;
  }
  export interface DeleteInputSecurityGroupResponse {
  }
  export interface DescribeChannelRequest {
    /**
     * channel ID
     */
    ChannelId: __string;
  }
  export interface DescribeChannelResponse {
    /**
     * The unique arn of the channel.
     */
    Arn?: __string;
    /**
     * A list of destinations of the channel. For UDP outputs, there is one
destination per output. For other types (HLS, for example), there is
one destination per packager.

     */
    Destinations?: ListOfOutputDestination;
    /**
     * The endpoints where outgoing connections initiate from
     */
    EgressEndpoints?: ListOfChannelEgressEndpoint;
    EncoderSettings?: EncoderSettings;
    /**
     * The unique id of the channel.
     */
    Id?: __string;
    /**
     * List of input attachments for channel.
     */
    InputAttachments?: ListOfInputAttachment;
    InputSpecification?: InputSpecification;
    /**
     * The name of the channel. (user-mutable)
     */
    Name?: __string;
    /**
     * The number of currently healthy pipelines.
     */
    PipelinesRunningCount?: __integer;
    /**
     * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
     */
    RoleArn?: __string;
    State?: ChannelState;
  }
  export interface DescribeInputRequest {
    /**
     * Unique ID of the input
     */
    InputId: __string;
  }
  export interface DescribeInputResponse {
    /**
     * The Unique ARN of the input (generated, immutable).
     */
    Arn?: __string;
    /**
     * A list of channel IDs that that input is attached to (currently an input can only be attached to one channel).
     */
    AttachedChannels?: ListOf__string;
    /**
     * A list of the destinations of the input (PUSH-type).
     */
    Destinations?: ListOfInputDestination;
    /**
     * The generated ID of the input (unique for user account, immutable).
     */
    Id?: __string;
    /**
     * The user-assigned name (This is a mutable value).
     */
    Name?: __string;
    /**
     * A list of IDs for all the security groups attached to the input.
     */
    SecurityGroups?: ListOf__string;
    /**
     * A list of the sources of the input (PULL-type).
     */
    Sources?: ListOfInputSource;
    State?: InputState;
    Type?: InputType;
  }
  export interface DescribeInputSecurityGroupRequest {
    /**
     * The id of the Input Security Group to describe
     */
    InputSecurityGroupId: __string;
  }
  export interface DescribeInputSecurityGroupResponse {
    /**
     * Unique ARN of Input Security Group
     */
    Arn?: __string;
    /**
     * The Id of the Input Security Group
     */
    Id?: __string;
    /**
     * Whitelist rules and their sync status
     */
    WhitelistRules?: ListOfInputWhitelistRule;
  }
  export interface DvbNitSettings {
    /**
     * The numeric value placed in the Network Information Table (NIT).
     */
    NetworkId?: __integer;
    /**
     * The network name text placed in the networkNameDescriptor inside the Network Information Table. Maximum length is 256 characters.
     */
    NetworkName?: __string;
    /**
     * The number of milliseconds between instances of this table in the output transport stream.
     */
    RepInterval?: __integer;
  }
  export type DvbSdtOutputSdt = "SDT_FOLLOW"|"SDT_FOLLOW_IF_PRESENT"|"SDT_MANUAL"|"SDT_NONE"|string;
  export interface DvbSdtSettings {
    /**
     * Selects method of inserting SDT information into output stream. The sdtFollow setting copies SDT information from input stream to output stream. The sdtFollowIfPresent setting copies SDT information from input stream to output stream if SDT information is present in the input, otherwise it will fall back on the user-defined values. The sdtManual setting means user will enter the SDT information. The sdtNone setting means output stream will not contain SDT information.
     */
    OutputSdt?: DvbSdtOutputSdt;
    /**
     * The number of milliseconds between instances of this table in the output transport stream.
     */
    RepInterval?: __integer;
    /**
     * The service name placed in the serviceDescriptor in the Service Description Table. Maximum length is 256 characters.
     */
    ServiceName?: __string;
    /**
     * The service provider name placed in the serviceDescriptor in the Service Description Table. Maximum length is 256 characters.
     */
    ServiceProviderName?: __string;
  }
  export type DvbSubDestinationAlignment = "CENTERED"|"LEFT"|"SMART"|string;
  export type DvbSubDestinationBackgroundColor = "BLACK"|"NONE"|"WHITE"|string;
  export type DvbSubDestinationFontColor = "BLACK"|"BLUE"|"GREEN"|"RED"|"WHITE"|"YELLOW"|string;
  export type DvbSubDestinationOutlineColor = "BLACK"|"BLUE"|"GREEN"|"RED"|"WHITE"|"YELLOW"|string;
  export interface DvbSubDestinationSettings {
    /**
     * If no explicit xPosition or yPosition is provided, setting alignment to centered will place the captions at the bottom center of the output. Similarly, setting a left alignment will align captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates. Selecting "smart" justification will left-justify live subtitles and center-justify pre-recorded subtitles.  This option is not valid for source captions that are STL or 608/embedded.  These source settings are already pre-defined by the caption stream.  All burn-in and DVB-Sub font settings must match.
     */
    Alignment?: DvbSubDestinationAlignment;
    /**
     * Specifies the color of the rectangle behind the captions.  All burn-in and DVB-Sub font settings must match.
     */
    BackgroundColor?: DvbSubDestinationBackgroundColor;
    /**
     * Specifies the opacity of the background rectangle. 255 is opaque; 0 is transparent. Leaving this parameter blank is equivalent to setting it to 0 (transparent).  All burn-in and DVB-Sub font settings must match.
     */
    BackgroundOpacity?: __integer;
    /**
     * External font file used for caption burn-in. File extension must be 'ttf' or 'tte'.  Although the user can select output fonts for many different types of input captions, embedded, STL and teletext sources use a strict grid system. Using external fonts with these caption sources could cause unexpected display of proportional fonts.  All burn-in and DVB-Sub font settings must match.
     */
    Font?: InputLocation;
    /**
     * Specifies the color of the burned-in captions.  This option is not valid for source captions that are STL, 608/embedded or teletext.  These source settings are already pre-defined by the caption stream.  All burn-in and DVB-Sub font settings must match.
     */
    FontColor?: DvbSubDestinationFontColor;
    /**
     * Specifies the opacity of the burned-in captions. 255 is opaque; 0 is transparent.  All burn-in and DVB-Sub font settings must match.
     */
    FontOpacity?: __integer;
    /**
     * Font resolution in DPI (dots per inch); default is 96 dpi.  All burn-in and DVB-Sub font settings must match.
     */
    FontResolution?: __integer;
    /**
     * When set to auto fontSize will scale depending on the size of the output.  Giving a positive integer will specify the exact font size in points.  All burn-in and DVB-Sub font settings must match.
     */
    FontSize?: __string;
    /**
     * Specifies font outline color. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
     */
    OutlineColor?: DvbSubDestinationOutlineColor;
    /**
     * Specifies font outline size in pixels. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
     */
    OutlineSize?: __integer;
    /**
     * Specifies the color of the shadow cast by the captions.  All burn-in and DVB-Sub font settings must match.
     */
    ShadowColor?: DvbSubDestinationShadowColor;
    /**
     * Specifies the opacity of the shadow. 255 is opaque; 0 is transparent. Leaving this parameter blank is equivalent to setting it to 0 (transparent).  All burn-in and DVB-Sub font settings must match.
     */
    ShadowOpacity?: __integer;
    /**
     * Specifies the horizontal offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels to the left.  All burn-in and DVB-Sub font settings must match.
     */
    ShadowXOffset?: __integer;
    /**
     * Specifies the vertical offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels above the text.  All burn-in and DVB-Sub font settings must match.
     */
    ShadowYOffset?: __integer;
    /**
     * Controls whether a fixed grid size will be used to generate the output subtitles bitmap. Only applicable for Teletext inputs and DVB-Sub/Burn-in outputs.
     */
    TeletextGridControl?: DvbSubDestinationTeletextGridControl;
    /**
     * Specifies the horizontal position of the caption relative to the left side of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the left of the output. If no explicit xPosition is provided, the horizontal caption position will be determined by the alignment parameter.  This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream.  All burn-in and DVB-Sub font settings must match.
     */
    XPosition?: __integer;
    /**
     * Specifies the vertical position of the caption relative to the top of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the top of the output. If no explicit yPosition is provided, the caption will be positioned towards the bottom of the output.  This option is not valid for source captions that are STL, 608/embedded or teletext.  These source settings are already pre-defined by the caption stream.  All burn-in and DVB-Sub font settings must match.
     */
    YPosition?: __integer;
  }
  export type DvbSubDestinationShadowColor = "BLACK"|"NONE"|"WHITE"|string;
  export type DvbSubDestinationTeletextGridControl = "FIXED"|"SCALED"|string;
  export interface DvbSubSourceSettings {
    /**
     * When using DVB-Sub with Burn-In or SMPTE-TT, use this PID for the source content. Unused for DVB-Sub passthrough. All DVB-Sub content is passed through, regardless of selectors.
     */
    Pid?: __integer;
  }
  export interface DvbTdtSettings {
    /**
     * The number of milliseconds between instances of this table in the output transport stream.
     */
    RepInterval?: __integer;
  }
  export type Eac3AttenuationControl = "ATTENUATE_3_DB"|"NONE"|string;
  export type Eac3BitstreamMode = "COMMENTARY"|"COMPLETE_MAIN"|"EMERGENCY"|"HEARING_IMPAIRED"|"VISUALLY_IMPAIRED"|string;
  export type Eac3CodingMode = "CODING_MODE_1_0"|"CODING_MODE_2_0"|"CODING_MODE_3_2"|string;
  export type Eac3DcFilter = "DISABLED"|"ENABLED"|string;
  export type Eac3DrcLine = "FILM_LIGHT"|"FILM_STANDARD"|"MUSIC_LIGHT"|"MUSIC_STANDARD"|"NONE"|"SPEECH"|string;
  export type Eac3DrcRf = "FILM_LIGHT"|"FILM_STANDARD"|"MUSIC_LIGHT"|"MUSIC_STANDARD"|"NONE"|"SPEECH"|string;
  export type Eac3LfeControl = "LFE"|"NO_LFE"|string;
  export type Eac3LfeFilter = "DISABLED"|"ENABLED"|string;
  export type Eac3MetadataControl = "FOLLOW_INPUT"|"USE_CONFIGURED"|string;
  export type Eac3PassthroughControl = "NO_PASSTHROUGH"|"WHEN_POSSIBLE"|string;
  export type Eac3PhaseControl = "NO_SHIFT"|"SHIFT_90_DEGREES"|string;
  export interface Eac3Settings {
    /**
     * When set to attenuate3Db, applies a 3 dB attenuation to the surround channels. Only used for 3/2 coding mode.
     */
    AttenuationControl?: Eac3AttenuationControl;
    /**
     * Average bitrate in bits/second. Valid bitrates depend on the coding mode.
     */
    Bitrate?: __double;
    /**
     * Specifies the bitstream mode (bsmod) for the emitted E-AC-3 stream. See ATSC A/52-2012 (Annex E) for background on these values.
     */
    BitstreamMode?: Eac3BitstreamMode;
    /**
     * Dolby Digital Plus coding mode. Determines number of channels.
     */
    CodingMode?: Eac3CodingMode;
    /**
     * When set to enabled, activates a DC highpass filter for all input channels.
     */
    DcFilter?: Eac3DcFilter;
    /**
     * Sets the dialnorm for the output. If blank and input audio is Dolby Digital Plus, dialnorm will be passed through.
     */
    Dialnorm?: __integer;
    /**
     * Sets the Dolby dynamic range compression profile.
     */
    DrcLine?: Eac3DrcLine;
    /**
     * Sets the profile for heavy Dolby dynamic range compression, ensures that the instantaneous signal peaks do not exceed specified levels.
     */
    DrcRf?: Eac3DrcRf;
    /**
     * When encoding 3/2 audio, setting to lfe enables the LFE channel
     */
    LfeControl?: Eac3LfeControl;
    /**
     * When set to enabled, applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid with codingMode32 coding mode.
     */
    LfeFilter?: Eac3LfeFilter;
    /**
     * Left only/Right only center mix level. Only used for 3/2 coding mode.
     */
    LoRoCenterMixLevel?: __double;
    /**
     * Left only/Right only surround mix level. Only used for 3/2 coding mode.
     */
    LoRoSurroundMixLevel?: __double;
    /**
     * Left total/Right total center mix level. Only used for 3/2 coding mode.
     */
    LtRtCenterMixLevel?: __double;
    /**
     * Left total/Right total surround mix level. Only used for 3/2 coding mode.
     */
    LtRtSurroundMixLevel?: __double;
    /**
     * When set to followInput, encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used.
     */
    MetadataControl?: Eac3MetadataControl;
    /**
     * When set to whenPossible, input DD+ audio will be passed through if it is present on the input. This detection is dynamic over the life of the transcode. Inputs that alternate between DD+ and non-DD+ content will have a consistent DD+ output as the system alternates between passthrough and encoding.
     */
    PassthroughControl?: Eac3PassthroughControl;
    /**
     * When set to shift90Degrees, applies a 90-degree phase shift to the surround channels. Only used for 3/2 coding mode.
     */
    PhaseControl?: Eac3PhaseControl;
    /**
     * Stereo downmix preference. Only used for 3/2 coding mode.
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
  export type Eac3StereoDownmix = "DPL2"|"LO_RO"|"LT_RT"|"NOT_INDICATED"|string;
  export type Eac3SurroundExMode = "DISABLED"|"ENABLED"|"NOT_INDICATED"|string;
  export type Eac3SurroundMode = "DISABLED"|"ENABLED"|"NOT_INDICATED"|string;
  export type EmbeddedConvert608To708 = "DISABLED"|"UPCONVERT"|string;
  export interface EmbeddedDestinationSettings {
  }
  export interface EmbeddedPlusScte20DestinationSettings {
  }
  export type EmbeddedScte20Detection = "AUTO"|"OFF"|string;
  export interface EmbeddedSourceSettings {
    /**
     * If upconvert, 608 data is both passed through via the "608 compatibility bytes" fields of the 708 wrapper as well as translated into 708. 708 data present in the source content will be discarded.
     */
    Convert608To708?: EmbeddedConvert608To708;
    /**
     * Set to "auto" to handle streams with intermittent and/or non-aligned SCTE-20 and Embedded captions.
     */
    Scte20Detection?: EmbeddedScte20Detection;
    /**
     * Specifies the 608/708 channel number within the video track from which to extract captions. Unused for passthrough.
     */
    Source608ChannelNumber?: __integer;
    /**
     * This field is unused and deprecated.
     */
    Source608TrackNumber?: __integer;
  }
  export interface Empty {
  }
  export interface EncoderSettings {
    AudioDescriptions?: ListOfAudioDescription;
    /**
     * Settings for ad avail blanking.
     */
    AvailBlanking?: AvailBlanking;
    /**
     * Event-wide configuration settings for ad avail insertion.
     */
    AvailConfiguration?: AvailConfiguration;
    /**
     * Settings for blackout slate.
     */
    BlackoutSlate?: BlackoutSlate;
    /**
     * Settings for caption decriptions
     */
    CaptionDescriptions?: ListOfCaptionDescription;
    /**
     * Configuration settings that apply to the event as a whole.
     */
    GlobalConfiguration?: GlobalConfiguration;
    OutputGroups?: ListOfOutputGroup;
    /**
     * Contains settings used to acquire and adjust timecode information from inputs.
     */
    TimecodeConfig?: TimecodeConfig;
    VideoDescriptions?: ListOfVideoDescription;
  }
  export type FecOutputIncludeFec = "COLUMN"|"COLUMN_AND_ROW"|string;
  export interface FecOutputSettings {
    /**
     * Parameter D from SMPTE 2022-1. The height of the FEC protection matrix.  The number of transport stream packets per column error correction packet. Must be between 4 and 20, inclusive.
     */
    ColumnDepth?: __integer;
    /**
     * Enables column only or column and row based FEC
     */
    IncludeFec?: FecOutputIncludeFec;
    /**
     * Parameter L from SMPTE 2022-1. The width of the FEC protection matrix.  Must be between 1 and 20, inclusive. If only Column FEC is used, then larger values increase robustness.  If Row FEC is used, then this is the number of transport stream packets per row error correction packet, and the value must be between 4 and 20, inclusive, if includeFec is columnAndRow. If includeFec is column, this value must be 1 to 20, inclusive.
     */
    RowLength?: __integer;
  }
  export type FixedAfd = "AFD_0000"|"AFD_0010"|"AFD_0011"|"AFD_0100"|"AFD_1000"|"AFD_1001"|"AFD_1010"|"AFD_1011"|"AFD_1101"|"AFD_1110"|"AFD_1111"|string;
  export interface GlobalConfiguration {
    /**
     * Value to set the initial audio gain for the Live Event.
     */
    InitialAudioGain?: __integer;
    /**
     * Indicates the action to take when an input completes (e.g. end-of-file.) Options include immediately switching to the next sequential input (via "switchInput"), switching to the next input and looping back to the first input when last input ends (via "switchAndLoopInputs") or not switching inputs and instead transcoding black / color / slate images per the "Input Loss Behavior" configuration until an activateInput REST command is received (via "none").
     */
    InputEndAction?: GlobalConfigurationInputEndAction;
    /**
     * Settings for system actions when input is lost.
     */
    InputLossBehavior?: InputLossBehavior;
    /**
     * Indicates whether the rate of frames emitted by the Live encoder should be paced by its system clock (which optionally may be locked to another source via NTP) or should be locked to the clock of the source that is providing the input stream.
     */
    OutputTimingSource?: GlobalConfigurationOutputTimingSource;
    /**
     * Adjusts video input buffer for streams with very low video framerates. This is commonly set to enabled for music channels with less than one video frame per second.
     */
    SupportLowFramerateInputs?: GlobalConfigurationLowFramerateInputs;
  }
  export type GlobalConfigurationInputEndAction = "NONE"|"SWITCH_AND_LOOP_INPUTS"|string;
  export type GlobalConfigurationLowFramerateInputs = "DISABLED"|"ENABLED"|string;
  export type GlobalConfigurationOutputTimingSource = "INPUT_CLOCK"|"SYSTEM_CLOCK"|string;
  export type H264AdaptiveQuantization = "HIGH"|"HIGHER"|"LOW"|"MAX"|"MEDIUM"|"OFF"|string;
  export type H264ColorMetadata = "IGNORE"|"INSERT"|string;
  export type H264EntropyEncoding = "CABAC"|"CAVLC"|string;
  export type H264FlickerAq = "DISABLED"|"ENABLED"|string;
  export type H264FramerateControl = "INITIALIZE_FROM_SOURCE"|"SPECIFIED"|string;
  export type H264GopBReference = "DISABLED"|"ENABLED"|string;
  export type H264GopSizeUnits = "FRAMES"|"SECONDS"|string;
  export type H264Level = "H264_LEVEL_1"|"H264_LEVEL_1_1"|"H264_LEVEL_1_2"|"H264_LEVEL_1_3"|"H264_LEVEL_2"|"H264_LEVEL_2_1"|"H264_LEVEL_2_2"|"H264_LEVEL_3"|"H264_LEVEL_3_1"|"H264_LEVEL_3_2"|"H264_LEVEL_4"|"H264_LEVEL_4_1"|"H264_LEVEL_4_2"|"H264_LEVEL_5"|"H264_LEVEL_5_1"|"H264_LEVEL_5_2"|"H264_LEVEL_AUTO"|string;
  export type H264LookAheadRateControl = "HIGH"|"LOW"|"MEDIUM"|string;
  export type H264ParControl = "INITIALIZE_FROM_SOURCE"|"SPECIFIED"|string;
  export type H264Profile = "BASELINE"|"HIGH"|"HIGH_10BIT"|"HIGH_422"|"HIGH_422_10BIT"|"MAIN"|string;
  export type H264RateControlMode = "CBR"|"VBR"|string;
  export type H264ScanType = "INTERLACED"|"PROGRESSIVE"|string;
  export type H264SceneChangeDetect = "DISABLED"|"ENABLED"|string;
  export interface H264Settings {
    /**
     * Adaptive quantization. Allows intra-frame quantizers to vary to improve visual quality.
     */
    AdaptiveQuantization?: H264AdaptiveQuantization;
    /**
     * Indicates that AFD values will be written into the output stream.  If afdSignaling is "auto", the system will try to preserve the input AFD value (in cases where multiple AFD values are valid). If set to "fixed", the AFD value will be the value configured in the fixedAfd parameter.
     */
    AfdSignaling?: AfdSignaling;
    /**
     * Average bitrate in bits/second. Required for VBR, CBR, and ABR. For MS Smooth outputs, bitrates must be unique when rounded down to the nearest multiple of 1000.
     */
    Bitrate?: __integer;
    /**
     * Percentage of the buffer that should initially be filled (HRD buffer model).
     */
    BufFillPct?: __integer;
    /**
     * Size of buffer (HRD buffer model) in bits/second.
     */
    BufSize?: __integer;
    /**
     * Includes colorspace metadata in the output.
     */
    ColorMetadata?: H264ColorMetadata;
    /**
     * Entropy encoding mode.  Use cabac (must be in Main or High profile) or cavlc.
     */
    EntropyEncoding?: H264EntropyEncoding;
    /**
     * Four bit AFD value to write on all frames of video in the output stream. Only valid when afdSignaling is set to 'Fixed'.
     */
    FixedAfd?: FixedAfd;
    /**
     * If set to enabled, adjust quantization within each frame to reduce flicker or 'pop' on I-frames.
     */
    FlickerAq?: H264FlickerAq;
    /**
     * This field indicates how the output video frame rate is specified.  If "specified" is selected then the output video frame rate is determined by framerateNumerator and framerateDenominator, else if "initializeFromSource" is selected then the output video frame rate will be set equal to the input video frame rate of the first input.
     */
    FramerateControl?: H264FramerateControl;
    /**
     * Framerate denominator.
     */
    FramerateDenominator?: __integer;
    /**
     * Framerate numerator - framerate is a fraction, e.g. 24000 / 1001 = 23.976 fps.
     */
    FramerateNumerator?: __integer;
    /**
     * Documentation update needed
     */
    GopBReference?: H264GopBReference;
    /**
     * Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting.
     */
    GopClosedCadence?: __integer;
    /**
     * Number of B-frames between reference frames.
     */
    GopNumBFrames?: __integer;
    /**
     * GOP size (keyframe interval) in units of either frames or seconds per gopSizeUnits. Must be greater than zero.
     */
    GopSize?: __double;
    /**
     * Indicates if the gopSize is specified in frames or seconds. If seconds the system will convert the gopSize into a frame count at run time.
     */
    GopSizeUnits?: H264GopSizeUnits;
    /**
     * H.264 Level.
     */
    Level?: H264Level;
    /**
     * Amount of lookahead. A value of low can decrease latency and memory usage, while high can produce better quality for certain content.
     */
    LookAheadRateControl?: H264LookAheadRateControl;
    /**
     * Maximum bitrate in bits/second (for VBR mode only).
     */
    MaxBitrate?: __integer;
    /**
     * Only meaningful if sceneChangeDetect is set to enabled.  Enforces separation between repeated (cadence) I-frames and I-frames inserted by Scene Change Detection. If a scene change I-frame is within I-interval frames of a cadence I-frame, the GOP is shrunk and/or stretched to the scene change I-frame. GOP stretch requires enabling lookahead as well as setting I-interval. The normal cadence resumes for the next GOP. Note: Maximum GOP stretch = GOP size + Min-I-interval - 1
     */
    MinIInterval?: __integer;
    /**
     * Number of reference frames to use. The encoder may use more than requested if using B-frames and/or interlaced encoding.
     */
    NumRefFrames?: __integer;
    /**
     * This field indicates how the output pixel aspect ratio is specified.  If "specified" is selected then the output video pixel aspect ratio is determined by parNumerator and parDenominator, else if "initializeFromSource" is selected then the output pixsel aspect ratio will be set equal to the input video pixel aspect ratio of the first input.
     */
    ParControl?: H264ParControl;
    /**
     * Pixel Aspect Ratio denominator.
     */
    ParDenominator?: __integer;
    /**
     * Pixel Aspect Ratio numerator.
     */
    ParNumerator?: __integer;
    /**
     * H.264 Profile.
     */
    Profile?: H264Profile;
    /**
     * Rate control mode.
     */
    RateControlMode?: H264RateControlMode;
    /**
     * Sets the scan type of the output to progressive or top-field-first interlaced.
     */
    ScanType?: H264ScanType;
    /**
     * Scene change detection.  Inserts I-frames on scene changes when enabled.
     */
    SceneChangeDetect?: H264SceneChangeDetect;
    /**
     * Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.
This field is optional; when no value is specified the encoder will choose the number of slices based on encode resolution.
     */
    Slices?: __integer;
    /**
     * Softness. Selects quantizer matrix, larger values reduce high-frequency content in the encoded image.
     */
    Softness?: __integer;
    /**
     * If set to enabled, adjust quantization within each frame based on spatial variation of content complexity.
     */
    SpatialAq?: H264SpatialAq;
    /**
     * Produces a bitstream compliant with SMPTE RP-2027.
     */
    Syntax?: H264Syntax;
    /**
     * If set to enabled, adjust quantization within each frame based on temporal variation of content complexity.
     */
    TemporalAq?: H264TemporalAq;
    /**
     * Determines how timecodes should be inserted into the video elementary stream.
- 'disabled': Do not include timecodes
- 'picTimingSei': Pass through picture timing SEI messages from the source specified in Timecode Config
     */
    TimecodeInsertion?: H264TimecodeInsertionBehavior;
  }
  export type H264SpatialAq = "DISABLED"|"ENABLED"|string;
  export type H264Syntax = "DEFAULT"|"RP2027"|string;
  export type H264TemporalAq = "DISABLED"|"ENABLED"|string;
  export type H264TimecodeInsertionBehavior = "DISABLED"|"PIC_TIMING_SEI"|string;
  export type HlsAdMarkers = "ADOBE"|"ELEMENTAL"|"ELEMENTAL_SCTE35"|string;
  export type HlsAkamaiHttpTransferMode = "CHUNKED"|"NON_CHUNKED"|string;
  export interface HlsAkamaiSettings {
    /**
     * Number of seconds to wait before retrying connection to the CDN if the connection is lost.
     */
    ConnectionRetryInterval?: __integer;
    /**
     * Size in seconds of file cache for streaming outputs.
     */
    FilecacheDuration?: __integer;
    /**
     * Specify whether or not to use chunked transfer encoding to Akamai. User should contact Akamai to enable this feature.
     */
    HttpTransferMode?: HlsAkamaiHttpTransferMode;
    /**
     * Number of retry attempts that will be made before the Live Event is put into an error state.
     */
    NumRetries?: __integer;
    /**
     * If a streaming output fails, number of seconds to wait until a restart is initiated. A value of 0 means never restart.
     */
    RestartDelay?: __integer;
    /**
     * Salt for authenticated Akamai.
     */
    Salt?: __string;
    /**
     * Token parameter for authenticated akamai. If not specified, _gda_ is used.
     */
    Token?: __string;
  }
  export interface HlsBasicPutSettings {
    /**
     * Number of seconds to wait before retrying connection to the CDN if the connection is lost.
     */
    ConnectionRetryInterval?: __integer;
    /**
     * Size in seconds of file cache for streaming outputs.
     */
    FilecacheDuration?: __integer;
    /**
     * Number of retry attempts that will be made before the Live Event is put into an error state.
     */
    NumRetries?: __integer;
    /**
     * If a streaming output fails, number of seconds to wait until a restart is initiated. A value of 0 means never restart.
     */
    RestartDelay?: __integer;
  }
  export type HlsCaptionLanguageSetting = "INSERT"|"NONE"|"OMIT"|string;
  export interface HlsCdnSettings {
    HlsAkamaiSettings?: HlsAkamaiSettings;
    HlsBasicPutSettings?: HlsBasicPutSettings;
    HlsMediaStoreSettings?: HlsMediaStoreSettings;
    HlsWebdavSettings?: HlsWebdavSettings;
  }
  export type HlsClientCache = "DISABLED"|"ENABLED"|string;
  export type HlsCodecSpecification = "RFC_4281"|"RFC_6381"|string;
  export type HlsDirectoryStructure = "SINGLE_DIRECTORY"|"SUBDIRECTORY_PER_STREAM"|string;
  export type HlsEncryptionType = "AES128"|"SAMPLE_AES"|string;
  export interface HlsGroupSettings {
    /**
     * Choose one or more ad marker types to pass SCTE35 signals through to this group of Apple HLS outputs.
     */
    AdMarkers?: ListOfHlsAdMarkers;
    /**
     * A partial URI prefix that will be prepended to each output in the media .m3u8 file. Can be used if base manifest is delivered from a different URL than the main .m3u8 file.
     */
    BaseUrlContent?: __string;
    /**
     * A partial URI prefix that will be prepended to each output in the media .m3u8 file. Can be used if base manifest is delivered from a different URL than the main .m3u8 file.
     */
    BaseUrlManifest?: __string;
    /**
     * Mapping of up to 4 caption channels to caption languages.  Is only meaningful if captionLanguageSetting is set to "insert".
     */
    CaptionLanguageMappings?: ListOfCaptionLanguageMapping;
    /**
     * Applies only to 608 Embedded output captions.
insert: Include CLOSED-CAPTIONS lines in the manifest. Specify at least one language in the CC1 Language Code field. One CLOSED-CAPTION line is added for each Language Code you specify. Make sure to specify the languages in the order in which they appear in the original source (if the source is embedded format) or the order of the caption selectors (if the source is other than embedded). Otherwise, languages in the manifest will not match up properly with the output captions.
none: Include CLOSED-CAPTIONS=NONE line in the manifest.
omit: Omit any CLOSED-CAPTIONS line from the manifest.
     */
    CaptionLanguageSetting?: HlsCaptionLanguageSetting;
    /**
     * When set to "disabled", sets the #EXT-X-ALLOW-CACHE:no tag in the manifest, which prevents clients from saving media segments for later replay.
     */
    ClientCache?: HlsClientCache;
    /**
     * Specification to use (RFC-6381 or the default RFC-4281) during m3u8 playlist generation.
     */
    CodecSpecification?: HlsCodecSpecification;
    /**
     * For use with encryptionType. This is a 128-bit, 16-byte hex value represented by a 32-character text string. If ivSource is set to "explicit" then this parameter is required and is used as the IV for encryption.
     */
    ConstantIv?: __string;
    /**
     * A directory or HTTP destination for the HLS segments, manifest files, and encryption keys (if enabled).
     */
    Destination?: OutputLocationRef;
    /**
     * Place segments in subdirectories.
     */
    DirectoryStructure?: HlsDirectoryStructure;
    /**
     * Encrypts the segments with the given encryption scheme.  Exclude this parameter if no encryption is desired.
     */
    EncryptionType?: HlsEncryptionType;
    /**
     * Parameters that control interactions with the CDN.
     */
    HlsCdnSettings?: HlsCdnSettings;
    /**
     * If mode is "live", the number of segments to retain in the manifest (.m3u8) file. This number must be less than or equal to keepSegments. If mode is "vod", this parameter has no effect.
     */
    IndexNSegments?: __integer;
    /**
     * Parameter that control output group behavior on input loss.
     */
    InputLossAction?: InputLossActionForHlsOut;
    /**
     * For use with encryptionType. The IV (Initialization Vector) is a 128-bit number used in conjunction with the key for encrypting blocks. If set to "include", IV is listed in the manifest, otherwise the IV is not in the manifest.
     */
    IvInManifest?: HlsIvInManifest;
    /**
     * For use with encryptionType. The IV (Initialization Vector) is a 128-bit number used in conjunction with the key for encrypting blocks. If this setting is "followsSegmentNumber", it will cause the IV to change every segment (to match the segment number). If this is set to "explicit", you must enter a constantIv value.
     */
    IvSource?: HlsIvSource;
    /**
     * If mode is "live", the number of TS segments to retain in the destination directory. If mode is "vod", this parameter has no effect.
     */
    KeepSegments?: __integer;
    /**
     * The value specifies how the key is represented in the resource identified by the URI.  If parameter is absent, an implicit value of "identity" is used.  A reverse DNS string can also be given.
     */
    KeyFormat?: __string;
    /**
     * Either a single positive integer version value or a slash delimited list of version values (1/2/3).
     */
    KeyFormatVersions?: __string;
    /**
     * The key provider settings.
     */
    KeyProviderSettings?: KeyProviderSettings;
    /**
     * When set to gzip, compresses HLS playlist.
     */
    ManifestCompression?: HlsManifestCompression;
    /**
     * Indicates whether the output manifest should use floating point or integer values for segment duration.
     */
    ManifestDurationFormat?: HlsManifestDurationFormat;
    /**
     * When set, minimumSegmentLength is enforced by looking ahead and back within the specified range for a nearby avail and extending the segment size if needed.
     */
    MinSegmentLength?: __integer;
    /**
     * If "vod", all segments are indexed and kept permanently in the destination and manifest. If "live", only the number segments specified in keepSegments and indexNSegments are kept; newer segments replace older segments, which may prevent players from rewinding all the way to the beginning of the event.

VOD mode uses HLS EXT-X-PLAYLIST-TYPE of EVENT while the channel is running, converting it to a "VOD" type manifest on completion of the stream.
     */
    Mode?: HlsMode;
    /**
     * Generates the .m3u8 playlist file for this HLS output group. The segmentsOnly option will output segments without the .m3u8 file.
     */
    OutputSelection?: HlsOutputSelection;
    /**
     * Includes or excludes EXT-X-PROGRAM-DATE-TIME tag in .m3u8 manifest files. The value is calculated as follows: either the program date and time are initialized using the input timecode source, or the time is initialized using the input timecode source and the date is initialized using the timestampOffset.
     */
    ProgramDateTime?: HlsProgramDateTime;
    /**
     * Period of insertion of EXT-X-PROGRAM-DATE-TIME entry, in seconds.
     */
    ProgramDateTimePeriod?: __integer;
    /**
     * Length of MPEG-2 Transport Stream segments to create (in seconds). Note that segments will end on the next keyframe after this number of seconds, so actual segment length may be longer.
     */
    SegmentLength?: __integer;
    /**
     * When set to useInputSegmentation, the output segment or fragment points are set by the RAI markers from the input streams.
     */
    SegmentationMode?: HlsSegmentationMode;
    /**
     * Number of segments to write to a subdirectory before starting a new one. directoryStructure must be subdirectoryPerStream for this setting to have an effect.
     */
    SegmentsPerSubdirectory?: __integer;
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
    TimedMetadataId3Period?: __integer;
    /**
     * Provides an extra millisecond delta offset to fine tune the timestamps.
     */
    TimestampDeltaMilliseconds?: __integer;
    /**
     * When set to "singleFile", emits the program as a single media resource (.ts) file, and uses #EXT-X-BYTERANGE tags to index segment for playback. Playback of VOD mode content during event is not guaranteed due to HTTP server caching.
     */
    TsFileMode?: HlsTsFileMode;
  }
  export interface HlsInputSettings {
    /**
     * When specified the HLS stream with the m3u8 BANDWIDTH that most closely matches this value will be chosen, otherwise the highest bandwidth stream in the m3u8 will be chosen.  The bitrate is specified in bits per second, as in an HLS manifest.
     */
    Bandwidth?: __integer;
    /**
     * When specified, reading of the HLS input will begin this many buffer segments from the end (most recently written segment).  When not specified, the HLS input will begin with the first segment specified in the m3u8.
     */
    BufferSegments?: __integer;
    /**
     * The number of consecutive times that attempts to read a manifest or segment must fail before the input is considered unavailable.
     */
    Retries?: __integer;
    /**
     * The number of seconds between retries when an attempt to read a manifest or segment fails.
     */
    RetryInterval?: __integer;
  }
  export type HlsIvInManifest = "EXCLUDE"|"INCLUDE"|string;
  export type HlsIvSource = "EXPLICIT"|"FOLLOWS_SEGMENT_NUMBER"|string;
  export type HlsManifestCompression = "GZIP"|"NONE"|string;
  export type HlsManifestDurationFormat = "FLOATING_POINT"|"INTEGER"|string;
  export interface HlsMediaStoreSettings {
    /**
     * Number of seconds to wait before retrying connection to the CDN if the connection is lost.
     */
    ConnectionRetryInterval?: __integer;
    /**
     * Size in seconds of file cache for streaming outputs.
     */
    FilecacheDuration?: __integer;
    /**
     * When set to temporal, output files are stored in non-persistent memory for faster reading and writing.
     */
    MediaStoreStorageClass?: HlsMediaStoreStorageClass;
    /**
     * Number of retry attempts that will be made before the Live Event is put into an error state.
     */
    NumRetries?: __integer;
    /**
     * If a streaming output fails, number of seconds to wait until a restart is initiated. A value of 0 means never restart.
     */
    RestartDelay?: __integer;
  }
  export type HlsMediaStoreStorageClass = "TEMPORAL"|string;
  export type HlsMode = "LIVE"|"VOD"|string;
  export type HlsOutputSelection = "MANIFESTS_AND_SEGMENTS"|"SEGMENTS_ONLY"|string;
  export interface HlsOutputSettings {
    /**
     * Settings regarding the underlying stream. These settings are different for audio-only outputs.
     */
    HlsSettings?: HlsSettings;
    /**
     * String concatenated to the end of the destination filename. Accepts \"Format Identifiers\":#formatIdentifierParameters.
     */
    NameModifier?: __string;
    /**
     * String concatenated to end of segment filenames.
     */
    SegmentModifier?: __string;
  }
  export type HlsProgramDateTime = "EXCLUDE"|"INCLUDE"|string;
  export type HlsSegmentationMode = "USE_INPUT_SEGMENTATION"|"USE_SEGMENT_DURATION"|string;
  export interface HlsSettings {
    AudioOnlyHlsSettings?: AudioOnlyHlsSettings;
    StandardHlsSettings?: StandardHlsSettings;
  }
  export type HlsStreamInfResolution = "EXCLUDE"|"INCLUDE"|string;
  export type HlsTimedMetadataId3Frame = "NONE"|"PRIV"|"TDRL"|string;
  export type HlsTsFileMode = "SEGMENTED_FILES"|"SINGLE_FILE"|string;
  export type HlsWebdavHttpTransferMode = "CHUNKED"|"NON_CHUNKED"|string;
  export interface HlsWebdavSettings {
    /**
     * Number of seconds to wait before retrying connection to the CDN if the connection is lost.
     */
    ConnectionRetryInterval?: __integer;
    /**
     * Size in seconds of file cache for streaming outputs.
     */
    FilecacheDuration?: __integer;
    /**
     * Specify whether or not to use chunked transfer encoding to WebDAV.
     */
    HttpTransferMode?: HlsWebdavHttpTransferMode;
    /**
     * Number of retry attempts that will be made before the Live Event is put into an error state.
     */
    NumRetries?: __integer;
    /**
     * If a streaming output fails, number of seconds to wait until a restart is initiated. A value of 0 means never restart.
     */
    RestartDelay?: __integer;
  }
  export interface Input {
    /**
     * The Unique ARN of the input (generated, immutable).
     */
    Arn?: __string;
    /**
     * A list of channel IDs that that input is attached to (currently an input can only be attached to one channel).
     */
    AttachedChannels?: ListOf__string;
    /**
     * A list of the destinations of the input (PUSH-type).
     */
    Destinations?: ListOfInputDestination;
    /**
     * The generated ID of the input (unique for user account, immutable).
     */
    Id?: __string;
    /**
     * The user-assigned name (This is a mutable value).
     */
    Name?: __string;
    /**
     * A list of IDs for all the security groups attached to the input.
     */
    SecurityGroups?: ListOf__string;
    /**
     * A list of the sources of the input (PULL-type).
     */
    Sources?: ListOfInputSource;
    State?: InputState;
    Type?: InputType;
  }
  export interface InputAttachment {
    /**
     * The ID of the input
     */
    InputId?: __string;
    /**
     * Settings of an input (caption selector, etc.)
     */
    InputSettings?: InputSettings;
  }
  export interface InputChannelLevel {
    /**
     * Remixing value. Units are in dB and acceptable values are within the range from -60 (mute) and 6 dB.
     */
    Gain?: __integer;
    /**
     * The index of the input channel used as a source.
     */
    InputChannel?: __integer;
  }
  export type InputCodec = "MPEG2"|"AVC"|"HEVC"|string;
  export type InputDeblockFilter = "DISABLED"|"ENABLED"|string;
  export type InputDenoiseFilter = "DISABLED"|"ENABLED"|string;
  export interface InputDestination {
    /**
     * The system-generated static IP address of endpoint.
It remains fixed for the lifetime of the input.

     */
    Ip?: __string;
    /**
     * The port number for the input.
     */
    Port?: __string;
    /**
     * This represents the endpoint that the customer stream will be
pushed to.

     */
    Url?: __string;
  }
  export interface InputDestinationRequest {
    /**
     * A unique name for the location the RTMP stream is being pushed
to.

     */
    StreamName?: __string;
  }
  export type InputFilter = "AUTO"|"DISABLED"|"FORCED"|string;
  export interface InputLocation {
    /**
     * key used to extract the password from EC2 Parameter store
     */
    PasswordParam?: __string;
    /**
     * Uniform Resource Identifier - This should be a path to a file accessible to the Live system (eg. a http:// URI) depending on the output type. For example, a rtmpEndpoint should have a uri simliar to: "rtmp://fmsserver/live".
     */
    Uri?: __string;
    /**
     * Documentation update needed
     */
    Username?: __string;
  }
  export type InputLossActionForHlsOut = "EMIT_OUTPUT"|"PAUSE_OUTPUT"|string;
  export type InputLossActionForMsSmoothOut = "EMIT_OUTPUT"|"PAUSE_OUTPUT"|string;
  export type InputLossActionForUdpOut = "DROP_PROGRAM"|"DROP_TS"|"EMIT_PROGRAM"|string;
  export interface InputLossBehavior {
    /**
     * Documentation update needed
     */
    BlackFrameMsec?: __integer;
    /**
     * When input loss image type is "color" this field specifies the color to use. Value: 6 hex characters representing the values of RGB.
     */
    InputLossImageColor?: __string;
    /**
     * When input loss image type is "slate" these fields specify the parameters for accessing the slate.
     */
    InputLossImageSlate?: InputLocation;
    /**
     * Indicates whether to substitute a solid color or a slate into the output after input loss exceeds blackFrameMsec.
     */
    InputLossImageType?: InputLossImageType;
    /**
     * Documentation update needed
     */
    RepeatFrameMsec?: __integer;
  }
  export type InputLossImageType = "COLOR"|"SLATE"|string;
  export type InputMaximumBitrate = "MAX_10_MBPS"|"MAX_20_MBPS"|"MAX_50_MBPS"|string;
  export type InputResolution = "SD"|"HD"|"UHD"|string;
  export interface InputSecurityGroup {
    /**
     * Unique ARN of Input Security Group
     */
    Arn?: __string;
    /**
     * The Id of the Input Security Group
     */
    Id?: __string;
    /**
     * Whitelist rules and their sync status
     */
    WhitelistRules?: ListOfInputWhitelistRule;
  }
  export interface InputSecurityGroupWhitelistRequest {
    /**
     * List of IPv4 CIDR addresses to whitelist
     */
    WhitelistRules?: ListOfInputWhitelistRuleCidr;
  }
  export interface InputSettings {
    /**
     * Used to select the audio stream to decode for inputs that have multiple available.
     */
    AudioSelectors?: ListOfAudioSelector;
    /**
     * Used to select the caption input to use for inputs that have multiple available.
     */
    CaptionSelectors?: ListOfCaptionSelector;
    /**
     * Enable or disable the deblock filter when filtering.
     */
    DeblockFilter?: InputDeblockFilter;
    /**
     * Enable or disable the denoise filter when filtering.
     */
    DenoiseFilter?: InputDenoiseFilter;
    /**
     * Adjusts the magnitude of filtering from 1 (minimal) to 5 (strongest).
     */
    FilterStrength?: __integer;
    /**
     * Turns on the filter for this input. MPEG-2 inputs have the deblocking filter enabled by default.
1) auto - filtering will be applied depending on input type/quality
2) disabled - no filtering will be applied to the input
3) forced - filtering will be applied regardless of input type
     */
    InputFilter?: InputFilter;
    /**
     * Input settings.
     */
    NetworkInputSettings?: NetworkInputSettings;
    /**
     * Loop input if it is a file. This allows a file input to be streamed indefinitely.
     */
    SourceEndBehavior?: InputSourceEndBehavior;
    /**
     * Informs which video elementary stream to decode for input types that have multiple available.
     */
    VideoSelector?: VideoSelector;
  }
  export interface InputSource {
    /**
     * The key used to extract the password from EC2 Parameter store.
     */
    PasswordParam?: __string;
    /**
     * This represents the customer's source URL where stream is
pulled from.

     */
    Url?: __string;
    /**
     * The username for the input source.
     */
    Username?: __string;
  }
  export type InputSourceEndBehavior = "CONTINUE"|"LOOP"|string;
  export interface InputSourceRequest {
    /**
     * The key used to extract the password from EC2 Parameter store.
     */
    PasswordParam?: __string;
    /**
     * This represents the customer's source URL where stream is
pulled from.

     */
    Url?: __string;
    /**
     * The username for the input source.
     */
    Username?: __string;
  }
  export interface InputSpecification {
    /**
     * Input codec
     */
    Codec?: InputCodec;
    /**
     * Maximum input bitrate, categorized coarsely
     */
    MaximumBitrate?: InputMaximumBitrate;
    /**
     * Input resolution, categorized coarsely
     */
    Resolution?: InputResolution;
  }
  export type InputState = "CREATING"|"DETACHED"|"ATTACHED"|"DELETING"|"DELETED"|string;
  export type InputType = "UDP_PUSH"|"RTP_PUSH"|"RTMP_PUSH"|"RTMP_PULL"|"URL_PULL"|string;
  export interface InputWhitelistRule {
    /**
     * The IPv4 CIDR that's whitelisted.
     */
    Cidr?: __string;
  }
  export interface InputWhitelistRuleCidr {
    /**
     * The IPv4 CIDR to whitelist
     */
    Cidr?: __string;
  }
  export interface InternalServiceError {
    Message?: __string;
  }
  export interface InvalidRequest {
    Message?: __string;
  }
  export interface KeyProviderSettings {
    StaticKeySettings?: StaticKeySettings;
  }
  export interface LimitExceeded {
    Message?: __string;
  }
  export interface ListChannelsRequest {
    MaxResults?: MaxResults;
    NextToken?: __string;
  }
  export interface ListChannelsResponse {
    Channels?: ListOfChannelSummary;
    NextToken?: __string;
  }
  export interface ListChannelsResultModel {
    Channels?: ListOfChannelSummary;
    NextToken?: __string;
  }
  export interface ListInputSecurityGroupsRequest {
    MaxResults?: MaxResults;
    NextToken?: __string;
  }
  export interface ListInputSecurityGroupsResponse {
    /**
     * List of input security groups
     */
    InputSecurityGroups?: ListOfInputSecurityGroup;
    NextToken?: __string;
  }
  export interface ListInputSecurityGroupsResultModel {
    /**
     * List of input security groups
     */
    InputSecurityGroups?: ListOfInputSecurityGroup;
    NextToken?: __string;
  }
  export interface ListInputsRequest {
    MaxResults?: MaxResults;
    NextToken?: __string;
  }
  export interface ListInputsResponse {
    Inputs?: ListOfInput;
    NextToken?: __string;
  }
  export interface ListInputsResultModel {
    Inputs?: ListOfInput;
    NextToken?: __string;
  }
  export type ListOfAudioChannelMapping = AudioChannelMapping[];
  export type ListOfAudioDescription = AudioDescription[];
  export type ListOfAudioSelector = AudioSelector[];
  export type ListOfCaptionDescription = CaptionDescription[];
  export type ListOfCaptionLanguageMapping = CaptionLanguageMapping[];
  export type ListOfCaptionSelector = CaptionSelector[];
  export type ListOfChannelEgressEndpoint = ChannelEgressEndpoint[];
  export type ListOfChannelSummary = ChannelSummary[];
  export type ListOfHlsAdMarkers = HlsAdMarkers[];
  export type ListOfInput = Input[];
  export type ListOfInputAttachment = InputAttachment[];
  export type ListOfInputChannelLevel = InputChannelLevel[];
  export type ListOfInputDestination = InputDestination[];
  export type ListOfInputDestinationRequest = InputDestinationRequest[];
  export type ListOfInputSecurityGroup = InputSecurityGroup[];
  export type ListOfInputSource = InputSource[];
  export type ListOfInputSourceRequest = InputSourceRequest[];
  export type ListOfInputWhitelistRule = InputWhitelistRule[];
  export type ListOfInputWhitelistRuleCidr = InputWhitelistRuleCidr[];
  export type ListOfOutput = Output[];
  export type ListOfOutputDestination = OutputDestination[];
  export type ListOfOutputDestinationSettings = OutputDestinationSettings[];
  export type ListOfOutputGroup = OutputGroup[];
  export type ListOfValidationError = ValidationError[];
  export type ListOfVideoDescription = VideoDescription[];
  export type ListOf__string = __string[];
  export type M2tsAbsentInputAudioBehavior = "DROP"|"ENCODE_SILENCE"|string;
  export type M2tsArib = "DISABLED"|"ENABLED"|string;
  export type M2tsAribCaptionsPidControl = "AUTO"|"USE_CONFIGURED"|string;
  export type M2tsAudioBufferModel = "ATSC"|"DVB"|string;
  export type M2tsAudioInterval = "VIDEO_AND_FIXED_INTERVALS"|"VIDEO_INTERVAL"|string;
  export type M2tsAudioStreamType = "ATSC"|"DVB"|string;
  export type M2tsBufferModel = "MULTIPLEX"|"NONE"|string;
  export type M2tsCcDescriptor = "DISABLED"|"ENABLED"|string;
  export type M2tsEbifControl = "NONE"|"PASSTHROUGH"|string;
  export type M2tsEbpPlacement = "VIDEO_AND_AUDIO_PIDS"|"VIDEO_PID"|string;
  export type M2tsEsRateInPes = "EXCLUDE"|"INCLUDE"|string;
  export type M2tsKlv = "NONE"|"PASSTHROUGH"|string;
  export type M2tsPcrControl = "CONFIGURED_PCR_PERIOD"|"PCR_EVERY_PES_PACKET"|string;
  export type M2tsRateMode = "CBR"|"VBR"|string;
  export type M2tsScte35Control = "NONE"|"PASSTHROUGH"|string;
  export type M2tsSegmentationMarkers = "EBP"|"EBP_LEGACY"|"NONE"|"PSI_SEGSTART"|"RAI_ADAPT"|"RAI_SEGSTART"|string;
  export type M2tsSegmentationStyle = "MAINTAIN_CADENCE"|"RESET_CADENCE"|string;
  export interface M2tsSettings {
    /**
     * When set to drop, output audio streams will be removed from the program if the selected input audio stream is removed from the input. This allows the output audio configuration to dynamically change based on input configuration. If this is set to encodeSilence, all output audio streams will output encoded silence when not connected to an active input stream.
     */
    AbsentInputAudioBehavior?: M2tsAbsentInputAudioBehavior;
    /**
     * When set to enabled, uses ARIB-compliant field muxing and removes video descriptor.
     */
    Arib?: M2tsArib;
    /**
     * Packet Identifier (PID) for ARIB Captions in the transport stream. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
     */
    AribCaptionsPid?: __string;
    /**
     * If set to auto, pid number used for ARIB Captions will be auto-selected from unused pids.  If set to useConfigured, ARIB Captions will be on the configured pid number.
     */
    AribCaptionsPidControl?: M2tsAribCaptionsPidControl;
    /**
     * When set to dvb, uses DVB buffer model for Dolby Digital audio.  When set to atsc, the ATSC model is used.
     */
    AudioBufferModel?: M2tsAudioBufferModel;
    /**
     * The number of audio frames to insert for each PES packet.
     */
    AudioFramesPerPes?: __integer;
    /**
     * Packet Identifier (PID) of the elementary audio stream(s) in the transport stream. Multiple values are accepted, and can be entered in ranges and/or by comma separation. Can be entered as decimal or hexadecimal values. Each PID specified must be in the range of 32 (or 0x20)..8182 (or 0x1ff6).
     */
    AudioPids?: __string;
    /**
     * When set to atsc, uses stream type = 0x81 for AC3 and stream type = 0x87 for EAC3. When set to dvb, uses stream type = 0x06.
     */
    AudioStreamType?: M2tsAudioStreamType;
    /**
     * The output bitrate of the transport stream in bits per second. Setting to 0 lets the muxer automatically determine the appropriate bitrate.
     */
    Bitrate?: __integer;
    /**
     * If set to multiplex, use multiplex buffer model for accurate interleaving.  Setting to bufferModel to none can lead to lower latency, but low-memory devices may not be able to play back the stream without interruptions.
     */
    BufferModel?: M2tsBufferModel;
    /**
     * When set to enabled, generates captionServiceDescriptor in PMT.
     */
    CcDescriptor?: M2tsCcDescriptor;
    /**
     * Inserts DVB Network Information Table (NIT) at the specified table repetition interval.
     */
    DvbNitSettings?: DvbNitSettings;
    /**
     * Inserts DVB Service Description Table (SDT) at the specified table repetition interval.
     */
    DvbSdtSettings?: DvbSdtSettings;
    /**
     * Packet Identifier (PID) for input source DVB Subtitle data to this output. Multiple values are accepted, and can be entered in ranges and/or by comma separation. Can be entered as decimal or hexadecimal values.  Each PID specified must be in the range of 32 (or 0x20)..8182 (or 0x1ff6).
     */
    DvbSubPids?: __string;
    /**
     * Inserts DVB Time and Date Table (TDT) at the specified table repetition interval.
     */
    DvbTdtSettings?: DvbTdtSettings;
    /**
     * Packet Identifier (PID) for input source DVB Teletext data to this output. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
     */
    DvbTeletextPid?: __string;
    /**
     * If set to passthrough, passes any EBIF data from the input source to this output.
     */
    Ebif?: M2tsEbifControl;
    /**
     * When videoAndFixedIntervals is selected, audio EBP markers will be added to partitions 3 and 4. The interval between these additional markers will be fixed, and will be slightly shorter than the video EBP marker interval. Only available when EBP Cablelabs segmentation markers are selected.  Partitions 1 and 2 will always follow the video interval.
     */
    EbpAudioInterval?: M2tsAudioInterval;
    /**
     * When set, enforces that Encoder Boundary Points do not come within the specified time interval of each other by looking ahead at input video. If another EBP is going to come in within the specified time interval, the current EBP is not emitted, and the segment is "stretched" to the next marker.  The lookahead value does not add latency to the system. The Live Event must be configured elsewhere to create sufficient latency to make the lookahead accurate.
     */
    EbpLookaheadMs?: __integer;
    /**
     * Controls placement of EBP on Audio PIDs. If set to videoAndAudioPids, EBP markers will be placed on the video PID and all audio PIDs.  If set to videoPid, EBP markers will be placed on only the video PID.
     */
    EbpPlacement?: M2tsEbpPlacement;
    /**
     * This field is unused and deprecated.
     */
    EcmPid?: __string;
    /**
     * Include or exclude the ES Rate field in the PES header.
     */
    EsRateInPes?: M2tsEsRateInPes;
    /**
     * Packet Identifier (PID) for input source ETV Platform data to this output. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
     */
    EtvPlatformPid?: __string;
    /**
     * Packet Identifier (PID) for input source ETV Signal data to this output. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
     */
    EtvSignalPid?: __string;
    /**
     * The length in seconds of each fragment. Only used with EBP markers.
     */
    FragmentTime?: __double;
    /**
     * If set to passthrough, passes any KLV data from the input source to this output.
     */
    Klv?: M2tsKlv;
    /**
     * Packet Identifier (PID) for input source KLV data to this output. Multiple values are accepted, and can be entered in ranges and/or by comma separation. Can be entered as decimal or hexadecimal values.  Each PID specified must be in the range of 32 (or 0x20)..8182 (or 0x1ff6).
     */
    KlvDataPids?: __string;
    /**
     * Value in bits per second of extra null packets to insert into the transport stream. This can be used if a downstream encryption system requires periodic null packets.
     */
    NullPacketBitrate?: __double;
    /**
     * The number of milliseconds between instances of this table in the output transport stream.  Valid values are 0, 10..1000.
     */
    PatInterval?: __integer;
    /**
     * When set to pcrEveryPesPacket, a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This parameter is effective only when the PCR PID is the same as the video or audio elementary stream.
     */
    PcrControl?: M2tsPcrControl;
    /**
     * Maximum time in milliseconds between Program Clock Reference (PCRs) inserted into the transport stream.
     */
    PcrPeriod?: __integer;
    /**
     * Packet Identifier (PID) of the Program Clock Reference (PCR) in the transport stream. When no value is given, the encoder will assign the same value as the Video PID. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
     */
    PcrPid?: __string;
    /**
     * The number of milliseconds between instances of this table in the output transport stream. Valid values are 0, 10..1000.
     */
    PmtInterval?: __integer;
    /**
     * Packet Identifier (PID) for the Program Map Table (PMT) in the transport stream. Can be entered as a decimal or hexadecimal value. Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
     */
    PmtPid?: __string;
    /**
     * The value of the program number field in the Program Map Table.
     */
    ProgramNum?: __integer;
    /**
     * When vbr, does not insert null packets into transport stream to fill specified bitrate. The bitrate setting acts as the maximum bitrate when vbr is set.
     */
    RateMode?: M2tsRateMode;
    /**
     * Packet Identifier (PID) for input source SCTE-27 data to this output. Multiple values are accepted, and can be entered in ranges and/or by comma separation. Can be entered as decimal or hexadecimal values.  Each PID specified must be in the range of 32 (or 0x20)..8182 (or 0x1ff6).
     */
    Scte27Pids?: __string;
    /**
     * Optionally pass SCTE-35 signals from the input source to this output.
     */
    Scte35Control?: M2tsScte35Control;
    /**
     * Packet Identifier (PID) of the SCTE-35 stream in the transport stream. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
     */
    Scte35Pid?: __string;
    /**
     * Inserts segmentation markers at each segmentationTime period. raiSegstart sets the Random Access Indicator bit in the adaptation field. raiAdapt sets the RAI bit and adds the current timecode in the private data bytes. psiSegstart inserts PAT and PMT tables at the start of segments. ebp adds Encoder Boundary Point information to the adaptation field as per OpenCable specification OC-SP-EBP-I01-130118. ebpLegacy adds Encoder Boundary Point information to the adaptation field using a legacy proprietary format.
     */
    SegmentationMarkers?: M2tsSegmentationMarkers;
    /**
     * The segmentation style parameter controls how segmentation markers are inserted into the transport stream. With avails, it is possible that segments may be truncated, which can influence where future segmentation markers are inserted.

When a segmentation style of "resetCadence" is selected and a segment is truncated due to an avail, we will reset the segmentation cadence. This means the subsequent segment will have a duration of $segmentationTime seconds.

When a segmentation style of "maintainCadence" is selected and a segment is truncated due to an avail, we will not reset the segmentation cadence. This means the subsequent segment will likely be truncated as well. However, all segments after that will have a duration of $segmentationTime seconds. Note that EBP lookahead is a slight exception to this rule.
     */
    SegmentationStyle?: M2tsSegmentationStyle;
    /**
     * The length in seconds of each segment. Required unless markers is set to None_.
     */
    SegmentationTime?: __double;
    /**
     * When set to passthrough, timed metadata will be passed through from input to output.
     */
    TimedMetadataBehavior?: M2tsTimedMetadataBehavior;
    /**
     * Packet Identifier (PID) of the timed metadata stream in the transport stream. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
     */
    TimedMetadataPid?: __string;
    /**
     * The value of the transport stream ID field in the Program Map Table.
     */
    TransportStreamId?: __integer;
    /**
     * Packet Identifier (PID) of the elementary video stream in the transport stream. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
     */
    VideoPid?: __string;
  }
  export type M2tsTimedMetadataBehavior = "NO_PASSTHROUGH"|"PASSTHROUGH"|string;
  export type M3u8PcrControl = "CONFIGURED_PCR_PERIOD"|"PCR_EVERY_PES_PACKET"|string;
  export type M3u8Scte35Behavior = "NO_PASSTHROUGH"|"PASSTHROUGH"|string;
  export interface M3u8Settings {
    /**
     * The number of audio frames to insert for each PES packet.
     */
    AudioFramesPerPes?: __integer;
    /**
     * Packet Identifier (PID) of the elementary audio stream(s) in the transport stream. Multiple values are accepted, and can be entered in ranges and/or by comma separation. Can be entered as decimal or hexadecimal values.
     */
    AudioPids?: __string;
    /**
     * This parameter is unused and deprecated.
     */
    EcmPid?: __string;
    /**
     * The number of milliseconds between instances of this table in the output transport stream. A value of \"0\" writes out the PMT once per segment file.
     */
    PatInterval?: __integer;
    /**
     * When set to pcrEveryPesPacket, a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This parameter is effective only when the PCR PID is the same as the video or audio elementary stream.
     */
    PcrControl?: M3u8PcrControl;
    /**
     * Maximum time in milliseconds between Program Clock References (PCRs) inserted into the transport stream.
     */
    PcrPeriod?: __integer;
    /**
     * Packet Identifier (PID) of the Program Clock Reference (PCR) in the transport stream. When no value is given, the encoder will assign the same value as the Video PID. Can be entered as a decimal or hexadecimal value.
     */
    PcrPid?: __string;
    /**
     * The number of milliseconds between instances of this table in the output transport stream. A value of \"0\" writes out the PMT once per segment file.
     */
    PmtInterval?: __integer;
    /**
     * Packet Identifier (PID) for the Program Map Table (PMT) in the transport stream. Can be entered as a decimal or hexadecimal value.
     */
    PmtPid?: __string;
    /**
     * The value of the program number field in the Program Map Table.
     */
    ProgramNum?: __integer;
    /**
     * If set to passthrough, passes any SCTE-35 signals from the input source to this output.
     */
    Scte35Behavior?: M3u8Scte35Behavior;
    /**
     * Packet Identifier (PID) of the SCTE-35 stream in the transport stream. Can be entered as a decimal or hexadecimal value.
     */
    Scte35Pid?: __string;
    /**
     * When set to passthrough, timed metadata is passed through from input to output.
     */
    TimedMetadataBehavior?: M3u8TimedMetadataBehavior;
    /**
     * The value of the transport stream ID field in the Program Map Table.
     */
    TransportStreamId?: __integer;
    /**
     * Packet Identifier (PID) of the elementary video stream in the transport stream. Can be entered as a decimal or hexadecimal value.
     */
    VideoPid?: __string;
  }
  export type M3u8TimedMetadataBehavior = "NO_PASSTHROUGH"|"PASSTHROUGH"|string;
  export type MaxResults = number;
  export type Mp2CodingMode = "CODING_MODE_1_0"|"CODING_MODE_2_0"|string;
  export interface Mp2Settings {
    /**
     * Average bitrate in bits/second.
     */
    Bitrate?: __double;
    /**
     * The MPEG2 Audio coding mode.  Valid values are codingMode10 (for mono) or codingMode20 (for stereo).
     */
    CodingMode?: Mp2CodingMode;
    /**
     * Sample rate in Hz.
     */
    SampleRate?: __double;
  }
  export interface MsSmoothGroupSettings {
    /**
     * The value of the "Acquisition Point Identity" element used in each message placed in the sparse track.  Only enabled if sparseTrackType is not "none".
     */
    AcquisitionPointId?: __string;
    /**
     * If set to passthrough for an audio-only MS Smooth output, the fragment absolute time will be set to the current timecode. This option does not write timecodes to the audio elementary stream.
     */
    AudioOnlyTimecodeControl?: SmoothGroupAudioOnlyTimecodeControl;
    /**
     * If set to verifyAuthenticity, verify the https certificate chain to a trusted Certificate Authority (CA).  This will cause https outputs to self-signed certificates to fail unless those certificates are manually added to the OS trusted keystore.
     */
    CertificateMode?: SmoothGroupCertificateMode;
    /**
     * Number of seconds to wait before retrying connection to the IIS server if the connection is lost. Content will be cached during this time and the cache will be be delivered to the IIS server once the connection is re-established.
     */
    ConnectionRetryInterval?: __integer;
    /**
     * Smooth Streaming publish point on an IIS server. Elemental Live acts as a "Push" encoder to IIS.
     */
    Destination?: OutputLocationRef;
    /**
     * MS Smooth event ID to be sent to the IIS server.

Should only be specified if eventIdMode is set to useConfigured.
     */
    EventId?: __string;
    /**
     * Specifies whether or not to send an event ID to the IIS server. If no event ID is sent and the same Live Event is used without changing the publishing point, clients might see cached video from the previous run.

Options:
- "useConfigured" - use the value provided in eventId
- "useTimestamp" - generate and send an event ID based on the current timestamp
- "noEventId" - do not send an event ID to the IIS server.
     */
    EventIdMode?: SmoothGroupEventIdMode;
    /**
     * When set to sendEos, send EOS signal to IIS server when stopping the event
     */
    EventStopBehavior?: SmoothGroupEventStopBehavior;
    /**
     * Size in seconds of file cache for streaming outputs.
     */
    FilecacheDuration?: __integer;
    /**
     * Length of mp4 fragments to generate (in seconds). Fragment length must be compatible with GOP size and framerate.
     */
    FragmentLength?: __integer;
    /**
     * Parameter that control output group behavior on input loss.
     */
    InputLossAction?: InputLossActionForMsSmoothOut;
    /**
     * Number of retry attempts.
     */
    NumRetries?: __integer;
    /**
     * Number of seconds before initiating a restart due to output failure, due to exhausting the numRetries on one segment, or exceeding filecacheDuration.
     */
    RestartDelay?: __integer;
    /**
     * When set to useInputSegmentation, the output segment or fragment points are set by the RAI markers from the input streams.
     */
    SegmentationMode?: SmoothGroupSegmentationMode;
    /**
     * Outputs that are "output locked" can use this delay. Assign a delay to the output that is "secondary".  Do not assign a delay to the "primary" output. The delay means that the primary output will always reach the downstream system before the secondary, which helps ensure that the downstream system always uses the primary output. (If there were no delay, the downstream system might flip-flop between whichever output happens to arrive first.) If the primary fails, the downstream system will switch to the secondary output. When the primary is restarted, the downstream system will switch back to the primary (because once again it is always arriving first)
     */
    SendDelayMs?: __integer;
    /**
     * If set to scte35, use incoming SCTE-35 messages to generate a sparse track in this group of MS-Smooth outputs.
     */
    SparseTrackType?: SmoothGroupSparseTrackType;
    /**
     * When set to send, send stream manifest so publishing point doesn't start until all streams start.
     */
    StreamManifestBehavior?: SmoothGroupStreamManifestBehavior;
    /**
     * Timestamp offset for the event.  Only used if timestampOffsetMode is set to useConfiguredOffset.
     */
    TimestampOffset?: __string;
    /**
     * Type of timestamp date offset to use.
- useEventStartDate: Use the date the event was started as the offset
- useConfiguredOffset: Use an explicitly configured date as the offset
     */
    TimestampOffsetMode?: SmoothGroupTimestampOffsetMode;
  }
  export interface MsSmoothOutputSettings {
    /**
     * String concatenated to the end of the destination filename.  Required for multiple outputs of the same type.
     */
    NameModifier?: __string;
  }
  export type NetworkInputServerValidation = "CHECK_CRYPTOGRAPHY_AND_VALIDATE_NAME"|"CHECK_CRYPTOGRAPHY_ONLY"|string;
  export interface NetworkInputSettings {
    /**
     * Specifies HLS input settings when the uri is for a HLS manifest.
     */
    HlsInputSettings?: HlsInputSettings;
    /**
     * Check HTTPS server certificates. When set to checkCryptographyOnly, cryptography in the certificate will be checked, but not the server's name. Certain subdomains (notably S3 buckets that use dots in the bucket name) do not strictly match the corresponding certificate's wildcard pattern and would otherwise cause the event to error. This setting is ignored for protocols that do not use https.
     */
    ServerValidation?: NetworkInputServerValidation;
  }
  export interface Output {
    /**
     * The names of the AudioDescriptions used as audio sources for this output.
     */
    AudioDescriptionNames?: ListOf__string;
    /**
     * The names of the CaptionDescriptions used as caption sources for this output.
     */
    CaptionDescriptionNames?: ListOf__string;
    /**
     * The name used to identify an output.
     */
    OutputName?: __string;
    /**
     * Output type-specific settings.
     */
    OutputSettings?: OutputSettings;
    /**
     * The name of the VideoDescription used as the source for this output.
     */
    VideoDescriptionName?: __string;
  }
  export interface OutputDestination {
    /**
     * User-specified id. This is used in an output group or an output.
     */
    Id?: __string;
    /**
     * Destination settings for output; one for each redundant encoder.
     */
    Settings?: ListOfOutputDestinationSettings;
  }
  export interface OutputDestinationSettings {
    /**
     * key used to extract the password from EC2 Parameter store
     */
    PasswordParam?: __string;
    /**
     * A URL specifying a destination
     */
    Url?: __string;
    /**
     * username for destination
     */
    Username?: __string;
  }
  export interface OutputGroup {
    /**
     * Custom output group name optionally defined by the user.  Only letters, numbers, and the underscore character allowed; only 32 characters allowed.
     */
    Name?: __string;
    /**
     * Settings associated with the output group.
     */
    OutputGroupSettings?: OutputGroupSettings;
    Outputs?: ListOfOutput;
  }
  export interface OutputGroupSettings {
    ArchiveGroupSettings?: ArchiveGroupSettings;
    HlsGroupSettings?: HlsGroupSettings;
    MsSmoothGroupSettings?: MsSmoothGroupSettings;
    UdpGroupSettings?: UdpGroupSettings;
  }
  export interface OutputLocationRef {
    DestinationRefId?: __string;
  }
  export interface OutputSettings {
    ArchiveOutputSettings?: ArchiveOutputSettings;
    HlsOutputSettings?: HlsOutputSettings;
    MsSmoothOutputSettings?: MsSmoothOutputSettings;
    UdpOutputSettings?: UdpOutputSettings;
  }
  export interface PassThroughSettings {
  }
  export interface RemixSettings {
    /**
     * Mapping of input channels to output channels, with appropriate gain adjustments.
     */
    ChannelMappings?: ListOfAudioChannelMapping;
    /**
     * Number of input channels to be used.
     */
    ChannelsIn?: __integer;
    /**
     * Number of output channels to be produced.
Valid values: 1, 2, 4, 6, 8
     */
    ChannelsOut?: __integer;
  }
  export interface ResourceConflict {
    Message?: __string;
  }
  export interface ResourceNotFound {
    Message?: __string;
  }
  export type Scte20Convert608To708 = "DISABLED"|"UPCONVERT"|string;
  export interface Scte20PlusEmbeddedDestinationSettings {
  }
  export interface Scte20SourceSettings {
    /**
     * If upconvert, 608 data is both passed through via the "608 compatibility bytes" fields of the 708 wrapper as well as translated into 708. 708 data present in the source content will be discarded.
     */
    Convert608To708?: Scte20Convert608To708;
    /**
     * Specifies the 608/708 channel number within the video track from which to extract captions. Unused for passthrough.
     */
    Source608ChannelNumber?: __integer;
  }
  export interface Scte27DestinationSettings {
  }
  export interface Scte27SourceSettings {
    /**
     * The pid field is used in conjunction with the caption selector languageCode field as follows:
  - Specify PID and Language: Extracts captions from that PID; the language is "informational".
  - Specify PID and omit Language: Extracts the specified PID.
  - Omit PID and specify Language: Extracts the specified language, whichever PID that happens to be.
  - Omit PID and omit Language: Valid only if source is DVB-Sub that is being passed through; all languages will be passed through.
     */
    Pid?: __integer;
  }
  export type Scte35AposNoRegionalBlackoutBehavior = "FOLLOW"|"IGNORE"|string;
  export type Scte35AposWebDeliveryAllowedBehavior = "FOLLOW"|"IGNORE"|string;
  export interface Scte35SpliceInsert {
    /**
     * When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time. This only applies to embedded SCTE 104/35 messages and does not apply to OOB messages.
     */
    AdAvailOffset?: __integer;
    /**
     * When set to ignore, Segment Descriptors with noRegionalBlackoutFlag set to 0 will no longer trigger blackouts or Ad Avail slates
     */
    NoRegionalBlackoutFlag?: Scte35SpliceInsertNoRegionalBlackoutBehavior;
    /**
     * When set to ignore, Segment Descriptors with webDeliveryAllowedFlag set to 0 will no longer trigger blackouts or Ad Avail slates
     */
    WebDeliveryAllowedFlag?: Scte35SpliceInsertWebDeliveryAllowedBehavior;
  }
  export type Scte35SpliceInsertNoRegionalBlackoutBehavior = "FOLLOW"|"IGNORE"|string;
  export type Scte35SpliceInsertWebDeliveryAllowedBehavior = "FOLLOW"|"IGNORE"|string;
  export interface Scte35TimeSignalApos {
    /**
     * When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time. This only applies to embedded SCTE 104/35 messages and does not apply to OOB messages.
     */
    AdAvailOffset?: __integer;
    /**
     * When set to ignore, Segment Descriptors with noRegionalBlackoutFlag set to 0 will no longer trigger blackouts or Ad Avail slates
     */
    NoRegionalBlackoutFlag?: Scte35AposNoRegionalBlackoutBehavior;
    /**
     * When set to ignore, Segment Descriptors with webDeliveryAllowedFlag set to 0 will no longer trigger blackouts or Ad Avail slates
     */
    WebDeliveryAllowedFlag?: Scte35AposWebDeliveryAllowedBehavior;
  }
  export type SmoothGroupAudioOnlyTimecodeControl = "PASSTHROUGH"|"USE_CONFIGURED_CLOCK"|string;
  export type SmoothGroupCertificateMode = "SELF_SIGNED"|"VERIFY_AUTHENTICITY"|string;
  export type SmoothGroupEventIdMode = "NO_EVENT_ID"|"USE_CONFIGURED"|"USE_TIMESTAMP"|string;
  export type SmoothGroupEventStopBehavior = "NONE"|"SEND_EOS"|string;
  export type SmoothGroupSegmentationMode = "USE_INPUT_SEGMENTATION"|"USE_SEGMENT_DURATION"|string;
  export type SmoothGroupSparseTrackType = "NONE"|"SCTE_35"|string;
  export type SmoothGroupStreamManifestBehavior = "DO_NOT_SEND"|"SEND"|string;
  export type SmoothGroupTimestampOffsetMode = "USE_CONFIGURED_OFFSET"|"USE_EVENT_START_DATE"|string;
  export interface SmpteTtDestinationSettings {
  }
  export interface StandardHlsSettings {
    /**
     * List all the audio groups that are used with the video output stream. Input all the audio GROUP-IDs that are associated to the video, separate by ','.
     */
    AudioRenditionSets?: __string;
    M3u8Settings?: M3u8Settings;
  }
  export interface StartChannelRequest {
    /**
     * A request to start a channel
     */
    ChannelId: __string;
  }
  export interface StartChannelResponse {
    /**
     * The unique arn of the channel.
     */
    Arn?: __string;
    /**
     * A list of destinations of the channel. For UDP outputs, there is one
destination per output. For other types (HLS, for example), there is
one destination per packager.

     */
    Destinations?: ListOfOutputDestination;
    /**
     * The endpoints where outgoing connections initiate from
     */
    EgressEndpoints?: ListOfChannelEgressEndpoint;
    EncoderSettings?: EncoderSettings;
    /**
     * The unique id of the channel.
     */
    Id?: __string;
    /**
     * List of input attachments for channel.
     */
    InputAttachments?: ListOfInputAttachment;
    InputSpecification?: InputSpecification;
    /**
     * The name of the channel. (user-mutable)
     */
    Name?: __string;
    /**
     * The number of currently healthy pipelines.
     */
    PipelinesRunningCount?: __integer;
    /**
     * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
     */
    RoleArn?: __string;
    State?: ChannelState;
  }
  export interface StaticKeySettings {
    /**
     * The URL of the license server used for protecting content.
     */
    KeyProviderServer?: InputLocation;
    /**
     * Static key value as a 32 character hexadecimal string.
     */
    StaticKeyValue?: __string;
  }
  export interface StopChannelRequest {
    /**
     * A request to stop a running channel
     */
    ChannelId: __string;
  }
  export interface StopChannelResponse {
    /**
     * The unique arn of the channel.
     */
    Arn?: __string;
    /**
     * A list of destinations of the channel. For UDP outputs, there is one
destination per output. For other types (HLS, for example), there is
one destination per packager.

     */
    Destinations?: ListOfOutputDestination;
    /**
     * The endpoints where outgoing connections initiate from
     */
    EgressEndpoints?: ListOfChannelEgressEndpoint;
    EncoderSettings?: EncoderSettings;
    /**
     * The unique id of the channel.
     */
    Id?: __string;
    /**
     * List of input attachments for channel.
     */
    InputAttachments?: ListOfInputAttachment;
    InputSpecification?: InputSpecification;
    /**
     * The name of the channel. (user-mutable)
     */
    Name?: __string;
    /**
     * The number of currently healthy pipelines.
     */
    PipelinesRunningCount?: __integer;
    /**
     * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
     */
    RoleArn?: __string;
    State?: ChannelState;
  }
  export interface TeletextDestinationSettings {
  }
  export interface TeletextSourceSettings {
    /**
     * Specifies the teletext page number within the data stream from which to extract captions. Range of 0x100 (256) to 0x8FF (2303). Unused for passthrough. Should be specified as a hexadecimal string with no "0x" prefix.
     */
    PageNumber?: __string;
  }
  export interface TimecodeConfig {
    /**
     * Identifies the source for the timecode that will be associated with the events outputs.
-Embedded (embedded): Initialize the output timecode with timecode from the the source.  If no embedded timecode is detected in the source, the system falls back to using "Start at 0" (zerobased).
-System Clock (systemclock): Use the UTC time.
-Start at 0 (zerobased): The time of the first frame of the event will be 00:00:00:00.
     */
    Source?: TimecodeConfigSource;
    /**
     * Threshold in frames beyond which output timecode is resynchronized to the input timecode. Discrepancies below this threshold are permitted to avoid unnecessary discontinuities in the output timecode. No timecode sync when this is not specified.
     */
    SyncThreshold?: __integer;
  }
  export type TimecodeConfigSource = "EMBEDDED"|"SYSTEMCLOCK"|"ZEROBASED"|string;
  export interface TtmlDestinationSettings {
    /**
     * When set to passthrough, passes through style and position information from a TTML-like input source (TTML, SMPTE-TT, CFF-TT) to the CFF-TT output or TTML output.
     */
    StyleControl?: TtmlDestinationStyleControl;
  }
  export type TtmlDestinationStyleControl = "PASSTHROUGH"|"USE_CONFIGURED"|string;
  export interface UdpContainerSettings {
    M2tsSettings?: M2tsSettings;
  }
  export interface UdpGroupSettings {
    /**
     * Specifies behavior of last resort when input video is lost, and no more backup inputs are available. When dropTs is selected the entire transport stream will stop being emitted.  When dropProgram is selected the program can be dropped from the transport stream (and replaced with null packets to meet the TS bitrate requirement).  Or, when emitProgram is chosen the transport stream will continue to be produced normally with repeat frames, black frames, or slate frames substituted for the absent input video.
     */
    InputLossAction?: InputLossActionForUdpOut;
    /**
     * Indicates ID3 frame that has the timecode.
     */
    TimedMetadataId3Frame?: UdpTimedMetadataId3Frame;
    /**
     * Timed Metadata interval in seconds.
     */
    TimedMetadataId3Period?: __integer;
  }
  export interface UdpOutputSettings {
    /**
     * UDP output buffering in milliseconds. Larger values increase latency through the transcoder but simultaneously assist the transcoder in maintaining a constant, low-jitter UDP/RTP output while accommodating clock recovery, input switching, input disruptions, picture reordering, etc.
     */
    BufferMsec?: __integer;
    ContainerSettings?: UdpContainerSettings;
    /**
     * Destination address and port number for RTP or UDP packets. Can be unicast or multicast RTP or UDP (eg. rtp://239.10.10.10:5001 or udp://10.100.100.100:5002).
     */
    Destination?: OutputLocationRef;
    /**
     * Settings for enabling and adjusting Forward Error Correction on UDP outputs.
     */
    FecOutputSettings?: FecOutputSettings;
  }
  export type UdpTimedMetadataId3Frame = "NONE"|"PRIV"|"TDRL"|string;
  export interface ValidationError {
    ElementPath?: __string;
    ErrorMessage?: __string;
  }
  export interface VideoCodecSettings {
    H264Settings?: H264Settings;
  }
  export interface VideoDescription {
    /**
     * Video codec settings.
     */
    CodecSettings?: VideoCodecSettings;
    /**
     * Output video height (in pixels). Leave blank to use source video height. If left blank, width must also be unspecified.
     */
    Height?: __integer;
    /**
     * The name of this VideoDescription. Outputs will use this name to uniquely identify this Description.  Description names should be unique within this Live Event.
     */
    Name?: __string;
    /**
     * Indicates how to respond to the AFD values in the input stream. Setting to "respond" causes input video to be clipped, depending on AFD value, input display aspect ratio and output display aspect ratio.
     */
    RespondToAfd?: VideoDescriptionRespondToAfd;
    /**
     * When set to "stretchToOutput", automatically configures the output position to stretch the video to the specified output resolution. This option will override any position value.
     */
    ScalingBehavior?: VideoDescriptionScalingBehavior;
    /**
     * Changes the width of the anti-alias filter kernel used for scaling. Only applies if scaling is being performed and antiAlias is set to true. 0 is the softest setting, 100 the sharpest, and 50 recommended for most content.
     */
    Sharpness?: __integer;
    /**
     * Output video width (in pixels). Leave out to use source video width.  If left out, height must also be left out. Display aspect ratio is always preserved by letterboxing or pillarboxing when necessary.
     */
    Width?: __integer;
  }
  export type VideoDescriptionRespondToAfd = "NONE"|"PASSTHROUGH"|"RESPOND"|string;
  export type VideoDescriptionScalingBehavior = "DEFAULT"|"STRETCH_TO_OUTPUT"|string;
  export interface VideoSelector {
    /**
     * Specifies the colorspace of an input. This setting works in tandem with colorSpaceConversion to determine if any conversion will be performed.
     */
    ColorSpace?: VideoSelectorColorSpace;
    /**
     * Applies only if colorSpace is a value other than follow. This field controls how the value in the colorSpace field will be used. fallback means that when the input does include color space data, that data will be used, but when the input has no color space data, the value in colorSpace will be used. Choose fallback if your input is sometimes missing color space data, but when it does have color space data, that data is correct. force means to always use the value in colorSpace. Choose force if your input usually has no color space data or might have unreliable color space data.
     */
    ColorSpaceUsage?: VideoSelectorColorSpaceUsage;
    /**
     * The video selector settings.
     */
    SelectorSettings?: VideoSelectorSettings;
  }
  export type VideoSelectorColorSpace = "FOLLOW"|"REC_601"|"REC_709"|string;
  export type VideoSelectorColorSpaceUsage = "FALLBACK"|"FORCE"|string;
  export interface VideoSelectorPid {
    /**
     * Selects a specific PID from within a video source.
     */
    Pid?: __integer;
  }
  export interface VideoSelectorProgramId {
    /**
     * Selects a specific program from within a multi-program transport stream. If the program doesn't exist, the first program within the transport stream will be selected by default.
     */
    ProgramId?: __integer;
  }
  export interface VideoSelectorSettings {
    VideoSelectorPid?: VideoSelectorPid;
    VideoSelectorProgramId?: VideoSelectorProgramId;
  }
  export interface WebvttDestinationSettings {
  }
  export type __boolean = boolean;
  export type __double = number;
  export type __integer = number;
  export type __string = string;
  export type __timestamp = Date;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-10-14"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the MediaLive client.
   */
  export import Types = MediaLive;
}
export = MediaLive;
