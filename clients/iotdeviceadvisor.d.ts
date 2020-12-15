import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class IotDeviceAdvisor extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: IotDeviceAdvisor.Types.ClientConfiguration)
  config: Config & IotDeviceAdvisor.Types.ClientConfiguration;
  /**
   * Creates a Device Advisor test suite.
   */
  createSuiteDefinition(params: IotDeviceAdvisor.Types.CreateSuiteDefinitionRequest, callback?: (err: AWSError, data: IotDeviceAdvisor.Types.CreateSuiteDefinitionResponse) => void): Request<IotDeviceAdvisor.Types.CreateSuiteDefinitionResponse, AWSError>;
  /**
   * Creates a Device Advisor test suite.
   */
  createSuiteDefinition(callback?: (err: AWSError, data: IotDeviceAdvisor.Types.CreateSuiteDefinitionResponse) => void): Request<IotDeviceAdvisor.Types.CreateSuiteDefinitionResponse, AWSError>;
  /**
   * Deletes a Device Advisor test suite.
   */
  deleteSuiteDefinition(params: IotDeviceAdvisor.Types.DeleteSuiteDefinitionRequest, callback?: (err: AWSError, data: IotDeviceAdvisor.Types.DeleteSuiteDefinitionResponse) => void): Request<IotDeviceAdvisor.Types.DeleteSuiteDefinitionResponse, AWSError>;
  /**
   * Deletes a Device Advisor test suite.
   */
  deleteSuiteDefinition(callback?: (err: AWSError, data: IotDeviceAdvisor.Types.DeleteSuiteDefinitionResponse) => void): Request<IotDeviceAdvisor.Types.DeleteSuiteDefinitionResponse, AWSError>;
  /**
   * Gets information about a Device Advisor test suite.
   */
  getSuiteDefinition(params: IotDeviceAdvisor.Types.GetSuiteDefinitionRequest, callback?: (err: AWSError, data: IotDeviceAdvisor.Types.GetSuiteDefinitionResponse) => void): Request<IotDeviceAdvisor.Types.GetSuiteDefinitionResponse, AWSError>;
  /**
   * Gets information about a Device Advisor test suite.
   */
  getSuiteDefinition(callback?: (err: AWSError, data: IotDeviceAdvisor.Types.GetSuiteDefinitionResponse) => void): Request<IotDeviceAdvisor.Types.GetSuiteDefinitionResponse, AWSError>;
  /**
   * Gets information about a Device Advisor test suite run.
   */
  getSuiteRun(params: IotDeviceAdvisor.Types.GetSuiteRunRequest, callback?: (err: AWSError, data: IotDeviceAdvisor.Types.GetSuiteRunResponse) => void): Request<IotDeviceAdvisor.Types.GetSuiteRunResponse, AWSError>;
  /**
   * Gets information about a Device Advisor test suite run.
   */
  getSuiteRun(callback?: (err: AWSError, data: IotDeviceAdvisor.Types.GetSuiteRunResponse) => void): Request<IotDeviceAdvisor.Types.GetSuiteRunResponse, AWSError>;
  /**
   * Gets a report download link for a successful Device Advisor qualifying test suite run.
   */
  getSuiteRunReport(params: IotDeviceAdvisor.Types.GetSuiteRunReportRequest, callback?: (err: AWSError, data: IotDeviceAdvisor.Types.GetSuiteRunReportResponse) => void): Request<IotDeviceAdvisor.Types.GetSuiteRunReportResponse, AWSError>;
  /**
   * Gets a report download link for a successful Device Advisor qualifying test suite run.
   */
  getSuiteRunReport(callback?: (err: AWSError, data: IotDeviceAdvisor.Types.GetSuiteRunReportResponse) => void): Request<IotDeviceAdvisor.Types.GetSuiteRunReportResponse, AWSError>;
  /**
   * Lists the Device Advisor test suites you have created.
   */
  listSuiteDefinitions(params: IotDeviceAdvisor.Types.ListSuiteDefinitionsRequest, callback?: (err: AWSError, data: IotDeviceAdvisor.Types.ListSuiteDefinitionsResponse) => void): Request<IotDeviceAdvisor.Types.ListSuiteDefinitionsResponse, AWSError>;
  /**
   * Lists the Device Advisor test suites you have created.
   */
  listSuiteDefinitions(callback?: (err: AWSError, data: IotDeviceAdvisor.Types.ListSuiteDefinitionsResponse) => void): Request<IotDeviceAdvisor.Types.ListSuiteDefinitionsResponse, AWSError>;
  /**
   * Lists the runs of the specified Device Advisor test suite. You can list all runs of the test suite, or the runs of a specific version of the test suite.
   */
  listSuiteRuns(params: IotDeviceAdvisor.Types.ListSuiteRunsRequest, callback?: (err: AWSError, data: IotDeviceAdvisor.Types.ListSuiteRunsResponse) => void): Request<IotDeviceAdvisor.Types.ListSuiteRunsResponse, AWSError>;
  /**
   * Lists the runs of the specified Device Advisor test suite. You can list all runs of the test suite, or the runs of a specific version of the test suite.
   */
  listSuiteRuns(callback?: (err: AWSError, data: IotDeviceAdvisor.Types.ListSuiteRunsResponse) => void): Request<IotDeviceAdvisor.Types.ListSuiteRunsResponse, AWSError>;
  /**
   * Lists the tags attached to an IoT Device Advisor resource.
   */
  listTagsForResource(params: IotDeviceAdvisor.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: IotDeviceAdvisor.Types.ListTagsForResourceResponse) => void): Request<IotDeviceAdvisor.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists the tags attached to an IoT Device Advisor resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: IotDeviceAdvisor.Types.ListTagsForResourceResponse) => void): Request<IotDeviceAdvisor.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists all the test cases in the test suite.
   */
  listTestCases(params: IotDeviceAdvisor.Types.ListTestCasesRequest, callback?: (err: AWSError, data: IotDeviceAdvisor.Types.ListTestCasesResponse) => void): Request<IotDeviceAdvisor.Types.ListTestCasesResponse, AWSError>;
  /**
   * Lists all the test cases in the test suite.
   */
  listTestCases(callback?: (err: AWSError, data: IotDeviceAdvisor.Types.ListTestCasesResponse) => void): Request<IotDeviceAdvisor.Types.ListTestCasesResponse, AWSError>;
  /**
   * Starts a Device Advisor test suite run.
   */
  startSuiteRun(params: IotDeviceAdvisor.Types.StartSuiteRunRequest, callback?: (err: AWSError, data: IotDeviceAdvisor.Types.StartSuiteRunResponse) => void): Request<IotDeviceAdvisor.Types.StartSuiteRunResponse, AWSError>;
  /**
   * Starts a Device Advisor test suite run.
   */
  startSuiteRun(callback?: (err: AWSError, data: IotDeviceAdvisor.Types.StartSuiteRunResponse) => void): Request<IotDeviceAdvisor.Types.StartSuiteRunResponse, AWSError>;
  /**
   * Adds to and modifies existing tags of an IoT Device Advisor resource.
   */
  tagResource(params: IotDeviceAdvisor.Types.TagResourceRequest, callback?: (err: AWSError, data: IotDeviceAdvisor.Types.TagResourceResponse) => void): Request<IotDeviceAdvisor.Types.TagResourceResponse, AWSError>;
  /**
   * Adds to and modifies existing tags of an IoT Device Advisor resource.
   */
  tagResource(callback?: (err: AWSError, data: IotDeviceAdvisor.Types.TagResourceResponse) => void): Request<IotDeviceAdvisor.Types.TagResourceResponse, AWSError>;
  /**
   * Removes tags from an IoT Device Advisor resource.
   */
  untagResource(params: IotDeviceAdvisor.Types.UntagResourceRequest, callback?: (err: AWSError, data: IotDeviceAdvisor.Types.UntagResourceResponse) => void): Request<IotDeviceAdvisor.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes tags from an IoT Device Advisor resource.
   */
  untagResource(callback?: (err: AWSError, data: IotDeviceAdvisor.Types.UntagResourceResponse) => void): Request<IotDeviceAdvisor.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates a Device Advisor test suite.
   */
  updateSuiteDefinition(params: IotDeviceAdvisor.Types.UpdateSuiteDefinitionRequest, callback?: (err: AWSError, data: IotDeviceAdvisor.Types.UpdateSuiteDefinitionResponse) => void): Request<IotDeviceAdvisor.Types.UpdateSuiteDefinitionResponse, AWSError>;
  /**
   * Updates a Device Advisor test suite.
   */
  updateSuiteDefinition(callback?: (err: AWSError, data: IotDeviceAdvisor.Types.UpdateSuiteDefinitionResponse) => void): Request<IotDeviceAdvisor.Types.UpdateSuiteDefinitionResponse, AWSError>;
}
declare namespace IotDeviceAdvisor {
  export type AmazonResourceName = string;
  export type CategoryName = string;
  export type ConfigString = string;
  export interface CreateSuiteDefinitionRequest {
    /**
     * Creates a Device Advisor test suite with suite definition configuration.
     */
    suiteDefinitionConfiguration?: SuiteDefinitionConfiguration;
    /**
     * The tags to be attached to the suite definition.
     */
    tags?: TagMap;
  }
  export interface CreateSuiteDefinitionResponse {
    /**
     * Creates a Device Advisor test suite with suite UUID.
     */
    suiteDefinitionId?: UUID;
    /**
     * Creates a Device Advisor test suite with Amazon Resource name.
     */
    suiteDefinitionArn?: AmazonResourceName;
    /**
     * Creates a Device Advisor test suite with suite definition name.
     */
    suiteDefinitionName?: SuiteDefinitionName;
    /**
     * Creates a Device Advisor test suite with TimeStamp of when it was created.
     */
    createdAt?: Timestamp;
  }
  export interface DeleteSuiteDefinitionRequest {
    /**
     * Deletes a Device Advisor test suite with defined suite Id.
     */
    suiteDefinitionId: UUID;
  }
  export interface DeleteSuiteDefinitionResponse {
  }
  export interface DeviceUnderTest {
    /**
     * Lists devices thing arn
     */
    thingArn?: AmazonResourceName;
    /**
     * Lists devices certificate arn
     */
    certificateArn?: AmazonResourceName;
  }
  export type DeviceUnderTestList = DeviceUnderTest[];
  export type ErrorReason = string;
  export type Failure = string;
  export interface GetSuiteDefinitionRequest {
    /**
     * Requests suite definition Id with GetSuiteDefinition API call.
     */
    suiteDefinitionId: UUID;
    /**
     * Requests the suite definition version of a test suite.
     */
    suiteDefinitionVersion?: SuiteDefinitionVersion;
  }
  export interface GetSuiteDefinitionResponse {
    /**
     * Gets suite definition Id with GetSuiteDefinition API call.
     */
    suiteDefinitionId?: UUID;
    /**
     * The ARN of the suite definition.
     */
    suiteDefinitionArn?: AmazonResourceName;
    /**
     * Gets suite definition version with GetSuiteDefinition API call.
     */
    suiteDefinitionVersion?: SuiteDefinitionVersion;
    /**
     * Gets latest suite definition version with GetSuiteDefinition API call.
     */
    latestVersion?: SuiteDefinitionVersion;
    /**
     * Gets the suite configuration with GetSuiteDefinition API call.
     */
    suiteDefinitionConfiguration?: SuiteDefinitionConfiguration;
    /**
     * Gets the timestamp of the time suite was created with GetSuiteDefinition API call.
     */
    createdAt?: Timestamp;
    /**
     * Gets the timestamp of the time suite was modified with GetSuiteDefinition API call.
     */
    lastModifiedAt?: Timestamp;
    /**
     * Tags attached to the suite definition.
     */
    tags?: TagMap;
  }
  export interface GetSuiteRunReportRequest {
    /**
     * Device Advisor suite definition Id.
     */
    suiteDefinitionId: UUID;
    /**
     * Device Advisor suite run Id.
     */
    suiteRunId: UUID;
  }
  export interface GetSuiteRunReportResponse {
    /**
     * Gets the download URL of the qualification report.
     */
    qualificationReportDownloadUrl?: QualificationReportDownloadUrl;
  }
  export interface GetSuiteRunRequest {
    /**
     * Requests the information about Device Advisor test suite run based on suite definition Id.
     */
    suiteDefinitionId: UUID;
    /**
     * Requests the information about Device Advisor test suite run based on suite run Id.
     */
    suiteRunId: UUID;
  }
  export interface GetSuiteRunResponse {
    /**
     * Gets the information about Device Advisor test suite run based on suite definition Id.
     */
    suiteDefinitionId?: UUID;
    /**
     * Gets the information about Device Advisor test suite run based on suite definition version.
     */
    suiteDefinitionVersion?: SuiteDefinitionVersion;
    /**
     * Gets the information about Device Advisor test suite run based on suite run Id.
     */
    suiteRunId?: UUID;
    /**
     * The ARN of the suite run.
     */
    suiteRunArn?: AmazonResourceName;
    /**
     * Gets the information about Device Advisor test suite run based on suite configuration.
     */
    suiteRunConfiguration?: SuiteRunConfiguration;
    /**
     * Gets the information about Device Advisor test suite run based on test case runs.
     */
    testResult?: TestResult;
    /**
     * Gets the information about Device Advisor test suite run based on start time.
     */
    startTime?: Timestamp;
    /**
     * Gets the information about Device Advisor test suite run based on end time.
     */
    endTime?: Timestamp;
    /**
     * Gets the information about Device Advisor test suite run based on its status.
     */
    status?: SuiteRunStatus;
    /**
     * Gets the information about Device Advisor test suite run based on error.
     */
    errorReason?: ErrorReason;
    /**
     * The tags attached to the suite run.
     */
    tags?: TagMap;
  }
  export type GroupName = string;
  export interface GroupResult {
    /**
     * Show Group Result Id.
     */
    groupId?: UUID;
    /**
     * Show Group Result Name.
     */
    groupName?: GroupName;
    /**
     * Show Group Result.
     */
    tests?: TestCaseRuns;
  }
  export type GroupResultList = GroupResult[];
  export type IntendedForQualificationBoolean = boolean;
  export interface ListSuiteDefinitionsRequest {
    /**
     * Request the list of all the Device Advisor test suites.
     */
    maxResults?: MaxResults;
    /**
     * Requests the Device Advisor test suites next token.
     */
    nextToken?: Token;
  }
  export interface ListSuiteDefinitionsResponse {
    /**
     * Lists test suite information using List suite definition.
     */
    suiteDefinitionInformationList?: SuiteDefinitionInformationList;
    /**
     * Creates a Device Advisor test suite.
     */
    nextToken?: Token;
  }
  export interface ListSuiteRunsRequest {
    /**
     * Lists the runs of the specified Device Advisor test suite based on suite definition Id.
     */
    suiteDefinitionId?: UUID;
    /**
     * Lists the runs of the specified Device Advisor test suite based on suite definition version.
     */
    suiteDefinitionVersion?: SuiteDefinitionVersion;
    /**
     * MaxResults for list suite run API request.
     */
    maxResults?: MaxResults;
    /**
     * Next pagination token for list suite run request.
     */
    nextToken?: Token;
  }
  export interface ListSuiteRunsResponse {
    /**
     * Lists the runs of the specified Device Advisor test suite.
     */
    suiteRunsList?: SuiteRunsList;
    /**
     * Next pagination token for list suite run response.
     */
    nextToken?: Token;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The ARN of the IoT Device Advisor resource.
     */
    resourceArn: AmazonResourceName;
  }
  export interface ListTagsForResourceResponse {
    /**
     * The tags attached to the IoT Device Advisor resource.
     */
    tags?: TagMap;
  }
  export interface ListTestCasesRequest {
    /**
     * Lists all the qualification test cases in the test suite.
     */
    intendedForQualification?: IntendedForQualificationBoolean;
    /**
     * Requests the test cases max results.
     */
    maxResults?: MaxResults;
    /**
     * Requests the test cases next token.
     */
    nextToken?: Token;
  }
  export interface ListTestCasesResponse {
    /**
     * Gets the category of test case.
     */
    categories?: TestCategory;
    /**
     * Gets the configuration of root test group.
     */
    rootGroupConfiguration?: TestConfiguration;
    /**
     * Gets the configuration of test group.
     */
    groupConfiguration?: TestConfiguration;
    /**
     * Test cases next token response.
     */
    nextToken?: Token;
  }
  export type LogUrl = string;
  export type MaxResults = number;
  export type QualificationReportDownloadUrl = string;
  export type RootGroup = string;
  export type SelectedTestList = UUID[];
  export interface StartSuiteRunRequest {
    /**
     * Request to start suite run based on suite definition Id.
     */
    suiteDefinitionId: UUID;
    /**
     * Request to start suite run based on suite definition version.
     */
    suiteDefinitionVersion?: SuiteDefinitionVersion;
    /**
     * Request to start suite run based on suite configuration.
     */
    suiteRunConfiguration?: SuiteRunConfiguration;
    /**
     * The tags to be attached to the suite run.
     */
    tags?: TagMap;
  }
  export interface StartSuiteRunResponse {
    /**
     * Starts a Device Advisor test suite run based on suite Run Id.
     */
    suiteRunId?: UUID;
    /**
     * Starts a Device Advisor test suite run based on suite run arn.
     */
    suiteRunArn?: AmazonResourceName;
    /**
     * Starts a Device Advisor test suite run based on suite create time.
     */
    createdAt?: Timestamp;
  }
  export type Status = "PASS"|"FAIL"|"CANCELED"|"PENDING"|"RUNNING"|"PASS_WITH_WARNINGS"|"ERROR"|string;
  export type String128 = string;
  export type String256 = string;
  export interface SuiteDefinitionConfiguration {
    /**
     * Gets Suite Definition Configuration name.
     */
    suiteDefinitionName?: SuiteDefinitionName;
    /**
     * Gets the devices configured.
     */
    devices?: DeviceUnderTestList;
    /**
     * Gets the tests intended for qualification in a suite.
     */
    intendedForQualification?: IntendedForQualificationBoolean;
    /**
     * Gets test suite root group.
     */
    rootGroup?: RootGroup;
    /**
     * Gets device permission arn.
     */
    devicePermissionRoleArn?: AmazonResourceName;
  }
  export interface SuiteDefinitionInformation {
    /**
     * Get suite definition Id.
     */
    suiteDefinitionId?: UUID;
    /**
     * Get test suite name.
     */
    suiteDefinitionName?: SuiteDefinitionName;
    /**
     * Specifies the devices under test.
     */
    defaultDevices?: DeviceUnderTestList;
    /**
     * Gets the test suites which will be used for qualification.
     */
    intendedForQualification?: IntendedForQualificationBoolean;
    /**
     * Gets the information of when the test suite was created.
     */
    createdAt?: Timestamp;
  }
  export type SuiteDefinitionInformationList = SuiteDefinitionInformation[];
  export type SuiteDefinitionName = string;
  export type SuiteDefinitionVersion = string;
  export interface SuiteRunConfiguration {
    /**
     * Gets the primary device for suite run.
     */
    primaryDevice?: DeviceUnderTest;
    /**
     * Gets the secondary device for suite run.
     */
    secondaryDevice?: DeviceUnderTest;
    /**
     * Gets test case list.
     */
    selectedTestList?: SelectedTestList;
  }
  export interface SuiteRunInformation {
    /**
     * Get suite run information based on suite definition Id.
     */
    suiteDefinitionId?: UUID;
    /**
     * Get suite run information based on suite definition version.
     */
    suiteDefinitionVersion?: SuiteDefinitionVersion;
    /**
     * Get suite run information based on suite definition name.
     */
    suiteDefinitionName?: SuiteDefinitionName;
    /**
     * Get suite run information based on suite run Id.
     */
    suiteRunId?: UUID;
    /**
     * Get suite run information based on time suite was created.
     */
    createdAt?: Timestamp;
    /**
     * Get suite run information based on start time of the run.
     */
    startedAt?: Timestamp;
    /**
     * Get suite run information based on end time of the run.
     */
    endAt?: Timestamp;
    /**
     * Get suite run information based on test run status.
     */
    status?: SuiteRunStatus;
    /**
     * Get suite run information based on result of the test suite run.
     */
    passed?: SuiteRunResultCount;
    /**
     * Get suite run information based on result of the test suite run.
     */
    failed?: SuiteRunResultCount;
  }
  export type SuiteRunResultCount = number;
  export type SuiteRunStatus = "PASS"|"FAIL"|"CANCELED"|"PENDING"|"RUNNING"|"PASS_WITH_WARNINGS"|"ERROR"|string;
  export type SuiteRunsList = SuiteRunInformation[];
  export type TagKeyList = String128[];
  export type TagMap = {[key: string]: String256};
  export interface TagResourceRequest {
    /**
     * The resource ARN of an IoT Device Advisor resource.
     */
    resourceArn: AmazonResourceName;
    /**
     * The tags to be attached to the IoT Device Advisor resource.
     */
    tags: TagMap;
  }
  export interface TagResourceResponse {
  }
  export interface TestCase {
    /**
     * Shows test case name.
     */
    name?: TestCaseName;
    /**
     * Shows test case configuration.
     */
    configuration?: TestConfiguration;
    /**
     * Specifies a test.
     */
    test?: TestCaseDefinition;
  }
  export interface TestCaseCategory {
    /**
     * Lists all the tests name in the specified category.
     */
    name?: CategoryName;
    /**
     * Lists all the tests in the specified category.
     */
    tests?: TestCaseList;
  }
  export interface TestCaseDefinition {
    /**
     * Provides test case definition Id.
     */
    id?: TestCaseName;
    /**
     * Provides test case definition version.
     */
    testCaseVersion?: TestCaseVersion;
  }
  export type TestCaseDefinitionName = string;
  export type TestCaseList = TestCase[];
  export type TestCaseName = string;
  export interface TestCaseRun {
    /**
     * Provides test case run Id.
     */
    testCaseRunId?: UUID;
    /**
     * Provides test case run definition Id.
     */
    testCaseDefinitionId?: UUID;
    /**
     * Provides test case run definition Name.
     */
    testCaseDefinitionName?: TestCaseDefinitionName;
    /**
     * Provides test case run status.
     */
    status?: Status;
    /**
     * Provides test case run start time.
     */
    startTime?: Timestamp;
    /**
     * Provides test case run end time.
     */
    endTime?: Timestamp;
    /**
     * Provides test case run log Url.
     */
    logUrl?: LogUrl;
    /**
     * Provides test case run warnings.
     */
    warnings?: Warnings;
    /**
     * Provides test case run failure result.
     */
    failure?: Failure;
  }
  export type TestCaseRuns = TestCaseRun[];
  export type TestCaseVersion = string;
  export type TestCategory = TestCaseCategory[];
  export type TestConfiguration = {[key: string]: ConfigString};
  export interface TestResult {
    /**
     * Show each group of test results.
     */
    groups?: GroupResultList;
  }
  export type Timestamp = Date;
  export type Token = string;
  export type UUID = string;
  export interface UntagResourceRequest {
    /**
     * The resource ARN of an IoT Device Advisor resource.
     */
    resourceArn: AmazonResourceName;
    /**
     * List of tag keys to remove from the IoT Device Advisor resource.
     */
    tagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateSuiteDefinitionRequest {
    /**
     * Updates a Device Advisor test suite with suite definition id.
     */
    suiteDefinitionId: UUID;
    /**
     * Updates a Device Advisor test suite with suite definition configuration.
     */
    suiteDefinitionConfiguration?: SuiteDefinitionConfiguration;
  }
  export interface UpdateSuiteDefinitionResponse {
    /**
     * Updates a Device Advisor test suite with suite UUID.
     */
    suiteDefinitionId?: UUID;
    /**
     * Updates a Device Advisor test suite with Amazon Resource name.
     */
    suiteDefinitionArn?: AmazonResourceName;
    /**
     * Updates a Device Advisor test suite with suite definition name.
     */
    suiteDefinitionName?: SuiteDefinitionName;
    /**
     * Updates a Device Advisor test suite with suite definition version.
     */
    suiteDefinitionVersion?: SuiteDefinitionVersion;
    /**
     * Updates a Device Advisor test suite with TimeStamp of when it was created.
     */
    createdAt?: Timestamp;
    /**
     * Updates a Device Advisor test suite with TimeStamp of when it was updated.
     */
    lastUpdatedAt?: Timestamp;
  }
  export type Warnings = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2020-09-18"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the IotDeviceAdvisor client.
   */
  export import Types = IotDeviceAdvisor;
}
export = IotDeviceAdvisor;
