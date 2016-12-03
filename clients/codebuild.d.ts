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
   * Gets information about one or more builds.
   */
  batchGetBuilds(params: CodeBuild.Types.BatchGetBuildsInput, callback?: (err: AWSError, data: CodeBuild.Types.BatchGetBuildsOutput) => void): Request<CodeBuild.Types.BatchGetBuildsOutput, AWSError>;
  /**
   * Gets information about one or more builds.
   */
  batchGetBuilds(callback?: (err: AWSError, data: CodeBuild.Types.BatchGetBuildsOutput) => void): Request<CodeBuild.Types.BatchGetBuildsOutput, AWSError>;
  /**
   * Gets information about one or more build projects.
   */
  batchGetProjects(params: CodeBuild.Types.BatchGetProjectsInput, callback?: (err: AWSError, data: CodeBuild.Types.BatchGetProjectsOutput) => void): Request<CodeBuild.Types.BatchGetProjectsOutput, AWSError>;
  /**
   * Gets information about one or more build projects.
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
   * Deletes a build project.
   */
  deleteProject(params: CodeBuild.Types.DeleteProjectInput, callback?: (err: AWSError, data: CodeBuild.Types.DeleteProjectOutput) => void): Request<CodeBuild.Types.DeleteProjectOutput, AWSError>;
  /**
   * Deletes a build project.
   */
  deleteProject(callback?: (err: AWSError, data: CodeBuild.Types.DeleteProjectOutput) => void): Request<CodeBuild.Types.DeleteProjectOutput, AWSError>;
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
   * Starts running a build.
   */
  startBuild(params: CodeBuild.Types.StartBuildInput, callback?: (err: AWSError, data: CodeBuild.Types.StartBuildOutput) => void): Request<CodeBuild.Types.StartBuildOutput, AWSError>;
  /**
   * Starts running a build.
   */
  startBuild(callback?: (err: AWSError, data: CodeBuild.Types.StartBuildOutput) => void): Request<CodeBuild.Types.StartBuildOutput, AWSError>;
  /**
   * Attempts to stop running a build.  Completed builds cannot be stopped. 
   */
  stopBuild(params: CodeBuild.Types.StopBuildInput, callback?: (err: AWSError, data: CodeBuild.Types.StopBuildOutput) => void): Request<CodeBuild.Types.StopBuildOutput, AWSError>;
  /**
   * Attempts to stop running a build.  Completed builds cannot be stopped. 
   */
  stopBuild(callback?: (err: AWSError, data: CodeBuild.Types.StopBuildOutput) => void): Request<CodeBuild.Types.StopBuildOutput, AWSError>;
  /**
   * Changes the settings of an existing build project.
   */
  updateProject(params: CodeBuild.Types.UpdateProjectInput, callback?: (err: AWSError, data: CodeBuild.Types.UpdateProjectOutput) => void): Request<CodeBuild.Types.UpdateProjectOutput, AWSError>;
  /**
   * Changes the settings of an existing build project.
   */
  updateProject(callback?: (err: AWSError, data: CodeBuild.Types.UpdateProjectOutput) => void): Request<CodeBuild.Types.UpdateProjectOutput, AWSError>;
}
declare namespace CodeBuild {
  export type ArtifactNamespace = "NONE"|"BUILD_ID"|string;
  export type ArtifactPackaging = "NONE"|"ZIP"|string;
  export type ArtifactsType = "CODEPIPELINE"|"S3"|"NO_ARTIFACTS"|string;
  export interface BatchGetBuildsInput {
    /**
     * The IDs of the builds to get information about.
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
     * The names of the build projects to get information about.
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
     * The build's unique ID.
     */
    id?: NonEmptyString;
    /**
     * The build's Amazon Resource Name (ARN).
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
     * The build's current build phase.
     */
    currentPhase?: String;
    /**
     * The build's current status. Valid values include:    FAILED: The build failed.    FAULT: The build faulted.    IN_PROGRESS: The build is still in progress.    STOPPED: The build stopped.    SUCCEEDED: The build succeeded.    TIMED_OUT: The build timed out.  
     */
    buildStatus?: StatusType;
    /**
     * Any version identifier for the version of the source code to be built.
     */
    sourceVersion?: NonEmptyString;
    /**
     * The build project's name.
     */
    projectName?: NonEmptyString;
    /**
     * Information about all previous build phases that have completed, and information about any current build phase that has not yet completed.
     */
    phases?: BuildPhases;
    /**
     * Information about the source code to be built.
     */
    source?: ProjectSource;
    /**
     * Information about the build's output artifacts.
     */
    artifacts?: BuildArtifacts;
    /**
     * Information about the build environment for this build.
     */
    environment?: ProjectEnvironment;
    /**
     * Information about the build's logs in Amazon CloudWatch Logs.
     */
    logs?: LogsLocation;
    /**
     * How long in minutes for AWS CodeBuild to wait to timeout this build if it does not get marked as completed.
     */
    timeoutInMinutes?: WrapperInt;
    /**
     * Whether the build has finished. Valid values include true if completed; otherwise, false.
     */
    buildComplete?: Boolean;
    /**
     * The entity that started the build. Valid values include:   If AWS CodePipeline started the build, the pipeline's name, for example codepipeline/my-demo-pipeline.   If an AWS Identity and Access Management (IAM) user started the build, the user's name, for example MyUserName.   If the Jenkins plugin for AWS CodeBuild started the build, the string CodeBuild-Jenkins-Plugin.  
     */
    initiator?: String;
  }
  export interface BuildArtifacts {
    /**
     * Information about the build artifacts' location.
     */
    location?: String;
    /**
     * The SHA-256 hash of the build artifact. You can use this hash along with a checksum tool to confirm both file integrity and authenticity.  This value is available only if the related build project's packaging value is set to ZIP. 
     */
    sha256sum?: String;
    /**
     * The MD5 hash of the build artifact. You can use this hash along with a checksum tool to confirm both file integrity and authenticity.  This value is available only if the related build project's packaging value is set to ZIP. 
     */
    md5sum?: String;
  }
  export type BuildIds = NonEmptyString[];
  export interface BuildPhase {
    /**
     * The build phase's name. Valid values include:    BUILD: Core build activities typically occur in this build phase.    COMPLETED: The build has completed.    DOWNLOAD_SOURCE: Source code is being downloaded in this build phase.    FINALIZING: The build process is completing in this build phase.    INSTALL: Installation activities typically occur in this build phase.    POST_BUILD: Post-build activities typically occur in this build phase.    PRE_BUILD: Pre-build activities typically occur in this build phase.    PROVISIONING: The build environment is being set up.    SUBMITTED: The build has been submitted.    UPLOAD_ARTIFACTS: Build output artifacts are being uploaded to output location.  
     */
    phaseType?: BuildPhaseType;
    /**
     * The build phase's current status. Valid values include:    FAILED: The build phase failed.    FAULT: The build phase faulted.    IN_PROGRESS: The build phase is still in progress.    STOPPED: The build phase stopped.    SUCCEEDED: The build phase succeeded.    TIMED_OUT: The build phase timed out.  
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
     * How long, in seconds, between the build's phase starting and ending times.
     */
    durationInSeconds?: WrapperLong;
    /**
     * Additional information about a build phase, especially to help troubleshoot a failed build.
     */
    contexts?: PhaseContexts;
  }
  export type BuildPhaseType = "SUBMITTED"|"PROVISIONING"|"DOWNLOAD_SOURCE"|"INSTALL"|"PRE_BUILD"|"BUILD"|"POST_BUILD"|"UPLOAD_ARTIFACTS"|"FINALIZING"|"COMPLETED"|string;
  export type BuildPhases = BuildPhase[];
  export type Builds = Build[];
  export type ComputeType = "BUILD_GENERAL1_SMALL"|"BUILD_GENERAL1_MEDIUM"|"BUILD_GENERAL1_LARGE"|string;
  export interface CreateProjectInput {
    /**
     * The build project's name.
     */
    name: ProjectName;
    /**
     * A meaningful description of the build project.
     */
    description?: ProjectDescription;
    /**
     * Information about the build project's build input source code.
     */
    source: ProjectSource;
    /**
     * Information about the build project's build output artifacts.
     */
    artifacts: ProjectArtifacts;
    /**
     * Information about the build project's build environment.
     */
    environment: ProjectEnvironment;
    /**
     * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that enables AWS CodeBuild to interact with dependent AWS services on behalf of the AWS account.
     */
    serviceRole?: NonEmptyString;
    /**
     * How long in minutes, from 5 to 480 (8 hours), for AWS CodeBuild to wait until timing out any related build that does not get marked as completed. The default is 60 minutes.
     */
    timeoutInMinutes?: TimeOut;
    /**
     * The AWS Key Management Service (AWS KMS) customer master key (CMK) to be used for encrypting the build project's build output artifacts. You can specify either the CMK's Amazon Resource Name (ARN) or, if available, the CMK's alias (using the format alias/alias-name ).
     */
    encryptionKey?: NonEmptyString;
    /**
     * A set of tags for this build project. These tags are available for use by AWS services that support AWS CodeBuild build project tags.
     */
    tags?: TagList;
  }
  export interface CreateProjectOutput {
    /**
     * Information about the build project that was created.
     */
    project?: Project;
  }
  export interface DeleteProjectInput {
    /**
     * The name of the build project to delete.
     */
    name: NonEmptyString;
  }
  export interface DeleteProjectOutput {
  }
  export interface EnvironmentImage {
    /**
     * The Docker image's name.
     */
    name?: String;
    /**
     * The Docker image's description.
     */
    description?: String;
  }
  export type EnvironmentImages = EnvironmentImage[];
  export interface EnvironmentLanguage {
    /**
     * The programming language for the related set of Docker images.
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
  export type EnvironmentType = "LINUX_CONTAINER"|string;
  export interface EnvironmentVariable {
    /**
     * The environment variable's name or key.
     */
    name: NonEmptyString;
    /**
     * The environment variable's value.
     */
    value: String;
  }
  export type EnvironmentVariables = EnvironmentVariable[];
  export type KeyInput = string;
  export type LanguageType = "JAVA"|"PYTHON"|"NODE_JS"|"RUBY"|"GOLANG"|"DOCKER"|"ANDROID"|"BASE"|string;
  export interface ListBuildsForProjectInput {
    /**
     * The name of the build project to get a list of build IDs for.
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
     * The criterion to be used to list build project names. Valid values include:    CREATED_TIME: List the build project names based on when each build project was created.    LAST_MODIFIED_TIME: List the build project names based on when information about each build project was last changed.    NAME: List the build project names based on each build project's name.   Use sortOrder to specify in what order to list the build project names based on the preceding criteria.
     */
    sortBy?: ProjectSortByType;
    /**
     * The order in which to list build projects. Valid values include:    ASCENDING: List the build project names in ascending order.    DESCENDING: List the build project names in descending order.   Use sortBy to specify the criterion to be used to list build project names.
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
  export interface LogsLocation {
    /**
     * The name of the Amazon CloudWatch Logs group for the associated build logs.
     */
    groupName?: String;
    /**
     * The name of the Amazon CloudWatch Logs stream for the associated build logs.
     */
    streamName?: String;
    /**
     * The URL to an individual build log in Amazon CloudWatch Logs.
     */
    deepLink?: String;
  }
  export type NonEmptyString = string;
  export interface PhaseContext {
    /**
     * The status code for the context of the build phase.
     */
    statusCode?: String;
    /**
     * An explanation of the build phase's context. This explanation may include a command ID and an exit code.
     */
    message?: String;
  }
  export type PhaseContexts = PhaseContext[];
  export type PlatformType = "DEBIAN"|"AMAZON_LINUX"|"UBUNTU"|string;
  export interface Project {
    /**
     * The build project's name.
     */
    name?: ProjectName;
    /**
     * The build project's Amazon Resource Name (ARN).
     */
    arn?: String;
    /**
     * A meaningful description of the build project.
     */
    description?: ProjectDescription;
    /**
     * Information about the build project's build input source code.
     */
    source?: ProjectSource;
    /**
     * Information about the build project's build output artifacts.
     */
    artifacts?: ProjectArtifacts;
    /**
     * Information about the build environment for this build project.
     */
    environment?: ProjectEnvironment;
    /**
     * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that enables AWS CodeBuild to interact with dependent AWS services on behalf of the AWS account.
     */
    serviceRole?: NonEmptyString;
    /**
     * How long in minutes, from 5 to 480 (8 hours), for AWS CodeBuild to wait to timeout any related build that did not get marked as completed. The default is 60 minutes.
     */
    timeoutInMinutes?: TimeOut;
    /**
     * The AWS Key Management Service (AWS KMS) customer master key (CMK) to be used for encrypting the build project's build output artifacts. This is expressed either as the CMK's Amazon Resource Name (ARN) or, if specified, the CMK's alias (using the format alias/alias-name ).
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
  }
  export interface ProjectArtifacts {
    /**
     * The build output artifact's type. Valid values include:    CODEPIPELINE: The build project with have build output generated through AWS CodePipeline.    NO_ARTIFACTS: The build project will not produce any build output.    S3: The build project will store build output in Amazon Simple Storage Service (Amazon S3).  
     */
    type: ArtifactsType;
    /**
     * Information about the build output artifact location, as follows:   If type is set to CODEPIPELINE, then AWS CodePipeline will ignore this value if specified. This is because AWS CodePipeline manages its build output locations instead of AWS CodeBuild.   If type is set to NO_ARTIFACTS, then this value will be ignored if specified, because no build output will be produced.   If type is set to S3, this is the name of the output bucket. If path is not also specified, then location can also specify the path of the output artifact in the output bucket.  
     */
    location?: String;
    /**
     * Along with namespaceType and name, the pattern that AWS CodeBuild will use to name and store the output artifact, as follows:   If type is set to CODEPIPELINE, then AWS CodePipeline will ignore this value if specified. This is because AWS CodePipeline manages its build output names instead of AWS CodeBuild.   If type is set to NO_ARTIFACTS, then this value will be ignored if specified, because no build output will be produced.   If type is set to S3, this is the path to the output artifact. If path is not specified, then path will not be used.   For example, if path is set to MyArtifacts, namespaceType is set to NONE, and name is set to MyArtifact.zip, then the output artifact would be stored in the output bucket at MyArtifacts/MyArtifact.zip.
     */
    path?: String;
    /**
     * Along with path and name, the pattern that AWS CodeBuild will use to determine the name and location to store the output artifact, as follows:   If type is set to CODEPIPELINE, then AWS CodePipeline will ignore this value if specified. This is because AWS CodePipeline manages its build output names instead of AWS CodeBuild.   If type is set to NO_ARTIFACTS, then this value will be ignored if specified, because no build output will be produced.   If type is set to S3, then valid values include:    BUILD_ID: Include the build ID in the location of the build output artifact.    NONE: Do not include the build ID. This is the default if namespaceType is not specified.     For example, if path is set to MyArtifacts, namespaceType is set to BUILD_ID, and name is set to MyArtifact.zip, then the output artifact would be stored in MyArtifacts/build-ID/MyArtifact.zip.
     */
    namespaceType?: ArtifactNamespace;
    /**
     * Along with path and namespaceType, the pattern that AWS CodeBuild will use to name and store the output artifact, as follows:   If type is set to CODEPIPELINE, then AWS CodePipeline will ignore this value if specified. This is because AWS CodePipeline manages its build output names instead of AWS CodeBuild.   If type is set to NO_ARTIFACTS, then this value will be ignored if specified, because no build output will be produced.   If type is set to S3, this is the name of the output artifact object.   For example, if path is set to MyArtifacts, namespaceType is set to BUILD_ID, and name is set to MyArtifact.zip, then the output artifact would be stored in MyArtifacts/build-ID/MyArtifact.zip.
     */
    name?: String;
    /**
     * The type of build output artifact to create, as follows:   If type is set to CODEPIPELINE, then AWS CodePipeline will ignore this value if specified. This is because AWS CodePipeline manages its build output artifacts instead of AWS CodeBuild.   If type is set to NO_ARTIFACTS, then this value will be ignored if specified, because no build output will be produced.   If type is set to S3, valid values include:    NONE: AWS CodeBuild will create in the output bucket a folder containing the build output. This is the default if packaging is not specified.    ZIP: AWS CodeBuild will create in the output bucket a ZIP file containing the build output.    
     */
    packaging?: ArtifactPackaging;
  }
  export type ProjectDescription = string;
  export interface ProjectEnvironment {
    /**
     * The type of build environment to use for related builds. The only valid value is LINUX_CONTAINER, which represents a Linux-based build environment.
     */
    type: EnvironmentType;
    /**
     * The ID of the Docker image to use for this build project.
     */
    image: NonEmptyString;
    /**
     * Information about the compute resources the build project will use. Available values include:    BUILD_GENERAL1_SMALL: Use up to 3 GB memory and 2 vCPUs for builds.    BUILD_GENERAL1_MEDIUM: Use up to 7 GB memory and 4 vCPUs for builds.    BUILD_GENERAL1_LARGE: Use up to 15 GB memory and 8 vCPUs for builds.  
     */
    computeType: ComputeType;
    /**
     * A set of environment variables to make available to builds for this build project.
     */
    environmentVariables?: EnvironmentVariables;
  }
  export type ProjectName = string;
  export type ProjectNames = NonEmptyString[];
  export type ProjectSortByType = "NAME"|"CREATED_TIME"|"LAST_MODIFIED_TIME"|string;
  export interface ProjectSource {
    /**
     * The type of repository that contains the source code to be built. Valid values include:    CODECOMMIT: The source code is in an AWS CodeCommit repository.    CODEPIPELINE: The source code settings are specified in the source action of a pipeline in AWS CodePipeline.    GITHUB: The source code is in a GitHub repository.    S3: The source code is in an Amazon Simple Storage Service (Amazon S3) input bucket.  
     */
    type: SourceType;
    /**
     * Information about the location of the source code to be built. Valid values include:   For source code settings that are specified in the source action of a pipeline in AWS CodePipeline, location should not be specified. If it is specified, AWS CodePipeline will ignore it. This is because AWS CodePipeline uses the settings in a pipeline's source action instead of this value.   For source code in an AWS CodeCommit repository, the HTTPS clone URL to the repository that contains the source code and the build spec (for example, https://git-codecommit.region-ID.amazonaws.com/v1/repos/repo-name ).   For source code in an Amazon Simple Storage Service (Amazon S3) input bucket, the path to the ZIP file that contains the source code (for example,  bucket-name/path/to/object-name.zip)   For source code in a GitHub repository, the HTTPS clone URL, including the user name and personal access token, to the repository that contains the source code and the build spec (for example, https://login-user-name:personal-access-token@github.com/repo-owner-name/repo-name.git). For more information, see Creating an Access Token for Command-Line Use on the GitHub Help website.  
     */
    location?: String;
    /**
     * The build spec declaration to use for this build project's related builds. If this value is not specified, a build spec must be included along with the source code to be built.
     */
    buildspec?: String;
    /**
     * Information about the authorization settings for AWS CodeBuild to access the source code to be built. This information is only for the AWS CodeBuild console's use. Your code should not get or set this information directly.
     */
    auth?: SourceAuth;
  }
  export type Projects = Project[];
  export type SortOrderType = "ASCENDING"|"DESCENDING"|string;
  export interface SourceAuth {
    /**
     * The authorization type to use. The only valid value is OAUTH, which represents the OAuth authorization type.
     */
    type: SourceAuthType;
    /**
     * The resource value that applies to the specified authorization type.
     */
    resource?: String;
  }
  export type SourceAuthType = "OAUTH"|string;
  export type SourceType = "CODECOMMIT"|"CODEPIPELINE"|"GITHUB"|"S3"|string;
  export interface StartBuildInput {
    /**
     * The name of the build project to start running a build.
     */
    projectName: NonEmptyString;
    /**
     * A version of the build input to be built, for this build only. If not specified, the latest version will be used. If specified, must be one of:   For AWS CodeCommit or GitHub: the commit ID to use.   For Amazon Simple Storage Service (Amazon S3): the version ID of the object representing the build input ZIP file to use.  
     */
    sourceVersion?: String;
    /**
     * Build output artifact settings that override, for this build only, the latest ones already defined in the corresponding build project.
     */
    artifactsOverride?: ProjectArtifacts;
    /**
     * A set of environment variables that overrides, for this build only, the latest ones already defined in the corresponding build project.
     */
    environmentVariablesOverride?: EnvironmentVariables;
    /**
     * A build spec declaration that overrides, for this build only, the latest one already defined in the corresponding build project.
     */
    buildspecOverride?: String;
    /**
     * The number of build timeout minutes, from 5 to 480 (8 hours) that overrides, for this build only, the latest setting already defined in the corresponding build project.
     */
    timeoutInMinutesOverride?: TimeOut;
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
     * The ID of the build to attempt to stop running.
     */
    id: NonEmptyString;
  }
  export interface StopBuildOutput {
    /**
     * Information about the build that was attempted to be stopped.
     */
    build?: Build;
  }
  export type String = string;
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
     * The name of the existing build project to change settings.  You cannot change an existing build project's name. 
     */
    name: NonEmptyString;
    /**
     * A new or replacement description of the build project.
     */
    description?: ProjectDescription;
    /**
     * Information to be changed about the build project's build input source code.
     */
    source?: ProjectSource;
    /**
     * Information to be changed about the build project's build output artifacts.
     */
    artifacts?: ProjectArtifacts;
    /**
     * Information to be changed about the build project's build environment.
     */
    environment?: ProjectEnvironment;
    /**
     * The replacement Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that enables AWS CodeBuild to interact with dependent AWS services on behalf of the AWS account.
     */
    serviceRole?: NonEmptyString;
    /**
     * The replacement value in minutes, from 5 to 480 (8 hours), for AWS CodeBuild to wait to timeout any related build that did not get marked as completed.
     */
    timeoutInMinutes?: TimeOut;
    /**
     * The replacement AWS Key Management Service (AWS KMS) customer master key (CMK) to be used for encrypting the build project's build output artifacts. You can specify either the CMK's Amazon Resource Name (ARN) or, if available, the CMK's alias (using the format alias/alias-name ).
     */
    encryptionKey?: NonEmptyString;
    /**
     * The replacement set of tags for this build project. These tags are available for use by AWS services that support AWS CodeBuild build project tags.
     */
    tags?: TagList;
  }
  export interface UpdateProjectOutput {
    /**
     * Information about the build project that was changed.
     */
    project?: Project;
  }
  export type ValueInput = string;
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
