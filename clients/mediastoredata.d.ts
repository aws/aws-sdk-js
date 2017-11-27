import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
import {Readable} from 'stream';
interface Blob {}
declare class MediaStoreData extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: MediaStoreData.Types.ClientConfiguration)
  config: Config & MediaStoreData.Types.ClientConfiguration;
  /**
   * Deletes an object at the specified path.
   */
  deleteObject(params: MediaStoreData.Types.DeleteObjectRequest, callback?: (err: AWSError, data: MediaStoreData.Types.DeleteObjectResponse) => void): Request<MediaStoreData.Types.DeleteObjectResponse, AWSError>;
  /**
   * Deletes an object at the specified path.
   */
  deleteObject(callback?: (err: AWSError, data: MediaStoreData.Types.DeleteObjectResponse) => void): Request<MediaStoreData.Types.DeleteObjectResponse, AWSError>;
  /**
   * Gets the header for an object at the specified path.
   */
  describeObject(params: MediaStoreData.Types.DescribeObjectRequest, callback?: (err: AWSError, data: MediaStoreData.Types.DescribeObjectResponse) => void): Request<MediaStoreData.Types.DescribeObjectResponse, AWSError>;
  /**
   * Gets the header for an object at the specified path.
   */
  describeObject(callback?: (err: AWSError, data: MediaStoreData.Types.DescribeObjectResponse) => void): Request<MediaStoreData.Types.DescribeObjectResponse, AWSError>;
  /**
   * Downloads the object at the specified path.
   */
  getObject(params: MediaStoreData.Types.GetObjectRequest, callback?: (err: AWSError, data: MediaStoreData.Types.GetObjectResponse) => void): Request<MediaStoreData.Types.GetObjectResponse, AWSError>;
  /**
   * Downloads the object at the specified path.
   */
  getObject(callback?: (err: AWSError, data: MediaStoreData.Types.GetObjectResponse) => void): Request<MediaStoreData.Types.GetObjectResponse, AWSError>;
  /**
   * Provides a list of metadata entries about folders and objects in the specified folder.
   */
  listItems(params: MediaStoreData.Types.ListItemsRequest, callback?: (err: AWSError, data: MediaStoreData.Types.ListItemsResponse) => void): Request<MediaStoreData.Types.ListItemsResponse, AWSError>;
  /**
   * Provides a list of metadata entries about folders and objects in the specified folder.
   */
  listItems(callback?: (err: AWSError, data: MediaStoreData.Types.ListItemsResponse) => void): Request<MediaStoreData.Types.ListItemsResponse, AWSError>;
  /**
   * Uploads an object to the specified path. Object sizes are limited to 10 MB.
   */
  putObject(params: MediaStoreData.Types.PutObjectRequest, callback?: (err: AWSError, data: MediaStoreData.Types.PutObjectResponse) => void): Request<MediaStoreData.Types.PutObjectResponse, AWSError>;
  /**
   * Uploads an object to the specified path. Object sizes are limited to 10 MB.
   */
  putObject(callback?: (err: AWSError, data: MediaStoreData.Types.PutObjectResponse) => void): Request<MediaStoreData.Types.PutObjectResponse, AWSError>;
}
declare namespace MediaStoreData {
  export type ContentRangePattern = string;
  export type ContentType = string;
  export interface DeleteObjectRequest {
    /**
     * The path (including the file name) where the object is stored in the container. Format: &lt;folder name&gt;/&lt;folder name&gt;/&lt;file name&gt;
     */
    Path: PathNaming;
  }
  export interface DeleteObjectResponse {
  }
  export interface DescribeObjectRequest {
    /**
     * The path (including the file name) where the object is stored in the container. Format: &lt;folder name&gt;/&lt;folder name&gt;/&lt;file name&gt;
     */
    Path: PathNaming;
  }
  export interface DescribeObjectResponse {
    /**
     * The ETag that represents a unique instance of the object.
     */
    ETag?: ETag;
    /**
     * The content type of the object.
     */
    ContentType?: ContentType;
    /**
     * The length of the object in bytes.
     */
    ContentLength?: NonNegativeLong;
    /**
     * An optional CacheControl header that allows the caller to control the object's cache behavior. Headers can be passed in as specified in the HTTP at https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9. Headers with a custom user-defined value are also accepted.
     */
    CacheControl?: StringPrimitive;
    /**
     * The date and time that the object was last modified.
     */
    LastModified?: TimeStamp;
  }
  export type ETag = string;
  export type ErrorMessage = string;
  export interface GetObjectRequest {
    /**
     * The path (including the file name) where the object is stored in the container. Format: &lt;folder name&gt;/&lt;folder name&gt;/&lt;file name&gt; For example, to upload the file mlaw.avi to the folder path premium\canada in the container movies, enter the path premium/canada/mlaw.avi. Do not include the container name in this path. If the path includes any folders that don't exist yet, the service creates them. For example, suppose you have an existing premium/usa subfolder. If you specify premium/canada, the service creates a canada subfolder in the premium folder. You then have two subfolders, usa and canada, in the premium folder.  There is no correlation between the path to the source and the path (folders) in the container in AWS Elemental MediaStore. For more information about folders and how they exist in a container, see the AWS Elemental MediaStore User Guide. The file name is the name that is assigned to the file that you upload. The file can have the same name inside and outside of AWS Elemental MediaStore, or it can have the same name. The file name can include or omit an extension. 
     */
    Path: PathNaming;
    /**
     * The range bytes of an object to retrieve. For more information about the Range header, go to http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35.
     */
    Range?: RangePattern;
  }
  export interface GetObjectResponse {
    /**
     * The path to the file outside of the container. The file name can include or omit an extension.  Example 1: If the file is stored on a remote server that has been mounted to the workstation on which the REST API command is being run, the path could be the absolute path  \mount\assets\mlaw.avi or the relative path ..\..\mount\assets\movies\premium\mlaw.avi. Example 2: If the file is stored on a remote server that is not mounted, the path could be https:\\192.0.2.15\movies\premium\mlaw.avi.
     */
    Body?: PayloadBlob;
    /**
     * An optional CacheControl header that allows the caller to control the object's cache behavior. Headers can be passed in as specified in the HTTP spec at https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9. Headers with a custom user-defined value are also accepted.
     */
    CacheControl?: StringPrimitive;
    /**
     * The range of bytes to retrieve.
     */
    ContentRange?: ContentRangePattern;
    /**
     * The length of the object in bytes.
     */
    ContentLength?: NonNegativeLong;
    /**
     * The content type of the object.
     */
    ContentType?: ContentType;
    /**
     * The ETag that represents a unique instance of the object.
     */
    ETag?: ETag;
    /**
     * The date and time that the object was last modified.
     */
    LastModified?: TimeStamp;
    /**
     * The HTML status code of the request. Status codes ranging from 200 to 299 indicate success. All other status codes indicate the type of error that occurred.
     */
    StatusCode: statusCode;
  }
  export interface Item {
    /**
     * The name of the item.
     */
    Name?: ItemName;
    /**
     * The item type (folder or object).
     */
    Type?: ItemType;
    /**
     * The ETag that represents a unique instance of the item.
     */
    ETag?: ETag;
    /**
     * The date and time that the item was last modified.
     */
    LastModified?: TimeStamp;
    /**
     * The content type of the item.
     */
    ContentType?: ContentType;
    /**
     * The length of the item in bytes.
     */
    ContentLength?: NonNegativeLong;
  }
  export type ItemList = Item[];
  export type ItemName = string;
  export type ItemType = "OBJECT"|"FOLDER"|string;
  export interface ListItemsRequest {
    /**
     * The path in the container from which to retrieve items. Format: &lt;folder name&gt;/&lt;folder name&gt;/&lt;file name&gt;
     */
    Path?: ListPathNaming;
    /**
     * The maximum results to return. The service might return fewer results.
     */
    MaxResults?: ListLimit;
    /**
     * The NextToken received in the ListItemsResponse for the same container and path. Tokens expire after 15 minutes.
     */
    NextToken?: PaginationToken;
  }
  export interface ListItemsResponse {
    /**
     * Metadata entries for the folders and objects at the requested path.
     */
    Items?: ItemList;
    /**
     * The NextToken used to request the next page of results using ListItems.
     */
    NextToken?: PaginationToken;
  }
  export type ListLimit = number;
  export type ListPathNaming = string;
  export type NonNegativeLong = number;
  export type PaginationToken = string;
  export type PathNaming = string;
  export type PayloadBlob = Buffer|Uint8Array|Blob|string|Readable;
  export interface PutObjectRequest {
    /**
     * The path to the file outside of the container. The file name can include or omit an extension.  Example 1: If the file is stored on a remote server that has been mounted to the workstation on which the REST API command is being run, the path could be the absolute path  \mount\assets\mlaw.avi or the relative path ..\..\mount\assets\movies\premium\mlaw.avi. Example 2: If the file is stored on a remote server that is not mounted, the path could be https:\\192.0.2.15\movies\premium\mlaw.avi.
     */
    Body: PayloadBlob;
    /**
     * The path (including the file name) where the object is stored in the container. Format: &lt;folder name&gt;/&lt;folder name&gt;/&lt;file name&gt; For example, to upload the file mlaw.avi to the folder path premium\canada in the container movies, enter the path premium/canada/mlaw.avi. Do not include the container name in this path. If the path includes any folders that don't exist yet, the service creates them. For example, suppose you have an existing premium/usa subfolder. If you specify premium/canada, the service creates a canada subfolder in the premium folder. You then have two subfolders, usa and canada, in the premium folder.  There is no correlation between the path to the source and the path (folders) in the container in AWS Elemental MediaStore. For more information about folders and how they exist in a container, see the AWS Elemental MediaStore User Guide. The file name is the name that is assigned to the file that you upload. The file can have the same name inside and outside of AWS Elemental MediaStore, or it can have the same name. The file name can include or omit an extension. 
     */
    Path: PathNaming;
    /**
     * The content type of the object.
     */
    ContentType?: ContentType;
    /**
     * An optional CacheControl header that allows the caller to control the object's cache behavior. Headers can be passed in as specified in the HTTP at https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9. Headers with a custom user-defined value are also accepted.
     */
    CacheControl?: StringPrimitive;
    /**
     * Indicates the storage class of a Put request. Defaults to high-performance temporal storage class, and objects are persisted into durable storage shortly after being received.
     */
    StorageClass?: StorageClass;
  }
  export interface PutObjectResponse {
    /**
     * The SHA256 digest of the object that is persisted.
     */
    ContentSHA256?: SHA256Hash;
    /**
     * Unique identifier of the object in the container.
     */
    ETag?: ETag;
    /**
     * The storage class where the object was persisted. Should be “Temporal”.
     */
    StorageClass?: StorageClass;
  }
  export type RangePattern = string;
  export type SHA256Hash = string;
  export type StorageClass = "TEMPORAL"|string;
  export type StringPrimitive = string;
  export type TimeStamp = Date;
  export type statusCode = number;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-09-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the MediaStoreData client.
   */
  export import Types = MediaStoreData;
}
export = MediaStoreData;
