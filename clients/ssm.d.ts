///<reference types="node" />
import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
declare class SSM extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: SSM.Types.ClientConfiguration)
  config: Config & SSM.Types.ClientConfiguration;
  /**
   * Adds or overwrites one or more tags for the specified resource. Tags are metadata that you assign to your managed instances. Tags enable you to categorize your managed instances in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value, both of which you define. For example, you could define a set of tags for your account's managed instances that helps you track each instance's owner and stack level. For example: Key=Owner and Value=DbAdmin, SysAdmin, or Dev. Or Key=Stack and Value=Production, Pre-Production, or Test. Each resource can have a maximum of 10 tags.   We recommend that you devise a set of tag keys that meets your needs for each resource type. Using a consistent set of tag keys makes it easier for you to manage your resources. You can search and filter the resources based on the tags you add. Tags don't have any semantic meaning to Amazon EC2 and are interpreted strictly as a string of characters.  For more information about tags, see Tagging Your Amazon EC2 Resources in the Amazon EC2 User Guide. 
   */
  addTagsToResource(params: SSM.Types.AddTagsToResourceRequest, callback?: (err: AWSError, data: SSM.Types.AddTagsToResourceResult) => void): Request<SSM.Types.AddTagsToResourceResult, AWSError>;
  /**
   * Adds or overwrites one or more tags for the specified resource. Tags are metadata that you assign to your managed instances. Tags enable you to categorize your managed instances in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value, both of which you define. For example, you could define a set of tags for your account's managed instances that helps you track each instance's owner and stack level. For example: Key=Owner and Value=DbAdmin, SysAdmin, or Dev. Or Key=Stack and Value=Production, Pre-Production, or Test. Each resource can have a maximum of 10 tags.   We recommend that you devise a set of tag keys that meets your needs for each resource type. Using a consistent set of tag keys makes it easier for you to manage your resources. You can search and filter the resources based on the tags you add. Tags don't have any semantic meaning to Amazon EC2 and are interpreted strictly as a string of characters.  For more information about tags, see Tagging Your Amazon EC2 Resources in the Amazon EC2 User Guide. 
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
   * Registers your on-premises server or virtual machine with Amazon EC2 so that you can manage these resources using Run Command. An on-premises server or virtual machine that has been registered with EC2 is called a managed instance. For more information about activations, see Setting Up Managed Instances (Linux) or Setting Up Managed Instances (Windows) in the Amazon EC2 User Guide. 
   */
  createActivation(params: SSM.Types.CreateActivationRequest, callback?: (err: AWSError, data: SSM.Types.CreateActivationResult) => void): Request<SSM.Types.CreateActivationResult, AWSError>;
  /**
   * Registers your on-premises server or virtual machine with Amazon EC2 so that you can manage these resources using Run Command. An on-premises server or virtual machine that has been registered with EC2 is called a managed instance. For more information about activations, see Setting Up Managed Instances (Linux) or Setting Up Managed Instances (Windows) in the Amazon EC2 User Guide. 
   */
  createActivation(callback?: (err: AWSError, data: SSM.Types.CreateActivationResult) => void): Request<SSM.Types.CreateActivationResult, AWSError>;
  /**
   * Associates the specified SSM document with the specified instance. When you associate an SSM document with an instance, the configuration agent on the instance (SSM agent for Linux and EC2Config service for Windows) processes the document and configures the instance as specified. If you associate a document with an instance that already has an associated document, the system throws the AssociationAlreadyExists exception.
   */
  createAssociation(params: SSM.Types.CreateAssociationRequest, callback?: (err: AWSError, data: SSM.Types.CreateAssociationResult) => void): Request<SSM.Types.CreateAssociationResult, AWSError>;
  /**
   * Associates the specified SSM document with the specified instance. When you associate an SSM document with an instance, the configuration agent on the instance (SSM agent for Linux and EC2Config service for Windows) processes the document and configures the instance as specified. If you associate a document with an instance that already has an associated document, the system throws the AssociationAlreadyExists exception.
   */
  createAssociation(callback?: (err: AWSError, data: SSM.Types.CreateAssociationResult) => void): Request<SSM.Types.CreateAssociationResult, AWSError>;
  /**
   * Associates the specified SSM document with the specified instances. When you associate an SSM document with an instance, the configuration agent on the instance (SSM agent for Linux and EC2Config service for Windows) processes the document and configures the instance as specified. If you associate a document with an instance that already has an associated document, the system throws the AssociationAlreadyExists exception.
   */
  createAssociationBatch(params: SSM.Types.CreateAssociationBatchRequest, callback?: (err: AWSError, data: SSM.Types.CreateAssociationBatchResult) => void): Request<SSM.Types.CreateAssociationBatchResult, AWSError>;
  /**
   * Associates the specified SSM document with the specified instances. When you associate an SSM document with an instance, the configuration agent on the instance (SSM agent for Linux and EC2Config service for Windows) processes the document and configures the instance as specified. If you associate a document with an instance that already has an associated document, the system throws the AssociationAlreadyExists exception.
   */
  createAssociationBatch(callback?: (err: AWSError, data: SSM.Types.CreateAssociationBatchResult) => void): Request<SSM.Types.CreateAssociationBatchResult, AWSError>;
  /**
   * Creates an SSM document. After you create an SSM document, you can use CreateAssociation to associate it with one or more running instances.
   */
  createDocument(params: SSM.Types.CreateDocumentRequest, callback?: (err: AWSError, data: SSM.Types.CreateDocumentResult) => void): Request<SSM.Types.CreateDocumentResult, AWSError>;
  /**
   * Creates an SSM document. After you create an SSM document, you can use CreateAssociation to associate it with one or more running instances.
   */
  createDocument(callback?: (err: AWSError, data: SSM.Types.CreateDocumentResult) => void): Request<SSM.Types.CreateDocumentResult, AWSError>;
  /**
   * Deletes an activation. You are not required to delete an activation. If you delete an activation, you can no longer use it to register additional managed instances. Deleting an activation does not de-register managed instances. You must manually de-register managed instances.
   */
  deleteActivation(params: SSM.Types.DeleteActivationRequest, callback?: (err: AWSError, data: SSM.Types.DeleteActivationResult) => void): Request<SSM.Types.DeleteActivationResult, AWSError>;
  /**
   * Deletes an activation. You are not required to delete an activation. If you delete an activation, you can no longer use it to register additional managed instances. Deleting an activation does not de-register managed instances. You must manually de-register managed instances.
   */
  deleteActivation(callback?: (err: AWSError, data: SSM.Types.DeleteActivationResult) => void): Request<SSM.Types.DeleteActivationResult, AWSError>;
  /**
   * Disassociates the specified SSM document from the specified instance. When you disassociate an SSM document from an instance, it does not change the configuration of the instance. To change the configuration state of an instance after you disassociate a document, you must create a new document with the desired configuration and associate it with the instance.
   */
  deleteAssociation(params: SSM.Types.DeleteAssociationRequest, callback?: (err: AWSError, data: SSM.Types.DeleteAssociationResult) => void): Request<SSM.Types.DeleteAssociationResult, AWSError>;
  /**
   * Disassociates the specified SSM document from the specified instance. When you disassociate an SSM document from an instance, it does not change the configuration of the instance. To change the configuration state of an instance after you disassociate a document, you must create a new document with the desired configuration and associate it with the instance.
   */
  deleteAssociation(callback?: (err: AWSError, data: SSM.Types.DeleteAssociationResult) => void): Request<SSM.Types.DeleteAssociationResult, AWSError>;
  /**
   * Deletes the SSM document and all instance associations to the document. Before you delete the SSM document, we recommend that you use DeleteAssociation to disassociate all instances that are associated with the document.
   */
  deleteDocument(params: SSM.Types.DeleteDocumentRequest, callback?: (err: AWSError, data: SSM.Types.DeleteDocumentResult) => void): Request<SSM.Types.DeleteDocumentResult, AWSError>;
  /**
   * Deletes the SSM document and all instance associations to the document. Before you delete the SSM document, we recommend that you use DeleteAssociation to disassociate all instances that are associated with the document.
   */
  deleteDocument(callback?: (err: AWSError, data: SSM.Types.DeleteDocumentResult) => void): Request<SSM.Types.DeleteDocumentResult, AWSError>;
  /**
   * Removes the server or virtual machine from the list of registered servers. You can reregister the instance again at any time. If you don’t plan to use Run Command on the server, we suggest uninstalling the SSM agent first.
   */
  deregisterManagedInstance(params: SSM.Types.DeregisterManagedInstanceRequest, callback?: (err: AWSError, data: SSM.Types.DeregisterManagedInstanceResult) => void): Request<SSM.Types.DeregisterManagedInstanceResult, AWSError>;
  /**
   * Removes the server or virtual machine from the list of registered servers. You can reregister the instance again at any time. If you don’t plan to use Run Command on the server, we suggest uninstalling the SSM agent first.
   */
  deregisterManagedInstance(callback?: (err: AWSError, data: SSM.Types.DeregisterManagedInstanceResult) => void): Request<SSM.Types.DeregisterManagedInstanceResult, AWSError>;
  /**
   * Details about the activation, including: the date and time the activation was created, the expiration date, the IAM role assigned to the instances in the activation, and the number of instances activated by this registration.
   */
  describeActivations(params: SSM.Types.DescribeActivationsRequest, callback?: (err: AWSError, data: SSM.Types.DescribeActivationsResult) => void): Request<SSM.Types.DescribeActivationsResult, AWSError>;
  /**
   * Details about the activation, including: the date and time the activation was created, the expiration date, the IAM role assigned to the instances in the activation, and the number of instances activated by this registration.
   */
  describeActivations(callback?: (err: AWSError, data: SSM.Types.DescribeActivationsResult) => void): Request<SSM.Types.DescribeActivationsResult, AWSError>;
  /**
   * Describes the associations for the specified SSM document or instance.
   */
  describeAssociation(params: SSM.Types.DescribeAssociationRequest, callback?: (err: AWSError, data: SSM.Types.DescribeAssociationResult) => void): Request<SSM.Types.DescribeAssociationResult, AWSError>;
  /**
   * Describes the associations for the specified SSM document or instance.
   */
  describeAssociation(callback?: (err: AWSError, data: SSM.Types.DescribeAssociationResult) => void): Request<SSM.Types.DescribeAssociationResult, AWSError>;
  /**
   * Describes the specified SSM document.
   */
  describeDocument(params: SSM.Types.DescribeDocumentRequest, callback?: (err: AWSError, data: SSM.Types.DescribeDocumentResult) => void): Request<SSM.Types.DescribeDocumentResult, AWSError>;
  /**
   * Describes the specified SSM document.
   */
  describeDocument(callback?: (err: AWSError, data: SSM.Types.DescribeDocumentResult) => void): Request<SSM.Types.DescribeDocumentResult, AWSError>;
  /**
   * Describes the permissions for an SSM document. If you created the document, you are the owner. If a document is shared, it can either be shared privately (by specifying a user’s AWS account ID) or publicly (All). 
   */
  describeDocumentPermission(params: SSM.Types.DescribeDocumentPermissionRequest, callback?: (err: AWSError, data: SSM.Types.DescribeDocumentPermissionResponse) => void): Request<SSM.Types.DescribeDocumentPermissionResponse, AWSError>;
  /**
   * Describes the permissions for an SSM document. If you created the document, you are the owner. If a document is shared, it can either be shared privately (by specifying a user’s AWS account ID) or publicly (All). 
   */
  describeDocumentPermission(callback?: (err: AWSError, data: SSM.Types.DescribeDocumentPermissionResponse) => void): Request<SSM.Types.DescribeDocumentPermissionResponse, AWSError>;
  /**
   * Describes one or more of your instances. You can use this to get information about instances like the operating system platform, the SSM agent version (Linux), status etc. If you specify one or more instance IDs, it returns information for those instances. If you do not specify instance IDs, it returns information for all your instances. If you specify an instance ID that is not valid or an instance that you do not own, you receive an error. 
   */
  describeInstanceInformation(params: SSM.Types.DescribeInstanceInformationRequest, callback?: (err: AWSError, data: SSM.Types.DescribeInstanceInformationResult) => void): Request<SSM.Types.DescribeInstanceInformationResult, AWSError>;
  /**
   * Describes one or more of your instances. You can use this to get information about instances like the operating system platform, the SSM agent version (Linux), status etc. If you specify one or more instance IDs, it returns information for those instances. If you do not specify instance IDs, it returns information for all your instances. If you specify an instance ID that is not valid or an instance that you do not own, you receive an error. 
   */
  describeInstanceInformation(callback?: (err: AWSError, data: SSM.Types.DescribeInstanceInformationResult) => void): Request<SSM.Types.DescribeInstanceInformationResult, AWSError>;
  /**
   * Gets the contents of the specified SSM document.
   */
  getDocument(params: SSM.Types.GetDocumentRequest, callback?: (err: AWSError, data: SSM.Types.GetDocumentResult) => void): Request<SSM.Types.GetDocumentResult, AWSError>;
  /**
   * Gets the contents of the specified SSM document.
   */
  getDocument(callback?: (err: AWSError, data: SSM.Types.GetDocumentResult) => void): Request<SSM.Types.GetDocumentResult, AWSError>;
  /**
   * Lists the associations for the specified SSM document or instance.
   */
  listAssociations(params: SSM.Types.ListAssociationsRequest, callback?: (err: AWSError, data: SSM.Types.ListAssociationsResult) => void): Request<SSM.Types.ListAssociationsResult, AWSError>;
  /**
   * Lists the associations for the specified SSM document or instance.
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
   * Describes one or more of your SSM documents.
   */
  listDocuments(params: SSM.Types.ListDocumentsRequest, callback?: (err: AWSError, data: SSM.Types.ListDocumentsResult) => void): Request<SSM.Types.ListDocumentsResult, AWSError>;
  /**
   * Describes one or more of your SSM documents.
   */
  listDocuments(callback?: (err: AWSError, data: SSM.Types.ListDocumentsResult) => void): Request<SSM.Types.ListDocumentsResult, AWSError>;
  /**
   * Returns a list of the tags assigned to the specified resource.
   */
  listTagsForResource(params: SSM.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: SSM.Types.ListTagsForResourceResult) => void): Request<SSM.Types.ListTagsForResourceResult, AWSError>;
  /**
   * Returns a list of the tags assigned to the specified resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: SSM.Types.ListTagsForResourceResult) => void): Request<SSM.Types.ListTagsForResourceResult, AWSError>;
  /**
   * Share a document publicly or privately. If you share a document privately, you must specify the AWS user account IDs for those people who can use the document. If you share a document publicly, you must specify All as the account ID.
   */
  modifyDocumentPermission(params: SSM.Types.ModifyDocumentPermissionRequest, callback?: (err: AWSError, data: SSM.Types.ModifyDocumentPermissionResponse) => void): Request<SSM.Types.ModifyDocumentPermissionResponse, AWSError>;
  /**
   * Share a document publicly or privately. If you share a document privately, you must specify the AWS user account IDs for those people who can use the document. If you share a document publicly, you must specify All as the account ID.
   */
  modifyDocumentPermission(callback?: (err: AWSError, data: SSM.Types.ModifyDocumentPermissionResponse) => void): Request<SSM.Types.ModifyDocumentPermissionResponse, AWSError>;
  /**
   * Removes all tags from the specified resource.
   */
  removeTagsFromResource(params: SSM.Types.RemoveTagsFromResourceRequest, callback?: (err: AWSError, data: SSM.Types.RemoveTagsFromResourceResult) => void): Request<SSM.Types.RemoveTagsFromResourceResult, AWSError>;
  /**
   * Removes all tags from the specified resource.
   */
  removeTagsFromResource(callback?: (err: AWSError, data: SSM.Types.RemoveTagsFromResourceResult) => void): Request<SSM.Types.RemoveTagsFromResourceResult, AWSError>;
  /**
   * Executes commands on one or more remote instances.
   */
  sendCommand(params: SSM.Types.SendCommandRequest, callback?: (err: AWSError, data: SSM.Types.SendCommandResult) => void): Request<SSM.Types.SendCommandResult, AWSError>;
  /**
   * Executes commands on one or more remote instances.
   */
  sendCommand(callback?: (err: AWSError, data: SSM.Types.SendCommandResult) => void): Request<SSM.Types.SendCommandResult, AWSError>;
  /**
   * Updates the status of the SSM document associated with the specified instance.
   */
  updateAssociationStatus(params: SSM.Types.UpdateAssociationStatusRequest, callback?: (err: AWSError, data: SSM.Types.UpdateAssociationStatusResult) => void): Request<SSM.Types.UpdateAssociationStatusResult, AWSError>;
  /**
   * Updates the status of the SSM document associated with the specified instance.
   */
  updateAssociationStatus(callback?: (err: AWSError, data: SSM.Types.UpdateAssociationStatusResult) => void): Request<SSM.Types.UpdateAssociationStatusResult, AWSError>;
  /**
   * Assigns or changes an Amazon Identity and Access Management (IAM) role to the managed instance.
   */
  updateManagedInstanceRole(params: SSM.Types.UpdateManagedInstanceRoleRequest, callback?: (err: AWSError, data: SSM.Types.UpdateManagedInstanceRoleResult) => void): Request<SSM.Types.UpdateManagedInstanceRoleResult, AWSError>;
  /**
   * Assigns or changes an Amazon Identity and Access Management (IAM) role to the managed instance.
   */
  updateManagedInstanceRole(callback?: (err: AWSError, data: SSM.Types.UpdateManagedInstanceRoleResult) => void): Request<SSM.Types.UpdateManagedInstanceRoleResult, AWSError>;
}
declare namespace SSM.Types {
  export type AccountId = string;
  export type AccountIdList = AccountId[];
  export interface Activation {
    /**
     * The ID created by SSM when you submitted the activation.
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
     * Specifies the type of resource you are tagging.
     */
    ResourceType: ResourceTypeForTagging;
    /**
     * The resource ID you want to tag.
     */
    ResourceId: ResourceId;
    /**
     *  One or more tags. The value parameter is required, but if you don't want the tag to have a value, specify the parameter with no value, and we set the value to an empty string. 
     */
    Tags: TagList;
  }
  export interface AddTagsToResourceResult {
  }
  export interface Association {
    /**
     * The name of the SSM document.
     */
    Name?: DocumentName;
    /**
     * The ID of the instance.
     */
    InstanceId?: InstanceId;
  }
  export interface AssociationDescription {
    /**
     * The name of the SSM document.
     */
    Name?: DocumentName;
    /**
     * The ID of the instance.
     */
    InstanceId?: InstanceId;
    /**
     * The date when the association was made.
     */
    Date?: DateTime;
    /**
     * The association status.
     */
    Status?: AssociationStatus;
    /**
     * A description of the parameters for a document. 
     */
    Parameters?: Parameters;
  }
  export type AssociationDescriptionList = AssociationDescription[];
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
  export type AssociationFilterKey = "InstanceId"|"Name"|string;
  export type AssociationFilterList = AssociationFilter[];
  export type AssociationFilterValue = string;
  export type AssociationList = Association[];
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
  export type AssociationStatusName = "Pending"|"Success"|"Failed"|string;
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
  export interface Command {
    /**
     * A unique identifier for this command.
     */
    CommandId?: CommandId;
    /**
     * The name of the SSM document requested for execution.
     */
    DocumentName?: DocumentName;
    /**
     * User-specified information about the command, such as a brief description of what the command should do.
     */
    Comment?: Comment;
    /**
     * If this time is reached and the command has not already started executing, it will not execute. Calculated based on the ExpiresAfter user input provided as part of the SendCommand API.
     */
    ExpiresAfter?: DateTime;
    /**
     * The parameter values to be inserted in the SSM document when executing the command.
     */
    Parameters?: Parameters;
    /**
     * The instance IDs against which this command was requested.
     */
    InstanceIds?: InstanceIdList;
    /**
     * The date and time the command was requested.
     */
    RequestedDateTime?: DateTime;
    /**
     * The status of the command.
     */
    Status?: CommandStatus;
    /**
     * The S3 bucket where the responses to the command executions should be stored. This was requested when issuing the command.
     */
    OutputS3BucketName?: S3BucketName;
    /**
     * The S3 directory path inside the bucket where the responses to the command executions should be stored. This was requested when issuing the command.
     */
    OutputS3KeyPrefix?: S3KeyPrefix;
    /**
     * The IAM service role that SSM uses to act on your behalf when sending notifications about command status changes. 
     */
    ServiceRole?: ServiceRole;
    /**
     * Configurations for sending notifications about command status changes. 
     */
    NotificationConfig?: NotificationConfig;
  }
  export interface CommandFilter {
    /**
     * The name of the filter. For example, requested date and time.
     */
    key: CommandFilterKey;
    /**
     * The filter value. For example: June 30, 2015.
     */
    value: CommandFilterValue;
  }
  export type CommandFilterKey = "InvokedAfter"|"InvokedBefore"|"Status"|string;
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
     * User-specified information about the command, such as a brief description of what the command should do.
     */
    Comment?: Comment;
    /**
     * The document name that was requested for execution.
     */
    DocumentName?: DocumentName;
    /**
     * The time and date the request was sent to this instance.
     */
    RequestedDateTime?: DateTime;
    /**
     * Whether or not the invocation succeeded, failed, or is pending.
     */
    Status?: CommandInvocationStatus;
    /**
     *  Gets the trace output sent by the agent. 
     */
    TraceOutput?: InvocationTraceOutput;
    CommandPlugins?: CommandPluginList;
    /**
     * The IAM service role that SSM uses to act on your behalf when sending notifications about command status changes on a per instance basis.
     */
    ServiceRole?: ServiceRole;
    /**
     * Configurations for sending notifications about command status changes on a per instance basis.
     */
    NotificationConfig?: NotificationConfig;
  }
  export type CommandInvocationList = CommandInvocation[];
  export type CommandInvocationStatus = "Pending"|"InProgress"|"Cancelling"|"Success"|"TimedOut"|"Cancelled"|"Failed"|string;
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
     * The S3 bucket where the responses to the command executions should be stored. This was requested when issuing the command.
     */
    OutputS3BucketName?: S3BucketName;
    /**
     * The S3 directory path inside the bucket where the responses to the command executions should be stored. This was requested when issuing the command. 
     */
    OutputS3KeyPrefix?: S3KeyPrefix;
  }
  export type CommandPluginList = CommandPlugin[];
  export type CommandPluginName = string;
  export type CommandPluginOutput = string;
  export type CommandPluginStatus = "Pending"|"InProgress"|"Success"|"TimedOut"|"Cancelled"|"Failed"|string;
  export type CommandStatus = "Pending"|"InProgress"|"Cancelling"|"Success"|"TimedOut"|"Cancelled"|"Failed"|string;
  export type Comment = string;
  export type ComputerName = string;
  export interface CreateActivationRequest {
    /**
     * A user-defined description of the resource that you want to register with Amazon EC2. 
     */
    Description?: ActivationDescription;
    /**
     * The name of the registered, managed instance as it will appear in the Amazon EC2 console or when you use the AWS command line tools to list EC2 resources.
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
     *  The name of the configuration document. 
     */
    Name?: DocumentName;
    /**
     *  The ID of the instance. 
     */
    InstanceId?: InstanceId;
    /**
     * A description of the parameters for a document. 
     */
    Parameters?: Parameters;
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
     * The name of the SSM document.
     */
    Name: DocumentName;
    /**
     * The instance ID.
     */
    InstanceId: InstanceId;
    /**
     * The parameters for the documents runtime configuration. 
     */
    Parameters?: Parameters;
  }
  export interface CreateAssociationResult {
    /**
     * Information about the association.
     */
    AssociationDescription?: AssociationDescription;
  }
  export interface CreateDocumentRequest {
    /**
     * A valid JSON string.
     */
    Content: DocumentContent;
    /**
     * A name for the SSM document.
     */
    Name: DocumentName;
  }
  export interface CreateDocumentResult {
    /**
     * Information about the SSM document.
     */
    DocumentDescription?: DocumentDescription;
  }
  export type CreatedDate = Date;
  export type DateTime = Date;
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
     * The name of the SSM document.
     */
    Name: DocumentName;
    /**
     * The ID of the instance.
     */
    InstanceId: InstanceId;
  }
  export interface DeleteAssociationResult {
  }
  export interface DeleteDocumentRequest {
    /**
     * The name of the SSM document.
     */
    Name: DocumentName;
  }
  export interface DeleteDocumentResult {
  }
  export interface DeregisterManagedInstanceRequest {
    /**
     * The ID assigned to the managed instance when you registered it using the activation process. 
     */
    InstanceId: ManagedInstanceId;
  }
  export interface DeregisterManagedInstanceResult {
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
     *  The token for the next set of items to return. Use this token to get the next set of results. 
     */
    NextToken?: NextToken;
  }
  export interface DescribeAssociationRequest {
    /**
     * The name of the SSM document.
     */
    Name: DocumentName;
    /**
     * The instance ID.
     */
    InstanceId: InstanceId;
  }
  export interface DescribeAssociationResult {
    /**
     * Information about the association.
     */
    AssociationDescription?: AssociationDescription;
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
     * The name of the SSM document.
     */
    Name: DocumentARN;
  }
  export interface DescribeDocumentResult {
    /**
     * Information about the SSM document.
     */
    Document?: DocumentDescription;
  }
  export interface DescribeInstanceInformationRequest {
    /**
     * One or more filters. Use a filter to return a more specific list of instances.
     */
    InstanceInformationFilterList?: InstanceInformationFilterList;
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
  export type DescriptionInDocument = string;
  export type DocumentARN = string;
  export type DocumentContent = string;
  export interface DocumentDescription {
    /**
     * The SHA1 hash of the document, which you can use for verification purposes.
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
     * The name of the SSM document.
     */
    Name?: DocumentARN;
    /**
     * The AWS user account of the person who created the document.
     */
    Owner?: DocumentOwner;
    /**
     *  The date when the SSM document was created. 
     */
    CreatedDate?: DateTime;
    /**
     * The status of the SSM document.
     */
    Status?: DocumentStatus;
    /**
     *  A description of the document. 
     */
    Description?: DescriptionInDocument;
    /**
     * A description of the parameters for a document.
     */
    Parameters?: DocumentParameterList;
    /**
     * The list of OS platforms compatible with this SSM document. 
     */
    PlatformTypes?: PlatformTypeList;
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
  export type DocumentFilterKey = "Name"|"Owner"|"PlatformTypes"|string;
  export type DocumentFilterList = DocumentFilter[];
  export type DocumentFilterValue = string;
  export type DocumentHash = string;
  export type DocumentHashType = "Sha256"|"Sha1"|string;
  export interface DocumentIdentifier {
    /**
     * The name of the SSM document.
     */
    Name?: DocumentARN;
    /**
     * The AWS user account of the person who created the document.
     */
    Owner?: DocumentOwner;
    /**
     * The operating system platform. 
     */
    PlatformTypes?: PlatformTypeList;
  }
  export type DocumentIdentifierList = DocumentIdentifier[];
  export type DocumentName = string;
  export type DocumentOwner = string;
  export interface DocumentParameter {
    /**
     * The name of the parameter.
     */
    Name?: DocumentParameterName;
    /**
     * The type of parameter. The type can be either “String” or “StringList”.
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
  export type DocumentSha1 = string;
  export type DocumentStatus = "Creating"|"Active"|"Deleting"|string;
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
  export type Fault = "Client"|"Server"|"Unknown"|string;
  export interface GetDocumentRequest {
    /**
     * The name of the SSM document.
     */
    Name: DocumentARN;
  }
  export interface GetDocumentResult {
    /**
     * The name of the SSM document.
     */
    Name?: DocumentARN;
    /**
     * The contents of the SSM document.
     */
    Content?: DocumentContent;
  }
  export type IPAddress = string;
  export type IamRole = string;
  export type InstanceId = string;
  export type InstanceIdList = InstanceId[];
  export interface InstanceInformation {
    /**
     * The instance ID. 
     */
    InstanceId?: InstanceId;
    /**
     * Connection status of the SSM agent. 
     */
    PingStatus?: PingStatus;
    /**
     * The date and time when agent last pinged SSM service. 
     */
    LastPingDateTime?: DateTime;
    /**
     * The version of the SSM agent running on your Linux instance. 
     */
    AgentVersion?: Version;
    /**
     * Indicates whether latest version of the SSM agent is running on your instance. 
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
     * The activation ID created by SSM when the server or VM was registered.
     */
    ActivationId?: ActivationId;
    /**
     * The Amazon Identity and Access Management (IAM) role assigned to EC2 instances or managed instances. 
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
  export type InstanceInformationFilterKey = "InstanceIds"|"AgentVersion"|"PingStatus"|"PlatformTypes"|"ActivationIds"|"IamRole"|"ResourceType"|string;
  export type InstanceInformationFilterList = InstanceInformationFilter[];
  export type InstanceInformationFilterValue = string;
  export type InstanceInformationFilterValueSet = InstanceInformationFilterValue[];
  export type InstanceInformationList = InstanceInformation[];
  export type InvocationTraceOutput = string;
  export type KeyList = TagKey[];
  export interface ListAssociationsRequest {
    /**
     * One or more filters. Use a filter to return a more specific list of results.
     */
    AssociationFilterList: AssociationFilterList;
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
  export interface ListDocumentsRequest {
    /**
     * One or more filters. Use a filter to return a more specific list of results.
     */
    DocumentFilterList?: DocumentFilterList;
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
     * The names of the SSM documents.
     */
    DocumentIdentifiers?: DocumentIdentifierList;
    /**
     * The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.
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
  export type ManagedInstanceId = string;
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
  export type NotificationArn = string;
  export interface NotificationConfig {
    /**
     * An Amazon Resource Name (ARN) for a Simple Notification Service (SNS) topic. SSM pushes notifications about command status changes to this topic.
     */
    NotificationArn?: NotificationArn;
    /**
     * The different events for which you can receive notifications. These events include the following: All (events), InProgress, Success, TimedOut, Cancelled, Failed. To learn more about these events, see Monitoring Commands in the Amazon Elastic Compute Cloud User Guide .
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
  export type ParameterName = string;
  export type ParameterValue = string;
  export type ParameterValueList = ParameterValue[];
  export type Parameters = {[key: string]: ParameterValueList};
  export type PingStatus = "Online"|"ConnectionLost"|"Inactive"|string;
  export type PlatformType = "Windows"|"Linux"|string;
  export type PlatformTypeList = PlatformType[];
  export type RegistrationLimit = number;
  export type RegistrationsCount = number;
  export interface RemoveTagsFromResourceRequest {
    /**
     * The type of resource of which you want to remove a tag.
     */
    ResourceType: ResourceTypeForTagging;
    /**
     * The resource ID for which you want to remove tags.
     */
    ResourceId: ResourceId;
    /**
     * Tag keys that you want to remove from the specified resource.
     */
    TagKeys: KeyList;
  }
  export interface RemoveTagsFromResourceResult {
  }
  export type ResourceId = string;
  export type ResourceType = "ManagedInstance"|"Document"|"EC2Instance"|string;
  export type ResourceTypeForTagging = "ManagedInstance"|string;
  export type ResponseCode = number;
  export type S3BucketName = string;
  export type S3KeyPrefix = string;
  export interface SendCommandRequest {
    /**
     * Required. The instance IDs where the command should execute. You can specify a maximum of 50 IDs.
     */
    InstanceIds: InstanceIdList;
    /**
     * Required. The name of the SSM document to execute. This can be an SSM public document or a custom document.
     */
    DocumentName: DocumentARN;
    /**
     * The Sha256 or Sha1 hash created by the system when the document was created.   Sha1 hashes have been deprecated. 
     */
    DocumentHash?: DocumentHash;
    /**
     * Sha256 or Sha1.  Sha1 hashes have been deprecated. 
     */
    DocumentHashType?: DocumentHashType;
    /**
     * If this time is reached and the command has not already started executing, it will not execute.
     */
    TimeoutSeconds?: TimeoutSeconds;
    /**
     * User-specified information about the command, such as a brief description of what the command should do.
     */
    Comment?: Comment;
    /**
     * The required and optional parameters specified in the SSM document being executed.
     */
    Parameters?: Parameters;
    /**
     * The name of the S3 bucket where command execution responses should be stored.
     */
    OutputS3BucketName?: S3BucketName;
    /**
     * The directory structure within the S3 bucket where the responses should be stored.
     */
    OutputS3KeyPrefix?: S3KeyPrefix;
    /**
     * The IAM role that SSM uses to send notifications. 
     */
    ServiceRoleArn?: ServiceRole;
    /**
     * Configurations for sending notifications.
     */
    NotificationConfig?: NotificationConfig;
  }
  export interface SendCommandResult {
    /**
     * The request as it was received by SSM. Also provides the command ID which can be used future references to this request.
     */
    Command?: Command;
  }
  export type ServiceRole = string;
  export type StatusAdditionalInfo = string;
  export type StatusMessage = string;
  export type String = string;
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
  export type TimeoutSeconds = number;
  export interface UpdateAssociationStatusRequest {
    /**
     * The name of the SSM document.
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
}
export = SSM;
