import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class AutoScaling extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: AutoScaling.Types.ClientConfiguration)
  config: Config & AutoScaling.Types.ClientConfiguration;
  /**
   * Attaches one or more EC2 instances to the specified Auto Scaling group. When you attach instances, Amazon EC2 Auto Scaling increases the desired capacity of the group by the number of instances being attached. If the number of instances being attached plus the desired capacity of the group exceeds the maximum size of the group, the operation fails. If there is a Classic Load Balancer attached to your Auto Scaling group, the instances are also registered with the load balancer. If there are target groups attached to your Auto Scaling group, the instances are also registered with the target groups. For more information, see Attach EC2 instances to your Auto Scaling group in the Amazon EC2 Auto Scaling User Guide.
   */
  attachInstances(params: AutoScaling.Types.AttachInstancesQuery, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Attaches one or more EC2 instances to the specified Auto Scaling group. When you attach instances, Amazon EC2 Auto Scaling increases the desired capacity of the group by the number of instances being attached. If the number of instances being attached plus the desired capacity of the group exceeds the maximum size of the group, the operation fails. If there is a Classic Load Balancer attached to your Auto Scaling group, the instances are also registered with the load balancer. If there are target groups attached to your Auto Scaling group, the instances are also registered with the target groups. For more information, see Attach EC2 instances to your Auto Scaling group in the Amazon EC2 Auto Scaling User Guide.
   */
  attachInstances(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Attaches one or more target groups to the specified Auto Scaling group. This operation is used with the following load balancer types:     Application Load Balancer - Operates at the application layer (layer 7) and supports HTTP and HTTPS.     Network Load Balancer - Operates at the transport layer (layer 4) and supports TCP, TLS, and UDP.     Gateway Load Balancer - Operates at the network layer (layer 3).   To describe the target groups for an Auto Scaling group, call the DescribeLoadBalancerTargetGroups API. To detach the target group from the Auto Scaling group, call the DetachLoadBalancerTargetGroups API. For more information, see Elastic Load Balancing and Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide. 
   */
  attachLoadBalancerTargetGroups(params: AutoScaling.Types.AttachLoadBalancerTargetGroupsType, callback?: (err: AWSError, data: AutoScaling.Types.AttachLoadBalancerTargetGroupsResultType) => void): Request<AutoScaling.Types.AttachLoadBalancerTargetGroupsResultType, AWSError>;
  /**
   * Attaches one or more target groups to the specified Auto Scaling group. This operation is used with the following load balancer types:     Application Load Balancer - Operates at the application layer (layer 7) and supports HTTP and HTTPS.     Network Load Balancer - Operates at the transport layer (layer 4) and supports TCP, TLS, and UDP.     Gateway Load Balancer - Operates at the network layer (layer 3).   To describe the target groups for an Auto Scaling group, call the DescribeLoadBalancerTargetGroups API. To detach the target group from the Auto Scaling group, call the DetachLoadBalancerTargetGroups API. For more information, see Elastic Load Balancing and Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide. 
   */
  attachLoadBalancerTargetGroups(callback?: (err: AWSError, data: AutoScaling.Types.AttachLoadBalancerTargetGroupsResultType) => void): Request<AutoScaling.Types.AttachLoadBalancerTargetGroupsResultType, AWSError>;
  /**
   *  To attach an Application Load Balancer, Network Load Balancer, or Gateway Load Balancer, use the AttachLoadBalancerTargetGroups API operation instead.  Attaches one or more Classic Load Balancers to the specified Auto Scaling group. Amazon EC2 Auto Scaling registers the running instances with these Classic Load Balancers. To describe the load balancers for an Auto Scaling group, call the DescribeLoadBalancers API. To detach the load balancer from the Auto Scaling group, call the DetachLoadBalancers API. For more information, see Elastic Load Balancing and Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide. 
   */
  attachLoadBalancers(params: AutoScaling.Types.AttachLoadBalancersType, callback?: (err: AWSError, data: AutoScaling.Types.AttachLoadBalancersResultType) => void): Request<AutoScaling.Types.AttachLoadBalancersResultType, AWSError>;
  /**
   *  To attach an Application Load Balancer, Network Load Balancer, or Gateway Load Balancer, use the AttachLoadBalancerTargetGroups API operation instead.  Attaches one or more Classic Load Balancers to the specified Auto Scaling group. Amazon EC2 Auto Scaling registers the running instances with these Classic Load Balancers. To describe the load balancers for an Auto Scaling group, call the DescribeLoadBalancers API. To detach the load balancer from the Auto Scaling group, call the DetachLoadBalancers API. For more information, see Elastic Load Balancing and Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide. 
   */
  attachLoadBalancers(callback?: (err: AWSError, data: AutoScaling.Types.AttachLoadBalancersResultType) => void): Request<AutoScaling.Types.AttachLoadBalancersResultType, AWSError>;
  /**
   * Deletes one or more scheduled actions for the specified Auto Scaling group.
   */
  batchDeleteScheduledAction(params: AutoScaling.Types.BatchDeleteScheduledActionType, callback?: (err: AWSError, data: AutoScaling.Types.BatchDeleteScheduledActionAnswer) => void): Request<AutoScaling.Types.BatchDeleteScheduledActionAnswer, AWSError>;
  /**
   * Deletes one or more scheduled actions for the specified Auto Scaling group.
   */
  batchDeleteScheduledAction(callback?: (err: AWSError, data: AutoScaling.Types.BatchDeleteScheduledActionAnswer) => void): Request<AutoScaling.Types.BatchDeleteScheduledActionAnswer, AWSError>;
  /**
   * Creates or updates one or more scheduled scaling actions for an Auto Scaling group. If you leave a parameter unspecified when updating a scheduled scaling action, the corresponding value remains unchanged.
   */
  batchPutScheduledUpdateGroupAction(params: AutoScaling.Types.BatchPutScheduledUpdateGroupActionType, callback?: (err: AWSError, data: AutoScaling.Types.BatchPutScheduledUpdateGroupActionAnswer) => void): Request<AutoScaling.Types.BatchPutScheduledUpdateGroupActionAnswer, AWSError>;
  /**
   * Creates or updates one or more scheduled scaling actions for an Auto Scaling group. If you leave a parameter unspecified when updating a scheduled scaling action, the corresponding value remains unchanged.
   */
  batchPutScheduledUpdateGroupAction(callback?: (err: AWSError, data: AutoScaling.Types.BatchPutScheduledUpdateGroupActionAnswer) => void): Request<AutoScaling.Types.BatchPutScheduledUpdateGroupActionAnswer, AWSError>;
  /**
   * Cancels an instance refresh operation in progress. Cancellation does not roll back any replacements that have already been completed, but it prevents new replacements from being started.  For more information, see Replacing Auto Scaling Instances Based on an Instance Refresh.
   */
  cancelInstanceRefresh(params: AutoScaling.Types.CancelInstanceRefreshType, callback?: (err: AWSError, data: AutoScaling.Types.CancelInstanceRefreshAnswer) => void): Request<AutoScaling.Types.CancelInstanceRefreshAnswer, AWSError>;
  /**
   * Cancels an instance refresh operation in progress. Cancellation does not roll back any replacements that have already been completed, but it prevents new replacements from being started.  For more information, see Replacing Auto Scaling Instances Based on an Instance Refresh.
   */
  cancelInstanceRefresh(callback?: (err: AWSError, data: AutoScaling.Types.CancelInstanceRefreshAnswer) => void): Request<AutoScaling.Types.CancelInstanceRefreshAnswer, AWSError>;
  /**
   * Completes the lifecycle action for the specified token or instance with the specified result. This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:   (Optional) Create a Lambda function and a rule that allows CloudWatch Events to invoke your Lambda function when Amazon EC2 Auto Scaling launches or terminates instances.   (Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.   Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.   If you need more time, record the lifecycle action heartbeat to keep the instance in a pending state.    If you finish before the timeout period ends, complete the lifecycle action.    For more information, see Amazon EC2 Auto Scaling lifecycle hooks in the Amazon EC2 Auto Scaling User Guide.
   */
  completeLifecycleAction(params: AutoScaling.Types.CompleteLifecycleActionType, callback?: (err: AWSError, data: AutoScaling.Types.CompleteLifecycleActionAnswer) => void): Request<AutoScaling.Types.CompleteLifecycleActionAnswer, AWSError>;
  /**
   * Completes the lifecycle action for the specified token or instance with the specified result. This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:   (Optional) Create a Lambda function and a rule that allows CloudWatch Events to invoke your Lambda function when Amazon EC2 Auto Scaling launches or terminates instances.   (Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.   Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.   If you need more time, record the lifecycle action heartbeat to keep the instance in a pending state.    If you finish before the timeout period ends, complete the lifecycle action.    For more information, see Amazon EC2 Auto Scaling lifecycle hooks in the Amazon EC2 Auto Scaling User Guide.
   */
  completeLifecycleAction(callback?: (err: AWSError, data: AutoScaling.Types.CompleteLifecycleActionAnswer) => void): Request<AutoScaling.Types.CompleteLifecycleActionAnswer, AWSError>;
  /**
   *  We strongly recommend using a launch template when calling this operation to ensure full functionality for Amazon EC2 Auto Scaling and Amazon EC2.  Creates an Auto Scaling group with the specified name and attributes.  If you exceed your maximum limit of Auto Scaling groups, the call fails. To query this limit, call the DescribeAccountLimits API. For information about updating this limit, see Amazon EC2 Auto Scaling service quotas in the Amazon EC2 Auto Scaling User Guide. For introductory exercises for creating an Auto Scaling group, see Getting started with Amazon EC2 Auto Scaling and Tutorial: Set up a scaled and load-balanced application in the Amazon EC2 Auto Scaling User Guide. For more information, see Auto Scaling groups in the Amazon EC2 Auto Scaling User Guide. Every Auto Scaling group has three size parameters (DesiredCapacity, MaxSize, and MinSize). Usually, you set these sizes based on a specific number of instances. However, if you configure a mixed instances policy that defines weights for the instance types, you must specify these sizes with the same units that you use for weighting instances.
   */
  createAutoScalingGroup(params: AutoScaling.Types.CreateAutoScalingGroupType, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  We strongly recommend using a launch template when calling this operation to ensure full functionality for Amazon EC2 Auto Scaling and Amazon EC2.  Creates an Auto Scaling group with the specified name and attributes.  If you exceed your maximum limit of Auto Scaling groups, the call fails. To query this limit, call the DescribeAccountLimits API. For information about updating this limit, see Amazon EC2 Auto Scaling service quotas in the Amazon EC2 Auto Scaling User Guide. For introductory exercises for creating an Auto Scaling group, see Getting started with Amazon EC2 Auto Scaling and Tutorial: Set up a scaled and load-balanced application in the Amazon EC2 Auto Scaling User Guide. For more information, see Auto Scaling groups in the Amazon EC2 Auto Scaling User Guide. Every Auto Scaling group has three size parameters (DesiredCapacity, MaxSize, and MinSize). Usually, you set these sizes based on a specific number of instances. However, if you configure a mixed instances policy that defines weights for the instance types, you must specify these sizes with the same units that you use for weighting instances.
   */
  createAutoScalingGroup(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates a launch configuration. If you exceed your maximum limit of launch configurations, the call fails. To query this limit, call the DescribeAccountLimits API. For information about updating this limit, see Amazon EC2 Auto Scaling service quotas in the Amazon EC2 Auto Scaling User Guide. For more information, see Launch configurations in the Amazon EC2 Auto Scaling User Guide.
   */
  createLaunchConfiguration(params: AutoScaling.Types.CreateLaunchConfigurationType, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates a launch configuration. If you exceed your maximum limit of launch configurations, the call fails. To query this limit, call the DescribeAccountLimits API. For information about updating this limit, see Amazon EC2 Auto Scaling service quotas in the Amazon EC2 Auto Scaling User Guide. For more information, see Launch configurations in the Amazon EC2 Auto Scaling User Guide.
   */
  createLaunchConfiguration(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates or updates tags for the specified Auto Scaling group. When you specify a tag with a key that already exists, the operation overwrites the previous tag definition, and you do not get an error message. For more information, see Tagging Auto Scaling groups and instances in the Amazon EC2 Auto Scaling User Guide.
   */
  createOrUpdateTags(params: AutoScaling.Types.CreateOrUpdateTagsType, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates or updates tags for the specified Auto Scaling group. When you specify a tag with a key that already exists, the operation overwrites the previous tag definition, and you do not get an error message. For more information, see Tagging Auto Scaling groups and instances in the Amazon EC2 Auto Scaling User Guide.
   */
  createOrUpdateTags(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified Auto Scaling group. If the group has instances or scaling activities in progress, you must specify the option to force the deletion in order for it to succeed. If the group has policies, deleting the group deletes the policies, the underlying alarm actions, and any alarm that no longer has an associated action. To remove instances from the Auto Scaling group before deleting it, call the DetachInstances API with the list of instances and the option to decrement the desired capacity. This ensures that Amazon EC2 Auto Scaling does not launch replacement instances. To terminate all instances before deleting the Auto Scaling group, call the UpdateAutoScalingGroup API and set the minimum size and desired capacity of the Auto Scaling group to zero.
   */
  deleteAutoScalingGroup(params: AutoScaling.Types.DeleteAutoScalingGroupType, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified Auto Scaling group. If the group has instances or scaling activities in progress, you must specify the option to force the deletion in order for it to succeed. If the group has policies, deleting the group deletes the policies, the underlying alarm actions, and any alarm that no longer has an associated action. To remove instances from the Auto Scaling group before deleting it, call the DetachInstances API with the list of instances and the option to decrement the desired capacity. This ensures that Amazon EC2 Auto Scaling does not launch replacement instances. To terminate all instances before deleting the Auto Scaling group, call the UpdateAutoScalingGroup API and set the minimum size and desired capacity of the Auto Scaling group to zero.
   */
  deleteAutoScalingGroup(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified launch configuration. The launch configuration must not be attached to an Auto Scaling group. When this call completes, the launch configuration is no longer available for use.
   */
  deleteLaunchConfiguration(params: AutoScaling.Types.LaunchConfigurationNameType, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified launch configuration. The launch configuration must not be attached to an Auto Scaling group. When this call completes, the launch configuration is no longer available for use.
   */
  deleteLaunchConfiguration(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified lifecycle hook. If there are any outstanding lifecycle actions, they are completed first (ABANDON for launching instances, CONTINUE for terminating instances).
   */
  deleteLifecycleHook(params: AutoScaling.Types.DeleteLifecycleHookType, callback?: (err: AWSError, data: AutoScaling.Types.DeleteLifecycleHookAnswer) => void): Request<AutoScaling.Types.DeleteLifecycleHookAnswer, AWSError>;
  /**
   * Deletes the specified lifecycle hook. If there are any outstanding lifecycle actions, they are completed first (ABANDON for launching instances, CONTINUE for terminating instances).
   */
  deleteLifecycleHook(callback?: (err: AWSError, data: AutoScaling.Types.DeleteLifecycleHookAnswer) => void): Request<AutoScaling.Types.DeleteLifecycleHookAnswer, AWSError>;
  /**
   * Deletes the specified notification.
   */
  deleteNotificationConfiguration(params: AutoScaling.Types.DeleteNotificationConfigurationType, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified notification.
   */
  deleteNotificationConfiguration(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified scaling policy. Deleting either a step scaling policy or a simple scaling policy deletes the underlying alarm action, but does not delete the alarm, even if it no longer has an associated action. For more information, see Deleting a scaling policy in the Amazon EC2 Auto Scaling User Guide.
   */
  deletePolicy(params: AutoScaling.Types.DeletePolicyType, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified scaling policy. Deleting either a step scaling policy or a simple scaling policy deletes the underlying alarm action, but does not delete the alarm, even if it no longer has an associated action. For more information, see Deleting a scaling policy in the Amazon EC2 Auto Scaling User Guide.
   */
  deletePolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified scheduled action.
   */
  deleteScheduledAction(params: AutoScaling.Types.DeleteScheduledActionType, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified scheduled action.
   */
  deleteScheduledAction(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified tags.
   */
  deleteTags(params: AutoScaling.Types.DeleteTagsType, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified tags.
   */
  deleteTags(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Describes the current Amazon EC2 Auto Scaling resource quotas for your AWS account. For information about requesting an increase, see Amazon EC2 Auto Scaling service quotas in the Amazon EC2 Auto Scaling User Guide.
   */
  describeAccountLimits(callback?: (err: AWSError, data: AutoScaling.Types.DescribeAccountLimitsAnswer) => void): Request<AutoScaling.Types.DescribeAccountLimitsAnswer, AWSError>;
  /**
   * Describes the available adjustment types for Amazon EC2 Auto Scaling scaling policies. These settings apply to step scaling policies and simple scaling policies; they do not apply to target tracking scaling policies. The following adjustment types are supported:   ChangeInCapacity   ExactCapacity   PercentChangeInCapacity  
   */
  describeAdjustmentTypes(callback?: (err: AWSError, data: AutoScaling.Types.DescribeAdjustmentTypesAnswer) => void): Request<AutoScaling.Types.DescribeAdjustmentTypesAnswer, AWSError>;
  /**
   * Describes one or more Auto Scaling groups.
   */
  describeAutoScalingGroups(params: AutoScaling.Types.AutoScalingGroupNamesType, callback?: (err: AWSError, data: AutoScaling.Types.AutoScalingGroupsType) => void): Request<AutoScaling.Types.AutoScalingGroupsType, AWSError>;
  /**
   * Describes one or more Auto Scaling groups.
   */
  describeAutoScalingGroups(callback?: (err: AWSError, data: AutoScaling.Types.AutoScalingGroupsType) => void): Request<AutoScaling.Types.AutoScalingGroupsType, AWSError>;
  /**
   * Describes one or more Auto Scaling instances.
   */
  describeAutoScalingInstances(params: AutoScaling.Types.DescribeAutoScalingInstancesType, callback?: (err: AWSError, data: AutoScaling.Types.AutoScalingInstancesType) => void): Request<AutoScaling.Types.AutoScalingInstancesType, AWSError>;
  /**
   * Describes one or more Auto Scaling instances.
   */
  describeAutoScalingInstances(callback?: (err: AWSError, data: AutoScaling.Types.AutoScalingInstancesType) => void): Request<AutoScaling.Types.AutoScalingInstancesType, AWSError>;
  /**
   * Describes the notification types that are supported by Amazon EC2 Auto Scaling.
   */
  describeAutoScalingNotificationTypes(callback?: (err: AWSError, data: AutoScaling.Types.DescribeAutoScalingNotificationTypesAnswer) => void): Request<AutoScaling.Types.DescribeAutoScalingNotificationTypesAnswer, AWSError>;
  /**
   * Describes one or more instance refreshes. You can determine the status of a request by looking at the Status parameter. The following are the possible statuses:     Pending - The request was created, but the operation has not started.    InProgress - The operation is in progress.    Successful - The operation completed successfully.    Failed - The operation failed to complete. You can troubleshoot using the status reason and the scaling activities.     Cancelling - An ongoing operation is being cancelled. Cancellation does not roll back any replacements that have already been completed, but it prevents new replacements from being started.     Cancelled - The operation is cancelled.    For more information, see Replacing Auto Scaling Instances Based on an Instance Refresh.
   */
  describeInstanceRefreshes(params: AutoScaling.Types.DescribeInstanceRefreshesType, callback?: (err: AWSError, data: AutoScaling.Types.DescribeInstanceRefreshesAnswer) => void): Request<AutoScaling.Types.DescribeInstanceRefreshesAnswer, AWSError>;
  /**
   * Describes one or more instance refreshes. You can determine the status of a request by looking at the Status parameter. The following are the possible statuses:     Pending - The request was created, but the operation has not started.    InProgress - The operation is in progress.    Successful - The operation completed successfully.    Failed - The operation failed to complete. You can troubleshoot using the status reason and the scaling activities.     Cancelling - An ongoing operation is being cancelled. Cancellation does not roll back any replacements that have already been completed, but it prevents new replacements from being started.     Cancelled - The operation is cancelled.    For more information, see Replacing Auto Scaling Instances Based on an Instance Refresh.
   */
  describeInstanceRefreshes(callback?: (err: AWSError, data: AutoScaling.Types.DescribeInstanceRefreshesAnswer) => void): Request<AutoScaling.Types.DescribeInstanceRefreshesAnswer, AWSError>;
  /**
   * Describes one or more launch configurations.
   */
  describeLaunchConfigurations(params: AutoScaling.Types.LaunchConfigurationNamesType, callback?: (err: AWSError, data: AutoScaling.Types.LaunchConfigurationsType) => void): Request<AutoScaling.Types.LaunchConfigurationsType, AWSError>;
  /**
   * Describes one or more launch configurations.
   */
  describeLaunchConfigurations(callback?: (err: AWSError, data: AutoScaling.Types.LaunchConfigurationsType) => void): Request<AutoScaling.Types.LaunchConfigurationsType, AWSError>;
  /**
   * Describes the available types of lifecycle hooks. The following hook types are supported:   autoscaling:EC2_INSTANCE_LAUNCHING   autoscaling:EC2_INSTANCE_TERMINATING  
   */
  describeLifecycleHookTypes(callback?: (err: AWSError, data: AutoScaling.Types.DescribeLifecycleHookTypesAnswer) => void): Request<AutoScaling.Types.DescribeLifecycleHookTypesAnswer, AWSError>;
  /**
   * Describes the lifecycle hooks for the specified Auto Scaling group.
   */
  describeLifecycleHooks(params: AutoScaling.Types.DescribeLifecycleHooksType, callback?: (err: AWSError, data: AutoScaling.Types.DescribeLifecycleHooksAnswer) => void): Request<AutoScaling.Types.DescribeLifecycleHooksAnswer, AWSError>;
  /**
   * Describes the lifecycle hooks for the specified Auto Scaling group.
   */
  describeLifecycleHooks(callback?: (err: AWSError, data: AutoScaling.Types.DescribeLifecycleHooksAnswer) => void): Request<AutoScaling.Types.DescribeLifecycleHooksAnswer, AWSError>;
  /**
   * Describes the target groups for the specified Auto Scaling group.
   */
  describeLoadBalancerTargetGroups(params: AutoScaling.Types.DescribeLoadBalancerTargetGroupsRequest, callback?: (err: AWSError, data: AutoScaling.Types.DescribeLoadBalancerTargetGroupsResponse) => void): Request<AutoScaling.Types.DescribeLoadBalancerTargetGroupsResponse, AWSError>;
  /**
   * Describes the target groups for the specified Auto Scaling group.
   */
  describeLoadBalancerTargetGroups(callback?: (err: AWSError, data: AutoScaling.Types.DescribeLoadBalancerTargetGroupsResponse) => void): Request<AutoScaling.Types.DescribeLoadBalancerTargetGroupsResponse, AWSError>;
  /**
   * Describes the load balancers for the specified Auto Scaling group. This operation describes only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or Gateway Load Balancers, use the DescribeLoadBalancerTargetGroups API instead.
   */
  describeLoadBalancers(params: AutoScaling.Types.DescribeLoadBalancersRequest, callback?: (err: AWSError, data: AutoScaling.Types.DescribeLoadBalancersResponse) => void): Request<AutoScaling.Types.DescribeLoadBalancersResponse, AWSError>;
  /**
   * Describes the load balancers for the specified Auto Scaling group. This operation describes only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or Gateway Load Balancers, use the DescribeLoadBalancerTargetGroups API instead.
   */
  describeLoadBalancers(callback?: (err: AWSError, data: AutoScaling.Types.DescribeLoadBalancersResponse) => void): Request<AutoScaling.Types.DescribeLoadBalancersResponse, AWSError>;
  /**
   * Describes the available CloudWatch metrics for Amazon EC2 Auto Scaling. The GroupStandbyInstances metric is not returned by default. You must explicitly request this metric when calling the EnableMetricsCollection API.
   */
  describeMetricCollectionTypes(callback?: (err: AWSError, data: AutoScaling.Types.DescribeMetricCollectionTypesAnswer) => void): Request<AutoScaling.Types.DescribeMetricCollectionTypesAnswer, AWSError>;
  /**
   * Describes the notification actions associated with the specified Auto Scaling group.
   */
  describeNotificationConfigurations(params: AutoScaling.Types.DescribeNotificationConfigurationsType, callback?: (err: AWSError, data: AutoScaling.Types.DescribeNotificationConfigurationsAnswer) => void): Request<AutoScaling.Types.DescribeNotificationConfigurationsAnswer, AWSError>;
  /**
   * Describes the notification actions associated with the specified Auto Scaling group.
   */
  describeNotificationConfigurations(callback?: (err: AWSError, data: AutoScaling.Types.DescribeNotificationConfigurationsAnswer) => void): Request<AutoScaling.Types.DescribeNotificationConfigurationsAnswer, AWSError>;
  /**
   * Describes the policies for the specified Auto Scaling group.
   */
  describePolicies(params: AutoScaling.Types.DescribePoliciesType, callback?: (err: AWSError, data: AutoScaling.Types.PoliciesType) => void): Request<AutoScaling.Types.PoliciesType, AWSError>;
  /**
   * Describes the policies for the specified Auto Scaling group.
   */
  describePolicies(callback?: (err: AWSError, data: AutoScaling.Types.PoliciesType) => void): Request<AutoScaling.Types.PoliciesType, AWSError>;
  /**
   * Describes one or more scaling activities for the specified Auto Scaling group.
   */
  describeScalingActivities(params: AutoScaling.Types.DescribeScalingActivitiesType, callback?: (err: AWSError, data: AutoScaling.Types.ActivitiesType) => void): Request<AutoScaling.Types.ActivitiesType, AWSError>;
  /**
   * Describes one or more scaling activities for the specified Auto Scaling group.
   */
  describeScalingActivities(callback?: (err: AWSError, data: AutoScaling.Types.ActivitiesType) => void): Request<AutoScaling.Types.ActivitiesType, AWSError>;
  /**
   * Describes the scaling process types for use with the ResumeProcesses and SuspendProcesses APIs.
   */
  describeScalingProcessTypes(callback?: (err: AWSError, data: AutoScaling.Types.ProcessesType) => void): Request<AutoScaling.Types.ProcessesType, AWSError>;
  /**
   * Describes the actions scheduled for your Auto Scaling group that haven't run or that have not reached their end time. To describe the actions that have already run, call the DescribeScalingActivities API.
   */
  describeScheduledActions(params: AutoScaling.Types.DescribeScheduledActionsType, callback?: (err: AWSError, data: AutoScaling.Types.ScheduledActionsType) => void): Request<AutoScaling.Types.ScheduledActionsType, AWSError>;
  /**
   * Describes the actions scheduled for your Auto Scaling group that haven't run or that have not reached their end time. To describe the actions that have already run, call the DescribeScalingActivities API.
   */
  describeScheduledActions(callback?: (err: AWSError, data: AutoScaling.Types.ScheduledActionsType) => void): Request<AutoScaling.Types.ScheduledActionsType, AWSError>;
  /**
   * Describes the specified tags. You can use filters to limit the results. For example, you can query for the tags for a specific Auto Scaling group. You can specify multiple values for a filter. A tag must match at least one of the specified values for it to be included in the results. You can also specify multiple filters. The result includes information for a particular tag only if it matches all the filters. If there's no match, no special message is returned. For more information, see Tagging Auto Scaling groups and instances in the Amazon EC2 Auto Scaling User Guide.
   */
  describeTags(params: AutoScaling.Types.DescribeTagsType, callback?: (err: AWSError, data: AutoScaling.Types.TagsType) => void): Request<AutoScaling.Types.TagsType, AWSError>;
  /**
   * Describes the specified tags. You can use filters to limit the results. For example, you can query for the tags for a specific Auto Scaling group. You can specify multiple values for a filter. A tag must match at least one of the specified values for it to be included in the results. You can also specify multiple filters. The result includes information for a particular tag only if it matches all the filters. If there's no match, no special message is returned. For more information, see Tagging Auto Scaling groups and instances in the Amazon EC2 Auto Scaling User Guide.
   */
  describeTags(callback?: (err: AWSError, data: AutoScaling.Types.TagsType) => void): Request<AutoScaling.Types.TagsType, AWSError>;
  /**
   * Describes the termination policies supported by Amazon EC2 Auto Scaling. For more information, see Controlling which Auto Scaling instances terminate during scale in in the Amazon EC2 Auto Scaling User Guide.
   */
  describeTerminationPolicyTypes(callback?: (err: AWSError, data: AutoScaling.Types.DescribeTerminationPolicyTypesAnswer) => void): Request<AutoScaling.Types.DescribeTerminationPolicyTypesAnswer, AWSError>;
  /**
   * Removes one or more instances from the specified Auto Scaling group. After the instances are detached, you can manage them independent of the Auto Scaling group. If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches instances to replace the ones that are detached. If there is a Classic Load Balancer attached to the Auto Scaling group, the instances are deregistered from the load balancer. If there are target groups attached to the Auto Scaling group, the instances are deregistered from the target groups. For more information, see Detach EC2 instances from your Auto Scaling group in the Amazon EC2 Auto Scaling User Guide.
   */
  detachInstances(params: AutoScaling.Types.DetachInstancesQuery, callback?: (err: AWSError, data: AutoScaling.Types.DetachInstancesAnswer) => void): Request<AutoScaling.Types.DetachInstancesAnswer, AWSError>;
  /**
   * Removes one or more instances from the specified Auto Scaling group. After the instances are detached, you can manage them independent of the Auto Scaling group. If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches instances to replace the ones that are detached. If there is a Classic Load Balancer attached to the Auto Scaling group, the instances are deregistered from the load balancer. If there are target groups attached to the Auto Scaling group, the instances are deregistered from the target groups. For more information, see Detach EC2 instances from your Auto Scaling group in the Amazon EC2 Auto Scaling User Guide.
   */
  detachInstances(callback?: (err: AWSError, data: AutoScaling.Types.DetachInstancesAnswer) => void): Request<AutoScaling.Types.DetachInstancesAnswer, AWSError>;
  /**
   * Detaches one or more target groups from the specified Auto Scaling group.
   */
  detachLoadBalancerTargetGroups(params: AutoScaling.Types.DetachLoadBalancerTargetGroupsType, callback?: (err: AWSError, data: AutoScaling.Types.DetachLoadBalancerTargetGroupsResultType) => void): Request<AutoScaling.Types.DetachLoadBalancerTargetGroupsResultType, AWSError>;
  /**
   * Detaches one or more target groups from the specified Auto Scaling group.
   */
  detachLoadBalancerTargetGroups(callback?: (err: AWSError, data: AutoScaling.Types.DetachLoadBalancerTargetGroupsResultType) => void): Request<AutoScaling.Types.DetachLoadBalancerTargetGroupsResultType, AWSError>;
  /**
   * Detaches one or more Classic Load Balancers from the specified Auto Scaling group. This operation detaches only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or Gateway Load Balancers, use the DetachLoadBalancerTargetGroups API instead. When you detach a load balancer, it enters the Removing state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the load balancer using the DescribeLoadBalancers API call. The instances remain running.
   */
  detachLoadBalancers(params: AutoScaling.Types.DetachLoadBalancersType, callback?: (err: AWSError, data: AutoScaling.Types.DetachLoadBalancersResultType) => void): Request<AutoScaling.Types.DetachLoadBalancersResultType, AWSError>;
  /**
   * Detaches one or more Classic Load Balancers from the specified Auto Scaling group. This operation detaches only Classic Load Balancers. If you have Application Load Balancers, Network Load Balancers, or Gateway Load Balancers, use the DetachLoadBalancerTargetGroups API instead. When you detach a load balancer, it enters the Removing state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the load balancer using the DescribeLoadBalancers API call. The instances remain running.
   */
  detachLoadBalancers(callback?: (err: AWSError, data: AutoScaling.Types.DetachLoadBalancersResultType) => void): Request<AutoScaling.Types.DetachLoadBalancersResultType, AWSError>;
  /**
   * Disables group metrics for the specified Auto Scaling group.
   */
  disableMetricsCollection(params: AutoScaling.Types.DisableMetricsCollectionQuery, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disables group metrics for the specified Auto Scaling group.
   */
  disableMetricsCollection(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Enables group metrics for the specified Auto Scaling group. For more information, see Monitoring CloudWatch metrics for your Auto Scaling groups and instances in the Amazon EC2 Auto Scaling User Guide.
   */
  enableMetricsCollection(params: AutoScaling.Types.EnableMetricsCollectionQuery, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Enables group metrics for the specified Auto Scaling group. For more information, see Monitoring CloudWatch metrics for your Auto Scaling groups and instances in the Amazon EC2 Auto Scaling User Guide.
   */
  enableMetricsCollection(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Moves the specified instances into the standby state. If you choose to decrement the desired capacity of the Auto Scaling group, the instances can enter standby as long as the desired capacity of the Auto Scaling group after the instances are placed into standby is equal to or greater than the minimum capacity of the group. If you choose not to decrement the desired capacity of the Auto Scaling group, the Auto Scaling group launches new instances to replace the instances on standby. For more information, see Temporarily removing instances from your Auto Scaling group in the Amazon EC2 Auto Scaling User Guide.
   */
  enterStandby(params: AutoScaling.Types.EnterStandbyQuery, callback?: (err: AWSError, data: AutoScaling.Types.EnterStandbyAnswer) => void): Request<AutoScaling.Types.EnterStandbyAnswer, AWSError>;
  /**
   * Moves the specified instances into the standby state. If you choose to decrement the desired capacity of the Auto Scaling group, the instances can enter standby as long as the desired capacity of the Auto Scaling group after the instances are placed into standby is equal to or greater than the minimum capacity of the group. If you choose not to decrement the desired capacity of the Auto Scaling group, the Auto Scaling group launches new instances to replace the instances on standby. For more information, see Temporarily removing instances from your Auto Scaling group in the Amazon EC2 Auto Scaling User Guide.
   */
  enterStandby(callback?: (err: AWSError, data: AutoScaling.Types.EnterStandbyAnswer) => void): Request<AutoScaling.Types.EnterStandbyAnswer, AWSError>;
  /**
   * Executes the specified policy. This can be useful for testing the design of your scaling policy.
   */
  executePolicy(params: AutoScaling.Types.ExecutePolicyType, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Executes the specified policy. This can be useful for testing the design of your scaling policy.
   */
  executePolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Moves the specified instances out of the standby state. After you put the instances back in service, the desired capacity is incremented. For more information, see Temporarily removing instances from your Auto Scaling group in the Amazon EC2 Auto Scaling User Guide.
   */
  exitStandby(params: AutoScaling.Types.ExitStandbyQuery, callback?: (err: AWSError, data: AutoScaling.Types.ExitStandbyAnswer) => void): Request<AutoScaling.Types.ExitStandbyAnswer, AWSError>;
  /**
   * Moves the specified instances out of the standby state. After you put the instances back in service, the desired capacity is incremented. For more information, see Temporarily removing instances from your Auto Scaling group in the Amazon EC2 Auto Scaling User Guide.
   */
  exitStandby(callback?: (err: AWSError, data: AutoScaling.Types.ExitStandbyAnswer) => void): Request<AutoScaling.Types.ExitStandbyAnswer, AWSError>;
  /**
   * Creates or updates a lifecycle hook for the specified Auto Scaling group. A lifecycle hook tells Amazon EC2 Auto Scaling to perform an action on an instance when the instance launches (before it is put into service) or as the instance terminates (before it is fully terminated). This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:   (Optional) Create a Lambda function and a rule that allows CloudWatch Events to invoke your Lambda function when Amazon EC2 Auto Scaling launches or terminates instances.   (Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.    Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.    If you need more time, record the lifecycle action heartbeat to keep the instance in a pending state using the RecordLifecycleActionHeartbeat API call.   If you finish before the timeout period ends, complete the lifecycle action using the CompleteLifecycleAction API call.   For more information, see Amazon EC2 Auto Scaling lifecycle hooks in the Amazon EC2 Auto Scaling User Guide. If you exceed your maximum limit of lifecycle hooks, which by default is 50 per Auto Scaling group, the call fails. You can view the lifecycle hooks for an Auto Scaling group using the DescribeLifecycleHooks API call. If you are no longer using a lifecycle hook, you can delete it by calling the DeleteLifecycleHook API.
   */
  putLifecycleHook(params: AutoScaling.Types.PutLifecycleHookType, callback?: (err: AWSError, data: AutoScaling.Types.PutLifecycleHookAnswer) => void): Request<AutoScaling.Types.PutLifecycleHookAnswer, AWSError>;
  /**
   * Creates or updates a lifecycle hook for the specified Auto Scaling group. A lifecycle hook tells Amazon EC2 Auto Scaling to perform an action on an instance when the instance launches (before it is put into service) or as the instance terminates (before it is fully terminated). This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:   (Optional) Create a Lambda function and a rule that allows CloudWatch Events to invoke your Lambda function when Amazon EC2 Auto Scaling launches or terminates instances.   (Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.    Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.    If you need more time, record the lifecycle action heartbeat to keep the instance in a pending state using the RecordLifecycleActionHeartbeat API call.   If you finish before the timeout period ends, complete the lifecycle action using the CompleteLifecycleAction API call.   For more information, see Amazon EC2 Auto Scaling lifecycle hooks in the Amazon EC2 Auto Scaling User Guide. If you exceed your maximum limit of lifecycle hooks, which by default is 50 per Auto Scaling group, the call fails. You can view the lifecycle hooks for an Auto Scaling group using the DescribeLifecycleHooks API call. If you are no longer using a lifecycle hook, you can delete it by calling the DeleteLifecycleHook API.
   */
  putLifecycleHook(callback?: (err: AWSError, data: AutoScaling.Types.PutLifecycleHookAnswer) => void): Request<AutoScaling.Types.PutLifecycleHookAnswer, AWSError>;
  /**
   * Configures an Auto Scaling group to send notifications when specified events take place. Subscribers to the specified topic can have messages delivered to an endpoint such as a web server or an email address. This configuration overwrites any existing configuration. For more information, see Getting Amazon SNS notifications when your Auto Scaling group scales in the Amazon EC2 Auto Scaling User Guide. If you exceed your maximum limit of SNS topics, which is 10 per Auto Scaling group, the call fails.
   */
  putNotificationConfiguration(params: AutoScaling.Types.PutNotificationConfigurationType, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Configures an Auto Scaling group to send notifications when specified events take place. Subscribers to the specified topic can have messages delivered to an endpoint such as a web server or an email address. This configuration overwrites any existing configuration. For more information, see Getting Amazon SNS notifications when your Auto Scaling group scales in the Amazon EC2 Auto Scaling User Guide. If you exceed your maximum limit of SNS topics, which is 10 per Auto Scaling group, the call fails.
   */
  putNotificationConfiguration(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates or updates a scaling policy for an Auto Scaling group. For more information about using scaling policies to scale your Auto Scaling group, see Target tracking scaling policies and Step and simple scaling policies in the Amazon EC2 Auto Scaling User Guide.
   */
  putScalingPolicy(params: AutoScaling.Types.PutScalingPolicyType, callback?: (err: AWSError, data: AutoScaling.Types.PolicyARNType) => void): Request<AutoScaling.Types.PolicyARNType, AWSError>;
  /**
   * Creates or updates a scaling policy for an Auto Scaling group. For more information about using scaling policies to scale your Auto Scaling group, see Target tracking scaling policies and Step and simple scaling policies in the Amazon EC2 Auto Scaling User Guide.
   */
  putScalingPolicy(callback?: (err: AWSError, data: AutoScaling.Types.PolicyARNType) => void): Request<AutoScaling.Types.PolicyARNType, AWSError>;
  /**
   * Creates or updates a scheduled scaling action for an Auto Scaling group. If you leave a parameter unspecified when updating a scheduled scaling action, the corresponding value remains unchanged. For more information, see Scheduled scaling in the Amazon EC2 Auto Scaling User Guide.
   */
  putScheduledUpdateGroupAction(params: AutoScaling.Types.PutScheduledUpdateGroupActionType, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates or updates a scheduled scaling action for an Auto Scaling group. If you leave a parameter unspecified when updating a scheduled scaling action, the corresponding value remains unchanged. For more information, see Scheduled scaling in the Amazon EC2 Auto Scaling User Guide.
   */
  putScheduledUpdateGroupAction(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Records a heartbeat for the lifecycle action associated with the specified token or instance. This extends the timeout by the length of time defined using the PutLifecycleHook API call. This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:   (Optional) Create a Lambda function and a rule that allows CloudWatch Events to invoke your Lambda function when Amazon EC2 Auto Scaling launches or terminates instances.   (Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.   Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.    If you need more time, record the lifecycle action heartbeat to keep the instance in a pending state.    If you finish before the timeout period ends, complete the lifecycle action.   For more information, see Auto Scaling lifecycle in the Amazon EC2 Auto Scaling User Guide.
   */
  recordLifecycleActionHeartbeat(params: AutoScaling.Types.RecordLifecycleActionHeartbeatType, callback?: (err: AWSError, data: AutoScaling.Types.RecordLifecycleActionHeartbeatAnswer) => void): Request<AutoScaling.Types.RecordLifecycleActionHeartbeatAnswer, AWSError>;
  /**
   * Records a heartbeat for the lifecycle action associated with the specified token or instance. This extends the timeout by the length of time defined using the PutLifecycleHook API call. This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:   (Optional) Create a Lambda function and a rule that allows CloudWatch Events to invoke your Lambda function when Amazon EC2 Auto Scaling launches or terminates instances.   (Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.   Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.    If you need more time, record the lifecycle action heartbeat to keep the instance in a pending state.    If you finish before the timeout period ends, complete the lifecycle action.   For more information, see Auto Scaling lifecycle in the Amazon EC2 Auto Scaling User Guide.
   */
  recordLifecycleActionHeartbeat(callback?: (err: AWSError, data: AutoScaling.Types.RecordLifecycleActionHeartbeatAnswer) => void): Request<AutoScaling.Types.RecordLifecycleActionHeartbeatAnswer, AWSError>;
  /**
   * Resumes the specified suspended auto scaling processes, or all suspended process, for the specified Auto Scaling group. For more information, see Suspending and resuming scaling processes in the Amazon EC2 Auto Scaling User Guide.
   */
  resumeProcesses(params: AutoScaling.Types.ScalingProcessQuery, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Resumes the specified suspended auto scaling processes, or all suspended process, for the specified Auto Scaling group. For more information, see Suspending and resuming scaling processes in the Amazon EC2 Auto Scaling User Guide.
   */
  resumeProcesses(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the size of the specified Auto Scaling group. If a scale-in activity occurs as a result of a new DesiredCapacity value that is lower than the current size of the group, the Auto Scaling group uses its termination policy to determine which instances to terminate.  For more information, see Manual scaling in the Amazon EC2 Auto Scaling User Guide.
   */
  setDesiredCapacity(params: AutoScaling.Types.SetDesiredCapacityType, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the size of the specified Auto Scaling group. If a scale-in activity occurs as a result of a new DesiredCapacity value that is lower than the current size of the group, the Auto Scaling group uses its termination policy to determine which instances to terminate.  For more information, see Manual scaling in the Amazon EC2 Auto Scaling User Guide.
   */
  setDesiredCapacity(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the health status of the specified instance. For more information, see Health checks for Auto Scaling instances in the Amazon EC2 Auto Scaling User Guide.
   */
  setInstanceHealth(params: AutoScaling.Types.SetInstanceHealthQuery, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the health status of the specified instance. For more information, see Health checks for Auto Scaling instances in the Amazon EC2 Auto Scaling User Guide.
   */
  setInstanceHealth(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the instance protection settings of the specified instances. For more information about preventing instances that are part of an Auto Scaling group from terminating on scale in, see Instance scale-in protection in the Amazon EC2 Auto Scaling User Guide. If you exceed your maximum limit of instance IDs, which is 50 per Auto Scaling group, the call fails.
   */
  setInstanceProtection(params: AutoScaling.Types.SetInstanceProtectionQuery, callback?: (err: AWSError, data: AutoScaling.Types.SetInstanceProtectionAnswer) => void): Request<AutoScaling.Types.SetInstanceProtectionAnswer, AWSError>;
  /**
   * Updates the instance protection settings of the specified instances. For more information about preventing instances that are part of an Auto Scaling group from terminating on scale in, see Instance scale-in protection in the Amazon EC2 Auto Scaling User Guide. If you exceed your maximum limit of instance IDs, which is 50 per Auto Scaling group, the call fails.
   */
  setInstanceProtection(callback?: (err: AWSError, data: AutoScaling.Types.SetInstanceProtectionAnswer) => void): Request<AutoScaling.Types.SetInstanceProtectionAnswer, AWSError>;
  /**
   * Starts a new instance refresh operation, which triggers a rolling replacement of all previously launched instances in the Auto Scaling group with a new group of instances. If successful, this call creates a new instance refresh request with a unique ID that you can use to track its progress. To query its status, call the DescribeInstanceRefreshes API. To describe the instance refreshes that have already run, call the DescribeInstanceRefreshes API. To cancel an instance refresh operation in progress, use the CancelInstanceRefresh API.  For more information, see Replacing Auto Scaling Instances Based on an Instance Refresh.
   */
  startInstanceRefresh(params: AutoScaling.Types.StartInstanceRefreshType, callback?: (err: AWSError, data: AutoScaling.Types.StartInstanceRefreshAnswer) => void): Request<AutoScaling.Types.StartInstanceRefreshAnswer, AWSError>;
  /**
   * Starts a new instance refresh operation, which triggers a rolling replacement of all previously launched instances in the Auto Scaling group with a new group of instances. If successful, this call creates a new instance refresh request with a unique ID that you can use to track its progress. To query its status, call the DescribeInstanceRefreshes API. To describe the instance refreshes that have already run, call the DescribeInstanceRefreshes API. To cancel an instance refresh operation in progress, use the CancelInstanceRefresh API.  For more information, see Replacing Auto Scaling Instances Based on an Instance Refresh.
   */
  startInstanceRefresh(callback?: (err: AWSError, data: AutoScaling.Types.StartInstanceRefreshAnswer) => void): Request<AutoScaling.Types.StartInstanceRefreshAnswer, AWSError>;
  /**
   * Suspends the specified auto scaling processes, or all processes, for the specified Auto Scaling group. If you suspend either the Launch or Terminate process types, it can prevent other process types from functioning properly. For more information, see Suspending and resuming scaling processes in the Amazon EC2 Auto Scaling User Guide. To resume processes that have been suspended, call the ResumeProcesses API.
   */
  suspendProcesses(params: AutoScaling.Types.ScalingProcessQuery, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Suspends the specified auto scaling processes, or all processes, for the specified Auto Scaling group. If you suspend either the Launch or Terminate process types, it can prevent other process types from functioning properly. For more information, see Suspending and resuming scaling processes in the Amazon EC2 Auto Scaling User Guide. To resume processes that have been suspended, call the ResumeProcesses API.
   */
  suspendProcesses(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Terminates the specified instance and optionally adjusts the desired group size.  This call simply makes a termination request. The instance is not terminated immediately. When an instance is terminated, the instance status changes to terminated. You can't connect to or start an instance after you've terminated it. If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches instances to replace the ones that are terminated.  By default, Amazon EC2 Auto Scaling balances instances across all Availability Zones. If you decrement the desired capacity, your Auto Scaling group can become unbalanced between Availability Zones. Amazon EC2 Auto Scaling tries to rebalance the group, and rebalancing might terminate instances in other zones. For more information, see Rebalancing activities in the Amazon EC2 Auto Scaling User Guide.
   */
  terminateInstanceInAutoScalingGroup(params: AutoScaling.Types.TerminateInstanceInAutoScalingGroupType, callback?: (err: AWSError, data: AutoScaling.Types.ActivityType) => void): Request<AutoScaling.Types.ActivityType, AWSError>;
  /**
   * Terminates the specified instance and optionally adjusts the desired group size.  This call simply makes a termination request. The instance is not terminated immediately. When an instance is terminated, the instance status changes to terminated. You can't connect to or start an instance after you've terminated it. If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches instances to replace the ones that are terminated.  By default, Amazon EC2 Auto Scaling balances instances across all Availability Zones. If you decrement the desired capacity, your Auto Scaling group can become unbalanced between Availability Zones. Amazon EC2 Auto Scaling tries to rebalance the group, and rebalancing might terminate instances in other zones. For more information, see Rebalancing activities in the Amazon EC2 Auto Scaling User Guide.
   */
  terminateInstanceInAutoScalingGroup(callback?: (err: AWSError, data: AutoScaling.Types.ActivityType) => void): Request<AutoScaling.Types.ActivityType, AWSError>;
  /**
   *  We strongly recommend that all Auto Scaling groups use launch templates to ensure full functionality for Amazon EC2 Auto Scaling and Amazon EC2.  Updates the configuration for the specified Auto Scaling group. To update an Auto Scaling group, specify the name of the group and the parameter that you want to change. Any parameters that you don't specify are not changed by this update request. The new settings take effect on any scaling activities after this call returns.  If you associate a new launch configuration or template with an Auto Scaling group, all new instances will get the updated configuration. Existing instances continue to run with the configuration that they were originally launched with. When you update a group to specify a mixed instances policy instead of a launch configuration or template, existing instances may be replaced to match the new purchasing options that you specified in the policy. For example, if the group currently has 100% On-Demand capacity and the policy specifies 50% Spot capacity, this means that half of your instances will be gradually terminated and relaunched as Spot Instances. When replacing instances, Amazon EC2 Auto Scaling launches new instances before terminating the old ones, so that updating your group does not compromise the performance or availability of your application. Note the following about changing DesiredCapacity, MaxSize, or MinSize:   If a scale-in activity occurs as a result of a new DesiredCapacity value that is lower than the current size of the group, the Auto Scaling group uses its termination policy to determine which instances to terminate.   If you specify a new value for MinSize without specifying a value for DesiredCapacity, and the new MinSize is larger than the current size of the group, this sets the group's DesiredCapacity to the new MinSize value.   If you specify a new value for MaxSize without specifying a value for DesiredCapacity, and the new MaxSize is smaller than the current size of the group, this sets the group's DesiredCapacity to the new MaxSize value.   To see which parameters have been set, call the DescribeAutoScalingGroups API. To view the scaling policies for an Auto Scaling group, call the DescribePolicies API. If the group has scaling policies, you can update them by calling the PutScalingPolicy API.
   */
  updateAutoScalingGroup(params: AutoScaling.Types.UpdateAutoScalingGroupType, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  We strongly recommend that all Auto Scaling groups use launch templates to ensure full functionality for Amazon EC2 Auto Scaling and Amazon EC2.  Updates the configuration for the specified Auto Scaling group. To update an Auto Scaling group, specify the name of the group and the parameter that you want to change. Any parameters that you don't specify are not changed by this update request. The new settings take effect on any scaling activities after this call returns.  If you associate a new launch configuration or template with an Auto Scaling group, all new instances will get the updated configuration. Existing instances continue to run with the configuration that they were originally launched with. When you update a group to specify a mixed instances policy instead of a launch configuration or template, existing instances may be replaced to match the new purchasing options that you specified in the policy. For example, if the group currently has 100% On-Demand capacity and the policy specifies 50% Spot capacity, this means that half of your instances will be gradually terminated and relaunched as Spot Instances. When replacing instances, Amazon EC2 Auto Scaling launches new instances before terminating the old ones, so that updating your group does not compromise the performance or availability of your application. Note the following about changing DesiredCapacity, MaxSize, or MinSize:   If a scale-in activity occurs as a result of a new DesiredCapacity value that is lower than the current size of the group, the Auto Scaling group uses its termination policy to determine which instances to terminate.   If you specify a new value for MinSize without specifying a value for DesiredCapacity, and the new MinSize is larger than the current size of the group, this sets the group's DesiredCapacity to the new MinSize value.   If you specify a new value for MaxSize without specifying a value for DesiredCapacity, and the new MaxSize is smaller than the current size of the group, this sets the group's DesiredCapacity to the new MaxSize value.   To see which parameters have been set, call the DescribeAutoScalingGroups API. To view the scaling policies for an Auto Scaling group, call the DescribePolicies API. If the group has scaling policies, you can update them by calling the PutScalingPolicy API.
   */
  updateAutoScalingGroup(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
}
declare namespace AutoScaling {
  export type Activities = Activity[];
  export interface ActivitiesType {
    /**
     * The scaling activities. Activities are sorted by start time. Activities still in progress are described first.
     */
    Activities: Activities;
    /**
     * A string that indicates that the response contains more items than can be returned in a single response. To receive additional items, specify this string for the NextToken value when requesting the next set of items. This value is null when there are no more items to return.
     */
    NextToken?: XmlString;
  }
  export interface Activity {
    /**
     * The ID of the activity.
     */
    ActivityId: XmlString;
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName: XmlStringMaxLen255;
    /**
     * A friendly, more verbose description of the activity.
     */
    Description?: XmlString;
    /**
     * The reason the activity began.
     */
    Cause: XmlStringMaxLen1023;
    /**
     * The start time of the activity.
     */
    StartTime: TimestampType;
    /**
     * The end time of the activity.
     */
    EndTime?: TimestampType;
    /**
     * The current status of the activity.
     */
    StatusCode: ScalingActivityStatusCode;
    /**
     * A friendly, more verbose description of the activity status.
     */
    StatusMessage?: XmlStringMaxLen255;
    /**
     * A value between 0 and 100 that indicates the progress of the activity.
     */
    Progress?: Progress;
    /**
     * The details about the activity.
     */
    Details?: XmlString;
  }
  export type ActivityIds = XmlString[];
  export interface ActivityType {
    /**
     * A scaling activity.
     */
    Activity?: Activity;
  }
  export interface AdjustmentType {
    /**
     * The policy adjustment type. The valid values are ChangeInCapacity, ExactCapacity, and PercentChangeInCapacity.
     */
    AdjustmentType?: XmlStringMaxLen255;
  }
  export type AdjustmentTypes = AdjustmentType[];
  export interface Alarm {
    /**
     * The name of the alarm.
     */
    AlarmName?: XmlStringMaxLen255;
    /**
     * The Amazon Resource Name (ARN) of the alarm.
     */
    AlarmARN?: ResourceName;
  }
  export type Alarms = Alarm[];
  export type AsciiStringMaxLen255 = string;
  export type AssociatePublicIpAddress = boolean;
  export interface AttachInstancesQuery {
    /**
     * The IDs of the instances. You can specify up to 20 instances.
     */
    InstanceIds?: InstanceIds;
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName: XmlStringMaxLen255;
  }
  export interface AttachLoadBalancerTargetGroupsResultType {
  }
  export interface AttachLoadBalancerTargetGroupsType {
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName: XmlStringMaxLen255;
    /**
     * The Amazon Resource Names (ARN) of the target groups. You can specify up to 10 target groups. To get the ARN of a target group, use the Elastic Load Balancing DescribeTargetGroups API operation.
     */
    TargetGroupARNs: TargetGroupARNs;
  }
  export interface AttachLoadBalancersResultType {
  }
  export interface AttachLoadBalancersType {
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName: XmlStringMaxLen255;
    /**
     * The names of the load balancers. You can specify up to 10 load balancers.
     */
    LoadBalancerNames: LoadBalancerNames;
  }
  export interface AutoScalingGroup {
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName: XmlStringMaxLen255;
    /**
     * The Amazon Resource Name (ARN) of the Auto Scaling group.
     */
    AutoScalingGroupARN?: ResourceName;
    /**
     * The name of the associated launch configuration.
     */
    LaunchConfigurationName?: XmlStringMaxLen255;
    /**
     * The launch template for the group.
     */
    LaunchTemplate?: LaunchTemplateSpecification;
    /**
     * The mixed instances policy for the group.
     */
    MixedInstancesPolicy?: MixedInstancesPolicy;
    /**
     * The minimum size of the group.
     */
    MinSize: AutoScalingGroupMinSize;
    /**
     * The maximum size of the group.
     */
    MaxSize: AutoScalingGroupMaxSize;
    /**
     * The desired size of the group.
     */
    DesiredCapacity: AutoScalingGroupDesiredCapacity;
    /**
     * The duration of the default cooldown period, in seconds.
     */
    DefaultCooldown: Cooldown;
    /**
     * One or more Availability Zones for the group.
     */
    AvailabilityZones: AvailabilityZones;
    /**
     * One or more load balancers associated with the group.
     */
    LoadBalancerNames?: LoadBalancerNames;
    /**
     * The Amazon Resource Names (ARN) of the target groups for your load balancer.
     */
    TargetGroupARNs?: TargetGroupARNs;
    /**
     * The service to use for the health checks. The valid values are EC2 and ELB. If you configure an Auto Scaling group to use ELB health checks, it considers the instance unhealthy if it fails either the EC2 status checks or the load balancer health checks.
     */
    HealthCheckType: XmlStringMaxLen32;
    /**
     * The amount of time, in seconds, that Amazon EC2 Auto Scaling waits before checking the health status of an EC2 instance that has come into service.
     */
    HealthCheckGracePeriod?: HealthCheckGracePeriod;
    /**
     * The EC2 instances associated with the group.
     */
    Instances?: Instances;
    /**
     * The date and time the group was created.
     */
    CreatedTime: TimestampType;
    /**
     * The suspended processes associated with the group.
     */
    SuspendedProcesses?: SuspendedProcesses;
    /**
     * The name of the placement group into which to launch your instances, if any.
     */
    PlacementGroup?: XmlStringMaxLen255;
    /**
     * One or more subnet IDs, if applicable, separated by commas.
     */
    VPCZoneIdentifier?: XmlStringMaxLen2047;
    /**
     * The metrics enabled for the group.
     */
    EnabledMetrics?: EnabledMetrics;
    /**
     * The current state of the group when the DeleteAutoScalingGroup operation is in progress.
     */
    Status?: XmlStringMaxLen255;
    /**
     * The tags for the group.
     */
    Tags?: TagDescriptionList;
    /**
     * The termination policies for the group.
     */
    TerminationPolicies?: TerminationPolicies;
    /**
     * Indicates whether newly launched instances are protected from termination by Amazon EC2 Auto Scaling when scaling in.
     */
    NewInstancesProtectedFromScaleIn?: InstanceProtected;
    /**
     * The Amazon Resource Name (ARN) of the service-linked role that the Auto Scaling group uses to call other AWS services on your behalf.
     */
    ServiceLinkedRoleARN?: ResourceName;
    /**
     * The maximum amount of time, in seconds, that an instance can be in service. Valid Range: Minimum value of 0.
     */
    MaxInstanceLifetime?: MaxInstanceLifetime;
    /**
     * Indicates whether Capacity Rebalancing is enabled.
     */
    CapacityRebalance?: CapacityRebalanceEnabled;
  }
  export type AutoScalingGroupDesiredCapacity = number;
  export type AutoScalingGroupMaxSize = number;
  export type AutoScalingGroupMinSize = number;
  export type AutoScalingGroupNames = XmlStringMaxLen255[];
  export interface AutoScalingGroupNamesType {
    /**
     * The names of the Auto Scaling groups. By default, you can only specify up to 50 names. You can optionally increase this limit using the MaxRecords parameter. If you omit this parameter, all Auto Scaling groups are described.
     */
    AutoScalingGroupNames?: AutoScalingGroupNames;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: XmlString;
    /**
     * The maximum number of items to return with this call. The default value is 50 and the maximum value is 100.
     */
    MaxRecords?: MaxRecords;
  }
  export type AutoScalingGroups = AutoScalingGroup[];
  export interface AutoScalingGroupsType {
    /**
     * The groups.
     */
    AutoScalingGroups: AutoScalingGroups;
    /**
     * A string that indicates that the response contains more items than can be returned in a single response. To receive additional items, specify this string for the NextToken value when requesting the next set of items. This value is null when there are no more items to return.
     */
    NextToken?: XmlString;
  }
  export interface AutoScalingInstanceDetails {
    /**
     * The ID of the instance.
     */
    InstanceId: XmlStringMaxLen19;
    /**
     * The instance type of the EC2 instance.
     */
    InstanceType?: XmlStringMaxLen255;
    /**
     * The name of the Auto Scaling group for the instance.
     */
    AutoScalingGroupName: XmlStringMaxLen255;
    /**
     * The Availability Zone for the instance.
     */
    AvailabilityZone: XmlStringMaxLen255;
    /**
     * The lifecycle state for the instance. The Quarantined state is not used. For information about lifecycle states, see Instance lifecycle in the Amazon EC2 Auto Scaling User Guide.  Valid Values: Pending | Pending:Wait | Pending:Proceed | Quarantined | InService | Terminating | Terminating:Wait | Terminating:Proceed | Terminated | Detaching | Detached | EnteringStandby | Standby 
     */
    LifecycleState: XmlStringMaxLen32;
    /**
     * The last reported health status of this instance. "Healthy" means that the instance is healthy and should remain in service. "Unhealthy" means that the instance is unhealthy and Amazon EC2 Auto Scaling should terminate and replace it.
     */
    HealthStatus: XmlStringMaxLen32;
    /**
     * The launch configuration used to launch the instance. This value is not available if you attached the instance to the Auto Scaling group.
     */
    LaunchConfigurationName?: XmlStringMaxLen255;
    /**
     * The launch template for the instance.
     */
    LaunchTemplate?: LaunchTemplateSpecification;
    /**
     * Indicates whether the instance is protected from termination by Amazon EC2 Auto Scaling when scaling in.
     */
    ProtectedFromScaleIn: InstanceProtected;
    /**
     * The number of capacity units contributed by the instance based on its instance type. Valid Range: Minimum value of 1. Maximum value of 999.
     */
    WeightedCapacity?: XmlStringMaxLen32;
  }
  export type AutoScalingInstances = AutoScalingInstanceDetails[];
  export interface AutoScalingInstancesType {
    /**
     * The instances.
     */
    AutoScalingInstances?: AutoScalingInstances;
    /**
     * A string that indicates that the response contains more items than can be returned in a single response. To receive additional items, specify this string for the NextToken value when requesting the next set of items. This value is null when there are no more items to return.
     */
    NextToken?: XmlString;
  }
  export type AutoScalingNotificationTypes = XmlStringMaxLen255[];
  export type AvailabilityZones = XmlStringMaxLen255[];
  export interface BatchDeleteScheduledActionAnswer {
    /**
     * The names of the scheduled actions that could not be deleted, including an error message.
     */
    FailedScheduledActions?: FailedScheduledUpdateGroupActionRequests;
  }
  export interface BatchDeleteScheduledActionType {
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName: XmlStringMaxLen255;
    /**
     * The names of the scheduled actions to delete. The maximum number allowed is 50. 
     */
    ScheduledActionNames: ScheduledActionNames;
  }
  export interface BatchPutScheduledUpdateGroupActionAnswer {
    /**
     * The names of the scheduled actions that could not be created or updated, including an error message.
     */
    FailedScheduledUpdateGroupActions?: FailedScheduledUpdateGroupActionRequests;
  }
  export interface BatchPutScheduledUpdateGroupActionType {
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName: XmlStringMaxLen255;
    /**
     * One or more scheduled actions. The maximum number allowed is 50.
     */
    ScheduledUpdateGroupActions: ScheduledUpdateGroupActionRequests;
  }
  export type BlockDeviceEbsDeleteOnTermination = boolean;
  export type BlockDeviceEbsEncrypted = boolean;
  export type BlockDeviceEbsIops = number;
  export type BlockDeviceEbsVolumeSize = number;
  export type BlockDeviceEbsVolumeType = string;
  export interface BlockDeviceMapping {
    /**
     * The name of the virtual device (for example, ephemeral0). You can specify either VirtualName or Ebs, but not both.
     */
    VirtualName?: XmlStringMaxLen255;
    /**
     * The device name exposed to the EC2 instance (for example, /dev/sdh or xvdh). For more information, see Device Naming on Linux Instances in the Amazon EC2 User Guide for Linux Instances.
     */
    DeviceName: XmlStringMaxLen255;
    /**
     * Parameters used to automatically set up EBS volumes when an instance is launched. You can specify either VirtualName or Ebs, but not both.
     */
    Ebs?: Ebs;
    /**
     * Setting this value to true suppresses the specified device included in the block device mapping of the AMI. If NoDevice is true for the root device, instances might fail the EC2 health check. In that case, Amazon EC2 Auto Scaling launches replacement instances. If you specify NoDevice, you cannot specify Ebs.
     */
    NoDevice?: NoDevice;
  }
  export type BlockDeviceMappings = BlockDeviceMapping[];
  export interface CancelInstanceRefreshAnswer {
    /**
     * The instance refresh ID.
     */
    InstanceRefreshId?: XmlStringMaxLen255;
  }
  export interface CancelInstanceRefreshType {
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName: XmlStringMaxLen255;
  }
  export type CapacityRebalanceEnabled = boolean;
  export type ClassicLinkVPCSecurityGroups = XmlStringMaxLen255[];
  export interface CompleteLifecycleActionAnswer {
  }
  export interface CompleteLifecycleActionType {
    /**
     * The name of the lifecycle hook.
     */
    LifecycleHookName: AsciiStringMaxLen255;
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName: ResourceName;
    /**
     * A universally unique identifier (UUID) that identifies a specific lifecycle action associated with an instance. Amazon EC2 Auto Scaling sends this token to the notification target you specified when you created the lifecycle hook.
     */
    LifecycleActionToken?: LifecycleActionToken;
    /**
     * The action for the group to take. This parameter can be either CONTINUE or ABANDON.
     */
    LifecycleActionResult: LifecycleActionResult;
    /**
     * The ID of the instance.
     */
    InstanceId?: XmlStringMaxLen19;
  }
  export type Cooldown = number;
  export interface CreateAutoScalingGroupType {
    /**
     * The name of the Auto Scaling group. This name must be unique per Region per account.
     */
    AutoScalingGroupName: XmlStringMaxLen255;
    /**
     * The name of the launch configuration to use to launch instances.  Conditional: You must specify either a launch template (LaunchTemplate or MixedInstancesPolicy) or a launch configuration (LaunchConfigurationName or InstanceId).
     */
    LaunchConfigurationName?: XmlStringMaxLen255;
    /**
     * Parameters used to specify the launch template and version to use to launch instances.  Conditional: You must specify either a launch template (LaunchTemplate or MixedInstancesPolicy) or a launch configuration (LaunchConfigurationName or InstanceId).  The launch template that is specified must be configured for use with an Auto Scaling group. For more information, see Creating a launch template for an Auto Scaling group in the Amazon EC2 Auto Scaling User Guide. 
     */
    LaunchTemplate?: LaunchTemplateSpecification;
    /**
     * An embedded object that specifies a mixed instances policy. The required parameters must be specified. If optional parameters are unspecified, their default values are used. The policy includes parameters that not only define the distribution of On-Demand Instances and Spot Instances, the maximum price to pay for Spot Instances, and how the Auto Scaling group allocates instance types to fulfill On-Demand and Spot capacities, but also the parameters that specify the instance configuration information—the launch template and instance types. The policy can also include a weight for each instance type and different launch templates for individual instance types. For more information, see Auto Scaling groups with multiple instance types and purchase options in the Amazon EC2 Auto Scaling User Guide.
     */
    MixedInstancesPolicy?: MixedInstancesPolicy;
    /**
     * The ID of the instance used to base the launch configuration on. If specified, Amazon EC2 Auto Scaling uses the configuration values from the specified instance to create a new launch configuration. To get the instance ID, use the Amazon EC2 DescribeInstances API operation. For more information, see Creating an Auto Scaling group using an EC2 instance in the Amazon EC2 Auto Scaling User Guide.
     */
    InstanceId?: XmlStringMaxLen19;
    /**
     * The minimum size of the group.
     */
    MinSize: AutoScalingGroupMinSize;
    /**
     * The maximum size of the group.  With a mixed instances policy that uses instance weighting, Amazon EC2 Auto Scaling may need to go above MaxSize to meet your capacity requirements. In this event, Amazon EC2 Auto Scaling will never go above MaxSize by more than your largest instance weight (weights that define how many units each instance contributes to the desired capacity of the group). 
     */
    MaxSize: AutoScalingGroupMaxSize;
    /**
     * The desired capacity is the initial capacity of the Auto Scaling group at the time of its creation and the capacity it attempts to maintain. It can scale beyond this capacity if you configure auto scaling. This number must be greater than or equal to the minimum size of the group and less than or equal to the maximum size of the group. If you do not specify a desired capacity, the default is the minimum size of the group.
     */
    DesiredCapacity?: AutoScalingGroupDesiredCapacity;
    /**
     * The amount of time, in seconds, after a scaling activity completes before another scaling activity can start. The default value is 300. This setting applies when using simple scaling policies, but not when using other scaling policies or scheduled scaling. For more information, see Scaling cooldowns for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide.
     */
    DefaultCooldown?: Cooldown;
    /**
     * A list of Availability Zones where instances in the Auto Scaling group can be created. This parameter is optional if you specify one or more subnets for VPCZoneIdentifier. Conditional: If your account supports EC2-Classic and VPC, this parameter is required to launch instances into EC2-Classic.
     */
    AvailabilityZones?: AvailabilityZones;
    /**
     * A list of Classic Load Balancers associated with this Auto Scaling group. For Application Load Balancers, Network Load Balancers, and Gateway Load Balancers, specify the TargetGroupARNs property instead.
     */
    LoadBalancerNames?: LoadBalancerNames;
    /**
     * The Amazon Resource Names (ARN) of the target groups to associate with the Auto Scaling group. Instances are registered as targets in a target group, and traffic is routed to the target group. For more information, see Elastic Load Balancing and Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide.
     */
    TargetGroupARNs?: TargetGroupARNs;
    /**
     * The service to use for the health checks. The valid values are EC2 (default) and ELB. If you configure an Auto Scaling group to use load balancer (ELB) health checks, it considers the instance unhealthy if it fails either the EC2 status checks or the load balancer health checks. For more information, see Health checks for Auto Scaling instances in the Amazon EC2 Auto Scaling User Guide.
     */
    HealthCheckType?: XmlStringMaxLen32;
    /**
     * The amount of time, in seconds, that Amazon EC2 Auto Scaling waits before checking the health status of an EC2 instance that has come into service. During this time, any health check failures for the instance are ignored. The default value is 0. For more information, see Health check grace period in the Amazon EC2 Auto Scaling User Guide. Conditional: Required if you are adding an ELB health check.
     */
    HealthCheckGracePeriod?: HealthCheckGracePeriod;
    /**
     * The name of an existing placement group into which to launch your instances, if any. A placement group is a logical grouping of instances within a single Availability Zone. You cannot specify multiple Availability Zones and a placement group. For more information, see Placement Groups in the Amazon EC2 User Guide for Linux Instances.
     */
    PlacementGroup?: XmlStringMaxLen255;
    /**
     * A comma-separated list of subnet IDs for a virtual private cloud (VPC) where instances in the Auto Scaling group can be created. If you specify VPCZoneIdentifier with AvailabilityZones, the subnets that you specify for this parameter must reside in those Availability Zones. Conditional: If your account supports EC2-Classic and VPC, this parameter is required to launch instances into a VPC.
     */
    VPCZoneIdentifier?: XmlStringMaxLen2047;
    /**
     * A policy or a list of policies that are used to select the instance to terminate. These policies are executed in the order that you list them. For more information, see Controlling which Auto Scaling instances terminate during scale in in the Amazon EC2 Auto Scaling User Guide.
     */
    TerminationPolicies?: TerminationPolicies;
    /**
     * Indicates whether newly launched instances are protected from termination by Amazon EC2 Auto Scaling when scaling in. For more information about preventing instances from terminating on scale in, see Instance scale-in protection in the Amazon EC2 Auto Scaling User Guide.
     */
    NewInstancesProtectedFromScaleIn?: InstanceProtected;
    /**
     * Indicates whether Capacity Rebalancing is enabled. Otherwise, Capacity Rebalancing is disabled. When you turn on Capacity Rebalancing, Amazon EC2 Auto Scaling attempts to launch a Spot Instance whenever Amazon EC2 notifies that a Spot Instance is at an elevated risk of interruption. After launching a new instance, it then terminates an old instance. For more information, see Amazon EC2 Auto Scaling Capacity Rebalancing in the Amazon EC2 Auto Scaling User Guide.
     */
    CapacityRebalance?: CapacityRebalanceEnabled;
    /**
     * One or more lifecycle hooks for the group, which specify actions to perform when Amazon EC2 Auto Scaling launches or terminates instances.
     */
    LifecycleHookSpecificationList?: LifecycleHookSpecifications;
    /**
     * One or more tags. You can tag your Auto Scaling group and propagate the tags to the Amazon EC2 instances it launches. Tags are not propagated to Amazon EBS volumes. To add tags to Amazon EBS volumes, specify the tags in a launch template but use caution. If the launch template specifies an instance tag with a key that is also specified for the Auto Scaling group, Amazon EC2 Auto Scaling overrides the value of that instance tag with the value specified by the Auto Scaling group. For more information, see Tagging Auto Scaling groups and instances in the Amazon EC2 Auto Scaling User Guide.
     */
    Tags?: Tags;
    /**
     * The Amazon Resource Name (ARN) of the service-linked role that the Auto Scaling group uses to call other AWS services on your behalf. By default, Amazon EC2 Auto Scaling uses a service-linked role named AWSServiceRoleForAutoScaling, which it creates if it does not exist. For more information, see Service-linked roles in the Amazon EC2 Auto Scaling User Guide.
     */
    ServiceLinkedRoleARN?: ResourceName;
    /**
     * The maximum amount of time, in seconds, that an instance can be in service. The default is null. If specified, the value must be either 0 or a number equal to or greater than 86,400 seconds (1 day). For more information, see Replacing Auto Scaling instances based on maximum instance lifetime in the Amazon EC2 Auto Scaling User Guide.
     */
    MaxInstanceLifetime?: MaxInstanceLifetime;
  }
  export interface CreateLaunchConfigurationType {
    /**
     * The name of the launch configuration. This name must be unique per Region per account.
     */
    LaunchConfigurationName: XmlStringMaxLen255;
    /**
     * The ID of the Amazon Machine Image (AMI) that was assigned during registration. For more information, see Finding an AMI in the Amazon EC2 User Guide for Linux Instances. If you do not specify InstanceId, you must specify ImageId.
     */
    ImageId?: XmlStringMaxLen255;
    /**
     * The name of the key pair. For more information, see Amazon EC2 Key Pairs in the Amazon EC2 User Guide for Linux Instances.
     */
    KeyName?: XmlStringMaxLen255;
    /**
     * A list that contains the security groups to assign to the instances in the Auto Scaling group. [EC2-VPC] Specify the security group IDs. For more information, see Security Groups for Your VPC in the Amazon Virtual Private Cloud User Guide. [EC2-Classic] Specify either the security group names or the security group IDs. For more information, see Amazon EC2 Security Groups in the Amazon EC2 User Guide for Linux Instances.
     */
    SecurityGroups?: SecurityGroups;
    /**
     * The ID of a ClassicLink-enabled VPC to link your EC2-Classic instances to. For more information, see ClassicLink in the Amazon EC2 User Guide for Linux Instances and Linking EC2-Classic instances to a VPC in the Amazon EC2 Auto Scaling User Guide. This parameter can only be used if you are launching EC2-Classic instances.
     */
    ClassicLinkVPCId?: XmlStringMaxLen255;
    /**
     * The IDs of one or more security groups for the specified ClassicLink-enabled VPC. For more information, see ClassicLink in the Amazon EC2 User Guide for Linux Instances and Linking EC2-Classic instances to a VPC in the Amazon EC2 Auto Scaling User Guide. If you specify the ClassicLinkVPCId parameter, you must specify this parameter.
     */
    ClassicLinkVPCSecurityGroups?: ClassicLinkVPCSecurityGroups;
    /**
     * The user data to make available to the launched EC2 instances. For more information, see Instance metadata and user data (Linux) and Instance metadata and user data (Windows). If you are using a command line tool, base64-encoding is performed for you, and you can load the text from a file. Otherwise, you must provide base64-encoded text. User data is limited to 16 KB.
     */
    UserData?: XmlStringUserData;
    /**
     * The ID of the instance to use to create the launch configuration. The new launch configuration derives attributes from the instance, except for the block device mapping. To create a launch configuration with a block device mapping or override any other instance attributes, specify them as part of the same request. For more information, see Creating a launch configuration using an EC2 instance in the Amazon EC2 Auto Scaling User Guide. If you do not specify InstanceId, you must specify both ImageId and InstanceType.
     */
    InstanceId?: XmlStringMaxLen19;
    /**
     * Specifies the instance type of the EC2 instance. For information about available instance types, see Available Instance Types in the Amazon EC2 User Guide for Linux Instances. If you do not specify InstanceId, you must specify InstanceType.
     */
    InstanceType?: XmlStringMaxLen255;
    /**
     * The ID of the kernel associated with the AMI.
     */
    KernelId?: XmlStringMaxLen255;
    /**
     * The ID of the RAM disk to select.
     */
    RamdiskId?: XmlStringMaxLen255;
    /**
     * A block device mapping, which specifies the block devices for the instance. You can specify virtual devices and EBS volumes. For more information, see Block Device Mapping in the Amazon EC2 User Guide for Linux Instances.
     */
    BlockDeviceMappings?: BlockDeviceMappings;
    /**
     * Controls whether instances in this group are launched with detailed (true) or basic (false) monitoring. The default value is true (enabled).  When detailed monitoring is enabled, Amazon CloudWatch generates metrics every minute and your account is charged a fee. When you disable detailed monitoring, CloudWatch generates metrics every 5 minutes. For more information, see Configure Monitoring for Auto Scaling Instances in the Amazon EC2 Auto Scaling User Guide. 
     */
    InstanceMonitoring?: InstanceMonitoring;
    /**
     * The maximum hourly price to be paid for any Spot Instance launched to fulfill the request. Spot Instances are launched when the price you specify exceeds the current Spot price. For more information, see Requesting Spot Instances in the Amazon EC2 Auto Scaling User Guide.  When you change your maximum price by creating a new launch configuration, running instances will continue to run as long as the maximum price for those running instances is higher than the current Spot price. 
     */
    SpotPrice?: SpotPrice;
    /**
     * The name or the Amazon Resource Name (ARN) of the instance profile associated with the IAM role for the instance. The instance profile contains the IAM role. For more information, see IAM role for applications that run on Amazon EC2 instances in the Amazon EC2 Auto Scaling User Guide.
     */
    IamInstanceProfile?: XmlStringMaxLen1600;
    /**
     * Specifies whether the launch configuration is optimized for EBS I/O (true) or not (false). The optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal I/O performance. This optimization is not available with all instance types. Additional fees are incurred when you enable EBS optimization for an instance type that is not EBS-optimized by default. For more information, see Amazon EBS-Optimized Instances in the Amazon EC2 User Guide for Linux Instances. The default value is false.
     */
    EbsOptimized?: EbsOptimized;
    /**
     * For Auto Scaling groups that are running in a virtual private cloud (VPC), specifies whether to assign a public IP address to the group's instances. If you specify true, each instance in the Auto Scaling group receives a unique public IP address. For more information, see Launching Auto Scaling instances in a VPC in the Amazon EC2 Auto Scaling User Guide. If you specify this parameter, you must specify at least one subnet for VPCZoneIdentifier when you create your group.  If the instance is launched into a default subnet, the default is to assign a public IP address, unless you disabled the option to assign a public IP address on the subnet. If the instance is launched into a nondefault subnet, the default is not to assign a public IP address, unless you enabled the option to assign a public IP address on the subnet. 
     */
    AssociatePublicIpAddress?: AssociatePublicIpAddress;
    /**
     * The tenancy of the instance. An instance with dedicated tenancy runs on isolated, single-tenant hardware and can only be launched into a VPC. To launch dedicated instances into a shared tenancy VPC (a VPC with the instance placement tenancy attribute set to default), you must set the value of this parameter to dedicated. If you specify PlacementTenancy, you must specify at least one subnet for VPCZoneIdentifier when you create your group. For more information, see Configuring instance tenancy with Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide. Valid Values: default | dedicated 
     */
    PlacementTenancy?: XmlStringMaxLen64;
    /**
     * The metadata options for the instances. For more information, see Configuring the Instance Metadata Options in the Amazon EC2 Auto Scaling User Guide.
     */
    MetadataOptions?: InstanceMetadataOptions;
  }
  export interface CreateOrUpdateTagsType {
    /**
     * One or more tags.
     */
    Tags: Tags;
  }
  export interface CustomizedMetricSpecification {
    /**
     * The name of the metric.
     */
    MetricName: MetricName;
    /**
     * The namespace of the metric.
     */
    Namespace: MetricNamespace;
    /**
     * The dimensions of the metric. Conditional: If you published your metric with dimensions, you must specify the same dimensions in your scaling policy.
     */
    Dimensions?: MetricDimensions;
    /**
     * The statistic of the metric.
     */
    Statistic: MetricStatistic;
    /**
     * The unit of the metric.
     */
    Unit?: MetricUnit;
  }
  export interface DeleteAutoScalingGroupType {
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName: XmlStringMaxLen255;
    /**
     * Specifies that the group is to be deleted along with all instances associated with the group, without waiting for all instances to be terminated. This parameter also deletes any lifecycle actions associated with the group.
     */
    ForceDelete?: ForceDelete;
  }
  export interface DeleteLifecycleHookAnswer {
  }
  export interface DeleteLifecycleHookType {
    /**
     * The name of the lifecycle hook.
     */
    LifecycleHookName: AsciiStringMaxLen255;
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName: XmlStringMaxLen255;
  }
  export interface DeleteNotificationConfigurationType {
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName: XmlStringMaxLen255;
    /**
     * The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (Amazon SNS) topic.
     */
    TopicARN: XmlStringMaxLen255;
  }
  export interface DeletePolicyType {
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName?: XmlStringMaxLen255;
    /**
     * The name or Amazon Resource Name (ARN) of the policy.
     */
    PolicyName: ResourceName;
  }
  export interface DeleteScheduledActionType {
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName: XmlStringMaxLen255;
    /**
     * The name of the action to delete.
     */
    ScheduledActionName: XmlStringMaxLen255;
  }
  export interface DeleteTagsType {
    /**
     * One or more tags.
     */
    Tags: Tags;
  }
  export interface DescribeAccountLimitsAnswer {
    /**
     * The maximum number of groups allowed for your AWS account. The default is 200 groups per AWS Region.
     */
    MaxNumberOfAutoScalingGroups?: MaxNumberOfAutoScalingGroups;
    /**
     * The maximum number of launch configurations allowed for your AWS account. The default is 200 launch configurations per AWS Region.
     */
    MaxNumberOfLaunchConfigurations?: MaxNumberOfLaunchConfigurations;
    /**
     * The current number of groups for your AWS account.
     */
    NumberOfAutoScalingGroups?: NumberOfAutoScalingGroups;
    /**
     * The current number of launch configurations for your AWS account.
     */
    NumberOfLaunchConfigurations?: NumberOfLaunchConfigurations;
  }
  export interface DescribeAdjustmentTypesAnswer {
    /**
     * The policy adjustment types.
     */
    AdjustmentTypes?: AdjustmentTypes;
  }
  export interface DescribeAutoScalingInstancesType {
    /**
     * The IDs of the instances. You can specify up to MaxRecords IDs. If you omit this parameter, all Auto Scaling instances are described. If you specify an ID that does not exist, it is ignored with no error.
     */
    InstanceIds?: InstanceIds;
    /**
     * The maximum number of items to return with this call. The default value is 50 and the maximum value is 50.
     */
    MaxRecords?: MaxRecords;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: XmlString;
  }
  export interface DescribeAutoScalingNotificationTypesAnswer {
    /**
     * The notification types.
     */
    AutoScalingNotificationTypes?: AutoScalingNotificationTypes;
  }
  export interface DescribeInstanceRefreshesAnswer {
    /**
     * The instance refreshes for the specified group.
     */
    InstanceRefreshes?: InstanceRefreshes;
    /**
     * A string that indicates that the response contains more items than can be returned in a single response. To receive additional items, specify this string for the NextToken value when requesting the next set of items. This value is null when there are no more items to return.
     */
    NextToken?: XmlString;
  }
  export interface DescribeInstanceRefreshesType {
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName: XmlStringMaxLen255;
    /**
     * One or more instance refresh IDs.
     */
    InstanceRefreshIds?: InstanceRefreshIds;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: XmlString;
    /**
     * The maximum number of items to return with this call. The default value is 50 and the maximum value is 100.
     */
    MaxRecords?: MaxRecords;
  }
  export interface DescribeLifecycleHookTypesAnswer {
    /**
     * The lifecycle hook types.
     */
    LifecycleHookTypes?: AutoScalingNotificationTypes;
  }
  export interface DescribeLifecycleHooksAnswer {
    /**
     * The lifecycle hooks for the specified group.
     */
    LifecycleHooks?: LifecycleHooks;
  }
  export interface DescribeLifecycleHooksType {
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName: XmlStringMaxLen255;
    /**
     * The names of one or more lifecycle hooks. If you omit this parameter, all lifecycle hooks are described.
     */
    LifecycleHookNames?: LifecycleHookNames;
  }
  export interface DescribeLoadBalancerTargetGroupsRequest {
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName: XmlStringMaxLen255;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: XmlString;
    /**
     * The maximum number of items to return with this call. The default value is 100 and the maximum value is 100.
     */
    MaxRecords?: MaxRecords;
  }
  export interface DescribeLoadBalancerTargetGroupsResponse {
    /**
     * Information about the target groups.
     */
    LoadBalancerTargetGroups?: LoadBalancerTargetGroupStates;
    /**
     * A string that indicates that the response contains more items than can be returned in a single response. To receive additional items, specify this string for the NextToken value when requesting the next set of items. This value is null when there are no more items to return.
     */
    NextToken?: XmlString;
  }
  export interface DescribeLoadBalancersRequest {
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName: XmlStringMaxLen255;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: XmlString;
    /**
     * The maximum number of items to return with this call. The default value is 100 and the maximum value is 100.
     */
    MaxRecords?: MaxRecords;
  }
  export interface DescribeLoadBalancersResponse {
    /**
     * The load balancers.
     */
    LoadBalancers?: LoadBalancerStates;
    /**
     * A string that indicates that the response contains more items than can be returned in a single response. To receive additional items, specify this string for the NextToken value when requesting the next set of items. This value is null when there are no more items to return.
     */
    NextToken?: XmlString;
  }
  export interface DescribeMetricCollectionTypesAnswer {
    /**
     * One or more metrics.
     */
    Metrics?: MetricCollectionTypes;
    /**
     * The granularities for the metrics.
     */
    Granularities?: MetricGranularityTypes;
  }
  export interface DescribeNotificationConfigurationsAnswer {
    /**
     * The notification configurations.
     */
    NotificationConfigurations: NotificationConfigurations;
    /**
     * A string that indicates that the response contains more items than can be returned in a single response. To receive additional items, specify this string for the NextToken value when requesting the next set of items. This value is null when there are no more items to return.
     */
    NextToken?: XmlString;
  }
  export interface DescribeNotificationConfigurationsType {
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupNames?: AutoScalingGroupNames;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: XmlString;
    /**
     * The maximum number of items to return with this call. The default value is 50 and the maximum value is 100.
     */
    MaxRecords?: MaxRecords;
  }
  export interface DescribePoliciesType {
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName?: XmlStringMaxLen255;
    /**
     * The names of one or more policies. If you omit this parameter, all policies are described. If a group name is provided, the results are limited to that group. This list is limited to 50 items. If you specify an unknown policy name, it is ignored with no error.
     */
    PolicyNames?: PolicyNames;
    /**
     * One or more policy types. The valid values are SimpleScaling, StepScaling, and TargetTrackingScaling.
     */
    PolicyTypes?: PolicyTypes;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: XmlString;
    /**
     * The maximum number of items to be returned with each call. The default value is 50 and the maximum value is 100.
     */
    MaxRecords?: MaxRecords;
  }
  export interface DescribeScalingActivitiesType {
    /**
     * The activity IDs of the desired scaling activities. You can specify up to 50 IDs. If you omit this parameter, all activities for the past six weeks are described. If unknown activities are requested, they are ignored with no error. If you specify an Auto Scaling group, the results are limited to that group.
     */
    ActivityIds?: ActivityIds;
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName?: XmlStringMaxLen255;
    /**
     * The maximum number of items to return with this call. The default value is 100 and the maximum value is 100.
     */
    MaxRecords?: MaxRecords;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: XmlString;
  }
  export interface DescribeScheduledActionsType {
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName?: XmlStringMaxLen255;
    /**
     * The names of one or more scheduled actions. You can specify up to 50 actions. If you omit this parameter, all scheduled actions are described. If you specify an unknown scheduled action, it is ignored with no error.
     */
    ScheduledActionNames?: ScheduledActionNames;
    /**
     * The earliest scheduled start time to return. If scheduled action names are provided, this parameter is ignored.
     */
    StartTime?: TimestampType;
    /**
     * The latest scheduled start time to return. If scheduled action names are provided, this parameter is ignored.
     */
    EndTime?: TimestampType;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: XmlString;
    /**
     * The maximum number of items to return with this call. The default value is 50 and the maximum value is 100.
     */
    MaxRecords?: MaxRecords;
  }
  export interface DescribeTagsType {
    /**
     * One or more filters to scope the tags to return. The maximum number of filters per filter type (for example, auto-scaling-group) is 1000.
     */
    Filters?: Filters;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: XmlString;
    /**
     * The maximum number of items to return with this call. The default value is 50 and the maximum value is 100.
     */
    MaxRecords?: MaxRecords;
  }
  export interface DescribeTerminationPolicyTypesAnswer {
    /**
     * The termination policies supported by Amazon EC2 Auto Scaling: OldestInstance, OldestLaunchConfiguration, NewestInstance, ClosestToNextInstanceHour, Default, OldestLaunchTemplate, and AllocationStrategy.
     */
    TerminationPolicyTypes?: TerminationPolicies;
  }
  export interface DetachInstancesAnswer {
    /**
     * The activities related to detaching the instances from the Auto Scaling group.
     */
    Activities?: Activities;
  }
  export interface DetachInstancesQuery {
    /**
     * The IDs of the instances. You can specify up to 20 instances.
     */
    InstanceIds?: InstanceIds;
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName: XmlStringMaxLen255;
    /**
     * Indicates whether the Auto Scaling group decrements the desired capacity value by the number of instances detached.
     */
    ShouldDecrementDesiredCapacity: ShouldDecrementDesiredCapacity;
  }
  export interface DetachLoadBalancerTargetGroupsResultType {
  }
  export interface DetachLoadBalancerTargetGroupsType {
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName: XmlStringMaxLen255;
    /**
     * The Amazon Resource Names (ARN) of the target groups. You can specify up to 10 target groups.
     */
    TargetGroupARNs: TargetGroupARNs;
  }
  export interface DetachLoadBalancersResultType {
  }
  export interface DetachLoadBalancersType {
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName: XmlStringMaxLen255;
    /**
     * The names of the load balancers. You can specify up to 10 load balancers.
     */
    LoadBalancerNames: LoadBalancerNames;
  }
  export interface DisableMetricsCollectionQuery {
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName: XmlStringMaxLen255;
    /**
     * Specifies one or more of the following metrics:    GroupMinSize     GroupMaxSize     GroupDesiredCapacity     GroupInServiceInstances     GroupPendingInstances     GroupStandbyInstances     GroupTerminatingInstances     GroupTotalInstances     GroupInServiceCapacity     GroupPendingCapacity     GroupStandbyCapacity     GroupTerminatingCapacity     GroupTotalCapacity    If you omit this parameter, all metrics are disabled. 
     */
    Metrics?: Metrics;
  }
  export type DisableScaleIn = boolean;
  export interface Ebs {
    /**
     * The snapshot ID of the volume to use. You must specify either a VolumeSize or a SnapshotId.
     */
    SnapshotId?: XmlStringMaxLen255;
    /**
     * The volume size, in Gibibytes (GiB). This can be a number from 1-1,024 for standard, 4-16,384 for io1, 1-16,384 for gp2, and 500-16,384 for st1 and sc1. If you specify a snapshot, the volume size must be equal to or larger than the snapshot size. Default: If you create a volume from a snapshot and you don't specify a volume size, the default is the snapshot size. You must specify either a VolumeSize or a SnapshotId. If you specify both SnapshotId and VolumeSize, the volume size must be equal or greater than the size of the snapshot.
     */
    VolumeSize?: BlockDeviceEbsVolumeSize;
    /**
     * The volume type, which can be standard for Magnetic, io1 for Provisioned IOPS SSD, gp2 for General Purpose SSD, st1 for Throughput Optimized HDD, or sc1 for Cold HDD. For more information, see Amazon EBS Volume Types in the Amazon EC2 User Guide for Linux Instances. Valid Values: standard | io1 | gp2 | st1 | sc1 
     */
    VolumeType?: BlockDeviceEbsVolumeType;
    /**
     * Indicates whether the volume is deleted on instance termination. For Amazon EC2 Auto Scaling, the default value is true.
     */
    DeleteOnTermination?: BlockDeviceEbsDeleteOnTermination;
    /**
     * The number of I/O operations per second (IOPS) to provision for the volume. The maximum ratio of IOPS to volume size (in GiB) is 50:1. For more information, see Amazon EBS Volume Types in the Amazon EC2 User Guide for Linux Instances. Required when the volume type is io1. (Not used with standard, gp2, st1, or sc1 volumes.) 
     */
    Iops?: BlockDeviceEbsIops;
    /**
     * Specifies whether the volume should be encrypted. Encrypted EBS volumes can only be attached to instances that support Amazon EBS encryption. For more information, see Supported Instance Types. If your AMI uses encrypted volumes, you can also only launch it on supported instance types.  If you are creating a volume from a snapshot, you cannot specify an encryption value. Volumes that are created from encrypted snapshots are automatically encrypted, and volumes that are created from unencrypted snapshots are automatically unencrypted. By default, encrypted snapshots use the AWS managed CMK that is used for EBS encryption, but you can specify a custom CMK when you create the snapshot. The ability to encrypt a snapshot during copying also allows you to apply a new CMK to an already-encrypted snapshot. Volumes restored from the resulting copy are only accessible using the new CMK. Enabling encryption by default results in all EBS volumes being encrypted with the AWS managed CMK or a customer managed CMK, whether or not the snapshot was encrypted.  For more information, see Using Encryption with EBS-Backed AMIs in the Amazon EC2 User Guide for Linux Instances and Required CMK key policy for use with encrypted volumes in the Amazon EC2 Auto Scaling User Guide.
     */
    Encrypted?: BlockDeviceEbsEncrypted;
  }
  export type EbsOptimized = boolean;
  export interface EnableMetricsCollectionQuery {
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName: XmlStringMaxLen255;
    /**
     * Specifies which group-level metrics to start collecting. You can specify one or more of the following metrics:    GroupMinSize     GroupMaxSize     GroupDesiredCapacity     GroupInServiceInstances     GroupPendingInstances     GroupStandbyInstances     GroupTerminatingInstances     GroupTotalInstances    The instance weighting feature supports the following additional metrics:     GroupInServiceCapacity     GroupPendingCapacity     GroupStandbyCapacity     GroupTerminatingCapacity     GroupTotalCapacity    If you omit this parameter, all metrics are enabled. 
     */
    Metrics?: Metrics;
    /**
     * The granularity to associate with the metrics to collect. The only valid value is 1Minute.
     */
    Granularity: XmlStringMaxLen255;
  }
  export interface EnabledMetric {
    /**
     * One of the following metrics:    GroupMinSize     GroupMaxSize     GroupDesiredCapacity     GroupInServiceInstances     GroupPendingInstances     GroupStandbyInstances     GroupTerminatingInstances     GroupTotalInstances     GroupInServiceCapacity     GroupPendingCapacity     GroupStandbyCapacity     GroupTerminatingCapacity     GroupTotalCapacity   
     */
    Metric?: XmlStringMaxLen255;
    /**
     * The granularity of the metric. The only valid value is 1Minute.
     */
    Granularity?: XmlStringMaxLen255;
  }
  export type EnabledMetrics = EnabledMetric[];
  export interface EnterStandbyAnswer {
    /**
     * The activities related to moving instances into Standby mode.
     */
    Activities?: Activities;
  }
  export interface EnterStandbyQuery {
    /**
     * The IDs of the instances. You can specify up to 20 instances.
     */
    InstanceIds?: InstanceIds;
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName: XmlStringMaxLen255;
    /**
     * Indicates whether to decrement the desired capacity of the Auto Scaling group by the number of instances moved to Standby mode.
     */
    ShouldDecrementDesiredCapacity: ShouldDecrementDesiredCapacity;
  }
  export type EstimatedInstanceWarmup = number;
  export interface ExecutePolicyType {
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName?: XmlStringMaxLen255;
    /**
     * The name or ARN of the policy.
     */
    PolicyName: ResourceName;
    /**
     * Indicates whether Amazon EC2 Auto Scaling waits for the cooldown period to complete before executing the policy. Valid only if the policy type is SimpleScaling. For more information, see Scaling cooldowns for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide.
     */
    HonorCooldown?: HonorCooldown;
    /**
     * The metric value to compare to BreachThreshold. This enables you to execute a policy of type StepScaling and determine which step adjustment to use. For example, if the breach threshold is 50 and you want to use a step adjustment with a lower bound of 0 and an upper bound of 10, you can set the metric value to 59. If you specify a metric value that doesn't correspond to a step adjustment for the policy, the call returns an error. Required if the policy type is StepScaling and not supported otherwise.
     */
    MetricValue?: MetricScale;
    /**
     * The breach threshold for the alarm. Required if the policy type is StepScaling and not supported otherwise.
     */
    BreachThreshold?: MetricScale;
  }
  export interface ExitStandbyAnswer {
    /**
     * The activities related to moving instances out of Standby mode.
     */
    Activities?: Activities;
  }
  export interface ExitStandbyQuery {
    /**
     * The IDs of the instances. You can specify up to 20 instances.
     */
    InstanceIds?: InstanceIds;
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName: XmlStringMaxLen255;
  }
  export interface FailedScheduledUpdateGroupActionRequest {
    /**
     * The name of the scheduled action.
     */
    ScheduledActionName: XmlStringMaxLen255;
    /**
     * The error code.
     */
    ErrorCode?: XmlStringMaxLen64;
    /**
     * The error message accompanying the error code.
     */
    ErrorMessage?: XmlString;
  }
  export type FailedScheduledUpdateGroupActionRequests = FailedScheduledUpdateGroupActionRequest[];
  export interface Filter {
    /**
     * The name of the filter. The valid values are: auto-scaling-group, key, value, and propagate-at-launch.
     */
    Name?: XmlString;
    /**
     * One or more filter values. Filter values are case-sensitive.
     */
    Values?: Values;
  }
  export type Filters = Filter[];
  export type ForceDelete = boolean;
  export type GlobalTimeout = number;
  export type HealthCheckGracePeriod = number;
  export type HeartbeatTimeout = number;
  export type HonorCooldown = boolean;
  export interface Instance {
    /**
     * The ID of the instance.
     */
    InstanceId: XmlStringMaxLen19;
    /**
     * The instance type of the EC2 instance.
     */
    InstanceType?: XmlStringMaxLen255;
    /**
     * The Availability Zone in which the instance is running.
     */
    AvailabilityZone: XmlStringMaxLen255;
    /**
     * A description of the current lifecycle state. The Quarantined state is not used. For information about lifecycle states, see Instance lifecycle in the Amazon EC2 Auto Scaling User Guide. 
     */
    LifecycleState: LifecycleState;
    /**
     * The last reported health status of the instance. "Healthy" means that the instance is healthy and should remain in service. "Unhealthy" means that the instance is unhealthy and that Amazon EC2 Auto Scaling should terminate and replace it.
     */
    HealthStatus: XmlStringMaxLen32;
    /**
     * The launch configuration associated with the instance.
     */
    LaunchConfigurationName?: XmlStringMaxLen255;
    /**
     * The launch template for the instance.
     */
    LaunchTemplate?: LaunchTemplateSpecification;
    /**
     * Indicates whether the instance is protected from termination by Amazon EC2 Auto Scaling when scaling in.
     */
    ProtectedFromScaleIn: InstanceProtected;
    /**
     * The number of capacity units contributed by the instance based on its instance type. Valid Range: Minimum value of 1. Maximum value of 999.
     */
    WeightedCapacity?: XmlStringMaxLen32;
  }
  export type InstanceIds = XmlStringMaxLen19[];
  export type InstanceMetadataEndpointState = "disabled"|"enabled"|string;
  export type InstanceMetadataHttpPutResponseHopLimit = number;
  export type InstanceMetadataHttpTokensState = "optional"|"required"|string;
  export interface InstanceMetadataOptions {
    /**
     * The state of token usage for your instance metadata requests. If the parameter is not specified in the request, the default state is optional. If the state is optional, you can choose to retrieve instance metadata with or without a signed token header on your request. If you retrieve the IAM role credentials without a token, the version 1.0 role credentials are returned. If you retrieve the IAM role credentials using a valid signed token, the version 2.0 role credentials are returned. If the state is required, you must send a signed token header with any instance metadata retrieval requests. In this state, retrieving the IAM role credentials always returns the version 2.0 credentials; the version 1.0 credentials are not available.
     */
    HttpTokens?: InstanceMetadataHttpTokensState;
    /**
     * The desired HTTP PUT response hop limit for instance metadata requests. The larger the number, the further instance metadata requests can travel. Default: 1
     */
    HttpPutResponseHopLimit?: InstanceMetadataHttpPutResponseHopLimit;
    /**
     * This parameter enables or disables the HTTP metadata endpoint on your instances. If the parameter is not specified, the default state is enabled.  If you specify a value of disabled, you will not be able to access your instance metadata.  
     */
    HttpEndpoint?: InstanceMetadataEndpointState;
  }
  export interface InstanceMonitoring {
    /**
     * If true, detailed monitoring is enabled. Otherwise, basic monitoring is enabled.
     */
    Enabled?: MonitoringEnabled;
  }
  export type InstanceProtected = boolean;
  export interface InstanceRefresh {
    /**
     * The instance refresh ID.
     */
    InstanceRefreshId?: XmlStringMaxLen255;
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName?: XmlStringMaxLen255;
    /**
     * The current status for the instance refresh operation:    Pending - The request was created, but the operation has not started.    InProgress - The operation is in progress.    Successful - The operation completed successfully.    Failed - The operation failed to complete. You can troubleshoot using the status reason and the scaling activities.     Cancelling - An ongoing operation is being cancelled. Cancellation does not roll back any replacements that have already been completed, but it prevents new replacements from being started.     Cancelled - The operation is cancelled.   
     */
    Status?: InstanceRefreshStatus;
    /**
     * Provides more details about the current status of the instance refresh. 
     */
    StatusReason?: XmlStringMaxLen1023;
    /**
     * The date and time at which the instance refresh began.
     */
    StartTime?: TimestampType;
    /**
     * The date and time at which the instance refresh ended.
     */
    EndTime?: TimestampType;
    /**
     * The percentage of the instance refresh that is complete. For each instance replacement, Amazon EC2 Auto Scaling tracks the instance's health status and warm-up time. When the instance's health status changes to healthy and the specified warm-up time passes, the instance is considered updated and added to the percentage complete.
     */
    PercentageComplete?: IntPercent;
    /**
     * The number of instances remaining to update before the instance refresh is complete.
     */
    InstancesToUpdate?: InstancesToUpdate;
  }
  export type InstanceRefreshIds = XmlStringMaxLen255[];
  export type InstanceRefreshStatus = "Pending"|"InProgress"|"Successful"|"Failed"|"Cancelling"|"Cancelled"|string;
  export type InstanceRefreshes = InstanceRefresh[];
  export type Instances = Instance[];
  export interface InstancesDistribution {
    /**
     * Indicates how to allocate instance types to fulfill On-Demand capacity. The only valid value is prioritized, which is also the default value. This strategy uses the order of instance types in the overrides to define the launch priority of each instance type. The first instance type in the array is prioritized higher than the last. If all your On-Demand capacity cannot be fulfilled using your highest priority instance, then the Auto Scaling groups launches the remaining capacity using the second priority instance type, and so on.
     */
    OnDemandAllocationStrategy?: XmlString;
    /**
     * The minimum amount of the Auto Scaling group's capacity that must be fulfilled by On-Demand Instances. This base portion is provisioned first as your group scales. Defaults to 0 if not specified. If you specify weights for the instance types in the overrides, set the value of OnDemandBaseCapacity in terms of the number of capacity units, and not the number of instances.
     */
    OnDemandBaseCapacity?: OnDemandBaseCapacity;
    /**
     * Controls the percentages of On-Demand Instances and Spot Instances for your additional capacity beyond OnDemandBaseCapacity. Expressed as a number (for example, 20 specifies 20% On-Demand Instances, 80% Spot Instances). Defaults to 100 if not specified. If set to 100, only On-Demand Instances are provisioned.
     */
    OnDemandPercentageAboveBaseCapacity?: OnDemandPercentageAboveBaseCapacity;
    /**
     * Indicates how to allocate instances across Spot Instance pools. If the allocation strategy is capacity-optimized (recommended), the Auto Scaling group launches instances using Spot pools that are optimally chosen based on the available Spot capacity. If the allocation strategy is lowest-price, the Auto Scaling group launches instances using the Spot pools with the lowest price, and evenly allocates your instances across the number of Spot pools that you specify. Defaults to lowest-price if not specified.
     */
    SpotAllocationStrategy?: XmlString;
    /**
     * The number of Spot Instance pools across which to allocate your Spot Instances. The Spot pools are determined from the different instance types in the overrides. Valid only when the Spot allocation strategy is lowest-price. Value must be in the range of 1 to 20. Defaults to 2 if not specified.
     */
    SpotInstancePools?: SpotInstancePools;
    /**
     * The maximum price per unit hour that you are willing to pay for a Spot Instance. If you leave the value at its default (empty), Amazon EC2 Auto Scaling uses the On-Demand price as the maximum Spot price. To remove a value that you previously set, include the property but specify an empty string ("") for the value.
     */
    SpotMaxPrice?: MixedInstanceSpotPrice;
  }
  export type InstancesToUpdate = number;
  export type IntPercent = number;
  export interface LaunchConfiguration {
    /**
     * The name of the launch configuration.
     */
    LaunchConfigurationName: XmlStringMaxLen255;
    /**
     * The Amazon Resource Name (ARN) of the launch configuration.
     */
    LaunchConfigurationARN?: ResourceName;
    /**
     * The ID of the Amazon Machine Image (AMI) to use to launch your EC2 instances. For more information, see Finding an AMI in the Amazon EC2 User Guide for Linux Instances.
     */
    ImageId: XmlStringMaxLen255;
    /**
     * The name of the key pair. For more information, see Amazon EC2 Key Pairs in the Amazon EC2 User Guide for Linux Instances.
     */
    KeyName?: XmlStringMaxLen255;
    /**
     * A list that contains the security groups to assign to the instances in the Auto Scaling group. For more information, see Security Groups for Your VPC in the Amazon Virtual Private Cloud User Guide.
     */
    SecurityGroups?: SecurityGroups;
    /**
     * The ID of a ClassicLink-enabled VPC to link your EC2-Classic instances to. For more information, see ClassicLink in the Amazon EC2 User Guide for Linux Instances and Linking EC2-Classic instances to a VPC in the Amazon EC2 Auto Scaling User Guide.
     */
    ClassicLinkVPCId?: XmlStringMaxLen255;
    /**
     * The IDs of one or more security groups for the VPC specified in ClassicLinkVPCId. For more information, see ClassicLink in the Amazon EC2 User Guide for Linux Instances and Linking EC2-Classic instances to a VPC in the Amazon EC2 Auto Scaling User Guide.
     */
    ClassicLinkVPCSecurityGroups?: ClassicLinkVPCSecurityGroups;
    /**
     * The user data to make available to the launched EC2 instances. For more information, see Instance metadata and user data (Linux) and Instance metadata and user data (Windows). If you are using a command line tool, base64-encoding is performed for you, and you can load the text from a file. Otherwise, you must provide base64-encoded text. User data is limited to 16 KB.
     */
    UserData?: XmlStringUserData;
    /**
     * The instance type for the instances. For information about available instance types, see Available Instance Types in the Amazon EC2 User Guide for Linux Instances.
     */
    InstanceType: XmlStringMaxLen255;
    /**
     * The ID of the kernel associated with the AMI.
     */
    KernelId?: XmlStringMaxLen255;
    /**
     * The ID of the RAM disk associated with the AMI.
     */
    RamdiskId?: XmlStringMaxLen255;
    /**
     * A block device mapping, which specifies the block devices for the instance. For more information, see Block Device Mapping in the Amazon EC2 User Guide for Linux Instances.
     */
    BlockDeviceMappings?: BlockDeviceMappings;
    /**
     * Controls whether instances in this group are launched with detailed (true) or basic (false) monitoring. For more information, see Configure Monitoring for Auto Scaling Instances in the Amazon EC2 Auto Scaling User Guide.
     */
    InstanceMonitoring?: InstanceMonitoring;
    /**
     * The maximum hourly price to be paid for any Spot Instance launched to fulfill the request. Spot Instances are launched when the price you specify exceeds the current Spot price. For more information, see Requesting Spot Instances in the Amazon EC2 Auto Scaling User Guide.
     */
    SpotPrice?: SpotPrice;
    /**
     * The name or the Amazon Resource Name (ARN) of the instance profile associated with the IAM role for the instance. The instance profile contains the IAM role. For more information, see IAM role for applications that run on Amazon EC2 instances in the Amazon EC2 Auto Scaling User Guide.
     */
    IamInstanceProfile?: XmlStringMaxLen1600;
    /**
     * The creation date and time for the launch configuration.
     */
    CreatedTime: TimestampType;
    /**
     * Specifies whether the launch configuration is optimized for EBS I/O (true) or not (false). For more information, see Amazon EBS-Optimized Instances in the Amazon EC2 User Guide for Linux Instances.
     */
    EbsOptimized?: EbsOptimized;
    /**
     * For Auto Scaling groups that are running in a VPC, specifies whether to assign a public IP address to the group's instances. For more information, see Launching Auto Scaling instances in a VPC in the Amazon EC2 Auto Scaling User Guide.
     */
    AssociatePublicIpAddress?: AssociatePublicIpAddress;
    /**
     * The tenancy of the instance, either default or dedicated. An instance with dedicated tenancy runs on isolated, single-tenant hardware and can only be launched into a VPC. For more information, see Configuring instance tenancy with Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide.
     */
    PlacementTenancy?: XmlStringMaxLen64;
    /**
     * The metadata options for the instances. For more information, see Configuring the Instance Metadata Options in the Amazon EC2 Auto Scaling User Guide.
     */
    MetadataOptions?: InstanceMetadataOptions;
  }
  export interface LaunchConfigurationNameType {
    /**
     * The name of the launch configuration.
     */
    LaunchConfigurationName: XmlStringMaxLen255;
  }
  export type LaunchConfigurationNames = XmlStringMaxLen255[];
  export interface LaunchConfigurationNamesType {
    /**
     * The launch configuration names. If you omit this parameter, all launch configurations are described.
     */
    LaunchConfigurationNames?: LaunchConfigurationNames;
    /**
     * The token for the next set of items to return. (You received this token from a previous call.)
     */
    NextToken?: XmlString;
    /**
     * The maximum number of items to return with this call. The default value is 50 and the maximum value is 100.
     */
    MaxRecords?: MaxRecords;
  }
  export type LaunchConfigurations = LaunchConfiguration[];
  export interface LaunchConfigurationsType {
    /**
     * The launch configurations.
     */
    LaunchConfigurations: LaunchConfigurations;
    /**
     * A string that indicates that the response contains more items than can be returned in a single response. To receive additional items, specify this string for the NextToken value when requesting the next set of items. This value is null when there are no more items to return.
     */
    NextToken?: XmlString;
  }
  export interface LaunchTemplate {
    /**
     * The launch template to use.
     */
    LaunchTemplateSpecification?: LaunchTemplateSpecification;
    /**
     * Any parameters that you specify override the same parameters in the launch template. If not provided, Amazon EC2 Auto Scaling uses the instance type specified in the launch template when it launches an instance. 
     */
    Overrides?: Overrides;
  }
  export type LaunchTemplateName = string;
  export interface LaunchTemplateOverrides {
    /**
     * The instance type, such as m3.xlarge. You must use an instance type that is supported in your requested Region and Availability Zones. For more information, see Instance types in the Amazon Elastic Compute Cloud User Guide.
     */
    InstanceType?: XmlStringMaxLen255;
    /**
     * The number of capacity units provided by the specified instance type in terms of virtual CPUs, memory, storage, throughput, or other relative performance characteristic. When a Spot or On-Demand Instance is provisioned, the capacity units count toward the desired capacity. Amazon EC2 Auto Scaling provisions instances until the desired capacity is totally fulfilled, even if this results in an overage. For example, if there are 2 units remaining to fulfill capacity, and Amazon EC2 Auto Scaling can only provision an instance with a WeightedCapacity of 5 units, the instance is provisioned, and the desired capacity is exceeded by 3 units. For more information, see Instance weighting for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide. Value must be in the range of 1 to 999.
     */
    WeightedCapacity?: XmlStringMaxLen32;
    /**
     * Provides the launch template to be used when launching the instance type. For example, some instance types might require a launch template with a different AMI. If not provided, Amazon EC2 Auto Scaling uses the launch template that's defined for your mixed instances policy. For more information, see Specifying a different launch template for an instance type in the Amazon EC2 Auto Scaling User Guide. 
     */
    LaunchTemplateSpecification?: LaunchTemplateSpecification;
  }
  export interface LaunchTemplateSpecification {
    /**
     * The ID of the launch template. To get the template ID, use the Amazon EC2 DescribeLaunchTemplates API operation. New launch templates can be created using the Amazon EC2 CreateLaunchTemplate API.  Conditional: You must specify either a LaunchTemplateId or a LaunchTemplateName.
     */
    LaunchTemplateId?: XmlStringMaxLen255;
    /**
     * The name of the launch template. To get the template name, use the Amazon EC2 DescribeLaunchTemplates API operation. New launch templates can be created using the Amazon EC2 CreateLaunchTemplate API.  Conditional: You must specify either a LaunchTemplateId or a LaunchTemplateName.
     */
    LaunchTemplateName?: LaunchTemplateName;
    /**
     * The version number, $Latest, or $Default. To get the version number, use the Amazon EC2 DescribeLaunchTemplateVersions API operation. New launch template versions can be created using the Amazon EC2 CreateLaunchTemplateVersion API. If the value is $Latest, Amazon EC2 Auto Scaling selects the latest version of the launch template when launching instances. If the value is $Default, Amazon EC2 Auto Scaling selects the default version of the launch template when launching instances. The default value is $Default.
     */
    Version?: XmlStringMaxLen255;
  }
  export type LifecycleActionResult = string;
  export type LifecycleActionToken = string;
  export interface LifecycleHook {
    /**
     * The name of the lifecycle hook.
     */
    LifecycleHookName?: AsciiStringMaxLen255;
    /**
     * The name of the Auto Scaling group for the lifecycle hook.
     */
    AutoScalingGroupName?: XmlStringMaxLen255;
    /**
     * The state of the EC2 instance to which to attach the lifecycle hook. The following are possible values:   autoscaling:EC2_INSTANCE_LAUNCHING   autoscaling:EC2_INSTANCE_TERMINATING  
     */
    LifecycleTransition?: LifecycleTransition;
    /**
     * The ARN of the target that Amazon EC2 Auto Scaling sends notifications to when an instance is in the transition state for the lifecycle hook. The notification target can be either an SQS queue or an SNS topic.
     */
    NotificationTargetARN?: NotificationTargetResourceName;
    /**
     * The ARN of the IAM role that allows the Auto Scaling group to publish to the specified notification target.
     */
    RoleARN?: XmlStringMaxLen255;
    /**
     * Additional information that is included any time Amazon EC2 Auto Scaling sends a message to the notification target.
     */
    NotificationMetadata?: XmlStringMaxLen1023;
    /**
     * The maximum time, in seconds, that can elapse before the lifecycle hook times out. If the lifecycle hook times out, Amazon EC2 Auto Scaling performs the action that you specified in the DefaultResult parameter.
     */
    HeartbeatTimeout?: HeartbeatTimeout;
    /**
     * The maximum time, in seconds, that an instance can remain in a Pending:Wait or Terminating:Wait state. The maximum is 172800 seconds (48 hours) or 100 times HeartbeatTimeout, whichever is smaller.
     */
    GlobalTimeout?: GlobalTimeout;
    /**
     * Defines the action the Auto Scaling group should take when the lifecycle hook timeout elapses or if an unexpected failure occurs. The possible values are CONTINUE and ABANDON.
     */
    DefaultResult?: LifecycleActionResult;
  }
  export type LifecycleHookNames = AsciiStringMaxLen255[];
  export interface LifecycleHookSpecification {
    /**
     * The name of the lifecycle hook.
     */
    LifecycleHookName: AsciiStringMaxLen255;
    /**
     * The state of the EC2 instance to which you want to attach the lifecycle hook. The valid values are:   autoscaling:EC2_INSTANCE_LAUNCHING   autoscaling:EC2_INSTANCE_TERMINATING  
     */
    LifecycleTransition: LifecycleTransition;
    /**
     * Additional information that you want to include any time Amazon EC2 Auto Scaling sends a message to the notification target.
     */
    NotificationMetadata?: XmlStringMaxLen1023;
    /**
     * The maximum time, in seconds, that can elapse before the lifecycle hook times out. If the lifecycle hook times out, Amazon EC2 Auto Scaling performs the action that you specified in the DefaultResult parameter. You can prevent the lifecycle hook from timing out by calling RecordLifecycleActionHeartbeat.
     */
    HeartbeatTimeout?: HeartbeatTimeout;
    /**
     * Defines the action the Auto Scaling group should take when the lifecycle hook timeout elapses or if an unexpected failure occurs. The valid values are CONTINUE and ABANDON. The default value is ABANDON.
     */
    DefaultResult?: LifecycleActionResult;
    /**
     * The ARN of the target that Amazon EC2 Auto Scaling sends notifications to when an instance is in the transition state for the lifecycle hook. The notification target can be either an SQS queue or an SNS topic.
     */
    NotificationTargetARN?: NotificationTargetResourceName;
    /**
     * The ARN of the IAM role that allows the Auto Scaling group to publish to the specified notification target, for example, an Amazon SNS topic or an Amazon SQS queue.
     */
    RoleARN?: XmlStringMaxLen255;
  }
  export type LifecycleHookSpecifications = LifecycleHookSpecification[];
  export type LifecycleHooks = LifecycleHook[];
  export type LifecycleState = "Pending"|"Pending:Wait"|"Pending:Proceed"|"Quarantined"|"InService"|"Terminating"|"Terminating:Wait"|"Terminating:Proceed"|"Terminated"|"Detaching"|"Detached"|"EnteringStandby"|"Standby"|string;
  export type LifecycleTransition = string;
  export type LoadBalancerNames = XmlStringMaxLen255[];
  export interface LoadBalancerState {
    /**
     * The name of the load balancer.
     */
    LoadBalancerName?: XmlStringMaxLen255;
    /**
     * One of the following load balancer states:    Adding - The instances in the group are being registered with the load balancer.    Added - All instances in the group are registered with the load balancer.    InService - At least one instance in the group passed an ELB health check.    Removing - The instances in the group are being deregistered from the load balancer. If connection draining is enabled, Elastic Load Balancing waits for in-flight requests to complete before deregistering the instances.    Removed - All instances in the group are deregistered from the load balancer.  
     */
    State?: XmlStringMaxLen255;
  }
  export type LoadBalancerStates = LoadBalancerState[];
  export interface LoadBalancerTargetGroupState {
    /**
     * The Amazon Resource Name (ARN) of the target group.
     */
    LoadBalancerTargetGroupARN?: XmlStringMaxLen511;
    /**
     * The state of the target group.    Adding - The Auto Scaling instances are being registered with the target group.    Added - All Auto Scaling instances are registered with the target group.    InService - At least one Auto Scaling instance passed an ELB health check.    Removing - The Auto Scaling instances are being deregistered from the target group. If connection draining is enabled, Elastic Load Balancing waits for in-flight requests to complete before deregistering the instances.    Removed - All Auto Scaling instances are deregistered from the target group.  
     */
    State?: XmlStringMaxLen255;
  }
  export type LoadBalancerTargetGroupStates = LoadBalancerTargetGroupState[];
  export type MaxInstanceLifetime = number;
  export type MaxNumberOfAutoScalingGroups = number;
  export type MaxNumberOfLaunchConfigurations = number;
  export type MaxRecords = number;
  export interface MetricCollectionType {
    /**
     * One of the following metrics:    GroupMinSize     GroupMaxSize     GroupDesiredCapacity     GroupInServiceInstances     GroupPendingInstances     GroupStandbyInstances     GroupTerminatingInstances     GroupTotalInstances     GroupInServiceCapacity     GroupPendingCapacity     GroupStandbyCapacity     GroupTerminatingCapacity     GroupTotalCapacity   
     */
    Metric?: XmlStringMaxLen255;
  }
  export type MetricCollectionTypes = MetricCollectionType[];
  export interface MetricDimension {
    /**
     * The name of the dimension.
     */
    Name: MetricDimensionName;
    /**
     * The value of the dimension.
     */
    Value: MetricDimensionValue;
  }
  export type MetricDimensionName = string;
  export type MetricDimensionValue = string;
  export type MetricDimensions = MetricDimension[];
  export interface MetricGranularityType {
    /**
     * The granularity. The only valid value is 1Minute.
     */
    Granularity?: XmlStringMaxLen255;
  }
  export type MetricGranularityTypes = MetricGranularityType[];
  export type MetricName = string;
  export type MetricNamespace = string;
  export type MetricScale = number;
  export type MetricStatistic = "Average"|"Minimum"|"Maximum"|"SampleCount"|"Sum"|string;
  export type MetricType = "ASGAverageCPUUtilization"|"ASGAverageNetworkIn"|"ASGAverageNetworkOut"|"ALBRequestCountPerTarget"|string;
  export type MetricUnit = string;
  export type Metrics = XmlStringMaxLen255[];
  export type MinAdjustmentMagnitude = number;
  export type MinAdjustmentStep = number;
  export type MixedInstanceSpotPrice = string;
  export interface MixedInstancesPolicy {
    /**
     * Specifies the launch template to use and optionally the instance types (overrides) that are used to provision EC2 instances to fulfill On-Demand and Spot capacities. Required when creating a mixed instances policy.
     */
    LaunchTemplate?: LaunchTemplate;
    /**
     * Specifies the instances distribution. If not provided, the value for each parameter in InstancesDistribution uses a default value.
     */
    InstancesDistribution?: InstancesDistribution;
  }
  export type MonitoringEnabled = boolean;
  export type NoDevice = boolean;
  export interface NotificationConfiguration {
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName?: XmlStringMaxLen255;
    /**
     * The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (Amazon SNS) topic.
     */
    TopicARN?: XmlStringMaxLen255;
    /**
     * One of the following event notification types:    autoscaling:EC2_INSTANCE_LAUNCH     autoscaling:EC2_INSTANCE_LAUNCH_ERROR     autoscaling:EC2_INSTANCE_TERMINATE     autoscaling:EC2_INSTANCE_TERMINATE_ERROR     autoscaling:TEST_NOTIFICATION   
     */
    NotificationType?: XmlStringMaxLen255;
  }
  export type NotificationConfigurations = NotificationConfiguration[];
  export type NotificationTargetResourceName = string;
  export type NumberOfAutoScalingGroups = number;
  export type NumberOfLaunchConfigurations = number;
  export type OnDemandBaseCapacity = number;
  export type OnDemandPercentageAboveBaseCapacity = number;
  export type Overrides = LaunchTemplateOverrides[];
  export interface PoliciesType {
    /**
     * The scaling policies.
     */
    ScalingPolicies?: ScalingPolicies;
    /**
     * A string that indicates that the response contains more items than can be returned in a single response. To receive additional items, specify this string for the NextToken value when requesting the next set of items. This value is null when there are no more items to return.
     */
    NextToken?: XmlString;
  }
  export interface PolicyARNType {
    /**
     * The Amazon Resource Name (ARN) of the policy.
     */
    PolicyARN?: ResourceName;
    /**
     * The CloudWatch alarms created for the target tracking scaling policy.
     */
    Alarms?: Alarms;
  }
  export type PolicyIncrement = number;
  export type PolicyNames = ResourceName[];
  export type PolicyTypes = XmlStringMaxLen64[];
  export interface PredefinedMetricSpecification {
    /**
     * The metric type. The following predefined metrics are available:    ASGAverageCPUUtilization - Average CPU utilization of the Auto Scaling group.    ASGAverageNetworkIn - Average number of bytes received on all network interfaces by the Auto Scaling group.    ASGAverageNetworkOut - Average number of bytes sent out on all network interfaces by the Auto Scaling group.    ALBRequestCountPerTarget - Number of requests completed per target in an Application Load Balancer target group.  
     */
    PredefinedMetricType: MetricType;
    /**
     * Identifies the resource associated with the metric type. You can't specify a resource label unless the metric type is ALBRequestCountPerTarget and there is a target group attached to the Auto Scaling group. You create the resource label by appending the final portion of the load balancer ARN and the final portion of the target group ARN into a single value, separated by a forward slash (/). The format is app/&lt;load-balancer-name&gt;/&lt;load-balancer-id&gt;/targetgroup/&lt;target-group-name&gt;/&lt;target-group-id&gt;, where:   app/&lt;load-balancer-name&gt;/&lt;load-balancer-id&gt; is the final portion of the load balancer ARN   targetgroup/&lt;target-group-name&gt;/&lt;target-group-id&gt; is the final portion of the target group ARN.   This is an example: app/EC2Co-EcsEl-1TKLTMITMM0EO/f37c06a68c1748aa/targetgroup/EC2Co-Defau-LDNM7Q3ZH1ZN/6d4ea56ca2d6a18d. To find the ARN for an Application Load Balancer, use the DescribeLoadBalancers API operation. To find the ARN for the target group, use the DescribeTargetGroups API operation.
     */
    ResourceLabel?: XmlStringMaxLen1023;
  }
  export type ProcessNames = XmlStringMaxLen255[];
  export interface ProcessType {
    /**
     * One of the following processes:    Launch     Terminate     AddToLoadBalancer     AlarmNotification     AZRebalance     HealthCheck     InstanceRefresh     ReplaceUnhealthy     ScheduledActions   
     */
    ProcessName: XmlStringMaxLen255;
  }
  export type Processes = ProcessType[];
  export interface ProcessesType {
    /**
     * The names of the process types.
     */
    Processes?: Processes;
  }
  export type Progress = number;
  export type PropagateAtLaunch = boolean;
  export type ProtectedFromScaleIn = boolean;
  export interface PutLifecycleHookAnswer {
  }
  export interface PutLifecycleHookType {
    /**
     * The name of the lifecycle hook.
     */
    LifecycleHookName: AsciiStringMaxLen255;
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName: XmlStringMaxLen255;
    /**
     * The instance state to which you want to attach the lifecycle hook. The valid values are:   autoscaling:EC2_INSTANCE_LAUNCHING   autoscaling:EC2_INSTANCE_TERMINATING   Required for new lifecycle hooks, but optional when updating existing hooks.
     */
    LifecycleTransition?: LifecycleTransition;
    /**
     * The ARN of the IAM role that allows the Auto Scaling group to publish to the specified notification target, for example, an Amazon SNS topic or an Amazon SQS queue. Required for new lifecycle hooks, but optional when updating existing hooks.
     */
    RoleARN?: XmlStringMaxLen255;
    /**
     * The ARN of the notification target that Amazon EC2 Auto Scaling uses to notify you when an instance is in the transition state for the lifecycle hook. This target can be either an SQS queue or an SNS topic. If you specify an empty string, this overrides the current ARN. This operation uses the JSON format when sending notifications to an Amazon SQS queue, and an email key-value pair format when sending notifications to an Amazon SNS topic. When you specify a notification target, Amazon EC2 Auto Scaling sends it a test message. Test messages contain the following additional key-value pair: "Event": "autoscaling:TEST_NOTIFICATION".
     */
    NotificationTargetARN?: NotificationTargetResourceName;
    /**
     * Additional information that you want to include any time Amazon EC2 Auto Scaling sends a message to the notification target.
     */
    NotificationMetadata?: XmlStringMaxLen1023;
    /**
     * The maximum time, in seconds, that can elapse before the lifecycle hook times out. The range is from 30 to 7200 seconds. The default value is 3600 seconds (1 hour). If the lifecycle hook times out, Amazon EC2 Auto Scaling performs the action that you specified in the DefaultResult parameter. You can prevent the lifecycle hook from timing out by calling the RecordLifecycleActionHeartbeat API.
     */
    HeartbeatTimeout?: HeartbeatTimeout;
    /**
     * Defines the action the Auto Scaling group should take when the lifecycle hook timeout elapses or if an unexpected failure occurs. This parameter can be either CONTINUE or ABANDON. The default value is ABANDON.
     */
    DefaultResult?: LifecycleActionResult;
  }
  export interface PutNotificationConfigurationType {
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName: XmlStringMaxLen255;
    /**
     * The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (Amazon SNS) topic.
     */
    TopicARN: XmlStringMaxLen255;
    /**
     * The type of event that causes the notification to be sent. To query the notification types supported by Amazon EC2 Auto Scaling, call the DescribeAutoScalingNotificationTypes API.
     */
    NotificationTypes: AutoScalingNotificationTypes;
  }
  export interface PutScalingPolicyType {
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName: XmlStringMaxLen255;
    /**
     * The name of the policy.
     */
    PolicyName: XmlStringMaxLen255;
    /**
     * One of the following policy types:     TargetTrackingScaling     StepScaling     SimpleScaling (default)  
     */
    PolicyType?: XmlStringMaxLen64;
    /**
     * Specifies how the scaling adjustment is interpreted (for example, an absolute number or a percentage). The valid values are ChangeInCapacity, ExactCapacity, and PercentChangeInCapacity. Required if the policy type is StepScaling or SimpleScaling. For more information, see Scaling adjustment types in the Amazon EC2 Auto Scaling User Guide.
     */
    AdjustmentType?: XmlStringMaxLen255;
    /**
     * Available for backward compatibility. Use MinAdjustmentMagnitude instead.
     */
    MinAdjustmentStep?: MinAdjustmentStep;
    /**
     * The minimum value to scale by when the adjustment type is PercentChangeInCapacity. For example, suppose that you create a step scaling policy to scale out an Auto Scaling group by 25 percent and you specify a MinAdjustmentMagnitude of 2. If the group has 4 instances and the scaling policy is performed, 25 percent of 4 is 1. However, because you specified a MinAdjustmentMagnitude of 2, Amazon EC2 Auto Scaling scales out the group by 2 instances. Valid only if the policy type is StepScaling or SimpleScaling. For more information, see Scaling adjustment types in the Amazon EC2 Auto Scaling User Guide.  Some Auto Scaling groups use instance weights. In this case, set the MinAdjustmentMagnitude to a value that is at least as large as your largest instance weight. 
     */
    MinAdjustmentMagnitude?: MinAdjustmentMagnitude;
    /**
     * The amount by which to scale, based on the specified adjustment type. A positive value adds to the current capacity while a negative number removes from the current capacity. For exact capacity, you must specify a positive value. Required if the policy type is SimpleScaling. (Not used with any other policy type.) 
     */
    ScalingAdjustment?: PolicyIncrement;
    /**
     * The duration of the policy's cooldown period, in seconds. When a cooldown period is specified here, it overrides the default cooldown period defined for the Auto Scaling group. Valid only if the policy type is SimpleScaling. For more information, see Scaling cooldowns for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide.
     */
    Cooldown?: Cooldown;
    /**
     * The aggregation type for the CloudWatch metrics. The valid values are Minimum, Maximum, and Average. If the aggregation type is null, the value is treated as Average. Valid only if the policy type is StepScaling.
     */
    MetricAggregationType?: XmlStringMaxLen32;
    /**
     * A set of adjustments that enable you to scale based on the size of the alarm breach. Required if the policy type is StepScaling. (Not used with any other policy type.) 
     */
    StepAdjustments?: StepAdjustments;
    /**
     * The estimated time, in seconds, until a newly launched instance can contribute to the CloudWatch metrics. If not provided, the default is to use the value from the default cooldown period for the Auto Scaling group. Valid only if the policy type is TargetTrackingScaling or StepScaling.
     */
    EstimatedInstanceWarmup?: EstimatedInstanceWarmup;
    /**
     * A target tracking scaling policy. Includes support for predefined or customized metrics. The following predefined metrics are available:    ASGAverageCPUUtilization     ASGAverageNetworkIn     ASGAverageNetworkOut     ALBRequestCountPerTarget    If you specify ALBRequestCountPerTarget for the metric, you must specify the ResourceLabel parameter with the PredefinedMetricSpecification. For more information, see TargetTrackingConfiguration in the Amazon EC2 Auto Scaling API Reference. Required if the policy type is TargetTrackingScaling.
     */
    TargetTrackingConfiguration?: TargetTrackingConfiguration;
    /**
     * Indicates whether the scaling policy is enabled or disabled. The default is enabled. For more information, see Disabling a scaling policy for an Auto Scaling group in the Amazon EC2 Auto Scaling User Guide.
     */
    Enabled?: ScalingPolicyEnabled;
  }
  export interface PutScheduledUpdateGroupActionType {
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName: XmlStringMaxLen255;
    /**
     * The name of this scaling action.
     */
    ScheduledActionName: XmlStringMaxLen255;
    /**
     * This parameter is no longer used.
     */
    Time?: TimestampType;
    /**
     * The date and time for this action to start, in YYYY-MM-DDThh:mm:ssZ format in UTC/GMT only and in quotes (for example, "2019-06-01T00:00:00Z"). If you specify Recurrence and StartTime, Amazon EC2 Auto Scaling performs the action at this time, and then performs the action based on the specified recurrence. If you try to schedule your action in the past, Amazon EC2 Auto Scaling returns an error message.
     */
    StartTime?: TimestampType;
    /**
     * The date and time for the recurring schedule to end. Amazon EC2 Auto Scaling does not perform the action after this time.
     */
    EndTime?: TimestampType;
    /**
     * The recurring schedule for this action, in Unix cron syntax format. This format consists of five fields separated by white spaces: [Minute] [Hour] [Day_of_Month] [Month_of_Year] [Day_of_Week]. The value must be in quotes (for example, "30 0 1 1,6,12 *"). For more information about this format, see Crontab. When StartTime and EndTime are specified with Recurrence, they form the boundaries of when the recurring action starts and stops.
     */
    Recurrence?: XmlStringMaxLen255;
    /**
     * The minimum size of the Auto Scaling group.
     */
    MinSize?: AutoScalingGroupMinSize;
    /**
     * The maximum size of the Auto Scaling group.
     */
    MaxSize?: AutoScalingGroupMaxSize;
    /**
     * The desired capacity is the initial capacity of the Auto Scaling group after the scheduled action runs and the capacity it attempts to maintain. It can scale beyond this capacity if you add more scaling conditions. 
     */
    DesiredCapacity?: AutoScalingGroupDesiredCapacity;
  }
  export interface RecordLifecycleActionHeartbeatAnswer {
  }
  export interface RecordLifecycleActionHeartbeatType {
    /**
     * The name of the lifecycle hook.
     */
    LifecycleHookName: AsciiStringMaxLen255;
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName: ResourceName;
    /**
     * A token that uniquely identifies a specific lifecycle action associated with an instance. Amazon EC2 Auto Scaling sends this token to the notification target that you specified when you created the lifecycle hook.
     */
    LifecycleActionToken?: LifecycleActionToken;
    /**
     * The ID of the instance.
     */
    InstanceId?: XmlStringMaxLen19;
  }
  export type RefreshInstanceWarmup = number;
  export interface RefreshPreferences {
    /**
     * The amount of capacity in the Auto Scaling group that must remain healthy during an instance refresh to allow the operation to continue, as a percentage of the desired capacity of the Auto Scaling group (rounded up to the nearest integer). The default is 90. 
     */
    MinHealthyPercentage?: IntPercent;
    /**
     * The number of seconds until a newly launched instance is configured and ready to use. During this time, Amazon EC2 Auto Scaling does not immediately move on to the next replacement. The default is to use the value for the health check grace period defined for the group.
     */
    InstanceWarmup?: RefreshInstanceWarmup;
  }
  export type RefreshStrategy = "Rolling"|string;
  export type ResourceName = string;
  export type ScalingActivityStatusCode = "PendingSpotBidPlacement"|"WaitingForSpotInstanceRequestId"|"WaitingForSpotInstanceId"|"WaitingForInstanceId"|"PreInService"|"InProgress"|"WaitingForELBConnectionDraining"|"MidLifecycleAction"|"WaitingForInstanceWarmup"|"Successful"|"Failed"|"Cancelled"|string;
  export type ScalingPolicies = ScalingPolicy[];
  export interface ScalingPolicy {
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName?: XmlStringMaxLen255;
    /**
     * The name of the scaling policy.
     */
    PolicyName?: XmlStringMaxLen255;
    /**
     * The Amazon Resource Name (ARN) of the policy.
     */
    PolicyARN?: ResourceName;
    /**
     * One of the following policy types:     TargetTrackingScaling     StepScaling     SimpleScaling (default)   For more information, see Target tracking scaling policies and Step and simple scaling policies in the Amazon EC2 Auto Scaling User Guide.
     */
    PolicyType?: XmlStringMaxLen64;
    /**
     * Specifies how the scaling adjustment is interpreted (for example, an absolute number or a percentage). The valid values are ChangeInCapacity, ExactCapacity, and PercentChangeInCapacity.
     */
    AdjustmentType?: XmlStringMaxLen255;
    /**
     * Available for backward compatibility. Use MinAdjustmentMagnitude instead.
     */
    MinAdjustmentStep?: MinAdjustmentStep;
    /**
     * The minimum value to scale by when the adjustment type is PercentChangeInCapacity. 
     */
    MinAdjustmentMagnitude?: MinAdjustmentMagnitude;
    /**
     * The amount by which to scale, based on the specified adjustment type. A positive value adds to the current capacity while a negative number removes from the current capacity.
     */
    ScalingAdjustment?: PolicyIncrement;
    /**
     * The duration of the policy's cooldown period, in seconds.
     */
    Cooldown?: Cooldown;
    /**
     * A set of adjustments that enable you to scale based on the size of the alarm breach.
     */
    StepAdjustments?: StepAdjustments;
    /**
     * The aggregation type for the CloudWatch metrics. The valid values are Minimum, Maximum, and Average.
     */
    MetricAggregationType?: XmlStringMaxLen32;
    /**
     * The estimated time, in seconds, until a newly launched instance can contribute to the CloudWatch metrics.
     */
    EstimatedInstanceWarmup?: EstimatedInstanceWarmup;
    /**
     * The CloudWatch alarms related to the policy.
     */
    Alarms?: Alarms;
    /**
     * A target tracking scaling policy.
     */
    TargetTrackingConfiguration?: TargetTrackingConfiguration;
    /**
     * Indicates whether the policy is enabled (true) or disabled (false).
     */
    Enabled?: ScalingPolicyEnabled;
  }
  export type ScalingPolicyEnabled = boolean;
  export interface ScalingProcessQuery {
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName: XmlStringMaxLen255;
    /**
     * One or more of the following processes:    Launch     Terminate     AddToLoadBalancer     AlarmNotification     AZRebalance     HealthCheck     InstanceRefresh     ReplaceUnhealthy     ScheduledActions    If you omit this parameter, all processes are specified.
     */
    ScalingProcesses?: ProcessNames;
  }
  export type ScheduledActionNames = XmlStringMaxLen255[];
  export interface ScheduledActionsType {
    /**
     * The scheduled actions.
     */
    ScheduledUpdateGroupActions?: ScheduledUpdateGroupActions;
    /**
     * A string that indicates that the response contains more items than can be returned in a single response. To receive additional items, specify this string for the NextToken value when requesting the next set of items. This value is null when there are no more items to return.
     */
    NextToken?: XmlString;
  }
  export interface ScheduledUpdateGroupAction {
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName?: XmlStringMaxLen255;
    /**
     * The name of the scheduled action.
     */
    ScheduledActionName?: XmlStringMaxLen255;
    /**
     * The Amazon Resource Name (ARN) of the scheduled action.
     */
    ScheduledActionARN?: ResourceName;
    /**
     * This parameter is no longer used.
     */
    Time?: TimestampType;
    /**
     * The date and time in UTC for this action to start. For example, "2019-06-01T00:00:00Z". 
     */
    StartTime?: TimestampType;
    /**
     * The date and time in UTC for the recurring schedule to end. For example, "2019-06-01T00:00:00Z". 
     */
    EndTime?: TimestampType;
    /**
     * The recurring schedule for the action, in Unix cron syntax format. When StartTime and EndTime are specified with Recurrence, they form the boundaries of when the recurring action starts and stops.
     */
    Recurrence?: XmlStringMaxLen255;
    /**
     * The minimum size of the Auto Scaling group.
     */
    MinSize?: AutoScalingGroupMinSize;
    /**
     * The maximum size of the Auto Scaling group.
     */
    MaxSize?: AutoScalingGroupMaxSize;
    /**
     * The desired capacity is the initial capacity of the Auto Scaling group after the scheduled action runs and the capacity it attempts to maintain.
     */
    DesiredCapacity?: AutoScalingGroupDesiredCapacity;
  }
  export interface ScheduledUpdateGroupActionRequest {
    /**
     * The name of the scaling action.
     */
    ScheduledActionName: XmlStringMaxLen255;
    /**
     * The date and time for the action to start, in YYYY-MM-DDThh:mm:ssZ format in UTC/GMT only and in quotes (for example, "2019-06-01T00:00:00Z"). If you specify Recurrence and StartTime, Amazon EC2 Auto Scaling performs the action at this time, and then performs the action based on the specified recurrence. If you try to schedule the action in the past, Amazon EC2 Auto Scaling returns an error message.
     */
    StartTime?: TimestampType;
    /**
     * The date and time for the recurring schedule to end. Amazon EC2 Auto Scaling does not perform the action after this time.
     */
    EndTime?: TimestampType;
    /**
     * The recurring schedule for the action, in Unix cron syntax format. This format consists of five fields separated by white spaces: [Minute] [Hour] [Day_of_Month] [Month_of_Year] [Day_of_Week]. The value must be in quotes (for example, "30 0 1 1,6,12 *"). For more information about this format, see Crontab. When StartTime and EndTime are specified with Recurrence, they form the boundaries of when the recurring action starts and stops.
     */
    Recurrence?: XmlStringMaxLen255;
    /**
     * The minimum size of the Auto Scaling group.
     */
    MinSize?: AutoScalingGroupMinSize;
    /**
     * The maximum size of the Auto Scaling group.
     */
    MaxSize?: AutoScalingGroupMaxSize;
    /**
     * The desired capacity is the initial capacity of the Auto Scaling group after the scheduled action runs and the capacity it attempts to maintain.
     */
    DesiredCapacity?: AutoScalingGroupDesiredCapacity;
  }
  export type ScheduledUpdateGroupActionRequests = ScheduledUpdateGroupActionRequest[];
  export type ScheduledUpdateGroupActions = ScheduledUpdateGroupAction[];
  export type SecurityGroups = XmlString[];
  export interface SetDesiredCapacityType {
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName: XmlStringMaxLen255;
    /**
     * The desired capacity is the initial capacity of the Auto Scaling group after this operation completes and the capacity it attempts to maintain.
     */
    DesiredCapacity: AutoScalingGroupDesiredCapacity;
    /**
     * Indicates whether Amazon EC2 Auto Scaling waits for the cooldown period to complete before initiating a scaling activity to set your Auto Scaling group to its new capacity. By default, Amazon EC2 Auto Scaling does not honor the cooldown period during manual scaling activities.
     */
    HonorCooldown?: HonorCooldown;
  }
  export interface SetInstanceHealthQuery {
    /**
     * The ID of the instance.
     */
    InstanceId: XmlStringMaxLen19;
    /**
     * The health status of the instance. Set to Healthy to have the instance remain in service. Set to Unhealthy to have the instance be out of service. Amazon EC2 Auto Scaling terminates and replaces the unhealthy instance.
     */
    HealthStatus: XmlStringMaxLen32;
    /**
     * If the Auto Scaling group of the specified instance has a HealthCheckGracePeriod specified for the group, by default, this call respects the grace period. Set this to False, to have the call not respect the grace period associated with the group. For more information about the health check grace period, see CreateAutoScalingGroup in the Amazon EC2 Auto Scaling API Reference.
     */
    ShouldRespectGracePeriod?: ShouldRespectGracePeriod;
  }
  export interface SetInstanceProtectionAnswer {
  }
  export interface SetInstanceProtectionQuery {
    /**
     * One or more instance IDs. You can specify up to 50 instances.
     */
    InstanceIds: InstanceIds;
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName: XmlStringMaxLen255;
    /**
     * Indicates whether the instance is protected from termination by Amazon EC2 Auto Scaling when scaling in.
     */
    ProtectedFromScaleIn: ProtectedFromScaleIn;
  }
  export type ShouldDecrementDesiredCapacity = boolean;
  export type ShouldRespectGracePeriod = boolean;
  export type SpotInstancePools = number;
  export type SpotPrice = string;
  export interface StartInstanceRefreshAnswer {
    /**
     * A unique ID for tracking the progress of the request.
     */
    InstanceRefreshId?: XmlStringMaxLen255;
  }
  export interface StartInstanceRefreshType {
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName: XmlStringMaxLen255;
    /**
     * The strategy to use for the instance refresh. The only valid value is Rolling. A rolling update is an update that is applied to all instances in an Auto Scaling group until all instances have been updated. A rolling update can fail due to failed health checks or if instances are on standby or are protected from scale in. If the rolling update process fails, any instances that were already replaced are not rolled back to their previous configuration. 
     */
    Strategy?: RefreshStrategy;
    /**
     * Set of preferences associated with the instance refresh request. If not provided, the default values are used. For MinHealthyPercentage, the default value is 90. For InstanceWarmup, the default is to use the value specified for the health check grace period for the Auto Scaling group. For more information, see RefreshPreferences in the Amazon EC2 Auto Scaling API Reference.
     */
    Preferences?: RefreshPreferences;
  }
  export interface StepAdjustment {
    /**
     * The lower bound for the difference between the alarm threshold and the CloudWatch metric. If the metric value is above the breach threshold, the lower bound is inclusive (the metric must be greater than or equal to the threshold plus the lower bound). Otherwise, it is exclusive (the metric must be greater than the threshold plus the lower bound). A null value indicates negative infinity.
     */
    MetricIntervalLowerBound?: MetricScale;
    /**
     * The upper bound for the difference between the alarm threshold and the CloudWatch metric. If the metric value is above the breach threshold, the upper bound is exclusive (the metric must be less than the threshold plus the upper bound). Otherwise, it is inclusive (the metric must be less than or equal to the threshold plus the upper bound). A null value indicates positive infinity. The upper bound must be greater than the lower bound.
     */
    MetricIntervalUpperBound?: MetricScale;
    /**
     * The amount by which to scale, based on the specified adjustment type. A positive value adds to the current capacity while a negative number removes from the current capacity.
     */
    ScalingAdjustment: PolicyIncrement;
  }
  export type StepAdjustments = StepAdjustment[];
  export interface SuspendedProcess {
    /**
     * The name of the suspended process.
     */
    ProcessName?: XmlStringMaxLen255;
    /**
     * The reason that the process was suspended.
     */
    SuspensionReason?: XmlStringMaxLen255;
  }
  export type SuspendedProcesses = SuspendedProcess[];
  export interface Tag {
    /**
     * The name of the group.
     */
    ResourceId?: XmlString;
    /**
     * The type of resource. The only supported value is auto-scaling-group.
     */
    ResourceType?: XmlString;
    /**
     * The tag key.
     */
    Key: TagKey;
    /**
     * The tag value.
     */
    Value?: TagValue;
    /**
     * Determines whether the tag is added to new instances as they are launched in the group.
     */
    PropagateAtLaunch?: PropagateAtLaunch;
  }
  export interface TagDescription {
    /**
     * The name of the group.
     */
    ResourceId?: XmlString;
    /**
     * The type of resource. The only supported value is auto-scaling-group.
     */
    ResourceType?: XmlString;
    /**
     * The tag key.
     */
    Key?: TagKey;
    /**
     * The tag value.
     */
    Value?: TagValue;
    /**
     * Determines whether the tag is added to new instances as they are launched in the group.
     */
    PropagateAtLaunch?: PropagateAtLaunch;
  }
  export type TagDescriptionList = TagDescription[];
  export type TagKey = string;
  export type TagValue = string;
  export type Tags = Tag[];
  export interface TagsType {
    /**
     * One or more tags.
     */
    Tags?: TagDescriptionList;
    /**
     * A string that indicates that the response contains more items than can be returned in a single response. To receive additional items, specify this string for the NextToken value when requesting the next set of items. This value is null when there are no more items to return.
     */
    NextToken?: XmlString;
  }
  export type TargetGroupARNs = XmlStringMaxLen511[];
  export interface TargetTrackingConfiguration {
    /**
     * A predefined metric. You must specify either a predefined metric or a customized metric.
     */
    PredefinedMetricSpecification?: PredefinedMetricSpecification;
    /**
     * A customized metric. You must specify either a predefined metric or a customized metric.
     */
    CustomizedMetricSpecification?: CustomizedMetricSpecification;
    /**
     * The target value for the metric.
     */
    TargetValue: MetricScale;
    /**
     * Indicates whether scaling in by the target tracking scaling policy is disabled. If scaling in is disabled, the target tracking scaling policy doesn't remove instances from the Auto Scaling group. Otherwise, the target tracking scaling policy can remove instances from the Auto Scaling group. The default is false.
     */
    DisableScaleIn?: DisableScaleIn;
  }
  export interface TerminateInstanceInAutoScalingGroupType {
    /**
     * The ID of the instance.
     */
    InstanceId: XmlStringMaxLen19;
    /**
     * Indicates whether terminating the instance also decrements the size of the Auto Scaling group.
     */
    ShouldDecrementDesiredCapacity: ShouldDecrementDesiredCapacity;
  }
  export type TerminationPolicies = XmlStringMaxLen1600[];
  export type TimestampType = Date;
  export interface UpdateAutoScalingGroupType {
    /**
     * The name of the Auto Scaling group.
     */
    AutoScalingGroupName: XmlStringMaxLen255;
    /**
     * The name of the launch configuration. If you specify LaunchConfigurationName in your update request, you can't specify LaunchTemplate or MixedInstancesPolicy.
     */
    LaunchConfigurationName?: XmlStringMaxLen255;
    /**
     * The launch template and version to use to specify the updates. If you specify LaunchTemplate in your update request, you can't specify LaunchConfigurationName or MixedInstancesPolicy.
     */
    LaunchTemplate?: LaunchTemplateSpecification;
    /**
     * An embedded object that specifies a mixed instances policy. When you make changes to an existing policy, all optional parameters are left unchanged if not specified. For more information, see Auto Scaling groups with multiple instance types and purchase options in the Amazon EC2 Auto Scaling User Guide.
     */
    MixedInstancesPolicy?: MixedInstancesPolicy;
    /**
     * The minimum size of the Auto Scaling group.
     */
    MinSize?: AutoScalingGroupMinSize;
    /**
     * The maximum size of the Auto Scaling group.  With a mixed instances policy that uses instance weighting, Amazon EC2 Auto Scaling may need to go above MaxSize to meet your capacity requirements. In this event, Amazon EC2 Auto Scaling will never go above MaxSize by more than your largest instance weight (weights that define how many units each instance contributes to the desired capacity of the group). 
     */
    MaxSize?: AutoScalingGroupMaxSize;
    /**
     * The desired capacity is the initial capacity of the Auto Scaling group after this operation completes and the capacity it attempts to maintain. This number must be greater than or equal to the minimum size of the group and less than or equal to the maximum size of the group.
     */
    DesiredCapacity?: AutoScalingGroupDesiredCapacity;
    /**
     * The amount of time, in seconds, after a scaling activity completes before another scaling activity can start. The default value is 300. This setting applies when using simple scaling policies, but not when using other scaling policies or scheduled scaling. For more information, see Scaling cooldowns for Amazon EC2 Auto Scaling in the Amazon EC2 Auto Scaling User Guide.
     */
    DefaultCooldown?: Cooldown;
    /**
     * One or more Availability Zones for the group.
     */
    AvailabilityZones?: AvailabilityZones;
    /**
     * The service to use for the health checks. The valid values are EC2 and ELB. If you configure an Auto Scaling group to use ELB health checks, it considers the instance unhealthy if it fails either the EC2 status checks or the load balancer health checks.
     */
    HealthCheckType?: XmlStringMaxLen32;
    /**
     * The amount of time, in seconds, that Amazon EC2 Auto Scaling waits before checking the health status of an EC2 instance that has come into service. The default value is 0. For more information, see Health check grace period in the Amazon EC2 Auto Scaling User Guide. Conditional: Required if you are adding an ELB health check.
     */
    HealthCheckGracePeriod?: HealthCheckGracePeriod;
    /**
     * The name of an existing placement group into which to launch your instances, if any. A placement group is a logical grouping of instances within a single Availability Zone. You cannot specify multiple Availability Zones and a placement group. For more information, see Placement Groups in the Amazon EC2 User Guide for Linux Instances.
     */
    PlacementGroup?: XmlStringMaxLen255;
    /**
     * A comma-separated list of subnet IDs for a virtual private cloud (VPC). If you specify VPCZoneIdentifier with AvailabilityZones, the subnets that you specify for this parameter must reside in those Availability Zones.
     */
    VPCZoneIdentifier?: XmlStringMaxLen2047;
    /**
     * A policy or a list of policies that are used to select the instances to terminate. The policies are executed in the order that you list them. For more information, see Controlling which Auto Scaling instances terminate during scale in in the Amazon EC2 Auto Scaling User Guide.
     */
    TerminationPolicies?: TerminationPolicies;
    /**
     * Indicates whether newly launched instances are protected from termination by Amazon EC2 Auto Scaling when scaling in. For more information about preventing instances from terminating on scale in, see Instance scale-in protection in the Amazon EC2 Auto Scaling User Guide.
     */
    NewInstancesProtectedFromScaleIn?: InstanceProtected;
    /**
     * The Amazon Resource Name (ARN) of the service-linked role that the Auto Scaling group uses to call other AWS services on your behalf. For more information, see Service-linked roles in the Amazon EC2 Auto Scaling User Guide.
     */
    ServiceLinkedRoleARN?: ResourceName;
    /**
     * The maximum amount of time, in seconds, that an instance can be in service. The default is null. If specified, the value must be either 0 or a number equal to or greater than 86,400 seconds (1 day). To clear a previously set value, specify a new value of 0. For more information, see Replacing Auto Scaling instances based on maximum instance lifetime in the Amazon EC2 Auto Scaling User Guide.
     */
    MaxInstanceLifetime?: MaxInstanceLifetime;
    /**
     * Enables or disables Capacity Rebalancing. For more information, see Amazon EC2 Auto Scaling Capacity Rebalancing in the Amazon EC2 Auto Scaling User Guide.
     */
    CapacityRebalance?: CapacityRebalanceEnabled;
  }
  export type Values = XmlString[];
  export type XmlString = string;
  export type XmlStringMaxLen1023 = string;
  export type XmlStringMaxLen1600 = string;
  export type XmlStringMaxLen19 = string;
  export type XmlStringMaxLen2047 = string;
  export type XmlStringMaxLen255 = string;
  export type XmlStringMaxLen32 = string;
  export type XmlStringMaxLen511 = string;
  export type XmlStringMaxLen64 = string;
  export type XmlStringUserData = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2011-01-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the AutoScaling client.
   */
  export import Types = AutoScaling;
}
export = AutoScaling;
