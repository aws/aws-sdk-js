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
   * Cancels an existing Amazon FSx for Lustre data repository task if that task is in either the PENDING or EXECUTING state. When you cancel a task, Amazon FSx does the following.   Any files that FSx has already exported are not reverted.   FSx continues to export any files that are "in-flight" when the cancel operation is received.   FSx does not export any files that have not yet been exported.  
   */
  cancelDataRepositoryTask(params: FSx.Types.CancelDataRepositoryTaskRequest, callback?: (err: AWSError, data: FSx.Types.CancelDataRepositoryTaskResponse) => void): Request<FSx.Types.CancelDataRepositoryTaskResponse, AWSError>;
  /**
   * Cancels an existing Amazon FSx for Lustre data repository task if that task is in either the PENDING or EXECUTING state. When you cancel a task, Amazon FSx does the following.   Any files that FSx has already exported are not reverted.   FSx continues to export any files that are "in-flight" when the cancel operation is received.   FSx does not export any files that have not yet been exported.  
   */
  cancelDataRepositoryTask(callback?: (err: AWSError, data: FSx.Types.CancelDataRepositoryTaskResponse) => void): Request<FSx.Types.CancelDataRepositoryTaskResponse, AWSError>;
  /**
   * Creates a backup of an existing Amazon FSx for Windows File Server file system. Creating regular backups for your file system is a best practice that complements the replication that Amazon FSx for Windows File Server performs for your file system. It also enables you to restore from user modification of data. If a backup with the specified client request token exists, and the parameters match, this operation returns the description of the existing backup. If a backup specified client request token exists, and the parameters don't match, this operation returns IncompatibleParameterError. If a backup with the specified client request token doesn't exist, CreateBackup does the following:    Creates a new Amazon FSx backup with an assigned ID, and an initial lifecycle state of CREATING.   Returns the description of the backup.   By using the idempotent operation, you can retry a CreateBackup operation without the risk of creating an extra backup. This approach can be useful when an initial call fails in a way that makes it unclear whether a backup was created. If you use the same client request token and the initial call created a backup, the operation returns a successful result because all the parameters are the same. The CreateFileSystem operation returns while the backup's lifecycle state is still CREATING. You can check the file system creation status by calling the DescribeBackups operation, which returns the backup state along with other information.   
   */
  createBackup(params: FSx.Types.CreateBackupRequest, callback?: (err: AWSError, data: FSx.Types.CreateBackupResponse) => void): Request<FSx.Types.CreateBackupResponse, AWSError>;
  /**
   * Creates a backup of an existing Amazon FSx for Windows File Server file system. Creating regular backups for your file system is a best practice that complements the replication that Amazon FSx for Windows File Server performs for your file system. It also enables you to restore from user modification of data. If a backup with the specified client request token exists, and the parameters match, this operation returns the description of the existing backup. If a backup specified client request token exists, and the parameters don't match, this operation returns IncompatibleParameterError. If a backup with the specified client request token doesn't exist, CreateBackup does the following:    Creates a new Amazon FSx backup with an assigned ID, and an initial lifecycle state of CREATING.   Returns the description of the backup.   By using the idempotent operation, you can retry a CreateBackup operation without the risk of creating an extra backup. This approach can be useful when an initial call fails in a way that makes it unclear whether a backup was created. If you use the same client request token and the initial call created a backup, the operation returns a successful result because all the parameters are the same. The CreateFileSystem operation returns while the backup's lifecycle state is still CREATING. You can check the file system creation status by calling the DescribeBackups operation, which returns the backup state along with other information.   
   */
  createBackup(callback?: (err: AWSError, data: FSx.Types.CreateBackupResponse) => void): Request<FSx.Types.CreateBackupResponse, AWSError>;
  /**
   * Creates an Amazon FSx for Lustre data repository task. You use data repository tasks to perform bulk operations between your Amazon FSx file system and its linked data repository. An example of a data repository task is exporting any data and metadata changes, including POSIX metadata, to files, directories, and symbolic links (symlinks) from your FSx file system to its linked data repository. A CreateDataRepositoryTask operation will fail if a data repository is not linked to the FSx file system. To learn more about data repository tasks, see Using Data Repository Tasks. To learn more about linking a data repository to your file system, see Step 1: Create Your Amazon FSx for Lustre File System.
   */
  createDataRepositoryTask(params: FSx.Types.CreateDataRepositoryTaskRequest, callback?: (err: AWSError, data: FSx.Types.CreateDataRepositoryTaskResponse) => void): Request<FSx.Types.CreateDataRepositoryTaskResponse, AWSError>;
  /**
   * Creates an Amazon FSx for Lustre data repository task. You use data repository tasks to perform bulk operations between your Amazon FSx file system and its linked data repository. An example of a data repository task is exporting any data and metadata changes, including POSIX metadata, to files, directories, and symbolic links (symlinks) from your FSx file system to its linked data repository. A CreateDataRepositoryTask operation will fail if a data repository is not linked to the FSx file system. To learn more about data repository tasks, see Using Data Repository Tasks. To learn more about linking a data repository to your file system, see Step 1: Create Your Amazon FSx for Lustre File System.
   */
  createDataRepositoryTask(callback?: (err: AWSError, data: FSx.Types.CreateDataRepositoryTaskResponse) => void): Request<FSx.Types.CreateDataRepositoryTaskResponse, AWSError>;
  /**
   * Creates a new, empty Amazon FSx file system. If a file system with the specified client request token exists and the parameters match, CreateFileSystem returns the description of the existing file system. If a file system specified client request token exists and the parameters don't match, this call returns IncompatibleParameterError. If a file system with the specified client request token doesn't exist, CreateFileSystem does the following:    Creates a new, empty Amazon FSx file system with an assigned ID, and an initial lifecycle state of CREATING.   Returns the description of the file system.   This operation requires a client request token in the request that Amazon FSx uses to ensure idempotent creation. This means that calling the operation multiple times with the same client request token has no effect. By using the idempotent operation, you can retry a CreateFileSystem operation without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives success as long as the parameters are the same.  The CreateFileSystem call returns while the file system's lifecycle state is still CREATING. You can check the file-system creation status by calling the DescribeFileSystems operation, which returns the file system state along with other information. 
   */
  createFileSystem(params: FSx.Types.CreateFileSystemRequest, callback?: (err: AWSError, data: FSx.Types.CreateFileSystemResponse) => void): Request<FSx.Types.CreateFileSystemResponse, AWSError>;
  /**
   * Creates a new, empty Amazon FSx file system. If a file system with the specified client request token exists and the parameters match, CreateFileSystem returns the description of the existing file system. If a file system specified client request token exists and the parameters don't match, this call returns IncompatibleParameterError. If a file system with the specified client request token doesn't exist, CreateFileSystem does the following:    Creates a new, empty Amazon FSx file system with an assigned ID, and an initial lifecycle state of CREATING.   Returns the description of the file system.   This operation requires a client request token in the request that Amazon FSx uses to ensure idempotent creation. This means that calling the operation multiple times with the same client request token has no effect. By using the idempotent operation, you can retry a CreateFileSystem operation without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives success as long as the parameters are the same.  The CreateFileSystem call returns while the file system's lifecycle state is still CREATING. You can check the file-system creation status by calling the DescribeFileSystems operation, which returns the file system state along with other information. 
   */
  createFileSystem(callback?: (err: AWSError, data: FSx.Types.CreateFileSystemResponse) => void): Request<FSx.Types.CreateFileSystemResponse, AWSError>;
  /**
   * Creates a new Amazon FSx file system from an existing Amazon FSx for Windows File Server backup. If a file system with the specified client request token exists and the parameters match, this operation returns the description of the file system. If a client request token specified by the file system exists and the parameters don't match, this call returns IncompatibleParameterError. If a file system with the specified client request token doesn't exist, this operation does the following:   Creates a new Amazon FSx file system from backup with an assigned ID, and an initial lifecycle state of CREATING.   Returns the description of the file system.   Parameters like Active Directory, default share name, automatic backup, and backup settings default to the parameters of the file system that was backed up, unless overridden. You can explicitly supply other settings. By using the idempotent operation, you can retry a CreateFileSystemFromBackup call without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives success as long as the parameters are the same.  The CreateFileSystemFromBackup call returns while the file system's lifecycle state is still CREATING. You can check the file-system creation status by calling the DescribeFileSystems operation, which returns the file system state along with other information. 
   */
  createFileSystemFromBackup(params: FSx.Types.CreateFileSystemFromBackupRequest, callback?: (err: AWSError, data: FSx.Types.CreateFileSystemFromBackupResponse) => void): Request<FSx.Types.CreateFileSystemFromBackupResponse, AWSError>;
  /**
   * Creates a new Amazon FSx file system from an existing Amazon FSx for Windows File Server backup. If a file system with the specified client request token exists and the parameters match, this operation returns the description of the file system. If a client request token specified by the file system exists and the parameters don't match, this call returns IncompatibleParameterError. If a file system with the specified client request token doesn't exist, this operation does the following:   Creates a new Amazon FSx file system from backup with an assigned ID, and an initial lifecycle state of CREATING.   Returns the description of the file system.   Parameters like Active Directory, default share name, automatic backup, and backup settings default to the parameters of the file system that was backed up, unless overridden. You can explicitly supply other settings. By using the idempotent operation, you can retry a CreateFileSystemFromBackup call without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives success as long as the parameters are the same.  The CreateFileSystemFromBackup call returns while the file system's lifecycle state is still CREATING. You can check the file-system creation status by calling the DescribeFileSystems operation, which returns the file system state along with other information. 
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
   * Deletes a file system, deleting its contents. After deletion, the file system no longer exists, and its data is gone. Any existing automatic backups will also be deleted. By default, when you delete an Amazon FSx for Windows File Server file system, a final backup is created upon deletion. This final backup is not subject to the file system's retention policy, and must be manually deleted. The DeleteFileSystem action returns while the file system has the DELETING status. You can check the file system deletion status by calling the DescribeFileSystems action, which returns a list of file systems in your account. If you pass the file system ID for a deleted file system, the DescribeFileSystems returns a FileSystemNotFound error.  Deleting an Amazon FSx for Lustre file system will fail with a 400 BadRequest if a data repository task is in a PENDING or EXECUTING state.   The data in a deleted file system is also deleted and can't be recovered by any means. 
   */
  deleteFileSystem(params: FSx.Types.DeleteFileSystemRequest, callback?: (err: AWSError, data: FSx.Types.DeleteFileSystemResponse) => void): Request<FSx.Types.DeleteFileSystemResponse, AWSError>;
  /**
   * Deletes a file system, deleting its contents. After deletion, the file system no longer exists, and its data is gone. Any existing automatic backups will also be deleted. By default, when you delete an Amazon FSx for Windows File Server file system, a final backup is created upon deletion. This final backup is not subject to the file system's retention policy, and must be manually deleted. The DeleteFileSystem action returns while the file system has the DELETING status. You can check the file system deletion status by calling the DescribeFileSystems action, which returns a list of file systems in your account. If you pass the file system ID for a deleted file system, the DescribeFileSystems returns a FileSystemNotFound error.  Deleting an Amazon FSx for Lustre file system will fail with a 400 BadRequest if a data repository task is in a PENDING or EXECUTING state.   The data in a deleted file system is also deleted and can't be recovered by any means. 
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
   * Returns the description of specific Amazon FSx for Lustre data repository tasks, if one or more TaskIds values are provided in the request, or if filters are used in the request. You can use filters to narrow the response to include just tasks for specific file systems, or tasks in a specific lifecycle state. Otherwise, it returns all data repository tasks owned by your AWS account in the AWS Region of the endpoint that you're calling. When retrieving all tasks, you can paginate the response by using the optional MaxResults parameter to limit the number of tasks returned in a response. If more tasks remain, Amazon FSx returns a NextToken value in the response. In this case, send a later request with the NextToken request parameter set to the value of NextToken from the last response.
   */
  describeDataRepositoryTasks(params: FSx.Types.DescribeDataRepositoryTasksRequest, callback?: (err: AWSError, data: FSx.Types.DescribeDataRepositoryTasksResponse) => void): Request<FSx.Types.DescribeDataRepositoryTasksResponse, AWSError>;
  /**
   * Returns the description of specific Amazon FSx for Lustre data repository tasks, if one or more TaskIds values are provided in the request, or if filters are used in the request. You can use filters to narrow the response to include just tasks for specific file systems, or tasks in a specific lifecycle state. Otherwise, it returns all data repository tasks owned by your AWS account in the AWS Region of the endpoint that you're calling. When retrieving all tasks, you can paginate the response by using the optional MaxResults parameter to limit the number of tasks returned in a response. If more tasks remain, Amazon FSx returns a NextToken value in the response. In this case, send a later request with the NextToken request parameter set to the value of NextToken from the last response.
   */
  describeDataRepositoryTasks(callback?: (err: AWSError, data: FSx.Types.DescribeDataRepositoryTasksResponse) => void): Request<FSx.Types.DescribeDataRepositoryTasksResponse, AWSError>;
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
  export interface ActiveDirectoryBackupAttributes {
    /**
     * The fully qualified domain name of the self-managed AD directory.
     */
    DomainName?: ActiveDirectoryFullyQualifiedName;
    /**
     * The ID of the AWS Managed Microsoft Active Directory instance to which the file system is joined.
     */
    ActiveDirectoryId?: DirectoryId;
  }
  export type ActiveDirectoryFullyQualifiedName = string;
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
     * The ID of the AWS Key Management Service (AWS KMS) key used to encrypt this backup of the Amazon FSx for Windows file system's data at rest. Amazon FSx for Lustre does not support KMS encryption.
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
    /**
     * The configuration of the self-managed Microsoft Active Directory (AD) to which the Windows File Server instance is joined.
     */
    DirectoryInformation?: ActiveDirectoryBackupAttributes;
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
  export interface CancelDataRepositoryTaskRequest {
    /**
     * Specifies the data repository task to cancel.
     */
    TaskId: TaskId;
  }
  export interface CancelDataRepositoryTaskResponse {
    /**
     * The lifecycle status of the data repository task, as follows:    PENDING - Amazon FSx has not started the task.    EXECUTING - Amazon FSx is processing the task.    FAILED - Amazon FSx was not able to complete the task. For example, there may be files the task failed to process. The DataRepositoryTaskFailureDetails property provides more information about task failures.    SUCCEEDED - FSx completed the task successfully.    CANCELED - Amazon FSx canceled the task and it did not complete.    CANCELING - FSx is in process of canceling the task.  
     */
    Lifecycle?: DataRepositoryTaskLifecycle;
    /**
     * The ID of the task being canceled.
     */
    TaskId?: TaskId;
  }
  export type ClientRequestToken = string;
  export interface CompletionReport {
    /**
     * Set Enabled to True to generate a CompletionReport when the task completes. If set to true, then you need to provide a report Scope, Path, and Format. Set Enabled to False if you do not want a CompletionReport generated when the task completes.
     */
    Enabled: Flag;
    /**
     * Required if Enabled is set to true. Specifies the location of the report on the file system's linked S3 data repository. An absolute path that defines where the completion report will be stored in the destination location. The Path you provide must be located within the file system’s ExportPath. An example Path value is "s3://myBucket/myExportPath/optionalPrefix". The report provides the following information for each file in the report: FilePath, FileStatus, and ErrorCode. To learn more about a file system's ExportPath, see . 
     */
    Path?: ArchivePath;
    /**
     * Required if Enabled is set to true. Specifies the format of the CompletionReport. REPORT_CSV_20191124 is the only format currently supported. When Format is set to REPORT_CSV_20191124, the CompletionReport is provided in CSV format, and is delivered to {path}/task-{id}/failures.csv. 
     */
    Format?: ReportFormat;
    /**
     * Required if Enabled is set to true. Specifies the scope of the CompletionReport; FAILED_FILES_ONLY is the only scope currently supported. When Scope is set to FAILED_FILES_ONLY, the CompletionReport only contains information about files that the data repository task failed to process.
     */
    Scope?: ReportScope;
  }
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
  export interface CreateDataRepositoryTaskRequest {
    /**
     * Specifies the type of data repository task to create.
     */
    Type: DataRepositoryTaskType;
    /**
     * (Optional) The path or paths on the Amazon FSx file system to use when the data repository task is processed. The default path is the file system root directory.
     */
    Paths?: DataRepositoryTaskPaths;
    FileSystemId: FileSystemId;
    /**
     * Defines whether or not Amazon FSx provides a CompletionReport once the task has completed. A CompletionReport provides a detailed report on the files that Amazon FSx processed that meet the criteria specified by the Scope parameter. 
     */
    Report: CompletionReport;
    ClientRequestToken?: ClientRequestToken;
    Tags?: Tags;
  }
  export interface CreateDataRepositoryTaskResponse {
    /**
     * The description of the data repository task that you just created.
     */
    DataRepositoryTask?: DataRepositoryTask;
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
     * (Optional) The path to the Amazon S3 bucket (including the optional prefix) that you're using as the data repository for your Amazon FSx for Lustre file system. The root of your FSx for Lustre file system will be mapped to the root of the Amazon S3 bucket you select. An example is s3://import-bucket/optional-prefix. If you specify a prefix after the Amazon S3 bucket name, only object keys with that prefix are loaded into the file system.
     */
    ImportPath?: ArchivePath;
    /**
     * (Optional) The path in Amazon S3 where the root of your Amazon FSx file system is exported. The path must use the same Amazon S3 bucket as specified in ImportPath. You can provide an optional prefix to which new and changed data is to be exported from your Amazon FSx for Lustre file system. If an ExportPath value is not provided, Amazon FSx sets a default export path, s3://import-bucket/FSxLustre[creation-timestamp]. The timestamp is in UTC format, for example s3://import-bucket/FSxLustre20181105T222312Z. The Amazon S3 export bucket must be the same as the import bucket specified by ImportPath. If you only specify a bucket name, such as s3://import-bucket, you get a 1:1 mapping of file system objects to S3 bucket objects. This mapping means that the input data in S3 is overwritten on export. If you provide a custom prefix in the export path, such as s3://import-bucket/[custom-optional-prefix], Amazon FSx exports the contents of your file system to that export prefix in the Amazon S3 bucket.
     */
    ExportPath?: ArchivePath;
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
     * The type of Amazon FSx file system to create.
     */
    FileSystemType: FileSystemType;
    /**
     * The storage capacity of the file system being created. For Windows file systems, valid values are 32 GiB - 65,536 GiB. For Lustre file systems, valid values are 1,200, 2,400, 3,600, then continuing in increments of 3600 GiB.
     */
    StorageCapacity: StorageCapacity;
    /**
     * Specifies the IDs of the subnets that the file system will be accessible from. For Windows MULTI_AZ_1 file system deployment types, provide exactly two subnet IDs, one for the preferred file server and one for the standy file server. You specify one of these subnets as the preferred subnet using the WindowsConfiguration &gt; PreferredSubnetID property. For Windows SINGLE_AZ_1 file system deployment types and Lustre file systems, provide exactly one subnet ID. The file server is launched in that subnet's Availability Zone.
     */
    SubnetIds: SubnetIds;
    /**
     * A list of IDs specifying the security groups to apply to all network interfaces created for file system access. This list isn't returned in later requests to describe the file system.
     */
    SecurityGroupIds?: SecurityGroupIds;
    /**
     * The tags to apply to the file system being created. The key value of the Name tag appears in the console as the file system name.
     */
    Tags?: Tags;
    KmsKeyId?: KmsKeyId;
    /**
     * The Microsoft Windows configuration for the file system being created. This value is required if FileSystemType is set to WINDOWS.
     */
    WindowsConfiguration?: CreateFileSystemWindowsConfiguration;
    LustreConfiguration?: CreateFileSystemLustreConfiguration;
  }
  export interface CreateFileSystemResponse {
    /**
     * The configuration of the file system that was created.
     */
    FileSystem?: FileSystem;
  }
  export interface CreateFileSystemWindowsConfiguration {
    /**
     * The ID for an existing AWS Managed Microsoft Active Directory (AD) instance that the file system should join when it's created.
     */
    ActiveDirectoryId?: DirectoryId;
    SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfiguration;
    /**
     * Specifies the file system deployment type, valid values are the following:   MULTI_AZ_1 - Deploys a high availability file system that is configured for Multi-AZ redundancy to tolerate temporary Availability Zone (AZ) unavailability. You can only deploy a Multi-AZ file system in AWS Regions that have a minimum of three Availability Zones.   SINGLE_AZ_1 - (Default) Choose to deploy a file system that is configured for single AZ redundancy.   To learn more about high availability Multi-AZ file systems, see  High Availability for Amazon FSx for Windows File Server.
     */
    DeploymentType?: WindowsDeploymentType;
    /**
     * Required when DeploymentType is set to MULTI_AZ_1. This specifies the subnet in which you want the preferred file server to be located. For in-AWS applications, we recommend that you launch your clients in the same Availability Zone (AZ) as your preferred file server to reduce cross-AZ data transfer costs and minimize latency. 
     */
    PreferredSubnetId?: SubnetId;
    /**
     * The throughput of an Amazon FSx file system, measured in megabytes per second, in 2 to the nth increments, between 2^3 (8) and 2^11 (2048).
     */
    ThroughputCapacity: MegabytesPerSecond;
    /**
     * The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC time zone.
     */
    WeeklyMaintenanceStartTime?: WeeklyTime;
    /**
     * The preferred time to take daily automatic backups, formatted HH:MM in the UTC time zone.
     */
    DailyAutomaticBackupStartTime?: DailyTime;
    /**
     * The number of days to retain automatic backups. The default is to retain backups for 7 days. Setting this value to 0 disables the creation of automatic backups. The maximum retention period for backups is 35 days.
     */
    AutomaticBackupRetentionDays?: AutomaticBackupRetentionDays;
    /**
     * A boolean flag indicating whether tags for the file system should be copied to backups. This value defaults to false. If it's set to true, all tags for the file system are copied to all automatic and user-initiated backups where the user doesn't specify tags. If this value is true, and you specify one or more tags, only the specified tags are copied to backups.
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
     * The export path to the Amazon S3 bucket (and prefix) that you are using to store new and changed Lustre file system files in S3.
     */
    ExportPath?: ArchivePath;
    /**
     * For files imported from a data repository, this value determines the stripe count and maximum amount of data per file (in MiB) stored on a single physical disk. The maximum number of disks that a single file can be striped across is limited by the total number of disks that make up the file system. The default chunk size is 1,024 MiB (1 GiB) and can go as high as 512,000 MiB (500 GiB). Amazon S3 objects have a maximum size of 5 TB.
     */
    ImportedFileChunkSize?: Megabytes;
  }
  export interface DataRepositoryTask {
    /**
     * The system-generated, unique 17-digit ID of the data repository task.
     */
    TaskId: TaskId;
    /**
     * The lifecycle status of the data repository task, as follows:    PENDING - Amazon FSx has not started the task.    EXECUTING - Amazon FSx is processing the task.    FAILED - Amazon FSx was not able to complete the task. For example, there may be files the task failed to process. The DataRepositoryTaskFailureDetails property provides more information about task failures.    SUCCEEDED - FSx completed the task successfully.    CANCELED - Amazon FSx canceled the task and it did not complete.    CANCELING - FSx is in process of canceling the task.    You cannot delete an FSx for Lustre file system if there are data repository tasks for the file system in the PENDING or EXECUTING states. Please retry when the data repository task is finished (with a status of CANCELED, SUCCEEDED, or FAILED). You can use the DescribeDataRepositoryTask action to monitor the task status. Contact the FSx team if you need to delete your file system immediately. 
     */
    Lifecycle: DataRepositoryTaskLifecycle;
    /**
     * The type of data repository task; EXPORT_TO_REPOSITORY is the only type currently supported.
     */
    Type: DataRepositoryTaskType;
    CreationTime: CreationTime;
    /**
     * The time that Amazon FSx began processing the task.
     */
    StartTime?: StartTime;
    /**
     * The time that Amazon FSx completed processing the task, populated after the task is complete.
     */
    EndTime?: EndTime;
    ResourceARN?: ResourceARN;
    Tags?: Tags;
    FileSystemId: FileSystemId;
    /**
     * An array of paths on the Amazon FSx for Lustre file system that specify the data for the data repository task to process. For example, in an EXPORT_TO_REPOSITORY task, the paths specify which data to export to the linked data repository. (Default) If Paths is not specified, Amazon FSx uses the file system root directory.
     */
    Paths?: DataRepositoryTaskPaths;
    /**
     * Failure message describing why the task failed, it is populated only when Lifecycle is set to FAILED.
     */
    FailureDetails?: DataRepositoryTaskFailureDetails;
    /**
     * Provides the status of the number of files that the task has processed successfully and failed to process.
     */
    Status?: DataRepositoryTaskStatus;
    Report?: CompletionReport;
  }
  export interface DataRepositoryTaskFailureDetails {
    Message?: ErrorMessage;
  }
  export interface DataRepositoryTaskFilter {
    /**
     * Name of the task property to use in filtering the tasks returned in the response.   Use file-system-id to retrieve data repository tasks for specific file systems.   Use task-lifecycle to retrieve data repository tasks with one or more specific lifecycle states, as follows: CANCELED, EXECUTING, FAILED, PENDING, and SUCCEEDED.  
     */
    Name?: DataRepositoryTaskFilterName;
    /**
     * Use Values to include the specific file system IDs and task lifecycle states for the filters you are using.
     */
    Values?: DataRepositoryTaskFilterValues;
  }
  export type DataRepositoryTaskFilterName = "file-system-id"|"task-lifecycle"|string;
  export type DataRepositoryTaskFilterValue = string;
  export type DataRepositoryTaskFilterValues = DataRepositoryTaskFilterValue[];
  export type DataRepositoryTaskFilters = DataRepositoryTaskFilter[];
  export type DataRepositoryTaskLifecycle = "PENDING"|"EXECUTING"|"FAILED"|"SUCCEEDED"|"CANCELED"|"CANCELING"|string;
  export type DataRepositoryTaskPath = string;
  export type DataRepositoryTaskPaths = DataRepositoryTaskPath[];
  export interface DataRepositoryTaskStatus {
    /**
     * The total number of files that the task will process. While a task is executing, the sum of SucceededCount plus FailedCount may not equal TotalCount. When the task is complete, TotalCount equals the sum of SucceededCount plus FailedCount.
     */
    TotalCount?: TotalCount;
    /**
     * A running total of the number of files that the task has successfully processed.
     */
    SucceededCount?: SucceededCount;
    /**
     * A running total of the number of files that the task failed to process.
     */
    FailedCount?: FailedCount;
    /**
     * The time at which the task status was last updated.
     */
    LastUpdatedTime?: LastUpdatedTime;
  }
  export type DataRepositoryTaskType = "EXPORT_TO_REPOSITORY"|string;
  export type DataRepositoryTasks = DataRepositoryTask[];
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
  export interface DescribeDataRepositoryTasksRequest {
    /**
     * (Optional) IDs of the tasks whose descriptions you want to retrieve (String).
     */
    TaskIds?: TaskIds;
    /**
     * (Optional) You can use filters to narrow the DescribeDataRepositoryTasks response to include just tasks for specific file systems, or tasks in a specific lifecycle state.
     */
    Filters?: DataRepositoryTaskFilters;
    MaxResults?: MaxResults;
    NextToken?: NextToken;
  }
  export interface DescribeDataRepositoryTasksResponse {
    /**
     * The collection of data repository task descriptions returned.
     */
    DataRepositoryTasks?: DataRepositoryTasks;
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
  export type DirectoryPassword = string;
  export type DirectoryUserName = string;
  export type DnsIps = IpAddress[];
  export type EndTime = Date;
  export type ErrorMessage = string;
  export type FailedCount = number;
  export interface FileSystem {
    /**
     * The AWS account that created the file system. If the file system was created by an AWS Identity and Access Management (IAM) user, the AWS account to which the IAM user belongs is the owner.
     */
    OwnerId?: AWSAccountId;
    /**
     * The time that the file system was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time.
     */
    CreationTime?: CreationTime;
    /**
     * The system-generated, unique 17-digit ID of the file system.
     */
    FileSystemId?: FileSystemId;
    /**
     * The type of Amazon FSx file system, either LUSTRE or WINDOWS.
     */
    FileSystemType?: FileSystemType;
    /**
     * The lifecycle status of the file system, following are the possible values and what they mean:    AVAILABLE - The file system is in a healthy state, and is reachable and available for use.    CREATING - Amazon FSx is creating the new file system.    DELETING - Amazon FSx is deleting an existing file system.    FAILED - An existing file system has experienced an unrecoverable failure. When creating a new file system, Amazon FSx was unable to create the file system.    MISCONFIGURED indicates that the file system is in a failed but recoverable state.    UPDATING indicates that the file system is undergoing a customer initiated update.  
     */
    Lifecycle?: FileSystemLifecycle;
    FailureDetails?: FileSystemFailureDetails;
    /**
     * The storage capacity of the file system in gigabytes (GB).
     */
    StorageCapacity?: StorageCapacity;
    /**
     * The ID of the primary VPC for the file system.
     */
    VpcId?: VpcId;
    /**
     * The ID of the subnet to contain the endpoint for the file system. One and only one is supported. The file system is launched in the Availability Zone associated with this subnet.
     */
    SubnetIds?: SubnetIds;
    /**
     * The IDs of the elastic network interface from which a specific file system is accessible. The elastic network interface is automatically created in the same VPC that the Amazon FSx file system was created in. For more information, see Elastic Network Interfaces in the Amazon EC2 User Guide.  For an Amazon FSx for Windows File Server file system, you can have one network interface ID. For an Amazon FSx for Lustre file system, you can have more than one.
     */
    NetworkInterfaceIds?: NetworkInterfaceIds;
    /**
     * The DNS name for the file system.
     */
    DNSName?: DNSName;
    /**
     * The ID of the AWS Key Management Service (AWS KMS) key used to encrypt the file system's data for an Amazon FSx for Windows File Server file system. Amazon FSx for Lustre does not support KMS encryption. 
     */
    KmsKeyId?: KmsKeyId;
    /**
     * The Amazon Resource Name (ARN) for the file system resource.
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
  export type FileSystemAdministratorsGroupName = string;
  export interface FileSystemFailureDetails {
    /**
     * A message describing any failures that occurred during file system creation.
     */
    Message?: ErrorMessage;
  }
  export type FileSystemId = string;
  export type FileSystemIds = FileSystemId[];
  export type FileSystemLifecycle = "AVAILABLE"|"CREATING"|"FAILED"|"DELETING"|"MISCONFIGURED"|"UPDATING"|string;
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
  export type IpAddress = string;
  export type KmsKeyId = string;
  export type LastUpdatedTime = Date;
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
  export type OrganizationalUnitDistinguishedName = string;
  export type ProgressPercent = number;
  export type ReportFormat = "REPORT_CSV_20191124"|string;
  export type ReportScope = "FAILED_FILES_ONLY"|string;
  export type ResourceARN = string;
  export type SecurityGroupId = string;
  export type SecurityGroupIds = SecurityGroupId[];
  export interface SelfManagedActiveDirectoryAttributes {
    /**
     * The fully qualified domain name of the self-managed AD directory.
     */
    DomainName?: ActiveDirectoryFullyQualifiedName;
    /**
     * The fully qualified distinguished name of the organizational unit within the self-managed AD directory to which the Windows File Server instance is joined.
     */
    OrganizationalUnitDistinguishedName?: OrganizationalUnitDistinguishedName;
    /**
     * The name of the domain group whose members have administrative privileges for the FSx file system.
     */
    FileSystemAdministratorsGroup?: FileSystemAdministratorsGroupName;
    /**
     * The user name for the service account on your self-managed AD domain that FSx uses to join to your AD domain.
     */
    UserName?: DirectoryUserName;
    /**
     * A list of up to two IP addresses of DNS servers or domain controllers in the self-managed AD directory.
     */
    DnsIps?: DnsIps;
  }
  export interface SelfManagedActiveDirectoryConfiguration {
    /**
     * The fully qualified domain name of the self-managed AD directory, such as corp.example.com.
     */
    DomainName: ActiveDirectoryFullyQualifiedName;
    /**
     * (Optional) The fully qualified distinguished name of the organizational unit within your self-managed AD directory that the Windows File Server instance will join. Amazon FSx only accepts OU as the direct parent of the file system. An example is OU=FSx,DC=yourdomain,DC=corp,DC=com. To learn more, see RFC 2253. If none is provided, the FSx file system is created in the default location of your self-managed AD directory.   Only Organizational Unit (OU) objects can be the direct parent of the file system that you're creating. 
     */
    OrganizationalUnitDistinguishedName?: OrganizationalUnitDistinguishedName;
    /**
     * (Optional) The name of the domain group whose members are granted administrative privileges for the file system. Administrative privileges include taking ownership of files and folders, setting audit controls (audit ACLs) on files and folders, and administering the file system remotely by using the FSx Remote PowerShell. The group that you specify must already exist in your domain. If you don't provide one, your AD domain's Domain Admins group is used.
     */
    FileSystemAdministratorsGroup?: FileSystemAdministratorsGroupName;
    /**
     * The user name for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain. This account must have the permission to join computers to the domain in the organizational unit provided in OrganizationalUnitDistinguishedName, or in the default location of your AD domain.
     */
    UserName: DirectoryUserName;
    /**
     * The password for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain.
     */
    Password: DirectoryPassword;
    /**
     * A list of up to two IP addresses of DNS servers or domain controllers in the self-managed AD directory. The IP addresses need to be either in the same VPC CIDR range as the one in which your Amazon FSx file system is being created, or in the private IP version 4 (IPv4) address ranges, as specified in RFC 1918:   10.0.0.0 - 10.255.255.255 (10/8 prefix)   172.16.0.0 - 172.31.255.255 (172.16/12 prefix)   192.168.0.0 - 192.168.255.255 (192.168/16 prefix)  
     */
    DnsIps: DnsIps;
  }
  export interface SelfManagedActiveDirectoryConfigurationUpdates {
    /**
     * The user name for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain. This account must have the permission to join computers to the domain in the organizational unit provided in OrganizationalUnitDistinguishedName.
     */
    UserName?: DirectoryUserName;
    /**
     * The password for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain.
     */
    Password?: DirectoryPassword;
    /**
     * A list of up to two IP addresses of DNS servers or domain controllers in the self-managed AD directory.
     */
    DnsIps?: DnsIps;
  }
  export type StartTime = Date;
  export type StorageCapacity = number;
  export type SubnetId = string;
  export type SubnetIds = SubnetId[];
  export type SucceededCount = number;
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
  export type TaskId = string;
  export type TaskIds = TaskId[];
  export type TotalCount = number;
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
     * The configuration update for this Microsoft Windows file system. The only supported options are for backup and maintenance and for self-managed Active Directory configuration.
     */
    WindowsConfiguration?: UpdateFileSystemWindowsConfiguration;
    LustreConfiguration?: UpdateFileSystemLustreConfiguration;
  }
  export interface UpdateFileSystemResponse {
    /**
     * A description of the file system that was updated.
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
    /**
     * The configuration Amazon FSx uses to join the Windows File Server instance to the self-managed Microsoft AD directory.
     */
    SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfigurationUpdates;
  }
  export type VpcId = string;
  export type WeeklyTime = string;
  export type WindowsDeploymentType = "MULTI_AZ_1"|"SINGLE_AZ_1"|string;
  export interface WindowsFileSystemConfiguration {
    /**
     * The ID for an existing Microsoft Active Directory instance that the file system should join when it's created.
     */
    ActiveDirectoryId?: DirectoryId;
    SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryAttributes;
    /**
     * Specifies the file system deployment type, valid values are the following:    MULTI_AZ_1 - Specifies a high availability file system that is configured for Multi-AZ redundancy to tolerate temporary Availability Zone (AZ) unavailability.    SINGLE_AZ_1 - (Default) Specifies a file system that is configured for single AZ redundancy.  
     */
    DeploymentType?: WindowsDeploymentType;
    /**
     * For MULTI_AZ_1 deployment types, use this endpoint when performing administrative tasks on the file system using Amazon FSx Remote PowerShell. For SINGLE_AZ_1 deployment types, this is the DNS name of the file system. This endpoint is temporarily unavailable when the file system is undergoing maintenance.
     */
    RemoteAdministrationEndpoint?: DNSName;
    /**
     * For MULTI_AZ_1 deployment types, it specifies the ID of the subnet where the preferred file server is located. Must be one of the two subnet IDs specified in SubnetIds property. Amazon FSx serves traffic from this subnet except in the event of a failover to the secondary file server. For SINGLE_AZ_1 deployment types, this value is the same as that for SubnetIDs.
     */
    PreferredSubnetId?: SubnetId;
    /**
     * For MULTI_AZ_1 deployment types, the IP address of the primary, or preferred, file server. Use this IP address when mounting the file system on Linux SMB clients or Windows SMB clients that are not joined to a Microsoft Active Directory. Applicable for both SINGLE_AZ_1 and MULTI_AZ_1 deployment types. This IP address is temporarily unavailable when the file system is undergoing maintenance. For Linux and Windows SMB clients that are joined to an Active Directory, use the file system's DNSName instead. For more information and instruction on mapping and mounting file shares, see https://docs.aws.amazon.com/fsx/latest/WindowsGuide/accessing-file-shares.html.
     */
    PreferredFileServerIp?: IpAddress;
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
