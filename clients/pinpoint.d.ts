import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class Pinpoint extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Pinpoint.Types.ClientConfiguration)
  config: Config & Pinpoint.Types.ClientConfiguration;
  /**
   * Creates or updates an app.
   */
  createApp(params: Pinpoint.Types.CreateAppRequest, callback?: (err: AWSError, data: Pinpoint.Types.CreateAppResponse) => void): Request<Pinpoint.Types.CreateAppResponse, AWSError>;
  /**
   * Creates or updates an app.
   */
  createApp(callback?: (err: AWSError, data: Pinpoint.Types.CreateAppResponse) => void): Request<Pinpoint.Types.CreateAppResponse, AWSError>;
  /**
   * Creates or updates a campaign.
   */
  createCampaign(params: Pinpoint.Types.CreateCampaignRequest, callback?: (err: AWSError, data: Pinpoint.Types.CreateCampaignResponse) => void): Request<Pinpoint.Types.CreateCampaignResponse, AWSError>;
  /**
   * Creates or updates a campaign.
   */
  createCampaign(callback?: (err: AWSError, data: Pinpoint.Types.CreateCampaignResponse) => void): Request<Pinpoint.Types.CreateCampaignResponse, AWSError>;
  /**
   * Creates an export job.
   */
  createExportJob(params: Pinpoint.Types.CreateExportJobRequest, callback?: (err: AWSError, data: Pinpoint.Types.CreateExportJobResponse) => void): Request<Pinpoint.Types.CreateExportJobResponse, AWSError>;
  /**
   * Creates an export job.
   */
  createExportJob(callback?: (err: AWSError, data: Pinpoint.Types.CreateExportJobResponse) => void): Request<Pinpoint.Types.CreateExportJobResponse, AWSError>;
  /**
   * Creates or updates an import job.
   */
  createImportJob(params: Pinpoint.Types.CreateImportJobRequest, callback?: (err: AWSError, data: Pinpoint.Types.CreateImportJobResponse) => void): Request<Pinpoint.Types.CreateImportJobResponse, AWSError>;
  /**
   * Creates or updates an import job.
   */
  createImportJob(callback?: (err: AWSError, data: Pinpoint.Types.CreateImportJobResponse) => void): Request<Pinpoint.Types.CreateImportJobResponse, AWSError>;
  /**
   * Used to create or update a segment.
   */
  createSegment(params: Pinpoint.Types.CreateSegmentRequest, callback?: (err: AWSError, data: Pinpoint.Types.CreateSegmentResponse) => void): Request<Pinpoint.Types.CreateSegmentResponse, AWSError>;
  /**
   * Used to create or update a segment.
   */
  createSegment(callback?: (err: AWSError, data: Pinpoint.Types.CreateSegmentResponse) => void): Request<Pinpoint.Types.CreateSegmentResponse, AWSError>;
  /**
   * Delete an ADM channel.
   */
  deleteAdmChannel(params: Pinpoint.Types.DeleteAdmChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.DeleteAdmChannelResponse) => void): Request<Pinpoint.Types.DeleteAdmChannelResponse, AWSError>;
  /**
   * Delete an ADM channel.
   */
  deleteAdmChannel(callback?: (err: AWSError, data: Pinpoint.Types.DeleteAdmChannelResponse) => void): Request<Pinpoint.Types.DeleteAdmChannelResponse, AWSError>;
  /**
   * Deletes the APNs channel for an app.
   */
  deleteApnsChannel(params: Pinpoint.Types.DeleteApnsChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.DeleteApnsChannelResponse) => void): Request<Pinpoint.Types.DeleteApnsChannelResponse, AWSError>;
  /**
   * Deletes the APNs channel for an app.
   */
  deleteApnsChannel(callback?: (err: AWSError, data: Pinpoint.Types.DeleteApnsChannelResponse) => void): Request<Pinpoint.Types.DeleteApnsChannelResponse, AWSError>;
  /**
   * Delete an APNS sandbox channel.
   */
  deleteApnsSandboxChannel(params: Pinpoint.Types.DeleteApnsSandboxChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.DeleteApnsSandboxChannelResponse) => void): Request<Pinpoint.Types.DeleteApnsSandboxChannelResponse, AWSError>;
  /**
   * Delete an APNS sandbox channel.
   */
  deleteApnsSandboxChannel(callback?: (err: AWSError, data: Pinpoint.Types.DeleteApnsSandboxChannelResponse) => void): Request<Pinpoint.Types.DeleteApnsSandboxChannelResponse, AWSError>;
  /**
   * Delete an APNS VoIP channel
   */
  deleteApnsVoipChannel(params: Pinpoint.Types.DeleteApnsVoipChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.DeleteApnsVoipChannelResponse) => void): Request<Pinpoint.Types.DeleteApnsVoipChannelResponse, AWSError>;
  /**
   * Delete an APNS VoIP channel
   */
  deleteApnsVoipChannel(callback?: (err: AWSError, data: Pinpoint.Types.DeleteApnsVoipChannelResponse) => void): Request<Pinpoint.Types.DeleteApnsVoipChannelResponse, AWSError>;
  /**
   * Delete an APNS VoIP sandbox channel
   */
  deleteApnsVoipSandboxChannel(params: Pinpoint.Types.DeleteApnsVoipSandboxChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.DeleteApnsVoipSandboxChannelResponse) => void): Request<Pinpoint.Types.DeleteApnsVoipSandboxChannelResponse, AWSError>;
  /**
   * Delete an APNS VoIP sandbox channel
   */
  deleteApnsVoipSandboxChannel(callback?: (err: AWSError, data: Pinpoint.Types.DeleteApnsVoipSandboxChannelResponse) => void): Request<Pinpoint.Types.DeleteApnsVoipSandboxChannelResponse, AWSError>;
  /**
   * Deletes an app.
   */
  deleteApp(params: Pinpoint.Types.DeleteAppRequest, callback?: (err: AWSError, data: Pinpoint.Types.DeleteAppResponse) => void): Request<Pinpoint.Types.DeleteAppResponse, AWSError>;
  /**
   * Deletes an app.
   */
  deleteApp(callback?: (err: AWSError, data: Pinpoint.Types.DeleteAppResponse) => void): Request<Pinpoint.Types.DeleteAppResponse, AWSError>;
  /**
   * Delete a BAIDU GCM channel
   */
  deleteBaiduChannel(params: Pinpoint.Types.DeleteBaiduChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.DeleteBaiduChannelResponse) => void): Request<Pinpoint.Types.DeleteBaiduChannelResponse, AWSError>;
  /**
   * Delete a BAIDU GCM channel
   */
  deleteBaiduChannel(callback?: (err: AWSError, data: Pinpoint.Types.DeleteBaiduChannelResponse) => void): Request<Pinpoint.Types.DeleteBaiduChannelResponse, AWSError>;
  /**
   * Deletes a campaign.
   */
  deleteCampaign(params: Pinpoint.Types.DeleteCampaignRequest, callback?: (err: AWSError, data: Pinpoint.Types.DeleteCampaignResponse) => void): Request<Pinpoint.Types.DeleteCampaignResponse, AWSError>;
  /**
   * Deletes a campaign.
   */
  deleteCampaign(callback?: (err: AWSError, data: Pinpoint.Types.DeleteCampaignResponse) => void): Request<Pinpoint.Types.DeleteCampaignResponse, AWSError>;
  /**
   * Delete an email channel.
   */
  deleteEmailChannel(params: Pinpoint.Types.DeleteEmailChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.DeleteEmailChannelResponse) => void): Request<Pinpoint.Types.DeleteEmailChannelResponse, AWSError>;
  /**
   * Delete an email channel.
   */
  deleteEmailChannel(callback?: (err: AWSError, data: Pinpoint.Types.DeleteEmailChannelResponse) => void): Request<Pinpoint.Types.DeleteEmailChannelResponse, AWSError>;
  /**
   * Deletes an endpoint.
   */
  deleteEndpoint(params: Pinpoint.Types.DeleteEndpointRequest, callback?: (err: AWSError, data: Pinpoint.Types.DeleteEndpointResponse) => void): Request<Pinpoint.Types.DeleteEndpointResponse, AWSError>;
  /**
   * Deletes an endpoint.
   */
  deleteEndpoint(callback?: (err: AWSError, data: Pinpoint.Types.DeleteEndpointResponse) => void): Request<Pinpoint.Types.DeleteEndpointResponse, AWSError>;
  /**
   * Deletes the event stream for an app.
   */
  deleteEventStream(params: Pinpoint.Types.DeleteEventStreamRequest, callback?: (err: AWSError, data: Pinpoint.Types.DeleteEventStreamResponse) => void): Request<Pinpoint.Types.DeleteEventStreamResponse, AWSError>;
  /**
   * Deletes the event stream for an app.
   */
  deleteEventStream(callback?: (err: AWSError, data: Pinpoint.Types.DeleteEventStreamResponse) => void): Request<Pinpoint.Types.DeleteEventStreamResponse, AWSError>;
  /**
   * Deletes the GCM channel for an app.
   */
  deleteGcmChannel(params: Pinpoint.Types.DeleteGcmChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.DeleteGcmChannelResponse) => void): Request<Pinpoint.Types.DeleteGcmChannelResponse, AWSError>;
  /**
   * Deletes the GCM channel for an app.
   */
  deleteGcmChannel(callback?: (err: AWSError, data: Pinpoint.Types.DeleteGcmChannelResponse) => void): Request<Pinpoint.Types.DeleteGcmChannelResponse, AWSError>;
  /**
   * Deletes a segment.
   */
  deleteSegment(params: Pinpoint.Types.DeleteSegmentRequest, callback?: (err: AWSError, data: Pinpoint.Types.DeleteSegmentResponse) => void): Request<Pinpoint.Types.DeleteSegmentResponse, AWSError>;
  /**
   * Deletes a segment.
   */
  deleteSegment(callback?: (err: AWSError, data: Pinpoint.Types.DeleteSegmentResponse) => void): Request<Pinpoint.Types.DeleteSegmentResponse, AWSError>;
  /**
   * Delete an SMS channel.
   */
  deleteSmsChannel(params: Pinpoint.Types.DeleteSmsChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.DeleteSmsChannelResponse) => void): Request<Pinpoint.Types.DeleteSmsChannelResponse, AWSError>;
  /**
   * Delete an SMS channel.
   */
  deleteSmsChannel(callback?: (err: AWSError, data: Pinpoint.Types.DeleteSmsChannelResponse) => void): Request<Pinpoint.Types.DeleteSmsChannelResponse, AWSError>;
  /**
   * Deletes endpoints associated with an user id.
   */
  deleteUserEndpoints(params: Pinpoint.Types.DeleteUserEndpointsRequest, callback?: (err: AWSError, data: Pinpoint.Types.DeleteUserEndpointsResponse) => void): Request<Pinpoint.Types.DeleteUserEndpointsResponse, AWSError>;
  /**
   * Deletes endpoints associated with an user id.
   */
  deleteUserEndpoints(callback?: (err: AWSError, data: Pinpoint.Types.DeleteUserEndpointsResponse) => void): Request<Pinpoint.Types.DeleteUserEndpointsResponse, AWSError>;
  /**
   * Get an ADM channel.
   */
  getAdmChannel(params: Pinpoint.Types.GetAdmChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetAdmChannelResponse) => void): Request<Pinpoint.Types.GetAdmChannelResponse, AWSError>;
  /**
   * Get an ADM channel.
   */
  getAdmChannel(callback?: (err: AWSError, data: Pinpoint.Types.GetAdmChannelResponse) => void): Request<Pinpoint.Types.GetAdmChannelResponse, AWSError>;
  /**
   * Returns information about the APNs channel for an app.
   */
  getApnsChannel(params: Pinpoint.Types.GetApnsChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetApnsChannelResponse) => void): Request<Pinpoint.Types.GetApnsChannelResponse, AWSError>;
  /**
   * Returns information about the APNs channel for an app.
   */
  getApnsChannel(callback?: (err: AWSError, data: Pinpoint.Types.GetApnsChannelResponse) => void): Request<Pinpoint.Types.GetApnsChannelResponse, AWSError>;
  /**
   * Get an APNS sandbox channel.
   */
  getApnsSandboxChannel(params: Pinpoint.Types.GetApnsSandboxChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetApnsSandboxChannelResponse) => void): Request<Pinpoint.Types.GetApnsSandboxChannelResponse, AWSError>;
  /**
   * Get an APNS sandbox channel.
   */
  getApnsSandboxChannel(callback?: (err: AWSError, data: Pinpoint.Types.GetApnsSandboxChannelResponse) => void): Request<Pinpoint.Types.GetApnsSandboxChannelResponse, AWSError>;
  /**
   * Get an APNS VoIP channel
   */
  getApnsVoipChannel(params: Pinpoint.Types.GetApnsVoipChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetApnsVoipChannelResponse) => void): Request<Pinpoint.Types.GetApnsVoipChannelResponse, AWSError>;
  /**
   * Get an APNS VoIP channel
   */
  getApnsVoipChannel(callback?: (err: AWSError, data: Pinpoint.Types.GetApnsVoipChannelResponse) => void): Request<Pinpoint.Types.GetApnsVoipChannelResponse, AWSError>;
  /**
   * Get an APNS VoIPSandbox channel
   */
  getApnsVoipSandboxChannel(params: Pinpoint.Types.GetApnsVoipSandboxChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetApnsVoipSandboxChannelResponse) => void): Request<Pinpoint.Types.GetApnsVoipSandboxChannelResponse, AWSError>;
  /**
   * Get an APNS VoIPSandbox channel
   */
  getApnsVoipSandboxChannel(callback?: (err: AWSError, data: Pinpoint.Types.GetApnsVoipSandboxChannelResponse) => void): Request<Pinpoint.Types.GetApnsVoipSandboxChannelResponse, AWSError>;
  /**
   * Returns information about an app.
   */
  getApp(params: Pinpoint.Types.GetAppRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetAppResponse) => void): Request<Pinpoint.Types.GetAppResponse, AWSError>;
  /**
   * Returns information about an app.
   */
  getApp(callback?: (err: AWSError, data: Pinpoint.Types.GetAppResponse) => void): Request<Pinpoint.Types.GetAppResponse, AWSError>;
  /**
   * Used to request the settings for an app.
   */
  getApplicationSettings(params: Pinpoint.Types.GetApplicationSettingsRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetApplicationSettingsResponse) => void): Request<Pinpoint.Types.GetApplicationSettingsResponse, AWSError>;
  /**
   * Used to request the settings for an app.
   */
  getApplicationSettings(callback?: (err: AWSError, data: Pinpoint.Types.GetApplicationSettingsResponse) => void): Request<Pinpoint.Types.GetApplicationSettingsResponse, AWSError>;
  /**
   * Returns information about your apps.
   */
  getApps(params: Pinpoint.Types.GetAppsRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetAppsResponse) => void): Request<Pinpoint.Types.GetAppsResponse, AWSError>;
  /**
   * Returns information about your apps.
   */
  getApps(callback?: (err: AWSError, data: Pinpoint.Types.GetAppsResponse) => void): Request<Pinpoint.Types.GetAppsResponse, AWSError>;
  /**
   * Get a BAIDU GCM channel
   */
  getBaiduChannel(params: Pinpoint.Types.GetBaiduChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetBaiduChannelResponse) => void): Request<Pinpoint.Types.GetBaiduChannelResponse, AWSError>;
  /**
   * Get a BAIDU GCM channel
   */
  getBaiduChannel(callback?: (err: AWSError, data: Pinpoint.Types.GetBaiduChannelResponse) => void): Request<Pinpoint.Types.GetBaiduChannelResponse, AWSError>;
  /**
   * Returns information about a campaign.
   */
  getCampaign(params: Pinpoint.Types.GetCampaignRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetCampaignResponse) => void): Request<Pinpoint.Types.GetCampaignResponse, AWSError>;
  /**
   * Returns information about a campaign.
   */
  getCampaign(callback?: (err: AWSError, data: Pinpoint.Types.GetCampaignResponse) => void): Request<Pinpoint.Types.GetCampaignResponse, AWSError>;
  /**
   * Returns information about the activity performed by a campaign.
   */
  getCampaignActivities(params: Pinpoint.Types.GetCampaignActivitiesRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetCampaignActivitiesResponse) => void): Request<Pinpoint.Types.GetCampaignActivitiesResponse, AWSError>;
  /**
   * Returns information about the activity performed by a campaign.
   */
  getCampaignActivities(callback?: (err: AWSError, data: Pinpoint.Types.GetCampaignActivitiesResponse) => void): Request<Pinpoint.Types.GetCampaignActivitiesResponse, AWSError>;
  /**
   * Returns information about a specific version of a campaign.
   */
  getCampaignVersion(params: Pinpoint.Types.GetCampaignVersionRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetCampaignVersionResponse) => void): Request<Pinpoint.Types.GetCampaignVersionResponse, AWSError>;
  /**
   * Returns information about a specific version of a campaign.
   */
  getCampaignVersion(callback?: (err: AWSError, data: Pinpoint.Types.GetCampaignVersionResponse) => void): Request<Pinpoint.Types.GetCampaignVersionResponse, AWSError>;
  /**
   * Returns information about your campaign versions.
   */
  getCampaignVersions(params: Pinpoint.Types.GetCampaignVersionsRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetCampaignVersionsResponse) => void): Request<Pinpoint.Types.GetCampaignVersionsResponse, AWSError>;
  /**
   * Returns information about your campaign versions.
   */
  getCampaignVersions(callback?: (err: AWSError, data: Pinpoint.Types.GetCampaignVersionsResponse) => void): Request<Pinpoint.Types.GetCampaignVersionsResponse, AWSError>;
  /**
   * Returns information about your campaigns.
   */
  getCampaigns(params: Pinpoint.Types.GetCampaignsRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetCampaignsResponse) => void): Request<Pinpoint.Types.GetCampaignsResponse, AWSError>;
  /**
   * Returns information about your campaigns.
   */
  getCampaigns(callback?: (err: AWSError, data: Pinpoint.Types.GetCampaignsResponse) => void): Request<Pinpoint.Types.GetCampaignsResponse, AWSError>;
  /**
   * Get all channels.
   */
  getChannels(params: Pinpoint.Types.GetChannelsRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetChannelsResponse) => void): Request<Pinpoint.Types.GetChannelsResponse, AWSError>;
  /**
   * Get all channels.
   */
  getChannels(callback?: (err: AWSError, data: Pinpoint.Types.GetChannelsResponse) => void): Request<Pinpoint.Types.GetChannelsResponse, AWSError>;
  /**
   * Get an email channel.
   */
  getEmailChannel(params: Pinpoint.Types.GetEmailChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetEmailChannelResponse) => void): Request<Pinpoint.Types.GetEmailChannelResponse, AWSError>;
  /**
   * Get an email channel.
   */
  getEmailChannel(callback?: (err: AWSError, data: Pinpoint.Types.GetEmailChannelResponse) => void): Request<Pinpoint.Types.GetEmailChannelResponse, AWSError>;
  /**
   * Returns information about an endpoint.
   */
  getEndpoint(params: Pinpoint.Types.GetEndpointRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetEndpointResponse) => void): Request<Pinpoint.Types.GetEndpointResponse, AWSError>;
  /**
   * Returns information about an endpoint.
   */
  getEndpoint(callback?: (err: AWSError, data: Pinpoint.Types.GetEndpointResponse) => void): Request<Pinpoint.Types.GetEndpointResponse, AWSError>;
  /**
   * Returns the event stream for an app.
   */
  getEventStream(params: Pinpoint.Types.GetEventStreamRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetEventStreamResponse) => void): Request<Pinpoint.Types.GetEventStreamResponse, AWSError>;
  /**
   * Returns the event stream for an app.
   */
  getEventStream(callback?: (err: AWSError, data: Pinpoint.Types.GetEventStreamResponse) => void): Request<Pinpoint.Types.GetEventStreamResponse, AWSError>;
  /**
   * Returns information about an export job.
   */
  getExportJob(params: Pinpoint.Types.GetExportJobRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetExportJobResponse) => void): Request<Pinpoint.Types.GetExportJobResponse, AWSError>;
  /**
   * Returns information about an export job.
   */
  getExportJob(callback?: (err: AWSError, data: Pinpoint.Types.GetExportJobResponse) => void): Request<Pinpoint.Types.GetExportJobResponse, AWSError>;
  /**
   * Returns information about your export jobs.
   */
  getExportJobs(params: Pinpoint.Types.GetExportJobsRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetExportJobsResponse) => void): Request<Pinpoint.Types.GetExportJobsResponse, AWSError>;
  /**
   * Returns information about your export jobs.
   */
  getExportJobs(callback?: (err: AWSError, data: Pinpoint.Types.GetExportJobsResponse) => void): Request<Pinpoint.Types.GetExportJobsResponse, AWSError>;
  /**
   * Returns information about the GCM channel for an app.
   */
  getGcmChannel(params: Pinpoint.Types.GetGcmChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetGcmChannelResponse) => void): Request<Pinpoint.Types.GetGcmChannelResponse, AWSError>;
  /**
   * Returns information about the GCM channel for an app.
   */
  getGcmChannel(callback?: (err: AWSError, data: Pinpoint.Types.GetGcmChannelResponse) => void): Request<Pinpoint.Types.GetGcmChannelResponse, AWSError>;
  /**
   * Returns information about an import job.
   */
  getImportJob(params: Pinpoint.Types.GetImportJobRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetImportJobResponse) => void): Request<Pinpoint.Types.GetImportJobResponse, AWSError>;
  /**
   * Returns information about an import job.
   */
  getImportJob(callback?: (err: AWSError, data: Pinpoint.Types.GetImportJobResponse) => void): Request<Pinpoint.Types.GetImportJobResponse, AWSError>;
  /**
   * Returns information about your import jobs.
   */
  getImportJobs(params: Pinpoint.Types.GetImportJobsRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetImportJobsResponse) => void): Request<Pinpoint.Types.GetImportJobsResponse, AWSError>;
  /**
   * Returns information about your import jobs.
   */
  getImportJobs(callback?: (err: AWSError, data: Pinpoint.Types.GetImportJobsResponse) => void): Request<Pinpoint.Types.GetImportJobsResponse, AWSError>;
  /**
   * Returns information about a segment.
   */
  getSegment(params: Pinpoint.Types.GetSegmentRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetSegmentResponse) => void): Request<Pinpoint.Types.GetSegmentResponse, AWSError>;
  /**
   * Returns information about a segment.
   */
  getSegment(callback?: (err: AWSError, data: Pinpoint.Types.GetSegmentResponse) => void): Request<Pinpoint.Types.GetSegmentResponse, AWSError>;
  /**
   * Returns a list of export jobs for a specific segment.
   */
  getSegmentExportJobs(params: Pinpoint.Types.GetSegmentExportJobsRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetSegmentExportJobsResponse) => void): Request<Pinpoint.Types.GetSegmentExportJobsResponse, AWSError>;
  /**
   * Returns a list of export jobs for a specific segment.
   */
  getSegmentExportJobs(callback?: (err: AWSError, data: Pinpoint.Types.GetSegmentExportJobsResponse) => void): Request<Pinpoint.Types.GetSegmentExportJobsResponse, AWSError>;
  /**
   * Returns a list of import jobs for a specific segment.
   */
  getSegmentImportJobs(params: Pinpoint.Types.GetSegmentImportJobsRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetSegmentImportJobsResponse) => void): Request<Pinpoint.Types.GetSegmentImportJobsResponse, AWSError>;
  /**
   * Returns a list of import jobs for a specific segment.
   */
  getSegmentImportJobs(callback?: (err: AWSError, data: Pinpoint.Types.GetSegmentImportJobsResponse) => void): Request<Pinpoint.Types.GetSegmentImportJobsResponse, AWSError>;
  /**
   * Returns information about a segment version.
   */
  getSegmentVersion(params: Pinpoint.Types.GetSegmentVersionRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetSegmentVersionResponse) => void): Request<Pinpoint.Types.GetSegmentVersionResponse, AWSError>;
  /**
   * Returns information about a segment version.
   */
  getSegmentVersion(callback?: (err: AWSError, data: Pinpoint.Types.GetSegmentVersionResponse) => void): Request<Pinpoint.Types.GetSegmentVersionResponse, AWSError>;
  /**
   * Returns information about your segment versions.
   */
  getSegmentVersions(params: Pinpoint.Types.GetSegmentVersionsRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetSegmentVersionsResponse) => void): Request<Pinpoint.Types.GetSegmentVersionsResponse, AWSError>;
  /**
   * Returns information about your segment versions.
   */
  getSegmentVersions(callback?: (err: AWSError, data: Pinpoint.Types.GetSegmentVersionsResponse) => void): Request<Pinpoint.Types.GetSegmentVersionsResponse, AWSError>;
  /**
   * Used to get information about your segments.
   */
  getSegments(params: Pinpoint.Types.GetSegmentsRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetSegmentsResponse) => void): Request<Pinpoint.Types.GetSegmentsResponse, AWSError>;
  /**
   * Used to get information about your segments.
   */
  getSegments(callback?: (err: AWSError, data: Pinpoint.Types.GetSegmentsResponse) => void): Request<Pinpoint.Types.GetSegmentsResponse, AWSError>;
  /**
   * Get an SMS channel.
   */
  getSmsChannel(params: Pinpoint.Types.GetSmsChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetSmsChannelResponse) => void): Request<Pinpoint.Types.GetSmsChannelResponse, AWSError>;
  /**
   * Get an SMS channel.
   */
  getSmsChannel(callback?: (err: AWSError, data: Pinpoint.Types.GetSmsChannelResponse) => void): Request<Pinpoint.Types.GetSmsChannelResponse, AWSError>;
  /**
   * Returns information about the endpoints associated with an user id.
   */
  getUserEndpoints(params: Pinpoint.Types.GetUserEndpointsRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetUserEndpointsResponse) => void): Request<Pinpoint.Types.GetUserEndpointsResponse, AWSError>;
  /**
   * Returns information about the endpoints associated with an user id.
   */
  getUserEndpoints(callback?: (err: AWSError, data: Pinpoint.Types.GetUserEndpointsResponse) => void): Request<Pinpoint.Types.GetUserEndpointsResponse, AWSError>;
  /**
   * Returns information about the specified phone number.
   */
  phoneNumberValidate(params: Pinpoint.Types.PhoneNumberValidateRequest, callback?: (err: AWSError, data: Pinpoint.Types.PhoneNumberValidateResponse) => void): Request<Pinpoint.Types.PhoneNumberValidateResponse, AWSError>;
  /**
   * Returns information about the specified phone number.
   */
  phoneNumberValidate(callback?: (err: AWSError, data: Pinpoint.Types.PhoneNumberValidateResponse) => void): Request<Pinpoint.Types.PhoneNumberValidateResponse, AWSError>;
  /**
   * Use to create or update the event stream for an app.
   */
  putEventStream(params: Pinpoint.Types.PutEventStreamRequest, callback?: (err: AWSError, data: Pinpoint.Types.PutEventStreamResponse) => void): Request<Pinpoint.Types.PutEventStreamResponse, AWSError>;
  /**
   * Use to create or update the event stream for an app.
   */
  putEventStream(callback?: (err: AWSError, data: Pinpoint.Types.PutEventStreamResponse) => void): Request<Pinpoint.Types.PutEventStreamResponse, AWSError>;
  /**
   * Used to remove the attributes for an app
   */
  removeAttributes(params: Pinpoint.Types.RemoveAttributesRequest, callback?: (err: AWSError, data: Pinpoint.Types.RemoveAttributesResponse) => void): Request<Pinpoint.Types.RemoveAttributesResponse, AWSError>;
  /**
   * Used to remove the attributes for an app
   */
  removeAttributes(callback?: (err: AWSError, data: Pinpoint.Types.RemoveAttributesResponse) => void): Request<Pinpoint.Types.RemoveAttributesResponse, AWSError>;
  /**
   * Use this resource to send a direct message, which is a one time message that you send to a limited audience without creating a campaign. 

You can send the message to up to 100 recipients. You cannot use the message to engage a segment. When you send the message, Amazon Pinpoint delivers it immediately, and you cannot schedule the delivery. To engage a user segment, and to schedule the message delivery, create a campaign instead of sending a direct message.

You can send a direct message as a push notification to your mobile app or as an SMS message to SMS-enabled devices.
   */
  sendMessages(params: Pinpoint.Types.SendMessagesRequest, callback?: (err: AWSError, data: Pinpoint.Types.SendMessagesResponse) => void): Request<Pinpoint.Types.SendMessagesResponse, AWSError>;
  /**
   * Use this resource to send a direct message, which is a one time message that you send to a limited audience without creating a campaign. 

You can send the message to up to 100 recipients. You cannot use the message to engage a segment. When you send the message, Amazon Pinpoint delivers it immediately, and you cannot schedule the delivery. To engage a user segment, and to schedule the message delivery, create a campaign instead of sending a direct message.

You can send a direct message as a push notification to your mobile app or as an SMS message to SMS-enabled devices.
   */
  sendMessages(callback?: (err: AWSError, data: Pinpoint.Types.SendMessagesResponse) => void): Request<Pinpoint.Types.SendMessagesResponse, AWSError>;
  /**
   * Use this resource to message a list of users. Amazon Pinpoint sends the message to all of the endpoints that are associated with each user.

A user represents an individual who is assigned a unique user ID, and this ID is assigned to one or more endpoints. For example, if an individual uses your app on multiple devices, your app could assign that person's user ID to the endpoint for each device.

With the users-messages resource, you specify the message recipients as user IDs. For each user ID, Amazon Pinpoint delivers the message to all of the user's endpoints. Within the body of your request, you can specify a default message, and you can tailor your message for different channels, including those for mobile push and SMS.

With this resource, you send a direct message, which is a one time message that you send to a limited audience without creating a campaign. You can send the message to up to 100 users per request. You cannot use the message to engage a segment. When you send the message, Amazon Pinpoint delivers it immediately, and you cannot schedule the delivery. To engage a user segment, and to schedule the message delivery, create a campaign instead of using the users-messages resource.
   */
  sendUsersMessages(params: Pinpoint.Types.SendUsersMessagesRequest, callback?: (err: AWSError, data: Pinpoint.Types.SendUsersMessagesResponse) => void): Request<Pinpoint.Types.SendUsersMessagesResponse, AWSError>;
  /**
   * Use this resource to message a list of users. Amazon Pinpoint sends the message to all of the endpoints that are associated with each user.

A user represents an individual who is assigned a unique user ID, and this ID is assigned to one or more endpoints. For example, if an individual uses your app on multiple devices, your app could assign that person's user ID to the endpoint for each device.

With the users-messages resource, you specify the message recipients as user IDs. For each user ID, Amazon Pinpoint delivers the message to all of the user's endpoints. Within the body of your request, you can specify a default message, and you can tailor your message for different channels, including those for mobile push and SMS.

With this resource, you send a direct message, which is a one time message that you send to a limited audience without creating a campaign. You can send the message to up to 100 users per request. You cannot use the message to engage a segment. When you send the message, Amazon Pinpoint delivers it immediately, and you cannot schedule the delivery. To engage a user segment, and to schedule the message delivery, create a campaign instead of using the users-messages resource.
   */
  sendUsersMessages(callback?: (err: AWSError, data: Pinpoint.Types.SendUsersMessagesResponse) => void): Request<Pinpoint.Types.SendUsersMessagesResponse, AWSError>;
  /**
   * Update an ADM channel.
   */
  updateAdmChannel(params: Pinpoint.Types.UpdateAdmChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.UpdateAdmChannelResponse) => void): Request<Pinpoint.Types.UpdateAdmChannelResponse, AWSError>;
  /**
   * Update an ADM channel.
   */
  updateAdmChannel(callback?: (err: AWSError, data: Pinpoint.Types.UpdateAdmChannelResponse) => void): Request<Pinpoint.Types.UpdateAdmChannelResponse, AWSError>;
  /**
   * Use to update the APNs channel for an app.
   */
  updateApnsChannel(params: Pinpoint.Types.UpdateApnsChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.UpdateApnsChannelResponse) => void): Request<Pinpoint.Types.UpdateApnsChannelResponse, AWSError>;
  /**
   * Use to update the APNs channel for an app.
   */
  updateApnsChannel(callback?: (err: AWSError, data: Pinpoint.Types.UpdateApnsChannelResponse) => void): Request<Pinpoint.Types.UpdateApnsChannelResponse, AWSError>;
  /**
   * Update an APNS sandbox channel.
   */
  updateApnsSandboxChannel(params: Pinpoint.Types.UpdateApnsSandboxChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.UpdateApnsSandboxChannelResponse) => void): Request<Pinpoint.Types.UpdateApnsSandboxChannelResponse, AWSError>;
  /**
   * Update an APNS sandbox channel.
   */
  updateApnsSandboxChannel(callback?: (err: AWSError, data: Pinpoint.Types.UpdateApnsSandboxChannelResponse) => void): Request<Pinpoint.Types.UpdateApnsSandboxChannelResponse, AWSError>;
  /**
   * Update an APNS VoIP channel
   */
  updateApnsVoipChannel(params: Pinpoint.Types.UpdateApnsVoipChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.UpdateApnsVoipChannelResponse) => void): Request<Pinpoint.Types.UpdateApnsVoipChannelResponse, AWSError>;
  /**
   * Update an APNS VoIP channel
   */
  updateApnsVoipChannel(callback?: (err: AWSError, data: Pinpoint.Types.UpdateApnsVoipChannelResponse) => void): Request<Pinpoint.Types.UpdateApnsVoipChannelResponse, AWSError>;
  /**
   * Update an APNS VoIP sandbox channel
   */
  updateApnsVoipSandboxChannel(params: Pinpoint.Types.UpdateApnsVoipSandboxChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.UpdateApnsVoipSandboxChannelResponse) => void): Request<Pinpoint.Types.UpdateApnsVoipSandboxChannelResponse, AWSError>;
  /**
   * Update an APNS VoIP sandbox channel
   */
  updateApnsVoipSandboxChannel(callback?: (err: AWSError, data: Pinpoint.Types.UpdateApnsVoipSandboxChannelResponse) => void): Request<Pinpoint.Types.UpdateApnsVoipSandboxChannelResponse, AWSError>;
  /**
   * Used to update the settings for an app.
   */
  updateApplicationSettings(params: Pinpoint.Types.UpdateApplicationSettingsRequest, callback?: (err: AWSError, data: Pinpoint.Types.UpdateApplicationSettingsResponse) => void): Request<Pinpoint.Types.UpdateApplicationSettingsResponse, AWSError>;
  /**
   * Used to update the settings for an app.
   */
  updateApplicationSettings(callback?: (err: AWSError, data: Pinpoint.Types.UpdateApplicationSettingsResponse) => void): Request<Pinpoint.Types.UpdateApplicationSettingsResponse, AWSError>;
  /**
   * Update a BAIDU GCM channel
   */
  updateBaiduChannel(params: Pinpoint.Types.UpdateBaiduChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.UpdateBaiduChannelResponse) => void): Request<Pinpoint.Types.UpdateBaiduChannelResponse, AWSError>;
  /**
   * Update a BAIDU GCM channel
   */
  updateBaiduChannel(callback?: (err: AWSError, data: Pinpoint.Types.UpdateBaiduChannelResponse) => void): Request<Pinpoint.Types.UpdateBaiduChannelResponse, AWSError>;
  /**
   * Use to update a campaign.
   */
  updateCampaign(params: Pinpoint.Types.UpdateCampaignRequest, callback?: (err: AWSError, data: Pinpoint.Types.UpdateCampaignResponse) => void): Request<Pinpoint.Types.UpdateCampaignResponse, AWSError>;
  /**
   * Use to update a campaign.
   */
  updateCampaign(callback?: (err: AWSError, data: Pinpoint.Types.UpdateCampaignResponse) => void): Request<Pinpoint.Types.UpdateCampaignResponse, AWSError>;
  /**
   * Update an email channel.
   */
  updateEmailChannel(params: Pinpoint.Types.UpdateEmailChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.UpdateEmailChannelResponse) => void): Request<Pinpoint.Types.UpdateEmailChannelResponse, AWSError>;
  /**
   * Update an email channel.
   */
  updateEmailChannel(callback?: (err: AWSError, data: Pinpoint.Types.UpdateEmailChannelResponse) => void): Request<Pinpoint.Types.UpdateEmailChannelResponse, AWSError>;
  /**
   * Creates or updates an endpoint.
   */
  updateEndpoint(params: Pinpoint.Types.UpdateEndpointRequest, callback?: (err: AWSError, data: Pinpoint.Types.UpdateEndpointResponse) => void): Request<Pinpoint.Types.UpdateEndpointResponse, AWSError>;
  /**
   * Creates or updates an endpoint.
   */
  updateEndpoint(callback?: (err: AWSError, data: Pinpoint.Types.UpdateEndpointResponse) => void): Request<Pinpoint.Types.UpdateEndpointResponse, AWSError>;
  /**
   * Use to update a batch of endpoints.
   */
  updateEndpointsBatch(params: Pinpoint.Types.UpdateEndpointsBatchRequest, callback?: (err: AWSError, data: Pinpoint.Types.UpdateEndpointsBatchResponse) => void): Request<Pinpoint.Types.UpdateEndpointsBatchResponse, AWSError>;
  /**
   * Use to update a batch of endpoints.
   */
  updateEndpointsBatch(callback?: (err: AWSError, data: Pinpoint.Types.UpdateEndpointsBatchResponse) => void): Request<Pinpoint.Types.UpdateEndpointsBatchResponse, AWSError>;
  /**
   * Use to update the GCM channel for an app.
   */
  updateGcmChannel(params: Pinpoint.Types.UpdateGcmChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.UpdateGcmChannelResponse) => void): Request<Pinpoint.Types.UpdateGcmChannelResponse, AWSError>;
  /**
   * Use to update the GCM channel for an app.
   */
  updateGcmChannel(callback?: (err: AWSError, data: Pinpoint.Types.UpdateGcmChannelResponse) => void): Request<Pinpoint.Types.UpdateGcmChannelResponse, AWSError>;
  /**
   * Use to update a segment.
   */
  updateSegment(params: Pinpoint.Types.UpdateSegmentRequest, callback?: (err: AWSError, data: Pinpoint.Types.UpdateSegmentResponse) => void): Request<Pinpoint.Types.UpdateSegmentResponse, AWSError>;
  /**
   * Use to update a segment.
   */
  updateSegment(callback?: (err: AWSError, data: Pinpoint.Types.UpdateSegmentResponse) => void): Request<Pinpoint.Types.UpdateSegmentResponse, AWSError>;
  /**
   * Update an SMS channel.
   */
  updateSmsChannel(params: Pinpoint.Types.UpdateSmsChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.UpdateSmsChannelResponse) => void): Request<Pinpoint.Types.UpdateSmsChannelResponse, AWSError>;
  /**
   * Update an SMS channel.
   */
  updateSmsChannel(callback?: (err: AWSError, data: Pinpoint.Types.UpdateSmsChannelResponse) => void): Request<Pinpoint.Types.UpdateSmsChannelResponse, AWSError>;
}
declare namespace Pinpoint {
  export interface ADMChannelRequest {
    /**
     * Client ID as gotten from Amazon
     */
    ClientId?: __string;
    /**
     * Client secret as gotten from Amazon
     */
    ClientSecret?: __string;
    /**
     * If the channel is enabled for sending messages.
     */
    Enabled?: __boolean;
  }
  export interface ADMChannelResponse {
    /**
     * The ID of the application to which the channel applies.
     */
    ApplicationId?: __string;
    /**
     * When was this segment created
     */
    CreationDate?: __string;
    /**
     * If the channel is enabled for sending messages.
     */
    Enabled?: __boolean;
    /**
     * Not used. Retained for backwards compatibility.
     */
    HasCredential?: __boolean;
    /**
     * Channel ID. Not used, only for backwards compatibility.
     */
    Id?: __string;
    /**
     * Is this channel archived
     */
    IsArchived?: __boolean;
    /**
     * Who last updated this entry
     */
    LastModifiedBy?: __string;
    /**
     * Last date this was updated
     */
    LastModifiedDate?: __string;
    /**
     * Platform type. Will be "ADM"
     */
    Platform?: __string;
    /**
     * Version of channel
     */
    Version?: __integer;
  }
  export interface ADMMessage {
    /**
     * The action that occurs if the user taps a push notification delivered by the campaign: OPEN_APP - Your app launches, or it becomes the foreground app if it has been sent to the background. This is the default action. DEEP_LINK - Uses deep linking features in iOS and Android to open your app and display a designated user interface within the app. URL - The default mobile browser on the user's device launches and opens a web page at the URL you specify. Possible values include: OPEN_APP | DEEP_LINK | URL
     */
    Action?: Action;
    /**
     * The message body of the notification, the email body or the text message.
     */
    Body?: __string;
    /**
     * Optional. Arbitrary string used to indicate multiple messages are logically the same and that ADM is allowed to drop previously enqueued messages in favor of this one.
     */
    ConsolidationKey?: __string;
    /**
     * The data payload used for a silent push. This payload is added to the notifications' data.pinpoint.jsonBody' object
     */
    Data?: MapOf__string;
    /**
     * Optional. Number of seconds ADM should retain the message if the device is offline
     */
    ExpiresAfter?: __string;
    /**
     * The icon image name of the asset saved in your application.
     */
    IconReference?: __string;
    /**
     * The URL that points to an image used as the large icon to the notification content view.
     */
    ImageIconUrl?: __string;
    /**
     * The URL that points to an image used in the push notification.
     */
    ImageUrl?: __string;
    /**
     * Optional. Base-64-encoded MD5 checksum of the data parameter. Used to verify data integrity
     */
    MD5?: __string;
    /**
     * The Raw JSON formatted string to be used as the payload. This value overrides the message.
     */
    RawContent?: __string;
    /**
     * Indicates if the message should display on the users device. Silent pushes can be used for Remote Configuration and Phone Home use cases.
     */
    SilentPush?: __boolean;
    /**
     * The URL that points to an image used as the small icon for the notification which will be used to represent the notification in the status bar and content view
     */
    SmallImageIconUrl?: __string;
    /**
     * Indicates a sound to play when the device receives the notification. Supports default, or the filename of a sound resource bundled in the app. Android sound files must reside in /res/raw/
     */
    Sound?: __string;
    /**
     * Default message substitutions. Can be overridden by individual address substitutions.
     */
    Substitutions?: MapOfListOf__string;
    /**
     * The message title that displays above the message on the user's device.
     */
    Title?: __string;
    /**
     * The URL to open in the user's mobile browser. Used if the value for Action is URL.
     */
    Url?: __string;
  }
  export interface APNSChannelRequest {
    /**
     * The bundle id used for APNs Tokens.
     */
    BundleId?: __string;
    /**
     * The distribution certificate from Apple.
     */
    Certificate?: __string;
    /**
     * The default authentication method used for APNs.
     */
    DefaultAuthenticationMethod?: __string;
    /**
     * If the channel is enabled for sending messages.
     */
    Enabled?: __boolean;
    /**
     * The certificate private key.
     */
    PrivateKey?: __string;
    /**
     * The team id used for APNs Tokens.
     */
    TeamId?: __string;
    /**
     * The token key used for APNs Tokens.
     */
    TokenKey?: __string;
    /**
     * The token key used for APNs Tokens.
     */
    TokenKeyId?: __string;
  }
  export interface APNSChannelResponse {
    /**
     * The ID of the application to which the channel applies.
     */
    ApplicationId?: __string;
    /**
     * When was this segment created
     */
    CreationDate?: __string;
    /**
     * The default authentication method used for APNs.
     */
    DefaultAuthenticationMethod?: __string;
    /**
     * If the channel is enabled for sending messages.
     */
    Enabled?: __boolean;
    /**
     * Not used. Retained for backwards compatibility.
     */
    HasCredential?: __boolean;
    /**
     * Indicates whether the channel is configured with a key for APNs token authentication. Provide a token key by setting the TokenKey attribute.
     */
    HasTokenKey?: __boolean;
    /**
     * Channel ID. Not used. Present only for backwards compatibility.
     */
    Id?: __string;
    /**
     * Is this channel archived
     */
    IsArchived?: __boolean;
    /**
     * Who last updated this entry
     */
    LastModifiedBy?: __string;
    /**
     * Last date this was updated
     */
    LastModifiedDate?: __string;
    /**
     * The platform type. Will be APNS.
     */
    Platform?: __string;
    /**
     * Version of channel
     */
    Version?: __integer;
  }
  export interface APNSMessage {
    /**
     * The action that occurs if the user taps a push notification delivered by the campaign: OPEN_APP - Your app launches, or it becomes the foreground app if it has been sent to the background. This is the default action. DEEP_LINK - Uses deep linking features in iOS and Android to open your app and display a designated user interface within the app. URL - The default mobile browser on the user's device launches and opens a web page at the URL you specify. Possible values include: OPEN_APP | DEEP_LINK | URL
     */
    Action?: Action;
    /**
     * Include this key when you want the system to modify the badge of your app icon. If this key is not included in the dictionary, the badge is not changed. To remove the badge, set the value of this key to 0.
     */
    Badge?: __integer;
    /**
     * The message body of the notification, the email body or the text message.
     */
    Body?: __string;
    /**
     * Provide this key with a string value that represents the notification's type. This value corresponds to the value in the identifier property of one of your app's registered categories.
     */
    Category?: __string;
    /**
     * An ID that, if assigned to multiple messages, causes APNs to coalesce the messages into a single push notification instead of delivering each message individually. The value must not exceed 64 bytes. Amazon Pinpoint uses this value to set the apns-collapse-id request header when it sends the message to APNs.
     */
    CollapseId?: __string;
    /**
     * The data payload used for a silent push. This payload is added to the notifications' data.pinpoint.jsonBody' object
     */
    Data?: MapOf__string;
    /**
     * The URL that points to a video used in the push notification.
     */
    MediaUrl?: __string;
    /**
     * The preferred authentication method, either "CERTIFICATE" or "TOKEN"
     */
    PreferredAuthenticationMethod?: __string;
    /**
     * The message priority. Amazon Pinpoint uses this value to set the apns-priority request header when it sends the message to APNs. Accepts the following values:

"5" - Low priority. Messages might be delayed, delivered in groups, and throttled.

"10" - High priority. Messages are sent immediately. High priority messages must cause an alert, sound, or badge on the receiving device.

The default value is "10".

The equivalent values for FCM or GCM messages are "normal" and "high". Amazon Pinpoint accepts these values for APNs messages and converts them.

For more information about the apns-priority parameter, see Communicating with APNs in the APNs Local and Remote Notification Programming Guide.
     */
    Priority?: __string;
    /**
     * The Raw JSON formatted string to be used as the payload. This value overrides the message.
     */
    RawContent?: __string;
    /**
     * Indicates if the message should display on the users device. Silent pushes can be used for Remote Configuration and Phone Home use cases.
     */
    SilentPush?: __boolean;
    /**
     * Include this key when you want the system to play a sound. The value of this key is the name of a sound file in your app's main bundle or in the Library/Sounds folder of your app's data container. If the sound file cannot be found, or if you specify defaultfor the value, the system plays the default alert sound.
     */
    Sound?: __string;
    /**
     * Default message substitutions. Can be overridden by individual address substitutions.
     */
    Substitutions?: MapOfListOf__string;
    /**
     * Provide this key with a string value that represents the app-specific identifier for grouping notifications. If you provide a Notification Content app extension, you can use this value to group your notifications together.
     */
    ThreadId?: __string;
    /**
     * The length of time (in seconds) that APNs stores and attempts to deliver the message. If the value is 0, APNs does not store the message or attempt to deliver it more than once. Amazon Pinpoint uses this value to set the apns-expiration request header when it sends the message to APNs.
     */
    TimeToLive?: __integer;
    /**
     * The message title that displays above the message on the user's device.
     */
    Title?: __string;
    /**
     * The URL to open in the user's mobile browser. Used if the value for Action is URL.
     */
    Url?: __string;
  }
  export interface APNSSandboxChannelRequest {
    /**
     * The bundle id used for APNs Tokens.
     */
    BundleId?: __string;
    /**
     * The distribution certificate from Apple.
     */
    Certificate?: __string;
    /**
     * The default authentication method used for APNs.
     */
    DefaultAuthenticationMethod?: __string;
    /**
     * If the channel is enabled for sending messages.
     */
    Enabled?: __boolean;
    /**
     * The certificate private key.
     */
    PrivateKey?: __string;
    /**
     * The team id used for APNs Tokens.
     */
    TeamId?: __string;
    /**
     * The token key used for APNs Tokens.
     */
    TokenKey?: __string;
    /**
     * The token key used for APNs Tokens.
     */
    TokenKeyId?: __string;
  }
  export interface APNSSandboxChannelResponse {
    /**
     * The ID of the application to which the channel applies.
     */
    ApplicationId?: __string;
    /**
     * When was this segment created
     */
    CreationDate?: __string;
    /**
     * The default authentication method used for APNs.
     */
    DefaultAuthenticationMethod?: __string;
    /**
     * If the channel is enabled for sending messages.
     */
    Enabled?: __boolean;
    /**
     * Not used. Retained for backwards compatibility.
     */
    HasCredential?: __boolean;
    /**
     * Indicates whether the channel is configured with a key for APNs token authentication. Provide a token key by setting the TokenKey attribute.
     */
    HasTokenKey?: __boolean;
    /**
     * Channel ID. Not used, only for backwards compatibility.
     */
    Id?: __string;
    /**
     * Is this channel archived
     */
    IsArchived?: __boolean;
    /**
     * Who last updated this entry
     */
    LastModifiedBy?: __string;
    /**
     * Last date this was updated
     */
    LastModifiedDate?: __string;
    /**
     * The platform type. Will be APNS_SANDBOX.
     */
    Platform?: __string;
    /**
     * Version of channel
     */
    Version?: __integer;
  }
  export interface APNSVoipChannelRequest {
    /**
     * The bundle id used for APNs Tokens.
     */
    BundleId?: __string;
    /**
     * The distribution certificate from Apple.
     */
    Certificate?: __string;
    /**
     * The default authentication method used for APNs.
     */
    DefaultAuthenticationMethod?: __string;
    /**
     * If the channel is enabled for sending messages.
     */
    Enabled?: __boolean;
    /**
     * The certificate private key.
     */
    PrivateKey?: __string;
    /**
     * The team id used for APNs Tokens.
     */
    TeamId?: __string;
    /**
     * The token key used for APNs Tokens.
     */
    TokenKey?: __string;
    /**
     * The token key used for APNs Tokens.
     */
    TokenKeyId?: __string;
  }
  export interface APNSVoipChannelResponse {
    /**
     * Application id
     */
    ApplicationId?: __string;
    /**
     * When was this segment created
     */
    CreationDate?: __string;
    /**
     * The default authentication method used for APNs.
     */
    DefaultAuthenticationMethod?: __string;
    /**
     * If the channel is enabled for sending messages.
     */
    Enabled?: __boolean;
    /**
     * Not used. Retained for backwards compatibility.
     */
    HasCredential?: __boolean;
    /**
     * If the channel is registered with a token key for authentication.
     */
    HasTokenKey?: __boolean;
    /**
     * Channel ID. Not used, only for backwards compatibility.
     */
    Id?: __string;
    /**
     * Is this channel archived
     */
    IsArchived?: __boolean;
    /**
     * Who made the last change
     */
    LastModifiedBy?: __string;
    /**
     * Last date this was updated
     */
    LastModifiedDate?: __string;
    /**
     * The platform type. Will be APNS.
     */
    Platform?: __string;
    /**
     * Version of channel
     */
    Version?: __integer;
  }
  export interface APNSVoipSandboxChannelRequest {
    /**
     * The bundle id used for APNs Tokens.
     */
    BundleId?: __string;
    /**
     * The distribution certificate from Apple.
     */
    Certificate?: __string;
    /**
     * The default authentication method used for APNs.
     */
    DefaultAuthenticationMethod?: __string;
    /**
     * If the channel is enabled for sending messages.
     */
    Enabled?: __boolean;
    /**
     * The certificate private key.
     */
    PrivateKey?: __string;
    /**
     * The team id used for APNs Tokens.
     */
    TeamId?: __string;
    /**
     * The token key used for APNs Tokens.
     */
    TokenKey?: __string;
    /**
     * The token key used for APNs Tokens.
     */
    TokenKeyId?: __string;
  }
  export interface APNSVoipSandboxChannelResponse {
    /**
     * Application id
     */
    ApplicationId?: __string;
    /**
     * When was this segment created
     */
    CreationDate?: __string;
    /**
     * The default authentication method used for APNs.
     */
    DefaultAuthenticationMethod?: __string;
    /**
     * If the channel is enabled for sending messages.
     */
    Enabled?: __boolean;
    /**
     * Not used. Retained for backwards compatibility.
     */
    HasCredential?: __boolean;
    /**
     * If the channel is registered with a token key for authentication.
     */
    HasTokenKey?: __boolean;
    /**
     * Channel ID. Not used, only for backwards compatibility.
     */
    Id?: __string;
    /**
     * Is this channel archived
     */
    IsArchived?: __boolean;
    /**
     * Who made the last change
     */
    LastModifiedBy?: __string;
    /**
     * Last date this was updated
     */
    LastModifiedDate?: __string;
    /**
     * The platform type. Will be APNS.
     */
    Platform?: __string;
    /**
     * Version of channel
     */
    Version?: __integer;
  }
  export type Action = "OPEN_APP"|"DEEP_LINK"|"URL"|string;
  export interface ActivitiesResponse {
    /**
     * List of campaign activities
     */
    Item?: ListOfActivityResponse;
  }
  export interface ActivityResponse {
    /**
     * The ID of the application to which the campaign applies.
     */
    ApplicationId?: __string;
    /**
     * The ID of the campaign to which the activity applies.
     */
    CampaignId?: __string;
    /**
     * The actual time the activity was marked CANCELLED or COMPLETED. Provided in ISO 8601 format.
     */
    End?: __string;
    /**
     * The unique activity ID.
     */
    Id?: __string;
    /**
     * Indicates whether the activity succeeded.

Valid values: SUCCESS, FAIL
     */
    Result?: __string;
    /**
     * The scheduled start time for the activity in ISO 8601 format.
     */
    ScheduledStart?: __string;
    /**
     * The actual start time of the activity in ISO 8601 format.
     */
    Start?: __string;
    /**
     * The state of the activity.

Valid values: PENDING, INITIALIZING, RUNNING, PAUSED, CANCELLED, COMPLETED
     */
    State?: __string;
    /**
     * The total number of endpoints to which the campaign successfully delivered messages.
     */
    SuccessfulEndpointCount?: __integer;
    /**
     * The total number of timezones completed.
     */
    TimezonesCompletedCount?: __integer;
    /**
     * The total number of unique timezones present in the segment.
     */
    TimezonesTotalCount?: __integer;
    /**
     * The total number of endpoints to which the campaign attempts to deliver messages.
     */
    TotalEndpointCount?: __integer;
    /**
     * The ID of a variation of the campaign used for A/B testing.
     */
    TreatmentId?: __string;
  }
  export interface AddressConfiguration {
    /**
     * Body override. If specified will override default body.
     */
    BodyOverride?: __string;
    /**
     * The channel type.

Valid values: GCM | APNS | APNS_SANDBOX | APNS_VOIP | APNS_VOIP_SANDBOX | ADM | SMS | EMAIL | BAIDU
     */
    ChannelType?: ChannelType;
    /**
     * A map of custom attributes to attributes to be attached to the message for this address. This payload is added to the push notification's 'data.pinpoint' object or added to the email/sms delivery receipt event attributes.
     */
    Context?: MapOf__string;
    /**
     * The Raw JSON formatted string to be used as the payload. This value overrides the message.
     */
    RawContent?: __string;
    /**
     * A map of substitution values for the message to be merged with the DefaultMessage's substitutions. Substitutions on this map take precedence over the all other substitutions.
     */
    Substitutions?: MapOfListOf__string;
    /**
     * Title override. If specified will override default title if applicable.
     */
    TitleOverride?: __string;
  }
  export interface ApplicationResponse {
    /**
     * The unique application ID.
     */
    Id?: __string;
    /**
     * The display name of the application.
     */
    Name?: __string;
  }
  export interface ApplicationSettingsResource {
    /**
     * The unique ID for the application.
     */
    ApplicationId?: __string;
    /**
     * Default campaign hook.
     */
    CampaignHook?: CampaignHook;
    /**
     * The date that the settings were last updated in ISO 8601 format.
     */
    LastModifiedDate?: __string;
    /**
     * The default campaign limits for the app. These limits apply to each campaign for the app, unless the campaign overrides the default with limits of its own.
     */
    Limits?: CampaignLimits;
    /**
     * The default quiet time for the app. Each campaign for this app sends no messages during this time unless the campaign overrides the default with a quiet time of its own.
     */
    QuietTime?: QuietTime;
  }
  export interface ApplicationsResponse {
    /**
     * List of applications returned in this page.
     */
    Item?: ListOfApplicationResponse;
    /**
     * The string that you use in a subsequent request to get the next page of results in a paginated response.
     */
    NextToken?: __string;
  }
  export interface AttributeDimension {
    /**
     * The type of dimension:
INCLUSIVE - Endpoints that match the criteria are included in the segment.
EXCLUSIVE - Endpoints that match the criteria are excluded from the segment.
     */
    AttributeType?: AttributeType;
    /**
     * The criteria values for the segment dimension. Endpoints with matching attribute values are included or excluded from the segment, depending on the setting for Type.
     */
    Values?: ListOf__string;
  }
  export type AttributeType = "INCLUSIVE"|"EXCLUSIVE"|string;
  export interface AttributesResource {
    /**
     * The unique ID for the application.
     */
    ApplicationId?: __string;
    /**
     * The attribute type for the application.
     */
    AttributeType?: __string;
    /**
     * The attributes for the application.
     */
    Attributes?: ListOf__string;
  }
  export interface BaiduChannelRequest {
    /**
     * Platform credential API key from Baidu.
     */
    ApiKey?: __string;
    /**
     * If the channel is enabled for sending messages.
     */
    Enabled?: __boolean;
    /**
     * Platform credential Secret key from Baidu.
     */
    SecretKey?: __string;
  }
  export interface BaiduChannelResponse {
    /**
     * Application id
     */
    ApplicationId?: __string;
    /**
     * When was this segment created
     */
    CreationDate?: __string;
    /**
     * The Baidu API key from Baidu.
     */
    Credential?: __string;
    /**
     * If the channel is enabled for sending messages.
     */
    Enabled?: __boolean;
    /**
     * Not used. Retained for backwards compatibility.
     */
    HasCredential?: __boolean;
    /**
     * Channel ID. Not used, only for backwards compatibility.
     */
    Id?: __string;
    /**
     * Is this channel archived
     */
    IsArchived?: __boolean;
    /**
     * Who made the last change
     */
    LastModifiedBy?: __string;
    /**
     * Last date this was updated
     */
    LastModifiedDate?: __string;
    /**
     * The platform type. Will be BAIDU
     */
    Platform?: __string;
    /**
     * Version of channel
     */
    Version?: __integer;
  }
  export interface BaiduMessage {
    /**
     * The action that occurs if the user taps a push notification delivered by the campaign: OPEN_APP - Your app launches, or it becomes the foreground app if it has been sent to the background. This is the default action. DEEP_LINK - Uses deep linking features in iOS and Android to open your app and display a designated user interface within the app. URL - The default mobile browser on the user's device launches and opens a web page at the URL you specify. Possible values include: OPEN_APP | DEEP_LINK | URL
     */
    Action?: Action;
    /**
     * The message body of the notification, the email body or the text message.
     */
    Body?: __string;
    /**
     * The data payload used for a silent push. This payload is added to the notifications' data.pinpoint.jsonBody' object
     */
    Data?: MapOf__string;
    /**
     * The icon image name of the asset saved in your application.
     */
    IconReference?: __string;
    /**
     * The URL that points to an image used as the large icon to the notification content view.
     */
    ImageIconUrl?: __string;
    /**
     * The URL that points to an image used in the push notification.
     */
    ImageUrl?: __string;
    /**
     * The Raw JSON formatted string to be used as the payload. This value overrides the message.
     */
    RawContent?: __string;
    /**
     * Indicates if the message should display on the users device. Silent pushes can be used for Remote Configuration and Phone Home use cases.
     */
    SilentPush?: __boolean;
    /**
     * The URL that points to an image used as the small icon for the notification which will be used to represent the notification in the status bar and content view
     */
    SmallImageIconUrl?: __string;
    /**
     * Indicates a sound to play when the device receives the notification. Supports default, or the filename of a sound resource bundled in the app. Android sound files must reside in /res/raw/
     */
    Sound?: __string;
    /**
     * Default message substitutions. Can be overridden by individual address substitutions.
     */
    Substitutions?: MapOfListOf__string;
    /**
     * This parameter specifies how long (in seconds) the message should be kept in Baidu storage if the device is offline. The and the default value and the maximum time to live supported is 7 days (604800 seconds)
     */
    TimeToLive?: __integer;
    /**
     * The message title that displays above the message on the user's device.
     */
    Title?: __string;
    /**
     * The URL to open in the user's mobile browser. Used if the value for Action is URL.
     */
    Url?: __string;
  }
  export interface CampaignEmailMessage {
    /**
     * The email text body.
     */
    Body?: __string;
    /**
     * The email address used to send the email from. Defaults to use FromAddress specified in the Email Channel.
     */
    FromAddress?: __string;
    /**
     * The email html body.
     */
    HtmlBody?: __string;
    /**
     * The email title (Or subject).
     */
    Title?: __string;
  }
  export interface CampaignHook {
    /**
     * Lambda function name or arn to be called for delivery
     */
    LambdaFunctionName?: __string;
    /**
     * What mode Lambda should be invoked in.
     */
    Mode?: Mode;
    /**
     * Web URL to call for hook. If the URL has authentication specified it will be added as authentication to the request
     */
    WebUrl?: __string;
  }
  export interface CampaignLimits {
    /**
     * The maximum number of messages that the campaign can send daily.
     */
    Daily?: __integer;
    /**
     * The length of time (in seconds) that the campaign can run before it ends and message deliveries stop. This duration begins at the scheduled start time for the campaign. The minimum value is 60.
     */
    MaximumDuration?: __integer;
    /**
     * The number of messages that the campaign can send per second. The minimum value is 50, and the maximum is 20000.
     */
    MessagesPerSecond?: __integer;
    /**
     * The maximum total number of messages that the campaign can send.
     */
    Total?: __integer;
  }
  export interface CampaignResponse {
    /**
     * Treatments that are defined in addition to the default treatment.
     */
    AdditionalTreatments?: ListOfTreatmentResource;
    /**
     * The ID of the application to which the campaign applies.
     */
    ApplicationId?: __string;
    /**
     * The date the campaign was created in ISO 8601 format.
     */
    CreationDate?: __string;
    /**
     * The status of the campaign's default treatment. Only present for A/B test campaigns.
     */
    DefaultState?: CampaignState;
    /**
     * A description of the campaign.
     */
    Description?: __string;
    /**
     * The allocated percentage of end users who will not receive messages from this campaign.
     */
    HoldoutPercent?: __integer;
    /**
     * Campaign hook information.
     */
    Hook?: CampaignHook;
    /**
     * The unique campaign ID.
     */
    Id?: __string;
    /**
     * Indicates whether the campaign is paused. A paused campaign does not send messages unless you resume it by setting IsPaused to false.
     */
    IsPaused?: __boolean;
    /**
     * The date the campaign was last updated in ISO 8601 format.	
     */
    LastModifiedDate?: __string;
    /**
     * The campaign limits settings.
     */
    Limits?: CampaignLimits;
    /**
     * The message configuration settings.
     */
    MessageConfiguration?: MessageConfiguration;
    /**
     * The custom name of the campaign.
     */
    Name?: __string;
    /**
     * The campaign schedule.
     */
    Schedule?: Schedule;
    /**
     * The ID of the segment to which the campaign sends messages.
     */
    SegmentId?: __string;
    /**
     * The version of the segment to which the campaign sends messages.
     */
    SegmentVersion?: __integer;
    /**
     * The campaign status.

An A/B test campaign will have a status of COMPLETED only when all treatments have a status of COMPLETED.
     */
    State?: CampaignState;
    /**
     * A custom description for the treatment.
     */
    TreatmentDescription?: __string;
    /**
     * The custom name of a variation of the campaign used for A/B testing.
     */
    TreatmentName?: __string;
    /**
     * The campaign version number.
     */
    Version?: __integer;
  }
  export interface CampaignSmsMessage {
    /**
     * The SMS text body.
     */
    Body?: __string;
    /**
     * Is this is a transactional SMS message, otherwise a promotional message.
     */
    MessageType?: MessageType;
    /**
     * Sender ID of sent message.
     */
    SenderId?: __string;
  }
  export interface CampaignState {
    /**
     * The status of the campaign, or the status of a treatment that belongs to an A/B test campaign.

Valid values: SCHEDULED, EXECUTING, PENDING_NEXT_RUN, COMPLETED, PAUSED
     */
    CampaignStatus?: CampaignStatus;
  }
  export type CampaignStatus = "SCHEDULED"|"EXECUTING"|"PENDING_NEXT_RUN"|"COMPLETED"|"PAUSED"|"DELETED"|string;
  export interface CampaignsResponse {
    /**
     * A list of campaigns.
     */
    Item?: ListOfCampaignResponse;
    /**
     * The string that you use in a subsequent request to get the next page of results in a paginated response.
     */
    NextToken?: __string;
  }
  export interface ChannelResponse {
    /**
     * Application id
     */
    ApplicationId?: __string;
    /**
     * When was this segment created
     */
    CreationDate?: __string;
    /**
     * If the channel is enabled for sending messages.
     */
    Enabled?: __boolean;
    /**
     * Not used. Retained for backwards compatibility.
     */
    HasCredential?: __boolean;
    /**
     * Channel ID. Not used, only for backwards compatibility.
     */
    Id?: __string;
    /**
     * Is this channel archived
     */
    IsArchived?: __boolean;
    /**
     * Who made the last change
     */
    LastModifiedBy?: __string;
    /**
     * Last date this was updated
     */
    LastModifiedDate?: __string;
    /**
     * Version of channel
     */
    Version?: __integer;
  }
  export type ChannelType = "GCM"|"APNS"|"APNS_SANDBOX"|"APNS_VOIP"|"APNS_VOIP_SANDBOX"|"ADM"|"SMS"|"EMAIL"|"BAIDU"|"CUSTOM"|string;
  export interface ChannelsResponse {
    /**
     * A map of channels, with the ChannelType as the key and the Channel as the value.
     */
    Channels?: MapOfChannelResponse;
  }
  export interface CreateAppRequest {
    CreateApplicationRequest: CreateApplicationRequest;
  }
  export interface CreateAppResponse {
    ApplicationResponse: ApplicationResponse;
  }
  export interface CreateApplicationRequest {
    /**
     * The display name of the application. Used in the Amazon Pinpoint console.
     */
    Name?: __string;
  }
  export interface CreateCampaignRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
    WriteCampaignRequest: WriteCampaignRequest;
  }
  export interface CreateCampaignResponse {
    CampaignResponse: CampaignResponse;
  }
  export interface CreateExportJobRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
    ExportJobRequest: ExportJobRequest;
  }
  export interface CreateExportJobResponse {
    ExportJobResponse: ExportJobResponse;
  }
  export interface CreateImportJobRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
    ImportJobRequest: ImportJobRequest;
  }
  export interface CreateImportJobResponse {
    ImportJobResponse: ImportJobResponse;
  }
  export interface CreateSegmentRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
    WriteSegmentRequest: WriteSegmentRequest;
  }
  export interface CreateSegmentResponse {
    SegmentResponse: SegmentResponse;
  }
  export interface DefaultMessage {
    /**
     * The message body of the notification, the email body or the text message.
     */
    Body?: __string;
    /**
     * Default message substitutions. Can be overridden by individual address substitutions.
     */
    Substitutions?: MapOfListOf__string;
  }
  export interface DefaultPushNotificationMessage {
    /**
     * The action that occurs if the user taps a push notification delivered by the campaign: OPEN_APP - Your app launches, or it becomes the foreground app if it has been sent to the background. This is the default action. DEEP_LINK - Uses deep linking features in iOS and Android to open your app and display a designated user interface within the app. URL - The default mobile browser on the user's device launches and opens a web page at the URL you specify. Possible values include: OPEN_APP | DEEP_LINK | URL
     */
    Action?: Action;
    /**
     * The message body of the notification, the email body or the text message.
     */
    Body?: __string;
    /**
     * The data payload used for a silent push. This payload is added to the notifications' data.pinpoint.jsonBody' object
     */
    Data?: MapOf__string;
    /**
     * Indicates if the message should display on the users device. Silent pushes can be used for Remote Configuration and Phone Home use cases.
     */
    SilentPush?: __boolean;
    /**
     * Default message substitutions. Can be overridden by individual address substitutions.
     */
    Substitutions?: MapOfListOf__string;
    /**
     * The message title that displays above the message on the user's device.
     */
    Title?: __string;
    /**
     * The URL to open in the user's mobile browser. Used if the value for Action is URL.
     */
    Url?: __string;
  }
  export interface DeleteAdmChannelRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
  }
  export interface DeleteAdmChannelResponse {
    ADMChannelResponse: ADMChannelResponse;
  }
  export interface DeleteApnsChannelRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
  }
  export interface DeleteApnsChannelResponse {
    APNSChannelResponse: APNSChannelResponse;
  }
  export interface DeleteApnsSandboxChannelRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
  }
  export interface DeleteApnsSandboxChannelResponse {
    APNSSandboxChannelResponse: APNSSandboxChannelResponse;
  }
  export interface DeleteApnsVoipChannelRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
  }
  export interface DeleteApnsVoipChannelResponse {
    APNSVoipChannelResponse: APNSVoipChannelResponse;
  }
  export interface DeleteApnsVoipSandboxChannelRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
  }
  export interface DeleteApnsVoipSandboxChannelResponse {
    APNSVoipSandboxChannelResponse: APNSVoipSandboxChannelResponse;
  }
  export interface DeleteAppRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
  }
  export interface DeleteAppResponse {
    ApplicationResponse: ApplicationResponse;
  }
  export interface DeleteBaiduChannelRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
  }
  export interface DeleteBaiduChannelResponse {
    BaiduChannelResponse: BaiduChannelResponse;
  }
  export interface DeleteCampaignRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
    /**
     * The unique ID of the campaign.
     */
    CampaignId: __string;
  }
  export interface DeleteCampaignResponse {
    CampaignResponse: CampaignResponse;
  }
  export interface DeleteEmailChannelRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
  }
  export interface DeleteEmailChannelResponse {
    EmailChannelResponse: EmailChannelResponse;
  }
  export interface DeleteEndpointRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
    /**
     * The unique ID of the endpoint.
     */
    EndpointId: __string;
  }
  export interface DeleteEndpointResponse {
    EndpointResponse: EndpointResponse;
  }
  export interface DeleteEventStreamRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
  }
  export interface DeleteEventStreamResponse {
    EventStream: EventStream;
  }
  export interface DeleteGcmChannelRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
  }
  export interface DeleteGcmChannelResponse {
    GCMChannelResponse: GCMChannelResponse;
  }
  export interface DeleteSegmentRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
    /**
     * The unique ID of the segment.
     */
    SegmentId: __string;
  }
  export interface DeleteSegmentResponse {
    SegmentResponse: SegmentResponse;
  }
  export interface DeleteSmsChannelRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
  }
  export interface DeleteSmsChannelResponse {
    SMSChannelResponse: SMSChannelResponse;
  }
  export interface DeleteUserEndpointsRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
    /**
     * The unique ID of the user.
     */
    UserId: __string;
  }
  export interface DeleteUserEndpointsResponse {
    EndpointsResponse: EndpointsResponse;
  }
  export type DeliveryStatus = "SUCCESSFUL"|"THROTTLED"|"TEMPORARY_FAILURE"|"PERMANENT_FAILURE"|"UNKNOWN_FAILURE"|"OPT_OUT"|"DUPLICATE"|string;
  export type DimensionType = "INCLUSIVE"|"EXCLUSIVE"|string;
  export interface DirectMessageConfiguration {
    /**
     * The message to ADM channels. Overrides the default push notification message.
     */
    ADMMessage?: ADMMessage;
    /**
     * The message to APNS channels. Overrides the default push notification message.
     */
    APNSMessage?: APNSMessage;
    /**
     * The message to Baidu GCM channels. Overrides the default push notification message.
     */
    BaiduMessage?: BaiduMessage;
    /**
     * The default message for all channels.
     */
    DefaultMessage?: DefaultMessage;
    /**
     * The default push notification message for all push channels.
     */
    DefaultPushNotificationMessage?: DefaultPushNotificationMessage;
    /**
     * The message to GCM channels. Overrides the default push notification message.
     */
    GCMMessage?: GCMMessage;
    /**
     * The message to SMS channels. Overrides the default message.
     */
    SMSMessage?: SMSMessage;
  }
  export type Duration = "HR_24"|"DAY_7"|"DAY_14"|"DAY_30"|string;
  export interface EmailChannelRequest {
    /**
     * If the channel is enabled for sending messages.
     */
    Enabled?: __boolean;
    /**
     * The email address used to send emails from.
     */
    FromAddress?: __string;
    /**
     * The ARN of an identity verified with SES.
     */
    Identity?: __string;
    /**
     * The ARN of an IAM Role used to submit events to Mobile Analytics' event ingestion service
     */
    RoleArn?: __string;
  }
  export interface EmailChannelResponse {
    /**
     * The unique ID of the application to which the email channel belongs.
     */
    ApplicationId?: __string;
    /**
     * The date that the settings were last updated in ISO 8601 format.
     */
    CreationDate?: __string;
    /**
     * If the channel is enabled for sending messages.
     */
    Enabled?: __boolean;
    /**
     * The email address used to send emails from.
     */
    FromAddress?: __string;
    /**
     * Not used. Retained for backwards compatibility.
     */
    HasCredential?: __boolean;
    /**
     * Channel ID. Not used, only for backwards compatibility.
     */
    Id?: __string;
    /**
     * The ARN of an identity verified with SES.
     */
    Identity?: __string;
    /**
     * Is this channel archived
     */
    IsArchived?: __boolean;
    /**
     * Who last updated this entry
     */
    LastModifiedBy?: __string;
    /**
     * Last date this was updated
     */
    LastModifiedDate?: __string;
    /**
     * Messages per second that can be sent
     */
    MessagesPerSecond?: __integer;
    /**
     * Platform type. Will be "EMAIL"
     */
    Platform?: __string;
    /**
     * The ARN of an IAM Role used to submit events to Mobile Analytics' event ingestion service
     */
    RoleArn?: __string;
    /**
     * Version of channel
     */
    Version?: __integer;
  }
  export interface EndpointBatchItem {
    /**
     * The destination for messages that you send to this endpoint. The address varies by channel. For mobile push channels, use the token provided by the push notification service, such as the APNs device token or the FCM registration token. For the SMS channel, use a phone number in E.164 format, such as +1206XXX5550100. For the email channel, use an email address.
     */
    Address?: __string;
    /**
     * Custom attributes that describe the endpoint by associating a name with an array of values. For example, an attribute named "interests" might have the values ["science", "politics", "travel"]. You can use these attributes as selection criteria when you create a segment of users to engage with a messaging campaign.

The following characters are not recommended in attribute names: # : ? \ /. The Amazon Pinpoint console does not display attributes that include these characters in the name. This limitation does not apply to attribute values.
     */
    Attributes?: MapOfListOf__string;
    /**
     * The channel type.

Valid values: GCM | APNS | APNS_SANDBOX | APNS_VOIP | APNS_VOIP_SANDBOX | ADM | SMS | EMAIL | BAIDU
     */
    ChannelType?: ChannelType;
    /**
     * The endpoint demographic attributes.
     */
    Demographic?: EndpointDemographic;
    /**
     * The last time the endpoint was updated. Provided in ISO 8601 format.
     */
    EffectiveDate?: __string;
    /**
     * Unused.
     */
    EndpointStatus?: __string;
    /**
     * The unique Id for the Endpoint in the batch.
     */
    Id?: __string;
    /**
     * The endpoint location attributes.
     */
    Location?: EndpointLocation;
    /**
     * Custom metrics that your app reports to Amazon Pinpoint.
     */
    Metrics?: MapOf__double;
    /**
     * Indicates whether a user has opted out of receiving messages with one of the following values:

ALL - User has opted out of all messages.

NONE - Users has not opted out and receives all messages.
     */
    OptOut?: __string;
    /**
     * The unique ID for the most recent request to update the endpoint.
     */
    RequestId?: __string;
    /**
     * Custom user-specific attributes that your app reports to Amazon Pinpoint.
     */
    User?: EndpointUser;
  }
  export interface EndpointBatchRequest {
    /**
     * List of items to update. Maximum 100 items
     */
    Item?: ListOfEndpointBatchItem;
  }
  export interface EndpointDemographic {
    /**
     * The version of the application associated with the endpoint.
     */
    AppVersion?: __string;
    /**
     * The endpoint locale in the following format: The ISO 639-1 alpha-2 code, followed by an underscore, followed by an ISO 3166-1 alpha-2 value.

     */
    Locale?: __string;
    /**
     * The endpoint make, such as such as Apple or Samsung.
     */
    Make?: __string;
    /**
     * The endpoint model, such as iPhone.
     */
    Model?: __string;
    /**
     * The endpoint model version.
     */
    ModelVersion?: __string;
    /**
     * The endpoint platform, such as ios or android.
     */
    Platform?: __string;
    /**
     * The endpoint platform version.
     */
    PlatformVersion?: __string;
    /**
     * The timezone of the endpoint. Specified as a tz database value, such as Americas/Los_Angeles.
     */
    Timezone?: __string;
  }
  export interface EndpointLocation {
    /**
     * The city where the endpoint is located.
     */
    City?: __string;
    /**
     * Country according to ISO 3166-1 Alpha-2 codes. For example, US.
     */
    Country?: __string;
    /**
     * The latitude of the endpoint location. Rounded to one decimal (Roughly corresponding to a mile).
     */
    Latitude?: __double;
    /**
     * The longitude of the endpoint location. Rounded to one decimal (Roughly corresponding to a mile).
     */
    Longitude?: __double;
    /**
     * The postal code or zip code of the endpoint.
     */
    PostalCode?: __string;
    /**
     * The region of the endpoint location. For example, corresponds to a state in US.
     */
    Region?: __string;
  }
  export interface EndpointMessageResult {
    /**
     * Address that endpoint message was delivered to.
     */
    Address?: __string;
    /**
     * Delivery status of message.
     */
    DeliveryStatus?: DeliveryStatus;
    /**
     * Unique message identifier associated with the message that was sent.
     */
    MessageId?: __string;
    /**
     * Downstream service status code.
     */
    StatusCode?: __integer;
    /**
     * Status message for message delivery.
     */
    StatusMessage?: __string;
    /**
     * If token was updated as part of delivery. (This is GCM Specific)
     */
    UpdatedToken?: __string;
  }
  export interface EndpointRequest {
    /**
     * The destination for messages that you send to this endpoint. The address varies by channel. For mobile push channels, use the token provided by the push notification service, such as the APNs device token or the FCM registration token. For the SMS channel, use a phone number in E.164 format, such as +1206XXX5550100. For the email channel, use an email address.
     */
    Address?: __string;
    /**
     * Custom attributes that describe the endpoint by associating a name with an array of values. For example, an attribute named "interests" might have the values ["science", "politics", "travel"]. You can use these attributes as selection criteria when you create a segment of users to engage with a messaging campaign.

The following characters are not recommended in attribute names: # : ? \ /. The Amazon Pinpoint console does not display attributes that include these characters in the name. This limitation does not apply to attribute values.
     */
    Attributes?: MapOfListOf__string;
    /**
     * The channel type.

Valid values: GCM | APNS | APNS_SANDBOX | APNS_VOIP | APNS_VOIP_SANDBOX | ADM | SMS | EMAIL | BAIDU
     */
    ChannelType?: ChannelType;
    /**
     * The endpoint demographic attributes.
     */
    Demographic?: EndpointDemographic;
    /**
     * The last time the endpoint was updated. Provided in ISO 8601 format.
     */
    EffectiveDate?: __string;
    /**
     * Unused.
     */
    EndpointStatus?: __string;
    /**
     * The endpoint location attributes.
     */
    Location?: EndpointLocation;
    /**
     * Custom metrics that your app reports to Amazon Pinpoint.
     */
    Metrics?: MapOf__double;
    /**
     * Indicates whether a user has opted out of receiving messages with one of the following values:

ALL - User has opted out of all messages.

NONE - Users has not opted out and receives all messages.
     */
    OptOut?: __string;
    /**
     * The unique ID for the most recent request to update the endpoint.
     */
    RequestId?: __string;
    /**
     * Custom user-specific attributes that your app reports to Amazon Pinpoint.
     */
    User?: EndpointUser;
  }
  export interface EndpointResponse {
    /**
     * The address or token of the endpoint as provided by your push provider (e.g. DeviceToken or RegistrationId).
     */
    Address?: __string;
    /**
     * The ID of the application associated with the endpoint.
     */
    ApplicationId?: __string;
    /**
     * Custom attributes that describe the endpoint by associating a name with an array of values. For example, an attribute named "interests" might have the values ["science", "politics", "travel"]. You can use these attributes as selection criteria when you create a segment of users to engage with a messaging campaign.

The following characters are not recommended in attribute names: # : ? \ /. The Amazon Pinpoint console does not display attributes that include these characters in the name. This limitation does not apply to attribute values.
     */
    Attributes?: MapOfListOf__string;
    /**
     * The channel type.

Valid values: GCM | APNS | APNS_SANDBOX | APNS_VOIP | APNS_VOIP_SANDBOX | ADM | SMS | EMAIL | BAIDU
     */
    ChannelType?: ChannelType;
    /**
     * A number from 0 - 99 that represents the cohort the endpoint is assigned to. Endpoints are grouped into cohorts randomly, and each cohort contains approximately 1 percent of the endpoints for an app. Amazon Pinpoint assigns cohorts to the holdout or treatment allocations for a campaign.
     */
    CohortId?: __string;
    /**
     * The last time the endpoint was created. Provided in ISO 8601 format.
     */
    CreationDate?: __string;
    /**
     * The endpoint demographic attributes.
     */
    Demographic?: EndpointDemographic;
    /**
     * The last time the endpoint was updated. Provided in ISO 8601 format.
     */
    EffectiveDate?: __string;
    /**
     * Unused.
     */
    EndpointStatus?: __string;
    /**
     * The unique ID that you assigned to the endpoint. The ID should be a globally unique identifier (GUID) to ensure that it is unique compared to all other endpoints for the application.
     */
    Id?: __string;
    /**
     * The endpoint location attributes.
     */
    Location?: EndpointLocation;
    /**
     * Custom metrics that your app reports to Amazon Pinpoint.
     */
    Metrics?: MapOf__double;
    /**
     * Indicates whether a user has opted out of receiving messages with one of the following values:

ALL - User has opted out of all messages.

NONE - Users has not opted out and receives all messages.
     */
    OptOut?: __string;
    /**
     * The unique ID for the most recent request to update the endpoint.
     */
    RequestId?: __string;
    /**
     * Custom user-specific attributes that your app reports to Amazon Pinpoint.
     */
    User?: EndpointUser;
  }
  export interface EndpointSendConfiguration {
    /**
     * Body override. If specified will override default body.
     */
    BodyOverride?: __string;
    /**
     * A map of custom attributes to attributes to be attached to the message for this address. This payload is added to the push notification's 'data.pinpoint' object or added to the email/sms delivery receipt event attributes.
     */
    Context?: MapOf__string;
    /**
     * The Raw JSON formatted string to be used as the payload. This value overrides the message.
     */
    RawContent?: __string;
    /**
     * A map of substitution values for the message to be merged with the DefaultMessage's substitutions. Substitutions on this map take precedence over the all other substitutions.
     */
    Substitutions?: MapOfListOf__string;
    /**
     * Title override. If specified will override default title if applicable.
     */
    TitleOverride?: __string;
  }
  export interface EndpointUser {
    /**
     * Custom attributes that describe an end user by associating a name with an array of values. For example, an attribute named "interests" might have the values ["science", "politics", "travel"]. You can use these attributes as selection criteria when you create a segment of users to engage with a messaging campaign.

The following characters are not recommended in attribute names: # : ? \ /. The Amazon Pinpoint console does not display attributes that include these characters in the name. This limitation does not apply to attribute values.
     */
    UserAttributes?: MapOfListOf__string;
    /**
     * The unique ID of the user.
     */
    UserId?: __string;
  }
  export interface EndpointsResponse {
    /**
     * The list of endpoints.
     */
    Item?: ListOfEndpointResponse;
  }
  export interface EventStream {
    /**
     * The ID of the application from which events should be published.
     */
    ApplicationId?: __string;
    /**
     * The Amazon Resource Name (ARN) of the Amazon Kinesis stream or Firehose delivery stream to which you want to publish events.
 Firehose ARN: arn:aws:firehose:REGION:ACCOUNT_ID:deliverystream/STREAM_NAME
 Kinesis ARN: arn:aws:kinesis:REGION:ACCOUNT_ID:stream/STREAM_NAME
     */
    DestinationStreamArn?: __string;
    /**
     * DEPRECATED. Your AWS account ID, which you assigned to the ExternalID key in an IAM trust policy. Used by Amazon Pinpoint to assume an IAM role. This requirement is removed, and external IDs are not recommended for IAM roles assumed by Amazon Pinpoint.
     */
    ExternalId?: __string;
    /**
     * The date the event stream was last updated in ISO 8601 format.
     */
    LastModifiedDate?: __string;
    /**
     * The IAM user who last modified the event stream.
     */
    LastUpdatedBy?: __string;
    /**
     * The IAM role that authorizes Amazon Pinpoint to publish events to the stream in your account.
     */
    RoleArn?: __string;
  }
  export interface ExportJobRequest {
    /**
     * The Amazon Resource Name (ARN) of an IAM role that grants Amazon Pinpoint access to the Amazon S3 location that endpoints will be exported to.
     */
    RoleArn?: __string;
    /**
     * A URL that points to the location within an Amazon S3 bucket that will receive the export. The location is typically a folder with multiple files.

The URL should follow this format: s3://bucket-name/folder-name/

Amazon Pinpoint will export endpoints to this location.
     */
    S3UrlPrefix?: __string;
    /**
     * The ID of the segment to export endpoints from. If not present, Amazon Pinpoint exports all of the endpoints that belong to the application.
     */
    SegmentId?: __string;
    /**
     * The version of the segment to export if specified.
     */
    SegmentVersion?: __integer;
  }
  export interface ExportJobResource {
    /**
     * The Amazon Resource Name (ARN) of an IAM role that grants Amazon Pinpoint access to the Amazon S3 location that endpoints will be exported to.
     */
    RoleArn?: __string;
    /**
     * A URL that points to the location within an Amazon S3 bucket that will receive the export. The location is typically a folder with multiple files.

The URL should follow this format: s3://bucket-name/folder-name/

Amazon Pinpoint will export endpoints to this location.
     */
    S3UrlPrefix?: __string;
    /**
     * The ID of the segment to export endpoints from. If not present, Amazon Pinpoint exports all of the endpoints that belong to the application.
     */
    SegmentId?: __string;
    /**
     * The version of the segment to export if specified.
     */
    SegmentVersion?: __integer;
  }
  export interface ExportJobResponse {
    /**
     * The unique ID of the application to which the job applies.
     */
    ApplicationId?: __string;
    /**
     * The number of pieces that have successfully completed as of the time of the request.
     */
    CompletedPieces?: __integer;
    /**
     * The date the job completed in ISO 8601 format.
     */
    CompletionDate?: __string;
    /**
     * The date the job was created in ISO 8601 format.
     */
    CreationDate?: __string;
    /**
     * The export job settings.
     */
    Definition?: ExportJobResource;
    /**
     * The number of pieces that failed to be processed as of the time of the request.
     */
    FailedPieces?: __integer;
    /**
     * Provides up to 100 of the first failed entries for the job, if any exist.
     */
    Failures?: ListOf__string;
    /**
     * The unique ID of the job.
     */
    Id?: __string;
    /**
     * The status of the job.
Valid values: CREATED, INITIALIZING, PROCESSING, COMPLETING, COMPLETED, FAILING, FAILED

The job status is FAILED if one or more pieces failed.
     */
    JobStatus?: JobStatus;
    /**
     * The number of endpoints that were not processed; for example, because of syntax errors.
     */
    TotalFailures?: __integer;
    /**
     * The total number of pieces that must be processed to finish the job. Each piece is an approximately equal portion of the endpoints.
     */
    TotalPieces?: __integer;
    /**
     * The number of endpoints that were processed by the job.
     */
    TotalProcessed?: __integer;
    /**
     * The job type. Will be 'EXPORT'.
     */
    Type?: __string;
  }
  export interface ExportJobsResponse {
    /**
     * A list of export jobs for the application.
     */
    Item?: ListOfExportJobResponse;
    /**
     * The string that you use in a subsequent request to get the next page of results in a paginated response.
     */
    NextToken?: __string;
  }
  export type Format = "CSV"|"JSON"|string;
  export type Frequency = "ONCE"|"HOURLY"|"DAILY"|"WEEKLY"|"MONTHLY"|string;
  export interface GCMChannelRequest {
    /**
     * Platform credential API key from Google.
     */
    ApiKey?: __string;
    /**
     * If the channel is enabled for sending messages.
     */
    Enabled?: __boolean;
  }
  export interface GCMChannelResponse {
    /**
     * The ID of the application to which the channel applies.
     */
    ApplicationId?: __string;
    /**
     * When was this segment created
     */
    CreationDate?: __string;
    /**
     * The GCM API key from Google.
     */
    Credential?: __string;
    /**
     * If the channel is enabled for sending messages.
     */
    Enabled?: __boolean;
    /**
     * Not used. Retained for backwards compatibility.
     */
    HasCredential?: __boolean;
    /**
     * Channel ID. Not used. Present only for backwards compatibility.
     */
    Id?: __string;
    /**
     * Is this channel archived
     */
    IsArchived?: __boolean;
    /**
     * Who last updated this entry
     */
    LastModifiedBy?: __string;
    /**
     * Last date this was updated
     */
    LastModifiedDate?: __string;
    /**
     * The platform type. Will be GCM
     */
    Platform?: __string;
    /**
     * Version of channel
     */
    Version?: __integer;
  }
  export interface GCMMessage {
    /**
     * The action that occurs if the user taps a push notification delivered by the campaign: OPEN_APP - Your app launches, or it becomes the foreground app if it has been sent to the background. This is the default action. DEEP_LINK - Uses deep linking features in iOS and Android to open your app and display a designated user interface within the app. URL - The default mobile browser on the user's device launches and opens a web page at the URL you specify. Possible values include: OPEN_APP | DEEP_LINK | URL
     */
    Action?: Action;
    /**
     * The message body of the notification, the email body or the text message.
     */
    Body?: __string;
    /**
     * This parameter identifies a group of messages (e.g., with collapse_key: "Updates Available") that can be collapsed, so that only the last message gets sent when delivery can be resumed. This is intended to avoid sending too many of the same messages when the device comes back online or becomes active.
     */
    CollapseKey?: __string;
    /**
     * The data payload used for a silent push. This payload is added to the notifications' data.pinpoint.jsonBody' object
     */
    Data?: MapOf__string;
    /**
     * The icon image name of the asset saved in your application.
     */
    IconReference?: __string;
    /**
     * The URL that points to an image used as the large icon to the notification content view.
     */
    ImageIconUrl?: __string;
    /**
     * The URL that points to an image used in the push notification.
     */
    ImageUrl?: __string;
    /**
     * The message priority. Amazon Pinpoint uses this value to set the FCM or GCM priority parameter when it sends the message. Accepts the following values:

"Normal" - Messages might be delayed. Delivery is optimized for battery usage on the receiving device. Use normal priority unless immediate delivery is required.

"High" - Messages are sent immediately and might wake a sleeping device.

The equivalent values for APNs messages are "5" and "10". Amazon Pinpoint accepts these values here and converts them.

For more information, see About FCM Messages in the Firebase documentation.
     */
    Priority?: __string;
    /**
     * The Raw JSON formatted string to be used as the payload. This value overrides the message.
     */
    RawContent?: __string;
    /**
     * This parameter specifies the package name of the application where the registration tokens must match in order to receive the message.
     */
    RestrictedPackageName?: __string;
    /**
     * Indicates if the message should display on the users device. Silent pushes can be used for Remote Configuration and Phone Home use cases.
     */
    SilentPush?: __boolean;
    /**
     * The URL that points to an image used as the small icon for the notification which will be used to represent the notification in the status bar and content view
     */
    SmallImageIconUrl?: __string;
    /**
     * Indicates a sound to play when the device receives the notification. Supports default, or the filename of a sound resource bundled in the app. Android sound files must reside in /res/raw/
     */
    Sound?: __string;
    /**
     * Default message substitutions. Can be overridden by individual address substitutions.
     */
    Substitutions?: MapOfListOf__string;
    /**
     * The length of time (in seconds) that FCM or GCM stores and attempts to deliver the message. If unspecified, the value defaults to the maximum, which is 2,419,200 seconds (28 days). Amazon Pinpoint uses this value to set the FCM or GCM time_to_live parameter.
     */
    TimeToLive?: __integer;
    /**
     * The message title that displays above the message on the user's device.
     */
    Title?: __string;
    /**
     * The URL to open in the user's mobile browser. Used if the value for Action is URL.
     */
    Url?: __string;
  }
  export interface GPSCoordinates {
    /**
     * Latitude
     */
    Latitude?: __double;
    /**
     * Longitude
     */
    Longitude?: __double;
  }
  export interface GPSPointDimension {
    /**
     * Coordinate to measure distance from.
     */
    Coordinates?: GPSCoordinates;
    /**
     * Range in kilometers from the coordinate.
     */
    RangeInKilometers?: __double;
  }
  export interface GetAdmChannelRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
  }
  export interface GetAdmChannelResponse {
    ADMChannelResponse: ADMChannelResponse;
  }
  export interface GetApnsChannelRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
  }
  export interface GetApnsChannelResponse {
    APNSChannelResponse: APNSChannelResponse;
  }
  export interface GetApnsSandboxChannelRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
  }
  export interface GetApnsSandboxChannelResponse {
    APNSSandboxChannelResponse: APNSSandboxChannelResponse;
  }
  export interface GetApnsVoipChannelRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
  }
  export interface GetApnsVoipChannelResponse {
    APNSVoipChannelResponse: APNSVoipChannelResponse;
  }
  export interface GetApnsVoipSandboxChannelRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
  }
  export interface GetApnsVoipSandboxChannelResponse {
    APNSVoipSandboxChannelResponse: APNSVoipSandboxChannelResponse;
  }
  export interface GetAppRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
  }
  export interface GetAppResponse {
    ApplicationResponse: ApplicationResponse;
  }
  export interface GetApplicationSettingsRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
  }
  export interface GetApplicationSettingsResponse {
    ApplicationSettingsResource: ApplicationSettingsResource;
  }
  export interface GetAppsRequest {
    /**
     * The number of entries you want on each page in the response.
     */
    PageSize?: __string;
    /**
     * The NextToken string returned on a previous page that you use to get the next page of results in a paginated response.
     */
    Token?: __string;
  }
  export interface GetAppsResponse {
    ApplicationsResponse: ApplicationsResponse;
  }
  export interface GetBaiduChannelRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
  }
  export interface GetBaiduChannelResponse {
    BaiduChannelResponse: BaiduChannelResponse;
  }
  export interface GetCampaignActivitiesRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
    /**
     * The unique ID of the campaign.
     */
    CampaignId: __string;
    /**
     * The number of entries you want on each page in the response.
     */
    PageSize?: __string;
    /**
     * The NextToken string returned on a previous page that you use to get the next page of results in a paginated response.
     */
    Token?: __string;
  }
  export interface GetCampaignActivitiesResponse {
    ActivitiesResponse: ActivitiesResponse;
  }
  export interface GetCampaignRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
    /**
     * The unique ID of the campaign.
     */
    CampaignId: __string;
  }
  export interface GetCampaignResponse {
    CampaignResponse: CampaignResponse;
  }
  export interface GetCampaignVersionRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
    /**
     * The unique ID of the campaign.
     */
    CampaignId: __string;
    /**
     * The version of the campaign.
     */
    Version: __string;
  }
  export interface GetCampaignVersionResponse {
    CampaignResponse: CampaignResponse;
  }
  export interface GetCampaignVersionsRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
    /**
     * The unique ID of the campaign.
     */
    CampaignId: __string;
    /**
     * The number of entries you want on each page in the response.
     */
    PageSize?: __string;
    /**
     * The NextToken string returned on a previous page that you use to get the next page of results in a paginated response.
     */
    Token?: __string;
  }
  export interface GetCampaignVersionsResponse {
    CampaignsResponse: CampaignsResponse;
  }
  export interface GetCampaignsRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
    /**
     * The number of entries you want on each page in the response.
     */
    PageSize?: __string;
    /**
     * The NextToken string returned on a previous page that you use to get the next page of results in a paginated response.
     */
    Token?: __string;
  }
  export interface GetCampaignsResponse {
    CampaignsResponse: CampaignsResponse;
  }
  export interface GetChannelsRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
  }
  export interface GetChannelsResponse {
    ChannelsResponse: ChannelsResponse;
  }
  export interface GetEmailChannelRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
  }
  export interface GetEmailChannelResponse {
    EmailChannelResponse: EmailChannelResponse;
  }
  export interface GetEndpointRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
    /**
     * The unique ID of the endpoint.
     */
    EndpointId: __string;
  }
  export interface GetEndpointResponse {
    EndpointResponse: EndpointResponse;
  }
  export interface GetEventStreamRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
  }
  export interface GetEventStreamResponse {
    EventStream: EventStream;
  }
  export interface GetExportJobRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
    /**
     * The unique ID of the job.
     */
    JobId: __string;
  }
  export interface GetExportJobResponse {
    ExportJobResponse: ExportJobResponse;
  }
  export interface GetExportJobsRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
    /**
     * The number of entries you want on each page in the response.
     */
    PageSize?: __string;
    /**
     * The NextToken string returned on a previous page that you use to get the next page of results in a paginated response.
     */
    Token?: __string;
  }
  export interface GetExportJobsResponse {
    ExportJobsResponse: ExportJobsResponse;
  }
  export interface GetGcmChannelRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
  }
  export interface GetGcmChannelResponse {
    GCMChannelResponse: GCMChannelResponse;
  }
  export interface GetImportJobRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
    /**
     * The unique ID of the job.
     */
    JobId: __string;
  }
  export interface GetImportJobResponse {
    ImportJobResponse: ImportJobResponse;
  }
  export interface GetImportJobsRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
    /**
     * The number of entries you want on each page in the response.
     */
    PageSize?: __string;
    /**
     * The NextToken string returned on a previous page that you use to get the next page of results in a paginated response.
     */
    Token?: __string;
  }
  export interface GetImportJobsResponse {
    ImportJobsResponse: ImportJobsResponse;
  }
  export interface GetSegmentExportJobsRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
    /**
     * The number of entries you want on each page in the response.
     */
    PageSize?: __string;
    /**
     * The unique ID of the segment.
     */
    SegmentId: __string;
    /**
     * The NextToken string returned on a previous page that you use to get the next page of results in a paginated response.
     */
    Token?: __string;
  }
  export interface GetSegmentExportJobsResponse {
    ExportJobsResponse: ExportJobsResponse;
  }
  export interface GetSegmentImportJobsRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
    /**
     * The number of entries you want on each page in the response.
     */
    PageSize?: __string;
    /**
     * The unique ID of the segment.
     */
    SegmentId: __string;
    /**
     * The NextToken string returned on a previous page that you use to get the next page of results in a paginated response.
     */
    Token?: __string;
  }
  export interface GetSegmentImportJobsResponse {
    ImportJobsResponse: ImportJobsResponse;
  }
  export interface GetSegmentRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
    /**
     * The unique ID of the segment.
     */
    SegmentId: __string;
  }
  export interface GetSegmentResponse {
    SegmentResponse: SegmentResponse;
  }
  export interface GetSegmentVersionRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
    /**
     * The unique ID of the segment.
     */
    SegmentId: __string;
    /**
     * The segment version.
     */
    Version: __string;
  }
  export interface GetSegmentVersionResponse {
    SegmentResponse: SegmentResponse;
  }
  export interface GetSegmentVersionsRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
    /**
     * The number of entries you want on each page in the response.
     */
    PageSize?: __string;
    /**
     * The unique ID of the segment.
     */
    SegmentId: __string;
    /**
     * The NextToken string returned on a previous page that you use to get the next page of results in a paginated response.
     */
    Token?: __string;
  }
  export interface GetSegmentVersionsResponse {
    SegmentsResponse: SegmentsResponse;
  }
  export interface GetSegmentsRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
    /**
     * The number of entries you want on each page in the response.
     */
    PageSize?: __string;
    /**
     * The NextToken string returned on a previous page that you use to get the next page of results in a paginated response.
     */
    Token?: __string;
  }
  export interface GetSegmentsResponse {
    SegmentsResponse: SegmentsResponse;
  }
  export interface GetSmsChannelRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
  }
  export interface GetSmsChannelResponse {
    SMSChannelResponse: SMSChannelResponse;
  }
  export interface GetUserEndpointsRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
    /**
     * The unique ID of the user.
     */
    UserId: __string;
  }
  export interface GetUserEndpointsResponse {
    EndpointsResponse: EndpointsResponse;
  }
  export interface ImportJobRequest {
    /**
     * Sets whether the endpoints create a segment when they are imported.
     */
    DefineSegment?: __boolean;
    /**
     * DEPRECATED. Your AWS account ID, which you assigned to the ExternalID key in an IAM trust policy. Used by Amazon Pinpoint to assume an IAM role. This requirement is removed, and external IDs are not recommended for IAM roles assumed by Amazon Pinpoint.
     */
    ExternalId?: __string;
    /**
     * The format of the files that contain the endpoint definitions.
Valid values: CSV, JSON
     */
    Format?: Format;
    /**
     * Sets whether the endpoints are registered with Amazon Pinpoint when they are imported.
     */
    RegisterEndpoints?: __boolean;
    /**
     * The Amazon Resource Name (ARN) of an IAM role that grants Amazon Pinpoint access to the Amazon S3 location that contains the endpoints to import.
     */
    RoleArn?: __string;
    /**
     * A URL that points to the location within an Amazon S3 bucket that contains the endpoints to import. The location can be a folder or a single file.
The URL should follow this format: s3://bucket-name/folder-name/file-name

Amazon Pinpoint will import endpoints from this location and any subfolders it contains.
     */
    S3Url?: __string;
    /**
     * The ID of the segment to update if the import job is meant to update an existing segment.
     */
    SegmentId?: __string;
    /**
     * A custom name for the segment created by the import job. Use if DefineSegment is true.
     */
    SegmentName?: __string;
  }
  export interface ImportJobResource {
    /**
     * Sets whether the endpoints create a segment when they are imported.
     */
    DefineSegment?: __boolean;
    /**
     * DEPRECATED. Your AWS account ID, which you assigned to the ExternalID key in an IAM trust policy. Used by Amazon Pinpoint to assume an IAM role. This requirement is removed, and external IDs are not recommended for IAM roles assumed by Amazon Pinpoint.
     */
    ExternalId?: __string;
    /**
     * The format of the files that contain the endpoint definitions.
Valid values: CSV, JSON
     */
    Format?: Format;
    /**
     * Sets whether the endpoints are registered with Amazon Pinpoint when they are imported.
     */
    RegisterEndpoints?: __boolean;
    /**
     * The Amazon Resource Name (ARN) of an IAM role that grants Amazon Pinpoint access to the Amazon S3 location that contains the endpoints to import.
     */
    RoleArn?: __string;
    /**
     * A URL that points to the location within an Amazon S3 bucket that contains the endpoints to import. The location can be a folder or a single file.
The URL should follow this format: s3://bucket-name/folder-name/file-name

Amazon Pinpoint will import endpoints from this location and any subfolders it contains.
     */
    S3Url?: __string;
    /**
     * The ID of the segment to update if the import job is meant to update an existing segment.
     */
    SegmentId?: __string;
    /**
     * A custom name for the segment created by the import job. Use if DefineSegment is true.
     */
    SegmentName?: __string;
  }
  export interface ImportJobResponse {
    /**
     * The unique ID of the application to which the import job applies.
     */
    ApplicationId?: __string;
    /**
     * The number of pieces that have successfully imported as of the time of the request.
     */
    CompletedPieces?: __integer;
    /**
     * The date the import job completed in ISO 8601 format.
     */
    CompletionDate?: __string;
    /**
     * The date the import job was created in ISO 8601 format.
     */
    CreationDate?: __string;
    /**
     * The import job settings.
     */
    Definition?: ImportJobResource;
    /**
     * The number of pieces that have failed to import as of the time of the request.
     */
    FailedPieces?: __integer;
    /**
     * Provides up to 100 of the first failed entries for the job, if any exist.
     */
    Failures?: ListOf__string;
    /**
     * The unique ID of the import job.
     */
    Id?: __string;
    /**
     * The status of the import job.
Valid values: CREATED, INITIALIZING, PROCESSING, COMPLETING, COMPLETED, FAILING, FAILED

The job status is FAILED if one or more pieces failed to import.
     */
    JobStatus?: JobStatus;
    /**
     * The number of endpoints that failed to import; for example, because of syntax errors.
     */
    TotalFailures?: __integer;
    /**
     * The total number of pieces that must be imported to finish the job. Each piece is an approximately equal portion of the endpoints to import.
     */
    TotalPieces?: __integer;
    /**
     * The number of endpoints that were processed by the import job.
     */
    TotalProcessed?: __integer;
    /**
     * The job type. Will be Import.
     */
    Type?: __string;
  }
  export interface ImportJobsResponse {
    /**
     * A list of import jobs for the application.
     */
    Item?: ListOfImportJobResponse;
    /**
     * The string that you use in a subsequent request to get the next page of results in a paginated response.
     */
    NextToken?: __string;
  }
  export type Include = "ALL"|"ANY"|"NONE"|string;
  export type JobStatus = "CREATED"|"INITIALIZING"|"PROCESSING"|"COMPLETING"|"COMPLETED"|"FAILING"|"FAILED"|string;
  export interface Message {
    /**
     * The action that occurs if the user taps a push notification delivered by the campaign:
OPEN_APP - Your app launches, or it becomes the foreground app if it has been sent to the background. This is the default action.

DEEP_LINK - Uses deep linking features in iOS and Android to open your app and display a designated user interface within the app.

URL - The default mobile browser on the user's device launches and opens a web page at the URL you specify.
     */
    Action?: Action;
    /**
     * The message body. Can include up to 140 characters.
     */
    Body?: __string;
    /**
     * The URL that points to the icon image for the push notification icon, for example, the app icon.
     */
    ImageIconUrl?: __string;
    /**
     * The URL that points to the small icon image for the push notification icon, for example, the app icon.
     */
    ImageSmallIconUrl?: __string;
    /**
     * The URL that points to an image used in the push notification.
     */
    ImageUrl?: __string;
    /**
     * The JSON payload used for a silent push.
     */
    JsonBody?: __string;
    /**
     * The URL that points to the media resource, for example a .mp4 or .gif file.
     */
    MediaUrl?: __string;
    /**
     * The Raw JSON formatted string to be used as the payload. This value overrides the message.
     */
    RawContent?: __string;
    /**
     * Indicates if the message should display on the users device.

Silent pushes can be used for Remote Configuration and Phone Home use cases. 
     */
    SilentPush?: __boolean;
    /**
     * This parameter specifies how long (in seconds) the message should be kept if the service is unable to deliver the notification the first time. If the value is 0, it treats the notification as if it expires immediately and does not store the notification or attempt to redeliver it. This value is converted to the expiration field when sent to the service. It only applies to APNs and GCM
     */
    TimeToLive?: __integer;
    /**
     * The message title that displays above the message on the user's device.
     */
    Title?: __string;
    /**
     * The URL to open in the user's mobile browser. Used if the value for Action is URL.
     */
    Url?: __string;
  }
  export interface MessageBody {
    /**
     * The error message that's returned from the API.
     */
    Message?: __string;
    /**
     * The unique message body ID.
     */
    RequestID?: __string;
  }
  export interface MessageConfiguration {
    /**
     * The message that the campaign delivers to ADM channels. Overrides the default message.
     */
    ADMMessage?: Message;
    /**
     * The message that the campaign delivers to APNS channels. Overrides the default message.
     */
    APNSMessage?: Message;
    /**
     * The message that the campaign delivers to Baidu channels. Overrides the default message.
     */
    BaiduMessage?: Message;
    /**
     * The default message for all channels.
     */
    DefaultMessage?: Message;
    /**
     * The email message configuration.
     */
    EmailMessage?: CampaignEmailMessage;
    /**
     * The message that the campaign delivers to GCM channels. Overrides the default message.
     */
    GCMMessage?: Message;
    /**
     * The SMS message configuration.
     */
    SMSMessage?: CampaignSmsMessage;
  }
  export interface MessageRequest {
    /**
     * A map of key-value pairs, where each key is an address and each value is an AddressConfiguration object. An address can be a push notification token, a phone number, or an email address.
     */
    Addresses?: MapOfAddressConfiguration;
    /**
     * A map of custom attributes to attributes to be attached to the message. This payload is added to the push notification's 'data.pinpoint' object or added to the email/sms delivery receipt event attributes.
     */
    Context?: MapOf__string;
    /**
     * A map of key-value pairs, where each key is an endpoint ID and each value is an EndpointSendConfiguration object. Within an EndpointSendConfiguration object, you can tailor the message for an endpoint by specifying message overrides or substitutions.
     */
    Endpoints?: MapOfEndpointSendConfiguration;
    /**
     * Message configuration.
     */
    MessageConfiguration?: DirectMessageConfiguration;
  }
  export interface MessageResponse {
    /**
     * Application id of the message.
     */
    ApplicationId?: __string;
    /**
     * A map containing a multi part response for each address, with the endpointId as the key and the result as the value.
     */
    EndpointResult?: MapOfEndpointMessageResult;
    /**
     * Original request Id for which this message was delivered.
     */
    RequestId?: __string;
    /**
     * A map containing a multi part response for each address, with the address as the key(Email address, phone number or push token) and the result as the value.
     */
    Result?: MapOfMessageResult;
  }
  export interface MessageResult {
    /**
     * Delivery status of message.
     */
    DeliveryStatus?: DeliveryStatus;
    /**
     * Unique message identifier associated with the message that was sent.
     */
    MessageId?: __string;
    /**
     * Downstream service status code.
     */
    StatusCode?: __integer;
    /**
     * Status message for message delivery.
     */
    StatusMessage?: __string;
    /**
     * If token was updated as part of delivery. (This is GCM Specific)
     */
    UpdatedToken?: __string;
  }
  export type MessageType = "TRANSACTIONAL"|"PROMOTIONAL"|string;
  export interface MetricDimension {
    /**
     * GREATER_THAN | LESS_THAN | GREATER_THAN_OR_EQUAL | LESS_THAN_OR_EQUAL | EQUAL
     */
    ComparisonOperator?: __string;
    /**
     * Value to be compared.
     */
    Value?: __double;
  }
  export type Mode = "DELIVERY"|"FILTER"|string;
  export interface NumberValidateRequest {
    /**
     * (Optional) The two-character ISO country code for the country where the phone number was originally registered.
     */
    IsoCountryCode?: __string;
    /**
     * The phone number to get information about.
     */
    PhoneNumber?: __string;
  }
  export interface NumberValidateResponse {
    /**
     * The carrier that the phone number is registered with.
     */
    Carrier?: __string;
    /**
     * The city where the phone number was originally registered.
     */
    City?: __string;
    /**
     * The cleansed (standardized) phone number in E.164 format.
     */
    CleansedPhoneNumberE164?: __string;
    /**
     * The cleansed phone number in national format.
     */
    CleansedPhoneNumberNational?: __string;
    /**
     * The country where the phone number was originally registered.
     */
    Country?: __string;
    /**
     * The two-character ISO country code for the country where the phone number was originally registered.
     */
    CountryCodeIso2?: __string;
    /**
     * The numeric country code for the country where the phone number was originally registered.
     */
    CountryCodeNumeric?: __string;
    /**
     * The county where the phone number was originally registered.
     */
    County?: __string;
    /**
     * The two-character ISO country code that was included in the request body.
     */
    OriginalCountryCodeIso2?: __string;
    /**
     * The phone number that you included in the request body.
     */
    OriginalPhoneNumber?: __string;
    /**
     * A description of the phone type. Possible values include MOBILE, LANDLINE, VOIP, INVALID, and OTHER.
     */
    PhoneType?: __string;
    /**
     * The phone type as an integer. Possible values include 0 (MOBILE), 1 (LANDLINE), 2 (VOIP), 3 (INVALID), and 4 (OTHER).
     */
    PhoneTypeCode?: __integer;
    /**
     * The time zone for the location where the phone number was originally registered.
     */
    Timezone?: __string;
    /**
     * The zip code for the location where the phone number was originally registered.
     */
    ZipCode?: __string;
  }
  export interface PhoneNumberValidateRequest {
    NumberValidateRequest: NumberValidateRequest;
  }
  export interface PhoneNumberValidateResponse {
    NumberValidateResponse: NumberValidateResponse;
  }
  export interface PutEventStreamRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
    WriteEventStream: WriteEventStream;
  }
  export interface PutEventStreamResponse {
    EventStream: EventStream;
  }
  export interface QuietTime {
    /**
     * The default end time for quiet time in ISO 8601 format.
     */
    End?: __string;
    /**
     * The default start time for quiet time in ISO 8601 format.
     */
    Start?: __string;
  }
  export interface RecencyDimension {
    /**
     * The length of time during which users have been active or inactive with your app.
Valid values: HR_24, DAY_7, DAY_14, DAY_30
     */
    Duration?: Duration;
    /**
     * The recency dimension type:
ACTIVE - Users who have used your app within the specified duration are included in the segment.
INACTIVE - Users who have not used your app within the specified duration are included in the segment.
     */
    RecencyType?: RecencyType;
  }
  export type RecencyType = "ACTIVE"|"INACTIVE"|string;
  export interface RemoveAttributesRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
    /**
     * Type of attribute. Can be endpoint-custom-attributes, endpoint-custom-metrics, endpoint-user-attributes.
     */
    AttributeType: __string;
    UpdateAttributesRequest: UpdateAttributesRequest;
  }
  export interface RemoveAttributesResponse {
    AttributesResource: AttributesResource;
  }
  export interface SMSChannelRequest {
    /**
     * If the channel is enabled for sending messages.
     */
    Enabled?: __boolean;
    /**
     * Sender identifier of your messages.
     */
    SenderId?: __string;
    /**
     * ShortCode registered with phone provider.
     */
    ShortCode?: __string;
  }
  export interface SMSChannelResponse {
    /**
     * The unique ID of the application to which the SMS channel belongs.
     */
    ApplicationId?: __string;
    /**
     * The date that the settings were last updated in ISO 8601 format.
     */
    CreationDate?: __string;
    /**
     * If the channel is enabled for sending messages.
     */
    Enabled?: __boolean;
    /**
     * Not used. Retained for backwards compatibility.
     */
    HasCredential?: __boolean;
    /**
     * Channel ID. Not used, only for backwards compatibility.
     */
    Id?: __string;
    /**
     * Is this channel archived
     */
    IsArchived?: __boolean;
    /**
     * Who last updated this entry
     */
    LastModifiedBy?: __string;
    /**
     * Last date this was updated
     */
    LastModifiedDate?: __string;
    /**
     * Platform type. Will be "SMS"
     */
    Platform?: __string;
    /**
     * Promotional messages per second that can be sent
     */
    PromotionalMessagesPerSecond?: __integer;
    /**
     * Sender identifier of your messages.
     */
    SenderId?: __string;
    /**
     * The short code registered with the phone provider.
     */
    ShortCode?: __string;
    /**
     * Transactional messages per second that can be sent
     */
    TransactionalMessagesPerSecond?: __integer;
    /**
     * Version of channel
     */
    Version?: __integer;
  }
  export interface SMSMessage {
    /**
     * The body of the SMS message.
     */
    Body?: __string;
    /**
     * The SMS program name that you provided to AWS Support when you requested your dedicated number.
     */
    Keyword?: __string;
    /**
     * Is this a transaction priority message or lower priority.
     */
    MessageType?: MessageType;
    /**
     * The phone number that the SMS message originates from. Specify one of the dedicated long codes or short codes that you requested from AWS Support and that is assigned to your account. If this attribute is not specified, Amazon Pinpoint randomly assigns a long code.
     */
    OriginationNumber?: __string;
    /**
     * The sender ID that is shown as the message sender on the recipient's device. Support for sender IDs varies by country or region.
     */
    SenderId?: __string;
    /**
     * Default message substitutions. Can be overridden by individual address substitutions.
     */
    Substitutions?: MapOfListOf__string;
  }
  export interface Schedule {
    /**
     * The scheduled time that the campaign ends in ISO 8601 format.
     */
    EndTime?: __string;
    /**
     * How often the campaign delivers messages.

Valid values: ONCE, HOURLY, DAILY, WEEKLY, MONTHLY
     */
    Frequency?: Frequency;
    /**
     * Indicates whether the campaign schedule takes effect according to each user's local time.
     */
    IsLocalTime?: __boolean;
    /**
     * The time during which the campaign sends no messages.
     */
    QuietTime?: QuietTime;
    /**
     * The scheduled time that the campaign begins in ISO 8601 format.
     */
    StartTime?: __string;
    /**
     * The starting UTC offset for the schedule if the value for isLocalTime is true

Valid values: 
UTC
UTC+01
UTC+02
UTC+03
UTC+03:30
UTC+04
UTC+04:30
UTC+05
UTC+05:30
UTC+05:45
UTC+06
UTC+06:30
UTC+07
UTC+08
UTC+09
UTC+09:30
UTC+10
UTC+10:30
UTC+11
UTC+12
UTC+13
UTC-02
UTC-03
UTC-04
UTC-05
UTC-06
UTC-07
UTC-08
UTC-09
UTC-10
UTC-11
     */
    Timezone?: __string;
  }
  export interface SegmentBehaviors {
    /**
     * The recency of use.
     */
    Recency?: RecencyDimension;
  }
  export interface SegmentDemographics {
    /**
     * The app version criteria for the segment.
     */
    AppVersion?: SetDimension;
    /**
     * The channel criteria for the segment.
     */
    Channel?: SetDimension;
    /**
     * The device type criteria for the segment.
     */
    DeviceType?: SetDimension;
    /**
     * The device make criteria for the segment.
     */
    Make?: SetDimension;
    /**
     * The device model criteria for the segment.
     */
    Model?: SetDimension;
    /**
     * The device platform criteria for the segment.
     */
    Platform?: SetDimension;
  }
  export interface SegmentDimensions {
    /**
     * Custom segment attributes.
     */
    Attributes?: MapOfAttributeDimension;
    /**
     * The segment behaviors attributes.
     */
    Behavior?: SegmentBehaviors;
    /**
     * The segment demographics attributes.
     */
    Demographic?: SegmentDemographics;
    /**
     * The segment location attributes.
     */
    Location?: SegmentLocation;
    /**
     * Custom segment metrics.
     */
    Metrics?: MapOfMetricDimension;
    /**
     * Custom segment user attributes.
     */
    UserAttributes?: MapOfAttributeDimension;
  }
  export interface SegmentGroup {
    /**
     * List of dimensions to include or exclude.
     */
    Dimensions?: ListOfSegmentDimensions;
    /**
     * Segments that define the source of this segment. Currently a maximum of 1 import segment is supported.
     */
    SourceSegments?: ListOfSegmentReference;
    /**
     * Include or exclude the source.
     */
    SourceType?: SourceType;
    /**
     * How should the dimensions be applied for the result
     */
    Type?: Type;
  }
  export interface SegmentGroupList {
    /**
     * List of dimension groups to evaluate.
     */
    Groups?: ListOfSegmentGroup;
    /**
     * How should the groups be applied for the result
     */
    Include?: Include;
  }
  export interface SegmentImportResource {
    /**
     * Channel type counts
     */
    ChannelCounts?: MapOf__integer;
    /**
     * DEPRECATED. Your AWS account ID, which you assigned to the ExternalID key in an IAM trust policy. Used by Amazon Pinpoint to assume an IAM role. This requirement is removed, and external IDs are not recommended for IAM roles assumed by Amazon Pinpoint.
     */
    ExternalId?: __string;
    /**
     * The format of the endpoint files that were imported to create this segment.
Valid values: CSV, JSON
     */
    Format?: Format;
    /**
     * The Amazon Resource Name (ARN) of an IAM role that grants Amazon Pinpoint access to the endpoints in Amazon S3.
     */
    RoleArn?: __string;
    /**
     * A URL that points to the Amazon S3 location from which the endpoints for this segment were imported.
     */
    S3Url?: __string;
    /**
     * The number of endpoints that were successfully imported to create this segment.
     */
    Size?: __integer;
  }
  export interface SegmentLocation {
    /**
     * The country filter according to ISO 3166-1 Alpha-2 codes.
     */
    Country?: SetDimension;
    /**
     * The GPS Point dimension.
     */
    GPSPoint?: GPSPointDimension;
  }
  export interface SegmentReference {
    /**
     * Segment Id.
     */
    Id?: __string;
    /**
     * If specified contains a specific version of the segment included.
     */
    Version?: __integer;
  }
  export interface SegmentResponse {
    /**
     * The ID of the application to which the segment applies.
     */
    ApplicationId?: __string;
    /**
     * The date the segment was created in ISO 8601 format.
     */
    CreationDate?: __string;
    /**
     * The segment dimensions attributes.
     */
    Dimensions?: SegmentDimensions;
    /**
     * The unique segment ID.
     */
    Id?: __string;
    /**
     * The import job settings.
     */
    ImportDefinition?: SegmentImportResource;
    /**
     * The date the segment was last updated in ISO 8601 format.
     */
    LastModifiedDate?: __string;
    /**
     * The name of segment
     */
    Name?: __string;
    /**
     * Segment definition groups. We currently only support one. If specified Dimensions must be empty.
     */
    SegmentGroups?: SegmentGroupList;
    /**
     * The segment type:
DIMENSIONAL - A dynamic segment built from selection criteria based on endpoint data reported by your app. You create this type of segment by using the segment builder in the Amazon Pinpoint console or by making a POST request to the segments resource.
IMPORT - A static segment built from an imported set of endpoint definitions. You create this type of segment by importing a segment in the Amazon Pinpoint console or by making a POST request to the jobs/import resource.
     */
    SegmentType?: SegmentType;
    /**
     * The segment version number.
     */
    Version?: __integer;
  }
  export type SegmentType = "DIMENSIONAL"|"IMPORT"|string;
  export interface SegmentsResponse {
    /**
     * The list of segments.
     */
    Item?: ListOfSegmentResponse;
    /**
     * An identifier used to retrieve the next page of results. The token is null if no additional pages exist.
     */
    NextToken?: __string;
  }
  export interface SendMessagesRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
    MessageRequest: MessageRequest;
  }
  export interface SendMessagesResponse {
    MessageResponse: MessageResponse;
  }
  export interface SendUsersMessageRequest {
    /**
     * A map of custom attribute-value pairs. Amazon Pinpoint adds these attributes to the data.pinpoint object in the body of the push notification payload. Amazon Pinpoint also provides these attributes in the events that it generates for users-messages deliveries.
     */
    Context?: MapOf__string;
    /**
     * Message definitions for the default message and any messages that are tailored for specific channels.
     */
    MessageConfiguration?: DirectMessageConfiguration;
    /**
     * A map that associates user IDs with EndpointSendConfiguration objects. Within an EndpointSendConfiguration object, you can tailor the message for a user by specifying message overrides or substitutions.
     */
    Users?: MapOfEndpointSendConfiguration;
  }
  export interface SendUsersMessageResponse {
    /**
     * The unique ID of the Amazon Pinpoint project used to send the message.
     */
    ApplicationId?: __string;
    /**
     * The unique ID assigned to the users-messages request.
     */
    RequestId?: __string;
    /**
     * An object that shows the endpoints that were messaged for each user. The object provides a list of user IDs. For each user ID, it provides the endpoint IDs that were messaged. For each endpoint ID, it provides an EndpointMessageResult object.
     */
    Result?: MapOfMapOfEndpointMessageResult;
  }
  export interface SendUsersMessagesRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
    SendUsersMessageRequest: SendUsersMessageRequest;
  }
  export interface SendUsersMessagesResponse {
    SendUsersMessageResponse: SendUsersMessageResponse;
  }
  export interface SetDimension {
    /**
     * The type of dimension:
INCLUSIVE - Endpoints that match the criteria are included in the segment.
EXCLUSIVE - Endpoints that match the criteria are excluded from the segment.
     */
    DimensionType?: DimensionType;
    /**
     * The criteria values for the segment dimension. Endpoints with matching attribute values are included or excluded from the segment, depending on the setting for Type.
     */
    Values?: ListOf__string;
  }
  export type SourceType = "ALL"|"ANY"|string;
  export interface TreatmentResource {
    /**
     * The unique treatment ID.
     */
    Id?: __string;
    /**
     * The message configuration settings.
     */
    MessageConfiguration?: MessageConfiguration;
    /**
     * The campaign schedule.
     */
    Schedule?: Schedule;
    /**
     * The allocated percentage of users for this treatment.
     */
    SizePercent?: __integer;
    /**
     * The treatment status.
     */
    State?: CampaignState;
    /**
     * A custom description for the treatment.
     */
    TreatmentDescription?: __string;
    /**
     * The custom name of a variation of the campaign used for A/B testing.
     */
    TreatmentName?: __string;
  }
  export type Type = "ALL"|"ANY"|"NONE"|string;
  export interface UpdateAdmChannelRequest {
    ADMChannelRequest: ADMChannelRequest;
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
  }
  export interface UpdateAdmChannelResponse {
    ADMChannelResponse: ADMChannelResponse;
  }
  export interface UpdateApnsChannelRequest {
    APNSChannelRequest: APNSChannelRequest;
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
  }
  export interface UpdateApnsChannelResponse {
    APNSChannelResponse: APNSChannelResponse;
  }
  export interface UpdateApnsSandboxChannelRequest {
    APNSSandboxChannelRequest: APNSSandboxChannelRequest;
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
  }
  export interface UpdateApnsSandboxChannelResponse {
    APNSSandboxChannelResponse: APNSSandboxChannelResponse;
  }
  export interface UpdateApnsVoipChannelRequest {
    APNSVoipChannelRequest: APNSVoipChannelRequest;
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
  }
  export interface UpdateApnsVoipChannelResponse {
    APNSVoipChannelResponse: APNSVoipChannelResponse;
  }
  export interface UpdateApnsVoipSandboxChannelRequest {
    APNSVoipSandboxChannelRequest: APNSVoipSandboxChannelRequest;
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
  }
  export interface UpdateApnsVoipSandboxChannelResponse {
    APNSVoipSandboxChannelResponse: APNSVoipSandboxChannelResponse;
  }
  export interface UpdateApplicationSettingsRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
    WriteApplicationSettingsRequest: WriteApplicationSettingsRequest;
  }
  export interface UpdateApplicationSettingsResponse {
    ApplicationSettingsResource: ApplicationSettingsResource;
  }
  export interface UpdateAttributesRequest {
    /**
     * The GLOB wildcard for removing the attributes in the application
     */
    Blacklist?: ListOf__string;
  }
  export interface UpdateBaiduChannelRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
    BaiduChannelRequest: BaiduChannelRequest;
  }
  export interface UpdateBaiduChannelResponse {
    BaiduChannelResponse: BaiduChannelResponse;
  }
  export interface UpdateCampaignRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
    /**
     * The unique ID of the campaign.
     */
    CampaignId: __string;
    WriteCampaignRequest: WriteCampaignRequest;
  }
  export interface UpdateCampaignResponse {
    CampaignResponse: CampaignResponse;
  }
  export interface UpdateEmailChannelRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
    EmailChannelRequest: EmailChannelRequest;
  }
  export interface UpdateEmailChannelResponse {
    EmailChannelResponse: EmailChannelResponse;
  }
  export interface UpdateEndpointRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
    /**
     * The unique ID of the endpoint.
     */
    EndpointId: __string;
    EndpointRequest: EndpointRequest;
  }
  export interface UpdateEndpointResponse {
    MessageBody: MessageBody;
  }
  export interface UpdateEndpointsBatchRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
    EndpointBatchRequest: EndpointBatchRequest;
  }
  export interface UpdateEndpointsBatchResponse {
    MessageBody: MessageBody;
  }
  export interface UpdateGcmChannelRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
    GCMChannelRequest: GCMChannelRequest;
  }
  export interface UpdateGcmChannelResponse {
    GCMChannelResponse: GCMChannelResponse;
  }
  export interface UpdateSegmentRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
    /**
     * The unique ID of the segment.
     */
    SegmentId: __string;
    WriteSegmentRequest: WriteSegmentRequest;
  }
  export interface UpdateSegmentResponse {
    SegmentResponse: SegmentResponse;
  }
  export interface UpdateSmsChannelRequest {
    /**
     * The unique ID of your Amazon Pinpoint application.
     */
    ApplicationId: __string;
    SMSChannelRequest: SMSChannelRequest;
  }
  export interface UpdateSmsChannelResponse {
    SMSChannelResponse: SMSChannelResponse;
  }
  export interface WriteApplicationSettingsRequest {
    /**
     * Default campaign hook information.
     */
    CampaignHook?: CampaignHook;
    /**
     * The CloudWatchMetrics settings for the app.
     */
    CloudWatchMetricsEnabled?: __boolean;
    /**
     * The default campaign limits for the app. These limits apply to each campaign for the app, unless the campaign overrides the default with limits of its own.
     */
    Limits?: CampaignLimits;
    /**
     * The default quiet time for the app. Each campaign for this app sends no messages during this time unless the campaign overrides the default with a quiet time of its own.
     */
    QuietTime?: QuietTime;
  }
  export interface WriteCampaignRequest {
    /**
     * Treatments that are defined in addition to the default treatment.
     */
    AdditionalTreatments?: ListOfWriteTreatmentResource;
    /**
     * A description of the campaign.
     */
    Description?: __string;
    /**
     * The allocated percentage of end users who will not receive messages from this campaign.
     */
    HoldoutPercent?: __integer;
    /**
     * Campaign hook information.
     */
    Hook?: CampaignHook;
    /**
     * Indicates whether the campaign is paused. A paused campaign does not send messages unless you resume it by setting IsPaused to false.
     */
    IsPaused?: __boolean;
    /**
     * The campaign limits settings.
     */
    Limits?: CampaignLimits;
    /**
     * The message configuration settings.
     */
    MessageConfiguration?: MessageConfiguration;
    /**
     * The custom name of the campaign.
     */
    Name?: __string;
    /**
     * The campaign schedule.
     */
    Schedule?: Schedule;
    /**
     * The ID of the segment to which the campaign sends messages.
     */
    SegmentId?: __string;
    /**
     * The version of the segment to which the campaign sends messages.
     */
    SegmentVersion?: __integer;
    /**
     * A custom description for the treatment.
     */
    TreatmentDescription?: __string;
    /**
     * The custom name of a variation of the campaign used for A/B testing.
     */
    TreatmentName?: __string;
  }
  export interface WriteEventStream {
    /**
     * The Amazon Resource Name (ARN) of the Amazon Kinesis stream or Firehose delivery stream to which you want to publish events.
 Firehose ARN: arn:aws:firehose:REGION:ACCOUNT_ID:deliverystream/STREAM_NAME
 Kinesis ARN: arn:aws:kinesis:REGION:ACCOUNT_ID:stream/STREAM_NAME
     */
    DestinationStreamArn?: __string;
    /**
     * The IAM role that authorizes Amazon Pinpoint to publish events to the stream in your account.
     */
    RoleArn?: __string;
  }
  export interface WriteSegmentRequest {
    /**
     * The segment dimensions attributes.
     */
    Dimensions?: SegmentDimensions;
    /**
     * The name of segment
     */
    Name?: __string;
    /**
     * Segment definition groups. We currently only support one. If specified Dimensions must be empty.
     */
    SegmentGroups?: SegmentGroupList;
  }
  export interface WriteTreatmentResource {
    /**
     * The message configuration settings.
     */
    MessageConfiguration?: MessageConfiguration;
    /**
     * The campaign schedule.
     */
    Schedule?: Schedule;
    /**
     * The allocated percentage of users for this treatment.
     */
    SizePercent?: __integer;
    /**
     * A custom description for the treatment.
     */
    TreatmentDescription?: __string;
    /**
     * The custom name of a variation of the campaign used for A/B testing.
     */
    TreatmentName?: __string;
  }
  export type __boolean = boolean;
  export type __double = number;
  export type __integer = number;
  export type ListOfActivityResponse = ActivityResponse[];
  export type ListOfApplicationResponse = ApplicationResponse[];
  export type ListOfCampaignResponse = CampaignResponse[];
  export type ListOfEndpointBatchItem = EndpointBatchItem[];
  export type ListOfEndpointResponse = EndpointResponse[];
  export type ListOfExportJobResponse = ExportJobResponse[];
  export type ListOfImportJobResponse = ImportJobResponse[];
  export type ListOfSegmentDimensions = SegmentDimensions[];
  export type ListOfSegmentGroup = SegmentGroup[];
  export type ListOfSegmentReference = SegmentReference[];
  export type ListOfSegmentResponse = SegmentResponse[];
  export type ListOfTreatmentResource = TreatmentResource[];
  export type ListOfWriteTreatmentResource = WriteTreatmentResource[];
  export type ListOf__string = __string[];
  export type MapOfAddressConfiguration = {[key: string]: AddressConfiguration};
  export type MapOfAttributeDimension = {[key: string]: AttributeDimension};
  export type MapOfChannelResponse = {[key: string]: ChannelResponse};
  export type MapOfEndpointMessageResult = {[key: string]: EndpointMessageResult};
  export type MapOfEndpointSendConfiguration = {[key: string]: EndpointSendConfiguration};
  export type MapOfMessageResult = {[key: string]: MessageResult};
  export type MapOfMetricDimension = {[key: string]: MetricDimension};
  export type MapOf__double = {[key: string]: __double};
  export type MapOf__integer = {[key: string]: __integer};
  export type MapOfListOf__string = {[key: string]: ListOf__string};
  export type MapOfMapOfEndpointMessageResult = {[key: string]: MapOfEndpointMessageResult};
  export type MapOf__string = {[key: string]: __string};
  export type __string = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2016-12-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Pinpoint client.
   */
  export import Types = Pinpoint;
}
export = Pinpoint;
