import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class TrustedAdvisor extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: TrustedAdvisor.Types.ClientConfiguration)
  config: Config & TrustedAdvisor.Types.ClientConfiguration;
  /**
   * Update one or more exclusion status for a list of recommendation resources
   */
  batchUpdateRecommendationResourceExclusion(params: TrustedAdvisor.Types.BatchUpdateRecommendationResourceExclusionRequest, callback?: (err: AWSError, data: TrustedAdvisor.Types.BatchUpdateRecommendationResourceExclusionResponse) => void): Request<TrustedAdvisor.Types.BatchUpdateRecommendationResourceExclusionResponse, AWSError>;
  /**
   * Update one or more exclusion status for a list of recommendation resources
   */
  batchUpdateRecommendationResourceExclusion(callback?: (err: AWSError, data: TrustedAdvisor.Types.BatchUpdateRecommendationResourceExclusionResponse) => void): Request<TrustedAdvisor.Types.BatchUpdateRecommendationResourceExclusionResponse, AWSError>;
  /**
   * Get a specific recommendation within an AWS Organizations organization. This API supports only prioritized recommendations. 
   */
  getOrganizationRecommendation(params: TrustedAdvisor.Types.GetOrganizationRecommendationRequest, callback?: (err: AWSError, data: TrustedAdvisor.Types.GetOrganizationRecommendationResponse) => void): Request<TrustedAdvisor.Types.GetOrganizationRecommendationResponse, AWSError>;
  /**
   * Get a specific recommendation within an AWS Organizations organization. This API supports only prioritized recommendations. 
   */
  getOrganizationRecommendation(callback?: (err: AWSError, data: TrustedAdvisor.Types.GetOrganizationRecommendationResponse) => void): Request<TrustedAdvisor.Types.GetOrganizationRecommendationResponse, AWSError>;
  /**
   * Get a specific Recommendation
   */
  getRecommendation(params: TrustedAdvisor.Types.GetRecommendationRequest, callback?: (err: AWSError, data: TrustedAdvisor.Types.GetRecommendationResponse) => void): Request<TrustedAdvisor.Types.GetRecommendationResponse, AWSError>;
  /**
   * Get a specific Recommendation
   */
  getRecommendation(callback?: (err: AWSError, data: TrustedAdvisor.Types.GetRecommendationResponse) => void): Request<TrustedAdvisor.Types.GetRecommendationResponse, AWSError>;
  /**
   * List a filterable set of Checks
   */
  listChecks(params: TrustedAdvisor.Types.ListChecksRequest, callback?: (err: AWSError, data: TrustedAdvisor.Types.ListChecksResponse) => void): Request<TrustedAdvisor.Types.ListChecksResponse, AWSError>;
  /**
   * List a filterable set of Checks
   */
  listChecks(callback?: (err: AWSError, data: TrustedAdvisor.Types.ListChecksResponse) => void): Request<TrustedAdvisor.Types.ListChecksResponse, AWSError>;
  /**
   * Lists the accounts that own the resources for an organization aggregate recommendation. This API only supports prioritized recommendations. 
   */
  listOrganizationRecommendationAccounts(params: TrustedAdvisor.Types.ListOrganizationRecommendationAccountsRequest, callback?: (err: AWSError, data: TrustedAdvisor.Types.ListOrganizationRecommendationAccountsResponse) => void): Request<TrustedAdvisor.Types.ListOrganizationRecommendationAccountsResponse, AWSError>;
  /**
   * Lists the accounts that own the resources for an organization aggregate recommendation. This API only supports prioritized recommendations. 
   */
  listOrganizationRecommendationAccounts(callback?: (err: AWSError, data: TrustedAdvisor.Types.ListOrganizationRecommendationAccountsResponse) => void): Request<TrustedAdvisor.Types.ListOrganizationRecommendationAccountsResponse, AWSError>;
  /**
   * List Resources of a Recommendation within an Organization. This API only supports prioritized recommendations. 
   */
  listOrganizationRecommendationResources(params: TrustedAdvisor.Types.ListOrganizationRecommendationResourcesRequest, callback?: (err: AWSError, data: TrustedAdvisor.Types.ListOrganizationRecommendationResourcesResponse) => void): Request<TrustedAdvisor.Types.ListOrganizationRecommendationResourcesResponse, AWSError>;
  /**
   * List Resources of a Recommendation within an Organization. This API only supports prioritized recommendations. 
   */
  listOrganizationRecommendationResources(callback?: (err: AWSError, data: TrustedAdvisor.Types.ListOrganizationRecommendationResourcesResponse) => void): Request<TrustedAdvisor.Types.ListOrganizationRecommendationResourcesResponse, AWSError>;
  /**
   * List a filterable set of Recommendations within an Organization. This API only supports prioritized recommendations. 
   */
  listOrganizationRecommendations(params: TrustedAdvisor.Types.ListOrganizationRecommendationsRequest, callback?: (err: AWSError, data: TrustedAdvisor.Types.ListOrganizationRecommendationsResponse) => void): Request<TrustedAdvisor.Types.ListOrganizationRecommendationsResponse, AWSError>;
  /**
   * List a filterable set of Recommendations within an Organization. This API only supports prioritized recommendations. 
   */
  listOrganizationRecommendations(callback?: (err: AWSError, data: TrustedAdvisor.Types.ListOrganizationRecommendationsResponse) => void): Request<TrustedAdvisor.Types.ListOrganizationRecommendationsResponse, AWSError>;
  /**
   * List Resources of a Recommendation
   */
  listRecommendationResources(params: TrustedAdvisor.Types.ListRecommendationResourcesRequest, callback?: (err: AWSError, data: TrustedAdvisor.Types.ListRecommendationResourcesResponse) => void): Request<TrustedAdvisor.Types.ListRecommendationResourcesResponse, AWSError>;
  /**
   * List Resources of a Recommendation
   */
  listRecommendationResources(callback?: (err: AWSError, data: TrustedAdvisor.Types.ListRecommendationResourcesResponse) => void): Request<TrustedAdvisor.Types.ListRecommendationResourcesResponse, AWSError>;
  /**
   * List a filterable set of Recommendations
   */
  listRecommendations(params: TrustedAdvisor.Types.ListRecommendationsRequest, callback?: (err: AWSError, data: TrustedAdvisor.Types.ListRecommendationsResponse) => void): Request<TrustedAdvisor.Types.ListRecommendationsResponse, AWSError>;
  /**
   * List a filterable set of Recommendations
   */
  listRecommendations(callback?: (err: AWSError, data: TrustedAdvisor.Types.ListRecommendationsResponse) => void): Request<TrustedAdvisor.Types.ListRecommendationsResponse, AWSError>;
  /**
   * Update the lifecycle of a Recommendation within an Organization. This API only supports prioritized recommendations. 
   */
  updateOrganizationRecommendationLifecycle(params: TrustedAdvisor.Types.UpdateOrganizationRecommendationLifecycleRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Update the lifecycle of a Recommendation within an Organization. This API only supports prioritized recommendations. 
   */
  updateOrganizationRecommendationLifecycle(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Update the lifecyle of a Recommendation. This API only supports prioritized recommendations.
   */
  updateRecommendationLifecycle(params: TrustedAdvisor.Types.UpdateRecommendationLifecycleRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Update the lifecyle of a Recommendation. This API only supports prioritized recommendations.
   */
  updateRecommendationLifecycle(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
}
declare namespace TrustedAdvisor {
  export type AccountId = string;
  export type AccountRecommendationArn = string;
  export type AccountRecommendationIdentifier = string;
  export interface AccountRecommendationLifecycleSummary {
    /**
     * The AWS account ID
     */
    accountId?: AccountId;
    /**
     * The Recommendation ARN
     */
    accountRecommendationArn?: AccountRecommendationArn;
    /**
     * When the Recommendation was last updated
     */
    lastUpdatedAt?: SyntheticTimestamp_date_time;
    /**
     * The lifecycle stage from AWS Trusted Advisor Priority
     */
    lifecycleStage?: RecommendationLifecycleStage;
    /**
     * Reason for the lifecycle stage change
     */
    updateReason?: RecommendationUpdateReason;
    /**
     * Reason code for the lifecycle state change
     */
    updateReasonCode?: UpdateRecommendationLifecycleStageReasonCode;
    /**
     * The person on whose behalf a Technical Account Manager (TAM) updated the recommendation. This information is only available when a Technical Account Manager takes an action on a recommendation managed by AWS Trusted Advisor Priority 
     */
    updatedOnBehalfOf?: String;
    /**
     * The job title of the person on whose behalf a Technical Account Manager (TAM) updated the recommendation. This information is only available when a Technical Account Manager takes an action on a recommendation managed by AWS Trusted Advisor Priority 
     */
    updatedOnBehalfOfJobTitle?: String;
  }
  export type AccountRecommendationLifecycleSummaryList = AccountRecommendationLifecycleSummary[];
  export interface BatchUpdateRecommendationResourceExclusionRequest {
    /**
     * A list of recommendation resource ARNs and exclusion status to update
     */
    recommendationResourceExclusions: RecommendationResourceExclusionList;
  }
  export interface BatchUpdateRecommendationResourceExclusionResponse {
    /**
     * A list of recommendation resource ARNs whose exclusion status failed to update, if any
     */
    batchUpdateRecommendationResourceExclusionErrors: UpdateRecommendationResourceExclusionErrorList;
  }
  export type Boolean = boolean;
  export type CheckArn = string;
  export type CheckIdentifier = string;
  export interface CheckSummary {
    /**
     * The ARN of the AWS Trusted Advisor Check
     */
    arn: CheckArn;
    /**
     * The AWS Services that the Check applies to
     */
    awsServices: RecommendationAwsServiceList;
    /**
     * A description of what the AWS Trusted Advisor Check is monitoring
     */
    description: String;
    /**
     * The unique identifier of the AWS Trusted Advisor Check
     */
    id: String;
    /**
     * The column headings for the metadata returned in the resource
     */
    metadata: StringMap;
    /**
     * The name of the AWS Trusted Advisor Check
     */
    name: String;
    /**
     * The Recommendation pillars that the AWS Trusted Advisor Check falls under
     */
    pillars: RecommendationPillarList;
    /**
     * The source of the Recommendation
     */
    source: RecommendationSource;
  }
  export type CheckSummaryList = CheckSummary[];
  export type Double = number;
  export type ExclusionStatus = "excluded"|"included"|string;
  export interface GetOrganizationRecommendationRequest {
    /**
     * The Recommendation identifier
     */
    organizationRecommendationIdentifier: OrganizationRecommendationIdentifier;
  }
  export interface GetOrganizationRecommendationResponse {
    /**
     * The Recommendation
     */
    organizationRecommendation?: OrganizationRecommendation;
  }
  export interface GetRecommendationRequest {
    /**
     * The Recommendation identifier
     */
    recommendationIdentifier: AccountRecommendationIdentifier;
  }
  export interface GetRecommendationResponse {
    /**
     * The Recommendation
     */
    recommendation?: Recommendation;
  }
  export interface ListChecksRequest {
    /**
     * The aws service associated with the check
     */
    awsService?: RecommendationAwsService;
    /**
     * The ISO 639-1 code for the language that you want your checks to appear in.
     */
    language?: RecommendationLanguage;
    /**
     * The maximum number of results to return per page.
     */
    maxResults?: ListChecksRequestMaxResultsInteger;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. 
     */
    nextToken?: ListChecksRequestNextTokenString;
    /**
     * The pillar of the check
     */
    pillar?: RecommendationPillar;
    /**
     * The source of the check
     */
    source?: RecommendationSource;
  }
  export type ListChecksRequestMaxResultsInteger = number;
  export type ListChecksRequestNextTokenString = string;
  export interface ListChecksResponse {
    /**
     * The list of Checks
     */
    checkSummaries: CheckSummaryList;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. 
     */
    nextToken?: ListChecksResponseNextTokenString;
  }
  export type ListChecksResponseNextTokenString = string;
  export interface ListOrganizationRecommendationAccountsRequest {
    /**
     * An account affected by this organization recommendation
     */
    affectedAccountId?: AccountId;
    /**
     * The maximum number of results to return per page.
     */
    maxResults?: ListOrganizationRecommendationAccountsRequestMaxResultsInteger;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. 
     */
    nextToken?: ListOrganizationRecommendationAccountsRequestNextTokenString;
    /**
     * The Recommendation identifier
     */
    organizationRecommendationIdentifier: OrganizationRecommendationIdentifier;
  }
  export type ListOrganizationRecommendationAccountsRequestMaxResultsInteger = number;
  export type ListOrganizationRecommendationAccountsRequestNextTokenString = string;
  export interface ListOrganizationRecommendationAccountsResponse {
    /**
     * The account recommendations lifecycles that are applicable to the Recommendation
     */
    accountRecommendationLifecycleSummaries: AccountRecommendationLifecycleSummaryList;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. 
     */
    nextToken?: ListOrganizationRecommendationAccountsResponseNextTokenString;
  }
  export type ListOrganizationRecommendationAccountsResponseNextTokenString = string;
  export interface ListOrganizationRecommendationResourcesRequest {
    /**
     * An account affected by this organization recommendation
     */
    affectedAccountId?: AccountId;
    /**
     * The exclusion status of the resource
     */
    exclusionStatus?: ExclusionStatus;
    /**
     * The maximum number of results to return per page.
     */
    maxResults?: ListOrganizationRecommendationResourcesRequestMaxResultsInteger;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. 
     */
    nextToken?: ListOrganizationRecommendationResourcesRequestNextTokenString;
    /**
     * The AWS Organization organization's Recommendation identifier
     */
    organizationRecommendationIdentifier: OrganizationRecommendationIdentifier;
    /**
     * The AWS Region code of the resource
     */
    regionCode?: String;
    /**
     * The status of the resource
     */
    status?: ResourceStatus;
  }
  export type ListOrganizationRecommendationResourcesRequestMaxResultsInteger = number;
  export type ListOrganizationRecommendationResourcesRequestNextTokenString = string;
  export interface ListOrganizationRecommendationResourcesResponse {
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. 
     */
    nextToken?: ListOrganizationRecommendationResourcesResponseNextTokenString;
    /**
     * A list of Recommendation Resources
     */
    organizationRecommendationResourceSummaries: OrganizationRecommendationResourceSummaryList;
  }
  export type ListOrganizationRecommendationResourcesResponseNextTokenString = string;
  export interface ListOrganizationRecommendationsRequest {
    /**
     * After the last update of the Recommendation
     */
    afterLastUpdatedAt?: Timestamp;
    /**
     * The aws service associated with the Recommendation
     */
    awsService?: RecommendationAwsService;
    /**
     * Before the last update of the Recommendation
     */
    beforeLastUpdatedAt?: Timestamp;
    /**
     * The check identifier of the Recommendation
     */
    checkIdentifier?: CheckIdentifier;
    /**
     * The maximum number of results to return per page.
     */
    maxResults?: ListOrganizationRecommendationsRequestMaxResultsInteger;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. 
     */
    nextToken?: ListOrganizationRecommendationsRequestNextTokenString;
    /**
     * The pillar of the Recommendation
     */
    pillar?: RecommendationPillar;
    /**
     * The source of the Recommendation
     */
    source?: RecommendationSource;
    /**
     * The status of the Recommendation
     */
    status?: RecommendationStatus;
    /**
     * The type of the Recommendation
     */
    type?: RecommendationType;
  }
  export type ListOrganizationRecommendationsRequestMaxResultsInteger = number;
  export type ListOrganizationRecommendationsRequestNextTokenString = string;
  export interface ListOrganizationRecommendationsResponse {
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. 
     */
    nextToken?: ListOrganizationRecommendationsResponseNextTokenString;
    /**
     * The list of Recommendations
     */
    organizationRecommendationSummaries: OrganizationRecommendationSummaryList;
  }
  export type ListOrganizationRecommendationsResponseNextTokenString = string;
  export interface ListRecommendationResourcesRequest {
    /**
     * The exclusion status of the resource
     */
    exclusionStatus?: ExclusionStatus;
    /**
     * The maximum number of results to return per page.
     */
    maxResults?: ListRecommendationResourcesRequestMaxResultsInteger;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. 
     */
    nextToken?: ListRecommendationResourcesRequestNextTokenString;
    /**
     * The Recommendation identifier
     */
    recommendationIdentifier: AccountRecommendationIdentifier;
    /**
     * The AWS Region code of the resource
     */
    regionCode?: String;
    /**
     * The status of the resource
     */
    status?: ResourceStatus;
  }
  export type ListRecommendationResourcesRequestMaxResultsInteger = number;
  export type ListRecommendationResourcesRequestNextTokenString = string;
  export interface ListRecommendationResourcesResponse {
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. 
     */
    nextToken?: ListRecommendationResourcesResponseNextTokenString;
    /**
     * A list of Recommendation Resources
     */
    recommendationResourceSummaries: RecommendationResourceSummaryList;
  }
  export type ListRecommendationResourcesResponseNextTokenString = string;
  export interface ListRecommendationsRequest {
    /**
     * After the last update of the Recommendation
     */
    afterLastUpdatedAt?: Timestamp;
    /**
     * The aws service associated with the Recommendation
     */
    awsService?: RecommendationAwsService;
    /**
     * Before the last update of the Recommendation
     */
    beforeLastUpdatedAt?: Timestamp;
    /**
     * The check identifier of the Recommendation
     */
    checkIdentifier?: CheckIdentifier;
    /**
     * The maximum number of results to return per page.
     */
    maxResults?: ListRecommendationsRequestMaxResultsInteger;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. 
     */
    nextToken?: ListRecommendationsRequestNextTokenString;
    /**
     * The pillar of the Recommendation
     */
    pillar?: RecommendationPillar;
    /**
     * The source of the Recommendation
     */
    source?: RecommendationSource;
    /**
     * The status of the Recommendation
     */
    status?: RecommendationStatus;
    /**
     * The type of the Recommendation
     */
    type?: RecommendationType;
  }
  export type ListRecommendationsRequestMaxResultsInteger = number;
  export type ListRecommendationsRequestNextTokenString = string;
  export interface ListRecommendationsResponse {
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. 
     */
    nextToken?: ListRecommendationsResponseNextTokenString;
    /**
     * The list of Recommendations
     */
    recommendationSummaries: RecommendationSummaryList;
  }
  export type ListRecommendationsResponseNextTokenString = string;
  export type Long = number;
  export interface OrganizationRecommendation {
    /**
     * The ARN of the Recommendation
     */
    arn: OrganizationRecommendationArn;
    /**
     * The AWS Services that the Recommendation applies to
     */
    awsServices?: RecommendationAwsServiceList;
    /**
     * The AWS Trusted Advisor Check ARN that relates to the Recommendation
     */
    checkArn?: String;
    /**
     * When the Recommendation was created, if created by AWS Trusted Advisor Priority
     */
    createdAt?: SyntheticTimestamp_date_time;
    /**
     * The creator, if created by AWS Trusted Advisor Priority
     */
    createdBy?: String;
    /**
     * A description for AWS Trusted Advisor recommendations
     */
    description: String;
    /**
     * The ID which identifies where the Recommendation was produced
     */
    id: String;
    /**
     * When the Recommendation was last updated
     */
    lastUpdatedAt?: SyntheticTimestamp_date_time;
    /**
     * The lifecycle stage from AWS Trusted Advisor Priority
     */
    lifecycleStage?: RecommendationLifecycleStage;
    /**
     * The name of the AWS Trusted Advisor Recommendation
     */
    name: String;
    /**
     * The pillar aggregations for cost savings
     */
    pillarSpecificAggregates?: RecommendationPillarSpecificAggregates;
    /**
     * The Pillars that the Recommendation is optimizing
     */
    pillars: RecommendationPillarList;
    /**
     * When the Recommendation was resolved
     */
    resolvedAt?: SyntheticTimestamp_date_time;
    /**
     * An aggregation of all resources
     */
    resourcesAggregates: RecommendationResourcesAggregates;
    /**
     * The source of the Recommendation
     */
    source: RecommendationSource;
    /**
     * The status of the Recommendation
     */
    status: RecommendationStatus;
    /**
     * Whether the Recommendation was automated or generated by AWS Trusted Advisor Priority
     */
    type: RecommendationType;
    /**
     * Reason for the lifecycle stage change
     */
    updateReason?: RecommendationUpdateReason;
    /**
     * Reason code for the lifecycle state change
     */
    updateReasonCode?: UpdateRecommendationLifecycleStageReasonCode;
    /**
     * The person on whose behalf a Technical Account Manager (TAM) updated the recommendation. This information is only available when a Technical Account Manager takes an action on a recommendation managed by AWS Trusted Advisor Priority 
     */
    updatedOnBehalfOf?: String;
    /**
     * The job title of the person on whose behalf a Technical Account Manager (TAM) updated the recommendation. This information is only available when a Technical Account Manager takes an action on a recommendation managed by AWS Trusted Advisor Priority 
     */
    updatedOnBehalfOfJobTitle?: String;
  }
  export type OrganizationRecommendationArn = string;
  export type OrganizationRecommendationIdentifier = string;
  export interface OrganizationRecommendationResourceSummary {
    /**
     * The AWS account ID
     */
    accountId?: AccountId;
    /**
     * The ARN of the Recommendation Resource
     */
    arn: RecommendationResourceArn;
    /**
     * The AWS resource identifier
     */
    awsResourceId: String;
    /**
     * The exclusion status of the Recommendation Resource
     */
    exclusionStatus?: ExclusionStatus;
    /**
     * The ID of the Recommendation Resource
     */
    id: String;
    /**
     * When the Recommendation Resource was last updated
     */
    lastUpdatedAt: SyntheticTimestamp_date_time;
    /**
     * Metadata associated with the Recommendation Resource
     */
    metadata: StringMap;
    /**
     * The Recommendation ARN
     */
    recommendationArn: OrganizationRecommendationArn;
    /**
     * The AWS Region code that the Recommendation Resource is in
     */
    regionCode: RecommendationRegionCode;
    /**
     * The current status of the Recommendation Resource
     */
    status: ResourceStatus;
  }
  export type OrganizationRecommendationResourceSummaryList = OrganizationRecommendationResourceSummary[];
  export interface OrganizationRecommendationSummary {
    /**
     * The ARN of the Recommendation
     */
    arn: OrganizationRecommendationArn;
    /**
     * The AWS Services that the Recommendation applies to
     */
    awsServices?: RecommendationAwsServiceList;
    /**
     * The AWS Trusted Advisor Check ARN that relates to the Recommendation
     */
    checkArn?: String;
    /**
     * When the Recommendation was created, if created by AWS Trusted Advisor Priority
     */
    createdAt?: SyntheticTimestamp_date_time;
    /**
     * The ID which identifies where the Recommendation was produced
     */
    id: String;
    /**
     * When the Recommendation was last updated
     */
    lastUpdatedAt?: SyntheticTimestamp_date_time;
    /**
     * The lifecycle stage from AWS Trusted Advisor Priority
     */
    lifecycleStage?: RecommendationLifecycleStage;
    /**
     * The name of the AWS Trusted Advisor Recommendation
     */
    name: String;
    /**
     * The pillar aggregations for cost savings
     */
    pillarSpecificAggregates?: RecommendationPillarSpecificAggregates;
    /**
     * The Pillars that the Recommendation is optimizing
     */
    pillars: RecommendationPillarList;
    /**
     * An aggregation of all resources
     */
    resourcesAggregates: RecommendationResourcesAggregates;
    /**
     * The source of the Recommendation
     */
    source: RecommendationSource;
    /**
     * The status of the Recommendation
     */
    status: RecommendationStatus;
    /**
     * Whether the Recommendation was automated or generated by AWS Trusted Advisor Priority
     */
    type: RecommendationType;
  }
  export type OrganizationRecommendationSummaryList = OrganizationRecommendationSummary[];
  export interface Recommendation {
    /**
     * The ARN of the Recommendation
     */
    arn: AccountRecommendationArn;
    /**
     * The AWS Services that the Recommendation applies to
     */
    awsServices?: RecommendationAwsServiceList;
    /**
     * The AWS Trusted Advisor Check ARN that relates to the Recommendation
     */
    checkArn?: String;
    /**
     * When the Recommendation was created, if created by AWS Trusted Advisor Priority
     */
    createdAt?: SyntheticTimestamp_date_time;
    /**
     * The creator, if created by AWS Trusted Advisor Priority
     */
    createdBy?: String;
    /**
     * A description for AWS Trusted Advisor recommendations
     */
    description: String;
    /**
     * The ID which identifies where the Recommendation was produced
     */
    id: String;
    /**
     * When the Recommendation was last updated
     */
    lastUpdatedAt?: SyntheticTimestamp_date_time;
    /**
     * The lifecycle stage from AWS Trusted Advisor Priority
     */
    lifecycleStage?: RecommendationLifecycleStage;
    /**
     * The name of the AWS Trusted Advisor Recommendation
     */
    name: String;
    /**
     * The pillar aggregations for cost savings
     */
    pillarSpecificAggregates?: RecommendationPillarSpecificAggregates;
    /**
     * The Pillars that the Recommendation is optimizing
     */
    pillars: RecommendationPillarList;
    /**
     * When the Recommendation was resolved
     */
    resolvedAt?: SyntheticTimestamp_date_time;
    /**
     * An aggregation of all resources
     */
    resourcesAggregates: RecommendationResourcesAggregates;
    /**
     * The source of the Recommendation
     */
    source: RecommendationSource;
    /**
     * The status of the Recommendation
     */
    status: RecommendationStatus;
    /**
     * Whether the Recommendation was automated or generated by AWS Trusted Advisor Priority
     */
    type: RecommendationType;
    /**
     * Reason for the lifecycle stage change
     */
    updateReason?: RecommendationUpdateReason;
    /**
     * Reason code for the lifecycle state change
     */
    updateReasonCode?: UpdateRecommendationLifecycleStageReasonCode;
    /**
     * The person on whose behalf a Technical Account Manager (TAM) updated the recommendation. This information is only available when a Technical Account Manager takes an action on a recommendation managed by AWS Trusted Advisor Priority 
     */
    updatedOnBehalfOf?: String;
    /**
     * The job title of the person on whose behalf a Technical Account Manager (TAM) updated the recommendation. This information is only available when a Technical Account Manager takes an action on a recommendation managed by AWS Trusted Advisor Priority 
     */
    updatedOnBehalfOfJobTitle?: String;
  }
  export type RecommendationAwsService = string;
  export type RecommendationAwsServiceList = RecommendationAwsService[];
  export interface RecommendationCostOptimizingAggregates {
    /**
     * The estimated monthly savings
     */
    estimatedMonthlySavings: Double;
    /**
     * The estimated percently monthly savings
     */
    estimatedPercentMonthlySavings: Double;
  }
  export type RecommendationLanguage = "en"|"ja"|"zh"|"fr"|"de"|"ko"|"zh_TW"|"it"|"es"|"pt_BR"|"id"|string;
  export type RecommendationLifecycleStage = "in_progress"|"pending_response"|"dismissed"|"resolved"|string;
  export type RecommendationPillar = "cost_optimizing"|"performance"|"security"|"service_limits"|"fault_tolerance"|"operational_excellence"|string;
  export type RecommendationPillarList = RecommendationPillar[];
  export interface RecommendationPillarSpecificAggregates {
    /**
     * Cost optimizing aggregates
     */
    costOptimizing?: RecommendationCostOptimizingAggregates;
  }
  export type RecommendationRegionCode = string;
  export type RecommendationResourceArn = string;
  export interface RecommendationResourceExclusion {
    /**
     * The ARN of the Recommendation Resource
     */
    arn: RecommendationResourceArn;
    /**
     * The exclusion status
     */
    isExcluded: Boolean;
  }
  export type RecommendationResourceExclusionList = RecommendationResourceExclusion[];
  export interface RecommendationResourceSummary {
    /**
     * The ARN of the Recommendation Resource
     */
    arn: RecommendationResourceArn;
    /**
     * The AWS resource identifier
     */
    awsResourceId: String;
    /**
     * The exclusion status of the Recommendation Resource
     */
    exclusionStatus?: ExclusionStatus;
    /**
     * The ID of the Recommendation Resource
     */
    id: String;
    /**
     * When the Recommendation Resource was last updated
     */
    lastUpdatedAt: SyntheticTimestamp_date_time;
    /**
     * Metadata associated with the Recommendation Resource
     */
    metadata: StringMap;
    /**
     * The Recommendation ARN
     */
    recommendationArn: AccountRecommendationArn;
    /**
     * The AWS Region code that the Recommendation Resource is in
     */
    regionCode: RecommendationRegionCode;
    /**
     * The current status of the Recommendation Resource
     */
    status: ResourceStatus;
  }
  export type RecommendationResourceSummaryList = RecommendationResourceSummary[];
  export interface RecommendationResourcesAggregates {
    /**
     * The number of AWS resources that were flagged to have errors according to the Trusted Advisor check
     */
    errorCount: Long;
    /**
     * The number of AWS resources that were flagged to be OK according to the Trusted Advisor check
     */
    okCount: Long;
    /**
     * The number of AWS resources that were flagged to have warning according to the Trusted Advisor check 
     */
    warningCount: Long;
  }
  export type RecommendationSource = "aws_config"|"compute_optimizer"|"cost_explorer"|"lse"|"manual"|"pse"|"rds"|"resilience"|"resilience_hub"|"security_hub"|"stir"|"ta_check"|"well_architected"|string;
  export type RecommendationStatus = "ok"|"warning"|"error"|string;
  export interface RecommendationSummary {
    /**
     * The ARN of the Recommendation
     */
    arn: AccountRecommendationArn;
    /**
     * The AWS Services that the Recommendation applies to
     */
    awsServices?: RecommendationAwsServiceList;
    /**
     * The AWS Trusted Advisor Check ARN that relates to the Recommendation
     */
    checkArn?: String;
    /**
     * When the Recommendation was created, if created by AWS Trusted Advisor Priority
     */
    createdAt?: SyntheticTimestamp_date_time;
    /**
     * The ID which identifies where the Recommendation was produced
     */
    id: String;
    /**
     * When the Recommendation was last updated
     */
    lastUpdatedAt?: SyntheticTimestamp_date_time;
    /**
     * The lifecycle stage from AWS Trusted Advisor Priority
     */
    lifecycleStage?: RecommendationLifecycleStage;
    /**
     * The name of the AWS Trusted Advisor Recommendation
     */
    name: String;
    /**
     * The pillar aggregations for cost savings
     */
    pillarSpecificAggregates?: RecommendationPillarSpecificAggregates;
    /**
     * The Pillars that the Recommendation is optimizing
     */
    pillars: RecommendationPillarList;
    /**
     * An aggregation of all resources
     */
    resourcesAggregates: RecommendationResourcesAggregates;
    /**
     * The source of the Recommendation
     */
    source: RecommendationSource;
    /**
     * The status of the Recommendation
     */
    status: RecommendationStatus;
    /**
     * Whether the Recommendation was automated or generated by AWS Trusted Advisor Priority
     */
    type: RecommendationType;
  }
  export type RecommendationSummaryList = RecommendationSummary[];
  export type RecommendationType = "standard"|"priority"|string;
  export type RecommendationUpdateReason = string;
  export type ResourceStatus = "ok"|"warning"|"error"|string;
  export type String = string;
  export type StringMap = {[key: string]: String};
  export type SyntheticTimestamp_date_time = Date;
  export type Timestamp = Date;
  export interface UpdateOrganizationRecommendationLifecycleRequest {
    /**
     * The new lifecycle stage
     */
    lifecycleStage: UpdateRecommendationLifecycleStage;
    /**
     * The Recommendation identifier for AWS Trusted Advisor Priority recommendations
     */
    organizationRecommendationIdentifier: OrganizationRecommendationIdentifier;
    /**
     * Reason for the lifecycle stage change
     */
    updateReason?: RecommendationUpdateReason;
    /**
     * Reason code for the lifecycle state change
     */
    updateReasonCode?: UpdateRecommendationLifecycleStageReasonCode;
  }
  export interface UpdateRecommendationLifecycleRequest {
    /**
     * The new lifecycle stage
     */
    lifecycleStage: UpdateRecommendationLifecycleStage;
    /**
     * The Recommendation identifier for AWS Trusted Advisor Priority recommendations
     */
    recommendationIdentifier: AccountRecommendationIdentifier;
    /**
     * Reason for the lifecycle stage change
     */
    updateReason?: RecommendationUpdateReason;
    /**
     * Reason code for the lifecycle state change
     */
    updateReasonCode?: UpdateRecommendationLifecycleStageReasonCode;
  }
  export type UpdateRecommendationLifecycleStage = "pending_response"|"in_progress"|"dismissed"|"resolved"|string;
  export type UpdateRecommendationLifecycleStageReasonCode = "non_critical_account"|"temporary_account"|"valid_business_case"|"other_methods_available"|"low_priority"|"not_applicable"|"other"|string;
  export interface UpdateRecommendationResourceExclusionError {
    /**
     * The ARN of the Recommendation Resource
     */
    arn?: RecommendationResourceArn;
    /**
     * The error code
     */
    errorCode?: String;
    /**
     * The error message
     */
    errorMessage?: String;
  }
  export type UpdateRecommendationResourceExclusionErrorList = UpdateRecommendationResourceExclusionError[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2022-09-15"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the TrustedAdvisor client.
   */
  export import Types = TrustedAdvisor;
}
export = TrustedAdvisor;
