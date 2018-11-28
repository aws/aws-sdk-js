import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class FSx extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: FSx.Types.ClientConfiguration)
  config: Config & FSx.Types.ClientConfiguration;
  /**
   * Creates a backup of an existing Amazon FSx for Windows File Server file system. Creating regular backups for your file system is a best practice that complements the replication that Amazon FSx for Windows File Server performs for your file system. It also enables you to restore from user modification of data. If a backup with the specified client request token exists, and the parameters match, this operation returns the description of the existing backup. If a backup specified client request token exists, and the parameters don't match, this operation returns IncompatibleParameterError. If a backup with the specified client request token doesn't exist, CreateBackup does the following:    Creates a new Amazon FSx backup with an assigned ID, and an initial lifecycle state of CREATING.   Returns the description of the backup.   By using the idempotent operation, you can retry a CreateBackup operation without the risk of creating an extra backup. This approach can be useful when an initial call fails in a way that makes it unclear whether a backup was created. If you use the same client request token and the initial call created a backup, the operation returns a successful result because all the parameters are the same. The CreateFileSystem operation returns while the backup's lifecycle state is still CREATING. You can check the file system creation status by calling the DescribeBackups operation, which returns the backup state along with other information.   
   */
  createBackup(params: FSx.Types.CreateBackupRequest, callback?: (err: AWSError, data: FSx.Types.CreateBackupResponse) => void): Request<FSx.Types.CreateBackupResponse, AWSError>;
  /**
   * Creates a backup of an existing Amazon FSx for Windows File Server file system. Creating regular backups for your file system is a best practice that complements the replication that Amazon FSx for Windows File Server performs for your file system. It also enables you to restore from user modification of data. If a backup with the specified client request token exists, and the parameters match, this operation returns the description of the existing backup. If a backup specified client request token exists, and the parameters don't match, this operation returns IncompatibleParameterError. If a backup with the specified client request token doesn't exist, CreateBackup does the following:    Creates a new Amazon FSx backup with an assigned ID, and an initial lifecycle state of CREATING.   Returns the description of the backup.   By using the idempotent operation, you can retry a CreateBackup operation without the risk of creating an extra backup. This approach can be useful when an initial call fails in a way that makes it unclear whether a backup was created. If you use the same client request token and the initial call created a backup, the operation returns a successful result because all the parameters are the same. The CreateFileSystem operation returns while the backup's lifecycle state is still CREATING. You can check the file system creation status by calling the DescribeBackups operation, which returns the backup state along with other information.   
   */
  createBackup(callback?: (err: AWSError, data: FSx.Types.CreateBackupResponse) => void): Request<FSx.Types.CreateBackupResponse, AWSError>;
  /**
   * Creates a new, empty Amazon FSx file system. If a file system with the specified client request token exists and the parameters match, CreateFileSystem returns the description of the existing file system. If a file system specified client request token exists and the parameters don't match, this call returns IncompatibleParameterError. If a file system with the specified client request token doesn't exist, CreateFileSystem does the following:    Creates a new, empty Amazon FSx file system with an assigned ID, and an initial lifecycle state of CREATING.   Returns the description of the file system.   This operation requires a client request token in the request that Amazon FSx uses to ensure idempotent creation. This means that calling the operation multiple times with the same client request token has no effect. By using the idempotent operation, you can retry a CreateFileSystem operation without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives success as long as the parameters are the same.  The CreateFileSystem call returns while the file system's lifecycle state is still CREATING. You can check the file-system creation status by calling the DescribeFileSystems operation, which returns the file system state along with other information. 
   */
  createFileSystem(params: FSx.Types.CreateFileSystemRequest, callback?: (err: AWSError, data: FSx.Types.CreateFileSystemResponse) => void): Request<FSx.Types.CreateFileSystemResponse, AWSError>;
  /**
   * Creates a new, empty Amazon FSx file system. If a file system with the specified client request token exists and the parameters match, CreateFileSystem returns the description of the existing file system. If a file system specified client request token exists and the parameters don't match, this call returns IncompatibleParameterError. If a file system with the specified client request token doesn't exist, CreateFileSystem does the following:    Creates a new, empty Amazon FSx file system with an assigned ID, and an initial lifecycle state of CREATING.   Returns the description of the file system.   This operation requires a client request token in the request that Amazon FSx uses to ensure idempotent creation. This means that calling the operation multiple times with the same client request token has no effect. By using the idempotent operation, you can retry a CreateFileSystem operation without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives success as long as the parameters are the same.  The CreateFileSystem call returns while the file system's lifecycle state is still CREATING. You can check the file-system creation status by calling the DescribeFileSystems operation, which returns the file system state along with other information. 
   */
  createFileSystem(callback?: (err: AWSError, data: FSx.Types.CreateFileSystemResponse) => void): Request<FSx.Types.CreateFileSystemResponse, AWSError>;
  /**
   * Creates a new Amazon FSx file system from an existing Amazon FSx for Windows File Server backup. If a file system with the specified client request token exists and the parameters match, this call returns the description of the existing file system. If a client request token specified by the file system exists and the parameters don't match, this call returns IncompatibleParameterError. If a file system with the specified client request token doesn't exist, this operation does the following:   Creates a new Amazon FSx file system from backup with an assigned ID, and an initial lifecycle state of CREATING.   Returns the description of the file system.   Parameters like Active Directory, default share name, automatic backup, and backup settings default to the parameters of the file system that was backed up, unless overridden. You can explicitly supply other settings. By using the idempotent operation, you can retry a CreateFileSystemFromBackup call without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives success as long as the parameters are the same.  The CreateFileSystemFromBackup call returns while the file system's lifecycle state is still CREATING. You can check the file-system creation status by calling the DescribeFileSystems operation, which returns the file system state along with other information. 
   */
  createFileSystemFromBackup(params: FSx.Types.CreateFileSystemFromBackupRequest, callback?: (err: AWSError, data: FSx.Types.CreateFileSystemFromBackupResponse) => void): Request<FSx.Types.CreateFileSystemFromBackupResponse, AWSError>;
  /**
   * Creates a new Amazon FSx file system from an existing Amazon FSx for Windows File Server backup. If a file system with the specified client request token exists and the parameters match, this call returns the description of the existing file system. If a client request token specified by the file system exists and the parameters don't match, this call returns IncompatibleParameterError. If a file system with the specified client request token doesn't exist, this operation does the following:   Creates a new Amazon FSx file system from backup with an assigned ID, and an initial lifecycle state of CREATING.   Returns the description of the file system.   Parameters like Active Directory, default share name, automatic backup, and backup settings default to the parameters of the file system that was backed up, unless overridden. You can explicitly supply other settings. By using the idempotent operation, you can retry a CreateFileSystemFromBackup call without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives success as long as the parameters are the same.  The CreateFileSystemFromBackup call returns while the file system's lifecycle state is still CREATING. You can check the file-system creation status by calling the DescribeFileSystems operation, which returns the file system state along with other information. 
   */
  createFileSystemFromBackup(callback?: (err: AWSError, data: FSx.Types.CreateFileSystemFromBackupResponse) => void): Request<FSx.Types.CreateFileSystemFromBackupResponse, AWSError>;
  /**
   * Deletes an Amazon FSx for Windows File Server backup, deleting its contents. After deletion, the backup no longer exists, and its data is gone. The DeleteBackup call returns instantly. The backup will not show up in later DescribeBackups calls.  The data in a deleted backup is also deleted and can't be recovered by any means. 
   */
  deleteBackup(params: FSx.Types.DeleteBackupRequest, callback?: (err: AWSError, data: FSx.Types.DeleteBackupResponse) => void): Request<FSx.Types.DeleteBackupResponse, AWSError>;
  /**
   * Deletes an Amazon FSx for Windows File Server backup, deleting its contents. After deletion, the backup no longer exists, and its data is gone. The DeleteBackup call returns instantly. The backup will not show up in later DescribeBackups calls.  The data in a deleted backup is also deleted and can't be recovered by any means. 
   */
  deleteBackup(callback?: (err: AWSError, data: FSx.Types.DeleteBackupResponse) => void): Request<FSx.Types.DeleteBackupResponse, AWSError>;
  /**
   * Deletes a file system, deleting its contents. After deletion, the file system no longer exists, and its data is gone. Any existing automatic backups will also be deleted. By default, when you delete an Amazon FSx for Windows File Server file system, a final backup is created upon deletion. This final backup is not subject to the file system's retention policy, and must be manually deleted. The DeleteFileSystem action returns while the file system has the DELETING status. You can check the file system deletion status by calling the DescribeFileSystems action, which returns a list of file systems in your account. If you pass the file system ID for a deleted file system, the DescribeFileSystems returns a FileSystemNotFound error.  The data in a deleted file system is also deleted and can't be recovered by any means. 
   */
  deleteFileSystem(params: FSx.Types.DeleteFileSystemRequest, callback?: (err: AWSError, data: FSx.Types.DeleteFileSystemResponse) => void): Request<FSx.Types.DeleteFileSystemResponse, AWSError>;
  /**
   * Deletes a file system, deleting its contents. After deletion, the file system no longer exists, and its data is gone. Any existing automatic backups will also be deleted. By default, when you delete an Amazon FSx for Windows File Server file system, a final backup is created upon deletion. This final backup is not subject to the file system's retention policy, and must be manually deleted. The DeleteFileSystem action returns while the file system has the DELETING status. You can check the file system deletion status by calling the DescribeFileSystems action, which returns a list of file systems in your account. If you pass the file system ID for a deleted file system, the DescribeFileSystems returns a FileSystemNotFound error.  The data in a deleted file system is also deleted and can't be recovered by any means. 
   */
  deleteFileSystem(callback?: (err: AWSError, data: FSx.Types.DeleteFileSystemResponse) => void): Request<FSx.Types.DeleteFileSystemResponse, AWSError>;
  /**
   * Returns the description of specific Amazon FSx for Windows File Server backups, if a BackupIds value is provided for that backup. Otherwise, it returns all backups owned by your AWS account in the AWS Region of the endpoint that you're calling. When retrieving all backups, you can optionally specify the MaxResults parameter to limit the number of backups in a response. If more backups remain, Amazon FSx returns a NextToken value in the response. In this case, send a later request with the NextToken request parameter set to the value of NextToken from the last response. This action is used in an iterative process to retrieve a list of your backups. DescribeBackups is called first without a NextTokenvalue. Then the action continues to be called with the NextToken parameter set to the value of the last NextToken value until a response has no NextToken. When using this action, keep the following in mind:   The implementation might return fewer than MaxResults file system descriptions while still including a NextToken value.   The order of backups returned in the response of one DescribeBackups call and the order of backups returned across the responses of a multi-call iteration is unspecified.  
   */
  describeBackups(params: FSx.Types.DescribeBackupsRequest, callback?: (err: AWSError, data: FSx.Types.DescribeBackupsResponse) => void): Request<FSx.Types.DescribeBackupsResponse, AWSError>;
  /**
   * Returns the description of specific Amazon FSx for Windows File Server backups, if a BackupIds value is provided for that backup. Otherwise, it returns all backups owned by your AWS account in the AWS Region of the endpoint that you're calling. When retrieving all backups, you can optionally specify the MaxResults parameter to limit the number of backups in a response. If more backups remain, Amazon FSx returns a NextToken value in the response. In this case, send a later request with the NextToken request parameter set to the value of NextToken from the last response. This action is used in an iterative process to retrieve a list of your backups. DescribeBackups is called first without a NextTokenvalue. Then the action continues to be called with the NextToken parameter set to the value of the last NextToken value until a response has no NextToken. When using this action, keep the following in mind:   The implementation might return fewer than MaxResults file system descriptions while still including a NextToken value.   The order of backups returned in the response of one DescribeBackups call and the order of backups returned across the responses of a multi-call iteration is unspecified.  
   */
  describeBackups(callback?: (err: AWSError, data: FSx.Types.DescribeBackupsResponse) => void): Request<FSx.Types.DescribeBackupsResponse, AWSError>;
  /**
   * Returns the description of specific Amazon FSx file systems, if a FileSystemIds value is provided for that file system. Otherwise, it returns descriptions of all file systems owned by your AWS account in the AWS Region of the endpoint that you're calling. When retrieving all file system descriptions, you can optionally specify the MaxResults parameter to limit the number of descriptions in a response. If more file system descriptions remain, Amazon FSx returns a NextToken value in the response. In this case, send a later request with the NextToken request parameter set to the value of NextToken from the last response. This action is used in an iterative process to retrieve a list of your file system descriptions. DescribeFileSystems is called first without a NextTokenvalue. Then the action continues to be called with the NextToken parameter set to the value of the last NextToken value until a response has no NextToken. When using this action, keep the following in mind:   The implementation might return fewer than MaxResults file system descriptions while still including a NextToken value.   The order of file systems returned in the response of one DescribeFileSystems call and the order of file systems returned across the responses of a multicall iteration is unspecified.  
   */
  describeFileSystems(params: FSx.Types.DescribeFileSystemsRequest, callback?: (err: AWSError, data: FSx.Types.DescribeFileSystemsResponse) => void): Request<FSx.Types.DescribeFileSystemsResponse, AWSError>;
  /**
   * Returns the description of specific Amazon FSx file systems, if a FileSystemIds value is provided for that file system. Otherwise, it returns descriptions of all file systems owned by your AWS account in the AWS Region of the endpoint that you're calling. When retrieving all file system descriptions, you can optionally specify the MaxResults parameter to limit the number of descriptions in a response. If more file system descriptions remain, Amazon FSx returns a NextToken value in the response. In this case, send a later request with the NextToken request parameter set to the value of NextToken from the last response. This action is used in an iterative process to retrieve a list of your file system descriptions. DescribeFileSystems is called first without a NextTokenvalue. Then the action continues to be called with the NextToken parameter set to the value of the last NextToken value until a response has no NextToken. When using this action, keep the following in mind:   The implementation might return fewer than MaxResults file system descriptions while still including a NextToken value.   The order of file systems returned in the response of one DescribeFileSystems call and the order of file systems returned across the responses of a multicall iteration is unspecified.  
   */
  describeFileSystems(callback?: (err: AWSError, data: FSx.Types.DescribeFileSystemsResponse) => void): Request<FSx.Types.DescribeFileSystemsResponse, AWSError>;
  /**
   * Lists tags for an Amazon FSx file systems and backups in the case of Amazon FSx for Windows File Server. When retrieving all tags, you can optionally specify the MaxResults parameter to limit the number of tags in a response. If more tags remain, Amazon FSx returns a NextToken value in the response. In this case, send a later request with the NextToken request parameter set to the value of NextToken from the last response. This action is used in an iterative process to retrieve a list of your tags. ListTagsForResource is called first without a NextTokenvalue. Then the action continues to be called with the NextToken parameter set to the value of the last NextToken value until a response has no NextToken. When using this action, keep the following in mind:   The implementation might return fewer than MaxResults file system descriptions while still including a NextToken value.   The order of tags returned in the response of one ListTagsForResource call and the order of tags returned across the responses of a multi-call iteration is unspecified.  
   */
  listTagsForResource(params: FSx.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: FSx.Types.ListTagsForResourceResponse) => void): Request<FSx.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists tags for an Amazon FSx file systems and backups in the case of Amazon FSx for Windows File Server. When retrieving all tags, you can optionally specify the MaxResults parameter to limit the number of tags in a response. If more tags remain, Amazon FSx returns a NextToken value in the response. In this case, send a later request with the NextToken request parameter set to the value of NextToken from the last response. This action is used in an iterative process to retrieve a list of your tags. ListTagsForResource is called first without a NextTokenvalue. Then the action continues to be called with the NextToken parameter set to the value of the last NextToken value until a response has no NextToken. When using this action, keep the following in mind:   The implementation might return fewer than MaxResults file system descriptions while still including a NextToken value.   The order of tags returned in the response of one ListTagsForResource call and the order of tags returned across the responses of a multi-call iteration is unspecified.  
   */
  listTagsForResource(callback?: (err: AWSError, data: FSx.Types.ListTagsForResourceResponse) => void): Request<FSx.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Tags an Amazon FSx resource.
   */
  tagResource(params: FSx.Types.TagResourceRequest, callback?: (err: AWSError, data: FSx.Types.TagResourceResponse) => void): Request<FSx.Types.TagResourceResponse, AWSError>;
  /**
   * Tags an Amazon FSx resource.
   */
  tagResource(callback?: (err: AWSError, data: FSx.Types.TagResourceResponse) => void): Request<FSx.Types.TagResourceResponse, AWSError>;
  /**
   * This action removes a tag from an Amazon FSx resource.
   */
  untagResource(params: FSx.Types.UntagResourceRequest, callback?: (err: AWSError, data: FSx.Types.UntagResourceResponse) => void): Request<FSx.Types.UntagResourceResponse, AWSError>;
  /**
   * This action removes a tag from an Amazon FSx resource.
   */
  untagResource(callback?: (err: AWSError, data: FSx.Types.UntagResourceResponse) => void): Request<FSx.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates a file system configuration.
   */
  updateFileSystem(params: FSx.Types.UpdateFileSystemRequest, callback?: (err: AWSError, data: FSx.Types.UpdateFileSystemResponse) => void): Request<FSx.Types.UpdateFileSystemResponse, AWSError>;
  /**
   * Updates a file system configuration.
   */
  updateFileSystem(callback?: (err: AWSError, data: FSx.Types.UpdateFileSystemResponse) => void): Request<FSx.Types.UpdateFileSystemResponse, AWSError>;
}
declare namespace FSx {
  export type AWSAccountId = string;
  export type ArchivePath = string;
  export type AutomaticBackupRetentionDays = number;
  export interface Backup {
    /**
     * The ID of the backup.
     */
    BackupId: BackupId;
    /**
     * The lifecycle status of the backup.
     */
    Lifecycle: BackupLifecycle;
    /**
     * Details explaining any failures that occur when creating a backup.
     */
    FailureDetails?: BackupFailureDetails;
    /**
     * The type of the backup.
     */
    Type: BackupType;
    ProgressPercent?: ProgressPercent;
    /**
     * The time when a particular backup was created.
     */
    CreationTime: CreationTime;
    /**
     * The ID of the AWS Key Management Service (AWS KMS) key used to encrypt this backup's data.
     */
    KmsKeyId?: KmsKeyId;
    /**
     * The Amazon Resource Name (ARN) for the backup resource.
     */
    ResourceARN?: ResourceARN;
    /**
     * Tags associated with a particular file system.
     */
    Tags?: Tags;
    /**
     * Metadata of the file system associated with the backup. This metadata is persisted even if the file system is deleted.
     */
    FileSystem: FileSystem;
  }
  export interface BackupFailureDetails {
    /**
     * A message describing the backup creation failure.
     */
    Message?: ErrorMessage;
  }
  export type BackupId = string;
  export type BackupIds = BackupId[];
  export type BackupLifecycle = "AVAILABLE"|"CREATING"|"DELETED"|"FAILED"|string;
  export type BackupType = "AUTOMATIC"|"USER_INITIATED"|string;
  export type Backups = Backup[];
  export type ClientRequestToken = string;
  export interface CreateBackupRequest {
    /**
     * The ID of the file system to back up.
     */
    FileSystemId: FileSystemId;
    /**
     * (Optional) A string of up to 64 ASCII characters that Amazon FSx uses to ensure idempotent creation. This string is automatically filled on your behalf when you use the AWS Command Line Interface (AWS CLI) or an AWS SDK.
     */
    ClientRequestToken?: ClientRequestToken;
    /**
     * The tags to apply to the backup at backup creation. The key value of the Name tag appears in the console as the backup name.
     */
    Tags?: Tags;
  }
  export interface CreateBackupResponse {
    /**
     * A description of the backup.
     */
    Backup?: Backup;
  }
  export interface CreateFileSystemFromBackupRequest {
    BackupId: BackupId;
    /**
     * (Optional) A string of up to 64 ASCII characters that Amazon FSx uses to ensure idempotent creation. This string is automatically filled on your behalf when you use the AWS Command Line Interface (AWS CLI) or an AWS SDK.
     */
    ClientRequestToken?: ClientRequestToken;
    /**
     * A list of IDs for the subnets that the file system will be accessible from. Currently, you can specify only one subnet. The file server is also launched in that subnet's Availability Zone.
     */
    SubnetIds: SubnetIds;
    /**
     * A list of IDs for the security groups that apply to the specified network interfaces created for file system access. These security groups apply to all network interfaces. This value isn't returned in later describe requests.
     */
    SecurityGroupIds?: SecurityGroupIds;
    /**
     * The tags to be applied to the file system at file system creation. The key value of the Name tag appears in the console as the file system name.
     */
    Tags?: Tags;
    /**
     * The configuration for this Microsoft Windows file system.
     */
    WindowsConfiguration?: CreateFileSystemWindowsConfiguration;
  }
  export interface CreateFileSystemFromBackupResponse {
    /**
     * A description of the file system.
     */
    FileSystem?: FileSystem;
  }
  export interface CreateFileSystemLustreConfiguration {
    /**
     * The preferred time to perform weekly maintenance, in the UTC time zone.
     */
    WeeklyMaintenanceStartTime?: WeeklyTime;
    /**
     * (Optional) The path to the Amazon S3 bucket (and optional prefix) that you're using as the data repository for your FSx for Lustre file system, for example s3://import-bucket/optional-prefix. If you specify a prefix after the Amazon S3 bucket name, only object keys with that prefix are loaded into the file system.
     */
    ImportPath?: ArchivePath;
    /**
     * (Optional) For files imported from a data repository, this value determines the stripe count and maximum amount of data per file (in MiB) stored on a single physical disk. The maximum number of disks that a single file can be striped across is limited by the total number of disks that make up the file system. The chunk size default is 1,024 MiB (1 GiB) and can go as high as 512,000 MiB (500 GiB). Amazon S3 objects have a maximum size of 5 TB.
     */
    ImportedFileChunkSize?: Megabytes;
  }
  export interface CreateFileSystemRequest {
    /**
     * (Optional) A string of up to 64 ASCII characters that Amazon FSx uses to ensure idempotent creation. This string is automatically filled on your behalf when you use the AWS Command Line Interface (AWS CLI) or an AWS SDK.
     */
    ClientRequestToken?: ClientRequestToken;
    /**
     * The type of file system.
     */
    FileSystemType: FileSystemType;
    /**
     * The storage capacity of the file system. For Windows file systems, the storage capacity has a minimum of 300 GiB, and a maximum of 65,536 GiB. For Lustre file systems, the storage capacity has a minimum of 3,600 GiB. Storage capacity is provisioned in increments of 3,600 GiB.
     */
    StorageCapacity: StorageCapacity;
    /**
     * A list of IDs for the subnets that the file system will be accessible from. File systems support only one subnet. The file server is also launched in that subnet's Availability Zone.
     */
    SubnetIds: SubnetIds;
    /**
     * A list of IDs for the security groups that apply to the specified network interfaces created for file system access. These security groups will apply to all network interfaces. This list isn't returned in later describe requests.
     */
    SecurityGroupIds?: SecurityGroupIds;
    /**
     * The tags to be applied to the file system at file system creation. The key value of the Name tag appears in the console as the file system name.
     */
    Tags?: Tags;
    KmsKeyId?: KmsKeyId;
    /**
     * The configuration for this Microsoft Windows file system.
     */
    WindowsConfiguration?: CreateFileSystemWindowsConfiguration;
    LustreConfiguration?: CreateFileSystemLustreConfiguration;
  }
  export interface CreateFileSystemResponse {
    /**
     * A description of the file system.
     */
    FileSystem?: FileSystem;
  }
  export interface CreateFileSystemWindowsConfiguration {
    /**
     * The ID for an existing Microsoft Active Directory instance that the file system should join when it's created.
     */
    ActiveDirectoryId?: DirectoryId;
    /**
     * The throughput of an Amazon FSx file system, measured in megabytes per second.
     */
    ThroughputCapacity: MegabytesPerSecond;
    /**
     * The preferred start time to perform weekly maintenance, in the UTC time zone.
     */
    WeeklyMaintenanceStartTime?: WeeklyTime;
    /**
     * The preferred time to take daily automatic backups, in the UTC time zone.
     */
    DailyAutomaticBackupStartTime?: DailyTime;
    /**
     * The number of days to retain automatic backups. The default is to retain backups for 7 days. Setting this value to 0 disables the creation of automatic backups. The maximum retention period for backups is 35 days.
     */
    AutomaticBackupRetentionDays?: AutomaticBackupRetentionDays;
    /**
     * A boolean flag indicating whether tags on the file system should be copied to backups. This value defaults to false. If it's set to true, all tags on the file system are copied to all automatic backups and any user-initiated backups where the user doesn't specify any tags. If this value is true, and you specify one or more tags, only the specified tags are copied to backups.
     */
    CopyTagsToBackups?: Flag;
  }
  export type CreationTime = Date;
  export type DNSName = string;
  export type DailyTime = string;
  export interface DataRepositoryConfiguration {
    /**
     * The import path to the Amazon S3 bucket (and optional prefix) that you're using as the data repository for your FSx for Lustre file system, for example s3://import-bucket/optional-prefix. If a prefix is specified after the Amazon S3 bucket name, only object keys with that prefix are loaded into the file system.
     */
    ImportPath?: ArchivePath;
    /**
     * The Amazon S3 commit path to use for storing new and changed Lustre file system files as part of the archive operation from the file system to Amazon S3. The value is s3://import-bucket/FSxLustre[creationtimestamp]. The timestamp is presented in UTC format, for example s3://import-bucket/FSxLustre20181105T222312Z. Files are archived to a different prefix in the Amazon S3 bucket, preventing input data from being overwritten.
     */
    ExportPath?: ArchivePath;
    /**
     * For files imported from a data repository, this value determines the stripe count and maximum amount of data per file (in MiB) stored on a single physical disk. The maximum number of disks that a single file can be striped across is limited by the total number of disks that make up the file system. The default chunk size is 1,024 MiB (1 GiB) and can go as high as 512,000 MiB (500 GiB). Amazon S3 objects have a maximum size of 5 TB.
     */
    ImportedFileChunkSize?: Megabytes;
  }
  export interface DeleteBackupRequest {
    /**
     * The ID of the backup you want to delete.
     */
    BackupId: BackupId;
    /**
     * (Optional) A string of up to 64 ASCII characters that Amazon FSx uses to ensure idempotent deletion. This is automatically filled on your behalf when using the AWS CLI or SDK.
     */
    ClientRequestToken?: ClientRequestToken;
  }
  export interface DeleteBackupResponse {
    /**
     * The ID of the backup deleted.
     */
    BackupId?: BackupId;
    /**
     * The lifecycle of the backup. Should be DELETED.
     */
    Lifecycle?: BackupLifecycle;
  }
  export interface DeleteFileSystemRequest {
    /**
     * The ID of the file system you want to delete.
     */
    FileSystemId: FileSystemId;
    /**
     * (Optional) A string of up to 64 ASCII characters that Amazon FSx uses to ensure idempotent deletion. This is automatically filled on your behalf when using the AWS CLI or SDK.
     */
    ClientRequestToken?: ClientRequestToken;
    WindowsConfiguration?: DeleteFileSystemWindowsConfiguration;
  }
  export interface DeleteFileSystemResponse {
    /**
     * The ID of the file system being deleted.
     */
    FileSystemId?: FileSystemId;
    /**
     * The file system lifecycle for the deletion request. Should be DELETING.
     */
    Lifecycle?: FileSystemLifecycle;
    WindowsResponse?: DeleteFileSystemWindowsResponse;
  }
  export interface DeleteFileSystemWindowsConfiguration {
    /**
     * By default, Amazon FSx for Windows takes a final backup on your behalf when the DeleteFileSystem operation is invoked. Doing this helps protect you from data loss, and we highly recommend taking the final backup. If you want to skip this backup, use this flag to do so.
     */
    SkipFinalBackup?: Flag;
    /**
     * A set of tags for your final backup.
     */
    FinalBackupTags?: Tags;
  }
  export interface DeleteFileSystemWindowsResponse {
    /**
     * The ID of the final backup for this file system.
     */
    FinalBackupId?: BackupId;
    /**
     * The set of tags applied to the final backup.
     */
    FinalBackupTags?: Tags;
  }
  export interface DescribeBackupsRequest {
    /**
     * (Optional) IDs of the backups you want to retrieve (String). This overrides any filters. If any IDs are not found, BackupNotFound will be thrown.
     */
    BackupIds?: BackupIds;
    /**
     * (Optional) Filters structure. Supported names are file-system-id and backup-type.
     */
    Filters?: Filters;
    /**
     * (Optional) Maximum number of backups to return in the response (integer). This parameter value must be greater than 0. The number of items that Amazon FSx returns is the minimum of the MaxResults parameter specified in the request and the service's internal maximum number of items per page.
     */
    MaxResults?: MaxResults;
    /**
     * (Optional) Opaque pagination token returned from a previous DescribeBackups operation (String). If a token present, the action continues the list from where the returning call left off.
     */
    NextToken?: NextToken;
  }
  export interface DescribeBackupsResponse {
    /**
     * Any array of backups.
     */
    Backups?: Backups;
    /**
     * This is present if there are more backups than returned in the response (String). You can use the NextToken value in the later request to fetch the backups. 
     */
    NextToken?: NextToken;
  }
  export interface DescribeFileSystemsRequest {
    /**
     * (Optional) IDs of the file systems whose descriptions you want to retrieve (String).
     */
    FileSystemIds?: FileSystemIds;
    /**
     * (Optional) Maximum number of file systems to return in the response (integer). This parameter value must be greater than 0. The number of items that Amazon FSx returns is the minimum of the MaxResults parameter specified in the request and the service's internal maximum number of items per page.
     */
    MaxResults?: MaxResults;
    /**
     * (Optional) Opaque pagination token returned from a previous DescribeFileSystems operation (String). If a token present, the action continues the list from where the returning call left off.
     */
    NextToken?: NextToken;
  }
  export interface DescribeFileSystemsResponse {
    /**
     * An array of file system descriptions.
     */
    FileSystems?: FileSystems;
    /**
     * Present if there are more file systems than returned in the response (String). You can use the NextToken value in the later request to fetch the descriptions. 
     */
    NextToken?: NextToken;
  }
  export type DirectoryId = string;
  export type ErrorMessage = string;
  export interface FileSystem {
    /**
     * The AWS account that created the file system. If the file system was created by an IAM user, the AWS account to which the IAM user belongs is the owner.
     */
    OwnerId?: AWSAccountId;
    /**
     * The time that the file system was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time.
     */
    CreationTime?: CreationTime;
    /**
     * The eight-digit ID of the file system that was automatically assigned by Amazon FSx.
     */
    FileSystemId?: FileSystemId;
    /**
     * Type of file system. Currently the only supported type is WINDOWS.
     */
    FileSystemType?: FileSystemType;
    /**
     * The lifecycle status of the file system.
     */
    Lifecycle?: FileSystemLifecycle;
    FailureDetails?: FileSystemFailureDetails;
    /**
     * The storage capacity of the file system in gigabytes.
     */
    StorageCapacity?: StorageCapacity;
    /**
     * The ID of the primary VPC for the file system.
     */
    VpcId?: VpcId;
    /**
     * The IDs of the subnets to contain the endpoint for the file system. One and only one is supported. The file system is launched in the Availability Zone associated with this subnet.
     */
    SubnetIds?: SubnetIds;
    /**
     * The IDs of the elastic network interface from which a specific file system is accessible. The elastic network interface is automatically created in the same VPC that the Amazon FSx file system was created in. For more information, see Elastic Network Interfaces in the Amazon EC2 User Guide.  For an Amazon FSx for Windows File Server file system, you can have one network interface Id. For an Amazon FSx for Lustre file system, you can have more than one.
     */
    NetworkInterfaceIds?: NetworkInterfaceIds;
    /**
     * The DNS name for the file system.
     */
    DNSName?: DNSName;
    /**
     * The ID of the AWS Key Management Service (AWS KMS) key used to encrypt the file system's data for an Amazon FSx for Windows File Server file system.
     */
    KmsKeyId?: KmsKeyId;
    /**
     * The resource ARN of the file system.
     */
    ResourceARN?: ResourceARN;
    /**
     * The tags to associate with the file system. For more information, see Tagging Your Amazon EC2 Resources in the Amazon EC2 User Guide.
     */
    Tags?: Tags;
    /**
     * The configuration for this Microsoft Windows file system.
     */
    WindowsConfiguration?: WindowsFileSystemConfiguration;
    LustreConfiguration?: LustreFileSystemConfiguration;
  }
  export interface FileSystemFailureDetails {
    /**
     * Message describing the failures that occurred during file system creation.
     */
    Message?: ErrorMessage;
  }
  export type FileSystemId = string;
  export type FileSystemIds = FileSystemId[];
  export type FileSystemLifecycle = "AVAILABLE"|"CREATING"|"FAILED"|"DELETING"|string;
  export type FileSystemMaintenanceOperation = "PATCHING"|"BACKING_UP"|string;
  export type FileSystemMaintenanceOperations = FileSystemMaintenanceOperation[];
  export type FileSystemType = "WINDOWS"|"LUSTRE"|string;
  export type FileSystems = FileSystem[];
  export interface Filter {
    /**
     * The name for this filter.
     */
    Name?: FilterName;
    /**
     * The values of the filter. These are all the values for any of the applied filters.
     */
    Values?: FilterValues;
  }
  export type FilterName = "file-system-id"|"backup-type"|string;
  export type FilterValue = string;
  export type FilterValues = FilterValue[];
  export type Filters = Filter[];
  export type Flag = boolean;
  export type KmsKeyId = string;
  export interface ListTagsForResourceRequest {
    /**
     * The ARN of the Amazon FSx resource that will have its tags listed.
     */
    ResourceARN: ResourceARN;
    /**
     * (Optional) Maximum number of tags to return in the response (integer). This parameter value must be greater than 0. The number of items that Amazon FSx returns is the minimum of the MaxResults parameter specified in the request and the service's internal maximum number of items per page.
     */
    MaxResults?: MaxResults;
    /**
     * (Optional) Opaque pagination token returned from a previous ListTagsForResource operation (String). If a token present, the action continues the list from where the returning call left off.
     */
    NextToken?: NextToken;
  }
  export interface ListTagsForResourceResponse {
    /**
     * A list of tags on the resource.
     */
    Tags?: Tags;
    /**
     * This is present if there are more tags than returned in the response (String). You can use the NextToken value in the later request to fetch the tags. 
     */
    NextToken?: NextToken;
  }
  export interface LustreFileSystemConfiguration {
    /**
     * The UTC time that you want to begin your weekly maintenance window.
     */
    WeeklyMaintenanceStartTime?: WeeklyTime;
    DataRepositoryConfiguration?: DataRepositoryConfiguration;
  }
  export type MaxResults = number;
  export type Megabytes = number;
  export type MegabytesPerSecond = number;
  export type NetworkInterfaceId = string;
  export type NetworkInterfaceIds = NetworkInterfaceId[];
  export type NextToken = string;
  export type ProgressPercent = number;
  export type ResourceARN = string;
  export type SecurityGroupId = string;
  export type SecurityGroupIds = SecurityGroupId[];
  export type StorageCapacity = number;
  export type SubnetId = string;
  export type SubnetIds = SubnetId[];
  export interface Tag {
    /**
     * A value that specifies the TagKey, the name of the tag. Tag keys must be unique for the resource to which they are attached.
     */
    Key?: TagKey;
    /**
     * A value that specifies the TagValue, the value assigned to the corresponding tag key. Tag values can be null and don't have to be unique in a tag set. For example, you can have a key-value pair in a tag set of finances : April and also of payroll : April.
     */
    Value?: TagValue;
  }
  export type TagKey = string;
  export type TagKeys = TagKey[];
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the Amazon FSx resource that you want to tag.
     */
    ResourceARN: ResourceARN;
    /**
     * A list of tags for the resource. If a tag with a given key already exists, the value is replaced by the one specified in this parameter.
     */
    Tags: Tags;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type Tags = Tag[];
  export interface UntagResourceRequest {
    /**
     * The ARN of the Amazon FSx resource to untag.
     */
    ResourceARN: ResourceARN;
    /**
     * A list of keys of tags on the resource to untag. In case the tag key doesn't exist, the call will still succeed to be idempotent.
     */
    TagKeys: TagKeys;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateFileSystemLustreConfiguration {
    /**
     * The preferred time to perform weekly maintenance, in the UTC time zone.
     */
    WeeklyMaintenanceStartTime?: WeeklyTime;
  }
  export interface UpdateFileSystemRequest {
    FileSystemId: FileSystemId;
    /**
     * (Optional) A string of up to 64 ASCII characters that Amazon FSx uses to ensure idempotent updates. This string is automatically filled on your behalf when you use the AWS Command Line Interface (AWS CLI) or an AWS SDK.
     */
    ClientRequestToken?: ClientRequestToken;
    /**
     * The configuration for this Microsoft Windows file system. The only supported options are for backup and maintenance.
     */
    WindowsConfiguration?: UpdateFileSystemWindowsConfiguration;
    LustreConfiguration?: UpdateFileSystemLustreConfiguration;
  }
  export interface UpdateFileSystemResponse {
    /**
     * A description of the file system.
     */
    FileSystem?: FileSystem;
  }
  export interface UpdateFileSystemWindowsConfiguration {
    /**
     * The preferred time to perform weekly maintenance, in the UTC time zone.
     */
    WeeklyMaintenanceStartTime?: WeeklyTime;
    /**
     * The preferred time to take daily automatic backups, in the UTC time zone.
     */
    DailyAutomaticBackupStartTime?: DailyTime;
    /**
     * The number of days to retain automatic backups. Setting this to 0 disables automatic backups. You can retain automatic backups for a maximum of 35 days.
     */
    AutomaticBackupRetentionDays?: AutomaticBackupRetentionDays;
  }
  export type VpcId = string;
  export type WeeklyTime = string;
  export interface WindowsFileSystemConfiguration {
    /**
     * The ID for an existing Microsoft Active Directory instance that the file system should join when it's created.
     */
    ActiveDirectoryId?: DirectoryId;
    /**
     * The throughput of an Amazon FSx file system, measured in megabytes per second.
     */
    ThroughputCapacity?: MegabytesPerSecond;
    /**
     * The list of maintenance operations in progress for this file system.
     */
    MaintenanceOperationsInProgress?: FileSystemMaintenanceOperations;
    /**
     * The preferred time to perform weekly maintenance, in the UTC time zone.
     */
    WeeklyMaintenanceStartTime?: WeeklyTime;
    /**
     * The preferred time to take daily automatic backups, in the UTC time zone.
     */
    DailyAutomaticBackupStartTime?: DailyTime;
    /**
     * The number of days to retain automatic backups. Setting this to 0 disables automatic backups. You can retain automatic backups for a maximum of 35 days.
     */
    AutomaticBackupRetentionDays?: AutomaticBackupRetentionDays;
    /**
     * A boolean flag indicating whether tags on the file system should be copied to backups. This value defaults to false. If it's set to true, all tags on the file system are copied to all automatic backups and any user-initiated backups where the user doesn't specify any tags. If this value is true, and you specify one or more tags, only the specified tags are copied to backups.
     */
    CopyTagsToBackups?: Flag;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-03-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the FSx client.
   */
  export import Types = FSx;
}
export = FSx;
