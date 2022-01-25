import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class FSx extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: FSx.Types.ClientConfiguration)
  config: Config & FSx.Types.ClientConfiguration;
  /**
   * Use this action to associate one or more Domain Name Server (DNS) aliases with an existing Amazon FSx for Windows File Server file system. A file system can have a maximum of 50 DNS aliases associated with it at any one time. If you try to associate a DNS alias that is already associated with the file system, FSx takes no action on that alias in the request. For more information, see Working with DNS Aliases and Walkthrough 5: Using DNS aliases to access your file system, including additional steps you must take to be able to access your file system using a DNS alias. The system response shows the DNS aliases that Amazon FSx is attempting to associate with the file system. Use the API operation to monitor the status of the aliases Amazon FSx is associating with the file system.
   */
  associateFileSystemAliases(params: FSx.Types.AssociateFileSystemAliasesRequest, callback?: (err: AWSError, data: FSx.Types.AssociateFileSystemAliasesResponse) => void): Request<FSx.Types.AssociateFileSystemAliasesResponse, AWSError>;
  /**
   * Use this action to associate one or more Domain Name Server (DNS) aliases with an existing Amazon FSx for Windows File Server file system. A file system can have a maximum of 50 DNS aliases associated with it at any one time. If you try to associate a DNS alias that is already associated with the file system, FSx takes no action on that alias in the request. For more information, see Working with DNS Aliases and Walkthrough 5: Using DNS aliases to access your file system, including additional steps you must take to be able to access your file system using a DNS alias. The system response shows the DNS aliases that Amazon FSx is attempting to associate with the file system. Use the API operation to monitor the status of the aliases Amazon FSx is associating with the file system.
   */
  associateFileSystemAliases(callback?: (err: AWSError, data: FSx.Types.AssociateFileSystemAliasesResponse) => void): Request<FSx.Types.AssociateFileSystemAliasesResponse, AWSError>;
  /**
   * Cancels an existing Amazon FSx for Lustre data repository task if that task is in either the PENDING or EXECUTING state. When you cancel a task, Amazon FSx does the following.   Any files that FSx has already exported are not reverted.   FSx continues to export any files that are "in-flight" when the cancel operation is received.   FSx does not export any files that have not yet been exported.  
   */
  cancelDataRepositoryTask(params: FSx.Types.CancelDataRepositoryTaskRequest, callback?: (err: AWSError, data: FSx.Types.CancelDataRepositoryTaskResponse) => void): Request<FSx.Types.CancelDataRepositoryTaskResponse, AWSError>;
  /**
   * Cancels an existing Amazon FSx for Lustre data repository task if that task is in either the PENDING or EXECUTING state. When you cancel a task, Amazon FSx does the following.   Any files that FSx has already exported are not reverted.   FSx continues to export any files that are "in-flight" when the cancel operation is received.   FSx does not export any files that have not yet been exported.  
   */
  cancelDataRepositoryTask(callback?: (err: AWSError, data: FSx.Types.CancelDataRepositoryTaskResponse) => void): Request<FSx.Types.CancelDataRepositoryTaskResponse, AWSError>;
  /**
   * Copies an existing backup within the same Amazon Web Services account to another Amazon Web Services Region (cross-Region copy) or within the same Amazon Web Services Region (in-Region copy). You can have up to five backup copy requests in progress to a single destination Region per account. You can use cross-Region backup copies for cross-Region disaster recovery. You can periodically take backups and copy them to another Region so that in the event of a disaster in the primary Region, you can restore from backup and recover availability quickly in the other Region. You can make cross-Region copies only within your Amazon Web Services partition. A partition is a grouping of Regions. Amazon Web Services currently has three partitions: aws (Standard Regions), aws-cn (China Regions), and aws-us-gov (Amazon Web Services GovCloud [US] Regions). You can also use backup copies to clone your file dataset to another Region or within the same Region. You can use the SourceRegion parameter to specify the Amazon Web Services Region from which the backup will be copied. For example, if you make the call from the us-west-1 Region and want to copy a backup from the us-east-2 Region, you specify us-east-2 in the SourceRegion parameter to make a cross-Region copy. If you don't specify a Region, the backup copy is created in the same Region where the request is sent from (in-Region copy). For more information about creating backup copies, see  Copying backups in the Amazon FSx for Windows User Guide, Copying backups in the Amazon FSx for Lustre User Guide, and Copying backups in the Amazon FSx for OpenZFS User Guide.
   */
  copyBackup(params: FSx.Types.CopyBackupRequest, callback?: (err: AWSError, data: FSx.Types.CopyBackupResponse) => void): Request<FSx.Types.CopyBackupResponse, AWSError>;
  /**
   * Copies an existing backup within the same Amazon Web Services account to another Amazon Web Services Region (cross-Region copy) or within the same Amazon Web Services Region (in-Region copy). You can have up to five backup copy requests in progress to a single destination Region per account. You can use cross-Region backup copies for cross-Region disaster recovery. You can periodically take backups and copy them to another Region so that in the event of a disaster in the primary Region, you can restore from backup and recover availability quickly in the other Region. You can make cross-Region copies only within your Amazon Web Services partition. A partition is a grouping of Regions. Amazon Web Services currently has three partitions: aws (Standard Regions), aws-cn (China Regions), and aws-us-gov (Amazon Web Services GovCloud [US] Regions). You can also use backup copies to clone your file dataset to another Region or within the same Region. You can use the SourceRegion parameter to specify the Amazon Web Services Region from which the backup will be copied. For example, if you make the call from the us-west-1 Region and want to copy a backup from the us-east-2 Region, you specify us-east-2 in the SourceRegion parameter to make a cross-Region copy. If you don't specify a Region, the backup copy is created in the same Region where the request is sent from (in-Region copy). For more information about creating backup copies, see  Copying backups in the Amazon FSx for Windows User Guide, Copying backups in the Amazon FSx for Lustre User Guide, and Copying backups in the Amazon FSx for OpenZFS User Guide.
   */
  copyBackup(callback?: (err: AWSError, data: FSx.Types.CopyBackupResponse) => void): Request<FSx.Types.CopyBackupResponse, AWSError>;
  /**
   * Creates a backup of an existing Amazon FSx for Windows File Server file system, Amazon FSx for Lustre file system, Amazon FSx for NetApp ONTAP volume, or Amazon FSx for OpenZFS file system. We recommend creating regular backups so that you can restore a file system or volume from a backup if an issue arises with the original file system or volume. For Amazon FSx for Lustre file systems, you can create a backup only for file systems that have the following configuration:   A Persistent deployment type   Are not linked to a data repository   For more information about backups, see the following:   For Amazon FSx for Lustre, see Working with FSx for Lustre backups.   For Amazon FSx for Windows, see Working with FSx for Windows backups.   For Amazon FSx for NetApp ONTAP, see Working with FSx for NetApp ONTAP backups.   For Amazon FSx for OpenZFS, see Working with FSx for OpenZFS backups.   If a backup with the specified client request token exists and the parameters match, this operation returns the description of the existing backup. If a backup with the specified client request token exists and the parameters don't match, this operation returns IncompatibleParameterError. If a backup with the specified client request token doesn't exist, CreateBackup does the following:    Creates a new Amazon FSx backup with an assigned ID, and an initial lifecycle state of CREATING.   Returns the description of the backup.   By using the idempotent operation, you can retry a CreateBackup operation without the risk of creating an extra backup. This approach can be useful when an initial call fails in a way that makes it unclear whether a backup was created. If you use the same client request token and the initial call created a backup, the operation returns a successful result because all the parameters are the same. The CreateBackup operation returns while the backup's lifecycle state is still CREATING. You can check the backup creation status by calling the DescribeBackups operation, which returns the backup state along with other information.
   */
  createBackup(params: FSx.Types.CreateBackupRequest, callback?: (err: AWSError, data: FSx.Types.CreateBackupResponse) => void): Request<FSx.Types.CreateBackupResponse, AWSError>;
  /**
   * Creates a backup of an existing Amazon FSx for Windows File Server file system, Amazon FSx for Lustre file system, Amazon FSx for NetApp ONTAP volume, or Amazon FSx for OpenZFS file system. We recommend creating regular backups so that you can restore a file system or volume from a backup if an issue arises with the original file system or volume. For Amazon FSx for Lustre file systems, you can create a backup only for file systems that have the following configuration:   A Persistent deployment type   Are not linked to a data repository   For more information about backups, see the following:   For Amazon FSx for Lustre, see Working with FSx for Lustre backups.   For Amazon FSx for Windows, see Working with FSx for Windows backups.   For Amazon FSx for NetApp ONTAP, see Working with FSx for NetApp ONTAP backups.   For Amazon FSx for OpenZFS, see Working with FSx for OpenZFS backups.   If a backup with the specified client request token exists and the parameters match, this operation returns the description of the existing backup. If a backup with the specified client request token exists and the parameters don't match, this operation returns IncompatibleParameterError. If a backup with the specified client request token doesn't exist, CreateBackup does the following:    Creates a new Amazon FSx backup with an assigned ID, and an initial lifecycle state of CREATING.   Returns the description of the backup.   By using the idempotent operation, you can retry a CreateBackup operation without the risk of creating an extra backup. This approach can be useful when an initial call fails in a way that makes it unclear whether a backup was created. If you use the same client request token and the initial call created a backup, the operation returns a successful result because all the parameters are the same. The CreateBackup operation returns while the backup's lifecycle state is still CREATING. You can check the backup creation status by calling the DescribeBackups operation, which returns the backup state along with other information.
   */
  createBackup(callback?: (err: AWSError, data: FSx.Types.CreateBackupResponse) => void): Request<FSx.Types.CreateBackupResponse, AWSError>;
  /**
   * Creates an Amazon FSx for Lustre data repository association (DRA). A data repository association is a link between a directory on the file system and an Amazon S3 bucket or prefix. You can have a maximum of 8 data repository associations on a file system. Data repository associations are supported only for file systems with the Persistent_2 deployment type. Each data repository association must have a unique Amazon FSx file system directory and a unique S3 bucket or prefix associated with it. You can configure a data repository association for automatic import only, for automatic export only, or for both. To learn more about linking a data repository to your file system, see Linking your file system to an S3 bucket.
   */
  createDataRepositoryAssociation(params: FSx.Types.CreateDataRepositoryAssociationRequest, callback?: (err: AWSError, data: FSx.Types.CreateDataRepositoryAssociationResponse) => void): Request<FSx.Types.CreateDataRepositoryAssociationResponse, AWSError>;
  /**
   * Creates an Amazon FSx for Lustre data repository association (DRA). A data repository association is a link between a directory on the file system and an Amazon S3 bucket or prefix. You can have a maximum of 8 data repository associations on a file system. Data repository associations are supported only for file systems with the Persistent_2 deployment type. Each data repository association must have a unique Amazon FSx file system directory and a unique S3 bucket or prefix associated with it. You can configure a data repository association for automatic import only, for automatic export only, or for both. To learn more about linking a data repository to your file system, see Linking your file system to an S3 bucket.
   */
  createDataRepositoryAssociation(callback?: (err: AWSError, data: FSx.Types.CreateDataRepositoryAssociationResponse) => void): Request<FSx.Types.CreateDataRepositoryAssociationResponse, AWSError>;
  /**
   * Creates an Amazon FSx for Lustre data repository task. You use data repository tasks to perform bulk operations between your Amazon FSx file system and its linked data repositories. An example of a data repository task is exporting any data and metadata changes, including POSIX metadata, to files, directories, and symbolic links (symlinks) from your FSx file system to a linked data repository. A CreateDataRepositoryTask operation will fail if a data repository is not linked to the FSx file system. To learn more about data repository tasks, see Data Repository Tasks. To learn more about linking a data repository to your file system, see Linking your file system to an S3 bucket.
   */
  createDataRepositoryTask(params: FSx.Types.CreateDataRepositoryTaskRequest, callback?: (err: AWSError, data: FSx.Types.CreateDataRepositoryTaskResponse) => void): Request<FSx.Types.CreateDataRepositoryTaskResponse, AWSError>;
  /**
   * Creates an Amazon FSx for Lustre data repository task. You use data repository tasks to perform bulk operations between your Amazon FSx file system and its linked data repositories. An example of a data repository task is exporting any data and metadata changes, including POSIX metadata, to files, directories, and symbolic links (symlinks) from your FSx file system to a linked data repository. A CreateDataRepositoryTask operation will fail if a data repository is not linked to the FSx file system. To learn more about data repository tasks, see Data Repository Tasks. To learn more about linking a data repository to your file system, see Linking your file system to an S3 bucket.
   */
  createDataRepositoryTask(callback?: (err: AWSError, data: FSx.Types.CreateDataRepositoryTaskResponse) => void): Request<FSx.Types.CreateDataRepositoryTaskResponse, AWSError>;
  /**
   * Creates a new, empty Amazon FSx file system. You can create the following supported Amazon FSx file systems using the CreateFileSystem API operation:   Amazon FSx for Lustre   Amazon FSx for NetApp ONTAP   Amazon FSx for OpenZFS   Amazon FSx for Windows File Server   This operation requires a client request token in the request that Amazon FSx uses to ensure idempotent creation. This means that calling the operation multiple times with the same client request token has no effect. By using the idempotent operation, you can retry a CreateFileSystem operation without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives success as long as the parameters are the same. If a file system with the specified client request token exists and the parameters match, CreateFileSystem returns the description of the existing file system. If a file system with the specified client request token exists and the parameters don't match, this call returns IncompatibleParameterError. If a file system with the specified client request token doesn't exist, CreateFileSystem does the following:    Creates a new, empty Amazon FSx file system with an assigned ID, and an initial lifecycle state of CREATING.   Returns the description of the file system.   This operation requires a client request token in the request that Amazon FSx uses to ensure idempotent creation. This means that calling the operation multiple times with the same client request token has no effect. By using the idempotent operation, you can retry a CreateFileSystem operation without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport-level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives a success message as long as the parameters are the same.  The CreateFileSystem call returns while the file system's lifecycle state is still CREATING. You can check the file-system creation status by calling the DescribeFileSystems operation, which returns the file system state along with other information. 
   */
  createFileSystem(params: FSx.Types.CreateFileSystemRequest, callback?: (err: AWSError, data: FSx.Types.CreateFileSystemResponse) => void): Request<FSx.Types.CreateFileSystemResponse, AWSError>;
  /**
   * Creates a new, empty Amazon FSx file system. You can create the following supported Amazon FSx file systems using the CreateFileSystem API operation:   Amazon FSx for Lustre   Amazon FSx for NetApp ONTAP   Amazon FSx for OpenZFS   Amazon FSx for Windows File Server   This operation requires a client request token in the request that Amazon FSx uses to ensure idempotent creation. This means that calling the operation multiple times with the same client request token has no effect. By using the idempotent operation, you can retry a CreateFileSystem operation without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives success as long as the parameters are the same. If a file system with the specified client request token exists and the parameters match, CreateFileSystem returns the description of the existing file system. If a file system with the specified client request token exists and the parameters don't match, this call returns IncompatibleParameterError. If a file system with the specified client request token doesn't exist, CreateFileSystem does the following:    Creates a new, empty Amazon FSx file system with an assigned ID, and an initial lifecycle state of CREATING.   Returns the description of the file system.   This operation requires a client request token in the request that Amazon FSx uses to ensure idempotent creation. This means that calling the operation multiple times with the same client request token has no effect. By using the idempotent operation, you can retry a CreateFileSystem operation without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport-level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives a success message as long as the parameters are the same.  The CreateFileSystem call returns while the file system's lifecycle state is still CREATING. You can check the file-system creation status by calling the DescribeFileSystems operation, which returns the file system state along with other information. 
   */
  createFileSystem(callback?: (err: AWSError, data: FSx.Types.CreateFileSystemResponse) => void): Request<FSx.Types.CreateFileSystemResponse, AWSError>;
  /**
   * Creates a new Amazon FSx for Lustre, Amazon FSx for Windows File Server, or Amazon FSx for OpenZFS file system from an existing Amazon FSx backup. If a file system with the specified client request token exists and the parameters match, this operation returns the description of the file system. If a client request token with the specified by the file system exists and the parameters don't match, this call returns IncompatibleParameterError. If a file system with the specified client request token doesn't exist, this operation does the following:   Creates a new Amazon FSx file system from backup with an assigned ID, and an initial lifecycle state of CREATING.   Returns the description of the file system.   Parameters like the Active Directory, default share name, automatic backup, and backup settings default to the parameters of the file system that was backed up, unless overridden. You can explicitly supply other settings. By using the idempotent operation, you can retry a CreateFileSystemFromBackup call without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives a success message as long as the parameters are the same.  The CreateFileSystemFromBackup call returns while the file system's lifecycle state is still CREATING. You can check the file-system creation status by calling the  DescribeFileSystems operation, which returns the file system state along with other information. 
   */
  createFileSystemFromBackup(params: FSx.Types.CreateFileSystemFromBackupRequest, callback?: (err: AWSError, data: FSx.Types.CreateFileSystemFromBackupResponse) => void): Request<FSx.Types.CreateFileSystemFromBackupResponse, AWSError>;
  /**
   * Creates a new Amazon FSx for Lustre, Amazon FSx for Windows File Server, or Amazon FSx for OpenZFS file system from an existing Amazon FSx backup. If a file system with the specified client request token exists and the parameters match, this operation returns the description of the file system. If a client request token with the specified by the file system exists and the parameters don't match, this call returns IncompatibleParameterError. If a file system with the specified client request token doesn't exist, this operation does the following:   Creates a new Amazon FSx file system from backup with an assigned ID, and an initial lifecycle state of CREATING.   Returns the description of the file system.   Parameters like the Active Directory, default share name, automatic backup, and backup settings default to the parameters of the file system that was backed up, unless overridden. You can explicitly supply other settings. By using the idempotent operation, you can retry a CreateFileSystemFromBackup call without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives a success message as long as the parameters are the same.  The CreateFileSystemFromBackup call returns while the file system's lifecycle state is still CREATING. You can check the file-system creation status by calling the  DescribeFileSystems operation, which returns the file system state along with other information. 
   */
  createFileSystemFromBackup(callback?: (err: AWSError, data: FSx.Types.CreateFileSystemFromBackupResponse) => void): Request<FSx.Types.CreateFileSystemFromBackupResponse, AWSError>;
  /**
   * Creates a snapshot of an existing Amazon FSx for OpenZFS file system. With snapshots, you can easily undo file changes and compare file versions by restoring the volume to a previous version. If a snapshot with the specified client request token exists, and the parameters match, this operation returns the description of the existing snapshot. If a snapshot with the specified client request token exists, and the parameters don't match, this operation returns IncompatibleParameterError. If a snapshot with the specified client request token doesn't exist, CreateSnapshot does the following:    Creates a new OpenZFS snapshot with an assigned ID, and an initial lifecycle state of CREATING.   Returns the description of the snapshot.   By using the idempotent operation, you can retry a CreateSnapshot operation without the risk of creating an extra snapshot. This approach can be useful when an initial call fails in a way that makes it unclear whether a snapshot was created. If you use the same client request token and the initial call created a snapshot, the operation returns a successful result because all the parameters are the same. The CreateSnapshot operation returns while the snapshot's lifecycle state is still CREATING. You can check the snapshot creation status by calling the DescribeSnapshots operation, which returns the snapshot state along with other information. 
   */
  createSnapshot(params: FSx.Types.CreateSnapshotRequest, callback?: (err: AWSError, data: FSx.Types.CreateSnapshotResponse) => void): Request<FSx.Types.CreateSnapshotResponse, AWSError>;
  /**
   * Creates a snapshot of an existing Amazon FSx for OpenZFS file system. With snapshots, you can easily undo file changes and compare file versions by restoring the volume to a previous version. If a snapshot with the specified client request token exists, and the parameters match, this operation returns the description of the existing snapshot. If a snapshot with the specified client request token exists, and the parameters don't match, this operation returns IncompatibleParameterError. If a snapshot with the specified client request token doesn't exist, CreateSnapshot does the following:    Creates a new OpenZFS snapshot with an assigned ID, and an initial lifecycle state of CREATING.   Returns the description of the snapshot.   By using the idempotent operation, you can retry a CreateSnapshot operation without the risk of creating an extra snapshot. This approach can be useful when an initial call fails in a way that makes it unclear whether a snapshot was created. If you use the same client request token and the initial call created a snapshot, the operation returns a successful result because all the parameters are the same. The CreateSnapshot operation returns while the snapshot's lifecycle state is still CREATING. You can check the snapshot creation status by calling the DescribeSnapshots operation, which returns the snapshot state along with other information. 
   */
  createSnapshot(callback?: (err: AWSError, data: FSx.Types.CreateSnapshotResponse) => void): Request<FSx.Types.CreateSnapshotResponse, AWSError>;
  /**
   * Creates a storage virtual machine (SVM) for an Amazon FSx for ONTAP file system.
   */
  createStorageVirtualMachine(params: FSx.Types.CreateStorageVirtualMachineRequest, callback?: (err: AWSError, data: FSx.Types.CreateStorageVirtualMachineResponse) => void): Request<FSx.Types.CreateStorageVirtualMachineResponse, AWSError>;
  /**
   * Creates a storage virtual machine (SVM) for an Amazon FSx for ONTAP file system.
   */
  createStorageVirtualMachine(callback?: (err: AWSError, data: FSx.Types.CreateStorageVirtualMachineResponse) => void): Request<FSx.Types.CreateStorageVirtualMachineResponse, AWSError>;
  /**
   * Creates an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS storage volume.
   */
  createVolume(params: FSx.Types.CreateVolumeRequest, callback?: (err: AWSError, data: FSx.Types.CreateVolumeResponse) => void): Request<FSx.Types.CreateVolumeResponse, AWSError>;
  /**
   * Creates an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS storage volume.
   */
  createVolume(callback?: (err: AWSError, data: FSx.Types.CreateVolumeResponse) => void): Request<FSx.Types.CreateVolumeResponse, AWSError>;
  /**
   * Creates a new Amazon FSx for NetApp ONTAP volume from an existing Amazon FSx volume backup.
   */
  createVolumeFromBackup(params: FSx.Types.CreateVolumeFromBackupRequest, callback?: (err: AWSError, data: FSx.Types.CreateVolumeFromBackupResponse) => void): Request<FSx.Types.CreateVolumeFromBackupResponse, AWSError>;
  /**
   * Creates a new Amazon FSx for NetApp ONTAP volume from an existing Amazon FSx volume backup.
   */
  createVolumeFromBackup(callback?: (err: AWSError, data: FSx.Types.CreateVolumeFromBackupResponse) => void): Request<FSx.Types.CreateVolumeFromBackupResponse, AWSError>;
  /**
   * Deletes an Amazon FSx backup. After deletion, the backup no longer exists, and its data is gone. The DeleteBackup call returns instantly. The backup won't show up in later DescribeBackups calls.  The data in a deleted backup is also deleted and can't be recovered by any means. 
   */
  deleteBackup(params: FSx.Types.DeleteBackupRequest, callback?: (err: AWSError, data: FSx.Types.DeleteBackupResponse) => void): Request<FSx.Types.DeleteBackupResponse, AWSError>;
  /**
   * Deletes an Amazon FSx backup. After deletion, the backup no longer exists, and its data is gone. The DeleteBackup call returns instantly. The backup won't show up in later DescribeBackups calls.  The data in a deleted backup is also deleted and can't be recovered by any means. 
   */
  deleteBackup(callback?: (err: AWSError, data: FSx.Types.DeleteBackupResponse) => void): Request<FSx.Types.DeleteBackupResponse, AWSError>;
  /**
   * Deletes a data repository association on an Amazon FSx for Lustre file system. Deleting the data repository association unlinks the file system from the Amazon S3 bucket. When deleting a data repository association, you have the option of deleting the data in the file system that corresponds to the data repository association. Data repository associations are supported only for file systems with the Persistent_2 deployment type.
   */
  deleteDataRepositoryAssociation(params: FSx.Types.DeleteDataRepositoryAssociationRequest, callback?: (err: AWSError, data: FSx.Types.DeleteDataRepositoryAssociationResponse) => void): Request<FSx.Types.DeleteDataRepositoryAssociationResponse, AWSError>;
  /**
   * Deletes a data repository association on an Amazon FSx for Lustre file system. Deleting the data repository association unlinks the file system from the Amazon S3 bucket. When deleting a data repository association, you have the option of deleting the data in the file system that corresponds to the data repository association. Data repository associations are supported only for file systems with the Persistent_2 deployment type.
   */
  deleteDataRepositoryAssociation(callback?: (err: AWSError, data: FSx.Types.DeleteDataRepositoryAssociationResponse) => void): Request<FSx.Types.DeleteDataRepositoryAssociationResponse, AWSError>;
  /**
   * Deletes a file system. After deletion, the file system no longer exists, and its data is gone. Any existing automatic backups and snapshots are also deleted. To delete an Amazon FSx for NetApp ONTAP file system, first delete all the volumes and storage virtual machines (SVMs) on the file system. Then provide a FileSystemId value to the DeleFileSystem operation. By default, when you delete an Amazon FSx for Windows File Server file system, a final backup is created upon deletion. This final backup isn't subject to the file system's retention policy, and must be manually deleted. The DeleteFileSystem operation returns while the file system has the DELETING status. You can check the file system deletion status by calling the DescribeFileSystems operation, which returns a list of file systems in your account. If you pass the file system ID for a deleted file system, the DescribeFileSystems operation returns a FileSystemNotFound error.  If a data repository task is in a PENDING or EXECUTING state, deleting an Amazon FSx for Lustre file system will fail with an HTTP status code 400 (Bad Request).   The data in a deleted file system is also deleted and can't be recovered by any means. 
   */
  deleteFileSystem(params: FSx.Types.DeleteFileSystemRequest, callback?: (err: AWSError, data: FSx.Types.DeleteFileSystemResponse) => void): Request<FSx.Types.DeleteFileSystemResponse, AWSError>;
  /**
   * Deletes a file system. After deletion, the file system no longer exists, and its data is gone. Any existing automatic backups and snapshots are also deleted. To delete an Amazon FSx for NetApp ONTAP file system, first delete all the volumes and storage virtual machines (SVMs) on the file system. Then provide a FileSystemId value to the DeleFileSystem operation. By default, when you delete an Amazon FSx for Windows File Server file system, a final backup is created upon deletion. This final backup isn't subject to the file system's retention policy, and must be manually deleted. The DeleteFileSystem operation returns while the file system has the DELETING status. You can check the file system deletion status by calling the DescribeFileSystems operation, which returns a list of file systems in your account. If you pass the file system ID for a deleted file system, the DescribeFileSystems operation returns a FileSystemNotFound error.  If a data repository task is in a PENDING or EXECUTING state, deleting an Amazon FSx for Lustre file system will fail with an HTTP status code 400 (Bad Request).   The data in a deleted file system is also deleted and can't be recovered by any means. 
   */
  deleteFileSystem(callback?: (err: AWSError, data: FSx.Types.DeleteFileSystemResponse) => void): Request<FSx.Types.DeleteFileSystemResponse, AWSError>;
  /**
   * Deletes the Amazon FSx snapshot. After deletion, the snapshot no longer exists, and its data is gone. Deleting a snapshot doesn't affect snapshots stored in a file system backup.  The DeleteSnapshot operation returns instantly. The snapshot appears with the lifecycle status of DELETING until the deletion is complete.
   */
  deleteSnapshot(params: FSx.Types.DeleteSnapshotRequest, callback?: (err: AWSError, data: FSx.Types.DeleteSnapshotResponse) => void): Request<FSx.Types.DeleteSnapshotResponse, AWSError>;
  /**
   * Deletes the Amazon FSx snapshot. After deletion, the snapshot no longer exists, and its data is gone. Deleting a snapshot doesn't affect snapshots stored in a file system backup.  The DeleteSnapshot operation returns instantly. The snapshot appears with the lifecycle status of DELETING until the deletion is complete.
   */
  deleteSnapshot(callback?: (err: AWSError, data: FSx.Types.DeleteSnapshotResponse) => void): Request<FSx.Types.DeleteSnapshotResponse, AWSError>;
  /**
   * Deletes an existing Amazon FSx for ONTAP storage virtual machine (SVM). Prior to deleting an SVM, you must delete all non-root volumes in the SVM, otherwise the operation will fail.
   */
  deleteStorageVirtualMachine(params: FSx.Types.DeleteStorageVirtualMachineRequest, callback?: (err: AWSError, data: FSx.Types.DeleteStorageVirtualMachineResponse) => void): Request<FSx.Types.DeleteStorageVirtualMachineResponse, AWSError>;
  /**
   * Deletes an existing Amazon FSx for ONTAP storage virtual machine (SVM). Prior to deleting an SVM, you must delete all non-root volumes in the SVM, otherwise the operation will fail.
   */
  deleteStorageVirtualMachine(callback?: (err: AWSError, data: FSx.Types.DeleteStorageVirtualMachineResponse) => void): Request<FSx.Types.DeleteStorageVirtualMachineResponse, AWSError>;
  /**
   * Deletes an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume.
   */
  deleteVolume(params: FSx.Types.DeleteVolumeRequest, callback?: (err: AWSError, data: FSx.Types.DeleteVolumeResponse) => void): Request<FSx.Types.DeleteVolumeResponse, AWSError>;
  /**
   * Deletes an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume.
   */
  deleteVolume(callback?: (err: AWSError, data: FSx.Types.DeleteVolumeResponse) => void): Request<FSx.Types.DeleteVolumeResponse, AWSError>;
  /**
   * Returns the description of a specific Amazon FSx backup, if a BackupIds value is provided for that backup. Otherwise, it returns all backups owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling. When retrieving all backups, you can optionally specify the MaxResults parameter to limit the number of backups in a response. If more backups remain, Amazon FSx returns a NextToken value in the response. In this case, send a later request with the NextToken request parameter set to the value of the NextToken value from the last response. This operation is used in an iterative process to retrieve a list of your backups. DescribeBackups is called first without a NextToken value. Then the operation continues to be called with the NextToken parameter set to the value of the last NextToken value until a response has no NextToken value. When using this operation, keep the following in mind:   The operation might return fewer than the MaxResults value of backup descriptions while still including a NextToken value.   The order of the backups returned in the response of one DescribeBackups call and the order of the backups returned across the responses of a multi-call iteration is unspecified.  
   */
  describeBackups(params: FSx.Types.DescribeBackupsRequest, callback?: (err: AWSError, data: FSx.Types.DescribeBackupsResponse) => void): Request<FSx.Types.DescribeBackupsResponse, AWSError>;
  /**
   * Returns the description of a specific Amazon FSx backup, if a BackupIds value is provided for that backup. Otherwise, it returns all backups owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling. When retrieving all backups, you can optionally specify the MaxResults parameter to limit the number of backups in a response. If more backups remain, Amazon FSx returns a NextToken value in the response. In this case, send a later request with the NextToken request parameter set to the value of the NextToken value from the last response. This operation is used in an iterative process to retrieve a list of your backups. DescribeBackups is called first without a NextToken value. Then the operation continues to be called with the NextToken parameter set to the value of the last NextToken value until a response has no NextToken value. When using this operation, keep the following in mind:   The operation might return fewer than the MaxResults value of backup descriptions while still including a NextToken value.   The order of the backups returned in the response of one DescribeBackups call and the order of the backups returned across the responses of a multi-call iteration is unspecified.  
   */
  describeBackups(callback?: (err: AWSError, data: FSx.Types.DescribeBackupsResponse) => void): Request<FSx.Types.DescribeBackupsResponse, AWSError>;
  /**
   * Returns the description of specific Amazon FSx for Lustre data repository associations, if one or more AssociationIds values are provided in the request, or if filters are used in the request. Data repository associations are supported only for file systems with the Persistent_2 deployment type. You can use filters to narrow the response to include just data repository associations for specific file systems (use the file-system-id filter with the ID of the file system) or data repository associations for a specific repository type (use the data-repository-type filter with a value of S3). If you don't use filters, the response returns all data repository associations owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling. When retrieving all data repository associations, you can paginate the response by using the optional MaxResults parameter to limit the number of data repository associations returned in a response. If more data repository associations remain, Amazon FSx returns a NextToken value in the response. In this case, send a later request with the NextToken request parameter set to the value of NextToken from the last response.
   */
  describeDataRepositoryAssociations(params: FSx.Types.DescribeDataRepositoryAssociationsRequest, callback?: (err: AWSError, data: FSx.Types.DescribeDataRepositoryAssociationsResponse) => void): Request<FSx.Types.DescribeDataRepositoryAssociationsResponse, AWSError>;
  /**
   * Returns the description of specific Amazon FSx for Lustre data repository associations, if one or more AssociationIds values are provided in the request, or if filters are used in the request. Data repository associations are supported only for file systems with the Persistent_2 deployment type. You can use filters to narrow the response to include just data repository associations for specific file systems (use the file-system-id filter with the ID of the file system) or data repository associations for a specific repository type (use the data-repository-type filter with a value of S3). If you don't use filters, the response returns all data repository associations owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling. When retrieving all data repository associations, you can paginate the response by using the optional MaxResults parameter to limit the number of data repository associations returned in a response. If more data repository associations remain, Amazon FSx returns a NextToken value in the response. In this case, send a later request with the NextToken request parameter set to the value of NextToken from the last response.
   */
  describeDataRepositoryAssociations(callback?: (err: AWSError, data: FSx.Types.DescribeDataRepositoryAssociationsResponse) => void): Request<FSx.Types.DescribeDataRepositoryAssociationsResponse, AWSError>;
  /**
   * Returns the description of specific Amazon FSx for Lustre data repository tasks, if one or more TaskIds values are provided in the request, or if filters are used in the request. You can use filters to narrow the response to include just tasks for specific file systems, or tasks in a specific lifecycle state. Otherwise, it returns all data repository tasks owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling. When retrieving all tasks, you can paginate the response by using the optional MaxResults parameter to limit the number of tasks returned in a response. If more tasks remain, Amazon FSx returns a NextToken value in the response. In this case, send a later request with the NextToken request parameter set to the value of NextToken from the last response.
   */
  describeDataRepositoryTasks(params: FSx.Types.DescribeDataRepositoryTasksRequest, callback?: (err: AWSError, data: FSx.Types.DescribeDataRepositoryTasksResponse) => void): Request<FSx.Types.DescribeDataRepositoryTasksResponse, AWSError>;
  /**
   * Returns the description of specific Amazon FSx for Lustre data repository tasks, if one or more TaskIds values are provided in the request, or if filters are used in the request. You can use filters to narrow the response to include just tasks for specific file systems, or tasks in a specific lifecycle state. Otherwise, it returns all data repository tasks owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling. When retrieving all tasks, you can paginate the response by using the optional MaxResults parameter to limit the number of tasks returned in a response. If more tasks remain, Amazon FSx returns a NextToken value in the response. In this case, send a later request with the NextToken request parameter set to the value of NextToken from the last response.
   */
  describeDataRepositoryTasks(callback?: (err: AWSError, data: FSx.Types.DescribeDataRepositoryTasksResponse) => void): Request<FSx.Types.DescribeDataRepositoryTasksResponse, AWSError>;
  /**
   * Returns the DNS aliases that are associated with the specified Amazon FSx for Windows File Server file system. A history of all DNS aliases that have been associated with and disassociated from the file system is available in the list of AdministrativeAction provided in the DescribeFileSystems operation response.
   */
  describeFileSystemAliases(params: FSx.Types.DescribeFileSystemAliasesRequest, callback?: (err: AWSError, data: FSx.Types.DescribeFileSystemAliasesResponse) => void): Request<FSx.Types.DescribeFileSystemAliasesResponse, AWSError>;
  /**
   * Returns the DNS aliases that are associated with the specified Amazon FSx for Windows File Server file system. A history of all DNS aliases that have been associated with and disassociated from the file system is available in the list of AdministrativeAction provided in the DescribeFileSystems operation response.
   */
  describeFileSystemAliases(callback?: (err: AWSError, data: FSx.Types.DescribeFileSystemAliasesResponse) => void): Request<FSx.Types.DescribeFileSystemAliasesResponse, AWSError>;
  /**
   * Returns the description of specific Amazon FSx file systems, if a FileSystemIds value is provided for that file system. Otherwise, it returns descriptions of all file systems owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling. When retrieving all file system descriptions, you can optionally specify the MaxResults parameter to limit the number of descriptions in a response. If more file system descriptions remain, Amazon FSx returns a NextToken value in the response. In this case, send a later request with the NextToken request parameter set to the value of NextToken from the last response. This operation is used in an iterative process to retrieve a list of your file system descriptions. DescribeFileSystems is called first without a NextTokenvalue. Then the operation continues to be called with the NextToken parameter set to the value of the last NextToken value until a response has no NextToken. When using this operation, keep the following in mind:   The implementation might return fewer than MaxResults file system descriptions while still including a NextToken value.   The order of file systems returned in the response of one DescribeFileSystems call and the order of file systems returned across the responses of a multicall iteration is unspecified.  
   */
  describeFileSystems(params: FSx.Types.DescribeFileSystemsRequest, callback?: (err: AWSError, data: FSx.Types.DescribeFileSystemsResponse) => void): Request<FSx.Types.DescribeFileSystemsResponse, AWSError>;
  /**
   * Returns the description of specific Amazon FSx file systems, if a FileSystemIds value is provided for that file system. Otherwise, it returns descriptions of all file systems owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling. When retrieving all file system descriptions, you can optionally specify the MaxResults parameter to limit the number of descriptions in a response. If more file system descriptions remain, Amazon FSx returns a NextToken value in the response. In this case, send a later request with the NextToken request parameter set to the value of NextToken from the last response. This operation is used in an iterative process to retrieve a list of your file system descriptions. DescribeFileSystems is called first without a NextTokenvalue. Then the operation continues to be called with the NextToken parameter set to the value of the last NextToken value until a response has no NextToken. When using this operation, keep the following in mind:   The implementation might return fewer than MaxResults file system descriptions while still including a NextToken value.   The order of file systems returned in the response of one DescribeFileSystems call and the order of file systems returned across the responses of a multicall iteration is unspecified.  
   */
  describeFileSystems(callback?: (err: AWSError, data: FSx.Types.DescribeFileSystemsResponse) => void): Request<FSx.Types.DescribeFileSystemsResponse, AWSError>;
  /**
   * Returns the description of specific Amazon FSx snapshots, if a SnapshotIds value is provided. Otherwise, this operation returns all snapshots owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling. When retrieving all snapshots, you can optionally specify the MaxResults parameter to limit the number of snapshots in a response. If more backups remain, Amazon FSx returns a NextToken value in the response. In this case, send a later request with the NextToken request parameter set to the value of NextToken from the last response.  Use this operation in an iterative process to retrieve a list of your snapshots. DescribeSnapshots is called first without a NextToken value. Then the operation continues to be called with the NextToken parameter set to the value of the last NextToken value until a response has no NextToken value. When using this operation, keep the following in mind:   The operation might return fewer than the MaxResults value of snapshot descriptions while still including a NextToken value.   The order of snapshots returned in the response of one DescribeSnapshots call and the order of backups returned across the responses of a multi-call iteration is unspecified.   
   */
  describeSnapshots(params: FSx.Types.DescribeSnapshotsRequest, callback?: (err: AWSError, data: FSx.Types.DescribeSnapshotsResponse) => void): Request<FSx.Types.DescribeSnapshotsResponse, AWSError>;
  /**
   * Returns the description of specific Amazon FSx snapshots, if a SnapshotIds value is provided. Otherwise, this operation returns all snapshots owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling. When retrieving all snapshots, you can optionally specify the MaxResults parameter to limit the number of snapshots in a response. If more backups remain, Amazon FSx returns a NextToken value in the response. In this case, send a later request with the NextToken request parameter set to the value of NextToken from the last response.  Use this operation in an iterative process to retrieve a list of your snapshots. DescribeSnapshots is called first without a NextToken value. Then the operation continues to be called with the NextToken parameter set to the value of the last NextToken value until a response has no NextToken value. When using this operation, keep the following in mind:   The operation might return fewer than the MaxResults value of snapshot descriptions while still including a NextToken value.   The order of snapshots returned in the response of one DescribeSnapshots call and the order of backups returned across the responses of a multi-call iteration is unspecified.   
   */
  describeSnapshots(callback?: (err: AWSError, data: FSx.Types.DescribeSnapshotsResponse) => void): Request<FSx.Types.DescribeSnapshotsResponse, AWSError>;
  /**
   * Describes one or more Amazon FSx for NetApp ONTAP storage virtual machines (SVMs).
   */
  describeStorageVirtualMachines(params: FSx.Types.DescribeStorageVirtualMachinesRequest, callback?: (err: AWSError, data: FSx.Types.DescribeStorageVirtualMachinesResponse) => void): Request<FSx.Types.DescribeStorageVirtualMachinesResponse, AWSError>;
  /**
   * Describes one or more Amazon FSx for NetApp ONTAP storage virtual machines (SVMs).
   */
  describeStorageVirtualMachines(callback?: (err: AWSError, data: FSx.Types.DescribeStorageVirtualMachinesResponse) => void): Request<FSx.Types.DescribeStorageVirtualMachinesResponse, AWSError>;
  /**
   * Describes one or more Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volumes.
   */
  describeVolumes(params: FSx.Types.DescribeVolumesRequest, callback?: (err: AWSError, data: FSx.Types.DescribeVolumesResponse) => void): Request<FSx.Types.DescribeVolumesResponse, AWSError>;
  /**
   * Describes one or more Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volumes.
   */
  describeVolumes(callback?: (err: AWSError, data: FSx.Types.DescribeVolumesResponse) => void): Request<FSx.Types.DescribeVolumesResponse, AWSError>;
  /**
   * Use this action to disassociate, or remove, one or more Domain Name Service (DNS) aliases from an Amazon FSx for Windows File Server file system. If you attempt to disassociate a DNS alias that is not associated with the file system, Amazon FSx responds with a 400 Bad Request. For more information, see Working with DNS Aliases. The system generated response showing the DNS aliases that Amazon FSx is attempting to disassociate from the file system. Use the API operation to monitor the status of the aliases Amazon FSx is disassociating with the file system.
   */
  disassociateFileSystemAliases(params: FSx.Types.DisassociateFileSystemAliasesRequest, callback?: (err: AWSError, data: FSx.Types.DisassociateFileSystemAliasesResponse) => void): Request<FSx.Types.DisassociateFileSystemAliasesResponse, AWSError>;
  /**
   * Use this action to disassociate, or remove, one or more Domain Name Service (DNS) aliases from an Amazon FSx for Windows File Server file system. If you attempt to disassociate a DNS alias that is not associated with the file system, Amazon FSx responds with a 400 Bad Request. For more information, see Working with DNS Aliases. The system generated response showing the DNS aliases that Amazon FSx is attempting to disassociate from the file system. Use the API operation to monitor the status of the aliases Amazon FSx is disassociating with the file system.
   */
  disassociateFileSystemAliases(callback?: (err: AWSError, data: FSx.Types.DisassociateFileSystemAliasesResponse) => void): Request<FSx.Types.DisassociateFileSystemAliasesResponse, AWSError>;
  /**
   * Lists tags for an Amazon FSx file systems and backups in the case of Amazon FSx for Windows File Server. When retrieving all tags, you can optionally specify the MaxResults parameter to limit the number of tags in a response. If more tags remain, Amazon FSx returns a NextToken value in the response. In this case, send a later request with the NextToken request parameter set to the value of NextToken from the last response. This action is used in an iterative process to retrieve a list of your tags. ListTagsForResource is called first without a NextTokenvalue. Then the action continues to be called with the NextToken parameter set to the value of the last NextToken value until a response has no NextToken. When using this action, keep the following in mind:   The implementation might return fewer than MaxResults file system descriptions while still including a NextToken value.   The order of tags returned in the response of one ListTagsForResource call and the order of tags returned across the responses of a multi-call iteration is unspecified.  
   */
  listTagsForResource(params: FSx.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: FSx.Types.ListTagsForResourceResponse) => void): Request<FSx.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists tags for an Amazon FSx file systems and backups in the case of Amazon FSx for Windows File Server. When retrieving all tags, you can optionally specify the MaxResults parameter to limit the number of tags in a response. If more tags remain, Amazon FSx returns a NextToken value in the response. In this case, send a later request with the NextToken request parameter set to the value of NextToken from the last response. This action is used in an iterative process to retrieve a list of your tags. ListTagsForResource is called first without a NextTokenvalue. Then the action continues to be called with the NextToken parameter set to the value of the last NextToken value until a response has no NextToken. When using this action, keep the following in mind:   The implementation might return fewer than MaxResults file system descriptions while still including a NextToken value.   The order of tags returned in the response of one ListTagsForResource call and the order of tags returned across the responses of a multi-call iteration is unspecified.  
   */
  listTagsForResource(callback?: (err: AWSError, data: FSx.Types.ListTagsForResourceResponse) => void): Request<FSx.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Releases the file system lock from an Amazon FSx for OpenZFS file system.
   */
  releaseFileSystemNfsV3Locks(params: FSx.Types.ReleaseFileSystemNfsV3LocksRequest, callback?: (err: AWSError, data: FSx.Types.ReleaseFileSystemNfsV3LocksResponse) => void): Request<FSx.Types.ReleaseFileSystemNfsV3LocksResponse, AWSError>;
  /**
   * Releases the file system lock from an Amazon FSx for OpenZFS file system.
   */
  releaseFileSystemNfsV3Locks(callback?: (err: AWSError, data: FSx.Types.ReleaseFileSystemNfsV3LocksResponse) => void): Request<FSx.Types.ReleaseFileSystemNfsV3LocksResponse, AWSError>;
  /**
   * Returns an Amazon FSx for OpenZFS volume to the state saved by the specified snapshot. 
   */
  restoreVolumeFromSnapshot(params: FSx.Types.RestoreVolumeFromSnapshotRequest, callback?: (err: AWSError, data: FSx.Types.RestoreVolumeFromSnapshotResponse) => void): Request<FSx.Types.RestoreVolumeFromSnapshotResponse, AWSError>;
  /**
   * Returns an Amazon FSx for OpenZFS volume to the state saved by the specified snapshot. 
   */
  restoreVolumeFromSnapshot(callback?: (err: AWSError, data: FSx.Types.RestoreVolumeFromSnapshotResponse) => void): Request<FSx.Types.RestoreVolumeFromSnapshotResponse, AWSError>;
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
   * Updates the configuration of an existing data repository association on an Amazon FSx for Lustre file system. Data repository associations are supported only for file systems with the Persistent_2 deployment type.
   */
  updateDataRepositoryAssociation(params: FSx.Types.UpdateDataRepositoryAssociationRequest, callback?: (err: AWSError, data: FSx.Types.UpdateDataRepositoryAssociationResponse) => void): Request<FSx.Types.UpdateDataRepositoryAssociationResponse, AWSError>;
  /**
   * Updates the configuration of an existing data repository association on an Amazon FSx for Lustre file system. Data repository associations are supported only for file systems with the Persistent_2 deployment type.
   */
  updateDataRepositoryAssociation(callback?: (err: AWSError, data: FSx.Types.UpdateDataRepositoryAssociationResponse) => void): Request<FSx.Types.UpdateDataRepositoryAssociationResponse, AWSError>;
  /**
   * Use this operation to update the configuration of an existing Amazon FSx file system. You can update multiple properties in a single request. For Amazon FSx for Windows File Server file systems, you can update the following properties:    AuditLogConfiguration     AutomaticBackupRetentionDays     DailyAutomaticBackupStartTime     SelfManagedActiveDirectoryConfiguration     StorageCapacity     ThroughputCapacity     WeeklyMaintenanceStartTime    For Amazon FSx for Lustre file systems, you can update the following properties:    AutoImportPolicy     AutomaticBackupRetentionDays     DailyAutomaticBackupStartTime     DataCompressionType     StorageCapacity     WeeklyMaintenanceStartTime    For Amazon FSx for NetApp ONTAP file systems, you can update the following properties:    AutomaticBackupRetentionDays     DailyAutomaticBackupStartTime     DiskIopsConfiguration     FsxAdminPassword     StorageCapacity     WeeklyMaintenanceStartTime    For the Amazon FSx for OpenZFS file systems, you can update the following properties:    AutomaticBackupRetentionDays     CopyTagsToBackups     CopyTagsToVolumes     DailyAutomaticBackupStartTime     ThroughputCapacity     WeeklyMaintenanceStartTime   
   */
  updateFileSystem(params: FSx.Types.UpdateFileSystemRequest, callback?: (err: AWSError, data: FSx.Types.UpdateFileSystemResponse) => void): Request<FSx.Types.UpdateFileSystemResponse, AWSError>;
  /**
   * Use this operation to update the configuration of an existing Amazon FSx file system. You can update multiple properties in a single request. For Amazon FSx for Windows File Server file systems, you can update the following properties:    AuditLogConfiguration     AutomaticBackupRetentionDays     DailyAutomaticBackupStartTime     SelfManagedActiveDirectoryConfiguration     StorageCapacity     ThroughputCapacity     WeeklyMaintenanceStartTime    For Amazon FSx for Lustre file systems, you can update the following properties:    AutoImportPolicy     AutomaticBackupRetentionDays     DailyAutomaticBackupStartTime     DataCompressionType     StorageCapacity     WeeklyMaintenanceStartTime    For Amazon FSx for NetApp ONTAP file systems, you can update the following properties:    AutomaticBackupRetentionDays     DailyAutomaticBackupStartTime     DiskIopsConfiguration     FsxAdminPassword     StorageCapacity     WeeklyMaintenanceStartTime    For the Amazon FSx for OpenZFS file systems, you can update the following properties:    AutomaticBackupRetentionDays     CopyTagsToBackups     CopyTagsToVolumes     DailyAutomaticBackupStartTime     ThroughputCapacity     WeeklyMaintenanceStartTime   
   */
  updateFileSystem(callback?: (err: AWSError, data: FSx.Types.UpdateFileSystemResponse) => void): Request<FSx.Types.UpdateFileSystemResponse, AWSError>;
  /**
   * Updates the name of a snapshot. 
   */
  updateSnapshot(params: FSx.Types.UpdateSnapshotRequest, callback?: (err: AWSError, data: FSx.Types.UpdateSnapshotResponse) => void): Request<FSx.Types.UpdateSnapshotResponse, AWSError>;
  /**
   * Updates the name of a snapshot. 
   */
  updateSnapshot(callback?: (err: AWSError, data: FSx.Types.UpdateSnapshotResponse) => void): Request<FSx.Types.UpdateSnapshotResponse, AWSError>;
  /**
   * Updates an Amazon FSx for ONTAP storage virtual machine (SVM).
   */
  updateStorageVirtualMachine(params: FSx.Types.UpdateStorageVirtualMachineRequest, callback?: (err: AWSError, data: FSx.Types.UpdateStorageVirtualMachineResponse) => void): Request<FSx.Types.UpdateStorageVirtualMachineResponse, AWSError>;
  /**
   * Updates an Amazon FSx for ONTAP storage virtual machine (SVM).
   */
  updateStorageVirtualMachine(callback?: (err: AWSError, data: FSx.Types.UpdateStorageVirtualMachineResponse) => void): Request<FSx.Types.UpdateStorageVirtualMachineResponse, AWSError>;
  /**
   * Updates the configuration of an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume.
   */
  updateVolume(params: FSx.Types.UpdateVolumeRequest, callback?: (err: AWSError, data: FSx.Types.UpdateVolumeResponse) => void): Request<FSx.Types.UpdateVolumeResponse, AWSError>;
  /**
   * Updates the configuration of an Amazon FSx for NetApp ONTAP or Amazon FSx for OpenZFS volume.
   */
  updateVolume(callback?: (err: AWSError, data: FSx.Types.UpdateVolumeResponse) => void): Request<FSx.Types.UpdateVolumeResponse, AWSError>;
}
declare namespace FSx {
  export type AWSAccountId = string;
  export interface ActiveDirectoryBackupAttributes {
    /**
     * The fully qualified domain name of the self-managed Active Directory directory.
     */
    DomainName?: ActiveDirectoryFullyQualifiedName;
    /**
     * The ID of the Amazon Web Services Managed Microsoft Active Directory instance to which the file system is joined.
     */
    ActiveDirectoryId?: DirectoryId;
    ResourceARN?: ResourceARN;
  }
  export type ActiveDirectoryFullyQualifiedName = string;
  export type AdminPassword = string;
  export interface AdministrativeAction {
    AdministrativeActionType?: AdministrativeActionType;
    /**
     * The percentage-complete status of a STORAGE_OPTIMIZATION administrative action. Does not apply to any other administrative action type.
     */
    ProgressPercent?: ProgressPercent;
    /**
     * The time that the administrative action request was received.
     */
    RequestTime?: RequestTime;
    /**
     * Describes the status of the administrative action, as follows:    FAILED - Amazon FSx failed to process the administrative action successfully.    IN_PROGRESS - Amazon FSx is processing the administrative action.    PENDING - Amazon FSx is waiting to process the administrative action.    COMPLETED - Amazon FSx has finished processing the administrative task.    UPDATED_OPTIMIZING - For a storage-capacity increase update, Amazon FSx has updated the file system with the new storage capacity, and is now performing the storage-optimization process.   
     */
    Status?: Status;
    /**
     * Describes the target value for the administration action, provided in the UpdateFileSystem operation. Returned for FILE_SYSTEM_UPDATE administrative actions. 
     */
    TargetFileSystemValues?: FileSystem;
    FailureDetails?: AdministrativeActionFailureDetails;
    TargetVolumeValues?: Volume;
    TargetSnapshotValues?: Snapshot;
  }
  export interface AdministrativeActionFailureDetails {
    /**
     * Error message providing details about the failed administrative action.
     */
    Message?: ErrorMessage;
  }
  export type AdministrativeActionType = "FILE_SYSTEM_UPDATE"|"STORAGE_OPTIMIZATION"|"FILE_SYSTEM_ALIAS_ASSOCIATION"|"FILE_SYSTEM_ALIAS_DISASSOCIATION"|"VOLUME_UPDATE"|"SNAPSHOT_UPDATE"|"RELEASE_NFS_V3_LOCKS"|string;
  export type AdministrativeActions = AdministrativeAction[];
  export interface Alias {
    /**
     * The name of the DNS alias. The alias name has to meet the following requirements:   Formatted as a fully-qualified domain name (FQDN), hostname.domain, for example, accounting.example.com.   Can contain alphanumeric characters, the underscore (_), and the hyphen (-).   Cannot start or end with a hyphen.   Can start with a numeric.   For DNS names, Amazon FSx stores alphabetic characters as lowercase letters (a-z), regardless of how you specify them: as uppercase letters, lowercase letters, or the corresponding letters in escape codes.
     */
    Name?: AlternateDNSName;
    /**
     * Describes the state of the DNS alias.   AVAILABLE - The DNS alias is associated with an Amazon FSx file system.   CREATING - Amazon FSx is creating the DNS alias and associating it with the file system.   CREATE_FAILED - Amazon FSx was unable to associate the DNS alias with the file system.   DELETING - Amazon FSx is disassociating the DNS alias from the file system and deleting it.   DELETE_FAILED - Amazon FSx was unable to disassociate the DNS alias from the file system.  
     */
    Lifecycle?: AliasLifecycle;
  }
  export type AliasLifecycle = "AVAILABLE"|"CREATING"|"DELETING"|"CREATE_FAILED"|"DELETE_FAILED"|string;
  export type Aliases = Alias[];
  export type AlternateDNSName = string;
  export type AlternateDNSNames = AlternateDNSName[];
  export type ArchivePath = string;
  export interface AssociateFileSystemAliasesRequest {
    ClientRequestToken?: ClientRequestToken;
    /**
     * Specifies the file system with which you want to associate one or more DNS aliases.
     */
    FileSystemId: FileSystemId;
    /**
     * An array of one or more DNS alias names to associate with the file system. The alias name has to comply with the following formatting requirements:   Formatted as a fully-qualified domain name (FQDN),  hostname.domain , for example, accounting.corp.example.com.   Can contain alphanumeric characters and the hyphen (-).   Cannot start or end with a hyphen.   Can start with a numeric.   For DNS alias names, Amazon FSx stores alphabetic characters as lowercase letters (a-z), regardless of how you specify them: as uppercase letters, lowercase letters, or the corresponding letters in escape codes.
     */
    Aliases: AlternateDNSNames;
  }
  export interface AssociateFileSystemAliasesResponse {
    /**
     * An array of the DNS aliases that Amazon FSx is associating with the file system.
     */
    Aliases?: Aliases;
  }
  export interface AutoExportPolicy {
    /**
     * The AutoExportPolicy can have the following event values:    NEW - Amazon FSx automatically exports new files and directories to the data repository as they are added to the file system.    CHANGED - Amazon FSx automatically exports changes to files and directories on the file system to the data repository.    DELETED - Files and directories are automatically deleted on the data repository when they are deleted on the file system.   You can define any combination of event types for your AutoExportPolicy.
     */
    Events?: EventTypes;
  }
  export interface AutoImportPolicy {
    /**
     * The AutoImportPolicy can have the following event values:    NEW - Amazon FSx automatically imports metadata of files added to the linked S3 bucket that do not currently exist in the FSx file system.    CHANGED - Amazon FSx automatically updates file metadata and invalidates existing file content on the file system as files change in the data repository.    DELETED - Amazon FSx automatically deletes files on the file system as corresponding files are deleted in the data repository.   You can define any combination of event types for your AutoImportPolicy.
     */
    Events?: EventTypes;
  }
  export type AutoImportPolicyType = "NONE"|"NEW"|"NEW_CHANGED"|"NEW_CHANGED_DELETED"|string;
  export type AutomaticBackupRetentionDays = number;
  export interface Backup {
    /**
     * The ID of the backup.
     */
    BackupId: BackupId;
    /**
     * The lifecycle status of the backup.    AVAILABLE - The backup is fully available.    PENDING - For user-initiated backups on Lustre file systems only; Amazon FSx hasn't started creating the backup.    CREATING - Amazon FSx is creating the backup.    TRANSFERRING - For user-initiated backups on Lustre file systems only; Amazon FSx is transferring the backup to Amazon S3.    COPYING - Amazon FSx is copying the backup.    DELETED - Amazon FSx deleted the backup and it's no longer available.    FAILED - Amazon FSx couldn't finish the backup.  
     */
    Lifecycle: BackupLifecycle;
    /**
     * Details explaining any failures that occurred when creating a backup.
     */
    FailureDetails?: BackupFailureDetails;
    /**
     * The type of the file-system backup.
     */
    Type: BackupType;
    ProgressPercent?: ProgressPercent;
    /**
     * The time when a particular backup was created.
     */
    CreationTime: CreationTime;
    /**
     * The ID of the Key Management Service (KMS) key used to encrypt the backup of the Amazon FSx file system's data at rest. 
     */
    KmsKeyId?: KmsKeyId;
    /**
     * The Amazon Resource Name (ARN) for the backup resource.
     */
    ResourceARN?: ResourceARN;
    /**
     * The tags associated with a particular file system.
     */
    Tags?: Tags;
    /**
     * The metadata of the file system associated with the backup. This metadata is persisted even if the file system is deleted.
     */
    FileSystem: FileSystem;
    /**
     * The configuration of the self-managed Microsoft Active Directory directory to which the Windows File Server instance is joined.
     */
    DirectoryInformation?: ActiveDirectoryBackupAttributes;
    OwnerId?: AWSAccountId;
    SourceBackupId?: BackupId;
    /**
     * The source Region of the backup. Specifies the Region from where this backup is copied.
     */
    SourceBackupRegion?: Region;
    /**
     * Specifies the resource type that's backed up.
     */
    ResourceType?: ResourceType;
    Volume?: Volume;
  }
  export interface BackupFailureDetails {
    /**
     * A message describing the backup-creation failure.
     */
    Message?: ErrorMessage;
  }
  export type BackupId = string;
  export type BackupIds = BackupId[];
  export type BackupLifecycle = "AVAILABLE"|"CREATING"|"TRANSFERRING"|"DELETED"|"FAILED"|"PENDING"|"COPYING"|string;
  export type BackupType = "AUTOMATIC"|"USER_INITIATED"|"AWS_BACKUP"|string;
  export type Backups = Backup[];
  export type BatchImportMetaDataOnCreate = boolean;
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
  export type CoolingPeriod = number;
  export interface CopyBackupRequest {
    ClientRequestToken?: ClientRequestToken;
    /**
     * The ID of the source backup. Specifies the ID of the backup that's being copied.
     */
    SourceBackupId: SourceBackupId;
    /**
     * The source Amazon Web Services Region of the backup. Specifies the Amazon Web Services Region from which the backup is being copied. The source and destination Regions must be in the same Amazon Web Services partition. If you don't specify a Region, SourceRegion defaults to the Region where the request is sent from (in-Region copy).
     */
    SourceRegion?: Region;
    KmsKeyId?: KmsKeyId;
    /**
     * A Boolean flag indicating whether tags from the source backup should be copied to the backup copy. This value defaults to false. If you set CopyTags to true and the source backup has existing tags, you can use the Tags parameter to create new tags, provided that the sum of the source backup tags and the new tags doesn't exceed 50. Both sets of tags are merged. If there are tag conflicts (for example, two tags with the same key but different values), the tags created with the Tags parameter take precedence.
     */
    CopyTags?: Flag;
    Tags?: Tags;
  }
  export interface CopyBackupResponse {
    Backup?: Backup;
  }
  export interface CreateBackupRequest {
    /**
     * The ID of the file system to back up.
     */
    FileSystemId?: FileSystemId;
    /**
     * (Optional) A string of up to 64 ASCII characters that Amazon FSx uses to ensure idempotent creation. This string is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
     */
    ClientRequestToken?: ClientRequestToken;
    /**
     * (Optional) The tags to apply to the backup at backup creation. The key value of the Name tag appears in the console as the backup name. If you have set CopyTagsToBackups to true, and you specify one or more tags using the CreateBackup operation, no existing file system tags are copied from the file system to the backup.
     */
    Tags?: Tags;
    /**
     * (Optional) The ID of the FSx for ONTAP volume to back up.
     */
    VolumeId?: VolumeId;
  }
  export interface CreateBackupResponse {
    /**
     * A description of the backup.
     */
    Backup?: Backup;
  }
  export interface CreateDataRepositoryAssociationRequest {
    FileSystemId: FileSystemId;
    /**
     * A path on the file system that points to a high-level directory (such as /ns1/) or subdirectory (such as /ns1/subdir/) that will be mapped 1-1 with DataRepositoryPath. The leading forward slash in the name is required. Two data repository associations cannot have overlapping file system paths. For example, if a data repository is associated with file system path /ns1/, then you cannot link another data repository with file system path /ns1/ns2. This path specifies where in your file system files will be exported from or imported to. This file system directory can be linked to only one Amazon S3 bucket, and no other S3 bucket can be linked to the directory.
     */
    FileSystemPath: Namespace;
    /**
     * The path to the Amazon S3 data repository that will be linked to the file system. The path can be an S3 bucket or prefix in the format s3://myBucket/myPrefix/. This path specifies where in the S3 data repository files will be imported from or exported to.
     */
    DataRepositoryPath: ArchivePath;
    /**
     * Set to true to run an import data repository task to import metadata from the data repository to the file system after the data repository association is created. Default is false.
     */
    BatchImportMetaDataOnCreate?: BatchImportMetaDataOnCreate;
    /**
     * For files imported from a data repository, this value determines the stripe count and maximum amount of data per file (in MiB) stored on a single physical disk. The maximum number of disks that a single file can be striped across is limited by the total number of disks that make up the file system. The default chunk size is 1,024 MiB (1 GiB) and can go as high as 512,000 MiB (500 GiB). Amazon S3 objects have a maximum size of 5 TB.
     */
    ImportedFileChunkSize?: Megabytes;
    /**
     * The configuration for an Amazon S3 data repository linked to an Amazon FSx Lustre file system with a data repository association. The configuration defines which file events (new, changed, or deleted files or directories) are automatically imported from the linked data repository to the file system or automatically exported from the file system to the data repository.
     */
    S3?: S3DataRepositoryConfiguration;
    ClientRequestToken?: ClientRequestToken;
    Tags?: Tags;
  }
  export interface CreateDataRepositoryAssociationResponse {
    /**
     * The response object returned after the data repository association is created.
     */
    Association?: DataRepositoryAssociation;
  }
  export interface CreateDataRepositoryTaskRequest {
    /**
     * Specifies the type of data repository task to create.
     */
    Type: DataRepositoryTaskType;
    /**
     * (Optional) The path or paths on the Amazon FSx file system to use when the data repository task is processed. The default path is the file system root directory. The paths you provide need to be relative to the mount point of the file system. If the mount point is /mnt/fsx and /mnt/fsx/path1 is a directory or file on the file system you want to export, then the path to provide is path1. If a path that you provide isn't valid, the task fails.
     */
    Paths?: DataRepositoryTaskPaths;
    FileSystemId: FileSystemId;
    /**
     * Defines whether or not Amazon FSx provides a CompletionReport once the task has completed. A CompletionReport provides a detailed report on the files that Amazon FSx processed that meet the criteria specified by the Scope parameter. For more information, see Working with Task Completion Reports.
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
     * A string of up to 64 ASCII characters that Amazon FSx uses to ensure idempotent creation. This string is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
     */
    ClientRequestToken?: ClientRequestToken;
    /**
     * Specifies the IDs of the subnets that the file system will be accessible from. For Windows MULTI_AZ_1 file system deployment types, provide exactly two subnet IDs, one for the preferred file server and one for the standby file server. You specify one of these subnets as the preferred subnet using the WindowsConfiguration &gt; PreferredSubnetID property. Windows SINGLE_AZ_1 and SINGLE_AZ_2 file system deployment types, Lustre file systems, and OpenZFS file systems provide exactly one subnet ID. The file server is launched in that subnet's Availability Zone.
     */
    SubnetIds: SubnetIds;
    /**
     * A list of IDs for the security groups that apply to the specified network interfaces created for file system access. These security groups apply to all network interfaces. This value isn't returned in later DescribeFileSystem requests.
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
    LustreConfiguration?: CreateFileSystemLustreConfiguration;
    /**
     * Sets the storage type for the Windows or OpenZFS file system that you're creating from a backup. Valid values are SSD and HDD.   Set to SSD to use solid state drive storage. SSD is supported on all Windows and OpenZFS deployment types.   Set to HDD to use hard disk drive storage. HDD is supported on SINGLE_AZ_2 and MULTI_AZ_1 FSx for Windows File Server file system deployment types.    The default value is SSD.   HDD and SSD storage types have different minimum storage capacity requirements. A restored file system's storage capacity is tied to the file system that was backed up. You can create a file system that uses HDD storage from a backup of a file system that used SSD storage if the original SSD file system had a storage capacity of at least 2000 GiB. 
     */
    StorageType?: StorageType;
    KmsKeyId?: KmsKeyId;
    /**
     * Sets the version for the Amazon FSx for Lustre file system that you're creating from a backup. Valid values are 2.10 and 2.12. You don't need to specify FileSystemTypeVersion because it will be applied using the backup's FileSystemTypeVersion setting. If you choose to specify FileSystemTypeVersion when creating from backup, the value must match the backup's FileSystemTypeVersion setting.
     */
    FileSystemTypeVersion?: FileSystemTypeVersion;
    /**
     * The OpenZFS configuration for the file system that's being created. 
     */
    OpenZFSConfiguration?: CreateFileSystemOpenZFSConfiguration;
  }
  export interface CreateFileSystemFromBackupResponse {
    /**
     * A description of the file system.
     */
    FileSystem?: FileSystem;
  }
  export interface CreateFileSystemLustreConfiguration {
    /**
     * (Optional) The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC time zone, where d is the weekday number, from 1 through 7, beginning with Monday and ending with Sunday.
     */
    WeeklyMaintenanceStartTime?: WeeklyTime;
    /**
     * (Optional) The path to the Amazon S3 bucket (including the optional prefix) that you're using as the data repository for your Amazon FSx for Lustre file system. The root of your FSx for Lustre file system will be mapped to the root of the Amazon S3 bucket you select. An example is s3://import-bucket/optional-prefix. If you specify a prefix after the Amazon S3 bucket name, only object keys with that prefix are loaded into the file system.  This parameter is not supported for file systems with the Persistent_2 deployment type. Instead, use CreateDataRepositoryAssociation to create a data repository association to link your Lustre file system to a data repository. 
     */
    ImportPath?: ArchivePath;
    /**
     * (Optional) Available with Scratch and Persistent_1 deployment types. Specifies the path in the Amazon S3 bucket where the root of your Amazon FSx file system is exported. The path must use the same Amazon S3 bucket as specified in ImportPath. You can provide an optional prefix to which new and changed data is to be exported from your Amazon FSx for Lustre file system. If an ExportPath value is not provided, Amazon FSx sets a default export path, s3://import-bucket/FSxLustre[creation-timestamp]. The timestamp is in UTC format, for example s3://import-bucket/FSxLustre20181105T222312Z. The Amazon S3 export bucket must be the same as the import bucket specified by ImportPath. If you specify only a bucket name, such as s3://import-bucket, you get a 1:1 mapping of file system objects to S3 bucket objects. This mapping means that the input data in S3 is overwritten on export. If you provide a custom prefix in the export path, such as s3://import-bucket/[custom-optional-prefix], Amazon FSx exports the contents of your file system to that export prefix in the Amazon S3 bucket.  This parameter is not supported for file systems with the Persistent_2 deployment type. Instead, use CreateDataRepositoryAssociation to create a data repository association to link your Lustre file system to a data repository. 
     */
    ExportPath?: ArchivePath;
    /**
     * (Optional) For files imported from a data repository, this value determines the stripe count and maximum amount of data per file (in MiB) stored on a single physical disk. The maximum number of disks that a single file can be striped across is limited by the total number of disks that make up the file system. The default chunk size is 1,024 MiB (1 GiB) and can go as high as 512,000 MiB (500 GiB). Amazon S3 objects have a maximum size of 5 TB. This parameter is not supported for file systems with the Persistent_2 deployment type. Instead, use CreateDataRepositoryAssociation to create a data repository association to link your Lustre file system to a data repository.
     */
    ImportedFileChunkSize?: Megabytes;
    /**
     * (Optional) Choose SCRATCH_1 and SCRATCH_2 deployment types when you need temporary storage and shorter-term processing of data. The SCRATCH_2 deployment type provides in-transit encryption of data and higher burst throughput capacity than SCRATCH_1. Choose PERSISTENT_1 for longer-term storage and for throughput-focused workloads that aren’t latency-sensitive. PERSISTENT_1 supports encryption of data in transit, and is available in all Amazon Web Services Regions in which FSx for Lustre is available. Choose PERSISTENT_2 for longer-term storage and for latency-sensitive workloads that require the highest levels of IOPS/throughput. PERSISTENT_2 supports SSD storage, and offers higher PerUnitStorageThroughput (up to 1000 MB/s/TiB). PERSISTENT_2 is available in a limited number of Amazon Web Services Regions. For more information, and an up-to-date list of Amazon Web Services Regions in which PERSISTENT_2 is available, see File system deployment options for FSx for Lustre in the Amazon FSx for Lustre User Guide.  If you choose PERSISTENT_2, and you set FileSystemTypeVersion to 2.10, the CreateFileSystem operation fails.  Encryption of data in transit is automatically turned on when you access SCRATCH_2, PERSISTENT_1 and PERSISTENT_2 file systems from Amazon EC2 instances that support automatic encryption in the Amazon Web Services Regions where they are available. For more information about encryption in transit for FSx for Lustre file systems, see Encrypting data in transit in the Amazon FSx for Lustre User Guide.  (Default = SCRATCH_1)
     */
    DeploymentType?: LustreDeploymentType;
    /**
     *  (Optional) Available with Scratch and Persistent_1 deployment types. When you create your file system, your existing S3 objects appear as file and directory listings. Use this property to choose how Amazon FSx keeps your file and directory listings up to date as you add or modify objects in your linked S3 bucket. AutoImportPolicy can have the following values:    NONE - (Default) AutoImport is off. Amazon FSx only updates file and directory listings from the linked S3 bucket when the file system is created. FSx does not update file and directory listings for any new or changed objects after choosing this option.    NEW - AutoImport is on. Amazon FSx automatically imports directory listings of any new objects added to the linked S3 bucket that do not currently exist in the FSx file system.     NEW_CHANGED - AutoImport is on. Amazon FSx automatically imports file and directory listings of any new objects added to the S3 bucket and any existing objects that are changed in the S3 bucket after you choose this option.    NEW_CHANGED_DELETED - AutoImport is on. Amazon FSx automatically imports file and directory listings of any new objects added to the S3 bucket, any existing objects that are changed in the S3 bucket, and any objects that were deleted in the S3 bucket.   For more information, see  Automatically import updates from your S3 bucket.  This parameter is not supported for file systems with the Persistent_2 deployment type. Instead, use CreateDataRepositoryAssociation" to create a data repository association to link your Lustre file system to a data repository. 
     */
    AutoImportPolicy?: AutoImportPolicyType;
    /**
     * Required with PERSISTENT_1 and PERSISTENT_2 deployment types, provisions the amount of read and write throughput for each 1 tebibyte (TiB) of file system storage capacity, in MB/s/TiB. File system throughput capacity is calculated by multiplying ﬁle system storage capacity (TiB) by the PerUnitStorageThroughput (MB/s/TiB). For a 2.4-TiB ﬁle system, provisioning 50 MB/s/TiB of PerUnitStorageThroughput yields 120 MB/s of ﬁle system throughput. You pay for the amount of throughput that you provision.  Valid values:   For PERSISTENT_1 SSD storage: 50, 100, 200 MB/s/TiB.   For PERSISTENT_1 HDD storage: 12, 40 MB/s/TiB.   For PERSISTENT_2 SSD storage: 125, 250, 500, 1000 MB/s/TiB.  
     */
    PerUnitStorageThroughput?: PerUnitStorageThroughput;
    DailyAutomaticBackupStartTime?: DailyTime;
    AutomaticBackupRetentionDays?: AutomaticBackupRetentionDays;
    /**
     * (Optional) Not available for use with file systems that are linked to a data repository. A boolean flag indicating whether tags for the file system should be copied to backups. The default value is false. If CopyTagsToBackups is set to true, all file system tags are copied to all automatic and user-initiated backups when the user doesn't specify any backup-specific tags. If CopyTagsToBackups is set to true and you specify one or more backup tags, only the specified tags are copied to backups. If you specify one or more tags when creating a user-initiated backup, no tags are copied from the file system, regardless of this value. (Default = false) For more information, see  Working with backups in the Amazon FSx for Lustre User Guide.
     */
    CopyTagsToBackups?: Flag;
    /**
     * The type of drive cache used by PERSISTENT_1 file systems that are provisioned with HDD storage devices. This parameter is required when storage type is HDD. Set this property to READ to improve the performance for frequently accessed files by caching up to 20% of the total storage capacity of the file system. This parameter is required when StorageType is set to HDD.
     */
    DriveCacheType?: DriveCacheType;
    /**
     * Sets the data compression configuration for the file system. DataCompressionType can have the following values:    NONE - (Default) Data compression is turned off when the file system is created.    LZ4 - Data compression is turned on with the LZ4 algorithm.   For more information, see Lustre data compression in the Amazon FSx for Lustre User Guide.
     */
    DataCompressionType?: DataCompressionType;
    /**
     * The Lustre logging configuration used when creating an Amazon FSx for Lustre file system. When logging is enabled, Lustre logs error and warning events for data repositories associated with your file system to Amazon CloudWatch Logs.
     */
    LogConfiguration?: LustreLogCreateConfiguration;
  }
  export interface CreateFileSystemOntapConfiguration {
    AutomaticBackupRetentionDays?: AutomaticBackupRetentionDays;
    DailyAutomaticBackupStartTime?: DailyTime;
    /**
     * Specifies the FSx for ONTAP file system deployment type to use in creating the file system. MULTI_AZ_1 is the supported ONTAP deployment type.
     */
    DeploymentType: OntapDeploymentType;
    /**
     * Specifies the IP address range in which the endpoints to access your file system will be created. By default, Amazon FSx selects an unused IP address range for you from the 198.19.* range.
     */
    EndpointIpAddressRange?: IpAddressRange;
    /**
     * The ONTAP administrative password for the fsxadmin user with which you administer your file system using the NetApp ONTAP CLI and REST API.
     */
    FsxAdminPassword?: AdminPassword;
    /**
     * The SSD IOPS configuration for the FSx for ONTAP file system.
     */
    DiskIopsConfiguration?: DiskIopsConfiguration;
    /**
     * Required when DeploymentType is set to MULTI_AZ_1. This specifies the subnet in which you want the preferred file server to be located.
     */
    PreferredSubnetId?: SubnetId;
    /**
     * Specifies the virtual private cloud (VPC) route tables in which your file system's endpoints will be created. You should specify all VPC route tables associated with the subnets in which your clients are located. By default, Amazon FSx selects your VPC's default route table.
     */
    RouteTableIds?: RouteTableIds;
    /**
     * Sets the throughput capacity for the file system that you're creating. Valid values are 128, 256, 512, 1024, and 2048 MBps.
     */
    ThroughputCapacity: MegabytesPerSecond;
    WeeklyMaintenanceStartTime?: WeeklyTime;
  }
  export interface CreateFileSystemOpenZFSConfiguration {
    AutomaticBackupRetentionDays?: AutomaticBackupRetentionDays;
    /**
     * A Boolean value indicating whether tags for the file system should be copied to backups. This value defaults to false. If it's set to true, all tags for the file system are copied to all automatic and user-initiated backups where the user doesn't specify tags. If this value is true, and you specify one or more tags, only the specified tags are copied to backups. If you specify one or more tags when creating a user-initiated backup, no tags are copied from the file system, regardless of this value.
     */
    CopyTagsToBackups?: Flag;
    /**
     * A Boolean value indicating whether tags for the volume should be copied to snapshots. This value defaults to false. If it's set to true, all tags for the volume are copied to snapshots where the user doesn't specify tags. If this value is true, and you specify one or more tags, only the specified tags are copied to snapshots. If you specify one or more tags when creating the snapshot, no tags are copied from the volume, regardless of this value. 
     */
    CopyTagsToVolumes?: Flag;
    DailyAutomaticBackupStartTime?: DailyTime;
    /**
     * Specifies the file system deployment type. Amazon FSx for OpenZFS supports SINGLE_AZ_1. SINGLE_AZ_1 is a file system configured for a single Availability Zone (AZ) of redundancy.
     */
    DeploymentType: OpenZFSDeploymentType;
    /**
     * Specifies the throughput of an Amazon FSx for OpenZFS file system, measured in megabytes per second (MB/s). Valid values are 64, 128, 256, 512, 1024, 2048, 3072, or 4096 MB/s. You pay for additional throughput capacity that you provision.
     */
    ThroughputCapacity: MegabytesPerSecond;
    WeeklyMaintenanceStartTime?: WeeklyTime;
    DiskIopsConfiguration?: DiskIopsConfiguration;
    /**
     * The configuration Amazon FSx uses when creating the root value of the Amazon FSx for OpenZFS file system. All volumes are children of the root volume. 
     */
    RootVolumeConfiguration?: OpenZFSCreateRootVolumeConfiguration;
  }
  export interface CreateFileSystemRequest {
    /**
     * A string of up to 64 ASCII characters that Amazon FSx uses to ensure idempotent creation. This string is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
     */
    ClientRequestToken?: ClientRequestToken;
    /**
     * The type of Amazon FSx file system to create. Valid values are WINDOWS, LUSTRE, ONTAP, and OPENZFS.
     */
    FileSystemType: FileSystemType;
    /**
     * Sets the storage capacity of the file system that you're creating, in gibibytes (GiB).  FSx for Lustre file systems - The amount of storage capacity that you can configure depends on the value that you set for StorageType and the Lustre DeploymentType, as follows:   For SCRATCH_2, PERSISTENT_2 and PERSISTENT_1 deployment types using SSD storage type, the valid values are 1200 GiB, 2400 GiB, and increments of 2400 GiB.   For PERSISTENT_1 HDD file systems, valid values are increments of 6000 GiB for 12 MB/s/TiB file systems and increments of 1800 GiB for 40 MB/s/TiB file systems.   For SCRATCH_1 deployment type, valid values are 1200 GiB, 2400 GiB, and increments of 3600 GiB.    FSx for ONTAP file systems - The amount of storage capacity that you can configure is from 1024 GiB up to 196,608 GiB (192 TiB).  FSx for OpenZFS file systems - The amount of storage capacity that you can configure is from 64 GiB up to 524,288 GiB (512 TiB).  FSx for Windows File Server file systems - The amount of storage capacity that you can configure depends on the value that you set for StorageType as follows:   For SSD storage, valid values are 32 GiB-65,536 GiB (64 TiB).   For HDD storage, valid values are 2000 GiB-65,536 GiB (64 TiB).  
     */
    StorageCapacity: StorageCapacity;
    /**
     * Sets the storage type for the file system that you're creating. Valid values are SSD and HDD.   Set to SSD to use solid state drive storage. SSD is supported on all Windows, Lustre, ONTAP, and OpenZFS deployment types.   Set to HDD to use hard disk drive storage. HDD is supported on SINGLE_AZ_2 and MULTI_AZ_1 Windows file system deployment types, and on PERSISTENT_1 Lustre file system deployment types.    Default value is SSD. For more information, see  Storage type options in the FSx for Windows File Server User Guide and Multiple storage options in the FSx for Lustre User Guide. 
     */
    StorageType?: StorageType;
    /**
     * Specifies the IDs of the subnets that the file system will be accessible from. For Windows and ONTAP MULTI_AZ_1 deployment types,provide exactly two subnet IDs, one for the preferred file server and one for the standby file server. You specify one of these subnets as the preferred subnet using the WindowsConfiguration &gt; PreferredSubnetID or OntapConfiguration &gt; PreferredSubnetID properties. For more information about Multi-AZ file system configuration, see  Availability and durability: Single-AZ and Multi-AZ file systems in the Amazon FSx for Windows User Guide and  Availability and durability in the Amazon FSx for ONTAP User Guide. For Windows SINGLE_AZ_1 and SINGLE_AZ_2 and all Lustre deployment types, provide exactly one subnet ID. The file server is launched in that subnet's Availability Zone.
     */
    SubnetIds: SubnetIds;
    /**
     * A list of IDs specifying the security groups to apply to all network interfaces created for file system access. This list isn't returned in later requests to describe the file system.
     */
    SecurityGroupIds?: SecurityGroupIds;
    /**
     * The tags to apply to the file system that's being created. The key value of the Name tag appears in the console as the file system name.
     */
    Tags?: Tags;
    KmsKeyId?: KmsKeyId;
    /**
     * The Microsoft Windows configuration for the file system that's being created. 
     */
    WindowsConfiguration?: CreateFileSystemWindowsConfiguration;
    LustreConfiguration?: CreateFileSystemLustreConfiguration;
    OntapConfiguration?: CreateFileSystemOntapConfiguration;
    /**
     * (Optional) For FSx for Lustre file systems, sets the Lustre version for the file system that you're creating. Valid values are 2.10 and 2.12:   2.10 is supported by the Scratch and Persistent_1 Lustre deployment types.   2.12 is supported by all Lustre deployment types. 2.12 is required when setting FSx for Lustre DeploymentType to PERSISTENT_2.   Default value = 2.10, except when DeploymentType is set to PERSISTENT_2, then the default is 2.12.  If you set FileSystemTypeVersion to 2.10 for a PERSISTENT_2 Lustre deployment type, the CreateFileSystem operation fails. 
     */
    FileSystemTypeVersion?: FileSystemTypeVersion;
    /**
     * The OpenZFS configuration for the file system that's being created.
     */
    OpenZFSConfiguration?: CreateFileSystemOpenZFSConfiguration;
  }
  export interface CreateFileSystemResponse {
    /**
     * The configuration of the file system that was created.
     */
    FileSystem?: FileSystem;
  }
  export interface CreateFileSystemWindowsConfiguration {
    /**
     * The ID for an existing Amazon Web Services Managed Microsoft Active Directory (AD) instance that the file system should join when it's created.
     */
    ActiveDirectoryId?: DirectoryId;
    SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfiguration;
    /**
     * Specifies the file system deployment type, valid values are the following:    MULTI_AZ_1 - Deploys a high availability file system that is configured for Multi-AZ redundancy to tolerate temporary Availability Zone (AZ) unavailability. You can only deploy a Multi-AZ file system in Amazon Web Services Regions that have a minimum of three Availability Zones. Also supports HDD storage type    SINGLE_AZ_1 - (Default) Choose to deploy a file system that is configured for single AZ redundancy.    SINGLE_AZ_2 - The latest generation Single AZ file system. Specifies a file system that is configured for single AZ redundancy and supports HDD storage type.   For more information, see  Availability and Durability: Single-AZ and Multi-AZ File Systems.
     */
    DeploymentType?: WindowsDeploymentType;
    /**
     * Required when DeploymentType is set to MULTI_AZ_1. This specifies the subnet in which you want the preferred file server to be located. For in-Amazon Web Services applications, we recommend that you launch your clients in the same Availability Zone (AZ) as your preferred file server to reduce cross-AZ data transfer costs and minimize latency. 
     */
    PreferredSubnetId?: SubnetId;
    /**
     * Sets the throughput capacity of an Amazon FSx file system, measured in megabytes per second (MB/s), in 2 to the nth increments, between 2^3 (8) and 2^11 (2048).
     */
    ThroughputCapacity: MegabytesPerSecond;
    /**
     * The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC time zone, where d is the weekday number, from 1 through 7, beginning with Monday and ending with Sunday.
     */
    WeeklyMaintenanceStartTime?: WeeklyTime;
    /**
     * The preferred time to take daily automatic backups, formatted HH:MM in the UTC time zone.
     */
    DailyAutomaticBackupStartTime?: DailyTime;
    /**
     * The number of days to retain automatic backups. The default is to retain backups for 7 days. Setting this value to 0 disables the creation of automatic backups. The maximum retention period for backups is 90 days.
     */
    AutomaticBackupRetentionDays?: AutomaticBackupRetentionDays;
    /**
     * A boolean flag indicating whether tags for the file system should be copied to backups. This value defaults to false. If it's set to true, all tags for the file system are copied to all automatic and user-initiated backups where the user doesn't specify tags. If this value is true, and you specify one or more tags, only the specified tags are copied to backups. If you specify one or more tags when creating a user-initiated backup, no tags are copied from the file system, regardless of this value.
     */
    CopyTagsToBackups?: Flag;
    /**
     * An array of one or more DNS alias names that you want to associate with the Amazon FSx file system. Aliases allow you to use existing DNS names to access the data in your Amazon FSx file system. You can associate up to 50 aliases with a file system at any time. You can associate additional DNS aliases after you create the file system using the AssociateFileSystemAliases operation. You can remove DNS aliases from the file system after it is created using the DisassociateFileSystemAliases operation. You only need to specify the alias name in the request payload. For more information, see Working with DNS Aliases and Walkthrough 5: Using DNS aliases to access your file system, including additional steps you must take to be able to access your file system using a DNS alias. An alias name has to meet the following requirements:   Formatted as a fully-qualified domain name (FQDN), hostname.domain, for example, accounting.example.com.   Can contain alphanumeric characters, the underscore (_), and the hyphen (-).   Cannot start or end with a hyphen.   Can start with a numeric.   For DNS alias names, Amazon FSx stores alphabetic characters as lowercase letters (a-z), regardless of how you specify them: as uppercase letters, lowercase letters, or the corresponding letters in escape codes.
     */
    Aliases?: AlternateDNSNames;
    /**
     * The configuration that Amazon FSx for Windows File Server uses to audit and log user accesses of files, folders, and file shares on the Amazon FSx for Windows File Server file system.
     */
    AuditLogConfiguration?: WindowsAuditLogCreateConfiguration;
  }
  export interface CreateOntapVolumeConfiguration {
    /**
     * Specifies the location in the SVM's namespace where the volume is mounted. The JunctionPath must have a leading forward slash, such as /vol3.
     */
    JunctionPath: JunctionPath;
    /**
     * The security style for the volume. Specify one of the following values:    UNIX if the file system is managed by a UNIX administrator, the majority of users are NFS clients, and an application accessing the data uses a UNIX user as the service account. UNIX is the default.    NTFS if the file system is managed by a Windows administrator, the majority of users are SMB clients, and an application accessing the data uses a Windows user as the service account.    MIXED if the file system is managed by both UNIX and Windows administrators and users consist of both NFS and SMB clients.  
     */
    SecurityStyle?: SecurityStyle;
    /**
     * Specifies the size of the volume, in megabytes (MB), that you are creating.
     */
    SizeInMegabytes: VolumeCapacity;
    /**
     * Set to true to enable deduplication, compression, and compaction storage efficiency features on the volume.
     */
    StorageEfficiencyEnabled: Flag;
    /**
     * Specifies the ONTAP SVM in which to create the volume.
     */
    StorageVirtualMachineId: StorageVirtualMachineId;
    TieringPolicy?: TieringPolicy;
  }
  export interface CreateOpenZFSOriginSnapshotConfiguration {
    SnapshotARN: ResourceARN;
    /**
     * The strategy used when copying data from the snapshot to the new volume.     CLONE - The new volume references the data in the origin snapshot. Cloning a snapshot is faster than copying data from the snapshot to a new volume and doesn't consume disk throughput. However, the origin snapshot can't be deleted if there is a volume using its copied data.     FULL_COPY - Copies all data from the snapshot to the new volume.   
     */
    CopyStrategy: OpenZFSCopyStrategy;
  }
  export interface CreateOpenZFSVolumeConfiguration {
    /**
     * The ID of the volume to use as the parent volume. 
     */
    ParentVolumeId: VolumeId;
    /**
     * The amount of storage in gibibytes (GiB) to reserve from the parent volume. You can't reserve more storage than the parent volume has reserved.
     */
    StorageCapacityReservationGiB?: IntegerNoMax;
    /**
     * The maximum amount of storage in gibibytes (GiB) that the volume can use from its parent. You can specify a quota larger than the storage on the parent volume.
     */
    StorageCapacityQuotaGiB?: IntegerNoMax;
    /**
     * Specifies the method used to compress the data on the volume. Unless the compression type is specified, volumes inherit the DataCompressionType value of their parent volume.    NONE - Doesn't compress the data on the volume.    ZSTD - Compresses the data in the volume using the Zstandard (ZSTD) compression algorithm. This algorithm reduces the amount of space used on your volume and has very little impact on compute resources.  
     */
    DataCompressionType?: OpenZFSDataCompressionType;
    /**
     * A Boolean value indicating whether tags for the volume should be copied to snapshots. This value defaults to false. If it's set to true, all tags for the volume are copied to snapshots where the user doesn't specify tags. If this value is true, and you specify one or more tags, only the specified tags are copied to snapshots. If you specify one or more tags when creating the snapshot, no tags are copied from the volume, regardless of this value. 
     */
    CopyTagsToSnapshots?: Flag;
    /**
     * The configuration object that specifies the snapshot to use as the origin of the data for the volume.
     */
    OriginSnapshot?: CreateOpenZFSOriginSnapshotConfiguration;
    /**
     * A Boolean value indicating whether the volume is read-only. 
     */
    ReadOnly?: ReadOnly;
    /**
     * The configuration object for mounting a Network File System (NFS) file system. 
     */
    NfsExports?: OpenZFSNfsExports;
    /**
     * An object specifying how much storage users or groups can use on the volume. 
     */
    UserAndGroupQuotas?: OpenZFSUserAndGroupQuotas;
  }
  export interface CreateSnapshotRequest {
    ClientRequestToken?: ClientRequestToken;
    /**
     * The name of the snapshot. 
     */
    Name: SnapshotName;
    /**
     * The ID of the volume that you are taking a snapshot of.
     */
    VolumeId: VolumeId;
    Tags?: Tags;
  }
  export interface CreateSnapshotResponse {
    /**
     * A description of the snapshot.
     */
    Snapshot?: Snapshot;
  }
  export interface CreateStorageVirtualMachineRequest {
    /**
     * Describes the self-managed Microsoft Active Directory to which you want to join the SVM. Joining an Active Directory provides user authentication and access control for SMB clients, including Microsoft Windows and macOS client accessing the file system.
     */
    ActiveDirectoryConfiguration?: CreateSvmActiveDirectoryConfiguration;
    ClientRequestToken?: ClientRequestToken;
    FileSystemId: FileSystemId;
    /**
     * The name of the SVM.
     */
    Name: StorageVirtualMachineName;
    /**
     * The password to use when managing the SVM using the NetApp ONTAP CLI or REST API. If you do not specify a password, you can still use the file system's fsxadmin user to manage the SVM.
     */
    SvmAdminPassword?: AdminPassword;
    Tags?: Tags;
    /**
     * The security style of the root volume of the SVM. Specify one of the following values:    UNIX if the file system is managed by a UNIX administrator, the majority of users are NFS clients, and an application accessing the data uses a UNIX user as the service account.    NTFS if the file system is managed by a Windows administrator, the majority of users are SMB clients, and an application accessing the data uses a Windows user as the service account.    MIXED if the file system is managed by both UNIX and Windows administrators and users consist of both NFS and SMB clients.  
     */
    RootVolumeSecurityStyle?: StorageVirtualMachineRootVolumeSecurityStyle;
  }
  export interface CreateStorageVirtualMachineResponse {
    /**
     * Returned after a successful CreateStorageVirtualMachine operation; describes the SVM just created.
     */
    StorageVirtualMachine?: StorageVirtualMachine;
  }
  export interface CreateSvmActiveDirectoryConfiguration {
    /**
     * The NetBIOS name of the Active Directory computer object that will be created for your SVM.
     */
    NetBiosName: NetBiosAlias;
    SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfiguration;
  }
  export interface CreateVolumeFromBackupRequest {
    BackupId: BackupId;
    ClientRequestToken?: ClientRequestToken;
    /**
     * The name of the new volume you're creating.
     */
    Name: VolumeName;
    /**
     * Specifies the configuration of the ONTAP volume that you are creating.
     */
    OntapConfiguration?: CreateOntapVolumeConfiguration;
    Tags?: Tags;
  }
  export interface CreateVolumeFromBackupResponse {
    /**
     * Returned after a successful CreateVolumeFromBackup API operation, describing the volume just created.
     */
    Volume?: Volume;
  }
  export interface CreateVolumeRequest {
    ClientRequestToken?: ClientRequestToken;
    /**
     * Specifies the type of volume to create; ONTAP and OPENZFS are the only valid volume types.
     */
    VolumeType: VolumeType;
    /**
     * Specifies the name of the volume that you're creating.
     */
    Name: VolumeName;
    /**
     * Specifies the configuration to use when creating the ONTAP volume.
     */
    OntapConfiguration?: CreateOntapVolumeConfiguration;
    Tags?: Tags;
    /**
     * Specifies the configuration to use when creating the OpenZFS volume.
     */
    OpenZFSConfiguration?: CreateOpenZFSVolumeConfiguration;
  }
  export interface CreateVolumeResponse {
    /**
     * Returned after a successful CreateVolume API operation, describing the volume just created.
     */
    Volume?: Volume;
  }
  export type CreationTime = Date;
  export type DNSName = string;
  export type DailyTime = string;
  export type DataCompressionType = "NONE"|"LZ4"|string;
  export interface DataRepositoryAssociation {
    /**
     * The system-generated, unique ID of the data repository association.
     */
    AssociationId?: DataRepositoryAssociationId;
    ResourceARN?: ResourceARN;
    FileSystemId?: FileSystemId;
    /**
     * Describes the state of a data repository association. The lifecycle can have the following values:    CREATING - The data repository association between the FSx file system and the S3 data repository is being created. The data repository is unavailable.    AVAILABLE - The data repository association is available for use.    MISCONFIGURED - Amazon FSx cannot automatically import updates from the S3 bucket or automatically export updates to the S3 bucket until the data repository association configuration is corrected.    UPDATING - The data repository association is undergoing a customer initiated update that might affect its availability.    DELETING - The data repository association is undergoing a customer initiated deletion.    FAILED - The data repository association is in a terminal state that cannot be recovered.  
     */
    Lifecycle?: DataRepositoryLifecycle;
    FailureDetails?: DataRepositoryFailureDetails;
    /**
     * A path on the file system that points to a high-level directory (such as /ns1/) or subdirectory (such as /ns1/subdir/) that will be mapped 1-1 with DataRepositoryPath. The leading forward slash in the name is required. Two data repository associations cannot have overlapping file system paths. For example, if a data repository is associated with file system path /ns1/, then you cannot link another data repository with file system path /ns1/ns2. This path specifies where in your file system files will be exported from or imported to. This file system directory can be linked to only one Amazon S3 bucket, and no other S3 bucket can be linked to the directory. 
     */
    FileSystemPath?: Namespace;
    /**
     * The path to the Amazon S3 data repository that will be linked to the file system. The path can be an S3 bucket or prefix in the format s3://myBucket/myPrefix/. This path specifies where in the S3 data repository files will be imported from or exported to.
     */
    DataRepositoryPath?: ArchivePath;
    /**
     * A boolean flag indicating whether an import data repository task to import metadata should run after the data repository association is created. The task runs if this flag is set to true.
     */
    BatchImportMetaDataOnCreate?: BatchImportMetaDataOnCreate;
    /**
     * For files imported from a data repository, this value determines the stripe count and maximum amount of data per file (in MiB) stored on a single physical disk. The maximum number of disks that a single file can be striped across is limited by the total number of disks that make up the file system. The default chunk size is 1,024 MiB (1 GiB) and can go as high as 512,000 MiB (500 GiB). Amazon S3 objects have a maximum size of 5 TB.
     */
    ImportedFileChunkSize?: Megabytes;
    /**
     * The configuration for an Amazon S3 data repository linked to an Amazon FSx Lustre file system with a data repository association. The configuration defines which file events (new, changed, or deleted files or directories) are automatically imported from the linked data repository to the file system or automatically exported from the file system to the data repository.
     */
    S3?: S3DataRepositoryConfiguration;
    Tags?: Tags;
    CreationTime?: CreationTime;
  }
  export type DataRepositoryAssociationId = string;
  export type DataRepositoryAssociationIds = DataRepositoryAssociationId[];
  export type DataRepositoryAssociations = DataRepositoryAssociation[];
  export interface DataRepositoryConfiguration {
    /**
     * Describes the state of the file system's S3 durable data repository, if it is configured with an S3 repository. The lifecycle can have the following values:    CREATING - The data repository configuration between the FSx file system and the linked S3 data repository is being created. The data repository is unavailable.    AVAILABLE - The data repository is available for use.    MISCONFIGURED - Amazon FSx cannot automatically import updates from the S3 bucket until the data repository configuration is corrected. For more information, see Troubleshooting a Misconfigured linked S3 bucket.     UPDATING - The data repository is undergoing a customer initiated update and availability may be impacted.    FAILED - The data repository is in a terminal state that cannot be recovered.  
     */
    Lifecycle?: DataRepositoryLifecycle;
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
    /**
     * Describes the file system's linked S3 data repository's AutoImportPolicy. The AutoImportPolicy configures how Amazon FSx keeps your file and directory listings up to date as you add or modify objects in your linked S3 bucket. AutoImportPolicy can have the following values:    NONE - (Default) AutoImport is off. Amazon FSx only updates file and directory listings from the linked S3 bucket when the file system is created. FSx does not update file and directory listings for any new or changed objects after choosing this option.    NEW - AutoImport is on. Amazon FSx automatically imports directory listings of any new objects added to the linked S3 bucket that do not currently exist in the FSx file system.     NEW_CHANGED - AutoImport is on. Amazon FSx automatically imports file and directory listings of any new objects added to the S3 bucket and any existing objects that are changed in the S3 bucket after you choose this option.    NEW_CHANGED_DELETED - AutoImport is on. Amazon FSx automatically imports file and directory listings of any new objects added to the S3 bucket, any existing objects that are changed in the S3 bucket, and any objects that were deleted in the S3 bucket.  
     */
    AutoImportPolicy?: AutoImportPolicyType;
    FailureDetails?: DataRepositoryFailureDetails;
  }
  export interface DataRepositoryFailureDetails {
    Message?: ErrorMessage;
  }
  export type DataRepositoryLifecycle = "CREATING"|"AVAILABLE"|"MISCONFIGURED"|"UPDATING"|"DELETING"|"FAILED"|string;
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
     * The type of data repository task.   The EXPORT_TO_REPOSITORY data repository task exports from your Lustre file system from to a linked S3 bucket.   The IMPORT_METADATA_FROM_REPOSITORY data repository task imports metadata changes from a linked S3 bucket to your Lustre file system.  
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
  export type DataRepositoryTaskFilterName = "file-system-id"|"task-lifecycle"|"data-repository-association-id"|string;
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
  export type DataRepositoryTaskType = "EXPORT_TO_REPOSITORY"|"IMPORT_METADATA_FROM_REPOSITORY"|string;
  export type DataRepositoryTasks = DataRepositoryTask[];
  export interface DeleteBackupRequest {
    /**
     * The ID of the backup that you want to delete.
     */
    BackupId: BackupId;
    /**
     * A string of up to 64 ASCII characters that Amazon FSx uses to ensure idempotent deletion. This parameter is automatically filled on your behalf when using the CLI or SDK.
     */
    ClientRequestToken?: ClientRequestToken;
  }
  export interface DeleteBackupResponse {
    /**
     * The ID of the backup that was deleted.
     */
    BackupId?: BackupId;
    /**
     * The lifecycle status of the backup. If the DeleteBackup operation is successful, the status is DELETED.
     */
    Lifecycle?: BackupLifecycle;
  }
  export type DeleteDataInFileSystem = boolean;
  export interface DeleteDataRepositoryAssociationRequest {
    /**
     * The ID of the data repository association that you want to delete.
     */
    AssociationId: DataRepositoryAssociationId;
    ClientRequestToken?: ClientRequestToken;
    /**
     * Set to true to delete the data in the file system that corresponds to the data repository association.
     */
    DeleteDataInFileSystem: DeleteDataInFileSystem;
  }
  export interface DeleteDataRepositoryAssociationResponse {
    /**
     * The ID of the data repository association being deleted.
     */
    AssociationId?: DataRepositoryAssociationId;
    /**
     * Describes the lifecycle state of the data repository association being deleted.
     */
    Lifecycle?: DataRepositoryLifecycle;
    /**
     * Indicates whether data in the file system that corresponds to the data repository association is being deleted. Default is false.
     */
    DeleteDataInFileSystem?: DeleteDataInFileSystem;
  }
  export interface DeleteFileSystemLustreConfiguration {
    /**
     * Set SkipFinalBackup to false if you want to take a final backup of the file system you are deleting. By default, Amazon FSx will not take a final backup on your behalf when the DeleteFileSystem operation is invoked. (Default = true)  The fsx:CreateBackup permission is required if you set SkipFinalBackup to false in order to delete the file system and take a final backup. 
     */
    SkipFinalBackup?: Flag;
    /**
     * Use if SkipFinalBackup is set to false, and you want to apply an array of tags to the final backup. If you have set the file system property CopyTagsToBackups to true, and you specify one or more FinalBackupTags when deleting a file system, Amazon FSx will not copy any existing file system tags to the backup.
     */
    FinalBackupTags?: Tags;
  }
  export interface DeleteFileSystemLustreResponse {
    /**
     * The ID of the final backup for this file system.
     */
    FinalBackupId?: BackupId;
    /**
     * The set of tags applied to the final backup.
     */
    FinalBackupTags?: Tags;
  }
  export interface DeleteFileSystemOpenZFSConfiguration {
    /**
     * By default, Amazon FSx for OpenZFS takes a final backup on your behalf when the DeleteFileSystem operation is invoked. Doing this helps protect you from data loss, and we highly recommend taking the final backup. If you want to skip this backup, use this value to do so. 
     */
    SkipFinalBackup?: Flag;
    FinalBackupTags?: Tags;
  }
  export interface DeleteFileSystemOpenZFSResponse {
    FinalBackupId?: BackupId;
    FinalBackupTags?: Tags;
  }
  export interface DeleteFileSystemRequest {
    /**
     * The ID of the file system that you want to delete.
     */
    FileSystemId: FileSystemId;
    /**
     * A string of up to 64 ASCII characters that Amazon FSx uses to ensure idempotent deletion. This token is automatically filled on your behalf when using the Command Line Interface (CLI) or an Amazon Web Services SDK.
     */
    ClientRequestToken?: ClientRequestToken;
    WindowsConfiguration?: DeleteFileSystemWindowsConfiguration;
    LustreConfiguration?: DeleteFileSystemLustreConfiguration;
    /**
     * The configuration object for the OpenZFS file system used in the DeleteFileSystem operation.
     */
    OpenZFSConfiguration?: DeleteFileSystemOpenZFSConfiguration;
  }
  export interface DeleteFileSystemResponse {
    /**
     * The ID of the file system that's being deleted.
     */
    FileSystemId?: FileSystemId;
    /**
     * The file system lifecycle for the deletion request. If the DeleteFileSystem operation is successful, this status is DELETING.
     */
    Lifecycle?: FileSystemLifecycle;
    WindowsResponse?: DeleteFileSystemWindowsResponse;
    LustreResponse?: DeleteFileSystemLustreResponse;
    /**
     * The response object for the OpenZFS file system that's being deleted in the DeleteFileSystem operation.
     */
    OpenZFSResponse?: DeleteFileSystemOpenZFSResponse;
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
  export type DeleteOpenZFSVolumeOption = "DELETE_CHILD_VOLUMES_AND_SNAPSHOTS"|string;
  export type DeleteOpenZFSVolumeOptions = DeleteOpenZFSVolumeOption[];
  export interface DeleteSnapshotRequest {
    ClientRequestToken?: ClientRequestToken;
    /**
     * The ID of the snapshot that you want to delete.
     */
    SnapshotId: SnapshotId;
  }
  export interface DeleteSnapshotResponse {
    /**
     * The ID of the deleted snapshot.
     */
    SnapshotId?: SnapshotId;
    /**
     * The lifecycle status of the snapshot. If the DeleteSnapshot operation is successful, this status is DELETING.
     */
    Lifecycle?: SnapshotLifecycle;
  }
  export interface DeleteStorageVirtualMachineRequest {
    ClientRequestToken?: ClientRequestToken;
    /**
     * The ID of the SVM that you want to delete.
     */
    StorageVirtualMachineId: StorageVirtualMachineId;
  }
  export interface DeleteStorageVirtualMachineResponse {
    /**
     * The ID of the SVM Amazon FSx is deleting.
     */
    StorageVirtualMachineId?: StorageVirtualMachineId;
    /**
     * Describes the lifecycle state of the SVM being deleted.
     */
    Lifecycle?: StorageVirtualMachineLifecycle;
  }
  export interface DeleteVolumeOntapConfiguration {
    /**
     * Set to true if you want to skip taking a final backup of the volume you are deleting.
     */
    SkipFinalBackup?: Flag;
    FinalBackupTags?: Tags;
  }
  export interface DeleteVolumeOntapResponse {
    FinalBackupId?: BackupId;
    FinalBackupTags?: Tags;
  }
  export interface DeleteVolumeOpenZFSConfiguration {
    /**
     * To delete the volume's child volumes, snapshots, and clones, use the string DELETE_CHILD_VOLUMES_AND_SNAPSHOTS.
     */
    Options?: DeleteOpenZFSVolumeOptions;
  }
  export interface DeleteVolumeRequest {
    ClientRequestToken?: ClientRequestToken;
    /**
     * The ID of the volume that you are deleting.
     */
    VolumeId: VolumeId;
    /**
     * For Amazon FSx for ONTAP volumes, specify whether to take a final backup of the volume and apply tags to the backup. To apply tags to the backup, you must have the fsx:TagResource permission.
     */
    OntapConfiguration?: DeleteVolumeOntapConfiguration;
    /**
     * For Amazon FSx for OpenZFS volumes, specify whether to delete all child volumes and snapshots.
     */
    OpenZFSConfiguration?: DeleteVolumeOpenZFSConfiguration;
  }
  export interface DeleteVolumeResponse {
    /**
     * The ID of the volume that's being deleted.
     */
    VolumeId?: VolumeId;
    /**
     * The lifecycle state of the volume being deleted. If the DeleteVolume operation is successful, this value is DELETING.
     */
    Lifecycle?: VolumeLifecycle;
    /**
     * Returned after a DeleteVolume request, showing the status of the delete request.
     */
    OntapResponse?: DeleteVolumeOntapResponse;
  }
  export interface DescribeBackupsRequest {
    /**
     * The IDs of the backups that you want to retrieve. This parameter value overrides any filters. If any IDs aren't found, a BackupNotFound error occurs.
     */
    BackupIds?: BackupIds;
    /**
     * The filters structure. The supported names are file-system-id, backup-type, file-system-type, and volume-id.
     */
    Filters?: Filters;
    /**
     * Maximum number of backups to return in the response. This parameter value must be greater than 0. The number of items that Amazon FSx returns is the minimum of the MaxResults parameter specified in the request and the service's internal maximum number of items per page.
     */
    MaxResults?: MaxResults;
    /**
     * An opaque pagination token returned from a previous DescribeBackups operation. If a token is present, the operation continues the list from where the returning call left off.
     */
    NextToken?: NextToken;
  }
  export interface DescribeBackupsResponse {
    /**
     * An array of backups.
     */
    Backups?: Backups;
    /**
     * A NextToken value is present if there are more backups than returned in the response. You can use the NextToken value in the subsequent request to fetch the backups. 
     */
    NextToken?: NextToken;
  }
  export interface DescribeDataRepositoryAssociationsRequest {
    /**
     * IDs of the data repository associations whose descriptions you want to retrieve (String).
     */
    AssociationIds?: DataRepositoryAssociationIds;
    Filters?: Filters;
    /**
     * The maximum number of resources to return in the response. This value must be an integer greater than zero.
     */
    MaxResults?: LimitedMaxResults;
    NextToken?: NextToken;
  }
  export interface DescribeDataRepositoryAssociationsResponse {
    /**
     * An array of one ore more data repository association descriptions.
     */
    Associations?: DataRepositoryAssociations;
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
  export interface DescribeFileSystemAliasesRequest {
    ClientRequestToken?: ClientRequestToken;
    /**
     * The ID of the file system to return the associated DNS aliases for (String).
     */
    FileSystemId: FileSystemId;
    /**
     * Maximum number of DNS aliases to return in the response (integer). This parameter value must be greater than 0. The number of items that Amazon FSx returns is the minimum of the MaxResults parameter specified in the request and the service's internal maximum number of items per page.
     */
    MaxResults?: MaxResults;
    /**
     * Opaque pagination token returned from a previous DescribeFileSystemAliases operation (String). If a token is included in the request, the action continues the list from where the previous returning call left off.
     */
    NextToken?: NextToken;
  }
  export interface DescribeFileSystemAliasesResponse {
    /**
     * An array of one or more DNS aliases currently associated with the specified file system.
     */
    Aliases?: Aliases;
    /**
     * Present if there are more DNS aliases than returned in the response (String). You can use the NextToken value in a later request to fetch additional descriptions. 
     */
    NextToken?: NextToken;
  }
  export interface DescribeFileSystemsRequest {
    /**
     * IDs of the file systems whose descriptions you want to retrieve (String).
     */
    FileSystemIds?: FileSystemIds;
    /**
     * Maximum number of file systems to return in the response (integer). This parameter value must be greater than 0. The number of items that Amazon FSx returns is the minimum of the MaxResults parameter specified in the request and the service's internal maximum number of items per page.
     */
    MaxResults?: MaxResults;
    /**
     * Opaque pagination token returned from a previous DescribeFileSystems operation (String). If a token present, the operation continues the list from where the returning call left off.
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
  export interface DescribeSnapshotsRequest {
    /**
     * The IDs of the snapshots that you want to retrieve. This parameter value overrides any filters. If any IDs aren't found, a SnapshotNotFound error occurs.
     */
    SnapshotIds?: SnapshotIds;
    /**
     * The filters structure. The supported names are file-system-id or volume-id.
     */
    Filters?: SnapshotFilters;
    MaxResults?: MaxResults;
    NextToken?: NextToken;
  }
  export interface DescribeSnapshotsResponse {
    /**
     * An array of snapshots.
     */
    Snapshots?: Snapshots;
    NextToken?: NextToken;
  }
  export interface DescribeStorageVirtualMachinesRequest {
    /**
     * Enter the ID of one or more SVMs that you want to view.
     */
    StorageVirtualMachineIds?: StorageVirtualMachineIds;
    /**
     * Enter a filter name:value pair to view a select set of SVMs.
     */
    Filters?: StorageVirtualMachineFilters;
    MaxResults?: MaxResults;
    NextToken?: NextToken;
  }
  export interface DescribeStorageVirtualMachinesResponse {
    /**
     * Returned after a successful DescribeStorageVirtualMachines operation, describing each SVM.
     */
    StorageVirtualMachines?: StorageVirtualMachines;
    NextToken?: NextToken;
  }
  export interface DescribeVolumesRequest {
    /**
     * The IDs of the volumes whose descriptions you want to retrieve.
     */
    VolumeIds?: VolumeIds;
    /**
     * Enter a filter Name and Values pair to view a select set of volumes.
     */
    Filters?: VolumeFilters;
    MaxResults?: MaxResults;
    NextToken?: NextToken;
  }
  export interface DescribeVolumesResponse {
    /**
     * Returned after a successful DescribeVolumes operation, describing each volume.
     */
    Volumes?: Volumes;
    NextToken?: NextToken;
  }
  export type DirectoryId = string;
  export type DirectoryPassword = string;
  export type DirectoryUserName = string;
  export interface DisassociateFileSystemAliasesRequest {
    ClientRequestToken?: ClientRequestToken;
    /**
     * Specifies the file system from which to disassociate the DNS aliases.
     */
    FileSystemId: FileSystemId;
    /**
     * An array of one or more DNS alias names to disassociate, or remove, from the file system.
     */
    Aliases: AlternateDNSNames;
  }
  export interface DisassociateFileSystemAliasesResponse {
    /**
     * An array of one or more DNS aliases that Amazon FSx is attempting to disassociate from the file system.
     */
    Aliases?: Aliases;
  }
  export interface DiskIopsConfiguration {
    /**
     * Specifies whether the number of IOPS for the file system is using the system default (AUTOMATIC) or was provisioned by the customer (USER_PROVISIONED).
     */
    Mode?: DiskIopsConfigurationMode;
    /**
     * The total number of SSD IOPS provisioned for the file system.
     */
    Iops?: Iops;
  }
  export type DiskIopsConfigurationMode = "AUTOMATIC"|"USER_PROVISIONED"|string;
  export type DnsIps = IpAddress[];
  export type DriveCacheType = "NONE"|"READ"|string;
  export type EndTime = Date;
  export type ErrorMessage = string;
  export type EventType = "NEW"|"CHANGED"|"DELETED"|string;
  export type EventTypes = EventType[];
  export type FailedCount = number;
  export interface FileSystem {
    /**
     * The Amazon Web Services account that created the file system. If the file system was created by an Identity and Access Management (IAM) user, the Amazon Web Services account to which the IAM user belongs is the owner.
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
     * The type of Amazon FSx file system, which can be LUSTRE, WINDOWS, ONTAP, or OPENZFS.
     */
    FileSystemType?: FileSystemType;
    /**
     * The lifecycle status of the file system. The following are the possible values and what they mean:    AVAILABLE - The file system is in a healthy state, and is reachable and available for use.    CREATING - Amazon FSx is creating the new file system.    DELETING - Amazon FSx is deleting an existing file system.    FAILED - An existing file system has experienced an unrecoverable failure. When creating a new file system, Amazon FSx was unable to create the file system.    MISCONFIGURED - The file system is in a failed but recoverable state.    UPDATING - The file system is undergoing a customer-initiated update.  
     */
    Lifecycle?: FileSystemLifecycle;
    FailureDetails?: FileSystemFailureDetails;
    /**
     * The storage capacity of the file system in gibibytes (GiB).
     */
    StorageCapacity?: StorageCapacity;
    /**
     * The type of storage the file system is using. If set to SSD, the file system uses solid state drive storage. If set to HDD, the file system uses hard disk drive storage. 
     */
    StorageType?: StorageType;
    /**
     * The ID of the primary virtual private cloud (VPC) for the file system.
     */
    VpcId?: VpcId;
    /**
     * Specifies the IDs of the subnets that the file system is accessible from. For the Amazon FSx Windows and ONTAP MULTI_AZ_1 file system deployment type, there are two subnet IDs, one for the preferred file server and one for the standby file server. The preferred file server subnet identified in the PreferredSubnetID property. All other file systems have only one subnet ID. For FSx for Lustre file systems, and Single-AZ Windows file systems, this is the ID of the subnet that contains the file system's endpoint. For MULTI_AZ_1 Windows and ONTAP file systems, the file system endpoint is available in the PreferredSubnetID.
     */
    SubnetIds?: SubnetIds;
    /**
     * The IDs of the elastic network interfaces from which a specific file system is accessible. The elastic network interface is automatically created in the same virtual private cloud (VPC) that the Amazon FSx file system was created in. For more information, see Elastic Network Interfaces in the Amazon EC2 User Guide.  For an Amazon FSx for Windows File Server file system, you can have one network interface ID. For an Amazon FSx for Lustre file system, you can have more than one.
     */
    NetworkInterfaceIds?: NetworkInterfaceIds;
    /**
     * The Domain Name System (DNS) name for the file system.
     */
    DNSName?: DNSName;
    /**
     * The ID of the Key Management Service (KMS) key used to encrypt the file system's data for Amazon FSx for Windows File Server file systems, Amazon FSx for NetApp ONTAP file systems, and PERSISTENT Amazon FSx for Lustre file systems at rest. If this ID isn't specified, the Amazon FSx-managed key for your account is used. The scratch Amazon FSx for Lustre file systems are always encrypted at rest using the Amazon FSx-managed key for your account. For more information, see Encrypt in the Key Management Service API Reference.
     */
    KmsKeyId?: KmsKeyId;
    /**
     * The Amazon Resource Name (ARN) for the file system resource.
     */
    ResourceARN?: ResourceARN;
    /**
     * The tags to associate with the file system. For more information, see Tagging your Amazon EC2 resources in the Amazon EC2 User Guide.
     */
    Tags?: Tags;
    /**
     * The configuration for this FSx for Windows File Server file system.
     */
    WindowsConfiguration?: WindowsFileSystemConfiguration;
    LustreConfiguration?: LustreFileSystemConfiguration;
    /**
     * A list of administrative actions for the file system that are in process or waiting to be processed. Administrative actions describe changes to the Amazon FSx system that you have initiated using the UpdateFileSystem operation.
     */
    AdministrativeActions?: AdministrativeActions;
    /**
     * The configuration for this FSx for ONTAP file system.
     */
    OntapConfiguration?: OntapFileSystemConfiguration;
    /**
     * The Lustre version of the Amazon FSx for Lustre file system, either 2.10 or 2.12.
     */
    FileSystemTypeVersion?: FileSystemTypeVersion;
    /**
     * The configuration for this Amazon FSx for OpenZFS file system.
     */
    OpenZFSConfiguration?: OpenZFSFileSystemConfiguration;
  }
  export type FileSystemAdministratorsGroupName = string;
  export interface FileSystemEndpoint {
    DNSName?: DNSName;
    /**
     * IP addresses of the file system endpoint.
     */
    IpAddresses?: OntapEndpointIpAddresses;
  }
  export interface FileSystemEndpoints {
    /**
     * An endpoint for managing your file system by setting up NetApp SnapMirror with other ONTAP systems.
     */
    Intercluster?: FileSystemEndpoint;
    /**
     * An endpoint for managing your file system using the NetApp ONTAP CLI and NetApp ONTAP API.
     */
    Management?: FileSystemEndpoint;
  }
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
  export type FileSystemType = "WINDOWS"|"LUSTRE"|"ONTAP"|"OPENZFS"|string;
  export type FileSystemTypeVersion = string;
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
  export type FilterName = "file-system-id"|"backup-type"|"file-system-type"|"volume-id"|"data-repository-type"|string;
  export type FilterValue = string;
  export type FilterValues = FilterValue[];
  export type Filters = Filter[];
  export type Flag = boolean;
  export type FlexCacheEndpointType = "NONE"|"ORIGIN"|"CACHE"|string;
  export type GeneralARN = string;
  export type IntegerNoMax = number;
  export type Iops = number;
  export type IpAddress = string;
  export type IpAddressRange = string;
  export type JunctionPath = string;
  export type KmsKeyId = string;
  export type LastUpdatedTime = Date;
  export interface LifecycleTransitionReason {
    Message?: ErrorMessage;
  }
  export type LimitedMaxResults = number;
  export interface ListTagsForResourceRequest {
    /**
     * The ARN of the Amazon FSx resource that will have its tags listed.
     */
    ResourceARN: ResourceARN;
    /**
     * Maximum number of tags to return in the response (integer). This parameter value must be greater than 0. The number of items that Amazon FSx returns is the minimum of the MaxResults parameter specified in the request and the service's internal maximum number of items per page.
     */
    MaxResults?: MaxResults;
    /**
     * Opaque pagination token returned from a previous ListTagsForResource operation (String). If a token present, the action continues the list from where the returning call left off.
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
  export type LustreAccessAuditLogLevel = "DISABLED"|"WARN_ONLY"|"ERROR_ONLY"|"WARN_ERROR"|string;
  export type LustreDeploymentType = "SCRATCH_1"|"SCRATCH_2"|"PERSISTENT_1"|"PERSISTENT_2"|string;
  export interface LustreFileSystemConfiguration {
    /**
     * The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC time zone. Here, d is the weekday number, from 1 through 7, beginning with Monday and ending with Sunday.
     */
    WeeklyMaintenanceStartTime?: WeeklyTime;
    DataRepositoryConfiguration?: DataRepositoryConfiguration;
    /**
     * The deployment type of the FSx for Lustre file system. Scratch deployment type is designed for temporary storage and shorter-term processing of data.  SCRATCH_1 and SCRATCH_2 deployment types are best suited for when you need temporary storage and shorter-term processing of data. The SCRATCH_2 deployment type provides in-transit encryption of data and higher burst throughput capacity than SCRATCH_1. The PERSISTENT_1 and PERSISTENT_2 deployment type is used for longer-term storage and workloads and encryption of data in transit. PERSISTENT_2 is built on Lustre v2.12 and offers higher PerUnitStorageThroughput (up to 1000 MB/s/TiB) along with a lower minimum storage capacity requirement (600 GiB). To learn more about FSx for Lustre deployment types, see  FSx for Lustre deployment options. The default is SCRATCH_1.
     */
    DeploymentType?: LustreDeploymentType;
    /**
     * Per unit storage throughput represents the megabytes per second of read or write throughput per 1 tebibyte of storage provisioned. File system throughput capacity is equal to Storage capacity (TiB) * PerUnitStorageThroughput (MB/s/TiB). This option is only valid for PERSISTENT_1 and PERSISTENT_2 deployment types.  Valid values:   For PERSISTENT_1 SSD storage: 50, 100, 200.   For PERSISTENT_1 HDD storage: 12, 40.   For PERSISTENT_2 SSD storage: 125, 250, 500, 1000.  
     */
    PerUnitStorageThroughput?: PerUnitStorageThroughput;
    /**
     * You use the MountName value when mounting the file system. For the SCRATCH_1 deployment type, this value is always "fsx". For SCRATCH_2, PERSISTENT_1, and PERSISTENT_2 deployment types, this value is a string that is unique within an Amazon Web Services Region. 
     */
    MountName?: LustreFileSystemMountName;
    DailyAutomaticBackupStartTime?: DailyTime;
    AutomaticBackupRetentionDays?: AutomaticBackupRetentionDays;
    /**
     * A boolean flag indicating whether tags on the file system are copied to backups. If it's set to true, all tags on the file system are copied to all automatic backups and any user-initiated backups where the user doesn't specify any tags. If this value is true, and you specify one or more tags, only the specified tags are copied to backups. If you specify one or more tags when creating a user-initiated backup, no tags are copied from the file system, regardless of this value. (Default = false)
     */
    CopyTagsToBackups?: Flag;
    /**
     * The type of drive cache used by PERSISTENT_1 file systems that are provisioned with HDD storage devices. This parameter is required when StorageType is HDD. When set to READ the file system has an SSD storage cache that is sized to 20% of the file system's storage capacity. This improves the performance for frequently accessed files by caching up to 20% of the total storage capacity. This parameter is required when StorageType is set to HDD.
     */
    DriveCacheType?: DriveCacheType;
    /**
     * The data compression configuration for the file system. DataCompressionType can have the following values:    NONE - Data compression is turned off for the file system.    LZ4 - Data compression is turned on with the LZ4 algorithm.   For more information, see Lustre data compression.
     */
    DataCompressionType?: DataCompressionType;
    /**
     * The Lustre logging configuration. Lustre logging writes the enabled log events for your file system to Amazon CloudWatch Logs.
     */
    LogConfiguration?: LustreLogConfiguration;
  }
  export type LustreFileSystemMountName = string;
  export interface LustreLogConfiguration {
    /**
     * The data repository events that are logged by Amazon FSx.    WARN_ONLY - only warning events are logged.    ERROR_ONLY - only error events are logged.    WARN_ERROR - both warning events and error events are logged.    DISABLED - logging of data repository events is turned off.  
     */
    Level: LustreAccessAuditLogLevel;
    /**
     * The Amazon Resource Name (ARN) that specifies the destination of the logs. The destination can be any Amazon CloudWatch Logs log group ARN. The destination ARN must be in the same Amazon Web Services partition, Amazon Web Services Region, and Amazon Web Services account as your Amazon FSx file system.
     */
    Destination?: GeneralARN;
  }
  export interface LustreLogCreateConfiguration {
    /**
     * Sets which data repository events are logged by Amazon FSx.    WARN_ONLY - only warning events are logged.    ERROR_ONLY - only error events are logged.    WARN_ERROR - both warning events and error events are logged.    DISABLED - logging of data repository events is turned off.  
     */
    Level: LustreAccessAuditLogLevel;
    /**
     * The Amazon Resource Name (ARN) that specifies the destination of the logs. The destination can be any Amazon CloudWatch Logs log group ARN, with the following requirements:   The destination ARN that you provide must be in the same Amazon Web Services partition, Amazon Web Services Region, and Amazon Web Services account as your Amazon FSx file system.   The name of the Amazon CloudWatch Logs log group must begin with the /aws/fsx prefix.   If you do not provide a destination, Amazon FSx will create and use a log stream in the CloudWatch Logs /aws/fsx/lustre log group.   If Destination is provided and the resource does not exist, the request will fail with a BadRequest error.   If Level is set to DISABLED, you cannot specify a destination in Destination.  
     */
    Destination?: GeneralARN;
  }
  export type MaxResults = number;
  export type Megabytes = number;
  export type MegabytesPerSecond = number;
  export type Namespace = string;
  export type NetBiosAlias = string;
  export type NetworkInterfaceId = string;
  export type NetworkInterfaceIds = NetworkInterfaceId[];
  export type NextToken = string;
  export type OntapDeploymentType = "MULTI_AZ_1"|string;
  export type OntapEndpointIpAddresses = IpAddress[];
  export interface OntapFileSystemConfiguration {
    AutomaticBackupRetentionDays?: AutomaticBackupRetentionDays;
    DailyAutomaticBackupStartTime?: DailyTime;
    /**
     * The ONTAP file system deployment type.
     */
    DeploymentType?: OntapDeploymentType;
    /**
     * The IP address range in which the endpoints to access your file system are created.
     */
    EndpointIpAddressRange?: IpAddressRange;
    /**
     * The Management and Intercluster endpoints that are used to access data or to manage the file system using the NetApp ONTAP CLI, REST API, or NetApp SnapMirror.
     */
    Endpoints?: FileSystemEndpoints;
    /**
     * The SSD IOPS configuration for the ONTAP file system, specifying the number of provisioned IOPS and the provision mode.
     */
    DiskIopsConfiguration?: DiskIopsConfiguration;
    PreferredSubnetId?: SubnetId;
    /**
     * The VPC route tables in which your file system's endpoints are created.
     */
    RouteTableIds?: RouteTableIds;
    ThroughputCapacity?: MegabytesPerSecond;
    WeeklyMaintenanceStartTime?: WeeklyTime;
  }
  export interface OntapVolumeConfiguration {
    /**
     * Specifies the FlexCache endpoint type of the volume. Valid values are the following:    NONE specifies that the volume doesn't have a FlexCache configuration. NONE is the default.    ORIGIN specifies that the volume is the origin volume for a FlexCache volume.    CACHE specifies that the volume is a FlexCache volume.  
     */
    FlexCacheEndpointType?: FlexCacheEndpointType;
    /**
     * Specifies the directory that network-attached storage (NAS) clients use to mount the volume, along with the storage virtual machine (SVM) Domain Name System (DNS) name or IP address. You can create a JunctionPath directly below a parent volume junction or on a directory within a volume. A JunctionPath for a volume named vol3 might be /vol1/vol2/vol3, or /vol1/dir2/vol3, or even /dir1/dir2/vol3.
     */
    JunctionPath?: JunctionPath;
    /**
     * The security style for the volume, which can be UNIX, NTFS, or MIXED.
     */
    SecurityStyle?: SecurityStyle;
    /**
     * The configured size of the volume, in megabytes (MBs).
     */
    SizeInMegabytes?: VolumeCapacity;
    /**
     * The volume's storage efficiency setting.
     */
    StorageEfficiencyEnabled?: Flag;
    /**
     * The ID of the volume's storage virtual machine.
     */
    StorageVirtualMachineId?: StorageVirtualMachineId;
    /**
     * A Boolean flag indicating whether this volume is the root volume for its storage virtual machine (SVM). Only one volume on an SVM can be the root volume. This value defaults to false. If this value is true, then this is the SVM root volume. This flag is useful when you're deleting an SVM, because you must first delete all non-root volumes. This flag, when set to false, helps you identify which volumes to delete before you can delete the SVM.
     */
    StorageVirtualMachineRoot?: Flag;
    /**
     * The volume's TieringPolicy setting.
     */
    TieringPolicy?: TieringPolicy;
    /**
     * The volume's universally unique identifier (UUID).
     */
    UUID?: UUID;
    /**
     * Specifies the type of volume. Valid values are the following:    RW specifies a read/write volume. RW is the default.    DP specifies a data-protection volume. You can protect data by replicating it to data-protection mirror copies. If a disaster occurs, you can use these data-protection mirror copies to recover data.    LS specifies a load-sharing mirror volume. A load-sharing mirror reduces the network traffic to a FlexVol volume by providing additional read-only access to clients.  
     */
    OntapVolumeType?: OntapVolumeType;
  }
  export type OntapVolumeType = "RW"|"DP"|"LS"|string;
  export interface OpenZFSClientConfiguration {
    /**
     * A value that specifies who can mount the file system. You can provide a wildcard character (*), an IP address (0.0.0.0), or a CIDR address (192.0.2.0/24. By default, Amazon FSx uses the wildcard character when specifying the client. 
     */
    Clients: OpenZFSClients;
    /**
     * The options to use when mounting the file system. For a list of options that you can use with Network File System (NFS), see the exports(5) - Linux man page. When choosing your options, consider the following:    crossmount is used by default. If you don't specify crossmount when changing the client configuration, you won't be able to see or access snapshots in your file system's snapshot directory.    sync is used by default. If you instead specify async, the system acknowledges writes before writing to disk. If the system crashes before the writes are finished, you lose the unwritten data.   
     */
    Options: OpenZFSNfsExportOptions;
  }
  export type OpenZFSClientConfigurations = OpenZFSClientConfiguration[];
  export type OpenZFSClients = string;
  export type OpenZFSCopyStrategy = "CLONE"|"FULL_COPY"|string;
  export interface OpenZFSCreateRootVolumeConfiguration {
    /**
     * Specifies the method used to compress the data on the volume. Unless the compression type is specified, volumes inherit the DataCompressionType value of their parent volume.    NONE - Doesn't compress the data on the volume.    ZSTD - Compresses the data in the volume using the ZStandard (ZSTD) compression algorithm. This algorithm reduces the amount of space used on your volume and has very little impact on compute resources.  
     */
    DataCompressionType?: OpenZFSDataCompressionType;
    /**
     * The configuration object for mounting a file system.
     */
    NfsExports?: OpenZFSNfsExports;
    /**
     * An object specifying how much storage users or groups can use on the volume.
     */
    UserAndGroupQuotas?: OpenZFSUserAndGroupQuotas;
    /**
     * A Boolean value indicating whether tags for the volume should be copied to snapshots. This value defaults to false. If it's set to true, all tags for the volume are copied to snapshots where the user doesn't specify tags. If this value is true and you specify one or more tags, only the specified tags are copied to snapshots. If you specify one or more tags when creating the snapshot, no tags are copied from the volume, regardless of this value. 
     */
    CopyTagsToSnapshots?: Flag;
    /**
     * A Boolean value indicating whether the volume is read-only. Setting this value to true can be useful after you have completed changes to a volume and no longer want changes to occur. 
     */
    ReadOnly?: ReadOnly;
  }
  export type OpenZFSDataCompressionType = "NONE"|"ZSTD"|string;
  export type OpenZFSDeploymentType = "SINGLE_AZ_1"|string;
  export interface OpenZFSFileSystemConfiguration {
    AutomaticBackupRetentionDays?: AutomaticBackupRetentionDays;
    /**
     * A Boolean value indicating whether tags on the file system should be copied to backups. If it's set to true, all tags on the file system are copied to all automatic backups and any user-initiated backups where the user doesn't specify any tags. If this value is true and you specify one or more tags, only the specified tags are copied to backups. If you specify one or more tags when creating a user-initiated backup, no tags are copied from the file system, regardless of this value. 
     */
    CopyTagsToBackups?: Flag;
    /**
     * A Boolean value indicating whether tags for the volume should be copied to snapshots. This value defaults to false. If it's set to true, all tags for the volume are copied to snapshots where the user doesn't specify tags. If this value is true and you specify one or more tags, only the specified tags are copied to snapshots. If you specify one or more tags when creating the snapshot, no tags are copied from the volume, regardless of this value. 
     */
    CopyTagsToVolumes?: Flag;
    DailyAutomaticBackupStartTime?: DailyTime;
    /**
     * Specifies the file-system deployment type. Amazon FSx for OpenZFS supports SINGLE_AZ_1. SINGLE_AZ_1 is a file system configured for a single Availability Zone (AZ) of redundancy. 
     */
    DeploymentType?: OpenZFSDeploymentType;
    /**
     * The throughput of an Amazon FSx file system, measured in megabytes per second (MBps), in 2 to the nth increments, between 2^3 (8) and 2^11 (2048). 
     */
    ThroughputCapacity?: MegabytesPerSecond;
    WeeklyMaintenanceStartTime?: WeeklyTime;
    DiskIopsConfiguration?: DiskIopsConfiguration;
    /**
     * The ID of the root volume of the OpenZFS file system. 
     */
    RootVolumeId?: VolumeId;
  }
  export interface OpenZFSNfsExport {
    /**
     * A list of configuration objects that contain the client and options for mounting the OpenZFS file system. 
     */
    ClientConfigurations: OpenZFSClientConfigurations;
  }
  export type OpenZFSNfsExportOption = string;
  export type OpenZFSNfsExportOptions = OpenZFSNfsExportOption[];
  export type OpenZFSNfsExports = OpenZFSNfsExport[];
  export interface OpenZFSOriginSnapshotConfiguration {
    SnapshotARN?: ResourceARN;
    /**
     * The strategy used when copying data from the snapshot to the new volume.     CLONE - The new volume references the data in the origin snapshot. Cloning a snapshot is faster than copying the data from a snapshot to a new volume and doesn't consume disk throughput. However, the origin snapshot can't be deleted if there is a volume using its copied data.     FULL_COPY - Copies all data from the snapshot to the new volume.   
     */
    CopyStrategy?: OpenZFSCopyStrategy;
  }
  export type OpenZFSQuotaType = "USER"|"GROUP"|string;
  export type OpenZFSUserAndGroupQuotas = OpenZFSUserOrGroupQuota[];
  export interface OpenZFSUserOrGroupQuota {
    /**
     * A value that specifies whether the quota applies to a user or group.
     */
    Type: OpenZFSQuotaType;
    /**
     * The ID of the user or group.
     */
    Id: IntegerNoMax;
    /**
     * The amount of storage that the user or group can use in gibibytes (GiB).
     */
    StorageCapacityQuotaGiB: IntegerNoMax;
  }
  export interface OpenZFSVolumeConfiguration {
    /**
     * The ID of the parent volume.
     */
    ParentVolumeId?: VolumeId;
    /**
     * The path to the volume from the root volume. For example, fsx/parentVolume/volume1.
     */
    VolumePath?: VolumePath;
    /**
     * The amount of storage in gibibytes (GiB) to reserve from the parent volume. You can't reserve more storage than the parent volume has reserved.
     */
    StorageCapacityReservationGiB?: IntegerNoMax;
    /**
     * The maximum amount of storage in gibibtyes (GiB) that the volume can use from its parent. You can specify a quota larger than the storage on the parent volume.
     */
    StorageCapacityQuotaGiB?: IntegerNoMax;
    /**
     * The method used to compress the data on the volume. Unless a compression type is specified, volumes inherit the DataCompressionType value of their parent volume.    NONE - Doesn't compress the data on the volume.    ZSTD - Compresses the data in the volume using the Zstandard (ZSTD) compression algorithm. This algorithm reduces the amount of space used on your volume and has very little impact on compute resources.  
     */
    DataCompressionType?: OpenZFSDataCompressionType;
    /**
     * A Boolean value indicating whether tags for the volume should be copied to snapshots. This value defaults to false. If it's set to true, all tags for the volume are copied to snapshots where the user doesn't specify tags. If this value is true and you specify one or more tags, only the specified tags are copied to snapshots. If you specify one or more tags when creating the snapshot, no tags are copied from the volume, regardless of this value. 
     */
    CopyTagsToSnapshots?: Flag;
    /**
     * The configuration object that specifies the snapshot to use as the origin of the data for the volume.
     */
    OriginSnapshot?: OpenZFSOriginSnapshotConfiguration;
    /**
     * A Boolean value indicating whether the volume is read-only.
     */
    ReadOnly?: ReadOnly;
    /**
     * The configuration object for mounting a Network File System (NFS) file system.
     */
    NfsExports?: OpenZFSNfsExports;
    /**
     * An object specifying how much storage users or groups can use on the volume. 
     */
    UserAndGroupQuotas?: OpenZFSUserAndGroupQuotas;
  }
  export type OrganizationalUnitDistinguishedName = string;
  export type PerUnitStorageThroughput = number;
  export type ProgressPercent = number;
  export type ReadOnly = boolean;
  export type Region = string;
  export interface ReleaseFileSystemNfsV3LocksRequest {
    FileSystemId: FileSystemId;
    ClientRequestToken?: ClientRequestToken;
  }
  export interface ReleaseFileSystemNfsV3LocksResponse {
    FileSystem?: FileSystem;
  }
  export type ReportFormat = "REPORT_CSV_20191124"|string;
  export type ReportScope = "FAILED_FILES_ONLY"|string;
  export type RequestTime = Date;
  export type ResourceARN = string;
  export type ResourceType = "FILE_SYSTEM"|"VOLUME"|string;
  export type RestoreOpenZFSVolumeOption = "DELETE_INTERMEDIATE_SNAPSHOTS"|"DELETE_CLONED_VOLUMES"|string;
  export type RestoreOpenZFSVolumeOptions = RestoreOpenZFSVolumeOption[];
  export interface RestoreVolumeFromSnapshotRequest {
    ClientRequestToken?: ClientRequestToken;
    /**
     * The ID of the volume that you are restoring.
     */
    VolumeId: VolumeId;
    /**
     * The ID of the source snapshot. Specifies the snapshot that you are restoring from.
     */
    SnapshotId: SnapshotId;
    /**
     * The settings used when restoring the specified volume from snapshot.     DELETE_INTERMEDIATE_SNAPSHOTS - Deletes snapshots between the current state and the specified snapshot. If there are intermediate snapshots and this option isn't used, RestoreVolumeFromSnapshot fails.    DELETE_CLONED_VOLUMES - Deletes any volumes cloned from this volume. If there are any cloned volumes and this option isn't used, RestoreVolumeFromSnapshot fails.  
     */
    Options?: RestoreOpenZFSVolumeOptions;
  }
  export interface RestoreVolumeFromSnapshotResponse {
    /**
     * The ID of the volume that you restored.
     */
    VolumeId?: VolumeId;
    /**
     * The lifecycle state of the volume being restored.
     */
    Lifecycle?: VolumeLifecycle;
  }
  export type RouteTableId = string;
  export type RouteTableIds = RouteTableId[];
  export interface S3DataRepositoryConfiguration {
    /**
     * Specifies the type of updated objects (new, changed, deleted) that will be automatically imported from the linked S3 bucket to your file system.
     */
    AutoImportPolicy?: AutoImportPolicy;
    /**
     * Specifies the type of updated objects (new, changed, deleted) that will be automatically exported from your file system to the linked S3 bucket.
     */
    AutoExportPolicy?: AutoExportPolicy;
  }
  export type SecurityGroupId = string;
  export type SecurityGroupIds = SecurityGroupId[];
  export type SecurityStyle = "UNIX"|"NTFS"|"MIXED"|string;
  export interface SelfManagedActiveDirectoryAttributes {
    /**
     * The fully qualified domain name of the self-managed AD directory.
     */
    DomainName?: ActiveDirectoryFullyQualifiedName;
    /**
     * The fully qualified distinguished name of the organizational unit within the self-managed AD directory to which the Windows File Server or ONTAP storage virtual machine (SVM) instance is joined.
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
     * A list of up to three IP addresses of DNS servers or domain controllers in the self-managed AD directory.
     */
    DnsIps?: DnsIps;
  }
  export interface SelfManagedActiveDirectoryConfiguration {
    /**
     * The fully qualified domain name of the self-managed AD directory, such as corp.example.com.
     */
    DomainName: ActiveDirectoryFullyQualifiedName;
    /**
     * (Optional) The fully qualified distinguished name of the organizational unit within your self-managed AD directory. Amazon FSx only accepts OU as the direct parent of the file system. An example is OU=FSx,DC=yourdomain,DC=corp,DC=com. To learn more, see RFC 2253. If none is provided, the FSx file system is created in the default location of your self-managed AD directory.   Only Organizational Unit (OU) objects can be the direct parent of the file system that you're creating. 
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
     * A list of up to three IP addresses of DNS servers or domain controllers in the self-managed AD directory. 
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
     * A list of up to three IP addresses of DNS servers or domain controllers in the self-managed AD directory.
     */
    DnsIps?: DnsIps;
  }
  export interface Snapshot {
    ResourceARN?: ResourceARN;
    /**
     * The ID of the snapshot.
     */
    SnapshotId?: SnapshotId;
    /**
     * The name of the snapshot.
     */
    Name?: SnapshotName;
    /**
     * The ID of the volume that the snapshot is of.
     */
    VolumeId?: VolumeId;
    CreationTime?: CreationTime;
    /**
     * The lifecycle status of the snapshot.    PENDING - Amazon FSx hasn't started creating the snapshot.    CREATING - Amazon FSx is creating the snapshot.    DELETING - Amazon FSx is deleting the snapshot.    AVAILABLE - The snapshot is fully available.  
     */
    Lifecycle?: SnapshotLifecycle;
    Tags?: Tags;
    /**
     * A list of administrative actions for the file system that are in process or waiting to be processed. Administrative actions describe changes to the Amazon FSx system.
     */
    AdministrativeActions?: AdministrativeActions;
  }
  export interface SnapshotFilter {
    /**
     * The name of the filter to use. You can filter by the file-system-id or by volume-id.
     */
    Name?: SnapshotFilterName;
    /**
     * The file-system-id or volume-id that you are filtering for.
     */
    Values?: SnapshotFilterValues;
  }
  export type SnapshotFilterName = "file-system-id"|"volume-id"|string;
  export type SnapshotFilterValue = string;
  export type SnapshotFilterValues = SnapshotFilterValue[];
  export type SnapshotFilters = SnapshotFilter[];
  export type SnapshotId = string;
  export type SnapshotIds = SnapshotId[];
  export type SnapshotLifecycle = "PENDING"|"CREATING"|"DELETING"|"AVAILABLE"|string;
  export type SnapshotName = string;
  export type Snapshots = Snapshot[];
  export type SourceBackupId = string;
  export type StartTime = Date;
  export type Status = "FAILED"|"IN_PROGRESS"|"PENDING"|"COMPLETED"|"UPDATED_OPTIMIZING"|string;
  export type StorageCapacity = number;
  export type StorageType = "SSD"|"HDD"|string;
  export interface StorageVirtualMachine {
    /**
     * Describes the Microsoft Active Directory configuration to which the SVM is joined, if applicable.
     */
    ActiveDirectoryConfiguration?: SvmActiveDirectoryConfiguration;
    CreationTime?: CreationTime;
    /**
     * The endpoints that are used to access data or to manage the SVM using the NetApp ONTAP CLI, REST API, or NetApp CloudManager. They are the Iscsi, Management, Nfs, and Smb endpoints.
     */
    Endpoints?: SvmEndpoints;
    FileSystemId?: FileSystemId;
    /**
     * Describes the SVM's lifecycle status.    CREATED - The SVM is fully available for use.    CREATING - Amazon FSx is creating the new SVM.    DELETING - Amazon FSx is deleting an existing SVM.    FAILED - Amazon FSx was unable to create the SVM.    MISCONFIGURED - The SVM is in a failed but recoverable state.    PENDING - Amazon FSx has not started creating the SVM.  
     */
    Lifecycle?: StorageVirtualMachineLifecycle;
    /**
     * The name of the SVM, if provisioned.
     */
    Name?: StorageVirtualMachineName;
    ResourceARN?: ResourceARN;
    /**
     * The SVM's system generated unique ID.
     */
    StorageVirtualMachineId?: StorageVirtualMachineId;
    /**
     * Describes the SVM's subtype.
     */
    Subtype?: StorageVirtualMachineSubtype;
    /**
     * The SVM's UUID (universally unique identifier).
     */
    UUID?: UUID;
    Tags?: Tags;
    /**
     * Describes why the SVM lifecycle state changed.
     */
    LifecycleTransitionReason?: LifecycleTransitionReason;
    /**
     * The security style of the root volume of the SVM.
     */
    RootVolumeSecurityStyle?: StorageVirtualMachineRootVolumeSecurityStyle;
  }
  export interface StorageVirtualMachineFilter {
    /**
     * The name for this filter.
     */
    Name?: StorageVirtualMachineFilterName;
    /**
     * The values of the filter. These are all the values for any of the applied filters.
     */
    Values?: StorageVirtualMachineFilterValues;
  }
  export type StorageVirtualMachineFilterName = "file-system-id"|string;
  export type StorageVirtualMachineFilterValue = string;
  export type StorageVirtualMachineFilterValues = StorageVirtualMachineFilterValue[];
  export type StorageVirtualMachineFilters = StorageVirtualMachineFilter[];
  export type StorageVirtualMachineId = string;
  export type StorageVirtualMachineIds = StorageVirtualMachineId[];
  export type StorageVirtualMachineLifecycle = "CREATED"|"CREATING"|"DELETING"|"FAILED"|"MISCONFIGURED"|"PENDING"|string;
  export type StorageVirtualMachineName = string;
  export type StorageVirtualMachineRootVolumeSecurityStyle = "UNIX"|"NTFS"|"MIXED"|string;
  export type StorageVirtualMachineSubtype = "DEFAULT"|"DP_DESTINATION"|"SYNC_DESTINATION"|"SYNC_SOURCE"|string;
  export type StorageVirtualMachines = StorageVirtualMachine[];
  export type SubnetId = string;
  export type SubnetIds = SubnetId[];
  export type SucceededCount = number;
  export interface SvmActiveDirectoryConfiguration {
    /**
     * The NetBIOS name of the Active Directory computer object that is joined to your SVM.
     */
    NetBiosName?: NetBiosAlias;
    SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryAttributes;
  }
  export interface SvmEndpoint {
    DNSName?: DNSName;
    /**
     * The SVM endpoint's IP addresses.
     */
    IpAddresses?: OntapEndpointIpAddresses;
  }
  export interface SvmEndpoints {
    /**
     * An endpoint for connecting using the Internet Small Computer Systems Interface (iSCSI) protocol.
     */
    Iscsi?: SvmEndpoint;
    /**
     * An endpoint for managing SVMs using the NetApp ONTAP CLI, NetApp ONTAP API, or NetApp CloudManager.
     */
    Management?: SvmEndpoint;
    /**
     * An endpoint for connecting using the Network File System (NFS) protocol.
     */
    Nfs?: SvmEndpoint;
    /**
     * An endpoint for connecting using the Server Message Block (SMB) protocol.
     */
    Smb?: SvmEndpoint;
  }
  export interface Tag {
    /**
     * A value that specifies the TagKey, the name of the tag. Tag keys must be unique for the resource to which they are attached.
     */
    Key: TagKey;
    /**
     * A value that specifies the TagValue, the value assigned to the corresponding tag key. Tag values can be null and don't have to be unique in a tag set. For example, you can have a key-value pair in a tag set of finances : April and also of payroll : April.
     */
    Value: TagValue;
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
  export interface TieringPolicy {
    /**
     * Specifies the number of days that user data in a volume must remain inactive before it is considered "cold" and moved to the capacity pool. Used with the AUTO and SNAPSHOT_ONLY tiering policies. Enter a whole number between 2 and 183. Default values are 31 days for AUTO and 2 days for SNAPSHOT_ONLY.
     */
    CoolingPeriod?: CoolingPeriod;
    /**
     * Specifies the tiering policy used to transition data. Default value is SNAPSHOT_ONLY.    SNAPSHOT_ONLY - moves cold snapshots to the capacity pool storage tier.    AUTO - moves cold user data and snapshots to the capacity pool storage tier based on your access patterns.    ALL - moves all user data blocks in both the active file system and Snapshot copies to the storage pool tier.    NONE - keeps a volume's data in the primary storage tier, preventing it from being moved to the capacity pool tier.  
     */
    Name?: TieringPolicyName;
  }
  export type TieringPolicyName = "SNAPSHOT_ONLY"|"AUTO"|"ALL"|"NONE"|string;
  export type TotalCount = number;
  export type UUID = string;
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
  export interface UpdateDataRepositoryAssociationRequest {
    /**
     * The ID of the data repository association that you are updating.
     */
    AssociationId: DataRepositoryAssociationId;
    ClientRequestToken?: ClientRequestToken;
    /**
     * For files imported from a data repository, this value determines the stripe count and maximum amount of data per file (in MiB) stored on a single physical disk. The maximum number of disks that a single file can be striped across is limited by the total number of disks that make up the file system. The default chunk size is 1,024 MiB (1 GiB) and can go as high as 512,000 MiB (500 GiB). Amazon S3 objects have a maximum size of 5 TB.
     */
    ImportedFileChunkSize?: Megabytes;
    /**
     * The configuration for an Amazon S3 data repository linked to an Amazon FSx Lustre file system with a data repository association. The configuration defines which file events (new, changed, or deleted files or directories) are automatically imported from the linked data repository to the file system or automatically exported from the file system to the data repository.
     */
    S3?: S3DataRepositoryConfiguration;
  }
  export interface UpdateDataRepositoryAssociationResponse {
    /**
     * The response object returned after the data repository association is updated.
     */
    Association?: DataRepositoryAssociation;
  }
  export interface UpdateFileSystemLustreConfiguration {
    /**
     * (Optional) The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC time zone. d is the weekday number, from 1 through 7, beginning with Monday and ending with Sunday.
     */
    WeeklyMaintenanceStartTime?: WeeklyTime;
    DailyAutomaticBackupStartTime?: DailyTime;
    AutomaticBackupRetentionDays?: AutomaticBackupRetentionDays;
    /**
     *  (Optional) When you create your file system, your existing S3 objects appear as file and directory listings. Use this property to choose how Amazon FSx keeps your file and directory listing up to date as you add or modify objects in your linked S3 bucket. AutoImportPolicy can have the following values:    NONE - (Default) AutoImport is off. Amazon FSx only updates file and directory listings from the linked S3 bucket when the file system is created. FSx does not update the file and directory listing for any new or changed objects after choosing this option.    NEW - AutoImport is on. Amazon FSx automatically imports directory listings of any new objects added to the linked S3 bucket that do not currently exist in the FSx file system.     NEW_CHANGED - AutoImport is on. Amazon FSx automatically imports file and directory listings of any new objects added to the S3 bucket and any existing objects that are changed in the S3 bucket after you choose this option.    NEW_CHANGED_DELETED - AutoImport is on. Amazon FSx automatically imports file and directory listings of any new objects added to the S3 bucket, any existing objects that are changed in the S3 bucket, and any objects that were deleted in the S3 bucket.   The AutoImportPolicy parameter is not supported for Lustre file systems with the Persistent_2 deployment type. Instead, use to update a data repository association on your Persistent_2 file system.
     */
    AutoImportPolicy?: AutoImportPolicyType;
    /**
     * Sets the data compression configuration for the file system. DataCompressionType can have the following values:    NONE - Data compression is turned off for the file system.    LZ4 - Data compression is turned on with the LZ4 algorithm.   If you don't use DataCompressionType, the file system retains its current data compression configuration. For more information, see Lustre data compression.
     */
    DataCompressionType?: DataCompressionType;
    /**
     * The Lustre logging configuration used when updating an Amazon FSx for Lustre file system. When logging is enabled, Lustre logs error and warning events for data repositories associated with your file system to Amazon CloudWatch Logs.
     */
    LogConfiguration?: LustreLogCreateConfiguration;
  }
  export interface UpdateFileSystemOntapConfiguration {
    AutomaticBackupRetentionDays?: AutomaticBackupRetentionDays;
    DailyAutomaticBackupStartTime?: DailyTime;
    /**
     * The ONTAP administrative password for the fsxadmin user.
     */
    FsxAdminPassword?: AdminPassword;
    WeeklyMaintenanceStartTime?: WeeklyTime;
    /**
     * The SSD IOPS (input/output operations per second) configuration for an Amazon FSx for NetApp ONTAP file system. The default is 3 IOPS per GB of storage capacity, but you can provision additional IOPS per GB of storage. The configuration consists of an IOPS mode (AUTOMATIC or USER_PROVISIONED), and in the case of USER_PROVISIONED IOPS, the total number of SSD IOPS provisioned.
     */
    DiskIopsConfiguration?: DiskIopsConfiguration;
  }
  export interface UpdateFileSystemOpenZFSConfiguration {
    AutomaticBackupRetentionDays?: AutomaticBackupRetentionDays;
    /**
     * A Boolean value indicating whether tags for the file system should be copied to backups. This value defaults to false. If it's set to true, all tags for the file system are copied to all automatic and user-initiated backups where the user doesn't specify tags. If this value is true and you specify one or more tags, only the specified tags are copied to backups. If you specify one or more tags when creating a user-initiated backup, no tags are copied from the file system, regardless of this value. 
     */
    CopyTagsToBackups?: Flag;
    /**
     * A Boolean value indicating whether tags for the volume should be copied to snapshots. This value defaults to false. If it's set to true, all tags for the volume are copied to snapshots where the user doesn't specify tags. If this value is true and you specify one or more tags, only the specified tags are copied to snapshots. If you specify one or more tags when creating the snapshot, no tags are copied from the volume, regardless of this value. 
     */
    CopyTagsToVolumes?: Flag;
    DailyAutomaticBackupStartTime?: DailyTime;
    /**
     * The throughput of an Amazon FSx file system, measured in megabytes per second (MBps), in 2 to the nth increments, between 2^3 (8) and 2^12 (4096). 
     */
    ThroughputCapacity?: MegabytesPerSecond;
    WeeklyMaintenanceStartTime?: WeeklyTime;
    DiskIopsConfiguration?: DiskIopsConfiguration;
  }
  export interface UpdateFileSystemRequest {
    /**
     * The ID of the file system that you are updating.
     */
    FileSystemId: FileSystemId;
    /**
     * A string of up to 64 ASCII characters that Amazon FSx uses to ensure idempotent updates. This string is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
     */
    ClientRequestToken?: ClientRequestToken;
    /**
     * Use this parameter to increase the storage capacity of an Amazon FSx for Windows File Server, Amazon FSx for Lustre, or Amazon FSx for NetApp ONTAP file system. Specifies the storage capacity target value, in GiB, to increase the storage capacity for the file system that you're updating.   You can't make a storage capacity increase request if there is an existing storage capacity increase request in progress.  For Windows file systems, the storage capacity target value must be at least 10 percent greater than the current storage capacity value. To increase storage capacity, the file system must have at least 16 MBps of throughput capacity. For more information, see Managing storage capacity in the Amazon FSx for Windows File Server User Guide. For Lustre file systems, the storage capacity target value can be the following:   For SCRATCH_2, PERSISTENT_1, and PERSISTENT_2 SSD deployment types, valid values are in multiples of 2400 GiB. The value must be greater than the current storage capacity.   For PERSISTENT HDD file systems, valid values are multiples of 6000 GiB for 12-MBps throughput per TiB file systems and multiples of 1800 GiB for 40-MBps throughput per TiB file systems. The values must be greater than the current storage capacity.   For SCRATCH_1 file systems, you can't increase the storage capacity.   For more information, see Managing storage and throughput capacity in the Amazon FSx for Lustre User Guide. For ONTAP file systems, the storage capacity target value must be at least 10 percent greater than the current storage capacity value. For more information, see Managing storage capacity and provisioned IOPS in the Amazon FSx for NetApp ONTAP User Guide.
     */
    StorageCapacity?: StorageCapacity;
    /**
     * The configuration updates for an Amazon FSx for Windows File Server file system.
     */
    WindowsConfiguration?: UpdateFileSystemWindowsConfiguration;
    LustreConfiguration?: UpdateFileSystemLustreConfiguration;
    OntapConfiguration?: UpdateFileSystemOntapConfiguration;
    /**
     * The configuration updates for an Amazon FSx for OpenZFS file system.
     */
    OpenZFSConfiguration?: UpdateFileSystemOpenZFSConfiguration;
  }
  export interface UpdateFileSystemResponse {
    /**
     * A description of the file system that was updated.
     */
    FileSystem?: FileSystem;
  }
  export interface UpdateFileSystemWindowsConfiguration {
    /**
     * The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC time zone. Where d is the weekday number, from 1 through 7, with 1 = Monday and 7 = Sunday.
     */
    WeeklyMaintenanceStartTime?: WeeklyTime;
    /**
     * The preferred time to start the daily automatic backup, in the UTC time zone, for example, 02:00 
     */
    DailyAutomaticBackupStartTime?: DailyTime;
    /**
     * The number of days to retain automatic daily backups. Setting this to zero (0) disables automatic daily backups. You can retain automatic daily backups for a maximum of 90 days. For more information, see Working with Automatic Daily Backups.
     */
    AutomaticBackupRetentionDays?: AutomaticBackupRetentionDays;
    /**
     * Sets the target value for a file system's throughput capacity, in MB/s, that you are updating the file system to. Valid values are 8, 16, 32, 64, 128, 256, 512, 1024, 2048. You cannot make a throughput capacity update request if there is an existing throughput capacity update request in progress. For more information, see Managing Throughput Capacity.
     */
    ThroughputCapacity?: MegabytesPerSecond;
    /**
     * The configuration Amazon FSx uses to join the Windows File Server instance to the self-managed Microsoft AD directory. You cannot make a self-managed Microsoft AD update request if there is an existing self-managed Microsoft AD update request in progress.
     */
    SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfigurationUpdates;
    /**
     * The configuration that Amazon FSx for Windows File Server uses to audit and log user accesses of files, folders, and file shares on the Amazon FSx for Windows File Server file system..
     */
    AuditLogConfiguration?: WindowsAuditLogCreateConfiguration;
  }
  export interface UpdateOntapVolumeConfiguration {
    /**
     * Specifies the location in the SVM's namespace where the volume is mounted. The JunctionPath must have a leading forward slash, such as /vol3.
     */
    JunctionPath?: JunctionPath;
    /**
     * The security style for the volume, which can be UNIX. NTFS, or MIXED.
     */
    SecurityStyle?: SecurityStyle;
    /**
     * Specifies the size of the volume in megabytes.
     */
    SizeInMegabytes?: VolumeCapacity;
    /**
     * Default is false. Set to true to enable the deduplication, compression, and compaction storage efficiency features on the volume.
     */
    StorageEfficiencyEnabled?: Flag;
    /**
     * Update the volume's data tiering policy.
     */
    TieringPolicy?: TieringPolicy;
  }
  export interface UpdateOpenZFSVolumeConfiguration {
    /**
     * The amount of storage in gibibytes (GiB) to reserve from the parent volume. You can't reserve more storage than the parent volume has reserved.
     */
    StorageCapacityReservationGiB?: IntegerNoMax;
    /**
     *  The maximum amount of storage in gibibytes (GiB) that the volume can use from its parent. You can specify a quota larger than the storage on the parent volume.
     */
    StorageCapacityQuotaGiB?: IntegerNoMax;
    /**
     *  Specifies the method used to compress the data on the volume. Unless the compression type is specified, volumes inherit the DataCompressionType value of their parent volume.    NONE - Doesn't compress the data on the volume.    ZSTD - Compresses the data in the volume using the Zstandard (ZSTD) compression algorithm. This algorithm reduces the amount of space used on your volume and has very little impact on compute resources.  
     */
    DataCompressionType?: OpenZFSDataCompressionType;
    /**
     * The configuration object for mounting a Network File System (NFS) file system.
     */
    NfsExports?: OpenZFSNfsExports;
    /**
     * An object specifying how much storage users or groups can use on the volume.
     */
    UserAndGroupQuotas?: OpenZFSUserAndGroupQuotas;
    /**
     * A Boolean value indicating whether the volume is read-only.
     */
    ReadOnly?: ReadOnly;
  }
  export interface UpdateSnapshotRequest {
    ClientRequestToken?: ClientRequestToken;
    /**
     * The name of the snapshot to update. 
     */
    Name: SnapshotName;
    /**
     * The ID of the snapshot that you want to update, in the format fsvolsnap-0123456789abcdef0.
     */
    SnapshotId: SnapshotId;
  }
  export interface UpdateSnapshotResponse {
    /**
     * Returned after a successful UpdateSnapshot operation, describing the snapshot that you updated.
     */
    Snapshot?: Snapshot;
  }
  export interface UpdateStorageVirtualMachineRequest {
    /**
     * Updates the Microsoft Active Directory (AD) configuration for an SVM that is joined to an AD.
     */
    ActiveDirectoryConfiguration?: UpdateSvmActiveDirectoryConfiguration;
    ClientRequestToken?: ClientRequestToken;
    /**
     * The ID of the SVM that you want to update, in the format svm-0123456789abcdef0.
     */
    StorageVirtualMachineId: StorageVirtualMachineId;
    /**
     * Enter a new SvmAdminPassword if you are updating it.
     */
    SvmAdminPassword?: AdminPassword;
  }
  export interface UpdateStorageVirtualMachineResponse {
    StorageVirtualMachine?: StorageVirtualMachine;
  }
  export interface UpdateSvmActiveDirectoryConfiguration {
    SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfigurationUpdates;
  }
  export interface UpdateVolumeRequest {
    ClientRequestToken?: ClientRequestToken;
    /**
     * The ID of the volume that you want to update, in the format fsvol-0123456789abcdef0.
     */
    VolumeId: VolumeId;
    /**
     * The configuration of the ONTAP volume that you are updating.
     */
    OntapConfiguration?: UpdateOntapVolumeConfiguration;
    /**
     * The name of the OpenZFS volume. OpenZFS root volumes are automatically named FSX. Child volume names must be unique among their parent volume's children. The name of the volume is part of the mount string for the OpenZFS volume. 
     */
    Name?: VolumeName;
    /**
     * The configuration of the OpenZFS volume that you are updating.
     */
    OpenZFSConfiguration?: UpdateOpenZFSVolumeConfiguration;
  }
  export interface UpdateVolumeResponse {
    /**
     * A description of the volume just updated. Returned after a successful UpdateVolume API operation.
     */
    Volume?: Volume;
  }
  export interface Volume {
    CreationTime?: CreationTime;
    FileSystemId?: FileSystemId;
    /**
     * The lifecycle status of the volume.    AVAILABLE - The volume is fully available for use.    CREATED - The volume has been created.    CREATING - Amazon FSx is creating the new volume.    DELETING - Amazon FSx is deleting an existing volume.    FAILED - Amazon FSx was unable to create the volume.    MISCONFIGURED - The volume is in a failed but recoverable state.    PENDING - Amazon FSx hasn't started creating the volume.  
     */
    Lifecycle?: VolumeLifecycle;
    /**
     * The name of the volume.
     */
    Name?: VolumeName;
    OntapConfiguration?: OntapVolumeConfiguration;
    ResourceARN?: ResourceARN;
    Tags?: Tags;
    /**
     * The system-generated, unique ID of the volume.
     */
    VolumeId?: VolumeId;
    /**
     * The type of the volume.
     */
    VolumeType?: VolumeType;
    /**
     * The reason why the volume lifecycle status changed.
     */
    LifecycleTransitionReason?: LifecycleTransitionReason;
    /**
     * A list of administrative actions for the file system that are in process or waiting to be processed. Administrative actions describe changes to the Amazon FSx system that you initiated.
     */
    AdministrativeActions?: AdministrativeActions;
    /**
     * The configuration of an Amazon FSx for OpenZFS volume.
     */
    OpenZFSConfiguration?: OpenZFSVolumeConfiguration;
  }
  export type VolumeCapacity = number;
  export interface VolumeFilter {
    /**
     * The name for this filter.
     */
    Name?: VolumeFilterName;
    /**
     * The values of the filter. These are all the values for any of the applied filters.
     */
    Values?: VolumeFilterValues;
  }
  export type VolumeFilterName = "file-system-id"|"storage-virtual-machine-id"|string;
  export type VolumeFilterValue = string;
  export type VolumeFilterValues = VolumeFilterValue[];
  export type VolumeFilters = VolumeFilter[];
  export type VolumeId = string;
  export type VolumeIds = VolumeId[];
  export type VolumeLifecycle = "CREATING"|"CREATED"|"DELETING"|"FAILED"|"MISCONFIGURED"|"PENDING"|"AVAILABLE"|string;
  export type VolumeName = string;
  export type VolumePath = string;
  export type VolumeType = "ONTAP"|"OPENZFS"|string;
  export type Volumes = Volume[];
  export type VpcId = string;
  export type WeeklyTime = string;
  export type WindowsAccessAuditLogLevel = "DISABLED"|"SUCCESS_ONLY"|"FAILURE_ONLY"|"SUCCESS_AND_FAILURE"|string;
  export interface WindowsAuditLogConfiguration {
    /**
     * Sets which attempt type is logged by Amazon FSx for file and folder accesses.    SUCCESS_ONLY - only successful attempts to access files or folders are logged.    FAILURE_ONLY - only failed attempts to access files or folders are logged.    SUCCESS_AND_FAILURE - both successful attempts and failed attempts to access files or folders are logged.    DISABLED - access auditing of files and folders is turned off.  
     */
    FileAccessAuditLogLevel: WindowsAccessAuditLogLevel;
    /**
     * Sets which attempt type is logged by Amazon FSx for file share accesses.    SUCCESS_ONLY - only successful attempts to access file shares are logged.    FAILURE_ONLY - only failed attempts to access file shares are logged.    SUCCESS_AND_FAILURE - both successful attempts and failed attempts to access file shares are logged.    DISABLED - access auditing of file shares is turned off.  
     */
    FileShareAccessAuditLogLevel: WindowsAccessAuditLogLevel;
    /**
     * The Amazon Resource Name (ARN) for the destination of the audit logs. The destination can be any Amazon CloudWatch Logs log group ARN or Amazon Kinesis Data Firehose delivery stream ARN. The name of the Amazon CloudWatch Logs log group must begin with the /aws/fsx prefix. The name of the Amazon Kinesis Data Firehouse delivery stream must begin with the aws-fsx prefix. The destination ARN (either CloudWatch Logs log group or Kinesis Data Firehose delivery stream) must be in the same Amazon Web Services partition, Amazon Web Services Region, and Amazon Web Services account as your Amazon FSx file system.
     */
    AuditLogDestination?: GeneralARN;
  }
  export interface WindowsAuditLogCreateConfiguration {
    /**
     * Sets which attempt type is logged by Amazon FSx for file and folder accesses.    SUCCESS_ONLY - only successful attempts to access files or folders are logged.    FAILURE_ONLY - only failed attempts to access files or folders are logged.    SUCCESS_AND_FAILURE - both successful attempts and failed attempts to access files or folders are logged.    DISABLED - access auditing of files and folders is turned off.  
     */
    FileAccessAuditLogLevel: WindowsAccessAuditLogLevel;
    /**
     * Sets which attempt type is logged by Amazon FSx for file share accesses.    SUCCESS_ONLY - only successful attempts to access file shares are logged.    FAILURE_ONLY - only failed attempts to access file shares are logged.    SUCCESS_AND_FAILURE - both successful attempts and failed attempts to access file shares are logged.    DISABLED - access auditing of file shares is turned off.  
     */
    FileShareAccessAuditLogLevel: WindowsAccessAuditLogLevel;
    /**
     * The Amazon Resource Name (ARN) that specifies the destination of the audit logs. The destination can be any Amazon CloudWatch Logs log group ARN or Amazon Kinesis Data Firehose delivery stream ARN, with the following requirements:   The destination ARN that you provide (either CloudWatch Logs log group or Kinesis Data Firehose delivery stream) must be in the same Amazon Web Services partition, Amazon Web Services Region, and Amazon Web Services account as your Amazon FSx file system.   The name of the Amazon CloudWatch Logs log group must begin with the /aws/fsx prefix. The name of the Amazon Kinesis Data Firehouse delivery stream must begin with the aws-fsx prefix.   If you do not provide a destination in AuditLogDestination, Amazon FSx will create and use a log stream in the CloudWatch Logs /aws/fsx/windows log group.   If AuditLogDestination is provided and the resource does not exist, the request will fail with a BadRequest error.   If FileAccessAuditLogLevel and FileShareAccessAuditLogLevel are both set to DISABLED, you cannot specify a destination in AuditLogDestination.  
     */
    AuditLogDestination?: GeneralARN;
  }
  export type WindowsDeploymentType = "MULTI_AZ_1"|"SINGLE_AZ_1"|"SINGLE_AZ_2"|string;
  export interface WindowsFileSystemConfiguration {
    /**
     * The ID for an existing Amazon Web Services Managed Microsoft Active Directory instance that the file system is joined to.
     */
    ActiveDirectoryId?: DirectoryId;
    SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryAttributes;
    /**
     * Specifies the file system deployment type, valid values are the following:    MULTI_AZ_1 - Specifies a high availability file system that is configured for Multi-AZ redundancy to tolerate temporary Availability Zone (AZ) unavailability, and supports SSD and HDD storage.    SINGLE_AZ_1 - (Default) Specifies a file system that is configured for single AZ redundancy, only supports SSD storage.    SINGLE_AZ_2 - Latest generation Single AZ file system. Specifies a file system that is configured for single AZ redundancy and supports SSD and HDD storage.   For more information, see Single-AZ and Multi-AZ File Systems.
     */
    DeploymentType?: WindowsDeploymentType;
    /**
     * For MULTI_AZ_1 deployment types, use this endpoint when performing administrative tasks on the file system using Amazon FSx Remote PowerShell. For SINGLE_AZ_1 and SINGLE_AZ_2 deployment types, this is the DNS name of the file system. This endpoint is temporarily unavailable when the file system is undergoing maintenance.
     */
    RemoteAdministrationEndpoint?: DNSName;
    /**
     * For MULTI_AZ_1 deployment types, it specifies the ID of the subnet where the preferred file server is located. Must be one of the two subnet IDs specified in SubnetIds property. Amazon FSx serves traffic from this subnet except in the event of a failover to the secondary file server. For SINGLE_AZ_1 and SINGLE_AZ_2 deployment types, this value is the same as that for SubnetIDs. For more information, see Availability and durability: Single-AZ and Multi-AZ file systems.
     */
    PreferredSubnetId?: SubnetId;
    /**
     * For MULTI_AZ_1 deployment types, the IP address of the primary, or preferred, file server. Use this IP address when mounting the file system on Linux SMB clients or Windows SMB clients that are not joined to a Microsoft Active Directory. Applicable for all Windows file system deployment types. This IP address is temporarily unavailable when the file system is undergoing maintenance. For Linux and Windows SMB clients that are joined to an Active Directory, use the file system's DNSName instead. For more information on mapping and mounting file shares, see Accessing File Shares.
     */
    PreferredFileServerIp?: IpAddress;
    /**
     * The throughput of the Amazon FSx file system, measured in megabytes per second.
     */
    ThroughputCapacity?: MegabytesPerSecond;
    /**
     * The list of maintenance operations in progress for this file system.
     */
    MaintenanceOperationsInProgress?: FileSystemMaintenanceOperations;
    /**
     * The preferred start time to perform weekly maintenance, formatted d:HH:MM in the UTC time zone. d is the weekday number, from 1 through 7, beginning with Monday and ending with Sunday.
     */
    WeeklyMaintenanceStartTime?: WeeklyTime;
    /**
     * The preferred time to take daily automatic backups, in the UTC time zone.
     */
    DailyAutomaticBackupStartTime?: DailyTime;
    /**
     * The number of days to retain automatic backups. Setting this to 0 disables automatic backups. You can retain automatic backups for a maximum of 90 days.
     */
    AutomaticBackupRetentionDays?: AutomaticBackupRetentionDays;
    /**
     * A boolean flag indicating whether tags on the file system should be copied to backups. This value defaults to false. If it's set to true, all tags on the file system are copied to all automatic backups and any user-initiated backups where the user doesn't specify any tags. If this value is true, and you specify one or more tags, only the specified tags are copied to backups. If you specify one or more tags when creating a user-initiated backup, no tags are copied from the file system, regardless of this value.
     */
    CopyTagsToBackups?: Flag;
    Aliases?: Aliases;
    /**
     * The configuration that Amazon FSx for Windows File Server uses to audit and log user accesses of files, folders, and file shares on the Amazon FSx for Windows File Server file system.
     */
    AuditLogConfiguration?: WindowsAuditLogConfiguration;
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
