import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class MediaPackageVod extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: MediaPackageVod.Types.ClientConfiguration)
  config: Config & MediaPackageVod.Types.ClientConfiguration;
  /**
   * Creates a new MediaPackage VOD Asset resource.
   */
  createAsset(params: MediaPackageVod.Types.CreateAssetRequest, callback?: (err: AWSError, data: MediaPackageVod.Types.CreateAssetResponse) => void): Request<MediaPackageVod.Types.CreateAssetResponse, AWSError>;
  /**
   * Creates a new MediaPackage VOD Asset resource.
   */
  createAsset(callback?: (err: AWSError, data: MediaPackageVod.Types.CreateAssetResponse) => void): Request<MediaPackageVod.Types.CreateAssetResponse, AWSError>;
  /**
   * Creates a new MediaPackage VOD PackagingConfiguration resource.
   */
  createPackagingConfiguration(params: MediaPackageVod.Types.CreatePackagingConfigurationRequest, callback?: (err: AWSError, data: MediaPackageVod.Types.CreatePackagingConfigurationResponse) => void): Request<MediaPackageVod.Types.CreatePackagingConfigurationResponse, AWSError>;
  /**
   * Creates a new MediaPackage VOD PackagingConfiguration resource.
   */
  createPackagingConfiguration(callback?: (err: AWSError, data: MediaPackageVod.Types.CreatePackagingConfigurationResponse) => void): Request<MediaPackageVod.Types.CreatePackagingConfigurationResponse, AWSError>;
  /**
   * Creates a new MediaPackage VOD PackagingGroup resource.
   */
  createPackagingGroup(params: MediaPackageVod.Types.CreatePackagingGroupRequest, callback?: (err: AWSError, data: MediaPackageVod.Types.CreatePackagingGroupResponse) => void): Request<MediaPackageVod.Types.CreatePackagingGroupResponse, AWSError>;
  /**
   * Creates a new MediaPackage VOD PackagingGroup resource.
   */
  createPackagingGroup(callback?: (err: AWSError, data: MediaPackageVod.Types.CreatePackagingGroupResponse) => void): Request<MediaPackageVod.Types.CreatePackagingGroupResponse, AWSError>;
  /**
   * Deletes an existing MediaPackage VOD Asset resource.
   */
  deleteAsset(params: MediaPackageVod.Types.DeleteAssetRequest, callback?: (err: AWSError, data: MediaPackageVod.Types.DeleteAssetResponse) => void): Request<MediaPackageVod.Types.DeleteAssetResponse, AWSError>;
  /**
   * Deletes an existing MediaPackage VOD Asset resource.
   */
  deleteAsset(callback?: (err: AWSError, data: MediaPackageVod.Types.DeleteAssetResponse) => void): Request<MediaPackageVod.Types.DeleteAssetResponse, AWSError>;
  /**
   * Deletes a MediaPackage VOD PackagingConfiguration resource.
   */
  deletePackagingConfiguration(params: MediaPackageVod.Types.DeletePackagingConfigurationRequest, callback?: (err: AWSError, data: MediaPackageVod.Types.DeletePackagingConfigurationResponse) => void): Request<MediaPackageVod.Types.DeletePackagingConfigurationResponse, AWSError>;
  /**
   * Deletes a MediaPackage VOD PackagingConfiguration resource.
   */
  deletePackagingConfiguration(callback?: (err: AWSError, data: MediaPackageVod.Types.DeletePackagingConfigurationResponse) => void): Request<MediaPackageVod.Types.DeletePackagingConfigurationResponse, AWSError>;
  /**
   * Deletes a MediaPackage VOD PackagingGroup resource.
   */
  deletePackagingGroup(params: MediaPackageVod.Types.DeletePackagingGroupRequest, callback?: (err: AWSError, data: MediaPackageVod.Types.DeletePackagingGroupResponse) => void): Request<MediaPackageVod.Types.DeletePackagingGroupResponse, AWSError>;
  /**
   * Deletes a MediaPackage VOD PackagingGroup resource.
   */
  deletePackagingGroup(callback?: (err: AWSError, data: MediaPackageVod.Types.DeletePackagingGroupResponse) => void): Request<MediaPackageVod.Types.DeletePackagingGroupResponse, AWSError>;
  /**
   * Returns a description of a MediaPackage VOD Asset resource.
   */
  describeAsset(params: MediaPackageVod.Types.DescribeAssetRequest, callback?: (err: AWSError, data: MediaPackageVod.Types.DescribeAssetResponse) => void): Request<MediaPackageVod.Types.DescribeAssetResponse, AWSError>;
  /**
   * Returns a description of a MediaPackage VOD Asset resource.
   */
  describeAsset(callback?: (err: AWSError, data: MediaPackageVod.Types.DescribeAssetResponse) => void): Request<MediaPackageVod.Types.DescribeAssetResponse, AWSError>;
  /**
   * Returns a description of a MediaPackage VOD PackagingConfiguration resource.
   */
  describePackagingConfiguration(params: MediaPackageVod.Types.DescribePackagingConfigurationRequest, callback?: (err: AWSError, data: MediaPackageVod.Types.DescribePackagingConfigurationResponse) => void): Request<MediaPackageVod.Types.DescribePackagingConfigurationResponse, AWSError>;
  /**
   * Returns a description of a MediaPackage VOD PackagingConfiguration resource.
   */
  describePackagingConfiguration(callback?: (err: AWSError, data: MediaPackageVod.Types.DescribePackagingConfigurationResponse) => void): Request<MediaPackageVod.Types.DescribePackagingConfigurationResponse, AWSError>;
  /**
   * Returns a description of a MediaPackage VOD PackagingGroup resource.
   */
  describePackagingGroup(params: MediaPackageVod.Types.DescribePackagingGroupRequest, callback?: (err: AWSError, data: MediaPackageVod.Types.DescribePackagingGroupResponse) => void): Request<MediaPackageVod.Types.DescribePackagingGroupResponse, AWSError>;
  /**
   * Returns a description of a MediaPackage VOD PackagingGroup resource.
   */
  describePackagingGroup(callback?: (err: AWSError, data: MediaPackageVod.Types.DescribePackagingGroupResponse) => void): Request<MediaPackageVod.Types.DescribePackagingGroupResponse, AWSError>;
  /**
   * Returns a collection of MediaPackage VOD Asset resources.
   */
  listAssets(params: MediaPackageVod.Types.ListAssetsRequest, callback?: (err: AWSError, data: MediaPackageVod.Types.ListAssetsResponse) => void): Request<MediaPackageVod.Types.ListAssetsResponse, AWSError>;
  /**
   * Returns a collection of MediaPackage VOD Asset resources.
   */
  listAssets(callback?: (err: AWSError, data: MediaPackageVod.Types.ListAssetsResponse) => void): Request<MediaPackageVod.Types.ListAssetsResponse, AWSError>;
  /**
   * Returns a collection of MediaPackage VOD PackagingConfiguration resources.
   */
  listPackagingConfigurations(params: MediaPackageVod.Types.ListPackagingConfigurationsRequest, callback?: (err: AWSError, data: MediaPackageVod.Types.ListPackagingConfigurationsResponse) => void): Request<MediaPackageVod.Types.ListPackagingConfigurationsResponse, AWSError>;
  /**
   * Returns a collection of MediaPackage VOD PackagingConfiguration resources.
   */
  listPackagingConfigurations(callback?: (err: AWSError, data: MediaPackageVod.Types.ListPackagingConfigurationsResponse) => void): Request<MediaPackageVod.Types.ListPackagingConfigurationsResponse, AWSError>;
  /**
   * Returns a collection of MediaPackage VOD PackagingGroup resources.
   */
  listPackagingGroups(params: MediaPackageVod.Types.ListPackagingGroupsRequest, callback?: (err: AWSError, data: MediaPackageVod.Types.ListPackagingGroupsResponse) => void): Request<MediaPackageVod.Types.ListPackagingGroupsResponse, AWSError>;
  /**
   * Returns a collection of MediaPackage VOD PackagingGroup resources.
   */
  listPackagingGroups(callback?: (err: AWSError, data: MediaPackageVod.Types.ListPackagingGroupsResponse) => void): Request<MediaPackageVod.Types.ListPackagingGroupsResponse, AWSError>;
}
declare namespace MediaPackageVod {
  export type AdMarkers = "NONE"|"SCTE35_ENHANCED"|"PASSTHROUGH"|string;
  export interface AssetShallow {
    /**
     * The ARN of the Asset.
     */
    Arn?: __string;
    /**
     * The unique identifier for the Asset.
     */
    Id?: __string;
    /**
     * The ID of the PackagingGroup for the Asset.
     */
    PackagingGroupId?: __string;
    /**
     * The resource ID to include in SPEKE key requests.
     */
    ResourceId?: __string;
    /**
     * ARN of the source object in S3.
     */
    SourceArn?: __string;
    /**
     * The IAM role ARN used to access the source S3 bucket.
     */
    SourceRoleArn?: __string;
  }
  export interface CmafEncryption {
    SpekeKeyProvider: SpekeKeyProvider;
  }
  export interface CmafPackage {
    Encryption?: CmafEncryption;
    /**
     * A list of HLS manifest configurations.
     */
    HlsManifests: __listOfHlsManifest;
    /**
     * Duration (in seconds) of each fragment. Actual fragments will be
rounded to the nearest multiple of the source fragment duration.

     */
    SegmentDurationSeconds?: __integer;
  }
  export interface CreateAssetRequest {
    /**
     * The unique identifier for the Asset.
     */
    Id: __string;
    /**
     * The ID of the PackagingGroup for the Asset.
     */
    PackagingGroupId: __string;
    /**
     * The resource ID to include in SPEKE key requests.
     */
    ResourceId?: __string;
    /**
     * ARN of the source object in S3.
     */
    SourceArn: __string;
    /**
     * The IAM role ARN used to access the source S3 bucket.
     */
    SourceRoleArn: __string;
  }
  export interface CreateAssetResponse {
    /**
     * The ARN of the Asset.
     */
    Arn?: __string;
    /**
     * The list of egress endpoints available for the Asset.
     */
    EgressEndpoints?: __listOfEgressEndpoint;
    /**
     * The unique identifier for the Asset.
     */
    Id?: __string;
    /**
     * The ID of the PackagingGroup for the Asset.
     */
    PackagingGroupId?: __string;
    /**
     * The resource ID to include in SPEKE key requests.
     */
    ResourceId?: __string;
    /**
     * ARN of the source object in S3.
     */
    SourceArn?: __string;
    /**
     * The IAM role_arn used to access the source S3 bucket.
     */
    SourceRoleArn?: __string;
  }
  export interface CreatePackagingConfigurationRequest {
    CmafPackage?: CmafPackage;
    DashPackage?: DashPackage;
    HlsPackage?: HlsPackage;
    /**
     * The ID of the PackagingConfiguration.
     */
    Id: __string;
    MssPackage?: MssPackage;
    /**
     * The ID of a PackagingGroup.
     */
    PackagingGroupId: __string;
  }
  export interface CreatePackagingConfigurationResponse {
    /**
     * The ARN of the PackagingConfiguration.
     */
    Arn?: __string;
    CmafPackage?: CmafPackage;
    DashPackage?: DashPackage;
    HlsPackage?: HlsPackage;
    /**
     * The ID of the PackagingConfiguration.
     */
    Id?: __string;
    MssPackage?: MssPackage;
    /**
     * The ID of a PackagingGroup.
     */
    PackagingGroupId?: __string;
  }
  export interface CreatePackagingGroupRequest {
    /**
     * The ID of the PackagingGroup.
     */
    Id: __string;
  }
  export interface CreatePackagingGroupResponse {
    /**
     * The ARN of the PackagingGroup.
     */
    Arn?: __string;
    /**
     * The ID of the PackagingGroup.
     */
    Id?: __string;
  }
  export interface DashEncryption {
    SpekeKeyProvider: SpekeKeyProvider;
  }
  export interface DashManifest {
    /**
     * An optional string to include in the name of the manifest.
     */
    ManifestName?: __string;
    /**
     * Minimum duration (in seconds) that a player will buffer media before starting the presentation.
     */
    MinBufferTimeSeconds?: __integer;
    /**
     * The Dynamic Adaptive Streaming over HTTP (DASH) profile type.  When set to "HBBTV_1_5", HbbTV 1.5 compliant output is enabled.
     */
    Profile?: Profile;
    StreamSelection?: StreamSelection;
  }
  export interface DashPackage {
    /**
     * A list of DASH manifest configurations.
     */
    DashManifests: __listOfDashManifest;
    Encryption?: DashEncryption;
    /**
     * Duration (in seconds) of each segment. Actual segments will be
rounded to the nearest multiple of the source segment duration.

     */
    SegmentDurationSeconds?: __integer;
  }
  export interface DeleteAssetRequest {
    /**
     * The ID of the MediaPackage VOD Asset resource to delete.
     */
    Id: __string;
  }
  export interface DeleteAssetResponse {
  }
  export interface DeletePackagingConfigurationRequest {
    /**
     * The ID of the MediaPackage VOD PackagingConfiguration resource to delete.
     */
    Id: __string;
  }
  export interface DeletePackagingConfigurationResponse {
  }
  export interface DeletePackagingGroupRequest {
    /**
     * The ID of the MediaPackage VOD PackagingGroup resource to delete.
     */
    Id: __string;
  }
  export interface DeletePackagingGroupResponse {
  }
  export interface DescribeAssetRequest {
    /**
     * The ID of an MediaPackage VOD Asset resource.
     */
    Id: __string;
  }
  export interface DescribeAssetResponse {
    /**
     * The ARN of the Asset.
     */
    Arn?: __string;
    /**
     * The list of egress endpoints available for the Asset.
     */
    EgressEndpoints?: __listOfEgressEndpoint;
    /**
     * The unique identifier for the Asset.
     */
    Id?: __string;
    /**
     * The ID of the PackagingGroup for the Asset.
     */
    PackagingGroupId?: __string;
    /**
     * The resource ID to include in SPEKE key requests.
     */
    ResourceId?: __string;
    /**
     * ARN of the source object in S3.
     */
    SourceArn?: __string;
    /**
     * The IAM role_arn used to access the source S3 bucket.
     */
    SourceRoleArn?: __string;
  }
  export interface DescribePackagingConfigurationRequest {
    /**
     * The ID of a MediaPackage VOD PackagingConfiguration resource.
     */
    Id: __string;
  }
  export interface DescribePackagingConfigurationResponse {
    /**
     * The ARN of the PackagingConfiguration.
     */
    Arn?: __string;
    CmafPackage?: CmafPackage;
    DashPackage?: DashPackage;
    HlsPackage?: HlsPackage;
    /**
     * The ID of the PackagingConfiguration.
     */
    Id?: __string;
    MssPackage?: MssPackage;
    /**
     * The ID of a PackagingGroup.
     */
    PackagingGroupId?: __string;
  }
  export interface DescribePackagingGroupRequest {
    /**
     * The ID of a MediaPackage VOD PackagingGroup resource.
     */
    Id: __string;
  }
  export interface DescribePackagingGroupResponse {
    /**
     * The ARN of the PackagingGroup.
     */
    Arn?: __string;
    /**
     * The ID of the PackagingGroup.
     */
    Id?: __string;
  }
  export interface EgressEndpoint {
    /**
     * The ID of the PackagingConfiguration being applied to the Asset.
     */
    PackagingConfigurationId?: __string;
    /**
     * The URL of the parent manifest for the repackaged Asset.
     */
    Url?: __string;
  }
  export type EncryptionMethod = "AES_128"|"SAMPLE_AES"|string;
  export interface HlsEncryption {
    /**
     * A constant initialization vector for encryption (optional).
When not specified the initialization vector will be periodically rotated.

     */
    ConstantInitializationVector?: __string;
    /**
     * The encryption method to use.
     */
    EncryptionMethod?: EncryptionMethod;
    SpekeKeyProvider: SpekeKeyProvider;
  }
  export interface HlsManifest {
    /**
     * This setting controls how ad markers are included in the packaged OriginEndpoint.
"NONE" will omit all SCTE-35 ad markers from the output.
"PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad
markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest.
"SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35
messages in the input source.

     */
    AdMarkers?: AdMarkers;
    /**
     * When enabled, an I-Frame only stream will be included in the output.
     */
    IncludeIframeOnlyStream?: __boolean;
    /**
     * An optional string to include in the name of the manifest.
     */
    ManifestName?: __string;
    /**
     * The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag
inserted into manifests. Additionally, when an interval is specified
ID3Timed Metadata messages will be generated every 5 seconds using the
ingest time of the content.
If the interval is not specified, or set to 0, then
no EXT-X-PROGRAM-DATE-TIME tags will be inserted into manifests and no
ID3Timed Metadata messages will be generated. Note that irrespective
of this parameter, if any ID3 Timed Metadata is found in HTTP Live Streaming (HLS) input,
it will be passed through to HLS output.

     */
    ProgramDateTimeIntervalSeconds?: __integer;
    /**
     * When enabled, the EXT-X-KEY tag will be repeated in output manifests.
     */
    RepeatExtXKey?: __boolean;
    StreamSelection?: StreamSelection;
  }
  export interface HlsPackage {
    Encryption?: HlsEncryption;
    /**
     * A list of HLS manifest configurations.
     */
    HlsManifests: __listOfHlsManifest;
    /**
     * Duration (in seconds) of each fragment. Actual fragments will be
rounded to the nearest multiple of the source fragment duration.

     */
    SegmentDurationSeconds?: __integer;
    /**
     * When enabled, audio streams will be placed in rendition groups in the output.
     */
    UseAudioRenditionGroup?: __boolean;
  }
  export interface ListAssetsRequest {
    /**
     * Upper bound on number of records to return.
     */
    MaxResults?: MaxResults;
    /**
     * A token used to resume pagination from the end of a previous request.
     */
    NextToken?: __string;
    /**
     * Returns Assets associated with the specified PackagingGroup.
     */
    PackagingGroupId?: __string;
  }
  export interface ListAssetsResponse {
    /**
     * A list of MediaPackage VOD Asset resources.
     */
    Assets?: __listOfAssetShallow;
    /**
     * A token that can be used to resume pagination from the end of the collection.
     */
    NextToken?: __string;
  }
  export interface ListPackagingConfigurationsRequest {
    /**
     * Upper bound on number of records to return.
     */
    MaxResults?: MaxResults;
    /**
     * A token used to resume pagination from the end of a previous request.
     */
    NextToken?: __string;
    /**
     * Returns MediaPackage VOD PackagingConfigurations associated with the specified PackagingGroup.
     */
    PackagingGroupId?: __string;
  }
  export interface ListPackagingConfigurationsResponse {
    /**
     * A token that can be used to resume pagination from the end of the collection.
     */
    NextToken?: __string;
    /**
     * A list of MediaPackage VOD PackagingConfiguration resources.
     */
    PackagingConfigurations?: __listOfPackagingConfiguration;
  }
  export interface ListPackagingGroupsRequest {
    /**
     * Upper bound on number of records to return.
     */
    MaxResults?: MaxResults;
    /**
     * A token used to resume pagination from the end of a previous request.
     */
    NextToken?: __string;
  }
  export interface ListPackagingGroupsResponse {
    /**
     * A token that can be used to resume pagination from the end of the collection.
     */
    NextToken?: __string;
    /**
     * A list of MediaPackage VOD PackagingGroup resources.
     */
    PackagingGroups?: __listOfPackagingGroup;
  }
  export type MaxResults = number;
  export interface MssEncryption {
    SpekeKeyProvider: SpekeKeyProvider;
  }
  export interface MssManifest {
    /**
     * An optional string to include in the name of the manifest.
     */
    ManifestName?: __string;
    StreamSelection?: StreamSelection;
  }
  export interface MssPackage {
    Encryption?: MssEncryption;
    /**
     * A list of MSS manifest configurations.
     */
    MssManifests: __listOfMssManifest;
    /**
     * The duration (in seconds) of each segment.
     */
    SegmentDurationSeconds?: __integer;
  }
  export interface PackagingConfiguration {
    /**
     * The ARN of the PackagingConfiguration.
     */
    Arn?: __string;
    CmafPackage?: CmafPackage;
    DashPackage?: DashPackage;
    HlsPackage?: HlsPackage;
    /**
     * The ID of the PackagingConfiguration.
     */
    Id?: __string;
    MssPackage?: MssPackage;
    /**
     * The ID of a PackagingGroup.
     */
    PackagingGroupId?: __string;
  }
  export interface PackagingGroup {
    /**
     * The ARN of the PackagingGroup.
     */
    Arn?: __string;
    /**
     * The ID of the PackagingGroup.
     */
    Id?: __string;
  }
  export type Profile = "NONE"|"HBBTV_1_5"|string;
  export interface SpekeKeyProvider {
    /**
     * An Amazon Resource Name (ARN) of an IAM role that AWS Elemental
MediaPackage will assume when accessing the key provider service.

     */
    RoleArn: __string;
    /**
     * The system IDs to include in key requests.
     */
    SystemIds: __listOf__string;
    /**
     * The URL of the external key provider service.
     */
    Url: __string;
  }
  export type StreamOrder = "ORIGINAL"|"VIDEO_BITRATE_ASCENDING"|"VIDEO_BITRATE_DESCENDING"|string;
  export interface StreamSelection {
    /**
     * The maximum video bitrate (bps) to include in output.
     */
    MaxVideoBitsPerSecond?: __integer;
    /**
     * The minimum video bitrate (bps) to include in output.
     */
    MinVideoBitsPerSecond?: __integer;
    /**
     * A directive that determines the order of streams in the output.
     */
    StreamOrder?: StreamOrder;
  }
  export type __boolean = boolean;
  export type __integer = number;
  export type __listOfAssetShallow = AssetShallow[];
  export type __listOfDashManifest = DashManifest[];
  export type __listOfEgressEndpoint = EgressEndpoint[];
  export type __listOfHlsManifest = HlsManifest[];
  export type __listOfMssManifest = MssManifest[];
  export type __listOfPackagingConfiguration = PackagingConfiguration[];
  export type __listOfPackagingGroup = PackagingGroup[];
  export type __listOf__string = __string[];
  export type __string = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-11-07"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the MediaPackageVod client.
   */
  export import Types = MediaPackageVod;
}
export = MediaPackageVod;
