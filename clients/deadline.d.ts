import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {WaiterConfiguration} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class Deadline extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Deadline.Types.ClientConfiguration)
  config: Config & Deadline.Types.ClientConfiguration;
  /**
   * Assigns a farm membership level to a member.
   */
  associateMemberToFarm(params: Deadline.Types.AssociateMemberToFarmRequest, callback?: (err: AWSError, data: Deadline.Types.AssociateMemberToFarmResponse) => void): Request<Deadline.Types.AssociateMemberToFarmResponse, AWSError>;
  /**
   * Assigns a farm membership level to a member.
   */
  associateMemberToFarm(callback?: (err: AWSError, data: Deadline.Types.AssociateMemberToFarmResponse) => void): Request<Deadline.Types.AssociateMemberToFarmResponse, AWSError>;
  /**
   * Assigns a fleet membership level to a member.
   */
  associateMemberToFleet(params: Deadline.Types.AssociateMemberToFleetRequest, callback?: (err: AWSError, data: Deadline.Types.AssociateMemberToFleetResponse) => void): Request<Deadline.Types.AssociateMemberToFleetResponse, AWSError>;
  /**
   * Assigns a fleet membership level to a member.
   */
  associateMemberToFleet(callback?: (err: AWSError, data: Deadline.Types.AssociateMemberToFleetResponse) => void): Request<Deadline.Types.AssociateMemberToFleetResponse, AWSError>;
  /**
   * Assigns a job membership level to a member
   */
  associateMemberToJob(params: Deadline.Types.AssociateMemberToJobRequest, callback?: (err: AWSError, data: Deadline.Types.AssociateMemberToJobResponse) => void): Request<Deadline.Types.AssociateMemberToJobResponse, AWSError>;
  /**
   * Assigns a job membership level to a member
   */
  associateMemberToJob(callback?: (err: AWSError, data: Deadline.Types.AssociateMemberToJobResponse) => void): Request<Deadline.Types.AssociateMemberToJobResponse, AWSError>;
  /**
   * Assigns a queue membership level to a member
   */
  associateMemberToQueue(params: Deadline.Types.AssociateMemberToQueueRequest, callback?: (err: AWSError, data: Deadline.Types.AssociateMemberToQueueResponse) => void): Request<Deadline.Types.AssociateMemberToQueueResponse, AWSError>;
  /**
   * Assigns a queue membership level to a member
   */
  associateMemberToQueue(callback?: (err: AWSError, data: Deadline.Types.AssociateMemberToQueueResponse) => void): Request<Deadline.Types.AssociateMemberToQueueResponse, AWSError>;
  /**
   * Get Amazon Web Services credentials from the fleet role. The IAM permissions of the credentials are scoped down to have read-only access.
   */
  assumeFleetRoleForRead(params: Deadline.Types.AssumeFleetRoleForReadRequest, callback?: (err: AWSError, data: Deadline.Types.AssumeFleetRoleForReadResponse) => void): Request<Deadline.Types.AssumeFleetRoleForReadResponse, AWSError>;
  /**
   * Get Amazon Web Services credentials from the fleet role. The IAM permissions of the credentials are scoped down to have read-only access.
   */
  assumeFleetRoleForRead(callback?: (err: AWSError, data: Deadline.Types.AssumeFleetRoleForReadResponse) => void): Request<Deadline.Types.AssumeFleetRoleForReadResponse, AWSError>;
  /**
   * Get credentials from the fleet role for a worker.
   */
  assumeFleetRoleForWorker(params: Deadline.Types.AssumeFleetRoleForWorkerRequest, callback?: (err: AWSError, data: Deadline.Types.AssumeFleetRoleForWorkerResponse) => void): Request<Deadline.Types.AssumeFleetRoleForWorkerResponse, AWSError>;
  /**
   * Get credentials from the fleet role for a worker.
   */
  assumeFleetRoleForWorker(callback?: (err: AWSError, data: Deadline.Types.AssumeFleetRoleForWorkerResponse) => void): Request<Deadline.Types.AssumeFleetRoleForWorkerResponse, AWSError>;
  /**
   * Gets Amazon Web Services credentials from the queue role. The IAM permissions of the credentials are scoped down to have read-only access.
   */
  assumeQueueRoleForRead(params: Deadline.Types.AssumeQueueRoleForReadRequest, callback?: (err: AWSError, data: Deadline.Types.AssumeQueueRoleForReadResponse) => void): Request<Deadline.Types.AssumeQueueRoleForReadResponse, AWSError>;
  /**
   * Gets Amazon Web Services credentials from the queue role. The IAM permissions of the credentials are scoped down to have read-only access.
   */
  assumeQueueRoleForRead(callback?: (err: AWSError, data: Deadline.Types.AssumeQueueRoleForReadResponse) => void): Request<Deadline.Types.AssumeQueueRoleForReadResponse, AWSError>;
  /**
   * Allows a user to assume a role for a queue.
   */
  assumeQueueRoleForUser(params: Deadline.Types.AssumeQueueRoleForUserRequest, callback?: (err: AWSError, data: Deadline.Types.AssumeQueueRoleForUserResponse) => void): Request<Deadline.Types.AssumeQueueRoleForUserResponse, AWSError>;
  /**
   * Allows a user to assume a role for a queue.
   */
  assumeQueueRoleForUser(callback?: (err: AWSError, data: Deadline.Types.AssumeQueueRoleForUserResponse) => void): Request<Deadline.Types.AssumeQueueRoleForUserResponse, AWSError>;
  /**
   * Allows a worker to assume a queue role.
   */
  assumeQueueRoleForWorker(params: Deadline.Types.AssumeQueueRoleForWorkerRequest, callback?: (err: AWSError, data: Deadline.Types.AssumeQueueRoleForWorkerResponse) => void): Request<Deadline.Types.AssumeQueueRoleForWorkerResponse, AWSError>;
  /**
   * Allows a worker to assume a queue role.
   */
  assumeQueueRoleForWorker(callback?: (err: AWSError, data: Deadline.Types.AssumeQueueRoleForWorkerResponse) => void): Request<Deadline.Types.AssumeQueueRoleForWorkerResponse, AWSError>;
  /**
   * Get batched job details for a worker.
   */
  batchGetJobEntity(params: Deadline.Types.BatchGetJobEntityRequest, callback?: (err: AWSError, data: Deadline.Types.BatchGetJobEntityResponse) => void): Request<Deadline.Types.BatchGetJobEntityResponse, AWSError>;
  /**
   * Get batched job details for a worker.
   */
  batchGetJobEntity(callback?: (err: AWSError, data: Deadline.Types.BatchGetJobEntityResponse) => void): Request<Deadline.Types.BatchGetJobEntityResponse, AWSError>;
  /**
   * Copies a job template to an Amazon S3 bucket.
   */
  copyJobTemplate(params: Deadline.Types.CopyJobTemplateRequest, callback?: (err: AWSError, data: Deadline.Types.CopyJobTemplateResponse) => void): Request<Deadline.Types.CopyJobTemplateResponse, AWSError>;
  /**
   * Copies a job template to an Amazon S3 bucket.
   */
  copyJobTemplate(callback?: (err: AWSError, data: Deadline.Types.CopyJobTemplateResponse) => void): Request<Deadline.Types.CopyJobTemplateResponse, AWSError>;
  /**
   * Creates a budget to set spending thresholds for your rendering activity.
   */
  createBudget(params: Deadline.Types.CreateBudgetRequest, callback?: (err: AWSError, data: Deadline.Types.CreateBudgetResponse) => void): Request<Deadline.Types.CreateBudgetResponse, AWSError>;
  /**
   * Creates a budget to set spending thresholds for your rendering activity.
   */
  createBudget(callback?: (err: AWSError, data: Deadline.Types.CreateBudgetResponse) => void): Request<Deadline.Types.CreateBudgetResponse, AWSError>;
  /**
   * Creates a farm to allow space for queues and fleets. Farms are the space where the components of your renders gather and are pieced together in the cloud. Farms contain budgets and allow you to enforce permissions. Deadline Cloud farms are a useful container for large projects.
   */
  createFarm(params: Deadline.Types.CreateFarmRequest, callback?: (err: AWSError, data: Deadline.Types.CreateFarmResponse) => void): Request<Deadline.Types.CreateFarmResponse, AWSError>;
  /**
   * Creates a farm to allow space for queues and fleets. Farms are the space where the components of your renders gather and are pieced together in the cloud. Farms contain budgets and allow you to enforce permissions. Deadline Cloud farms are a useful container for large projects.
   */
  createFarm(callback?: (err: AWSError, data: Deadline.Types.CreateFarmResponse) => void): Request<Deadline.Types.CreateFarmResponse, AWSError>;
  /**
   * Creates a fleet. Fleets gather information relating to compute, or capacity, for renders within your farms. You can choose to manage your own capacity or opt to have fleets fully managed by Deadline Cloud.
   */
  createFleet(params: Deadline.Types.CreateFleetRequest, callback?: (err: AWSError, data: Deadline.Types.CreateFleetResponse) => void): Request<Deadline.Types.CreateFleetResponse, AWSError>;
  /**
   * Creates a fleet. Fleets gather information relating to compute, or capacity, for renders within your farms. You can choose to manage your own capacity or opt to have fleets fully managed by Deadline Cloud.
   */
  createFleet(callback?: (err: AWSError, data: Deadline.Types.CreateFleetResponse) => void): Request<Deadline.Types.CreateFleetResponse, AWSError>;
  /**
   * Creates a job. A job is a render submission submitted by a user. It contains specific job properties outlined as steps and tasks.
   */
  createJob(params: Deadline.Types.CreateJobRequest, callback?: (err: AWSError, data: Deadline.Types.CreateJobResponse) => void): Request<Deadline.Types.CreateJobResponse, AWSError>;
  /**
   * Creates a job. A job is a render submission submitted by a user. It contains specific job properties outlined as steps and tasks.
   */
  createJob(callback?: (err: AWSError, data: Deadline.Types.CreateJobResponse) => void): Request<Deadline.Types.CreateJobResponse, AWSError>;
  /**
   * Creates a license endpoint to integrate your various licensed software used for rendering on Deadline Cloud.
   */
  createLicenseEndpoint(params: Deadline.Types.CreateLicenseEndpointRequest, callback?: (err: AWSError, data: Deadline.Types.CreateLicenseEndpointResponse) => void): Request<Deadline.Types.CreateLicenseEndpointResponse, AWSError>;
  /**
   * Creates a license endpoint to integrate your various licensed software used for rendering on Deadline Cloud.
   */
  createLicenseEndpoint(callback?: (err: AWSError, data: Deadline.Types.CreateLicenseEndpointResponse) => void): Request<Deadline.Types.CreateLicenseEndpointResponse, AWSError>;
  /**
   * Creates an Amazon Web Services Deadline Cloud monitor that you can use to view your farms, queues, and fleets. After you submit a job, you can track the progress of the tasks and steps that make up the job, and then download the job's results. 
   */
  createMonitor(params: Deadline.Types.CreateMonitorRequest, callback?: (err: AWSError, data: Deadline.Types.CreateMonitorResponse) => void): Request<Deadline.Types.CreateMonitorResponse, AWSError>;
  /**
   * Creates an Amazon Web Services Deadline Cloud monitor that you can use to view your farms, queues, and fleets. After you submit a job, you can track the progress of the tasks and steps that make up the job, and then download the job's results. 
   */
  createMonitor(callback?: (err: AWSError, data: Deadline.Types.CreateMonitorResponse) => void): Request<Deadline.Types.CreateMonitorResponse, AWSError>;
  /**
   * Creates a queue to coordinate the order in which jobs run on a farm. A queue can also specify where to pull resources and indicate where to output completed jobs.
   */
  createQueue(params: Deadline.Types.CreateQueueRequest, callback?: (err: AWSError, data: Deadline.Types.CreateQueueResponse) => void): Request<Deadline.Types.CreateQueueResponse, AWSError>;
  /**
   * Creates a queue to coordinate the order in which jobs run on a farm. A queue can also specify where to pull resources and indicate where to output completed jobs.
   */
  createQueue(callback?: (err: AWSError, data: Deadline.Types.CreateQueueResponse) => void): Request<Deadline.Types.CreateQueueResponse, AWSError>;
  /**
   * Creates an environment for a queue that defines how jobs in the queue run.
   */
  createQueueEnvironment(params: Deadline.Types.CreateQueueEnvironmentRequest, callback?: (err: AWSError, data: Deadline.Types.CreateQueueEnvironmentResponse) => void): Request<Deadline.Types.CreateQueueEnvironmentResponse, AWSError>;
  /**
   * Creates an environment for a queue that defines how jobs in the queue run.
   */
  createQueueEnvironment(callback?: (err: AWSError, data: Deadline.Types.CreateQueueEnvironmentResponse) => void): Request<Deadline.Types.CreateQueueEnvironmentResponse, AWSError>;
  /**
   * Creates an association between a queue and a fleet.
   */
  createQueueFleetAssociation(params: Deadline.Types.CreateQueueFleetAssociationRequest, callback?: (err: AWSError, data: Deadline.Types.CreateQueueFleetAssociationResponse) => void): Request<Deadline.Types.CreateQueueFleetAssociationResponse, AWSError>;
  /**
   * Creates an association between a queue and a fleet.
   */
  createQueueFleetAssociation(callback?: (err: AWSError, data: Deadline.Types.CreateQueueFleetAssociationResponse) => void): Request<Deadline.Types.CreateQueueFleetAssociationResponse, AWSError>;
  /**
   * Creates a storage profile that specifies the operating system, file type, and file location of resources used on a farm.
   */
  createStorageProfile(params: Deadline.Types.CreateStorageProfileRequest, callback?: (err: AWSError, data: Deadline.Types.CreateStorageProfileResponse) => void): Request<Deadline.Types.CreateStorageProfileResponse, AWSError>;
  /**
   * Creates a storage profile that specifies the operating system, file type, and file location of resources used on a farm.
   */
  createStorageProfile(callback?: (err: AWSError, data: Deadline.Types.CreateStorageProfileResponse) => void): Request<Deadline.Types.CreateStorageProfileResponse, AWSError>;
  /**
   * Creates a worker. A worker tells your instance how much processing power (vCPU), and memory (GiB) you’ll need to assemble the digital assets held within a particular instance. You can specify certain instance types to use, or let the worker know which instances types to exclude.
   */
  createWorker(params: Deadline.Types.CreateWorkerRequest, callback?: (err: AWSError, data: Deadline.Types.CreateWorkerResponse) => void): Request<Deadline.Types.CreateWorkerResponse, AWSError>;
  /**
   * Creates a worker. A worker tells your instance how much processing power (vCPU), and memory (GiB) you’ll need to assemble the digital assets held within a particular instance. You can specify certain instance types to use, or let the worker know which instances types to exclude.
   */
  createWorker(callback?: (err: AWSError, data: Deadline.Types.CreateWorkerResponse) => void): Request<Deadline.Types.CreateWorkerResponse, AWSError>;
  /**
   * Deletes a budget.
   */
  deleteBudget(params: Deadline.Types.DeleteBudgetRequest, callback?: (err: AWSError, data: Deadline.Types.DeleteBudgetResponse) => void): Request<Deadline.Types.DeleteBudgetResponse, AWSError>;
  /**
   * Deletes a budget.
   */
  deleteBudget(callback?: (err: AWSError, data: Deadline.Types.DeleteBudgetResponse) => void): Request<Deadline.Types.DeleteBudgetResponse, AWSError>;
  /**
   * Deletes a farm.
   */
  deleteFarm(params: Deadline.Types.DeleteFarmRequest, callback?: (err: AWSError, data: Deadline.Types.DeleteFarmResponse) => void): Request<Deadline.Types.DeleteFarmResponse, AWSError>;
  /**
   * Deletes a farm.
   */
  deleteFarm(callback?: (err: AWSError, data: Deadline.Types.DeleteFarmResponse) => void): Request<Deadline.Types.DeleteFarmResponse, AWSError>;
  /**
   * Deletes a fleet.
   */
  deleteFleet(params: Deadline.Types.DeleteFleetRequest, callback?: (err: AWSError, data: Deadline.Types.DeleteFleetResponse) => void): Request<Deadline.Types.DeleteFleetResponse, AWSError>;
  /**
   * Deletes a fleet.
   */
  deleteFleet(callback?: (err: AWSError, data: Deadline.Types.DeleteFleetResponse) => void): Request<Deadline.Types.DeleteFleetResponse, AWSError>;
  /**
   * Deletes a license endpoint.
   */
  deleteLicenseEndpoint(params: Deadline.Types.DeleteLicenseEndpointRequest, callback?: (err: AWSError, data: Deadline.Types.DeleteLicenseEndpointResponse) => void): Request<Deadline.Types.DeleteLicenseEndpointResponse, AWSError>;
  /**
   * Deletes a license endpoint.
   */
  deleteLicenseEndpoint(callback?: (err: AWSError, data: Deadline.Types.DeleteLicenseEndpointResponse) => void): Request<Deadline.Types.DeleteLicenseEndpointResponse, AWSError>;
  /**
   * Deletes a metered product.
   */
  deleteMeteredProduct(params: Deadline.Types.DeleteMeteredProductRequest, callback?: (err: AWSError, data: Deadline.Types.DeleteMeteredProductResponse) => void): Request<Deadline.Types.DeleteMeteredProductResponse, AWSError>;
  /**
   * Deletes a metered product.
   */
  deleteMeteredProduct(callback?: (err: AWSError, data: Deadline.Types.DeleteMeteredProductResponse) => void): Request<Deadline.Types.DeleteMeteredProductResponse, AWSError>;
  /**
   * Removes a Deadline Cloud monitor. After you delete a monitor, you can create a new one and attach farms to the monitor.
   */
  deleteMonitor(params: Deadline.Types.DeleteMonitorRequest, callback?: (err: AWSError, data: Deadline.Types.DeleteMonitorResponse) => void): Request<Deadline.Types.DeleteMonitorResponse, AWSError>;
  /**
   * Removes a Deadline Cloud monitor. After you delete a monitor, you can create a new one and attach farms to the monitor.
   */
  deleteMonitor(callback?: (err: AWSError, data: Deadline.Types.DeleteMonitorResponse) => void): Request<Deadline.Types.DeleteMonitorResponse, AWSError>;
  /**
   * Deletes a queue.
   */
  deleteQueue(params: Deadline.Types.DeleteQueueRequest, callback?: (err: AWSError, data: Deadline.Types.DeleteQueueResponse) => void): Request<Deadline.Types.DeleteQueueResponse, AWSError>;
  /**
   * Deletes a queue.
   */
  deleteQueue(callback?: (err: AWSError, data: Deadline.Types.DeleteQueueResponse) => void): Request<Deadline.Types.DeleteQueueResponse, AWSError>;
  /**
   * Deletes a queue environment.
   */
  deleteQueueEnvironment(params: Deadline.Types.DeleteQueueEnvironmentRequest, callback?: (err: AWSError, data: Deadline.Types.DeleteQueueEnvironmentResponse) => void): Request<Deadline.Types.DeleteQueueEnvironmentResponse, AWSError>;
  /**
   * Deletes a queue environment.
   */
  deleteQueueEnvironment(callback?: (err: AWSError, data: Deadline.Types.DeleteQueueEnvironmentResponse) => void): Request<Deadline.Types.DeleteQueueEnvironmentResponse, AWSError>;
  /**
   * Deletes a queue-fleet association.
   */
  deleteQueueFleetAssociation(params: Deadline.Types.DeleteQueueFleetAssociationRequest, callback?: (err: AWSError, data: Deadline.Types.DeleteQueueFleetAssociationResponse) => void): Request<Deadline.Types.DeleteQueueFleetAssociationResponse, AWSError>;
  /**
   * Deletes a queue-fleet association.
   */
  deleteQueueFleetAssociation(callback?: (err: AWSError, data: Deadline.Types.DeleteQueueFleetAssociationResponse) => void): Request<Deadline.Types.DeleteQueueFleetAssociationResponse, AWSError>;
  /**
   * Deletes a storage profile.
   */
  deleteStorageProfile(params: Deadline.Types.DeleteStorageProfileRequest, callback?: (err: AWSError, data: Deadline.Types.DeleteStorageProfileResponse) => void): Request<Deadline.Types.DeleteStorageProfileResponse, AWSError>;
  /**
   * Deletes a storage profile.
   */
  deleteStorageProfile(callback?: (err: AWSError, data: Deadline.Types.DeleteStorageProfileResponse) => void): Request<Deadline.Types.DeleteStorageProfileResponse, AWSError>;
  /**
   * Deletes a worker.
   */
  deleteWorker(params: Deadline.Types.DeleteWorkerRequest, callback?: (err: AWSError, data: Deadline.Types.DeleteWorkerResponse) => void): Request<Deadline.Types.DeleteWorkerResponse, AWSError>;
  /**
   * Deletes a worker.
   */
  deleteWorker(callback?: (err: AWSError, data: Deadline.Types.DeleteWorkerResponse) => void): Request<Deadline.Types.DeleteWorkerResponse, AWSError>;
  /**
   * Disassociates a member from a farm.
   */
  disassociateMemberFromFarm(params: Deadline.Types.DisassociateMemberFromFarmRequest, callback?: (err: AWSError, data: Deadline.Types.DisassociateMemberFromFarmResponse) => void): Request<Deadline.Types.DisassociateMemberFromFarmResponse, AWSError>;
  /**
   * Disassociates a member from a farm.
   */
  disassociateMemberFromFarm(callback?: (err: AWSError, data: Deadline.Types.DisassociateMemberFromFarmResponse) => void): Request<Deadline.Types.DisassociateMemberFromFarmResponse, AWSError>;
  /**
   * Disassociates a member from a fleet.
   */
  disassociateMemberFromFleet(params: Deadline.Types.DisassociateMemberFromFleetRequest, callback?: (err: AWSError, data: Deadline.Types.DisassociateMemberFromFleetResponse) => void): Request<Deadline.Types.DisassociateMemberFromFleetResponse, AWSError>;
  /**
   * Disassociates a member from a fleet.
   */
  disassociateMemberFromFleet(callback?: (err: AWSError, data: Deadline.Types.DisassociateMemberFromFleetResponse) => void): Request<Deadline.Types.DisassociateMemberFromFleetResponse, AWSError>;
  /**
   * Disassociates a member from a job.
   */
  disassociateMemberFromJob(params: Deadline.Types.DisassociateMemberFromJobRequest, callback?: (err: AWSError, data: Deadline.Types.DisassociateMemberFromJobResponse) => void): Request<Deadline.Types.DisassociateMemberFromJobResponse, AWSError>;
  /**
   * Disassociates a member from a job.
   */
  disassociateMemberFromJob(callback?: (err: AWSError, data: Deadline.Types.DisassociateMemberFromJobResponse) => void): Request<Deadline.Types.DisassociateMemberFromJobResponse, AWSError>;
  /**
   * Disassociates a member from a queue.
   */
  disassociateMemberFromQueue(params: Deadline.Types.DisassociateMemberFromQueueRequest, callback?: (err: AWSError, data: Deadline.Types.DisassociateMemberFromQueueResponse) => void): Request<Deadline.Types.DisassociateMemberFromQueueResponse, AWSError>;
  /**
   * Disassociates a member from a queue.
   */
  disassociateMemberFromQueue(callback?: (err: AWSError, data: Deadline.Types.DisassociateMemberFromQueueResponse) => void): Request<Deadline.Types.DisassociateMemberFromQueueResponse, AWSError>;
  /**
   * Get a budget.
   */
  getBudget(params: Deadline.Types.GetBudgetRequest, callback?: (err: AWSError, data: Deadline.Types.GetBudgetResponse) => void): Request<Deadline.Types.GetBudgetResponse, AWSError>;
  /**
   * Get a budget.
   */
  getBudget(callback?: (err: AWSError, data: Deadline.Types.GetBudgetResponse) => void): Request<Deadline.Types.GetBudgetResponse, AWSError>;
  /**
   * Get a farm.
   */
  getFarm(params: Deadline.Types.GetFarmRequest, callback?: (err: AWSError, data: Deadline.Types.GetFarmResponse) => void): Request<Deadline.Types.GetFarmResponse, AWSError>;
  /**
   * Get a farm.
   */
  getFarm(callback?: (err: AWSError, data: Deadline.Types.GetFarmResponse) => void): Request<Deadline.Types.GetFarmResponse, AWSError>;
  /**
   * Get a fleet.
   */
  getFleet(params: Deadline.Types.GetFleetRequest, callback?: (err: AWSError, data: Deadline.Types.GetFleetResponse) => void): Request<Deadline.Types.GetFleetResponse, AWSError>;
  /**
   * Get a fleet.
   */
  getFleet(callback?: (err: AWSError, data: Deadline.Types.GetFleetResponse) => void): Request<Deadline.Types.GetFleetResponse, AWSError>;
  /**
   * Gets a Deadline Cloud job.
   */
  getJob(params: Deadline.Types.GetJobRequest, callback?: (err: AWSError, data: Deadline.Types.GetJobResponse) => void): Request<Deadline.Types.GetJobResponse, AWSError>;
  /**
   * Gets a Deadline Cloud job.
   */
  getJob(callback?: (err: AWSError, data: Deadline.Types.GetJobResponse) => void): Request<Deadline.Types.GetJobResponse, AWSError>;
  /**
   * Gets a licence endpoint.
   */
  getLicenseEndpoint(params: Deadline.Types.GetLicenseEndpointRequest, callback?: (err: AWSError, data: Deadline.Types.GetLicenseEndpointResponse) => void): Request<Deadline.Types.GetLicenseEndpointResponse, AWSError>;
  /**
   * Gets a licence endpoint.
   */
  getLicenseEndpoint(callback?: (err: AWSError, data: Deadline.Types.GetLicenseEndpointResponse) => void): Request<Deadline.Types.GetLicenseEndpointResponse, AWSError>;
  /**
   * Gets information about the specified monitor.
   */
  getMonitor(params: Deadline.Types.GetMonitorRequest, callback?: (err: AWSError, data: Deadline.Types.GetMonitorResponse) => void): Request<Deadline.Types.GetMonitorResponse, AWSError>;
  /**
   * Gets information about the specified monitor.
   */
  getMonitor(callback?: (err: AWSError, data: Deadline.Types.GetMonitorResponse) => void): Request<Deadline.Types.GetMonitorResponse, AWSError>;
  /**
   * Gets a queue.
   */
  getQueue(params: Deadline.Types.GetQueueRequest, callback?: (err: AWSError, data: Deadline.Types.GetQueueResponse) => void): Request<Deadline.Types.GetQueueResponse, AWSError>;
  /**
   * Gets a queue.
   */
  getQueue(callback?: (err: AWSError, data: Deadline.Types.GetQueueResponse) => void): Request<Deadline.Types.GetQueueResponse, AWSError>;
  /**
   * Gets a queue environment.
   */
  getQueueEnvironment(params: Deadline.Types.GetQueueEnvironmentRequest, callback?: (err: AWSError, data: Deadline.Types.GetQueueEnvironmentResponse) => void): Request<Deadline.Types.GetQueueEnvironmentResponse, AWSError>;
  /**
   * Gets a queue environment.
   */
  getQueueEnvironment(callback?: (err: AWSError, data: Deadline.Types.GetQueueEnvironmentResponse) => void): Request<Deadline.Types.GetQueueEnvironmentResponse, AWSError>;
  /**
   * Gets a queue-fleet association.
   */
  getQueueFleetAssociation(params: Deadline.Types.GetQueueFleetAssociationRequest, callback?: (err: AWSError, data: Deadline.Types.GetQueueFleetAssociationResponse) => void): Request<Deadline.Types.GetQueueFleetAssociationResponse, AWSError>;
  /**
   * Gets a queue-fleet association.
   */
  getQueueFleetAssociation(callback?: (err: AWSError, data: Deadline.Types.GetQueueFleetAssociationResponse) => void): Request<Deadline.Types.GetQueueFleetAssociationResponse, AWSError>;
  /**
   * Gets a session.
   */
  getSession(params: Deadline.Types.GetSessionRequest, callback?: (err: AWSError, data: Deadline.Types.GetSessionResponse) => void): Request<Deadline.Types.GetSessionResponse, AWSError>;
  /**
   * Gets a session.
   */
  getSession(callback?: (err: AWSError, data: Deadline.Types.GetSessionResponse) => void): Request<Deadline.Types.GetSessionResponse, AWSError>;
  /**
   * Gets a session action for the job.
   */
  getSessionAction(params: Deadline.Types.GetSessionActionRequest, callback?: (err: AWSError, data: Deadline.Types.GetSessionActionResponse) => void): Request<Deadline.Types.GetSessionActionResponse, AWSError>;
  /**
   * Gets a session action for the job.
   */
  getSessionAction(callback?: (err: AWSError, data: Deadline.Types.GetSessionActionResponse) => void): Request<Deadline.Types.GetSessionActionResponse, AWSError>;
  /**
   * Gets a set of statistics for queues or farms. Before you can call the GetSessionStatisticsAggregation operation, you must first call the StartSessionsStatisticsAggregation operation. Statistics are available for 1 hour after you call the StartSessionsStatisticsAggregation operation.
   */
  getSessionsStatisticsAggregation(params: Deadline.Types.GetSessionsStatisticsAggregationRequest, callback?: (err: AWSError, data: Deadline.Types.GetSessionsStatisticsAggregationResponse) => void): Request<Deadline.Types.GetSessionsStatisticsAggregationResponse, AWSError>;
  /**
   * Gets a set of statistics for queues or farms. Before you can call the GetSessionStatisticsAggregation operation, you must first call the StartSessionsStatisticsAggregation operation. Statistics are available for 1 hour after you call the StartSessionsStatisticsAggregation operation.
   */
  getSessionsStatisticsAggregation(callback?: (err: AWSError, data: Deadline.Types.GetSessionsStatisticsAggregationResponse) => void): Request<Deadline.Types.GetSessionsStatisticsAggregationResponse, AWSError>;
  /**
   * Gets a step.
   */
  getStep(params: Deadline.Types.GetStepRequest, callback?: (err: AWSError, data: Deadline.Types.GetStepResponse) => void): Request<Deadline.Types.GetStepResponse, AWSError>;
  /**
   * Gets a step.
   */
  getStep(callback?: (err: AWSError, data: Deadline.Types.GetStepResponse) => void): Request<Deadline.Types.GetStepResponse, AWSError>;
  /**
   * Gets a storage profile.
   */
  getStorageProfile(params: Deadline.Types.GetStorageProfileRequest, callback?: (err: AWSError, data: Deadline.Types.GetStorageProfileResponse) => void): Request<Deadline.Types.GetStorageProfileResponse, AWSError>;
  /**
   * Gets a storage profile.
   */
  getStorageProfile(callback?: (err: AWSError, data: Deadline.Types.GetStorageProfileResponse) => void): Request<Deadline.Types.GetStorageProfileResponse, AWSError>;
  /**
   * Gets a storage profile for a queue.
   */
  getStorageProfileForQueue(params: Deadline.Types.GetStorageProfileForQueueRequest, callback?: (err: AWSError, data: Deadline.Types.GetStorageProfileForQueueResponse) => void): Request<Deadline.Types.GetStorageProfileForQueueResponse, AWSError>;
  /**
   * Gets a storage profile for a queue.
   */
  getStorageProfileForQueue(callback?: (err: AWSError, data: Deadline.Types.GetStorageProfileForQueueResponse) => void): Request<Deadline.Types.GetStorageProfileForQueueResponse, AWSError>;
  /**
   * Gets a task.
   */
  getTask(params: Deadline.Types.GetTaskRequest, callback?: (err: AWSError, data: Deadline.Types.GetTaskResponse) => void): Request<Deadline.Types.GetTaskResponse, AWSError>;
  /**
   * Gets a task.
   */
  getTask(callback?: (err: AWSError, data: Deadline.Types.GetTaskResponse) => void): Request<Deadline.Types.GetTaskResponse, AWSError>;
  /**
   * Gets a worker.
   */
  getWorker(params: Deadline.Types.GetWorkerRequest, callback?: (err: AWSError, data: Deadline.Types.GetWorkerResponse) => void): Request<Deadline.Types.GetWorkerResponse, AWSError>;
  /**
   * Gets a worker.
   */
  getWorker(callback?: (err: AWSError, data: Deadline.Types.GetWorkerResponse) => void): Request<Deadline.Types.GetWorkerResponse, AWSError>;
  /**
   * A list of the available metered products.
   */
  listAvailableMeteredProducts(params: Deadline.Types.ListAvailableMeteredProductsRequest, callback?: (err: AWSError, data: Deadline.Types.ListAvailableMeteredProductsResponse) => void): Request<Deadline.Types.ListAvailableMeteredProductsResponse, AWSError>;
  /**
   * A list of the available metered products.
   */
  listAvailableMeteredProducts(callback?: (err: AWSError, data: Deadline.Types.ListAvailableMeteredProductsResponse) => void): Request<Deadline.Types.ListAvailableMeteredProductsResponse, AWSError>;
  /**
   * A list of budgets in a farm.
   */
  listBudgets(params: Deadline.Types.ListBudgetsRequest, callback?: (err: AWSError, data: Deadline.Types.ListBudgetsResponse) => void): Request<Deadline.Types.ListBudgetsResponse, AWSError>;
  /**
   * A list of budgets in a farm.
   */
  listBudgets(callback?: (err: AWSError, data: Deadline.Types.ListBudgetsResponse) => void): Request<Deadline.Types.ListBudgetsResponse, AWSError>;
  /**
   * Lists the members of a farm.
   */
  listFarmMembers(params: Deadline.Types.ListFarmMembersRequest, callback?: (err: AWSError, data: Deadline.Types.ListFarmMembersResponse) => void): Request<Deadline.Types.ListFarmMembersResponse, AWSError>;
  /**
   * Lists the members of a farm.
   */
  listFarmMembers(callback?: (err: AWSError, data: Deadline.Types.ListFarmMembersResponse) => void): Request<Deadline.Types.ListFarmMembersResponse, AWSError>;
  /**
   * Lists farms.
   */
  listFarms(params: Deadline.Types.ListFarmsRequest, callback?: (err: AWSError, data: Deadline.Types.ListFarmsResponse) => void): Request<Deadline.Types.ListFarmsResponse, AWSError>;
  /**
   * Lists farms.
   */
  listFarms(callback?: (err: AWSError, data: Deadline.Types.ListFarmsResponse) => void): Request<Deadline.Types.ListFarmsResponse, AWSError>;
  /**
   * Lists fleet members.
   */
  listFleetMembers(params: Deadline.Types.ListFleetMembersRequest, callback?: (err: AWSError, data: Deadline.Types.ListFleetMembersResponse) => void): Request<Deadline.Types.ListFleetMembersResponse, AWSError>;
  /**
   * Lists fleet members.
   */
  listFleetMembers(callback?: (err: AWSError, data: Deadline.Types.ListFleetMembersResponse) => void): Request<Deadline.Types.ListFleetMembersResponse, AWSError>;
  /**
   * Lists fleets.
   */
  listFleets(params: Deadline.Types.ListFleetsRequest, callback?: (err: AWSError, data: Deadline.Types.ListFleetsResponse) => void): Request<Deadline.Types.ListFleetsResponse, AWSError>;
  /**
   * Lists fleets.
   */
  listFleets(callback?: (err: AWSError, data: Deadline.Types.ListFleetsResponse) => void): Request<Deadline.Types.ListFleetsResponse, AWSError>;
  /**
   * Lists members on a job.
   */
  listJobMembers(params: Deadline.Types.ListJobMembersRequest, callback?: (err: AWSError, data: Deadline.Types.ListJobMembersResponse) => void): Request<Deadline.Types.ListJobMembersResponse, AWSError>;
  /**
   * Lists members on a job.
   */
  listJobMembers(callback?: (err: AWSError, data: Deadline.Types.ListJobMembersResponse) => void): Request<Deadline.Types.ListJobMembersResponse, AWSError>;
  /**
   * Lists jobs.
   */
  listJobs(params: Deadline.Types.ListJobsRequest, callback?: (err: AWSError, data: Deadline.Types.ListJobsResponse) => void): Request<Deadline.Types.ListJobsResponse, AWSError>;
  /**
   * Lists jobs.
   */
  listJobs(callback?: (err: AWSError, data: Deadline.Types.ListJobsResponse) => void): Request<Deadline.Types.ListJobsResponse, AWSError>;
  /**
   * Lists license endpoints.
   */
  listLicenseEndpoints(params: Deadline.Types.ListLicenseEndpointsRequest, callback?: (err: AWSError, data: Deadline.Types.ListLicenseEndpointsResponse) => void): Request<Deadline.Types.ListLicenseEndpointsResponse, AWSError>;
  /**
   * Lists license endpoints.
   */
  listLicenseEndpoints(callback?: (err: AWSError, data: Deadline.Types.ListLicenseEndpointsResponse) => void): Request<Deadline.Types.ListLicenseEndpointsResponse, AWSError>;
  /**
   * Lists metered products.
   */
  listMeteredProducts(params: Deadline.Types.ListMeteredProductsRequest, callback?: (err: AWSError, data: Deadline.Types.ListMeteredProductsResponse) => void): Request<Deadline.Types.ListMeteredProductsResponse, AWSError>;
  /**
   * Lists metered products.
   */
  listMeteredProducts(callback?: (err: AWSError, data: Deadline.Types.ListMeteredProductsResponse) => void): Request<Deadline.Types.ListMeteredProductsResponse, AWSError>;
  /**
   * Gets a list of your monitors in Deadline Cloud.
   */
  listMonitors(params: Deadline.Types.ListMonitorsRequest, callback?: (err: AWSError, data: Deadline.Types.ListMonitorsResponse) => void): Request<Deadline.Types.ListMonitorsResponse, AWSError>;
  /**
   * Gets a list of your monitors in Deadline Cloud.
   */
  listMonitors(callback?: (err: AWSError, data: Deadline.Types.ListMonitorsResponse) => void): Request<Deadline.Types.ListMonitorsResponse, AWSError>;
  /**
   * Lists queue environments.
   */
  listQueueEnvironments(params: Deadline.Types.ListQueueEnvironmentsRequest, callback?: (err: AWSError, data: Deadline.Types.ListQueueEnvironmentsResponse) => void): Request<Deadline.Types.ListQueueEnvironmentsResponse, AWSError>;
  /**
   * Lists queue environments.
   */
  listQueueEnvironments(callback?: (err: AWSError, data: Deadline.Types.ListQueueEnvironmentsResponse) => void): Request<Deadline.Types.ListQueueEnvironmentsResponse, AWSError>;
  /**
   * Lists queue-fleet associations.
   */
  listQueueFleetAssociations(params: Deadline.Types.ListQueueFleetAssociationsRequest, callback?: (err: AWSError, data: Deadline.Types.ListQueueFleetAssociationsResponse) => void): Request<Deadline.Types.ListQueueFleetAssociationsResponse, AWSError>;
  /**
   * Lists queue-fleet associations.
   */
  listQueueFleetAssociations(callback?: (err: AWSError, data: Deadline.Types.ListQueueFleetAssociationsResponse) => void): Request<Deadline.Types.ListQueueFleetAssociationsResponse, AWSError>;
  /**
   * Lists the members in a queue.
   */
  listQueueMembers(params: Deadline.Types.ListQueueMembersRequest, callback?: (err: AWSError, data: Deadline.Types.ListQueueMembersResponse) => void): Request<Deadline.Types.ListQueueMembersResponse, AWSError>;
  /**
   * Lists the members in a queue.
   */
  listQueueMembers(callback?: (err: AWSError, data: Deadline.Types.ListQueueMembersResponse) => void): Request<Deadline.Types.ListQueueMembersResponse, AWSError>;
  /**
   * Lists queues.
   */
  listQueues(params: Deadline.Types.ListQueuesRequest, callback?: (err: AWSError, data: Deadline.Types.ListQueuesResponse) => void): Request<Deadline.Types.ListQueuesResponse, AWSError>;
  /**
   * Lists queues.
   */
  listQueues(callback?: (err: AWSError, data: Deadline.Types.ListQueuesResponse) => void): Request<Deadline.Types.ListQueuesResponse, AWSError>;
  /**
   * Lists session actions.
   */
  listSessionActions(params: Deadline.Types.ListSessionActionsRequest, callback?: (err: AWSError, data: Deadline.Types.ListSessionActionsResponse) => void): Request<Deadline.Types.ListSessionActionsResponse, AWSError>;
  /**
   * Lists session actions.
   */
  listSessionActions(callback?: (err: AWSError, data: Deadline.Types.ListSessionActionsResponse) => void): Request<Deadline.Types.ListSessionActionsResponse, AWSError>;
  /**
   * Lists sessions.
   */
  listSessions(params: Deadline.Types.ListSessionsRequest, callback?: (err: AWSError, data: Deadline.Types.ListSessionsResponse) => void): Request<Deadline.Types.ListSessionsResponse, AWSError>;
  /**
   * Lists sessions.
   */
  listSessions(callback?: (err: AWSError, data: Deadline.Types.ListSessionsResponse) => void): Request<Deadline.Types.ListSessionsResponse, AWSError>;
  /**
   * Lists sessions for a worker.
   */
  listSessionsForWorker(params: Deadline.Types.ListSessionsForWorkerRequest, callback?: (err: AWSError, data: Deadline.Types.ListSessionsForWorkerResponse) => void): Request<Deadline.Types.ListSessionsForWorkerResponse, AWSError>;
  /**
   * Lists sessions for a worker.
   */
  listSessionsForWorker(callback?: (err: AWSError, data: Deadline.Types.ListSessionsForWorkerResponse) => void): Request<Deadline.Types.ListSessionsForWorkerResponse, AWSError>;
  /**
   * Lists step consumers.
   */
  listStepConsumers(params: Deadline.Types.ListStepConsumersRequest, callback?: (err: AWSError, data: Deadline.Types.ListStepConsumersResponse) => void): Request<Deadline.Types.ListStepConsumersResponse, AWSError>;
  /**
   * Lists step consumers.
   */
  listStepConsumers(callback?: (err: AWSError, data: Deadline.Types.ListStepConsumersResponse) => void): Request<Deadline.Types.ListStepConsumersResponse, AWSError>;
  /**
   * Lists the dependencies for a step.
   */
  listStepDependencies(params: Deadline.Types.ListStepDependenciesRequest, callback?: (err: AWSError, data: Deadline.Types.ListStepDependenciesResponse) => void): Request<Deadline.Types.ListStepDependenciesResponse, AWSError>;
  /**
   * Lists the dependencies for a step.
   */
  listStepDependencies(callback?: (err: AWSError, data: Deadline.Types.ListStepDependenciesResponse) => void): Request<Deadline.Types.ListStepDependenciesResponse, AWSError>;
  /**
   * Lists steps for a job.
   */
  listSteps(params: Deadline.Types.ListStepsRequest, callback?: (err: AWSError, data: Deadline.Types.ListStepsResponse) => void): Request<Deadline.Types.ListStepsResponse, AWSError>;
  /**
   * Lists steps for a job.
   */
  listSteps(callback?: (err: AWSError, data: Deadline.Types.ListStepsResponse) => void): Request<Deadline.Types.ListStepsResponse, AWSError>;
  /**
   * Lists storage profiles.
   */
  listStorageProfiles(params: Deadline.Types.ListStorageProfilesRequest, callback?: (err: AWSError, data: Deadline.Types.ListStorageProfilesResponse) => void): Request<Deadline.Types.ListStorageProfilesResponse, AWSError>;
  /**
   * Lists storage profiles.
   */
  listStorageProfiles(callback?: (err: AWSError, data: Deadline.Types.ListStorageProfilesResponse) => void): Request<Deadline.Types.ListStorageProfilesResponse, AWSError>;
  /**
   * Lists storage profiles for a queue.
   */
  listStorageProfilesForQueue(params: Deadline.Types.ListStorageProfilesForQueueRequest, callback?: (err: AWSError, data: Deadline.Types.ListStorageProfilesForQueueResponse) => void): Request<Deadline.Types.ListStorageProfilesForQueueResponse, AWSError>;
  /**
   * Lists storage profiles for a queue.
   */
  listStorageProfilesForQueue(callback?: (err: AWSError, data: Deadline.Types.ListStorageProfilesForQueueResponse) => void): Request<Deadline.Types.ListStorageProfilesForQueueResponse, AWSError>;
  /**
   * Lists tags for a resource.
   */
  listTagsForResource(params: Deadline.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: Deadline.Types.ListTagsForResourceResponse) => void): Request<Deadline.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists tags for a resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: Deadline.Types.ListTagsForResourceResponse) => void): Request<Deadline.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists tasks for a job.
   */
  listTasks(params: Deadline.Types.ListTasksRequest, callback?: (err: AWSError, data: Deadline.Types.ListTasksResponse) => void): Request<Deadline.Types.ListTasksResponse, AWSError>;
  /**
   * Lists tasks for a job.
   */
  listTasks(callback?: (err: AWSError, data: Deadline.Types.ListTasksResponse) => void): Request<Deadline.Types.ListTasksResponse, AWSError>;
  /**
   * Lists workers.
   */
  listWorkers(params: Deadline.Types.ListWorkersRequest, callback?: (err: AWSError, data: Deadline.Types.ListWorkersResponse) => void): Request<Deadline.Types.ListWorkersResponse, AWSError>;
  /**
   * Lists workers.
   */
  listWorkers(callback?: (err: AWSError, data: Deadline.Types.ListWorkersResponse) => void): Request<Deadline.Types.ListWorkersResponse, AWSError>;
  /**
   * Adds a metered product.
   */
  putMeteredProduct(params: Deadline.Types.PutMeteredProductRequest, callback?: (err: AWSError, data: Deadline.Types.PutMeteredProductResponse) => void): Request<Deadline.Types.PutMeteredProductResponse, AWSError>;
  /**
   * Adds a metered product.
   */
  putMeteredProduct(callback?: (err: AWSError, data: Deadline.Types.PutMeteredProductResponse) => void): Request<Deadline.Types.PutMeteredProductResponse, AWSError>;
  /**
   * Searches for jobs.
   */
  searchJobs(params: Deadline.Types.SearchJobsRequest, callback?: (err: AWSError, data: Deadline.Types.SearchJobsResponse) => void): Request<Deadline.Types.SearchJobsResponse, AWSError>;
  /**
   * Searches for jobs.
   */
  searchJobs(callback?: (err: AWSError, data: Deadline.Types.SearchJobsResponse) => void): Request<Deadline.Types.SearchJobsResponse, AWSError>;
  /**
   * Searches for steps.
   */
  searchSteps(params: Deadline.Types.SearchStepsRequest, callback?: (err: AWSError, data: Deadline.Types.SearchStepsResponse) => void): Request<Deadline.Types.SearchStepsResponse, AWSError>;
  /**
   * Searches for steps.
   */
  searchSteps(callback?: (err: AWSError, data: Deadline.Types.SearchStepsResponse) => void): Request<Deadline.Types.SearchStepsResponse, AWSError>;
  /**
   * Searches for tasks.
   */
  searchTasks(params: Deadline.Types.SearchTasksRequest, callback?: (err: AWSError, data: Deadline.Types.SearchTasksResponse) => void): Request<Deadline.Types.SearchTasksResponse, AWSError>;
  /**
   * Searches for tasks.
   */
  searchTasks(callback?: (err: AWSError, data: Deadline.Types.SearchTasksResponse) => void): Request<Deadline.Types.SearchTasksResponse, AWSError>;
  /**
   * Searches for workers.
   */
  searchWorkers(params: Deadline.Types.SearchWorkersRequest, callback?: (err: AWSError, data: Deadline.Types.SearchWorkersResponse) => void): Request<Deadline.Types.SearchWorkersResponse, AWSError>;
  /**
   * Searches for workers.
   */
  searchWorkers(callback?: (err: AWSError, data: Deadline.Types.SearchWorkersResponse) => void): Request<Deadline.Types.SearchWorkersResponse, AWSError>;
  /**
   * Starts an asynchronous request for getting aggregated statistics about queues and farms. Get the statistics using the GetSessionsStatisticsAggregation operation. Statistics are available for 1 hour after you call the StartSessionsStatisticsAggregation operation.
   */
  startSessionsStatisticsAggregation(params: Deadline.Types.StartSessionsStatisticsAggregationRequest, callback?: (err: AWSError, data: Deadline.Types.StartSessionsStatisticsAggregationResponse) => void): Request<Deadline.Types.StartSessionsStatisticsAggregationResponse, AWSError>;
  /**
   * Starts an asynchronous request for getting aggregated statistics about queues and farms. Get the statistics using the GetSessionsStatisticsAggregation operation. Statistics are available for 1 hour after you call the StartSessionsStatisticsAggregation operation.
   */
  startSessionsStatisticsAggregation(callback?: (err: AWSError, data: Deadline.Types.StartSessionsStatisticsAggregationResponse) => void): Request<Deadline.Types.StartSessionsStatisticsAggregationResponse, AWSError>;
  /**
   * Tags a resource using the resource's ARN and desired tags.
   */
  tagResource(params: Deadline.Types.TagResourceRequest, callback?: (err: AWSError, data: Deadline.Types.TagResourceResponse) => void): Request<Deadline.Types.TagResourceResponse, AWSError>;
  /**
   * Tags a resource using the resource's ARN and desired tags.
   */
  tagResource(callback?: (err: AWSError, data: Deadline.Types.TagResourceResponse) => void): Request<Deadline.Types.TagResourceResponse, AWSError>;
  /**
   * Removes a tag from a resource using the resource's ARN and tag to remove.
   */
  untagResource(params: Deadline.Types.UntagResourceRequest, callback?: (err: AWSError, data: Deadline.Types.UntagResourceResponse) => void): Request<Deadline.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes a tag from a resource using the resource's ARN and tag to remove.
   */
  untagResource(callback?: (err: AWSError, data: Deadline.Types.UntagResourceResponse) => void): Request<Deadline.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates a budget that sets spending thresholds for rendering activity.
   */
  updateBudget(params: Deadline.Types.UpdateBudgetRequest, callback?: (err: AWSError, data: Deadline.Types.UpdateBudgetResponse) => void): Request<Deadline.Types.UpdateBudgetResponse, AWSError>;
  /**
   * Updates a budget that sets spending thresholds for rendering activity.
   */
  updateBudget(callback?: (err: AWSError, data: Deadline.Types.UpdateBudgetResponse) => void): Request<Deadline.Types.UpdateBudgetResponse, AWSError>;
  /**
   * Updates a farm.
   */
  updateFarm(params: Deadline.Types.UpdateFarmRequest, callback?: (err: AWSError, data: Deadline.Types.UpdateFarmResponse) => void): Request<Deadline.Types.UpdateFarmResponse, AWSError>;
  /**
   * Updates a farm.
   */
  updateFarm(callback?: (err: AWSError, data: Deadline.Types.UpdateFarmResponse) => void): Request<Deadline.Types.UpdateFarmResponse, AWSError>;
  /**
   * Updates a fleet.
   */
  updateFleet(params: Deadline.Types.UpdateFleetRequest, callback?: (err: AWSError, data: Deadline.Types.UpdateFleetResponse) => void): Request<Deadline.Types.UpdateFleetResponse, AWSError>;
  /**
   * Updates a fleet.
   */
  updateFleet(callback?: (err: AWSError, data: Deadline.Types.UpdateFleetResponse) => void): Request<Deadline.Types.UpdateFleetResponse, AWSError>;
  /**
   * Updates a job.
   */
  updateJob(params: Deadline.Types.UpdateJobRequest, callback?: (err: AWSError, data: Deadline.Types.UpdateJobResponse) => void): Request<Deadline.Types.UpdateJobResponse, AWSError>;
  /**
   * Updates a job.
   */
  updateJob(callback?: (err: AWSError, data: Deadline.Types.UpdateJobResponse) => void): Request<Deadline.Types.UpdateJobResponse, AWSError>;
  /**
   * Modifies the settings for a Deadline Cloud monitor. You can modify one or all of the settings when you call UpdateMonitor.
   */
  updateMonitor(params: Deadline.Types.UpdateMonitorRequest, callback?: (err: AWSError, data: Deadline.Types.UpdateMonitorResponse) => void): Request<Deadline.Types.UpdateMonitorResponse, AWSError>;
  /**
   * Modifies the settings for a Deadline Cloud monitor. You can modify one or all of the settings when you call UpdateMonitor.
   */
  updateMonitor(callback?: (err: AWSError, data: Deadline.Types.UpdateMonitorResponse) => void): Request<Deadline.Types.UpdateMonitorResponse, AWSError>;
  /**
   * Updates a queue.
   */
  updateQueue(params: Deadline.Types.UpdateQueueRequest, callback?: (err: AWSError, data: Deadline.Types.UpdateQueueResponse) => void): Request<Deadline.Types.UpdateQueueResponse, AWSError>;
  /**
   * Updates a queue.
   */
  updateQueue(callback?: (err: AWSError, data: Deadline.Types.UpdateQueueResponse) => void): Request<Deadline.Types.UpdateQueueResponse, AWSError>;
  /**
   * Updates the queue environment.
   */
  updateQueueEnvironment(params: Deadline.Types.UpdateQueueEnvironmentRequest, callback?: (err: AWSError, data: Deadline.Types.UpdateQueueEnvironmentResponse) => void): Request<Deadline.Types.UpdateQueueEnvironmentResponse, AWSError>;
  /**
   * Updates the queue environment.
   */
  updateQueueEnvironment(callback?: (err: AWSError, data: Deadline.Types.UpdateQueueEnvironmentResponse) => void): Request<Deadline.Types.UpdateQueueEnvironmentResponse, AWSError>;
  /**
   * Updates a queue-fleet association.
   */
  updateQueueFleetAssociation(params: Deadline.Types.UpdateQueueFleetAssociationRequest, callback?: (err: AWSError, data: Deadline.Types.UpdateQueueFleetAssociationResponse) => void): Request<Deadline.Types.UpdateQueueFleetAssociationResponse, AWSError>;
  /**
   * Updates a queue-fleet association.
   */
  updateQueueFleetAssociation(callback?: (err: AWSError, data: Deadline.Types.UpdateQueueFleetAssociationResponse) => void): Request<Deadline.Types.UpdateQueueFleetAssociationResponse, AWSError>;
  /**
   * Updates a session.
   */
  updateSession(params: Deadline.Types.UpdateSessionRequest, callback?: (err: AWSError, data: Deadline.Types.UpdateSessionResponse) => void): Request<Deadline.Types.UpdateSessionResponse, AWSError>;
  /**
   * Updates a session.
   */
  updateSession(callback?: (err: AWSError, data: Deadline.Types.UpdateSessionResponse) => void): Request<Deadline.Types.UpdateSessionResponse, AWSError>;
  /**
   * Updates a step.
   */
  updateStep(params: Deadline.Types.UpdateStepRequest, callback?: (err: AWSError, data: Deadline.Types.UpdateStepResponse) => void): Request<Deadline.Types.UpdateStepResponse, AWSError>;
  /**
   * Updates a step.
   */
  updateStep(callback?: (err: AWSError, data: Deadline.Types.UpdateStepResponse) => void): Request<Deadline.Types.UpdateStepResponse, AWSError>;
  /**
   * Updates a storage profile.
   */
  updateStorageProfile(params: Deadline.Types.UpdateStorageProfileRequest, callback?: (err: AWSError, data: Deadline.Types.UpdateStorageProfileResponse) => void): Request<Deadline.Types.UpdateStorageProfileResponse, AWSError>;
  /**
   * Updates a storage profile.
   */
  updateStorageProfile(callback?: (err: AWSError, data: Deadline.Types.UpdateStorageProfileResponse) => void): Request<Deadline.Types.UpdateStorageProfileResponse, AWSError>;
  /**
   * Updates a task.
   */
  updateTask(params: Deadline.Types.UpdateTaskRequest, callback?: (err: AWSError, data: Deadline.Types.UpdateTaskResponse) => void): Request<Deadline.Types.UpdateTaskResponse, AWSError>;
  /**
   * Updates a task.
   */
  updateTask(callback?: (err: AWSError, data: Deadline.Types.UpdateTaskResponse) => void): Request<Deadline.Types.UpdateTaskResponse, AWSError>;
  /**
   * Updates a worker.
   */
  updateWorker(params: Deadline.Types.UpdateWorkerRequest, callback?: (err: AWSError, data: Deadline.Types.UpdateWorkerResponse) => void): Request<Deadline.Types.UpdateWorkerResponse, AWSError>;
  /**
   * Updates a worker.
   */
  updateWorker(callback?: (err: AWSError, data: Deadline.Types.UpdateWorkerResponse) => void): Request<Deadline.Types.UpdateWorkerResponse, AWSError>;
  /**
   * Updates the schedule for a worker.
   */
  updateWorkerSchedule(params: Deadline.Types.UpdateWorkerScheduleRequest, callback?: (err: AWSError, data: Deadline.Types.UpdateWorkerScheduleResponse) => void): Request<Deadline.Types.UpdateWorkerScheduleResponse, AWSError>;
  /**
   * Updates the schedule for a worker.
   */
  updateWorkerSchedule(callback?: (err: AWSError, data: Deadline.Types.UpdateWorkerScheduleResponse) => void): Request<Deadline.Types.UpdateWorkerScheduleResponse, AWSError>;
  /**
   * Waits for the fleetActive state by periodically calling the underlying Deadline.getFleetoperation every 5 seconds (at most 180 times). Wait until a Fleet is activated. Use this after invoking CreateFleet or UpdateFleet.
   */
  waitFor(state: "fleetActive", params: Deadline.Types.GetFleetRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: Deadline.Types.GetFleetResponse) => void): Request<Deadline.Types.GetFleetResponse, AWSError>;
  /**
   * Waits for the fleetActive state by periodically calling the underlying Deadline.getFleetoperation every 5 seconds (at most 180 times). Wait until a Fleet is activated. Use this after invoking CreateFleet or UpdateFleet.
   */
  waitFor(state: "fleetActive", callback?: (err: AWSError, data: Deadline.Types.GetFleetResponse) => void): Request<Deadline.Types.GetFleetResponse, AWSError>;
  /**
   * Waits for the jobCreateComplete state by periodically calling the underlying Deadline.getJoboperation every 1 seconds (at most 120 times). Wait until a Job is created. Use this after invoking CreateJob.
   */
  waitFor(state: "jobCreateComplete", params: Deadline.Types.GetJobRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: Deadline.Types.GetJobResponse) => void): Request<Deadline.Types.GetJobResponse, AWSError>;
  /**
   * Waits for the jobCreateComplete state by periodically calling the underlying Deadline.getJoboperation every 1 seconds (at most 120 times). Wait until a Job is created. Use this after invoking CreateJob.
   */
  waitFor(state: "jobCreateComplete", callback?: (err: AWSError, data: Deadline.Types.GetJobResponse) => void): Request<Deadline.Types.GetJobResponse, AWSError>;
  /**
   * Waits for the licenseEndpointDeleted state by periodically calling the underlying Deadline.getLicenseEndpointoperation every 10 seconds (at most 234 times). Wait until a LicenseEndpoint is Deleted. Use this after invoking DeleteLicenseEndpoint.
   */
  waitFor(state: "licenseEndpointDeleted", params: Deadline.Types.GetLicenseEndpointRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: Deadline.Types.GetLicenseEndpointResponse) => void): Request<Deadline.Types.GetLicenseEndpointResponse, AWSError>;
  /**
   * Waits for the licenseEndpointDeleted state by periodically calling the underlying Deadline.getLicenseEndpointoperation every 10 seconds (at most 234 times). Wait until a LicenseEndpoint is Deleted. Use this after invoking DeleteLicenseEndpoint.
   */
  waitFor(state: "licenseEndpointDeleted", callback?: (err: AWSError, data: Deadline.Types.GetLicenseEndpointResponse) => void): Request<Deadline.Types.GetLicenseEndpointResponse, AWSError>;
  /**
   * Waits for the licenseEndpointValid state by periodically calling the underlying Deadline.getLicenseEndpointoperation every 10 seconds (at most 114 times). Wait until a LicenseEndpoint is Ready. Use this after invoking CreateLicenseEndpoint.
   */
  waitFor(state: "licenseEndpointValid", params: Deadline.Types.GetLicenseEndpointRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: Deadline.Types.GetLicenseEndpointResponse) => void): Request<Deadline.Types.GetLicenseEndpointResponse, AWSError>;
  /**
   * Waits for the licenseEndpointValid state by periodically calling the underlying Deadline.getLicenseEndpointoperation every 10 seconds (at most 114 times). Wait until a LicenseEndpoint is Ready. Use this after invoking CreateLicenseEndpoint.
   */
  waitFor(state: "licenseEndpointValid", callback?: (err: AWSError, data: Deadline.Types.GetLicenseEndpointResponse) => void): Request<Deadline.Types.GetLicenseEndpointResponse, AWSError>;
  /**
   * Waits for the queueFleetAssociationStopped state by periodically calling the underlying Deadline.getQueueFleetAssociationoperation every 10 seconds (at most 60 times). Wait until a QueueFleetAssociation is stopped. Use this after setting the status to STOP_SCHEDULING_AND_COMPLETE_TASKS or STOP_SCHEDULING_AND_CANCEL_TASKS to wait for a QueueFleetAssociation to reach STOPPED
   */
  waitFor(state: "queueFleetAssociationStopped", params: Deadline.Types.GetQueueFleetAssociationRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: Deadline.Types.GetQueueFleetAssociationResponse) => void): Request<Deadline.Types.GetQueueFleetAssociationResponse, AWSError>;
  /**
   * Waits for the queueFleetAssociationStopped state by periodically calling the underlying Deadline.getQueueFleetAssociationoperation every 10 seconds (at most 60 times). Wait until a QueueFleetAssociation is stopped. Use this after setting the status to STOP_SCHEDULING_AND_COMPLETE_TASKS or STOP_SCHEDULING_AND_CANCEL_TASKS to wait for a QueueFleetAssociation to reach STOPPED
   */
  waitFor(state: "queueFleetAssociationStopped", callback?: (err: AWSError, data: Deadline.Types.GetQueueFleetAssociationResponse) => void): Request<Deadline.Types.GetQueueFleetAssociationResponse, AWSError>;
  /**
   * Waits for the queueScheduling state by periodically calling the underlying Deadline.getQueueoperation every 10 seconds (at most 70 times).
   */
  waitFor(state: "queueScheduling", params: Deadline.Types.GetQueueRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: Deadline.Types.GetQueueResponse) => void): Request<Deadline.Types.GetQueueResponse, AWSError>;
  /**
   * Waits for the queueScheduling state by periodically calling the underlying Deadline.getQueueoperation every 10 seconds (at most 70 times).
   */
  waitFor(state: "queueScheduling", callback?: (err: AWSError, data: Deadline.Types.GetQueueResponse) => void): Request<Deadline.Types.GetQueueResponse, AWSError>;
  /**
   * Waits for the queueSchedulingBlocked state by periodically calling the underlying Deadline.getQueueoperation every 10 seconds (at most 30 times).
   */
  waitFor(state: "queueSchedulingBlocked", params: Deadline.Types.GetQueueRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: Deadline.Types.GetQueueResponse) => void): Request<Deadline.Types.GetQueueResponse, AWSError>;
  /**
   * Waits for the queueSchedulingBlocked state by periodically calling the underlying Deadline.getQueueoperation every 10 seconds (at most 30 times).
   */
  waitFor(state: "queueSchedulingBlocked", callback?: (err: AWSError, data: Deadline.Types.GetQueueResponse) => void): Request<Deadline.Types.GetQueueResponse, AWSError>;
}
declare namespace Deadline {
  export interface AcceleratorCountRange {
    /**
     * The maximum GPU for the accelerator.
     */
    max?: MinZeroMaxInteger;
    /**
     * The minimum GPU for the accelerator.
     */
    min: MinZeroMaxInteger;
  }
  export interface AcceleratorTotalMemoryMiBRange {
    /**
     * The maximum amount of memory to use for the accelerator, measured in MiB.
     */
    max?: MinZeroMaxInteger;
    /**
     * The minimum amount of memory to use for the accelerator, measured in MiB.
     */
    min: MinZeroMaxInteger;
  }
  export type AcceleratorType = "gpu"|string;
  export type AcceleratorTypes = AcceleratorType[];
  export type AccessKeyId = string;
  export type AggregationId = string;
  export type AllowedStorageProfileIds = StorageProfileId[];
  export type AmountCapabilityName = string;
  export interface AssignedEnvironmentEnterSessionActionDefinition {
    /**
     * The environment ID of the assigned environment at the start of a session.
     */
    environmentId: EnvironmentId;
  }
  export interface AssignedEnvironmentExitSessionActionDefinition {
    /**
     * The environment ID of the assigned environment when exiting a session.
     */
    environmentId: EnvironmentId;
  }
  export interface AssignedSession {
    /**
     * The job ID for the assigned session.
     */
    jobId: JobId;
    /**
     * The log configuration for the worker's assigned session.
     */
    logConfiguration: LogConfiguration;
    /**
     * The queue ID of the assigned session.
     */
    queueId: QueueId;
    /**
     * The session actions to apply to the assigned session.
     */
    sessionActions: AssignedSessionActions;
  }
  export interface AssignedSessionAction {
    /**
     * The definition of the assigned session action.
     */
    definition: AssignedSessionActionDefinition;
    /**
     * The session action ID for the assigned session.
     */
    sessionActionId: SessionActionId;
  }
  export interface AssignedSessionActionDefinition {
    /**
     * The environment a session starts on.
     */
    envEnter?: AssignedEnvironmentEnterSessionActionDefinition;
    /**
     * The environment a session exits from.
     */
    envExit?: AssignedEnvironmentExitSessionActionDefinition;
    /**
     * The job attachment to sync with an assigned session action.
     */
    syncInputJobAttachments?: AssignedSyncInputJobAttachmentsSessionActionDefinition;
    /**
     * The task run.
     */
    taskRun?: AssignedTaskRunSessionActionDefinition;
  }
  export type AssignedSessionActions = AssignedSessionAction[];
  export type AssignedSessions = {[key: string]: AssignedSession};
  export interface AssignedSyncInputJobAttachmentsSessionActionDefinition {
    /**
     * The step ID.
     */
    stepId?: StepId;
  }
  export interface AssignedTaskRunSessionActionDefinition {
    /**
     * The parameters to include.
     */
    parameters: TaskParameters;
    /**
     * The step ID.
     */
    stepId: StepId;
    /**
     * The task ID.
     */
    taskId: TaskId;
  }
  export interface AssociateMemberToFarmRequest {
    /**
     * The ID of the farm to associate with the member.
     */
    farmId: FarmId;
    /**
     * The identity store ID of the member to associate with the farm.
     */
    identityStoreId: IdentityStoreId;
    /**
     * The principal's membership level for the associated farm.
     */
    membershipLevel: MembershipLevel;
    /**
     * The member's principal ID to associate with the farm.
     */
    principalId: IdentityCenterPrincipalId;
    /**
     * The principal type of the member to associate with the farm.
     */
    principalType: PrincipalType;
  }
  export interface AssociateMemberToFarmResponse {
  }
  export interface AssociateMemberToFleetRequest {
    /**
     * The farm ID of the fleet to associate with the member.
     */
    farmId: FarmId;
    /**
     * The ID of the fleet to associate with a member.
     */
    fleetId: FleetId;
    /**
     * The member's identity store ID to associate with the fleet.
     */
    identityStoreId: IdentityStoreId;
    /**
     * The principal's membership level for the associated fleet.
     */
    membershipLevel: MembershipLevel;
    /**
     * The member's principal ID to associate with a fleet.
     */
    principalId: IdentityCenterPrincipalId;
    /**
     * The member's principal type to associate with the fleet.
     */
    principalType: PrincipalType;
  }
  export interface AssociateMemberToFleetResponse {
  }
  export interface AssociateMemberToJobRequest {
    /**
     * The farm ID of the job to associate with the member.
     */
    farmId: FarmId;
    /**
     * The member's identity store ID to associate with the job.
     */
    identityStoreId: IdentityStoreId;
    /**
     * The job ID to associate with the member.
     */
    jobId: JobId;
    /**
     * The principal's membership level for the associated job.
     */
    membershipLevel: MembershipLevel;
    /**
     * The member's principal ID to associate with the job.
     */
    principalId: IdentityCenterPrincipalId;
    /**
     * The member's principal type to associate with the job.
     */
    principalType: PrincipalType;
    /**
     * The queue ID to associate to the member.
     */
    queueId: QueueId;
  }
  export interface AssociateMemberToJobResponse {
  }
  export interface AssociateMemberToQueueRequest {
    /**
     * The farm ID of the queue to associate with the member.
     */
    farmId: FarmId;
    /**
     * The member's identity store ID to associate with the queue.
     */
    identityStoreId: IdentityStoreId;
    /**
     * The principal's membership level for the associated queue.
     */
    membershipLevel: MembershipLevel;
    /**
     * The member's principal ID to associate with the queue.
     */
    principalId: IdentityCenterPrincipalId;
    /**
     * The member's principal type to associate with the queue.
     */
    principalType: PrincipalType;
    /**
     * The ID of the queue to associate to the member.
     */
    queueId: QueueId;
  }
  export interface AssociateMemberToQueueResponse {
  }
  export interface AssumeFleetRoleForReadRequest {
    /**
     * The farm ID for the fleet's farm.
     */
    farmId: FarmId;
    /**
     * The fleet ID.
     */
    fleetId: FleetId;
  }
  export interface AssumeFleetRoleForReadResponse {
    /**
     * The credentials for the fleet role.
     */
    credentials: AwsCredentials;
  }
  export interface AssumeFleetRoleForWorkerRequest {
    /**
     * The farm ID for the fleet's farm.
     */
    farmId: FarmId;
    /**
     * The fleet ID that contains the worker.
     */
    fleetId: FleetId;
    /**
     * The ID of the worker assuming the fleet role.
     */
    workerId: WorkerId;
  }
  export interface AssumeFleetRoleForWorkerResponse {
    /**
     * The credentials for the worker.
     */
    credentials: AwsCredentials;
  }
  export interface AssumeQueueRoleForReadRequest {
    /**
     * The farm ID of the farm containing the queue.
     */
    farmId: FarmId;
    /**
     * The queue ID.
     */
    queueId: QueueId;
  }
  export interface AssumeQueueRoleForReadResponse {
    /**
     * The credentials for the queue role.
     */
    credentials: AwsCredentials;
  }
  export interface AssumeQueueRoleForUserRequest {
    /**
     * The farm ID of the queue that the user assumes the role for.
     */
    farmId: FarmId;
    /**
     * The queue ID of the queue that the user assumes the role for.
     */
    queueId: QueueId;
  }
  export interface AssumeQueueRoleForUserResponse {
    /**
     * The credentials for the queue role that a user has access to.
     */
    credentials: AwsCredentials;
  }
  export interface AssumeQueueRoleForWorkerRequest {
    /**
     * The farm ID of the worker assuming the queue role.
     */
    farmId: FarmId;
    /**
     * The fleet ID of the worker assuming the queue role.
     */
    fleetId: FleetId;
    /**
     * The queue ID of the worker assuming the queue role.
     */
    queueId: QueueId;
    /**
     * The worker ID of the worker assuming the queue role.
     */
    workerId: WorkerId;
  }
  export interface AssumeQueueRoleForWorkerResponse {
    /**
     * The Amazon Web Services credentials for the role that the worker is assuming.
     */
    credentials?: AwsCredentials;
  }
  export interface Attachments {
    /**
     * The file system.
     */
    fileSystem?: JobAttachmentsFileSystem;
    /**
     * A list of manifests which describe job attachment configurations.
     */
    manifests: ManifestPropertiesList;
  }
  export type AttributeCapabilityName = string;
  export type AttributeCapabilityValue = string;
  export type AttributeCapabilityValuesList = AttributeCapabilityValue[];
  export type AutoScalingMode = "NO_SCALING"|"EVENT_BASED_AUTO_SCALING"|string;
  export type AutoScalingStatus = "GROWING"|"STEADY"|"SHRINKING"|string;
  export interface AwsCredentials {
    /**
     * The IAM access key ID.
     */
    accessKeyId: AccessKeyId;
    /**
     * The expiration date and time of the IAM credentials.
     */
    expiration: SyntheticTimestamp_date_time;
    /**
     * The IAM secret access key.
     */
    secretAccessKey: SecretAccessKey;
    /**
     * The IAM session token
     */
    sessionToken: SessionToken;
  }
  export type BatchGetJobEntityErrors = GetJobEntityError[];
  export type BatchGetJobEntityList = JobEntity[];
  export interface BatchGetJobEntityRequest {
    /**
     * The farm ID of the worker that's fetching job details. The worker must have an assignment on a job to fetch job details.
     */
    farmId: FarmId;
    /**
     * The fleet ID of the worker that's fetching job details. The worker must have an assignment on a job to fetch job details.
     */
    fleetId: FleetId;
    /**
     * The job identifiers to include within the job entity batch details.
     */
    identifiers: JobEntityIdentifiers;
    /**
     * The worker ID of the worker containing the job details to get.
     */
    workerId: WorkerId;
  }
  export interface BatchGetJobEntityResponse {
    /**
     * A list of the job entities, or details, in the batch.
     */
    entities: BatchGetJobEntityList;
    /**
     * A list of errors from the job error logs for the batch.
     */
    errors: BatchGetJobEntityErrors;
  }
  export type BoundedString = string;
  export interface BudgetActionToAdd {
    /**
     * A description for the budget action to add.
     */
    description?: Description;
    /**
     * The percentage threshold for the budget action to add.
     */
    thresholdPercentage: ThresholdPercentage;
    /**
     * The type of budget action to add.
     */
    type: BudgetActionType;
  }
  export interface BudgetActionToRemove {
    /**
     * The percentage threshold for the budget action to remove.
     */
    thresholdPercentage: ThresholdPercentage;
    /**
     * The type of budget action to remove.
     */
    type: BudgetActionType;
  }
  export type BudgetActionType = "STOP_SCHEDULING_AND_COMPLETE_TASKS"|"STOP_SCHEDULING_AND_CANCEL_TASKS"|string;
  export type BudgetActionsToAdd = BudgetActionToAdd[];
  export type BudgetActionsToRemove = BudgetActionToRemove[];
  export type BudgetId = string;
  export interface BudgetSchedule {
    /**
     * The fixed start and end time of the budget's schedule.
     */
    fixed?: FixedBudgetSchedule;
  }
  export type BudgetStatus = "ACTIVE"|"INACTIVE"|string;
  export type BudgetSummaries = BudgetSummary[];
  export interface BudgetSummary {
    /**
     * The approximate dollar limit of the budget.
     */
    approximateDollarLimit: ConsumedUsageLimit;
    /**
     * The budget ID.
     */
    budgetId: BudgetId;
    /**
     * The date and time the resource was created.
     */
    createdAt: CreatedAt;
    /**
     * The user or system that created this resource.
     */
    createdBy: CreatedBy;
    /**
     * The description of the budget summary.
     */
    description?: Description;
    /**
     * The display name of the budget summary to update.
     */
    displayName: ResourceName;
    /**
     * The status of the budget.    ACTIVE–The budget is being evaluated.    INACTIVE–The budget is inactive. This can include Expired, Canceled, or deleted Deleted statuses.  
     */
    status: BudgetStatus;
    /**
     * The date and time the resource was updated.
     */
    updatedAt?: UpdatedAt;
    /**
     * The user or system that updated this resource.
     */
    updatedBy?: UpdatedBy;
    /**
     * The resource used to track expenditure in the budget.
     */
    usageTrackingResource: UsageTrackingResource;
    /**
     * The consumed usage for the budget.
     */
    usages: ConsumedUsages;
  }
  export type CancelSessionActions = {[key: string]: SessionActionIdList};
  export type ClientToken = string;
  export type CombinationExpression = string;
  export type ComparisonOperator = "EQUAL"|"NOT_EQUAL"|"GREATER_THAN_EQUAL_TO"|"GREATER_THAN"|"LESS_THAN_EQUAL_TO"|"LESS_THAN"|string;
  export type CompletedStatus = "SUCCEEDED"|"FAILED"|"INTERRUPTED"|"CANCELED"|"NEVER_ATTEMPTED"|string;
  export type ConsumedUsageLimit = number;
  export interface ConsumedUsages {
    /**
     * The amount of the budget consumed.
     */
    approximateDollarUsage: Float;
  }
  export interface CopyJobTemplateRequest {
    /**
     * The farm ID to copy.
     */
    farmId: FarmId;
    /**
     * The job ID to copy.
     */
    jobId: JobId;
    /**
     * The queue ID to copy.
     */
    queueId: QueueId;
    /**
     * The Amazon S3 bucket name and key where you would like to add a copy of the job template.
     */
    targetS3Location: S3Location;
  }
  export interface CopyJobTemplateResponse {
    /**
     * The format of the job template, either JSON or YAML.
     */
    templateType: JobTemplateType;
  }
  export type CpuArchitectureType = "x86_64"|"arm64"|string;
  export interface CreateBudgetRequest {
    /**
     * The budget actions to specify what happens when the budget runs out.
     */
    actions: BudgetActionsToAdd;
    /**
     * The dollar limit based on consumed usage.
     */
    approximateDollarLimit: ConsumedUsageLimit;
    /**
     * The unique token which the server uses to recognize retries of the same request.
     */
    clientToken?: ClientToken;
    /**
     * The description of the budget.
     */
    description?: Description;
    /**
     * The display name of the budget.
     */
    displayName: ResourceName;
    /**
     * The farm ID to include in this budget.
     */
    farmId: FarmId;
    /**
     * The schedule to associate with this budget.
     */
    schedule: BudgetSchedule;
    /**
     * The queue ID provided to this budget to track usage.
     */
    usageTrackingResource: UsageTrackingResource;
  }
  export interface CreateBudgetResponse {
    /**
     * The budget ID.
     */
    budgetId: BudgetId;
  }
  export interface CreateFarmRequest {
    /**
     * The unique token which the server uses to recognize retries of the same request.
     */
    clientToken?: ClientToken;
    /**
     * The description of the farm.
     */
    description?: Description;
    /**
     * The display name of the farm.
     */
    displayName: ResourceName;
    /**
     * The ARN of the KMS key to use on the farm.
     */
    kmsKeyArn?: KmsKeyArn;
    /**
     * The tags to add to your farm. Each tag consists of a tag key and a tag value. Tag keys and values are both required, but tag values can be empty strings.
     */
    tags?: Tags;
  }
  export interface CreateFarmResponse {
    /**
     * The farm ID.
     */
    farmId: FarmId;
  }
  export interface CreateFleetRequest {
    /**
     * The unique token which the server uses to recognize retries of the same request.
     */
    clientToken?: ClientToken;
    /**
     * The configuration settings for the fleet. Customer managed fleets are self-managed. Service managed Amazon EC2 fleets are managed by Deadline Cloud.
     */
    configuration: FleetConfiguration;
    /**
     * The description of the fleet.
     */
    description?: Description;
    /**
     * The display name of the fleet.
     */
    displayName: ResourceName;
    /**
     * The farm ID of the farm to connect to the fleet.
     */
    farmId: FarmId;
    /**
     * The maximum number of workers for the fleet.
     */
    maxWorkerCount: MinZeroMaxInteger;
    /**
     * The minimum number of workers for the fleet.
     */
    minWorkerCount?: MinZeroMaxInteger;
    /**
     * The IAM role ARN for the role that the fleet's workers will use.
     */
    roleArn: IamRoleArn;
    /**
     * Each tag consists of a tag key and a tag value. Tag keys and values are both required, but tag values can be empty strings.
     */
    tags?: Tags;
  }
  export interface CreateFleetResponse {
    /**
     * The fleet ID.
     */
    fleetId: FleetId;
  }
  export interface CreateJobRequest {
    /**
     * The attachments for the job. Attach files required for the job to run to a render job.
     */
    attachments?: Attachments;
    /**
     * The unique token which the server uses to recognize retries of the same request.
     */
    clientToken?: ClientToken;
    /**
     * The farm ID of the farm to connect to the job.
     */
    farmId: FarmId;
    /**
     * The number of task failures before the job stops running and is marked as FAILED.
     */
    maxFailedTasksCount?: MaxFailedTasksCount;
    /**
     * The maximum number of retries for a job.
     */
    maxRetriesPerTask?: MaxRetriesPerTask;
    /**
     * The parameters for the job.
     */
    parameters?: JobParameters;
    /**
     * The priority of the job on a scale of 1 to 100. The highest priority is 1.
     */
    priority: JobPriority;
    /**
     * The ID of the queue that the job is submitted to.
     */
    queueId: QueueId;
    /**
     * The storage profile ID for the storage profile to connect to the job.
     */
    storageProfileId?: StorageProfileId;
    /**
     * The initial status of the job's tasks when they are created. Tasks that are created with a SUSPENDED status will not run until you update their status.
     */
    targetTaskRunStatus?: CreateJobTargetTaskRunStatus;
    /**
     * The job template to use for this job.
     */
    template: JobTemplate;
    /**
     * The file type for the job template.
     */
    templateType: JobTemplateType;
  }
  export interface CreateJobResponse {
    /**
     * The job ID.
     */
    jobId: JobId;
  }
  export type CreateJobTargetTaskRunStatus = "READY"|"SUSPENDED"|string;
  export interface CreateLicenseEndpointRequest {
    /**
     * The unique token which the server uses to recognize retries of the same request.
     */
    clientToken?: ClientToken;
    /**
     * The security group IDs.
     */
    securityGroupIds: CreateLicenseEndpointRequestSecurityGroupIdsList;
    /**
     * The subnet IDs.
     */
    subnetIds: CreateLicenseEndpointRequestSubnetIdsList;
    /**
     * Each tag consists of a tag key and a tag value. Tag keys and values are both required, but tag values can be empty strings.
     */
    tags?: Tags;
    /**
     * The VPC (virtual private cloud) ID to use with the license endpoint.
     */
    vpcId: VpcId;
  }
  export type CreateLicenseEndpointRequestSecurityGroupIdsList = SecurityGroupId[];
  export type CreateLicenseEndpointRequestSubnetIdsList = SubnetId[];
  export interface CreateLicenseEndpointResponse {
    /**
     * The license endpoint ID.
     */
    licenseEndpointId: LicenseEndpointId;
  }
  export interface CreateMonitorRequest {
    /**
     * The unique token which the server uses to recognize retries of the same request.
     */
    clientToken?: ClientToken;
    /**
     * The name that you give the monitor that is displayed in the Deadline Cloud console.
     */
    displayName: ResourceName;
    /**
     * The Amazon Resource Name (ARN) of the IAM Identity Center instance that authenticates monitor users.
     */
    identityCenterInstanceArn: IdentityCenterInstanceArn;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that the monitor uses to connect to Deadline Cloud. Every user that signs in to the monitor using IAM Identity Center uses this role to access Deadline Cloud resources.
     */
    roleArn: IamRoleArn;
    /**
     * The subdomain to use when creating the monitor URL. The full URL of the monitor is subdomain.Region.deadlinecloud.amazonaws.com.
     */
    subdomain: Subdomain;
  }
  export interface CreateMonitorResponse {
    /**
     * The Amazon Resource Name (ARN) that IAM Identity Center assigns to the monitor.
     */
    identityCenterApplicationArn: IdentityCenterApplicationArn;
    /**
     * The unique identifier of the monitor.
     */
    monitorId: MonitorId;
  }
  export interface CreateQueueEnvironmentRequest {
    /**
     * The unique token which the server uses to recognize retries of the same request.
     */
    clientToken?: ClientToken;
    /**
     * The farm ID of the farm to connect to the environment.
     */
    farmId: FarmId;
    /**
     * Sets the priority of the environments in the queue from 0 to 10,000, where 0 is the highest priority. If two environments share the same priority value, the environment created first takes higher priority.
     */
    priority: Priority;
    /**
     * The queue ID to connect the queue and environment.
     */
    queueId: QueueId;
    /**
     * The environment template to use in the queue.
     */
    template: EnvironmentTemplate;
    /**
     * The template's file type, JSON or YAML.
     */
    templateType: EnvironmentTemplateType;
  }
  export interface CreateQueueEnvironmentResponse {
    /**
     * The queue environment ID.
     */
    queueEnvironmentId: QueueEnvironmentId;
  }
  export interface CreateQueueFleetAssociationRequest {
    /**
     * The ID of the farm that the queue and fleet belong to.
     */
    farmId: FarmId;
    /**
     * The fleet ID.
     */
    fleetId: FleetId;
    /**
     * The queue ID.
     */
    queueId: QueueId;
  }
  export interface CreateQueueFleetAssociationResponse {
  }
  export interface CreateQueueRequest {
    /**
     * The storage profile IDs to include in the queue.
     */
    allowedStorageProfileIds?: AllowedStorageProfileIds;
    /**
     * The unique token which the server uses to recognize retries of the same request.
     */
    clientToken?: ClientToken;
    /**
     * The default action to take on a queue if a budget isn't configured.
     */
    defaultBudgetAction?: DefaultQueueBudgetAction;
    /**
     * The description of the queue.
     */
    description?: Description;
    /**
     * The display name of the queue.
     */
    displayName: ResourceName;
    /**
     * The farm ID of the farm to connect to the queue.
     */
    farmId: FarmId;
    /**
     * The job attachment settings for the queue. These are the Amazon S3 bucket name and the Amazon S3 prefix.
     */
    jobAttachmentSettings?: JobAttachmentSettings;
    /**
     * The jobs in the queue run as the specified POSIX user.
     */
    jobRunAsUser?: JobRunAsUser;
    /**
     * The file system location name to include in the queue.
     */
    requiredFileSystemLocationNames?: RequiredFileSystemLocationNames;
    /**
     * The IAM role ARN that workers will use while running jobs for this queue.
     */
    roleArn?: IamRoleArn;
    /**
     * Each tag consists of a tag key and a tag value. Tag keys and values are both required, but tag values can be empty strings.
     */
    tags?: Tags;
  }
  export interface CreateQueueResponse {
    /**
     * The queue ID.
     */
    queueId: QueueId;
  }
  export interface CreateStorageProfileRequest {
    /**
     * The unique token which the server uses to recognize retries of the same request.
     */
    clientToken?: ClientToken;
    /**
     * The display name of the storage profile.
     */
    displayName: ResourceName;
    /**
     * The farm ID of the farm to connect to the storage profile.
     */
    farmId: FarmId;
    /**
     * File system paths to include in the storage profile.
     */
    fileSystemLocations?: FileSystemLocationsList;
    /**
     * The type of operating system (OS) for the storage profile.
     */
    osFamily: StorageProfileOperatingSystemFamily;
  }
  export interface CreateStorageProfileResponse {
    /**
     * The storage profile ID.
     */
    storageProfileId: StorageProfileId;
  }
  export interface CreateWorkerRequest {
    /**
     * The unique token which the server uses to recognize retries of the same request.
     */
    clientToken?: ClientToken;
    /**
     * The farm ID of the farm to connect to the worker.
     */
    farmId: FarmId;
    /**
     * The fleet ID to connect to the worker.
     */
    fleetId: FleetId;
    /**
     * The IP address and host name of the worker.
     */
    hostProperties?: HostPropertiesRequest;
  }
  export interface CreateWorkerResponse {
    /**
     * The worker ID.
     */
    workerId: WorkerId;
  }
  export type CreatedAt = Date;
  export type CreatedBy = string;
  export type CustomFleetAmountCapabilities = FleetAmountCapability[];
  export type CustomFleetAttributeCapabilities = FleetAttributeCapability[];
  export interface CustomerManagedFleetConfiguration {
    /**
     * The Auto Scaling mode for the customer managed fleet configuration.
     */
    mode: AutoScalingMode;
    /**
     * The storage profile ID.
     */
    storageProfileId?: StorageProfileId;
    /**
     * The worker capabilities for a customer managed fleet configuration.
     */
    workerCapabilities: CustomerManagedWorkerCapabilities;
  }
  export type CustomerManagedFleetOperatingSystemFamily = "WINDOWS"|"LINUX"|"MACOS"|string;
  export interface CustomerManagedWorkerCapabilities {
    /**
     * The range of the accelerator.
     */
    acceleratorCount?: AcceleratorCountRange;
    /**
     * The total memory (MiB) for the customer managed worker capabilities.
     */
    acceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiBRange;
    /**
     * The accelerator types for the customer managed worker capabilities.
     */
    acceleratorTypes?: AcceleratorTypes;
    /**
     * The CPU architecture type for the customer managed worker capabilities.
     */
    cpuArchitectureType: CpuArchitectureType;
    /**
     * Custom requirement ranges for customer managed worker capabilities.
     */
    customAmounts?: CustomFleetAmountCapabilities;
    /**
     * Custom attributes for the customer manged worker capabilities.
     */
    customAttributes?: CustomFleetAttributeCapabilities;
    /**
     * The memory (MiB).
     */
    memoryMiB: MemoryMiBRange;
    /**
     * The operating system (OS) family.
     */
    osFamily: CustomerManagedFleetOperatingSystemFamily;
    /**
     * The vCPU count for the customer manged worker capabilities.
     */
    vCpuCount: VCpuCountRange;
  }
  export interface DateTimeFilterExpression {
    /**
     * The date and time.
     */
    dateTime: SyntheticTimestamp_date_time;
    /**
     * The name of the date-time field to filter on.
     */
    name: String;
    /**
     * The type of comparison to use to filter the results.
     */
    operator: ComparisonOperator;
  }
  export type DefaultQueueBudgetAction = "NONE"|"STOP_SCHEDULING_AND_COMPLETE_TASKS"|"STOP_SCHEDULING_AND_CANCEL_TASKS"|string;
  export interface DeleteBudgetRequest {
    /**
     * The budget ID of the budget to delete.
     */
    budgetId: BudgetId;
    /**
     * The farm ID of the farm to remove from the budget.
     */
    farmId: FarmId;
  }
  export interface DeleteBudgetResponse {
  }
  export interface DeleteFarmRequest {
    /**
     * The farm ID of the farm to delete.
     */
    farmId: FarmId;
  }
  export interface DeleteFarmResponse {
  }
  export interface DeleteFleetRequest {
    /**
     * The unique token which the server uses to recognize retries of the same request.
     */
    clientToken?: ClientToken;
    /**
     * The farm ID of the farm to remove from the fleet.
     */
    farmId: FarmId;
    /**
     * The fleet ID of the fleet to delete.
     */
    fleetId: FleetId;
  }
  export interface DeleteFleetResponse {
  }
  export interface DeleteLicenseEndpointRequest {
    /**
     * The license endpoint ID of the license endpoint to delete.
     */
    licenseEndpointId: LicenseEndpointId;
  }
  export interface DeleteLicenseEndpointResponse {
  }
  export interface DeleteMeteredProductRequest {
    /**
     * The ID of the license endpoint from which to remove the metered product.
     */
    licenseEndpointId: LicenseEndpointId;
    /**
     * The product ID to remove from the license endpoint.
     */
    productId: MeteredProductId;
  }
  export interface DeleteMeteredProductResponse {
  }
  export interface DeleteMonitorRequest {
    /**
     * The unique identifier of the monitor to delete. This ID is returned by the CreateMonitor operation, and is included in the response to the GetMonitor operation.
     */
    monitorId: MonitorId;
  }
  export interface DeleteMonitorResponse {
  }
  export interface DeleteQueueEnvironmentRequest {
    /**
     * The farm ID of the farm from which to remove the queue environment.
     */
    farmId: FarmId;
    /**
     * The queue environment ID of the queue environment to delete.
     */
    queueEnvironmentId: QueueEnvironmentId;
    /**
     * The queue ID of the queue environment to delete.
     */
    queueId: QueueId;
  }
  export interface DeleteQueueEnvironmentResponse {
  }
  export interface DeleteQueueFleetAssociationRequest {
    /**
     * The farm ID of the farm that holds the queue-fleet association.
     */
    farmId: FarmId;
    /**
     * The fleet ID of the queue-fleet association.
     */
    fleetId: FleetId;
    /**
     * The queue ID of the queue-fleet association.
     */
    queueId: QueueId;
  }
  export interface DeleteQueueFleetAssociationResponse {
  }
  export interface DeleteQueueRequest {
    /**
     * The ID of the farm from which to remove the queue.
     */
    farmId: FarmId;
    /**
     * The queue ID of the queue to delete.
     */
    queueId: QueueId;
  }
  export interface DeleteQueueResponse {
  }
  export interface DeleteStorageProfileRequest {
    /**
     * The farm ID of the farm from which to remove the storage profile.
     */
    farmId: FarmId;
    /**
     * The storage profile ID of the storage profile to delete.
     */
    storageProfileId: StorageProfileId;
  }
  export interface DeleteStorageProfileResponse {
  }
  export interface DeleteWorkerRequest {
    /**
     * The farm ID of the worker to delete.
     */
    farmId: FarmId;
    /**
     * The fleet ID of the worker to delete.
     */
    fleetId: FleetId;
    /**
     * The worker ID of the worker to delete.
     */
    workerId: WorkerId;
  }
  export interface DeleteWorkerResponse {
  }
  export type DependenciesList = StepId[];
  export type DependencyConsumerResolutionStatus = "RESOLVED"|"UNRESOLVED"|string;
  export interface DependencyCounts {
    /**
     * The number of consumers resolved.
     */
    consumersResolved: Integer;
    /**
     * The number of unresolved consumers.
     */
    consumersUnresolved: Integer;
    /**
     * The number of resolved dependencies.
     */
    dependenciesResolved: Integer;
    /**
     * The number of unresolved dependencies.
     */
    dependenciesUnresolved: Integer;
  }
  export type Description = string;
  export type DesiredWorkerStatus = "STOPPED"|string;
  export interface DisassociateMemberFromFarmRequest {
    /**
     * The farm ID of the farm to disassociate from the member.
     */
    farmId: FarmId;
    /**
     * A member's principal ID to disassociate from a farm.
     */
    principalId: IdentityCenterPrincipalId;
  }
  export interface DisassociateMemberFromFarmResponse {
  }
  export interface DisassociateMemberFromFleetRequest {
    /**
     * The farm ID of the fleet to disassociate a member from.
     */
    farmId: FarmId;
    /**
     * The fleet ID of the fleet to from which to disassociate a member.
     */
    fleetId: FleetId;
    /**
     * A member's principal ID to disassociate from a fleet.
     */
    principalId: IdentityCenterPrincipalId;
  }
  export interface DisassociateMemberFromFleetResponse {
  }
  export interface DisassociateMemberFromJobRequest {
    /**
     * The farm ID for the job to disassociate from the member.
     */
    farmId: FarmId;
    /**
     * The job ID to disassociate from a member in a job.
     */
    jobId: JobId;
    /**
     * A member's principal ID to disassociate from a job.
     */
    principalId: IdentityCenterPrincipalId;
    /**
     * The queue ID connected to a job for which you're disassociating a member.
     */
    queueId: QueueId;
  }
  export interface DisassociateMemberFromJobResponse {
  }
  export interface DisassociateMemberFromQueueRequest {
    /**
     * The farm ID for the queue to disassociate from a member.
     */
    farmId: FarmId;
    /**
     * A member's principal ID to disassociate from a queue.
     */
    principalId: IdentityCenterPrincipalId;
    /**
     * The queue ID of the queue in which you're disassociating from a member.
     */
    queueId: QueueId;
  }
  export interface DisassociateMemberFromQueueResponse {
  }
  export type DnsName = string;
  export interface Document {
  }
  export type Double = number;
  export type EbsIops = number;
  export type EbsThroughputMiB = number;
  export interface Ec2EbsVolume {
    /**
     * The IOPS per volume.
     */
    iops?: EbsIops;
    /**
     * The EBS volume size in GiB.
     */
    sizeGiB?: Integer;
    /**
     * The throughput per volume in MiB.
     */
    throughputMiB?: EbsThroughputMiB;
  }
  export type Ec2MarketType = "on-demand"|"spot"|string;
  export type EndedAt = Date;
  export type EndsAt = Date;
  export interface EnvironmentDetailsEntity {
    /**
     * The environment ID.
     */
    environmentId: EnvironmentId;
    /**
     * The job ID.
     */
    jobId: JobId;
    /**
     * The schema version in the environment.
     */
    schemaVersion: String;
    /**
     * The template used for the environment.
     */
    template: Document;
  }
  export interface EnvironmentDetailsError {
    /**
     * The error code.
     */
    code: JobEntityErrorCode;
    /**
     * The environment ID.
     */
    environmentId: EnvironmentId;
    /**
     * The job ID.
     */
    jobId: JobId;
    /**
     * The error message detailing the error's cause.
     */
    message: String;
  }
  export interface EnvironmentDetailsIdentifiers {
    /**
     * The environment ID.
     */
    environmentId: EnvironmentId;
    /**
     * The job ID.
     */
    jobId: JobId;
  }
  export interface EnvironmentEnterSessionActionDefinition {
    /**
     * The environment ID.
     */
    environmentId: EnvironmentId;
  }
  export interface EnvironmentEnterSessionActionDefinitionSummary {
    /**
     * The environment ID.
     */
    environmentId: EnvironmentId;
  }
  export interface EnvironmentExitSessionActionDefinition {
    /**
     * The environment ID.
     */
    environmentId: EnvironmentId;
  }
  export interface EnvironmentExitSessionActionDefinitionSummary {
    /**
     * The environment ID.
     */
    environmentId: EnvironmentId;
  }
  export type EnvironmentId = string;
  export type EnvironmentName = string;
  export type EnvironmentTemplate = string;
  export type EnvironmentTemplateType = "JSON"|"YAML"|string;
  export type FarmId = string;
  export interface FarmMember {
    /**
     * The farm ID of the farm member.
     */
    farmId: FarmId;
    /**
     * The identity store ID of the farm member.
     */
    identityStoreId: IdentityStoreId;
    /**
     * The farm member's membership level.
     */
    membershipLevel: MembershipLevel;
    /**
     * The principal ID of the farm member.
     */
    principalId: IdentityCenterPrincipalId;
    /**
     * The principal type of the farm member.
     */
    principalType: PrincipalType;
  }
  export type FarmMembers = FarmMember[];
  export type FarmSummaries = FarmSummary[];
  export interface FarmSummary {
    /**
     * The date and time the resource was created.
     */
    createdAt: CreatedAt;
    /**
     * The user or system that created this resource.
     */
    createdBy: CreatedBy;
    /**
     * The display name of the farm.
     */
    displayName: ResourceName;
    /**
     * The farm ID.
     */
    farmId: FarmId;
    /**
     * The ARN for the KMS key.
     */
    kmsKeyArn?: KmsKeyArn;
    /**
     * The date and time the resource was updated.
     */
    updatedAt?: UpdatedAt;
    /**
     * The user or system that updated this resource.
     */
    updatedBy?: UpdatedBy;
  }
  export interface FieldSortExpression {
    /**
     * The name of the field.
     */
    name: String;
    /**
     * The sort order for the field.
     */
    sortOrder: SortOrder;
  }
  export interface FileSystemLocation {
    /**
     * The location name.
     */
    name: FileSystemLocationName;
    /**
     * The file path.
     */
    path: PathString;
    /**
     * The type of file.
     */
    type: FileSystemLocationType;
  }
  export type FileSystemLocationName = string;
  export type FileSystemLocationType = "SHARED"|"LOCAL"|string;
  export type FileSystemLocationsList = FileSystemLocation[];
  export interface FixedBudgetSchedule {
    /**
     * When the budget ends.
     */
    endTime: EndsAt;
    /**
     * When the budget starts.
     */
    startTime: StartsAt;
  }
  export type FleetAmountCapabilities = FleetAmountCapability[];
  export interface FleetAmountCapability {
    /**
     * The maximum amount of the fleet worker capability.
     */
    max?: Float;
    /**
     * The minimum amount of fleet worker capability.
     */
    min: Float;
    /**
     * The name of the fleet capability.
     */
    name: AmountCapabilityName;
  }
  export type FleetAttributeCapabilities = FleetAttributeCapability[];
  export interface FleetAttributeCapability {
    /**
     * The name of the fleet attribute capability for the worker.
     */
    name: AttributeCapabilityName;
    /**
     * The number of fleet attribute capabilities.
     */
    values: AttributeCapabilityValuesList;
  }
  export interface FleetCapabilities {
    /**
     * Amount capabilities of the fleet.
     */
    amounts?: FleetAmountCapabilities;
    /**
     * Attribute capabilities of the fleet.
     */
    attributes?: FleetAttributeCapabilities;
  }
  export interface FleetConfiguration {
    /**
     * The customer managed fleets within a fleet configuration.
     */
    customerManaged?: CustomerManagedFleetConfiguration;
    /**
     * The service managed Amazon EC2 instances for a fleet configuration.
     */
    serviceManagedEc2?: ServiceManagedEc2FleetConfiguration;
  }
  export type FleetId = string;
  export interface FleetMember {
    /**
     * The farm ID.
     */
    farmId: FarmId;
    /**
     * The fleet ID.
     */
    fleetId: FleetId;
    /**
     * The identity store ID.
     */
    identityStoreId: IdentityStoreId;
    /**
     * The fleet member's membership level.
     */
    membershipLevel: MembershipLevel;
    /**
     * The principal ID of the fleet member.
     */
    principalId: IdentityCenterPrincipalId;
    /**
     * The principal type of the fleet member.
     */
    principalType: PrincipalType;
  }
  export type FleetMembers = FleetMember[];
  export type FleetStatus = "ACTIVE"|"CREATE_IN_PROGRESS"|"UPDATE_IN_PROGRESS"|"CREATE_FAILED"|"UPDATE_FAILED"|string;
  export type FleetSummaries = FleetSummary[];
  export interface FleetSummary {
    /**
     * The Auto Scaling status of a fleet.
     */
    autoScalingStatus?: AutoScalingStatus;
    /**
     * The configuration details for the fleet.
     */
    configuration: FleetConfiguration;
    /**
     * The date and time the resource was created.
     */
    createdAt: CreatedAt;
    /**
     * The user or system that created this resource.
     */
    createdBy: CreatedBy;
    /**
     * The display name of the fleet summary to update.
     */
    displayName: ResourceName;
    /**
     * The farm ID.
     */
    farmId: FarmId;
    /**
     * The fleet ID.
     */
    fleetId: FleetId;
    /**
     * The maximum number of workers specified in the fleet.
     */
    maxWorkerCount: MinZeroMaxInteger;
    /**
     * The minimum number of workers in the fleet.
     */
    minWorkerCount: MinZeroMaxInteger;
    /**
     * The status of the fleet.
     */
    status: FleetStatus;
    /**
     * The target number of workers in a fleet.
     */
    targetWorkerCount?: Integer;
    /**
     * The date and time the resource was updated.
     */
    updatedAt?: UpdatedAt;
    /**
     * The user or system that updated this resource.
     */
    updatedBy?: UpdatedBy;
    /**
     * The number of workers in the fleet summary.
     */
    workerCount: Integer;
  }
  export type Float = number;
  export type FloatString = string;
  export interface GetBudgetRequest {
    /**
     * The budget ID.
     */
    budgetId: BudgetId;
    /**
     * The farm ID of the farm connected to the budget.
     */
    farmId: FarmId;
  }
  export interface GetBudgetResponse {
    /**
     * The budget actions for the budget.
     */
    actions: ResponseBudgetActionList;
    /**
     * The consumed usage limit for the budget.
     */
    approximateDollarLimit: ConsumedUsageLimit;
    /**
     * The budget ID.
     */
    budgetId: BudgetId;
    /**
     * The date and time the resource was created.
     */
    createdAt: CreatedAt;
    /**
     * The user or system that created this resource.
     */
    createdBy: CreatedBy;
    /**
     * The description of the budget.
     */
    description?: Description;
    /**
     * The display name of the budget.
     */
    displayName: ResourceName;
    /**
     * The date and time the queue stopped.
     */
    queueStoppedAt?: UpdatedAt;
    /**
     * The budget schedule.
     */
    schedule: BudgetSchedule;
    /**
     * The status of the budget.    ACTIVE–Get a budget being evaluated.    INACTIVE–Get an inactive budget. This can include expired, canceled, or deleted statuses.  
     */
    status: BudgetStatus;
    /**
     * The date and time the resource was updated.
     */
    updatedAt?: UpdatedAt;
    /**
     * The user or system that updated this resource.
     */
    updatedBy?: UpdatedBy;
    /**
     * The resource that the budget is tracking usage for.
     */
    usageTrackingResource: UsageTrackingResource;
    /**
     * The usages of the budget.
     */
    usages: ConsumedUsages;
  }
  export interface GetFarmRequest {
    /**
     * The farm ID of the farm.
     */
    farmId: FarmId;
  }
  export interface GetFarmResponse {
    /**
     * The date and time the resource was created.
     */
    createdAt: CreatedAt;
    /**
     * The user or system that created this resource.
     */
    createdBy: CreatedBy;
    /**
     * The description of the farm.
     */
    description?: Description;
    /**
     * The display name of the farm.
     */
    displayName: ResourceName;
    /**
     * The farm ID of the farm to get.
     */
    farmId: FarmId;
    /**
     * The ARN of the KMS key used on the farm.
     */
    kmsKeyArn: KmsKeyArn;
    /**
     * The date and time the resource was updated.
     */
    updatedAt?: UpdatedAt;
    /**
     * The user or system that updated this resource.
     */
    updatedBy?: UpdatedBy;
  }
  export interface GetFleetRequest {
    /**
     * The farm ID of the farm in the fleet.
     */
    farmId: FarmId;
    /**
     * The fleet ID of the fleet to get.
     */
    fleetId: FleetId;
  }
  export interface GetFleetResponse {
    /**
     * The Auto Scaling status of the fleet. Either GROWING, STEADY, or SHRINKING.
     */
    autoScalingStatus?: AutoScalingStatus;
    /**
     * Outlines what the fleet is capable of for minimums, maximums, and naming, in addition to attribute names and values.
     */
    capabilities?: FleetCapabilities;
    /**
     * The configuration setting for the fleet.
     */
    configuration: FleetConfiguration;
    /**
     * The date and time the resource was created.
     */
    createdAt: CreatedAt;
    /**
     * The user or system that created this resource.
     */
    createdBy: CreatedBy;
    /**
     * The description of the fleet.
     */
    description?: Description;
    /**
     * The display name of the fleet.
     */
    displayName: ResourceName;
    /**
     * The farm ID of the farm in the fleet.
     */
    farmId: FarmId;
    /**
     * The fleet ID.
     */
    fleetId: FleetId;
    /**
     * The maximum number of workers specified in the fleet.
     */
    maxWorkerCount: MinZeroMaxInteger;
    /**
     * The minimum number of workers specified in the fleet.
     */
    minWorkerCount: MinZeroMaxInteger;
    /**
     * The IAM role ARN.
     */
    roleArn: IamRoleArn;
    /**
     * The Auto Scaling status of the fleet.
     */
    status: FleetStatus;
    /**
     * The number of target workers in the fleet.
     */
    targetWorkerCount?: Integer;
    /**
     * The date and time the resource was updated.
     */
    updatedAt?: UpdatedAt;
    /**
     * The user or system that updated this resource.
     */
    updatedBy?: UpdatedBy;
    /**
     * The number of workers in the fleet.
     */
    workerCount: Integer;
  }
  export interface GetJobEntityError {
    /**
     * The environment details for the failed job entity.
     */
    environmentDetails?: EnvironmentDetailsError;
    /**
     * The job attachment details for the failed job entity.
     */
    jobAttachmentDetails?: JobAttachmentDetailsError;
    /**
     * The job details for the failed job entity.
     */
    jobDetails?: JobDetailsError;
    /**
     * The step details for the failed job entity.
     */
    stepDetails?: StepDetailsError;
  }
  export interface GetJobRequest {
    /**
     * The farm ID of the farm in the job.
     */
    farmId: FarmId;
    /**
     * The job ID.
     */
    jobId: JobId;
    /**
     * The queue ID associated with the job.
     */
    queueId: QueueId;
  }
  export interface GetJobResponse {
    /**
     * The attachments for the job.
     */
    attachments?: Attachments;
    /**
     * The date and time the resource was created.
     */
    createdAt: CreatedAt;
    /**
     * The user or system that created this resource.
     */
    createdBy: CreatedBy;
    /**
     * The description of the job.
     */
    description?: JobDescription;
    /**
     * The date and time the resource ended running.
     */
    endedAt?: EndedAt;
    /**
     * The job ID.
     */
    jobId: JobId;
    /**
     * The life cycle status for the job.
     */
    lifecycleStatus: JobLifecycleStatus;
    /**
     * A message that communicates the status of the life cycle for the job.
     */
    lifecycleStatusMessage: String;
    /**
     * The number of task failures before the job stops running and is marked as FAILED.
     */
    maxFailedTasksCount?: MaxFailedTasksCount;
    /**
     * The maximum number of retries per failed tasks.
     */
    maxRetriesPerTask?: MaxRetriesPerTask;
    /**
     * The name of the job.
     */
    name: JobName;
    /**
     * The parameters for the job.
     */
    parameters?: JobParameters;
    /**
     * The job priority.
     */
    priority: JobPriority;
    /**
     * The date and time the resource started running.
     */
    startedAt?: StartedAt;
    /**
     * The storage profile ID associated with the job.
     */
    storageProfileId?: StorageProfileId;
    /**
     * The task status with which the job started.
     */
    targetTaskRunStatus?: JobTargetTaskRunStatus;
    /**
     * The task run status for the job.
     */
    taskRunStatus?: TaskRunStatus;
    /**
     * The number of tasks running on the job.
     */
    taskRunStatusCounts?: TaskRunStatusCounts;
    /**
     * The date and time the resource was updated.
     */
    updatedAt?: UpdatedAt;
    /**
     * The user or system that updated this resource.
     */
    updatedBy?: UpdatedBy;
  }
  export interface GetLicenseEndpointRequest {
    /**
     * The license endpoint ID.
     */
    licenseEndpointId: LicenseEndpointId;
  }
  export interface GetLicenseEndpointResponse {
    /**
     * The DNS name.
     */
    dnsName?: DnsName;
    /**
     * The license endpoint ID.
     */
    licenseEndpointId: LicenseEndpointId;
    /**
     * The security group IDs for the license endpoint.
     */
    securityGroupIds?: GetLicenseEndpointResponseSecurityGroupIdsList;
    /**
     * The status of the license endpoint.
     */
    status: LicenseEndpointStatus;
    /**
     * The status message of the license endpoint.
     */
    statusMessage: StatusMessage;
    /**
     * The subnet IDs.
     */
    subnetIds?: GetLicenseEndpointResponseSubnetIdsList;
    /**
     * The VCP(virtual private cloud) ID associated with the license endpoint.
     */
    vpcId?: VpcId;
  }
  export type GetLicenseEndpointResponseSecurityGroupIdsList = SecurityGroupId[];
  export type GetLicenseEndpointResponseSubnetIdsList = SubnetId[];
  export interface GetMonitorRequest {
    /**
     * The unique identifier for the monitor. This ID is returned by the CreateMonitor operation.
     */
    monitorId: MonitorId;
  }
  export interface GetMonitorResponse {
    /**
     * The UNIX timestamp of the date and time that the monitor was created.
     */
    createdAt: CreatedAt;
    /**
     * The user name of the person that created the monitor.
     */
    createdBy: CreatedBy;
    /**
     * The name used to identify the monitor on the Deadline Cloud console.
     */
    displayName: ResourceName;
    /**
     * The Amazon Resource Name (ARN) that the IAM Identity Center assigned to the monitor when it was created.
     */
    identityCenterApplicationArn: IdentityCenterApplicationArn;
    /**
     * The Amazon Resource Name (ARN) of the IAM Identity Center instance responsible for authenticating monitor users.
     */
    identityCenterInstanceArn: IdentityCenterInstanceArn;
    /**
     * The unique identifier for the monitor.
     */
    monitorId: MonitorId;
    /**
     * The Amazon Resource Name (ARN) of the IAM role for the monitor. Users of the monitor use this role to access Deadline Cloud resources.
     */
    roleArn: IamRoleArn;
    /**
     * The subdomain used for the monitor URL. The full URL of the monitor is subdomain.Region.deadlinecloud.amazonaws.com.
     */
    subdomain: Subdomain;
    /**
     * The UNIX timestamp of the last date and time that the monitor was updated.
     */
    updatedAt?: UpdatedAt;
    /**
     * The user name of the person that last updated the monitor.
     */
    updatedBy?: UpdatedBy;
    /**
     * The complete URL of the monitor. The full URL of the monitor is subdomain.Region.deadlinecloud.amazonaws.com.
     */
    url: Url;
  }
  export interface GetQueueEnvironmentRequest {
    /**
     * The farm ID for the queue environment.
     */
    farmId: FarmId;
    /**
     * The queue environment ID.
     */
    queueEnvironmentId: QueueEnvironmentId;
    /**
     * The queue ID for the queue environment.
     */
    queueId: QueueId;
  }
  export interface GetQueueEnvironmentResponse {
    /**
     * The date and time the resource was created.
     */
    createdAt: CreatedAt;
    /**
     * The user or system that created this resource.&gt;
     */
    createdBy: CreatedBy;
    /**
     * The name of the queue environment.
     */
    name: EnvironmentName;
    /**
     * The priority of the queue environment.
     */
    priority: Priority;
    /**
     * The queue environment ID.
     */
    queueEnvironmentId: QueueEnvironmentId;
    /**
     * The template for the queue environment.
     */
    template: EnvironmentTemplate;
    /**
     * The type of template for the queue environment.
     */
    templateType: EnvironmentTemplateType;
    /**
     * The date and time the resource was updated.
     */
    updatedAt?: UpdatedAt;
    /**
     * The user or system that updated this resource.
     */
    updatedBy?: UpdatedBy;
  }
  export interface GetQueueFleetAssociationRequest {
    /**
     * The farm ID of the farm that contains the queue-fleet association.
     */
    farmId: FarmId;
    /**
     * The fleet ID for the queue-fleet association.
     */
    fleetId: FleetId;
    /**
     * The queue ID for the queue-fleet association.
     */
    queueId: QueueId;
  }
  export interface GetQueueFleetAssociationResponse {
    /**
     * The date and time the resource was created.
     */
    createdAt: CreatedAt;
    /**
     * The user or system that created this resource.
     */
    createdBy: CreatedBy;
    /**
     * The fleet ID for the queue-fleet association.
     */
    fleetId: FleetId;
    /**
     * The queue ID for the queue-fleet association.
     */
    queueId: QueueId;
    /**
     * The status of the queue-fleet association.
     */
    status: QueueFleetAssociationStatus;
    /**
     * The date and time the resource was updated.
     */
    updatedAt?: UpdatedAt;
    /**
     * The user or system that updated this resource.
     */
    updatedBy?: UpdatedBy;
  }
  export interface GetQueueRequest {
    /**
     * The farm ID of the farm in the queue.
     */
    farmId: FarmId;
    /**
     * The queue ID for the queue to retrieve.
     */
    queueId: QueueId;
  }
  export interface GetQueueResponse {
    /**
     * The storage profile IDs for the queue.
     */
    allowedStorageProfileIds?: AllowedStorageProfileIds;
    /**
     * The reason the queue was blocked.
     */
    blockedReason?: QueueBlockedReason;
    /**
     * The date and time the resource was created.
     */
    createdAt: CreatedAt;
    /**
     * The user or system that created this resource.
     */
    createdBy: CreatedBy;
    /**
     * The default action taken on a queue if a budget wasn't configured.
     */
    defaultBudgetAction: DefaultQueueBudgetAction;
    /**
     * The description of the queue.
     */
    description?: Description;
    /**
     * The display name of the queue.
     */
    displayName: ResourceName;
    /**
     * The farm ID for the queue.
     */
    farmId: FarmId;
    /**
     * The job attachment settings for the queue.
     */
    jobAttachmentSettings?: JobAttachmentSettings;
    /**
     * The jobs in the queue ran as this specified POSIX user.
     */
    jobRunAsUser?: JobRunAsUser;
    /**
     * The queue ID.
     */
    queueId: QueueId;
    /**
     * A list of the required file system location names in the queue.
     */
    requiredFileSystemLocationNames?: RequiredFileSystemLocationNames;
    /**
     * The IAM role ARN.
     */
    roleArn?: IamRoleArn;
    /**
     * The status of the queue.    ACTIVE–The queue is active.    SCHEDULING–The queue is scheduling.    SCHEDULING_BLOCKED–The queue scheduling is blocked. See the provided reason.  
     */
    status: QueueStatus;
    /**
     * The date and time the resource was updated.
     */
    updatedAt?: UpdatedAt;
    /**
     * The user or system that updated this resource.
     */
    updatedBy?: UpdatedBy;
  }
  export interface GetSessionActionRequest {
    /**
     * The farm ID for the session action.
     */
    farmId: FarmId;
    /**
     * The job ID for the session.
     */
    jobId: JobId;
    /**
     * The queue ID for the session action.
     */
    queueId: QueueId;
    /**
     * The session action ID for the session.
     */
    sessionActionId: SessionActionId;
  }
  export interface GetSessionActionResponse {
    /**
     * The session action definition.
     */
    definition: SessionActionDefinition;
    /**
     * The date and time the resource ended running.
     */
    endedAt?: EndedAt;
    /**
     * The exit code to exit the session.
     */
    processExitCode?: ProcessExitCode;
    /**
     * The message that communicates the progress of the session action.
     */
    progressMessage?: SessionActionProgressMessage;
    /**
     * The percentage completed for a session action.
     */
    progressPercent?: SessionActionProgressPercent;
    /**
     * The session action ID.
     */
    sessionActionId: SessionActionId;
    /**
     * The session ID for the session action.
     */
    sessionId: SessionId;
    /**
     * The date and time the resource started running.
     */
    startedAt?: StartedAt;
    /**
     * The status of the session action.
     */
    status: SessionActionStatus;
    /**
     * The Linux timestamp of the date and time the session action was last updated.
     */
    workerUpdatedAt?: Timestamp;
  }
  export interface GetSessionRequest {
    /**
     * The farm ID for the session.
     */
    farmId: FarmId;
    /**
     * The job ID for the session.
     */
    jobId: JobId;
    /**
     * The queue ID for the session.
     */
    queueId: QueueId;
    /**
     * The session ID.
     */
    sessionId: SessionId;
  }
  export interface GetSessionResponse {
    /**
     * The date and time the resource ended running.
     */
    endedAt?: EndedAt;
    /**
     * The fleet ID for the session.
     */
    fleetId: FleetId;
    /**
     * Provides the Amazon EC2 properties of the host.
     */
    hostProperties?: HostPropertiesResponse;
    /**
     * The life cycle status of the session.
     */
    lifecycleStatus: SessionLifecycleStatus;
    /**
     * The session log.
     */
    log: LogConfiguration;
    /**
     * The session ID.
     */
    sessionId: SessionId;
    /**
     * The date and time the resource started running.
     */
    startedAt: StartedAt;
    /**
     * The life cycle status with which the session started.
     */
    targetLifecycleStatus?: SessionLifecycleTargetStatus;
    /**
     * The date and time the resource was updated.
     */
    updatedAt?: UpdatedAt;
    /**
     * The user or system that updated this resource.
     */
    updatedBy?: UpdatedBy;
    /**
     * The worker ID for the session.
     */
    workerId: WorkerId;
    /**
     * The worker log for the session.
     */
    workerLog?: LogConfiguration;
  }
  export interface GetSessionsStatisticsAggregationRequest {
    /**
     * The identifier returned by the StartSessionsStatisticsAggregation operation that identifies the aggregated statistics.
     */
    aggregationId: AggregationId;
    /**
     * The identifier of the farm to include in the statistics. This should be the same as the farm ID used in the call to the StartSessionsStatisticsAggregation operation.
     */
    farmId: FarmId;
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    maxResults?: MaxResults;
    /**
     * The token for the next set of results, or null to start from the beginning.
     */
    nextToken?: String;
  }
  export interface GetSessionsStatisticsAggregationResponse {
    /**
     * If Deadline Cloud returns nextToken, then there are more results available. The value of nextToken is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then nextToken is set to null. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 ValidationException error.
     */
    nextToken?: String;
    /**
     * The statistics for the specified fleets or queues.
     */
    statistics?: StatisticsList;
    /**
     * The status of the aggregated results.
     */
    status: SessionsStatisticsAggregationStatus;
    /**
     * A message that describes the status.
     */
    statusMessage?: String;
  }
  export interface GetStepRequest {
    /**
     * The farm ID for the step.
     */
    farmId: FarmId;
    /**
     * The job ID for the step.
     */
    jobId: JobId;
    /**
     * The queue ID for the step.
     */
    queueId: QueueId;
    /**
     * The step ID.
     */
    stepId: StepId;
  }
  export interface GetStepResponse {
    /**
     * The date and time the resource was created.
     */
    createdAt: CreatedAt;
    /**
     * The user or system that created this resource.
     */
    createdBy: CreatedBy;
    /**
     * The number of dependencies in the step.
     */
    dependencyCounts?: DependencyCounts;
    /**
     * The description of the step.
     */
    description?: StepDescription;
    /**
     * The date and time the resource ended running.
     */
    endedAt?: EndedAt;
    /**
     * The life cycle status of the step.
     */
    lifecycleStatus: StepLifecycleStatus;
    /**
     * A message that describes the lifecycle status of the step.
     */
    lifecycleStatusMessage?: String;
    /**
     * The name of the step.
     */
    name: StepName;
    /**
     * A list of step parameters and the combination expression for the step.
     */
    parameterSpace?: ParameterSpace;
    /**
     * The required capabilities of the step.
     */
    requiredCapabilities?: StepRequiredCapabilities;
    /**
     * The date and time the resource started running.
     */
    startedAt?: StartedAt;
    /**
     * The step ID.
     */
    stepId: StepId;
    /**
     * The task status with which the job started.
     */
    targetTaskRunStatus?: StepTargetTaskRunStatus;
    /**
     * The task run status for the job.
     */
    taskRunStatus: TaskRunStatus;
    /**
     * The number of tasks running on the job.
     */
    taskRunStatusCounts: TaskRunStatusCounts;
    /**
     * The date and time the resource was updated.
     */
    updatedAt?: UpdatedAt;
    /**
     * The user or system that updated this resource.
     */
    updatedBy?: UpdatedBy;
  }
  export interface GetStorageProfileForQueueRequest {
    /**
     * The farm ID for the queue in storage profile.
     */
    farmId: FarmId;
    /**
     * The queue ID the queue in the storage profile.
     */
    queueId: QueueId;
    /**
     * The storage profile ID for the storage profile in the queue.
     */
    storageProfileId: StorageProfileId;
  }
  export interface GetStorageProfileForQueueResponse {
    /**
     * The display name of the storage profile connected to a queue.
     */
    displayName: ResourceName;
    /**
     * The location of the files for the storage profile within the queue.
     */
    fileSystemLocations?: FileSystemLocationsList;
    /**
     * The operating system of the storage profile in the queue.
     */
    osFamily: StorageProfileOperatingSystemFamily;
    /**
     * The storage profile ID.
     */
    storageProfileId: StorageProfileId;
  }
  export interface GetStorageProfileRequest {
    /**
     * The farm ID for the storage profile.
     */
    farmId: FarmId;
    /**
     * The storage profile ID.
     */
    storageProfileId: StorageProfileId;
  }
  export interface GetStorageProfileResponse {
    /**
     * The date and time the resource was created.
     */
    createdAt: CreatedAt;
    /**
     * The user or system that created this resource.
     */
    createdBy: CreatedBy;
    /**
     * The display name of the storage profile.
     */
    displayName: ResourceName;
    /**
     * The location of the files for the storage profile.
     */
    fileSystemLocations?: FileSystemLocationsList;
    /**
     * The operating system (OS) for the storage profile.
     */
    osFamily: StorageProfileOperatingSystemFamily;
    /**
     * The storage profile ID.
     */
    storageProfileId: StorageProfileId;
    /**
     * The date and time the resource was updated.
     */
    updatedAt?: UpdatedAt;
    /**
     * The user or system that updated this resource.
     */
    updatedBy?: UpdatedBy;
  }
  export interface GetTaskRequest {
    /**
     * The farm ID of the farm connected to the task.
     */
    farmId: FarmId;
    /**
     * The job ID of the job connected to the task.
     */
    jobId: JobId;
    /**
     * The queue ID for the queue connected to the task.
     */
    queueId: QueueId;
    /**
     * The step ID for the step connected to the task.
     */
    stepId: StepId;
    /**
     * The task ID.
     */
    taskId: TaskId;
  }
  export interface GetTaskResponse {
    /**
     * The date and time the resource was created.
     */
    createdAt: CreatedAt;
    /**
     * The user or system that created this resource.
     */
    createdBy: CreatedBy;
    /**
     * The date and time the resource ended running.
     */
    endedAt?: EndedAt;
    /**
     * The number of times that the task failed and was retried.
     */
    failureRetryCount?: TaskRetryCount;
    /**
     * The latest session ID for the task.
     */
    latestSessionActionId?: SessionActionId;
    /**
     * The parameters for the task.
     */
    parameters?: TaskParameters;
    /**
     * The run status for the task.
     */
    runStatus: TaskRunStatus;
    /**
     * The date and time the resource started running.
     */
    startedAt?: StartedAt;
    /**
     * The run status with which to start the task.
     */
    targetRunStatus?: TaskTargetRunStatus;
    /**
     * The task ID.
     */
    taskId: TaskId;
    /**
     * The date and time the resource was updated.
     */
    updatedAt?: UpdatedAt;
    /**
     * The user or system that updated this resource.
     */
    updatedBy?: UpdatedBy;
  }
  export interface GetWorkerRequest {
    /**
     * The farm ID for the worker.
     */
    farmId: FarmId;
    /**
     * The fleet ID of the worker.
     */
    fleetId: FleetId;
    /**
     * The worker ID.
     */
    workerId: WorkerId;
  }
  export interface GetWorkerResponse {
    /**
     * The date and time the resource was created.
     */
    createdAt: CreatedAt;
    /**
     * The user or system that created this resource.
     */
    createdBy: CreatedBy;
    /**
     * The farm ID.
     */
    farmId: FarmId;
    /**
     * The fleet ID.
     */
    fleetId: FleetId;
    /**
     * The host properties for the worker.
     */
    hostProperties?: HostPropertiesResponse;
    /**
     * The logs for the associated worker.
     */
    log?: LogConfiguration;
    /**
     * The status of the worker.
     */
    status: WorkerStatus;
    /**
     * The date and time the resource was updated.
     */
    updatedAt?: UpdatedAt;
    /**
     * The user or system that updated this resource.
     */
    updatedBy?: UpdatedBy;
    /**
     * The worker ID.
     */
    workerId: WorkerId;
  }
  export type HostName = string;
  export interface HostPropertiesRequest {
    /**
     * The host name.
     */
    hostName?: HostName;
    /**
     * The IP address of the host.
     */
    ipAddresses?: IpAddresses;
  }
  export interface HostPropertiesResponse {
    /**
     * The ARN of the host EC2 instance.
     */
    ec2InstanceArn?: String;
    /**
     * The instance type of the host EC2 instance.
     */
    ec2InstanceType?: InstanceType;
    /**
     * The host name.
     */
    hostName?: HostName;
    /**
     * The IP address of the host.
     */
    ipAddresses?: IpAddresses;
  }
  export type IamRoleArn = string;
  export type IdentityCenterApplicationArn = string;
  export type IdentityCenterInstanceArn = string;
  export type IdentityCenterPrincipalId = string;
  export type IdentityStoreId = string;
  export type InstanceType = string;
  export type InstanceTypes = InstanceType[];
  export type IntString = string;
  export type Integer = number;
  export interface IpAddresses {
    /**
     * The IpV4 address of the network.
     */
    ipV4Addresses?: IpV4Addresses;
    /**
     * The IpV6 address for the network and node component.
     */
    ipV6Addresses?: IpV6Addresses;
  }
  export type IpV4Address = string;
  export type IpV4Addresses = IpV4Address[];
  export type IpV6Address = string;
  export type IpV6Addresses = IpV6Address[];
  export interface JobAttachmentDetailsEntity {
    /**
     * The job attachments.
     */
    attachments: Attachments;
    /**
     * The job ID.
     */
    jobId: JobId;
  }
  export interface JobAttachmentDetailsError {
    /**
     * The error code.
     */
    code: JobEntityErrorCode;
    /**
     * The job ID.
     */
    jobId: JobId;
    /**
     * The error message detailing the error's cause.
     */
    message: String;
  }
  export interface JobAttachmentDetailsIdentifiers {
    /**
     * The job ID.
     */
    jobId: JobId;
  }
  export interface JobAttachmentSettings {
    /**
     * The root prefix.
     */
    rootPrefix: S3Prefix;
    /**
     * The Amazon S3 bucket name.
     */
    s3BucketName: S3BucketName;
  }
  export type JobAttachmentsFileSystem = "COPIED"|"VIRTUAL"|string;
  export type JobDescription = string;
  export interface JobDetailsEntity {
    /**
     * The job attachment settings.
     */
    jobAttachmentSettings?: JobAttachmentSettings;
    /**
     * The job ID.
     */
    jobId: JobId;
    /**
     * The user name and group that the job uses when run.
     */
    jobRunAsUser?: JobRunAsUser;
    /**
     * The log group name.
     */
    logGroupName: String;
    /**
     * The parameters.
     */
    parameters?: JobParameters;
    /**
     * The path mapping rules.
     */
    pathMappingRules?: PathMappingRules;
    /**
     * The queue role ARN.
     */
    queueRoleArn?: IamRoleArn;
    /**
     * The schema version.
     */
    schemaVersion: String;
  }
  export interface JobDetailsError {
    /**
     * The error code.
     */
    code: JobEntityErrorCode;
    /**
     * The job ID.
     */
    jobId: JobId;
    /**
     * The error message detailing the error's cause.
     */
    message: String;
  }
  export interface JobDetailsIdentifiers {
    /**
     * The job ID.
     */
    jobId: JobId;
  }
  export interface JobEntity {
    /**
     * The environment details for the job entity.
     */
    environmentDetails?: EnvironmentDetailsEntity;
    /**
     * The job attachment details.
     */
    jobAttachmentDetails?: JobAttachmentDetailsEntity;
    /**
     * The job details.
     */
    jobDetails?: JobDetailsEntity;
    /**
     * The step details.
     */
    stepDetails?: StepDetailsEntity;
  }
  export type JobEntityErrorCode = "AccessDeniedException"|"InternalServerException"|"ValidationException"|"ResourceNotFoundException"|"MaxPayloadSizeExceeded"|"ConflictException"|string;
  export type JobEntityIdentifiers = JobEntityIdentifiersUnion[];
  export interface JobEntityIdentifiersUnion {
    /**
     * The environment details.
     */
    environmentDetails?: EnvironmentDetailsIdentifiers;
    /**
     * The job attachment details.
     */
    jobAttachmentDetails?: JobAttachmentDetailsIdentifiers;
    /**
     * The job details.
     */
    jobDetails?: JobDetailsIdentifiers;
    /**
     * The step details.
     */
    stepDetails?: StepDetailsIdentifiers;
  }
  export type JobId = string;
  export type JobLifecycleStatus = "CREATE_IN_PROGRESS"|"CREATE_FAILED"|"CREATE_COMPLETE"|"UPLOAD_IN_PROGRESS"|"UPLOAD_FAILED"|"UPDATE_IN_PROGRESS"|"UPDATE_FAILED"|"UPDATE_SUCCEEDED"|"ARCHIVED"|string;
  export interface JobMember {
    /**
     * The farm ID.
     */
    farmId: FarmId;
    /**
     * The identity store ID.
     */
    identityStoreId: IdentityStoreId;
    /**
     * The job ID.
     */
    jobId: JobId;
    /**
     * The job member's membership level.
     */
    membershipLevel: MembershipLevel;
    /**
     * The principal ID of the job member.
     */
    principalId: IdentityCenterPrincipalId;
    /**
     * The principal type of the job member.
     */
    principalType: PrincipalType;
    /**
     * The queue ID.
     */
    queueId: QueueId;
  }
  export type JobMembers = JobMember[];
  export type JobName = string;
  export interface JobParameter {
    /**
     * A double precision IEEE-754 floating point number represented as a string.
     */
    float?: FloatString;
    /**
     * A signed integer represented as a string.
     */
    int?: IntString;
    /**
     * A file system path represented as a string.
     */
    path?: PathString;
    /**
     * A UTF-8 string.
     */
    string?: ParameterString;
  }
  export type JobParameters = {[key: string]: JobParameter};
  export type JobPriority = number;
  export interface JobRunAsUser {
    /**
     * The user and group that the jobs in the queue run as.
     */
    posix?: PosixUser;
    /**
     * Specifies whether the job should run using the queue's system user or if the job should run using the worker agent system user.
     */
    runAs: RunAs;
    /**
     * Identifies a Microsoft Windows user.
     */
    windows?: WindowsUser;
  }
  export type JobSearchSummaries = JobSearchSummary[];
  export interface JobSearchSummary {
    /**
     * The date and time the resource was created.
     */
    createdAt?: CreatedAt;
    /**
     * The user or system that created this resource.
     */
    createdBy?: CreatedBy;
    /**
     * The date and time the resource ended running.
     */
    endedAt?: EndedAt;
    /**
     * The job ID.
     */
    jobId?: JobId;
    /**
     * The job parameters.
     */
    jobParameters?: JobParameters;
    /**
     * The life cycle status.
     */
    lifecycleStatus?: JobLifecycleStatus;
    /**
     * The life cycle status message.
     */
    lifecycleStatusMessage?: String;
    /**
     * The number of task failures before the job stops running and is marked as FAILED.
     */
    maxFailedTasksCount?: MaxFailedTasksCount;
    /**
     * The maximum number of retries for a job.
     */
    maxRetriesPerTask?: MaxRetriesPerTask;
    /**
     * The job name.
     */
    name?: JobName;
    /**
     * The job priority.
     */
    priority?: JobPriority;
    /**
     * The queue ID.
     */
    queueId?: QueueId;
    /**
     * The date and time the resource started running.
     */
    startedAt?: StartedAt;
    /**
     * The task status to start with on the job.
     */
    targetTaskRunStatus?: JobTargetTaskRunStatus;
    /**
     * task run status for the job.    PENDING–pending and waiting for resources.    READY–ready to be processed.    ASSIGNED–assigned and will run next on a worker.    SCHEDULED–scheduled to be run on a worker.    INTERRUPTING–being interrupted.    RUNNING–running on a worker.    SUSPENDED–the task is suspended.    CANCELED–the task has been canceled.    FAILED–the task has failed.    SUCCEEDED–the task has succeeded.  
     */
    taskRunStatus?: TaskRunStatus;
    /**
     * The number of tasks running on the job.
     */
    taskRunStatusCounts?: TaskRunStatusCounts;
  }
  export type JobSummaries = JobSummary[];
  export interface JobSummary {
    /**
     * The date and time the resource was created.
     */
    createdAt: CreatedAt;
    /**
     * The user or system that created this resource.
     */
    createdBy: CreatedBy;
    /**
     * The date and time the resource ended running.
     */
    endedAt?: EndedAt;
    /**
     * The job ID.
     */
    jobId: JobId;
    /**
     * The life cycle status.
     */
    lifecycleStatus: JobLifecycleStatus;
    /**
     * The life cycle status message.
     */
    lifecycleStatusMessage: String;
    /**
     * The number of task failures before the job stops running and is marked as FAILED.
     */
    maxFailedTasksCount?: MaxFailedTasksCount;
    /**
     * The maximum number of retries for a job.
     */
    maxRetriesPerTask?: MaxRetriesPerTask;
    /**
     * The job name.
     */
    name: JobName;
    /**
     * The job priority.
     */
    priority: JobPriority;
    /**
     * The date and time the resource started running.
     */
    startedAt?: StartedAt;
    /**
     * The task status to start with on the job.
     */
    targetTaskRunStatus?: JobTargetTaskRunStatus;
    /**
     * The task run status for the job.    PENDING–pending and waiting for resources.    READY–ready to be processed.    ASSIGNED–assigned and will run next on a worker.    SCHEDULED–scheduled to be run on a worker.    INTERRUPTING–being interrupted.    RUNNING–running on a worker.    SUSPENDED–the task is suspended.    CANCELED–the task has been canceled.    FAILED–the task has failed.    SUCCEEDED–the task has succeeded.  
     */
    taskRunStatus?: TaskRunStatus;
    /**
     * The number of tasks running on the job.
     */
    taskRunStatusCounts?: TaskRunStatusCounts;
    /**
     * The date and time the resource was updated.
     */
    updatedAt?: UpdatedAt;
    /**
     * The user or system that updated this resource.
     */
    updatedBy?: UpdatedBy;
  }
  export type JobTargetTaskRunStatus = "READY"|"FAILED"|"SUCCEEDED"|"CANCELED"|"SUSPENDED"|"PENDING"|string;
  export type JobTemplate = string;
  export type JobTemplateType = "JSON"|"YAML"|string;
  export type KmsKeyArn = string;
  export type LicenseEndpointId = string;
  export type LicenseEndpointStatus = "CREATE_IN_PROGRESS"|"DELETE_IN_PROGRESS"|"READY"|"NOT_READY"|string;
  export type LicenseEndpointSummaries = LicenseEndpointSummary[];
  export interface LicenseEndpointSummary {
    /**
     * The license endpoint ID.
     */
    licenseEndpointId?: LicenseEndpointId;
    /**
     * The status of the license endpoint.
     */
    status?: LicenseEndpointStatus;
    /**
     * The status message of the license endpoint.
     */
    statusMessage?: StatusMessage;
    /**
     * The VCP(virtual private cloud) ID associated with the license endpoint.
     */
    vpcId?: VpcId;
  }
  export type LicenseProduct = string;
  export type ListAttributeCapabilityValue = AttributeCapabilityValue[];
  export interface ListAvailableMeteredProductsRequest {
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    maxResults?: MaxResults;
    /**
     * The token for the next set of results, or null to start from the beginning.
     */
    nextToken?: String;
  }
  export interface ListAvailableMeteredProductsResponse {
    /**
     * The metered products.
     */
    meteredProducts: MeteredProductSummaryList;
    /**
     * If Deadline Cloud returns nextToken, then there are more results available. The value of nextToken is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then nextToken is set to null. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 ValidationException error.
     */
    nextToken?: String;
  }
  export interface ListBudgetsRequest {
    /**
     * The farm ID associated with the budgets.
     */
    farmId: FarmId;
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    maxResults?: MaxResults;
    /**
     * The token for the next set of results, or null to start from the beginning.
     */
    nextToken?: String;
    /**
     * The status to list for the budgets.
     */
    status?: BudgetStatus;
  }
  export interface ListBudgetsResponse {
    /**
     * The budgets to include on the list.
     */
    budgets: BudgetSummaries;
    /**
     * If Deadline Cloud returns nextToken, then there are more results available. The value of nextToken is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then nextToken is set to null. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 ValidationException error.
     */
    nextToken?: String;
  }
  export interface ListFarmMembersRequest {
    /**
     * The farm ID.
     */
    farmId: FarmId;
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    maxResults?: MaxResults;
    /**
     * The token for the next set of results, or null to start from the beginning.
     */
    nextToken?: String;
  }
  export interface ListFarmMembersResponse {
    /**
     * The members on the list.
     */
    members: FarmMembers;
    /**
     * If Deadline Cloud returns nextToken, then there are more results available. The value of nextToken is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then nextToken is set to null. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 ValidationException error.
     */
    nextToken?: String;
  }
  export interface ListFarmsRequest {
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    maxResults?: MaxResults;
    /**
     * The token for the next set of results, or null to start from the beginning.
     */
    nextToken?: String;
    /**
     * The principal ID of the member to list on the farm.
     */
    principalId?: IdentityCenterPrincipalId;
  }
  export interface ListFarmsResponse {
    /**
     * Farms on the list.
     */
    farms: FarmSummaries;
    /**
     * If Deadline Cloud returns nextToken, then there are more results available. The value of nextToken is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then nextToken is set to null. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 ValidationException error.
     */
    nextToken?: String;
  }
  export interface ListFleetMembersRequest {
    /**
     * The farm ID of the fleet.
     */
    farmId: FarmId;
    /**
     * The fleet ID to include on the list.
     */
    fleetId: FleetId;
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    maxResults?: MaxResults;
    /**
     * The token for the next set of results, or null to start from the beginning.
     */
    nextToken?: String;
  }
  export interface ListFleetMembersResponse {
    /**
     * The members on the list.
     */
    members: FleetMembers;
    /**
     * If Deadline Cloud returns nextToken, then there are more results available. The value of nextToken is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then nextToken is set to null. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 ValidationException error.
     */
    nextToken?: String;
  }
  export interface ListFleetsRequest {
    /**
     * The display names of a list of fleets.
     */
    displayName?: ResourceName;
    /**
     * The farm ID of the fleets.
     */
    farmId: FarmId;
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    maxResults?: MaxResults;
    /**
     * The token for the next set of results, or null to start from the beginning.
     */
    nextToken?: String;
    /**
     * The principal ID of the members to include in the fleet.
     */
    principalId?: IdentityCenterPrincipalId;
    /**
     * The status of the fleet.
     */
    status?: FleetStatus;
  }
  export interface ListFleetsResponse {
    /**
     * The fleets on the list.
     */
    fleets: FleetSummaries;
    /**
     * If Deadline Cloud returns nextToken, then there are more results available. The value of nextToken is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then nextToken is set to null. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 ValidationException error.
     */
    nextToken?: String;
  }
  export interface ListJobMembersRequest {
    /**
     * The farm ID of the job to list.
     */
    farmId: FarmId;
    /**
     * The job ID to include on the list.
     */
    jobId: JobId;
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    maxResults?: MaxResults;
    /**
     * The token for the next set of results, or null to start from the beginning.
     */
    nextToken?: String;
    /**
     * The queue ID to include on the list.
     */
    queueId: QueueId;
  }
  export interface ListJobMembersResponse {
    /**
     * The members on the list.
     */
    members: JobMembers;
    /**
     * If Deadline Cloud returns nextToken, then there are more results available. The value of nextToken is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then nextToken is set to null. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 ValidationException error.
     */
    nextToken?: String;
  }
  export interface ListJobsRequest {
    /**
     * The farm ID for the jobs.
     */
    farmId: FarmId;
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    maxResults?: MaxResults;
    /**
     * The token for the next set of results, or null to start from the beginning.
     */
    nextToken?: String;
    /**
     * The principal ID of the members on the jobs.
     */
    principalId?: IdentityCenterPrincipalId;
    /**
     * The queue ID for the job.
     */
    queueId: QueueId;
  }
  export interface ListJobsResponse {
    /**
     * The jobs on the list.
     */
    jobs: JobSummaries;
    /**
     * If Deadline Cloud returns nextToken, then there are more results available. The value of nextToken is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then nextToken is set to null. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 ValidationException error.
     */
    nextToken?: String;
  }
  export interface ListLicenseEndpointsRequest {
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    maxResults?: MaxResults;
    /**
     * The token for the next set of results, or null to start from the beginning.
     */
    nextToken?: String;
  }
  export interface ListLicenseEndpointsResponse {
    /**
     * The license endpoints.
     */
    licenseEndpoints: LicenseEndpointSummaries;
    /**
     * If Deadline Cloud returns nextToken, then there are more results available. The value of nextToken is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then nextToken is set to null. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 ValidationException error.
     */
    nextToken?: String;
  }
  export interface ListMeteredProductsRequest {
    /**
     * The license endpoint ID to include on the list of metered products.
     */
    licenseEndpointId: LicenseEndpointId;
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    maxResults?: MaxResults;
    /**
     * The token for the next set of results, or null to start from the beginning.
     */
    nextToken?: String;
  }
  export interface ListMeteredProductsResponse {
    /**
     * The metered products to list.
     */
    meteredProducts: MeteredProductSummaryList;
    /**
     * If Deadline Cloud returns nextToken, then there are more results available. The value of nextToken is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then nextToken is set to null. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 ValidationException error.
     */
    nextToken?: String;
  }
  export interface ListMonitorsRequest {
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    maxResults?: MaxResults;
    /**
     * The token for the next set of results, or null to start from the beginning.
     */
    nextToken?: String;
  }
  export interface ListMonitorsResponse {
    /**
     * A list of MonitorSummary objects that describe your monitors in the Deadline Cloud.
     */
    monitors: MonitorSummaries;
    /**
     * If Deadline Cloud returns nextToken, then there are more results available. The value of nextToken is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then nextToken is set to null. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 ValidationException error.
     */
    nextToken?: String;
  }
  export interface ListQueueEnvironmentsRequest {
    /**
     * The farm ID for the queue environment list.
     */
    farmId: FarmId;
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    maxResults?: MaxResults;
    /**
     * The token for the next set of results, or null to start from the beginning.
     */
    nextToken?: String;
    /**
     * The queue ID for the queue environment list.
     */
    queueId: QueueId;
  }
  export interface ListQueueEnvironmentsResponse {
    /**
     * The environments to include in the queue environments list.
     */
    environments: QueueEnvironmentSummaries;
    /**
     * If Deadline Cloud returns nextToken, then there are more results available. The value of nextToken is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then nextToken is set to null. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 ValidationException error.
     */
    nextToken?: String;
  }
  export interface ListQueueFleetAssociationsRequest {
    /**
     * The farm ID for the queue-fleet association list.
     */
    farmId: FarmId;
    /**
     * The fleet ID for the queue-fleet association list.
     */
    fleetId?: FleetId;
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    maxResults?: MaxResults;
    /**
     * The token for the next set of results, or null to start from the beginning.
     */
    nextToken?: String;
    /**
     * The queue ID for the queue-fleet association list.
     */
    queueId?: QueueId;
  }
  export interface ListQueueFleetAssociationsResponse {
    /**
     * If Deadline Cloud returns nextToken, then there are more results available. The value of nextToken is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then nextToken is set to null. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 ValidationException error.
     */
    nextToken?: String;
    /**
     * The queue-fleet associations on the list.
     */
    queueFleetAssociations: QueueFleetAssociationSummaries;
  }
  export interface ListQueueMembersRequest {
    /**
     * The farm ID for the queue.
     */
    farmId: FarmId;
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    maxResults?: MaxResults;
    /**
     * The token for the next set of results, or null to start from the beginning.
     */
    nextToken?: String;
    /**
     * The queue ID to include on the list.
     */
    queueId: QueueId;
  }
  export interface ListQueueMembersResponse {
    /**
     * The members on the list.
     */
    members: QueueMemberList;
    /**
     * If Deadline Cloud returns nextToken, then there are more results available. The value of nextToken is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then nextToken is set to null. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 ValidationException error.
     */
    nextToken?: String;
  }
  export interface ListQueuesRequest {
    /**
     * The farm ID of the queue.
     */
    farmId: FarmId;
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    maxResults?: MaxResults;
    /**
     * The token for the next set of results, or null to start from the beginning.
     */
    nextToken?: String;
    /**
     * The principal ID. This filter is only valid when using Nimble Studio credentials and should match the user ID in the credentials of the caller.
     */
    principalId?: IdentityCenterPrincipalId;
    /**
     * The status of the queues listed.    ACTIVE–The queues are active.    SCHEDULING–The queues are scheduling.    SCHEDULING_BLOCKED–The queue scheduling is blocked for these queues.  
     */
    status?: QueueStatus;
  }
  export interface ListQueuesResponse {
    /**
     * If Deadline Cloud returns nextToken, then there are more results available. The value of nextToken is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then nextToken is set to null. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 ValidationException error.
     */
    nextToken?: String;
    /**
     * The queues on the list.
     */
    queues: QueueSummaries;
  }
  export interface ListSessionActionsRequest {
    /**
     * The farm ID for the session actions list.
     */
    farmId: FarmId;
    /**
     * The job ID for the session actions list.
     */
    jobId: JobId;
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    maxResults?: MaxResults;
    /**
     * The token for the next set of results, or null to start from the beginning.
     */
    nextToken?: String;
    /**
     * The queue ID for the session actions list.
     */
    queueId: QueueId;
    /**
     * The session ID to include on the sessions action list.
     */
    sessionId?: SessionId;
    /**
     * The task ID for the session actions list.
     */
    taskId?: TaskId;
  }
  export interface ListSessionActionsResponse {
    /**
     * If Deadline Cloud returns nextToken, then there are more results available. The value of nextToken is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then nextToken is set to null. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 ValidationException error.
     */
    nextToken?: String;
    /**
     * The session actions.
     */
    sessionActions: SessionActionSummaries;
  }
  export interface ListSessionsForWorkerRequest {
    /**
     * The farm ID for the session.
     */
    farmId: FarmId;
    /**
     * The fleet ID for the session.
     */
    fleetId: FleetId;
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    maxResults?: MaxResults;
    /**
     * The token for the next set of results, or null to start from the beginning.
     */
    nextToken?: String;
    /**
     * The worker ID for the session.
     */
    workerId: WorkerId;
  }
  export interface ListSessionsForWorkerResponse {
    /**
     * The token for the next set of results, or null to start from the beginning.
     */
    nextToken?: String;
    /**
     * The sessions in the response.
     */
    sessions: ListSessionsForWorkerSummaries;
  }
  export type ListSessionsForWorkerSummaries = WorkerSessionSummary[];
  export interface ListSessionsRequest {
    /**
     * The farm ID for the list of sessions.
     */
    farmId: FarmId;
    /**
     * The job ID for the list of sessions.
     */
    jobId: JobId;
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    maxResults?: MaxResults;
    /**
     * The token for the next set of results, or null to start from the beginning.
     */
    nextToken?: String;
    /**
     * The queue ID for the list of sessions
     */
    queueId: QueueId;
  }
  export interface ListSessionsResponse {
    /**
     * If Deadline Cloud returns nextToken, then there are more results available. The value of nextToken is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then nextToken is set to null. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 ValidationException error.
     */
    nextToken?: String;
    /**
     * The sessions on the list.
     */
    sessions: SessionSummaries;
  }
  export interface ListStepConsumersRequest {
    /**
     * The farm ID for the list of step consumers.
     */
    farmId: FarmId;
    /**
     * The job ID for the step consumer.
     */
    jobId: JobId;
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    maxResults?: ListStepConsumersRequestMaxResultsInteger;
    /**
     * The token for the next set of results, or null to start from the beginning.
     */
    nextToken?: String;
    /**
     * The queue ID for the step consumer.
     */
    queueId: QueueId;
    /**
     * The step ID to include on the list.
     */
    stepId: StepId;
  }
  export type ListStepConsumersRequestMaxResultsInteger = number;
  export interface ListStepConsumersResponse {
    /**
     * The consumers on the list.
     */
    consumers: StepConsumers;
    /**
     * If Deadline Cloud returns nextToken, then there are more results available. The value of nextToken is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then nextToken is set to null. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 ValidationException error.
     */
    nextToken?: String;
  }
  export interface ListStepDependenciesRequest {
    /**
     * The farm ID for the step dependencies list.
     */
    farmId: FarmId;
    /**
     * The job ID for the step dependencies list.
     */
    jobId: JobId;
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    maxResults?: ListStepDependenciesRequestMaxResultsInteger;
    /**
     * The token for the next set of results, or null to start from the beginning.
     */
    nextToken?: String;
    /**
     * The queue ID for the step dependencies list.
     */
    queueId: QueueId;
    /**
     * The step ID to include on the list.
     */
    stepId: StepId;
  }
  export type ListStepDependenciesRequestMaxResultsInteger = number;
  export interface ListStepDependenciesResponse {
    /**
     * The dependencies on the list.
     */
    dependencies: StepDependencies;
    /**
     * If Deadline Cloud returns nextToken, then there are more results available. The value of nextToken is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then nextToken is set to null. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 ValidationException error.
     */
    nextToken?: String;
  }
  export interface ListStepsRequest {
    /**
     * The farm ID to include on the list of steps.
     */
    farmId: FarmId;
    /**
     * The job ID to include on the list of steps.
     */
    jobId: JobId;
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    maxResults?: MaxResults;
    /**
     * The token for the next set of results, or null to start from the beginning.
     */
    nextToken?: String;
    /**
     * The queue ID to include on the list of steps.
     */
    queueId: QueueId;
  }
  export interface ListStepsResponse {
    /**
     * If Deadline Cloud returns nextToken, then there are more results available. The value of nextToken is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then nextToken is set to null. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 ValidationException error.
     */
    nextToken?: String;
    /**
     * The steps on the list.
     */
    steps: StepSummaries;
  }
  export interface ListStorageProfilesForQueueRequest {
    /**
     * The farm ID of the queue's storage profile.
     */
    farmId: FarmId;
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    maxResults?: MaxResults;
    /**
     * The token for the next set of results, or null to start from the beginning.
     */
    nextToken?: String;
    /**
     * The queue ID for the storage profile.
     */
    queueId: QueueId;
  }
  export interface ListStorageProfilesForQueueResponse {
    /**
     * If Deadline Cloud returns nextToken, then there are more results available. The value of nextToken is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then nextToken is set to null. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 ValidationException error.
     */
    nextToken?: String;
    /**
     * The storage profiles in the queue.
     */
    storageProfiles: StorageProfileSummaries;
  }
  export interface ListStorageProfilesRequest {
    /**
     * The farm ID of the storage profile.
     */
    farmId: FarmId;
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    maxResults?: MaxResults;
    /**
     * The token for the next set of results, or null to start from the beginning.
     */
    nextToken?: String;
  }
  export interface ListStorageProfilesResponse {
    /**
     * If Deadline Cloud returns nextToken, then there are more results available. The value of nextToken is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then nextToken is set to null. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 ValidationException error.
     */
    nextToken?: String;
    /**
     * The storage profiles.
     */
    storageProfiles: StorageProfileSummaries;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The resource ARN to list tags for.
     */
    resourceArn: String;
  }
  export interface ListTagsForResourceResponse {
    /**
     * Each tag consists of a tag key and a tag value. Tag keys and values are both required, but tag values can be empty strings.
     */
    tags?: Tags;
  }
  export interface ListTasksRequest {
    /**
     * The farm ID connected to the tasks.
     */
    farmId: FarmId;
    /**
     * The job ID for the tasks.
     */
    jobId: JobId;
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    maxResults?: MaxResults;
    /**
     * The token for the next set of results, or null to start from the beginning.
     */
    nextToken?: String;
    /**
     * The queue ID connected to the tasks.
     */
    queueId: QueueId;
    /**
     * The step ID for the tasks.
     */
    stepId: StepId;
  }
  export interface ListTasksResponse {
    /**
     * If Deadline Cloud returns nextToken, then there are more results available. The value of nextToken is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then nextToken is set to null. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 ValidationException error.
     */
    nextToken?: String;
    /**
     * Tasks for the job.
     */
    tasks: TaskSummaries;
  }
  export interface ListWorkersRequest {
    /**
     * The farm ID connected to the workers.
     */
    farmId: FarmId;
    /**
     * The fleet ID of the workers.
     */
    fleetId: FleetId;
    /**
     * The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.
     */
    maxResults?: MaxResults;
    /**
     * The token for the next set of results, or null to start from the beginning.
     */
    nextToken?: String;
  }
  export interface ListWorkersResponse {
    /**
     * If Deadline Cloud returns nextToken, then there are more results available. The value of nextToken is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then nextToken is set to null. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an HTTP 400 ValidationException error.
     */
    nextToken?: String;
    /**
     * The workers on the list.
     */
    workers: WorkerSummaries;
  }
  export interface LogConfiguration {
    /**
     * The log configuration error details.
     */
    error?: LogError;
    /**
     * The log drivers for worker related logs.
     */
    logDriver: LogDriver;
    /**
     * The options for a log driver.
     */
    options?: LogOptions;
    /**
     * The parameters for the log configuration.
     */
    parameters?: LogParameters;
  }
  export type LogDriver = string;
  export type LogError = string;
  export type LogOptions = {[key: string]: String};
  export type LogParameters = {[key: string]: String};
  export type LogicalOperator = "AND"|"OR"|string;
  export interface ManifestProperties {
    /**
     * The file system location name.
     */
    fileSystemLocationName?: FileSystemLocationName;
    /**
     * The has value of the file.
     */
    inputManifestHash?: ManifestPropertiesInputManifestHashString;
    /**
     * The file path.
     */
    inputManifestPath?: ManifestPropertiesInputManifestPathString;
    /**
     * The file path relative to the directory.
     */
    outputRelativeDirectories?: OutputRelativeDirectoriesList;
    /**
     * The file's root path.
     */
    rootPath: ManifestPropertiesRootPathString;
    /**
     * The format of the root path.
     */
    rootPathFormat: PathFormat;
  }
  export type ManifestPropertiesInputManifestHashString = string;
  export type ManifestPropertiesInputManifestPathString = string;
  export type ManifestPropertiesList = ManifestProperties[];
  export type ManifestPropertiesRootPathString = string;
  export type MaxFailedTasksCount = number;
  export type MaxResults = number;
  export type MaxRetriesPerTask = number;
  export type MembershipLevel = "VIEWER"|"CONTRIBUTOR"|"OWNER"|"MANAGER"|string;
  export type MemoryAmountMiB = number;
  export interface MemoryMiBRange {
    /**
     * The maximum amount of memory (in MiB).
     */
    max?: MemoryAmountMiB;
    /**
     * The minimum amount of memory (in MiB).
     */
    min: MemoryAmountMiB;
  }
  export type MeteredProductId = string;
  export interface MeteredProductSummary {
    /**
     * The family to which the metered product belongs.
     */
    family: BoundedString;
    /**
     * The port on which the metered product should run.
     */
    port: PortNumber;
    /**
     * The product ID.
     */
    productId: MeteredProductId;
    /**
     * The vendor.
     */
    vendor: BoundedString;
  }
  export type MeteredProductSummaryList = MeteredProductSummary[];
  export type MinOneMaxTenThousand = number;
  export type MinZeroMaxInteger = number;
  export type MonitorId = string;
  export type MonitorSummaries = MonitorSummary[];
  export interface MonitorSummary {
    /**
     * The UNIX timestamp of the date and time that the monitor was created.
     */
    createdAt: CreatedAt;
    /**
     * The user name of the person that created the monitor.
     */
    createdBy: CreatedBy;
    /**
     * The name of the monitor that displays on the Deadline Cloud console.
     */
    displayName: ResourceName;
    /**
     * The Amazon Resource Name (ARN) that the IAM Identity Center assigned to the monitor when it was created.
     */
    identityCenterApplicationArn: IdentityCenterApplicationArn;
    /**
     * The Amazon Resource Name (ARN) of the IAM Identity Center instance responsible for authenticating monitor users.
     */
    identityCenterInstanceArn: IdentityCenterInstanceArn;
    /**
     * The unique identifier for the monitor.
     */
    monitorId: MonitorId;
    /**
     * The Amazon Resource Name (ARN) of the IAM role for the monitor. Users of the monitor use this role to access Deadline Cloud resources.
     */
    roleArn: IamRoleArn;
    /**
     * The subdomain used for the monitor URL. The full URL of the monitor is subdomain.Region.deadlinecloud.amazonaws.com.
     */
    subdomain: Subdomain;
    /**
     * The UNIX timestamp of the date and time that the monitor was last updated.
     */
    updatedAt?: UpdatedAt;
    /**
     * The user name of the person that last updated the monitor.
     */
    updatedBy?: UpdatedBy;
    /**
     * The complete URL of the monitor. The full URL of the monitor is subdomain.Region.deadlinecloud.amazonaws.com.
     */
    url: Url;
  }
  export type NextItemOffset = number;
  export type OutputRelativeDirectoriesList = OutputRelativeDirectoriesListMemberString[];
  export type OutputRelativeDirectoriesListMemberString = string;
  export interface ParameterFilterExpression {
    /**
     * The name of the parameter to filter on.
     */
    name: String;
    /**
     * The type of comparison to use to filter results.
     */
    operator: ComparisonOperator;
    /**
     * The parameter's value.
     */
    value: ParameterValue;
  }
  export interface ParameterSortExpression {
    /**
     * The parameter name to sort by.
     */
    name: String;
    /**
     * The sort order for the parameter.
     */
    sortOrder: SortOrder;
  }
  export interface ParameterSpace {
    /**
     * The combination expression to use in the search.
     */
    combination?: CombinationExpression;
    /**
     * The parameters to search for.
     */
    parameters: StepParameterList;
  }
  export type ParameterString = string;
  export type ParameterValue = string;
  export type PathFormat = "windows"|"posix"|string;
  export interface PathMappingRule {
    /**
     * The destination path.
     */
    destinationPath: String;
    /**
     * The source path.
     */
    sourcePath: String;
    /**
     * The source path format.
     */
    sourcePathFormat: PathFormat;
  }
  export type PathMappingRules = PathMappingRule[];
  export type PathString = string;
  export type Period = "HOURLY"|"DAILY"|"WEEKLY"|"MONTHLY"|string;
  export type PortNumber = number;
  export interface PosixUser {
    /**
     * The name of the POSIX user's group.
     */
    group: PosixUserGroupString;
    /**
     * The name of the POSIX user.
     */
    user: PosixUserUserString;
  }
  export type PosixUserGroupString = string;
  export type PosixUserUserString = string;
  export type PrincipalType = "USER"|"GROUP"|string;
  export type Priority = number;
  export type ProcessExitCode = number;
  export interface PutMeteredProductRequest {
    /**
     * The license endpoint ID to add to the metered product.
     */
    licenseEndpointId: LicenseEndpointId;
    /**
     * The product ID to add to the metered product.
     */
    productId: MeteredProductId;
  }
  export interface PutMeteredProductResponse {
  }
  export type QueueBlockedReason = "NO_BUDGET_CONFIGURED"|"BUDGET_THRESHOLD_REACHED"|string;
  export type QueueEnvironmentId = string;
  export type QueueEnvironmentSummaries = QueueEnvironmentSummary[];
  export interface QueueEnvironmentSummary {
    /**
     * The name of the queue environment.
     */
    name: EnvironmentName;
    /**
     * The queue environment's priority.
     */
    priority: Priority;
    /**
     * The queue environment ID.
     */
    queueEnvironmentId: QueueEnvironmentId;
  }
  export type QueueFleetAssociationStatus = "ACTIVE"|"STOP_SCHEDULING_AND_COMPLETE_TASKS"|"STOP_SCHEDULING_AND_CANCEL_TASKS"|"STOPPED"|string;
  export type QueueFleetAssociationSummaries = QueueFleetAssociationSummary[];
  export interface QueueFleetAssociationSummary {
    /**
     * The date and time the resource was created.
     */
    createdAt: CreatedAt;
    /**
     * The user or system that created this resource.
     */
    createdBy: CreatedBy;
    /**
     * The fleet ID.
     */
    fleetId: FleetId;
    /**
     * The queue ID.
     */
    queueId: QueueId;
    /**
     * The status of task scheduling in the queue-fleet association.    ACTIVE–Association is active.    STOP_SCHEDULING_AND_COMPLETE_TASKS–Association has stopped scheduling new tasks and is completing current tasks.    STOP_SCHEDULING_AND_CANCEL_TASKS–Association has stopped scheduling new tasks and is canceling current tasks.    STOPPED–Association has been stopped.  
     */
    status: QueueFleetAssociationStatus;
    /**
     * The date and time the resource was updated.
     */
    updatedAt?: UpdatedAt;
    /**
     * The user or system that updated this resource.
     */
    updatedBy?: UpdatedBy;
  }
  export type QueueId = string;
  export interface QueueMember {
    /**
     * The farm ID.
     */
    farmId: FarmId;
    /**
     * The identity store ID.
     */
    identityStoreId: IdentityStoreId;
    /**
     * The queue member's membership level.
     */
    membershipLevel: MembershipLevel;
    /**
     * The principal ID of the queue member.
     */
    principalId: IdentityCenterPrincipalId;
    /**
     * The principal type of the queue member.
     */
    principalType: PrincipalType;
    /**
     * The queue ID.
     */
    queueId: QueueId;
  }
  export type QueueMemberList = QueueMember[];
  export type QueueStatus = "IDLE"|"SCHEDULING"|"SCHEDULING_BLOCKED"|string;
  export type QueueSummaries = QueueSummary[];
  export interface QueueSummary {
    /**
     * The reason the queue is blocked, if applicable.
     */
    blockedReason?: QueueBlockedReason;
    /**
     * The date and time the resource was created.
     */
    createdAt: CreatedAt;
    /**
     * The user or system that created this resource.
     */
    createdBy: CreatedBy;
    /**
     * The default action taken on a queue summary if a budget wasn't configured.
     */
    defaultBudgetAction: DefaultQueueBudgetAction;
    /**
     * The display name of the queue summary to update.
     */
    displayName: ResourceName;
    /**
     * The farm ID.
     */
    farmId: FarmId;
    /**
     * The queue ID.
     */
    queueId: QueueId;
    /**
     * That status of the queue.
     */
    status: QueueStatus;
    /**
     * The date and time the resource was updated.
     */
    updatedAt?: UpdatedAt;
    /**
     * The user or system that updated this resource.
     */
    updatedBy?: UpdatedBy;
  }
  export type RequiredFileSystemLocationNames = FileSystemLocationName[];
  export type ResourceName = string;
  export interface ResponseBudgetAction {
    /**
     * The budget action description.
     */
    description?: Description;
    /**
     * The percentage threshold for the budget.
     */
    thresholdPercentage: ThresholdPercentage;
    /**
     * The action taken on the budget once scheduling stops.
     */
    type: BudgetActionType;
  }
  export type ResponseBudgetActionList = ResponseBudgetAction[];
  export type RunAs = "QUEUE_CONFIGURED_USER"|"WORKER_AGENT_USER"|string;
  export type S3BucketName = string;
  export type S3Key = string;
  export interface S3Location {
    /**
     * The name of the Amazon S3 bucket.
     */
    bucketName: S3BucketName;
    /**
     * The Amazon S3 object key that uniquely identifies the Amazon S3 bucket.
     */
    key: S3Key;
  }
  export type S3Prefix = string;
  export interface SearchFilterExpression {
    /**
     * Filters based on date and time.
     */
    dateTimeFilter?: DateTimeFilterExpression;
    /**
     * Filters by group.
     */
    groupFilter?: SearchGroupedFilterExpressions;
    /**
     * Filters by parameter.
     */
    parameterFilter?: ParameterFilterExpression;
    /**
     * Filters by a specified search term.
     */
    searchTermFilter?: SearchTermFilterExpression;
    /**
     * Filters by a string.
     */
    stringFilter?: StringFilterExpression;
  }
  export type SearchFilterExpressions = SearchFilterExpression[];
  export interface SearchGroupedFilterExpressions {
    /**
     * The filters to use for the search.
     */
    filters: SearchFilterExpressions;
    /**
     * The operators to include in the search.
     */
    operator: LogicalOperator;
  }
  export interface SearchJobsRequest {
    /**
     * The farm ID of the job.
     */
    farmId: FarmId;
    /**
     * The filter expression, AND or OR, to use when searching among a group of search strings in a resource. You can use two groupings per search each within parenthesis ().
     */
    filterExpressions?: SearchGroupedFilterExpressions;
    /**
     * Defines how far into the scrollable list to start the return of results.
     */
    itemOffset: SearchJobsRequestItemOffsetInteger;
    /**
     * Specifies the number of items per page for the resource.
     */
    pageSize?: SearchJobsRequestPageSizeInteger;
    /**
     * The queue ID to use in the job search.
     */
    queueIds: SearchJobsRequestQueueIdsList;
    /**
     * The search terms for a resource.
     */
    sortExpressions?: SearchSortExpressions;
  }
  export type SearchJobsRequestItemOffsetInteger = number;
  export type SearchJobsRequestPageSizeInteger = number;
  export type SearchJobsRequestQueueIdsList = QueueId[];
  export interface SearchJobsResponse {
    /**
     * The jobs in the search.
     */
    jobs: JobSearchSummaries;
    /**
     * The next incremental starting point after the defined itemOffset.
     */
    nextItemOffset?: NextItemOffset;
    /**
     * The total number of results in the search.
     */
    totalResults: TotalResults;
  }
  export interface SearchSortExpression {
    /**
     * Options for sorting by a field.
     */
    fieldSort?: FieldSortExpression;
    /**
     * Options for sorting by a parameter.
     */
    parameterSort?: ParameterSortExpression;
    /**
     * Options for sorting a particular user's jobs first.
     */
    userJobsFirst?: UserJobsFirst;
  }
  export type SearchSortExpressions = SearchSortExpression[];
  export interface SearchStepsRequest {
    /**
     * The farm ID to use for the step search.
     */
    farmId: FarmId;
    /**
     * The filter expression, AND or OR, to use when searching among a group of search strings in a resource. You can use two groupings per search each within parenthesis ().
     */
    filterExpressions?: SearchGroupedFilterExpressions;
    /**
     * Defines how far into the scrollable list to start the return of results.
     */
    itemOffset: SearchStepsRequestItemOffsetInteger;
    /**
     * The job ID to use in the step search.
     */
    jobId?: JobId;
    /**
     * Specifies the number of items per page for the resource.
     */
    pageSize?: SearchStepsRequestPageSizeInteger;
    /**
     * The queue IDs in the step search.
     */
    queueIds: SearchStepsRequestQueueIdsList;
    /**
     * The search terms for a resource.
     */
    sortExpressions?: SearchSortExpressions;
  }
  export type SearchStepsRequestItemOffsetInteger = number;
  export type SearchStepsRequestPageSizeInteger = number;
  export type SearchStepsRequestQueueIdsList = QueueId[];
  export interface SearchStepsResponse {
    /**
     * The next incremental starting point after the defined itemOffset.
     */
    nextItemOffset?: NextItemOffset;
    /**
     * The steps in the search.
     */
    steps: StepSearchSummaries;
    /**
     * The total number of results in the search.
     */
    totalResults: TotalResults;
  }
  export interface SearchTasksRequest {
    /**
     * The farm ID of the task.
     */
    farmId: FarmId;
    /**
     * The filter expression, AND or OR, to use when searching among a group of search strings in a resource. You can use two groupings per search each within parenthesis ().
     */
    filterExpressions?: SearchGroupedFilterExpressions;
    /**
     * Defines how far into the scrollable list to start the return of results.
     */
    itemOffset: SearchTasksRequestItemOffsetInteger;
    /**
     * The job ID for the task search.
     */
    jobId?: JobId;
    /**
     * Specifies the number of items per page for the resource.
     */
    pageSize?: SearchTasksRequestPageSizeInteger;
    /**
     * The queue IDs to include in the search.
     */
    queueIds: SearchTasksRequestQueueIdsList;
    /**
     * The search terms for a resource.
     */
    sortExpressions?: SearchSortExpressions;
  }
  export type SearchTasksRequestItemOffsetInteger = number;
  export type SearchTasksRequestPageSizeInteger = number;
  export type SearchTasksRequestQueueIdsList = QueueId[];
  export interface SearchTasksResponse {
    /**
     * The next incremental starting point after the defined itemOffset.
     */
    nextItemOffset?: NextItemOffset;
    /**
     * Tasks in the search.
     */
    tasks: TaskSearchSummaries;
    /**
     * The total number of results in the search.
     */
    totalResults: TotalResults;
  }
  export type SearchTerm = string;
  export interface SearchTermFilterExpression {
    /**
     * The term to search for.
     */
    searchTerm: SearchTerm;
  }
  export interface SearchWorkersRequest {
    /**
     * The farm ID in the workers search.
     */
    farmId: FarmId;
    /**
     * The filter expression, AND or OR, to use when searching among a group of search strings in a resource. You can use two groupings per search each within parenthesis ().
     */
    filterExpressions?: SearchGroupedFilterExpressions;
    /**
     * The fleet ID of the workers to search for.
     */
    fleetIds: SearchWorkersRequestFleetIdsList;
    /**
     * Defines how far into the scrollable list to start the return of results.
     */
    itemOffset: SearchWorkersRequestItemOffsetInteger;
    /**
     * Specifies the number of items per page for the resource.
     */
    pageSize?: SearchWorkersRequestPageSizeInteger;
    /**
     * The search terms for a resource.
     */
    sortExpressions?: SearchSortExpressions;
  }
  export type SearchWorkersRequestFleetIdsList = FleetId[];
  export type SearchWorkersRequestItemOffsetInteger = number;
  export type SearchWorkersRequestPageSizeInteger = number;
  export interface SearchWorkersResponse {
    /**
     * The next incremental starting point after the defined itemOffset.
     */
    nextItemOffset?: NextItemOffset;
    /**
     * The total number of results in the search.
     */
    totalResults: TotalResults;
    /**
     * The workers for the search.
     */
    workers: WorkerSearchSummaries;
  }
  export type SecretAccessKey = string;
  export type SecurityGroupId = string;
  export interface ServiceManagedEc2FleetConfiguration {
    /**
     * The Amazon EC2 instance capabilities.
     */
    instanceCapabilities: ServiceManagedEc2InstanceCapabilities;
    /**
     * The Amazon EC2 market type.
     */
    instanceMarketOptions: ServiceManagedEc2InstanceMarketOptions;
  }
  export interface ServiceManagedEc2InstanceCapabilities {
    /**
     * The allowable Amazon EC2 instance types.
     */
    allowedInstanceTypes?: InstanceTypes;
    /**
     * The CPU architecture type.
     */
    cpuArchitectureType: CpuArchitectureType;
    /**
     * The custom capability amounts to require for instances in this fleet.
     */
    customAmounts?: CustomFleetAmountCapabilities;
    /**
     * The custom capability attributes to require for instances in this fleet.
     */
    customAttributes?: CustomFleetAttributeCapabilities;
    /**
     * The instance types to exclude from the fleet.
     */
    excludedInstanceTypes?: InstanceTypes;
    /**
     * The memory, as MiB, for the Amazon EC2 instance type.
     */
    memoryMiB: MemoryMiBRange;
    /**
     * The operating system (OS) family.
     */
    osFamily: ServiceManagedFleetOperatingSystemFamily;
    /**
     * The root EBS volume.
     */
    rootEbsVolume?: Ec2EbsVolume;
    /**
     * The amount of vCPU to require for instances in this fleet.
     */
    vCpuCount: VCpuCountRange;
  }
  export interface ServiceManagedEc2InstanceMarketOptions {
    /**
     * The Amazon EC2 instance type.
     */
    type: Ec2MarketType;
  }
  export type ServiceManagedFleetOperatingSystemFamily = "WINDOWS"|"LINUX"|string;
  export interface SessionActionDefinition {
    /**
     * The environment to enter into.
     */
    envEnter?: EnvironmentEnterSessionActionDefinition;
    /**
     * The environment to exit from.
     */
    envExit?: EnvironmentExitSessionActionDefinition;
    /**
     * The job attachments to sync with a session action.
     */
    syncInputJobAttachments?: SyncInputJobAttachmentsSessionActionDefinition;
    /**
     * The task run in the session.
     */
    taskRun?: TaskRunSessionActionDefinition;
  }
  export interface SessionActionDefinitionSummary {
    /**
     * The environment to enter into.
     */
    envEnter?: EnvironmentEnterSessionActionDefinitionSummary;
    /**
     * The environment to exit from.
     */
    envExit?: EnvironmentExitSessionActionDefinitionSummary;
    /**
     * The job attachments to sync with the session action definition.
     */
    syncInputJobAttachments?: SyncInputJobAttachmentsSessionActionDefinitionSummary;
    /**
     * The task run.
     */
    taskRun?: TaskRunSessionActionDefinitionSummary;
  }
  export type SessionActionId = string;
  export type SessionActionIdList = SessionActionId[];
  export type SessionActionProgressMessage = string;
  export type SessionActionProgressPercent = number;
  export type SessionActionStatus = "ASSIGNED"|"RUNNING"|"CANCELING"|"SUCCEEDED"|"FAILED"|"INTERRUPTED"|"CANCELED"|"NEVER_ATTEMPTED"|"SCHEDULED"|"RECLAIMING"|"RECLAIMED"|string;
  export type SessionActionSummaries = SessionActionSummary[];
  export interface SessionActionSummary {
    /**
     * The session action definition.
     */
    definition: SessionActionDefinitionSummary;
    /**
     * The date and time the resource ended running.
     */
    endedAt?: EndedAt;
    /**
     * The completion percentage for the session action.
     */
    progressPercent?: SessionActionProgressPercent;
    /**
     * The session action ID.
     */
    sessionActionId: SessionActionId;
    /**
     * The date and time the resource started running.
     */
    startedAt?: StartedAt;
    /**
     * The status of the session action.
     */
    status: SessionActionStatus;
    /**
     * The Linux timestamp of the last date and time that the session action was updated.
     */
    workerUpdatedAt?: Timestamp;
  }
  export type SessionId = string;
  export type SessionLifecycleStatus = "STARTED"|"UPDATE_IN_PROGRESS"|"UPDATE_SUCCEEDED"|"UPDATE_FAILED"|"ENDED"|string;
  export type SessionLifecycleTargetStatus = "ENDED"|string;
  export type SessionSummaries = SessionSummary[];
  export interface SessionSummary {
    /**
     * The date and time the resource ended running.
     */
    endedAt?: EndedAt;
    /**
     * The fleet ID.
     */
    fleetId: FleetId;
    /**
     * The life cycle status for the session.
     */
    lifecycleStatus: SessionLifecycleStatus;
    /**
     * The session ID.
     */
    sessionId: SessionId;
    /**
     * The date and time the resource started running.
     */
    startedAt: StartedAt;
    /**
     * The target life cycle status for the session.
     */
    targetLifecycleStatus?: SessionLifecycleTargetStatus;
    /**
     * The date and time the resource was updated.
     */
    updatedAt?: UpdatedAt;
    /**
     * The user or system that updated this resource.
     */
    updatedBy?: UpdatedBy;
    /**
     * The worker ID.
     */
    workerId: WorkerId;
  }
  export type SessionToken = string;
  export type SessionsStatisticsAggregationStatus = "IN_PROGRESS"|"TIMEOUT"|"FAILED"|"COMPLETED"|string;
  export interface SessionsStatisticsResources {
    /**
     * One to 10 fleet IDs that specify the fleets to return statistics for. If you specify the fleetIds field, you can't specify the queueIds field.
     */
    fleetIds?: SessionsStatisticsResourcesFleetIdsList;
    /**
     * One to 10 queue IDs that specify the queues to return statistics for. If you specify the queueIds field, you can't specify the fleetIds field.
     */
    queueIds?: SessionsStatisticsResourcesQueueIdsList;
  }
  export type SessionsStatisticsResourcesFleetIdsList = FleetId[];
  export type SessionsStatisticsResourcesQueueIdsList = QueueId[];
  export type SortOrder = "ASCENDING"|"DESCENDING"|string;
  export interface StartSessionsStatisticsAggregationRequest {
    /**
     * The Linux timestamp of the date and time that the statistics end.
     */
    endTime: SyntheticTimestamp_date_time;
    /**
     * The identifier of the farm that contains queues or fleets to return statistics for.
     */
    farmId: FarmId;
    /**
     * The field to use to group the statistics.
     */
    groupBy: UsageGroupBy;
    /**
     * The period to aggregate the statistics.
     */
    period?: Period;
    /**
     * A list of fleet IDs or queue IDs to gather statistics for.
     */
    resourceIds: SessionsStatisticsResources;
    /**
     * The Linux timestamp of the date and time that the statistics start.
     */
    startTime: SyntheticTimestamp_date_time;
    /**
     * One to four statistics to return.
     */
    statistics: UsageStatistics;
    /**
     * The timezone to use for the statistics. Use UTC notation such as "UTC+8."
     */
    timezone?: Timezone;
  }
  export interface StartSessionsStatisticsAggregationResponse {
    /**
     * A unique identifier for the aggregated statistics. Use this identifier with the GetAggregatedStatisticsForSessions operation to return the statistics.
     */
    aggregationId: AggregationId;
  }
  export type StartedAt = Date;
  export type StartsAt = Date;
  export interface Statistics {
    /**
     * The end time for the aggregation.
     */
    aggregationEndTime?: SyntheticTimestamp_date_time;
    /**
     * The start time for the aggregation.
     */
    aggregationStartTime?: SyntheticTimestamp_date_time;
    /**
     * How the statistics should appear in USD. Options include: minimum, maximum, average or sum.
     */
    costInUsd: Stats;
    /**
     * The number of instances in a list of statistics.
     */
    count: Integer;
    /**
     * The fleet ID.
     */
    fleetId?: FleetId;
    /**
     * The type of instance.
     */
    instanceType?: InstanceType;
    /**
     * The job ID.
     */
    jobId?: JobId;
    /**
     * The job name.
     */
    jobName?: JobName;
    /**
     * The licensed product.
     */
    licenseProduct?: LicenseProduct;
    /**
     * The queue ID.
     */
    queueId?: QueueId;
    /**
     * The total aggregated runtime.
     */
    runtimeInSeconds: Stats;
    /**
     * The type of usage for the statistics.
     */
    usageType?: UsageType;
    /**
     * The user ID.
     */
    userId?: UserId;
  }
  export type StatisticsList = Statistics[];
  export interface Stats {
    /**
     * The average of the usage statistics.
     */
    avg?: Double;
    /**
     * The maximum among the usage statistics.
     */
    max?: Double;
    /**
     * The minimum of the usage statistics.
     */
    min?: Double;
    /**
     * The sum of the usage statistics.
     */
    sum?: Double;
  }
  export type StatusMessage = string;
  export type StepAmountCapabilities = StepAmountCapability[];
  export interface StepAmountCapability {
    /**
     * The maximum amount.
     */
    max?: Double;
    /**
     * The minimum amount.
     */
    min?: Double;
    /**
     * The name of the step.
     */
    name: AmountCapabilityName;
    /**
     * The amount value.
     */
    value?: Double;
  }
  export type StepAttributeCapabilities = StepAttributeCapability[];
  export interface StepAttributeCapability {
    /**
     * Requires all of the step attribute values.
     */
    allOf?: ListAttributeCapabilityValue;
    /**
     * Requires any of the step attributes in a given list.
     */
    anyOf?: ListAttributeCapabilityValue;
    /**
     * The name of the step attribute.
     */
    name: AttributeCapabilityName;
  }
  export interface StepConsumer {
    /**
     * The step consumer status.
     */
    status: DependencyConsumerResolutionStatus;
    /**
     * The step ID.
     */
    stepId: StepId;
  }
  export type StepConsumers = StepConsumer[];
  export type StepDependencies = StepDependency[];
  export interface StepDependency {
    /**
     * The step dependency status.
     */
    status: DependencyConsumerResolutionStatus;
    /**
     * The step ID.
     */
    stepId: StepId;
  }
  export type StepDescription = string;
  export interface StepDetailsEntity {
    /**
     * The dependencies for a step.
     */
    dependencies: DependenciesList;
    /**
     * The job ID.
     */
    jobId: JobId;
    /**
     * The schema version for a step template.
     */
    schemaVersion: String;
    /**
     * The step ID.
     */
    stepId: StepId;
    /**
     * The template for a step.
     */
    template: Document;
  }
  export interface StepDetailsError {
    /**
     * The error code.
     */
    code: JobEntityErrorCode;
    /**
     * The job ID.
     */
    jobId: JobId;
    /**
     * The error message detailing the error's cause.
     */
    message: String;
    /**
     * The step ID.
     */
    stepId: StepId;
  }
  export interface StepDetailsIdentifiers {
    /**
     * The job ID.
     */
    jobId: JobId;
    /**
     * The step ID.
     */
    stepId: StepId;
  }
  export type StepId = string;
  export type StepLifecycleStatus = "CREATE_COMPLETE"|"UPDATE_IN_PROGRESS"|"UPDATE_FAILED"|"UPDATE_SUCCEEDED"|string;
  export type StepName = string;
  export interface StepParameter {
    /**
     * The name of the parameter.
     */
    name: StepParameterName;
    /**
     * The data type of the parameter.
     */
    type: StepParameterType;
  }
  export type StepParameterList = StepParameter[];
  export type StepParameterName = string;
  export type StepParameterType = "INT"|"FLOAT"|"STRING"|"PATH"|string;
  export interface StepRequiredCapabilities {
    /**
     * The capability amounts that the step requires.
     */
    amounts: StepAmountCapabilities;
    /**
     * The capability attributes that the step requires.
     */
    attributes: StepAttributeCapabilities;
  }
  export type StepSearchSummaries = StepSearchSummary[];
  export interface StepSearchSummary {
    /**
     * The date and time the resource was created.
     */
    createdAt?: CreatedAt;
    /**
     * The date and time the resource ended running.
     */
    endedAt?: EndedAt;
    /**
     * The job ID.
     */
    jobId?: JobId;
    /**
     * The life cycle status.
     */
    lifecycleStatus?: StepLifecycleStatus;
    /**
     * The life cycle status message.
     */
    lifecycleStatusMessage?: String;
    /**
     * The step name.
     */
    name?: StepName;
    /**
     * The parameters and combination expressions for the search.
     */
    parameterSpace?: ParameterSpace;
    /**
     * The queue ID.
     */
    queueId?: QueueId;
    /**
     * The date and time the resource started running.
     */
    startedAt?: StartedAt;
    /**
     * The step ID.
     */
    stepId?: StepId;
    /**
     * The task status to start with on the job.
     */
    targetTaskRunStatus?: StepTargetTaskRunStatus;
    /**
     * The task run status for the job.    PENDING–pending and waiting for resources.    READY–ready to be processed.    ASSIGNED–assigned and will run next on a worker.    SCHEDULED–scheduled to be run on a worker.    INTERRUPTING–being interrupted.    RUNNING–running on a worker.    SUSPENDED–the task is suspended.    CANCELED–the task has been canceled.    FAILED–the task has failed.    SUCCEEDED–the task has succeeded.  
     */
    taskRunStatus?: TaskRunStatus;
    /**
     * The number of tasks running on the job.
     */
    taskRunStatusCounts?: TaskRunStatusCounts;
  }
  export type StepSummaries = StepSummary[];
  export interface StepSummary {
    /**
     * The date and time the resource was created.
     */
    createdAt: CreatedAt;
    /**
     * The user or system that created this resource.
     */
    createdBy: CreatedBy;
    /**
     * The number of dependencies for the step.
     */
    dependencyCounts?: DependencyCounts;
    /**
     * The date and time the resource ended running.
     */
    endedAt?: EndedAt;
    /**
     * The life cycle status.
     */
    lifecycleStatus: StepLifecycleStatus;
    /**
     * A message that describes the lifecycle of the step.
     */
    lifecycleStatusMessage?: String;
    /**
     * The name of the step.
     */
    name: StepName;
    /**
     * The date and time the resource started running.
     */
    startedAt?: StartedAt;
    /**
     * The step ID.
     */
    stepId: StepId;
    /**
     * The task status to start with on the job.
     */
    targetTaskRunStatus?: StepTargetTaskRunStatus;
    /**
     * The task run status for the job.    PENDING–pending and waiting for resources.    READY–ready to process.    ASSIGNED–assigned and will run next on a worker.    SCHEDULED–scheduled to run on a worker.    INTERRUPTING–being interrupted.    RUNNING–running on a worker.    SUSPENDED–the task is suspended.    CANCELED–the task has been canceled.    FAILED–the task has failed.    SUCCEEDED–the task has succeeded.  
     */
    taskRunStatus: TaskRunStatus;
    /**
     * The number of tasks running on the job.
     */
    taskRunStatusCounts: TaskRunStatusCounts;
    /**
     * The date and time the resource was updated.
     */
    updatedAt?: UpdatedAt;
    /**
     * The user or system that updated this resource.
     */
    updatedBy?: UpdatedBy;
  }
  export type StepTargetTaskRunStatus = "READY"|"FAILED"|"SUCCEEDED"|"CANCELED"|"SUSPENDED"|"PENDING"|string;
  export type StorageProfileId = string;
  export type StorageProfileOperatingSystemFamily = "WINDOWS"|"LINUX"|"MACOS"|string;
  export type StorageProfileSummaries = StorageProfileSummary[];
  export interface StorageProfileSummary {
    /**
     * The display name of the storage profile summary to update.
     */
    displayName: ResourceName;
    /**
     * The operating system (OS) family.
     */
    osFamily: StorageProfileOperatingSystemFamily;
    /**
     * The storage profile ID.
     */
    storageProfileId: StorageProfileId;
  }
  export type String = string;
  export type StringFilter = string;
  export interface StringFilterExpression {
    /**
     * The field name to search.
     */
    name: String;
    /**
     * The type of comparison to use for this search.
     */
    operator: ComparisonOperator;
    /**
     * The string to search for.
     */
    value: StringFilter;
  }
  export type StringList = String[];
  export type Subdomain = string;
  export type SubnetId = string;
  export interface SyncInputJobAttachmentsSessionActionDefinition {
    /**
     * The step ID for the step in the job attachment.
     */
    stepId?: StepId;
  }
  export interface SyncInputJobAttachmentsSessionActionDefinitionSummary {
    /**
     * The step ID of the step in the job attachment.
     */
    stepId?: StepId;
  }
  export type SyntheticTimestamp_date_time = Date;
  export interface TagResourceRequest {
    /**
     * The ARN of the resource to apply tags to.
     */
    resourceArn: String;
    /**
     * Each tag consists of a tag key and a tag value. Tag keys and values are both required, but tag values can be empty strings.
     */
    tags?: Tags;
  }
  export interface TagResourceResponse {
  }
  export type Tags = {[key: string]: String};
  export type TaskId = string;
  export interface TaskParameterValue {
    /**
     * A double precision IEEE-754 floating point number represented as a string.
     */
    float?: FloatString;
    /**
     * A signed integer represented as a string.
     */
    int?: IntString;
    /**
     * A file system path represented as a string.
     */
    path?: PathString;
    /**
     * A UTF-8 string.
     */
    string?: ParameterString;
  }
  export type TaskParameters = {[key: string]: TaskParameterValue};
  export type TaskRetryCount = number;
  export interface TaskRunSessionActionDefinition {
    /**
     * The task parameters.
     */
    parameters: TaskParameters;
    /**
     * The step ID.
     */
    stepId: StepId;
    /**
     * The task ID.
     */
    taskId: TaskId;
  }
  export interface TaskRunSessionActionDefinitionSummary {
    /**
     * The step ID.
     */
    stepId: StepId;
    /**
     * The task ID.
     */
    taskId: TaskId;
  }
  export type TaskRunStatus = "PENDING"|"READY"|"ASSIGNED"|"STARTING"|"SCHEDULED"|"INTERRUPTING"|"RUNNING"|"SUSPENDED"|"CANCELED"|"FAILED"|"SUCCEEDED"|"NOT_COMPATIBLE"|string;
  export type TaskRunStatusCounts = {[key: string]: Integer};
  export type TaskSearchSummaries = TaskSearchSummary[];
  export interface TaskSearchSummary {
    /**
     * The date and time the resource ended running.
     */
    endedAt?: EndedAt;
    /**
     * The number of times that the task failed and was retried.
     */
    failureRetryCount?: TaskRetryCount;
    /**
     * The job ID.
     */
    jobId?: JobId;
    /**
     * The parameters to search for.
     */
    parameters?: TaskParameters;
    /**
     * The queue ID.
     */
    queueId?: QueueId;
    /**
     * The run status of the task.
     */
    runStatus?: TaskRunStatus;
    /**
     * The date and time the resource started running.
     */
    startedAt?: StartedAt;
    /**
     * The step ID.
     */
    stepId?: StepId;
    /**
     * The run status that the task is being updated to.
     */
    targetRunStatus?: TaskTargetRunStatus;
    /**
     * The task ID.
     */
    taskId?: TaskId;
  }
  export type TaskSummaries = TaskSummary[];
  export interface TaskSummary {
    /**
     * The date and time the resource was created.
     */
    createdAt: CreatedAt;
    /**
     * The user or system that created this resource.
     */
    createdBy: CreatedBy;
    /**
     * The date and time the resource ended running.
     */
    endedAt?: EndedAt;
    /**
     * The number of times that the task failed and was retried.
     */
    failureRetryCount?: TaskRetryCount;
    /**
     * The latest session action for the task.
     */
    latestSessionActionId?: SessionActionId;
    /**
     * The task parameters.
     */
    parameters?: TaskParameters;
    /**
     * The run status of the task.
     */
    runStatus: TaskRunStatus;
    /**
     * The date and time the resource started running.
     */
    startedAt?: StartedAt;
    /**
     * The run status on which the started.
     */
    targetRunStatus?: TaskTargetRunStatus;
    /**
     * The task ID.
     */
    taskId: TaskId;
    /**
     * The date and time the resource was updated.
     */
    updatedAt?: UpdatedAt;
    /**
     * The user or system that updated this resource.
     */
    updatedBy?: UpdatedBy;
  }
  export type TaskTargetRunStatus = "READY"|"FAILED"|"SUCCEEDED"|"CANCELED"|"SUSPENDED"|"PENDING"|string;
  export type ThresholdPercentage = number;
  export type Timestamp = Date;
  export type Timezone = string;
  export type TotalResults = number;
  export interface UntagResourceRequest {
    /**
     * The ARN of the resource to remove the tag from.
     */
    resourceArn: String;
    /**
     * They keys of the tag.
     */
    tagKeys: StringList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateBudgetRequest {
    /**
     * The budget actions to add. Budget actions specify what happens when the budget runs out.
     */
    actionsToAdd?: BudgetActionsToAdd;
    /**
     * The budget actions to remove from the budget.
     */
    actionsToRemove?: BudgetActionsToRemove;
    /**
     * The dollar limit to update on the budget. Based on consumed usage.
     */
    approximateDollarLimit?: ConsumedUsageLimit;
    /**
     * The budget ID to update.
     */
    budgetId: BudgetId;
    /**
     * The unique token which the server uses to recognize retries of the same request.
     */
    clientToken?: ClientToken;
    /**
     * The description of the budget to update.
     */
    description?: Description;
    /**
     * The display name of the budget to update.
     */
    displayName?: ResourceName;
    /**
     * The farm ID of the budget to update.
     */
    farmId: FarmId;
    /**
     * The schedule to update.
     */
    schedule?: BudgetSchedule;
    /**
     * Updates the status of the budget.    ACTIVE–The budget is being evaluated.    INACTIVE–The budget is inactive. This can include Expired, Canceled, or deleted Deleted statuses.  
     */
    status?: BudgetStatus;
  }
  export interface UpdateBudgetResponse {
  }
  export interface UpdateFarmRequest {
    /**
     * The description of the farm to update.
     */
    description?: Description;
    /**
     * The display name of the farm to update.
     */
    displayName?: ResourceName;
    /**
     * The farm ID to update.
     */
    farmId: FarmId;
  }
  export interface UpdateFarmResponse {
  }
  export interface UpdateFleetRequest {
    /**
     * The unique token which the server uses to recognize retries of the same request.
     */
    clientToken?: ClientToken;
    /**
     * The fleet configuration to update.
     */
    configuration?: FleetConfiguration;
    /**
     * The description of the fleet to update.
     */
    description?: Description;
    /**
     * The display name of the fleet to update.
     */
    displayName?: ResourceName;
    /**
     * The farm ID to update.
     */
    farmId: FarmId;
    /**
     * The fleet ID to update.
     */
    fleetId: FleetId;
    /**
     * The maximum number of workers in the fleet.
     */
    maxWorkerCount?: MinZeroMaxInteger;
    /**
     * The minimum number of workers in the fleet.
     */
    minWorkerCount?: MinZeroMaxInteger;
    /**
     * The IAM role ARN that the fleet's workers assume while running jobs.
     */
    roleArn?: IamRoleArn;
  }
  export interface UpdateFleetResponse {
  }
  export type UpdateJobLifecycleStatus = "ARCHIVED"|string;
  export interface UpdateJobRequest {
    /**
     * The unique token which the server uses to recognize retries of the same request.
     */
    clientToken?: ClientToken;
    /**
     * The farm ID of the job to update.
     */
    farmId: FarmId;
    /**
     * The job ID to update.
     */
    jobId: JobId;
    /**
     * The status of a job in its lifecycle.
     */
    lifecycleStatus?: UpdateJobLifecycleStatus;
    /**
     * The number of task failures before the job stops running and is marked as FAILED.
     */
    maxFailedTasksCount?: MaxFailedTasksCount;
    /**
     * The maximum number of retries for a job.
     */
    maxRetriesPerTask?: MaxRetriesPerTask;
    /**
     * The job priority to update.
     */
    priority?: JobPriority;
    /**
     * The queue ID of the job to update.
     */
    queueId: QueueId;
    /**
     * The task status to update the job's tasks to.
     */
    targetTaskRunStatus?: JobTargetTaskRunStatus;
  }
  export interface UpdateJobResponse {
  }
  export interface UpdateMonitorRequest {
    /**
     * The new value to use for the monitor's display name.
     */
    displayName?: ResourceName;
    /**
     * The unique identifier of the monitor to update.
     */
    monitorId: MonitorId;
    /**
     * The Amazon Resource Name (ARN) of the new IAM role to use with the monitor.
     */
    roleArn?: IamRoleArn;
    /**
     * The new value of the subdomain to use when forming the monitor URL.
     */
    subdomain?: Subdomain;
  }
  export interface UpdateMonitorResponse {
  }
  export interface UpdateQueueEnvironmentRequest {
    /**
     * The unique token which the server uses to recognize retries of the same request.
     */
    clientToken?: ClientToken;
    /**
     * The farm ID of the queue environment to update.
     */
    farmId: FarmId;
    /**
     * The priority to update.
     */
    priority?: Priority;
    /**
     * The queue environment ID to update.
     */
    queueEnvironmentId: QueueEnvironmentId;
    /**
     * The queue ID of the queue environment to update.
     */
    queueId: QueueId;
    /**
     * The template to update.
     */
    template?: EnvironmentTemplate;
    /**
     * The template type to update.
     */
    templateType?: EnvironmentTemplateType;
  }
  export interface UpdateQueueEnvironmentResponse {
  }
  export interface UpdateQueueFleetAssociationRequest {
    /**
     * The farm ID to update.
     */
    farmId: FarmId;
    /**
     * The fleet ID to update.
     */
    fleetId: FleetId;
    /**
     * The queue ID to update.
     */
    queueId: QueueId;
    /**
     * The status to update.
     */
    status: UpdateQueueFleetAssociationStatus;
  }
  export interface UpdateQueueFleetAssociationResponse {
  }
  export type UpdateQueueFleetAssociationStatus = "ACTIVE"|"STOP_SCHEDULING_AND_COMPLETE_TASKS"|"STOP_SCHEDULING_AND_CANCEL_TASKS"|string;
  export interface UpdateQueueRequest {
    /**
     * The storage profile IDs to add.
     */
    allowedStorageProfileIdsToAdd?: AllowedStorageProfileIds;
    /**
     * The storage profile ID to remove.
     */
    allowedStorageProfileIdsToRemove?: AllowedStorageProfileIds;
    /**
     * The idempotency token to update in the queue.
     */
    clientToken?: ClientToken;
    /**
     * The default action to take for a queue update if a budget isn't configured.
     */
    defaultBudgetAction?: DefaultQueueBudgetAction;
    /**
     * The description of the queue to update.
     */
    description?: Description;
    /**
     * The display name of the queue to update.
     */
    displayName?: ResourceName;
    /**
     * The farm ID to update in the queue.
     */
    farmId: FarmId;
    /**
     * The job attachment settings to update for the queue.
     */
    jobAttachmentSettings?: JobAttachmentSettings;
    /**
     * Update the jobs in the queue to run as a specified POSIX user.
     */
    jobRunAsUser?: JobRunAsUser;
    /**
     * The queue ID to update.
     */
    queueId: QueueId;
    /**
     * The required file system location names to add to the queue.
     */
    requiredFileSystemLocationNamesToAdd?: RequiredFileSystemLocationNames;
    /**
     * The required file system location names to remove from the queue.
     */
    requiredFileSystemLocationNamesToRemove?: RequiredFileSystemLocationNames;
    /**
     * The IAM role ARN that's used to run jobs from this queue.
     */
    roleArn?: IamRoleArn;
  }
  export interface UpdateQueueResponse {
  }
  export interface UpdateSessionRequest {
    /**
     * The unique token which the server uses to recognize retries of the same request.
     */
    clientToken?: ClientToken;
    /**
     * The farm ID to update in the session.
     */
    farmId: FarmId;
    /**
     * The job ID to update in the session.
     */
    jobId: JobId;
    /**
     * The queue ID to update in the session.
     */
    queueId: QueueId;
    /**
     * The session ID to update.
     */
    sessionId: SessionId;
    /**
     * The life cycle status to update in the session.
     */
    targetLifecycleStatus: SessionLifecycleTargetStatus;
  }
  export interface UpdateSessionResponse {
  }
  export interface UpdateStepRequest {
    /**
     * The unique token which the server uses to recognize retries of the same request.
     */
    clientToken?: ClientToken;
    /**
     * The farm ID to update.
     */
    farmId: FarmId;
    /**
     * The job ID to update.
     */
    jobId: JobId;
    /**
     * The queue ID to update.
     */
    queueId: QueueId;
    /**
     * The step ID to update.
     */
    stepId: StepId;
    /**
     * The task status to update the step's tasks to.
     */
    targetTaskRunStatus: StepTargetTaskRunStatus;
  }
  export interface UpdateStepResponse {
  }
  export interface UpdateStorageProfileRequest {
    /**
     * The unique token which the server uses to recognize retries of the same request.
     */
    clientToken?: ClientToken;
    /**
     * The display name of the storage profile to update.
     */
    displayName?: ResourceName;
    /**
     * The farm ID to update.
     */
    farmId: FarmId;
    /**
     * The file system location names to add.
     */
    fileSystemLocationsToAdd?: FileSystemLocationsList;
    /**
     * The file system location names to remove.
     */
    fileSystemLocationsToRemove?: FileSystemLocationsList;
    /**
     * The OS system to update.
     */
    osFamily?: StorageProfileOperatingSystemFamily;
    /**
     * The storage profile ID to update.
     */
    storageProfileId: StorageProfileId;
  }
  export interface UpdateStorageProfileResponse {
  }
  export interface UpdateTaskRequest {
    /**
     * The unique token which the server uses to recognize retries of the same request.
     */
    clientToken?: ClientToken;
    /**
     * The farm ID to update.
     */
    farmId: FarmId;
    /**
     * The job ID to update.
     */
    jobId: JobId;
    /**
     * The queue ID to update.
     */
    queueId: QueueId;
    /**
     * The step ID to update.
     */
    stepId: StepId;
    /**
     * The run status with which to start the task.
     */
    targetRunStatus: TaskTargetRunStatus;
    /**
     * The task ID to update.
     */
    taskId: TaskId;
  }
  export interface UpdateTaskResponse {
  }
  export interface UpdateWorkerRequest {
    /**
     * The worker capabilities to update.
     */
    capabilities?: WorkerCapabilities;
    /**
     * The farm ID to update.
     */
    farmId: FarmId;
    /**
     * The fleet ID to update.
     */
    fleetId: FleetId;
    /**
     * The host properties to update.
     */
    hostProperties?: HostPropertiesRequest;
    /**
     * The worker status to update.
     */
    status?: UpdatedWorkerStatus;
    /**
     * The worker ID to update.
     */
    workerId: WorkerId;
  }
  export interface UpdateWorkerResponse {
    /**
     * The worker log to update.
     */
    log?: LogConfiguration;
  }
  export type UpdateWorkerScheduleInterval = number;
  export interface UpdateWorkerScheduleRequest {
    /**
     * The farm ID to update.
     */
    farmId: FarmId;
    /**
     * The fleet ID to update.
     */
    fleetId: FleetId;
    /**
     * The session actions associated with the worker schedule to update.
     */
    updatedSessionActions?: UpdatedSessionActions;
    /**
     * The worker ID to update.
     */
    workerId: WorkerId;
  }
  export interface UpdateWorkerScheduleResponse {
    /**
     * The assigned sessions to update.
     */
    assignedSessions: AssignedSessions;
    /**
     * The session actions associated with the worker schedule to cancel.
     */
    cancelSessionActions: CancelSessionActions;
    /**
     * The status to update the worker to.
     */
    desiredWorkerStatus?: DesiredWorkerStatus;
    /**
     * Updates the time interval (in seconds) for the schedule.
     */
    updateIntervalSeconds: UpdateWorkerScheduleInterval;
  }
  export type UpdatedAt = Date;
  export type UpdatedBy = string;
  export interface UpdatedSessionActionInfo {
    /**
     * The status of the session upon completion.
     */
    completedStatus?: CompletedStatus;
    /**
     * The date and time the resource ended running.
     */
    endedAt?: SyntheticTimestamp_date_time;
    /**
     * The process exit code.
     */
    processExitCode?: ProcessExitCode;
    /**
     * A message to indicate the progress of the updated session action.
     */
    progressMessage?: SessionActionProgressMessage;
    /**
     * The percentage completed.
     */
    progressPercent?: SessionActionProgressPercent;
    /**
     * The date and time the resource started running.
     */
    startedAt?: SyntheticTimestamp_date_time;
    /**
     * The updated time.
     */
    updatedAt?: SyntheticTimestamp_date_time;
  }
  export type UpdatedSessionActions = {[key: string]: UpdatedSessionActionInfo};
  export type UpdatedWorkerStatus = "STARTED"|"STOPPING"|"STOPPED"|string;
  export type Url = string;
  export type UsageGroupBy = UsageGroupByField[];
  export type UsageGroupByField = "QUEUE_ID"|"FLEET_ID"|"JOB_ID"|"USER_ID"|"USAGE_TYPE"|"INSTANCE_TYPE"|"LICENSE_PRODUCT"|string;
  export type UsageStatistic = "SUM"|"MIN"|"MAX"|"AVG"|string;
  export type UsageStatistics = UsageStatistic[];
  export interface UsageTrackingResource {
    /**
     * The queue ID.
     */
    queueId?: QueueId;
  }
  export type UsageType = "COMPUTE"|"LICENSE"|string;
  export type UserId = string;
  export interface UserJobsFirst {
    /**
     * The user's ID.
     */
    userIdentityId: String;
  }
  export interface VCpuCountRange {
    /**
     * The maximum amount of vCPU.
     */
    max?: MinOneMaxTenThousand;
    /**
     * The minimum amount of vCPU.
     */
    min: MinOneMaxTenThousand;
  }
  export type VpcId = string;
  export interface WindowsUser {
    /**
     * The password ARN for the Windows user.
     */
    passwordArn: WindowsUserPasswordArnString;
    /**
     * The user.
     */
    user: WindowsUserUserString;
  }
  export type WindowsUserPasswordArnString = string;
  export type WindowsUserUserString = string;
  export interface WorkerAmountCapability {
    /**
     * The name of the worker amount capability.
     */
    name: AmountCapabilityName;
    /**
     * The value of the worker amount capability.
     */
    value: Float;
  }
  export type WorkerAmountCapabilityList = WorkerAmountCapability[];
  export interface WorkerAttributeCapability {
    /**
     * The name of the worker attribute capability.
     */
    name: AttributeCapabilityName;
    /**
     * The values of the worker amount capability.
     */
    values: AttributeCapabilityValuesList;
  }
  export type WorkerAttributeCapabilityList = WorkerAttributeCapability[];
  export interface WorkerCapabilities {
    /**
     * The worker capabilities amounts on a list of worker capabilities.
     */
    amounts: WorkerAmountCapabilityList;
    /**
     * The worker attribute capabilities in the list of attribute capabilities.
     */
    attributes: WorkerAttributeCapabilityList;
  }
  export type WorkerId = string;
  export type WorkerSearchSummaries = WorkerSearchSummary[];
  export interface WorkerSearchSummary {
    /**
     * The date and time the resource was created.
     */
    createdAt?: CreatedAt;
    /**
     * The user or system that created this resource.
     */
    createdBy?: CreatedBy;
    /**
     * The fleet ID.
     */
    fleetId?: FleetId;
    /**
     * Provides the Amazon EC2 instance properties of the worker host.
     */
    hostProperties?: HostPropertiesResponse;
    /**
     * The status of the worker search.
     */
    status?: WorkerStatus;
    /**
     * The date and time the resource was updated.
     */
    updatedAt?: UpdatedAt;
    /**
     * The user or system that updated this resource.
     */
    updatedBy?: UpdatedBy;
    /**
     * The worker ID.
     */
    workerId?: WorkerId;
  }
  export interface WorkerSessionSummary {
    /**
     * The date and time the resource ended running.
     */
    endedAt?: EndedAt;
    /**
     * The job ID for the job associated with the worker's session.
     */
    jobId: JobId;
    /**
     * The life cycle status for the worker's session.
     */
    lifecycleStatus: SessionLifecycleStatus;
    /**
     * The queue ID for the queue associated to the worker.
     */
    queueId: QueueId;
    /**
     * The session ID for the session action.
     */
    sessionId: SessionId;
    /**
     * The date and time the resource started running.
     */
    startedAt: StartedAt;
    /**
     * The life cycle status 
     */
    targetLifecycleStatus?: SessionLifecycleTargetStatus;
  }
  export type WorkerStatus = "CREATED"|"STARTED"|"STOPPING"|"STOPPED"|"NOT_RESPONDING"|"NOT_COMPATIBLE"|"RUNNING"|"IDLE"|string;
  export type WorkerSummaries = WorkerSummary[];
  export interface WorkerSummary {
    /**
     * The date and time the resource was created.
     */
    createdAt: CreatedAt;
    /**
     * The user or system that created this resource.
     */
    createdBy: CreatedBy;
    /**
     * The farm ID.
     */
    farmId: FarmId;
    /**
     * The fleet ID.
     */
    fleetId: FleetId;
    /**
     * The host properties of the worker.
     */
    hostProperties?: HostPropertiesResponse;
    /**
     * The log configuration for the worker.
     */
    log?: LogConfiguration;
    /**
     * The status of the worker.
     */
    status: WorkerStatus;
    /**
     * The date and time the resource was updated.
     */
    updatedAt?: UpdatedAt;
    /**
     * The user or system that updated this resource.
     */
    updatedBy?: UpdatedBy;
    /**
     * The worker ID.
     */
    workerId: WorkerId;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2023-10-12"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Deadline client.
   */
  export import Types = Deadline;
}
export = Deadline;
