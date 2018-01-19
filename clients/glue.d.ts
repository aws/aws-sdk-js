import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class Glue extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Glue.Types.ClientConfiguration)
  config: Config & Glue.Types.ClientConfiguration;
  /**
   * Creates one or more partitions in a batch operation.
   */
  batchCreatePartition(params: Glue.Types.BatchCreatePartitionRequest, callback?: (err: AWSError, data: Glue.Types.BatchCreatePartitionResponse) => void): Request<Glue.Types.BatchCreatePartitionResponse, AWSError>;
  /**
   * Creates one or more partitions in a batch operation.
   */
  batchCreatePartition(callback?: (err: AWSError, data: Glue.Types.BatchCreatePartitionResponse) => void): Request<Glue.Types.BatchCreatePartitionResponse, AWSError>;
  /**
   * Deletes a list of connection definitions from the Data Catalog.
   */
  batchDeleteConnection(params: Glue.Types.BatchDeleteConnectionRequest, callback?: (err: AWSError, data: Glue.Types.BatchDeleteConnectionResponse) => void): Request<Glue.Types.BatchDeleteConnectionResponse, AWSError>;
  /**
   * Deletes a list of connection definitions from the Data Catalog.
   */
  batchDeleteConnection(callback?: (err: AWSError, data: Glue.Types.BatchDeleteConnectionResponse) => void): Request<Glue.Types.BatchDeleteConnectionResponse, AWSError>;
  /**
   * Deletes one or more partitions in a batch operation.
   */
  batchDeletePartition(params: Glue.Types.BatchDeletePartitionRequest, callback?: (err: AWSError, data: Glue.Types.BatchDeletePartitionResponse) => void): Request<Glue.Types.BatchDeletePartitionResponse, AWSError>;
  /**
   * Deletes one or more partitions in a batch operation.
   */
  batchDeletePartition(callback?: (err: AWSError, data: Glue.Types.BatchDeletePartitionResponse) => void): Request<Glue.Types.BatchDeletePartitionResponse, AWSError>;
  /**
   * Deletes multiple tables at once.
   */
  batchDeleteTable(params: Glue.Types.BatchDeleteTableRequest, callback?: (err: AWSError, data: Glue.Types.BatchDeleteTableResponse) => void): Request<Glue.Types.BatchDeleteTableResponse, AWSError>;
  /**
   * Deletes multiple tables at once.
   */
  batchDeleteTable(callback?: (err: AWSError, data: Glue.Types.BatchDeleteTableResponse) => void): Request<Glue.Types.BatchDeleteTableResponse, AWSError>;
  /**
   * Deletes a specified batch of versions of a table.
   */
  batchDeleteTableVersion(params: Glue.Types.BatchDeleteTableVersionRequest, callback?: (err: AWSError, data: Glue.Types.BatchDeleteTableVersionResponse) => void): Request<Glue.Types.BatchDeleteTableVersionResponse, AWSError>;
  /**
   * Deletes a specified batch of versions of a table.
   */
  batchDeleteTableVersion(callback?: (err: AWSError, data: Glue.Types.BatchDeleteTableVersionResponse) => void): Request<Glue.Types.BatchDeleteTableVersionResponse, AWSError>;
  /**
   * Retrieves partitions in a batch request.
   */
  batchGetPartition(params: Glue.Types.BatchGetPartitionRequest, callback?: (err: AWSError, data: Glue.Types.BatchGetPartitionResponse) => void): Request<Glue.Types.BatchGetPartitionResponse, AWSError>;
  /**
   * Retrieves partitions in a batch request.
   */
  batchGetPartition(callback?: (err: AWSError, data: Glue.Types.BatchGetPartitionResponse) => void): Request<Glue.Types.BatchGetPartitionResponse, AWSError>;
  /**
   * Stops one or more job runs for a specified Job.
   */
  batchStopJobRun(params: Glue.Types.BatchStopJobRunRequest, callback?: (err: AWSError, data: Glue.Types.BatchStopJobRunResponse) => void): Request<Glue.Types.BatchStopJobRunResponse, AWSError>;
  /**
   * Stops one or more job runs for a specified Job.
   */
  batchStopJobRun(callback?: (err: AWSError, data: Glue.Types.BatchStopJobRunResponse) => void): Request<Glue.Types.BatchStopJobRunResponse, AWSError>;
  /**
   * Creates a classifier in the user's account. This may be either a GrokClassifier or an XMLClassifier. 
   */
  createClassifier(params: Glue.Types.CreateClassifierRequest, callback?: (err: AWSError, data: Glue.Types.CreateClassifierResponse) => void): Request<Glue.Types.CreateClassifierResponse, AWSError>;
  /**
   * Creates a classifier in the user's account. This may be either a GrokClassifier or an XMLClassifier. 
   */
  createClassifier(callback?: (err: AWSError, data: Glue.Types.CreateClassifierResponse) => void): Request<Glue.Types.CreateClassifierResponse, AWSError>;
  /**
   * Creates a connection definition in the Data Catalog.
   */
  createConnection(params: Glue.Types.CreateConnectionRequest, callback?: (err: AWSError, data: Glue.Types.CreateConnectionResponse) => void): Request<Glue.Types.CreateConnectionResponse, AWSError>;
  /**
   * Creates a connection definition in the Data Catalog.
   */
  createConnection(callback?: (err: AWSError, data: Glue.Types.CreateConnectionResponse) => void): Request<Glue.Types.CreateConnectionResponse, AWSError>;
  /**
   * Creates a new crawler with specified targets, role, configuration, and optional schedule. At least one crawl target must be specified, in either the s3Targets or the jdbcTargets field.
   */
  createCrawler(params: Glue.Types.CreateCrawlerRequest, callback?: (err: AWSError, data: Glue.Types.CreateCrawlerResponse) => void): Request<Glue.Types.CreateCrawlerResponse, AWSError>;
  /**
   * Creates a new crawler with specified targets, role, configuration, and optional schedule. At least one crawl target must be specified, in either the s3Targets or the jdbcTargets field.
   */
  createCrawler(callback?: (err: AWSError, data: Glue.Types.CreateCrawlerResponse) => void): Request<Glue.Types.CreateCrawlerResponse, AWSError>;
  /**
   * Creates a new database in a Data Catalog.
   */
  createDatabase(params: Glue.Types.CreateDatabaseRequest, callback?: (err: AWSError, data: Glue.Types.CreateDatabaseResponse) => void): Request<Glue.Types.CreateDatabaseResponse, AWSError>;
  /**
   * Creates a new database in a Data Catalog.
   */
  createDatabase(callback?: (err: AWSError, data: Glue.Types.CreateDatabaseResponse) => void): Request<Glue.Types.CreateDatabaseResponse, AWSError>;
  /**
   * Creates a new DevEndpoint.
   */
  createDevEndpoint(params: Glue.Types.CreateDevEndpointRequest, callback?: (err: AWSError, data: Glue.Types.CreateDevEndpointResponse) => void): Request<Glue.Types.CreateDevEndpointResponse, AWSError>;
  /**
   * Creates a new DevEndpoint.
   */
  createDevEndpoint(callback?: (err: AWSError, data: Glue.Types.CreateDevEndpointResponse) => void): Request<Glue.Types.CreateDevEndpointResponse, AWSError>;
  /**
   * Creates a new job.
   */
  createJob(params: Glue.Types.CreateJobRequest, callback?: (err: AWSError, data: Glue.Types.CreateJobResponse) => void): Request<Glue.Types.CreateJobResponse, AWSError>;
  /**
   * Creates a new job.
   */
  createJob(callback?: (err: AWSError, data: Glue.Types.CreateJobResponse) => void): Request<Glue.Types.CreateJobResponse, AWSError>;
  /**
   * Creates a new partition.
   */
  createPartition(params: Glue.Types.CreatePartitionRequest, callback?: (err: AWSError, data: Glue.Types.CreatePartitionResponse) => void): Request<Glue.Types.CreatePartitionResponse, AWSError>;
  /**
   * Creates a new partition.
   */
  createPartition(callback?: (err: AWSError, data: Glue.Types.CreatePartitionResponse) => void): Request<Glue.Types.CreatePartitionResponse, AWSError>;
  /**
   * Transforms a directed acyclic graph (DAG) into code.
   */
  createScript(params: Glue.Types.CreateScriptRequest, callback?: (err: AWSError, data: Glue.Types.CreateScriptResponse) => void): Request<Glue.Types.CreateScriptResponse, AWSError>;
  /**
   * Transforms a directed acyclic graph (DAG) into code.
   */
  createScript(callback?: (err: AWSError, data: Glue.Types.CreateScriptResponse) => void): Request<Glue.Types.CreateScriptResponse, AWSError>;
  /**
   * Creates a new table definition in the Data Catalog.
   */
  createTable(params: Glue.Types.CreateTableRequest, callback?: (err: AWSError, data: Glue.Types.CreateTableResponse) => void): Request<Glue.Types.CreateTableResponse, AWSError>;
  /**
   * Creates a new table definition in the Data Catalog.
   */
  createTable(callback?: (err: AWSError, data: Glue.Types.CreateTableResponse) => void): Request<Glue.Types.CreateTableResponse, AWSError>;
  /**
   * Creates a new trigger.
   */
  createTrigger(params: Glue.Types.CreateTriggerRequest, callback?: (err: AWSError, data: Glue.Types.CreateTriggerResponse) => void): Request<Glue.Types.CreateTriggerResponse, AWSError>;
  /**
   * Creates a new trigger.
   */
  createTrigger(callback?: (err: AWSError, data: Glue.Types.CreateTriggerResponse) => void): Request<Glue.Types.CreateTriggerResponse, AWSError>;
  /**
   * Creates a new function definition in the Data Catalog.
   */
  createUserDefinedFunction(params: Glue.Types.CreateUserDefinedFunctionRequest, callback?: (err: AWSError, data: Glue.Types.CreateUserDefinedFunctionResponse) => void): Request<Glue.Types.CreateUserDefinedFunctionResponse, AWSError>;
  /**
   * Creates a new function definition in the Data Catalog.
   */
  createUserDefinedFunction(callback?: (err: AWSError, data: Glue.Types.CreateUserDefinedFunctionResponse) => void): Request<Glue.Types.CreateUserDefinedFunctionResponse, AWSError>;
  /**
   * Removes a classifier from the Data Catalog.
   */
  deleteClassifier(params: Glue.Types.DeleteClassifierRequest, callback?: (err: AWSError, data: Glue.Types.DeleteClassifierResponse) => void): Request<Glue.Types.DeleteClassifierResponse, AWSError>;
  /**
   * Removes a classifier from the Data Catalog.
   */
  deleteClassifier(callback?: (err: AWSError, data: Glue.Types.DeleteClassifierResponse) => void): Request<Glue.Types.DeleteClassifierResponse, AWSError>;
  /**
   * Deletes a connection from the Data Catalog.
   */
  deleteConnection(params: Glue.Types.DeleteConnectionRequest, callback?: (err: AWSError, data: Glue.Types.DeleteConnectionResponse) => void): Request<Glue.Types.DeleteConnectionResponse, AWSError>;
  /**
   * Deletes a connection from the Data Catalog.
   */
  deleteConnection(callback?: (err: AWSError, data: Glue.Types.DeleteConnectionResponse) => void): Request<Glue.Types.DeleteConnectionResponse, AWSError>;
  /**
   * Removes a specified crawler from the Data Catalog, unless the crawler state is RUNNING.
   */
  deleteCrawler(params: Glue.Types.DeleteCrawlerRequest, callback?: (err: AWSError, data: Glue.Types.DeleteCrawlerResponse) => void): Request<Glue.Types.DeleteCrawlerResponse, AWSError>;
  /**
   * Removes a specified crawler from the Data Catalog, unless the crawler state is RUNNING.
   */
  deleteCrawler(callback?: (err: AWSError, data: Glue.Types.DeleteCrawlerResponse) => void): Request<Glue.Types.DeleteCrawlerResponse, AWSError>;
  /**
   * Removes a specified Database from a Data Catalog.
   */
  deleteDatabase(params: Glue.Types.DeleteDatabaseRequest, callback?: (err: AWSError, data: Glue.Types.DeleteDatabaseResponse) => void): Request<Glue.Types.DeleteDatabaseResponse, AWSError>;
  /**
   * Removes a specified Database from a Data Catalog.
   */
  deleteDatabase(callback?: (err: AWSError, data: Glue.Types.DeleteDatabaseResponse) => void): Request<Glue.Types.DeleteDatabaseResponse, AWSError>;
  /**
   * Deletes a specified DevEndpoint.
   */
  deleteDevEndpoint(params: Glue.Types.DeleteDevEndpointRequest, callback?: (err: AWSError, data: Glue.Types.DeleteDevEndpointResponse) => void): Request<Glue.Types.DeleteDevEndpointResponse, AWSError>;
  /**
   * Deletes a specified DevEndpoint.
   */
  deleteDevEndpoint(callback?: (err: AWSError, data: Glue.Types.DeleteDevEndpointResponse) => void): Request<Glue.Types.DeleteDevEndpointResponse, AWSError>;
  /**
   * Deletes a specified job. If the job is not found, no exception is thrown.
   */
  deleteJob(params: Glue.Types.DeleteJobRequest, callback?: (err: AWSError, data: Glue.Types.DeleteJobResponse) => void): Request<Glue.Types.DeleteJobResponse, AWSError>;
  /**
   * Deletes a specified job. If the job is not found, no exception is thrown.
   */
  deleteJob(callback?: (err: AWSError, data: Glue.Types.DeleteJobResponse) => void): Request<Glue.Types.DeleteJobResponse, AWSError>;
  /**
   * Deletes a specified partition.
   */
  deletePartition(params: Glue.Types.DeletePartitionRequest, callback?: (err: AWSError, data: Glue.Types.DeletePartitionResponse) => void): Request<Glue.Types.DeletePartitionResponse, AWSError>;
  /**
   * Deletes a specified partition.
   */
  deletePartition(callback?: (err: AWSError, data: Glue.Types.DeletePartitionResponse) => void): Request<Glue.Types.DeletePartitionResponse, AWSError>;
  /**
   * Removes a table definition from the Data Catalog.
   */
  deleteTable(params: Glue.Types.DeleteTableRequest, callback?: (err: AWSError, data: Glue.Types.DeleteTableResponse) => void): Request<Glue.Types.DeleteTableResponse, AWSError>;
  /**
   * Removes a table definition from the Data Catalog.
   */
  deleteTable(callback?: (err: AWSError, data: Glue.Types.DeleteTableResponse) => void): Request<Glue.Types.DeleteTableResponse, AWSError>;
  /**
   * Deletes a specified version of a table.
   */
  deleteTableVersion(params: Glue.Types.DeleteTableVersionRequest, callback?: (err: AWSError, data: Glue.Types.DeleteTableVersionResponse) => void): Request<Glue.Types.DeleteTableVersionResponse, AWSError>;
  /**
   * Deletes a specified version of a table.
   */
  deleteTableVersion(callback?: (err: AWSError, data: Glue.Types.DeleteTableVersionResponse) => void): Request<Glue.Types.DeleteTableVersionResponse, AWSError>;
  /**
   * Deletes a specified trigger. If the trigger is not found, no exception is thrown.
   */
  deleteTrigger(params: Glue.Types.DeleteTriggerRequest, callback?: (err: AWSError, data: Glue.Types.DeleteTriggerResponse) => void): Request<Glue.Types.DeleteTriggerResponse, AWSError>;
  /**
   * Deletes a specified trigger. If the trigger is not found, no exception is thrown.
   */
  deleteTrigger(callback?: (err: AWSError, data: Glue.Types.DeleteTriggerResponse) => void): Request<Glue.Types.DeleteTriggerResponse, AWSError>;
  /**
   * Deletes an existing function definition from the Data Catalog.
   */
  deleteUserDefinedFunction(params: Glue.Types.DeleteUserDefinedFunctionRequest, callback?: (err: AWSError, data: Glue.Types.DeleteUserDefinedFunctionResponse) => void): Request<Glue.Types.DeleteUserDefinedFunctionResponse, AWSError>;
  /**
   * Deletes an existing function definition from the Data Catalog.
   */
  deleteUserDefinedFunction(callback?: (err: AWSError, data: Glue.Types.DeleteUserDefinedFunctionResponse) => void): Request<Glue.Types.DeleteUserDefinedFunctionResponse, AWSError>;
  /**
   * Retrieves the status of a migration operation.
   */
  getCatalogImportStatus(params: Glue.Types.GetCatalogImportStatusRequest, callback?: (err: AWSError, data: Glue.Types.GetCatalogImportStatusResponse) => void): Request<Glue.Types.GetCatalogImportStatusResponse, AWSError>;
  /**
   * Retrieves the status of a migration operation.
   */
  getCatalogImportStatus(callback?: (err: AWSError, data: Glue.Types.GetCatalogImportStatusResponse) => void): Request<Glue.Types.GetCatalogImportStatusResponse, AWSError>;
  /**
   * Retrieve a classifier by name.
   */
  getClassifier(params: Glue.Types.GetClassifierRequest, callback?: (err: AWSError, data: Glue.Types.GetClassifierResponse) => void): Request<Glue.Types.GetClassifierResponse, AWSError>;
  /**
   * Retrieve a classifier by name.
   */
  getClassifier(callback?: (err: AWSError, data: Glue.Types.GetClassifierResponse) => void): Request<Glue.Types.GetClassifierResponse, AWSError>;
  /**
   * Lists all classifier objects in the Data Catalog.
   */
  getClassifiers(params: Glue.Types.GetClassifiersRequest, callback?: (err: AWSError, data: Glue.Types.GetClassifiersResponse) => void): Request<Glue.Types.GetClassifiersResponse, AWSError>;
  /**
   * Lists all classifier objects in the Data Catalog.
   */
  getClassifiers(callback?: (err: AWSError, data: Glue.Types.GetClassifiersResponse) => void): Request<Glue.Types.GetClassifiersResponse, AWSError>;
  /**
   * Retrieves a connection definition from the Data Catalog.
   */
  getConnection(params: Glue.Types.GetConnectionRequest, callback?: (err: AWSError, data: Glue.Types.GetConnectionResponse) => void): Request<Glue.Types.GetConnectionResponse, AWSError>;
  /**
   * Retrieves a connection definition from the Data Catalog.
   */
  getConnection(callback?: (err: AWSError, data: Glue.Types.GetConnectionResponse) => void): Request<Glue.Types.GetConnectionResponse, AWSError>;
  /**
   * Retrieves a list of connection definitions from the Data Catalog.
   */
  getConnections(params: Glue.Types.GetConnectionsRequest, callback?: (err: AWSError, data: Glue.Types.GetConnectionsResponse) => void): Request<Glue.Types.GetConnectionsResponse, AWSError>;
  /**
   * Retrieves a list of connection definitions from the Data Catalog.
   */
  getConnections(callback?: (err: AWSError, data: Glue.Types.GetConnectionsResponse) => void): Request<Glue.Types.GetConnectionsResponse, AWSError>;
  /**
   * Retrieves metadata for a specified crawler.
   */
  getCrawler(params: Glue.Types.GetCrawlerRequest, callback?: (err: AWSError, data: Glue.Types.GetCrawlerResponse) => void): Request<Glue.Types.GetCrawlerResponse, AWSError>;
  /**
   * Retrieves metadata for a specified crawler.
   */
  getCrawler(callback?: (err: AWSError, data: Glue.Types.GetCrawlerResponse) => void): Request<Glue.Types.GetCrawlerResponse, AWSError>;
  /**
   * Retrieves metrics about specified crawlers.
   */
  getCrawlerMetrics(params: Glue.Types.GetCrawlerMetricsRequest, callback?: (err: AWSError, data: Glue.Types.GetCrawlerMetricsResponse) => void): Request<Glue.Types.GetCrawlerMetricsResponse, AWSError>;
  /**
   * Retrieves metrics about specified crawlers.
   */
  getCrawlerMetrics(callback?: (err: AWSError, data: Glue.Types.GetCrawlerMetricsResponse) => void): Request<Glue.Types.GetCrawlerMetricsResponse, AWSError>;
  /**
   * Retrieves metadata for all crawlers defined in the customer account.
   */
  getCrawlers(params: Glue.Types.GetCrawlersRequest, callback?: (err: AWSError, data: Glue.Types.GetCrawlersResponse) => void): Request<Glue.Types.GetCrawlersResponse, AWSError>;
  /**
   * Retrieves metadata for all crawlers defined in the customer account.
   */
  getCrawlers(callback?: (err: AWSError, data: Glue.Types.GetCrawlersResponse) => void): Request<Glue.Types.GetCrawlersResponse, AWSError>;
  /**
   * Retrieves the definition of a specified database.
   */
  getDatabase(params: Glue.Types.GetDatabaseRequest, callback?: (err: AWSError, data: Glue.Types.GetDatabaseResponse) => void): Request<Glue.Types.GetDatabaseResponse, AWSError>;
  /**
   * Retrieves the definition of a specified database.
   */
  getDatabase(callback?: (err: AWSError, data: Glue.Types.GetDatabaseResponse) => void): Request<Glue.Types.GetDatabaseResponse, AWSError>;
  /**
   * Retrieves all Databases defined in a given Data Catalog.
   */
  getDatabases(params: Glue.Types.GetDatabasesRequest, callback?: (err: AWSError, data: Glue.Types.GetDatabasesResponse) => void): Request<Glue.Types.GetDatabasesResponse, AWSError>;
  /**
   * Retrieves all Databases defined in a given Data Catalog.
   */
  getDatabases(callback?: (err: AWSError, data: Glue.Types.GetDatabasesResponse) => void): Request<Glue.Types.GetDatabasesResponse, AWSError>;
  /**
   * Transforms a Python script into a directed acyclic graph (DAG). 
   */
  getDataflowGraph(params: Glue.Types.GetDataflowGraphRequest, callback?: (err: AWSError, data: Glue.Types.GetDataflowGraphResponse) => void): Request<Glue.Types.GetDataflowGraphResponse, AWSError>;
  /**
   * Transforms a Python script into a directed acyclic graph (DAG). 
   */
  getDataflowGraph(callback?: (err: AWSError, data: Glue.Types.GetDataflowGraphResponse) => void): Request<Glue.Types.GetDataflowGraphResponse, AWSError>;
  /**
   * Retrieves information about a specified DevEndpoint.
   */
  getDevEndpoint(params: Glue.Types.GetDevEndpointRequest, callback?: (err: AWSError, data: Glue.Types.GetDevEndpointResponse) => void): Request<Glue.Types.GetDevEndpointResponse, AWSError>;
  /**
   * Retrieves information about a specified DevEndpoint.
   */
  getDevEndpoint(callback?: (err: AWSError, data: Glue.Types.GetDevEndpointResponse) => void): Request<Glue.Types.GetDevEndpointResponse, AWSError>;
  /**
   * Retrieves all the DevEndpoints in this AWS account.
   */
  getDevEndpoints(params: Glue.Types.GetDevEndpointsRequest, callback?: (err: AWSError, data: Glue.Types.GetDevEndpointsResponse) => void): Request<Glue.Types.GetDevEndpointsResponse, AWSError>;
  /**
   * Retrieves all the DevEndpoints in this AWS account.
   */
  getDevEndpoints(callback?: (err: AWSError, data: Glue.Types.GetDevEndpointsResponse) => void): Request<Glue.Types.GetDevEndpointsResponse, AWSError>;
  /**
   * Retrieves an existing job definition.
   */
  getJob(params: Glue.Types.GetJobRequest, callback?: (err: AWSError, data: Glue.Types.GetJobResponse) => void): Request<Glue.Types.GetJobResponse, AWSError>;
  /**
   * Retrieves an existing job definition.
   */
  getJob(callback?: (err: AWSError, data: Glue.Types.GetJobResponse) => void): Request<Glue.Types.GetJobResponse, AWSError>;
  /**
   * Retrieves the metadata for a given job run.
   */
  getJobRun(params: Glue.Types.GetJobRunRequest, callback?: (err: AWSError, data: Glue.Types.GetJobRunResponse) => void): Request<Glue.Types.GetJobRunResponse, AWSError>;
  /**
   * Retrieves the metadata for a given job run.
   */
  getJobRun(callback?: (err: AWSError, data: Glue.Types.GetJobRunResponse) => void): Request<Glue.Types.GetJobRunResponse, AWSError>;
  /**
   * Retrieves metadata for all runs of a given job.
   */
  getJobRuns(params: Glue.Types.GetJobRunsRequest, callback?: (err: AWSError, data: Glue.Types.GetJobRunsResponse) => void): Request<Glue.Types.GetJobRunsResponse, AWSError>;
  /**
   * Retrieves metadata for all runs of a given job.
   */
  getJobRuns(callback?: (err: AWSError, data: Glue.Types.GetJobRunsResponse) => void): Request<Glue.Types.GetJobRunsResponse, AWSError>;
  /**
   * Retrieves all current jobs.
   */
  getJobs(params: Glue.Types.GetJobsRequest, callback?: (err: AWSError, data: Glue.Types.GetJobsResponse) => void): Request<Glue.Types.GetJobsResponse, AWSError>;
  /**
   * Retrieves all current jobs.
   */
  getJobs(callback?: (err: AWSError, data: Glue.Types.GetJobsResponse) => void): Request<Glue.Types.GetJobsResponse, AWSError>;
  /**
   * Creates mappings.
   */
  getMapping(params: Glue.Types.GetMappingRequest, callback?: (err: AWSError, data: Glue.Types.GetMappingResponse) => void): Request<Glue.Types.GetMappingResponse, AWSError>;
  /**
   * Creates mappings.
   */
  getMapping(callback?: (err: AWSError, data: Glue.Types.GetMappingResponse) => void): Request<Glue.Types.GetMappingResponse, AWSError>;
  /**
   * Retrieves information about a specified partition.
   */
  getPartition(params: Glue.Types.GetPartitionRequest, callback?: (err: AWSError, data: Glue.Types.GetPartitionResponse) => void): Request<Glue.Types.GetPartitionResponse, AWSError>;
  /**
   * Retrieves information about a specified partition.
   */
  getPartition(callback?: (err: AWSError, data: Glue.Types.GetPartitionResponse) => void): Request<Glue.Types.GetPartitionResponse, AWSError>;
  /**
   * Retrieves information about the partitions in a table.
   */
  getPartitions(params: Glue.Types.GetPartitionsRequest, callback?: (err: AWSError, data: Glue.Types.GetPartitionsResponse) => void): Request<Glue.Types.GetPartitionsResponse, AWSError>;
  /**
   * Retrieves information about the partitions in a table.
   */
  getPartitions(callback?: (err: AWSError, data: Glue.Types.GetPartitionsResponse) => void): Request<Glue.Types.GetPartitionsResponse, AWSError>;
  /**
   * Gets code to perform a specified mapping.
   */
  getPlan(params: Glue.Types.GetPlanRequest, callback?: (err: AWSError, data: Glue.Types.GetPlanResponse) => void): Request<Glue.Types.GetPlanResponse, AWSError>;
  /**
   * Gets code to perform a specified mapping.
   */
  getPlan(callback?: (err: AWSError, data: Glue.Types.GetPlanResponse) => void): Request<Glue.Types.GetPlanResponse, AWSError>;
  /**
   * Retrieves the Table definition in a Data Catalog for a specified table.
   */
  getTable(params: Glue.Types.GetTableRequest, callback?: (err: AWSError, data: Glue.Types.GetTableResponse) => void): Request<Glue.Types.GetTableResponse, AWSError>;
  /**
   * Retrieves the Table definition in a Data Catalog for a specified table.
   */
  getTable(callback?: (err: AWSError, data: Glue.Types.GetTableResponse) => void): Request<Glue.Types.GetTableResponse, AWSError>;
  /**
   * Retrieves a specified version of a table.
   */
  getTableVersion(params: Glue.Types.GetTableVersionRequest, callback?: (err: AWSError, data: Glue.Types.GetTableVersionResponse) => void): Request<Glue.Types.GetTableVersionResponse, AWSError>;
  /**
   * Retrieves a specified version of a table.
   */
  getTableVersion(callback?: (err: AWSError, data: Glue.Types.GetTableVersionResponse) => void): Request<Glue.Types.GetTableVersionResponse, AWSError>;
  /**
   * Retrieves a list of strings that identify available versions of a specified table.
   */
  getTableVersions(params: Glue.Types.GetTableVersionsRequest, callback?: (err: AWSError, data: Glue.Types.GetTableVersionsResponse) => void): Request<Glue.Types.GetTableVersionsResponse, AWSError>;
  /**
   * Retrieves a list of strings that identify available versions of a specified table.
   */
  getTableVersions(callback?: (err: AWSError, data: Glue.Types.GetTableVersionsResponse) => void): Request<Glue.Types.GetTableVersionsResponse, AWSError>;
  /**
   * Retrieves the definitions of some or all of the tables in a given Database.
   */
  getTables(params: Glue.Types.GetTablesRequest, callback?: (err: AWSError, data: Glue.Types.GetTablesResponse) => void): Request<Glue.Types.GetTablesResponse, AWSError>;
  /**
   * Retrieves the definitions of some or all of the tables in a given Database.
   */
  getTables(callback?: (err: AWSError, data: Glue.Types.GetTablesResponse) => void): Request<Glue.Types.GetTablesResponse, AWSError>;
  /**
   * Retrieves the definition of a trigger.
   */
  getTrigger(params: Glue.Types.GetTriggerRequest, callback?: (err: AWSError, data: Glue.Types.GetTriggerResponse) => void): Request<Glue.Types.GetTriggerResponse, AWSError>;
  /**
   * Retrieves the definition of a trigger.
   */
  getTrigger(callback?: (err: AWSError, data: Glue.Types.GetTriggerResponse) => void): Request<Glue.Types.GetTriggerResponse, AWSError>;
  /**
   * Gets all the triggers associated with a job.
   */
  getTriggers(params: Glue.Types.GetTriggersRequest, callback?: (err: AWSError, data: Glue.Types.GetTriggersResponse) => void): Request<Glue.Types.GetTriggersResponse, AWSError>;
  /**
   * Gets all the triggers associated with a job.
   */
  getTriggers(callback?: (err: AWSError, data: Glue.Types.GetTriggersResponse) => void): Request<Glue.Types.GetTriggersResponse, AWSError>;
  /**
   * Retrieves a specified function definition from the Data Catalog.
   */
  getUserDefinedFunction(params: Glue.Types.GetUserDefinedFunctionRequest, callback?: (err: AWSError, data: Glue.Types.GetUserDefinedFunctionResponse) => void): Request<Glue.Types.GetUserDefinedFunctionResponse, AWSError>;
  /**
   * Retrieves a specified function definition from the Data Catalog.
   */
  getUserDefinedFunction(callback?: (err: AWSError, data: Glue.Types.GetUserDefinedFunctionResponse) => void): Request<Glue.Types.GetUserDefinedFunctionResponse, AWSError>;
  /**
   * Retrieves a multiple function definitions from the Data Catalog.
   */
  getUserDefinedFunctions(params: Glue.Types.GetUserDefinedFunctionsRequest, callback?: (err: AWSError, data: Glue.Types.GetUserDefinedFunctionsResponse) => void): Request<Glue.Types.GetUserDefinedFunctionsResponse, AWSError>;
  /**
   * Retrieves a multiple function definitions from the Data Catalog.
   */
  getUserDefinedFunctions(callback?: (err: AWSError, data: Glue.Types.GetUserDefinedFunctionsResponse) => void): Request<Glue.Types.GetUserDefinedFunctionsResponse, AWSError>;
  /**
   * Imports an existing Athena Data Catalog to AWS Glue
   */
  importCatalogToGlue(params: Glue.Types.ImportCatalogToGlueRequest, callback?: (err: AWSError, data: Glue.Types.ImportCatalogToGlueResponse) => void): Request<Glue.Types.ImportCatalogToGlueResponse, AWSError>;
  /**
   * Imports an existing Athena Data Catalog to AWS Glue
   */
  importCatalogToGlue(callback?: (err: AWSError, data: Glue.Types.ImportCatalogToGlueResponse) => void): Request<Glue.Types.ImportCatalogToGlueResponse, AWSError>;
  /**
   * Resets a bookmark entry.
   */
  resetJobBookmark(params: Glue.Types.ResetJobBookmarkRequest, callback?: (err: AWSError, data: Glue.Types.ResetJobBookmarkResponse) => void): Request<Glue.Types.ResetJobBookmarkResponse, AWSError>;
  /**
   * Resets a bookmark entry.
   */
  resetJobBookmark(callback?: (err: AWSError, data: Glue.Types.ResetJobBookmarkResponse) => void): Request<Glue.Types.ResetJobBookmarkResponse, AWSError>;
  /**
   * Starts a crawl using the specified crawler, regardless of what is scheduled. If the crawler is already running, does nothing.
   */
  startCrawler(params: Glue.Types.StartCrawlerRequest, callback?: (err: AWSError, data: Glue.Types.StartCrawlerResponse) => void): Request<Glue.Types.StartCrawlerResponse, AWSError>;
  /**
   * Starts a crawl using the specified crawler, regardless of what is scheduled. If the crawler is already running, does nothing.
   */
  startCrawler(callback?: (err: AWSError, data: Glue.Types.StartCrawlerResponse) => void): Request<Glue.Types.StartCrawlerResponse, AWSError>;
  /**
   * Changes the schedule state of the specified crawler to SCHEDULED, unless the crawler is already running or the schedule state is already SCHEDULED.
   */
  startCrawlerSchedule(params: Glue.Types.StartCrawlerScheduleRequest, callback?: (err: AWSError, data: Glue.Types.StartCrawlerScheduleResponse) => void): Request<Glue.Types.StartCrawlerScheduleResponse, AWSError>;
  /**
   * Changes the schedule state of the specified crawler to SCHEDULED, unless the crawler is already running or the schedule state is already SCHEDULED.
   */
  startCrawlerSchedule(callback?: (err: AWSError, data: Glue.Types.StartCrawlerScheduleResponse) => void): Request<Glue.Types.StartCrawlerScheduleResponse, AWSError>;
  /**
   * Runs a job.
   */
  startJobRun(params: Glue.Types.StartJobRunRequest, callback?: (err: AWSError, data: Glue.Types.StartJobRunResponse) => void): Request<Glue.Types.StartJobRunResponse, AWSError>;
  /**
   * Runs a job.
   */
  startJobRun(callback?: (err: AWSError, data: Glue.Types.StartJobRunResponse) => void): Request<Glue.Types.StartJobRunResponse, AWSError>;
  /**
   * Starts an existing trigger. See Triggering Jobs for information about how different types of trigger are started.
   */
  startTrigger(params: Glue.Types.StartTriggerRequest, callback?: (err: AWSError, data: Glue.Types.StartTriggerResponse) => void): Request<Glue.Types.StartTriggerResponse, AWSError>;
  /**
   * Starts an existing trigger. See Triggering Jobs for information about how different types of trigger are started.
   */
  startTrigger(callback?: (err: AWSError, data: Glue.Types.StartTriggerResponse) => void): Request<Glue.Types.StartTriggerResponse, AWSError>;
  /**
   * If the specified crawler is running, stops the crawl.
   */
  stopCrawler(params: Glue.Types.StopCrawlerRequest, callback?: (err: AWSError, data: Glue.Types.StopCrawlerResponse) => void): Request<Glue.Types.StopCrawlerResponse, AWSError>;
  /**
   * If the specified crawler is running, stops the crawl.
   */
  stopCrawler(callback?: (err: AWSError, data: Glue.Types.StopCrawlerResponse) => void): Request<Glue.Types.StopCrawlerResponse, AWSError>;
  /**
   * Sets the schedule state of the specified crawler to NOT_SCHEDULED, but does not stop the crawler if it is already running.
   */
  stopCrawlerSchedule(params: Glue.Types.StopCrawlerScheduleRequest, callback?: (err: AWSError, data: Glue.Types.StopCrawlerScheduleResponse) => void): Request<Glue.Types.StopCrawlerScheduleResponse, AWSError>;
  /**
   * Sets the schedule state of the specified crawler to NOT_SCHEDULED, but does not stop the crawler if it is already running.
   */
  stopCrawlerSchedule(callback?: (err: AWSError, data: Glue.Types.StopCrawlerScheduleResponse) => void): Request<Glue.Types.StopCrawlerScheduleResponse, AWSError>;
  /**
   * Stops a specified trigger.
   */
  stopTrigger(params: Glue.Types.StopTriggerRequest, callback?: (err: AWSError, data: Glue.Types.StopTriggerResponse) => void): Request<Glue.Types.StopTriggerResponse, AWSError>;
  /**
   * Stops a specified trigger.
   */
  stopTrigger(callback?: (err: AWSError, data: Glue.Types.StopTriggerResponse) => void): Request<Glue.Types.StopTriggerResponse, AWSError>;
  /**
   * Modifies an existing classifier (either a GrokClassifier or an XMLClassifier).
   */
  updateClassifier(params: Glue.Types.UpdateClassifierRequest, callback?: (err: AWSError, data: Glue.Types.UpdateClassifierResponse) => void): Request<Glue.Types.UpdateClassifierResponse, AWSError>;
  /**
   * Modifies an existing classifier (either a GrokClassifier or an XMLClassifier).
   */
  updateClassifier(callback?: (err: AWSError, data: Glue.Types.UpdateClassifierResponse) => void): Request<Glue.Types.UpdateClassifierResponse, AWSError>;
  /**
   * Updates a connection definition in the Data Catalog.
   */
  updateConnection(params: Glue.Types.UpdateConnectionRequest, callback?: (err: AWSError, data: Glue.Types.UpdateConnectionResponse) => void): Request<Glue.Types.UpdateConnectionResponse, AWSError>;
  /**
   * Updates a connection definition in the Data Catalog.
   */
  updateConnection(callback?: (err: AWSError, data: Glue.Types.UpdateConnectionResponse) => void): Request<Glue.Types.UpdateConnectionResponse, AWSError>;
  /**
   * Updates a crawler. If a crawler is running, you must stop it using StopCrawler before updating it.
   */
  updateCrawler(params: Glue.Types.UpdateCrawlerRequest, callback?: (err: AWSError, data: Glue.Types.UpdateCrawlerResponse) => void): Request<Glue.Types.UpdateCrawlerResponse, AWSError>;
  /**
   * Updates a crawler. If a crawler is running, you must stop it using StopCrawler before updating it.
   */
  updateCrawler(callback?: (err: AWSError, data: Glue.Types.UpdateCrawlerResponse) => void): Request<Glue.Types.UpdateCrawlerResponse, AWSError>;
  /**
   * Updates the schedule of a crawler using a cron expression. 
   */
  updateCrawlerSchedule(params: Glue.Types.UpdateCrawlerScheduleRequest, callback?: (err: AWSError, data: Glue.Types.UpdateCrawlerScheduleResponse) => void): Request<Glue.Types.UpdateCrawlerScheduleResponse, AWSError>;
  /**
   * Updates the schedule of a crawler using a cron expression. 
   */
  updateCrawlerSchedule(callback?: (err: AWSError, data: Glue.Types.UpdateCrawlerScheduleResponse) => void): Request<Glue.Types.UpdateCrawlerScheduleResponse, AWSError>;
  /**
   * Updates an existing database definition in a Data Catalog.
   */
  updateDatabase(params: Glue.Types.UpdateDatabaseRequest, callback?: (err: AWSError, data: Glue.Types.UpdateDatabaseResponse) => void): Request<Glue.Types.UpdateDatabaseResponse, AWSError>;
  /**
   * Updates an existing database definition in a Data Catalog.
   */
  updateDatabase(callback?: (err: AWSError, data: Glue.Types.UpdateDatabaseResponse) => void): Request<Glue.Types.UpdateDatabaseResponse, AWSError>;
  /**
   * Updates a specified DevEndpoint.
   */
  updateDevEndpoint(params: Glue.Types.UpdateDevEndpointRequest, callback?: (err: AWSError, data: Glue.Types.UpdateDevEndpointResponse) => void): Request<Glue.Types.UpdateDevEndpointResponse, AWSError>;
  /**
   * Updates a specified DevEndpoint.
   */
  updateDevEndpoint(callback?: (err: AWSError, data: Glue.Types.UpdateDevEndpointResponse) => void): Request<Glue.Types.UpdateDevEndpointResponse, AWSError>;
  /**
   * Updates an existing job definition.
   */
  updateJob(params: Glue.Types.UpdateJobRequest, callback?: (err: AWSError, data: Glue.Types.UpdateJobResponse) => void): Request<Glue.Types.UpdateJobResponse, AWSError>;
  /**
   * Updates an existing job definition.
   */
  updateJob(callback?: (err: AWSError, data: Glue.Types.UpdateJobResponse) => void): Request<Glue.Types.UpdateJobResponse, AWSError>;
  /**
   * Updates a partition.
   */
  updatePartition(params: Glue.Types.UpdatePartitionRequest, callback?: (err: AWSError, data: Glue.Types.UpdatePartitionResponse) => void): Request<Glue.Types.UpdatePartitionResponse, AWSError>;
  /**
   * Updates a partition.
   */
  updatePartition(callback?: (err: AWSError, data: Glue.Types.UpdatePartitionResponse) => void): Request<Glue.Types.UpdatePartitionResponse, AWSError>;
  /**
   * Updates a metadata table in the Data Catalog.
   */
  updateTable(params: Glue.Types.UpdateTableRequest, callback?: (err: AWSError, data: Glue.Types.UpdateTableResponse) => void): Request<Glue.Types.UpdateTableResponse, AWSError>;
  /**
   * Updates a metadata table in the Data Catalog.
   */
  updateTable(callback?: (err: AWSError, data: Glue.Types.UpdateTableResponse) => void): Request<Glue.Types.UpdateTableResponse, AWSError>;
  /**
   * Updates a trigger definition.
   */
  updateTrigger(params: Glue.Types.UpdateTriggerRequest, callback?: (err: AWSError, data: Glue.Types.UpdateTriggerResponse) => void): Request<Glue.Types.UpdateTriggerResponse, AWSError>;
  /**
   * Updates a trigger definition.
   */
  updateTrigger(callback?: (err: AWSError, data: Glue.Types.UpdateTriggerResponse) => void): Request<Glue.Types.UpdateTriggerResponse, AWSError>;
  /**
   * Updates an existing function definition in the Data Catalog.
   */
  updateUserDefinedFunction(params: Glue.Types.UpdateUserDefinedFunctionRequest, callback?: (err: AWSError, data: Glue.Types.UpdateUserDefinedFunctionResponse) => void): Request<Glue.Types.UpdateUserDefinedFunctionResponse, AWSError>;
  /**
   * Updates an existing function definition in the Data Catalog.
   */
  updateUserDefinedFunction(callback?: (err: AWSError, data: Glue.Types.UpdateUserDefinedFunctionResponse) => void): Request<Glue.Types.UpdateUserDefinedFunctionResponse, AWSError>;
}
declare namespace Glue {
  export interface Action {
    /**
     * The name of a job to be executed.
     */
    JobName?: NameString;
    /**
     * Arguments to be passed to the job. You can specify arguments here that your own job-execution script consumes, as well as arguments that AWS Glue itself consumes. For information about how to specify and consume your own Job arguments, see the Calling AWS Glue APIs in Python topic in the developer guide. For information about the key-value pairs that AWS Glue consumes to set up your job, see the Special Parameters Used by AWS Glue topic in the developer guide.
     */
    Arguments?: GenericMap;
  }
  export type ActionList = Action[];
  export type AttemptCount = number;
  export interface BatchCreatePartitionRequest {
    /**
     * The ID of the catalog in which the partion is to be created. Currently, this should be the AWS account ID.
     */
    CatalogId?: CatalogIdString;
    /**
     * The name of the metadata database in which the partition is to be created.
     */
    DatabaseName: NameString;
    /**
     * The name of the metadata table in which the partition is to be created.
     */
    TableName: NameString;
    /**
     * A list of PartitionInput structures that define the partitions to be created.
     */
    PartitionInputList: PartitionInputList;
  }
  export interface BatchCreatePartitionResponse {
    /**
     * Errors encountered when trying to create the requested partitions.
     */
    Errors?: PartitionErrors;
  }
  export interface BatchDeleteConnectionRequest {
    /**
     * The ID of the Data Catalog in which the connections reside. If none is supplied, the AWS account ID is used by default.
     */
    CatalogId?: CatalogIdString;
    /**
     * A list of names of the connections to delete.
     */
    ConnectionNameList: DeleteConnectionNameList;
  }
  export interface BatchDeleteConnectionResponse {
    /**
     * A list of names of the connection definitions that were successfully deleted.
     */
    Succeeded?: NameStringList;
    /**
     * A map of the names of connections that were not successfully deleted to error details.
     */
    Errors?: ErrorByName;
  }
  export interface BatchDeletePartitionRequest {
    /**
     * The ID of the Data Catalog where the partition to be deleted resides. If none is supplied, the AWS account ID is used by default.
     */
    CatalogId?: CatalogIdString;
    /**
     * The name of the catalog database in which the table in question resides.
     */
    DatabaseName: NameString;
    /**
     * The name of the table where the partitions to be deleted is located.
     */
    TableName: NameString;
    /**
     * A list of PartitionInput structures that define the partitions to be deleted.
     */
    PartitionsToDelete: BatchDeletePartitionValueList;
  }
  export interface BatchDeletePartitionResponse {
    /**
     * Errors encountered when trying to delete the requested partitions.
     */
    Errors?: PartitionErrors;
  }
  export type BatchDeletePartitionValueList = PartitionValueList[];
  export type BatchDeleteTableNameList = NameString[];
  export interface BatchDeleteTableRequest {
    /**
     * The ID of the Data Catalog where the table resides. If none is supplied, the AWS account ID is used by default.
     */
    CatalogId?: CatalogIdString;
    /**
     * The name of the catalog database where the tables to delete reside. For Hive compatibility, this name is entirely lowercase.
     */
    DatabaseName: NameString;
    /**
     * A list of the table to delete.
     */
    TablesToDelete: BatchDeleteTableNameList;
  }
  export interface BatchDeleteTableResponse {
    /**
     * A list of errors encountered in attempting to delete the specified tables.
     */
    Errors?: TableErrors;
  }
  export type BatchDeleteTableVersionList = VersionString[];
  export interface BatchDeleteTableVersionRequest {
    /**
     * The ID of the Data Catalog where the tables reside. If none is supplied, the AWS account ID is used by default.
     */
    CatalogId?: CatalogIdString;
    /**
     * The database in the catalog in which the table resides. For Hive compatibility, this name is entirely lowercase.
     */
    DatabaseName: NameString;
    /**
     * The name of the table. For Hive compatibility, this name is entirely lowercase.
     */
    TableName: NameString;
    /**
     * A list of the IDs of versions to be deleted.
     */
    VersionIds: BatchDeleteTableVersionList;
  }
  export interface BatchDeleteTableVersionResponse {
    /**
     * A list of errors encountered while trying to delete the specified table versions.
     */
    Errors?: TableVersionErrors;
  }
  export interface BatchGetPartitionRequest {
    /**
     * The ID of the Data Catalog where the partitions in question reside. If none is supplied, the AWS account ID is used by default.
     */
    CatalogId?: CatalogIdString;
    /**
     * The name of the catalog database where the partitions reside.
     */
    DatabaseName: NameString;
    /**
     * The name of the partitions' table.
     */
    TableName: NameString;
    /**
     * A list of partition values identifying the partitions to retrieve.
     */
    PartitionsToGet: BatchGetPartitionValueList;
  }
  export interface BatchGetPartitionResponse {
    /**
     * A list of the requested partitions.
     */
    Partitions?: PartitionList;
    /**
     * A list of the partition values in the request for which partions were not returned.
     */
    UnprocessedKeys?: BatchGetPartitionValueList;
  }
  export type BatchGetPartitionValueList = PartitionValueList[];
  export interface BatchStopJobRunError {
    /**
     * The name of the Job in question.
     */
    JobName?: NameString;
    /**
     * The JobRunId of the JobRun in question.
     */
    JobRunId?: IdString;
    /**
     * Specifies details about the error that was encountered.
     */
    ErrorDetail?: ErrorDetail;
  }
  export type BatchStopJobRunErrorList = BatchStopJobRunError[];
  export type BatchStopJobRunJobRunIdList = IdString[];
  export interface BatchStopJobRunRequest {
    /**
     * The name of the Job in question.
     */
    JobName: NameString;
    /**
     * A list of the JobRunIds that should be stopped for that Job.
     */
    JobRunIds: BatchStopJobRunJobRunIdList;
  }
  export interface BatchStopJobRunResponse {
    /**
     * A list of the JobRuns that were successfully submitted for stopping.
     */
    SuccessfulSubmissions?: BatchStopJobRunSuccessfulSubmissionList;
    /**
     * A list of the errors that were encountered in tryng to stop JobRuns, including the JobRunId for which each error was encountered and details about the error.
     */
    Errors?: BatchStopJobRunErrorList;
  }
  export interface BatchStopJobRunSuccessfulSubmission {
    /**
     * The Name of the Job in question.
     */
    JobName?: NameString;
    /**
     * The JobRunId of the JobRun in question.
     */
    JobRunId?: IdString;
  }
  export type BatchStopJobRunSuccessfulSubmissionList = BatchStopJobRunSuccessfulSubmission[];
  export type Boolean = boolean;
  export type BooleanNullable = boolean;
  export type BooleanValue = boolean;
  export type BoundedPartitionValueList = ValueString[];
  export type CatalogEntries = CatalogEntry[];
  export interface CatalogEntry {
    /**
     * The database in which the table metadata resides.
     */
    DatabaseName: NameString;
    /**
     * The name of the table in question.
     */
    TableName: NameString;
  }
  export type CatalogIdString = string;
  export interface CatalogImportStatus {
    /**
     * True if the migration has completed, or False otherwise.
     */
    ImportCompleted?: Boolean;
    /**
     * The time that the migration was started.
     */
    ImportTime?: Timestamp;
    /**
     * The name of the person who initiated the migration.
     */
    ImportedBy?: NameString;
  }
  export type Classification = string;
  export interface Classifier {
    /**
     * A GrokClassifier object.
     */
    GrokClassifier?: GrokClassifier;
    /**
     * An XMLClassifier object.
     */
    XMLClassifier?: XMLClassifier;
  }
  export type ClassifierList = Classifier[];
  export type ClassifierNameList = NameString[];
  export type CodeGenArgName = string;
  export type CodeGenArgValue = string;
  export interface CodeGenEdge {
    /**
     * The ID of the node at which the edge starts.
     */
    Source: CodeGenIdentifier;
    /**
     * The ID of the node at which the edge ends.
     */
    Target: CodeGenIdentifier;
    /**
     * The target of the edge.
     */
    TargetParameter?: CodeGenArgName;
  }
  export type CodeGenIdentifier = string;
  export interface CodeGenNode {
    /**
     * A node identifier that is unique within the node's graph.
     */
    Id: CodeGenIdentifier;
    /**
     * The type of node this is.
     */
    NodeType: CodeGenNodeType;
    /**
     * Properties of the node, in the form of name-value pairs.
     */
    Args: CodeGenNodeArgs;
    /**
     * The line number of the node.
     */
    LineNumber?: Integer;
  }
  export interface CodeGenNodeArg {
    /**
     * The name of the argument or property.
     */
    Name: CodeGenArgName;
    /**
     * The value of the argument or property.
     */
    Value: CodeGenArgValue;
    /**
     * True if the value is used as a parameter.
     */
    Param?: Boolean;
  }
  export type CodeGenNodeArgs = CodeGenNodeArg[];
  export type CodeGenNodeType = string;
  export interface Column {
    /**
     * The name of the Column.
     */
    Name: NameString;
    /**
     * The datatype of data in the Column.
     */
    Type?: ColumnTypeString;
    /**
     * Free-form text comment.
     */
    Comment?: CommentString;
  }
  export type ColumnList = Column[];
  export type ColumnTypeString = string;
  export type ColumnValueStringList = ColumnValuesString[];
  export type ColumnValuesString = string;
  export type CommentString = string;
  export interface Condition {
    /**
     * A logical operator.
     */
    LogicalOperator?: LogicalOperator;
    /**
     * The name of the Job to whose JobRuns this condition applies and on which this trigger waits.
     */
    JobName?: NameString;
    /**
     * The condition state. Currently, the values supported are SUCCEEDED, STOPPED and FAILED.
     */
    State?: JobRunState;
  }
  export type ConditionList = Condition[];
  export interface Connection {
    /**
     * The name of the connection definition.
     */
    Name?: NameString;
    /**
     * Description of the connection.
     */
    Description?: DescriptionString;
    /**
     * The type of the connection. Currently, only JDBC is supported; SFTP is not supported.
     */
    ConnectionType?: ConnectionType;
    /**
     * A list of criteria that can be used in selecting this connection.
     */
    MatchCriteria?: MatchCriteria;
    /**
     * A list of key-value pairs used as parameters for this connection.
     */
    ConnectionProperties?: ConnectionProperties;
    /**
     * A map of physical connection requirements, such as VPC and SecurityGroup, needed for making this connection successfully.
     */
    PhysicalConnectionRequirements?: PhysicalConnectionRequirements;
    /**
     * The time this connection definition was created.
     */
    CreationTime?: Timestamp;
    /**
     * The last time this connection definition was updated.
     */
    LastUpdatedTime?: Timestamp;
    /**
     * The user, group or role that last updated this connection definition.
     */
    LastUpdatedBy?: NameString;
  }
  export interface ConnectionInput {
    /**
     * The name of the connection.
     */
    Name: NameString;
    /**
     * Description of the connection.
     */
    Description?: DescriptionString;
    /**
     * The type of the connection. Currently, only JDBC is supported; SFTP is not supported.
     */
    ConnectionType: ConnectionType;
    /**
     * A list of criteria that can be used in selecting this connection.
     */
    MatchCriteria?: MatchCriteria;
    /**
     * A list of key-value pairs used as parameters for this connection.
     */
    ConnectionProperties: ConnectionProperties;
    /**
     * A map of physical connection requirements, such as VPC and SecurityGroup, needed for making this connection successfully.
     */
    PhysicalConnectionRequirements?: PhysicalConnectionRequirements;
  }
  export type ConnectionList = Connection[];
  export type ConnectionName = string;
  export type ConnectionProperties = {[key: string]: ValueString};
  export type ConnectionPropertyKey = "HOST"|"PORT"|"USERNAME"|"PASSWORD"|"JDBC_DRIVER_JAR_URI"|"JDBC_DRIVER_CLASS_NAME"|"JDBC_ENGINE"|"JDBC_ENGINE_VERSION"|"CONFIG_FILES"|"INSTANCE_ID"|"JDBC_CONNECTION_URL"|string;
  export type ConnectionType = "JDBC"|"SFTP"|string;
  export interface ConnectionsList {
    /**
     * A list of connections used by the job.
     */
    Connections?: StringList;
  }
  export interface Crawler {
    /**
     * The crawler name.
     */
    Name?: NameString;
    /**
     * The IAM role (or ARN of an IAM role) used to access customer resources, such as data in Amazon S3.
     */
    Role?: Role;
    /**
     * A collection of targets to crawl.
     */
    Targets?: CrawlerTargets;
    /**
     * The database where metadata is written by this crawler.
     */
    DatabaseName?: DatabaseName;
    /**
     * A description of the crawler.
     */
    Description?: DescriptionString;
    /**
     * A list of custom classifiers associated with the crawler.
     */
    Classifiers?: ClassifierNameList;
    /**
     * Sets the behavior when the crawler finds a changed or deleted object.
     */
    SchemaChangePolicy?: SchemaChangePolicy;
    /**
     * Indicates whether the crawler is running, or whether a run is pending.
     */
    State?: CrawlerState;
    /**
     * The prefix added to the names of tables that are created.
     */
    TablePrefix?: TablePrefix;
    /**
     * For scheduled crawlers, the schedule when the crawler runs.
     */
    Schedule?: Schedule;
    /**
     * If the crawler is running, contains the total time elapsed since the last crawl began.
     */
    CrawlElapsedTime?: MillisecondsCount;
    /**
     * The time when the crawler was created.
     */
    CreationTime?: Timestamp;
    /**
     * The time the crawler was last updated.
     */
    LastUpdated?: Timestamp;
    /**
     * The status of the last crawl, and potentially error information if an error occurred.
     */
    LastCrawl?: LastCrawlInfo;
    /**
     * The version of the crawler.
     */
    Version?: VersionId;
    /**
     * Crawler configuration information. This versioned JSON string allows users to specify aspects of a Crawler's behavior. You can use this field to force partitions to inherit metadata such as classification, input format, output format, serde information, and schema from their parent table, rather than detect this information separately for each partition. Use the following JSON string to specify that behavior: Example: '{ "Version": 1.0, "CrawlerOutput": { "Partitions": { "AddOrUpdateBehavior": "InheritFromTable" } } }' 
     */
    Configuration?: CrawlerConfiguration;
  }
  export type CrawlerConfiguration = string;
  export type CrawlerList = Crawler[];
  export interface CrawlerMetrics {
    /**
     * The name of the crawler.
     */
    CrawlerName?: NameString;
    /**
     * The estimated time left to complete a running crawl.
     */
    TimeLeftSeconds?: NonNegativeDouble;
    /**
     * True if the crawler is still estimating how long it will take to complete this run.
     */
    StillEstimating?: Boolean;
    /**
     * The duration of the crawler's most recent run, in seconds.
     */
    LastRuntimeSeconds?: NonNegativeDouble;
    /**
     * The median duration of this crawler's runs, in seconds.
     */
    MedianRuntimeSeconds?: NonNegativeDouble;
    /**
     * The number of tables created by this crawler.
     */
    TablesCreated?: NonNegativeInteger;
    /**
     * The number of tables updated by this crawler.
     */
    TablesUpdated?: NonNegativeInteger;
    /**
     * The number of tables deleted by this crawler.
     */
    TablesDeleted?: NonNegativeInteger;
  }
  export type CrawlerMetricsList = CrawlerMetrics[];
  export type CrawlerNameList = NameString[];
  export type CrawlerState = "READY"|"RUNNING"|"STOPPING"|string;
  export interface CrawlerTargets {
    /**
     * Specifies Amazon S3 targets.
     */
    S3Targets?: S3TargetList;
    /**
     * Specifies JDBC targets.
     */
    JdbcTargets?: JdbcTargetList;
  }
  export interface CreateClassifierRequest {
    /**
     * A GrokClassifier object specifying the classifier to create.
     */
    GrokClassifier?: CreateGrokClassifierRequest;
    /**
     * An XMLClassifier object specifying the classifier to create.
     */
    XMLClassifier?: CreateXMLClassifierRequest;
  }
  export interface CreateClassifierResponse {
  }
  export interface CreateConnectionRequest {
    /**
     * The ID of the Data Catalog in which to create the connection. If none is supplied, the AWS account ID is used by default.
     */
    CatalogId?: CatalogIdString;
    /**
     * A ConnectionInput object defining the connection to create.
     */
    ConnectionInput: ConnectionInput;
  }
  export interface CreateConnectionResponse {
  }
  export interface CreateCrawlerRequest {
    /**
     * Name of the new crawler.
     */
    Name: NameString;
    /**
     * The IAM role (or ARN of an IAM role) used by the new crawler to access customer resources.
     */
    Role: Role;
    /**
     * The AWS Glue database where results are written, such as: arn:aws:daylight:us-east-1::database/sometable/*.
     */
    DatabaseName: DatabaseName;
    /**
     * A description of the new crawler.
     */
    Description?: DescriptionString;
    /**
     * A list of collection of targets to crawl.
     */
    Targets: CrawlerTargets;
    /**
     * A cron expression used to specify the schedule (see Time-Based Schedules for Jobs and Crawlers. For example, to run something every day at 12:15 UTC, you would specify: cron(15 12 * * ? *).
     */
    Schedule?: CronExpression;
    /**
     * A list of custom classifiers that the user has registered. By default, all AWS classifiers are included in a crawl, but these custom classifiers always override the default classifiers for a given classification.
     */
    Classifiers?: ClassifierNameList;
    /**
     * The table prefix used for catalog tables that are created.
     */
    TablePrefix?: TablePrefix;
    /**
     * Policy for the crawler's update and deletion behavior.
     */
    SchemaChangePolicy?: SchemaChangePolicy;
    /**
     * Crawler configuration information. This versioned JSON string allows users to specify aspects of a Crawler's behavior. You can use this field to force partitions to inherit metadata such as classification, input format, output format, serde information, and schema from their parent table, rather than detect this information separately for each partition. Use the following JSON string to specify that behavior: Example: '{ "Version": 1.0, "CrawlerOutput": { "Partitions": { "AddOrUpdateBehavior": "InheritFromTable" } } }' 
     */
    Configuration?: CrawlerConfiguration;
  }
  export interface CreateCrawlerResponse {
  }
  export interface CreateDatabaseRequest {
    /**
     * The ID of the Data Catalog in which to create the database. If none is supplied, the AWS account ID is used by default.
     */
    CatalogId?: CatalogIdString;
    /**
     * A DatabaseInput object defining the metadata database to create in the catalog.
     */
    DatabaseInput: DatabaseInput;
  }
  export interface CreateDatabaseResponse {
  }
  export interface CreateDevEndpointRequest {
    /**
     * The name to be assigned to the new DevEndpoint.
     */
    EndpointName: GenericString;
    /**
     * The IAM role for the DevEndpoint.
     */
    RoleArn: RoleArn;
    /**
     * Security group IDs for the security groups to be used by the new DevEndpoint.
     */
    SecurityGroupIds?: StringList;
    /**
     * The subnet ID for the new DevEndpoint to use.
     */
    SubnetId?: GenericString;
    /**
     * The public key to use for authentication.
     */
    PublicKey: GenericString;
    /**
     * The number of AWS Glue Data Processing Units (DPUs) to allocate to this DevEndpoint.
     */
    NumberOfNodes?: IntegerValue;
    /**
     * Path(s) to one or more Python libraries in an S3 bucket that should be loaded in your DevEndpoint. Multiple values must be complete paths separated by a comma. Please note that only pure Python libraries can currently be used on a DevEndpoint. Libraries that rely on C extensions, such as the pandas Python data analysis library, are not yet supported.
     */
    ExtraPythonLibsS3Path?: GenericString;
    /**
     * Path to one or more Java Jars in an S3 bucket that should be loaded in your DevEndpoint.
     */
    ExtraJarsS3Path?: GenericString;
  }
  export interface CreateDevEndpointResponse {
    /**
     * The name assigned to the new DevEndpoint.
     */
    EndpointName?: GenericString;
    /**
     * The current status of the new DevEndpoint.
     */
    Status?: GenericString;
    /**
     * The security groups assigned to the new DevEndpoint.
     */
    SecurityGroupIds?: StringList;
    /**
     * The subnet ID assigned to the new DevEndpoint.
     */
    SubnetId?: GenericString;
    /**
     * The AWS ARN of the role assigned to the new DevEndpoint.
     */
    RoleArn?: RoleArn;
    /**
     * The address of the YARN endpoint used by this DevEndpoint.
     */
    YarnEndpointAddress?: GenericString;
    /**
     * The Apache Zeppelin port for the remote Apache Spark interpreter.
     */
    ZeppelinRemoteSparkInterpreterPort?: IntegerValue;
    /**
     * The number of AWS Glue Data Processing Units (DPUs) allocated to this DevEndpoint.
     */
    NumberOfNodes?: IntegerValue;
    /**
     * The AWS availability zone where this DevEndpoint is located.
     */
    AvailabilityZone?: GenericString;
    /**
     * The ID of the VPC used by this DevEndpoint.
     */
    VpcId?: GenericString;
    /**
     * Path(s) to one or more Python libraries in an S3 bucket that will be loaded in your DevEndpoint.
     */
    ExtraPythonLibsS3Path?: GenericString;
    /**
     * Path to one or more Java Jars in an S3 bucket that will be loaded in your DevEndpoint.
     */
    ExtraJarsS3Path?: GenericString;
    /**
     * The reason for a current failure in this DevEndpoint.
     */
    FailureReason?: GenericString;
    /**
     * The point in time at which this DevEndpoint was created.
     */
    CreatedTimestamp?: TimestampValue;
  }
  export interface CreateGrokClassifierRequest {
    /**
     * An identifier of the data format that the classifier matches, such as Twitter, JSON, Omniture logs, Amazon CloudWatch Logs, and so on.
     */
    Classification: Classification;
    /**
     * The name of the new classifier.
     */
    Name: NameString;
    /**
     * The grok pattern used by this classifier.
     */
    GrokPattern: GrokPattern;
    /**
     * Optional custom grok patterns used by this classifier.
     */
    CustomPatterns?: CustomPatterns;
  }
  export interface CreateJobRequest {
    /**
     * The name you assign to this job. It must be unique in your account.
     */
    Name: NameString;
    /**
     * Description of the job.
     */
    Description?: DescriptionString;
    /**
     * This field is reserved for future use.
     */
    LogUri?: UriString;
    /**
     * The name of the IAM role associated with this job.
     */
    Role: RoleString;
    /**
     * An ExecutionProperty specifying the maximum number of concurrent runs allowed for this job.
     */
    ExecutionProperty?: ExecutionProperty;
    /**
     * The JobCommand that executes this job.
     */
    Command: JobCommand;
    /**
     * The default arguments for this job. You can specify arguments here that your own job-execution script consumes, as well as arguments that AWS Glue itself consumes. For information about how to specify and consume your own Job arguments, see the Calling AWS Glue APIs in Python topic in the developer guide. For information about the key-value pairs that AWS Glue consumes to set up your job, see the Special Parameters Used by AWS Glue topic in the developer guide.
     */
    DefaultArguments?: GenericMap;
    /**
     * The connections used for this job.
     */
    Connections?: ConnectionsList;
    /**
     * The maximum number of times to retry this job if it fails.
     */
    MaxRetries?: MaxRetries;
    /**
     * The number of AWS Glue data processing units (DPUs) to allocate to this Job. From 2 to 100 DPUs can be allocated; the default is 10. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the AWS Glue pricing page.
     */
    AllocatedCapacity?: IntegerValue;
  }
  export interface CreateJobResponse {
    /**
     * The unique name that was provided.
     */
    Name?: NameString;
  }
  export interface CreatePartitionRequest {
    /**
     * The ID of the catalog in which the partion is to be created. Currently, this should be the AWS account ID.
     */
    CatalogId?: CatalogIdString;
    /**
     * The name of the metadata database in which the partition is to be created.
     */
    DatabaseName: NameString;
    /**
     * The name of the metadata table in which the partition is to be created.
     */
    TableName: NameString;
    /**
     * A PartitionInput structure defining the partition to be created.
     */
    PartitionInput: PartitionInput;
  }
  export interface CreatePartitionResponse {
  }
  export interface CreateScriptRequest {
    /**
     * A list of the nodes in the DAG.
     */
    DagNodes?: DagNodes;
    /**
     * A list of the edges in the DAG.
     */
    DagEdges?: DagEdges;
    /**
     * The programming language of the resulting code from the DAG.
     */
    Language?: Language;
  }
  export interface CreateScriptResponse {
    /**
     * The Python script generated from the DAG.
     */
    PythonScript?: PythonScript;
    /**
     * The Scala code generated from the DAG.
     */
    ScalaCode?: ScalaCode;
  }
  export interface CreateTableRequest {
    /**
     * The ID of the Data Catalog in which to create the Table. If none is supplied, the AWS account ID is used by default.
     */
    CatalogId?: CatalogIdString;
    /**
     * The catalog database in which to create the new table. For Hive compatibility, this name is entirely lowercase.
     */
    DatabaseName: NameString;
    /**
     * The TableInput object that defines the metadata table to create in the catalog.
     */
    TableInput: TableInput;
  }
  export interface CreateTableResponse {
  }
  export interface CreateTriggerRequest {
    /**
     * The name of the trigger.
     */
    Name: NameString;
    /**
     * The type of the new trigger.
     */
    Type: TriggerType;
    /**
     * A cron expression used to specify the schedule (see Time-Based Schedules for Jobs and Crawlers. For example, to run something every day at 12:15 UTC, you would specify: cron(15 12 * * ? *). This field is required when the trigger type is SCHEDULED.
     */
    Schedule?: GenericString;
    /**
     * A predicate to specify when the new trigger should fire. This field is required when the trigger type is CONDITIONAL.
     */
    Predicate?: Predicate;
    /**
     * The actions initiated by this trigger when it fires.
     */
    Actions: ActionList;
    /**
     * A description of the new trigger.
     */
    Description?: DescriptionString;
  }
  export interface CreateTriggerResponse {
    /**
     * The name of the trigger.
     */
    Name?: NameString;
  }
  export interface CreateUserDefinedFunctionRequest {
    /**
     * The ID of the Data Catalog in which to create the function. If none is supplied, the AWS account ID is used by default.
     */
    CatalogId?: CatalogIdString;
    /**
     * The name of the catalog database in which to create the function.
     */
    DatabaseName: NameString;
    /**
     * A FunctionInput object that defines the function to create in the Data Catalog.
     */
    FunctionInput: UserDefinedFunctionInput;
  }
  export interface CreateUserDefinedFunctionResponse {
  }
  export interface CreateXMLClassifierRequest {
    /**
     * An identifier of the data format that the classifier matches.
     */
    Classification: Classification;
    /**
     * The name of the classifier.
     */
    Name: NameString;
    /**
     * The XML tag designating the element that contains each record in an XML document being parsed. Note that this cannot identify a self-closing element (closed by /&gt;). An empty row element that contains only attributes can be parsed as long as it ends with a closing tag (for example, &lt;row item_a="A" item_b="B"&gt;&lt;/row&gt; is okay, but &lt;row item_a="A" item_b="B" /&gt; is not).
     */
    RowTag?: RowTag;
  }
  export type CronExpression = string;
  export type CustomPatterns = string;
  export type DagEdges = CodeGenEdge[];
  export type DagNodes = CodeGenNode[];
  export interface Database {
    /**
     * Name of the database. For Hive compatibility, this is folded to lowercase when it is stored.
     */
    Name: NameString;
    /**
     * Description of the database.
     */
    Description?: DescriptionString;
    /**
     * The location of the database (for example, an HDFS path).
     */
    LocationUri?: URI;
    /**
     * A list of key-value pairs that define parameters and properties of the database.
     */
    Parameters?: ParametersMap;
    /**
     * The time at which the metadata database was created in the catalog.
     */
    CreateTime?: Timestamp;
  }
  export interface DatabaseInput {
    /**
     * Name of the database. For Hive compatibility, this is folded to lowercase when it is stored.
     */
    Name: NameString;
    /**
     * Description of the database
     */
    Description?: DescriptionString;
    /**
     * The location of the database (for example, an HDFS path).
     */
    LocationUri?: URI;
    /**
     * A list of key-value pairs that define parameters and properties of the database.
     */
    Parameters?: ParametersMap;
  }
  export type DatabaseList = Database[];
  export type DatabaseName = string;
  export type DeleteBehavior = "LOG"|"DELETE_FROM_DATABASE"|"DEPRECATE_IN_DATABASE"|string;
  export interface DeleteClassifierRequest {
    /**
     * Name of the classifier to remove.
     */
    Name: NameString;
  }
  export interface DeleteClassifierResponse {
  }
  export type DeleteConnectionNameList = NameString[];
  export interface DeleteConnectionRequest {
    /**
     * The ID of the Data Catalog in which the connection resides. If none is supplied, the AWS account ID is used by default.
     */
    CatalogId?: CatalogIdString;
    /**
     * The name of the connection to delete.
     */
    ConnectionName: NameString;
  }
  export interface DeleteConnectionResponse {
  }
  export interface DeleteCrawlerRequest {
    /**
     * Name of the crawler to remove.
     */
    Name: NameString;
  }
  export interface DeleteCrawlerResponse {
  }
  export interface DeleteDatabaseRequest {
    /**
     * The ID of the Data Catalog in which the database resides. If none is supplied, the AWS account ID is used by default.
     */
    CatalogId?: CatalogIdString;
    /**
     * The name of the Database to delete. For Hive compatibility, this must be all lowercase.
     */
    Name: NameString;
  }
  export interface DeleteDatabaseResponse {
  }
  export interface DeleteDevEndpointRequest {
    /**
     * The name of the DevEndpoint.
     */
    EndpointName: GenericString;
  }
  export interface DeleteDevEndpointResponse {
  }
  export interface DeleteJobRequest {
    /**
     * The name of the job to delete.
     */
    JobName: NameString;
  }
  export interface DeleteJobResponse {
    /**
     * The name of the job that was deleted.
     */
    JobName?: NameString;
  }
  export interface DeletePartitionRequest {
    /**
     * The ID of the Data Catalog where the partition to be deleted resides. If none is supplied, the AWS account ID is used by default.
     */
    CatalogId?: CatalogIdString;
    /**
     * The name of the catalog database in which the table in question resides.
     */
    DatabaseName: NameString;
    /**
     * The name of the table where the partition to be deleted is located.
     */
    TableName: NameString;
    /**
     * The values that define the partition.
     */
    PartitionValues: ValueStringList;
  }
  export interface DeletePartitionResponse {
  }
  export interface DeleteTableRequest {
    /**
     * The ID of the Data Catalog where the table resides. If none is supplied, the AWS account ID is used by default.
     */
    CatalogId?: CatalogIdString;
    /**
     * The name of the catalog database in which the table resides. For Hive compatibility, this name is entirely lowercase.
     */
    DatabaseName: NameString;
    /**
     * The name of the table to be deleted. For Hive compatibility, this name is entirely lowercase.
     */
    Name: NameString;
  }
  export interface DeleteTableResponse {
  }
  export interface DeleteTableVersionRequest {
    /**
     * The ID of the Data Catalog where the tables reside. If none is supplied, the AWS account ID is used by default.
     */
    CatalogId?: CatalogIdString;
    /**
     * The database in the catalog in which the table resides. For Hive compatibility, this name is entirely lowercase.
     */
    DatabaseName: NameString;
    /**
     * The name of the table. For Hive compatibility, this name is entirely lowercase.
     */
    TableName: NameString;
    /**
     * The ID of the table version to be deleted.
     */
    VersionId: VersionString;
  }
  export interface DeleteTableVersionResponse {
  }
  export interface DeleteTriggerRequest {
    /**
     * The name of the trigger to delete.
     */
    Name: NameString;
  }
  export interface DeleteTriggerResponse {
    /**
     * The name of the trigger that was deleted.
     */
    Name?: NameString;
  }
  export interface DeleteUserDefinedFunctionRequest {
    /**
     * The ID of the Data Catalog where the function to be deleted is located. If none is supplied, the AWS account ID is used by default.
     */
    CatalogId?: CatalogIdString;
    /**
     * The name of the catalog database where the function is located.
     */
    DatabaseName: NameString;
    /**
     * The name of the function definition to be deleted.
     */
    FunctionName: NameString;
  }
  export interface DeleteUserDefinedFunctionResponse {
  }
  export type DescriptionString = string;
  export type DescriptionStringRemovable = string;
  export interface DevEndpoint {
    /**
     * The name of the DevEndpoint.
     */
    EndpointName?: GenericString;
    /**
     * The AWS ARN of the IAM role used in this DevEndpoint.
     */
    RoleArn?: RoleArn;
    /**
     * A list of security group identifiers used in this DevEndpoint.
     */
    SecurityGroupIds?: StringList;
    /**
     * The subnet ID for this DevEndpoint.
     */
    SubnetId?: GenericString;
    /**
     * The YARN endpoint address used by this DevEndpoint.
     */
    YarnEndpointAddress?: GenericString;
    /**
     * The Apache Zeppelin port for the remote Apache Spark interpreter.
     */
    ZeppelinRemoteSparkInterpreterPort?: IntegerValue;
    /**
     * The public address used by this DevEndpoint.
     */
    PublicAddress?: GenericString;
    /**
     * The current status of this DevEndpoint.
     */
    Status?: GenericString;
    /**
     * The number of AWS Glue Data Processing Units (DPUs) allocated to this DevEndpoint.
     */
    NumberOfNodes?: IntegerValue;
    /**
     * The AWS availability zone where this DevEndpoint is located.
     */
    AvailabilityZone?: GenericString;
    /**
     * The ID of the virtual private cloud (VPC) used by this DevEndpoint.
     */
    VpcId?: GenericString;
    /**
     * Path(s) to one or more Python libraries in an S3 bucket that should be loaded in your DevEndpoint. Multiple values must be complete paths separated by a comma. Please note that only pure Python libraries can currently be used on a DevEndpoint. Libraries that rely on C extensions, such as the pandas Python data analysis library, are not yet supported.
     */
    ExtraPythonLibsS3Path?: GenericString;
    /**
     * Path to one or more Java Jars in an S3 bucket that should be loaded in your DevEndpoint. Please note that only pure Java/Scala libraries can currently be used on a DevEndpoint.
     */
    ExtraJarsS3Path?: GenericString;
    /**
     * The reason for a current failure in this DevEndpoint.
     */
    FailureReason?: GenericString;
    /**
     * The status of the last update.
     */
    LastUpdateStatus?: GenericString;
    /**
     * The point in time at which this DevEndpoint was created.
     */
    CreatedTimestamp?: TimestampValue;
    /**
     * The point in time at which this DevEndpoint was last modified.
     */
    LastModifiedTimestamp?: TimestampValue;
    /**
     * The public key to be used by this DevEndpoint for authentication.
     */
    PublicKey?: GenericString;
  }
  export interface DevEndpointCustomLibraries {
    /**
     * Path(s) to one or more Python libraries in an S3 bucket that should be loaded in your DevEndpoint. Multiple values must be complete paths separated by a comma. Please note that only pure Python libraries can currently be used on a DevEndpoint. Libraries that rely on C extensions, such as the pandas Python data analysis library, are not yet supported.
     */
    ExtraPythonLibsS3Path?: GenericString;
    /**
     * Path to one or more Java Jars in an S3 bucket that should be loaded in your DevEndpoint. Please note that only pure Java/Scala libraries can currently be used on a DevEndpoint.
     */
    ExtraJarsS3Path?: GenericString;
  }
  export type DevEndpointList = DevEndpoint[];
  export type ErrorByName = {[key: string]: ErrorDetail};
  export interface ErrorDetail {
    /**
     * The code associated with this error.
     */
    ErrorCode?: NameString;
    /**
     * A message describing the error.
     */
    ErrorMessage?: DescriptionString;
  }
  export type ErrorString = string;
  export interface ExecutionProperty {
    /**
     * The maximum number of concurrent runs allowed for a job. The default is 1. An error is returned when this threshold is reached. The maximum value you can specify is controlled by a service limit.
     */
    MaxConcurrentRuns?: MaxConcurrentRuns;
  }
  export type FieldType = string;
  export type FilterString = string;
  export type FormatString = string;
  export type GenericMap = {[key: string]: GenericString};
  export type GenericString = string;
  export interface GetCatalogImportStatusRequest {
    /**
     * The ID of the catalog to migrate. Currently, this should be the AWS account ID.
     */
    CatalogId?: CatalogIdString;
  }
  export interface GetCatalogImportStatusResponse {
    /**
     * The status of the specified catalog migration.
     */
    ImportStatus?: CatalogImportStatus;
  }
  export interface GetClassifierRequest {
    /**
     * Name of the classifier to retrieve.
     */
    Name: NameString;
  }
  export interface GetClassifierResponse {
    /**
     * The requested classifier.
     */
    Classifier?: Classifier;
  }
  export interface GetClassifiersRequest {
    /**
     * Size of the list to return (optional).
     */
    MaxResults?: PageSize;
    /**
     * An optional continuation token.
     */
    NextToken?: Token;
  }
  export interface GetClassifiersResponse {
    /**
     * The requested list of classifier objects.
     */
    Classifiers?: ClassifierList;
    /**
     * A continuation token.
     */
    NextToken?: Token;
  }
  export interface GetConnectionRequest {
    /**
     * The ID of the Data Catalog in which the connection resides. If none is supplied, the AWS account ID is used by default.
     */
    CatalogId?: CatalogIdString;
    /**
     * The name of the connection definition to retrieve.
     */
    Name: NameString;
  }
  export interface GetConnectionResponse {
    /**
     * The requested connection definition.
     */
    Connection?: Connection;
  }
  export interface GetConnectionsFilter {
    /**
     * A criteria string that must match the criteria recorded in the connection definition for that connection definition to be returned.
     */
    MatchCriteria?: MatchCriteria;
    /**
     * The type of connections to return. Currently, only JDBC is supported; SFTP is not supported.
     */
    ConnectionType?: ConnectionType;
  }
  export interface GetConnectionsRequest {
    /**
     * The ID of the Data Catalog in which the connections reside. If none is supplied, the AWS account ID is used by default.
     */
    CatalogId?: CatalogIdString;
    /**
     * A filter that controls which connections will be returned.
     */
    Filter?: GetConnectionsFilter;
    /**
     * A continuation token, if this is a continuation call.
     */
    NextToken?: Token;
    /**
     * The maximum number of connections to return in one response.
     */
    MaxResults?: PageSize;
  }
  export interface GetConnectionsResponse {
    /**
     * A list of requested connection definitions.
     */
    ConnectionList?: ConnectionList;
    /**
     * A continuation token, if the list of connections returned does not include the last of the filtered connections.
     */
    NextToken?: Token;
  }
  export interface GetCrawlerMetricsRequest {
    /**
     * A list of the names of crawlers about which to retrieve metrics.
     */
    CrawlerNameList?: CrawlerNameList;
    /**
     * The maximum size of a list to return.
     */
    MaxResults?: PageSize;
    /**
     * A continuation token, if this is a continuation call.
     */
    NextToken?: Token;
  }
  export interface GetCrawlerMetricsResponse {
    /**
     * A list of metrics for the specified crawler.
     */
    CrawlerMetricsList?: CrawlerMetricsList;
    /**
     * A continuation token, if the returned list does not contain the last metric available.
     */
    NextToken?: Token;
  }
  export interface GetCrawlerRequest {
    /**
     * Name of the crawler to retrieve metadata for.
     */
    Name: NameString;
  }
  export interface GetCrawlerResponse {
    /**
     * The metadata for the specified crawler.
     */
    Crawler?: Crawler;
  }
  export interface GetCrawlersRequest {
    /**
     * The number of crawlers to return on each call.
     */
    MaxResults?: PageSize;
    /**
     * A continuation token, if this is a continuation request.
     */
    NextToken?: Token;
  }
  export interface GetCrawlersResponse {
    /**
     * A list of crawler metadata.
     */
    Crawlers?: CrawlerList;
    /**
     * A continuation token, if the returned list has not reached the end of those defined in this customer account.
     */
    NextToken?: Token;
  }
  export interface GetDatabaseRequest {
    /**
     * The ID of the Data Catalog in which the database resides. If none is supplied, the AWS account ID is used by default.
     */
    CatalogId?: CatalogIdString;
    /**
     * The name of the database to retrieve. For Hive compatibility, this should be all lowercase.
     */
    Name: NameString;
  }
  export interface GetDatabaseResponse {
    /**
     * The definition of the specified database in the catalog.
     */
    Database?: Database;
  }
  export interface GetDatabasesRequest {
    /**
     * The ID of the Data Catalog from which to retrieve Databases. If none is supplied, the AWS account ID is used by default.
     */
    CatalogId?: CatalogIdString;
    /**
     * A continuation token, if this is a continuation call.
     */
    NextToken?: Token;
    /**
     * The maximum number of databases to return in one response.
     */
    MaxResults?: PageSize;
  }
  export interface GetDatabasesResponse {
    /**
     * A list of Database objects from the specified catalog.
     */
    DatabaseList: DatabaseList;
    /**
     * A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.
     */
    NextToken?: Token;
  }
  export interface GetDataflowGraphRequest {
    /**
     * The Python script to transform.
     */
    PythonScript?: PythonScript;
  }
  export interface GetDataflowGraphResponse {
    /**
     * A list of the nodes in the resulting DAG.
     */
    DagNodes?: DagNodes;
    /**
     * A list of the edges in the resulting DAG.
     */
    DagEdges?: DagEdges;
  }
  export interface GetDevEndpointRequest {
    /**
     * Name of the DevEndpoint for which to retrieve information.
     */
    EndpointName: GenericString;
  }
  export interface GetDevEndpointResponse {
    /**
     * A DevEndpoint definition.
     */
    DevEndpoint?: DevEndpoint;
  }
  export interface GetDevEndpointsRequest {
    /**
     * The maximum size of information to return.
     */
    MaxResults?: PageSize;
    /**
     * A continuation token, if this is a continuation call.
     */
    NextToken?: GenericString;
  }
  export interface GetDevEndpointsResponse {
    /**
     * A list of DevEndpoint definitions.
     */
    DevEndpoints?: DevEndpointList;
    /**
     * A continuation token, if not all DevEndpoint definitions have yet been returned.
     */
    NextToken?: GenericString;
  }
  export interface GetJobRequest {
    /**
     * The name of the job to retrieve.
     */
    JobName: NameString;
  }
  export interface GetJobResponse {
    /**
     * The requested job definition.
     */
    Job?: Job;
  }
  export interface GetJobRunRequest {
    /**
     * Name of the job being run.
     */
    JobName: NameString;
    /**
     * The ID of the job run.
     */
    RunId: IdString;
    /**
     * True if a list of predecessor runs should be returned.
     */
    PredecessorsIncluded?: BooleanValue;
  }
  export interface GetJobRunResponse {
    /**
     * The requested job-run metadata.
     */
    JobRun?: JobRun;
  }
  export interface GetJobRunsRequest {
    /**
     * The name of the job for which to retrieve all job runs.
     */
    JobName: NameString;
    /**
     * A continuation token, if this is a continuation call.
     */
    NextToken?: GenericString;
    /**
     * The maximum size of the response.
     */
    MaxResults?: PageSize;
  }
  export interface GetJobRunsResponse {
    /**
     * A list of job-run metatdata objects.
     */
    JobRuns?: JobRunList;
    /**
     * A continuation token, if not all reequested job runs have been returned.
     */
    NextToken?: GenericString;
  }
  export interface GetJobsRequest {
    /**
     * A continuation token, if this is a continuation call.
     */
    NextToken?: GenericString;
    /**
     * The maximum size of the response.
     */
    MaxResults?: PageSize;
  }
  export interface GetJobsResponse {
    /**
     * A list of jobs.
     */
    Jobs?: JobList;
    /**
     * A continuation token, if not all jobs have yet been returned.
     */
    NextToken?: GenericString;
  }
  export interface GetMappingRequest {
    /**
     * Specifies the source table.
     */
    Source: CatalogEntry;
    /**
     * A list of target tables.
     */
    Sinks?: CatalogEntries;
    /**
     * Parameters for the mapping.
     */
    Location?: Location;
  }
  export interface GetMappingResponse {
    /**
     * A list of mappings to the specified targets.
     */
    Mapping: MappingList;
  }
  export interface GetPartitionRequest {
    /**
     * The ID of the Data Catalog where the partition in question resides. If none is supplied, the AWS account ID is used by default.
     */
    CatalogId?: CatalogIdString;
    /**
     * The name of the catalog database where the partition resides.
     */
    DatabaseName: NameString;
    /**
     * The name of the partition's table.
     */
    TableName: NameString;
    /**
     * The values that define the partition.
     */
    PartitionValues: ValueStringList;
  }
  export interface GetPartitionResponse {
    /**
     * The requested information, in the form of a Partition object.
     */
    Partition?: Partition;
  }
  export interface GetPartitionsRequest {
    /**
     * The ID of the Data Catalog where the partitions in question reside. If none is supplied, the AWS account ID is used by default.
     */
    CatalogId?: CatalogIdString;
    /**
     * The name of the catalog database where the partitions reside.
     */
    DatabaseName: NameString;
    /**
     * The name of the partitions' table.
     */
    TableName: NameString;
    /**
     * An expression filtering the partitions to be returned.
     */
    Expression?: PredicateString;
    /**
     * A continuation token, if this is not the first call to retrieve these partitions.
     */
    NextToken?: Token;
    /**
     * The segment of the table's partitions to scan in this request.
     */
    Segment?: Segment;
    /**
     * The maximum number of partitions to return in a single response.
     */
    MaxResults?: PageSize;
  }
  export interface GetPartitionsResponse {
    /**
     * A list of requested partitions.
     */
    Partitions?: PartitionList;
    /**
     * A continuation token, if the returned list of partitions does not does not include the last one.
     */
    NextToken?: Token;
  }
  export interface GetPlanRequest {
    /**
     * The list of mappings from a source table to target tables.
     */
    Mapping: MappingList;
    /**
     * The source table.
     */
    Source: CatalogEntry;
    /**
     * The target tables.
     */
    Sinks?: CatalogEntries;
    /**
     * Parameters for the mapping.
     */
    Location?: Location;
    /**
     * The programming language of the code to perform the mapping.
     */
    Language?: Language;
  }
  export interface GetPlanResponse {
    /**
     * A Python script to perform the mapping.
     */
    PythonScript?: PythonScript;
    /**
     * Scala code to perform the mapping.
     */
    ScalaCode?: ScalaCode;
  }
  export interface GetTableRequest {
    /**
     * The ID of the Data Catalog where the table resides. If none is supplied, the AWS account ID is used by default.
     */
    CatalogId?: CatalogIdString;
    /**
     * The name of the database in the catalog in which the table resides. For Hive compatibility, this name is entirely lowercase.
     */
    DatabaseName: NameString;
    /**
     * The name of the table for which to retrieve the definition. For Hive compatibility, this name is entirely lowercase.
     */
    Name: NameString;
  }
  export interface GetTableResponse {
    /**
     * The Table object that defines the specified table.
     */
    Table?: Table;
  }
  export interface GetTableVersionRequest {
    /**
     * The ID of the Data Catalog where the tables reside. If none is supplied, the AWS account ID is used by default.
     */
    CatalogId?: CatalogIdString;
    /**
     * The database in the catalog in which the table resides. For Hive compatibility, this name is entirely lowercase.
     */
    DatabaseName: NameString;
    /**
     * The name of the table. For Hive compatibility, this name is entirely lowercase.
     */
    TableName: NameString;
    /**
     * The ID value of the table version to be retrieved.
     */
    VersionId?: VersionString;
  }
  export interface GetTableVersionResponse {
    /**
     * The requested table version.
     */
    TableVersion?: TableVersion;
  }
  export type GetTableVersionsList = TableVersion[];
  export interface GetTableVersionsRequest {
    /**
     * The ID of the Data Catalog where the tables reside. If none is supplied, the AWS account ID is used by default.
     */
    CatalogId?: CatalogIdString;
    /**
     * The database in the catalog in which the table resides. For Hive compatibility, this name is entirely lowercase.
     */
    DatabaseName: NameString;
    /**
     * The name of the table. For Hive compatibility, this name is entirely lowercase.
     */
    TableName: NameString;
    /**
     * A continuation token, if this is not the first call.
     */
    NextToken?: Token;
    /**
     * The maximum number of table versions to return in one response.
     */
    MaxResults?: PageSize;
  }
  export interface GetTableVersionsResponse {
    /**
     * A list of strings identifying available versions of the specified table.
     */
    TableVersions?: GetTableVersionsList;
    /**
     * A continuation token, if the list of available versions does not include the last one.
     */
    NextToken?: Token;
  }
  export interface GetTablesRequest {
    /**
     * The ID of the Data Catalog where the tables reside. If none is supplied, the AWS account ID is used by default.
     */
    CatalogId?: CatalogIdString;
    /**
     * The database in the catalog whose tables to list. For Hive compatibility, this name is entirely lowercase.
     */
    DatabaseName: NameString;
    /**
     * A regular expression pattern. If present, only those tables whose names match the pattern are returned.
     */
    Expression?: FilterString;
    /**
     * A continuation token, included if this is a continuation call.
     */
    NextToken?: Token;
    /**
     * The maximum number of tables to return in a single response.
     */
    MaxResults?: PageSize;
  }
  export interface GetTablesResponse {
    /**
     * A list of the requested Table objects.
     */
    TableList?: TableList;
    /**
     * A continuation token, present if the current list segment is not the last.
     */
    NextToken?: Token;
  }
  export interface GetTriggerRequest {
    /**
     * The name of the trigger to retrieve.
     */
    Name: NameString;
  }
  export interface GetTriggerResponse {
    /**
     * The requested trigger definition.
     */
    Trigger?: Trigger;
  }
  export interface GetTriggersRequest {
    /**
     * A continuation token, if this is a continuation call.
     */
    NextToken?: GenericString;
    /**
     * The name of the job for which to retrieve triggers. The trigger that can start this job will be returned, and if there is no such trigger, all triggers will be returned.
     */
    DependentJobName?: NameString;
    /**
     * The maximum size of the response.
     */
    MaxResults?: PageSize;
  }
  export interface GetTriggersResponse {
    /**
     * A list of triggers for the specified job.
     */
    Triggers?: TriggerList;
    /**
     * A continuation token, if not all the requested triggers have yet been returned.
     */
    NextToken?: GenericString;
  }
  export interface GetUserDefinedFunctionRequest {
    /**
     * The ID of the Data Catalog where the function to be retrieved is located. If none is supplied, the AWS account ID is used by default.
     */
    CatalogId?: CatalogIdString;
    /**
     * The name of the catalog database where the function is located.
     */
    DatabaseName: NameString;
    /**
     * The name of the function.
     */
    FunctionName: NameString;
  }
  export interface GetUserDefinedFunctionResponse {
    /**
     * The requested function definition.
     */
    UserDefinedFunction?: UserDefinedFunction;
  }
  export interface GetUserDefinedFunctionsRequest {
    /**
     * The ID of the Data Catalog where the functions to be retrieved are located. If none is supplied, the AWS account ID is used by default.
     */
    CatalogId?: CatalogIdString;
    /**
     * The name of the catalog database where the functions are located.
     */
    DatabaseName: NameString;
    /**
     * An optional function-name pattern string that filters the function definitions returned.
     */
    Pattern: NameString;
    /**
     * A continuation token, if this is a continuation call.
     */
    NextToken?: Token;
    /**
     * The maximum number of functions to return in one response.
     */
    MaxResults?: PageSize;
  }
  export interface GetUserDefinedFunctionsResponse {
    /**
     * A list of requested function definitions.
     */
    UserDefinedFunctions?: UserDefinedFunctionList;
    /**
     * A continuation token, if the list of functions returned does not include the last requested function.
     */
    NextToken?: Token;
  }
  export interface GrokClassifier {
    /**
     * The name of the classifier.
     */
    Name: NameString;
    /**
     * An identifier of the data format that the classifier matches, such as Twitter, JSON, Omniture logs, and so on.
     */
    Classification: Classification;
    /**
     * The time this classifier was registered.
     */
    CreationTime?: Timestamp;
    /**
     * The time this classifier was last updated.
     */
    LastUpdated?: Timestamp;
    /**
     * The version of this classifier.
     */
    Version?: VersionId;
    /**
     * The grok pattern applied to a data store by this classifier. For more information, see built-in patterns in Writing Custom Classifers.
     */
    GrokPattern: GrokPattern;
    /**
     * Optional custom grok patterns defined by this classifier. For more information, see custom patterns in Writing Custom Classifers.
     */
    CustomPatterns?: CustomPatterns;
  }
  export type GrokPattern = string;
  export type IdString = string;
  export interface ImportCatalogToGlueRequest {
    /**
     * The ID of the catalog to import. Currently, this should be the AWS account ID.
     */
    CatalogId?: CatalogIdString;
  }
  export interface ImportCatalogToGlueResponse {
  }
  export type Integer = number;
  export type IntegerFlag = number;
  export type IntegerValue = number;
  export interface JdbcTarget {
    /**
     * The name of the connection to use to connect to the JDBC target.
     */
    ConnectionName?: ConnectionName;
    /**
     * The path of the JDBC target.
     */
    Path?: Path;
    /**
     * A list of glob patterns used to exclude from the crawl. For more information, see Catalog Tables with a Crawler.
     */
    Exclusions?: PathList;
  }
  export type JdbcTargetList = JdbcTarget[];
  export interface Job {
    /**
     * The name you assign to this job.
     */
    Name?: NameString;
    /**
     * Description of this job.
     */
    Description?: DescriptionString;
    /**
     * This field is reserved for future use.
     */
    LogUri?: UriString;
    /**
     * The name of the IAM role associated with this job.
     */
    Role?: RoleString;
    /**
     * The time and date that this job specification was created.
     */
    CreatedOn?: TimestampValue;
    /**
     * The last point in time when this job specification was modified.
     */
    LastModifiedOn?: TimestampValue;
    /**
     * An ExecutionProperty specifying the maximum number of concurrent runs allowed for this job.
     */
    ExecutionProperty?: ExecutionProperty;
    /**
     * The JobCommand that executes this job.
     */
    Command?: JobCommand;
    /**
     * The default arguments for this job, specified as name-value pairs. You can specify arguments here that your own job-execution script consumes, as well as arguments that AWS Glue itself consumes. For information about how to specify and consume your own Job arguments, see the Calling AWS Glue APIs in Python topic in the developer guide. For information about the key-value pairs that AWS Glue consumes to set up your job, see the Special Parameters Used by AWS Glue topic in the developer guide.
     */
    DefaultArguments?: GenericMap;
    /**
     * The connections used for this job.
     */
    Connections?: ConnectionsList;
    /**
     * The maximum number of times to retry this job if it fails.
     */
    MaxRetries?: MaxRetries;
    /**
     * The number of AWS Glue data processing units (DPUs) allocated to this Job. From 2 to 100 DPUs can be allocated; the default is 10. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the AWS Glue pricing page.
     */
    AllocatedCapacity?: IntegerValue;
  }
  export interface JobBookmarkEntry {
    /**
     * Name of the job in question.
     */
    JobName?: JobName;
    /**
     * Version of the job.
     */
    Version?: IntegerValue;
    /**
     * The run ID number.
     */
    Run?: IntegerValue;
    /**
     * The attempt ID number.
     */
    Attempt?: IntegerValue;
    /**
     * The bookmark itself.
     */
    JobBookmark?: JsonValue;
  }
  export interface JobCommand {
    /**
     * The name of the job command: this must be glueetl.
     */
    Name?: GenericString;
    /**
     * Specifies the S3 path to a script that executes a job (required).
     */
    ScriptLocation?: ScriptLocationString;
  }
  export type JobList = Job[];
  export type JobName = string;
  export interface JobRun {
    /**
     * The ID of this job run.
     */
    Id?: IdString;
    /**
     * The number of the attempt to run this job.
     */
    Attempt?: AttemptCount;
    /**
     * The ID of the previous run of this job. For example, the JobRunId specified in the StartJobRun action.
     */
    PreviousRunId?: IdString;
    /**
     * The name of the trigger that started this job run.
     */
    TriggerName?: NameString;
    /**
     * The name of the job being run.
     */
    JobName?: NameString;
    /**
     * The date and time at which this job run was started.
     */
    StartedOn?: TimestampValue;
    /**
     * The last time this job run was modified.
     */
    LastModifiedOn?: TimestampValue;
    /**
     * The date and time this job run completed.
     */
    CompletedOn?: TimestampValue;
    /**
     * The current state of the job run.
     */
    JobRunState?: JobRunState;
    /**
     * The job arguments associated with this run. These override equivalent default arguments set for the job. You can specify arguments here that your own job-execution script consumes, as well as arguments that AWS Glue itself consumes. For information about how to specify and consume your own job arguments, see the Calling AWS Glue APIs in Python topic in the developer guide. For information about the key-value pairs that AWS Glue consumes to set up your job, see the Special Parameters Used by AWS Glue topic in the developer guide.
     */
    Arguments?: GenericMap;
    /**
     * An error message associated with this job run.
     */
    ErrorMessage?: ErrorString;
    /**
     * A list of predecessors to this job run.
     */
    PredecessorRuns?: PredecessorList;
    /**
     * The number of AWS Glue data processing units (DPUs) allocated to this JobRun. From 2 to 100 DPUs can be allocated; the default is 10. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the AWS Glue pricing page.
     */
    AllocatedCapacity?: IntegerValue;
  }
  export type JobRunList = JobRun[];
  export type JobRunState = "STARTING"|"RUNNING"|"STOPPING"|"STOPPED"|"SUCCEEDED"|"FAILED"|string;
  export interface JobUpdate {
    /**
     * Description of the job.
     */
    Description?: DescriptionString;
    /**
     * This field is reserved for future use.
     */
    LogUri?: UriString;
    /**
     * The name of the IAM role associated with this job (required).
     */
    Role?: RoleString;
    /**
     * An ExecutionProperty specifying the maximum number of concurrent runs allowed for this job.
     */
    ExecutionProperty?: ExecutionProperty;
    /**
     * The JobCommand that executes this job (required).
     */
    Command?: JobCommand;
    /**
     * The default arguments for this job. You can specify arguments here that your own job-execution script consumes, as well as arguments that AWS Glue itself consumes. For information about how to specify and consume your own Job arguments, see the Calling AWS Glue APIs in Python topic in the developer guide. For information about the key-value pairs that AWS Glue consumes to set up your job, see the Special Parameters Used by AWS Glue topic in the developer guide.
     */
    DefaultArguments?: GenericMap;
    /**
     * The connections used for this job.
     */
    Connections?: ConnectionsList;
    /**
     * The maximum number of times to retry this job if it fails.
     */
    MaxRetries?: MaxRetries;
    /**
     * The number of AWS Glue data processing units (DPUs) to allocate to this Job. From 2 to 100 DPUs can be allocated; the default is 10. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the AWS Glue pricing page.
     */
    AllocatedCapacity?: IntegerValue;
  }
  export type JsonValue = string;
  export type KeyString = string;
  export type Language = "PYTHON"|"SCALA"|string;
  export interface LastCrawlInfo {
    /**
     * Status of the last crawl.
     */
    Status?: LastCrawlStatus;
    /**
     * If an error occurred, the error information about the last crawl.
     */
    ErrorMessage?: DescriptionString;
    /**
     * The log group for the last crawl.
     */
    LogGroup?: LogGroup;
    /**
     * The log stream for the last crawl.
     */
    LogStream?: LogStream;
    /**
     * The prefix for a message about this crawl.
     */
    MessagePrefix?: MessagePrefix;
    /**
     * The time at which the crawl started.
     */
    StartTime?: Timestamp;
  }
  export type LastCrawlStatus = "SUCCEEDED"|"CANCELLED"|"FAILED"|string;
  export interface Location {
    /**
     * A JDBC location.
     */
    Jdbc?: CodeGenNodeArgs;
    /**
     * An Amazon S3 location.
     */
    S3?: CodeGenNodeArgs;
  }
  export type LocationMap = {[key: string]: ColumnValuesString};
  export type LocationString = string;
  export type LogGroup = string;
  export type LogStream = string;
  export type Logical = "AND"|"ANY"|string;
  export type LogicalOperator = "EQUALS"|string;
  export interface MappingEntry {
    /**
     * The name of the source table.
     */
    SourceTable?: TableName;
    /**
     * The source path.
     */
    SourcePath?: SchemaPathString;
    /**
     * The source type.
     */
    SourceType?: FieldType;
    /**
     * The target table.
     */
    TargetTable?: TableName;
    /**
     * The target path.
     */
    TargetPath?: SchemaPathString;
    /**
     * The target type.
     */
    TargetType?: FieldType;
  }
  export type MappingList = MappingEntry[];
  export type MatchCriteria = NameString[];
  export type MaxConcurrentRuns = number;
  export type MaxRetries = number;
  export type MessagePrefix = string;
  export type MessageString = string;
  export type MillisecondsCount = number;
  export type NameString = string;
  export type NameStringList = NameString[];
  export type NonNegativeDouble = number;
  export type NonNegativeInteger = number;
  export interface Order {
    /**
     * The name of the column.
     */
    Column: NameString;
    /**
     * Indicates that the column is sorted in ascending order (== 1), or in descending order (==0).
     */
    SortOrder: IntegerFlag;
  }
  export type OrderList = Order[];
  export type PageSize = number;
  export type ParametersMap = {[key: string]: ParametersMapValue};
  export type ParametersMapValue = string;
  export interface Partition {
    /**
     * The values of the partition.
     */
    Values?: ValueStringList;
    /**
     * The name of the catalog database where the table in question is located.
     */
    DatabaseName?: NameString;
    /**
     * The name of the table in question.
     */
    TableName?: NameString;
    /**
     * The time at which the partition was created.
     */
    CreationTime?: Timestamp;
    /**
     * The last time at which the partition was accessed.
     */
    LastAccessTime?: Timestamp;
    /**
     * Provides information about the physical location where the partition is stored.
     */
    StorageDescriptor?: StorageDescriptor;
    /**
     * Partition parameters, in the form of a list of key-value pairs.
     */
    Parameters?: ParametersMap;
    /**
     * The last time at which column statistics were computed for this partition.
     */
    LastAnalyzedTime?: Timestamp;
  }
  export interface PartitionError {
    /**
     * The values that define the partition.
     */
    PartitionValues?: ValueStringList;
    /**
     * Details about the partition error.
     */
    ErrorDetail?: ErrorDetail;
  }
  export type PartitionErrors = PartitionError[];
  export interface PartitionInput {
    /**
     * The values of the partition.
     */
    Values?: ValueStringList;
    /**
     * The last time at which the partition was accessed.
     */
    LastAccessTime?: Timestamp;
    /**
     * Provides information about the physical location where the partition is stored.
     */
    StorageDescriptor?: StorageDescriptor;
    /**
     * Partition parameters, in the form of a list of key-value pairs.
     */
    Parameters?: ParametersMap;
    /**
     * The last time at which column statistics were computed for this partition.
     */
    LastAnalyzedTime?: Timestamp;
  }
  export type PartitionInputList = PartitionInput[];
  export type PartitionList = Partition[];
  export interface PartitionValueList {
    /**
     * The list of values.
     */
    Values: ValueStringList;
  }
  export type Path = string;
  export type PathList = Path[];
  export interface PhysicalConnectionRequirements {
    /**
     * The subnet ID used by the connection.
     */
    SubnetId?: NameString;
    /**
     * The security group ID list used by the connection.
     */
    SecurityGroupIdList?: SecurityGroupIdList;
    /**
     * The connection's availability zone. This field is deprecated and has no effect.
     */
    AvailabilityZone?: NameString;
  }
  export interface Predecessor {
    /**
     * The name of the predecessor job.
     */
    JobName?: NameString;
    /**
     * The job-run ID of the predecessor job run.
     */
    RunId?: IdString;
  }
  export type PredecessorList = Predecessor[];
  export interface Predicate {
    /**
     * Currently "OR" is not supported.
     */
    Logical?: Logical;
    /**
     * A list of the conditions that determine when the trigger will fire.
     */
    Conditions?: ConditionList;
  }
  export type PredicateString = string;
  export type PrincipalType = "USER"|"ROLE"|"GROUP"|string;
  export type PythonScript = string;
  export interface ResetJobBookmarkRequest {
    /**
     * The name of the job in question.
     */
    JobName: JobName;
  }
  export interface ResetJobBookmarkResponse {
    /**
     * The reset bookmark entry.
     */
    JobBookmarkEntry?: JobBookmarkEntry;
  }
  export type ResourceType = "JAR"|"FILE"|"ARCHIVE"|string;
  export interface ResourceUri {
    /**
     * The type of the resource.
     */
    ResourceType?: ResourceType;
    /**
     * The URI for accessing the resource.
     */
    Uri?: URI;
  }
  export type ResourceUriList = ResourceUri[];
  export type Role = string;
  export type RoleArn = string;
  export type RoleString = string;
  export type RowTag = string;
  export interface S3Target {
    /**
     * The path to the Amazon S3 target.
     */
    Path?: Path;
    /**
     * A list of glob patterns used to exclude from the crawl. For more information, see Catalog Tables with a Crawler.
     */
    Exclusions?: PathList;
  }
  export type S3TargetList = S3Target[];
  export type ScalaCode = string;
  export interface Schedule {
    /**
     * A cron expression used to specify the schedule (see Time-Based Schedules for Jobs and Crawlers. For example, to run something every day at 12:15 UTC, you would specify: cron(15 12 * * ? *).
     */
    ScheduleExpression?: CronExpression;
    /**
     * The state of the schedule.
     */
    State?: ScheduleState;
  }
  export type ScheduleState = "SCHEDULED"|"NOT_SCHEDULED"|"TRANSITIONING"|string;
  export interface SchemaChangePolicy {
    /**
     * The update behavior when the crawler finds a changed schema.
     */
    UpdateBehavior?: UpdateBehavior;
    /**
     * The deletion behavior when the crawler finds a deleted object.
     */
    DeleteBehavior?: DeleteBehavior;
  }
  export type SchemaPathString = string;
  export type ScriptLocationString = string;
  export type SecurityGroupIdList = NameString[];
  export interface Segment {
    /**
     * The zero-based index number of the this segment. For example, if the total number of segments is 4, SegmentNumber values will range from zero through three.
     */
    SegmentNumber: NonNegativeInteger;
    /**
     * The total numer of segments.
     */
    TotalSegments: TotalSegmentsInteger;
  }
  export interface SerDeInfo {
    /**
     * Name of the SerDe.
     */
    Name?: NameString;
    /**
     * Usually the class that implements the SerDe. An example is: org.apache.hadoop.hive.serde2.columnar.ColumnarSerDe.
     */
    SerializationLibrary?: NameString;
    /**
     * A list of initialization parameters for the SerDe, in key-value form.
     */
    Parameters?: ParametersMap;
  }
  export interface SkewedInfo {
    /**
     * A list of names of columns that contain skewed values.
     */
    SkewedColumnNames?: NameStringList;
    /**
     * A list of values that appear so frequently as to be considered skewed.
     */
    SkewedColumnValues?: ColumnValueStringList;
    /**
     * A mapping of skewed values to the columns that contain them.
     */
    SkewedColumnValueLocationMaps?: LocationMap;
  }
  export interface StartCrawlerRequest {
    /**
     * Name of the crawler to start.
     */
    Name: NameString;
  }
  export interface StartCrawlerResponse {
  }
  export interface StartCrawlerScheduleRequest {
    /**
     * Name of the crawler to schedule.
     */
    CrawlerName: NameString;
  }
  export interface StartCrawlerScheduleResponse {
  }
  export interface StartJobRunRequest {
    /**
     * The name of the job to start.
     */
    JobName: NameString;
    /**
     * The ID of a previous JobRun to retry.
     */
    JobRunId?: IdString;
    /**
     * The job arguments specifically for this run. They override the equivalent default arguments set for the job itself. You can specify arguments here that your own job-execution script consumes, as well as arguments that AWS Glue itself consumes. For information about how to specify and consume your own Job arguments, see the Calling AWS Glue APIs in Python topic in the developer guide. For information about the key-value pairs that AWS Glue consumes to set up your job, see the Special Parameters Used by AWS Glue topic in the developer guide.
     */
    Arguments?: GenericMap;
    /**
     * The number of AWS Glue data processing units (DPUs) to allocate to this JobRun. From 2 to 100 DPUs can be allocated; the default is 10. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the AWS Glue pricing page.
     */
    AllocatedCapacity?: IntegerValue;
  }
  export interface StartJobRunResponse {
    /**
     * The ID assigned to this job run.
     */
    JobRunId?: IdString;
  }
  export interface StartTriggerRequest {
    /**
     * The name of the trigger to start.
     */
    Name: NameString;
  }
  export interface StartTriggerResponse {
    /**
     * The name of the trigger that was started.
     */
    Name?: NameString;
  }
  export interface StopCrawlerRequest {
    /**
     * Name of the crawler to stop.
     */
    Name: NameString;
  }
  export interface StopCrawlerResponse {
  }
  export interface StopCrawlerScheduleRequest {
    /**
     * Name of the crawler whose schedule state to set.
     */
    CrawlerName: NameString;
  }
  export interface StopCrawlerScheduleResponse {
  }
  export interface StopTriggerRequest {
    /**
     * The name of the trigger to stop.
     */
    Name: NameString;
  }
  export interface StopTriggerResponse {
    /**
     * The name of the trigger that was stopped.
     */
    Name?: NameString;
  }
  export interface StorageDescriptor {
    /**
     * A list of the Columns in the table.
     */
    Columns?: ColumnList;
    /**
     * The physical location of the table. By default this takes the form of the warehouse location, followed by the database location in the warehouse, followed by the table name.
     */
    Location?: LocationString;
    /**
     * The input format: SequenceFileInputFormat (binary), or TextInputFormat, or a custom format.
     */
    InputFormat?: FormatString;
    /**
     * The output format: SequenceFileOutputFormat (binary), or IgnoreKeyTextOutputFormat, or a custom format.
     */
    OutputFormat?: FormatString;
    /**
     * True if the data in the table is compressed, or False if not.
     */
    Compressed?: Boolean;
    /**
     * Must be specified if the table contains any dimension columns.
     */
    NumberOfBuckets?: Integer;
    /**
     * Serialization/deserialization (SerDe) information.
     */
    SerdeInfo?: SerDeInfo;
    /**
     * A list of reducer grouping columns, clustering columns, and bucketing columns in the table.
     */
    BucketColumns?: NameStringList;
    /**
     * A list specifying the sort order of each bucket in the table.
     */
    SortColumns?: OrderList;
    /**
     * User-supplied properties in key-value form.
     */
    Parameters?: ParametersMap;
    /**
     * Information about values that appear very frequently in a column (skewed values).
     */
    SkewedInfo?: SkewedInfo;
    /**
     * True if the table data is stored in subdirectories, or False if not.
     */
    StoredAsSubDirectories?: Boolean;
  }
  export type StringList = GenericString[];
  export interface Table {
    /**
     * Name of the table. For Hive compatibility, this must be entirely lowercase.
     */
    Name: NameString;
    /**
     * Name of the metadata database where the table metadata resides. For Hive compatibility, this must be all lowercase.
     */
    DatabaseName?: NameString;
    /**
     * Description of the table.
     */
    Description?: DescriptionString;
    /**
     * Owner of the table.
     */
    Owner?: NameString;
    /**
     * Time when the table definition was created in the Data Catalog.
     */
    CreateTime?: Timestamp;
    /**
     * Last time the table was updated.
     */
    UpdateTime?: Timestamp;
    /**
     * Last time the table was accessed. This is usually taken from HDFS, and may not be reliable.
     */
    LastAccessTime?: Timestamp;
    /**
     * Last time column statistics were computed for this table.
     */
    LastAnalyzedTime?: Timestamp;
    /**
     * Retention time for this table.
     */
    Retention?: NonNegativeInteger;
    /**
     * A storage descriptor containing information about the physical storage of this table.
     */
    StorageDescriptor?: StorageDescriptor;
    /**
     * A list of columns by which the table is partitioned. Only primitive types are supported as partition keys.
     */
    PartitionKeys?: ColumnList;
    /**
     * If the table is a view, the original text of the view; otherwise null.
     */
    ViewOriginalText?: ViewTextString;
    /**
     * If the table is a view, the expanded text of the view; otherwise null.
     */
    ViewExpandedText?: ViewTextString;
    /**
     * The type of this table (EXTERNAL_TABLE, VIRTUAL_VIEW, etc.).
     */
    TableType?: TableTypeString;
    /**
     * Properties associated with this table, as a list of key-value pairs.
     */
    Parameters?: ParametersMap;
    /**
     * Person or entity who created the table.
     */
    CreatedBy?: NameString;
  }
  export interface TableError {
    /**
     * Name of the table. For Hive compatibility, this must be entirely lowercase.
     */
    TableName?: NameString;
    /**
     * Detail about the error.
     */
    ErrorDetail?: ErrorDetail;
  }
  export type TableErrors = TableError[];
  export interface TableInput {
    /**
     * Name of the table. For Hive compatibility, this is folded to lowercase when it is stored.
     */
    Name: NameString;
    /**
     * Description of the table.
     */
    Description?: DescriptionString;
    /**
     * Owner of the table.
     */
    Owner?: NameString;
    /**
     * Last time the table was accessed.
     */
    LastAccessTime?: Timestamp;
    /**
     * Last time column statistics were computed for this table.
     */
    LastAnalyzedTime?: Timestamp;
    /**
     * Retention time for this table.
     */
    Retention?: NonNegativeInteger;
    /**
     * A storage descriptor containing information about the physical storage of this table.
     */
    StorageDescriptor?: StorageDescriptor;
    /**
     * A list of columns by which the table is partitioned. Only primitive types are supported as partition keys.
     */
    PartitionKeys?: ColumnList;
    /**
     * If the table is a view, the original text of the view; otherwise null.
     */
    ViewOriginalText?: ViewTextString;
    /**
     * If the table is a view, the expanded text of the view; otherwise null.
     */
    ViewExpandedText?: ViewTextString;
    /**
     * The type of this table (EXTERNAL_TABLE, VIRTUAL_VIEW, etc.).
     */
    TableType?: TableTypeString;
    /**
     * Properties associated with this table, as a list of key-value pairs.
     */
    Parameters?: ParametersMap;
  }
  export type TableList = Table[];
  export type TableName = string;
  export type TablePrefix = string;
  export type TableTypeString = string;
  export interface TableVersion {
    /**
     * The table in question
     */
    Table?: Table;
    /**
     * The ID value that identifies this table version.
     */
    VersionId?: VersionString;
  }
  export interface TableVersionError {
    /**
     * The name of the table in question.
     */
    TableName?: NameString;
    /**
     * The ID value of the version in question.
     */
    VersionId?: VersionString;
    /**
     * Detail about the error.
     */
    ErrorDetail?: ErrorDetail;
  }
  export type TableVersionErrors = TableVersionError[];
  export type Timestamp = Date;
  export type TimestampValue = Date;
  export type Token = string;
  export type TotalSegmentsInteger = number;
  export interface Trigger {
    /**
     * Name of the trigger.
     */
    Name?: NameString;
    /**
     * Reserved for future use.
     */
    Id?: IdString;
    /**
     * The type of trigger that this is.
     */
    Type?: TriggerType;
    /**
     * The current state of the trigger.
     */
    State?: TriggerState;
    /**
     * A description of this trigger.
     */
    Description?: DescriptionString;
    /**
     * A cron expression used to specify the schedule (see Time-Based Schedules for Jobs and Crawlers. For example, to run something every day at 12:15 UTC, you would specify: cron(15 12 * * ? *).
     */
    Schedule?: GenericString;
    /**
     * The actions initiated by this trigger.
     */
    Actions?: ActionList;
    /**
     * The predicate of this trigger, which defines when it will fire.
     */
    Predicate?: Predicate;
  }
  export type TriggerList = Trigger[];
  export type TriggerState = "CREATING"|"CREATED"|"ACTIVATING"|"ACTIVATED"|"DEACTIVATING"|"DEACTIVATED"|"DELETING"|"UPDATING"|string;
  export type TriggerType = "SCHEDULED"|"CONDITIONAL"|"ON_DEMAND"|string;
  export interface TriggerUpdate {
    /**
     * Reserved for future use.
     */
    Name?: NameString;
    /**
     * A description of this trigger.
     */
    Description?: DescriptionString;
    /**
     * A cron expression used to specify the schedule (see Time-Based Schedules for Jobs and Crawlers. For example, to run something every day at 12:15 UTC, you would specify: cron(15 12 * * ? *).
     */
    Schedule?: GenericString;
    /**
     * The actions initiated by this trigger.
     */
    Actions?: ActionList;
    /**
     * The predicate of this trigger, which defines when it will fire.
     */
    Predicate?: Predicate;
  }
  export type URI = string;
  export type UpdateBehavior = "LOG"|"UPDATE_IN_DATABASE"|string;
  export interface UpdateClassifierRequest {
    /**
     * A GrokClassifier object with updated fields.
     */
    GrokClassifier?: UpdateGrokClassifierRequest;
    /**
     * An XMLClassifier object with updated fields.
     */
    XMLClassifier?: UpdateXMLClassifierRequest;
  }
  export interface UpdateClassifierResponse {
  }
  export interface UpdateConnectionRequest {
    /**
     * The ID of the Data Catalog in which the connection resides. If none is supplied, the AWS account ID is used by default.
     */
    CatalogId?: CatalogIdString;
    /**
     * The name of the connection definition to update.
     */
    Name: NameString;
    /**
     * A ConnectionInput object that redefines the connection in question.
     */
    ConnectionInput: ConnectionInput;
  }
  export interface UpdateConnectionResponse {
  }
  export interface UpdateCrawlerRequest {
    /**
     * Name of the new crawler.
     */
    Name: NameString;
    /**
     * The IAM role (or ARN of an IAM role) used by the new crawler to access customer resources.
     */
    Role?: Role;
    /**
     * The AWS Glue database where results are stored, such as: arn:aws:daylight:us-east-1::database/sometable/*.
     */
    DatabaseName?: DatabaseName;
    /**
     * A description of the new crawler.
     */
    Description?: DescriptionStringRemovable;
    /**
     * A list of targets to crawl.
     */
    Targets?: CrawlerTargets;
    /**
     * A cron expression used to specify the schedule (see Time-Based Schedules for Jobs and Crawlers. For example, to run something every day at 12:15 UTC, you would specify: cron(15 12 * * ? *).
     */
    Schedule?: CronExpression;
    /**
     * A list of custom classifiers that the user has registered. By default, all classifiers are included in a crawl, but these custom classifiers always override the default classifiers for a given classification.
     */
    Classifiers?: ClassifierNameList;
    /**
     * The table prefix used for catalog tables that are created.
     */
    TablePrefix?: TablePrefix;
    /**
     * Policy for the crawler's update and deletion behavior.
     */
    SchemaChangePolicy?: SchemaChangePolicy;
    /**
     * Crawler configuration information. This versioned JSON string allows users to specify aspects of a Crawler's behavior. You can use this field to force partitions to inherit metadata such as classification, input format, output format, serde information, and schema from their parent table, rather than detect this information separately for each partition. Use the following JSON string to specify that behavior: Example:  '{ "Version": 1.0, "CrawlerOutput": { "Partitions": { "AddOrUpdateBehavior": "InheritFromTable" } } }' 
     */
    Configuration?: CrawlerConfiguration;
  }
  export interface UpdateCrawlerResponse {
  }
  export interface UpdateCrawlerScheduleRequest {
    /**
     * Name of the crawler whose schedule to update.
     */
    CrawlerName: NameString;
    /**
     * The updated cron expression used to specify the schedule (see Time-Based Schedules for Jobs and Crawlers. For example, to run something every day at 12:15 UTC, you would specify: cron(15 12 * * ? *).
     */
    Schedule?: CronExpression;
  }
  export interface UpdateCrawlerScheduleResponse {
  }
  export interface UpdateDatabaseRequest {
    /**
     * The ID of the Data Catalog in which the metadata database resides. If none is supplied, the AWS account ID is used by default.
     */
    CatalogId?: CatalogIdString;
    /**
     * The name of the database to update in the catalog. For Hive compatibility, this is folded to lowercase.
     */
    Name: NameString;
    /**
     * A DatabaseInput object specifying the new definition of the metadata database in the catalog.
     */
    DatabaseInput: DatabaseInput;
  }
  export interface UpdateDatabaseResponse {
  }
  export interface UpdateDevEndpointRequest {
    /**
     * The name of the DevEndpoint to be updated.
     */
    EndpointName: GenericString;
    /**
     * The public key for the DevEndpoint to use.
     */
    PublicKey?: GenericString;
    /**
     * Custom Python or Java libraries to be loaded in the DevEndpoint.
     */
    CustomLibraries?: DevEndpointCustomLibraries;
    /**
     * True if the list of custom libraries to be loaded in the development endpoint needs to be updated, or False otherwise.
     */
    UpdateEtlLibraries?: BooleanValue;
  }
  export interface UpdateDevEndpointResponse {
  }
  export interface UpdateGrokClassifierRequest {
    /**
     * The name of the GrokClassifier.
     */
    Name: NameString;
    /**
     * An identifier of the data format that the classifier matches, such as Twitter, JSON, Omniture logs, Amazon CloudWatch Logs, and so on.
     */
    Classification?: Classification;
    /**
     * The grok pattern used by this classifier.
     */
    GrokPattern?: GrokPattern;
    /**
     * Optional custom grok patterns used by this classifier.
     */
    CustomPatterns?: CustomPatterns;
  }
  export interface UpdateJobRequest {
    /**
     * Name of the job definition to update.
     */
    JobName: NameString;
    /**
     * Specifies the values with which to update the job.
     */
    JobUpdate: JobUpdate;
  }
  export interface UpdateJobResponse {
    /**
     * Returns the name of the updated job.
     */
    JobName?: NameString;
  }
  export interface UpdatePartitionRequest {
    /**
     * The ID of the Data Catalog where the partition to be updated resides. If none is supplied, the AWS account ID is used by default.
     */
    CatalogId?: CatalogIdString;
    /**
     * The name of the catalog database in which the table in question resides.
     */
    DatabaseName: NameString;
    /**
     * The name of the table where the partition to be updated is located.
     */
    TableName: NameString;
    /**
     * A list of the values defining the partition.
     */
    PartitionValueList: BoundedPartitionValueList;
    /**
     * The new partition object to which to update the partition.
     */
    PartitionInput: PartitionInput;
  }
  export interface UpdatePartitionResponse {
  }
  export interface UpdateTableRequest {
    /**
     * The ID of the Data Catalog where the table resides. If none is supplied, the AWS account ID is used by default.
     */
    CatalogId?: CatalogIdString;
    /**
     * The name of the catalog database in which the table resides. For Hive compatibility, this name is entirely lowercase.
     */
    DatabaseName: NameString;
    /**
     * An updated TableInput object to define the metadata table in the catalog.
     */
    TableInput: TableInput;
    /**
     * By default, UpdateTable always creates an archived version of the table before updating it. If skipArchive is set to true, however, UpdateTable does not create the archived version.
     */
    SkipArchive?: BooleanNullable;
  }
  export interface UpdateTableResponse {
  }
  export interface UpdateTriggerRequest {
    /**
     * The name of the trigger to update.
     */
    Name: NameString;
    /**
     * The new values with which to update the trigger.
     */
    TriggerUpdate: TriggerUpdate;
  }
  export interface UpdateTriggerResponse {
    /**
     * The resulting trigger definition.
     */
    Trigger?: Trigger;
  }
  export interface UpdateUserDefinedFunctionRequest {
    /**
     * The ID of the Data Catalog where the function to be updated is located. If none is supplied, the AWS account ID is used by default.
     */
    CatalogId?: CatalogIdString;
    /**
     * The name of the catalog database where the function to be updated is located.
     */
    DatabaseName: NameString;
    /**
     * The name of the function.
     */
    FunctionName: NameString;
    /**
     * A FunctionInput object that re-defines the function in the Data Catalog.
     */
    FunctionInput: UserDefinedFunctionInput;
  }
  export interface UpdateUserDefinedFunctionResponse {
  }
  export interface UpdateXMLClassifierRequest {
    /**
     * The name of the classifier.
     */
    Name: NameString;
    /**
     * An identifier of the data format that the classifier matches.
     */
    Classification?: Classification;
    /**
     * The XML tag designating the element that contains each record in an XML document being parsed. Note that this cannot identify a self-closing element (closed by /&gt;). An empty row element that contains only attributes can be parsed as long as it ends with a closing tag (for example, &lt;row item_a="A" item_b="B"&gt;&lt;/row&gt; is okay, but &lt;row item_a="A" item_b="B" /&gt; is not).
     */
    RowTag?: RowTag;
  }
  export type UriString = string;
  export interface UserDefinedFunction {
    /**
     * The name of the function.
     */
    FunctionName?: NameString;
    /**
     * The Java class that contains the function code.
     */
    ClassName?: NameString;
    /**
     * The owner of the function.
     */
    OwnerName?: NameString;
    /**
     * The owner type.
     */
    OwnerType?: PrincipalType;
    /**
     * The time at which the function was created.
     */
    CreateTime?: Timestamp;
    /**
     * The resource URIs for the function.
     */
    ResourceUris?: ResourceUriList;
  }
  export interface UserDefinedFunctionInput {
    /**
     * The name of the function.
     */
    FunctionName?: NameString;
    /**
     * The Java class that contains the function code.
     */
    ClassName?: NameString;
    /**
     * The owner of the function.
     */
    OwnerName?: NameString;
    /**
     * The owner type.
     */
    OwnerType?: PrincipalType;
    /**
     * The resource URIs for the function.
     */
    ResourceUris?: ResourceUriList;
  }
  export type UserDefinedFunctionList = UserDefinedFunction[];
  export type ValueString = string;
  export type ValueStringList = ValueString[];
  export type VersionId = number;
  export type VersionString = string;
  export type ViewTextString = string;
  export interface XMLClassifier {
    /**
     * The name of the classifier.
     */
    Name: NameString;
    /**
     * An identifier of the data format that the classifier matches.
     */
    Classification: Classification;
    /**
     * The time this classifier was registered.
     */
    CreationTime?: Timestamp;
    /**
     * The time this classifier was last updated.
     */
    LastUpdated?: Timestamp;
    /**
     * The version of this classifier.
     */
    Version?: VersionId;
    /**
     * The XML tag designating the element that contains each record in an XML document being parsed. Note that this cannot identify a self-closing element (closed by /&gt;). An empty row element that contains only attributes can be parsed as long as it ends with a closing tag (for example, &lt;row item_a="A" item_b="B"&gt;&lt;/row&gt; is okay, but &lt;row item_a="A" item_b="B" /&gt; is not).
     */
    RowTag?: RowTag;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-03-31"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Glue client.
   */
  export import Types = Glue;
}
export = Glue;
