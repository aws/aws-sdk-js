import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
import {Readable} from 'stream';
interface Blob {}
declare class EBS extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: EBS.Types.ClientConfiguration)
  config: Config & EBS.Types.ClientConfiguration;
  /**
   * Returns the data in a block in an Amazon Elastic Block Store snapshot.
   */
  getSnapshotBlock(params: EBS.Types.GetSnapshotBlockRequest, callback?: (err: AWSError, data: EBS.Types.GetSnapshotBlockResponse) => void): Request<EBS.Types.GetSnapshotBlockResponse, AWSError>;
  /**
   * Returns the data in a block in an Amazon Elastic Block Store snapshot.
   */
  getSnapshotBlock(callback?: (err: AWSError, data: EBS.Types.GetSnapshotBlockResponse) => void): Request<EBS.Types.GetSnapshotBlockResponse, AWSError>;
  /**
   * Returns the block indexes and block tokens for blocks that are different between two Amazon Elastic Block Store snapshots of the same volume/snapshot lineage.
   */
  listChangedBlocks(params: EBS.Types.ListChangedBlocksRequest, callback?: (err: AWSError, data: EBS.Types.ListChangedBlocksResponse) => void): Request<EBS.Types.ListChangedBlocksResponse, AWSError>;
  /**
   * Returns the block indexes and block tokens for blocks that are different between two Amazon Elastic Block Store snapshots of the same volume/snapshot lineage.
   */
  listChangedBlocks(callback?: (err: AWSError, data: EBS.Types.ListChangedBlocksResponse) => void): Request<EBS.Types.ListChangedBlocksResponse, AWSError>;
  /**
   * Returns the block indexes and block tokens for blocks in an Amazon Elastic Block Store snapshot.
   */
  listSnapshotBlocks(params: EBS.Types.ListSnapshotBlocksRequest, callback?: (err: AWSError, data: EBS.Types.ListSnapshotBlocksResponse) => void): Request<EBS.Types.ListSnapshotBlocksResponse, AWSError>;
  /**
   * Returns the block indexes and block tokens for blocks in an Amazon Elastic Block Store snapshot.
   */
  listSnapshotBlocks(callback?: (err: AWSError, data: EBS.Types.ListSnapshotBlocksResponse) => void): Request<EBS.Types.ListSnapshotBlocksResponse, AWSError>;
}
declare namespace EBS {
  export interface Block {
    /**
     * The block index.
     */
    BlockIndex?: BlockIndex;
    /**
     * The block token for the block index.
     */
    BlockToken?: BlockToken;
  }
  export type BlockData = Buffer|Uint8Array|Blob|string|Readable;
  export type BlockIndex = number;
  export type BlockSize = number;
  export type BlockToken = string;
  export type Blocks = Block[];
  export interface ChangedBlock {
    /**
     * The block index.
     */
    BlockIndex?: BlockIndex;
    /**
     * The block token for the block index of the first snapshot ID specified in the list changed blocks operation. This value is absent if the first snapshot does not have the changed block that is on the second snapshot.
     */
    FirstBlockToken?: BlockToken;
    /**
     * The block token for the block index of the second snapshot ID specified in the list changed blocks operation.
     */
    SecondBlockToken?: BlockToken;
  }
  export type ChangedBlocks = ChangedBlock[];
  export type Checksum = string;
  export type ChecksumAlgorithm = "SHA256"|string;
  export type DataLength = number;
  export interface GetSnapshotBlockRequest {
    /**
     * The ID of the snapshot containing the block from which to get data.
     */
    SnapshotId: SnapshotId;
    /**
     * The block index of the block from which to get data. Obtain the block index by running the list changed blocks or list snapshot blocks operations.
     */
    BlockIndex: BlockIndex;
    /**
     * The block token of the block from which to get data. Obtain the block token by running the list changed blocks or list snapshot blocks operations.
     */
    BlockToken: BlockToken;
  }
  export interface GetSnapshotBlockResponse {
    /**
     * The size of the data in the block.
     */
    DataLength?: DataLength;
    /**
     * The data content of the block.
     */
    BlockData?: BlockData;
    /**
     * The checksum generated for the block.
     */
    Checksum?: Checksum;
    /**
     * The algorithm used to generate the checksum for the block, such as SHA256.
     */
    ChecksumAlgorithm?: ChecksumAlgorithm;
  }
  export interface ListChangedBlocksRequest {
    /**
     * The ID of the first snapshot to use for the comparison.
     */
    FirstSnapshotId?: SnapshotId;
    /**
     * The ID of the second snapshot to use for the comparison.
     */
    SecondSnapshotId: SnapshotId;
    /**
     * The token to request the next page of results.
     */
    NextToken?: PageToken;
    /**
     * The number of results to return.
     */
    MaxResults?: MaxResults;
    /**
     * The block index from which the comparison should start. The list in the response will start from this block index or the next valid block index in the snapshots.
     */
    StartingBlockIndex?: BlockIndex;
  }
  export interface ListChangedBlocksResponse {
    /**
     * An array of objects containing information about the changed blocks.
     */
    ChangedBlocks?: ChangedBlocks;
    /**
     * The time when the block token expires.
     */
    ExpiryTime?: TimeStamp;
    /**
     * The size of the volume in GB.
     */
    VolumeSize?: VolumeSize;
    /**
     * The size of the block.
     */
    BlockSize?: BlockSize;
    /**
     * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
     */
    NextToken?: PageToken;
  }
  export interface ListSnapshotBlocksRequest {
    /**
     * The ID of the snapshot from which to get block indexes and block tokens.
     */
    SnapshotId: SnapshotId;
    /**
     * The token to request the next page of results.
     */
    NextToken?: PageToken;
    /**
     * The number of results to return.
     */
    MaxResults?: MaxResults;
    /**
     * The block index from which the list should start. The list in the response will start from this block index or the next valid block index in the snapshot.
     */
    StartingBlockIndex?: BlockIndex;
  }
  export interface ListSnapshotBlocksResponse {
    /**
     * An array of objects containing information about the blocks.
     */
    Blocks?: Blocks;
    /**
     * The time when the block token expires.
     */
    ExpiryTime?: TimeStamp;
    /**
     * The size of the volume in GB.
     */
    VolumeSize?: VolumeSize;
    /**
     * The size of the block.
     */
    BlockSize?: BlockSize;
    /**
     * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
     */
    NextToken?: PageToken;
  }
  export type MaxResults = number;
  export type PageToken = string;
  export type SnapshotId = string;
  export type TimeStamp = Date;
  export type VolumeSize = number;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2019-11-02"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the EBS client.
   */
  export import Types = EBS;
}
export = EBS;
