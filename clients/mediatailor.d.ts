import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class MediaTailor extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: MediaTailor.Types.ClientConfiguration)
  config: Config & MediaTailor.Types.ClientConfiguration;
  /**
   * Deletes the playback configuration for the specified name. 
   */
  deletePlaybackConfiguration(params: MediaTailor.Types.DeletePlaybackConfigurationRequest, callback?: (err: AWSError, data: MediaTailor.Types.DeletePlaybackConfigurationResponse) => void): Request<MediaTailor.Types.DeletePlaybackConfigurationResponse, AWSError>;
  /**
   * Deletes the playback configuration for the specified name. 
   */
  deletePlaybackConfiguration(callback?: (err: AWSError, data: MediaTailor.Types.DeletePlaybackConfigurationResponse) => void): Request<MediaTailor.Types.DeletePlaybackConfigurationResponse, AWSError>;
  /**
   * Returns the playback configuration for the specified name. 
   */
  getPlaybackConfiguration(params: MediaTailor.Types.GetPlaybackConfigurationRequest, callback?: (err: AWSError, data: MediaTailor.Types.GetPlaybackConfigurationResponse) => void): Request<MediaTailor.Types.GetPlaybackConfigurationResponse, AWSError>;
  /**
   * Returns the playback configuration for the specified name. 
   */
  getPlaybackConfiguration(callback?: (err: AWSError, data: MediaTailor.Types.GetPlaybackConfigurationResponse) => void): Request<MediaTailor.Types.GetPlaybackConfigurationResponse, AWSError>;
  /**
   * Returns a list of the playback configurations defined in AWS Elemental MediaTailor. You can specify a maximum number of configurations to return at a time. The default maximum is 50. Results are returned in pagefuls. If MediaTailor has more configurations than the specified maximum, it provides parameters in the response that you can use to retrieve the next pageful. 
   */
  listPlaybackConfigurations(params: MediaTailor.Types.ListPlaybackConfigurationsRequest, callback?: (err: AWSError, data: MediaTailor.Types.ListPlaybackConfigurationsResponse) => void): Request<MediaTailor.Types.ListPlaybackConfigurationsResponse, AWSError>;
  /**
   * Returns a list of the playback configurations defined in AWS Elemental MediaTailor. You can specify a maximum number of configurations to return at a time. The default maximum is 50. Results are returned in pagefuls. If MediaTailor has more configurations than the specified maximum, it provides parameters in the response that you can use to retrieve the next pageful. 
   */
  listPlaybackConfigurations(callback?: (err: AWSError, data: MediaTailor.Types.ListPlaybackConfigurationsResponse) => void): Request<MediaTailor.Types.ListPlaybackConfigurationsResponse, AWSError>;
  /**
   * Returns a list of the tags assigned to the specified playback configuration resource. 
   */
  listTagsForResource(params: MediaTailor.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: MediaTailor.Types.ListTagsForResourceResponse) => void): Request<MediaTailor.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Returns a list of the tags assigned to the specified playback configuration resource. 
   */
  listTagsForResource(callback?: (err: AWSError, data: MediaTailor.Types.ListTagsForResourceResponse) => void): Request<MediaTailor.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Adds a new playback configuration to AWS Elemental MediaTailor. 
   */
  putPlaybackConfiguration(params: MediaTailor.Types.PutPlaybackConfigurationRequest, callback?: (err: AWSError, data: MediaTailor.Types.PutPlaybackConfigurationResponse) => void): Request<MediaTailor.Types.PutPlaybackConfigurationResponse, AWSError>;
  /**
   * Adds a new playback configuration to AWS Elemental MediaTailor. 
   */
  putPlaybackConfiguration(callback?: (err: AWSError, data: MediaTailor.Types.PutPlaybackConfigurationResponse) => void): Request<MediaTailor.Types.PutPlaybackConfigurationResponse, AWSError>;
  /**
   * Adds tags to the specified playback configuration resource. You can specify one or more tags to add. 
   */
  tagResource(params: MediaTailor.Types.TagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds tags to the specified playback configuration resource. You can specify one or more tags to add. 
   */
  tagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes tags from the specified playback configuration resource. You can specify one or more tags to remove. 
   */
  untagResource(params: MediaTailor.Types.UntagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes tags from the specified playback configuration resource. You can specify one or more tags to remove. 
   */
  untagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
}
declare namespace MediaTailor {
  export interface AvailSuppression {
    /**
     * Sets the mode for avail suppression, also known as ad suppression. By default, ad suppression is off and all ad breaks are filled by MediaTailor with ads or slate.
     */
    Mode?: Mode;
    /**
     * The avail suppression value is a live edge offset time in HH:MM:SS. MediaTailor won't fill ad breaks on or behind this time in the manifest lookback window. 
     */
    Value?: __string;
  }
  export interface CdnConfiguration {
    /**
     * A non-default content delivery network (CDN) to serve ad segments. By default, AWS Elemental MediaTailor uses Amazon CloudFront with default cache settings as its CDN for ad segments. To set up an alternate CDN, create a rule in your CDN for the following origin: ads.mediatailor.&lt;region>.amazonaws.com. Then specify the rule's name in this AdSegmentUrlPrefix. When AWS Elemental MediaTailor serves a manifest, it reports your CDN as the source for ad segments.
     */
    AdSegmentUrlPrefix?: __string;
    /**
     * A content delivery network (CDN) to cache content segments, so that content requests don’t always have to go to the origin server. First, create a rule in your CDN for the content segment origin server. Then specify the rule's name in this ContentSegmentUrlPrefix. When AWS Elemental MediaTailor serves a manifest, it reports your CDN as the source for content segments.
     */
    ContentSegmentUrlPrefix?: __string;
  }
  export interface DashConfiguration {
    /**
     * The URL generated by MediaTailor to initiate a playback session. The session uses server-side reporting. This setting is ignored in PUT operations. 
     */
    ManifestEndpointPrefix?: __string;
    /**
     * The setting that controls whether MediaTailor includes the Location tag in DASH manifests. MediaTailor populates the Location tag with the URL for manifest update requests, to be used by players that don't support sticky redirects. Disable this if you have CDN routing rules set up for accessing MediaTailor manifests, and you are either using client-side reporting or your players support sticky HTTP redirects. Valid values are DISABLED and EMT_DEFAULT. The EMT_DEFAULT setting enables the inclusion of the tag and is the default value. 
     */
    MpdLocation?: __string;
    /**
     * The setting that controls whether MediaTailor handles manifests from the origin server as multi-period manifests or single-period manifests. If your origin server produces single-period manifests, set this to SINGLE_PERIOD. The default setting is MULTI_PERIOD. For multi-period manifests, omit this setting or set it to MULTI_PERIOD. 
     */
    OriginManifestType?: OriginManifestType;
  }
  export interface DashConfigurationForPut {
    /**
     * The setting that controls whether MediaTailor includes the Location tag in DASH manifests. MediaTailor populates the Location tag with the URL for manifest update requests, to be used by players that don't support sticky redirects. Disable this if you have CDN routing rules set up for accessing MediaTailor manifests, and you are either using client-side reporting or your players support sticky HTTP redirects. Valid values are DISABLED and EMT_DEFAULT. The EMT_DEFAULT setting enables the inclusion of the tag and is the default value. 
     */
    MpdLocation?: __string;
    /**
     * The setting that controls whether MediaTailor handles manifests from the origin server as multi-period manifests or single-period manifests. If your origin server produces single-period manifests, set this to SINGLE_PERIOD. The default setting is MULTI_PERIOD. For multi-period manifests, omit this setting or set it to MULTI_PERIOD. 
     */
    OriginManifestType?: OriginManifestType;
  }
  export interface DeletePlaybackConfigurationRequest {
    /**
     * The identifier for the playback configuration.
     */
    Name: __string;
  }
  export interface DeletePlaybackConfigurationResponse {
  }
  export interface GetPlaybackConfigurationRequest {
    /**
     * The identifier for the playback configuration.
     */
    Name: __string;
  }
  export interface GetPlaybackConfigurationResponse {
    /**
     * The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing, you can provide a static VAST URL. The maximum length is 25,000 characters.
     */
    AdDecisionServerUrl?: __string;
    /**
     * The configuration for Avail Suppression. Ad suppression can be used to turn off ad personalization in a long manifest, or if a viewer joins mid-break.
     */
    AvailSuppression?: AvailSuppression;
    /**
     * The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management. 
     */
    CdnConfiguration?: CdnConfiguration;
    /**
     * The configuration for DASH content. 
     */
    DashConfiguration?: DashConfiguration;
    /**
     * The configuration for HLS content. 
     */
    HlsConfiguration?: HlsConfiguration;
    /**
     * The configuration for pre-roll ad insertion.
     */
    LivePreRollConfiguration?: LivePreRollConfiguration;
    /**
     * The identifier for the playback configuration.
     */
    Name?: __string;
    /**
     * The maximum duration of underfilled ad time (in seconds) allowed in an ad break.
     */
    PersonalizationThresholdSeconds?: __integerMin1;
    /**
     * The Amazon Resource Name (ARN) for the playback configuration. 
     */
    PlaybackConfigurationArn?: __string;
    /**
     * The URL that the player accesses to get a manifest from AWS Elemental MediaTailor. This session will use server-side reporting. 
     */
    PlaybackEndpointPrefix?: __string;
    /**
     * The URL that the player uses to initialize a session that uses client-side reporting. 
     */
    SessionInitializationEndpointPrefix?: __string;
    /**
     * The URL for a high-quality video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID playback configurations. For VPAID, the slate is required because MediaTailor provides it in the slots designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video. 
     */
    SlateAdUrl?: __string;
    /**
     * The tags assigned to the playback configuration. 
     */
    Tags?: __mapOf__string;
    /**
     * The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support.
     */
    TranscodeProfileName?: __string;
    /**
     * The URL prefix for the master playlist for the stream, minus the asset ID. The maximum length is 512 characters.
     */
    VideoContentSourceUrl?: __string;
  }
  export interface HlsConfiguration {
    /**
     * The URL that is used to initiate a playback session for devices that support Apple HLS. The session uses server-side reporting.
     */
    ManifestEndpointPrefix?: __string;
  }
  export interface ListPlaybackConfigurationsRequest {
    /**
     * Maximum number of records to return. 
     */
    MaxResults?: __integerMin1Max100;
    /**
     * Pagination token returned by the GET list request when results exceed the maximum allowed. Use the token to fetch the next page of results.
     */
    NextToken?: __string;
  }
  export interface ListPlaybackConfigurationsResponse {
    /**
     * Array of playback configurations. This might be all the available configurations or a subset, depending on the settings that you provide and the total number of configurations stored. 
     */
    Items?: __listOfPlaybackConfigurations;
    /**
     * Pagination token returned by the GET list request when results exceed the maximum allowed. Use the token to fetch the next page of results.
     */
    NextToken?: __string;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) for the playback configuration. You can get this from the response to any playback configuration request. 
     */
    ResourceArn: __string;
  }
  export interface ListTagsForResourceResponse {
    /**
     * A comma-separated list of tag key:value pairs. For example: 
 {
 "Key1": "Value1",
 "Key2": "Value2"
 }
 
     */
    Tags?: __mapOf__string;
  }
  export type OriginManifestType = "SINGLE_PERIOD"|"MULTI_PERIOD"|string;
  export type Mode = "OFF"|"BEHIND_LIVE_EDGE"|string;
  export interface PlaybackConfiguration {
    /**
     * The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing, you can provide a static VAST URL. The maximum length is 25,000 characters.
     */
    AdDecisionServerUrl?: __string;
    /**
     * The configuration for Avail Suppression. Ad suppression can be used to turn off ad personalization in a long manifest, or if a viewer joins mid-break.
     */
    AvailSuppression?: AvailSuppression;
    /**
     * The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management. 
     */
    CdnConfiguration?: CdnConfiguration;
    /**
     * The configuration for DASH content. 
     */
    DashConfiguration?: DashConfiguration;
    /**
     * The configuration for HLS content. 
     */
    HlsConfiguration?: HlsConfiguration;
    /**
     * The identifier for the playback configuration.
     */
    Name?: __string;
    /**
     * The Amazon Resource Name (ARN) for the playback configuration. 
     */
    PlaybackConfigurationArn?: __string;
    /**
     * The URL that the player accesses to get a manifest from AWS Elemental MediaTailor. This session will use server-side reporting. 
     */
    PlaybackEndpointPrefix?: __string;
    /**
     * The URL that the player uses to initialize a session that uses client-side reporting. 
     */
    SessionInitializationEndpointPrefix?: __string;
    /**
     * The URL for a high-quality video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID playback configurations. For VPAID, the slate is required because MediaTailor provides it in the slots designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video. 
     */
    SlateAdUrl?: __string;
    /**
     * The tags assigned to the playback configuration. 
     */
    Tags?: __mapOf__string;
    /**
     * The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support.
     */
    TranscodeProfileName?: __string;
    /**
     * The maximum duration of underfilled ad time (in seconds) allowed in an ad break.
     */
    PersonalizationThresholdSeconds?: __integerMin1;
    /**
     * The URL prefix for the master playlist for the stream, minus the asset ID. The maximum length is 512 characters.
     */
    VideoContentSourceUrl?: __string;
  }
  export interface LivePreRollConfiguration {
    /**
     * The URL for the ad decision server (ADS) for pre-roll ads. This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing, you can provide a static VAST URL. The maximum length is 25,000 characters.
     */
    AdDecisionServerUrl?: __string;
    /**
     * The maximum allowed duration for the pre-roll ad avail. AWS Elemental MediaTailor won't play pre-roll ads to exceed this duration, regardless of the total duration of ads that the ADS returns.
     */
    MaxDurationSeconds?: __integer;
  }
  export interface PutPlaybackConfigurationRequest {
    /**
     * The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing you can provide a static VAST URL. The maximum length is 25,000 characters.
     */
    AdDecisionServerUrl?: __string;
    /**
     * The configuration for Avail Suppression. Ad suppression can be used to turn off ad personalization in a long manifest, or if a viewer joins mid-break.
     */
    AvailSuppression?: AvailSuppression;
    /**
     * The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management. 
     */
    CdnConfiguration?: CdnConfiguration;
    /**
     * The configuration for DASH content. 
     */
    DashConfiguration?: DashConfigurationForPut;
    /**
     * The configuration for pre-roll ad insertion.
     */
    LivePreRollConfiguration?: LivePreRollConfiguration;
    /**
     * The identifier for the playback configuration.
     */
    Name?: __string;
    /**
     * The maximum duration of underfilled ad time (in seconds) allowed in an ad break.
     */
    PersonalizationThresholdSeconds?: __integerMin1;
    /**
     * The URL for a high-quality video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID configurations. For VPAID, the slate is required because MediaTailor provides it in the slots that are designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video. 
     */
    SlateAdUrl?: __string;
    /**
     * The tags to assign to the playback configuration. 
     */
    Tags?: __mapOf__string;
    /**
     * The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support.
     */
    TranscodeProfileName?: __string;
    /**
     * The URL prefix for the master playlist for the stream, minus the asset ID. The maximum length is 512 characters.
     */
    VideoContentSourceUrl?: __string;
  }
  export interface PutPlaybackConfigurationResponse {
    /**
     * The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing, you can provide a static VAST URL. The maximum length is 25,000 characters.
     */
    AdDecisionServerUrl?: __string;
    /**
     * The configuration for Avail Suppression. Ad suppression can be used to turn off ad personalization in a long manifest, or if a viewer joins mid-break.
     */
    AvailSuppression?: AvailSuppression;
    /**
     * The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management. 
     */
    CdnConfiguration?: CdnConfiguration;
    /**
     * The configuration for DASH content. 
     */
    DashConfiguration?: DashConfiguration;
    /**
     * The configuration for HLS content. 
     */
    HlsConfiguration?: HlsConfiguration;
    /**
     * The configuration for pre-roll ad insertion.
     */
    LivePreRollConfiguration?: LivePreRollConfiguration;
    /**
     * The identifier for the playback configuration.
     */
    Name?: __string;
    /**
     * The maximum duration of underfilled ad time (in seconds) allowed in an ad break.
     */
    PersonalizationThresholdSeconds?: __integerMin1;
    /**
     * The Amazon Resource Name (ARN) for the playback configuration. 
     */
    PlaybackConfigurationArn?: __string;
    /**
     * The URL that the player accesses to get a manifest from AWS Elemental MediaTailor. This session will use server-side reporting. 
     */
    PlaybackEndpointPrefix?: __string;
    /**
     * The URL that the player uses to initialize a session that uses client-side reporting. 
     */
    SessionInitializationEndpointPrefix?: __string;
    /**
     * The URL for a high-quality video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID playback configurations. For VPAID, the slate is required because MediaTailor provides it in the slots designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video. 
     */
    SlateAdUrl?: __string;
    /**
     * The tags assigned to the playback configuration. 
     */
    Tags?: __mapOf__string;
    /**
     * The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support.
     */
    TranscodeProfileName?: __string;
    /**
     * The URL prefix for the master playlist for the stream, minus the asset ID. The maximum length is 512 characters.
     */
    VideoContentSourceUrl?: __string;
  }
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) for the playback configuration. You can get this from the response to any playback configuration request. 
     */
    ResourceArn: __string;
    /**
     * A comma-separated list of tag key:value pairs. For example: 
 {
 "Key1": "Value1",
 "Key2": "Value2"
 }
 
     */
    Tags: __mapOf__string;
  }
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) for the playback configuration. You can get this from the response to any playback configuration request. 
     */
    ResourceArn: __string;
    /**
     * A comma-separated list of the tag keys to remove from the playback configuration. 
     */
    TagKeys: __listOf__string;
  }
  export type __integer = number;
  export type __integerMin1 = number;
  export type __integerMin1Max100 = number;
  export type __listOfPlaybackConfigurations = PlaybackConfiguration[];
  export type __listOf__string = __string[];
  export type __mapOf__string = {[key: string]: __string};
  export type __string = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-04-23"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the MediaTailor client.
   */
  export import Types = MediaTailor;
}
export = MediaTailor;
