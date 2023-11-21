import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class CloudFrontKeyValueStore extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: CloudFrontKeyValueStore.Types.ClientConfiguration)
  config: Config & CloudFrontKeyValueStore.Types.ClientConfiguration;
  /**
   * Deletes the key value pair specified by the key.
   */
  deleteKey(params: CloudFrontKeyValueStore.Types.DeleteKeyRequest, callback?: (err: AWSError, data: CloudFrontKeyValueStore.Types.DeleteKeyResponse) => void): Request<CloudFrontKeyValueStore.Types.DeleteKeyResponse, AWSError>;
  /**
   * Deletes the key value pair specified by the key.
   */
  deleteKey(callback?: (err: AWSError, data: CloudFrontKeyValueStore.Types.DeleteKeyResponse) => void): Request<CloudFrontKeyValueStore.Types.DeleteKeyResponse, AWSError>;
  /**
   * Returns metadata information about Key Value Store.
   */
  describeKeyValueStore(params: CloudFrontKeyValueStore.Types.DescribeKeyValueStoreRequest, callback?: (err: AWSError, data: CloudFrontKeyValueStore.Types.DescribeKeyValueStoreResponse) => void): Request<CloudFrontKeyValueStore.Types.DescribeKeyValueStoreResponse, AWSError>;
  /**
   * Returns metadata information about Key Value Store.
   */
  describeKeyValueStore(callback?: (err: AWSError, data: CloudFrontKeyValueStore.Types.DescribeKeyValueStoreResponse) => void): Request<CloudFrontKeyValueStore.Types.DescribeKeyValueStoreResponse, AWSError>;
  /**
   * Returns a key value pair.
   */
  getKey(params: CloudFrontKeyValueStore.Types.GetKeyRequest, callback?: (err: AWSError, data: CloudFrontKeyValueStore.Types.GetKeyResponse) => void): Request<CloudFrontKeyValueStore.Types.GetKeyResponse, AWSError>;
  /**
   * Returns a key value pair.
   */
  getKey(callback?: (err: AWSError, data: CloudFrontKeyValueStore.Types.GetKeyResponse) => void): Request<CloudFrontKeyValueStore.Types.GetKeyResponse, AWSError>;
  /**
   * Returns a list of key value pairs.
   */
  listKeys(params: CloudFrontKeyValueStore.Types.ListKeysRequest, callback?: (err: AWSError, data: CloudFrontKeyValueStore.Types.ListKeysResponse) => void): Request<CloudFrontKeyValueStore.Types.ListKeysResponse, AWSError>;
  /**
   * Returns a list of key value pairs.
   */
  listKeys(callback?: (err: AWSError, data: CloudFrontKeyValueStore.Types.ListKeysResponse) => void): Request<CloudFrontKeyValueStore.Types.ListKeysResponse, AWSError>;
  /**
   * Creates a new key value pair or replaces the value of an existing key.
   */
  putKey(params: CloudFrontKeyValueStore.Types.PutKeyRequest, callback?: (err: AWSError, data: CloudFrontKeyValueStore.Types.PutKeyResponse) => void): Request<CloudFrontKeyValueStore.Types.PutKeyResponse, AWSError>;
  /**
   * Creates a new key value pair or replaces the value of an existing key.
   */
  putKey(callback?: (err: AWSError, data: CloudFrontKeyValueStore.Types.PutKeyResponse) => void): Request<CloudFrontKeyValueStore.Types.PutKeyResponse, AWSError>;
  /**
   * Puts or Deletes multiple key value pairs in a single, all-or-nothing operation.
   */
  updateKeys(params: CloudFrontKeyValueStore.Types.UpdateKeysRequest, callback?: (err: AWSError, data: CloudFrontKeyValueStore.Types.UpdateKeysResponse) => void): Request<CloudFrontKeyValueStore.Types.UpdateKeysResponse, AWSError>;
  /**
   * Puts or Deletes multiple key value pairs in a single, all-or-nothing operation.
   */
  updateKeys(callback?: (err: AWSError, data: CloudFrontKeyValueStore.Types.UpdateKeysResponse) => void): Request<CloudFrontKeyValueStore.Types.UpdateKeysResponse, AWSError>;
}
declare namespace CloudFrontKeyValueStore {
  export interface DeleteKeyRequest {
    /**
     * The Amazon Resource Name (ARN) of the Key Value Store.
     */
    KvsARN: KvsARN;
    /**
     * The key to delete.
     */
    Key: Key;
    /**
     * The current version (ETag) of the Key Value Store that you are deleting keys from, which you can get using DescribeKeyValueStore.
     */
    IfMatch: Etag;
  }
  export interface DeleteKeyRequestListItem {
    /**
     * The key of the key value pair to be deleted.
     */
    Key: Key;
  }
  export type DeleteKeyRequestsList = DeleteKeyRequestListItem[];
  export interface DeleteKeyResponse {
    /**
     * Number of key value pairs in the Key Value Store after the successful delete.
     */
    ItemCount: Integer;
    /**
     * Total size of the Key Value Store after the successful delete, in bytes.
     */
    TotalSizeInBytes: Long;
    /**
     * The current version identifier of the Key Value Store after the successful delete.
     */
    ETag: Etag;
  }
  export interface DescribeKeyValueStoreRequest {
    /**
     * The Amazon Resource Name (ARN) of the Key Value Store.
     */
    KvsARN: KvsARN;
  }
  export interface DescribeKeyValueStoreResponse {
    /**
     * Number of key value pairs in the Key Value Store.
     */
    ItemCount: Integer;
    /**
     * Total size of the Key Value Store in bytes.
     */
    TotalSizeInBytes: Long;
    /**
     * The Amazon Resource Name (ARN) of the Key Value Store.
     */
    KvsARN: KvsARN;
    /**
     * Date and time when the Key Value Store was created.
     */
    Created: Timestamp;
    /**
     * The version identifier for the current version of the Key Value Store.
     */
    ETag: Etag;
    /**
     * Date and time when the key value pairs in the Key Value Store was last modified.
     */
    LastModified?: Timestamp;
  }
  export type Etag = string;
  export interface GetKeyRequest {
    /**
     * The Amazon Resource Name (ARN) of the Key Value Store.
     */
    KvsARN: KvsARN;
    /**
     * The key to get.
     */
    Key: Key;
  }
  export interface GetKeyResponse {
    /**
     * The key of the key value pair.
     */
    Key: Key;
    /**
     * The value of the key value pair.
     */
    Value: Value;
    /**
     * Number of key value pairs in the Key Value Store.
     */
    ItemCount: Integer;
    /**
     * Total size of the Key Value Store in bytes.
     */
    TotalSizeInBytes: Long;
  }
  export type Integer = number;
  export type Key = string;
  export type KvsARN = string;
  export interface ListKeysRequest {
    /**
     * The Amazon Resource Name (ARN) of the Key Value Store.
     */
    KvsARN: KvsARN;
    /**
     * If nextToken is returned in the response, there are more results available. Make the next call using the returned token to retrieve the next page.
     */
    NextToken?: String;
    /**
     * Maximum number of results that are returned per call. The default is 10 and maximum allowed page is 50.
     */
    MaxResults?: ListKeysRequestMaxResultsInteger;
  }
  export type ListKeysRequestMaxResultsInteger = number;
  export interface ListKeysResponse {
    /**
     * If nextToken is returned in the response, there are more results available. Make the next call using the returned token to retrieve the next page.
     */
    NextToken?: String;
    /**
     * Key value pairs
     */
    Items?: ListKeysResponseList;
  }
  export type ListKeysResponseList = ListKeysResponseListItem[];
  export interface ListKeysResponseListItem {
    /**
     * The key of the key value pair.
     */
    Key: Key;
    /**
     * The value of the key value pair.
     */
    Value: Value;
  }
  export type Long = number;
  export interface PutKeyRequest {
    /**
     * The key to put.
     */
    Key: Key;
    /**
     * The value to put.
     */
    Value: Value;
    /**
     * The Amazon Resource Name (ARN) of the Key Value Store.
     */
    KvsARN: KvsARN;
    /**
     * The current version (ETag) of the Key Value Store that you are putting keys into, which you can get using DescribeKeyValueStore.
     */
    IfMatch: Etag;
  }
  export interface PutKeyRequestListItem {
    /**
     * The key of the key value pair list item to put.
     */
    Key: Key;
    /**
     * The value for the key value pair to put.
     */
    Value: Value;
  }
  export type PutKeyRequestsList = PutKeyRequestListItem[];
  export interface PutKeyResponse {
    /**
     * Number of key value pairs in the Key Value Store after the successful put.
     */
    ItemCount: Integer;
    /**
     * Total size of the Key Value Store after the successful put, in bytes.
     */
    TotalSizeInBytes: Long;
    /**
     * The current version identifier of the Key Value Store after the successful put.
     */
    ETag: Etag;
  }
  export type String = string;
  export type Timestamp = Date;
  export interface UpdateKeysRequest {
    /**
     * The Amazon Resource Name (ARN) of the Key Value Store.
     */
    KvsARN: KvsARN;
    /**
     * The current version (ETag) of the Key Value Store that you are updating keys of, which you can get using DescribeKeyValueStore.
     */
    IfMatch: Etag;
    /**
     * List of key value pairs to put.
     */
    Puts?: PutKeyRequestsList;
    /**
     * List of keys to delete.
     */
    Deletes?: DeleteKeyRequestsList;
  }
  export interface UpdateKeysResponse {
    /**
     * Number of key value pairs in the Key Value Store after the successful update.
     */
    ItemCount: Integer;
    /**
     * Total size of the Key Value Store after the successful update, in bytes.
     */
    TotalSizeInBytes: Long;
    /**
     * The current version identifier of the Key Value Store after the successful update.
     */
    ETag: Etag;
  }
  export type Value = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2022-07-26"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the CloudFrontKeyValueStore client.
   */
  export import Types = CloudFrontKeyValueStore;
}
export = CloudFrontKeyValueStore;
