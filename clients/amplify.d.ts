import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class Amplify extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Amplify.Types.ClientConfiguration)
  config: Config & Amplify.Types.ClientConfiguration;
  /**
   *  Creates a new Amplify App. 
   */
  createApp(params: Amplify.Types.CreateAppRequest, callback?: (err: AWSError, data: Amplify.Types.CreateAppResult) => void): Request<Amplify.Types.CreateAppResult, AWSError>;
  /**
   *  Creates a new Amplify App. 
   */
  createApp(callback?: (err: AWSError, data: Amplify.Types.CreateAppResult) => void): Request<Amplify.Types.CreateAppResult, AWSError>;
  /**
   *  Creates a new Branch for an Amplify App. 
   */
  createBranch(params: Amplify.Types.CreateBranchRequest, callback?: (err: AWSError, data: Amplify.Types.CreateBranchResult) => void): Request<Amplify.Types.CreateBranchResult, AWSError>;
  /**
   *  Creates a new Branch for an Amplify App. 
   */
  createBranch(callback?: (err: AWSError, data: Amplify.Types.CreateBranchResult) => void): Request<Amplify.Types.CreateBranchResult, AWSError>;
  /**
   *  Create a deployment for manual deploy apps. (Apps are not connected to repository) 
   */
  createDeployment(params: Amplify.Types.CreateDeploymentRequest, callback?: (err: AWSError, data: Amplify.Types.CreateDeploymentResult) => void): Request<Amplify.Types.CreateDeploymentResult, AWSError>;
  /**
   *  Create a deployment for manual deploy apps. (Apps are not connected to repository) 
   */
  createDeployment(callback?: (err: AWSError, data: Amplify.Types.CreateDeploymentResult) => void): Request<Amplify.Types.CreateDeploymentResult, AWSError>;
  /**
   *  Create a new DomainAssociation on an App 
   */
  createDomainAssociation(params: Amplify.Types.CreateDomainAssociationRequest, callback?: (err: AWSError, data: Amplify.Types.CreateDomainAssociationResult) => void): Request<Amplify.Types.CreateDomainAssociationResult, AWSError>;
  /**
   *  Create a new DomainAssociation on an App 
   */
  createDomainAssociation(callback?: (err: AWSError, data: Amplify.Types.CreateDomainAssociationResult) => void): Request<Amplify.Types.CreateDomainAssociationResult, AWSError>;
  /**
   *  Create a new webhook on an App. 
   */
  createWebhook(params: Amplify.Types.CreateWebhookRequest, callback?: (err: AWSError, data: Amplify.Types.CreateWebhookResult) => void): Request<Amplify.Types.CreateWebhookResult, AWSError>;
  /**
   *  Create a new webhook on an App. 
   */
  createWebhook(callback?: (err: AWSError, data: Amplify.Types.CreateWebhookResult) => void): Request<Amplify.Types.CreateWebhookResult, AWSError>;
  /**
   *  Delete an existing Amplify App by appId. 
   */
  deleteApp(params: Amplify.Types.DeleteAppRequest, callback?: (err: AWSError, data: Amplify.Types.DeleteAppResult) => void): Request<Amplify.Types.DeleteAppResult, AWSError>;
  /**
   *  Delete an existing Amplify App by appId. 
   */
  deleteApp(callback?: (err: AWSError, data: Amplify.Types.DeleteAppResult) => void): Request<Amplify.Types.DeleteAppResult, AWSError>;
  /**
   *  Deletes a branch for an Amplify App. 
   */
  deleteBranch(params: Amplify.Types.DeleteBranchRequest, callback?: (err: AWSError, data: Amplify.Types.DeleteBranchResult) => void): Request<Amplify.Types.DeleteBranchResult, AWSError>;
  /**
   *  Deletes a branch for an Amplify App. 
   */
  deleteBranch(callback?: (err: AWSError, data: Amplify.Types.DeleteBranchResult) => void): Request<Amplify.Types.DeleteBranchResult, AWSError>;
  /**
   *  Deletes a DomainAssociation. 
   */
  deleteDomainAssociation(params: Amplify.Types.DeleteDomainAssociationRequest, callback?: (err: AWSError, data: Amplify.Types.DeleteDomainAssociationResult) => void): Request<Amplify.Types.DeleteDomainAssociationResult, AWSError>;
  /**
   *  Deletes a DomainAssociation. 
   */
  deleteDomainAssociation(callback?: (err: AWSError, data: Amplify.Types.DeleteDomainAssociationResult) => void): Request<Amplify.Types.DeleteDomainAssociationResult, AWSError>;
  /**
   *  Delete a job, for an Amplify branch, part of Amplify App. 
   */
  deleteJob(params: Amplify.Types.DeleteJobRequest, callback?: (err: AWSError, data: Amplify.Types.DeleteJobResult) => void): Request<Amplify.Types.DeleteJobResult, AWSError>;
  /**
   *  Delete a job, for an Amplify branch, part of Amplify App. 
   */
  deleteJob(callback?: (err: AWSError, data: Amplify.Types.DeleteJobResult) => void): Request<Amplify.Types.DeleteJobResult, AWSError>;
  /**
   *  Deletes a webhook. 
   */
  deleteWebhook(params: Amplify.Types.DeleteWebhookRequest, callback?: (err: AWSError, data: Amplify.Types.DeleteWebhookResult) => void): Request<Amplify.Types.DeleteWebhookResult, AWSError>;
  /**
   *  Deletes a webhook. 
   */
  deleteWebhook(callback?: (err: AWSError, data: Amplify.Types.DeleteWebhookResult) => void): Request<Amplify.Types.DeleteWebhookResult, AWSError>;
  /**
   *  Retrieve website access logs for a specific time range via a pre-signed URL. Optionally, deliver the logs to a given S3 bucket. 
   */
  generateAccessLogs(params: Amplify.Types.GenerateAccessLogsRequest, callback?: (err: AWSError, data: Amplify.Types.GenerateAccessLogsResult) => void): Request<Amplify.Types.GenerateAccessLogsResult, AWSError>;
  /**
   *  Retrieve website access logs for a specific time range via a pre-signed URL. Optionally, deliver the logs to a given S3 bucket. 
   */
  generateAccessLogs(callback?: (err: AWSError, data: Amplify.Types.GenerateAccessLogsResult) => void): Request<Amplify.Types.GenerateAccessLogsResult, AWSError>;
  /**
   *  Retrieves an existing Amplify App by appId. 
   */
  getApp(params: Amplify.Types.GetAppRequest, callback?: (err: AWSError, data: Amplify.Types.GetAppResult) => void): Request<Amplify.Types.GetAppResult, AWSError>;
  /**
   *  Retrieves an existing Amplify App by appId. 
   */
  getApp(callback?: (err: AWSError, data: Amplify.Types.GetAppResult) => void): Request<Amplify.Types.GetAppResult, AWSError>;
  /**
   *  Retrieves artifact info that corresponds to a artifactId. 
   */
  getArtifactUrl(params: Amplify.Types.GetArtifactUrlRequest, callback?: (err: AWSError, data: Amplify.Types.GetArtifactUrlResult) => void): Request<Amplify.Types.GetArtifactUrlResult, AWSError>;
  /**
   *  Retrieves artifact info that corresponds to a artifactId. 
   */
  getArtifactUrl(callback?: (err: AWSError, data: Amplify.Types.GetArtifactUrlResult) => void): Request<Amplify.Types.GetArtifactUrlResult, AWSError>;
  /**
   *  Retrieves a branch for an Amplify App. 
   */
  getBranch(params: Amplify.Types.GetBranchRequest, callback?: (err: AWSError, data: Amplify.Types.GetBranchResult) => void): Request<Amplify.Types.GetBranchResult, AWSError>;
  /**
   *  Retrieves a branch for an Amplify App. 
   */
  getBranch(callback?: (err: AWSError, data: Amplify.Types.GetBranchResult) => void): Request<Amplify.Types.GetBranchResult, AWSError>;
  /**
   *  Retrieves domain info that corresponds to an appId and domainName. 
   */
  getDomainAssociation(params: Amplify.Types.GetDomainAssociationRequest, callback?: (err: AWSError, data: Amplify.Types.GetDomainAssociationResult) => void): Request<Amplify.Types.GetDomainAssociationResult, AWSError>;
  /**
   *  Retrieves domain info that corresponds to an appId and domainName. 
   */
  getDomainAssociation(callback?: (err: AWSError, data: Amplify.Types.GetDomainAssociationResult) => void): Request<Amplify.Types.GetDomainAssociationResult, AWSError>;
  /**
   *  Get a job for a branch, part of an Amplify App. 
   */
  getJob(params: Amplify.Types.GetJobRequest, callback?: (err: AWSError, data: Amplify.Types.GetJobResult) => void): Request<Amplify.Types.GetJobResult, AWSError>;
  /**
   *  Get a job for a branch, part of an Amplify App. 
   */
  getJob(callback?: (err: AWSError, data: Amplify.Types.GetJobResult) => void): Request<Amplify.Types.GetJobResult, AWSError>;
  /**
   *  Retrieves webhook info that corresponds to a webhookId. 
   */
  getWebhook(params: Amplify.Types.GetWebhookRequest, callback?: (err: AWSError, data: Amplify.Types.GetWebhookResult) => void): Request<Amplify.Types.GetWebhookResult, AWSError>;
  /**
   *  Retrieves webhook info that corresponds to a webhookId. 
   */
  getWebhook(callback?: (err: AWSError, data: Amplify.Types.GetWebhookResult) => void): Request<Amplify.Types.GetWebhookResult, AWSError>;
  /**
   *  Lists existing Amplify Apps. 
   */
  listApps(params: Amplify.Types.ListAppsRequest, callback?: (err: AWSError, data: Amplify.Types.ListAppsResult) => void): Request<Amplify.Types.ListAppsResult, AWSError>;
  /**
   *  Lists existing Amplify Apps. 
   */
  listApps(callback?: (err: AWSError, data: Amplify.Types.ListAppsResult) => void): Request<Amplify.Types.ListAppsResult, AWSError>;
  /**
   *  List artifacts with an app, a branch, a job and an artifact type. 
   */
  listArtifacts(params: Amplify.Types.ListArtifactsRequest, callback?: (err: AWSError, data: Amplify.Types.ListArtifactsResult) => void): Request<Amplify.Types.ListArtifactsResult, AWSError>;
  /**
   *  List artifacts with an app, a branch, a job and an artifact type. 
   */
  listArtifacts(callback?: (err: AWSError, data: Amplify.Types.ListArtifactsResult) => void): Request<Amplify.Types.ListArtifactsResult, AWSError>;
  /**
   *  Lists branches for an Amplify App. 
   */
  listBranches(params: Amplify.Types.ListBranchesRequest, callback?: (err: AWSError, data: Amplify.Types.ListBranchesResult) => void): Request<Amplify.Types.ListBranchesResult, AWSError>;
  /**
   *  Lists branches for an Amplify App. 
   */
  listBranches(callback?: (err: AWSError, data: Amplify.Types.ListBranchesResult) => void): Request<Amplify.Types.ListBranchesResult, AWSError>;
  /**
   *  List domains with an app 
   */
  listDomainAssociations(params: Amplify.Types.ListDomainAssociationsRequest, callback?: (err: AWSError, data: Amplify.Types.ListDomainAssociationsResult) => void): Request<Amplify.Types.ListDomainAssociationsResult, AWSError>;
  /**
   *  List domains with an app 
   */
  listDomainAssociations(callback?: (err: AWSError, data: Amplify.Types.ListDomainAssociationsResult) => void): Request<Amplify.Types.ListDomainAssociationsResult, AWSError>;
  /**
   *  List Jobs for a branch, part of an Amplify App. 
   */
  listJobs(params: Amplify.Types.ListJobsRequest, callback?: (err: AWSError, data: Amplify.Types.ListJobsResult) => void): Request<Amplify.Types.ListJobsResult, AWSError>;
  /**
   *  List Jobs for a branch, part of an Amplify App. 
   */
  listJobs(callback?: (err: AWSError, data: Amplify.Types.ListJobsResult) => void): Request<Amplify.Types.ListJobsResult, AWSError>;
  /**
   *  List tags for resource. 
   */
  listTagsForResource(params: Amplify.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: Amplify.Types.ListTagsForResourceResponse) => void): Request<Amplify.Types.ListTagsForResourceResponse, AWSError>;
  /**
   *  List tags for resource. 
   */
  listTagsForResource(callback?: (err: AWSError, data: Amplify.Types.ListTagsForResourceResponse) => void): Request<Amplify.Types.ListTagsForResourceResponse, AWSError>;
  /**
   *  List webhooks with an app. 
   */
  listWebhooks(params: Amplify.Types.ListWebhooksRequest, callback?: (err: AWSError, data: Amplify.Types.ListWebhooksResult) => void): Request<Amplify.Types.ListWebhooksResult, AWSError>;
  /**
   *  List webhooks with an app. 
   */
  listWebhooks(callback?: (err: AWSError, data: Amplify.Types.ListWebhooksResult) => void): Request<Amplify.Types.ListWebhooksResult, AWSError>;
  /**
   *  Start a deployment for manual deploy apps. (Apps are not connected to repository) 
   */
  startDeployment(params: Amplify.Types.StartDeploymentRequest, callback?: (err: AWSError, data: Amplify.Types.StartDeploymentResult) => void): Request<Amplify.Types.StartDeploymentResult, AWSError>;
  /**
   *  Start a deployment for manual deploy apps. (Apps are not connected to repository) 
   */
  startDeployment(callback?: (err: AWSError, data: Amplify.Types.StartDeploymentResult) => void): Request<Amplify.Types.StartDeploymentResult, AWSError>;
  /**
   *  Starts a new job for a branch, part of an Amplify App. 
   */
  startJob(params: Amplify.Types.StartJobRequest, callback?: (err: AWSError, data: Amplify.Types.StartJobResult) => void): Request<Amplify.Types.StartJobResult, AWSError>;
  /**
   *  Starts a new job for a branch, part of an Amplify App. 
   */
  startJob(callback?: (err: AWSError, data: Amplify.Types.StartJobResult) => void): Request<Amplify.Types.StartJobResult, AWSError>;
  /**
   *  Stop a job that is in progress, for an Amplify branch, part of Amplify App. 
   */
  stopJob(params: Amplify.Types.StopJobRequest, callback?: (err: AWSError, data: Amplify.Types.StopJobResult) => void): Request<Amplify.Types.StopJobResult, AWSError>;
  /**
   *  Stop a job that is in progress, for an Amplify branch, part of Amplify App. 
   */
  stopJob(callback?: (err: AWSError, data: Amplify.Types.StopJobResult) => void): Request<Amplify.Types.StopJobResult, AWSError>;
  /**
   *  Tag resource with tag key and value. 
   */
  tagResource(params: Amplify.Types.TagResourceRequest, callback?: (err: AWSError, data: Amplify.Types.TagResourceResponse) => void): Request<Amplify.Types.TagResourceResponse, AWSError>;
  /**
   *  Tag resource with tag key and value. 
   */
  tagResource(callback?: (err: AWSError, data: Amplify.Types.TagResourceResponse) => void): Request<Amplify.Types.TagResourceResponse, AWSError>;
  /**
   *  Untag resource with resourceArn. 
   */
  untagResource(params: Amplify.Types.UntagResourceRequest, callback?: (err: AWSError, data: Amplify.Types.UntagResourceResponse) => void): Request<Amplify.Types.UntagResourceResponse, AWSError>;
  /**
   *  Untag resource with resourceArn. 
   */
  untagResource(callback?: (err: AWSError, data: Amplify.Types.UntagResourceResponse) => void): Request<Amplify.Types.UntagResourceResponse, AWSError>;
  /**
   *  Updates an existing Amplify App. 
   */
  updateApp(params: Amplify.Types.UpdateAppRequest, callback?: (err: AWSError, data: Amplify.Types.UpdateAppResult) => void): Request<Amplify.Types.UpdateAppResult, AWSError>;
  /**
   *  Updates an existing Amplify App. 
   */
  updateApp(callback?: (err: AWSError, data: Amplify.Types.UpdateAppResult) => void): Request<Amplify.Types.UpdateAppResult, AWSError>;
  /**
   *  Updates a branch for an Amplify App. 
   */
  updateBranch(params: Amplify.Types.UpdateBranchRequest, callback?: (err: AWSError, data: Amplify.Types.UpdateBranchResult) => void): Request<Amplify.Types.UpdateBranchResult, AWSError>;
  /**
   *  Updates a branch for an Amplify App. 
   */
  updateBranch(callback?: (err: AWSError, data: Amplify.Types.UpdateBranchResult) => void): Request<Amplify.Types.UpdateBranchResult, AWSError>;
  /**
   *  Create a new DomainAssociation on an App 
   */
  updateDomainAssociation(params: Amplify.Types.UpdateDomainAssociationRequest, callback?: (err: AWSError, data: Amplify.Types.UpdateDomainAssociationResult) => void): Request<Amplify.Types.UpdateDomainAssociationResult, AWSError>;
  /**
   *  Create a new DomainAssociation on an App 
   */
  updateDomainAssociation(callback?: (err: AWSError, data: Amplify.Types.UpdateDomainAssociationResult) => void): Request<Amplify.Types.UpdateDomainAssociationResult, AWSError>;
  /**
   *  Update a webhook. 
   */
  updateWebhook(params: Amplify.Types.UpdateWebhookRequest, callback?: (err: AWSError, data: Amplify.Types.UpdateWebhookResult) => void): Request<Amplify.Types.UpdateWebhookResult, AWSError>;
  /**
   *  Update a webhook. 
   */
  updateWebhook(callback?: (err: AWSError, data: Amplify.Types.UpdateWebhookResult) => void): Request<Amplify.Types.UpdateWebhookResult, AWSError>;
}
declare namespace Amplify {
  export type AccessToken = string;
  export type ActiveJobId = string;
  export interface App {
    /**
     *  Unique Id for the Amplify App. 
     */
    appId: AppId;
    /**
     *  ARN for the Amplify App. 
     */
    appArn: AppArn;
    /**
     *  Name for the Amplify App. 
     */
    name: Name;
    /**
     *  Tag for Amplify App. 
     */
    tags?: TagMap;
    /**
     *  Description for the Amplify App. 
     */
    description: Description;
    /**
     *  Repository for the Amplify App. 
     */
    repository: Repository;
    /**
     *  Platform for the Amplify App. 
     */
    platform: Platform;
    /**
     *  Create date / time for the Amplify App. 
     */
    createTime: CreateTime;
    /**
     *  Update date / time for the Amplify App. 
     */
    updateTime: UpdateTime;
    /**
     *  IAM service role ARN for the Amplify App. 
     */
    iamServiceRoleArn?: ServiceRoleArn;
    /**
     *  Environment Variables for the Amplify App. 
     */
    environmentVariables: EnvironmentVariables;
    /**
     *  Default domain for the Amplify App. 
     */
    defaultDomain: DefaultDomain;
    /**
     *  Enables auto-building of branches for the Amplify App. 
     */
    enableBranchAutoBuild: EnableBranchAutoBuild;
    /**
     *  Enables Basic Authorization for branches for the Amplify App. 
     */
    enableBasicAuth: EnableBasicAuth;
    /**
     *  Basic Authorization credentials for branches for the Amplify App. 
     */
    basicAuthCredentials?: BasicAuthCredentials;
    /**
     *  Custom redirect / rewrite rules for the Amplify App. 
     */
    customRules?: CustomRules;
    /**
     *  Structure with Production Branch information. 
     */
    productionBranch?: ProductionBranch;
    /**
     *  BuildSpec content for Amplify App. 
     */
    buildSpec?: BuildSpec;
    /**
     *  Enables automated branch creation for the Amplify App. 
     */
    enableAutoBranchCreation?: EnableAutoBranchCreation;
    /**
     *  Automated branch creation glob patterns for the Amplify App. 
     */
    autoBranchCreationPatterns?: AutoBranchCreationPatterns;
    /**
     *  Automated branch creation config for the Amplify App. 
     */
    autoBranchCreationConfig?: AutoBranchCreationConfig;
  }
  export type AppArn = string;
  export type AppId = string;
  export type Apps = App[];
  export interface Artifact {
    /**
     *  File name for the artifact. 
     */
    artifactFileName: ArtifactFileName;
    /**
     *  Unique Id for a artifact. 
     */
    artifactId: ArtifactId;
  }
  export type ArtifactFileName = string;
  export type ArtifactId = string;
  export type ArtifactType = "TEST"|string;
  export type ArtifactUrl = string;
  export type Artifacts = Artifact[];
  export type ArtifactsUrl = string;
  export type AssociatedResource = string;
  export type AssociatedResources = AssociatedResource[];
  export interface AutoBranchCreationConfig {
    /**
     *  Stage for the auto created branch. 
     */
    stage?: Stage;
    /**
     *  Framework for the auto created branch. 
     */
    framework?: Framework;
    /**
     *  Enables auto building for the auto created branch. 
     */
    enableAutoBuild?: EnableAutoBuild;
    /**
     *  Environment Variables for the auto created branch. 
     */
    environmentVariables?: EnvironmentVariables;
    /**
     *  Basic Authorization credentials for the auto created branch. 
     */
    basicAuthCredentials?: BasicAuthCredentials;
    /**
     *  Enables Basic Auth for the auto created branch. 
     */
    enableBasicAuth?: EnableBasicAuth;
    /**
     *  BuildSpec for the auto created branch. 
     */
    buildSpec?: BuildSpec;
    /**
     *  Enables Pull Request Preview for auto created branch. 
     */
    enablePullRequestPreview?: EnablePullRequestPreview;
  }
  export type AutoBranchCreationPattern = string;
  export type AutoBranchCreationPatterns = AutoBranchCreationPattern[];
  export type BasicAuthCredentials = string;
  export interface Branch {
    /**
     *  ARN for a branch, part of an Amplify App. 
     */
    branchArn: BranchArn;
    /**
     *  Name for a branch, part of an Amplify App. 
     */
    branchName: BranchName;
    /**
     *  Description for a branch, part of an Amplify App. 
     */
    description: Description;
    /**
     *  Tag for branch for Amplify App. 
     */
    tags?: TagMap;
    /**
     *  Stage for a branch, part of an Amplify App. 
     */
    stage: Stage;
    /**
     *  Display name for a branch, will use as the default domain prefix. 
     */
    displayName: DisplayName;
    /**
     *  Enables notifications for a branch, part of an Amplify App. 
     */
    enableNotification: EnableNotification;
    /**
     *  Creation date and time for a branch, part of an Amplify App. 
     */
    createTime: CreateTime;
    /**
     *  Last updated date and time for a branch, part of an Amplify App. 
     */
    updateTime: UpdateTime;
    /**
     *  Environment Variables specific to a branch, part of an Amplify App. 
     */
    environmentVariables: EnvironmentVariables;
    /**
     *  Enables auto-building on push for a branch, part of an Amplify App. 
     */
    enableAutoBuild: EnableAutoBuild;
    /**
     *  Custom domains for a branch, part of an Amplify App. 
     */
    customDomains: CustomDomains;
    /**
     *  Framework for a branch, part of an Amplify App. 
     */
    framework: Framework;
    /**
     *  Id of the active job for a branch, part of an Amplify App. 
     */
    activeJobId: ActiveJobId;
    /**
     *  Total number of Jobs part of an Amplify App. 
     */
    totalNumberOfJobs: TotalNumberOfJobs;
    /**
     *  Enables Basic Authorization for a branch, part of an Amplify App. 
     */
    enableBasicAuth: EnableBasicAuth;
    /**
     *  Thumbnail URL for the branch. 
     */
    thumbnailUrl?: ThumbnailUrl;
    /**
     *  Basic Authorization credentials for a branch, part of an Amplify App. 
     */
    basicAuthCredentials?: BasicAuthCredentials;
    /**
     *  BuildSpec content for branch for Amplify App. 
     */
    buildSpec?: BuildSpec;
    /**
     *  The content TTL for the website in seconds. 
     */
    ttl: TTL;
    /**
     *  List of custom resources that are linked to this branch. 
     */
    associatedResources?: AssociatedResources;
    /**
     *  Enables Pull Request Preview for this branch. 
     */
    enablePullRequestPreview: EnablePullRequestPreview;
    /**
     *  The destination branch if the branch is a pull request branch. 
     */
    destinationBranch?: BranchName;
    /**
     *  The source branch if the branch is a pull request branch. 
     */
    sourceBranch?: BranchName;
  }
  export type BranchArn = string;
  export type BranchName = string;
  export type Branches = Branch[];
  export type BuildSpec = string;
  export type CertificateVerificationDNSRecord = string;
  export type CommitId = string;
  export type CommitMessage = string;
  export type CommitTime = Date;
  export type Condition = string;
  export type Context = string;
  export interface CreateAppRequest {
    /**
     *  Name for the Amplify App 
     */
    name: Name;
    /**
     *  Description for an Amplify App 
     */
    description?: Description;
    /**
     *  Repository for an Amplify App 
     */
    repository?: Repository;
    /**
     *  Platform / framework for an Amplify App 
     */
    platform?: Platform;
    /**
     *  AWS IAM service role for an Amplify App 
     */
    iamServiceRoleArn?: ServiceRoleArn;
    /**
     *  OAuth token for 3rd party source control system for an Amplify App, used to create webhook and read-only deploy key. OAuth token is not stored. 
     */
    oauthToken?: OauthToken;
    /**
     *  Personal Access token for 3rd party source control system for an Amplify App, used to create webhook and read-only deploy key. Token is not stored. 
     */
    accessToken?: AccessToken;
    /**
     *  Environment variables map for an Amplify App. 
     */
    environmentVariables?: EnvironmentVariables;
    /**
     *  Enable the auto building of branches for an Amplify App. 
     */
    enableBranchAutoBuild?: EnableBranchAutoBuild;
    /**
     *  Enable Basic Authorization for an Amplify App, this will apply to all branches part of this App. 
     */
    enableBasicAuth?: EnableBasicAuth;
    /**
     *  Credentials for Basic Authorization for an Amplify App. 
     */
    basicAuthCredentials?: BasicAuthCredentials;
    /**
     *  Custom rewrite / redirect rules for an Amplify App. 
     */
    customRules?: CustomRules;
    /**
     *  Tag for an Amplify App 
     */
    tags?: TagMap;
    /**
     *  BuildSpec for an Amplify App 
     */
    buildSpec?: BuildSpec;
    /**
     *  Enables automated branch creation for the Amplify App. 
     */
    enableAutoBranchCreation?: EnableAutoBranchCreation;
    /**
     *  Automated branch creation glob patterns for the Amplify App. 
     */
    autoBranchCreationPatterns?: AutoBranchCreationPatterns;
    /**
     *  Automated branch creation config for the Amplify App. 
     */
    autoBranchCreationConfig?: AutoBranchCreationConfig;
  }
  export interface CreateAppResult {
    app: App;
  }
  export interface CreateBranchRequest {
    /**
     *  Unique Id for an Amplify App. 
     */
    appId: AppId;
    /**
     *  Name for the branch. 
     */
    branchName: BranchName;
    /**
     *  Description for the branch. 
     */
    description?: Description;
    /**
     *  Stage for the branch. 
     */
    stage?: Stage;
    /**
     *  Framework for the branch. 
     */
    framework?: Framework;
    /**
     *  Enables notifications for the branch. 
     */
    enableNotification?: EnableNotification;
    /**
     *  Enables auto building for the branch. 
     */
    enableAutoBuild?: EnableAutoBuild;
    /**
     *  Environment Variables for the branch. 
     */
    environmentVariables?: EnvironmentVariables;
    /**
     *  Basic Authorization credentials for the branch. 
     */
    basicAuthCredentials?: BasicAuthCredentials;
    /**
     *  Enables Basic Auth for the branch. 
     */
    enableBasicAuth?: EnableBasicAuth;
    /**
     *  Tag for the branch. 
     */
    tags?: TagMap;
    /**
     *  BuildSpec for the branch. 
     */
    buildSpec?: BuildSpec;
    /**
     *  The content TTL for the website in seconds. 
     */
    ttl?: TTL;
    /**
     *  Display name for a branch, will use as the default domain prefix. 
     */
    displayName?: DisplayName;
    /**
     *  Enables Pull Request Preview for this branch. 
     */
    enablePullRequestPreview?: EnablePullRequestPreview;
  }
  export interface CreateBranchResult {
    /**
     *  Branch structure for an Amplify App. 
     */
    branch: Branch;
  }
  export interface CreateDeploymentRequest {
    /**
     *  Unique Id for an Amplify App. 
     */
    appId: AppId;
    /**
     *  Name for the branch, for the Job. 
     */
    branchName: BranchName;
    /**
     *  Optional file map that contains file name as the key and file content md5 hash as the value. If this argument is provided, the service will generate different upload url per file. Otherwise, the service will only generate a single upload url for the zipped files. 
     */
    fileMap?: FileMap;
  }
  export interface CreateDeploymentResult {
    /**
     *  The jobId for this deployment, will supply to start deployment api. 
     */
    jobId?: JobId;
    /**
     *  When the fileMap argument is provided in the request, the fileUploadUrls will contain a map of file names to upload url. 
     */
    fileUploadUrls: FileUploadUrls;
    /**
     *  When the fileMap argument is NOT provided. This zipUploadUrl will be returned. 
     */
    zipUploadUrl: UploadUrl;
  }
  export interface CreateDomainAssociationRequest {
    /**
     *  Unique Id for an Amplify App. 
     */
    appId: AppId;
    /**
     *  Domain name for the Domain Association. 
     */
    domainName: DomainName;
    /**
     *  Enables automated creation of Subdomains for branches. 
     */
    enableAutoSubDomain?: EnableAutoSubDomain;
    /**
     *  Setting structure for the Subdomain. 
     */
    subDomainSettings: SubDomainSettings;
  }
  export interface CreateDomainAssociationResult {
    /**
     *  Domain Association structure. 
     */
    domainAssociation: DomainAssociation;
  }
  export type CreateTime = Date;
  export interface CreateWebhookRequest {
    /**
     *  Unique Id for an Amplify App. 
     */
    appId: AppId;
    /**
     *  Name for a branch, part of an Amplify App. 
     */
    branchName: BranchName;
    /**
     *  Description for a webhook. 
     */
    description?: Description;
  }
  export interface CreateWebhookResult {
    /**
     *  Webhook structure. 
     */
    webhook: Webhook;
  }
  export type CustomDomain = string;
  export type CustomDomains = CustomDomain[];
  export interface CustomRule {
    /**
     *  The source pattern for a URL rewrite or redirect rule. 
     */
    source: Source;
    /**
     *  The target pattern for a URL rewrite or redirect rule. 
     */
    target: Target;
    /**
     *  The status code for a URL rewrite or redirect rule. 
     */
    status?: Status;
    /**
     *  The condition for a URL rewrite or redirect rule, e.g. country code. 
     */
    condition?: Condition;
  }
  export type CustomRules = CustomRule[];
  export type DNSRecord = string;
  export type DefaultDomain = string;
  export interface DeleteAppRequest {
    /**
     *  Unique Id for an Amplify App. 
     */
    appId: AppId;
  }
  export interface DeleteAppResult {
    app: App;
  }
  export interface DeleteBranchRequest {
    /**
     *  Unique Id for an Amplify App. 
     */
    appId: AppId;
    /**
     *  Name for the branch. 
     */
    branchName: BranchName;
  }
  export interface DeleteBranchResult {
    /**
     *  Branch structure for an Amplify App. 
     */
    branch: Branch;
  }
  export interface DeleteDomainAssociationRequest {
    /**
     *  Unique Id for an Amplify App. 
     */
    appId: AppId;
    /**
     *  Name of the domain. 
     */
    domainName: DomainName;
  }
  export interface DeleteDomainAssociationResult {
    domainAssociation: DomainAssociation;
  }
  export interface DeleteJobRequest {
    /**
     *  Unique Id for an Amplify App. 
     */
    appId: AppId;
    /**
     *  Name for the branch, for the Job. 
     */
    branchName: BranchName;
    /**
     *  Unique Id for the Job. 
     */
    jobId: JobId;
  }
  export interface DeleteJobResult {
    jobSummary: JobSummary;
  }
  export interface DeleteWebhookRequest {
    /**
     *  Unique Id for a webhook. 
     */
    webhookId: WebhookId;
  }
  export interface DeleteWebhookResult {
    /**
     *  Webhook structure. 
     */
    webhook: Webhook;
  }
  export type Description = string;
  export type DisplayName = string;
  export interface DomainAssociation {
    /**
     *  ARN for the Domain Association. 
     */
    domainAssociationArn: DomainAssociationArn;
    /**
     *  Name of the domain. 
     */
    domainName: DomainName;
    /**
     *  Enables automated creation of Subdomains for branches. 
     */
    enableAutoSubDomain: EnableAutoSubDomain;
    /**
     *  Status fo the Domain Association. 
     */
    domainStatus: DomainStatus;
    /**
     *  Reason for the current status of the Domain Association. 
     */
    statusReason: StatusReason;
    /**
     *  DNS Record for certificate verification. 
     */
    certificateVerificationDNSRecord?: CertificateVerificationDNSRecord;
    /**
     *  Subdomains for the Domain Association. 
     */
    subDomains: SubDomains;
  }
  export type DomainAssociationArn = string;
  export type DomainAssociations = DomainAssociation[];
  export type DomainName = string;
  export type DomainPrefix = string;
  export type DomainStatus = "PENDING_VERIFICATION"|"IN_PROGRESS"|"AVAILABLE"|"PENDING_DEPLOYMENT"|"FAILED"|"CREATING"|"REQUESTING_CERTIFICATE"|"UPDATING"|string;
  export type EnableAutoBranchCreation = boolean;
  export type EnableAutoBuild = boolean;
  export type EnableAutoSubDomain = boolean;
  export type EnableBasicAuth = boolean;
  export type EnableBranchAutoBuild = boolean;
  export type EnableNotification = boolean;
  export type EnablePullRequestPreview = boolean;
  export type EndTime = Date;
  export type EnvKey = string;
  export type EnvValue = string;
  export type EnvironmentVariables = {[key: string]: EnvValue};
  export type FileMap = {[key: string]: MD5Hash};
  export type FileName = string;
  export type FileUploadUrls = {[key: string]: UploadUrl};
  export type Framework = string;
  export interface GenerateAccessLogsRequest {
    /**
     *  The time at which the logs should start, inclusive. 
     */
    startTime?: StartTime;
    /**
     *  The time at which the logs should end, inclusive. 
     */
    endTime?: EndTime;
    /**
     *  Name of the domain. 
     */
    domainName: DomainName;
    /**
     *  Unique Id for an Amplify App. 
     */
    appId: AppId;
  }
  export interface GenerateAccessLogsResult {
    /**
     *  Pre-signed URL for the requested access logs. 
     */
    logUrl?: LogUrl;
  }
  export interface GetAppRequest {
    /**
     *  Unique Id for an Amplify App. 
     */
    appId: AppId;
  }
  export interface GetAppResult {
    app: App;
  }
  export interface GetArtifactUrlRequest {
    /**
     *  Unique Id for a artifact. 
     */
    artifactId: ArtifactId;
  }
  export interface GetArtifactUrlResult {
    /**
     *  Unique Id for a artifact. 
     */
    artifactId: ArtifactId;
    /**
     *  Presigned url for the artifact. 
     */
    artifactUrl: ArtifactUrl;
  }
  export interface GetBranchRequest {
    /**
     *  Unique Id for an Amplify App. 
     */
    appId: AppId;
    /**
     *  Name for the branch. 
     */
    branchName: BranchName;
  }
  export interface GetBranchResult {
    branch: Branch;
  }
  export interface GetDomainAssociationRequest {
    /**
     *  Unique Id for an Amplify App. 
     */
    appId: AppId;
    /**
     *  Name of the domain. 
     */
    domainName: DomainName;
  }
  export interface GetDomainAssociationResult {
    /**
     *  Domain Association structure. 
     */
    domainAssociation: DomainAssociation;
  }
  export interface GetJobRequest {
    /**
     *  Unique Id for an Amplify App. 
     */
    appId: AppId;
    /**
     *  Name for the branch, for the Job. 
     */
    branchName: BranchName;
    /**
     *  Unique Id for the Job. 
     */
    jobId: JobId;
  }
  export interface GetJobResult {
    job: Job;
  }
  export interface GetWebhookRequest {
    /**
     *  Unique Id for a webhook. 
     */
    webhookId: WebhookId;
  }
  export interface GetWebhookResult {
    /**
     *  Webhook structure. 
     */
    webhook: Webhook;
  }
  export interface Job {
    /**
     *  Summary for an execution job for an Amplify App. 
     */
    summary: JobSummary;
    /**
     *  Execution steps for an execution job, for an Amplify App. 
     */
    steps: Steps;
  }
  export type JobArn = string;
  export type JobId = string;
  export type JobReason = string;
  export type JobStatus = "PENDING"|"PROVISIONING"|"RUNNING"|"FAILED"|"SUCCEED"|"CANCELLING"|"CANCELLED"|string;
  export type JobSummaries = JobSummary[];
  export interface JobSummary {
    /**
     *  Arn for the Job. 
     */
    jobArn: JobArn;
    /**
     *  Unique Id for the Job. 
     */
    jobId: JobId;
    /**
     *  Commit Id from 3rd party repository provider for the Job. 
     */
    commitId: CommitId;
    /**
     *  Commit message from 3rd party repository provider for the Job. 
     */
    commitMessage: CommitMessage;
    /**
     *  Commit date / time for the Job. 
     */
    commitTime: CommitTime;
    /**
     *  Start date / time for the Job. 
     */
    startTime: StartTime;
    /**
     *  Status for the Job. 
     */
    status: JobStatus;
    /**
     *  End date / time for the Job. 
     */
    endTime?: EndTime;
    /**
     *  Type for the Job. \n "RELEASE": Manually released from source by using StartJob API. "RETRY": Manually retried by using StartJob API. "WEB_HOOK": Automatically triggered by WebHooks. 
     */
    jobType: JobType;
  }
  export type JobType = "RELEASE"|"RETRY"|"MANUAL"|"WEB_HOOK"|string;
  export type LastDeployTime = Date;
  export interface ListAppsRequest {
    /**
     *  Pagination token. If non-null pagination token is returned in a result, then pass its value in another request to fetch more entries. 
     */
    nextToken?: NextToken;
    /**
     *  Maximum number of records to list in a single response. 
     */
    maxResults?: MaxResults;
  }
  export interface ListAppsResult {
    /**
     *  List of Amplify Apps. 
     */
    apps: Apps;
    /**
     *  Pagination token. Set to null to start listing Apps from start. If non-null pagination token is returned in a result, then pass its value in here to list more projects. 
     */
    nextToken?: NextToken;
  }
  export interface ListArtifactsRequest {
    /**
     *  Unique Id for an Amplify App. 
     */
    appId: AppId;
    /**
     *  Name for a branch, part of an Amplify App. 
     */
    branchName: BranchName;
    /**
     *  Unique Id for an Job. 
     */
    jobId: JobId;
    /**
     *  Type for an artifact. 
     */
    artifactType?: ArtifactType;
    /**
     *  Pagination token. Set to null to start listing artifacts from start. If non-null pagination token is returned in a result, then pass its value in here to list more artifacts. 
     */
    nextToken?: NextToken;
    /**
     *  Maximum number of records to list in a single response. 
     */
    maxResults?: MaxResults;
  }
  export interface ListArtifactsResult {
    /**
     *  List of artifacts. 
     */
    artifacts: Artifacts;
    /**
     *  Pagination token. If non-null pagination token is returned in a result, then pass its value in another request to fetch more entries. 
     */
    nextToken?: NextToken;
  }
  export interface ListBranchesRequest {
    /**
     *  Unique Id for an Amplify App. 
     */
    appId: AppId;
    /**
     *  Pagination token. Set to null to start listing branches from start. If a non-null pagination token is returned in a result, then pass its value in here to list more branches. 
     */
    nextToken?: NextToken;
    /**
     *  Maximum number of records to list in a single response. 
     */
    maxResults?: MaxResults;
  }
  export interface ListBranchesResult {
    /**
     *  List of branches for an Amplify App. 
     */
    branches: Branches;
    /**
     *  Pagination token. If non-null pagination token is returned in a result, then pass its value in another request to fetch more entries. 
     */
    nextToken?: NextToken;
  }
  export interface ListDomainAssociationsRequest {
    /**
     *  Unique Id for an Amplify App. 
     */
    appId: AppId;
    /**
     *  Pagination token. Set to null to start listing Apps from start. If non-null pagination token is returned in a result, then pass its value in here to list more projects. 
     */
    nextToken?: NextToken;
    /**
     *  Maximum number of records to list in a single response. 
     */
    maxResults?: MaxResults;
  }
  export interface ListDomainAssociationsResult {
    /**
     *  List of Domain Associations. 
     */
    domainAssociations: DomainAssociations;
    /**
     *  Pagination token. If non-null pagination token is returned in a result, then pass its value in another request to fetch more entries. 
     */
    nextToken?: NextToken;
  }
  export interface ListJobsRequest {
    /**
     *  Unique Id for an Amplify App. 
     */
    appId: AppId;
    /**
     *  Name for a branch. 
     */
    branchName: BranchName;
    /**
     *  Pagination token. Set to null to start listing steps from start. If a non-null pagination token is returned in a result, then pass its value in here to list more steps. 
     */
    nextToken?: NextToken;
    /**
     *  Maximum number of records to list in a single response. 
     */
    maxResults?: MaxResults;
  }
  export interface ListJobsResult {
    /**
     *  Result structure for list job result request. 
     */
    jobSummaries: JobSummaries;
    /**
     *  Pagination token. If non-null pagination token is returned in a result, then pass its value in another request to fetch more entries. 
     */
    nextToken?: NextToken;
  }
  export interface ListTagsForResourceRequest {
    /**
     *  Resource arn used to list tags. 
     */
    resourceArn: ResourceArn;
  }
  export interface ListTagsForResourceResponse {
    /**
     *  Tags result for response. 
     */
    tags?: TagMap;
  }
  export interface ListWebhooksRequest {
    /**
     *  Unique Id for an Amplify App. 
     */
    appId: AppId;
    /**
     *  Pagination token. Set to null to start listing webhooks from start. If non-null pagination token is returned in a result, then pass its value in here to list more webhooks. 
     */
    nextToken?: NextToken;
    /**
     *  Maximum number of records to list in a single response. 
     */
    maxResults?: MaxResults;
  }
  export interface ListWebhooksResult {
    /**
     *  List of webhooks. 
     */
    webhooks: Webhooks;
    /**
     *  Pagination token. If non-null pagination token is returned in a result, then pass its value in another request to fetch more entries. 
     */
    nextToken?: NextToken;
  }
  export type LogUrl = string;
  export type MD5Hash = string;
  export type MaxResults = number;
  export type Name = string;
  export type NextToken = string;
  export type OauthToken = string;
  export type Platform = "WEB"|string;
  export interface ProductionBranch {
    /**
     *  Last Deploy Time of Production Branch. 
     */
    lastDeployTime?: LastDeployTime;
    /**
     *  Status of Production Branch. 
     */
    status?: Status;
    /**
     *  Thumbnail URL for Production Branch. 
     */
    thumbnailUrl?: ThumbnailUrl;
    /**
     *  Branch Name for Production Branch. 
     */
    branchName?: BranchName;
  }
  export type Repository = string;
  export type ResourceArn = string;
  export type Screenshots = {[key: string]: ThumbnailUrl};
  export type ServiceRoleArn = string;
  export type Source = string;
  export type SourceUrl = string;
  export type Stage = "PRODUCTION"|"BETA"|"DEVELOPMENT"|"EXPERIMENTAL"|"PULL_REQUEST"|string;
  export interface StartDeploymentRequest {
    /**
     *  Unique Id for an Amplify App. 
     */
    appId: AppId;
    /**
     *  Name for the branch, for the Job. 
     */
    branchName: BranchName;
    /**
     *  The job id for this deployment, generated by create deployment request. 
     */
    jobId?: JobId;
    /**
     *  The sourceUrl for this deployment, used when calling start deployment without create deployment. SourceUrl can be any HTTP GET url that is public accessible and downloads a single zip. 
     */
    sourceUrl?: SourceUrl;
  }
  export interface StartDeploymentResult {
    /**
     *  Summary for the Job. 
     */
    jobSummary: JobSummary;
  }
  export interface StartJobRequest {
    /**
     *  Unique Id for an Amplify App. 
     */
    appId: AppId;
    /**
     *  Name for the branch, for the Job. 
     */
    branchName: BranchName;
    /**
     *  Unique Id for an existing job. Required for "RETRY" JobType. 
     */
    jobId?: JobId;
    /**
     *  Type for the Job. Available JobTypes are: \n "RELEASE": Start a new job with the latest change from the specified branch. Only available for apps that have connected to a repository. "RETRY": Retry an existing job. JobId is required for this type of job. 
     */
    jobType: JobType;
    /**
     *  Descriptive reason for starting this job. 
     */
    jobReason?: JobReason;
    /**
     *  Commit Id from 3rd party repository provider for the Job. 
     */
    commitId?: CommitId;
    /**
     *  Commit message from 3rd party repository provider for the Job. 
     */
    commitMessage?: CommitMessage;
    /**
     *  Commit date / time for the Job. 
     */
    commitTime?: CommitTime;
  }
  export interface StartJobResult {
    /**
     *  Summary for the Job. 
     */
    jobSummary: JobSummary;
  }
  export type StartTime = Date;
  export type Status = string;
  export type StatusReason = string;
  export interface Step {
    /**
     *  Name of the execution step. 
     */
    stepName: StepName;
    /**
     *  Start date/ time of the execution step. 
     */
    startTime: StartTime;
    /**
     *  Status of the execution step. 
     */
    status: JobStatus;
    /**
     *  End date/ time of the execution step. 
     */
    endTime: EndTime;
    /**
     *  URL to the logs for the execution step. 
     */
    logUrl?: LogUrl;
    /**
     *  URL to the artifact for the execution step. 
     */
    artifactsUrl?: ArtifactsUrl;
    /**
     *  URL to the test artifact for the execution step. 
     */
    testArtifactsUrl?: TestArtifactsUrl;
    /**
     *  URL to the test config for the execution step. 
     */
    testConfigUrl?: TestConfigUrl;
    /**
     *  List of screenshot URLs for the execution step, if relevant. 
     */
    screenshots?: Screenshots;
    /**
     *  The reason for current step status. 
     */
    statusReason?: StatusReason;
    /**
     *  The context for current step, will include build image if step is build. 
     */
    context?: Context;
  }
  export type StepName = string;
  export type Steps = Step[];
  export interface StopJobRequest {
    /**
     *  Unique Id for an Amplify App. 
     */
    appId: AppId;
    /**
     *  Name for the branch, for the Job. 
     */
    branchName: BranchName;
    /**
     *  Unique Id for the Job. 
     */
    jobId: JobId;
  }
  export interface StopJobResult {
    /**
     *  Summary for the Job. 
     */
    jobSummary: JobSummary;
  }
  export interface SubDomain {
    /**
     *  Setting structure for the Subdomain. 
     */
    subDomainSetting: SubDomainSetting;
    /**
     *  Verified status of the Subdomain 
     */
    verified: Verified;
    /**
     *  DNS record for the Subdomain. 
     */
    dnsRecord: DNSRecord;
  }
  export interface SubDomainSetting {
    /**
     *  Prefix setting for the Subdomain. 
     */
    prefix: DomainPrefix;
    /**
     *  Branch name setting for the Subdomain. 
     */
    branchName: BranchName;
  }
  export type SubDomainSettings = SubDomainSetting[];
  export type SubDomains = SubDomain[];
  export type TTL = string;
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagMap = {[key: string]: TagValue};
  export interface TagResourceRequest {
    /**
     *  Resource arn used to tag resource. 
     */
    resourceArn: ResourceArn;
    /**
     *  Tags used to tag resource. 
     */
    tags: TagMap;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type Target = string;
  export type TestArtifactsUrl = string;
  export type TestConfigUrl = string;
  export type ThumbnailName = string;
  export type ThumbnailUrl = string;
  export type TotalNumberOfJobs = string;
  export interface UntagResourceRequest {
    /**
     *  Resource arn used to untag resource. 
     */
    resourceArn: ResourceArn;
    /**
     *  Tag keys used to untag resource. 
     */
    tagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateAppRequest {
    /**
     *  Unique Id for an Amplify App. 
     */
    appId: AppId;
    /**
     *  Name for an Amplify App. 
     */
    name?: Name;
    /**
     *  Description for an Amplify App. 
     */
    description?: Description;
    /**
     *  Platform for an Amplify App. 
     */
    platform?: Platform;
    /**
     *  IAM service role for an Amplify App. 
     */
    iamServiceRoleArn?: ServiceRoleArn;
    /**
     *  Environment Variables for an Amplify App. 
     */
    environmentVariables?: EnvironmentVariables;
    /**
     *  Enables branch auto-building for an Amplify App. 
     */
    enableBranchAutoBuild?: EnableAutoBuild;
    /**
     *  Enables Basic Authorization for an Amplify App. 
     */
    enableBasicAuth?: EnableBasicAuth;
    /**
     *  Basic Authorization credentials for an Amplify App. 
     */
    basicAuthCredentials?: BasicAuthCredentials;
    /**
     *  Custom redirect / rewrite rules for an Amplify App. 
     */
    customRules?: CustomRules;
    /**
     *  BuildSpec for an Amplify App. 
     */
    buildSpec?: BuildSpec;
    /**
     *  Enables automated branch creation for the Amplify App. 
     */
    enableAutoBranchCreation?: EnableAutoBranchCreation;
    /**
     *  Automated branch creation glob patterns for the Amplify App. 
     */
    autoBranchCreationPatterns?: AutoBranchCreationPatterns;
    /**
     *  Automated branch creation branchConfig for the Amplify App. 
     */
    autoBranchCreationConfig?: AutoBranchCreationConfig;
    /**
     *  Repository for an Amplify App 
     */
    repository?: Repository;
    /**
     *  OAuth token for 3rd party source control system for an Amplify App, used to create webhook and read-only deploy key. OAuth token is not stored. 
     */
    oauthToken?: OauthToken;
    /**
     *  Personal Access token for 3rd party source control system for an Amplify App, used to create webhook and read-only deploy key. Token is not stored. 
     */
    accessToken?: AccessToken;
  }
  export interface UpdateAppResult {
    /**
     *  App structure for the updated App. 
     */
    app: App;
  }
  export interface UpdateBranchRequest {
    /**
     *  Unique Id for an Amplify App. 
     */
    appId: AppId;
    /**
     *  Name for the branch. 
     */
    branchName: BranchName;
    /**
     *  Description for the branch. 
     */
    description?: Description;
    /**
     *  Framework for the branch. 
     */
    framework?: Framework;
    /**
     *  Stage for the branch. 
     */
    stage?: Stage;
    /**
     *  Enables notifications for the branch. 
     */
    enableNotification?: EnableNotification;
    /**
     *  Enables auto building for the branch. 
     */
    enableAutoBuild?: EnableAutoBuild;
    /**
     *  Environment Variables for the branch. 
     */
    environmentVariables?: EnvironmentVariables;
    /**
     *  Basic Authorization credentials for the branch. 
     */
    basicAuthCredentials?: BasicAuthCredentials;
    /**
     *  Enables Basic Auth for the branch. 
     */
    enableBasicAuth?: EnableBasicAuth;
    /**
     *  BuildSpec for the branch. 
     */
    buildSpec?: BuildSpec;
    /**
     *  The content TTL for the website in seconds. 
     */
    ttl?: TTL;
    /**
     *  Display name for a branch, will use as the default domain prefix. 
     */
    displayName?: DisplayName;
    /**
     *  Enables Pull Request Preview for this branch. 
     */
    enablePullRequestPreview?: EnablePullRequestPreview;
  }
  export interface UpdateBranchResult {
    /**
     *  Branch structure for an Amplify App. 
     */
    branch: Branch;
  }
  export interface UpdateDomainAssociationRequest {
    /**
     *  Unique Id for an Amplify App. 
     */
    appId: AppId;
    /**
     *  Name of the domain. 
     */
    domainName: DomainName;
    /**
     *  Enables automated creation of Subdomains for branches. 
     */
    enableAutoSubDomain?: EnableAutoSubDomain;
    /**
     *  Setting structure for the Subdomain. 
     */
    subDomainSettings: SubDomainSettings;
  }
  export interface UpdateDomainAssociationResult {
    /**
     *  Domain Association structure. 
     */
    domainAssociation: DomainAssociation;
  }
  export type UpdateTime = Date;
  export interface UpdateWebhookRequest {
    /**
     *  Unique Id for a webhook. 
     */
    webhookId: WebhookId;
    /**
     *  Name for a branch, part of an Amplify App. 
     */
    branchName?: BranchName;
    /**
     *  Description for a webhook. 
     */
    description?: Description;
  }
  export interface UpdateWebhookResult {
    /**
     *  Webhook structure. 
     */
    webhook: Webhook;
  }
  export type UploadUrl = string;
  export type Verified = boolean;
  export interface Webhook {
    /**
     *  ARN for the webhook. 
     */
    webhookArn: WebhookArn;
    /**
     *  Id of the webhook. 
     */
    webhookId: WebhookId;
    /**
     *  Url of the webhook. 
     */
    webhookUrl: WebhookUrl;
    /**
     *  Name for a branch, part of an Amplify App. 
     */
    branchName: BranchName;
    /**
     *  Description for a webhook. 
     */
    description: Description;
    /**
     *  Create date / time for a webhook. 
     */
    createTime: CreateTime;
    /**
     *  Update date / time for a webhook. 
     */
    updateTime: UpdateTime;
  }
  export type WebhookArn = string;
  export type WebhookId = string;
  export type WebhookUrl = string;
  export type Webhooks = Webhook[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-07-25"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Amplify client.
   */
  export import Types = Amplify;
}
export = Amplify;
