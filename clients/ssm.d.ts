import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class SSM extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: SSM.Types.ClientConfiguration)
  config: Config & SSM.Types.ClientConfiguration;
  /**
   * Adds or overwrites one or more tags for the specified resource. Tags are metadata that you can assign to your documents, managed instances, Maintenance Windows, Parameter Store parameters, and patch baselines. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value, both of which you define. For example, you could define a set of tags for your account's managed instances that helps you track each instance's owner and stack level. For example: Key=Owner and Value=DbAdmin, SysAdmin, or Dev. Or Key=Stack and Value=Production, Pre-Production, or Test. Each resource can have a maximum of 50 tags.  We recommend that you devise a set of tag keys that meets your needs for each resource type. Using a consistent set of tag keys makes it easier for you to manage your resources. You can search and filter the resources based on the tags you add. Tags don't have any semantic meaning to Amazon EC2 and are interpreted strictly as a string of characters.  For more information about tags, see Tagging Your Amazon EC2 Resources in the Amazon EC2 User Guide.
   */
  addTagsToResource(params: SSM.Types.AddTagsToResourceRequest, callback?: (err: AWSError, data: SSM.Types.AddTagsToResourceResult) => void): Request<SSM.Types.AddTagsToResourceResult, AWSError>;
  /**
   * Adds or overwrites one or more tags for the specified resource. Tags are metadata that you can assign to your documents, managed instances, Maintenance Windows, Parameter Store parameters, and patch baselines. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value, both of which you define. For example, you could define a set of tags for your account's managed instances that helps you track each instance's owner and stack level. For example: Key=Owner and Value=DbAdmin, SysAdmin, or Dev. Or Key=Stack and Value=Production, Pre-Production, or Test. Each resource can have a maximum of 50 tags.  We recommend that you devise a set of tag keys that meets your needs for each resource type. Using a consistent set of tag keys makes it easier for you to manage your resources. You can search and filter the resources based on the tags you add. Tags don't have any semantic meaning to Amazon EC2 and are interpreted strictly as a string of characters.  For more information about tags, see Tagging Your Amazon EC2 Resources in the Amazon EC2 User Guide.
   */
  addTagsToResource(callback?: (err: AWSError, data: SSM.Types.AddTagsToResourceResult) => void): Request<SSM.Types.AddTagsToResourceResult, AWSError>;
  /**
   * Attempts to cancel the command specified by the Command ID. There is no guarantee that the command will be terminated and the underlying process stopped.
   */
  cancelCommand(params: SSM.Types.CancelCommandRequest, callback?: (err: AWSError, data: SSM.Types.CancelCommandResult) => void): Request<SSM.Types.CancelCommandResult, AWSError>;
  /**
   * Attempts to cancel the command specified by the Command ID. There is no guarantee that the command will be terminated and the underlying process stopped.
   */
  cancelCommand(callback?: (err: AWSError, data: SSM.Types.CancelCommandResult) => void): Request<SSM.Types.CancelCommandResult, AWSError>;
  /**
   * Stops a Maintenance Window execution that is already in progress and cancels any tasks in the window that have not already starting running. (Tasks already in progress will continue to completion.)
   */
  cancelMaintenanceWindowExecution(params: SSM.Types.CancelMaintenanceWindowExecutionRequest, callback?: (err: AWSError, data: SSM.Types.CancelMaintenanceWindowExecutionResult) => void): Request<SSM.Types.CancelMaintenanceWindowExecutionResult, AWSError>;
  /**
   * Stops a Maintenance Window execution that is already in progress and cancels any tasks in the window that have not already starting running. (Tasks already in progress will continue to completion.)
   */
  cancelMaintenanceWindowExecution(callback?: (err: AWSError, data: SSM.Types.CancelMaintenanceWindowExecutionResult) => void): Request<SSM.Types.CancelMaintenanceWindowExecutionResult, AWSError>;
  /**
   * Registers your on-premises server or virtual machine with Amazon EC2 so that you can manage these resources using Run Command. An on-premises server or virtual machine that has been registered with EC2 is called a managed instance. For more information about activations, see Setting Up Systems Manager in Hybrid Environments.
   */
  createActivation(params: SSM.Types.CreateActivationRequest, callback?: (err: AWSError, data: SSM.Types.CreateActivationResult) => void): Request<SSM.Types.CreateActivationResult, AWSError>;
  /**
   * Registers your on-premises server or virtual machine with Amazon EC2 so that you can manage these resources using Run Command. An on-premises server or virtual machine that has been registered with EC2 is called a managed instance. For more information about activations, see Setting Up Systems Manager in Hybrid Environments.
   */
  createActivation(callback?: (err: AWSError, data: SSM.Types.CreateActivationResult) => void): Request<SSM.Types.CreateActivationResult, AWSError>;
  /**
   * Associates the specified Systems Manager document with the specified instances or targets. When you associate a document with one or more instances using instance IDs or tags, SSM Agent running on the instance processes the document and configures the instance as specified. If you associate a document with an instance that already has an associated document, the system throws the AssociationAlreadyExists exception.
   */
  createAssociation(params: SSM.Types.CreateAssociationRequest, callback?: (err: AWSError, data: SSM.Types.CreateAssociationResult) => void): Request<SSM.Types.CreateAssociationResult, AWSError>;
  /**
   * Associates the specified Systems Manager document with the specified instances or targets. When you associate a document with one or more instances using instance IDs or tags, SSM Agent running on the instance processes the document and configures the instance as specified. If you associate a document with an instance that already has an associated document, the system throws the AssociationAlreadyExists exception.
   */
  createAssociation(callback?: (err: AWSError, data: SSM.Types.CreateAssociationResult) => void): Request<SSM.Types.CreateAssociationResult, AWSError>;
  /**
   * Associates the specified Systems Manager document with the specified instances or targets. When you associate a document with one or more instances using instance IDs or tags, SSM Agent running on the instance processes the document and configures the instance as specified. If you associate a document with an instance that already has an associated document, the system throws the AssociationAlreadyExists exception.
   */
  createAssociationBatch(params: SSM.Types.CreateAssociationBatchRequest, callback?: (err: AWSError, data: SSM.Types.CreateAssociationBatchResult) => void): Request<SSM.Types.CreateAssociationBatchResult, AWSError>;
  /**
   * Associates the specified Systems Manager document with the specified instances or targets. When you associate a document with one or more instances using instance IDs or tags, SSM Agent running on the instance processes the document and configures the instance as specified. If you associate a document with an instance that already has an associated document, the system throws the AssociationAlreadyExists exception.
   */
  createAssociationBatch(callback?: (err: AWSError, data: SSM.Types.CreateAssociationBatchResult) => void): Request<SSM.Types.CreateAssociationBatchResult, AWSError>;
  /**
   * Creates a Systems Manager document. After you create a document, you can use CreateAssociation to associate it with one or more running instances.
   */
  createDocument(params: SSM.Types.CreateDocumentRequest, callback?: (err: AWSError, data: SSM.Types.CreateDocumentResult) => void): Request<SSM.Types.CreateDocumentResult, AWSError>;
  /**
   * Creates a Systems Manager document. After you create a document, you can use CreateAssociation to associate it with one or more running instances.
   */
  createDocument(callback?: (err: AWSError, data: SSM.Types.CreateDocumentResult) => void): Request<SSM.Types.CreateDocumentResult, AWSError>;
  /**
   * Creates a new Maintenance Window.
   */
  createMaintenanceWindow(params: SSM.Types.CreateMaintenanceWindowRequest, callback?: (err: AWSError, data: SSM.Types.CreateMaintenanceWindowResult) => void): Request<SSM.Types.CreateMaintenanceWindowResult, AWSError>;
  /**
   * Creates a new Maintenance Window.
   */
  createMaintenanceWindow(callback?: (err: AWSError, data: SSM.Types.CreateMaintenanceWindowResult) => void): Request<SSM.Types.CreateMaintenanceWindowResult, AWSError>;
  /**
   * Creates a patch baseline.  For information about valid key and value pairs in PatchFilters for each supported operating system type, see PatchFilter. 
   */
  createPatchBaseline(params: SSM.Types.CreatePatchBaselineRequest, callback?: (err: AWSError, data: SSM.Types.CreatePatchBaselineResult) => void): Request<SSM.Types.CreatePatchBaselineResult, AWSError>;
  /**
   * Creates a patch baseline.  For information about valid key and value pairs in PatchFilters for each supported operating system type, see PatchFilter. 
   */
  createPatchBaseline(callback?: (err: AWSError, data: SSM.Types.CreatePatchBaselineResult) => void): Request<SSM.Types.CreatePatchBaselineResult, AWSError>;
  /**
   * Creates a resource data sync configuration to a single bucket in Amazon S3. This is an asynchronous operation that returns immediately. After a successful initial sync is completed, the system continuously syncs data to the Amazon S3 bucket. To check the status of the sync, use the ListResourceDataSync. By default, data is not encrypted in Amazon S3. We strongly recommend that you enable encryption in Amazon S3 to ensure secure data storage. We also recommend that you secure access to the Amazon S3 bucket by creating a restrictive bucket policy. To view an example of a restrictive Amazon S3 bucket policy for Resource Data Sync, see Create a Resource Data Sync for Inventory in the AWS Systems Manager User Guide.
   */
  createResourceDataSync(params: SSM.Types.CreateResourceDataSyncRequest, callback?: (err: AWSError, data: SSM.Types.CreateResourceDataSyncResult) => void): Request<SSM.Types.CreateResourceDataSyncResult, AWSError>;
  /**
   * Creates a resource data sync configuration to a single bucket in Amazon S3. This is an asynchronous operation that returns immediately. After a successful initial sync is completed, the system continuously syncs data to the Amazon S3 bucket. To check the status of the sync, use the ListResourceDataSync. By default, data is not encrypted in Amazon S3. We strongly recommend that you enable encryption in Amazon S3 to ensure secure data storage. We also recommend that you secure access to the Amazon S3 bucket by creating a restrictive bucket policy. To view an example of a restrictive Amazon S3 bucket policy for Resource Data Sync, see Create a Resource Data Sync for Inventory in the AWS Systems Manager User Guide.
   */
  createResourceDataSync(callback?: (err: AWSError, data: SSM.Types.CreateResourceDataSyncResult) => void): Request<SSM.Types.CreateResourceDataSyncResult, AWSError>;
  /**
   * Deletes an activation. You are not required to delete an activation. If you delete an activation, you can no longer use it to register additional managed instances. Deleting an activation does not de-register managed instances. You must manually de-register managed instances.
   */
  deleteActivation(params: SSM.Types.DeleteActivationRequest, callback?: (err: AWSError, data: SSM.Types.DeleteActivationResult) => void): Request<SSM.Types.DeleteActivationResult, AWSError>;
  /**
   * Deletes an activation. You are not required to delete an activation. If you delete an activation, you can no longer use it to register additional managed instances. Deleting an activation does not de-register managed instances. You must manually de-register managed instances.
   */
  deleteActivation(callback?: (err: AWSError, data: SSM.Types.DeleteActivationResult) => void): Request<SSM.Types.DeleteActivationResult, AWSError>;
  /**
   * Disassociates the specified Systems Manager document from the specified instance. When you disassociate a document from an instance, it does not change the configuration of the instance. To change the configuration state of an instance after you disassociate a document, you must create a new document with the desired configuration and associate it with the instance.
   */
  deleteAssociation(params: SSM.Types.DeleteAssociationRequest, callback?: (err: AWSError, data: SSM.Types.DeleteAssociationResult) => void): Request<SSM.Types.DeleteAssociationResult, AWSError>;
  /**
   * Disassociates the specified Systems Manager document from the specified instance. When you disassociate a document from an instance, it does not change the configuration of the instance. To change the configuration state of an instance after you disassociate a document, you must create a new document with the desired configuration and associate it with the instance.
   */
  deleteAssociation(callback?: (err: AWSError, data: SSM.Types.DeleteAssociationResult) => void): Request<SSM.Types.DeleteAssociationResult, AWSError>;
  /**
   * Deletes the Systems Manager document and all instance associations to the document. Before you delete the document, we recommend that you use DeleteAssociation to disassociate all instances that are associated with the document.
   */
  deleteDocument(params: SSM.Types.DeleteDocumentRequest, callback?: (err: AWSError, data: SSM.Types.DeleteDocumentResult) => void): Request<SSM.Types.DeleteDocumentResult, AWSError>;
  /**
   * Deletes the Systems Manager document and all instance associations to the document. Before you delete the document, we recommend that you use DeleteAssociation to disassociate all instances that are associated with the document.
   */
  deleteDocument(callback?: (err: AWSError, data: SSM.Types.DeleteDocumentResult) => void): Request<SSM.Types.DeleteDocumentResult, AWSError>;
  /**
   * Delete a custom inventory type, or the data associated with a custom Inventory type. Deleting a custom inventory type is also referred to as deleting a custom inventory schema.
   */
  deleteInventory(params: SSM.Types.DeleteInventoryRequest, callback?: (err: AWSError, data: SSM.Types.DeleteInventoryResult) => void): Request<SSM.Types.DeleteInventoryResult, AWSError>;
  /**
   * Delete a custom inventory type, or the data associated with a custom Inventory type. Deleting a custom inventory type is also referred to as deleting a custom inventory schema.
   */
  deleteInventory(callback?: (err: AWSError, data: SSM.Types.DeleteInventoryResult) => void): Request<SSM.Types.DeleteInventoryResult, AWSError>;
  /**
   * Deletes a Maintenance Window.
   */
  deleteMaintenanceWindow(params: SSM.Types.DeleteMaintenanceWindowRequest, callback?: (err: AWSError, data: SSM.Types.DeleteMaintenanceWindowResult) => void): Request<SSM.Types.DeleteMaintenanceWindowResult, AWSError>;
  /**
   * Deletes a Maintenance Window.
   */
  deleteMaintenanceWindow(callback?: (err: AWSError, data: SSM.Types.DeleteMaintenanceWindowResult) => void): Request<SSM.Types.DeleteMaintenanceWindowResult, AWSError>;
  /**
   * Delete a parameter from the system.
   */
  deleteParameter(params: SSM.Types.DeleteParameterRequest, callback?: (err: AWSError, data: SSM.Types.DeleteParameterResult) => void): Request<SSM.Types.DeleteParameterResult, AWSError>;
  /**
   * Delete a parameter from the system.
   */
  deleteParameter(callback?: (err: AWSError, data: SSM.Types.DeleteParameterResult) => void): Request<SSM.Types.DeleteParameterResult, AWSError>;
  /**
   * Delete a list of parameters. This API is used to delete parameters by using the Amazon EC2 console.
   */
  deleteParameters(params: SSM.Types.DeleteParametersRequest, callback?: (err: AWSError, data: SSM.Types.DeleteParametersResult) => void): Request<SSM.Types.DeleteParametersResult, AWSError>;
  /**
   * Delete a list of parameters. This API is used to delete parameters by using the Amazon EC2 console.
   */
  deleteParameters(callback?: (err: AWSError, data: SSM.Types.DeleteParametersResult) => void): Request<SSM.Types.DeleteParametersResult, AWSError>;
  /**
   * Deletes a patch baseline.
   */
  deletePatchBaseline(params: SSM.Types.DeletePatchBaselineRequest, callback?: (err: AWSError, data: SSM.Types.DeletePatchBaselineResult) => void): Request<SSM.Types.DeletePatchBaselineResult, AWSError>;
  /**
   * Deletes a patch baseline.
   */
  deletePatchBaseline(callback?: (err: AWSError, data: SSM.Types.DeletePatchBaselineResult) => void): Request<SSM.Types.DeletePatchBaselineResult, AWSError>;
  /**
   * Deletes a Resource Data Sync configuration. After the configuration is deleted, changes to inventory data on managed instances are no longer synced with the target Amazon S3 bucket. Deleting a sync configuration does not delete data in the target Amazon S3 bucket.
   */
  deleteResourceDataSync(params: SSM.Types.DeleteResourceDataSyncRequest, callback?: (err: AWSError, data: SSM.Types.DeleteResourceDataSyncResult) => void): Request<SSM.Types.DeleteResourceDataSyncResult, AWSError>;
  /**
   * Deletes a Resource Data Sync configuration. After the configuration is deleted, changes to inventory data on managed instances are no longer synced with the target Amazon S3 bucket. Deleting a sync configuration does not delete data in the target Amazon S3 bucket.
   */
  deleteResourceDataSync(callback?: (err: AWSError, data: SSM.Types.DeleteResourceDataSyncResult) => void): Request<SSM.Types.DeleteResourceDataSyncResult, AWSError>;
  /**
   * Removes the server or virtual machine from the list of registered servers. You can reregister the instance again at any time. If you don't plan to use Run Command on the server, we suggest uninstalling SSM Agent first.
   */
  deregisterManagedInstance(params: SSM.Types.DeregisterManagedInstanceRequest, callback?: (err: AWSError, data: SSM.Types.DeregisterManagedInstanceResult) => void): Request<SSM.Types.DeregisterManagedInstanceResult, AWSError>;
  /**
   * Removes the server or virtual machine from the list of registered servers. You can reregister the instance again at any time. If you don't plan to use Run Command on the server, we suggest uninstalling SSM Agent first.
   */
  deregisterManagedInstance(callback?: (err: AWSError, data: SSM.Types.DeregisterManagedInstanceResult) => void): Request<SSM.Types.DeregisterManagedInstanceResult, AWSError>;
  /**
   * Removes a patch group from a patch baseline.
   */
  deregisterPatchBaselineForPatchGroup(params: SSM.Types.DeregisterPatchBaselineForPatchGroupRequest, callback?: (err: AWSError, data: SSM.Types.DeregisterPatchBaselineForPatchGroupResult) => void): Request<SSM.Types.DeregisterPatchBaselineForPatchGroupResult, AWSError>;
  /**
   * Removes a patch group from a patch baseline.
   */
  deregisterPatchBaselineForPatchGroup(callback?: (err: AWSError, data: SSM.Types.DeregisterPatchBaselineForPatchGroupResult) => void): Request<SSM.Types.DeregisterPatchBaselineForPatchGroupResult, AWSError>;
  /**
   * Removes a target from a Maintenance Window.
   */
  deregisterTargetFromMaintenanceWindow(params: SSM.Types.DeregisterTargetFromMaintenanceWindowRequest, callback?: (err: AWSError, data: SSM.Types.DeregisterTargetFromMaintenanceWindowResult) => void): Request<SSM.Types.DeregisterTargetFromMaintenanceWindowResult, AWSError>;
  /**
   * Removes a target from a Maintenance Window.
   */
  deregisterTargetFromMaintenanceWindow(callback?: (err: AWSError, data: SSM.Types.DeregisterTargetFromMaintenanceWindowResult) => void): Request<SSM.Types.DeregisterTargetFromMaintenanceWindowResult, AWSError>;
  /**
   * Removes a task from a Maintenance Window.
   */
  deregisterTaskFromMaintenanceWindow(params: SSM.Types.DeregisterTaskFromMaintenanceWindowRequest, callback?: (err: AWSError, data: SSM.Types.DeregisterTaskFromMaintenanceWindowResult) => void): Request<SSM.Types.DeregisterTaskFromMaintenanceWindowResult, AWSError>;
  /**
   * Removes a task from a Maintenance Window.
   */
  deregisterTaskFromMaintenanceWindow(callback?: (err: AWSError, data: SSM.Types.DeregisterTaskFromMaintenanceWindowResult) => void): Request<SSM.Types.DeregisterTaskFromMaintenanceWindowResult, AWSError>;
  /**
   * Details about the activation, including: the date and time the activation was created, the expiration date, the IAM role assigned to the instances in the activation, and the number of instances activated by this registration.
   */
  describeActivations(params: SSM.Types.DescribeActivationsRequest, callback?: (err: AWSError, data: SSM.Types.DescribeActivationsResult) => void): Request<SSM.Types.DescribeActivationsResult, AWSError>;
  /**
   * Details about the activation, including: the date and time the activation was created, the expiration date, the IAM role assigned to the instances in the activation, and the number of instances activated by this registration.
   */
  describeActivations(callback?: (err: AWSError, data: SSM.Types.DescribeActivationsResult) => void): Request<SSM.Types.DescribeActivationsResult, AWSError>;
  /**
   * Describes the association for the specified target or instance. If you created the association by using the Targets parameter, then you must retrieve the association by using the association ID. If you created the association by specifying an instance ID and a Systems Manager document, then you retrieve the association by specifying the document name and the instance ID. 
   */
  describeAssociation(params: SSM.Types.DescribeAssociationRequest, callback?: (err: AWSError, data: SSM.Types.DescribeAssociationResult) => void): Request<SSM.Types.DescribeAssociationResult, AWSError>;
  /**
   * Describes the association for the specified target or instance. If you created the association by using the Targets parameter, then you must retrieve the association by using the association ID. If you created the association by specifying an instance ID and a Systems Manager document, then you retrieve the association by specifying the document name and the instance ID. 
   */
  describeAssociation(callback?: (err: AWSError, data: SSM.Types.DescribeAssociationResult) => void): Request<SSM.Types.DescribeAssociationResult, AWSError>;
  /**
   * Use this API action to view information about a specific execution of a specific association.
   */
  describeAssociationExecutionTargets(params: SSM.Types.DescribeAssociationExecutionTargetsRequest, callback?: (err: AWSError, data: SSM.Types.DescribeAssociationExecutionTargetsResult) => void): Request<SSM.Types.DescribeAssociationExecutionTargetsResult, AWSError>;
  /**
   * Use this API action to view information about a specific execution of a specific association.
   */
  describeAssociationExecutionTargets(callback?: (err: AWSError, data: SSM.Types.DescribeAssociationExecutionTargetsResult) => void): Request<SSM.Types.DescribeAssociationExecutionTargetsResult, AWSError>;
  /**
   * Use this API action to view all executions for a specific association ID. 
   */
  describeAssociationExecutions(params: SSM.Types.DescribeAssociationExecutionsRequest, callback?: (err: AWSError, data: SSM.Types.DescribeAssociationExecutionsResult) => void): Request<SSM.Types.DescribeAssociationExecutionsResult, AWSError>;
  /**
   * Use this API action to view all executions for a specific association ID. 
   */
  describeAssociationExecutions(callback?: (err: AWSError, data: SSM.Types.DescribeAssociationExecutionsResult) => void): Request<SSM.Types.DescribeAssociationExecutionsResult, AWSError>;
  /**
   * Provides details about all active and terminated Automation executions.
   */
  describeAutomationExecutions(params: SSM.Types.DescribeAutomationExecutionsRequest, callback?: (err: AWSError, data: SSM.Types.DescribeAutomationExecutionsResult) => void): Request<SSM.Types.DescribeAutomationExecutionsResult, AWSError>;
  /**
   * Provides details about all active and terminated Automation executions.
   */
  describeAutomationExecutions(callback?: (err: AWSError, data: SSM.Types.DescribeAutomationExecutionsResult) => void): Request<SSM.Types.DescribeAutomationExecutionsResult, AWSError>;
  /**
   * Information about all active and terminated step executions in an Automation workflow.
   */
  describeAutomationStepExecutions(params: SSM.Types.DescribeAutomationStepExecutionsRequest, callback?: (err: AWSError, data: SSM.Types.DescribeAutomationStepExecutionsResult) => void): Request<SSM.Types.DescribeAutomationStepExecutionsResult, AWSError>;
  /**
   * Information about all active and terminated step executions in an Automation workflow.
   */
  describeAutomationStepExecutions(callback?: (err: AWSError, data: SSM.Types.DescribeAutomationStepExecutionsResult) => void): Request<SSM.Types.DescribeAutomationStepExecutionsResult, AWSError>;
  /**
   * Lists all patches that could possibly be included in a patch baseline.
   */
  describeAvailablePatches(params: SSM.Types.DescribeAvailablePatchesRequest, callback?: (err: AWSError, data: SSM.Types.DescribeAvailablePatchesResult) => void): Request<SSM.Types.DescribeAvailablePatchesResult, AWSError>;
  /**
   * Lists all patches that could possibly be included in a patch baseline.
   */
  describeAvailablePatches(callback?: (err: AWSError, data: SSM.Types.DescribeAvailablePatchesResult) => void): Request<SSM.Types.DescribeAvailablePatchesResult, AWSError>;
  /**
   * Describes the specified Systems Manager document.
   */
  describeDocument(params: SSM.Types.DescribeDocumentRequest, callback?: (err: AWSError, data: SSM.Types.DescribeDocumentResult) => void): Request<SSM.Types.DescribeDocumentResult, AWSError>;
  /**
   * Describes the specified Systems Manager document.
   */
  describeDocument(callback?: (err: AWSError, data: SSM.Types.DescribeDocumentResult) => void): Request<SSM.Types.DescribeDocumentResult, AWSError>;
  /**
   * Describes the permissions for a Systems Manager document. If you created the document, you are the owner. If a document is shared, it can either be shared privately (by specifying a user's AWS account ID) or publicly (All). 
   */
  describeDocumentPermission(params: SSM.Types.DescribeDocumentPermissionRequest, callback?: (err: AWSError, data: SSM.Types.DescribeDocumentPermissionResponse) => void): Request<SSM.Types.DescribeDocumentPermissionResponse, AWSError>;
  /**
   * Describes the permissions for a Systems Manager document. If you created the document, you are the owner. If a document is shared, it can either be shared privately (by specifying a user's AWS account ID) or publicly (All). 
   */
  describeDocumentPermission(callback?: (err: AWSError, data: SSM.Types.DescribeDocumentPermissionResponse) => void): Request<SSM.Types.DescribeDocumentPermissionResponse, AWSError>;
  /**
   * All associations for the instance(s).
   */
  describeEffectiveInstanceAssociations(params: SSM.Types.DescribeEffectiveInstanceAssociationsRequest, callback?: (err: AWSError, data: SSM.Types.DescribeEffectiveInstanceAssociationsResult) => void): Request<SSM.Types.DescribeEffectiveInstanceAssociationsResult, AWSError>;
  /**
   * All associations for the instance(s).
   */
  describeEffectiveInstanceAssociations(callback?: (err: AWSError, data: SSM.Types.DescribeEffectiveInstanceAssociationsResult) => void): Request<SSM.Types.DescribeEffectiveInstanceAssociationsResult, AWSError>;
  /**
   * Retrieves the current effective patches (the patch and the approval state) for the specified patch baseline. Note that this API applies only to Windows patch baselines.
   */
  describeEffectivePatchesForPatchBaseline(params: SSM.Types.DescribeEffectivePatchesForPatchBaselineRequest, callback?: (err: AWSError, data: SSM.Types.DescribeEffectivePatchesForPatchBaselineResult) => void): Request<SSM.Types.DescribeEffectivePatchesForPatchBaselineResult, AWSError>;
  /**
   * Retrieves the current effective patches (the patch and the approval state) for the specified patch baseline. Note that this API applies only to Windows patch baselines.
   */
  describeEffectivePatchesForPatchBaseline(callback?: (err: AWSError, data: SSM.Types.DescribeEffectivePatchesForPatchBaselineResult) => void): Request<SSM.Types.DescribeEffectivePatchesForPatchBaselineResult, AWSError>;
  /**
   * The status of the associations for the instance(s).
   */
  describeInstanceAssociationsStatus(params: SSM.Types.DescribeInstanceAssociationsStatusRequest, callback?: (err: AWSError, data: SSM.Types.DescribeInstanceAssociationsStatusResult) => void): Request<SSM.Types.DescribeInstanceAssociationsStatusResult, AWSError>;
  /**
   * The status of the associations for the instance(s).
   */
  describeInstanceAssociationsStatus(callback?: (err: AWSError, data: SSM.Types.DescribeInstanceAssociationsStatusResult) => void): Request<SSM.Types.DescribeInstanceAssociationsStatusResult, AWSError>;
  /**
   * Describes one or more of your instances. You can use this to get information about instances like the operating system platform, the SSM Agent version (Linux), status etc. If you specify one or more instance IDs, it returns information for those instances. If you do not specify instance IDs, it returns information for all your instances. If you specify an instance ID that is not valid or an instance that you do not own, you receive an error.   The IamRole field for this API action is the Amazon Identity and Access Management (IAM) role assigned to on-premises instances. This call does not return the IAM role for Amazon EC2 instances. 
   */
  describeInstanceInformation(params: SSM.Types.DescribeInstanceInformationRequest, callback?: (err: AWSError, data: SSM.Types.DescribeInstanceInformationResult) => void): Request<SSM.Types.DescribeInstanceInformationResult, AWSError>;
  /**
   * Describes one or more of your instances. You can use this to get information about instances like the operating system platform, the SSM Agent version (Linux), status etc. If you specify one or more instance IDs, it returns information for those instances. If you do not specify instance IDs, it returns information for all your instances. If you specify an instance ID that is not valid or an instance that you do not own, you receive an error.   The IamRole field for this API action is the Amazon Identity and Access Management (IAM) role assigned to on-premises instances. This call does not return the IAM role for Amazon EC2 instances. 
   */
  describeInstanceInformation(callback?: (err: AWSError, data: SSM.Types.DescribeInstanceInformationResult) => void): Request<SSM.Types.DescribeInstanceInformationResult, AWSError>;
  /**
   * Retrieves the high-level patch state of one or more instances.
   */
  describeInstancePatchStates(params: SSM.Types.DescribeInstancePatchStatesRequest, callback?: (err: AWSError, data: SSM.Types.DescribeInstancePatchStatesResult) => void): Request<SSM.Types.DescribeInstancePatchStatesResult, AWSError>;
  /**
   * Retrieves the high-level patch state of one or more instances.
   */
  describeInstancePatchStates(callback?: (err: AWSError, data: SSM.Types.DescribeInstancePatchStatesResult) => void): Request<SSM.Types.DescribeInstancePatchStatesResult, AWSError>;
  /**
   * Retrieves the high-level patch state for the instances in the specified patch group.
   */
  describeInstancePatchStatesForPatchGroup(params: SSM.Types.DescribeInstancePatchStatesForPatchGroupRequest, callback?: (err: AWSError, data: SSM.Types.DescribeInstancePatchStatesForPatchGroupResult) => void): Request<SSM.Types.DescribeInstancePatchStatesForPatchGroupResult, AWSError>;
  /**
   * Retrieves the high-level patch state for the instances in the specified patch group.
   */
  describeInstancePatchStatesForPatchGroup(callback?: (err: AWSError, data: SSM.Types.DescribeInstancePatchStatesForPatchGroupResult) => void): Request<SSM.Types.DescribeInstancePatchStatesForPatchGroupResult, AWSError>;
  /**
   * Retrieves information about the patches on the specified instance and their state relative to the patch baseline being used for the instance.
   */
  describeInstancePatches(params: SSM.Types.DescribeInstancePatchesRequest, callback?: (err: AWSError, data: SSM.Types.DescribeInstancePatchesResult) => void): Request<SSM.Types.DescribeInstancePatchesResult, AWSError>;
  /**
   * Retrieves information about the patches on the specified instance and their state relative to the patch baseline being used for the instance.
   */
  describeInstancePatches(callback?: (err: AWSError, data: SSM.Types.DescribeInstancePatchesResult) => void): Request<SSM.Types.DescribeInstancePatchesResult, AWSError>;
  /**
   * Describes a specific delete inventory operation.
   */
  describeInventoryDeletions(params: SSM.Types.DescribeInventoryDeletionsRequest, callback?: (err: AWSError, data: SSM.Types.DescribeInventoryDeletionsResult) => void): Request<SSM.Types.DescribeInventoryDeletionsResult, AWSError>;
  /**
   * Describes a specific delete inventory operation.
   */
  describeInventoryDeletions(callback?: (err: AWSError, data: SSM.Types.DescribeInventoryDeletionsResult) => void): Request<SSM.Types.DescribeInventoryDeletionsResult, AWSError>;
  /**
   * Retrieves the individual task executions (one per target) for a particular task executed as part of a Maintenance Window execution.
   */
  describeMaintenanceWindowExecutionTaskInvocations(params: SSM.Types.DescribeMaintenanceWindowExecutionTaskInvocationsRequest, callback?: (err: AWSError, data: SSM.Types.DescribeMaintenanceWindowExecutionTaskInvocationsResult) => void): Request<SSM.Types.DescribeMaintenanceWindowExecutionTaskInvocationsResult, AWSError>;
  /**
   * Retrieves the individual task executions (one per target) for a particular task executed as part of a Maintenance Window execution.
   */
  describeMaintenanceWindowExecutionTaskInvocations(callback?: (err: AWSError, data: SSM.Types.DescribeMaintenanceWindowExecutionTaskInvocationsResult) => void): Request<SSM.Types.DescribeMaintenanceWindowExecutionTaskInvocationsResult, AWSError>;
  /**
   * For a given Maintenance Window execution, lists the tasks that were executed.
   */
  describeMaintenanceWindowExecutionTasks(params: SSM.Types.DescribeMaintenanceWindowExecutionTasksRequest, callback?: (err: AWSError, data: SSM.Types.DescribeMaintenanceWindowExecutionTasksResult) => void): Request<SSM.Types.DescribeMaintenanceWindowExecutionTasksResult, AWSError>;
  /**
   * For a given Maintenance Window execution, lists the tasks that were executed.
   */
  describeMaintenanceWindowExecutionTasks(callback?: (err: AWSError, data: SSM.Types.DescribeMaintenanceWindowExecutionTasksResult) => void): Request<SSM.Types.DescribeMaintenanceWindowExecutionTasksResult, AWSError>;
  /**
   * Lists the executions of a Maintenance Window. This includes information about when the Maintenance Window was scheduled to be active, and information about tasks registered and run with the Maintenance Window.
   */
  describeMaintenanceWindowExecutions(params: SSM.Types.DescribeMaintenanceWindowExecutionsRequest, callback?: (err: AWSError, data: SSM.Types.DescribeMaintenanceWindowExecutionsResult) => void): Request<SSM.Types.DescribeMaintenanceWindowExecutionsResult, AWSError>;
  /**
   * Lists the executions of a Maintenance Window. This includes information about when the Maintenance Window was scheduled to be active, and information about tasks registered and run with the Maintenance Window.
   */
  describeMaintenanceWindowExecutions(callback?: (err: AWSError, data: SSM.Types.DescribeMaintenanceWindowExecutionsResult) => void): Request<SSM.Types.DescribeMaintenanceWindowExecutionsResult, AWSError>;
  /**
   * Retrieves information about upcoming executions of a Maintenance Window.
   */
  describeMaintenanceWindowSchedule(params: SSM.Types.DescribeMaintenanceWindowScheduleRequest, callback?: (err: AWSError, data: SSM.Types.DescribeMaintenanceWindowScheduleResult) => void): Request<SSM.Types.DescribeMaintenanceWindowScheduleResult, AWSError>;
  /**
   * Retrieves information about upcoming executions of a Maintenance Window.
   */
  describeMaintenanceWindowSchedule(callback?: (err: AWSError, data: SSM.Types.DescribeMaintenanceWindowScheduleResult) => void): Request<SSM.Types.DescribeMaintenanceWindowScheduleResult, AWSError>;
  /**
   * Lists the targets registered with the Maintenance Window.
   */
  describeMaintenanceWindowTargets(params: SSM.Types.DescribeMaintenanceWindowTargetsRequest, callback?: (err: AWSError, data: SSM.Types.DescribeMaintenanceWindowTargetsResult) => void): Request<SSM.Types.DescribeMaintenanceWindowTargetsResult, AWSError>;
  /**
   * Lists the targets registered with the Maintenance Window.
   */
  describeMaintenanceWindowTargets(callback?: (err: AWSError, data: SSM.Types.DescribeMaintenanceWindowTargetsResult) => void): Request<SSM.Types.DescribeMaintenanceWindowTargetsResult, AWSError>;
  /**
   * Lists the tasks in a Maintenance Window.
   */
  describeMaintenanceWindowTasks(params: SSM.Types.DescribeMaintenanceWindowTasksRequest, callback?: (err: AWSError, data: SSM.Types.DescribeMaintenanceWindowTasksResult) => void): Request<SSM.Types.DescribeMaintenanceWindowTasksResult, AWSError>;
  /**
   * Lists the tasks in a Maintenance Window.
   */
  describeMaintenanceWindowTasks(callback?: (err: AWSError, data: SSM.Types.DescribeMaintenanceWindowTasksResult) => void): Request<SSM.Types.DescribeMaintenanceWindowTasksResult, AWSError>;
  /**
   * Retrieves the Maintenance Windows in an AWS account.
   */
  describeMaintenanceWindows(params: SSM.Types.DescribeMaintenanceWindowsRequest, callback?: (err: AWSError, data: SSM.Types.DescribeMaintenanceWindowsResult) => void): Request<SSM.Types.DescribeMaintenanceWindowsResult, AWSError>;
  /**
   * Retrieves the Maintenance Windows in an AWS account.
   */
  describeMaintenanceWindows(callback?: (err: AWSError, data: SSM.Types.DescribeMaintenanceWindowsResult) => void): Request<SSM.Types.DescribeMaintenanceWindowsResult, AWSError>;
  /**
   * Retrieves information about the Maintenance Windows targets or tasks that an instance is associated with.
   */
  describeMaintenanceWindowsForTarget(params: SSM.Types.DescribeMaintenanceWindowsForTargetRequest, callback?: (err: AWSError, data: SSM.Types.DescribeMaintenanceWindowsForTargetResult) => void): Request<SSM.Types.DescribeMaintenanceWindowsForTargetResult, AWSError>;
  /**
   * Retrieves information about the Maintenance Windows targets or tasks that an instance is associated with.
   */
  describeMaintenanceWindowsForTarget(callback?: (err: AWSError, data: SSM.Types.DescribeMaintenanceWindowsForTargetResult) => void): Request<SSM.Types.DescribeMaintenanceWindowsForTargetResult, AWSError>;
  /**
   * Get information about a parameter. Request results are returned on a best-effort basis. If you specify MaxResults in the request, the response includes information up to the limit specified. The number of items returned, however, can be between zero and the value of MaxResults. If the service reaches an internal limit while processing the results, it stops the operation and returns the matching values up to that point and a NextToken. You can specify the NextToken in a subsequent call to get the next set of results.
   */
  describeParameters(params: SSM.Types.DescribeParametersRequest, callback?: (err: AWSError, data: SSM.Types.DescribeParametersResult) => void): Request<SSM.Types.DescribeParametersResult, AWSError>;
  /**
   * Get information about a parameter. Request results are returned on a best-effort basis. If you specify MaxResults in the request, the response includes information up to the limit specified. The number of items returned, however, can be between zero and the value of MaxResults. If the service reaches an internal limit while processing the results, it stops the operation and returns the matching values up to that point and a NextToken. You can specify the NextToken in a subsequent call to get the next set of results.
   */
  describeParameters(callback?: (err: AWSError, data: SSM.Types.DescribeParametersResult) => void): Request<SSM.Types.DescribeParametersResult, AWSError>;
  /**
   * Lists the patch baselines in your AWS account.
   */
  describePatchBaselines(params: SSM.Types.DescribePatchBaselinesRequest, callback?: (err: AWSError, data: SSM.Types.DescribePatchBaselinesResult) => void): Request<SSM.Types.DescribePatchBaselinesResult, AWSError>;
  /**
   * Lists the patch baselines in your AWS account.
   */
  describePatchBaselines(callback?: (err: AWSError, data: SSM.Types.DescribePatchBaselinesResult) => void): Request<SSM.Types.DescribePatchBaselinesResult, AWSError>;
  /**
   * Returns high-level aggregated patch compliance state for a patch group.
   */
  describePatchGroupState(params: SSM.Types.DescribePatchGroupStateRequest, callback?: (err: AWSError, data: SSM.Types.DescribePatchGroupStateResult) => void): Request<SSM.Types.DescribePatchGroupStateResult, AWSError>;
  /**
   * Returns high-level aggregated patch compliance state for a patch group.
   */
  describePatchGroupState(callback?: (err: AWSError, data: SSM.Types.DescribePatchGroupStateResult) => void): Request<SSM.Types.DescribePatchGroupStateResult, AWSError>;
  /**
   * Lists all patch groups that have been registered with patch baselines.
   */
  describePatchGroups(params: SSM.Types.DescribePatchGroupsRequest, callback?: (err: AWSError, data: SSM.Types.DescribePatchGroupsResult) => void): Request<SSM.Types.DescribePatchGroupsResult, AWSError>;
  /**
   * Lists all patch groups that have been registered with patch baselines.
   */
  describePatchGroups(callback?: (err: AWSError, data: SSM.Types.DescribePatchGroupsResult) => void): Request<SSM.Types.DescribePatchGroupsResult, AWSError>;
  /**
   * Retrieves a list of all active sessions (both connected and disconnected) or terminated sessions from the past 30 days.
   */
  describeSessions(params: SSM.Types.DescribeSessionsRequest, callback?: (err: AWSError, data: SSM.Types.DescribeSessionsResponse) => void): Request<SSM.Types.DescribeSessionsResponse, AWSError>;
  /**
   * Retrieves a list of all active sessions (both connected and disconnected) or terminated sessions from the past 30 days.
   */
  describeSessions(callback?: (err: AWSError, data: SSM.Types.DescribeSessionsResponse) => void): Request<SSM.Types.DescribeSessionsResponse, AWSError>;
  /**
   * Get detailed information about a particular Automation execution.
   */
  getAutomationExecution(params: SSM.Types.GetAutomationExecutionRequest, callback?: (err: AWSError, data: SSM.Types.GetAutomationExecutionResult) => void): Request<SSM.Types.GetAutomationExecutionResult, AWSError>;
  /**
   * Get detailed information about a particular Automation execution.
   */
  getAutomationExecution(callback?: (err: AWSError, data: SSM.Types.GetAutomationExecutionResult) => void): Request<SSM.Types.GetAutomationExecutionResult, AWSError>;
  /**
   * Returns detailed information about command execution for an invocation or plugin. 
   */
  getCommandInvocation(params: SSM.Types.GetCommandInvocationRequest, callback?: (err: AWSError, data: SSM.Types.GetCommandInvocationResult) => void): Request<SSM.Types.GetCommandInvocationResult, AWSError>;
  /**
   * Returns detailed information about command execution for an invocation or plugin. 
   */
  getCommandInvocation(callback?: (err: AWSError, data: SSM.Types.GetCommandInvocationResult) => void): Request<SSM.Types.GetCommandInvocationResult, AWSError>;
  /**
   * Retrieves the Session Manager connection status for an instance to determine whether it is connected and ready to receive Session Manager connections.
   */
  getConnectionStatus(params: SSM.Types.GetConnectionStatusRequest, callback?: (err: AWSError, data: SSM.Types.GetConnectionStatusResponse) => void): Request<SSM.Types.GetConnectionStatusResponse, AWSError>;
  /**
   * Retrieves the Session Manager connection status for an instance to determine whether it is connected and ready to receive Session Manager connections.
   */
  getConnectionStatus(callback?: (err: AWSError, data: SSM.Types.GetConnectionStatusResponse) => void): Request<SSM.Types.GetConnectionStatusResponse, AWSError>;
  /**
   * Retrieves the default patch baseline. Note that Systems Manager supports creating multiple default patch baselines. For example, you can create a default patch baseline for each operating system. If you do not specify an operating system value, the default patch baseline for Windows is returned.
   */
  getDefaultPatchBaseline(params: SSM.Types.GetDefaultPatchBaselineRequest, callback?: (err: AWSError, data: SSM.Types.GetDefaultPatchBaselineResult) => void): Request<SSM.Types.GetDefaultPatchBaselineResult, AWSError>;
  /**
   * Retrieves the default patch baseline. Note that Systems Manager supports creating multiple default patch baselines. For example, you can create a default patch baseline for each operating system. If you do not specify an operating system value, the default patch baseline for Windows is returned.
   */
  getDefaultPatchBaseline(callback?: (err: AWSError, data: SSM.Types.GetDefaultPatchBaselineResult) => void): Request<SSM.Types.GetDefaultPatchBaselineResult, AWSError>;
  /**
   * Retrieves the current snapshot for the patch baseline the instance uses. This API is primarily used by the AWS-RunPatchBaseline Systems Manager document. 
   */
  getDeployablePatchSnapshotForInstance(params: SSM.Types.GetDeployablePatchSnapshotForInstanceRequest, callback?: (err: AWSError, data: SSM.Types.GetDeployablePatchSnapshotForInstanceResult) => void): Request<SSM.Types.GetDeployablePatchSnapshotForInstanceResult, AWSError>;
  /**
   * Retrieves the current snapshot for the patch baseline the instance uses. This API is primarily used by the AWS-RunPatchBaseline Systems Manager document. 
   */
  getDeployablePatchSnapshotForInstance(callback?: (err: AWSError, data: SSM.Types.GetDeployablePatchSnapshotForInstanceResult) => void): Request<SSM.Types.GetDeployablePatchSnapshotForInstanceResult, AWSError>;
  /**
   * Gets the contents of the specified Systems Manager document.
   */
  getDocument(params: SSM.Types.GetDocumentRequest, callback?: (err: AWSError, data: SSM.Types.GetDocumentResult) => void): Request<SSM.Types.GetDocumentResult, AWSError>;
  /**
   * Gets the contents of the specified Systems Manager document.
   */
  getDocument(callback?: (err: AWSError, data: SSM.Types.GetDocumentResult) => void): Request<SSM.Types.GetDocumentResult, AWSError>;
  /**
   * Query inventory information.
   */
  getInventory(params: SSM.Types.GetInventoryRequest, callback?: (err: AWSError, data: SSM.Types.GetInventoryResult) => void): Request<SSM.Types.GetInventoryResult, AWSError>;
  /**
   * Query inventory information.
   */
  getInventory(callback?: (err: AWSError, data: SSM.Types.GetInventoryResult) => void): Request<SSM.Types.GetInventoryResult, AWSError>;
  /**
   * Return a list of inventory type names for the account, or return a list of attribute names for a specific Inventory item type. 
   */
  getInventorySchema(params: SSM.Types.GetInventorySchemaRequest, callback?: (err: AWSError, data: SSM.Types.GetInventorySchemaResult) => void): Request<SSM.Types.GetInventorySchemaResult, AWSError>;
  /**
   * Return a list of inventory type names for the account, or return a list of attribute names for a specific Inventory item type. 
   */
  getInventorySchema(callback?: (err: AWSError, data: SSM.Types.GetInventorySchemaResult) => void): Request<SSM.Types.GetInventorySchemaResult, AWSError>;
  /**
   * Retrieves a Maintenance Window.
   */
  getMaintenanceWindow(params: SSM.Types.GetMaintenanceWindowRequest, callback?: (err: AWSError, data: SSM.Types.GetMaintenanceWindowResult) => void): Request<SSM.Types.GetMaintenanceWindowResult, AWSError>;
  /**
   * Retrieves a Maintenance Window.
   */
  getMaintenanceWindow(callback?: (err: AWSError, data: SSM.Types.GetMaintenanceWindowResult) => void): Request<SSM.Types.GetMaintenanceWindowResult, AWSError>;
  /**
   * Retrieves details about a specific task executed as part of a Maintenance Window execution.
   */
  getMaintenanceWindowExecution(params: SSM.Types.GetMaintenanceWindowExecutionRequest, callback?: (err: AWSError, data: SSM.Types.GetMaintenanceWindowExecutionResult) => void): Request<SSM.Types.GetMaintenanceWindowExecutionResult, AWSError>;
  /**
   * Retrieves details about a specific task executed as part of a Maintenance Window execution.
   */
  getMaintenanceWindowExecution(callback?: (err: AWSError, data: SSM.Types.GetMaintenanceWindowExecutionResult) => void): Request<SSM.Types.GetMaintenanceWindowExecutionResult, AWSError>;
  /**
   * Retrieves the details about a specific task executed as part of a Maintenance Window execution.
   */
  getMaintenanceWindowExecutionTask(params: SSM.Types.GetMaintenanceWindowExecutionTaskRequest, callback?: (err: AWSError, data: SSM.Types.GetMaintenanceWindowExecutionTaskResult) => void): Request<SSM.Types.GetMaintenanceWindowExecutionTaskResult, AWSError>;
  /**
   * Retrieves the details about a specific task executed as part of a Maintenance Window execution.
   */
  getMaintenanceWindowExecutionTask(callback?: (err: AWSError, data: SSM.Types.GetMaintenanceWindowExecutionTaskResult) => void): Request<SSM.Types.GetMaintenanceWindowExecutionTaskResult, AWSError>;
  /**
   * Retrieves a task invocation. A task invocation is a specific task executing on a specific target. Maintenance Windows report status for all invocations. 
   */
  getMaintenanceWindowExecutionTaskInvocation(params: SSM.Types.GetMaintenanceWindowExecutionTaskInvocationRequest, callback?: (err: AWSError, data: SSM.Types.GetMaintenanceWindowExecutionTaskInvocationResult) => void): Request<SSM.Types.GetMaintenanceWindowExecutionTaskInvocationResult, AWSError>;
  /**
   * Retrieves a task invocation. A task invocation is a specific task executing on a specific target. Maintenance Windows report status for all invocations. 
   */
  getMaintenanceWindowExecutionTaskInvocation(callback?: (err: AWSError, data: SSM.Types.GetMaintenanceWindowExecutionTaskInvocationResult) => void): Request<SSM.Types.GetMaintenanceWindowExecutionTaskInvocationResult, AWSError>;
  /**
   * Lists the tasks in a Maintenance Window.
   */
  getMaintenanceWindowTask(params: SSM.Types.GetMaintenanceWindowTaskRequest, callback?: (err: AWSError, data: SSM.Types.GetMaintenanceWindowTaskResult) => void): Request<SSM.Types.GetMaintenanceWindowTaskResult, AWSError>;
  /**
   * Lists the tasks in a Maintenance Window.
   */
  getMaintenanceWindowTask(callback?: (err: AWSError, data: SSM.Types.GetMaintenanceWindowTaskResult) => void): Request<SSM.Types.GetMaintenanceWindowTaskResult, AWSError>;
  /**
   * Get information about a parameter by using the parameter name. Don't confuse this API action with the GetParameters API action.
   */
  getParameter(params: SSM.Types.GetParameterRequest, callback?: (err: AWSError, data: SSM.Types.GetParameterResult) => void): Request<SSM.Types.GetParameterResult, AWSError>;
  /**
   * Get information about a parameter by using the parameter name. Don't confuse this API action with the GetParameters API action.
   */
  getParameter(callback?: (err: AWSError, data: SSM.Types.GetParameterResult) => void): Request<SSM.Types.GetParameterResult, AWSError>;
  /**
   * Query a list of all parameters used by the AWS account.
   */
  getParameterHistory(params: SSM.Types.GetParameterHistoryRequest, callback?: (err: AWSError, data: SSM.Types.GetParameterHistoryResult) => void): Request<SSM.Types.GetParameterHistoryResult, AWSError>;
  /**
   * Query a list of all parameters used by the AWS account.
   */
  getParameterHistory(callback?: (err: AWSError, data: SSM.Types.GetParameterHistoryResult) => void): Request<SSM.Types.GetParameterHistoryResult, AWSError>;
  /**
   * Get details of a parameter. Don't confuse this API action with the GetParameter API action.
   */
  getParameters(params: SSM.Types.GetParametersRequest, callback?: (err: AWSError, data: SSM.Types.GetParametersResult) => void): Request<SSM.Types.GetParametersResult, AWSError>;
  /**
   * Get details of a parameter. Don't confuse this API action with the GetParameter API action.
   */
  getParameters(callback?: (err: AWSError, data: SSM.Types.GetParametersResult) => void): Request<SSM.Types.GetParametersResult, AWSError>;
  /**
   * Retrieve parameters in a specific hierarchy. For more information, see Working with Systems Manager Parameters in the AWS Systems Manager User Guide.  Request results are returned on a best-effort basis. If you specify MaxResults in the request, the response includes information up to the limit specified. The number of items returned, however, can be between zero and the value of MaxResults. If the service reaches an internal limit while processing the results, it stops the operation and returns the matching values up to that point and a NextToken. You can specify the NextToken in a subsequent call to get the next set of results.  This API action doesn't support filtering by tags.  
   */
  getParametersByPath(params: SSM.Types.GetParametersByPathRequest, callback?: (err: AWSError, data: SSM.Types.GetParametersByPathResult) => void): Request<SSM.Types.GetParametersByPathResult, AWSError>;
  /**
   * Retrieve parameters in a specific hierarchy. For more information, see Working with Systems Manager Parameters in the AWS Systems Manager User Guide.  Request results are returned on a best-effort basis. If you specify MaxResults in the request, the response includes information up to the limit specified. The number of items returned, however, can be between zero and the value of MaxResults. If the service reaches an internal limit while processing the results, it stops the operation and returns the matching values up to that point and a NextToken. You can specify the NextToken in a subsequent call to get the next set of results.  This API action doesn't support filtering by tags.  
   */
  getParametersByPath(callback?: (err: AWSError, data: SSM.Types.GetParametersByPathResult) => void): Request<SSM.Types.GetParametersByPathResult, AWSError>;
  /**
   * Retrieves information about a patch baseline.
   */
  getPatchBaseline(params: SSM.Types.GetPatchBaselineRequest, callback?: (err: AWSError, data: SSM.Types.GetPatchBaselineResult) => void): Request<SSM.Types.GetPatchBaselineResult, AWSError>;
  /**
   * Retrieves information about a patch baseline.
   */
  getPatchBaseline(callback?: (err: AWSError, data: SSM.Types.GetPatchBaselineResult) => void): Request<SSM.Types.GetPatchBaselineResult, AWSError>;
  /**
   * Retrieves the patch baseline that should be used for the specified patch group.
   */
  getPatchBaselineForPatchGroup(params: SSM.Types.GetPatchBaselineForPatchGroupRequest, callback?: (err: AWSError, data: SSM.Types.GetPatchBaselineForPatchGroupResult) => void): Request<SSM.Types.GetPatchBaselineForPatchGroupResult, AWSError>;
  /**
   * Retrieves the patch baseline that should be used for the specified patch group.
   */
  getPatchBaselineForPatchGroup(callback?: (err: AWSError, data: SSM.Types.GetPatchBaselineForPatchGroupResult) => void): Request<SSM.Types.GetPatchBaselineForPatchGroupResult, AWSError>;
  /**
   * A parameter label is a user-defined alias to help you manage different versions of a parameter. When you modify a parameter, Systems Manager automatically saves a new version and increments the version number by one. A label can help you remember the purpose of a parameter when there are multiple versions.  Parameter labels have the following requirements and restrictions.   A version of a parameter can have a maximum of 10 labels.   You can't attach the same label to different versions of the same parameter. For example, if version 1 has the label Production, then you can't attach Production to version 2.   You can move a label from one version of a parameter to another.   You can't create a label when you create a new parameter. You must attach a label to a specific version of a parameter.   You can't delete a parameter label. If you no longer want to use a parameter label, then you must move it to a different version of a parameter.   A label can have a maximum of 100 characters.   Labels can contain letters (case sensitive), numbers, periods (.), hyphens (-), or underscores (_).   Labels can't begin with a number, "aws," or "ssm" (not case sensitive). If a label fails to meet these requirements, then the label is not associated with a parameter and the system displays it in the list of InvalidLabels.  
   */
  labelParameterVersion(params: SSM.Types.LabelParameterVersionRequest, callback?: (err: AWSError, data: SSM.Types.LabelParameterVersionResult) => void): Request<SSM.Types.LabelParameterVersionResult, AWSError>;
  /**
   * A parameter label is a user-defined alias to help you manage different versions of a parameter. When you modify a parameter, Systems Manager automatically saves a new version and increments the version number by one. A label can help you remember the purpose of a parameter when there are multiple versions.  Parameter labels have the following requirements and restrictions.   A version of a parameter can have a maximum of 10 labels.   You can't attach the same label to different versions of the same parameter. For example, if version 1 has the label Production, then you can't attach Production to version 2.   You can move a label from one version of a parameter to another.   You can't create a label when you create a new parameter. You must attach a label to a specific version of a parameter.   You can't delete a parameter label. If you no longer want to use a parameter label, then you must move it to a different version of a parameter.   A label can have a maximum of 100 characters.   Labels can contain letters (case sensitive), numbers, periods (.), hyphens (-), or underscores (_).   Labels can't begin with a number, "aws," or "ssm" (not case sensitive). If a label fails to meet these requirements, then the label is not associated with a parameter and the system displays it in the list of InvalidLabels.  
   */
  labelParameterVersion(callback?: (err: AWSError, data: SSM.Types.LabelParameterVersionResult) => void): Request<SSM.Types.LabelParameterVersionResult, AWSError>;
  /**
   * Retrieves all versions of an association for a specific association ID.
   */
  listAssociationVersions(params: SSM.Types.ListAssociationVersionsRequest, callback?: (err: AWSError, data: SSM.Types.ListAssociationVersionsResult) => void): Request<SSM.Types.ListAssociationVersionsResult, AWSError>;
  /**
   * Retrieves all versions of an association for a specific association ID.
   */
  listAssociationVersions(callback?: (err: AWSError, data: SSM.Types.ListAssociationVersionsResult) => void): Request<SSM.Types.ListAssociationVersionsResult, AWSError>;
  /**
   * Lists the associations for the specified Systems Manager document or instance.
   */
  listAssociations(params: SSM.Types.ListAssociationsRequest, callback?: (err: AWSError, data: SSM.Types.ListAssociationsResult) => void): Request<SSM.Types.ListAssociationsResult, AWSError>;
  /**
   * Lists the associations for the specified Systems Manager document or instance.
   */
  listAssociations(callback?: (err: AWSError, data: SSM.Types.ListAssociationsResult) => void): Request<SSM.Types.ListAssociationsResult, AWSError>;
  /**
   * An invocation is copy of a command sent to a specific instance. A command can apply to one or more instances. A command invocation applies to one instance. For example, if a user executes SendCommand against three instances, then a command invocation is created for each requested instance ID. ListCommandInvocations provide status about command execution.
   */
  listCommandInvocations(params: SSM.Types.ListCommandInvocationsRequest, callback?: (err: AWSError, data: SSM.Types.ListCommandInvocationsResult) => void): Request<SSM.Types.ListCommandInvocationsResult, AWSError>;
  /**
   * An invocation is copy of a command sent to a specific instance. A command can apply to one or more instances. A command invocation applies to one instance. For example, if a user executes SendCommand against three instances, then a command invocation is created for each requested instance ID. ListCommandInvocations provide status about command execution.
   */
  listCommandInvocations(callback?: (err: AWSError, data: SSM.Types.ListCommandInvocationsResult) => void): Request<SSM.Types.ListCommandInvocationsResult, AWSError>;
  /**
   * Lists the commands requested by users of the AWS account.
   */
  listCommands(params: SSM.Types.ListCommandsRequest, callback?: (err: AWSError, data: SSM.Types.ListCommandsResult) => void): Request<SSM.Types.ListCommandsResult, AWSError>;
  /**
   * Lists the commands requested by users of the AWS account.
   */
  listCommands(callback?: (err: AWSError, data: SSM.Types.ListCommandsResult) => void): Request<SSM.Types.ListCommandsResult, AWSError>;
  /**
   * For a specified resource ID, this API action returns a list of compliance statuses for different resource types. Currently, you can only specify one resource ID per call. List results depend on the criteria specified in the filter. 
   */
  listComplianceItems(params: SSM.Types.ListComplianceItemsRequest, callback?: (err: AWSError, data: SSM.Types.ListComplianceItemsResult) => void): Request<SSM.Types.ListComplianceItemsResult, AWSError>;
  /**
   * For a specified resource ID, this API action returns a list of compliance statuses for different resource types. Currently, you can only specify one resource ID per call. List results depend on the criteria specified in the filter. 
   */
  listComplianceItems(callback?: (err: AWSError, data: SSM.Types.ListComplianceItemsResult) => void): Request<SSM.Types.ListComplianceItemsResult, AWSError>;
  /**
   * Returns a summary count of compliant and non-compliant resources for a compliance type. For example, this call can return State Manager associations, patches, or custom compliance types according to the filter criteria that you specify. 
   */
  listComplianceSummaries(params: SSM.Types.ListComplianceSummariesRequest, callback?: (err: AWSError, data: SSM.Types.ListComplianceSummariesResult) => void): Request<SSM.Types.ListComplianceSummariesResult, AWSError>;
  /**
   * Returns a summary count of compliant and non-compliant resources for a compliance type. For example, this call can return State Manager associations, patches, or custom compliance types according to the filter criteria that you specify. 
   */
  listComplianceSummaries(callback?: (err: AWSError, data: SSM.Types.ListComplianceSummariesResult) => void): Request<SSM.Types.ListComplianceSummariesResult, AWSError>;
  /**
   * List all versions for a document.
   */
  listDocumentVersions(params: SSM.Types.ListDocumentVersionsRequest, callback?: (err: AWSError, data: SSM.Types.ListDocumentVersionsResult) => void): Request<SSM.Types.ListDocumentVersionsResult, AWSError>;
  /**
   * List all versions for a document.
   */
  listDocumentVersions(callback?: (err: AWSError, data: SSM.Types.ListDocumentVersionsResult) => void): Request<SSM.Types.ListDocumentVersionsResult, AWSError>;
  /**
   * Describes one or more of your Systems Manager documents.
   */
  listDocuments(params: SSM.Types.ListDocumentsRequest, callback?: (err: AWSError, data: SSM.Types.ListDocumentsResult) => void): Request<SSM.Types.ListDocumentsResult, AWSError>;
  /**
   * Describes one or more of your Systems Manager documents.
   */
  listDocuments(callback?: (err: AWSError, data: SSM.Types.ListDocumentsResult) => void): Request<SSM.Types.ListDocumentsResult, AWSError>;
  /**
   * A list of inventory items returned by the request.
   */
  listInventoryEntries(params: SSM.Types.ListInventoryEntriesRequest, callback?: (err: AWSError, data: SSM.Types.ListInventoryEntriesResult) => void): Request<SSM.Types.ListInventoryEntriesResult, AWSError>;
  /**
   * A list of inventory items returned by the request.
   */
  listInventoryEntries(callback?: (err: AWSError, data: SSM.Types.ListInventoryEntriesResult) => void): Request<SSM.Types.ListInventoryEntriesResult, AWSError>;
  /**
   * Returns a resource-level summary count. The summary includes information about compliant and non-compliant statuses and detailed compliance-item severity counts, according to the filter criteria you specify.
   */
  listResourceComplianceSummaries(params: SSM.Types.ListResourceComplianceSummariesRequest, callback?: (err: AWSError, data: SSM.Types.ListResourceComplianceSummariesResult) => void): Request<SSM.Types.ListResourceComplianceSummariesResult, AWSError>;
  /**
   * Returns a resource-level summary count. The summary includes information about compliant and non-compliant statuses and detailed compliance-item severity counts, according to the filter criteria you specify.
   */
  listResourceComplianceSummaries(callback?: (err: AWSError, data: SSM.Types.ListResourceComplianceSummariesResult) => void): Request<SSM.Types.ListResourceComplianceSummariesResult, AWSError>;
  /**
   * Lists your resource data sync configurations. Includes information about the last time a sync attempted to start, the last sync status, and the last time a sync successfully completed. The number of sync configurations might be too large to return using a single call to ListResourceDataSync. You can limit the number of sync configurations returned by using the MaxResults parameter. To determine whether there are more sync configurations to list, check the value of NextToken in the output. If there are more sync configurations to list, you can request them by specifying the NextToken returned in the call to the parameter of a subsequent call. 
   */
  listResourceDataSync(params: SSM.Types.ListResourceDataSyncRequest, callback?: (err: AWSError, data: SSM.Types.ListResourceDataSyncResult) => void): Request<SSM.Types.ListResourceDataSyncResult, AWSError>;
  /**
   * Lists your resource data sync configurations. Includes information about the last time a sync attempted to start, the last sync status, and the last time a sync successfully completed. The number of sync configurations might be too large to return using a single call to ListResourceDataSync. You can limit the number of sync configurations returned by using the MaxResults parameter. To determine whether there are more sync configurations to list, check the value of NextToken in the output. If there are more sync configurations to list, you can request them by specifying the NextToken returned in the call to the parameter of a subsequent call. 
   */
  listResourceDataSync(callback?: (err: AWSError, data: SSM.Types.ListResourceDataSyncResult) => void): Request<SSM.Types.ListResourceDataSyncResult, AWSError>;
  /**
   * Returns a list of the tags assigned to the specified resource.
   */
  listTagsForResource(params: SSM.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: SSM.Types.ListTagsForResourceResult) => void): Request<SSM.Types.ListTagsForResourceResult, AWSError>;
  /**
   * Returns a list of the tags assigned to the specified resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: SSM.Types.ListTagsForResourceResult) => void): Request<SSM.Types.ListTagsForResourceResult, AWSError>;
  /**
   * Shares a Systems Manager document publicly or privately. If you share a document privately, you must specify the AWS user account IDs for those people who can use the document. If you share a document publicly, you must specify All as the account ID.
   */
  modifyDocumentPermission(params: SSM.Types.ModifyDocumentPermissionRequest, callback?: (err: AWSError, data: SSM.Types.ModifyDocumentPermissionResponse) => void): Request<SSM.Types.ModifyDocumentPermissionResponse, AWSError>;
  /**
   * Shares a Systems Manager document publicly or privately. If you share a document privately, you must specify the AWS user account IDs for those people who can use the document. If you share a document publicly, you must specify All as the account ID.
   */
  modifyDocumentPermission(callback?: (err: AWSError, data: SSM.Types.ModifyDocumentPermissionResponse) => void): Request<SSM.Types.ModifyDocumentPermissionResponse, AWSError>;
  /**
   * Registers a compliance type and other compliance details on a designated resource. This action lets you register custom compliance details with a resource. This call overwrites existing compliance information on the resource, so you must provide a full list of compliance items each time that you send the request. ComplianceType can be one of the following:   ExecutionId: The execution ID when the patch, association, or custom compliance item was applied.   ExecutionType: Specify patch, association, or Custom:string.   ExecutionTime. The time the patch, association, or custom compliance item was applied to the instance.   Id: The patch, association, or custom compliance ID.   Title: A title.   Status: The status of the compliance item. For example, approved for patches, or Failed for associations.   Severity: A patch severity. For example, critical.   DocumentName: A SSM document name. For example, AWS-RunPatchBaseline.   DocumentVersion: An SSM document version number. For example, 4.   Classification: A patch classification. For example, security updates.   PatchBaselineId: A patch baseline ID.   PatchSeverity: A patch severity. For example, Critical.   PatchState: A patch state. For example, InstancesWithFailedPatches.   PatchGroup: The name of a patch group.   InstalledTime: The time the association, patch, or custom compliance item was applied to the resource. Specify the time by using the following format: yyyy-MM-dd'T'HH:mm:ss'Z'  
   */
  putComplianceItems(params: SSM.Types.PutComplianceItemsRequest, callback?: (err: AWSError, data: SSM.Types.PutComplianceItemsResult) => void): Request<SSM.Types.PutComplianceItemsResult, AWSError>;
  /**
   * Registers a compliance type and other compliance details on a designated resource. This action lets you register custom compliance details with a resource. This call overwrites existing compliance information on the resource, so you must provide a full list of compliance items each time that you send the request. ComplianceType can be one of the following:   ExecutionId: The execution ID when the patch, association, or custom compliance item was applied.   ExecutionType: Specify patch, association, or Custom:string.   ExecutionTime. The time the patch, association, or custom compliance item was applied to the instance.   Id: The patch, association, or custom compliance ID.   Title: A title.   Status: The status of the compliance item. For example, approved for patches, or Failed for associations.   Severity: A patch severity. For example, critical.   DocumentName: A SSM document name. For example, AWS-RunPatchBaseline.   DocumentVersion: An SSM document version number. For example, 4.   Classification: A patch classification. For example, security updates.   PatchBaselineId: A patch baseline ID.   PatchSeverity: A patch severity. For example, Critical.   PatchState: A patch state. For example, InstancesWithFailedPatches.   PatchGroup: The name of a patch group.   InstalledTime: The time the association, patch, or custom compliance item was applied to the resource. Specify the time by using the following format: yyyy-MM-dd'T'HH:mm:ss'Z'  
   */
  putComplianceItems(callback?: (err: AWSError, data: SSM.Types.PutComplianceItemsResult) => void): Request<SSM.Types.PutComplianceItemsResult, AWSError>;
  /**
   * Bulk update custom inventory items on one more instance. The request adds an inventory item, if it doesn't already exist, or updates an inventory item, if it does exist.
   */
  putInventory(params: SSM.Types.PutInventoryRequest, callback?: (err: AWSError, data: SSM.Types.PutInventoryResult) => void): Request<SSM.Types.PutInventoryResult, AWSError>;
  /**
   * Bulk update custom inventory items on one more instance. The request adds an inventory item, if it doesn't already exist, or updates an inventory item, if it does exist.
   */
  putInventory(callback?: (err: AWSError, data: SSM.Types.PutInventoryResult) => void): Request<SSM.Types.PutInventoryResult, AWSError>;
  /**
   * Add a parameter to the system.
   */
  putParameter(params: SSM.Types.PutParameterRequest, callback?: (err: AWSError, data: SSM.Types.PutParameterResult) => void): Request<SSM.Types.PutParameterResult, AWSError>;
  /**
   * Add a parameter to the system.
   */
  putParameter(callback?: (err: AWSError, data: SSM.Types.PutParameterResult) => void): Request<SSM.Types.PutParameterResult, AWSError>;
  /**
   * Defines the default patch baseline.
   */
  registerDefaultPatchBaseline(params: SSM.Types.RegisterDefaultPatchBaselineRequest, callback?: (err: AWSError, data: SSM.Types.RegisterDefaultPatchBaselineResult) => void): Request<SSM.Types.RegisterDefaultPatchBaselineResult, AWSError>;
  /**
   * Defines the default patch baseline.
   */
  registerDefaultPatchBaseline(callback?: (err: AWSError, data: SSM.Types.RegisterDefaultPatchBaselineResult) => void): Request<SSM.Types.RegisterDefaultPatchBaselineResult, AWSError>;
  /**
   * Registers a patch baseline for a patch group.
   */
  registerPatchBaselineForPatchGroup(params: SSM.Types.RegisterPatchBaselineForPatchGroupRequest, callback?: (err: AWSError, data: SSM.Types.RegisterPatchBaselineForPatchGroupResult) => void): Request<SSM.Types.RegisterPatchBaselineForPatchGroupResult, AWSError>;
  /**
   * Registers a patch baseline for a patch group.
   */
  registerPatchBaselineForPatchGroup(callback?: (err: AWSError, data: SSM.Types.RegisterPatchBaselineForPatchGroupResult) => void): Request<SSM.Types.RegisterPatchBaselineForPatchGroupResult, AWSError>;
  /**
   * Registers a target with a Maintenance Window.
   */
  registerTargetWithMaintenanceWindow(params: SSM.Types.RegisterTargetWithMaintenanceWindowRequest, callback?: (err: AWSError, data: SSM.Types.RegisterTargetWithMaintenanceWindowResult) => void): Request<SSM.Types.RegisterTargetWithMaintenanceWindowResult, AWSError>;
  /**
   * Registers a target with a Maintenance Window.
   */
  registerTargetWithMaintenanceWindow(callback?: (err: AWSError, data: SSM.Types.RegisterTargetWithMaintenanceWindowResult) => void): Request<SSM.Types.RegisterTargetWithMaintenanceWindowResult, AWSError>;
  /**
   * Adds a new task to a Maintenance Window.
   */
  registerTaskWithMaintenanceWindow(params: SSM.Types.RegisterTaskWithMaintenanceWindowRequest, callback?: (err: AWSError, data: SSM.Types.RegisterTaskWithMaintenanceWindowResult) => void): Request<SSM.Types.RegisterTaskWithMaintenanceWindowResult, AWSError>;
  /**
   * Adds a new task to a Maintenance Window.
   */
  registerTaskWithMaintenanceWindow(callback?: (err: AWSError, data: SSM.Types.RegisterTaskWithMaintenanceWindowResult) => void): Request<SSM.Types.RegisterTaskWithMaintenanceWindowResult, AWSError>;
  /**
   * Removes all tags from the specified resource.
   */
  removeTagsFromResource(params: SSM.Types.RemoveTagsFromResourceRequest, callback?: (err: AWSError, data: SSM.Types.RemoveTagsFromResourceResult) => void): Request<SSM.Types.RemoveTagsFromResourceResult, AWSError>;
  /**
   * Removes all tags from the specified resource.
   */
  removeTagsFromResource(callback?: (err: AWSError, data: SSM.Types.RemoveTagsFromResourceResult) => void): Request<SSM.Types.RemoveTagsFromResourceResult, AWSError>;
  /**
   * Reconnects a session to an instance after it has been disconnected. Connections can be resumed for disconnected sessions, but not terminated sessions.  This command is primarily for use by client machines to automatically reconnect during intermittent network issues. It is not intended for any other use. 
   */
  resumeSession(params: SSM.Types.ResumeSessionRequest, callback?: (err: AWSError, data: SSM.Types.ResumeSessionResponse) => void): Request<SSM.Types.ResumeSessionResponse, AWSError>;
  /**
   * Reconnects a session to an instance after it has been disconnected. Connections can be resumed for disconnected sessions, but not terminated sessions.  This command is primarily for use by client machines to automatically reconnect during intermittent network issues. It is not intended for any other use. 
   */
  resumeSession(callback?: (err: AWSError, data: SSM.Types.ResumeSessionResponse) => void): Request<SSM.Types.ResumeSessionResponse, AWSError>;
  /**
   * Sends a signal to an Automation execution to change the current behavior or status of the execution. 
   */
  sendAutomationSignal(params: SSM.Types.SendAutomationSignalRequest, callback?: (err: AWSError, data: SSM.Types.SendAutomationSignalResult) => void): Request<SSM.Types.SendAutomationSignalResult, AWSError>;
  /**
   * Sends a signal to an Automation execution to change the current behavior or status of the execution. 
   */
  sendAutomationSignal(callback?: (err: AWSError, data: SSM.Types.SendAutomationSignalResult) => void): Request<SSM.Types.SendAutomationSignalResult, AWSError>;
  /**
   * Executes commands on one or more managed instances.
   */
  sendCommand(params: SSM.Types.SendCommandRequest, callback?: (err: AWSError, data: SSM.Types.SendCommandResult) => void): Request<SSM.Types.SendCommandResult, AWSError>;
  /**
   * Executes commands on one or more managed instances.
   */
  sendCommand(callback?: (err: AWSError, data: SSM.Types.SendCommandResult) => void): Request<SSM.Types.SendCommandResult, AWSError>;
  /**
   * Use this API action to execute an association immediately and only one time. This action can be helpful when troubleshooting associations.
   */
  startAssociationsOnce(params: SSM.Types.StartAssociationsOnceRequest, callback?: (err: AWSError, data: SSM.Types.StartAssociationsOnceResult) => void): Request<SSM.Types.StartAssociationsOnceResult, AWSError>;
  /**
   * Use this API action to execute an association immediately and only one time. This action can be helpful when troubleshooting associations.
   */
  startAssociationsOnce(callback?: (err: AWSError, data: SSM.Types.StartAssociationsOnceResult) => void): Request<SSM.Types.StartAssociationsOnceResult, AWSError>;
  /**
   * Initiates execution of an Automation document.
   */
  startAutomationExecution(params: SSM.Types.StartAutomationExecutionRequest, callback?: (err: AWSError, data: SSM.Types.StartAutomationExecutionResult) => void): Request<SSM.Types.StartAutomationExecutionResult, AWSError>;
  /**
   * Initiates execution of an Automation document.
   */
  startAutomationExecution(callback?: (err: AWSError, data: SSM.Types.StartAutomationExecutionResult) => void): Request<SSM.Types.StartAutomationExecutionResult, AWSError>;
  /**
   * Initiates a connection to a target (for example, an instance) for a Session Manager session. Returns a URL and token that can be used to open a WebSocket connection for sending input and receiving outputs.  AWS CLI usage: start-session is an interactive command that requires the Session Manager plugin to be installed on the client machine making the call. For information, see  Install the Session Manager Plugin for the AWS CLI in the AWS Systems Manager User Guide. 
   */
  startSession(params: SSM.Types.StartSessionRequest, callback?: (err: AWSError, data: SSM.Types.StartSessionResponse) => void): Request<SSM.Types.StartSessionResponse, AWSError>;
  /**
   * Initiates a connection to a target (for example, an instance) for a Session Manager session. Returns a URL and token that can be used to open a WebSocket connection for sending input and receiving outputs.  AWS CLI usage: start-session is an interactive command that requires the Session Manager plugin to be installed on the client machine making the call. For information, see  Install the Session Manager Plugin for the AWS CLI in the AWS Systems Manager User Guide. 
   */
  startSession(callback?: (err: AWSError, data: SSM.Types.StartSessionResponse) => void): Request<SSM.Types.StartSessionResponse, AWSError>;
  /**
   * Stop an Automation that is currently executing.
   */
  stopAutomationExecution(params: SSM.Types.StopAutomationExecutionRequest, callback?: (err: AWSError, data: SSM.Types.StopAutomationExecutionResult) => void): Request<SSM.Types.StopAutomationExecutionResult, AWSError>;
  /**
   * Stop an Automation that is currently executing.
   */
  stopAutomationExecution(callback?: (err: AWSError, data: SSM.Types.StopAutomationExecutionResult) => void): Request<SSM.Types.StopAutomationExecutionResult, AWSError>;
  /**
   * Permanently ends a session and closes the data connection between the Session Manager client and SSM Agent on the instance. A terminated session cannot be resumed.
   */
  terminateSession(params: SSM.Types.TerminateSessionRequest, callback?: (err: AWSError, data: SSM.Types.TerminateSessionResponse) => void): Request<SSM.Types.TerminateSessionResponse, AWSError>;
  /**
   * Permanently ends a session and closes the data connection between the Session Manager client and SSM Agent on the instance. A terminated session cannot be resumed.
   */
  terminateSession(callback?: (err: AWSError, data: SSM.Types.TerminateSessionResponse) => void): Request<SSM.Types.TerminateSessionResponse, AWSError>;
  /**
   * Updates an association. You can update the association name and version, the document version, schedule, parameters, and Amazon S3 output.
   */
  updateAssociation(params: SSM.Types.UpdateAssociationRequest, callback?: (err: AWSError, data: SSM.Types.UpdateAssociationResult) => void): Request<SSM.Types.UpdateAssociationResult, AWSError>;
  /**
   * Updates an association. You can update the association name and version, the document version, schedule, parameters, and Amazon S3 output.
   */
  updateAssociation(callback?: (err: AWSError, data: SSM.Types.UpdateAssociationResult) => void): Request<SSM.Types.UpdateAssociationResult, AWSError>;
  /**
   * Updates the status of the Systems Manager document associated with the specified instance.
   */
  updateAssociationStatus(params: SSM.Types.UpdateAssociationStatusRequest, callback?: (err: AWSError, data: SSM.Types.UpdateAssociationStatusResult) => void): Request<SSM.Types.UpdateAssociationStatusResult, AWSError>;
  /**
   * Updates the status of the Systems Manager document associated with the specified instance.
   */
  updateAssociationStatus(callback?: (err: AWSError, data: SSM.Types.UpdateAssociationStatusResult) => void): Request<SSM.Types.UpdateAssociationStatusResult, AWSError>;
  /**
   * The document you want to update.
   */
  updateDocument(params: SSM.Types.UpdateDocumentRequest, callback?: (err: AWSError, data: SSM.Types.UpdateDocumentResult) => void): Request<SSM.Types.UpdateDocumentResult, AWSError>;
  /**
   * The document you want to update.
   */
  updateDocument(callback?: (err: AWSError, data: SSM.Types.UpdateDocumentResult) => void): Request<SSM.Types.UpdateDocumentResult, AWSError>;
  /**
   * Set the default version of a document. 
   */
  updateDocumentDefaultVersion(params: SSM.Types.UpdateDocumentDefaultVersionRequest, callback?: (err: AWSError, data: SSM.Types.UpdateDocumentDefaultVersionResult) => void): Request<SSM.Types.UpdateDocumentDefaultVersionResult, AWSError>;
  /**
   * Set the default version of a document. 
   */
  updateDocumentDefaultVersion(callback?: (err: AWSError, data: SSM.Types.UpdateDocumentDefaultVersionResult) => void): Request<SSM.Types.UpdateDocumentDefaultVersionResult, AWSError>;
  /**
   * Updates an existing Maintenance Window. Only specified parameters are modified.
   */
  updateMaintenanceWindow(params: SSM.Types.UpdateMaintenanceWindowRequest, callback?: (err: AWSError, data: SSM.Types.UpdateMaintenanceWindowResult) => void): Request<SSM.Types.UpdateMaintenanceWindowResult, AWSError>;
  /**
   * Updates an existing Maintenance Window. Only specified parameters are modified.
   */
  updateMaintenanceWindow(callback?: (err: AWSError, data: SSM.Types.UpdateMaintenanceWindowResult) => void): Request<SSM.Types.UpdateMaintenanceWindowResult, AWSError>;
  /**
   * Modifies the target of an existing Maintenance Window. You can't change the target type, but you can change the following: The target from being an ID target to a Tag target, or a Tag target to an ID target. IDs for an ID target. Tags for a Tag target. Owner. Name. Description. If a parameter is null, then the corresponding field is not modified.
   */
  updateMaintenanceWindowTarget(params: SSM.Types.UpdateMaintenanceWindowTargetRequest, callback?: (err: AWSError, data: SSM.Types.UpdateMaintenanceWindowTargetResult) => void): Request<SSM.Types.UpdateMaintenanceWindowTargetResult, AWSError>;
  /**
   * Modifies the target of an existing Maintenance Window. You can't change the target type, but you can change the following: The target from being an ID target to a Tag target, or a Tag target to an ID target. IDs for an ID target. Tags for a Tag target. Owner. Name. Description. If a parameter is null, then the corresponding field is not modified.
   */
  updateMaintenanceWindowTarget(callback?: (err: AWSError, data: SSM.Types.UpdateMaintenanceWindowTargetResult) => void): Request<SSM.Types.UpdateMaintenanceWindowTargetResult, AWSError>;
  /**
   * Modifies a task assigned to a Maintenance Window. You can't change the task type, but you can change the following values:   TaskARN. For example, you can change a RUN_COMMAND task from AWS-RunPowerShellScript to AWS-RunShellScript.   ServiceRoleArn   TaskInvocationParameters   Priority   MaxConcurrency   MaxErrors   If a parameter is null, then the corresponding field is not modified. Also, if you set Replace to true, then all fields required by the RegisterTaskWithMaintenanceWindow action are required for this request. Optional fields that aren't specified are set to null.
   */
  updateMaintenanceWindowTask(params: SSM.Types.UpdateMaintenanceWindowTaskRequest, callback?: (err: AWSError, data: SSM.Types.UpdateMaintenanceWindowTaskResult) => void): Request<SSM.Types.UpdateMaintenanceWindowTaskResult, AWSError>;
  /**
   * Modifies a task assigned to a Maintenance Window. You can't change the task type, but you can change the following values:   TaskARN. For example, you can change a RUN_COMMAND task from AWS-RunPowerShellScript to AWS-RunShellScript.   ServiceRoleArn   TaskInvocationParameters   Priority   MaxConcurrency   MaxErrors   If a parameter is null, then the corresponding field is not modified. Also, if you set Replace to true, then all fields required by the RegisterTaskWithMaintenanceWindow action are required for this request. Optional fields that aren't specified are set to null.
   */
  updateMaintenanceWindowTask(callback?: (err: AWSError, data: SSM.Types.UpdateMaintenanceWindowTaskResult) => void): Request<SSM.Types.UpdateMaintenanceWindowTaskResult, AWSError>;
  /**
   * Assigns or changes an Amazon Identity and Access Management (IAM) role to the managed instance.
   */
  updateManagedInstanceRole(params: SSM.Types.UpdateManagedInstanceRoleRequest, callback?: (err: AWSError, data: SSM.Types.UpdateManagedInstanceRoleResult) => void): Request<SSM.Types.UpdateManagedInstanceRoleResult, AWSError>;
  /**
   * Assigns or changes an Amazon Identity and Access Management (IAM) role to the managed instance.
   */
  updateManagedInstanceRole(callback?: (err: AWSError, data: SSM.Types.UpdateManagedInstanceRoleResult) => void): Request<SSM.Types.UpdateManagedInstanceRoleResult, AWSError>;
  /**
   * Modifies an existing patch baseline. Fields not specified in the request are left unchanged.  For information about valid key and value pairs in PatchFilters for each supported operating system type, see PatchFilter. 
   */
  updatePatchBaseline(params: SSM.Types.UpdatePatchBaselineRequest, callback?: (err: AWSError, data: SSM.Types.UpdatePatchBaselineResult) => void): Request<SSM.Types.UpdatePatchBaselineResult, AWSError>;
  /**
   * Modifies an existing patch baseline. Fields not specified in the request are left unchanged.  For information about valid key and value pairs in PatchFilters for each supported operating system type, see PatchFilter. 
   */
  updatePatchBaseline(callback?: (err: AWSError, data: SSM.Types.UpdatePatchBaselineResult) => void): Request<SSM.Types.UpdatePatchBaselineResult, AWSError>;
}
declare namespace SSM {
  export type AccountId = string;
  export type AccountIdList = AccountId[];
  export interface Activation {
    /**
     * The ID created by Systems Manager when you submitted the activation.
     */
    ActivationId?: ActivationId;
    /**
     * A user defined description of the activation.
     */
    Description?: ActivationDescription;
    /**
     * A name for the managed instance when it is created.
     */
    DefaultInstanceName?: DefaultInstanceName;
    /**
     * The Amazon Identity and Access Management (IAM) role to assign to the managed instance.
     */
    IamRole?: IamRole;
    /**
     * The maximum number of managed instances that can be registered using this activation.
     */
    RegistrationLimit?: RegistrationLimit;
    /**
     * The number of managed instances already registered with this activation.
     */
    RegistrationsCount?: RegistrationsCount;
    /**
     * The date when this activation can no longer be used to register managed instances.
     */
    ExpirationDate?: ExpirationDate;
    /**
     * Whether or not the activation is expired.
     */
    Expired?: Boolean;
    /**
     * The date the activation was created.
     */
    CreatedDate?: CreatedDate;
  }
  export type ActivationCode = string;
  export type ActivationDescription = string;
  export type ActivationId = string;
  export type ActivationList = Activation[];
  export interface AddTagsToResourceRequest {
    /**
     * Specifies the type of resource you are tagging.  The ManagedInstance type for this API action is for on-premises managed instances. You must specify the the name of the managed instance in the following format: mi-ID_number. For example, mi-1a2b3c4d5e6f. 
     */
    ResourceType: ResourceTypeForTagging;
    /**
     * The resource ID you want to tag. Use the ID of the resource. Here are some examples: ManagedInstance: mi-012345abcde MaintenanceWindow: mw-012345abcde PatchBaseline: pb-012345abcde For the Document and Parameter values, use the name of the resource.  The ManagedInstance type for this API action is only for on-premises managed instances. You must specify the the name of the managed instance in the following format: mi-ID_number. For example, mi-1a2b3c4d5e6f. 
     */
    ResourceId: ResourceId;
    /**
     *  One or more tags. The value parameter is required, but if you don't want the tag to have a value, specify the parameter with no value, and we set the value to an empty string.   Do not enter personally identifiable information in this field. 
     */
    Tags: TagList;
  }
  export interface AddTagsToResourceResult {
  }
  export type AgentErrorCode = string;
  export type AggregatorSchemaOnly = boolean;
  export type AllowedPattern = string;
  export type ApproveAfterDays = number;
  export interface Association {
    /**
     * The name of the Systems Manager document.
     */
    Name?: DocumentName;
    /**
     * The ID of the instance.
     */
    InstanceId?: InstanceId;
    /**
     * The ID created by the system when you create an association. An association is a binding between a document and a set of targets with a schedule.
     */
    AssociationId?: AssociationId;
    /**
     * The association version.
     */
    AssociationVersion?: AssociationVersion;
    /**
     * The version of the document used in the association.
     */
    DocumentVersion?: DocumentVersion;
    /**
     * The instances targeted by the request to create an association. 
     */
    Targets?: Targets;
    /**
     * The date on which the association was last run.
     */
    LastExecutionDate?: DateTime;
    /**
     * Information about the association.
     */
    Overview?: AssociationOverview;
    /**
     * A cron expression that specifies a schedule when the association runs.
     */
    ScheduleExpression?: ScheduleExpression;
    /**
     * The association name.
     */
    AssociationName?: AssociationName;
  }
  export type AssociationComplianceSeverity = "CRITICAL"|"HIGH"|"MEDIUM"|"LOW"|"UNSPECIFIED"|string;
  export interface AssociationDescription {
    /**
     * The name of the Systems Manager document.
     */
    Name?: DocumentName;
    /**
     * The ID of the instance.
     */
    InstanceId?: InstanceId;
    /**
     * The association version.
     */
    AssociationVersion?: AssociationVersion;
    /**
     * The date when the association was made.
     */
    Date?: DateTime;
    /**
     * The date when the association was last updated.
     */
    LastUpdateAssociationDate?: DateTime;
    /**
     * The association status.
     */
    Status?: AssociationStatus;
    /**
     * Information about the association.
     */
    Overview?: AssociationOverview;
    /**
     * The document version.
     */
    DocumentVersion?: DocumentVersion;
    /**
     * A description of the parameters for a document. 
     */
    Parameters?: Parameters;
    /**
     * The association ID.
     */
    AssociationId?: AssociationId;
    /**
     * The instances targeted by the request. 
     */
    Targets?: Targets;
    /**
     * A cron expression that specifies a schedule when the association runs.
     */
    ScheduleExpression?: ScheduleExpression;
    /**
     * An Amazon S3 bucket where you want to store the output details of the request.
     */
    OutputLocation?: InstanceAssociationOutputLocation;
    /**
     * The date on which the association was last run.
     */
    LastExecutionDate?: DateTime;
    /**
     * The last date on which the association was successfully run.
     */
    LastSuccessfulExecutionDate?: DateTime;
    /**
     * The association name.
     */
    AssociationName?: AssociationName;
    /**
     * The number of errors that are allowed before the system stops sending requests to run the association on additional targets. You can specify either an absolute number of errors, for example 10, or a percentage of the target set, for example 10%. If you specify 3, for example, the system stops sending requests when the fourth error is received. If you specify 0, then the system stops sending requests after the first error is returned. If you run an association on 50 instances and set MaxError to 10%, then the system stops sending the request when the sixth error is received. Executions that are already running an association when MaxErrors is reached are allowed to complete, but some of these executions may fail as well. If you need to ensure that there won't be more than max-errors failed executions, set MaxConcurrency to 1 so that executions proceed one at a time.
     */
    MaxErrors?: MaxErrors;
    /**
     * The maximum number of targets allowed to run the association at the same time. You can specify a number, for example 10, or a percentage of the target set, for example 10%. The default value is 100%, which means all targets run the association at the same time. If a new instance starts and attempts to execute an association while Systems Manager is executing MaxConcurrency associations, the association is allowed to run. During the next association interval, the new instance will process its association within the limit specified for MaxConcurrency.
     */
    MaxConcurrency?: MaxConcurrency;
    /**
     * The severity level that is assigned to the association.
     */
    ComplianceSeverity?: AssociationComplianceSeverity;
  }
  export type AssociationDescriptionList = AssociationDescription[];
  export interface AssociationExecution {
    /**
     * The association ID.
     */
    AssociationId?: AssociationId;
    /**
     * The association version.
     */
    AssociationVersion?: AssociationVersion;
    /**
     * The execution ID for the association. If the association does not run at intervals or according to a schedule, then the ExecutionID is the same as the AssociationID.
     */
    ExecutionId?: AssociationExecutionId;
    /**
     * The status of the association execution.
     */
    Status?: StatusName;
    /**
     * Detailed status information about the execution.
     */
    DetailedStatus?: StatusName;
    /**
     * The time the execution started.
     */
    CreatedTime?: DateTime;
    /**
     * The date of the last execution.
     */
    LastExecutionDate?: DateTime;
    /**
     * An aggregate status of the resources in the execution based on the status type.
     */
    ResourceCountByStatus?: ResourceCountByStatus;
  }
  export interface AssociationExecutionFilter {
    /**
     * The key value used in the request.
     */
    Key: AssociationExecutionFilterKey;
    /**
     * The value specified for the key.
     */
    Value: AssociationExecutionFilterValue;
    /**
     * The filter type specified in the request.
     */
    Type: AssociationFilterOperatorType;
  }
  export type AssociationExecutionFilterKey = "ExecutionId"|"Status"|"CreatedTime"|string;
  export type AssociationExecutionFilterList = AssociationExecutionFilter[];
  export type AssociationExecutionFilterValue = string;
  export type AssociationExecutionId = string;
  export interface AssociationExecutionTarget {
    /**
     * The association ID.
     */
    AssociationId?: AssociationId;
    /**
     * The association version.
     */
    AssociationVersion?: AssociationVersion;
    /**
     * The execution ID. If the association does not run at intervals or according to a schedule, then the ExecutionID is the same as the AssociationID.
     */
    ExecutionId?: AssociationExecutionId;
    /**
     * The resource ID, for example, the instance ID where the association ran.
     */
    ResourceId?: AssociationResourceId;
    /**
     * The resource type, for example, instance.
     */
    ResourceType?: AssociationResourceType;
    /**
     * The association execution status.
     */
    Status?: StatusName;
    /**
     * Detailed information about the execution status.
     */
    DetailedStatus?: StatusName;
    /**
     * The date of the last execution.
     */
    LastExecutionDate?: DateTime;
    /**
     * The location where the association details are saved.
     */
    OutputSource?: OutputSource;
  }
  export interface AssociationExecutionTargetsFilter {
    /**
     * The key value used in the request.
     */
    Key: AssociationExecutionTargetsFilterKey;
    /**
     * The value specified for the key.
     */
    Value: AssociationExecutionTargetsFilterValue;
  }
  export type AssociationExecutionTargetsFilterKey = "Status"|"ResourceId"|"ResourceType"|string;
  export type AssociationExecutionTargetsFilterList = AssociationExecutionTargetsFilter[];
  export type AssociationExecutionTargetsFilterValue = string;
  export type AssociationExecutionTargetsList = AssociationExecutionTarget[];
  export type AssociationExecutionsList = AssociationExecution[];
  export interface AssociationFilter {
    /**
     * The name of the filter.
     */
    key: AssociationFilterKey;
    /**
     * The filter value.
     */
    value: AssociationFilterValue;
  }
  export type AssociationFilterKey = "InstanceId"|"Name"|"AssociationId"|"AssociationStatusName"|"LastExecutedBefore"|"LastExecutedAfter"|"AssociationName"|string;
  export type AssociationFilterList = AssociationFilter[];
  export type AssociationFilterOperatorType = "EQUAL"|"LESS_THAN"|"GREATER_THAN"|string;
  export type AssociationFilterValue = string;
  export type AssociationId = string;
  export type AssociationIdList = AssociationId[];
  export type AssociationList = Association[];
  export type AssociationName = string;
  export interface AssociationOverview {
    /**
     * The status of the association. Status can be: Pending, Success, or Failed.
     */
    Status?: StatusName;
    /**
     * A detailed status of the association.
     */
    DetailedStatus?: StatusName;
    /**
     * Returns the number of targets for the association status. For example, if you created an association with two instances, and one of them was successful, this would return the count of instances by status.
     */
    AssociationStatusAggregatedCount?: AssociationStatusAggregatedCount;
  }
  export type AssociationResourceId = string;
  export type AssociationResourceType = string;
  export interface AssociationStatus {
    /**
     * The date when the status changed.
     */
    Date: DateTime;
    /**
     * The status.
     */
    Name: AssociationStatusName;
    /**
     * The reason for the status.
     */
    Message: StatusMessage;
    /**
     * A user-defined string.
     */
    AdditionalInfo?: StatusAdditionalInfo;
  }
  export type AssociationStatusAggregatedCount = {[key: string]: InstanceCount};
  export type AssociationStatusName = "Pending"|"Success"|"Failed"|string;
  export type AssociationVersion = string;
  export interface AssociationVersionInfo {
    /**
     * The ID created by the system when the association was created.
     */
    AssociationId?: AssociationId;
    /**
     * The association version.
     */
    AssociationVersion?: AssociationVersion;
    /**
     * The date the association version was created.
     */
    CreatedDate?: DateTime;
    /**
     * The name specified when the association was created.
     */
    Name?: DocumentName;
    /**
     * The version of a Systems Manager document used when the association version was created.
     */
    DocumentVersion?: DocumentVersion;
    /**
     * Parameters specified when the association version was created.
     */
    Parameters?: Parameters;
    /**
     * The targets specified for the association when the association version was created. 
     */
    Targets?: Targets;
    /**
     * The cron or rate schedule specified for the association when the association version was created.
     */
    ScheduleExpression?: ScheduleExpression;
    /**
     * The location in Amazon S3 specified for the association when the association version was created.
     */
    OutputLocation?: InstanceAssociationOutputLocation;
    /**
     * The name specified for the association version when the association version was created.
     */
    AssociationName?: AssociationName;
    /**
     * The number of errors that are allowed before the system stops sending requests to run the association on additional targets. You can specify either an absolute number of errors, for example 10, or a percentage of the target set, for example 10%. If you specify 3, for example, the system stops sending requests when the fourth error is received. If you specify 0, then the system stops sending requests after the first error is returned. If you run an association on 50 instances and set MaxError to 10%, then the system stops sending the request when the sixth error is received. Executions that are already running an association when MaxErrors is reached are allowed to complete, but some of these executions may fail as well. If you need to ensure that there won't be more than max-errors failed executions, set MaxConcurrency to 1 so that executions proceed one at a time.
     */
    MaxErrors?: MaxErrors;
    /**
     * The maximum number of targets allowed to run the association at the same time. You can specify a number, for example 10, or a percentage of the target set, for example 10%. The default value is 100%, which means all targets run the association at the same time. If a new instance starts and attempts to execute an association while Systems Manager is executing MaxConcurrency associations, the association is allowed to run. During the next association interval, the new instance will process its association within the limit specified for MaxConcurrency.
     */
    MaxConcurrency?: MaxConcurrency;
    /**
     * The severity level that is assigned to the association.
     */
    ComplianceSeverity?: AssociationComplianceSeverity;
  }
  export type AssociationVersionList = AssociationVersionInfo[];
  export type AttributeName = string;
  export type AttributeValue = string;
  export type AutomationActionName = string;
  export interface AutomationExecution {
    /**
     * The execution ID.
     */
    AutomationExecutionId?: AutomationExecutionId;
    /**
     * The name of the Automation document used during the execution.
     */
    DocumentName?: DocumentName;
    /**
     * The version of the document to use during execution.
     */
    DocumentVersion?: DocumentVersion;
    /**
     * The time the execution started.
     */
    ExecutionStartTime?: DateTime;
    /**
     * The time the execution finished.
     */
    ExecutionEndTime?: DateTime;
    /**
     * The execution status of the Automation.
     */
    AutomationExecutionStatus?: AutomationExecutionStatus;
    /**
     * A list of details about the current state of all steps that comprise an execution. An Automation document contains a list of steps that are executed in order.
     */
    StepExecutions?: StepExecutionList;
    /**
     * A boolean value that indicates if the response contains the full list of the Automation step executions. If true, use the DescribeAutomationStepExecutions API action to get the full list of step executions.
     */
    StepExecutionsTruncated?: Boolean;
    /**
     * The key-value map of execution parameters, which were supplied when calling StartAutomationExecution.
     */
    Parameters?: AutomationParameterMap;
    /**
     * The list of execution outputs as defined in the automation document.
     */
    Outputs?: AutomationParameterMap;
    /**
     * A message describing why an execution has failed, if the status is set to Failed.
     */
    FailureMessage?: String;
    /**
     * The automation execution mode.
     */
    Mode?: ExecutionMode;
    /**
     * The AutomationExecutionId of the parent automation.
     */
    ParentAutomationExecutionId?: AutomationExecutionId;
    /**
     * The Amazon Resource Name (ARN) of the user who executed the automation.
     */
    ExecutedBy?: String;
    /**
     * The name of the currently executing step.
     */
    CurrentStepName?: String;
    /**
     * The action of the currently executing step.
     */
    CurrentAction?: String;
    /**
     * The parameter name.
     */
    TargetParameterName?: AutomationParameterKey;
    /**
     * The specified targets.
     */
    Targets?: Targets;
    /**
     * The specified key-value mapping of document parameters to target resources.
     */
    TargetMaps?: TargetMaps;
    /**
     * A list of resolved targets in the rate control execution.
     */
    ResolvedTargets?: ResolvedTargets;
    /**
     * The MaxConcurrency value specified by the user when the execution started.
     */
    MaxConcurrency?: MaxConcurrency;
    /**
     * The MaxErrors value specified by the user when the execution started.
     */
    MaxErrors?: MaxErrors;
    /**
     * The target of the execution.
     */
    Target?: String;
  }
  export interface AutomationExecutionFilter {
    /**
     * One or more keys to limit the results. Valid filter keys include the following: DocumentNamePrefix, ExecutionStatus, ExecutionId, ParentExecutionId, CurrentAction, StartTimeBefore, StartTimeAfter.
     */
    Key: AutomationExecutionFilterKey;
    /**
     * The values used to limit the execution information associated with the filter's key.
     */
    Values: AutomationExecutionFilterValueList;
  }
  export type AutomationExecutionFilterKey = "DocumentNamePrefix"|"ExecutionStatus"|"ExecutionId"|"ParentExecutionId"|"CurrentAction"|"StartTimeBefore"|"StartTimeAfter"|string;
  export type AutomationExecutionFilterList = AutomationExecutionFilter[];
  export type AutomationExecutionFilterValue = string;
  export type AutomationExecutionFilterValueList = AutomationExecutionFilterValue[];
  export type AutomationExecutionId = string;
  export interface AutomationExecutionMetadata {
    /**
     * The execution ID.
     */
    AutomationExecutionId?: AutomationExecutionId;
    /**
     * The name of the Automation document used during execution.
     */
    DocumentName?: DocumentName;
    /**
     * The document version used during the execution.
     */
    DocumentVersion?: DocumentVersion;
    /**
     * The status of the execution. Valid values include: Running, Succeeded, Failed, Timed out, or Cancelled.
     */
    AutomationExecutionStatus?: AutomationExecutionStatus;
    /**
     * The time the execution started.&gt;
     */
    ExecutionStartTime?: DateTime;
    /**
     * The time the execution finished. This is not populated if the execution is still in progress.
     */
    ExecutionEndTime?: DateTime;
    /**
     * The IAM role ARN of the user who executed the Automation.
     */
    ExecutedBy?: String;
    /**
     * An Amazon S3 bucket where execution information is stored.
     */
    LogFile?: String;
    /**
     * The list of execution outputs as defined in the Automation document.
     */
    Outputs?: AutomationParameterMap;
    /**
     * The Automation execution mode.
     */
    Mode?: ExecutionMode;
    /**
     * The ExecutionId of the parent Automation.
     */
    ParentAutomationExecutionId?: AutomationExecutionId;
    /**
     * The name of the currently executing step.
     */
    CurrentStepName?: String;
    /**
     * The action of the currently executing step.
     */
    CurrentAction?: String;
    /**
     * The list of execution outputs as defined in the Automation document.
     */
    FailureMessage?: String;
    /**
     * The list of execution outputs as defined in the Automation document.
     */
    TargetParameterName?: AutomationParameterKey;
    /**
     * The targets defined by the user when starting the Automation.
     */
    Targets?: Targets;
    /**
     * The specified key-value mapping of document parameters to target resources.
     */
    TargetMaps?: TargetMaps;
    /**
     * A list of targets that resolved during the execution.
     */
    ResolvedTargets?: ResolvedTargets;
    /**
     * The MaxConcurrency value specified by the user when starting the Automation.
     */
    MaxConcurrency?: MaxConcurrency;
    /**
     * The MaxErrors value specified by the user when starting the Automation.
     */
    MaxErrors?: MaxErrors;
    /**
     * The list of execution outputs as defined in the Automation document.
     */
    Target?: String;
  }
  export type AutomationExecutionMetadataList = AutomationExecutionMetadata[];
  export type AutomationExecutionStatus = "Pending"|"InProgress"|"Waiting"|"Success"|"TimedOut"|"Cancelling"|"Cancelled"|"Failed"|string;
  export type AutomationParameterKey = string;
  export type AutomationParameterMap = {[key: string]: AutomationParameterValueList};
  export type AutomationParameterValue = string;
  export type AutomationParameterValueList = AutomationParameterValue[];
  export type BaselineDescription = string;
  export type BaselineId = string;
  export type BaselineName = string;
  export type BatchErrorMessage = string;
  export type Boolean = boolean;
  export interface CancelCommandRequest {
    /**
     * The ID of the command you want to cancel.
     */
    CommandId: CommandId;
    /**
     * (Optional) A list of instance IDs on which you want to cancel the command. If not provided, the command is canceled on every instance on which it was requested.
     */
    InstanceIds?: InstanceIdList;
  }
  export interface CancelCommandResult {
  }
  export interface CancelMaintenanceWindowExecutionRequest {
    /**
     * The ID of the Maintenance Window execution to stop.
     */
    WindowExecutionId: MaintenanceWindowExecutionId;
  }
  export interface CancelMaintenanceWindowExecutionResult {
    /**
     * The ID of the Maintenance Window execution that has been stopped.
     */
    WindowExecutionId?: MaintenanceWindowExecutionId;
  }
  export type ClientToken = string;
  export type CloudWatchLogGroupName = string;
  export interface CloudWatchOutputConfig {
    /**
     * The name of the CloudWatch log group where you want to send command output. If you don't specify a group name, Systems Manager automatically creates a log group for you. The log group uses the following naming format: aws/ssm/SystemsManagerDocumentName.
     */
    CloudWatchLogGroupName?: CloudWatchLogGroupName;
    /**
     * Enables Systems Manager to send command output to CloudWatch Logs.
     */
    CloudWatchOutputEnabled?: CloudWatchOutputEnabled;
  }
  export type CloudWatchOutputEnabled = boolean;
  export interface Command {
    /**
     * A unique identifier for this command.
     */
    CommandId?: CommandId;
    /**
     * The name of the document requested for execution.
     */
    DocumentName?: DocumentName;
    /**
     * The SSM document version.
     */
    DocumentVersion?: DocumentVersion;
    /**
     * User-specified information about the command, such as a brief description of what the command should do.
     */
    Comment?: Comment;
    /**
     * If this time is reached and the command has not already started executing, it will not run. Calculated based on the ExpiresAfter user input provided as part of the SendCommand API.
     */
    ExpiresAfter?: DateTime;
    /**
     * The parameter values to be inserted in the document when executing the command.
     */
    Parameters?: Parameters;
    /**
     * The instance IDs against which this command was requested.
     */
    InstanceIds?: InstanceIdList;
    /**
     * An array of search criteria that targets instances using a Key,Value combination that you specify. Targets is required if you don't provide one or more instance IDs in the call.
     */
    Targets?: Targets;
    /**
     * The date and time the command was requested.
     */
    RequestedDateTime?: DateTime;
    /**
     * The status of the command.
     */
    Status?: CommandStatus;
    /**
     * A detailed status of the command execution. StatusDetails includes more information than Status because it includes states resulting from error and concurrency control parameters. StatusDetails can show different results than Status. For more information about these statuses, see Understanding Command Statuses in the AWS Systems Manager User Guide. StatusDetails can be one of the following values:   Pending: The command has not been sent to any instances.   In Progress: The command has been sent to at least one instance but has not reached a final state on all instances.   Success: The command successfully executed on all invocations. This is a terminal state.   Delivery Timed Out: The value of MaxErrors or more command invocations shows a status of Delivery Timed Out. This is a terminal state.   Execution Timed Out: The value of MaxErrors or more command invocations shows a status of Execution Timed Out. This is a terminal state.   Failed: The value of MaxErrors or more command invocations shows a status of Failed. This is a terminal state.   Incomplete: The command was attempted on all instances and one or more invocations does not have a value of Success but not enough invocations failed for the status to be Failed. This is a terminal state.   Canceled: The command was terminated before it was completed. This is a terminal state.   Rate Exceeded: The number of instances targeted by the command exceeded the account limit for pending invocations. The system has canceled the command before executing it on any instance. This is a terminal state.  
     */
    StatusDetails?: StatusDetails;
    /**
     * (Deprecated) You can no longer specify this parameter. The system ignores it. Instead, Systems Manager automatically determines the Amazon S3 bucket region.
     */
    OutputS3Region?: S3Region;
    /**
     * The S3 bucket where the responses to the command executions should be stored. This was requested when issuing the command.
     */
    OutputS3BucketName?: S3BucketName;
    /**
     * The S3 directory path inside the bucket where the responses to the command executions should be stored. This was requested when issuing the command.
     */
    OutputS3KeyPrefix?: S3KeyPrefix;
    /**
     * The maximum number of instances that are allowed to execute the command at the same time. You can specify a number of instances, such as 10, or a percentage of instances, such as 10%. The default value is 50. For more information about how to use MaxConcurrency, see Executing Commands Using Systems Manager Run Command in the AWS Systems Manager User Guide.
     */
    MaxConcurrency?: MaxConcurrency;
    /**
     * The maximum number of errors allowed before the system stops sending the command to additional targets. You can specify a number of errors, such as 10, or a percentage or errors, such as 10%. The default value is 0. For more information about how to use MaxErrors, see Executing Commands Using Systems Manager Run Command in the AWS Systems Manager User Guide.
     */
    MaxErrors?: MaxErrors;
    /**
     * The number of targets for the command.
     */
    TargetCount?: TargetCount;
    /**
     * The number of targets for which the command invocation reached a terminal state. Terminal states include the following: Success, Failed, Execution Timed Out, Delivery Timed Out, Canceled, Terminated, or Undeliverable.
     */
    CompletedCount?: CompletedCount;
    /**
     * The number of targets for which the status is Failed or Execution Timed Out.
     */
    ErrorCount?: ErrorCount;
    /**
     * The number of targets for which the status is Delivery Timed Out.
     */
    DeliveryTimedOutCount?: DeliveryTimedOutCount;
    /**
     * The IAM service role that Run Command uses to act on your behalf when sending notifications about command status changes. 
     */
    ServiceRole?: ServiceRole;
    /**
     * Configurations for sending notifications about command status changes. 
     */
    NotificationConfig?: NotificationConfig;
    /**
     * CloudWatch Logs information where you want Systems Manager to send the command output.
     */
    CloudWatchOutputConfig?: CloudWatchOutputConfig;
  }
  export interface CommandFilter {
    /**
     * The name of the filter.
     */
    key: CommandFilterKey;
    /**
     * The filter value. Valid values for each filter key are as follows:   InvokedAfter: A timestamp to limit your results. For example, specify 2018-07-07T00:00:00Z to see results occurring July 7, 2018, and later.   InvokedBefore: A timestamp to limit your results. For example, specify 2018-07-07T00:00:00Z to see results before July 7, 2018.   Status: Specify a valid command status to see a list of all command executions with that status. Status values you can specify include:   Pending   InProgress   Success   Cancelled   Failed   TimedOut   Cancelling      DocumentName: The name of the SSM document for which you want to see command results. For example, specify AWS-RunPatchBaseline to see command executions that used this SSM document to perform security patching operations on instances.    ExecutionStage: An enum whose value can be either Executing or Complete.   Specify Executing to see a list of command executions that are currently still running.   Specify Complete to see a list of command exeuctions that have already completed.    
     */
    value: CommandFilterValue;
  }
  export type CommandFilterKey = "InvokedAfter"|"InvokedBefore"|"Status"|"ExecutionStage"|"DocumentName"|string;
  export type CommandFilterList = CommandFilter[];
  export type CommandFilterValue = string;
  export type CommandId = string;
  export interface CommandInvocation {
    /**
     * The command against which this invocation was requested.
     */
    CommandId?: CommandId;
    /**
     * The instance ID in which this invocation was requested.
     */
    InstanceId?: InstanceId;
    /**
     * The name of the invocation target. For Amazon EC2 instances this is the value for the aws:Name tag. For on-premises instances, this is the name of the instance.
     */
    InstanceName?: InstanceTagName;
    /**
     * User-specified information about the command, such as a brief description of what the command should do.
     */
    Comment?: Comment;
    /**
     * The document name that was requested for execution.
     */
    DocumentName?: DocumentName;
    /**
     * The SSM document version.
     */
    DocumentVersion?: DocumentVersion;
    /**
     * The time and date the request was sent to this instance.
     */
    RequestedDateTime?: DateTime;
    /**
     * Whether or not the invocation succeeded, failed, or is pending.
     */
    Status?: CommandInvocationStatus;
    /**
     * A detailed status of the command execution for each invocation (each instance targeted by the command). StatusDetails includes more information than Status because it includes states resulting from error and concurrency control parameters. StatusDetails can show different results than Status. For more information about these statuses, see Understanding Command Statuses in the AWS Systems Manager User Guide. StatusDetails can be one of the following values:   Pending: The command has not been sent to the instance.   In Progress: The command has been sent to the instance but has not reached a terminal state.   Success: The execution of the command or plugin was successfully completed. This is a terminal state.   Delivery Timed Out: The command was not delivered to the instance before the delivery timeout expired. Delivery timeouts do not count against the parent command's MaxErrors limit, but they do contribute to whether the parent command status is Success or Incomplete. This is a terminal state.   Execution Timed Out: Command execution started on the instance, but the execution was not complete before the execution timeout expired. Execution timeouts count against the MaxErrors limit of the parent command. This is a terminal state.   Failed: The command was not successful on the instance. For a plugin, this indicates that the result code was not zero. For a command invocation, this indicates that the result code for one or more plugins was not zero. Invocation failures count against the MaxErrors limit of the parent command. This is a terminal state.   Canceled: The command was terminated before it was completed. This is a terminal state.   Undeliverable: The command can't be delivered to the instance. The instance might not exist or might not be responding. Undeliverable invocations don't count against the parent command's MaxErrors limit and don't contribute to whether the parent command status is Success or Incomplete. This is a terminal state.   Terminated: The parent command exceeded its MaxErrors limit and subsequent command invocations were canceled by the system. This is a terminal state.  
     */
    StatusDetails?: StatusDetails;
    /**
     *  Gets the trace output sent by the agent. 
     */
    TraceOutput?: InvocationTraceOutput;
    /**
     * The URL to the plugin's StdOut file in Amazon S3, if the Amazon S3 bucket was defined for the parent command. For an invocation, StandardOutputUrl is populated if there is just one plugin defined for the command, and the Amazon S3 bucket was defined for the command.
     */
    StandardOutputUrl?: Url;
    /**
     * The URL to the plugin's StdErr file in Amazon S3, if the Amazon S3 bucket was defined for the parent command. For an invocation, StandardErrorUrl is populated if there is just one plugin defined for the command, and the Amazon S3 bucket was defined for the command.
     */
    StandardErrorUrl?: Url;
    CommandPlugins?: CommandPluginList;
    /**
     * The IAM service role that Run Command uses to act on your behalf when sending notifications about command status changes on a per instance basis.
     */
    ServiceRole?: ServiceRole;
    /**
     * Configurations for sending notifications about command status changes on a per instance basis.
     */
    NotificationConfig?: NotificationConfig;
    /**
     * CloudWatch Logs information where you want Systems Manager to send the command output.
     */
    CloudWatchOutputConfig?: CloudWatchOutputConfig;
  }
  export type CommandInvocationList = CommandInvocation[];
  export type CommandInvocationStatus = "Pending"|"InProgress"|"Delayed"|"Success"|"Cancelled"|"TimedOut"|"Failed"|"Cancelling"|string;
  export type CommandList = Command[];
  export type CommandMaxResults = number;
  export interface CommandPlugin {
    /**
     * The name of the plugin. Must be one of the following: aws:updateAgent, aws:domainjoin, aws:applications, aws:runPowerShellScript, aws:psmodule, aws:cloudWatch, aws:runShellScript, or aws:updateSSMAgent. 
     */
    Name?: CommandPluginName;
    /**
     * The status of this plugin. You can execute a document with multiple plugins.
     */
    Status?: CommandPluginStatus;
    /**
     * A detailed status of the plugin execution. StatusDetails includes more information than Status because it includes states resulting from error and concurrency control parameters. StatusDetails can show different results than Status. For more information about these statuses, see Understanding Command Statuses in the AWS Systems Manager User Guide. StatusDetails can be one of the following values:   Pending: The command has not been sent to the instance.   In Progress: The command has been sent to the instance but has not reached a terminal state.   Success: The execution of the command or plugin was successfully completed. This is a terminal state.   Delivery Timed Out: The command was not delivered to the instance before the delivery timeout expired. Delivery timeouts do not count against the parent command's MaxErrors limit, but they do contribute to whether the parent command status is Success or Incomplete. This is a terminal state.   Execution Timed Out: Command execution started on the instance, but the execution was not complete before the execution timeout expired. Execution timeouts count against the MaxErrors limit of the parent command. This is a terminal state.   Failed: The command was not successful on the instance. For a plugin, this indicates that the result code was not zero. For a command invocation, this indicates that the result code for one or more plugins was not zero. Invocation failures count against the MaxErrors limit of the parent command. This is a terminal state.   Canceled: The command was terminated before it was completed. This is a terminal state.   Undeliverable: The command can't be delivered to the instance. The instance might not exist, or it might not be responding. Undeliverable invocations don't count against the parent command's MaxErrors limit, and they don't contribute to whether the parent command status is Success or Incomplete. This is a terminal state.   Terminated: The parent command exceeded its MaxErrors limit and subsequent command invocations were canceled by the system. This is a terminal state.  
     */
    StatusDetails?: StatusDetails;
    /**
     * A numeric response code generated after executing the plugin. 
     */
    ResponseCode?: ResponseCode;
    /**
     * The time the plugin started executing. 
     */
    ResponseStartDateTime?: DateTime;
    /**
     * The time the plugin stopped executing. Could stop prematurely if, for example, a cancel command was sent. 
     */
    ResponseFinishDateTime?: DateTime;
    /**
     * Output of the plugin execution.
     */
    Output?: CommandPluginOutput;
    /**
     * The URL for the complete text written by the plugin to stdout in Amazon S3. If the Amazon S3 bucket for the command was not specified, then this string is empty.
     */
    StandardOutputUrl?: Url;
    /**
     * The URL for the complete text written by the plugin to stderr. If execution is not yet complete, then this string is empty.
     */
    StandardErrorUrl?: Url;
    /**
     * (Deprecated) You can no longer specify this parameter. The system ignores it. Instead, Systems Manager automatically determines the Amazon S3 bucket region.
     */
    OutputS3Region?: S3Region;
    /**
     * The S3 bucket where the responses to the command executions should be stored. This was requested when issuing the command. For example, in the following response:  test_folder/ab19cb99-a030-46dd-9dfc-8eSAMPLEPre-Fix/i-1234567876543/awsrunShellScript  test_folder is the name of the Amazon S3 bucket;  ab19cb99-a030-46dd-9dfc-8eSAMPLEPre-Fix is the name of the S3 prefix; i-1234567876543 is the instance ID; awsrunShellScript is the name of the plugin.
     */
    OutputS3BucketName?: S3BucketName;
    /**
     * The S3 directory path inside the bucket where the responses to the command executions should be stored. This was requested when issuing the command. For example, in the following response:  test_folder/ab19cb99-a030-46dd-9dfc-8eSAMPLEPre-Fix/i-1234567876543/awsrunShellScript  test_folder is the name of the Amazon S3 bucket;  ab19cb99-a030-46dd-9dfc-8eSAMPLEPre-Fix is the name of the S3 prefix; i-1234567876543 is the instance ID; awsrunShellScript is the name of the plugin.
     */
    OutputS3KeyPrefix?: S3KeyPrefix;
  }
  export type CommandPluginList = CommandPlugin[];
  export type CommandPluginName = string;
  export type CommandPluginOutput = string;
  export type CommandPluginStatus = "Pending"|"InProgress"|"Success"|"TimedOut"|"Cancelled"|"Failed"|string;
  export type CommandStatus = "Pending"|"InProgress"|"Success"|"Cancelled"|"Failed"|"TimedOut"|"Cancelling"|string;
  export type Comment = string;
  export type CompletedCount = number;
  export type ComplianceExecutionId = string;
  export interface ComplianceExecutionSummary {
    /**
     * The time the execution ran as a datetime object that is saved in the following format: yyyy-MM-dd'T'HH:mm:ss'Z'.
     */
    ExecutionTime: DateTime;
    /**
     * An ID created by the system when PutComplianceItems was called. For example, CommandID is a valid execution ID. You can use this ID in subsequent calls.
     */
    ExecutionId?: ComplianceExecutionId;
    /**
     * The type of execution. For example, Command is a valid execution type.
     */
    ExecutionType?: ComplianceExecutionType;
  }
  export type ComplianceExecutionType = string;
  export type ComplianceFilterValue = string;
  export interface ComplianceItem {
    /**
     * The compliance type. For example, Association (for a State Manager association), Patch, or Custom:string are all valid compliance types.
     */
    ComplianceType?: ComplianceTypeName;
    /**
     * The type of resource. ManagedInstance is currently the only supported resource type.
     */
    ResourceType?: ComplianceResourceType;
    /**
     * An ID for the resource. For a managed instance, this is the instance ID.
     */
    ResourceId?: ComplianceResourceId;
    /**
     * An ID for the compliance item. For example, if the compliance item is a Windows patch, the ID could be the number of the KB article; for example: KB4010320.
     */
    Id?: ComplianceItemId;
    /**
     * A title for the compliance item. For example, if the compliance item is a Windows patch, the title could be the title of the KB article for the patch; for example: Security Update for Active Directory Federation Services.
     */
    Title?: ComplianceItemTitle;
    /**
     * The status of the compliance item. An item is either COMPLIANT or NON_COMPLIANT.
     */
    Status?: ComplianceStatus;
    /**
     * The severity of the compliance status. Severity can be one of the following: Critical, High, Medium, Low, Informational, Unspecified.
     */
    Severity?: ComplianceSeverity;
    /**
     * A summary for the compliance item. The summary includes an execution ID, the execution type (for example, command), and the execution time.
     */
    ExecutionSummary?: ComplianceExecutionSummary;
    /**
     * A "Key": "Value" tag combination for the compliance item.
     */
    Details?: ComplianceItemDetails;
  }
  export type ComplianceItemContentHash = string;
  export type ComplianceItemDetails = {[key: string]: AttributeValue};
  export interface ComplianceItemEntry {
    /**
     * The compliance item ID. For example, if the compliance item is a Windows patch, the ID could be the number of the KB article.
     */
    Id?: ComplianceItemId;
    /**
     * The title of the compliance item. For example, if the compliance item is a Windows patch, the title could be the title of the KB article for the patch; for example: Security Update for Active Directory Federation Services. 
     */
    Title?: ComplianceItemTitle;
    /**
     * The severity of the compliance status. Severity can be one of the following: Critical, High, Medium, Low, Informational, Unspecified.
     */
    Severity: ComplianceSeverity;
    /**
     * The status of the compliance item. An item is either COMPLIANT or NON_COMPLIANT.
     */
    Status: ComplianceStatus;
    /**
     * A "Key": "Value" tag combination for the compliance item.
     */
    Details?: ComplianceItemDetails;
  }
  export type ComplianceItemEntryList = ComplianceItemEntry[];
  export type ComplianceItemId = string;
  export type ComplianceItemList = ComplianceItem[];
  export type ComplianceItemTitle = string;
  export type ComplianceQueryOperatorType = "EQUAL"|"NOT_EQUAL"|"BEGIN_WITH"|"LESS_THAN"|"GREATER_THAN"|string;
  export type ComplianceResourceId = string;
  export type ComplianceResourceIdList = ComplianceResourceId[];
  export type ComplianceResourceType = string;
  export type ComplianceResourceTypeList = ComplianceResourceType[];
  export type ComplianceSeverity = "CRITICAL"|"HIGH"|"MEDIUM"|"LOW"|"INFORMATIONAL"|"UNSPECIFIED"|string;
  export type ComplianceStatus = "COMPLIANT"|"NON_COMPLIANT"|string;
  export interface ComplianceStringFilter {
    /**
     * The name of the filter.
     */
    Key?: ComplianceStringFilterKey;
    /**
     * The value for which to search.
     */
    Values?: ComplianceStringFilterValueList;
    /**
     * The type of comparison that should be performed for the value: Equal, NotEqual, BeginWith, LessThan, or GreaterThan.
     */
    Type?: ComplianceQueryOperatorType;
  }
  export type ComplianceStringFilterKey = string;
  export type ComplianceStringFilterList = ComplianceStringFilter[];
  export type ComplianceStringFilterValueList = ComplianceFilterValue[];
  export type ComplianceSummaryCount = number;
  export interface ComplianceSummaryItem {
    /**
     * The type of compliance item. For example, the compliance type can be Association, Patch, or Custom:string.
     */
    ComplianceType?: ComplianceTypeName;
    /**
     * A list of COMPLIANT items for the specified compliance type.
     */
    CompliantSummary?: CompliantSummary;
    /**
     * A list of NON_COMPLIANT items for the specified compliance type.
     */
    NonCompliantSummary?: NonCompliantSummary;
  }
  export type ComplianceSummaryItemList = ComplianceSummaryItem[];
  export type ComplianceTypeName = string;
  export interface CompliantSummary {
    /**
     * The total number of resources that are compliant.
     */
    CompliantCount?: ComplianceSummaryCount;
    /**
     * A summary of the compliance severity by compliance type.
     */
    SeveritySummary?: SeveritySummary;
  }
  export type ComputerName = string;
  export type ConnectionStatus = "Connected"|"NotConnected"|string;
  export interface CreateActivationRequest {
    /**
     * A user-defined description of the resource that you want to register with Amazon EC2.   Do not enter personally identifiable information in this field. 
     */
    Description?: ActivationDescription;
    /**
     * The name of the registered, managed instance as it will appear in the Amazon EC2 console or when you use the AWS command line tools to list EC2 resources.  Do not enter personally identifiable information in this field. 
     */
    DefaultInstanceName?: DefaultInstanceName;
    /**
     * The Amazon Identity and Access Management (IAM) role that you want to assign to the managed instance. 
     */
    IamRole: IamRole;
    /**
     * Specify the maximum number of managed instances you want to register. The default value is 1 instance.
     */
    RegistrationLimit?: RegistrationLimit;
    /**
     * The date by which this activation request should expire. The default value is 24 hours.
     */
    ExpirationDate?: ExpirationDate;
  }
  export interface CreateActivationResult {
    /**
     * The ID number generated by the system when it processed the activation. The activation ID functions like a user name.
     */
    ActivationId?: ActivationId;
    /**
     * The code the system generates when it processes the activation. The activation code functions like a password to validate the activation ID. 
     */
    ActivationCode?: ActivationCode;
  }
  export interface CreateAssociationBatchRequest {
    /**
     * One or more associations.
     */
    Entries: CreateAssociationBatchRequestEntries;
  }
  export type CreateAssociationBatchRequestEntries = CreateAssociationBatchRequestEntry[];
  export interface CreateAssociationBatchRequestEntry {
    /**
     * The name of the configuration document. 
     */
    Name: DocumentName;
    /**
     * The ID of the instance. 
     */
    InstanceId?: InstanceId;
    /**
     * A description of the parameters for a document. 
     */
    Parameters?: Parameters;
    /**
     * The document version.
     */
    DocumentVersion?: DocumentVersion;
    /**
     * The instances targeted by the request.
     */
    Targets?: Targets;
    /**
     * A cron expression that specifies a schedule when the association runs.
     */
    ScheduleExpression?: ScheduleExpression;
    /**
     * An Amazon S3 bucket where you want to store the results of this request.
     */
    OutputLocation?: InstanceAssociationOutputLocation;
    /**
     * Specify a descriptive name for the association.
     */
    AssociationName?: AssociationName;
    /**
     * The number of errors that are allowed before the system stops sending requests to run the association on additional targets. You can specify either an absolute number of errors, for example 10, or a percentage of the target set, for example 10%. If you specify 3, for example, the system stops sending requests when the fourth error is received. If you specify 0, then the system stops sending requests after the first error is returned. If you run an association on 50 instances and set MaxError to 10%, then the system stops sending the request when the sixth error is received. Executions that are already running an association when MaxErrors is reached are allowed to complete, but some of these executions may fail as well. If you need to ensure that there won't be more than max-errors failed executions, set MaxConcurrency to 1 so that executions proceed one at a time.
     */
    MaxErrors?: MaxErrors;
    /**
     * The maximum number of targets allowed to run the association at the same time. You can specify a number, for example 10, or a percentage of the target set, for example 10%. The default value is 100%, which means all targets run the association at the same time. If a new instance starts and attempts to execute an association while Systems Manager is executing MaxConcurrency associations, the association is allowed to run. During the next association interval, the new instance will process its association within the limit specified for MaxConcurrency.
     */
    MaxConcurrency?: MaxConcurrency;
    /**
     * The severity level to assign to the association.
     */
    ComplianceSeverity?: AssociationComplianceSeverity;
  }
  export interface CreateAssociationBatchResult {
    /**
     * Information about the associations that succeeded.
     */
    Successful?: AssociationDescriptionList;
    /**
     * Information about the associations that failed.
     */
    Failed?: FailedCreateAssociationList;
  }
  export interface CreateAssociationRequest {
    /**
     * The name of the Systems Manager document.
     */
    Name: DocumentName;
    /**
     * The document version you want to associate with the target(s). Can be a specific version or the default version.
     */
    DocumentVersion?: DocumentVersion;
    /**
     * The instance ID.
     */
    InstanceId?: InstanceId;
    /**
     * The parameters for the documents runtime configuration. 
     */
    Parameters?: Parameters;
    /**
     * The targets (either instances or tags) for the association.
     */
    Targets?: Targets;
    /**
     * A cron expression when the association will be applied to the target(s).
     */
    ScheduleExpression?: ScheduleExpression;
    /**
     * An Amazon S3 bucket where you want to store the output details of the request.
     */
    OutputLocation?: InstanceAssociationOutputLocation;
    /**
     * Specify a descriptive name for the association.
     */
    AssociationName?: AssociationName;
    /**
     * The number of errors that are allowed before the system stops sending requests to run the association on additional targets. You can specify either an absolute number of errors, for example 10, or a percentage of the target set, for example 10%. If you specify 3, for example, the system stops sending requests when the fourth error is received. If you specify 0, then the system stops sending requests after the first error is returned. If you run an association on 50 instances and set MaxError to 10%, then the system stops sending the request when the sixth error is received. Executions that are already running an association when MaxErrors is reached are allowed to complete, but some of these executions may fail as well. If you need to ensure that there won't be more than max-errors failed executions, set MaxConcurrency to 1 so that executions proceed one at a time.
     */
    MaxErrors?: MaxErrors;
    /**
     * The maximum number of targets allowed to run the association at the same time. You can specify a number, for example 10, or a percentage of the target set, for example 10%. The default value is 100%, which means all targets run the association at the same time. If a new instance starts and attempts to execute an association while Systems Manager is executing MaxConcurrency associations, the association is allowed to run. During the next association interval, the new instance will process its association within the limit specified for MaxConcurrency.
     */
    MaxConcurrency?: MaxConcurrency;
    /**
     * The severity level to assign to the association.
     */
    ComplianceSeverity?: AssociationComplianceSeverity;
  }
  export interface CreateAssociationResult {
    /**
     * Information about the association.
     */
    AssociationDescription?: AssociationDescription;
  }
  export interface CreateDocumentRequest {
    /**
     * A valid JSON or YAML string.
     */
    Content: DocumentContent;
    /**
     * A name for the Systems Manager document.  Do not use the following to begin the names of documents you create. They are reserved by AWS for use as document prefixes:    aws     amazon     amzn    
     */
    Name: DocumentName;
    /**
     * The type of document to create. Valid document types include: Policy, Automation, and Command.
     */
    DocumentType?: DocumentType;
    /**
     * Specify the document format for the request. The document format can be either JSON or YAML. JSON is the default format.
     */
    DocumentFormat?: DocumentFormat;
    /**
     * Specify a target type to define the kinds of resources the document can run on. For example, to run a document on EC2 instances, specify the following value: /AWS::EC2::Instance. If you specify a value of '/' the document can run on all types of resources. If you don't specify a value, the document can't run on any resources. For a list of valid resource types, see AWS Resource Types Reference in the AWS CloudFormation User Guide. 
     */
    TargetType?: TargetType;
  }
  export interface CreateDocumentResult {
    /**
     * Information about the Systems Manager document.
     */
    DocumentDescription?: DocumentDescription;
  }
  export interface CreateMaintenanceWindowRequest {
    /**
     * The name of the Maintenance Window.
     */
    Name: MaintenanceWindowName;
    /**
     * An optional description for the Maintenance Window. We recommend specifying a description to help you organize your Maintenance Windows. 
     */
    Description?: MaintenanceWindowDescription;
    /**
     * The date and time, in ISO-8601 Extended format, for when you want the Maintenance Window to become active. StartDate allows you to delay activation of the Maintenance Window until the specified future date.
     */
    StartDate?: MaintenanceWindowStringDateTime;
    /**
     * The date and time, in ISO-8601 Extended format, for when you want the Maintenance Window to become inactive. EndDate allows you to set a date and time in the future when the Maintenance Window will no longer run.
     */
    EndDate?: MaintenanceWindowStringDateTime;
    /**
     * The schedule of the Maintenance Window in the form of a cron or rate expression.
     */
    Schedule: MaintenanceWindowSchedule;
    /**
     * The time zone that the scheduled Maintenance Window executions are based on, in Internet Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "etc/UTC", or "Asia/Seoul". For more information, see the Time Zone Database on the IANA website.
     */
    ScheduleTimezone?: MaintenanceWindowTimezone;
    /**
     * The duration of the Maintenance Window in hours.
     */
    Duration: MaintenanceWindowDurationHours;
    /**
     * The number of hours before the end of the Maintenance Window that Systems Manager stops scheduling new tasks for execution.
     */
    Cutoff: MaintenanceWindowCutoff;
    /**
     * Enables a Maintenance Window task to execute on managed instances, even if you have not registered those instances as targets. If enabled, then you must specify the unregistered instances (by instance ID) when you register a task with the Maintenance Window  If you don't enable this option, then you must specify previously-registered targets when you register a task with the Maintenance Window. 
     */
    AllowUnassociatedTargets: MaintenanceWindowAllowUnassociatedTargets;
    /**
     * User-provided idempotency token.
     */
    ClientToken?: ClientToken;
  }
  export interface CreateMaintenanceWindowResult {
    /**
     * The ID of the created Maintenance Window.
     */
    WindowId?: MaintenanceWindowId;
  }
  export interface CreatePatchBaselineRequest {
    /**
     * Defines the operating system the patch baseline applies to. The Default value is WINDOWS.
     */
    OperatingSystem?: OperatingSystem;
    /**
     * The name of the patch baseline.
     */
    Name: BaselineName;
    /**
     * A set of global filters used to exclude patches from the baseline.
     */
    GlobalFilters?: PatchFilterGroup;
    /**
     * A set of rules used to include patches in the baseline.
     */
    ApprovalRules?: PatchRuleGroup;
    /**
     * A list of explicitly approved patches for the baseline. For information about accepted formats for lists of approved patches and rejected patches, see Package Name Formats for Approved and Rejected Patch Lists in the AWS Systems Manager User Guide.
     */
    ApprovedPatches?: PatchIdList;
    /**
     * Defines the compliance level for approved patches. This means that if an approved patch is reported as missing, this is the severity of the compliance violation. The default value is UNSPECIFIED.
     */
    ApprovedPatchesComplianceLevel?: PatchComplianceLevel;
    /**
     * Indicates whether the list of approved patches includes non-security updates that should be applied to the instances. The default value is 'false'. Applies to Linux instances only.
     */
    ApprovedPatchesEnableNonSecurity?: Boolean;
    /**
     * A list of explicitly rejected patches for the baseline. For information about accepted formats for lists of approved patches and rejected patches, see Package Name Formats for Approved and Rejected Patch Lists in the AWS Systems Manager User Guide.
     */
    RejectedPatches?: PatchIdList;
    /**
     * The action for Patch Manager to take on patches included in the RejectedPackages list.    ALLOW_AS_DEPENDENCY: A package in the Rejected patches list is installed only if it is a dependency of another package. It is considered compliant with the patch baseline, and its status is reported as InstalledOther. This is the default action if no option is specified.    BLOCK: Packages in the RejectedPatches list, and packages that include them as dependencies, are not installed under any circumstances. If a package was installed before it was added to the Rejected patches list, it is considered non-compliant with the patch baseline, and its status is reported as InstalledRejected.  
     */
    RejectedPatchesAction?: PatchAction;
    /**
     * A description of the patch baseline.
     */
    Description?: BaselineDescription;
    /**
     * Information about the patches to use to update the instances, including target operating systems and source repositories. Applies to Linux instances only.
     */
    Sources?: PatchSourceList;
    /**
     * User-provided idempotency token.
     */
    ClientToken?: ClientToken;
  }
  export interface CreatePatchBaselineResult {
    /**
     * The ID of the created patch baseline.
     */
    BaselineId?: BaselineId;
  }
  export interface CreateResourceDataSyncRequest {
    /**
     * A name for the configuration.
     */
    SyncName: ResourceDataSyncName;
    /**
     * Amazon S3 configuration details for the sync.
     */
    S3Destination: ResourceDataSyncS3Destination;
  }
  export interface CreateResourceDataSyncResult {
  }
  export type CreatedDate = Date;
  export type DateTime = Date;
  export type DefaultBaseline = boolean;
  export type DefaultInstanceName = string;
  export interface DeleteActivationRequest {
    /**
     * The ID of the activation that you want to delete.
     */
    ActivationId: ActivationId;
  }
  export interface DeleteActivationResult {
  }
  export interface DeleteAssociationRequest {
    /**
     * The name of the Systems Manager document.
     */
    Name?: DocumentName;
    /**
     * The ID of the instance.
     */
    InstanceId?: InstanceId;
    /**
     * The association ID that you want to delete.
     */
    AssociationId?: AssociationId;
  }
  export interface DeleteAssociationResult {
  }
  export interface DeleteDocumentRequest {
    /**
     * The name of the document.
     */
    Name: DocumentName;
  }
  export interface DeleteDocumentResult {
  }
  export interface DeleteInventoryRequest {
    /**
     * The name of the custom inventory type for which you want to delete either all previously collected data, or the inventory type itself. 
     */
    TypeName: InventoryItemTypeName;
    /**
     * Use the SchemaDeleteOption to delete a custom inventory type (schema). If you don't choose this option, the system only deletes existing inventory data associated with the custom inventory type. Choose one of the following options: DisableSchema: If you choose this option, the system ignores all inventory data for the specified version, and any earlier versions. To enable this schema again, you must call the PutInventory action for a version greater than the disbled version. DeleteSchema: This option deletes the specified custom type from the Inventory service. You can recreate the schema later, if you want.
     */
    SchemaDeleteOption?: InventorySchemaDeleteOption;
    /**
     * Use this option to view a summary of the deletion request without deleting any data or the data type. This option is useful when you only want to understand what will be deleted. Once you validate that the data to be deleted is what you intend to delete, you can run the same command without specifying the DryRun option.
     */
    DryRun?: DryRun;
    /**
     * User-provided idempotency token.
     */
    ClientToken?: ClientToken;
  }
  export interface DeleteInventoryResult {
    /**
     * Every DeleteInventory action is assigned a unique ID. This option returns a unique ID. You can use this ID to query the status of a delete operation. This option is useful for ensuring that a delete operation has completed before you begin other actions. 
     */
    DeletionId?: InventoryDeletionId;
    /**
     * The name of the inventory data type specified in the request.
     */
    TypeName?: InventoryItemTypeName;
    /**
     * A summary of the delete operation. For more information about this summary, see Understanding the Delete Inventory Summary in the AWS Systems Manager User Guide.
     */
    DeletionSummary?: InventoryDeletionSummary;
  }
  export interface DeleteMaintenanceWindowRequest {
    /**
     * The ID of the Maintenance Window to delete.
     */
    WindowId: MaintenanceWindowId;
  }
  export interface DeleteMaintenanceWindowResult {
    /**
     * The ID of the deleted Maintenance Window.
     */
    WindowId?: MaintenanceWindowId;
  }
  export interface DeleteParameterRequest {
    /**
     * The name of the parameter to delete.
     */
    Name: PSParameterName;
  }
  export interface DeleteParameterResult {
  }
  export interface DeleteParametersRequest {
    /**
     * The names of the parameters to delete.
     */
    Names: ParameterNameList;
  }
  export interface DeleteParametersResult {
    /**
     * The names of the deleted parameters.
     */
    DeletedParameters?: ParameterNameList;
    /**
     * The names of parameters that weren't deleted because the parameters are not valid.
     */
    InvalidParameters?: ParameterNameList;
  }
  export interface DeletePatchBaselineRequest {
    /**
     * The ID of the patch baseline to delete.
     */
    BaselineId: BaselineId;
  }
  export interface DeletePatchBaselineResult {
    /**
     * The ID of the deleted patch baseline.
     */
    BaselineId?: BaselineId;
  }
  export interface DeleteResourceDataSyncRequest {
    /**
     * The name of the configuration to delete.
     */
    SyncName: ResourceDataSyncName;
  }
  export interface DeleteResourceDataSyncResult {
  }
  export type DeliveryTimedOutCount = number;
  export interface DeregisterManagedInstanceRequest {
    /**
     * The ID assigned to the managed instance when you registered it using the activation process. 
     */
    InstanceId: ManagedInstanceId;
  }
  export interface DeregisterManagedInstanceResult {
  }
  export interface DeregisterPatchBaselineForPatchGroupRequest {
    /**
     * The ID of the patch baseline to deregister the patch group from.
     */
    BaselineId: BaselineId;
    /**
     * The name of the patch group that should be deregistered from the patch baseline.
     */
    PatchGroup: PatchGroup;
  }
  export interface DeregisterPatchBaselineForPatchGroupResult {
    /**
     * The ID of the patch baseline the patch group was deregistered from.
     */
    BaselineId?: BaselineId;
    /**
     * The name of the patch group deregistered from the patch baseline.
     */
    PatchGroup?: PatchGroup;
  }
  export interface DeregisterTargetFromMaintenanceWindowRequest {
    /**
     * The ID of the Maintenance Window the target should be removed from.
     */
    WindowId: MaintenanceWindowId;
    /**
     * The ID of the target definition to remove.
     */
    WindowTargetId: MaintenanceWindowTargetId;
    /**
     * The system checks if the target is being referenced by a task. If the target is being referenced, the system returns an error and does not deregister the target from the Maintenance Window.
     */
    Safe?: Boolean;
  }
  export interface DeregisterTargetFromMaintenanceWindowResult {
    /**
     * The ID of the Maintenance Window the target was removed from.
     */
    WindowId?: MaintenanceWindowId;
    /**
     * The ID of the removed target definition.
     */
    WindowTargetId?: MaintenanceWindowTargetId;
  }
  export interface DeregisterTaskFromMaintenanceWindowRequest {
    /**
     * The ID of the Maintenance Window the task should be removed from.
     */
    WindowId: MaintenanceWindowId;
    /**
     * The ID of the task to remove from the Maintenance Window.
     */
    WindowTaskId: MaintenanceWindowTaskId;
  }
  export interface DeregisterTaskFromMaintenanceWindowResult {
    /**
     * The ID of the Maintenance Window the task was removed from.
     */
    WindowId?: MaintenanceWindowId;
    /**
     * The ID of the task removed from the Maintenance Window.
     */
    WindowTaskId?: MaintenanceWindowTaskId;
  }
  export interface DescribeActivationsFilter {
    /**
     * The name of the filter.
     */
    FilterKey?: DescribeActivationsFilterKeys;
    /**
     * The filter values.
     */
    FilterValues?: StringList;
  }
  export type DescribeActivationsFilterKeys = "ActivationIds"|"DefaultInstanceName"|"IamRole"|string;
  export type DescribeActivationsFilterList = DescribeActivationsFilter[];
  export interface DescribeActivationsRequest {
    /**
     * A filter to view information about your activations.
     */
    Filters?: DescribeActivationsFilterList;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaxResults;
    /**
     * A token to start the list. Use this token to get the next set of results. 
     */
    NextToken?: NextToken;
  }
  export interface DescribeActivationsResult {
    /**
     * A list of activations for your AWS account.
     */
    ActivationList?: ActivationList;
    /**
     * The token for the next set of items to return. Use this token to get the next set of results. 
     */
    NextToken?: NextToken;
  }
  export interface DescribeAssociationExecutionTargetsRequest {
    /**
     * The association ID that includes the execution for which you want to view details.
     */
    AssociationId: AssociationId;
    /**
     * The execution ID for which you want to view details.
     */
    ExecutionId: AssociationExecutionId;
    /**
     * Filters for the request. You can specify the following filters and values. Status (EQUAL) ResourceId (EQUAL) ResourceType (EQUAL)
     */
    Filters?: AssociationExecutionTargetsFilterList;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaxResults;
    /**
     * A token to start the list. Use this token to get the next set of results. 
     */
    NextToken?: NextToken;
  }
  export interface DescribeAssociationExecutionTargetsResult {
    /**
     * Information about the execution.
     */
    AssociationExecutionTargets?: AssociationExecutionTargetsList;
    /**
     * The token for the next set of items to return. Use this token to get the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface DescribeAssociationExecutionsRequest {
    /**
     * The association ID for which you want to view execution history details.
     */
    AssociationId: AssociationId;
    /**
     * Filters for the request. You can specify the following filters and values. ExecutionId (EQUAL) Status (EQUAL) CreatedTime (EQUAL, GREATER_THAN, LESS_THAN)
     */
    Filters?: AssociationExecutionFilterList;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaxResults;
    /**
     * A token to start the list. Use this token to get the next set of results. 
     */
    NextToken?: NextToken;
  }
  export interface DescribeAssociationExecutionsResult {
    /**
     * A list of the executions for the specified association ID.
     */
    AssociationExecutions?: AssociationExecutionsList;
    /**
     * The token for the next set of items to return. Use this token to get the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface DescribeAssociationRequest {
    /**
     * The name of the Systems Manager document.
     */
    Name?: DocumentName;
    /**
     * The instance ID.
     */
    InstanceId?: InstanceId;
    /**
     * The association ID for which you want information.
     */
    AssociationId?: AssociationId;
    /**
     * Specify the association version to retrieve. To view the latest version, either specify $LATEST for this parameter, or omit this parameter. To view a list of all associations for an instance, use ListInstanceAssociations. To get a list of versions for a specific association, use ListAssociationVersions. 
     */
    AssociationVersion?: AssociationVersion;
  }
  export interface DescribeAssociationResult {
    /**
     * Information about the association.
     */
    AssociationDescription?: AssociationDescription;
  }
  export interface DescribeAutomationExecutionsRequest {
    /**
     * Filters used to limit the scope of executions that are requested.
     */
    Filters?: AutomationExecutionFilterList;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface DescribeAutomationExecutionsResult {
    /**
     * The list of details about each automation execution which has occurred which matches the filter specification, if any.
     */
    AutomationExecutionMetadataList?: AutomationExecutionMetadataList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface DescribeAutomationStepExecutionsRequest {
    /**
     * The Automation execution ID for which you want step execution descriptions.
     */
    AutomationExecutionId: AutomationExecutionId;
    /**
     * One or more filters to limit the number of step executions returned by the request.
     */
    Filters?: StepExecutionFilterList;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaxResults;
    /**
     * A boolean that indicates whether to list step executions in reverse order by start time. The default value is false.
     */
    ReverseOrder?: Boolean;
  }
  export interface DescribeAutomationStepExecutionsResult {
    /**
     * A list of details about the current state of all steps that make up an execution.
     */
    StepExecutions?: StepExecutionList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface DescribeAvailablePatchesRequest {
    /**
     * Filters used to scope down the returned patches.
     */
    Filters?: PatchOrchestratorFilterList;
    /**
     * The maximum number of patches to return (per page).
     */
    MaxResults?: PatchBaselineMaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface DescribeAvailablePatchesResult {
    /**
     * An array of patches. Each entry in the array is a patch structure.
     */
    Patches?: PatchList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface DescribeDocumentPermissionRequest {
    /**
     * The name of the document for which you are the owner.
     */
    Name: DocumentName;
    /**
     * The permission type for the document. The permission type can be Share.
     */
    PermissionType: DocumentPermissionType;
  }
  export interface DescribeDocumentPermissionResponse {
    /**
     * The account IDs that have permission to use this document. The ID can be either an AWS account or All.
     */
    AccountIds?: AccountIdList;
  }
  export interface DescribeDocumentRequest {
    /**
     * The name of the Systems Manager document.
     */
    Name: DocumentARN;
    /**
     * The document version for which you want information. Can be a specific version or the default version.
     */
    DocumentVersion?: DocumentVersion;
  }
  export interface DescribeDocumentResult {
    /**
     * Information about the Systems Manager document.
     */
    Document?: DocumentDescription;
  }
  export interface DescribeEffectiveInstanceAssociationsRequest {
    /**
     * The instance ID for which you want to view all associations.
     */
    InstanceId: InstanceId;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: EffectiveInstanceAssociationMaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface DescribeEffectiveInstanceAssociationsResult {
    /**
     * The associations for the requested instance.
     */
    Associations?: InstanceAssociationList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface DescribeEffectivePatchesForPatchBaselineRequest {
    /**
     * The ID of the patch baseline to retrieve the effective patches for.
     */
    BaselineId: BaselineId;
    /**
     * The maximum number of patches to return (per page).
     */
    MaxResults?: PatchBaselineMaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface DescribeEffectivePatchesForPatchBaselineResult {
    /**
     * An array of patches and patch status.
     */
    EffectivePatches?: EffectivePatchList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface DescribeInstanceAssociationsStatusRequest {
    /**
     * The instance IDs for which you want association status information.
     */
    InstanceId: InstanceId;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface DescribeInstanceAssociationsStatusResult {
    /**
     * Status information about the association.
     */
    InstanceAssociationStatusInfos?: InstanceAssociationStatusInfos;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface DescribeInstanceInformationRequest {
    /**
     * This is a legacy method. We recommend that you don't use this method. Instead, use the InstanceInformationFilter action. The InstanceInformationFilter action enables you to return instance information by using tags that are specified as a key-value mapping.  If you do use this method, then you can't use the InstanceInformationFilter action. Using this method and the InstanceInformationFilter action causes an exception error. 
     */
    InstanceInformationFilterList?: InstanceInformationFilterList;
    /**
     * One or more filters. Use a filter to return a more specific list of instances. You can filter on Amazon EC2 tag. Specify tags by using a key-value mapping.
     */
    Filters?: InstanceInformationStringFilterList;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results. 
     */
    MaxResults?: MaxResultsEC2Compatible;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface DescribeInstanceInformationResult {
    /**
     * The instance information list.
     */
    InstanceInformationList?: InstanceInformationList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty. 
     */
    NextToken?: NextToken;
  }
  export interface DescribeInstancePatchStatesForPatchGroupRequest {
    /**
     * The name of the patch group for which the patch state information should be retrieved.
     */
    PatchGroup: PatchGroup;
    /**
     * Each entry in the array is a structure containing: Key (string between 1 and 200 characters)  Values (array containing a single string)  Type (string "Equal", "NotEqual", "LessThan", "GreaterThan")
     */
    Filters?: InstancePatchStateFilterList;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
    /**
     * The maximum number of patches to return (per page).
     */
    MaxResults?: PatchComplianceMaxResults;
  }
  export interface DescribeInstancePatchStatesForPatchGroupResult {
    /**
     * The high-level patch state for the requested instances. 
     */
    InstancePatchStates?: InstancePatchStatesList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface DescribeInstancePatchStatesRequest {
    /**
     * The ID of the instance whose patch state information should be retrieved.
     */
    InstanceIds: InstanceIdList;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
    /**
     * The maximum number of instances to return (per page).
     */
    MaxResults?: PatchComplianceMaxResults;
  }
  export interface DescribeInstancePatchStatesResult {
    /**
     * The high-level patch state for the requested instances.
     */
    InstancePatchStates?: InstancePatchStateList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface DescribeInstancePatchesRequest {
    /**
     * The ID of the instance whose patch state information should be retrieved.
     */
    InstanceId: InstanceId;
    /**
     * Each entry in the array is a structure containing: Key (string, between 1 and 128 characters) Values (array of strings, each string between 1 and 256 characters)
     */
    Filters?: PatchOrchestratorFilterList;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
    /**
     * The maximum number of patches to return (per page).
     */
    MaxResults?: PatchComplianceMaxResults;
  }
  export interface DescribeInstancePatchesResult {
    /**
     * Each entry in the array is a structure containing: Title (string) KBId (string) Classification (string) Severity (string) State (string, such as "INSTALLED" or "FAILED") InstalledTime (DateTime) InstalledBy (string)
     */
    Patches?: PatchComplianceDataList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface DescribeInventoryDeletionsRequest {
    /**
     * Specify the delete inventory ID for which you want information. This ID was returned by the DeleteInventory action.
     */
    DeletionId?: InventoryDeletionId;
    /**
     * A token to start the list. Use this token to get the next set of results. 
     */
    NextToken?: NextToken;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaxResults;
  }
  export interface DescribeInventoryDeletionsResult {
    /**
     * A list of status items for deleted inventory.
     */
    InventoryDeletions?: InventoryDeletionsList;
    /**
     * The token for the next set of items to return. Use this token to get the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface DescribeMaintenanceWindowExecutionTaskInvocationsRequest {
    /**
     * The ID of the Maintenance Window execution the task is part of.
     */
    WindowExecutionId: MaintenanceWindowExecutionId;
    /**
     * The ID of the specific task in the Maintenance Window task that should be retrieved.
     */
    TaskId: MaintenanceWindowExecutionTaskId;
    /**
     * Optional filters used to scope down the returned task invocations. The supported filter key is STATUS with the corresponding values PENDING, IN_PROGRESS, SUCCESS, FAILED, TIMED_OUT, CANCELLING, and CANCELLED.
     */
    Filters?: MaintenanceWindowFilterList;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaintenanceWindowMaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface DescribeMaintenanceWindowExecutionTaskInvocationsResult {
    /**
     * Information about the task invocation results per invocation.
     */
    WindowExecutionTaskInvocationIdentities?: MaintenanceWindowExecutionTaskInvocationIdentityList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface DescribeMaintenanceWindowExecutionTasksRequest {
    /**
     * The ID of the Maintenance Window execution whose task executions should be retrieved.
     */
    WindowExecutionId: MaintenanceWindowExecutionId;
    /**
     * Optional filters used to scope down the returned tasks. The supported filter key is STATUS with the corresponding values PENDING, IN_PROGRESS, SUCCESS, FAILED, TIMED_OUT, CANCELLING, and CANCELLED. 
     */
    Filters?: MaintenanceWindowFilterList;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaintenanceWindowMaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface DescribeMaintenanceWindowExecutionTasksResult {
    /**
     * Information about the task executions.
     */
    WindowExecutionTaskIdentities?: MaintenanceWindowExecutionTaskIdentityList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface DescribeMaintenanceWindowExecutionsRequest {
    /**
     * The ID of the Maintenance Window whose executions should be retrieved.
     */
    WindowId: MaintenanceWindowId;
    /**
     * Each entry in the array is a structure containing: Key (string, between 1 and 128 characters) Values (array of strings, each string is between 1 and 256 characters) The supported Keys are ExecutedBefore and ExecutedAfter with the value being a date/time string such as 2016-11-04T05:00:00Z.
     */
    Filters?: MaintenanceWindowFilterList;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaintenanceWindowMaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface DescribeMaintenanceWindowExecutionsResult {
    /**
     * Information about the Maintenance Windows execution.
     */
    WindowExecutions?: MaintenanceWindowExecutionList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface DescribeMaintenanceWindowScheduleRequest {
    /**
     * The ID of the Maintenance Window to retrieve information about.
     */
    WindowId?: MaintenanceWindowId;
    /**
     * The instance ID or key/value pair to retrieve information about.
     */
    Targets?: Targets;
    /**
     * The type of resource you want to retrieve information about. For example, "INSTANCE".
     */
    ResourceType?: MaintenanceWindowResourceType;
    /**
     * Filters used to limit the range of results. For example, you can limit Maintenance Window executions to only those scheduled before or after a certain date and time.
     */
    Filters?: PatchOrchestratorFilterList;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaintenanceWindowSearchMaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface DescribeMaintenanceWindowScheduleResult {
    /**
     * Information about Maintenance Window executions scheduled for the specified time range.
     */
    ScheduledWindowExecutions?: ScheduledWindowExecutionList;
    /**
     * The token for the next set of items to return. (You use this token in the next call.)
     */
    NextToken?: NextToken;
  }
  export interface DescribeMaintenanceWindowTargetsRequest {
    /**
     * The ID of the Maintenance Window whose targets should be retrieved.
     */
    WindowId: MaintenanceWindowId;
    /**
     * Optional filters that can be used to narrow down the scope of the returned window targets. The supported filter keys are Type, WindowTargetId and OwnerInformation.
     */
    Filters?: MaintenanceWindowFilterList;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaintenanceWindowMaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface DescribeMaintenanceWindowTargetsResult {
    /**
     * Information about the targets in the Maintenance Window.
     */
    Targets?: MaintenanceWindowTargetList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface DescribeMaintenanceWindowTasksRequest {
    /**
     * The ID of the Maintenance Window whose tasks should be retrieved.
     */
    WindowId: MaintenanceWindowId;
    /**
     * Optional filters used to narrow down the scope of the returned tasks. The supported filter keys are WindowTaskId, TaskArn, Priority, and TaskType.
     */
    Filters?: MaintenanceWindowFilterList;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaintenanceWindowMaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface DescribeMaintenanceWindowTasksResult {
    /**
     * Information about the tasks in the Maintenance Window.
     */
    Tasks?: MaintenanceWindowTaskList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface DescribeMaintenanceWindowsForTargetRequest {
    /**
     * The instance ID or key/value pair to retrieve information about.
     */
    Targets: Targets;
    /**
     * The type of resource you want to retrieve information about. For example, "INSTANCE".
     */
    ResourceType: MaintenanceWindowResourceType;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaintenanceWindowSearchMaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface DescribeMaintenanceWindowsForTargetResult {
    /**
     * Information about the Maintenance Window targets and tasks an instance is associated with.
     */
    WindowIdentities?: MaintenanceWindowsForTargetList;
    /**
     * The token for the next set of items to return. (You use this token in the next call.)
     */
    NextToken?: NextToken;
  }
  export interface DescribeMaintenanceWindowsRequest {
    /**
     * Optional filters used to narrow down the scope of the returned Maintenance Windows. Supported filter keys are Name and Enabled.
     */
    Filters?: MaintenanceWindowFilterList;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaintenanceWindowMaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface DescribeMaintenanceWindowsResult {
    /**
     * Information about the Maintenance Windows.
     */
    WindowIdentities?: MaintenanceWindowIdentityList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface DescribeParametersRequest {
    /**
     * One or more filters. Use a filter to return a more specific list of results.
     */
    Filters?: ParametersFilterList;
    /**
     * Filters to limit the request results.
     */
    ParameterFilters?: ParameterStringFilterList;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface DescribeParametersResult {
    /**
     * Parameters returned by the request.
     */
    Parameters?: ParameterMetadataList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface DescribePatchBaselinesRequest {
    /**
     * Each element in the array is a structure containing:  Key: (string, "NAME_PREFIX" or "OWNER") Value: (array of strings, exactly 1 entry, between 1 and 255 characters)
     */
    Filters?: PatchOrchestratorFilterList;
    /**
     * The maximum number of patch baselines to return (per page).
     */
    MaxResults?: PatchBaselineMaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface DescribePatchBaselinesResult {
    /**
     * An array of PatchBaselineIdentity elements.
     */
    BaselineIdentities?: PatchBaselineIdentityList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface DescribePatchGroupStateRequest {
    /**
     * The name of the patch group whose patch snapshot should be retrieved.
     */
    PatchGroup: PatchGroup;
  }
  export interface DescribePatchGroupStateResult {
    /**
     * The number of instances in the patch group.
     */
    Instances?: Integer;
    /**
     * The number of instances with installed patches.
     */
    InstancesWithInstalledPatches?: Integer;
    /**
     * The number of instances with patches installed that aren't defined in the patch baseline.
     */
    InstancesWithInstalledOtherPatches?: Integer;
    /**
     * The number of instances with patches installed that are specified in a RejectedPatches list. Patches with a status of INSTALLED_REJECTED were typically installed before they were added to a RejectedPatches list.  If ALLOW_AS_DEPENDENCY is the specified option for RejectedPatchesAction, the value of InstancesWithInstalledRejectedPatches will always be 0 (zero). 
     */
    InstancesWithInstalledRejectedPatches?: InstancesCount;
    /**
     * The number of instances with missing patches from the patch baseline.
     */
    InstancesWithMissingPatches?: Integer;
    /**
     * The number of instances with patches from the patch baseline that failed to install.
     */
    InstancesWithFailedPatches?: Integer;
    /**
     * The number of instances with patches that aren't applicable.
     */
    InstancesWithNotApplicablePatches?: Integer;
  }
  export interface DescribePatchGroupsRequest {
    /**
     * The maximum number of patch groups to return (per page).
     */
    MaxResults?: PatchBaselineMaxResults;
    /**
     * One or more filters. Use a filter to return a more specific list of results.
     */
    Filters?: PatchOrchestratorFilterList;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface DescribePatchGroupsResult {
    /**
     * Each entry in the array contains: PatchGroup: string (between 1 and 256 characters, Regex: ^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$) PatchBaselineIdentity: A PatchBaselineIdentity element. 
     */
    Mappings?: PatchGroupPatchBaselineMappingList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface DescribeSessionsRequest {
    /**
     * The session status to retrieve a list of sessions for. For example, "Active".
     */
    State: SessionState;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: SessionMaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
    /**
     * One or more filters to limit the type of sessions returned by the request.
     */
    Filters?: SessionFilterList;
  }
  export interface DescribeSessionsResponse {
    /**
     * A list of sessions meeting the request parameters.
     */
    Sessions?: SessionList;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export type DescriptionInDocument = string;
  export type DocumentARN = string;
  export type DocumentContent = string;
  export interface DocumentDefaultVersionDescription {
    /**
     * The name of the document.
     */
    Name?: DocumentName;
    /**
     * The default version of the document.
     */
    DefaultVersion?: DocumentVersion;
  }
  export interface DocumentDescription {
    /**
     * The SHA1 hash of the document, which you can use for verification.
     */
    Sha1?: DocumentSha1;
    /**
     * The Sha256 or Sha1 hash created by the system when the document was created.   Sha1 hashes have been deprecated. 
     */
    Hash?: DocumentHash;
    /**
     * Sha256 or Sha1.  Sha1 hashes have been deprecated. 
     */
    HashType?: DocumentHashType;
    /**
     * The name of the Systems Manager document.
     */
    Name?: DocumentARN;
    /**
     * The AWS user account that created the document.
     */
    Owner?: DocumentOwner;
    /**
     * The date when the document was created.
     */
    CreatedDate?: DateTime;
    /**
     * The status of the Systems Manager document.
     */
    Status?: DocumentStatus;
    /**
     * The document version.
     */
    DocumentVersion?: DocumentVersion;
    /**
     * A description of the document. 
     */
    Description?: DescriptionInDocument;
    /**
     * A description of the parameters for a document.
     */
    Parameters?: DocumentParameterList;
    /**
     * The list of OS platforms compatible with this Systems Manager document. 
     */
    PlatformTypes?: PlatformTypeList;
    /**
     * The type of document. 
     */
    DocumentType?: DocumentType;
    /**
     * The schema version.
     */
    SchemaVersion?: DocumentSchemaVersion;
    /**
     * The latest version of the document.
     */
    LatestVersion?: DocumentVersion;
    /**
     * The default version.
     */
    DefaultVersion?: DocumentVersion;
    /**
     * The document format, either JSON or YAML.
     */
    DocumentFormat?: DocumentFormat;
    /**
     * The target type which defines the kinds of resources the document can run on. For example, /AWS::EC2::Instance. For a list of valid resource types, see AWS Resource Types Reference in the AWS CloudFormation User Guide. 
     */
    TargetType?: TargetType;
    /**
     * The tags, or metadata, that have been applied to the document.
     */
    Tags?: TagList;
  }
  export interface DocumentFilter {
    /**
     * The name of the filter.
     */
    key: DocumentFilterKey;
    /**
     * The value of the filter.
     */
    value: DocumentFilterValue;
  }
  export type DocumentFilterKey = "Name"|"Owner"|"PlatformTypes"|"DocumentType"|string;
  export type DocumentFilterList = DocumentFilter[];
  export type DocumentFilterValue = string;
  export type DocumentFormat = "YAML"|"JSON"|string;
  export type DocumentHash = string;
  export type DocumentHashType = "Sha256"|"Sha1"|string;
  export interface DocumentIdentifier {
    /**
     * The name of the Systems Manager document.
     */
    Name?: DocumentARN;
    /**
     * The AWS user account that created the document.
     */
    Owner?: DocumentOwner;
    /**
     * The operating system platform. 
     */
    PlatformTypes?: PlatformTypeList;
    /**
     * The document version.
     */
    DocumentVersion?: DocumentVersion;
    /**
     * The document type.
     */
    DocumentType?: DocumentType;
    /**
     * The schema version.
     */
    SchemaVersion?: DocumentSchemaVersion;
    /**
     * The document format, either JSON or YAML.
     */
    DocumentFormat?: DocumentFormat;
    /**
     * The target type which defines the kinds of resources the document can run on. For example, /AWS::EC2::Instance. For a list of valid resource types, see AWS Resource Types Reference in the AWS CloudFormation User Guide. 
     */
    TargetType?: TargetType;
    /**
     * The tags, or metadata, that have been applied to the document.
     */
    Tags?: TagList;
  }
  export type DocumentIdentifierList = DocumentIdentifier[];
  export interface DocumentKeyValuesFilter {
    /**
     * The name of the filter key.
     */
    Key?: DocumentKeyValuesFilterKey;
    /**
     * The value for the filter key.
     */
    Values?: DocumentKeyValuesFilterValues;
  }
  export type DocumentKeyValuesFilterKey = string;
  export type DocumentKeyValuesFilterList = DocumentKeyValuesFilter[];
  export type DocumentKeyValuesFilterValue = string;
  export type DocumentKeyValuesFilterValues = DocumentKeyValuesFilterValue[];
  export type DocumentName = string;
  export type DocumentOwner = string;
  export interface DocumentParameter {
    /**
     * The name of the parameter.
     */
    Name?: DocumentParameterName;
    /**
     * The type of parameter. The type can be either String or StringList.
     */
    Type?: DocumentParameterType;
    /**
     * A description of what the parameter does, how to use it, the default value, and whether or not the parameter is optional.
     */
    Description?: DocumentParameterDescrption;
    /**
     * If specified, the default values for the parameters. Parameters without a default value are required. Parameters with a default value are optional.
     */
    DefaultValue?: DocumentParameterDefaultValue;
  }
  export type DocumentParameterDefaultValue = string;
  export type DocumentParameterDescrption = string;
  export type DocumentParameterList = DocumentParameter[];
  export type DocumentParameterName = string;
  export type DocumentParameterType = "String"|"StringList"|string;
  export type DocumentPermissionType = "Share"|string;
  export type DocumentSchemaVersion = string;
  export type DocumentSha1 = string;
  export type DocumentStatus = "Creating"|"Active"|"Updating"|"Deleting"|string;
  export type DocumentType = "Command"|"Policy"|"Automation"|"Session"|string;
  export type DocumentVersion = string;
  export interface DocumentVersionInfo {
    /**
     * The document name.
     */
    Name?: DocumentName;
    /**
     * The document version.
     */
    DocumentVersion?: DocumentVersion;
    /**
     * The date the document was created.
     */
    CreatedDate?: DateTime;
    /**
     * An identifier for the default version of the document.
     */
    IsDefaultVersion?: Boolean;
    /**
     * The document format, either JSON or YAML.
     */
    DocumentFormat?: DocumentFormat;
  }
  export type DocumentVersionList = DocumentVersionInfo[];
  export type DocumentVersionNumber = string;
  export type DryRun = boolean;
  export type EffectiveInstanceAssociationMaxResults = number;
  export interface EffectivePatch {
    /**
     * Provides metadata for a patch, including information such as the KB ID, severity, classification and a URL for where more information can be obtained about the patch.
     */
    Patch?: Patch;
    /**
     * The status of the patch in a patch baseline. This includes information about whether the patch is currently approved, due to be approved by a rule, explicitly approved, or explicitly rejected and the date the patch was or will be approved.
     */
    PatchStatus?: PatchStatus;
  }
  export type EffectivePatchList = EffectivePatch[];
  export type ErrorCount = number;
  export type ExecutionMode = "Auto"|"Interactive"|string;
  export type ExpirationDate = Date;
  export interface FailedCreateAssociation {
    /**
     * The association.
     */
    Entry?: CreateAssociationBatchRequestEntry;
    /**
     * A description of the failure.
     */
    Message?: BatchErrorMessage;
    /**
     * The source of the failure.
     */
    Fault?: Fault;
  }
  export type FailedCreateAssociationList = FailedCreateAssociation[];
  export interface FailureDetails {
    /**
     * The stage of the Automation execution when the failure occurred. The stages include the following: InputValidation, PreVerification, Invocation, PostVerification.
     */
    FailureStage?: String;
    /**
     * The type of Automation failure. Failure types include the following: Action, Permission, Throttling, Verification, Internal.
     */
    FailureType?: String;
    /**
     * Detailed information about the Automation step failure.
     */
    Details?: AutomationParameterMap;
  }
  export type Fault = "Client"|"Server"|"Unknown"|string;
  export interface GetAutomationExecutionRequest {
    /**
     * The unique identifier for an existing automation execution to examine. The execution ID is returned by StartAutomationExecution when the execution of an Automation document is initiated.
     */
    AutomationExecutionId: AutomationExecutionId;
  }
  export interface GetAutomationExecutionResult {
    /**
     * Detailed information about the current state of an automation execution.
     */
    AutomationExecution?: AutomationExecution;
  }
  export interface GetCommandInvocationRequest {
    /**
     * (Required) The parent command ID of the invocation plugin.
     */
    CommandId: CommandId;
    /**
     * (Required) The ID of the managed instance targeted by the command. A managed instance can be an Amazon EC2 instance or an instance in your hybrid environment that is configured for Systems Manager.
     */
    InstanceId: InstanceId;
    /**
     * (Optional) The name of the plugin for which you want detailed results. If the document contains only one plugin, the name can be omitted and the details will be returned.
     */
    PluginName?: CommandPluginName;
  }
  export interface GetCommandInvocationResult {
    /**
     * The parent command ID of the invocation plugin.
     */
    CommandId?: CommandId;
    /**
     * The ID of the managed instance targeted by the command. A managed instance can be an Amazon EC2 instance or an instance in your hybrid environment that is configured for Systems Manager.
     */
    InstanceId?: InstanceId;
    /**
     * The comment text for the command.
     */
    Comment?: Comment;
    /**
     * The name of the document that was executed. For example, AWS-RunShellScript.
     */
    DocumentName?: DocumentName;
    /**
     * The SSM document version used in the request.
     */
    DocumentVersion?: DocumentVersion;
    /**
     * The name of the plugin for which you want detailed results. For example, aws:RunShellScript is a plugin.
     */
    PluginName?: CommandPluginName;
    /**
     * The error level response code for the plugin script. If the response code is -1, then the command has not started executing on the instance, or it was not received by the instance.
     */
    ResponseCode?: ResponseCode;
    /**
     * The date and time the plugin started executing. Date and time are written in ISO 8601 format. For example, June 7, 2017 is represented as 2017-06-7. The following sample AWS CLI command uses the InvokedBefore filter.  aws ssm list-commands --filters key=InvokedBefore,value=2017-06-07T00:00:00Z  If the plugin has not started to execute, the string is empty.
     */
    ExecutionStartDateTime?: StringDateTime;
    /**
     * Duration since ExecutionStartDateTime.
     */
    ExecutionElapsedTime?: StringDateTime;
    /**
     * The date and time the plugin was finished executing. Date and time are written in ISO 8601 format. For example, June 7, 2017 is represented as 2017-06-7. The following sample AWS CLI command uses the InvokedAfter filter.  aws ssm list-commands --filters key=InvokedAfter,value=2017-06-07T00:00:00Z  If the plugin has not started to execute, the string is empty.
     */
    ExecutionEndDateTime?: StringDateTime;
    /**
     * The status of this invocation plugin. This status can be different than StatusDetails.
     */
    Status?: CommandInvocationStatus;
    /**
     * A detailed status of the command execution for an invocation. StatusDetails includes more information than Status because it includes states resulting from error and concurrency control parameters. StatusDetails can show different results than Status. For more information about these statuses, see Understanding Command Statuses in the AWS Systems Manager User Guide. StatusDetails can be one of the following values:   Pending: The command has not been sent to the instance.   In Progress: The command has been sent to the instance but has not reached a terminal state.   Delayed: The system attempted to send the command to the target, but the target was not available. The instance might not be available because of network issues, the instance was stopped, etc. The system will try to deliver the command again.   Success: The command or plugin was executed successfully. This is a terminal state.   Delivery Timed Out: The command was not delivered to the instance before the delivery timeout expired. Delivery timeouts do not count against the parent command's MaxErrors limit, but they do contribute to whether the parent command status is Success or Incomplete. This is a terminal state.   Execution Timed Out: The command started to execute on the instance, but the execution was not complete before the timeout expired. Execution timeouts count against the MaxErrors limit of the parent command. This is a terminal state.   Failed: The command wasn't executed successfully on the instance. For a plugin, this indicates that the result code was not zero. For a command invocation, this indicates that the result code for one or more plugins was not zero. Invocation failures count against the MaxErrors limit of the parent command. This is a terminal state.   Canceled: The command was terminated before it was completed. This is a terminal state.   Undeliverable: The command can't be delivered to the instance. The instance might not exist or might not be responding. Undeliverable invocations don't count against the parent command's MaxErrors limit and don't contribute to whether the parent command status is Success or Incomplete. This is a terminal state.   Terminated: The parent command exceeded its MaxErrors limit and subsequent command invocations were canceled by the system. This is a terminal state.  
     */
    StatusDetails?: StatusDetails;
    /**
     * The first 24,000 characters written by the plugin to stdout. If the command has not finished executing, if ExecutionStatus is neither Succeeded nor Failed, then this string is empty.
     */
    StandardOutputContent?: StandardOutputContent;
    /**
     * The URL for the complete text written by the plugin to stdout in Amazon S3. If an Amazon S3 bucket was not specified, then this string is empty.
     */
    StandardOutputUrl?: Url;
    /**
     * The first 8,000 characters written by the plugin to stderr. If the command has not finished executing, then this string is empty.
     */
    StandardErrorContent?: StandardErrorContent;
    /**
     * The URL for the complete text written by the plugin to stderr. If the command has not finished executing, then this string is empty.
     */
    StandardErrorUrl?: Url;
    /**
     * CloudWatch Logs information where Systems Manager sent the command output.
     */
    CloudWatchOutputConfig?: CloudWatchOutputConfig;
  }
  export interface GetConnectionStatusRequest {
    /**
     * The ID of the instance.
     */
    Target: SessionTarget;
  }
  export interface GetConnectionStatusResponse {
    /**
     * The ID of the instance to check connection status. 
     */
    Target?: SessionTarget;
    /**
     * The status of the connection to the instance. For example, 'Connected' or 'Not Connected'.
     */
    Status?: ConnectionStatus;
  }
  export interface GetDefaultPatchBaselineRequest {
    /**
     * Returns the default patch baseline for the specified operating system.
     */
    OperatingSystem?: OperatingSystem;
  }
  export interface GetDefaultPatchBaselineResult {
    /**
     * The ID of the default patch baseline.
     */
    BaselineId?: BaselineId;
    /**
     * The operating system for the returned patch baseline. 
     */
    OperatingSystem?: OperatingSystem;
  }
  export interface GetDeployablePatchSnapshotForInstanceRequest {
    /**
     * The ID of the instance for which the appropriate patch snapshot should be retrieved.
     */
    InstanceId: InstanceId;
    /**
     * The user-defined snapshot ID.
     */
    SnapshotId: SnapshotId;
  }
  export interface GetDeployablePatchSnapshotForInstanceResult {
    /**
     * The ID of the instance.
     */
    InstanceId?: InstanceId;
    /**
     * The user-defined snapshot ID.
     */
    SnapshotId?: SnapshotId;
    /**
     * A pre-signed Amazon S3 URL that can be used to download the patch snapshot.
     */
    SnapshotDownloadUrl?: SnapshotDownloadUrl;
    /**
     * Returns the specific operating system (for example Windows Server 2012 or Amazon Linux 2015.09) on the instance for the specified patch snapshot.
     */
    Product?: Product;
  }
  export interface GetDocumentRequest {
    /**
     * The name of the Systems Manager document.
     */
    Name: DocumentARN;
    /**
     * The document version for which you want information.
     */
    DocumentVersion?: DocumentVersion;
    /**
     * Returns the document in the specified format. The document format can be either JSON or YAML. JSON is the default format.
     */
    DocumentFormat?: DocumentFormat;
  }
  export interface GetDocumentResult {
    /**
     * The name of the Systems Manager document.
     */
    Name?: DocumentARN;
    /**
     * The document version.
     */
    DocumentVersion?: DocumentVersion;
    /**
     * The contents of the Systems Manager document.
     */
    Content?: DocumentContent;
    /**
     * The document type.
     */
    DocumentType?: DocumentType;
    /**
     * The document format, either JSON or YAML.
     */
    DocumentFormat?: DocumentFormat;
  }
  export interface GetInventoryRequest {
    /**
     * One or more filters. Use a filter to return a more specific list of results.
     */
    Filters?: InventoryFilterList;
    /**
     * Returns counts of inventory types based on one or more expressions. For example, if you aggregate by using an expression that uses the AWS:InstanceInformation.PlatformType type, you can see a count of how many Windows and Linux instances exist in your inventoried fleet.
     */
    Aggregators?: InventoryAggregatorList;
    /**
     * The list of inventory item types to return.
     */
    ResultAttributes?: ResultAttributeList;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaxResults;
  }
  export interface GetInventoryResult {
    /**
     * Collection of inventory entities such as a collection of instance inventory. 
     */
    Entities?: InventoryResultEntityList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export type GetInventorySchemaMaxResults = number;
  export interface GetInventorySchemaRequest {
    /**
     * The type of inventory item to return.
     */
    TypeName?: InventoryItemTypeNameFilter;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: GetInventorySchemaMaxResults;
    /**
     * Returns inventory schemas that support aggregation. For example, this call returns the AWS:InstanceInformation type, because it supports aggregation based on the PlatformName, PlatformType, and PlatformVersion attributes.
     */
    Aggregator?: AggregatorSchemaOnly;
    /**
     * Returns the sub-type schema for a specified inventory type.
     */
    SubType?: IsSubTypeSchema;
  }
  export interface GetInventorySchemaResult {
    /**
     * Inventory schemas returned by the request.
     */
    Schemas?: InventoryItemSchemaResultList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface GetMaintenanceWindowExecutionRequest {
    /**
     * The ID of the Maintenance Window execution that includes the task.
     */
    WindowExecutionId: MaintenanceWindowExecutionId;
  }
  export interface GetMaintenanceWindowExecutionResult {
    /**
     * The ID of the Maintenance Window execution.
     */
    WindowExecutionId?: MaintenanceWindowExecutionId;
    /**
     * The ID of the task executions from the Maintenance Window execution.
     */
    TaskIds?: MaintenanceWindowExecutionTaskIdList;
    /**
     * The status of the Maintenance Window execution.
     */
    Status?: MaintenanceWindowExecutionStatus;
    /**
     * The details explaining the Status. Only available for certain status values.
     */
    StatusDetails?: MaintenanceWindowExecutionStatusDetails;
    /**
     * The time the Maintenance Window started executing.
     */
    StartTime?: DateTime;
    /**
     * The time the Maintenance Window finished executing.
     */
    EndTime?: DateTime;
  }
  export interface GetMaintenanceWindowExecutionTaskInvocationRequest {
    /**
     * The ID of the Maintenance Window execution for which the task is a part.
     */
    WindowExecutionId: MaintenanceWindowExecutionId;
    /**
     * The ID of the specific task in the Maintenance Window task that should be retrieved. 
     */
    TaskId: MaintenanceWindowExecutionTaskId;
    /**
     * The invocation ID to retrieve.
     */
    InvocationId: MaintenanceWindowExecutionTaskInvocationId;
  }
  export interface GetMaintenanceWindowExecutionTaskInvocationResult {
    /**
     * The Maintenance Window execution ID.
     */
    WindowExecutionId?: MaintenanceWindowExecutionId;
    /**
     * The task execution ID.
     */
    TaskExecutionId?: MaintenanceWindowExecutionTaskId;
    /**
     * The invocation ID.
     */
    InvocationId?: MaintenanceWindowExecutionTaskInvocationId;
    /**
     * The execution ID.
     */
    ExecutionId?: MaintenanceWindowExecutionTaskExecutionId;
    /**
     * Retrieves the task type for a Maintenance Window. Task types include the following: LAMBDA, STEP_FUNCTION, AUTOMATION, RUN_COMMAND.
     */
    TaskType?: MaintenanceWindowTaskType;
    /**
     * The parameters used at the time that the task executed.
     */
    Parameters?: MaintenanceWindowExecutionTaskInvocationParameters;
    /**
     * The task status for an invocation.
     */
    Status?: MaintenanceWindowExecutionStatus;
    /**
     * The details explaining the status. Details are only available for certain status values.
     */
    StatusDetails?: MaintenanceWindowExecutionStatusDetails;
    /**
     * The time that the task started executing on the target.
     */
    StartTime?: DateTime;
    /**
     * The time that the task finished executing on the target.
     */
    EndTime?: DateTime;
    /**
     * User-provided value to be included in any CloudWatch events raised while running tasks for these targets in this Maintenance Window. 
     */
    OwnerInformation?: OwnerInformation;
    /**
     * The Maintenance Window target ID.
     */
    WindowTargetId?: MaintenanceWindowTaskTargetId;
  }
  export interface GetMaintenanceWindowExecutionTaskRequest {
    /**
     * The ID of the Maintenance Window execution that includes the task.
     */
    WindowExecutionId: MaintenanceWindowExecutionId;
    /**
     * The ID of the specific task execution in the Maintenance Window task that should be retrieved.
     */
    TaskId: MaintenanceWindowExecutionTaskId;
  }
  export interface GetMaintenanceWindowExecutionTaskResult {
    /**
     * The ID of the Maintenance Window execution that includes the task.
     */
    WindowExecutionId?: MaintenanceWindowExecutionId;
    /**
     * The ID of the specific task execution in the Maintenance Window task that was retrieved.
     */
    TaskExecutionId?: MaintenanceWindowExecutionTaskId;
    /**
     * The ARN of the executed task.
     */
    TaskArn?: MaintenanceWindowTaskArn;
    /**
     * The role that was assumed when executing the task.
     */
    ServiceRole?: ServiceRole;
    /**
     * The type of task executed.
     */
    Type?: MaintenanceWindowTaskType;
    /**
     * The parameters passed to the task when it was executed.   TaskParameters has been deprecated. To specify parameters to pass to a task when it runs, instead use the Parameters option in the TaskInvocationParameters structure. For information about how Systems Manager handles these options for the supported Maintenance Window task types, see MaintenanceWindowTaskInvocationParameters.  The map has the following format: Key: string, between 1 and 255 characters Value: an array of strings, each string is between 1 and 255 characters
     */
    TaskParameters?: MaintenanceWindowTaskParametersList;
    /**
     * The priority of the task.
     */
    Priority?: MaintenanceWindowTaskPriority;
    /**
     * The defined maximum number of task executions that could be run in parallel.
     */
    MaxConcurrency?: MaxConcurrency;
    /**
     * The defined maximum number of task execution errors allowed before scheduling of the task execution would have been stopped.
     */
    MaxErrors?: MaxErrors;
    /**
     * The status of the task.
     */
    Status?: MaintenanceWindowExecutionStatus;
    /**
     * The details explaining the Status. Only available for certain status values.
     */
    StatusDetails?: MaintenanceWindowExecutionStatusDetails;
    /**
     * The time the task execution started.
     */
    StartTime?: DateTime;
    /**
     * The time the task execution completed.
     */
    EndTime?: DateTime;
  }
  export interface GetMaintenanceWindowRequest {
    /**
     * The ID of the desired Maintenance Window.
     */
    WindowId: MaintenanceWindowId;
  }
  export interface GetMaintenanceWindowResult {
    /**
     * The ID of the created Maintenance Window.
     */
    WindowId?: MaintenanceWindowId;
    /**
     * The name of the Maintenance Window.
     */
    Name?: MaintenanceWindowName;
    /**
     * The description of the Maintenance Window.
     */
    Description?: MaintenanceWindowDescription;
    /**
     * The date and time, in ISO-8601 Extended format, for when the Maintenance Window is scheduled to become active. The Maintenance Window will not run before this specified time.
     */
    StartDate?: MaintenanceWindowStringDateTime;
    /**
     * The date and time, in ISO-8601 Extended format, for when the Maintenance Window is scheduled to become inactive. The Maintenance Window will not run after this specified time.
     */
    EndDate?: MaintenanceWindowStringDateTime;
    /**
     * The schedule of the Maintenance Window in the form of a cron or rate expression.
     */
    Schedule?: MaintenanceWindowSchedule;
    /**
     * The time zone that the scheduled Maintenance Window executions are based on, in Internet Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "etc/UTC", or "Asia/Seoul". For more information, see the Time Zone Database on the IANA website.
     */
    ScheduleTimezone?: MaintenanceWindowTimezone;
    /**
     * The next time the Maintenance Window will actually run, taking into account any specified times for the Maintenance Window to become active or inactive.
     */
    NextExecutionTime?: MaintenanceWindowStringDateTime;
    /**
     * The duration of the Maintenance Window in hours.
     */
    Duration?: MaintenanceWindowDurationHours;
    /**
     * The number of hours before the end of the Maintenance Window that Systems Manager stops scheduling new tasks for execution.
     */
    Cutoff?: MaintenanceWindowCutoff;
    /**
     * Whether targets must be registered with the Maintenance Window before tasks can be defined for those targets.
     */
    AllowUnassociatedTargets?: MaintenanceWindowAllowUnassociatedTargets;
    /**
     * Whether the Maintenance Windows is enabled.
     */
    Enabled?: MaintenanceWindowEnabled;
    /**
     * The date the Maintenance Window was created.
     */
    CreatedDate?: DateTime;
    /**
     * The date the Maintenance Window was last modified.
     */
    ModifiedDate?: DateTime;
  }
  export interface GetMaintenanceWindowTaskRequest {
    /**
     * The Maintenance Window ID that includes the task to retrieve.
     */
    WindowId: MaintenanceWindowId;
    /**
     * The Maintenance Window task ID to retrieve.
     */
    WindowTaskId: MaintenanceWindowTaskId;
  }
  export interface GetMaintenanceWindowTaskResult {
    /**
     * The retrieved Maintenance Window ID.
     */
    WindowId?: MaintenanceWindowId;
    /**
     * The retrieved Maintenance Window task ID.
     */
    WindowTaskId?: MaintenanceWindowTaskId;
    /**
     * The targets where the task should execute.
     */
    Targets?: Targets;
    /**
     * The resource that the task used during execution. For RUN_COMMAND and AUTOMATION task types, the TaskArn is the Systems Manager Document name/ARN. For LAMBDA tasks, the value is the function name/ARN. For STEP_FUNCTION tasks, the value is the state machine ARN.
     */
    TaskArn?: MaintenanceWindowTaskArn;
    /**
     * The IAM service role to assume during task execution.
     */
    ServiceRoleArn?: ServiceRole;
    /**
     * The type of task to execute.
     */
    TaskType?: MaintenanceWindowTaskType;
    /**
     * The parameters to pass to the task when it executes.   TaskParameters has been deprecated. To specify parameters to pass to a task when it runs, instead use the Parameters option in the TaskInvocationParameters structure. For information about how Systems Manager handles these options for the supported Maintenance Window task types, see MaintenanceWindowTaskInvocationParameters. 
     */
    TaskParameters?: MaintenanceWindowTaskParameters;
    /**
     * The parameters to pass to the task when it executes.
     */
    TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters;
    /**
     * The priority of the task when it executes. The lower the number, the higher the priority. Tasks that have the same priority are scheduled in parallel.
     */
    Priority?: MaintenanceWindowTaskPriority;
    /**
     * The maximum number of targets allowed to run this task in parallel.
     */
    MaxConcurrency?: MaxConcurrency;
    /**
     * The maximum number of errors allowed before the task stops being scheduled.
     */
    MaxErrors?: MaxErrors;
    /**
     * The location in Amazon S3 where the task results are logged.   LoggingInfo has been deprecated. To specify an S3 bucket to contain logs, instead use the OutputS3BucketName and OutputS3KeyPrefix options in the TaskInvocationParameters structure. For information about how Systems Manager handles these options for the supported Maintenance Window task types, see MaintenanceWindowTaskInvocationParameters. 
     */
    LoggingInfo?: LoggingInfo;
    /**
     * The retrieved task name.
     */
    Name?: MaintenanceWindowName;
    /**
     * The retrieved task description.
     */
    Description?: MaintenanceWindowDescription;
  }
  export interface GetParameterHistoryRequest {
    /**
     * The name of a parameter you want to query.
     */
    Name: PSParameterName;
    /**
     * Return decrypted values for secure string parameters. This flag is ignored for String and StringList parameter types.
     */
    WithDecryption?: Boolean;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface GetParameterHistoryResult {
    /**
     * A list of parameters returned by the request.
     */
    Parameters?: ParameterHistoryList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface GetParameterRequest {
    /**
     * The name of the parameter you want to query.
     */
    Name: PSParameterName;
    /**
     * Return decrypted values for secure string parameters. This flag is ignored for String and StringList parameter types.
     */
    WithDecryption?: Boolean;
  }
  export interface GetParameterResult {
    /**
     * Information about a parameter.
     */
    Parameter?: Parameter;
  }
  export type GetParametersByPathMaxResults = number;
  export interface GetParametersByPathRequest {
    /**
     * The hierarchy for the parameter. Hierarchies start with a forward slash (/) and end with the parameter name. A parameter name hierarchy can have a maximum of 15 levels. Here is an example of a hierarchy: /Finance/Prod/IAD/WinServ2016/license33 
     */
    Path: PSParameterName;
    /**
     * Retrieve all parameters within a hierarchy.  If a user has access to a path, then the user can access all levels of that path. For example, if a user has permission to access path /a, then the user can also access /a/b. Even if a user has explicitly been denied access in IAM for parameter /a, they can still call the GetParametersByPath API action recursively and view /a/b. 
     */
    Recursive?: Boolean;
    /**
     * Filters to limit the request results.  You can't filter using the parameter name. 
     */
    ParameterFilters?: ParameterStringFilterList;
    /**
     * Retrieve all parameters in a hierarchy with their value decrypted.
     */
    WithDecryption?: Boolean;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: GetParametersByPathMaxResults;
    /**
     * A token to start the list. Use this token to get the next set of results. 
     */
    NextToken?: NextToken;
  }
  export interface GetParametersByPathResult {
    /**
     * A list of parameters found in the specified hierarchy.
     */
    Parameters?: ParameterList;
    /**
     * The token for the next set of items to return. Use this token to get the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface GetParametersRequest {
    /**
     * Names of the parameters for which you want to query information.
     */
    Names: ParameterNameList;
    /**
     * Return decrypted secure string value. Return decrypted values for secure string parameters. This flag is ignored for String and StringList parameter types.
     */
    WithDecryption?: Boolean;
  }
  export interface GetParametersResult {
    /**
     * A list of details for a parameter.
     */
    Parameters?: ParameterList;
    /**
     * A list of parameters that are not formatted correctly or do not run when executed.
     */
    InvalidParameters?: ParameterNameList;
  }
  export interface GetPatchBaselineForPatchGroupRequest {
    /**
     * The name of the patch group whose patch baseline should be retrieved.
     */
    PatchGroup: PatchGroup;
    /**
     * Returns he operating system rule specified for patch groups using the patch baseline.
     */
    OperatingSystem?: OperatingSystem;
  }
  export interface GetPatchBaselineForPatchGroupResult {
    /**
     * The ID of the patch baseline that should be used for the patch group.
     */
    BaselineId?: BaselineId;
    /**
     * The name of the patch group.
     */
    PatchGroup?: PatchGroup;
    /**
     * The operating system rule specified for patch groups using the patch baseline.
     */
    OperatingSystem?: OperatingSystem;
  }
  export interface GetPatchBaselineRequest {
    /**
     * The ID of the patch baseline to retrieve.
     */
    BaselineId: BaselineId;
  }
  export interface GetPatchBaselineResult {
    /**
     * The ID of the retrieved patch baseline.
     */
    BaselineId?: BaselineId;
    /**
     * The name of the patch baseline.
     */
    Name?: BaselineName;
    /**
     * Returns the operating system specified for the patch baseline.
     */
    OperatingSystem?: OperatingSystem;
    /**
     * A set of global filters used to exclude patches from the baseline.
     */
    GlobalFilters?: PatchFilterGroup;
    /**
     * A set of rules used to include patches in the baseline.
     */
    ApprovalRules?: PatchRuleGroup;
    /**
     * A list of explicitly approved patches for the baseline.
     */
    ApprovedPatches?: PatchIdList;
    /**
     * Returns the specified compliance severity level for approved patches in the patch baseline.
     */
    ApprovedPatchesComplianceLevel?: PatchComplianceLevel;
    /**
     * Indicates whether the list of approved patches includes non-security updates that should be applied to the instances. The default value is 'false'. Applies to Linux instances only.
     */
    ApprovedPatchesEnableNonSecurity?: Boolean;
    /**
     * A list of explicitly rejected patches for the baseline.
     */
    RejectedPatches?: PatchIdList;
    /**
     * The action specified to take on patches included in the RejectedPatches list. A patch can be allowed only if it is a dependency of another package, or blocked entirely along with packages that include it as a dependency.
     */
    RejectedPatchesAction?: PatchAction;
    /**
     * Patch groups included in the patch baseline.
     */
    PatchGroups?: PatchGroupList;
    /**
     * The date the patch baseline was created.
     */
    CreatedDate?: DateTime;
    /**
     * The date the patch baseline was last modified.
     */
    ModifiedDate?: DateTime;
    /**
     * A description of the patch baseline.
     */
    Description?: BaselineDescription;
    /**
     * Information about the patches to use to update the instances, including target operating systems and source repositories. Applies to Linux instances only.
     */
    Sources?: PatchSourceList;
  }
  export type IPAddress = string;
  export type IamRole = string;
  export type IdempotencyToken = string;
  export type InstallOverrideList = string;
  export interface InstanceAggregatedAssociationOverview {
    /**
     * Detailed status information about the aggregated associations.
     */
    DetailedStatus?: StatusName;
    /**
     * The number of associations for the instance(s).
     */
    InstanceAssociationStatusAggregatedCount?: InstanceAssociationStatusAggregatedCount;
  }
  export interface InstanceAssociation {
    /**
     * The association ID.
     */
    AssociationId?: AssociationId;
    /**
     * The instance ID.
     */
    InstanceId?: InstanceId;
    /**
     * The content of the association document for the instance(s).
     */
    Content?: DocumentContent;
    /**
     * Version information for the association on the instance.
     */
    AssociationVersion?: AssociationVersion;
  }
  export type InstanceAssociationExecutionSummary = string;
  export type InstanceAssociationList = InstanceAssociation[];
  export interface InstanceAssociationOutputLocation {
    /**
     * An Amazon S3 bucket where you want to store the results of this request.
     */
    S3Location?: S3OutputLocation;
  }
  export interface InstanceAssociationOutputUrl {
    /**
     * The URL of Amazon S3 bucket where you want to store the results of this request.
     */
    S3OutputUrl?: S3OutputUrl;
  }
  export type InstanceAssociationStatusAggregatedCount = {[key: string]: InstanceCount};
  export interface InstanceAssociationStatusInfo {
    /**
     * The association ID.
     */
    AssociationId?: AssociationId;
    /**
     * The name of the association.
     */
    Name?: DocumentName;
    /**
     * The association document verions.
     */
    DocumentVersion?: DocumentVersion;
    /**
     * The version of the association applied to the instance.
     */
    AssociationVersion?: AssociationVersion;
    /**
     * The instance ID where the association was created.
     */
    InstanceId?: InstanceId;
    /**
     * The date the instance association executed. 
     */
    ExecutionDate?: DateTime;
    /**
     * Status information about the instance association.
     */
    Status?: StatusName;
    /**
     * Detailed status information about the instance association.
     */
    DetailedStatus?: StatusName;
    /**
     * Summary information about association execution.
     */
    ExecutionSummary?: InstanceAssociationExecutionSummary;
    /**
     * An error code returned by the request to create the association.
     */
    ErrorCode?: AgentErrorCode;
    /**
     * A URL for an Amazon S3 bucket where you want to store the results of this request.
     */
    OutputUrl?: InstanceAssociationOutputUrl;
    /**
     * The name of the association applied to the instance.
     */
    AssociationName?: AssociationName;
  }
  export type InstanceAssociationStatusInfos = InstanceAssociationStatusInfo[];
  export type InstanceCount = number;
  export type InstanceId = string;
  export type InstanceIdList = InstanceId[];
  export interface InstanceInformation {
    /**
     * The instance ID. 
     */
    InstanceId?: InstanceId;
    /**
     * Connection status of SSM Agent. 
     */
    PingStatus?: PingStatus;
    /**
     * The date and time when agent last pinged Systems Manager service. 
     */
    LastPingDateTime?: DateTime;
    /**
     * The version of SSM Agent running on your Linux instance. 
     */
    AgentVersion?: Version;
    /**
     * Indicates whether latest version of SSM Agent is running on your instance. Some older versions of Windows Server use the EC2Config service to process SSM requests. For this reason, this field does not indicate whether or not the latest version is installed on Windows managed instances.
     */
    IsLatestVersion?: Boolean;
    /**
     * The operating system platform type. 
     */
    PlatformType?: PlatformType;
    /**
     * The name of the operating system platform running on your instance. 
     */
    PlatformName?: String;
    /**
     * The version of the OS platform running on your instance. 
     */
    PlatformVersion?: String;
    /**
     * The activation ID created by Systems Manager when the server or VM was registered.
     */
    ActivationId?: ActivationId;
    /**
     * The Amazon Identity and Access Management (IAM) role assigned to the on-premises Systems Manager managed instances. This call does not return the IAM role for Amazon EC2 instances. 
     */
    IamRole?: IamRole;
    /**
     * The date the server or VM was registered with AWS as a managed instance.
     */
    RegistrationDate?: DateTime;
    /**
     * The type of instance. Instances are either EC2 instances or managed instances. 
     */
    ResourceType?: ResourceType;
    /**
     * The name of the managed instance.
     */
    Name?: String;
    /**
     * The IP address of the managed instance.
     */
    IPAddress?: IPAddress;
    /**
     * The fully qualified host name of the managed instance.
     */
    ComputerName?: ComputerName;
    /**
     * The status of the association.
     */
    AssociationStatus?: StatusName;
    /**
     * The date the association was last executed.
     */
    LastAssociationExecutionDate?: DateTime;
    /**
     * The last date the association was successfully run.
     */
    LastSuccessfulAssociationExecutionDate?: DateTime;
    /**
     * Information about the association.
     */
    AssociationOverview?: InstanceAggregatedAssociationOverview;
  }
  export interface InstanceInformationFilter {
    /**
     * The name of the filter. 
     */
    key: InstanceInformationFilterKey;
    /**
     * The filter values.
     */
    valueSet: InstanceInformationFilterValueSet;
  }
  export type InstanceInformationFilterKey = "InstanceIds"|"AgentVersion"|"PingStatus"|"PlatformTypes"|"ActivationIds"|"IamRole"|"ResourceType"|"AssociationStatus"|string;
  export type InstanceInformationFilterList = InstanceInformationFilter[];
  export type InstanceInformationFilterValue = string;
  export type InstanceInformationFilterValueSet = InstanceInformationFilterValue[];
  export type InstanceInformationList = InstanceInformation[];
  export interface InstanceInformationStringFilter {
    /**
     * The filter key name to describe your instances. For example: "InstanceIds"|"AgentVersion"|"PingStatus"|"PlatformTypes"|"ActivationIds"|"IamRole"|"ResourceType"|"AssociationStatus"|"Tag Key"
     */
    Key: InstanceInformationStringFilterKey;
    /**
     * The filter values.
     */
    Values: InstanceInformationFilterValueSet;
  }
  export type InstanceInformationStringFilterKey = string;
  export type InstanceInformationStringFilterList = InstanceInformationStringFilter[];
  export interface InstancePatchState {
    /**
     * The ID of the managed instance the high-level patch compliance information was collected for.
     */
    InstanceId: InstanceId;
    /**
     * The name of the patch group the managed instance belongs to.
     */
    PatchGroup: PatchGroup;
    /**
     * The ID of the patch baseline used to patch the instance.
     */
    BaselineId: BaselineId;
    /**
     * The ID of the patch baseline snapshot used during the patching operation when this compliance data was collected.
     */
    SnapshotId?: SnapshotId;
    /**
     * An https URL or an Amazon S3 path-style URL to a list of patches to be installed. This patch installation list, which you maintain in an Amazon S3 bucket in YAML format and specify in the SSM document AWS-RunPatchBaseline, overrides the patches specified by the default patch baseline. For more information about the InstallOverrideList parameter, see About the SSM Document AWS-RunPatchBaseline in the AWS Systems Manager User Guide.
     */
    InstallOverrideList?: InstallOverrideList;
    /**
     * Placeholder information. This field will always be empty in the current release of the service.
     */
    OwnerInformation?: OwnerInformation;
    /**
     * The number of patches from the patch baseline that are installed on the instance.
     */
    InstalledCount?: PatchInstalledCount;
    /**
     * The number of patches not specified in the patch baseline that are installed on the instance.
     */
    InstalledOtherCount?: PatchInstalledOtherCount;
    /**
     * The number of instances with patches installed that are specified in a RejectedPatches list. Patches with a status of InstalledRejected were typically installed before they were added to a RejectedPatches list.  If ALLOW_AS_DEPENDENCY is the specified option for RejectedPatchesAction, the value of InstalledRejectedCount will always be 0 (zero). 
     */
    InstalledRejectedCount?: PatchInstalledRejectedCount;
    /**
     * The number of patches from the patch baseline that are applicable for the instance but aren't currently installed.
     */
    MissingCount?: PatchMissingCount;
    /**
     * The number of patches from the patch baseline that were attempted to be installed during the last patching operation, but failed to install.
     */
    FailedCount?: PatchFailedCount;
    /**
     * The number of patches from the patch baseline that aren't applicable for the instance and hence aren't installed on the instance.
     */
    NotApplicableCount?: PatchNotApplicableCount;
    /**
     * The time the most recent patching operation was started on the instance.
     */
    OperationStartTime: DateTime;
    /**
     * The time the most recent patching operation completed on the instance.
     */
    OperationEndTime: DateTime;
    /**
     * The type of patching operation that was performed: SCAN (assess patch compliance state) or INSTALL (install missing patches).
     */
    Operation: PatchOperationType;
  }
  export interface InstancePatchStateFilter {
    /**
     * The key for the filter. Supported values are FailedCount, InstalledCount, InstalledOtherCount, MissingCount and NotApplicableCount.
     */
    Key: InstancePatchStateFilterKey;
    /**
     * The value for the filter, must be an integer greater than or equal to 0.
     */
    Values: InstancePatchStateFilterValues;
    /**
     * The type of comparison that should be performed for the value: Equal, NotEqual, LessThan or GreaterThan.
     */
    Type: InstancePatchStateOperatorType;
  }
  export type InstancePatchStateFilterKey = string;
  export type InstancePatchStateFilterList = InstancePatchStateFilter[];
  export type InstancePatchStateFilterValue = string;
  export type InstancePatchStateFilterValues = InstancePatchStateFilterValue[];
  export type InstancePatchStateList = InstancePatchState[];
  export type InstancePatchStateOperatorType = "Equal"|"NotEqual"|"LessThan"|"GreaterThan"|string;
  export type InstancePatchStatesList = InstancePatchState[];
  export type InstanceTagName = string;
  export type InstancesCount = number;
  export type Integer = number;
  export interface InventoryAggregator {
    /**
     * The inventory type and attribute name for aggregation.
     */
    Expression?: InventoryAggregatorExpression;
    /**
     * Nested aggregators to further refine aggregation for an inventory type.
     */
    Aggregators?: InventoryAggregatorList;
    /**
     * A user-defined set of one or more filters on which to aggregate inventory data. Groups return a count of resources that match and don't match the specified criteria.
     */
    Groups?: InventoryGroupList;
  }
  export type InventoryAggregatorExpression = string;
  export type InventoryAggregatorList = InventoryAggregator[];
  export type InventoryAttributeDataType = "string"|"number"|string;
  export type InventoryDeletionId = string;
  export type InventoryDeletionLastStatusMessage = string;
  export type InventoryDeletionLastStatusUpdateTime = Date;
  export type InventoryDeletionStartTime = Date;
  export type InventoryDeletionStatus = "InProgress"|"Complete"|string;
  export interface InventoryDeletionStatusItem {
    /**
     * The deletion ID returned by the DeleteInventory action.
     */
    DeletionId?: InventoryDeletionId;
    /**
     * The name of the inventory data type.
     */
    TypeName?: InventoryItemTypeName;
    /**
     * The UTC timestamp when the delete operation started.
     */
    DeletionStartTime?: InventoryDeletionStartTime;
    /**
     * The status of the operation. Possible values are InProgress and Complete.
     */
    LastStatus?: InventoryDeletionStatus;
    /**
     * Information about the status.
     */
    LastStatusMessage?: InventoryDeletionLastStatusMessage;
    /**
     * Information about the delete operation. For more information about this summary, see Understanding the Delete Inventory Summary in the AWS Systems Manager User Guide.
     */
    DeletionSummary?: InventoryDeletionSummary;
    /**
     * The UTC timestamp of when the last status report.
     */
    LastStatusUpdateTime?: InventoryDeletionLastStatusUpdateTime;
  }
  export interface InventoryDeletionSummary {
    /**
     * The total number of items to delete. This count does not change during the delete operation.
     */
    TotalCount?: TotalCount;
    /**
     * Remaining number of items to delete.
     */
    RemainingCount?: RemainingCount;
    /**
     * A list of counts and versions for deleted items.
     */
    SummaryItems?: InventoryDeletionSummaryItems;
  }
  export interface InventoryDeletionSummaryItem {
    /**
     * The inventory type version.
     */
    Version?: InventoryItemSchemaVersion;
    /**
     * A count of the number of deleted items.
     */
    Count?: ResourceCount;
    /**
     * The remaining number of items to delete.
     */
    RemainingCount?: RemainingCount;
  }
  export type InventoryDeletionSummaryItems = InventoryDeletionSummaryItem[];
  export type InventoryDeletionsList = InventoryDeletionStatusItem[];
  export interface InventoryFilter {
    /**
     * The name of the filter key.
     */
    Key: InventoryFilterKey;
    /**
     * Inventory filter values. Example: inventory filter where instance IDs are specified as values Key=AWS:InstanceInformation.InstanceId,Values= i-a12b3c4d5e6g, i-1a2b3c4d5e6,Type=Equal 
     */
    Values: InventoryFilterValueList;
    /**
     * The type of filter. Valid values include the following: "Equal"|"NotEqual"|"BeginWith"|"LessThan"|"GreaterThan"
     */
    Type?: InventoryQueryOperatorType;
  }
  export type InventoryFilterKey = string;
  export type InventoryFilterList = InventoryFilter[];
  export type InventoryFilterValue = string;
  export type InventoryFilterValueList = InventoryFilterValue[];
  export interface InventoryGroup {
    /**
     * The name of the group.
     */
    Name: InventoryGroupName;
    /**
     * Filters define the criteria for the group. The matchingCount field displays the number of resources that match the criteria. The notMatchingCount field displays the number of resources that don't match the criteria. 
     */
    Filters: InventoryFilterList;
  }
  export type InventoryGroupList = InventoryGroup[];
  export type InventoryGroupName = string;
  export interface InventoryItem {
    /**
     * The name of the inventory type. Default inventory item type names start with AWS. Custom inventory type names will start with Custom. Default inventory item types include the following: AWS:AWSComponent, AWS:Application, AWS:InstanceInformation, AWS:Network, and AWS:WindowsUpdate.
     */
    TypeName: InventoryItemTypeName;
    /**
     * The schema version for the inventory item.
     */
    SchemaVersion: InventoryItemSchemaVersion;
    /**
     * The time the inventory information was collected.
     */
    CaptureTime: InventoryItemCaptureTime;
    /**
     * MD5 hash of the inventory item type contents. The content hash is used to determine whether to update inventory information. The PutInventory API does not update the inventory item type contents if the MD5 hash has not changed since last update. 
     */
    ContentHash?: InventoryItemContentHash;
    /**
     * The inventory data of the inventory type.
     */
    Content?: InventoryItemEntryList;
    /**
     * A map of associated properties for a specified inventory type. For example, with this attribute, you can specify the ExecutionId, ExecutionType, ComplianceType properties of the AWS:ComplianceItem type.
     */
    Context?: InventoryItemContentContext;
  }
  export interface InventoryItemAttribute {
    /**
     * Name of the inventory item attribute.
     */
    Name: InventoryItemAttributeName;
    /**
     * The data type of the inventory item attribute. 
     */
    DataType: InventoryAttributeDataType;
  }
  export type InventoryItemAttributeList = InventoryItemAttribute[];
  export type InventoryItemAttributeName = string;
  export type InventoryItemCaptureTime = string;
  export type InventoryItemContentContext = {[key: string]: AttributeValue};
  export type InventoryItemContentHash = string;
  export type InventoryItemEntry = {[key: string]: AttributeValue};
  export type InventoryItemEntryList = InventoryItemEntry[];
  export type InventoryItemList = InventoryItem[];
  export interface InventoryItemSchema {
    /**
     * The name of the inventory type. Default inventory item type names start with AWS. Custom inventory type names will start with Custom. Default inventory item types include the following: AWS:AWSComponent, AWS:Application, AWS:InstanceInformation, AWS:Network, and AWS:WindowsUpdate.
     */
    TypeName: InventoryItemTypeName;
    /**
     * The schema version for the inventory item.
     */
    Version?: InventoryItemSchemaVersion;
    /**
     * The schema attributes for inventory. This contains data type and attribute name.
     */
    Attributes: InventoryItemAttributeList;
    /**
     * The alias name of the inventory type. The alias name is used for display purposes.
     */
    DisplayName?: InventoryTypeDisplayName;
  }
  export type InventoryItemSchemaResultList = InventoryItemSchema[];
  export type InventoryItemSchemaVersion = string;
  export type InventoryItemTypeName = string;
  export type InventoryItemTypeNameFilter = string;
  export type InventoryQueryOperatorType = "Equal"|"NotEqual"|"BeginWith"|"LessThan"|"GreaterThan"|"Exists"|string;
  export interface InventoryResultEntity {
    /**
     * ID of the inventory result entity. For example, for managed instance inventory the result will be the managed instance ID. For EC2 instance inventory, the result will be the instance ID. 
     */
    Id?: InventoryResultEntityId;
    /**
     * The data section in the inventory result entity JSON.
     */
    Data?: InventoryResultItemMap;
  }
  export type InventoryResultEntityId = string;
  export type InventoryResultEntityList = InventoryResultEntity[];
  export interface InventoryResultItem {
    /**
     * The name of the inventory result item type.
     */
    TypeName: InventoryItemTypeName;
    /**
     * The schema version for the inventory result item/
     */
    SchemaVersion: InventoryItemSchemaVersion;
    /**
     * The time inventory item data was captured.
     */
    CaptureTime?: InventoryItemCaptureTime;
    /**
     * MD5 hash of the inventory item type contents. The content hash is used to determine whether to update inventory information. The PutInventory API does not update the inventory item type contents if the MD5 hash has not changed since last update. 
     */
    ContentHash?: InventoryItemContentHash;
    /**
     * Contains all the inventory data of the item type. Results include attribute names and values. 
     */
    Content: InventoryItemEntryList;
  }
  export type InventoryResultItemKey = string;
  export type InventoryResultItemMap = {[key: string]: InventoryResultItem};
  export type InventorySchemaDeleteOption = "DisableSchema"|"DeleteSchema"|string;
  export type InventoryTypeDisplayName = string;
  export type InvocationTraceOutput = string;
  export type IsSubTypeSchema = boolean;
  export type KeyList = TagKey[];
  export interface LabelParameterVersionRequest {
    /**
     * The parameter name on which you want to attach one or more labels.
     */
    Name: PSParameterName;
    /**
     * The specific version of the parameter on which you want to attach one or more labels. If no version is specified, the system attaches the label to the latest version.)
     */
    ParameterVersion?: PSParameterVersion;
    /**
     * One or more labels to attach to the specified parameter version.
     */
    Labels: ParameterLabelList;
  }
  export interface LabelParameterVersionResult {
    /**
     * The label does not meet the requirements. For information about parameter label requirements, see Labeling Parameters in the AWS Systems Manager User Guide.
     */
    InvalidLabels?: ParameterLabelList;
  }
  export type LastResourceDataSyncMessage = string;
  export type LastResourceDataSyncStatus = "Successful"|"Failed"|"InProgress"|string;
  export type LastResourceDataSyncTime = Date;
  export type LastSuccessfulResourceDataSyncTime = Date;
  export interface ListAssociationVersionsRequest {
    /**
     * The association ID for which you want to view all versions.
     */
    AssociationId: AssociationId;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaxResults;
    /**
     * A token to start the list. Use this token to get the next set of results. 
     */
    NextToken?: NextToken;
  }
  export interface ListAssociationVersionsResult {
    /**
     * Information about all versions of the association for the specified association ID.
     */
    AssociationVersions?: AssociationVersionList;
    /**
     * The token for the next set of items to return. Use this token to get the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListAssociationsRequest {
    /**
     * One or more filters. Use a filter to return a more specific list of results.
     */
    AssociationFilterList?: AssociationFilterList;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface ListAssociationsResult {
    /**
     * The associations.
     */
    Associations?: AssociationList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface ListCommandInvocationsRequest {
    /**
     * (Optional) The invocations for a specific command ID.
     */
    CommandId?: CommandId;
    /**
     * (Optional) The command execution details for a specific instance ID.
     */
    InstanceId?: InstanceId;
    /**
     * (Optional) The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: CommandMaxResults;
    /**
     * (Optional) The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
    /**
     * (Optional) One or more filters. Use a filter to return a more specific list of results.
     */
    Filters?: CommandFilterList;
    /**
     * (Optional) If set this returns the response of the command executions and any command output. By default this is set to False. 
     */
    Details?: Boolean;
  }
  export interface ListCommandInvocationsResult {
    /**
     * (Optional) A list of all invocations. 
     */
    CommandInvocations?: CommandInvocationList;
    /**
     * (Optional) The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface ListCommandsRequest {
    /**
     * (Optional) If provided, lists only the specified command.
     */
    CommandId?: CommandId;
    /**
     * (Optional) Lists commands issued against this instance ID.
     */
    InstanceId?: InstanceId;
    /**
     * (Optional) The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: CommandMaxResults;
    /**
     * (Optional) The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
    /**
     * (Optional) One or more filters. Use a filter to return a more specific list of results. 
     */
    Filters?: CommandFilterList;
  }
  export interface ListCommandsResult {
    /**
     * (Optional) The list of commands requested by the user. 
     */
    Commands?: CommandList;
    /**
     * (Optional) The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface ListComplianceItemsRequest {
    /**
     * One or more compliance filters. Use a filter to return a more specific list of results.
     */
    Filters?: ComplianceStringFilterList;
    /**
     * The ID for the resources from which to get compliance information. Currently, you can only specify one resource ID.
     */
    ResourceIds?: ComplianceResourceIdList;
    /**
     * The type of resource from which to get compliance information. Currently, the only supported resource type is ManagedInstance.
     */
    ResourceTypes?: ComplianceResourceTypeList;
    /**
     * A token to start the list. Use this token to get the next set of results. 
     */
    NextToken?: NextToken;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaxResults;
  }
  export interface ListComplianceItemsResult {
    /**
     * A list of compliance information for the specified resource ID. 
     */
    ComplianceItems?: ComplianceItemList;
    /**
     * The token for the next set of items to return. Use this token to get the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListComplianceSummariesRequest {
    /**
     * One or more compliance or inventory filters. Use a filter to return a more specific list of results.
     */
    Filters?: ComplianceStringFilterList;
    /**
     * A token to start the list. Use this token to get the next set of results. 
     */
    NextToken?: NextToken;
    /**
     * The maximum number of items to return for this call. Currently, you can specify null or 50. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaxResults;
  }
  export interface ListComplianceSummariesResult {
    /**
     * A list of compliant and non-compliant summary counts based on compliance types. For example, this call returns State Manager associations, patches, or custom compliance types according to the filter criteria that you specified.
     */
    ComplianceSummaryItems?: ComplianceSummaryItemList;
    /**
     * The token for the next set of items to return. Use this token to get the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListDocumentVersionsRequest {
    /**
     * The name of the document about which you want version information.
     */
    Name: DocumentName;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface ListDocumentVersionsResult {
    /**
     * The document versions.
     */
    DocumentVersions?: DocumentVersionList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface ListDocumentsRequest {
    /**
     * One or more filters. Use a filter to return a more specific list of results.
     */
    DocumentFilterList?: DocumentFilterList;
    /**
     * One or more filters. Use a filter to return a more specific list of results.
     */
    Filters?: DocumentKeyValuesFilterList;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaxResults;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
  }
  export interface ListDocumentsResult {
    /**
     * The names of the Systems Manager documents.
     */
    DocumentIdentifiers?: DocumentIdentifierList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface ListInventoryEntriesRequest {
    /**
     * The instance ID for which you want inventory information.
     */
    InstanceId: InstanceId;
    /**
     * The type of inventory item for which you want information.
     */
    TypeName: InventoryItemTypeName;
    /**
     * One or more filters. Use a filter to return a more specific list of results.
     */
    Filters?: InventoryFilterList;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: NextToken;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaxResults;
  }
  export interface ListInventoryEntriesResult {
    /**
     * The type of inventory item returned by the request.
     */
    TypeName?: InventoryItemTypeName;
    /**
     * The instance ID targeted by the request to query inventory information.
     */
    InstanceId?: InstanceId;
    /**
     * The inventory schema version used by the instance(s).
     */
    SchemaVersion?: InventoryItemSchemaVersion;
    /**
     * The time that inventory information was collected for the instance(s).
     */
    CaptureTime?: InventoryItemCaptureTime;
    /**
     * A list of inventory items on the instance(s).
     */
    Entries?: InventoryItemEntryList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
     */
    NextToken?: NextToken;
  }
  export interface ListResourceComplianceSummariesRequest {
    /**
     * One or more filters. Use a filter to return a more specific list of results.
     */
    Filters?: ComplianceStringFilterList;
    /**
     * A token to start the list. Use this token to get the next set of results. 
     */
    NextToken?: NextToken;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaxResults;
  }
  export interface ListResourceComplianceSummariesResult {
    /**
     * A summary count for specified or targeted managed instances. Summary count includes information about compliant and non-compliant State Manager associations, patch status, or custom items according to the filter criteria that you specify. 
     */
    ResourceComplianceSummaryItems?: ResourceComplianceSummaryItemList;
    /**
     * The token for the next set of items to return. Use this token to get the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListResourceDataSyncRequest {
    /**
     * A token to start the list. Use this token to get the next set of results. 
     */
    NextToken?: NextToken;
    /**
     * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
     */
    MaxResults?: MaxResults;
  }
  export interface ListResourceDataSyncResult {
    /**
     * A list of your current Resource Data Sync configurations and their statuses.
     */
    ResourceDataSyncItems?: ResourceDataSyncItemList;
    /**
     * The token for the next set of items to return. Use this token to get the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListTagsForResourceRequest {
    /**
     * Returns a list of tags for a specific resource type.
     */
    ResourceType: ResourceTypeForTagging;
    /**
     * The resource ID for which you want to see a list of tags.
     */
    ResourceId: ResourceId;
  }
  export interface ListTagsForResourceResult {
    /**
     * A list of tags.
     */
    TagList?: TagList;
  }
  export interface LoggingInfo {
    /**
     * The name of an Amazon S3 bucket where execution logs are stored .
     */
    S3BucketName: S3BucketName;
    /**
     * (Optional) The Amazon S3 bucket subfolder. 
     */
    S3KeyPrefix?: S3KeyPrefix;
    /**
     * The region where the Amazon S3 bucket is located.
     */
    S3Region: S3Region;
  }
  export type Long = number;
  export type MaintenanceWindowAllowUnassociatedTargets = boolean;
  export interface MaintenanceWindowAutomationParameters {
    /**
     * The version of an Automation document to use during task execution.
     */
    DocumentVersion?: DocumentVersion;
    /**
     * The parameters for the AUTOMATION task. For information about specifying and updating task parameters, see RegisterTaskWithMaintenanceWindow and UpdateMaintenanceWindowTask.   LoggingInfo has been deprecated. To specify an S3 bucket to contain logs, instead use the OutputS3BucketName and OutputS3KeyPrefix options in the TaskInvocationParameters structure. For information about how Systems Manager handles these options for the supported Maintenance Window task types, see MaintenanceWindowTaskInvocationParameters.  TaskParameters has been deprecated. To specify parameters to pass to a task when it runs, instead use the Parameters option in the TaskInvocationParameters structure. For information about how Systems Manager handles these options for the supported Maintenance Window task types, see MaintenanceWindowTaskInvocationParameters. For AUTOMATION task types, Systems Manager ignores any values specified for these parameters. 
     */
    Parameters?: AutomationParameterMap;
  }
  export type MaintenanceWindowCutoff = number;
  export type MaintenanceWindowDescription = string;
  export type MaintenanceWindowDurationHours = number;
  export type MaintenanceWindowEnabled = boolean;
  export interface MaintenanceWindowExecution {
    /**
     * The ID of the Maintenance Window.
     */
    WindowId?: MaintenanceWindowId;
    /**
     * The ID of the Maintenance Window execution.
     */
    WindowExecutionId?: MaintenanceWindowExecutionId;
    /**
     * The status of the execution.
     */
    Status?: MaintenanceWindowExecutionStatus;
    /**
     * The details explaining the Status. Only available for certain status values.
     */
    StatusDetails?: MaintenanceWindowExecutionStatusDetails;
    /**
     * The time the execution started.
     */
    StartTime?: DateTime;
    /**
     * The time the execution finished.
     */
    EndTime?: DateTime;
  }
  export type MaintenanceWindowExecutionId = string;
  export type MaintenanceWindowExecutionList = MaintenanceWindowExecution[];
  export type MaintenanceWindowExecutionStatus = "PENDING"|"IN_PROGRESS"|"SUCCESS"|"FAILED"|"TIMED_OUT"|"CANCELLING"|"CANCELLED"|"SKIPPED_OVERLAPPING"|string;
  export type MaintenanceWindowExecutionStatusDetails = string;
  export type MaintenanceWindowExecutionTaskExecutionId = string;
  export type MaintenanceWindowExecutionTaskId = string;
  export type MaintenanceWindowExecutionTaskIdList = MaintenanceWindowExecutionTaskId[];
  export interface MaintenanceWindowExecutionTaskIdentity {
    /**
     * The ID of the Maintenance Window execution that ran the task.
     */
    WindowExecutionId?: MaintenanceWindowExecutionId;
    /**
     * The ID of the specific task execution in the Maintenance Window execution.
     */
    TaskExecutionId?: MaintenanceWindowExecutionTaskId;
    /**
     * The status of the task execution.
     */
    Status?: MaintenanceWindowExecutionStatus;
    /**
     * The details explaining the status of the task execution. Only available for certain status values.
     */
    StatusDetails?: MaintenanceWindowExecutionStatusDetails;
    /**
     * The time the task execution started.
     */
    StartTime?: DateTime;
    /**
     * The time the task execution finished.
     */
    EndTime?: DateTime;
    /**
     * The ARN of the executed task.
     */
    TaskArn?: MaintenanceWindowTaskArn;
    /**
     * The type of executed task.
     */
    TaskType?: MaintenanceWindowTaskType;
  }
  export type MaintenanceWindowExecutionTaskIdentityList = MaintenanceWindowExecutionTaskIdentity[];
  export type MaintenanceWindowExecutionTaskInvocationId = string;
  export interface MaintenanceWindowExecutionTaskInvocationIdentity {
    /**
     * The ID of the Maintenance Window execution that ran the task.
     */
    WindowExecutionId?: MaintenanceWindowExecutionId;
    /**
     * The ID of the specific task execution in the Maintenance Window execution.
     */
    TaskExecutionId?: MaintenanceWindowExecutionTaskId;
    /**
     * The ID of the task invocation.
     */
    InvocationId?: MaintenanceWindowExecutionTaskInvocationId;
    /**
     * The ID of the action performed in the service that actually handled the task invocation. If the task type is RUN_COMMAND, this value is the command ID.
     */
    ExecutionId?: MaintenanceWindowExecutionTaskExecutionId;
    /**
     * The task type.
     */
    TaskType?: MaintenanceWindowTaskType;
    /**
     * The parameters that were provided for the invocation when it was executed.
     */
    Parameters?: MaintenanceWindowExecutionTaskInvocationParameters;
    /**
     * The status of the task invocation.
     */
    Status?: MaintenanceWindowExecutionStatus;
    /**
     * The details explaining the status of the task invocation. Only available for certain Status values. 
     */
    StatusDetails?: MaintenanceWindowExecutionStatusDetails;
    /**
     * The time the invocation started.
     */
    StartTime?: DateTime;
    /**
     * The time the invocation finished.
     */
    EndTime?: DateTime;
    /**
     * User-provided value that was specified when the target was registered with the Maintenance Window. This was also included in any CloudWatch events raised during the task invocation.
     */
    OwnerInformation?: OwnerInformation;
    /**
     * The ID of the target definition in this Maintenance Window the invocation was performed for.
     */
    WindowTargetId?: MaintenanceWindowTaskTargetId;
  }
  export type MaintenanceWindowExecutionTaskInvocationIdentityList = MaintenanceWindowExecutionTaskInvocationIdentity[];
  export type MaintenanceWindowExecutionTaskInvocationParameters = string;
  export interface MaintenanceWindowFilter {
    /**
     * The name of the filter.
     */
    Key?: MaintenanceWindowFilterKey;
    /**
     * The filter values.
     */
    Values?: MaintenanceWindowFilterValues;
  }
  export type MaintenanceWindowFilterKey = string;
  export type MaintenanceWindowFilterList = MaintenanceWindowFilter[];
  export type MaintenanceWindowFilterValue = string;
  export type MaintenanceWindowFilterValues = MaintenanceWindowFilterValue[];
  export type MaintenanceWindowId = string;
  export interface MaintenanceWindowIdentity {
    /**
     * The ID of the Maintenance Window.
     */
    WindowId?: MaintenanceWindowId;
    /**
     * The name of the Maintenance Window.
     */
    Name?: MaintenanceWindowName;
    /**
     * A description of the Maintenance Window.
     */
    Description?: MaintenanceWindowDescription;
    /**
     * Whether the Maintenance Window is enabled.
     */
    Enabled?: MaintenanceWindowEnabled;
    /**
     * The duration of the Maintenance Window in hours.
     */
    Duration?: MaintenanceWindowDurationHours;
    /**
     * The number of hours before the end of the Maintenance Window that Systems Manager stops scheduling new tasks for execution.
     */
    Cutoff?: MaintenanceWindowCutoff;
    /**
     * The schedule of the Maintenance Window in the form of a cron or rate expression.
     */
    Schedule?: MaintenanceWindowSchedule;
    /**
     * The time zone that the scheduled Maintenance Window executions are based on, in Internet Assigned Numbers Authority (IANA) format.
     */
    ScheduleTimezone?: MaintenanceWindowTimezone;
    /**
     * The date and time, in ISO-8601 Extended format, for when the Maintenance Window is scheduled to become inactive.
     */
    EndDate?: MaintenanceWindowStringDateTime;
    /**
     * The date and time, in ISO-8601 Extended format, for when the Maintenance Window is scheduled to become active.
     */
    StartDate?: MaintenanceWindowStringDateTime;
    /**
     * The next time the Maintenance Window will actually run, taking into account any specified times for the Maintenance Window to become active or inactive.
     */
    NextExecutionTime?: MaintenanceWindowStringDateTime;
  }
  export interface MaintenanceWindowIdentityForTarget {
    /**
     * The ID of the Maintenance Window.
     */
    WindowId?: MaintenanceWindowId;
    /**
     * The name of the Maintenance Window.
     */
    Name?: MaintenanceWindowName;
  }
  export type MaintenanceWindowIdentityList = MaintenanceWindowIdentity[];
  export type MaintenanceWindowLambdaClientContext = string;
  export interface MaintenanceWindowLambdaParameters {
    /**
     * Pass client-specific information to the Lambda function that you are invoking. You can then process the client information in your Lambda function as you choose through the context variable.
     */
    ClientContext?: MaintenanceWindowLambdaClientContext;
    /**
     * (Optional) Specify a Lambda function version or alias name. If you specify a function version, the action uses the qualified function ARN to invoke a specific Lambda function. If you specify an alias name, the action uses the alias ARN to invoke the Lambda function version to which the alias points.
     */
    Qualifier?: MaintenanceWindowLambdaQualifier;
    /**
     * JSON to provide to your Lambda function as input.
     */
    Payload?: MaintenanceWindowLambdaPayload;
  }
  export type MaintenanceWindowLambdaPayload = Buffer|Uint8Array|Blob|string;
  export type MaintenanceWindowLambdaQualifier = string;
  export type MaintenanceWindowMaxResults = number;
  export type MaintenanceWindowName = string;
  export type MaintenanceWindowResourceType = "INSTANCE"|string;
  export interface MaintenanceWindowRunCommandParameters {
    /**
     * Information about the command(s) to execute.
     */
    Comment?: Comment;
    /**
     * The SHA-256 or SHA-1 hash created by the system when the document was created. SHA-1 hashes have been deprecated.
     */
    DocumentHash?: DocumentHash;
    /**
     * SHA-256 or SHA-1. SHA-1 hashes have been deprecated.
     */
    DocumentHashType?: DocumentHashType;
    /**
     * Configurations for sending notifications about command status changes on a per-instance basis.
     */
    NotificationConfig?: NotificationConfig;
    /**
     * The name of the Amazon S3 bucket.
     */
    OutputS3BucketName?: S3BucketName;
    /**
     * The Amazon S3 bucket subfolder.
     */
    OutputS3KeyPrefix?: S3KeyPrefix;
    /**
     * The parameters for the RUN_COMMAND task execution.
     */
    Parameters?: Parameters;
    /**
     * The IAM service role to assume during task execution.
     */
    ServiceRoleArn?: ServiceRole;
    /**
     * If this time is reached and the command has not already started executing, it doesn not execute.
     */
    TimeoutSeconds?: TimeoutSeconds;
  }
  export type MaintenanceWindowSchedule = string;
  export type MaintenanceWindowSearchMaxResults = number;
  export type MaintenanceWindowStepFunctionsInput = string;
  export type MaintenanceWindowStepFunctionsName = string;
  export interface MaintenanceWindowStepFunctionsParameters {
    /**
     * The inputs for the STEP_FUNCTION task.
     */
    Input?: MaintenanceWindowStepFunctionsInput;
    /**
     * The name of the STEP_FUNCTION task.
     */
    Name?: MaintenanceWindowStepFunctionsName;
  }
  export type MaintenanceWindowStringDateTime = string;
  export interface MaintenanceWindowTarget {
    /**
     * The Maintenance Window ID where the target is registered.
     */
    WindowId?: MaintenanceWindowId;
    /**
     * The ID of the target.
     */
    WindowTargetId?: MaintenanceWindowTargetId;
    /**
     * The type of target.
     */
    ResourceType?: MaintenanceWindowResourceType;
    /**
     * The targets (either instances or tags). Instances are specified using Key=instanceids,Values=&lt;instanceid1&gt;,&lt;instanceid2&gt;. Tags are specified using Key=&lt;tag name&gt;,Values=&lt;tag value&gt;.
     */
    Targets?: Targets;
    /**
     * User-provided value that will be included in any CloudWatch events raised while running tasks for these targets in this Maintenance Window.
     */
    OwnerInformation?: OwnerInformation;
    /**
     * The target name.
     */
    Name?: MaintenanceWindowName;
    /**
     * A description of the target.
     */
    Description?: MaintenanceWindowDescription;
  }
  export type MaintenanceWindowTargetId = string;
  export type MaintenanceWindowTargetList = MaintenanceWindowTarget[];
  export interface MaintenanceWindowTask {
    /**
     * The Maintenance Window ID where the task is registered.
     */
    WindowId?: MaintenanceWindowId;
    /**
     * The task ID.
     */
    WindowTaskId?: MaintenanceWindowTaskId;
    /**
     * The resource that the task uses during execution. For RUN_COMMAND and AUTOMATION task types, TaskArn is the Systems Manager document name or ARN. For LAMBDA tasks, it's the function name or ARN. For STEP_FUNCTION tasks, it's the state machine ARN.
     */
    TaskArn?: MaintenanceWindowTaskArn;
    /**
     * The type of task. The type can be one of the following: RUN_COMMAND, AUTOMATION, LAMBDA, or STEP_FUNCTION.
     */
    Type?: MaintenanceWindowTaskType;
    /**
     * The targets (either instances or tags). Instances are specified using Key=instanceids,Values=&lt;instanceid1&gt;,&lt;instanceid2&gt;. Tags are specified using Key=&lt;tag name&gt;,Values=&lt;tag value&gt;.
     */
    Targets?: Targets;
    /**
     * The parameters that should be passed to the task when it is executed.   TaskParameters has been deprecated. To specify parameters to pass to a task when it runs, instead use the Parameters option in the TaskInvocationParameters structure. For information about how Systems Manager handles these options for the supported Maintenance Window task types, see MaintenanceWindowTaskInvocationParameters. 
     */
    TaskParameters?: MaintenanceWindowTaskParameters;
    /**
     * The priority of the task in the Maintenance Window. The lower the number, the higher the priority. Tasks that have the same priority are scheduled in parallel.
     */
    Priority?: MaintenanceWindowTaskPriority;
    /**
     * Information about an Amazon S3 bucket to write task-level logs to.   LoggingInfo has been deprecated. To specify an S3 bucket to contain logs, instead use the OutputS3BucketName and OutputS3KeyPrefix options in the TaskInvocationParameters structure. For information about how Systems Manager handles these options for the supported Maintenance Window task types, see MaintenanceWindowTaskInvocationParameters. 
     */
    LoggingInfo?: LoggingInfo;
    /**
     * The role that should be assumed when executing the task
     */
    ServiceRoleArn?: ServiceRole;
    /**
     * The maximum number of targets this task can be run for in parallel.
     */
    MaxConcurrency?: MaxConcurrency;
    /**
     * The maximum number of errors allowed before this task stops being scheduled.
     */
    MaxErrors?: MaxErrors;
    /**
     * The task name.
     */
    Name?: MaintenanceWindowName;
    /**
     * A description of the task.
     */
    Description?: MaintenanceWindowDescription;
  }
  export type MaintenanceWindowTaskArn = string;
  export type MaintenanceWindowTaskId = string;
  export interface MaintenanceWindowTaskInvocationParameters {
    /**
     * The parameters for a RUN_COMMAND task type.
     */
    RunCommand?: MaintenanceWindowRunCommandParameters;
    /**
     * The parameters for an AUTOMATION task type.
     */
    Automation?: MaintenanceWindowAutomationParameters;
    /**
     * The parameters for a STEP_FUNCTION task type.
     */
    StepFunctions?: MaintenanceWindowStepFunctionsParameters;
    /**
     * The parameters for a LAMBDA task type.
     */
    Lambda?: MaintenanceWindowLambdaParameters;
  }
  export type MaintenanceWindowTaskList = MaintenanceWindowTask[];
  export type MaintenanceWindowTaskParameterName = string;
  export type MaintenanceWindowTaskParameterValue = string;
  export interface MaintenanceWindowTaskParameterValueExpression {
    /**
     * This field contains an array of 0 or more strings, each 1 to 255 characters in length.
     */
    Values?: MaintenanceWindowTaskParameterValueList;
  }
  export type MaintenanceWindowTaskParameterValueList = MaintenanceWindowTaskParameterValue[];
  export type MaintenanceWindowTaskParameters = {[key: string]: MaintenanceWindowTaskParameterValueExpression};
  export type MaintenanceWindowTaskParametersList = MaintenanceWindowTaskParameters[];
  export type MaintenanceWindowTaskPriority = number;
  export type MaintenanceWindowTaskTargetId = string;
  export type MaintenanceWindowTaskType = "RUN_COMMAND"|"AUTOMATION"|"STEP_FUNCTIONS"|"LAMBDA"|string;
  export type MaintenanceWindowTimezone = string;
  export type MaintenanceWindowsForTargetList = MaintenanceWindowIdentityForTarget[];
  export type ManagedInstanceId = string;
  export type MaxConcurrency = string;
  export type MaxErrors = string;
  export type MaxResults = number;
  export type MaxResultsEC2Compatible = number;
  export interface ModifyDocumentPermissionRequest {
    /**
     * The name of the document that you want to share.
     */
    Name: DocumentName;
    /**
     * The permission type for the document. The permission type can be Share.
     */
    PermissionType: DocumentPermissionType;
    /**
     * The AWS user accounts that should have access to the document. The account IDs can either be a group of account IDs or All.
     */
    AccountIdsToAdd?: AccountIdList;
    /**
     * The AWS user accounts that should no longer have access to the document. The AWS user account can either be a group of account IDs or All. This action has a higher priority than AccountIdsToAdd. If you specify an account ID to add and the same ID to remove, the system removes access to the document.
     */
    AccountIdsToRemove?: AccountIdList;
  }
  export interface ModifyDocumentPermissionResponse {
  }
  export type NextToken = string;
  export interface NonCompliantSummary {
    /**
     * The total number of compliance items that are not compliant.
     */
    NonCompliantCount?: ComplianceSummaryCount;
    /**
     * A summary of the non-compliance severity by compliance type
     */
    SeveritySummary?: SeveritySummary;
  }
  export type NormalStringMap = {[key: string]: String};
  export type NotificationArn = string;
  export interface NotificationConfig {
    /**
     * An Amazon Resource Name (ARN) for a Simple Notification Service (SNS) topic. Run Command pushes notifications about command status changes to this topic.
     */
    NotificationArn?: NotificationArn;
    /**
     * The different events for which you can receive notifications. These events include the following: All (events), InProgress, Success, TimedOut, Cancelled, Failed. To learn more about these events, see Configuring Amazon SNS Notifications for Run Command in the AWS Systems Manager User Guide.
     */
    NotificationEvents?: NotificationEventList;
    /**
     * Command: Receive notification when the status of a command changes. Invocation: For commands sent to multiple instances, receive notification on a per-instance basis when the status of a command changes. 
     */
    NotificationType?: NotificationType;
  }
  export type NotificationEvent = "All"|"InProgress"|"Success"|"TimedOut"|"Cancelled"|"Failed"|string;
  export type NotificationEventList = NotificationEvent[];
  export type NotificationType = "Command"|"Invocation"|string;
  export type OperatingSystem = "WINDOWS"|"AMAZON_LINUX"|"AMAZON_LINUX_2"|"UBUNTU"|"REDHAT_ENTERPRISE_LINUX"|"SUSE"|"CENTOS"|string;
  export interface OutputSource {
    /**
     * The ID of the output source, for example the URL of an Amazon S3 bucket.
     */
    OutputSourceId?: OutputSourceId;
    /**
     * The type of source where the association execution details are stored, for example, Amazon S3.
     */
    OutputSourceType?: OutputSourceType;
  }
  export type OutputSourceId = string;
  export type OutputSourceType = string;
  export type OwnerInformation = string;
  export type PSParameterName = string;
  export type PSParameterSelector = string;
  export type PSParameterValue = string;
  export type PSParameterVersion = number;
  export interface Parameter {
    /**
     * The name of the parameter.
     */
    Name?: PSParameterName;
    /**
     * The type of parameter. Valid values include the following: String, String list, Secure string.
     */
    Type?: ParameterType;
    /**
     * The parameter value.
     */
    Value?: PSParameterValue;
    /**
     * The parameter version.
     */
    Version?: PSParameterVersion;
    /**
     * Either the version number or the label used to retrieve the parameter value. Specify selectors by using one of the following formats: parameter_name:version parameter_name:label
     */
    Selector?: PSParameterSelector;
    /**
     * Applies to parameters that reference information in other AWS services. SourceResult is the raw result or response from the source.
     */
    SourceResult?: String;
    /**
     * Date the parameter was last changed or updated and the parameter version was created.
     */
    LastModifiedDate?: DateTime;
    /**
     * The Amazon Resource Name (ARN) of the parameter.
     */
    ARN?: String;
  }
  export type ParameterDescription = string;
  export interface ParameterHistory {
    /**
     * The name of the parameter.
     */
    Name?: PSParameterName;
    /**
     * The type of parameter used.
     */
    Type?: ParameterType;
    /**
     * The ID of the query key used for this parameter.
     */
    KeyId?: ParameterKeyId;
    /**
     * Date the parameter was last changed or updated.
     */
    LastModifiedDate?: DateTime;
    /**
     * Amazon Resource Name (ARN) of the AWS user who last changed the parameter.
     */
    LastModifiedUser?: String;
    /**
     * Information about the parameter.
     */
    Description?: ParameterDescription;
    /**
     * The parameter value.
     */
    Value?: PSParameterValue;
    /**
     * Parameter names can include the following letters and symbols. a-zA-Z0-9_.-
     */
    AllowedPattern?: AllowedPattern;
    /**
     * The parameter version.
     */
    Version?: PSParameterVersion;
    /**
     * Labels assigned to the parameter version.
     */
    Labels?: ParameterLabelList;
  }
  export type ParameterHistoryList = ParameterHistory[];
  export type ParameterKeyId = string;
  export type ParameterLabel = string;
  export type ParameterLabelList = ParameterLabel[];
  export type ParameterList = Parameter[];
  export interface ParameterMetadata {
    /**
     * The parameter name.
     */
    Name?: PSParameterName;
    /**
     * The type of parameter. Valid parameter types include the following: String, String list, Secure string.
     */
    Type?: ParameterType;
    /**
     * The ID of the query key used for this parameter.
     */
    KeyId?: ParameterKeyId;
    /**
     * Date the parameter was last changed or updated.
     */
    LastModifiedDate?: DateTime;
    /**
     * Amazon Resource Name (ARN) of the AWS user who last changed the parameter.
     */
    LastModifiedUser?: String;
    /**
     * Description of the parameter actions.
     */
    Description?: ParameterDescription;
    /**
     * A parameter name can include only the following letters and symbols. a-zA-Z0-9_.-
     */
    AllowedPattern?: AllowedPattern;
    /**
     * The parameter version.
     */
    Version?: PSParameterVersion;
  }
  export type ParameterMetadataList = ParameterMetadata[];
  export type ParameterName = string;
  export type ParameterNameList = PSParameterName[];
  export interface ParameterStringFilter {
    /**
     * The name of the filter.
     */
    Key: ParameterStringFilterKey;
    /**
     * Valid options are Equals and BeginsWith. For Path filter, valid options are Recursive and OneLevel.
     */
    Option?: ParameterStringQueryOption;
    /**
     * The value you want to search for.
     */
    Values?: ParameterStringFilterValueList;
  }
  export type ParameterStringFilterKey = string;
  export type ParameterStringFilterList = ParameterStringFilter[];
  export type ParameterStringFilterValue = string;
  export type ParameterStringFilterValueList = ParameterStringFilterValue[];
  export type ParameterStringQueryOption = string;
  export type ParameterType = "String"|"StringList"|"SecureString"|string;
  export type ParameterValue = string;
  export type ParameterValueList = ParameterValue[];
  export type Parameters = {[key: string]: ParameterValueList};
  export interface ParametersFilter {
    /**
     * The name of the filter.
     */
    Key: ParametersFilterKey;
    /**
     * The filter values.
     */
    Values: ParametersFilterValueList;
  }
  export type ParametersFilterKey = "Name"|"Type"|"KeyId"|string;
  export type ParametersFilterList = ParametersFilter[];
  export type ParametersFilterValue = string;
  export type ParametersFilterValueList = ParametersFilterValue[];
  export interface Patch {
    /**
     * The ID of the patch (this is different than the Microsoft Knowledge Base ID).
     */
    Id?: PatchId;
    /**
     * The date the patch was released.
     */
    ReleaseDate?: DateTime;
    /**
     * The title of the patch.
     */
    Title?: PatchTitle;
    /**
     * The description of the patch.
     */
    Description?: PatchDescription;
    /**
     * The URL where more information can be obtained about the patch.
     */
    ContentUrl?: PatchContentUrl;
    /**
     * The name of the vendor providing the patch.
     */
    Vendor?: PatchVendor;
    /**
     * The product family the patch is applicable for (for example, Windows).
     */
    ProductFamily?: PatchProductFamily;
    /**
     * The specific product the patch is applicable for (for example, WindowsServer2016).
     */
    Product?: PatchProduct;
    /**
     * The classification of the patch (for example, SecurityUpdates, Updates, CriticalUpdates).
     */
    Classification?: PatchClassification;
    /**
     * The severity of the patch (for example Critical, Important, Moderate).
     */
    MsrcSeverity?: PatchMsrcSeverity;
    /**
     * The Microsoft Knowledge Base ID of the patch.
     */
    KbNumber?: PatchKbNumber;
    /**
     * The ID of the MSRC bulletin the patch is related to.
     */
    MsrcNumber?: PatchMsrcNumber;
    /**
     * The language of the patch if it's language-specific.
     */
    Language?: PatchLanguage;
  }
  export type PatchAction = "ALLOW_AS_DEPENDENCY"|"BLOCK"|string;
  export interface PatchBaselineIdentity {
    /**
     * The ID of the patch baseline.
     */
    BaselineId?: BaselineId;
    /**
     * The name of the patch baseline.
     */
    BaselineName?: BaselineName;
    /**
     * Defines the operating system the patch baseline applies to. The Default value is WINDOWS. 
     */
    OperatingSystem?: OperatingSystem;
    /**
     * The description of the patch baseline.
     */
    BaselineDescription?: BaselineDescription;
    /**
     * Whether this is the default baseline. Note that Systems Manager supports creating multiple default patch baselines. For example, you can create a default patch baseline for each operating system.
     */
    DefaultBaseline?: DefaultBaseline;
  }
  export type PatchBaselineIdentityList = PatchBaselineIdentity[];
  export type PatchBaselineMaxResults = number;
  export type PatchClassification = string;
  export interface PatchComplianceData {
    /**
     * The title of the patch.
     */
    Title: PatchTitle;
    /**
     * The operating system-specific ID of the patch.
     */
    KBId: PatchKbNumber;
    /**
     * The classification of the patch (for example, SecurityUpdates, Updates, CriticalUpdates).
     */
    Classification: PatchClassification;
    /**
     * The severity of the patch (for example, Critical, Important, Moderate).
     */
    Severity: PatchSeverity;
    /**
     * The state of the patch on the instance, such as INSTALLED or FAILED. For descriptions of each patch state, see About Patch Compliance in the AWS Systems Manager User Guide.
     */
    State: PatchComplianceDataState;
    /**
     * The date/time the patch was installed on the instance. Note that not all operating systems provide this level of information.
     */
    InstalledTime: DateTime;
  }
  export type PatchComplianceDataList = PatchComplianceData[];
  export type PatchComplianceDataState = "INSTALLED"|"INSTALLED_OTHER"|"INSTALLED_REJECTED"|"MISSING"|"NOT_APPLICABLE"|"FAILED"|string;
  export type PatchComplianceLevel = "CRITICAL"|"HIGH"|"MEDIUM"|"LOW"|"INFORMATIONAL"|"UNSPECIFIED"|string;
  export type PatchComplianceMaxResults = number;
  export type PatchContentUrl = string;
  export type PatchDeploymentStatus = "APPROVED"|"PENDING_APPROVAL"|"EXPLICIT_APPROVED"|"EXPLICIT_REJECTED"|string;
  export type PatchDescription = string;
  export type PatchFailedCount = number;
  export interface PatchFilter {
    /**
     * The key for the filter. See PatchFilter for lists of valid keys for each operating system type.
     */
    Key: PatchFilterKey;
    /**
     * The value for the filter key. See PatchFilter for lists of valid values for each key based on operating system type.
     */
    Values: PatchFilterValueList;
  }
  export interface PatchFilterGroup {
    /**
     * The set of patch filters that make up the group.
     */
    PatchFilters: PatchFilterList;
  }
  export type PatchFilterKey = "PRODUCT"|"CLASSIFICATION"|"MSRC_SEVERITY"|"PATCH_ID"|"SECTION"|"PRIORITY"|"SEVERITY"|string;
  export type PatchFilterList = PatchFilter[];
  export type PatchFilterValue = string;
  export type PatchFilterValueList = PatchFilterValue[];
  export type PatchGroup = string;
  export type PatchGroupList = PatchGroup[];
  export interface PatchGroupPatchBaselineMapping {
    /**
     * The name of the patch group registered with the patch baseline.
     */
    PatchGroup?: PatchGroup;
    /**
     * The patch baseline the patch group is registered with.
     */
    BaselineIdentity?: PatchBaselineIdentity;
  }
  export type PatchGroupPatchBaselineMappingList = PatchGroupPatchBaselineMapping[];
  export type PatchId = string;
  export type PatchIdList = PatchId[];
  export type PatchInstalledCount = number;
  export type PatchInstalledOtherCount = number;
  export type PatchInstalledRejectedCount = number;
  export type PatchKbNumber = string;
  export type PatchLanguage = string;
  export type PatchList = Patch[];
  export type PatchMissingCount = number;
  export type PatchMsrcNumber = string;
  export type PatchMsrcSeverity = string;
  export type PatchNotApplicableCount = number;
  export type PatchOperationType = "Scan"|"Install"|string;
  export interface PatchOrchestratorFilter {
    /**
     * The key for the filter.
     */
    Key?: PatchOrchestratorFilterKey;
    /**
     * The value for the filter.
     */
    Values?: PatchOrchestratorFilterValues;
  }
  export type PatchOrchestratorFilterKey = string;
  export type PatchOrchestratorFilterList = PatchOrchestratorFilter[];
  export type PatchOrchestratorFilterValue = string;
  export type PatchOrchestratorFilterValues = PatchOrchestratorFilterValue[];
  export type PatchProduct = string;
  export type PatchProductFamily = string;
  export interface PatchRule {
    /**
     * The patch filter group that defines the criteria for the rule.
     */
    PatchFilterGroup: PatchFilterGroup;
    /**
     * A compliance severity level for all approved patches in a patch baseline. Valid compliance severity levels include the following: Unspecified, Critical, High, Medium, Low, and Informational.
     */
    ComplianceLevel?: PatchComplianceLevel;
    /**
     * The number of days after the release date of each patch matched by the rule that the patch is marked as approved in the patch baseline. For example, a value of 7 means that patches are approved seven days after they are released. 
     */
    ApproveAfterDays: ApproveAfterDays;
    /**
     * For instances identified by the approval rule filters, enables a patch baseline to apply non-security updates available in the specified repository. The default value is 'false'. Applies to Linux instances only.
     */
    EnableNonSecurity?: Boolean;
  }
  export interface PatchRuleGroup {
    /**
     * The rules that make up the rule group.
     */
    PatchRules: PatchRuleList;
  }
  export type PatchRuleList = PatchRule[];
  export type PatchSeverity = string;
  export interface PatchSource {
    /**
     * The name specified to identify the patch source.
     */
    Name: PatchSourceName;
    /**
     * The specific operating system versions a patch repository applies to, such as "Ubuntu16.04", "AmazonLinux2016.09", "RedhatEnterpriseLinux7.2" or "Suse12.7". For lists of supported product values, see PatchFilter.
     */
    Products: PatchSourceProductList;
    /**
     * The value of the yum repo configuration. For example:  cachedir=/var/cache/yum/$basesearch   $releasever   keepcache=0   debuglevel=2 
     */
    Configuration: PatchSourceConfiguration;
  }
  export type PatchSourceConfiguration = string;
  export type PatchSourceList = PatchSource[];
  export type PatchSourceName = string;
  export type PatchSourceProduct = string;
  export type PatchSourceProductList = PatchSourceProduct[];
  export interface PatchStatus {
    /**
     * The approval status of a patch (APPROVED, PENDING_APPROVAL, EXPLICIT_APPROVED, EXPLICIT_REJECTED).
     */
    DeploymentStatus?: PatchDeploymentStatus;
    /**
     * The compliance severity level for a patch.
     */
    ComplianceLevel?: PatchComplianceLevel;
    /**
     * The date the patch was approved (or will be approved if the status is PENDING_APPROVAL).
     */
    ApprovalDate?: DateTime;
  }
  export type PatchTitle = string;
  export type PatchVendor = string;
  export type PingStatus = "Online"|"ConnectionLost"|"Inactive"|string;
  export type PlatformType = "Windows"|"Linux"|string;
  export type PlatformTypeList = PlatformType[];
  export type Product = string;
  export interface PutComplianceItemsRequest {
    /**
     * Specify an ID for this resource. For a managed instance, this is the instance ID.
     */
    ResourceId: ComplianceResourceId;
    /**
     * Specify the type of resource. ManagedInstance is currently the only supported resource type.
     */
    ResourceType: ComplianceResourceType;
    /**
     * Specify the compliance type. For example, specify Association (for a State Manager association), Patch, or Custom:string.
     */
    ComplianceType: ComplianceTypeName;
    /**
     * A summary of the call execution that includes an execution ID, the type of execution (for example, Command), and the date/time of the execution using a datetime object that is saved in the following format: yyyy-MM-dd'T'HH:mm:ss'Z'.
     */
    ExecutionSummary: ComplianceExecutionSummary;
    /**
     * Information about the compliance as defined by the resource type. For example, for a patch compliance type, Items includes information about the PatchSeverity, Classification, etc.
     */
    Items: ComplianceItemEntryList;
    /**
     * MD5 or SHA-256 content hash. The content hash is used to determine if existing information should be overwritten or ignored. If the content hashes match, the request to put compliance information is ignored.
     */
    ItemContentHash?: ComplianceItemContentHash;
  }
  export interface PutComplianceItemsResult {
  }
  export type PutInventoryMessage = string;
  export interface PutInventoryRequest {
    /**
     * One or more instance IDs where you want to add or update inventory items.
     */
    InstanceId: InstanceId;
    /**
     * The inventory items that you want to add or update on instances.
     */
    Items: InventoryItemList;
  }
  export interface PutInventoryResult {
    /**
     * Information about the request.
     */
    Message?: PutInventoryMessage;
  }
  export interface PutParameterRequest {
    /**
     * The fully qualified name of the parameter that you want to add to the system. The fully qualified name includes the complete hierarchy of the parameter path and name. For example: /Dev/DBServer/MySQL/db-string13  Naming Constraints:   Parameter names are case sensitive.   A parameter name must be unique within an AWS Region   A parameter name can't be prefixed with "aws" or "ssm" (case-insensitive).   Parameter names can include only the following symbols and letters: a-zA-Z0-9_.-/    A parameter name can't include spaces.   Parameter hierarchies are limited to a maximum depth of fifteen levels.   For additional information about valid values for parameter names, see Requirements and Constraints for Parameter Names in the AWS Systems Manager User Guide.  The maximum length constraint listed below includes capacity for additional system attributes that are not part of the name. The maximum length for the fully qualified parameter name is 1011 characters.  
     */
    Name: PSParameterName;
    /**
     * Information about the parameter that you want to add to the system. Optional but recommended.  Do not enter personally identifiable information in this field. 
     */
    Description?: ParameterDescription;
    /**
     * The parameter value that you want to add to the system.
     */
    Value: PSParameterValue;
    /**
     * The type of parameter that you want to add to the system. Items in a StringList must be separated by a comma (,). You can't use other punctuation or special character to escape items in the list. If you have a parameter value that requires a comma, then use the String data type.   SecureString is not currently supported for AWS CloudFormation templates or in the China Regions. 
     */
    Type: ParameterType;
    /**
     * The KMS Key ID that you want to use to encrypt a parameter. Either the default AWS Key Management Service (AWS KMS) key automatically assigned to your AWS account or a custom key. Required for parameters that use the SecureString data type. If you don't specify a key ID, the system uses the default key associated with your AWS account.   To use your default AWS KMS key, choose the SecureString data type, and do not specify the Key ID when you create the parameter. The system automatically populates Key ID with your default KMS key.   To use a custom KMS key, choose the SecureString data type with the Key ID parameter.  
     */
    KeyId?: ParameterKeyId;
    /**
     * Overwrite an existing parameter. If not specified, will default to "false".
     */
    Overwrite?: Boolean;
    /**
     * A regular expression used to validate the parameter value. For example, for String types with values restricted to numbers, you can specify the following: AllowedPattern=^\d+$ 
     */
    AllowedPattern?: AllowedPattern;
  }
  export interface PutParameterResult {
    /**
     * The new version number of a parameter. If you edit a parameter value, Parameter Store automatically creates a new version and assigns this new version a unique ID. You can reference a parameter version ID in API actions or in Systems Manager documents (SSM documents). By default, if you don't specify a specific version, the system returns the latest parameter value when a parameter is called.
     */
    Version?: PSParameterVersion;
  }
  export interface RegisterDefaultPatchBaselineRequest {
    /**
     * The ID of the patch baseline that should be the default patch baseline.
     */
    BaselineId: BaselineId;
  }
  export interface RegisterDefaultPatchBaselineResult {
    /**
     * The ID of the default patch baseline.
     */
    BaselineId?: BaselineId;
  }
  export interface RegisterPatchBaselineForPatchGroupRequest {
    /**
     * The ID of the patch baseline to register the patch group with.
     */
    BaselineId: BaselineId;
    /**
     * The name of the patch group that should be registered with the patch baseline.
     */
    PatchGroup: PatchGroup;
  }
  export interface RegisterPatchBaselineForPatchGroupResult {
    /**
     * The ID of the patch baseline the patch group was registered with.
     */
    BaselineId?: BaselineId;
    /**
     * The name of the patch group registered with the patch baseline.
     */
    PatchGroup?: PatchGroup;
  }
  export interface RegisterTargetWithMaintenanceWindowRequest {
    /**
     * The ID of the Maintenance Window the target should be registered with.
     */
    WindowId: MaintenanceWindowId;
    /**
     * The type of target being registered with the Maintenance Window.
     */
    ResourceType: MaintenanceWindowResourceType;
    /**
     * The targets (either instances or tags).  Specify instances using the following format:  Key=InstanceIds,Values=&lt;instance-id-1&gt;,&lt;instance-id-2&gt;  Specify tags using either of the following formats:  Key=tag:&lt;tag-key&gt;,Values=&lt;tag-value-1&gt;,&lt;tag-value-2&gt;   Key=tag-key,Values=&lt;tag-key-1&gt;,&lt;tag-key-2&gt; 
     */
    Targets: Targets;
    /**
     * User-provided value that will be included in any CloudWatch events raised while running tasks for these targets in this Maintenance Window.
     */
    OwnerInformation?: OwnerInformation;
    /**
     * An optional name for the target.
     */
    Name?: MaintenanceWindowName;
    /**
     * An optional description for the target.
     */
    Description?: MaintenanceWindowDescription;
    /**
     * User-provided idempotency token.
     */
    ClientToken?: ClientToken;
  }
  export interface RegisterTargetWithMaintenanceWindowResult {
    /**
     * The ID of the target definition in this Maintenance Window.
     */
    WindowTargetId?: MaintenanceWindowTargetId;
  }
  export interface RegisterTaskWithMaintenanceWindowRequest {
    /**
     * The ID of the Maintenance Window the task should be added to.
     */
    WindowId: MaintenanceWindowId;
    /**
     * The targets (either instances or Maintenance Window targets). Specify instances using the following format:   Key=InstanceIds,Values=&lt;instance-id-1&gt;,&lt;instance-id-2&gt;  Specify Maintenance Window targets using the following format:  Key=&lt;WindowTargetIds&gt;,Values=&lt;window-target-id-1&gt;,&lt;window-target-id-2&gt; 
     */
    Targets: Targets;
    /**
     * The ARN of the task to execute 
     */
    TaskArn: MaintenanceWindowTaskArn;
    /**
     * The role to assume when running the Maintenance Window task. If you do not specify a service role ARN, Systems Manager will use your account's service-linked role for Systems Manager by default. If no service-linked role for Systems Manager exists in your account, it will be created when you run RegisterTaskWithMaintenanceWindow without specifying a service role ARN. For more information, see Service-Linked Role Permissions for Systems Manager and Should I Use a Service-Linked Role or a Custom Service Role to Run Maintenance Window Tasks?  in the AWS Systems Manager User Guide.
     */
    ServiceRoleArn?: ServiceRole;
    /**
     * The type of task being registered.
     */
    TaskType: MaintenanceWindowTaskType;
    /**
     * The parameters that should be passed to the task when it is executed.   TaskParameters has been deprecated. To specify parameters to pass to a task when it runs, instead use the Parameters option in the TaskInvocationParameters structure. For information about how Systems Manager handles these options for the supported Maintenance Window task types, see MaintenanceWindowTaskInvocationParameters. 
     */
    TaskParameters?: MaintenanceWindowTaskParameters;
    /**
     * The parameters that the task should use during execution. Populate only the fields that match the task type. All other fields should be empty. 
     */
    TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters;
    /**
     * The priority of the task in the Maintenance Window, the lower the number the higher the priority. Tasks in a Maintenance Window are scheduled in priority order with tasks that have the same priority scheduled in parallel.
     */
    Priority?: MaintenanceWindowTaskPriority;
    /**
     * The maximum number of targets this task can be run for in parallel.
     */
    MaxConcurrency: MaxConcurrency;
    /**
     * The maximum number of errors allowed before this task stops being scheduled.
     */
    MaxErrors: MaxErrors;
    /**
     * A structure containing information about an Amazon S3 bucket to write instance-level logs to.    LoggingInfo has been deprecated. To specify an S3 bucket to contain logs, instead use the OutputS3BucketName and OutputS3KeyPrefix options in the TaskInvocationParameters structure. For information about how Systems Manager handles these options for the supported Maintenance Window task types, see MaintenanceWindowTaskInvocationParameters. 
     */
    LoggingInfo?: LoggingInfo;
    /**
     * An optional name for the task.
     */
    Name?: MaintenanceWindowName;
    /**
     * An optional description for the task.
     */
    Description?: MaintenanceWindowDescription;
    /**
     * User-provided idempotency token.
     */
    ClientToken?: ClientToken;
  }
  export interface RegisterTaskWithMaintenanceWindowResult {
    /**
     * The ID of the task in the Maintenance Window.
     */
    WindowTaskId?: MaintenanceWindowTaskId;
  }
  export type RegistrationLimit = number;
  export type RegistrationsCount = number;
  export type RemainingCount = number;
  export interface RemoveTagsFromResourceRequest {
    /**
     * The type of resource of which you want to remove a tag.  The ManagedInstance type for this API action is only for on-premises managed instances. You must specify the the name of the managed instance in the following format: mi-ID_number. For example, mi-1a2b3c4d5e6f. 
     */
    ResourceType: ResourceTypeForTagging;
    /**
     * The resource ID for which you want to remove tags. Use the ID of the resource. Here are some examples: ManagedInstance: mi-012345abcde MaintenanceWindow: mw-012345abcde PatchBaseline: pb-012345abcde For the Document and Parameter values, use the name of the resource.  The ManagedInstance type for this API action is only for on-premises managed instances. You must specify the the name of the managed instance in the following format: mi-ID_number. For example, mi-1a2b3c4d5e6f. 
     */
    ResourceId: ResourceId;
    /**
     * Tag keys that you want to remove from the specified resource.
     */
    TagKeys: KeyList;
  }
  export interface RemoveTagsFromResourceResult {
  }
  export interface ResolvedTargets {
    /**
     * A list of parameter values sent to targets that resolved during the Automation execution.
     */
    ParameterValues?: TargetParameterList;
    /**
     * A boolean value indicating whether the resolved target list is truncated.
     */
    Truncated?: Boolean;
  }
  export interface ResourceComplianceSummaryItem {
    /**
     * The compliance type.
     */
    ComplianceType?: ComplianceTypeName;
    /**
     * The resource type.
     */
    ResourceType?: ComplianceResourceType;
    /**
     * The resource ID.
     */
    ResourceId?: ComplianceResourceId;
    /**
     * The compliance status for the resource.
     */
    Status?: ComplianceStatus;
    /**
     * The highest severity item found for the resource. The resource is compliant for this item.
     */
    OverallSeverity?: ComplianceSeverity;
    /**
     * Information about the execution.
     */
    ExecutionSummary?: ComplianceExecutionSummary;
    /**
     * A list of items that are compliant for the resource.
     */
    CompliantSummary?: CompliantSummary;
    /**
     * A list of items that aren't compliant for the resource.
     */
    NonCompliantSummary?: NonCompliantSummary;
  }
  export type ResourceComplianceSummaryItemList = ResourceComplianceSummaryItem[];
  export type ResourceCount = number;
  export type ResourceCountByStatus = string;
  export type ResourceDataSyncAWSKMSKeyARN = string;
  export type ResourceDataSyncCreatedTime = Date;
  export interface ResourceDataSyncItem {
    /**
     * The name of the Resource Data Sync.
     */
    SyncName?: ResourceDataSyncName;
    /**
     * Configuration information for the target Amazon S3 bucket.
     */
    S3Destination?: ResourceDataSyncS3Destination;
    /**
     * The last time the configuration attempted to sync (UTC).
     */
    LastSyncTime?: LastResourceDataSyncTime;
    /**
     * The last time the sync operations returned a status of SUCCESSFUL (UTC).
     */
    LastSuccessfulSyncTime?: LastSuccessfulResourceDataSyncTime;
    /**
     * The status reported by the last sync.
     */
    LastStatus?: LastResourceDataSyncStatus;
    /**
     * The date and time the configuration was created (UTC).
     */
    SyncCreatedTime?: ResourceDataSyncCreatedTime;
    /**
     * The status message details reported by the last sync.
     */
    LastSyncStatusMessage?: LastResourceDataSyncMessage;
  }
  export type ResourceDataSyncItemList = ResourceDataSyncItem[];
  export type ResourceDataSyncName = string;
  export type ResourceDataSyncS3BucketName = string;
  export interface ResourceDataSyncS3Destination {
    /**
     * The name of the Amazon S3 bucket where the aggregated data is stored.
     */
    BucketName: ResourceDataSyncS3BucketName;
    /**
     * An Amazon S3 prefix for the bucket.
     */
    Prefix?: ResourceDataSyncS3Prefix;
    /**
     * A supported sync format. The following format is currently supported: JsonSerDe
     */
    SyncFormat: ResourceDataSyncS3Format;
    /**
     * The AWS Region with the Amazon S3 bucket targeted by the Resource Data Sync.
     */
    Region: ResourceDataSyncS3Region;
    /**
     * The ARN of an encryption key for a destination in Amazon S3. Must belong to the same region as the destination Amazon S3 bucket.
     */
    AWSKMSKeyARN?: ResourceDataSyncAWSKMSKeyARN;
  }
  export type ResourceDataSyncS3Format = "JsonSerDe"|string;
  export type ResourceDataSyncS3Prefix = string;
  export type ResourceDataSyncS3Region = string;
  export type ResourceId = string;
  export type ResourceType = "ManagedInstance"|"Document"|"EC2Instance"|string;
  export type ResourceTypeForTagging = "Document"|"ManagedInstance"|"MaintenanceWindow"|"Parameter"|"PatchBaseline"|string;
  export type ResponseCode = number;
  export interface ResultAttribute {
    /**
     * Name of the inventory item type. Valid value: AWS:InstanceInformation. Default Value: AWS:InstanceInformation.
     */
    TypeName: InventoryItemTypeName;
  }
  export type ResultAttributeList = ResultAttribute[];
  export interface ResumeSessionRequest {
    /**
     * The ID of the disconnected session to resume.
     */
    SessionId: SessionId;
  }
  export interface ResumeSessionResponse {
    /**
     * The ID of the session.
     */
    SessionId?: SessionId;
    /**
     * An encrypted token value containing session and caller information. Used to authenticate the connection to the instance.
     */
    TokenValue?: TokenValue;
    /**
     * A URL back to SSM Agent on the instance that the Session Manager client uses to send commands and receive output from the instance. Format: wss://ssm-messages.region.amazonaws.com/v1/data-channel/session-id?stream=(input|output).  region represents the Region identifier for an AWS Region supported by AWS Systems Manager, such as us-east-2 for the US East (Ohio) Region. For a list of supported region values, see the Region column in the AWS Systems Manager table of regions and endpoints in the AWS General Reference.  session-id represents the ID of a Session Manager session, such as 1a2b3c4dEXAMPLE.
     */
    StreamUrl?: StreamUrl;
  }
  export type S3BucketName = string;
  export type S3KeyPrefix = string;
  export interface S3OutputLocation {
    /**
     * (Deprecated) You can no longer specify this parameter. The system ignores it. Instead, Systems Manager automatically determines the Amazon S3 bucket region.
     */
    OutputS3Region?: S3Region;
    /**
     * The name of the Amazon S3 bucket.
     */
    OutputS3BucketName?: S3BucketName;
    /**
     * The Amazon S3 bucket subfolder.
     */
    OutputS3KeyPrefix?: S3KeyPrefix;
  }
  export interface S3OutputUrl {
    /**
     * A URL for an Amazon S3 bucket where you want to store the results of this request.
     */
    OutputUrl?: Url;
  }
  export type S3Region = string;
  export type ScheduleExpression = string;
  export interface ScheduledWindowExecution {
    /**
     * The ID of the Maintenance Window to be run.
     */
    WindowId?: MaintenanceWindowId;
    /**
     * The name of the Maintenance Window to be run.
     */
    Name?: MaintenanceWindowName;
    /**
     * The time, in ISO-8601 Extended format, that the Maintenance Window is scheduled to be run.
     */
    ExecutionTime?: MaintenanceWindowStringDateTime;
  }
  export type ScheduledWindowExecutionList = ScheduledWindowExecution[];
  export interface SendAutomationSignalRequest {
    /**
     * The unique identifier for an existing Automation execution that you want to send the signal to.
     */
    AutomationExecutionId: AutomationExecutionId;
    /**
     * The type of signal. Valid signal types include the following: Approve and Reject 
     */
    SignalType: SignalType;
    /**
     * The data sent with the signal. The data schema depends on the type of signal used in the request. 
     */
    Payload?: AutomationParameterMap;
  }
  export interface SendAutomationSignalResult {
  }
  export interface SendCommandRequest {
    /**
     * The instance IDs where the command should execute. You can specify a maximum of 50 IDs. If you prefer not to list individual instance IDs, you can instead send commands to a fleet of instances using the Targets parameter, which accepts EC2 tags. For more information about how to use targets, see Sending Commands to a Fleet in the AWS Systems Manager User Guide.
     */
    InstanceIds?: InstanceIdList;
    /**
     * (Optional) An array of search criteria that targets instances using a Key,Value combination that you specify. Targets is required if you don't provide one or more instance IDs in the call. For more information about how to use targets, see Sending Commands to a Fleet in the AWS Systems Manager User Guide.
     */
    Targets?: Targets;
    /**
     * Required. The name of the Systems Manager document to execute. This can be a public document or a custom document.
     */
    DocumentName: DocumentARN;
    /**
     * The SSM document version to use in the request. You can specify $DEFAULT, $LATEST, or a specific version number. If you execute commands by using the AWS CLI, then you must escape the first two options by using a backslash. If you specify a version number, then you don't need to use the backslash. For example: --document-version "\$DEFAULT" --document-version "\$LATEST" --document-version "3"
     */
    DocumentVersion?: DocumentVersion;
    /**
     * The Sha256 or Sha1 hash created by the system when the document was created.   Sha1 hashes have been deprecated. 
     */
    DocumentHash?: DocumentHash;
    /**
     * Sha256 or Sha1.  Sha1 hashes have been deprecated. 
     */
    DocumentHashType?: DocumentHashType;
    /**
     * If this time is reached and the command has not already started executing, it will not run.
     */
    TimeoutSeconds?: TimeoutSeconds;
    /**
     * User-specified information about the command, such as a brief description of what the command should do.
     */
    Comment?: Comment;
    /**
     * The required and optional parameters specified in the document being executed.
     */
    Parameters?: Parameters;
    /**
     * (Deprecated) You can no longer specify this parameter. The system ignores it. Instead, Systems Manager automatically determines the Amazon S3 bucket region.
     */
    OutputS3Region?: S3Region;
    /**
     * The name of the S3 bucket where command execution responses should be stored.
     */
    OutputS3BucketName?: S3BucketName;
    /**
     * The directory structure within the S3 bucket where the responses should be stored.
     */
    OutputS3KeyPrefix?: S3KeyPrefix;
    /**
     * (Optional) The maximum number of instances that are allowed to execute the command at the same time. You can specify a number such as 10 or a percentage such as 10%. The default value is 50. For more information about how to use MaxConcurrency, see Using Concurrency Controls in the AWS Systems Manager User Guide.
     */
    MaxConcurrency?: MaxConcurrency;
    /**
     * The maximum number of errors allowed without the command failing. When the command fails one more time beyond the value of MaxErrors, the systems stops sending the command to additional targets. You can specify a number like 10 or a percentage like 10%. The default value is 0. For more information about how to use MaxErrors, see Using Error Controls in the AWS Systems Manager User Guide.
     */
    MaxErrors?: MaxErrors;
    /**
     * The IAM role that Systems Manager uses to send notifications. 
     */
    ServiceRoleArn?: ServiceRole;
    /**
     * Configurations for sending notifications.
     */
    NotificationConfig?: NotificationConfig;
    /**
     * Enables Systems Manager to send Run Command output to Amazon CloudWatch Logs. 
     */
    CloudWatchOutputConfig?: CloudWatchOutputConfig;
  }
  export interface SendCommandResult {
    /**
     * The request as it was received by Systems Manager. Also provides the command ID which can be used future references to this request.
     */
    Command?: Command;
  }
  export type ServiceRole = string;
  export interface Session {
    /**
     * The ID of the session.
     */
    SessionId?: SessionId;
    /**
     * The instance that the Session Manager session connected to.
     */
    Target?: SessionTarget;
    /**
     * The status of the session. For example, "Connected" or "Terminated".
     */
    Status?: SessionStatus;
    /**
     * The date and time, in ISO-8601 Extended format, when the session began.
     */
    StartDate?: DateTime;
    /**
     * The date and time, in ISO-8601 Extended format, when the session was terminated.
     */
    EndDate?: DateTime;
    /**
     * The name of the Session Manager SSM document used to define the parameters and plugin settings for the session. For example, SSM-SessionManagerRunShell.
     */
    DocumentName?: DocumentName;
    /**
     * The ID of the AWS user account that started the session.
     */
    Owner?: SessionOwner;
    /**
     * Reserved for future use.
     */
    Details?: SessionDetails;
    /**
     * Reserved for future use.
     */
    OutputUrl?: SessionManagerOutputUrl;
  }
  export type SessionDetails = string;
  export interface SessionFilter {
    /**
     * The name of the filter.
     */
    key: SessionFilterKey;
    /**
     * The filter value. Valid values for each filter key are as follows:   InvokedAfter: Specify a timestamp to limit your results. For example, specify 2018-08-29T00:00:00Z to see sessions that started August 29, 2018, and later.   InvokedBefore: Specify a timestamp to limit your results. For example, specify 2018-08-29T00:00:00Z to see sessions that started before August 29, 2018.   Target: Specify an instance to which session connections have been made.   Owner: Specify an AWS user account to see a list of sessions started by that user.   Status: Specify a valid session status to see a list of all sessions with that status. Status values you can specify include:   Connected   Connecting   Disconnected   Terminated   Terminating   Failed    
     */
    value: SessionFilterValue;
  }
  export type SessionFilterKey = "InvokedAfter"|"InvokedBefore"|"Target"|"Owner"|"Status"|string;
  export type SessionFilterList = SessionFilter[];
  export type SessionFilterValue = string;
  export type SessionId = string;
  export type SessionList = Session[];
  export type SessionManagerCloudWatchOutputUrl = string;
  export interface SessionManagerOutputUrl {
    /**
     * Reserved for future use.
     */
    S3OutputUrl?: SessionManagerS3OutputUrl;
    /**
     * Reserved for future use.
     */
    CloudWatchOutputUrl?: SessionManagerCloudWatchOutputUrl;
  }
  export type SessionManagerParameterName = string;
  export type SessionManagerParameterValue = string;
  export type SessionManagerParameterValueList = SessionManagerParameterValue[];
  export type SessionManagerParameters = {[key: string]: SessionManagerParameterValueList};
  export type SessionManagerS3OutputUrl = string;
  export type SessionMaxResults = number;
  export type SessionOwner = string;
  export type SessionState = "Active"|"History"|string;
  export type SessionStatus = "Connected"|"Connecting"|"Disconnected"|"Terminated"|"Terminating"|"Failed"|string;
  export type SessionTarget = string;
  export interface SeveritySummary {
    /**
     * The total number of resources or compliance items that have a severity level of critical. Critical severity is determined by the organization that published the compliance items.
     */
    CriticalCount?: ComplianceSummaryCount;
    /**
     * The total number of resources or compliance items that have a severity level of high. High severity is determined by the organization that published the compliance items.
     */
    HighCount?: ComplianceSummaryCount;
    /**
     * The total number of resources or compliance items that have a severity level of medium. Medium severity is determined by the organization that published the compliance items.
     */
    MediumCount?: ComplianceSummaryCount;
    /**
     * The total number of resources or compliance items that have a severity level of low. Low severity is determined by the organization that published the compliance items.
     */
    LowCount?: ComplianceSummaryCount;
    /**
     * The total number of resources or compliance items that have a severity level of informational. Informational severity is determined by the organization that published the compliance items.
     */
    InformationalCount?: ComplianceSummaryCount;
    /**
     * The total number of resources or compliance items that have a severity level of unspecified. Unspecified severity is determined by the organization that published the compliance items.
     */
    UnspecifiedCount?: ComplianceSummaryCount;
  }
  export type SignalType = "Approve"|"Reject"|"StartStep"|"StopStep"|"Resume"|string;
  export type SnapshotDownloadUrl = string;
  export type SnapshotId = string;
  export type StandardErrorContent = string;
  export type StandardOutputContent = string;
  export interface StartAssociationsOnceRequest {
    /**
     * The association IDs that you want to execute immediately and only one time.
     */
    AssociationIds: AssociationIdList;
  }
  export interface StartAssociationsOnceResult {
  }
  export interface StartAutomationExecutionRequest {
    /**
     * The name of the Automation document to use for this execution.
     */
    DocumentName: DocumentARN;
    /**
     * The version of the Automation document to use for this execution.
     */
    DocumentVersion?: DocumentVersion;
    /**
     * A key-value map of execution parameters, which match the declared parameters in the Automation document.
     */
    Parameters?: AutomationParameterMap;
    /**
     * User-provided idempotency token. The token must be unique, is case insensitive, enforces the UUID format, and can't be reused.
     */
    ClientToken?: IdempotencyToken;
    /**
     * The execution mode of the automation. Valid modes include the following: Auto and Interactive. The default mode is Auto.
     */
    Mode?: ExecutionMode;
    /**
     * The name of the parameter used as the target resource for the rate-controlled execution. Required if you specify targets.
     */
    TargetParameterName?: AutomationParameterKey;
    /**
     * A key-value mapping to target resources. Required if you specify TargetParameterName.
     */
    Targets?: Targets;
    /**
     * A key-value mapping of document parameters to target resources. Both Targets and TargetMaps cannot be specified together.
     */
    TargetMaps?: TargetMaps;
    /**
     * The maximum number of targets allowed to run this task in parallel. You can specify a number, such as 10, or a percentage, such as 10%. The default value is 10.
     */
    MaxConcurrency?: MaxConcurrency;
    /**
     * The number of errors that are allowed before the system stops running the automation on additional targets. You can specify either an absolute number of errors, for example 10, or a percentage of the target set, for example 10%. If you specify 3, for example, the system stops running the automation when the fourth error is received. If you specify 0, then the system stops running the automation on additional targets after the first error result is returned. If you run an automation on 50 resources and set max-errors to 10%, then the system stops running the automation on additional targets when the sixth error is received. Executions that are already running an automation when max-errors is reached are allowed to complete, but some of these executions may fail as well. If you need to ensure that there won't be more than max-errors failed executions, set max-concurrency to 1 so the executions proceed one at a time.
     */
    MaxErrors?: MaxErrors;
  }
  export interface StartAutomationExecutionResult {
    /**
     * The unique ID of a newly scheduled automation execution.
     */
    AutomationExecutionId?: AutomationExecutionId;
  }
  export interface StartSessionRequest {
    /**
     * The instance to connect to for the session.
     */
    Target: SessionTarget;
    /**
     * The name of the SSM document to define the parameters and plugin settings for the session. For example, SSM-SessionManagerRunShell. If no document name is provided, a shell to the instance is launched by default.
     */
    DocumentName?: DocumentARN;
    /**
     * Reserved for future use.
     */
    Parameters?: SessionManagerParameters;
  }
  export interface StartSessionResponse {
    /**
     * The ID of the session.
     */
    SessionId?: SessionId;
    /**
     * An encrypted token value containing session and caller information. Used to authenticate the connection to the instance.
     */
    TokenValue?: TokenValue;
    /**
     * A URL back to SSM Agent on the instance that the Session Manager client uses to send commands and receive output from the instance. Format: wss://ssm-messages.region.amazonaws.com/v1/data-channel/session-id?stream=(input|output)   region represents the Region identifier for an AWS Region supported by AWS Systems Manager, such as us-east-2 for the US East (Ohio) Region. For a list of supported region values, see the Region column in the AWS Systems Manager table of regions and endpoints in the AWS General Reference.  session-id represents the ID of a Session Manager session, such as 1a2b3c4dEXAMPLE.
     */
    StreamUrl?: StreamUrl;
  }
  export type StatusAdditionalInfo = string;
  export type StatusDetails = string;
  export type StatusMessage = string;
  export type StatusName = string;
  export interface StepExecution {
    /**
     * The name of this execution step.
     */
    StepName?: String;
    /**
     * The action this step performs. The action determines the behavior of the step.
     */
    Action?: AutomationActionName;
    /**
     * The timeout seconds of the step.
     */
    TimeoutSeconds?: Long;
    /**
     * The action to take if the step fails. The default value is Abort.
     */
    OnFailure?: String;
    /**
     * The maximum number of tries to run the action of the step. The default value is 1.
     */
    MaxAttempts?: Integer;
    /**
     * If a step has begun execution, this contains the time the step started. If the step is in Pending status, this field is not populated.
     */
    ExecutionStartTime?: DateTime;
    /**
     * If a step has finished execution, this contains the time the execution ended. If the step has not yet concluded, this field is not populated.
     */
    ExecutionEndTime?: DateTime;
    /**
     * The execution status for this step. Valid values include: Pending, InProgress, Success, Cancelled, Failed, and TimedOut.
     */
    StepStatus?: AutomationExecutionStatus;
    /**
     * The response code returned by the execution of the step.
     */
    ResponseCode?: String;
    /**
     * Fully-resolved values passed into the step before execution.
     */
    Inputs?: NormalStringMap;
    /**
     * Returned values from the execution of the step.
     */
    Outputs?: AutomationParameterMap;
    /**
     * A message associated with the response code for an execution.
     */
    Response?: String;
    /**
     * If a step failed, this message explains why the execution failed.
     */
    FailureMessage?: String;
    /**
     * Information about the Automation failure.
     */
    FailureDetails?: FailureDetails;
    /**
     * The unique ID of a step execution.
     */
    StepExecutionId?: String;
    /**
     * A user-specified list of parameters to override when executing a step.
     */
    OverriddenParameters?: AutomationParameterMap;
    /**
     * The flag which can be used to end automation no matter whether the step succeeds or fails.
     */
    IsEnd?: Boolean;
    /**
     * The next step after the step succeeds.
     */
    NextStep?: String;
    /**
     * The flag which can be used to help decide whether the failure of current step leads to the Automation failure.
     */
    IsCritical?: Boolean;
    /**
     * Strategies used when step fails, we support Continue and Abort. Abort will fail the automation when the step fails. Continue will ignore the failure of current step and allow automation to execute the next step. With conditional branching, we add step:stepName to support the automation to go to another specific step.
     */
    ValidNextSteps?: ValidNextStepList;
  }
  export interface StepExecutionFilter {
    /**
     * One or more keys to limit the results. Valid filter keys include the following: StepName, Action, StepExecutionId, StepExecutionStatus, StartTimeBefore, StartTimeAfter.
     */
    Key: StepExecutionFilterKey;
    /**
     * The values of the filter key.
     */
    Values: StepExecutionFilterValueList;
  }
  export type StepExecutionFilterKey = "StartTimeBefore"|"StartTimeAfter"|"StepExecutionStatus"|"StepExecutionId"|"StepName"|"Action"|string;
  export type StepExecutionFilterList = StepExecutionFilter[];
  export type StepExecutionFilterValue = string;
  export type StepExecutionFilterValueList = StepExecutionFilterValue[];
  export type StepExecutionList = StepExecution[];
  export interface StopAutomationExecutionRequest {
    /**
     * The execution ID of the Automation to stop.
     */
    AutomationExecutionId: AutomationExecutionId;
    /**
     * The stop request type. Valid types include the following: Cancel and Complete. The default type is Cancel.
     */
    Type?: StopType;
  }
  export interface StopAutomationExecutionResult {
  }
  export type StopType = "Complete"|"Cancel"|string;
  export type StreamUrl = string;
  export type String = string;
  export type StringDateTime = string;
  export type StringList = String[];
  export interface Tag {
    /**
     * The name of the tag.
     */
    Key: TagKey;
    /**
     * The value of the tag.
     */
    Value: TagValue;
  }
  export type TagKey = string;
  export type TagList = Tag[];
  export type TagValue = string;
  export interface Target {
    /**
     * User-defined criteria for sending commands that target instances that meet the criteria. Key can be tag:&lt;Amazon EC2 tag&gt; or InstanceIds. For more information about how to send commands that target instances using Key,Value parameters, see Targeting Multiple Instances in the AWS Systems Manager User Guide.
     */
    Key?: TargetKey;
    /**
     * User-defined criteria that maps to Key. For example, if you specified tag:ServerRole, you could specify value:WebServer to execute a command on instances that include Amazon EC2 tags of ServerRole,WebServer. For more information about how to send commands that target instances using Key,Value parameters, see Sending Commands to a Fleet in the AWS Systems Manager User Guide.
     */
    Values?: TargetValues;
  }
  export type TargetCount = number;
  export type TargetKey = string;
  export type TargetMap = {[key: string]: TargetMapValueList};
  export type TargetMapKey = string;
  export type TargetMapValue = string;
  export type TargetMapValueList = TargetMapValue[];
  export type TargetMaps = TargetMap[];
  export type TargetParameterList = ParameterValue[];
  export type TargetType = string;
  export type TargetValue = string;
  export type TargetValues = TargetValue[];
  export type Targets = Target[];
  export interface TerminateSessionRequest {
    /**
     * The ID of the session to terminate.
     */
    SessionId: SessionId;
  }
  export interface TerminateSessionResponse {
    /**
     * The ID of the session that has been terminated.
     */
    SessionId?: SessionId;
  }
  export type TimeoutSeconds = number;
  export type TokenValue = string;
  export type TotalCount = number;
  export interface UpdateAssociationRequest {
    /**
     * The ID of the association you want to update. 
     */
    AssociationId: AssociationId;
    /**
     * The parameters you want to update for the association. If you create a parameter using Parameter Store, you can reference the parameter using {{ssm:parameter-name}}
     */
    Parameters?: Parameters;
    /**
     * The document version you want update for the association. 
     */
    DocumentVersion?: DocumentVersion;
    /**
     * The cron expression used to schedule the association that you want to update.
     */
    ScheduleExpression?: ScheduleExpression;
    /**
     * An Amazon S3 bucket where you want to store the results of this request.
     */
    OutputLocation?: InstanceAssociationOutputLocation;
    /**
     * The name of the association document.
     */
    Name?: DocumentName;
    /**
     * The targets of the association.
     */
    Targets?: Targets;
    /**
     * The name of the association that you want to update.
     */
    AssociationName?: AssociationName;
    /**
     * This parameter is provided for concurrency control purposes. You must specify the latest association version in the service. If you want to ensure that this request succeeds, either specify $LATEST, or omit this parameter.
     */
    AssociationVersion?: AssociationVersion;
    /**
     * The number of errors that are allowed before the system stops sending requests to run the association on additional targets. You can specify either an absolute number of errors, for example 10, or a percentage of the target set, for example 10%. If you specify 3, for example, the system stops sending requests when the fourth error is received. If you specify 0, then the system stops sending requests after the first error is returned. If you run an association on 50 instances and set MaxError to 10%, then the system stops sending the request when the sixth error is received. Executions that are already running an association when MaxErrors is reached are allowed to complete, but some of these executions may fail as well. If you need to ensure that there won't be more than max-errors failed executions, set MaxConcurrency to 1 so that executions proceed one at a time.
     */
    MaxErrors?: MaxErrors;
    /**
     * The maximum number of targets allowed to run the association at the same time. You can specify a number, for example 10, or a percentage of the target set, for example 10%. The default value is 100%, which means all targets run the association at the same time. If a new instance starts and attempts to execute an association while Systems Manager is executing MaxConcurrency associations, the association is allowed to run. During the next association interval, the new instance will process its association within the limit specified for MaxConcurrency.
     */
    MaxConcurrency?: MaxConcurrency;
    /**
     * The severity level to assign to the association.
     */
    ComplianceSeverity?: AssociationComplianceSeverity;
  }
  export interface UpdateAssociationResult {
    /**
     * The description of the association that was updated.
     */
    AssociationDescription?: AssociationDescription;
  }
  export interface UpdateAssociationStatusRequest {
    /**
     * The name of the Systems Manager document.
     */
    Name: DocumentName;
    /**
     * The ID of the instance.
     */
    InstanceId: InstanceId;
    /**
     * The association status.
     */
    AssociationStatus: AssociationStatus;
  }
  export interface UpdateAssociationStatusResult {
    /**
     * Information about the association.
     */
    AssociationDescription?: AssociationDescription;
  }
  export interface UpdateDocumentDefaultVersionRequest {
    /**
     * The name of a custom document that you want to set as the default version.
     */
    Name: DocumentName;
    /**
     * The version of a custom document that you want to set as the default version.
     */
    DocumentVersion: DocumentVersionNumber;
  }
  export interface UpdateDocumentDefaultVersionResult {
    /**
     * The description of a custom document that you want to set as the default version.
     */
    Description?: DocumentDefaultVersionDescription;
  }
  export interface UpdateDocumentRequest {
    /**
     * The content in a document that you want to update.
     */
    Content: DocumentContent;
    /**
     * The name of the document that you want to update.
     */
    Name: DocumentName;
    /**
     * The version of the document that you want to update.
     */
    DocumentVersion?: DocumentVersion;
    /**
     * Specify the document format for the new document version. Systems Manager supports JSON and YAML documents. JSON is the default format.
     */
    DocumentFormat?: DocumentFormat;
    /**
     * Specify a new target type for the document.
     */
    TargetType?: TargetType;
  }
  export interface UpdateDocumentResult {
    /**
     * A description of the document that was updated.
     */
    DocumentDescription?: DocumentDescription;
  }
  export interface UpdateMaintenanceWindowRequest {
    /**
     * The ID of the Maintenance Window to update.
     */
    WindowId: MaintenanceWindowId;
    /**
     * The name of the Maintenance Window.
     */
    Name?: MaintenanceWindowName;
    /**
     * An optional description for the update request.
     */
    Description?: MaintenanceWindowDescription;
    /**
     * The time zone that the scheduled Maintenance Window executions are based on, in Internet Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "etc/UTC", or "Asia/Seoul". For more information, see the Time Zone Database on the IANA website.
     */
    StartDate?: MaintenanceWindowStringDateTime;
    /**
     * The date and time, in ISO-8601 Extended format, for when you want the Maintenance Window to become inactive. EndDate allows you to set a date and time in the future when the Maintenance Window will no longer run.
     */
    EndDate?: MaintenanceWindowStringDateTime;
    /**
     * The schedule of the Maintenance Window in the form of a cron or rate expression.
     */
    Schedule?: MaintenanceWindowSchedule;
    /**
     * The time zone that the scheduled Maintenance Window executions are based on, in Internet Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "etc/UTC", or "Asia/Seoul". For more information, see the Time Zone Database on the IANA website.
     */
    ScheduleTimezone?: MaintenanceWindowTimezone;
    /**
     * The duration of the Maintenance Window in hours.
     */
    Duration?: MaintenanceWindowDurationHours;
    /**
     * The number of hours before the end of the Maintenance Window that Systems Manager stops scheduling new tasks for execution.
     */
    Cutoff?: MaintenanceWindowCutoff;
    /**
     * Whether targets must be registered with the Maintenance Window before tasks can be defined for those targets.
     */
    AllowUnassociatedTargets?: MaintenanceWindowAllowUnassociatedTargets;
    /**
     * Whether the Maintenance Window is enabled.
     */
    Enabled?: MaintenanceWindowEnabled;
    /**
     * If True, then all fields that are required by the CreateMaintenanceWindow action are also required for this API request. Optional fields that are not specified are set to null. 
     */
    Replace?: Boolean;
  }
  export interface UpdateMaintenanceWindowResult {
    /**
     * The ID of the created Maintenance Window.
     */
    WindowId?: MaintenanceWindowId;
    /**
     * The name of the Maintenance Window.
     */
    Name?: MaintenanceWindowName;
    /**
     * An optional description of the update.
     */
    Description?: MaintenanceWindowDescription;
    /**
     * The date and time, in ISO-8601 Extended format, for when the Maintenance Window is scheduled to become active. The Maintenance Window will not run before this specified time.
     */
    StartDate?: MaintenanceWindowStringDateTime;
    /**
     * The date and time, in ISO-8601 Extended format, for when the Maintenance Window is scheduled to become inactive. The Maintenance Window will not run after this specified time.
     */
    EndDate?: MaintenanceWindowStringDateTime;
    /**
     * The schedule of the Maintenance Window in the form of a cron or rate expression.
     */
    Schedule?: MaintenanceWindowSchedule;
    /**
     * The time zone that the scheduled Maintenance Window executions are based on, in Internet Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "etc/UTC", or "Asia/Seoul". For more information, see the Time Zone Database on the IANA website.
     */
    ScheduleTimezone?: MaintenanceWindowTimezone;
    /**
     * The duration of the Maintenance Window in hours.
     */
    Duration?: MaintenanceWindowDurationHours;
    /**
     * The number of hours before the end of the Maintenance Window that Systems Manager stops scheduling new tasks for execution.
     */
    Cutoff?: MaintenanceWindowCutoff;
    /**
     * Whether targets must be registered with the Maintenance Window before tasks can be defined for those targets.
     */
    AllowUnassociatedTargets?: MaintenanceWindowAllowUnassociatedTargets;
    /**
     * Whether the Maintenance Window is enabled.
     */
    Enabled?: MaintenanceWindowEnabled;
  }
  export interface UpdateMaintenanceWindowTargetRequest {
    /**
     * The Maintenance Window ID with which to modify the target.
     */
    WindowId: MaintenanceWindowId;
    /**
     * The target ID to modify.
     */
    WindowTargetId: MaintenanceWindowTargetId;
    /**
     * The targets to add or replace.
     */
    Targets?: Targets;
    /**
     * User-provided value that will be included in any CloudWatch events raised while running tasks for these targets in this Maintenance Window.
     */
    OwnerInformation?: OwnerInformation;
    /**
     * A name for the update.
     */
    Name?: MaintenanceWindowName;
    /**
     * An optional description for the update.
     */
    Description?: MaintenanceWindowDescription;
    /**
     * If True, then all fields that are required by the RegisterTargetWithMaintenanceWindow action are also required for this API request. Optional fields that are not specified are set to null.
     */
    Replace?: Boolean;
  }
  export interface UpdateMaintenanceWindowTargetResult {
    /**
     * The Maintenance Window ID specified in the update request.
     */
    WindowId?: MaintenanceWindowId;
    /**
     * The target ID specified in the update request.
     */
    WindowTargetId?: MaintenanceWindowTargetId;
    /**
     * The updated targets.
     */
    Targets?: Targets;
    /**
     * The updated owner.
     */
    OwnerInformation?: OwnerInformation;
    /**
     * The updated name.
     */
    Name?: MaintenanceWindowName;
    /**
     * The updated description.
     */
    Description?: MaintenanceWindowDescription;
  }
  export interface UpdateMaintenanceWindowTaskRequest {
    /**
     * The Maintenance Window ID that contains the task to modify.
     */
    WindowId: MaintenanceWindowId;
    /**
     * The task ID to modify.
     */
    WindowTaskId: MaintenanceWindowTaskId;
    /**
     * The targets (either instances or tags) to modify. Instances are specified using Key=instanceids,Values=instanceID_1,instanceID_2. Tags are specified using Key=tag_name,Values=tag_value. 
     */
    Targets?: Targets;
    /**
     * The task ARN to modify.
     */
    TaskArn?: MaintenanceWindowTaskArn;
    /**
     * The IAM service role ARN to modify. The system assumes this role during task execution. If you do not specify a service role ARN, Systems Manager will use your account's service-linked role for Systems Manager by default. If no service-linked role for Systems Manager exists in your account, it will be created when you run RegisterTaskWithMaintenanceWindow without specifying a service role ARN. For more information, see Service-Linked Role Permissions for Systems Manager and Should I Use a Service-Linked Role or a Custom Service Role to Run Maintenance Window Tasks?  in the AWS Systems Manager User Guide.
     */
    ServiceRoleArn?: ServiceRole;
    /**
     * The parameters to modify.   TaskParameters has been deprecated. To specify parameters to pass to a task when it runs, instead use the Parameters option in the TaskInvocationParameters structure. For information about how Systems Manager handles these options for the supported Maintenance Window task types, see MaintenanceWindowTaskInvocationParameters.  The map has the following format: Key: string, between 1 and 255 characters Value: an array of strings, each string is between 1 and 255 characters
     */
    TaskParameters?: MaintenanceWindowTaskParameters;
    /**
     * The parameters that the task should use during execution. Populate only the fields that match the task type. All other fields should be empty.
     */
    TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters;
    /**
     * The new task priority to specify. The lower the number, the higher the priority. Tasks that have the same priority are scheduled in parallel.
     */
    Priority?: MaintenanceWindowTaskPriority;
    /**
     * The new MaxConcurrency value you want to specify. MaxConcurrency is the number of targets that are allowed to run this task in parallel.
     */
    MaxConcurrency?: MaxConcurrency;
    /**
     * The new MaxErrors value to specify. MaxErrors is the maximum number of errors that are allowed before the task stops being scheduled.
     */
    MaxErrors?: MaxErrors;
    /**
     * The new logging location in Amazon S3 to specify.   LoggingInfo has been deprecated. To specify an S3 bucket to contain logs, instead use the OutputS3BucketName and OutputS3KeyPrefix options in the TaskInvocationParameters structure. For information about how Systems Manager handles these options for the supported Maintenance Window task types, see MaintenanceWindowTaskInvocationParameters. 
     */
    LoggingInfo?: LoggingInfo;
    /**
     * The new task name to specify.
     */
    Name?: MaintenanceWindowName;
    /**
     * The new task description to specify.
     */
    Description?: MaintenanceWindowDescription;
    /**
     * If True, then all fields that are required by the RegisterTaskWithMaintenanceWndow action are also required for this API request. Optional fields that are not specified are set to null.
     */
    Replace?: Boolean;
  }
  export interface UpdateMaintenanceWindowTaskResult {
    /**
     * The ID of the Maintenance Window that was updated.
     */
    WindowId?: MaintenanceWindowId;
    /**
     * The task ID of the Maintenance Window that was updated.
     */
    WindowTaskId?: MaintenanceWindowTaskId;
    /**
     * The updated target values.
     */
    Targets?: Targets;
    /**
     * The updated task ARN value.
     */
    TaskArn?: MaintenanceWindowTaskArn;
    /**
     * The updated service role ARN value.
     */
    ServiceRoleArn?: ServiceRole;
    /**
     * The updated parameter values.   TaskParameters has been deprecated. To specify parameters to pass to a task when it runs, instead use the Parameters option in the TaskInvocationParameters structure. For information about how Systems Manager handles these options for the supported Maintenance Window task types, see MaintenanceWindowTaskInvocationParameters. 
     */
    TaskParameters?: MaintenanceWindowTaskParameters;
    /**
     * The updated parameter values.
     */
    TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters;
    /**
     * The updated priority value.
     */
    Priority?: MaintenanceWindowTaskPriority;
    /**
     * The updated MaxConcurrency value.
     */
    MaxConcurrency?: MaxConcurrency;
    /**
     * The updated MaxErrors value.
     */
    MaxErrors?: MaxErrors;
    /**
     * The updated logging information in Amazon S3.   LoggingInfo has been deprecated. To specify an S3 bucket to contain logs, instead use the OutputS3BucketName and OutputS3KeyPrefix options in the TaskInvocationParameters structure. For information about how Systems Manager handles these options for the supported Maintenance Window task types, see MaintenanceWindowTaskInvocationParameters. 
     */
    LoggingInfo?: LoggingInfo;
    /**
     * The updated task name.
     */
    Name?: MaintenanceWindowName;
    /**
     * The updated task description.
     */
    Description?: MaintenanceWindowDescription;
  }
  export interface UpdateManagedInstanceRoleRequest {
    /**
     * The ID of the managed instance where you want to update the role.
     */
    InstanceId: ManagedInstanceId;
    /**
     * The IAM role you want to assign or change.
     */
    IamRole: IamRole;
  }
  export interface UpdateManagedInstanceRoleResult {
  }
  export interface UpdatePatchBaselineRequest {
    /**
     * The ID of the patch baseline to update.
     */
    BaselineId: BaselineId;
    /**
     * The name of the patch baseline.
     */
    Name?: BaselineName;
    /**
     * A set of global filters used to exclude patches from the baseline.
     */
    GlobalFilters?: PatchFilterGroup;
    /**
     * A set of rules used to include patches in the baseline.
     */
    ApprovalRules?: PatchRuleGroup;
    /**
     * A list of explicitly approved patches for the baseline. For information about accepted formats for lists of approved patches and rejected patches, see Package Name Formats for Approved and Rejected Patch Lists in the AWS Systems Manager User Guide.
     */
    ApprovedPatches?: PatchIdList;
    /**
     * Assigns a new compliance severity level to an existing patch baseline.
     */
    ApprovedPatchesComplianceLevel?: PatchComplianceLevel;
    /**
     * Indicates whether the list of approved patches includes non-security updates that should be applied to the instances. The default value is 'false'. Applies to Linux instances only.
     */
    ApprovedPatchesEnableNonSecurity?: Boolean;
    /**
     * A list of explicitly rejected patches for the baseline. For information about accepted formats for lists of approved patches and rejected patches, see Package Name Formats for Approved and Rejected Patch Lists in the AWS Systems Manager User Guide.
     */
    RejectedPatches?: PatchIdList;
    /**
     * The action for Patch Manager to take on patches included in the RejectedPackages list.    ALLOW_AS_DEPENDENCY: A package in the Rejected patches list is installed only if it is a dependency of another package. It is considered compliant with the patch baseline, and its status is reported as InstalledOther. This is the default action if no option is specified.    BLOCK: Packages in the RejectedPatches list, and packages that include them as dependencies, are not installed under any circumstances. If a package was installed before it was added to the Rejected patches list, it is considered non-compliant with the patch baseline, and its status is reported as InstalledRejected.  
     */
    RejectedPatchesAction?: PatchAction;
    /**
     * A description of the patch baseline.
     */
    Description?: BaselineDescription;
    /**
     * Information about the patches to use to update the instances, including target operating systems and source repositories. Applies to Linux instances only.
     */
    Sources?: PatchSourceList;
    /**
     * If True, then all fields that are required by the CreatePatchBaseline action are also required for this API request. Optional fields that are not specified are set to null.
     */
    Replace?: Boolean;
  }
  export interface UpdatePatchBaselineResult {
    /**
     * The ID of the deleted patch baseline.
     */
    BaselineId?: BaselineId;
    /**
     * The name of the patch baseline.
     */
    Name?: BaselineName;
    /**
     * The operating system rule used by the updated patch baseline.
     */
    OperatingSystem?: OperatingSystem;
    /**
     * A set of global filters used to exclude patches from the baseline.
     */
    GlobalFilters?: PatchFilterGroup;
    /**
     * A set of rules used to include patches in the baseline.
     */
    ApprovalRules?: PatchRuleGroup;
    /**
     * A list of explicitly approved patches for the baseline.
     */
    ApprovedPatches?: PatchIdList;
    /**
     * The compliance severity level assigned to the patch baseline after the update completed.
     */
    ApprovedPatchesComplianceLevel?: PatchComplianceLevel;
    /**
     * Indicates whether the list of approved patches includes non-security updates that should be applied to the instances. The default value is 'false'. Applies to Linux instances only.
     */
    ApprovedPatchesEnableNonSecurity?: Boolean;
    /**
     * A list of explicitly rejected patches for the baseline.
     */
    RejectedPatches?: PatchIdList;
    /**
     * The action specified to take on patches included in the RejectedPatches list. A patch can be allowed only if it is a dependency of another package, or blocked entirely along with packages that include it as a dependency.
     */
    RejectedPatchesAction?: PatchAction;
    /**
     * The date when the patch baseline was created.
     */
    CreatedDate?: DateTime;
    /**
     * The date when the patch baseline was last modified.
     */
    ModifiedDate?: DateTime;
    /**
     * A description of the Patch Baseline.
     */
    Description?: BaselineDescription;
    /**
     * Information about the patches to use to update the instances, including target operating systems and source repositories. Applies to Linux instances only.
     */
    Sources?: PatchSourceList;
  }
  export type Url = string;
  export type ValidNextStep = string;
  export type ValidNextStepList = ValidNextStep[];
  export type Version = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2014-11-06"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the SSM client.
   */
  export import Types = SSM;
}
export = SSM;
