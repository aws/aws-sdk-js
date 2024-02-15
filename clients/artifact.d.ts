import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class Artifact extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Artifact.Types.ClientConfiguration)
  config: Config & Artifact.Types.ClientConfiguration;
  /**
   * Get the account settings for Artifact.
   */
  getAccountSettings(params: Artifact.Types.GetAccountSettingsRequest, callback?: (err: AWSError, data: Artifact.Types.GetAccountSettingsResponse) => void): Request<Artifact.Types.GetAccountSettingsResponse, AWSError>;
  /**
   * Get the account settings for Artifact.
   */
  getAccountSettings(callback?: (err: AWSError, data: Artifact.Types.GetAccountSettingsResponse) => void): Request<Artifact.Types.GetAccountSettingsResponse, AWSError>;
  /**
   * Get the content for a single report.
   */
  getReport(params: Artifact.Types.GetReportRequest, callback?: (err: AWSError, data: Artifact.Types.GetReportResponse) => void): Request<Artifact.Types.GetReportResponse, AWSError>;
  /**
   * Get the content for a single report.
   */
  getReport(callback?: (err: AWSError, data: Artifact.Types.GetReportResponse) => void): Request<Artifact.Types.GetReportResponse, AWSError>;
  /**
   * Get the metadata for a single report.
   */
  getReportMetadata(params: Artifact.Types.GetReportMetadataRequest, callback?: (err: AWSError, data: Artifact.Types.GetReportMetadataResponse) => void): Request<Artifact.Types.GetReportMetadataResponse, AWSError>;
  /**
   * Get the metadata for a single report.
   */
  getReportMetadata(callback?: (err: AWSError, data: Artifact.Types.GetReportMetadataResponse) => void): Request<Artifact.Types.GetReportMetadataResponse, AWSError>;
  /**
   * Get the Term content associated with a single report.
   */
  getTermForReport(params: Artifact.Types.GetTermForReportRequest, callback?: (err: AWSError, data: Artifact.Types.GetTermForReportResponse) => void): Request<Artifact.Types.GetTermForReportResponse, AWSError>;
  /**
   * Get the Term content associated with a single report.
   */
  getTermForReport(callback?: (err: AWSError, data: Artifact.Types.GetTermForReportResponse) => void): Request<Artifact.Types.GetTermForReportResponse, AWSError>;
  /**
   * List available reports.
   */
  listReports(params: Artifact.Types.ListReportsRequest, callback?: (err: AWSError, data: Artifact.Types.ListReportsResponse) => void): Request<Artifact.Types.ListReportsResponse, AWSError>;
  /**
   * List available reports.
   */
  listReports(callback?: (err: AWSError, data: Artifact.Types.ListReportsResponse) => void): Request<Artifact.Types.ListReportsResponse, AWSError>;
  /**
   * Put the account settings for Artifact.
   */
  putAccountSettings(params: Artifact.Types.PutAccountSettingsRequest, callback?: (err: AWSError, data: Artifact.Types.PutAccountSettingsResponse) => void): Request<Artifact.Types.PutAccountSettingsResponse, AWSError>;
  /**
   * Put the account settings for Artifact.
   */
  putAccountSettings(callback?: (err: AWSError, data: Artifact.Types.PutAccountSettingsResponse) => void): Request<Artifact.Types.PutAccountSettingsResponse, AWSError>;
}
declare namespace Artifact {
  export type AcceptanceType = "PASSTHROUGH"|"EXPLICIT"|string;
  export interface AccountSettings {
    /**
     * Notification subscription status of the customer.
     */
    notificationSubscriptionStatus?: NotificationSubscriptionStatus;
  }
  export interface GetAccountSettingsRequest {
  }
  export interface GetAccountSettingsResponse {
    accountSettings?: AccountSettings;
  }
  export interface GetReportMetadataRequest {
    /**
     * Unique resource ID for the report resource.
     */
    reportId: ReportId;
    /**
     * Version for the report resource.
     */
    reportVersion?: VersionAttribute;
  }
  export interface GetReportMetadataResponse {
    /**
     * Report resource detail.
     */
    reportDetails?: ReportDetail;
  }
  export interface GetReportRequest {
    /**
     * Unique resource ID for the report resource.
     */
    reportId: ReportId;
    /**
     * Version for the report resource.
     */
    reportVersion?: VersionAttribute;
    /**
     * Unique download token provided by GetTermForReport API.
     */
    termToken: ShortStringAttribute;
  }
  export interface GetReportResponse {
    /**
     * Presigned S3 url to access the report content.
     */
    documentPresignedUrl?: GetReportResponseDocumentPresignedUrlString;
  }
  export type GetReportResponseDocumentPresignedUrlString = string;
  export interface GetTermForReportRequest {
    /**
     * Unique resource ID for the report resource.
     */
    reportId: ReportId;
    /**
     * Version for the report resource.
     */
    reportVersion?: VersionAttribute;
  }
  export interface GetTermForReportResponse {
    /**
     * Presigned S3 url to access the term content.
     */
    documentPresignedUrl?: GetTermForReportResponseDocumentPresignedUrlString;
    /**
     * Unique token representing this request event.
     */
    termToken?: String;
  }
  export type GetTermForReportResponseDocumentPresignedUrlString = string;
  export interface ListReportsRequest {
    /**
     * Maximum number of resources to return in the paginated response.
     */
    maxResults?: MaxResultsAttribute;
    /**
     * Pagination token to request the next page of resources.
     */
    nextToken?: NextTokenAttribute;
  }
  export interface ListReportsResponse {
    /**
     * Pagination token to request the next page of resources.
     */
    nextToken?: NextTokenAttribute;
    /**
     * List of report resources.
     */
    reports?: ReportsList;
  }
  export type LongStringAttribute = string;
  export type MaxResultsAttribute = number;
  export type NextTokenAttribute = string;
  export type NotificationSubscriptionStatus = "SUBSCRIBED"|"NOT_SUBSCRIBED"|string;
  export type PublishedState = "PUBLISHED"|"UNPUBLISHED"|string;
  export interface PutAccountSettingsRequest {
    /**
     * Desired notification subscription status.
     */
    notificationSubscriptionStatus?: NotificationSubscriptionStatus;
  }
  export interface PutAccountSettingsResponse {
    accountSettings?: AccountSettings;
  }
  export interface ReportDetail {
    /**
     * Acceptance type for report.
     */
    acceptanceType?: AcceptanceType;
    /**
     * ARN for the report resource.
     */
    arn?: LongStringAttribute;
    /**
     * Category for the report resource.
     */
    category?: ShortStringAttribute;
    /**
     * Associated company name for the report resource.
     */
    companyName?: ShortStringAttribute;
    /**
     * Timestamp indicating when the report resource was created.
     */
    createdAt?: TimestampAttribute;
    /**
     * Timestamp indicating when the report resource was deleted.
     */
    deletedAt?: TimestampAttribute;
    /**
     * Description for the report resource.
     */
    description?: LongStringAttribute;
    /**
     * Unique resource ID for the report resource.
     */
    id?: ReportId;
    /**
     * Timestamp indicating when the report resource was last modified.
     */
    lastModifiedAt?: TimestampAttribute;
    /**
     * Name for the report resource.
     */
    name?: ShortStringAttribute;
    /**
     * Timestamp indicating the report resource effective end.
     */
    periodEnd?: TimestampAttribute;
    /**
     * Timestamp indicating the report resource effective start.
     */
    periodStart?: TimestampAttribute;
    /**
     * Associated product name for the report resource.
     */
    productName?: ShortStringAttribute;
    /**
     * Sequence number to enforce optimistic locking.
     */
    sequenceNumber?: SequenceNumberAttribute;
    /**
     * Series for the report resource.
     */
    series?: ShortStringAttribute;
    /**
     * Current state of the report resource
     */
    state?: PublishedState;
    /**
     * The message associated with the current upload state.
     */
    statusMessage?: StatusMessage;
    /**
     * Unique resource ARN for term resource.
     */
    termArn?: LongStringAttribute;
    /**
     * The current state of the document upload.
     */
    uploadState?: UploadState;
    /**
     * Version for the report resource.
     */
    version?: VersionAttribute;
  }
  export type ReportId = string;
  export interface ReportSummary {
    /**
     * ARN for the report resource.
     */
    arn?: LongStringAttribute;
    /**
     * Category for the report resource.
     */
    category?: ShortStringAttribute;
    /**
     * Associated company name for the report resource.
     */
    companyName?: ShortStringAttribute;
    /**
     * Description for the report resource.
     */
    description?: LongStringAttribute;
    /**
     * Unique resource ID for the report resource.
     */
    id?: ReportId;
    /**
     * Name for the report resource.
     */
    name?: ShortStringAttribute;
    /**
     * Timestamp indicating the report resource effective end.
     */
    periodEnd?: TimestampAttribute;
    /**
     * Timestamp indicating the report resource effective start.
     */
    periodStart?: TimestampAttribute;
    /**
     * Associated product name for the report resource.
     */
    productName?: ShortStringAttribute;
    /**
     * Series for the report resource.
     */
    series?: ShortStringAttribute;
    /**
     * Current state of the report resource.
     */
    state?: PublishedState;
    /**
     * The message associated with the current upload state.
     */
    statusMessage?: StatusMessage;
    /**
     * The current state of the document upload.
     */
    uploadState?: UploadState;
    /**
     * Version for the report resource.
     */
    version?: VersionAttribute;
  }
  export type ReportsList = ReportSummary[];
  export type SequenceNumberAttribute = number;
  export type ShortStringAttribute = string;
  export type StatusMessage = string;
  export type String = string;
  export type TimestampAttribute = Date;
  export type UploadState = "PROCESSING"|"COMPLETE"|"FAILED"|"FAULT"|string;
  export type VersionAttribute = number;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-05-10"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Artifact client.
   */
  export import Types = Artifact;
}
export = Artifact;
