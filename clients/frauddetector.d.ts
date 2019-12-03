import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class FraudDetector extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: FraudDetector.Types.ClientConfiguration)
  config: Config & FraudDetector.Types.ClientConfiguration;
  /**
   * Creates a batch of variables.
   */
  batchCreateVariable(params: FraudDetector.Types.BatchCreateVariableRequest, callback?: (err: AWSError, data: FraudDetector.Types.BatchCreateVariableResult) => void): Request<FraudDetector.Types.BatchCreateVariableResult, AWSError>;
  /**
   * Creates a batch of variables.
   */
  batchCreateVariable(callback?: (err: AWSError, data: FraudDetector.Types.BatchCreateVariableResult) => void): Request<FraudDetector.Types.BatchCreateVariableResult, AWSError>;
  /**
   * Gets a batch of variables.
   */
  batchGetVariable(params: FraudDetector.Types.BatchGetVariableRequest, callback?: (err: AWSError, data: FraudDetector.Types.BatchGetVariableResult) => void): Request<FraudDetector.Types.BatchGetVariableResult, AWSError>;
  /**
   * Gets a batch of variables.
   */
  batchGetVariable(callback?: (err: AWSError, data: FraudDetector.Types.BatchGetVariableResult) => void): Request<FraudDetector.Types.BatchGetVariableResult, AWSError>;
  /**
   * Creates a detector version. The detector version starts in a DRAFT status.
   */
  createDetectorVersion(params: FraudDetector.Types.CreateDetectorVersionRequest, callback?: (err: AWSError, data: FraudDetector.Types.CreateDetectorVersionResult) => void): Request<FraudDetector.Types.CreateDetectorVersionResult, AWSError>;
  /**
   * Creates a detector version. The detector version starts in a DRAFT status.
   */
  createDetectorVersion(callback?: (err: AWSError, data: FraudDetector.Types.CreateDetectorVersionResult) => void): Request<FraudDetector.Types.CreateDetectorVersionResult, AWSError>;
  /**
   * Creates a version of the model using the specified model type. 
   */
  createModelVersion(params: FraudDetector.Types.CreateModelVersionRequest, callback?: (err: AWSError, data: FraudDetector.Types.CreateModelVersionResult) => void): Request<FraudDetector.Types.CreateModelVersionResult, AWSError>;
  /**
   * Creates a version of the model using the specified model type. 
   */
  createModelVersion(callback?: (err: AWSError, data: FraudDetector.Types.CreateModelVersionResult) => void): Request<FraudDetector.Types.CreateModelVersionResult, AWSError>;
  /**
   * Creates a rule for use with the specified detector. 
   */
  createRule(params: FraudDetector.Types.CreateRuleRequest, callback?: (err: AWSError, data: FraudDetector.Types.CreateRuleResult) => void): Request<FraudDetector.Types.CreateRuleResult, AWSError>;
  /**
   * Creates a rule for use with the specified detector. 
   */
  createRule(callback?: (err: AWSError, data: FraudDetector.Types.CreateRuleResult) => void): Request<FraudDetector.Types.CreateRuleResult, AWSError>;
  /**
   * Creates a variable.
   */
  createVariable(params: FraudDetector.Types.CreateVariableRequest, callback?: (err: AWSError, data: FraudDetector.Types.CreateVariableResult) => void): Request<FraudDetector.Types.CreateVariableResult, AWSError>;
  /**
   * Creates a variable.
   */
  createVariable(callback?: (err: AWSError, data: FraudDetector.Types.CreateVariableResult) => void): Request<FraudDetector.Types.CreateVariableResult, AWSError>;
  /**
   * Deletes the detector version.
   */
  deleteDetectorVersion(params: FraudDetector.Types.DeleteDetectorVersionRequest, callback?: (err: AWSError, data: FraudDetector.Types.DeleteDetectorVersionResult) => void): Request<FraudDetector.Types.DeleteDetectorVersionResult, AWSError>;
  /**
   * Deletes the detector version.
   */
  deleteDetectorVersion(callback?: (err: AWSError, data: FraudDetector.Types.DeleteDetectorVersionResult) => void): Request<FraudDetector.Types.DeleteDetectorVersionResult, AWSError>;
  /**
   * Deletes the specified event.
   */
  deleteEvent(params: FraudDetector.Types.DeleteEventRequest, callback?: (err: AWSError, data: FraudDetector.Types.DeleteEventResult) => void): Request<FraudDetector.Types.DeleteEventResult, AWSError>;
  /**
   * Deletes the specified event.
   */
  deleteEvent(callback?: (err: AWSError, data: FraudDetector.Types.DeleteEventResult) => void): Request<FraudDetector.Types.DeleteEventResult, AWSError>;
  /**
   * Gets all versions for a specified detector.
   */
  describeDetector(params: FraudDetector.Types.DescribeDetectorRequest, callback?: (err: AWSError, data: FraudDetector.Types.DescribeDetectorResult) => void): Request<FraudDetector.Types.DescribeDetectorResult, AWSError>;
  /**
   * Gets all versions for a specified detector.
   */
  describeDetector(callback?: (err: AWSError, data: FraudDetector.Types.DescribeDetectorResult) => void): Request<FraudDetector.Types.DescribeDetectorResult, AWSError>;
  /**
   * Gets all of the model versions for the specified model type or for the specified model type and model ID. You can also get details for a single, specified model version. 
   */
  describeModelVersions(params: FraudDetector.Types.DescribeModelVersionsRequest, callback?: (err: AWSError, data: FraudDetector.Types.DescribeModelVersionsResult) => void): Request<FraudDetector.Types.DescribeModelVersionsResult, AWSError>;
  /**
   * Gets all of the model versions for the specified model type or for the specified model type and model ID. You can also get details for a single, specified model version. 
   */
  describeModelVersions(callback?: (err: AWSError, data: FraudDetector.Types.DescribeModelVersionsResult) => void): Request<FraudDetector.Types.DescribeModelVersionsResult, AWSError>;
  /**
   * Gets a particular detector version. 
   */
  getDetectorVersion(params: FraudDetector.Types.GetDetectorVersionRequest, callback?: (err: AWSError, data: FraudDetector.Types.GetDetectorVersionResult) => void): Request<FraudDetector.Types.GetDetectorVersionResult, AWSError>;
  /**
   * Gets a particular detector version. 
   */
  getDetectorVersion(callback?: (err: AWSError, data: FraudDetector.Types.GetDetectorVersionResult) => void): Request<FraudDetector.Types.GetDetectorVersionResult, AWSError>;
  /**
   * Gets all of detectors. This is a paginated API. If you provide a null maxSizePerPage, this actions retrieves a maximum of 10 records per page. If you provide a maxSizePerPage, the value must be between 5 and 10. To get the next page results, provide the pagination token from the GetEventTypesResponse as part of your request. A null pagination token fetches the records from the beginning. 
   */
  getDetectors(params: FraudDetector.Types.GetDetectorsRequest, callback?: (err: AWSError, data: FraudDetector.Types.GetDetectorsResult) => void): Request<FraudDetector.Types.GetDetectorsResult, AWSError>;
  /**
   * Gets all of detectors. This is a paginated API. If you provide a null maxSizePerPage, this actions retrieves a maximum of 10 records per page. If you provide a maxSizePerPage, the value must be between 5 and 10. To get the next page results, provide the pagination token from the GetEventTypesResponse as part of your request. A null pagination token fetches the records from the beginning. 
   */
  getDetectors(callback?: (err: AWSError, data: FraudDetector.Types.GetDetectorsResult) => void): Request<FraudDetector.Types.GetDetectorsResult, AWSError>;
  /**
   * Gets the details for one or more Amazon SageMaker models that have been imported into the service. This is a paginated API. If you provide a null maxSizePerPage, this actions retrieves a maximum of 10 records per page. If you provide a maxSizePerPage, the value must be between 5 and 10. To get the next page results, provide the pagination token from the GetExternalModelsResult as part of your request. A null pagination token fetches the records from the beginning. 
   */
  getExternalModels(params: FraudDetector.Types.GetExternalModelsRequest, callback?: (err: AWSError, data: FraudDetector.Types.GetExternalModelsResult) => void): Request<FraudDetector.Types.GetExternalModelsResult, AWSError>;
  /**
   * Gets the details for one or more Amazon SageMaker models that have been imported into the service. This is a paginated API. If you provide a null maxSizePerPage, this actions retrieves a maximum of 10 records per page. If you provide a maxSizePerPage, the value must be between 5 and 10. To get the next page results, provide the pagination token from the GetExternalModelsResult as part of your request. A null pagination token fetches the records from the beginning. 
   */
  getExternalModels(callback?: (err: AWSError, data: FraudDetector.Types.GetExternalModelsResult) => void): Request<FraudDetector.Types.GetExternalModelsResult, AWSError>;
  /**
   * Gets a model version. 
   */
  getModelVersion(params: FraudDetector.Types.GetModelVersionRequest, callback?: (err: AWSError, data: FraudDetector.Types.GetModelVersionResult) => void): Request<FraudDetector.Types.GetModelVersionResult, AWSError>;
  /**
   * Gets a model version. 
   */
  getModelVersion(callback?: (err: AWSError, data: FraudDetector.Types.GetModelVersionResult) => void): Request<FraudDetector.Types.GetModelVersionResult, AWSError>;
  /**
   * Gets all of the models for the AWS account, or the specified model type, or gets a single model for the specified model type, model ID combination. 
   */
  getModels(params: FraudDetector.Types.GetModelsRequest, callback?: (err: AWSError, data: FraudDetector.Types.GetModelsResult) => void): Request<FraudDetector.Types.GetModelsResult, AWSError>;
  /**
   * Gets all of the models for the AWS account, or the specified model type, or gets a single model for the specified model type, model ID combination. 
   */
  getModels(callback?: (err: AWSError, data: FraudDetector.Types.GetModelsResult) => void): Request<FraudDetector.Types.GetModelsResult, AWSError>;
  /**
   * Gets one or more outcomes. This is a paginated API. If you provide a null maxSizePerPage, this actions retrieves a maximum of 10 records per page. If you provide a maxSizePerPage, the value must be between 50 and 100. To get the next page results, provide the pagination token from the GetOutcomesResult as part of your request. A null pagination token fetches the records from the beginning. 
   */
  getOutcomes(params: FraudDetector.Types.GetOutcomesRequest, callback?: (err: AWSError, data: FraudDetector.Types.GetOutcomesResult) => void): Request<FraudDetector.Types.GetOutcomesResult, AWSError>;
  /**
   * Gets one or more outcomes. This is a paginated API. If you provide a null maxSizePerPage, this actions retrieves a maximum of 10 records per page. If you provide a maxSizePerPage, the value must be between 50 and 100. To get the next page results, provide the pagination token from the GetOutcomesResult as part of your request. A null pagination token fetches the records from the beginning. 
   */
  getOutcomes(callback?: (err: AWSError, data: FraudDetector.Types.GetOutcomesResult) => void): Request<FraudDetector.Types.GetOutcomesResult, AWSError>;
  /**
   * Evaluates an event against a detector version. If a version ID is not provided, the detector’s (ACTIVE) version is used. 
   */
  getPrediction(params: FraudDetector.Types.GetPredictionRequest, callback?: (err: AWSError, data: FraudDetector.Types.GetPredictionResult) => void): Request<FraudDetector.Types.GetPredictionResult, AWSError>;
  /**
   * Evaluates an event against a detector version. If a version ID is not provided, the detector’s (ACTIVE) version is used. 
   */
  getPrediction(callback?: (err: AWSError, data: FraudDetector.Types.GetPredictionResult) => void): Request<FraudDetector.Types.GetPredictionResult, AWSError>;
  /**
   * Gets all rules available for the specified detector.
   */
  getRules(params: FraudDetector.Types.GetRulesRequest, callback?: (err: AWSError, data: FraudDetector.Types.GetRulesResult) => void): Request<FraudDetector.Types.GetRulesResult, AWSError>;
  /**
   * Gets all rules available for the specified detector.
   */
  getRules(callback?: (err: AWSError, data: FraudDetector.Types.GetRulesResult) => void): Request<FraudDetector.Types.GetRulesResult, AWSError>;
  /**
   * Gets all of the variables or the specific variable. This is a paginated API. Providing null maxSizePerPage results in retrieving maximum of 100 records per page. If you provide maxSizePerPage the value must be between 50 and 100. To get the next page result, a provide a pagination token from GetVariablesResult as part of your request. Null pagination token fetches the records from the beginning. 
   */
  getVariables(params: FraudDetector.Types.GetVariablesRequest, callback?: (err: AWSError, data: FraudDetector.Types.GetVariablesResult) => void): Request<FraudDetector.Types.GetVariablesResult, AWSError>;
  /**
   * Gets all of the variables or the specific variable. This is a paginated API. Providing null maxSizePerPage results in retrieving maximum of 100 records per page. If you provide maxSizePerPage the value must be between 50 and 100. To get the next page result, a provide a pagination token from GetVariablesResult as part of your request. Null pagination token fetches the records from the beginning. 
   */
  getVariables(callback?: (err: AWSError, data: FraudDetector.Types.GetVariablesResult) => void): Request<FraudDetector.Types.GetVariablesResult, AWSError>;
  /**
   * Creates or updates a detector. 
   */
  putDetector(params: FraudDetector.Types.PutDetectorRequest, callback?: (err: AWSError, data: FraudDetector.Types.PutDetectorResult) => void): Request<FraudDetector.Types.PutDetectorResult, AWSError>;
  /**
   * Creates or updates a detector. 
   */
  putDetector(callback?: (err: AWSError, data: FraudDetector.Types.PutDetectorResult) => void): Request<FraudDetector.Types.PutDetectorResult, AWSError>;
  /**
   * Creates or updates an Amazon SageMaker model endpoint. You can also use this action to update the configuration of the model endpoint, including the IAM role and/or the mapped variables. 
   */
  putExternalModel(params: FraudDetector.Types.PutExternalModelRequest, callback?: (err: AWSError, data: FraudDetector.Types.PutExternalModelResult) => void): Request<FraudDetector.Types.PutExternalModelResult, AWSError>;
  /**
   * Creates or updates an Amazon SageMaker model endpoint. You can also use this action to update the configuration of the model endpoint, including the IAM role and/or the mapped variables. 
   */
  putExternalModel(callback?: (err: AWSError, data: FraudDetector.Types.PutExternalModelResult) => void): Request<FraudDetector.Types.PutExternalModelResult, AWSError>;
  /**
   * Creates or updates a model. 
   */
  putModel(params: FraudDetector.Types.PutModelRequest, callback?: (err: AWSError, data: FraudDetector.Types.PutModelResult) => void): Request<FraudDetector.Types.PutModelResult, AWSError>;
  /**
   * Creates or updates a model. 
   */
  putModel(callback?: (err: AWSError, data: FraudDetector.Types.PutModelResult) => void): Request<FraudDetector.Types.PutModelResult, AWSError>;
  /**
   * Creates or updates an outcome. 
   */
  putOutcome(params: FraudDetector.Types.PutOutcomeRequest, callback?: (err: AWSError, data: FraudDetector.Types.PutOutcomeResult) => void): Request<FraudDetector.Types.PutOutcomeResult, AWSError>;
  /**
   * Creates or updates an outcome. 
   */
  putOutcome(callback?: (err: AWSError, data: FraudDetector.Types.PutOutcomeResult) => void): Request<FraudDetector.Types.PutOutcomeResult, AWSError>;
  /**
   *  Updates a detector version. The detector version attributes that you can update include models, external model endpoints, rules, and description. You can only update a DRAFT detector version.
   */
  updateDetectorVersion(params: FraudDetector.Types.UpdateDetectorVersionRequest, callback?: (err: AWSError, data: FraudDetector.Types.UpdateDetectorVersionResult) => void): Request<FraudDetector.Types.UpdateDetectorVersionResult, AWSError>;
  /**
   *  Updates a detector version. The detector version attributes that you can update include models, external model endpoints, rules, and description. You can only update a DRAFT detector version.
   */
  updateDetectorVersion(callback?: (err: AWSError, data: FraudDetector.Types.UpdateDetectorVersionResult) => void): Request<FraudDetector.Types.UpdateDetectorVersionResult, AWSError>;
  /**
   * Updates the detector version's description. You can update the metadata for any detector version (DRAFT, ACTIVE, or INACTIVE). 
   */
  updateDetectorVersionMetadata(params: FraudDetector.Types.UpdateDetectorVersionMetadataRequest, callback?: (err: AWSError, data: FraudDetector.Types.UpdateDetectorVersionMetadataResult) => void): Request<FraudDetector.Types.UpdateDetectorVersionMetadataResult, AWSError>;
  /**
   * Updates the detector version's description. You can update the metadata for any detector version (DRAFT, ACTIVE, or INACTIVE). 
   */
  updateDetectorVersionMetadata(callback?: (err: AWSError, data: FraudDetector.Types.UpdateDetectorVersionMetadataResult) => void): Request<FraudDetector.Types.UpdateDetectorVersionMetadataResult, AWSError>;
  /**
   * Updates the detector version’s status. You can perform the following promotions or demotions using UpdateDetectorVersionStatus: DRAFT to ACTIVE, ACTIVE to INACTIVE, and INACTIVE to ACTIVE.
   */
  updateDetectorVersionStatus(params: FraudDetector.Types.UpdateDetectorVersionStatusRequest, callback?: (err: AWSError, data: FraudDetector.Types.UpdateDetectorVersionStatusResult) => void): Request<FraudDetector.Types.UpdateDetectorVersionStatusResult, AWSError>;
  /**
   * Updates the detector version’s status. You can perform the following promotions or demotions using UpdateDetectorVersionStatus: DRAFT to ACTIVE, ACTIVE to INACTIVE, and INACTIVE to ACTIVE.
   */
  updateDetectorVersionStatus(callback?: (err: AWSError, data: FraudDetector.Types.UpdateDetectorVersionStatusResult) => void): Request<FraudDetector.Types.UpdateDetectorVersionStatusResult, AWSError>;
  /**
   * Updates a model version. You can update the description and status attributes using this action. You can perform the following status updates:    Change the TRAINING_COMPLETE status to ACTIVE    Change ACTIVE back to TRAINING_COMPLETE   
   */
  updateModelVersion(params: FraudDetector.Types.UpdateModelVersionRequest, callback?: (err: AWSError, data: FraudDetector.Types.UpdateModelVersionResult) => void): Request<FraudDetector.Types.UpdateModelVersionResult, AWSError>;
  /**
   * Updates a model version. You can update the description and status attributes using this action. You can perform the following status updates:    Change the TRAINING_COMPLETE status to ACTIVE    Change ACTIVE back to TRAINING_COMPLETE   
   */
  updateModelVersion(callback?: (err: AWSError, data: FraudDetector.Types.UpdateModelVersionResult) => void): Request<FraudDetector.Types.UpdateModelVersionResult, AWSError>;
  /**
   * Updates a rule's metadata. 
   */
  updateRuleMetadata(params: FraudDetector.Types.UpdateRuleMetadataRequest, callback?: (err: AWSError, data: FraudDetector.Types.UpdateRuleMetadataResult) => void): Request<FraudDetector.Types.UpdateRuleMetadataResult, AWSError>;
  /**
   * Updates a rule's metadata. 
   */
  updateRuleMetadata(callback?: (err: AWSError, data: FraudDetector.Types.UpdateRuleMetadataResult) => void): Request<FraudDetector.Types.UpdateRuleMetadataResult, AWSError>;
  /**
   * Updates a rule version resulting in a new rule version. 
   */
  updateRuleVersion(params: FraudDetector.Types.UpdateRuleVersionRequest, callback?: (err: AWSError, data: FraudDetector.Types.UpdateRuleVersionResult) => void): Request<FraudDetector.Types.UpdateRuleVersionResult, AWSError>;
  /**
   * Updates a rule version resulting in a new rule version. 
   */
  updateRuleVersion(callback?: (err: AWSError, data: FraudDetector.Types.UpdateRuleVersionResult) => void): Request<FraudDetector.Types.UpdateRuleVersionResult, AWSError>;
  /**
   * Updates a variable.
   */
  updateVariable(params: FraudDetector.Types.UpdateVariableRequest, callback?: (err: AWSError, data: FraudDetector.Types.UpdateVariableResult) => void): Request<FraudDetector.Types.UpdateVariableResult, AWSError>;
  /**
   * Updates a variable.
   */
  updateVariable(callback?: (err: AWSError, data: FraudDetector.Types.UpdateVariableResult) => void): Request<FraudDetector.Types.UpdateVariableResult, AWSError>;
}
declare namespace FraudDetector {
  export interface BatchCreateVariableError {
    /**
     * The name.
     */
    name?: string;
    /**
     * The error code. 
     */
    code?: integer;
    /**
     * The error message.
     */
    message?: string;
  }
  export type BatchCreateVariableErrorList = BatchCreateVariableError[];
  export interface BatchCreateVariableRequest {
    /**
     * The list of variables for the batch create variable request.
     */
    variableEntries: VariableEntryList;
  }
  export interface BatchCreateVariableResult {
    /**
     * Provides the errors for the BatchCreateVariable request.
     */
    errors?: BatchCreateVariableErrorList;
  }
  export interface BatchGetVariableError {
    /**
     * The error name. 
     */
    name?: string;
    /**
     * The error code. 
     */
    code?: integer;
    /**
     * The error message.
     */
    message?: string;
  }
  export type BatchGetVariableErrorList = BatchGetVariableError[];
  export interface BatchGetVariableRequest {
    /**
     * The list of variable names to get.
     */
    names: NameList;
  }
  export interface BatchGetVariableResult {
    /**
     * The returned variables.
     */
    variables?: VariableList;
    /**
     * The errors from the request.
     */
    errors?: BatchGetVariableErrorList;
  }
  export interface CreateDetectorVersionRequest {
    /**
     * The ID of the detector under which you want to create a new version.
     */
    detectorId: identifier;
    /**
     * The description of the detector version.
     */
    description?: description;
    /**
     * The Amazon Sagemaker model endpoints to include in the detector version.
     */
    externalModelEndpoints?: ListOfStrings;
    /**
     * The rules to include in the detector version.
     */
    rules: RuleList;
    /**
     * The model versions to include in the detector version.
     */
    modelVersions?: ListOfModelVersions;
  }
  export interface CreateDetectorVersionResult {
    /**
     * The ID for the created version's parent detector.
     */
    detectorId?: identifier;
    /**
     * The ID for the created detector. 
     */
    detectorVersionId?: nonEmptyString;
    /**
     * The status of the detector version.
     */
    status?: DetectorVersionStatus;
  }
  export interface CreateModelVersionRequest {
    /**
     * The model ID. 
     */
    modelId: identifier;
    /**
     * The model type.
     */
    modelType: ModelTypeEnum;
    /**
     * The model version description.
     */
    description?: description;
  }
  export interface CreateModelVersionResult {
    /**
     * The model ID. 
     */
    modelId?: identifier;
    /**
     * The model type.
     */
    modelType?: ModelTypeEnum;
    /**
     * The version of the model. 
     */
    modelVersionNumber?: nonEmptyString;
    /**
     * The model version status. 
     */
    status?: string;
  }
  export interface CreateRuleRequest {
    /**
     * The rule ID.
     */
    ruleId: identifier;
    /**
     * The detector ID for the rule's parent detector.
     */
    detectorId: identifier;
    /**
     * The rule description.
     */
    description?: description;
    /**
     * The rule expression.
     */
    expression: ruleExpression;
    /**
     * The language of the rule.
     */
    language: Language;
    /**
     * The outcome or outcomes returned when the rule expression matches.
     */
    outcomes: NonEmptyListOfStrings;
  }
  export interface CreateRuleResult {
    /**
     * The created rule.
     */
    rule?: Rule;
  }
  export interface CreateVariableRequest {
    /**
     * The name of the variable.
     */
    name: string;
    /**
     * The data type.
     */
    dataType: DataType;
    /**
     * The source of the data.
     */
    dataSource: DataSource;
    /**
     * The default value for the variable when no value is received.
     */
    defaultValue: string;
    /**
     * The description.
     */
    description?: string;
    /**
     * The variable type.
     */
    variableType?: string;
  }
  export interface CreateVariableResult {
  }
  export type CsvIndexToVariableMap = {[key: string]: string};
  export type DataSource = "EVENT"|"MODEL_SCORE"|"EXTERNAL_MODEL_SCORE"|string;
  export type DataType = "STRING"|"INTEGER"|"FLOAT"|"BOOLEAN"|string;
  export interface DeleteDetectorVersionRequest {
    /**
     * The ID of the parent detector for the detector version to delete.
     */
    detectorId: identifier;
    /**
     * The ID of the detector version to delete.
     */
    detectorVersionId: nonEmptyString;
  }
  export interface DeleteDetectorVersionResult {
  }
  export interface DeleteEventRequest {
    /**
     * The ID of the event to delete.
     */
    eventId: string;
  }
  export interface DeleteEventResult {
  }
  export interface DescribeDetectorRequest {
    /**
     * The detector ID.
     */
    detectorId: identifier;
    /**
     * The next token from the previous response.
     */
    nextToken?: string;
    /**
     * The maximum number of results to return for the request.
     */
    maxResults?: DetectorVersionMaxResults;
  }
  export interface DescribeDetectorResult {
    /**
     * The detector ID.
     */
    detectorId?: identifier;
    /**
     * The status and description for each detector version.
     */
    detectorVersionSummaries?: DetectorVersionSummaryList;
    /**
     * The next token to be used for subsequent requests.
     */
    nextToken?: string;
  }
  export interface DescribeModelVersionsRequest {
    /**
     * The model ID.
     */
    modelId?: identifier;
    /**
     * The model version. 
     */
    modelVersionNumber?: nonEmptyString;
    /**
     * The model type.
     */
    modelType?: ModelTypeEnum;
    /**
     * The next token from the previous results.
     */
    nextToken?: string;
    /**
     * The maximum number of results to return.
     */
    maxResults?: MaxResults;
  }
  export interface DescribeModelVersionsResult {
    /**
     * The model version details.
     */
    modelVersionDetails?: ModelVersionDetailList;
    /**
     * The next token.
     */
    nextToken?: string;
  }
  export interface Detector {
    /**
     * The detector ID.
     */
    detectorId?: identifier;
    /**
     * The detector description.
     */
    description?: description;
    /**
     * Timestamp of when the detector was last updated.
     */
    lastUpdatedTime?: time;
    /**
     * Timestamp of when the detector was created.
     */
    createdTime?: time;
  }
  export type DetectorList = Detector[];
  export type DetectorVersionMaxResults = number;
  export type DetectorVersionStatus = "DRAFT"|"ACTIVE"|"INACTIVE"|string;
  export interface DetectorVersionSummary {
    /**
     * The detector version ID. 
     */
    detectorVersionId?: nonEmptyString;
    /**
     * The detector version status. 
     */
    status?: DetectorVersionStatus;
    /**
     * The detector version description. 
     */
    description?: description;
    /**
     * Timestamp of when the detector version was last updated.
     */
    lastUpdatedTime?: time;
  }
  export type DetectorVersionSummaryList = DetectorVersionSummary[];
  export type DetectorsMaxResults = number;
  export type EventAttributeMap = {[key: string]: attributeValue};
  export interface ExternalModel {
    /**
     * The Amazon SageMaker model endpoints.
     */
    modelEndpoint?: string;
    /**
     * The source of the model.
     */
    modelSource?: ModelSource;
    /**
     * The role used to invoke the model. 
     */
    role?: Role;
    /**
     * The input configuration.
     */
    inputConfiguration?: ModelInputConfiguration;
    /**
     * The output configuration.
     */
    outputConfiguration?: ModelOutputConfiguration;
    /**
     * The Amazon Fraud Detector status for the external model endpoint
     */
    modelEndpointStatus?: ModelEndpointStatus;
    /**
     * Timestamp of when the model was last updated.
     */
    lastUpdatedTime?: time;
    /**
     * Timestamp of when the model was last created.
     */
    createdTime?: time;
  }
  export type ExternalModelEndpointDataBlobMap = {[key: string]: ModelEndpointDataBlob};
  export type ExternalModelList = ExternalModel[];
  export type ExternalModelsMaxResults = number;
  export interface GetDetectorVersionRequest {
    /**
     * The detector ID.
     */
    detectorId: identifier;
    /**
     * The detector version ID.
     */
    detectorVersionId: nonEmptyString;
  }
  export interface GetDetectorVersionResult {
    /**
     * The detector ID.
     */
    detectorId?: identifier;
    /**
     * The detector version ID.
     */
    detectorVersionId?: nonEmptyString;
    /**
     * The detector version description.
     */
    description?: description;
    /**
     * The Amazon SageMaker model endpoints included in the detector version.
     */
    externalModelEndpoints?: ListOfStrings;
    /**
     * The model versions included in the detector version. 
     */
    modelVersions?: ListOfModelVersions;
    /**
     * The rules included in the detector version.
     */
    rules?: RuleList;
    /**
     * The status of the detector version.
     */
    status?: DetectorVersionStatus;
    /**
     * The timestamp when the detector version was last updated. 
     */
    lastUpdatedTime?: time;
    /**
     * The timestamp when the detector version was created. 
     */
    createdTime?: time;
  }
  export interface GetDetectorsRequest {
    /**
     * The detector ID.
     */
    detectorId?: identifier;
    /**
     * The next token for the subsequent request.
     */
    nextToken?: string;
    /**
     * The maximum number of objects to return for the request.
     */
    maxResults?: DetectorsMaxResults;
  }
  export interface GetDetectorsResult {
    /**
     * The detectors.
     */
    detectors?: DetectorList;
    /**
     * The next page token.
     */
    nextToken?: string;
  }
  export interface GetExternalModelsRequest {
    /**
     * The Amazon SageMaker model endpoint.
     */
    modelEndpoint?: string;
    /**
     * The next page token for the request.
     */
    nextToken?: string;
    /**
     * The maximum number of objects to return for the request.
     */
    maxResults?: ExternalModelsMaxResults;
  }
  export interface GetExternalModelsResult {
    /**
     * Gets the Amazon SageMaker models.
     */
    externalModels?: ExternalModelList;
    /**
     * The next page token to be used in subsequent requests.
     */
    nextToken?: string;
  }
  export interface GetModelVersionRequest {
    /**
     * The model ID. 
     */
    modelId: identifier;
    /**
     * The model type. 
     */
    modelType: ModelTypeEnum;
    /**
     * The model version. 
     */
    modelVersionNumber: nonEmptyString;
  }
  export interface GetModelVersionResult {
    /**
     * The model ID. 
     */
    modelId?: identifier;
    /**
     * The model type. 
     */
    modelType?: ModelTypeEnum;
    /**
     * The model version. 
     */
    modelVersionNumber?: nonEmptyString;
    /**
     * The model version description.
     */
    description?: description;
    /**
     * The model version status. 
     */
    status?: string;
  }
  export interface GetModelsRequest {
    /**
     * The model type.
     */
    modelType?: ModelTypeEnum;
    /**
     * The model ID.
     */
    modelId?: identifier;
    /**
     * The next token for the request.
     */
    nextToken?: string;
    /**
     * The maximum results to return for the request.
     */
    maxResults?: MaxResults;
  }
  export interface GetModelsResult {
    /**
     * The next token for subsequent requests. 
     */
    nextToken?: string;
    /**
     * The returned models. 
     */
    models?: ModelList;
  }
  export interface GetOutcomesRequest {
    /**
     * The name of the outcome or outcomes to get.
     */
    name?: identifier;
    /**
     * The next page token for the request. 
     */
    nextToken?: string;
    /**
     * The maximum number of objects to return for the request. 
     */
    maxResults?: OutcomesMaxResults;
  }
  export interface GetOutcomesResult {
    /**
     * The outcomes. 
     */
    outcomes?: OutcomeList;
    /**
     * The next page token for subsequent requests.
     */
    nextToken?: string;
  }
  export interface GetPredictionRequest {
    /**
     * The detector ID. 
     */
    detectorId: string;
    /**
     * The detector version ID.
     */
    detectorVersionId?: string;
    /**
     * The unique ID used to identify the event.
     */
    eventId: string;
    /**
     * Names of variables you defined in Amazon Fraud Detector to represent event data elements and their corresponding values for the event you are sending for evaluation.
     */
    eventAttributes?: EventAttributeMap;
    /**
     * The Amazon SageMaker model endpoint input data blobs.
     */
    externalModelEndpointDataBlobs?: ExternalModelEndpointDataBlobMap;
  }
  export interface GetPredictionResult {
    /**
     * The prediction outcomes.
     */
    outcomes?: ListOfStrings;
    /**
     * The model scores for models used in the detector version.
     */
    modelScores?: ListOfModelScores;
  }
  export interface GetRulesRequest {
    /**
     * The rule ID.
     */
    ruleId?: identifier;
    /**
     * The detector ID.
     */
    detectorId: identifier;
    /**
     * The rule version.
     */
    ruleVersion?: nonEmptyString;
    /**
     * The next page token.
     */
    nextToken?: string;
    /**
     * The maximum number of rules to return for the request.
     */
    maxResults?: RulesMaxResults;
  }
  export interface GetRulesResult {
    /**
     * The details of the requested rule.
     */
    ruleDetails?: RuleDetailList;
    /**
     * The next page token to be used in subsequent requests.
     */
    nextToken?: string;
  }
  export interface GetVariablesRequest {
    /**
     * The name of the variable. 
     */
    name?: string;
    /**
     * The next page token of the get variable request. 
     */
    nextToken?: string;
    /**
     * The max size per page determined for the get variable request. 
     */
    maxResults?: VariablesMaxResults;
  }
  export interface GetVariablesResult {
    /**
     * The names of the variables returned. 
     */
    variables?: VariableList;
    /**
     * The next page token to be used in subsequent requests. 
     */
    nextToken?: string;
  }
  export type IsOpaque = boolean;
  export type JsonKeyToVariableMap = {[key: string]: string};
  export type LabelMapper = {[key: string]: ListOfStrings};
  export interface LabelSchema {
    /**
     * The label key.
     */
    labelKey: string;
    /**
     * The label mapper maps the Amazon Fraud Detector supported label to the appropriate source labels. For example, if "FRAUD" and "LEGIT" are Amazon Fraud Detector supported labels, this mapper could be: {"FRAUD" =&gt; ["0"], "LEGIT" =&gt; ["1"]} or {"FRAUD" =&gt; ["false"], "LEGIT" =&gt; ["true"]} or {"FRAUD" =&gt; ["fraud", "abuse"], "LEGIT" =&gt; ["legit", "safe"]}. The value part of the mapper is a list, because you may have multiple variants for a single Amazon Fraud Detector label. 
     */
    labelMapper: LabelMapper;
  }
  export type Language = "DETECTORPL"|string;
  export type ListOfModelScores = ModelScores[];
  export type ListOfModelVersions = ModelVersion[];
  export type ListOfStrings = string[];
  export type MaxResults = number;
  export type MetricsMap = {[key: string]: string};
  export interface Model {
    /**
     * The model ID.
     */
    modelId?: identifier;
    /**
     * The model type.
     */
    modelType?: ModelTypeEnum;
    /**
     * The model description.
     */
    description?: description;
    /**
     * The model training data source in Amazon S3.
     */
    trainingDataSource?: TrainingDataSource;
    /**
     * The model input variables.
     */
    modelVariables?: ModelVariablesList;
    /**
     * The model label schema.
     */
    labelSchema?: LabelSchema;
    /**
     * Timestamp of last time the model was updated.
     */
    lastUpdatedTime?: time;
    /**
     * Timestamp of when the model was created.
     */
    createdTime?: time;
  }
  export interface ModelEndpointDataBlob {
    /**
     * The byte buffer of the Amazon SageMaker model endpoint input data blob.
     */
    byteBuffer?: blob;
    /**
     * The content type of the Amazon SageMaker model endpoint input data blob. 
     */
    contentType?: contentType;
  }
  export type ModelEndpointStatus = "ASSOCIATED"|"DISSOCIATED"|string;
  export interface ModelInputConfiguration {
    /**
     *  The format of the model input configuration. The format differs depending on if it is passed through to SageMaker or constructed by Amazon Fraud Detector.
     */
    format?: ModelInputDataFormat;
    /**
     *  For an opaque-model, the input to the model will be a ByteBuffer blob provided in the getPrediction request, and will be passed to SageMaker as-is. For non-opaque models, the input will be constructed by Amazon Fraud Detector based on the model-configuration. 
     */
    isOpaque: IsOpaque;
    /**
     *  Template for constructing the JSON input-data sent to SageMaker. At event-evaluation, the placeholders for variable names in the template will be replaced with the variable values before being sent to SageMaker. 
     */
    jsonInputTemplate?: string;
    /**
     *  Template for constructing the CSV input-data sent to SageMaker. At event-evaluation, the placeholders for variable-names in the template will be replaced with the variable values before being sent to SageMaker. 
     */
    csvInputTemplate?: string;
  }
  export type ModelInputDataFormat = "TEXT_CSV"|"APPLICATION_JSON"|string;
  export type ModelList = Model[];
  export interface ModelOutputConfiguration {
    /**
     * The format of the model output configuration.
     */
    format: ModelOutputDataFormat;
    /**
     * A map of JSON keys in response from SageMaker to the Amazon Fraud Detector variables. 
     */
    jsonKeyToVariableMap?: JsonKeyToVariableMap;
    /**
     * A map of CSV index values in the SageMaker response to the Amazon Fraud Detector variables. 
     */
    csvIndexToVariableMap?: CsvIndexToVariableMap;
  }
  export type ModelOutputDataFormat = "TEXT_CSV"|"APPLICATION_JSONLINES"|string;
  export type ModelPredictionMap = {[key: string]: float};
  export interface ModelScores {
    /**
     * The model version.
     */
    modelVersion?: ModelVersion;
    /**
     * The model's fraud prediction scores.
     */
    scores?: ModelPredictionMap;
  }
  export type ModelSource = "SAGEMAKER"|string;
  export type ModelTypeEnum = "ONLINE_FRAUD_INSIGHTS"|string;
  export interface ModelVariable {
    /**
     * The model variable's name.&gt;
     */
    name: string;
    /**
     * The model variable's index.&gt;
     */
    index?: ModelVariableIndex;
  }
  export type ModelVariableIndex = number;
  export type ModelVariablesList = ModelVariable[];
  export interface ModelVersion {
    /**
     * The parent model ID.
     */
    modelId: identifier;
    /**
     * The model type.
     */
    modelType: ModelTypeEnum;
    /**
     * The model version.
     */
    modelVersionNumber: nonEmptyString;
  }
  export interface ModelVersionDetail {
    /**
     * The model ID.
     */
    modelId?: identifier;
    /**
     * The model type.
     */
    modelType?: ModelTypeEnum;
    /**
     * The model version.
     */
    modelVersionNumber?: nonEmptyString;
    /**
     * The model description.
     */
    description?: description;
    /**
     * The model status.
     */
    status?: string;
    /**
     * The model training data source.
     */
    trainingDataSource?: TrainingDataSource;
    /**
     * The model variables.
     */
    modelVariables?: ModelVariablesList;
    /**
     * The model label schema.
     */
    labelSchema?: LabelSchema;
    /**
     * The model validation metrics.
     */
    validationMetrics?: MetricsMap;
    /**
     * The model training metrics.
     */
    trainingMetrics?: MetricsMap;
    /**
     * The timestamp when the model was last updated.
     */
    lastUpdatedTime?: time;
    /**
     * The timestamp when the model was created.
     */
    createdTime?: time;
  }
  export type ModelVersionDetailList = ModelVersionDetail[];
  export type ModelVersionStatus = "TRAINING_IN_PROGRESS"|"TRAINING_COMPLETE"|"ACTIVATE_REQUESTED"|"ACTIVATE_IN_PROGRESS"|"ACTIVE"|"INACTIVATE_IN_PROGRESS"|"INACTIVE"|"ERROR"|string;
  export type NameList = string[];
  export type NonEmptyListOfStrings = string[];
  export interface Outcome {
    /**
     * The outcome name.
     */
    name?: identifier;
    /**
     * The outcome description.
     */
    description?: description;
    /**
     * The timestamp when the outcome was last updated.
     */
    lastUpdatedTime?: time;
    /**
     * The timestamp when the outcome was created.
     */
    createdTime?: time;
  }
  export type OutcomeList = Outcome[];
  export type OutcomesMaxResults = number;
  export interface PutDetectorRequest {
    /**
     * The detector ID. 
     */
    detectorId: identifier;
    /**
     * The description of the detector.
     */
    description?: description;
  }
  export interface PutDetectorResult {
  }
  export interface PutExternalModelRequest {
    /**
     * The model endpoints name.
     */
    modelEndpoint: string;
    /**
     * The source of the model.
     */
    modelSource: ModelSource;
    /**
     * The IAM role used to invoke the model endpoint.
     */
    role: Role;
    /**
     * The model endpoint input configuration.
     */
    inputConfiguration: ModelInputConfiguration;
    /**
     * The model endpoint output configuration.
     */
    outputConfiguration: ModelOutputConfiguration;
    /**
     * The model endpoint’s status in Amazon Fraud Detector.
     */
    modelEndpointStatus: ModelEndpointStatus;
  }
  export interface PutExternalModelResult {
  }
  export interface PutModelRequest {
    /**
     * The model ID.
     */
    modelId: identifier;
    /**
     * The model type. 
     */
    modelType: ModelTypeEnum;
    /**
     * The model description. 
     */
    description?: description;
    /**
     * The training data source location in Amazon S3. 
     */
    trainingDataSource: TrainingDataSource;
    /**
     * The model input variables.
     */
    modelVariables: ModelVariablesList;
    /**
     * The label schema.
     */
    labelSchema: LabelSchema;
  }
  export interface PutModelResult {
  }
  export interface PutOutcomeRequest {
    /**
     * The name of the outcome.
     */
    name: identifier;
    /**
     * The outcome description.
     */
    description?: description;
  }
  export interface PutOutcomeResult {
  }
  export interface Role {
    /**
     * The role ARN.
     */
    arn: string;
    /**
     * The role name.
     */
    name: string;
  }
  export interface Rule {
    /**
     * The detector for which the rule is associated.
     */
    detectorId: identifier;
    /**
     * The rule ID.
     */
    ruleId: identifier;
    /**
     * The rule version.
     */
    ruleVersion: nonEmptyString;
  }
  export interface RuleDetail {
    /**
     * The rule ID.
     */
    ruleId?: identifier;
    /**
     * The rule description.
     */
    description?: description;
    /**
     * The detector for which the rule is associated.
     */
    detectorId?: identifier;
    /**
     * The rule version.
     */
    ruleVersion?: nonEmptyString;
    /**
     * The rule expression.
     */
    expression?: ruleExpression;
    /**
     * The rule language.
     */
    language?: Language;
    /**
     * The rule outcomes.
     */
    outcomes?: NonEmptyListOfStrings;
    /**
     * Timestamp of the last time the rule was updated.
     */
    lastUpdatedTime?: time;
    /**
     * The timestamp of when the rule was created.
     */
    createdTime?: time;
  }
  export type RuleDetailList = RuleDetail[];
  export type RuleList = Rule[];
  export type RulesMaxResults = number;
  export interface TrainingDataSource {
    /**
     * The data location of the training data source.
     */
    dataLocation: s3BucketLocation;
    /**
     * The data access role ARN for the training data source.
     */
    dataAccessRoleArn: iamRoleArn;
  }
  export interface UpdateDetectorVersionMetadataRequest {
    /**
     * The detector ID.
     */
    detectorId: identifier;
    /**
     * The detector version ID. 
     */
    detectorVersionId: nonEmptyString;
    /**
     * The description.
     */
    description: description;
  }
  export interface UpdateDetectorVersionMetadataResult {
  }
  export interface UpdateDetectorVersionRequest {
    /**
     * The parent detector ID for the detector version you want to update.
     */
    detectorId: identifier;
    /**
     * The detector version ID. 
     */
    detectorVersionId: nonEmptyString;
    /**
     * The Amazon SageMaker model endpoints to include in the detector version.
     */
    externalModelEndpoints: ListOfStrings;
    /**
     * The rules to include in the detector version.
     */
    rules: RuleList;
    /**
     * The detector version description. 
     */
    description?: description;
    /**
     * The model versions to include in the detector version.
     */
    modelVersions?: ListOfModelVersions;
  }
  export interface UpdateDetectorVersionResult {
  }
  export interface UpdateDetectorVersionStatusRequest {
    /**
     * The detector ID. 
     */
    detectorId: identifier;
    /**
     * The detector version ID. 
     */
    detectorVersionId: nonEmptyString;
    /**
     * The new status.
     */
    status: DetectorVersionStatus;
  }
  export interface UpdateDetectorVersionStatusResult {
  }
  export interface UpdateModelVersionRequest {
    /**
     * The model ID.
     */
    modelId: identifier;
    /**
     * The model type.
     */
    modelType: ModelTypeEnum;
    /**
     * The model version.
     */
    modelVersionNumber: nonEmptyString;
    /**
     * The model description.
     */
    description: description;
    /**
     * The new model status.
     */
    status: ModelVersionStatus;
  }
  export interface UpdateModelVersionResult {
  }
  export interface UpdateRuleMetadataRequest {
    /**
     * The rule to update.
     */
    rule: Rule;
    /**
     * The rule description.
     */
    description: description;
  }
  export interface UpdateRuleMetadataResult {
  }
  export interface UpdateRuleVersionRequest {
    /**
     * The rule to update.
     */
    rule: Rule;
    /**
     * The description.
     */
    description?: description;
    /**
     * The rule expression.
     */
    expression: ruleExpression;
    /**
     * The language.
     */
    language: Language;
    /**
     * The outcomes.
     */
    outcomes: NonEmptyListOfStrings;
  }
  export interface UpdateRuleVersionResult {
    /**
     * The new rule version that was created.
     */
    rule?: Rule;
  }
  export interface UpdateVariableRequest {
    /**
     * The name of the variable.
     */
    name: string;
    /**
     * The new default value of the variable.
     */
    defaultValue?: string;
    /**
     * The new description.
     */
    description?: string;
    /**
     * The variable type.
     */
    variableType?: string;
  }
  export interface UpdateVariableResult {
  }
  export interface Variable {
    /**
     * The name of the variable.
     */
    name?: string;
    /**
     * The data type of the variable.
     */
    dataType?: DataType;
    /**
     * The data source of the variable.
     */
    dataSource?: DataSource;
    /**
     * The default value of the variable.
     */
    defaultValue?: string;
    /**
     * The description of the variable. 
     */
    description?: string;
    /**
     * The variable type of the variable.
     */
    variableType?: string;
    /**
     * The time when variable was last updated.
     */
    lastUpdatedTime?: time;
    /**
     * The time when the variable was created.
     */
    createdTime?: time;
  }
  export interface VariableEntry {
    /**
     * The name of the variable entry.
     */
    name?: string;
    /**
     * The data type of the variable entry.
     */
    dataType?: string;
    /**
     * The data source of the variable entry.
     */
    dataSource?: string;
    /**
     * The default value of the variable entry.
     */
    defaultValue?: string;
    /**
     * The description of the variable entry.
     */
    description?: string;
    /**
     * The type of the variable entry.
     */
    variableType?: string;
  }
  export type VariableEntryList = VariableEntry[];
  export type VariableList = Variable[];
  export type VariablesMaxResults = number;
  export type attributeKey = string;
  export type attributeValue = string;
  export type blob = Buffer|Uint8Array|Blob|string;
  export type contentType = string;
  export type description = string;
  export type float = number;
  export type iamRoleArn = string;
  export type identifier = string;
  export type integer = number;
  export type nonEmptyString = string;
  export type ruleExpression = string;
  export type s3BucketLocation = string;
  export type time = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2019-11-15"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the FraudDetector client.
   */
  export import Types = FraudDetector;
}
export = FraudDetector;
