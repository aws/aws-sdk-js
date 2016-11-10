///<reference types="node" />
import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
declare class CloudFormation extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: CloudFormation.Types.ClientConfiguration)
  config: Config & CloudFormation.Types.ClientConfiguration;
  /**
   * Cancels an update on the specified stack. If the call completes successfully, the stack rolls back the update and reverts to the previous stack configuration.  You can cancel only stacks that are in the UPDATE_IN_PROGRESS state. 
   */
  cancelUpdateStack(params: CloudFormation.Types.CancelUpdateStackInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Cancels an update on the specified stack. If the call completes successfully, the stack rolls back the update and reverts to the previous stack configuration.  You can cancel only stacks that are in the UPDATE_IN_PROGRESS state. 
   */
  cancelUpdateStack(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * For a specified stack that is in the UPDATE_ROLLBACK_FAILED state, continues rolling it back to the UPDATE_ROLLBACK_COMPLETE state. Depending on the cause of the failure, you can manually  fix the error and continue the rollback. By continuing the rollback, you can return your stack to a working state (the UPDATE_ROLLBACK_COMPLETE state), and then try to update the stack again. A stack goes into the UPDATE_ROLLBACK_FAILED state when AWS CloudFormation cannot roll back all changes after a failed stack update. For example, you might have a stack that is rolling back to an old database instance that was deleted outside of AWS CloudFormation. Because AWS CloudFormation doesn't know the database was deleted, it assumes that the database instance still exists and attempts to roll back to it, causing the update rollback to fail.
   */
  continueUpdateRollback(params: CloudFormation.Types.ContinueUpdateRollbackInput, callback?: (err: AWSError, data: CloudFormation.Types.ContinueUpdateRollbackOutput) => void): Request<CloudFormation.Types.ContinueUpdateRollbackOutput, AWSError>;
  /**
   * For a specified stack that is in the UPDATE_ROLLBACK_FAILED state, continues rolling it back to the UPDATE_ROLLBACK_COMPLETE state. Depending on the cause of the failure, you can manually  fix the error and continue the rollback. By continuing the rollback, you can return your stack to a working state (the UPDATE_ROLLBACK_COMPLETE state), and then try to update the stack again. A stack goes into the UPDATE_ROLLBACK_FAILED state when AWS CloudFormation cannot roll back all changes after a failed stack update. For example, you might have a stack that is rolling back to an old database instance that was deleted outside of AWS CloudFormation. Because AWS CloudFormation doesn't know the database was deleted, it assumes that the database instance still exists and attempts to roll back to it, causing the update rollback to fail.
   */
  continueUpdateRollback(callback?: (err: AWSError, data: CloudFormation.Types.ContinueUpdateRollbackOutput) => void): Request<CloudFormation.Types.ContinueUpdateRollbackOutput, AWSError>;
  /**
   * Creates a list of changes for a stack. AWS CloudFormation generates the change set by comparing the template's information with the information that you submit. A change set can help you understand which resources AWS CloudFormation will change, and how it will change them, before you update your stack. Change sets allow you to check before making a change to avoid deleting or replacing critical resources. AWS CloudFormation doesn't make any changes to the stack when you create a change set. To make the specified changes, you must execute the change set by using the ExecuteChangeSet action. After the call successfully completes, AWS CloudFormation starts creating the change set. To check the status of the change set, use the DescribeChangeSet action.
   */
  createChangeSet(params: CloudFormation.Types.CreateChangeSetInput, callback?: (err: AWSError, data: CloudFormation.Types.CreateChangeSetOutput) => void): Request<CloudFormation.Types.CreateChangeSetOutput, AWSError>;
  /**
   * Creates a list of changes for a stack. AWS CloudFormation generates the change set by comparing the template's information with the information that you submit. A change set can help you understand which resources AWS CloudFormation will change, and how it will change them, before you update your stack. Change sets allow you to check before making a change to avoid deleting or replacing critical resources. AWS CloudFormation doesn't make any changes to the stack when you create a change set. To make the specified changes, you must execute the change set by using the ExecuteChangeSet action. After the call successfully completes, AWS CloudFormation starts creating the change set. To check the status of the change set, use the DescribeChangeSet action.
   */
  createChangeSet(callback?: (err: AWSError, data: CloudFormation.Types.CreateChangeSetOutput) => void): Request<CloudFormation.Types.CreateChangeSetOutput, AWSError>;
  /**
   * Creates a stack as specified in the template. After the call completes successfully, the stack creation starts. You can check the status of the stack via the DescribeStacks API.
   */
  createStack(params: CloudFormation.Types.CreateStackInput, callback?: (err: AWSError, data: CloudFormation.Types.CreateStackOutput) => void): Request<CloudFormation.Types.CreateStackOutput, AWSError>;
  /**
   * Creates a stack as specified in the template. After the call completes successfully, the stack creation starts. You can check the status of the stack via the DescribeStacks API.
   */
  createStack(callback?: (err: AWSError, data: CloudFormation.Types.CreateStackOutput) => void): Request<CloudFormation.Types.CreateStackOutput, AWSError>;
  /**
   * Deletes the specified change set. Deleting change sets ensures that no one executes the wrong change set. If the call successfully completes, AWS CloudFormation successfully deleted the change set.
   */
  deleteChangeSet(params: CloudFormation.Types.DeleteChangeSetInput, callback?: (err: AWSError, data: CloudFormation.Types.DeleteChangeSetOutput) => void): Request<CloudFormation.Types.DeleteChangeSetOutput, AWSError>;
  /**
   * Deletes the specified change set. Deleting change sets ensures that no one executes the wrong change set. If the call successfully completes, AWS CloudFormation successfully deleted the change set.
   */
  deleteChangeSet(callback?: (err: AWSError, data: CloudFormation.Types.DeleteChangeSetOutput) => void): Request<CloudFormation.Types.DeleteChangeSetOutput, AWSError>;
  /**
   * Deletes a specified stack. Once the call completes successfully, stack deletion starts. Deleted stacks do not show up in the DescribeStacks API if the deletion has been completed successfully.
   */
  deleteStack(params: CloudFormation.Types.DeleteStackInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a specified stack. Once the call completes successfully, stack deletion starts. Deleted stacks do not show up in the DescribeStacks API if the deletion has been completed successfully.
   */
  deleteStack(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Retrieves your account's AWS CloudFormation limits, such as the maximum number of stacks that you can create in your account.
   */
  describeAccountLimits(params: CloudFormation.Types.DescribeAccountLimitsInput, callback?: (err: AWSError, data: CloudFormation.Types.DescribeAccountLimitsOutput) => void): Request<CloudFormation.Types.DescribeAccountLimitsOutput, AWSError>;
  /**
   * Retrieves your account's AWS CloudFormation limits, such as the maximum number of stacks that you can create in your account.
   */
  describeAccountLimits(callback?: (err: AWSError, data: CloudFormation.Types.DescribeAccountLimitsOutput) => void): Request<CloudFormation.Types.DescribeAccountLimitsOutput, AWSError>;
  /**
   * Returns the inputs for the change set and a list of changes that AWS CloudFormation will make if you execute the change set. For more information, see Updating Stacks Using Change Sets in the AWS CloudFormation User Guide.
   */
  describeChangeSet(params: CloudFormation.Types.DescribeChangeSetInput, callback?: (err: AWSError, data: CloudFormation.Types.DescribeChangeSetOutput) => void): Request<CloudFormation.Types.DescribeChangeSetOutput, AWSError>;
  /**
   * Returns the inputs for the change set and a list of changes that AWS CloudFormation will make if you execute the change set. For more information, see Updating Stacks Using Change Sets in the AWS CloudFormation User Guide.
   */
  describeChangeSet(callback?: (err: AWSError, data: CloudFormation.Types.DescribeChangeSetOutput) => void): Request<CloudFormation.Types.DescribeChangeSetOutput, AWSError>;
  /**
   * Returns all stack related events for a specified stack in reverse chronological order. For more information about a stack's event history, go to Stacks in the AWS CloudFormation User Guide.  You can list events for stacks that have failed to create or have been deleted by specifying the unique stack identifier (stack ID). 
   */
  describeStackEvents(params: CloudFormation.Types.DescribeStackEventsInput, callback?: (err: AWSError, data: CloudFormation.Types.DescribeStackEventsOutput) => void): Request<CloudFormation.Types.DescribeStackEventsOutput, AWSError>;
  /**
   * Returns all stack related events for a specified stack in reverse chronological order. For more information about a stack's event history, go to Stacks in the AWS CloudFormation User Guide.  You can list events for stacks that have failed to create or have been deleted by specifying the unique stack identifier (stack ID). 
   */
  describeStackEvents(callback?: (err: AWSError, data: CloudFormation.Types.DescribeStackEventsOutput) => void): Request<CloudFormation.Types.DescribeStackEventsOutput, AWSError>;
  /**
   * Returns a description of the specified resource in the specified stack. For deleted stacks, DescribeStackResource returns resource information for up to 90 days after the stack has been deleted.
   */
  describeStackResource(params: CloudFormation.Types.DescribeStackResourceInput, callback?: (err: AWSError, data: CloudFormation.Types.DescribeStackResourceOutput) => void): Request<CloudFormation.Types.DescribeStackResourceOutput, AWSError>;
  /**
   * Returns a description of the specified resource in the specified stack. For deleted stacks, DescribeStackResource returns resource information for up to 90 days after the stack has been deleted.
   */
  describeStackResource(callback?: (err: AWSError, data: CloudFormation.Types.DescribeStackResourceOutput) => void): Request<CloudFormation.Types.DescribeStackResourceOutput, AWSError>;
  /**
   * Returns AWS resource descriptions for running and deleted stacks. If StackName is specified, all the associated resources that are part of the stack are returned. If PhysicalResourceId is specified, the associated resources of the stack that the resource belongs to are returned.  Only the first 100 resources will be returned. If your stack has more resources than this, you should use ListStackResources instead.  For deleted stacks, DescribeStackResources returns resource information for up to 90 days after the stack has been deleted. You must specify either StackName or PhysicalResourceId, but not both. In addition, you can specify LogicalResourceId to filter the returned result. For more information about resources, the LogicalResourceId and PhysicalResourceId, go to the AWS CloudFormation User Guide.  A ValidationError is returned if you specify both StackName and PhysicalResourceId in the same request. 
   */
  describeStackResources(params: CloudFormation.Types.DescribeStackResourcesInput, callback?: (err: AWSError, data: CloudFormation.Types.DescribeStackResourcesOutput) => void): Request<CloudFormation.Types.DescribeStackResourcesOutput, AWSError>;
  /**
   * Returns AWS resource descriptions for running and deleted stacks. If StackName is specified, all the associated resources that are part of the stack are returned. If PhysicalResourceId is specified, the associated resources of the stack that the resource belongs to are returned.  Only the first 100 resources will be returned. If your stack has more resources than this, you should use ListStackResources instead.  For deleted stacks, DescribeStackResources returns resource information for up to 90 days after the stack has been deleted. You must specify either StackName or PhysicalResourceId, but not both. In addition, you can specify LogicalResourceId to filter the returned result. For more information about resources, the LogicalResourceId and PhysicalResourceId, go to the AWS CloudFormation User Guide.  A ValidationError is returned if you specify both StackName and PhysicalResourceId in the same request. 
   */
  describeStackResources(callback?: (err: AWSError, data: CloudFormation.Types.DescribeStackResourcesOutput) => void): Request<CloudFormation.Types.DescribeStackResourcesOutput, AWSError>;
  /**
   * Returns the description for the specified stack; if no stack name was specified, then it returns the description for all the stacks created.  If the stack does not exist, an AmazonCloudFormationException is returned. 
   */
  describeStacks(params: CloudFormation.Types.DescribeStacksInput, callback?: (err: AWSError, data: CloudFormation.Types.DescribeStacksOutput) => void): Request<CloudFormation.Types.DescribeStacksOutput, AWSError>;
  /**
   * Returns the description for the specified stack; if no stack name was specified, then it returns the description for all the stacks created.  If the stack does not exist, an AmazonCloudFormationException is returned. 
   */
  describeStacks(callback?: (err: AWSError, data: CloudFormation.Types.DescribeStacksOutput) => void): Request<CloudFormation.Types.DescribeStacksOutput, AWSError>;
  /**
   * Returns the estimated monthly cost of a template. The return value is an AWS Simple Monthly Calculator URL with a query string that describes the resources required to run the template.
   */
  estimateTemplateCost(params: CloudFormation.Types.EstimateTemplateCostInput, callback?: (err: AWSError, data: CloudFormation.Types.EstimateTemplateCostOutput) => void): Request<CloudFormation.Types.EstimateTemplateCostOutput, AWSError>;
  /**
   * Returns the estimated monthly cost of a template. The return value is an AWS Simple Monthly Calculator URL with a query string that describes the resources required to run the template.
   */
  estimateTemplateCost(callback?: (err: AWSError, data: CloudFormation.Types.EstimateTemplateCostOutput) => void): Request<CloudFormation.Types.EstimateTemplateCostOutput, AWSError>;
  /**
   * Updates a stack using the input information that was provided when the specified change set was created. After the call successfully completes, AWS CloudFormation starts updating the stack. Use the DescribeStacks action to view the status of the update. When you execute a change set, AWS CloudFormation deletes all other change sets associated with the stack because they aren't valid for the updated stack. If a stack policy is associated with the stack, AWS CloudFormation enforces the policy during the update. You can't specify a temporary stack policy that overrides the current policy.
   */
  executeChangeSet(params: CloudFormation.Types.ExecuteChangeSetInput, callback?: (err: AWSError, data: CloudFormation.Types.ExecuteChangeSetOutput) => void): Request<CloudFormation.Types.ExecuteChangeSetOutput, AWSError>;
  /**
   * Updates a stack using the input information that was provided when the specified change set was created. After the call successfully completes, AWS CloudFormation starts updating the stack. Use the DescribeStacks action to view the status of the update. When you execute a change set, AWS CloudFormation deletes all other change sets associated with the stack because they aren't valid for the updated stack. If a stack policy is associated with the stack, AWS CloudFormation enforces the policy during the update. You can't specify a temporary stack policy that overrides the current policy.
   */
  executeChangeSet(callback?: (err: AWSError, data: CloudFormation.Types.ExecuteChangeSetOutput) => void): Request<CloudFormation.Types.ExecuteChangeSetOutput, AWSError>;
  /**
   * Returns the stack policy for a specified stack. If a stack doesn't have a policy, a null value is returned.
   */
  getStackPolicy(params: CloudFormation.Types.GetStackPolicyInput, callback?: (err: AWSError, data: CloudFormation.Types.GetStackPolicyOutput) => void): Request<CloudFormation.Types.GetStackPolicyOutput, AWSError>;
  /**
   * Returns the stack policy for a specified stack. If a stack doesn't have a policy, a null value is returned.
   */
  getStackPolicy(callback?: (err: AWSError, data: CloudFormation.Types.GetStackPolicyOutput) => void): Request<CloudFormation.Types.GetStackPolicyOutput, AWSError>;
  /**
   * Returns the template body for a specified stack. You can get the template for running or deleted stacks. For deleted stacks, GetTemplate returns the template for up to 90 days after the stack has been deleted.   If the template does not exist, a ValidationError is returned.  
   */
  getTemplate(params: CloudFormation.Types.GetTemplateInput, callback?: (err: AWSError, data: CloudFormation.Types.GetTemplateOutput) => void): Request<CloudFormation.Types.GetTemplateOutput, AWSError>;
  /**
   * Returns the template body for a specified stack. You can get the template for running or deleted stacks. For deleted stacks, GetTemplate returns the template for up to 90 days after the stack has been deleted.   If the template does not exist, a ValidationError is returned.  
   */
  getTemplate(callback?: (err: AWSError, data: CloudFormation.Types.GetTemplateOutput) => void): Request<CloudFormation.Types.GetTemplateOutput, AWSError>;
  /**
   * Returns information about a new or existing template. The GetTemplateSummary action is useful for viewing parameter information, such as default parameter values and parameter types, before you create or update a stack. You can use the GetTemplateSummary action when you submit a template, or you can get template information for a running or deleted stack. For deleted stacks, GetTemplateSummary returns the template information for up to 90 days after the stack has been deleted. If the template does not exist, a ValidationError is returned.
   */
  getTemplateSummary(params: CloudFormation.Types.GetTemplateSummaryInput, callback?: (err: AWSError, data: CloudFormation.Types.GetTemplateSummaryOutput) => void): Request<CloudFormation.Types.GetTemplateSummaryOutput, AWSError>;
  /**
   * Returns information about a new or existing template. The GetTemplateSummary action is useful for viewing parameter information, such as default parameter values and parameter types, before you create or update a stack. You can use the GetTemplateSummary action when you submit a template, or you can get template information for a running or deleted stack. For deleted stacks, GetTemplateSummary returns the template information for up to 90 days after the stack has been deleted. If the template does not exist, a ValidationError is returned.
   */
  getTemplateSummary(callback?: (err: AWSError, data: CloudFormation.Types.GetTemplateSummaryOutput) => void): Request<CloudFormation.Types.GetTemplateSummaryOutput, AWSError>;
  /**
   * Returns the ID and status of each active change set for a stack. For example, AWS CloudFormation lists change sets that are in the CREATE_IN_PROGRESS or CREATE_PENDING state.
   */
  listChangeSets(params: CloudFormation.Types.ListChangeSetsInput, callback?: (err: AWSError, data: CloudFormation.Types.ListChangeSetsOutput) => void): Request<CloudFormation.Types.ListChangeSetsOutput, AWSError>;
  /**
   * Returns the ID and status of each active change set for a stack. For example, AWS CloudFormation lists change sets that are in the CREATE_IN_PROGRESS or CREATE_PENDING state.
   */
  listChangeSets(callback?: (err: AWSError, data: CloudFormation.Types.ListChangeSetsOutput) => void): Request<CloudFormation.Types.ListChangeSetsOutput, AWSError>;
  /**
   * Lists all exported output values in the account and region in which you call this action. Use this action to see the exported output values that you can import into other stacks. To import values, use the  Fn::ImportValue  function.  For more information, see  AWS CloudFormation Export Stack Output Values.
   */
  listExports(params: CloudFormation.Types.ListExportsInput, callback?: (err: AWSError, data: CloudFormation.Types.ListExportsOutput) => void): Request<CloudFormation.Types.ListExportsOutput, AWSError>;
  /**
   * Lists all exported output values in the account and region in which you call this action. Use this action to see the exported output values that you can import into other stacks. To import values, use the  Fn::ImportValue  function.  For more information, see  AWS CloudFormation Export Stack Output Values.
   */
  listExports(callback?: (err: AWSError, data: CloudFormation.Types.ListExportsOutput) => void): Request<CloudFormation.Types.ListExportsOutput, AWSError>;
  /**
   * Returns descriptions of all resources of the specified stack. For deleted stacks, ListStackResources returns resource information for up to 90 days after the stack has been deleted.
   */
  listStackResources(params: CloudFormation.Types.ListStackResourcesInput, callback?: (err: AWSError, data: CloudFormation.Types.ListStackResourcesOutput) => void): Request<CloudFormation.Types.ListStackResourcesOutput, AWSError>;
  /**
   * Returns descriptions of all resources of the specified stack. For deleted stacks, ListStackResources returns resource information for up to 90 days after the stack has been deleted.
   */
  listStackResources(callback?: (err: AWSError, data: CloudFormation.Types.ListStackResourcesOutput) => void): Request<CloudFormation.Types.ListStackResourcesOutput, AWSError>;
  /**
   * Returns the summary information for stacks whose status matches the specified StackStatusFilter. Summary information for stacks that have been deleted is kept for 90 days after the stack is deleted. If no StackStatusFilter is specified, summary information for all stacks is returned (including existing stacks and stacks that have been deleted).
   */
  listStacks(params: CloudFormation.Types.ListStacksInput, callback?: (err: AWSError, data: CloudFormation.Types.ListStacksOutput) => void): Request<CloudFormation.Types.ListStacksOutput, AWSError>;
  /**
   * Returns the summary information for stacks whose status matches the specified StackStatusFilter. Summary information for stacks that have been deleted is kept for 90 days after the stack is deleted. If no StackStatusFilter is specified, summary information for all stacks is returned (including existing stacks and stacks that have been deleted).
   */
  listStacks(callback?: (err: AWSError, data: CloudFormation.Types.ListStacksOutput) => void): Request<CloudFormation.Types.ListStacksOutput, AWSError>;
  /**
   * Sets a stack policy for a specified stack.
   */
  setStackPolicy(params: CloudFormation.Types.SetStackPolicyInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets a stack policy for a specified stack.
   */
  setStackPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sends a signal to the specified resource with a success or failure status. You can use the SignalResource API in conjunction with a creation policy or update policy. AWS CloudFormation doesn't proceed with a stack creation or update until resources receive the required number of signals or the timeout period is exceeded. The SignalResource API is useful in cases where you want to send signals from anywhere other than an Amazon EC2 instance.
   */
  signalResource(params: CloudFormation.Types.SignalResourceInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sends a signal to the specified resource with a success or failure status. You can use the SignalResource API in conjunction with a creation policy or update policy. AWS CloudFormation doesn't proceed with a stack creation or update until resources receive the required number of signals or the timeout period is exceeded. The SignalResource API is useful in cases where you want to send signals from anywhere other than an Amazon EC2 instance.
   */
  signalResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates a stack as specified in the template. After the call completes successfully, the stack update starts. You can check the status of the stack via the DescribeStacks action. To get a copy of the template for an existing stack, you can use the GetTemplate action. For more information about creating an update template, updating a stack, and monitoring the progress of the update, see Updating a Stack.
   */
  updateStack(params: CloudFormation.Types.UpdateStackInput, callback?: (err: AWSError, data: CloudFormation.Types.UpdateStackOutput) => void): Request<CloudFormation.Types.UpdateStackOutput, AWSError>;
  /**
   * Updates a stack as specified in the template. After the call completes successfully, the stack update starts. You can check the status of the stack via the DescribeStacks action. To get a copy of the template for an existing stack, you can use the GetTemplate action. For more information about creating an update template, updating a stack, and monitoring the progress of the update, see Updating a Stack.
   */
  updateStack(callback?: (err: AWSError, data: CloudFormation.Types.UpdateStackOutput) => void): Request<CloudFormation.Types.UpdateStackOutput, AWSError>;
  /**
   * Validates a specified template. AWS CloudFormation first checks if the template is valid JSON. If it isn't, AWS CloudFormation checks if the template is valid YAML. If both these checks fail, AWS CloudFormation returns a template validation error.
   */
  validateTemplate(params: CloudFormation.Types.ValidateTemplateInput, callback?: (err: AWSError, data: CloudFormation.Types.ValidateTemplateOutput) => void): Request<CloudFormation.Types.ValidateTemplateOutput, AWSError>;
  /**
   * Validates a specified template. AWS CloudFormation first checks if the template is valid JSON. If it isn't, AWS CloudFormation checks if the template is valid YAML. If both these checks fail, AWS CloudFormation returns a template validation error.
   */
  validateTemplate(callback?: (err: AWSError, data: CloudFormation.Types.ValidateTemplateOutput) => void): Request<CloudFormation.Types.ValidateTemplateOutput, AWSError>;
  /**
   * Waits for the stackExists state by periodically calling the underlying CloudFormation.describeStacksoperation every 5 seconds (at most 20 times).
   */
  waitFor(state: "stackExists", params: CloudFormation.Types.DescribeStacksInput, callback?: (err: AWSError, data: CloudFormation.Types.DescribeStacksOutput) => void): Request<CloudFormation.Types.DescribeStacksOutput, AWSError>;
  /**
   * Waits for the stackExists state by periodically calling the underlying CloudFormation.describeStacksoperation every 5 seconds (at most 20 times).
   */
  waitFor(state: "stackExists", callback?: (err: AWSError, data: CloudFormation.Types.DescribeStacksOutput) => void): Request<CloudFormation.Types.DescribeStacksOutput, AWSError>;
  /**
   * Waits for the stackCreateComplete state by periodically calling the underlying CloudFormation.describeStacksoperation every 30 seconds (at most 120 times). Wait until stack status is CREATE_COMPLETE.
   */
  waitFor(state: "stackCreateComplete", params: CloudFormation.Types.DescribeStacksInput, callback?: (err: AWSError, data: CloudFormation.Types.DescribeStacksOutput) => void): Request<CloudFormation.Types.DescribeStacksOutput, AWSError>;
  /**
   * Waits for the stackCreateComplete state by periodically calling the underlying CloudFormation.describeStacksoperation every 30 seconds (at most 120 times). Wait until stack status is CREATE_COMPLETE.
   */
  waitFor(state: "stackCreateComplete", callback?: (err: AWSError, data: CloudFormation.Types.DescribeStacksOutput) => void): Request<CloudFormation.Types.DescribeStacksOutput, AWSError>;
  /**
   * Waits for the stackDeleteComplete state by periodically calling the underlying CloudFormation.describeStacksoperation every 30 seconds (at most 120 times). Wait until stack status is DELETE_COMPLETE.
   */
  waitFor(state: "stackDeleteComplete", params: CloudFormation.Types.DescribeStacksInput, callback?: (err: AWSError, data: CloudFormation.Types.DescribeStacksOutput) => void): Request<CloudFormation.Types.DescribeStacksOutput, AWSError>;
  /**
   * Waits for the stackDeleteComplete state by periodically calling the underlying CloudFormation.describeStacksoperation every 30 seconds (at most 120 times). Wait until stack status is DELETE_COMPLETE.
   */
  waitFor(state: "stackDeleteComplete", callback?: (err: AWSError, data: CloudFormation.Types.DescribeStacksOutput) => void): Request<CloudFormation.Types.DescribeStacksOutput, AWSError>;
  /**
   * Waits for the stackUpdateComplete state by periodically calling the underlying CloudFormation.describeStacksoperation every 30 seconds (at most 120 times). Wait until stack status is UPDATE_COMPLETE.
   */
  waitFor(state: "stackUpdateComplete", params: CloudFormation.Types.DescribeStacksInput, callback?: (err: AWSError, data: CloudFormation.Types.DescribeStacksOutput) => void): Request<CloudFormation.Types.DescribeStacksOutput, AWSError>;
  /**
   * Waits for the stackUpdateComplete state by periodically calling the underlying CloudFormation.describeStacksoperation every 30 seconds (at most 120 times). Wait until stack status is UPDATE_COMPLETE.
   */
  waitFor(state: "stackUpdateComplete", callback?: (err: AWSError, data: CloudFormation.Types.DescribeStacksOutput) => void): Request<CloudFormation.Types.DescribeStacksOutput, AWSError>;
}
declare namespace CloudFormation.Types {
  export interface AccountLimit {
    /**
     * The name of the account limit. Currently, the only account limit is StackLimit.
     */
    Name?: LimitName;
    /**
     * The value that is associated with the account limit name.
     */
    Value?: LimitValue;
  }
  export type AccountLimitList = AccountLimit[];
  export type AllowedValue = string;
  export type AllowedValues = AllowedValue[];
  export interface CancelUpdateStackInput {
    /**
     * The name or the unique stack ID that is associated with the stack.
     */
    StackName: StackName;
  }
  export type Capabilities = Capability[];
  export type CapabilitiesReason = string;
  export type Capability = "CAPABILITY_IAM"|"CAPABILITY_NAMED_IAM"|string;
  export type CausingEntity = string;
  export interface Change {
    /**
     * The type of entity that AWS CloudFormation changes. Currently, the only entity type is Resource.
     */
    Type?: ChangeType;
    /**
     * A ResourceChange structure that describes the resource and action that AWS CloudFormation will perform.
     */
    ResourceChange?: ResourceChange;
  }
  export type ChangeAction = "Add"|"Modify"|"Remove"|string;
  export type ChangeSetId = string;
  export type ChangeSetName = string;
  export type ChangeSetNameOrId = string;
  export type ChangeSetStatus = "CREATE_PENDING"|"CREATE_IN_PROGRESS"|"CREATE_COMPLETE"|"DELETE_COMPLETE"|"FAILED"|string;
  export type ChangeSetStatusReason = string;
  export type ChangeSetSummaries = ChangeSetSummary[];
  export interface ChangeSetSummary {
    /**
     * The ID of the stack with which the change set is associated.
     */
    StackId?: StackId;
    /**
     * The name of the stack with which the change set is associated.
     */
    StackName?: StackName;
    /**
     * The ID of the change set.
     */
    ChangeSetId?: ChangeSetId;
    /**
     * The name of the change set.
     */
    ChangeSetName?: ChangeSetName;
    /**
     * If the change set execution status is AVAILABLE, you can execute the change set. If you can’t execute the change set, the status indicates why. For example, a change set might be in an UNAVAILABLE state because AWS CloudFormation is still creating it or in an OBSOLETE state because the stack was already updated.
     */
    ExecutionStatus?: ExecutionStatus;
    /**
     * The state of the change set, such as CREATE_IN_PROGRESS, CREATE_COMPLETE, or FAILED.
     */
    Status?: ChangeSetStatus;
    /**
     * A description of the change set's status. For example, if your change set is in the FAILED state, AWS CloudFormation shows the error message.
     */
    StatusReason?: ChangeSetStatusReason;
    /**
     * The start time when the change set was created, in UTC.
     */
    CreationTime?: CreationTime;
    /**
     * Descriptive information about the change set.
     */
    Description?: Description;
  }
  export type ChangeSetType = "CREATE"|"UPDATE"|string;
  export type ChangeSource = "ResourceReference"|"ParameterReference"|"ResourceAttribute"|"DirectModification"|"Automatic"|string;
  export type ChangeType = "Resource"|string;
  export type Changes = Change[];
  export type ClientToken = string;
  export interface ContinueUpdateRollbackInput {
    /**
     * The name or the unique ID of the stack that you want to continue rolling back.  Don't specify the name of a nested stack (a stack that was created by using the AWS::CloudFormation::Stack resource). Instead, use this operation on the parent stack (the stack that contains the AWS::CloudFormation::Stack resource). 
     */
    StackName: StackNameOrId;
    /**
     * The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that AWS CloudFormation assumes to roll back the stack. AWS CloudFormation uses the role's credentials to make calls on your behalf. AWS CloudFormation always uses this role for all future operations on the stack. As long as users have permission to operate on the stack, AWS CloudFormation uses this role even if the users don't have permission to pass it. Ensure that the role grants least privilege. If you don't specify a value, AWS CloudFormation uses the role that was previously associated with the stack. If no role is available, AWS CloudFormation uses a temporary session that is generated from your user credentials.
     */
    RoleARN?: RoleARN;
    /**
     * A list of the logical IDs of the resources that AWS CloudFormation skips during the continue update rollback operation. You can specify only resources that are in the UPDATE_FAILED state because a rollback failed. You can't specify resources that are in the UPDATE_FAILED state for other reasons, for example, because an update was canceled. To check why a resource update failed, use the DescribeStackResources action, and view the resource status reason.   Specify this property to skip rolling back resources that AWS CloudFormation can't successfully roll back. We recommend that you  troubleshoot resources before skipping them. AWS CloudFormation sets the status of the specified resources to UPDATE_COMPLETE and continues to roll back the stack. After the rollback is complete, the state of the skipped resources will be inconsistent with the state of the resources in the stack template. Before performing another stack update, you must update the stack or resources to be consistent with each other. If you don't, subsequent stack updates might fail, and the stack will become unrecoverable.   Specify the minimum number of resources required to successfully roll back your stack. For example, a failed resource update might cause dependent resources to fail. In this case, it might not be necessary to skip the dependent resources.  To specify resources in a nested stack, use the following format: NestedStackName.ResourceLogicalID. You can specify a nested stack resource (the logical ID of an AWS::CloudFormation::Stack resource) only if it's in one of the following states: DELETE_IN_PROGRESS, DELETE_COMPLETE, or DELETE_FAILED. 
     */
    ResourcesToSkip?: ResourcesToSkip;
  }
  export interface ContinueUpdateRollbackOutput {
  }
  export interface CreateChangeSetInput {
    /**
     * The name or the unique ID of the stack for which you are creating a change set. AWS CloudFormation generates the change set by comparing this stack's information with the information that you submit, such as a modified template or different parameter input values.
     */
    StackName: StackNameOrId;
    /**
     * A structure that contains the body of the revised template, with a minimum length of 1 byte and a maximum length of 51,200 bytes. AWS CloudFormation generates the change set by comparing this template with the template of the stack that you specified. Conditional: You must specify only TemplateBody or TemplateURL.
     */
    TemplateBody?: TemplateBody;
    /**
     * The location of the file that contains the revised template. The URL must point to a template (max size: 460,800 bytes) that is located in an S3 bucket. AWS CloudFormation generates the change set by comparing this template with the stack that you specified. Conditional: You must specify only TemplateBody or TemplateURL.
     */
    TemplateURL?: TemplateURL;
    /**
     * Whether to reuse the template that is associated with the stack to create the change set.
     */
    UsePreviousTemplate?: UsePreviousTemplate;
    /**
     * A list of Parameter structures that specify input parameters for the change set. For more information, see the Parameter data type.
     */
    Parameters?: Parameters;
    /**
     * A list of values that you must specify before AWS CloudFormation can update certain stacks. Some stack templates might include resources that can affect permissions in your AWS account, for example, by creating new AWS Identity and Access Management (IAM) users. For those stacks, you must explicitly acknowledge their capabilities by specifying this parameter. The only valid values are CAPABILITY_IAM and CAPABILITY_NAMED_IAM. The following resources require you to specify this parameter:  AWS::IAM::AccessKey,  AWS::IAM::Group,  AWS::IAM::InstanceProfile,  AWS::IAM::Policy,  AWS::IAM::Role,  AWS::IAM::User, and  AWS::IAM::UserToGroupAddition. If your stack template contains these resources, we recommend that you review all permissions associated with them and edit their permissions if necessary. If you have IAM resources, you can specify either capability. If you have IAM resources with custom names, you must specify CAPABILITY_NAMED_IAM. If you don't specify this parameter, this action returns an InsufficientCapabilities error. For more information, see Acknowledging IAM Resources in AWS CloudFormation Templates.
     */
    Capabilities?: Capabilities;
    /**
     * The template resource types that you have permissions to work with if you execute this change set, such as AWS::EC2::Instance, AWS::EC2::*, or Custom::MyCustomInstance. If the list of resource types doesn't include a resource type that you're updating, the stack update fails. By default, AWS CloudFormation grants permissions to all resource types. AWS Identity and Access Management (IAM) uses this parameter for condition keys in IAM policies for AWS CloudFormation. For more information, see Controlling Access with AWS Identity and Access Management in the AWS CloudFormation User Guide.
     */
    ResourceTypes?: ResourceTypes;
    /**
     * The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that AWS CloudFormation assumes when executing the change set. AWS CloudFormation uses the role's credentials to make calls on your behalf. AWS CloudFormation uses this role for all future operations on the stack. As long as users have permission to operate on the stack, AWS CloudFormation uses this role even if the users don't have permission to pass it. Ensure that the role grants least privilege. If you don't specify a value, AWS CloudFormation uses the role that was previously associated with the stack. If no role is available, AWS CloudFormation uses a temporary session that is generated from your user credentials.
     */
    RoleARN?: RoleARN;
    /**
     * The Amazon Resource Names (ARNs) of Amazon Simple Notification Service (Amazon SNS) topics that AWS CloudFormation associates with the stack. To remove all associated notification topics, specify an empty list.
     */
    NotificationARNs?: NotificationARNs;
    /**
     * Key-value pairs to associate with this stack. AWS CloudFormation also propagates these tags to resources in the stack. You can specify a maximum of 10 tags.
     */
    Tags?: Tags;
    /**
     * The name of the change set. The name must be unique among all change sets that are associated with the specified stack. A change set name can contain only alphanumeric, case sensitive characters and hyphens. It must start with an alphabetic character and cannot exceed 128 characters.
     */
    ChangeSetName: ChangeSetName;
    /**
     * A unique identifier for this CreateChangeSet request. Specify this token if you plan to retry requests so that AWS CloudFormation knows that you're not attempting to create another change set with the same name. You might retry CreateChangeSet requests to ensure that AWS CloudFormation successfully received them.
     */
    ClientToken?: ClientToken;
    /**
     * A description to help you identify this change set.
     */
    Description?: Description;
    /**
     * The type of change set operation. Valid values are CREATE and UPDATE. The default value is UPDATE.    CREATE - Specify to use the change set to create a new stack. While AWS CloudFormation creates the stack, the stack has the  REVIEW_IN_PROGRESS  status and an expected StackId, but no template or resources. Except for its StackId, the stack is completely empty until you execute the change set. You can apply multiple change sets to a stack.    UPDATE - Specify to create a change set for an existing stack.  
     */
    ChangeSetType?: ChangeSetType;
  }
  export interface CreateChangeSetOutput {
    /**
     * The Amazon Resource Name (ARN) of the change set.
     */
    Id?: ChangeSetId;
    /**
     * The unique ID of the stack.
     */
    StackId?: StackId;
  }
  export interface CreateStackInput {
    /**
     * The name that is associated with the stack. The name must be unique in the region in which you are creating the stack.  A stack name can contain only alphanumeric characters (case sensitive) and hyphens. It must start with an alphabetic character and cannot be longer than 128 characters. 
     */
    StackName: StackName;
    /**
     * Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. For more information, go to Template Anatomy in the AWS CloudFormation User Guide. Conditional: You must specify either the TemplateBody or the TemplateURL parameter, but not both.
     */
    TemplateBody?: TemplateBody;
    /**
     * Location of file containing the template body. The URL must point to a template (max size: 460,800 bytes) that is located in an Amazon S3 bucket. For more information, go to the Template Anatomy in the AWS CloudFormation User Guide. Conditional: You must specify either the TemplateBody or the TemplateURL parameter, but not both.
     */
    TemplateURL?: TemplateURL;
    /**
     * A list of Parameter structures that specify input parameters for the stack. For more information, see the Parameter data type.
     */
    Parameters?: Parameters;
    /**
     * Set to true to disable rollback of the stack if stack creation failed. You can specify either DisableRollback or OnFailure, but not both. Default: false 
     */
    DisableRollback?: DisableRollback;
    /**
     * The amount of time that can pass before the stack status becomes CREATE_FAILED; if DisableRollback is not set or is set to false, the stack will be rolled back.
     */
    TimeoutInMinutes?: TimeoutMinutes;
    /**
     * The Simple Notification Service (SNS) topic ARNs to publish stack related events. You can find your SNS topic ARNs using the SNS console or your Command Line Interface (CLI).
     */
    NotificationARNs?: NotificationARNs;
    /**
     * A list of values that you must specify before AWS CloudFormation can create certain stacks. Some stack templates might include resources that can affect permissions in your AWS account, for example, by creating new AWS Identity and Access Management (IAM) users. For those stacks, you must explicitly acknowledge their capabilities by specifying this parameter. The only valid values are CAPABILITY_IAM and CAPABILITY_NAMED_IAM. The following resources require you to specify this parameter:  AWS::IAM::AccessKey,  AWS::IAM::Group,  AWS::IAM::InstanceProfile,  AWS::IAM::Policy,  AWS::IAM::Role,  AWS::IAM::User, and  AWS::IAM::UserToGroupAddition. If your stack template contains these resources, we recommend that you review all permissions associated with them and edit their permissions if necessary. If you have IAM resources, you can specify either capability. If you have IAM resources with custom names, you must specify CAPABILITY_NAMED_IAM. If you don't specify this parameter, this action returns an InsufficientCapabilities error. For more information, see Acknowledging IAM Resources in AWS CloudFormation Templates.
     */
    Capabilities?: Capabilities;
    /**
     * The template resource types that you have permissions to work with for this create stack action, such as AWS::EC2::Instance, AWS::EC2::*, or Custom::MyCustomInstance. Use the following syntax to describe template resource types: AWS::* (for all AWS resource), Custom::* (for all custom resources), Custom::logical_ID  (for a specific custom resource), AWS::service_name::* (for all resources of a particular AWS service), and AWS::service_name::resource_logical_ID  (for a specific AWS resource). If the list of resource types doesn't include a resource that you're creating, the stack creation fails. By default, AWS CloudFormation grants permissions to all resource types. AWS Identity and Access Management (IAM) uses this parameter for AWS CloudFormation-specific condition keys in IAM policies. For more information, see Controlling Access with AWS Identity and Access Management.
     */
    ResourceTypes?: ResourceTypes;
    /**
     * The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that AWS CloudFormation assumes to create the stack. AWS CloudFormation uses the role's credentials to make calls on your behalf. AWS CloudFormation always uses this role for all future operations on the stack. As long as users have permission to operate on the stack, AWS CloudFormation uses this role even if the users don't have permission to pass it. Ensure that the role grants least privilege. If you don't specify a value, AWS CloudFormation uses the role that was previously associated with the stack. If no role is available, AWS CloudFormation uses a temporary session that is generated from your user credentials.
     */
    RoleARN?: RoleARN;
    /**
     * Determines what action will be taken if stack creation fails. This must be one of: DO_NOTHING, ROLLBACK, or DELETE. You can specify either OnFailure or DisableRollback, but not both. Default: ROLLBACK 
     */
    OnFailure?: OnFailure;
    /**
     * Structure containing the stack policy body. For more information, go to  Prevent Updates to Stack Resources in the AWS CloudFormation User Guide. You can specify either the StackPolicyBody or the StackPolicyURL parameter, but not both.
     */
    StackPolicyBody?: StackPolicyBody;
    /**
     * Location of a file containing the stack policy. The URL must point to a policy (maximum size: 16 KB) located in an S3 bucket in the same region as the stack. You can specify either the StackPolicyBody or the StackPolicyURL parameter, but not both.
     */
    StackPolicyURL?: StackPolicyURL;
    /**
     * Key-value pairs to associate with this stack. AWS CloudFormation also propagates these tags to the resources created in the stack. A maximum number of 10 tags can be specified.
     */
    Tags?: Tags;
  }
  export interface CreateStackOutput {
    /**
     * Unique identifier of the stack.
     */
    StackId?: StackId;
  }
  export type CreationTime = Date;
  export interface DeleteChangeSetInput {
    /**
     * The name or Amazon Resource Name (ARN) of the change set that you want to delete.
     */
    ChangeSetName: ChangeSetNameOrId;
    /**
     * If you specified the name of a change set to delete, specify the stack name or ID (ARN) that is associated with it.
     */
    StackName?: StackNameOrId;
  }
  export interface DeleteChangeSetOutput {
  }
  export interface DeleteStackInput {
    /**
     * The name or the unique stack ID that is associated with the stack.
     */
    StackName: StackName;
    /**
     * For stacks in the DELETE_FAILED state, a list of resource logical IDs that are associated with the resources you want to retain. During deletion, AWS CloudFormation deletes the stack but does not delete the retained resources. Retaining resources is useful when you cannot delete a resource, such as a non-empty S3 bucket, but you want to delete the stack.
     */
    RetainResources?: RetainResources;
    /**
     * The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that AWS CloudFormation assumes to delete the stack. AWS CloudFormation uses the role's credentials to make calls on your behalf. If you don't specify a value, AWS CloudFormation uses the role that was previously associated with the stack. If no role is available, AWS CloudFormation uses a temporary session that is generated from your user credentials.
     */
    RoleARN?: RoleARN;
  }
  export type DeletionTime = Date;
  export interface DescribeAccountLimitsInput {
    /**
     * A string that identifies the next page of limits that you want to retrieve.
     */
    NextToken?: NextToken;
  }
  export interface DescribeAccountLimitsOutput {
    /**
     * An account limit structure that contain a list of AWS CloudFormation account limits and their values.
     */
    AccountLimits?: AccountLimitList;
    /**
     * If the output exceeds 1 MB in size, a string that identifies the next page of limits. If no additional page exists, this value is null.
     */
    NextToken?: NextToken;
  }
  export interface DescribeChangeSetInput {
    /**
     * The name or Amazon Resource Name (ARN) of the change set that you want to describe.
     */
    ChangeSetName: ChangeSetNameOrId;
    /**
     * If you specified the name of a change set, specify the stack name or ID (ARN) of the change set you want to describe.
     */
    StackName?: StackNameOrId;
    /**
     * A string (provided by the DescribeChangeSet response output) that identifies the next page of information that you want to retrieve.
     */
    NextToken?: NextToken;
  }
  export interface DescribeChangeSetOutput {
    /**
     * The name of the change set.
     */
    ChangeSetName?: ChangeSetName;
    /**
     * The ARN of the change set.
     */
    ChangeSetId?: ChangeSetId;
    /**
     * The ARN of the stack that is associated with the change set.
     */
    StackId?: StackId;
    /**
     * The name of the stack that is associated with the change set.
     */
    StackName?: StackName;
    /**
     * Information about the change set.
     */
    Description?: Description;
    /**
     * A list of Parameter structures that describes the input parameters and their values used to create the change set. For more information, see the Parameter data type.
     */
    Parameters?: Parameters;
    /**
     * The start time when the change set was created, in UTC.
     */
    CreationTime?: CreationTime;
    /**
     * If the change set execution status is AVAILABLE, you can execute the change set. If you can’t execute the change set, the status indicates why. For example, a change set might be in an UNAVAILABLE state because AWS CloudFormation is still creating it or in an OBSOLETE state because the stack was already updated.
     */
    ExecutionStatus?: ExecutionStatus;
    /**
     * The current status of the change set, such as CREATE_IN_PROGRESS, CREATE_COMPLETE, or FAILED.
     */
    Status?: ChangeSetStatus;
    /**
     * A description of the change set's status. For example, if your attempt to create a change set failed, AWS CloudFormation shows the error message.
     */
    StatusReason?: ChangeSetStatusReason;
    /**
     * The ARNs of the Amazon Simple Notification Service (Amazon SNS) topics that will be associated with the stack if you execute the change set.
     */
    NotificationARNs?: NotificationARNs;
    /**
     * If you execute the change set, the list of capabilities that were explicitly acknowledged when the change set was created.
     */
    Capabilities?: Capabilities;
    /**
     * If you execute the change set, the tags that will be associated with the stack.
     */
    Tags?: Tags;
    /**
     * A list of Change structures that describes the resources AWS CloudFormation changes if you execute the change set.
     */
    Changes?: Changes;
    /**
     * If the output exceeds 1 MB, a string that identifies the next page of changes. If there is no additional page, this value is null.
     */
    NextToken?: NextToken;
  }
  export interface DescribeStackEventsInput {
    /**
     * The name or the unique stack ID that is associated with the stack, which are not always interchangeable:   Running stacks: You can specify either the stack's name or its unique stack ID.   Deleted stacks: You must specify the unique stack ID.   Default: There is no default value.
     */
    StackName?: StackName;
    /**
     * A string that identifies the next page of events that you want to retrieve.
     */
    NextToken?: NextToken;
  }
  export interface DescribeStackEventsOutput {
    /**
     * A list of StackEvents structures.
     */
    StackEvents?: StackEvents;
    /**
     * If the output exceeds 1 MB in size, a string that identifies the next page of events. If no additional page exists, this value is null.
     */
    NextToken?: NextToken;
  }
  export interface DescribeStackResourceInput {
    /**
     * The name or the unique stack ID that is associated with the stack, which are not always interchangeable:   Running stacks: You can specify either the stack's name or its unique stack ID.   Deleted stacks: You must specify the unique stack ID.   Default: There is no default value.
     */
    StackName: StackName;
    /**
     * The logical name of the resource as specified in the template. Default: There is no default value.
     */
    LogicalResourceId: LogicalResourceId;
  }
  export interface DescribeStackResourceOutput {
    /**
     * A StackResourceDetail structure containing the description of the specified resource in the specified stack.
     */
    StackResourceDetail?: StackResourceDetail;
  }
  export interface DescribeStackResourcesInput {
    /**
     * The name or the unique stack ID that is associated with the stack, which are not always interchangeable:   Running stacks: You can specify either the stack's name or its unique stack ID.   Deleted stacks: You must specify the unique stack ID.   Default: There is no default value. Required: Conditional. If you do not specify StackName, you must specify PhysicalResourceId.
     */
    StackName?: StackName;
    /**
     * The logical name of the resource as specified in the template. Default: There is no default value.
     */
    LogicalResourceId?: LogicalResourceId;
    /**
     * The name or unique identifier that corresponds to a physical instance ID of a resource supported by AWS CloudFormation. For example, for an Amazon Elastic Compute Cloud (EC2) instance, PhysicalResourceId corresponds to the InstanceId. You can pass the EC2 InstanceId to DescribeStackResources to find which stack the instance belongs to and what other resources are part of the stack. Required: Conditional. If you do not specify PhysicalResourceId, you must specify StackName. Default: There is no default value.
     */
    PhysicalResourceId?: PhysicalResourceId;
  }
  export interface DescribeStackResourcesOutput {
    /**
     * A list of StackResource structures.
     */
    StackResources?: StackResources;
  }
  export interface DescribeStacksInput {
    /**
     * The name or the unique stack ID that is associated with the stack, which are not always interchangeable:   Running stacks: You can specify either the stack's name or its unique stack ID.   Deleted stacks: You must specify the unique stack ID.   Default: There is no default value.
     */
    StackName?: StackName;
    /**
     * A string that identifies the next page of stacks that you want to retrieve.
     */
    NextToken?: NextToken;
  }
  export interface DescribeStacksOutput {
    /**
     * A list of stack structures.
     */
    Stacks?: Stacks;
    /**
     * If the output exceeds 1 MB in size, a string that identifies the next page of stacks. If no additional page exists, this value is null.
     */
    NextToken?: NextToken;
  }
  export type Description = string;
  export type DisableRollback = boolean;
  export interface EstimateTemplateCostInput {
    /**
     * Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. (For more information, go to Template Anatomy in the AWS CloudFormation User Guide.) Conditional: You must pass TemplateBody or TemplateURL. If both are passed, only TemplateBody is used.
     */
    TemplateBody?: TemplateBody;
    /**
     * Location of file containing the template body. The URL must point to a template that is located in an Amazon S3 bucket. For more information, go to Template Anatomy in the AWS CloudFormation User Guide. Conditional: You must pass TemplateURL or TemplateBody. If both are passed, only TemplateBody is used.
     */
    TemplateURL?: TemplateURL;
    /**
     * A list of Parameter structures that specify input parameters.
     */
    Parameters?: Parameters;
  }
  export interface EstimateTemplateCostOutput {
    /**
     * An AWS Simple Monthly Calculator URL with a query string that describes the resources required to run the template.
     */
    Url?: Url;
  }
  export type EvaluationType = "Static"|"Dynamic"|string;
  export type EventId = string;
  export interface ExecuteChangeSetInput {
    /**
     * The name or ARN of the change set that you want use to update the specified stack.
     */
    ChangeSetName: ChangeSetNameOrId;
    /**
     * If you specified the name of a change set, specify the stack name or ID (ARN) that is associated with the change set you want to execute.
     */
    StackName?: StackNameOrId;
  }
  export interface ExecuteChangeSetOutput {
  }
  export type ExecutionStatus = "UNAVAILABLE"|"AVAILABLE"|"EXECUTE_IN_PROGRESS"|"EXECUTE_COMPLETE"|"EXECUTE_FAILED"|"OBSOLETE"|string;
  export interface Export {
    /**
     * The stack that contains the exported output name and value.
     */
    ExportingStackId?: StackId;
    /**
     * The name of exported output value. Use this name and the Fn::ImportValue function to import the associated value into other stacks. The name is defined in the Export field in the associated stack's Outputs section.
     */
    Name?: ExportName;
    /**
     * The value of the exported output, such as a resource physical ID. This value is defined in the Export field in the associated stack's Outputs section.
     */
    Value?: ExportValue;
  }
  export type ExportName = string;
  export type ExportValue = string;
  export type Exports = Export[];
  export interface GetStackPolicyInput {
    /**
     * The name or unique stack ID that is associated with the stack whose policy you want to get.
     */
    StackName: StackName;
  }
  export interface GetStackPolicyOutput {
    /**
     * Structure containing the stack policy body. (For more information, go to  Prevent Updates to Stack Resources in the AWS CloudFormation User Guide.)
     */
    StackPolicyBody?: StackPolicyBody;
  }
  export interface GetTemplateInput {
    /**
     * The name or the unique stack ID that is associated with the stack, which are not always interchangeable:   Running stacks: You can specify either the stack's name or its unique stack ID.   Deleted stacks: You must specify the unique stack ID.   Default: There is no default value.
     */
    StackName?: StackName;
    /**
     * Returns the template for a change set using the Amazon Resource Name (ARN) or name of the change set. If you specify a name, you must also specify the StackName.
     */
    ChangeSetName?: ChangeSetNameOrId;
    /**
     * The stage of the template that is returned. Valid values are Original and Processed. The default value is Original.    Original - Use this value to return the user-submitted template.    Processed - Use this value to return the template after all transforms have been processed.  
     */
    TemplateStage?: TemplateStage;
  }
  export interface GetTemplateOutput {
    /**
     * Structure containing the template body. (For more information, go to Template Anatomy in the AWS CloudFormation User Guide.) AWS CloudFormation returns the same template that was used when the stack was created.
     */
    TemplateBody?: TemplateBody;
    /**
     * The template type.   For stacks, you can use either the Original or the Processed template type.   For change sets, you can use only the Original template type. After the transforms are processed, you can use the Processed template type.    If you create a change set for a new stack, you must select the template type. 
     */
    StagesAvailable?: StageList;
  }
  export interface GetTemplateSummaryInput {
    /**
     * Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. For more information about templates, see Template Anatomy in the AWS CloudFormation User Guide. Conditional: You must specify only one of the following parameters: StackName, TemplateBody, or TemplateURL.
     */
    TemplateBody?: TemplateBody;
    /**
     * Location of file containing the template body. The URL must point to a template (max size: 460,800 bytes) that is located in an Amazon S3 bucket. For more information about templates, see Template Anatomy in the AWS CloudFormation User Guide. Conditional: You must specify only one of the following parameters: StackName, TemplateBody, or TemplateURL.
     */
    TemplateURL?: TemplateURL;
    /**
     * The name or the stack ID that is associated with the stack, which are not always interchangeable. For running stacks, you can specify either the stack's name or its unique stack ID. For deleted stack, you must specify the unique stack ID. Conditional: You must specify only one of the following parameters: StackName, TemplateBody, or TemplateURL.
     */
    StackName?: StackNameOrId;
  }
  export interface GetTemplateSummaryOutput {
    /**
     * A list of parameter declarations that describe various properties for each parameter.
     */
    Parameters?: ParameterDeclarations;
    /**
     * The value that is defined in the Description property of the template.
     */
    Description?: Description;
    /**
     * The capabilities found within the template. If your template contains IAM resources, you must specify the CAPABILITY_IAM or CAPABILITY_NAMED_IAM value for this parameter when you use the CreateStack or UpdateStack actions with your template; otherwise, those actions return an InsufficientCapabilities error. For more information, see Acknowledging IAM Resources in AWS CloudFormation Templates.
     */
    Capabilities?: Capabilities;
    /**
     * The list of resources that generated the values in the Capabilities response element.
     */
    CapabilitiesReason?: CapabilitiesReason;
    /**
     * A list of all the template resource types that are defined in the template, such as AWS::EC2::Instance, AWS::Dynamo::Table, and Custom::MyCustomInstance.
     */
    ResourceTypes?: ResourceTypes;
    /**
     * The AWS template format version, which identifies the capabilities of the template.
     */
    Version?: Version;
    /**
     * The value that is defined for the Metadata property of the template.
     */
    Metadata?: Metadata;
    /**
     * A list of the transforms that are declared in the template.
     */
    DeclaredTransforms?: TransformsList;
  }
  export type LastUpdatedTime = Date;
  export type LimitName = string;
  export type LimitValue = number;
  export interface ListChangeSetsInput {
    /**
     * The name or the Amazon Resource Name (ARN) of the stack for which you want to list change sets.
     */
    StackName: StackNameOrId;
    /**
     * A string (provided by the ListChangeSets response output) that identifies the next page of change sets that you want to retrieve.
     */
    NextToken?: NextToken;
  }
  export interface ListChangeSetsOutput {
    /**
     * A list of ChangeSetSummary structures that provides the ID and status of each change set for the specified stack.
     */
    Summaries?: ChangeSetSummaries;
    /**
     * If the output exceeds 1 MB, a string that identifies the next page of change sets. If there is no additional page, this value is null.
     */
    NextToken?: NextToken;
  }
  export interface ListExportsInput {
    /**
     * A string (provided by the ListExports response output) that identifies the next page of exported output values that you asked to retrieve.
     */
    NextToken?: NextToken;
  }
  export interface ListExportsOutput {
    /**
     * The output for the ListExports action.
     */
    Exports?: Exports;
    /**
     * If the output exceeds 100 exported output values, a string that identifies the next page of exports. If there is no additional page, this value is null.
     */
    NextToken?: NextToken;
  }
  export interface ListStackResourcesInput {
    /**
     * The name or the unique stack ID that is associated with the stack, which are not always interchangeable:   Running stacks: You can specify either the stack's name or its unique stack ID.   Deleted stacks: You must specify the unique stack ID.   Default: There is no default value.
     */
    StackName: StackName;
    /**
     * A string that identifies the next page of stack resources that you want to retrieve.
     */
    NextToken?: NextToken;
  }
  export interface ListStackResourcesOutput {
    /**
     * A list of StackResourceSummary structures.
     */
    StackResourceSummaries?: StackResourceSummaries;
    /**
     * If the output exceeds 1 MB, a string that identifies the next page of stack resources. If no additional page exists, this value is null.
     */
    NextToken?: NextToken;
  }
  export interface ListStacksInput {
    /**
     * A string that identifies the next page of stacks that you want to retrieve.
     */
    NextToken?: NextToken;
    /**
     * Stack status to use as a filter. Specify one or more stack status codes to list only stacks with the specified status codes. For a complete list of stack status codes, see the StackStatus parameter of the Stack data type.
     */
    StackStatusFilter?: StackStatusFilter;
  }
  export interface ListStacksOutput {
    /**
     * A list of StackSummary structures containing information about the specified stacks.
     */
    StackSummaries?: StackSummaries;
    /**
     * If the output exceeds 1 MB in size, a string that identifies the next page of stacks. If no additional page exists, this value is null.
     */
    NextToken?: NextToken;
  }
  export type LogicalResourceId = string;
  export type Metadata = string;
  export type NextToken = string;
  export type NoEcho = boolean;
  export type NotificationARN = string;
  export type NotificationARNs = NotificationARN[];
  export type OnFailure = "DO_NOTHING"|"ROLLBACK"|"DELETE"|string;
  export interface Output {
    /**
     * The key associated with the output.
     */
    OutputKey?: OutputKey;
    /**
     * The value associated with the output.
     */
    OutputValue?: OutputValue;
    /**
     * User defined description associated with the output.
     */
    Description?: Description;
  }
  export type OutputKey = string;
  export type OutputValue = string;
  export type Outputs = Output[];
  export interface Parameter {
    /**
     * The key associated with the parameter. If you don't specify a key and value for a particular parameter, AWS CloudFormation uses the default value that is specified in your template.
     */
    ParameterKey?: ParameterKey;
    /**
     * The value associated with the parameter.
     */
    ParameterValue?: ParameterValue;
    /**
     * During a stack update, use the existing parameter value that the stack is using for a given parameter key. If you specify true, do not specify a parameter value.
     */
    UsePreviousValue?: UsePreviousValue;
  }
  export interface ParameterConstraints {
    /**
     * A list of values that are permitted for a parameter.
     */
    AllowedValues?: AllowedValues;
  }
  export interface ParameterDeclaration {
    /**
     * The name that is associated with the parameter.
     */
    ParameterKey?: ParameterKey;
    /**
     * The default value of the parameter.
     */
    DefaultValue?: ParameterValue;
    /**
     * The type of parameter.
     */
    ParameterType?: ParameterType;
    /**
     * Flag that indicates whether the parameter value is shown as plain text in logs and in the AWS Management Console.
     */
    NoEcho?: NoEcho;
    /**
     * The description that is associate with the parameter.
     */
    Description?: Description;
    /**
     * The criteria that AWS CloudFormation uses to validate parameter values.
     */
    ParameterConstraints?: ParameterConstraints;
  }
  export type ParameterDeclarations = ParameterDeclaration[];
  export type ParameterKey = string;
  export type ParameterType = string;
  export type ParameterValue = string;
  export type Parameters = Parameter[];
  export type PhysicalResourceId = string;
  export type PropertyName = string;
  export type Replacement = "True"|"False"|"Conditional"|string;
  export type RequiresRecreation = "Never"|"Conditionally"|"Always"|string;
  export type ResourceAttribute = "Properties"|"Metadata"|"CreationPolicy"|"UpdatePolicy"|"DeletionPolicy"|"Tags"|string;
  export interface ResourceChange {
    /**
     * The action that AWS CloudFormation takes on the resource, such as Add (adds a new resource), Modify (changes a resource), or Remove (deletes a resource).
     */
    Action?: ChangeAction;
    /**
     * The resource's logical ID, which is defined in the stack's template.
     */
    LogicalResourceId?: LogicalResourceId;
    /**
     * The resource's physical ID (resource name). Resources that you are adding don't have physical IDs because they haven't been created.
     */
    PhysicalResourceId?: PhysicalResourceId;
    /**
     * The type of AWS CloudFormation resource, such as AWS::S3::Bucket.
     */
    ResourceType?: ResourceType;
    /**
     * For the Modify action, indicates whether AWS CloudFormation will replace the resource by creating a new one and deleting the old one. This value depends on the value of the RequiresRecreation property in the ResourceTargetDefinition structure. For example, if the RequiresRecreation field is Always and the Evaluation field is Static, Replacement is True. If the RequiresRecreation field is Always and the Evaluation field is Dynamic, Replacement is Conditionally. If you have multiple changes with different RequiresRecreation values, the Replacement value depends on the change with the most impact. A RequiresRecreation value of Always has the most impact, followed by Conditionally, and then Never.
     */
    Replacement?: Replacement;
    /**
     * For the Modify action, indicates which resource attribute is triggering this update, such as a change in the resource attribute's Metadata, Properties, or Tags.
     */
    Scope?: Scope;
    /**
     * For the Modify action, a list of ResourceChangeDetail structures that describes the changes that AWS CloudFormation will make to the resource. 
     */
    Details?: ResourceChangeDetails;
  }
  export interface ResourceChangeDetail {
    /**
     * A ResourceTargetDefinition structure that describes the field that AWS CloudFormation will change and whether the resource will be recreated.
     */
    Target?: ResourceTargetDefinition;
    /**
     * Indicates whether AWS CloudFormation can determine the target value, and whether the target value will change before you execute a change set. For Static evaluations, AWS CloudFormation can determine that the target value will change, and its value. For example, if you directly modify the InstanceType property of an EC2 instance, AWS CloudFormation knows that this property value will change, and its value, so this is a Static evaluation. For Dynamic evaluations, cannot determine the target value because it depends on the result of an intrinsic function, such as a Ref or Fn::GetAtt intrinsic function, when the stack is updated. For example, if your template includes a reference to a resource that is conditionally recreated, the value of the reference (the physical ID of the resource) might change, depending on if the resource is recreated. If the resource is recreated, it will have a new physical ID, so all references to that resource will also be updated.
     */
    Evaluation?: EvaluationType;
    /**
     * The group to which the CausingEntity value belongs. There are five entity groups:    ResourceReference entities are Ref intrinsic functions that refer to resources in the template, such as { "Ref" : "MyEC2InstanceResource" }.    ParameterReference entities are Ref intrinsic functions that get template parameter values, such as { "Ref" : "MyPasswordParameter" }.    ResourceAttribute entities are Fn::GetAtt intrinsic functions that get resource attribute values, such as { "Fn::GetAtt" : [ "MyEC2InstanceResource", "PublicDnsName" ] }.    DirectModification entities are changes that are made directly to the template.    Automatic entities are AWS::CloudFormation::Stack resource types, which are also known as nested stacks. If you made no changes to the AWS::CloudFormation::Stack resource, AWS CloudFormation sets the ChangeSource to Automatic because the nested stack's template might have changed. Changes to a nested stack's template aren't visible to AWS CloudFormation until you run an update on the parent stack.  
     */
    ChangeSource?: ChangeSource;
    /**
     * The identity of the entity that triggered this change. This entity is a member of the group that is specified by the ChangeSource field. For example, if you modified the value of the KeyPairName parameter, the CausingEntity is the name of the parameter (KeyPairName). If the ChangeSource value is DirectModification, no value is given for CausingEntity.
     */
    CausingEntity?: CausingEntity;
  }
  export type ResourceChangeDetails = ResourceChangeDetail[];
  export type ResourceProperties = string;
  export type ResourceSignalStatus = "SUCCESS"|"FAILURE"|string;
  export type ResourceSignalUniqueId = string;
  export type ResourceStatus = "CREATE_IN_PROGRESS"|"CREATE_FAILED"|"CREATE_COMPLETE"|"DELETE_IN_PROGRESS"|"DELETE_FAILED"|"DELETE_COMPLETE"|"DELETE_SKIPPED"|"UPDATE_IN_PROGRESS"|"UPDATE_FAILED"|"UPDATE_COMPLETE"|string;
  export type ResourceStatusReason = string;
  export interface ResourceTargetDefinition {
    /**
     * Indicates which resource attribute is triggering this update, such as a change in the resource attribute's Metadata, Properties, or Tags.
     */
    Attribute?: ResourceAttribute;
    /**
     * If the Attribute value is Properties, the name of the property. For all other attributes, the value is null.
     */
    Name?: PropertyName;
    /**
     * If the Attribute value is Properties, indicates whether a change to this property causes the resource to be recreated. The value can be Never, Always, or Conditionally. To determine the conditions for a Conditionally recreation, see the update behavior for that property in the AWS CloudFormation User Guide.
     */
    RequiresRecreation?: RequiresRecreation;
  }
  export type ResourceToSkip = string;
  export type ResourceType = string;
  export type ResourceTypes = ResourceType[];
  export type ResourcesToSkip = ResourceToSkip[];
  export type RetainResources = LogicalResourceId[];
  export type RoleARN = string;
  export type Scope = ResourceAttribute[];
  export interface SetStackPolicyInput {
    /**
     * The name or unique stack ID that you want to associate a policy with.
     */
    StackName: StackName;
    /**
     * Structure containing the stack policy body. For more information, go to  Prevent Updates to Stack Resources in the AWS CloudFormation User Guide. You can specify either the StackPolicyBody or the StackPolicyURL parameter, but not both.
     */
    StackPolicyBody?: StackPolicyBody;
    /**
     * Location of a file containing the stack policy. The URL must point to a policy (maximum size: 16 KB) located in an S3 bucket in the same region as the stack. You can specify either the StackPolicyBody or the StackPolicyURL parameter, but not both.
     */
    StackPolicyURL?: StackPolicyURL;
  }
  export interface SignalResourceInput {
    /**
     * The stack name or unique stack ID that includes the resource that you want to signal.
     */
    StackName: StackNameOrId;
    /**
     * The logical ID of the resource that you want to signal. The logical ID is the name of the resource that given in the template.
     */
    LogicalResourceId: LogicalResourceId;
    /**
     * A unique ID of the signal. When you signal Amazon EC2 instances or Auto Scaling groups, specify the instance ID that you are signaling as the unique ID. If you send multiple signals to a single resource (such as signaling a wait condition), each signal requires a different unique ID.
     */
    UniqueId: ResourceSignalUniqueId;
    /**
     * The status of the signal, which is either success or failure. A failure signal causes AWS CloudFormation to immediately fail the stack creation or update.
     */
    Status: ResourceSignalStatus;
  }
  export interface Stack {
    /**
     * Unique identifier of the stack.
     */
    StackId?: StackId;
    /**
     * The name associated with the stack.
     */
    StackName: StackName;
    /**
     * The unique ID of the change set.
     */
    ChangeSetId?: ChangeSetId;
    /**
     * A user-defined description associated with the stack.
     */
    Description?: Description;
    /**
     * A list of Parameter structures.
     */
    Parameters?: Parameters;
    /**
     * The time at which the stack was created.
     */
    CreationTime: CreationTime;
    /**
     * The time the stack was last updated. This field will only be returned if the stack has been updated at least once.
     */
    LastUpdatedTime?: LastUpdatedTime;
    /**
     * Current status of the stack.
     */
    StackStatus: StackStatus;
    /**
     * Success/failure message associated with the stack status.
     */
    StackStatusReason?: StackStatusReason;
    /**
     * Boolean to enable or disable rollback on stack creation failures:    true: disable rollback    false: enable rollback  
     */
    DisableRollback?: DisableRollback;
    /**
     * SNS topic ARNs to which stack related events are published.
     */
    NotificationARNs?: NotificationARNs;
    /**
     * The amount of time within which stack creation should complete.
     */
    TimeoutInMinutes?: TimeoutMinutes;
    /**
     * The capabilities allowed in the stack.
     */
    Capabilities?: Capabilities;
    /**
     * A list of output structures.
     */
    Outputs?: Outputs;
    /**
     * The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that is associated with the stack. During a stack operation, AWS CloudFormation uses this role's credentials to make calls on your behalf.
     */
    RoleARN?: RoleARN;
    /**
     * A list of Tags that specify information about the stack.
     */
    Tags?: Tags;
  }
  export interface StackEvent {
    /**
     * The unique ID name of the instance of the stack.
     */
    StackId: StackId;
    /**
     * The unique ID of this event.
     */
    EventId: EventId;
    /**
     * The name associated with a stack.
     */
    StackName: StackName;
    /**
     * The logical name of the resource specified in the template.
     */
    LogicalResourceId?: LogicalResourceId;
    /**
     * The name or unique identifier associated with the physical instance of the resource.
     */
    PhysicalResourceId?: PhysicalResourceId;
    /**
     * Type of resource. (For more information, go to  AWS Resource Types Reference in the AWS CloudFormation User Guide.)
     */
    ResourceType?: ResourceType;
    /**
     * Time the status was updated.
     */
    Timestamp: Timestamp;
    /**
     * Current status of the resource.
     */
    ResourceStatus?: ResourceStatus;
    /**
     * Success/failure message associated with the resource.
     */
    ResourceStatusReason?: ResourceStatusReason;
    /**
     * BLOB of the properties used to create the resource.
     */
    ResourceProperties?: ResourceProperties;
  }
  export type StackEvents = StackEvent[];
  export type StackId = string;
  export type StackName = string;
  export type StackNameOrId = string;
  export type StackPolicyBody = string;
  export type StackPolicyDuringUpdateBody = string;
  export type StackPolicyDuringUpdateURL = string;
  export type StackPolicyURL = string;
  export interface StackResource {
    /**
     * The name associated with the stack.
     */
    StackName?: StackName;
    /**
     * Unique identifier of the stack.
     */
    StackId?: StackId;
    /**
     * The logical name of the resource specified in the template.
     */
    LogicalResourceId: LogicalResourceId;
    /**
     * The name or unique identifier that corresponds to a physical instance ID of a resource supported by AWS CloudFormation.
     */
    PhysicalResourceId?: PhysicalResourceId;
    /**
     * Type of resource. (For more information, go to  AWS Resource Types Reference in the AWS CloudFormation User Guide.)
     */
    ResourceType: ResourceType;
    /**
     * Time the status was updated.
     */
    Timestamp: Timestamp;
    /**
     * Current status of the resource.
     */
    ResourceStatus: ResourceStatus;
    /**
     * Success/failure message associated with the resource.
     */
    ResourceStatusReason?: ResourceStatusReason;
    /**
     * User defined description associated with the resource.
     */
    Description?: Description;
  }
  export interface StackResourceDetail {
    /**
     * The name associated with the stack.
     */
    StackName?: StackName;
    /**
     * Unique identifier of the stack.
     */
    StackId?: StackId;
    /**
     * The logical name of the resource specified in the template.
     */
    LogicalResourceId: LogicalResourceId;
    /**
     * The name or unique identifier that corresponds to a physical instance ID of a resource supported by AWS CloudFormation.
     */
    PhysicalResourceId?: PhysicalResourceId;
    /**
     * Type of resource. ((For more information, go to  AWS Resource Types Reference in the AWS CloudFormation User Guide.)
     */
    ResourceType: ResourceType;
    /**
     * Time the status was updated.
     */
    LastUpdatedTimestamp: Timestamp;
    /**
     * Current status of the resource.
     */
    ResourceStatus: ResourceStatus;
    /**
     * Success/failure message associated with the resource.
     */
    ResourceStatusReason?: ResourceStatusReason;
    /**
     * User defined description associated with the resource.
     */
    Description?: Description;
    /**
     * The content of the Metadata attribute declared for the resource. For more information, see Metadata Attribute in the AWS CloudFormation User Guide.
     */
    Metadata?: Metadata;
  }
  export type StackResourceSummaries = StackResourceSummary[];
  export interface StackResourceSummary {
    /**
     * The logical name of the resource specified in the template.
     */
    LogicalResourceId: LogicalResourceId;
    /**
     * The name or unique identifier that corresponds to a physical instance ID of the resource.
     */
    PhysicalResourceId?: PhysicalResourceId;
    /**
     * Type of resource. (For more information, go to  AWS Resource Types Reference in the AWS CloudFormation User Guide.)
     */
    ResourceType: ResourceType;
    /**
     * Time the status was updated.
     */
    LastUpdatedTimestamp: Timestamp;
    /**
     * Current status of the resource.
     */
    ResourceStatus: ResourceStatus;
    /**
     * Success/failure message associated with the resource.
     */
    ResourceStatusReason?: ResourceStatusReason;
  }
  export type StackResources = StackResource[];
  export type StackStatus = "CREATE_IN_PROGRESS"|"CREATE_FAILED"|"CREATE_COMPLETE"|"ROLLBACK_IN_PROGRESS"|"ROLLBACK_FAILED"|"ROLLBACK_COMPLETE"|"DELETE_IN_PROGRESS"|"DELETE_FAILED"|"DELETE_COMPLETE"|"UPDATE_IN_PROGRESS"|"UPDATE_COMPLETE_CLEANUP_IN_PROGRESS"|"UPDATE_COMPLETE"|"UPDATE_ROLLBACK_IN_PROGRESS"|"UPDATE_ROLLBACK_FAILED"|"UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS"|"UPDATE_ROLLBACK_COMPLETE"|"REVIEW_IN_PROGRESS"|string;
  export type StackStatusFilter = StackStatus[];
  export type StackStatusReason = string;
  export type StackSummaries = StackSummary[];
  export interface StackSummary {
    /**
     * Unique stack identifier.
     */
    StackId?: StackId;
    /**
     * The name associated with the stack.
     */
    StackName: StackName;
    /**
     * The template description of the template used to create the stack.
     */
    TemplateDescription?: TemplateDescription;
    /**
     * The time the stack was created.
     */
    CreationTime: CreationTime;
    /**
     * The time the stack was last updated. This field will only be returned if the stack has been updated at least once.
     */
    LastUpdatedTime?: LastUpdatedTime;
    /**
     * The time the stack was deleted.
     */
    DeletionTime?: DeletionTime;
    /**
     * The current status of the stack.
     */
    StackStatus: StackStatus;
    /**
     * Success/Failure message associated with the stack status.
     */
    StackStatusReason?: StackStatusReason;
  }
  export type Stacks = Stack[];
  export type StageList = TemplateStage[];
  export interface Tag {
    /**
     *  Required. A string used to identify this tag. You can specify a maximum of 128 characters for a tag key. Tags owned by Amazon Web Services (AWS) have the reserved prefix: aws:.
     */
    Key?: TagKey;
    /**
     *  Required. A string containing the value for this tag. You can specify a maximum of 256 characters for a tag value.
     */
    Value?: TagValue;
  }
  export type TagKey = string;
  export type TagValue = string;
  export type Tags = Tag[];
  export type TemplateBody = string;
  export type TemplateDescription = string;
  export interface TemplateParameter {
    /**
     * The name associated with the parameter.
     */
    ParameterKey?: ParameterKey;
    /**
     * The default value associated with the parameter.
     */
    DefaultValue?: ParameterValue;
    /**
     * Flag indicating whether the parameter should be displayed as plain text in logs and UIs.
     */
    NoEcho?: NoEcho;
    /**
     * User defined description associated with the parameter.
     */
    Description?: Description;
  }
  export type TemplateParameters = TemplateParameter[];
  export type TemplateStage = "Original"|"Processed"|string;
  export type TemplateURL = string;
  export type TimeoutMinutes = number;
  export type Timestamp = Date;
  export type TransformName = string;
  export type TransformsList = TransformName[];
  export interface UpdateStackInput {
    /**
     * The name or unique stack ID of the stack to update.
     */
    StackName: StackName;
    /**
     * Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. (For more information, go to Template Anatomy in the AWS CloudFormation User Guide.) Conditional: You must specify either the TemplateBody or the TemplateURL parameter, but not both.
     */
    TemplateBody?: TemplateBody;
    /**
     * Location of file containing the template body. The URL must point to a template that is located in an Amazon S3 bucket. For more information, go to Template Anatomy in the AWS CloudFormation User Guide. Conditional: You must specify either the TemplateBody or the TemplateURL parameter, but not both.
     */
    TemplateURL?: TemplateURL;
    /**
     * Reuse the existing template that is associated with the stack that you are updating.
     */
    UsePreviousTemplate?: UsePreviousTemplate;
    /**
     * Structure containing the temporary overriding stack policy body. You can specify either the StackPolicyDuringUpdateBody or the StackPolicyDuringUpdateURL parameter, but not both. If you want to update protected resources, specify a temporary overriding stack policy during this update. If you do not specify a stack policy, the current policy that is associated with the stack will be used.
     */
    StackPolicyDuringUpdateBody?: StackPolicyDuringUpdateBody;
    /**
     * Location of a file containing the temporary overriding stack policy. The URL must point to a policy (max size: 16KB) located in an S3 bucket in the same region as the stack. You can specify either the StackPolicyDuringUpdateBody or the StackPolicyDuringUpdateURL parameter, but not both. If you want to update protected resources, specify a temporary overriding stack policy during this update. If you do not specify a stack policy, the current policy that is associated with the stack will be used.
     */
    StackPolicyDuringUpdateURL?: StackPolicyDuringUpdateURL;
    /**
     * A list of Parameter structures that specify input parameters for the stack. For more information, see the Parameter data type.
     */
    Parameters?: Parameters;
    /**
     * A list of values that you must specify before AWS CloudFormation can update certain stacks. Some stack templates might include resources that can affect permissions in your AWS account, for example, by creating new AWS Identity and Access Management (IAM) users. For those stacks, you must explicitly acknowledge their capabilities by specifying this parameter. The only valid values are CAPABILITY_IAM and CAPABILITY_NAMED_IAM. The following resources require you to specify this parameter:  AWS::IAM::AccessKey,  AWS::IAM::Group,  AWS::IAM::InstanceProfile,  AWS::IAM::Policy,  AWS::IAM::Role,  AWS::IAM::User, and  AWS::IAM::UserToGroupAddition. If your stack template contains these resources, we recommend that you review all permissions associated with them and edit their permissions if necessary. If you have IAM resources, you can specify either capability. If you have IAM resources with custom names, you must specify CAPABILITY_NAMED_IAM. If you don't specify this parameter, this action returns an InsufficientCapabilities error. For more information, see Acknowledging IAM Resources in AWS CloudFormation Templates.
     */
    Capabilities?: Capabilities;
    /**
     * The template resource types that you have permissions to work with for this update stack action, such as AWS::EC2::Instance, AWS::EC2::*, or Custom::MyCustomInstance. If the list of resource types doesn't include a resource that you're updating, the stack update fails. By default, AWS CloudFormation grants permissions to all resource types. AWS Identity and Access Management (IAM) uses this parameter for AWS CloudFormation-specific condition keys in IAM policies. For more information, see Controlling Access with AWS Identity and Access Management.
     */
    ResourceTypes?: ResourceTypes;
    /**
     * The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that AWS CloudFormation assumes to update the stack. AWS CloudFormation uses the role's credentials to make calls on your behalf. AWS CloudFormation always uses this role for all future operations on the stack. As long as users have permission to operate on the stack, AWS CloudFormation uses this role even if the users don't have permission to pass it. Ensure that the role grants least privilege. If you don't specify a value, AWS CloudFormation uses the role that was previously associated with the stack. If no role is available, AWS CloudFormation uses a temporary session that is generated from your user credentials.
     */
    RoleARN?: RoleARN;
    /**
     * Structure containing a new stack policy body. You can specify either the StackPolicyBody or the StackPolicyURL parameter, but not both. You might update the stack policy, for example, in order to protect a new resource that you created during a stack update. If you do not specify a stack policy, the current policy that is associated with the stack is unchanged.
     */
    StackPolicyBody?: StackPolicyBody;
    /**
     * Location of a file containing the updated stack policy. The URL must point to a policy (max size: 16KB) located in an S3 bucket in the same region as the stack. You can specify either the StackPolicyBody or the StackPolicyURL parameter, but not both. You might update the stack policy, for example, in order to protect a new resource that you created during a stack update. If you do not specify a stack policy, the current policy that is associated with the stack is unchanged.
     */
    StackPolicyURL?: StackPolicyURL;
    /**
     * Amazon Simple Notification Service topic Amazon Resource Names (ARNs) that AWS CloudFormation associates with the stack. Specify an empty list to remove all notification topics.
     */
    NotificationARNs?: NotificationARNs;
    /**
     * Key-value pairs to associate with this stack. AWS CloudFormation also propagates these tags to supported resources in the stack. You can specify a maximum number of 10 tags. If you don't specify this parameter, AWS CloudFormation doesn't modify the stack's tags. If you specify an empty value, AWS CloudFormation removes all associated tags.
     */
    Tags?: Tags;
  }
  export interface UpdateStackOutput {
    /**
     * Unique identifier of the stack.
     */
    StackId?: StackId;
  }
  export type Url = string;
  export type UsePreviousTemplate = boolean;
  export type UsePreviousValue = boolean;
  export interface ValidateTemplateInput {
    /**
     * Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. For more information, go to Template Anatomy in the AWS CloudFormation User Guide. Conditional: You must pass TemplateURL or TemplateBody. If both are passed, only TemplateBody is used.
     */
    TemplateBody?: TemplateBody;
    /**
     * Location of file containing the template body. The URL must point to a template (max size: 460,800 bytes) that is located in an Amazon S3 bucket. For more information, go to Template Anatomy in the AWS CloudFormation User Guide. Conditional: You must pass TemplateURL or TemplateBody. If both are passed, only TemplateBody is used.
     */
    TemplateURL?: TemplateURL;
  }
  export interface ValidateTemplateOutput {
    /**
     * A list of TemplateParameter structures.
     */
    Parameters?: TemplateParameters;
    /**
     * The description found within the template.
     */
    Description?: Description;
    /**
     * The capabilities found within the template. If your template contains IAM resources, you must specify the CAPABILITY_IAM or CAPABILITY_NAMED_IAM value for this parameter when you use the CreateStack or UpdateStack actions with your template; otherwise, those actions return an InsufficientCapabilities error. For more information, see Acknowledging IAM Resources in AWS CloudFormation Templates.
     */
    Capabilities?: Capabilities;
    /**
     * The list of resources that generated the values in the Capabilities response element.
     */
    CapabilitiesReason?: CapabilitiesReason;
    /**
     * A list of the transforms that are declared in the template.
     */
    DeclaredTransforms?: TransformsList;
  }
  export type Version = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2010-05-15"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
}
export = CloudFormation;
