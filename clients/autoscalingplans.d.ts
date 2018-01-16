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
   * 
   */
  createScalingPlan(params: AutoScalingPlans.Types.CreateScalingPlanRequest, callback?: (err: AWSError, data: AutoScalingPlans.Types.CreateScalingPlanResponse) => void): Request<AutoScalingPlans.Types.CreateScalingPlanResponse, AWSError>;
  /**
   * 
   */
  createScalingPlan(callback?: (err: AWSError, data: AutoScalingPlans.Types.CreateScalingPlanResponse) => void): Request<AutoScalingPlans.Types.CreateScalingPlanResponse, AWSError>;
  /**
   * 
   */
  deleteScalingPlan(params: AutoScalingPlans.Types.DeleteScalingPlanRequest, callback?: (err: AWSError, data: AutoScalingPlans.Types.DeleteScalingPlanResponse) => void): Request<AutoScalingPlans.Types.DeleteScalingPlanResponse, AWSError>;
  /**
   * 
   */
  deleteScalingPlan(callback?: (err: AWSError, data: AutoScalingPlans.Types.DeleteScalingPlanResponse) => void): Request<AutoScalingPlans.Types.DeleteScalingPlanResponse, AWSError>;
  /**
   * 
   */
  describeScalingPlanResources(params: AutoScalingPlans.Types.DescribeScalingPlanResourcesRequest, callback?: (err: AWSError, data: AutoScalingPlans.Types.DescribeScalingPlanResourcesResponse) => void): Request<AutoScalingPlans.Types.DescribeScalingPlanResourcesResponse, AWSError>;
  /**
   * 
   */
  describeScalingPlanResources(callback?: (err: AWSError, data: AutoScalingPlans.Types.DescribeScalingPlanResourcesResponse) => void): Request<AutoScalingPlans.Types.DescribeScalingPlanResourcesResponse, AWSError>;
  /**
   * 
   */
  describeScalingPlans(params: AutoScalingPlans.Types.DescribeScalingPlansRequest, callback?: (err: AWSError, data: AutoScalingPlans.Types.DescribeScalingPlansResponse) => void): Request<AutoScalingPlans.Types.DescribeScalingPlansResponse, AWSError>;
  /**
   * 
   */
  describeScalingPlans(callback?: (err: AWSError, data: AutoScalingPlans.Types.DescribeScalingPlansResponse) => void): Request<AutoScalingPlans.Types.DescribeScalingPlansResponse, AWSError>;
}
declare namespace AutoScalingPlans {
  export interface ApplicationSource {
    CloudFormationStackARN?: XmlString;
  }
  export type ApplicationSources = ApplicationSource[];
  export type Cooldown = number;
  export interface CreateScalingPlanRequest {
    ScalingPlanName: ScalingPlanName;
    ApplicationSource: ApplicationSource;
    ScalingInstructions: ScalingInstructions;
  }
  export interface CreateScalingPlanResponse {
    ScalingPlanVersion: ScalingPlanVersion;
  }
  export interface CustomizedScalingMetricSpecification {
    MetricName: MetricName;
    Namespace: MetricNamespace;
    Dimensions?: MetricDimensions;
    Statistic: MetricStatistic;
    Unit?: MetricUnit;
  }
  export interface DeleteScalingPlanRequest {
    ScalingPlanName: ScalingPlanName;
    ScalingPlanVersion: ScalingPlanVersion;
  }
  export interface DeleteScalingPlanResponse {
  }
  export interface DescribeScalingPlanResourcesRequest {
    ScalingPlanName: ScalingPlanName;
    ScalingPlanVersion: ScalingPlanVersion;
    MaxResults?: MaxResults;
    NextToken?: NextToken;
  }
  export interface DescribeScalingPlanResourcesResponse {
    ScalingPlanResources?: ScalingPlanResources;
    NextToken?: NextToken;
  }
  export interface DescribeScalingPlansRequest {
    ScalingPlanNames?: ScalingPlanNames;
    ScalingPlanVersion?: ScalingPlanVersion;
    ApplicationSources?: ApplicationSources;
    MaxResults?: MaxResults;
    NextToken?: NextToken;
  }
  export interface DescribeScalingPlansResponse {
    ScalingPlans?: ScalingPlans;
    NextToken?: NextToken;
  }
  export type DisableScaleIn = boolean;
  export type ErrorMessage = string;
  export type MaxResults = number;
  export interface MetricDimension {
    Name: MetricDimensionName;
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
    PredefinedScalingMetricType: ScalingMetricType;
    ResourceLabel?: ResourceLabel;
  }
  export type ResourceCapacity = number;
  export type ResourceIdMaxLen1600 = string;
  export type ResourceLabel = string;
  export type ScalableDimension = "autoscaling:autoScalingGroup:DesiredCapacity"|"ecs:service:DesiredCount"|"ec2:spot-fleet-request:TargetCapacity"|"rds:cluster:ReadReplicaCount"|"dynamodb:table:ReadCapacityUnits"|"dynamodb:table:WriteCapacityUnits"|"dynamodb:index:ReadCapacityUnits"|"dynamodb:index:WriteCapacityUnits"|string;
  export interface ScalingInstruction {
    ServiceNamespace: ServiceNamespace;
    ResourceId: ResourceIdMaxLen1600;
    ScalableDimension: ScalableDimension;
    MinCapacity: ResourceCapacity;
    MaxCapacity: ResourceCapacity;
    TargetTrackingConfigurations: TargetTrackingConfigurations;
  }
  export type ScalingInstructions = ScalingInstruction[];
  export type ScalingMetricType = "ASGAverageCPUUtilization"|"ASGAverageNetworkIn"|"ASGAverageNetworkOut"|"DynamoDBReadCapacityUtilization"|"DynamoDBWriteCapacityUtilization"|"ECSServiceAverageCPUUtilization"|"ECSServiceAverageMemoryUtilization"|"ALBRequestCountPerTarget"|"RDSReaderAverageCPUUtilization"|"RDSReaderAverageDatabaseConnections"|"EC2SpotFleetRequestAverageCPUUtilization"|"EC2SpotFleetRequestAverageNetworkIn"|"EC2SpotFleetRequestAverageNetworkOut"|string;
  export interface ScalingPlan {
    ScalingPlanName: ScalingPlanName;
    ScalingPlanVersion: ScalingPlanVersion;
    ApplicationSource: ApplicationSource;
    ScalingInstructions: ScalingInstructions;
    StatusCode: ScalingPlanStatusCode;
    StatusMessage?: XmlString;
    CreationTime?: TimestampType;
  }
  export type ScalingPlanName = string;
  export type ScalingPlanNames = ScalingPlanName[];
  export interface ScalingPlanResource {
    ScalingPlanName: ScalingPlanName;
    ScalingPlanVersion: ScalingPlanVersion;
    ServiceNamespace: ServiceNamespace;
    ResourceId: ResourceIdMaxLen1600;
    ScalableDimension: ScalableDimension;
    ScalingPolicies?: ScalingPolicies;
    ScalingStatusCode: ScalingStatusCode;
    ScalingStatusMessage?: XmlString;
  }
  export type ScalingPlanResources = ScalingPlanResource[];
  export type ScalingPlanStatusCode = "Active"|"ActiveWithProblems"|"CreationInProgress"|"CreationFailed"|"DeletionInProgress"|"DeletionFailed"|string;
  export type ScalingPlanVersion = number;
  export type ScalingPlans = ScalingPlan[];
  export type ScalingPolicies = ScalingPolicy[];
  export interface ScalingPolicy {
    PolicyName: PolicyName;
    PolicyType: PolicyType;
    TargetTrackingConfiguration?: TargetTrackingConfiguration;
  }
  export type ScalingStatusCode = "Inactive"|"PartiallyActive"|"Active"|string;
  export type ServiceNamespace = "autoscaling"|"ecs"|"ec2"|"rds"|"dynamodb"|string;
  export interface TargetTrackingConfiguration {
    PredefinedScalingMetricSpecification?: PredefinedScalingMetricSpecification;
    CustomizedScalingMetricSpecification?: CustomizedScalingMetricSpecification;
    TargetValue: MetricScale;
    DisableScaleIn?: DisableScaleIn;
    ScaleOutCooldown?: Cooldown;
    ScaleInCooldown?: Cooldown;
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
