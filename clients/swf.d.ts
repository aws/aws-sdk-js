///<reference types="node" />
import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
declare class SWF extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: SWF.Types.ClientConfiguration)
  config: Config & SWF.Types.ClientConfiguration;
  /**
   * Returns the number of closed workflow executions within the given domain that meet the specified filtering criteria. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys.  tagFilter.tag: String constraint. The key is swf:tagFilter.tag. typeFilter.name: String constraint. The key is swf:typeFilter.name. typeFilter.version: String constraint. The key is swf:typeFilter.version.    If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  countClosedWorkflowExecutions(params: SWF.Types.CountClosedWorkflowExecutionsInput, callback?: (err: AWSError, data: SWF.Types.WorkflowExecutionCount) => void): Request<SWF.Types.WorkflowExecutionCount, AWSError>;
  /**
   * Returns the number of closed workflow executions within the given domain that meet the specified filtering criteria. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys.  tagFilter.tag: String constraint. The key is swf:tagFilter.tag. typeFilter.name: String constraint. The key is swf:typeFilter.name. typeFilter.version: String constraint. The key is swf:typeFilter.version.    If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  countClosedWorkflowExecutions(callback?: (err: AWSError, data: SWF.Types.WorkflowExecutionCount) => void): Request<SWF.Types.WorkflowExecutionCount, AWSError>;
  /**
   * Returns the number of open workflow executions within the given domain that meet the specified filtering criteria. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys.  tagFilter.tag: String constraint. The key is swf:tagFilter.tag. typeFilter.name: String constraint. The key is swf:typeFilter.name. typeFilter.version: String constraint. The key is swf:typeFilter.version.    If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  countOpenWorkflowExecutions(params: SWF.Types.CountOpenWorkflowExecutionsInput, callback?: (err: AWSError, data: SWF.Types.WorkflowExecutionCount) => void): Request<SWF.Types.WorkflowExecutionCount, AWSError>;
  /**
   * Returns the number of open workflow executions within the given domain that meet the specified filtering criteria. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys.  tagFilter.tag: String constraint. The key is swf:tagFilter.tag. typeFilter.name: String constraint. The key is swf:typeFilter.name. typeFilter.version: String constraint. The key is swf:typeFilter.version.    If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  countOpenWorkflowExecutions(callback?: (err: AWSError, data: SWF.Types.WorkflowExecutionCount) => void): Request<SWF.Types.WorkflowExecutionCount, AWSError>;
  /**
   * Returns the estimated number of activity tasks in the specified task list. The count returned is an approximation and is not guaranteed to be exact. If you specify a task list that no activity task was ever scheduled in then 0 will be returned. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the taskList.name parameter by using a Condition element with the swf:taskList.name key to allow the action to access only certain task lists.  If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  countPendingActivityTasks(params: SWF.Types.CountPendingActivityTasksInput, callback?: (err: AWSError, data: SWF.Types.PendingTaskCount) => void): Request<SWF.Types.PendingTaskCount, AWSError>;
  /**
   * Returns the estimated number of activity tasks in the specified task list. The count returned is an approximation and is not guaranteed to be exact. If you specify a task list that no activity task was ever scheduled in then 0 will be returned. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the taskList.name parameter by using a Condition element with the swf:taskList.name key to allow the action to access only certain task lists.  If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  countPendingActivityTasks(callback?: (err: AWSError, data: SWF.Types.PendingTaskCount) => void): Request<SWF.Types.PendingTaskCount, AWSError>;
  /**
   * Returns the estimated number of decision tasks in the specified task list. The count returned is an approximation and is not guaranteed to be exact. If you specify a task list that no decision task was ever scheduled in then 0 will be returned. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the taskList.name parameter by using a Condition element with the swf:taskList.name key to allow the action to access only certain task lists.  If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  countPendingDecisionTasks(params: SWF.Types.CountPendingDecisionTasksInput, callback?: (err: AWSError, data: SWF.Types.PendingTaskCount) => void): Request<SWF.Types.PendingTaskCount, AWSError>;
  /**
   * Returns the estimated number of decision tasks in the specified task list. The count returned is an approximation and is not guaranteed to be exact. If you specify a task list that no decision task was ever scheduled in then 0 will be returned. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the taskList.name parameter by using a Condition element with the swf:taskList.name key to allow the action to access only certain task lists.  If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  countPendingDecisionTasks(callback?: (err: AWSError, data: SWF.Types.PendingTaskCount) => void): Request<SWF.Types.PendingTaskCount, AWSError>;
  /**
   * Deprecates the specified activity type. After an activity type has been deprecated, you cannot create new tasks of that activity type. Tasks of this type that were scheduled before the type was deprecated will continue to run. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys.  activityType.name: String constraint. The key is swf:activityType.name. activityType.version: String constraint. The key is swf:activityType.version.    If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  deprecateActivityType(params: SWF.Types.DeprecateActivityTypeInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deprecates the specified activity type. After an activity type has been deprecated, you cannot create new tasks of that activity type. Tasks of this type that were scheduled before the type was deprecated will continue to run. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys.  activityType.name: String constraint. The key is swf:activityType.name. activityType.version: String constraint. The key is swf:activityType.version.    If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  deprecateActivityType(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deprecates the specified domain. After a domain has been deprecated it cannot be used to create new workflow executions or register new types. However, you can still use visibility actions on this domain. Deprecating a domain also deprecates all activity and workflow types registered in the domain. Executions that were started before the domain was deprecated will continue to run. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters.  If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  deprecateDomain(params: SWF.Types.DeprecateDomainInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deprecates the specified domain. After a domain has been deprecated it cannot be used to create new workflow executions or register new types. However, you can still use visibility actions on this domain. Deprecating a domain also deprecates all activity and workflow types registered in the domain. Executions that were started before the domain was deprecated will continue to run. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters.  If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  deprecateDomain(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deprecates the specified workflow type. After a workflow type has been deprecated, you cannot create new executions of that type. Executions that were started before the type was deprecated will continue to run. A deprecated workflow type may still be used when calling visibility actions. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys.  workflowType.name: String constraint. The key is swf:workflowType.name. workflowType.version: String constraint. The key is swf:workflowType.version.    If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  deprecateWorkflowType(params: SWF.Types.DeprecateWorkflowTypeInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deprecates the specified workflow type. After a workflow type has been deprecated, you cannot create new executions of that type. Executions that were started before the type was deprecated will continue to run. A deprecated workflow type may still be used when calling visibility actions. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys.  workflowType.name: String constraint. The key is swf:workflowType.name. workflowType.version: String constraint. The key is swf:workflowType.version.    If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  deprecateWorkflowType(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Returns information about the specified activity type. This includes configuration settings provided when the type was registered and other general information about the type. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys.  activityType.name: String constraint. The key is swf:activityType.name. activityType.version: String constraint. The key is swf:activityType.version.    If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  describeActivityType(params: SWF.Types.DescribeActivityTypeInput, callback?: (err: AWSError, data: SWF.Types.ActivityTypeDetail) => void): Request<SWF.Types.ActivityTypeDetail, AWSError>;
  /**
   * Returns information about the specified activity type. This includes configuration settings provided when the type was registered and other general information about the type. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys.  activityType.name: String constraint. The key is swf:activityType.name. activityType.version: String constraint. The key is swf:activityType.version.    If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  describeActivityType(callback?: (err: AWSError, data: SWF.Types.ActivityTypeDetail) => void): Request<SWF.Types.ActivityTypeDetail, AWSError>;
  /**
   * Returns information about the specified domain, including description and status. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters.  If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  describeDomain(params: SWF.Types.DescribeDomainInput, callback?: (err: AWSError, data: SWF.Types.DomainDetail) => void): Request<SWF.Types.DomainDetail, AWSError>;
  /**
   * Returns information about the specified domain, including description and status. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters.  If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  describeDomain(callback?: (err: AWSError, data: SWF.Types.DomainDetail) => void): Request<SWF.Types.DomainDetail, AWSError>;
  /**
   * Returns information about the specified workflow execution including its type and some statistics. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters.  If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  describeWorkflowExecution(params: SWF.Types.DescribeWorkflowExecutionInput, callback?: (err: AWSError, data: SWF.Types.WorkflowExecutionDetail) => void): Request<SWF.Types.WorkflowExecutionDetail, AWSError>;
  /**
   * Returns information about the specified workflow execution including its type and some statistics. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters.  If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  describeWorkflowExecution(callback?: (err: AWSError, data: SWF.Types.WorkflowExecutionDetail) => void): Request<SWF.Types.WorkflowExecutionDetail, AWSError>;
  /**
   * Returns information about the specified workflow type. This includes configuration settings specified when the type was registered and other information such as creation date, current status, and so on. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys.  workflowType.name: String constraint. The key is swf:workflowType.name. workflowType.version: String constraint. The key is swf:workflowType.version.    If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  describeWorkflowType(params: SWF.Types.DescribeWorkflowTypeInput, callback?: (err: AWSError, data: SWF.Types.WorkflowTypeDetail) => void): Request<SWF.Types.WorkflowTypeDetail, AWSError>;
  /**
   * Returns information about the specified workflow type. This includes configuration settings specified when the type was registered and other information such as creation date, current status, and so on. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys.  workflowType.name: String constraint. The key is swf:workflowType.name. workflowType.version: String constraint. The key is swf:workflowType.version.    If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  describeWorkflowType(callback?: (err: AWSError, data: SWF.Types.WorkflowTypeDetail) => void): Request<SWF.Types.WorkflowTypeDetail, AWSError>;
  /**
   * Returns the history of the specified workflow execution. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters.  If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  getWorkflowExecutionHistory(params: SWF.Types.GetWorkflowExecutionHistoryInput, callback?: (err: AWSError, data: SWF.Types.History) => void): Request<SWF.Types.History, AWSError>;
  /**
   * Returns the history of the specified workflow execution. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters.  If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  getWorkflowExecutionHistory(callback?: (err: AWSError, data: SWF.Types.History) => void): Request<SWF.Types.History, AWSError>;
  /**
   * Returns information about all activities registered in the specified domain that match the specified name and registration status. The result includes information like creation date, current status of the activity, etc. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters.  If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  listActivityTypes(params: SWF.Types.ListActivityTypesInput, callback?: (err: AWSError, data: SWF.Types.ActivityTypeInfos) => void): Request<SWF.Types.ActivityTypeInfos, AWSError>;
  /**
   * Returns information about all activities registered in the specified domain that match the specified name and registration status. The result includes information like creation date, current status of the activity, etc. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters.  If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  listActivityTypes(callback?: (err: AWSError, data: SWF.Types.ActivityTypeInfos) => void): Request<SWF.Types.ActivityTypeInfos, AWSError>;
  /**
   * Returns a list of closed workflow executions in the specified domain that meet the filtering criteria. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys.  tagFilter.tag: String constraint. The key is swf:tagFilter.tag. typeFilter.name: String constraint. The key is swf:typeFilter.name. typeFilter.version: String constraint. The key is swf:typeFilter.version.    If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  listClosedWorkflowExecutions(params: SWF.Types.ListClosedWorkflowExecutionsInput, callback?: (err: AWSError, data: SWF.Types.WorkflowExecutionInfos) => void): Request<SWF.Types.WorkflowExecutionInfos, AWSError>;
  /**
   * Returns a list of closed workflow executions in the specified domain that meet the filtering criteria. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call. This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys.  tagFilter.tag: String constraint. The key is swf:tagFilter.tag. typeFilter.name: String constraint. The key is swf:typeFilter.name. typeFilter.version: String constraint. The key is swf:typeFilter.version.    If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  listClosedWorkflowExecutions(callback?: (err: AWSError, data: SWF.Types.WorkflowExecutionInfos) => void): Request<SWF.Types.WorkflowExecutionInfos, AWSError>;
  /**
   * Returns the list of domains registered in the account. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call.  This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. The element must be set to arn:aws:swf::AccountID:domain/*, where AccountID is the account ID, with no dashes. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters.  If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  listDomains(params: SWF.Types.ListDomainsInput, callback?: (err: AWSError, data: SWF.Types.DomainInfos) => void): Request<SWF.Types.DomainInfos, AWSError>;
  /**
   * Returns the list of domains registered in the account. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call.  This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. The element must be set to arn:aws:swf::AccountID:domain/*, where AccountID is the account ID, with no dashes. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters.  If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  listDomains(callback?: (err: AWSError, data: SWF.Types.DomainInfos) => void): Request<SWF.Types.DomainInfos, AWSError>;
  /**
   * Returns a list of open workflow executions in the specified domain that meet the filtering criteria. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call.  This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys.  tagFilter.tag: String constraint. The key is swf:tagFilter.tag. typeFilter.name: String constraint. The key is swf:typeFilter.name. typeFilter.version: String constraint. The key is swf:typeFilter.version.    If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  listOpenWorkflowExecutions(params: SWF.Types.ListOpenWorkflowExecutionsInput, callback?: (err: AWSError, data: SWF.Types.WorkflowExecutionInfos) => void): Request<SWF.Types.WorkflowExecutionInfos, AWSError>;
  /**
   * Returns a list of open workflow executions in the specified domain that meet the filtering criteria. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call.  This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys.  tagFilter.tag: String constraint. The key is swf:tagFilter.tag. typeFilter.name: String constraint. The key is swf:typeFilter.name. typeFilter.version: String constraint. The key is swf:typeFilter.version.    If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  listOpenWorkflowExecutions(callback?: (err: AWSError, data: SWF.Types.WorkflowExecutionInfos) => void): Request<SWF.Types.WorkflowExecutionInfos, AWSError>;
  /**
   * Returns information about workflow types in the specified domain. The results may be split into multiple pages that can be retrieved by making the call repeatedly. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters.  If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  listWorkflowTypes(params: SWF.Types.ListWorkflowTypesInput, callback?: (err: AWSError, data: SWF.Types.WorkflowTypeInfos) => void): Request<SWF.Types.WorkflowTypeInfos, AWSError>;
  /**
   * Returns information about workflow types in the specified domain. The results may be split into multiple pages that can be retrieved by making the call repeatedly. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters.  If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  listWorkflowTypes(callback?: (err: AWSError, data: SWF.Types.WorkflowTypeInfos) => void): Request<SWF.Types.WorkflowTypeInfos, AWSError>;
  /**
   * Used by workers to get an ActivityTask from the specified activity taskList. This initiates a long poll, where the service holds the HTTP connection open and responds as soon as a task becomes available. The maximum time the service holds on to the request before responding is 60 seconds. If no task is available within 60 seconds, the poll will return an empty result. An empty result, in this context, means that an ActivityTask is returned, but that the value of taskToken is an empty string. If a task is returned, the worker should use its type to identify and process it correctly. Workers should set their client side socket timeout to at least 70 seconds (10 seconds higher than the maximum time service may hold the poll request). Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the taskList.name parameter by using a Condition element with the swf:taskList.name key to allow the action to access only certain task lists.  If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  pollForActivityTask(params: SWF.Types.PollForActivityTaskInput, callback?: (err: AWSError, data: SWF.Types.ActivityTask) => void): Request<SWF.Types.ActivityTask, AWSError>;
  /**
   * Used by workers to get an ActivityTask from the specified activity taskList. This initiates a long poll, where the service holds the HTTP connection open and responds as soon as a task becomes available. The maximum time the service holds on to the request before responding is 60 seconds. If no task is available within 60 seconds, the poll will return an empty result. An empty result, in this context, means that an ActivityTask is returned, but that the value of taskToken is an empty string. If a task is returned, the worker should use its type to identify and process it correctly. Workers should set their client side socket timeout to at least 70 seconds (10 seconds higher than the maximum time service may hold the poll request). Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the taskList.name parameter by using a Condition element with the swf:taskList.name key to allow the action to access only certain task lists.  If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  pollForActivityTask(callback?: (err: AWSError, data: SWF.Types.ActivityTask) => void): Request<SWF.Types.ActivityTask, AWSError>;
  /**
   * Used by deciders to get a DecisionTask from the specified decision taskList. A decision task may be returned for any open workflow execution that is using the specified task list. The task includes a paginated view of the history of the workflow execution. The decider should use the workflow type and the history to determine how to properly handle the task. This action initiates a long poll, where the service holds the HTTP connection open and responds as soon a task becomes available. If no decision task is available in the specified task list before the timeout of 60 seconds expires, an empty result is returned. An empty result, in this context, means that a DecisionTask is returned, but that the value of taskToken is an empty string. Deciders should set their client-side socket timeout to at least 70 seconds (10 seconds higher than the timeout). Because the number of workflow history events for a single workflow execution might be very large, the result returned might be split up across a number of pages. To retrieve subsequent pages, make additional calls to PollForDecisionTask using the nextPageToken returned by the initial call. Note that you do not call GetWorkflowExecutionHistory with this nextPageToken. Instead, call PollForDecisionTask again. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the taskList.name parameter by using a Condition element with the swf:taskList.name key to allow the action to access only certain task lists.  If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  pollForDecisionTask(params: SWF.Types.PollForDecisionTaskInput, callback?: (err: AWSError, data: SWF.Types.DecisionTask) => void): Request<SWF.Types.DecisionTask, AWSError>;
  /**
   * Used by deciders to get a DecisionTask from the specified decision taskList. A decision task may be returned for any open workflow execution that is using the specified task list. The task includes a paginated view of the history of the workflow execution. The decider should use the workflow type and the history to determine how to properly handle the task. This action initiates a long poll, where the service holds the HTTP connection open and responds as soon a task becomes available. If no decision task is available in the specified task list before the timeout of 60 seconds expires, an empty result is returned. An empty result, in this context, means that a DecisionTask is returned, but that the value of taskToken is an empty string. Deciders should set their client-side socket timeout to at least 70 seconds (10 seconds higher than the timeout). Because the number of workflow history events for a single workflow execution might be very large, the result returned might be split up across a number of pages. To retrieve subsequent pages, make additional calls to PollForDecisionTask using the nextPageToken returned by the initial call. Note that you do not call GetWorkflowExecutionHistory with this nextPageToken. Instead, call PollForDecisionTask again. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the taskList.name parameter by using a Condition element with the swf:taskList.name key to allow the action to access only certain task lists.  If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  pollForDecisionTask(callback?: (err: AWSError, data: SWF.Types.DecisionTask) => void): Request<SWF.Types.DecisionTask, AWSError>;
  /**
   * Used by activity workers to report to the service that the ActivityTask represented by the specified taskToken is still making progress. The worker can also (optionally) specify details of the progress, for example percent complete, using the details parameter. This action can also be used by the worker as a mechanism to check if cancellation is being requested for the activity task. If a cancellation is being attempted for the specified task, then the boolean cancelRequested flag returned by the service is set to true. This action resets the taskHeartbeatTimeout clock. The taskHeartbeatTimeout is specified in RegisterActivityType. This action does not in itself create an event in the workflow execution history. However, if the task times out, the workflow execution history will contain a ActivityTaskTimedOut event that contains the information from the last heartbeat generated by the activity worker. The taskStartToCloseTimeout of an activity type is the maximum duration of an activity task, regardless of the number of RecordActivityTaskHeartbeat requests received. The taskStartToCloseTimeout is also specified in RegisterActivityType. This operation is only useful for long-lived activities to report liveliness of the task and to determine if a cancellation is being attempted.  If the cancelRequested flag returns true, a cancellation is being attempted. If the worker can cancel the activity, it should respond with RespondActivityTaskCanceled. Otherwise, it should ignore the cancellation request. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters.  If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  recordActivityTaskHeartbeat(params: SWF.Types.RecordActivityTaskHeartbeatInput, callback?: (err: AWSError, data: SWF.Types.ActivityTaskStatus) => void): Request<SWF.Types.ActivityTaskStatus, AWSError>;
  /**
   * Used by activity workers to report to the service that the ActivityTask represented by the specified taskToken is still making progress. The worker can also (optionally) specify details of the progress, for example percent complete, using the details parameter. This action can also be used by the worker as a mechanism to check if cancellation is being requested for the activity task. If a cancellation is being attempted for the specified task, then the boolean cancelRequested flag returned by the service is set to true. This action resets the taskHeartbeatTimeout clock. The taskHeartbeatTimeout is specified in RegisterActivityType. This action does not in itself create an event in the workflow execution history. However, if the task times out, the workflow execution history will contain a ActivityTaskTimedOut event that contains the information from the last heartbeat generated by the activity worker. The taskStartToCloseTimeout of an activity type is the maximum duration of an activity task, regardless of the number of RecordActivityTaskHeartbeat requests received. The taskStartToCloseTimeout is also specified in RegisterActivityType. This operation is only useful for long-lived activities to report liveliness of the task and to determine if a cancellation is being attempted.  If the cancelRequested flag returns true, a cancellation is being attempted. If the worker can cancel the activity, it should respond with RespondActivityTaskCanceled. Otherwise, it should ignore the cancellation request. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters.  If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  recordActivityTaskHeartbeat(callback?: (err: AWSError, data: SWF.Types.ActivityTaskStatus) => void): Request<SWF.Types.ActivityTaskStatus, AWSError>;
  /**
   * Registers a new activity type along with its configuration settings in the specified domain. A TypeAlreadyExists fault is returned if the type already exists in the domain. You cannot change any configuration settings of the type after its registration, and it must be registered as a new version. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys.   defaultTaskList.name: String constraint. The key is swf:defaultTaskList.name.  name: String constraint. The key is swf:name.  version: String constraint. The key is swf:version.    If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  registerActivityType(params: SWF.Types.RegisterActivityTypeInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Registers a new activity type along with its configuration settings in the specified domain. A TypeAlreadyExists fault is returned if the type already exists in the domain. You cannot change any configuration settings of the type after its registration, and it must be registered as a new version. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys.   defaultTaskList.name: String constraint. The key is swf:defaultTaskList.name.  name: String constraint. The key is swf:name.  version: String constraint. The key is swf:version.    If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  registerActivityType(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Registers a new domain. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  You cannot use an IAM policy to control domain access for this action. The name of the domain being registered is available as the resource of this action. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters.  If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  registerDomain(params: SWF.Types.RegisterDomainInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Registers a new domain. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  You cannot use an IAM policy to control domain access for this action. The name of the domain being registered is available as the resource of this action. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters.  If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  registerDomain(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Registers a new workflow type and its configuration settings in the specified domain. The retention period for the workflow history is set by the RegisterDomain action. If the type already exists, then a TypeAlreadyExists fault is returned. You cannot change the configuration settings of a workflow type once it is registered and it must be registered as a new version. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys.   defaultTaskList.name: String constraint. The key is swf:defaultTaskList.name.  name: String constraint. The key is swf:name.  version: String constraint. The key is swf:version.    If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  registerWorkflowType(params: SWF.Types.RegisterWorkflowTypeInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Registers a new workflow type and its configuration settings in the specified domain. The retention period for the workflow history is set by the RegisterDomain action. If the type already exists, then a TypeAlreadyExists fault is returned. You cannot change the configuration settings of a workflow type once it is registered and it must be registered as a new version. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys.   defaultTaskList.name: String constraint. The key is swf:defaultTaskList.name.  name: String constraint. The key is swf:name.  version: String constraint. The key is swf:version.    If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  registerWorkflowType(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Records a WorkflowExecutionCancelRequested event in the currently running workflow execution identified by the given domain, workflowId, and runId. This logically requests the cancellation of the workflow execution as a whole. It is up to the decider to take appropriate actions when it receives an execution history with this event. If the runId is not specified, the WorkflowExecutionCancelRequested event is recorded in the history of the current open workflow execution with the specified workflowId in the domain. Because this action allows the workflow to properly clean up and gracefully close, it should be used instead of TerminateWorkflowExecution when possible. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters.  If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  requestCancelWorkflowExecution(params: SWF.Types.RequestCancelWorkflowExecutionInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Records a WorkflowExecutionCancelRequested event in the currently running workflow execution identified by the given domain, workflowId, and runId. This logically requests the cancellation of the workflow execution as a whole. It is up to the decider to take appropriate actions when it receives an execution history with this event. If the runId is not specified, the WorkflowExecutionCancelRequested event is recorded in the history of the current open workflow execution with the specified workflowId in the domain. Because this action allows the workflow to properly clean up and gracefully close, it should be used instead of TerminateWorkflowExecution when possible. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters.  If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  requestCancelWorkflowExecution(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Used by workers to tell the service that the ActivityTask identified by the taskToken was successfully canceled. Additional details can be optionally provided using the details argument. These details (if provided) appear in the ActivityTaskCanceled event added to the workflow history. Only use this operation if the canceled flag of a RecordActivityTaskHeartbeat request returns true and if the activity can be safely undone or abandoned. A task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is closed after it has been specified in a call to RespondActivityTaskCompleted, RespondActivityTaskCanceled, RespondActivityTaskFailed, or the task has timed out. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters.  If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  respondActivityTaskCanceled(params: SWF.Types.RespondActivityTaskCanceledInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Used by workers to tell the service that the ActivityTask identified by the taskToken was successfully canceled. Additional details can be optionally provided using the details argument. These details (if provided) appear in the ActivityTaskCanceled event added to the workflow history. Only use this operation if the canceled flag of a RecordActivityTaskHeartbeat request returns true and if the activity can be safely undone or abandoned. A task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is closed after it has been specified in a call to RespondActivityTaskCompleted, RespondActivityTaskCanceled, RespondActivityTaskFailed, or the task has timed out. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters.  If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  respondActivityTaskCanceled(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Used by workers to tell the service that the ActivityTask identified by the taskToken completed successfully with a result (if provided). The result appears in the ActivityTaskCompleted event in the workflow history.  If the requested task does not complete successfully, use RespondActivityTaskFailed instead. If the worker finds that the task is canceled through the canceled flag returned by RecordActivityTaskHeartbeat, it should cancel the task, clean up and then call RespondActivityTaskCanceled. A task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is closed after it has been specified in a call to RespondActivityTaskCompleted, RespondActivityTaskCanceled, RespondActivityTaskFailed, or the task has timed out. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters.  If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  respondActivityTaskCompleted(params: SWF.Types.RespondActivityTaskCompletedInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Used by workers to tell the service that the ActivityTask identified by the taskToken completed successfully with a result (if provided). The result appears in the ActivityTaskCompleted event in the workflow history.  If the requested task does not complete successfully, use RespondActivityTaskFailed instead. If the worker finds that the task is canceled through the canceled flag returned by RecordActivityTaskHeartbeat, it should cancel the task, clean up and then call RespondActivityTaskCanceled. A task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is closed after it has been specified in a call to RespondActivityTaskCompleted, RespondActivityTaskCanceled, RespondActivityTaskFailed, or the task has timed out. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters.  If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  respondActivityTaskCompleted(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Used by workers to tell the service that the ActivityTask identified by the taskToken has failed with reason (if specified). The reason and details appear in the ActivityTaskFailed event added to the workflow history. A task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is closed after it has been specified in a call to RespondActivityTaskCompleted, RespondActivityTaskCanceled, RespondActivityTaskFailed, or the task has timed out. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters.  If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  respondActivityTaskFailed(params: SWF.Types.RespondActivityTaskFailedInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Used by workers to tell the service that the ActivityTask identified by the taskToken has failed with reason (if specified). The reason and details appear in the ActivityTaskFailed event added to the workflow history. A task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is closed after it has been specified in a call to RespondActivityTaskCompleted, RespondActivityTaskCanceled, RespondActivityTaskFailed, or the task has timed out. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters.  If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  respondActivityTaskFailed(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Used by deciders to tell the service that the DecisionTask identified by the taskToken has successfully completed. The decisions argument specifies the list of decisions made while processing the task. A DecisionTaskCompleted event is added to the workflow history. The executionContext specified is attached to the event in the workflow execution history. Access Control If an IAM policy grants permission to use RespondDecisionTaskCompleted, it can express permissions for the list of decisions in the decisions parameter. Each of the decisions has one or more parameters, much like a regular API call. To allow for policies to be as readable as possible, you can express permissions on decisions as if they were actual API calls, including applying conditions to some parameters. For more information, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  respondDecisionTaskCompleted(params: SWF.Types.RespondDecisionTaskCompletedInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Used by deciders to tell the service that the DecisionTask identified by the taskToken has successfully completed. The decisions argument specifies the list of decisions made while processing the task. A DecisionTaskCompleted event is added to the workflow history. The executionContext specified is attached to the event in the workflow execution history. Access Control If an IAM policy grants permission to use RespondDecisionTaskCompleted, it can express permissions for the list of decisions in the decisions parameter. Each of the decisions has one or more parameters, much like a regular API call. To allow for policies to be as readable as possible, you can express permissions on decisions as if they were actual API calls, including applying conditions to some parameters. For more information, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  respondDecisionTaskCompleted(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Records a WorkflowExecutionSignaled event in the workflow execution history and creates a decision task for the workflow execution identified by the given domain, workflowId and runId. The event is recorded with the specified user defined signalName and input (if provided).  If a runId is not specified, then the WorkflowExecutionSignaled event is recorded in the history of the current open workflow with the matching workflowId in the domain.  If the specified workflow execution is not open, this method fails with UnknownResource. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters.  If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  signalWorkflowExecution(params: SWF.Types.SignalWorkflowExecutionInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Records a WorkflowExecutionSignaled event in the workflow execution history and creates a decision task for the workflow execution identified by the given domain, workflowId and runId. The event is recorded with the specified user defined signalName and input (if provided).  If a runId is not specified, then the WorkflowExecutionSignaled event is recorded in the history of the current open workflow with the matching workflowId in the domain.  If the specified workflow execution is not open, this method fails with UnknownResource. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters.  If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  signalWorkflowExecution(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Starts an execution of the workflow type in the specified domain using the provided workflowId and input data. This action returns the newly started workflow execution. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys.   tagList.member.0: The key is swf:tagList.member.0.  tagList.member.1: The key is swf:tagList.member.1.  tagList.member.2: The key is swf:tagList.member.2.  tagList.member.3: The key is swf:tagList.member.3.  tagList.member.4: The key is swf:tagList.member.4. taskList: String constraint. The key is swf:taskList.name. workflowType.name: String constraint. The key is swf:workflowType.name. workflowType.version: String constraint. The key is swf:workflowType.version.    If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  startWorkflowExecution(params: SWF.Types.StartWorkflowExecutionInput, callback?: (err: AWSError, data: SWF.Types.Run) => void): Request<SWF.Types.Run, AWSError>;
  /**
   * Starts an execution of the workflow type in the specified domain using the provided workflowId and input data. This action returns the newly started workflow execution. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. Constrain the following parameters by using a Condition element with the appropriate keys.   tagList.member.0: The key is swf:tagList.member.0.  tagList.member.1: The key is swf:tagList.member.1.  tagList.member.2: The key is swf:tagList.member.2.  tagList.member.3: The key is swf:tagList.member.3.  tagList.member.4: The key is swf:tagList.member.4. taskList: String constraint. The key is swf:taskList.name. workflowType.name: String constraint. The key is swf:workflowType.name. workflowType.version: String constraint. The key is swf:workflowType.version.    If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  startWorkflowExecution(callback?: (err: AWSError, data: SWF.Types.Run) => void): Request<SWF.Types.Run, AWSError>;
  /**
   * Records a WorkflowExecutionTerminated event and forces closure of the workflow execution identified by the given domain, runId, and workflowId. The child policy, registered with the workflow type or specified when starting this execution, is applied to any open child workflow executions of this workflow execution.  If the identified workflow execution was in progress, it is terminated immediately.  If a runId is not specified, then the WorkflowExecutionTerminated event is recorded in the history of the current open workflow with the matching workflowId in the domain.  You should consider using RequestCancelWorkflowExecution action instead because it allows the workflow to gracefully close while TerminateWorkflowExecution does not. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters.  If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  terminateWorkflowExecution(params: SWF.Types.TerminateWorkflowExecutionInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Records a WorkflowExecutionTerminated event and forces closure of the workflow execution identified by the given domain, runId, and workflowId. The child policy, registered with the workflow type or specified when starting this execution, is applied to any open child workflow executions of this workflow execution.  If the identified workflow execution was in progress, it is terminated immediately.  If a runId is not specified, then the WorkflowExecutionTerminated event is recorded in the history of the current open workflow with the matching workflowId in the domain.  You should consider using RequestCancelWorkflowExecution action instead because it allows the workflow to gracefully close while TerminateWorkflowExecution does not. Access Control You can use IAM policies to control this action's access to Amazon SWF resources as follows:  Use a Resource element with the domain name to limit the action to only specified domains. Use an Action element to allow or deny permission to call this action. You cannot use an IAM policy to constrain this action's parameters.  If the caller does not have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's cause parameter will be set to OPERATION_NOT_PERMITTED. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
   */
  terminateWorkflowExecution(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
}
declare namespace SWF.Types {
  export type ActivityId = string;
  export interface ActivityTask {
    /**
     * The opaque string used as a handle on the task. This token is used by workers to communicate progress and response information back to the system about the task.
     */
    taskToken: TaskToken;
    /**
     * The unique ID of the task.
     */
    activityId: ActivityId;
    /**
     * The ID of the ActivityTaskStarted event recorded in the history.
     */
    startedEventId: EventId;
    /**
     * The workflow execution that started this activity task.
     */
    workflowExecution: WorkflowExecution;
    /**
     * The type of this activity task.
     */
    activityType: ActivityType;
    /**
     * The inputs provided when the activity task was scheduled. The form of the input is user defined and should be meaningful to the activity implementation.
     */
    input?: Data;
  }
  export interface ActivityTaskCancelRequestedEventAttributes {
    /**
     * The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in the RequestCancelActivityTask decision for this cancellation request. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    decisionTaskCompletedEventId: EventId;
    /**
     * The unique ID of the task.
     */
    activityId: ActivityId;
  }
  export interface ActivityTaskCanceledEventAttributes {
    /**
     * Details of the cancellation (if any).
     */
    details?: Data;
    /**
     * The ID of the ActivityTaskScheduled event that was recorded when this activity task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    scheduledEventId: EventId;
    /**
     * The ID of the ActivityTaskStarted event recorded when this activity task was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    startedEventId: EventId;
    /**
     * If set, contains the ID of the last ActivityTaskCancelRequested event recorded for this activity task. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    latestCancelRequestedEventId?: EventId;
  }
  export interface ActivityTaskCompletedEventAttributes {
    /**
     * The results of the activity task (if any).
     */
    result?: Data;
    /**
     * The ID of the ActivityTaskScheduled event that was recorded when this activity task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    scheduledEventId: EventId;
    /**
     * The ID of the ActivityTaskStarted event recorded when this activity task was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    startedEventId: EventId;
  }
  export interface ActivityTaskFailedEventAttributes {
    /**
     * The reason provided for the failure (if any).
     */
    reason?: FailureReason;
    /**
     * The details of the failure (if any).
     */
    details?: Data;
    /**
     * The ID of the ActivityTaskScheduled event that was recorded when this activity task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    scheduledEventId: EventId;
    /**
     * The ID of the ActivityTaskStarted event recorded when this activity task was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    startedEventId: EventId;
  }
  export interface ActivityTaskScheduledEventAttributes {
    /**
     * The type of the activity task.
     */
    activityType: ActivityType;
    /**
     * The unique ID of the activity task.
     */
    activityId: ActivityId;
    /**
     * The input provided to the activity task.
     */
    input?: Data;
    /**
     * Optional. Data attached to the event that can be used by the decider in subsequent workflow tasks. This data is not sent to the activity.
     */
    control?: Data;
    /**
     * The maximum amount of time the activity task can wait to be assigned to a worker.
     */
    scheduleToStartTimeout?: DurationInSecondsOptional;
    /**
     * The maximum amount of time for this activity task.
     */
    scheduleToCloseTimeout?: DurationInSecondsOptional;
    /**
     * The maximum amount of time a worker may take to process the activity task.
     */
    startToCloseTimeout?: DurationInSecondsOptional;
    /**
     * The task list in which the activity task has been scheduled.
     */
    taskList: TaskList;
    /**
     * Optional. The priority to assign to the scheduled activity task. If set, this will override any default priority value that was assigned when the activity type was registered. Valid values are integers that range from Java's Integer.MIN_VALUE (-2147483648) to Integer.MAX_VALUE (2147483647). Higher numbers indicate higher priority. For more information about setting task priority, see Setting Task Priority in the Amazon Simple Workflow Developer Guide.
     */
    taskPriority?: TaskPriority;
    /**
     * The ID of the DecisionTaskCompleted event corresponding to the decision that resulted in the scheduling of this activity task. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    decisionTaskCompletedEventId: EventId;
    /**
     * The maximum time before which the worker processing this task must report progress by calling RecordActivityTaskHeartbeat. If the timeout is exceeded, the activity task is automatically timed out. If the worker subsequently attempts to record a heartbeat or return a result, it will be ignored.
     */
    heartbeatTimeout?: DurationInSecondsOptional;
  }
  export interface ActivityTaskStartedEventAttributes {
    /**
     * Identity of the worker that was assigned this task. This aids diagnostics when problems arise. The form of this identity is user defined.
     */
    identity?: Identity;
    /**
     * The ID of the ActivityTaskScheduled event that was recorded when this activity task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    scheduledEventId: EventId;
  }
  export interface ActivityTaskStatus {
    /**
     * Set to true if cancellation of the task is requested.
     */
    cancelRequested: Canceled;
  }
  export interface ActivityTaskTimedOutEventAttributes {
    /**
     * The type of the timeout that caused this event.
     */
    timeoutType: ActivityTaskTimeoutType;
    /**
     * The ID of the ActivityTaskScheduled event that was recorded when this activity task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    scheduledEventId: EventId;
    /**
     * The ID of the ActivityTaskStarted event recorded when this activity task was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    startedEventId: EventId;
    /**
     * Contains the content of the details parameter for the last call made by the activity to RecordActivityTaskHeartbeat.
     */
    details?: LimitedData;
  }
  export type ActivityTaskTimeoutType = "START_TO_CLOSE"|"SCHEDULE_TO_START"|"SCHEDULE_TO_CLOSE"|"HEARTBEAT"|string;
  export interface ActivityType {
    /**
     * The name of this activity. The combination of activity type name and version must be unique within a domain.
     */
    name: Name;
    /**
     * The version of this activity. The combination of activity type name and version must be unique with in a domain.
     */
    version: Version;
  }
  export interface ActivityTypeConfiguration {
    /**
     * Optional. The default maximum duration for tasks of an activity type specified when registering the activity type. You can override this default when scheduling a task through the ScheduleActivityTask decision. The duration is specified in seconds; an integer greater than or equal to 0. The value "NONE" can be used to specify unlimited duration.
     */
    defaultTaskStartToCloseTimeout?: DurationInSecondsOptional;
    /**
     * Optional. The default maximum time, in seconds, before which a worker processing a task must report progress by calling RecordActivityTaskHeartbeat. You can specify this value only when registering an activity type. The registered default value can be overridden when you schedule a task through the ScheduleActivityTask decision. If the activity worker subsequently attempts to record a heartbeat or returns a result, the activity worker receives an UnknownResource fault. In this case, Amazon SWF no longer considers the activity task to be valid; the activity worker should clean up the activity task. The duration is specified in seconds; an integer greater than or equal to 0. The value "NONE" can be used to specify unlimited duration.
     */
    defaultTaskHeartbeatTimeout?: DurationInSecondsOptional;
    /**
     * Optional. The default task list specified for this activity type at registration. This default is used if a task list is not provided when a task is scheduled through the ScheduleActivityTask decision. You can override the default registered task list when scheduling a task through the ScheduleActivityTask decision.
     */
    defaultTaskList?: TaskList;
    /**
     * Optional. The default task priority for tasks of this activity type, specified at registration. If not set, then "0" will be used as the default priority. This default can be overridden when scheduling an activity task. Valid values are integers that range from Java's Integer.MIN_VALUE (-2147483648) to Integer.MAX_VALUE (2147483647). Higher numbers indicate higher priority. For more information about setting task priority, see Setting Task Priority in the Amazon Simple Workflow Developer Guide.
     */
    defaultTaskPriority?: TaskPriority;
    /**
     * Optional. The default maximum duration, specified when registering the activity type, that a task of an activity type can wait before being assigned to a worker. You can override this default when scheduling a task through the ScheduleActivityTask decision. The duration is specified in seconds; an integer greater than or equal to 0. The value "NONE" can be used to specify unlimited duration.
     */
    defaultTaskScheduleToStartTimeout?: DurationInSecondsOptional;
    /**
     * Optional. The default maximum duration, specified when registering the activity type, for tasks of this activity type. You can override this default when scheduling a task through the ScheduleActivityTask decision. The duration is specified in seconds; an integer greater than or equal to 0. The value "NONE" can be used to specify unlimited duration.
     */
    defaultTaskScheduleToCloseTimeout?: DurationInSecondsOptional;
  }
  export interface ActivityTypeDetail {
    /**
     * General information about the activity type. The status of activity type (returned in the ActivityTypeInfo structure) can be one of the following.   REGISTERED: The type is registered and available. Workers supporting this type should be running.   DEPRECATED: The type was deprecated using DeprecateActivityType, but is still in use. You should keep workers supporting this type running. You cannot create new tasks of this type.  
     */
    typeInfo: ActivityTypeInfo;
    /**
     * The configuration settings registered with the activity type.
     */
    configuration: ActivityTypeConfiguration;
  }
  export interface ActivityTypeInfo {
    /**
     * The ActivityType type structure representing the activity type.
     */
    activityType: ActivityType;
    /**
     * The current status of the activity type.
     */
    status: RegistrationStatus;
    /**
     * The description of the activity type provided in RegisterActivityType.
     */
    description?: Description;
    /**
     * The date and time this activity type was created through RegisterActivityType.
     */
    creationDate: Timestamp;
    /**
     * If DEPRECATED, the date and time DeprecateActivityType was called.
     */
    deprecationDate?: Timestamp;
  }
  export type ActivityTypeInfoList = ActivityTypeInfo[];
  export interface ActivityTypeInfos {
    /**
     * List of activity type information.
     */
    typeInfos: ActivityTypeInfoList;
    /**
     * If a NextPageToken was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in nextPageToken. Keep all other arguments unchanged. The configured maximumPageSize determines how many results can be returned in a single call.
     */
    nextPageToken?: PageToken;
  }
  export type Arn = string;
  export interface CancelTimerDecisionAttributes {
    /**
     * Required. The unique ID of the timer to cancel.
     */
    timerId: TimerId;
  }
  export type CancelTimerFailedCause = "TIMER_ID_UNKNOWN"|"OPERATION_NOT_PERMITTED"|string;
  export interface CancelTimerFailedEventAttributes {
    /**
     * The timerId provided in the CancelTimer decision that failed.
     */
    timerId: TimerId;
    /**
     * The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes. If cause is set to OPERATION_NOT_PERMITTED, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
     */
    cause: CancelTimerFailedCause;
    /**
     * The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in the CancelTimer decision to cancel this timer. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    decisionTaskCompletedEventId: EventId;
  }
  export interface CancelWorkflowExecutionDecisionAttributes {
    /**
     * Optional. details of the cancellation.
     */
    details?: Data;
  }
  export type CancelWorkflowExecutionFailedCause = "UNHANDLED_DECISION"|"OPERATION_NOT_PERMITTED"|string;
  export interface CancelWorkflowExecutionFailedEventAttributes {
    /**
     * The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes. If cause is set to OPERATION_NOT_PERMITTED, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
     */
    cause: CancelWorkflowExecutionFailedCause;
    /**
     * The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in the CancelWorkflowExecution decision for this cancellation request. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    decisionTaskCompletedEventId: EventId;
  }
  export type Canceled = boolean;
  export type CauseMessage = string;
  export type ChildPolicy = "TERMINATE"|"REQUEST_CANCEL"|"ABANDON"|string;
  export interface ChildWorkflowExecutionCanceledEventAttributes {
    /**
     * The child workflow execution that was canceled.
     */
    workflowExecution: WorkflowExecution;
    /**
     * The type of the child workflow execution.
     */
    workflowType: WorkflowType;
    /**
     * Details of the cancellation (if provided).
     */
    details?: Data;
    /**
     * The ID of the StartChildWorkflowExecutionInitiated event corresponding to the StartChildWorkflowExecution decision to start this child workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    initiatedEventId: EventId;
    /**
     * The ID of the ChildWorkflowExecutionStarted event recorded when this child workflow execution was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    startedEventId: EventId;
  }
  export interface ChildWorkflowExecutionCompletedEventAttributes {
    /**
     * The child workflow execution that was completed.
     */
    workflowExecution: WorkflowExecution;
    /**
     * The type of the child workflow execution.
     */
    workflowType: WorkflowType;
    /**
     * The result of the child workflow execution (if any).
     */
    result?: Data;
    /**
     * The ID of the StartChildWorkflowExecutionInitiated event corresponding to the StartChildWorkflowExecution decision to start this child workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    initiatedEventId: EventId;
    /**
     * The ID of the ChildWorkflowExecutionStarted event recorded when this child workflow execution was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    startedEventId: EventId;
  }
  export interface ChildWorkflowExecutionFailedEventAttributes {
    /**
     * The child workflow execution that failed.
     */
    workflowExecution: WorkflowExecution;
    /**
     * The type of the child workflow execution.
     */
    workflowType: WorkflowType;
    /**
     * The reason for the failure (if provided).
     */
    reason?: FailureReason;
    /**
     * The details of the failure (if provided).
     */
    details?: Data;
    /**
     * The ID of the StartChildWorkflowExecutionInitiated event corresponding to the StartChildWorkflowExecution decision to start this child workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    initiatedEventId: EventId;
    /**
     * The ID of the ChildWorkflowExecutionStarted event recorded when this child workflow execution was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    startedEventId: EventId;
  }
  export interface ChildWorkflowExecutionStartedEventAttributes {
    /**
     * The child workflow execution that was started.
     */
    workflowExecution: WorkflowExecution;
    /**
     * The type of the child workflow execution. 
     */
    workflowType: WorkflowType;
    /**
     * The ID of the StartChildWorkflowExecutionInitiated event corresponding to the StartChildWorkflowExecution decision to start this child workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    initiatedEventId: EventId;
  }
  export interface ChildWorkflowExecutionTerminatedEventAttributes {
    /**
     * The child workflow execution that was terminated.
     */
    workflowExecution: WorkflowExecution;
    /**
     * The type of the child workflow execution.
     */
    workflowType: WorkflowType;
    /**
     * The ID of the StartChildWorkflowExecutionInitiated event corresponding to the StartChildWorkflowExecution decision to start this child workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    initiatedEventId: EventId;
    /**
     * The ID of the ChildWorkflowExecutionStarted event recorded when this child workflow execution was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    startedEventId: EventId;
  }
  export interface ChildWorkflowExecutionTimedOutEventAttributes {
    /**
     * The child workflow execution that timed out.
     */
    workflowExecution: WorkflowExecution;
    /**
     * The type of the child workflow execution.
     */
    workflowType: WorkflowType;
    /**
     * The type of the timeout that caused the child workflow execution to time out.
     */
    timeoutType: WorkflowExecutionTimeoutType;
    /**
     * The ID of the StartChildWorkflowExecutionInitiated event corresponding to the StartChildWorkflowExecution decision to start this child workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    initiatedEventId: EventId;
    /**
     * The ID of the ChildWorkflowExecutionStarted event recorded when this child workflow execution was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    startedEventId: EventId;
  }
  export type CloseStatus = "COMPLETED"|"FAILED"|"CANCELED"|"TERMINATED"|"CONTINUED_AS_NEW"|"TIMED_OUT"|string;
  export interface CloseStatusFilter {
    /**
     * Required. The close status that must match the close status of an execution for it to meet the criteria of this filter.
     */
    status: CloseStatus;
  }
  export interface CompleteWorkflowExecutionDecisionAttributes {
    /**
     * The result of the workflow execution. The form of the result is implementation defined.
     */
    result?: Data;
  }
  export type CompleteWorkflowExecutionFailedCause = "UNHANDLED_DECISION"|"OPERATION_NOT_PERMITTED"|string;
  export interface CompleteWorkflowExecutionFailedEventAttributes {
    /**
     * The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes. If cause is set to OPERATION_NOT_PERMITTED, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
     */
    cause: CompleteWorkflowExecutionFailedCause;
    /**
     * The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in the CompleteWorkflowExecution decision to complete this execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    decisionTaskCompletedEventId: EventId;
  }
  export interface ContinueAsNewWorkflowExecutionDecisionAttributes {
    /**
     * The input provided to the new workflow execution.
     */
    input?: Data;
    /**
     * If set, specifies the total duration for this workflow execution. This overrides the defaultExecutionStartToCloseTimeout specified when registering the workflow type. The duration is specified in seconds; an integer greater than or equal to 0. The value "NONE" can be used to specify unlimited duration. An execution start-to-close timeout for this workflow execution must be specified either as a default for the workflow type or through this field. If neither this field is set nor a default execution start-to-close timeout was specified at registration time then a fault will be returned.
     */
    executionStartToCloseTimeout?: DurationInSecondsOptional;
    taskList?: TaskList;
    /**
     * Optional. The task priority that, if set, specifies the priority for the decision tasks for this workflow execution. This overrides the defaultTaskPriority specified when registering the workflow type. Valid values are integers that range from Java's Integer.MIN_VALUE (-2147483648) to Integer.MAX_VALUE (2147483647). Higher numbers indicate higher priority. For more information about setting task priority, see Setting Task Priority in the Amazon Simple Workflow Developer Guide.
     */
    taskPriority?: TaskPriority;
    /**
     * Specifies the maximum duration of decision tasks for the new workflow execution. This parameter overrides the defaultTaskStartToCloseTimout specified when registering the workflow type using RegisterWorkflowType. The duration is specified in seconds; an integer greater than or equal to 0. The value "NONE" can be used to specify unlimited duration. A task start-to-close timeout for the new workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default task start-to-close timeout was specified at registration time then a fault will be returned.
     */
    taskStartToCloseTimeout?: DurationInSecondsOptional;
    /**
     * If set, specifies the policy to use for the child workflow executions of the new execution if it is terminated by calling the TerminateWorkflowExecution action explicitly or due to an expired timeout. This policy overrides the default child policy specified when registering the workflow type using RegisterWorkflowType. The supported child policies are:  TERMINATE: the child executions will be terminated. REQUEST_CANCEL: a request to cancel will be attempted for each child execution by recording a WorkflowExecutionCancelRequested event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event. ABANDON: no action will be taken. The child executions will continue to run.  A child policy for this workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default child policy was specified at registration time then a fault will be returned.
     */
    childPolicy?: ChildPolicy;
    /**
     * The list of tags to associate with the new workflow execution. A maximum of 5 tags can be specified. You can list workflow executions with a specific tag by calling ListOpenWorkflowExecutions or ListClosedWorkflowExecutions and specifying a TagFilter.
     */
    tagList?: TagList;
    workflowTypeVersion?: Version;
    /**
     * The ARN of an IAM role that authorizes Amazon SWF to invoke AWS Lambda functions. In order for this workflow execution to invoke AWS Lambda functions, an appropriate IAM role must be specified either as a default for the workflow type or through this field.
     */
    lambdaRole?: Arn;
  }
  export type ContinueAsNewWorkflowExecutionFailedCause = "UNHANDLED_DECISION"|"WORKFLOW_TYPE_DEPRECATED"|"WORKFLOW_TYPE_DOES_NOT_EXIST"|"DEFAULT_EXECUTION_START_TO_CLOSE_TIMEOUT_UNDEFINED"|"DEFAULT_TASK_START_TO_CLOSE_TIMEOUT_UNDEFINED"|"DEFAULT_TASK_LIST_UNDEFINED"|"DEFAULT_CHILD_POLICY_UNDEFINED"|"CONTINUE_AS_NEW_WORKFLOW_EXECUTION_RATE_EXCEEDED"|"OPERATION_NOT_PERMITTED"|string;
  export interface ContinueAsNewWorkflowExecutionFailedEventAttributes {
    /**
     * The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes. If cause is set to OPERATION_NOT_PERMITTED, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
     */
    cause: ContinueAsNewWorkflowExecutionFailedCause;
    /**
     * The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in the ContinueAsNewWorkflowExecution decision that started this execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    decisionTaskCompletedEventId: EventId;
  }
  export type Count = number;
  export interface CountClosedWorkflowExecutionsInput {
    /**
     * The name of the domain containing the workflow executions to count.
     */
    domain: DomainName;
    /**
     * If specified, only workflow executions that meet the start time criteria of the filter are counted. startTimeFilter and closeTimeFilter are mutually exclusive. You must specify one of these in a request but not both.
     */
    startTimeFilter?: ExecutionTimeFilter;
    /**
     * If specified, only workflow executions that meet the close time criteria of the filter are counted. startTimeFilter and closeTimeFilter are mutually exclusive. You must specify one of these in a request but not both.
     */
    closeTimeFilter?: ExecutionTimeFilter;
    /**
     * If specified, only workflow executions matching the WorkflowId in the filter are counted. closeStatusFilter, executionFilter, typeFilter and tagFilter are mutually exclusive. You can specify at most one of these in a request.
     */
    executionFilter?: WorkflowExecutionFilter;
    /**
     * If specified, indicates the type of the workflow executions to be counted. closeStatusFilter, executionFilter, typeFilter and tagFilter are mutually exclusive. You can specify at most one of these in a request.
     */
    typeFilter?: WorkflowTypeFilter;
    /**
     * If specified, only executions that have a tag that matches the filter are counted. closeStatusFilter, executionFilter, typeFilter and tagFilter are mutually exclusive. You can specify at most one of these in a request.
     */
    tagFilter?: TagFilter;
    /**
     * If specified, only workflow executions that match this close status are counted. This filter has an affect only if executionStatus is specified as CLOSED. closeStatusFilter, executionFilter, typeFilter and tagFilter are mutually exclusive. You can specify at most one of these in a request.
     */
    closeStatusFilter?: CloseStatusFilter;
  }
  export interface CountOpenWorkflowExecutionsInput {
    /**
     * The name of the domain containing the workflow executions to count.
     */
    domain: DomainName;
    /**
     * Specifies the start time criteria that workflow executions must meet in order to be counted.
     */
    startTimeFilter: ExecutionTimeFilter;
    /**
     * Specifies the type of the workflow executions to be counted. executionFilter, typeFilter and tagFilter are mutually exclusive. You can specify at most one of these in a request.
     */
    typeFilter?: WorkflowTypeFilter;
    /**
     * If specified, only executions that have a tag that matches the filter are counted. executionFilter, typeFilter and tagFilter are mutually exclusive. You can specify at most one of these in a request.
     */
    tagFilter?: TagFilter;
    /**
     * If specified, only workflow executions matching the WorkflowId in the filter are counted. executionFilter, typeFilter and tagFilter are mutually exclusive. You can specify at most one of these in a request.
     */
    executionFilter?: WorkflowExecutionFilter;
  }
  export interface CountPendingActivityTasksInput {
    /**
     * The name of the domain that contains the task list.
     */
    domain: DomainName;
    /**
     * The name of the task list.
     */
    taskList: TaskList;
  }
  export interface CountPendingDecisionTasksInput {
    /**
     * The name of the domain that contains the task list.
     */
    domain: DomainName;
    /**
     * The name of the task list.
     */
    taskList: TaskList;
  }
  export type Data = string;
  export interface Decision {
    /**
     * Specifies the type of the decision.
     */
    decisionType: DecisionType;
    /**
     * Provides details of the ScheduleActivityTask decision. It is not set for other decision types.
     */
    scheduleActivityTaskDecisionAttributes?: ScheduleActivityTaskDecisionAttributes;
    /**
     * Provides details of the RequestCancelActivityTask decision. It is not set for other decision types.
     */
    requestCancelActivityTaskDecisionAttributes?: RequestCancelActivityTaskDecisionAttributes;
    /**
     * Provides details of the CompleteWorkflowExecution decision. It is not set for other decision types.
     */
    completeWorkflowExecutionDecisionAttributes?: CompleteWorkflowExecutionDecisionAttributes;
    /**
     * Provides details of the FailWorkflowExecution decision. It is not set for other decision types.
     */
    failWorkflowExecutionDecisionAttributes?: FailWorkflowExecutionDecisionAttributes;
    /**
     * Provides details of the CancelWorkflowExecution decision. It is not set for other decision types.
     */
    cancelWorkflowExecutionDecisionAttributes?: CancelWorkflowExecutionDecisionAttributes;
    /**
     * Provides details of the ContinueAsNewWorkflowExecution decision. It is not set for other decision types.
     */
    continueAsNewWorkflowExecutionDecisionAttributes?: ContinueAsNewWorkflowExecutionDecisionAttributes;
    /**
     * Provides details of the RecordMarker decision. It is not set for other decision types.
     */
    recordMarkerDecisionAttributes?: RecordMarkerDecisionAttributes;
    /**
     * Provides details of the StartTimer decision. It is not set for other decision types.
     */
    startTimerDecisionAttributes?: StartTimerDecisionAttributes;
    /**
     * Provides details of the CancelTimer decision. It is not set for other decision types.
     */
    cancelTimerDecisionAttributes?: CancelTimerDecisionAttributes;
    /**
     * Provides details of the SignalExternalWorkflowExecution decision. It is not set for other decision types.
     */
    signalExternalWorkflowExecutionDecisionAttributes?: SignalExternalWorkflowExecutionDecisionAttributes;
    /**
     * Provides details of the RequestCancelExternalWorkflowExecution decision. It is not set for other decision types.
     */
    requestCancelExternalWorkflowExecutionDecisionAttributes?: RequestCancelExternalWorkflowExecutionDecisionAttributes;
    /**
     * Provides details of the StartChildWorkflowExecution decision. It is not set for other decision types.
     */
    startChildWorkflowExecutionDecisionAttributes?: StartChildWorkflowExecutionDecisionAttributes;
    scheduleLambdaFunctionDecisionAttributes?: ScheduleLambdaFunctionDecisionAttributes;
  }
  export type DecisionList = Decision[];
  export interface DecisionTask {
    /**
     * The opaque string used as a handle on the task. This token is used by workers to communicate progress and response information back to the system about the task.
     */
    taskToken: TaskToken;
    /**
     * The ID of the DecisionTaskStarted event recorded in the history.
     */
    startedEventId: EventId;
    /**
     * The workflow execution for which this decision task was created.
     */
    workflowExecution: WorkflowExecution;
    /**
     * The type of the workflow execution for which this decision task was created.
     */
    workflowType: WorkflowType;
    /**
     * A paginated list of history events of the workflow execution. The decider uses this during the processing of the decision task.
     */
    events: HistoryEventList;
    /**
     * If a NextPageToken was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in nextPageToken. Keep all other arguments unchanged. The configured maximumPageSize determines how many results can be returned in a single call.
     */
    nextPageToken?: PageToken;
    /**
     * The ID of the DecisionTaskStarted event of the previous decision task of this workflow execution that was processed by the decider. This can be used to determine the events in the history new since the last decision task received by the decider.
     */
    previousStartedEventId?: EventId;
  }
  export interface DecisionTaskCompletedEventAttributes {
    /**
     * User defined context for the workflow execution.
     */
    executionContext?: Data;
    /**
     * The ID of the DecisionTaskScheduled event that was recorded when this decision task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    scheduledEventId: EventId;
    /**
     * The ID of the DecisionTaskStarted event recorded when this decision task was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    startedEventId: EventId;
  }
  export interface DecisionTaskScheduledEventAttributes {
    /**
     * The name of the task list in which the decision task was scheduled.
     */
    taskList: TaskList;
    /**
     * Optional. A task priority that, if set, specifies the priority for this decision task. Valid values are integers that range from Java's Integer.MIN_VALUE (-2147483648) to Integer.MAX_VALUE (2147483647). Higher numbers indicate higher priority. For more information about setting task priority, see Setting Task Priority in the Amazon Simple Workflow Developer Guide.
     */
    taskPriority?: TaskPriority;
    /**
     * The maximum duration for this decision task. The task is considered timed out if it does not completed within this duration. The duration is specified in seconds; an integer greater than or equal to 0. The value "NONE" can be used to specify unlimited duration.
     */
    startToCloseTimeout?: DurationInSecondsOptional;
  }
  export interface DecisionTaskStartedEventAttributes {
    /**
     * Identity of the decider making the request. This enables diagnostic tracing when problems arise. The form of this identity is user defined.
     */
    identity?: Identity;
    /**
     * The ID of the DecisionTaskScheduled event that was recorded when this decision task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    scheduledEventId: EventId;
  }
  export interface DecisionTaskTimedOutEventAttributes {
    /**
     * The type of timeout that expired before the decision task could be completed.
     */
    timeoutType: DecisionTaskTimeoutType;
    /**
     * The ID of the DecisionTaskScheduled event that was recorded when this decision task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    scheduledEventId: EventId;
    /**
     * The ID of the DecisionTaskStarted event recorded when this decision task was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    startedEventId: EventId;
  }
  export type DecisionTaskTimeoutType = "START_TO_CLOSE"|string;
  export type DecisionType = "ScheduleActivityTask"|"RequestCancelActivityTask"|"CompleteWorkflowExecution"|"FailWorkflowExecution"|"CancelWorkflowExecution"|"ContinueAsNewWorkflowExecution"|"RecordMarker"|"StartTimer"|"CancelTimer"|"SignalExternalWorkflowExecution"|"RequestCancelExternalWorkflowExecution"|"StartChildWorkflowExecution"|"ScheduleLambdaFunction"|string;
  export interface DeprecateActivityTypeInput {
    /**
     * The name of the domain in which the activity type is registered.
     */
    domain: DomainName;
    /**
     * The activity type to deprecate.
     */
    activityType: ActivityType;
  }
  export interface DeprecateDomainInput {
    /**
     * The name of the domain to deprecate.
     */
    name: DomainName;
  }
  export interface DeprecateWorkflowTypeInput {
    /**
     * The name of the domain in which the workflow type is registered.
     */
    domain: DomainName;
    /**
     * The workflow type to deprecate.
     */
    workflowType: WorkflowType;
  }
  export interface DescribeActivityTypeInput {
    /**
     * The name of the domain in which the activity type is registered.
     */
    domain: DomainName;
    /**
     * The activity type to get information about. Activity types are identified by the name and version that were supplied when the activity was registered.
     */
    activityType: ActivityType;
  }
  export interface DescribeDomainInput {
    /**
     * The name of the domain to describe.
     */
    name: DomainName;
  }
  export interface DescribeWorkflowExecutionInput {
    /**
     * The name of the domain containing the workflow execution.
     */
    domain: DomainName;
    /**
     * The workflow execution to describe.
     */
    execution: WorkflowExecution;
  }
  export interface DescribeWorkflowTypeInput {
    /**
     * The name of the domain in which this workflow type is registered.
     */
    domain: DomainName;
    /**
     * The workflow type to describe.
     */
    workflowType: WorkflowType;
  }
  export type Description = string;
  export interface DomainConfiguration {
    /**
     * The retention period for workflow executions in this domain.
     */
    workflowExecutionRetentionPeriodInDays: DurationInDays;
  }
  export interface DomainDetail {
    domainInfo: DomainInfo;
    configuration: DomainConfiguration;
  }
  export interface DomainInfo {
    /**
     * The name of the domain. This name is unique within the account.
     */
    name: DomainName;
    /**
     * The status of the domain:   REGISTERED: The domain is properly registered and available. You can use this domain for registering types and creating new workflow executions.   DEPRECATED: The domain was deprecated using DeprecateDomain, but is still in use. You should not create new workflow executions in this domain.  
     */
    status: RegistrationStatus;
    /**
     * The description of the domain provided through RegisterDomain.
     */
    description?: Description;
  }
  export type DomainInfoList = DomainInfo[];
  export interface DomainInfos {
    /**
     * A list of DomainInfo structures.
     */
    domainInfos: DomainInfoList;
    /**
     * If a NextPageToken was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in nextPageToken. Keep all other arguments unchanged. The configured maximumPageSize determines how many results can be returned in a single call.
     */
    nextPageToken?: PageToken;
  }
  export type DomainName = string;
  export type DurationInDays = string;
  export type DurationInSeconds = string;
  export type DurationInSecondsOptional = string;
  export type ErrorMessage = string;
  export type EventId = number;
  export type EventType = "WorkflowExecutionStarted"|"WorkflowExecutionCancelRequested"|"WorkflowExecutionCompleted"|"CompleteWorkflowExecutionFailed"|"WorkflowExecutionFailed"|"FailWorkflowExecutionFailed"|"WorkflowExecutionTimedOut"|"WorkflowExecutionCanceled"|"CancelWorkflowExecutionFailed"|"WorkflowExecutionContinuedAsNew"|"ContinueAsNewWorkflowExecutionFailed"|"WorkflowExecutionTerminated"|"DecisionTaskScheduled"|"DecisionTaskStarted"|"DecisionTaskCompleted"|"DecisionTaskTimedOut"|"ActivityTaskScheduled"|"ScheduleActivityTaskFailed"|"ActivityTaskStarted"|"ActivityTaskCompleted"|"ActivityTaskFailed"|"ActivityTaskTimedOut"|"ActivityTaskCanceled"|"ActivityTaskCancelRequested"|"RequestCancelActivityTaskFailed"|"WorkflowExecutionSignaled"|"MarkerRecorded"|"RecordMarkerFailed"|"TimerStarted"|"StartTimerFailed"|"TimerFired"|"TimerCanceled"|"CancelTimerFailed"|"StartChildWorkflowExecutionInitiated"|"StartChildWorkflowExecutionFailed"|"ChildWorkflowExecutionStarted"|"ChildWorkflowExecutionCompleted"|"ChildWorkflowExecutionFailed"|"ChildWorkflowExecutionTimedOut"|"ChildWorkflowExecutionCanceled"|"ChildWorkflowExecutionTerminated"|"SignalExternalWorkflowExecutionInitiated"|"SignalExternalWorkflowExecutionFailed"|"ExternalWorkflowExecutionSignaled"|"RequestCancelExternalWorkflowExecutionInitiated"|"RequestCancelExternalWorkflowExecutionFailed"|"ExternalWorkflowExecutionCancelRequested"|"LambdaFunctionScheduled"|"LambdaFunctionStarted"|"LambdaFunctionCompleted"|"LambdaFunctionFailed"|"LambdaFunctionTimedOut"|"ScheduleLambdaFunctionFailed"|"StartLambdaFunctionFailed"|string;
  export type ExecutionStatus = "OPEN"|"CLOSED"|string;
  export interface ExecutionTimeFilter {
    /**
     * Specifies the oldest start or close date and time to return.
     */
    oldestDate: Timestamp;
    /**
     * Specifies the latest start or close date and time to return.
     */
    latestDate?: Timestamp;
  }
  export interface ExternalWorkflowExecutionCancelRequestedEventAttributes {
    /**
     * The external workflow execution to which the cancellation request was delivered.
     */
    workflowExecution: WorkflowExecution;
    /**
     * The ID of the RequestCancelExternalWorkflowExecutionInitiated event corresponding to the RequestCancelExternalWorkflowExecution decision to cancel this external workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    initiatedEventId: EventId;
  }
  export interface ExternalWorkflowExecutionSignaledEventAttributes {
    /**
     *  The external workflow execution that the signal was delivered to.
     */
    workflowExecution: WorkflowExecution;
    /**
     * The ID of the SignalExternalWorkflowExecutionInitiated event corresponding to the SignalExternalWorkflowExecution decision to request this signal. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    initiatedEventId: EventId;
  }
  export interface FailWorkflowExecutionDecisionAttributes {
    /**
     * A descriptive reason for the failure that may help in diagnostics.
     */
    reason?: FailureReason;
    /**
     * Optional. Details of the failure.
     */
    details?: Data;
  }
  export type FailWorkflowExecutionFailedCause = "UNHANDLED_DECISION"|"OPERATION_NOT_PERMITTED"|string;
  export interface FailWorkflowExecutionFailedEventAttributes {
    /**
     * The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes. If cause is set to OPERATION_NOT_PERMITTED, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
     */
    cause: FailWorkflowExecutionFailedCause;
    /**
     * The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in the FailWorkflowExecution decision to fail this execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    decisionTaskCompletedEventId: EventId;
  }
  export type FailureReason = string;
  export type FunctionId = string;
  export type FunctionInput = string;
  export type FunctionName = string;
  export interface GetWorkflowExecutionHistoryInput {
    /**
     * The name of the domain containing the workflow execution.
     */
    domain: DomainName;
    /**
     * Specifies the workflow execution for which to return the history.
     */
    execution: WorkflowExecution;
    /**
     * If a NextPageToken was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in nextPageToken. Keep all other arguments unchanged. The configured maximumPageSize determines how many results can be returned in a single call.
     */
    nextPageToken?: PageToken;
    /**
     * The maximum number of results that will be returned per call. nextPageToken can be used to obtain futher pages of results. The default is 1000, which is the maximum allowed page size. You can, however, specify a page size smaller than the maximum. This is an upper limit only; the actual number of results returned per call may be fewer than the specified maximum.
     */
    maximumPageSize?: PageSize;
    /**
     * When set to true, returns the events in reverse order. By default the results are returned in ascending order of the eventTimeStamp of the events.
     */
    reverseOrder?: ReverseOrder;
  }
  export interface History {
    /**
     * The list of history events.
     */
    events: HistoryEventList;
    /**
     * If a NextPageToken was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in nextPageToken. Keep all other arguments unchanged. The configured maximumPageSize determines how many results can be returned in a single call.
     */
    nextPageToken?: PageToken;
  }
  export interface HistoryEvent {
    /**
     * The date and time when the event occurred.
     */
    eventTimestamp: Timestamp;
    /**
     * The type of the history event.
     */
    eventType: EventType;
    /**
     * The system generated ID of the event. This ID uniquely identifies the event with in the workflow execution history.
     */
    eventId: EventId;
    /**
     * If the event is of type WorkflowExecutionStarted then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    workflowExecutionStartedEventAttributes?: WorkflowExecutionStartedEventAttributes;
    /**
     * If the event is of type WorkflowExecutionCompleted then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    workflowExecutionCompletedEventAttributes?: WorkflowExecutionCompletedEventAttributes;
    /**
     * If the event is of type CompleteWorkflowExecutionFailed then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    completeWorkflowExecutionFailedEventAttributes?: CompleteWorkflowExecutionFailedEventAttributes;
    /**
     * If the event is of type WorkflowExecutionFailed then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    workflowExecutionFailedEventAttributes?: WorkflowExecutionFailedEventAttributes;
    /**
     * If the event is of type FailWorkflowExecutionFailed then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    failWorkflowExecutionFailedEventAttributes?: FailWorkflowExecutionFailedEventAttributes;
    /**
     * If the event is of type WorkflowExecutionTimedOut then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    workflowExecutionTimedOutEventAttributes?: WorkflowExecutionTimedOutEventAttributes;
    /**
     * If the event is of type WorkflowExecutionCanceled then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    workflowExecutionCanceledEventAttributes?: WorkflowExecutionCanceledEventAttributes;
    /**
     * If the event is of type CancelWorkflowExecutionFailed then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    cancelWorkflowExecutionFailedEventAttributes?: CancelWorkflowExecutionFailedEventAttributes;
    /**
     * If the event is of type WorkflowExecutionContinuedAsNew then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    workflowExecutionContinuedAsNewEventAttributes?: WorkflowExecutionContinuedAsNewEventAttributes;
    /**
     * If the event is of type ContinueAsNewWorkflowExecutionFailed then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    continueAsNewWorkflowExecutionFailedEventAttributes?: ContinueAsNewWorkflowExecutionFailedEventAttributes;
    /**
     * If the event is of type WorkflowExecutionTerminated then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    workflowExecutionTerminatedEventAttributes?: WorkflowExecutionTerminatedEventAttributes;
    /**
     * If the event is of type WorkflowExecutionCancelRequested then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    workflowExecutionCancelRequestedEventAttributes?: WorkflowExecutionCancelRequestedEventAttributes;
    /**
     * If the event is of type DecisionTaskScheduled then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    decisionTaskScheduledEventAttributes?: DecisionTaskScheduledEventAttributes;
    /**
     * If the event is of type DecisionTaskStarted then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    decisionTaskStartedEventAttributes?: DecisionTaskStartedEventAttributes;
    /**
     * If the event is of type DecisionTaskCompleted then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    decisionTaskCompletedEventAttributes?: DecisionTaskCompletedEventAttributes;
    /**
     * If the event is of type DecisionTaskTimedOut then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    decisionTaskTimedOutEventAttributes?: DecisionTaskTimedOutEventAttributes;
    /**
     * If the event is of type ActivityTaskScheduled then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    activityTaskScheduledEventAttributes?: ActivityTaskScheduledEventAttributes;
    /**
     * If the event is of type ActivityTaskStarted then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    activityTaskStartedEventAttributes?: ActivityTaskStartedEventAttributes;
    /**
     * If the event is of type ActivityTaskCompleted then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    activityTaskCompletedEventAttributes?: ActivityTaskCompletedEventAttributes;
    /**
     * If the event is of type ActivityTaskFailed then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    activityTaskFailedEventAttributes?: ActivityTaskFailedEventAttributes;
    /**
     * If the event is of type ActivityTaskTimedOut then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    activityTaskTimedOutEventAttributes?: ActivityTaskTimedOutEventAttributes;
    /**
     * If the event is of type ActivityTaskCanceled then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    activityTaskCanceledEventAttributes?: ActivityTaskCanceledEventAttributes;
    /**
     * If the event is of type ActivityTaskcancelRequested then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    activityTaskCancelRequestedEventAttributes?: ActivityTaskCancelRequestedEventAttributes;
    /**
     * If the event is of type WorkflowExecutionSignaled then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    workflowExecutionSignaledEventAttributes?: WorkflowExecutionSignaledEventAttributes;
    /**
     * If the event is of type MarkerRecorded then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    markerRecordedEventAttributes?: MarkerRecordedEventAttributes;
    /**
     * If the event is of type DecisionTaskFailed then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    recordMarkerFailedEventAttributes?: RecordMarkerFailedEventAttributes;
    /**
     * If the event is of type TimerStarted then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    timerStartedEventAttributes?: TimerStartedEventAttributes;
    /**
     * If the event is of type TimerFired then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    timerFiredEventAttributes?: TimerFiredEventAttributes;
    /**
     * If the event is of type TimerCanceled then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    timerCanceledEventAttributes?: TimerCanceledEventAttributes;
    /**
     * If the event is of type StartChildWorkflowExecutionInitiated then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    startChildWorkflowExecutionInitiatedEventAttributes?: StartChildWorkflowExecutionInitiatedEventAttributes;
    /**
     * If the event is of type ChildWorkflowExecutionStarted then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    childWorkflowExecutionStartedEventAttributes?: ChildWorkflowExecutionStartedEventAttributes;
    /**
     * If the event is of type ChildWorkflowExecutionCompleted then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    childWorkflowExecutionCompletedEventAttributes?: ChildWorkflowExecutionCompletedEventAttributes;
    /**
     * If the event is of type ChildWorkflowExecutionFailed then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    childWorkflowExecutionFailedEventAttributes?: ChildWorkflowExecutionFailedEventAttributes;
    /**
     * If the event is of type ChildWorkflowExecutionTimedOut then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    childWorkflowExecutionTimedOutEventAttributes?: ChildWorkflowExecutionTimedOutEventAttributes;
    /**
     * If the event is of type ChildWorkflowExecutionCanceled then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    childWorkflowExecutionCanceledEventAttributes?: ChildWorkflowExecutionCanceledEventAttributes;
    /**
     * If the event is of type ChildWorkflowExecutionTerminated then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    childWorkflowExecutionTerminatedEventAttributes?: ChildWorkflowExecutionTerminatedEventAttributes;
    /**
     * If the event is of type SignalExternalWorkflowExecutionInitiated then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    signalExternalWorkflowExecutionInitiatedEventAttributes?: SignalExternalWorkflowExecutionInitiatedEventAttributes;
    /**
     * If the event is of type ExternalWorkflowExecutionSignaled then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    externalWorkflowExecutionSignaledEventAttributes?: ExternalWorkflowExecutionSignaledEventAttributes;
    /**
     * If the event is of type SignalExternalWorkflowExecutionFailed then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    signalExternalWorkflowExecutionFailedEventAttributes?: SignalExternalWorkflowExecutionFailedEventAttributes;
    /**
     * If the event is of type ExternalWorkflowExecutionCancelRequested then this member is set and provides detailed information about the event. It is not set for other event types. 
     */
    externalWorkflowExecutionCancelRequestedEventAttributes?: ExternalWorkflowExecutionCancelRequestedEventAttributes;
    /**
     * If the event is of type RequestCancelExternalWorkflowExecutionInitiated then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    requestCancelExternalWorkflowExecutionInitiatedEventAttributes?: RequestCancelExternalWorkflowExecutionInitiatedEventAttributes;
    /**
     * If the event is of type RequestCancelExternalWorkflowExecutionFailed then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    requestCancelExternalWorkflowExecutionFailedEventAttributes?: RequestCancelExternalWorkflowExecutionFailedEventAttributes;
    /**
     * If the event is of type ScheduleActivityTaskFailed then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    scheduleActivityTaskFailedEventAttributes?: ScheduleActivityTaskFailedEventAttributes;
    /**
     * If the event is of type RequestCancelActivityTaskFailed then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    requestCancelActivityTaskFailedEventAttributes?: RequestCancelActivityTaskFailedEventAttributes;
    /**
     * If the event is of type StartTimerFailed then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    startTimerFailedEventAttributes?: StartTimerFailedEventAttributes;
    /**
     * If the event is of type CancelTimerFailed then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    cancelTimerFailedEventAttributes?: CancelTimerFailedEventAttributes;
    /**
     * If the event is of type StartChildWorkflowExecutionFailed then this member is set and provides detailed information about the event. It is not set for other event types.
     */
    startChildWorkflowExecutionFailedEventAttributes?: StartChildWorkflowExecutionFailedEventAttributes;
    lambdaFunctionScheduledEventAttributes?: LambdaFunctionScheduledEventAttributes;
    lambdaFunctionStartedEventAttributes?: LambdaFunctionStartedEventAttributes;
    lambdaFunctionCompletedEventAttributes?: LambdaFunctionCompletedEventAttributes;
    lambdaFunctionFailedEventAttributes?: LambdaFunctionFailedEventAttributes;
    lambdaFunctionTimedOutEventAttributes?: LambdaFunctionTimedOutEventAttributes;
    scheduleLambdaFunctionFailedEventAttributes?: ScheduleLambdaFunctionFailedEventAttributes;
    startLambdaFunctionFailedEventAttributes?: StartLambdaFunctionFailedEventAttributes;
  }
  export type HistoryEventList = HistoryEvent[];
  export type Identity = string;
  export interface LambdaFunctionCompletedEventAttributes {
    /**
     * The ID of the LambdaFunctionScheduled event that was recorded when this AWS Lambda function was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    scheduledEventId: EventId;
    /**
     * The ID of the LambdaFunctionStarted event recorded in the history.
     */
    startedEventId: EventId;
    /**
     * The result of the function execution (if any).
     */
    result?: Data;
  }
  export interface LambdaFunctionFailedEventAttributes {
    /**
     * The ID of the LambdaFunctionScheduled event that was recorded when this AWS Lambda function was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    scheduledEventId: EventId;
    /**
     * The ID of the LambdaFunctionStarted event recorded in the history.
     */
    startedEventId: EventId;
    /**
     * The reason provided for the failure (if any).
     */
    reason?: FailureReason;
    /**
     * The details of the failure (if any).
     */
    details?: Data;
  }
  export interface LambdaFunctionScheduledEventAttributes {
    /**
     * The unique Amazon SWF ID for the AWS Lambda task.
     */
    id: FunctionId;
    /**
     * The name of the scheduled AWS Lambda function.
     */
    name: FunctionName;
    /**
     * Input provided to the AWS Lambda function.
     */
    input?: FunctionInput;
    /**
     * The maximum time, in seconds, that the AWS Lambda function can take to execute from start to close before it is marked as failed.
     */
    startToCloseTimeout?: DurationInSecondsOptional;
    /**
     * The ID of the DecisionTaskCompleted event for the decision that resulted in the scheduling of this AWS Lambda function. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    decisionTaskCompletedEventId: EventId;
  }
  export interface LambdaFunctionStartedEventAttributes {
    /**
     * The ID of the LambdaFunctionScheduled event that was recorded when this AWS Lambda function was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    scheduledEventId: EventId;
  }
  export interface LambdaFunctionTimedOutEventAttributes {
    /**
     * The ID of the LambdaFunctionScheduled event that was recorded when this AWS Lambda function was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    scheduledEventId: EventId;
    /**
     * The ID of the LambdaFunctionStarted event recorded in the history.
     */
    startedEventId: EventId;
    /**
     * The type of the timeout that caused this event.
     */
    timeoutType?: LambdaFunctionTimeoutType;
  }
  export type LambdaFunctionTimeoutType = "START_TO_CLOSE"|string;
  export type LimitedData = string;
  export interface ListActivityTypesInput {
    /**
     * The name of the domain in which the activity types have been registered.
     */
    domain: DomainName;
    /**
     * If specified, only lists the activity types that have this name.
     */
    name?: Name;
    /**
     * Specifies the registration status of the activity types to list.
     */
    registrationStatus: RegistrationStatus;
    /**
     * If a NextPageToken was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in nextPageToken. Keep all other arguments unchanged. The configured maximumPageSize determines how many results can be returned in a single call.
     */
    nextPageToken?: PageToken;
    /**
     * The maximum number of results that will be returned per call. nextPageToken can be used to obtain futher pages of results. The default is 1000, which is the maximum allowed page size. You can, however, specify a page size smaller than the maximum. This is an upper limit only; the actual number of results returned per call may be fewer than the specified maximum.
     */
    maximumPageSize?: PageSize;
    /**
     * When set to true, returns the results in reverse order. By default, the results are returned in ascending alphabetical order by name of the activity types.
     */
    reverseOrder?: ReverseOrder;
  }
  export interface ListClosedWorkflowExecutionsInput {
    /**
     * The name of the domain that contains the workflow executions to list.
     */
    domain: DomainName;
    /**
     * If specified, the workflow executions are included in the returned results based on whether their start times are within the range specified by this filter. Also, if this parameter is specified, the returned results are ordered by their start times. startTimeFilter and closeTimeFilter are mutually exclusive. You must specify one of these in a request but not both.
     */
    startTimeFilter?: ExecutionTimeFilter;
    /**
     * If specified, the workflow executions are included in the returned results based on whether their close times are within the range specified by this filter. Also, if this parameter is specified, the returned results are ordered by their close times. startTimeFilter and closeTimeFilter are mutually exclusive. You must specify one of these in a request but not both.
     */
    closeTimeFilter?: ExecutionTimeFilter;
    /**
     * If specified, only workflow executions matching the workflow ID specified in the filter are returned. closeStatusFilter, executionFilter, typeFilter and tagFilter are mutually exclusive. You can specify at most one of these in a request.
     */
    executionFilter?: WorkflowExecutionFilter;
    /**
     * If specified, only workflow executions that match this close status are listed. For example, if TERMINATED is specified, then only TERMINATED workflow executions are listed. closeStatusFilter, executionFilter, typeFilter and tagFilter are mutually exclusive. You can specify at most one of these in a request.
     */
    closeStatusFilter?: CloseStatusFilter;
    /**
     * If specified, only executions of the type specified in the filter are returned. closeStatusFilter, executionFilter, typeFilter and tagFilter are mutually exclusive. You can specify at most one of these in a request.
     */
    typeFilter?: WorkflowTypeFilter;
    /**
     * If specified, only executions that have the matching tag are listed. closeStatusFilter, executionFilter, typeFilter and tagFilter are mutually exclusive. You can specify at most one of these in a request.
     */
    tagFilter?: TagFilter;
    /**
     * If a NextPageToken was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in nextPageToken. Keep all other arguments unchanged. The configured maximumPageSize determines how many results can be returned in a single call.
     */
    nextPageToken?: PageToken;
    /**
     * The maximum number of results that will be returned per call. nextPageToken can be used to obtain futher pages of results. The default is 1000, which is the maximum allowed page size. You can, however, specify a page size smaller than the maximum. This is an upper limit only; the actual number of results returned per call may be fewer than the specified maximum.
     */
    maximumPageSize?: PageSize;
    /**
     * When set to true, returns the results in reverse order. By default the results are returned in descending order of the start or the close time of the executions.
     */
    reverseOrder?: ReverseOrder;
  }
  export interface ListDomainsInput {
    /**
     * If a NextPageToken was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in nextPageToken. Keep all other arguments unchanged. The configured maximumPageSize determines how many results can be returned in a single call.
     */
    nextPageToken?: PageToken;
    /**
     * Specifies the registration status of the domains to list.
     */
    registrationStatus: RegistrationStatus;
    /**
     * The maximum number of results that will be returned per call. nextPageToken can be used to obtain futher pages of results. The default is 1000, which is the maximum allowed page size. You can, however, specify a page size smaller than the maximum. This is an upper limit only; the actual number of results returned per call may be fewer than the specified maximum.
     */
    maximumPageSize?: PageSize;
    /**
     * When set to true, returns the results in reverse order. By default, the results are returned in ascending alphabetical order by name of the domains.
     */
    reverseOrder?: ReverseOrder;
  }
  export interface ListOpenWorkflowExecutionsInput {
    /**
     * The name of the domain that contains the workflow executions to list.
     */
    domain: DomainName;
    /**
     * Workflow executions are included in the returned results based on whether their start times are within the range specified by this filter.
     */
    startTimeFilter: ExecutionTimeFilter;
    /**
     * If specified, only executions of the type specified in the filter are returned. executionFilter, typeFilter and tagFilter are mutually exclusive. You can specify at most one of these in a request.
     */
    typeFilter?: WorkflowTypeFilter;
    /**
     * If specified, only executions that have the matching tag are listed. executionFilter, typeFilter and tagFilter are mutually exclusive. You can specify at most one of these in a request.
     */
    tagFilter?: TagFilter;
    /**
     * If a NextPageToken was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in nextPageToken. Keep all other arguments unchanged. The configured maximumPageSize determines how many results can be returned in a single call.
     */
    nextPageToken?: PageToken;
    /**
     * The maximum number of results that will be returned per call. nextPageToken can be used to obtain futher pages of results. The default is 1000, which is the maximum allowed page size. You can, however, specify a page size smaller than the maximum. This is an upper limit only; the actual number of results returned per call may be fewer than the specified maximum.
     */
    maximumPageSize?: PageSize;
    /**
     * When set to true, returns the results in reverse order. By default the results are returned in descending order of the start time of the executions.
     */
    reverseOrder?: ReverseOrder;
    /**
     * If specified, only workflow executions matching the workflow ID specified in the filter are returned. executionFilter, typeFilter and tagFilter are mutually exclusive. You can specify at most one of these in a request.
     */
    executionFilter?: WorkflowExecutionFilter;
  }
  export interface ListWorkflowTypesInput {
    /**
     * The name of the domain in which the workflow types have been registered.
     */
    domain: DomainName;
    /**
     * If specified, lists the workflow type with this name.
     */
    name?: Name;
    /**
     * Specifies the registration status of the workflow types to list.
     */
    registrationStatus: RegistrationStatus;
    /**
     * If a NextPageToken was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in nextPageToken. Keep all other arguments unchanged. The configured maximumPageSize determines how many results can be returned in a single call.
     */
    nextPageToken?: PageToken;
    /**
     * The maximum number of results that will be returned per call. nextPageToken can be used to obtain futher pages of results. The default is 1000, which is the maximum allowed page size. You can, however, specify a page size smaller than the maximum. This is an upper limit only; the actual number of results returned per call may be fewer than the specified maximum.
     */
    maximumPageSize?: PageSize;
    /**
     * When set to true, returns the results in reverse order. By default the results are returned in ascending alphabetical order of the name of the workflow types.
     */
    reverseOrder?: ReverseOrder;
  }
  export type MarkerName = string;
  export interface MarkerRecordedEventAttributes {
    /**
     * The name of the marker.
     */
    markerName: MarkerName;
    /**
     * Details of the marker (if any).
     */
    details?: Data;
    /**
     * The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in the RecordMarker decision that requested this marker. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    decisionTaskCompletedEventId: EventId;
  }
  export type Name = string;
  export type OpenDecisionTasksCount = number;
  export type PageSize = number;
  export type PageToken = string;
  export interface PendingTaskCount {
    /**
     * The number of tasks in the task list.
     */
    count: Count;
    /**
     * If set to true, indicates that the actual count was more than the maximum supported by this API and the count returned is the truncated value.
     */
    truncated?: Truncated;
  }
  export interface PollForActivityTaskInput {
    /**
     * The name of the domain that contains the task lists being polled.
     */
    domain: DomainName;
    /**
     * Specifies the task list to poll for activity tasks. The specified string must not start or end with whitespace. It must not contain a : (colon), / (slash), | (vertical bar), or any control characters (\u0000-\u001f | \u007f - \u009f). Also, it must not contain the literal string quotarnquot.
     */
    taskList: TaskList;
    /**
     * Identity of the worker making the request, recorded in the ActivityTaskStarted event in the workflow history. This enables diagnostic tracing when problems arise. The form of this identity is user defined.
     */
    identity?: Identity;
  }
  export interface PollForDecisionTaskInput {
    /**
     * The name of the domain containing the task lists to poll.
     */
    domain: DomainName;
    /**
     * Specifies the task list to poll for decision tasks. The specified string must not start or end with whitespace. It must not contain a : (colon), / (slash), | (vertical bar), or any control characters (\u0000-\u001f | \u007f - \u009f). Also, it must not contain the literal string quotarnquot.
     */
    taskList: TaskList;
    /**
     * Identity of the decider making the request, which is recorded in the DecisionTaskStarted event in the workflow history. This enables diagnostic tracing when problems arise. The form of this identity is user defined.
     */
    identity?: Identity;
    /**
     * If a NextPageToken was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in nextPageToken. Keep all other arguments unchanged. The configured maximumPageSize determines how many results can be returned in a single call. The nextPageToken returned by this action cannot be used with GetWorkflowExecutionHistory to get the next page. You must call PollForDecisionTask again (with the nextPageToken) to retrieve the next page of history records. Calling PollForDecisionTask with a nextPageToken will not return a new decision task..
     */
    nextPageToken?: PageToken;
    /**
     * The maximum number of results that will be returned per call. nextPageToken can be used to obtain futher pages of results. The default is 1000, which is the maximum allowed page size. You can, however, specify a page size smaller than the maximum. This is an upper limit only; the actual number of results returned per call may be fewer than the specified maximum.
     */
    maximumPageSize?: PageSize;
    /**
     * When set to true, returns the events in reverse order. By default the results are returned in ascending order of the eventTimestamp of the events.
     */
    reverseOrder?: ReverseOrder;
  }
  export interface RecordActivityTaskHeartbeatInput {
    /**
     * The taskToken of the ActivityTask.  taskToken is generated by the service and should be treated as an opaque value. If the task is passed to another process, its taskToken must also be passed. This enables it to provide its progress and respond with results. 
     */
    taskToken: TaskToken;
    /**
     * If specified, contains details about the progress of the task.
     */
    details?: LimitedData;
  }
  export interface RecordMarkerDecisionAttributes {
    /**
     * Required. The name of the marker.
     */
    markerName: MarkerName;
    /**
     * Optional. details of the marker.
     */
    details?: Data;
  }
  export type RecordMarkerFailedCause = "OPERATION_NOT_PERMITTED"|string;
  export interface RecordMarkerFailedEventAttributes {
    /**
     * The marker's name.
     */
    markerName: MarkerName;
    /**
     * The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes. If cause is set to OPERATION_NOT_PERMITTED, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
     */
    cause: RecordMarkerFailedCause;
    /**
     * The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in the RecordMarkerFailed decision for this cancellation request. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    decisionTaskCompletedEventId: EventId;
  }
  export interface RegisterActivityTypeInput {
    /**
     * The name of the domain in which this activity is to be registered.
     */
    domain: DomainName;
    /**
     * The name of the activity type within the domain. The specified string must not start or end with whitespace. It must not contain a : (colon), / (slash), | (vertical bar), or any control characters (\u0000-\u001f | \u007f - \u009f). Also, it must not contain the literal string quotarnquot.
     */
    name: Name;
    /**
     * The version of the activity type. The activity type consists of the name and version, the combination of which must be unique within the domain. The specified string must not start or end with whitespace. It must not contain a : (colon), / (slash), | (vertical bar), or any control characters (\u0000-\u001f | \u007f - \u009f). Also, it must not contain the literal string quotarnquot.
     */
    version: Version;
    /**
     * A textual description of the activity type.
     */
    description?: Description;
    /**
     * If set, specifies the default maximum duration that a worker can take to process tasks of this activity type. This default can be overridden when scheduling an activity task using the ScheduleActivityTask decision. The duration is specified in seconds; an integer greater than or equal to 0. The value "NONE" can be used to specify unlimited duration.
     */
    defaultTaskStartToCloseTimeout?: DurationInSecondsOptional;
    /**
     * If set, specifies the default maximum time before which a worker processing a task of this type must report progress by calling RecordActivityTaskHeartbeat. If the timeout is exceeded, the activity task is automatically timed out. This default can be overridden when scheduling an activity task using the ScheduleActivityTask decision. If the activity worker subsequently attempts to record a heartbeat or returns a result, the activity worker receives an UnknownResource fault. In this case, Amazon SWF no longer considers the activity task to be valid; the activity worker should clean up the activity task. The duration is specified in seconds; an integer greater than or equal to 0. The value "NONE" can be used to specify unlimited duration.
     */
    defaultTaskHeartbeatTimeout?: DurationInSecondsOptional;
    /**
     * If set, specifies the default task list to use for scheduling tasks of this activity type. This default task list is used if a task list is not provided when a task is scheduled through the ScheduleActivityTask decision.
     */
    defaultTaskList?: TaskList;
    /**
     * The default task priority to assign to the activity type. If not assigned, then "0" will be used. Valid values are integers that range from Java's Integer.MIN_VALUE (-2147483648) to Integer.MAX_VALUE (2147483647). Higher numbers indicate higher priority. For more information about setting task priority, see Setting Task Priority in the Amazon Simple Workflow Developer Guide.
     */
    defaultTaskPriority?: TaskPriority;
    /**
     * If set, specifies the default maximum duration that a task of this activity type can wait before being assigned to a worker. This default can be overridden when scheduling an activity task using the ScheduleActivityTask decision. The duration is specified in seconds; an integer greater than or equal to 0. The value "NONE" can be used to specify unlimited duration.
     */
    defaultTaskScheduleToStartTimeout?: DurationInSecondsOptional;
    /**
     * If set, specifies the default maximum duration for a task of this activity type. This default can be overridden when scheduling an activity task using the ScheduleActivityTask decision. The duration is specified in seconds; an integer greater than or equal to 0. The value "NONE" can be used to specify unlimited duration.
     */
    defaultTaskScheduleToCloseTimeout?: DurationInSecondsOptional;
  }
  export interface RegisterDomainInput {
    /**
     * Name of the domain to register. The name must be unique in the region that the domain is registered in. The specified string must not start or end with whitespace. It must not contain a : (colon), / (slash), | (vertical bar), or any control characters (\u0000-\u001f | \u007f - \u009f). Also, it must not contain the literal string quotarnquot.
     */
    name: DomainName;
    /**
     * A text description of the domain.
     */
    description?: Description;
    /**
     * The duration (in days) that records and histories of workflow executions on the domain should be kept by the service. After the retention period, the workflow execution is not available in the results of visibility calls. If you pass the value NONE or 0 (zero), then the workflow execution history will not be retained. As soon as the workflow execution completes, the execution record and its history are deleted. The maximum workflow execution retention period is 90 days. For more information about Amazon SWF service limits, see: Amazon SWF Service Limits in the Amazon SWF Developer Guide.
     */
    workflowExecutionRetentionPeriodInDays: DurationInDays;
  }
  export interface RegisterWorkflowTypeInput {
    /**
     * The name of the domain in which to register the workflow type.
     */
    domain: DomainName;
    /**
     * The name of the workflow type. The specified string must not start or end with whitespace. It must not contain a : (colon), / (slash), | (vertical bar), or any control characters (\u0000-\u001f | \u007f - \u009f). Also, it must not contain the literal string quotarnquot.
     */
    name: Name;
    /**
     * The version of the workflow type. The workflow type consists of the name and version, the combination of which must be unique within the domain. To get a list of all currently registered workflow types, use the ListWorkflowTypes action. The specified string must not start or end with whitespace. It must not contain a : (colon), / (slash), | (vertical bar), or any control characters (\u0000-\u001f | \u007f - \u009f). Also, it must not contain the literal string quotarnquot.
     */
    version: Version;
    /**
     * Textual description of the workflow type.
     */
    description?: Description;
    /**
     * If set, specifies the default maximum duration of decision tasks for this workflow type. This default can be overridden when starting a workflow execution using the StartWorkflowExecution action or the StartChildWorkflowExecution decision. The duration is specified in seconds; an integer greater than or equal to 0. The value "NONE" can be used to specify unlimited duration.
     */
    defaultTaskStartToCloseTimeout?: DurationInSecondsOptional;
    /**
     * If set, specifies the default maximum duration for executions of this workflow type. You can override this default when starting an execution through the StartWorkflowExecution action or StartChildWorkflowExecution decision. The duration is specified in seconds; an integer greater than or equal to 0. Unlike some of the other timeout parameters in Amazon SWF, you cannot specify a value of "NONE" for defaultExecutionStartToCloseTimeout; there is a one-year max limit on the time that a workflow execution can run. Exceeding this limit will always cause the workflow execution to time out.
     */
    defaultExecutionStartToCloseTimeout?: DurationInSecondsOptional;
    /**
     * If set, specifies the default task list to use for scheduling decision tasks for executions of this workflow type. This default is used only if a task list is not provided when starting the execution through the StartWorkflowExecution action or StartChildWorkflowExecution decision.
     */
    defaultTaskList?: TaskList;
    /**
     * The default task priority to assign to the workflow type. If not assigned, then "0" will be used. Valid values are integers that range from Java's Integer.MIN_VALUE (-2147483648) to Integer.MAX_VALUE (2147483647). Higher numbers indicate higher priority. For more information about setting task priority, see Setting Task Priority in the Amazon Simple Workflow Developer Guide.
     */
    defaultTaskPriority?: TaskPriority;
    /**
     * If set, specifies the default policy to use for the child workflow executions when a workflow execution of this type is terminated, by calling the TerminateWorkflowExecution action explicitly or due to an expired timeout. This default can be overridden when starting a workflow execution using the StartWorkflowExecution action or the StartChildWorkflowExecution decision. The supported child policies are:  TERMINATE: the child executions will be terminated. REQUEST_CANCEL: a request to cancel will be attempted for each child execution by recording a WorkflowExecutionCancelRequested event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event. ABANDON: no action will be taken. The child executions will continue to run. 
     */
    defaultChildPolicy?: ChildPolicy;
    /**
     * The ARN of the default IAM role to use when a workflow execution of this type invokes AWS Lambda functions. This default can be overridden when starting a workflow execution using the StartWorkflowExecution action or the StartChildWorkflowExecution and ContinueAsNewWorkflowExecution decision.
     */
    defaultLambdaRole?: Arn;
  }
  export type RegistrationStatus = "REGISTERED"|"DEPRECATED"|string;
  export interface RequestCancelActivityTaskDecisionAttributes {
    /**
     * The activityId of the activity task to be canceled.
     */
    activityId: ActivityId;
  }
  export type RequestCancelActivityTaskFailedCause = "ACTIVITY_ID_UNKNOWN"|"OPERATION_NOT_PERMITTED"|string;
  export interface RequestCancelActivityTaskFailedEventAttributes {
    /**
     * The activityId provided in the RequestCancelActivityTask decision that failed.
     */
    activityId: ActivityId;
    /**
     * The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes. If cause is set to OPERATION_NOT_PERMITTED, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
     */
    cause: RequestCancelActivityTaskFailedCause;
    /**
     * The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in the RequestCancelActivityTask decision for this cancellation request. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    decisionTaskCompletedEventId: EventId;
  }
  export interface RequestCancelExternalWorkflowExecutionDecisionAttributes {
    /**
     * Required. The workflowId of the external workflow execution to cancel.
     */
    workflowId: WorkflowId;
    /**
     * The runId of the external workflow execution to cancel.
     */
    runId?: RunIdOptional;
    /**
     * Optional. Data attached to the event that can be used by the decider in subsequent workflow tasks.
     */
    control?: Data;
  }
  export type RequestCancelExternalWorkflowExecutionFailedCause = "UNKNOWN_EXTERNAL_WORKFLOW_EXECUTION"|"REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_RATE_EXCEEDED"|"OPERATION_NOT_PERMITTED"|string;
  export interface RequestCancelExternalWorkflowExecutionFailedEventAttributes {
    /**
     * The workflowId of the external workflow to which the cancel request was to be delivered.
     */
    workflowId: WorkflowId;
    /**
     * The runId of the external workflow execution.
     */
    runId?: RunIdOptional;
    /**
     * The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes. If cause is set to OPERATION_NOT_PERMITTED, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
     */
    cause: RequestCancelExternalWorkflowExecutionFailedCause;
    /**
     * The ID of the RequestCancelExternalWorkflowExecutionInitiated event corresponding to the RequestCancelExternalWorkflowExecution decision to cancel this external workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    initiatedEventId: EventId;
    /**
     * The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in the RequestCancelExternalWorkflowExecution decision for this cancellation request. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    decisionTaskCompletedEventId: EventId;
    control?: Data;
  }
  export interface RequestCancelExternalWorkflowExecutionInitiatedEventAttributes {
    /**
     * The workflowId of the external workflow execution to be canceled.
     */
    workflowId: WorkflowId;
    /**
     * The runId of the external workflow execution to be canceled.
     */
    runId?: RunIdOptional;
    /**
     * The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in the RequestCancelExternalWorkflowExecution decision for this cancellation request. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    decisionTaskCompletedEventId: EventId;
    /**
     * Optional. Data attached to the event that can be used by the decider in subsequent workflow tasks.
     */
    control?: Data;
  }
  export interface RequestCancelWorkflowExecutionInput {
    /**
     * The name of the domain containing the workflow execution to cancel.
     */
    domain: DomainName;
    /**
     * The workflowId of the workflow execution to cancel.
     */
    workflowId: WorkflowId;
    /**
     * The runId of the workflow execution to cancel.
     */
    runId?: RunIdOptional;
  }
  export interface RespondActivityTaskCanceledInput {
    /**
     * The taskToken of the ActivityTask. taskToken is generated by the service and should be treated as an opaque value. If the task is passed to another process, its taskToken must also be passed. This enables it to provide its progress and respond with results.
     */
    taskToken: TaskToken;
    /**
     * Optional. Information about the cancellation.
     */
    details?: Data;
  }
  export interface RespondActivityTaskCompletedInput {
    /**
     * The taskToken of the ActivityTask.  taskToken is generated by the service and should be treated as an opaque value. If the task is passed to another process, its taskToken must also be passed. This enables it to provide its progress and respond with results.
     */
    taskToken: TaskToken;
    /**
     * The result of the activity task. It is a free form string that is implementation specific.
     */
    result?: Data;
  }
  export interface RespondActivityTaskFailedInput {
    /**
     * The taskToken of the ActivityTask.  taskToken is generated by the service and should be treated as an opaque value. If the task is passed to another process, its taskToken must also be passed. This enables it to provide its progress and respond with results.
     */
    taskToken: TaskToken;
    /**
     * Description of the error that may assist in diagnostics.
     */
    reason?: FailureReason;
    /**
     * Optional. Detailed information about the failure.
     */
    details?: Data;
  }
  export interface RespondDecisionTaskCompletedInput {
    /**
     * The taskToken from the DecisionTask. taskToken is generated by the service and should be treated as an opaque value. If the task is passed to another process, its taskToken must also be passed. This enables it to provide its progress and respond with results.
     */
    taskToken: TaskToken;
    /**
     * The list of decisions (possibly empty) made by the decider while processing this decision task. See the docs for the decision structure for details.
     */
    decisions?: DecisionList;
    /**
     * User defined context to add to workflow execution.
     */
    executionContext?: Data;
  }
  export type ReverseOrder = boolean;
  export interface Run {
    /**
     * The runId of a workflow execution. This ID is generated by the service and can be used to uniquely identify the workflow execution within a domain.
     */
    runId?: RunId;
  }
  export type RunId = string;
  export type RunIdOptional = string;
  export interface ScheduleActivityTaskDecisionAttributes {
    /**
     * Required. The type of the activity task to schedule.
     */
    activityType: ActivityType;
    /**
     * Required. The activityId of the activity task. The specified string must not start or end with whitespace. It must not contain a : (colon), / (slash), | (vertical bar), or any control characters (\u0000-\u001f | \u007f - \u009f). Also, it must not contain the literal string quotarnquot.
     */
    activityId: ActivityId;
    /**
     * Optional. Data attached to the event that can be used by the decider in subsequent workflow tasks. This data is not sent to the activity.
     */
    control?: Data;
    /**
     * The input provided to the activity task.
     */
    input?: Data;
    /**
     * The maximum duration for this activity task. The duration is specified in seconds; an integer greater than or equal to 0. The value "NONE" can be used to specify unlimited duration. A schedule-to-close timeout for this activity task must be specified either as a default for the activity type or through this field. If neither this field is set nor a default schedule-to-close timeout was specified at registration time then a fault will be returned.
     */
    scheduleToCloseTimeout?: DurationInSecondsOptional;
    /**
     * If set, specifies the name of the task list in which to schedule the activity task. If not specified, the defaultTaskList registered with the activity type will be used. A task list for this activity task must be specified either as a default for the activity type or through this field. If neither this field is set nor a default task list was specified at registration time then a fault will be returned. The specified string must not start or end with whitespace. It must not contain a : (colon), / (slash), | (vertical bar), or any control characters (\u0000-\u001f | \u007f - \u009f). Also, it must not contain the literal string quotarnquot.
     */
    taskList?: TaskList;
    /**
     * Optional. If set, specifies the priority with which the activity task is to be assigned to a worker. This overrides the defaultTaskPriority specified when registering the activity type using RegisterActivityType. Valid values are integers that range from Java's Integer.MIN_VALUE (-2147483648) to Integer.MAX_VALUE (2147483647). Higher numbers indicate higher priority. For more information about setting task priority, see Setting Task Priority in the Amazon Simple Workflow Developer Guide.
     */
    taskPriority?: TaskPriority;
    /**
     * Optional. If set, specifies the maximum duration the activity task can wait to be assigned to a worker. This overrides the default schedule-to-start timeout specified when registering the activity type using RegisterActivityType. The duration is specified in seconds; an integer greater than or equal to 0. The value "NONE" can be used to specify unlimited duration. A schedule-to-start timeout for this activity task must be specified either as a default for the activity type or through this field. If neither this field is set nor a default schedule-to-start timeout was specified at registration time then a fault will be returned.
     */
    scheduleToStartTimeout?: DurationInSecondsOptional;
    /**
     * If set, specifies the maximum duration a worker may take to process this activity task. This overrides the default start-to-close timeout specified when registering the activity type using RegisterActivityType. The duration is specified in seconds; an integer greater than or equal to 0. The value "NONE" can be used to specify unlimited duration. A start-to-close timeout for this activity task must be specified either as a default for the activity type or through this field. If neither this field is set nor a default start-to-close timeout was specified at registration time then a fault will be returned.
     */
    startToCloseTimeout?: DurationInSecondsOptional;
    /**
     * If set, specifies the maximum time before which a worker processing a task of this type must report progress by calling RecordActivityTaskHeartbeat. If the timeout is exceeded, the activity task is automatically timed out. If the worker subsequently attempts to record a heartbeat or returns a result, it will be ignored. This overrides the default heartbeat timeout specified when registering the activity type using RegisterActivityType. The duration is specified in seconds; an integer greater than or equal to 0. The value "NONE" can be used to specify unlimited duration.
     */
    heartbeatTimeout?: DurationInSecondsOptional;
  }
  export type ScheduleActivityTaskFailedCause = "ACTIVITY_TYPE_DEPRECATED"|"ACTIVITY_TYPE_DOES_NOT_EXIST"|"ACTIVITY_ID_ALREADY_IN_USE"|"OPEN_ACTIVITIES_LIMIT_EXCEEDED"|"ACTIVITY_CREATION_RATE_EXCEEDED"|"DEFAULT_SCHEDULE_TO_CLOSE_TIMEOUT_UNDEFINED"|"DEFAULT_TASK_LIST_UNDEFINED"|"DEFAULT_SCHEDULE_TO_START_TIMEOUT_UNDEFINED"|"DEFAULT_START_TO_CLOSE_TIMEOUT_UNDEFINED"|"DEFAULT_HEARTBEAT_TIMEOUT_UNDEFINED"|"OPERATION_NOT_PERMITTED"|string;
  export interface ScheduleActivityTaskFailedEventAttributes {
    /**
     * The activity type provided in the ScheduleActivityTask decision that failed.
     */
    activityType: ActivityType;
    /**
     * The activityId provided in the ScheduleActivityTask decision that failed.
     */
    activityId: ActivityId;
    /**
     * The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes. If cause is set to OPERATION_NOT_PERMITTED, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
     */
    cause: ScheduleActivityTaskFailedCause;
    /**
     * The ID of the DecisionTaskCompleted event corresponding to the decision that resulted in the scheduling of this activity task. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    decisionTaskCompletedEventId: EventId;
  }
  export interface ScheduleLambdaFunctionDecisionAttributes {
    /**
     * Required. The SWF id of the AWS Lambda task. The specified string must not start or end with whitespace. It must not contain a : (colon), / (slash), | (vertical bar), or any control characters (\u0000-\u001f | \u007f - \u009f). Also, it must not contain the literal string quotarnquot.
     */
    id: FunctionId;
    /**
     * Required. The name of the AWS Lambda function to invoke.
     */
    name: FunctionName;
    /**
     * The input provided to the AWS Lambda function.
     */
    input?: FunctionInput;
    /**
     * If set, specifies the maximum duration the function may take to execute.
     */
    startToCloseTimeout?: DurationInSecondsOptional;
  }
  export type ScheduleLambdaFunctionFailedCause = "ID_ALREADY_IN_USE"|"OPEN_LAMBDA_FUNCTIONS_LIMIT_EXCEEDED"|"LAMBDA_FUNCTION_CREATION_RATE_EXCEEDED"|"LAMBDA_SERVICE_NOT_AVAILABLE_IN_REGION"|string;
  export interface ScheduleLambdaFunctionFailedEventAttributes {
    /**
     * The unique Amazon SWF ID of the AWS Lambda task.
     */
    id: FunctionId;
    /**
     * The name of the scheduled AWS Lambda function.
     */
    name: FunctionName;
    /**
     * The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes. If cause is set to OPERATION_NOT_PERMITTED, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
     */
    cause: ScheduleLambdaFunctionFailedCause;
    /**
     * The ID of the DecisionTaskCompleted event corresponding to the decision that resulted in the scheduling of this AWS Lambda function. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    decisionTaskCompletedEventId: EventId;
  }
  export interface SignalExternalWorkflowExecutionDecisionAttributes {
    /**
     * Required. The workflowId of the workflow execution to be signaled.
     */
    workflowId: WorkflowId;
    /**
     * The runId of the workflow execution to be signaled.
     */
    runId?: RunIdOptional;
    /**
     * Required. The name of the signal.The target workflow execution will use the signal name and input to process the signal.
     */
    signalName: SignalName;
    /**
     * Optional. Input data to be provided with the signal. The target workflow execution will use the signal name and input data to process the signal.
     */
    input?: Data;
    /**
     * Optional. Data attached to the event that can be used by the decider in subsequent decision tasks.
     */
    control?: Data;
  }
  export type SignalExternalWorkflowExecutionFailedCause = "UNKNOWN_EXTERNAL_WORKFLOW_EXECUTION"|"SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_RATE_EXCEEDED"|"OPERATION_NOT_PERMITTED"|string;
  export interface SignalExternalWorkflowExecutionFailedEventAttributes {
    /**
     * The workflowId of the external workflow execution that the signal was being delivered to.
     */
    workflowId: WorkflowId;
    /**
     * The runId of the external workflow execution that the signal was being delivered to.
     */
    runId?: RunIdOptional;
    /**
     * The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes. If cause is set to OPERATION_NOT_PERMITTED, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
     */
    cause: SignalExternalWorkflowExecutionFailedCause;
    /**
     * The ID of the SignalExternalWorkflowExecutionInitiated event corresponding to the SignalExternalWorkflowExecution decision to request this signal. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    initiatedEventId: EventId;
    /**
     * The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in the SignalExternalWorkflowExecution decision for this signal. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    decisionTaskCompletedEventId: EventId;
    control?: Data;
  }
  export interface SignalExternalWorkflowExecutionInitiatedEventAttributes {
    /**
     * The workflowId of the external workflow execution.
     */
    workflowId: WorkflowId;
    /**
     * The runId of the external workflow execution to send the signal to.
     */
    runId?: RunIdOptional;
    /**
     * The name of the signal.
     */
    signalName: SignalName;
    /**
     * Input provided to the signal (if any).
     */
    input?: Data;
    /**
     * The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in the SignalExternalWorkflowExecution decision for this signal. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    decisionTaskCompletedEventId: EventId;
    /**
     * Optional. data attached to the event that can be used by the decider in subsequent decision tasks.
     */
    control?: Data;
  }
  export type SignalName = string;
  export interface SignalWorkflowExecutionInput {
    /**
     * The name of the domain containing the workflow execution to signal.
     */
    domain: DomainName;
    /**
     * The workflowId of the workflow execution to signal.
     */
    workflowId: WorkflowId;
    /**
     * The runId of the workflow execution to signal.
     */
    runId?: RunIdOptional;
    /**
     * The name of the signal. This name must be meaningful to the target workflow.
     */
    signalName: SignalName;
    /**
     * Data to attach to the WorkflowExecutionSignaled event in the target workflow execution's history.
     */
    input?: Data;
  }
  export interface StartChildWorkflowExecutionDecisionAttributes {
    /**
     * Required. The type of the workflow execution to be started.
     */
    workflowType: WorkflowType;
    /**
     * Required. The workflowId of the workflow execution. The specified string must not start or end with whitespace. It must not contain a : (colon), / (slash), | (vertical bar), or any control characters (\u0000-\u001f | \u007f - \u009f). Also, it must not contain the literal string quotarnquot.
     */
    workflowId: WorkflowId;
    /**
     * Optional. Data attached to the event that can be used by the decider in subsequent workflow tasks. This data is not sent to the child workflow execution.
     */
    control?: Data;
    /**
     * The input to be provided to the workflow execution.
     */
    input?: Data;
    /**
     * The total duration for this workflow execution. This overrides the defaultExecutionStartToCloseTimeout specified when registering the workflow type. The duration is specified in seconds; an integer greater than or equal to 0. The value "NONE" can be used to specify unlimited duration. An execution start-to-close timeout for this workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default execution start-to-close timeout was specified at registration time then a fault will be returned.
     */
    executionStartToCloseTimeout?: DurationInSecondsOptional;
    /**
     * The name of the task list to be used for decision tasks of the child workflow execution. A task list for this workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default task list was specified at registration time then a fault will be returned. The specified string must not start or end with whitespace. It must not contain a : (colon), / (slash), | (vertical bar), or any control characters (\u0000-\u001f | \u007f - \u009f). Also, it must not contain the literal string quotarnquot.
     */
    taskList?: TaskList;
    /**
     * Optional. A task priority that, if set, specifies the priority for a decision task of this workflow execution. This overrides the defaultTaskPriority specified when registering the workflow type. Valid values are integers that range from Java's Integer.MIN_VALUE (-2147483648) to Integer.MAX_VALUE (2147483647). Higher numbers indicate higher priority. For more information about setting task priority, see Setting Task Priority in the Amazon Simple Workflow Developer Guide.
     */
    taskPriority?: TaskPriority;
    /**
     * Specifies the maximum duration of decision tasks for this workflow execution. This parameter overrides the defaultTaskStartToCloseTimout specified when registering the workflow type using RegisterWorkflowType. The duration is specified in seconds; an integer greater than or equal to 0. The value "NONE" can be used to specify unlimited duration. A task start-to-close timeout for this workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default task start-to-close timeout was specified at registration time then a fault will be returned.
     */
    taskStartToCloseTimeout?: DurationInSecondsOptional;
    /**
     * Optional. If set, specifies the policy to use for the child workflow executions if the workflow execution being started is terminated by calling the TerminateWorkflowExecution action explicitly or due to an expired timeout. This policy overrides the default child policy specified when registering the workflow type using RegisterWorkflowType. The supported child policies are:  TERMINATE: the child executions will be terminated. REQUEST_CANCEL: a request to cancel will be attempted for each child execution by recording a WorkflowExecutionCancelRequested event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event. ABANDON: no action will be taken. The child executions will continue to run.  A child policy for this workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default child policy was specified at registration time then a fault will be returned.
     */
    childPolicy?: ChildPolicy;
    /**
     * The list of tags to associate with the child workflow execution. A maximum of 5 tags can be specified. You can list workflow executions with a specific tag by calling ListOpenWorkflowExecutions or ListClosedWorkflowExecutions and specifying a TagFilter.
     */
    tagList?: TagList;
    /**
     * The ARN of an IAM role that authorizes Amazon SWF to invoke AWS Lambda functions. In order for this workflow execution to invoke AWS Lambda functions, an appropriate IAM role must be specified either as a default for the workflow type or through this field.
     */
    lambdaRole?: Arn;
  }
  export type StartChildWorkflowExecutionFailedCause = "WORKFLOW_TYPE_DOES_NOT_EXIST"|"WORKFLOW_TYPE_DEPRECATED"|"OPEN_CHILDREN_LIMIT_EXCEEDED"|"OPEN_WORKFLOWS_LIMIT_EXCEEDED"|"CHILD_CREATION_RATE_EXCEEDED"|"WORKFLOW_ALREADY_RUNNING"|"DEFAULT_EXECUTION_START_TO_CLOSE_TIMEOUT_UNDEFINED"|"DEFAULT_TASK_LIST_UNDEFINED"|"DEFAULT_TASK_START_TO_CLOSE_TIMEOUT_UNDEFINED"|"DEFAULT_CHILD_POLICY_UNDEFINED"|"OPERATION_NOT_PERMITTED"|string;
  export interface StartChildWorkflowExecutionFailedEventAttributes {
    /**
     * The workflow type provided in the StartChildWorkflowExecution decision that failed.
     */
    workflowType: WorkflowType;
    /**
     * The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes. If cause is set to OPERATION_NOT_PERMITTED, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
     */
    cause: StartChildWorkflowExecutionFailedCause;
    /**
     * The workflowId of the child workflow execution.
     */
    workflowId: WorkflowId;
    /**
     * The ID of the StartChildWorkflowExecutionInitiated event corresponding to the StartChildWorkflowExecution decision to start this child workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    initiatedEventId: EventId;
    /**
     * The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in the StartChildWorkflowExecution decision to request this child workflow execution. This information can be useful for diagnosing problems by tracing back the cause of events.
     */
    decisionTaskCompletedEventId: EventId;
    control?: Data;
  }
  export interface StartChildWorkflowExecutionInitiatedEventAttributes {
    /**
     * The workflowId of the child workflow execution.
     */
    workflowId: WorkflowId;
    /**
     * The type of the child workflow execution.
     */
    workflowType: WorkflowType;
    /**
     * Optional. Data attached to the event that can be used by the decider in subsequent decision tasks. This data is not sent to the activity.
     */
    control?: Data;
    /**
     * The inputs provided to the child workflow execution (if any).
     */
    input?: Data;
    /**
     * The maximum duration for the child workflow execution. If the workflow execution is not closed within this duration, it will be timed out and force terminated. The duration is specified in seconds; an integer greater than or equal to 0. The value "NONE" can be used to specify unlimited duration.
     */
    executionStartToCloseTimeout?: DurationInSecondsOptional;
    /**
     * The name of the task list used for the decision tasks of the child workflow execution.
     */
    taskList: TaskList;
    /**
     * Optional. The priority assigned for the decision tasks for this workflow execution. Valid values are integers that range from Java's Integer.MIN_VALUE (-2147483648) to Integer.MAX_VALUE (2147483647). Higher numbers indicate higher priority. For more information about setting task priority, see Setting Task Priority in the Amazon Simple Workflow Developer Guide.
     */
    taskPriority?: TaskPriority;
    /**
     * The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in the StartChildWorkflowExecution decision to request this child workflow execution. This information can be useful for diagnosing problems by tracing back the cause of events.
     */
    decisionTaskCompletedEventId: EventId;
    /**
     * The policy to use for the child workflow executions if this execution gets terminated by explicitly calling the TerminateWorkflowExecution action or due to an expired timeout. The supported child policies are:  TERMINATE: the child executions will be terminated. REQUEST_CANCEL: a request to cancel will be attempted for each child execution by recording a WorkflowExecutionCancelRequested event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event. ABANDON: no action will be taken. The child executions will continue to run. 
     */
    childPolicy: ChildPolicy;
    /**
     * The maximum duration allowed for the decision tasks for this workflow execution. The duration is specified in seconds; an integer greater than or equal to 0. The value "NONE" can be used to specify unlimited duration.
     */
    taskStartToCloseTimeout?: DurationInSecondsOptional;
    /**
     * The list of tags to associated with the child workflow execution.
     */
    tagList?: TagList;
    /**
     * The IAM role attached to this workflow execution to use when invoking AWS Lambda functions.
     */
    lambdaRole?: Arn;
  }
  export type StartLambdaFunctionFailedCause = "ASSUME_ROLE_FAILED"|string;
  export interface StartLambdaFunctionFailedEventAttributes {
    /**
     * The ID of the LambdaFunctionScheduled event that was recorded when this AWS Lambda function was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    scheduledEventId?: EventId;
    /**
     * The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes. If cause is set to OPERATION_NOT_PERMITTED, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
     */
    cause?: StartLambdaFunctionFailedCause;
    /**
     * The error message (if any).
     */
    message?: CauseMessage;
  }
  export interface StartTimerDecisionAttributes {
    /**
     * Required. The unique ID of the timer. The specified string must not start or end with whitespace. It must not contain a : (colon), / (slash), | (vertical bar), or any control characters (\u0000-\u001f | \u007f - \u009f). Also, it must not contain the literal string quotarnquot.
     */
    timerId: TimerId;
    /**
     * Optional. Data attached to the event that can be used by the decider in subsequent workflow tasks.
     */
    control?: Data;
    /**
     * Required. The duration to wait before firing the timer. The duration is specified in seconds; an integer greater than or equal to 0.
     */
    startToFireTimeout: DurationInSeconds;
  }
  export type StartTimerFailedCause = "TIMER_ID_ALREADY_IN_USE"|"OPEN_TIMERS_LIMIT_EXCEEDED"|"TIMER_CREATION_RATE_EXCEEDED"|"OPERATION_NOT_PERMITTED"|string;
  export interface StartTimerFailedEventAttributes {
    /**
     * The timerId provided in the StartTimer decision that failed.
     */
    timerId: TimerId;
    /**
     * The cause of the failure. This information is generated by the system and can be useful for diagnostic purposes. If cause is set to OPERATION_NOT_PERMITTED, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows.
     */
    cause: StartTimerFailedCause;
    /**
     * The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in the StartTimer decision for this activity task. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    decisionTaskCompletedEventId: EventId;
  }
  export interface StartWorkflowExecutionInput {
    /**
     * The name of the domain in which the workflow execution is created.
     */
    domain: DomainName;
    /**
     * The user defined identifier associated with the workflow execution. You can use this to associate a custom identifier with the workflow execution. You may specify the same identifier if a workflow execution is logically a restart of a previous execution. You cannot have two open workflow executions with the same workflowId at the same time. The specified string must not start or end with whitespace. It must not contain a : (colon), / (slash), | (vertical bar), or any control characters (\u0000-\u001f | \u007f - \u009f). Also, it must not contain the literal string quotarnquot.
     */
    workflowId: WorkflowId;
    /**
     * The type of the workflow to start.
     */
    workflowType: WorkflowType;
    /**
     * The task list to use for the decision tasks generated for this workflow execution. This overrides the defaultTaskList specified when registering the workflow type. A task list for this workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default task list was specified at registration time then a fault will be returned. The specified string must not start or end with whitespace. It must not contain a : (colon), / (slash), | (vertical bar), or any control characters (\u0000-\u001f | \u007f - \u009f). Also, it must not contain the literal string quotarnquot.
     */
    taskList?: TaskList;
    /**
     * The task priority to use for this workflow execution. This will override any default priority that was assigned when the workflow type was registered. If not set, then the default task priority for the workflow type will be used. Valid values are integers that range from Java's Integer.MIN_VALUE (-2147483648) to Integer.MAX_VALUE (2147483647). Higher numbers indicate higher priority. For more information about setting task priority, see Setting Task Priority in the Amazon Simple Workflow Developer Guide.
     */
    taskPriority?: TaskPriority;
    /**
     * The input for the workflow execution. This is a free form string which should be meaningful to the workflow you are starting. This input is made available to the new workflow execution in the WorkflowExecutionStarted history event.
     */
    input?: Data;
    /**
     * The total duration for this workflow execution. This overrides the defaultExecutionStartToCloseTimeout specified when registering the workflow type. The duration is specified in seconds; an integer greater than or equal to 0. Exceeding this limit will cause the workflow execution to time out. Unlike some of the other timeout parameters in Amazon SWF, you cannot specify a value of "NONE" for this timeout; there is a one-year max limit on the time that a workflow execution can run.  An execution start-to-close timeout must be specified either through this parameter or as a default when the workflow type is registered. If neither this parameter nor a default execution start-to-close timeout is specified, a fault is returned.
     */
    executionStartToCloseTimeout?: DurationInSecondsOptional;
    /**
     * The list of tags to associate with the workflow execution. You can specify a maximum of 5 tags. You can list workflow executions with a specific tag by calling ListOpenWorkflowExecutions or ListClosedWorkflowExecutions and specifying a TagFilter.
     */
    tagList?: TagList;
    /**
     * Specifies the maximum duration of decision tasks for this workflow execution. This parameter overrides the defaultTaskStartToCloseTimout specified when registering the workflow type using RegisterWorkflowType. The duration is specified in seconds; an integer greater than or equal to 0. The value "NONE" can be used to specify unlimited duration. A task start-to-close timeout for this workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default task start-to-close timeout was specified at registration time then a fault will be returned.
     */
    taskStartToCloseTimeout?: DurationInSecondsOptional;
    /**
     * If set, specifies the policy to use for the child workflow executions of this workflow execution if it is terminated, by calling the TerminateWorkflowExecution action explicitly or due to an expired timeout. This policy overrides the default child policy specified when registering the workflow type using RegisterWorkflowType. The supported child policies are:  TERMINATE: the child executions will be terminated. REQUEST_CANCEL: a request to cancel will be attempted for each child execution by recording a WorkflowExecutionCancelRequested event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event. ABANDON: no action will be taken. The child executions will continue to run.  A child policy for this workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default child policy was specified at registration time then a fault will be returned.
     */
    childPolicy?: ChildPolicy;
    /**
     * The ARN of an IAM role that authorizes Amazon SWF to invoke AWS Lambda functions. In order for this workflow execution to invoke AWS Lambda functions, an appropriate IAM role must be specified either as a default for the workflow type or through this field.
     */
    lambdaRole?: Arn;
  }
  export type Tag = string;
  export interface TagFilter {
    /**
     * Required. Specifies the tag that must be associated with the execution for it to meet the filter criteria.
     */
    tag: Tag;
  }
  export type TagList = Tag[];
  export interface TaskList {
    /**
     * The name of the task list.
     */
    name: Name;
  }
  export type TaskPriority = string;
  export type TaskToken = string;
  export type TerminateReason = string;
  export interface TerminateWorkflowExecutionInput {
    /**
     * The domain of the workflow execution to terminate.
     */
    domain: DomainName;
    /**
     * The workflowId of the workflow execution to terminate.
     */
    workflowId: WorkflowId;
    /**
     * The runId of the workflow execution to terminate.
     */
    runId?: RunIdOptional;
    /**
     * Optional. A descriptive reason for terminating the workflow execution.
     */
    reason?: TerminateReason;
    /**
     * Optional. Details for terminating the workflow execution.
     */
    details?: Data;
    /**
     * If set, specifies the policy to use for the child workflow executions of the workflow execution being terminated. This policy overrides the child policy specified for the workflow execution at registration time or when starting the execution. The supported child policies are:  TERMINATE: the child executions will be terminated. REQUEST_CANCEL: a request to cancel will be attempted for each child execution by recording a WorkflowExecutionCancelRequested event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event. ABANDON: no action will be taken. The child executions will continue to run.  A child policy for this workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default child policy was specified at registration time then a fault will be returned.
     */
    childPolicy?: ChildPolicy;
  }
  export interface TimerCanceledEventAttributes {
    /**
     *  The unique ID of the timer that was canceled. 
     */
    timerId: TimerId;
    /**
     * The ID of the TimerStarted event that was recorded when this timer was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    startedEventId: EventId;
    /**
     * The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in the CancelTimer decision to cancel this timer. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    decisionTaskCompletedEventId: EventId;
  }
  export interface TimerFiredEventAttributes {
    /**
     * The unique ID of the timer that fired.
     */
    timerId: TimerId;
    /**
     * The ID of the TimerStarted event that was recorded when this timer was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    startedEventId: EventId;
  }
  export type TimerId = string;
  export interface TimerStartedEventAttributes {
    /**
     * The unique ID of the timer that was started.
     */
    timerId: TimerId;
    /**
     * Optional. Data attached to the event that can be used by the decider in subsequent workflow tasks.
     */
    control?: Data;
    /**
     * The duration of time after which the timer will fire. The duration is specified in seconds; an integer greater than or equal to 0.
     */
    startToFireTimeout: DurationInSeconds;
    /**
     * The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in the StartTimer decision for this activity task. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    decisionTaskCompletedEventId: EventId;
  }
  export type Timestamp = Date;
  export type Truncated = boolean;
  export type Version = string;
  export type VersionOptional = string;
  export interface WorkflowExecution {
    /**
     * The user defined identifier associated with the workflow execution.
     */
    workflowId: WorkflowId;
    /**
     * A system-generated unique identifier for the workflow execution.
     */
    runId: RunId;
  }
  export type WorkflowExecutionCancelRequestedCause = "CHILD_POLICY_APPLIED"|string;
  export interface WorkflowExecutionCancelRequestedEventAttributes {
    /**
     * The external workflow execution for which the cancellation was requested.
     */
    externalWorkflowExecution?: WorkflowExecution;
    /**
     * The ID of the RequestCancelExternalWorkflowExecutionInitiated event corresponding to the RequestCancelExternalWorkflowExecution decision to cancel this workflow execution.The source event with this ID can be found in the history of the source workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    externalInitiatedEventId?: EventId;
    /**
     * If set, indicates that the request to cancel the workflow execution was automatically generated, and specifies the cause. This happens if the parent workflow execution times out or is terminated, and the child policy is set to cancel child executions.
     */
    cause?: WorkflowExecutionCancelRequestedCause;
  }
  export interface WorkflowExecutionCanceledEventAttributes {
    /**
     * Details for the cancellation (if any).
     */
    details?: Data;
    /**
     * The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in the CancelWorkflowExecution decision for this cancellation request. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    decisionTaskCompletedEventId: EventId;
  }
  export interface WorkflowExecutionCompletedEventAttributes {
    /**
     * The result produced by the workflow execution upon successful completion.
     */
    result?: Data;
    /**
     * The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in the CompleteWorkflowExecution decision to complete this execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    decisionTaskCompletedEventId: EventId;
  }
  export interface WorkflowExecutionConfiguration {
    /**
     * The maximum duration allowed for decision tasks for this workflow execution. The duration is specified in seconds; an integer greater than or equal to 0. The value "NONE" can be used to specify unlimited duration.
     */
    taskStartToCloseTimeout: DurationInSeconds;
    /**
     * The total duration for this workflow execution. The duration is specified in seconds; an integer greater than or equal to 0. The value "NONE" can be used to specify unlimited duration.
     */
    executionStartToCloseTimeout: DurationInSeconds;
    /**
     * The task list used for the decision tasks generated for this workflow execution.
     */
    taskList: TaskList;
    /**
     * The priority assigned to decision tasks for this workflow execution. Valid values are integers that range from Java's Integer.MIN_VALUE (-2147483648) to Integer.MAX_VALUE (2147483647). Higher numbers indicate higher priority. For more information about setting task priority, see Setting Task Priority in the Amazon Simple Workflow Developer Guide.
     */
    taskPriority?: TaskPriority;
    /**
     * The policy to use for the child workflow executions if this workflow execution is terminated, by calling the TerminateWorkflowExecution action explicitly or due to an expired timeout. The supported child policies are:  TERMINATE: the child executions will be terminated. REQUEST_CANCEL: a request to cancel will be attempted for each child execution by recording a WorkflowExecutionCancelRequested event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event. ABANDON: no action will be taken. The child executions will continue to run. 
     */
    childPolicy: ChildPolicy;
    /**
     * The IAM role used by this workflow execution when invoking AWS Lambda functions.
     */
    lambdaRole?: Arn;
  }
  export interface WorkflowExecutionContinuedAsNewEventAttributes {
    /**
     * The input provided to the new workflow execution.
     */
    input?: Data;
    /**
     * The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in the ContinueAsNewWorkflowExecution decision that started this execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    decisionTaskCompletedEventId: EventId;
    /**
     * The runId of the new workflow execution.
     */
    newExecutionRunId: RunId;
    /**
     * The total duration allowed for the new workflow execution. The duration is specified in seconds; an integer greater than or equal to 0. The value "NONE" can be used to specify unlimited duration.
     */
    executionStartToCloseTimeout?: DurationInSecondsOptional;
    taskList: TaskList;
    taskPriority?: TaskPriority;
    /**
     * The maximum duration of decision tasks for the new workflow execution. The duration is specified in seconds; an integer greater than or equal to 0. The value "NONE" can be used to specify unlimited duration.
     */
    taskStartToCloseTimeout?: DurationInSecondsOptional;
    /**
     * The policy to use for the child workflow executions of the new execution if it is terminated by calling the TerminateWorkflowExecution action explicitly or due to an expired timeout. The supported child policies are:  TERMINATE: the child executions will be terminated. REQUEST_CANCEL: a request to cancel will be attempted for each child execution by recording a WorkflowExecutionCancelRequested event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event. ABANDON: no action will be taken. The child executions will continue to run. 
     */
    childPolicy: ChildPolicy;
    /**
     * The list of tags associated with the new workflow execution.
     */
    tagList?: TagList;
    workflowType: WorkflowType;
    /**
     * The IAM role attached to this workflow execution to use when invoking AWS Lambda functions.
     */
    lambdaRole?: Arn;
  }
  export interface WorkflowExecutionCount {
    /**
     * The number of workflow executions.
     */
    count: Count;
    /**
     * If set to true, indicates that the actual count was more than the maximum supported by this API and the count returned is the truncated value.
     */
    truncated?: Truncated;
  }
  export interface WorkflowExecutionDetail {
    /**
     * Information about the workflow execution.
     */
    executionInfo: WorkflowExecutionInfo;
    /**
     * The configuration settings for this workflow execution including timeout values, tasklist etc.
     */
    executionConfiguration: WorkflowExecutionConfiguration;
    /**
     * The number of tasks for this workflow execution. This includes open and closed tasks of all types.
     */
    openCounts: WorkflowExecutionOpenCounts;
    /**
     * The time when the last activity task was scheduled for this workflow execution. You can use this information to determine if the workflow has not made progress for an unusually long period of time and might require a corrective action.
     */
    latestActivityTaskTimestamp?: Timestamp;
    /**
     * The latest executionContext provided by the decider for this workflow execution. A decider can provide an executionContext (a free-form string) when closing a decision task using RespondDecisionTaskCompleted.
     */
    latestExecutionContext?: Data;
  }
  export interface WorkflowExecutionFailedEventAttributes {
    /**
     * The descriptive reason provided for the failure (if any).
     */
    reason?: FailureReason;
    /**
     * The details of the failure (if any).
     */
    details?: Data;
    /**
     * The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in the FailWorkflowExecution decision to fail this execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    decisionTaskCompletedEventId: EventId;
  }
  export interface WorkflowExecutionFilter {
    /**
     * The workflowId to pass of match the criteria of this filter.
     */
    workflowId: WorkflowId;
  }
  export interface WorkflowExecutionInfo {
    /**
     * The workflow execution this information is about.
     */
    execution: WorkflowExecution;
    /**
     * The type of the workflow execution.
     */
    workflowType: WorkflowType;
    /**
     * The time when the execution was started.
     */
    startTimestamp: Timestamp;
    /**
     * The time when the workflow execution was closed. Set only if the execution status is CLOSED.
     */
    closeTimestamp?: Timestamp;
    /**
     * The current status of the execution.
     */
    executionStatus: ExecutionStatus;
    /**
     * If the execution status is closed then this specifies how the execution was closed:   COMPLETED: the execution was successfully completed.  CANCELED: the execution was canceled.Cancellation allows the implementation to gracefully clean up before the execution is closed.  TERMINATED: the execution was force terminated.  FAILED: the execution failed to complete.  TIMED_OUT: the execution did not complete in the alloted time and was automatically timed out.  CONTINUED_AS_NEW: the execution is logically continued. This means the current execution was completed and a new execution was started to carry on the workflow. 
     */
    closeStatus?: CloseStatus;
    /**
     * If this workflow execution is a child of another execution then contains the workflow execution that started this execution.
     */
    parent?: WorkflowExecution;
    /**
     * The list of tags associated with the workflow execution. Tags can be used to identify and list workflow executions of interest through the visibility APIs. A workflow execution can have a maximum of 5 tags.
     */
    tagList?: TagList;
    /**
     * Set to true if a cancellation is requested for this workflow execution.
     */
    cancelRequested?: Canceled;
  }
  export type WorkflowExecutionInfoList = WorkflowExecutionInfo[];
  export interface WorkflowExecutionInfos {
    /**
     * The list of workflow information structures.
     */
    executionInfos: WorkflowExecutionInfoList;
    /**
     * If a NextPageToken was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in nextPageToken. Keep all other arguments unchanged. The configured maximumPageSize determines how many results can be returned in a single call.
     */
    nextPageToken?: PageToken;
  }
  export interface WorkflowExecutionOpenCounts {
    /**
     * The count of activity tasks whose status is OPEN.
     */
    openActivityTasks: Count;
    /**
     * The count of decision tasks whose status is OPEN. A workflow execution can have at most one open decision task.
     */
    openDecisionTasks: OpenDecisionTasksCount;
    /**
     * The count of timers started by this workflow execution that have not fired yet.
     */
    openTimers: Count;
    /**
     * The count of child workflow executions whose status is OPEN.
     */
    openChildWorkflowExecutions: Count;
    /**
     * The count of AWS Lambda functions that are currently executing.
     */
    openLambdaFunctions?: Count;
  }
  export interface WorkflowExecutionSignaledEventAttributes {
    /**
     * The name of the signal received. The decider can use the signal name and inputs to determine how to the process the signal.
     */
    signalName: SignalName;
    /**
     * Inputs provided with the signal (if any). The decider can use the signal name and inputs to determine how to process the signal.
     */
    input?: Data;
    /**
     * The workflow execution that sent the signal. This is set only of the signal was sent by another workflow execution.
     */
    externalWorkflowExecution?: WorkflowExecution;
    /**
     * The ID of the SignalExternalWorkflowExecutionInitiated event corresponding to the SignalExternalWorkflow decision to signal this workflow execution.The source event with this ID can be found in the history of the source workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event. This field is set only if the signal was initiated by another workflow execution.
     */
    externalInitiatedEventId?: EventId;
  }
  export interface WorkflowExecutionStartedEventAttributes {
    /**
     * The input provided to the workflow execution (if any).
     */
    input?: Data;
    /**
     * The maximum duration for this workflow execution. The duration is specified in seconds; an integer greater than or equal to 0. The value "NONE" can be used to specify unlimited duration.
     */
    executionStartToCloseTimeout?: DurationInSecondsOptional;
    /**
     * The maximum duration of decision tasks for this workflow type. The duration is specified in seconds; an integer greater than or equal to 0. The value "NONE" can be used to specify unlimited duration.
     */
    taskStartToCloseTimeout?: DurationInSecondsOptional;
    /**
     * The policy to use for the child workflow executions if this workflow execution is terminated, by calling the TerminateWorkflowExecution action explicitly or due to an expired timeout. The supported child policies are:  TERMINATE: the child executions will be terminated. REQUEST_CANCEL: a request to cancel will be attempted for each child execution by recording a WorkflowExecutionCancelRequested event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event. ABANDON: no action will be taken. The child executions will continue to run. 
     */
    childPolicy: ChildPolicy;
    /**
     * The name of the task list for scheduling the decision tasks for this workflow execution.
     */
    taskList: TaskList;
    /**
     * The workflow type of this execution.
     */
    workflowType: WorkflowType;
    /**
     * The list of tags associated with this workflow execution. An execution can have up to 5 tags.
     */
    tagList?: TagList;
    taskPriority?: TaskPriority;
    /**
     * If this workflow execution was started due to a ContinueAsNewWorkflowExecution decision, then it contains the runId of the previous workflow execution that was closed and continued as this execution.
     */
    continuedExecutionRunId?: RunIdOptional;
    /**
     * The source workflow execution that started this workflow execution. The member is not set if the workflow execution was not started by a workflow.
     */
    parentWorkflowExecution?: WorkflowExecution;
    /**
     * The ID of the StartChildWorkflowExecutionInitiated event corresponding to the StartChildWorkflowExecution decision to start this workflow execution. The source event with this ID can be found in the history of the source workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
     */
    parentInitiatedEventId?: EventId;
    /**
     * The IAM role attached to this workflow execution to use when invoking AWS Lambda functions.
     */
    lambdaRole?: Arn;
  }
  export type WorkflowExecutionTerminatedCause = "CHILD_POLICY_APPLIED"|"EVENT_LIMIT_EXCEEDED"|"OPERATOR_INITIATED"|string;
  export interface WorkflowExecutionTerminatedEventAttributes {
    /**
     * The reason provided for the termination (if any).
     */
    reason?: TerminateReason;
    /**
     * The details provided for the termination (if any).
     */
    details?: Data;
    /**
     * The policy used for the child workflow executions of this workflow execution. The supported child policies are:  TERMINATE: the child executions will be terminated. REQUEST_CANCEL: a request to cancel will be attempted for each child execution by recording a WorkflowExecutionCancelRequested event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event. ABANDON: no action will be taken. The child executions will continue to run. 
     */
    childPolicy: ChildPolicy;
    /**
     * If set, indicates that the workflow execution was automatically terminated, and specifies the cause. This happens if the parent workflow execution times out or is terminated and the child policy is set to terminate child executions.
     */
    cause?: WorkflowExecutionTerminatedCause;
  }
  export interface WorkflowExecutionTimedOutEventAttributes {
    /**
     * The type of timeout that caused this event.
     */
    timeoutType: WorkflowExecutionTimeoutType;
    /**
     * The policy used for the child workflow executions of this workflow execution. The supported child policies are:  TERMINATE: the child executions will be terminated. REQUEST_CANCEL: a request to cancel will be attempted for each child execution by recording a WorkflowExecutionCancelRequested event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event. ABANDON: no action will be taken. The child executions will continue to run. 
     */
    childPolicy: ChildPolicy;
  }
  export type WorkflowExecutionTimeoutType = "START_TO_CLOSE"|string;
  export type WorkflowId = string;
  export interface WorkflowType {
    /**
     * Required. The name of the workflow type. The combination of workflow type name and version must be unique with in a domain.
     */
    name: Name;
    /**
     * Required. The version of the workflow type. The combination of workflow type name and version must be unique with in a domain.
     */
    version: Version;
  }
  export interface WorkflowTypeConfiguration {
    /**
     * Optional. The default maximum duration, specified when registering the workflow type, that a decision task for executions of this workflow type might take before returning completion or failure. If the task does not close in the specified time then the task is automatically timed out and rescheduled. If the decider eventually reports a completion or failure, it is ignored. This default can be overridden when starting a workflow execution using the StartWorkflowExecution action or the StartChildWorkflowExecution decision. The duration is specified in seconds; an integer greater than or equal to 0. The value "NONE" can be used to specify unlimited duration.
     */
    defaultTaskStartToCloseTimeout?: DurationInSecondsOptional;
    /**
     * Optional. The default maximum duration, specified when registering the workflow type, for executions of this workflow type. This default can be overridden when starting a workflow execution using the StartWorkflowExecution action or the StartChildWorkflowExecution decision. The duration is specified in seconds; an integer greater than or equal to 0. The value "NONE" can be used to specify unlimited duration.
     */
    defaultExecutionStartToCloseTimeout?: DurationInSecondsOptional;
    /**
     * Optional. The default task list, specified when registering the workflow type, for decisions tasks scheduled for workflow executions of this type. This default can be overridden when starting a workflow execution using the StartWorkflowExecution action or the StartChildWorkflowExecution decision.
     */
    defaultTaskList?: TaskList;
    /**
     * Optional. The default task priority, specified when registering the workflow type, for all decision tasks of this workflow type. This default can be overridden when starting a workflow execution using the StartWorkflowExecution action or the StartChildWorkflowExecution decision. Valid values are integers that range from Java's Integer.MIN_VALUE (-2147483648) to Integer.MAX_VALUE (2147483647). Higher numbers indicate higher priority. For more information about setting task priority, see Setting Task Priority in the Amazon Simple Workflow Developer Guide.
     */
    defaultTaskPriority?: TaskPriority;
    /**
     * Optional. The default policy to use for the child workflow executions when a workflow execution of this type is terminated, by calling the TerminateWorkflowExecution action explicitly or due to an expired timeout. This default can be overridden when starting a workflow execution using the StartWorkflowExecution action or the StartChildWorkflowExecution decision. The supported child policies are:  TERMINATE: the child executions will be terminated. REQUEST_CANCEL: a request to cancel will be attempted for each child execution by recording a WorkflowExecutionCancelRequested event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event. ABANDON: no action will be taken. The child executions will continue to run. 
     */
    defaultChildPolicy?: ChildPolicy;
    /**
     * The default IAM role to use when a workflow execution invokes a AWS Lambda function.
     */
    defaultLambdaRole?: Arn;
  }
  export interface WorkflowTypeDetail {
    /**
     * General information about the workflow type. The status of the workflow type (returned in the WorkflowTypeInfo structure) can be one of the following.   REGISTERED: The type is registered and available. Workers supporting this type should be running.  DEPRECATED: The type was deprecated using DeprecateWorkflowType, but is still in use. You should keep workers supporting this type running. You cannot create new workflow executions of this type. 
     */
    typeInfo: WorkflowTypeInfo;
    /**
     * Configuration settings of the workflow type registered through RegisterWorkflowType
     */
    configuration: WorkflowTypeConfiguration;
  }
  export interface WorkflowTypeFilter {
    /**
     * Required. Name of the workflow type.
     */
    name: Name;
    /**
     * Version of the workflow type.
     */
    version?: VersionOptional;
  }
  export interface WorkflowTypeInfo {
    /**
     * The workflow type this information is about.
     */
    workflowType: WorkflowType;
    /**
     * The current status of the workflow type.
     */
    status: RegistrationStatus;
    /**
     * The description of the type registered through RegisterWorkflowType.
     */
    description?: Description;
    /**
     * The date when this type was registered.
     */
    creationDate: Timestamp;
    /**
     * If the type is in deprecated state, then it is set to the date when the type was deprecated.
     */
    deprecationDate?: Timestamp;
  }
  export type WorkflowTypeInfoList = WorkflowTypeInfo[];
  export interface WorkflowTypeInfos {
    /**
     * The list of workflow type information.
     */
    typeInfos: WorkflowTypeInfoList;
    /**
     * If a NextPageToken was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in nextPageToken. Keep all other arguments unchanged. The configured maximumPageSize determines how many results can be returned in a single call.
     */
    nextPageToken?: PageToken;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2012-01-25"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
}
export = SWF;
