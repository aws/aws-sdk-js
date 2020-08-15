import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class CodeGuruReviewer extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: CodeGuruReviewer.Types.ClientConfiguration)
  config: Config & CodeGuruReviewer.Types.ClientConfiguration;
  /**
   *  Use to associate an AWS CodeCommit repository or a repostory managed by AWS CodeStar Connections with Amazon CodeGuru Reviewer. When you associate a repository, CodeGuru Reviewer reviews source code changes in the repository's pull requests and provides automatic recommendations. You can view recommendations using the CodeGuru Reviewer console. For more information, see Recommendations in Amazon CodeGuru Reviewer in the Amazon CodeGuru Reviewer User Guide.  If you associate a CodeCommit repository, it must be in the same AWS Region and AWS account where its CodeGuru Reviewer code reviews are configured.  Bitbucket and GitHub Enterprise Server repositories are managed by AWS CodeStar Connections to connect to CodeGuru Reviewer. For more information, see Connect to a repository source provider in the Amazon CodeGuru Reviewer User Guide.    You cannot use the CodeGuru Reviewer SDK or the AWS CLI to associate a GitHub repository with Amazon CodeGuru Reviewer. To associate a GitHub repository, use the console. For more information, see Getting started with CodeGuru Reviewer in the CodeGuru Reviewer User Guide.  
   */
  associateRepository(params: CodeGuruReviewer.Types.AssociateRepositoryRequest, callback?: (err: AWSError, data: CodeGuruReviewer.Types.AssociateRepositoryResponse) => void): Request<CodeGuruReviewer.Types.AssociateRepositoryResponse, AWSError>;
  /**
   *  Use to associate an AWS CodeCommit repository or a repostory managed by AWS CodeStar Connections with Amazon CodeGuru Reviewer. When you associate a repository, CodeGuru Reviewer reviews source code changes in the repository's pull requests and provides automatic recommendations. You can view recommendations using the CodeGuru Reviewer console. For more information, see Recommendations in Amazon CodeGuru Reviewer in the Amazon CodeGuru Reviewer User Guide.  If you associate a CodeCommit repository, it must be in the same AWS Region and AWS account where its CodeGuru Reviewer code reviews are configured.  Bitbucket and GitHub Enterprise Server repositories are managed by AWS CodeStar Connections to connect to CodeGuru Reviewer. For more information, see Connect to a repository source provider in the Amazon CodeGuru Reviewer User Guide.    You cannot use the CodeGuru Reviewer SDK or the AWS CLI to associate a GitHub repository with Amazon CodeGuru Reviewer. To associate a GitHub repository, use the console. For more information, see Getting started with CodeGuru Reviewer in the CodeGuru Reviewer User Guide.  
   */
  associateRepository(callback?: (err: AWSError, data: CodeGuruReviewer.Types.AssociateRepositoryResponse) => void): Request<CodeGuruReviewer.Types.AssociateRepositoryResponse, AWSError>;
  /**
   *  Returns the metadata associated with the code review along with its status.
   */
  describeCodeReview(params: CodeGuruReviewer.Types.DescribeCodeReviewRequest, callback?: (err: AWSError, data: CodeGuruReviewer.Types.DescribeCodeReviewResponse) => void): Request<CodeGuruReviewer.Types.DescribeCodeReviewResponse, AWSError>;
  /**
   *  Returns the metadata associated with the code review along with its status.
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
   *  Returns a  RepositoryAssociation  object that contains information about the requested repository association. 
   */
  describeRepositoryAssociation(params: CodeGuruReviewer.Types.DescribeRepositoryAssociationRequest, callback?: (err: AWSError, data: CodeGuruReviewer.Types.DescribeRepositoryAssociationResponse) => void): Request<CodeGuruReviewer.Types.DescribeRepositoryAssociationResponse, AWSError>;
  /**
   *  Returns a  RepositoryAssociation  object that contains information about the requested repository association. 
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
   *  Returns a list of  RecommendationFeedbackSummary  objects that contain customer recommendation feedback for all CodeGuru Reviewer users. 
   */
  listRecommendationFeedback(params: CodeGuruReviewer.Types.ListRecommendationFeedbackRequest, callback?: (err: AWSError, data: CodeGuruReviewer.Types.ListRecommendationFeedbackResponse) => void): Request<CodeGuruReviewer.Types.ListRecommendationFeedbackResponse, AWSError>;
  /**
   *  Returns a list of  RecommendationFeedbackSummary  objects that contain customer recommendation feedback for all CodeGuru Reviewer users. 
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
   *  Returns a list of  RepositoryAssociationSummary  objects that contain summary information about a repository association. You can filter the returned list by  ProviderType ,  Name ,  State , and  Owner . 
   */
  listRepositoryAssociations(params: CodeGuruReviewer.Types.ListRepositoryAssociationsRequest, callback?: (err: AWSError, data: CodeGuruReviewer.Types.ListRepositoryAssociationsResponse) => void): Request<CodeGuruReviewer.Types.ListRepositoryAssociationsResponse, AWSError>;
  /**
   *  Returns a list of  RepositoryAssociationSummary  objects that contain summary information about a repository association. You can filter the returned list by  ProviderType ,  Name ,  State , and  Owner . 
   */
  listRepositoryAssociations(callback?: (err: AWSError, data: CodeGuruReviewer.Types.ListRepositoryAssociationsResponse) => void): Request<CodeGuruReviewer.Types.ListRepositoryAssociationsResponse, AWSError>;
  /**
   *  Stores customer feedback for a CodeGuru Reviewer recommendation. When this API is called again with different reactions the previous feedback is overwritten. 
   */
  putRecommendationFeedback(params: CodeGuruReviewer.Types.PutRecommendationFeedbackRequest, callback?: (err: AWSError, data: CodeGuruReviewer.Types.PutRecommendationFeedbackResponse) => void): Request<CodeGuruReviewer.Types.PutRecommendationFeedbackResponse, AWSError>;
  /**
   *  Stores customer feedback for a CodeGuru Reviewer recommendation. When this API is called again with different reactions the previous feedback is overwritten. 
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
     * The name of the AWS CodeCommit repository. For more information, see repositoryName in the AWS CodeCommit API Reference.
     */
    Name: Name;
  }
  export interface CodeReview {
    /**
     *  The name of the code review. 
     */
    Name?: Name;
    /**
     * The Amazon Resource Name (ARN) of the  CodeReview  object. 
     */
    CodeReviewArn?: Arn;
    /**
     *  The name of the repository. 
     */
    RepositoryName?: Name;
    /**
     * The owner of the repository. For an AWS CodeCommit repository, this is the AWS account ID of the account that owns the repository. For a GitHub or Bitbucket repository, this is the username for the account that owns the repository.
     */
    Owner?: Owner;
    /**
     *  The type of repository that contains the reviewed code (for example, GitHub or Bitbucket). 
     */
    ProviderType?: ProviderType;
    /**
     * The valid code review states are:    Completed: The code review is complete.     Pending: The code review started and has not completed or failed.     Failed: The code review failed.     Deleting: The code review is being deleted.   
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
     * The Amazon Resource Name (ARN) of the  CodeReview  object. 
     */
    CodeReviewArn?: Arn;
    /**
     *  The name of the repository. 
     */
    RepositoryName?: Name;
    /**
     * The owner of the repository. For an AWS CodeCommit repository, this is the AWS account ID of the account that owns the repository. For a GitHub or Bitbucket repository, this is the username for the account that owns the repository.
     */
    Owner?: Owner;
    /**
     *  The provider type of the repository association. 
     */
    ProviderType?: ProviderType;
    /**
     *  The state of the code review.  The valid code review states are:    Completed: The code review is complete.     Pending: The code review started and has not completed or failed.     Failed: The code review failed.     Deleting: The code review is being deleted.   
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
     *  The SHA of the source commit. 
     */
    SourceCommit?: CommitId;
    /**
     *  The SHA of the destination commit. 
     */
    DestinationCommit?: CommitId;
  }
  export type CommitId = string;
  export type ConnectionArn = string;
  export interface DescribeCodeReviewRequest {
    /**
     * The Amazon Resource Name (ARN) of the  CodeReview  object. 
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
     * The Amazon Resource Name (ARN) of the  CodeReview  object. 
     */
    CodeReviewArn: Arn;
    /**
     *  The recommendation ID that can be used to track the provided recommendations and then to collect the feedback. 
     */
    RecommendationId: RecommendationId;
    /**
     *  Optional parameter to describe the feedback for a given user. If this is not supplied, it defaults to the user making the request.   The UserId is an IAM principal that can be specified as an AWS account ID or an Amazon Resource Name (ARN). For more information, see  Specifying a Principal in the AWS Identity and Access Management User Guide. 
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
     * The Amazon Resource Name (ARN) of the  RepositoryAssociation  object. You can retrieve this ARN by calling ListRepositories.
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
     * The Amazon Resource Name (ARN) of the  RepositoryAssociation  object. 
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
     *  List of provider types for filtering that needs to be applied before displaying the result. For example, providerTypes=[GitHub] lists code reviews from GitHub. 
     */
    ProviderTypes?: ProviderTypes;
    /**
     *  List of states for filtering that needs to be applied before displaying the result. For example, states=[Pending] lists code reviews in the Pending state.  The valid code review states are:    Completed: The code review is complete.     Pending: The code review started and has not completed or failed.     Failed: The code review failed.     Deleting: The code review is being deleted.   
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
     * The Amazon Resource Name (ARN) of the  CodeReview  object. 
     */
    CodeReviewArn: Arn;
    /**
     *  An AWS user's account ID or Amazon Resource Name (ARN). Use this ID to query the recommendation feedback for a code review from that user.   The UserId is an IAM principal that can be specified as an AWS account ID or an Amazon Resource Name (ARN). For more information, see  Specifying a Principal in the AWS Identity and Access Management User Guide. 
     */
    UserIds?: UserIds;
    /**
     *  Used to query the recommendation feedback for a given recommendation. 
     */
    RecommendationIds?: RecommendationIds;
  }
  export interface ListRecommendationFeedbackResponse {
    /**
     *  Recommendation feedback summaries corresponding to the code review ARN. 
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
     * The Amazon Resource Name (ARN) of the  CodeReview  object. 
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
     * List of repository association states to use as a filter. The valid repository association states are:    Associated: The repository association is complete.     Associating: CodeGuru Reviewer is:     Setting up pull request notifications. This is required for pull requests to trigger a CodeGuru Reviewer review.    If your repository ProviderType is GitHub or Bitbucket, CodeGuru Reviewer creates webhooks in your repository to trigger CodeGuru Reviewer reviews. If you delete these webhooks, reviews of code in your repository cannot be triggered.      Setting up source code access. This is required for CodeGuru Reviewer to securely clone code in your repository.       Failed: The repository failed to associate or disassociate.     Disassociating: CodeGuru Reviewer is removing the repository's pull request notifications and source code access.   
     */
    States?: RepositoryAssociationStates;
    /**
     * List of repository names to use as a filter.
     */
    Names?: Names;
    /**
     * List of owners to use as a filter. For AWS CodeCommit, it is the name of the CodeCommit account that was used to associate the repository. For other repository source providers, such as Bitbucket, this is name of the account that was used to associate the repository. 
     */
    Owners?: Owners;
    /**
     * The maximum number of repository association results returned by ListRepositoryAssociations in paginated output. When this parameter is used, ListRepositoryAssociations only returns maxResults results in a single page with a nextToken response element. The remaining results of the initial request can be seen by sending another ListRepositoryAssociations request with the returned nextToken value. This value can be between 1 and 100. If this parameter is not used, ListRepositoryAssociations returns up to 100 results and a nextToken value if applicable. 
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
     *  Lines of code metered in the code review. For the initial code review pull request and all subsequent revisions, this includes all lines of code in the files added to the pull request. In subsequent revisions, for files that already existed in the pull request, this includes only the changed lines of code. In both cases, this does not include non-code lines such as comments and import statements. For example, if you submit a pull request containing 5 files, each with 500 lines of code, and in a subsequent revision you added a new file with 200 lines of code, and also modified a total of 25 lines across the initial 5 files, MeteredLinesOfCodeCount includes the first 5 files (5 * 500 = 2,500 lines), the new file (200 lines) and the 25 changed lines of code for a total of 2,725 lines of code. 
     */
    MeteredLinesOfCodeCount?: MeteredLinesOfCodeCount;
    /**
     *  Total number of recommendations found in the code review. 
     */
    FindingsCount?: FindingsCount;
  }
  export interface MetricsSummary {
    /**
     *  Lines of code metered in the code review. For the initial code review pull request and all subsequent revisions, this includes all lines of code in the files added to the pull request. In subsequent revisions, for files that already existed in the pull request, this includes only the changed lines of code. In both cases, this does not include non-code lines such as comments and import statements. For example, if you submit a pull request containing 5 files, each with 500 lines of code, and in a subsequent revision you added a new file with 200 lines of code, and also modified a total of 25 lines across the initial 5 files, MeteredLinesOfCodeCount includes the first 5 files (5 * 500 = 2,500 lines), the new file (200 lines) and the 25 changed lines of code for a total of 2,725 lines of code. 
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
  export type ProviderType = "CodeCommit"|"GitHub"|"Bitbucket"|"GitHubEnterpriseServer"|string;
  export type ProviderTypes = ProviderType[];
  export type PullRequestId = string;
  export interface PutRecommendationFeedbackRequest {
    /**
     * The Amazon Resource Name (ARN) of the  CodeReview  object. 
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
     * The Amazon Resource Name (ARN) of the  CodeReview  object. 
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
     *  The ID of the user that made the API call.   The UserId is an IAM principal that can be specified as an AWS account ID or an Amazon Resource Name (ARN). For more information, see  Specifying a Principal in the AWS Identity and Access Management User Guide. 
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
     *  The ID of the user that gave the feedback.   The UserId is an IAM principal that can be specified as an AWS account ID or an Amazon Resource Name (ARN). For more information, see  Specifying a Principal in the AWS Identity and Access Management User Guide. 
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
     *  Last line where the recommendation is applicable in the source commit or source branch. For a single line comment the start line and end line values are the same. 
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
    /**
     *  Information about a Bitbucket repository. 
     */
    Bitbucket?: ThirdPartySourceRepository;
    /**
     *  Information about a GitHub Enterprise Server repository. 
     */
    GitHubEnterpriseServer?: ThirdPartySourceRepository;
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
     *  The Amazon Resource Name (ARN) of an AWS CodeStar Connections connection. Its format is arn:aws:codestar-connections:region-id:aws-account_id:connection/connection-id. For more information, see Connection in the AWS CodeStar Connections API Reference. 
     */
    ConnectionArn?: ConnectionArn;
    /**
     * The name of the repository.
     */
    Name?: Name;
    /**
     * The owner of the repository. For an AWS CodeCommit repository, this is the AWS account ID of the account that owns the repository. For a GitHub or Bitbucket repository, this is the username for the account that owns the repository.
     */
    Owner?: Owner;
    /**
     * The provider type of the repository association.
     */
    ProviderType?: ProviderType;
    /**
     * The state of the repository association. The valid repository association states are:    Associated: The repository association is complete.     Associating: CodeGuru Reviewer is:     Setting up pull request notifications. This is required for pull requests to trigger a CodeGuru Reviewer review.    If your repository ProviderType is GitHub or Bitbucket, CodeGuru Reviewer creates webhooks in your repository to trigger CodeGuru Reviewer reviews. If you delete these webhooks, reviews of code in your repository cannot be triggered.      Setting up source code access. This is required for CodeGuru Reviewer to securely clone code in your repository.       Failed: The repository failed to associate or disassociate.     Disassociating: CodeGuru Reviewer is removing the repository's pull request notifications and source code access.   
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
     * The Amazon Resource Name (ARN) of the  RepositoryAssociation  object. 
     */
    AssociationArn?: Arn;
    /**
     *  The Amazon Resource Name (ARN) of an AWS CodeStar Connections connection. Its format is arn:aws:codestar-connections:region-id:aws-account_id:connection/connection-id. For more information, see Connection in the AWS CodeStar Connections API Reference. 
     */
    ConnectionArn?: ConnectionArn;
    /**
     * The time, in milliseconds since the epoch, since the repository association was last updated. 
     */
    LastUpdatedTimeStamp?: TimeStamp;
    /**
     *  The repository association ID. 
     */
    AssociationId?: AssociationId;
    /**
     * The name of the repository association.
     */
    Name?: Name;
    /**
     * The owner of the repository. For an AWS CodeCommit repository, this is the AWS account ID of the account that owns the repository. For a GitHub or Bitbucket repository, this is the username for the account that owns the repository.
     */
    Owner?: Owner;
    /**
     * The provider type of the repository association.
     */
    ProviderType?: ProviderType;
    /**
     * The state of the repository association. The valid repository association states are:    Associated: The repository association is complete.     Associating: CodeGuru Reviewer is:     Setting up pull request notifications. This is required for pull requests to trigger a CodeGuru Reviewer review.    If your repository ProviderType is GitHub or Bitbucket, CodeGuru Reviewer creates webhooks in your repository to trigger CodeGuru Reviewer reviews. If you delete these webhooks, reviews of code in your repository cannot be triggered.      Setting up source code access. This is required for CodeGuru Reviewer to securely clone code in your repository.       Failed: The repository failed to associate or disassociate.     Disassociating: CodeGuru Reviewer is removing the repository's pull request notifications and source code access.   
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
  export interface ThirdPartySourceRepository {
    /**
     *  The name of the third party source repository. 
     */
    Name: Name;
    /**
     *  The Amazon Resource Name (ARN) of an AWS CodeStar Connections connection. Its format is arn:aws:codestar-connections:region-id:aws-account_id:connection/connection-id. For more information, see Connection in the AWS CodeStar Connections API Reference. 
     */
    ConnectionArn: ConnectionArn;
    /**
     *  The owner of the repository. For a GitHub, GitHub Enterprise, or Bitbucket repository, this is the username for the account that owns the repository. 
     */
    Owner: Owner;
  }
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
