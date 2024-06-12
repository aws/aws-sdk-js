import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class AppTest extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: AppTest.Types.ClientConfiguration)
  config: Config & AppTest.Types.ClientConfiguration;
  /**
   * Creates a test case.
   */
  createTestCase(params: AppTest.Types.CreateTestCaseRequest, callback?: (err: AWSError, data: AppTest.Types.CreateTestCaseResponse) => void): Request<AppTest.Types.CreateTestCaseResponse, AWSError>;
  /**
   * Creates a test case.
   */
  createTestCase(callback?: (err: AWSError, data: AppTest.Types.CreateTestCaseResponse) => void): Request<AppTest.Types.CreateTestCaseResponse, AWSError>;
  /**
   * Creates a test configuration.
   */
  createTestConfiguration(params: AppTest.Types.CreateTestConfigurationRequest, callback?: (err: AWSError, data: AppTest.Types.CreateTestConfigurationResponse) => void): Request<AppTest.Types.CreateTestConfigurationResponse, AWSError>;
  /**
   * Creates a test configuration.
   */
  createTestConfiguration(callback?: (err: AWSError, data: AppTest.Types.CreateTestConfigurationResponse) => void): Request<AppTest.Types.CreateTestConfigurationResponse, AWSError>;
  /**
   * Creates a test suite.
   */
  createTestSuite(params: AppTest.Types.CreateTestSuiteRequest, callback?: (err: AWSError, data: AppTest.Types.CreateTestSuiteResponse) => void): Request<AppTest.Types.CreateTestSuiteResponse, AWSError>;
  /**
   * Creates a test suite.
   */
  createTestSuite(callback?: (err: AWSError, data: AppTest.Types.CreateTestSuiteResponse) => void): Request<AppTest.Types.CreateTestSuiteResponse, AWSError>;
  /**
   * Deletes a test case.
   */
  deleteTestCase(params: AppTest.Types.DeleteTestCaseRequest, callback?: (err: AWSError, data: AppTest.Types.DeleteTestCaseResponse) => void): Request<AppTest.Types.DeleteTestCaseResponse, AWSError>;
  /**
   * Deletes a test case.
   */
  deleteTestCase(callback?: (err: AWSError, data: AppTest.Types.DeleteTestCaseResponse) => void): Request<AppTest.Types.DeleteTestCaseResponse, AWSError>;
  /**
   * Deletes a test configuration.
   */
  deleteTestConfiguration(params: AppTest.Types.DeleteTestConfigurationRequest, callback?: (err: AWSError, data: AppTest.Types.DeleteTestConfigurationResponse) => void): Request<AppTest.Types.DeleteTestConfigurationResponse, AWSError>;
  /**
   * Deletes a test configuration.
   */
  deleteTestConfiguration(callback?: (err: AWSError, data: AppTest.Types.DeleteTestConfigurationResponse) => void): Request<AppTest.Types.DeleteTestConfigurationResponse, AWSError>;
  /**
   * Deletes a test run.
   */
  deleteTestRun(params: AppTest.Types.DeleteTestRunRequest, callback?: (err: AWSError, data: AppTest.Types.DeleteTestRunResponse) => void): Request<AppTest.Types.DeleteTestRunResponse, AWSError>;
  /**
   * Deletes a test run.
   */
  deleteTestRun(callback?: (err: AWSError, data: AppTest.Types.DeleteTestRunResponse) => void): Request<AppTest.Types.DeleteTestRunResponse, AWSError>;
  /**
   * Deletes a test suite.
   */
  deleteTestSuite(params: AppTest.Types.DeleteTestSuiteRequest, callback?: (err: AWSError, data: AppTest.Types.DeleteTestSuiteResponse) => void): Request<AppTest.Types.DeleteTestSuiteResponse, AWSError>;
  /**
   * Deletes a test suite.
   */
  deleteTestSuite(callback?: (err: AWSError, data: AppTest.Types.DeleteTestSuiteResponse) => void): Request<AppTest.Types.DeleteTestSuiteResponse, AWSError>;
  /**
   * Gets a test case.
   */
  getTestCase(params: AppTest.Types.GetTestCaseRequest, callback?: (err: AWSError, data: AppTest.Types.GetTestCaseResponse) => void): Request<AppTest.Types.GetTestCaseResponse, AWSError>;
  /**
   * Gets a test case.
   */
  getTestCase(callback?: (err: AWSError, data: AppTest.Types.GetTestCaseResponse) => void): Request<AppTest.Types.GetTestCaseResponse, AWSError>;
  /**
   * Gets a test configuration.
   */
  getTestConfiguration(params: AppTest.Types.GetTestConfigurationRequest, callback?: (err: AWSError, data: AppTest.Types.GetTestConfigurationResponse) => void): Request<AppTest.Types.GetTestConfigurationResponse, AWSError>;
  /**
   * Gets a test configuration.
   */
  getTestConfiguration(callback?: (err: AWSError, data: AppTest.Types.GetTestConfigurationResponse) => void): Request<AppTest.Types.GetTestConfigurationResponse, AWSError>;
  /**
   * Gets a test run step.
   */
  getTestRunStep(params: AppTest.Types.GetTestRunStepRequest, callback?: (err: AWSError, data: AppTest.Types.GetTestRunStepResponse) => void): Request<AppTest.Types.GetTestRunStepResponse, AWSError>;
  /**
   * Gets a test run step.
   */
  getTestRunStep(callback?: (err: AWSError, data: AppTest.Types.GetTestRunStepResponse) => void): Request<AppTest.Types.GetTestRunStepResponse, AWSError>;
  /**
   * Gets a test suite.
   */
  getTestSuite(params: AppTest.Types.GetTestSuiteRequest, callback?: (err: AWSError, data: AppTest.Types.GetTestSuiteResponse) => void): Request<AppTest.Types.GetTestSuiteResponse, AWSError>;
  /**
   * Gets a test suite.
   */
  getTestSuite(callback?: (err: AWSError, data: AppTest.Types.GetTestSuiteResponse) => void): Request<AppTest.Types.GetTestSuiteResponse, AWSError>;
  /**
   * Lists tags for a resource.
   */
  listTagsForResource(params: AppTest.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: AppTest.Types.ListTagsForResourceResponse) => void): Request<AppTest.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists tags for a resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: AppTest.Types.ListTagsForResourceResponse) => void): Request<AppTest.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists test cases.
   */
  listTestCases(params: AppTest.Types.ListTestCasesRequest, callback?: (err: AWSError, data: AppTest.Types.ListTestCasesResponse) => void): Request<AppTest.Types.ListTestCasesResponse, AWSError>;
  /**
   * Lists test cases.
   */
  listTestCases(callback?: (err: AWSError, data: AppTest.Types.ListTestCasesResponse) => void): Request<AppTest.Types.ListTestCasesResponse, AWSError>;
  /**
   * Lists test configurations.
   */
  listTestConfigurations(params: AppTest.Types.ListTestConfigurationsRequest, callback?: (err: AWSError, data: AppTest.Types.ListTestConfigurationsResponse) => void): Request<AppTest.Types.ListTestConfigurationsResponse, AWSError>;
  /**
   * Lists test configurations.
   */
  listTestConfigurations(callback?: (err: AWSError, data: AppTest.Types.ListTestConfigurationsResponse) => void): Request<AppTest.Types.ListTestConfigurationsResponse, AWSError>;
  /**
   * Lists test run steps.
   */
  listTestRunSteps(params: AppTest.Types.ListTestRunStepsRequest, callback?: (err: AWSError, data: AppTest.Types.ListTestRunStepsResponse) => void): Request<AppTest.Types.ListTestRunStepsResponse, AWSError>;
  /**
   * Lists test run steps.
   */
  listTestRunSteps(callback?: (err: AWSError, data: AppTest.Types.ListTestRunStepsResponse) => void): Request<AppTest.Types.ListTestRunStepsResponse, AWSError>;
  /**
   * Lists test run test cases.
   */
  listTestRunTestCases(params: AppTest.Types.ListTestRunTestCasesRequest, callback?: (err: AWSError, data: AppTest.Types.ListTestRunTestCasesResponse) => void): Request<AppTest.Types.ListTestRunTestCasesResponse, AWSError>;
  /**
   * Lists test run test cases.
   */
  listTestRunTestCases(callback?: (err: AWSError, data: AppTest.Types.ListTestRunTestCasesResponse) => void): Request<AppTest.Types.ListTestRunTestCasesResponse, AWSError>;
  /**
   * Lists test runs.
   */
  listTestRuns(params: AppTest.Types.ListTestRunsRequest, callback?: (err: AWSError, data: AppTest.Types.ListTestRunsResponse) => void): Request<AppTest.Types.ListTestRunsResponse, AWSError>;
  /**
   * Lists test runs.
   */
  listTestRuns(callback?: (err: AWSError, data: AppTest.Types.ListTestRunsResponse) => void): Request<AppTest.Types.ListTestRunsResponse, AWSError>;
  /**
   * Lists test suites.
   */
  listTestSuites(params: AppTest.Types.ListTestSuitesRequest, callback?: (err: AWSError, data: AppTest.Types.ListTestSuitesResponse) => void): Request<AppTest.Types.ListTestSuitesResponse, AWSError>;
  /**
   * Lists test suites.
   */
  listTestSuites(callback?: (err: AWSError, data: AppTest.Types.ListTestSuitesResponse) => void): Request<AppTest.Types.ListTestSuitesResponse, AWSError>;
  /**
   * Starts a test run.
   */
  startTestRun(params: AppTest.Types.StartTestRunRequest, callback?: (err: AWSError, data: AppTest.Types.StartTestRunResponse) => void): Request<AppTest.Types.StartTestRunResponse, AWSError>;
  /**
   * Starts a test run.
   */
  startTestRun(callback?: (err: AWSError, data: AppTest.Types.StartTestRunResponse) => void): Request<AppTest.Types.StartTestRunResponse, AWSError>;
  /**
   * Specifies tags of a resource.
   */
  tagResource(params: AppTest.Types.TagResourceRequest, callback?: (err: AWSError, data: AppTest.Types.TagResourceResponse) => void): Request<AppTest.Types.TagResourceResponse, AWSError>;
  /**
   * Specifies tags of a resource.
   */
  tagResource(callback?: (err: AWSError, data: AppTest.Types.TagResourceResponse) => void): Request<AppTest.Types.TagResourceResponse, AWSError>;
  /**
   * Untags a resource.
   */
  untagResource(params: AppTest.Types.UntagResourceRequest, callback?: (err: AWSError, data: AppTest.Types.UntagResourceResponse) => void): Request<AppTest.Types.UntagResourceResponse, AWSError>;
  /**
   * Untags a resource.
   */
  untagResource(callback?: (err: AWSError, data: AppTest.Types.UntagResourceResponse) => void): Request<AppTest.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates a test case.
   */
  updateTestCase(params: AppTest.Types.UpdateTestCaseRequest, callback?: (err: AWSError, data: AppTest.Types.UpdateTestCaseResponse) => void): Request<AppTest.Types.UpdateTestCaseResponse, AWSError>;
  /**
   * Updates a test case.
   */
  updateTestCase(callback?: (err: AWSError, data: AppTest.Types.UpdateTestCaseResponse) => void): Request<AppTest.Types.UpdateTestCaseResponse, AWSError>;
  /**
   * Updates a test configuration.
   */
  updateTestConfiguration(params: AppTest.Types.UpdateTestConfigurationRequest, callback?: (err: AWSError, data: AppTest.Types.UpdateTestConfigurationResponse) => void): Request<AppTest.Types.UpdateTestConfigurationResponse, AWSError>;
  /**
   * Updates a test configuration.
   */
  updateTestConfiguration(callback?: (err: AWSError, data: AppTest.Types.UpdateTestConfigurationResponse) => void): Request<AppTest.Types.UpdateTestConfigurationResponse, AWSError>;
  /**
   * Updates a test suite.
   */
  updateTestSuite(params: AppTest.Types.UpdateTestSuiteRequest, callback?: (err: AWSError, data: AppTest.Types.UpdateTestSuiteResponse) => void): Request<AppTest.Types.UpdateTestSuiteResponse, AWSError>;
  /**
   * Updates a test suite.
   */
  updateTestSuite(callback?: (err: AWSError, data: AppTest.Types.UpdateTestSuiteResponse) => void): Request<AppTest.Types.UpdateTestSuiteResponse, AWSError>;
}
declare namespace AppTest {
  export type Arn = string;
  export interface Batch {
    /**
     * The job name of the batch.
     */
    batchJobName: Variable;
    /**
     * The batch job parameters of the batch.
     */
    batchJobParameters?: BatchJobParameters;
    /**
     * The export data set names of the batch.
     */
    exportDataSetNames?: ExportDataSetNames;
  }
  export type BatchJobParameters = {[key: string]: String};
  export interface BatchStepInput {
    /**
     * The resource of the batch step input.
     */
    resource: MainframeResourceSummary;
    /**
     * The batch job name of the batch step input.
     */
    batchJobName: ResourceName;
    /**
     * The batch job parameters of the batch step input.
     */
    batchJobParameters?: BatchJobParameters;
    /**
     * The export data set names of the batch step input.
     */
    exportDataSetNames?: ExportDataSetNames;
    /**
     * The properties of the batch step input.
     */
    properties?: MainframeActionProperties;
  }
  export interface BatchStepOutput {
    /**
     * The data set export location of the batch step output.
     */
    dataSetExportLocation?: S3Uri;
    /**
     * The Database Migration Service (DMS) output location of the batch step output.
     */
    dmsOutputLocation?: S3Uri;
    /**
     * The data set details of the batch step output.
     */
    dataSetDetails?: DataSetList;
  }
  export interface BatchSummary {
    /**
     * The step input of the batch summary.
     */
    stepInput: BatchStepInput;
    /**
     * The step output of the batch summary.
     */
    stepOutput?: BatchStepOutput;
  }
  export type Boolean = boolean;
  export type CaptureTool = "Precisely"|"AWS DMS"|string;
  export interface CloudFormation {
    /**
     * The template location of the CloudFormation template.
     */
    templateLocation: S3Uri;
    /**
     * The CloudFormation properties in the CloudFormation template.
     */
    parameters?: Properties;
  }
  export interface CloudFormationAction {
    /**
     * The resource of the CloudFormation action.
     */
    resource: Variable;
    /**
     * The action type of the CloudFormation action.
     */
    actionType?: CloudFormationActionType;
  }
  export type CloudFormationActionType = "Create"|"Delete"|string;
  export interface CloudFormationStepSummary {
    /**
     * Creates the CloudFormation summary of the step.
     */
    createCloudformation?: CreateCloudFormationSummary;
    /**
     * Deletes the CloudFormation summary of the CloudFormation step summary.
     */
    deleteCloudformation?: DeleteCloudFormationSummary;
  }
  export interface CompareAction {
    /**
     * The input of the compare action.
     */
    input: Input;
    /**
     * The output of the compare action.
     */
    output?: Output;
  }
  export interface CompareActionSummary {
    /**
     * The type of the compare action summary.
     */
    type: File;
  }
  export interface CompareDataSetsStepInput {
    /**
     * The source location of the compare data sets step input location.
     */
    sourceLocation: S3Uri;
    /**
     * The target location of the compare data sets step input location.
     */
    targetLocation: S3Uri;
    /**
     * The source data sets of the compare data sets step input location.
     */
    sourceDataSets: DataSetList;
    /**
     * The target data sets of the compare data sets step input location.
     */
    targetDataSets: DataSetList;
  }
  export interface CompareDataSetsStepOutput {
    /**
     * The comparison output location of the compare data sets step output.
     */
    comparisonOutputLocation: S3Uri;
    /**
     * The comparison status of the compare data sets step output.
     */
    comparisonStatus: ComparisonStatusEnum;
  }
  export interface CompareDataSetsSummary {
    /**
     * The step input of the compare data sets summary.
     */
    stepInput: CompareDataSetsStepInput;
    /**
     * The step output of the compare data sets summary.
     */
    stepOutput?: CompareDataSetsStepOutput;
  }
  export interface CompareDatabaseCDCStepInput {
    /**
     * The source location of the compare database CDC step input.
     */
    sourceLocation: String;
    /**
     * The target location of the compare database CDC step input.
     */
    targetLocation: String;
    /**
     * The output location of the compare database CDC step input.
     */
    outputLocation?: String;
    /**
     * The source metadata of the compare database CDC step input.
     */
    sourceMetadata: SourceDatabaseMetadata;
    /**
     * The target metadata location of the compare database CDC step input.
     */
    targetMetadata: TargetDatabaseMetadata;
  }
  export interface CompareDatabaseCDCStepOutput {
    /**
     * The comparison output of the compare database CDC step output.
     */
    comparisonOutputLocation: String;
    /**
     * The comparison status of the compare database CDC step output.
     */
    comparisonStatus: ComparisonStatusEnum;
  }
  export interface CompareDatabaseCDCSummary {
    /**
     * The step input of the compare database CDC summary.
     */
    stepInput: CompareDatabaseCDCStepInput;
    /**
     * The step output of the compare database CDC summary.
     */
    stepOutput?: CompareDatabaseCDCStepOutput;
  }
  export interface CompareFileType {
    /**
     * The data sets in the compare file type.
     */
    datasets?: CompareDataSetsSummary;
    /**
     * The database CDC of the compare file type.
     */
    databaseCDC?: CompareDatabaseCDCSummary;
  }
  export type ComparisonStatusEnum = "Different"|"Equivalent"|"Equal"|string;
  export interface CreateCloudFormationStepInput {
    /**
     * The template location of the CloudFormation step input.
     */
    templateLocation: S3Uri;
    /**
     * The CloudFormation properties of the CloudFormation step input.
     */
    parameters?: Properties;
  }
  export interface CreateCloudFormationStepOutput {
    /**
     * The stack ID of the CloudFormation step output.
     */
    stackId: String;
    /**
     * The exports of the CloudFormation step output.
     */
    exports?: Properties;
  }
  export interface CreateCloudFormationSummary {
    /**
     * The step input of the CloudFormation summary.
     */
    stepInput: CreateCloudFormationStepInput;
    /**
     * The step output of the CloudFormation summary.
     */
    stepOutput?: CreateCloudFormationStepOutput;
  }
  export interface CreateTestCaseRequest {
    /**
     * The name of the test case.
     */
    name: ResourceName;
    /**
     * The description of the test case.
     */
    description?: ResourceDescription;
    /**
     * The steps in the test case.
     */
    steps: StepList;
    /**
     * The client token of the test case.
     */
    clientToken?: IdempotencyTokenString;
    /**
     * The specified tags of the test case.
     */
    tags?: TagMap;
  }
  export interface CreateTestCaseResponse {
    /**
     * The test case ID of the test case.
     */
    testCaseId: Identifier;
    /**
     * The test case version of the test case.
     */
    testCaseVersion: Version;
  }
  export interface CreateTestConfigurationRequest {
    /**
     * The name of the test configuration.
     */
    name: ResourceName;
    /**
     * The description of the test configuration.
     */
    description?: ResourceDescription;
    /**
     * The defined resources of the test configuration.
     */
    resources: ResourceList;
    /**
     * The properties of the test configuration.
     */
    properties?: Properties;
    /**
     * The client token of the test configuration.
     */
    clientToken?: IdempotencyTokenString;
    /**
     * The tags of the test configuration.
     */
    tags?: TagMap;
    /**
     * The service settings of the test configuration.
     */
    serviceSettings?: ServiceSettings;
  }
  export interface CreateTestConfigurationResponse {
    /**
     * The test configuration ID.
     */
    testConfigurationId: Identifier;
    /**
     * The test configuration version.
     */
    testConfigurationVersion: Version;
  }
  export interface CreateTestSuiteRequest {
    /**
     * The name of the test suite.
     */
    name: ResourceName;
    /**
     * The description of the test suite.
     */
    description?: ResourceDescription;
    /**
     * The before steps of the test suite.
     */
    beforeSteps?: StepList;
    /**
     * The after steps of the test suite.
     */
    afterSteps?: StepList;
    /**
     * The test cases in the test suite.
     */
    testCases: TestCases;
    /**
     * The client token of the test suite.
     */
    clientToken?: IdempotencyTokenString;
    /**
     * The tags of the test suite.
     */
    tags?: TagMap;
  }
  export interface CreateTestSuiteResponse {
    /**
     * The suite ID of the test suite.
     */
    testSuiteId: Identifier;
    /**
     * The suite version of the test suite.
     */
    testSuiteVersion: Version;
  }
  export interface DataSet {
    /**
     * The type of the data set.
     */
    type: DataSetType;
    /**
     * The name of the data set.
     */
    name: String100;
    /**
     * The CCSID of the data set.
     */
    ccsid: String50;
    /**
     * The format of the data set.
     */
    format: Format;
    /**
     * The length of the data set.
     */
    length: Integer;
  }
  export type DataSetList = DataSet[];
  export type DataSetType = "PS"|string;
  export interface DatabaseCDC {
    /**
     * The source metadata of the database CDC.
     */
    sourceMetadata: SourceDatabaseMetadata;
    /**
     * The target metadata of the database CDC.
     */
    targetMetadata: TargetDatabaseMetadata;
  }
  export interface DeleteCloudFormationStepInput {
    /**
     * The stack ID of the deleted CloudFormation step input.
     */
    stackId: String;
  }
  export interface DeleteCloudFormationStepOutput {
  }
  export interface DeleteCloudFormationSummary {
    /**
     * The step input of the deleted CloudFormation summary.
     */
    stepInput: DeleteCloudFormationStepInput;
    /**
     * The step output of the deleted CloudFormation summary.
     */
    stepOutput?: DeleteCloudFormationStepOutput;
  }
  export interface DeleteTestCaseRequest {
    /**
     * The test case ID of the test case.
     */
    testCaseId: Identifier;
  }
  export interface DeleteTestCaseResponse {
  }
  export interface DeleteTestConfigurationRequest {
    /**
     * The test ID of the test configuration.
     */
    testConfigurationId: Identifier;
  }
  export interface DeleteTestConfigurationResponse {
  }
  export interface DeleteTestRunRequest {
    /**
     * The run ID of the test run.
     */
    testRunId: Identifier;
  }
  export interface DeleteTestRunResponse {
  }
  export interface DeleteTestSuiteRequest {
    /**
     * The test ID of the test suite.
     */
    testSuiteId: Identifier;
  }
  export interface DeleteTestSuiteResponse {
  }
  export type ExportDataSetNames = String100[];
  export interface File {
    /**
     * The file type of the file.
     */
    fileType?: CompareFileType;
  }
  export interface FileMetadata {
    /**
     * The data sets of the file metadata.
     */
    dataSets?: DataSetList;
    /**
     * The database CDC of the file metadata.
     */
    databaseCDC?: DatabaseCDC;
  }
  export type Format = "FIXED"|"VARIABLE"|"LINE_SEQUENTIAL"|string;
  export interface GetTestCaseRequest {
    /**
     * The request test ID of the test case.
     */
    testCaseId: Identifier;
    /**
     * The test case version of the test case.
     */
    testCaseVersion?: Version;
  }
  export interface GetTestCaseResponse {
    /**
     * The response test ID of the test case.
     */
    testCaseId: Identifier;
    /**
     * The Amazon Resource Name (ARN) of the test case.
     */
    testCaseArn: Arn;
    /**
     * The name of the test case.
     */
    name: ResourceName;
    /**
     * The description of the test case.
     */
    description?: ResourceDescription;
    /**
     * The latest version of the test case.
     */
    latestVersion: TestCaseLatestVersion;
    /**
     * The case version of the test case.
     */
    testCaseVersion: Version;
    /**
     * The status of the test case.
     */
    status: TestCaseLifecycle;
    /**
     * The status reason of the test case.
     */
    statusReason?: String;
    /**
     * The creation time of the test case.
     */
    creationTime: Timestamp;
    /**
     * The last update time of the test case.
     */
    lastUpdateTime: Timestamp;
    /**
     * The steps of the test case.
     */
    steps: StepList;
    /**
     * The tags of the test case.
     */
    tags?: TagMap;
  }
  export interface GetTestConfigurationRequest {
    /**
     * The request test configuration ID.
     */
    testConfigurationId: Identifier;
    /**
     * The test configuration version.
     */
    testConfigurationVersion?: Version;
  }
  export interface GetTestConfigurationResponse {
    /**
     * The response test configuration ID.
     */
    testConfigurationId: Identifier;
    /**
     * The test configuration name
     */
    name: ResourceName;
    /**
     * The test configuration Amazon Resource Name (ARN).
     */
    testConfigurationArn: Arn;
    /**
     * The latest version of the test configuration.
     */
    latestVersion: TestConfigurationLatestVersion;
    /**
     * The test configuration version.
     */
    testConfigurationVersion: Version;
    /**
     * The status of the test configuration.
     */
    status: TestConfigurationLifecycle;
    /**
     * The status reason of the test configuration.
     */
    statusReason?: String;
    /**
     * The creation time of the test configuration.
     */
    creationTime: Timestamp;
    /**
     * The last update time of the test configuration.
     */
    lastUpdateTime: Timestamp;
    /**
     * The description of the test configuration.
     */
    description?: ResourceDescription;
    /**
     * The resources of the test configuration.
     */
    resources: ResourceList;
    /**
     * The properties of the test configuration.
     */
    properties: Properties;
    /**
     * The tags of the test configuration.
     */
    tags?: TagMap;
    /**
     * The service settings of the test configuration.
     */
    serviceSettings?: ServiceSettings;
  }
  export interface GetTestRunStepRequest {
    /**
     * The test run ID of the test run step.
     */
    testRunId: Identifier;
    /**
     * The step name of the test run step.
     */
    stepName: ResourceName;
    /**
     * The test case ID of a test run step.
     */
    testCaseId?: Identifier;
    /**
     * The test suite ID of a test run step.
     */
    testSuiteId?: Identifier;
  }
  export interface GetTestRunStepResponse {
    /**
     * The step name of the test run step.
     */
    stepName: ResourceName;
    /**
     * The test run ID of the test run step.
     */
    testRunId: Identifier;
    /**
     * The test case ID of the test run step.
     */
    testCaseId?: Identifier;
    /**
     * The test case version of the test run step.
     */
    testCaseVersion?: Version;
    /**
     * The test suite ID of the test run step.
     */
    testSuiteId?: Identifier;
    /**
     * The test suite version of the test run step.
     */
    testSuiteVersion?: Version;
    /**
     * The before steps of the test run step.
     */
    beforeStep?: Boolean;
    /**
     * The after steps of the test run step.
     */
    afterStep?: Boolean;
    /**
     * The status of the test run step.
     */
    status: StepRunStatus;
    /**
     * The status reason of the test run step.
     */
    statusReason?: String;
    /**
     * The run start time of the test run step.
     */
    runStartTime: Timestamp;
    /**
     * The run end time of the test run step.
     */
    runEndTime?: Timestamp;
    /**
     * The step run summary of the test run step.
     */
    stepRunSummary?: StepRunSummary;
  }
  export interface GetTestSuiteRequest {
    /**
     * The ID of the test suite.
     */
    testSuiteId: Identifier;
    /**
     * The version of the test suite.
     */
    testSuiteVersion?: Version;
  }
  export interface GetTestSuiteResponse {
    /**
     * The response ID of the test suite.
     */
    testSuiteId: Identifier;
    /**
     * The name of the test suite.
     */
    name: ResourceName;
    /**
     * The latest version of the test suite.
     */
    latestVersion: TestSuiteLatestVersion;
    /**
     * The version of the test suite.
     */
    testSuiteVersion: Version;
    /**
     * The status of the test suite.
     */
    status?: TestSuiteLifecycle;
    /**
     * The status reason of the test suite.
     */
    statusReason?: String;
    /**
     * The test suite Amazon Resource Name (ARN).
     */
    testSuiteArn: Arn;
    /**
     * The creation time of the test suite.
     */
    creationTime: Timestamp;
    /**
     * The last update time of the test suite.
     */
    lastUpdateTime: Timestamp;
    /**
     * The description of the test suite.
     */
    description?: ResourceDescription;
    /**
     * The before steps of the test suite.
     */
    beforeSteps: StepList;
    /**
     * The after steps of the test suite. 
     */
    afterSteps: StepList;
    /**
     * The test cases of the test suite.
     */
    testCases: TestCases;
    /**
     * The tags of the test suite.
     */
    tags?: TagMap;
  }
  export type IdempotencyTokenString = string;
  export type Identifier = string;
  export interface Input {
    /**
     * The file in the input.
     */
    file?: InputFile;
  }
  export interface InputFile {
    /**
     * The source location of the input file.
     */
    sourceLocation: Variable;
    /**
     * The target location of the input file.
     */
    targetLocation: Variable;
    /**
     * The file metadata of the input file.
     */
    fileMetadata: FileMetadata;
  }
  export type Integer = number;
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    resourceArn: Arn;
  }
  export interface ListTagsForResourceResponse {
    /**
     * The tags of the resource.
     */
    tags: TagMap;
  }
  export interface ListTestCasesRequest {
    /**
     * The IDs of the test cases.
     */
    testCaseIds?: TestCaseIdList;
    /**
     * The next token of the test cases.
     */
    nextToken?: NextToken;
    /**
     * The maximum results of the test case.
     */
    maxResults?: MaxResults;
  }
  export interface ListTestCasesResponse {
    /**
     * The test cases in an application.
     */
    testCases: TestCaseSummaryList;
    /**
     * The next token in test cases.
     */
    nextToken?: NextToken;
  }
  export interface ListTestConfigurationsRequest {
    /**
     * The configuration IDs of the test configurations.
     */
    testConfigurationIds?: TestConfigurationIdList;
    /**
     * The next token for the test configurations.
     */
    nextToken?: NextToken;
    /**
     * The maximum results of the test configuration.
     */
    maxResults?: MaxResults;
  }
  export interface ListTestConfigurationsResponse {
    /**
     * The test configurations.
     */
    testConfigurations: TestConfigurationList;
    /**
     * The next token in the test configurations.
     */
    nextToken?: NextToken;
  }
  export interface ListTestRunStepsRequest {
    /**
     * The test run ID of the test run steps.
     */
    testRunId: Identifier;
    /**
     * The test case ID of the test run steps.
     */
    testCaseId?: Identifier;
    /**
     * The test suite ID of the test run steps.
     */
    testSuiteId?: Identifier;
    /**
     * The token from a previous step to retrieve the next page of results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of test run steps to return in one page of results.
     */
    maxResults?: MaxResults;
  }
  export interface ListTestRunStepsResponse {
    /**
     * The test run steps of the response query.
     */
    testRunSteps: TestRunStepSummaryList;
    /**
     * The token from a previous request to retrieve the next page of results.
     */
    nextToken?: NextToken;
  }
  export interface ListTestRunTestCasesRequest {
    /**
     * The test run ID of the test cases.
     */
    testRunId: Identifier;
    /**
     * The token from a previous request to retrieve the next page of results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of test run test cases to return in one page of results.
     */
    maxResults?: MaxResults;
  }
  export interface ListTestRunTestCasesResponse {
    /**
     * The test run of the test cases.
     */
    testRunTestCases: TestCaseRunSummaryList;
    /**
     * The token from a previous request to retrieve the next page of results.
     */
    nextToken?: NextToken;
  }
  export interface ListTestRunsRequest {
    /**
     * The test suite ID of the test runs.
     */
    testSuiteId?: Identifier;
    /**
     * The test run IDs of the test runs.
     */
    testRunIds?: TestRunIdList;
    /**
     * The token from the previous request to retrieve the next page of test run results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of test runs to return in one page of results.
     */
    maxResults?: MaxResults;
  }
  export interface ListTestRunsResponse {
    /**
     * The test runs of the response query.
     */
    testRuns: TestRunSummaryList;
    /**
     * The token from the previous request to retrieve the next page of results.
     */
    nextToken?: NextToken;
  }
  export interface ListTestSuitesRequest {
    /**
     * The suite ID of the test suites.
     */
    testSuiteIds?: TestSuiteIdList;
    /**
     * The token from a previous request to retrieve the next page of results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of test suites to return in one page of results.
     */
    maxResults?: MaxResults;
  }
  export interface ListTestSuitesResponse {
    /**
     * The test suites returned with the response query.
     */
    testSuites: TestSuiteList;
    /**
     * The token from a previous request to retrieve the next page of test suites results.
     */
    nextToken?: NextToken;
  }
  export interface M2ManagedActionProperties {
    /**
     * Force stops the AWS Mainframe Modernization managed action properties.
     */
    forceStop?: Boolean;
    /**
     * The import data set location of the AWS Mainframe Modernization managed action properties.
     */
    importDataSetLocation?: Variable;
  }
  export type M2ManagedActionType = "Configure"|"Deconfigure"|string;
  export interface M2ManagedApplication {
    /**
     * The application ID of the AWS Mainframe Modernization managed application.
     */
    applicationId: Variable;
    /**
     * The runtime of the AWS Mainframe Modernization managed application.
     */
    runtime: M2ManagedRuntime;
    /**
     * The VPC endpoint service name of the AWS Mainframe Modernization managed application.
     */
    vpcEndpointServiceName?: Variable;
    /**
     * The listener port of the AWS Mainframe Modernization managed application.
     */
    listenerPort?: Variable;
  }
  export interface M2ManagedApplicationAction {
    /**
     * The resource of the AWS Mainframe Modernization managed application action.
     */
    resource: Variable;
    /**
     * The action type of the AWS Mainframe Modernization managed application action.
     */
    actionType: M2ManagedActionType;
    /**
     * The properties of the AWS Mainframe Modernization managed application action.
     */
    properties?: M2ManagedActionProperties;
  }
  export interface M2ManagedApplicationStepInput {
    /**
     * The application ID of the AWS Mainframe Modernization managed application step input.
     */
    applicationId: String;
    /**
     * The runtime of the AWS Mainframe Modernization managed application step input.
     */
    runtime: String;
    /**
     * The VPC endpoint service name of the AWS Mainframe Modernization managed application step input.
     */
    vpcEndpointServiceName?: String;
    /**
     * The listener port of the AWS Mainframe Modernization managed application step input.
     */
    listenerPort?: Integer;
    /**
     * The action type of the AWS Mainframe Modernization managed application step input.
     */
    actionType: M2ManagedActionType;
    /**
     * The properties of the AWS Mainframe Modernization managed application step input.
     */
    properties?: M2ManagedActionProperties;
  }
  export interface M2ManagedApplicationStepOutput {
    /**
     * The import data set summary of the AWS Mainframe Modernization managed application step output.
     */
    importDataSetSummary?: Properties;
  }
  export interface M2ManagedApplicationStepSummary {
    /**
     * The step input of the AWS Mainframe Modernization managed application step summary.
     */
    stepInput: M2ManagedApplicationStepInput;
    /**
     * The step output of the AWS Mainframe Modernization managed application step summary.
     */
    stepOutput?: M2ManagedApplicationStepOutput;
  }
  export interface M2ManagedApplicationSummary {
    /**
     * The application ID of the AWS Mainframe Modernization managed application summary.
     */
    applicationId: Identifier;
    /**
     * The runtime of the AWS Mainframe Modernization managed application summary.
     */
    runtime: M2ManagedRuntime;
    /**
     * The listener port of the AWS Mainframe Modernization managed application summary.
     */
    listenerPort?: Integer;
  }
  export type M2ManagedRuntime = "MicroFocus"|string;
  export type M2NonManagedActionType = "Configure"|"Deconfigure"|string;
  export interface M2NonManagedApplication {
    /**
     * The VPC endpoint service name of the AWS Mainframe Modernization non-managed application.
     */
    vpcEndpointServiceName: Variable;
    /**
     * The listener port of the AWS Mainframe Modernization non-managed application.
     */
    listenerPort: Variable;
    /**
     * The runtime of the AWS Mainframe Modernization non-managed application.
     */
    runtime: M2NonManagedRuntime;
    /**
     * The web application name of the AWS Mainframe Modernization non-managed application.
     */
    webAppName?: Variable;
  }
  export interface M2NonManagedApplicationAction {
    /**
     * The resource of the AWS Mainframe Modernization non-managed application action.
     */
    resource: Variable;
    /**
     * The action type of the AWS Mainframe Modernization non-managed application action.
     */
    actionType: M2NonManagedActionType;
  }
  export interface M2NonManagedApplicationStepInput {
    /**
     * The VPC endpoint service name of the AWS Mainframe Modernization non-managed application step input.
     */
    vpcEndpointServiceName: String;
    /**
     * The listener port of the AWS Mainframe Modernization non-managed application step input.
     */
    listenerPort: Integer;
    /**
     * The runtime of the AWS Mainframe Modernization non-managed application step input.
     */
    runtime: M2NonManagedRuntime;
    /**
     * The web app name of the AWS Mainframe Modernization non-managed application step input.
     */
    webAppName?: String;
    /**
     * The action type of the AWS Mainframe Modernization non-managed application step input.
     */
    actionType: M2NonManagedActionType;
  }
  export interface M2NonManagedApplicationStepOutput {
  }
  export interface M2NonManagedApplicationStepSummary {
    /**
     * The step input of the AWS Mainframe Modernization non-managed application step summary.
     */
    stepInput: M2NonManagedApplicationStepInput;
    /**
     * The step output of the AWS Mainframe Modernization non-managed application step summary.
     */
    stepOutput?: M2NonManagedApplicationStepOutput;
  }
  export interface M2NonManagedApplicationSummary {
    /**
     * The VPC endpoint service name of the AWS Mainframe Modernization non-managed application summary.
     */
    vpcEndpointServiceName: String;
    /**
     * The listener port of the AWS Mainframe Modernization non-managed application summary.
     */
    listenerPort: Integer;
    /**
     * The runtime of the AWS Mainframe Modernization non-managed application summary.
     */
    runtime: M2NonManagedRuntime;
    /**
     * The web application name of the AWS Mainframe Modernization non-managed application summary.
     */
    webAppName?: String;
  }
  export type M2NonManagedRuntime = "BluAge"|string;
  export interface MainframeAction {
    /**
     * The resource of the mainframe action.
     */
    resource: Variable;
    /**
     * The action type of the mainframe action.
     */
    actionType: MainframeActionType;
    /**
     * The properties of the mainframe action.
     */
    properties?: MainframeActionProperties;
  }
  export interface MainframeActionProperties {
    /**
     * The DMS task ARN of the mainframe action properties.
     */
    dmsTaskArn?: Variable;
  }
  export interface MainframeActionSummary {
    /**
     * The batch of the mainframe action summary.
     */
    batch?: BatchSummary;
    /**
     * The tn3270 port of the mainframe action summary.
     */
    tn3270?: TN3270Summary;
  }
  export interface MainframeActionType {
    /**
     * The batch of the mainframe action type.
     */
    batch?: Batch;
    /**
     * The tn3270 port of the mainframe action type.
     */
    tn3270?: TN3270;
  }
  export interface MainframeResourceSummary {
    /**
     * The AWS Mainframe Modernization managed application in the mainframe resource summary.
     */
    m2ManagedApplication?: M2ManagedApplicationSummary;
    /**
     * The AWS Mainframe Modernization non-managed application in the mainframe resource summary.
     */
    m2NonManagedApplication?: M2NonManagedApplicationSummary;
  }
  export type MaxResults = number;
  export type NextToken = string;
  export interface Output {
    /**
     * The file of the output.
     */
    file?: OutputFile;
  }
  export interface OutputFile {
    /**
     * The file location of the output file.
     */
    fileLocation?: S3Uri;
  }
  export type Properties = {[key: string]: String};
  export interface Resource {
    /**
     * The name of the resource.
     */
    name: ResourceName;
    /**
     * The type of the resource.
     */
    type: ResourceType;
  }
  export interface ResourceAction {
    /**
     * The AWS Mainframe Modernization managed application action of the resource action.
     */
    m2ManagedApplicationAction?: M2ManagedApplicationAction;
    /**
     * The AWS Mainframe Modernization non-managed application action of the resource action.
     */
    m2NonManagedApplicationAction?: M2NonManagedApplicationAction;
    /**
     * The CloudFormation action of the resource action.
     */
    cloudFormationAction?: CloudFormationAction;
  }
  export interface ResourceActionSummary {
    /**
     * The CloudFormation template of the resource action summary.
     */
    cloudFormation?: CloudFormationStepSummary;
    /**
     * The AWS Mainframe Modernization managed application of the resource action summary.
     */
    m2ManagedApplication?: M2ManagedApplicationStepSummary;
    /**
     * The AWS Mainframe Modernization non-managed application of the resource action summary.
     */
    m2NonManagedApplication?: M2NonManagedApplicationStepSummary;
  }
  export type ResourceDescription = string;
  export type ResourceList = Resource[];
  export type ResourceName = string;
  export interface ResourceType {
    /**
     * The CloudFormation template of the resource type.
     */
    cloudFormation?: CloudFormation;
    /**
     * The AWS Mainframe Modernization managed application of the resource type.
     */
    m2ManagedApplication?: M2ManagedApplication;
    /**
     * The AWS Mainframe Modernization non-managed application of the resource type.
     */
    m2NonManagedApplication?: M2NonManagedApplication;
  }
  export type S3Uri = string;
  export interface Script {
    /**
     * The script location of the scripts.
     */
    scriptLocation: S3Uri;
    /**
     * The type of the scripts.
     */
    type: ScriptType;
  }
  export interface ScriptSummary {
    /**
     * The script location of the script summary.
     */
    scriptLocation: S3Uri;
    /**
     * The type of the script summary.
     */
    type: ScriptType;
  }
  export type ScriptType = "Selenium"|string;
  export interface ServiceSettings {
    /**
     * The KMS key ID of the service settings.
     */
    kmsKeyId?: String;
  }
  export type SourceDatabase = "z/OS-DB2"|string;
  export interface SourceDatabaseMetadata {
    /**
     * The type of the source database metadata.
     */
    type: SourceDatabase;
    /**
     * The capture tool of the source database metadata.
     */
    captureTool: CaptureTool;
  }
  export interface StartTestRunRequest {
    /**
     * The test suite ID of the test run.
     */
    testSuiteId: Identifier;
    /**
     * The configuration ID of the test run.
     */
    testConfigurationId?: Identifier;
    /**
     * The client token of the test run.
     */
    clientToken?: IdempotencyTokenString;
    /**
     * The tags of the test run.
     */
    tags?: TagMap;
  }
  export interface StartTestRunResponse {
    /**
     * The test run ID of the test run.
     */
    testRunId: Identifier;
    /**
     * The test run status of the test run.
     */
    testRunStatus: TestRunStatus;
  }
  export interface Step {
    /**
     * The name of the step.
     */
    name: ResourceName;
    /**
     * The description of the step.
     */
    description?: ResourceDescription;
    /**
     * The action of the step.
     */
    action: StepAction;
  }
  export interface StepAction {
    /**
     * The resource action of the step action.
     */
    resourceAction?: ResourceAction;
    /**
     * The mainframe action of the step action.
     */
    mainframeAction?: MainframeAction;
    /**
     * The compare action of the step action.
     */
    compareAction?: CompareAction;
  }
  export type StepList = Step[];
  export type StepRunStatus = "Success"|"Failed"|"Running"|string;
  export interface StepRunSummary {
    /**
     * The mainframe action of the step run summary.
     */
    mainframeAction?: MainframeActionSummary;
    /**
     * The compare action of the step run summary.
     */
    compareAction?: CompareActionSummary;
    /**
     * The resource action of the step run summary.
     */
    resourceAction?: ResourceActionSummary;
  }
  export type String = string;
  export type String100 = string;
  export type String50 = string;
  export interface TN3270 {
    /**
     * The script of the TN3270 protocol.
     */
    script: Script;
    /**
     * The data set names of the TN3270 protocol.
     */
    exportDataSetNames?: ExportDataSetNames;
  }
  export interface TN3270StepInput {
    /**
     * The resource of the TN3270 step input.
     */
    resource: MainframeResourceSummary;
    /**
     * The script of the TN3270 step input.
     */
    script: ScriptSummary;
    /**
     * The export data set names of the TN3270 step input.
     */
    exportDataSetNames?: ExportDataSetNames;
    /**
     * The properties of the TN3270 step input.
     */
    properties?: MainframeActionProperties;
  }
  export interface TN3270StepOutput {
    /**
     * The data set export location of the TN3270 step output.
     */
    dataSetExportLocation?: S3Uri;
    /**
     * The output location of the TN3270 step output.
     */
    dmsOutputLocation?: S3Uri;
    /**
     * The data set details of the TN3270 step output.
     */
    dataSetDetails?: DataSetList;
    /**
     * The script output location of the TN3270 step output.
     */
    scriptOutputLocation: S3Uri;
  }
  export interface TN3270Summary {
    /**
     * The step input of the TN3270 summary.
     */
    stepInput: TN3270StepInput;
    /**
     * The step output of the TN3270 summary.
     */
    stepOutput?: TN3270StepOutput;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagMap = {[key: string]: TagValue};
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the tag resource.
     */
    resourceArn: Arn;
    /**
     * The tags of the resource.
     */
    tags: TagMap;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type TargetDatabase = "PostgreSQL"|string;
  export interface TargetDatabaseMetadata {
    /**
     * The type of the target database metadata.
     */
    type: TargetDatabase;
    /**
     * The capture tool of the target database metadata.
     */
    captureTool: CaptureTool;
  }
  export type TestCaseIdList = Identifier[];
  export interface TestCaseLatestVersion {
    /**
     * The version of the test case latest version.
     */
    version: Version;
    /**
     * The status of the test case latest version.
     */
    status: TestCaseLifecycle;
    /**
     * The status reason of the test case latest version.
     */
    statusReason?: String;
  }
  export type TestCaseLifecycle = "Active"|"Deleting"|string;
  export type TestCaseList = Identifier[];
  export type TestCaseRunStatus = "Success"|"Running"|"Failed"|string;
  export interface TestCaseRunSummary {
    /**
     * The test case id of the test case run summary.
     */
    testCaseId: Identifier;
    /**
     * The test case version of the test case run summary.
     */
    testCaseVersion: Version;
    /**
     * The test run id of the test case run summary.
     */
    testRunId: Identifier;
    /**
     * The status of the test case run summary.
     */
    status: TestCaseRunStatus;
    /**
     * The status reason of the test case run summary.
     */
    statusReason?: String;
    /**
     * The run start time of the test case run summary.
     */
    runStartTime: Timestamp;
    /**
     * The run end time of the test case run summary.
     */
    runEndTime?: Timestamp;
  }
  export type TestCaseRunSummaryList = TestCaseRunSummary[];
  export interface TestCaseSummary {
    /**
     * The test case ID of the test case summary.
     */
    testCaseId: Identifier;
    /**
     * The test case Amazon Resource Name (ARN) of the test case summary.
     */
    testCaseArn: Arn;
    /**
     * The name of the test case summary.
     */
    name: ResourceName;
    /**
     * The status reason of the test case summary.
     */
    statusReason?: String;
    /**
     * The latest version of the test case summary.
     */
    latestVersion: Version;
    /**
     * The status of the test case summary.
     */
    status: TestCaseLifecycle;
    /**
     * The creation time of the test case summary.
     */
    creationTime: Timestamp;
    /**
     * The last update time of the test case summary.
     */
    lastUpdateTime: Timestamp;
  }
  export type TestCaseSummaryList = TestCaseSummary[];
  export interface TestCases {
    /**
     * The sequential of the test case.
     */
    sequential?: TestCaseList;
  }
  export type TestConfigurationIdList = Identifier[];
  export interface TestConfigurationLatestVersion {
    /**
     * The version of the test configuration latest version.
     */
    version: Version;
    /**
     * The status of the test configuration latest version.
     */
    status: TestConfigurationLifecycle;
    /**
     * The status reason of the test configuration latest version.
     */
    statusReason?: String;
  }
  export type TestConfigurationLifecycle = "Active"|"Deleting"|string;
  export type TestConfigurationList = TestConfigurationSummary[];
  export interface TestConfigurationSummary {
    /**
     * The test configuration ID of the test configuration summary.
     */
    testConfigurationId: Identifier;
    /**
     * The name of the test configuration summary.
     */
    name: ResourceName;
    /**
     * The status reason of the test configuration summary.
     */
    statusReason?: String;
    /**
     * The latest version of the test configuration summary.
     */
    latestVersion: Version;
    /**
     * The test configuration ARN of the test configuration summary.
     */
    testConfigurationArn: Arn;
    /**
     * The status of the test configuration summary.
     */
    status: TestConfigurationLifecycle;
    /**
     * The creation time of the test configuration summary.
     */
    creationTime: Timestamp;
    /**
     * The last update time of the test configuration summary.
     */
    lastUpdateTime: Timestamp;
  }
  export type TestRunIdList = Identifier[];
  export type TestRunStatus = "Success"|"Running"|"Failed"|"Deleting"|string;
  export interface TestRunStepSummary {
    /**
     * The step name of the test run step summary.
     */
    stepName: ResourceName;
    /**
     * The test run ID of the test run step summary.
     */
    testRunId: Identifier;
    /**
     * The test case ID of the test run step summary.
     */
    testCaseId?: Identifier;
    /**
     * The test case version of the test run step summary.
     */
    testCaseVersion?: Version;
    /**
     * The test suite ID of the test run step summary.
     */
    testSuiteId?: Identifier;
    /**
     * The test suite version of the test run step summary.
     */
    testSuiteVersion?: Version;
    /**
     * The before step of the test run step summary.
     */
    beforeStep?: Boolean;
    /**
     * The after step of the test run step summary.
     */
    afterStep?: Boolean;
    /**
     * The status of the test run step summary.
     */
    status: StepRunStatus;
    /**
     * The status reason of the test run step summary.
     */
    statusReason?: String;
    /**
     * The run start time of the test run step summary.
     */
    runStartTime: Timestamp;
    /**
     * The run end time of the test run step summary.
     */
    runEndTime?: Timestamp;
  }
  export type TestRunStepSummaryList = TestRunStepSummary[];
  export interface TestRunSummary {
    /**
     * The test run ID of the test run summary.
     */
    testRunId: Identifier;
    /**
     * The test run ARN of the test run summary.
     */
    testRunArn: Arn;
    /**
     * The test suite ID of the test run summary.
     */
    testSuiteId: Identifier;
    /**
     * The test suite version of the test run summary.
     */
    testSuiteVersion: Version;
    /**
     * The test configuration ID of the test run summary.
     */
    testConfigurationId?: Identifier;
    /**
     * The test configuration version of the test run summary.
     */
    testConfigurationVersion?: Version;
    /**
     * The status of the test run summary.
     */
    status: TestRunStatus;
    /**
     * The status reason of the test run summary.
     */
    statusReason?: String;
    /**
     * The run start time of the test run summary.
     */
    runStartTime: Timestamp;
    /**
     * The run end time of the test run summary.
     */
    runEndTime?: Timestamp;
  }
  export type TestRunSummaryList = TestRunSummary[];
  export type TestSuiteIdList = Identifier[];
  export interface TestSuiteLatestVersion {
    /**
     * The version of the test suite latest version.
     */
    version: Version;
    /**
     * The status of the test suite latest version.
     */
    status: TestSuiteLifecycle;
    /**
     * The status reason of the test suite latest version.
     */
    statusReason?: String;
  }
  export type TestSuiteLifecycle = "Creating"|"Updating"|"Active"|"Failed"|"Deleting"|string;
  export type TestSuiteList = TestSuiteSummary[];
  export interface TestSuiteSummary {
    /**
     * The test suite ID of the test suite summary.
     */
    testSuiteId: Identifier;
    /**
     * The name of the test suite summary.
     */
    name: ResourceName;
    /**
     * The status reason of the test suite summary.
     */
    statusReason?: String;
    /**
     * The latest version of the test suite summary.
     */
    latestVersion: Version;
    /**
     * The test suite Amazon Resource Name (ARN) of the test suite summary.
     */
    testSuiteArn: Arn;
    /**
     * The status of the test suite summary.
     */
    status: TestSuiteLifecycle;
    /**
     * The creation time of the test suite summary.
     */
    creationTime: Timestamp;
    /**
     * The last update time of the test suite summary.
     */
    lastUpdateTime: Timestamp;
  }
  export type Timestamp = Date;
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    resourceArn: Arn;
    /**
     * The tag keys of the resource.
     */
    tagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateTestCaseRequest {
    /**
     * The test case ID of the test case.
     */
    testCaseId: Identifier;
    /**
     * The description of the test case.
     */
    description?: ResourceDescription;
    /**
     * The steps of the test case.
     */
    steps?: StepList;
  }
  export interface UpdateTestCaseResponse {
    /**
     * The test case ID of the test case.
     */
    testCaseId: Identifier;
    /**
     * The test case version of the test case.
     */
    testCaseVersion: Version;
  }
  export interface UpdateTestConfigurationRequest {
    /**
     * The test configuration ID of the test configuration.
     */
    testConfigurationId: Identifier;
    /**
     * The description of the test configuration.
     */
    description?: ResourceDescription;
    /**
     * The resources of the test configuration.
     */
    resources?: ResourceList;
    /**
     * The properties of the test configuration.
     */
    properties?: Properties;
    /**
     * The service settings of the test configuration.
     */
    serviceSettings?: ServiceSettings;
  }
  export interface UpdateTestConfigurationResponse {
    /**
     * The configuration ID of the test configuration.
     */
    testConfigurationId: Identifier;
    /**
     * The configuration version of the test configuration.
     */
    testConfigurationVersion: Version;
  }
  export interface UpdateTestSuiteRequest {
    /**
     * The test suite ID of the test suite.
     */
    testSuiteId: Identifier;
    /**
     * The description of the test suite.
     */
    description?: ResourceDescription;
    /**
     * The before steps for the test suite.
     */
    beforeSteps?: StepList;
    /**
     * The after steps of the test suite.
     */
    afterSteps?: StepList;
    /**
     * The test cases in the test suite.
     */
    testCases?: TestCases;
  }
  export interface UpdateTestSuiteResponse {
    /**
     * The test suite ID of the test suite.
     */
    testSuiteId: Identifier;
    /**
     * The test suite version of the test suite.
     */
    testSuiteVersion?: Version;
  }
  export type Variable = string;
  export type Version = number;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2022-12-06"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the AppTest client.
   */
  export import Types = AppTest;
}
export = AppTest;
