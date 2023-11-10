import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class CUR extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: CUR.Types.ClientConfiguration)
  config: Config & CUR.Types.ClientConfiguration;
  /**
   * Deletes the specified report. Any tags associated with the report are also deleted.
   */
  deleteReportDefinition(params: CUR.Types.DeleteReportDefinitionRequest, callback?: (err: AWSError, data: CUR.Types.DeleteReportDefinitionResponse) => void): Request<CUR.Types.DeleteReportDefinitionResponse, AWSError>;
  /**
   * Deletes the specified report. Any tags associated with the report are also deleted.
   */
  deleteReportDefinition(callback?: (err: AWSError, data: CUR.Types.DeleteReportDefinitionResponse) => void): Request<CUR.Types.DeleteReportDefinitionResponse, AWSError>;
  /**
   * Lists the Amazon Web Services Cost and Usage Report available to this account.
   */
  describeReportDefinitions(params: CUR.Types.DescribeReportDefinitionsRequest, callback?: (err: AWSError, data: CUR.Types.DescribeReportDefinitionsResponse) => void): Request<CUR.Types.DescribeReportDefinitionsResponse, AWSError>;
  /**
   * Lists the Amazon Web Services Cost and Usage Report available to this account.
   */
  describeReportDefinitions(callback?: (err: AWSError, data: CUR.Types.DescribeReportDefinitionsResponse) => void): Request<CUR.Types.DescribeReportDefinitionsResponse, AWSError>;
  /**
   * Lists the tags associated with the specified report definition.
   */
  listTagsForResource(params: CUR.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: CUR.Types.ListTagsForResourceResponse) => void): Request<CUR.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists the tags associated with the specified report definition.
   */
  listTagsForResource(callback?: (err: AWSError, data: CUR.Types.ListTagsForResourceResponse) => void): Request<CUR.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Allows you to programmatically update your report preferences.
   */
  modifyReportDefinition(params: CUR.Types.ModifyReportDefinitionRequest, callback?: (err: AWSError, data: CUR.Types.ModifyReportDefinitionResponse) => void): Request<CUR.Types.ModifyReportDefinitionResponse, AWSError>;
  /**
   * Allows you to programmatically update your report preferences.
   */
  modifyReportDefinition(callback?: (err: AWSError, data: CUR.Types.ModifyReportDefinitionResponse) => void): Request<CUR.Types.ModifyReportDefinitionResponse, AWSError>;
  /**
   * Creates a new report using the description that you provide.
   */
  putReportDefinition(params: CUR.Types.PutReportDefinitionRequest, callback?: (err: AWSError, data: CUR.Types.PutReportDefinitionResponse) => void): Request<CUR.Types.PutReportDefinitionResponse, AWSError>;
  /**
   * Creates a new report using the description that you provide.
   */
  putReportDefinition(callback?: (err: AWSError, data: CUR.Types.PutReportDefinitionResponse) => void): Request<CUR.Types.PutReportDefinitionResponse, AWSError>;
  /**
   * Associates a set of tags with a report definition.
   */
  tagResource(params: CUR.Types.TagResourceRequest, callback?: (err: AWSError, data: CUR.Types.TagResourceResponse) => void): Request<CUR.Types.TagResourceResponse, AWSError>;
  /**
   * Associates a set of tags with a report definition.
   */
  tagResource(callback?: (err: AWSError, data: CUR.Types.TagResourceResponse) => void): Request<CUR.Types.TagResourceResponse, AWSError>;
  /**
   * Disassociates a set of tags from a report definition.
   */
  untagResource(params: CUR.Types.UntagResourceRequest, callback?: (err: AWSError, data: CUR.Types.UntagResourceResponse) => void): Request<CUR.Types.UntagResourceResponse, AWSError>;
  /**
   * Disassociates a set of tags from a report definition.
   */
  untagResource(callback?: (err: AWSError, data: CUR.Types.UntagResourceResponse) => void): Request<CUR.Types.UntagResourceResponse, AWSError>;
}
declare namespace CUR {
  export type AWSRegion = "af-south-1"|"ap-east-1"|"ap-south-1"|"ap-south-2"|"ap-southeast-1"|"ap-southeast-2"|"ap-southeast-3"|"ap-northeast-1"|"ap-northeast-2"|"ap-northeast-3"|"ca-central-1"|"eu-central-1"|"eu-central-2"|"eu-west-1"|"eu-west-2"|"eu-west-3"|"eu-north-1"|"eu-south-1"|"eu-south-2"|"me-central-1"|"me-south-1"|"sa-east-1"|"us-east-1"|"us-east-2"|"us-west-1"|"us-west-2"|"cn-north-1"|"cn-northwest-1"|string;
  export type AdditionalArtifact = "REDSHIFT"|"QUICKSIGHT"|"ATHENA"|string;
  export type AdditionalArtifactList = AdditionalArtifact[];
  export type BillingViewArn = string;
  export type CompressionFormat = "ZIP"|"GZIP"|"Parquet"|string;
  export interface DeleteReportDefinitionRequest {
    /**
     * The name of the report that you want to delete. The name must be unique, is case sensitive, and can't include spaces.
     */
    ReportName: ReportName;
  }
  export interface DeleteReportDefinitionResponse {
    ResponseMessage?: DeleteResponseMessage;
  }
  export type DeleteResponseMessage = string;
  export interface DescribeReportDefinitionsRequest {
    MaxResults?: MaxResults;
    NextToken?: GenericString;
  }
  export interface DescribeReportDefinitionsResponse {
    /**
     * An Amazon Web Services Cost and Usage Report list owned by the account.
     */
    ReportDefinitions?: ReportDefinitionList;
    NextToken?: GenericString;
  }
  export type GenericString = string;
  export type LastDelivery = string;
  export type LastStatus = "SUCCESS"|"ERROR_PERMISSIONS"|"ERROR_NO_BUCKET"|string;
  export interface ListTagsForResourceRequest {
    /**
     * The report name of the report definition that tags are to be returned for.
     */
    ReportName: ReportName;
  }
  export interface ListTagsForResourceResponse {
    /**
     * The tags assigned to the report definition resource.
     */
    Tags?: TagList;
  }
  export type MaxResults = number;
  export interface ModifyReportDefinitionRequest {
    ReportName: ReportName;
    ReportDefinition: ReportDefinition;
  }
  export interface ModifyReportDefinitionResponse {
  }
  export interface PutReportDefinitionRequest {
    /**
     * Represents the output of the PutReportDefinition operation. The content consists of the detailed metadata and data file information. 
     */
    ReportDefinition: ReportDefinition;
    /**
     * The tags to be assigned to the report definition resource.
     */
    Tags?: TagList;
  }
  export interface PutReportDefinitionResponse {
  }
  export type RefreshClosedReports = boolean;
  export interface ReportDefinition {
    ReportName: ReportName;
    TimeUnit: TimeUnit;
    Format: ReportFormat;
    Compression: CompressionFormat;
    /**
     * A list of strings that indicate additional content that Amazon Web Services includes in the report, such as individual resource IDs. 
     */
    AdditionalSchemaElements: SchemaElementList;
    S3Bucket: S3Bucket;
    S3Prefix: S3Prefix;
    S3Region: AWSRegion;
    /**
     * A list of manifests that you want Amazon Web Services to create for this report.
     */
    AdditionalArtifacts?: AdditionalArtifactList;
    /**
     * Whether you want Amazon Web Services to update your reports after they have been finalized if Amazon Web Services detects charges related to previous months. These charges can include refunds, credits, or support fees.
     */
    RefreshClosedReports?: RefreshClosedReports;
    /**
     * Whether you want Amazon Web Services to overwrite the previous version of each report or to deliver the report in addition to the previous versions.
     */
    ReportVersioning?: ReportVersioning;
    /**
     *  The Amazon resource name of the billing view. The BillingViewArn is needed to create Amazon Web Services Cost and Usage Report for each billing group maintained in the Amazon Web Services Billing Conductor service. The BillingViewArn for a billing group can be constructed as: arn:aws:billing::payer-account-id:billingview/billing-group-primary-account-id 
     */
    BillingViewArn?: BillingViewArn;
    /**
     * The status of the report.
     */
    ReportStatus?: ReportStatus;
  }
  export type ReportDefinitionList = ReportDefinition[];
  export type ReportFormat = "textORcsv"|"Parquet"|string;
  export type ReportName = string;
  export interface ReportStatus {
    /**
     * A timestamp that gives the date of a report delivery.
     */
    lastDelivery?: LastDelivery;
    /**
     * An enum that gives the status of a report delivery.
     */
    lastStatus?: LastStatus;
  }
  export type ReportVersioning = "CREATE_NEW_REPORT"|"OVERWRITE_REPORT"|string;
  export type S3Bucket = string;
  export type S3Prefix = string;
  export type SchemaElement = "RESOURCES"|"SPLIT_COST_ALLOCATION_DATA"|"MANUAL_DISCOUNT_COMPATIBILITY"|string;
  export type SchemaElementList = SchemaElement[];
  export interface Tag {
    /**
     * The key of the tag. Tag keys are case sensitive. Each report definition can only have up to one tag with the same key. If you try to add an existing tag with the same key, the existing tag value will be updated to the new value.
     */
    Key: TagKey;
    /**
     * The value of the tag. Tag values are case-sensitive. This can be an empty string.
     */
    Value: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export interface TagResourceRequest {
    /**
     * The report name of the report definition that tags are to be associated with.
     */
    ReportName: ReportName;
    /**
     * The tags to be assigned to the report definition resource.
     */
    Tags: TagList;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type TimeUnit = "HOURLY"|"DAILY"|"MONTHLY"|string;
  export interface UntagResourceRequest {
    /**
     * The report name of the report definition that tags are to be disassociated from.
     */
    ReportName: ReportName;
    /**
     * The tags to be disassociated from the report definition resource.
     */
    TagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-01-06"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the CUR client.
   */
  export import Types = CUR;
}
export = CUR;
