///<reference types="node" />
import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
declare class ApplicationAutoScaling extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ApplicationAutoScaling.Types.ClientConfiguration)
  config: Config & ApplicationAutoScaling.Types.ClientConfiguration;
  /**
   * Deletes an Application Auto Scaling scaling policy that was previously created. If you are no longer using a scaling policy, you can delete it with this operation. Deleting a policy deletes the underlying alarm action, but does not delete the CloudWatch alarm associated with the scaling policy, even if it no longer has an associated action. To create a new scaling policy or update an existing one, see PutScalingPolicy.
   */
  deleteScalingPolicy(params: ApplicationAutoScaling.Types.DeleteScalingPolicyRequest, callback?: (err: AWSError, data: ApplicationAutoScaling.Types.DeleteScalingPolicyResponse) => void): Request<ApplicationAutoScaling.Types.DeleteScalingPolicyResponse, AWSError>;
  /**
   * Deletes an Application Auto Scaling scaling policy that was previously created. If you are no longer using a scaling policy, you can delete it with this operation. Deleting a policy deletes the underlying alarm action, but does not delete the CloudWatch alarm associated with the scaling policy, even if it no longer has an associated action. To create a new scaling policy or update an existing one, see PutScalingPolicy.
   */
  deleteScalingPolicy(callback?: (err: AWSError, data: ApplicationAutoScaling.Types.DeleteScalingPolicyResponse) => void): Request<ApplicationAutoScaling.Types.DeleteScalingPolicyResponse, AWSError>;
  /**
   * Deregisters a scalable target that was previously registered. If you are no longer using a scalable target, you can delete it with this operation. When you deregister a scalable target, all of the scaling policies that are associated with that scalable target are deleted. To create a new scalable target or update an existing one, see RegisterScalableTarget.
   */
  deregisterScalableTarget(params: ApplicationAutoScaling.Types.DeregisterScalableTargetRequest, callback?: (err: AWSError, data: ApplicationAutoScaling.Types.DeregisterScalableTargetResponse) => void): Request<ApplicationAutoScaling.Types.DeregisterScalableTargetResponse, AWSError>;
  /**
   * Deregisters a scalable target that was previously registered. If you are no longer using a scalable target, you can delete it with this operation. When you deregister a scalable target, all of the scaling policies that are associated with that scalable target are deleted. To create a new scalable target or update an existing one, see RegisterScalableTarget.
   */
  deregisterScalableTarget(callback?: (err: AWSError, data: ApplicationAutoScaling.Types.DeregisterScalableTargetResponse) => void): Request<ApplicationAutoScaling.Types.DeregisterScalableTargetResponse, AWSError>;
  /**
   * Provides descriptive information for scalable targets with a specified service namespace. You can filter the results in a service namespace with the ResourceIds and ScalableDimension parameters. To create a new scalable target or update an existing one, see RegisterScalableTarget. If you are no longer using a scalable target, you can deregister it with DeregisterScalableTarget.
   */
  describeScalableTargets(params: ApplicationAutoScaling.Types.DescribeScalableTargetsRequest, callback?: (err: AWSError, data: ApplicationAutoScaling.Types.DescribeScalableTargetsResponse) => void): Request<ApplicationAutoScaling.Types.DescribeScalableTargetsResponse, AWSError>;
  /**
   * Provides descriptive information for scalable targets with a specified service namespace. You can filter the results in a service namespace with the ResourceIds and ScalableDimension parameters. To create a new scalable target or update an existing one, see RegisterScalableTarget. If you are no longer using a scalable target, you can deregister it with DeregisterScalableTarget.
   */
  describeScalableTargets(callback?: (err: AWSError, data: ApplicationAutoScaling.Types.DescribeScalableTargetsResponse) => void): Request<ApplicationAutoScaling.Types.DescribeScalableTargetsResponse, AWSError>;
  /**
   * Provides descriptive information for scaling activities with a specified service namespace for the previous six weeks. You can filter the results in a service namespace with the ResourceId and ScalableDimension parameters. Scaling activities are triggered by CloudWatch alarms that are associated with scaling policies. To view the existing scaling policies for a service namespace, see DescribeScalingPolicies. To create a new scaling policy or update an existing one, see PutScalingPolicy.
   */
  describeScalingActivities(params: ApplicationAutoScaling.Types.DescribeScalingActivitiesRequest, callback?: (err: AWSError, data: ApplicationAutoScaling.Types.DescribeScalingActivitiesResponse) => void): Request<ApplicationAutoScaling.Types.DescribeScalingActivitiesResponse, AWSError>;
  /**
   * Provides descriptive information for scaling activities with a specified service namespace for the previous six weeks. You can filter the results in a service namespace with the ResourceId and ScalableDimension parameters. Scaling activities are triggered by CloudWatch alarms that are associated with scaling policies. To view the existing scaling policies for a service namespace, see DescribeScalingPolicies. To create a new scaling policy or update an existing one, see PutScalingPolicy.
   */
  describeScalingActivities(callback?: (err: AWSError, data: ApplicationAutoScaling.Types.DescribeScalingActivitiesResponse) => void): Request<ApplicationAutoScaling.Types.DescribeScalingActivitiesResponse, AWSError>;
  /**
   * Provides descriptive information for scaling policies with a specified service namespace. You can filter the results in a service namespace with the ResourceId, ScalableDimension, and PolicyNames parameters. To create a new scaling policy or update an existing one, see PutScalingPolicy. If you are no longer using a scaling policy, you can delete it with DeleteScalingPolicy.
   */
  describeScalingPolicies(params: ApplicationAutoScaling.Types.DescribeScalingPoliciesRequest, callback?: (err: AWSError, data: ApplicationAutoScaling.Types.DescribeScalingPoliciesResponse) => void): Request<ApplicationAutoScaling.Types.DescribeScalingPoliciesResponse, AWSError>;
  /**
   * Provides descriptive information for scaling policies with a specified service namespace. You can filter the results in a service namespace with the ResourceId, ScalableDimension, and PolicyNames parameters. To create a new scaling policy or update an existing one, see PutScalingPolicy. If you are no longer using a scaling policy, you can delete it with DeleteScalingPolicy.
   */
  describeScalingPolicies(callback?: (err: AWSError, data: ApplicationAutoScaling.Types.DescribeScalingPoliciesResponse) => void): Request<ApplicationAutoScaling.Types.DescribeScalingPoliciesResponse, AWSError>;
  /**
   * Creates or updates a policy for an existing Application Auto Scaling scalable target. Each scalable target is identified by service namespace, a resource ID, and a scalable dimension, and a scaling policy applies to a scalable target that is identified by those three attributes. You cannot create a scaling policy without first registering a scalable target with RegisterScalableTarget. To update an existing policy, use the existing policy name and set the parameters you want to change. Any existing parameter not changed in an update to an existing policy is not changed in this update request. You can view the existing scaling policies for a service namespace with DescribeScalingPolicies. If you are no longer using a scaling policy, you can delete it with DeleteScalingPolicy.
   */
  putScalingPolicy(params: ApplicationAutoScaling.Types.PutScalingPolicyRequest, callback?: (err: AWSError, data: ApplicationAutoScaling.Types.PutScalingPolicyResponse) => void): Request<ApplicationAutoScaling.Types.PutScalingPolicyResponse, AWSError>;
  /**
   * Creates or updates a policy for an existing Application Auto Scaling scalable target. Each scalable target is identified by service namespace, a resource ID, and a scalable dimension, and a scaling policy applies to a scalable target that is identified by those three attributes. You cannot create a scaling policy without first registering a scalable target with RegisterScalableTarget. To update an existing policy, use the existing policy name and set the parameters you want to change. Any existing parameter not changed in an update to an existing policy is not changed in this update request. You can view the existing scaling policies for a service namespace with DescribeScalingPolicies. If you are no longer using a scaling policy, you can delete it with DeleteScalingPolicy.
   */
  putScalingPolicy(callback?: (err: AWSError, data: ApplicationAutoScaling.Types.PutScalingPolicyResponse) => void): Request<ApplicationAutoScaling.Types.PutScalingPolicyResponse, AWSError>;
  /**
   * Registers or updates a scalable target. A scalable target is a resource that can be scaled out or in with Application Auto Scaling. After you have registered a scalable target, you can use this operation to update the minimum and maximum values for your scalable dimension. After you register a scalable target with Application Auto Scaling, you can create and apply scaling policies to it with PutScalingPolicy. You can view the existing scaling policies for a service namespace with DescribeScalableTargets. If you are no longer using a scalable target, you can deregister it with DeregisterScalableTarget.
   */
  registerScalableTarget(params: ApplicationAutoScaling.Types.RegisterScalableTargetRequest, callback?: (err: AWSError, data: ApplicationAutoScaling.Types.RegisterScalableTargetResponse) => void): Request<ApplicationAutoScaling.Types.RegisterScalableTargetResponse, AWSError>;
  /**
   * Registers or updates a scalable target. A scalable target is a resource that can be scaled out or in with Application Auto Scaling. After you have registered a scalable target, you can use this operation to update the minimum and maximum values for your scalable dimension. After you register a scalable target with Application Auto Scaling, you can create and apply scaling policies to it with PutScalingPolicy. You can view the existing scaling policies for a service namespace with DescribeScalableTargets. If you are no longer using a scalable target, you can deregister it with DeregisterScalableTarget.
   */
  registerScalableTarget(callback?: (err: AWSError, data: ApplicationAutoScaling.Types.RegisterScalableTargetResponse) => void): Request<ApplicationAutoScaling.Types.RegisterScalableTargetResponse, AWSError>;
}
declare namespace ApplicationAutoScaling.Types {
  export type AdjustmentType = "ChangeInCapacity"|"PercentChangeInCapacity"|"ExactCapacity"|string;
  export interface Alarm {
    /**
     * The name of the alarm.
     */
    AlarmName: ResourceId;
    /**
     * The Amazon Resource Name (ARN) of the alarm.
     */
    AlarmARN: ResourceId;
  }
  export type Alarms = Alarm[];
  export type Cooldown = number;
  export interface DeleteScalingPolicyRequest {
    /**
     * The name of the scaling policy to delete.
     */
    PolicyName: ResourceIdMaxLen1600;
    /**
     * The namespace for the AWS service that the scaling policy is associated with. For more information, see AWS Service Namespaces in the Amazon Web Services General Reference.
     */
    ServiceNamespace: ServiceNamespace;
    /**
     * The resource type and unique identifier string for the resource associated with the scaling policy. For Amazon ECS services, the resource type is services, and the identifier is the cluster name and service name; for example, service/default/sample-webapp. For Amazon EC2 Spot fleet requests, the resource type is spot-fleet-request, and the identifier is the Spot fleet request ID; for example, spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE.
     */
    ResourceId: ResourceIdMaxLen1600;
    /**
     * The scalable dimension associated with the scaling policy. The scalable dimension contains the service namespace, resource type, and scaling property, such as ecs:service:DesiredCount for the desired task count of an Amazon ECS service, or ec2:spot-fleet-request:TargetCapacity for the target capacity of an Amazon EC2 Spot fleet request.
     */
    ScalableDimension: ScalableDimension;
  }
  export interface DeleteScalingPolicyResponse {
  }
  export interface DeregisterScalableTargetRequest {
    /**
     * The namespace for the AWS service that the scalable target is associated with. For more information, see AWS Service Namespaces in the Amazon Web Services General Reference.
     */
    ServiceNamespace: ServiceNamespace;
    /**
     * The resource type and unique identifier string for the resource associated with the scalable target. For Amazon ECS services, the resource type is services, and the identifier is the cluster name and service name; for example, service/default/sample-webapp. For Amazon EC2 Spot fleet requests, the resource type is spot-fleet-request, and the identifier is the Spot fleet request ID; for example, spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE.
     */
    ResourceId: ResourceIdMaxLen1600;
    /**
     * The scalable dimension associated with the scalable target. The scalable dimension contains the service namespace, resource type, and scaling property, such as ecs:service:DesiredCount for the desired task count of an Amazon ECS service, or ec2:spot-fleet-request:TargetCapacity for the target capacity of an Amazon EC2 Spot fleet request.
     */
    ScalableDimension: ScalableDimension;
  }
  export interface DeregisterScalableTargetResponse {
  }
  export interface DescribeScalableTargetsRequest {
    /**
     * The namespace for the AWS service that the scalable target is associated with. For more information, see AWS Service Namespaces in the Amazon Web Services General Reference.
     */
    ServiceNamespace: ServiceNamespace;
    /**
     * The resource type and unique identifier string for the resource associated with the scalable target. For Amazon ECS services, the resource type is services, and the identifier is the cluster name and service name; for example, service/default/sample-webapp. For Amazon EC2 Spot fleet requests, the resource type is spot-fleet-request, and the identifier is the Spot fleet request ID; for example, spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE. If you specify a scalable dimension, you must also specify a resource ID.
     */
    ResourceIds?: ResourceIdsMaxLen1600;
    /**
     * The scalable dimension associated with the scalable target. The scalable dimension contains the service namespace, resource type, and scaling property, such as ecs:service:DesiredCount for the desired task count of an Amazon ECS service, or ec2:spot-fleet-request:TargetCapacity for the target capacity of an Amazon EC2 Spot fleet request. If you specify a scalable dimension, you must also specify a resource ID.
     */
    ScalableDimension?: ScalableDimension;
    /**
     * The maximum number of scalable target results returned by DescribeScalableTargets in paginated output. When this parameter is used, DescribeScalableTargets returns up to MaxResults results in a single page along with a NextToken response element. The remaining results of the initial request can be seen by sending another DescribeScalableTargets request with the returned NextToken value. This value can be between 1 and 50. If this parameter is not used, then DescribeScalableTargets returns up to 50 results and a NextToken value, if applicable.
     */
    MaxResults?: MaxResults;
    /**
     * The NextToken value returned from a previous paginated DescribeScalableTargets request. Pagination continues from the end of the previous results that returned the NextToken value. This value is null when there are no more results to return.
     */
    NextToken?: XmlString;
  }
  export interface DescribeScalableTargetsResponse {
    /**
     * The list of scalable targets that matches the request parameters.
     */
    ScalableTargets?: ScalableTargets;
    /**
     * The NextToken value to include in a future DescribeScalableTargets request. When the results of a DescribeScalableTargets request exceed MaxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return.
     */
    NextToken?: XmlString;
  }
  export interface DescribeScalingActivitiesRequest {
    /**
     * The namespace for the AWS service that the scaling activity is associated with. For more information, see AWS Service Namespaces in the Amazon Web Services General Reference.
     */
    ServiceNamespace: ServiceNamespace;
    /**
     * The resource type and unique identifier string for the resource associated with the scaling activity. For Amazon ECS services, the resource type is services, and the identifier is the cluster name and service name; for example, service/default/sample-webapp. For Amazon EC2 Spot fleet requests, the resource type is spot-fleet-request, and the identifier is the Spot fleet request ID; for example, spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE. If you specify a scalable dimension, you must also specify a resource ID.
     */
    ResourceId?: ResourceIdMaxLen1600;
    /**
     * The scalable dimension associated with the scaling activity. The scalable dimension contains the service namespace, resource type, and scaling property, such as ecs:service:DesiredCount for the desired task count of an Amazon ECS service, or ec2:spot-fleet-request:TargetCapacity for the target capacity of an Amazon EC2 Spot fleet request. If you specify a scalable dimension, you must also specify a resource ID.
     */
    ScalableDimension?: ScalableDimension;
    /**
     * The maximum number of scaling activity results returned by DescribeScalingActivities in paginated output. When this parameter is used, DescribeScalingActivities returns up to MaxResults results in a single page along with a NextToken response element. The remaining results of the initial request can be seen by sending another DescribeScalingActivities request with the returned NextToken value. This value can be between 1 and 50. If this parameter is not used, then DescribeScalingActivities returns up to 50 results and a NextToken value, if applicable.
     */
    MaxResults?: MaxResults;
    /**
     * The NextToken value returned from a previous paginated DescribeScalingActivities request. Pagination continues from the end of the previous results that returned the NextToken value. This value is null when there are no more results to return.
     */
    NextToken?: XmlString;
  }
  export interface DescribeScalingActivitiesResponse {
    /**
     * A list of scaling activity objects.
     */
    ScalingActivities?: ScalingActivities;
    /**
     * The NextToken value to include in a future DescribeScalingActivities request. When the results of a DescribeScalingActivities request exceed MaxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return.
     */
    NextToken?: XmlString;
  }
  export interface DescribeScalingPoliciesRequest {
    /**
     * The names of the scaling policies to describe.
     */
    PolicyNames?: ResourceIdsMaxLen1600;
    /**
     * The AWS service namespace of the scalable target that the scaling policy is associated with. For more information, see AWS Service Namespaces in the Amazon Web Services General Reference.
     */
    ServiceNamespace: ServiceNamespace;
    /**
     * The unique resource identifier string of the scalable target that the scaling policy is associated with. For Amazon ECS services, the resource type is services, and the identifier is the cluster name and service name; for example, service/default/sample-webapp. For Amazon EC2 Spot fleet requests, the resource type is spot-fleet-request, and the identifier is the Spot fleet request ID; for example, spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE. If you specify a scalable dimension, you must also specify a resource ID.
     */
    ResourceId?: ResourceIdMaxLen1600;
    /**
     * The scalable dimension of the scalable target that the scaling policy is associated with. The scalable dimension contains the service namespace, resource type, and scaling property, such as ecs:service:DesiredCount for the desired task count of an Amazon ECS service, or ec2:spot-fleet-request:TargetCapacity for the target capacity of an Amazon EC2 Spot fleet request. If you specify a scalable dimension, you must also specify a resource ID.
     */
    ScalableDimension?: ScalableDimension;
    /**
     * The maximum number of scaling policy results returned by DescribeScalingPolicies in paginated output. When this parameter is used, DescribeScalingPolicies returns up to MaxResults results in a single page along with a NextToken response element. The remaining results of the initial request can be seen by sending another DescribeScalingPolicies request with the returned NextToken value. This value can be between 1 and 50. If this parameter is not used, then DescribeScalingPolicies returns up to 50 results and a NextToken value, if applicable.
     */
    MaxResults?: MaxResults;
    /**
     * The NextToken value returned from a previous paginated DescribeScalingPolicies request. Pagination continues from the end of the previous results that returned the NextToken value. This value is null when there are no more results to return.
     */
    NextToken?: XmlString;
  }
  export interface DescribeScalingPoliciesResponse {
    /**
     * A list of scaling policy objects.
     */
    ScalingPolicies?: ScalingPolicies;
    /**
     * The NextToken value to include in a future DescribeScalingPolicies request. When the results of a DescribeScalingPolicies request exceed MaxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return.
     */
    NextToken?: XmlString;
  }
  export type ErrorMessage = string;
  export type MaxResults = number;
  export type MetricAggregationType = "Average"|"Minimum"|"Maximum"|string;
  export type MetricScale = number;
  export type MinAdjustmentMagnitude = number;
  export type PolicyName = string;
  export type PolicyType = "StepScaling"|string;
  export interface PutScalingPolicyRequest {
    /**
     * The name of the scaling policy.
     */
    PolicyName: PolicyName;
    /**
     * The AWS service namespace of the scalable target that this scaling policy applies to. For more information, see AWS Service Namespaces in the Amazon Web Services General Reference.
     */
    ServiceNamespace: ServiceNamespace;
    /**
     * The unique resource identifier string for the scalable target that this scaling policy applies to. For Amazon ECS services, the resource type is services, and the identifier is the cluster name and service name; for example, service/default/sample-webapp. For Amazon EC2 Spot fleet requests, the resource type is spot-fleet-request, and the identifier is the Spot fleet request ID; for example, spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE.
     */
    ResourceId: ResourceIdMaxLen1600;
    /**
     * The scalable dimension of the scalable target that this scaling policy applies to. The scalable dimension contains the service namespace, resource type, and scaling property, such as ecs:service:DesiredCount for the desired task count of an Amazon ECS service, or ec2:spot-fleet-request:TargetCapacity for the target capacity of an Amazon EC2 Spot fleet request.
     */
    ScalableDimension: ScalableDimension;
    /**
     * The policy type. If you are creating a new policy, this parameter is required. If you are updating an existing policy, this parameter is not required.
     */
    PolicyType?: PolicyType;
    /**
     * The configuration for the step scaling policy. If you are creating a new policy, this parameter is required. If you are updating an existing policy, this parameter is not required. For more information, see StepScalingPolicyConfiguration and StepAdjustment.
     */
    StepScalingPolicyConfiguration?: StepScalingPolicyConfiguration;
  }
  export interface PutScalingPolicyResponse {
    /**
     * The Amazon Resource Name (ARN) of the resulting scaling policy.
     */
    PolicyARN: ResourceIdMaxLen1600;
  }
  export interface RegisterScalableTargetRequest {
    /**
     * The namespace for the AWS service that the scalable target is associated with. For Amazon ECS services, the namespace value is ecs. For more information, see AWS Service Namespaces in the Amazon Web Services General Reference.
     */
    ServiceNamespace: ServiceNamespace;
    /**
     * The resource type and unique identifier string for the resource to associate with the scalable target. For Amazon ECS services, the resource type is services, and the identifier is the cluster name and service name; for example, service/default/sample-webapp. For Amazon EC2 Spot fleet requests, the resource type is spot-fleet-request, and the identifier is the Spot fleet request ID; for example, spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE.
     */
    ResourceId: ResourceIdMaxLen1600;
    /**
     * The scalable dimension associated with the scalable target. The scalable dimension contains the service namespace, resource type, and scaling property, such as ecs:service:DesiredCount for the desired task count of an Amazon ECS service, or ec2:spot-fleet-request:TargetCapacity for the target capacity of an Amazon EC2 Spot fleet request.
     */
    ScalableDimension: ScalableDimension;
    /**
     * The minimum value for this scalable target to scale in to in response to scaling activities. This parameter is required if you are registering a new scalable target, and it is optional if you are updating an existing one.
     */
    MinCapacity?: ResourceCapacity;
    /**
     * The maximum value for this scalable target to scale out to in response to scaling activities. This parameter is required if you are registering a new scalable target, and it is optional if you are updating an existing one.
     */
    MaxCapacity?: ResourceCapacity;
    /**
     * The ARN of the IAM role that allows Application Auto Scaling to modify your scalable target on your behalf. This parameter is required if you are registering a new scalable target, and it is optional if you are updating an existing one.
     */
    RoleARN?: ResourceIdMaxLen1600;
  }
  export interface RegisterScalableTargetResponse {
  }
  export type ResourceCapacity = number;
  export type ResourceId = string;
  export type ResourceIdMaxLen1600 = string;
  export type ResourceIdsMaxLen1600 = ResourceIdMaxLen1600[];
  export type ScalableDimension = "ecs:service:DesiredCount"|"ec2:spot-fleet-request:TargetCapacity"|string;
  export interface ScalableTarget {
    /**
     * The namespace for the AWS service that the scalable target is associated with. For more information, see AWS Service Namespaces in the Amazon Web Services General Reference.
     */
    ServiceNamespace: ServiceNamespace;
    /**
     * The resource type and unique identifier string for the resource associated with the scalable target. For Amazon ECS services, the resource type is services, and the identifier is the cluster name and service name; for example, service/default/sample-webapp. For Amazon EC2 Spot fleet requests, the resource type is spot-fleet-request, and the identifier is the Spot fleet request ID; for example, spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE.
     */
    ResourceId: ResourceIdMaxLen1600;
    /**
     * The scalable dimension associated with the scalable target. The scalable dimension contains the service namespace, resource type, and scaling property, such as ecs:service:DesiredCount for the desired task count of an Amazon ECS service, or ec2:spot-fleet-request:TargetCapacity for the target capacity of an Amazon EC2 Spot fleet request.
     */
    ScalableDimension: ScalableDimension;
    /**
     * The minimum value for this scalable target to scale in to in response to scaling activities.
     */
    MinCapacity: ResourceCapacity;
    /**
     * The maximum value for this scalable target to scale out to in response to scaling activities.
     */
    MaxCapacity: ResourceCapacity;
    /**
     * The ARN of the IAM role that allows Application Auto Scaling to modify your scalable target on your behalf.
     */
    RoleARN: ResourceIdMaxLen1600;
    /**
     * The Unix timestamp for when the scalable target was created.
     */
    CreationTime: TimestampType;
  }
  export type ScalableTargets = ScalableTarget[];
  export type ScalingActivities = ScalingActivity[];
  export interface ScalingActivity {
    /**
     * The unique identifier string for the scaling activity.
     */
    ActivityId: ResourceId;
    /**
     * The namespace for the AWS service that the scaling activity is associated with. For more information, see AWS Service Namespaces in the Amazon Web Services General Reference.
     */
    ServiceNamespace: ServiceNamespace;
    /**
     * The resource type and unique identifier string for the resource associated with the scaling activity. For Amazon ECS services, the resource type is services, and the identifier is the cluster name and service name; for example, service/default/sample-webapp. For Amazon EC2 Spot fleet requests, the resource type is spot-fleet-request, and the identifier is the Spot fleet request ID; for example, spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE.
     */
    ResourceId: ResourceIdMaxLen1600;
    /**
     * The scalable dimension associated with the scaling activity. The scalable dimension contains the service namespace, resource type, and scaling property, such as ecs:service:DesiredCount for the desired task count of an Amazon ECS service, or ec2:spot-fleet-request:TargetCapacity for the target capacity of an Amazon EC2 Spot fleet request.
     */
    ScalableDimension: ScalableDimension;
    /**
     * A simple description of what action the scaling activity intends to accomplish.
     */
    Description: XmlString;
    /**
     * A simple description of what caused the scaling activity to happen.
     */
    Cause: XmlString;
    /**
     * The Unix timestamp for when the scaling activity began.
     */
    StartTime: TimestampType;
    /**
     * The Unix timestamp for when the scaling activity ended.
     */
    EndTime?: TimestampType;
    /**
     * Indicates the status of the scaling activity.
     */
    StatusCode: ScalingActivityStatusCode;
    /**
     * A simple message about the current status of the scaling activity.
     */
    StatusMessage?: XmlString;
    /**
     * The details about the scaling activity.
     */
    Details?: XmlString;
  }
  export type ScalingActivityStatusCode = "Pending"|"InProgress"|"Successful"|"Overridden"|"Unfulfilled"|"Failed"|string;
  export type ScalingAdjustment = number;
  export type ScalingPolicies = ScalingPolicy[];
  export interface ScalingPolicy {
    /**
     * The Amazon Resource Name (ARN) of the scaling policy.
     */
    PolicyARN: ResourceIdMaxLen1600;
    /**
     * The name of the scaling policy.
     */
    PolicyName: PolicyName;
    /**
     * The namespace for the AWS service that the scaling policy is associated with. For more information, see AWS Service Namespaces in the Amazon Web Services General Reference.
     */
    ServiceNamespace: ServiceNamespace;
    /**
     * The resource type and unique identifier string for the resource associated with the scaling policy. For Amazon ECS services, the resource type is services, and the identifier is the cluster name and service name; for example, service/default/sample-webapp. For Amazon EC2 Spot fleet requests, the resource type is spot-fleet-request, and the identifier is the Spot fleet request ID; for example, spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE.
     */
    ResourceId: ResourceIdMaxLen1600;
    /**
     * The scalable dimension associated with the scaling policy. The scalable dimension contains the service namespace, resource type, and scaling property, such as ecs:service:DesiredCount for the desired task count of an Amazon ECS service, or ec2:spot-fleet-request:TargetCapacity for the target capacity of an Amazon EC2 Spot fleet request.
     */
    ScalableDimension: ScalableDimension;
    /**
     * The scaling policy type.
     */
    PolicyType: PolicyType;
    /**
     * The configuration for the step scaling policy.
     */
    StepScalingPolicyConfiguration?: StepScalingPolicyConfiguration;
    /**
     * The CloudWatch alarms that are associated with the scaling policy.
     */
    Alarms?: Alarms;
    /**
     * The Unix timestamp for when the scaling policy was created.
     */
    CreationTime: TimestampType;
  }
  export type ServiceNamespace = "ecs"|"ec2"|string;
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
     * The amount by which to scale, based on the specified adjustment type. A positive value adds to the current scalable dimension while a negative number removes from the current scalable dimension.
     */
    ScalingAdjustment: ScalingAdjustment;
  }
  export type StepAdjustments = StepAdjustment[];
  export interface StepScalingPolicyConfiguration {
    /**
     * The adjustment type, which specifies how the ScalingAdjustment parameter in a StepAdjustment is interpreted.
     */
    AdjustmentType?: AdjustmentType;
    /**
     * A set of adjustments that enable you to scale based on the size of the alarm breach.
     */
    StepAdjustments?: StepAdjustments;
    /**
     * The minimum number to adjust your scalable dimension as a result of a scaling activity. If the adjustment type is PercentChangeInCapacity, the scaling policy changes the scalable dimension of the scalable target by this amount.
     */
    MinAdjustmentMagnitude?: MinAdjustmentMagnitude;
    /**
     * The amount of time, in seconds, after a scaling activity completes where previous trigger-related scaling activities can influence future scaling events. For scale out policies, while Cooldown is in effect, the capacity that has been added by the previous scale out event that initiated the Cooldown is calculated as part of the desired capacity for the next scale out. The intention is to continuously (but not excessively) scale out. For example, an alarm triggers a step scaling policy to scale out an Amazon ECS service by 2 tasks, the scaling activity completes successfully, and a Cooldown period of 5 minutes starts. During the Cooldown period, if the alarm triggers the same policy again but at a more aggressive step adjustment to scale out the service by 3 tasks, the 2 tasks that were added in the previous scale out event are considered part of that capacity and only 1 additional task is added to the desired count. For scale in policies, the Cooldown period is used to block subsequent scale in requests until it has expired. The intention is to scale in conservatively to protect your application's availability. However, if another alarm triggers a scale out policy during the Cooldown period after a scale-in, Application Auto Scaling scales out your scalable target immediately.
     */
    Cooldown?: Cooldown;
    /**
     * The aggregation type for the CloudWatch metrics. Valid values are Minimum, Maximum, and Average.
     */
    MetricAggregationType?: MetricAggregationType;
  }
  export type TimestampType = Date;
  export type XmlString = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2016-02-06"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
}
export = ApplicationAutoScaling;
