import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
import {Readable} from 'stream';
interface Blob {}
declare class SageMakerGeospatial extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: SageMakerGeospatial.Types.ClientConfiguration)
  config: Config & SageMakerGeospatial.Types.ClientConfiguration;
  /**
   * Use this operation to delete an Earth Observation job.
   */
  deleteEarthObservationJob(params: SageMakerGeospatial.Types.DeleteEarthObservationJobInput, callback?: (err: AWSError, data: SageMakerGeospatial.Types.DeleteEarthObservationJobOutput) => void): Request<SageMakerGeospatial.Types.DeleteEarthObservationJobOutput, AWSError>;
  /**
   * Use this operation to delete an Earth Observation job.
   */
  deleteEarthObservationJob(callback?: (err: AWSError, data: SageMakerGeospatial.Types.DeleteEarthObservationJobOutput) => void): Request<SageMakerGeospatial.Types.DeleteEarthObservationJobOutput, AWSError>;
  /**
   * Use this operation to delete a Vector Enrichment job.
   */
  deleteVectorEnrichmentJob(params: SageMakerGeospatial.Types.DeleteVectorEnrichmentJobInput, callback?: (err: AWSError, data: SageMakerGeospatial.Types.DeleteVectorEnrichmentJobOutput) => void): Request<SageMakerGeospatial.Types.DeleteVectorEnrichmentJobOutput, AWSError>;
  /**
   * Use this operation to delete a Vector Enrichment job.
   */
  deleteVectorEnrichmentJob(callback?: (err: AWSError, data: SageMakerGeospatial.Types.DeleteVectorEnrichmentJobOutput) => void): Request<SageMakerGeospatial.Types.DeleteVectorEnrichmentJobOutput, AWSError>;
  /**
   * Use this operation to export results of an Earth Observation job and optionally source images used as input to the EOJ to an S3 location.
   */
  exportEarthObservationJob(params: SageMakerGeospatial.Types.ExportEarthObservationJobInput, callback?: (err: AWSError, data: SageMakerGeospatial.Types.ExportEarthObservationJobOutput) => void): Request<SageMakerGeospatial.Types.ExportEarthObservationJobOutput, AWSError>;
  /**
   * Use this operation to export results of an Earth Observation job and optionally source images used as input to the EOJ to an S3 location.
   */
  exportEarthObservationJob(callback?: (err: AWSError, data: SageMakerGeospatial.Types.ExportEarthObservationJobOutput) => void): Request<SageMakerGeospatial.Types.ExportEarthObservationJobOutput, AWSError>;
  /**
   * Use this operation to copy results of a Vector Enrichment job to an S3 location.
   */
  exportVectorEnrichmentJob(params: SageMakerGeospatial.Types.ExportVectorEnrichmentJobInput, callback?: (err: AWSError, data: SageMakerGeospatial.Types.ExportVectorEnrichmentJobOutput) => void): Request<SageMakerGeospatial.Types.ExportVectorEnrichmentJobOutput, AWSError>;
  /**
   * Use this operation to copy results of a Vector Enrichment job to an S3 location.
   */
  exportVectorEnrichmentJob(callback?: (err: AWSError, data: SageMakerGeospatial.Types.ExportVectorEnrichmentJobOutput) => void): Request<SageMakerGeospatial.Types.ExportVectorEnrichmentJobOutput, AWSError>;
  /**
   * Get the details for a previously initiated Earth Observation job.
   */
  getEarthObservationJob(params: SageMakerGeospatial.Types.GetEarthObservationJobInput, callback?: (err: AWSError, data: SageMakerGeospatial.Types.GetEarthObservationJobOutput) => void): Request<SageMakerGeospatial.Types.GetEarthObservationJobOutput, AWSError>;
  /**
   * Get the details for a previously initiated Earth Observation job.
   */
  getEarthObservationJob(callback?: (err: AWSError, data: SageMakerGeospatial.Types.GetEarthObservationJobOutput) => void): Request<SageMakerGeospatial.Types.GetEarthObservationJobOutput, AWSError>;
  /**
   * Use this operation to get details of a specific raster data collection.
   */
  getRasterDataCollection(params: SageMakerGeospatial.Types.GetRasterDataCollectionInput, callback?: (err: AWSError, data: SageMakerGeospatial.Types.GetRasterDataCollectionOutput) => void): Request<SageMakerGeospatial.Types.GetRasterDataCollectionOutput, AWSError>;
  /**
   * Use this operation to get details of a specific raster data collection.
   */
  getRasterDataCollection(callback?: (err: AWSError, data: SageMakerGeospatial.Types.GetRasterDataCollectionOutput) => void): Request<SageMakerGeospatial.Types.GetRasterDataCollectionOutput, AWSError>;
  /**
   * Gets a web mercator tile for the given Earth Observation job.
   */
  getTile(params: SageMakerGeospatial.Types.GetTileInput, callback?: (err: AWSError, data: SageMakerGeospatial.Types.GetTileOutput) => void): Request<SageMakerGeospatial.Types.GetTileOutput, AWSError>;
  /**
   * Gets a web mercator tile for the given Earth Observation job.
   */
  getTile(callback?: (err: AWSError, data: SageMakerGeospatial.Types.GetTileOutput) => void): Request<SageMakerGeospatial.Types.GetTileOutput, AWSError>;
  /**
   * Retrieves details of a Vector Enrichment Job for a given job Amazon Resource Name (ARN).
   */
  getVectorEnrichmentJob(params: SageMakerGeospatial.Types.GetVectorEnrichmentJobInput, callback?: (err: AWSError, data: SageMakerGeospatial.Types.GetVectorEnrichmentJobOutput) => void): Request<SageMakerGeospatial.Types.GetVectorEnrichmentJobOutput, AWSError>;
  /**
   * Retrieves details of a Vector Enrichment Job for a given job Amazon Resource Name (ARN).
   */
  getVectorEnrichmentJob(callback?: (err: AWSError, data: SageMakerGeospatial.Types.GetVectorEnrichmentJobOutput) => void): Request<SageMakerGeospatial.Types.GetVectorEnrichmentJobOutput, AWSError>;
  /**
   * Use this operation to get a list of the Earth Observation jobs associated with the calling Amazon Web Services account.
   */
  listEarthObservationJobs(params: SageMakerGeospatial.Types.ListEarthObservationJobInput, callback?: (err: AWSError, data: SageMakerGeospatial.Types.ListEarthObservationJobOutput) => void): Request<SageMakerGeospatial.Types.ListEarthObservationJobOutput, AWSError>;
  /**
   * Use this operation to get a list of the Earth Observation jobs associated with the calling Amazon Web Services account.
   */
  listEarthObservationJobs(callback?: (err: AWSError, data: SageMakerGeospatial.Types.ListEarthObservationJobOutput) => void): Request<SageMakerGeospatial.Types.ListEarthObservationJobOutput, AWSError>;
  /**
   * Use this operation to get raster data collections.
   */
  listRasterDataCollections(params: SageMakerGeospatial.Types.ListRasterDataCollectionsInput, callback?: (err: AWSError, data: SageMakerGeospatial.Types.ListRasterDataCollectionsOutput) => void): Request<SageMakerGeospatial.Types.ListRasterDataCollectionsOutput, AWSError>;
  /**
   * Use this operation to get raster data collections.
   */
  listRasterDataCollections(callback?: (err: AWSError, data: SageMakerGeospatial.Types.ListRasterDataCollectionsOutput) => void): Request<SageMakerGeospatial.Types.ListRasterDataCollectionsOutput, AWSError>;
  /**
   * Lists the tags attached to the resource.
   */
  listTagsForResource(params: SageMakerGeospatial.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: SageMakerGeospatial.Types.ListTagsForResourceResponse) => void): Request<SageMakerGeospatial.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists the tags attached to the resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: SageMakerGeospatial.Types.ListTagsForResourceResponse) => void): Request<SageMakerGeospatial.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Retrieves a list of vector enrichment jobs.
   */
  listVectorEnrichmentJobs(params: SageMakerGeospatial.Types.ListVectorEnrichmentJobInput, callback?: (err: AWSError, data: SageMakerGeospatial.Types.ListVectorEnrichmentJobOutput) => void): Request<SageMakerGeospatial.Types.ListVectorEnrichmentJobOutput, AWSError>;
  /**
   * Retrieves a list of vector enrichment jobs.
   */
  listVectorEnrichmentJobs(callback?: (err: AWSError, data: SageMakerGeospatial.Types.ListVectorEnrichmentJobOutput) => void): Request<SageMakerGeospatial.Types.ListVectorEnrichmentJobOutput, AWSError>;
  /**
   * Allows you run image query on a specific raster data collection to get a list of the satellite imagery matching the selected filters.
   */
  searchRasterDataCollection(params: SageMakerGeospatial.Types.SearchRasterDataCollectionInput, callback?: (err: AWSError, data: SageMakerGeospatial.Types.SearchRasterDataCollectionOutput) => void): Request<SageMakerGeospatial.Types.SearchRasterDataCollectionOutput, AWSError>;
  /**
   * Allows you run image query on a specific raster data collection to get a list of the satellite imagery matching the selected filters.
   */
  searchRasterDataCollection(callback?: (err: AWSError, data: SageMakerGeospatial.Types.SearchRasterDataCollectionOutput) => void): Request<SageMakerGeospatial.Types.SearchRasterDataCollectionOutput, AWSError>;
  /**
   * Use this operation to create an Earth observation job.
   */
  startEarthObservationJob(params: SageMakerGeospatial.Types.StartEarthObservationJobInput, callback?: (err: AWSError, data: SageMakerGeospatial.Types.StartEarthObservationJobOutput) => void): Request<SageMakerGeospatial.Types.StartEarthObservationJobOutput, AWSError>;
  /**
   * Use this operation to create an Earth observation job.
   */
  startEarthObservationJob(callback?: (err: AWSError, data: SageMakerGeospatial.Types.StartEarthObservationJobOutput) => void): Request<SageMakerGeospatial.Types.StartEarthObservationJobOutput, AWSError>;
  /**
   * Creates a Vector Enrichment job for the supplied job type. Currently, there are two supported job types: reverse geocoding and map matching.
   */
  startVectorEnrichmentJob(params: SageMakerGeospatial.Types.StartVectorEnrichmentJobInput, callback?: (err: AWSError, data: SageMakerGeospatial.Types.StartVectorEnrichmentJobOutput) => void): Request<SageMakerGeospatial.Types.StartVectorEnrichmentJobOutput, AWSError>;
  /**
   * Creates a Vector Enrichment job for the supplied job type. Currently, there are two supported job types: reverse geocoding and map matching.
   */
  startVectorEnrichmentJob(callback?: (err: AWSError, data: SageMakerGeospatial.Types.StartVectorEnrichmentJobOutput) => void): Request<SageMakerGeospatial.Types.StartVectorEnrichmentJobOutput, AWSError>;
  /**
   * Use this operation to stop an existing earth observation job.
   */
  stopEarthObservationJob(params: SageMakerGeospatial.Types.StopEarthObservationJobInput, callback?: (err: AWSError, data: SageMakerGeospatial.Types.StopEarthObservationJobOutput) => void): Request<SageMakerGeospatial.Types.StopEarthObservationJobOutput, AWSError>;
  /**
   * Use this operation to stop an existing earth observation job.
   */
  stopEarthObservationJob(callback?: (err: AWSError, data: SageMakerGeospatial.Types.StopEarthObservationJobOutput) => void): Request<SageMakerGeospatial.Types.StopEarthObservationJobOutput, AWSError>;
  /**
   * Stops the Vector Enrichment job for a given job ARN.
   */
  stopVectorEnrichmentJob(params: SageMakerGeospatial.Types.StopVectorEnrichmentJobInput, callback?: (err: AWSError, data: SageMakerGeospatial.Types.StopVectorEnrichmentJobOutput) => void): Request<SageMakerGeospatial.Types.StopVectorEnrichmentJobOutput, AWSError>;
  /**
   * Stops the Vector Enrichment job for a given job ARN.
   */
  stopVectorEnrichmentJob(callback?: (err: AWSError, data: SageMakerGeospatial.Types.StopVectorEnrichmentJobOutput) => void): Request<SageMakerGeospatial.Types.StopVectorEnrichmentJobOutput, AWSError>;
  /**
   * The resource you want to tag.
   */
  tagResource(params: SageMakerGeospatial.Types.TagResourceRequest, callback?: (err: AWSError, data: SageMakerGeospatial.Types.TagResourceResponse) => void): Request<SageMakerGeospatial.Types.TagResourceResponse, AWSError>;
  /**
   * The resource you want to tag.
   */
  tagResource(callback?: (err: AWSError, data: SageMakerGeospatial.Types.TagResourceResponse) => void): Request<SageMakerGeospatial.Types.TagResourceResponse, AWSError>;
  /**
   * The resource you want to untag.
   */
  untagResource(params: SageMakerGeospatial.Types.UntagResourceRequest, callback?: (err: AWSError, data: SageMakerGeospatial.Types.UntagResourceResponse) => void): Request<SageMakerGeospatial.Types.UntagResourceResponse, AWSError>;
  /**
   * The resource you want to untag.
   */
  untagResource(callback?: (err: AWSError, data: SageMakerGeospatial.Types.UntagResourceResponse) => void): Request<SageMakerGeospatial.Types.UntagResourceResponse, AWSError>;
}
declare namespace SageMakerGeospatial {
  export type AlgorithmNameCloudRemoval = "INTERPOLATION"|string;
  export type AlgorithmNameGeoMosaic = "NEAR"|"BILINEAR"|"CUBIC"|"CUBICSPLINE"|"LANCZOS"|"AVERAGE"|"RMS"|"MODE"|"MAX"|"MIN"|"MED"|"Q1"|"Q3"|"SUM"|string;
  export type AlgorithmNameResampling = "NEAR"|"BILINEAR"|"CUBIC"|"CUBICSPLINE"|"LANCZOS"|"AVERAGE"|"RMS"|"MODE"|"MAX"|"MIN"|"MED"|"Q1"|"Q3"|"SUM"|string;
  export interface AreaOfInterest {
    /**
     * 
     */
    AreaOfInterestGeometry?: AreaOfInterestGeometry;
  }
  export interface AreaOfInterestGeometry {
    /**
     * 
     */
    MultiPolygonGeometry?: MultiPolygonGeometryInput;
    /**
     * 
     */
    PolygonGeometry?: PolygonGeometryInput;
  }
  export type Arn = string;
  export interface AssetValue {
    /**
     * 
     */
    Href?: String;
  }
  export type AssetsMap = {[key: string]: AssetValue};
  export interface BandMathConfigInput {
    /**
     * 
     */
    CustomIndices?: CustomIndicesInput;
    /**
     * 
     */
    PredefinedIndices?: StringListInput;
  }
  export type BinaryFile = Buffer|Uint8Array|Blob|string|Readable;
  export type Boolean = boolean;
  export interface CloudMaskingConfigInput {
  }
  export interface CloudRemovalConfigInput {
    /**
     * The name of the algorithm used for cloud removal.
     */
    AlgorithmName?: AlgorithmNameCloudRemoval;
    /**
     * The interpolation value you provide for cloud removal.
     */
    InterpolationValue?: String;
    /**
     * 
     */
    TargetBands?: StringListInput;
  }
  export type ComparisonOperator = "EQUALS"|"NOT_EQUALS"|"STARTS_WITH"|string;
  export interface CustomIndicesInput {
    /**
     * 
     */
    Operations?: OperationsListInput;
  }
  export type DataCollectionArn = string;
  export type DataCollectionType = "PUBLIC"|"PREMIUM"|"USER"|string;
  export type DataCollectionsList = RasterDataCollectionMetadata[];
  export interface DeleteEarthObservationJobInput {
    /**
     * The Amazon Resource Name (ARN) of the Earth Observation job being deleted.
     */
    Arn: EarthObservationJobArn;
  }
  export interface DeleteEarthObservationJobOutput {
  }
  export interface DeleteVectorEnrichmentJobInput {
    /**
     * The Amazon Resource Name (ARN) of the Vector Enrichment job being deleted.
     */
    Arn: VectorEnrichmentJobArn;
  }
  export interface DeleteVectorEnrichmentJobOutput {
  }
  export type Double = number;
  export type EarthObservationJobArn = string;
  export interface EarthObservationJobErrorDetails {
    /**
     * 
     */
    Message?: String;
    /**
     * 
     */
    Type?: EarthObservationJobErrorType;
  }
  export type EarthObservationJobErrorType = "CLIENT_ERROR"|"SERVER_ERROR"|string;
  export type EarthObservationJobExportStatus = "IN_PROGRESS"|"SUCCEEDED"|"FAILED"|string;
  export type EarthObservationJobList = ListEarthObservationJobOutputConfig[];
  export type EarthObservationJobOutputBands = OutputBand[];
  export type EarthObservationJobStatus = "INITIALIZING"|"IN_PROGRESS"|"STOPPING"|"COMPLETED"|"STOPPED"|"FAILED"|"DELETING"|"DELETED"|string;
  export interface EoCloudCoverInput {
    /**
     * 
     */
    LowerBound: Float;
    /**
     * 
     */
    UpperBound: Float;
  }
  export interface EojDataSourceConfigInput {
    /**
     * 
     */
    S3Data?: S3DataInput;
  }
  export interface ExportEarthObservationJobInput {
    /**
     * The input Amazon Resource Name (ARN) of the Earth Observation job being exported.
     */
    Arn: EarthObservationJobArn;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that you specified for the job.
     */
    ExecutionRoleArn: String;
    /**
     * The source images provided to the Earth Observation job being exported.
     */
    ExportSourceImages?: Boolean;
    /**
     * An object containing information about the output file.
     */
    OutputConfig: OutputConfigInput;
  }
  export interface ExportEarthObservationJobOutput {
    /**
     * The output Amazon Resource Name (ARN) of the Earth Observation job being exported.
     */
    Arn: EarthObservationJobArn;
    /**
     * The creation time.
     */
    CreationTime: Timestamp;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that you specified for the job.
     */
    ExecutionRoleArn: String;
    /**
     * The source images provided to the Earth Observation job being exported.
     */
    ExportSourceImages?: Boolean;
    /**
     * The status of the results of the Earth Observation job being exported.
     */
    ExportStatus: EarthObservationJobExportStatus;
    /**
     * An object containing information about the output file.
     */
    OutputConfig: OutputConfigInput;
  }
  export interface ExportErrorDetails {
    /**
     * 
     */
    ExportResults?: ExportErrorDetailsOutput;
    /**
     * 
     */
    ExportSourceImages?: ExportErrorDetailsOutput;
  }
  export interface ExportErrorDetailsOutput {
    /**
     * 
     */
    Message?: String;
    /**
     * 
     */
    Type?: ExportErrorType;
  }
  export type ExportErrorType = "CLIENT_ERROR"|"SERVER_ERROR"|string;
  export interface ExportS3DataInput {
    /**
     * The Amazon Key Management Service (KMS) key ID for server-side encryption.
     */
    KmsKeyId?: String;
    /**
     * The URL to the Amazon S3 data input.
     */
    S3Uri: String;
  }
  export interface ExportVectorEnrichmentJobInput {
    /**
     * The Amazon Resource Name (ARN) of the Vector Enrichment job.
     */
    Arn: VectorEnrichmentJobArn;
    /**
     * The Amazon Resource Name (ARN) of the IAM rolewith permission to upload to the location in OutputConfig.
     */
    ExecutionRoleArn: String;
    /**
     * Output location information for exporting Vector Enrichment Job results. 
     */
    OutputConfig: ExportVectorEnrichmentJobOutputConfig;
  }
  export interface ExportVectorEnrichmentJobOutput {
    /**
     * The Amazon Resource Name (ARN) of the Vector Enrichment job being exported.
     */
    Arn: VectorEnrichmentJobArn;
    /**
     * The creation time.
     */
    CreationTime: Timestamp;
    /**
     * The Amazon Resource Name (ARN) of the IAM role with permission to upload to the location in OutputConfig.
     */
    ExecutionRoleArn: String;
    /**
     * The status of the results the Vector Enrichment job being exported.
     */
    ExportStatus: VectorEnrichmentJobExportStatus;
    /**
     * Output location information for exporting Vector Enrichment Job results. 
     */
    OutputConfig: ExportVectorEnrichmentJobOutputConfig;
  }
  export interface ExportVectorEnrichmentJobOutputConfig {
    /**
     * 
     */
    S3Data: VectorEnrichmentJobS3Data;
  }
  export interface Filter {
    /**
     * The maximum value of the filter.
     */
    Maximum?: Float;
    /**
     * The minimum value of the filter.
     */
    Minimum?: Float;
    /**
     * The name of the filter.
     */
    Name: String;
    /**
     * The type of the filter being used.
     */
    Type: String;
  }
  export type FilterList = Filter[];
  export type Float = number;
  export interface GeoMosaicConfigInput {
    /**
     * The name of the algorithm being used for geomosaic.
     */
    AlgorithmName?: AlgorithmNameGeoMosaic;
    /**
     * The target bands for geomosaic.
     */
    TargetBands?: StringListInput;
  }
  export interface Geometry {
    /**
     * 
     */
    Coordinates: LinearRings;
    /**
     * 
     */
    Type: String;
  }
  export interface GetEarthObservationJobInput {
    /**
     * The Amazon Resource Name (ARN) of the Earth Observation job.
     */
    Arn: EarthObservationJobArn;
  }
  export interface GetEarthObservationJobOutput {
    /**
     * The Amazon Resource Name (ARN) of the Earth Observation job.
     */
    Arn: String;
    /**
     * The creation time of the initiated Earth Observation job.
     */
    CreationTime: Timestamp;
    /**
     * The duration of Earth Observation job, in seconds.
     */
    DurationInSeconds: Integer;
    /**
     * Details about the errors generated during the Earth Observation job.
     */
    ErrorDetails?: EarthObservationJobErrorDetails;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that you specified for the job.
     */
    ExecutionRoleArn?: String;
    /**
     * Details about the errors generated during ExportEarthObservationJob.
     */
    ExportErrorDetails?: ExportErrorDetails;
    /**
     * The status of the Earth Observation job.
     */
    ExportStatus?: EarthObservationJobExportStatus;
    /**
     * Input data for the Earth Observation job.
     */
    InputConfig: InputConfigOutput;
    /**
     * An object containing information about the job configuration.
     */
    JobConfig: JobConfigInput;
    /**
     * The Amazon Key Management Service (KMS) key ID for server-side encryption.
     */
    KmsKeyId?: String;
    /**
     * The name of the Earth Observation job.
     */
    Name: String;
    /**
     * 
     */
    OutputBands?: EarthObservationJobOutputBands;
    /**
     * The status of a previously initiated Earth Observation job.
     */
    Status: EarthObservationJobStatus;
    /**
     * Each tag consists of a key and a value.
     */
    Tags?: Tags;
  }
  export interface GetRasterDataCollectionInput {
    /**
     * The Amazon Resource Name (ARN) of the raster data collection.
     */
    Arn: DataCollectionArn;
  }
  export interface GetRasterDataCollectionOutput {
    /**
     * The Amazon Resource Name (ARN) of the raster data collection.
     */
    Arn: DataCollectionArn;
    /**
     * A description of the raster data collection.
     */
    Description: String;
    /**
     * The URL of the description page.
     */
    DescriptionPageUrl: String;
    /**
     * 
     */
    ImageSourceBands: ImageSourceBandList;
    /**
     * The name of the raster data collection.
     */
    Name: String;
    /**
     * The filters supported by the raster data collection.
     */
    SupportedFilters: FilterList;
    /**
     * Each tag consists of a key and a value.
     */
    Tags?: Tags;
    /**
     * The raster data collection type.
     */
    Type: DataCollectionType;
  }
  export interface GetTileInput {
    /**
     * The Amazon Resource Name (ARN) of the tile operation.
     */
    Arn: EarthObservationJobArn;
    /**
     * The particular assets or bands to tile.
     */
    ImageAssets: StringListInput;
    /**
     * Determines whether or not to return a valid data mask.
     */
    ImageMask?: Boolean;
    /**
     * The output data type of the tile operation.
     */
    OutputDataType?: OutputType;
    /**
     * The data format of the output tile. The formats include .npy, .png and .jpg.
     */
    OutputFormat?: String;
    /**
     * Property filters for the imagery to tile.
     */
    PropertyFilters?: String;
    /**
     * Determines what part of the Earth Observation job to tile. 'INPUT' or 'OUTPUT' are the valid options.
     */
    Target: TargetOptions;
    /**
     * Time range filter applied to imagery to find the images to tile.
     */
    TimeRangeFilter?: String;
    /**
     * The x coordinate of the tile input.
     */
    x: Integer;
    /**
     * The y coordinate of the tile input.
     */
    y: Integer;
    /**
     * The z coordinate of the tile input.
     */
    z: Integer;
  }
  export interface GetTileOutput {
    /**
     * The output binary file.
     */
    BinaryFile?: BinaryFile;
  }
  export interface GetVectorEnrichmentJobInput {
    /**
     * The Amazon Resource Name (ARN) of the Vector Enrichment job.
     */
    Arn: VectorEnrichmentJobArn;
  }
  export interface GetVectorEnrichmentJobOutput {
    /**
     * The Amazon Resource Name (ARN) of the Vector Enrichment job.
     */
    Arn: String;
    /**
     * The creation time.
     */
    CreationTime: Timestamp;
    /**
     * The duration of the Vector Enrichment job, in seconds.
     */
    DurationInSeconds: Integer;
    /**
     * Details about the errors generated during the Vector Enrichment job.
     */
    ErrorDetails?: VectorEnrichmentJobErrorDetails;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that you specified for the job.
     */
    ExecutionRoleArn: String;
    /**
     * Details about the errors generated during the ExportVectorEnrichmentJob.
     */
    ExportErrorDetails?: VectorEnrichmentJobExportErrorDetails;
    /**
     * The export status of the Vector Enrichment job being initiated.
     */
    ExportStatus?: VectorEnrichmentJobExportStatus;
    /**
     * Input configuration information for the Vector Enrichment job.
     */
    InputConfig: VectorEnrichmentJobInputConfig;
    /**
     * An object containing information about the job configuration.
     */
    JobConfig: VectorEnrichmentJobConfig;
    /**
     * The Amazon Key Management Service (KMS) key ID for server-side encryption.
     */
    KmsKeyId?: String;
    /**
     * The name of the Vector Enrichment job.
     */
    Name: String;
    /**
     * The status of the initiated Vector Enrichment job.
     */
    Status: VectorEnrichmentJobStatus;
    /**
     * Each tag consists of a key and a value.
     */
    Tags?: Tags;
    /**
     * The type of the Vector Enrichment job being initiated.
     */
    Type: VectorEnrichmentJobType;
  }
  export type GroupBy = "ALL"|"YEARLY"|string;
  export type ImageSourceBandList = String[];
  export interface InputConfigInput {
    /**
     * The location of the input data.&gt;
     */
    DataSourceConfig?: EojDataSourceConfigInput;
    /**
     * The Amazon Resource Name (ARN) of the previous Earth Observation job.
     */
    PreviousEarthObservationJobArn?: String;
    /**
     * 
     */
    RasterDataCollectionQuery?: RasterDataCollectionQueryInput;
  }
  export interface InputConfigOutput {
    /**
     * The location of the input data.
     */
    DataSourceConfig?: EojDataSourceConfigInput;
    /**
     * The Amazon Resource Name (ARN) of the previous Earth Observation job.
     */
    PreviousEarthObservationJobArn?: String;
    /**
     * 
     */
    RasterDataCollectionQuery?: RasterDataCollectionQueryOutput;
  }
  export type Integer = number;
  export interface ItemSource {
    /**
     * 
     */
    Assets?: AssetsMap;
    /**
     * 
     */
    DateTime: Timestamp;
    /**
     * 
     */
    Geometry: Geometry;
    /**
     * A unique Id for the source item.
     */
    Id: String;
    /**
     * 
     */
    Properties?: Properties;
  }
  export type ItemSourceList = ItemSource[];
  export interface JobConfigInput {
    /**
     * 
     */
    BandMathConfig?: BandMathConfigInput;
    /**
     * An object containing information about the job configuration for cloud masking.
     */
    CloudMaskingConfig?: CloudMaskingConfigInput;
    /**
     * An object containing information about the job configuration for cloud removal.
     */
    CloudRemovalConfig?: CloudRemovalConfigInput;
    /**
     * An object containing information about the job configuration for geomosaic.
     */
    GeoMosaicConfig?: GeoMosaicConfigInput;
    /**
     * An object containing information about the job configuration for land cover segmentation.
     */
    LandCoverSegmentationConfig?: LandCoverSegmentationConfigInput;
    /**
     * An object containing information about the job configuration for resampling.
     */
    ResamplingConfig?: ResamplingConfigInput;
    /**
     * 
     */
    StackConfig?: StackConfigInput;
    /**
     * An object containing information about the job configuration for temporal statistics.
     */
    TemporalStatisticsConfig?: TemporalStatisticsConfigInput;
    /**
     * An object containing information about the job configuration for zonal statistics.
     */
    ZonalStatisticsConfig?: ZonalStatisticsConfigInput;
  }
  export interface LandCoverSegmentationConfigInput {
  }
  export interface LandsatCloudCoverLandInput {
    /**
     * 
     */
    LowerBound: Float;
    /**
     * 
     */
    UpperBound: Float;
  }
  export type LinearRing = Position[];
  export type LinearRings = LinearRing[];
  export type LinearRingsList = LinearRings[];
  export interface ListEarthObservationJobInput {
    /**
     * The total number of items to return.
     */
    MaxResults?: ListEarthObservationJobInputMaxResultsInteger;
    /**
     * If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The parameter by which to sort the results.
     */
    SortBy?: String;
    /**
     * An optional value that specifies whether you want the results sorted in Ascending or Descending order.
     */
    SortOrder?: SortOrder;
    /**
     * A filter that retrieves only jobs with a specific status.
     */
    StatusEquals?: EarthObservationJobStatus;
  }
  export type ListEarthObservationJobInputMaxResultsInteger = number;
  export interface ListEarthObservationJobOutput {
    /**
     * Contains summary information about the Earth Observation jobs.
     */
    EarthObservationJobSummaries: EarthObservationJobList;
    /**
     * If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListEarthObservationJobOutputConfig {
    /**
     * The Amazon Resource Name (ARN) of the list of the Earth Observation jobs.
     */
    Arn: String;
    /**
     * The creation time.
     */
    CreationTime: Timestamp;
    /**
     * The duration of the session, in seconds.
     */
    DurationInSeconds: Integer;
    /**
     * The names of the Earth Observation jobs in the list.
     */
    Name: String;
    /**
     * 
     */
    OperationType: String;
    /**
     * The status of the list of the Earth Observation jobs.
     */
    Status: EarthObservationJobStatus;
    /**
     * Each tag consists of a key and a value.
     */
    Tags?: Tags;
  }
  export interface ListRasterDataCollectionsInput {
    /**
     * The total number of items to return.
     */
    MaxResults?: ListRasterDataCollectionsInputMaxResultsInteger;
    /**
     * If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results.
     */
    NextToken?: NextToken;
  }
  export type ListRasterDataCollectionsInputMaxResultsInteger = number;
  export interface ListRasterDataCollectionsOutput {
    /**
     * If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results.
     */
    NextToken?: NextToken;
    /**
     * Contains summary information about the raster data collection.
     */
    RasterDataCollectionSummaries: DataCollectionsList;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource you want to tag.
     */
    ResourceArn: Arn;
  }
  export interface ListTagsForResourceResponse {
    /**
     * Each tag consists of a key and a value.
     */
    Tags?: Tags;
  }
  export interface ListVectorEnrichmentJobInput {
    /**
     * The maximum number of items to return.
     */
    MaxResults?: ListVectorEnrichmentJobInputMaxResultsInteger;
    /**
     * If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The parameter by which to sort the results.
     */
    SortBy?: String;
    /**
     * An optional value that specifies whether you want the results sorted in Ascending or Descending order.
     */
    SortOrder?: SortOrder;
    /**
     * A filter that retrieves only jobs with a specific status.
     */
    StatusEquals?: String;
  }
  export type ListVectorEnrichmentJobInputMaxResultsInteger = number;
  export interface ListVectorEnrichmentJobOutput {
    /**
     * If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results.
     */
    NextToken?: NextToken;
    /**
     * Contains summary information about the Vector Enrichment jobs.
     */
    VectorEnrichmentJobSummaries: VectorEnrichmentJobList;
  }
  export interface ListVectorEnrichmentJobOutputConfig {
    /**
     * The Amazon Resource Name (ARN) of the list of the Vector Enrichment jobs.
     */
    Arn: VectorEnrichmentJobArn;
    /**
     * The creation time.
     */
    CreationTime: Timestamp;
    /**
     * The duration of the session, in seconds.
     */
    DurationInSeconds: Integer;
    /**
     * The names of the Vector Enrichment jobs in the list.
     */
    Name: String;
    /**
     * The status of the Vector Enrichment jobs list. 
     */
    Status: VectorEnrichmentJobStatus;
    /**
     * Each tag consists of a key and a value.
     */
    Tags?: Tags;
    /**
     * The type of the list of Vector Enrichment jobs.
     */
    Type: VectorEnrichmentJobType;
  }
  export type LogicalOperator = "AND"|string;
  export interface MapMatchingConfig {
    /**
     * 
     */
    IdAttributeName: String;
    /**
     * The name of the timestamp attribute.
     */
    TimestampAttributeName: String;
    /**
     * The name of the X-attribute
     */
    XAttributeName: String;
    /**
     * The name of the Y-attribute
     */
    YAttributeName: String;
  }
  export type MetadataProvider = "PLANET_ORDER"|string;
  export interface MultiPolygonGeometryInput {
    /**
     * The coordinates of the multipolygon geometry.
     */
    Coordinates: LinearRingsList;
  }
  export type NextToken = string;
  export interface Operation {
    /**
     * 
     */
    Equation: String;
    /**
     * The name of the operation.
     */
    Name: String;
    /**
     * The type of the operation.
     */
    OutputType?: OutputType;
  }
  export type OperationsListInput = Operation[];
  export interface OutputBand {
    /**
     * The name of the band.
     */
    BandName: String;
    /**
     * The datatype of the output band.
     */
    OutputDataType: OutputType;
  }
  export interface OutputConfigInput {
    /**
     * Path to Amazon S3 storage location for the output configuration file.
     */
    S3Data: ExportS3DataInput;
  }
  export interface OutputResolutionResamplingInput {
    /**
     * 
     */
    UserDefined: UserDefined;
  }
  export interface OutputResolutionStackInput {
    /**
     * 
     */
    Predefined?: PredefinedResolution;
    /**
     * 
     */
    UserDefined?: UserDefined;
  }
  export type OutputType = "INT32"|"FLOAT32"|"INT16"|"FLOAT64"|"UINT16"|string;
  export interface PlatformInput {
    /**
     * 
     */
    ComparisonOperator?: ComparisonOperator;
    /**
     * The value of the platform.
     */
    Value: String;
  }
  export interface PolygonGeometryInput {
    /**
     * 
     */
    Coordinates: LinearRings;
  }
  export type Position = Double[];
  export type PredefinedResolution = "HIGHEST"|"LOWEST"|"AVERAGE"|string;
  export interface Properties {
    /**
     * 
     */
    EoCloudCover?: Float;
    /**
     * 
     */
    LandsatCloudCoverLand?: Float;
    /**
     * 
     */
    Platform?: String;
    /**
     * 
     */
    ViewOffNadir?: Float;
    /**
     * 
     */
    ViewSunAzimuth?: Float;
    /**
     * 
     */
    ViewSunElevation?: Float;
  }
  export interface Property {
    /**
     * 
     */
    EoCloudCover?: EoCloudCoverInput;
    /**
     * 
     */
    LandsatCloudCoverLand?: LandsatCloudCoverLandInput;
    /**
     * 
     */
    Platform?: PlatformInput;
    /**
     * 
     */
    ViewOffNadir?: ViewOffNadirInput;
    /**
     * 
     */
    ViewSunAzimuth?: ViewSunAzimuthInput;
    /**
     * 
     */
    ViewSunElevation?: ViewSunElevationInput;
  }
  export interface PropertyFilter {
    /**
     * 
     */
    Property: Property;
  }
  export interface PropertyFilters {
    /**
     * 
     */
    LogicalOperator?: LogicalOperator;
    /**
     * 
     */
    Properties?: PropertyFiltersList;
  }
  export type PropertyFiltersList = PropertyFilter[];
  export interface RasterDataCollectionMetadata {
    /**
     * The Amazon Resource Name (ARN) of the raster data collection.
     */
    Arn: DataCollectionArn;
    /**
     * A description of the raster data collection.
     */
    Description: String;
    /**
     * The description URL of the raster data collection.
     */
    DescriptionPageUrl?: String;
    /**
     * The name of the raster data collection.
     */
    Name: String;
    /**
     * 
     */
    SupportedFilters: FilterList;
    /**
     * Each tag consists of a key and a value.
     */
    Tags?: Tags;
    /**
     * The type of raster data collection.
     */
    Type: DataCollectionType;
  }
  export interface RasterDataCollectionQueryInput {
    /**
     * The area of interest being queried for the raster data collection.
     */
    AreaOfInterest?: AreaOfInterest;
    /**
     * 
     */
    PropertyFilters?: PropertyFilters;
    /**
     * The Amazon Resource Name (ARN) of the raster data collection.
     */
    RasterDataCollectionArn: String;
    /**
     * 
     */
    TimeRangeFilter: TimeRangeFilterInput;
  }
  export interface RasterDataCollectionQueryOutput {
    /**
     * 
     */
    AreaOfInterest?: AreaOfInterest;
    /**
     * 
     */
    PropertyFilters?: PropertyFilters;
    /**
     * 
     */
    RasterDataCollectionArn: String;
    /**
     * The name of the raster data collection.
     */
    RasterDataCollectionName: String;
    /**
     * 
     */
    TimeRangeFilter: TimeRangeFilterInput;
  }
  export interface RasterDataCollectionQueryWithBandFilterInput {
    /**
     * 
     */
    AreaOfInterest?: AreaOfInterest;
    /**
     * 
     */
    BandFilter?: StringListInput;
    /**
     * 
     */
    PropertyFilters?: PropertyFilters;
    /**
     * 
     */
    TimeRangeFilter: TimeRangeFilterInput;
  }
  export interface ResamplingConfigInput {
    /**
     * The name of the algorithm used for resampling.
     */
    AlgorithmName?: AlgorithmNameResampling;
    /**
     * 
     */
    OutputResolution: OutputResolutionResamplingInput;
    /**
     * 
     */
    TargetBands?: StringListInput;
  }
  export interface ReverseGeocodingConfig {
    /**
     * 
     */
    XAttributeName: String;
    /**
     * 
     */
    YAttributeName: String;
  }
  export interface S3DataInput {
    /**
     * The Amazon Key Management Service (KMS) key ID for server-side encryption.
     */
    KmsKeyId?: String;
    /**
     * 
     */
    MetadataProvider: MetadataProvider;
    /**
     * The URL to the Amazon S3 input.
     */
    S3Uri: String;
  }
  export interface SearchRasterDataCollectionInput {
    /**
     * The Amazon Resource Name (ARN) of the raster data collection.
     */
    Arn: DataCollectionArn;
    /**
     * If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results.
     */
    NextToken?: NextToken;
    /**
     * 
     */
    RasterDataCollectionQuery: RasterDataCollectionQueryWithBandFilterInput;
  }
  export interface SearchRasterDataCollectionOutput {
    /**
     * 
     */
    ApproximateResultCount: Integer;
    /**
     * 
     */
    Items?: ItemSourceList;
    /**
     * If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results.
     */
    NextToken?: NextToken;
  }
  export type SortOrder = "ASCENDING"|"DESCENDING"|string;
  export interface StackConfigInput {
    /**
     * 
     */
    OutputResolution?: OutputResolutionStackInput;
    /**
     * 
     */
    TargetBands?: StringListInput;
  }
  export interface StartEarthObservationJobInput {
    /**
     * A unique token that guarantees that the call to this API is idempotent.
     */
    ClientToken?: String;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that you specified for the job.
     */
    ExecutionRoleArn?: String;
    /**
     * Input configuration information for the Earth Observation job.
     */
    InputConfig: InputConfigInput;
    /**
     * An object containing information about the job configuration.
     */
    JobConfig: JobConfigInput;
    /**
     * The Amazon Key Management Service (KMS) key ID for server-side encryption.
     */
    KmsKeyId?: String;
    /**
     * The name of the Earth Observation job.
     */
    Name: String;
    /**
     * Each tag consists of a key and a value.
     */
    Tags?: Tags;
  }
  export interface StartEarthObservationJobOutput {
    /**
     * The Amazon Resource Name (ARN) of the Earth Observation job.
     */
    Arn: String;
    /**
     * The creation time.
     */
    CreationTime: Timestamp;
    /**
     * The duration of the session, in seconds.
     */
    DurationInSeconds: Integer;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that you specified for the job.
     */
    ExecutionRoleArn?: String;
    /**
     * Input configuration information for the Earth Observation job.
     */
    InputConfig?: InputConfigOutput;
    /**
     * An object containing information about the job configuration.
     */
    JobConfig: JobConfigInput;
    /**
     * The Amazon Key Management Service (KMS) key ID for server-side encryption.
     */
    KmsKeyId?: String;
    /**
     * The name of the Earth Observation job.
     */
    Name: String;
    /**
     * The status of the Earth Observation job.
     */
    Status: EarthObservationJobStatus;
    /**
     * Each tag consists of a key and a value.
     */
    Tags?: Tags;
  }
  export interface StartVectorEnrichmentJobInput {
    /**
     * A unique token that guarantees that the call to this API is idempotent.
     */
    ClientToken?: String;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that you specified for the job.
     */
    ExecutionRoleArn: String;
    /**
     * Input configuration information for the Vector Enrichment job.
     */
    InputConfig: VectorEnrichmentJobInputConfig;
    /**
     * An object containing information about the job configuration.
     */
    JobConfig: VectorEnrichmentJobConfig;
    /**
     * The Amazon Key Management Service (KMS) key ID for server-side encryption.
     */
    KmsKeyId?: String;
    /**
     * The name of the Vector Enrichment job.
     */
    Name: String;
    /**
     * Each tag consists of a key and a value.
     */
    Tags?: Tags;
  }
  export interface StartVectorEnrichmentJobOutput {
    /**
     * The Amazon Resource Name (ARN) of the Vector Enrichment job.
     */
    Arn: VectorEnrichmentJobArn;
    /**
     * The creation time.
     */
    CreationTime: Timestamp;
    /**
     * The duration of the Vector Enrichment job, in seconds.
     */
    DurationInSeconds: Integer;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that you specified for the job.
     */
    ExecutionRoleArn: String;
    /**
     * Input configuration information for starting the Vector Enrichment job.
     */
    InputConfig: VectorEnrichmentJobInputConfig;
    /**
     * An object containing information about the job configuration.
     */
    JobConfig: VectorEnrichmentJobConfig;
    /**
     * The Amazon Key Management Service (KMS) key ID for server-side encryption.
     */
    KmsKeyId?: String;
    /**
     * The name of the Vector Enrichment job.
     */
    Name: String;
    /**
     * The status of the Vector Enrichment job being started.
     */
    Status: VectorEnrichmentJobStatus;
    /**
     * Each tag consists of a key and a value.
     */
    Tags?: Tags;
    /**
     * The type of the Vector Enrichment job.
     */
    Type: VectorEnrichmentJobType;
  }
  export interface StopEarthObservationJobInput {
    /**
     * The Amazon Resource Name (ARN) of the Earth Observation job being stopped.
     */
    Arn: EarthObservationJobArn;
  }
  export interface StopEarthObservationJobOutput {
  }
  export interface StopVectorEnrichmentJobInput {
    /**
     * The Amazon Resource Name (ARN) of the Vector Enrichment job.
     */
    Arn: VectorEnrichmentJobArn;
  }
  export interface StopVectorEnrichmentJobOutput {
  }
  export type String = string;
  export type StringListInput = String[];
  export type TagKeyList = String[];
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource you want to tag.
     */
    ResourceArn: Arn;
    /**
     * Each tag consists of a key and a value.
     */
    Tags: Tags;
  }
  export interface TagResourceResponse {
  }
  export type Tags = {[key: string]: String};
  export type TargetOptions = "INPUT"|"OUTPUT"|string;
  export type TemporalStatistics = "MEAN"|"MEDIAN"|"STANDARD_DEVIATION"|string;
  export interface TemporalStatisticsConfigInput {
    /**
     * 
     */
    GroupBy?: GroupBy;
    /**
     * 
     */
    Statistics: TemporalStatisticsListInput;
    /**
     * 
     */
    TargetBands?: StringListInput;
  }
  export type TemporalStatisticsListInput = TemporalStatistics[];
  export interface TimeRangeFilterInput {
    /**
     * The end time for the time-range filter.
     */
    EndTime: Timestamp;
    /**
     * The start time for the time-range filter.
     */
    StartTime: Timestamp;
  }
  export type Timestamp = Date;
  export type Unit = "METERS"|string;
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource you want to untag.
     */
    ResourceArn: Arn;
    /**
     * Keys of the tags you want to remove.
     */
    TagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UserDefined {
    /**
     * 
     */
    Unit: Unit;
    /**
     * 
     */
    Value: Float;
  }
  export type VectorEnrichmentJobArn = string;
  export interface VectorEnrichmentJobConfig {
    /**
     * 
     */
    MapMatchingConfig?: MapMatchingConfig;
    /**
     * 
     */
    ReverseGeocodingConfig?: ReverseGeocodingConfig;
  }
  export interface VectorEnrichmentJobDataSourceConfigInput {
    /**
     * 
     */
    S3Data?: VectorEnrichmentJobS3Data;
  }
  export type VectorEnrichmentJobDocumentType = "CSV"|string;
  export interface VectorEnrichmentJobErrorDetails {
    /**
     * A message that you define and then is processed and rendered by the Vector Enrichment job when the error occurs.
     */
    ErrorMessage?: String;
    /**
     * The type of error generated during the Vector Enrichment job.
     */
    ErrorType?: VectorEnrichmentJobErrorType;
  }
  export type VectorEnrichmentJobErrorType = "CLIENT_ERROR"|"SERVER_ERROR"|string;
  export interface VectorEnrichmentJobExportErrorDetails {
    /**
     * The message providing details about the errors generated during the Vector Enrichment job.
     */
    Message?: String;
    /**
     * 
     */
    Type?: VectorEnrichmentJobExportErrorType;
  }
  export type VectorEnrichmentJobExportErrorType = "CLIENT_ERROR"|"SERVER_ERROR"|string;
  export type VectorEnrichmentJobExportStatus = "IN_PROGRESS"|"SUCCEEDED"|"FAILED"|string;
  export interface VectorEnrichmentJobInputConfig {
    /**
     * 
     */
    DataSourceConfig: VectorEnrichmentJobDataSourceConfigInput;
    /**
     * 
     */
    DocumentType: VectorEnrichmentJobDocumentType;
  }
  export type VectorEnrichmentJobList = ListVectorEnrichmentJobOutputConfig[];
  export interface VectorEnrichmentJobS3Data {
    /**
     * The Amazon Key Management Service (KMS) key ID for server-side encryption.
     */
    KmsKeyId?: String;
    /**
     * The URL to the Amazon S3 data for the Vector Enrichment job.
     */
    S3Uri: String;
  }
  export type VectorEnrichmentJobStatus = "INITIALIZING"|"IN_PROGRESS"|"STOPPING"|"STOPPED"|"COMPLETED"|"FAILED"|"DELETING"|"DELETED"|string;
  export type VectorEnrichmentJobType = "REVERSE_GEOCODING"|"MAP_MATCHING"|string;
  export interface ViewOffNadirInput {
    /**
     * 
     */
    LowerBound: Float;
    /**
     * 
     */
    UpperBound: Float;
  }
  export interface ViewSunAzimuthInput {
    /**
     * 
     */
    LowerBound: Float;
    /**
     * 
     */
    UpperBound: Float;
  }
  export interface ViewSunElevationInput {
    /**
     * The lower bound to view the sun elevation.
     */
    LowerBound: Float;
    /**
     * The upper bound to view the sun elevation.
     */
    UpperBound: Float;
  }
  export type ZonalStatistics = "MEAN"|"MEDIAN"|"STANDARD_DEVIATION"|"MAX"|"MIN"|"SUM"|string;
  export interface ZonalStatisticsConfigInput {
    /**
     * 
     */
    Statistics: ZonalStatisticsListInput;
    /**
     * 
     */
    TargetBands?: StringListInput;
    /**
     * 
     */
    ZoneS3Path: String;
  }
  export type ZonalStatisticsListInput = ZonalStatistics[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2020-05-27"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the SageMakerGeospatial client.
   */
  export import Types = SageMakerGeospatial;
}
export = SageMakerGeospatial;
