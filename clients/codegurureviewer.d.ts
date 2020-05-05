import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class CodeGuruReviewer extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: CodeGuruReviewer.Types.ClientConfiguration)
  config: Config & CodeGuruReviewer.Types.ClientConfiguration;
  /**
   * Associates an AWS CodeCommit repository with Amazon CodeGuru Reviewer. When you associate an AWS CodeCommit repository with Amazon CodeGuru Reviewer, Amazon CodeGuru Reviewer will provide recommendations for each pull request raised within the repository. You can view recommendations in the AWS CodeCommit repository. You can associate a GitHub repository using the Amazon CodeGuru Reviewer console.
   */
  associateRepository(params: CodeGuruReviewer.Types.AssociateRepositoryRequest, callback?: (err: AWSError, data: CodeGuruReviewer.Types.AssociateRepositoryResponse) => void): Request<CodeGuruReviewer.Types.AssociateRepositoryResponse, AWSError>;
  /**
   * Associates an AWS CodeCommit repository with Amazon CodeGuru Reviewer. When you associate an AWS CodeCommit repository with Amazon CodeGuru Reviewer, Amazon CodeGuru Reviewer will provide recommendations for each pull request raised within the repository. You can view recommendations in the AWS CodeCommit repository. You can associate a GitHub repository using the Amazon CodeGuru Reviewer console.
   */
  associateRepository(callback?: (err: AWSError, data: CodeGuruReviewer.Types.AssociateRepositoryResponse) => void): Request<CodeGuruReviewer.Types.AssociateRepositoryResponse, AWSError>;
  /**
   *  Returns the metadaata associated with the code review along with its status.
   */
  describeCodeReview(params: CodeGuruReviewer.Types.DescribeCodeReviewRequest, callback?: (err: AWSError, data: CodeGuruReviewer.Types.DescribeCodeReviewResponse) => void): Request<CodeGuruReviewer.Types.DescribeCodeReviewResponse, AWSError>;
  /**
   *  Returns the metadaata associated with the code review along with its status.
   */
  describeCodeReview(callback?: (err: AWSError, data: CodeGuruReviewer.Types.DescribeCodeReviewResponse) => void): Request<CodeGuruReviewer.Types.DescribeCodeReviewResponse, AWSError>;
  /**
   *  Describes the customer feedback for a CodeGuru Reviewer recommendation. 
   */
  describeRecommendationFeedback(params: CodeGuruReviewer.Types.DescribeRecommendationFeedbackRequest, callback?: (err: AWSError, data: CodeGuruReviewer.Types.DescribeRecommendationFeedbackResponse) => void): Request<CodeGuruReviewer.Types.DescribeRecommendationFeedbackResponse, AWSError>;
  /**
   *  Describes the customer feedback for a CodeGuru Reviewer recommendation. 
   */
  describeRecommendationFeedback(callback?: (err: AWSError, data: CodeGuruReviewer.Types.DescribeRecommendationFeedbackResponse) => void): Request<CodeGuruReviewer.Types.DescribeRecommendationFeedbackResponse, AWSError>;
  /**
   * Describes a repository association.
   */
  describeRepositoryAssociation(params: CodeGuruReviewer.Types.DescribeRepositoryAssociationRequest, callback?: (err: AWSError, data: CodeGuruReviewer.Types.DescribeRepositoryAssociationResponse) => void): Request<CodeGuruReviewer.Types.DescribeRepositoryAssociationResponse, AWSError>;
  /**
   * Describes a repository association.
   */
  describeRepositoryAssociation(callback?: (err: AWSError, data: CodeGuruReviewer.Types.DescribeRepositoryAssociationResponse) => void): Request<CodeGuruReviewer.Types.DescribeRepositoryAssociationResponse, AWSError>;
  /**
   * Removes the association between Amazon CodeGuru Reviewer and a repository.
   */
  disassociateRepository(params: CodeGuruReviewer.Types.DisassociateRepositoryRequest, callback?: (err: AWSError, data: CodeGuruReviewer.Types.DisassociateRepositoryResponse) => void): Request<CodeGuruReviewer.Types.DisassociateRepositoryResponse, AWSError>;
  /**
   * Removes the association between Amazon CodeGuru Reviewer and a repository.
   */
  disassociateRepository(callback?: (err: AWSError, data: CodeGuruReviewer.Types.DisassociateRepositoryResponse) => void): Request<CodeGuruReviewer.Types.DisassociateRepositoryResponse, AWSError>;
  /**
   *  Lists all the code reviews that the customer has created in the past 90 days. 
   */
  listCodeReviews(params: CodeGuruReviewer.Types.ListCodeReviewsRequest, callback?: (err: AWSError, data: CodeGuruReviewer.Types.ListCodeReviewsResponse) => void): Request<CodeGuruReviewer.Types.ListCodeReviewsResponse, AWSError>;
  /**
   *  Lists all the code reviews that the customer has created in the past 90 days. 
   */
  listCodeReviews(callback?: (err: AWSError, data: CodeGuruReviewer.Types.ListCodeReviewsResponse) => void): Request<CodeGuruReviewer.Types.ListCodeReviewsResponse, AWSError>;
  /**
   *  Lists the customer feedback for a CodeGuru Reviewer recommendation for all users. This API will be used from the console to extract the previously given feedback by the user to pre-populate the feedback emojis for all recommendations. 
   */
  listRecommendationFeedback(params: CodeGuruReviewer.Types.ListRecommendationFeedbackRequest, callback?: (err: AWSError, data: CodeGuruReviewer.Types.ListRecommendationFeedbackResponse) => void): Request<CodeGuruReviewer.Types.ListRecommendationFeedbackResponse, AWSError>;
  /**
   *  Lists the customer feedback for a CodeGuru Reviewer recommendation for all users. This API will be used from the console to extract the previously given feedback by the user to pre-populate the feedback emojis for all recommendations. 
   */
  listRecommendationFeedback(callback?: (err: AWSError, data: CodeGuruReviewer.Types.ListRecommendationFeedbackResponse) => void): Request<CodeGuruReviewer.Types.ListRecommendationFeedbackResponse, AWSError>;
  /**
   *  Returns the list of all recommendations for a completed code review. 
   */
  listRecommendations(params: CodeGuruReviewer.Types.ListRecommendationsRequest, callback?: (err: AWSError, data: CodeGuruReviewer.Types.ListRecommendationsResponse) => void): Request<CodeGuruReviewer.Types.ListRecommendationsResponse, AWSError>;
  /**
   *  Returns the list of all recommendations for a completed code review. 
   */
  listRecommendations(callback?: (err: AWSError, data: CodeGuruReviewer.Types.ListRecommendationsResponse) => void): Request<CodeGuruReviewer.Types.ListRecommendationsResponse, AWSError>;
  /**
   * Lists repository associations. You can optionally filter on one or more of the following recommendation properties: provider types, states, names, and owners.
   */
  listRepositoryAssociations(params: CodeGuruReviewer.Types.ListRepositoryAssociationsRequest, callback?: (err: AWSError, data: CodeGuruReviewer.Types.ListRepositoryAssociationsResponse) => void): Request<CodeGuruReviewer.Types.ListRepositoryAssociationsResponse, AWSError>;
  /**
   * Lists repository associations. You can optionally filter on one or more of the following recommendation properties: provider types, states, names, and owners.
   */
  listRepositoryAssociations(callback?: (err: AWSError, data: CodeGuruReviewer.Types.ListRepositoryAssociationsResponse) => void): Request<CodeGuruReviewer.Types.ListRepositoryAssociationsResponse, AWSError>;
  /**
   *  Stores customer feedback for a CodeGuru-Reviewer recommendation. When this API is called again with different reactions the previous feedback is overwritten. 
   */
  putRecommendationFeedback(params: CodeGuruReviewer.Types.PutRecommendationFeedbackRequest, callback?: (err: AWSError, data: CodeGuruReviewer.Types.PutRecommendationFeedbackResponse) => void): Request<CodeGuruReviewer.Types.PutRecommendationFeedbackResponse, AWSError>;
  /**
   *  Stores customer feedback for a CodeGuru-Reviewer recommendation. When this API is called again with different reactions the previous feedback is overwritten. 
   */
  putRecommendationFeedback(callback?: (err: AWSError, data: CodeGuruReviewer.Types.PutRecommendationFeedbackResponse) => void): Request<CodeGuruReviewer.Types.PutRecommendationFeedbackResponse, AWSError>;
}
declare namespace CodeGuruReviewer {
  export type Arn = string;
  export interface AssociateRepositoryRequest {
    /**
     * The repository to associate.
     */
    Repository: Repository;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. To add a new repository association, this parameter specifies a unique identifier for the new repository association that helps ensure idempotency. If you use the AWS CLI or one of the AWS SDKs to call this operation, you can leave this parameter empty. The CLI or SDK generates a random UUID for you and includes that in the request. If you don't use the SDK and instead generate a raw HTTP request to the Secrets Manager service endpoint, you must generate a ClientRequestToken yourself for new versions and include that value in the request. You typically interact with this value if you implement your own retry logic and want to ensure that a given repository association is not created twice. We recommend that you generate a UUID-type value to ensure uniqueness within the specified repository association. Amazon CodeGuru Reviewer uses this value to prevent the accidental creation of duplicate repository associations if there are failures and retries. 
     */
    ClientRequestToken?: ClientRequestToken;
  }
  export interface AssociateRepositoryResponse {
    /**
     * Information about the repository association.
     */
    RepositoryAssociation?: RepositoryAssociation;
  }
  export type AssociationId = string;
  export type ClientRequestToken = string;
  export interface CodeCommitRepository {
    /**
     * The name of the AWS CodeCommit repository.
     */
    Name: Name;
  }
  export interface CodeReview {
    /**
     *  The name of the code review. 
     */
    Name?: Name;
    /**
     *  The Amazon Resource Name (ARN) of the code review to describe. 
     */
    CodeReviewArn?: Arn;
    /**
     *  The name of the repository. 
     */
    RepositoryName?: Name;
    /**
     *  The owner of the repository. 
     */
    Owner?: Owner;
    /**
     *  The provider type of the repository association. 
     */
    ProviderType?: ProviderType;
    /**
     *  The state of the code review. 
     */
    State?: JobState;
    /**
     *  The reason for the state of the code review. 
     */
    StateReason?: StateReason;
    /**
     *  The time, in milliseconds since the epoch, when the code review was created. 
     */
    CreatedTimeStamp?: TimeStamp;
    /**
     *  The time, in milliseconds since the epoch, when the code review was last updated. 
     */
    LastUpdatedTimeStamp?: TimeStamp;
    /**
     *  The type of code review. 
     */
    Type?: Type;
    /**
     *  The pull request ID for the code review. 
     */
    PullRequestId?: PullRequestId;
    /**
     *  The type of the source code for the code review. 
     */
    SourceCodeType?: SourceCodeType;
    /**
     *  The statistics from the code review. 
     */
    Metrics?: Metrics;
  }
  export type CodeReviewSummaries = CodeReviewSummary[];
  export interface CodeReviewSummary {
    /**
     *  The name of the code review. 
     */
    Name?: Name;
    /**
     *  The Amazon Resource Name (ARN) of the code review to describe. 
     */
    CodeReviewArn?: Arn;
    /**
     *  The name of the repository. 
     */
    RepositoryName?: Name;
    /**
     *  The owner of the repository. 
     */
    Owner?: Owner;
    /**
     *  The provider type of the repository association. 
     */
    ProviderType?: ProviderType;
    /**
     *  The state of the code review. 
     */
    State?: JobState;
    /**
     *  The time, in milliseconds since the epoch, when the code review was created. 
     */
    CreatedTimeStamp?: TimeStamp;
    /**
     *  The time, in milliseconds since the epoch, when the code review was last updated. 
     */
    LastUpdatedTimeStamp?: TimeStamp;
    /**
     *  The type of the code review. 
     */
    Type?: Type;
    /**
     *  The pull request ID for the code review. 
     */
    PullRequestId?: PullRequestId;
    /**
     *  The statistics from the code review. 
     */
    MetricsSummary?: MetricsSummary;
  }
  export interface CommitDiffSourceCodeType {
    /**
     *  Source Commit SHA. 
     */
    SourceCommit?: CommitId;
    /**
     *  Destination Commit SHA 
     */
    DestinationCommit?: CommitId;
  }
  export type CommitId = string;
  export interface DescribeCodeReviewRequest {
    /**
     *  The Amazon Resource Name (ARN) of the code review to describe. 
     */
    CodeReviewArn: Arn;
  }
  export interface DescribeCodeReviewResponse {
    /**
     *  Information about the code review. 
     */
    CodeReview?: CodeReview;
  }
  export interface DescribeRecommendationFeedbackRequest {
    /**
     *  The Amazon Resource Name (ARN) that identifies the code review. 
     */
    CodeReviewArn: Arn;
    /**
     *  The recommendation ID that can be used to track the provided recommendations and then to collect the feedback. 
     */
    RecommendationId: RecommendationId;
    /**
     *  Optional parameter to describe the feedback for a given user. If this is not supplied, it defaults to the user making the request. 
     */
    UserId?: UserId;
  }
  export interface DescribeRecommendationFeedbackResponse {
    /**
     *  The recommendation feedback given by the user. 
     */
    RecommendationFeedback?: RecommendationFeedback;
  }
  export interface DescribeRepositoryAssociationRequest {
    /**
     * The Amazon Resource Name (ARN) identifying the association. You can retrieve this ARN by calling ListRepositories.
     */
    AssociationArn: Arn;
  }
  export interface DescribeRepositoryAssociationResponse {
    /**
     * Information about the repository association.
     */
    RepositoryAssociation?: RepositoryAssociation;
  }
  export interface DisassociateRepositoryRequest {
    /**
     * The Amazon Resource Name (ARN) identifying the association.
     */
    AssociationArn: Arn;
  }
  export interface DisassociateRepositoryResponse {
    /**
     * Information about the disassociated repository.
     */
    RepositoryAssociation?: RepositoryAssociation;
  }
  export type FilePath = string;
  export type FindingsCount = number;
  export type JobState = "Completed"|"Pending"|"Failed"|"Deleting"|string;
  export type JobStates = JobState[];
  export type LineNumber = number;
  export type ListCodeReviewsMaxResults = number;
  export interface ListCodeReviewsRequest {
    /**
     *  List of provider types for filtering that needs to be applied before displaying the result. For example, "providerTypes=[GitHub]" will list code reviews from GitHub. 
     */
    ProviderTypes?: ProviderTypes;
    /**
     *  List of states for filtering that needs to be applied before displaying the result. For example, "states=[Pending]" will list code reviews in the Pending state. 
     */
    States?: JobStates;
    /**
     *  List of repository names for filtering that needs to be applied before displaying the result. 
     */
    RepositoryNames?: RepositoryNames;
    /**
     *  The type of code reviews to list in the response. 
     */
    Type: Type;
    /**
     *  The maximum number of results that are returned per call. The default is 100. 
     */
    MaxResults?: ListCodeReviewsMaxResults;
    /**
     *  If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. 
     */
    NextToken?: NextToken;
  }
  export interface ListCodeReviewsResponse {
    /**
     *  A list of code reviews that meet the criteria of the request. 
     */
    CodeReviewSummaries?: CodeReviewSummaries;
    /**
     *  Pagination token. 
     */
    NextToken?: NextToken;
  }
  export interface ListRecommendationFeedbackRequest {
    /**
     *  If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. 
     */
    NextToken?: NextToken;
    /**
     *  The maximum number of results that are returned per call. The default is 100. 
     */
    MaxResults?: MaxResults;
    /**
     *  The Amazon Resource Name (ARN) that identifies the code review. 
     */
    CodeReviewArn: Arn;
    /**
     *  Filter on userIds that need to be applied before displaying the result. This can be used to query all the recommendation feedback for a code review from a given user. 
     */
    UserIds?: UserIds;
    /**
     *  Filter on recommendationIds that need to be applied before displaying the result. This can be used to query all the recommendation feedback for a given recommendation. 
     */
    RecommendationIds?: RecommendationIds;
  }
  export interface ListRecommendationFeedbackResponse {
    /**
     *  Recommendation feedback summaries corresponding to the code reivew ARN. 
     */
    RecommendationFeedbackSummaries?: RecommendationFeedbackSummaries;
    /**
     *  If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. 
     */
    NextToken?: NextToken;
  }
  export interface ListRecommendationsRequest {
    /**
     *  Pagination token. 
     */
    NextToken?: NextToken;
    /**
     *  The maximum number of results that are returned per call. The default is 100. 
     */
    MaxResults?: MaxResults;
    /**
     *  The Amazon Resource Name (ARN) of the code review to describe. 
     */
    CodeReviewArn: Arn;
  }
  export interface ListRecommendationsResponse {
    /**
     *  List of recommendations for the requested code review. 
     */
    RecommendationSummaries?: RecommendationSummaries;
    /**
     *  Pagination token. 
     */
    NextToken?: NextToken;
  }
  export interface ListRepositoryAssociationsRequest {
    /**
     * List of provider types to use as a filter.
     */
    ProviderTypes?: ProviderTypes;
    /**
     * List of states to use as a filter.
     */
    States?: RepositoryAssociationStates;
    /**
     * List of repository names to use as a filter.
     */
    Names?: Names;
    /**
     * List of owners to use as a filter. For GitHub, this is name of the GitHub account that was used to associate the repository. For AWS CodeCommit, it is the name of the CodeCommit account that was used to associate the repository.
     */
    Owners?: Owners;
    /**
     * The maximum number of repository association results returned by ListRepositoryAssociations in paginated output. When this parameter is used, ListRepositoryAssociations only returns maxResults results in a single page with a nextToken response element. The remaining results of the initial request can be seen by sending another ListRepositoryAssociations request with the returned nextToken value. This value can be between 1 and 25. If this parameter is not used, ListRepositoryAssociations returns up to 25 results and a nextToken value if applicable. 
     */
    MaxResults?: MaxResults;
    /**
     * The nextToken value returned from a previous paginated ListRepositoryAssociations request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.   Treat this token as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes. 
     */
    NextToken?: NextToken;
  }
  export interface ListRepositoryAssociationsResponse {
    /**
     * A list of repository associations that meet the criteria of the request.
     */
    RepositoryAssociationSummaries?: RepositoryAssociationSummaries;
    /**
     * The nextToken value to include in a future ListRecommendations request. When the results of a ListRecommendations request exceed maxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return. 
     */
    NextToken?: NextToken;
  }
  export type MaxResults = number;
  export type MeteredLinesOfCodeCount = number;
  export interface Metrics {
    /**
     *  Lines of code metered in the code review. 
     */
    MeteredLinesOfCodeCount?: MeteredLinesOfCodeCount;
    /**
     *  Total number of recommendations found in the code review. 
     */
    FindingsCount?: FindingsCount;
  }
  export interface MetricsSummary {
    /**
     *  Lines of code metered in the code review. 
     */
    MeteredLinesOfCodeCount?: MeteredLinesOfCodeCount;
    /**
     *  Total number of recommendations found in the code review. 
     */
    FindingsCount?: FindingsCount;
  }
  export type Name = string;
  export type Names = Name[];
  export type NextToken = string;
  export type Owner = string;
  export type Owners = Owner[];
  export type ProviderType = "CodeCommit"|"GitHub"|string;
  export type ProviderTypes = ProviderType[];
  export type PullRequestId = string;
  export interface PutRecommendationFeedbackRequest {
    /**
     *  The Amazon Resource Name (ARN) that identifies the code review. 
     */
    CodeReviewArn: Arn;
    /**
     *  The recommendation ID that can be used to track the provided recommendations and then to collect the feedback. 
     */
    RecommendationId: RecommendationId;
    /**
     *  List for storing reactions. Reactions are utf-8 text code for emojis. If you send an empty list it clears all your feedback. 
     */
    Reactions: Reactions;
  }
  export interface PutRecommendationFeedbackResponse {
  }
  export type Reaction = "ThumbsUp"|"ThumbsDown"|string;
  export type Reactions = Reaction[];
  export interface RecommendationFeedback {
    /**
     *  The Amazon Resource Name (ARN) that identifies the code review. 
     */
    CodeReviewArn?: Arn;
    /**
     *  The recommendation ID that can be used to track the provided recommendations. Later on it can be used to collect the feedback. 
     */
    RecommendationId?: RecommendationId;
    /**
     *  List for storing reactions. Reactions are utf-8 text code for emojis. You can send an empty list to clear off all your feedback. 
     */
    Reactions?: Reactions;
    /**
     *  The user principal that made the API call. 
     */
    UserId?: UserId;
    /**
     *  The time at which the feedback was created. 
     */
    CreatedTimeStamp?: TimeStamp;
    /**
     *  The time at which the feedback was last updated. 
     */
    LastUpdatedTimeStamp?: TimeStamp;
  }
  export type RecommendationFeedbackSummaries = RecommendationFeedbackSummary[];
  export interface RecommendationFeedbackSummary {
    /**
     *  The recommendation ID that can be used to track the provided recommendations. Later on it can be used to collect the feedback. 
     */
    RecommendationId?: RecommendationId;
    /**
     *  List for storing reactions. Reactions are utf-8 text code for emojis. 
     */
    Reactions?: Reactions;
    /**
     *  The identifier for the user that gave the feedback. 
     */
    UserId?: UserId;
  }
  export type RecommendationId = string;
  export type RecommendationIds = RecommendationId[];
  export type RecommendationSummaries = RecommendationSummary[];
  export interface RecommendationSummary {
    /**
     * Name of the file on which a recommendation is provided.
     */
    FilePath?: FilePath;
    /**
     *  The recommendation ID that can be used to track the provided recommendations. Later on it can be used to collect the feedback. 
     */
    RecommendationId?: RecommendationId;
    /**
     *  Start line from where the recommendation is applicable in the source commit or source branch. 
     */
    StartLine?: LineNumber;
    /**
     *  Last line where the recommendation is applicable in the source commit or source branch. For a single line comment the start line and end line values will be the same. 
     */
    EndLine?: LineNumber;
    /**
     *  A description of the recommendation generated by CodeGuru Reviewer for the lines of code between the start line and the end line. 
     */
    Description?: Text;
  }
  export interface Repository {
    /**
     * Information about an AWS CodeCommit repository.
     */
    CodeCommit?: CodeCommitRepository;
  }
  export interface RepositoryAssociation {
    /**
     * The ID of the repository association.
     */
    AssociationId?: AssociationId;
    /**
     * The Amazon Resource Name (ARN) identifying the repository association.
     */
    AssociationArn?: Arn;
    /**
     * The name of the repository.
     */
    Name?: Name;
    /**
     * The owner of the repository.
     */
    Owner?: Owner;
    /**
     * The provider type of the repository association.
     */
    ProviderType?: ProviderType;
    /**
     * The state of the repository association.
     */
    State?: RepositoryAssociationState;
    /**
     * A description of why the repository association is in the current state.
     */
    StateReason?: StateReason;
    /**
     * The time, in milliseconds since the epoch, when the repository association was last updated.
     */
    LastUpdatedTimeStamp?: TimeStamp;
    /**
     * The time, in milliseconds since the epoch, when the repository association was created.
     */
    CreatedTimeStamp?: TimeStamp;
  }
  export type RepositoryAssociationState = "Associated"|"Associating"|"Failed"|"Disassociating"|string;
  export type RepositoryAssociationStates = RepositoryAssociationState[];
  export type RepositoryAssociationSummaries = RepositoryAssociationSummary[];
  export interface RepositoryAssociationSummary {
    /**
     * The Amazon Resource Name (ARN) identifying the repository association.
     */
    AssociationArn?: Arn;
    /**
     * The time, in milliseconds since the epoch, since the repository association was last updated. 
     */
    LastUpdatedTimeStamp?: TimeStamp;
    /**
     * The repository association ID.
     */
    AssociationId?: AssociationId;
    /**
     * The name of the repository association.
     */
    Name?: Name;
    /**
     * The owner of the repository association.
     */
    Owner?: Owner;
    /**
     * The provider type of the repository association.
     */
    ProviderType?: ProviderType;
    /**
     * The state of the repository association.  Associated  Amazon CodeGuru Reviewer is associated with the repository.   Associating  The association is in progress.   Failed  The association failed.   Disassociating  Amazon CodeGuru Reviewer is in the process of disassociating with the repository.   
     */
    State?: RepositoryAssociationState;
  }
  export type RepositoryNames = Name[];
  export interface SourceCodeType {
    /**
     *  The commit diff for the pull request. 
     */
    CommitDiff?: CommitDiffSourceCodeType;
  }
  export type StateReason = string;
  export type Text = string;
  export type TimeStamp = Date;
  export type Type = "PullRequest"|string;
  export type UserId = string;
  export type UserIds = UserId[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2019-09-19"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the CodeGuruReviewer client.
   */
  export import Types = CodeGuruReviewer;
}
export = CodeGuruReviewer;
