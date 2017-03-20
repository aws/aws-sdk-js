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
   * Creates or updates a campaign.
   */
  createCampaign(params: Pinpoint.Types.CreateCampaignRequest, callback?: (err: AWSError, data: Pinpoint.Types.CreateCampaignResponse) => void): Request<Pinpoint.Types.CreateCampaignResponse, AWSError>;
  /**
   * Creates or updates a campaign.
   */
  createCampaign(callback?: (err: AWSError, data: Pinpoint.Types.CreateCampaignResponse) => void): Request<Pinpoint.Types.CreateCampaignResponse, AWSError>;
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
   * Deletes the APNs channel for an app.
   */
  deleteApnsChannel(params: Pinpoint.Types.DeleteApnsChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.DeleteApnsChannelResponse) => void): Request<Pinpoint.Types.DeleteApnsChannelResponse, AWSError>;
  /**
   * Deletes the APNs channel for an app.
   */
  deleteApnsChannel(callback?: (err: AWSError, data: Pinpoint.Types.DeleteApnsChannelResponse) => void): Request<Pinpoint.Types.DeleteApnsChannelResponse, AWSError>;
  /**
   * Deletes a campaign.
   */
  deleteCampaign(params: Pinpoint.Types.DeleteCampaignRequest, callback?: (err: AWSError, data: Pinpoint.Types.DeleteCampaignResponse) => void): Request<Pinpoint.Types.DeleteCampaignResponse, AWSError>;
  /**
   * Deletes a campaign.
   */
  deleteCampaign(callback?: (err: AWSError, data: Pinpoint.Types.DeleteCampaignResponse) => void): Request<Pinpoint.Types.DeleteCampaignResponse, AWSError>;
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
   * Returns information about the APNs channel for an app.
   */
  getApnsChannel(params: Pinpoint.Types.GetApnsChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetApnsChannelResponse) => void): Request<Pinpoint.Types.GetApnsChannelResponse, AWSError>;
  /**
   * Returns information about the APNs channel for an app.
   */
  getApnsChannel(callback?: (err: AWSError, data: Pinpoint.Types.GetApnsChannelResponse) => void): Request<Pinpoint.Types.GetApnsChannelResponse, AWSError>;
  /**
   * Used to request the settings for an app.
   */
  getApplicationSettings(params: Pinpoint.Types.GetApplicationSettingsRequest, callback?: (err: AWSError, data: Pinpoint.Types.GetApplicationSettingsResponse) => void): Request<Pinpoint.Types.GetApplicationSettingsResponse, AWSError>;
  /**
   * Used to request the settings for an app.
   */
  getApplicationSettings(callback?: (err: AWSError, data: Pinpoint.Types.GetApplicationSettingsResponse) => void): Request<Pinpoint.Types.GetApplicationSettingsResponse, AWSError>;
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
   * Use to create or update the event stream for an app.
   */
  putEventStream(params: Pinpoint.Types.PutEventStreamRequest, callback?: (err: AWSError, data: Pinpoint.Types.PutEventStreamResponse) => void): Request<Pinpoint.Types.PutEventStreamResponse, AWSError>;
  /**
   * Use to create or update the event stream for an app.
   */
  putEventStream(callback?: (err: AWSError, data: Pinpoint.Types.PutEventStreamResponse) => void): Request<Pinpoint.Types.PutEventStreamResponse, AWSError>;
  /**
   * Use to update the APNs channel for an app.
   */
  updateApnsChannel(params: Pinpoint.Types.UpdateApnsChannelRequest, callback?: (err: AWSError, data: Pinpoint.Types.UpdateApnsChannelResponse) => void): Request<Pinpoint.Types.UpdateApnsChannelResponse, AWSError>;
  /**
   * Use to update the APNs channel for an app.
   */
  updateApnsChannel(callback?: (err: AWSError, data: Pinpoint.Types.UpdateApnsChannelResponse) => void): Request<Pinpoint.Types.UpdateApnsChannelResponse, AWSError>;
  /**
   * Used to update the settings for an app.
   */
  updateApplicationSettings(params: Pinpoint.Types.UpdateApplicationSettingsRequest, callback?: (err: AWSError, data: Pinpoint.Types.UpdateApplicationSettingsResponse) => void): Request<Pinpoint.Types.UpdateApplicationSettingsResponse, AWSError>;
  /**
   * Used to update the settings for an app.
   */
  updateApplicationSettings(callback?: (err: AWSError, data: Pinpoint.Types.UpdateApplicationSettingsResponse) => void): Request<Pinpoint.Types.UpdateApplicationSettingsResponse, AWSError>;
  /**
   * Use to update a campaign.
   */
  updateCampaign(params: Pinpoint.Types.UpdateCampaignRequest, callback?: (err: AWSError, data: Pinpoint.Types.UpdateCampaignResponse) => void): Request<Pinpoint.Types.UpdateCampaignResponse, AWSError>;
  /**
   * Use to update a campaign.
   */
  updateCampaign(callback?: (err: AWSError, data: Pinpoint.Types.UpdateCampaignResponse) => void): Request<Pinpoint.Types.UpdateCampaignResponse, AWSError>;
  /**
   * Use to update an endpoint.
   */
  updateEndpoint(params: Pinpoint.Types.UpdateEndpointRequest, callback?: (err: AWSError, data: Pinpoint.Types.UpdateEndpointResponse) => void): Request<Pinpoint.Types.UpdateEndpointResponse, AWSError>;
  /**
   * Use to update an endpoint.
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
}
declare namespace Pinpoint {
  export interface APNSChannelRequest {
    /**
     * The distribution certificate from Apple.
     */
    Certificate?: __string;
    /**
     * The certificate private key.
     */
    PrivateKey?: __string;
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
     * The unique channel ID.
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
  export interface ApplicationSettingsResource {
    /**
     * The unique ID for the application.
     */
    ApplicationId?: __string;
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
  export interface AttributeDimension {
    /**
     * The type of dimension:
INCLUSIVE – Endpoints that match the criteria are included in the segment.
EXCLUSIVE – Endpoints that match the criteria are excluded from the segment.
     */
    AttributeType?: AttributeType;
    /**
     * The criteria values for the segment dimension. Endpoints with matching attribute values are included or excluded from the segment, depending on the setting for Type.
     */
    Values?: ListOf__string;
  }
  export type AttributeType = "INCLUSIVE"|"EXCLUSIVE"|string;
  export interface CampaignLimits {
    /**
     * The maximum number of messages that the campaign can send daily.
     */
    Daily?: __integer;
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
  export interface CampaignState {
    /**
     * The status of the campaign, or the status of a treatment that belongs to an A/B test campaign.

Valid values: SCHEDULED, EXECUTING, PENDING_NEXT_RUN, COMPLETED, PAUSED
     */
    CampaignStatus?: CampaignStatus;
  }
  export type CampaignStatus = "SCHEDULED"|"EXECUTING"|"PENDING_NEXT_RUN"|"COMPLETED"|"PAUSED"|string;
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
  export type ChannelType = "APNS"|"GCM"|string;
  export interface CreateCampaignRequest {
    ApplicationId: __string;
    WriteCampaignRequest: WriteCampaignRequest;
  }
  export interface CreateCampaignResponse {
    CampaignResponse: CampaignResponse;
  }
  export interface CreateImportJobRequest {
    ApplicationId: __string;
    ImportJobRequest: ImportJobRequest;
  }
  export interface CreateImportJobResponse {
    ImportJobResponse: ImportJobResponse;
  }
  export interface CreateSegmentRequest {
    ApplicationId: __string;
    WriteSegmentRequest: WriteSegmentRequest;
  }
  export interface CreateSegmentResponse {
    SegmentResponse: SegmentResponse;
  }
  export interface DeleteApnsChannelRequest {
    ApplicationId: __string;
  }
  export interface DeleteApnsChannelResponse {
    APNSChannelResponse: APNSChannelResponse;
  }
  export interface DeleteCampaignRequest {
    ApplicationId: __string;
    CampaignId: __string;
  }
  export interface DeleteCampaignResponse {
    CampaignResponse: CampaignResponse;
  }
  export interface DeleteEventStreamRequest {
    /**
     * ApplicationId
     */
    ApplicationId: __string;
  }
  export interface DeleteEventStreamResponse {
    EventStream: EventStream;
  }
  export interface DeleteGcmChannelRequest {
    ApplicationId: __string;
  }
  export interface DeleteGcmChannelResponse {
    GCMChannelResponse: GCMChannelResponse;
  }
  export interface DeleteSegmentRequest {
    ApplicationId: __string;
    SegmentId: __string;
  }
  export interface DeleteSegmentResponse {
    SegmentResponse: SegmentResponse;
  }
  export type DimensionType = "INCLUSIVE"|"EXCLUSIVE"|string;
  export type Duration = "HR_24"|"DAY_7"|"DAY_14"|"DAY_30"|string;
  export interface EndpointBatchItem {
    /**
     * The address or token of the endpoint as provided by your push provider (e.g. DeviceToken or RegistrationId).
     */
    Address?: __string;
    /**
     * Custom attributes that your app reports to Amazon Pinpoint. You can use these attributes as selection criteria when you create a segment.
     */
    Attributes?: MapOfListOf__string;
    /**
     * The channel type.

Valid values: APNS, GCM
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
     * The endpoint status. Can be either ACTIVE or INACTIVE. Will be set to INACTIVE if a delivery fails. Will be set to ACTIVE if the address is updated.
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

ALL – User receives all messages.
NONE – User receives no messages.
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
  export interface EndpointRequest {
    /**
     * The address or token of the endpoint as provided by your push provider (e.g. DeviceToken or RegistrationId).
     */
    Address?: __string;
    /**
     * Custom attributes that your app reports to Amazon Pinpoint. You can use these attributes as selection criteria when you create a segment.
     */
    Attributes?: MapOfListOf__string;
    /**
     * The channel type.

Valid values: APNS, GCM
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
     * The endpoint status. Can be either ACTIVE or INACTIVE. Will be set to INACTIVE if a delivery fails. Will be set to ACTIVE if the address is updated.
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

ALL – User receives all messages.
NONE – User receives no messages.
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
     * Custom attributes that your app reports to Amazon Pinpoint. You can use these attributes as selection criteria when you create a segment.
     */
    Attributes?: MapOfListOf__string;
    /**
     * The channel type.

Valid values: APNS, GCM
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
     * The endpoint status. Can be either ACTIVE or INACTIVE. Will be set to INACTIVE if a delivery fails. Will be set to ACTIVE if the address is updated.
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

ALL – User receives all messages.
NONE – User receives no messages.
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
    /**
     * The ShardId of endpoint
     */
    ShardId?: __string;
  }
  export interface EndpointUser {
    /**
     * Custom attributes specific to the user.
     */
    UserAttributes?: MapOfListOf__string;
    /**
     * The unique ID of the user.
     */
    UserId?: __string;
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
     * The external ID assigned the IAM role that authorizes Amazon Pinpoint to publish to the stream.
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
  export type Format = "CSV"|"JSON"|string;
  export type Frequency = "ONCE"|"HOURLY"|"DAILY"|"WEEKLY"|"MONTHLY"|string;
  export interface GCMChannelRequest {
    /**
     * Platform credential API key from Google.
     */
    ApiKey?: __string;
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
     * The unique channel ID.
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
  export interface GetApnsChannelRequest {
    ApplicationId: __string;
  }
  export interface GetApnsChannelResponse {
    APNSChannelResponse: APNSChannelResponse;
  }
  export interface GetApplicationSettingsRequest {
    ApplicationId: __string;
  }
  export interface GetApplicationSettingsResponse {
    ApplicationSettingsResource: ApplicationSettingsResource;
  }
  export interface GetCampaignActivitiesRequest {
    ApplicationId: __string;
    CampaignId: __string;
    PageSize?: __string;
    Token?: __string;
  }
  export interface GetCampaignActivitiesResponse {
    ActivitiesResponse: ActivitiesResponse;
  }
  export interface GetCampaignRequest {
    ApplicationId: __string;
    CampaignId: __string;
  }
  export interface GetCampaignResponse {
    CampaignResponse: CampaignResponse;
  }
  export interface GetCampaignVersionRequest {
    ApplicationId: __string;
    CampaignId: __string;
    Version: __string;
  }
  export interface GetCampaignVersionResponse {
    CampaignResponse: CampaignResponse;
  }
  export interface GetCampaignVersionsRequest {
    ApplicationId: __string;
    CampaignId: __string;
    PageSize?: __string;
    Token?: __string;
  }
  export interface GetCampaignVersionsResponse {
    CampaignsResponse: CampaignsResponse;
  }
  export interface GetCampaignsRequest {
    ApplicationId: __string;
    PageSize?: __string;
    Token?: __string;
  }
  export interface GetCampaignsResponse {
    CampaignsResponse: CampaignsResponse;
  }
  export interface GetEndpointRequest {
    ApplicationId: __string;
    EndpointId: __string;
  }
  export interface GetEndpointResponse {
    EndpointResponse: EndpointResponse;
  }
  export interface GetEventStreamRequest {
    /**
     * ApplicationId
     */
    ApplicationId: __string;
  }
  export interface GetEventStreamResponse {
    EventStream: EventStream;
  }
  export interface GetGcmChannelRequest {
    ApplicationId: __string;
  }
  export interface GetGcmChannelResponse {
    GCMChannelResponse: GCMChannelResponse;
  }
  export interface GetImportJobRequest {
    ApplicationId: __string;
    JobId: __string;
  }
  export interface GetImportJobResponse {
    ImportJobResponse: ImportJobResponse;
  }
  export interface GetImportJobsRequest {
    ApplicationId: __string;
    PageSize?: __string;
    Token?: __string;
  }
  export interface GetImportJobsResponse {
    ImportJobsResponse: ImportJobsResponse;
  }
  export interface GetSegmentImportJobsRequest {
    ApplicationId: __string;
    PageSize?: __string;
    SegmentId: __string;
    Token?: __string;
  }
  export interface GetSegmentImportJobsResponse {
    ImportJobsResponse: ImportJobsResponse;
  }
  export interface GetSegmentRequest {
    ApplicationId: __string;
    SegmentId: __string;
  }
  export interface GetSegmentResponse {
    SegmentResponse: SegmentResponse;
  }
  export interface GetSegmentVersionRequest {
    ApplicationId: __string;
    SegmentId: __string;
    Version: __string;
  }
  export interface GetSegmentVersionResponse {
    SegmentResponse: SegmentResponse;
  }
  export interface GetSegmentVersionsRequest {
    ApplicationId: __string;
    PageSize?: __string;
    SegmentId: __string;
    Token?: __string;
  }
  export interface GetSegmentVersionsResponse {
    SegmentsResponse: SegmentsResponse;
  }
  export interface GetSegmentsRequest {
    ApplicationId: __string;
    PageSize?: __string;
    Token?: __string;
  }
  export interface GetSegmentsResponse {
    SegmentsResponse: SegmentsResponse;
  }
  export interface ImportJobRequest {
    /**
     * Sets whether the endpoints create a segment when they are imported.
     */
    DefineSegment?: __boolean;
    /**
     * A unique, custom ID assigned to the IAM role that restricts who can assume the role.	
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
     * A unique, custom ID assigned to the IAM role that restricts who can assume the role.	
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
  export type JobStatus = "CREATED"|"INITIALIZING"|"PROCESSING"|"COMPLETING"|"COMPLETED"|"FAILING"|"FAILED"|string;
  export type ListOfActivityResponse = ActivityResponse[];
  export type ListOfCampaignResponse = CampaignResponse[];
  export type ListOfEndpointBatchItem = EndpointBatchItem[];
  export type ListOfImportJobResponse = ImportJobResponse[];
  export type ListOfSegmentResponse = SegmentResponse[];
  export type ListOfTreatmentResource = TreatmentResource[];
  export type ListOfWriteTreatmentResource = WriteTreatmentResource[];
  export type ListOf__string = __string[];
  export type MapOfAttributeDimension = {[key: string]: AttributeDimension};
  export type MapOfListOf__string = {[key: string]: ListOf__string};
  export type MapOf__double = {[key: string]: __double};
  export interface Message {
    /**
     * The action that occurs if the user taps a push notification delivered by the campaign:
OPEN_APP – Your app launches, or it becomes the foreground app if it has been sent to the background. This is the default action.

DEEP_LINK – Uses deep linking features in iOS and Android to open your app and display a designated user interface within the app.

URL – The default mobile browser on the user's device launches and opens a web page at the URL you specify.
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
     * Indicates if the message should display on the users device.

Silent pushes can be used for Remote Configuration and Phone Home use cases. 
     */
    SilentPush?: __boolean;
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
     * The error message returned from the API.
     */
    Message?: __string;
    /**
     * The unique message body ID.
     */
    RequestID?: __string;
  }
  export interface MessageConfiguration {
    /**
     * The message that the campaign delivers to APNS channels. Overrides the default message.
     */
    APNSMessage?: Message;
    /**
     * The default message for all channels.
     */
    DefaultMessage?: Message;
    /**
     * The message that the campaign delivers to GCM channels. Overrides the default message.
     */
    GCMMessage?: Message;
  }
  export interface PutEventStreamRequest {
    /**
     * ApplicationId
     */
    ApplicationId: __string;
    /**
     * EventStream to write.
     */
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
ACTIVE – Users who have used your app within the specified duration are included in the segment.
INACTIVE – Users who have not used your app within the specified duration are included in the segment.
     */
    RecencyType?: RecencyType;
  }
  export type RecencyType = "ACTIVE"|"INACTIVE"|string;
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
     * Custom segment user attributes.
     */
    UserAttributes?: MapOfAttributeDimension;
  }
  export interface SegmentImportResource {
    /**
     * A unique, custom ID assigned to the IAM role that restricts who can assume the role.
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
     * The segment type:
DIMENSIONAL – A dynamic segment built from selection criteria based on endpoint data reported by your app. You create this type of segment by using the segment builder in the Amazon Pinpoint console or by making a POST request to the segments resource.
IMPORT – A static segment built from an imported set of endpoint definitions. You create this type of segment by importing a segment in the Amazon Pinpoint console or by making a POST request to the jobs/import resource.
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
  export interface SetDimension {
    /**
     * The type of dimension:
INCLUSIVE – Endpoints that match the criteria are included in the segment.
EXCLUSIVE – Endpoints that match the criteria are excluded from the segment.
     */
    DimensionType?: DimensionType;
    /**
     * The criteria values for the segment dimension. Endpoints with matching attribute values are included or excluded from the segment, depending on the setting for Type.
     */
    Values?: ListOf__string;
  }
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
  export interface UpdateApnsChannelRequest {
    APNSChannelRequest: APNSChannelRequest;
    ApplicationId: __string;
  }
  export interface UpdateApnsChannelResponse {
    APNSChannelResponse: APNSChannelResponse;
  }
  export interface UpdateApplicationSettingsRequest {
    ApplicationId: __string;
    WriteApplicationSettingsRequest: WriteApplicationSettingsRequest;
  }
  export interface UpdateApplicationSettingsResponse {
    ApplicationSettingsResource: ApplicationSettingsResource;
  }
  export interface UpdateCampaignRequest {
    ApplicationId: __string;
    CampaignId: __string;
    WriteCampaignRequest: WriteCampaignRequest;
  }
  export interface UpdateCampaignResponse {
    CampaignResponse: CampaignResponse;
  }
  export interface UpdateEndpointRequest {
    ApplicationId: __string;
    EndpointId: __string;
    EndpointRequest: EndpointRequest;
  }
  export interface UpdateEndpointResponse {
    MessageBody: MessageBody;
  }
  export interface UpdateEndpointsBatchRequest {
    ApplicationId: __string;
    EndpointBatchRequest: EndpointBatchRequest;
  }
  export interface UpdateEndpointsBatchResponse {
    MessageBody: MessageBody;
  }
  export interface UpdateGcmChannelRequest {
    ApplicationId: __string;
    GCMChannelRequest: GCMChannelRequest;
  }
  export interface UpdateGcmChannelResponse {
    GCMChannelResponse: GCMChannelResponse;
  }
  export interface UpdateSegmentRequest {
    ApplicationId: __string;
    SegmentId: __string;
    WriteSegmentRequest: WriteSegmentRequest;
  }
  export interface UpdateSegmentResponse {
    SegmentResponse: SegmentResponse;
  }
  export interface WriteApplicationSettingsRequest {
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
     * The external ID assigned the IAM role that authorizes Amazon Pinpoint to publish to the stream.
     */
    ExternalId?: __string;
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
  export type __string = string;
  export type __timestamp = Date;
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
