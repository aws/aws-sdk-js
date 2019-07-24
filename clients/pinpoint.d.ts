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
   *  Creates an application.
   */
  createApp(params: Pinpoint.Types.CreateAppRequest, callback?: (err: AWSError, data: Pinpoint.Types.CreateAppResponse) => void): Request<Pinpoint.Types.CreateAppResponse, AWSError>;
  /**
   *  Creates an application.
   */
  createApp(callback?: (err: AWSError, data: Pinpoint.Types.CreateAppResponse) => void): Request<Pinpoint.Types.CreateAppResponse, AWSError>;
  /**
   * Creates a new campaign for an application or updates the settings of an existing campaign for an application.
   */
  createCampaign(params: Pinpoint.Types.CreateCampaignRequest, callback?: (err: AWSError, data: Pinpoint.Types.CreateCampaignResponse) => void): Request<Pinpoint.Types.CreateCampaignResponse, AWSError>;
  /**
   * Creates a new campaign for an application or updates the settings of an existing campaign for an application.
   */
  createCampaign(callback?: (err: AWSError, data: Pinpoint.Types.CreateCampaignResponse) => void): Request<Pinpoint.Types.CreateCampaignResponse, AWSError>;
  /**
   * Creates a new export job for an application.
   */
  createExportJob(params: Pinpoint.Types.CreateExportJobRequest, callback?: (err: AWSError, data: Pinpoint.Types.CreateExportJobResponse) => void): Request<Pinpoint.Types.CreateExportJobResponse, AWSError>;
  /**
   * Creates a new export job for an application.
   */
  createExportJob(callback?: (err: AWSError, data: Pinpoint.Types.CreateExportJobResponse) => void): Request<Pinpoint.Types.CreateExportJobResponse, AWSError>;
  /**
   * Creates a new import job for an application.
   */
  createImportJob(params: Pinpoint.Types.CreateImportJobRequest, callback?: (err: AWSError, data: Pinpoint.Types.CreateImportJobResponse) => void): Request<Pinpoint.Types.CreateImportJobResponse, AWSError>;
  /**
   * Creates a new import job for an application.
   */
  createImportJob(callback?: (err: AWSError, data: Pinpoint.Types.CreateImportJobResponse) => void): Request<Pinpoint.Types.CreateImportJobResponse, AWSError>;
  /**
   * Creates a new segment for an application or updates the configuration, dimension, and other settings for an existing segment that's associated with an application.
   */
  createSegment(params: Pinpoint.Types.CreateSegmentRequest, callback?: (err: AWSError, data: Pinpoint.Types.CreateSegmentResponse) => void): Request<Pinpoint.Types.CreateSegmentResponse, AWSError>;
  /**
   * Creates a new segment for an application or updates the configuration, dimension, and other settings for an existing segment that's associated with an application.
   */
  createSegment(callback?: (err: AWSError, data: Pinpoint.Types.CreateSegmentResponse) => void): Request<Pinpoint.Types.CreateSegmentResponse, AWSError>;
  /**
   * Disables the ADM channel for an application and deletes any existing settings for the channel.
   */
  deleteAdmChannel(params: Pinpoint.Types.DeleteAdmChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.DeleteAdmChannelResponse) => void): Request<Pinpoint.Types.DeleteAdmChannelResponse, AWSError>;
  /**
   * Disables the ADM channel for an application and deletes any existing settings for the channel.
   */
  deleteAdmChannel(callback?: (err: AWSError, data: Pinpoint.Types.DeleteAdmChannelResponse) => void): Request<Pinpoint.Types.DeleteAdmChannelResponse, AWSError>;
  /**
   * Disables the APNs channel for an application and deletes any existing settings for the channel.
   */
  deleteApnsChannel(params: Pinpoint.Types.DeleteApnsChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.DeleteApnsChannelResponse) => void): Request<Pinpoint.Types.DeleteApnsChannelResponse, AWSError>;
  /**
   * Disables the APNs channel for an application and deletes any existing settings for the channel.
   */
  deleteApnsChannel(callback?: (err: AWSError, data: Pinpoint.Types.DeleteApnsChannelResponse) => void): Request<Pinpoint.Types.DeleteApnsChannelResponse, AWSError>;
  /**
   * Disables the APNs sandbox channel for an application and deletes any existing settings for the channel.
   */
  deleteApnsSandboxChannel(params: Pinpoint.Types.DeleteApnsSandboxChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.DeleteApnsSandboxChannelResponse) => void): Request<Pinpoint.Types.DeleteApnsSandboxChannelResponse, AWSError>;
  /**
   * Disables the APNs sandbox channel for an application and deletes any existing settings for the channel.
   */
  deleteApnsSandboxChannel(callback?: (err: AWSError, data: Pinpoint.Types.DeleteApnsSandboxChannelResponse) => void): Request<Pinpoint.Types.DeleteApnsSandboxChannelResponse, AWSError>;
  /**
   * Disables the APNs VoIP channel for an application and deletes any existing settings for the channel.
   */
  deleteApnsVoipChannel(params: Pinpoint.Types.DeleteApnsVoipChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.DeleteApnsVoipChannelResponse) => void): Request<Pinpoint.Types.DeleteApnsVoipChannelResponse, AWSError>;
  /**
   * Disables the APNs VoIP channel for an application and deletes any existing settings for the channel.
   */
  deleteApnsVoipChannel(callback?: (err: AWSError, data: Pinpoint.Types.DeleteApnsVoipChannelResponse) => void): Request<Pinpoint.Types.DeleteApnsVoipChannelResponse, AWSError>;
  /**
   * Disables the APNs VoIP sandbox channel for an application and deletes any existing settings for the channel.
   */
  deleteApnsVoipSandboxChannel(params: Pinpoint.Types.DeleteApnsVoipSandboxChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.DeleteApnsVoipSandboxChannelResponse) => void): Request<Pinpoint.Types.DeleteApnsVoipSandboxChannelResponse, AWSError>;
  /**
   * Disables the APNs VoIP sandbox channel for an application and deletes any existing settings for the channel.
   */
  deleteApnsVoipSandboxChannel(callback?: (err: AWSError, data: Pinpoint.Types.DeleteApnsVoipSandboxChannelResponse) => void): Request<Pinpoint.Types.DeleteApnsVoipSandboxChannelResponse, AWSError>;
  /**
   * Deletes an application.
   */
  deleteApp(params: Pinpoint.Types.DeleteAppRequest, callback?: (err: AWSError, data: Pinpoint.Types.DeleteAppResponse) => void): Request<Pinpoint.Types.DeleteAppResponse, AWSError>;
  /**
   * Deletes an application.
   */
  deleteApp(callback?: (err: AWSError, data: Pinpoint.Types.DeleteAppResponse) => void): Request<Pinpoint.Types.DeleteAppResponse, AWSError>;
  /**
   * Disables the Baidu channel for an application and deletes any existing settings for the channel.
   */
  deleteBaiduChannel(params: Pinpoint.Types.DeleteBaiduChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.DeleteBaiduChannelResponse) => void): Request<Pinpoint.Types.DeleteBaiduChannelResponse, AWSError>;
  /**
   * Disables the Baidu channel for an application and deletes any existing settings for the channel.
   */
  deleteBaiduChannel(callback?: (err: AWSError, data: Pinpoint.Types.DeleteBaiduChannelResponse) => void): Request<Pinpoint.Types.DeleteBaiduChannelResponse, AWSError>;
  /**
   * Deletes a campaign from an application.
   */
  deleteCampaign(params: Pinpoint.Types.DeleteCampaignRequest, callback?: (err: AWSError, data: Pinpoint.Types.DeleteCampaignResponse) => void): Request<Pinpoint.Types.DeleteCampaignResponse, AWSError>;
  /**
   * Deletes a campaign from an application.
   */
  deleteCampaign(callback?: (err: AWSError, data: Pinpoint.Types.DeleteCampaignResponse) => void): Request<Pinpoint.Types.DeleteCampaignResponse, AWSError>;
  /**
   * Disables the email channel for an application and deletes any existing settings for the channel.
   */
  deleteEmailChannel(params: Pinpoint.Types.DeleteEmailChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.DeleteEmailChannelResponse) => void): Request<Pinpoint.Types.DeleteEmailChannelResponse, AWSError>;
  /**
   * Disables the email channel for an application and deletes any existing settings for the channel.
   */
  deleteEmailChannel(callback?: (err: AWSError, data: Pinpoint.Types.DeleteEmailChannelResponse) => void): Request<Pinpoint.Types.DeleteEmailChannelResponse, AWSError>;
  /**
   * Deletes an endpoint from an application.
   */
  deleteEndpoint(params: Pinpoint.Types.DeleteEndpointRequest, callback?: (err: AWSError, data: Pinpoint.Types.DeleteEndpointResponse) => void): Request<Pinpoint.Types.DeleteEndpointResponse, AWSError>;
  /**
   * Deletes an endpoint from an application.
   */
  deleteEndpoint(callback?: (err: AWSError, data: Pinpoint.Types.DeleteEndpointResponse) => void): Request<Pinpoint.Types.DeleteEndpointResponse, AWSError>;
  /**
   * Deletes the event stream for an application.
   */
  deleteEventStream(params: Pinpoint.Types.DeleteEventStreamRequest, callback?: (err: AWSError, data: Pinpoint.Types.DeleteEventStreamResponse) => void): Request<Pinpoint.Types.DeleteEventStreamResponse, AWSError>;
  /**
   * Deletes the event stream for an application.
   */
  deleteEventStream(callback?: (err: AWSError, data: Pinpoint.Types.DeleteEventStreamResponse) => void): Request<Pinpoint.Types.DeleteEventStreamResponse, AWSError>;
  /**
   * Disables the GCM channel for an application and deletes any existing settings for the channel.
   */
  deleteGcmChannel(params: Pinpoint.Types.DeleteGcmChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.DeleteGcmChannelResponse) => void): Request<Pinpoint.Types.DeleteGcmChannelResponse, AWSError>;
  /**
   * Disables the GCM channel for an application and deletes any existing settings for the channel.
   */
  deleteGcmChannel(callback?: (err: AWSError, data: Pinpoint.Types.DeleteGcmChannelResponse) => void): Request<Pinpoint.Types.DeleteGcmChannelResponse, AWSError>;
  /**
   * Deletes a segment from an application.
   */
  deleteSegment(params: Pinpoint.Types.DeleteSegmentRequest, callback?: (err: AWSError, data: Pinpoint.Types.DeleteSegmentResponse) => void): Request<Pinpoint.Types.DeleteSegmentResponse, AWSError>;
  /**
   * Deletes a segment from an application.
   */
  deleteSegment(callback?: (err: AWSError, data: Pinpoint.Types.DeleteSegmentResponse) => void): Request<Pinpoint.Types.DeleteSegmentResponse, AWSError>;
  /**
   * Disables the SMS channel for an application and deletes any existing settings for the channel.
   */
  deleteSmsChannel(params: Pinpoint.Types.DeleteSmsChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.DeleteSmsChannelResponse) => void): Request<Pinpoint.Types.DeleteSmsChannelResponse, AWSError>;
  /**
   * Disables the SMS channel for an application and deletes any existing settings for the channel.
   */
  deleteSmsChannel(callback?: (err: AWSError, data: Pinpoint.Types.DeleteSmsChannelResponse) => void): Request<Pinpoint.Types.DeleteSmsChannelResponse, AWSError>;
  /**
   * Deletes all the endpoints that are associated with a specific user ID.
   */
  deleteUserEndpoints(params: Pinpoint.Types.DeleteUserEndpointsRequest, callback?: (err: AWSError, data: Pinpoint.Types.DeleteUserEndpointsResponse) => void): Request<Pinpoint.Types.DeleteUserEndpointsResponse, AWSError>;
  /**
   * Deletes all the endpoints that are associated with a specific user ID.
   */
  deleteUserEndpoints(callback?: (err: AWSError, data: Pinpoint.Types.DeleteUserEndpointsResponse) => void): Request<Pinpoint.Types.DeleteUserEndpointsResponse, AWSError>;
  /**
   * Disables the voice channel for an application and deletes any existing settings for the channel.
   */
  deleteVoiceChannel(params: Pinpoint.Types.DeleteVoiceChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.DeleteVoiceChannelResponse) => void): Request<Pinpoint.Types.DeleteVoiceChannelResponse, AWSError>;
  /**
   * Disables the voice channel for an application and deletes any existing settings for the channel.
   */
  deleteVoiceChannel(callback?: (err: AWSError, data: Pinpoint.Types.DeleteVoiceChannelResponse) => void): Request<Pinpoint.Types.DeleteVoiceChannelResponse, AWSError>;
  /**
   * Retrieves information about the status and settings of the ADM channel for an application.
   */
  getAdmChannel(params: Pinpoint.Types.GetAdmChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetAdmChannelResponse) => void): Request<Pinpoint.Types.GetAdmChannelResponse, AWSError>;
  /**
   * Retrieves information about the status and settings of the ADM channel for an application.
   */
  getAdmChannel(callback?: (err: AWSError, data: Pinpoint.Types.GetAdmChannelResponse) => void): Request<Pinpoint.Types.GetAdmChannelResponse, AWSError>;
  /**
   * Retrieves information about the status and settings of the APNs channel for an application.
   */
  getApnsChannel(params: Pinpoint.Types.GetApnsChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetApnsChannelResponse) => void): Request<Pinpoint.Types.GetApnsChannelResponse, AWSError>;
  /**
   * Retrieves information about the status and settings of the APNs channel for an application.
   */
  getApnsChannel(callback?: (err: AWSError, data: Pinpoint.Types.GetApnsChannelResponse) => void): Request<Pinpoint.Types.GetApnsChannelResponse, AWSError>;
  /**
   * Retrieves information about the status and settings of the APNs sandbox channel for an application.
   */
  getApnsSandboxChannel(params: Pinpoint.Types.GetApnsSandboxChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetApnsSandboxChannelResponse) => void): Request<Pinpoint.Types.GetApnsSandboxChannelResponse, AWSError>;
  /**
   * Retrieves information about the status and settings of the APNs sandbox channel for an application.
   */
  getApnsSandboxChannel(callback?: (err: AWSError, data: Pinpoint.Types.GetApnsSandboxChannelResponse) => void): Request<Pinpoint.Types.GetApnsSandboxChannelResponse, AWSError>;
  /**
   * Retrieves information about the status and settings of the APNs VoIP channel for an application.
   */
  getApnsVoipChannel(params: Pinpoint.Types.GetApnsVoipChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetApnsVoipChannelResponse) => void): Request<Pinpoint.Types.GetApnsVoipChannelResponse, AWSError>;
  /**
   * Retrieves information about the status and settings of the APNs VoIP channel for an application.
   */
  getApnsVoipChannel(callback?: (err: AWSError, data: Pinpoint.Types.GetApnsVoipChannelResponse) => void): Request<Pinpoint.Types.GetApnsVoipChannelResponse, AWSError>;
  /**
   * Retrieves information about the status and settings of the APNs VoIP sandbox channel for an application.
   */
  getApnsVoipSandboxChannel(params: Pinpoint.Types.GetApnsVoipSandboxChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetApnsVoipSandboxChannelResponse) => void): Request<Pinpoint.Types.GetApnsVoipSandboxChannelResponse, AWSError>;
  /**
   * Retrieves information about the status and settings of the APNs VoIP sandbox channel for an application.
   */
  getApnsVoipSandboxChannel(callback?: (err: AWSError, data: Pinpoint.Types.GetApnsVoipSandboxChannelResponse) => void): Request<Pinpoint.Types.GetApnsVoipSandboxChannelResponse, AWSError>;
  /**
   * Retrieves information about an application.
   */
  getApp(params: Pinpoint.Types.GetAppRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetAppResponse) => void): Request<Pinpoint.Types.GetAppResponse, AWSError>;
  /**
   * Retrieves information about an application.
   */
  getApp(callback?: (err: AWSError, data: Pinpoint.Types.GetAppResponse) => void): Request<Pinpoint.Types.GetAppResponse, AWSError>;
  /**
   *  Retrieves (queries) pre-aggregated data for a standard metric that applies to an application.
   */
  getApplicationDateRangeKpi(params: Pinpoint.Types.GetApplicationDateRangeKpiRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetApplicationDateRangeKpiResponse) => void): Request<Pinpoint.Types.GetApplicationDateRangeKpiResponse, AWSError>;
  /**
   *  Retrieves (queries) pre-aggregated data for a standard metric that applies to an application.
   */
  getApplicationDateRangeKpi(callback?: (err: AWSError, data: Pinpoint.Types.GetApplicationDateRangeKpiResponse) => void): Request<Pinpoint.Types.GetApplicationDateRangeKpiResponse, AWSError>;
  /**
   * Retrieves information about the settings for an application.
   */
  getApplicationSettings(params: Pinpoint.Types.GetApplicationSettingsRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetApplicationSettingsResponse) => void): Request<Pinpoint.Types.GetApplicationSettingsResponse, AWSError>;
  /**
   * Retrieves information about the settings for an application.
   */
  getApplicationSettings(callback?: (err: AWSError, data: Pinpoint.Types.GetApplicationSettingsResponse) => void): Request<Pinpoint.Types.GetApplicationSettingsResponse, AWSError>;
  /**
   * Retrieves information about all of your applications.
   */
  getApps(params: Pinpoint.Types.GetAppsRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetAppsResponse) => void): Request<Pinpoint.Types.GetAppsResponse, AWSError>;
  /**
   * Retrieves information about all of your applications.
   */
  getApps(callback?: (err: AWSError, data: Pinpoint.Types.GetAppsResponse) => void): Request<Pinpoint.Types.GetAppsResponse, AWSError>;
  /**
   * Retrieves information about the status and settings of the Baidu Cloud Push channel for an application.
   */
  getBaiduChannel(params: Pinpoint.Types.GetBaiduChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetBaiduChannelResponse) => void): Request<Pinpoint.Types.GetBaiduChannelResponse, AWSError>;
  /**
   * Retrieves information about the status and settings of the Baidu Cloud Push channel for an application.
   */
  getBaiduChannel(callback?: (err: AWSError, data: Pinpoint.Types.GetBaiduChannelResponse) => void): Request<Pinpoint.Types.GetBaiduChannelResponse, AWSError>;
  /**
   * Retrieves information about the status, configuration, and other settings for a campaign.
   */
  getCampaign(params: Pinpoint.Types.GetCampaignRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetCampaignResponse) => void): Request<Pinpoint.Types.GetCampaignResponse, AWSError>;
  /**
   * Retrieves information about the status, configuration, and other settings for a campaign.
   */
  getCampaign(callback?: (err: AWSError, data: Pinpoint.Types.GetCampaignResponse) => void): Request<Pinpoint.Types.GetCampaignResponse, AWSError>;
  /**
   * Retrieves information about the activity performed by a campaign.
   */
  getCampaignActivities(params: Pinpoint.Types.GetCampaignActivitiesRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetCampaignActivitiesResponse) => void): Request<Pinpoint.Types.GetCampaignActivitiesResponse, AWSError>;
  /**
   * Retrieves information about the activity performed by a campaign.
   */
  getCampaignActivities(callback?: (err: AWSError, data: Pinpoint.Types.GetCampaignActivitiesResponse) => void): Request<Pinpoint.Types.GetCampaignActivitiesResponse, AWSError>;
  /**
   *  Retrieves (queries) pre-aggregated data for a standard metric that applies to a campaign.
   */
  getCampaignDateRangeKpi(params: Pinpoint.Types.GetCampaignDateRangeKpiRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetCampaignDateRangeKpiResponse) => void): Request<Pinpoint.Types.GetCampaignDateRangeKpiResponse, AWSError>;
  /**
   *  Retrieves (queries) pre-aggregated data for a standard metric that applies to a campaign.
   */
  getCampaignDateRangeKpi(callback?: (err: AWSError, data: Pinpoint.Types.GetCampaignDateRangeKpiResponse) => void): Request<Pinpoint.Types.GetCampaignDateRangeKpiResponse, AWSError>;
  /**
   * Retrieves information about the status, configuration, and other settings for a specific version of a campaign.
   */
  getCampaignVersion(params: Pinpoint.Types.GetCampaignVersionRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetCampaignVersionResponse) => void): Request<Pinpoint.Types.GetCampaignVersionResponse, AWSError>;
  /**
   * Retrieves information about the status, configuration, and other settings for a specific version of a campaign.
   */
  getCampaignVersion(callback?: (err: AWSError, data: Pinpoint.Types.GetCampaignVersionResponse) => void): Request<Pinpoint.Types.GetCampaignVersionResponse, AWSError>;
  /**
   * Retrieves information about the status, configuration, and other settings for all versions of a specific campaign.
   */
  getCampaignVersions(params: Pinpoint.Types.GetCampaignVersionsRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetCampaignVersionsResponse) => void): Request<Pinpoint.Types.GetCampaignVersionsResponse, AWSError>;
  /**
   * Retrieves information about the status, configuration, and other settings for all versions of a specific campaign.
   */
  getCampaignVersions(callback?: (err: AWSError, data: Pinpoint.Types.GetCampaignVersionsResponse) => void): Request<Pinpoint.Types.GetCampaignVersionsResponse, AWSError>;
  /**
   * Retrieves information about the status, configuration, and other settings for all the campaigns that are associated with an application.
   */
  getCampaigns(params: Pinpoint.Types.GetCampaignsRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetCampaignsResponse) => void): Request<Pinpoint.Types.GetCampaignsResponse, AWSError>;
  /**
   * Retrieves information about the status, configuration, and other settings for all the campaigns that are associated with an application.
   */
  getCampaigns(callback?: (err: AWSError, data: Pinpoint.Types.GetCampaignsResponse) => void): Request<Pinpoint.Types.GetCampaignsResponse, AWSError>;
  /**
   * Retrieves information about the history and status of each channel for an application.
   */
  getChannels(params: Pinpoint.Types.GetChannelsRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetChannelsResponse) => void): Request<Pinpoint.Types.GetChannelsResponse, AWSError>;
  /**
   * Retrieves information about the history and status of each channel for an application.
   */
  getChannels(callback?: (err: AWSError, data: Pinpoint.Types.GetChannelsResponse) => void): Request<Pinpoint.Types.GetChannelsResponse, AWSError>;
  /**
   * Retrieves information about the status and settings of the email channel for an application.
   */
  getEmailChannel(params: Pinpoint.Types.GetEmailChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetEmailChannelResponse) => void): Request<Pinpoint.Types.GetEmailChannelResponse, AWSError>;
  /**
   * Retrieves information about the status and settings of the email channel for an application.
   */
  getEmailChannel(callback?: (err: AWSError, data: Pinpoint.Types.GetEmailChannelResponse) => void): Request<Pinpoint.Types.GetEmailChannelResponse, AWSError>;
  /**
   * Retrieves information about the settings and attributes of a specific endpoint for an application.
   */
  getEndpoint(params: Pinpoint.Types.GetEndpointRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetEndpointResponse) => void): Request<Pinpoint.Types.GetEndpointResponse, AWSError>;
  /**
   * Retrieves information about the settings and attributes of a specific endpoint for an application.
   */
  getEndpoint(callback?: (err: AWSError, data: Pinpoint.Types.GetEndpointResponse) => void): Request<Pinpoint.Types.GetEndpointResponse, AWSError>;
  /**
   * Retrieves information about the event stream settings for an application.
   */
  getEventStream(params: Pinpoint.Types.GetEventStreamRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetEventStreamResponse) => void): Request<Pinpoint.Types.GetEventStreamResponse, AWSError>;
  /**
   * Retrieves information about the event stream settings for an application.
   */
  getEventStream(callback?: (err: AWSError, data: Pinpoint.Types.GetEventStreamResponse) => void): Request<Pinpoint.Types.GetEventStreamResponse, AWSError>;
  /**
   * Retrieves information about the status and settings of a specific export job for an application.
   */
  getExportJob(params: Pinpoint.Types.GetExportJobRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetExportJobResponse) => void): Request<Pinpoint.Types.GetExportJobResponse, AWSError>;
  /**
   * Retrieves information about the status and settings of a specific export job for an application.
   */
  getExportJob(callback?: (err: AWSError, data: Pinpoint.Types.GetExportJobResponse) => void): Request<Pinpoint.Types.GetExportJobResponse, AWSError>;
  /**
   * Retrieves information about the status and settings of all the export jobs for an application.
   */
  getExportJobs(params: Pinpoint.Types.GetExportJobsRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetExportJobsResponse) => void): Request<Pinpoint.Types.GetExportJobsResponse, AWSError>;
  /**
   * Retrieves information about the status and settings of all the export jobs for an application.
   */
  getExportJobs(callback?: (err: AWSError, data: Pinpoint.Types.GetExportJobsResponse) => void): Request<Pinpoint.Types.GetExportJobsResponse, AWSError>;
  /**
   * Retrieves information about the status and settings of the GCM channel for an application.
   */
  getGcmChannel(params: Pinpoint.Types.GetGcmChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetGcmChannelResponse) => void): Request<Pinpoint.Types.GetGcmChannelResponse, AWSError>;
  /**
   * Retrieves information about the status and settings of the GCM channel for an application.
   */
  getGcmChannel(callback?: (err: AWSError, data: Pinpoint.Types.GetGcmChannelResponse) => void): Request<Pinpoint.Types.GetGcmChannelResponse, AWSError>;
  /**
   * Retrieves information about the status and settings of a specific import job for an application.
   */
  getImportJob(params: Pinpoint.Types.GetImportJobRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetImportJobResponse) => void): Request<Pinpoint.Types.GetImportJobResponse, AWSError>;
  /**
   * Retrieves information about the status and settings of a specific import job for an application.
   */
  getImportJob(callback?: (err: AWSError, data: Pinpoint.Types.GetImportJobResponse) => void): Request<Pinpoint.Types.GetImportJobResponse, AWSError>;
  /**
   * Retrieves information about the status and settings of all the import jobs for an application.
   */
  getImportJobs(params: Pinpoint.Types.GetImportJobsRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetImportJobsResponse) => void): Request<Pinpoint.Types.GetImportJobsResponse, AWSError>;
  /**
   * Retrieves information about the status and settings of all the import jobs for an application.
   */
  getImportJobs(callback?: (err: AWSError, data: Pinpoint.Types.GetImportJobsResponse) => void): Request<Pinpoint.Types.GetImportJobsResponse, AWSError>;
  /**
   * Retrieves information about the configuration, dimension, and other settings for a specific segment that's associated with an application.
   */
  getSegment(params: Pinpoint.Types.GetSegmentRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetSegmentResponse) => void): Request<Pinpoint.Types.GetSegmentResponse, AWSError>;
  /**
   * Retrieves information about the configuration, dimension, and other settings for a specific segment that's associated with an application.
   */
  getSegment(callback?: (err: AWSError, data: Pinpoint.Types.GetSegmentResponse) => void): Request<Pinpoint.Types.GetSegmentResponse, AWSError>;
  /**
   * Retrieves information about the status and settings of the export jobs for a segment.
   */
  getSegmentExportJobs(params: Pinpoint.Types.GetSegmentExportJobsRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetSegmentExportJobsResponse) => void): Request<Pinpoint.Types.GetSegmentExportJobsResponse, AWSError>;
  /**
   * Retrieves information about the status and settings of the export jobs for a segment.
   */
  getSegmentExportJobs(callback?: (err: AWSError, data: Pinpoint.Types.GetSegmentExportJobsResponse) => void): Request<Pinpoint.Types.GetSegmentExportJobsResponse, AWSError>;
  /**
   * Retrieves information about the status and settings of the import jobs for a segment.
   */
  getSegmentImportJobs(params: Pinpoint.Types.GetSegmentImportJobsRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetSegmentImportJobsResponse) => void): Request<Pinpoint.Types.GetSegmentImportJobsResponse, AWSError>;
  /**
   * Retrieves information about the status and settings of the import jobs for a segment.
   */
  getSegmentImportJobs(callback?: (err: AWSError, data: Pinpoint.Types.GetSegmentImportJobsResponse) => void): Request<Pinpoint.Types.GetSegmentImportJobsResponse, AWSError>;
  /**
   * Retrieves information about the configuration, dimension, and other settings for a specific version of a segment that's associated with an application.
   */
  getSegmentVersion(params: Pinpoint.Types.GetSegmentVersionRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetSegmentVersionResponse) => void): Request<Pinpoint.Types.GetSegmentVersionResponse, AWSError>;
  /**
   * Retrieves information about the configuration, dimension, and other settings for a specific version of a segment that's associated with an application.
   */
  getSegmentVersion(callback?: (err: AWSError, data: Pinpoint.Types.GetSegmentVersionResponse) => void): Request<Pinpoint.Types.GetSegmentVersionResponse, AWSError>;
  /**
   * Retrieves information about the configuration, dimension, and other settings for all versions of a specific segment that's associated with an application.
   */
  getSegmentVersions(params: Pinpoint.Types.GetSegmentVersionsRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetSegmentVersionsResponse) => void): Request<Pinpoint.Types.GetSegmentVersionsResponse, AWSError>;
  /**
   * Retrieves information about the configuration, dimension, and other settings for all versions of a specific segment that's associated with an application.
   */
  getSegmentVersions(callback?: (err: AWSError, data: Pinpoint.Types.GetSegmentVersionsResponse) => void): Request<Pinpoint.Types.GetSegmentVersionsResponse, AWSError>;
  /**
   * Retrieves information about the configuration, dimension, and other settings for all the segments that are associated with an application.
   */
  getSegments(params: Pinpoint.Types.GetSegmentsRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetSegmentsResponse) => void): Request<Pinpoint.Types.GetSegmentsResponse, AWSError>;
  /**
   * Retrieves information about the configuration, dimension, and other settings for all the segments that are associated with an application.
   */
  getSegments(callback?: (err: AWSError, data: Pinpoint.Types.GetSegmentsResponse) => void): Request<Pinpoint.Types.GetSegmentsResponse, AWSError>;
  /**
   * Retrieves information about the status and settings of the SMS channel for an application.
   */
  getSmsChannel(params: Pinpoint.Types.GetSmsChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetSmsChannelResponse) => void): Request<Pinpoint.Types.GetSmsChannelResponse, AWSError>;
  /**
   * Retrieves information about the status and settings of the SMS channel for an application.
   */
  getSmsChannel(callback?: (err: AWSError, data: Pinpoint.Types.GetSmsChannelResponse) => void): Request<Pinpoint.Types.GetSmsChannelResponse, AWSError>;
  /**
   * Retrieves information about all the endpoints that are associated with a specific user ID.
   */
  getUserEndpoints(params: Pinpoint.Types.GetUserEndpointsRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetUserEndpointsResponse) => void): Request<Pinpoint.Types.GetUserEndpointsResponse, AWSError>;
  /**
   * Retrieves information about all the endpoints that are associated with a specific user ID.
   */
  getUserEndpoints(callback?: (err: AWSError, data: Pinpoint.Types.GetUserEndpointsResponse) => void): Request<Pinpoint.Types.GetUserEndpointsResponse, AWSError>;
  /**
   * Retrieves information about the status and settings of the voice channel for an application.
   */
  getVoiceChannel(params: Pinpoint.Types.GetVoiceChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetVoiceChannelResponse) => void): Request<Pinpoint.Types.GetVoiceChannelResponse, AWSError>;
  /**
   * Retrieves information about the status and settings of the voice channel for an application.
   */
  getVoiceChannel(callback?: (err: AWSError, data: Pinpoint.Types.GetVoiceChannelResponse) => void): Request<Pinpoint.Types.GetVoiceChannelResponse, AWSError>;
  /**
   * Retrieves all the tags (keys and values) that are associated with an application, campaign, or segment.
   */
  listTagsForResource(params: Pinpoint.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: Pinpoint.Types.ListTagsForResourceResponse) => void): Request<Pinpoint.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Retrieves all the tags (keys and values) that are associated with an application, campaign, or segment.
   */
  listTagsForResource(callback?: (err: AWSError, data: Pinpoint.Types.ListTagsForResourceResponse) => void): Request<Pinpoint.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Retrieves information about a phone number.
   */
  phoneNumberValidate(params: Pinpoint.Types.PhoneNumberValidateRequest, callback?: (err: AWSError, data: Pinpoint.Types.PhoneNumberValidateResponse) => void): Request<Pinpoint.Types.PhoneNumberValidateResponse, AWSError>;
  /**
   * Retrieves information about a phone number.
   */
  phoneNumberValidate(callback?: (err: AWSError, data: Pinpoint.Types.PhoneNumberValidateResponse) => void): Request<Pinpoint.Types.PhoneNumberValidateResponse, AWSError>;
  /**
   * Creates a new event stream for an application or updates the settings of an existing event stream for an application.
   */
  putEventStream(params: Pinpoint.Types.PutEventStreamRequest, callback?: (err: AWSError, data: Pinpoint.Types.PutEventStreamResponse) => void): Request<Pinpoint.Types.PutEventStreamResponse, AWSError>;
  /**
   * Creates a new event stream for an application or updates the settings of an existing event stream for an application.
   */
  putEventStream(callback?: (err: AWSError, data: Pinpoint.Types.PutEventStreamResponse) => void): Request<Pinpoint.Types.PutEventStreamResponse, AWSError>;
  /**
   * Creates a new event to record for endpoints, or creates or updates endpoint data that existing events are associated with.
   */
  putEvents(params: Pinpoint.Types.PutEventsRequest, callback?: (err: AWSError, data: Pinpoint.Types.PutEventsResponse) => void): Request<Pinpoint.Types.PutEventsResponse, AWSError>;
  /**
   * Creates a new event to record for endpoints, or creates or updates endpoint data that existing events are associated with.
   */
  putEvents(callback?: (err: AWSError, data: Pinpoint.Types.PutEventsResponse) => void): Request<Pinpoint.Types.PutEventsResponse, AWSError>;
  /**
   * Removes one or more attributes, of the same attribute type, from all the endpoints that are associated with an application.
   */
  removeAttributes(params: Pinpoint.Types.RemoveAttributesRequest, callback?: (err: AWSError, data: Pinpoint.Types.RemoveAttributesResponse) => void): Request<Pinpoint.Types.RemoveAttributesResponse, AWSError>;
  /**
   * Removes one or more attributes, of the same attribute type, from all the endpoints that are associated with an application.
   */
  removeAttributes(callback?: (err: AWSError, data: Pinpoint.Types.RemoveAttributesResponse) => void): Request<Pinpoint.Types.RemoveAttributesResponse, AWSError>;
  /**
   * Creates and sends a direct message.
   */
  sendMessages(params: Pinpoint.Types.SendMessagesRequest, callback?: (err: AWSError, data: Pinpoint.Types.SendMessagesResponse) => void): Request<Pinpoint.Types.SendMessagesResponse, AWSError>;
  /**
   * Creates and sends a direct message.
   */
  sendMessages(callback?: (err: AWSError, data: Pinpoint.Types.SendMessagesResponse) => void): Request<Pinpoint.Types.SendMessagesResponse, AWSError>;
  /**
   * Creates and sends a message to a list of users.
   */
  sendUsersMessages(params: Pinpoint.Types.SendUsersMessagesRequest, callback?: (err: AWSError, data: Pinpoint.Types.SendUsersMessagesResponse) => void): Request<Pinpoint.Types.SendUsersMessagesResponse, AWSError>;
  /**
   * Creates and sends a message to a list of users.
   */
  sendUsersMessages(callback?: (err: AWSError, data: Pinpoint.Types.SendUsersMessagesResponse) => void): Request<Pinpoint.Types.SendUsersMessagesResponse, AWSError>;
  /**
   * Adds one or more tags (keys and values) to an application, campaign, or segment.
   */
  tagResource(params: Pinpoint.Types.TagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds one or more tags (keys and values) to an application, campaign, or segment.
   */
  tagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes one or more tags (keys and values) from an application, campaign, or segment.
   */
  untagResource(params: Pinpoint.Types.UntagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes one or more tags (keys and values) from an application, campaign, or segment.
   */
  untagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the ADM channel settings for an application.
   */
  updateAdmChannel(params: Pinpoint.Types.UpdateAdmChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.UpdateAdmChannelResponse) => void): Request<Pinpoint.Types.UpdateAdmChannelResponse, AWSError>;
  /**
   * Updates the ADM channel settings for an application.
   */
  updateAdmChannel(callback?: (err: AWSError, data: Pinpoint.Types.UpdateAdmChannelResponse) => void): Request<Pinpoint.Types.UpdateAdmChannelResponse, AWSError>;
  /**
   * Updates the APNs channel settings for an application.
   */
  updateApnsChannel(params: Pinpoint.Types.UpdateApnsChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.UpdateApnsChannelResponse) => void): Request<Pinpoint.Types.UpdateApnsChannelResponse, AWSError>;
  /**
   * Updates the APNs channel settings for an application.
   */
  updateApnsChannel(callback?: (err: AWSError, data: Pinpoint.Types.UpdateApnsChannelResponse) => void): Request<Pinpoint.Types.UpdateApnsChannelResponse, AWSError>;
  /**
   * Updates the APNs sandbox channel settings for an application.
   */
  updateApnsSandboxChannel(params: Pinpoint.Types.UpdateApnsSandboxChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.UpdateApnsSandboxChannelResponse) => void): Request<Pinpoint.Types.UpdateApnsSandboxChannelResponse, AWSError>;
  /**
   * Updates the APNs sandbox channel settings for an application.
   */
  updateApnsSandboxChannel(callback?: (err: AWSError, data: Pinpoint.Types.UpdateApnsSandboxChannelResponse) => void): Request<Pinpoint.Types.UpdateApnsSandboxChannelResponse, AWSError>;
  /**
   * Updates the APNs VoIP channel settings for an application.
   */
  updateApnsVoipChannel(params: Pinpoint.Types.UpdateApnsVoipChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.UpdateApnsVoipChannelResponse) => void): Request<Pinpoint.Types.UpdateApnsVoipChannelResponse, AWSError>;
  /**
   * Updates the APNs VoIP channel settings for an application.
   */
  updateApnsVoipChannel(callback?: (err: AWSError, data: Pinpoint.Types.UpdateApnsVoipChannelResponse) => void): Request<Pinpoint.Types.UpdateApnsVoipChannelResponse, AWSError>;
  /**
   * Updates the settings for the APNs VoIP sandbox channel for an application.
   */
  updateApnsVoipSandboxChannel(params: Pinpoint.Types.UpdateApnsVoipSandboxChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.UpdateApnsVoipSandboxChannelResponse) => void): Request<Pinpoint.Types.UpdateApnsVoipSandboxChannelResponse, AWSError>;
  /**
   * Updates the settings for the APNs VoIP sandbox channel for an application.
   */
  updateApnsVoipSandboxChannel(callback?: (err: AWSError, data: Pinpoint.Types.UpdateApnsVoipSandboxChannelResponse) => void): Request<Pinpoint.Types.UpdateApnsVoipSandboxChannelResponse, AWSError>;
  /**
   * Updates the settings for an application.
   */
  updateApplicationSettings(params: Pinpoint.Types.UpdateApplicationSettingsRequest, callback?: (err: AWSError, data: Pinpoint.Types.UpdateApplicationSettingsResponse) => void): Request<Pinpoint.Types.UpdateApplicationSettingsResponse, AWSError>;
  /**
   * Updates the settings for an application.
   */
  updateApplicationSettings(callback?: (err: AWSError, data: Pinpoint.Types.UpdateApplicationSettingsResponse) => void): Request<Pinpoint.Types.UpdateApplicationSettingsResponse, AWSError>;
  /**
   * Updates the settings of the Baidu channel for an application.
   */
  updateBaiduChannel(params: Pinpoint.Types.UpdateBaiduChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.UpdateBaiduChannelResponse) => void): Request<Pinpoint.Types.UpdateBaiduChannelResponse, AWSError>;
  /**
   * Updates the settings of the Baidu channel for an application.
   */
  updateBaiduChannel(callback?: (err: AWSError, data: Pinpoint.Types.UpdateBaiduChannelResponse) => void): Request<Pinpoint.Types.UpdateBaiduChannelResponse, AWSError>;
  /**
   * Updates the settings for a campaign.
   */
  updateCampaign(params: Pinpoint.Types.UpdateCampaignRequest, callback?: (err: AWSError, data: Pinpoint.Types.UpdateCampaignResponse) => void): Request<Pinpoint.Types.UpdateCampaignResponse, AWSError>;
  /**
   * Updates the settings for a campaign.
   */
  updateCampaign(callback?: (err: AWSError, data: Pinpoint.Types.UpdateCampaignResponse) => void): Request<Pinpoint.Types.UpdateCampaignResponse, AWSError>;
  /**
   * Updates the status and settings of the email channel for an application.
   */
  updateEmailChannel(params: Pinpoint.Types.UpdateEmailChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.UpdateEmailChannelResponse) => void): Request<Pinpoint.Types.UpdateEmailChannelResponse, AWSError>;
  /**
   * Updates the status and settings of the email channel for an application.
   */
  updateEmailChannel(callback?: (err: AWSError, data: Pinpoint.Types.UpdateEmailChannelResponse) => void): Request<Pinpoint.Types.UpdateEmailChannelResponse, AWSError>;
  /**
   * Creates a new endpoint for an application or updates the settings and attributes of an existing endpoint for an application. You can also use this operation to define custom attributes (Attributes, Metrics, and UserAttributes properties) for an endpoint.
   */
  updateEndpoint(params: Pinpoint.Types.UpdateEndpointRequest, callback?: (err: AWSError, data: Pinpoint.Types.UpdateEndpointResponse) => void): Request<Pinpoint.Types.UpdateEndpointResponse, AWSError>;
  /**
   * Creates a new endpoint for an application or updates the settings and attributes of an existing endpoint for an application. You can also use this operation to define custom attributes (Attributes, Metrics, and UserAttributes properties) for an endpoint.
   */
  updateEndpoint(callback?: (err: AWSError, data: Pinpoint.Types.UpdateEndpointResponse) => void): Request<Pinpoint.Types.UpdateEndpointResponse, AWSError>;
  /**
   *  Creates a new batch of endpoints for an application or updates the settings and attributes of a batch of existing endpoints for an application. You can also use this operation to define custom attributes (Attributes, Metrics, and UserAttributes properties) for a batch of endpoints.
   */
  updateEndpointsBatch(params: Pinpoint.Types.UpdateEndpointsBatchRequest, callback?: (err: AWSError, data: Pinpoint.Types.UpdateEndpointsBatchResponse) => void): Request<Pinpoint.Types.UpdateEndpointsBatchResponse, AWSError>;
  /**
   *  Creates a new batch of endpoints for an application or updates the settings and attributes of a batch of existing endpoints for an application. You can also use this operation to define custom attributes (Attributes, Metrics, and UserAttributes properties) for a batch of endpoints.
   */
  updateEndpointsBatch(callback?: (err: AWSError, data: Pinpoint.Types.UpdateEndpointsBatchResponse) => void): Request<Pinpoint.Types.UpdateEndpointsBatchResponse, AWSError>;
  /**
   * Updates the status and settings of the GCM channel for an application.
   */
  updateGcmChannel(params: Pinpoint.Types.UpdateGcmChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.UpdateGcmChannelResponse) => void): Request<Pinpoint.Types.UpdateGcmChannelResponse, AWSError>;
  /**
   * Updates the status and settings of the GCM channel for an application.
   */
  updateGcmChannel(callback?: (err: AWSError, data: Pinpoint.Types.UpdateGcmChannelResponse) => void): Request<Pinpoint.Types.UpdateGcmChannelResponse, AWSError>;
  /**
   * Creates a new segment for an application or updates the configuration, dimension, and other settings for an existing segment that's associated with an application.
   */
  updateSegment(params: Pinpoint.Types.UpdateSegmentRequest, callback?: (err: AWSError, data: Pinpoint.Types.UpdateSegmentResponse) => void): Request<Pinpoint.Types.UpdateSegmentResponse, AWSError>;
  /**
   * Creates a new segment for an application or updates the configuration, dimension, and other settings for an existing segment that's associated with an application.
   */
  updateSegment(callback?: (err: AWSError, data: Pinpoint.Types.UpdateSegmentResponse) => void): Request<Pinpoint.Types.UpdateSegmentResponse, AWSError>;
  /**
   * Updates the status and settings of the SMS channel for an application.
   */
  updateSmsChannel(params: Pinpoint.Types.UpdateSmsChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.UpdateSmsChannelResponse) => void): Request<Pinpoint.Types.UpdateSmsChannelResponse, AWSError>;
  /**
   * Updates the status and settings of the SMS channel for an application.
   */
  updateSmsChannel(callback?: (err: AWSError, data: Pinpoint.Types.UpdateSmsChannelResponse) => void): Request<Pinpoint.Types.UpdateSmsChannelResponse, AWSError>;
  /**
   * Updates the status and settings of the voice channel for an application.
   */
  updateVoiceChannel(params: Pinpoint.Types.UpdateVoiceChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.UpdateVoiceChannelResponse) => void): Request<Pinpoint.Types.UpdateVoiceChannelResponse, AWSError>;
  /**
   * Updates the status and settings of the voice channel for an application.
   */
  updateVoiceChannel(callback?: (err: AWSError, data: Pinpoint.Types.UpdateVoiceChannelResponse) => void): Request<Pinpoint.Types.UpdateVoiceChannelResponse, AWSError>;
}
declare namespace Pinpoint {
  export interface ADMChannelRequest {
    /**
     * The Client ID that you received from Amazon to send messages by using ADM.
     */
    ClientId: __string;
    /**
     * The Client Secret that you received from Amazon to send messages by using ADM.
     */
    ClientSecret: __string;
    /**
     * Specifies whether to enable the ADM channel for the application.
     */
    Enabled?: __boolean;
  }
  export interface ADMChannelResponse {
    /**
     * The unique identifier for the application that the ADM channel applies to.
     */
    ApplicationId?: __string;
    /**
     * The date and time when the ADM channel was enabled.
     */
    CreationDate?: __string;
    /**
     * Specifies whether the ADM channel is enabled for the application.
     */
    Enabled?: __boolean;
    /**
     * (Not used) This property is retained only for backward compatibility.
     */
    HasCredential?: __boolean;
    /**
     * (Deprecated) An identifier for the ADM channel. This property is retained only for backward compatibility.
     */
    Id?: __string;
    /**
     * Specifies whether the ADM channel is archived.
     */
    IsArchived?: __boolean;
    /**
     * The user who last modified the ADM channel.
     */
    LastModifiedBy?: __string;
    /**
     * The date and time when the ADM channel was last modified.
     */
    LastModifiedDate?: __string;
    /**
     * The type of messaging or notification platform for the channel. For the ADM channel, this value is ADM.
     */
    Platform: __string;
    /**
     * The current version of the ADM channel.
     */
    Version?: __integer;
  }
  export interface ADMMessage {
    /**
     * The action to occur if the recipient taps the push notification. Valid values are: OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action. DEEP_LINK - Your app opens and displays a designated user interface in the app. This action uses the deep-linking features of the Android platform. URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.
     */
    Action?: Action;
    /**
     * The body of the notification message.
     */
    Body?: __string;
    /**
     * An arbitrary string that indicates that multiple messages are logically the same and that Amazon Device Messaging (ADM) can drop previously enqueued messages in favor of this message.
     */
    ConsolidationKey?: __string;
    /**
     * The JSON data payload to use for the push notification, if the notification is a silent push notification. This payload is added to the data.pinpoint.jsonBody object of the notification.
     */
    Data?: MapOf__string;
    /**
     * The amount of time, in seconds, that ADM should store the message if the recipient's device is offline. Amazon Pinpoint specifies this value in the expiresAfter parameter when it sends the notification message to ADM.
     */
    ExpiresAfter?: __string;
    /**
     * The icon image name of the asset saved in your app.
     */
    IconReference?: __string;
    /**
     * The URL of the large icon image to display in the content view of the push notification.
     */
    ImageIconUrl?: __string;
    /**
     * The URL of an image to display in the push notification.
     */
    ImageUrl?: __string;
    /**
     * The base64-encoded, MD5 checksum of the value specified by the Data property. ADM uses the MD5 value to verify the integrity of the data.
     */
    MD5?: __string;
    /**
     * The raw, JSON-formatted string to use as the payload for the notification message. This value overrides the message.
     */
    RawContent?: __string;
    /**
     * Specifies whether the notification is a silent push notification, which is a push notification that doesn't display on a recipient's device. Silent push notifications can be used for cases such as updating an app's configuration or supporting phone home functionality.
     */
    SilentPush?: __boolean;
    /**
     * The URL of the small icon image to display in the status bar and the content view of the push notification.
     */
    SmallImageIconUrl?: __string;
    /**
     * The sound to play when the recipient receives the push notification. You can use the default stream or specify the file name of a sound resource that's bundled in your app. On an Android platform, the sound file must reside in /res/raw/.
     */
    Sound?: __string;
    /**
     * The default message variables to use in the notification message. You can override the default variables with individual address variables.
     */
    Substitutions?: MapOfListOf__string;
    /**
     * The title to display above the notification message on the recipient's device.
     */
    Title?: __string;
    /**
     * The URL to open in the recipient's default mobile browser, if a recipient taps the push notification and the value of the Action property is URL.
     */
    Url?: __string;
  }
  export interface APNSChannelRequest {
    /**
     * The bundle identifier that's assigned to your iOS app. This identifier is used for APNs tokens.
     */
    BundleId?: __string;
    /**
     * The APNs client certificate that you received from Apple, if you want Amazon Pinpoint to communicate with APNs by using an APNs certificate.
     */
    Certificate?: __string;
    /**
     * The default authentication method that you want Amazon Pinpoint to use when authenticating with APNs, key or certificate.
     */
    DefaultAuthenticationMethod?: __string;
    /**
     * Specifies whether to enable the APNs channel for the application.
     */
    Enabled?: __boolean;
    /**
     * The private key for the APNs client certificate that you want Amazon Pinpoint to use to communicate with APNs.
     */
    PrivateKey?: __string;
    /**
     * The identifier that's assigned to your Apple developer account team. This identifier is used for APNs tokens.
     */
    TeamId?: __string;
    /**
     * The authentication key to use for APNs tokens.
     */
    TokenKey?: __string;
    /**
     * The key identifier that's assigned to your APNs signing key, if you want Amazon Pinpoint to communicate with APNs by using APNs tokens.
     */
    TokenKeyId?: __string;
  }
  export interface APNSChannelResponse {
    /**
     * The unique identifier for the application that the APNs channel applies to.
     */
    ApplicationId?: __string;
    /**
     * The date and time when the APNs channel was enabled.
     */
    CreationDate?: __string;
    /**
     * The default authentication method that Amazon Pinpoint uses to authenticate with APNs for this channel, key or certificate.
     */
    DefaultAuthenticationMethod?: __string;
    /**
     * Specifies whether the APNs channel is enabled for the application.
     */
    Enabled?: __boolean;
    /**
     * (Not used) This property is retained only for backward compatibility.
     */
    HasCredential?: __boolean;
    /**
     * Specifies whether the APNs channel is configured to communicate with APNs by using APNs tokens. To provide an authentication key for APNs tokens, set the TokenKey property of the channel.
     */
    HasTokenKey?: __boolean;
    /**
     * (Deprecated) An identifier for the APNs channel. This property is retained only for backward compatibility.
     */
    Id?: __string;
    /**
     * Specifies whether the APNs channel is archived.
     */
    IsArchived?: __boolean;
    /**
     * The user who last modified the APNs channel.
     */
    LastModifiedBy?: __string;
    /**
     * The date and time when the APNs channel was last modified.
     */
    LastModifiedDate?: __string;
    /**
     *  The type of messaging or notification platform for the channel. For the APNs channel, this value is APNS.
     */
    Platform: __string;
    /**
     * The current version of the APNs channel.
     */
    Version?: __integer;
  }
  export interface APNSMessage {
    /**
     * The action to occur if the recipient taps the push notification. Valid values are: OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action. DEEP_LINK - Your app opens and displays a designated user interface in the app. This setting uses the deep-linking features of the iOS platform. URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.
     */
    Action?: Action;
    /**
     * The key that indicates whether and how to modify the badge of your app's icon when the recipient receives the push notification. If this key isn't included in the dictionary, the badge doesn't change. To remove the badge, set this value to 0.
     */
    Badge?: __integer;
    /**
     * The body of the notification message.
     */
    Body?: __string;
    /**
     * The key that indicates the notification type for the push notification. This key is a value that's defined by the identifier property of one of your app's registered categories.
     */
    Category?: __string;
    /**
     * An arbitrary identifier that, if assigned to multiple messages, APNs uses to coalesce the messages into a single push notification instead of delivering each message individually. This value can't exceed 64 bytes. Amazon Pinpoint specifies this value in the apns-collapse-id request header when it sends the notification message to APNs.
     */
    CollapseId?: __string;
    /**
     * The JSON payload to use for a silent push notification. This payload is added to the data.pinpoint.jsonBody object of the notification.
     */
    Data?: MapOf__string;
    /**
     * The URL of an image or video to display in the push notification.
     */
    MediaUrl?: __string;
    /**
     * The authentication method that you want Amazon Pinpoint to use when authenticating with Apple Push Notification service (APNs), CERTIFICATE or TOKEN.
     */
    PreferredAuthenticationMethod?: __string;
    /**
     * para>5 - Low priority, the notification might be delayed, delivered as part of a group, or throttled./listitem> 10 - High priority, the notification is sent immediately. This is the default value. A high priority notification should trigger an alert, play a sound, or badge your app's icon on the recipient's device./para> Amazon Pinpoint specifies this value in the apns-priority request header when it sends the notification message to APNs. The equivalent values for Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), are normal, for 5, and high, for 10. If you specify an FCM value for this property, Amazon Pinpoint accepts and converts the value to the corresponding APNs value.
     */
    Priority?: __string;
    /**
     * The raw, JSON-formatted string to use as the payload for the notification message. This value overrides the message.
     */
    RawContent?: __string;
    /**
     * Specifies whether the notification is a silent push notification, which is a push notification that doesn't display on a recipient's device. Silent push notifications can be used for cases such as updating an app's configuration, displaying messages in an in-app message center, or supporting phone home functionality.
     */
    SilentPush?: __boolean;
    /**
     * The key for the sound to play when the recipient receives the push notification. The value of this key is the name of a sound file in your app's main bundle or the Library/Sounds folder in your app's data container. If the sound file can't be found or you specify default for the value, the system plays the default alert sound.
     */
    Sound?: __string;
    /**
     * The default message variables to use in the notification message. You can override these default variables with individual address variables.
     */
    Substitutions?: MapOfListOf__string;
    /**
     * The key that represents your app-specific identifier for grouping notifications. If you provide a Notification Content app extension, you can use this value to group your notifications together.
     */
    ThreadId?: __string;
    /**
     * The amount of time, in seconds, that APNs should store and attempt to deliver the push notification, if the service is unable to deliver the notification the first time. If this value is 0, APNs treats the notification as if it expires immediately and the service doesn't store or try to deliver the notification again. Amazon Pinpoint specifies this value in the apns-expiration request header when it sends the notification message to APNs.
     */
    TimeToLive?: __integer;
    /**
     * The title to display above the notification message on the recipient's device.
     */
    Title?: __string;
    /**
     * The URL to open in the recipient's default mobile browser, if a recipient taps the push notification and the value of the Action property is URL.
     */
    Url?: __string;
  }
  export interface APNSSandboxChannelRequest {
    /**
     * The bundle identifier that's assigned to your iOS app. This identifier is used for APNs tokens.
     */
    BundleId?: __string;
    /**
     * The APNs client certificate that you received from Apple, if you want Amazon Pinpoint to communicate with the APNs sandbox environment by using an APNs certificate.
     */
    Certificate?: __string;
    /**
     * The default authentication method that you want Amazon Pinpoint to use when authenticating with the APNs sandbox environment, key or certificate.
     */
    DefaultAuthenticationMethod?: __string;
    /**
     * Specifies whether to enable the APNs sandbox channel for the application.
     */
    Enabled?: __boolean;
    /**
     * The private key for the APNs client certificate that you want Amazon Pinpoint to use to communicate with the APNs sandbox environment.
     */
    PrivateKey?: __string;
    /**
     * The identifier that's assigned to your Apple developer account team. This identifier is used for APNs tokens.
     */
    TeamId?: __string;
    /**
     * The authentication key to use for APNs tokens.
     */
    TokenKey?: __string;
    /**
     * The key identifier that's assigned to your APNs signing key, if you want Amazon Pinpoint to communicate with the APNs sandbox environment by using APNs tokens.
     */
    TokenKeyId?: __string;
  }
  export interface APNSSandboxChannelResponse {
    /**
     * The unique identifier for the application that the APNs sandbox channel applies to.
     */
    ApplicationId?: __string;
    /**
     * The date and time when the APNs sandbox channel was enabled.
     */
    CreationDate?: __string;
    /**
     * The default authentication method that Amazon Pinpoint uses to authenticate with the APNs sandbox environment for this channel, key or certificate.
     */
    DefaultAuthenticationMethod?: __string;
    /**
     * Specifies whether the APNs sandbox channel is enabled for the application.
     */
    Enabled?: __boolean;
    /**
     * (Not used) This property is retained only for backward compatibility.
     */
    HasCredential?: __boolean;
    /**
     * Specifies whether the APNs sandbox channel is configured to communicate with APNs by using APNs tokens. To provide an authentication key for APNs tokens, set the TokenKey property of the channel.
     */
    HasTokenKey?: __boolean;
    /**
     * (Deprecated) An identifier for the APNs sandbox channel. This property is retained only for backward compatibility.
     */
    Id?: __string;
    /**
     * Specifies whether the APNs sandbox channel is archived.
     */
    IsArchived?: __boolean;
    /**
     * The user who last modified the APNs sandbox channel.
     */
    LastModifiedBy?: __string;
    /**
     * The date and time when the APNs sandbox channel was last modified.
     */
    LastModifiedDate?: __string;
    /**
     * The type of messaging or notification platform for the channel. For the APNs sandbox channel, this value is APNS_SANDBOX.
     */
    Platform: __string;
    /**
     * The current version of the APNs sandbox channel.
     */
    Version?: __integer;
  }
  export interface APNSVoipChannelRequest {
    /**
     * The bundle identifier that's assigned to your iOS app. This identifier is used for APNs tokens.
     */
    BundleId?: __string;
    /**
     * The APNs client certificate that you received from Apple, if you want Amazon Pinpoint to communicate with APNs by using an APNs certificate.
     */
    Certificate?: __string;
    /**
     * The default authentication method that you want Amazon Pinpoint to use when authenticating with APNs, key or certificate.
     */
    DefaultAuthenticationMethod?: __string;
    /**
     * Specifies whether to enable the APNs VoIP channel for the application.
     */
    Enabled?: __boolean;
    /**
     * The private key for the APNs client certificate that you want Amazon Pinpoint to use to communicate with APNs.
     */
    PrivateKey?: __string;
    /**
     * The identifier that's assigned to your Apple developer account team. This identifier is used for APNs tokens.
     */
    TeamId?: __string;
    /**
     * The authentication key to use for APNs tokens.
     */
    TokenKey?: __string;
    /**
     * The key identifier that's assigned to your APNs signing key, if you want Amazon Pinpoint to communicate with APNs by using APNs tokens.
     */
    TokenKeyId?: __string;
  }
  export interface APNSVoipChannelResponse {
    /**
     * The unique identifier for the application that the APNs VoIP channel applies to.
     */
    ApplicationId?: __string;
    /**
     * The date and time when the APNs VoIP channel was enabled.
     */
    CreationDate?: __string;
    /**
     * The default authentication method that Amazon Pinpoint uses to authenticate with APNs for this channel, key or certificate.
     */
    DefaultAuthenticationMethod?: __string;
    /**
     * Specifies whether the APNs VoIP channel is enabled for the application.
     */
    Enabled?: __boolean;
    /**
     * (Not used) This property is retained only for backward compatibility.
     */
    HasCredential?: __boolean;
    /**
     * Specifies whether the APNs VoIP channel is configured to communicate with APNs by using APNs tokens. To provide an authentication key for APNs tokens, set the TokenKey property of the channel.
     */
    HasTokenKey?: __boolean;
    /**
     * (Deprecated) An identifier for the APNs VoIP channel. This property is retained only for backward compatibility.
     */
    Id?: __string;
    /**
     * Specifies whether the APNs VoIP channel is archived.
     */
    IsArchived?: __boolean;
    /**
     * The user who last modified the APNs VoIP channel.
     */
    LastModifiedBy?: __string;
    /**
     * The date and time when the APNs VoIP channel was last modified.
     */
    LastModifiedDate?: __string;
    /**
     * The type of messaging or notification platform for the channel. For the APNs VoIP channel, this value is APNS_VOIP.
     */
    Platform: __string;
    /**
     * The current version of the APNs VoIP channel.
     */
    Version?: __integer;
  }
  export interface APNSVoipSandboxChannelRequest {
    /**
     * The bundle identifier that's assigned to your iOS app. This identifier is used for APNs tokens.
     */
    BundleId?: __string;
    /**
     * The APNs client certificate that you received from Apple, if you want Amazon Pinpoint to communicate with the APNs sandbox environment by using an APNs certificate.
     */
    Certificate?: __string;
    /**
     * The default authentication method that you want Amazon Pinpoint to use when authenticating with the APNs sandbox environment for this channel, key or certificate.
     */
    DefaultAuthenticationMethod?: __string;
    /**
     * Specifies whether the APNs VoIP sandbox channel is enabled for the application.
     */
    Enabled?: __boolean;
    /**
     * The private key for the APNs client certificate that you want Amazon Pinpoint to use to communicate with the APNs sandbox environment.
     */
    PrivateKey?: __string;
    /**
     * The identifier that's assigned to your Apple developer account team. This identifier is used for APNs tokens.
     */
    TeamId?: __string;
    /**
     * The authentication key to use for APNs tokens.
     */
    TokenKey?: __string;
    /**
     * The key identifier that's assigned to your APNs signing key, if you want Amazon Pinpoint to communicate with the APNs sandbox environment by using APNs tokens.
     */
    TokenKeyId?: __string;
  }
  export interface APNSVoipSandboxChannelResponse {
    /**
     * The unique identifier for the application that the APNs VoIP sandbox channel applies to.
     */
    ApplicationId?: __string;
    /**
     * The date and time when the APNs VoIP sandbox channel was enabled.
     */
    CreationDate?: __string;
    /**
     * The default authentication method that Amazon Pinpoint uses to authenticate with the APNs sandbox environment for this channel, key or certificate.
     */
    DefaultAuthenticationMethod?: __string;
    /**
     * Specifies whether the APNs VoIP sandbox channel is enabled for the application.
     */
    Enabled?: __boolean;
    /**
     * (Not used) This property is retained only for backward compatibility.
     */
    HasCredential?: __boolean;
    /**
     * Specifies whether the APNs VoIP sandbox channel is configured to communicate with APNs by using APNs tokens. To provide an authentication key for APNs tokens, set the TokenKey property of the channel.
     */
    HasTokenKey?: __boolean;
    /**
     * (Deprecated) An identifier for the APNs VoIP sandbox channel. This property is retained only for backward compatibility.
     */
    Id?: __string;
    /**
     * Specifies whether the APNs VoIP sandbox channel is archived.
     */
    IsArchived?: __boolean;
    /**
     * The user who last modified the APNs VoIP sandbox channel.
     */
    LastModifiedBy?: __string;
    /**
     * The date and time when the APNs VoIP sandbox channel was last modified.
     */
    LastModifiedDate?: __string;
    /**
     * The type of messaging or notification platform for the channel. For the APNs VoIP sandbox channel, this value is APNS_VOIP_SANDBOX.
     */
    Platform: __string;
    /**
     * The current version of the APNs VoIP sandbox channel.
     */
    Version?: __integer;
  }
  export type Action = "OPEN_APP"|"DEEP_LINK"|"URL"|string;
  export interface ActivitiesResponse {
    /**
     * An array of responses, one for each activity that was performed by the campaign.
     */
    Item: ListOfActivityResponse;
    /**
     * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.
     */
    NextToken?: __string;
  }
  export interface ActivityResponse {
    /**
     * The unique identifier for the application that the campaign applies to.
     */
    ApplicationId: __string;
    /**
     * The unique identifier for the campaign that the activity applies to.
     */
    CampaignId: __string;
    /**
     * The actual time, in ISO 8601 format, when the activity was marked CANCELLED or COMPLETED.
     */
    End?: __string;
    /**
     * The unique identifier for the activity.
     */
    Id: __string;
    /**
     * Specifies whether the activity succeeded. Possible values are SUCCESS and FAIL.
     */
    Result?: __string;
    /**
     * The scheduled start time, in ISO 8601 format, for the activity.
     */
    ScheduledStart?: __string;
    /**
     * The actual start time, in ISO 8601 format, of the activity.
     */
    Start?: __string;
    /**
     * The state of the activity. Possible values are: PENDING, INITIALIZING, RUNNING, PAUSED, CANCELLED, and COMPLETED.
     */
    State?: __string;
    /**
     * The total number of endpoints that the campaign successfully delivered messages to.
     */
    SuccessfulEndpointCount?: __integer;
    /**
     * The total number of time zones that were completed.
     */
    TimezonesCompletedCount?: __integer;
    /**
     * The total number of unique time zones that are in the segment for the campaign.
     */
    TimezonesTotalCount?: __integer;
    /**
     * The total number of endpoints that the campaign attempted to deliver messages to.
     */
    TotalEndpointCount?: __integer;
    /**
     * The unique identifier for the campaign treatment that the activity applies to. A treatment is a variation of a campaign that's used for A/B testing of a campaign.
     */
    TreatmentId?: __string;
  }
  export interface AddressConfiguration {
    /**
     * The message body to use instead of the default message body. This value overrides the default message body.
     */
    BodyOverride?: __string;
    /**
     * The channel to use when sending the message.
     */
    ChannelType?: ChannelType;
    /**
     * An object that maps custom attributes to attributes for the address and is attached to the message. For a push notification, this payload is added to the data.pinpoint object. For an email or text message, this payload is added to email/SMS delivery receipt event attributes.
     */
    Context?: MapOf__string;
    /**
     * The raw, JSON-formatted string to use as the payload for the notification message. This value overrides the message.
     */
    RawContent?: __string;
    /**
     * An object that maps variable values for the message. Amazon Pinpoint merges these values with the variable values specified by properties of the DefaultMessage object. The substitutions in this map take precedence over all other substitutions.
     */
    Substitutions?: MapOfListOf__string;
    /**
     * The message title to use instead of the default message title. This value overrides the default message title.
     */
    TitleOverride?: __string;
  }
  export interface ApplicationDateRangeKpiResponse {
    /**
     * The unique identifier for the application that the metric applies to.
     */
    ApplicationId: __string;
    /**
     * The last date or date and time of the date range that was used to filter the query results, in ISO 8601 format. The date range is inclusive.
     */
    EndTime: __timestampIso8601;
    /**
     * The name of the metric, also referred to as a key performance indicator (KPI), that the data was retrieved for. This value describes the associated metric and consists of two or more terms, which are comprised of lowercase alphanumeric characters, separated by a hyphen. For a list of valid values, see the Amazon Pinpoint Developer Guide.
     */
    KpiName: __string;
    /**
     * An array of objects that contains the results of the query. Each object contains the value for the metric and metadata about that value.
     */
    KpiResult: BaseKpiResult;
    /**
     * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null for the App Metrics resource. The App Metrics resource returns all results in a single page.
     */
    NextToken?: __string;
    /**
     * The first date or date and time of the date range that was used to filter the query results, in ISO 8601 format. The date range is inclusive.
     */
    StartTime: __timestampIso8601;
  }
  export interface ApplicationResponse {
    /**
     * The Amazon Resource Name (ARN) of the application.
     */
    Arn: __string;
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    Id: __string;
    /**
     * The display name of the application. This name is displayed as the Project name on the Amazon Pinpoint console.
     */
    Name: __string;
    /**
     * A string-to-string map of key-value pairs that identifies the tags that are associated with the application. Each tag consists of a required tag key and an associated tag value.
     */
    tags?: MapOf__string;
  }
  export interface ApplicationSettingsResource {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    /**
     * The settings for the AWS Lambda function to use by default as a code hook for campaigns in the application.
     */
    CampaignHook?: CampaignHook;
    /**
     * The date and time, in ISO 8601 format, when the application's settings were last modified.
     */
    LastModifiedDate?: __string;
    /**
     * The default sending limits for campaigns in the application.
     */
    Limits?: CampaignLimits;
    /**
     * The default quiet time for campaigns in the application. Quiet time is a specific time range when campaigns don't send messages to endpoints, if all the following conditions are met: The EndpointDemographic.Timezone property of the endpoint is set to a valid value. The current time in the endpoint's time zone is later than or equal to the time specified by the QuietTime.Start property for the application (or a campaign that has custom quiet time settings). The current time in the endpoint's time zone is earlier than or equal to the time specified by the QuietTime.End property for the application (or a campaign that has custom quiet time settings). If any of the preceding conditions isn't met, the endpoint will receive messages from a campaign, even if quiet time is enabled.
     */
    QuietTime?: QuietTime;
  }
  export interface ApplicationsResponse {
    /**
     * An array of responses, one for each application that was returned.
     */
    Item?: ListOfApplicationResponse;
    /**
     * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.
     */
    NextToken?: __string;
  }
  export interface AttributeDimension {
    /**
     * The type of segment dimension to use. Valid values are: INCLUSIVE, endpoints that match the criteria are included in the segment; and, EXCLUSIVE, endpoints that match the criteria are excluded from the segment.
     */
    AttributeType?: AttributeType;
    /**
     * The criteria values to use for the segment dimension. Depending on the value of the AttributeType property, endpoints are included or excluded from the segment if their attribute values match the criteria values.
     */
    Values: ListOf__string;
  }
  export type AttributeType = "INCLUSIVE"|"EXCLUSIVE"|string;
  export interface AttributesResource {
    /**
     * The unique identifier for the application.
     */
    ApplicationId: __string;
    /**
     * The type of attribute or attributes that were removed from the endpoints. Valid values are: endpoint-custom-attributes - Custom attributes that describe endpoints endpoint-custom-metrics - Custom metrics that your app reports to Amazon Pinpoint for endpoints endpoint-user-attributes - Custom attributes that describe users
     */
    AttributeType: __string;
    /**
     * An array that specifies the names of the attributes that were removed from the endpoints.
     */
    Attributes?: ListOf__string;
  }
  export interface BaiduChannelRequest {
    /**
     * The API key that you received from the Baidu Cloud Push service to communicate with the service.
     */
    ApiKey: __string;
    /**
     * Specifies whether to enable the Baidu channel for the application.
     */
    Enabled?: __boolean;
    /**
     * The secret key that you received from the Baidu Cloud Push service to communicate with the service.
     */
    SecretKey: __string;
  }
  export interface BaiduChannelResponse {
    /**
     * The unique identifier for the application that the Baidu channel applies to.
     */
    ApplicationId?: __string;
    /**
     * The date and time when the Baidu channel was enabled.
     */
    CreationDate?: __string;
    /**
     * The API key that you received from the Baidu Cloud Push service to communicate with the service.
     */
    Credential: __string;
    /**
     * Specifies whether the Baidu channel is enabled for the application.
     */
    Enabled?: __boolean;
    /**
     * (Not used) This property is retained only for backward compatibility.
     */
    HasCredential?: __boolean;
    /**
     * (Deprecated) An identifier for the Baidu channel. This property is retained only for backward compatibility.
     */
    Id?: __string;
    /**
     * Specifies whether the Baidu channel is archived.
     */
    IsArchived?: __boolean;
    /**
     * The user who last modified the Baidu channel.
     */
    LastModifiedBy?: __string;
    /**
     * The date and time when the Baidu channel was last modified.
     */
    LastModifiedDate?: __string;
    /**
     * The type of messaging or notification platform for the channel. For the Baidu channel, this value is BAIDU.
     */
    Platform: __string;
    /**
     * The current version of the Baidu channel.
     */
    Version?: __integer;
  }
  export interface BaiduMessage {
    /**
     * The action to occur if the recipient taps the push notification. Valid values are: OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action. DEEP_LINK - Your app opens and displays a designated user interface in the app. This action uses the deep-linking features of the Android platform. URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.
     */
    Action?: Action;
    /**
     * The body of the notification message.
     */
    Body?: __string;
    /**
     * The JSON data payload to use for the push notification, if the notification is a silent push notification. This payload is added to the data.pinpoint.jsonBody object of the notification.
     */
    Data?: MapOf__string;
    /**
     * The icon image name of the asset saved in your app.
     */
    IconReference?: __string;
    /**
     * The URL of the large icon image to display in the content view of the push notification.
     */
    ImageIconUrl?: __string;
    /**
     * The URL of an image to display in the push notification.
     */
    ImageUrl?: __string;
    /**
     * The raw, JSON-formatted string to use as the payload for the notification message. This value overrides the message.
     */
    RawContent?: __string;
    /**
     * Specifies whether the notification is a silent push notification, which is a push notification that doesn't display on a recipient's device. Silent push notifications can be used for cases such as updating an app's configuration or supporting phone home functionality.
     */
    SilentPush?: __boolean;
    /**
     * The URL of the small icon image to display in the status bar and the content view of the push notification.
     */
    SmallImageIconUrl?: __string;
    /**
     * The sound to play when the recipient receives the push notification. You can use the default stream or specify the file name of a sound resource that's bundled in your app. On an Android platform, the sound file must reside in /res/raw/.
     */
    Sound?: __string;
    /**
     * The default message variables to use in the notification message. You can override the default variables with individual address variables.
     */
    Substitutions?: MapOfListOf__string;
    /**
     * The amount of time, in seconds, that the Baidu Cloud Push service should store the message if the recipient's device is offline. The default value and maximum supported time is 604,800 seconds (7 days).
     */
    TimeToLive?: __integer;
    /**
     * The title to display above the notification message on the recipient's device.
     */
    Title?: __string;
    /**
     * The URL to open in the recipient's default mobile browser, if a recipient taps the push notification and the value of the Action property is URL.
     */
    Url?: __string;
  }
  export interface BaseKpiResult {
    /**
     * An array of objects that provides the results of a query that retrieved the data for a standard metric that applies to an application or campaign.
     */
    Rows: ListOfResultRow;
  }
  export interface CampaignDateRangeKpiResponse {
    /**
     * The unique identifier for the application that the metric applies to.
     */
    ApplicationId: __string;
    /**
     * The unique identifier for the campaign that the metric applies to.
     */
    CampaignId: __string;
    /**
     * The last date or date and time of the date range that was used to filter the query results, in ISO 8601 format. The date range is inclusive.
     */
    EndTime: __timestampIso8601;
    /**
     * The name of the metric, also referred to as a key performance indicator (KPI), that the data was retrieved for. This value describes the associated metric and consists of two or more terms, which are comprised of lowercase alphanumeric characters, separated by a hyphen. For a list of valid values, see the Amazon Pinpoint Developer Guide.
     */
    KpiName: __string;
    /**
     * An array of objects that contains the results of the query. Each object contains the value for the metric and metadata about that value.
     */
    KpiResult: BaseKpiResult;
    /**
     * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null for the Campaign Metrics resource. The Campaign Metrics resource returns all results in a single page.
     */
    NextToken?: __string;
    /**
     * The first date or date and time of the date range that was used to filter the query results, in ISO 8601 format. The date range is inclusive.
     */
    StartTime: __timestampIso8601;
  }
  export interface CampaignEmailMessage {
    /**
     * The body of the email for recipients whose email clients don't support HTML content.
     */
    Body?: __string;
    /**
     * The verified email address to send the email from. The default address is the FromAddress specified for the email channel for the application.
     */
    FromAddress?: __string;
    /**
     * The body of the email, in HTML format, for recipients whose email clients support HTML content.
     */
    HtmlBody?: __string;
    /**
     * The subject line, or title, of the email.
     */
    Title: __string;
  }
  export interface CampaignEventFilter {
    /**
     * The dimension settings of the event filter for the campaign.
     */
    Dimensions: EventDimensions;
    /**
     * The type of event that causes the campaign to be sent. Valid values are: SYSTEM, sends the campaign when a system event occurs; and, ENDPOINT, sends the campaign when an endpoint event (Events resource) occurs.
     */
    FilterType: FilterType;
  }
  export interface CampaignHook {
    /**
     * The name or Amazon Resource Name (ARN) of the AWS Lambda function that Amazon Pinpoint invokes to send messages for a campaign.
     */
    LambdaFunctionName?: __string;
    /**
     * Specifies which Lambda mode to use when invoking the AWS Lambda function.
     */
    Mode?: Mode;
    /**
     *  The web URL that Amazon Pinpoint calls to invoke the AWS Lambda function over HTTPS.
     */
    WebUrl?: __string;
  }
  export interface CampaignLimits {
    /**
     * The maximum number of messages that a campaign can send to a single endpoint during a 24-hour period. The maximum value is 100.
     */
    Daily?: __integer;
    /**
     * The maximum amount of time, in seconds, that a campaign can attempt to deliver a message after the scheduled start time for the campaign. The minimum value is 60 seconds.
     */
    MaximumDuration?: __integer;
    /**
     * The maximum number of messages that a campaign can send each second. The minimum value is 50. The maximum value is 20,000.
     */
    MessagesPerSecond?: __integer;
    /**
     * The maximum number of messages that a campaign can send to a single endpoint during the course of the campaign. The maximum value is 100.
     */
    Total?: __integer;
  }
  export interface CampaignResponse {
    /**
     * An array of responses, one for each treatment that you defined for the campaign, in addition to the default treatment.
     */
    AdditionalTreatments?: ListOfTreatmentResource;
    /**
     * The unique identifier for the application that the campaign applies to.
     */
    ApplicationId: __string;
    /**
     * The Amazon Resource Name (ARN) of the campaign.
     */
    Arn: __string;
    /**
     * The date, ISO 8601 format, when the campaign was created.
     */
    CreationDate: __string;
    /**
     * The current status of the campaign's default treatment. This value exists only for campaigns that have more than one treatment, to support A/B testing.
     */
    DefaultState?: CampaignState;
    /**
     * The custom description of the campaign.
     */
    Description?: __string;
    /**
     * The allocated percentage of users (segment members) who shouldn't receive messages from the campaign.
     */
    HoldoutPercent?: __integer;
    /**
     * The settings for the AWS Lambda function to use as a code hook for the campaign.
     */
    Hook?: CampaignHook;
    /**
     * The unique identifier for the campaign.
     */
    Id: __string;
    /**
     * Specifies whether the campaign is paused. A paused campaign doesn't run unless you resume it by changing this value to false.
     */
    IsPaused?: __boolean;
    /**
     * The date, in ISO 8601 format, when the campaign was last modified.
     */
    LastModifiedDate: __string;
    /**
     * The messaging limits for the campaign.
     */
    Limits?: CampaignLimits;
    /**
     * The message configuration settings for the campaign.
     */
    MessageConfiguration?: MessageConfiguration;
    /**
     * The name of the campaign.
     */
    Name?: __string;
    /**
     * The schedule settings for the campaign.
     */
    Schedule?: Schedule;
    /**
     * The unique identifier for the segment that's associated with the campaign.
     */
    SegmentId: __string;
    /**
     * The version number of the segment that's associated with the campaign.
     */
    SegmentVersion: __integer;
    /**
     * The current status of the campaign.
     */
    State?: CampaignState;
    /**
     * A string-to-string map of key-value pairs that identifies the tags that are associated with the campaign. Each tag consists of a required tag key and an associated tag value.
     */
    tags?: MapOf__string;
    /**
     * The custom description of a variation of the campaign that's used for A/B testing.
     */
    TreatmentDescription?: __string;
    /**
     * The custom name of a variation of the campaign that's used for A/B testing.
     */
    TreatmentName?: __string;
    /**
     * The version number of the campaign.
     */
    Version?: __integer;
  }
  export interface CampaignSmsMessage {
    /**
     * The body of the SMS message.
     */
    Body?: __string;
    /**
     * The type of SMS message. Valid values are: TRANSACTIONAL, the message is critical or time-sensitive, such as a one-time password that supports a customer transaction; and, PROMOTIONAL, the message isn't critical or time-sensitive, such as a marketing message.
     */
    MessageType?: MessageType;
    /**
     * The sender ID to display on recipients' devices when they receive the SMS message.
     */
    SenderId?: __string;
  }
  export interface CampaignState {
    /**
     * The status of the campaign, or the status of a treatment that belongs to an A/B test campaign. If a campaign uses A/B testing, the campaign has a status of COMPLETED only when all campaign treatments have a status of COMPLETED.
     */
    CampaignStatus?: CampaignStatus;
  }
  export type CampaignStatus = "SCHEDULED"|"EXECUTING"|"PENDING_NEXT_RUN"|"COMPLETED"|"PAUSED"|"DELETED"|string;
  export interface CampaignsResponse {
    /**
     * An array of responses, one for each campaign that's associated with the application.
     */
    Item: ListOfCampaignResponse;
    /**
     * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.
     */
    NextToken?: __string;
  }
  export interface ChannelResponse {
    /**
     * The unique identifier for the application.
     */
    ApplicationId?: __string;
    /**
     * The date and time, in ISO 8601 format, when the channel was enabled.
     */
    CreationDate?: __string;
    /**
     * Specifies whether the channel is enabled for the application.
     */
    Enabled?: __boolean;
    /**
     * (Not used) This property is retained only for backward compatibility.
     */
    HasCredential?: __boolean;
    /**
     * (Deprecated) An identifier for the channel. This property is retained only for backward compatibility.
     */
    Id?: __string;
    /**
     * Specifies whether the channel is archived.
     */
    IsArchived?: __boolean;
    /**
     * The user who last modified the channel.
     */
    LastModifiedBy?: __string;
    /**
     * The date and time, in ISO 8601 format, when the channel was last modified.
     */
    LastModifiedDate?: __string;
    /**
     * The current version of the channel.
     */
    Version?: __integer;
  }
  export type ChannelType = "GCM"|"APNS"|"APNS_SANDBOX"|"APNS_VOIP"|"APNS_VOIP_SANDBOX"|"ADM"|"SMS"|"VOICE"|"EMAIL"|"BAIDU"|"CUSTOM"|string;
  export interface ChannelsResponse {
    /**
     * A map that contains a multipart response for each channel. For each item in this object, the ChannelType is the key and the Channel is the value.
     */
    Channels: MapOfChannelResponse;
  }
  export interface CreateAppRequest {
    CreateApplicationRequest: CreateApplicationRequest;
  }
  export interface CreateAppResponse {
    ApplicationResponse: ApplicationResponse;
  }
  export interface CreateApplicationRequest {
    /**
     * The display name of the application. This name is displayed as the Project name on the Amazon Pinpoint console.
     */
    Name: __string;
    /**
     * A string-to-string map of key-value pairs that defines the tags to associate with the application. Each tag consists of a required tag key and an associated tag value.
     */
    tags?: MapOf__string;
  }
  export interface CreateCampaignRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    WriteCampaignRequest: WriteCampaignRequest;
  }
  export interface CreateCampaignResponse {
    CampaignResponse: CampaignResponse;
  }
  export interface CreateExportJobRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    ExportJobRequest: ExportJobRequest;
  }
  export interface CreateExportJobResponse {
    ExportJobResponse: ExportJobResponse;
  }
  export interface CreateImportJobRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    ImportJobRequest: ImportJobRequest;
  }
  export interface CreateImportJobResponse {
    ImportJobResponse: ImportJobResponse;
  }
  export interface CreateSegmentRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    WriteSegmentRequest: WriteSegmentRequest;
  }
  export interface CreateSegmentResponse {
    SegmentResponse: SegmentResponse;
  }
  export interface DefaultMessage {
    /**
     * The default message body of the push notification, email, or SMS message.
     */
    Body?: __string;
    /**
     * The default message variables to use in the push notification, email, or SMS message. You can override these default variables with individual address variables.
     */
    Substitutions?: MapOfListOf__string;
  }
  export interface DefaultPushNotificationMessage {
    /**
     * The default action to occur if a recipient taps the push notification. Valid values are: OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action. DEEP_LINK - Your app opens and displays a designated user interface in the app. This setting uses the deep-linking features of the iOS and Android platforms. URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.
     */
    Action?: Action;
    /**
     * The default body of the notification message.
     */
    Body?: __string;
    /**
     * The JSON data payload to use for the default push notification, if the notification is a silent push notification. This payload is added to the data.pinpoint.jsonBody object of the notification.
     */
    Data?: MapOf__string;
    /**
     * Specifies whether the default notification is a silent push notification, which is a push notification that doesn't display on a recipient's device. Silent push notifications can be used for cases such as updating an app's configuration or delivering messages to an in-app notification center.
     */
    SilentPush?: __boolean;
    /**
     * The default message variables to use in the notification message. You can override the default variables with individual address variables.
     */
    Substitutions?: MapOfListOf__string;
    /**
     * The default title to display above the notification message on a recipient's device.
     */
    Title?: __string;
    /**
     * The default URL to open in a recipient's default mobile browser, if a recipient taps the push notification and the value of the Action property is URL.
     */
    Url?: __string;
  }
  export interface DeleteAdmChannelRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
  }
  export interface DeleteAdmChannelResponse {
    ADMChannelResponse: ADMChannelResponse;
  }
  export interface DeleteApnsChannelRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
  }
  export interface DeleteApnsChannelResponse {
    APNSChannelResponse: APNSChannelResponse;
  }
  export interface DeleteApnsSandboxChannelRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
  }
  export interface DeleteApnsSandboxChannelResponse {
    APNSSandboxChannelResponse: APNSSandboxChannelResponse;
  }
  export interface DeleteApnsVoipChannelRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
  }
  export interface DeleteApnsVoipChannelResponse {
    APNSVoipChannelResponse: APNSVoipChannelResponse;
  }
  export interface DeleteApnsVoipSandboxChannelRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
  }
  export interface DeleteApnsVoipSandboxChannelResponse {
    APNSVoipSandboxChannelResponse: APNSVoipSandboxChannelResponse;
  }
  export interface DeleteAppRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
  }
  export interface DeleteAppResponse {
    ApplicationResponse: ApplicationResponse;
  }
  export interface DeleteBaiduChannelRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
  }
  export interface DeleteBaiduChannelResponse {
    BaiduChannelResponse: BaiduChannelResponse;
  }
  export interface DeleteCampaignRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    /**
     * The unique identifier for the campaign.
     */
    CampaignId: __string;
  }
  export interface DeleteCampaignResponse {
    CampaignResponse: CampaignResponse;
  }
  export interface DeleteEmailChannelRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
  }
  export interface DeleteEmailChannelResponse {
    EmailChannelResponse: EmailChannelResponse;
  }
  export interface DeleteEndpointRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    /**
     * The unique identifier for the endpoint.
     */
    EndpointId: __string;
  }
  export interface DeleteEndpointResponse {
    EndpointResponse: EndpointResponse;
  }
  export interface DeleteEventStreamRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
  }
  export interface DeleteEventStreamResponse {
    EventStream: EventStream;
  }
  export interface DeleteGcmChannelRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
  }
  export interface DeleteGcmChannelResponse {
    GCMChannelResponse: GCMChannelResponse;
  }
  export interface DeleteSegmentRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    /**
     * The unique identifier for the segment.
     */
    SegmentId: __string;
  }
  export interface DeleteSegmentResponse {
    SegmentResponse: SegmentResponse;
  }
  export interface DeleteSmsChannelRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
  }
  export interface DeleteSmsChannelResponse {
    SMSChannelResponse: SMSChannelResponse;
  }
  export interface DeleteUserEndpointsRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    /**
     * The unique identifier for the user.
     */
    UserId: __string;
  }
  export interface DeleteUserEndpointsResponse {
    EndpointsResponse: EndpointsResponse;
  }
  export interface DeleteVoiceChannelRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
  }
  export interface DeleteVoiceChannelResponse {
    VoiceChannelResponse: VoiceChannelResponse;
  }
  export type DeliveryStatus = "SUCCESSFUL"|"THROTTLED"|"TEMPORARY_FAILURE"|"PERMANENT_FAILURE"|"UNKNOWN_FAILURE"|"OPT_OUT"|"DUPLICATE"|string;
  export type DimensionType = "INCLUSIVE"|"EXCLUSIVE"|string;
  export interface DirectMessageConfiguration {
    /**
     * The default push notification message for the ADM (Amazon Device Messaging) channel. This message overrides the default push notification message (DefaultPushNotificationMessage).
     */
    ADMMessage?: ADMMessage;
    /**
     * The default push notification message for the APNs (Apple Push Notification service) channel. This message overrides the default push notification message (DefaultPushNotificationMessage).
     */
    APNSMessage?: APNSMessage;
    /**
     * The default push notification message for the Baidu (Baidu Cloud Push) channel. This message overrides the default push notification message (DefaultPushNotificationMessage).
     */
    BaiduMessage?: BaiduMessage;
    /**
     * The default message body for all channels.
     */
    DefaultMessage?: DefaultMessage;
    /**
     * The default push notification message for all push channels.
     */
    DefaultPushNotificationMessage?: DefaultPushNotificationMessage;
    /**
     * The default message for the email channel. This message overrides the default message (DefaultMessage).
     */
    EmailMessage?: EmailMessage;
    /**
     * The default push notification message for the GCM channel, which is used to send notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service. This message overrides the default push notification message (DefaultPushNotificationMessage).
     */
    GCMMessage?: GCMMessage;
    /**
     * The default message for the SMS channel. This message overrides the default message (DefaultMessage).
     */
    SMSMessage?: SMSMessage;
    /**
     * The default message for the voice channel. This message overrides the default message (DefaultMessage).
     */
    VoiceMessage?: VoiceMessage;
  }
  export type Duration = "HR_24"|"DAY_7"|"DAY_14"|"DAY_30"|string;
  export interface EmailChannelRequest {
    /**
     * The configuration set that you want to apply to email that you send through the channel by using the Amazon Pinpoint Email API.
     */
    ConfigurationSet?: __string;
    /**
     * Specifies whether to enable the email channel for the application.
     */
    Enabled?: __boolean;
    /**
     *  The verified email address that you want to send email from when you send email through the channel.
     */
    FromAddress: __string;
    /**
     *  The Amazon Resource Name (ARN) of the identity, verified with Amazon Simple Email Service (Amazon SES), that you want to use when you send email through the channel.
     */
    Identity: __string;
    /**
     *  The ARN of the AWS Identity and Access Management (IAM) role that you want Amazon Pinpoint to use when it submits email-related event data for the channel.
     */
    RoleArn?: __string;
  }
  export interface EmailChannelResponse {
    /**
     * The unique identifier for the application that the email channel applies to.
     */
    ApplicationId?: __string;
    /**
     * The configuration set that's applied to email that's sent through the channel by using the Amazon Pinpoint Email API.
     */
    ConfigurationSet?: __string;
    /**
     * The date and time, in ISO 8601 format, when the email channel was enabled.
     */
    CreationDate?: __string;
    /**
     * Specifies whether the email channel is enabled for the application.
     */
    Enabled?: __boolean;
    /**
     * The verified email address that you send email from when you send email through the channel.
     */
    FromAddress?: __string;
    /**
     * (Not used) This property is retained only for backward compatibility.
     */
    HasCredential?: __boolean;
    /**
     * (Deprecated) An identifier for the email channel. This property is retained only for backward compatibility.
     */
    Id?: __string;
    /**
     *  The Amazon Resource Name (ARN) of the identity, verified with Amazon Simple Email Service (Amazon SES), that you use when you send email through the channel.
     */
    Identity?: __string;
    /**
     * Specifies whether the email channel is archived.
     */
    IsArchived?: __boolean;
    /**
     * The user who last modified the email channel.
     */
    LastModifiedBy?: __string;
    /**
     * The date and time, in ISO 8601 format, when the email channel was last modified.
     */
    LastModifiedDate?: __string;
    /**
     * The maximum number of emails that you can send through the channel each second.
     */
    MessagesPerSecond?: __integer;
    /**
     * The type of messaging or notification platform for the channel. For the email channel, this value is EMAIL.
     */
    Platform: __string;
    /**
     *  The ARN of the AWS Identity and Access Management (IAM) role that Amazon Pinpoint uses to submit email-related event data for the channel.
     */
    RoleArn?: __string;
    /**
     * The current version of the email channel.
     */
    Version?: __integer;
  }
  export interface EmailMessage {
    /**
     * The body of the email message.
     */
    Body?: __string;
    /**
     * The email address to forward bounces and complaints to, if feedback forwarding is enabled.
     */
    FeedbackForwardingAddress?: __string;
    /**
     * The verified email address to send the email message from. The default value is the FromAddress specified for the email channel.
     */
    FromAddress?: __string;
    /**
     * The email message, represented as a raw MIME message.
     */
    RawEmail?: RawEmail;
    /**
     * The reply-to email address(es) for the email message. If a recipient replies to the email, each reply-to address receives the reply.
     */
    ReplyToAddresses?: ListOf__string;
    /**
     * The email message, composed of a subject, a text part, and an HTML part.
     */
    SimpleEmail?: SimpleEmail;
    /**
     * The default message variables to use in the email message. You can override the default variables with individual address variables.
     */
    Substitutions?: MapOfListOf__string;
  }
  export interface EndpointBatchItem {
    /**
     * The destination address for messages or push notifications that you send to the endpoint. The address varies by channel. For a push-notification channel, use the token provided by the push notification service, such as an Apple Push Notification service (APNs) device token or a Firebase Cloud Messaging (FCM) registration token. For the SMS channel, use a phone number in E.164 format, such as +12065550100. For the email channel, use an email address.
     */
    Address?: __string;
    /**
     * One or more custom attributes that describe the endpoint by associating a name with an array of values. For example, the value of a custom attribute named Interests might be: ["science", "music", "travel"]. You can use these attributes as filter criteria when you create segments. When you define the name of a custom attribute, avoid using the following characters: number sign (#), colon (:), question mark (?), backslash (\), and slash (/). The Amazon Pinpoint console can't display attribute names that contain these characters. This limitation doesn't apply to attribute values.
     */
    Attributes?: MapOfListOf__string;
    /**
     * The channel to use when sending messages or push notifications to the endpoint.
     */
    ChannelType?: ChannelType;
    /**
     * The demographic information for the endpoint, such as the time zone and platform.
     */
    Demographic?: EndpointDemographic;
    /**
     * The date and time, in ISO 8601 format, when the endpoint was created or updated.
     */
    EffectiveDate?: __string;
    /**
     * Not used.
     */
    EndpointStatus?: __string;
    /**
     * The unique identifier for the endpoint in the context of the batch.
     */
    Id?: __string;
    /**
     * The geographic information for the endpoint.
     */
    Location?: EndpointLocation;
    /**
     * One or more custom metrics that your app reports to Amazon Pinpoint for the endpoint.
     */
    Metrics?: MapOf__double;
    /**
     * Specifies whether the user who's associated with the endpoint has opted out of receiving messages and push notifications from you. Possible values are: ALL, the user has opted out and doesn't want to receive any messages or push notifications; and, NONE, the user hasn't opted out and wants to receive all messages and push notifications.
     */
    OptOut?: __string;
    /**
     * The unique identifier for the request to create or update the endpoint.
     */
    RequestId?: __string;
    /**
     * One or more custom user attributes that your app reports to Amazon Pinpoint for the user who's associated with the endpoint.
     */
    User?: EndpointUser;
  }
  export interface EndpointBatchRequest {
    /**
     * An array that defines the endpoints to create or update and, for each endpoint, the property values to set or change. An array can contain a maximum of 100 items.
     */
    Item: ListOfEndpointBatchItem;
  }
  export interface EndpointDemographic {
    /**
     * The version of the app that's associated with the endpoint.
     */
    AppVersion?: __string;
    /**
     * The locale of the endpoint, in the following format: the ISO 639-1 alpha-2 code, followed by an underscore (_), followed by an ISO 3166-1 alpha-2 value.
     */
    Locale?: __string;
    /**
     * The manufacturer of the endpoint device, such as Apple or Samsung.
     */
    Make?: __string;
    /**
     * The model name or number of the endpoint device, such as iPhone.
     */
    Model?: __string;
    /**
     * The model version of the endpoint device.
     */
    ModelVersion?: __string;
    /**
     * The platform of the endpoint device, such as iOS or Android.
     */
    Platform?: __string;
    /**
     * The platform version of the endpoint device.
     */
    PlatformVersion?: __string;
    /**
     * The time zone of the endpoint, specified as a tz database name value, such as America/Los_Angeles.
     */
    Timezone?: __string;
  }
  export interface EndpointItemResponse {
    /**
     * The custom message that's returned in the response as a result of processing the endpoint data.
     */
    Message?: __string;
    /**
     * The status code that's returned in the response as a result of processing the endpoint data.
     */
    StatusCode?: __integer;
  }
  export interface EndpointLocation {
    /**
     * The name of the city where the endpoint is located.
     */
    City?: __string;
    /**
     * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region where the endpoint is located. For example, US for the United States.
     */
    Country?: __string;
    /**
     * The latitude coordinate of the endpoint location, rounded to one decimal place.
     */
    Latitude?: __double;
    /**
     * The longitude coordinate of the endpoint location, rounded to one decimal place.
     */
    Longitude?: __double;
    /**
     * The postal or ZIP code for the area where the endpoint is located.
     */
    PostalCode?: __string;
    /**
     * The name of the region where the endpoint is located. For locations in the United States, this value is the name of a state.
     */
    Region?: __string;
  }
  export interface EndpointMessageResult {
    /**
     * The endpoint address that the message was delivered to.
     */
    Address?: __string;
    /**
     * The delivery status of the message. Possible values are:  DUPLICATE - The endpoint address is a duplicate of another endpoint address. Amazon Pinpoint won't attempt to send the message again. OPT_OUT - The user who's associated with the endpoint has opted out of receiving messages from you. Amazon Pinpoint won't attempt to send the message again. PERMANENT_FAILURE - An error occurred when delivering the message to the endpoint. Amazon Pinpoint won't attempt to send the message again.    SUCCESSFUL - The message was successfully delivered to the endpoint. TEMPORARY_FAILURE - A temporary error occurred. Amazon Pinpoint will attempt to deliver the message again later. THROTTLED - Amazon Pinpoint throttled the operation to send the message to the endpoint. TIMEOUT - The message couldn't be sent within the timeout period. UNKNOWN_FAILURE - An unknown error occurred.
     */
    DeliveryStatus: DeliveryStatus;
    /**
     * The unique identifier for the message that was sent.
     */
    MessageId?: __string;
    /**
     * The downstream service status code for delivering the message.
     */
    StatusCode: __integer;
    /**
     * The status message for delivering the message.
     */
    StatusMessage?: __string;
    /**
     * For push notifications that are sent through the GCM channel, specifies whether the token was updated as part of delivering the message.
     */
    UpdatedToken?: __string;
  }
  export interface EndpointRequest {
    /**
     * The destination address for messages or push notifications that you send to the endpoint. The address varies by channel. For a push-notification channel, use the token provided by the push notification service, such as an Apple Push Notification service (APNs) device token or a Firebase Cloud Messaging (FCM) registration token. For the SMS channel, use a phone number in E.164 format, such as +12065550100. For the email channel, use an email address.
     */
    Address?: __string;
    /**
     * One or more custom attributes that describe the endpoint by associating a name with an array of values. For example, the value of a custom attribute named Interests might be: ["science", "music", "travel"]. You can use these attributes as filter criteria when you create segments. When you define the name of a custom attribute, avoid using the following characters: number sign (#), colon (:), question mark (?), backslash (\), and slash (/). The Amazon Pinpoint console can't display attribute names that contain these characters. This limitation doesn't apply to attribute values.
     */
    Attributes?: MapOfListOf__string;
    /**
     * The channel to use when sending messages or push notifications to the endpoint.
     */
    ChannelType?: ChannelType;
    /**
     * The demographic information for the endpoint, such as the time zone and platform.
     */
    Demographic?: EndpointDemographic;
    /**
     * The date and time, in ISO 8601 format, when the endpoint is updated.
     */
    EffectiveDate?: __string;
    /**
     * Not used.
     */
    EndpointStatus?: __string;
    /**
     * The geographic information for the endpoint.
     */
    Location?: EndpointLocation;
    /**
     * One or more custom metrics that your app reports to Amazon Pinpoint for the endpoint.
     */
    Metrics?: MapOf__double;
    /**
     * Specifies whether the user who's associated with the endpoint has opted out of receiving messages and push notifications from you. Possible values are: ALL, the user has opted out and doesn't want to receive any messages or push notifications; and, NONE, the user hasn't opted out and wants to receive all messages and push notifications.
     */
    OptOut?: __string;
    /**
     * The unique identifier for the most recent request to update the endpoint.
     */
    RequestId?: __string;
    /**
     * One or more custom user attributes that describe the user who's associated with the endpoint.
     */
    User?: EndpointUser;
  }
  export interface EndpointResponse {
    /**
     * The destination address for messages or push notifications that you send to the endpoint. The address varies by channel. For example, the address for a push-notification channel is typically the token provided by a push notification service, such as an Apple Push Notification service (APNs) device token or a Firebase Cloud Messaging (FCM) registration token. The address for the SMS channel is a phone number in E.164 format, such as +12065550100. The address for the email channel is an email address.
     */
    Address?: __string;
    /**
     * The unique identifier for the application that's associated with the endpoint.
     */
    ApplicationId?: __string;
    /**
     * One or more custom attributes that describe the endpoint by associating a name with an array of values. For example, the value of a custom attribute named Interests might be: ["science", "music", "travel"]. You can use these attributes as filter criteria when you create segments.
     */
    Attributes?: MapOfListOf__string;
    /**
     * The channel that's used when sending messages or push notifications to the endpoint.
     */
    ChannelType?: ChannelType;
    /**
     * A number from 0-99 that represents the cohort that the endpoint is assigned to. Endpoints are grouped into cohorts randomly, and each cohort contains approximately 1 percent of the endpoints for an application. Amazon Pinpoint assigns cohorts to the holdout or treatment allocations for campaigns.
     */
    CohortId?: __string;
    /**
     * The date and time, in ISO 8601 format, when the endpoint was created.
     */
    CreationDate?: __string;
    /**
     * The demographic information for the endpoint, such as the time zone and platform.
     */
    Demographic?: EndpointDemographic;
    /**
     * The date and time, in ISO 8601 format, when the endpoint was last updated.
     */
    EffectiveDate?: __string;
    /**
     * Not used.
     */
    EndpointStatus?: __string;
    /**
     * The unique identifier that you assigned to the endpoint. The identifier should be a globally unique identifier (GUID) to ensure that it doesn't conflict with other endpoint identifiers that are associated with the application.
     */
    Id?: __string;
    /**
     * The geographic information for the endpoint.
     */
    Location?: EndpointLocation;
    /**
     * One or more custom metrics that your app reports to Amazon Pinpoint for the endpoint.
     */
    Metrics?: MapOf__double;
    /**
     * Specifies whether the user who's associated with the endpoint has opted out of receiving messages and push notifications from you. Possible values are: ALL, the user has opted out and doesn't want to receive any messages or push notifications; and, NONE, the user hasn't opted out and wants to receive all messages and push notifications.
     */
    OptOut?: __string;
    /**
     * The unique identifier for the most recent request to update the endpoint.
     */
    RequestId?: __string;
    /**
     * One or more custom user attributes that your app reports to Amazon Pinpoint for the user who's associated with the endpoint.
     */
    User?: EndpointUser;
  }
  export interface EndpointSendConfiguration {
    /**
     * The body of the message. If specified, this value overrides the default message body.
     */
    BodyOverride?: __string;
    /**
     * A map of custom attributes to attach to the message for the address. For a push notification, this payload is added to the data.pinpoint object. For an email or text message, this payload is added to email/SMS delivery receipt event attributes.
     */
    Context?: MapOf__string;
    /**
     * The raw, JSON-formatted string to use as the payload for the message. If specified, this value overrides the message.
     */
    RawContent?: __string;
    /**
     * A map of the message variables to merge with the variables specified for the default message (DefaultMessage.Substitutions). The variables specified in this map take precedence over all other variables.
     */
    Substitutions?: MapOfListOf__string;
    /**
     * The title or subject line of the message. If specified, this value overrides the default message title or subject line.
     */
    TitleOverride?: __string;
  }
  export interface EndpointUser {
    /**
     * One or more custom attributes that describe the user by associating a name with an array of values. For example, the value of an attribute named Interests might be: ["science", "music", "travel"]. You can use these attributes as filter criteria when you create segments. When you define the name of a custom attribute, avoid using the following characters: number sign (#), colon (:), question mark (?), backslash (\), and slash (/). The Amazon Pinpoint console can't display attribute names that contain these characters. This limitation doesn't apply to attribute values.
     */
    UserAttributes?: MapOfListOf__string;
    /**
     * The unique identifier for the user.
     */
    UserId?: __string;
  }
  export interface EndpointsResponse {
    /**
     * An array of responses, one for each endpoint that's associated with the user ID.
     */
    Item: ListOfEndpointResponse;
  }
  export interface Event {
    /**
     * The package name of the app that's recording the event.
     */
    AppPackageName?: __string;
    /**
     * The title of the app that's recording the event.
     */
    AppTitle?: __string;
    /**
     * The version number of the app that's recording the event.
     */
    AppVersionCode?: __string;
    /**
     * One or more custom attributes that are associated with the event.
     */
    Attributes?: MapOf__string;
    /**
     * The version of the SDK that's running on the client device.
     */
    ClientSdkVersion?: __string;
    /**
     * The name of the event.
     */
    EventType: __string;
    /**
     * One or more custom metrics that are associated with the event.
     */
    Metrics?: MapOf__double;
    /**
     * The name of the SDK that's being used to record the event.
     */
    SdkName?: __string;
    /**
     * Information about the session in which the event occurred.
     */
    Session?: Session;
    /**
     * The date and time, in ISO 8601 format, when the event occurred.
     */
    Timestamp: __string;
  }
  export interface EventDimensions {
    /**
     * One or more custom attributes that your app reports to Amazon Pinpoint. You can use these attributes as selection criteria when you create an event filter.
     */
    Attributes?: MapOfAttributeDimension;
    /**
     * The name of the event that causes the campaign to be sent. This can be a standard type of event that Amazon Pinpoint generates, such as _session.start, or a custom event that's specific to your app.
     */
    EventType?: SetDimension;
    /**
     * One or more custom metrics that your app reports to Amazon Pinpoint. You can use these metrics as selection criteria when you create an event filter.
     */
    Metrics?: MapOfMetricDimension;
  }
  export interface EventItemResponse {
    /**
     * A custom message that's returned in the response as a result of processing the event.
     */
    Message?: __string;
    /**
     * The status code that's returned in the response as a result of processing the event. Possible values are: 202, for events that were accepted; and, 400, for events that weren't valid.
     */
    StatusCode?: __integer;
  }
  export interface EventStream {
    /**
     * The unique identifier for the application to publish event data for.
     */
    ApplicationId: __string;
    /**
     * The Amazon Resource Name (ARN) of the Amazon Kinesis data stream or Amazon Kinesis Data Firehose delivery stream to publish event data to. For a Kinesis data stream, the ARN format is: arn:aws:kinesis:region:account-id:stream/stream_name
                For a Kinesis Data Firehose delivery stream, the ARN format is: arn:aws:firehose:region:account-id:deliverystream/stream_name
               
     */
    DestinationStreamArn: __string;
    /**
     * (Deprecated) Your AWS account ID, which you assigned to an external ID key in an IAM trust policy. Amazon Pinpoint previously used this value to assume an IAM role when publishing event data, but we removed this requirement. We don't recommend use of external IDs for IAM roles that are assumed by Amazon Pinpoint.
     */
    ExternalId?: __string;
    /**
     * The date, in ISO 8601 format, when the event stream was last modified.
     */
    LastModifiedDate?: __string;
    /**
     * The IAM user who last modified the event stream.
     */
    LastUpdatedBy?: __string;
    /**
     * The AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to publish event data to the stream in your AWS account.
     */
    RoleArn: __string;
  }
  export interface EventsBatch {
    /**
     * A set of properties and attributes that are associated with the endpoint.
     */
    Endpoint: PublicEndpoint;
    /**
     * A set of properties that are associated with the event.
     */
    Events: MapOfEvent;
  }
  export interface EventsRequest {
    /**
     * The batch of events to process. For each item in a batch, the endpoint ID acts as a key that has an EventsBatch object as its value.
     */
    BatchItem: MapOfEventsBatch;
  }
  export interface EventsResponse {
    /**
     * A map that contains a multipart response for each endpoint. For each item in this object, the endpoint ID is the key and the item response is the value. If no item response exists, the value can also be one of the following: 202, the request was processed successfully; or 400, the payload wasn't valid or required fields were missing.
     */
    Results?: MapOfItemResponse;
  }
  export interface ExportJobRequest {
    /**
     * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to access the Amazon S3 location where you want to export endpoint definitions to.
     */
    RoleArn: __string;
    /**
     * The URL of the location in an Amazon Simple Storage Service (Amazon S3) bucket where you want to export endpoint definitions to. This location is typically a folder that contains multiple files. The URL should be in the following format: s3://bucket-name/folder-name/.
     */
    S3UrlPrefix: __string;
    /**
     * The identifier for the segment to export endpoint definitions from. If you don't specify this value, Amazon Pinpoint exports definitions for all the endpoints that are associated with the application.
     */
    SegmentId?: __string;
    /**
     * The version of the segment to export endpoint definitions from, if specified.
     */
    SegmentVersion?: __integer;
  }
  export interface ExportJobResource {
    /**
     * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorized Amazon Pinpoint to access the Amazon S3 location where the endpoint definitions were exported to.
     */
    RoleArn: __string;
    /**
     * The URL of the location in an Amazon Simple Storage Service (Amazon S3) bucket where the endpoint definitions were exported to. This location is typically a folder that contains multiple files. The URL should be in the following format: s3://bucket-name/folder-name/.
     */
    S3UrlPrefix: __string;
    /**
     * The identifier for the segment that the endpoint definitions were exported from. If this value isn't present, Amazon Pinpoint exported definitions for all the endpoints that are associated with the application.
     */
    SegmentId?: __string;
    /**
     * The version of the segment that the endpoint definitions were exported from.
     */
    SegmentVersion?: __integer;
  }
  export interface ExportJobResponse {
    /**
     * The unique identifier for the application that's associated with the export job.
     */
    ApplicationId: __string;
    /**
     * The number of pieces that were processed successfully (completed) by the export job, as of the time of the request.
     */
    CompletedPieces?: __integer;
    /**
     * The date, in ISO 8601 format, when the export job was completed.
     */
    CompletionDate?: __string;
    /**
     * The date, in ISO 8601 format, when the export job was created.
     */
    CreationDate: __string;
    /**
     * The resource settings that apply to the export job.
     */
    Definition: ExportJobResource;
    /**
     * The number of pieces that weren't processed successfully (failed) by the export job, as of the time of the request.
     */
    FailedPieces?: __integer;
    /**
     * An array of entries, one for each of the first 100 entries that weren't processed successfully (failed) by the export job, if any.
     */
    Failures?: ListOf__string;
    /**
     * The unique identifier for the export job.
     */
    Id: __string;
    /**
     * The status of the export job. The job status is FAILED if Amazon Pinpoint wasn't able to process one or more pieces in the job.
     */
    JobStatus: JobStatus;
    /**
     * The total number of endpoint definitions that weren't processed successfully (failed) by the export job, typically because an error, such as a syntax error, occurred.
     */
    TotalFailures?: __integer;
    /**
     * The total number of pieces that must be processed to complete the export job. Each piece consists of an approximately equal portion of the endpoint definitions that are part of the export job.
     */
    TotalPieces?: __integer;
    /**
     * The total number of endpoint definitions that were processed by the export job.
     */
    TotalProcessed?: __integer;
    /**
     * The job type. This value is EXPORT for export jobs.
     */
    Type: __string;
  }
  export interface ExportJobsResponse {
    /**
     * An array of responses, one for each export job that's associated with the application (Export Jobs resource) or segment (Segment Export Jobs resource).
     */
    Item: ListOfExportJobResponse;
    /**
     * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.
     */
    NextToken?: __string;
  }
  export type FilterType = "SYSTEM"|"ENDPOINT"|string;
  export type Format = "CSV"|"JSON"|string;
  export type Frequency = "ONCE"|"HOURLY"|"DAILY"|"WEEKLY"|"MONTHLY"|"EVENT"|string;
  export interface GCMChannelRequest {
    /**
     * The API key, also referred to as a server key, that you received from Google to communicate with Google services.
     */
    ApiKey: __string;
    /**
     * Specifies whether to enable the GCM channel for the application.
     */
    Enabled?: __boolean;
  }
  export interface GCMChannelResponse {
    /**
     * The unique identifier for the application that the GCM channel applies to.
     */
    ApplicationId?: __string;
    /**
     * The date and time when the GCM channel was enabled.
     */
    CreationDate?: __string;
    /**
     * The API key, also referred to as a server key, that you received from Google to communicate with Google services.
     */
    Credential: __string;
    /**
     * Specifies whether the GCM channel is enabled for the application.
     */
    Enabled?: __boolean;
    /**
     * (Not used) This property is retained only for backward compatibility.
     */
    HasCredential?: __boolean;
    /**
     * (Deprecated) An identifier for the GCM channel. This property is retained only for backward compatibility.
     */
    Id?: __string;
    /**
     * Specifies whether the GCM channel is archived.
     */
    IsArchived?: __boolean;
    /**
     * The user who last modified the GCM channel.
     */
    LastModifiedBy?: __string;
    /**
     * The date and time when the GCM channel was last modified.
     */
    LastModifiedDate?: __string;
    /**
     * The type of messaging or notification platform for the channel. For the GCM channel, this value is GCM.
     */
    Platform: __string;
    /**
     * The current version of the GCM channel.
     */
    Version?: __integer;
  }
  export interface GCMMessage {
    /**
     * The action to occur if the recipient taps the push notification. Valid values are: OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action. DEEP_LINK - Your app opens and displays a designated user interface in the app. This action uses the deep-linking features of the Android platform. URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.
     */
    Action?: Action;
    /**
     * The body of the notification message.
     */
    Body?: __string;
    /**
     * An arbitrary string that identifies a group of messages that can be collapsed to ensure that only the last message is sent when delivery can resume. This helps avoid sending too many instances of the same messages when the recipient's device comes online again or becomes active. Amazon Pinpoint specifies this value in the Firebase Cloud Messaging (FCM) collapse_key parameter when it sends the notification message to FCM.
     */
    CollapseKey?: __string;
    /**
     * The JSON data payload to use for the push notification, if the notification is a silent push notification. This payload is added to the data.pinpoint.jsonBody object of the notification.
     */
    Data?: MapOf__string;
    /**
     * The icon image name of the asset saved in your app.
     */
    IconReference?: __string;
    /**
     * The URL of the large icon image to display in the content view of the push notification.
     */
    ImageIconUrl?: __string;
    /**
     * The URL of an image to display in the push notification.
     */
    ImageUrl?: __string;
    /**
     * para>normal - The notification might be delayed. Delivery is optimized for battery usage on the recipient's device. Use this value unless immediate delivery is required./listitem> high - The notification is sent immediately and might wake a sleeping device./para> Amazon Pinpoint specifies this value in the FCM priority parameter when it sends the notification message to FCM. The equivalent values for Apple Push Notification service (APNs) are 5, for normal, and 10, for high. If you specify an APNs value for this property, Amazon Pinpoint accepts and converts the value to the corresponding FCM value.
     */
    Priority?: __string;
    /**
     * The raw, JSON-formatted string to use as the payload for the notification message. This value overrides the message.
     */
    RawContent?: __string;
    /**
     * The package name of the application where registration tokens must match in order for the recipient to receive the message.
     */
    RestrictedPackageName?: __string;
    /**
     * Specifies whether the notification is a silent push notification, which is a push notification that doesn't display on a recipient's device. Silent push notifications can be used for cases such as updating an app's configuration or supporting phone home functionality.
     */
    SilentPush?: __boolean;
    /**
     * The URL of the small icon image to display in the status bar and the content view of the push notification.
     */
    SmallImageIconUrl?: __string;
    /**
     * The sound to play when the recipient receives the push notification. You can use the default stream or specify the file name of a sound resource that's bundled in your app. On an Android platform, the sound file must reside in /res/raw/.
     */
    Sound?: __string;
    /**
     * The default message variables to use in the notification message. You can override the default variables with individual address variables.
     */
    Substitutions?: MapOfListOf__string;
    /**
     * The amount of time, in seconds, that FCM should store and attempt to deliver the push notification, if the service is unable to deliver the notification the first time. If you don't specify this value, FCM defaults to the maximum value, which is 2,419,200 seconds (28 days). Amazon Pinpoint specifies this value in the FCM time_to_live parameter when it sends the notification message to FCM.
     */
    TimeToLive?: __integer;
    /**
     * The title to display above the notification message on the recipient's device.
     */
    Title?: __string;
    /**
     * The URL to open in the recipient's default mobile browser, if a recipient taps the push notification and the value of the Action property is URL.
     */
    Url?: __string;
  }
  export interface GPSCoordinates {
    /**
     * The latitude coordinate of the location.
     */
    Latitude: __double;
    /**
     * The longitude coordinate of the location.
     */
    Longitude: __double;
  }
  export interface GPSPointDimension {
    /**
     * The GPS coordinates to measure distance from.
     */
    Coordinates: GPSCoordinates;
    /**
     * The range, in kilometers, from the GPS coordinates.
     */
    RangeInKilometers?: __double;
  }
  export interface GetAdmChannelRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
  }
  export interface GetAdmChannelResponse {
    ADMChannelResponse: ADMChannelResponse;
  }
  export interface GetApnsChannelRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
  }
  export interface GetApnsChannelResponse {
    APNSChannelResponse: APNSChannelResponse;
  }
  export interface GetApnsSandboxChannelRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
  }
  export interface GetApnsSandboxChannelResponse {
    APNSSandboxChannelResponse: APNSSandboxChannelResponse;
  }
  export interface GetApnsVoipChannelRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
  }
  export interface GetApnsVoipChannelResponse {
    APNSVoipChannelResponse: APNSVoipChannelResponse;
  }
  export interface GetApnsVoipSandboxChannelRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
  }
  export interface GetApnsVoipSandboxChannelResponse {
    APNSVoipSandboxChannelResponse: APNSVoipSandboxChannelResponse;
  }
  export interface GetAppRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
  }
  export interface GetAppResponse {
    ApplicationResponse: ApplicationResponse;
  }
  export interface GetApplicationDateRangeKpiRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    /**
     * The last date to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in ISO 8601 format, for example: 2019-07-19 for July 19, 2019. To define a date range that ends at a specific time, specify the date and time in ISO 8601 format, for example: 2019-07-19T20:00Z for 8:00 PM July 19, 2019.
     */
    EndTime?: __timestampIso8601;
    /**
     * The name of the metric, also referred to as a key performance indicator (KPI), to retrieve data for. This value describes the associated metric and consists of two or more terms, which are comprised of lowercase alphanumeric characters, separated by a hyphen. Examples are attempted-deliveries and successful-deliveries. For a list of valid values, see the Amazon Pinpoint Developer Guide.
     */
    KpiName: __string;
    /**
     * The NextToken string that specifies which page of results to return in a paginated response. This parameter is currently not supported by the App Metrics and Campaign Metrics resources.
     */
    NextToken?: __string;
    /**
     * The maximum number of items to include in each page of a paginated response. This parameter is currently not supported by the App Metrics and Campaign Metrics resources.
     */
    PageSize?: __string;
    /**
     * The first date to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in ISO 8601 format, for example: 2019-07-15 for July 15, 2019. To define a date range that begins at a specific time, specify the date and time in ISO 8601 format, for example: 2019-07-15T16:00Z for 4:00 PM July 15, 2019.
     */
    StartTime?: __timestampIso8601;
  }
  export interface GetApplicationDateRangeKpiResponse {
    ApplicationDateRangeKpiResponse: ApplicationDateRangeKpiResponse;
  }
  export interface GetApplicationSettingsRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
  }
  export interface GetApplicationSettingsResponse {
    ApplicationSettingsResource: ApplicationSettingsResource;
  }
  export interface GetAppsRequest {
    /**
     * The maximum number of items to include in each page of a paginated response. This parameter is currently not supported by the App Metrics and Campaign Metrics resources.
     */
    PageSize?: __string;
    /**
     * The NextToken string that specifies which page of results to return in a paginated response.
     */
    Token?: __string;
  }
  export interface GetAppsResponse {
    ApplicationsResponse: ApplicationsResponse;
  }
  export interface GetBaiduChannelRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
  }
  export interface GetBaiduChannelResponse {
    BaiduChannelResponse: BaiduChannelResponse;
  }
  export interface GetCampaignActivitiesRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    /**
     * The unique identifier for the campaign.
     */
    CampaignId: __string;
    /**
     * The maximum number of items to include in each page of a paginated response. This parameter is currently not supported by the App Metrics and Campaign Metrics resources.
     */
    PageSize?: __string;
    /**
     * The NextToken string that specifies which page of results to return in a paginated response.
     */
    Token?: __string;
  }
  export interface GetCampaignActivitiesResponse {
    ActivitiesResponse: ActivitiesResponse;
  }
  export interface GetCampaignDateRangeKpiRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    /**
     * The unique identifier for the campaign.
     */
    CampaignId: __string;
    /**
     * The last date to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in ISO 8601 format, for example: 2019-07-19 for July 19, 2019. To define a date range that ends at a specific time, specify the date and time in ISO 8601 format, for example: 2019-07-19T20:00Z for 8:00 PM July 19, 2019.
     */
    EndTime?: __timestampIso8601;
    /**
     * The name of the metric, also referred to as a key performance indicator (KPI), to retrieve data for. This value describes the associated metric and consists of two or more terms, which are comprised of lowercase alphanumeric characters, separated by a hyphen. Examples are attempted-deliveries and successful-deliveries. For a list of valid values, see the Amazon Pinpoint Developer Guide.
     */
    KpiName: __string;
    /**
     * The NextToken string that specifies which page of results to return in a paginated response. This parameter is currently not supported by the App Metrics and Campaign Metrics resources.
     */
    NextToken?: __string;
    /**
     * The maximum number of items to include in each page of a paginated response. This parameter is currently not supported by the App Metrics and Campaign Metrics resources.
     */
    PageSize?: __string;
    /**
     * The first date to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in ISO 8601 format, for example: 2019-07-15 for July 15, 2019. To define a date range that begins at a specific time, specify the date and time in ISO 8601 format, for example: 2019-07-15T16:00Z for 4:00 PM July 15, 2019.
     */
    StartTime?: __timestampIso8601;
  }
  export interface GetCampaignDateRangeKpiResponse {
    CampaignDateRangeKpiResponse: CampaignDateRangeKpiResponse;
  }
  export interface GetCampaignRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    /**
     * The unique identifier for the campaign.
     */
    CampaignId: __string;
  }
  export interface GetCampaignResponse {
    CampaignResponse: CampaignResponse;
  }
  export interface GetCampaignVersionRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    /**
     * The unique identifier for the campaign.
     */
    CampaignId: __string;
    /**
     * The unique version number (Version property) for the campaign version.
     */
    Version: __string;
  }
  export interface GetCampaignVersionResponse {
    CampaignResponse: CampaignResponse;
  }
  export interface GetCampaignVersionsRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    /**
     * The unique identifier for the campaign.
     */
    CampaignId: __string;
    /**
     * The maximum number of items to include in each page of a paginated response. This parameter is currently not supported by the App Metrics and Campaign Metrics resources.
     */
    PageSize?: __string;
    /**
     * The NextToken string that specifies which page of results to return in a paginated response.
     */
    Token?: __string;
  }
  export interface GetCampaignVersionsResponse {
    CampaignsResponse: CampaignsResponse;
  }
  export interface GetCampaignsRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    /**
     * The maximum number of items to include in each page of a paginated response. This parameter is currently not supported by the App Metrics and Campaign Metrics resources.
     */
    PageSize?: __string;
    /**
     * The NextToken string that specifies which page of results to return in a paginated response.
     */
    Token?: __string;
  }
  export interface GetCampaignsResponse {
    CampaignsResponse: CampaignsResponse;
  }
  export interface GetChannelsRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
  }
  export interface GetChannelsResponse {
    ChannelsResponse: ChannelsResponse;
  }
  export interface GetEmailChannelRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
  }
  export interface GetEmailChannelResponse {
    EmailChannelResponse: EmailChannelResponse;
  }
  export interface GetEndpointRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    /**
     * The unique identifier for the endpoint.
     */
    EndpointId: __string;
  }
  export interface GetEndpointResponse {
    EndpointResponse: EndpointResponse;
  }
  export interface GetEventStreamRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
  }
  export interface GetEventStreamResponse {
    EventStream: EventStream;
  }
  export interface GetExportJobRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    /**
     * The unique identifier for the job.
     */
    JobId: __string;
  }
  export interface GetExportJobResponse {
    ExportJobResponse: ExportJobResponse;
  }
  export interface GetExportJobsRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    /**
     * The maximum number of items to include in each page of a paginated response. This parameter is currently not supported by the App Metrics and Campaign Metrics resources.
     */
    PageSize?: __string;
    /**
     * The NextToken string that specifies which page of results to return in a paginated response.
     */
    Token?: __string;
  }
  export interface GetExportJobsResponse {
    ExportJobsResponse: ExportJobsResponse;
  }
  export interface GetGcmChannelRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
  }
  export interface GetGcmChannelResponse {
    GCMChannelResponse: GCMChannelResponse;
  }
  export interface GetImportJobRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    /**
     * The unique identifier for the job.
     */
    JobId: __string;
  }
  export interface GetImportJobResponse {
    ImportJobResponse: ImportJobResponse;
  }
  export interface GetImportJobsRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    /**
     * The maximum number of items to include in each page of a paginated response. This parameter is currently not supported by the App Metrics and Campaign Metrics resources.
     */
    PageSize?: __string;
    /**
     * The NextToken string that specifies which page of results to return in a paginated response.
     */
    Token?: __string;
  }
  export interface GetImportJobsResponse {
    ImportJobsResponse: ImportJobsResponse;
  }
  export interface GetSegmentExportJobsRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    /**
     * The maximum number of items to include in each page of a paginated response. This parameter is currently not supported by the App Metrics and Campaign Metrics resources.
     */
    PageSize?: __string;
    /**
     * The unique identifier for the segment.
     */
    SegmentId: __string;
    /**
     * The NextToken string that specifies which page of results to return in a paginated response.
     */
    Token?: __string;
  }
  export interface GetSegmentExportJobsResponse {
    ExportJobsResponse: ExportJobsResponse;
  }
  export interface GetSegmentImportJobsRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    /**
     * The maximum number of items to include in each page of a paginated response. This parameter is currently not supported by the App Metrics and Campaign Metrics resources.
     */
    PageSize?: __string;
    /**
     * The unique identifier for the segment.
     */
    SegmentId: __string;
    /**
     * The NextToken string that specifies which page of results to return in a paginated response.
     */
    Token?: __string;
  }
  export interface GetSegmentImportJobsResponse {
    ImportJobsResponse: ImportJobsResponse;
  }
  export interface GetSegmentRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    /**
     * The unique identifier for the segment.
     */
    SegmentId: __string;
  }
  export interface GetSegmentResponse {
    SegmentResponse: SegmentResponse;
  }
  export interface GetSegmentVersionRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    /**
     * The unique identifier for the segment.
     */
    SegmentId: __string;
    /**
     * The unique version number (Version property) for the campaign version.
     */
    Version: __string;
  }
  export interface GetSegmentVersionResponse {
    SegmentResponse: SegmentResponse;
  }
  export interface GetSegmentVersionsRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    /**
     * The maximum number of items to include in each page of a paginated response. This parameter is currently not supported by the App Metrics and Campaign Metrics resources.
     */
    PageSize?: __string;
    /**
     * The unique identifier for the segment.
     */
    SegmentId: __string;
    /**
     * The NextToken string that specifies which page of results to return in a paginated response.
     */
    Token?: __string;
  }
  export interface GetSegmentVersionsResponse {
    SegmentsResponse: SegmentsResponse;
  }
  export interface GetSegmentsRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    /**
     * The maximum number of items to include in each page of a paginated response. This parameter is currently not supported by the App Metrics and Campaign Metrics resources.
     */
    PageSize?: __string;
    /**
     * The NextToken string that specifies which page of results to return in a paginated response.
     */
    Token?: __string;
  }
  export interface GetSegmentsResponse {
    SegmentsResponse: SegmentsResponse;
  }
  export interface GetSmsChannelRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
  }
  export interface GetSmsChannelResponse {
    SMSChannelResponse: SMSChannelResponse;
  }
  export interface GetUserEndpointsRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    /**
     * The unique identifier for the user.
     */
    UserId: __string;
  }
  export interface GetUserEndpointsResponse {
    EndpointsResponse: EndpointsResponse;
  }
  export interface GetVoiceChannelRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
  }
  export interface GetVoiceChannelResponse {
    VoiceChannelResponse: VoiceChannelResponse;
  }
  export interface ImportJobRequest {
    /**
     * Specifies whether to create a segment that contains the endpoints, when the endpoint definitions are imported.
     */
    DefineSegment?: __boolean;
    /**
     * (Deprecated) Your AWS account ID, which you assigned to an external ID key in an IAM trust policy. Amazon Pinpoint previously used this value to assume an IAM role when importing endpoint definitions, but we removed this requirement. We don't recommend use of external IDs for IAM roles that are assumed by Amazon Pinpoint.
     */
    ExternalId?: __string;
    /**
     * The format of the files that contain the endpoint definitions to import. Valid values are: CSV, for comma-separated values format; and, JSON, for newline-delimited JSON format. If the Amazon S3 location stores multiple files that use different formats, Amazon Pinpoint imports data only from the files that use the specified format.
     */
    Format: Format;
    /**
     * Specifies whether to register the endpoints with Amazon Pinpoint, when the endpoint definitions are imported.
     */
    RegisterEndpoints?: __boolean;
    /**
     * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to access the Amazon S3 location to import endpoint definitions from.
     */
    RoleArn: __string;
    /**
     * The URL of the Amazon Simple Storage Service (Amazon S3) bucket that contains the endpoint definitions to import. This location can be a folder or a single file. If the location is a folder, Amazon Pinpoint imports endpoint definitions from the files in this location, including any subfolders that the folder contains. The URL should be in the following format: s3://bucket-name/folder-name/file-name. The location can end with the key for an individual object or a prefix that qualifies multiple objects.
     */
    S3Url: __string;
    /**
     * The identifier for the segment to update or add the imported endpoint definitions to, if the import job is meant to update an existing segment.
     */
    SegmentId?: __string;
    /**
     * The custom name for the segment that's created by the import job, if the value of the DefineSegment property is true.
     */
    SegmentName?: __string;
  }
  export interface ImportJobResource {
    /**
     * Specifies whether the import job creates a segment that contains the endpoints, when the endpoint definitions are imported.
     */
    DefineSegment?: __boolean;
    /**
     * (Deprecated) Your AWS account ID, which you assigned to an external ID key in an IAM trust policy. Amazon Pinpoint previously used this value to assume an IAM role when importing endpoint definitions, but we removed this requirement. We don't recommend use of external IDs for IAM roles that are assumed by Amazon Pinpoint.
     */
    ExternalId?: __string;
    /**
     * The format of the files that contain the endpoint definitions to import. Valid values are: CSV, for comma-separated values format; and, JSON, for newline-delimited JSON format. If the files are stored in an Amazon S3 location and that location contains multiple files that use different formats, Amazon Pinpoint imports data only from the files that use the specified format.
     */
    Format: Format;
    /**
     * Specifies whether the import job registers the endpoints with Amazon Pinpoint, when the endpoint definitions are imported.
     */
    RegisterEndpoints?: __boolean;
    /**
     * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to access the Amazon S3 location to import endpoint definitions from.
     */
    RoleArn: __string;
    /**
     * The URL of the Amazon Simple Storage Service (Amazon S3) bucket that contains the endpoint definitions to import. This location can be a folder or a single file. If the location is a folder, Amazon Pinpoint imports endpoint definitions from the files in this location, including any subfolders that the folder contains. The URL should be in the following format: s3://bucket-name/folder-name/file-name. The location can end with the key for an individual object or a prefix that qualifies multiple objects.
     */
    S3Url: __string;
    /**
     * The identifier for the segment that the import job updates or adds endpoint definitions to, if the import job updates an existing segment.
     */
    SegmentId?: __string;
    /**
     * The custom name for the segment that's created by the import job, if the value of the DefineSegment property is true.
     */
    SegmentName?: __string;
  }
  export interface ImportJobResponse {
    /**
     * The unique identifier for the application that's associated with the import job.
     */
    ApplicationId: __string;
    /**
     * The number of pieces that were processed successfully (completed) by the import job, as of the time of the request.
     */
    CompletedPieces?: __integer;
    /**
     * The date, in ISO 8601 format, when the import job was completed.
     */
    CompletionDate?: __string;
    /**
     * The date, in ISO 8601 format, when the import job was created.
     */
    CreationDate: __string;
    /**
     * The resource settings that apply to the import job.
     */
    Definition: ImportJobResource;
    /**
     * The number of pieces that weren't processed successfully (failed) by the import job, as of the time of the request.
     */
    FailedPieces?: __integer;
    /**
     * An array of entries, one for each of the first 100 entries that weren't processed successfully (failed) by the import job, if any.
     */
    Failures?: ListOf__string;
    /**
     * The unique identifier for the import job.
     */
    Id: __string;
    /**
     * The status of the import job. The job status is FAILED if Amazon Pinpoint wasn't able to process one or more pieces in the job.
     */
    JobStatus: JobStatus;
    /**
     * The total number of endpoint definitions that weren't processed successfully (failed) by the import job, typically because an error, such as a syntax error, occurred.
     */
    TotalFailures?: __integer;
    /**
     * The total number of pieces that must be processed to complete the import job. Each piece consists of an approximately equal portion of the endpoint definitions that are part of the import job.
     */
    TotalPieces?: __integer;
    /**
     * The total number of endpoint definitions that were processed by the import job.
     */
    TotalProcessed?: __integer;
    /**
     * The job type. This value is IMPORT for import jobs.
     */
    Type: __string;
  }
  export interface ImportJobsResponse {
    /**
     * An array of responses, one for each import job that's associated with the application (Import Jobs resource) or segment (Segment Import Jobs resource).
     */
    Item: ListOfImportJobResponse;
    /**
     * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.
     */
    NextToken?: __string;
  }
  export type Include = "ALL"|"ANY"|"NONE"|string;
  export interface ItemResponse {
    /**
     * The response that was received after the endpoint data was accepted.
     */
    EndpointItemResponse?: EndpointItemResponse;
    /**
     * A multipart response object that contains a key and a value for each event in the request. In each object, the event ID is the key and an EventItemResponse object is the value.
     */
    EventsItemResponse?: MapOfEventItemResponse;
  }
  export type JobStatus = "CREATED"|"INITIALIZING"|"PROCESSING"|"COMPLETING"|"COMPLETED"|"FAILING"|"FAILED"|string;
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the application, campaign, or segment.
     */
    ResourceArn: __string;
  }
  export interface ListTagsForResourceResponse {
    TagsModel: TagsModel;
  }
  export interface Message {
    /**
     * The action to occur if a recipient taps the push notification. Valid values are: OPEN_APP - Your app opens or it becomes the foreground app if it was sent to the background. This is the default action. DEEP_LINK - Your app opens and displays a designated user interface in the app. This setting uses the deep-linking features of iOS and Android. URL - The default mobile browser on the recipient's device opens and loads the web page at a URL that you specify.
     */
    Action?: Action;
    /**
     * The body of the notification message. The maximum number of characters is 200.
     */
    Body?: __string;
    /**
     * The URL of the image to display as the push-notification icon, such as the icon for the app.
     */
    ImageIconUrl?: __string;
    /**
     * The URL of the image to display as the small, push-notification icon, such as a small version of the icon for the app.
     */
    ImageSmallIconUrl?: __string;
    /**
     * The URL of an image to display in the push notification.
     */
    ImageUrl?: __string;
    /**
     * The JSON payload to use for a silent push notification.
     */
    JsonBody?: __string;
    /**
     * The URL of the image or video to display in the push notification.
     */
    MediaUrl?: __string;
    /**
     * The raw, JSON-formatted string to use as the payload for the notification message. This value overrides other values for the message.
     */
    RawContent?: __string;
    /**
     * Specifies whether the notification is a silent push notification, which is a push notification that doesn't display on a recipient's device. Silent push notifications can be used for cases such as updating an app's configuration, displaying messages in an in-app message center, or supporting phone home functionality.
     */
    SilentPush?: __boolean;
    /**
     * The number of seconds that the push-notification service should keep the message, if the service is unable to deliver the notification the first time. This value is converted to an expiration value when it's sent to a push-notification service. If this value is 0, the service treats the notification as if it expires immediately and the service doesn't store or try to deliver the notification again. This value doesn't apply to messages that are sent through the Amazon Device Messaging (ADM) service.
     */
    TimeToLive?: __integer;
    /**
     * The title to display above the notification message on a recipient's device.
     */
    Title?: __string;
    /**
     * The URL to open in a recipient's default mobile browser, if a recipient taps the push notification and the value of the Action property is URL.
     */
    Url?: __string;
  }
  export interface MessageBody {
    /**
     * The message that's returned from the API.
     */
    Message?: __string;
    /**
     * The unique identifier for the request or response.
     */
    RequestID?: __string;
  }
  export interface MessageConfiguration {
    /**
     * The message that the campaign sends through the ADM (Amazon Device Messaging) channel. This message overrides the default message.
     */
    ADMMessage?: Message;
    /**
     * The message that the campaign sends through the APNs (Apple Push Notification service) channel. This message overrides the default message.
     */
    APNSMessage?: Message;
    /**
     * The message that the campaign sends through the Baidu (Baidu Cloud Push) channel. This message overrides the default message.
     */
    BaiduMessage?: Message;
    /**
     * The default message that the campaign sends through all the channels that are configured for the campaign.
     */
    DefaultMessage?: Message;
    /**
     * The message that the campaign sends through the email channel.
     */
    EmailMessage?: CampaignEmailMessage;
    /**
     * The message that the campaign sends through the GCM channel, which enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service. This message overrides the default message.
     */
    GCMMessage?: Message;
    /**
     * The message that the campaign sends through the SMS channel.
     */
    SMSMessage?: CampaignSmsMessage;
  }
  export interface MessageRequest {
    /**
     * A map of key-value pairs, where each key is an address and each value is an AddressConfiguration object. An address can be a push notification token, a phone number, or an email address. You can use an AddressConfiguration object to tailor the message for an address by specifying settings such as content overrides and message variables.
     */
    Addresses?: MapOfAddressConfiguration;
    /**
     * A map of custom attributes to attach to the message. For a push notification, this payload is added to the data.pinpoint object. For an email or text message, this payload is added to email/SMS delivery receipt event attributes.
     */
    Context?: MapOf__string;
    /**
     * A map of key-value pairs, where each key is an endpoint ID and each value is an EndpointSendConfiguration object. You can use an EndpointSendConfiguration object to tailor the message for an endpoint by specifying settings such as content overrides and message variables.
     */
    Endpoints?: MapOfEndpointSendConfiguration;
    /**
     * The set of properties that defines the configuration settings for the message.
     */
    MessageConfiguration: DirectMessageConfiguration;
    /**
     * The unique identifier for tracing the message. This identifier is visible to message recipients.
     */
    TraceId?: __string;
  }
  export interface MessageResponse {
    /**
     * The unique identifier for the application that was used to send the message.
     */
    ApplicationId: __string;
    /**
     * A map that contains a multipart response for each address that the message was sent to. In the map, the endpoint ID is the key and the result is the value.
     */
    EndpointResult?: MapOfEndpointMessageResult;
    /**
     * The identifier for the original request that the message was delivered for.
     */
    RequestId?: __string;
    /**
     * A map that contains a multipart response for each address (email address, phone number, or push notification token) that the message was sent to. In the map, the address is the key and the result is the value.
     */
    Result?: MapOfMessageResult;
  }
  export interface MessageResult {
    /**
     * The delivery status of the message. Possible values are:  DUPLICATE - The endpoint address is a duplicate of another endpoint address. Amazon Pinpoint won't attempt to send the message again.   OPT_OUT - The user who's associated with the endpoint address has opted out of receiving messages from you. Amazon Pinpoint won't attempt to send the message again. PERMANENT_FAILURE - An error occurred when delivering the message to the endpoint address. Amazon Pinpoint won't attempt to send the message again.   SUCCESSFUL - The message was successfully delivered to the endpoint address. TEMPORARY_FAILURE - A temporary error occurred. Amazon Pinpoint will attempt to deliver the message again later. THROTTLED - Amazon Pinpoint throttled the operation to send the message to the endpoint address. TIMEOUT - The message couldn't be sent within the timeout period. UNKNOWN_FAILURE - An unknown error occurred.
     */
    DeliveryStatus: DeliveryStatus;
    /**
     * The unique identifier for the message that was sent.
     */
    MessageId?: __string;
    /**
     * The downstream service status code for delivering the message.
     */
    StatusCode: __integer;
    /**
     * The status message for delivering the message.
     */
    StatusMessage?: __string;
    /**
     * For push notifications that are sent through the GCM channel, specifies whether the token was updated as part of delivering the message.
     */
    UpdatedToken?: __string;
  }
  export type MessageType = "TRANSACTIONAL"|"PROMOTIONAL"|string;
  export interface MetricDimension {
    /**
     * The operator to use when comparing metric values. Valid values are: GREATER_THAN, LESS_THAN, GREATER_THAN_OR_EQUAL, LESS_THAN_OR_EQUAL, and EQUAL.
     */
    ComparisonOperator: __string;
    /**
     * The value to compare.
     */
    Value: __double;
  }
  export type Mode = "DELIVERY"|"FILTER"|string;
  export interface NumberValidateRequest {
    /**
     * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region where the phone number was originally registered.
     */
    IsoCountryCode?: __string;
    /**
     * The phone number to retrieve information about. The phone number that you provide should include a valid numeric country code. Otherwise, the operation might result in an error.
     */
    PhoneNumber?: __string;
  }
  export interface NumberValidateResponse {
    /**
     * The carrier or service provider that the phone number is currently registered with. In some countries and regions, this value may be the carrier or service provider that the phone number was originally registered with.
     */
    Carrier?: __string;
    /**
     * The name of the city where the phone number was originally registered.
     */
    City?: __string;
    /**
     * The cleansed phone number, in E.164 format, for the location where the phone number was originally registered.
     */
    CleansedPhoneNumberE164?: __string;
    /**
     * The cleansed phone number, in the format for the location where the phone number was originally registered.
     */
    CleansedPhoneNumberNational?: __string;
    /**
     * The name of the country or region where the phone number was originally registered.
     */
    Country?: __string;
    /**
     * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region where the phone number was originally registered.
     */
    CountryCodeIso2?: __string;
    /**
     * The numeric code for the country or region where the phone number was originally registered.
     */
    CountryCodeNumeric?: __string;
    /**
     * The name of the county where the phone number was originally registered.
     */
    County?: __string;
    /**
     * The two-character code, in ISO 3166-1 alpha-2 format, that was sent in the request body.
     */
    OriginalCountryCodeIso2?: __string;
    /**
     * The phone number that was sent in the request body.
     */
    OriginalPhoneNumber?: __string;
    /**
     * The description of the phone type. Valid values are: MOBILE, LANDLINE, VOIP,
                  INVALID, PREPAID, and OTHER.
     */
    PhoneType?: __string;
    /**
     * The phone type, represented by an integer. Valid values are: 0 (mobile), 1 (landline), 2 (VoIP), 3 (invalid), 4 (other), and 5 (prepaid).
     */
    PhoneTypeCode?: __integer;
    /**
     * The time zone for the location where the phone number was originally registered.
     */
    Timezone?: __string;
    /**
     * The postal or ZIP code for the location where the phone number was originally registered.
     */
    ZipCode?: __string;
  }
  export interface PhoneNumberValidateRequest {
    NumberValidateRequest: NumberValidateRequest;
  }
  export interface PhoneNumberValidateResponse {
    NumberValidateResponse: NumberValidateResponse;
  }
  export interface PublicEndpoint {
    /**
     * The unique identifier for the recipient, such as a device token, email address, or mobile phone number.
     */
    Address?: __string;
    /**
     * One or more custom attributes that describe the endpoint by associating a name with an array of values. You can use these attributes as filter criteria when you create segments.
     */
    Attributes?: MapOfListOf__string;
    /**
     * The channel that's used when sending messages or push notifications to the endpoint.
     */
    ChannelType?: ChannelType;
    /**
     * The demographic information for the endpoint, such as the time zone and platform.
     */
    Demographic?: EndpointDemographic;
    /**
     * The date and time, in ISO 8601 format, when the endpoint was last updated.
     */
    EffectiveDate?: __string;
    /**
     * The status of the update request for the endpoint. Possible values are: INACTIVE, the update failed; and, ACTIVE, the endpoint was updated successfully.
     */
    EndpointStatus?: __string;
    /**
     * The geographic information for the endpoint.
     */
    Location?: EndpointLocation;
    /**
     * One or more custom metrics that your app reports to Amazon Pinpoint for the endpoint.
     */
    Metrics?: MapOf__double;
    /**
     * Specifies whether the user who's associated with the endpoint has opted out of receiving messages and push notifications from you. Possible values are: ALL, the user has opted out and doesn't want to receive any messages or push notifications; and, NONE, the user hasn't opted out and wants to receive all messages and push notifications.
     */
    OptOut?: __string;
    /**
     * A unique identifier that's generated each time the endpoint is updated.
     */
    RequestId?: __string;
    /**
     * One or more custom user attributes that your app reports to Amazon Pinpoint for the user who's associated with the endpoint.
     */
    User?: EndpointUser;
  }
  export interface PutEventStreamRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    WriteEventStream: WriteEventStream;
  }
  export interface PutEventStreamResponse {
    EventStream: EventStream;
  }
  export interface PutEventsRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    EventsRequest: EventsRequest;
  }
  export interface PutEventsResponse {
    EventsResponse: EventsResponse;
  }
  export interface QuietTime {
    /**
     * The specific time when quiet time ends. This value has to use 24-hour notation and be in HH:MM format, where HH is the hour (with a leading zero, if applicable) and MM is the minutes. For example, use 02:30 to represent 2:30 AM, or 14:30 to represent 2:30 PM.
     */
    End?: __string;
    /**
     * The specific time when quiet time begins. This value has to use 24-hour notation and be in HH:MM format, where HH is the hour (with a leading zero, if applicable) and MM is the minutes. For example, use 02:30 to represent 2:30 AM, or 14:30 to represent 2:30 PM.
     */
    Start?: __string;
  }
  export interface RawEmail {
    /**
     * The email message, represented as a raw MIME message. The entire message must be base64 encoded.
     */
    Data?: __blob;
  }
  export type __blob = Buffer|Uint8Array|Blob|string;
  export interface RecencyDimension {
    /**
     * The duration to use when determining whether an endpoint is active or inactive.
     */
    Duration: Duration;
    /**
     * The type of recency dimension to use for the segment. Valid values are: ACTIVE, endpoints that were active within the specified duration are included in the segment; and, INACTIVE, endpoints that weren't active within the specified duration are included in the segment.
     */
    RecencyType: RecencyType;
  }
  export type RecencyType = "ACTIVE"|"INACTIVE"|string;
  export interface RemoveAttributesRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    /**
     *  The type of attribute or attributes to remove. Valid values are: endpoint-custom-attributes - Custom attributes that describe endpoints, such as the date when an associated user opted in or out of receiving communications from you through a specific type of channel. endpoint-custom-metrics - Custom metrics that your app reports to Amazon Pinpoint for endpoints, such as the number of app sessions or the number of items left in a cart. endpoint-user-attributes - Custom attributes that describe users, such as first name, last name, and age.
     */
    AttributeType: __string;
    UpdateAttributesRequest: UpdateAttributesRequest;
  }
  export interface RemoveAttributesResponse {
    AttributesResource: AttributesResource;
  }
  export interface ResultRow {
    /**
     *  An array of objects that defines the field and field values that were used to group data in a result set that contains multiple results. This value is null if the data in a result set isn’t grouped.
     */
    GroupedBys: ListOfResultRowValue;
    /**
     *  An array of objects that provides pre-aggregated values for a standard metric that applies to an application or campaign.
     */
    Values: ListOfResultRowValue;
  }
  export interface ResultRowValue {
    /**
     *  The name of the field that Amazon Pinpoint uses to store the value specified by the Value property.
     */
    Key: __string;
    /**
     *  The data type of the value specified by the Value property.
     */
    Type: __string;
    /**
     *  In a Values object, the value for the metric that the query retrieved data for. In a GroupedBys object, the value for the field that was used to group data in a result set that contains multiple results (Values objects).
     */
    Value: __string;
  }
  export interface SMSChannelRequest {
    /**
     * Specifies whether to enable the SMS channel for the application.
     */
    Enabled?: __boolean;
    /**
     * The identity that you want to display on recipients' devices when they receive messages from the SMS channel.
     */
    SenderId?: __string;
    /**
     * The registered short code that you want to use when you send messages through the SMS channel.
     */
    ShortCode?: __string;
  }
  export interface SMSChannelResponse {
    /**
     * The unique identifier for the application that the SMS channel applies to.
     */
    ApplicationId?: __string;
    /**
     * The date and time, in ISO 8601 format, when the SMS channel was enabled.
     */
    CreationDate?: __string;
    /**
     * Specifies whether the SMS channel is enabled for the application.
     */
    Enabled?: __boolean;
    /**
     * (Not used) This property is retained only for backward compatibility.
     */
    HasCredential?: __boolean;
    /**
     * (Deprecated) An identifier for the SMS channel. This property is retained only for backward compatibility.
     */
    Id?: __string;
    /**
     * Specifies whether the SMS channel is archived.
     */
    IsArchived?: __boolean;
    /**
     * The user who last modified the SMS channel.
     */
    LastModifiedBy?: __string;
    /**
     * The date and time, in ISO 8601 format, when the SMS channel was last modified.
     */
    LastModifiedDate?: __string;
    /**
     * The type of messaging or notification platform for the channel. For the SMS channel, this value is SMS.
     */
    Platform: __string;
    /**
     * The maximum number of promotional messages that you can send through the SMS channel each second.
     */
    PromotionalMessagesPerSecond?: __integer;
    /**
     * The identity that displays on recipients' devices when they receive messages from the SMS channel.
     */
    SenderId?: __string;
    /**
     * The registered short code to use when you send messages through the SMS channel.
     */
    ShortCode?: __string;
    /**
     * The maximum number of transactional messages that you can send through the SMS channel each second.
     */
    TransactionalMessagesPerSecond?: __integer;
    /**
     * The current version of the SMS channel.
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
     * The SMS message type. Valid values are: TRANSACTIONAL, the message is critical or time-sensitive, such as a one-time password that supports a customer transaction; and, PROMOTIONAL, the message is not critical or time-sensitive, such as a marketing message.
     */
    MessageType?: MessageType;
    /**
     * The number that the SMS message originates from. This should be one of the dedicated long codes or short codes that you requested from AWS Support and is assigned to your AWS account. If you don't specify a long or short code, Amazon Pinpoint assigns a random long code to the SMS message.
     */
    OriginationNumber?: __string;
    /**
     * The sender ID to display as the sender of the message on a recipient's device. Support for sender IDs varies by country or region.
     */
    SenderId?: __string;
    /**
     * The message variables to use in the SMS message. You can override the default variables with individual address variables.
     */
    Substitutions?: MapOfListOf__string;
  }
  export interface Schedule {
    /**
     * The scheduled time, in ISO 8601 format, for the campaign to end.
     */
    EndTime?: __string;
    /**
     * The type of event that causes the campaign to be sent, if the value of the Frequency property is EVENT.
     */
    EventFilter?: CampaignEventFilter;
    /**
     * Specifies how often the campaign is sent or whether the campaign is sent in response to a specific event.
     */
    Frequency?: Frequency;
    /**
     * Specifies whether the start and end times for the campaign schedule use each recipient's local time. To base the schedule on each recipient's local time, set this value to true.
     */
    IsLocalTime?: __boolean;
    /**
     * The default quiet time for the campaign. Quiet time is a specific time range when a campaign doesn't send messages to endpoints, if all the following conditions are met: The EndpointDemographic.Timezone property of the endpoint is set to a valid value. The current time in the endpoint's time zone is later than or equal to the time specified by the QuietTime.Start property for the campaign. The current time in the endpoint's time zone is earlier than or equal to the time specified by the QuietTime.End property for the campaign. If any of the preceding conditions isn't met, the endpoint will receive messages from the campaign, even if quiet time is enabled.
     */
    QuietTime?: QuietTime;
    /**
     * The scheduled time, in ISO 8601 format, for the campaign to begin.
     */
    StartTime: __string;
    /**
     * The starting UTC offset for the campaign schedule, if the value of the IsLocalTime property is true. Valid values are: UTC, UTC+01, UTC+02, UTC+03, UTC+03:30, UTC+04, UTC+04:30, UTC+05,
                  UTC+05:30, UTC+05:45, UTC+06, UTC+06:30, UTC+07, UTC+08, UTC+09, UTC+09:30,
                  UTC+10, UTC+10:30, UTC+11, UTC+12, UTC+13, UTC-02, UTC-03, UTC-04, UTC-05, UTC-06,
                  UTC-07, UTC-08, UTC-09, UTC-10, and UTC-11.
     */
    Timezone?: __string;
  }
  export interface SegmentBehaviors {
    /**
     * The dimension settings that are based on how recently an endpoint was active.
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
     * One or more custom attributes to use as criteria for the segment.
     */
    Attributes?: MapOfAttributeDimension;
    /**
     * The behavior-based criteria, such as how recently users have used your app, for the segment.
     */
    Behavior?: SegmentBehaviors;
    /**
     * The demographic-based criteria, such as device platform, for the segment.
     */
    Demographic?: SegmentDemographics;
    /**
     * The location-based criteria, such as region or GPS coordinates, for the segment.
     */
    Location?: SegmentLocation;
    /**
     * One or more custom metrics to use as criteria for the segment.
     */
    Metrics?: MapOfMetricDimension;
    /**
     * One or more custom user attributes to use as criteria for the segment.
     */
    UserAttributes?: MapOfAttributeDimension;
  }
  export interface SegmentGroup {
    /**
     * An array that defines the dimensions for the segment.
     */
    Dimensions?: ListOfSegmentDimensions;
    /**
     * The base segment to build the segment on. A base segment, also referred to as a source segment, defines the initial population of endpoints for a segment. When you add dimensions to a segment, Amazon Pinpoint filters the base segment by using the dimensions that you specify. You can specify more than one dimensional segment or only one imported segment. If you specify an imported segment, the Amazon Pinpoint console displays a segment size estimate that indicates the size of the imported segment without any filters applied to it.
     */
    SourceSegments?: ListOfSegmentReference;
    /**
     * Specifies how to handle multiple base segments for the segment. For example, if you specify three base segments for the segment, whether the resulting segment is based on all, any, or none of the base segments.
     */
    SourceType?: SourceType;
    /**
     * Specifies how to handle multiple dimensions for the segment. For example, if you specify three dimensions for the segment, whether the resulting segment includes endpoints that match all, any, or none of the dimensions.
     */
    Type?: Type;
  }
  export interface SegmentGroupList {
    /**
     * An array that defines the set of segment criteria to evaluate when handling segment groups for the segment.
     */
    Groups?: ListOfSegmentGroup;
    /**
     * Specifies how to handle multiple segment groups for the segment. For example, if the segment includes three segment groups, whether the resulting segment includes endpoints that match all, any, or none of the segment groups.
     */
    Include?: Include;
  }
  export interface SegmentImportResource {
    /**
     * The number of channel types in the endpoint definitions that were imported to create the segment.
     */
    ChannelCounts?: MapOf__integer;
    /**
     * (Deprecated) Your AWS account ID, which you assigned to an external ID key in an IAM trust policy. Amazon Pinpoint previously used this value to assume an IAM role when importing endpoint definitions, but we removed this requirement. We don't recommend use of external IDs for IAM roles that are assumed by Amazon Pinpoint.
     */
    ExternalId: __string;
    /**
     * The format of the files that were imported to create the segment. Valid values are: CSV, for comma-separated values format; and, JSON, for newline-delimited JSON format.
     */
    Format: Format;
    /**
     * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorized Amazon Pinpoint to access the Amazon S3 location to import endpoint definitions from.
     */
    RoleArn: __string;
    /**
     * The URL of the Amazon Simple Storage Service (Amazon S3) bucket that the endpoint definitions were imported from to create the segment.
     */
    S3Url: __string;
    /**
     * The number of endpoint definitions that were imported successfully to create the segment.
     */
    Size: __integer;
  }
  export interface SegmentLocation {
    /**
     * The country or region code, in ISO 3166-1 alpha-2 format, for the segment.
     */
    Country?: SetDimension;
    /**
     * The GPS location and range for the segment.
     */
    GPSPoint?: GPSPointDimension;
  }
  export interface SegmentReference {
    /**
     * The unique identifier for the segment.
     */
    Id: __string;
    /**
     * The version number of the segment.
     */
    Version?: __integer;
  }
  export interface SegmentResponse {
    /**
     * The unique identifier for the application that the segment is associated with.
     */
    ApplicationId: __string;
    /**
     * The Amazon Resource Name (ARN) of the segment.
     */
    Arn: __string;
    /**
     * The date and time when the segment was created.
     */
    CreationDate: __string;
    /**
     * The dimension settings for the segment.
     */
    Dimensions?: SegmentDimensions;
    /**
     * The unique identifier for the segment.
     */
    Id: __string;
    /**
     * The settings for the import job that's associated with the segment.
     */
    ImportDefinition?: SegmentImportResource;
    /**
     * The date and time when the segment was last modified.
     */
    LastModifiedDate?: __string;
    /**
     * The name of the segment.
     */
    Name?: __string;
    /**
     * A list of one or more segment groups that apply to the segment. Each segment group consists of zero or more base segments and the dimensions that are applied to those base segments.
     */
    SegmentGroups?: SegmentGroupList;
    /**
     * The segment type. Valid values are: DIMENSIONAL - A dynamic segment, which is a segment that uses selection criteria that you specify and is based on endpoint data that's reported by your app. Dynamic segments can change over time. IMPORT - A static segment, which is a segment that uses selection criteria that you specify and is based on endpoint definitions that you import from a file. Imported segments are static; they don't change over time.
     */
    SegmentType: SegmentType;
    /**
     * A string-to-string map of key-value pairs that identifies the tags that are associated with the segment. Each tag consists of a required tag key and an associated tag value.
     */
    tags?: MapOf__string;
    /**
     * The version number of the segment.
     */
    Version?: __integer;
  }
  export type SegmentType = "DIMENSIONAL"|"IMPORT"|string;
  export interface SegmentsResponse {
    /**
     * An array of responses, one for each segment that's associated with the application (Segments resource) or each version of a segment that's associated with the application (Segment Versions resource).
     */
    Item: ListOfSegmentResponse;
    /**
     * The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.
     */
    NextToken?: __string;
  }
  export interface SendMessagesRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    MessageRequest: MessageRequest;
  }
  export interface SendMessagesResponse {
    MessageResponse: MessageResponse;
  }
  export interface SendUsersMessageRequest {
    /**
     * A map of custom attribute-value pairs. For a push notification, Amazon Pinpoint adds these attributes to the data.pinpoint object in the body of the notification payload. Amazon Pinpoint also provides these attributes in the events that it generates for users-messages deliveries.
     */
    Context?: MapOf__string;
    /**
     * The message definitions for the default message and any default messages that you defined for specific channels.
     */
    MessageConfiguration: DirectMessageConfiguration;
    /**
     * The unique identifier for tracing the message. This identifier is visible to message recipients.
     */
    TraceId?: __string;
    /**
     * A map that associates user IDs with EndpointSendConfiguration objects. You can use an EndpointSendConfiguration object to tailor the message for a user by specifying settings such as content overrides and message variables.
     */
    Users: MapOfEndpointSendConfiguration;
  }
  export interface SendUsersMessageResponse {
    /**
     * The unique identifier for the application that was used to send the message.
     */
    ApplicationId: __string;
    /**
     * The unique identifier that was assigned to the message request.
     */
    RequestId?: __string;
    /**
     * An object that indicates which endpoints the message was sent to, for each user. The object lists user IDs and, for each user ID, provides the endpoint IDs that the message was sent to. For each endpoint ID, it provides an EndpointMessageResult object.
     */
    Result?: MapOfMapOfEndpointMessageResult;
  }
  export interface SendUsersMessagesRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    SendUsersMessageRequest: SendUsersMessageRequest;
  }
  export interface SendUsersMessagesResponse {
    SendUsersMessageResponse: SendUsersMessageResponse;
  }
  export interface Session {
    /**
     * The duration of the session, in milliseconds.
     */
    Duration?: __integer;
    /**
     * The unique identifier for the session.
     */
    Id: __string;
    /**
     * The date and time when the session began.
     */
    StartTimestamp: __string;
    /**
     * The date and time when the session ended.
     */
    StopTimestamp?: __string;
  }
  export interface SetDimension {
    /**
     * The type of segment dimension to use. Valid values are: INCLUSIVE, endpoints that match the criteria are included in the segment; and, EXCLUSIVE, endpoints that match the criteria are excluded from the segment.
     */
    DimensionType?: DimensionType;
    /**
     * The criteria values to use for the segment dimension. Depending on the value of the DimensionType property, endpoints are included or excluded from the segment if their values match the criteria values.
     */
    Values: ListOf__string;
  }
  export interface SimpleEmail {
    /**
     * The body of the email message, in HTML format. We recommend using an HTML part for email clients that support HTML. You can include links, formatted text, and more in an HTML message.
     */
    HtmlPart?: SimpleEmailPart;
    /**
     * The subject line, or title, of the email.
     */
    Subject?: SimpleEmailPart;
    /**
     * The body of the email message, in text format. We recommend using a text part for email clients that don't support HTML and clients that are connected to high-latency networks, such as mobile devices.
     */
    TextPart?: SimpleEmailPart;
  }
  export interface SimpleEmailPart {
    /**
     * The applicable character set for the message content.
     */
    Charset?: __string;
    /**
     * The textual data of the message content.
     */
    Data?: __string;
  }
  export type SourceType = "ALL"|"ANY"|"NONE"|string;
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the application, campaign, or segment.
     */
    ResourceArn: __string;
    TagsModel: TagsModel;
  }
  export interface TagsModel {
    /**
     * A string-to-string map of key-value pairs that defines the tags for an application, campaign, or segment. A project, campaign, or segment can have a maximum of 50 tags. Each tag consists of a required tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.
     */
    tags: MapOf__string;
  }
  export interface TreatmentResource {
    /**
     * The unique identifier for the treatment.
     */
    Id: __string;
    /**
     * The message configuration settings for the treatment.
     */
    MessageConfiguration?: MessageConfiguration;
    /**
     * The schedule settings for the treatment.
     */
    Schedule?: Schedule;
    /**
     * The allocated percentage of users (segment members) that the treatment is sent to.
     */
    SizePercent: __integer;
    /**
     * The status of the treatment.
     */
    State?: CampaignState;
    /**
     * The custom description of the treatment.
     */
    TreatmentDescription?: __string;
    /**
     * The custom name of the treatment. A treatment is a variation of a campaign that's used for A/B testing of a campaign.
     */
    TreatmentName?: __string;
  }
  export type Type = "ALL"|"ANY"|"NONE"|string;
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the application, campaign, or segment.
     */
    ResourceArn: __string;
    /**
     * The key of the tag to remove from the application, campaign, or segment. To remove multiple tags, append the tagKeys parameter and argument for each additional tag to remove, separated by an ampersand (&amp;).
     */
    TagKeys: ListOf__string;
  }
  export interface UpdateAdmChannelRequest {
    ADMChannelRequest: ADMChannelRequest;
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
  }
  export interface UpdateAdmChannelResponse {
    ADMChannelResponse: ADMChannelResponse;
  }
  export interface UpdateApnsChannelRequest {
    APNSChannelRequest: APNSChannelRequest;
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
  }
  export interface UpdateApnsChannelResponse {
    APNSChannelResponse: APNSChannelResponse;
  }
  export interface UpdateApnsSandboxChannelRequest {
    APNSSandboxChannelRequest: APNSSandboxChannelRequest;
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
  }
  export interface UpdateApnsSandboxChannelResponse {
    APNSSandboxChannelResponse: APNSSandboxChannelResponse;
  }
  export interface UpdateApnsVoipChannelRequest {
    APNSVoipChannelRequest: APNSVoipChannelRequest;
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
  }
  export interface UpdateApnsVoipChannelResponse {
    APNSVoipChannelResponse: APNSVoipChannelResponse;
  }
  export interface UpdateApnsVoipSandboxChannelRequest {
    APNSVoipSandboxChannelRequest: APNSVoipSandboxChannelRequest;
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
  }
  export interface UpdateApnsVoipSandboxChannelResponse {
    APNSVoipSandboxChannelResponse: APNSVoipSandboxChannelResponse;
  }
  export interface UpdateApplicationSettingsRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    WriteApplicationSettingsRequest: WriteApplicationSettingsRequest;
  }
  export interface UpdateApplicationSettingsResponse {
    ApplicationSettingsResource: ApplicationSettingsResource;
  }
  export interface UpdateAttributesRequest {
    /**
     * An array of the attributes to remove from all the endpoints that are associated with the application. The array can specify the complete, exact name of each attribute to remove or it can specify a glob pattern that an attribute name must match in order for the attribute to be removed.
     */
    Blacklist?: ListOf__string;
  }
  export interface UpdateBaiduChannelRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    BaiduChannelRequest: BaiduChannelRequest;
  }
  export interface UpdateBaiduChannelResponse {
    BaiduChannelResponse: BaiduChannelResponse;
  }
  export interface UpdateCampaignRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    /**
     * The unique identifier for the campaign.
     */
    CampaignId: __string;
    WriteCampaignRequest: WriteCampaignRequest;
  }
  export interface UpdateCampaignResponse {
    CampaignResponse: CampaignResponse;
  }
  export interface UpdateEmailChannelRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    EmailChannelRequest: EmailChannelRequest;
  }
  export interface UpdateEmailChannelResponse {
    EmailChannelResponse: EmailChannelResponse;
  }
  export interface UpdateEndpointRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    /**
     * The unique identifier for the endpoint.
     */
    EndpointId: __string;
    EndpointRequest: EndpointRequest;
  }
  export interface UpdateEndpointResponse {
    MessageBody: MessageBody;
  }
  export interface UpdateEndpointsBatchRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    EndpointBatchRequest: EndpointBatchRequest;
  }
  export interface UpdateEndpointsBatchResponse {
    MessageBody: MessageBody;
  }
  export interface UpdateGcmChannelRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    GCMChannelRequest: GCMChannelRequest;
  }
  export interface UpdateGcmChannelResponse {
    GCMChannelResponse: GCMChannelResponse;
  }
  export interface UpdateSegmentRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    /**
     * The unique identifier for the segment.
     */
    SegmentId: __string;
    WriteSegmentRequest: WriteSegmentRequest;
  }
  export interface UpdateSegmentResponse {
    SegmentResponse: SegmentResponse;
  }
  export interface UpdateSmsChannelRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    SMSChannelRequest: SMSChannelRequest;
  }
  export interface UpdateSmsChannelResponse {
    SMSChannelResponse: SMSChannelResponse;
  }
  export interface UpdateVoiceChannelRequest {
    /**
     * The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.
     */
    ApplicationId: __string;
    VoiceChannelRequest: VoiceChannelRequest;
  }
  export interface UpdateVoiceChannelResponse {
    VoiceChannelResponse: VoiceChannelResponse;
  }
  export interface VoiceChannelRequest {
    /**
     * Specifies whether to enable the voice channel for the application.
     */
    Enabled?: __boolean;
  }
  export interface VoiceChannelResponse {
    /**
     * The unique identifier for the application that the voice channel applies to.
     */
    ApplicationId?: __string;
    /**
     * The date and time, in ISO 8601 format, when the voice channel was enabled.
     */
    CreationDate?: __string;
    /**
     * Specifies whether the voice channel is enabled for the application.
     */
    Enabled?: __boolean;
    /**
     * (Not used) This property is retained only for backward compatibility.
     */
    HasCredential?: __boolean;
    /**
     * (Deprecated) An identifier for the voice channel. This property is retained only for backward compatibility.
     */
    Id?: __string;
    /**
     * Specifies whether the voice channel is archived.
     */
    IsArchived?: __boolean;
    /**
     * The user who last modified the voice channel.
     */
    LastModifiedBy?: __string;
    /**
     * The date and time, in ISO 8601 format, when the voice channel was last modified.
     */
    LastModifiedDate?: __string;
    /**
     * The type of messaging or notification platform for the channel. For the voice channel, this value is VOICE.
     */
    Platform: __string;
    /**
     * The current version of the voice channel.
     */
    Version?: __integer;
  }
  export interface VoiceMessage {
    /**
     * The text script for the voice message.
     */
    Body?: __string;
    /**
     * The language to use when delivering the message. For a list of supported languages, see the Amazon Polly Developer Guide.
     */
    LanguageCode?: __string;
    /**
     * The phone number from the pool or messaging service to send the message from. Although it isn't required, we recommend that you specify the phone number in E.164 format to ensure prompt and accurate delivery.
     */
    OriginationNumber?: __string;
    /**
     * The default message variables to use in the voice message. You can override the default variables with individual address variables.
     */
    Substitutions?: MapOfListOf__string;
    /**
     * The name of the voice to use when delivering the message. For a list of supported voices, see the Amazon Polly Developer Guide.
     */
    VoiceId?: __string;
  }
  export interface WriteApplicationSettingsRequest {
    /**
     * The settings for the AWS Lambda function to use by default as a code hook for campaigns in the application. To override these settings for a specific campaign, use the Campaign resource to define custom Lambda function settings for the campaign.
     */
    CampaignHook?: CampaignHook;
    /**
     * Specifies whether to enable application-related alarms in Amazon CloudWatch.
     */
    CloudWatchMetricsEnabled?: __boolean;
    /**
     * The default sending limits for campaigns in the application. To override these limits for a specific campaign, use the Campaign resource to define custom limits for the campaign.
     */
    Limits?: CampaignLimits;
    /**
     * The default quiet time for campaigns in the application. Quiet time is a specific time range when campaigns don't send messages to endpoints, if all the following conditions are met: The EndpointDemographic.Timezone property of the endpoint is set to a valid value. The current time in the endpoint's time zone is later than or equal to the time specified by the QuietTime.Start property for the application (or a campaign that has custom quiet time settings). The current time in the endpoint's time zone is earlier than or equal to the time specified by the QuietTime.End property for the application (or a campaign that has custom quiet time settings). If any of the preceding conditions isn't met, the endpoint will receive messages from a campaign, even if quiet time is enabled. To override the default quiet time settings for a specific campaign, use the Campaign resource to define a custom quiet time for the campaign.
     */
    QuietTime?: QuietTime;
  }
  export interface WriteCampaignRequest {
    /**
     * An array of requests that defines additional treatments for the campaign, in addition to the default treatment for the campaign.
     */
    AdditionalTreatments?: ListOfWriteTreatmentResource;
    /**
     * The custom description of the campaign.
     */
    Description?: __string;
    /**
     * The allocated percentage of users (segment members) who shouldn't receive messages from the campaign.
     */
    HoldoutPercent?: __integer;
    /**
     * The settings for the AWS Lambda function to use as a code hook for the campaign.
     */
    Hook?: CampaignHook;
    /**
     * Specifies whether to pause the campaign. A paused campaign doesn't run unless you resume it by setting this value to false.
     */
    IsPaused?: __boolean;
    /**
     * The messaging limits for the campaign.
     */
    Limits?: CampaignLimits;
    /**
     * The message configuration settings for the campaign.
     */
    MessageConfiguration?: MessageConfiguration;
    /**
     * The custom name of the campaign.
     */
    Name?: __string;
    /**
     * The schedule settings for the campaign.
     */
    Schedule?: Schedule;
    /**
     * The unique identifier for the segment to associate with the campaign.
     */
    SegmentId?: __string;
    /**
     * The version of the segment to associate with the campaign.
     */
    SegmentVersion?: __integer;
    /**
     * A string-to-string map of key-value pairs that defines the tags to associate with the campaign. Each tag consists of a required tag key and an associated tag value.
     */
    tags?: MapOf__string;
    /**
     * The custom description of a variation of the campaign to use for A/B testing.
     */
    TreatmentDescription?: __string;
    /**
     * The custom name of a variation of the campaign to use for A/B testing.
     */
    TreatmentName?: __string;
  }
  export interface WriteEventStream {
    /**
     * The Amazon Resource Name (ARN) of the Amazon Kinesis data stream or Amazon Kinesis Data Firehose delivery stream that you want to publish event data to. For a Kinesis data stream, the ARN format is: arn:aws:kinesis:region:account-id:stream/stream_name
                For a Kinesis Data Firehose delivery stream, the ARN format is: arn:aws:firehose:region:account-id:deliverystream/stream_name
               
     */
    DestinationStreamArn: __string;
    /**
     * The AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to publish event data to the stream in your AWS account.
     */
    RoleArn: __string;
  }
  export interface WriteSegmentRequest {
    /**
     * The criteria that define the dimensions for the segment.
     */
    Dimensions?: SegmentDimensions;
    /**
     * The name of the segment.
     */
    Name?: __string;
    /**
     * The segment group to use and the dimensions to apply to the group's base segments in order to build the segment. A segment group can consist of zero or more base segments. Your request can include only one segment group.
     */
    SegmentGroups?: SegmentGroupList;
    /**
     * A string-to-string map of key-value pairs that defines the tags to associate with the segment. Each tag consists of a required tag key and an associated tag value.
     */
    tags?: MapOf__string;
  }
  export interface WriteTreatmentResource {
    /**
     * The message configuration settings for the treatment.
     */
    MessageConfiguration?: MessageConfiguration;
    /**
     * The schedule settings for the treatment.
     */
    Schedule?: Schedule;
    /**
     * The allocated percentage of users (segment members) to send the treatment to.
     */
    SizePercent: __integer;
    /**
     * The custom description of the treatment.
     */
    TreatmentDescription?: __string;
    /**
     * The custom name of the treatment. A treatment is a variation of a campaign that's used for A/B testing of a campaign.
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
  export type ListOfResultRow = ResultRow[];
  export type ListOfResultRowValue = ResultRowValue[];
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
  export type MapOfEvent = {[key: string]: Event};
  export type MapOfEventItemResponse = {[key: string]: EventItemResponse};
  export type MapOfEventsBatch = {[key: string]: EventsBatch};
  export type MapOfItemResponse = {[key: string]: ItemResponse};
  export type MapOfMessageResult = {[key: string]: MessageResult};
  export type MapOfMetricDimension = {[key: string]: MetricDimension};
  export type MapOf__double = {[key: string]: __double};
  export type MapOf__integer = {[key: string]: __integer};
  export type MapOfListOf__string = {[key: string]: ListOf__string};
  export type MapOfMapOfEndpointMessageResult = {[key: string]: MapOfEndpointMessageResult};
  export type MapOf__string = {[key: string]: __string};
  export type __string = string;
  export type __timestampIso8601 = Date;
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
