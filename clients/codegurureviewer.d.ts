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
   * Associates an AWS CodeCommit repository with Amazon CodeGuru Reviewer. When you associate an AWS CodeCommit repository with Amazon CodeGuru Reviewer, Amazon CodeGuru Reviewer will provide recommendations for each pull request. You can view recommendations in the AWS CodeCommit repository. You can associate a GitHub repository using the Amazon CodeGuru Reviewer console.
   */
  associateRepository(params: CodeGuruReviewer.Types.AssociateRepositoryRequest, callback?: (err: AWSError, data: CodeGuruReviewer.Types.AssociateRepositoryResponse) => void): Request<CodeGuruReviewer.Types.AssociateRepositoryResponse, AWSError>;
  /**
   * Associates an AWS CodeCommit repository with Amazon CodeGuru Reviewer. When you associate an AWS CodeCommit repository with Amazon CodeGuru Reviewer, Amazon CodeGuru Reviewer will provide recommendations for each pull request. You can view recommendations in the AWS CodeCommit repository. You can associate a GitHub repository using the Amazon CodeGuru Reviewer console.
   */
  associateRepository(callback?: (err: AWSError, data: CodeGuruReviewer.Types.AssociateRepositoryResponse) => void): Request<CodeGuruReviewer.Types.AssociateRepositoryResponse, AWSError>;
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
   * Lists repository associations. You can optionally filter on one or more of the following recommendation properties: provider types, states, names, and owners.
   */
  listRepositoryAssociations(params: CodeGuruReviewer.Types.ListRepositoryAssociationsRequest, callback?: (err: AWSError, data: CodeGuruReviewer.Types.ListRepositoryAssociationsResponse) => void): Request<CodeGuruReviewer.Types.ListRepositoryAssociationsResponse, AWSError>;
  /**
   * Lists repository associations. You can optionally filter on one or more of the following recommendation properties: provider types, states, names, and owners.
   */
  listRepositoryAssociations(callback?: (err: AWSError, data: CodeGuruReviewer.Types.ListRepositoryAssociationsResponse) => void): Request<CodeGuruReviewer.Types.ListRepositoryAssociationsResponse, AWSError>;
}
declare namespace CodeGuruReviewer {
  export type Arn = string;
  export interface AssociateRepositoryRequest {
    /**
     * The repository to associate.
     */
    Repository: Repository;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you want to add a new repository association, this parameter specifies a unique identifier for the new repository association that helps ensure idempotency. If you use the AWS CLI or one of the AWS SDK to call this operation, then you can leave this parameter empty. The CLI or SDK generates a random UUID for you and includes that in the request. If you don't use the SDK and instead generate a raw HTTP request to the Secrets Manager service endpoint, then you must generate a ClientRequestToken yourself for new versions and include that value in the request. You typically only need to interact with this value if you implement your own retry logic and want to ensure that a given repository association is not created twice. We recommend that you generate a UUID-type value to ensure uniqueness within the specified repository association. Amazon CodeGuru Reviewer uses this value to prevent the accidental creation of duplicate repository associations if there are failures and retries. 
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
  export interface DescribeRepositoryAssociationRequest {
    /**
     * The Amazon Resource Name (ARN) identifying the association.
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
     * List of names to use as a filter.
     */
    Names?: Names;
    /**
     * List of owners to use as a filter. For AWS CodeCommit, the owner is the AWS account id. For GitHub, it is the GitHub account name.
     */
    Owners?: Owners;
    /**
     * The maximum number of repository association results returned by ListRepositoryAssociations in paginated output. When this parameter is used, ListRepositoryAssociations only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListRepositoryAssociations request with the returned nextToken value. This value can be between 1 and 100. If this parameter is not used, then ListRepositoryAssociations returns up to 100 results and a nextToken value if applicable. 
     */
    MaxResults?: MaxResults;
    /**
     * The nextToken value returned from a previous paginated ListRepositoryAssociations request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.   This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes. 
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
  export type Name = string;
  export type Names = Name[];
  export type NextToken = string;
  export type Owner = string;
  export type Owners = Owner[];
  export type ProviderType = "CodeCommit"|"GitHub"|string;
  export type ProviderTypes = ProviderType[];
  export interface Repository {
    /**
     * Information about an AWS CodeCommit repository.
     */
    CodeCommit?: CodeCommitRepository;
  }
  export interface RepositoryAssociation {
    /**
     * The id of the repository association.
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
     * The state of the repository association.  Associated  Amazon CodeGuru Reviewer is associated with the repository.   Associating  The association is in progress.   Failed  The association failed. For more information about troubleshooting (or why it failed), see [troubleshooting topic].   Disassociating  Amazon CodeGuru Reviewer is in the process of disassociating with the repository.   
     */
    State?: RepositoryAssociationState;
  }
  export type StateReason = string;
  export type TimeStamp = Date;
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
