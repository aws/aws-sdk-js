import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class ControlCatalog extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ControlCatalog.Types.ClientConfiguration)
  config: Config & ControlCatalog.Types.ClientConfiguration;
  /**
   * Returns a paginated list of common controls from the Amazon Web Services Control Catalog. You can apply an optional filter to see common controls that have a specific objective. If you don’t provide a filter, the operation returns all common controls. 
   */
  listCommonControls(params: ControlCatalog.Types.ListCommonControlsRequest, callback?: (err: AWSError, data: ControlCatalog.Types.ListCommonControlsResponse) => void): Request<ControlCatalog.Types.ListCommonControlsResponse, AWSError>;
  /**
   * Returns a paginated list of common controls from the Amazon Web Services Control Catalog. You can apply an optional filter to see common controls that have a specific objective. If you don’t provide a filter, the operation returns all common controls. 
   */
  listCommonControls(callback?: (err: AWSError, data: ControlCatalog.Types.ListCommonControlsResponse) => void): Request<ControlCatalog.Types.ListCommonControlsResponse, AWSError>;
  /**
   * Returns a paginated list of domains from the Amazon Web Services Control Catalog.
   */
  listDomains(params: ControlCatalog.Types.ListDomainsRequest, callback?: (err: AWSError, data: ControlCatalog.Types.ListDomainsResponse) => void): Request<ControlCatalog.Types.ListDomainsResponse, AWSError>;
  /**
   * Returns a paginated list of domains from the Amazon Web Services Control Catalog.
   */
  listDomains(callback?: (err: AWSError, data: ControlCatalog.Types.ListDomainsResponse) => void): Request<ControlCatalog.Types.ListDomainsResponse, AWSError>;
  /**
   * Returns a paginated list of objectives from the Amazon Web Services Control Catalog. You can apply an optional filter to see the objectives that belong to a specific domain. If you don’t provide a filter, the operation returns all objectives. 
   */
  listObjectives(params: ControlCatalog.Types.ListObjectivesRequest, callback?: (err: AWSError, data: ControlCatalog.Types.ListObjectivesResponse) => void): Request<ControlCatalog.Types.ListObjectivesResponse, AWSError>;
  /**
   * Returns a paginated list of objectives from the Amazon Web Services Control Catalog. You can apply an optional filter to see the objectives that belong to a specific domain. If you don’t provide a filter, the operation returns all objectives. 
   */
  listObjectives(callback?: (err: AWSError, data: ControlCatalog.Types.ListObjectivesResponse) => void): Request<ControlCatalog.Types.ListObjectivesResponse, AWSError>;
}
declare namespace ControlCatalog {
  export interface AssociatedDomainSummary {
    /**
     * The Amazon Resource Name (ARN) of the related domain.
     */
    Arn?: DomainArn;
    /**
     * The name of the related domain.
     */
    Name?: String;
  }
  export interface AssociatedObjectiveSummary {
    /**
     * The Amazon Resource Name (ARN) of the related objective.
     */
    Arn?: ObjectiveArn;
    /**
     * The name of the related objective.
     */
    Name?: String;
  }
  export type CommonControlArn = string;
  export interface CommonControlFilter {
    /**
     * The objective that's used as filter criteria. You can use this parameter to specify one objective ARN at a time. Passing multiple ARNs in the CommonControlFilter isn’t currently supported.
     */
    Objectives?: ObjectiveResourceFilterList;
  }
  export interface CommonControlSummary {
    /**
     * The Amazon Resource Name (ARN) that identifies the common control.
     */
    Arn: CommonControlArn;
    /**
     * The time when the common control was created.
     */
    CreateTime: Timestamp;
    /**
     * The description of the common control.
     */
    Description: String;
    /**
     * The domain that the common control belongs to.
     */
    Domain: AssociatedDomainSummary;
    /**
     * The time when the common control was most recently updated.
     */
    LastUpdateTime: Timestamp;
    /**
     * The name of the common control.
     */
    Name: String;
    /**
     * The objective that the common control belongs to.
     */
    Objective: AssociatedObjectiveSummary;
  }
  export type CommonControlSummaryList = CommonControlSummary[];
  export type DomainArn = string;
  export interface DomainResourceFilter {
    /**
     * The Amazon Resource Name (ARN) of the domain.
     */
    Arn?: DomainArn;
  }
  export type DomainResourceFilterList = DomainResourceFilter[];
  export interface DomainSummary {
    /**
     * The Amazon Resource Name (ARN) that identifies the domain.
     */
    Arn: DomainArn;
    /**
     * The time when the domain was created.
     */
    CreateTime: Timestamp;
    /**
     * The description of the domain.
     */
    Description: String;
    /**
     * The time when the domain was most recently updated.
     */
    LastUpdateTime: Timestamp;
    /**
     * The name of the domain.
     */
    Name: String;
  }
  export type DomainSummaryList = DomainSummary[];
  export interface ListCommonControlsRequest {
    /**
     * An optional filter that narrows the results to a specific objective. This filter allows you to specify one objective ARN at a time. Passing multiple ARNs in the CommonControlFilter isn’t currently supported.
     */
    CommonControlFilter?: CommonControlFilter;
    /**
     * The maximum number of results on a page or for an API request call.
     */
    MaxResults?: MaxListCommonControlsResults;
    /**
     * The pagination token that's used to fetch the next set of results.
     */
    NextToken?: PaginationToken;
  }
  export interface ListCommonControlsResponse {
    /**
     * The list of common controls that the ListCommonControls API returns.
     */
    CommonControls: CommonControlSummaryList;
    /**
     * The pagination token that's used to fetch the next set of results.
     */
    NextToken?: PaginationToken;
  }
  export interface ListDomainsRequest {
    /**
     * The maximum number of results on a page or for an API request call.
     */
    MaxResults?: MaxListDomainsResults;
    /**
     * The pagination token that's used to fetch the next set of results.
     */
    NextToken?: PaginationToken;
  }
  export interface ListDomainsResponse {
    /**
     * The list of domains that the ListDomains API returns.
     */
    Domains: DomainSummaryList;
    /**
     * The pagination token that's used to fetch the next set of results.
     */
    NextToken?: PaginationToken;
  }
  export interface ListObjectivesRequest {
    /**
     * The maximum number of results on a page or for an API request call.
     */
    MaxResults?: MaxListObjectivesResults;
    /**
     * The pagination token that's used to fetch the next set of results.
     */
    NextToken?: PaginationToken;
    /**
     * An optional filter that narrows the results to a specific domain. This filter allows you to specify one domain ARN at a time. Passing multiple ARNs in the ObjectiveFilter isn’t currently supported.
     */
    ObjectiveFilter?: ObjectiveFilter;
  }
  export interface ListObjectivesResponse {
    /**
     * The pagination token that's used to fetch the next set of results.
     */
    NextToken?: PaginationToken;
    /**
     * The list of objectives that the ListObjectives API returns.
     */
    Objectives: ObjectiveSummaryList;
  }
  export type MaxListCommonControlsResults = number;
  export type MaxListDomainsResults = number;
  export type MaxListObjectivesResults = number;
  export type ObjectiveArn = string;
  export interface ObjectiveFilter {
    /**
     * The domain that's used as filter criteria. You can use this parameter to specify one domain ARN at a time. Passing multiple ARNs in the ObjectiveFilter isn’t currently supported.
     */
    Domains?: DomainResourceFilterList;
  }
  export interface ObjectiveResourceFilter {
    /**
     * The Amazon Resource Name (ARN) of the objective.
     */
    Arn?: ObjectiveArn;
  }
  export type ObjectiveResourceFilterList = ObjectiveResourceFilter[];
  export interface ObjectiveSummary {
    /**
     * The Amazon Resource Name (ARN) that identifies the objective.
     */
    Arn: ObjectiveArn;
    /**
     * The time when the objective was created.
     */
    CreateTime: Timestamp;
    /**
     * The description of the objective.
     */
    Description: String;
    /**
     * The domain that the objective belongs to.
     */
    Domain: AssociatedDomainSummary;
    /**
     * The time when the objective was most recently updated.
     */
    LastUpdateTime: Timestamp;
    /**
     * The name of the objective.
     */
    Name: String;
  }
  export type ObjectiveSummaryList = ObjectiveSummary[];
  export type PaginationToken = string;
  export type String = string;
  export type Timestamp = Date;
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
   * Contains interfaces for use with the ControlCatalog client.
   */
  export import Types = ControlCatalog;
}
export = ControlCatalog;
