import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {WaiterConfiguration} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
import {Readable} from 'stream';
interface Blob {}
declare class Omics extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Omics.Types.ClientConfiguration)
  config: Config & Omics.Types.ClientConfiguration;
  /**
   * Deletes one or more read sets.
   */
  batchDeleteReadSet(params: Omics.Types.BatchDeleteReadSetRequest, callback?: (err: AWSError, data: Omics.Types.BatchDeleteReadSetResponse) => void): Request<Omics.Types.BatchDeleteReadSetResponse, AWSError>;
  /**
   * Deletes one or more read sets.
   */
  batchDeleteReadSet(callback?: (err: AWSError, data: Omics.Types.BatchDeleteReadSetResponse) => void): Request<Omics.Types.BatchDeleteReadSetResponse, AWSError>;
  /**
   * Cancels an annotation import job.
   */
  cancelAnnotationImportJob(params: Omics.Types.CancelAnnotationImportRequest, callback?: (err: AWSError, data: Omics.Types.CancelAnnotationImportResponse) => void): Request<Omics.Types.CancelAnnotationImportResponse, AWSError>;
  /**
   * Cancels an annotation import job.
   */
  cancelAnnotationImportJob(callback?: (err: AWSError, data: Omics.Types.CancelAnnotationImportResponse) => void): Request<Omics.Types.CancelAnnotationImportResponse, AWSError>;
  /**
   * Cancels a run.
   */
  cancelRun(params: Omics.Types.CancelRunRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Cancels a run.
   */
  cancelRun(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Cancels a variant import job.
   */
  cancelVariantImportJob(params: Omics.Types.CancelVariantImportRequest, callback?: (err: AWSError, data: Omics.Types.CancelVariantImportResponse) => void): Request<Omics.Types.CancelVariantImportResponse, AWSError>;
  /**
   * Cancels a variant import job.
   */
  cancelVariantImportJob(callback?: (err: AWSError, data: Omics.Types.CancelVariantImportResponse) => void): Request<Omics.Types.CancelVariantImportResponse, AWSError>;
  /**
   * Creates an annotation store.
   */
  createAnnotationStore(params: Omics.Types.CreateAnnotationStoreRequest, callback?: (err: AWSError, data: Omics.Types.CreateAnnotationStoreResponse) => void): Request<Omics.Types.CreateAnnotationStoreResponse, AWSError>;
  /**
   * Creates an annotation store.
   */
  createAnnotationStore(callback?: (err: AWSError, data: Omics.Types.CreateAnnotationStoreResponse) => void): Request<Omics.Types.CreateAnnotationStoreResponse, AWSError>;
  /**
   * Creates a reference store.
   */
  createReferenceStore(params: Omics.Types.CreateReferenceStoreRequest, callback?: (err: AWSError, data: Omics.Types.CreateReferenceStoreResponse) => void): Request<Omics.Types.CreateReferenceStoreResponse, AWSError>;
  /**
   * Creates a reference store.
   */
  createReferenceStore(callback?: (err: AWSError, data: Omics.Types.CreateReferenceStoreResponse) => void): Request<Omics.Types.CreateReferenceStoreResponse, AWSError>;
  /**
   * Creates a run group.
   */
  createRunGroup(params: Omics.Types.CreateRunGroupRequest, callback?: (err: AWSError, data: Omics.Types.CreateRunGroupResponse) => void): Request<Omics.Types.CreateRunGroupResponse, AWSError>;
  /**
   * Creates a run group.
   */
  createRunGroup(callback?: (err: AWSError, data: Omics.Types.CreateRunGroupResponse) => void): Request<Omics.Types.CreateRunGroupResponse, AWSError>;
  /**
   * Creates a sequence store.
   */
  createSequenceStore(params: Omics.Types.CreateSequenceStoreRequest, callback?: (err: AWSError, data: Omics.Types.CreateSequenceStoreResponse) => void): Request<Omics.Types.CreateSequenceStoreResponse, AWSError>;
  /**
   * Creates a sequence store.
   */
  createSequenceStore(callback?: (err: AWSError, data: Omics.Types.CreateSequenceStoreResponse) => void): Request<Omics.Types.CreateSequenceStoreResponse, AWSError>;
  /**
   * Creates a variant store.
   */
  createVariantStore(params: Omics.Types.CreateVariantStoreRequest, callback?: (err: AWSError, data: Omics.Types.CreateVariantStoreResponse) => void): Request<Omics.Types.CreateVariantStoreResponse, AWSError>;
  /**
   * Creates a variant store.
   */
  createVariantStore(callback?: (err: AWSError, data: Omics.Types.CreateVariantStoreResponse) => void): Request<Omics.Types.CreateVariantStoreResponse, AWSError>;
  /**
   * Creates a workflow.
   */
  createWorkflow(params: Omics.Types.CreateWorkflowRequest, callback?: (err: AWSError, data: Omics.Types.CreateWorkflowResponse) => void): Request<Omics.Types.CreateWorkflowResponse, AWSError>;
  /**
   * Creates a workflow.
   */
  createWorkflow(callback?: (err: AWSError, data: Omics.Types.CreateWorkflowResponse) => void): Request<Omics.Types.CreateWorkflowResponse, AWSError>;
  /**
   * Deletes an annotation store.
   */
  deleteAnnotationStore(params: Omics.Types.DeleteAnnotationStoreRequest, callback?: (err: AWSError, data: Omics.Types.DeleteAnnotationStoreResponse) => void): Request<Omics.Types.DeleteAnnotationStoreResponse, AWSError>;
  /**
   * Deletes an annotation store.
   */
  deleteAnnotationStore(callback?: (err: AWSError, data: Omics.Types.DeleteAnnotationStoreResponse) => void): Request<Omics.Types.DeleteAnnotationStoreResponse, AWSError>;
  /**
   * Deletes a genome reference.
   */
  deleteReference(params: Omics.Types.DeleteReferenceRequest, callback?: (err: AWSError, data: Omics.Types.DeleteReferenceResponse) => void): Request<Omics.Types.DeleteReferenceResponse, AWSError>;
  /**
   * Deletes a genome reference.
   */
  deleteReference(callback?: (err: AWSError, data: Omics.Types.DeleteReferenceResponse) => void): Request<Omics.Types.DeleteReferenceResponse, AWSError>;
  /**
   * Deletes a genome reference store.
   */
  deleteReferenceStore(params: Omics.Types.DeleteReferenceStoreRequest, callback?: (err: AWSError, data: Omics.Types.DeleteReferenceStoreResponse) => void): Request<Omics.Types.DeleteReferenceStoreResponse, AWSError>;
  /**
   * Deletes a genome reference store.
   */
  deleteReferenceStore(callback?: (err: AWSError, data: Omics.Types.DeleteReferenceStoreResponse) => void): Request<Omics.Types.DeleteReferenceStoreResponse, AWSError>;
  /**
   * Deletes a workflow run.
   */
  deleteRun(params: Omics.Types.DeleteRunRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a workflow run.
   */
  deleteRun(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a workflow run group.
   */
  deleteRunGroup(params: Omics.Types.DeleteRunGroupRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a workflow run group.
   */
  deleteRunGroup(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a sequence store.
   */
  deleteSequenceStore(params: Omics.Types.DeleteSequenceStoreRequest, callback?: (err: AWSError, data: Omics.Types.DeleteSequenceStoreResponse) => void): Request<Omics.Types.DeleteSequenceStoreResponse, AWSError>;
  /**
   * Deletes a sequence store.
   */
  deleteSequenceStore(callback?: (err: AWSError, data: Omics.Types.DeleteSequenceStoreResponse) => void): Request<Omics.Types.DeleteSequenceStoreResponse, AWSError>;
  /**
   * Deletes a variant store.
   */
  deleteVariantStore(params: Omics.Types.DeleteVariantStoreRequest, callback?: (err: AWSError, data: Omics.Types.DeleteVariantStoreResponse) => void): Request<Omics.Types.DeleteVariantStoreResponse, AWSError>;
  /**
   * Deletes a variant store.
   */
  deleteVariantStore(callback?: (err: AWSError, data: Omics.Types.DeleteVariantStoreResponse) => void): Request<Omics.Types.DeleteVariantStoreResponse, AWSError>;
  /**
   * Deletes a workflow.
   */
  deleteWorkflow(params: Omics.Types.DeleteWorkflowRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a workflow.
   */
  deleteWorkflow(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Gets information about an annotation import job.
   */
  getAnnotationImportJob(params: Omics.Types.GetAnnotationImportRequest, callback?: (err: AWSError, data: Omics.Types.GetAnnotationImportResponse) => void): Request<Omics.Types.GetAnnotationImportResponse, AWSError>;
  /**
   * Gets information about an annotation import job.
   */
  getAnnotationImportJob(callback?: (err: AWSError, data: Omics.Types.GetAnnotationImportResponse) => void): Request<Omics.Types.GetAnnotationImportResponse, AWSError>;
  /**
   * Gets information about an annotation store.
   */
  getAnnotationStore(params: Omics.Types.GetAnnotationStoreRequest, callback?: (err: AWSError, data: Omics.Types.GetAnnotationStoreResponse) => void): Request<Omics.Types.GetAnnotationStoreResponse, AWSError>;
  /**
   * Gets information about an annotation store.
   */
  getAnnotationStore(callback?: (err: AWSError, data: Omics.Types.GetAnnotationStoreResponse) => void): Request<Omics.Types.GetAnnotationStoreResponse, AWSError>;
  /**
   * Gets a file from a read set.
   */
  getReadSet(params: Omics.Types.GetReadSetRequest, callback?: (err: AWSError, data: Omics.Types.GetReadSetResponse) => void): Request<Omics.Types.GetReadSetResponse, AWSError>;
  /**
   * Gets a file from a read set.
   */
  getReadSet(callback?: (err: AWSError, data: Omics.Types.GetReadSetResponse) => void): Request<Omics.Types.GetReadSetResponse, AWSError>;
  /**
   * Gets information about a read set activation job.
   */
  getReadSetActivationJob(params: Omics.Types.GetReadSetActivationJobRequest, callback?: (err: AWSError, data: Omics.Types.GetReadSetActivationJobResponse) => void): Request<Omics.Types.GetReadSetActivationJobResponse, AWSError>;
  /**
   * Gets information about a read set activation job.
   */
  getReadSetActivationJob(callback?: (err: AWSError, data: Omics.Types.GetReadSetActivationJobResponse) => void): Request<Omics.Types.GetReadSetActivationJobResponse, AWSError>;
  /**
   * Gets information about a read set export job.
   */
  getReadSetExportJob(params: Omics.Types.GetReadSetExportJobRequest, callback?: (err: AWSError, data: Omics.Types.GetReadSetExportJobResponse) => void): Request<Omics.Types.GetReadSetExportJobResponse, AWSError>;
  /**
   * Gets information about a read set export job.
   */
  getReadSetExportJob(callback?: (err: AWSError, data: Omics.Types.GetReadSetExportJobResponse) => void): Request<Omics.Types.GetReadSetExportJobResponse, AWSError>;
  /**
   * Gets information about a read set import job.
   */
  getReadSetImportJob(params: Omics.Types.GetReadSetImportJobRequest, callback?: (err: AWSError, data: Omics.Types.GetReadSetImportJobResponse) => void): Request<Omics.Types.GetReadSetImportJobResponse, AWSError>;
  /**
   * Gets information about a read set import job.
   */
  getReadSetImportJob(callback?: (err: AWSError, data: Omics.Types.GetReadSetImportJobResponse) => void): Request<Omics.Types.GetReadSetImportJobResponse, AWSError>;
  /**
   * Gets details about a read set.
   */
  getReadSetMetadata(params: Omics.Types.GetReadSetMetadataRequest, callback?: (err: AWSError, data: Omics.Types.GetReadSetMetadataResponse) => void): Request<Omics.Types.GetReadSetMetadataResponse, AWSError>;
  /**
   * Gets details about a read set.
   */
  getReadSetMetadata(callback?: (err: AWSError, data: Omics.Types.GetReadSetMetadataResponse) => void): Request<Omics.Types.GetReadSetMetadataResponse, AWSError>;
  /**
   * Gets a reference file.
   */
  getReference(params: Omics.Types.GetReferenceRequest, callback?: (err: AWSError, data: Omics.Types.GetReferenceResponse) => void): Request<Omics.Types.GetReferenceResponse, AWSError>;
  /**
   * Gets a reference file.
   */
  getReference(callback?: (err: AWSError, data: Omics.Types.GetReferenceResponse) => void): Request<Omics.Types.GetReferenceResponse, AWSError>;
  /**
   * Gets information about a reference import job.
   */
  getReferenceImportJob(params: Omics.Types.GetReferenceImportJobRequest, callback?: (err: AWSError, data: Omics.Types.GetReferenceImportJobResponse) => void): Request<Omics.Types.GetReferenceImportJobResponse, AWSError>;
  /**
   * Gets information about a reference import job.
   */
  getReferenceImportJob(callback?: (err: AWSError, data: Omics.Types.GetReferenceImportJobResponse) => void): Request<Omics.Types.GetReferenceImportJobResponse, AWSError>;
  /**
   * Gets information about a genome reference's metadata.
   */
  getReferenceMetadata(params: Omics.Types.GetReferenceMetadataRequest, callback?: (err: AWSError, data: Omics.Types.GetReferenceMetadataResponse) => void): Request<Omics.Types.GetReferenceMetadataResponse, AWSError>;
  /**
   * Gets information about a genome reference's metadata.
   */
  getReferenceMetadata(callback?: (err: AWSError, data: Omics.Types.GetReferenceMetadataResponse) => void): Request<Omics.Types.GetReferenceMetadataResponse, AWSError>;
  /**
   * Gets information about a reference store.
   */
  getReferenceStore(params: Omics.Types.GetReferenceStoreRequest, callback?: (err: AWSError, data: Omics.Types.GetReferenceStoreResponse) => void): Request<Omics.Types.GetReferenceStoreResponse, AWSError>;
  /**
   * Gets information about a reference store.
   */
  getReferenceStore(callback?: (err: AWSError, data: Omics.Types.GetReferenceStoreResponse) => void): Request<Omics.Types.GetReferenceStoreResponse, AWSError>;
  /**
   * Gets information about a workflow run.
   */
  getRun(params: Omics.Types.GetRunRequest, callback?: (err: AWSError, data: Omics.Types.GetRunResponse) => void): Request<Omics.Types.GetRunResponse, AWSError>;
  /**
   * Gets information about a workflow run.
   */
  getRun(callback?: (err: AWSError, data: Omics.Types.GetRunResponse) => void): Request<Omics.Types.GetRunResponse, AWSError>;
  /**
   * Gets information about a workflow run group.
   */
  getRunGroup(params: Omics.Types.GetRunGroupRequest, callback?: (err: AWSError, data: Omics.Types.GetRunGroupResponse) => void): Request<Omics.Types.GetRunGroupResponse, AWSError>;
  /**
   * Gets information about a workflow run group.
   */
  getRunGroup(callback?: (err: AWSError, data: Omics.Types.GetRunGroupResponse) => void): Request<Omics.Types.GetRunGroupResponse, AWSError>;
  /**
   * Gets information about a workflow run task.
   */
  getRunTask(params: Omics.Types.GetRunTaskRequest, callback?: (err: AWSError, data: Omics.Types.GetRunTaskResponse) => void): Request<Omics.Types.GetRunTaskResponse, AWSError>;
  /**
   * Gets information about a workflow run task.
   */
  getRunTask(callback?: (err: AWSError, data: Omics.Types.GetRunTaskResponse) => void): Request<Omics.Types.GetRunTaskResponse, AWSError>;
  /**
   * Gets information about a sequence store.
   */
  getSequenceStore(params: Omics.Types.GetSequenceStoreRequest, callback?: (err: AWSError, data: Omics.Types.GetSequenceStoreResponse) => void): Request<Omics.Types.GetSequenceStoreResponse, AWSError>;
  /**
   * Gets information about a sequence store.
   */
  getSequenceStore(callback?: (err: AWSError, data: Omics.Types.GetSequenceStoreResponse) => void): Request<Omics.Types.GetSequenceStoreResponse, AWSError>;
  /**
   * Gets information about a variant import job.
   */
  getVariantImportJob(params: Omics.Types.GetVariantImportRequest, callback?: (err: AWSError, data: Omics.Types.GetVariantImportResponse) => void): Request<Omics.Types.GetVariantImportResponse, AWSError>;
  /**
   * Gets information about a variant import job.
   */
  getVariantImportJob(callback?: (err: AWSError, data: Omics.Types.GetVariantImportResponse) => void): Request<Omics.Types.GetVariantImportResponse, AWSError>;
  /**
   * Gets information about a variant store.
   */
  getVariantStore(params: Omics.Types.GetVariantStoreRequest, callback?: (err: AWSError, data: Omics.Types.GetVariantStoreResponse) => void): Request<Omics.Types.GetVariantStoreResponse, AWSError>;
  /**
   * Gets information about a variant store.
   */
  getVariantStore(callback?: (err: AWSError, data: Omics.Types.GetVariantStoreResponse) => void): Request<Omics.Types.GetVariantStoreResponse, AWSError>;
  /**
   * Gets information about a workflow.
   */
  getWorkflow(params: Omics.Types.GetWorkflowRequest, callback?: (err: AWSError, data: Omics.Types.GetWorkflowResponse) => void): Request<Omics.Types.GetWorkflowResponse, AWSError>;
  /**
   * Gets information about a workflow.
   */
  getWorkflow(callback?: (err: AWSError, data: Omics.Types.GetWorkflowResponse) => void): Request<Omics.Types.GetWorkflowResponse, AWSError>;
  /**
   * Retrieves a list of annotation import jobs.
   */
  listAnnotationImportJobs(params: Omics.Types.ListAnnotationImportJobsRequest, callback?: (err: AWSError, data: Omics.Types.ListAnnotationImportJobsResponse) => void): Request<Omics.Types.ListAnnotationImportJobsResponse, AWSError>;
  /**
   * Retrieves a list of annotation import jobs.
   */
  listAnnotationImportJobs(callback?: (err: AWSError, data: Omics.Types.ListAnnotationImportJobsResponse) => void): Request<Omics.Types.ListAnnotationImportJobsResponse, AWSError>;
  /**
   * Retrieves a list of annotation stores.
   */
  listAnnotationStores(params: Omics.Types.ListAnnotationStoresRequest, callback?: (err: AWSError, data: Omics.Types.ListAnnotationStoresResponse) => void): Request<Omics.Types.ListAnnotationStoresResponse, AWSError>;
  /**
   * Retrieves a list of annotation stores.
   */
  listAnnotationStores(callback?: (err: AWSError, data: Omics.Types.ListAnnotationStoresResponse) => void): Request<Omics.Types.ListAnnotationStoresResponse, AWSError>;
  /**
   * Retrieves a list of read set activation jobs.
   */
  listReadSetActivationJobs(params: Omics.Types.ListReadSetActivationJobsRequest, callback?: (err: AWSError, data: Omics.Types.ListReadSetActivationJobsResponse) => void): Request<Omics.Types.ListReadSetActivationJobsResponse, AWSError>;
  /**
   * Retrieves a list of read set activation jobs.
   */
  listReadSetActivationJobs(callback?: (err: AWSError, data: Omics.Types.ListReadSetActivationJobsResponse) => void): Request<Omics.Types.ListReadSetActivationJobsResponse, AWSError>;
  /**
   * Retrieves a list of read set export jobs.
   */
  listReadSetExportJobs(params: Omics.Types.ListReadSetExportJobsRequest, callback?: (err: AWSError, data: Omics.Types.ListReadSetExportJobsResponse) => void): Request<Omics.Types.ListReadSetExportJobsResponse, AWSError>;
  /**
   * Retrieves a list of read set export jobs.
   */
  listReadSetExportJobs(callback?: (err: AWSError, data: Omics.Types.ListReadSetExportJobsResponse) => void): Request<Omics.Types.ListReadSetExportJobsResponse, AWSError>;
  /**
   * Retrieves a list of read set import jobs.
   */
  listReadSetImportJobs(params: Omics.Types.ListReadSetImportJobsRequest, callback?: (err: AWSError, data: Omics.Types.ListReadSetImportJobsResponse) => void): Request<Omics.Types.ListReadSetImportJobsResponse, AWSError>;
  /**
   * Retrieves a list of read set import jobs.
   */
  listReadSetImportJobs(callback?: (err: AWSError, data: Omics.Types.ListReadSetImportJobsResponse) => void): Request<Omics.Types.ListReadSetImportJobsResponse, AWSError>;
  /**
   * Retrieves a list of read sets.
   */
  listReadSets(params: Omics.Types.ListReadSetsRequest, callback?: (err: AWSError, data: Omics.Types.ListReadSetsResponse) => void): Request<Omics.Types.ListReadSetsResponse, AWSError>;
  /**
   * Retrieves a list of read sets.
   */
  listReadSets(callback?: (err: AWSError, data: Omics.Types.ListReadSetsResponse) => void): Request<Omics.Types.ListReadSetsResponse, AWSError>;
  /**
   * Retrieves a list of reference import jobs.
   */
  listReferenceImportJobs(params: Omics.Types.ListReferenceImportJobsRequest, callback?: (err: AWSError, data: Omics.Types.ListReferenceImportJobsResponse) => void): Request<Omics.Types.ListReferenceImportJobsResponse, AWSError>;
  /**
   * Retrieves a list of reference import jobs.
   */
  listReferenceImportJobs(callback?: (err: AWSError, data: Omics.Types.ListReferenceImportJobsResponse) => void): Request<Omics.Types.ListReferenceImportJobsResponse, AWSError>;
  /**
   * Retrieves a list of reference stores.
   */
  listReferenceStores(params: Omics.Types.ListReferenceStoresRequest, callback?: (err: AWSError, data: Omics.Types.ListReferenceStoresResponse) => void): Request<Omics.Types.ListReferenceStoresResponse, AWSError>;
  /**
   * Retrieves a list of reference stores.
   */
  listReferenceStores(callback?: (err: AWSError, data: Omics.Types.ListReferenceStoresResponse) => void): Request<Omics.Types.ListReferenceStoresResponse, AWSError>;
  /**
   * Retrieves a list of references.
   */
  listReferences(params: Omics.Types.ListReferencesRequest, callback?: (err: AWSError, data: Omics.Types.ListReferencesResponse) => void): Request<Omics.Types.ListReferencesResponse, AWSError>;
  /**
   * Retrieves a list of references.
   */
  listReferences(callback?: (err: AWSError, data: Omics.Types.ListReferencesResponse) => void): Request<Omics.Types.ListReferencesResponse, AWSError>;
  /**
   * Retrieves a list of run groups.
   */
  listRunGroups(params: Omics.Types.ListRunGroupsRequest, callback?: (err: AWSError, data: Omics.Types.ListRunGroupsResponse) => void): Request<Omics.Types.ListRunGroupsResponse, AWSError>;
  /**
   * Retrieves a list of run groups.
   */
  listRunGroups(callback?: (err: AWSError, data: Omics.Types.ListRunGroupsResponse) => void): Request<Omics.Types.ListRunGroupsResponse, AWSError>;
  /**
   * Retrieves a list of tasks for a run.
   */
  listRunTasks(params: Omics.Types.ListRunTasksRequest, callback?: (err: AWSError, data: Omics.Types.ListRunTasksResponse) => void): Request<Omics.Types.ListRunTasksResponse, AWSError>;
  /**
   * Retrieves a list of tasks for a run.
   */
  listRunTasks(callback?: (err: AWSError, data: Omics.Types.ListRunTasksResponse) => void): Request<Omics.Types.ListRunTasksResponse, AWSError>;
  /**
   * Retrieves a list of runs.
   */
  listRuns(params: Omics.Types.ListRunsRequest, callback?: (err: AWSError, data: Omics.Types.ListRunsResponse) => void): Request<Omics.Types.ListRunsResponse, AWSError>;
  /**
   * Retrieves a list of runs.
   */
  listRuns(callback?: (err: AWSError, data: Omics.Types.ListRunsResponse) => void): Request<Omics.Types.ListRunsResponse, AWSError>;
  /**
   * Retrieves a list of sequence stores.
   */
  listSequenceStores(params: Omics.Types.ListSequenceStoresRequest, callback?: (err: AWSError, data: Omics.Types.ListSequenceStoresResponse) => void): Request<Omics.Types.ListSequenceStoresResponse, AWSError>;
  /**
   * Retrieves a list of sequence stores.
   */
  listSequenceStores(callback?: (err: AWSError, data: Omics.Types.ListSequenceStoresResponse) => void): Request<Omics.Types.ListSequenceStoresResponse, AWSError>;
  /**
   * Retrieves a list of tags for a resource.
   */
  listTagsForResource(params: Omics.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: Omics.Types.ListTagsForResourceResponse) => void): Request<Omics.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Retrieves a list of tags for a resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: Omics.Types.ListTagsForResourceResponse) => void): Request<Omics.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Retrieves a list of variant import jobs.
   */
  listVariantImportJobs(params: Omics.Types.ListVariantImportJobsRequest, callback?: (err: AWSError, data: Omics.Types.ListVariantImportJobsResponse) => void): Request<Omics.Types.ListVariantImportJobsResponse, AWSError>;
  /**
   * Retrieves a list of variant import jobs.
   */
  listVariantImportJobs(callback?: (err: AWSError, data: Omics.Types.ListVariantImportJobsResponse) => void): Request<Omics.Types.ListVariantImportJobsResponse, AWSError>;
  /**
   * Retrieves a list of variant stores.
   */
  listVariantStores(params: Omics.Types.ListVariantStoresRequest, callback?: (err: AWSError, data: Omics.Types.ListVariantStoresResponse) => void): Request<Omics.Types.ListVariantStoresResponse, AWSError>;
  /**
   * Retrieves a list of variant stores.
   */
  listVariantStores(callback?: (err: AWSError, data: Omics.Types.ListVariantStoresResponse) => void): Request<Omics.Types.ListVariantStoresResponse, AWSError>;
  /**
   * Retrieves a list of workflows.
   */
  listWorkflows(params: Omics.Types.ListWorkflowsRequest, callback?: (err: AWSError, data: Omics.Types.ListWorkflowsResponse) => void): Request<Omics.Types.ListWorkflowsResponse, AWSError>;
  /**
   * Retrieves a list of workflows.
   */
  listWorkflows(callback?: (err: AWSError, data: Omics.Types.ListWorkflowsResponse) => void): Request<Omics.Types.ListWorkflowsResponse, AWSError>;
  /**
   * Starts an annotation import job.
   */
  startAnnotationImportJob(params: Omics.Types.StartAnnotationImportRequest, callback?: (err: AWSError, data: Omics.Types.StartAnnotationImportResponse) => void): Request<Omics.Types.StartAnnotationImportResponse, AWSError>;
  /**
   * Starts an annotation import job.
   */
  startAnnotationImportJob(callback?: (err: AWSError, data: Omics.Types.StartAnnotationImportResponse) => void): Request<Omics.Types.StartAnnotationImportResponse, AWSError>;
  /**
   * Starts a read set activation job.
   */
  startReadSetActivationJob(params: Omics.Types.StartReadSetActivationJobRequest, callback?: (err: AWSError, data: Omics.Types.StartReadSetActivationJobResponse) => void): Request<Omics.Types.StartReadSetActivationJobResponse, AWSError>;
  /**
   * Starts a read set activation job.
   */
  startReadSetActivationJob(callback?: (err: AWSError, data: Omics.Types.StartReadSetActivationJobResponse) => void): Request<Omics.Types.StartReadSetActivationJobResponse, AWSError>;
  /**
   * Starts a read set export job.
   */
  startReadSetExportJob(params: Omics.Types.StartReadSetExportJobRequest, callback?: (err: AWSError, data: Omics.Types.StartReadSetExportJobResponse) => void): Request<Omics.Types.StartReadSetExportJobResponse, AWSError>;
  /**
   * Starts a read set export job.
   */
  startReadSetExportJob(callback?: (err: AWSError, data: Omics.Types.StartReadSetExportJobResponse) => void): Request<Omics.Types.StartReadSetExportJobResponse, AWSError>;
  /**
   * Starts a read set import job.
   */
  startReadSetImportJob(params: Omics.Types.StartReadSetImportJobRequest, callback?: (err: AWSError, data: Omics.Types.StartReadSetImportJobResponse) => void): Request<Omics.Types.StartReadSetImportJobResponse, AWSError>;
  /**
   * Starts a read set import job.
   */
  startReadSetImportJob(callback?: (err: AWSError, data: Omics.Types.StartReadSetImportJobResponse) => void): Request<Omics.Types.StartReadSetImportJobResponse, AWSError>;
  /**
   * Starts a reference import job.
   */
  startReferenceImportJob(params: Omics.Types.StartReferenceImportJobRequest, callback?: (err: AWSError, data: Omics.Types.StartReferenceImportJobResponse) => void): Request<Omics.Types.StartReferenceImportJobResponse, AWSError>;
  /**
   * Starts a reference import job.
   */
  startReferenceImportJob(callback?: (err: AWSError, data: Omics.Types.StartReferenceImportJobResponse) => void): Request<Omics.Types.StartReferenceImportJobResponse, AWSError>;
  /**
   * Starts a run.
   */
  startRun(params: Omics.Types.StartRunRequest, callback?: (err: AWSError, data: Omics.Types.StartRunResponse) => void): Request<Omics.Types.StartRunResponse, AWSError>;
  /**
   * Starts a run.
   */
  startRun(callback?: (err: AWSError, data: Omics.Types.StartRunResponse) => void): Request<Omics.Types.StartRunResponse, AWSError>;
  /**
   * Starts a variant import job.
   */
  startVariantImportJob(params: Omics.Types.StartVariantImportRequest, callback?: (err: AWSError, data: Omics.Types.StartVariantImportResponse) => void): Request<Omics.Types.StartVariantImportResponse, AWSError>;
  /**
   * Starts a variant import job.
   */
  startVariantImportJob(callback?: (err: AWSError, data: Omics.Types.StartVariantImportResponse) => void): Request<Omics.Types.StartVariantImportResponse, AWSError>;
  /**
   * Tags a resource.
   */
  tagResource(params: Omics.Types.TagResourceRequest, callback?: (err: AWSError, data: Omics.Types.TagResourceResponse) => void): Request<Omics.Types.TagResourceResponse, AWSError>;
  /**
   * Tags a resource.
   */
  tagResource(callback?: (err: AWSError, data: Omics.Types.TagResourceResponse) => void): Request<Omics.Types.TagResourceResponse, AWSError>;
  /**
   * Removes tags from a resource.
   */
  untagResource(params: Omics.Types.UntagResourceRequest, callback?: (err: AWSError, data: Omics.Types.UntagResourceResponse) => void): Request<Omics.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes tags from a resource.
   */
  untagResource(callback?: (err: AWSError, data: Omics.Types.UntagResourceResponse) => void): Request<Omics.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates an annotation store.
   */
  updateAnnotationStore(params: Omics.Types.UpdateAnnotationStoreRequest, callback?: (err: AWSError, data: Omics.Types.UpdateAnnotationStoreResponse) => void): Request<Omics.Types.UpdateAnnotationStoreResponse, AWSError>;
  /**
   * Updates an annotation store.
   */
  updateAnnotationStore(callback?: (err: AWSError, data: Omics.Types.UpdateAnnotationStoreResponse) => void): Request<Omics.Types.UpdateAnnotationStoreResponse, AWSError>;
  /**
   * Updates a run group.
   */
  updateRunGroup(params: Omics.Types.UpdateRunGroupRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates a run group.
   */
  updateRunGroup(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates a variant store.
   */
  updateVariantStore(params: Omics.Types.UpdateVariantStoreRequest, callback?: (err: AWSError, data: Omics.Types.UpdateVariantStoreResponse) => void): Request<Omics.Types.UpdateVariantStoreResponse, AWSError>;
  /**
   * Updates a variant store.
   */
  updateVariantStore(callback?: (err: AWSError, data: Omics.Types.UpdateVariantStoreResponse) => void): Request<Omics.Types.UpdateVariantStoreResponse, AWSError>;
  /**
   * Updates a workflow.
   */
  updateWorkflow(params: Omics.Types.UpdateWorkflowRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates a workflow.
   */
  updateWorkflow(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Waits for the annotationImportJobCreated state by periodically calling the underlying Omics.getAnnotationImportJoboperation every 30 seconds (at most 20 times). Wait until an annotation import is completed
   */
  waitFor(state: "annotationImportJobCreated", params: Omics.Types.GetAnnotationImportRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: Omics.Types.GetAnnotationImportResponse) => void): Request<Omics.Types.GetAnnotationImportResponse, AWSError>;
  /**
   * Waits for the annotationImportJobCreated state by periodically calling the underlying Omics.getAnnotationImportJoboperation every 30 seconds (at most 20 times). Wait until an annotation import is completed
   */
  waitFor(state: "annotationImportJobCreated", callback?: (err: AWSError, data: Omics.Types.GetAnnotationImportResponse) => void): Request<Omics.Types.GetAnnotationImportResponse, AWSError>;
  /**
   * Waits for the annotationStoreCreated state by periodically calling the underlying Omics.getAnnotationStoreoperation every 30 seconds (at most 20 times). Wait until an annotation store is created
   */
  waitFor(state: "annotationStoreCreated", params: Omics.Types.GetAnnotationStoreRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: Omics.Types.GetAnnotationStoreResponse) => void): Request<Omics.Types.GetAnnotationStoreResponse, AWSError>;
  /**
   * Waits for the annotationStoreCreated state by periodically calling the underlying Omics.getAnnotationStoreoperation every 30 seconds (at most 20 times). Wait until an annotation store is created
   */
  waitFor(state: "annotationStoreCreated", callback?: (err: AWSError, data: Omics.Types.GetAnnotationStoreResponse) => void): Request<Omics.Types.GetAnnotationStoreResponse, AWSError>;
  /**
   * Waits for the annotationStoreDeleted state by periodically calling the underlying Omics.getAnnotationStoreoperation every 30 seconds (at most 20 times). Wait until an annotation store is deleted.
   */
  waitFor(state: "annotationStoreDeleted", params: Omics.Types.GetAnnotationStoreRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: Omics.Types.GetAnnotationStoreResponse) => void): Request<Omics.Types.GetAnnotationStoreResponse, AWSError>;
  /**
   * Waits for the annotationStoreDeleted state by periodically calling the underlying Omics.getAnnotationStoreoperation every 30 seconds (at most 20 times). Wait until an annotation store is deleted.
   */
  waitFor(state: "annotationStoreDeleted", callback?: (err: AWSError, data: Omics.Types.GetAnnotationStoreResponse) => void): Request<Omics.Types.GetAnnotationStoreResponse, AWSError>;
  /**
   * Waits for the readSetActivationJobCompleted state by periodically calling the underlying Omics.getReadSetActivationJoboperation every 30 seconds (at most 20 times). Wait until a job is completed.
   */
  waitFor(state: "readSetActivationJobCompleted", params: Omics.Types.GetReadSetActivationJobRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: Omics.Types.GetReadSetActivationJobResponse) => void): Request<Omics.Types.GetReadSetActivationJobResponse, AWSError>;
  /**
   * Waits for the readSetActivationJobCompleted state by periodically calling the underlying Omics.getReadSetActivationJoboperation every 30 seconds (at most 20 times). Wait until a job is completed.
   */
  waitFor(state: "readSetActivationJobCompleted", callback?: (err: AWSError, data: Omics.Types.GetReadSetActivationJobResponse) => void): Request<Omics.Types.GetReadSetActivationJobResponse, AWSError>;
  /**
   * Waits for the readSetExportJobCompleted state by periodically calling the underlying Omics.getReadSetExportJoboperation every 30 seconds (at most 20 times). Wait until a job is completed.
   */
  waitFor(state: "readSetExportJobCompleted", params: Omics.Types.GetReadSetExportJobRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: Omics.Types.GetReadSetExportJobResponse) => void): Request<Omics.Types.GetReadSetExportJobResponse, AWSError>;
  /**
   * Waits for the readSetExportJobCompleted state by periodically calling the underlying Omics.getReadSetExportJoboperation every 30 seconds (at most 20 times). Wait until a job is completed.
   */
  waitFor(state: "readSetExportJobCompleted", callback?: (err: AWSError, data: Omics.Types.GetReadSetExportJobResponse) => void): Request<Omics.Types.GetReadSetExportJobResponse, AWSError>;
  /**
   * Waits for the readSetImportJobCompleted state by periodically calling the underlying Omics.getReadSetImportJoboperation every 30 seconds (at most 20 times). Wait until a job is completed.
   */
  waitFor(state: "readSetImportJobCompleted", params: Omics.Types.GetReadSetImportJobRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: Omics.Types.GetReadSetImportJobResponse) => void): Request<Omics.Types.GetReadSetImportJobResponse, AWSError>;
  /**
   * Waits for the readSetImportJobCompleted state by periodically calling the underlying Omics.getReadSetImportJoboperation every 30 seconds (at most 20 times). Wait until a job is completed.
   */
  waitFor(state: "readSetImportJobCompleted", callback?: (err: AWSError, data: Omics.Types.GetReadSetImportJobResponse) => void): Request<Omics.Types.GetReadSetImportJobResponse, AWSError>;
  /**
   * Waits for the referenceImportJobCompleted state by periodically calling the underlying Omics.getReferenceImportJoboperation every 30 seconds (at most 20 times). Wait until a job is completed.
   */
  waitFor(state: "referenceImportJobCompleted", params: Omics.Types.GetReferenceImportJobRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: Omics.Types.GetReferenceImportJobResponse) => void): Request<Omics.Types.GetReferenceImportJobResponse, AWSError>;
  /**
   * Waits for the referenceImportJobCompleted state by periodically calling the underlying Omics.getReferenceImportJoboperation every 30 seconds (at most 20 times). Wait until a job is completed.
   */
  waitFor(state: "referenceImportJobCompleted", callback?: (err: AWSError, data: Omics.Types.GetReferenceImportJobResponse) => void): Request<Omics.Types.GetReferenceImportJobResponse, AWSError>;
  /**
   * Waits for the runCompleted state by periodically calling the underlying Omics.getRunoperation every 30 seconds (at most 20 times). Wait until a run is completed.
   */
  waitFor(state: "runCompleted", params: Omics.Types.GetRunRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: Omics.Types.GetRunResponse) => void): Request<Omics.Types.GetRunResponse, AWSError>;
  /**
   * Waits for the runCompleted state by periodically calling the underlying Omics.getRunoperation every 30 seconds (at most 20 times). Wait until a run is completed.
   */
  waitFor(state: "runCompleted", callback?: (err: AWSError, data: Omics.Types.GetRunResponse) => void): Request<Omics.Types.GetRunResponse, AWSError>;
  /**
   * Waits for the runRunning state by periodically calling the underlying Omics.getRunoperation every 30 seconds (at most 20 times). Wait until a run is running.
   */
  waitFor(state: "runRunning", params: Omics.Types.GetRunRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: Omics.Types.GetRunResponse) => void): Request<Omics.Types.GetRunResponse, AWSError>;
  /**
   * Waits for the runRunning state by periodically calling the underlying Omics.getRunoperation every 30 seconds (at most 20 times). Wait until a run is running.
   */
  waitFor(state: "runRunning", callback?: (err: AWSError, data: Omics.Types.GetRunResponse) => void): Request<Omics.Types.GetRunResponse, AWSError>;
  /**
   * Waits for the taskCompleted state by periodically calling the underlying Omics.getRunTaskoperation every 30 seconds (at most 20 times). Wait until a task is completed.
   */
  waitFor(state: "taskCompleted", params: Omics.Types.GetRunTaskRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: Omics.Types.GetRunTaskResponse) => void): Request<Omics.Types.GetRunTaskResponse, AWSError>;
  /**
   * Waits for the taskCompleted state by periodically calling the underlying Omics.getRunTaskoperation every 30 seconds (at most 20 times). Wait until a task is completed.
   */
  waitFor(state: "taskCompleted", callback?: (err: AWSError, data: Omics.Types.GetRunTaskResponse) => void): Request<Omics.Types.GetRunTaskResponse, AWSError>;
  /**
   * Waits for the taskRunning state by periodically calling the underlying Omics.getRunTaskoperation every 30 seconds (at most 20 times). Wait until a task is running.
   */
  waitFor(state: "taskRunning", params: Omics.Types.GetRunTaskRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: Omics.Types.GetRunTaskResponse) => void): Request<Omics.Types.GetRunTaskResponse, AWSError>;
  /**
   * Waits for the taskRunning state by periodically calling the underlying Omics.getRunTaskoperation every 30 seconds (at most 20 times). Wait until a task is running.
   */
  waitFor(state: "taskRunning", callback?: (err: AWSError, data: Omics.Types.GetRunTaskResponse) => void): Request<Omics.Types.GetRunTaskResponse, AWSError>;
  /**
   * Waits for the variantImportJobCreated state by periodically calling the underlying Omics.getVariantImportJoboperation every 30 seconds (at most 20 times). Wait until variant import is completed
   */
  waitFor(state: "variantImportJobCreated", params: Omics.Types.GetVariantImportRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: Omics.Types.GetVariantImportResponse) => void): Request<Omics.Types.GetVariantImportResponse, AWSError>;
  /**
   * Waits for the variantImportJobCreated state by periodically calling the underlying Omics.getVariantImportJoboperation every 30 seconds (at most 20 times). Wait until variant import is completed
   */
  waitFor(state: "variantImportJobCreated", callback?: (err: AWSError, data: Omics.Types.GetVariantImportResponse) => void): Request<Omics.Types.GetVariantImportResponse, AWSError>;
  /**
   * Waits for the variantStoreCreated state by periodically calling the underlying Omics.getVariantStoreoperation every 30 seconds (at most 20 times). Wait until a variant store is created
   */
  waitFor(state: "variantStoreCreated", params: Omics.Types.GetVariantStoreRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: Omics.Types.GetVariantStoreResponse) => void): Request<Omics.Types.GetVariantStoreResponse, AWSError>;
  /**
   * Waits for the variantStoreCreated state by periodically calling the underlying Omics.getVariantStoreoperation every 30 seconds (at most 20 times). Wait until a variant store is created
   */
  waitFor(state: "variantStoreCreated", callback?: (err: AWSError, data: Omics.Types.GetVariantStoreResponse) => void): Request<Omics.Types.GetVariantStoreResponse, AWSError>;
  /**
   * Waits for the variantStoreDeleted state by periodically calling the underlying Omics.getVariantStoreoperation every 30 seconds (at most 20 times). Wait until a variant store is deleted.
   */
  waitFor(state: "variantStoreDeleted", params: Omics.Types.GetVariantStoreRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: Omics.Types.GetVariantStoreResponse) => void): Request<Omics.Types.GetVariantStoreResponse, AWSError>;
  /**
   * Waits for the variantStoreDeleted state by periodically calling the underlying Omics.getVariantStoreoperation every 30 seconds (at most 20 times). Wait until a variant store is deleted.
   */
  waitFor(state: "variantStoreDeleted", callback?: (err: AWSError, data: Omics.Types.GetVariantStoreResponse) => void): Request<Omics.Types.GetVariantStoreResponse, AWSError>;
  /**
   * Waits for the workflowActive state by periodically calling the underlying Omics.getWorkflowoperation every 3 seconds (at most 10 times). Wait until a workflow is active.
   */
  waitFor(state: "workflowActive", params: Omics.Types.GetWorkflowRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: Omics.Types.GetWorkflowResponse) => void): Request<Omics.Types.GetWorkflowResponse, AWSError>;
  /**
   * Waits for the workflowActive state by periodically calling the underlying Omics.getWorkflowoperation every 3 seconds (at most 10 times). Wait until a workflow is active.
   */
  waitFor(state: "workflowActive", callback?: (err: AWSError, data: Omics.Types.GetWorkflowResponse) => void): Request<Omics.Types.GetWorkflowResponse, AWSError>;
}
declare namespace Omics {
  export interface ActivateReadSetFilter {
    /**
     * The filter's start date.
     */
    createdAfter?: SyntheticTimestamp_date_time;
    /**
     * The filter's end date.
     */
    createdBefore?: SyntheticTimestamp_date_time;
    /**
     * The filter's status.
     */
    status?: ReadSetActivationJobStatus;
  }
  export interface ActivateReadSetJobItem {
    /**
     * When the job completed.
     */
    completionTime?: SyntheticTimestamp_date_time;
    /**
     * When the job was created.
     */
    creationTime: SyntheticTimestamp_date_time;
    /**
     * The job's ID.
     */
    id: ActivationJobId;
    /**
     * The job's sequence store ID.
     */
    sequenceStoreId: SequenceStoreId;
    /**
     * The job's status.
     */
    status: ReadSetActivationJobStatus;
  }
  export type ActivateReadSetJobList = ActivateReadSetJobItem[];
  export interface ActivateReadSetSourceItem {
    /**
     * The source's read set ID.
     */
    readSetId: ReadSetId;
    /**
     * The source's status.
     */
    status: ReadSetActivationJobItemStatus;
    /**
     * The source's status message.
     */
    statusMessage?: JobStatusMessage;
  }
  export type ActivateReadSetSourceList = ActivateReadSetSourceItem[];
  export type ActivationJobId = string;
  export interface AnnotationImportItemDetail {
    /**
     * The item's job status.
     */
    jobStatus: JobStatus;
    /**
     * The source file's location in Amazon S3.
     */
    source: S3Uri;
  }
  export type AnnotationImportItemDetails = AnnotationImportItemDetail[];
  export interface AnnotationImportItemSource {
    /**
     * The source file's location in Amazon S3.
     */
    source: S3Uri;
  }
  export type AnnotationImportItemSources = AnnotationImportItemSource[];
  export interface AnnotationImportJobItem {
    /**
     * When the job completed.
     */
    completionTime?: CompletionTime;
    /**
     * When the job was created.
     */
    creationTime: CreationTime;
    /**
     * The job's destination annotation store.
     */
    destinationName: String;
    /**
     * The job's ID.
     */
    id: String;
    /**
     * The job's service role ARN.
     */
    roleArn: Arn;
    /**
     * The job's left normalization setting.
     */
    runLeftNormalization?: RunLeftNormalization;
    /**
     * The job's status.
     */
    status: JobStatus;
    /**
     * When the job was updated.
     */
    updateTime: UpdateTime;
  }
  export type AnnotationImportJobItems = AnnotationImportJobItem[];
  export interface AnnotationStoreItem {
    /**
     * The store's creation time.
     */
    creationTime: CreationTime;
    /**
     * The store's description.
     */
    description: StoreDescription;
    /**
     * The store's ID.
     */
    id: ResourceId;
    /**
     * The store's name.
     */
    name: String;
    /**
     * The store's genome reference.
     */
    reference: ReferenceItem;
    /**
     * The store's server-side encryption (SSE) settings.
     */
    sseConfig: SseConfig;
    /**
     * The store's status.
     */
    status: StoreStatus;
    /**
     * The store's status message.
     */
    statusMessage: StatusMessage;
    /**
     * The store's ARN.
     */
    storeArn: Arn;
    /**
     * The store's file format.
     */
    storeFormat: StoreFormat;
    /**
     * The store's size in bytes.
     */
    storeSizeBytes: Long;
    /**
     * When the store was updated.
     */
    updateTime: UpdateTime;
  }
  export type AnnotationStoreItems = AnnotationStoreItem[];
  export type AnnotationType = "GENERIC"|"CHR_POS"|"CHR_POS_REF_ALT"|"CHR_START_END_ONE_BASE"|"CHR_START_END_REF_ALT_ONE_BASE"|"CHR_START_END_ZERO_BASE"|"CHR_START_END_REF_ALT_ZERO_BASE"|string;
  export type Arn = string;
  export interface BatchDeleteReadSetRequest {
    /**
     * The read sets' IDs.
     */
    ids: ReadSetIdList;
    /**
     * The read sets' sequence store ID.
     */
    sequenceStoreId: SequenceStoreId;
  }
  export interface BatchDeleteReadSetResponse {
    /**
     * Errors returned by individual delete operations.
     */
    errors?: ReadSetBatchErrorList;
  }
  export type _Blob = Buffer|Uint8Array|Blob|string;
  export type Boolean = boolean;
  export interface CancelAnnotationImportRequest {
    /**
     * The job's ID.
     */
    jobId: ResourceId;
  }
  export interface CancelAnnotationImportResponse {
  }
  export interface CancelRunRequest {
    /**
     * The run's ID.
     */
    id: RunId;
  }
  export interface CancelVariantImportRequest {
    /**
     * The job's ID.
     */
    jobId: ResourceId;
  }
  export interface CancelVariantImportResponse {
  }
  export type ClientToken = string;
  export type CommentChar = string;
  export type CompletionTime = Date;
  export interface CreateAnnotationStoreRequest {
    /**
     * A description for the store.
     */
    description?: StoreDescription;
    /**
     * A name for the store.
     */
    name?: CreateAnnotationStoreRequestNameString;
    /**
     * The genome reference for the store's annotations.
     */
    reference?: ReferenceItem;
    /**
     * Server-side encryption (SSE) settings for the store.
     */
    sseConfig?: SseConfig;
    /**
     * The annotation file format of the store.
     */
    storeFormat: StoreFormat;
    /**
     * File parsing options for the annotation store.
     */
    storeOptions?: StoreOptions;
    /**
     * Tags for the store.
     */
    tags?: TagMap;
  }
  export type CreateAnnotationStoreRequestNameString = string;
  export interface CreateAnnotationStoreResponse {
    /**
     * When the store was created.
     */
    creationTime: CreationTime;
    /**
     * The store's ID.
     */
    id: ResourceId;
    /**
     * The store's name.
     */
    name: String;
    /**
     * The store's genome reference.
     */
    reference?: ReferenceItem;
    /**
     * The store's status.
     */
    status: StoreStatus;
    /**
     * The annotation file format of the store.
     */
    storeFormat?: StoreFormat;
    /**
     * The store's file parsing options.
     */
    storeOptions?: StoreOptions;
  }
  export interface CreateReferenceStoreRequest {
    /**
     * To ensure that requests don't run multiple times, specify a unique token for each request.
     */
    clientToken?: ClientToken;
    /**
     * A description for the store.
     */
    description?: ReferenceStoreDescription;
    /**
     * A name for the store.
     */
    name: ReferenceStoreName;
    /**
     * Server-side encryption (SSE) settings for the store.
     */
    sseConfig?: SseConfig;
    /**
     * Tags for the store.
     */
    tags?: TagMap;
  }
  export interface CreateReferenceStoreResponse {
    /**
     * The store's ARN.
     */
    arn: ReferenceStoreArn;
    /**
     * When the store was created.
     */
    creationTime: SyntheticTimestamp_date_time;
    /**
     * The store's description.
     */
    description?: ReferenceStoreDescription;
    /**
     * The store's ID.
     */
    id: ReferenceStoreId;
    /**
     * The store's name.
     */
    name?: ReferenceStoreName;
    /**
     * The store's SSE settings.
     */
    sseConfig?: SseConfig;
  }
  export interface CreateRunGroupRequest {
    /**
     * The maximum number of CPUs to use in the group.
     */
    maxCpus?: CreateRunGroupRequestMaxCpusInteger;
    /**
     * A max duration for the group.
     */
    maxDuration?: CreateRunGroupRequestMaxDurationInteger;
    /**
     * The maximum number of concurrent runs for the group.
     */
    maxRuns?: CreateRunGroupRequestMaxRunsInteger;
    /**
     * A name for the group.
     */
    name?: RunGroupName;
    /**
     * A request ID for the group.
     */
    requestId: RunGroupRequestId;
    /**
     * Tags for the group.
     */
    tags?: TagMap;
  }
  export type CreateRunGroupRequestMaxCpusInteger = number;
  export type CreateRunGroupRequestMaxDurationInteger = number;
  export type CreateRunGroupRequestMaxRunsInteger = number;
  export interface CreateRunGroupResponse {
    /**
     * The group's ARN.
     */
    arn?: RunGroupArn;
    /**
     * The group's ID.
     */
    id?: RunGroupId;
    /**
     * Tags for the run group.
     */
    tags?: TagMap;
  }
  export interface CreateSequenceStoreRequest {
    /**
     * To ensure that requests don't run multiple times, specify a unique token for each request.
     */
    clientToken?: ClientToken;
    /**
     * A description for the store.
     */
    description?: SequenceStoreDescription;
    /**
     * A name for the store.
     */
    name: SequenceStoreName;
    /**
     * Server-side encryption (SSE) settings for the store.
     */
    sseConfig?: SseConfig;
    /**
     * Tags for the store.
     */
    tags?: TagMap;
  }
  export interface CreateSequenceStoreResponse {
    /**
     * The store's ARN.
     */
    arn: SequenceStoreArn;
    /**
     * When the store was created.
     */
    creationTime: SyntheticTimestamp_date_time;
    /**
     * The store's description.
     */
    description?: SequenceStoreDescription;
    /**
     * The store's ID.
     */
    id: SequenceStoreId;
    /**
     * The store's name.
     */
    name?: SequenceStoreName;
    /**
     * The store's SSE settings.
     */
    sseConfig?: SseConfig;
  }
  export interface CreateVariantStoreRequest {
    /**
     * A description for the store.
     */
    description?: StoreDescription;
    /**
     * A name for the store.
     */
    name?: CreateVariantStoreRequestNameString;
    /**
     * The genome reference for the store's variants.
     */
    reference: ReferenceItem;
    /**
     * Server-side encryption (SSE) settings for the store.
     */
    sseConfig?: SseConfig;
    /**
     * Tags for the store.
     */
    tags?: TagMap;
  }
  export type CreateVariantStoreRequestNameString = string;
  export interface CreateVariantStoreResponse {
    /**
     * When the store was created.
     */
    creationTime: CreationTime;
    /**
     * The store's ID.
     */
    id: ResourceId;
    /**
     * The store's name.
     */
    name: String;
    /**
     * The store's genome reference.
     */
    reference?: ReferenceItem;
    /**
     * The store's status.
     */
    status: StoreStatus;
  }
  export interface CreateWorkflowRequest {
    /**
     * The URI of a definition for the workflow.
     */
    definitionUri?: WorkflowDefinition;
    /**
     * A ZIP archive for the workflow.
     */
    definitionZip?: _Blob;
    /**
     * A description for the workflow.
     */
    description?: WorkflowDescription;
    /**
     * An engine for the workflow.
     */
    engine?: WorkflowEngine;
    /**
     * The path of the main definition file for the workflow.
     */
    main?: WorkflowMain;
    /**
     * A name for the workflow.
     */
    name?: WorkflowName;
    /**
     * A parameter template for the workflow.
     */
    parameterTemplate?: WorkflowParameterTemplate;
    /**
     * A request ID for the workflow.
     */
    requestId: WorkflowRequestId;
    /**
     * A storage capacity for the workflow.
     */
    storageCapacity?: CreateWorkflowRequestStorageCapacityInteger;
    /**
     * Tags for the workflow.
     */
    tags?: TagMap;
  }
  export type CreateWorkflowRequestStorageCapacityInteger = number;
  export interface CreateWorkflowResponse {
    /**
     * The workflow's ARN.
     */
    arn?: WorkflowArn;
    /**
     * The workflow's ID.
     */
    id?: WorkflowId;
    /**
     * The workflow's status.
     */
    status?: WorkflowStatus;
    /**
     * The workflow's tags.
     */
    tags?: TagMap;
  }
  export type CreationTime = Date;
  export interface DeleteAnnotationStoreRequest {
    /**
     * Whether to force deletion.
     */
    force?: PrimitiveBoolean;
    /**
     * The store's name.
     */
    name: String;
  }
  export interface DeleteAnnotationStoreResponse {
    /**
     * The store's status.
     */
    status: StoreStatus;
  }
  export interface DeleteReferenceRequest {
    /**
     * The reference's ID.
     */
    id: ReferenceId;
    /**
     * The reference's store ID.
     */
    referenceStoreId: ReferenceStoreId;
  }
  export interface DeleteReferenceResponse {
  }
  export interface DeleteReferenceStoreRequest {
    /**
     * The store's ID.
     */
    id: ReferenceStoreId;
  }
  export interface DeleteReferenceStoreResponse {
  }
  export interface DeleteRunGroupRequest {
    /**
     * The run group's ID.
     */
    id: RunGroupId;
  }
  export interface DeleteRunRequest {
    /**
     * The run's ID.
     */
    id: RunId;
  }
  export interface DeleteSequenceStoreRequest {
    /**
     * The sequence store's ID.
     */
    id: SequenceStoreId;
  }
  export interface DeleteSequenceStoreResponse {
  }
  export interface DeleteVariantStoreRequest {
    /**
     * Whether to force deletion.
     */
    force?: PrimitiveBoolean;
    /**
     * The store's name.
     */
    name: String;
  }
  export interface DeleteVariantStoreResponse {
    /**
     * The store's status.
     */
    status: StoreStatus;
  }
  export interface DeleteWorkflowRequest {
    /**
     * The workflow's ID.
     */
    id: WorkflowId;
  }
  export type Encoding = string;
  export type EncryptionType = "KMS"|string;
  export type EscapeChar = string;
  export type EscapeQuotes = boolean;
  export type ExportJobId = string;
  export interface ExportReadSet {
    /**
     * The set's ID.
     */
    readSetId: ReadSetId;
  }
  export interface ExportReadSetDetail {
    /**
     * The set's ID.
     */
    id: ReadSetId;
    /**
     * The set's status.
     */
    status: ReadSetExportJobItemStatus;
    /**
     * The set's status message.
     */
    statusMessage?: JobStatusMessage;
  }
  export type ExportReadSetDetailList = ExportReadSetDetail[];
  export interface ExportReadSetFilter {
    /**
     * The filter's start date.
     */
    createdAfter?: SyntheticTimestamp_date_time;
    /**
     * The filter's end date.
     */
    createdBefore?: SyntheticTimestamp_date_time;
    /**
     * A status to filter on.
     */
    status?: ReadSetExportJobStatus;
  }
  export interface ExportReadSetJobDetail {
    /**
     * When the job completed.
     */
    completionTime?: SyntheticTimestamp_date_time;
    /**
     * When the job was created.
     */
    creationTime: SyntheticTimestamp_date_time;
    /**
     * The job's destination in Amazon S3.
     */
    destination: S3Destination;
    /**
     * The job's ID.
     */
    id: ExportJobId;
    /**
     * The job's sequence store ID.
     */
    sequenceStoreId: SequenceStoreId;
    /**
     * The job's status.
     */
    status: ReadSetExportJobStatus;
  }
  export type ExportReadSetJobDetailList = ExportReadSetJobDetail[];
  export interface FileInformation {
    /**
     * The file's content length.
     */
    contentLength?: FileInformationContentLengthLong;
    /**
     * The file's part size.
     */
    partSize?: FileInformationPartSizeLong;
    /**
     * The file's total parts.
     */
    totalParts?: FileInformationTotalPartsInteger;
  }
  export type FileInformationContentLengthLong = number;
  export type FileInformationPartSizeLong = number;
  export type FileInformationTotalPartsInteger = number;
  export type FileType = "FASTQ"|"BAM"|"CRAM"|string;
  export interface FormatOptions {
    /**
     * Options for a TSV file.
     */
    tsvOptions?: TsvOptions;
    /**
     * Options for a VCF file.
     */
    vcfOptions?: VcfOptions;
  }
  export type FormatToHeader = {[key: string]: FormatToHeaderValueString};
  export type FormatToHeaderKey = "CHR"|"START"|"END"|"REF"|"ALT"|"POS"|string;
  export type FormatToHeaderValueString = string;
  export type GeneratedFrom = string;
  export interface GetAnnotationImportRequest {
    /**
     * The job's ID.
     */
    jobId: ResourceId;
  }
  export interface GetAnnotationImportResponse {
    /**
     * When the job completed.
     */
    completionTime: CompletionTime;
    /**
     * When the job was created.
     */
    creationTime: CreationTime;
    /**
     * The job's destination annotation store.
     */
    destinationName: StoreName;
    formatOptions: FormatOptions;
    /**
     * The job's ID.
     */
    id: ResourceId;
    /**
     * The job's imported items.
     */
    items: AnnotationImportItemDetails;
    /**
     * The job's service role ARN.
     */
    roleArn: Arn;
    /**
     * The job's left normalization setting.
     */
    runLeftNormalization: RunLeftNormalization;
    /**
     * The job's status.
     */
    status: JobStatus;
    /**
     * The job's status message.
     */
    statusMessage: JobStatusMsg;
    /**
     * When the job was updated.
     */
    updateTime: UpdateTime;
  }
  export interface GetAnnotationStoreRequest {
    /**
     * The store's name.
     */
    name: String;
  }
  export interface GetAnnotationStoreResponse {
    /**
     * When the store was created.
     */
    creationTime: CreationTime;
    /**
     * The store's description.
     */
    description: StoreDescription;
    /**
     * The store's ID.
     */
    id: ResourceId;
    /**
     * The store's name.
     */
    name: String;
    /**
     * The store's genome reference.
     */
    reference: ReferenceItem;
    /**
     * The store's server-side encryption (SSE) settings.
     */
    sseConfig: SseConfig;
    /**
     * The store's status.
     */
    status: StoreStatus;
    /**
     * A status message.
     */
    statusMessage: StatusMessage;
    /**
     * The store's ARN.
     */
    storeArn: Arn;
    /**
     * The store's annotation file format.
     */
    storeFormat?: StoreFormat;
    /**
     * The store's parsing options.
     */
    storeOptions?: StoreOptions;
    /**
     * The store's size in bytes.
     */
    storeSizeBytes: Long;
    /**
     * The store's tags.
     */
    tags: TagMap;
    /**
     * When the store was updated.
     */
    updateTime: UpdateTime;
  }
  export interface GetReadSetActivationJobRequest {
    /**
     * The job's ID.
     */
    id: ActivationJobId;
    /**
     * The job's sequence store ID.
     */
    sequenceStoreId: SequenceStoreId;
  }
  export interface GetReadSetActivationJobResponse {
    /**
     * When the job completed.
     */
    completionTime?: SyntheticTimestamp_date_time;
    /**
     * When the job was created.
     */
    creationTime: SyntheticTimestamp_date_time;
    /**
     * The job's ID.
     */
    id: ActivationJobId;
    /**
     * The job's sequence store ID.
     */
    sequenceStoreId: SequenceStoreId;
    /**
     * The job's sources.
     */
    sources?: ActivateReadSetSourceList;
    /**
     * The job's status.
     */
    status: ReadSetActivationJobStatus;
    /**
     * The job's status message.
     */
    statusMessage?: JobStatusMessage;
  }
  export interface GetReadSetExportJobRequest {
    /**
     * The job's ID.
     */
    id: ExportJobId;
    /**
     * The job's sequence store ID.
     */
    sequenceStoreId: SequenceStoreId;
  }
  export interface GetReadSetExportJobResponse {
    /**
     * When the job completed.
     */
    completionTime?: SyntheticTimestamp_date_time;
    /**
     * When the job was created.
     */
    creationTime: SyntheticTimestamp_date_time;
    /**
     * The job's destination in Amazon S3.
     */
    destination: S3Destination;
    /**
     * The job's ID.
     */
    id: ExportJobId;
    /**
     * The job's read sets.
     */
    readSets?: ExportReadSetDetailList;
    /**
     * The job's sequence store ID.
     */
    sequenceStoreId: SequenceStoreId;
    /**
     * The job's status.
     */
    status: ReadSetExportJobStatus;
    /**
     * The job's status message.
     */
    statusMessage?: JobStatusMessage;
  }
  export interface GetReadSetImportJobRequest {
    /**
     * The job's ID.
     */
    id: ImportJobId;
    /**
     * The job's sequence store ID.
     */
    sequenceStoreId: SequenceStoreId;
  }
  export interface GetReadSetImportJobResponse {
    /**
     * When the job completed.
     */
    completionTime?: SyntheticTimestamp_date_time;
    /**
     * When the job was created.
     */
    creationTime: SyntheticTimestamp_date_time;
    /**
     * The job's ID.
     */
    id: ImportJobId;
    /**
     * The job's service role ARN.
     */
    roleArn: RoleArn;
    /**
     * The job's sequence store ID.
     */
    sequenceStoreId: SequenceStoreId;
    /**
     * The job's sources.
     */
    sources: ImportReadSetSourceList;
    /**
     * The job's status.
     */
    status: ReadSetImportJobStatus;
    /**
     * The job's status message.
     */
    statusMessage?: JobStatusMessage;
  }
  export interface GetReadSetMetadataRequest {
    /**
     * The read set's ID.
     */
    id: ReadSetId;
    /**
     * The read set's sequence store ID.
     */
    sequenceStoreId: SequenceStoreId;
  }
  export interface GetReadSetMetadataResponse {
    /**
     * The read set's ARN.
     */
    arn: ReadSetArn;
    /**
     * When the read set was created.
     */
    creationTime: SyntheticTimestamp_date_time;
    /**
     * The read set's description.
     */
    description?: ReadSetDescription;
    /**
     * The read set's file type.
     */
    fileType: FileType;
    /**
     * The read set's files.
     */
    files?: ReadSetFiles;
    /**
     * The read set's ID.
     */
    id: ReadSetId;
    /**
     * The read set's name.
     */
    name?: ReadSetName;
    /**
     * The read set's genome reference ARN.
     */
    referenceArn?: ReferenceArn;
    /**
     * The read set's sample ID.
     */
    sampleId?: SampleId;
    /**
     * The read set's sequence information.
     */
    sequenceInformation?: SequenceInformation;
    /**
     * The read set's sequence store ID.
     */
    sequenceStoreId: SequenceStoreId;
    /**
     * The read set's status.
     */
    status: ReadSetStatus;
    /**
     * The read set's subject ID.
     */
    subjectId?: SubjectId;
  }
  export interface GetReadSetRequest {
    /**
     * The file to retrieve.
     */
    file?: ReadSetFile;
    /**
     * The read set's ID.
     */
    id: ReadSetId;
    /**
     * The part number to retrieve.
     */
    partNumber: GetReadSetRequestPartNumberInteger;
    /**
     * The read set's sequence store ID.
     */
    sequenceStoreId: SequenceStoreId;
  }
  export type GetReadSetRequestPartNumberInteger = number;
  export interface GetReadSetResponse {
    /**
     * The read set file payload.
     */
    payload?: ReadSetStreamingBlob;
  }
  export interface GetReferenceImportJobRequest {
    /**
     * The job's ID.
     */
    id: ImportJobId;
    /**
     * The job's reference store ID.
     */
    referenceStoreId: ReferenceStoreId;
  }
  export interface GetReferenceImportJobResponse {
    /**
     * When the job completed.
     */
    completionTime?: SyntheticTimestamp_date_time;
    /**
     * When the job was created.
     */
    creationTime: SyntheticTimestamp_date_time;
    /**
     * The job's ID.
     */
    id: ImportJobId;
    /**
     * The job's reference store ID.
     */
    referenceStoreId: ReferenceStoreId;
    /**
     * The job's service role ARN.
     */
    roleArn: RoleArn;
    /**
     * The job's sources.
     */
    sources: ImportReferenceSourceList;
    /**
     * The job's status.
     */
    status: ReferenceImportJobStatus;
    /**
     * The job's status message.
     */
    statusMessage?: JobStatusMessage;
  }
  export interface GetReferenceMetadataRequest {
    /**
     * The reference's ID.
     */
    id: ReferenceId;
    /**
     * The reference's reference store ID.
     */
    referenceStoreId: ReferenceStoreId;
  }
  export interface GetReferenceMetadataResponse {
    /**
     * The reference's ARN.
     */
    arn: ReferenceArn;
    /**
     * When the reference was created.
     */
    creationTime: SyntheticTimestamp_date_time;
    /**
     * The reference's description.
     */
    description?: ReferenceDescription;
    /**
     * The reference's files.
     */
    files?: ReferenceFiles;
    /**
     * The reference's ID.
     */
    id: ReferenceId;
    /**
     * The reference's MD5 checksum.
     */
    md5: Md5;
    /**
     * The reference's name.
     */
    name?: ReferenceName;
    /**
     * The reference's reference store ID.
     */
    referenceStoreId: ReferenceStoreId;
    /**
     * The reference's status.
     */
    status?: ReferenceStatus;
    /**
     * When the reference was updated.
     */
    updateTime: SyntheticTimestamp_date_time;
  }
  export interface GetReferenceRequest {
    /**
     * The file to retrieve.
     */
    file?: ReferenceFile;
    /**
     * The reference's ID.
     */
    id: ReferenceId;
    /**
     * The part number to retrieve.
     */
    partNumber: GetReferenceRequestPartNumberInteger;
    /**
     * The range to retrieve.
     */
    range?: Range;
    /**
     * The reference's store ID.
     */
    referenceStoreId: ReferenceStoreId;
  }
  export type GetReferenceRequestPartNumberInteger = number;
  export interface GetReferenceResponse {
    /**
     * The reference file payload.
     */
    payload?: ReferenceStreamingBlob;
  }
  export interface GetReferenceStoreRequest {
    /**
     * The store's ID.
     */
    id: ReferenceStoreId;
  }
  export interface GetReferenceStoreResponse {
    /**
     * The store's ARN.
     */
    arn: ReferenceStoreArn;
    /**
     * When the store was created.
     */
    creationTime: SyntheticTimestamp_date_time;
    /**
     * The store's description.
     */
    description?: ReferenceStoreDescription;
    /**
     * The store's ID.
     */
    id: ReferenceStoreId;
    /**
     * The store's name.
     */
    name?: ReferenceStoreName;
    /**
     * The store's server-side encryption (SSE) settings.
     */
    sseConfig?: SseConfig;
  }
  export interface GetRunGroupRequest {
    /**
     * The group's ID.
     */
    id: RunGroupId;
  }
  export interface GetRunGroupResponse {
    /**
     * The group's ARN.
     */
    arn?: RunGroupArn;
    /**
     * When the group was created.
     */
    creationTime?: RunGroupTimestamp;
    /**
     * The group's ID.
     */
    id?: RunGroupId;
    /**
     * The group's maximum number of CPUs to use.
     */
    maxCpus?: GetRunGroupResponseMaxCpusInteger;
    /**
     * The group's maximum run duration.
     */
    maxDuration?: GetRunGroupResponseMaxDurationInteger;
    /**
     * The maximum number of concurrent runs for the group.
     */
    maxRuns?: GetRunGroupResponseMaxRunsInteger;
    /**
     * The group's name.
     */
    name?: RunGroupName;
    /**
     * The group's tags.
     */
    tags?: TagMap;
  }
  export type GetRunGroupResponseMaxCpusInteger = number;
  export type GetRunGroupResponseMaxDurationInteger = number;
  export type GetRunGroupResponseMaxRunsInteger = number;
  export interface GetRunRequest {
    /**
     * The run's export format.
     */
    export?: RunExportList;
    /**
     * The run's ID.
     */
    id: RunId;
  }
  export interface GetRunResponse {
    /**
     * The run's ARN.
     */
    arn?: RunArn;
    /**
     * When the run was created.
     */
    creationTime?: RunTimestamp;
    /**
     * The run's definition.
     */
    definition?: WorkflowDefinition;
    /**
     * The run's digest.
     */
    digest?: WorkflowDigest;
    /**
     * The run's ID.
     */
    id?: RunId;
    /**
     * The run's log level.
     */
    logLevel?: RunLogLevel;
    /**
     * The run's name.
     */
    name?: RunName;
    /**
     * The run's output URI.
     */
    outputUri?: RunOutputUri;
    /**
     * The run's parameters.
     */
    parameters?: RunParameters;
    /**
     * The run's priority.
     */
    priority?: GetRunResponsePriorityInteger;
    /**
     * The run's resource digests.
     */
    resourceDigests?: RunResourceDigests;
    /**
     * The run's service role ARN.
     */
    roleArn?: RunRoleArn;
    /**
     * The run's group ID.
     */
    runGroupId?: RunGroupId;
    /**
     * The run's ID.
     */
    runId?: RunId;
    /**
     * When the run started.
     */
    startTime?: RunTimestamp;
    /**
     * Who started the run.
     */
    startedBy?: RunStartedBy;
    /**
     * The run's status.
     */
    status?: RunStatus;
    /**
     * The run's status message.
     */
    statusMessage?: RunStatusMessage;
    /**
     * The run's stop time.
     */
    stopTime?: RunTimestamp;
    /**
     * The run's storage capacity.
     */
    storageCapacity?: GetRunResponseStorageCapacityInteger;
    /**
     * The run's tags.
     */
    tags?: TagMap;
    /**
     * The run's workflow ID.
     */
    workflowId?: WorkflowId;
    /**
     * The run's workflow type.
     */
    workflowType?: WorkflowType;
  }
  export type GetRunResponsePriorityInteger = number;
  export type GetRunResponseStorageCapacityInteger = number;
  export interface GetRunTaskRequest {
    /**
     * The task's ID.
     */
    id: RunId;
    /**
     * The task's ID.
     */
    taskId: TaskId;
  }
  export interface GetRunTaskResponse {
    /**
     * The task's CPU usage.
     */
    cpus?: GetRunTaskResponseCpusInteger;
    /**
     * When the task was created.
     */
    creationTime?: TaskTimestamp;
    /**
     * The task's log stream.
     */
    logStream?: TaskLogStream;
    /**
     * The task's memory setting.
     */
    memory?: GetRunTaskResponseMemoryInteger;
    /**
     * The task's name.
     */
    name?: TaskName;
    /**
     * The task's start time.
     */
    startTime?: TaskTimestamp;
    /**
     * The task's status.
     */
    status?: TaskStatus;
    /**
     * The task's status message.
     */
    statusMessage?: TaskStatusMessage;
    /**
     * The task's stop time.
     */
    stopTime?: TaskTimestamp;
    /**
     * The task's ID.
     */
    taskId?: TaskId;
  }
  export type GetRunTaskResponseCpusInteger = number;
  export type GetRunTaskResponseMemoryInteger = number;
  export interface GetSequenceStoreRequest {
    /**
     * The store's ID.
     */
    id: SequenceStoreId;
  }
  export interface GetSequenceStoreResponse {
    /**
     * The store's ARN.
     */
    arn: SequenceStoreArn;
    /**
     * When the store was created.
     */
    creationTime: SyntheticTimestamp_date_time;
    /**
     * The store's description.
     */
    description?: SequenceStoreDescription;
    /**
     * The store's ID.
     */
    id: SequenceStoreId;
    /**
     * The store's name.
     */
    name?: SequenceStoreName;
    /**
     * The store's server-side encryption (SSE) settings.
     */
    sseConfig?: SseConfig;
  }
  export interface GetVariantImportRequest {
    /**
     * The job's ID.
     */
    jobId: ResourceId;
  }
  export interface GetVariantImportResponse {
    /**
     * When the job completed.
     */
    completionTime?: CompletionTime;
    /**
     * When the job was created.
     */
    creationTime: CreationTime;
    /**
     * The job's destination variant store.
     */
    destinationName: StoreName;
    /**
     * The job's ID.
     */
    id: ResourceId;
    /**
     * The job's items.
     */
    items: VariantImportItemDetails;
    /**
     * The job's service role ARN.
     */
    roleArn: Arn;
    /**
     * The job's left normalization setting.
     */
    runLeftNormalization: RunLeftNormalization;
    /**
     * The job's status.
     */
    status: JobStatus;
    /**
     * The job's status message.
     */
    statusMessage: JobStatusMsg;
    /**
     * When the job was updated.
     */
    updateTime: UpdateTime;
  }
  export interface GetVariantStoreRequest {
    /**
     * The store's name.
     */
    name: String;
  }
  export interface GetVariantStoreResponse {
    /**
     * When the store was created.
     */
    creationTime: CreationTime;
    /**
     * The store's description.
     */
    description: StoreDescription;
    /**
     * The store's ID.
     */
    id: ResourceId;
    /**
     * The store's name.
     */
    name: String;
    /**
     * The store's genome reference.
     */
    reference: ReferenceItem;
    /**
     * The store's server-side encryption (SSE) settings.
     */
    sseConfig: SseConfig;
    /**
     * The store's status.
     */
    status: StoreStatus;
    /**
     * The store's status message.
     */
    statusMessage: StatusMessage;
    /**
     * The store's ARN.
     */
    storeArn: Arn;
    /**
     * The store's size in bytes.
     */
    storeSizeBytes: Long;
    /**
     * The store's tags.
     */
    tags: TagMap;
    /**
     * When the store was updated.
     */
    updateTime: UpdateTime;
  }
  export interface GetWorkflowRequest {
    /**
     * The export format for the workflow.
     */
    export?: WorkflowExportList;
    /**
     * The workflow's ID.
     */
    id: WorkflowId;
    /**
     * The workflow's type.
     */
    type?: WorkflowType;
  }
  export interface GetWorkflowResponse {
    /**
     * The workflow's ARN.
     */
    arn?: WorkflowArn;
    /**
     * When the workflow was created.
     */
    creationTime?: WorkflowTimestamp;
    /**
     * The workflow's definition.
     */
    definition?: WorkflowDefinition;
    /**
     * The workflow's description.
     */
    description?: WorkflowDescription;
    /**
     * The workflow's digest.
     */
    digest?: WorkflowDigest;
    /**
     * The workflow's engine.
     */
    engine?: WorkflowEngine;
    /**
     * The workflow's ID.
     */
    id?: WorkflowId;
    /**
     * The path of the main definition file for the workflow.
     */
    main?: WorkflowMain;
    /**
     * The workflow's name.
     */
    name?: WorkflowName;
    /**
     * The workflow's parameter template.
     */
    parameterTemplate?: WorkflowParameterTemplate;
    /**
     * The workflow's status.
     */
    status?: WorkflowStatus;
    /**
     * The workflow's status message.
     */
    statusMessage?: WorkflowStatusMessage;
    /**
     * The workflow's storage capacity.
     */
    storageCapacity?: GetWorkflowResponseStorageCapacityInteger;
    /**
     * The workflow's tags.
     */
    tags?: TagMap;
    /**
     * The workflow's type.
     */
    type?: WorkflowType;
  }
  export type GetWorkflowResponseStorageCapacityInteger = number;
  export type Header = boolean;
  export type ImportJobId = string;
  export interface ImportReadSetFilter {
    /**
     * The filter's start date.
     */
    createdAfter?: SyntheticTimestamp_date_time;
    /**
     * The filter's end date.
     */
    createdBefore?: SyntheticTimestamp_date_time;
    /**
     * A status to filter on.
     */
    status?: ReadSetImportJobStatus;
  }
  export interface ImportReadSetJobItem {
    /**
     * When the job completed.
     */
    completionTime?: SyntheticTimestamp_date_time;
    /**
     * When the job was created.
     */
    creationTime: SyntheticTimestamp_date_time;
    /**
     * The job's ID.
     */
    id: ImportJobId;
    /**
     * The job's service role ARN.
     */
    roleArn: RoleArn;
    /**
     * The job's sequence store ID.
     */
    sequenceStoreId: SequenceStoreId;
    /**
     * The job's status.
     */
    status: ReadSetImportJobStatus;
  }
  export type ImportReadSetJobList = ImportReadSetJobItem[];
  export interface ImportReadSetSourceItem {
    /**
     * The source's description.
     */
    description?: ReadSetDescription;
    /**
     * Where the source originated.
     */
    generatedFrom?: GeneratedFrom;
    /**
     * The source's name.
     */
    name?: ReadSetName;
    /**
     * The source's genome reference ARN.
     */
    referenceArn?: ReferenceArn;
    /**
     * The source's sample ID.
     */
    sampleId: SampleId;
    /**
     * The source's file type.
     */
    sourceFileType: FileType;
    /**
     * The source files' location in Amazon S3.
     */
    sourceFiles: SourceFiles;
    /**
     * The source's status.
     */
    status: ReadSetImportJobItemStatus;
    /**
     * The source's status message.
     */
    statusMessage?: JobStatusMessage;
    /**
     * The source's subject ID.
     */
    subjectId: SubjectId;
    /**
     * The source's tags.
     */
    tags?: TagMap;
  }
  export type ImportReadSetSourceList = ImportReadSetSourceItem[];
  export interface ImportReferenceFilter {
    /**
     * The filter's start date.
     */
    createdAfter?: SyntheticTimestamp_date_time;
    /**
     * The filter's end date.
     */
    createdBefore?: SyntheticTimestamp_date_time;
    /**
     * A status to filter on.
     */
    status?: ReferenceImportJobStatus;
  }
  export interface ImportReferenceJobItem {
    /**
     * When the job completed.
     */
    completionTime?: SyntheticTimestamp_date_time;
    /**
     * When the job was created.
     */
    creationTime: SyntheticTimestamp_date_time;
    /**
     * The job's ID.
     */
    id: ImportJobId;
    /**
     * The job's reference store ID.
     */
    referenceStoreId: ReferenceStoreId;
    /**
     * The job's service role ARN.
     */
    roleArn: RoleArn;
    /**
     * The job's status.
     */
    status: ReferenceImportJobStatus;
  }
  export type ImportReferenceJobList = ImportReferenceJobItem[];
  export interface ImportReferenceSourceItem {
    /**
     * The source's description.
     */
    description?: ReferenceDescription;
    /**
     * The source's name.
     */
    name?: ReferenceName;
    /**
     * The source file's location in Amazon S3.
     */
    sourceFile?: S3Uri;
    /**
     * The source's status.
     */
    status: ReferenceImportJobItemStatus;
    /**
     * The source's status message.
     */
    statusMessage?: JobStatusMessage;
    /**
     * The source's tags.
     */
    tags?: TagMap;
  }
  export type ImportReferenceSourceList = ImportReferenceSourceItem[];
  export type JobStatus = "SUBMITTED"|"IN_PROGRESS"|"CANCELLED"|"COMPLETED"|"FAILED"|string;
  export type JobStatusMessage = string;
  export type JobStatusMsg = string;
  export type LineSep = string;
  export interface ListAnnotationImportJobsFilter {
    /**
     * A status to filter on.
     */
    status?: JobStatus;
    /**
     * A store name to filter on.
     */
    storeName?: String;
  }
  export interface ListAnnotationImportJobsRequest {
    /**
     * A filter to apply to the list.
     */
    filter?: ListAnnotationImportJobsFilter;
    /**
     * IDs of annotation import jobs to retrieve.
     */
    ids?: ListAnnotationImportJobsRequestIdsList;
    /**
     * The maximum number of jobs to return in one page of results.
     */
    maxResults?: ListAnnotationImportJobsRequestMaxResultsInteger;
    /**
     * Specify the pagination token from a previous request to retrieve the next page of results.
     */
    nextToken?: ListAnnotationImportJobsRequestNextTokenString;
  }
  export type ListAnnotationImportJobsRequestIdsList = ResourceIdentifier[];
  export type ListAnnotationImportJobsRequestMaxResultsInteger = number;
  export type ListAnnotationImportJobsRequestNextTokenString = string;
  export interface ListAnnotationImportJobsResponse {
    /**
     * A list of jobs.
     */
    annotationImportJobs?: AnnotationImportJobItems;
    /**
     * A pagination token that's included if more results are available.
     */
    nextToken?: String;
  }
  export interface ListAnnotationStoresFilter {
    /**
     * A status to filter on.
     */
    status?: StoreStatus;
  }
  export interface ListAnnotationStoresRequest {
    /**
     * A filter to apply to the list.
     */
    filter?: ListAnnotationStoresFilter;
    /**
     * IDs of stores to list.
     */
    ids?: ListAnnotationStoresRequestIdsList;
    /**
     * The maximum number of stores to return in one page of results.
     */
    maxResults?: ListAnnotationStoresRequestMaxResultsInteger;
    /**
     * Specify the pagination token from a previous request to retrieve the next page of results.
     */
    nextToken?: ListAnnotationStoresRequestNextTokenString;
  }
  export type ListAnnotationStoresRequestIdsList = ResourceIdentifier[];
  export type ListAnnotationStoresRequestMaxResultsInteger = number;
  export type ListAnnotationStoresRequestNextTokenString = string;
  export interface ListAnnotationStoresResponse {
    /**
     * A list of stores.
     */
    annotationStores?: AnnotationStoreItems;
    /**
     * A pagination token that's included if more results are available.
     */
    nextToken?: String;
  }
  export interface ListReadSetActivationJobsRequest {
    /**
     * A filter to apply to the list.
     */
    filter?: ActivateReadSetFilter;
    /**
     * The maximum number of read set activation jobs to return in one page of results.
     */
    maxResults?: ListReadSetActivationJobsRequestMaxResultsInteger;
    /**
     * Specify the pagination token from a previous request to retrieve the next page of results.
     */
    nextToken?: NextToken;
    /**
     * The read set's sequence store ID.
     */
    sequenceStoreId: SequenceStoreId;
  }
  export type ListReadSetActivationJobsRequestMaxResultsInteger = number;
  export interface ListReadSetActivationJobsResponse {
    /**
     * A list of jobs.
     */
    activationJobs?: ActivateReadSetJobList;
    /**
     * A pagination token that's included if more results are available.
     */
    nextToken?: NextToken;
  }
  export interface ListReadSetExportJobsRequest {
    /**
     * A filter to apply to the list.
     */
    filter?: ExportReadSetFilter;
    /**
     * The maximum number of jobs to return in one page of results.
     */
    maxResults?: ListReadSetExportJobsRequestMaxResultsInteger;
    /**
     * Specify the pagination token from a previous request to retrieve the next page of results.
     */
    nextToken?: NextToken;
    /**
     * The jobs' sequence store ID.
     */
    sequenceStoreId: SequenceStoreId;
  }
  export type ListReadSetExportJobsRequestMaxResultsInteger = number;
  export interface ListReadSetExportJobsResponse {
    /**
     * A list of jobs.
     */
    exportJobs?: ExportReadSetJobDetailList;
    /**
     * A pagination token that's included if more results are available.
     */
    nextToken?: NextToken;
  }
  export interface ListReadSetImportJobsRequest {
    /**
     * A filter to apply to the list.
     */
    filter?: ImportReadSetFilter;
    /**
     * The maximum number of jobs to return in one page of results.
     */
    maxResults?: ListReadSetImportJobsRequestMaxResultsInteger;
    /**
     * Specify the pagination token from a previous request to retrieve the next page of results.
     */
    nextToken?: NextToken;
    /**
     * The jobs' sequence store ID.
     */
    sequenceStoreId: SequenceStoreId;
  }
  export type ListReadSetImportJobsRequestMaxResultsInteger = number;
  export interface ListReadSetImportJobsResponse {
    /**
     * A list of jobs.
     */
    importJobs?: ImportReadSetJobList;
    /**
     * A pagination token that's included if more results are available.
     */
    nextToken?: NextToken;
  }
  export interface ListReadSetsRequest {
    /**
     * A filter to apply to the list.
     */
    filter?: ReadSetFilter;
    /**
     * The maximum number of read sets to return in one page of results.
     */
    maxResults?: ListReadSetsRequestMaxResultsInteger;
    /**
     * Specify the pagination token from a previous request to retrieve the next page of results.
     */
    nextToken?: NextToken;
    /**
     * The jobs' sequence store ID.
     */
    sequenceStoreId: SequenceStoreId;
  }
  export type ListReadSetsRequestMaxResultsInteger = number;
  export interface ListReadSetsResponse {
    /**
     * A pagination token that's included if more results are available.
     */
    nextToken?: NextToken;
    /**
     * A list of read sets.
     */
    readSets: ReadSetList;
  }
  export interface ListReferenceImportJobsRequest {
    /**
     * A filter to apply to the list.
     */
    filter?: ImportReferenceFilter;
    /**
     * The maximum number of jobs to return in one page of results.
     */
    maxResults?: ListReferenceImportJobsRequestMaxResultsInteger;
    /**
     * Specify the pagination token from a previous request to retrieve the next page of results.
     */
    nextToken?: NextToken;
    /**
     * The job's reference store ID.
     */
    referenceStoreId: ReferenceStoreId;
  }
  export type ListReferenceImportJobsRequestMaxResultsInteger = number;
  export interface ListReferenceImportJobsResponse {
    /**
     * A lis of jobs.
     */
    importJobs?: ImportReferenceJobList;
    /**
     * A pagination token that's included if more results are available.
     */
    nextToken?: NextToken;
  }
  export interface ListReferenceStoresRequest {
    /**
     * A filter to apply to the list.
     */
    filter?: ReferenceStoreFilter;
    /**
     * The maximum number of stores to return in one page of results.
     */
    maxResults?: ListReferenceStoresRequestMaxResultsInteger;
    /**
     * Specify the pagination token from a previous request to retrieve the next page of results.
     */
    nextToken?: NextToken;
  }
  export type ListReferenceStoresRequestMaxResultsInteger = number;
  export interface ListReferenceStoresResponse {
    /**
     * A pagination token that's included if more results are available.
     */
    nextToken?: NextToken;
    /**
     * A list of reference stores.
     */
    referenceStores: ReferenceStoreDetailList;
  }
  export interface ListReferencesRequest {
    /**
     * A filter to apply to the list.
     */
    filter?: ReferenceFilter;
    /**
     * The maximum number of references to return in one page of results.
     */
    maxResults?: ListReferencesRequestMaxResultsInteger;
    /**
     * Specify the pagination token from a previous request to retrieve the next page of results.
     */
    nextToken?: NextToken;
    /**
     * The references' reference store ID.
     */
    referenceStoreId: ReferenceStoreId;
  }
  export type ListReferencesRequestMaxResultsInteger = number;
  export interface ListReferencesResponse {
    /**
     * A pagination token that's included if more results are available.
     */
    nextToken?: NextToken;
    /**
     * A list of references.
     */
    references: ReferenceList;
  }
  export interface ListRunGroupsRequest {
    /**
     * The maximum number of run groups to return in one page of results.
     */
    maxResults?: ListRunGroupsRequestMaxResultsInteger;
    /**
     * The run groups' name.
     */
    name?: RunGroupName;
    /**
     * Specify the pagination token from a previous request to retrieve the next page of results.
     */
    startingToken?: RunGroupListToken;
  }
  export type ListRunGroupsRequestMaxResultsInteger = number;
  export interface ListRunGroupsResponse {
    /**
     * A list of groups.
     */
    items?: RunGroupList;
    /**
     * A pagination token that's included if more results are available.
     */
    nextToken?: RunGroupListToken;
  }
  export interface ListRunTasksRequest {
    /**
     * The run's ID.
     */
    id: RunId;
    /**
     * The maximum number of run tasks to return in one page of results.
     */
    maxResults?: ListRunTasksRequestMaxResultsInteger;
    /**
     * Specify the pagination token from a previous request to retrieve the next page of results.
     */
    startingToken?: TaskListToken;
    /**
     * Filter the list by status.
     */
    status?: TaskStatus;
  }
  export type ListRunTasksRequestMaxResultsInteger = number;
  export interface ListRunTasksResponse {
    /**
     * A list of tasks.
     */
    items?: TaskList;
    /**
     * A pagination token that's included if more results are available.
     */
    nextToken?: TaskListToken;
  }
  export interface ListRunsRequest {
    /**
     * The maximum number of runs to return in one page of results.
     */
    maxResults?: ListRunsRequestMaxResultsInteger;
    /**
     * Filter the list by run name.
     */
    name?: RunName;
    /**
     * Filter the list by run group ID.
     */
    runGroupId?: RunGroupId;
    /**
     * Specify the pagination token from a previous request to retrieve the next page of results.
     */
    startingToken?: RunListToken;
  }
  export type ListRunsRequestMaxResultsInteger = number;
  export interface ListRunsResponse {
    /**
     * A list of runs.
     */
    items?: RunList;
    /**
     * A pagination token that's included if more results are available.
     */
    nextToken?: RunListToken;
  }
  export interface ListSequenceStoresRequest {
    /**
     * A filter to apply to the list.
     */
    filter?: SequenceStoreFilter;
    /**
     * The maximum number of stores to return in one page of results.
     */
    maxResults?: ListSequenceStoresRequestMaxResultsInteger;
    /**
     * Specify the pagination token from a previous request to retrieve the next page of results.
     */
    nextToken?: NextToken;
  }
  export type ListSequenceStoresRequestMaxResultsInteger = number;
  export interface ListSequenceStoresResponse {
    /**
     * A pagination token that's included if more results are available.
     */
    nextToken?: NextToken;
    /**
     * A list of sequence stores.
     */
    sequenceStores: SequenceStoreDetailList;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The resource's ARN.
     */
    resourceArn: TagArn;
  }
  export interface ListTagsForResourceResponse {
    /**
     * A list of tags.
     */
    tags: TagMap;
  }
  export interface ListVariantImportJobsFilter {
    /**
     * A status to filter on.
     */
    status?: JobStatus;
    /**
     * A store name to filter on.
     */
    storeName?: String;
  }
  export interface ListVariantImportJobsRequest {
    /**
     * A filter to apply to the list.
     */
    filter?: ListVariantImportJobsFilter;
    /**
     * A list of job IDs.
     */
    ids?: ListVariantImportJobsRequestIdsList;
    /**
     * The maximum number of import jobs to return in one page of results.
     */
    maxResults?: ListVariantImportJobsRequestMaxResultsInteger;
    /**
     * Specify the pagination token from a previous request to retrieve the next page of results.
     */
    nextToken?: ListVariantImportJobsRequestNextTokenString;
  }
  export type ListVariantImportJobsRequestIdsList = ResourceIdentifier[];
  export type ListVariantImportJobsRequestMaxResultsInteger = number;
  export type ListVariantImportJobsRequestNextTokenString = string;
  export interface ListVariantImportJobsResponse {
    /**
     * A pagination token that's included if more results are available.
     */
    nextToken?: String;
    /**
     * A list of jobs.
     */
    variantImportJobs?: VariantImportJobItems;
  }
  export interface ListVariantStoresFilter {
    /**
     * A status to filter on.
     */
    status?: StoreStatus;
  }
  export interface ListVariantStoresRequest {
    /**
     * A filter to apply to the list.
     */
    filter?: ListVariantStoresFilter;
    /**
     * A list of store IDs.
     */
    ids?: ListVariantStoresRequestIdsList;
    /**
     * The maximum number of stores to return in one page of results.
     */
    maxResults?: ListVariantStoresRequestMaxResultsInteger;
    /**
     * Specify the pagination token from a previous request to retrieve the next page of results.
     */
    nextToken?: ListVariantStoresRequestNextTokenString;
  }
  export type ListVariantStoresRequestIdsList = ResourceIdentifier[];
  export type ListVariantStoresRequestMaxResultsInteger = number;
  export type ListVariantStoresRequestNextTokenString = string;
  export interface ListVariantStoresResponse {
    /**
     * A pagination token that's included if more results are available.
     */
    nextToken?: String;
    /**
     * A list of variant stores.
     */
    variantStores?: VariantStoreItems;
  }
  export interface ListWorkflowsRequest {
    /**
     * The maximum number of workflows to return in one page of results.
     */
    maxResults?: ListWorkflowsRequestMaxResultsInteger;
    /**
     * The workflows' name.
     */
    name?: WorkflowName;
    /**
     * Specify the pagination token from a previous request to retrieve the next page of results.
     */
    startingToken?: WorkflowListToken;
    /**
     * The workflows' type.
     */
    type?: WorkflowType;
  }
  export type ListWorkflowsRequestMaxResultsInteger = number;
  export interface ListWorkflowsResponse {
    /**
     * The workflows' items.
     */
    items?: WorkflowList;
    /**
     * A pagination token that's included if more results are available.
     */
    nextToken?: WorkflowListToken;
  }
  export type Long = number;
  export type Md5 = string;
  export type NextToken = string;
  export type PrimitiveBoolean = boolean;
  export type Quote = string;
  export type QuoteAll = boolean;
  export type Range = string;
  export interface ReadOptions {
    /**
     * The file's comment character.
     */
    comment?: CommentChar;
    /**
     * The file's encoding.
     */
    encoding?: Encoding;
    /**
     * A character for escaping quotes in the file.
     */
    escape?: EscapeChar;
    /**
     * Whether quotes need to be escaped in the file.
     */
    escapeQuotes?: EscapeQuotes;
    /**
     * Whether the file has a header row.
     */
    header?: Header;
    /**
     * A line separator for the file.
     */
    lineSep?: LineSep;
    /**
     * The file's quote character.
     */
    quote?: Quote;
    /**
     * Whether all values need to be quoted, or just those that contain quotes.
     */
    quoteAll?: QuoteAll;
    /**
     * The file's field separator.
     */
    sep?: Separator;
  }
  export type ReadSetActivationJobItemStatus = "NOT_STARTED"|"IN_PROGRESS"|"FINISHED"|"FAILED"|string;
  export type ReadSetActivationJobStatus = "SUBMITTED"|"IN_PROGRESS"|"CANCELLING"|"CANCELLED"|"FAILED"|"COMPLETED"|"COMPLETED_WITH_FAILURES"|string;
  export type ReadSetArn = string;
  export interface ReadSetBatchError {
    /**
     * The error's code.
     */
    code: String;
    /**
     * The error's ID.
     */
    id: ReadSetId;
    /**
     * The error's message.
     */
    message: String;
  }
  export type ReadSetBatchErrorList = ReadSetBatchError[];
  export type ReadSetDescription = string;
  export type ReadSetExportJobItemStatus = "NOT_STARTED"|"IN_PROGRESS"|"FINISHED"|"FAILED"|string;
  export type ReadSetExportJobStatus = "SUBMITTED"|"IN_PROGRESS"|"CANCELLING"|"CANCELLED"|"FAILED"|"COMPLETED"|"COMPLETED_WITH_FAILURES"|string;
  export type ReadSetFile = "SOURCE1"|"SOURCE2"|"INDEX"|string;
  export interface ReadSetFiles {
    /**
     * The files' index.
     */
    index?: FileInformation;
    /**
     * The location of the first file in Amazon S3.
     */
    source1?: FileInformation;
    /**
     * The location of the second file in Amazon S3.
     */
    source2?: FileInformation;
  }
  export interface ReadSetFilter {
    /**
     * The filter's start date.
     */
    createdAfter?: SyntheticTimestamp_date_time;
    /**
     * The filter's end date.
     */
    createdBefore?: SyntheticTimestamp_date_time;
    /**
     * A name to filter on.
     */
    name?: ReadSetName;
    /**
     * A genome reference ARN to filter on.
     */
    referenceArn?: ReferenceArn;
    /**
     * A status to filter on.
     */
    status?: ReadSetStatus;
  }
  export type ReadSetId = string;
  export type ReadSetIdList = ReadSetId[];
  export type ReadSetImportJobItemStatus = "NOT_STARTED"|"IN_PROGRESS"|"FINISHED"|"FAILED"|string;
  export type ReadSetImportJobStatus = "SUBMITTED"|"IN_PROGRESS"|"CANCELLING"|"CANCELLED"|"FAILED"|"COMPLETED"|"COMPLETED_WITH_FAILURES"|string;
  export type ReadSetList = ReadSetListItem[];
  export interface ReadSetListItem {
    /**
     * The read set's ARN.
     */
    arn: ReadSetArn;
    /**
     * When the read set was created.
     */
    creationTime: SyntheticTimestamp_date_time;
    /**
     * The read set's description.
     */
    description?: ReadSetDescription;
    /**
     * The read set's file type.
     */
    fileType: FileType;
    /**
     * The read set's ID.
     */
    id: ReadSetId;
    /**
     * The read set's name.
     */
    name?: ReadSetName;
    /**
     * The read set's genome reference ARN.
     */
    referenceArn?: ReferenceArn;
    /**
     * The read set's sample ID.
     */
    sampleId?: SampleId;
    sequenceInformation?: SequenceInformation;
    /**
     * The read set's sequence store ID.
     */
    sequenceStoreId: SequenceStoreId;
    /**
     * The read set's status.
     */
    status: ReadSetStatus;
    /**
     * The read set's subject ID.
     */
    subjectId?: SubjectId;
  }
  export type ReadSetName = string;
  export type ReadSetStatus = "ARCHIVED"|"ACTIVATING"|"ACTIVE"|"DELETING"|"DELETED"|string;
  export type ReadSetStreamingBlob = Buffer|Uint8Array|Blob|string|Readable;
  export type ReferenceArn = string;
  export type ReferenceDescription = string;
  export type ReferenceFile = "SOURCE"|"INDEX"|string;
  export interface ReferenceFiles {
    /**
     * The files' index.
     */
    index?: FileInformation;
    /**
     * The source file's location in Amazon S3.
     */
    source?: FileInformation;
  }
  export interface ReferenceFilter {
    /**
     * The filter's start date.
     */
    createdAfter?: SyntheticTimestamp_date_time;
    /**
     * The filter's end date.
     */
    createdBefore?: SyntheticTimestamp_date_time;
    /**
     * An MD5 checksum to filter on.
     */
    md5?: Md5;
    /**
     * A name to filter on.
     */
    name?: ReferenceName;
  }
  export type ReferenceId = string;
  export type ReferenceImportJobItemStatus = "NOT_STARTED"|"IN_PROGRESS"|"FINISHED"|"FAILED"|string;
  export type ReferenceImportJobStatus = "SUBMITTED"|"IN_PROGRESS"|"CANCELLING"|"CANCELLED"|"FAILED"|"COMPLETED"|"COMPLETED_WITH_FAILURES"|string;
  export interface ReferenceItem {
    /**
     * The reference's ARN.
     */
    referenceArn?: ReferenceArn;
  }
  export type ReferenceList = ReferenceListItem[];
  export interface ReferenceListItem {
    /**
     * The reference's ARN.
     */
    arn: ReferenceArn;
    /**
     * When the reference was created.
     */
    creationTime: SyntheticTimestamp_date_time;
    /**
     * The reference's description.
     */
    description?: ReferenceDescription;
    /**
     * The reference's ID.
     */
    id: ReferenceId;
    /**
     * The reference's MD5 checksum.
     */
    md5: Md5;
    /**
     * The reference's name.
     */
    name?: ReferenceName;
    /**
     * The reference's store ID.
     */
    referenceStoreId: ReferenceStoreId;
    /**
     * The reference's status.
     */
    status?: ReferenceStatus;
    /**
     * When the reference was updated.
     */
    updateTime: SyntheticTimestamp_date_time;
  }
  export type ReferenceName = string;
  export type ReferenceStatus = "ACTIVE"|"DELETING"|"DELETED"|string;
  export type ReferenceStoreArn = string;
  export type ReferenceStoreDescription = string;
  export interface ReferenceStoreDetail {
    /**
     * The store's ARN.
     */
    arn: ReferenceStoreArn;
    /**
     * When the store was created.
     */
    creationTime: SyntheticTimestamp_date_time;
    /**
     * The store's description.
     */
    description?: ReferenceStoreDescription;
    /**
     * The store's ID.
     */
    id: ReferenceStoreId;
    /**
     * The store's name.
     */
    name?: ReferenceStoreName;
    /**
     * The store's server-side encryption (SSE) settings.
     */
    sseConfig?: SseConfig;
  }
  export type ReferenceStoreDetailList = ReferenceStoreDetail[];
  export interface ReferenceStoreFilter {
    /**
     * The filter's start date.
     */
    createdAfter?: SyntheticTimestamp_date_time;
    /**
     * The filter's end date.
     */
    createdBefore?: SyntheticTimestamp_date_time;
    /**
     * The name to filter on.
     */
    name?: ReferenceStoreName;
  }
  export type ReferenceStoreId = string;
  export type ReferenceStoreName = string;
  export type ReferenceStreamingBlob = Buffer|Uint8Array|Blob|string|Readable;
  export type ResourceId = string;
  export type ResourceIdentifier = string;
  export type RoleArn = string;
  export type RunArn = string;
  export type RunExport = "DEFINITION"|string;
  export type RunExportList = RunExport[];
  export type RunGroupArn = string;
  export type RunGroupId = string;
  export type RunGroupList = RunGroupListItem[];
  export interface RunGroupListItem {
    /**
     * The group's ARN.
     */
    arn?: RunGroupArn;
    /**
     * When the group was created.
     */
    creationTime?: RunGroupTimestamp;
    /**
     * The group's ID.
     */
    id?: RunGroupId;
    /**
     * The group's maximum CPU count setting.
     */
    maxCpus?: RunGroupListItemMaxCpusInteger;
    /**
     * The group's maximum duration setting.
     */
    maxDuration?: RunGroupListItemMaxDurationInteger;
    /**
     * The group's maximum concurrent run setting.
     */
    maxRuns?: RunGroupListItemMaxRunsInteger;
    /**
     * The group's name.
     */
    name?: RunGroupName;
  }
  export type RunGroupListItemMaxCpusInteger = number;
  export type RunGroupListItemMaxDurationInteger = number;
  export type RunGroupListItemMaxRunsInteger = number;
  export type RunGroupListToken = string;
  export type RunGroupName = string;
  export type RunGroupRequestId = string;
  export type RunGroupTimestamp = Date;
  export type RunId = string;
  export type RunLeftNormalization = boolean;
  export type RunList = RunListItem[];
  export interface RunListItem {
    /**
     * The run's ARN.
     */
    arn?: RunArn;
    /**
     * When the run was created.
     */
    creationTime?: RunTimestamp;
    /**
     * The run's ID.
     */
    id?: RunId;
    /**
     * The run's name.
     */
    name?: RunName;
    /**
     * The run's priority.
     */
    priority?: RunListItemPriorityInteger;
    /**
     * When the run started.
     */
    startTime?: RunTimestamp;
    /**
     * The run's status.
     */
    status?: RunStatus;
    /**
     * When the run stopped.
     */
    stopTime?: RunTimestamp;
    /**
     * The run's storage capacity.
     */
    storageCapacity?: RunListItemStorageCapacityInteger;
    /**
     * The run's workflow ID.
     */
    workflowId?: WorkflowId;
  }
  export type RunListItemPriorityInteger = number;
  export type RunListItemStorageCapacityInteger = number;
  export type RunListToken = string;
  export type RunLogLevel = "OFF"|"FATAL"|"ERROR"|"ALL"|string;
  export type RunName = string;
  export type RunOutputUri = string;
  export interface RunParameters {
  }
  export type RunRequestId = string;
  export type RunResourceDigest = string;
  export type RunResourceDigestKey = string;
  export type RunResourceDigests = {[key: string]: RunResourceDigest};
  export type RunRoleArn = string;
  export type RunStartedBy = string;
  export type RunStatus = "PENDING"|"STARTING"|"RUNNING"|"STOPPING"|"COMPLETED"|"DELETED"|"CANCELLED"|"FAILED"|string;
  export type RunStatusMessage = string;
  export type RunTimestamp = Date;
  export type S3Destination = string;
  export type S3Uri = string;
  export type SampleId = string;
  export type SchemaItem = {[key: string]: SchemaValueType};
  export type SchemaValueType = "LONG"|"INT"|"STRING"|"FLOAT"|"DOUBLE"|"BOOLEAN"|string;
  export type Separator = string;
  export interface SequenceInformation {
    /**
     * The sequence's alignment setting.
     */
    alignment?: String;
    /**
     * Where the sequence originated.
     */
    generatedFrom?: GeneratedFrom;
    /**
     * The sequence's total base count.
     */
    totalBaseCount?: Long;
    /**
     * The sequence's total read count.
     */
    totalReadCount?: Long;
  }
  export type SequenceStoreArn = string;
  export type SequenceStoreDescription = string;
  export interface SequenceStoreDetail {
    /**
     * The store's ARN.
     */
    arn: SequenceStoreArn;
    /**
     * When the store was created.
     */
    creationTime: SyntheticTimestamp_date_time;
    /**
     * The store's description.
     */
    description?: SequenceStoreDescription;
    /**
     * The store's ID.
     */
    id: SequenceStoreId;
    /**
     * The store's name.
     */
    name?: SequenceStoreName;
    /**
     * The store's server-side encryption (SSE) settings.
     */
    sseConfig?: SseConfig;
  }
  export type SequenceStoreDetailList = SequenceStoreDetail[];
  export interface SequenceStoreFilter {
    /**
     * The filter's start date.
     */
    createdAfter?: SyntheticTimestamp_date_time;
    /**
     * The filter's end date.
     */
    createdBefore?: SyntheticTimestamp_date_time;
    /**
     * A name to filter on.
     */
    name?: SequenceStoreName;
  }
  export type SequenceStoreId = string;
  export type SequenceStoreName = string;
  export interface SourceFiles {
    /**
     * The location of the first file in Amazon S3.
     */
    source1: S3Uri;
    /**
     * The location of the second file in Amazon S3.
     */
    source2?: S3Uri;
  }
  export interface SseConfig {
    /**
     * An encryption key ARN.
     */
    keyArn?: SseConfigKeyArnString;
    /**
     * The encryption type.
     */
    type: EncryptionType;
  }
  export type SseConfigKeyArnString = string;
  export interface StartAnnotationImportRequest {
    /**
     * A destination annotation store for the job.
     */
    destinationName: StoreName;
    /**
     * Formatting options for the annotation file.
     */
    formatOptions?: FormatOptions;
    /**
     * Items to import.
     */
    items: AnnotationImportItemSources;
    /**
     * A service role for the job.
     */
    roleArn: Arn;
    /**
     * The job's left normalization setting.
     */
    runLeftNormalization?: RunLeftNormalization;
  }
  export interface StartAnnotationImportResponse {
    /**
     * The job's ID.
     */
    jobId: ResourceId;
  }
  export interface StartReadSetActivationJobRequest {
    /**
     * To ensure that jobs don't run multiple times, specify a unique token for each job.
     */
    clientToken?: ClientToken;
    /**
     * The read set's sequence store ID.
     */
    sequenceStoreId: SequenceStoreId;
    /**
     * The job's sources.
     */
    sources: StartReadSetActivationJobRequestSourcesList;
  }
  export type StartReadSetActivationJobRequestSourcesList = StartReadSetActivationJobSourceItem[];
  export interface StartReadSetActivationJobResponse {
    /**
     * When the job was created.
     */
    creationTime: SyntheticTimestamp_date_time;
    /**
     * The job's ID.
     */
    id: ActivationJobId;
    /**
     * The read set's sequence store ID.
     */
    sequenceStoreId: SequenceStoreId;
    /**
     * The job's status.
     */
    status: ReadSetActivationJobStatus;
  }
  export interface StartReadSetActivationJobSourceItem {
    /**
     * The source's read set ID.
     */
    readSetId: ReadSetId;
  }
  export interface StartReadSetExportJobRequest {
    /**
     * To ensure that jobs don't run multiple times, specify a unique token for each job.
     */
    clientToken?: ClientToken;
    /**
     * A location for exported files in Amazon S3.
     */
    destination: S3Destination;
    /**
     * A service role for the job.
     */
    roleArn: RoleArn;
    /**
     * The read set's sequence store ID.
     */
    sequenceStoreId: SequenceStoreId;
    /**
     * Sources for the job.
     */
    sources: StartReadSetExportJobRequestSourcesList;
  }
  export type StartReadSetExportJobRequestSourcesList = ExportReadSet[];
  export interface StartReadSetExportJobResponse {
    /**
     * When the job was created.
     */
    creationTime: SyntheticTimestamp_date_time;
    /**
     * The job's output location.
     */
    destination: S3Destination;
    /**
     * The job's ID.
     */
    id: ExportJobId;
    /**
     * The read set's sequence store ID.
     */
    sequenceStoreId: SequenceStoreId;
    /**
     * The job's status.
     */
    status: ReadSetExportJobStatus;
  }
  export interface StartReadSetImportJobRequest {
    /**
     * To ensure that jobs don't run multiple times, specify a unique token for each job.
     */
    clientToken?: ClientToken;
    /**
     * A service role for the job.
     */
    roleArn: RoleArn;
    /**
     * The read set's sequence store ID.
     */
    sequenceStoreId: SequenceStoreId;
    /**
     * Source files to import.
     */
    sources: StartReadSetImportJobRequestSourcesList;
  }
  export type StartReadSetImportJobRequestSourcesList = StartReadSetImportJobSourceItem[];
  export interface StartReadSetImportJobResponse {
    /**
     * When the job was created.
     */
    creationTime: SyntheticTimestamp_date_time;
    /**
     * The job's ID.
     */
    id: ImportJobId;
    /**
     * The job's service role ARN.
     */
    roleArn: RoleArn;
    /**
     * The read set's sequence store ID.
     */
    sequenceStoreId: SequenceStoreId;
    /**
     * The job's status.
     */
    status: ReadSetImportJobStatus;
  }
  export interface StartReadSetImportJobSourceItem {
    /**
     * The source's description.
     */
    description?: ReadSetDescription;
    /**
     * Where the source originated.
     */
    generatedFrom?: GeneratedFrom;
    /**
     * The source's name.
     */
    name?: ReadSetName;
    /**
     * The source's reference ARN.
     */
    referenceArn: ReferenceArn;
    /**
     * The source's sample ID.
     */
    sampleId: SampleId;
    /**
     * The source's file type.
     */
    sourceFileType: FileType;
    /**
     * The source files' location in Amazon S3.
     */
    sourceFiles: SourceFiles;
    /**
     * The source's subject ID.
     */
    subjectId: SubjectId;
    /**
     * The source's tags.
     */
    tags?: TagMap;
  }
  export interface StartReferenceImportJobRequest {
    /**
     * To ensure that jobs don't run multiple times, specify a unique token for each job.
     */
    clientToken?: ClientToken;
    /**
     * The job's reference store ID.
     */
    referenceStoreId: ReferenceStoreId;
    /**
     * A service role for the job.
     */
    roleArn: RoleArn;
    /**
     * Sources for the job.
     */
    sources: StartReferenceImportJobRequestSourcesList;
  }
  export type StartReferenceImportJobRequestSourcesList = StartReferenceImportJobSourceItem[];
  export interface StartReferenceImportJobResponse {
    /**
     * When the job was created.
     */
    creationTime: SyntheticTimestamp_date_time;
    /**
     * The job's ID.
     */
    id: ImportJobId;
    /**
     * The job's reference store ID.
     */
    referenceStoreId: ReferenceStoreId;
    /**
     * The job's service role ARN.
     */
    roleArn: RoleArn;
    /**
     * The job's status.
     */
    status: ReferenceImportJobStatus;
  }
  export interface StartReferenceImportJobSourceItem {
    /**
     * The source's description.
     */
    description?: ReferenceDescription;
    /**
     * The source's name.
     */
    name: ReferenceName;
    /**
     * The source file's location in Amazon S3.
     */
    sourceFile: S3Uri;
    /**
     * The source's tags.
     */
    tags?: TagMap;
  }
  export interface StartRunRequest {
    /**
     * A log level for the run.
     */
    logLevel?: RunLogLevel;
    /**
     * A name for the run.
     */
    name?: RunName;
    /**
     * An output URI for the run.
     */
    outputUri?: RunOutputUri;
    /**
     * Parameters for the run.
     */
    parameters?: RunParameters;
    /**
     * A priority for the run.
     */
    priority?: StartRunRequestPriorityInteger;
    /**
     * A request ID for the run.
     */
    requestId: RunRequestId;
    /**
     * A service role for the run.
     */
    roleArn: RunRoleArn;
    /**
     * The run's group ID.
     */
    runGroupId?: RunGroupId;
    /**
     * The run's ID.
     */
    runId?: RunId;
    /**
     * A storage capacity for the run.
     */
    storageCapacity?: StartRunRequestStorageCapacityInteger;
    /**
     * Tags for the run.
     */
    tags?: TagMap;
    /**
     * The run's workflow ID.
     */
    workflowId?: WorkflowId;
    /**
     * The run's workflows type.
     */
    workflowType?: WorkflowType;
  }
  export type StartRunRequestPriorityInteger = number;
  export type StartRunRequestStorageCapacityInteger = number;
  export interface StartRunResponse {
    /**
     * The run's ARN.
     */
    arn?: RunArn;
    /**
     * The run's ID.
     */
    id?: RunId;
    /**
     * The run's status.
     */
    status?: RunStatus;
    /**
     * The run's tags.
     */
    tags?: TagMap;
  }
  export interface StartVariantImportRequest {
    /**
     * The destination variant store for the job.
     */
    destinationName: StoreName;
    /**
     * Items to import.
     */
    items: VariantImportItemSources;
    /**
     * A service role for the job.
     */
    roleArn: Arn;
    /**
     * The job's left normalization setting.
     */
    runLeftNormalization?: RunLeftNormalization;
  }
  export interface StartVariantImportResponse {
    /**
     * The job's ID.
     */
    jobId: ResourceId;
  }
  export type StatusMessage = string;
  export type StoreDescription = string;
  export type StoreFormat = "GFF"|"TSV"|"VCF"|string;
  export type StoreName = string;
  export interface StoreOptions {
    /**
     * File settings for a TSV store.
     */
    tsvStoreOptions?: TsvStoreOptions;
  }
  export type StoreStatus = "CREATING"|"UPDATING"|"DELETING"|"ACTIVE"|"FAILED"|string;
  export type String = string;
  export type SubjectId = string;
  export type SyntheticTimestamp_date_time = Date;
  export type TagArn = string;
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagMap = {[key: string]: TagValue};
  export interface TagResourceRequest {
    /**
     * The resource's ARN.
     */
    resourceArn: TagArn;
    /**
     * Tags for the resource.
     */
    tags: TagResourceRequestTagsMap;
  }
  export type TagResourceRequestTagsMap = {[key: string]: TagValue};
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type TaskId = string;
  export type TaskList = TaskListItem[];
  export interface TaskListItem {
    /**
     * The task's CPU count.
     */
    cpus?: TaskListItemCpusInteger;
    /**
     * When the task was created.
     */
    creationTime?: TaskTimestamp;
    /**
     * The task's memory.
     */
    memory?: TaskListItemMemoryInteger;
    /**
     * The task's name.
     */
    name?: TaskName;
    /**
     * When the task started.
     */
    startTime?: TaskTimestamp;
    /**
     * The task's status.
     */
    status?: TaskStatus;
    /**
     * When the task stopped.
     */
    stopTime?: TaskTimestamp;
    /**
     * The task's ID.
     */
    taskId?: TaskId;
  }
  export type TaskListItemCpusInteger = number;
  export type TaskListItemMemoryInteger = number;
  export type TaskListToken = string;
  export type TaskLogStream = string;
  export type TaskName = string;
  export type TaskStatus = "PENDING"|"STARTING"|"RUNNING"|"STOPPING"|"COMPLETED"|"CANCELLED"|"FAILED"|string;
  export type TaskStatusMessage = string;
  export type TaskTimestamp = Date;
  export interface TsvOptions {
    /**
     * The file's read options.
     */
    readOptions?: ReadOptions;
  }
  export interface TsvStoreOptions {
    /**
     * The store's annotation type.
     */
    annotationType?: AnnotationType;
    /**
     * The store's header key to column name mapping.
     */
    formatToHeader?: FormatToHeader;
    /**
     * The store's schema.
     */
    schema?: TsvStoreOptionsSchemaList;
  }
  export type TsvStoreOptionsSchemaList = SchemaItem[];
  export interface UntagResourceRequest {
    /**
     * The resource's ARN.
     */
    resourceArn: TagArn;
    /**
     * Keys of tags to remove.
     */
    tagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateAnnotationStoreRequest {
    /**
     * A description for the store.
     */
    description?: StoreDescription;
    /**
     * A name for the store.
     */
    name: String;
  }
  export interface UpdateAnnotationStoreResponse {
    /**
     * When the store was created.
     */
    creationTime: CreationTime;
    /**
     * The store's description.
     */
    description: StoreDescription;
    /**
     * The store's ID.
     */
    id: ResourceId;
    /**
     * The store's name.
     */
    name: String;
    /**
     * The store's genome reference.
     */
    reference: ReferenceItem;
    /**
     * The store's status.
     */
    status: StoreStatus;
    /**
     * The annotation file format of the store.
     */
    storeFormat?: StoreFormat;
    /**
     * Parsing options for the store.
     */
    storeOptions?: StoreOptions;
    /**
     * When the store was updated.
     */
    updateTime: UpdateTime;
  }
  export interface UpdateRunGroupRequest {
    /**
     * The group's ID.
     */
    id: RunGroupId;
    /**
     * The maximum number of CPUs to use.
     */
    maxCpus?: UpdateRunGroupRequestMaxCpusInteger;
    /**
     * The maximum amount of time to run.
     */
    maxDuration?: UpdateRunGroupRequestMaxDurationInteger;
    /**
     * The maximum number of concurrent runs for the group.
     */
    maxRuns?: UpdateRunGroupRequestMaxRunsInteger;
    /**
     * A name for the group.
     */
    name?: RunGroupName;
  }
  export type UpdateRunGroupRequestMaxCpusInteger = number;
  export type UpdateRunGroupRequestMaxDurationInteger = number;
  export type UpdateRunGroupRequestMaxRunsInteger = number;
  export type UpdateTime = Date;
  export interface UpdateVariantStoreRequest {
    /**
     * A description for the store.
     */
    description?: StoreDescription;
    /**
     * A name for the store.
     */
    name: String;
  }
  export interface UpdateVariantStoreResponse {
    /**
     * When the store was created.
     */
    creationTime: CreationTime;
    /**
     * The store's description.
     */
    description: StoreDescription;
    /**
     * The store's ID.
     */
    id: ResourceId;
    /**
     * The store's name.
     */
    name: String;
    /**
     * The store's genome reference.
     */
    reference: ReferenceItem;
    /**
     * The store's status.
     */
    status: StoreStatus;
    /**
     * When the store was updated.
     */
    updateTime: UpdateTime;
  }
  export interface UpdateWorkflowRequest {
    /**
     * A description for the workflow.
     */
    description?: WorkflowDescription;
    /**
     * The workflow's ID.
     */
    id: WorkflowId;
    /**
     * A name for the workflow.
     */
    name?: WorkflowName;
  }
  export interface VariantImportItemDetail {
    /**
     * The item's job status.
     */
    jobStatus: JobStatus;
    /**
     * The source file's location in Amazon S3.
     */
    source: S3Uri;
  }
  export type VariantImportItemDetails = VariantImportItemDetail[];
  export interface VariantImportItemSource {
    /**
     * The source file's location in Amazon S3.
     */
    source: S3Uri;
  }
  export type VariantImportItemSources = VariantImportItemSource[];
  export interface VariantImportJobItem {
    /**
     * When the job completed.
     */
    completionTime?: CompletionTime;
    /**
     * When the job was created.
     */
    creationTime: CreationTime;
    /**
     * The job's destination variant store.
     */
    destinationName: String;
    /**
     * The job's ID.
     */
    id: String;
    /**
     * The job's service role ARN.
     */
    roleArn: Arn;
    /**
     * The job's left normalization setting.
     */
    runLeftNormalization?: RunLeftNormalization;
    /**
     * The job's status.
     */
    status: JobStatus;
    /**
     * When the job was updated.
     */
    updateTime: UpdateTime;
  }
  export type VariantImportJobItems = VariantImportJobItem[];
  export interface VariantStoreItem {
    /**
     * When the store was created.
     */
    creationTime: CreationTime;
    /**
     * The store's description.
     */
    description: StoreDescription;
    /**
     * The store's ID.
     */
    id: ResourceId;
    /**
     * The store's name.
     */
    name: String;
    /**
     * The store's genome reference.
     */
    reference: ReferenceItem;
    /**
     * The store's server-side encryption (SSE) settings.
     */
    sseConfig: SseConfig;
    /**
     * The store's status.
     */
    status: StoreStatus;
    /**
     * The store's status message.
     */
    statusMessage: StatusMessage;
    /**
     * The store's ARN.
     */
    storeArn: Arn;
    /**
     * The store's size in bytes.
     */
    storeSizeBytes: Long;
    /**
     * When the store was updated.
     */
    updateTime: UpdateTime;
  }
  export type VariantStoreItems = VariantStoreItem[];
  export interface VcfOptions {
    /**
     * The file's ignore filter field setting.
     */
    ignoreFilterField?: Boolean;
    /**
     * The file's ignore qual field setting.
     */
    ignoreQualField?: Boolean;
  }
  export type WorkflowArn = string;
  export type WorkflowDefinition = string;
  export type WorkflowDescription = string;
  export type WorkflowDigest = string;
  export type WorkflowEngine = "WDL"|"NEXTFLOW"|string;
  export type WorkflowExport = "DEFINITION"|string;
  export type WorkflowExportList = WorkflowExport[];
  export type WorkflowId = string;
  export type WorkflowList = WorkflowListItem[];
  export interface WorkflowListItem {
    /**
     * The workflow's ARN.
     */
    arn?: WorkflowArn;
    /**
     * When the workflow was created.
     */
    creationTime?: WorkflowTimestamp;
    /**
     * The workflow's digest.
     */
    digest?: WorkflowDigest;
    /**
     * The workflow's ID.
     */
    id?: WorkflowId;
    /**
     * The workflow's name.
     */
    name?: WorkflowName;
    /**
     * The workflow's status.
     */
    status?: WorkflowStatus;
    /**
     * The workflow's type.
     */
    type?: WorkflowType;
  }
  export type WorkflowListToken = string;
  export type WorkflowMain = string;
  export type WorkflowName = string;
  export interface WorkflowParameter {
    /**
     * The parameter's description.
     */
    description?: WorkflowParameterDescription;
    /**
     * Whether the parameter is optional.
     */
    optional?: Boolean;
  }
  export type WorkflowParameterDescription = string;
  export type WorkflowParameterName = string;
  export type WorkflowParameterTemplate = {[key: string]: WorkflowParameter};
  export type WorkflowRequestId = string;
  export type WorkflowStatus = "CREATING"|"ACTIVE"|"UPDATING"|"DELETED"|"FAILED"|string;
  export type WorkflowStatusMessage = string;
  export type WorkflowTimestamp = Date;
  export type WorkflowType = "PRIVATE"|string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2022-11-28"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Omics client.
   */
  export import Types = Omics;
}
export = Omics;
