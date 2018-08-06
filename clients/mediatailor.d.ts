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
   * Deletes the configuration for the specified name. 
   */
  deletePlaybackConfiguration(params: MediaTailor.Types.DeletePlaybackConfigurationRequest, callback?: (err: AWSError, data: MediaTailor.Types.DeletePlaybackConfigurationResponse) => void): Request<MediaTailor.Types.DeletePlaybackConfigurationResponse, AWSError>;
  /**
   * Deletes the configuration for the specified name. 
   */
  deletePlaybackConfiguration(callback?: (err: AWSError, data: MediaTailor.Types.DeletePlaybackConfigurationResponse) => void): Request<MediaTailor.Types.DeletePlaybackConfigurationResponse, AWSError>;
  /**
   * Returns the configuration for the specified name. 
   */
  getPlaybackConfiguration(params: MediaTailor.Types.GetPlaybackConfigurationRequest, callback?: (err: AWSError, data: MediaTailor.Types.GetPlaybackConfigurationResponse) => void): Request<MediaTailor.Types.GetPlaybackConfigurationResponse, AWSError>;
  /**
   * Returns the configuration for the specified name. 
   */
  getPlaybackConfiguration(callback?: (err: AWSError, data: MediaTailor.Types.GetPlaybackConfigurationResponse) => void): Request<MediaTailor.Types.GetPlaybackConfigurationResponse, AWSError>;
  /**
   * Returns a list of the configurations defined in AWS Elemental MediaTailor. You can specify a max number of configurations to return at a time. The default max is 50. Results are returned in pagefuls. If AWS Elemental MediaTailor has more configurations than the specified max, it provides parameters in the response that you can use to retrieve the next pageful. 
   */
  listPlaybackConfigurations(params: MediaTailor.Types.ListPlaybackConfigurationsRequest, callback?: (err: AWSError, data: MediaTailor.Types.ListPlaybackConfigurationsResponse) => void): Request<MediaTailor.Types.ListPlaybackConfigurationsResponse, AWSError>;
  /**
   * Returns a list of the configurations defined in AWS Elemental MediaTailor. You can specify a max number of configurations to return at a time. The default max is 50. Results are returned in pagefuls. If AWS Elemental MediaTailor has more configurations than the specified max, it provides parameters in the response that you can use to retrieve the next pageful. 
   */
  listPlaybackConfigurations(callback?: (err: AWSError, data: MediaTailor.Types.ListPlaybackConfigurationsResponse) => void): Request<MediaTailor.Types.ListPlaybackConfigurationsResponse, AWSError>;
  /**
   * Adds a new configuration to AWS Elemental MediaTailor.
   */
  putPlaybackConfiguration(params: MediaTailor.Types.PutPlaybackConfigurationRequest, callback?: (err: AWSError, data: MediaTailor.Types.PutPlaybackConfigurationResponse) => void): Request<MediaTailor.Types.PutPlaybackConfigurationResponse, AWSError>;
  /**
   * Adds a new configuration to AWS Elemental MediaTailor.
   */
  putPlaybackConfiguration(callback?: (err: AWSError, data: MediaTailor.Types.PutPlaybackConfigurationResponse) => void): Request<MediaTailor.Types.PutPlaybackConfigurationResponse, AWSError>;
}
declare namespace MediaTailor {
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
  export interface HlsConfiguration {
    /**
     * The URL that is used to initiate a playback session for devices that support Apple HLS. The session uses server-side reporting.
     */
    ManifestEndpointPrefix?: __string;
  }
  export interface DeletePlaybackConfigurationRequest {
    /**
     * The identifier for the configuration.
     */
    Name: __string;
  }
  export interface DeletePlaybackConfigurationResponse {
  }
  export interface GetPlaybackConfigurationRequest {
    /**
     * The identifier for the configuration.
     */
    Name: __string;
  }
  export interface GetPlaybackConfigurationResponse {
    /**
     * The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing, you can provide a static VAST URL. The maximum length is 25000 characters.
     */
    AdDecisionServerUrl?: __string;
    /**
     * The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management. 
     */
    CdnConfiguration?: CdnConfiguration;
    /**
     * The configuration for HLS content. 
     */
    HlsConfiguration?: HlsConfiguration;
    /**
     * The identifier for the configuration.
     */
    Name?: __string;
    /**
     * The URL that the player accesses to get a manifest from AWS Elemental MediaTailor. This session will use server-side reporting. 
     */
    PlaybackEndpointPrefix?: __string;
    /**
     * The URL that the player uses to initialize a session that uses client-side reporting. 
     */
    SessionInitializationEndpointPrefix?: __string;
    /**
     * URL for a high-quality video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID configurations. For VPAID, the slate is required because AWS Elemental MediaTailor provides it in the slots designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video. 
     */
    SlateAdUrl?: __string;
    /**
     * The URL prefix for the master playlist for the stream, minus the asset ID. The maximum length is 512 characters.
     */
    VideoContentSourceUrl?: __string;
  }
  export interface PlaybackConfiguration {
    /**
     * The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing, you can provide a static VAST URL. The maximum length is 25000 characters.
     */
    AdDecisionServerUrl?: __string;
    /**
     * The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management. 
     */
    CdnConfiguration?: CdnConfiguration;
    /**
     * The identifier for the configuration.
     */
    Name?: __string;
    /**
     * URL for a high-quality video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID configurations. For VPAID, the slate is required because AWS Elemental MediaTailor provides it in the slots designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video. 
     */
    SlateAdUrl?: __string;
    /**
     * The URL prefix for the master playlist for the stream, minus the asset ID. The maximum length is 512 characters.
     */
    VideoContentSourceUrl?: __string;
  }
  export interface ListPlaybackConfigurationsRequest {
    /**
     * Maximum number of records to return. 
     */
    MaxResults?: __integerMin1Max100;
    /**
     * Pagination token returned by the GET list request when results overrun the meximum allowed. Use the token to fetch the next page of results.
     */
    NextToken?: __string;
  }
  export interface ListPlaybackConfigurationsResponse {
    /**
     * Array of playback configurations. This may be all of the available configurations or a subset, depending on the settings you provide and on the total number of configurations stored. 
     */
    Items?: __listOfPlaybackConfigurations;
    /**
     * Pagination token returned by the GET list request when results overrun the meximum allowed. Use the token to fetch the next page of results.
     */
    NextToken?: __string;
  }
  export interface PutPlaybackConfigurationRequest {
    /**
     * The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing you can provide a static VAST URL. The maximum length is 25000 characters.
     */
    AdDecisionServerUrl?: __string;
    /**
     * The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management. 
     */
    CdnConfiguration?: CdnConfiguration;
    /**
     * The identifier for the configuration.
     */
    Name?: __string;
    /**
     * The URL for a high-quality video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID configurations. For VPAID, the slate is required because AWS Elemental MediaTailor provides it in the slots that are designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video. 
     */
    SlateAdUrl?: __string;
    /**
     * The URL prefix for the master playlist for the stream, minus the asset ID. The maximum length is 512 characters.
     */
    VideoContentSourceUrl?: __string;
  }
  export interface PutPlaybackConfigurationResponse {
    /**
     * The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing, you can provide a static VAST URL. The maximum length is 25000 characters.
     */
    AdDecisionServerUrl?: __string;
    /**
     * The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management. 
     */
    CdnConfiguration?: CdnConfiguration;
    /**
     * The configuration for HLS content. 
     */
    HlsConfiguration?: HlsConfiguration;
    /**
     * The identifier for the configuration.
     */
    Name?: __string;
    /**
     * The URL that the player accesses to get a manifest from AWS Elemental MediaTailor. This session will use server-side reporting. 
     */
    PlaybackEndpointPrefix?: __string;
    /**
     * The URL that the player uses to initialize a session that uses client-side reporting. 
     */
    SessionInitializationEndpointPrefix?: __string;
    /**
     * URL for a high-quality video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID configurations. For VPAID, the slate is required because AWS Elemental MediaTailor provides it in the slots designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video. 
     */
    SlateAdUrl?: __string;
    /**
     * The URL prefix for the master playlist for the stream, minus the asset ID. The maximum length is 512 characters.
     */
    VideoContentSourceUrl?: __string;
  }
  export type __listOfPlaybackConfigurations = PlaybackConfiguration[];
  export type __string = string;
  export type __integerMin1Max100 = number;
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
