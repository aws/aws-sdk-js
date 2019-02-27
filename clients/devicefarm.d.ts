import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class DeviceFarm extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: DeviceFarm.Types.ClientConfiguration)
  config: Config & DeviceFarm.Types.ClientConfiguration;
  /**
   * Creates a device pool.
   */
  createDevicePool(params: DeviceFarm.Types.CreateDevicePoolRequest, callback?: (err: AWSError, data: DeviceFarm.Types.CreateDevicePoolResult) => void): Request<DeviceFarm.Types.CreateDevicePoolResult, AWSError>;
  /**
   * Creates a device pool.
   */
  createDevicePool(callback?: (err: AWSError, data: DeviceFarm.Types.CreateDevicePoolResult) => void): Request<DeviceFarm.Types.CreateDevicePoolResult, AWSError>;
  /**
   * Creates a profile that can be applied to one or more private fleet device instances.
   */
  createInstanceProfile(params: DeviceFarm.Types.CreateInstanceProfileRequest, callback?: (err: AWSError, data: DeviceFarm.Types.CreateInstanceProfileResult) => void): Request<DeviceFarm.Types.CreateInstanceProfileResult, AWSError>;
  /**
   * Creates a profile that can be applied to one or more private fleet device instances.
   */
  createInstanceProfile(callback?: (err: AWSError, data: DeviceFarm.Types.CreateInstanceProfileResult) => void): Request<DeviceFarm.Types.CreateInstanceProfileResult, AWSError>;
  /**
   * Creates a network profile.
   */
  createNetworkProfile(params: DeviceFarm.Types.CreateNetworkProfileRequest, callback?: (err: AWSError, data: DeviceFarm.Types.CreateNetworkProfileResult) => void): Request<DeviceFarm.Types.CreateNetworkProfileResult, AWSError>;
  /**
   * Creates a network profile.
   */
  createNetworkProfile(callback?: (err: AWSError, data: DeviceFarm.Types.CreateNetworkProfileResult) => void): Request<DeviceFarm.Types.CreateNetworkProfileResult, AWSError>;
  /**
   * Creates a new project.
   */
  createProject(params: DeviceFarm.Types.CreateProjectRequest, callback?: (err: AWSError, data: DeviceFarm.Types.CreateProjectResult) => void): Request<DeviceFarm.Types.CreateProjectResult, AWSError>;
  /**
   * Creates a new project.
   */
  createProject(callback?: (err: AWSError, data: DeviceFarm.Types.CreateProjectResult) => void): Request<DeviceFarm.Types.CreateProjectResult, AWSError>;
  /**
   * Specifies and starts a remote access session.
   */
  createRemoteAccessSession(params: DeviceFarm.Types.CreateRemoteAccessSessionRequest, callback?: (err: AWSError, data: DeviceFarm.Types.CreateRemoteAccessSessionResult) => void): Request<DeviceFarm.Types.CreateRemoteAccessSessionResult, AWSError>;
  /**
   * Specifies and starts a remote access session.
   */
  createRemoteAccessSession(callback?: (err: AWSError, data: DeviceFarm.Types.CreateRemoteAccessSessionResult) => void): Request<DeviceFarm.Types.CreateRemoteAccessSessionResult, AWSError>;
  /**
   * Uploads an app or test scripts.
   */
  createUpload(params: DeviceFarm.Types.CreateUploadRequest, callback?: (err: AWSError, data: DeviceFarm.Types.CreateUploadResult) => void): Request<DeviceFarm.Types.CreateUploadResult, AWSError>;
  /**
   * Uploads an app or test scripts.
   */
  createUpload(callback?: (err: AWSError, data: DeviceFarm.Types.CreateUploadResult) => void): Request<DeviceFarm.Types.CreateUploadResult, AWSError>;
  /**
   * Creates a configuration record in Device Farm for your Amazon Virtual Private Cloud (VPC) endpoint.
   */
  createVPCEConfiguration(params: DeviceFarm.Types.CreateVPCEConfigurationRequest, callback?: (err: AWSError, data: DeviceFarm.Types.CreateVPCEConfigurationResult) => void): Request<DeviceFarm.Types.CreateVPCEConfigurationResult, AWSError>;
  /**
   * Creates a configuration record in Device Farm for your Amazon Virtual Private Cloud (VPC) endpoint.
   */
  createVPCEConfiguration(callback?: (err: AWSError, data: DeviceFarm.Types.CreateVPCEConfigurationResult) => void): Request<DeviceFarm.Types.CreateVPCEConfigurationResult, AWSError>;
  /**
   * Deletes a device pool given the pool ARN. Does not allow deletion of curated pools owned by the system.
   */
  deleteDevicePool(params: DeviceFarm.Types.DeleteDevicePoolRequest, callback?: (err: AWSError, data: DeviceFarm.Types.DeleteDevicePoolResult) => void): Request<DeviceFarm.Types.DeleteDevicePoolResult, AWSError>;
  /**
   * Deletes a device pool given the pool ARN. Does not allow deletion of curated pools owned by the system.
   */
  deleteDevicePool(callback?: (err: AWSError, data: DeviceFarm.Types.DeleteDevicePoolResult) => void): Request<DeviceFarm.Types.DeleteDevicePoolResult, AWSError>;
  /**
   * Deletes a profile that can be applied to one or more private device instances.
   */
  deleteInstanceProfile(params: DeviceFarm.Types.DeleteInstanceProfileRequest, callback?: (err: AWSError, data: DeviceFarm.Types.DeleteInstanceProfileResult) => void): Request<DeviceFarm.Types.DeleteInstanceProfileResult, AWSError>;
  /**
   * Deletes a profile that can be applied to one or more private device instances.
   */
  deleteInstanceProfile(callback?: (err: AWSError, data: DeviceFarm.Types.DeleteInstanceProfileResult) => void): Request<DeviceFarm.Types.DeleteInstanceProfileResult, AWSError>;
  /**
   * Deletes a network profile.
   */
  deleteNetworkProfile(params: DeviceFarm.Types.DeleteNetworkProfileRequest, callback?: (err: AWSError, data: DeviceFarm.Types.DeleteNetworkProfileResult) => void): Request<DeviceFarm.Types.DeleteNetworkProfileResult, AWSError>;
  /**
   * Deletes a network profile.
   */
  deleteNetworkProfile(callback?: (err: AWSError, data: DeviceFarm.Types.DeleteNetworkProfileResult) => void): Request<DeviceFarm.Types.DeleteNetworkProfileResult, AWSError>;
  /**
   * Deletes an AWS Device Farm project, given the project ARN.  Note Deleting this resource does not stop an in-progress run.
   */
  deleteProject(params: DeviceFarm.Types.DeleteProjectRequest, callback?: (err: AWSError, data: DeviceFarm.Types.DeleteProjectResult) => void): Request<DeviceFarm.Types.DeleteProjectResult, AWSError>;
  /**
   * Deletes an AWS Device Farm project, given the project ARN.  Note Deleting this resource does not stop an in-progress run.
   */
  deleteProject(callback?: (err: AWSError, data: DeviceFarm.Types.DeleteProjectResult) => void): Request<DeviceFarm.Types.DeleteProjectResult, AWSError>;
  /**
   * Deletes a completed remote access session and its results.
   */
  deleteRemoteAccessSession(params: DeviceFarm.Types.DeleteRemoteAccessSessionRequest, callback?: (err: AWSError, data: DeviceFarm.Types.DeleteRemoteAccessSessionResult) => void): Request<DeviceFarm.Types.DeleteRemoteAccessSessionResult, AWSError>;
  /**
   * Deletes a completed remote access session and its results.
   */
  deleteRemoteAccessSession(callback?: (err: AWSError, data: DeviceFarm.Types.DeleteRemoteAccessSessionResult) => void): Request<DeviceFarm.Types.DeleteRemoteAccessSessionResult, AWSError>;
  /**
   * Deletes the run, given the run ARN.  Note Deleting this resource does not stop an in-progress run.
   */
  deleteRun(params: DeviceFarm.Types.DeleteRunRequest, callback?: (err: AWSError, data: DeviceFarm.Types.DeleteRunResult) => void): Request<DeviceFarm.Types.DeleteRunResult, AWSError>;
  /**
   * Deletes the run, given the run ARN.  Note Deleting this resource does not stop an in-progress run.
   */
  deleteRun(callback?: (err: AWSError, data: DeviceFarm.Types.DeleteRunResult) => void): Request<DeviceFarm.Types.DeleteRunResult, AWSError>;
  /**
   * Deletes an upload given the upload ARN.
   */
  deleteUpload(params: DeviceFarm.Types.DeleteUploadRequest, callback?: (err: AWSError, data: DeviceFarm.Types.DeleteUploadResult) => void): Request<DeviceFarm.Types.DeleteUploadResult, AWSError>;
  /**
   * Deletes an upload given the upload ARN.
   */
  deleteUpload(callback?: (err: AWSError, data: DeviceFarm.Types.DeleteUploadResult) => void): Request<DeviceFarm.Types.DeleteUploadResult, AWSError>;
  /**
   * Deletes a configuration for your Amazon Virtual Private Cloud (VPC) endpoint.
   */
  deleteVPCEConfiguration(params: DeviceFarm.Types.DeleteVPCEConfigurationRequest, callback?: (err: AWSError, data: DeviceFarm.Types.DeleteVPCEConfigurationResult) => void): Request<DeviceFarm.Types.DeleteVPCEConfigurationResult, AWSError>;
  /**
   * Deletes a configuration for your Amazon Virtual Private Cloud (VPC) endpoint.
   */
  deleteVPCEConfiguration(callback?: (err: AWSError, data: DeviceFarm.Types.DeleteVPCEConfigurationResult) => void): Request<DeviceFarm.Types.DeleteVPCEConfigurationResult, AWSError>;
  /**
   * Returns the number of unmetered iOS and/or unmetered Android devices that have been purchased by the account.
   */
  getAccountSettings(params: DeviceFarm.Types.GetAccountSettingsRequest, callback?: (err: AWSError, data: DeviceFarm.Types.GetAccountSettingsResult) => void): Request<DeviceFarm.Types.GetAccountSettingsResult, AWSError>;
  /**
   * Returns the number of unmetered iOS and/or unmetered Android devices that have been purchased by the account.
   */
  getAccountSettings(callback?: (err: AWSError, data: DeviceFarm.Types.GetAccountSettingsResult) => void): Request<DeviceFarm.Types.GetAccountSettingsResult, AWSError>;
  /**
   * Gets information about a unique device type.
   */
  getDevice(params: DeviceFarm.Types.GetDeviceRequest, callback?: (err: AWSError, data: DeviceFarm.Types.GetDeviceResult) => void): Request<DeviceFarm.Types.GetDeviceResult, AWSError>;
  /**
   * Gets information about a unique device type.
   */
  getDevice(callback?: (err: AWSError, data: DeviceFarm.Types.GetDeviceResult) => void): Request<DeviceFarm.Types.GetDeviceResult, AWSError>;
  /**
   * Returns information about a device instance belonging to a private device fleet.
   */
  getDeviceInstance(params: DeviceFarm.Types.GetDeviceInstanceRequest, callback?: (err: AWSError, data: DeviceFarm.Types.GetDeviceInstanceResult) => void): Request<DeviceFarm.Types.GetDeviceInstanceResult, AWSError>;
  /**
   * Returns information about a device instance belonging to a private device fleet.
   */
  getDeviceInstance(callback?: (err: AWSError, data: DeviceFarm.Types.GetDeviceInstanceResult) => void): Request<DeviceFarm.Types.GetDeviceInstanceResult, AWSError>;
  /**
   * Gets information about a device pool.
   */
  getDevicePool(params: DeviceFarm.Types.GetDevicePoolRequest, callback?: (err: AWSError, data: DeviceFarm.Types.GetDevicePoolResult) => void): Request<DeviceFarm.Types.GetDevicePoolResult, AWSError>;
  /**
   * Gets information about a device pool.
   */
  getDevicePool(callback?: (err: AWSError, data: DeviceFarm.Types.GetDevicePoolResult) => void): Request<DeviceFarm.Types.GetDevicePoolResult, AWSError>;
  /**
   * Gets information about compatibility with a device pool.
   */
  getDevicePoolCompatibility(params: DeviceFarm.Types.GetDevicePoolCompatibilityRequest, callback?: (err: AWSError, data: DeviceFarm.Types.GetDevicePoolCompatibilityResult) => void): Request<DeviceFarm.Types.GetDevicePoolCompatibilityResult, AWSError>;
  /**
   * Gets information about compatibility with a device pool.
   */
  getDevicePoolCompatibility(callback?: (err: AWSError, data: DeviceFarm.Types.GetDevicePoolCompatibilityResult) => void): Request<DeviceFarm.Types.GetDevicePoolCompatibilityResult, AWSError>;
  /**
   * Returns information about the specified instance profile.
   */
  getInstanceProfile(params: DeviceFarm.Types.GetInstanceProfileRequest, callback?: (err: AWSError, data: DeviceFarm.Types.GetInstanceProfileResult) => void): Request<DeviceFarm.Types.GetInstanceProfileResult, AWSError>;
  /**
   * Returns information about the specified instance profile.
   */
  getInstanceProfile(callback?: (err: AWSError, data: DeviceFarm.Types.GetInstanceProfileResult) => void): Request<DeviceFarm.Types.GetInstanceProfileResult, AWSError>;
  /**
   * Gets information about a job.
   */
  getJob(params: DeviceFarm.Types.GetJobRequest, callback?: (err: AWSError, data: DeviceFarm.Types.GetJobResult) => void): Request<DeviceFarm.Types.GetJobResult, AWSError>;
  /**
   * Gets information about a job.
   */
  getJob(callback?: (err: AWSError, data: DeviceFarm.Types.GetJobResult) => void): Request<DeviceFarm.Types.GetJobResult, AWSError>;
  /**
   * Returns information about a network profile.
   */
  getNetworkProfile(params: DeviceFarm.Types.GetNetworkProfileRequest, callback?: (err: AWSError, data: DeviceFarm.Types.GetNetworkProfileResult) => void): Request<DeviceFarm.Types.GetNetworkProfileResult, AWSError>;
  /**
   * Returns information about a network profile.
   */
  getNetworkProfile(callback?: (err: AWSError, data: DeviceFarm.Types.GetNetworkProfileResult) => void): Request<DeviceFarm.Types.GetNetworkProfileResult, AWSError>;
  /**
   * Gets the current status and future status of all offerings purchased by an AWS account. The response indicates how many offerings are currently available and the offerings that will be available in the next period. The API returns a NotEligible error if the user is not permitted to invoke the operation. Please contact aws-devicefarm-support@amazon.com if you believe that you should be able to invoke this operation.
   */
  getOfferingStatus(params: DeviceFarm.Types.GetOfferingStatusRequest, callback?: (err: AWSError, data: DeviceFarm.Types.GetOfferingStatusResult) => void): Request<DeviceFarm.Types.GetOfferingStatusResult, AWSError>;
  /**
   * Gets the current status and future status of all offerings purchased by an AWS account. The response indicates how many offerings are currently available and the offerings that will be available in the next period. The API returns a NotEligible error if the user is not permitted to invoke the operation. Please contact aws-devicefarm-support@amazon.com if you believe that you should be able to invoke this operation.
   */
  getOfferingStatus(callback?: (err: AWSError, data: DeviceFarm.Types.GetOfferingStatusResult) => void): Request<DeviceFarm.Types.GetOfferingStatusResult, AWSError>;
  /**
   * Gets information about a project.
   */
  getProject(params: DeviceFarm.Types.GetProjectRequest, callback?: (err: AWSError, data: DeviceFarm.Types.GetProjectResult) => void): Request<DeviceFarm.Types.GetProjectResult, AWSError>;
  /**
   * Gets information about a project.
   */
  getProject(callback?: (err: AWSError, data: DeviceFarm.Types.GetProjectResult) => void): Request<DeviceFarm.Types.GetProjectResult, AWSError>;
  /**
   * Returns a link to a currently running remote access session.
   */
  getRemoteAccessSession(params: DeviceFarm.Types.GetRemoteAccessSessionRequest, callback?: (err: AWSError, data: DeviceFarm.Types.GetRemoteAccessSessionResult) => void): Request<DeviceFarm.Types.GetRemoteAccessSessionResult, AWSError>;
  /**
   * Returns a link to a currently running remote access session.
   */
  getRemoteAccessSession(callback?: (err: AWSError, data: DeviceFarm.Types.GetRemoteAccessSessionResult) => void): Request<DeviceFarm.Types.GetRemoteAccessSessionResult, AWSError>;
  /**
   * Gets information about a run.
   */
  getRun(params: DeviceFarm.Types.GetRunRequest, callback?: (err: AWSError, data: DeviceFarm.Types.GetRunResult) => void): Request<DeviceFarm.Types.GetRunResult, AWSError>;
  /**
   * Gets information about a run.
   */
  getRun(callback?: (err: AWSError, data: DeviceFarm.Types.GetRunResult) => void): Request<DeviceFarm.Types.GetRunResult, AWSError>;
  /**
   * Gets information about a suite.
   */
  getSuite(params: DeviceFarm.Types.GetSuiteRequest, callback?: (err: AWSError, data: DeviceFarm.Types.GetSuiteResult) => void): Request<DeviceFarm.Types.GetSuiteResult, AWSError>;
  /**
   * Gets information about a suite.
   */
  getSuite(callback?: (err: AWSError, data: DeviceFarm.Types.GetSuiteResult) => void): Request<DeviceFarm.Types.GetSuiteResult, AWSError>;
  /**
   * Gets information about a test.
   */
  getTest(params: DeviceFarm.Types.GetTestRequest, callback?: (err: AWSError, data: DeviceFarm.Types.GetTestResult) => void): Request<DeviceFarm.Types.GetTestResult, AWSError>;
  /**
   * Gets information about a test.
   */
  getTest(callback?: (err: AWSError, data: DeviceFarm.Types.GetTestResult) => void): Request<DeviceFarm.Types.GetTestResult, AWSError>;
  /**
   * Gets information about an upload.
   */
  getUpload(params: DeviceFarm.Types.GetUploadRequest, callback?: (err: AWSError, data: DeviceFarm.Types.GetUploadResult) => void): Request<DeviceFarm.Types.GetUploadResult, AWSError>;
  /**
   * Gets information about an upload.
   */
  getUpload(callback?: (err: AWSError, data: DeviceFarm.Types.GetUploadResult) => void): Request<DeviceFarm.Types.GetUploadResult, AWSError>;
  /**
   * Returns information about the configuration settings for your Amazon Virtual Private Cloud (VPC) endpoint.
   */
  getVPCEConfiguration(params: DeviceFarm.Types.GetVPCEConfigurationRequest, callback?: (err: AWSError, data: DeviceFarm.Types.GetVPCEConfigurationResult) => void): Request<DeviceFarm.Types.GetVPCEConfigurationResult, AWSError>;
  /**
   * Returns information about the configuration settings for your Amazon Virtual Private Cloud (VPC) endpoint.
   */
  getVPCEConfiguration(callback?: (err: AWSError, data: DeviceFarm.Types.GetVPCEConfigurationResult) => void): Request<DeviceFarm.Types.GetVPCEConfigurationResult, AWSError>;
  /**
   * Installs an application to the device in a remote access session. For Android applications, the file must be in .apk format. For iOS applications, the file must be in .ipa format.
   */
  installToRemoteAccessSession(params: DeviceFarm.Types.InstallToRemoteAccessSessionRequest, callback?: (err: AWSError, data: DeviceFarm.Types.InstallToRemoteAccessSessionResult) => void): Request<DeviceFarm.Types.InstallToRemoteAccessSessionResult, AWSError>;
  /**
   * Installs an application to the device in a remote access session. For Android applications, the file must be in .apk format. For iOS applications, the file must be in .ipa format.
   */
  installToRemoteAccessSession(callback?: (err: AWSError, data: DeviceFarm.Types.InstallToRemoteAccessSessionResult) => void): Request<DeviceFarm.Types.InstallToRemoteAccessSessionResult, AWSError>;
  /**
   * Gets information about artifacts.
   */
  listArtifacts(params: DeviceFarm.Types.ListArtifactsRequest, callback?: (err: AWSError, data: DeviceFarm.Types.ListArtifactsResult) => void): Request<DeviceFarm.Types.ListArtifactsResult, AWSError>;
  /**
   * Gets information about artifacts.
   */
  listArtifacts(callback?: (err: AWSError, data: DeviceFarm.Types.ListArtifactsResult) => void): Request<DeviceFarm.Types.ListArtifactsResult, AWSError>;
  /**
   * Returns information about the private device instances associated with one or more AWS accounts.
   */
  listDeviceInstances(params: DeviceFarm.Types.ListDeviceInstancesRequest, callback?: (err: AWSError, data: DeviceFarm.Types.ListDeviceInstancesResult) => void): Request<DeviceFarm.Types.ListDeviceInstancesResult, AWSError>;
  /**
   * Returns information about the private device instances associated with one or more AWS accounts.
   */
  listDeviceInstances(callback?: (err: AWSError, data: DeviceFarm.Types.ListDeviceInstancesResult) => void): Request<DeviceFarm.Types.ListDeviceInstancesResult, AWSError>;
  /**
   * Gets information about device pools.
   */
  listDevicePools(params: DeviceFarm.Types.ListDevicePoolsRequest, callback?: (err: AWSError, data: DeviceFarm.Types.ListDevicePoolsResult) => void): Request<DeviceFarm.Types.ListDevicePoolsResult, AWSError>;
  /**
   * Gets information about device pools.
   */
  listDevicePools(callback?: (err: AWSError, data: DeviceFarm.Types.ListDevicePoolsResult) => void): Request<DeviceFarm.Types.ListDevicePoolsResult, AWSError>;
  /**
   * Gets information about unique device types.
   */
  listDevices(params: DeviceFarm.Types.ListDevicesRequest, callback?: (err: AWSError, data: DeviceFarm.Types.ListDevicesResult) => void): Request<DeviceFarm.Types.ListDevicesResult, AWSError>;
  /**
   * Gets information about unique device types.
   */
  listDevices(callback?: (err: AWSError, data: DeviceFarm.Types.ListDevicesResult) => void): Request<DeviceFarm.Types.ListDevicesResult, AWSError>;
  /**
   * Returns information about all the instance profiles in an AWS account.
   */
  listInstanceProfiles(params: DeviceFarm.Types.ListInstanceProfilesRequest, callback?: (err: AWSError, data: DeviceFarm.Types.ListInstanceProfilesResult) => void): Request<DeviceFarm.Types.ListInstanceProfilesResult, AWSError>;
  /**
   * Returns information about all the instance profiles in an AWS account.
   */
  listInstanceProfiles(callback?: (err: AWSError, data: DeviceFarm.Types.ListInstanceProfilesResult) => void): Request<DeviceFarm.Types.ListInstanceProfilesResult, AWSError>;
  /**
   * Gets information about jobs for a given test run.
   */
  listJobs(params: DeviceFarm.Types.ListJobsRequest, callback?: (err: AWSError, data: DeviceFarm.Types.ListJobsResult) => void): Request<DeviceFarm.Types.ListJobsResult, AWSError>;
  /**
   * Gets information about jobs for a given test run.
   */
  listJobs(callback?: (err: AWSError, data: DeviceFarm.Types.ListJobsResult) => void): Request<DeviceFarm.Types.ListJobsResult, AWSError>;
  /**
   * Returns the list of available network profiles.
   */
  listNetworkProfiles(params: DeviceFarm.Types.ListNetworkProfilesRequest, callback?: (err: AWSError, data: DeviceFarm.Types.ListNetworkProfilesResult) => void): Request<DeviceFarm.Types.ListNetworkProfilesResult, AWSError>;
  /**
   * Returns the list of available network profiles.
   */
  listNetworkProfiles(callback?: (err: AWSError, data: DeviceFarm.Types.ListNetworkProfilesResult) => void): Request<DeviceFarm.Types.ListNetworkProfilesResult, AWSError>;
  /**
   * Returns a list of offering promotions. Each offering promotion record contains the ID and description of the promotion. The API returns a NotEligible error if the caller is not permitted to invoke the operation. Contact aws-devicefarm-support@amazon.com if you believe that you should be able to invoke this operation.
   */
  listOfferingPromotions(params: DeviceFarm.Types.ListOfferingPromotionsRequest, callback?: (err: AWSError, data: DeviceFarm.Types.ListOfferingPromotionsResult) => void): Request<DeviceFarm.Types.ListOfferingPromotionsResult, AWSError>;
  /**
   * Returns a list of offering promotions. Each offering promotion record contains the ID and description of the promotion. The API returns a NotEligible error if the caller is not permitted to invoke the operation. Contact aws-devicefarm-support@amazon.com if you believe that you should be able to invoke this operation.
   */
  listOfferingPromotions(callback?: (err: AWSError, data: DeviceFarm.Types.ListOfferingPromotionsResult) => void): Request<DeviceFarm.Types.ListOfferingPromotionsResult, AWSError>;
  /**
   * Returns a list of all historical purchases, renewals, and system renewal transactions for an AWS account. The list is paginated and ordered by a descending timestamp (most recent transactions are first). The API returns a NotEligible error if the user is not permitted to invoke the operation. Please contact aws-devicefarm-support@amazon.com if you believe that you should be able to invoke this operation.
   */
  listOfferingTransactions(params: DeviceFarm.Types.ListOfferingTransactionsRequest, callback?: (err: AWSError, data: DeviceFarm.Types.ListOfferingTransactionsResult) => void): Request<DeviceFarm.Types.ListOfferingTransactionsResult, AWSError>;
  /**
   * Returns a list of all historical purchases, renewals, and system renewal transactions for an AWS account. The list is paginated and ordered by a descending timestamp (most recent transactions are first). The API returns a NotEligible error if the user is not permitted to invoke the operation. Please contact aws-devicefarm-support@amazon.com if you believe that you should be able to invoke this operation.
   */
  listOfferingTransactions(callback?: (err: AWSError, data: DeviceFarm.Types.ListOfferingTransactionsResult) => void): Request<DeviceFarm.Types.ListOfferingTransactionsResult, AWSError>;
  /**
   * Returns a list of products or offerings that the user can manage through the API. Each offering record indicates the recurring price per unit and the frequency for that offering. The API returns a NotEligible error if the user is not permitted to invoke the operation. Please contact aws-devicefarm-support@amazon.com if you believe that you should be able to invoke this operation.
   */
  listOfferings(params: DeviceFarm.Types.ListOfferingsRequest, callback?: (err: AWSError, data: DeviceFarm.Types.ListOfferingsResult) => void): Request<DeviceFarm.Types.ListOfferingsResult, AWSError>;
  /**
   * Returns a list of products or offerings that the user can manage through the API. Each offering record indicates the recurring price per unit and the frequency for that offering. The API returns a NotEligible error if the user is not permitted to invoke the operation. Please contact aws-devicefarm-support@amazon.com if you believe that you should be able to invoke this operation.
   */
  listOfferings(callback?: (err: AWSError, data: DeviceFarm.Types.ListOfferingsResult) => void): Request<DeviceFarm.Types.ListOfferingsResult, AWSError>;
  /**
   * Gets information about projects.
   */
  listProjects(params: DeviceFarm.Types.ListProjectsRequest, callback?: (err: AWSError, data: DeviceFarm.Types.ListProjectsResult) => void): Request<DeviceFarm.Types.ListProjectsResult, AWSError>;
  /**
   * Gets information about projects.
   */
  listProjects(callback?: (err: AWSError, data: DeviceFarm.Types.ListProjectsResult) => void): Request<DeviceFarm.Types.ListProjectsResult, AWSError>;
  /**
   * Returns a list of all currently running remote access sessions.
   */
  listRemoteAccessSessions(params: DeviceFarm.Types.ListRemoteAccessSessionsRequest, callback?: (err: AWSError, data: DeviceFarm.Types.ListRemoteAccessSessionsResult) => void): Request<DeviceFarm.Types.ListRemoteAccessSessionsResult, AWSError>;
  /**
   * Returns a list of all currently running remote access sessions.
   */
  listRemoteAccessSessions(callback?: (err: AWSError, data: DeviceFarm.Types.ListRemoteAccessSessionsResult) => void): Request<DeviceFarm.Types.ListRemoteAccessSessionsResult, AWSError>;
  /**
   * Gets information about runs, given an AWS Device Farm project ARN.
   */
  listRuns(params: DeviceFarm.Types.ListRunsRequest, callback?: (err: AWSError, data: DeviceFarm.Types.ListRunsResult) => void): Request<DeviceFarm.Types.ListRunsResult, AWSError>;
  /**
   * Gets information about runs, given an AWS Device Farm project ARN.
   */
  listRuns(callback?: (err: AWSError, data: DeviceFarm.Types.ListRunsResult) => void): Request<DeviceFarm.Types.ListRunsResult, AWSError>;
  /**
   * Gets information about samples, given an AWS Device Farm job ARN.
   */
  listSamples(params: DeviceFarm.Types.ListSamplesRequest, callback?: (err: AWSError, data: DeviceFarm.Types.ListSamplesResult) => void): Request<DeviceFarm.Types.ListSamplesResult, AWSError>;
  /**
   * Gets information about samples, given an AWS Device Farm job ARN.
   */
  listSamples(callback?: (err: AWSError, data: DeviceFarm.Types.ListSamplesResult) => void): Request<DeviceFarm.Types.ListSamplesResult, AWSError>;
  /**
   * Gets information about test suites for a given job.
   */
  listSuites(params: DeviceFarm.Types.ListSuitesRequest, callback?: (err: AWSError, data: DeviceFarm.Types.ListSuitesResult) => void): Request<DeviceFarm.Types.ListSuitesResult, AWSError>;
  /**
   * Gets information about test suites for a given job.
   */
  listSuites(callback?: (err: AWSError, data: DeviceFarm.Types.ListSuitesResult) => void): Request<DeviceFarm.Types.ListSuitesResult, AWSError>;
  /**
   * Gets information about tests in a given test suite.
   */
  listTests(params: DeviceFarm.Types.ListTestsRequest, callback?: (err: AWSError, data: DeviceFarm.Types.ListTestsResult) => void): Request<DeviceFarm.Types.ListTestsResult, AWSError>;
  /**
   * Gets information about tests in a given test suite.
   */
  listTests(callback?: (err: AWSError, data: DeviceFarm.Types.ListTestsResult) => void): Request<DeviceFarm.Types.ListTestsResult, AWSError>;
  /**
   * Gets information about unique problems.
   */
  listUniqueProblems(params: DeviceFarm.Types.ListUniqueProblemsRequest, callback?: (err: AWSError, data: DeviceFarm.Types.ListUniqueProblemsResult) => void): Request<DeviceFarm.Types.ListUniqueProblemsResult, AWSError>;
  /**
   * Gets information about unique problems.
   */
  listUniqueProblems(callback?: (err: AWSError, data: DeviceFarm.Types.ListUniqueProblemsResult) => void): Request<DeviceFarm.Types.ListUniqueProblemsResult, AWSError>;
  /**
   * Gets information about uploads, given an AWS Device Farm project ARN.
   */
  listUploads(params: DeviceFarm.Types.ListUploadsRequest, callback?: (err: AWSError, data: DeviceFarm.Types.ListUploadsResult) => void): Request<DeviceFarm.Types.ListUploadsResult, AWSError>;
  /**
   * Gets information about uploads, given an AWS Device Farm project ARN.
   */
  listUploads(callback?: (err: AWSError, data: DeviceFarm.Types.ListUploadsResult) => void): Request<DeviceFarm.Types.ListUploadsResult, AWSError>;
  /**
   * Returns information about all Amazon Virtual Private Cloud (VPC) endpoint configurations in the AWS account.
   */
  listVPCEConfigurations(params: DeviceFarm.Types.ListVPCEConfigurationsRequest, callback?: (err: AWSError, data: DeviceFarm.Types.ListVPCEConfigurationsResult) => void): Request<DeviceFarm.Types.ListVPCEConfigurationsResult, AWSError>;
  /**
   * Returns information about all Amazon Virtual Private Cloud (VPC) endpoint configurations in the AWS account.
   */
  listVPCEConfigurations(callback?: (err: AWSError, data: DeviceFarm.Types.ListVPCEConfigurationsResult) => void): Request<DeviceFarm.Types.ListVPCEConfigurationsResult, AWSError>;
  /**
   * Immediately purchases offerings for an AWS account. Offerings renew with the latest total purchased quantity for an offering, unless the renewal was overridden. The API returns a NotEligible error if the user is not permitted to invoke the operation. Please contact aws-devicefarm-support@amazon.com if you believe that you should be able to invoke this operation.
   */
  purchaseOffering(params: DeviceFarm.Types.PurchaseOfferingRequest, callback?: (err: AWSError, data: DeviceFarm.Types.PurchaseOfferingResult) => void): Request<DeviceFarm.Types.PurchaseOfferingResult, AWSError>;
  /**
   * Immediately purchases offerings for an AWS account. Offerings renew with the latest total purchased quantity for an offering, unless the renewal was overridden. The API returns a NotEligible error if the user is not permitted to invoke the operation. Please contact aws-devicefarm-support@amazon.com if you believe that you should be able to invoke this operation.
   */
  purchaseOffering(callback?: (err: AWSError, data: DeviceFarm.Types.PurchaseOfferingResult) => void): Request<DeviceFarm.Types.PurchaseOfferingResult, AWSError>;
  /**
   * Explicitly sets the quantity of devices to renew for an offering, starting from the effectiveDate of the next period. The API returns a NotEligible error if the user is not permitted to invoke the operation. Please contact aws-devicefarm-support@amazon.com if you believe that you should be able to invoke this operation.
   */
  renewOffering(params: DeviceFarm.Types.RenewOfferingRequest, callback?: (err: AWSError, data: DeviceFarm.Types.RenewOfferingResult) => void): Request<DeviceFarm.Types.RenewOfferingResult, AWSError>;
  /**
   * Explicitly sets the quantity of devices to renew for an offering, starting from the effectiveDate of the next period. The API returns a NotEligible error if the user is not permitted to invoke the operation. Please contact aws-devicefarm-support@amazon.com if you believe that you should be able to invoke this operation.
   */
  renewOffering(callback?: (err: AWSError, data: DeviceFarm.Types.RenewOfferingResult) => void): Request<DeviceFarm.Types.RenewOfferingResult, AWSError>;
  /**
   * Schedules a run.
   */
  scheduleRun(params: DeviceFarm.Types.ScheduleRunRequest, callback?: (err: AWSError, data: DeviceFarm.Types.ScheduleRunResult) => void): Request<DeviceFarm.Types.ScheduleRunResult, AWSError>;
  /**
   * Schedules a run.
   */
  scheduleRun(callback?: (err: AWSError, data: DeviceFarm.Types.ScheduleRunResult) => void): Request<DeviceFarm.Types.ScheduleRunResult, AWSError>;
  /**
   * Initiates a stop request for the current job. AWS Device Farm will immediately stop the job on the device where tests have not started executing, and you will not be billed for this device. On the device where tests have started executing, Setup Suite and Teardown Suite tests will run to completion before stopping execution on the device. You will be billed for Setup, Teardown, and any tests that were in progress or already completed.
   */
  stopJob(params: DeviceFarm.Types.StopJobRequest, callback?: (err: AWSError, data: DeviceFarm.Types.StopJobResult) => void): Request<DeviceFarm.Types.StopJobResult, AWSError>;
  /**
   * Initiates a stop request for the current job. AWS Device Farm will immediately stop the job on the device where tests have not started executing, and you will not be billed for this device. On the device where tests have started executing, Setup Suite and Teardown Suite tests will run to completion before stopping execution on the device. You will be billed for Setup, Teardown, and any tests that were in progress or already completed.
   */
  stopJob(callback?: (err: AWSError, data: DeviceFarm.Types.StopJobResult) => void): Request<DeviceFarm.Types.StopJobResult, AWSError>;
  /**
   * Ends a specified remote access session.
   */
  stopRemoteAccessSession(params: DeviceFarm.Types.StopRemoteAccessSessionRequest, callback?: (err: AWSError, data: DeviceFarm.Types.StopRemoteAccessSessionResult) => void): Request<DeviceFarm.Types.StopRemoteAccessSessionResult, AWSError>;
  /**
   * Ends a specified remote access session.
   */
  stopRemoteAccessSession(callback?: (err: AWSError, data: DeviceFarm.Types.StopRemoteAccessSessionResult) => void): Request<DeviceFarm.Types.StopRemoteAccessSessionResult, AWSError>;
  /**
   * Initiates a stop request for the current test run. AWS Device Farm will immediately stop the run on devices where tests have not started executing, and you will not be billed for these devices. On devices where tests have started executing, Setup Suite and Teardown Suite tests will run to completion before stopping execution on those devices. You will be billed for Setup, Teardown, and any tests that were in progress or already completed.
   */
  stopRun(params: DeviceFarm.Types.StopRunRequest, callback?: (err: AWSError, data: DeviceFarm.Types.StopRunResult) => void): Request<DeviceFarm.Types.StopRunResult, AWSError>;
  /**
   * Initiates a stop request for the current test run. AWS Device Farm will immediately stop the run on devices where tests have not started executing, and you will not be billed for these devices. On devices where tests have started executing, Setup Suite and Teardown Suite tests will run to completion before stopping execution on those devices. You will be billed for Setup, Teardown, and any tests that were in progress or already completed.
   */
  stopRun(callback?: (err: AWSError, data: DeviceFarm.Types.StopRunResult) => void): Request<DeviceFarm.Types.StopRunResult, AWSError>;
  /**
   * Updates information about an existing private device instance.
   */
  updateDeviceInstance(params: DeviceFarm.Types.UpdateDeviceInstanceRequest, callback?: (err: AWSError, data: DeviceFarm.Types.UpdateDeviceInstanceResult) => void): Request<DeviceFarm.Types.UpdateDeviceInstanceResult, AWSError>;
  /**
   * Updates information about an existing private device instance.
   */
  updateDeviceInstance(callback?: (err: AWSError, data: DeviceFarm.Types.UpdateDeviceInstanceResult) => void): Request<DeviceFarm.Types.UpdateDeviceInstanceResult, AWSError>;
  /**
   * Modifies the name, description, and rules in a device pool given the attributes and the pool ARN. Rule updates are all-or-nothing, meaning they can only be updated as a whole (or not at all).
   */
  updateDevicePool(params: DeviceFarm.Types.UpdateDevicePoolRequest, callback?: (err: AWSError, data: DeviceFarm.Types.UpdateDevicePoolResult) => void): Request<DeviceFarm.Types.UpdateDevicePoolResult, AWSError>;
  /**
   * Modifies the name, description, and rules in a device pool given the attributes and the pool ARN. Rule updates are all-or-nothing, meaning they can only be updated as a whole (or not at all).
   */
  updateDevicePool(callback?: (err: AWSError, data: DeviceFarm.Types.UpdateDevicePoolResult) => void): Request<DeviceFarm.Types.UpdateDevicePoolResult, AWSError>;
  /**
   * Updates information about an existing private device instance profile.
   */
  updateInstanceProfile(params: DeviceFarm.Types.UpdateInstanceProfileRequest, callback?: (err: AWSError, data: DeviceFarm.Types.UpdateInstanceProfileResult) => void): Request<DeviceFarm.Types.UpdateInstanceProfileResult, AWSError>;
  /**
   * Updates information about an existing private device instance profile.
   */
  updateInstanceProfile(callback?: (err: AWSError, data: DeviceFarm.Types.UpdateInstanceProfileResult) => void): Request<DeviceFarm.Types.UpdateInstanceProfileResult, AWSError>;
  /**
   * Updates the network profile with specific settings.
   */
  updateNetworkProfile(params: DeviceFarm.Types.UpdateNetworkProfileRequest, callback?: (err: AWSError, data: DeviceFarm.Types.UpdateNetworkProfileResult) => void): Request<DeviceFarm.Types.UpdateNetworkProfileResult, AWSError>;
  /**
   * Updates the network profile with specific settings.
   */
  updateNetworkProfile(callback?: (err: AWSError, data: DeviceFarm.Types.UpdateNetworkProfileResult) => void): Request<DeviceFarm.Types.UpdateNetworkProfileResult, AWSError>;
  /**
   * Modifies the specified project name, given the project ARN and a new name.
   */
  updateProject(params: DeviceFarm.Types.UpdateProjectRequest, callback?: (err: AWSError, data: DeviceFarm.Types.UpdateProjectResult) => void): Request<DeviceFarm.Types.UpdateProjectResult, AWSError>;
  /**
   * Modifies the specified project name, given the project ARN and a new name.
   */
  updateProject(callback?: (err: AWSError, data: DeviceFarm.Types.UpdateProjectResult) => void): Request<DeviceFarm.Types.UpdateProjectResult, AWSError>;
  /**
   * Update an uploaded test specification (test spec).
   */
  updateUpload(params: DeviceFarm.Types.UpdateUploadRequest, callback?: (err: AWSError, data: DeviceFarm.Types.UpdateUploadResult) => void): Request<DeviceFarm.Types.UpdateUploadResult, AWSError>;
  /**
   * Update an uploaded test specification (test spec).
   */
  updateUpload(callback?: (err: AWSError, data: DeviceFarm.Types.UpdateUploadResult) => void): Request<DeviceFarm.Types.UpdateUploadResult, AWSError>;
  /**
   * Updates information about an existing Amazon Virtual Private Cloud (VPC) endpoint configuration.
   */
  updateVPCEConfiguration(params: DeviceFarm.Types.UpdateVPCEConfigurationRequest, callback?: (err: AWSError, data: DeviceFarm.Types.UpdateVPCEConfigurationResult) => void): Request<DeviceFarm.Types.UpdateVPCEConfigurationResult, AWSError>;
  /**
   * Updates information about an existing Amazon Virtual Private Cloud (VPC) endpoint configuration.
   */
  updateVPCEConfiguration(callback?: (err: AWSError, data: DeviceFarm.Types.UpdateVPCEConfigurationResult) => void): Request<DeviceFarm.Types.UpdateVPCEConfigurationResult, AWSError>;
}
declare namespace DeviceFarm {
  export type AWSAccountNumber = string;
  export interface AccountSettings {
    /**
     * The AWS account number specified in the AccountSettings container.
     */
    awsAccountNumber?: AWSAccountNumber;
    /**
     * Returns the unmetered devices you have purchased or want to purchase.
     */
    unmeteredDevices?: PurchasedDevicesMap;
    /**
     * Returns the unmetered remote access devices you have purchased or want to purchase.
     */
    unmeteredRemoteAccessDevices?: PurchasedDevicesMap;
    /**
     * The maximum number of minutes a test run will execute before it times out.
     */
    maxJobTimeoutMinutes?: JobTimeoutMinutes;
    /**
     * Information about an AWS account's usage of free trial device minutes.
     */
    trialMinutes?: TrialMinutes;
    /**
     * The maximum number of device slots that the AWS account can purchase. Each maximum is expressed as an offering-id:number pair, where the offering-id represents one of the IDs returned by the ListOfferings command.
     */
    maxSlots?: MaxSlotMap;
    /**
     * The default number of minutes (at the account level) a test run will execute before it times out. Default value is 60 minutes.
     */
    defaultJobTimeoutMinutes?: JobTimeoutMinutes;
    /**
     * When set to true, for private devices, Device Farm will not sign your app again. For public devices, Device Farm always signs your apps again and this parameter has no effect. For more information about how Device Farm re-signs your app(s), see Do you modify my app? in the AWS Device Farm FAQs.
     */
    skipAppResign?: SkipAppResign;
  }
  export type AccountsCleanup = boolean;
  export type AmazonResourceName = string;
  export type AmazonResourceNames = AmazonResourceName[];
  export type AndroidPaths = String[];
  export type AppPackagesCleanup = boolean;
  export interface Artifact {
    /**
     * The artifact's ARN.
     */
    arn?: AmazonResourceName;
    /**
     * The artifact's name.
     */
    name?: Name;
    /**
     * The artifact's type. Allowed values include the following:   UNKNOWN: An unknown type.   SCREENSHOT: The screenshot type.   DEVICE_LOG: The device log type.   MESSAGE_LOG: The message log type.   VIDEO_LOG: The video log type.   RESULT_LOG: The result log type.   SERVICE_LOG: The service log type.   WEBKIT_LOG: The web kit log type.   INSTRUMENTATION_OUTPUT: The instrumentation type.   EXERCISER_MONKEY_OUTPUT: For Android, the artifact (log) generated by an Android fuzz test.   CALABASH_JSON_OUTPUT: The Calabash JSON output type.   CALABASH_PRETTY_OUTPUT: The Calabash pretty output type.   CALABASH_STANDARD_OUTPUT: The Calabash standard output type.   CALABASH_JAVA_XML_OUTPUT: The Calabash Java XML output type.   AUTOMATION_OUTPUT: The automation output type.   APPIUM_SERVER_OUTPUT: The Appium server output type.   APPIUM_JAVA_OUTPUT: The Appium Java output type.   APPIUM_JAVA_XML_OUTPUT: The Appium Java XML output type.   APPIUM_PYTHON_OUTPUT: The Appium Python output type.   APPIUM_PYTHON_XML_OUTPUT: The Appium Python XML output type.   EXPLORER_EVENT_LOG: The Explorer event log output type.   EXPLORER_SUMMARY_LOG: The Explorer summary log output type.   APPLICATION_CRASH_REPORT: The application crash report output type.   XCTEST_LOG: The XCode test output type.   VIDEO: The Video output type.   CUSTOMER_ARTIFACT:The Customer Artifact output type.   CUSTOMER_ARTIFACT_LOG: The Customer Artifact Log output type.   TESTSPEC_OUTPUT: The Test Spec Output type.  
     */
    type?: ArtifactType;
    /**
     * The artifact's file extension.
     */
    extension?: String;
    /**
     * The pre-signed Amazon S3 URL that can be used with a corresponding GET request to download the artifact's file.
     */
    url?: URL;
  }
  export type ArtifactCategory = "SCREENSHOT"|"FILE"|"LOG"|string;
  export type ArtifactType = "UNKNOWN"|"SCREENSHOT"|"DEVICE_LOG"|"MESSAGE_LOG"|"VIDEO_LOG"|"RESULT_LOG"|"SERVICE_LOG"|"WEBKIT_LOG"|"INSTRUMENTATION_OUTPUT"|"EXERCISER_MONKEY_OUTPUT"|"CALABASH_JSON_OUTPUT"|"CALABASH_PRETTY_OUTPUT"|"CALABASH_STANDARD_OUTPUT"|"CALABASH_JAVA_XML_OUTPUT"|"AUTOMATION_OUTPUT"|"APPIUM_SERVER_OUTPUT"|"APPIUM_JAVA_OUTPUT"|"APPIUM_JAVA_XML_OUTPUT"|"APPIUM_PYTHON_OUTPUT"|"APPIUM_PYTHON_XML_OUTPUT"|"EXPLORER_EVENT_LOG"|"EXPLORER_SUMMARY_LOG"|"APPLICATION_CRASH_REPORT"|"XCTEST_LOG"|"VIDEO"|"CUSTOMER_ARTIFACT"|"CUSTOMER_ARTIFACT_LOG"|"TESTSPEC_OUTPUT"|string;
  export type Artifacts = Artifact[];
  export type BillingMethod = "METERED"|"UNMETERED"|string;
  export type Boolean = boolean;
  export interface CPU {
    /**
     * The CPU's frequency.
     */
    frequency?: String;
    /**
     * The CPU's architecture, for example x86 or ARM.
     */
    architecture?: String;
    /**
     * The clock speed of the device's CPU, expressed in hertz (Hz). For example, a 1.2 GHz CPU is expressed as 1200000000.
     */
    clock?: Double;
  }
  export type ClientId = string;
  export type ContentType = string;
  export interface Counters {
    /**
     * The total number of entities.
     */
    total?: Integer;
    /**
     * The number of passed entities.
     */
    passed?: Integer;
    /**
     * The number of failed entities.
     */
    failed?: Integer;
    /**
     * The number of warned entities.
     */
    warned?: Integer;
    /**
     * The number of errored entities.
     */
    errored?: Integer;
    /**
     * The number of stopped entities.
     */
    stopped?: Integer;
    /**
     * The number of skipped entities.
     */
    skipped?: Integer;
  }
  export interface CreateDevicePoolRequest {
    /**
     * The ARN of the project for the device pool.
     */
    projectArn: AmazonResourceName;
    /**
     * The device pool's name.
     */
    name: Name;
    /**
     * The device pool's description.
     */
    description?: Message;
    /**
     * The device pool's rules.
     */
    rules: Rules;
    /**
     * The number of devices that Device Farm can add to your device pool. Device Farm adds devices that are available and that meet the criteria that you assign for the rules parameter. Depending on how many devices meet these constraints, your device pool might contain fewer devices than the value for this parameter. By specifying the maximum number of devices, you can control the costs that you incur by running tests.
     */
    maxDevices?: Integer;
  }
  export interface CreateDevicePoolResult {
    /**
     * The newly created device pool.
     */
    devicePool?: DevicePool;
  }
  export interface CreateInstanceProfileRequest {
    /**
     * The name of your instance profile.
     */
    name: Name;
    /**
     * The description of your instance profile.
     */
    description?: Message;
    /**
     * When set to true, Device Farm will remove app packages after a test run. The default value is false for private devices.
     */
    packageCleanup?: Boolean;
    /**
     * An array of strings specifying the list of app packages that should not be cleaned up from the device after a test run is over. The list of packages is only considered if you set packageCleanup to true.
     */
    excludeAppPackagesFromCleanup?: PackageIds;
    /**
     * When set to true, Device Farm will reboot the instance after a test run. The default value is true.
     */
    rebootAfterUse?: Boolean;
  }
  export interface CreateInstanceProfileResult {
    /**
     * An object containing information about your instance profile.
     */
    instanceProfile?: InstanceProfile;
  }
  export interface CreateNetworkProfileRequest {
    /**
     * The Amazon Resource Name (ARN) of the project for which you want to create a network profile.
     */
    projectArn: AmazonResourceName;
    /**
     * The name you wish to specify for the new network profile.
     */
    name: Name;
    /**
     * The description of the network profile.
     */
    description?: Message;
    /**
     * The type of network profile you wish to create. Valid values are listed below.
     */
    type?: NetworkProfileType;
    /**
     * The data throughput rate in bits per second, as an integer from 0 to 104857600.
     */
    uplinkBandwidthBits?: Long;
    /**
     * The data throughput rate in bits per second, as an integer from 0 to 104857600.
     */
    downlinkBandwidthBits?: Long;
    /**
     * Delay time for all packets to destination in milliseconds as an integer from 0 to 2000.
     */
    uplinkDelayMs?: Long;
    /**
     * Delay time for all packets to destination in milliseconds as an integer from 0 to 2000.
     */
    downlinkDelayMs?: Long;
    /**
     * Time variation in the delay of received packets in milliseconds as an integer from 0 to 2000.
     */
    uplinkJitterMs?: Long;
    /**
     * Time variation in the delay of received packets in milliseconds as an integer from 0 to 2000.
     */
    downlinkJitterMs?: Long;
    /**
     * Proportion of transmitted packets that fail to arrive from 0 to 100 percent.
     */
    uplinkLossPercent?: PercentInteger;
    /**
     * Proportion of received packets that fail to arrive from 0 to 100 percent.
     */
    downlinkLossPercent?: PercentInteger;
  }
  export interface CreateNetworkProfileResult {
    /**
     * The network profile that is returned by the create network profile request.
     */
    networkProfile?: NetworkProfile;
  }
  export interface CreateProjectRequest {
    /**
     * The project's name.
     */
    name: Name;
    /**
     * Sets the execution timeout value (in minutes) for a project. All test runs in this project will use the specified execution timeout value unless overridden when scheduling a run.
     */
    defaultJobTimeoutMinutes?: JobTimeoutMinutes;
  }
  export interface CreateProjectResult {
    /**
     * The newly created project.
     */
    project?: Project;
  }
  export interface CreateRemoteAccessSessionConfiguration {
    /**
     * The billing method for the remote access session.
     */
    billingMethod?: BillingMethod;
    /**
     * An array of Amazon Resource Names (ARNs) included in the VPC endpoint configuration.
     */
    vpceConfigurationArns?: AmazonResourceNames;
  }
  export interface CreateRemoteAccessSessionRequest {
    /**
     * The Amazon Resource Name (ARN) of the project for which you want to create a remote access session.
     */
    projectArn: AmazonResourceName;
    /**
     * The Amazon Resource Name (ARN) of the device for which you want to create a remote access session.
     */
    deviceArn: AmazonResourceName;
    /**
     * The Amazon Resource Name (ARN) of the device instance for which you want to create a remote access session.
     */
    instanceArn?: AmazonResourceName;
    /**
     * The public key of the ssh key pair you want to use for connecting to remote devices in your remote debugging session. This is only required if remoteDebugEnabled is set to true.
     */
    sshPublicKey?: SshPublicKey;
    /**
     * Set to true if you want to access devices remotely for debugging in your remote access session.
     */
    remoteDebugEnabled?: Boolean;
    /**
     * Set to true to enable remote recording for the remote access session.
     */
    remoteRecordEnabled?: Boolean;
    /**
     * The Amazon Resource Name (ARN) for the app to be recorded in the remote access session.
     */
    remoteRecordAppArn?: AmazonResourceName;
    /**
     * The name of the remote access session that you wish to create.
     */
    name?: Name;
    /**
     * Unique identifier for the client. If you want access to multiple devices on the same client, you should pass the same clientId value in each call to CreateRemoteAccessSession. This is required only if remoteDebugEnabled is set to true.
     */
    clientId?: ClientId;
    /**
     * The configuration information for the remote access session request.
     */
    configuration?: CreateRemoteAccessSessionConfiguration;
    /**
     * The interaction mode of the remote access session. Valid values are:   INTERACTIVE: You can interact with the iOS device by viewing, touching, and rotating the screen. You cannot run XCUITest framework-based tests in this mode.   NO_VIDEO: You are connected to the device but cannot interact with it or view the screen. This mode has the fastest test execution speed. You can run XCUITest framework-based tests in this mode.   VIDEO_ONLY: You can view the screen but cannot touch or rotate it. You can run XCUITest framework-based tests and watch the screen in this mode.  
     */
    interactionMode?: InteractionMode;
    /**
     * When set to true, for private devices, Device Farm will not sign your app again. For public devices, Device Farm always signs your apps again and this parameter has no effect. For more information about how Device Farm re-signs your app(s), see Do you modify my app? in the AWS Device Farm FAQs.
     */
    skipAppResign?: Boolean;
  }
  export interface CreateRemoteAccessSessionResult {
    /**
     * A container that describes the remote access session when the request to create a remote access session is sent.
     */
    remoteAccessSession?: RemoteAccessSession;
  }
  export interface CreateUploadRequest {
    /**
     * The ARN of the project for the upload.
     */
    projectArn: AmazonResourceName;
    /**
     * The upload's file name. The name should not contain the '/' character. If uploading an iOS app, the file name needs to end with the .ipa extension. If uploading an Android app, the file name needs to end with the .apk extension. For all others, the file name must end with the .zip file extension.
     */
    name: Name;
    /**
     * The upload's upload type. Must be one of the following values:   ANDROID_APP: An Android upload.   IOS_APP: An iOS upload.   WEB_APP: A web application upload.   EXTERNAL_DATA: An external data upload.   APPIUM_JAVA_JUNIT_TEST_PACKAGE: An Appium Java JUnit test package upload.   APPIUM_JAVA_TESTNG_TEST_PACKAGE: An Appium Java TestNG test package upload.   APPIUM_PYTHON_TEST_PACKAGE: An Appium Python test package upload.   APPIUM_NODE_TEST_PACKAGE: An Appium Node.js test package upload.   APPIUM_RUBY_TEST_PACKAGE: An Appium Ruby test package upload.   APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE: An Appium Java JUnit test package upload for a web app.   APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE: An Appium Java TestNG test package upload for a web app.   APPIUM_WEB_PYTHON_TEST_PACKAGE: An Appium Python test package upload for a web app.   APPIUM_WEB_NODE_TEST_PACKAGE: An Appium Node.js test package upload for a web app.   APPIUM_WEB_RUBY_TEST_PACKAGE: An Appium Ruby test package upload for a web app.   CALABASH_TEST_PACKAGE: A Calabash test package upload.   INSTRUMENTATION_TEST_PACKAGE: An instrumentation upload.   UIAUTOMATION_TEST_PACKAGE: A uiautomation test package upload.   UIAUTOMATOR_TEST_PACKAGE: A uiautomator test package upload.   XCTEST_TEST_PACKAGE: An XCode test package upload.   XCTEST_UI_TEST_PACKAGE: An XCode UI test package upload.   APPIUM_JAVA_JUNIT_TEST_SPEC: An Appium Java JUnit test spec upload.   APPIUM_JAVA_TESTNG_TEST_SPEC: An Appium Java TestNG test spec upload.   APPIUM_PYTHON_TEST_SPEC: An Appium Python test spec upload.   APPIUM_NODE_TEST_SPEC: An Appium Node.js test spec upload.   APPIUM_RUBY_TEST_SPEC: An Appium Ruby test spec upload.   APPIUM_WEB_JAVA_JUNIT_TEST_SPEC: An Appium Java JUnit test spec upload for a web app.   APPIUM_WEB_JAVA_TESTNG_TEST_SPEC: An Appium Java TestNG test spec upload for a web app.   APPIUM_WEB_PYTHON_TEST_SPEC: An Appium Python test spec upload for a web app.   APPIUM_WEB_NODE_TEST_SPEC: An Appium Node.js test spec upload for a web app.   APPIUM_WEB_RUBY_TEST_SPEC: An Appium Ruby test spec upload for a web app.   INSTRUMENTATION_TEST_SPEC: An instrumentation test spec upload.   XCTEST_UI_TEST_SPEC: An XCode UI test spec upload.    Note If you call CreateUpload with WEB_APP specified, AWS Device Farm throws an ArgumentException error.
     */
    type: UploadType;
    /**
     * The upload's content type (for example, "application/octet-stream").
     */
    contentType?: ContentType;
  }
  export interface CreateUploadResult {
    /**
     * The newly created upload.
     */
    upload?: Upload;
  }
  export interface CreateVPCEConfigurationRequest {
    /**
     * The friendly name you give to your VPC endpoint configuration, to manage your configurations more easily.
     */
    vpceConfigurationName: VPCEConfigurationName;
    /**
     * The name of the VPC endpoint service running inside your AWS account that you want Device Farm to test.
     */
    vpceServiceName: VPCEServiceName;
    /**
     * The DNS name of the service running in your VPC that you want Device Farm to test.
     */
    serviceDnsName: ServiceDnsName;
    /**
     * An optional description, providing more details about your VPC endpoint configuration.
     */
    vpceConfigurationDescription?: VPCEConfigurationDescription;
  }
  export interface CreateVPCEConfigurationResult {
    /**
     * An object containing information about your VPC endpoint configuration.
     */
    vpceConfiguration?: VPCEConfiguration;
  }
  export type CurrencyCode = "USD"|string;
  export interface CustomerArtifactPaths {
    /**
     * Comma-separated list of paths on the iOS device where the artifacts generated by the customer's tests will be pulled from.
     */
    iosPaths?: IosPaths;
    /**
     * Comma-separated list of paths on the Android device where the artifacts generated by the customer's tests will be pulled from.
     */
    androidPaths?: AndroidPaths;
    /**
     * Comma-separated list of paths in the test execution environment where the artifacts generated by the customer's tests will be pulled from.
     */
    deviceHostPaths?: DeviceHostPaths;
  }
  export type DateTime = Date;
  export interface DeleteDevicePoolRequest {
    /**
     * Represents the Amazon Resource Name (ARN) of the Device Farm device pool you wish to delete.
     */
    arn: AmazonResourceName;
  }
  export interface DeleteDevicePoolResult {
  }
  export interface DeleteInstanceProfileRequest {
    /**
     * The Amazon Resource Name (ARN) of the instance profile you are requesting to delete.
     */
    arn: AmazonResourceName;
  }
  export interface DeleteInstanceProfileResult {
  }
  export interface DeleteNetworkProfileRequest {
    /**
     * The Amazon Resource Name (ARN) of the network profile you want to delete.
     */
    arn: AmazonResourceName;
  }
  export interface DeleteNetworkProfileResult {
  }
  export interface DeleteProjectRequest {
    /**
     * Represents the Amazon Resource Name (ARN) of the Device Farm project you wish to delete.
     */
    arn: AmazonResourceName;
  }
  export interface DeleteProjectResult {
  }
  export interface DeleteRemoteAccessSessionRequest {
    /**
     * The Amazon Resource Name (ARN) of the sesssion for which you want to delete remote access.
     */
    arn: AmazonResourceName;
  }
  export interface DeleteRemoteAccessSessionResult {
  }
  export interface DeleteRunRequest {
    /**
     * The Amazon Resource Name (ARN) for the run you wish to delete.
     */
    arn: AmazonResourceName;
  }
  export interface DeleteRunResult {
  }
  export interface DeleteUploadRequest {
    /**
     * Represents the Amazon Resource Name (ARN) of the Device Farm upload you wish to delete.
     */
    arn: AmazonResourceName;
  }
  export interface DeleteUploadResult {
  }
  export interface DeleteVPCEConfigurationRequest {
    /**
     * The Amazon Resource Name (ARN) of the VPC endpoint configuration you want to delete.
     */
    arn: AmazonResourceName;
  }
  export interface DeleteVPCEConfigurationResult {
  }
  export interface Device {
    /**
     * The device's ARN.
     */
    arn?: AmazonResourceName;
    /**
     * The device's display name.
     */
    name?: Name;
    /**
     * The device's manufacturer name.
     */
    manufacturer?: String;
    /**
     * The device's model name.
     */
    model?: String;
    /**
     * The device's model ID.
     */
    modelId?: String;
    /**
     * The device's form factor. Allowed values include:   PHONE: The phone form factor.   TABLET: The tablet form factor.  
     */
    formFactor?: DeviceFormFactor;
    /**
     * The device's platform. Allowed values include:   ANDROID: The Android platform.   IOS: The iOS platform.  
     */
    platform?: DevicePlatform;
    /**
     * The device's operating system type.
     */
    os?: String;
    /**
     * Information about the device's CPU.
     */
    cpu?: CPU;
    /**
     * The resolution of the device.
     */
    resolution?: Resolution;
    /**
     * The device's heap size, expressed in bytes.
     */
    heapSize?: Long;
    /**
     * The device's total memory size, expressed in bytes.
     */
    memory?: Long;
    /**
     * The device's image name.
     */
    image?: String;
    /**
     * The device's carrier.
     */
    carrier?: String;
    /**
     * The device's radio.
     */
    radio?: String;
    /**
     * Specifies whether remote access has been enabled for the specified device.
     */
    remoteAccessEnabled?: Boolean;
    /**
     * This flag is set to true if remote debugging is enabled for the device.
     */
    remoteDebugEnabled?: Boolean;
    /**
     * The type of fleet to which this device belongs. Possible values for fleet type are PRIVATE and PUBLIC.
     */
    fleetType?: String;
    /**
     * The name of the fleet to which this device belongs.
     */
    fleetName?: String;
    /**
     * The instances belonging to this device.
     */
    instances?: DeviceInstances;
    /**
     * Reflects how likely a device will be available for a test run. It is currently available in the ListDevices and GetDevice API methods.
     */
    availability?: DeviceAvailability;
  }
  export type DeviceAttribute = "ARN"|"PLATFORM"|"FORM_FACTOR"|"MANUFACTURER"|"REMOTE_ACCESS_ENABLED"|"REMOTE_DEBUG_ENABLED"|"APPIUM_VERSION"|"INSTANCE_ARN"|"INSTANCE_LABELS"|"FLEET_TYPE"|"OS_VERSION"|"MODEL"|"AVAILABILITY"|string;
  export type DeviceAvailability = "TEMPORARY_NOT_AVAILABLE"|"BUSY"|"AVAILABLE"|"HIGHLY_AVAILABLE"|string;
  export interface DeviceFilter {
    /**
     * The aspect of a device such as platform or model used as the selection criteria in a device filter. The supported operators for each attribute are provided in the following list.  ARN  The Amazon Resource Name (ARN) of the device. For example, "arn:aws:devicefarm:us-west-2::device:12345Example".  Supported operators: EQUALS, IN, NOT_IN   PLATFORM  The device platform. Valid values are "ANDROID" or "IOS".  Supported operators: EQUALS   OS_VERSION  The operating system version. For example, "10.3.2".  Supported operators: EQUALS, GREATER_THAN, GREATER_THAN_OR_EQUALS, IN, LESS_THAN, LESS_THAN_OR_EQUALS, NOT_IN   MODEL  The device model. For example, "iPad 5th Gen".  Supported operators: CONTAINS, EQUALS, IN, NOT_IN   AVAILABILITY  The current availability of the device. Valid values are "AVAILABLE", "HIGHLY_AVAILABLE", "BUSY", or "TEMPORARY_NOT_AVAILABLE".  Supported operators: EQUALS   FORM_FACTOR  The device form factor. Valid values are "PHONE" or "TABLET".  Supported operators: EQUALS   MANUFACTURER  The device manufacturer. For example, "Apple".  Supported operators: EQUALS, IN, NOT_IN   REMOTE_ACCESS_ENABLED  Whether the device is enabled for remote access. Valid values are "TRUE" or "FALSE".  Supported operators: EQUALS   REMOTE_DEBUG_ENABLED  Whether the device is enabled for remote debugging. Valid values are "TRUE" or "FALSE".  Supported operators: EQUALS   INSTANCE_ARN  The Amazon Resource Name (ARN) of the device instance.  Supported operators: EQUALS, IN, NOT_IN   INSTANCE_LABELS  The label of the device instance.  Supported operators: CONTAINS   FLEET_TYPE  The fleet type. Valid values are "PUBLIC" or "PRIVATE".  Supported operators: EQUALS   
     */
    attribute?: DeviceFilterAttribute;
    /**
     * Specifies how Device Farm compares the filter's attribute to the value. For the operators that are supported by each attribute, see the attribute descriptions.
     */
    operator?: RuleOperator;
    /**
     * An array of one or more filter values used in a device filter.  Operator Values    The IN and NOT_IN operators can take a values array that has more than one element.   The other operators require an array with a single element.    Attribute Values    The PLATFORM attribute can be set to "ANDROID" or "IOS".   The AVAILABILITY attribute can be set to "AVAILABLE", "HIGHLY_AVAILABLE", "BUSY", or "TEMPORARY_NOT_AVAILABLE".   The FORM_FACTOR attribute can be set to "PHONE" or "TABLET".   The FLEET_TYPE attribute can be set to "PUBLIC" or "PRIVATE".  
     */
    values?: DeviceFilterValues;
  }
  export type DeviceFilterAttribute = "ARN"|"PLATFORM"|"OS_VERSION"|"MODEL"|"AVAILABILITY"|"FORM_FACTOR"|"MANUFACTURER"|"REMOTE_ACCESS_ENABLED"|"REMOTE_DEBUG_ENABLED"|"INSTANCE_ARN"|"INSTANCE_LABELS"|"FLEET_TYPE"|string;
  export type DeviceFilterValues = String[];
  export type DeviceFilters = DeviceFilter[];
  export type DeviceFormFactor = "PHONE"|"TABLET"|string;
  export type DeviceHostPaths = String[];
  export interface DeviceInstance {
    /**
     * The Amazon Resource Name (ARN) of the device instance.
     */
    arn?: AmazonResourceName;
    /**
     * The Amazon Resource Name (ARN) of the device.
     */
    deviceArn?: AmazonResourceName;
    /**
     * An array of strings describing the device instance.
     */
    labels?: InstanceLabels;
    /**
     * The status of the device instance. Valid values are listed below.
     */
    status?: InstanceStatus;
    /**
     * Unique device identifier for the device instance.
     */
    udid?: String;
    /**
     * A object containing information about the instance profile.
     */
    instanceProfile?: InstanceProfile;
  }
  export type DeviceInstances = DeviceInstance[];
  export interface DeviceMinutes {
    /**
     * When specified, represents the total minutes used by the resource to run tests.
     */
    total?: Double;
    /**
     * When specified, represents only the sum of metered minutes used by the resource to run tests.
     */
    metered?: Double;
    /**
     * When specified, represents only the sum of unmetered minutes used by the resource to run tests.
     */
    unmetered?: Double;
  }
  export type DevicePlatform = "ANDROID"|"IOS"|string;
  export interface DevicePool {
    /**
     * The device pool's ARN.
     */
    arn?: AmazonResourceName;
    /**
     * The device pool's name.
     */
    name?: Name;
    /**
     * The device pool's description.
     */
    description?: Message;
    /**
     * The device pool's type. Allowed values include:   CURATED: A device pool that is created and managed by AWS Device Farm.   PRIVATE: A device pool that is created and managed by the device pool developer.  
     */
    type?: DevicePoolType;
    /**
     * Information about the device pool's rules.
     */
    rules?: Rules;
    /**
     * The number of devices that Device Farm can add to your device pool. Device Farm adds devices that are available and that meet the criteria that you assign for the rules parameter. Depending on how many devices meet these constraints, your device pool might contain fewer devices than the value for this parameter. By specifying the maximum number of devices, you can control the costs that you incur by running tests.
     */
    maxDevices?: Integer;
  }
  export interface DevicePoolCompatibilityResult {
    /**
     * The device (phone or tablet) that you wish to return information about.
     */
    device?: Device;
    /**
     * Whether the result was compatible with the device pool.
     */
    compatible?: Boolean;
    /**
     * Information about the compatibility.
     */
    incompatibilityMessages?: IncompatibilityMessages;
  }
  export type DevicePoolCompatibilityResults = DevicePoolCompatibilityResult[];
  export type DevicePoolType = "CURATED"|"PRIVATE"|string;
  export type DevicePools = DevicePool[];
  export interface DeviceSelectionConfiguration {
    /**
     * Used to dynamically select a set of devices for a test run. A filter is made up of an attribute, an operator, and one or more values.    Attribute  The aspect of a device such as platform or model used as the selection criteria in a device filter. Allowed values include:   ARN: The Amazon Resource Name (ARN) of the device. For example, "arn:aws:devicefarm:us-west-2::device:12345Example".   PLATFORM: The device platform. Valid values are "ANDROID" or "IOS".   OS_VERSION: The operating system version. For example, "10.3.2".   MODEL: The device model. For example, "iPad 5th Gen".   AVAILABILITY: The current availability of the device. Valid values are "AVAILABLE", "HIGHLY_AVAILABLE", "BUSY", or "TEMPORARY_NOT_AVAILABLE".   FORM_FACTOR: The device form factor. Valid values are "PHONE" or "TABLET".   MANUFACTURER: The device manufacturer. For example, "Apple".   REMOTE_ACCESS_ENABLED: Whether the device is enabled for remote access. Valid values are "TRUE" or "FALSE".   REMOTE_DEBUG_ENABLED: Whether the device is enabled for remote debugging. Valid values are "TRUE" or "FALSE".   INSTANCE_ARN: The Amazon Resource Name (ARN) of the device instance.   INSTANCE_LABELS: The label of the device instance.   FLEET_TYPE: The fleet type. Valid values are "PUBLIC" or "PRIVATE".      Operator  The filter operator.   The EQUALS operator is available for every attribute except INSTANCE_LABELS.   The CONTAINS operator is available for the INSTANCE_LABELS and MODEL attributes.   The IN and NOT_IN operators are available for the ARN, OS_VERSION, MODEL, MANUFACTURER, and INSTANCE_ARN attributes.   The LESS_THAN, GREATER_THAN, LESS_THAN_OR_EQUALS, and GREATER_THAN_OR_EQUALS operators are also available for the OS_VERSION attribute.      Values  An array of one or more filter values.  Operator Values    The IN and NOT_IN operators can take a values array that has more than one element.   The other operators require an array with a single element.    Attribute Values    The PLATFORM attribute can be set to "ANDROID" or "IOS".   The AVAILABILITY attribute can be set to "AVAILABLE", "HIGHLY_AVAILABLE", "BUSY", or "TEMPORARY_NOT_AVAILABLE".   The FORM_FACTOR attribute can be set to "PHONE" or "TABLET".   The FLEET_TYPE attribute can be set to "PUBLIC" or "PRIVATE".    
     */
    filters: DeviceFilters;
    /**
     * The maximum number of devices to be included in a test run.
     */
    maxDevices: Integer;
  }
  export interface DeviceSelectionResult {
    /**
     * The filters in a device selection result.
     */
    filters?: DeviceFilters;
    /**
     * The number of devices that matched the device filter selection criteria.
     */
    matchedDevicesCount?: Integer;
    /**
     * The maximum number of devices to be selected by a device filter and included in a test run.
     */
    maxDevices?: Integer;
  }
  export type Devices = Device[];
  export type Double = number;
  export interface ExecutionConfiguration {
    /**
     * The number of minutes a test run will execute before it times out.
     */
    jobTimeoutMinutes?: JobTimeoutMinutes;
    /**
     * True if account cleanup is enabled at the beginning of the test; otherwise, false.
     */
    accountsCleanup?: AccountsCleanup;
    /**
     * True if app package cleanup is enabled at the beginning of the test; otherwise, false.
     */
    appPackagesCleanup?: AppPackagesCleanup;
    /**
     * Set to true to enable video capture; otherwise, set to false. The default is true.
     */
    videoCapture?: VideoCapture;
    /**
     * When set to true, for private devices, Device Farm will not sign your app again. For public devices, Device Farm always signs your apps again and this parameter has no effect. For more information about how Device Farm re-signs your app(s), see Do you modify my app? in the AWS Device Farm FAQs.
     */
    skipAppResign?: SkipAppResign;
  }
  export type ExecutionResult = "PENDING"|"PASSED"|"WARNED"|"FAILED"|"SKIPPED"|"ERRORED"|"STOPPED"|string;
  export type ExecutionResultCode = "PARSING_FAILED"|"VPC_ENDPOINT_SETUP_FAILED"|string;
  export type ExecutionStatus = "PENDING"|"PENDING_CONCURRENCY"|"PENDING_DEVICE"|"PROCESSING"|"SCHEDULING"|"PREPARING"|"RUNNING"|"COMPLETED"|"STOPPING"|string;
  export type Filter = string;
  export interface GetAccountSettingsRequest {
  }
  export interface GetAccountSettingsResult {
    /**
     * The account settings.
     */
    accountSettings?: AccountSettings;
  }
  export interface GetDeviceInstanceRequest {
    /**
     * The Amazon Resource Name (ARN) of the instance you're requesting information about.
     */
    arn: AmazonResourceName;
  }
  export interface GetDeviceInstanceResult {
    /**
     * An object containing information about your device instance.
     */
    deviceInstance?: DeviceInstance;
  }
  export interface GetDevicePoolCompatibilityRequest {
    /**
     * The device pool's ARN.
     */
    devicePoolArn: AmazonResourceName;
    /**
     * The ARN of the app that is associated with the specified device pool.
     */
    appArn?: AmazonResourceName;
    /**
     * The test type for the specified device pool. Allowed values include the following:   BUILTIN_FUZZ: The built-in fuzz type.   BUILTIN_EXPLORER: For Android, an app explorer that will traverse an Android app, interacting with it and capturing screenshots at the same time.   APPIUM_JAVA_JUNIT: The Appium Java JUnit type.   APPIUM_JAVA_TESTNG: The Appium Java TestNG type.   APPIUM_PYTHON: The Appium Python type.   APPIUM_NODE: The Appium Node.js type.   APPIUM_RUBY: The Appium Ruby type.   APPIUM_WEB_JAVA_JUNIT: The Appium Java JUnit type for web apps.   APPIUM_WEB_JAVA_TESTNG: The Appium Java TestNG type for web apps.   APPIUM_WEB_PYTHON: The Appium Python type for web apps.   APPIUM_WEB_NODE: The Appium Node.js type for web apps.   APPIUM_WEB_RUBY: The Appium Ruby type for web apps.   CALABASH: The Calabash type.   INSTRUMENTATION: The Instrumentation type.   UIAUTOMATION: The uiautomation type.   UIAUTOMATOR: The uiautomator type.   XCTEST: The XCode test type.   XCTEST_UI: The XCode UI test type.  
     */
    testType?: TestType;
    /**
     * Information about the uploaded test to be run against the device pool.
     */
    test?: ScheduleRunTest;
    /**
     * An object containing information about the settings for a run.
     */
    configuration?: ScheduleRunConfiguration;
  }
  export interface GetDevicePoolCompatibilityResult {
    /**
     * Information about compatible devices.
     */
    compatibleDevices?: DevicePoolCompatibilityResults;
    /**
     * Information about incompatible devices.
     */
    incompatibleDevices?: DevicePoolCompatibilityResults;
  }
  export interface GetDevicePoolRequest {
    /**
     * The device pool's ARN.
     */
    arn: AmazonResourceName;
  }
  export interface GetDevicePoolResult {
    /**
     * An object containing information about the requested device pool.
     */
    devicePool?: DevicePool;
  }
  export interface GetDeviceRequest {
    /**
     * The device type's ARN.
     */
    arn: AmazonResourceName;
  }
  export interface GetDeviceResult {
    /**
     * An object containing information about the requested device.
     */
    device?: Device;
  }
  export interface GetInstanceProfileRequest {
    /**
     * The Amazon Resource Name (ARN) of your instance profile.
     */
    arn: AmazonResourceName;
  }
  export interface GetInstanceProfileResult {
    /**
     * An object containing information about your instance profile.
     */
    instanceProfile?: InstanceProfile;
  }
  export interface GetJobRequest {
    /**
     * The job's ARN.
     */
    arn: AmazonResourceName;
  }
  export interface GetJobResult {
    /**
     * An object containing information about the requested job.
     */
    job?: Job;
  }
  export interface GetNetworkProfileRequest {
    /**
     * The Amazon Resource Name (ARN) of the network profile you want to return information about.
     */
    arn: AmazonResourceName;
  }
  export interface GetNetworkProfileResult {
    /**
     * The network profile.
     */
    networkProfile?: NetworkProfile;
  }
  export interface GetOfferingStatusRequest {
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface GetOfferingStatusResult {
    /**
     * When specified, gets the offering status for the current period.
     */
    current?: OfferingStatusMap;
    /**
     * When specified, gets the offering status for the next period.
     */
    nextPeriod?: OfferingStatusMap;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface GetProjectRequest {
    /**
     * The project's ARN.
     */
    arn: AmazonResourceName;
  }
  export interface GetProjectResult {
    /**
     * The project you wish to get information about.
     */
    project?: Project;
  }
  export interface GetRemoteAccessSessionRequest {
    /**
     * The Amazon Resource Name (ARN) of the remote access session about which you want to get session information.
     */
    arn: AmazonResourceName;
  }
  export interface GetRemoteAccessSessionResult {
    /**
     * A container that lists detailed information about the remote access session.
     */
    remoteAccessSession?: RemoteAccessSession;
  }
  export interface GetRunRequest {
    /**
     * The run's ARN.
     */
    arn: AmazonResourceName;
  }
  export interface GetRunResult {
    /**
     * The run you wish to get results from.
     */
    run?: Run;
  }
  export interface GetSuiteRequest {
    /**
     * The suite's ARN.
     */
    arn: AmazonResourceName;
  }
  export interface GetSuiteResult {
    /**
     * A collection of one or more tests.
     */
    suite?: Suite;
  }
  export interface GetTestRequest {
    /**
     * The test's ARN.
     */
    arn: AmazonResourceName;
  }
  export interface GetTestResult {
    /**
     * A test condition that is evaluated.
     */
    test?: Test;
  }
  export interface GetUploadRequest {
    /**
     * The upload's ARN.
     */
    arn: AmazonResourceName;
  }
  export interface GetUploadResult {
    /**
     * An app or a set of one or more tests to upload or that have been uploaded.
     */
    upload?: Upload;
  }
  export interface GetVPCEConfigurationRequest {
    /**
     * The Amazon Resource Name (ARN) of the VPC endpoint configuration you want to describe.
     */
    arn: AmazonResourceName;
  }
  export interface GetVPCEConfigurationResult {
    /**
     * An object containing information about your VPC endpoint configuration.
     */
    vpceConfiguration?: VPCEConfiguration;
  }
  export type HostAddress = string;
  export interface IncompatibilityMessage {
    /**
     * A message about the incompatibility.
     */
    message?: Message;
    /**
     * The type of incompatibility. Allowed values include:   ARN: The ARN.   FORM_FACTOR: The form factor (for example, phone or tablet).   MANUFACTURER: The manufacturer.   PLATFORM: The platform (for example, Android or iOS).   REMOTE_ACCESS_ENABLED: Whether the device is enabled for remote access.   APPIUM_VERSION: The Appium version for the test.  
     */
    type?: DeviceAttribute;
  }
  export type IncompatibilityMessages = IncompatibilityMessage[];
  export interface InstallToRemoteAccessSessionRequest {
    /**
     * The Amazon Resource Name (ARN) of the remote access session about which you are requesting information.
     */
    remoteAccessSessionArn: AmazonResourceName;
    /**
     * The Amazon Resource Name (ARN) of the app about which you are requesting information.
     */
    appArn: AmazonResourceName;
  }
  export interface InstallToRemoteAccessSessionResult {
    /**
     * An app to upload or that has been uploaded.
     */
    appUpload?: Upload;
  }
  export type InstanceLabels = String[];
  export interface InstanceProfile {
    /**
     * The Amazon Resource Name (ARN) of the instance profile.
     */
    arn?: AmazonResourceName;
    /**
     * When set to true, Device Farm will remove app packages after a test run. The default value is false for private devices.
     */
    packageCleanup?: Boolean;
    /**
     * An array of strings specifying the list of app packages that should not be cleaned up from the device after a test run is over. The list of packages is only considered if you set packageCleanup to true.
     */
    excludeAppPackagesFromCleanup?: PackageIds;
    /**
     * When set to true, Device Farm will reboot the instance after a test run. The default value is true.
     */
    rebootAfterUse?: Boolean;
    /**
     * The name of the instance profile.
     */
    name?: Name;
    /**
     * The description of the instance profile.
     */
    description?: Message;
  }
  export type InstanceProfiles = InstanceProfile[];
  export type InstanceStatus = "IN_USE"|"PREPARING"|"AVAILABLE"|"NOT_AVAILABLE"|string;
  export type Integer = number;
  export type InteractionMode = "INTERACTIVE"|"NO_VIDEO"|"VIDEO_ONLY"|string;
  export type IosPaths = String[];
  export interface Job {
    /**
     * The job's ARN.
     */
    arn?: AmazonResourceName;
    /**
     * The job's name.
     */
    name?: Name;
    /**
     * The job's type. Allowed values include the following:   BUILTIN_FUZZ: The built-in fuzz type.   BUILTIN_EXPLORER: For Android, an app explorer that will traverse an Android app, interacting with it and capturing screenshots at the same time.   APPIUM_JAVA_JUNIT: The Appium Java JUnit type.   APPIUM_JAVA_TESTNG: The Appium Java TestNG type.   APPIUM_PYTHON: The Appium Python type.   APPIUM_NODE: The Appium Node.js type.   APPIUM_RUBY: The Appium Ruby type.   APPIUM_WEB_JAVA_JUNIT: The Appium Java JUnit type for web apps.   APPIUM_WEB_JAVA_TESTNG: The Appium Java TestNG type for web apps.   APPIUM_WEB_PYTHON: The Appium Python type for web apps.   APPIUM_WEB_NODE: The Appium Node.js type for web apps.   APPIUM_WEB_RUBY: The Appium Ruby test type for web apps.   CALABASH: The Calabash type.   INSTRUMENTATION: The Instrumentation type.   UIAUTOMATION: The uiautomation type.   UIAUTOMATOR: The uiautomator type.   XCTEST: The XCode test type.   XCTEST_UI: The XCode UI test type.  
     */
    type?: TestType;
    /**
     * When the job was created.
     */
    created?: DateTime;
    /**
     * The job's status. Allowed values include:   PENDING: A pending status.   PENDING_CONCURRENCY: A pending concurrency status.   PENDING_DEVICE: A pending device status.   PROCESSING: A processing status.   SCHEDULING: A scheduling status.   PREPARING: A preparing status.   RUNNING: A running status.   COMPLETED: A completed status.   STOPPING: A stopping status.  
     */
    status?: ExecutionStatus;
    /**
     * The job's result. Allowed values include:   PENDING: A pending condition.   PASSED: A passing condition.   WARNED: A warning condition.   FAILED: A failed condition.   SKIPPED: A skipped condition.   ERRORED: An error condition.   STOPPED: A stopped condition.  
     */
    result?: ExecutionResult;
    /**
     * The job's start time.
     */
    started?: DateTime;
    /**
     * The job's stop time.
     */
    stopped?: DateTime;
    /**
     * The job's result counters.
     */
    counters?: Counters;
    /**
     * A message about the job's result.
     */
    message?: Message;
    /**
     * The device (phone or tablet).
     */
    device?: Device;
    /**
     * The Amazon Resource Name (ARN) of the instance.
     */
    instanceArn?: AmazonResourceName;
    /**
     * Represents the total (metered or unmetered) minutes used by the job.
     */
    deviceMinutes?: DeviceMinutes;
    /**
     * The endpoint for streaming device video.
     */
    videoEndpoint?: String;
    /**
     * This value is set to true if video capture is enabled; otherwise, it is set to false.
     */
    videoCapture?: VideoCapture;
  }
  export type JobTimeoutMinutes = number;
  export type Jobs = Job[];
  export interface ListArtifactsRequest {
    /**
     * The Run, Job, Suite, or Test ARN.
     */
    arn: AmazonResourceName;
    /**
     * The artifacts' type. Allowed values include:   FILE: The artifacts are files.   LOG: The artifacts are logs.   SCREENSHOT: The artifacts are screenshots.  
     */
    type: ArtifactCategory;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListArtifactsResult {
    /**
     * Information about the artifacts.
     */
    artifacts?: Artifacts;
    /**
     * If the number of items that are returned is significantly large, this is an identifier that is also returned, which can be used in a subsequent call to this operation to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListDeviceInstancesRequest {
    /**
     * An integer specifying the maximum number of items you want to return in the API response.
     */
    maxResults?: Integer;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListDeviceInstancesResult {
    /**
     * An object containing information about your device instances.
     */
    deviceInstances?: DeviceInstances;
    /**
     * An identifier that can be used in the next call to this operation to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListDevicePoolsRequest {
    /**
     * The project ARN.
     */
    arn: AmazonResourceName;
    /**
     * The device pools' type. Allowed values include:   CURATED: A device pool that is created and managed by AWS Device Farm.   PRIVATE: A device pool that is created and managed by the device pool developer.  
     */
    type?: DevicePoolType;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListDevicePoolsResult {
    /**
     * Information about the device pools.
     */
    devicePools?: DevicePools;
    /**
     * If the number of items that are returned is significantly large, this is an identifier that is also returned, which can be used in a subsequent call to this operation to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListDevicesRequest {
    /**
     * The Amazon Resource Name (ARN) of the project.
     */
    arn?: AmazonResourceName;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
    /**
     * Used to select a set of devices. A filter is made up of an attribute, an operator, and one or more values.   Attribute: The aspect of a device such as platform or model used as the selction criteria in a device filter. Allowed values include:   ARN: The Amazon Resource Name (ARN) of the device. For example, "arn:aws:devicefarm:us-west-2::device:12345Example".   PLATFORM: The device platform. Valid values are "ANDROID" or "IOS".   OS_VERSION: The operating system version. For example, "10.3.2".   MODEL: The device model. For example, "iPad 5th Gen".   AVAILABILITY: The current availability of the device. Valid values are "AVAILABLE", "HIGHLY_AVAILABLE", "BUSY", or "TEMPORARY_NOT_AVAILABLE".   FORM_FACTOR: The device form factor. Valid values are "PHONE" or "TABLET".   MANUFACTURER: The device manufacturer. For example, "Apple".   REMOTE_ACCESS_ENABLED: Whether the device is enabled for remote access. Valid values are "TRUE" or "FALSE".   REMOTE_DEBUG_ENABLED: Whether the device is enabled for remote debugging. Valid values are "TRUE" or "FALSE".   INSTANCE_ARN: The Amazon Resource Name (ARN) of the device instance.   INSTANCE_LABELS: The label of the device instance.   FLEET_TYPE: The fleet type. Valid values are "PUBLIC" or "PRIVATE".     Operator: The filter operator.   The EQUALS operator is available for every attribute except INSTANCE_LABELS.   The CONTAINS operator is available for the INSTANCE_LABELS and MODEL attributes.   The IN and NOT_IN operators are available for the ARN, OS_VERSION, MODEL, MANUFACTURER, and INSTANCE_ARN attributes.   The LESS_THAN, GREATER_THAN, LESS_THAN_OR_EQUALS, and GREATER_THAN_OR_EQUALS operators are also available for the OS_VERSION attribute.     Values: An array of one or more filter values.   The IN and NOT_IN operators take a values array that has one or more elements.   The other operators require an array with a single element.   In a request, the AVAILABILITY attribute takes "AVAILABLE", "HIGHLY_AVAILABLE", "BUSY", or "TEMPORARY_NOT_AVAILABLE" as values.    
     */
    filters?: DeviceFilters;
  }
  export interface ListDevicesResult {
    /**
     * Information about the devices.
     */
    devices?: Devices;
    /**
     * If the number of items that are returned is significantly large, this is an identifier that is also returned, which can be used in a subsequent call to this operation to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListInstanceProfilesRequest {
    /**
     * An integer specifying the maximum number of items you want to return in the API response.
     */
    maxResults?: Integer;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListInstanceProfilesResult {
    /**
     * An object containing information about your instance profiles.
     */
    instanceProfiles?: InstanceProfiles;
    /**
     * An identifier that can be used in the next call to this operation to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListJobsRequest {
    /**
     * The run's Amazon Resource Name (ARN).
     */
    arn: AmazonResourceName;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListJobsResult {
    /**
     * Information about the jobs.
     */
    jobs?: Jobs;
    /**
     * If the number of items that are returned is significantly large, this is an identifier that is also returned, which can be used in a subsequent call to this operation to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListNetworkProfilesRequest {
    /**
     * The Amazon Resource Name (ARN) of the project for which you want to list network profiles.
     */
    arn: AmazonResourceName;
    /**
     * The type of network profile you wish to return information about. Valid values are listed below.
     */
    type?: NetworkProfileType;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListNetworkProfilesResult {
    /**
     * A list of the available network profiles.
     */
    networkProfiles?: NetworkProfiles;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListOfferingPromotionsRequest {
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListOfferingPromotionsResult {
    /**
     * Information about the offering promotions.
     */
    offeringPromotions?: OfferingPromotions;
    /**
     * An identifier to be used in the next call to this operation, to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListOfferingTransactionsRequest {
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListOfferingTransactionsResult {
    /**
     * The audit log of subscriptions you have purchased and modified through AWS Device Farm.
     */
    offeringTransactions?: OfferingTransactions;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListOfferingsRequest {
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListOfferingsResult {
    /**
     * A value representing the list offering results.
     */
    offerings?: Offerings;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListProjectsRequest {
    /**
     * Optional. If no Amazon Resource Name (ARN) is specified, then AWS Device Farm returns a list of all projects for the AWS account. You can also specify a project ARN.
     */
    arn?: AmazonResourceName;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListProjectsResult {
    /**
     * Information about the projects.
     */
    projects?: Projects;
    /**
     * If the number of items that are returned is significantly large, this is an identifier that is also returned, which can be used in a subsequent call to this operation to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListRemoteAccessSessionsRequest {
    /**
     * The Amazon Resource Name (ARN) of the remote access session about which you are requesting information.
     */
    arn: AmazonResourceName;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListRemoteAccessSessionsResult {
    /**
     * A container representing the metadata from the service about each remote access session you are requesting.
     */
    remoteAccessSessions?: RemoteAccessSessions;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListRunsRequest {
    /**
     * The Amazon Resource Name (ARN) of the project for which you want to list runs.
     */
    arn: AmazonResourceName;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListRunsResult {
    /**
     * Information about the runs.
     */
    runs?: Runs;
    /**
     * If the number of items that are returned is significantly large, this is an identifier that is also returned, which can be used in a subsequent call to this operation to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListSamplesRequest {
    /**
     * The Amazon Resource Name (ARN) of the job used to list samples.
     */
    arn: AmazonResourceName;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListSamplesResult {
    /**
     * Information about the samples.
     */
    samples?: Samples;
    /**
     * If the number of items that are returned is significantly large, this is an identifier that is also returned, which can be used in a subsequent call to this operation to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListSuitesRequest {
    /**
     * The job's Amazon Resource Name (ARN).
     */
    arn: AmazonResourceName;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListSuitesResult {
    /**
     * Information about the suites.
     */
    suites?: Suites;
    /**
     * If the number of items that are returned is significantly large, this is an identifier that is also returned, which can be used in a subsequent call to this operation to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListTestsRequest {
    /**
     * The test suite's Amazon Resource Name (ARN).
     */
    arn: AmazonResourceName;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListTestsResult {
    /**
     * Information about the tests.
     */
    tests?: Tests;
    /**
     * If the number of items that are returned is significantly large, this is an identifier that is also returned, which can be used in a subsequent call to this operation to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListUniqueProblemsRequest {
    /**
     * The unique problems' ARNs.
     */
    arn: AmazonResourceName;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListUniqueProblemsResult {
    /**
     * Information about the unique problems. Allowed values include:   PENDING: A pending condition.   PASSED: A passing condition.   WARNED: A warning condition.   FAILED: A failed condition.   SKIPPED: A skipped condition.   ERRORED: An error condition.   STOPPED: A stopped condition.  
     */
    uniqueProblems?: UniqueProblemsByExecutionResultMap;
    /**
     * If the number of items that are returned is significantly large, this is an identifier that is also returned, which can be used in a subsequent call to this operation to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListUploadsRequest {
    /**
     * The Amazon Resource Name (ARN) of the project for which you want to list uploads.
     */
    arn: AmazonResourceName;
    /**
     * The type of upload. Must be one of the following values:   ANDROID_APP: An Android upload.   IOS_APP: An iOS upload.   WEB_APP: A web appliction upload.   EXTERNAL_DATA: An external data upload.   APPIUM_JAVA_JUNIT_TEST_PACKAGE: An Appium Java JUnit test package upload.   APPIUM_JAVA_TESTNG_TEST_PACKAGE: An Appium Java TestNG test package upload.   APPIUM_PYTHON_TEST_PACKAGE: An Appium Python test package upload.   APPIUM_NODE_TEST_PACKAGE: An Appium Node.js test package upload.   APPIUM_RUBY_TEST_PACKAGE: An Appium Ruby test package upload.   APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE: An Appium Java JUnit test package upload for a web app.   APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE: An Appium Java TestNG test package upload for a web app.   APPIUM_WEB_PYTHON_TEST_PACKAGE: An Appium Python test package upload for a web app.   APPIUM_WEB_NODE_TEST_PACKAGE: An Appium Node.js test package upload for a web app.   APPIUM_WEB_RUBY_TEST_PACKAGE: An Appium Ruby test package upload for a web app.   CALABASH_TEST_PACKAGE: A Calabash test package upload.   INSTRUMENTATION_TEST_PACKAGE: An instrumentation upload.   UIAUTOMATION_TEST_PACKAGE: A uiautomation test package upload.   UIAUTOMATOR_TEST_PACKAGE: A uiautomator test package upload.   XCTEST_TEST_PACKAGE: An XCode test package upload.   XCTEST_UI_TEST_PACKAGE: An XCode UI test package upload.   APPIUM_JAVA_JUNIT_TEST_SPEC: An Appium Java JUnit test spec upload.   APPIUM_JAVA_TESTNG_TEST_SPEC: An Appium Java TestNG test spec upload.   APPIUM_PYTHON_TEST_SPEC: An Appium Python test spec upload.   APPIUM_NODE_TEST_SPEC: An Appium Node.js test spec upload.    APPIUM_RUBY_TEST_SPEC: An Appium Ruby test spec upload.   APPIUM_WEB_JAVA_JUNIT_TEST_SPEC: An Appium Java JUnit test spec upload for a web app.   APPIUM_WEB_JAVA_TESTNG_TEST_SPEC: An Appium Java TestNG test spec upload for a web app.   APPIUM_WEB_PYTHON_TEST_SPEC: An Appium Python test spec upload for a web app.   APPIUM_WEB_NODE_TEST_SPEC: An Appium Node.js test spec upload for a web app.   APPIUM_WEB_RUBY_TEST_SPEC: An Appium Ruby test spec upload for a web app.   INSTRUMENTATION_TEST_SPEC: An instrumentation test spec upload.   XCTEST_UI_TEST_SPEC: An XCode UI test spec upload.  
     */
    type?: UploadType;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListUploadsResult {
    /**
     * Information about the uploads.
     */
    uploads?: Uploads;
    /**
     * If the number of items that are returned is significantly large, this is an identifier that is also returned, which can be used in a subsequent call to this operation to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListVPCEConfigurationsRequest {
    /**
     * An integer specifying the maximum number of items you want to return in the API response.
     */
    maxResults?: Integer;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListVPCEConfigurationsResult {
    /**
     * An array of VPCEConfiguration objects containing information about your VPC endpoint configuration.
     */
    vpceConfigurations?: VPCEConfigurations;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface Location {
    /**
     * The latitude.
     */
    latitude: Double;
    /**
     * The longitude.
     */
    longitude: Double;
  }
  export type Long = number;
  export type MaxSlotMap = {[key: string]: Integer};
  export type Message = string;
  export type Metadata = string;
  export interface MonetaryAmount {
    /**
     * The numerical amount of an offering or transaction.
     */
    amount?: Double;
    /**
     * The currency code of a monetary amount. For example, USD means "U.S. dollars."
     */
    currencyCode?: CurrencyCode;
  }
  export type Name = string;
  export interface NetworkProfile {
    /**
     * The Amazon Resource Name (ARN) of the network profile.
     */
    arn?: AmazonResourceName;
    /**
     * The name of the network profile.
     */
    name?: Name;
    /**
     * The description of the network profile.
     */
    description?: Message;
    /**
     * The type of network profile. Valid values are listed below.
     */
    type?: NetworkProfileType;
    /**
     * The data throughput rate in bits per second, as an integer from 0 to 104857600.
     */
    uplinkBandwidthBits?: Long;
    /**
     * The data throughput rate in bits per second, as an integer from 0 to 104857600.
     */
    downlinkBandwidthBits?: Long;
    /**
     * Delay time for all packets to destination in milliseconds as an integer from 0 to 2000.
     */
    uplinkDelayMs?: Long;
    /**
     * Delay time for all packets to destination in milliseconds as an integer from 0 to 2000.
     */
    downlinkDelayMs?: Long;
    /**
     * Time variation in the delay of received packets in milliseconds as an integer from 0 to 2000.
     */
    uplinkJitterMs?: Long;
    /**
     * Time variation in the delay of received packets in milliseconds as an integer from 0 to 2000.
     */
    downlinkJitterMs?: Long;
    /**
     * Proportion of transmitted packets that fail to arrive from 0 to 100 percent.
     */
    uplinkLossPercent?: PercentInteger;
    /**
     * Proportion of received packets that fail to arrive from 0 to 100 percent.
     */
    downlinkLossPercent?: PercentInteger;
  }
  export type NetworkProfileType = "CURATED"|"PRIVATE"|string;
  export type NetworkProfiles = NetworkProfile[];
  export interface Offering {
    /**
     * The ID that corresponds to a device offering.
     */
    id?: OfferingIdentifier;
    /**
     * A string describing the offering.
     */
    description?: Message;
    /**
     * The type of offering (e.g., "RECURRING") for a device.
     */
    type?: OfferingType;
    /**
     * The platform of the device (e.g., ANDROID or IOS).
     */
    platform?: DevicePlatform;
    /**
     * Specifies whether there are recurring charges for the offering.
     */
    recurringCharges?: RecurringCharges;
  }
  export type OfferingIdentifier = string;
  export interface OfferingPromotion {
    /**
     * The ID of the offering promotion.
     */
    id?: OfferingPromotionIdentifier;
    /**
     * A string describing the offering promotion.
     */
    description?: Message;
  }
  export type OfferingPromotionIdentifier = string;
  export type OfferingPromotions = OfferingPromotion[];
  export interface OfferingStatus {
    /**
     * The type specified for the offering status.
     */
    type?: OfferingTransactionType;
    /**
     * Represents the metadata of an offering status.
     */
    offering?: Offering;
    /**
     * The number of available devices in the offering.
     */
    quantity?: Integer;
    /**
     * The date on which the offering is effective.
     */
    effectiveOn?: DateTime;
  }
  export type OfferingStatusMap = {[key: string]: OfferingStatus};
  export interface OfferingTransaction {
    /**
     * The status of an offering transaction.
     */
    offeringStatus?: OfferingStatus;
    /**
     * The transaction ID of the offering transaction.
     */
    transactionId?: TransactionIdentifier;
    /**
     * The ID that corresponds to a device offering promotion.
     */
    offeringPromotionId?: OfferingPromotionIdentifier;
    /**
     * The date on which an offering transaction was created.
     */
    createdOn?: DateTime;
    /**
     * The cost of an offering transaction.
     */
    cost?: MonetaryAmount;
  }
  export type OfferingTransactionType = "PURCHASE"|"RENEW"|"SYSTEM"|string;
  export type OfferingTransactions = OfferingTransaction[];
  export type OfferingType = "RECURRING"|string;
  export type Offerings = Offering[];
  export type PackageIds = String[];
  export type PaginationToken = string;
  export type PercentInteger = number;
  export interface Problem {
    /**
     * Information about the associated run.
     */
    run?: ProblemDetail;
    /**
     * Information about the associated job.
     */
    job?: ProblemDetail;
    /**
     * Information about the associated suite.
     */
    suite?: ProblemDetail;
    /**
     * Information about the associated test.
     */
    test?: ProblemDetail;
    /**
     * Information about the associated device.
     */
    device?: Device;
    /**
     * The problem's result. Allowed values include:   PENDING: A pending condition.   PASSED: A passing condition.   WARNED: A warning condition.   FAILED: A failed condition.   SKIPPED: A skipped condition.   ERRORED: An error condition.   STOPPED: A stopped condition.  
     */
    result?: ExecutionResult;
    /**
     * A message about the problem's result.
     */
    message?: Message;
  }
  export interface ProblemDetail {
    /**
     * The problem detail's ARN.
     */
    arn?: AmazonResourceName;
    /**
     * The problem detail's name.
     */
    name?: Name;
  }
  export type Problems = Problem[];
  export interface Project {
    /**
     * The project's ARN.
     */
    arn?: AmazonResourceName;
    /**
     * The project's name.
     */
    name?: Name;
    /**
     * The default number of minutes (at the project level) a test run will execute before it times out. Default value is 60 minutes.
     */
    defaultJobTimeoutMinutes?: JobTimeoutMinutes;
    /**
     * When the project was created.
     */
    created?: DateTime;
  }
  export type Projects = Project[];
  export interface PurchaseOfferingRequest {
    /**
     * The ID of the offering.
     */
    offeringId?: OfferingIdentifier;
    /**
     * The number of device slots you wish to purchase in an offering request.
     */
    quantity?: Integer;
    /**
     * The ID of the offering promotion to be applied to the purchase.
     */
    offeringPromotionId?: OfferingPromotionIdentifier;
  }
  export interface PurchaseOfferingResult {
    /**
     * Represents the offering transaction for the purchase result.
     */
    offeringTransaction?: OfferingTransaction;
  }
  export type PurchasedDevicesMap = {[key: string]: Integer};
  export interface Radios {
    /**
     * True if Wi-Fi is enabled at the beginning of the test; otherwise, false.
     */
    wifi?: Boolean;
    /**
     * True if Bluetooth is enabled at the beginning of the test; otherwise, false.
     */
    bluetooth?: Boolean;
    /**
     * True if NFC is enabled at the beginning of the test; otherwise, false.
     */
    nfc?: Boolean;
    /**
     * True if GPS is enabled at the beginning of the test; otherwise, false.
     */
    gps?: Boolean;
  }
  export interface RecurringCharge {
    /**
     * The cost of the recurring charge.
     */
    cost?: MonetaryAmount;
    /**
     * The frequency in which charges will recur.
     */
    frequency?: RecurringChargeFrequency;
  }
  export type RecurringChargeFrequency = "MONTHLY"|string;
  export type RecurringCharges = RecurringCharge[];
  export interface RemoteAccessSession {
    /**
     * The Amazon Resource Name (ARN) of the remote access session.
     */
    arn?: AmazonResourceName;
    /**
     * The name of the remote access session.
     */
    name?: Name;
    /**
     * The date and time the remote access session was created.
     */
    created?: DateTime;
    /**
     * The status of the remote access session. Can be any of the following:   PENDING: A pending status.   PENDING_CONCURRENCY: A pending concurrency status.   PENDING_DEVICE: A pending device status.   PROCESSING: A processing status.   SCHEDULING: A scheduling status.   PREPARING: A preparing status.   RUNNING: A running status.   COMPLETED: A completed status.   STOPPING: A stopping status.  
     */
    status?: ExecutionStatus;
    /**
     * The result of the remote access session. Can be any of the following:   PENDING: A pending condition.   PASSED: A passing condition.   WARNED: A warning condition.   FAILED: A failed condition.   SKIPPED: A skipped condition.   ERRORED: An error condition.   STOPPED: A stopped condition.  
     */
    result?: ExecutionResult;
    /**
     * A message about the remote access session.
     */
    message?: Message;
    /**
     * The date and time the remote access session was started.
     */
    started?: DateTime;
    /**
     * The date and time the remote access session was stopped.
     */
    stopped?: DateTime;
    /**
     * The device (phone or tablet) used in the remote access session.
     */
    device?: Device;
    /**
     * The Amazon Resource Name (ARN) of the instance.
     */
    instanceArn?: AmazonResourceName;
    /**
     * This flag is set to true if remote debugging is enabled for the remote access session.
     */
    remoteDebugEnabled?: Boolean;
    /**
     * This flag is set to true if remote recording is enabled for the remote access session.
     */
    remoteRecordEnabled?: Boolean;
    /**
     * The Amazon Resource Name (ARN) for the app to be recorded in the remote access session.
     */
    remoteRecordAppArn?: AmazonResourceName;
    /**
     * IP address of the EC2 host where you need to connect to remotely debug devices. Only returned if remote debugging is enabled for the remote access session.
     */
    hostAddress?: HostAddress;
    /**
     * Unique identifier of your client for the remote access session. Only returned if remote debugging is enabled for the remote access session.
     */
    clientId?: ClientId;
    /**
     * The billing method of the remote access session. Possible values include METERED or UNMETERED. For more information about metered devices, see AWS Device Farm terminology."
     */
    billingMethod?: BillingMethod;
    /**
     * The number of minutes a device is used in a remote access sesssion (including setup and teardown minutes).
     */
    deviceMinutes?: DeviceMinutes;
    /**
     * The endpoint for the remote access sesssion.
     */
    endpoint?: String;
    /**
     * Unique device identifier for the remote device. Only returned if remote debugging is enabled for the remote access session.
     */
    deviceUdid?: String;
    /**
     * The interaction mode of the remote access session. Valid values are:   INTERACTIVE: You can interact with the iOS device by viewing, touching, and rotating the screen. You cannot run XCUITest framework-based tests in this mode.   NO_VIDEO: You are connected to the device but cannot interact with it or view the screen. This mode has the fastest test execution speed. You can run XCUITest framework-based tests in this mode.   VIDEO_ONLY: You can view the screen but cannot touch or rotate it. You can run XCUITest framework-based tests and watch the screen in this mode.  
     */
    interactionMode?: InteractionMode;
    /**
     * When set to true, for private devices, Device Farm will not sign your app again. For public devices, Device Farm always signs your apps again and this parameter has no effect. For more information about how Device Farm re-signs your app(s), see Do you modify my app? in the AWS Device Farm FAQs.
     */
    skipAppResign?: SkipAppResign;
  }
  export type RemoteAccessSessions = RemoteAccessSession[];
  export interface RenewOfferingRequest {
    /**
     * The ID of a request to renew an offering.
     */
    offeringId?: OfferingIdentifier;
    /**
     * The quantity requested in an offering renewal.
     */
    quantity?: Integer;
  }
  export interface RenewOfferingResult {
    /**
     * Represents the status of the offering transaction for the renewal.
     */
    offeringTransaction?: OfferingTransaction;
  }
  export interface Resolution {
    /**
     * The screen resolution's width, expressed in pixels.
     */
    width?: Integer;
    /**
     * The screen resolution's height, expressed in pixels.
     */
    height?: Integer;
  }
  export interface Rule {
    /**
     * The rule's stringified attribute. For example, specify the value as "\"abc\"". The supported operators for each attribute are provided in the following list.  APPIUM_VERSION  The Appium version for the test.  Supported operators: CONTAINS   ARN  The Amazon Resource Name (ARN) of the device. For example, "arn:aws:devicefarm:us-west-2::device:12345Example".  Supported operators: EQUALS, IN, NOT_IN   AVAILABILITY  The current availability of the device. Valid values are "AVAILABLE", "HIGHLY_AVAILABLE", "BUSY", or "TEMPORARY_NOT_AVAILABLE".  Supported operators: EQUALS   FLEET_TYPE  The fleet type. Valid values are "PUBLIC" or "PRIVATE".  Supported operators: EQUALS   FORM_FACTOR  The device form factor. Valid values are "PHONE" or "TABLET".  Supported operators: EQUALS, IN, NOT_IN   INSTANCE_ARN  The Amazon Resource Name (ARN) of the device instance.  Supported operators: IN, NOT_IN   INSTANCE_LABELS  The label of the device instance.  Supported operators: CONTAINS   MANUFACTURER  The device manufacturer. For example, "Apple".  Supported operators: EQUALS, IN, NOT_IN   MODEL  The device model, such as "Apple iPad Air 2" or "Google Pixel".  Supported operators: CONTAINS, EQUALS, IN, NOT_IN   OS_VERSION  The operating system version. For example, "10.3.2".  Supported operators: EQUALS, GREATER_THAN, GREATER_THAN_OR_EQUALS, IN, LESS_THAN, LESS_THAN_OR_EQUALS, NOT_IN   PLATFORM  The device platform. Valid values are "ANDROID" or "IOS".  Supported operators: EQUALS, IN, NOT_IN   REMOTE_ACCESS_ENABLED  Whether the device is enabled for remote access. Valid values are "TRUE" or "FALSE".  Supported operators: EQUALS   REMOTE_DEBUG_ENABLED  Whether the device is enabled for remote debugging. Valid values are "TRUE" or "FALSE".  Supported operators: EQUALS   
     */
    attribute?: DeviceAttribute;
    /**
     * Specifies how Device Farm compares the rule's attribute to the value. For the operators that are supported by each attribute, see the attribute descriptions.
     */
    operator?: RuleOperator;
    /**
     * The rule's value.
     */
    value?: String;
  }
  export type RuleOperator = "EQUALS"|"LESS_THAN"|"LESS_THAN_OR_EQUALS"|"GREATER_THAN"|"GREATER_THAN_OR_EQUALS"|"IN"|"NOT_IN"|"CONTAINS"|string;
  export type Rules = Rule[];
  export interface Run {
    /**
     * The run's ARN.
     */
    arn?: AmazonResourceName;
    /**
     * The run's name.
     */
    name?: Name;
    /**
     * The run's type. Must be one of the following values:   BUILTIN_FUZZ: The built-in fuzz type.   BUILTIN_EXPLORER: For Android, an app explorer that will traverse an Android app, interacting with it and capturing screenshots at the same time.   APPIUM_JAVA_JUNIT: The Appium Java JUnit type.   APPIUM_JAVA_TESTNG: The Appium Java TestNG type.   APPIUM_PYTHON: The Appium Python type.   APPIUM_NODE: The Appium Node.js type.   APPIUM_RUBY: The Appium Ruby type.   APPIUM_WEB_JAVA_JUNIT: The Appium Java JUnit type for web apps.   APPIUM_WEB_JAVA_TESTNG: The Appium Java TestNG type for web apps.   APPIUM_WEB_PYTHON: The Appium Python type for web apps.   APPIUM_WEB_NODE: The Appium Node.js type for web apps.   APPIUM_WEB_RUBY: The Appium Ruby type for web apps.   CALABASH: The Calabash type.   INSTRUMENTATION: The Instrumentation type.   UIAUTOMATION: The uiautomation type.   UIAUTOMATOR: The uiautomator type.   XCTEST: The XCode test type.   XCTEST_UI: The XCode UI test type.  
     */
    type?: TestType;
    /**
     * The run's platform. Allowed values include:   ANDROID: The Android platform.   IOS: The iOS platform.  
     */
    platform?: DevicePlatform;
    /**
     * When the run was created.
     */
    created?: DateTime;
    /**
     * The run's status. Allowed values include:   PENDING: A pending status.   PENDING_CONCURRENCY: A pending concurrency status.   PENDING_DEVICE: A pending device status.   PROCESSING: A processing status.   SCHEDULING: A scheduling status.   PREPARING: A preparing status.   RUNNING: A running status.   COMPLETED: A completed status.   STOPPING: A stopping status.  
     */
    status?: ExecutionStatus;
    /**
     * The run's result. Allowed values include:   PENDING: A pending condition.   PASSED: A passing condition.   WARNED: A warning condition.   FAILED: A failed condition.   SKIPPED: A skipped condition.   ERRORED: An error condition.   STOPPED: A stopped condition.  
     */
    result?: ExecutionResult;
    /**
     * The run's start time.
     */
    started?: DateTime;
    /**
     * The run's stop time.
     */
    stopped?: DateTime;
    /**
     * The run's result counters.
     */
    counters?: Counters;
    /**
     * A message about the run's result.
     */
    message?: Message;
    /**
     * The total number of jobs for the run.
     */
    totalJobs?: Integer;
    /**
     * The total number of completed jobs.
     */
    completedJobs?: Integer;
    /**
     * Specifies the billing method for a test run: metered or unmetered. If the parameter is not specified, the default value is metered.
     */
    billingMethod?: BillingMethod;
    /**
     * Represents the total (metered or unmetered) minutes used by the test run.
     */
    deviceMinutes?: DeviceMinutes;
    /**
     * The network profile being used for a test run.
     */
    networkProfile?: NetworkProfile;
    /**
     * Read-only URL for an object in S3 bucket where you can get the parsing results of the test package. If the test package doesn't parse, the reason why it doesn't parse appears in the file that this URL points to.
     */
    parsingResultUrl?: String;
    /**
     * Supporting field for the result field. Set only if result is SKIPPED. PARSING_FAILED if the result is skipped because of test package parsing failure.
     */
    resultCode?: ExecutionResultCode;
    /**
     * For fuzz tests, this is a seed to use for randomizing the UI fuzz test. Using the same seed value between tests ensures identical event sequences.
     */
    seed?: Integer;
    /**
     * An app to upload or that has been uploaded.
     */
    appUpload?: AmazonResourceName;
    /**
     * For fuzz tests, this is the number of events, between 1 and 10000, that the UI fuzz test should perform.
     */
    eventCount?: Integer;
    /**
     * The number of minutes the job will execute before it times out.
     */
    jobTimeoutMinutes?: JobTimeoutMinutes;
    /**
     * The ARN of the device pool for the run.
     */
    devicePoolArn?: AmazonResourceName;
    /**
     * Information about the locale that is used for the run.
     */
    locale?: String;
    /**
     * Information about the radio states for the run.
     */
    radios?: Radios;
    /**
     * Information about the location that is used for the run.
     */
    location?: Location;
    /**
     * Output CustomerArtifactPaths object for the test run.
     */
    customerArtifactPaths?: CustomerArtifactPaths;
    /**
     * The Device Farm console URL for the recording of the run.
     */
    webUrl?: String;
    /**
     * When set to true, for private devices, Device Farm will not sign your app again. For public devices, Device Farm always signs your apps again and this parameter has no effect. For more information about how Device Farm re-signs your app(s), see Do you modify my app? in the AWS Device Farm FAQs.
     */
    skipAppResign?: SkipAppResign;
    /**
     * The ARN of the YAML-formatted test specification for the run.
     */
    testSpecArn?: AmazonResourceName;
    /**
     * The results of a device filter used to select the devices for a test run.
     */
    deviceSelectionResult?: DeviceSelectionResult;
  }
  export type Runs = Run[];
  export interface Sample {
    /**
     * The sample's ARN.
     */
    arn?: AmazonResourceName;
    /**
     * The sample's type. Must be one of the following values:   CPU: A CPU sample type. This is expressed as the app processing CPU time (including child processes) as reported by process, as a percentage.   MEMORY: A memory usage sample type. This is expressed as the total proportional set size of an app process, in kilobytes.   NATIVE_AVG_DRAWTIME   NATIVE_FPS   NATIVE_FRAMES   NATIVE_MAX_DRAWTIME   NATIVE_MIN_DRAWTIME   OPENGL_AVG_DRAWTIME   OPENGL_FPS   OPENGL_FRAMES   OPENGL_MAX_DRAWTIME   OPENGL_MIN_DRAWTIME   RX   RX_RATE: The total number of bytes per second (TCP and UDP) that are sent, by app process.   THREADS: A threads sample type. This is expressed as the total number of threads per app process.   TX   TX_RATE: The total number of bytes per second (TCP and UDP) that are received, by app process.  
     */
    type?: SampleType;
    /**
     * The pre-signed Amazon S3 URL that can be used with a corresponding GET request to download the sample's file.
     */
    url?: URL;
  }
  export type SampleType = "CPU"|"MEMORY"|"THREADS"|"RX_RATE"|"TX_RATE"|"RX"|"TX"|"NATIVE_FRAMES"|"NATIVE_FPS"|"NATIVE_MIN_DRAWTIME"|"NATIVE_AVG_DRAWTIME"|"NATIVE_MAX_DRAWTIME"|"OPENGL_FRAMES"|"OPENGL_FPS"|"OPENGL_MIN_DRAWTIME"|"OPENGL_AVG_DRAWTIME"|"OPENGL_MAX_DRAWTIME"|string;
  export type Samples = Sample[];
  export interface ScheduleRunConfiguration {
    /**
     * The ARN of the extra data for the run. The extra data is a .zip file that AWS Device Farm will extract to external data for Android or the app's sandbox for iOS.
     */
    extraDataPackageArn?: AmazonResourceName;
    /**
     * Reserved for internal use.
     */
    networkProfileArn?: AmazonResourceName;
    /**
     * Information about the locale that is used for the run.
     */
    locale?: String;
    /**
     * Information about the location that is used for the run.
     */
    location?: Location;
    /**
     * An array of Amazon Resource Names (ARNs) for your VPC endpoint configurations.
     */
    vpceConfigurationArns?: AmazonResourceNames;
    /**
     * Input CustomerArtifactPaths object for the scheduled run configuration.
     */
    customerArtifactPaths?: CustomerArtifactPaths;
    /**
     * Information about the radio states for the run.
     */
    radios?: Radios;
    /**
     * A list of auxiliary apps for the run.
     */
    auxiliaryApps?: AmazonResourceNames;
    /**
     * Specifies the billing method for a test run: metered or unmetered. If the parameter is not specified, the default value is metered.
     */
    billingMethod?: BillingMethod;
  }
  export interface ScheduleRunRequest {
    /**
     * The ARN of the project for the run to be scheduled.
     */
    projectArn: AmazonResourceName;
    /**
     * The ARN of the app to schedule a run.
     */
    appArn?: AmazonResourceName;
    /**
     * The ARN of the device pool for the run to be scheduled.
     */
    devicePoolArn?: AmazonResourceName;
    /**
     * The filter criteria used to dynamically select a set of devices for a test run, as well as the maximum number of devices to be included in the run. Either  devicePoolArn  or  deviceSelectionConfiguration  is required in a request.
     */
    deviceSelectionConfiguration?: DeviceSelectionConfiguration;
    /**
     * The name for the run to be scheduled.
     */
    name?: Name;
    /**
     * Information about the test for the run to be scheduled.
     */
    test: ScheduleRunTest;
    /**
     * Information about the settings for the run to be scheduled.
     */
    configuration?: ScheduleRunConfiguration;
    /**
     * Specifies configuration information about a test run, such as the execution timeout (in minutes).
     */
    executionConfiguration?: ExecutionConfiguration;
  }
  export interface ScheduleRunResult {
    /**
     * Information about the scheduled run.
     */
    run?: Run;
  }
  export interface ScheduleRunTest {
    /**
     * The test's type. Must be one of the following values:   BUILTIN_FUZZ: The built-in fuzz type.   BUILTIN_EXPLORER: For Android, an app explorer that will traverse an Android app, interacting with it and capturing screenshots at the same time.   APPIUM_JAVA_JUNIT: The Appium Java JUnit type.   APPIUM_JAVA_TESTNG: The Appium Java TestNG type.   APPIUM_PYTHON: The Appium Python type.   APPIUM_NODE: The Appium Node.js type.   APPIUM_RUBY: The Appium Ruby type.   APPIUM_WEB_JAVA_JUNIT: The Appium Java JUnit type for web apps.   APPIUM_WEB_JAVA_TESTNG: The Appium Java TestNG type for web apps.   APPIUM_WEB_PYTHON: The Appium Python type for web apps.   APPIUM_WEB_NODE: The Appium Node.js type for web apps.   APPIUM_WEB_RUBY: The Appium Ruby type for web apps.   CALABASH: The Calabash type.   INSTRUMENTATION: The Instrumentation type.   UIAUTOMATION: The uiautomation type.   UIAUTOMATOR: The uiautomator type.   XCTEST: The XCode test type.   XCTEST_UI: The XCode UI test type.  
     */
    type: TestType;
    /**
     * The ARN of the uploaded test that will be run.
     */
    testPackageArn?: AmazonResourceName;
    /**
     * The ARN of the YAML-formatted test specification.
     */
    testSpecArn?: AmazonResourceName;
    /**
     * The test's filter.
     */
    filter?: Filter;
    /**
     * The test's parameters, such as test framework parameters and fixture settings. Parameters are represented by name-value pairs of strings. For all tests:   app_performance_monitoring: Performance monitoring is enabled by default. Set this parameter to "false" to disable it.   For Calabash tests:   profile: A cucumber profile, for example, "my_profile_name".   tags: You can limit execution to features or scenarios that have (or don't have) certain tags, for example, "@smoke" or "@smoke,~@wip".   For Appium tests (all types):   appium_version: The Appium version. Currently supported values are "1.6.5" (and higher), "latest", and "default".   “latest” will run the latest Appium version supported by Device Farm (1.9.1).   For “default”, Device Farm will choose a compatible version of Appium for the device. The current behavior is to run 1.7.2 on Android devices and iOS 9 and earlier, 1.7.2 for iOS 10 and later.   This behavior is subject to change.     For Fuzz tests (Android only):   event_count: The number of events, between 1 and 10000, that the UI fuzz test should perform.   throttle: The time, in ms, between 0 and 1000, that the UI fuzz test should wait between events.   seed: A seed to use for randomizing the UI fuzz test. Using the same seed value between tests ensures identical event sequences.   For Explorer tests:   username: A username to use if the Explorer encounters a login form. If not supplied, no username will be inserted.   password: A password to use if the Explorer encounters a login form. If not supplied, no password will be inserted.   For Instrumentation:   filter: A test filter string. Examples:   Running a single test case: "com.android.abc.Test1"   Running a single test: "com.android.abc.Test1#smoke"   Running multiple tests: "com.android.abc.Test1,com.android.abc.Test2"     For XCTest and XCTestUI:   filter: A test filter string. Examples:   Running a single test class: "LoginTests"   Running a multiple test classes: "LoginTests,SmokeTests"   Running a single test: "LoginTests/testValid"   Running multiple tests: "LoginTests/testValid,LoginTests/testInvalid"     For UIAutomator:   filter: A test filter string. Examples:   Running a single test case: "com.android.abc.Test1"   Running a single test: "com.android.abc.Test1#smoke"   Running multiple tests: "com.android.abc.Test1,com.android.abc.Test2"    
     */
    parameters?: TestParameters;
  }
  export type ServiceDnsName = string;
  export type SkipAppResign = boolean;
  export type SshPublicKey = string;
  export interface StopJobRequest {
    /**
     * Represents the Amazon Resource Name (ARN) of the Device Farm job you wish to stop.
     */
    arn: AmazonResourceName;
  }
  export interface StopJobResult {
    /**
     * The job that was stopped.
     */
    job?: Job;
  }
  export interface StopRemoteAccessSessionRequest {
    /**
     * The Amazon Resource Name (ARN) of the remote access session you wish to stop.
     */
    arn: AmazonResourceName;
  }
  export interface StopRemoteAccessSessionResult {
    /**
     * A container representing the metadata from the service about the remote access session you are stopping.
     */
    remoteAccessSession?: RemoteAccessSession;
  }
  export interface StopRunRequest {
    /**
     * Represents the Amazon Resource Name (ARN) of the Device Farm run you wish to stop.
     */
    arn: AmazonResourceName;
  }
  export interface StopRunResult {
    /**
     * The run that was stopped.
     */
    run?: Run;
  }
  export type String = string;
  export interface Suite {
    /**
     * The suite's ARN.
     */
    arn?: AmazonResourceName;
    /**
     * The suite's name.
     */
    name?: Name;
    /**
     * The suite's type. Must be one of the following values:   BUILTIN_FUZZ: The built-in fuzz type.   BUILTIN_EXPLORER: For Android, an app explorer that will traverse an Android app, interacting with it and capturing screenshots at the same time.   APPIUM_JAVA_JUNIT: The Appium Java JUnit type.   APPIUM_JAVA_TESTNG: The Appium Java TestNG type.   APPIUM_PYTHON: The Appium Python type.   APPIUM_NODE: The Appium Node.js type.   APPIUM_RUBY: The Appium Ruby type.   APPIUM_WEB_JAVA_JUNIT: The Appium Java JUnit type for web apps.   APPIUM_WEB_JAVA_TESTNG: The Appium Java TestNG type for web apps.   APPIUM_WEB_PYTHON: The Appium Python type for web apps.   APPIUM_WEB_NODE: The Appium Node.js type for web apps.   APPIUM_WEB_RUBY: The Appium Ruby type for web apps.   CALABASH: The Calabash type.   INSTRUMENTATION: The Instrumentation type.   UIAUTOMATION: The uiautomation type.   UIAUTOMATOR: The uiautomator type.   XCTEST: The XCode test type.   XCTEST_UI: The XCode UI test type.  
     */
    type?: TestType;
    /**
     * When the suite was created.
     */
    created?: DateTime;
    /**
     * The suite's status. Allowed values include:   PENDING: A pending status.   PENDING_CONCURRENCY: A pending concurrency status.   PENDING_DEVICE: A pending device status.   PROCESSING: A processing status.   SCHEDULING: A scheduling status.   PREPARING: A preparing status.   RUNNING: A running status.   COMPLETED: A completed status.   STOPPING: A stopping status.  
     */
    status?: ExecutionStatus;
    /**
     * The suite's result. Allowed values include:   PENDING: A pending condition.   PASSED: A passing condition.   WARNED: A warning condition.   FAILED: A failed condition.   SKIPPED: A skipped condition.   ERRORED: An error condition.   STOPPED: A stopped condition.  
     */
    result?: ExecutionResult;
    /**
     * The suite's start time.
     */
    started?: DateTime;
    /**
     * The suite's stop time.
     */
    stopped?: DateTime;
    /**
     * The suite's result counters.
     */
    counters?: Counters;
    /**
     * A message about the suite's result.
     */
    message?: Message;
    /**
     * Represents the total (metered or unmetered) minutes used by the test suite.
     */
    deviceMinutes?: DeviceMinutes;
  }
  export type Suites = Suite[];
  export interface Test {
    /**
     * The test's ARN.
     */
    arn?: AmazonResourceName;
    /**
     * The test's name.
     */
    name?: Name;
    /**
     * The test's type. Must be one of the following values:   BUILTIN_FUZZ: The built-in fuzz type.   BUILTIN_EXPLORER: For Android, an app explorer that will traverse an Android app, interacting with it and capturing screenshots at the same time.   APPIUM_JAVA_JUNIT: The Appium Java JUnit type.   APPIUM_JAVA_TESTNG: The Appium Java TestNG type.   APPIUM_PYTHON: The Appium Python type.   APPIUM_NODE: The Appium Node.js type.   APPIUM_RUBY: The Appium Ruby type.   APPIUM_WEB_JAVA_JUNIT: The Appium Java JUnit type for web apps.   APPIUM_WEB_JAVA_TESTNG: The Appium Java TestNG type for web apps.   APPIUM_WEB_PYTHON: The Appium Python type for web apps.   APPIUM_WEB_NODE: The Appium Node.js type for web apps.   APPIUM_WEB_RUBY: The Appium Ruby type for web apps.   CALABASH: The Calabash type.   INSTRUMENTATION: The Instrumentation type.   UIAUTOMATION: The uiautomation type.   UIAUTOMATOR: The uiautomator type.   XCTEST: The XCode test type.   XCTEST_UI: The XCode UI test type.  
     */
    type?: TestType;
    /**
     * When the test was created.
     */
    created?: DateTime;
    /**
     * The test's status. Allowed values include:   PENDING: A pending status.   PENDING_CONCURRENCY: A pending concurrency status.   PENDING_DEVICE: A pending device status.   PROCESSING: A processing status.   SCHEDULING: A scheduling status.   PREPARING: A preparing status.   RUNNING: A running status.   COMPLETED: A completed status.   STOPPING: A stopping status.  
     */
    status?: ExecutionStatus;
    /**
     * The test's result. Allowed values include:   PENDING: A pending condition.   PASSED: A passing condition.   WARNED: A warning condition.   FAILED: A failed condition.   SKIPPED: A skipped condition.   ERRORED: An error condition.   STOPPED: A stopped condition.  
     */
    result?: ExecutionResult;
    /**
     * The test's start time.
     */
    started?: DateTime;
    /**
     * The test's stop time.
     */
    stopped?: DateTime;
    /**
     * The test's result counters.
     */
    counters?: Counters;
    /**
     * A message about the test's result.
     */
    message?: Message;
    /**
     * Represents the total (metered or unmetered) minutes used by the test.
     */
    deviceMinutes?: DeviceMinutes;
  }
  export type TestParameters = {[key: string]: String};
  export type TestType = "BUILTIN_FUZZ"|"BUILTIN_EXPLORER"|"WEB_PERFORMANCE_PROFILE"|"APPIUM_JAVA_JUNIT"|"APPIUM_JAVA_TESTNG"|"APPIUM_PYTHON"|"APPIUM_NODE"|"APPIUM_RUBY"|"APPIUM_WEB_JAVA_JUNIT"|"APPIUM_WEB_JAVA_TESTNG"|"APPIUM_WEB_PYTHON"|"APPIUM_WEB_NODE"|"APPIUM_WEB_RUBY"|"CALABASH"|"INSTRUMENTATION"|"UIAUTOMATION"|"UIAUTOMATOR"|"XCTEST"|"XCTEST_UI"|"REMOTE_ACCESS_RECORD"|"REMOTE_ACCESS_REPLAY"|string;
  export type Tests = Test[];
  export type TransactionIdentifier = string;
  export interface TrialMinutes {
    /**
     * The total number of free trial minutes that the account started with.
     */
    total?: Double;
    /**
     * The number of free trial minutes remaining in the account.
     */
    remaining?: Double;
  }
  export type URL = string;
  export interface UniqueProblem {
    /**
     * A message about the unique problems' result.
     */
    message?: Message;
    /**
     * Information about the problems.
     */
    problems?: Problems;
  }
  export type UniqueProblems = UniqueProblem[];
  export type UniqueProblemsByExecutionResultMap = {[key: string]: UniqueProblems};
  export interface UpdateDeviceInstanceRequest {
    /**
     * The Amazon Resource Name (ARN) of the device instance.
     */
    arn: AmazonResourceName;
    /**
     * The Amazon Resource Name (ARN) of the profile that you want to associate with the device instance.
     */
    profileArn?: AmazonResourceName;
    /**
     * An array of strings that you want to associate with the device instance.
     */
    labels?: InstanceLabels;
  }
  export interface UpdateDeviceInstanceResult {
    /**
     * An object containing information about your device instance.
     */
    deviceInstance?: DeviceInstance;
  }
  export interface UpdateDevicePoolRequest {
    /**
     * The Amazon Resourc Name (ARN) of the Device Farm device pool you wish to update.
     */
    arn: AmazonResourceName;
    /**
     * A string representing the name of the device pool you wish to update.
     */
    name?: Name;
    /**
     * A description of the device pool you wish to update.
     */
    description?: Message;
    /**
     * Represents the rules you wish to modify for the device pool. Updating rules is optional; however, if you choose to update rules for your request, the update will replace the existing rules.
     */
    rules?: Rules;
    /**
     * The number of devices that Device Farm can add to your device pool. Device Farm adds devices that are available and that meet the criteria that you assign for the rules parameter. Depending on how many devices meet these constraints, your device pool might contain fewer devices than the value for this parameter. By specifying the maximum number of devices, you can control the costs that you incur by running tests. If you use this parameter in your request, you cannot use the clearMaxDevices parameter in the same request.
     */
    maxDevices?: Integer;
    /**
     * Sets whether the maxDevices parameter applies to your device pool. If you set this parameter to true, the maxDevices parameter does not apply, and Device Farm does not limit the number of devices that it adds to your device pool. In this case, Device Farm adds all available devices that meet the criteria that are specified for the rules parameter. If you use this parameter in your request, you cannot use the maxDevices parameter in the same request.
     */
    clearMaxDevices?: Boolean;
  }
  export interface UpdateDevicePoolResult {
    /**
     * The device pool you just updated.
     */
    devicePool?: DevicePool;
  }
  export interface UpdateInstanceProfileRequest {
    /**
     * The Amazon Resource Name (ARN) of the instance profile.
     */
    arn: AmazonResourceName;
    /**
     * The updated name for your instance profile.
     */
    name?: Name;
    /**
     * The updated description for your instance profile.
     */
    description?: Message;
    /**
     * The updated choice for whether you want to specify package cleanup. The default value is false for private devices.
     */
    packageCleanup?: Boolean;
    /**
     * An array of strings specifying the list of app packages that should not be cleaned up from the device after a test run is over. The list of packages is only considered if you set packageCleanup to true.
     */
    excludeAppPackagesFromCleanup?: PackageIds;
    /**
     * The updated choice for whether you want to reboot the device after use. The default value is true.
     */
    rebootAfterUse?: Boolean;
  }
  export interface UpdateInstanceProfileResult {
    /**
     * An object containing information about your instance profile.
     */
    instanceProfile?: InstanceProfile;
  }
  export interface UpdateNetworkProfileRequest {
    /**
     * The Amazon Resource Name (ARN) of the project for which you want to update network profile settings.
     */
    arn: AmazonResourceName;
    /**
     * The name of the network profile about which you are returning information.
     */
    name?: Name;
    /**
     * The descriptoin of the network profile about which you are returning information.
     */
    description?: Message;
    /**
     * The type of network profile you wish to return information about. Valid values are listed below.
     */
    type?: NetworkProfileType;
    /**
     * The data throughput rate in bits per second, as an integer from 0 to 104857600.
     */
    uplinkBandwidthBits?: Long;
    /**
     * The data throughput rate in bits per second, as an integer from 0 to 104857600.
     */
    downlinkBandwidthBits?: Long;
    /**
     * Delay time for all packets to destination in milliseconds as an integer from 0 to 2000.
     */
    uplinkDelayMs?: Long;
    /**
     * Delay time for all packets to destination in milliseconds as an integer from 0 to 2000.
     */
    downlinkDelayMs?: Long;
    /**
     * Time variation in the delay of received packets in milliseconds as an integer from 0 to 2000.
     */
    uplinkJitterMs?: Long;
    /**
     * Time variation in the delay of received packets in milliseconds as an integer from 0 to 2000.
     */
    downlinkJitterMs?: Long;
    /**
     * Proportion of transmitted packets that fail to arrive from 0 to 100 percent.
     */
    uplinkLossPercent?: PercentInteger;
    /**
     * Proportion of received packets that fail to arrive from 0 to 100 percent.
     */
    downlinkLossPercent?: PercentInteger;
  }
  export interface UpdateNetworkProfileResult {
    /**
     * A list of the available network profiles.
     */
    networkProfile?: NetworkProfile;
  }
  export interface UpdateProjectRequest {
    /**
     * The Amazon Resource Name (ARN) of the project whose name you wish to update.
     */
    arn: AmazonResourceName;
    /**
     * A string representing the new name of the project that you are updating.
     */
    name?: Name;
    /**
     * The number of minutes a test run in the project will execute before it times out.
     */
    defaultJobTimeoutMinutes?: JobTimeoutMinutes;
  }
  export interface UpdateProjectResult {
    /**
     * The project you wish to update.
     */
    project?: Project;
  }
  export interface UpdateUploadRequest {
    /**
     * The Amazon Resource Name (ARN) of the uploaded test spec.
     */
    arn: AmazonResourceName;
    /**
     * The upload's test spec file name. The name should not contain the '/' character. The test spec file name must end with the .yaml or .yml file extension.
     */
    name?: Name;
    /**
     * The upload's content type (for example, "application/x-yaml").
     */
    contentType?: ContentType;
    /**
     * Set to true if the YAML file has changed and needs to be updated; otherwise, set to false.
     */
    editContent?: Boolean;
  }
  export interface UpdateUploadResult {
    /**
     * A test spec uploaded to Device Farm.
     */
    upload?: Upload;
  }
  export interface UpdateVPCEConfigurationRequest {
    /**
     * The Amazon Resource Name (ARN) of the VPC endpoint configuration you want to update.
     */
    arn: AmazonResourceName;
    /**
     * The friendly name you give to your VPC endpoint configuration, to manage your configurations more easily.
     */
    vpceConfigurationName?: VPCEConfigurationName;
    /**
     * The name of the VPC endpoint service running inside your AWS account that you want Device Farm to test.
     */
    vpceServiceName?: VPCEServiceName;
    /**
     * The DNS (domain) name used to connect to your private service in your Amazon VPC. The DNS name must not already be in use on the Internet.
     */
    serviceDnsName?: ServiceDnsName;
    /**
     * An optional description, providing more details about your VPC endpoint configuration.
     */
    vpceConfigurationDescription?: VPCEConfigurationDescription;
  }
  export interface UpdateVPCEConfigurationResult {
    /**
     * An object containing information about your VPC endpoint configuration.
     */
    vpceConfiguration?: VPCEConfiguration;
  }
  export interface Upload {
    /**
     * The upload's ARN.
     */
    arn?: AmazonResourceName;
    /**
     * The upload's file name.
     */
    name?: Name;
    /**
     * When the upload was created.
     */
    created?: DateTime;
    /**
     * The upload's type. Must be one of the following values:   ANDROID_APP: An Android upload.   IOS_APP: An iOS upload.   WEB_APP: A web appliction upload.   EXTERNAL_DATA: An external data upload.   APPIUM_JAVA_JUNIT_TEST_PACKAGE: An Appium Java JUnit test package upload.   APPIUM_JAVA_TESTNG_TEST_PACKAGE: An Appium Java TestNG test package upload.   APPIUM_PYTHON_TEST_PACKAGE: An Appium Python test package upload.   APPIUM_NODE_TEST_PACKAGE: An Appium Node.js test package upload.   APPIUM_RUBY_TEST_PACKAGE: An Appium Ruby test package upload.   APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE: An Appium Java JUnit test package upload for web apps.   APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE: An Appium Java TestNG test package upload for web apps.   APPIUM_WEB_PYTHON_TEST_PACKAGE: An Appium Python test package upload for web apps.   APPIUM_WEB_NODE_TEST_PACKAGE: An Appium Node.js test package upload for web apps.   APPIUM_WEB_RUBY_TEST_PACKAGE: An Appium Ruby test package upload for web apps.   CALABASH_TEST_PACKAGE: A Calabash test package upload.   INSTRUMENTATION_TEST_PACKAGE: An instrumentation upload.   UIAUTOMATION_TEST_PACKAGE: A uiautomation test package upload.   UIAUTOMATOR_TEST_PACKAGE: A uiautomator test package upload.   XCTEST_TEST_PACKAGE: An XCode test package upload.   XCTEST_UI_TEST_PACKAGE: An XCode UI test package upload.   APPIUM_JAVA_JUNIT_TEST_SPEC: An Appium Java JUnit test spec upload.   APPIUM_JAVA_TESTNG_TEST_SPEC: An Appium Java TestNG test spec upload.   APPIUM_PYTHON_TEST_SPEC: An Appium Python test spec upload.   APPIUM_NODE_TEST_SPEC: An Appium Node.js test spec upload.   APPIUM_RUBY_TEST_SPEC: An Appium Ruby test spec upload.   APPIUM_WEB_JAVA_JUNIT_TEST_SPEC: An Appium Java JUnit test spec upload for a web app.   APPIUM_WEB_JAVA_TESTNG_TEST_SPEC: An Appium Java TestNG test spec upload for a web app.   APPIUM_WEB_PYTHON_TEST_SPEC: An Appium Python test spec upload for a web app.   APPIUM_WEB_NODE_TEST_SPEC: An Appium Node.js test spec upload for a web app.   APPIUM_WEB_RUBY_TEST_SPEC: An Appium Ruby test spec upload for a web app.   INSTRUMENTATION_TEST_SPEC: An instrumentation test spec upload.   XCTEST_UI_TEST_SPEC: An XCode UI test spec upload.  
     */
    type?: UploadType;
    /**
     * The upload's status. Must be one of the following values:   FAILED: A failed status.   INITIALIZED: An initialized status.   PROCESSING: A processing status.   SUCCEEDED: A succeeded status.  
     */
    status?: UploadStatus;
    /**
     * The pre-signed Amazon S3 URL that was used to store a file through a corresponding PUT request.
     */
    url?: URL;
    /**
     * The upload's metadata. For example, for Android, this contains information that is parsed from the manifest and is displayed in the AWS Device Farm console after the associated app is uploaded.
     */
    metadata?: Metadata;
    /**
     * The upload's content type (for example, "application/octet-stream").
     */
    contentType?: ContentType;
    /**
     * A message about the upload's result.
     */
    message?: Message;
    /**
     * The upload's category. Allowed values include:   CURATED: An upload managed by AWS Device Farm.   PRIVATE: An upload managed by the AWS Device Farm customer.  
     */
    category?: UploadCategory;
  }
  export type UploadCategory = "CURATED"|"PRIVATE"|string;
  export type UploadStatus = "INITIALIZED"|"PROCESSING"|"SUCCEEDED"|"FAILED"|string;
  export type UploadType = "ANDROID_APP"|"IOS_APP"|"WEB_APP"|"EXTERNAL_DATA"|"APPIUM_JAVA_JUNIT_TEST_PACKAGE"|"APPIUM_JAVA_TESTNG_TEST_PACKAGE"|"APPIUM_PYTHON_TEST_PACKAGE"|"APPIUM_NODE_TEST_PACKAGE"|"APPIUM_RUBY_TEST_PACKAGE"|"APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE"|"APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE"|"APPIUM_WEB_PYTHON_TEST_PACKAGE"|"APPIUM_WEB_NODE_TEST_PACKAGE"|"APPIUM_WEB_RUBY_TEST_PACKAGE"|"CALABASH_TEST_PACKAGE"|"INSTRUMENTATION_TEST_PACKAGE"|"UIAUTOMATION_TEST_PACKAGE"|"UIAUTOMATOR_TEST_PACKAGE"|"XCTEST_TEST_PACKAGE"|"XCTEST_UI_TEST_PACKAGE"|"APPIUM_JAVA_JUNIT_TEST_SPEC"|"APPIUM_JAVA_TESTNG_TEST_SPEC"|"APPIUM_PYTHON_TEST_SPEC"|"APPIUM_NODE_TEST_SPEC"|"APPIUM_RUBY_TEST_SPEC"|"APPIUM_WEB_JAVA_JUNIT_TEST_SPEC"|"APPIUM_WEB_JAVA_TESTNG_TEST_SPEC"|"APPIUM_WEB_PYTHON_TEST_SPEC"|"APPIUM_WEB_NODE_TEST_SPEC"|"APPIUM_WEB_RUBY_TEST_SPEC"|"INSTRUMENTATION_TEST_SPEC"|"XCTEST_UI_TEST_SPEC"|string;
  export type Uploads = Upload[];
  export interface VPCEConfiguration {
    /**
     * The Amazon Resource Name (ARN) of the VPC endpoint configuration.
     */
    arn?: AmazonResourceName;
    /**
     * The friendly name you give to your VPC endpoint configuration, to manage your configurations more easily.
     */
    vpceConfigurationName?: VPCEConfigurationName;
    /**
     * The name of the VPC endpoint service running inside your AWS account that you want Device Farm to test.
     */
    vpceServiceName?: VPCEServiceName;
    /**
     * The DNS name that maps to the private IP address of the service you want to access.
     */
    serviceDnsName?: ServiceDnsName;
    /**
     * An optional description, providing more details about your VPC endpoint configuration.
     */
    vpceConfigurationDescription?: VPCEConfigurationDescription;
  }
  export type VPCEConfigurationDescription = string;
  export type VPCEConfigurationName = string;
  export type VPCEConfigurations = VPCEConfiguration[];
  export type VPCEServiceName = string;
  export type VideoCapture = boolean;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2015-06-23"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the DeviceFarm client.
   */
  export import Types = DeviceFarm;
}
export = DeviceFarm;
