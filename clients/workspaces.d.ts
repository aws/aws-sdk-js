import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class WorkSpaces extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: WorkSpaces.Types.ClientConfiguration)
  config: Config & WorkSpaces.Types.ClientConfiguration;
  /**
   * Associates the specified IP access control group with the specified directory.
   */
  associateIpGroups(params: WorkSpaces.Types.AssociateIpGroupsRequest, callback?: (err: AWSError, data: WorkSpaces.Types.AssociateIpGroupsResult) => void): Request<WorkSpaces.Types.AssociateIpGroupsResult, AWSError>;
  /**
   * Associates the specified IP access control group with the specified directory.
   */
  associateIpGroups(callback?: (err: AWSError, data: WorkSpaces.Types.AssociateIpGroupsResult) => void): Request<WorkSpaces.Types.AssociateIpGroupsResult, AWSError>;
  /**
   * Adds one or more rules to the specified IP access control group. This action gives users permission to access their WorkSpaces from the CIDR address ranges specified in the rules.
   */
  authorizeIpRules(params: WorkSpaces.Types.AuthorizeIpRulesRequest, callback?: (err: AWSError, data: WorkSpaces.Types.AuthorizeIpRulesResult) => void): Request<WorkSpaces.Types.AuthorizeIpRulesResult, AWSError>;
  /**
   * Adds one or more rules to the specified IP access control group. This action gives users permission to access their WorkSpaces from the CIDR address ranges specified in the rules.
   */
  authorizeIpRules(callback?: (err: AWSError, data: WorkSpaces.Types.AuthorizeIpRulesResult) => void): Request<WorkSpaces.Types.AuthorizeIpRulesResult, AWSError>;
  /**
   * Copies the specified image from the specified Region to the current Region.
   */
  copyWorkspaceImage(params: WorkSpaces.Types.CopyWorkspaceImageRequest, callback?: (err: AWSError, data: WorkSpaces.Types.CopyWorkspaceImageResult) => void): Request<WorkSpaces.Types.CopyWorkspaceImageResult, AWSError>;
  /**
   * Copies the specified image from the specified Region to the current Region.
   */
  copyWorkspaceImage(callback?: (err: AWSError, data: WorkSpaces.Types.CopyWorkspaceImageResult) => void): Request<WorkSpaces.Types.CopyWorkspaceImageResult, AWSError>;
  /**
   * Creates an IP access control group. An IP access control group provides you with the ability to control the IP addresses from which users are allowed to access their WorkSpaces. To specify the CIDR address ranges, add rules to your IP access control group and then associate the group with your directory. You can add rules when you create the group or at any time using AuthorizeIpRules. There is a default IP access control group associated with your directory. If you don't associate an IP access control group with your directory, the default group is used. The default group includes a default rule that allows users to access their WorkSpaces from anywhere. You cannot modify the default IP access control group for your directory.
   */
  createIpGroup(params: WorkSpaces.Types.CreateIpGroupRequest, callback?: (err: AWSError, data: WorkSpaces.Types.CreateIpGroupResult) => void): Request<WorkSpaces.Types.CreateIpGroupResult, AWSError>;
  /**
   * Creates an IP access control group. An IP access control group provides you with the ability to control the IP addresses from which users are allowed to access their WorkSpaces. To specify the CIDR address ranges, add rules to your IP access control group and then associate the group with your directory. You can add rules when you create the group or at any time using AuthorizeIpRules. There is a default IP access control group associated with your directory. If you don't associate an IP access control group with your directory, the default group is used. The default group includes a default rule that allows users to access their WorkSpaces from anywhere. You cannot modify the default IP access control group for your directory.
   */
  createIpGroup(callback?: (err: AWSError, data: WorkSpaces.Types.CreateIpGroupResult) => void): Request<WorkSpaces.Types.CreateIpGroupResult, AWSError>;
  /**
   * Creates the specified tags for the specified WorkSpaces resource.
   */
  createTags(params: WorkSpaces.Types.CreateTagsRequest, callback?: (err: AWSError, data: WorkSpaces.Types.CreateTagsResult) => void): Request<WorkSpaces.Types.CreateTagsResult, AWSError>;
  /**
   * Creates the specified tags for the specified WorkSpaces resource.
   */
  createTags(callback?: (err: AWSError, data: WorkSpaces.Types.CreateTagsResult) => void): Request<WorkSpaces.Types.CreateTagsResult, AWSError>;
  /**
   * Creates one or more WorkSpaces. This operation is asynchronous and returns before the WorkSpaces are created.
   */
  createWorkspaces(params: WorkSpaces.Types.CreateWorkspacesRequest, callback?: (err: AWSError, data: WorkSpaces.Types.CreateWorkspacesResult) => void): Request<WorkSpaces.Types.CreateWorkspacesResult, AWSError>;
  /**
   * Creates one or more WorkSpaces. This operation is asynchronous and returns before the WorkSpaces are created.
   */
  createWorkspaces(callback?: (err: AWSError, data: WorkSpaces.Types.CreateWorkspacesResult) => void): Request<WorkSpaces.Types.CreateWorkspacesResult, AWSError>;
  /**
   * Deletes the specified IP access control group. You cannot delete an IP access control group that is associated with a directory.
   */
  deleteIpGroup(params: WorkSpaces.Types.DeleteIpGroupRequest, callback?: (err: AWSError, data: WorkSpaces.Types.DeleteIpGroupResult) => void): Request<WorkSpaces.Types.DeleteIpGroupResult, AWSError>;
  /**
   * Deletes the specified IP access control group. You cannot delete an IP access control group that is associated with a directory.
   */
  deleteIpGroup(callback?: (err: AWSError, data: WorkSpaces.Types.DeleteIpGroupResult) => void): Request<WorkSpaces.Types.DeleteIpGroupResult, AWSError>;
  /**
   * Deletes the specified tags from the specified WorkSpaces resource.
   */
  deleteTags(params: WorkSpaces.Types.DeleteTagsRequest, callback?: (err: AWSError, data: WorkSpaces.Types.DeleteTagsResult) => void): Request<WorkSpaces.Types.DeleteTagsResult, AWSError>;
  /**
   * Deletes the specified tags from the specified WorkSpaces resource.
   */
  deleteTags(callback?: (err: AWSError, data: WorkSpaces.Types.DeleteTagsResult) => void): Request<WorkSpaces.Types.DeleteTagsResult, AWSError>;
  /**
   * Deletes the specified image from your account. To delete an image, you must first delete any bundles that are associated with the image and unshare the image if it is shared with other accounts. 
   */
  deleteWorkspaceImage(params: WorkSpaces.Types.DeleteWorkspaceImageRequest, callback?: (err: AWSError, data: WorkSpaces.Types.DeleteWorkspaceImageResult) => void): Request<WorkSpaces.Types.DeleteWorkspaceImageResult, AWSError>;
  /**
   * Deletes the specified image from your account. To delete an image, you must first delete any bundles that are associated with the image and unshare the image if it is shared with other accounts. 
   */
  deleteWorkspaceImage(callback?: (err: AWSError, data: WorkSpaces.Types.DeleteWorkspaceImageResult) => void): Request<WorkSpaces.Types.DeleteWorkspaceImageResult, AWSError>;
  /**
   * Deregisters the specified directory. This operation is asynchronous and returns before the WorkSpace directory is deregistered. If any WorkSpaces are registered to this directory, you must remove them before you can deregister the directory.
   */
  deregisterWorkspaceDirectory(params: WorkSpaces.Types.DeregisterWorkspaceDirectoryRequest, callback?: (err: AWSError, data: WorkSpaces.Types.DeregisterWorkspaceDirectoryResult) => void): Request<WorkSpaces.Types.DeregisterWorkspaceDirectoryResult, AWSError>;
  /**
   * Deregisters the specified directory. This operation is asynchronous and returns before the WorkSpace directory is deregistered. If any WorkSpaces are registered to this directory, you must remove them before you can deregister the directory.
   */
  deregisterWorkspaceDirectory(callback?: (err: AWSError, data: WorkSpaces.Types.DeregisterWorkspaceDirectoryResult) => void): Request<WorkSpaces.Types.DeregisterWorkspaceDirectoryResult, AWSError>;
  /**
   * Retrieves a list that describes the configuration of Bring Your Own License (BYOL) for the specified account.
   */
  describeAccount(params: WorkSpaces.Types.DescribeAccountRequest, callback?: (err: AWSError, data: WorkSpaces.Types.DescribeAccountResult) => void): Request<WorkSpaces.Types.DescribeAccountResult, AWSError>;
  /**
   * Retrieves a list that describes the configuration of Bring Your Own License (BYOL) for the specified account.
   */
  describeAccount(callback?: (err: AWSError, data: WorkSpaces.Types.DescribeAccountResult) => void): Request<WorkSpaces.Types.DescribeAccountResult, AWSError>;
  /**
   * Retrieves a list that describes modifications to the configuration of Bring Your Own License (BYOL) for the specified account.
   */
  describeAccountModifications(params: WorkSpaces.Types.DescribeAccountModificationsRequest, callback?: (err: AWSError, data: WorkSpaces.Types.DescribeAccountModificationsResult) => void): Request<WorkSpaces.Types.DescribeAccountModificationsResult, AWSError>;
  /**
   * Retrieves a list that describes modifications to the configuration of Bring Your Own License (BYOL) for the specified account.
   */
  describeAccountModifications(callback?: (err: AWSError, data: WorkSpaces.Types.DescribeAccountModificationsResult) => void): Request<WorkSpaces.Types.DescribeAccountModificationsResult, AWSError>;
  /**
   * Retrieves a list that describes one or more specified Amazon WorkSpaces clients.
   */
  describeClientProperties(params: WorkSpaces.Types.DescribeClientPropertiesRequest, callback?: (err: AWSError, data: WorkSpaces.Types.DescribeClientPropertiesResult) => void): Request<WorkSpaces.Types.DescribeClientPropertiesResult, AWSError>;
  /**
   * Retrieves a list that describes one or more specified Amazon WorkSpaces clients.
   */
  describeClientProperties(callback?: (err: AWSError, data: WorkSpaces.Types.DescribeClientPropertiesResult) => void): Request<WorkSpaces.Types.DescribeClientPropertiesResult, AWSError>;
  /**
   * Describes one or more of your IP access control groups.
   */
  describeIpGroups(params: WorkSpaces.Types.DescribeIpGroupsRequest, callback?: (err: AWSError, data: WorkSpaces.Types.DescribeIpGroupsResult) => void): Request<WorkSpaces.Types.DescribeIpGroupsResult, AWSError>;
  /**
   * Describes one or more of your IP access control groups.
   */
  describeIpGroups(callback?: (err: AWSError, data: WorkSpaces.Types.DescribeIpGroupsResult) => void): Request<WorkSpaces.Types.DescribeIpGroupsResult, AWSError>;
  /**
   * Describes the specified tags for the specified WorkSpaces resource.
   */
  describeTags(params: WorkSpaces.Types.DescribeTagsRequest, callback?: (err: AWSError, data: WorkSpaces.Types.DescribeTagsResult) => void): Request<WorkSpaces.Types.DescribeTagsResult, AWSError>;
  /**
   * Describes the specified tags for the specified WorkSpaces resource.
   */
  describeTags(callback?: (err: AWSError, data: WorkSpaces.Types.DescribeTagsResult) => void): Request<WorkSpaces.Types.DescribeTagsResult, AWSError>;
  /**
   * Retrieves a list that describes the available WorkSpace bundles. You can filter the results using either bundle ID or owner, but not both.
   */
  describeWorkspaceBundles(params: WorkSpaces.Types.DescribeWorkspaceBundlesRequest, callback?: (err: AWSError, data: WorkSpaces.Types.DescribeWorkspaceBundlesResult) => void): Request<WorkSpaces.Types.DescribeWorkspaceBundlesResult, AWSError>;
  /**
   * Retrieves a list that describes the available WorkSpace bundles. You can filter the results using either bundle ID or owner, but not both.
   */
  describeWorkspaceBundles(callback?: (err: AWSError, data: WorkSpaces.Types.DescribeWorkspaceBundlesResult) => void): Request<WorkSpaces.Types.DescribeWorkspaceBundlesResult, AWSError>;
  /**
   * Describes the available directories that are registered with Amazon WorkSpaces.
   */
  describeWorkspaceDirectories(params: WorkSpaces.Types.DescribeWorkspaceDirectoriesRequest, callback?: (err: AWSError, data: WorkSpaces.Types.DescribeWorkspaceDirectoriesResult) => void): Request<WorkSpaces.Types.DescribeWorkspaceDirectoriesResult, AWSError>;
  /**
   * Describes the available directories that are registered with Amazon WorkSpaces.
   */
  describeWorkspaceDirectories(callback?: (err: AWSError, data: WorkSpaces.Types.DescribeWorkspaceDirectoriesResult) => void): Request<WorkSpaces.Types.DescribeWorkspaceDirectoriesResult, AWSError>;
  /**
   * Describes the permissions that the owner of an image has granted to other AWS accounts for an image.
   */
  describeWorkspaceImagePermissions(params: WorkSpaces.Types.DescribeWorkspaceImagePermissionsRequest, callback?: (err: AWSError, data: WorkSpaces.Types.DescribeWorkspaceImagePermissionsResult) => void): Request<WorkSpaces.Types.DescribeWorkspaceImagePermissionsResult, AWSError>;
  /**
   * Describes the permissions that the owner of an image has granted to other AWS accounts for an image.
   */
  describeWorkspaceImagePermissions(callback?: (err: AWSError, data: WorkSpaces.Types.DescribeWorkspaceImagePermissionsResult) => void): Request<WorkSpaces.Types.DescribeWorkspaceImagePermissionsResult, AWSError>;
  /**
   * Retrieves a list that describes one or more specified images, if the image identifiers are provided. Otherwise, all images in the account are described. 
   */
  describeWorkspaceImages(params: WorkSpaces.Types.DescribeWorkspaceImagesRequest, callback?: (err: AWSError, data: WorkSpaces.Types.DescribeWorkspaceImagesResult) => void): Request<WorkSpaces.Types.DescribeWorkspaceImagesResult, AWSError>;
  /**
   * Retrieves a list that describes one or more specified images, if the image identifiers are provided. Otherwise, all images in the account are described. 
   */
  describeWorkspaceImages(callback?: (err: AWSError, data: WorkSpaces.Types.DescribeWorkspaceImagesResult) => void): Request<WorkSpaces.Types.DescribeWorkspaceImagesResult, AWSError>;
  /**
   * Describes the snapshots for the specified WorkSpace.
   */
  describeWorkspaceSnapshots(params: WorkSpaces.Types.DescribeWorkspaceSnapshotsRequest, callback?: (err: AWSError, data: WorkSpaces.Types.DescribeWorkspaceSnapshotsResult) => void): Request<WorkSpaces.Types.DescribeWorkspaceSnapshotsResult, AWSError>;
  /**
   * Describes the snapshots for the specified WorkSpace.
   */
  describeWorkspaceSnapshots(callback?: (err: AWSError, data: WorkSpaces.Types.DescribeWorkspaceSnapshotsResult) => void): Request<WorkSpaces.Types.DescribeWorkspaceSnapshotsResult, AWSError>;
  /**
   * Describes the specified WorkSpaces. You can filter the results by using the bundle identifier, directory identifier, or owner, but you can specify only one filter at a time.
   */
  describeWorkspaces(params: WorkSpaces.Types.DescribeWorkspacesRequest, callback?: (err: AWSError, data: WorkSpaces.Types.DescribeWorkspacesResult) => void): Request<WorkSpaces.Types.DescribeWorkspacesResult, AWSError>;
  /**
   * Describes the specified WorkSpaces. You can filter the results by using the bundle identifier, directory identifier, or owner, but you can specify only one filter at a time.
   */
  describeWorkspaces(callback?: (err: AWSError, data: WorkSpaces.Types.DescribeWorkspacesResult) => void): Request<WorkSpaces.Types.DescribeWorkspacesResult, AWSError>;
  /**
   * Describes the connection status of the specified WorkSpaces.
   */
  describeWorkspacesConnectionStatus(params: WorkSpaces.Types.DescribeWorkspacesConnectionStatusRequest, callback?: (err: AWSError, data: WorkSpaces.Types.DescribeWorkspacesConnectionStatusResult) => void): Request<WorkSpaces.Types.DescribeWorkspacesConnectionStatusResult, AWSError>;
  /**
   * Describes the connection status of the specified WorkSpaces.
   */
  describeWorkspacesConnectionStatus(callback?: (err: AWSError, data: WorkSpaces.Types.DescribeWorkspacesConnectionStatusResult) => void): Request<WorkSpaces.Types.DescribeWorkspacesConnectionStatusResult, AWSError>;
  /**
   * Disassociates the specified IP access control group from the specified directory.
   */
  disassociateIpGroups(params: WorkSpaces.Types.DisassociateIpGroupsRequest, callback?: (err: AWSError, data: WorkSpaces.Types.DisassociateIpGroupsResult) => void): Request<WorkSpaces.Types.DisassociateIpGroupsResult, AWSError>;
  /**
   * Disassociates the specified IP access control group from the specified directory.
   */
  disassociateIpGroups(callback?: (err: AWSError, data: WorkSpaces.Types.DisassociateIpGroupsResult) => void): Request<WorkSpaces.Types.DisassociateIpGroupsResult, AWSError>;
  /**
   * Imports the specified Windows 7 or Windows 10 Bring Your Own License (BYOL) image into Amazon WorkSpaces. The image must be an already licensed EC2 image that is in your AWS account, and you must own the image. 
   */
  importWorkspaceImage(params: WorkSpaces.Types.ImportWorkspaceImageRequest, callback?: (err: AWSError, data: WorkSpaces.Types.ImportWorkspaceImageResult) => void): Request<WorkSpaces.Types.ImportWorkspaceImageResult, AWSError>;
  /**
   * Imports the specified Windows 7 or Windows 10 Bring Your Own License (BYOL) image into Amazon WorkSpaces. The image must be an already licensed EC2 image that is in your AWS account, and you must own the image. 
   */
  importWorkspaceImage(callback?: (err: AWSError, data: WorkSpaces.Types.ImportWorkspaceImageResult) => void): Request<WorkSpaces.Types.ImportWorkspaceImageResult, AWSError>;
  /**
   * Retrieves a list of IP address ranges, specified as IPv4 CIDR blocks, that you can use for the network management interface when you enable Bring Your Own License (BYOL).  The management network interface is connected to a secure Amazon WorkSpaces management network. It is used for interactive streaming of the WorkSpace desktop to Amazon WorkSpaces clients, and to allow Amazon WorkSpaces to manage the WorkSpace.
   */
  listAvailableManagementCidrRanges(params: WorkSpaces.Types.ListAvailableManagementCidrRangesRequest, callback?: (err: AWSError, data: WorkSpaces.Types.ListAvailableManagementCidrRangesResult) => void): Request<WorkSpaces.Types.ListAvailableManagementCidrRangesResult, AWSError>;
  /**
   * Retrieves a list of IP address ranges, specified as IPv4 CIDR blocks, that you can use for the network management interface when you enable Bring Your Own License (BYOL).  The management network interface is connected to a secure Amazon WorkSpaces management network. It is used for interactive streaming of the WorkSpace desktop to Amazon WorkSpaces clients, and to allow Amazon WorkSpaces to manage the WorkSpace.
   */
  listAvailableManagementCidrRanges(callback?: (err: AWSError, data: WorkSpaces.Types.ListAvailableManagementCidrRangesResult) => void): Request<WorkSpaces.Types.ListAvailableManagementCidrRangesResult, AWSError>;
  /**
   * Migrates a WorkSpace from one operating system or bundle type to another, while retaining the data on the user volume. The migration process recreates the WorkSpace by using a new root volume from the target bundle image and the user volume from the last available snapshot of the original WorkSpace. During migration, the original D:\Users\%USERNAME% user profile folder is renamed to D:\Users\%USERNAME%MMddyyTHHmmss%.NotMigrated. A new D:\Users\%USERNAME%\ folder is generated by the new OS. Certain files in the old user profile are moved to the new user profile. For available migration scenarios, details about what happens during migration, and best practices, see Migrate a WorkSpace.
   */
  migrateWorkspace(params: WorkSpaces.Types.MigrateWorkspaceRequest, callback?: (err: AWSError, data: WorkSpaces.Types.MigrateWorkspaceResult) => void): Request<WorkSpaces.Types.MigrateWorkspaceResult, AWSError>;
  /**
   * Migrates a WorkSpace from one operating system or bundle type to another, while retaining the data on the user volume. The migration process recreates the WorkSpace by using a new root volume from the target bundle image and the user volume from the last available snapshot of the original WorkSpace. During migration, the original D:\Users\%USERNAME% user profile folder is renamed to D:\Users\%USERNAME%MMddyyTHHmmss%.NotMigrated. A new D:\Users\%USERNAME%\ folder is generated by the new OS. Certain files in the old user profile are moved to the new user profile. For available migration scenarios, details about what happens during migration, and best practices, see Migrate a WorkSpace.
   */
  migrateWorkspace(callback?: (err: AWSError, data: WorkSpaces.Types.MigrateWorkspaceResult) => void): Request<WorkSpaces.Types.MigrateWorkspaceResult, AWSError>;
  /**
   * Modifies the configuration of Bring Your Own License (BYOL) for the specified account.
   */
  modifyAccount(params: WorkSpaces.Types.ModifyAccountRequest, callback?: (err: AWSError, data: WorkSpaces.Types.ModifyAccountResult) => void): Request<WorkSpaces.Types.ModifyAccountResult, AWSError>;
  /**
   * Modifies the configuration of Bring Your Own License (BYOL) for the specified account.
   */
  modifyAccount(callback?: (err: AWSError, data: WorkSpaces.Types.ModifyAccountResult) => void): Request<WorkSpaces.Types.ModifyAccountResult, AWSError>;
  /**
   * Modifies the properties of the specified Amazon WorkSpaces clients.
   */
  modifyClientProperties(params: WorkSpaces.Types.ModifyClientPropertiesRequest, callback?: (err: AWSError, data: WorkSpaces.Types.ModifyClientPropertiesResult) => void): Request<WorkSpaces.Types.ModifyClientPropertiesResult, AWSError>;
  /**
   * Modifies the properties of the specified Amazon WorkSpaces clients.
   */
  modifyClientProperties(callback?: (err: AWSError, data: WorkSpaces.Types.ModifyClientPropertiesResult) => void): Request<WorkSpaces.Types.ModifyClientPropertiesResult, AWSError>;
  /**
   * Modifies the self-service WorkSpace management capabilities for your users. For more information, see Enable Self-Service WorkSpace Management Capabilities for Your Users.
   */
  modifySelfservicePermissions(params: WorkSpaces.Types.ModifySelfservicePermissionsRequest, callback?: (err: AWSError, data: WorkSpaces.Types.ModifySelfservicePermissionsResult) => void): Request<WorkSpaces.Types.ModifySelfservicePermissionsResult, AWSError>;
  /**
   * Modifies the self-service WorkSpace management capabilities for your users. For more information, see Enable Self-Service WorkSpace Management Capabilities for Your Users.
   */
  modifySelfservicePermissions(callback?: (err: AWSError, data: WorkSpaces.Types.ModifySelfservicePermissionsResult) => void): Request<WorkSpaces.Types.ModifySelfservicePermissionsResult, AWSError>;
  /**
   * Specifies which devices and operating systems users can use to access their WorkSpaces. For more information, see  Control Device Access.
   */
  modifyWorkspaceAccessProperties(params: WorkSpaces.Types.ModifyWorkspaceAccessPropertiesRequest, callback?: (err: AWSError, data: WorkSpaces.Types.ModifyWorkspaceAccessPropertiesResult) => void): Request<WorkSpaces.Types.ModifyWorkspaceAccessPropertiesResult, AWSError>;
  /**
   * Specifies which devices and operating systems users can use to access their WorkSpaces. For more information, see  Control Device Access.
   */
  modifyWorkspaceAccessProperties(callback?: (err: AWSError, data: WorkSpaces.Types.ModifyWorkspaceAccessPropertiesResult) => void): Request<WorkSpaces.Types.ModifyWorkspaceAccessPropertiesResult, AWSError>;
  /**
   * Modify the default properties used to create WorkSpaces.
   */
  modifyWorkspaceCreationProperties(params: WorkSpaces.Types.ModifyWorkspaceCreationPropertiesRequest, callback?: (err: AWSError, data: WorkSpaces.Types.ModifyWorkspaceCreationPropertiesResult) => void): Request<WorkSpaces.Types.ModifyWorkspaceCreationPropertiesResult, AWSError>;
  /**
   * Modify the default properties used to create WorkSpaces.
   */
  modifyWorkspaceCreationProperties(callback?: (err: AWSError, data: WorkSpaces.Types.ModifyWorkspaceCreationPropertiesResult) => void): Request<WorkSpaces.Types.ModifyWorkspaceCreationPropertiesResult, AWSError>;
  /**
   * Modifies the specified WorkSpace properties. For important information about how to modify the size of the root and user volumes, see  Modify a WorkSpace. 
   */
  modifyWorkspaceProperties(params: WorkSpaces.Types.ModifyWorkspacePropertiesRequest, callback?: (err: AWSError, data: WorkSpaces.Types.ModifyWorkspacePropertiesResult) => void): Request<WorkSpaces.Types.ModifyWorkspacePropertiesResult, AWSError>;
  /**
   * Modifies the specified WorkSpace properties. For important information about how to modify the size of the root and user volumes, see  Modify a WorkSpace. 
   */
  modifyWorkspaceProperties(callback?: (err: AWSError, data: WorkSpaces.Types.ModifyWorkspacePropertiesResult) => void): Request<WorkSpaces.Types.ModifyWorkspacePropertiesResult, AWSError>;
  /**
   * Sets the state of the specified WorkSpace. To maintain a WorkSpace without being interrupted, set the WorkSpace state to ADMIN_MAINTENANCE. WorkSpaces in this state do not respond to requests to reboot, stop, start, rebuild, or restore. An AutoStop WorkSpace in this state is not stopped. Users cannot log into a WorkSpace in the ADMIN_MAINTENANCE state.
   */
  modifyWorkspaceState(params: WorkSpaces.Types.ModifyWorkspaceStateRequest, callback?: (err: AWSError, data: WorkSpaces.Types.ModifyWorkspaceStateResult) => void): Request<WorkSpaces.Types.ModifyWorkspaceStateResult, AWSError>;
  /**
   * Sets the state of the specified WorkSpace. To maintain a WorkSpace without being interrupted, set the WorkSpace state to ADMIN_MAINTENANCE. WorkSpaces in this state do not respond to requests to reboot, stop, start, rebuild, or restore. An AutoStop WorkSpace in this state is not stopped. Users cannot log into a WorkSpace in the ADMIN_MAINTENANCE state.
   */
  modifyWorkspaceState(callback?: (err: AWSError, data: WorkSpaces.Types.ModifyWorkspaceStateResult) => void): Request<WorkSpaces.Types.ModifyWorkspaceStateResult, AWSError>;
  /**
   * Reboots the specified WorkSpaces. You cannot reboot a WorkSpace unless its state is AVAILABLE or UNHEALTHY. This operation is asynchronous and returns before the WorkSpaces have rebooted.
   */
  rebootWorkspaces(params: WorkSpaces.Types.RebootWorkspacesRequest, callback?: (err: AWSError, data: WorkSpaces.Types.RebootWorkspacesResult) => void): Request<WorkSpaces.Types.RebootWorkspacesResult, AWSError>;
  /**
   * Reboots the specified WorkSpaces. You cannot reboot a WorkSpace unless its state is AVAILABLE or UNHEALTHY. This operation is asynchronous and returns before the WorkSpaces have rebooted.
   */
  rebootWorkspaces(callback?: (err: AWSError, data: WorkSpaces.Types.RebootWorkspacesResult) => void): Request<WorkSpaces.Types.RebootWorkspacesResult, AWSError>;
  /**
   * Rebuilds the specified WorkSpace. You cannot rebuild a WorkSpace unless its state is AVAILABLE, ERROR, UNHEALTHY, STOPPED, or REBOOTING. Rebuilding a WorkSpace is a potentially destructive action that can result in the loss of data. For more information, see Rebuild a WorkSpace. This operation is asynchronous and returns before the WorkSpaces have been completely rebuilt.
   */
  rebuildWorkspaces(params: WorkSpaces.Types.RebuildWorkspacesRequest, callback?: (err: AWSError, data: WorkSpaces.Types.RebuildWorkspacesResult) => void): Request<WorkSpaces.Types.RebuildWorkspacesResult, AWSError>;
  /**
   * Rebuilds the specified WorkSpace. You cannot rebuild a WorkSpace unless its state is AVAILABLE, ERROR, UNHEALTHY, STOPPED, or REBOOTING. Rebuilding a WorkSpace is a potentially destructive action that can result in the loss of data. For more information, see Rebuild a WorkSpace. This operation is asynchronous and returns before the WorkSpaces have been completely rebuilt.
   */
  rebuildWorkspaces(callback?: (err: AWSError, data: WorkSpaces.Types.RebuildWorkspacesResult) => void): Request<WorkSpaces.Types.RebuildWorkspacesResult, AWSError>;
  /**
   * Registers the specified directory. This operation is asynchronous and returns before the WorkSpace directory is registered. If this is the first time you are registering a directory, you will need to create the workspaces_DefaultRole role before you can register a directory. For more information, see  Creating the workspaces_DefaultRole Role.
   */
  registerWorkspaceDirectory(params: WorkSpaces.Types.RegisterWorkspaceDirectoryRequest, callback?: (err: AWSError, data: WorkSpaces.Types.RegisterWorkspaceDirectoryResult) => void): Request<WorkSpaces.Types.RegisterWorkspaceDirectoryResult, AWSError>;
  /**
   * Registers the specified directory. This operation is asynchronous and returns before the WorkSpace directory is registered. If this is the first time you are registering a directory, you will need to create the workspaces_DefaultRole role before you can register a directory. For more information, see  Creating the workspaces_DefaultRole Role.
   */
  registerWorkspaceDirectory(callback?: (err: AWSError, data: WorkSpaces.Types.RegisterWorkspaceDirectoryResult) => void): Request<WorkSpaces.Types.RegisterWorkspaceDirectoryResult, AWSError>;
  /**
   * Restores the specified WorkSpace to its last known healthy state. You cannot restore a WorkSpace unless its state is  AVAILABLE, ERROR, UNHEALTHY, or STOPPED. Restoring a WorkSpace is a potentially destructive action that can result in the loss of data. For more information, see Restore a WorkSpace. This operation is asynchronous and returns before the WorkSpace is completely restored.
   */
  restoreWorkspace(params: WorkSpaces.Types.RestoreWorkspaceRequest, callback?: (err: AWSError, data: WorkSpaces.Types.RestoreWorkspaceResult) => void): Request<WorkSpaces.Types.RestoreWorkspaceResult, AWSError>;
  /**
   * Restores the specified WorkSpace to its last known healthy state. You cannot restore a WorkSpace unless its state is  AVAILABLE, ERROR, UNHEALTHY, or STOPPED. Restoring a WorkSpace is a potentially destructive action that can result in the loss of data. For more information, see Restore a WorkSpace. This operation is asynchronous and returns before the WorkSpace is completely restored.
   */
  restoreWorkspace(callback?: (err: AWSError, data: WorkSpaces.Types.RestoreWorkspaceResult) => void): Request<WorkSpaces.Types.RestoreWorkspaceResult, AWSError>;
  /**
   * Removes one or more rules from the specified IP access control group.
   */
  revokeIpRules(params: WorkSpaces.Types.RevokeIpRulesRequest, callback?: (err: AWSError, data: WorkSpaces.Types.RevokeIpRulesResult) => void): Request<WorkSpaces.Types.RevokeIpRulesResult, AWSError>;
  /**
   * Removes one or more rules from the specified IP access control group.
   */
  revokeIpRules(callback?: (err: AWSError, data: WorkSpaces.Types.RevokeIpRulesResult) => void): Request<WorkSpaces.Types.RevokeIpRulesResult, AWSError>;
  /**
   * Starts the specified WorkSpaces. You cannot start a WorkSpace unless it has a running mode of AutoStop and a state of STOPPED.
   */
  startWorkspaces(params: WorkSpaces.Types.StartWorkspacesRequest, callback?: (err: AWSError, data: WorkSpaces.Types.StartWorkspacesResult) => void): Request<WorkSpaces.Types.StartWorkspacesResult, AWSError>;
  /**
   * Starts the specified WorkSpaces. You cannot start a WorkSpace unless it has a running mode of AutoStop and a state of STOPPED.
   */
  startWorkspaces(callback?: (err: AWSError, data: WorkSpaces.Types.StartWorkspacesResult) => void): Request<WorkSpaces.Types.StartWorkspacesResult, AWSError>;
  /**
   *  Stops the specified WorkSpaces. You cannot stop a WorkSpace unless it has a running mode of AutoStop and a state of AVAILABLE, IMPAIRED, UNHEALTHY, or ERROR.
   */
  stopWorkspaces(params: WorkSpaces.Types.StopWorkspacesRequest, callback?: (err: AWSError, data: WorkSpaces.Types.StopWorkspacesResult) => void): Request<WorkSpaces.Types.StopWorkspacesResult, AWSError>;
  /**
   *  Stops the specified WorkSpaces. You cannot stop a WorkSpace unless it has a running mode of AutoStop and a state of AVAILABLE, IMPAIRED, UNHEALTHY, or ERROR.
   */
  stopWorkspaces(callback?: (err: AWSError, data: WorkSpaces.Types.StopWorkspacesResult) => void): Request<WorkSpaces.Types.StopWorkspacesResult, AWSError>;
  /**
   * Terminates the specified WorkSpaces. Terminating a WorkSpace is a permanent action and cannot be undone. The user's data is destroyed. If you need to archive any user data, contact Amazon Web Services before terminating the WorkSpace. You can terminate a WorkSpace that is in any state except SUSPENDED. This operation is asynchronous and returns before the WorkSpaces have been completely terminated.
   */
  terminateWorkspaces(params: WorkSpaces.Types.TerminateWorkspacesRequest, callback?: (err: AWSError, data: WorkSpaces.Types.TerminateWorkspacesResult) => void): Request<WorkSpaces.Types.TerminateWorkspacesResult, AWSError>;
  /**
   * Terminates the specified WorkSpaces. Terminating a WorkSpace is a permanent action and cannot be undone. The user's data is destroyed. If you need to archive any user data, contact Amazon Web Services before terminating the WorkSpace. You can terminate a WorkSpace that is in any state except SUSPENDED. This operation is asynchronous and returns before the WorkSpaces have been completely terminated.
   */
  terminateWorkspaces(callback?: (err: AWSError, data: WorkSpaces.Types.TerminateWorkspacesResult) => void): Request<WorkSpaces.Types.TerminateWorkspacesResult, AWSError>;
  /**
   * Replaces the current rules of the specified IP access control group with the specified rules.
   */
  updateRulesOfIpGroup(params: WorkSpaces.Types.UpdateRulesOfIpGroupRequest, callback?: (err: AWSError, data: WorkSpaces.Types.UpdateRulesOfIpGroupResult) => void): Request<WorkSpaces.Types.UpdateRulesOfIpGroupResult, AWSError>;
  /**
   * Replaces the current rules of the specified IP access control group with the specified rules.
   */
  updateRulesOfIpGroup(callback?: (err: AWSError, data: WorkSpaces.Types.UpdateRulesOfIpGroupResult) => void): Request<WorkSpaces.Types.UpdateRulesOfIpGroupResult, AWSError>;
  /**
   * Shares or unshares an image with one account by specifying whether that account has permission to copy the image. If the copy image permission is granted, the image is shared with that account. If the copy image permission is revoked, the image is unshared with the account.    To delete an image that has been shared, you must unshare the image before you delete it.   Sharing Bring Your Own License (BYOL) images across AWS accounts isn't supported at this time in the AWS GovCloud (US-West) Region. To share BYOL images across accounts in the AWS GovCloud (US-West) Region, contact AWS Support.   
   */
  updateWorkspaceImagePermission(params: WorkSpaces.Types.UpdateWorkspaceImagePermissionRequest, callback?: (err: AWSError, data: WorkSpaces.Types.UpdateWorkspaceImagePermissionResult) => void): Request<WorkSpaces.Types.UpdateWorkspaceImagePermissionResult, AWSError>;
  /**
   * Shares or unshares an image with one account by specifying whether that account has permission to copy the image. If the copy image permission is granted, the image is shared with that account. If the copy image permission is revoked, the image is unshared with the account.    To delete an image that has been shared, you must unshare the image before you delete it.   Sharing Bring Your Own License (BYOL) images across AWS accounts isn't supported at this time in the AWS GovCloud (US-West) Region. To share BYOL images across accounts in the AWS GovCloud (US-West) Region, contact AWS Support.   
   */
  updateWorkspaceImagePermission(callback?: (err: AWSError, data: WorkSpaces.Types.UpdateWorkspaceImagePermissionResult) => void): Request<WorkSpaces.Types.UpdateWorkspaceImagePermissionResult, AWSError>;
}
declare namespace WorkSpaces {
  export type ARN = string;
  export type AccessPropertyValue = "ALLOW"|"DENY"|string;
  export interface AccountModification {
    /**
     * The state of the modification to the configuration of BYOL.
     */
    ModificationState?: DedicatedTenancyModificationStateEnum;
    /**
     * The status of BYOL (whether BYOL is being enabled or disabled).
     */
    DedicatedTenancySupport?: DedicatedTenancySupportResultEnum;
    /**
     * The IP address range, specified as an IPv4 CIDR block, for the management network interface used for the account.
     */
    DedicatedTenancyManagementCidrRange?: DedicatedTenancyManagementCidrRange;
    /**
     * The timestamp when the modification of the BYOL configuration was started.
     */
    StartTime?: Timestamp;
    /**
     * The error code that is returned if the configuration of BYOL cannot be modified.
     */
    ErrorCode?: WorkspaceErrorCode;
    /**
     * The text of the error message that is returned if the configuration of BYOL cannot be modified.
     */
    ErrorMessage?: Description;
  }
  export type AccountModificationList = AccountModification[];
  export type Alias = string;
  export interface AssociateIpGroupsRequest {
    /**
     * The identifier of the directory.
     */
    DirectoryId: DirectoryId;
    /**
     * The identifiers of one or more IP access control groups.
     */
    GroupIds: IpGroupIdList;
  }
  export interface AssociateIpGroupsResult {
  }
  export interface AuthorizeIpRulesRequest {
    /**
     * The identifier of the group.
     */
    GroupId: IpGroupId;
    /**
     * The rules to add to the group.
     */
    UserRules: IpRuleList;
  }
  export interface AuthorizeIpRulesResult {
  }
  export type AwsAccount = string;
  export type BooleanObject = boolean;
  export type BundleId = string;
  export type BundleIdList = BundleId[];
  export type BundleList = WorkspaceBundle[];
  export type BundleOwner = string;
  export interface ClientProperties {
    /**
     * Specifies whether users can cache their credentials on the Amazon WorkSpaces client. When enabled, users can choose to reconnect to their WorkSpaces without re-entering their credentials. 
     */
    ReconnectEnabled?: ReconnectEnum;
  }
  export type ClientPropertiesList = ClientPropertiesResult[];
  export interface ClientPropertiesResult {
    /**
     * The resource identifier, in the form of a directory ID.
     */
    ResourceId?: NonEmptyString;
    /**
     * Information about the Amazon WorkSpaces client.
     */
    ClientProperties?: ClientProperties;
  }
  export type Compute = "VALUE"|"STANDARD"|"PERFORMANCE"|"POWER"|"GRAPHICS"|"POWERPRO"|"GRAPHICSPRO"|string;
  export interface ComputeType {
    /**
     * The compute type.
     */
    Name?: Compute;
  }
  export type ComputerName = string;
  export type ConnectionState = "CONNECTED"|"DISCONNECTED"|"UNKNOWN"|string;
  export interface CopyWorkspaceImageRequest {
    /**
     * The name of the image.
     */
    Name: WorkspaceImageName;
    /**
     * A description of the image.
     */
    Description?: WorkspaceImageDescription;
    /**
     * The identifier of the source image.
     */
    SourceImageId: WorkspaceImageId;
    /**
     * The identifier of the source Region.
     */
    SourceRegion: Region;
    /**
     * The tags for the image.
     */
    Tags?: TagList;
  }
  export interface CopyWorkspaceImageResult {
    /**
     * The identifier of the image.
     */
    ImageId?: WorkspaceImageId;
  }
  export interface CreateIpGroupRequest {
    /**
     * The name of the group.
     */
    GroupName: IpGroupName;
    /**
     * The description of the group.
     */
    GroupDesc?: IpGroupDesc;
    /**
     * The rules to add to the group.
     */
    UserRules?: IpRuleList;
    /**
     * The tags. Each WorkSpaces resource can have a maximum of 50 tags.
     */
    Tags?: TagList;
  }
  export interface CreateIpGroupResult {
    /**
     * The identifier of the group.
     */
    GroupId?: IpGroupId;
  }
  export interface CreateTagsRequest {
    /**
     * The identifier of the WorkSpaces resource. The supported resource types are WorkSpaces, registered directories, images, custom bundles, and IP access control groups.
     */
    ResourceId: NonEmptyString;
    /**
     * The tags. Each WorkSpaces resource can have a maximum of 50 tags. If you want to add new tags to a set of existing tags, you must submit all of the existing tags along with the new ones.
     */
    Tags: TagList;
  }
  export interface CreateTagsResult {
  }
  export interface CreateWorkspacesRequest {
    /**
     * The WorkSpaces to create. You can specify up to 25 WorkSpaces.
     */
    Workspaces: WorkspaceRequestList;
  }
  export interface CreateWorkspacesResult {
    /**
     * Information about the WorkSpaces that could not be created.
     */
    FailedRequests?: FailedCreateWorkspaceRequests;
    /**
     * Information about the WorkSpaces that were created. Because this operation is asynchronous, the identifier returned is not immediately available for use with other operations. For example, if you call DescribeWorkspaces before the WorkSpace is created, the information returned can be incomplete.
     */
    PendingRequests?: WorkspaceList;
  }
  export type DedicatedTenancyCidrRangeList = DedicatedTenancyManagementCidrRange[];
  export type DedicatedTenancyManagementCidrRange = string;
  export type DedicatedTenancyModificationStateEnum = "PENDING"|"COMPLETED"|"FAILED"|string;
  export type DedicatedTenancySupportEnum = "ENABLED"|string;
  export type DedicatedTenancySupportResultEnum = "ENABLED"|"DISABLED"|string;
  export type DefaultOu = string;
  export interface DefaultWorkspaceCreationProperties {
    /**
     * Specifies whether the directory is enabled for Amazon WorkDocs.
     */
    EnableWorkDocs?: BooleanObject;
    /**
     * Specifies whether to automatically assign an Elastic public IP address to WorkSpaces in this directory by default. If enabled, the Elastic public IP address allows outbound internet access from your WorkSpaces when you’re using an internet gateway in the Amazon VPC in which your WorkSpaces are located. If you're using a Network Address Translation (NAT) gateway for outbound internet access from your VPC, or if your WorkSpaces are in public subnets and you manually assign them Elastic IP addresses, you should disable this setting. This setting applies to new WorkSpaces that you launch or to existing WorkSpaces that you rebuild. For more information, see  Configure a VPC for Amazon WorkSpaces.
     */
    EnableInternetAccess?: BooleanObject;
    /**
     * The organizational unit (OU) in the directory for the WorkSpace machine accounts.
     */
    DefaultOu?: DefaultOu;
    /**
     * The identifier of the default security group to apply to WorkSpaces when they are created. For more information, see  Security Groups for Your WorkSpaces.
     */
    CustomSecurityGroupId?: SecurityGroupId;
    /**
     * Specifies whether WorkSpace users are local administrators on their WorkSpaces.
     */
    UserEnabledAsLocalAdministrator?: BooleanObject;
    /**
     * Specifies whether maintenance mode is enabled for WorkSpaces. For more information, see WorkSpace Maintenance.
     */
    EnableMaintenanceMode?: BooleanObject;
  }
  export interface DeleteIpGroupRequest {
    /**
     * The identifier of the IP access control group.
     */
    GroupId: IpGroupId;
  }
  export interface DeleteIpGroupResult {
  }
  export interface DeleteTagsRequest {
    /**
     * The identifier of the WorkSpaces resource. The supported resource types are WorkSpaces, registered directories, images, custom bundles, and IP access control groups.
     */
    ResourceId: NonEmptyString;
    /**
     * The tag keys.
     */
    TagKeys: TagKeyList;
  }
  export interface DeleteTagsResult {
  }
  export interface DeleteWorkspaceImageRequest {
    /**
     * The identifier of the image.
     */
    ImageId: WorkspaceImageId;
  }
  export interface DeleteWorkspaceImageResult {
  }
  export interface DeregisterWorkspaceDirectoryRequest {
    /**
     * The identifier of the directory. If any WorkSpaces are registered to this directory, you must remove them before you deregister the directory, or you will receive an OperationNotSupportedException error.
     */
    DirectoryId: DirectoryId;
  }
  export interface DeregisterWorkspaceDirectoryResult {
  }
  export interface DescribeAccountModificationsRequest {
    /**
     * If you received a NextToken from a previous call that was paginated, provide this token to receive the next set of results.
     */
    NextToken?: PaginationToken;
  }
  export interface DescribeAccountModificationsResult {
    /**
     * The list of modifications to the configuration of BYOL.
     */
    AccountModifications?: AccountModificationList;
    /**
     * The token to use to retrieve the next set of results, or null if no more results are available.
     */
    NextToken?: PaginationToken;
  }
  export interface DescribeAccountRequest {
  }
  export interface DescribeAccountResult {
    /**
     * The status of BYOL (whether BYOL is enabled or disabled).
     */
    DedicatedTenancySupport?: DedicatedTenancySupportResultEnum;
    /**
     * The IP address range, specified as an IPv4 CIDR block, used for the management network interface. The management network interface is connected to a secure Amazon WorkSpaces management network. It is used for interactive streaming of the WorkSpace desktop to Amazon WorkSpaces clients, and to allow Amazon WorkSpaces to manage the WorkSpace.
     */
    DedicatedTenancyManagementCidrRange?: DedicatedTenancyManagementCidrRange;
  }
  export interface DescribeClientPropertiesRequest {
    /**
     * The resource identifier, in the form of directory IDs.
     */
    ResourceIds: ResourceIdList;
  }
  export interface DescribeClientPropertiesResult {
    /**
     * Information about the specified Amazon WorkSpaces clients.
     */
    ClientPropertiesList?: ClientPropertiesList;
  }
  export interface DescribeIpGroupsRequest {
    /**
     * The identifiers of one or more IP access control groups.
     */
    GroupIds?: IpGroupIdList;
    /**
     * If you received a NextToken from a previous call that was paginated, provide this token to receive the next set of results.
     */
    NextToken?: PaginationToken;
    /**
     * The maximum number of items to return.
     */
    MaxResults?: Limit;
  }
  export interface DescribeIpGroupsResult {
    /**
     * Information about the IP access control groups.
     */
    Result?: WorkspacesIpGroupsList;
    /**
     * The token to use to retrieve the next set of results, or null if no more results are available.
     */
    NextToken?: PaginationToken;
  }
  export interface DescribeTagsRequest {
    /**
     * The identifier of the WorkSpaces resource. The supported resource types are WorkSpaces, registered directories, images, custom bundles, and IP access control groups.
     */
    ResourceId: NonEmptyString;
  }
  export interface DescribeTagsResult {
    /**
     * The tags.
     */
    TagList?: TagList;
  }
  export interface DescribeWorkspaceBundlesRequest {
    /**
     * The identifiers of the bundles. You cannot combine this parameter with any other filter.
     */
    BundleIds?: BundleIdList;
    /**
     * The owner of the bundles. You cannot combine this parameter with any other filter. Specify AMAZON to describe the bundles provided by AWS or null to describe the bundles that belong to your account.
     */
    Owner?: BundleOwner;
    /**
     * The token for the next set of results. (You received this token from a previous call.)
     */
    NextToken?: PaginationToken;
  }
  export interface DescribeWorkspaceBundlesResult {
    /**
     * Information about the bundles.
     */
    Bundles?: BundleList;
    /**
     * The token to use to retrieve the next set of results, or null if there are no more results available. This token is valid for one day and must be used within that time frame.
     */
    NextToken?: PaginationToken;
  }
  export interface DescribeWorkspaceDirectoriesRequest {
    /**
     * The identifiers of the directories. If the value is null, all directories are retrieved.
     */
    DirectoryIds?: DirectoryIdList;
    /**
     * The maximum number of directories to return.
     */
    Limit?: Limit;
    /**
     * If you received a NextToken from a previous call that was paginated, provide this token to receive the next set of results.
     */
    NextToken?: PaginationToken;
  }
  export interface DescribeWorkspaceDirectoriesResult {
    /**
     * Information about the directories.
     */
    Directories?: DirectoryList;
    /**
     * The token to use to retrieve the next set of results, or null if no more results are available.
     */
    NextToken?: PaginationToken;
  }
  export interface DescribeWorkspaceImagePermissionsRequest {
    /**
     * The identifier of the image.
     */
    ImageId: WorkspaceImageId;
    /**
     * If you received a NextToken from a previous call that was paginated, provide this token to receive the next set of results.
     */
    NextToken?: PaginationToken;
    /**
     * The maximum number of items to return.
     */
    MaxResults?: Limit;
  }
  export interface DescribeWorkspaceImagePermissionsResult {
    /**
     * The identifier of the image.
     */
    ImageId?: WorkspaceImageId;
    /**
     * The identifiers of the AWS accounts that the image has been shared with.
     */
    ImagePermissions?: ImagePermissions;
    /**
     * The token to use to retrieve the next set of results, or null if no more results are available.
     */
    NextToken?: PaginationToken;
  }
  export interface DescribeWorkspaceImagesRequest {
    /**
     * The identifier of the image.
     */
    ImageIds?: WorkspaceImageIdList;
    /**
     * The type (owned or shared) of the image.
     */
    ImageType?: ImageType;
    /**
     * If you received a NextToken from a previous call that was paginated, provide this token to receive the next set of results.
     */
    NextToken?: PaginationToken;
    /**
     * The maximum number of items to return.
     */
    MaxResults?: Limit;
  }
  export interface DescribeWorkspaceImagesResult {
    /**
     * Information about the images.
     */
    Images?: WorkspaceImageList;
    /**
     * The token to use to retrieve the next set of results, or null if no more results are available.
     */
    NextToken?: PaginationToken;
  }
  export interface DescribeWorkspaceSnapshotsRequest {
    /**
     * The identifier of the WorkSpace.
     */
    WorkspaceId: WorkspaceId;
  }
  export interface DescribeWorkspaceSnapshotsResult {
    /**
     * Information about the snapshots that can be used to rebuild a WorkSpace. These snapshots include the user volume.
     */
    RebuildSnapshots?: SnapshotList;
    /**
     * Information about the snapshots that can be used to restore a WorkSpace. These snapshots include both the root volume and the user volume.
     */
    RestoreSnapshots?: SnapshotList;
  }
  export interface DescribeWorkspacesConnectionStatusRequest {
    /**
     * The identifiers of the WorkSpaces. You can specify up to 25 WorkSpaces.
     */
    WorkspaceIds?: WorkspaceIdList;
    /**
     * If you received a NextToken from a previous call that was paginated, provide this token to receive the next set of results.
     */
    NextToken?: PaginationToken;
  }
  export interface DescribeWorkspacesConnectionStatusResult {
    /**
     * Information about the connection status of the WorkSpace.
     */
    WorkspacesConnectionStatus?: WorkspaceConnectionStatusList;
    /**
     * The token to use to retrieve the next set of results, or null if no more results are available.
     */
    NextToken?: PaginationToken;
  }
  export interface DescribeWorkspacesRequest {
    /**
     * The identifiers of the WorkSpaces. You cannot combine this parameter with any other filter. Because the CreateWorkspaces operation is asynchronous, the identifier it returns is not immediately available. If you immediately call DescribeWorkspaces with this identifier, no information is returned.
     */
    WorkspaceIds?: WorkspaceIdList;
    /**
     * The identifier of the directory. In addition, you can optionally specify a specific directory user (see UserName). You cannot combine this parameter with any other filter.
     */
    DirectoryId?: DirectoryId;
    /**
     * The name of the directory user. You must specify this parameter with DirectoryId.
     */
    UserName?: UserName;
    /**
     * The identifier of the bundle. All WorkSpaces that are created from this bundle are retrieved. You cannot combine this parameter with any other filter.
     */
    BundleId?: BundleId;
    /**
     * The maximum number of items to return.
     */
    Limit?: Limit;
    /**
     * If you received a NextToken from a previous call that was paginated, provide this token to receive the next set of results.
     */
    NextToken?: PaginationToken;
  }
  export interface DescribeWorkspacesResult {
    /**
     * Information about the WorkSpaces. Because CreateWorkspaces is an asynchronous operation, some of the returned information could be incomplete.
     */
    Workspaces?: WorkspaceList;
    /**
     * The token to use to retrieve the next set of results, or null if no more results are available.
     */
    NextToken?: PaginationToken;
  }
  export type Description = string;
  export type DirectoryId = string;
  export type DirectoryIdList = DirectoryId[];
  export type DirectoryList = WorkspaceDirectory[];
  export type DirectoryName = string;
  export interface DisassociateIpGroupsRequest {
    /**
     * The identifier of the directory.
     */
    DirectoryId: DirectoryId;
    /**
     * The identifiers of one or more IP access control groups.
     */
    GroupIds: IpGroupIdList;
  }
  export interface DisassociateIpGroupsResult {
  }
  export type DnsIpAddresses = IpAddress[];
  export type Ec2ImageId = string;
  export type ErrorType = string;
  export interface FailedCreateWorkspaceRequest {
    /**
     * Information about the WorkSpace.
     */
    WorkspaceRequest?: WorkspaceRequest;
    /**
     * The error code that is returned if the WorkSpace cannot be created.
     */
    ErrorCode?: ErrorType;
    /**
     * The text of the error message that is returned if the WorkSpace cannot be created.
     */
    ErrorMessage?: Description;
  }
  export type FailedCreateWorkspaceRequests = FailedCreateWorkspaceRequest[];
  export type FailedRebootWorkspaceRequests = FailedWorkspaceChangeRequest[];
  export type FailedRebuildWorkspaceRequests = FailedWorkspaceChangeRequest[];
  export type FailedStartWorkspaceRequests = FailedWorkspaceChangeRequest[];
  export type FailedStopWorkspaceRequests = FailedWorkspaceChangeRequest[];
  export type FailedTerminateWorkspaceRequests = FailedWorkspaceChangeRequest[];
  export interface FailedWorkspaceChangeRequest {
    /**
     * The identifier of the WorkSpace.
     */
    WorkspaceId?: WorkspaceId;
    /**
     * The error code that is returned if the WorkSpace cannot be rebooted.
     */
    ErrorCode?: ErrorType;
    /**
     * The text of the error message that is returned if the WorkSpace cannot be rebooted.
     */
    ErrorMessage?: Description;
  }
  export interface ImagePermission {
    /**
     * The identifier of the AWS account that an image has been shared with.
     */
    SharedAccountId?: AwsAccount;
  }
  export type ImagePermissions = ImagePermission[];
  export type ImageType = "OWNED"|"SHARED"|string;
  export interface ImportWorkspaceImageRequest {
    /**
     * The identifier of the EC2 image.
     */
    Ec2ImageId: Ec2ImageId;
    /**
     * The ingestion process to be used when importing the image.
     */
    IngestionProcess: WorkspaceImageIngestionProcess;
    /**
     * The name of the WorkSpace image.
     */
    ImageName: WorkspaceImageName;
    /**
     * The description of the WorkSpace image.
     */
    ImageDescription: WorkspaceImageDescription;
    /**
     * The tags. Each WorkSpaces resource can have a maximum of 50 tags.
     */
    Tags?: TagList;
  }
  export interface ImportWorkspaceImageResult {
    /**
     * The identifier of the WorkSpace image.
     */
    ImageId?: WorkspaceImageId;
  }
  export type IpAddress = string;
  export type IpGroupDesc = string;
  export type IpGroupId = string;
  export type IpGroupIdList = IpGroupId[];
  export type IpGroupName = string;
  export type IpRevokedRuleList = IpRule[];
  export type IpRule = string;
  export type IpRuleDesc = string;
  export interface IpRuleItem {
    /**
     * The IP address range, in CIDR notation.
     */
    ipRule?: IpRule;
    /**
     * The description.
     */
    ruleDesc?: IpRuleDesc;
  }
  export type IpRuleList = IpRuleItem[];
  export type Limit = number;
  export interface ListAvailableManagementCidrRangesRequest {
    /**
     * The IP address range to search. Specify an IP address range that is compatible with your network and in CIDR notation (that is, specify the range as an IPv4 CIDR block).
     */
    ManagementCidrRangeConstraint: ManagementCidrRangeConstraint;
    /**
     * The maximum number of items to return.
     */
    MaxResults?: ManagementCidrRangeMaxResults;
    /**
     * If you received a NextToken from a previous call that was paginated, provide this token to receive the next set of results.
     */
    NextToken?: PaginationToken;
  }
  export interface ListAvailableManagementCidrRangesResult {
    /**
     * The list of available IP address ranges, specified as IPv4 CIDR blocks.
     */
    ManagementCidrRanges?: DedicatedTenancyCidrRangeList;
    /**
     * The token to use to retrieve the next set of results, or null if no more results are available.
     */
    NextToken?: PaginationToken;
  }
  export type ManagementCidrRangeConstraint = string;
  export type ManagementCidrRangeMaxResults = number;
  export interface MigrateWorkspaceRequest {
    /**
     * The identifier of the WorkSpace to migrate from.
     */
    SourceWorkspaceId: WorkspaceId;
    /**
     * The identifier of the target bundle type to migrate the WorkSpace to.
     */
    BundleId: BundleId;
  }
  export interface MigrateWorkspaceResult {
    /**
     * The original identifier of the WorkSpace that is being migrated.
     */
    SourceWorkspaceId?: WorkspaceId;
    /**
     * The new identifier of the WorkSpace that is being migrated. If the migration does not succeed, the target WorkSpace ID will not be used, and the WorkSpace will still have the original WorkSpace ID.
     */
    TargetWorkspaceId?: WorkspaceId;
  }
  export type ModificationResourceEnum = "ROOT_VOLUME"|"USER_VOLUME"|"COMPUTE_TYPE"|string;
  export interface ModificationState {
    /**
     * The resource.
     */
    Resource?: ModificationResourceEnum;
    /**
     * The modification state.
     */
    State?: ModificationStateEnum;
  }
  export type ModificationStateEnum = "UPDATE_INITIATED"|"UPDATE_IN_PROGRESS"|string;
  export type ModificationStateList = ModificationState[];
  export interface ModifyAccountRequest {
    /**
     * The status of BYOL.
     */
    DedicatedTenancySupport?: DedicatedTenancySupportEnum;
    /**
     * The IP address range, specified as an IPv4 CIDR block, for the management network interface. Specify an IP address range that is compatible with your network and in CIDR notation (that is, specify the range as an IPv4 CIDR block). The CIDR block size must be /16 (for example, 203.0.113.25/16). It must also be specified as available by the ListAvailableManagementCidrRanges operation.
     */
    DedicatedTenancyManagementCidrRange?: DedicatedTenancyManagementCidrRange;
  }
  export interface ModifyAccountResult {
  }
  export interface ModifyClientPropertiesRequest {
    /**
     * The resource identifiers, in the form of directory IDs.
     */
    ResourceId: NonEmptyString;
    /**
     * Information about the Amazon WorkSpaces client.
     */
    ClientProperties: ClientProperties;
  }
  export interface ModifyClientPropertiesResult {
  }
  export interface ModifySelfservicePermissionsRequest {
    /**
     * The identifier of the directory.
     */
    ResourceId: DirectoryId;
    /**
     * The permissions to enable or disable self-service capabilities.
     */
    SelfservicePermissions: SelfservicePermissions;
  }
  export interface ModifySelfservicePermissionsResult {
  }
  export interface ModifyWorkspaceAccessPropertiesRequest {
    /**
     * The identifier of the directory.
     */
    ResourceId: DirectoryId;
    /**
     * The device types and operating systems to enable or disable for access.
     */
    WorkspaceAccessProperties: WorkspaceAccessProperties;
  }
  export interface ModifyWorkspaceAccessPropertiesResult {
  }
  export interface ModifyWorkspaceCreationPropertiesRequest {
    /**
     * The identifier of the directory.
     */
    ResourceId: DirectoryId;
    /**
     * The default properties for creating WorkSpaces.
     */
    WorkspaceCreationProperties: WorkspaceCreationProperties;
  }
  export interface ModifyWorkspaceCreationPropertiesResult {
  }
  export interface ModifyWorkspacePropertiesRequest {
    /**
     * The identifier of the WorkSpace.
     */
    WorkspaceId: WorkspaceId;
    /**
     * The properties of the WorkSpace.
     */
    WorkspaceProperties: WorkspaceProperties;
  }
  export interface ModifyWorkspacePropertiesResult {
  }
  export interface ModifyWorkspaceStateRequest {
    /**
     * The identifier of the WorkSpace.
     */
    WorkspaceId: WorkspaceId;
    /**
     * The WorkSpace state.
     */
    WorkspaceState: TargetWorkspaceState;
  }
  export interface ModifyWorkspaceStateResult {
  }
  export type NonEmptyString = string;
  export interface OperatingSystem {
    /**
     * The operating system.
     */
    Type?: OperatingSystemType;
  }
  export type OperatingSystemType = "WINDOWS"|"LINUX"|string;
  export type PaginationToken = string;
  export interface RebootRequest {
    /**
     * The identifier of the WorkSpace.
     */
    WorkspaceId: WorkspaceId;
  }
  export type RebootWorkspaceRequests = RebootRequest[];
  export interface RebootWorkspacesRequest {
    /**
     * The WorkSpaces to reboot. You can specify up to 25 WorkSpaces.
     */
    RebootWorkspaceRequests: RebootWorkspaceRequests;
  }
  export interface RebootWorkspacesResult {
    /**
     * Information about the WorkSpaces that could not be rebooted.
     */
    FailedRequests?: FailedRebootWorkspaceRequests;
  }
  export interface RebuildRequest {
    /**
     * The identifier of the WorkSpace.
     */
    WorkspaceId: WorkspaceId;
  }
  export type RebuildWorkspaceRequests = RebuildRequest[];
  export interface RebuildWorkspacesRequest {
    /**
     * The WorkSpace to rebuild. You can specify a single WorkSpace.
     */
    RebuildWorkspaceRequests: RebuildWorkspaceRequests;
  }
  export interface RebuildWorkspacesResult {
    /**
     * Information about the WorkSpace that could not be rebuilt.
     */
    FailedRequests?: FailedRebuildWorkspaceRequests;
  }
  export type ReconnectEnum = "ENABLED"|"DISABLED"|string;
  export type Region = string;
  export interface RegisterWorkspaceDirectoryRequest {
    /**
     * The identifier of the directory. You cannot register a directory if it does not have a status of Active. If the directory does not have a status of Active, you will receive an InvalidResourceStateException error. If you have already registered the maximum number of directories that you can register with Amazon WorkSpaces, you will receive a ResourceLimitExceededException error. Deregister directories that you are not using for WorkSpaces, and try again.
     */
    DirectoryId: DirectoryId;
    /**
     * The identifiers of the subnets for your virtual private cloud (VPC). Make sure that the subnets are in supported Availability Zones. The subnets must also be in separate Availability Zones. If these conditions are not met, you will receive an OperationNotSupportedException error.
     */
    SubnetIds?: SubnetIds;
    /**
     * Indicates whether Amazon WorkDocs is enabled or disabled. If you have enabled this parameter and WorkDocs is not available in the Region, you will receive an OperationNotSupportedException error. Set EnableWorkDocs to disabled, and try again.
     */
    EnableWorkDocs: BooleanObject;
    /**
     * Indicates whether self-service capabilities are enabled or disabled.
     */
    EnableSelfService?: BooleanObject;
    /**
     * Indicates whether your WorkSpace directory is dedicated or shared. To use Bring Your Own License (BYOL) images, this value must be set to DEDICATED and your AWS account must be enabled for BYOL. If your account has not been enabled for BYOL, you will receive an InvalidParameterValuesException error. For more information about BYOL images, see Bring Your Own Windows Desktop Images.
     */
    Tenancy?: Tenancy;
    /**
     * The tags associated with the directory.
     */
    Tags?: TagList;
  }
  export interface RegisterWorkspaceDirectoryResult {
  }
  export type RegistrationCode = string;
  export type ResourceIdList = NonEmptyString[];
  export interface RestoreWorkspaceRequest {
    /**
     * The identifier of the WorkSpace.
     */
    WorkspaceId: WorkspaceId;
  }
  export interface RestoreWorkspaceResult {
  }
  export interface RevokeIpRulesRequest {
    /**
     * The identifier of the group.
     */
    GroupId: IpGroupId;
    /**
     * The rules to remove from the group.
     */
    UserRules: IpRevokedRuleList;
  }
  export interface RevokeIpRulesResult {
  }
  export interface RootStorage {
    /**
     * The size of the root volume.
     */
    Capacity?: NonEmptyString;
  }
  export type RootVolumeSizeGib = number;
  export type RunningMode = "AUTO_STOP"|"ALWAYS_ON"|string;
  export type RunningModeAutoStopTimeoutInMinutes = number;
  export type SecurityGroupId = string;
  export interface SelfservicePermissions {
    /**
     * Specifies whether users can restart their WorkSpace.
     */
    RestartWorkspace?: ReconnectEnum;
    /**
     * Specifies whether users can increase the volume size of the drives on their WorkSpace.
     */
    IncreaseVolumeSize?: ReconnectEnum;
    /**
     * Specifies whether users can change the compute type (bundle) for their WorkSpace.
     */
    ChangeComputeType?: ReconnectEnum;
    /**
     * Specifies whether users can switch the running mode of their WorkSpace.
     */
    SwitchRunningMode?: ReconnectEnum;
    /**
     * Specifies whether users can rebuild the operating system of a WorkSpace to its original state.
     */
    RebuildWorkspace?: ReconnectEnum;
  }
  export interface Snapshot {
    /**
     * The time when the snapshot was created.
     */
    SnapshotTime?: Timestamp;
  }
  export type SnapshotList = Snapshot[];
  export interface StartRequest {
    /**
     * The identifier of the WorkSpace.
     */
    WorkspaceId?: WorkspaceId;
  }
  export type StartWorkspaceRequests = StartRequest[];
  export interface StartWorkspacesRequest {
    /**
     * The WorkSpaces to start. You can specify up to 25 WorkSpaces.
     */
    StartWorkspaceRequests: StartWorkspaceRequests;
  }
  export interface StartWorkspacesResult {
    /**
     * Information about the WorkSpaces that could not be started.
     */
    FailedRequests?: FailedStartWorkspaceRequests;
  }
  export interface StopRequest {
    /**
     * The identifier of the WorkSpace.
     */
    WorkspaceId?: WorkspaceId;
  }
  export type StopWorkspaceRequests = StopRequest[];
  export interface StopWorkspacesRequest {
    /**
     * The WorkSpaces to stop. You can specify up to 25 WorkSpaces.
     */
    StopWorkspaceRequests: StopWorkspaceRequests;
  }
  export interface StopWorkspacesResult {
    /**
     * Information about the WorkSpaces that could not be stopped.
     */
    FailedRequests?: FailedStopWorkspaceRequests;
  }
  export type SubnetId = string;
  export type SubnetIds = SubnetId[];
  export interface Tag {
    /**
     * The key of the tag.
     */
    Key: TagKey;
    /**
     * The value of the tag.
     */
    Value?: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = NonEmptyString[];
  export type TagList = Tag[];
  export type TagValue = string;
  export type TargetWorkspaceState = "AVAILABLE"|"ADMIN_MAINTENANCE"|string;
  export type Tenancy = "DEDICATED"|"SHARED"|string;
  export interface TerminateRequest {
    /**
     * The identifier of the WorkSpace.
     */
    WorkspaceId: WorkspaceId;
  }
  export type TerminateWorkspaceRequests = TerminateRequest[];
  export interface TerminateWorkspacesRequest {
    /**
     * The WorkSpaces to terminate. You can specify up to 25 WorkSpaces.
     */
    TerminateWorkspaceRequests: TerminateWorkspaceRequests;
  }
  export interface TerminateWorkspacesResult {
    /**
     * Information about the WorkSpaces that could not be terminated.
     */
    FailedRequests?: FailedTerminateWorkspaceRequests;
  }
  export type Timestamp = Date;
  export interface UpdateRulesOfIpGroupRequest {
    /**
     * The identifier of the group.
     */
    GroupId: IpGroupId;
    /**
     * One or more rules.
     */
    UserRules: IpRuleList;
  }
  export interface UpdateRulesOfIpGroupResult {
  }
  export interface UpdateWorkspaceImagePermissionRequest {
    /**
     * The identifier of the image.
     */
    ImageId: WorkspaceImageId;
    /**
     * The permission to copy the image. This permission can be revoked only after an image has been shared.
     */
    AllowCopyImage: BooleanObject;
    /**
     * The identifier of the AWS account to share or unshare the image with.
     */
    SharedAccountId: AwsAccount;
  }
  export interface UpdateWorkspaceImagePermissionResult {
  }
  export type UserName = string;
  export interface UserStorage {
    /**
     * The size of the user storage.
     */
    Capacity?: NonEmptyString;
  }
  export type UserVolumeSizeGib = number;
  export type VolumeEncryptionKey = string;
  export interface Workspace {
    /**
     * The identifier of the WorkSpace.
     */
    WorkspaceId?: WorkspaceId;
    /**
     * The identifier of the AWS Directory Service directory for the WorkSpace.
     */
    DirectoryId?: DirectoryId;
    /**
     * The user for the WorkSpace.
     */
    UserName?: UserName;
    /**
     * The IP address of the WorkSpace.
     */
    IpAddress?: IpAddress;
    /**
     * The operational state of the WorkSpace.
     */
    State?: WorkspaceState;
    /**
     * The identifier of the bundle used to create the WorkSpace.
     */
    BundleId?: BundleId;
    /**
     * The identifier of the subnet for the WorkSpace.
     */
    SubnetId?: SubnetId;
    /**
     * The text of the error message that is returned if the WorkSpace cannot be created.
     */
    ErrorMessage?: Description;
    /**
     * The error code that is returned if the WorkSpace cannot be created.
     */
    ErrorCode?: WorkspaceErrorCode;
    /**
     * The name of the WorkSpace, as seen by the operating system. The format of this name varies. For more information, see  Launch a WorkSpace. 
     */
    ComputerName?: ComputerName;
    /**
     * The symmetric AWS KMS customer master key (CMK) used to encrypt data stored on your WorkSpace. Amazon WorkSpaces does not support asymmetric CMKs.
     */
    VolumeEncryptionKey?: VolumeEncryptionKey;
    /**
     * Indicates whether the data stored on the user volume is encrypted.
     */
    UserVolumeEncryptionEnabled?: BooleanObject;
    /**
     * Indicates whether the data stored on the root volume is encrypted.
     */
    RootVolumeEncryptionEnabled?: BooleanObject;
    /**
     * The properties of the WorkSpace.
     */
    WorkspaceProperties?: WorkspaceProperties;
    /**
     * The modification states of the WorkSpace.
     */
    ModificationStates?: ModificationStateList;
  }
  export interface WorkspaceAccessProperties {
    /**
     * Indicates whether users can use Windows clients to access their WorkSpaces. To restrict WorkSpaces access to trusted devices (also known as managed devices) with valid certificates, specify a value of TRUST. For more information, see Restrict WorkSpaces Access to Trusted Devices. 
     */
    DeviceTypeWindows?: AccessPropertyValue;
    /**
     * Indicates whether users can use macOS clients to access their WorkSpaces. To restrict WorkSpaces access to trusted devices (also known as managed devices) with valid certificates, specify a value of TRUST. For more information, see Restrict WorkSpaces Access to Trusted Devices. 
     */
    DeviceTypeOsx?: AccessPropertyValue;
    /**
     * Indicates whether users can access their WorkSpaces through a web browser.
     */
    DeviceTypeWeb?: AccessPropertyValue;
    /**
     * Indicates whether users can use iOS devices to access their WorkSpaces.
     */
    DeviceTypeIos?: AccessPropertyValue;
    /**
     * Indicates whether users can use Android devices to access their WorkSpaces.
     */
    DeviceTypeAndroid?: AccessPropertyValue;
    /**
     * Indicates whether users can use Chromebooks to access their WorkSpaces.
     */
    DeviceTypeChromeOs?: AccessPropertyValue;
    /**
     * Indicates whether users can use zero client devices to access their WorkSpaces.
     */
    DeviceTypeZeroClient?: AccessPropertyValue;
  }
  export interface WorkspaceBundle {
    /**
     * The bundle identifier.
     */
    BundleId?: BundleId;
    /**
     * The name of the bundle.
     */
    Name?: NonEmptyString;
    /**
     * The owner of the bundle. This is the account identifier of the owner, or AMAZON if the bundle is provided by AWS.
     */
    Owner?: BundleOwner;
    /**
     * A description.
     */
    Description?: Description;
    /**
     * The image identifier of the bundle.
     */
    ImageId?: WorkspaceImageId;
    /**
     * The size of the root volume.
     */
    RootStorage?: RootStorage;
    /**
     * The size of the user storage.
     */
    UserStorage?: UserStorage;
    /**
     * The compute type. For more information, see Amazon WorkSpaces Bundles.
     */
    ComputeType?: ComputeType;
    /**
     * The last time that the bundle was updated.
     */
    LastUpdatedTime?: Timestamp;
  }
  export interface WorkspaceConnectionStatus {
    /**
     * The identifier of the WorkSpace.
     */
    WorkspaceId?: WorkspaceId;
    /**
     * The connection state of the WorkSpace. The connection state is unknown if the WorkSpace is stopped.
     */
    ConnectionState?: ConnectionState;
    /**
     * The timestamp of the connection status check.
     */
    ConnectionStateCheckTimestamp?: Timestamp;
    /**
     * The timestamp of the last known user connection.
     */
    LastKnownUserConnectionTimestamp?: Timestamp;
  }
  export type WorkspaceConnectionStatusList = WorkspaceConnectionStatus[];
  export interface WorkspaceCreationProperties {
    /**
     * Indicates whether Amazon WorkDocs is enabled for your WorkSpaces.  If WorkDocs is already enabled for a WorkSpaces directory and you disable it, new WorkSpaces launched in the directory will not have WorkDocs enabled. However, WorkDocs remains enabled for any existing WorkSpaces, unless you either disable users' access to WorkDocs or you delete the WorkDocs site. To disable users' access to WorkDocs, see Disabling Users in the Amazon WorkDocs Administration Guide. To delete a WorkDocs site, see Deleting a Site in the Amazon WorkDocs Administration Guide. If you enable WorkDocs on a directory that already has existing WorkSpaces, the existing WorkSpaces and any new WorkSpaces that are launched in the directory will have WorkDocs enabled. 
     */
    EnableWorkDocs?: BooleanObject;
    /**
     * Indicates whether internet access is enabled for your WorkSpaces.
     */
    EnableInternetAccess?: BooleanObject;
    /**
     * The default organizational unit (OU) for your WorkSpace directories.
     */
    DefaultOu?: DefaultOu;
    /**
     * The identifier of your custom security group.
     */
    CustomSecurityGroupId?: SecurityGroupId;
    /**
     * Indicates whether users are local administrators of their WorkSpaces.
     */
    UserEnabledAsLocalAdministrator?: BooleanObject;
    /**
     * Indicates whether maintenance mode is enabled for your WorkSpaces. For more information, see WorkSpace Maintenance. 
     */
    EnableMaintenanceMode?: BooleanObject;
  }
  export interface WorkspaceDirectory {
    /**
     * The directory identifier.
     */
    DirectoryId?: DirectoryId;
    /**
     * The directory alias.
     */
    Alias?: Alias;
    /**
     * The name of the directory.
     */
    DirectoryName?: DirectoryName;
    /**
     * The registration code for the directory. This is the code that users enter in their Amazon WorkSpaces client application to connect to the directory.
     */
    RegistrationCode?: RegistrationCode;
    /**
     * The identifiers of the subnets used with the directory.
     */
    SubnetIds?: SubnetIds;
    /**
     * The IP addresses of the DNS servers for the directory.
     */
    DnsIpAddresses?: DnsIpAddresses;
    /**
     * The user name for the service account.
     */
    CustomerUserName?: UserName;
    /**
     * The identifier of the IAM role. This is the role that allows Amazon WorkSpaces to make calls to other services, such as Amazon EC2, on your behalf.
     */
    IamRoleId?: ARN;
    /**
     * The directory type.
     */
    DirectoryType?: WorkspaceDirectoryType;
    /**
     * The identifier of the security group that is assigned to new WorkSpaces.
     */
    WorkspaceSecurityGroupId?: SecurityGroupId;
    /**
     * The state of the directory's registration with Amazon WorkSpaces.
     */
    State?: WorkspaceDirectoryState;
    /**
     * The default creation properties for all WorkSpaces in the directory.
     */
    WorkspaceCreationProperties?: DefaultWorkspaceCreationProperties;
    /**
     * The identifiers of the IP access control groups associated with the directory.
     */
    ipGroupIds?: IpGroupIdList;
    /**
     * The devices and operating systems that users can use to access WorkSpaces.
     */
    WorkspaceAccessProperties?: WorkspaceAccessProperties;
    /**
     * Specifies whether the directory is dedicated or shared. To use Bring Your Own License (BYOL), this value must be set to DEDICATED. For more information, see Bring Your Own Windows Desktop Images.
     */
    Tenancy?: Tenancy;
    /**
     * The default self-service permissions for WorkSpaces in the directory.
     */
    SelfservicePermissions?: SelfservicePermissions;
  }
  export type WorkspaceDirectoryState = "REGISTERING"|"REGISTERED"|"DEREGISTERING"|"DEREGISTERED"|"ERROR"|string;
  export type WorkspaceDirectoryType = "SIMPLE_AD"|"AD_CONNECTOR"|string;
  export type WorkspaceErrorCode = string;
  export type WorkspaceId = string;
  export type WorkspaceIdList = WorkspaceId[];
  export interface WorkspaceImage {
    /**
     * The identifier of the image.
     */
    ImageId?: WorkspaceImageId;
    /**
     * The name of the image.
     */
    Name?: WorkspaceImageName;
    /**
     * The description of the image.
     */
    Description?: WorkspaceImageDescription;
    /**
     * The operating system that the image is running. 
     */
    OperatingSystem?: OperatingSystem;
    /**
     * The status of the image.
     */
    State?: WorkspaceImageState;
    /**
     * Specifies whether the image is running on dedicated hardware. When Bring Your Own License (BYOL) is enabled, this value is set to DEDICATED. For more information, see Bring Your Own Windows Desktop Images.
     */
    RequiredTenancy?: WorkspaceImageRequiredTenancy;
    /**
     * The error code that is returned for the image.
     */
    ErrorCode?: WorkspaceImageErrorCode;
    /**
     * The text of the error message that is returned for the image.
     */
    ErrorMessage?: Description;
    /**
     * The date when the image was created. If the image has been shared, the AWS account that the image has been shared with sees the original creation date of the image.
     */
    Created?: Timestamp;
    /**
     * The identifier of the AWS account that owns the image.
     */
    OwnerAccountId?: AwsAccount;
  }
  export type WorkspaceImageDescription = string;
  export type WorkspaceImageErrorCode = string;
  export type WorkspaceImageId = string;
  export type WorkspaceImageIdList = WorkspaceImageId[];
  export type WorkspaceImageIngestionProcess = "BYOL_REGULAR"|"BYOL_GRAPHICS"|"BYOL_GRAPHICSPRO"|string;
  export type WorkspaceImageList = WorkspaceImage[];
  export type WorkspaceImageName = string;
  export type WorkspaceImageRequiredTenancy = "DEFAULT"|"DEDICATED"|string;
  export type WorkspaceImageState = "AVAILABLE"|"PENDING"|"ERROR"|string;
  export type WorkspaceList = Workspace[];
  export interface WorkspaceProperties {
    /**
     * The running mode. For more information, see Manage the WorkSpace Running Mode.
     */
    RunningMode?: RunningMode;
    /**
     * The time after a user logs off when WorkSpaces are automatically stopped. Configured in 60-minute intervals.
     */
    RunningModeAutoStopTimeoutInMinutes?: RunningModeAutoStopTimeoutInMinutes;
    /**
     * The size of the root volume. For important information about how to modify the size of the root and user volumes, see Modify a WorkSpace.
     */
    RootVolumeSizeGib?: RootVolumeSizeGib;
    /**
     * The size of the user storage. For important information about how to modify the size of the root and user volumes, see Modify a WorkSpace.
     */
    UserVolumeSizeGib?: UserVolumeSizeGib;
    /**
     * The compute type. For more information, see Amazon WorkSpaces Bundles.
     */
    ComputeTypeName?: Compute;
  }
  export interface WorkspaceRequest {
    /**
     * The identifier of the AWS Directory Service directory for the WorkSpace. You can use DescribeWorkspaceDirectories to list the available directories.
     */
    DirectoryId: DirectoryId;
    /**
     * The user name of the user for the WorkSpace. This user name must exist in the AWS Directory Service directory for the WorkSpace.
     */
    UserName: UserName;
    /**
     * The identifier of the bundle for the WorkSpace. You can use DescribeWorkspaceBundles to list the available bundles.
     */
    BundleId: BundleId;
    /**
     * The symmetric AWS KMS customer master key (CMK) used to encrypt data stored on your WorkSpace. Amazon WorkSpaces does not support asymmetric CMKs.
     */
    VolumeEncryptionKey?: VolumeEncryptionKey;
    /**
     * Indicates whether the data stored on the user volume is encrypted.
     */
    UserVolumeEncryptionEnabled?: BooleanObject;
    /**
     * Indicates whether the data stored on the root volume is encrypted.
     */
    RootVolumeEncryptionEnabled?: BooleanObject;
    /**
     * The WorkSpace properties.
     */
    WorkspaceProperties?: WorkspaceProperties;
    /**
     * The tags for the WorkSpace.
     */
    Tags?: TagList;
  }
  export type WorkspaceRequestList = WorkspaceRequest[];
  export type WorkspaceState = "PENDING"|"AVAILABLE"|"IMPAIRED"|"UNHEALTHY"|"REBOOTING"|"STARTING"|"REBUILDING"|"RESTORING"|"MAINTENANCE"|"ADMIN_MAINTENANCE"|"TERMINATING"|"TERMINATED"|"SUSPENDED"|"UPDATING"|"STOPPING"|"STOPPED"|"ERROR"|string;
  export interface WorkspacesIpGroup {
    /**
     * The identifier of the group.
     */
    groupId?: IpGroupId;
    /**
     * The name of the group.
     */
    groupName?: IpGroupName;
    /**
     * The description of the group.
     */
    groupDesc?: IpGroupDesc;
    /**
     * The rules.
     */
    userRules?: IpRuleList;
  }
  export type WorkspacesIpGroupsList = WorkspacesIpGroup[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2015-04-08"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the WorkSpaces client.
   */
  export import Types = WorkSpaces;
}
export = WorkSpaces;
