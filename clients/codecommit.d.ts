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
   * Returns information about one or more repositories. The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a web page could expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a web page.
   */
  batchGetRepositories(params: CodeCommit.Types.BatchGetRepositoriesInput, callback?: (err: AWSError, data: CodeCommit.Types.BatchGetRepositoriesOutput) => void): Request<CodeCommit.Types.BatchGetRepositoriesOutput, AWSError>;
  /**
   * Returns information about one or more repositories. The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a web page could expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a web page.
   */
  batchGetRepositories(callback?: (err: AWSError, data: CodeCommit.Types.BatchGetRepositoriesOutput) => void): Request<CodeCommit.Types.BatchGetRepositoriesOutput, AWSError>;
  /**
   * Creates a new branch in a repository and points the branch to a commit. Calling the create branch operation does not set a repository's default branch. To do this, call the update default branch operation.
   */
  createBranch(params: CodeCommit.Types.CreateBranchInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates a new branch in a repository and points the branch to a commit. Calling the create branch operation does not set a repository's default branch. To do this, call the update default branch operation.
   */
  createBranch(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates a new, empty repository.
   */
  createRepository(params: CodeCommit.Types.CreateRepositoryInput, callback?: (err: AWSError, data: CodeCommit.Types.CreateRepositoryOutput) => void): Request<CodeCommit.Types.CreateRepositoryOutput, AWSError>;
  /**
   * Creates a new, empty repository.
   */
  createRepository(callback?: (err: AWSError, data: CodeCommit.Types.CreateRepositoryOutput) => void): Request<CodeCommit.Types.CreateRepositoryOutput, AWSError>;
  /**
   * Deletes a repository. If a specified repository was already deleted, a null repository ID will be returned. Deleting a repository also deletes all associated objects and metadata. After a repository is deleted, all future push calls to the deleted repository will fail.
   */
  deleteRepository(params: CodeCommit.Types.DeleteRepositoryInput, callback?: (err: AWSError, data: CodeCommit.Types.DeleteRepositoryOutput) => void): Request<CodeCommit.Types.DeleteRepositoryOutput, AWSError>;
  /**
   * Deletes a repository. If a specified repository was already deleted, a null repository ID will be returned. Deleting a repository also deletes all associated objects and metadata. After a repository is deleted, all future push calls to the deleted repository will fail.
   */
  deleteRepository(callback?: (err: AWSError, data: CodeCommit.Types.DeleteRepositoryOutput) => void): Request<CodeCommit.Types.DeleteRepositoryOutput, AWSError>;
  /**
   * Returns information about a repository branch, including its name and the last commit ID.
   */
  getBranch(params: CodeCommit.Types.GetBranchInput, callback?: (err: AWSError, data: CodeCommit.Types.GetBranchOutput) => void): Request<CodeCommit.Types.GetBranchOutput, AWSError>;
  /**
   * Returns information about a repository branch, including its name and the last commit ID.
   */
  getBranch(callback?: (err: AWSError, data: CodeCommit.Types.GetBranchOutput) => void): Request<CodeCommit.Types.GetBranchOutput, AWSError>;
  /**
   * Returns information about a commit, including commit message and committer information.
   */
  getCommit(params: CodeCommit.Types.GetCommitInput, callback?: (err: AWSError, data: CodeCommit.Types.GetCommitOutput) => void): Request<CodeCommit.Types.GetCommitOutput, AWSError>;
  /**
   * Returns information about a commit, including commit message and committer information.
   */
  getCommit(callback?: (err: AWSError, data: CodeCommit.Types.GetCommitOutput) => void): Request<CodeCommit.Types.GetCommitOutput, AWSError>;
  /**
   * Returns information about a repository. The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a web page could expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a web page.
   */
  getRepository(params: CodeCommit.Types.GetRepositoryInput, callback?: (err: AWSError, data: CodeCommit.Types.GetRepositoryOutput) => void): Request<CodeCommit.Types.GetRepositoryOutput, AWSError>;
  /**
   * Returns information about a repository. The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a web page could expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a web page.
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
   * Gets information about one or more repositories.
   */
  listRepositories(params: CodeCommit.Types.ListRepositoriesInput, callback?: (err: AWSError, data: CodeCommit.Types.ListRepositoriesOutput) => void): Request<CodeCommit.Types.ListRepositoriesOutput, AWSError>;
  /**
   * Gets information about one or more repositories.
   */
  listRepositories(callback?: (err: AWSError, data: CodeCommit.Types.ListRepositoriesOutput) => void): Request<CodeCommit.Types.ListRepositoriesOutput, AWSError>;
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
   * Sets or changes the default branch name for the specified repository. If you use this operation to change the default branch name to the current default branch name, a success message is returned even though the default branch did not change.
   */
  updateDefaultBranch(params: CodeCommit.Types.UpdateDefaultBranchInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets or changes the default branch name for the specified repository. If you use this operation to change the default branch name to the current default branch name, a success message is returned even though the default branch did not change.
   */
  updateDefaultBranch(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets or changes the comment or description for a repository. The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a web page could expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a web page.
   */
  updateRepositoryDescription(params: CodeCommit.Types.UpdateRepositoryDescriptionInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets or changes the comment or description for a repository. The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a web page could expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a web page.
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
declare namespace CodeCommit.Types {
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
  export type CloneUrlHttp = string;
  export type CloneUrlSsh = string;
  export interface Commit {
    /**
     * Tree information for the specified commit.
     */
    treeId?: ObjectId;
    /**
     * The parent list for the specified commit.
     */
    parents?: ParentList;
    /**
     * The message associated with the specified commit.
     */
    message?: Message;
    /**
     * Information about the author of the specified commit.
     */
    author?: UserInfo;
    /**
     * Information about the person who committed the specified commit, also known as the committer. For more information about the difference between an author and a committer in Git, see Viewing the Commit History in Pro Git by Scott Chacon and Ben Straub.
     */
    committer?: UserInfo;
    /**
     * Any additional data associated with the specified commit.
     */
    additionalData?: AdditionalData;
  }
  export type CommitId = string;
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
  export interface CreateRepositoryInput {
    /**
     * The name of the new repository to be created. The repository name must be unique across the calling AWS account. In addition, repository names are limited to 100 alphanumeric, dash, and underscore characters, and cannot include certain characters. For a full description of the limits on repository names, see Limits in the AWS CodeCommit User Guide. The suffix ".git" is prohibited.
     */
    repositoryName: RepositoryName;
    /**
     * A comment or description about the new repository. The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a web page could expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a web page.
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
  export type Email = string;
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
  export interface GetCommitInput {
    /**
     * The name of the repository to which the commit was made.
     */
    repositoryName: RepositoryName;
    /**
     * The commit ID.
     */
    commitId: ObjectId;
  }
  export interface GetCommitOutput {
    /**
     * Information about the specified commit.
     */
    commit: Commit;
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
    repositoryName?: RepositoryName;
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
  export type LastModifiedDate = Date;
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
  export type Message = string;
  export type Name = string;
  export type NextToken = string;
  export type ObjectId = string;
  export type OrderEnum = "ascending"|"descending"|string;
  export type ParentList = ObjectId[];
  export interface PutRepositoryTriggersInput {
    /**
     * The name of the repository where you want to create or update the trigger. 
     */
    repositoryName?: RepositoryName;
    /**
     * The JSON block of configuration information for each trigger. 
     */
    triggers?: RepositoryTriggersList;
  }
  export interface PutRepositoryTriggersOutput {
    /**
     * The system-generated unique ID for the create or update operation. 
     */
    configurationId?: RepositoryTriggersConfigurationId;
  }
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
    name?: RepositoryTriggerName;
    /**
     * The ARN of the resource that is the target for a trigger. For example, the ARN of a topic in Amazon Simple Notification Service (SNS).
     */
    destinationArn?: Arn;
    /**
     * Any custom data associated with the trigger that will be included in the information sent to the target of the trigger.
     */
    customData?: RepositoryTriggerCustomData;
    /**
     * The branches that will be included in the trigger configuration. If no branches are specified, the trigger will apply to all branches.
     */
    branches?: BranchNameList;
    /**
     * The repository events that will cause the trigger to run actions in another service, such as sending a notification through Amazon Simple Notification Service (SNS). If no events are specified, the trigger will run for all repository events.
     */
    events?: RepositoryTriggerEventList;
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
  export type SortByEnum = "repositoryName"|"lastModifiedDate"|string;
  export interface TestRepositoryTriggersInput {
    /**
     * The name of the repository in which to test the triggers.
     */
    repositoryName?: RepositoryName;
    /**
     * The list of triggers to test.
     */
    triggers?: RepositoryTriggersList;
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
     * The date when the specified commit was pushed to the repository.
     */
    date?: _Date;
  }
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
}
export = CodeCommit;
