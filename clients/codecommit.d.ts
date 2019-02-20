import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class CodeCommit extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: CodeCommit.Types.ClientConfiguration)
  config: Config & CodeCommit.Types.ClientConfiguration;
  /**
   * Returns information about one or more repositories.  The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a web page could expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a web page. 
   */
  batchGetRepositories(params: CodeCommit.Types.BatchGetRepositoriesInput, callback?: (err: AWSError, data: CodeCommit.Types.BatchGetRepositoriesOutput) => void): Request<CodeCommit.Types.BatchGetRepositoriesOutput, AWSError>;
  /**
   * Returns information about one or more repositories.  The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a web page could expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a web page. 
   */
  batchGetRepositories(callback?: (err: AWSError, data: CodeCommit.Types.BatchGetRepositoriesOutput) => void): Request<CodeCommit.Types.BatchGetRepositoriesOutput, AWSError>;
  /**
   * Creates a new branch in a repository and points the branch to a commit.  Calling the create branch operation does not set a repository's default branch. To do this, call the update default branch operation. 
   */
  createBranch(params: CodeCommit.Types.CreateBranchInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates a new branch in a repository and points the branch to a commit.  Calling the create branch operation does not set a repository's default branch. To do this, call the update default branch operation. 
   */
  createBranch(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates a commit for a repository on the tip of a specified branch.
   */
  createCommit(params: CodeCommit.Types.CreateCommitInput, callback?: (err: AWSError, data: CodeCommit.Types.CreateCommitOutput) => void): Request<CodeCommit.Types.CreateCommitOutput, AWSError>;
  /**
   * Creates a commit for a repository on the tip of a specified branch.
   */
  createCommit(callback?: (err: AWSError, data: CodeCommit.Types.CreateCommitOutput) => void): Request<CodeCommit.Types.CreateCommitOutput, AWSError>;
  /**
   * Creates a pull request in the specified repository.
   */
  createPullRequest(params: CodeCommit.Types.CreatePullRequestInput, callback?: (err: AWSError, data: CodeCommit.Types.CreatePullRequestOutput) => void): Request<CodeCommit.Types.CreatePullRequestOutput, AWSError>;
  /**
   * Creates a pull request in the specified repository.
   */
  createPullRequest(callback?: (err: AWSError, data: CodeCommit.Types.CreatePullRequestOutput) => void): Request<CodeCommit.Types.CreatePullRequestOutput, AWSError>;
  /**
   * Creates a new, empty repository.
   */
  createRepository(params: CodeCommit.Types.CreateRepositoryInput, callback?: (err: AWSError, data: CodeCommit.Types.CreateRepositoryOutput) => void): Request<CodeCommit.Types.CreateRepositoryOutput, AWSError>;
  /**
   * Creates a new, empty repository.
   */
  createRepository(callback?: (err: AWSError, data: CodeCommit.Types.CreateRepositoryOutput) => void): Request<CodeCommit.Types.CreateRepositoryOutput, AWSError>;
  /**
   * Deletes a branch from a repository, unless that branch is the default branch for the repository. 
   */
  deleteBranch(params: CodeCommit.Types.DeleteBranchInput, callback?: (err: AWSError, data: CodeCommit.Types.DeleteBranchOutput) => void): Request<CodeCommit.Types.DeleteBranchOutput, AWSError>;
  /**
   * Deletes a branch from a repository, unless that branch is the default branch for the repository. 
   */
  deleteBranch(callback?: (err: AWSError, data: CodeCommit.Types.DeleteBranchOutput) => void): Request<CodeCommit.Types.DeleteBranchOutput, AWSError>;
  /**
   * Deletes the content of a comment made on a change, file, or commit in a repository.
   */
  deleteCommentContent(params: CodeCommit.Types.DeleteCommentContentInput, callback?: (err: AWSError, data: CodeCommit.Types.DeleteCommentContentOutput) => void): Request<CodeCommit.Types.DeleteCommentContentOutput, AWSError>;
  /**
   * Deletes the content of a comment made on a change, file, or commit in a repository.
   */
  deleteCommentContent(callback?: (err: AWSError, data: CodeCommit.Types.DeleteCommentContentOutput) => void): Request<CodeCommit.Types.DeleteCommentContentOutput, AWSError>;
  /**
   * Deletes a specified file from a specified branch. A commit is created on the branch that contains the revision. The file will still exist in the commits prior to the commit that contains the deletion.
   */
  deleteFile(params: CodeCommit.Types.DeleteFileInput, callback?: (err: AWSError, data: CodeCommit.Types.DeleteFileOutput) => void): Request<CodeCommit.Types.DeleteFileOutput, AWSError>;
  /**
   * Deletes a specified file from a specified branch. A commit is created on the branch that contains the revision. The file will still exist in the commits prior to the commit that contains the deletion.
   */
  deleteFile(callback?: (err: AWSError, data: CodeCommit.Types.DeleteFileOutput) => void): Request<CodeCommit.Types.DeleteFileOutput, AWSError>;
  /**
   * Deletes a repository. If a specified repository was already deleted, a null repository ID will be returned.  Deleting a repository also deletes all associated objects and metadata. After a repository is deleted, all future push calls to the deleted repository will fail. 
   */
  deleteRepository(params: CodeCommit.Types.DeleteRepositoryInput, callback?: (err: AWSError, data: CodeCommit.Types.DeleteRepositoryOutput) => void): Request<CodeCommit.Types.DeleteRepositoryOutput, AWSError>;
  /**
   * Deletes a repository. If a specified repository was already deleted, a null repository ID will be returned.  Deleting a repository also deletes all associated objects and metadata. After a repository is deleted, all future push calls to the deleted repository will fail. 
   */
  deleteRepository(callback?: (err: AWSError, data: CodeCommit.Types.DeleteRepositoryOutput) => void): Request<CodeCommit.Types.DeleteRepositoryOutput, AWSError>;
  /**
   * Returns information about one or more pull request events.
   */
  describePullRequestEvents(params: CodeCommit.Types.DescribePullRequestEventsInput, callback?: (err: AWSError, data: CodeCommit.Types.DescribePullRequestEventsOutput) => void): Request<CodeCommit.Types.DescribePullRequestEventsOutput, AWSError>;
  /**
   * Returns information about one or more pull request events.
   */
  describePullRequestEvents(callback?: (err: AWSError, data: CodeCommit.Types.DescribePullRequestEventsOutput) => void): Request<CodeCommit.Types.DescribePullRequestEventsOutput, AWSError>;
  /**
   * Returns the base-64 encoded content of an individual blob within a repository.
   */
  getBlob(params: CodeCommit.Types.GetBlobInput, callback?: (err: AWSError, data: CodeCommit.Types.GetBlobOutput) => void): Request<CodeCommit.Types.GetBlobOutput, AWSError>;
  /**
   * Returns the base-64 encoded content of an individual blob within a repository.
   */
  getBlob(callback?: (err: AWSError, data: CodeCommit.Types.GetBlobOutput) => void): Request<CodeCommit.Types.GetBlobOutput, AWSError>;
  /**
   * Returns information about a repository branch, including its name and the last commit ID.
   */
  getBranch(params: CodeCommit.Types.GetBranchInput, callback?: (err: AWSError, data: CodeCommit.Types.GetBranchOutput) => void): Request<CodeCommit.Types.GetBranchOutput, AWSError>;
  /**
   * Returns information about a repository branch, including its name and the last commit ID.
   */
  getBranch(callback?: (err: AWSError, data: CodeCommit.Types.GetBranchOutput) => void): Request<CodeCommit.Types.GetBranchOutput, AWSError>;
  /**
   * Returns the content of a comment made on a change, file, or commit in a repository.
   */
  getComment(params: CodeCommit.Types.GetCommentInput, callback?: (err: AWSError, data: CodeCommit.Types.GetCommentOutput) => void): Request<CodeCommit.Types.GetCommentOutput, AWSError>;
  /**
   * Returns the content of a comment made on a change, file, or commit in a repository.
   */
  getComment(callback?: (err: AWSError, data: CodeCommit.Types.GetCommentOutput) => void): Request<CodeCommit.Types.GetCommentOutput, AWSError>;
  /**
   * Returns information about comments made on the comparison between two commits.
   */
  getCommentsForComparedCommit(params: CodeCommit.Types.GetCommentsForComparedCommitInput, callback?: (err: AWSError, data: CodeCommit.Types.GetCommentsForComparedCommitOutput) => void): Request<CodeCommit.Types.GetCommentsForComparedCommitOutput, AWSError>;
  /**
   * Returns information about comments made on the comparison between two commits.
   */
  getCommentsForComparedCommit(callback?: (err: AWSError, data: CodeCommit.Types.GetCommentsForComparedCommitOutput) => void): Request<CodeCommit.Types.GetCommentsForComparedCommitOutput, AWSError>;
  /**
   * Returns comments made on a pull request.
   */
  getCommentsForPullRequest(params: CodeCommit.Types.GetCommentsForPullRequestInput, callback?: (err: AWSError, data: CodeCommit.Types.GetCommentsForPullRequestOutput) => void): Request<CodeCommit.Types.GetCommentsForPullRequestOutput, AWSError>;
  /**
   * Returns comments made on a pull request.
   */
  getCommentsForPullRequest(callback?: (err: AWSError, data: CodeCommit.Types.GetCommentsForPullRequestOutput) => void): Request<CodeCommit.Types.GetCommentsForPullRequestOutput, AWSError>;
  /**
   * Returns information about a commit, including commit message and committer information.
   */
  getCommit(params: CodeCommit.Types.GetCommitInput, callback?: (err: AWSError, data: CodeCommit.Types.GetCommitOutput) => void): Request<CodeCommit.Types.GetCommitOutput, AWSError>;
  /**
   * Returns information about a commit, including commit message and committer information.
   */
  getCommit(callback?: (err: AWSError, data: CodeCommit.Types.GetCommitOutput) => void): Request<CodeCommit.Types.GetCommitOutput, AWSError>;
  /**
   * Returns information about the differences in a valid commit specifier (such as a branch, tag, HEAD, commit ID or other fully qualified reference). Results can be limited to a specified path.
   */
  getDifferences(params: CodeCommit.Types.GetDifferencesInput, callback?: (err: AWSError, data: CodeCommit.Types.GetDifferencesOutput) => void): Request<CodeCommit.Types.GetDifferencesOutput, AWSError>;
  /**
   * Returns information about the differences in a valid commit specifier (such as a branch, tag, HEAD, commit ID or other fully qualified reference). Results can be limited to a specified path.
   */
  getDifferences(callback?: (err: AWSError, data: CodeCommit.Types.GetDifferencesOutput) => void): Request<CodeCommit.Types.GetDifferencesOutput, AWSError>;
  /**
   * Returns the base-64 encoded contents of a specified file and its metadata.
   */
  getFile(params: CodeCommit.Types.GetFileInput, callback?: (err: AWSError, data: CodeCommit.Types.GetFileOutput) => void): Request<CodeCommit.Types.GetFileOutput, AWSError>;
  /**
   * Returns the base-64 encoded contents of a specified file and its metadata.
   */
  getFile(callback?: (err: AWSError, data: CodeCommit.Types.GetFileOutput) => void): Request<CodeCommit.Types.GetFileOutput, AWSError>;
  /**
   * Returns the contents of a specified folder in a repository.
   */
  getFolder(params: CodeCommit.Types.GetFolderInput, callback?: (err: AWSError, data: CodeCommit.Types.GetFolderOutput) => void): Request<CodeCommit.Types.GetFolderOutput, AWSError>;
  /**
   * Returns the contents of a specified folder in a repository.
   */
  getFolder(callback?: (err: AWSError, data: CodeCommit.Types.GetFolderOutput) => void): Request<CodeCommit.Types.GetFolderOutput, AWSError>;
  /**
   * Returns information about merge conflicts between the before and after commit IDs for a pull request in a repository.
   */
  getMergeConflicts(params: CodeCommit.Types.GetMergeConflictsInput, callback?: (err: AWSError, data: CodeCommit.Types.GetMergeConflictsOutput) => void): Request<CodeCommit.Types.GetMergeConflictsOutput, AWSError>;
  /**
   * Returns information about merge conflicts between the before and after commit IDs for a pull request in a repository.
   */
  getMergeConflicts(callback?: (err: AWSError, data: CodeCommit.Types.GetMergeConflictsOutput) => void): Request<CodeCommit.Types.GetMergeConflictsOutput, AWSError>;
  /**
   * Gets information about a pull request in a specified repository.
   */
  getPullRequest(params: CodeCommit.Types.GetPullRequestInput, callback?: (err: AWSError, data: CodeCommit.Types.GetPullRequestOutput) => void): Request<CodeCommit.Types.GetPullRequestOutput, AWSError>;
  /**
   * Gets information about a pull request in a specified repository.
   */
  getPullRequest(callback?: (err: AWSError, data: CodeCommit.Types.GetPullRequestOutput) => void): Request<CodeCommit.Types.GetPullRequestOutput, AWSError>;
  /**
   * Returns information about a repository.  The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a web page could expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a web page. 
   */
  getRepository(params: CodeCommit.Types.GetRepositoryInput, callback?: (err: AWSError, data: CodeCommit.Types.GetRepositoryOutput) => void): Request<CodeCommit.Types.GetRepositoryOutput, AWSError>;
  /**
   * Returns information about a repository.  The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a web page could expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a web page. 
   */
  getRepository(callback?: (err: AWSError, data: CodeCommit.Types.GetRepositoryOutput) => void): Request<CodeCommit.Types.GetRepositoryOutput, AWSError>;
  /**
   * Gets information about triggers configured for a repository.
   */
  getRepositoryTriggers(params: CodeCommit.Types.GetRepositoryTriggersInput, callback?: (err: AWSError, data: CodeCommit.Types.GetRepositoryTriggersOutput) => void): Request<CodeCommit.Types.GetRepositoryTriggersOutput, AWSError>;
  /**
   * Gets information about triggers configured for a repository.
   */
  getRepositoryTriggers(callback?: (err: AWSError, data: CodeCommit.Types.GetRepositoryTriggersOutput) => void): Request<CodeCommit.Types.GetRepositoryTriggersOutput, AWSError>;
  /**
   * Gets information about one or more branches in a repository.
   */
  listBranches(params: CodeCommit.Types.ListBranchesInput, callback?: (err: AWSError, data: CodeCommit.Types.ListBranchesOutput) => void): Request<CodeCommit.Types.ListBranchesOutput, AWSError>;
  /**
   * Gets information about one or more branches in a repository.
   */
  listBranches(callback?: (err: AWSError, data: CodeCommit.Types.ListBranchesOutput) => void): Request<CodeCommit.Types.ListBranchesOutput, AWSError>;
  /**
   * Returns a list of pull requests for a specified repository. The return list can be refined by pull request status or pull request author ARN.
   */
  listPullRequests(params: CodeCommit.Types.ListPullRequestsInput, callback?: (err: AWSError, data: CodeCommit.Types.ListPullRequestsOutput) => void): Request<CodeCommit.Types.ListPullRequestsOutput, AWSError>;
  /**
   * Returns a list of pull requests for a specified repository. The return list can be refined by pull request status or pull request author ARN.
   */
  listPullRequests(callback?: (err: AWSError, data: CodeCommit.Types.ListPullRequestsOutput) => void): Request<CodeCommit.Types.ListPullRequestsOutput, AWSError>;
  /**
   * Gets information about one or more repositories.
   */
  listRepositories(params: CodeCommit.Types.ListRepositoriesInput, callback?: (err: AWSError, data: CodeCommit.Types.ListRepositoriesOutput) => void): Request<CodeCommit.Types.ListRepositoriesOutput, AWSError>;
  /**
   * Gets information about one or more repositories.
   */
  listRepositories(callback?: (err: AWSError, data: CodeCommit.Types.ListRepositoriesOutput) => void): Request<CodeCommit.Types.ListRepositoriesOutput, AWSError>;
  /**
   * Closes a pull request and attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the fast-forward merge option.
   */
  mergePullRequestByFastForward(params: CodeCommit.Types.MergePullRequestByFastForwardInput, callback?: (err: AWSError, data: CodeCommit.Types.MergePullRequestByFastForwardOutput) => void): Request<CodeCommit.Types.MergePullRequestByFastForwardOutput, AWSError>;
  /**
   * Closes a pull request and attempts to merge the source commit of a pull request into the specified destination branch for that pull request at the specified commit using the fast-forward merge option.
   */
  mergePullRequestByFastForward(callback?: (err: AWSError, data: CodeCommit.Types.MergePullRequestByFastForwardOutput) => void): Request<CodeCommit.Types.MergePullRequestByFastForwardOutput, AWSError>;
  /**
   * Posts a comment on the comparison between two commits.
   */
  postCommentForComparedCommit(params: CodeCommit.Types.PostCommentForComparedCommitInput, callback?: (err: AWSError, data: CodeCommit.Types.PostCommentForComparedCommitOutput) => void): Request<CodeCommit.Types.PostCommentForComparedCommitOutput, AWSError>;
  /**
   * Posts a comment on the comparison between two commits.
   */
  postCommentForComparedCommit(callback?: (err: AWSError, data: CodeCommit.Types.PostCommentForComparedCommitOutput) => void): Request<CodeCommit.Types.PostCommentForComparedCommitOutput, AWSError>;
  /**
   * Posts a comment on a pull request.
   */
  postCommentForPullRequest(params: CodeCommit.Types.PostCommentForPullRequestInput, callback?: (err: AWSError, data: CodeCommit.Types.PostCommentForPullRequestOutput) => void): Request<CodeCommit.Types.PostCommentForPullRequestOutput, AWSError>;
  /**
   * Posts a comment on a pull request.
   */
  postCommentForPullRequest(callback?: (err: AWSError, data: CodeCommit.Types.PostCommentForPullRequestOutput) => void): Request<CodeCommit.Types.PostCommentForPullRequestOutput, AWSError>;
  /**
   * Posts a comment in reply to an existing comment on a comparison between commits or a pull request.
   */
  postCommentReply(params: CodeCommit.Types.PostCommentReplyInput, callback?: (err: AWSError, data: CodeCommit.Types.PostCommentReplyOutput) => void): Request<CodeCommit.Types.PostCommentReplyOutput, AWSError>;
  /**
   * Posts a comment in reply to an existing comment on a comparison between commits or a pull request.
   */
  postCommentReply(callback?: (err: AWSError, data: CodeCommit.Types.PostCommentReplyOutput) => void): Request<CodeCommit.Types.PostCommentReplyOutput, AWSError>;
  /**
   * Adds or updates a file in a branch in an AWS CodeCommit repository, and generates a commit for the addition in the specified branch.
   */
  putFile(params: CodeCommit.Types.PutFileInput, callback?: (err: AWSError, data: CodeCommit.Types.PutFileOutput) => void): Request<CodeCommit.Types.PutFileOutput, AWSError>;
  /**
   * Adds or updates a file in a branch in an AWS CodeCommit repository, and generates a commit for the addition in the specified branch.
   */
  putFile(callback?: (err: AWSError, data: CodeCommit.Types.PutFileOutput) => void): Request<CodeCommit.Types.PutFileOutput, AWSError>;
  /**
   * Replaces all triggers for a repository. This can be used to create or delete triggers.
   */
  putRepositoryTriggers(params: CodeCommit.Types.PutRepositoryTriggersInput, callback?: (err: AWSError, data: CodeCommit.Types.PutRepositoryTriggersOutput) => void): Request<CodeCommit.Types.PutRepositoryTriggersOutput, AWSError>;
  /**
   * Replaces all triggers for a repository. This can be used to create or delete triggers.
   */
  putRepositoryTriggers(callback?: (err: AWSError, data: CodeCommit.Types.PutRepositoryTriggersOutput) => void): Request<CodeCommit.Types.PutRepositoryTriggersOutput, AWSError>;
  /**
   * Tests the functionality of repository triggers by sending information to the trigger target. If real data is available in the repository, the test will send data from the last commit. If no data is available, sample data will be generated.
   */
  testRepositoryTriggers(params: CodeCommit.Types.TestRepositoryTriggersInput, callback?: (err: AWSError, data: CodeCommit.Types.TestRepositoryTriggersOutput) => void): Request<CodeCommit.Types.TestRepositoryTriggersOutput, AWSError>;
  /**
   * Tests the functionality of repository triggers by sending information to the trigger target. If real data is available in the repository, the test will send data from the last commit. If no data is available, sample data will be generated.
   */
  testRepositoryTriggers(callback?: (err: AWSError, data: CodeCommit.Types.TestRepositoryTriggersOutput) => void): Request<CodeCommit.Types.TestRepositoryTriggersOutput, AWSError>;
  /**
   * Replaces the contents of a comment.
   */
  updateComment(params: CodeCommit.Types.UpdateCommentInput, callback?: (err: AWSError, data: CodeCommit.Types.UpdateCommentOutput) => void): Request<CodeCommit.Types.UpdateCommentOutput, AWSError>;
  /**
   * Replaces the contents of a comment.
   */
  updateComment(callback?: (err: AWSError, data: CodeCommit.Types.UpdateCommentOutput) => void): Request<CodeCommit.Types.UpdateCommentOutput, AWSError>;
  /**
   * Sets or changes the default branch name for the specified repository.  If you use this operation to change the default branch name to the current default branch name, a success message is returned even though the default branch did not change. 
   */
  updateDefaultBranch(params: CodeCommit.Types.UpdateDefaultBranchInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets or changes the default branch name for the specified repository.  If you use this operation to change the default branch name to the current default branch name, a success message is returned even though the default branch did not change. 
   */
  updateDefaultBranch(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Replaces the contents of the description of a pull request.
   */
  updatePullRequestDescription(params: CodeCommit.Types.UpdatePullRequestDescriptionInput, callback?: (err: AWSError, data: CodeCommit.Types.UpdatePullRequestDescriptionOutput) => void): Request<CodeCommit.Types.UpdatePullRequestDescriptionOutput, AWSError>;
  /**
   * Replaces the contents of the description of a pull request.
   */
  updatePullRequestDescription(callback?: (err: AWSError, data: CodeCommit.Types.UpdatePullRequestDescriptionOutput) => void): Request<CodeCommit.Types.UpdatePullRequestDescriptionOutput, AWSError>;
  /**
   * Updates the status of a pull request. 
   */
  updatePullRequestStatus(params: CodeCommit.Types.UpdatePullRequestStatusInput, callback?: (err: AWSError, data: CodeCommit.Types.UpdatePullRequestStatusOutput) => void): Request<CodeCommit.Types.UpdatePullRequestStatusOutput, AWSError>;
  /**
   * Updates the status of a pull request. 
   */
  updatePullRequestStatus(callback?: (err: AWSError, data: CodeCommit.Types.UpdatePullRequestStatusOutput) => void): Request<CodeCommit.Types.UpdatePullRequestStatusOutput, AWSError>;
  /**
   * Replaces the title of a pull request.
   */
  updatePullRequestTitle(params: CodeCommit.Types.UpdatePullRequestTitleInput, callback?: (err: AWSError, data: CodeCommit.Types.UpdatePullRequestTitleOutput) => void): Request<CodeCommit.Types.UpdatePullRequestTitleOutput, AWSError>;
  /**
   * Replaces the title of a pull request.
   */
  updatePullRequestTitle(callback?: (err: AWSError, data: CodeCommit.Types.UpdatePullRequestTitleOutput) => void): Request<CodeCommit.Types.UpdatePullRequestTitleOutput, AWSError>;
  /**
   * Sets or changes the comment or description for a repository.  The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a web page could expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a web page. 
   */
  updateRepositoryDescription(params: CodeCommit.Types.UpdateRepositoryDescriptionInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets or changes the comment or description for a repository.  The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a web page could expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a web page. 
   */
  updateRepositoryDescription(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Renames a repository. The repository name must be unique across the calling AWS account. In addition, repository names are limited to 100 alphanumeric, dash, and underscore characters, and cannot include certain characters. The suffix ".git" is prohibited. For a full description of the limits on repository names, see Limits in the AWS CodeCommit User Guide.
   */
  updateRepositoryName(params: CodeCommit.Types.UpdateRepositoryNameInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Renames a repository. The repository name must be unique across the calling AWS account. In addition, repository names are limited to 100 alphanumeric, dash, and underscore characters, and cannot include certain characters. The suffix ".git" is prohibited. For a full description of the limits on repository names, see Limits in the AWS CodeCommit User Guide.
   */
  updateRepositoryName(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
}
declare namespace CodeCommit {
  export type AccountId = string;
  export type AdditionalData = string;
  export type Arn = string;
  export interface BatchGetRepositoriesInput {
    /**
     * The names of the repositories to get information about.
     */
    repositoryNames: RepositoryNameList;
  }
  export interface BatchGetRepositoriesOutput {
    /**
     * A list of repositories returned by the batch get repositories operation.
     */
    repositories?: RepositoryMetadataList;
    /**
     * Returns a list of repository names for which information could not be found.
     */
    repositoriesNotFound?: RepositoryNotFoundList;
  }
  export interface BlobMetadata {
    /**
     * The full ID of the blob.
     */
    blobId?: ObjectId;
    /**
     * The path to the blob and any associated file name, if any.
     */
    path?: Path;
    /**
     * The file mode permissions of the blob. File mode permission codes include:    100644 indicates read/write    100755 indicates read/write/execute    160000 indicates a submodule    120000 indicates a symlink  
     */
    mode?: Mode;
  }
  export interface BranchInfo {
    /**
     * The name of the branch.
     */
    branchName?: BranchName;
    /**
     * The ID of the last commit made to the branch.
     */
    commitId?: CommitId;
  }
  export type BranchName = string;
  export type BranchNameList = BranchName[];
  export type ChangeTypeEnum = "A"|"M"|"D"|string;
  export type ClientRequestToken = string;
  export type CloneUrlHttp = string;
  export type CloneUrlSsh = string;
  export interface Comment {
    /**
     * The system-generated comment ID.
     */
    commentId?: CommentId;
    /**
     * The content of the comment.
     */
    content?: Content;
    /**
     * The ID of the comment for which this comment is a reply, if any.
     */
    inReplyTo?: CommentId;
    /**
     * The date and time the comment was created, in timestamp format.
     */
    creationDate?: CreationDate;
    /**
     * The date and time the comment was most recently modified, in timestamp format.
     */
    lastModifiedDate?: LastModifiedDate;
    /**
     * The Amazon Resource Name (ARN) of the person who posted the comment.
     */
    authorArn?: Arn;
    /**
     * A Boolean value indicating whether the comment has been deleted.
     */
    deleted?: IsCommentDeleted;
    /**
     * A unique, client-generated idempotency token that when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request will return information about the initial request that used that token.
     */
    clientRequestToken?: ClientRequestToken;
  }
  export type CommentId = string;
  export type Comments = Comment[];
  export interface CommentsForComparedCommit {
    /**
     * The name of the repository that contains the compared commits.
     */
    repositoryName?: RepositoryName;
    /**
     * The full commit ID of the commit used to establish the 'before' of the comparison.
     */
    beforeCommitId?: CommitId;
    /**
     * The full commit ID of the commit used to establish the 'after' of the comparison.
     */
    afterCommitId?: CommitId;
    /**
     * The full blob ID of the commit used to establish the 'before' of the comparison.
     */
    beforeBlobId?: ObjectId;
    /**
     * The full blob ID of the commit used to establish the 'after' of the comparison.
     */
    afterBlobId?: ObjectId;
    /**
     * Location information about the comment on the comparison, including the file name, line number, and whether the version of the file where the comment was made is 'BEFORE' or 'AFTER'.
     */
    location?: Location;
    /**
     * An array of comment objects. Each comment object contains information about a comment on the comparison between commits.
     */
    comments?: Comments;
  }
  export type CommentsForComparedCommitData = CommentsForComparedCommit[];
  export interface CommentsForPullRequest {
    /**
     * The system-generated ID of the pull request.
     */
    pullRequestId?: PullRequestId;
    /**
     * The name of the repository that contains the pull request.
     */
    repositoryName?: RepositoryName;
    /**
     * The full commit ID of the commit that was the tip of the destination branch when the pull request was created. This commit will be superceded by the after commit in the source branch when and if you merge the source branch into the destination branch.
     */
    beforeCommitId?: CommitId;
    /**
     * he full commit ID of the commit that was the tip of the source branch at the time the comment was made. 
     */
    afterCommitId?: CommitId;
    /**
     * The full blob ID of the file on which you want to comment on the destination commit.
     */
    beforeBlobId?: ObjectId;
    /**
     * The full blob ID of the file on which you want to comment on the source commit.
     */
    afterBlobId?: ObjectId;
    /**
     * Location information about the comment on the pull request, including the file name, line number, and whether the version of the file where the comment was made is 'BEFORE' (destination branch) or 'AFTER' (source branch).
     */
    location?: Location;
    /**
     * An array of comment objects. Each comment object contains information about a comment on the pull request.
     */
    comments?: Comments;
  }
  export type CommentsForPullRequestData = CommentsForPullRequest[];
  export interface Commit {
    /**
     * The full SHA of the specified commit. 
     */
    commitId?: ObjectId;
    /**
     * Tree information for the specified commit.
     */
    treeId?: ObjectId;
    /**
     * A list of parent commits for the specified commit. Each parent commit ID is the full commit ID.
     */
    parents?: ParentList;
    /**
     * The commit message associated with the specified commit.
     */
    message?: Message;
    /**
     * Information about the author of the specified commit. Information includes the date in timestamp format with GMT offset, the name of the author, and the email address for the author, as configured in Git.
     */
    author?: UserInfo;
    /**
     * Information about the person who committed the specified commit, also known as the committer. Information includes the date in timestamp format with GMT offset, the name of the committer, and the email address for the committer, as configured in Git. For more information about the difference between an author and a committer in Git, see Viewing the Commit History in Pro Git by Scott Chacon and Ben Straub.
     */
    committer?: UserInfo;
    /**
     * Any additional data associated with the specified commit.
     */
    additionalData?: AdditionalData;
  }
  export type CommitId = string;
  export type CommitName = string;
  export type Content = string;
  export interface CreateBranchInput {
    /**
     * The name of the repository in which you want to create the new branch.
     */
    repositoryName: RepositoryName;
    /**
     * The name of the new branch to create.
     */
    branchName: BranchName;
    /**
     * The ID of the commit to point the new branch to.
     */
    commitId: CommitId;
  }
  export interface CreateCommitInput {
    /**
     * The name of the repository where you will create the commit.
     */
    repositoryName: RepositoryName;
    /**
     * The name of the branch where you will create the commit.
     */
    branchName: BranchName;
    /**
     * The ID of the commit that is the parent of the commit you will create. If this is an empty repository, this is not required.
     */
    parentCommitId?: CommitId;
    /**
     * The name of the author who created the commit. This information will be used as both the author and committer for the commit.
     */
    authorName?: Name;
    /**
     * The email address of the person who created the commit.
     */
    email?: Email;
    /**
     * The commit message you want to include as part of creating the commit. Commit messages are limited to 256 KB. If no message is specified, a default message will be used.
     */
    commitMessage?: Message;
    /**
     * If the commit contains deletions, whether to keep a folder or folder structure if the changes leave the folders empty. If this is specified as true, a .gitkeep file will be created for empty folders.
     */
    keepEmptyFolders?: KeepEmptyFolders;
    /**
     * The files to add or update in this commit.
     */
    putFiles?: PutFileEntries;
    /**
     * The files to delete in this commit. These files will still exist in prior commits.
     */
    deleteFiles?: DeleteFileEntries;
    /**
     * The file modes to update for files in this commit.
     */
    setFileModes?: SetFileModeEntries;
  }
  export interface CreateCommitOutput {
    /**
     * The full commit ID of the commit that contains your committed file changes.
     */
    commitId?: ObjectId;
    /**
     * The full SHA-1 pointer of the tree information for the commit that contains the commited file changes.
     */
    treeId?: ObjectId;
    /**
     * The files added as part of the committed file changes.
     */
    filesAdded?: FilesMetadata;
    /**
     * The files updated as part of the commited file changes.
     */
    filesUpdated?: FilesMetadata;
    /**
     * The files deleted as part of the committed file changes.
     */
    filesDeleted?: FilesMetadata;
  }
  export interface CreatePullRequestInput {
    /**
     * The title of the pull request. This title will be used to identify the pull request to other users in the repository.
     */
    title: Title;
    /**
     * A description of the pull request.
     */
    description?: Description;
    /**
     * The targets for the pull request, including the source of the code to be reviewed (the source branch), and the destination where the creator of the pull request intends the code to be merged after the pull request is closed (the destination branch).
     */
    targets: TargetList;
    /**
     * A unique, client-generated idempotency token that when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request will return information about the initial request that used that token.  The AWS SDKs prepopulate client request tokens. If using an AWS SDK, you do not have to generate an idempotency token, as this will be done for you. 
     */
    clientRequestToken?: ClientRequestToken;
  }
  export interface CreatePullRequestOutput {
    /**
     * Information about the newly created pull request.
     */
    pullRequest: PullRequest;
  }
  export interface CreateRepositoryInput {
    /**
     * The name of the new repository to be created.  The repository name must be unique across the calling AWS account. In addition, repository names are limited to 100 alphanumeric, dash, and underscore characters, and cannot include certain characters. For a full description of the limits on repository names, see Limits in the AWS CodeCommit User Guide. The suffix ".git" is prohibited. 
     */
    repositoryName: RepositoryName;
    /**
     * A comment or description about the new repository.  The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a web page could expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a web page. 
     */
    repositoryDescription?: RepositoryDescription;
  }
  export interface CreateRepositoryOutput {
    /**
     * Information about the newly created repository.
     */
    repositoryMetadata?: RepositoryMetadata;
  }
  export type CreationDate = Date;
  export type _Date = string;
  export interface DeleteBranchInput {
    /**
     * The name of the repository that contains the branch to be deleted.
     */
    repositoryName: RepositoryName;
    /**
     * The name of the branch to delete.
     */
    branchName: BranchName;
  }
  export interface DeleteBranchOutput {
    /**
     * Information about the branch deleted by the operation, including the branch name and the commit ID that was the tip of the branch.
     */
    deletedBranch?: BranchInfo;
  }
  export interface DeleteCommentContentInput {
    /**
     * The unique, system-generated ID of the comment. To get this ID, use GetCommentsForComparedCommit or GetCommentsForPullRequest.
     */
    commentId: CommentId;
  }
  export interface DeleteCommentContentOutput {
    /**
     * Information about the comment you just deleted.
     */
    comment?: Comment;
  }
  export type DeleteFileEntries = DeleteFileEntry[];
  export interface DeleteFileEntry {
    /**
     * The full path of the file that will be deleted, including the name of the file.
     */
    filePath: Path;
  }
  export interface DeleteFileInput {
    /**
     * The name of the repository that contains the file to delete.
     */
    repositoryName: RepositoryName;
    /**
     * The name of the branch where the commit will be made deleting the file.
     */
    branchName: BranchName;
    /**
     * The fully-qualified path to the file that will be deleted, including the full name and extension of that file. For example, /examples/file.md is a fully qualified path to a file named file.md in a folder named examples.
     */
    filePath: Path;
    /**
     * The ID of the commit that is the tip of the branch where you want to create the commit that will delete the file. This must be the HEAD commit for the branch. The commit that deletes the file will be created from this commit ID.
     */
    parentCommitId: CommitId;
    /**
     * Specifies whether to delete the folder or directory that contains the file you want to delete if that file is the only object in the folder or directory. By default, empty folders will be deleted. This includes empty folders that are part of the directory structure. For example, if the path to a file is dir1/dir2/dir3/dir4, and dir2 and dir3 are empty, deleting the last file in dir4 will also delete the empty folders dir4, dir3, and dir2.
     */
    keepEmptyFolders?: KeepEmptyFolders;
    /**
     * The commit message you want to include as part of deleting the file. Commit messages are limited to 256 KB. If no message is specified, a default message will be used.
     */
    commitMessage?: Message;
    /**
     * The name of the author of the commit that deletes the file. If no name is specified, the user's ARN will be used as the author name and committer name.
     */
    name?: Name;
    /**
     * The email address for the commit that deletes the file. If no email address is specified, the email address will be left blank.
     */
    email?: Email;
  }
  export interface DeleteFileOutput {
    /**
     * The full commit ID of the commit that contains the change that deletes the file.
     */
    commitId: ObjectId;
    /**
     * The blob ID removed from the tree as part of deleting the file.
     */
    blobId: ObjectId;
    /**
     * The full SHA-1 pointer of the tree information for the commit that contains the delete file change.
     */
    treeId: ObjectId;
    /**
     * The fully-qualified path to the file that will be deleted, including the full name and extension of that file.
     */
    filePath: Path;
  }
  export interface DeleteRepositoryInput {
    /**
     * The name of the repository to delete.
     */
    repositoryName: RepositoryName;
  }
  export interface DeleteRepositoryOutput {
    /**
     * The ID of the repository that was deleted.
     */
    repositoryId?: RepositoryId;
  }
  export interface DescribePullRequestEventsInput {
    /**
     * The system-generated ID of the pull request. To get this ID, use ListPullRequests.
     */
    pullRequestId: PullRequestId;
    /**
     * Optional. The pull request event type about which you want to return information.
     */
    pullRequestEventType?: PullRequestEventType;
    /**
     * The Amazon Resource Name (ARN) of the user whose actions resulted in the event. Examples include updating the pull request with additional commits or changing the status of a pull request.
     */
    actorArn?: Arn;
    /**
     * An enumeration token that when provided in a request, returns the next batch of the results.
     */
    nextToken?: NextToken;
    /**
     * A non-negative integer used to limit the number of returned results. The default is 100 events, which is also the maximum number of events that can be returned in a result.
     */
    maxResults?: MaxResults;
  }
  export interface DescribePullRequestEventsOutput {
    /**
     * Information about the pull request events.
     */
    pullRequestEvents: PullRequestEventList;
    /**
     * An enumeration token that can be used in a request to return the next batch of the results.
     */
    nextToken?: NextToken;
  }
  export type Description = string;
  export interface Difference {
    /**
     * Information about a beforeBlob data type object, including the ID, the file mode permission code, and the path.
     */
    beforeBlob?: BlobMetadata;
    /**
     * Information about an afterBlob data type object, including the ID, the file mode permission code, and the path.
     */
    afterBlob?: BlobMetadata;
    /**
     * Whether the change type of the difference is an addition (A), deletion (D), or modification (M).
     */
    changeType?: ChangeTypeEnum;
  }
  export type DifferenceList = Difference[];
  export type Email = string;
  export type EventDate = Date;
  export interface File {
    /**
     * The blob ID that contains the file information.
     */
    blobId?: ObjectId;
    /**
     * The fully-qualified path to the file in the repository.
     */
    absolutePath?: Path;
    /**
     * The relative path of the file from the folder where the query originated.
     */
    relativePath?: Path;
    /**
     * The extrapolated file mode permissions for the file. Valid values include EXECUTABLE and NORMAL.
     */
    fileMode?: FileModeTypeEnum;
  }
  export type FileContent = Buffer|Uint8Array|Blob|string;
  export type FileList = File[];
  export interface FileMetadata {
    /**
     * The full path to the file that will be added or updated, including the name of the file.
     */
    absolutePath?: Path;
    /**
     * The blob ID that contains the file information.
     */
    blobId?: ObjectId;
    /**
     * The extrapolated file mode permissions for the file. Valid values include EXECUTABLE and NORMAL.
     */
    fileMode?: FileModeTypeEnum;
  }
  export type FileModeTypeEnum = "EXECUTABLE"|"NORMAL"|"SYMLINK"|string;
  export type FilesMetadata = FileMetadata[];
  export interface Folder {
    /**
     * The full SHA-1 pointer of the tree information for the commit that contains the folder.
     */
    treeId?: ObjectId;
    /**
     * The fully-qualified path of the folder in the repository.
     */
    absolutePath?: Path;
    /**
     * The relative path of the specified folder from the folder where the query originated.
     */
    relativePath?: Path;
  }
  export type FolderList = Folder[];
  export interface GetBlobInput {
    /**
     * The name of the repository that contains the blob.
     */
    repositoryName: RepositoryName;
    /**
     * The ID of the blob, which is its SHA-1 pointer.
     */
    blobId: ObjectId;
  }
  export interface GetBlobOutput {
    /**
     * The content of the blob, usually a file.
     */
    content: blob;
  }
  export interface GetBranchInput {
    /**
     * The name of the repository that contains the branch for which you want to retrieve information.
     */
    repositoryName?: RepositoryName;
    /**
     * The name of the branch for which you want to retrieve information.
     */
    branchName?: BranchName;
  }
  export interface GetBranchOutput {
    /**
     * The name of the branch.
     */
    branch?: BranchInfo;
  }
  export interface GetCommentInput {
    /**
     * The unique, system-generated ID of the comment. To get this ID, use GetCommentsForComparedCommit or GetCommentsForPullRequest.
     */
    commentId: CommentId;
  }
  export interface GetCommentOutput {
    /**
     * The contents of the comment.
     */
    comment?: Comment;
  }
  export interface GetCommentsForComparedCommitInput {
    /**
     * The name of the repository where you want to compare commits.
     */
    repositoryName: RepositoryName;
    /**
     * To establish the directionality of the comparison, the full commit ID of the 'before' commit.
     */
    beforeCommitId?: CommitId;
    /**
     * To establish the directionality of the comparison, the full commit ID of the 'after' commit.
     */
    afterCommitId: CommitId;
    /**
     * An enumeration token that when provided in a request, returns the next batch of the results. 
     */
    nextToken?: NextToken;
    /**
     * A non-negative integer used to limit the number of returned results. The default is 100 comments, and is configurable up to 500.
     */
    maxResults?: MaxResults;
  }
  export interface GetCommentsForComparedCommitOutput {
    /**
     * A list of comment objects on the compared commit.
     */
    commentsForComparedCommitData?: CommentsForComparedCommitData;
    /**
     * An enumeration token that can be used in a request to return the next batch of the results.
     */
    nextToken?: NextToken;
  }
  export interface GetCommentsForPullRequestInput {
    /**
     * The system-generated ID of the pull request. To get this ID, use ListPullRequests.
     */
    pullRequestId: PullRequestId;
    /**
     * The name of the repository that contains the pull request.
     */
    repositoryName?: RepositoryName;
    /**
     * The full commit ID of the commit in the destination branch that was the tip of the branch at the time the pull request was created.
     */
    beforeCommitId?: CommitId;
    /**
     * The full commit ID of the commit in the source branch that was the tip of the branch at the time the comment was made.
     */
    afterCommitId?: CommitId;
    /**
     * An enumeration token that when provided in a request, returns the next batch of the results.
     */
    nextToken?: NextToken;
    /**
     * A non-negative integer used to limit the number of returned results. The default is 100 comments. You can return up to 500 comments with a single request.
     */
    maxResults?: MaxResults;
  }
  export interface GetCommentsForPullRequestOutput {
    /**
     * An array of comment objects on the pull request.
     */
    commentsForPullRequestData?: CommentsForPullRequestData;
    /**
     * An enumeration token that can be used in a request to return the next batch of the results.
     */
    nextToken?: NextToken;
  }
  export interface GetCommitInput {
    /**
     * The name of the repository to which the commit was made.
     */
    repositoryName: RepositoryName;
    /**
     * The commit ID. Commit IDs are the full SHA of the commit.
     */
    commitId: ObjectId;
  }
  export interface GetCommitOutput {
    /**
     * A commit data type object that contains information about the specified commit.
     */
    commit: Commit;
  }
  export interface GetDifferencesInput {
    /**
     * The name of the repository where you want to get differences.
     */
    repositoryName: RepositoryName;
    /**
     * The branch, tag, HEAD, or other fully qualified reference used to identify a commit. For example, the full commit ID. Optional. If not specified, all changes prior to the afterCommitSpecifier value will be shown. If you do not use beforeCommitSpecifier in your request, consider limiting the results with maxResults.
     */
    beforeCommitSpecifier?: CommitName;
    /**
     * The branch, tag, HEAD, or other fully qualified reference used to identify a commit.
     */
    afterCommitSpecifier: CommitName;
    /**
     * The file path in which to check for differences. Limits the results to this path. Can also be used to specify the previous name of a directory or folder. If beforePath and afterPath are not specified, differences will be shown for all paths.
     */
    beforePath?: Path;
    /**
     * The file path in which to check differences. Limits the results to this path. Can also be used to specify the changed name of a directory or folder, if it has changed. If not specified, differences will be shown for all paths.
     */
    afterPath?: Path;
    /**
     * A non-negative integer used to limit the number of returned results.
     */
    MaxResults?: Limit;
    /**
     * An enumeration token that when provided in a request, returns the next batch of the results.
     */
    NextToken?: NextToken;
  }
  export interface GetDifferencesOutput {
    /**
     * A differences data type object that contains information about the differences, including whether the difference is added, modified, or deleted (A, D, M).
     */
    differences?: DifferenceList;
    /**
     * An enumeration token that can be used in a request to return the next batch of the results.
     */
    NextToken?: NextToken;
  }
  export interface GetFileInput {
    /**
     * The name of the repository that contains the file.
     */
    repositoryName: RepositoryName;
    /**
     * The fully-quaified reference that identifies the commit that contains the file. For example, you could specify a full commit ID, a tag, a branch name, or a reference such as refs/heads/master. If none is provided, then the head commit will be used.
     */
    commitSpecifier?: CommitName;
    /**
     * The fully-qualified path to the file, including the full name and extension of the file. For example, /examples/file.md is the fully-qualified path to a file named file.md in a folder named examples.
     */
    filePath: Path;
  }
  export interface GetFileOutput {
    /**
     * The full commit ID of the commit that contains the content returned by GetFile.
     */
    commitId: ObjectId;
    /**
     * The blob ID of the object that represents the file content.
     */
    blobId: ObjectId;
    /**
     * The fully qualified path to the specified file. This returns the name and extension of the file.
     */
    filePath: Path;
    /**
     * The extrapolated file mode permissions of the blob. Valid values include strings such as EXECUTABLE and not numeric values.  The file mode permissions returned by this API are not the standard file mode permission values, such as 100644, but rather extrapolated values. See below for a full list of supported return values. 
     */
    fileMode: FileModeTypeEnum;
    /**
     * The size of the contents of the file, in bytes.
     */
    fileSize: ObjectSize;
    /**
     * The base-64 encoded binary data object that represents the content of the file.
     */
    fileContent: FileContent;
  }
  export interface GetFolderInput {
    /**
     * The name of the repository.
     */
    repositoryName: RepositoryName;
    /**
     * A fully-qualified reference used to identify a commit that contains the version of the folder's content to return. A fully-qualified reference can be a commit ID, branch name, tag, or reference such as HEAD. If no specifier is provided, the folder content will be returned as it exists in the HEAD commit.
     */
    commitSpecifier?: CommitName;
    /**
     * The fully-qualified path to the folder whose contents will be returned, including the folder name. For example, /examples is a fully-qualified path to a folder named examples that was created off of the root directory (/) of a repository. 
     */
    folderPath: Path;
  }
  export interface GetFolderOutput {
    /**
     * The full commit ID used as a reference for which version of the folder content is returned.
     */
    commitId: ObjectId;
    /**
     * The fully-qualified path of the folder whose contents are returned.
     */
    folderPath: Path;
    /**
     * The full SHA-1 pointer of the tree information for the commit that contains the folder.
     */
    treeId?: ObjectId;
    /**
     * The list of folders that exist beneath the specified folder, if any.
     */
    subFolders?: FolderList;
    /**
     * The list of files that exist in the specified folder, if any.
     */
    files?: FileList;
    /**
     * The list of symbolic links to other files and folders that exist in the specified folder, if any.
     */
    symbolicLinks?: SymbolicLinkList;
    /**
     * The list of submodules that exist in the specified folder, if any.
     */
    subModules?: SubModuleList;
  }
  export interface GetMergeConflictsInput {
    /**
     * The name of the repository where the pull request was created.
     */
    repositoryName: RepositoryName;
    /**
     * The branch, tag, HEAD, or other fully qualified reference used to identify a commit. For example, a branch name or a full commit ID.
     */
    destinationCommitSpecifier: CommitName;
    /**
     * The branch, tag, HEAD, or other fully qualified reference used to identify a commit. For example, a branch name or a full commit ID.
     */
    sourceCommitSpecifier: CommitName;
    /**
     * The merge option or strategy you want to use to merge the code. The only valid value is FAST_FORWARD_MERGE.
     */
    mergeOption: MergeOptionTypeEnum;
  }
  export interface GetMergeConflictsOutput {
    /**
     * A Boolean value that indicates whether the code is mergable by the specified merge option.
     */
    mergeable: IsMergeable;
    /**
     * The commit ID of the destination commit specifier that was used in the merge evaluation.
     */
    destinationCommitId: CommitId;
    /**
     * The commit ID of the source commit specifier that was used in the merge evaluation.
     */
    sourceCommitId: CommitId;
  }
  export interface GetPullRequestInput {
    /**
     * The system-generated ID of the pull request. To get this ID, use ListPullRequests.
     */
    pullRequestId: PullRequestId;
  }
  export interface GetPullRequestOutput {
    /**
     * Information about the specified pull request.
     */
    pullRequest: PullRequest;
  }
  export interface GetRepositoryInput {
    /**
     * The name of the repository to get information about.
     */
    repositoryName: RepositoryName;
  }
  export interface GetRepositoryOutput {
    /**
     * Information about the repository.
     */
    repositoryMetadata?: RepositoryMetadata;
  }
  export interface GetRepositoryTriggersInput {
    /**
     * The name of the repository for which the trigger is configured.
     */
    repositoryName: RepositoryName;
  }
  export interface GetRepositoryTriggersOutput {
    /**
     * The system-generated unique ID for the trigger.
     */
    configurationId?: RepositoryTriggersConfigurationId;
    /**
     * The JSON block of configuration information for each trigger.
     */
    triggers?: RepositoryTriggersList;
  }
  export type IsCommentDeleted = boolean;
  export type IsMergeable = boolean;
  export type IsMerged = boolean;
  export type IsMove = boolean;
  export type KeepEmptyFolders = boolean;
  export type LastModifiedDate = Date;
  export type Limit = number;
  export interface ListBranchesInput {
    /**
     * The name of the repository that contains the branches.
     */
    repositoryName: RepositoryName;
    /**
     * An enumeration token that allows the operation to batch the results.
     */
    nextToken?: NextToken;
  }
  export interface ListBranchesOutput {
    /**
     * The list of branch names.
     */
    branches?: BranchNameList;
    /**
     * An enumeration token that returns the batch of the results.
     */
    nextToken?: NextToken;
  }
  export interface ListPullRequestsInput {
    /**
     * The name of the repository for which you want to list pull requests.
     */
    repositoryName: RepositoryName;
    /**
     * Optional. The Amazon Resource Name (ARN) of the user who created the pull request. If used, this filters the results to pull requests created by that user.
     */
    authorArn?: Arn;
    /**
     * Optional. The status of the pull request. If used, this refines the results to the pull requests that match the specified status.
     */
    pullRequestStatus?: PullRequestStatusEnum;
    /**
     * An enumeration token that when provided in a request, returns the next batch of the results.
     */
    nextToken?: NextToken;
    /**
     * A non-negative integer used to limit the number of returned results.
     */
    maxResults?: MaxResults;
  }
  export interface ListPullRequestsOutput {
    /**
     * The system-generated IDs of the pull requests.
     */
    pullRequestIds: PullRequestIdList;
    /**
     * An enumeration token that when provided in a request, returns the next batch of the results.
     */
    nextToken?: NextToken;
  }
  export interface ListRepositoriesInput {
    /**
     * An enumeration token that allows the operation to batch the results of the operation. Batch sizes are 1,000 for list repository operations. When the client sends the token back to AWS CodeCommit, another page of 1,000 records is retrieved.
     */
    nextToken?: NextToken;
    /**
     * The criteria used to sort the results of a list repositories operation.
     */
    sortBy?: SortByEnum;
    /**
     * The order in which to sort the results of a list repositories operation.
     */
    order?: OrderEnum;
  }
  export interface ListRepositoriesOutput {
    /**
     * Lists the repositories called by the list repositories operation.
     */
    repositories?: RepositoryNameIdPairList;
    /**
     * An enumeration token that allows the operation to batch the results of the operation. Batch sizes are 1,000 for list repository operations. When the client sends the token back to AWS CodeCommit, another page of 1,000 records is retrieved.
     */
    nextToken?: NextToken;
  }
  export interface Location {
    /**
     * The name of the file being compared, including its extension and subdirectory, if any.
     */
    filePath?: Path;
    /**
     * The position of a change within a compared file, in line number format.
     */
    filePosition?: Position;
    /**
     * In a comparison of commits or a pull request, whether the change is in the 'before' or 'after' of that comparison.
     */
    relativeFileVersion?: RelativeFileVersionEnum;
  }
  export type MaxResults = number;
  export interface MergeMetadata {
    /**
     * A Boolean value indicating whether the merge has been made.
     */
    isMerged?: IsMerged;
    /**
     * The Amazon Resource Name (ARN) of the user who merged the branches.
     */
    mergedBy?: Arn;
  }
  export type MergeOptionTypeEnum = "FAST_FORWARD_MERGE"|string;
  export interface MergePullRequestByFastForwardInput {
    /**
     * The system-generated ID of the pull request. To get this ID, use ListPullRequests.
     */
    pullRequestId: PullRequestId;
    /**
     * The name of the repository where the pull request was created.
     */
    repositoryName: RepositoryName;
    /**
     * The full commit ID of the original or updated commit in the pull request source branch. Pass this value if you want an exception thrown if the current commit ID of the tip of the source branch does not match this commit ID.
     */
    sourceCommitId?: CommitId;
  }
  export interface MergePullRequestByFastForwardOutput {
    /**
     * Information about the specified pull request, including information about the merge.
     */
    pullRequest?: PullRequest;
  }
  export type Message = string;
  export type Mode = string;
  export type Name = string;
  export type NextToken = string;
  export type ObjectId = string;
  export type ObjectSize = number;
  export type OrderEnum = "ascending"|"descending"|string;
  export type ParentList = ObjectId[];
  export type Path = string;
  export type Position = number;
  export interface PostCommentForComparedCommitInput {
    /**
     * The name of the repository where you want to post a comment on the comparison between commits.
     */
    repositoryName: RepositoryName;
    /**
     * To establish the directionality of the comparison, the full commit ID of the 'before' commit.
     */
    beforeCommitId?: CommitId;
    /**
     * To establish the directionality of the comparison, the full commit ID of the 'after' commit.
     */
    afterCommitId: CommitId;
    /**
     * The location of the comparison where you want to comment.
     */
    location?: Location;
    /**
     * The content of the comment you want to make.
     */
    content: Content;
    /**
     * A unique, client-generated idempotency token that when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request will return information about the initial request that used that token.
     */
    clientRequestToken?: ClientRequestToken;
  }
  export interface PostCommentForComparedCommitOutput {
    /**
     * The name of the repository where you posted a comment on the comparison between commits.
     */
    repositoryName?: RepositoryName;
    /**
     * In the directionality you established, the full commit ID of the 'before' commit.
     */
    beforeCommitId?: CommitId;
    /**
     * In the directionality you established, the full commit ID of the 'after' commit.
     */
    afterCommitId?: CommitId;
    /**
     * In the directionality you established, the blob ID of the 'before' blob.
     */
    beforeBlobId?: ObjectId;
    /**
     * In the directionality you established, the blob ID of the 'after' blob.
     */
    afterBlobId?: ObjectId;
    /**
     * The location of the comment in the comparison between the two commits.
     */
    location?: Location;
    /**
     * The content of the comment you posted.
     */
    comment?: Comment;
  }
  export interface PostCommentForPullRequestInput {
    /**
     * The system-generated ID of the pull request. To get this ID, use ListPullRequests.
     */
    pullRequestId: PullRequestId;
    /**
     * The name of the repository where you want to post a comment on a pull request.
     */
    repositoryName: RepositoryName;
    /**
     * The full commit ID of the commit in the destination branch that was the tip of the branch at the time the pull request was created.
     */
    beforeCommitId: CommitId;
    /**
     * The full commit ID of the commit in the source branch that is the current tip of the branch for the pull request when you post the comment.
     */
    afterCommitId: CommitId;
    /**
     * The location of the change where you want to post your comment. If no location is provided, the comment will be posted as a general comment on the pull request difference between the before commit ID and the after commit ID.
     */
    location?: Location;
    /**
     * The content of your comment on the change.
     */
    content: Content;
    /**
     * A unique, client-generated idempotency token that when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request will return information about the initial request that used that token.
     */
    clientRequestToken?: ClientRequestToken;
  }
  export interface PostCommentForPullRequestOutput {
    /**
     * The name of the repository where you posted a comment on a pull request.
     */
    repositoryName?: RepositoryName;
    /**
     * The system-generated ID of the pull request. 
     */
    pullRequestId?: PullRequestId;
    /**
     * The full commit ID of the commit in the source branch used to create the pull request, or in the case of an updated pull request, the full commit ID of the commit used to update the pull request.
     */
    beforeCommitId?: CommitId;
    /**
     * The full commit ID of the commit in the destination branch where the pull request will be merged.
     */
    afterCommitId?: CommitId;
    /**
     * In the directionality of the pull request, the blob ID of the 'before' blob.
     */
    beforeBlobId?: ObjectId;
    /**
     * In the directionality of the pull request, the blob ID of the 'after' blob.
     */
    afterBlobId?: ObjectId;
    /**
     * The location of the change where you posted your comment.
     */
    location?: Location;
    /**
     * The content of the comment you posted.
     */
    comment?: Comment;
  }
  export interface PostCommentReplyInput {
    /**
     * The system-generated ID of the comment to which you want to reply. To get this ID, use GetCommentsForComparedCommit or GetCommentsForPullRequest.
     */
    inReplyTo: CommentId;
    /**
     * A unique, client-generated idempotency token that when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request will return information about the initial request that used that token.
     */
    clientRequestToken?: ClientRequestToken;
    /**
     * The contents of your reply to a comment.
     */
    content: Content;
  }
  export interface PostCommentReplyOutput {
    /**
     * Information about the reply to a comment.
     */
    comment?: Comment;
  }
  export interface PullRequest {
    /**
     * The system-generated ID of the pull request. 
     */
    pullRequestId?: PullRequestId;
    /**
     * The user-defined title of the pull request. This title is displayed in the list of pull requests to other users of the repository.
     */
    title?: Title;
    /**
     * The user-defined description of the pull request. This description can be used to clarify what should be reviewed and other details of the request.
     */
    description?: Description;
    /**
     * The day and time of the last user or system activity on the pull request, in timestamp format.
     */
    lastActivityDate?: LastModifiedDate;
    /**
     * The date and time the pull request was originally created, in timestamp format.
     */
    creationDate?: CreationDate;
    /**
     * The status of the pull request. Pull request status can only change from OPEN to CLOSED.
     */
    pullRequestStatus?: PullRequestStatusEnum;
    /**
     * The Amazon Resource Name (ARN) of the user who created the pull request.
     */
    authorArn?: Arn;
    /**
     * The targets of the pull request, including the source branch and destination branch for the pull request.
     */
    pullRequestTargets?: PullRequestTargetList;
    /**
     * A unique, client-generated idempotency token that when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request will return information about the initial request that used that token.
     */
    clientRequestToken?: ClientRequestToken;
  }
  export interface PullRequestCreatedEventMetadata {
    /**
     * The name of the repository where the pull request was created.
     */
    repositoryName?: RepositoryName;
    /**
     * The commit ID on the source branch used when the pull request was created.
     */
    sourceCommitId?: CommitId;
    /**
     * The commit ID of the tip of the branch specified as the destination branch when the pull request was created.
     */
    destinationCommitId?: CommitId;
    /**
     * The commit ID of the most recent commit that the source branch and the destination branch have in common.
     */
    mergeBase?: CommitId;
  }
  export interface PullRequestEvent {
    /**
     * The system-generated ID of the pull request.
     */
    pullRequestId?: PullRequestId;
    /**
     * The day and time of the pull request event, in timestamp format.
     */
    eventDate?: EventDate;
    /**
     * The type of the pull request event, for example a status change event (PULL_REQUEST_STATUS_CHANGED) or update event (PULL_REQUEST_SOURCE_REFERENCE_UPDATED).
     */
    pullRequestEventType?: PullRequestEventType;
    /**
     * The Amazon Resource Name (ARN) of the user whose actions resulted in the event. Examples include updating the pull request with additional commits or changing the status of a pull request.
     */
    actorArn?: Arn;
    /**
     * Information about the source and destination branches for the pull request.
     */
    pullRequestCreatedEventMetadata?: PullRequestCreatedEventMetadata;
    /**
     * Information about the change in status for the pull request event.
     */
    pullRequestStatusChangedEventMetadata?: PullRequestStatusChangedEventMetadata;
    /**
     * Information about the updated source branch for the pull request event. 
     */
    pullRequestSourceReferenceUpdatedEventMetadata?: PullRequestSourceReferenceUpdatedEventMetadata;
    /**
     * Information about the change in mergability state for the pull request event.
     */
    pullRequestMergedStateChangedEventMetadata?: PullRequestMergedStateChangedEventMetadata;
  }
  export type PullRequestEventList = PullRequestEvent[];
  export type PullRequestEventType = "PULL_REQUEST_CREATED"|"PULL_REQUEST_STATUS_CHANGED"|"PULL_REQUEST_SOURCE_REFERENCE_UPDATED"|"PULL_REQUEST_MERGE_STATE_CHANGED"|string;
  export type PullRequestId = string;
  export type PullRequestIdList = PullRequestId[];
  export interface PullRequestMergedStateChangedEventMetadata {
    /**
     * The name of the repository where the pull request was created.
     */
    repositoryName?: RepositoryName;
    /**
     * The name of the branch that the pull request will be merged into.
     */
    destinationReference?: ReferenceName;
    /**
     * Information about the merge state change event.
     */
    mergeMetadata?: MergeMetadata;
  }
  export interface PullRequestSourceReferenceUpdatedEventMetadata {
    /**
     * The name of the repository where the pull request was updated.
     */
    repositoryName?: RepositoryName;
    /**
     * The full commit ID of the commit in the destination branch that was the tip of the branch at the time the pull request was updated.
     */
    beforeCommitId?: CommitId;
    /**
     * The full commit ID of the commit in the source branch that was the tip of the branch at the time the pull request was updated.
     */
    afterCommitId?: CommitId;
    /**
     * The commit ID of the most recent commit that the source branch and the destination branch have in common.
     */
    mergeBase?: CommitId;
  }
  export interface PullRequestStatusChangedEventMetadata {
    /**
     * The changed status of the pull request.
     */
    pullRequestStatus?: PullRequestStatusEnum;
  }
  export type PullRequestStatusEnum = "OPEN"|"CLOSED"|string;
  export interface PullRequestTarget {
    /**
     * The name of the repository that contains the pull request source and destination branches.
     */
    repositoryName?: RepositoryName;
    /**
     * The branch of the repository that contains the changes for the pull request. Also known as the source branch.
     */
    sourceReference?: ReferenceName;
    /**
     * The branch of the repository where the pull request changes will be merged into. Also known as the destination branch. 
     */
    destinationReference?: ReferenceName;
    /**
     * The full commit ID that is the tip of the destination branch. This is the commit where the pull request was or will be merged.
     */
    destinationCommit?: CommitId;
    /**
     * The full commit ID of the tip of the source branch used to create the pull request. If the pull request branch is updated by a push while the pull request is open, the commit ID will change to reflect the new tip of the branch.
     */
    sourceCommit?: CommitId;
    /**
     * The commit ID of the most recent commit that the source branch and the destination branch have in common.
     */
    mergeBase?: CommitId;
    /**
     * Returns metadata about the state of the merge, including whether the merge has been made.
     */
    mergeMetadata?: MergeMetadata;
  }
  export type PullRequestTargetList = PullRequestTarget[];
  export type PutFileEntries = PutFileEntry[];
  export interface PutFileEntry {
    /**
     * The full path to the file in the repository, including the name of the file.
     */
    filePath: Path;
    /**
     * The extrapolated file mode permissions for the file. Valid values include EXECUTABLE and NORMAL.
     */
    fileMode?: FileModeTypeEnum;
    /**
     * The content of the file, if a source file is not specified.
     */
    fileContent?: FileContent;
    /**
     * The name and full path of the file that contains the changes you want to make as part of the commit, if you are not providing the file content directly.
     */
    sourceFile?: SourceFileSpecifier;
  }
  export interface PutFileInput {
    /**
     * The name of the repository where you want to add or update the file.
     */
    repositoryName: RepositoryName;
    /**
     * The name of the branch where you want to add or update the file. If this is an empty repository, this branch will be created.
     */
    branchName: BranchName;
    /**
     * The content of the file, in binary object format. 
     */
    fileContent: FileContent;
    /**
     * The name of the file you want to add or update, including the relative path to the file in the repository.  If the path does not currently exist in the repository, the path will be created as part of adding the file. 
     */
    filePath: Path;
    /**
     * The file mode permissions of the blob. Valid file mode permissions are listed below.
     */
    fileMode?: FileModeTypeEnum;
    /**
     * The full commit ID of the head commit in the branch where you want to add or update the file. If this is an empty repository, no commit ID is required. If this is not an empty repository, a commit ID is required.  The commit ID must match the ID of the head commit at the time of the operation, or an error will occur, and the file will not be added or updated.
     */
    parentCommitId?: CommitId;
    /**
     * A message about why this file was added or updated. While optional, adding a message is strongly encouraged in order to provide a more useful commit history for your repository.
     */
    commitMessage?: Message;
    /**
     * The name of the person adding or updating the file. While optional, adding a name is strongly encouraged in order to provide a more useful commit history for your repository.
     */
    name?: Name;
    /**
     * An email address for the person adding or updating the file.
     */
    email?: Email;
  }
  export interface PutFileOutput {
    /**
     * The full SHA of the commit that contains this file change.
     */
    commitId: ObjectId;
    /**
     * The ID of the blob, which is its SHA-1 pointer.
     */
    blobId: ObjectId;
    /**
     * The full SHA-1 pointer of the tree information for the commit that contains this file change.
     */
    treeId: ObjectId;
  }
  export interface PutRepositoryTriggersInput {
    /**
     * The name of the repository where you want to create or update the trigger.
     */
    repositoryName: RepositoryName;
    /**
     * The JSON block of configuration information for each trigger.
     */
    triggers: RepositoryTriggersList;
  }
  export interface PutRepositoryTriggersOutput {
    /**
     * The system-generated unique ID for the create or update operation.
     */
    configurationId?: RepositoryTriggersConfigurationId;
  }
  export type ReferenceName = string;
  export type RelativeFileVersionEnum = "BEFORE"|"AFTER"|string;
  export type RepositoryDescription = string;
  export type RepositoryId = string;
  export interface RepositoryMetadata {
    /**
     * The ID of the AWS account associated with the repository.
     */
    accountId?: AccountId;
    /**
     * The ID of the repository.
     */
    repositoryId?: RepositoryId;
    /**
     * The repository's name.
     */
    repositoryName?: RepositoryName;
    /**
     * A comment or description about the repository.
     */
    repositoryDescription?: RepositoryDescription;
    /**
     * The repository's default branch name.
     */
    defaultBranch?: BranchName;
    /**
     * The date and time the repository was last modified, in timestamp format.
     */
    lastModifiedDate?: LastModifiedDate;
    /**
     * The date and time the repository was created, in timestamp format.
     */
    creationDate?: CreationDate;
    /**
     * The URL to use for cloning the repository over HTTPS.
     */
    cloneUrlHttp?: CloneUrlHttp;
    /**
     * The URL to use for cloning the repository over SSH.
     */
    cloneUrlSsh?: CloneUrlSsh;
    /**
     * The Amazon Resource Name (ARN) of the repository.
     */
    Arn?: Arn;
  }
  export type RepositoryMetadataList = RepositoryMetadata[];
  export type RepositoryName = string;
  export interface RepositoryNameIdPair {
    /**
     * The name associated with the repository.
     */
    repositoryName?: RepositoryName;
    /**
     * The ID associated with the repository.
     */
    repositoryId?: RepositoryId;
  }
  export type RepositoryNameIdPairList = RepositoryNameIdPair[];
  export type RepositoryNameList = RepositoryName[];
  export type RepositoryNotFoundList = RepositoryName[];
  export interface RepositoryTrigger {
    /**
     * The name of the trigger.
     */
    name: RepositoryTriggerName;
    /**
     * The ARN of the resource that is the target for a trigger. For example, the ARN of a topic in Amazon Simple Notification Service (SNS).
     */
    destinationArn: Arn;
    /**
     * Any custom data associated with the trigger that will be included in the information sent to the target of the trigger.
     */
    customData?: RepositoryTriggerCustomData;
    /**
     * The branches that will be included in the trigger configuration. If you specify an empty array, the trigger will apply to all branches.  While no content is required in the array, you must include the array itself. 
     */
    branches?: BranchNameList;
    /**
     * The repository events that will cause the trigger to run actions in another service, such as sending a notification through Amazon Simple Notification Service (SNS).   The valid value "all" cannot be used with any other values. 
     */
    events: RepositoryTriggerEventList;
  }
  export type RepositoryTriggerCustomData = string;
  export type RepositoryTriggerEventEnum = "all"|"updateReference"|"createReference"|"deleteReference"|string;
  export type RepositoryTriggerEventList = RepositoryTriggerEventEnum[];
  export interface RepositoryTriggerExecutionFailure {
    /**
     * The name of the trigger that did not run.
     */
    trigger?: RepositoryTriggerName;
    /**
     * Additional message information about the trigger that did not run.
     */
    failureMessage?: RepositoryTriggerExecutionFailureMessage;
  }
  export type RepositoryTriggerExecutionFailureList = RepositoryTriggerExecutionFailure[];
  export type RepositoryTriggerExecutionFailureMessage = string;
  export type RepositoryTriggerName = string;
  export type RepositoryTriggerNameList = RepositoryTriggerName[];
  export type RepositoryTriggersConfigurationId = string;
  export type RepositoryTriggersList = RepositoryTrigger[];
  export type SetFileModeEntries = SetFileModeEntry[];
  export interface SetFileModeEntry {
    /**
     * The full path to the file, including the name of the file.
     */
    filePath: Path;
    /**
     * The file mode for the file.
     */
    fileMode: FileModeTypeEnum;
  }
  export type SortByEnum = "repositoryName"|"lastModifiedDate"|string;
  export interface SourceFileSpecifier {
    /**
     * The full path to the file, including the name of the file.
     */
    filePath: Path;
    /**
     * Whether to remove the source file from the parent commit.
     */
    isMove?: IsMove;
  }
  export interface SubModule {
    /**
     * The commit ID that contains the reference to the submodule.
     */
    commitId?: ObjectId;
    /**
     * The fully qualified path to the folder that contains the reference to the submodule.
     */
    absolutePath?: Path;
    /**
     * The relative path of the submodule from the folder where the query originated.
     */
    relativePath?: Path;
  }
  export type SubModuleList = SubModule[];
  export interface SymbolicLink {
    /**
     * The blob ID that contains the information about the symbolic link.
     */
    blobId?: ObjectId;
    /**
     * The fully-qualified path to the folder that contains the symbolic link.
     */
    absolutePath?: Path;
    /**
     * The relative path of the symbolic link from the folder where the query originated.
     */
    relativePath?: Path;
    /**
     * The file mode permissions of the blob that cotains information about the symbolic link.
     */
    fileMode?: FileModeTypeEnum;
  }
  export type SymbolicLinkList = SymbolicLink[];
  export interface Target {
    /**
     * The name of the repository that contains the pull request.
     */
    repositoryName: RepositoryName;
    /**
     * The branch of the repository that contains the changes for the pull request. Also known as the source branch.
     */
    sourceReference: ReferenceName;
    /**
     * The branch of the repository where the pull request changes will be merged into. Also known as the destination branch.
     */
    destinationReference?: ReferenceName;
  }
  export type TargetList = Target[];
  export interface TestRepositoryTriggersInput {
    /**
     * The name of the repository in which to test the triggers.
     */
    repositoryName: RepositoryName;
    /**
     * The list of triggers to test.
     */
    triggers: RepositoryTriggersList;
  }
  export interface TestRepositoryTriggersOutput {
    /**
     * The list of triggers that were successfully tested. This list provides the names of the triggers that were successfully tested, separated by commas.
     */
    successfulExecutions?: RepositoryTriggerNameList;
    /**
     * The list of triggers that were not able to be tested. This list provides the names of the triggers that could not be tested, separated by commas.
     */
    failedExecutions?: RepositoryTriggerExecutionFailureList;
  }
  export type Title = string;
  export interface UpdateCommentInput {
    /**
     * The system-generated ID of the comment you want to update. To get this ID, use GetCommentsForComparedCommit or GetCommentsForPullRequest.
     */
    commentId: CommentId;
    /**
     * The updated content with which you want to replace the existing content of the comment.
     */
    content: Content;
  }
  export interface UpdateCommentOutput {
    /**
     * Information about the updated comment.
     */
    comment?: Comment;
  }
  export interface UpdateDefaultBranchInput {
    /**
     * The name of the repository to set or change the default branch for.
     */
    repositoryName: RepositoryName;
    /**
     * The name of the branch to set as the default.
     */
    defaultBranchName: BranchName;
  }
  export interface UpdatePullRequestDescriptionInput {
    /**
     * The system-generated ID of the pull request. To get this ID, use ListPullRequests.
     */
    pullRequestId: PullRequestId;
    /**
     * The updated content of the description for the pull request. This content will replace the existing description.
     */
    description: Description;
  }
  export interface UpdatePullRequestDescriptionOutput {
    /**
     * Information about the updated pull request.
     */
    pullRequest: PullRequest;
  }
  export interface UpdatePullRequestStatusInput {
    /**
     * The system-generated ID of the pull request. To get this ID, use ListPullRequests.
     */
    pullRequestId: PullRequestId;
    /**
     * The status of the pull request. The only valid operations are to update the status from OPEN to OPEN, OPEN to CLOSED or from from CLOSED to CLOSED.
     */
    pullRequestStatus: PullRequestStatusEnum;
  }
  export interface UpdatePullRequestStatusOutput {
    /**
     * Information about the pull request.
     */
    pullRequest: PullRequest;
  }
  export interface UpdatePullRequestTitleInput {
    /**
     * The system-generated ID of the pull request. To get this ID, use ListPullRequests.
     */
    pullRequestId: PullRequestId;
    /**
     * The updated title of the pull request. This will replace the existing title.
     */
    title: Title;
  }
  export interface UpdatePullRequestTitleOutput {
    /**
     * Information about the updated pull request.
     */
    pullRequest: PullRequest;
  }
  export interface UpdateRepositoryDescriptionInput {
    /**
     * The name of the repository to set or change the comment or description for.
     */
    repositoryName: RepositoryName;
    /**
     * The new comment or description for the specified repository. Repository descriptions are limited to 1,000 characters.
     */
    repositoryDescription?: RepositoryDescription;
  }
  export interface UpdateRepositoryNameInput {
    /**
     * The existing name of the repository.
     */
    oldName: RepositoryName;
    /**
     * The new name for the repository.
     */
    newName: RepositoryName;
  }
  export interface UserInfo {
    /**
     * The name of the user who made the specified commit.
     */
    name?: Name;
    /**
     * The email address associated with the user who made the commit, if any.
     */
    email?: Email;
    /**
     * The date when the specified commit was commited, in timestamp format with GMT offset.
     */
    date?: _Date;
  }
  export type blob = Buffer|Uint8Array|Blob|string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2015-04-13"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the CodeCommit client.
   */
  export import Types = CodeCommit;
}
export = CodeCommit;
