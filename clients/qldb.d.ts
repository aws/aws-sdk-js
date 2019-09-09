import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class QLDB extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: QLDB.Types.ClientConfiguration)
  config: Config & QLDB.Types.ClientConfiguration;
  /**
   * Creates a new ledger in your AWS account.
   */
  createLedger(params: QLDB.Types.CreateLedgerRequest, callback?: (err: AWSError, data: QLDB.Types.CreateLedgerResponse) => void): Request<QLDB.Types.CreateLedgerResponse, AWSError>;
  /**
   * Creates a new ledger in your AWS account.
   */
  createLedger(callback?: (err: AWSError, data: QLDB.Types.CreateLedgerResponse) => void): Request<QLDB.Types.CreateLedgerResponse, AWSError>;
  /**
   * Deletes a ledger and all of its contents. This action is irreversible. If deletion protection is enabled, you must first disable it before you can delete the ledger using the QLDB API or the AWS Command Line Interface (AWS CLI). You can disable it by calling the UpdateLedger operation to set the flag to false. The QLDB console disables deletion protection for you when you use it to delete a ledger.
   */
  deleteLedger(params: QLDB.Types.DeleteLedgerRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a ledger and all of its contents. This action is irreversible. If deletion protection is enabled, you must first disable it before you can delete the ledger using the QLDB API or the AWS Command Line Interface (AWS CLI). You can disable it by calling the UpdateLedger operation to set the flag to false. The QLDB console disables deletion protection for you when you use it to delete a ledger.
   */
  deleteLedger(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Returns information about a journal export job, including the ledger name, export ID, when it was created, current status, and its start and end time export parameters. If the export job with the given ExportId doesn't exist, then throws ResourceNotFoundException. If the ledger with the given Name doesn't exist, then throws ResourceNotFoundException.
   */
  describeJournalS3Export(params: QLDB.Types.DescribeJournalS3ExportRequest, callback?: (err: AWSError, data: QLDB.Types.DescribeJournalS3ExportResponse) => void): Request<QLDB.Types.DescribeJournalS3ExportResponse, AWSError>;
  /**
   * Returns information about a journal export job, including the ledger name, export ID, when it was created, current status, and its start and end time export parameters. If the export job with the given ExportId doesn't exist, then throws ResourceNotFoundException. If the ledger with the given Name doesn't exist, then throws ResourceNotFoundException.
   */
  describeJournalS3Export(callback?: (err: AWSError, data: QLDB.Types.DescribeJournalS3ExportResponse) => void): Request<QLDB.Types.DescribeJournalS3ExportResponse, AWSError>;
  /**
   * Returns information about a ledger, including its state and when it was created.
   */
  describeLedger(params: QLDB.Types.DescribeLedgerRequest, callback?: (err: AWSError, data: QLDB.Types.DescribeLedgerResponse) => void): Request<QLDB.Types.DescribeLedgerResponse, AWSError>;
  /**
   * Returns information about a ledger, including its state and when it was created.
   */
  describeLedger(callback?: (err: AWSError, data: QLDB.Types.DescribeLedgerResponse) => void): Request<QLDB.Types.DescribeLedgerResponse, AWSError>;
  /**
   * Exports journal contents within a date and time range from a ledger into a specified Amazon Simple Storage Service (Amazon S3) bucket. The data is written as files in Amazon Ion format. If the ledger with the given Name doesn't exist, then throws ResourceNotFoundException. If the ledger with the given Name is in CREATING status, then throws ResourcePreconditionNotMetException. You can initiate up to two concurrent journal export requests for each ledger. Beyond this limit, journal export requests throw LimitExceededException.
   */
  exportJournalToS3(params: QLDB.Types.ExportJournalToS3Request, callback?: (err: AWSError, data: QLDB.Types.ExportJournalToS3Response) => void): Request<QLDB.Types.ExportJournalToS3Response, AWSError>;
  /**
   * Exports journal contents within a date and time range from a ledger into a specified Amazon Simple Storage Service (Amazon S3) bucket. The data is written as files in Amazon Ion format. If the ledger with the given Name doesn't exist, then throws ResourceNotFoundException. If the ledger with the given Name is in CREATING status, then throws ResourcePreconditionNotMetException. You can initiate up to two concurrent journal export requests for each ledger. Beyond this limit, journal export requests throw LimitExceededException.
   */
  exportJournalToS3(callback?: (err: AWSError, data: QLDB.Types.ExportJournalToS3Response) => void): Request<QLDB.Types.ExportJournalToS3Response, AWSError>;
  /**
   * Returns a journal block object at a specified address in a ledger. Also returns a proof of the specified block for verification if DigestTipAddress is provided. If the specified ledger doesn't exist or is in DELETING status, then throws ResourceNotFoundException. If the specified ledger is in CREATING status, then throws ResourcePreconditionNotMetException. If no block exists with the specified address, then throws InvalidParameterException.
   */
  getBlock(params: QLDB.Types.GetBlockRequest, callback?: (err: AWSError, data: QLDB.Types.GetBlockResponse) => void): Request<QLDB.Types.GetBlockResponse, AWSError>;
  /**
   * Returns a journal block object at a specified address in a ledger. Also returns a proof of the specified block for verification if DigestTipAddress is provided. If the specified ledger doesn't exist or is in DELETING status, then throws ResourceNotFoundException. If the specified ledger is in CREATING status, then throws ResourcePreconditionNotMetException. If no block exists with the specified address, then throws InvalidParameterException.
   */
  getBlock(callback?: (err: AWSError, data: QLDB.Types.GetBlockResponse) => void): Request<QLDB.Types.GetBlockResponse, AWSError>;
  /**
   * Returns the digest of a ledger at the latest committed block in the journal. The response includes a 256-bit hash value and a block address.
   */
  getDigest(params: QLDB.Types.GetDigestRequest, callback?: (err: AWSError, data: QLDB.Types.GetDigestResponse) => void): Request<QLDB.Types.GetDigestResponse, AWSError>;
  /**
   * Returns the digest of a ledger at the latest committed block in the journal. The response includes a 256-bit hash value and a block address.
   */
  getDigest(callback?: (err: AWSError, data: QLDB.Types.GetDigestResponse) => void): Request<QLDB.Types.GetDigestResponse, AWSError>;
  /**
   * Returns a revision data object for a specified document ID and block address. Also returns a proof of the specified revision for verification if DigestTipAddress is provided.
   */
  getRevision(params: QLDB.Types.GetRevisionRequest, callback?: (err: AWSError, data: QLDB.Types.GetRevisionResponse) => void): Request<QLDB.Types.GetRevisionResponse, AWSError>;
  /**
   * Returns a revision data object for a specified document ID and block address. Also returns a proof of the specified revision for verification if DigestTipAddress is provided.
   */
  getRevision(callback?: (err: AWSError, data: QLDB.Types.GetRevisionResponse) => void): Request<QLDB.Types.GetRevisionResponse, AWSError>;
  /**
   * Returns an array of journal export job descriptions for all ledgers that are associated with the current AWS account and Region. This action returns a maximum of MaxResults items, and is paginated so that you can retrieve all the items by calling ListJournalS3Exports multiple times.
   */
  listJournalS3Exports(params: QLDB.Types.ListJournalS3ExportsRequest, callback?: (err: AWSError, data: QLDB.Types.ListJournalS3ExportsResponse) => void): Request<QLDB.Types.ListJournalS3ExportsResponse, AWSError>;
  /**
   * Returns an array of journal export job descriptions for all ledgers that are associated with the current AWS account and Region. This action returns a maximum of MaxResults items, and is paginated so that you can retrieve all the items by calling ListJournalS3Exports multiple times.
   */
  listJournalS3Exports(callback?: (err: AWSError, data: QLDB.Types.ListJournalS3ExportsResponse) => void): Request<QLDB.Types.ListJournalS3ExportsResponse, AWSError>;
  /**
   * Returns an array of journal export job descriptions for a specified ledger. This action returns a maximum of MaxResults items, and is paginated so that you can retrieve all the items by calling ListJournalS3ExportsForLedger multiple times.
   */
  listJournalS3ExportsForLedger(params: QLDB.Types.ListJournalS3ExportsForLedgerRequest, callback?: (err: AWSError, data: QLDB.Types.ListJournalS3ExportsForLedgerResponse) => void): Request<QLDB.Types.ListJournalS3ExportsForLedgerResponse, AWSError>;
  /**
   * Returns an array of journal export job descriptions for a specified ledger. This action returns a maximum of MaxResults items, and is paginated so that you can retrieve all the items by calling ListJournalS3ExportsForLedger multiple times.
   */
  listJournalS3ExportsForLedger(callback?: (err: AWSError, data: QLDB.Types.ListJournalS3ExportsForLedgerResponse) => void): Request<QLDB.Types.ListJournalS3ExportsForLedgerResponse, AWSError>;
  /**
   * Returns an array of ledger summaries that are associated with the current AWS account and Region. This action returns a maximum of 100 items and is paginated so that you can retrieve all the items by calling ListLedgers multiple times.
   */
  listLedgers(params: QLDB.Types.ListLedgersRequest, callback?: (err: AWSError, data: QLDB.Types.ListLedgersResponse) => void): Request<QLDB.Types.ListLedgersResponse, AWSError>;
  /**
   * Returns an array of ledger summaries that are associated with the current AWS account and Region. This action returns a maximum of 100 items and is paginated so that you can retrieve all the items by calling ListLedgers multiple times.
   */
  listLedgers(callback?: (err: AWSError, data: QLDB.Types.ListLedgersResponse) => void): Request<QLDB.Types.ListLedgersResponse, AWSError>;
  /**
   * Returns all tags for a specified Amazon QLDB resource.
   */
  listTagsForResource(params: QLDB.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: QLDB.Types.ListTagsForResourceResponse) => void): Request<QLDB.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Returns all tags for a specified Amazon QLDB resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: QLDB.Types.ListTagsForResourceResponse) => void): Request<QLDB.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Adds one or more tags to a specified Amazon QLDB resource. A resource can have up to 50 tags. If you try to create more than 50 tags for a resource, your request fails and returns an error.
   */
  tagResource(params: QLDB.Types.TagResourceRequest, callback?: (err: AWSError, data: QLDB.Types.TagResourceResponse) => void): Request<QLDB.Types.TagResourceResponse, AWSError>;
  /**
   * Adds one or more tags to a specified Amazon QLDB resource. A resource can have up to 50 tags. If you try to create more than 50 tags for a resource, your request fails and returns an error.
   */
  tagResource(callback?: (err: AWSError, data: QLDB.Types.TagResourceResponse) => void): Request<QLDB.Types.TagResourceResponse, AWSError>;
  /**
   * Removes one or more tags from a specified Amazon QLDB resource. You can specify up to 50 tag keys to remove.
   */
  untagResource(params: QLDB.Types.UntagResourceRequest, callback?: (err: AWSError, data: QLDB.Types.UntagResourceResponse) => void): Request<QLDB.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes one or more tags from a specified Amazon QLDB resource. You can specify up to 50 tag keys to remove.
   */
  untagResource(callback?: (err: AWSError, data: QLDB.Types.UntagResourceResponse) => void): Request<QLDB.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates properties on a ledger.
   */
  updateLedger(params: QLDB.Types.UpdateLedgerRequest, callback?: (err: AWSError, data: QLDB.Types.UpdateLedgerResponse) => void): Request<QLDB.Types.UpdateLedgerResponse, AWSError>;
  /**
   * Updates properties on a ledger.
   */
  updateLedger(callback?: (err: AWSError, data: QLDB.Types.UpdateLedgerResponse) => void): Request<QLDB.Types.UpdateLedgerResponse, AWSError>;
}
declare namespace QLDB {
  export type Arn = string;
  export interface CreateLedgerRequest {
    /**
     * The name of the ledger that you want to create. The name must be unique among all of your ledgers in the current AWS Region.
     */
    Name: LedgerName;
    /**
     * The key-value pairs to add as tags to the ledger that you want to create. Tag keys are case sensitive. Tag values are case sensitive and can be null.
     */
    Tags?: Tags;
    /**
     * The permissions mode to assign to the ledger that you want to create.
     */
    PermissionsMode: PermissionsMode;
    /**
     * The flag that prevents a ledger from being deleted by any user. If not provided on ledger creation, this feature is enabled (true) by default. If deletion protection is enabled, you must first disable it before you can delete the ledger using the QLDB API or the AWS Command Line Interface (AWS CLI). You can disable it by calling the UpdateLedger operation to set the flag to false. The QLDB console disables deletion protection for you when you use it to delete a ledger.
     */
    DeletionProtection?: DeletionProtection;
  }
  export interface CreateLedgerResponse {
    /**
     * The name of the ledger.
     */
    Name?: LedgerName;
    /**
     * The Amazon Resource Name (ARN) for the ledger.
     */
    Arn?: Arn;
    /**
     * The current status of the ledger.
     */
    State?: LedgerState;
    /**
     * The date and time, in epoch time format, when the ledger was created. (Epoch time format is the number of seconds elapsed since 12:00:00 AM January 1, 1970 UTC.)
     */
    CreationDateTime?: Timestamp;
    /**
     * The flag that prevents a ledger from being deleted by any user. If not provided on ledger creation, this feature is enabled (true) by default. If deletion protection is enabled, you must first disable it before you can delete the ledger using the QLDB API or the AWS Command Line Interface (AWS CLI). You can disable it by calling the UpdateLedger operation to set the flag to false. The QLDB console disables deletion protection for you when you use it to delete a ledger.
     */
    DeletionProtection?: DeletionProtection;
  }
  export interface DeleteLedgerRequest {
    /**
     * The name of the ledger that you want to delete.
     */
    Name: LedgerName;
  }
  export type DeletionProtection = boolean;
  export interface DescribeJournalS3ExportRequest {
    /**
     * The name of the ledger.
     */
    Name: LedgerName;
    /**
     * The unique ID of the journal export job that you want to describe.
     */
    ExportId: UniqueId;
  }
  export interface DescribeJournalS3ExportResponse {
    /**
     * Information about the journal export job returned by a DescribeJournalS3Export request.
     */
    ExportDescription: JournalS3ExportDescription;
  }
  export interface DescribeLedgerRequest {
    /**
     * The name of the ledger that you want to describe.
     */
    Name: LedgerName;
  }
  export interface DescribeLedgerResponse {
    /**
     * The name of the ledger.
     */
    Name?: LedgerName;
    /**
     * The Amazon Resource Name (ARN) for the ledger.
     */
    Arn?: Arn;
    /**
     * The current status of the ledger.
     */
    State?: LedgerState;
    /**
     * The date and time, in epoch time format, when the ledger was created. (Epoch time format is the number of seconds elapsed since 12:00:00 AM January 1, 1970 UTC.)
     */
    CreationDateTime?: Timestamp;
    /**
     * The flag that prevents a ledger from being deleted by any user. If not provided on ledger creation, this feature is enabled (true) by default. If deletion protection is enabled, you must first disable it before you can delete the ledger using the QLDB API or the AWS Command Line Interface (AWS CLI). You can disable it by calling the UpdateLedger operation to set the flag to false. The QLDB console disables deletion protection for you when you use it to delete a ledger.
     */
    DeletionProtection?: DeletionProtection;
  }
  export type Digest = Buffer|Uint8Array|Blob|string;
  export interface ExportJournalToS3Request {
    /**
     * The name of the ledger.
     */
    Name: LedgerName;
    /**
     * The inclusive start date and time for the range of journal contents that you want to export. The InclusiveStartTime must be in ISO 8601 date and time format and in Universal Coordinated Time (UTC). For example: 2019-06-13T21:36:34Z  The InclusiveStartTime must be before ExclusiveEndTime. If you provide an InclusiveStartTime that is before the ledger's CreationDateTime, Amazon QLDB defaults it to the ledger's CreationDateTime.
     */
    InclusiveStartTime: Timestamp;
    /**
     * The exclusive end date and time for the range of journal contents that you want to export. The ExclusiveEndTime must be in ISO 8601 date and time format and in Universal Coordinated Time (UTC). For example: 2019-06-13T21:36:34Z  The ExclusiveEndTime must be less than or equal to the current UTC date and time.
     */
    ExclusiveEndTime: Timestamp;
    /**
     * The configuration settings of the Amazon S3 bucket destination for your export request.
     */
    S3ExportConfiguration: S3ExportConfiguration;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that grants QLDB permissions for a journal export job to do the following:   Write objects into your Amazon Simple Storage Service (Amazon S3) bucket.   (Optional) Use your customer master key (CMK) in AWS Key Management Service (AWS KMS) for server-side encryption of your exported data.  
     */
    RoleArn: Arn;
  }
  export interface ExportJournalToS3Response {
    /**
     * The unique ID that QLDB assigns to each journal export job. To describe your export request and check the status of the job, you can use ExportId to call DescribeJournalS3Export.
     */
    ExportId: UniqueId;
  }
  export type ExportStatus = "IN_PROGRESS"|"COMPLETED"|"CANCELLED"|string;
  export interface GetBlockRequest {
    /**
     * The name of the ledger.
     */
    Name: LedgerName;
    /**
     * The location of the block that you want to request. An address is an Amazon Ion structure that has two fields: strandId and sequenceNo. For example: {strandId:"BlFTjlSXze9BIh1KOszcE3",sequenceNo:14} 
     */
    BlockAddress: ValueHolder;
    /**
     * The latest block location covered by the digest for which to request a proof. An address is an Amazon Ion structure that has two fields: strandId and sequenceNo. For example: {strandId:"BlFTjlSXze9BIh1KOszcE3",sequenceNo:49} 
     */
    DigestTipAddress?: ValueHolder;
  }
  export interface GetBlockResponse {
    /**
     * The block data object in Amazon Ion format.
     */
    Block: ValueHolder;
    /**
     * The proof object in Amazon Ion format returned by a GetBlock request. A proof contains the list of hash values required to recalculate the specified digest using a Merkle tree, starting with the specified block.
     */
    Proof?: ValueHolder;
  }
  export interface GetDigestRequest {
    /**
     * The name of the ledger.
     */
    Name: LedgerName;
  }
  export interface GetDigestResponse {
    /**
     * The 256-bit hash value representing the digest returned by a GetDigest request.
     */
    Digest: Digest;
    /**
     * The latest block location covered by the digest that you requested. An address is an Amazon Ion structure that has two fields: strandId and sequenceNo.
     */
    DigestTipAddress: ValueHolder;
  }
  export interface GetRevisionRequest {
    /**
     * The name of the ledger.
     */
    Name: LedgerName;
    /**
     * The block location of the document revision to be verified. An address is an Amazon Ion structure that has two fields: strandId and sequenceNo. For example: {strandId:"BlFTjlSXze9BIh1KOszcE3",sequenceNo:14} 
     */
    BlockAddress: ValueHolder;
    /**
     * The unique ID of the document to be verified.
     */
    DocumentId: UniqueId;
    /**
     * The latest block location covered by the digest for which to request a proof. An address is an Amazon Ion structure that has two fields: strandId and sequenceNo. For example: {strandId:"BlFTjlSXze9BIh1KOszcE3",sequenceNo:49} 
     */
    DigestTipAddress?: ValueHolder;
  }
  export interface GetRevisionResponse {
    /**
     * The proof object in Amazon Ion format returned by a GetRevision request. A proof contains the list of hash values that are required to recalculate the specified digest using a Merkle tree, starting with the specified document revision.
     */
    Proof?: ValueHolder;
    /**
     * The document revision data object in Amazon Ion format.
     */
    Revision: ValueHolder;
  }
  export type IonText = string;
  export interface JournalS3ExportDescription {
    /**
     * The name of the ledger.
     */
    LedgerName: LedgerName;
    /**
     * The unique ID of the journal export job.
     */
    ExportId: UniqueId;
    /**
     * The date and time, in epoch time format, when the export job was created. (Epoch time format is the number of seconds elapsed since 12:00:00 AM January 1, 1970 UTC.)
     */
    ExportCreationTime: Timestamp;
    /**
     * The current state of the journal export job.
     */
    Status: ExportStatus;
    /**
     * The inclusive start date and time for the range of journal contents that are specified in the original export request.
     */
    InclusiveStartTime: Timestamp;
    /**
     * The exclusive end date and time for the range of journal contents that are specified in the original export request.
     */
    ExclusiveEndTime: Timestamp;
    S3ExportConfiguration: S3ExportConfiguration;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that grants QLDB permissions for a journal export job to do the following:   Write objects into your Amazon Simple Storage Service (Amazon S3) bucket.   (Optional) Use your customer master key (CMK) in AWS Key Management Service (AWS KMS) for server-side encryption of your exported data.  
     */
    RoleArn: Arn;
  }
  export type JournalS3ExportList = JournalS3ExportDescription[];
  export type LedgerList = LedgerSummary[];
  export type LedgerName = string;
  export type LedgerState = "CREATING"|"ACTIVE"|"DELETING"|"DELETED"|string;
  export interface LedgerSummary {
    /**
     * The name of the ledger.
     */
    Name?: LedgerName;
    /**
     * The current status of the ledger.
     */
    State?: LedgerState;
    /**
     * The date and time, in epoch time format, when the ledger was created. (Epoch time format is the number of seconds elapsed since 12:00:00 AM January 1, 1970 UTC.)
     */
    CreationDateTime?: Timestamp;
  }
  export interface ListJournalS3ExportsForLedgerRequest {
    /**
     * The name of the ledger.
     */
    Name: LedgerName;
    /**
     * The maximum number of results to return in a single ListJournalS3ExportsForLedger request. (The actual number of results returned might be fewer.)
     */
    MaxResults?: MaxResults;
    /**
     * A pagination token, indicating that you want to retrieve the next page of results. If you received a value for NextToken in the response from a previous ListJournalS3ExportsForLedger call, then you should use that value as input here.
     */
    NextToken?: NextToken;
  }
  export interface ListJournalS3ExportsForLedgerResponse {
    /**
     * The array of journal export job descriptions that are associated with the specified ledger.
     */
    JournalS3Exports?: JournalS3ExportList;
    /**
     *   If NextToken is empty, then the last page of results has been processed and there are no more results to be retrieved.   If NextToken is not empty, then there are more results available. To retrieve the next page of results, use the value of NextToken in a subsequent ListJournalS3ExportsForLedger call.  
     */
    NextToken?: NextToken;
  }
  export interface ListJournalS3ExportsRequest {
    /**
     * The maximum number of results to return in a single ListJournalS3Exports request. (The actual number of results returned might be fewer.)
     */
    MaxResults?: MaxResults;
    /**
     * A pagination token, indicating that you want to retrieve the next page of results. If you received a value for NextToken in the response from a previous ListJournalS3Exports call, then you should use that value as input here.
     */
    NextToken?: NextToken;
  }
  export interface ListJournalS3ExportsResponse {
    /**
     * The array of journal export job descriptions for all ledgers that are associated with the current AWS account and Region.
     */
    JournalS3Exports?: JournalS3ExportList;
    /**
     *   If NextToken is empty, then the last page of results has been processed and there are no more results to be retrieved.   If NextToken is not empty, then there are more results available. To retrieve the next page of results, use the value of NextToken in a subsequent ListJournalS3Exports call.  
     */
    NextToken?: NextToken;
  }
  export interface ListLedgersRequest {
    /**
     * The maximum number of results to return in a single ListLedgers request. (The actual number of results returned might be fewer.)
     */
    MaxResults?: MaxResults;
    /**
     * A pagination token, indicating that you want to retrieve the next page of results. If you received a value for NextToken in the response from a previous ListLedgers call, then you should use that value as input here.
     */
    NextToken?: NextToken;
  }
  export interface ListLedgersResponse {
    /**
     * The array of ledger summaries that are associated with the current AWS account and Region.
     */
    Ledgers?: LedgerList;
    /**
     * A pagination token, indicating whether there are more results available:   If NextToken is empty, then the last page of results has been processed and there are no more results to be retrieved.   If NextToken is not empty, then there are more results available. To retrieve the next page of results, use the value of NextToken in a subsequent ListLedgers call.  
     */
    NextToken?: NextToken;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) for which you want to list the tags. For example:  arn:aws:qldb:us-east-1:123456789012:ledger/exampleLedger 
     */
    ResourceArn: Arn;
  }
  export interface ListTagsForResourceResponse {
    /**
     * The tags that are currently associated with the specified Amazon QLDB resource.
     */
    Tags?: Tags;
  }
  export type MaxResults = number;
  export type NextToken = string;
  export type PermissionsMode = "ALLOW_ALL"|string;
  export type S3Bucket = string;
  export interface S3EncryptionConfiguration {
    /**
     * The Amazon S3 object encryption type. To learn more about server-side encryption options in Amazon S3, see Protecting Data Using Server-Side Encryption in the Amazon S3 Developer Guide.
     */
    ObjectEncryptionType: S3ObjectEncryptionType;
    /**
     * The Amazon Resource Name (ARN) for a customer master key (CMK) in AWS Key Management Service (AWS KMS). You must provide a KmsKeyArn if you specify SSE_KMS as the ObjectEncryptionType.  KmsKeyArn is not required if you specify SSE_S3 as the ObjectEncryptionType.
     */
    KmsKeyArn?: Arn;
  }
  export interface S3ExportConfiguration {
    /**
     * The Amazon S3 bucket name in which a journal export job writes the journal contents. The bucket name must comply with the Amazon S3 bucket naming conventions. For more information, see Bucket Restrictions and Limitations in the Amazon S3 Developer Guide.
     */
    Bucket: S3Bucket;
    /**
     * The prefix for the Amazon S3 bucket in which a journal export job writes the journal contents. The prefix must comply with Amazon S3 key naming rules and restrictions. For more information, see Object Key and Metadata in the Amazon S3 Developer Guide. The following are examples of valid Prefix values:    JournalExports-ForMyLedger/Testing/     JournalExports     My:Tests/   
     */
    Prefix: S3Prefix;
    /**
     * The encryption settings that are used by a journal export job to write data in an Amazon S3 bucket.
     */
    EncryptionConfiguration: S3EncryptionConfiguration;
  }
  export type S3ObjectEncryptionType = "SSE_KMS"|"SSE_S3"|"NO_ENCRYPTION"|string;
  export type S3Prefix = string;
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) to which you want to add the tags. For example:  arn:aws:qldb:us-east-1:123456789012:ledger/exampleLedger 
     */
    ResourceArn: Arn;
    /**
     * The key-value pairs to add as tags to the specified QLDB resource. Tag keys are case sensitive. If you specify a key that already exists for the resource, your request fails and returns an error. Tag values are case sensitive and can be null.
     */
    Tags: Tags;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type Tags = {[key: string]: TagValue};
  export type Timestamp = Date;
  export type UniqueId = string;
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) from which you want to remove the tags. For example:  arn:aws:qldb:us-east-1:123456789012:ledger/exampleLedger 
     */
    ResourceArn: Arn;
    /**
     * The list of tag keys that you want to remove.
     */
    TagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateLedgerRequest {
    /**
     * The name of the ledger.
     */
    Name: LedgerName;
    /**
     * The flag that prevents a ledger from being deleted by any user. If not provided on ledger creation, this feature is enabled (true) by default. If deletion protection is enabled, you must first disable it before you can delete the ledger using the QLDB API or the AWS Command Line Interface (AWS CLI). You can disable it by calling the UpdateLedger operation to set the flag to false. The QLDB console disables deletion protection for you when you use it to delete a ledger.
     */
    DeletionProtection?: DeletionProtection;
  }
  export interface UpdateLedgerResponse {
    /**
     * The name of the ledger.
     */
    Name?: LedgerName;
    /**
     * The Amazon Resource Name (ARN) for the ledger.
     */
    Arn?: Arn;
    /**
     * The current status of the ledger.
     */
    State?: LedgerState;
    /**
     * The date and time, in epoch time format, when the ledger was created. (Epoch time format is the number of seconds elapsed since 12:00:00 AM January 1, 1970 UTC.)
     */
    CreationDateTime?: Timestamp;
    /**
     * The flag that prevents a ledger from being deleted by any user. If not provided on ledger creation, this feature is enabled (true) by default. If deletion protection is enabled, you must first disable it before you can delete the ledger using the QLDB API or the AWS Command Line Interface (AWS CLI). You can disable it by calling the UpdateLedger operation to set the flag to false. The QLDB console disables deletion protection for you when you use it to delete a ledger.
     */
    DeletionProtection?: DeletionProtection;
  }
  export interface ValueHolder {
    /**
     * An Amazon Ion plaintext value contained in a ValueHolder structure.
     */
    IonText?: IonText;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2019-01-02"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the QLDB client.
   */
  export import Types = QLDB;
}
export = QLDB;
