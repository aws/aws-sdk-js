import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class AutoScalingPlans extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: AutoScalingPlans.Types.ClientConfiguration)
  config: Config & AutoScalingPlans.Types.ClientConfiguration;
  /**
   * Creates a scaling plan. A scaling plan contains a set of instructions used to configure dynamic scaling for the scalable resources in your application. AWS Auto Scaling creates target tracking scaling policies based on the scaling instructions in your scaling plan.
   */
  createScalingPlan(params: AutoScalingPlans.Types.CreateScalingPlanRequest, callback?: (err: AWSError, data: AutoScalingPlans.Types.CreateScalingPlanResponse) => void): Request<AutoScalingPlans.Types.CreateScalingPlanResponse, AWSError>;
  /**
   * Creates a scaling plan. A scaling plan contains a set of instructions used to configure dynamic scaling for the scalable resources in your application. AWS Auto Scaling creates target tracking scaling policies based on the scaling instructions in your scaling plan.
   */
  createScalingPlan(callback?: (err: AWSError, data: AutoScalingPlans.Types.CreateScalingPlanResponse) => void): Request<AutoScalingPlans.Types.CreateScalingPlanResponse, AWSError>;
  /**
   * Deletes the specified scaling plan.
   */
  deleteScalingPlan(params: AutoScalingPlans.Types.DeleteScalingPlanRequest, callback?: (err: AWSError, data: AutoScalingPlans.Types.DeleteScalingPlanResponse) => void): Request<AutoScalingPlans.Types.DeleteScalingPlanResponse, AWSError>;
  /**
   * Deletes the specified scaling plan.
   */
  deleteScalingPlan(callback?: (err: AWSError, data: AutoScalingPlans.Types.DeleteScalingPlanResponse) => void): Request<AutoScalingPlans.Types.DeleteScalingPlanResponse, AWSError>;
  /**
   * Describes the scalable resources in the specified scaling plan.
   */
  describeScalingPlanResources(params: AutoScalingPlans.Types.DescribeScalingPlanResourcesRequest, callback?: (err: AWSError, data: AutoScalingPlans.Types.DescribeScalingPlanResourcesResponse) => void): Request<AutoScalingPlans.Types.DescribeScalingPlanResourcesResponse, AWSError>;
  /**
   * Describes the scalable resources in the specified scaling plan.
   */
  describeScalingPlanResources(callback?: (err: AWSError, data: AutoScalingPlans.Types.DescribeScalingPlanResourcesResponse) => void): Request<AutoScalingPlans.Types.DescribeScalingPlanResourcesResponse, AWSError>;
  /**
   * Describes the specified scaling plans or all of your scaling plans.
   */
  describeScalingPlans(params: AutoScalingPlans.Types.DescribeScalingPlansRequest, callback?: (err: AWSError, data: AutoScalingPlans.Types.DescribeScalingPlansResponse) => void): Request<AutoScalingPlans.Types.DescribeScalingPlansResponse, AWSError>;
  /**
   * Describes the specified scaling plans or all of your scaling plans.
   */
  describeScalingPlans(callback?: (err: AWSError, data: AutoScalingPlans.Types.DescribeScalingPlansResponse) => void): Request<AutoScalingPlans.Types.DescribeScalingPlansResponse, AWSError>;
}
declare namespace AutoScalingPlans {
  export interface ApplicationSource {
    /**
     * The Amazon Resource Name (ARN) of a CloudFormation stack.
     */
    CloudFormationStackARN?: XmlString;
  }
  export type ApplicationSources = ApplicationSource[];
  export type Cooldown = number;
  export interface CreateScalingPlanRequest {
    /**
     * The name of the scaling plan.
     */
    ScalingPlanName: ScalingPlanName;
    /**
     * The source for the application.
     */
    ApplicationSource: ApplicationSource;
    /**
     * The scaling instructions.
     */
    ScalingInstructions: ScalingInstructions;
  }
  export interface CreateScalingPlanResponse {
    /**
     * The version of the scaling plan. This value is always 1.
     */
    ScalingPlanVersion: ScalingPlanVersion;
  }
  export interface CustomizedScalingMetricSpecification {
    /**
     * The name of the metric.
     */
    MetricName: MetricName;
    /**
     * The namespace of the metric.
     */
    Namespace: MetricNamespace;
    /**
     * The dimensions of the metric.
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
  export interface DeleteScalingPlanRequest {
    /**
     * The name of the scaling plan.
     */
    ScalingPlanName: ScalingPlanName;
    /**
     * The version of the scaling plan.
     */
    ScalingPlanVersion: ScalingPlanVersion;
  }
  export interface DeleteScalingPlanResponse {
  }
  export interface DescribeScalingPlanResourcesRequest {
    /**
     * The name of the scaling plan.
     */
    ScalingPlanName: ScalingPlanName;
    /**
     * The version of the scaling plan.
     */
    ScalingPlanVersion: ScalingPlanVersion;
    /**
     * The maximum number of scalable resources to return. This value can be between 1 and 50. The default value is 50.
     */
    MaxResults?: MaxResults;
    /**
     * The token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface DescribeScalingPlanResourcesResponse {
    /**
     * Information about the scalable resources.
     */
    ScalingPlanResources?: ScalingPlanResources;
    /**
     * The token required to get the next set of results. This value is null if there are no more results to return.
     */
    NextToken?: NextToken;
  }
  export interface DescribeScalingPlansRequest {
    /**
     * The names of the scaling plans (up to 10). If you specify application sources, you cannot specify scaling plan names.
     */
    ScalingPlanNames?: ScalingPlanNames;
    /**
     * The version of the scaling plan. If you specify a scaling plan version, you must also specify a scaling plan name.
     */
    ScalingPlanVersion?: ScalingPlanVersion;
    /**
     * The sources for the applications (up to 10). If you specify scaling plan names, you cannot specify application sources.
     */
    ApplicationSources?: ApplicationSources;
    /**
     * The maximum number of scalable resources to return. This value can be between 1 and 50. The default value is 50.
     */
    MaxResults?: MaxResults;
    /**
     * The token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface DescribeScalingPlansResponse {
    /**
     * Information about the scaling plans.
     */
    ScalingPlans?: ScalingPlans;
    /**
     * The token required to get the next set of results. This value is null if there are no more results to return.
     */
    NextToken?: NextToken;
  }
  export type DisableScaleIn = boolean;
  export type ErrorMessage = string;
  export type MaxResults = number;
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
  export type MetricName = string;
  export type MetricNamespace = string;
  export type MetricScale = number;
  export type MetricStatistic = "Average"|"Minimum"|"Maximum"|"SampleCount"|"Sum"|string;
  export type MetricUnit = string;
  export type NextToken = string;
  export type PolicyName = string;
  export type PolicyType = "TargetTrackingScaling"|string;
  export interface PredefinedScalingMetricSpecification {
    /**
     * The metric type. The ALBRequestCountPerTarget metric type applies only to Auto Scaling groups, Sport Fleet requests, and ECS services.
     */
    PredefinedScalingMetricType: ScalingMetricType;
    /**
     * Identifies the resource associated with the metric type. You can't specify a resource label unless the metric type is ALBRequestCountPerTarget and there is a target group attached to the Auto Scaling group, Spot Fleet request, or ECS service. The format is app/&lt;load-balancer-name&gt;/&lt;load-balancer-id&gt;/targetgroup/&lt;target-group-name&gt;/&lt;target-group-id&gt;, where:   app/&lt;load-balancer-name&gt;/&lt;load-balancer-id&gt; is the final portion of the load balancer ARN   targetgroup/&lt;target-group-name&gt;/&lt;target-group-id&gt; is the final portion of the target group ARN.  
     */
    ResourceLabel?: ResourceLabel;
  }
  export type ResourceCapacity = number;
  export type ResourceIdMaxLen1600 = string;
  export type ResourceLabel = string;
  export type ScalableDimension = "autoscaling:autoScalingGroup:DesiredCapacity"|"ecs:service:DesiredCount"|"ec2:spot-fleet-request:TargetCapacity"|"rds:cluster:ReadReplicaCount"|"dynamodb:table:ReadCapacityUnits"|"dynamodb:table:WriteCapacityUnits"|"dynamodb:index:ReadCapacityUnits"|"dynamodb:index:WriteCapacityUnits"|string;
  export interface ScalingInstruction {
    /**
     * The namespace of the AWS service.
     */
    ServiceNamespace: ServiceNamespace;
    /**
     * The ID of the resource. This string consists of the resource type and unique identifier.   Auto Scaling group - The resource type is autoScalingGroup and the unique identifier is the name of the Auto Scaling group. Example: autoScalingGroup/my-asg.   ECS service - The resource type is service and the unique identifier is the cluster name and service name. Example: service/default/sample-webapp.   Spot fleet request - The resource type is spot-fleet-request and the unique identifier is the Spot fleet request ID. Example: spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE.   DynamoDB table - The resource type is table and the unique identifier is the resource ID. Example: table/my-table.   DynamoDB global secondary index - The resource type is index and the unique identifier is the resource ID. Example: table/my-table/index/my-table-index.   Aurora DB cluster - The resource type is cluster and the unique identifier is the cluster name. Example: cluster:my-db-cluster.  
     */
    ResourceId: ResourceIdMaxLen1600;
    /**
     * The scalable dimension associated with the resource.    autoscaling:autoScalingGroup:DesiredCapacity - The desired capacity of an Auto Scaling group.    ecs:service:DesiredCount - The desired task count of an ECS service.    ec2:spot-fleet-request:TargetCapacity - The target capacity of a Spot fleet request.    dynamodb:table:ReadCapacityUnits - The provisioned read capacity for a DynamoDB table.    dynamodb:table:WriteCapacityUnits - The provisioned write capacity for a DynamoDB table.    dynamodb:index:ReadCapacityUnits - The provisioned read capacity for a DynamoDB global secondary index.    dynamodb:index:WriteCapacityUnits - The provisioned write capacity for a DynamoDB global secondary index.    rds:cluster:ReadReplicaCount - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition.  
     */
    ScalableDimension: ScalableDimension;
    /**
     * The minimum value to scale to in response to a scale in event.
     */
    MinCapacity: ResourceCapacity;
    /**
     * The maximum value to scale to in response to a scale out event.
     */
    MaxCapacity: ResourceCapacity;
    /**
     * The target tracking scaling policies (up to 10).
     */
    TargetTrackingConfigurations: TargetTrackingConfigurations;
  }
  export type ScalingInstructions = ScalingInstruction[];
  export type ScalingMetricType = "ASGAverageCPUUtilization"|"ASGAverageNetworkIn"|"ASGAverageNetworkOut"|"DynamoDBReadCapacityUtilization"|"DynamoDBWriteCapacityUtilization"|"ECSServiceAverageCPUUtilization"|"ECSServiceAverageMemoryUtilization"|"ALBRequestCountPerTarget"|"RDSReaderAverageCPUUtilization"|"RDSReaderAverageDatabaseConnections"|"EC2SpotFleetRequestAverageCPUUtilization"|"EC2SpotFleetRequestAverageNetworkIn"|"EC2SpotFleetRequestAverageNetworkOut"|string;
  export interface ScalingPlan {
    /**
     * The name of the scaling plan.
     */
    ScalingPlanName: ScalingPlanName;
    /**
     * The version of the scaling plan.
     */
    ScalingPlanVersion: ScalingPlanVersion;
    /**
     * The application source.
     */
    ApplicationSource: ApplicationSource;
    /**
     * The scaling instructions.
     */
    ScalingInstructions: ScalingInstructions;
    /**
     * The status of the scaling plan.    Active - The scaling plan is active.    ActiveWithProblems - The scaling plan is active, but the scaling configuration for one or more resources could not be applied.    CreationInProgress - The scaling plan is being created.    CreationFailed - The scaling plan could not be created.    DeletionInProgress - The scaling plan is being deleted.    DeletionFailed - The scaling plan could not be deleted.  
     */
    StatusCode: ScalingPlanStatusCode;
    /**
     * A simple message about the current status of the scaling plan.
     */
    StatusMessage?: XmlString;
    /**
     * The Unix timestamp when the scaling plan was created.
     */
    CreationTime?: TimestampType;
  }
  export type ScalingPlanName = string;
  export type ScalingPlanNames = ScalingPlanName[];
  export interface ScalingPlanResource {
    /**
     * The name of the scaling plan.
     */
    ScalingPlanName: ScalingPlanName;
    /**
     * The version of the scaling plan.
     */
    ScalingPlanVersion: ScalingPlanVersion;
    /**
     * The namespace of the AWS service.
     */
    ServiceNamespace: ServiceNamespace;
    /**
     * The ID of the resource. This string consists of the resource type and unique identifier.   Auto Scaling group - The resource type is autoScalingGroup and the unique identifier is the name of the Auto Scaling group. Example: autoScalingGroup/my-asg.   ECS service - The resource type is service and the unique identifier is the cluster name and service name. Example: service/default/sample-webapp.   Spot fleet request - The resource type is spot-fleet-request and the unique identifier is the Spot fleet request ID. Example: spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE.   DynamoDB table - The resource type is table and the unique identifier is the resource ID. Example: table/my-table.   DynamoDB global secondary index - The resource type is index and the unique identifier is the resource ID. Example: table/my-table/index/my-table-index.   Aurora DB cluster - The resource type is cluster and the unique identifier is the cluster name. Example: cluster:my-db-cluster.  
     */
    ResourceId: ResourceIdMaxLen1600;
    /**
     * The scalable dimension for the resource.    autoscaling:autoScalingGroup:DesiredCapacity - The desired capacity of an Auto Scaling group.    ecs:service:DesiredCount - The desired task count of an ECS service.    ec2:spot-fleet-request:TargetCapacity - The target capacity of a Spot fleet request.    dynamodb:table:ReadCapacityUnits - The provisioned read capacity for a DynamoDB table.    dynamodb:table:WriteCapacityUnits - The provisioned write capacity for a DynamoDB table.    dynamodb:index:ReadCapacityUnits - The provisioned read capacity for a DynamoDB global secondary index.    dynamodb:index:WriteCapacityUnits - The provisioned write capacity for a DynamoDB global secondary index.    rds:cluster:ReadReplicaCount - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition.  
     */
    ScalableDimension: ScalableDimension;
    /**
     * The scaling policies.
     */
    ScalingPolicies?: ScalingPolicies;
    /**
     * The scaling status of the resource.    Active - The scaling configuration is active.    Inactive - The scaling configuration is not active because the scaling plan is being created or the scaling configuration could not be applied. Check the status message for more information.    PartiallyActive - The scaling configuration is partially active because the scaling plan is being created or deleted or the scaling configuration could not be fully applied. Check the status message for more information.  
     */
    ScalingStatusCode: ScalingStatusCode;
    /**
     * A simple message about the current scaling status of the resource.
     */
    ScalingStatusMessage?: XmlString;
  }
  export type ScalingPlanResources = ScalingPlanResource[];
  export type ScalingPlanStatusCode = "Active"|"ActiveWithProblems"|"CreationInProgress"|"CreationFailed"|"DeletionInProgress"|"DeletionFailed"|string;
  export type ScalingPlanVersion = number;
  export type ScalingPlans = ScalingPlan[];
  export type ScalingPolicies = ScalingPolicy[];
  export interface ScalingPolicy {
    /**
     * The name of the scaling policy.
     */
    PolicyName: PolicyName;
    /**
     * The type of scaling policy.
     */
    PolicyType: PolicyType;
    /**
     * The target tracking scaling policy.
     */
    TargetTrackingConfiguration?: TargetTrackingConfiguration;
  }
  export type ScalingStatusCode = "Inactive"|"PartiallyActive"|"Active"|string;
  export type ServiceNamespace = "autoscaling"|"ecs"|"ec2"|"rds"|"dynamodb"|string;
  export interface TargetTrackingConfiguration {
    /**
     * A predefined metric.
     */
    PredefinedScalingMetricSpecification?: PredefinedScalingMetricSpecification;
    /**
     * A customized metric.
     */
    CustomizedScalingMetricSpecification?: CustomizedScalingMetricSpecification;
    /**
     * The target value for the metric. The range is 8.515920e-109 to 1.174271e+108 (Base 10) or 2e-360 to 2e360 (Base 2).
     */
    TargetValue: MetricScale;
    /**
     * Indicates whether scale in by the target tracking policy is disabled. If the value is true, scale in is disabled and the target tracking policy won't remove capacity from the scalable resource. Otherwise, scale in is enabled and the target tracking policy can remove capacity from the scalable resource. The default value is false.
     */
    DisableScaleIn?: DisableScaleIn;
    /**
     * The amount of time, in seconds, after a scale out activity completes before another scale out activity can start. This value is not used if the scalable resource is an Auto Scaling group. While the cooldown period is in effect, the capacity that has been added by the previous scale out event that initiated the cooldown is calculated as part of the desired capacity for the next scale out. The intention is to continuously (but not excessively) scale out.
     */
    ScaleOutCooldown?: Cooldown;
    /**
     * The amount of time, in seconds, after a scale in activity completes before another scale in activity can start. This value is not used if the scalable resource is an Auto Scaling group. The cooldown period is used to block subsequent scale in requests until it has expired. The intention is to scale in conservatively to protect your application's availability. However, if another alarm triggers a scale out policy during the cooldown period after a scale-in, AWS Auto Scaling scales out your scalable target immediately.
     */
    ScaleInCooldown?: Cooldown;
    /**
     * The estimated time, in seconds, until a newly launched instance can contribute to the CloudWatch metrics. This value is used only if the resource is an Auto Scaling group.
     */
    EstimatedInstanceWarmup?: Cooldown;
  }
  export type TargetTrackingConfigurations = TargetTrackingConfiguration[];
  export type TimestampType = Date;
  export type XmlString = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-01-06"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the AutoScalingPlans client.
   */
  export import Types = AutoScalingPlans;
}
export = AutoScalingPlans;
