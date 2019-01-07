import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class CodeBuild extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: CodeBuild.Types.ClientConfiguration)
  config: Config & CodeBuild.Types.ClientConfiguration;
  /**
   * Deletes one or more builds.
   */
  batchDeleteBuilds(params: CodeBuild.Types.BatchDeleteBuildsInput, callback?: (err: AWSError, data: CodeBuild.Types.BatchDeleteBuildsOutput) => void): Request<CodeBuild.Types.BatchDeleteBuildsOutput, AWSError>;
  /**
   * Deletes one or more builds.
   */
  batchDeleteBuilds(callback?: (err: AWSError, data: CodeBuild.Types.BatchDeleteBuildsOutput) => void): Request<CodeBuild.Types.BatchDeleteBuildsOutput, AWSError>;
  /**
   * Gets information about builds.
   */
  batchGetBuilds(params: CodeBuild.Types.BatchGetBuildsInput, callback?: (err: AWSError, data: CodeBuild.Types.BatchGetBuildsOutput) => void): Request<CodeBuild.Types.BatchGetBuildsOutput, AWSError>;
  /**
   * Gets information about builds.
   */
  batchGetBuilds(callback?: (err: AWSError, data: CodeBuild.Types.BatchGetBuildsOutput) => void): Request<CodeBuild.Types.BatchGetBuildsOutput, AWSError>;
  /**
   * Gets information about build projects.
   */
  batchGetProjects(params: CodeBuild.Types.BatchGetProjectsInput, callback?: (err: AWSError, data: CodeBuild.Types.BatchGetProjectsOutput) => void): Request<CodeBuild.Types.BatchGetProjectsOutput, AWSError>;
  /**
   * Gets information about build projects.
   */
  batchGetProjects(callback?: (err: AWSError, data: CodeBuild.Types.BatchGetProjectsOutput) => void): Request<CodeBuild.Types.BatchGetProjectsOutput, AWSError>;
  /**
   * Creates a build project.
   */
  createProject(params: CodeBuild.Types.CreateProjectInput, callback?: (err: AWSError, data: CodeBuild.Types.CreateProjectOutput) => void): Request<CodeBuild.Types.CreateProjectOutput, AWSError>;
  /**
   * Creates a build project.
   */
  createProject(callback?: (err: AWSError, data: CodeBuild.Types.CreateProjectOutput) => void): Request<CodeBuild.Types.CreateProjectOutput, AWSError>;
  /**
   * For an existing AWS CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, enables AWS CodeBuild to start rebuilding the source code every time a code change is pushed to the repository.  If you enable webhooks for an AWS CodeBuild project, and the project is used as a build step in AWS CodePipeline, then two identical builds are created for each commit. One build is triggered through webhooks, and one through AWS CodePipeline. Because billing is on a per-build basis, you are billed for both builds. Therefore, if you are using AWS CodePipeline, we recommend that you disable webhooks in AWS CodeBuild. In the AWS CodeBuild console, clear the Webhook box. For more information, see step 5 in Change a Build Project's Settings. 
   */
  createWebhook(params: CodeBuild.Types.CreateWebhookInput, callback?: (err: AWSError, data: CodeBuild.Types.CreateWebhookOutput) => void): Request<CodeBuild.Types.CreateWebhookOutput, AWSError>;
  /**
   * For an existing AWS CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, enables AWS CodeBuild to start rebuilding the source code every time a code change is pushed to the repository.  If you enable webhooks for an AWS CodeBuild project, and the project is used as a build step in AWS CodePipeline, then two identical builds are created for each commit. One build is triggered through webhooks, and one through AWS CodePipeline. Because billing is on a per-build basis, you are billed for both builds. Therefore, if you are using AWS CodePipeline, we recommend that you disable webhooks in AWS CodeBuild. In the AWS CodeBuild console, clear the Webhook box. For more information, see step 5 in Change a Build Project's Settings. 
   */
  createWebhook(callback?: (err: AWSError, data: CodeBuild.Types.CreateWebhookOutput) => void): Request<CodeBuild.Types.CreateWebhookOutput, AWSError>;
  /**
   * Deletes a build project.
   */
  deleteProject(params: CodeBuild.Types.DeleteProjectInput, callback?: (err: AWSError, data: CodeBuild.Types.DeleteProjectOutput) => void): Request<CodeBuild.Types.DeleteProjectOutput, AWSError>;
  /**
   * Deletes a build project.
   */
  deleteProject(callback?: (err: AWSError, data: CodeBuild.Types.DeleteProjectOutput) => void): Request<CodeBuild.Types.DeleteProjectOutput, AWSError>;
  /**
   *  Deletes a set of GitHub, GitHub Enterprise, or Bitbucket source credentials. 
   */
  deleteSourceCredentials(params: CodeBuild.Types.DeleteSourceCredentialsInput, callback?: (err: AWSError, data: CodeBuild.Types.DeleteSourceCredentialsOutput) => void): Request<CodeBuild.Types.DeleteSourceCredentialsOutput, AWSError>;
  /**
   *  Deletes a set of GitHub, GitHub Enterprise, or Bitbucket source credentials. 
   */
  deleteSourceCredentials(callback?: (err: AWSError, data: CodeBuild.Types.DeleteSourceCredentialsOutput) => void): Request<CodeBuild.Types.DeleteSourceCredentialsOutput, AWSError>;
  /**
   * For an existing AWS CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, stops AWS CodeBuild from rebuilding the source code every time a code change is pushed to the repository.
   */
  deleteWebhook(params: CodeBuild.Types.DeleteWebhookInput, callback?: (err: AWSError, data: CodeBuild.Types.DeleteWebhookOutput) => void): Request<CodeBuild.Types.DeleteWebhookOutput, AWSError>;
  /**
   * For an existing AWS CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, stops AWS CodeBuild from rebuilding the source code every time a code change is pushed to the repository.
   */
  deleteWebhook(callback?: (err: AWSError, data: CodeBuild.Types.DeleteWebhookOutput) => void): Request<CodeBuild.Types.DeleteWebhookOutput, AWSError>;
  /**
   *  Imports the source repository credentials for an AWS CodeBuild project that has its source code stored in a GitHub, GitHub Enterprise, or Bitbucket repository. 
   */
  importSourceCredentials(params: CodeBuild.Types.ImportSourceCredentialsInput, callback?: (err: AWSError, data: CodeBuild.Types.ImportSourceCredentialsOutput) => void): Request<CodeBuild.Types.ImportSourceCredentialsOutput, AWSError>;
  /**
   *  Imports the source repository credentials for an AWS CodeBuild project that has its source code stored in a GitHub, GitHub Enterprise, or Bitbucket repository. 
   */
  importSourceCredentials(callback?: (err: AWSError, data: CodeBuild.Types.ImportSourceCredentialsOutput) => void): Request<CodeBuild.Types.ImportSourceCredentialsOutput, AWSError>;
  /**
   * Resets the cache for a project.
   */
  invalidateProjectCache(params: CodeBuild.Types.InvalidateProjectCacheInput, callback?: (err: AWSError, data: CodeBuild.Types.InvalidateProjectCacheOutput) => void): Request<CodeBuild.Types.InvalidateProjectCacheOutput, AWSError>;
  /**
   * Resets the cache for a project.
   */
  invalidateProjectCache(callback?: (err: AWSError, data: CodeBuild.Types.InvalidateProjectCacheOutput) => void): Request<CodeBuild.Types.InvalidateProjectCacheOutput, AWSError>;
  /**
   * Gets a list of build IDs, with each build ID representing a single build.
   */
  listBuilds(params: CodeBuild.Types.ListBuildsInput, callback?: (err: AWSError, data: CodeBuild.Types.ListBuildsOutput) => void): Request<CodeBuild.Types.ListBuildsOutput, AWSError>;
  /**
   * Gets a list of build IDs, with each build ID representing a single build.
   */
  listBuilds(callback?: (err: AWSError, data: CodeBuild.Types.ListBuildsOutput) => void): Request<CodeBuild.Types.ListBuildsOutput, AWSError>;
  /**
   * Gets a list of build IDs for the specified build project, with each build ID representing a single build.
   */
  listBuildsForProject(params: CodeBuild.Types.ListBuildsForProjectInput, callback?: (err: AWSError, data: CodeBuild.Types.ListBuildsForProjectOutput) => void): Request<CodeBuild.Types.ListBuildsForProjectOutput, AWSError>;
  /**
   * Gets a list of build IDs for the specified build project, with each build ID representing a single build.
   */
  listBuildsForProject(callback?: (err: AWSError, data: CodeBuild.Types.ListBuildsForProjectOutput) => void): Request<CodeBuild.Types.ListBuildsForProjectOutput, AWSError>;
  /**
   * Gets information about Docker images that are managed by AWS CodeBuild.
   */
  listCuratedEnvironmentImages(params: CodeBuild.Types.ListCuratedEnvironmentImagesInput, callback?: (err: AWSError, data: CodeBuild.Types.ListCuratedEnvironmentImagesOutput) => void): Request<CodeBuild.Types.ListCuratedEnvironmentImagesOutput, AWSError>;
  /**
   * Gets information about Docker images that are managed by AWS CodeBuild.
   */
  listCuratedEnvironmentImages(callback?: (err: AWSError, data: CodeBuild.Types.ListCuratedEnvironmentImagesOutput) => void): Request<CodeBuild.Types.ListCuratedEnvironmentImagesOutput, AWSError>;
  /**
   * Gets a list of build project names, with each build project name representing a single build project.
   */
  listProjects(params: CodeBuild.Types.ListProjectsInput, callback?: (err: AWSError, data: CodeBuild.Types.ListProjectsOutput) => void): Request<CodeBuild.Types.ListProjectsOutput, AWSError>;
  /**
   * Gets a list of build project names, with each build project name representing a single build project.
   */
  listProjects(callback?: (err: AWSError, data: CodeBuild.Types.ListProjectsOutput) => void): Request<CodeBuild.Types.ListProjectsOutput, AWSError>;
  /**
   *  Returns a list of SourceCredentialsInfo objects. 
   */
  listSourceCredentials(params: CodeBuild.Types.ListSourceCredentialsInput, callback?: (err: AWSError, data: CodeBuild.Types.ListSourceCredentialsOutput) => void): Request<CodeBuild.Types.ListSourceCredentialsOutput, AWSError>;
  /**
   *  Returns a list of SourceCredentialsInfo objects. 
   */
  listSourceCredentials(callback?: (err: AWSError, data: CodeBuild.Types.ListSourceCredentialsOutput) => void): Request<CodeBuild.Types.ListSourceCredentialsOutput, AWSError>;
  /**
   * Starts running a build.
   */
  startBuild(params: CodeBuild.Types.StartBuildInput, callback?: (err: AWSError, data: CodeBuild.Types.StartBuildOutput) => void): Request<CodeBuild.Types.StartBuildOutput, AWSError>;
  /**
   * Starts running a build.
   */
  startBuild(callback?: (err: AWSError, data: CodeBuild.Types.StartBuildOutput) => void): Request<CodeBuild.Types.StartBuildOutput, AWSError>;
  /**
   * Attempts to stop running a build.
   */
  stopBuild(params: CodeBuild.Types.StopBuildInput, callback?: (err: AWSError, data: CodeBuild.Types.StopBuildOutput) => void): Request<CodeBuild.Types.StopBuildOutput, AWSError>;
  /**
   * Attempts to stop running a build.
   */
  stopBuild(callback?: (err: AWSError, data: CodeBuild.Types.StopBuildOutput) => void): Request<CodeBuild.Types.StopBuildOutput, AWSError>;
  /**
   * Changes the settings of a build project.
   */
  updateProject(params: CodeBuild.Types.UpdateProjectInput, callback?: (err: AWSError, data: CodeBuild.Types.UpdateProjectOutput) => void): Request<CodeBuild.Types.UpdateProjectOutput, AWSError>;
  /**
   * Changes the settings of a build project.
   */
  updateProject(callback?: (err: AWSError, data: CodeBuild.Types.UpdateProjectOutput) => void): Request<CodeBuild.Types.UpdateProjectOutput, AWSError>;
  /**
   *  Updates the webhook associated with an AWS CodeBuild build project.    If you use Bitbucket for your repository, rotateSecret is ignored.  
   */
  updateWebhook(params: CodeBuild.Types.UpdateWebhookInput, callback?: (err: AWSError, data: CodeBuild.Types.UpdateWebhookOutput) => void): Request<CodeBuild.Types.UpdateWebhookOutput, AWSError>;
  /**
   *  Updates the webhook associated with an AWS CodeBuild build project.    If you use Bitbucket for your repository, rotateSecret is ignored.  
   */
  updateWebhook(callback?: (err: AWSError, data: CodeBuild.Types.UpdateWebhookOutput) => void): Request<CodeBuild.Types.UpdateWebhookOutput, AWSError>;
}
declare namespace CodeBuild {
  export type ArtifactNamespace = "NONE"|"BUILD_ID"|string;
  export type ArtifactPackaging = "NONE"|"ZIP"|string;
  export type ArtifactsType = "CODEPIPELINE"|"S3"|"NO_ARTIFACTS"|string;
  export type AuthType = "OAUTH"|"BASIC_AUTH"|"PERSONAL_ACCESS_TOKEN"|string;
  export interface BatchDeleteBuildsInput {
    /**
     * The IDs of the builds to delete.
     */
    ids: BuildIds;
  }
  export interface BatchDeleteBuildsOutput {
    /**
     * The IDs of the builds that were successfully deleted.
     */
    buildsDeleted?: BuildIds;
    /**
     * Information about any builds that could not be successfully deleted.
     */
    buildsNotDeleted?: BuildsNotDeleted;
  }
  export interface BatchGetBuildsInput {
    /**
     * The IDs of the builds.
     */
    ids: BuildIds;
  }
  export interface BatchGetBuildsOutput {
    /**
     * Information about the requested builds.
     */
    builds?: Builds;
    /**
     * The IDs of builds for which information could not be found.
     */
    buildsNotFound?: BuildIds;
  }
  export interface BatchGetProjectsInput {
    /**
     * The names of the build projects.
     */
    names: ProjectNames;
  }
  export interface BatchGetProjectsOutput {
    /**
     * Information about the requested build projects.
     */
    projects?: Projects;
    /**
     * The names of build projects for which information could not be found.
     */
    projectsNotFound?: ProjectNames;
  }
  export type Boolean = boolean;
  export interface Build {
    /**
     * The unique ID for the build.
     */
    id?: NonEmptyString;
    /**
     * The Amazon Resource Name (ARN) of the build.
     */
    arn?: NonEmptyString;
    /**
     * When the build process started, expressed in Unix time format.
     */
    startTime?: Timestamp;
    /**
     * When the build process ended, expressed in Unix time format.
     */
    endTime?: Timestamp;
    /**
     * The current build phase.
     */
    currentPhase?: String;
    /**
     * The current status of the build. Valid values include:    FAILED: The build failed.    FAULT: The build faulted.    IN_PROGRESS: The build is still in progress.    STOPPED: The build stopped.    SUCCEEDED: The build succeeded.    TIMED_OUT: The build timed out.  
     */
    buildStatus?: StatusType;
    /**
     * Any version identifier for the version of the source code to be built.
     */
    sourceVersion?: NonEmptyString;
    /**
     *  An identifier for the version of this build's source code.     For AWS CodeCommit, GitHub, GitHub Enterprise, and BitBucket, the commit ID.     For AWS CodePipeline, the source revision provided by AWS CodePipeline.     For Amazon Simple Storage Service (Amazon S3), this does not apply.   
     */
    resolvedSourceVersion?: NonEmptyString;
    /**
     * The name of the AWS CodeBuild project.
     */
    projectName?: NonEmptyString;
    /**
     * Information about all previous build phases that are complete and information about any current build phase that is not yet complete.
     */
    phases?: BuildPhases;
    /**
     * Information about the source code to be built.
     */
    source?: ProjectSource;
    /**
     *  An array of ProjectSource objects. 
     */
    secondarySources?: ProjectSources;
    /**
     *  An array of ProjectSourceVersion objects. Each ProjectSourceVersion must be one of:    For AWS CodeCommit: the commit ID to use.   For GitHub: the commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format pr/pull-request-ID (for example, pr/25). If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.   For Bitbucket: the commit ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.   For Amazon Simple Storage Service (Amazon S3): the version ID of the object that represents the build input ZIP file to use.  
     */
    secondarySourceVersions?: ProjectSecondarySourceVersions;
    /**
     * Information about the output artifacts for the build.
     */
    artifacts?: BuildArtifacts;
    /**
     *  An array of ProjectArtifacts objects. 
     */
    secondaryArtifacts?: BuildArtifactsList;
    /**
     * Information about the cache for the build.
     */
    cache?: ProjectCache;
    /**
     * Information about the build environment for this build.
     */
    environment?: ProjectEnvironment;
    /**
     * The name of a service role used for this build.
     */
    serviceRole?: NonEmptyString;
    /**
     * Information about the build's logs in Amazon CloudWatch Logs.
     */
    logs?: LogsLocation;
    /**
     * How long, in minutes, for AWS CodeBuild to wait before timing out this build if it does not get marked as completed.
     */
    timeoutInMinutes?: WrapperInt;
    /**
     *  The number of minutes a build is allowed to be queued before it times out. 
     */
    queuedTimeoutInMinutes?: WrapperInt;
    /**
     * Whether the build is complete. True if complete; otherwise, false.
     */
    buildComplete?: Boolean;
    /**
     * The entity that started the build. Valid values include:   If AWS CodePipeline started the build, the pipeline's name (for example, codepipeline/my-demo-pipeline).   If an AWS Identity and Access Management (IAM) user started the build, the user's name (for example, MyUserName).   If the Jenkins plugin for AWS CodeBuild started the build, the string CodeBuild-Jenkins-Plugin.  
     */
    initiator?: String;
    /**
     * If your AWS CodeBuild project accesses resources in an Amazon VPC, you provide this parameter that identifies the VPC ID and the list of security group IDs and subnet IDs. The security groups and subnets must belong to the same VPC. You must provide at least one security group and one subnet ID.
     */
    vpcConfig?: VpcConfig;
    /**
     * Describes a network interface.
     */
    networkInterface?: NetworkInterface;
    /**
     * The AWS Key Management Service (AWS KMS) customer master key (CMK) to be used for encrypting the build output artifacts. This is expressed either as the Amazon Resource Name (ARN) of the CMK or, if specified, the CMK's alias (using the format alias/alias-name ).
     */
    encryptionKey?: NonEmptyString;
  }
  export interface BuildArtifacts {
    /**
     * Information about the location of the build artifacts.
     */
    location?: String;
    /**
     * The SHA-256 hash of the build artifact. You can use this hash along with a checksum tool to confirm file integrity and authenticity.  This value is available only if the build project's packaging value is set to ZIP. 
     */
    sha256sum?: String;
    /**
     * The MD5 hash of the build artifact. You can use this hash along with a checksum tool to confirm file integrity and authenticity.  This value is available only if the build project's packaging value is set to ZIP. 
     */
    md5sum?: String;
    /**
     *  If this flag is set, a name specified in the build spec file overrides the artifact name. The name specified in a build spec file is calculated at build time and uses the Shell Command Language. For example, you can append a date and time to your artifact name so that it is always unique. 
     */
    overrideArtifactName?: WrapperBoolean;
    /**
     *  Information that tells you if encryption for build artifacts is disabled. 
     */
    encryptionDisabled?: WrapperBoolean;
    /**
     *  An identifier for this artifact definition. 
     */
    artifactIdentifier?: String;
  }
  export type BuildArtifactsList = BuildArtifacts[];
  export type BuildIds = NonEmptyString[];
  export interface BuildNotDeleted {
    /**
     * The ID of the build that could not be successfully deleted.
     */
    id?: NonEmptyString;
    /**
     * Additional information about the build that could not be successfully deleted.
     */
    statusCode?: String;
  }
  export interface BuildPhase {
    /**
     * The name of the build phase. Valid values include:    BUILD: Core build activities typically occur in this build phase.    COMPLETED: The build has been completed.    DOWNLOAD_SOURCE: Source code is being downloaded in this build phase.    FINALIZING: The build process is completing in this build phase.    INSTALL: Installation activities typically occur in this build phase.    POST_BUILD: Post-build activities typically occur in this build phase.    PRE_BUILD: Pre-build activities typically occur in this build phase.    PROVISIONING: The build environment is being set up.    QUEUED: The build has been submitted and is queued behind other submitted builds.    SUBMITTED: The build has been submitted.    UPLOAD_ARTIFACTS: Build output artifacts are being uploaded to the output location.  
     */
    phaseType?: BuildPhaseType;
    /**
     * The current status of the build phase. Valid values include:    FAILED: The build phase failed.    FAULT: The build phase faulted.    IN_PROGRESS: The build phase is still in progress.    QUEUED: The build has been submitted and is queued behind other submitted builds.    STOPPED: The build phase stopped.    SUCCEEDED: The build phase succeeded.    TIMED_OUT: The build phase timed out.  
     */
    phaseStatus?: StatusType;
    /**
     * When the build phase started, expressed in Unix time format.
     */
    startTime?: Timestamp;
    /**
     * When the build phase ended, expressed in Unix time format.
     */
    endTime?: Timestamp;
    /**
     * How long, in seconds, between the starting and ending times of the build's phase.
     */
    durationInSeconds?: WrapperLong;
    /**
     * Additional information about a build phase, especially to help troubleshoot a failed build.
     */
    contexts?: PhaseContexts;
  }
  export type BuildPhaseType = "SUBMITTED"|"QUEUED"|"PROVISIONING"|"DOWNLOAD_SOURCE"|"INSTALL"|"PRE_BUILD"|"BUILD"|"POST_BUILD"|"UPLOAD_ARTIFACTS"|"FINALIZING"|"COMPLETED"|string;
  export type BuildPhases = BuildPhase[];
  export type Builds = Build[];
  export type BuildsNotDeleted = BuildNotDeleted[];
  export type CacheType = "NO_CACHE"|"S3"|string;
  export interface CloudWatchLogsConfig {
    /**
     * The current status of the logs in Amazon CloudWatch Logs for a build project. Valid values are:    ENABLED: Amazon CloudWatch Logs are enabled for this build project.    DISABLED: Amazon CloudWatch Logs are not enabled for this build project.  
     */
    status: LogsConfigStatusType;
    /**
     *  The group name of the logs in Amazon CloudWatch Logs. For more information, see Working with Log Groups and Log Streams. 
     */
    groupName?: String;
    /**
     *  The prefix of the stream name of the Amazon CloudWatch Logs. For more information, see Working with Log Groups and Log Streams. 
     */
    streamName?: String;
  }
  export type ComputeType = "BUILD_GENERAL1_SMALL"|"BUILD_GENERAL1_MEDIUM"|"BUILD_GENERAL1_LARGE"|string;
  export interface CreateProjectInput {
    /**
     * The name of the build project.
     */
    name: ProjectName;
    /**
     * A description that makes the build project easy to identify.
     */
    description?: ProjectDescription;
    /**
     * Information about the build input source code for the build project.
     */
    source: ProjectSource;
    /**
     *  An array of ProjectSource objects. 
     */
    secondarySources?: ProjectSources;
    /**
     * Information about the build output artifacts for the build project.
     */
    artifacts: ProjectArtifacts;
    /**
     *  An array of ProjectArtifacts objects. 
     */
    secondaryArtifacts?: ProjectArtifactsList;
    /**
     * Stores recently used information so that it can be quickly accessed at a later time.
     */
    cache?: ProjectCache;
    /**
     * Information about the build environment for the build project.
     */
    environment: ProjectEnvironment;
    /**
     * The ARN of the AWS Identity and Access Management (IAM) role that enables AWS CodeBuild to interact with dependent AWS services on behalf of the AWS account.
     */
    serviceRole: NonEmptyString;
    /**
     * How long, in minutes, from 5 to 480 (8 hours), for AWS CodeBuild to wait before it times out any build that has not been marked as completed. The default is 60 minutes.
     */
    timeoutInMinutes?: TimeOut;
    /**
     *  The number of minutes a build is allowed to be queued before it times out. 
     */
    queuedTimeoutInMinutes?: TimeOut;
    /**
     * The AWS Key Management Service (AWS KMS) customer master key (CMK) to be used for encrypting the build output artifacts. You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using the format alias/alias-name ).
     */
    encryptionKey?: NonEmptyString;
    /**
     * A set of tags for this build project. These tags are available for use by AWS services that support AWS CodeBuild build project tags.
     */
    tags?: TagList;
    /**
     * VpcConfig enables AWS CodeBuild to access resources in an Amazon VPC.
     */
    vpcConfig?: VpcConfig;
    /**
     * Set this to true to generate a publicly accessible URL for your project's build badge.
     */
    badgeEnabled?: WrapperBoolean;
    /**
     *  Information about logs for the build project. These can be logs in Amazon CloudWatch Logs, logs uploaded to a specified S3 bucket, or both. 
     */
    logsConfig?: LogsConfig;
  }
  export interface CreateProjectOutput {
    /**
     * Information about the build project that was created.
     */
    project?: Project;
  }
  export interface CreateWebhookInput {
    /**
     * The name of the AWS CodeBuild project.
     */
    projectName: ProjectName;
    /**
     * A regular expression used to determine which repository branches are built when a webhook is triggered. If the name of a branch matches the regular expression, then it is built. If branchFilter is empty, then all branches are built.
     */
    branchFilter?: String;
  }
  export interface CreateWebhookOutput {
    /**
     * Information about a webhook that connects repository events to a build project in AWS CodeBuild.
     */
    webhook?: Webhook;
  }
  export interface DeleteProjectInput {
    /**
     * The name of the build project.
     */
    name: NonEmptyString;
  }
  export interface DeleteProjectOutput {
  }
  export interface DeleteSourceCredentialsInput {
    /**
     *  The Amazon Resource Name (ARN) of the token.
     */
    arn: NonEmptyString;
  }
  export interface DeleteSourceCredentialsOutput {
    /**
     *  The Amazon Resource Name (ARN) of the token. 
     */
    arn?: NonEmptyString;
  }
  export interface DeleteWebhookInput {
    /**
     * The name of the AWS CodeBuild project.
     */
    projectName: ProjectName;
  }
  export interface DeleteWebhookOutput {
  }
  export interface EnvironmentImage {
    /**
     * The name of the Docker image.
     */
    name?: String;
    /**
     * The description of the Docker image.
     */
    description?: String;
    /**
     * A list of environment image versions.
     */
    versions?: ImageVersions;
  }
  export type EnvironmentImages = EnvironmentImage[];
  export interface EnvironmentLanguage {
    /**
     * The programming language for the Docker images.
     */
    language?: LanguageType;
    /**
     * The list of Docker images that are related by the specified programming language.
     */
    images?: EnvironmentImages;
  }
  export type EnvironmentLanguages = EnvironmentLanguage[];
  export interface EnvironmentPlatform {
    /**
     * The platform's name.
     */
    platform?: PlatformType;
    /**
     * The list of programming languages that are available for the specified platform.
     */
    languages?: EnvironmentLanguages;
  }
  export type EnvironmentPlatforms = EnvironmentPlatform[];
  export type EnvironmentType = "WINDOWS_CONTAINER"|"LINUX_CONTAINER"|string;
  export interface EnvironmentVariable {
    /**
     * The name or key of the environment variable.
     */
    name: NonEmptyString;
    /**
     * The value of the environment variable.  We strongly discourage the use of environment variables to store sensitive values, especially AWS secret key IDs and secret access keys. Environment variables can be displayed in plain text using the AWS CodeBuild console and the AWS Command Line Interface (AWS CLI). 
     */
    value: String;
    /**
     * The type of environment variable. Valid values include:    PARAMETER_STORE: An environment variable stored in Amazon EC2 Systems Manager Parameter Store.    PLAINTEXT: An environment variable in plaintext format.  
     */
    type?: EnvironmentVariableType;
  }
  export type EnvironmentVariableType = "PLAINTEXT"|"PARAMETER_STORE"|string;
  export type EnvironmentVariables = EnvironmentVariable[];
  export type GitCloneDepth = number;
  export type ImageVersions = String[];
  export interface ImportSourceCredentialsInput {
    /**
     *  The Bitbucket username when the authType is BASIC_AUTH. This parameter is not valid for other types of source providers or connections. 
     */
    username?: NonEmptyString;
    /**
     *  For GitHub or GitHub Enterprise, this is the personal access token. For Bitbucket, this is the app password. 
     */
    token: SensitiveNonEmptyString;
    /**
     *  The source provider used for this project. 
     */
    serverType: ServerType;
    /**
     *  The type of authentication used to connect to a GitHub, GitHub Enterprise, or Bitbucket repository. An OAUTH connection is not supported by the API and must be created using the AWS CodeBuild console. 
     */
    authType: AuthType;
  }
  export interface ImportSourceCredentialsOutput {
    /**
     *  The Amazon Resource Name (ARN) of the token. 
     */
    arn?: NonEmptyString;
  }
  export interface InvalidateProjectCacheInput {
    /**
     * The name of the AWS CodeBuild build project that the cache is reset for.
     */
    projectName: NonEmptyString;
  }
  export interface InvalidateProjectCacheOutput {
  }
  export type KeyInput = string;
  export type LanguageType = "JAVA"|"PYTHON"|"NODE_JS"|"RUBY"|"GOLANG"|"DOCKER"|"ANDROID"|"DOTNET"|"BASE"|"PHP"|string;
  export interface ListBuildsForProjectInput {
    /**
     * The name of the AWS CodeBuild project.
     */
    projectName: NonEmptyString;
    /**
     * The order to list build IDs. Valid values include:    ASCENDING: List the build IDs in ascending order by build ID.    DESCENDING: List the build IDs in descending order by build ID.  
     */
    sortOrder?: SortOrderType;
    /**
     * During a previous call, if there are more than 100 items in the list, only the first 100 items are returned, along with a unique string called a next token. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.
     */
    nextToken?: String;
  }
  export interface ListBuildsForProjectOutput {
    /**
     * A list of build IDs for the specified build project, with each build ID representing a single build.
     */
    ids?: BuildIds;
    /**
     * If there are more than 100 items in the list, only the first 100 items are returned, along with a unique string called a next token. To get the next batch of items in the list, call this operation again, adding the next token to the call.
     */
    nextToken?: String;
  }
  export interface ListBuildsInput {
    /**
     * The order to list build IDs. Valid values include:    ASCENDING: List the build IDs in ascending order by build ID.    DESCENDING: List the build IDs in descending order by build ID.  
     */
    sortOrder?: SortOrderType;
    /**
     * During a previous call, if there are more than 100 items in the list, only the first 100 items are returned, along with a unique string called a next token. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.
     */
    nextToken?: String;
  }
  export interface ListBuildsOutput {
    /**
     * A list of build IDs, with each build ID representing a single build.
     */
    ids?: BuildIds;
    /**
     * If there are more than 100 items in the list, only the first 100 items are returned, along with a unique string called a next token. To get the next batch of items in the list, call this operation again, adding the next token to the call.
     */
    nextToken?: String;
  }
  export interface ListCuratedEnvironmentImagesInput {
  }
  export interface ListCuratedEnvironmentImagesOutput {
    /**
     * Information about supported platforms for Docker images that are managed by AWS CodeBuild.
     */
    platforms?: EnvironmentPlatforms;
  }
  export interface ListProjectsInput {
    /**
     * The criterion to be used to list build project names. Valid values include:    CREATED_TIME: List based on when each build project was created.    LAST_MODIFIED_TIME: List based on when information about each build project was last changed.    NAME: List based on each build project's name.   Use sortOrder to specify in what order to list the build project names based on the preceding criteria.
     */
    sortBy?: ProjectSortByType;
    /**
     * The order in which to list build projects. Valid values include:    ASCENDING: List in ascending order.    DESCENDING: List in descending order.   Use sortBy to specify the criterion to be used to list build project names.
     */
    sortOrder?: SortOrderType;
    /**
     * During a previous call, if there are more than 100 items in the list, only the first 100 items are returned, along with a unique string called a next token. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.
     */
    nextToken?: NonEmptyString;
  }
  export interface ListProjectsOutput {
    /**
     * If there are more than 100 items in the list, only the first 100 items are returned, along with a unique string called a next token. To get the next batch of items in the list, call this operation again, adding the next token to the call.
     */
    nextToken?: String;
    /**
     * The list of build project names, with each build project name representing a single build project.
     */
    projects?: ProjectNames;
  }
  export interface ListSourceCredentialsInput {
  }
  export interface ListSourceCredentialsOutput {
    /**
     *  A list of SourceCredentialsInfo objects. Each SourceCredentialsInfo object includes the authentication type, token ARN, and type of source provider for one set of credentials. 
     */
    sourceCredentialsInfos?: SourceCredentialsInfos;
  }
  export interface LogsConfig {
    /**
     *  Information about Amazon CloudWatch Logs for a build project. Amazon CloudWatch Logs are enabled by default. 
     */
    cloudWatchLogs?: CloudWatchLogsConfig;
    /**
     *  Information about logs built to an S3 bucket for a build project. S3 logs are not enabled by default. 
     */
    s3Logs?: S3LogsConfig;
  }
  export type LogsConfigStatusType = "ENABLED"|"DISABLED"|string;
  export interface LogsLocation {
    /**
     * The name of the Amazon CloudWatch Logs group for the build logs.
     */
    groupName?: String;
    /**
     * The name of the Amazon CloudWatch Logs stream for the build logs.
     */
    streamName?: String;
    /**
     * The URL to an individual build log in Amazon CloudWatch Logs.
     */
    deepLink?: String;
    /**
     *  The URL to a build log in an S3 bucket. 
     */
    s3DeepLink?: String;
    /**
     *  Information about Amazon CloudWatch Logs for a build project. 
     */
    cloudWatchLogs?: CloudWatchLogsConfig;
    /**
     *  Information about S3 logs for a build project. 
     */
    s3Logs?: S3LogsConfig;
  }
  export interface NetworkInterface {
    /**
     * The ID of the subnet.
     */
    subnetId?: NonEmptyString;
    /**
     * The ID of the network interface.
     */
    networkInterfaceId?: NonEmptyString;
  }
  export type NonEmptyString = string;
  export interface PhaseContext {
    /**
     * The status code for the context of the build phase.
     */
    statusCode?: String;
    /**
     * An explanation of the build phase's context. This might include a command ID and an exit code.
     */
    message?: String;
  }
  export type PhaseContexts = PhaseContext[];
  export type PlatformType = "DEBIAN"|"AMAZON_LINUX"|"UBUNTU"|"WINDOWS_SERVER"|string;
  export interface Project {
    /**
     * The name of the build project.
     */
    name?: ProjectName;
    /**
     * The Amazon Resource Name (ARN) of the build project.
     */
    arn?: String;
    /**
     * A description that makes the build project easy to identify.
     */
    description?: ProjectDescription;
    /**
     * Information about the build input source code for this build project.
     */
    source?: ProjectSource;
    /**
     *  An array of ProjectSource objects. 
     */
    secondarySources?: ProjectSources;
    /**
     * Information about the build output artifacts for the build project.
     */
    artifacts?: ProjectArtifacts;
    /**
     *  An array of ProjectArtifacts objects. 
     */
    secondaryArtifacts?: ProjectArtifactsList;
    /**
     * Information about the cache for the build project.
     */
    cache?: ProjectCache;
    /**
     * Information about the build environment for this build project.
     */
    environment?: ProjectEnvironment;
    /**
     * The ARN of the AWS Identity and Access Management (IAM) role that enables AWS CodeBuild to interact with dependent AWS services on behalf of the AWS account.
     */
    serviceRole?: NonEmptyString;
    /**
     * How long, in minutes, from 5 to 480 (8 hours), for AWS CodeBuild to wait before timing out any related build that did not get marked as completed. The default is 60 minutes.
     */
    timeoutInMinutes?: TimeOut;
    /**
     *  The number of minutes a build is allowed to be queued before it times out. 
     */
    queuedTimeoutInMinutes?: TimeOut;
    /**
     * The AWS Key Management Service (AWS KMS) customer master key (CMK) to be used for encrypting the build output artifacts. This is expressed either as the Amazon Resource Name (ARN) of the CMK or, if specified, the CMK's alias (using the format alias/alias-name ).
     */
    encryptionKey?: NonEmptyString;
    /**
     * The tags for this build project. These tags are available for use by AWS services that support AWS CodeBuild build project tags.
     */
    tags?: TagList;
    /**
     * When the build project was created, expressed in Unix time format.
     */
    created?: Timestamp;
    /**
     * When the build project's settings were last modified, expressed in Unix time format.
     */
    lastModified?: Timestamp;
    /**
     * Information about a webhook that connects repository events to a build project in AWS CodeBuild.
     */
    webhook?: Webhook;
    /**
     * Information about the VPC configuration that AWS CodeBuild accesses.
     */
    vpcConfig?: VpcConfig;
    /**
     * Information about the build badge for the build project.
     */
    badge?: ProjectBadge;
    /**
     *  Information about logs for the build project. A project can create logs in Amazon CloudWatch Logs, an S3 bucket, or both. 
     */
    logsConfig?: LogsConfig;
  }
  export interface ProjectArtifacts {
    /**
     * The type of build output artifact. Valid values include:    CODEPIPELINE: The build project has build output generated through AWS CodePipeline.    NO_ARTIFACTS: The build project does not produce any build output.    S3: The build project stores build output in Amazon Simple Storage Service (Amazon S3).  
     */
    type: ArtifactsType;
    /**
     * Information about the build output artifact location:   If type is set to CODEPIPELINE, AWS CodePipeline ignores this value if specified. This is because AWS CodePipeline manages its build output locations instead of AWS CodeBuild.   If type is set to NO_ARTIFACTS, this value is ignored if specified, because no build output is produced.   If type is set to S3, this is the name of the output bucket.  
     */
    location?: String;
    /**
     * Along with namespaceType and name, the pattern that AWS CodeBuild uses to name and store the output artifact:   If type is set to CODEPIPELINE, AWS CodePipeline ignores this value if specified. This is because AWS CodePipeline manages its build output names instead of AWS CodeBuild.   If type is set to NO_ARTIFACTS, this value is ignored if specified, because no build output is produced.   If type is set to S3, this is the path to the output artifact. If path is not specified, path is not used.   For example, if path is set to MyArtifacts, namespaceType is set to NONE, and name is set to MyArtifact.zip, the output artifact is stored in the output bucket at MyArtifacts/MyArtifact.zip.
     */
    path?: String;
    /**
     * Along with path and name, the pattern that AWS CodeBuild uses to determine the name and location to store the output artifact:   If type is set to CODEPIPELINE, AWS CodePipeline ignores this value if specified. This is because AWS CodePipeline manages its build output names instead of AWS CodeBuild.   If type is set to NO_ARTIFACTS, this value is ignored if specified, because no build output is produced.   If type is set to S3, valid values include:    BUILD_ID: Include the build ID in the location of the build output artifact.    NONE: Do not include the build ID. This is the default if namespaceType is not specified.     For example, if path is set to MyArtifacts, namespaceType is set to BUILD_ID, and name is set to MyArtifact.zip, the output artifact is stored in MyArtifacts/build-ID/MyArtifact.zip.
     */
    namespaceType?: ArtifactNamespace;
    /**
     * Along with path and namespaceType, the pattern that AWS CodeBuild uses to name and store the output artifact:   If type is set to CODEPIPELINE, AWS CodePipeline ignores this value if specified. This is because AWS CodePipeline manages its build output names instead of AWS CodeBuild.   If type is set to NO_ARTIFACTS, this value is ignored if specified, because no build output is produced.   If type is set to S3, this is the name of the output artifact object. If you set the name to be a forward slash ("/"), the artifact is stored in the root of the output bucket.   For example:    If path is set to MyArtifacts, namespaceType is set to BUILD_ID, and name is set to MyArtifact.zip, then the output artifact is stored in MyArtifacts/build-ID/MyArtifact.zip.     If path is empty, namespaceType is set to NONE, and name is set to "/", the output artifact is stored in the root of the output bucket.     If path is set to MyArtifacts, namespaceType is set to BUILD_ID, and name is set to "/", the output artifact is stored in MyArtifacts/build-ID .   
     */
    name?: String;
    /**
     * The type of build output artifact to create:   If type is set to CODEPIPELINE, AWS CodePipeline ignores this value if specified. This is because AWS CodePipeline manages its build output artifacts instead of AWS CodeBuild.   If type is set to NO_ARTIFACTS, this value is ignored if specified, because no build output is produced.   If type is set to S3, valid values include:    NONE: AWS CodeBuild creates in the output bucket a folder that contains the build output. This is the default if packaging is not specified.    ZIP: AWS CodeBuild creates in the output bucket a ZIP file that contains the build output.    
     */
    packaging?: ArtifactPackaging;
    /**
     *  If this flag is set, a name specified in the build spec file overrides the artifact name. The name specified in a build spec file is calculated at build time and uses the Shell Command Language. For example, you can append a date and time to your artifact name so that it is always unique. 
     */
    overrideArtifactName?: WrapperBoolean;
    /**
     *  Set to true if you do not want your output artifacts encrypted. This option is valid only if your artifacts type is Amazon Simple Storage Service (Amazon S3). If this is set with another artifacts type, an invalidInputException is thrown. 
     */
    encryptionDisabled?: WrapperBoolean;
    /**
     *  An identifier for this artifact definition. 
     */
    artifactIdentifier?: String;
  }
  export type ProjectArtifactsList = ProjectArtifacts[];
  export interface ProjectBadge {
    /**
     * Set this to true to generate a publicly accessible URL for your project's build badge.
     */
    badgeEnabled?: Boolean;
    /**
     * The publicly-accessible URL through which you can access the build badge for your project.  The publicly accessible URL through which you can access the build badge for your project. 
     */
    badgeRequestUrl?: String;
  }
  export interface ProjectCache {
    /**
     * The type of cache used by the build project. Valid values include:    NO_CACHE: The build project does not use any cache.    S3: The build project reads and writes from and to S3.  
     */
    type: CacheType;
    /**
     * Information about the cache location:     NO_CACHE: This value is ignored.    S3: This is the S3 bucket name/prefix.  
     */
    location?: String;
  }
  export type ProjectDescription = string;
  export interface ProjectEnvironment {
    /**
     * The type of build environment to use for related builds.
     */
    type: EnvironmentType;
    /**
     * The ID of the Docker image to use for this build project.
     */
    image: NonEmptyString;
    /**
     * Information about the compute resources the build project uses. Available values include:    BUILD_GENERAL1_SMALL: Use up to 3 GB memory and 2 vCPUs for builds.    BUILD_GENERAL1_MEDIUM: Use up to 7 GB memory and 4 vCPUs for builds.    BUILD_GENERAL1_LARGE: Use up to 15 GB memory and 8 vCPUs for builds.  
     */
    computeType: ComputeType;
    /**
     * A set of environment variables to make available to builds for this build project.
     */
    environmentVariables?: EnvironmentVariables;
    /**
     * Enables running the Docker daemon inside a Docker container. Set to true only if the build project is be used to build Docker images, and the specified build environment image is not provided by AWS CodeBuild with Docker support. Otherwise, all associated builds that attempt to interact with the Docker daemon fail. You must also start the Docker daemon so that builds can interact with it. One way to do this is to initialize the Docker daemon during the install phase of your build spec by running the following build commands. (Do not run these commands if the specified build environment image is provided by AWS CodeBuild with Docker support.) If the operating system's base image is Ubuntu Linux:  - nohup /usr/local/bin/dockerd --host=unix:///var/run/docker.sock --host=tcp://0.0.0.0:2375 --storage-driver=overlay&amp; - timeout 15 sh -c "until docker info; do echo .; sleep 1; done"  If the operating system's base image is Alpine Linux, add the -t argument to timeout:  - nohup /usr/local/bin/dockerd --host=unix:///var/run/docker.sock --host=tcp://0.0.0.0:2375 --storage-driver=overlay&amp; - timeout 15 -t sh -c "until docker info; do echo .; sleep 1; done" 
     */
    privilegedMode?: WrapperBoolean;
    /**
     * The certificate to use with this build project.
     */
    certificate?: String;
  }
  export type ProjectName = string;
  export type ProjectNames = NonEmptyString[];
  export type ProjectSecondarySourceVersions = ProjectSourceVersion[];
  export type ProjectSortByType = "NAME"|"CREATED_TIME"|"LAST_MODIFIED_TIME"|string;
  export interface ProjectSource {
    /**
     * The type of repository that contains the source code to be built. Valid values include:    BITBUCKET: The source code is in a Bitbucket repository.    CODECOMMIT: The source code is in an AWS CodeCommit repository.    CODEPIPELINE: The source code settings are specified in the source action of a pipeline in AWS CodePipeline.    GITHUB: The source code is in a GitHub repository.    NO_SOURCE: The project does not have input source code.    S3: The source code is in an Amazon Simple Storage Service (Amazon S3) input bucket.  
     */
    type: SourceType;
    /**
     * Information about the location of the source code to be built. Valid values include:   For source code settings that are specified in the source action of a pipeline in AWS CodePipeline, location should not be specified. If it is specified, AWS CodePipeline ignores it. This is because AWS CodePipeline uses the settings in a pipeline's source action instead of this value.   For source code in an AWS CodeCommit repository, the HTTPS clone URL to the repository that contains the source code and the build spec (for example, https://git-codecommit.region-ID.amazonaws.com/v1/repos/repo-name ).   For source code in an Amazon Simple Storage Service (Amazon S3) input bucket, one of the following.     The path to the ZIP file that contains the source code (for example,  bucket-name/path/to/object-name.zip).     The path to the folder that contains the source code (for example,  bucket-name/path/to/source-code/folder/).      For source code in a GitHub repository, the HTTPS clone URL to the repository that contains the source and the build spec. You must connect your AWS account to your GitHub account. Use the AWS CodeBuild console to start creating a build project. When you use the console to connect (or reconnect) with GitHub, on the GitHub Authorize application page, for Organization access, choose Request access next to each repository you want to allow AWS CodeBuild to have access to, and then choose Authorize application. (After you have connected to your GitHub account, you do not need to finish creating the build project. You can leave the AWS CodeBuild console.) To instruct AWS CodeBuild to use this connection, in the source object, set the auth object's type value to OAUTH.   For source code in a Bitbucket repository, the HTTPS clone URL to the repository that contains the source and the build spec. You must connect your AWS account to your Bitbucket account. Use the AWS CodeBuild console to start creating a build project. When you use the console to connect (or reconnect) with Bitbucket, on the Bitbucket Confirm access to your account page, choose Grant access. (After you have connected to your Bitbucket account, you do not need to finish creating the build project. You can leave the AWS CodeBuild console.) To instruct AWS CodeBuild to use this connection, in the source object, set the auth object's type value to OAUTH.  
     */
    location?: String;
    /**
     * Information about the git clone depth for the build project.
     */
    gitCloneDepth?: GitCloneDepth;
    /**
     * The build spec declaration to use for the builds in this build project. If this value is not specified, a build spec must be included along with the source code to be built.
     */
    buildspec?: String;
    /**
     * Information about the authorization settings for AWS CodeBuild to access the source code to be built. This information is for the AWS CodeBuild console's use only. Your code should not get or set this information directly.
     */
    auth?: SourceAuth;
    /**
     *  Set to true to report the status of a build's start and finish to your source provider. This option is valid only when your source provider is GitHub, GitHub Enterprise, or Bitbucket. If this is set and you use a different source provider, an invalidInputException is thrown. 
     */
    reportBuildStatus?: WrapperBoolean;
    /**
     * Enable this flag to ignore SSL warnings while connecting to the project source code.
     */
    insecureSsl?: WrapperBoolean;
    /**
     *  An identifier for this project source. 
     */
    sourceIdentifier?: String;
  }
  export interface ProjectSourceVersion {
    /**
     * An identifier for a source in the build project.
     */
    sourceIdentifier: String;
    /**
     * The source version for the corresponding source identifier. If specified, must be one of:   For AWS CodeCommit: the commit ID to use.   For GitHub: the commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format pr/pull-request-ID (for example, pr/25). If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.   For Bitbucket: the commit ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.   For Amazon Simple Storage Service (Amazon S3): the version ID of the object that represents the build input ZIP file to use.  
     */
    sourceVersion: String;
  }
  export type ProjectSources = ProjectSource[];
  export type Projects = Project[];
  export interface S3LogsConfig {
    /**
     * The current status of the S3 build logs. Valid values are:    ENABLED: S3 build logs are enabled for this build project.    DISABLED: S3 build logs are not enabled for this build project.  
     */
    status: LogsConfigStatusType;
    /**
     *  The ARN of an S3 bucket and the path prefix for S3 logs. If your Amazon S3 bucket name is my-bucket, and your path prefix is build-log, then acceptable formats are my-bucket/build-log or arn:aws:s3:::my-bucket/build-log. 
     */
    location?: String;
  }
  export type SecurityGroupIds = NonEmptyString[];
  export type SensitiveNonEmptyString = string;
  export type ServerType = "GITHUB"|"BITBUCKET"|"GITHUB_ENTERPRISE"|string;
  export type SortOrderType = "ASCENDING"|"DESCENDING"|string;
  export interface SourceAuth {
    /**
     *   This data type is deprecated and is no longer accurate or used.   The authorization type to use. The only valid value is OAUTH, which represents the OAuth authorization type.
     */
    type: SourceAuthType;
    /**
     * The resource value that applies to the specified authorization type.
     */
    resource?: String;
  }
  export type SourceAuthType = "OAUTH"|string;
  export interface SourceCredentialsInfo {
    /**
     *  The Amazon Resource Name (ARN) of the token. 
     */
    arn?: NonEmptyString;
    /**
     *  The type of source provider. The valid options are GITHUB, GITHUB_ENTERPRISE, or BITBUCKET. 
     */
    serverType?: ServerType;
    /**
     *  The type of authentication used by the credentials. Valid options are OAUTH, BASIC_AUTH, or PERSONAL_ACCESS_TOKEN. 
     */
    authType?: AuthType;
  }
  export type SourceCredentialsInfos = SourceCredentialsInfo[];
  export type SourceType = "CODECOMMIT"|"CODEPIPELINE"|"GITHUB"|"S3"|"BITBUCKET"|"GITHUB_ENTERPRISE"|"NO_SOURCE"|string;
  export interface StartBuildInput {
    /**
     * The name of the AWS CodeBuild build project to start running a build.
     */
    projectName: NonEmptyString;
    /**
     *  An array of ProjectSource objects. 
     */
    secondarySourcesOverride?: ProjectSources;
    /**
     *  An array of ProjectSourceVersion objects that specify one or more versions of the project's secondary sources to be used for this build only. 
     */
    secondarySourcesVersionOverride?: ProjectSecondarySourceVersions;
    /**
     * A version of the build input to be built, for this build only. If not specified, the latest version is used. If specified, must be one of:   For AWS CodeCommit: the commit ID to use.   For GitHub: the commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format pr/pull-request-ID (for example pr/25). If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.   For Bitbucket: the commit ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.   For Amazon Simple Storage Service (Amazon S3): the version ID of the object that represents the build input ZIP file to use.  
     */
    sourceVersion?: String;
    /**
     * Build output artifact settings that override, for this build only, the latest ones already defined in the build project.
     */
    artifactsOverride?: ProjectArtifacts;
    /**
     *  An array of ProjectArtifacts objects. 
     */
    secondaryArtifactsOverride?: ProjectArtifactsList;
    /**
     * A set of environment variables that overrides, for this build only, the latest ones already defined in the build project.
     */
    environmentVariablesOverride?: EnvironmentVariables;
    /**
     * A source input type, for this build, that overrides the source input defined in the build project.
     */
    sourceTypeOverride?: SourceType;
    /**
     * A location that overrides, for this build, the source location for the one defined in the build project.
     */
    sourceLocationOverride?: String;
    /**
     * An authorization type for this build that overrides the one defined in the build project. This override applies only if the build project's source is BitBucket or GitHub.
     */
    sourceAuthOverride?: SourceAuth;
    /**
     * The user-defined depth of history, with a minimum value of 0, that overrides, for this build only, any previous depth of history defined in the build project.
     */
    gitCloneDepthOverride?: GitCloneDepth;
    /**
     * A build spec declaration that overrides, for this build only, the latest one already defined in the build project.
     */
    buildspecOverride?: String;
    /**
     * Enable this flag to override the insecure SSL setting that is specified in the build project. The insecure SSL setting determines whether to ignore SSL warnings while connecting to the project source code. This override applies only if the build's source is GitHub Enterprise.
     */
    insecureSslOverride?: WrapperBoolean;
    /**
     *  Set to true to report to your source provider the status of a build's start and completion. If you use this option with a source provider other than GitHub, GitHub Enterprise, or Bitbucket, an invalidInputException is thrown. 
     */
    reportBuildStatusOverride?: WrapperBoolean;
    /**
     * A container type for this build that overrides the one specified in the build project.
     */
    environmentTypeOverride?: EnvironmentType;
    /**
     * The name of an image for this build that overrides the one specified in the build project.
     */
    imageOverride?: NonEmptyString;
    /**
     * The name of a compute type for this build that overrides the one specified in the build project.
     */
    computeTypeOverride?: ComputeType;
    /**
     * The name of a certificate for this build that overrides the one specified in the build project.
     */
    certificateOverride?: String;
    /**
     * A ProjectCache object specified for this build that overrides the one defined in the build project.
     */
    cacheOverride?: ProjectCache;
    /**
     * The name of a service role for this build that overrides the one specified in the build project.
     */
    serviceRoleOverride?: NonEmptyString;
    /**
     * Enable this flag to override privileged mode in the build project.
     */
    privilegedModeOverride?: WrapperBoolean;
    /**
     * The number of build timeout minutes, from 5 to 480 (8 hours), that overrides, for this build only, the latest setting already defined in the build project.
     */
    timeoutInMinutesOverride?: TimeOut;
    /**
     *  The number of minutes a build is allowed to be queued before it times out. 
     */
    queuedTimeoutInMinutesOverride?: TimeOut;
    /**
     * A unique, case sensitive identifier you provide to ensure the idempotency of the StartBuild request. The token is included in the StartBuild request and is valid for 12 hours. If you repeat the StartBuild request with the same token, but change a parameter, AWS CodeBuild returns a parameter mismatch error. 
     */
    idempotencyToken?: String;
    /**
     *  Log settings for this build that override the log settings defined in the build project. 
     */
    logsConfigOverride?: LogsConfig;
  }
  export interface StartBuildOutput {
    /**
     * Information about the build to be run.
     */
    build?: Build;
  }
  export type StatusType = "SUCCEEDED"|"FAILED"|"FAULT"|"TIMED_OUT"|"IN_PROGRESS"|"STOPPED"|string;
  export interface StopBuildInput {
    /**
     * The ID of the build.
     */
    id: NonEmptyString;
  }
  export interface StopBuildOutput {
    /**
     * Information about the build.
     */
    build?: Build;
  }
  export type String = string;
  export type Subnets = NonEmptyString[];
  export interface Tag {
    /**
     * The tag's key.
     */
    key?: KeyInput;
    /**
     * The tag's value.
     */
    value?: ValueInput;
  }
  export type TagList = Tag[];
  export type TimeOut = number;
  export type Timestamp = Date;
  export interface UpdateProjectInput {
    /**
     * The name of the build project.  You cannot change a build project's name. 
     */
    name: NonEmptyString;
    /**
     * A new or replacement description of the build project.
     */
    description?: ProjectDescription;
    /**
     * Information to be changed about the build input source code for the build project.
     */
    source?: ProjectSource;
    /**
     *  An array of ProjectSource objects. 
     */
    secondarySources?: ProjectSources;
    /**
     * Information to be changed about the build output artifacts for the build project.
     */
    artifacts?: ProjectArtifacts;
    /**
     *  An array of ProjectSource objects. 
     */
    secondaryArtifacts?: ProjectArtifactsList;
    /**
     * Stores recently used information so that it can be quickly accessed at a later time.
     */
    cache?: ProjectCache;
    /**
     * Information to be changed about the build environment for the build project.
     */
    environment?: ProjectEnvironment;
    /**
     * The replacement ARN of the AWS Identity and Access Management (IAM) role that enables AWS CodeBuild to interact with dependent AWS services on behalf of the AWS account.
     */
    serviceRole?: NonEmptyString;
    /**
     * The replacement value in minutes, from 5 to 480 (8 hours), for AWS CodeBuild to wait before timing out any related build that did not get marked as completed.
     */
    timeoutInMinutes?: TimeOut;
    /**
     *  The number of minutes a build is allowed to be queued before it times out. 
     */
    queuedTimeoutInMinutes?: TimeOut;
    /**
     * The replacement AWS Key Management Service (AWS KMS) customer master key (CMK) to be used for encrypting the build output artifacts. You can specify either the Amazon Resource Name (ARN)of the CMK or, if available, the CMK's alias (using the format alias/alias-name ).
     */
    encryptionKey?: NonEmptyString;
    /**
     * The replacement set of tags for this build project. These tags are available for use by AWS services that support AWS CodeBuild build project tags.
     */
    tags?: TagList;
    /**
     * VpcConfig enables AWS CodeBuild to access resources in an Amazon VPC.
     */
    vpcConfig?: VpcConfig;
    /**
     * Set this to true to generate a publicly accessible URL for your project's build badge.
     */
    badgeEnabled?: WrapperBoolean;
    /**
     *  Information about logs for the build project. A project can create logs in Amazon CloudWatch Logs, logs in an S3 bucket, or both. 
     */
    logsConfig?: LogsConfig;
  }
  export interface UpdateProjectOutput {
    /**
     * Information about the build project that was changed.
     */
    project?: Project;
  }
  export interface UpdateWebhookInput {
    /**
     * The name of the AWS CodeBuild project.
     */
    projectName: ProjectName;
    /**
     * A regular expression used to determine which repository branches are built when a webhook is triggered. If the name of a branch matches the regular expression, then it is built. If branchFilter is empty, then all branches are built.
     */
    branchFilter?: String;
    /**
     *  A boolean value that specifies whether the associated GitHub repository's secret token should be updated. If you use Bitbucket for your repository, rotateSecret is ignored. 
     */
    rotateSecret?: Boolean;
  }
  export interface UpdateWebhookOutput {
    /**
     *  Information about a repository's webhook that is associated with a project in AWS CodeBuild. 
     */
    webhook?: Webhook;
  }
  export type ValueInput = string;
  export interface VpcConfig {
    /**
     * The ID of the Amazon VPC.
     */
    vpcId?: NonEmptyString;
    /**
     * A list of one or more subnet IDs in your Amazon VPC.
     */
    subnets?: Subnets;
    /**
     * A list of one or more security groups IDs in your Amazon VPC.
     */
    securityGroupIds?: SecurityGroupIds;
  }
  export interface Webhook {
    /**
     * The URL to the webhook.
     */
    url?: NonEmptyString;
    /**
     *  The AWS CodeBuild endpoint where webhook events are sent.
     */
    payloadUrl?: NonEmptyString;
    /**
     *  The secret token of the associated repository.    A Bitbucket webhook does not support secret.  
     */
    secret?: NonEmptyString;
    /**
     * A regular expression used to determine which repository branches are built when a webhook is triggered. If the name of a branch matches the regular expression, then it is built. If branchFilter is empty, then all branches are built.
     */
    branchFilter?: String;
    /**
     *  A timestamp that indicates the last time a repository's secret token was modified. 
     */
    lastModifiedSecret?: Timestamp;
  }
  export type WrapperBoolean = boolean;
  export type WrapperInt = number;
  export type WrapperLong = number;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2016-10-06"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the CodeBuild client.
   */
  export import Types = CodeBuild;
}
export = CodeBuild;
