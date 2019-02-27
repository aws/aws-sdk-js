import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class Batch extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Batch.Types.ClientConfiguration)
  config: Config & Batch.Types.ClientConfiguration;
  /**
   * Cancels a job in an AWS Batch job queue. Jobs that are in the SUBMITTED, PENDING, or RUNNABLE state are cancelled. Jobs that have progressed to STARTING or RUNNING are not cancelled (but the API operation still succeeds, even if no job is cancelled); these jobs must be terminated with the TerminateJob operation.
   */
  cancelJob(params: Batch.Types.CancelJobRequest, callback?: (err: AWSError, data: Batch.Types.CancelJobResponse) => void): Request<Batch.Types.CancelJobResponse, AWSError>;
  /**
   * Cancels a job in an AWS Batch job queue. Jobs that are in the SUBMITTED, PENDING, or RUNNABLE state are cancelled. Jobs that have progressed to STARTING or RUNNING are not cancelled (but the API operation still succeeds, even if no job is cancelled); these jobs must be terminated with the TerminateJob operation.
   */
  cancelJob(callback?: (err: AWSError, data: Batch.Types.CancelJobResponse) => void): Request<Batch.Types.CancelJobResponse, AWSError>;
  /**
   * Creates an AWS Batch compute environment. You can create MANAGED or UNMANAGED compute environments. In a managed compute environment, AWS Batch manages the capacity and instance types of the compute resources within the environment. This is based on the compute resource specification that you define or the launch template that you specify when you create the compute environment. You can choose to use Amazon EC2 On-Demand Instances or Spot Instances in your managed compute environment. You can optionally set a maximum price so that Spot Instances only launch when the Spot Instance price is below a specified percentage of the On-Demand price.  Multi-node parallel jobs are not supported on Spot Instances.  In an unmanaged compute environment, you can manage your own compute resources. This provides more compute resource configuration options, such as using a custom AMI, but you must ensure that your AMI meets the Amazon ECS container instance AMI specification. For more information, see Container Instance AMIs in the Amazon Elastic Container Service Developer Guide. After you have created your unmanaged compute environment, you can use the DescribeComputeEnvironments operation to find the Amazon ECS cluster that is associated with it. Then, manually launch your container instances into that Amazon ECS cluster. For more information, see Launching an Amazon ECS Container Instance in the Amazon Elastic Container Service Developer Guide.  AWS Batch does not upgrade the AMIs in a compute environment after it is created (for example, when a newer version of the Amazon ECS-optimized AMI is available). You are responsible for the management of the guest operating system (including updates and security patches) and any additional application software or utilities that you install on the compute resources. To use a new AMI for your AWS Batch jobs:   Create a new compute environment with the new AMI.   Add the compute environment to an existing job queue.   Remove the old compute environment from your job queue.   Delete the old compute environment.   
   */
  createComputeEnvironment(params: Batch.Types.CreateComputeEnvironmentRequest, callback?: (err: AWSError, data: Batch.Types.CreateComputeEnvironmentResponse) => void): Request<Batch.Types.CreateComputeEnvironmentResponse, AWSError>;
  /**
   * Creates an AWS Batch compute environment. You can create MANAGED or UNMANAGED compute environments. In a managed compute environment, AWS Batch manages the capacity and instance types of the compute resources within the environment. This is based on the compute resource specification that you define or the launch template that you specify when you create the compute environment. You can choose to use Amazon EC2 On-Demand Instances or Spot Instances in your managed compute environment. You can optionally set a maximum price so that Spot Instances only launch when the Spot Instance price is below a specified percentage of the On-Demand price.  Multi-node parallel jobs are not supported on Spot Instances.  In an unmanaged compute environment, you can manage your own compute resources. This provides more compute resource configuration options, such as using a custom AMI, but you must ensure that your AMI meets the Amazon ECS container instance AMI specification. For more information, see Container Instance AMIs in the Amazon Elastic Container Service Developer Guide. After you have created your unmanaged compute environment, you can use the DescribeComputeEnvironments operation to find the Amazon ECS cluster that is associated with it. Then, manually launch your container instances into that Amazon ECS cluster. For more information, see Launching an Amazon ECS Container Instance in the Amazon Elastic Container Service Developer Guide.  AWS Batch does not upgrade the AMIs in a compute environment after it is created (for example, when a newer version of the Amazon ECS-optimized AMI is available). You are responsible for the management of the guest operating system (including updates and security patches) and any additional application software or utilities that you install on the compute resources. To use a new AMI for your AWS Batch jobs:   Create a new compute environment with the new AMI.   Add the compute environment to an existing job queue.   Remove the old compute environment from your job queue.   Delete the old compute environment.   
   */
  createComputeEnvironment(callback?: (err: AWSError, data: Batch.Types.CreateComputeEnvironmentResponse) => void): Request<Batch.Types.CreateComputeEnvironmentResponse, AWSError>;
  /**
   * Creates an AWS Batch job queue. When you create a job queue, you associate one or more compute environments to the queue and assign an order of preference for the compute environments. You also set a priority to the job queue that determines the order in which the AWS Batch scheduler places jobs onto its associated compute environments. For example, if a compute environment is associated with more than one job queue, the job queue with a higher priority is given preference for scheduling jobs to that compute environment.
   */
  createJobQueue(params: Batch.Types.CreateJobQueueRequest, callback?: (err: AWSError, data: Batch.Types.CreateJobQueueResponse) => void): Request<Batch.Types.CreateJobQueueResponse, AWSError>;
  /**
   * Creates an AWS Batch job queue. When you create a job queue, you associate one or more compute environments to the queue and assign an order of preference for the compute environments. You also set a priority to the job queue that determines the order in which the AWS Batch scheduler places jobs onto its associated compute environments. For example, if a compute environment is associated with more than one job queue, the job queue with a higher priority is given preference for scheduling jobs to that compute environment.
   */
  createJobQueue(callback?: (err: AWSError, data: Batch.Types.CreateJobQueueResponse) => void): Request<Batch.Types.CreateJobQueueResponse, AWSError>;
  /**
   * Deletes an AWS Batch compute environment. Before you can delete a compute environment, you must set its state to DISABLED with the UpdateComputeEnvironment API operation and disassociate it from any job queues with the UpdateJobQueue API operation.
   */
  deleteComputeEnvironment(params: Batch.Types.DeleteComputeEnvironmentRequest, callback?: (err: AWSError, data: Batch.Types.DeleteComputeEnvironmentResponse) => void): Request<Batch.Types.DeleteComputeEnvironmentResponse, AWSError>;
  /**
   * Deletes an AWS Batch compute environment. Before you can delete a compute environment, you must set its state to DISABLED with the UpdateComputeEnvironment API operation and disassociate it from any job queues with the UpdateJobQueue API operation.
   */
  deleteComputeEnvironment(callback?: (err: AWSError, data: Batch.Types.DeleteComputeEnvironmentResponse) => void): Request<Batch.Types.DeleteComputeEnvironmentResponse, AWSError>;
  /**
   * Deletes the specified job queue. You must first disable submissions for a queue with the UpdateJobQueue operation. All jobs in the queue are terminated when you delete a job queue. It is not necessary to disassociate compute environments from a queue before submitting a DeleteJobQueue request. 
   */
  deleteJobQueue(params: Batch.Types.DeleteJobQueueRequest, callback?: (err: AWSError, data: Batch.Types.DeleteJobQueueResponse) => void): Request<Batch.Types.DeleteJobQueueResponse, AWSError>;
  /**
   * Deletes the specified job queue. You must first disable submissions for a queue with the UpdateJobQueue operation. All jobs in the queue are terminated when you delete a job queue. It is not necessary to disassociate compute environments from a queue before submitting a DeleteJobQueue request. 
   */
  deleteJobQueue(callback?: (err: AWSError, data: Batch.Types.DeleteJobQueueResponse) => void): Request<Batch.Types.DeleteJobQueueResponse, AWSError>;
  /**
   * Deregisters an AWS Batch job definition.
   */
  deregisterJobDefinition(params: Batch.Types.DeregisterJobDefinitionRequest, callback?: (err: AWSError, data: Batch.Types.DeregisterJobDefinitionResponse) => void): Request<Batch.Types.DeregisterJobDefinitionResponse, AWSError>;
  /**
   * Deregisters an AWS Batch job definition.
   */
  deregisterJobDefinition(callback?: (err: AWSError, data: Batch.Types.DeregisterJobDefinitionResponse) => void): Request<Batch.Types.DeregisterJobDefinitionResponse, AWSError>;
  /**
   * Describes one or more of your compute environments. If you are using an unmanaged compute environment, you can use the DescribeComputeEnvironment operation to determine the ecsClusterArn that you should launch your Amazon ECS container instances into.
   */
  describeComputeEnvironments(params: Batch.Types.DescribeComputeEnvironmentsRequest, callback?: (err: AWSError, data: Batch.Types.DescribeComputeEnvironmentsResponse) => void): Request<Batch.Types.DescribeComputeEnvironmentsResponse, AWSError>;
  /**
   * Describes one or more of your compute environments. If you are using an unmanaged compute environment, you can use the DescribeComputeEnvironment operation to determine the ecsClusterArn that you should launch your Amazon ECS container instances into.
   */
  describeComputeEnvironments(callback?: (err: AWSError, data: Batch.Types.DescribeComputeEnvironmentsResponse) => void): Request<Batch.Types.DescribeComputeEnvironmentsResponse, AWSError>;
  /**
   * Describes a list of job definitions. You can specify a status (such as ACTIVE) to only return job definitions that match that status.
   */
  describeJobDefinitions(params: Batch.Types.DescribeJobDefinitionsRequest, callback?: (err: AWSError, data: Batch.Types.DescribeJobDefinitionsResponse) => void): Request<Batch.Types.DescribeJobDefinitionsResponse, AWSError>;
  /**
   * Describes a list of job definitions. You can specify a status (such as ACTIVE) to only return job definitions that match that status.
   */
  describeJobDefinitions(callback?: (err: AWSError, data: Batch.Types.DescribeJobDefinitionsResponse) => void): Request<Batch.Types.DescribeJobDefinitionsResponse, AWSError>;
  /**
   * Describes one or more of your job queues.
   */
  describeJobQueues(params: Batch.Types.DescribeJobQueuesRequest, callback?: (err: AWSError, data: Batch.Types.DescribeJobQueuesResponse) => void): Request<Batch.Types.DescribeJobQueuesResponse, AWSError>;
  /**
   * Describes one or more of your job queues.
   */
  describeJobQueues(callback?: (err: AWSError, data: Batch.Types.DescribeJobQueuesResponse) => void): Request<Batch.Types.DescribeJobQueuesResponse, AWSError>;
  /**
   * Describes a list of AWS Batch jobs.
   */
  describeJobs(params: Batch.Types.DescribeJobsRequest, callback?: (err: AWSError, data: Batch.Types.DescribeJobsResponse) => void): Request<Batch.Types.DescribeJobsResponse, AWSError>;
  /**
   * Describes a list of AWS Batch jobs.
   */
  describeJobs(callback?: (err: AWSError, data: Batch.Types.DescribeJobsResponse) => void): Request<Batch.Types.DescribeJobsResponse, AWSError>;
  /**
   * Returns a list of AWS Batch jobs. You must specify only one of the following:   a job queue ID to return a list of jobs in that job queue   a multi-node parallel job ID to return a list of that job's nodes   an array job ID to return a list of that job's children   You can filter the results by job status with the jobStatus parameter. If you do not specify a status, only RUNNING jobs are returned.
   */
  listJobs(params: Batch.Types.ListJobsRequest, callback?: (err: AWSError, data: Batch.Types.ListJobsResponse) => void): Request<Batch.Types.ListJobsResponse, AWSError>;
  /**
   * Returns a list of AWS Batch jobs. You must specify only one of the following:   a job queue ID to return a list of jobs in that job queue   a multi-node parallel job ID to return a list of that job's nodes   an array job ID to return a list of that job's children   You can filter the results by job status with the jobStatus parameter. If you do not specify a status, only RUNNING jobs are returned.
   */
  listJobs(callback?: (err: AWSError, data: Batch.Types.ListJobsResponse) => void): Request<Batch.Types.ListJobsResponse, AWSError>;
  /**
   * Registers an AWS Batch job definition. 
   */
  registerJobDefinition(params: Batch.Types.RegisterJobDefinitionRequest, callback?: (err: AWSError, data: Batch.Types.RegisterJobDefinitionResponse) => void): Request<Batch.Types.RegisterJobDefinitionResponse, AWSError>;
  /**
   * Registers an AWS Batch job definition. 
   */
  registerJobDefinition(callback?: (err: AWSError, data: Batch.Types.RegisterJobDefinitionResponse) => void): Request<Batch.Types.RegisterJobDefinitionResponse, AWSError>;
  /**
   * Submits an AWS Batch job from a job definition. Parameters specified during SubmitJob override parameters defined in the job definition. 
   */
  submitJob(params: Batch.Types.SubmitJobRequest, callback?: (err: AWSError, data: Batch.Types.SubmitJobResponse) => void): Request<Batch.Types.SubmitJobResponse, AWSError>;
  /**
   * Submits an AWS Batch job from a job definition. Parameters specified during SubmitJob override parameters defined in the job definition. 
   */
  submitJob(callback?: (err: AWSError, data: Batch.Types.SubmitJobResponse) => void): Request<Batch.Types.SubmitJobResponse, AWSError>;
  /**
   * Terminates a job in a job queue. Jobs that are in the STARTING or RUNNING state are terminated, which causes them to transition to FAILED. Jobs that have not progressed to the STARTING state are cancelled.
   */
  terminateJob(params: Batch.Types.TerminateJobRequest, callback?: (err: AWSError, data: Batch.Types.TerminateJobResponse) => void): Request<Batch.Types.TerminateJobResponse, AWSError>;
  /**
   * Terminates a job in a job queue. Jobs that are in the STARTING or RUNNING state are terminated, which causes them to transition to FAILED. Jobs that have not progressed to the STARTING state are cancelled.
   */
  terminateJob(callback?: (err: AWSError, data: Batch.Types.TerminateJobResponse) => void): Request<Batch.Types.TerminateJobResponse, AWSError>;
  /**
   * Updates an AWS Batch compute environment.
   */
  updateComputeEnvironment(params: Batch.Types.UpdateComputeEnvironmentRequest, callback?: (err: AWSError, data: Batch.Types.UpdateComputeEnvironmentResponse) => void): Request<Batch.Types.UpdateComputeEnvironmentResponse, AWSError>;
  /**
   * Updates an AWS Batch compute environment.
   */
  updateComputeEnvironment(callback?: (err: AWSError, data: Batch.Types.UpdateComputeEnvironmentResponse) => void): Request<Batch.Types.UpdateComputeEnvironmentResponse, AWSError>;
  /**
   * Updates a job queue.
   */
  updateJobQueue(params: Batch.Types.UpdateJobQueueRequest, callback?: (err: AWSError, data: Batch.Types.UpdateJobQueueResponse) => void): Request<Batch.Types.UpdateJobQueueResponse, AWSError>;
  /**
   * Updates a job queue.
   */
  updateJobQueue(callback?: (err: AWSError, data: Batch.Types.UpdateJobQueueResponse) => void): Request<Batch.Types.UpdateJobQueueResponse, AWSError>;
}
declare namespace Batch {
  export type ArrayJobDependency = "N_TO_N"|"SEQUENTIAL"|string;
  export type ArrayJobStatusSummary = {[key: string]: Integer};
  export interface ArrayProperties {
    /**
     * The size of the array job.
     */
    size?: Integer;
  }
  export interface ArrayPropertiesDetail {
    /**
     * A summary of the number of array job children in each available job status. This parameter is returned for parent array jobs.
     */
    statusSummary?: ArrayJobStatusSummary;
    /**
     * The size of the array job. This parameter is returned for parent array jobs.
     */
    size?: Integer;
    /**
     * The job index within the array that is associated with this job. This parameter is returned for array job children.
     */
    index?: Integer;
  }
  export interface ArrayPropertiesSummary {
    /**
     * The size of the array job. This parameter is returned for parent array jobs.
     */
    size?: Integer;
    /**
     * The job index within the array that is associated with this job. This parameter is returned for children of array jobs.
     */
    index?: Integer;
  }
  export interface AttemptContainerDetail {
    /**
     * The Amazon Resource Name (ARN) of the Amazon ECS container instance that hosts the job attempt.
     */
    containerInstanceArn?: String;
    /**
     * The Amazon Resource Name (ARN) of the Amazon ECS task that is associated with the job attempt. Each container attempt receives a task ARN when they reach the STARTING status.
     */
    taskArn?: String;
    /**
     * The exit code for the job attempt. A non-zero exit code is considered a failure.
     */
    exitCode?: Integer;
    /**
     * A short (255 max characters) human-readable string to provide additional details about a running or stopped container.
     */
    reason?: String;
    /**
     * The name of the CloudWatch Logs log stream associated with the container. The log group for AWS Batch jobs is /aws/batch/job. Each container attempt receives a log stream name when they reach the RUNNING status.
     */
    logStreamName?: String;
    /**
     * The network interfaces associated with the job attempt.
     */
    networkInterfaces?: NetworkInterfaceList;
  }
  export interface AttemptDetail {
    /**
     * Details about the container in this job attempt.
     */
    container?: AttemptContainerDetail;
    /**
     * The Unix timestamp (in seconds and milliseconds) for when the attempt was started (when the attempt transitioned from the STARTING state to the RUNNING state).
     */
    startedAt?: Long;
    /**
     * The Unix timestamp (in seconds and milliseconds) for when the attempt was stopped (when the attempt transitioned from the RUNNING state to a terminal state, such as SUCCEEDED or FAILED).
     */
    stoppedAt?: Long;
    /**
     * A short, human-readable string to provide additional details about the current status of the job attempt.
     */
    statusReason?: String;
  }
  export type AttemptDetails = AttemptDetail[];
  export type Boolean = boolean;
  export type CEState = "ENABLED"|"DISABLED"|string;
  export type CEStatus = "CREATING"|"UPDATING"|"DELETING"|"DELETED"|"VALID"|"INVALID"|string;
  export type CEType = "MANAGED"|"UNMANAGED"|string;
  export type CRType = "EC2"|"SPOT"|string;
  export interface CancelJobRequest {
    /**
     * The AWS Batch job ID of the job to cancel.
     */
    jobId: String;
    /**
     * A message to attach to the job that explains the reason for canceling it. This message is returned by future DescribeJobs operations on the job. This message is also recorded in the AWS Batch activity logs. 
     */
    reason: String;
  }
  export interface CancelJobResponse {
  }
  export interface ComputeEnvironmentDetail {
    /**
     * The name of the compute environment. 
     */
    computeEnvironmentName: String;
    /**
     * The Amazon Resource Name (ARN) of the compute environment. 
     */
    computeEnvironmentArn: String;
    /**
     * The Amazon Resource Name (ARN) of the underlying Amazon ECS cluster used by the compute environment. 
     */
    ecsClusterArn: String;
    /**
     * The type of the compute environment.
     */
    type?: CEType;
    /**
     * The state of the compute environment. The valid values are ENABLED or DISABLED.  If the state is ENABLED, then the AWS Batch scheduler can attempt to place jobs from an associated job queue on the compute resources within the environment. If the compute environment is managed, then it can scale its instances out or in automatically, based on the job queue demand. If the state is DISABLED, then the AWS Batch scheduler does not attempt to place jobs within the environment. Jobs in a STARTING or RUNNING state continue to progress normally. Managed compute environments in the DISABLED state do not scale out. However, they scale in to minvCpus value after instances become idle.
     */
    state?: CEState;
    /**
     * The current status of the compute environment (for example, CREATING or VALID).
     */
    status?: CEStatus;
    /**
     * A short, human-readable string to provide additional details about the current status of the compute environment.
     */
    statusReason?: String;
    /**
     * The compute resources defined for the compute environment. 
     */
    computeResources?: ComputeResource;
    /**
     * The service role associated with the compute environment that allows AWS Batch to make calls to AWS API operations on your behalf.
     */
    serviceRole?: String;
  }
  export type ComputeEnvironmentDetailList = ComputeEnvironmentDetail[];
  export interface ComputeEnvironmentOrder {
    /**
     * The order of the compute environment.
     */
    order: Integer;
    /**
     * The Amazon Resource Name (ARN) of the compute environment.
     */
    computeEnvironment: String;
  }
  export type ComputeEnvironmentOrders = ComputeEnvironmentOrder[];
  export interface ComputeResource {
    /**
     * The type of compute environment.
     */
    type: CRType;
    /**
     * The minimum number of EC2 vCPUs that an environment should maintain (even if the compute environment is DISABLED). 
     */
    minvCpus: Integer;
    /**
     * The maximum number of EC2 vCPUs that an environment can reach. 
     */
    maxvCpus: Integer;
    /**
     * The desired number of EC2 vCPUS in the compute environment. 
     */
    desiredvCpus?: Integer;
    /**
     * The instances types that may be launched. You can specify instance families to launch any instance type within those families (for example, c4 or p3), or you can specify specific sizes within a family (such as c4.8xlarge). You can also choose optimal to pick instance types (from the latest C, M, and R instance families) on the fly that match the demand of your job queues.
     */
    instanceTypes: StringList;
    /**
     * The Amazon Machine Image (AMI) ID used for instances launched in the compute environment.
     */
    imageId?: String;
    /**
     * The VPC subnets into which the compute resources are launched. 
     */
    subnets: StringList;
    /**
     * The EC2 security group that is associated with instances launched in the compute environment. 
     */
    securityGroupIds?: StringList;
    /**
     * The EC2 key pair that is used for instances launched in the compute environment.
     */
    ec2KeyPair?: String;
    /**
     * The Amazon ECS instance profile applied to Amazon EC2 instances in a compute environment. You can specify the short name or full Amazon Resource Name (ARN) of an instance profile. For example, ecsInstanceRole or arn:aws:iam::&lt;aws_account_id&gt;:instance-profile/ecsInstanceRole. For more information, see Amazon ECS Instance Role in the AWS Batch User Guide.
     */
    instanceRole: String;
    /**
     * Key-value pair tags to be applied to resources that are launched in the compute environment. 
     */
    tags?: TagsMap;
    /**
     * The Amazon EC2 placement group to associate with your compute resources. If you intend to submit multi-node parallel jobs to your compute environment, you should consider creating a cluster placement group and associate it with your compute resources. This keeps your multi-node parallel job on a logical grouping of instances within a single Availability Zone with high network flow potential. For more information, see Placement Groups in the Amazon EC2 User Guide for Linux Instances.
     */
    placementGroup?: String;
    /**
     * The maximum percentage that a Spot Instance price can be when compared with the On-Demand price for that instance type before instances are launched. For example, if your maximum percentage is 20%, then the Spot price must be below 20% of the current On-Demand price for that EC2 instance. You always pay the lowest (market) price and never more than your maximum percentage. If you leave this field empty, the default value is 100% of the On-Demand price.
     */
    bidPercentage?: Integer;
    /**
     * The Amazon Resource Name (ARN) of the Amazon EC2 Spot Fleet IAM role applied to a SPOT compute environment.
     */
    spotIamFleetRole?: String;
    /**
     * The launch template to use for your compute resources. Any other compute resource parameters that you specify in a CreateComputeEnvironment API operation override the same parameters in the launch template. You must specify either the launch template ID or launch template name in the request, but not both. 
     */
    launchTemplate?: LaunchTemplateSpecification;
  }
  export interface ComputeResourceUpdate {
    /**
     * The minimum number of EC2 vCPUs that an environment should maintain.
     */
    minvCpus?: Integer;
    /**
     * The maximum number of EC2 vCPUs that an environment can reach.
     */
    maxvCpus?: Integer;
    /**
     * The desired number of EC2 vCPUS in the compute environment.
     */
    desiredvCpus?: Integer;
  }
  export interface ContainerDetail {
    /**
     * The image used to start the container.
     */
    image?: String;
    /**
     * The number of VCPUs allocated for the job. 
     */
    vcpus?: Integer;
    /**
     * The number of MiB of memory reserved for the job.
     */
    memory?: Integer;
    /**
     * The command that is passed to the container. 
     */
    command?: StringList;
    /**
     * The Amazon Resource Name (ARN) associated with the job upon execution. 
     */
    jobRoleArn?: String;
    /**
     * A list of volumes associated with the job.
     */
    volumes?: Volumes;
    /**
     * The environment variables to pass to a container.  Environment variables must not start with AWS_BATCH; this naming convention is reserved for variables that are set by the AWS Batch service. 
     */
    environment?: EnvironmentVariables;
    /**
     * The mount points for data volumes in your container.
     */
    mountPoints?: MountPoints;
    /**
     * When this parameter is true, the container is given read-only access to its root file system.
     */
    readonlyRootFilesystem?: Boolean;
    /**
     * A list of ulimit values to set in the container.
     */
    ulimits?: Ulimits;
    /**
     * When this parameter is true, the container is given elevated privileges on the host container instance (similar to the root user).
     */
    privileged?: Boolean;
    /**
     * The user name to use inside the container.
     */
    user?: String;
    /**
     * The exit code to return upon completion.
     */
    exitCode?: Integer;
    /**
     * A short (255 max characters) human-readable string to provide additional details about a running or stopped container.
     */
    reason?: String;
    /**
     * The Amazon Resource Name (ARN) of the container instance on which the container is running.
     */
    containerInstanceArn?: String;
    /**
     * The Amazon Resource Name (ARN) of the Amazon ECS task that is associated with the container job. Each container attempt receives a task ARN when they reach the STARTING status.
     */
    taskArn?: String;
    /**
     * The name of the CloudWatch Logs log stream associated with the container. The log group for AWS Batch jobs is /aws/batch/job. Each container attempt receives a log stream name when they reach the RUNNING status.
     */
    logStreamName?: String;
    /**
     * The instance type of the underlying host infrastructure of a multi-node parallel job.
     */
    instanceType?: String;
    /**
     * The network interfaces associated with the job.
     */
    networkInterfaces?: NetworkInterfaceList;
  }
  export interface ContainerOverrides {
    /**
     * The number of vCPUs to reserve for the container. This value overrides the value set in the job definition.
     */
    vcpus?: Integer;
    /**
     * The number of MiB of memory reserved for the job. This value overrides the value set in the job definition.
     */
    memory?: Integer;
    /**
     * The command to send to the container that overrides the default command from the Docker image or the job definition.
     */
    command?: StringList;
    /**
     * The instance type to use for a multi-node parallel job. This parameter is not valid for single-node container jobs.
     */
    instanceType?: String;
    /**
     * The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the job definition.  Environment variables must not start with AWS_BATCH; this naming convention is reserved for variables that are set by the AWS Batch service. 
     */
    environment?: EnvironmentVariables;
  }
  export interface ContainerProperties {
    /**
     * The image used to start a container. This string is passed directly to the Docker daemon. Images in the Docker Hub registry are available by default. Other repositories are specified with  repository-url/image:tag . Up to 255 letters (uppercase and lowercase), numbers, hyphens, underscores, colons, periods, forward slashes, and number signs are allowed. This parameter maps to Image in the Create a container section of the Docker Remote API and the IMAGE parameter of docker run.   Images in Amazon ECR repositories use the full registry and repository URI (for example, 012345678910.dkr.ecr.&lt;region-name&gt;.amazonaws.com/&lt;repository-name&gt;).    Images in official repositories on Docker Hub use a single name (for example, ubuntu or mongo).   Images in other repositories on Docker Hub are qualified with an organization name (for example, amazon/amazon-ecs-agent).   Images in other online repositories are qualified further by a domain name (for example, quay.io/assemblyline/ubuntu).  
     */
    image?: String;
    /**
     * The number of vCPUs reserved for the container. This parameter maps to CpuShares in the Create a container section of the Docker Remote API and the --cpu-shares option to docker run. Each vCPU is equivalent to 1,024 CPU shares. You must specify at least one vCPU.
     */
    vcpus?: Integer;
    /**
     * The hard limit (in MiB) of memory to present to the container. If your container attempts to exceed the memory specified here, the container is killed. This parameter maps to Memory in the Create a container section of the Docker Remote API and the --memory option to docker run. You must specify at least 4 MiB of memory for a job.  If you are trying to maximize your resource utilization by providing your jobs as much memory as possible for a particular instance type, see Memory Management in the AWS Batch User Guide. 
     */
    memory?: Integer;
    /**
     * The command that is passed to the container. This parameter maps to Cmd in the Create a container section of the Docker Remote API and the COMMAND parameter to docker run. For more information, see https://docs.docker.com/engine/reference/builder/#cmd.
     */
    command?: StringList;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that the container can assume for AWS permissions.
     */
    jobRoleArn?: String;
    /**
     * A list of data volumes used in a job.
     */
    volumes?: Volumes;
    /**
     * The environment variables to pass to a container. This parameter maps to Env in the Create a container section of the Docker Remote API and the --env option to docker run.  We do not recommend using plaintext environment variables for sensitive information, such as credential data.   Environment variables must not start with AWS_BATCH; this naming convention is reserved for variables that are set by the AWS Batch service. 
     */
    environment?: EnvironmentVariables;
    /**
     * The mount points for data volumes in your container. This parameter maps to Volumes in the Create a container section of the Docker Remote API and the --volume option to docker run.
     */
    mountPoints?: MountPoints;
    /**
     * When this parameter is true, the container is given read-only access to its root file system. This parameter maps to ReadonlyRootfs in the Create a container section of the Docker Remote API and the --read-only option to docker run.
     */
    readonlyRootFilesystem?: Boolean;
    /**
     * When this parameter is true, the container is given elevated privileges on the host container instance (similar to the root user). This parameter maps to Privileged in the Create a container section of the Docker Remote API and the --privileged option to docker run.
     */
    privileged?: Boolean;
    /**
     * A list of ulimits to set in the container. This parameter maps to Ulimits in the Create a container section of the Docker Remote API and the --ulimit option to docker run.
     */
    ulimits?: Ulimits;
    /**
     * The user name to use inside the container. This parameter maps to User in the Create a container section of the Docker Remote API and the --user option to docker run.
     */
    user?: String;
    /**
     * The instance type to use for a multi-node parallel job. Currently all node groups in a multi-node parallel job must use the same instance type. This parameter is not valid for single-node container jobs.
     */
    instanceType?: String;
  }
  export interface ContainerSummary {
    /**
     * The exit code to return upon completion.
     */
    exitCode?: Integer;
    /**
     * A short (255 max characters) human-readable string to provide additional details about a running or stopped container.
     */
    reason?: String;
  }
  export interface CreateComputeEnvironmentRequest {
    /**
     * The name for your compute environment. Up to 128 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed.
     */
    computeEnvironmentName: String;
    /**
     * The type of the compute environment. For more information, see Compute Environments in the AWS Batch User Guide.
     */
    type: CEType;
    /**
     * The state of the compute environment. If the state is ENABLED, then the compute environment accepts jobs from a queue and can scale out automatically based on queues.
     */
    state?: CEState;
    /**
     * Details of the compute resources managed by the compute environment. This parameter is required for managed compute environments.
     */
    computeResources?: ComputeResource;
    /**
     * The full Amazon Resource Name (ARN) of the IAM role that allows AWS Batch to make calls to other AWS services on your behalf. If your specified role has a path other than /, then you must either specify the full role ARN (this is recommended) or prefix the role name with the path.  Depending on how you created your AWS Batch service role, its ARN may contain the service-role path prefix. When you only specify the name of the service role, AWS Batch assumes that your ARN does not use the service-role path prefix. Because of this, we recommend that you specify the full ARN of your service role when you create compute environments. 
     */
    serviceRole: String;
  }
  export interface CreateComputeEnvironmentResponse {
    /**
     * The name of the compute environment.
     */
    computeEnvironmentName?: String;
    /**
     * The Amazon Resource Name (ARN) of the compute environment. 
     */
    computeEnvironmentArn?: String;
  }
  export interface CreateJobQueueRequest {
    /**
     * The name of the job queue.
     */
    jobQueueName: String;
    /**
     * The state of the job queue. If the job queue state is ENABLED, it is able to accept jobs.
     */
    state?: JQState;
    /**
     * The priority of the job queue. Job queues with a higher priority (or a higher integer value for the priority parameter) are evaluated first when associated with the same compute environment. Priority is determined in descending order, for example, a job queue with a priority value of 10 is given scheduling preference over a job queue with a priority value of 1.
     */
    priority: Integer;
    /**
     * The set of compute environments mapped to a job queue and their order relative to each other. The job scheduler uses this parameter to determine which compute environment should execute a given job. Compute environments must be in the VALID state before you can associate them with a job queue. You can associate up to three compute environments with a job queue.
     */
    computeEnvironmentOrder: ComputeEnvironmentOrders;
  }
  export interface CreateJobQueueResponse {
    /**
     * The name of the job queue.
     */
    jobQueueName: String;
    /**
     * The Amazon Resource Name (ARN) of the job queue.
     */
    jobQueueArn: String;
  }
  export interface DeleteComputeEnvironmentRequest {
    /**
     * The name or Amazon Resource Name (ARN) of the compute environment to delete. 
     */
    computeEnvironment: String;
  }
  export interface DeleteComputeEnvironmentResponse {
  }
  export interface DeleteJobQueueRequest {
    /**
     * The short name or full Amazon Resource Name (ARN) of the queue to delete. 
     */
    jobQueue: String;
  }
  export interface DeleteJobQueueResponse {
  }
  export interface DeregisterJobDefinitionRequest {
    /**
     * The name and revision (name:revision) or full Amazon Resource Name (ARN) of the job definition to deregister. 
     */
    jobDefinition: String;
  }
  export interface DeregisterJobDefinitionResponse {
  }
  export interface DescribeComputeEnvironmentsRequest {
    /**
     * A list of up to 100 compute environment names or full Amazon Resource Name (ARN) entries. 
     */
    computeEnvironments?: StringList;
    /**
     * The maximum number of cluster results returned by DescribeComputeEnvironments in paginated output. When this parameter is used, DescribeComputeEnvironments only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another DescribeComputeEnvironments request with the returned nextToken value. This value can be between 1 and 100. If this parameter is not used, then DescribeComputeEnvironments returns up to 100 results and a nextToken value if applicable.
     */
    maxResults?: Integer;
    /**
     * The nextToken value returned from a previous paginated DescribeComputeEnvironments request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
  }
  export interface DescribeComputeEnvironmentsResponse {
    /**
     * The list of compute environments.
     */
    computeEnvironments?: ComputeEnvironmentDetailList;
    /**
     * The nextToken value to include in a future DescribeComputeEnvironments request. When the results of a DescribeJobDefinitions request exceed maxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return.
     */
    nextToken?: String;
  }
  export interface DescribeJobDefinitionsRequest {
    /**
     * A space-separated list of up to 100 job definition names or full Amazon Resource Name (ARN) entries.
     */
    jobDefinitions?: StringList;
    /**
     * The maximum number of results returned by DescribeJobDefinitions in paginated output. When this parameter is used, DescribeJobDefinitions only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another DescribeJobDefinitions request with the returned nextToken value. This value can be between 1 and 100. If this parameter is not used, then DescribeJobDefinitions returns up to 100 results and a nextToken value if applicable.
     */
    maxResults?: Integer;
    /**
     * The name of the job definition to describe.
     */
    jobDefinitionName?: String;
    /**
     * The status with which to filter job definitions.
     */
    status?: String;
    /**
     * The nextToken value returned from a previous paginated DescribeJobDefinitions request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
  }
  export interface DescribeJobDefinitionsResponse {
    /**
     * The list of job definitions. 
     */
    jobDefinitions?: JobDefinitionList;
    /**
     * The nextToken value to include in a future DescribeJobDefinitions request. When the results of a DescribeJobDefinitions request exceed maxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return.
     */
    nextToken?: String;
  }
  export interface DescribeJobQueuesRequest {
    /**
     * A list of up to 100 queue names or full queue Amazon Resource Name (ARN) entries.
     */
    jobQueues?: StringList;
    /**
     * The maximum number of results returned by DescribeJobQueues in paginated output. When this parameter is used, DescribeJobQueues only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another DescribeJobQueues request with the returned nextToken value. This value can be between 1 and 100. If this parameter is not used, then DescribeJobQueues returns up to 100 results and a nextToken value if applicable.
     */
    maxResults?: Integer;
    /**
     * The nextToken value returned from a previous paginated DescribeJobQueues request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
  }
  export interface DescribeJobQueuesResponse {
    /**
     * The list of job queues. 
     */
    jobQueues?: JobQueueDetailList;
    /**
     * The nextToken value to include in a future DescribeJobQueues request. When the results of a DescribeJobQueues request exceed maxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return.
     */
    nextToken?: String;
  }
  export interface DescribeJobsRequest {
    /**
     * A space-separated list of up to 100 job IDs.
     */
    jobs: StringList;
  }
  export interface DescribeJobsResponse {
    /**
     * The list of jobs. 
     */
    jobs?: JobDetailList;
  }
  export type EnvironmentVariables = KeyValuePair[];
  export interface Host {
    /**
     * The path on the host container instance that is presented to the container. If this parameter is empty, then the Docker daemon has assigned a host path for you. If the host parameter contains a sourcePath file location, then the data volume persists at the specified location on the host container instance until you delete it manually. If the sourcePath value does not exist on the host container instance, the Docker daemon creates it. If the location does exist, the contents of the source path folder are exported.
     */
    sourcePath?: String;
  }
  export type Integer = number;
  export type JQState = "ENABLED"|"DISABLED"|string;
  export type JQStatus = "CREATING"|"UPDATING"|"DELETING"|"DELETED"|"VALID"|"INVALID"|string;
  export interface JobDefinition {
    /**
     * The name of the job definition. 
     */
    jobDefinitionName: String;
    /**
     * The Amazon Resource Name (ARN) for the job definition. 
     */
    jobDefinitionArn: String;
    /**
     * The revision of the job definition.
     */
    revision: Integer;
    /**
     * The status of the job definition.
     */
    status?: String;
    /**
     * The type of job definition.
     */
    type: String;
    /**
     * Default parameters or parameter substitution placeholders that are set in the job definition. Parameters are specified as a key-value pair mapping. Parameters in a SubmitJob request override any corresponding parameter defaults from the job definition.
     */
    parameters?: ParametersMap;
    /**
     * The retry strategy to use for failed jobs that are submitted with this job definition.
     */
    retryStrategy?: RetryStrategy;
    /**
     * An object with various properties specific to container-based jobs. 
     */
    containerProperties?: ContainerProperties;
    /**
     * The timeout configuration for jobs that are submitted with this job definition. You can specify a timeout duration after which AWS Batch terminates your jobs if they have not finished.
     */
    timeout?: JobTimeout;
    /**
     * An object with various properties specific to multi-node parallel jobs.
     */
    nodeProperties?: NodeProperties;
  }
  export type JobDefinitionList = JobDefinition[];
  export type JobDefinitionType = "container"|"multinode"|string;
  export interface JobDependency {
    /**
     * The job ID of the AWS Batch job associated with this dependency.
     */
    jobId?: String;
    /**
     * The type of the job dependency.
     */
    type?: ArrayJobDependency;
  }
  export type JobDependencyList = JobDependency[];
  export interface JobDetail {
    /**
     * The name of the job.
     */
    jobName: String;
    /**
     * The ID for the job.
     */
    jobId: String;
    /**
     * The Amazon Resource Name (ARN) of the job queue with which the job is associated.
     */
    jobQueue: String;
    /**
     * The current status for the job.   If your jobs do not progress to STARTING, see Jobs Stuck in RUNNABLE Status in the troubleshooting section of the AWS Batch User Guide. 
     */
    status: JobStatus;
    /**
     * A list of job attempts associated with this job.
     */
    attempts?: AttemptDetails;
    /**
     * A short, human-readable string to provide additional details about the current status of the job. 
     */
    statusReason?: String;
    /**
     * The Unix timestamp (in seconds and milliseconds) for when the job was created. For non-array jobs and parent array jobs, this is when the job entered the SUBMITTED state (at the time SubmitJob was called). For array child jobs, this is when the child job was spawned by its parent and entered the PENDING state.
     */
    createdAt?: Long;
    /**
     * The retry strategy to use for this job if an attempt fails.
     */
    retryStrategy?: RetryStrategy;
    /**
     * The Unix timestamp (in seconds and milliseconds) for when the job was started (when the job transitioned from the STARTING state to the RUNNING state).
     */
    startedAt: Long;
    /**
     * The Unix timestamp (in seconds and milliseconds) for when the job was stopped (when the job transitioned from the RUNNING state to a terminal state, such as SUCCEEDED or FAILED).
     */
    stoppedAt?: Long;
    /**
     * A list of job names or IDs on which this job depends.
     */
    dependsOn?: JobDependencyList;
    /**
     * The job definition that is used by this job.
     */
    jobDefinition: String;
    /**
     * Additional parameters passed to the job that replace parameter substitution placeholders or override any corresponding parameter defaults from the job definition. 
     */
    parameters?: ParametersMap;
    /**
     * An object representing the details of the container that is associated with the job.
     */
    container?: ContainerDetail;
    /**
     * An object representing the details of a node that is associated with a multi-node parallel job.
     */
    nodeDetails?: NodeDetails;
    /**
     * An object representing the node properties of a multi-node parallel job.
     */
    nodeProperties?: NodeProperties;
    /**
     * The array properties of the job, if it is an array job.
     */
    arrayProperties?: ArrayPropertiesDetail;
    /**
     * The timeout configuration for the job. 
     */
    timeout?: JobTimeout;
  }
  export type JobDetailList = JobDetail[];
  export interface JobQueueDetail {
    /**
     * The name of the job queue.
     */
    jobQueueName: String;
    /**
     * The Amazon Resource Name (ARN) of the job queue.
     */
    jobQueueArn: String;
    /**
     * Describes the ability of the queue to accept new jobs.
     */
    state: JQState;
    /**
     * The status of the job queue (for example, CREATING or VALID).
     */
    status?: JQStatus;
    /**
     * A short, human-readable string to provide additional details about the current status of the job queue.
     */
    statusReason?: String;
    /**
     * The priority of the job queue. 
     */
    priority: Integer;
    /**
     * The compute environments that are attached to the job queue and the order in which job placement is preferred. Compute environments are selected for job placement in ascending order.
     */
    computeEnvironmentOrder: ComputeEnvironmentOrders;
  }
  export type JobQueueDetailList = JobQueueDetail[];
  export type JobStatus = "SUBMITTED"|"PENDING"|"RUNNABLE"|"STARTING"|"RUNNING"|"SUCCEEDED"|"FAILED"|string;
  export interface JobSummary {
    /**
     * The ID of the job.
     */
    jobId: String;
    /**
     * The name of the job.
     */
    jobName: String;
    /**
     * The Unix timestamp for when the job was created. For non-array jobs and parent array jobs, this is when the job entered the SUBMITTED state (at the time SubmitJob was called). For array child jobs, this is when the child job was spawned by its parent and entered the PENDING state.
     */
    createdAt?: Long;
    /**
     * The current status for the job.
     */
    status?: JobStatus;
    /**
     * A short, human-readable string to provide additional details about the current status of the job.
     */
    statusReason?: String;
    /**
     * The Unix timestamp for when the job was started (when the job transitioned from the STARTING state to the RUNNING state).
     */
    startedAt?: Long;
    /**
     * The Unix timestamp for when the job was stopped (when the job transitioned from the RUNNING state to a terminal state, such as SUCCEEDED or FAILED).
     */
    stoppedAt?: Long;
    /**
     * An object representing the details of the container that is associated with the job.
     */
    container?: ContainerSummary;
    /**
     * The array properties of the job, if it is an array job.
     */
    arrayProperties?: ArrayPropertiesSummary;
    /**
     * The node properties for a single node in a job summary list.
     */
    nodeProperties?: NodePropertiesSummary;
  }
  export type JobSummaryList = JobSummary[];
  export interface JobTimeout {
    /**
     * The time duration in seconds (measured from the job attempt's startedAt timestamp) after which AWS Batch terminates your jobs if they have not finished.
     */
    attemptDurationSeconds?: Integer;
  }
  export interface KeyValuePair {
    /**
     * The name of the key-value pair. For environment variables, this is the name of the environment variable.
     */
    name?: String;
    /**
     * The value of the key-value pair. For environment variables, this is the value of the environment variable.
     */
    value?: String;
  }
  export interface LaunchTemplateSpecification {
    /**
     * The ID of the launch template.
     */
    launchTemplateId?: String;
    /**
     * The name of the launch template.
     */
    launchTemplateName?: String;
    /**
     * The version number of the launch template. Default: The default version of the launch template.
     */
    version?: String;
  }
  export interface ListJobsRequest {
    /**
     * The name or full Amazon Resource Name (ARN) of the job queue with which to list jobs.
     */
    jobQueue?: String;
    /**
     * The job ID for an array job. Specifying an array job ID with this parameter lists all child jobs from within the specified array.
     */
    arrayJobId?: String;
    /**
     * The job ID for a multi-node parallel job. Specifying a multi-node parallel job ID with this parameter lists all nodes that are associated with the specified job.
     */
    multiNodeJobId?: String;
    /**
     * The job status with which to filter jobs in the specified queue. If you do not specify a status, only RUNNING jobs are returned.
     */
    jobStatus?: JobStatus;
    /**
     * The maximum number of results returned by ListJobs in paginated output. When this parameter is used, ListJobs only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListJobs request with the returned nextToken value. This value can be between 1 and 100. If this parameter is not used, then ListJobs returns up to 100 results and a nextToken value if applicable.
     */
    maxResults?: Integer;
    /**
     * The nextToken value returned from a previous paginated ListJobs request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return.  This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: String;
  }
  export interface ListJobsResponse {
    /**
     * A list of job summaries that match the request.
     */
    jobSummaryList: JobSummaryList;
    /**
     * The nextToken value to include in a future ListJobs request. When the results of a ListJobs request exceed maxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return.
     */
    nextToken?: String;
  }
  export type Long = number;
  export interface MountPoint {
    /**
     * The path on the container at which to mount the host volume.
     */
    containerPath?: String;
    /**
     * If this value is true, the container has read-only access to the volume; otherwise, the container can write to the volume. The default value is false.
     */
    readOnly?: Boolean;
    /**
     * The name of the volume to mount.
     */
    sourceVolume?: String;
  }
  export type MountPoints = MountPoint[];
  export interface NetworkInterface {
    /**
     * The attachment ID for the network interface.
     */
    attachmentId?: String;
    /**
     * The private IPv6 address for the network interface.
     */
    ipv6Address?: String;
    /**
     * The private IPv4 address for the network interface.
     */
    privateIpv4Address?: String;
  }
  export type NetworkInterfaceList = NetworkInterface[];
  export interface NodeDetails {
    /**
     * The node index for the node. Node index numbering begins at zero. This index is also available on the node with the AWS_BATCH_JOB_NODE_INDEX environment variable.
     */
    nodeIndex?: Integer;
    /**
     * Specifies whether the current node is the main node for a multi-node parallel job.
     */
    isMainNode?: Boolean;
  }
  export interface NodeOverrides {
    /**
     * The node property overrides for the job.
     */
    nodePropertyOverrides?: NodePropertyOverrides;
  }
  export interface NodeProperties {
    /**
     * The number of nodes associated with a multi-node parallel job.
     */
    numNodes: Integer;
    /**
     * Specifies the node index for the main node of a multi-node parallel job.
     */
    mainNode: Integer;
    /**
     * A list of node ranges and their properties associated with a multi-node parallel job.
     */
    nodeRangeProperties: NodeRangeProperties;
  }
  export interface NodePropertiesSummary {
    /**
     * Specifies whether the current node is the main node for a multi-node parallel job.
     */
    isMainNode?: Boolean;
    /**
     * The number of nodes associated with a multi-node parallel job.
     */
    numNodes?: Integer;
    /**
     * The node index for the node. Node index numbering begins at zero. This index is also available on the node with the AWS_BATCH_JOB_NODE_INDEX environment variable.
     */
    nodeIndex?: Integer;
  }
  export interface NodePropertyOverride {
    /**
     * The range of nodes, using node index values, with which to override. A range of 0:3 indicates nodes with index values of 0 through 3. If the starting range value is omitted (:n), then 0 is used to start the range. If the ending range value is omitted (n:), then the highest possible node index is used to end the range.
     */
    targetNodes: String;
    /**
     * The overrides that should be sent to a node range.
     */
    containerOverrides?: ContainerOverrides;
  }
  export type NodePropertyOverrides = NodePropertyOverride[];
  export type NodeRangeProperties = NodeRangeProperty[];
  export interface NodeRangeProperty {
    /**
     * The range of nodes, using node index values. A range of 0:3 indicates nodes with index values of 0 through 3. If the starting range value is omitted (:n), then 0 is used to start the range. If the ending range value is omitted (n:), then the highest possible node index is used to end the range. Your accumulative node ranges must account for all nodes (0:n). You may nest node ranges, for example 0:10 and 4:5, in which case the 4:5 range properties override the 0:10 properties. 
     */
    targetNodes: String;
    /**
     * The container details for the node range.
     */
    container?: ContainerProperties;
  }
  export type ParametersMap = {[key: string]: String};
  export interface RegisterJobDefinitionRequest {
    /**
     * The name of the job definition to register. Up to 128 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed.
     */
    jobDefinitionName: String;
    /**
     * The type of job definition.
     */
    type: JobDefinitionType;
    /**
     * Default parameter substitution placeholders to set in the job definition. Parameters are specified as a key-value pair mapping. Parameters in a SubmitJob request override any corresponding parameter defaults from the job definition.
     */
    parameters?: ParametersMap;
    /**
     * An object with various properties specific to single-node container-based jobs. If the job definition's type parameter is container, then you must specify either containerProperties or nodeProperties.
     */
    containerProperties?: ContainerProperties;
    /**
     * An object with various properties specific to multi-node parallel jobs. If you specify node properties for a job, it becomes a multi-node parallel job. For more information, see Multi-node Parallel Jobs in the AWS Batch User Guide. If the job definition's type parameter is container, then you must specify either containerProperties or nodeProperties.
     */
    nodeProperties?: NodeProperties;
    /**
     * The retry strategy to use for failed jobs that are submitted with this job definition. Any retry strategy that is specified during a SubmitJob operation overrides the retry strategy defined here. If a job is terminated due to a timeout, it is not retried. 
     */
    retryStrategy?: RetryStrategy;
    /**
     * The timeout configuration for jobs that are submitted with this job definition, after which AWS Batch terminates your jobs if they have not finished. If a job is terminated due to a timeout, it is not retried. The minimum value for the timeout is 60 seconds. Any timeout configuration that is specified during a SubmitJob operation overrides the timeout configuration defined here. For more information, see Job Timeouts in the Amazon Elastic Container Service Developer Guide.
     */
    timeout?: JobTimeout;
  }
  export interface RegisterJobDefinitionResponse {
    /**
     * The name of the job definition.
     */
    jobDefinitionName: String;
    /**
     * The Amazon Resource Name (ARN) of the job definition. 
     */
    jobDefinitionArn: String;
    /**
     * The revision of the job definition.
     */
    revision: Integer;
  }
  export interface RetryStrategy {
    /**
     * The number of times to move a job to the RUNNABLE status. You may specify between 1 and 10 attempts. If the value of attempts is greater than one, the job is retried on failure the same number of attempts as the value.
     */
    attempts?: Integer;
  }
  export type String = string;
  export type StringList = String[];
  export interface SubmitJobRequest {
    /**
     * The name of the job. The first character must be alphanumeric, and up to 128 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed. 
     */
    jobName: String;
    /**
     * The job queue into which the job is submitted. You can specify either the name or the Amazon Resource Name (ARN) of the queue. 
     */
    jobQueue: String;
    /**
     * The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. For more information, see Array Jobs in the AWS Batch User Guide.
     */
    arrayProperties?: ArrayProperties;
    /**
     * A list of dependencies for the job. A job can depend upon a maximum of 20 jobs. You can specify a SEQUENTIAL type dependency without specifying a job ID for array jobs so that each child array job completes sequentially, starting at index 0. You can also specify an N_TO_N type dependency with a job ID for array jobs. In that case, each index child of this job must wait for the corresponding index child of each dependency to complete before it can begin.
     */
    dependsOn?: JobDependencyList;
    /**
     * The job definition used by this job. This value can be either a name:revision or the Amazon Resource Name (ARN) for the job definition.
     */
    jobDefinition: String;
    /**
     * Additional parameters passed to the job that replace parameter substitution placeholders that are set in the job definition. Parameters are specified as a key and value pair mapping. Parameters in a SubmitJob request override any corresponding parameter defaults from the job definition.
     */
    parameters?: ParametersMap;
    /**
     * A list of container overrides in JSON format that specify the name of a container in the specified job definition and the overrides it should receive. You can override the default command for a container (that is specified in the job definition or the Docker image) with a command override. You can also override existing environment variables (that are specified in the job definition or Docker image) on a container or add new environment variables to it with an environment override.
     */
    containerOverrides?: ContainerOverrides;
    /**
     * A list of node overrides in JSON format that specify the node range to target and the container overrides for that node range.
     */
    nodeOverrides?: NodeOverrides;
    /**
     * The retry strategy to use for failed jobs from this SubmitJob operation. When a retry strategy is specified here, it overrides the retry strategy defined in the job definition.
     */
    retryStrategy?: RetryStrategy;
    /**
     * The timeout configuration for this SubmitJob operation. You can specify a timeout duration after which AWS Batch terminates your jobs if they have not finished. If a job is terminated due to a timeout, it is not retried. The minimum value for the timeout is 60 seconds. This configuration overrides any timeout configuration specified in the job definition. For array jobs, child jobs have the same timeout configuration as the parent job. For more information, see Job Timeouts in the Amazon Elastic Container Service Developer Guide.
     */
    timeout?: JobTimeout;
  }
  export interface SubmitJobResponse {
    /**
     * The name of the job. 
     */
    jobName: String;
    /**
     * The unique identifier for the job.
     */
    jobId: String;
  }
  export type TagsMap = {[key: string]: String};
  export interface TerminateJobRequest {
    /**
     * The AWS Batch job ID of the job to terminate.
     */
    jobId: String;
    /**
     * A message to attach to the job that explains the reason for canceling it. This message is returned by future DescribeJobs operations on the job. This message is also recorded in the AWS Batch activity logs. 
     */
    reason: String;
  }
  export interface TerminateJobResponse {
  }
  export interface Ulimit {
    /**
     * The hard limit for the ulimit type.
     */
    hardLimit: Integer;
    /**
     * The type of the ulimit.
     */
    name: String;
    /**
     * The soft limit for the ulimit type.
     */
    softLimit: Integer;
  }
  export type Ulimits = Ulimit[];
  export interface UpdateComputeEnvironmentRequest {
    /**
     * The name or full Amazon Resource Name (ARN) of the compute environment to update.
     */
    computeEnvironment: String;
    /**
     * The state of the compute environment. Compute environments in the ENABLED state can accept jobs from a queue and scale in or out automatically based on the workload demand of its associated queues.
     */
    state?: CEState;
    /**
     * Details of the compute resources managed by the compute environment. Required for a managed compute environment.
     */
    computeResources?: ComputeResourceUpdate;
    /**
     * The full Amazon Resource Name (ARN) of the IAM role that allows AWS Batch to make calls to other AWS services on your behalf. If your specified role has a path other than /, then you must either specify the full role ARN (this is recommended) or prefix the role name with the path.  Depending on how you created your AWS Batch service role, its ARN may contain the service-role path prefix. When you only specify the name of the service role, AWS Batch assumes that your ARN does not use the service-role path prefix. Because of this, we recommend that you specify the full ARN of your service role when you create compute environments. 
     */
    serviceRole?: String;
  }
  export interface UpdateComputeEnvironmentResponse {
    /**
     * The name of the compute environment.
     */
    computeEnvironmentName?: String;
    /**
     * The Amazon Resource Name (ARN) of the compute environment. 
     */
    computeEnvironmentArn?: String;
  }
  export interface UpdateJobQueueRequest {
    /**
     * The name or the Amazon Resource Name (ARN) of the job queue.
     */
    jobQueue: String;
    /**
     * Describes the queue's ability to accept new jobs.
     */
    state?: JQState;
    /**
     * The priority of the job queue. Job queues with a higher priority (or a higher integer value for the priority parameter) are evaluated first when associated with the same compute environment. Priority is determined in descending order, for example, a job queue with a priority value of 10 is given scheduling preference over a job queue with a priority value of 1.
     */
    priority?: Integer;
    /**
     * Details the set of compute environments mapped to a job queue and their order relative to each other. This is one of the parameters used by the job scheduler to determine which compute environment should execute a given job. 
     */
    computeEnvironmentOrder?: ComputeEnvironmentOrders;
  }
  export interface UpdateJobQueueResponse {
    /**
     * The name of the job queue.
     */
    jobQueueName?: String;
    /**
     * The Amazon Resource Name (ARN) of the job queue.
     */
    jobQueueArn?: String;
  }
  export interface Volume {
    /**
     * The contents of the host parameter determine whether your data volume persists on the host container instance and where it is stored. If the host parameter is empty, then the Docker daemon assigns a host path for your data volume. However, the data is not guaranteed to persist after the containers associated with it stop running.
     */
    host?: Host;
    /**
     * The name of the volume. Up to 255 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed. This name is referenced in the sourceVolume parameter of container definition mountPoints.
     */
    name?: String;
  }
  export type Volumes = Volume[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2016-08-10"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Batch client.
   */
  export import Types = Batch;
}
export = Batch;
