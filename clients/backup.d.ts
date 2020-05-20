import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class Backup extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Backup.Types.ClientConfiguration)
  config: Config & Backup.Types.ClientConfiguration;
  /**
   * Backup plans are documents that contain information that AWS Backup uses to schedule tasks that create recovery points of resources. If you call CreateBackupPlan with a plan that already exists, an AlreadyExistsException is returned.
   */
  createBackupPlan(params: Backup.Types.CreateBackupPlanInput, callback?: (err: AWSError, data: Backup.Types.CreateBackupPlanOutput) => void): Request<Backup.Types.CreateBackupPlanOutput, AWSError>;
  /**
   * Backup plans are documents that contain information that AWS Backup uses to schedule tasks that create recovery points of resources. If you call CreateBackupPlan with a plan that already exists, an AlreadyExistsException is returned.
   */
  createBackupPlan(callback?: (err: AWSError, data: Backup.Types.CreateBackupPlanOutput) => void): Request<Backup.Types.CreateBackupPlanOutput, AWSError>;
  /**
   * Creates a JSON document that specifies a set of resources to assign to a backup plan. Resources can be included by specifying patterns for a ListOfTags and selected Resources.  For example, consider the following patterns:    Resources: "arn:aws:ec2:region:account-id:volume/volume-id"     ConditionKey:"department"   ConditionValue:"finance"   ConditionType:"STRINGEQUALS"     ConditionKey:"importance"   ConditionValue:"critical"   ConditionType:"STRINGEQUALS"    Using these patterns would back up all Amazon Elastic Block Store (Amazon EBS) volumes that are tagged as "department=finance", "importance=critical", in addition to an EBS volume with the specified volume Id. Resources and conditions are additive in that all resources that match the pattern are selected. This shouldn't be confused with a logical AND, where all conditions must match. The matching patterns are logically 'put together using the OR operator. In other words, all patterns that match are selected for backup.
   */
  createBackupSelection(params: Backup.Types.CreateBackupSelectionInput, callback?: (err: AWSError, data: Backup.Types.CreateBackupSelectionOutput) => void): Request<Backup.Types.CreateBackupSelectionOutput, AWSError>;
  /**
   * Creates a JSON document that specifies a set of resources to assign to a backup plan. Resources can be included by specifying patterns for a ListOfTags and selected Resources.  For example, consider the following patterns:    Resources: "arn:aws:ec2:region:account-id:volume/volume-id"     ConditionKey:"department"   ConditionValue:"finance"   ConditionType:"STRINGEQUALS"     ConditionKey:"importance"   ConditionValue:"critical"   ConditionType:"STRINGEQUALS"    Using these patterns would back up all Amazon Elastic Block Store (Amazon EBS) volumes that are tagged as "department=finance", "importance=critical", in addition to an EBS volume with the specified volume Id. Resources and conditions are additive in that all resources that match the pattern are selected. This shouldn't be confused with a logical AND, where all conditions must match. The matching patterns are logically 'put together using the OR operator. In other words, all patterns that match are selected for backup.
   */
  createBackupSelection(callback?: (err: AWSError, data: Backup.Types.CreateBackupSelectionOutput) => void): Request<Backup.Types.CreateBackupSelectionOutput, AWSError>;
  /**
   * Creates a logical container where backups are stored. A CreateBackupVault request includes a name, optionally one or more resource tags, an encryption key, and a request ID.  Sensitive data, such as passport numbers, should not be included the name of a backup vault. 
   */
  createBackupVault(params: Backup.Types.CreateBackupVaultInput, callback?: (err: AWSError, data: Backup.Types.CreateBackupVaultOutput) => void): Request<Backup.Types.CreateBackupVaultOutput, AWSError>;
  /**
   * Creates a logical container where backups are stored. A CreateBackupVault request includes a name, optionally one or more resource tags, an encryption key, and a request ID.  Sensitive data, such as passport numbers, should not be included the name of a backup vault. 
   */
  createBackupVault(callback?: (err: AWSError, data: Backup.Types.CreateBackupVaultOutput) => void): Request<Backup.Types.CreateBackupVaultOutput, AWSError>;
  /**
   * Deletes a backup plan. A backup plan can only be deleted after all associated selections of resources have been deleted. Deleting a backup plan deletes the current version of a backup plan. Previous versions, if any, will still exist.
   */
  deleteBackupPlan(params: Backup.Types.DeleteBackupPlanInput, callback?: (err: AWSError, data: Backup.Types.DeleteBackupPlanOutput) => void): Request<Backup.Types.DeleteBackupPlanOutput, AWSError>;
  /**
   * Deletes a backup plan. A backup plan can only be deleted after all associated selections of resources have been deleted. Deleting a backup plan deletes the current version of a backup plan. Previous versions, if any, will still exist.
   */
  deleteBackupPlan(callback?: (err: AWSError, data: Backup.Types.DeleteBackupPlanOutput) => void): Request<Backup.Types.DeleteBackupPlanOutput, AWSError>;
  /**
   * Deletes the resource selection associated with a backup plan that is specified by the SelectionId.
   */
  deleteBackupSelection(params: Backup.Types.DeleteBackupSelectionInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the resource selection associated with a backup plan that is specified by the SelectionId.
   */
  deleteBackupSelection(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the backup vault identified by its name. A vault can be deleted only if it is empty.
   */
  deleteBackupVault(params: Backup.Types.DeleteBackupVaultInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the backup vault identified by its name. A vault can be deleted only if it is empty.
   */
  deleteBackupVault(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the policy document that manages permissions on a backup vault.
   */
  deleteBackupVaultAccessPolicy(params: Backup.Types.DeleteBackupVaultAccessPolicyInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the policy document that manages permissions on a backup vault.
   */
  deleteBackupVaultAccessPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes event notifications for the specified backup vault.
   */
  deleteBackupVaultNotifications(params: Backup.Types.DeleteBackupVaultNotificationsInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes event notifications for the specified backup vault.
   */
  deleteBackupVaultNotifications(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the recovery point specified by a recovery point ID.
   */
  deleteRecoveryPoint(params: Backup.Types.DeleteRecoveryPointInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the recovery point specified by a recovery point ID.
   */
  deleteRecoveryPoint(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Returns metadata associated with creating a backup of a resource.
   */
  describeBackupJob(params: Backup.Types.DescribeBackupJobInput, callback?: (err: AWSError, data: Backup.Types.DescribeBackupJobOutput) => void): Request<Backup.Types.DescribeBackupJobOutput, AWSError>;
  /**
   * Returns metadata associated with creating a backup of a resource.
   */
  describeBackupJob(callback?: (err: AWSError, data: Backup.Types.DescribeBackupJobOutput) => void): Request<Backup.Types.DescribeBackupJobOutput, AWSError>;
  /**
   * Returns metadata about a backup vault specified by its name.
   */
  describeBackupVault(params: Backup.Types.DescribeBackupVaultInput, callback?: (err: AWSError, data: Backup.Types.DescribeBackupVaultOutput) => void): Request<Backup.Types.DescribeBackupVaultOutput, AWSError>;
  /**
   * Returns metadata about a backup vault specified by its name.
   */
  describeBackupVault(callback?: (err: AWSError, data: Backup.Types.DescribeBackupVaultOutput) => void): Request<Backup.Types.DescribeBackupVaultOutput, AWSError>;
  /**
   * Returns metadata associated with creating a copy of a resource.
   */
  describeCopyJob(params: Backup.Types.DescribeCopyJobInput, callback?: (err: AWSError, data: Backup.Types.DescribeCopyJobOutput) => void): Request<Backup.Types.DescribeCopyJobOutput, AWSError>;
  /**
   * Returns metadata associated with creating a copy of a resource.
   */
  describeCopyJob(callback?: (err: AWSError, data: Backup.Types.DescribeCopyJobOutput) => void): Request<Backup.Types.DescribeCopyJobOutput, AWSError>;
  /**
   * Returns information about a saved resource, including the last time it was backed up, its Amazon Resource Name (ARN), and the AWS service type of the saved resource.
   */
  describeProtectedResource(params: Backup.Types.DescribeProtectedResourceInput, callback?: (err: AWSError, data: Backup.Types.DescribeProtectedResourceOutput) => void): Request<Backup.Types.DescribeProtectedResourceOutput, AWSError>;
  /**
   * Returns information about a saved resource, including the last time it was backed up, its Amazon Resource Name (ARN), and the AWS service type of the saved resource.
   */
  describeProtectedResource(callback?: (err: AWSError, data: Backup.Types.DescribeProtectedResourceOutput) => void): Request<Backup.Types.DescribeProtectedResourceOutput, AWSError>;
  /**
   * Returns metadata associated with a recovery point, including ID, status, encryption, and lifecycle.
   */
  describeRecoveryPoint(params: Backup.Types.DescribeRecoveryPointInput, callback?: (err: AWSError, data: Backup.Types.DescribeRecoveryPointOutput) => void): Request<Backup.Types.DescribeRecoveryPointOutput, AWSError>;
  /**
   * Returns metadata associated with a recovery point, including ID, status, encryption, and lifecycle.
   */
  describeRecoveryPoint(callback?: (err: AWSError, data: Backup.Types.DescribeRecoveryPointOutput) => void): Request<Backup.Types.DescribeRecoveryPointOutput, AWSError>;
  /**
   * Returns the current service opt-in settings for the region. If the service has a value set to true, AWS Backup will attempt to protect that service's resources in this region, when included in an on-demand backup or scheduled backup plan. If the value is set to false for a service, AWS Backup will not attempt to protect that service's resources in this region.
   */
  describeRegionSettings(params: Backup.Types.DescribeRegionSettingsInput, callback?: (err: AWSError, data: Backup.Types.DescribeRegionSettingsOutput) => void): Request<Backup.Types.DescribeRegionSettingsOutput, AWSError>;
  /**
   * Returns the current service opt-in settings for the region. If the service has a value set to true, AWS Backup will attempt to protect that service's resources in this region, when included in an on-demand backup or scheduled backup plan. If the value is set to false for a service, AWS Backup will not attempt to protect that service's resources in this region.
   */
  describeRegionSettings(callback?: (err: AWSError, data: Backup.Types.DescribeRegionSettingsOutput) => void): Request<Backup.Types.DescribeRegionSettingsOutput, AWSError>;
  /**
   * Returns metadata associated with a restore job that is specified by a job ID.
   */
  describeRestoreJob(params: Backup.Types.DescribeRestoreJobInput, callback?: (err: AWSError, data: Backup.Types.DescribeRestoreJobOutput) => void): Request<Backup.Types.DescribeRestoreJobOutput, AWSError>;
  /**
   * Returns metadata associated with a restore job that is specified by a job ID.
   */
  describeRestoreJob(callback?: (err: AWSError, data: Backup.Types.DescribeRestoreJobOutput) => void): Request<Backup.Types.DescribeRestoreJobOutput, AWSError>;
  /**
   * Returns the backup plan that is specified by the plan ID as a backup template.
   */
  exportBackupPlanTemplate(params: Backup.Types.ExportBackupPlanTemplateInput, callback?: (err: AWSError, data: Backup.Types.ExportBackupPlanTemplateOutput) => void): Request<Backup.Types.ExportBackupPlanTemplateOutput, AWSError>;
  /**
   * Returns the backup plan that is specified by the plan ID as a backup template.
   */
  exportBackupPlanTemplate(callback?: (err: AWSError, data: Backup.Types.ExportBackupPlanTemplateOutput) => void): Request<Backup.Types.ExportBackupPlanTemplateOutput, AWSError>;
  /**
   * Returns the body of a backup plan in JSON format, in addition to plan metadata.
   */
  getBackupPlan(params: Backup.Types.GetBackupPlanInput, callback?: (err: AWSError, data: Backup.Types.GetBackupPlanOutput) => void): Request<Backup.Types.GetBackupPlanOutput, AWSError>;
  /**
   * Returns the body of a backup plan in JSON format, in addition to plan metadata.
   */
  getBackupPlan(callback?: (err: AWSError, data: Backup.Types.GetBackupPlanOutput) => void): Request<Backup.Types.GetBackupPlanOutput, AWSError>;
  /**
   * Returns a valid JSON document specifying a backup plan or an error.
   */
  getBackupPlanFromJSON(params: Backup.Types.GetBackupPlanFromJSONInput, callback?: (err: AWSError, data: Backup.Types.GetBackupPlanFromJSONOutput) => void): Request<Backup.Types.GetBackupPlanFromJSONOutput, AWSError>;
  /**
   * Returns a valid JSON document specifying a backup plan or an error.
   */
  getBackupPlanFromJSON(callback?: (err: AWSError, data: Backup.Types.GetBackupPlanFromJSONOutput) => void): Request<Backup.Types.GetBackupPlanFromJSONOutput, AWSError>;
  /**
   * Returns the template specified by its templateId as a backup plan.
   */
  getBackupPlanFromTemplate(params: Backup.Types.GetBackupPlanFromTemplateInput, callback?: (err: AWSError, data: Backup.Types.GetBackupPlanFromTemplateOutput) => void): Request<Backup.Types.GetBackupPlanFromTemplateOutput, AWSError>;
  /**
   * Returns the template specified by its templateId as a backup plan.
   */
  getBackupPlanFromTemplate(callback?: (err: AWSError, data: Backup.Types.GetBackupPlanFromTemplateOutput) => void): Request<Backup.Types.GetBackupPlanFromTemplateOutput, AWSError>;
  /**
   * Returns selection metadata and a document in JSON format that specifies a list of resources that are associated with a backup plan.
   */
  getBackupSelection(params: Backup.Types.GetBackupSelectionInput, callback?: (err: AWSError, data: Backup.Types.GetBackupSelectionOutput) => void): Request<Backup.Types.GetBackupSelectionOutput, AWSError>;
  /**
   * Returns selection metadata and a document in JSON format that specifies a list of resources that are associated with a backup plan.
   */
  getBackupSelection(callback?: (err: AWSError, data: Backup.Types.GetBackupSelectionOutput) => void): Request<Backup.Types.GetBackupSelectionOutput, AWSError>;
  /**
   * Returns the access policy document that is associated with the named backup vault.
   */
  getBackupVaultAccessPolicy(params: Backup.Types.GetBackupVaultAccessPolicyInput, callback?: (err: AWSError, data: Backup.Types.GetBackupVaultAccessPolicyOutput) => void): Request<Backup.Types.GetBackupVaultAccessPolicyOutput, AWSError>;
  /**
   * Returns the access policy document that is associated with the named backup vault.
   */
  getBackupVaultAccessPolicy(callback?: (err: AWSError, data: Backup.Types.GetBackupVaultAccessPolicyOutput) => void): Request<Backup.Types.GetBackupVaultAccessPolicyOutput, AWSError>;
  /**
   * Returns event notifications for the specified backup vault.
   */
  getBackupVaultNotifications(params: Backup.Types.GetBackupVaultNotificationsInput, callback?: (err: AWSError, data: Backup.Types.GetBackupVaultNotificationsOutput) => void): Request<Backup.Types.GetBackupVaultNotificationsOutput, AWSError>;
  /**
   * Returns event notifications for the specified backup vault.
   */
  getBackupVaultNotifications(callback?: (err: AWSError, data: Backup.Types.GetBackupVaultNotificationsOutput) => void): Request<Backup.Types.GetBackupVaultNotificationsOutput, AWSError>;
  /**
   * Returns a set of metadata key-value pairs that were used to create the backup.
   */
  getRecoveryPointRestoreMetadata(params: Backup.Types.GetRecoveryPointRestoreMetadataInput, callback?: (err: AWSError, data: Backup.Types.GetRecoveryPointRestoreMetadataOutput) => void): Request<Backup.Types.GetRecoveryPointRestoreMetadataOutput, AWSError>;
  /**
   * Returns a set of metadata key-value pairs that were used to create the backup.
   */
  getRecoveryPointRestoreMetadata(callback?: (err: AWSError, data: Backup.Types.GetRecoveryPointRestoreMetadataOutput) => void): Request<Backup.Types.GetRecoveryPointRestoreMetadataOutput, AWSError>;
  /**
   * Returns the AWS resource types supported by AWS Backup.
   */
  getSupportedResourceTypes(callback?: (err: AWSError, data: Backup.Types.GetSupportedResourceTypesOutput) => void): Request<Backup.Types.GetSupportedResourceTypesOutput, AWSError>;
  /**
   * Returns metadata about your backup jobs.
   */
  listBackupJobs(params: Backup.Types.ListBackupJobsInput, callback?: (err: AWSError, data: Backup.Types.ListBackupJobsOutput) => void): Request<Backup.Types.ListBackupJobsOutput, AWSError>;
  /**
   * Returns metadata about your backup jobs.
   */
  listBackupJobs(callback?: (err: AWSError, data: Backup.Types.ListBackupJobsOutput) => void): Request<Backup.Types.ListBackupJobsOutput, AWSError>;
  /**
   * Returns metadata of your saved backup plan templates, including the template ID, name, and the creation and deletion dates.
   */
  listBackupPlanTemplates(params: Backup.Types.ListBackupPlanTemplatesInput, callback?: (err: AWSError, data: Backup.Types.ListBackupPlanTemplatesOutput) => void): Request<Backup.Types.ListBackupPlanTemplatesOutput, AWSError>;
  /**
   * Returns metadata of your saved backup plan templates, including the template ID, name, and the creation and deletion dates.
   */
  listBackupPlanTemplates(callback?: (err: AWSError, data: Backup.Types.ListBackupPlanTemplatesOutput) => void): Request<Backup.Types.ListBackupPlanTemplatesOutput, AWSError>;
  /**
   * Returns version metadata of your backup plans, including Amazon Resource Names (ARNs), backup plan IDs, creation and deletion dates, plan names, and version IDs.
   */
  listBackupPlanVersions(params: Backup.Types.ListBackupPlanVersionsInput, callback?: (err: AWSError, data: Backup.Types.ListBackupPlanVersionsOutput) => void): Request<Backup.Types.ListBackupPlanVersionsOutput, AWSError>;
  /**
   * Returns version metadata of your backup plans, including Amazon Resource Names (ARNs), backup plan IDs, creation and deletion dates, plan names, and version IDs.
   */
  listBackupPlanVersions(callback?: (err: AWSError, data: Backup.Types.ListBackupPlanVersionsOutput) => void): Request<Backup.Types.ListBackupPlanVersionsOutput, AWSError>;
  /**
   * Returns metadata of your saved backup plans, including Amazon Resource Names (ARNs), plan IDs, creation and deletion dates, version IDs, plan names, and creator request IDs.
   */
  listBackupPlans(params: Backup.Types.ListBackupPlansInput, callback?: (err: AWSError, data: Backup.Types.ListBackupPlansOutput) => void): Request<Backup.Types.ListBackupPlansOutput, AWSError>;
  /**
   * Returns metadata of your saved backup plans, including Amazon Resource Names (ARNs), plan IDs, creation and deletion dates, version IDs, plan names, and creator request IDs.
   */
  listBackupPlans(callback?: (err: AWSError, data: Backup.Types.ListBackupPlansOutput) => void): Request<Backup.Types.ListBackupPlansOutput, AWSError>;
  /**
   * Returns an array containing metadata of the resources associated with the target backup plan.
   */
  listBackupSelections(params: Backup.Types.ListBackupSelectionsInput, callback?: (err: AWSError, data: Backup.Types.ListBackupSelectionsOutput) => void): Request<Backup.Types.ListBackupSelectionsOutput, AWSError>;
  /**
   * Returns an array containing metadata of the resources associated with the target backup plan.
   */
  listBackupSelections(callback?: (err: AWSError, data: Backup.Types.ListBackupSelectionsOutput) => void): Request<Backup.Types.ListBackupSelectionsOutput, AWSError>;
  /**
   * Returns a list of recovery point storage containers along with information about them.
   */
  listBackupVaults(params: Backup.Types.ListBackupVaultsInput, callback?: (err: AWSError, data: Backup.Types.ListBackupVaultsOutput) => void): Request<Backup.Types.ListBackupVaultsOutput, AWSError>;
  /**
   * Returns a list of recovery point storage containers along with information about them.
   */
  listBackupVaults(callback?: (err: AWSError, data: Backup.Types.ListBackupVaultsOutput) => void): Request<Backup.Types.ListBackupVaultsOutput, AWSError>;
  /**
   * Returns metadata about your copy jobs.
   */
  listCopyJobs(params: Backup.Types.ListCopyJobsInput, callback?: (err: AWSError, data: Backup.Types.ListCopyJobsOutput) => void): Request<Backup.Types.ListCopyJobsOutput, AWSError>;
  /**
   * Returns metadata about your copy jobs.
   */
  listCopyJobs(callback?: (err: AWSError, data: Backup.Types.ListCopyJobsOutput) => void): Request<Backup.Types.ListCopyJobsOutput, AWSError>;
  /**
   * Returns an array of resources successfully backed up by AWS Backup, including the time the resource was saved, an Amazon Resource Name (ARN) of the resource, and a resource type.
   */
  listProtectedResources(params: Backup.Types.ListProtectedResourcesInput, callback?: (err: AWSError, data: Backup.Types.ListProtectedResourcesOutput) => void): Request<Backup.Types.ListProtectedResourcesOutput, AWSError>;
  /**
   * Returns an array of resources successfully backed up by AWS Backup, including the time the resource was saved, an Amazon Resource Name (ARN) of the resource, and a resource type.
   */
  listProtectedResources(callback?: (err: AWSError, data: Backup.Types.ListProtectedResourcesOutput) => void): Request<Backup.Types.ListProtectedResourcesOutput, AWSError>;
  /**
   * Returns detailed information about the recovery points stored in a backup vault.
   */
  listRecoveryPointsByBackupVault(params: Backup.Types.ListRecoveryPointsByBackupVaultInput, callback?: (err: AWSError, data: Backup.Types.ListRecoveryPointsByBackupVaultOutput) => void): Request<Backup.Types.ListRecoveryPointsByBackupVaultOutput, AWSError>;
  /**
   * Returns detailed information about the recovery points stored in a backup vault.
   */
  listRecoveryPointsByBackupVault(callback?: (err: AWSError, data: Backup.Types.ListRecoveryPointsByBackupVaultOutput) => void): Request<Backup.Types.ListRecoveryPointsByBackupVaultOutput, AWSError>;
  /**
   * Returns detailed information about recovery points of the type specified by a resource Amazon Resource Name (ARN).
   */
  listRecoveryPointsByResource(params: Backup.Types.ListRecoveryPointsByResourceInput, callback?: (err: AWSError, data: Backup.Types.ListRecoveryPointsByResourceOutput) => void): Request<Backup.Types.ListRecoveryPointsByResourceOutput, AWSError>;
  /**
   * Returns detailed information about recovery points of the type specified by a resource Amazon Resource Name (ARN).
   */
  listRecoveryPointsByResource(callback?: (err: AWSError, data: Backup.Types.ListRecoveryPointsByResourceOutput) => void): Request<Backup.Types.ListRecoveryPointsByResourceOutput, AWSError>;
  /**
   * Returns a list of jobs that AWS Backup initiated to restore a saved resource, including metadata about the recovery process.
   */
  listRestoreJobs(params: Backup.Types.ListRestoreJobsInput, callback?: (err: AWSError, data: Backup.Types.ListRestoreJobsOutput) => void): Request<Backup.Types.ListRestoreJobsOutput, AWSError>;
  /**
   * Returns a list of jobs that AWS Backup initiated to restore a saved resource, including metadata about the recovery process.
   */
  listRestoreJobs(callback?: (err: AWSError, data: Backup.Types.ListRestoreJobsOutput) => void): Request<Backup.Types.ListRestoreJobsOutput, AWSError>;
  /**
   * Returns a list of key-value pairs assigned to a target recovery point, backup plan, or backup vault.   ListTags are currently only supported with Amazon EFS backups. 
   */
  listTags(params: Backup.Types.ListTagsInput, callback?: (err: AWSError, data: Backup.Types.ListTagsOutput) => void): Request<Backup.Types.ListTagsOutput, AWSError>;
  /**
   * Returns a list of key-value pairs assigned to a target recovery point, backup plan, or backup vault.   ListTags are currently only supported with Amazon EFS backups. 
   */
  listTags(callback?: (err: AWSError, data: Backup.Types.ListTagsOutput) => void): Request<Backup.Types.ListTagsOutput, AWSError>;
  /**
   * Sets a resource-based policy that is used to manage access permissions on the target backup vault. Requires a backup vault name and an access policy document in JSON format.
   */
  putBackupVaultAccessPolicy(params: Backup.Types.PutBackupVaultAccessPolicyInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets a resource-based policy that is used to manage access permissions on the target backup vault. Requires a backup vault name and an access policy document in JSON format.
   */
  putBackupVaultAccessPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Turns on notifications on a backup vault for the specified topic and events.
   */
  putBackupVaultNotifications(params: Backup.Types.PutBackupVaultNotificationsInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Turns on notifications on a backup vault for the specified topic and events.
   */
  putBackupVaultNotifications(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Starts a job to create a one-time backup of the specified resource.
   */
  startBackupJob(params: Backup.Types.StartBackupJobInput, callback?: (err: AWSError, data: Backup.Types.StartBackupJobOutput) => void): Request<Backup.Types.StartBackupJobOutput, AWSError>;
  /**
   * Starts a job to create a one-time backup of the specified resource.
   */
  startBackupJob(callback?: (err: AWSError, data: Backup.Types.StartBackupJobOutput) => void): Request<Backup.Types.StartBackupJobOutput, AWSError>;
  /**
   * Starts a job to create a one-time copy of the specified resource.
   */
  startCopyJob(params: Backup.Types.StartCopyJobInput, callback?: (err: AWSError, data: Backup.Types.StartCopyJobOutput) => void): Request<Backup.Types.StartCopyJobOutput, AWSError>;
  /**
   * Starts a job to create a one-time copy of the specified resource.
   */
  startCopyJob(callback?: (err: AWSError, data: Backup.Types.StartCopyJobOutput) => void): Request<Backup.Types.StartCopyJobOutput, AWSError>;
  /**
   * Recovers the saved resource identified by an Amazon Resource Name (ARN).  If the resource ARN is included in the request, then the last complete backup of that resource is recovered. If the ARN of a recovery point is supplied, then that recovery point is restored.
   */
  startRestoreJob(params: Backup.Types.StartRestoreJobInput, callback?: (err: AWSError, data: Backup.Types.StartRestoreJobOutput) => void): Request<Backup.Types.StartRestoreJobOutput, AWSError>;
  /**
   * Recovers the saved resource identified by an Amazon Resource Name (ARN).  If the resource ARN is included in the request, then the last complete backup of that resource is recovered. If the ARN of a recovery point is supplied, then that recovery point is restored.
   */
  startRestoreJob(callback?: (err: AWSError, data: Backup.Types.StartRestoreJobOutput) => void): Request<Backup.Types.StartRestoreJobOutput, AWSError>;
  /**
   * Attempts to cancel a job to create a one-time backup of a resource.
   */
  stopBackupJob(params: Backup.Types.StopBackupJobInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Attempts to cancel a job to create a one-time backup of a resource.
   */
  stopBackupJob(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Assigns a set of key-value pairs to a recovery point, backup plan, or backup vault identified by an Amazon Resource Name (ARN).
   */
  tagResource(params: Backup.Types.TagResourceInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Assigns a set of key-value pairs to a recovery point, backup plan, or backup vault identified by an Amazon Resource Name (ARN).
   */
  tagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes a set of key-value pairs from a recovery point, backup plan, or backup vault identified by an Amazon Resource Name (ARN)
   */
  untagResource(params: Backup.Types.UntagResourceInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes a set of key-value pairs from a recovery point, backup plan, or backup vault identified by an Amazon Resource Name (ARN)
   */
  untagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Replaces the body of a saved backup plan identified by its backupPlanId with the input document in JSON format. The new version is uniquely identified by a VersionId.
   */
  updateBackupPlan(params: Backup.Types.UpdateBackupPlanInput, callback?: (err: AWSError, data: Backup.Types.UpdateBackupPlanOutput) => void): Request<Backup.Types.UpdateBackupPlanOutput, AWSError>;
  /**
   * Replaces the body of a saved backup plan identified by its backupPlanId with the input document in JSON format. The new version is uniquely identified by a VersionId.
   */
  updateBackupPlan(callback?: (err: AWSError, data: Backup.Types.UpdateBackupPlanOutput) => void): Request<Backup.Types.UpdateBackupPlanOutput, AWSError>;
  /**
   * Sets the transition lifecycle of a recovery point. The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. AWS Backup transitions and expires backups automatically according to the lifecycle that you define.  Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold. 
   */
  updateRecoveryPointLifecycle(params: Backup.Types.UpdateRecoveryPointLifecycleInput, callback?: (err: AWSError, data: Backup.Types.UpdateRecoveryPointLifecycleOutput) => void): Request<Backup.Types.UpdateRecoveryPointLifecycleOutput, AWSError>;
  /**
   * Sets the transition lifecycle of a recovery point. The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. AWS Backup transitions and expires backups automatically according to the lifecycle that you define.  Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold. 
   */
  updateRecoveryPointLifecycle(callback?: (err: AWSError, data: Backup.Types.UpdateRecoveryPointLifecycleOutput) => void): Request<Backup.Types.UpdateRecoveryPointLifecycleOutput, AWSError>;
  /**
   * Updates the current service opt-in settings for the region. If the service has a value set to true, AWS Backup will attempt to protect that service's resources in this region, when included in an on-demand backup or scheduled backup plan. If the value is set to false for a service, AWS Backup will not attempt to protect that service's resources in this region.
   */
  updateRegionSettings(params: Backup.Types.UpdateRegionSettingsInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the current service opt-in settings for the region. If the service has a value set to true, AWS Backup will attempt to protect that service's resources in this region, when included in an on-demand backup or scheduled backup plan. If the value is set to false for a service, AWS Backup will not attempt to protect that service's resources in this region.
   */
  updateRegionSettings(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
}
declare namespace Backup {
  export type ARN = string;
  export interface BackupJob {
    /**
     * Uniquely identifies a request to AWS Backup to back up a resource.
     */
    BackupJobId?: string;
    /**
     * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
     */
    BackupVaultName?: BackupVaultName;
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example, arn:aws:backup:us-east-1:123456789012:vault:aBackupVault.
     */
    BackupVaultArn?: ARN;
    /**
     * An ARN that uniquely identifies a recovery point; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.
     */
    RecoveryPointArn?: ARN;
    /**
     * An ARN that uniquely identifies a resource. The format of the ARN depends on the resource type.
     */
    ResourceArn?: ARN;
    /**
     * The date and time a backup job is created, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
     */
    CreationDate?: timestamp;
    /**
     * The date and time a job to create a backup job is completed, in Unix format and Coordinated Universal Time (UTC). The value of CompletionDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
     */
    CompletionDate?: timestamp;
    /**
     * The current state of a resource recovery point.
     */
    State?: BackupJobState;
    /**
     * A detailed message explaining the status of the job to back up a resource.
     */
    StatusMessage?: string;
    /**
     * Contains an estimated percentage complete of a job at the time the job status was queried.
     */
    PercentDone?: string;
    /**
     * The size, in bytes, of a backup.
     */
    BackupSizeInBytes?: Long;
    /**
     * Specifies the IAM role ARN used to create the target recovery point; for example, arn:aws:iam::123456789012:role/S3Access.
     */
    IamRoleArn?: IAMRoleArn;
    /**
     * Contains identifying information about the creation of a backup job, including the BackupPlanArn, BackupPlanId, BackupPlanVersion, and BackupRuleId of the backup plan used to create it.
     */
    CreatedBy?: RecoveryPointCreator;
    /**
     * The date and time a job to back up resources is expected to be completed, in Unix format and Coordinated Universal Time (UTC). The value of ExpectedCompletionDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
     */
    ExpectedCompletionDate?: timestamp;
    /**
     * Specifies the time in Unix format and Coordinated Universal Time (UTC) when a backup job must be started before it is canceled. The value is calculated by adding the start window to the scheduled time. So if the scheduled time were 6:00 PM and the start window is 2 hours, the StartBy time would be 8:00 PM on the date specified. The value of StartBy is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
     */
    StartBy?: timestamp;
    /**
     * The type of AWS resource to be backed up; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database.
     */
    ResourceType?: ResourceType;
    /**
     * The size in bytes transferred to a backup vault at the time that the job status was queried.
     */
    BytesTransferred?: Long;
  }
  export type BackupJobState = "CREATED"|"PENDING"|"RUNNING"|"ABORTING"|"ABORTED"|"COMPLETED"|"FAILED"|"EXPIRED"|string;
  export type BackupJobsList = BackupJob[];
  export interface BackupPlan {
    /**
     * The display name of a backup plan.
     */
    BackupPlanName: BackupPlanName;
    /**
     * An array of BackupRule objects, each of which specifies a scheduled task that is used to back up a selection of resources. 
     */
    Rules: BackupRules;
  }
  export interface BackupPlanInput {
    /**
     * The display name of a backup plan.
     */
    BackupPlanName: BackupPlanName;
    /**
     * An array of BackupRule objects, each of which specifies a scheduled task that is used to back up a selection of resources.
     */
    Rules: BackupRulesInput;
  }
  export type BackupPlanName = string;
  export type BackupPlanTemplatesList = BackupPlanTemplatesListMember[];
  export interface BackupPlanTemplatesListMember {
    /**
     * Uniquely identifies a stored backup plan template.
     */
    BackupPlanTemplateId?: string;
    /**
     * The optional display name of a backup plan template.
     */
    BackupPlanTemplateName?: string;
  }
  export type BackupPlanVersionsList = BackupPlansListMember[];
  export type BackupPlansList = BackupPlansListMember[];
  export interface BackupPlansListMember {
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example, arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50.
     */
    BackupPlanArn?: ARN;
    /**
     * Uniquely identifies a backup plan.
     */
    BackupPlanId?: string;
    /**
     * The date and time a resource backup plan is created, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
     */
    CreationDate?: timestamp;
    /**
     * The date and time a backup plan is deleted, in Unix format and Coordinated Universal Time (UTC). The value of DeletionDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
     */
    DeletionDate?: timestamp;
    /**
     * Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes long. Version IDs cannot be edited.
     */
    VersionId?: string;
    /**
     * The display name of a saved backup plan.
     */
    BackupPlanName?: BackupPlanName;
    /**
     * A unique string that identifies the request and allows failed requests to be retried without the risk of executing the operation twice.
     */
    CreatorRequestId?: string;
    /**
     * The last time a job to back up resources was executed with this rule. A date and time, in Unix format and Coordinated Universal Time (UTC). The value of LastExecutionDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
     */
    LastExecutionDate?: timestamp;
  }
  export interface BackupRule {
    /**
     * An optional display name for a backup rule.
     */
    RuleName: BackupRuleName;
    /**
     * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
     */
    TargetBackupVaultName: BackupVaultName;
    /**
     * A CRON expression specifying when AWS Backup initiates a backup job.
     */
    ScheduleExpression?: CronExpression;
    /**
     * A value in minutes after a backup is scheduled before a job will be canceled if it doesn't start successfully. This value is optional.
     */
    StartWindowMinutes?: WindowMinutes;
    /**
     * A value in minutes after a backup job is successfully started before it must be completed or it will be canceled by AWS Backup. This value is optional.
     */
    CompletionWindowMinutes?: WindowMinutes;
    /**
     * The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. AWS Backup transitions and expires backups automatically according to the lifecycle that you define.  Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold. 
     */
    Lifecycle?: Lifecycle;
    /**
     * An array of key-value pair strings that are assigned to resources that are associated with this rule when restored from backup.
     */
    RecoveryPointTags?: Tags;
    /**
     * Uniquely identifies a rule that is used to schedule the backup of a selection of resources.
     */
    RuleId?: string;
    /**
     * An array of CopyAction objects, which contains the details of the copy operation.
     */
    CopyActions?: CopyActions;
  }
  export interface BackupRuleInput {
    /**
     * An optional display name for a backup rule.
     */
    RuleName: BackupRuleName;
    /**
     * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
     */
    TargetBackupVaultName: BackupVaultName;
    /**
     * A CRON expression specifying when AWS Backup initiates a backup job.
     */
    ScheduleExpression?: CronExpression;
    /**
     * A value in minutes after a backup is scheduled before a job will be canceled if it doesn't start successfully. This value is optional.
     */
    StartWindowMinutes?: WindowMinutes;
    /**
     * A value in minutes after a backup job is successfully started before it must be completed or it will be canceled by AWS Backup. This value is optional.
     */
    CompletionWindowMinutes?: WindowMinutes;
    /**
     * The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. AWS Backup will transition and expire backups automatically according to the lifecycle that you define.  Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold. 
     */
    Lifecycle?: Lifecycle;
    /**
     * To help organize your resources, you can assign your own metadata to the resources that you create. Each tag is a key-value pair.
     */
    RecoveryPointTags?: Tags;
    /**
     * An array of CopyAction objects, which contains the details of the copy operation.
     */
    CopyActions?: CopyActions;
  }
  export type BackupRuleName = string;
  export type BackupRules = BackupRule[];
  export type BackupRulesInput = BackupRuleInput[];
  export interface BackupSelection {
    /**
     * The display name of a resource selection document.
     */
    SelectionName: BackupSelectionName;
    /**
     * The ARN of the IAM role that AWS Backup uses to authenticate when restoring the target resource; for example, arn:aws:iam::123456789012:role/S3Access.
     */
    IamRoleArn: IAMRoleArn;
    /**
     * An array of strings that contain Amazon Resource Names (ARNs) of resources to assign to a backup plan.
     */
    Resources?: ResourceArns;
    /**
     * An array of conditions used to specify a set of resources to assign to a backup plan; for example, "STRINGEQUALS": {"ec2:ResourceTag/Department": "accounting".
     */
    ListOfTags?: ListOfTags;
  }
  export type BackupSelectionName = string;
  export type BackupSelectionsList = BackupSelectionsListMember[];
  export interface BackupSelectionsListMember {
    /**
     * Uniquely identifies a request to assign a set of resources to a backup plan.
     */
    SelectionId?: string;
    /**
     * The display name of a resource selection document.
     */
    SelectionName?: BackupSelectionName;
    /**
     * Uniquely identifies a backup plan.
     */
    BackupPlanId?: string;
    /**
     * The date and time a backup plan is created, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
     */
    CreationDate?: timestamp;
    /**
     * A unique string that identifies the request and allows failed requests to be retried without the risk of executing the operation twice.
     */
    CreatorRequestId?: string;
    /**
     * Specifies the IAM role Amazon Resource Name (ARN) to create the target recovery point; for example, arn:aws:iam::123456789012:role/S3Access.
     */
    IamRoleArn?: IAMRoleArn;
  }
  export type BackupVaultEvent = "BACKUP_JOB_STARTED"|"BACKUP_JOB_COMPLETED"|"BACKUP_JOB_SUCCESSFUL"|"BACKUP_JOB_FAILED"|"BACKUP_JOB_EXPIRED"|"RESTORE_JOB_STARTED"|"RESTORE_JOB_COMPLETED"|"RESTORE_JOB_SUCCESSFUL"|"RESTORE_JOB_FAILED"|"COPY_JOB_STARTED"|"COPY_JOB_SUCCESSFUL"|"COPY_JOB_FAILED"|"RECOVERY_POINT_MODIFIED"|"BACKUP_PLAN_CREATED"|"BACKUP_PLAN_MODIFIED"|string;
  export type BackupVaultEvents = BackupVaultEvent[];
  export type BackupVaultList = BackupVaultListMember[];
  export interface BackupVaultListMember {
    /**
     * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
     */
    BackupVaultName?: BackupVaultName;
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example, arn:aws:backup:us-east-1:123456789012:vault:aBackupVault.
     */
    BackupVaultArn?: ARN;
    /**
     * The date and time a resource backup is created, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
     */
    CreationDate?: timestamp;
    /**
     * The server-side encryption key that is used to protect your backups; for example, arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab.
     */
    EncryptionKeyArn?: ARN;
    /**
     * A unique string that identifies the request and allows failed requests to be retried without the risk of executing the operation twice.
     */
    CreatorRequestId?: string;
    /**
     * The number of recovery points that are stored in a backup vault.
     */
    NumberOfRecoveryPoints?: long;
  }
  export type BackupVaultName = string;
  export type Boolean = boolean;
  export interface CalculatedLifecycle {
    /**
     * A timestamp that specifies when to transition a recovery point to cold storage.
     */
    MoveToColdStorageAt?: timestamp;
    /**
     * A timestamp that specifies when to delete a recovery point.
     */
    DeleteAt?: timestamp;
  }
  export interface Condition {
    /**
     * An operation, such as STRINGEQUALS, that is applied to a key-value pair used to filter resources in a selection.
     */
    ConditionType: ConditionType;
    /**
     * The key in a key-value pair. For example, in "ec2:ResourceTag/Department": "accounting", "ec2:ResourceTag/Department" is the key.
     */
    ConditionKey: ConditionKey;
    /**
     * The value in a key-value pair. For example, in "ec2:ResourceTag/Department": "accounting", "accounting" is the value.
     */
    ConditionValue: ConditionValue;
  }
  export type ConditionKey = string;
  export type ConditionType = "STRINGEQUALS"|string;
  export type ConditionValue = string;
  export interface CopyAction {
    Lifecycle?: Lifecycle;
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies the destination backup vault for the copied backup. For example, arn:aws:backup:us-east-1:123456789012:vault:aBackupVault.
     */
    DestinationBackupVaultArn: ARN;
  }
  export type CopyActions = CopyAction[];
  export interface CopyJob {
    /**
     * Uniquely identifies a copy job.
     */
    CopyJobId?: string;
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies a source copy vault; for example, arn:aws:backup:us-east-1:123456789012:vault:aBackupVault. 
     */
    SourceBackupVaultArn?: ARN;
    /**
     * An ARN that uniquely identifies a source recovery point; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.
     */
    SourceRecoveryPointArn?: ARN;
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies a destination copy vault; for example, arn:aws:backup:us-east-1:123456789012:vault:aBackupVault.
     */
    DestinationBackupVaultArn?: ARN;
    /**
     * An ARN that uniquely identifies a destination recovery point; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.
     */
    DestinationRecoveryPointArn?: ARN;
    /**
     * The AWS resource to be copied; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database.
     */
    ResourceArn?: ARN;
    /**
     * The date and time a copy job is created, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM. 
     */
    CreationDate?: timestamp;
    /**
     * The date and time a copy job is completed, in Unix format and Coordinated Universal Time (UTC). The value of CompletionDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM. 
     */
    CompletionDate?: timestamp;
    /**
     * The current state of a copy job.
     */
    State?: CopyJobState;
    /**
     * A detailed message explaining the status of the job to copy a resource.
     */
    StatusMessage?: string;
    /**
     * The size, in bytes, of a copy job.
     */
    BackupSizeInBytes?: Long;
    /**
     * Specifies the IAM role ARN used to copy the target recovery point; for example, arn:aws:iam::123456789012:role/S3Access.
     */
    IamRoleArn?: IAMRoleArn;
    CreatedBy?: RecoveryPointCreator;
    /**
     * The type of AWS resource to be copied; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database.
     */
    ResourceType?: ResourceType;
  }
  export type CopyJobState = "CREATED"|"RUNNING"|"COMPLETED"|"FAILED"|string;
  export type CopyJobsList = CopyJob[];
  export interface CreateBackupPlanInput {
    /**
     * Specifies the body of a backup plan. Includes a BackupPlanName and one or more sets of Rules.
     */
    BackupPlan: BackupPlanInput;
    /**
     * To help organize your resources, you can assign your own metadata to the resources that you create. Each tag is a key-value pair. The specified tags are assigned to all backups created with this plan.
     */
    BackupPlanTags?: Tags;
    /**
     * Identifies the request and allows failed requests to be retried without the risk of executing the operation twice. If the request includes a CreatorRequestId that matches an existing backup plan, that plan is returned. This parameter is optional.
     */
    CreatorRequestId?: string;
  }
  export interface CreateBackupPlanOutput {
    /**
     * Uniquely identifies a backup plan.
     */
    BackupPlanId?: string;
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example, arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50.
     */
    BackupPlanArn?: ARN;
    /**
     * The date and time that a backup plan is created, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
     */
    CreationDate?: timestamp;
    /**
     * Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes long. They cannot be edited.
     */
    VersionId?: string;
  }
  export interface CreateBackupSelectionInput {
    /**
     * Uniquely identifies the backup plan to be associated with the selection of resources.
     */
    BackupPlanId: string;
    /**
     * Specifies the body of a request to assign a set of resources to a backup plan.
     */
    BackupSelection: BackupSelection;
    /**
     * A unique string that identifies the request and allows failed requests to be retried without the risk of executing the operation twice.
     */
    CreatorRequestId?: string;
  }
  export interface CreateBackupSelectionOutput {
    /**
     * Uniquely identifies the body of a request to assign a set of resources to a backup plan.
     */
    SelectionId?: string;
    /**
     * Uniquely identifies a backup plan.
     */
    BackupPlanId?: string;
    /**
     * The date and time a backup selection is created, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
     */
    CreationDate?: timestamp;
  }
  export interface CreateBackupVaultInput {
    /**
     * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
     */
    BackupVaultName: BackupVaultName;
    /**
     * Metadata that you can assign to help organize the resources that you create. Each tag is a key-value pair.
     */
    BackupVaultTags?: Tags;
    /**
     * The server-side encryption key that is used to protect your backups; for example, arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab.
     */
    EncryptionKeyArn?: ARN;
    /**
     * A unique string that identifies the request and allows failed requests to be retried without the risk of executing the operation twice.
     */
    CreatorRequestId?: string;
  }
  export interface CreateBackupVaultOutput {
    /**
     * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Region where they are created. They consist of lowercase letters, numbers, and hyphens.
     */
    BackupVaultName?: BackupVaultName;
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example, arn:aws:backup:us-east-1:123456789012:vault:aBackupVault.
     */
    BackupVaultArn?: ARN;
    /**
     * The date and time a backup vault is created, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
     */
    CreationDate?: timestamp;
  }
  export type CronExpression = string;
  export interface DeleteBackupPlanInput {
    /**
     * Uniquely identifies a backup plan.
     */
    BackupPlanId: string;
  }
  export interface DeleteBackupPlanOutput {
    /**
     * Uniquely identifies a backup plan.
     */
    BackupPlanId?: string;
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example, arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50.
     */
    BackupPlanArn?: ARN;
    /**
     * The date and time a backup plan is deleted, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
     */
    DeletionDate?: timestamp;
    /**
     * Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes long. Version Ids cannot be edited.
     */
    VersionId?: string;
  }
  export interface DeleteBackupSelectionInput {
    /**
     * Uniquely identifies a backup plan.
     */
    BackupPlanId: string;
    /**
     * Uniquely identifies the body of a request to assign a set of resources to a backup plan.
     */
    SelectionId: string;
  }
  export interface DeleteBackupVaultAccessPolicyInput {
    /**
     * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
     */
    BackupVaultName: BackupVaultName;
  }
  export interface DeleteBackupVaultInput {
    /**
     * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
     */
    BackupVaultName: string;
  }
  export interface DeleteBackupVaultNotificationsInput {
    /**
     * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Region where they are created. They consist of lowercase letters, numbers, and hyphens.
     */
    BackupVaultName: BackupVaultName;
  }
  export interface DeleteRecoveryPointInput {
    /**
     * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
     */
    BackupVaultName: BackupVaultName;
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.
     */
    RecoveryPointArn: ARN;
  }
  export interface DescribeBackupJobInput {
    /**
     * Uniquely identifies a request to AWS Backup to back up a resource.
     */
    BackupJobId: string;
  }
  export interface DescribeBackupJobOutput {
    /**
     * Uniquely identifies a request to AWS Backup to back up a resource.
     */
    BackupJobId?: string;
    /**
     * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
     */
    BackupVaultName?: BackupVaultName;
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example, arn:aws:backup:us-east-1:123456789012:vault:aBackupVault.
     */
    BackupVaultArn?: ARN;
    /**
     * An ARN that uniquely identifies a recovery point; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.
     */
    RecoveryPointArn?: ARN;
    /**
     * An ARN that uniquely identifies a saved resource. The format of the ARN depends on the resource type.
     */
    ResourceArn?: ARN;
    /**
     * The date and time that a backup job is created, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
     */
    CreationDate?: timestamp;
    /**
     * The date and time that a job to create a backup job is completed, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
     */
    CompletionDate?: timestamp;
    /**
     * The current state of a resource recovery point.
     */
    State?: BackupJobState;
    /**
     * A detailed message explaining the status of the job to back up a resource.
     */
    StatusMessage?: string;
    /**
     * Contains an estimated percentage that is complete of a job at the time the job status was queried.
     */
    PercentDone?: string;
    /**
     * The size, in bytes, of a backup.
     */
    BackupSizeInBytes?: Long;
    /**
     * Specifies the IAM role ARN used to create the target recovery point; for example, arn:aws:iam::123456789012:role/S3Access.
     */
    IamRoleArn?: IAMRoleArn;
    /**
     * Contains identifying information about the creation of a backup job, including the BackupPlanArn, BackupPlanId, BackupPlanVersion, and BackupRuleId of the backup plan that is used to create it.
     */
    CreatedBy?: RecoveryPointCreator;
    /**
     * The type of AWS resource to be backed up; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database.
     */
    ResourceType?: ResourceType;
    /**
     * The size in bytes transferred to a backup vault at the time that the job status was queried.
     */
    BytesTransferred?: Long;
    /**
     * The date and time that a job to back up resources is expected to be completed, in Unix format and Coordinated Universal Time (UTC). The value of ExpectedCompletionDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
     */
    ExpectedCompletionDate?: timestamp;
    /**
     * Specifies the time in Unix format and Coordinated Universal Time (UTC) when a backup job must be started before it is canceled. The value is calculated by adding the start window to the scheduled time. So if the scheduled time were 6:00 PM and the start window is 2 hours, the StartBy time would be 8:00 PM on the date specified. The value of StartBy is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
     */
    StartBy?: timestamp;
  }
  export interface DescribeBackupVaultInput {
    /**
     * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
     */
    BackupVaultName: string;
  }
  export interface DescribeBackupVaultOutput {
    /**
     * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Region where they are created. They consist of lowercase letters, numbers, and hyphens.
     */
    BackupVaultName?: string;
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example, arn:aws:backup:us-east-1:123456789012:vault:aBackupVault.
     */
    BackupVaultArn?: ARN;
    /**
     * The server-side encryption key that is used to protect your backups; for example, arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab.
     */
    EncryptionKeyArn?: ARN;
    /**
     * The date and time that a backup vault is created, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
     */
    CreationDate?: timestamp;
    /**
     * A unique string that identifies the request and allows failed requests to be retried without the risk of executing the operation twice.
     */
    CreatorRequestId?: string;
    /**
     * The number of recovery points that are stored in a backup vault.
     */
    NumberOfRecoveryPoints?: long;
  }
  export interface DescribeCopyJobInput {
    /**
     * Uniquely identifies a copy job.
     */
    CopyJobId: string;
  }
  export interface DescribeCopyJobOutput {
    /**
     * Contains detailed information about a copy job.
     */
    CopyJob?: CopyJob;
  }
  export interface DescribeProtectedResourceInput {
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.
     */
    ResourceArn: ARN;
  }
  export interface DescribeProtectedResourceOutput {
    /**
     * An ARN that uniquely identifies a resource. The format of the ARN depends on the resource type.
     */
    ResourceArn?: ARN;
    /**
     * The type of AWS resource saved as a recovery point; for example, an EBS volume or an Amazon RDS database.
     */
    ResourceType?: ResourceType;
    /**
     * The date and time that a resource was last backed up, in Unix format and Coordinated Universal Time (UTC). The value of LastBackupTime is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
     */
    LastBackupTime?: timestamp;
  }
  export interface DescribeRecoveryPointInput {
    /**
     * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
     */
    BackupVaultName: BackupVaultName;
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.
     */
    RecoveryPointArn: ARN;
  }
  export interface DescribeRecoveryPointOutput {
    /**
     * An ARN that uniquely identifies a recovery point; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.
     */
    RecoveryPointArn?: ARN;
    /**
     * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Region where they are created. They consist of lowercase letters, numbers, and hyphens.
     */
    BackupVaultName?: BackupVaultName;
    /**
     * An ARN that uniquely identifies a backup vault; for example, arn:aws:backup:us-east-1:123456789012:vault:aBackupVault.
     */
    BackupVaultArn?: ARN;
    /**
     * An ARN that uniquely identifies a saved resource. The format of the ARN depends on the resource type.
     */
    ResourceArn?: ARN;
    /**
     * The type of AWS resource to save as a recovery point; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database.
     */
    ResourceType?: ResourceType;
    /**
     * Contains identifying information about the creation of a recovery point, including the BackupPlanArn, BackupPlanId, BackupPlanVersion, and BackupRuleId of the backup plan used to create it.
     */
    CreatedBy?: RecoveryPointCreator;
    /**
     * Specifies the IAM role ARN used to create the target recovery point; for example, arn:aws:iam::123456789012:role/S3Access.
     */
    IamRoleArn?: IAMRoleArn;
    /**
     * A status code specifying the state of the recovery point.  A partial status indicates that the recovery point was not successfully re-created and must be retried. 
     */
    Status?: RecoveryPointStatus;
    /**
     * The date and time that a recovery point is created, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
     */
    CreationDate?: timestamp;
    /**
     * The date and time that a job to create a recovery point is completed, in Unix format and Coordinated Universal Time (UTC). The value of CompletionDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
     */
    CompletionDate?: timestamp;
    /**
     * The size, in bytes, of a backup.
     */
    BackupSizeInBytes?: Long;
    /**
     * A CalculatedLifecycle object containing DeleteAt and MoveToColdStorageAt timestamps.
     */
    CalculatedLifecycle?: CalculatedLifecycle;
    /**
     * The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. AWS Backup transitions and expires backups automatically according to the lifecycle that you define.  Backups that are transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold. 
     */
    Lifecycle?: Lifecycle;
    /**
     * The server-side encryption key used to protect your backups; for example, arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab.
     */
    EncryptionKeyArn?: ARN;
    /**
     * A Boolean value that is returned as TRUE if the specified recovery point is encrypted, or FALSE if the recovery point is not encrypted.
     */
    IsEncrypted?: boolean;
    /**
     * Specifies the storage class of the recovery point. Valid values are WARM or COLD.
     */
    StorageClass?: StorageClass;
    /**
     * The date and time that a recovery point was last restored, in Unix format and Coordinated Universal Time (UTC). The value of LastRestoreTime is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
     */
    LastRestoreTime?: timestamp;
  }
  export interface DescribeRegionSettingsInput {
  }
  export interface DescribeRegionSettingsOutput {
    /**
     * Returns a list of all services along with the opt-in preferences in the region.
     */
    ResourceTypeOptInPreference?: ResourceTypeOptInPreference;
  }
  export interface DescribeRestoreJobInput {
    /**
     * Uniquely identifies the job that restores a recovery point.
     */
    RestoreJobId: RestoreJobId;
  }
  export interface DescribeRestoreJobOutput {
    /**
     * Uniquely identifies the job that restores a recovery point.
     */
    RestoreJobId?: string;
    /**
     * An ARN that uniquely identifies a recovery point; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.
     */
    RecoveryPointArn?: ARN;
    /**
     * The date and time that a restore job is created, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
     */
    CreationDate?: timestamp;
    /**
     * The date and time that a job to restore a recovery point is completed, in Unix format and Coordinated Universal Time (UTC). The value of CompletionDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
     */
    CompletionDate?: timestamp;
    /**
     * Status code specifying the state of the job that is initiated by AWS Backup to restore a recovery point.
     */
    Status?: RestoreJobStatus;
    /**
     * A detailed message explaining the status of a job to restore a recovery point.
     */
    StatusMessage?: string;
    /**
     * Contains an estimated percentage that is complete of a job at the time the job status was queried.
     */
    PercentDone?: string;
    /**
     * The size, in bytes, of the restored resource.
     */
    BackupSizeInBytes?: Long;
    /**
     * Specifies the IAM role ARN used to create the target recovery point; for example, arn:aws:iam::123456789012:role/S3Access.
     */
    IamRoleArn?: IAMRoleArn;
    /**
     * The amount of time in minutes that a job restoring a recovery point is expected to take.
     */
    ExpectedCompletionTimeMinutes?: Long;
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies a resource whose recovery point is being restored. The format of the ARN depends on the resource type of the backed-up resource.
     */
    CreatedResourceArn?: ARN;
  }
  export interface ExportBackupPlanTemplateInput {
    /**
     * Uniquely identifies a backup plan.
     */
    BackupPlanId: string;
  }
  export interface ExportBackupPlanTemplateOutput {
    /**
     * The body of a backup plan template in JSON format.  This is a signed JSON document that cannot be modified before being passed to GetBackupPlanFromJSON.  
     */
    BackupPlanTemplateJson?: string;
  }
  export interface GetBackupPlanFromJSONInput {
    /**
     * A customer-supplied backup plan document in JSON format.
     */
    BackupPlanTemplateJson: string;
  }
  export interface GetBackupPlanFromJSONOutput {
    /**
     * Specifies the body of a backup plan. Includes a BackupPlanName and one or more sets of Rules.
     */
    BackupPlan?: BackupPlan;
  }
  export interface GetBackupPlanFromTemplateInput {
    /**
     * Uniquely identifies a stored backup plan template.
     */
    BackupPlanTemplateId: string;
  }
  export interface GetBackupPlanFromTemplateOutput {
    /**
     * Returns the body of a backup plan based on the target template, including the name, rules, and backup vault of the plan.
     */
    BackupPlanDocument?: BackupPlan;
  }
  export interface GetBackupPlanInput {
    /**
     * Uniquely identifies a backup plan.
     */
    BackupPlanId: string;
    /**
     * Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes long. Version IDs cannot be edited.
     */
    VersionId?: string;
  }
  export interface GetBackupPlanOutput {
    /**
     * Specifies the body of a backup plan. Includes a BackupPlanName and one or more sets of Rules.
     */
    BackupPlan?: BackupPlan;
    /**
     * Uniquely identifies a backup plan.
     */
    BackupPlanId?: string;
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example, arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50.
     */
    BackupPlanArn?: ARN;
    /**
     * Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes long. Version IDs cannot be edited.
     */
    VersionId?: string;
    /**
     * A unique string that identifies the request and allows failed requests to be retried without the risk of executing the operation twice.
     */
    CreatorRequestId?: string;
    /**
     * The date and time that a backup plan is created, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
     */
    CreationDate?: timestamp;
    /**
     * The date and time that a backup plan is deleted, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
     */
    DeletionDate?: timestamp;
    /**
     * The last time a job to back up resources was executed with this backup plan. A date and time, in Unix format and Coordinated Universal Time (UTC). The value of LastExecutionDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
     */
    LastExecutionDate?: timestamp;
  }
  export interface GetBackupSelectionInput {
    /**
     * Uniquely identifies a backup plan.
     */
    BackupPlanId: string;
    /**
     * Uniquely identifies the body of a request to assign a set of resources to a backup plan.
     */
    SelectionId: string;
  }
  export interface GetBackupSelectionOutput {
    /**
     * Specifies the body of a request to assign a set of resources to a backup plan.
     */
    BackupSelection?: BackupSelection;
    /**
     * Uniquely identifies the body of a request to assign a set of resources to a backup plan.
     */
    SelectionId?: string;
    /**
     * Uniquely identifies a backup plan.
     */
    BackupPlanId?: string;
    /**
     * The date and time a backup selection is created, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
     */
    CreationDate?: timestamp;
    /**
     * A unique string that identifies the request and allows failed requests to be retried without the risk of executing the operation twice.
     */
    CreatorRequestId?: string;
  }
  export interface GetBackupVaultAccessPolicyInput {
    /**
     * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
     */
    BackupVaultName: BackupVaultName;
  }
  export interface GetBackupVaultAccessPolicyOutput {
    /**
     * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Region where they are created. They consist of lowercase letters, numbers, and hyphens.
     */
    BackupVaultName?: BackupVaultName;
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example, arn:aws:backup:us-east-1:123456789012:vault:aBackupVault.
     */
    BackupVaultArn?: ARN;
    /**
     * The backup vault access policy document in JSON format.
     */
    Policy?: IAMPolicy;
  }
  export interface GetBackupVaultNotificationsInput {
    /**
     * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
     */
    BackupVaultName: BackupVaultName;
  }
  export interface GetBackupVaultNotificationsOutput {
    /**
     * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Region where they are created. They consist of lowercase letters, numbers, and hyphens.
     */
    BackupVaultName?: BackupVaultName;
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies a backup vault; for example, arn:aws:backup:us-east-1:123456789012:vault:aBackupVault.
     */
    BackupVaultArn?: ARN;
    /**
     * An ARN that uniquely identifies an Amazon Simple Notification Service (Amazon SNS) topic; for example, arn:aws:sns:us-west-2:111122223333:MyTopic.
     */
    SNSTopicArn?: ARN;
    /**
     * An array of events that indicate the status of jobs to back up resources to the backup vault.
     */
    BackupVaultEvents?: BackupVaultEvents;
  }
  export interface GetRecoveryPointRestoreMetadataInput {
    /**
     * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
     */
    BackupVaultName: BackupVaultName;
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.
     */
    RecoveryPointArn: ARN;
  }
  export interface GetRecoveryPointRestoreMetadataOutput {
    /**
     * An ARN that uniquely identifies a backup vault; for example, arn:aws:backup:us-east-1:123456789012:vault:aBackupVault.
     */
    BackupVaultArn?: ARN;
    /**
     * An ARN that uniquely identifies a recovery point; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.
     */
    RecoveryPointArn?: ARN;
    /**
     * The set of metadata key-value pairs that describes the original configuration of the backed-up resource. These values vary depending on the service that is being restored.
     */
    RestoreMetadata?: Metadata;
  }
  export interface GetSupportedResourceTypesOutput {
    /**
     * Contains a string with the supported AWS resource types:    EBS for Amazon Elastic Block Store    Storage Gateway for AWS Storage Gateway    RDS for Amazon Relational Database Service    DDB for Amazon DynamoDB    EFS for Amazon Elastic File System  
     */
    ResourceTypes?: ResourceTypes;
  }
  export type IAMPolicy = string;
  export type IAMRoleArn = string;
  export type IsEnabled = boolean;
  export interface Lifecycle {
    /**
     * Specifies the number of days after creation that a recovery point is moved to cold storage.
     */
    MoveToColdStorageAfterDays?: Long;
    /**
     * Specifies the number of days after creation that a recovery point is deleted. Must be greater than 90 days plus MoveToColdStorageAfterDays.
     */
    DeleteAfterDays?: Long;
  }
  export interface ListBackupJobsInput {
    /**
     * The next item following a partial list of returned items. For example, if a request is made to return maxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token.
     */
    NextToken?: string;
    /**
     * The maximum number of items to be returned.
     */
    MaxResults?: MaxResults;
    /**
     * Returns only backup jobs that match the specified resource Amazon Resource Name (ARN).
     */
    ByResourceArn?: ARN;
    /**
     * Returns only backup jobs that are in the specified state.
     */
    ByState?: BackupJobState;
    /**
     * Returns only backup jobs that will be stored in the specified backup vault. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
     */
    ByBackupVaultName?: BackupVaultName;
    /**
     * Returns only backup jobs that were created before the specified date.
     */
    ByCreatedBefore?: timestamp;
    /**
     * Returns only backup jobs that were created after the specified date.
     */
    ByCreatedAfter?: timestamp;
    /**
     * Returns only backup jobs for the specified resources:    DynamoDB for Amazon DynamoDB    EBS for Amazon Elastic Block Store    EFS for Amazon Elastic File System    RDS for Amazon Relational Database Service    Storage Gateway for AWS Storage Gateway  
     */
    ByResourceType?: ResourceType;
  }
  export interface ListBackupJobsOutput {
    /**
     * An array of structures containing metadata about your backup jobs returned in JSON format.
     */
    BackupJobs?: BackupJobsList;
    /**
     * The next item following a partial list of returned items. For example, if a request is made to return maxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token.
     */
    NextToken?: string;
  }
  export interface ListBackupPlanTemplatesInput {
    /**
     * The next item following a partial list of returned items. For example, if a request is made to return maxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token.
     */
    NextToken?: string;
    /**
     * The maximum number of items to be returned.
     */
    MaxResults?: MaxResults;
  }
  export interface ListBackupPlanTemplatesOutput {
    /**
     * The next item following a partial list of returned items. For example, if a request is made to return maxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token.
     */
    NextToken?: string;
    /**
     * An array of template list items containing metadata about your saved templates.
     */
    BackupPlanTemplatesList?: BackupPlanTemplatesList;
  }
  export interface ListBackupPlanVersionsInput {
    /**
     * Uniquely identifies a backup plan.
     */
    BackupPlanId: string;
    /**
     * The next item following a partial list of returned items. For example, if a request is made to return maxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token.
     */
    NextToken?: string;
    /**
     * The maximum number of items to be returned.
     */
    MaxResults?: MaxResults;
  }
  export interface ListBackupPlanVersionsOutput {
    /**
     * The next item following a partial list of returned items. For example, if a request is made to return maxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token.
     */
    NextToken?: string;
    /**
     * An array of version list items containing metadata about your backup plans.
     */
    BackupPlanVersionsList?: BackupPlanVersionsList;
  }
  export interface ListBackupPlansInput {
    /**
     * The next item following a partial list of returned items. For example, if a request is made to return maxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token.
     */
    NextToken?: string;
    /**
     * The maximum number of items to be returned.
     */
    MaxResults?: MaxResults;
    /**
     * A Boolean value with a default value of FALSE that returns deleted backup plans when set to TRUE.
     */
    IncludeDeleted?: Boolean;
  }
  export interface ListBackupPlansOutput {
    /**
     * The next item following a partial list of returned items. For example, if a request is made to return maxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token.
     */
    NextToken?: string;
    /**
     * An array of backup plan list items containing metadata about your saved backup plans.
     */
    BackupPlansList?: BackupPlansList;
  }
  export interface ListBackupSelectionsInput {
    /**
     * Uniquely identifies a backup plan.
     */
    BackupPlanId: string;
    /**
     * The next item following a partial list of returned items. For example, if a request is made to return maxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token.
     */
    NextToken?: string;
    /**
     * The maximum number of items to be returned.
     */
    MaxResults?: MaxResults;
  }
  export interface ListBackupSelectionsOutput {
    /**
     * The next item following a partial list of returned items. For example, if a request is made to return maxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token.
     */
    NextToken?: string;
    /**
     * An array of backup selection list items containing metadata about each resource in the list.
     */
    BackupSelectionsList?: BackupSelectionsList;
  }
  export interface ListBackupVaultsInput {
    /**
     * The next item following a partial list of returned items. For example, if a request is made to return maxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token.
     */
    NextToken?: string;
    /**
     * The maximum number of items to be returned.
     */
    MaxResults?: MaxResults;
  }
  export interface ListBackupVaultsOutput {
    /**
     * An array of backup vault list members containing vault metadata, including Amazon Resource Name (ARN), display name, creation date, number of saved recovery points, and encryption information if the resources saved in the backup vault are encrypted.
     */
    BackupVaultList?: BackupVaultList;
    /**
     * The next item following a partial list of returned items. For example, if a request is made to return maxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token.
     */
    NextToken?: string;
  }
  export interface ListCopyJobsInput {
    /**
     * The next item following a partial list of returned items. For example, if a request is made to return maxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token. 
     */
    NextToken?: string;
    /**
     * The maximum number of items to be returned.
     */
    MaxResults?: MaxResults;
    /**
     * Returns only copy jobs that match the specified resource Amazon Resource Name (ARN). 
     */
    ByResourceArn?: ARN;
    /**
     * Returns only copy jobs that are in the specified state.
     */
    ByState?: CopyJobState;
    /**
     * Returns only copy jobs that were created before the specified date.
     */
    ByCreatedBefore?: timestamp;
    /**
     * Returns only copy jobs that were created after the specified date.
     */
    ByCreatedAfter?: timestamp;
    /**
     * Returns only backup jobs for the specified resources:    EBS for Amazon Elastic Block Store    EFS for Amazon Elastic File System    RDS for Amazon Relational Database Service    Storage Gateway for AWS Storage Gateway  
     */
    ByResourceType?: ResourceType;
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies a source backup vault to copy from; for example, arn:aws:backup:us-east-1:123456789012:vault:aBackupVault. 
     */
    ByDestinationVaultArn?: string;
  }
  export interface ListCopyJobsOutput {
    /**
     * An array of structures containing metadata about your copy jobs returned in JSON format. 
     */
    CopyJobs?: CopyJobsList;
    /**
     * The next item following a partial list of returned items. For example, if a request is made to return maxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token. 
     */
    NextToken?: string;
  }
  export type ListOfTags = Condition[];
  export interface ListProtectedResourcesInput {
    /**
     * The next item following a partial list of returned items. For example, if a request is made to return maxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token.
     */
    NextToken?: string;
    /**
     * The maximum number of items to be returned.
     */
    MaxResults?: MaxResults;
  }
  export interface ListProtectedResourcesOutput {
    /**
     * An array of resources successfully backed up by AWS Backup including the time the resource was saved, an Amazon Resource Name (ARN) of the resource, and a resource type.
     */
    Results?: ProtectedResourcesList;
    /**
     * The next item following a partial list of returned items. For example, if a request is made to return maxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token.
     */
    NextToken?: string;
  }
  export interface ListRecoveryPointsByBackupVaultInput {
    /**
     * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
     */
    BackupVaultName: BackupVaultName;
    /**
     * The next item following a partial list of returned items. For example, if a request is made to return maxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token.
     */
    NextToken?: string;
    /**
     * The maximum number of items to be returned.
     */
    MaxResults?: MaxResults;
    /**
     * Returns only recovery points that match the specified resource Amazon Resource Name (ARN).
     */
    ByResourceArn?: ARN;
    /**
     * Returns only recovery points that match the specified resource type.
     */
    ByResourceType?: ResourceType;
    /**
     * Returns only recovery points that match the specified backup plan ID.
     */
    ByBackupPlanId?: string;
    /**
     * Returns only recovery points that were created before the specified timestamp.
     */
    ByCreatedBefore?: timestamp;
    /**
     * Returns only recovery points that were created after the specified timestamp.
     */
    ByCreatedAfter?: timestamp;
  }
  export interface ListRecoveryPointsByBackupVaultOutput {
    /**
     * The next item following a partial list of returned items. For example, if a request is made to return maxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token.
     */
    NextToken?: string;
    /**
     * An array of objects that contain detailed information about recovery points saved in a backup vault.
     */
    RecoveryPoints?: RecoveryPointByBackupVaultList;
  }
  export interface ListRecoveryPointsByResourceInput {
    /**
     * An ARN that uniquely identifies a resource. The format of the ARN depends on the resource type.
     */
    ResourceArn: ARN;
    /**
     * The next item following a partial list of returned items. For example, if a request is made to return maxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token.
     */
    NextToken?: string;
    /**
     * The maximum number of items to be returned.
     */
    MaxResults?: MaxResults;
  }
  export interface ListRecoveryPointsByResourceOutput {
    /**
     * The next item following a partial list of returned items. For example, if a request is made to return maxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token.
     */
    NextToken?: string;
    /**
     * An array of objects that contain detailed information about recovery points of the specified resource type.
     */
    RecoveryPoints?: RecoveryPointByResourceList;
  }
  export interface ListRestoreJobsInput {
    /**
     * The next item following a partial list of returned items. For example, if a request is made to return maxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token.
     */
    NextToken?: string;
    /**
     * The maximum number of items to be returned.
     */
    MaxResults?: MaxResults;
  }
  export interface ListRestoreJobsOutput {
    /**
     * An array of objects that contain detailed information about jobs to restore saved resources.
     */
    RestoreJobs?: RestoreJobsList;
    /**
     * The next item following a partial list of returned items. For example, if a request is made to return maxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token.
     */
    NextToken?: string;
  }
  export interface ListTagsInput {
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the type of resource. Valid targets for ListTags are recovery points, backup plans, and backup vaults.
     */
    ResourceArn: ARN;
    /**
     * The next item following a partial list of returned items. For example, if a request is made to return maxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token.
     */
    NextToken?: string;
    /**
     * The maximum number of items to be returned.
     */
    MaxResults?: MaxResults;
  }
  export interface ListTagsOutput {
    /**
     * The next item following a partial list of returned items. For example, if a request is made to return maxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token.
     */
    NextToken?: string;
    /**
     * To help organize your resources, you can assign your own metadata to the resources you create. Each tag is a key-value pair.
     */
    Tags?: Tags;
  }
  export type Long = number;
  export type MaxResults = number;
  export type Metadata = {[key: string]: MetadataValue};
  export type MetadataKey = string;
  export type MetadataValue = string;
  export interface ProtectedResource {
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.
     */
    ResourceArn?: ARN;
    /**
     * The type of AWS resource; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database.
     */
    ResourceType?: ResourceType;
    /**
     * The date and time a resource was last backed up, in Unix format and Coordinated Universal Time (UTC). The value of LastBackupTime is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
     */
    LastBackupTime?: timestamp;
  }
  export type ProtectedResourcesList = ProtectedResource[];
  export interface PutBackupVaultAccessPolicyInput {
    /**
     * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
     */
    BackupVaultName: BackupVaultName;
    /**
     * The backup vault access policy document in JSON format.
     */
    Policy?: IAMPolicy;
  }
  export interface PutBackupVaultNotificationsInput {
    /**
     * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
     */
    BackupVaultName: BackupVaultName;
    /**
     * The Amazon Resource Name (ARN) that specifies the topic for a backup vault’s events; for example, arn:aws:sns:us-west-2:111122223333:MyVaultTopic.
     */
    SNSTopicArn: ARN;
    /**
     * An array of events that indicate the status of jobs to back up resources to the backup vault.
     */
    BackupVaultEvents: BackupVaultEvents;
  }
  export interface RecoveryPointByBackupVault {
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.
     */
    RecoveryPointArn?: ARN;
    /**
     * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
     */
    BackupVaultName?: BackupVaultName;
    /**
     * An ARN that uniquely identifies a backup vault; for example, arn:aws:backup:us-east-1:123456789012:vault:aBackupVault.
     */
    BackupVaultArn?: ARN;
    /**
     * An ARN that uniquely identifies a resource. The format of the ARN depends on the resource type.
     */
    ResourceArn?: ARN;
    /**
     * The type of AWS resource saved as a recovery point; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database.
     */
    ResourceType?: ResourceType;
    /**
     * Contains identifying information about the creation of a recovery point, including the BackupPlanArn, BackupPlanId, BackupPlanVersion, and BackupRuleId of the backup plan that is used to create it.
     */
    CreatedBy?: RecoveryPointCreator;
    /**
     * Specifies the IAM role ARN used to create the target recovery point; for example, arn:aws:iam::123456789012:role/S3Access.
     */
    IamRoleArn?: IAMRoleArn;
    /**
     * A status code specifying the state of the recovery point.
     */
    Status?: RecoveryPointStatus;
    /**
     * The date and time a recovery point is created, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
     */
    CreationDate?: timestamp;
    /**
     * The date and time a job to restore a recovery point is completed, in Unix format and Coordinated Universal Time (UTC). The value of CompletionDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
     */
    CompletionDate?: timestamp;
    /**
     * The size, in bytes, of a backup.
     */
    BackupSizeInBytes?: Long;
    /**
     * A CalculatedLifecycle object containing DeleteAt and MoveToColdStorageAt timestamps.
     */
    CalculatedLifecycle?: CalculatedLifecycle;
    /**
     * The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. AWS Backup transitions and expires backups automatically according to the lifecycle that you define.  Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold. 
     */
    Lifecycle?: Lifecycle;
    /**
     * The server-side encryption key that is used to protect your backups; for example, arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab.
     */
    EncryptionKeyArn?: ARN;
    /**
     * A Boolean value that is returned as TRUE if the specified recovery point is encrypted, or FALSE if the recovery point is not encrypted.
     */
    IsEncrypted?: boolean;
    /**
     * The date and time a recovery point was last restored, in Unix format and Coordinated Universal Time (UTC). The value of LastRestoreTime is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
     */
    LastRestoreTime?: timestamp;
  }
  export type RecoveryPointByBackupVaultList = RecoveryPointByBackupVault[];
  export interface RecoveryPointByResource {
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.
     */
    RecoveryPointArn?: ARN;
    /**
     * The date and time a recovery point is created, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
     */
    CreationDate?: timestamp;
    /**
     * A status code specifying the state of the recovery point.
     */
    Status?: RecoveryPointStatus;
    /**
     * The server-side encryption key that is used to protect your backups; for example, arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab.
     */
    EncryptionKeyArn?: ARN;
    /**
     * The size, in bytes, of a backup.
     */
    BackupSizeBytes?: Long;
    /**
     * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
     */
    BackupVaultName?: BackupVaultName;
  }
  export type RecoveryPointByResourceList = RecoveryPointByResource[];
  export interface RecoveryPointCreator {
    /**
     * Uniquely identifies a backup plan.
     */
    BackupPlanId?: string;
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example, arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50.
     */
    BackupPlanArn?: ARN;
    /**
     * Version IDs are unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes long. They cannot be edited.
     */
    BackupPlanVersion?: string;
    /**
     * Uniquely identifies a rule used to schedule the backup of a selection of resources.
     */
    BackupRuleId?: string;
  }
  export type RecoveryPointStatus = "COMPLETED"|"PARTIAL"|"DELETING"|"EXPIRED"|string;
  export type ResourceArns = ARN[];
  export type ResourceType = string;
  export type ResourceTypeOptInPreference = {[key: string]: IsEnabled};
  export type ResourceTypes = ResourceType[];
  export type RestoreJobId = string;
  export type RestoreJobStatus = "PENDING"|"RUNNING"|"COMPLETED"|"ABORTED"|"FAILED"|string;
  export type RestoreJobsList = RestoreJobsListMember[];
  export interface RestoreJobsListMember {
    /**
     * Uniquely identifies the job that restores a recovery point.
     */
    RestoreJobId?: string;
    /**
     * An ARN that uniquely identifies a recovery point; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.
     */
    RecoveryPointArn?: ARN;
    /**
     * The date and time a restore job is created, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
     */
    CreationDate?: timestamp;
    /**
     * The date and time a job to restore a recovery point is completed, in Unix format and Coordinated Universal Time (UTC). The value of CompletionDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
     */
    CompletionDate?: timestamp;
    /**
     * A status code specifying the state of the job initiated by AWS Backup to restore a recovery point.
     */
    Status?: RestoreJobStatus;
    /**
     * A detailed message explaining the status of the job to restore a recovery point.
     */
    StatusMessage?: string;
    /**
     * Contains an estimated percentage complete of a job at the time the job status was queried.
     */
    PercentDone?: string;
    /**
     * The size, in bytes, of the restored resource.
     */
    BackupSizeInBytes?: Long;
    /**
     * Specifies the IAM role ARN used to create the target recovery point; for example, arn:aws:iam::123456789012:role/S3Access.
     */
    IamRoleArn?: IAMRoleArn;
    /**
     * The amount of time in minutes that a job restoring a recovery point is expected to take.
     */
    ExpectedCompletionTimeMinutes?: Long;
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.
     */
    CreatedResourceArn?: ARN;
  }
  export interface StartBackupJobInput {
    /**
     * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
     */
    BackupVaultName: BackupVaultName;
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.
     */
    ResourceArn: ARN;
    /**
     * Specifies the IAM role ARN used to create the target recovery point; for example, arn:aws:iam::123456789012:role/S3Access.
     */
    IamRoleArn: IAMRoleArn;
    /**
     * A customer chosen string that can be used to distinguish between calls to StartBackupJob.
     */
    IdempotencyToken?: string;
    /**
     * A value in minutes after a backup is scheduled before a job will be canceled if it doesn't start successfully. This value is optional.
     */
    StartWindowMinutes?: WindowMinutes;
    /**
     * A value in minutes after a backup job is successfully started before it must be completed or it will be canceled by AWS Backup. This value is optional.
     */
    CompleteWindowMinutes?: WindowMinutes;
    /**
     * The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. AWS Backup will transition and expire backups automatically according to the lifecycle that you define.  Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold. 
     */
    Lifecycle?: Lifecycle;
    /**
     * To help organize your resources, you can assign your own metadata to the resources that you create. Each tag is a key-value pair.
     */
    RecoveryPointTags?: Tags;
  }
  export interface StartBackupJobOutput {
    /**
     * Uniquely identifies a request to AWS Backup to back up a resource.
     */
    BackupJobId?: string;
    /**
     * An ARN that uniquely identifies a recovery point; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.
     */
    RecoveryPointArn?: ARN;
    /**
     * The date and time that a backup job is started, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
     */
    CreationDate?: timestamp;
  }
  export interface StartCopyJobInput {
    /**
     * An ARN that uniquely identifies a recovery point to use for the copy job; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45. 
     */
    RecoveryPointArn: ARN;
    /**
     * The name of a logical source container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
     */
    SourceBackupVaultName: BackupVaultName;
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies a destination backup vault to copy to; for example, arn:aws:backup:us-east-1:123456789012:vault:aBackupVault.
     */
    DestinationBackupVaultArn: ARN;
    /**
     * Specifies the IAM role ARN used to copy the target recovery point; for example, arn:aws:iam::123456789012:role/S3Access.
     */
    IamRoleArn: IAMRoleArn;
    /**
     * A customer chosen string that can be used to distinguish between calls to StartCopyJob.
     */
    IdempotencyToken?: string;
    Lifecycle?: Lifecycle;
  }
  export interface StartCopyJobOutput {
    /**
     * Uniquely identifies a copy job.
     */
    CopyJobId?: string;
    /**
     * The date and time that a copy job is started, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
     */
    CreationDate?: timestamp;
  }
  export interface StartRestoreJobInput {
    /**
     * An ARN that uniquely identifies a recovery point; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.
     */
    RecoveryPointArn: ARN;
    /**
     * A set of metadata key-value pairs. Contains information, such as a resource name, required to restore a recovery point.  You can get configuration metadata about a resource at the time it was backed up by calling GetRecoveryPointRestoreMetadata. However, values in addition to those provided by GetRecoveryPointRestoreMetadata might be required to restore a resource. For example, you might need to provide a new resource name if the original already exists. You need to specify specific metadata to restore an Amazon Elastic File System (Amazon EFS) instance:    file-system-id: ID of the Amazon EFS file system that is backed up by AWS Backup. Returned in GetRecoveryPointRestoreMetadata.    Encrypted: A Boolean value that, if true, specifies that the file system is encrypted. If KmsKeyId is specified, Encrypted must be set to true.    KmsKeyId: Specifies the AWS KMS key that is used to encrypt the restored file system.    PerformanceMode: Specifies the throughput mode of the file system.    CreationToken: A user-supplied value that ensures the uniqueness (idempotency) of the request.    newFileSystem: A Boolean value that, if true, specifies that the recovery point is restored to a new Amazon EFS file system.  
     */
    Metadata: Metadata;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that AWS Backup uses to create the target recovery point; for example, arn:aws:iam::123456789012:role/S3Access.
     */
    IamRoleArn: IAMRoleArn;
    /**
     * A customer chosen string that can be used to distinguish between calls to StartRestoreJob.
     */
    IdempotencyToken?: string;
    /**
     * Starts a job to restore a recovery point for one of the following resources:    EBS for Amazon Elastic Block Store    Storage Gateway for AWS Storage Gateway    RDS for Amazon Relational Database Service    DDB for Amazon DynamoDB    EFS for Amazon Elastic File System  
     */
    ResourceType?: ResourceType;
  }
  export interface StartRestoreJobOutput {
    /**
     * Uniquely identifies the job that restores a recovery point.
     */
    RestoreJobId?: RestoreJobId;
  }
  export interface StopBackupJobInput {
    /**
     * Uniquely identifies a request to AWS Backup to back up a resource.
     */
    BackupJobId: string;
  }
  export type StorageClass = "WARM"|"COLD"|"DELETED"|string;
  export type TagKey = string;
  export type TagKeyList = string[];
  export interface TagResourceInput {
    /**
     * An ARN that uniquely identifies a resource. The format of the ARN depends on the type of the tagged resource.
     */
    ResourceArn: ARN;
    /**
     * Key-value pairs that are used to help organize your resources. You can assign your own metadata to the resources you create. 
     */
    Tags: Tags;
  }
  export type TagValue = string;
  export type Tags = {[key: string]: TagValue};
  export interface UntagResourceInput {
    /**
     * An ARN that uniquely identifies a resource. The format of the ARN depends on the type of the tagged resource.
     */
    ResourceArn: ARN;
    /**
     * A list of keys to identify which key-value tags to remove from a resource.
     */
    TagKeyList: TagKeyList;
  }
  export interface UpdateBackupPlanInput {
    /**
     * Uniquely identifies a backup plan.
     */
    BackupPlanId: string;
    /**
     * Specifies the body of a backup plan. Includes a BackupPlanName and one or more sets of Rules.
     */
    BackupPlan: BackupPlanInput;
  }
  export interface UpdateBackupPlanOutput {
    /**
     * Uniquely identifies a backup plan.
     */
    BackupPlanId?: string;
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies a backup plan; for example, arn:aws:backup:us-east-1:123456789012:plan:8F81F553-3A74-4A3F-B93D-B3360DC80C50.
     */
    BackupPlanArn?: ARN;
    /**
     * The date and time a backup plan is updated, in Unix format and Coordinated Universal Time (UTC). The value of CreationDate is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
     */
    CreationDate?: timestamp;
    /**
     * Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes long. Version Ids cannot be edited.
     */
    VersionId?: string;
  }
  export interface UpdateRecoveryPointLifecycleInput {
    /**
     * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.
     */
    BackupVaultName: BackupVaultName;
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.
     */
    RecoveryPointArn: ARN;
    /**
     * The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. AWS Backup transitions and expires backups automatically according to the lifecycle that you define.  Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold. 
     */
    Lifecycle?: Lifecycle;
  }
  export interface UpdateRecoveryPointLifecycleOutput {
    /**
     * An ARN that uniquely identifies a backup vault; for example, arn:aws:backup:us-east-1:123456789012:vault:aBackupVault.
     */
    BackupVaultArn?: ARN;
    /**
     * An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45.
     */
    RecoveryPointArn?: ARN;
    /**
     * The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. AWS Backup transitions and expires backups automatically according to the lifecycle that you define.  Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold. 
     */
    Lifecycle?: Lifecycle;
    /**
     * A CalculatedLifecycle object containing DeleteAt and MoveToColdStorageAt timestamps.
     */
    CalculatedLifecycle?: CalculatedLifecycle;
  }
  export interface UpdateRegionSettingsInput {
    /**
     * Updates the list of services along with the opt-in preferences for the region.
     */
    ResourceTypeOptInPreference?: ResourceTypeOptInPreference;
  }
  export type WindowMinutes = number;
  export type long = number;
  export type timestamp = Date;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-11-15"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Backup client.
   */
  export import Types = Backup;
}
export = Backup;
