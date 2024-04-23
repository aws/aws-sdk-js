import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class Bedrock extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Bedrock.Types.ClientConfiguration)
  config: Config & Bedrock.Types.ClientConfiguration;
  /**
   * API operation for creating and managing Amazon Bedrock automatic model evaluation jobs and model evaluation jobs that use human workers. To learn more about the requirements for creating a model evaluation job see, Model evaluations.
   */
  createEvaluationJob(params: Bedrock.Types.CreateEvaluationJobRequest, callback?: (err: AWSError, data: Bedrock.Types.CreateEvaluationJobResponse) => void): Request<Bedrock.Types.CreateEvaluationJobResponse, AWSError>;
  /**
   * API operation for creating and managing Amazon Bedrock automatic model evaluation jobs and model evaluation jobs that use human workers. To learn more about the requirements for creating a model evaluation job see, Model evaluations.
   */
  createEvaluationJob(callback?: (err: AWSError, data: Bedrock.Types.CreateEvaluationJobResponse) => void): Request<Bedrock.Types.CreateEvaluationJobResponse, AWSError>;
  /**
   * Creates a guardrail to block topics and to filter out harmful content.   Specify a name and optional description.   Specify messages for when the guardrail successfully blocks a prompt or a model response in the blockedInputMessaging and blockedOutputsMessaging fields.   Specify topics for the guardrail to deny in the topicPolicyConfig object. Each GuardrailTopicConfig object in the topicsConfig list pertains to one topic.   Give a name and description so that the guardrail can properly identify the topic.   Specify DENY in the type field.   (Optional) Provide up to five prompts that you would categorize as belonging to the topic in the examples list.     Specify filter strengths for the harmful categories defined in Amazon Bedrock in the contentPolicyConfig object. Each GuardrailContentFilterConfig object in the filtersConfig list pertains to a harmful category. For more information, see Content filters. For more information about the fields in a content filter, see GuardrailContentFilterConfig.   Specify the category in the type field.   Specify the strength of the filter for prompts in the inputStrength field and for model responses in the strength field of the GuardrailContentFilterConfig.     (Optional) For security, include the ARN of a KMS key in the kmsKeyId field.   (Optional) Attach any tags to the guardrail in the tags object. For more information, see Tag resources.  
   */
  createGuardrail(params: Bedrock.Types.CreateGuardrailRequest, callback?: (err: AWSError, data: Bedrock.Types.CreateGuardrailResponse) => void): Request<Bedrock.Types.CreateGuardrailResponse, AWSError>;
  /**
   * Creates a guardrail to block topics and to filter out harmful content.   Specify a name and optional description.   Specify messages for when the guardrail successfully blocks a prompt or a model response in the blockedInputMessaging and blockedOutputsMessaging fields.   Specify topics for the guardrail to deny in the topicPolicyConfig object. Each GuardrailTopicConfig object in the topicsConfig list pertains to one topic.   Give a name and description so that the guardrail can properly identify the topic.   Specify DENY in the type field.   (Optional) Provide up to five prompts that you would categorize as belonging to the topic in the examples list.     Specify filter strengths for the harmful categories defined in Amazon Bedrock in the contentPolicyConfig object. Each GuardrailContentFilterConfig object in the filtersConfig list pertains to a harmful category. For more information, see Content filters. For more information about the fields in a content filter, see GuardrailContentFilterConfig.   Specify the category in the type field.   Specify the strength of the filter for prompts in the inputStrength field and for model responses in the strength field of the GuardrailContentFilterConfig.     (Optional) For security, include the ARN of a KMS key in the kmsKeyId field.   (Optional) Attach any tags to the guardrail in the tags object. For more information, see Tag resources.  
   */
  createGuardrail(callback?: (err: AWSError, data: Bedrock.Types.CreateGuardrailResponse) => void): Request<Bedrock.Types.CreateGuardrailResponse, AWSError>;
  /**
   * Creates a version of the guardrail. Use this API to create a snapshot of the guardrail when you are satisfied with a configuration, or to compare the configuration with another version.
   */
  createGuardrailVersion(params: Bedrock.Types.CreateGuardrailVersionRequest, callback?: (err: AWSError, data: Bedrock.Types.CreateGuardrailVersionResponse) => void): Request<Bedrock.Types.CreateGuardrailVersionResponse, AWSError>;
  /**
   * Creates a version of the guardrail. Use this API to create a snapshot of the guardrail when you are satisfied with a configuration, or to compare the configuration with another version.
   */
  createGuardrailVersion(callback?: (err: AWSError, data: Bedrock.Types.CreateGuardrailVersionResponse) => void): Request<Bedrock.Types.CreateGuardrailVersionResponse, AWSError>;
  /**
   * Creates a fine-tuning job to customize a base model. You specify the base foundation model and the location of the training data. After the model-customization job completes successfully, your custom model resource will be ready to use. Amazon Bedrock returns validation loss metrics and output generations after the job completes.  For information on the format of training and validation data, see Prepare the datasets.  Model-customization jobs are asynchronous and the completion time depends on the base model and the training/validation data size. To monitor a job, use the GetModelCustomizationJob operation to retrieve the job status. For more information, see Custom models in the Amazon Bedrock User Guide.
   */
  createModelCustomizationJob(params: Bedrock.Types.CreateModelCustomizationJobRequest, callback?: (err: AWSError, data: Bedrock.Types.CreateModelCustomizationJobResponse) => void): Request<Bedrock.Types.CreateModelCustomizationJobResponse, AWSError>;
  /**
   * Creates a fine-tuning job to customize a base model. You specify the base foundation model and the location of the training data. After the model-customization job completes successfully, your custom model resource will be ready to use. Amazon Bedrock returns validation loss metrics and output generations after the job completes.  For information on the format of training and validation data, see Prepare the datasets.  Model-customization jobs are asynchronous and the completion time depends on the base model and the training/validation data size. To monitor a job, use the GetModelCustomizationJob operation to retrieve the job status. For more information, see Custom models in the Amazon Bedrock User Guide.
   */
  createModelCustomizationJob(callback?: (err: AWSError, data: Bedrock.Types.CreateModelCustomizationJobResponse) => void): Request<Bedrock.Types.CreateModelCustomizationJobResponse, AWSError>;
  /**
   * Creates dedicated throughput for a base or custom model with the model units and for the duration that you specify. For pricing details, see Amazon Bedrock Pricing. For more information, see Provisioned Throughput in the Amazon Bedrock User Guide.
   */
  createProvisionedModelThroughput(params: Bedrock.Types.CreateProvisionedModelThroughputRequest, callback?: (err: AWSError, data: Bedrock.Types.CreateProvisionedModelThroughputResponse) => void): Request<Bedrock.Types.CreateProvisionedModelThroughputResponse, AWSError>;
  /**
   * Creates dedicated throughput for a base or custom model with the model units and for the duration that you specify. For pricing details, see Amazon Bedrock Pricing. For more information, see Provisioned Throughput in the Amazon Bedrock User Guide.
   */
  createProvisionedModelThroughput(callback?: (err: AWSError, data: Bedrock.Types.CreateProvisionedModelThroughputResponse) => void): Request<Bedrock.Types.CreateProvisionedModelThroughputResponse, AWSError>;
  /**
   * Deletes a custom model that you created earlier. For more information, see Custom models in the Amazon Bedrock User Guide.
   */
  deleteCustomModel(params: Bedrock.Types.DeleteCustomModelRequest, callback?: (err: AWSError, data: Bedrock.Types.DeleteCustomModelResponse) => void): Request<Bedrock.Types.DeleteCustomModelResponse, AWSError>;
  /**
   * Deletes a custom model that you created earlier. For more information, see Custom models in the Amazon Bedrock User Guide.
   */
  deleteCustomModel(callback?: (err: AWSError, data: Bedrock.Types.DeleteCustomModelResponse) => void): Request<Bedrock.Types.DeleteCustomModelResponse, AWSError>;
  /**
   * Deletes a guardrail.   To delete a guardrail, only specify the ARN of the guardrail in the guardrailIdentifier field. If you delete a guardrail, all of its versions will be deleted.   To delete a version of a guardrail, specify the ARN of the guardrail in the guardrailIdentifier field and the version in the guardrailVersion field.  
   */
  deleteGuardrail(params: Bedrock.Types.DeleteGuardrailRequest, callback?: (err: AWSError, data: Bedrock.Types.DeleteGuardrailResponse) => void): Request<Bedrock.Types.DeleteGuardrailResponse, AWSError>;
  /**
   * Deletes a guardrail.   To delete a guardrail, only specify the ARN of the guardrail in the guardrailIdentifier field. If you delete a guardrail, all of its versions will be deleted.   To delete a version of a guardrail, specify the ARN of the guardrail in the guardrailIdentifier field and the version in the guardrailVersion field.  
   */
  deleteGuardrail(callback?: (err: AWSError, data: Bedrock.Types.DeleteGuardrailResponse) => void): Request<Bedrock.Types.DeleteGuardrailResponse, AWSError>;
  /**
   * Delete the invocation logging. 
   */
  deleteModelInvocationLoggingConfiguration(params: Bedrock.Types.DeleteModelInvocationLoggingConfigurationRequest, callback?: (err: AWSError, data: Bedrock.Types.DeleteModelInvocationLoggingConfigurationResponse) => void): Request<Bedrock.Types.DeleteModelInvocationLoggingConfigurationResponse, AWSError>;
  /**
   * Delete the invocation logging. 
   */
  deleteModelInvocationLoggingConfiguration(callback?: (err: AWSError, data: Bedrock.Types.DeleteModelInvocationLoggingConfigurationResponse) => void): Request<Bedrock.Types.DeleteModelInvocationLoggingConfigurationResponse, AWSError>;
  /**
   * Deletes a Provisioned Throughput. You can't delete a Provisioned Throughput before the commitment term is over. For more information, see Provisioned Throughput in the Amazon Bedrock User Guide.
   */
  deleteProvisionedModelThroughput(params: Bedrock.Types.DeleteProvisionedModelThroughputRequest, callback?: (err: AWSError, data: Bedrock.Types.DeleteProvisionedModelThroughputResponse) => void): Request<Bedrock.Types.DeleteProvisionedModelThroughputResponse, AWSError>;
  /**
   * Deletes a Provisioned Throughput. You can't delete a Provisioned Throughput before the commitment term is over. For more information, see Provisioned Throughput in the Amazon Bedrock User Guide.
   */
  deleteProvisionedModelThroughput(callback?: (err: AWSError, data: Bedrock.Types.DeleteProvisionedModelThroughputResponse) => void): Request<Bedrock.Types.DeleteProvisionedModelThroughputResponse, AWSError>;
  /**
   * Get the properties associated with a Amazon Bedrock custom model that you have created.For more information, see Custom models in the Amazon Bedrock User Guide.
   */
  getCustomModel(params: Bedrock.Types.GetCustomModelRequest, callback?: (err: AWSError, data: Bedrock.Types.GetCustomModelResponse) => void): Request<Bedrock.Types.GetCustomModelResponse, AWSError>;
  /**
   * Get the properties associated with a Amazon Bedrock custom model that you have created.For more information, see Custom models in the Amazon Bedrock User Guide.
   */
  getCustomModel(callback?: (err: AWSError, data: Bedrock.Types.GetCustomModelResponse) => void): Request<Bedrock.Types.GetCustomModelResponse, AWSError>;
  /**
   * Retrieves the properties associated with a model evaluation job, including the status of the job. For more information, see Model evaluations.
   */
  getEvaluationJob(params: Bedrock.Types.GetEvaluationJobRequest, callback?: (err: AWSError, data: Bedrock.Types.GetEvaluationJobResponse) => void): Request<Bedrock.Types.GetEvaluationJobResponse, AWSError>;
  /**
   * Retrieves the properties associated with a model evaluation job, including the status of the job. For more information, see Model evaluations.
   */
  getEvaluationJob(callback?: (err: AWSError, data: Bedrock.Types.GetEvaluationJobResponse) => void): Request<Bedrock.Types.GetEvaluationJobResponse, AWSError>;
  /**
   * Get details about a Amazon Bedrock foundation model.
   */
  getFoundationModel(params: Bedrock.Types.GetFoundationModelRequest, callback?: (err: AWSError, data: Bedrock.Types.GetFoundationModelResponse) => void): Request<Bedrock.Types.GetFoundationModelResponse, AWSError>;
  /**
   * Get details about a Amazon Bedrock foundation model.
   */
  getFoundationModel(callback?: (err: AWSError, data: Bedrock.Types.GetFoundationModelResponse) => void): Request<Bedrock.Types.GetFoundationModelResponse, AWSError>;
  /**
   * Gets details about a guardrail. If you don't specify a version, the response returns details for the DRAFT version.
   */
  getGuardrail(params: Bedrock.Types.GetGuardrailRequest, callback?: (err: AWSError, data: Bedrock.Types.GetGuardrailResponse) => void): Request<Bedrock.Types.GetGuardrailResponse, AWSError>;
  /**
   * Gets details about a guardrail. If you don't specify a version, the response returns details for the DRAFT version.
   */
  getGuardrail(callback?: (err: AWSError, data: Bedrock.Types.GetGuardrailResponse) => void): Request<Bedrock.Types.GetGuardrailResponse, AWSError>;
  /**
   * Retrieves the properties associated with a model-customization job, including the status of the job. For more information, see Custom models in the Amazon Bedrock User Guide.
   */
  getModelCustomizationJob(params: Bedrock.Types.GetModelCustomizationJobRequest, callback?: (err: AWSError, data: Bedrock.Types.GetModelCustomizationJobResponse) => void): Request<Bedrock.Types.GetModelCustomizationJobResponse, AWSError>;
  /**
   * Retrieves the properties associated with a model-customization job, including the status of the job. For more information, see Custom models in the Amazon Bedrock User Guide.
   */
  getModelCustomizationJob(callback?: (err: AWSError, data: Bedrock.Types.GetModelCustomizationJobResponse) => void): Request<Bedrock.Types.GetModelCustomizationJobResponse, AWSError>;
  /**
   * Get the current configuration values for model invocation logging.
   */
  getModelInvocationLoggingConfiguration(params: Bedrock.Types.GetModelInvocationLoggingConfigurationRequest, callback?: (err: AWSError, data: Bedrock.Types.GetModelInvocationLoggingConfigurationResponse) => void): Request<Bedrock.Types.GetModelInvocationLoggingConfigurationResponse, AWSError>;
  /**
   * Get the current configuration values for model invocation logging.
   */
  getModelInvocationLoggingConfiguration(callback?: (err: AWSError, data: Bedrock.Types.GetModelInvocationLoggingConfigurationResponse) => void): Request<Bedrock.Types.GetModelInvocationLoggingConfigurationResponse, AWSError>;
  /**
   * Returns details for a Provisioned Throughput. For more information, see Provisioned Throughput in the Amazon Bedrock User Guide.
   */
  getProvisionedModelThroughput(params: Bedrock.Types.GetProvisionedModelThroughputRequest, callback?: (err: AWSError, data: Bedrock.Types.GetProvisionedModelThroughputResponse) => void): Request<Bedrock.Types.GetProvisionedModelThroughputResponse, AWSError>;
  /**
   * Returns details for a Provisioned Throughput. For more information, see Provisioned Throughput in the Amazon Bedrock User Guide.
   */
  getProvisionedModelThroughput(callback?: (err: AWSError, data: Bedrock.Types.GetProvisionedModelThroughputResponse) => void): Request<Bedrock.Types.GetProvisionedModelThroughputResponse, AWSError>;
  /**
   * Returns a list of the custom models that you have created with the CreateModelCustomizationJob operation. For more information, see Custom models in the Amazon Bedrock User Guide.
   */
  listCustomModels(params: Bedrock.Types.ListCustomModelsRequest, callback?: (err: AWSError, data: Bedrock.Types.ListCustomModelsResponse) => void): Request<Bedrock.Types.ListCustomModelsResponse, AWSError>;
  /**
   * Returns a list of the custom models that you have created with the CreateModelCustomizationJob operation. For more information, see Custom models in the Amazon Bedrock User Guide.
   */
  listCustomModels(callback?: (err: AWSError, data: Bedrock.Types.ListCustomModelsResponse) => void): Request<Bedrock.Types.ListCustomModelsResponse, AWSError>;
  /**
   * Lists model evaluation jobs.
   */
  listEvaluationJobs(params: Bedrock.Types.ListEvaluationJobsRequest, callback?: (err: AWSError, data: Bedrock.Types.ListEvaluationJobsResponse) => void): Request<Bedrock.Types.ListEvaluationJobsResponse, AWSError>;
  /**
   * Lists model evaluation jobs.
   */
  listEvaluationJobs(callback?: (err: AWSError, data: Bedrock.Types.ListEvaluationJobsResponse) => void): Request<Bedrock.Types.ListEvaluationJobsResponse, AWSError>;
  /**
   * Lists Amazon Bedrock foundation models that you can use. You can filter the results with the request parameters. For more information, see Foundation models in the Amazon Bedrock User Guide.
   */
  listFoundationModels(params: Bedrock.Types.ListFoundationModelsRequest, callback?: (err: AWSError, data: Bedrock.Types.ListFoundationModelsResponse) => void): Request<Bedrock.Types.ListFoundationModelsResponse, AWSError>;
  /**
   * Lists Amazon Bedrock foundation models that you can use. You can filter the results with the request parameters. For more information, see Foundation models in the Amazon Bedrock User Guide.
   */
  listFoundationModels(callback?: (err: AWSError, data: Bedrock.Types.ListFoundationModelsResponse) => void): Request<Bedrock.Types.ListFoundationModelsResponse, AWSError>;
  /**
   * Lists details about all the guardrails in an account. To list the DRAFT version of all your guardrails, don't specify the guardrailIdentifier field. To list all versions of a guardrail, specify the ARN of the guardrail in the guardrailIdentifier field. You can set the maximum number of results to return in a response in the maxResults field. If there are more results than the number you set, the response returns a nextToken that you can send in another ListGuardrails request to see the next batch of results.
   */
  listGuardrails(params: Bedrock.Types.ListGuardrailsRequest, callback?: (err: AWSError, data: Bedrock.Types.ListGuardrailsResponse) => void): Request<Bedrock.Types.ListGuardrailsResponse, AWSError>;
  /**
   * Lists details about all the guardrails in an account. To list the DRAFT version of all your guardrails, don't specify the guardrailIdentifier field. To list all versions of a guardrail, specify the ARN of the guardrail in the guardrailIdentifier field. You can set the maximum number of results to return in a response in the maxResults field. If there are more results than the number you set, the response returns a nextToken that you can send in another ListGuardrails request to see the next batch of results.
   */
  listGuardrails(callback?: (err: AWSError, data: Bedrock.Types.ListGuardrailsResponse) => void): Request<Bedrock.Types.ListGuardrailsResponse, AWSError>;
  /**
   * Returns a list of model customization jobs that you have submitted. You can filter the jobs to return based on one or more criteria. For more information, see Custom models in the Amazon Bedrock User Guide.
   */
  listModelCustomizationJobs(params: Bedrock.Types.ListModelCustomizationJobsRequest, callback?: (err: AWSError, data: Bedrock.Types.ListModelCustomizationJobsResponse) => void): Request<Bedrock.Types.ListModelCustomizationJobsResponse, AWSError>;
  /**
   * Returns a list of model customization jobs that you have submitted. You can filter the jobs to return based on one or more criteria. For more information, see Custom models in the Amazon Bedrock User Guide.
   */
  listModelCustomizationJobs(callback?: (err: AWSError, data: Bedrock.Types.ListModelCustomizationJobsResponse) => void): Request<Bedrock.Types.ListModelCustomizationJobsResponse, AWSError>;
  /**
   * Lists the Provisioned Throughputs in the account. For more information, see Provisioned Throughput in the Amazon Bedrock User Guide.
   */
  listProvisionedModelThroughputs(params: Bedrock.Types.ListProvisionedModelThroughputsRequest, callback?: (err: AWSError, data: Bedrock.Types.ListProvisionedModelThroughputsResponse) => void): Request<Bedrock.Types.ListProvisionedModelThroughputsResponse, AWSError>;
  /**
   * Lists the Provisioned Throughputs in the account. For more information, see Provisioned Throughput in the Amazon Bedrock User Guide.
   */
  listProvisionedModelThroughputs(callback?: (err: AWSError, data: Bedrock.Types.ListProvisionedModelThroughputsResponse) => void): Request<Bedrock.Types.ListProvisionedModelThroughputsResponse, AWSError>;
  /**
   * List the tags associated with the specified resource. For more information, see Tagging resources in the Amazon Bedrock User Guide.
   */
  listTagsForResource(params: Bedrock.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: Bedrock.Types.ListTagsForResourceResponse) => void): Request<Bedrock.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * List the tags associated with the specified resource. For more information, see Tagging resources in the Amazon Bedrock User Guide.
   */
  listTagsForResource(callback?: (err: AWSError, data: Bedrock.Types.ListTagsForResourceResponse) => void): Request<Bedrock.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Set the configuration values for model invocation logging.
   */
  putModelInvocationLoggingConfiguration(params: Bedrock.Types.PutModelInvocationLoggingConfigurationRequest, callback?: (err: AWSError, data: Bedrock.Types.PutModelInvocationLoggingConfigurationResponse) => void): Request<Bedrock.Types.PutModelInvocationLoggingConfigurationResponse, AWSError>;
  /**
   * Set the configuration values for model invocation logging.
   */
  putModelInvocationLoggingConfiguration(callback?: (err: AWSError, data: Bedrock.Types.PutModelInvocationLoggingConfigurationResponse) => void): Request<Bedrock.Types.PutModelInvocationLoggingConfigurationResponse, AWSError>;
  /**
   * Stops an in progress model evaluation job.
   */
  stopEvaluationJob(params: Bedrock.Types.StopEvaluationJobRequest, callback?: (err: AWSError, data: Bedrock.Types.StopEvaluationJobResponse) => void): Request<Bedrock.Types.StopEvaluationJobResponse, AWSError>;
  /**
   * Stops an in progress model evaluation job.
   */
  stopEvaluationJob(callback?: (err: AWSError, data: Bedrock.Types.StopEvaluationJobResponse) => void): Request<Bedrock.Types.StopEvaluationJobResponse, AWSError>;
  /**
   * Stops an active model customization job. For more information, see Custom models in the Amazon Bedrock User Guide.
   */
  stopModelCustomizationJob(params: Bedrock.Types.StopModelCustomizationJobRequest, callback?: (err: AWSError, data: Bedrock.Types.StopModelCustomizationJobResponse) => void): Request<Bedrock.Types.StopModelCustomizationJobResponse, AWSError>;
  /**
   * Stops an active model customization job. For more information, see Custom models in the Amazon Bedrock User Guide.
   */
  stopModelCustomizationJob(callback?: (err: AWSError, data: Bedrock.Types.StopModelCustomizationJobResponse) => void): Request<Bedrock.Types.StopModelCustomizationJobResponse, AWSError>;
  /**
   * Associate tags with a resource. For more information, see Tagging resources in the Amazon Bedrock User Guide.
   */
  tagResource(params: Bedrock.Types.TagResourceRequest, callback?: (err: AWSError, data: Bedrock.Types.TagResourceResponse) => void): Request<Bedrock.Types.TagResourceResponse, AWSError>;
  /**
   * Associate tags with a resource. For more information, see Tagging resources in the Amazon Bedrock User Guide.
   */
  tagResource(callback?: (err: AWSError, data: Bedrock.Types.TagResourceResponse) => void): Request<Bedrock.Types.TagResourceResponse, AWSError>;
  /**
   * Remove one or more tags from a resource. For more information, see Tagging resources in the Amazon Bedrock User Guide.
   */
  untagResource(params: Bedrock.Types.UntagResourceRequest, callback?: (err: AWSError, data: Bedrock.Types.UntagResourceResponse) => void): Request<Bedrock.Types.UntagResourceResponse, AWSError>;
  /**
   * Remove one or more tags from a resource. For more information, see Tagging resources in the Amazon Bedrock User Guide.
   */
  untagResource(callback?: (err: AWSError, data: Bedrock.Types.UntagResourceResponse) => void): Request<Bedrock.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates a guardrail with the values you specify.   Specify a name and optional description.   Specify messages for when the guardrail successfully blocks a prompt or a model response in the blockedInputMessaging and blockedOutputsMessaging fields.   Specify topics for the guardrail to deny in the topicPolicyConfig object. Each GuardrailTopicConfig object in the topicsConfig list pertains to one topic.   Give a name and description so that the guardrail can properly identify the topic.   Specify DENY in the type field.   (Optional) Provide up to five prompts that you would categorize as belonging to the topic in the examples list.     Specify filter strengths for the harmful categories defined in Amazon Bedrock in the contentPolicyConfig object. Each GuardrailContentFilterConfig object in the filtersConfig list pertains to a harmful category. For more information, see Content filters. For more information about the fields in a content filter, see GuardrailContentFilterConfig.   Specify the category in the type field.   Specify the strength of the filter for prompts in the inputStrength field and for model responses in the strength field of the GuardrailContentFilterConfig.     (Optional) For security, include the ARN of a KMS key in the kmsKeyId field.   (Optional) Attach any tags to the guardrail in the tags object. For more information, see Tag resources.  
   */
  updateGuardrail(params: Bedrock.Types.UpdateGuardrailRequest, callback?: (err: AWSError, data: Bedrock.Types.UpdateGuardrailResponse) => void): Request<Bedrock.Types.UpdateGuardrailResponse, AWSError>;
  /**
   * Updates a guardrail with the values you specify.   Specify a name and optional description.   Specify messages for when the guardrail successfully blocks a prompt or a model response in the blockedInputMessaging and blockedOutputsMessaging fields.   Specify topics for the guardrail to deny in the topicPolicyConfig object. Each GuardrailTopicConfig object in the topicsConfig list pertains to one topic.   Give a name and description so that the guardrail can properly identify the topic.   Specify DENY in the type field.   (Optional) Provide up to five prompts that you would categorize as belonging to the topic in the examples list.     Specify filter strengths for the harmful categories defined in Amazon Bedrock in the contentPolicyConfig object. Each GuardrailContentFilterConfig object in the filtersConfig list pertains to a harmful category. For more information, see Content filters. For more information about the fields in a content filter, see GuardrailContentFilterConfig.   Specify the category in the type field.   Specify the strength of the filter for prompts in the inputStrength field and for model responses in the strength field of the GuardrailContentFilterConfig.     (Optional) For security, include the ARN of a KMS key in the kmsKeyId field.   (Optional) Attach any tags to the guardrail in the tags object. For more information, see Tag resources.  
   */
  updateGuardrail(callback?: (err: AWSError, data: Bedrock.Types.UpdateGuardrailResponse) => void): Request<Bedrock.Types.UpdateGuardrailResponse, AWSError>;
  /**
   * Updates the name or associated model for a Provisioned Throughput. For more information, see Provisioned Throughput in the Amazon Bedrock User Guide.
   */
  updateProvisionedModelThroughput(params: Bedrock.Types.UpdateProvisionedModelThroughputRequest, callback?: (err: AWSError, data: Bedrock.Types.UpdateProvisionedModelThroughputResponse) => void): Request<Bedrock.Types.UpdateProvisionedModelThroughputResponse, AWSError>;
  /**
   * Updates the name or associated model for a Provisioned Throughput. For more information, see Provisioned Throughput in the Amazon Bedrock User Guide.
   */
  updateProvisionedModelThroughput(callback?: (err: AWSError, data: Bedrock.Types.UpdateProvisionedModelThroughputResponse) => void): Request<Bedrock.Types.UpdateProvisionedModelThroughputResponse, AWSError>;
}
declare namespace Bedrock {
  export interface AutomatedEvaluationConfig {
    /**
     * Specifies the required elements for an automatic model evaluation job.
     */
    datasetMetricConfigs: EvaluationDatasetMetricConfigs;
  }
  export type BaseModelIdentifier = string;
  export type BedrockModelId = string;
  export type Boolean = boolean;
  export type BrandedName = string;
  export type BucketName = string;
  export interface CloudWatchConfig {
    /**
     * The log group name.
     */
    logGroupName: LogGroupName;
    /**
     * The role Amazon Resource Name (ARN).
     */
    roleArn: RoleArn;
    /**
     * S3 configuration for delivering a large amount of data.
     */
    largeDataDeliveryS3Config?: S3Config;
  }
  export type CommitmentDuration = "OneMonth"|"SixMonths"|string;
  export interface CreateEvaluationJobRequest {
    /**
     * The name of the model evaluation job. Model evaluation job names must unique with your AWS account, and your account's AWS region.
     */
    jobName: EvaluationJobName;
    /**
     * A description of the model evaluation job.
     */
    jobDescription?: EvaluationJobDescription;
    /**
     * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see Ensuring idempotency.
     */
    clientRequestToken?: IdempotencyToken;
    /**
     * The Amazon Resource Name (ARN) of an IAM service role that Amazon Bedrock can assume to perform tasks on your behalf. The service role must have Amazon Bedrock as the service principal, and provide access to any Amazon S3 buckets specified in the EvaluationConfig object. To pass this role to Amazon Bedrock, the caller of this API must have the iam:PassRole permission. To learn more about the required permissions, see Required permissions.
     */
    roleArn: RoleArn;
    /**
     * Specify your customer managed key ARN that will be used to encrypt your model evaluation job.
     */
    customerEncryptionKeyId?: KmsKeyId;
    /**
     * Tags to attach to the model evaluation job.
     */
    jobTags?: TagList;
    /**
     * Specifies whether the model evaluation job is automatic or uses human worker.
     */
    evaluationConfig: EvaluationConfig;
    /**
     * Specify the models you want to use in your model evaluation job. Automatic model evaluation jobs support a single model, and model evaluation job that use human workers support two models.
     */
    inferenceConfig: EvaluationInferenceConfig;
    /**
     * An object that defines where the results of model evaluation job will be saved in Amazon S3.
     */
    outputDataConfig: EvaluationOutputDataConfig;
  }
  export interface CreateEvaluationJobResponse {
    /**
     * The ARN of the model evaluation job.
     */
    jobArn: EvaluationJobArn;
  }
  export interface CreateGuardrailRequest {
    /**
     * The name to give the guardrail.
     */
    name: GuardrailName;
    /**
     * A description of the guardrail.
     */
    description?: GuardrailDescription;
    /**
     * The topic policies to configure for the guardrail.
     */
    topicPolicyConfig?: GuardrailTopicPolicyConfig;
    /**
     * The content filter policies to configure for the guardrail.
     */
    contentPolicyConfig?: GuardrailContentPolicyConfig;
    /**
     * The word policy you configure for the guardrail.
     */
    wordPolicyConfig?: GuardrailWordPolicyConfig;
    /**
     * The sensitive information policy to configure for the guardrail.
     */
    sensitiveInformationPolicyConfig?: GuardrailSensitiveInformationPolicyConfig;
    /**
     * The message to return when the guardrail blocks a prompt.
     */
    blockedInputMessaging: GuardrailBlockedMessaging;
    /**
     * The message to return when the guardrail blocks a model response.
     */
    blockedOutputsMessaging: GuardrailBlockedMessaging;
    /**
     * The ARN of the KMS key that you use to encrypt the guardrail.
     */
    kmsKeyId?: KmsKeyId;
    /**
     * The tags that you want to attach to the guardrail. 
     */
    tags?: TagList;
    /**
     * A unique, case-sensitive identifier to ensure that the API request completes no more than once. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see Ensuring idempotency in the Amazon S3 User Guide.
     */
    clientRequestToken?: IdempotencyToken;
  }
  export interface CreateGuardrailResponse {
    /**
     * The unique identifier of the guardrail that was created.
     */
    guardrailId: GuardrailId;
    /**
     * The ARN of the guardrail that was created.
     */
    guardrailArn: GuardrailArn;
    /**
     * The version of the guardrail that was created. This value should be 1.
     */
    version: GuardrailDraftVersion;
    /**
     * The time at which the guardrail was created.
     */
    createdAt: Timestamp;
  }
  export interface CreateGuardrailVersionRequest {
    /**
     * The unique identifier of the guardrail.
     */
    guardrailIdentifier: GuardrailIdentifier;
    /**
     * A description of the guardrail version.
     */
    description?: GuardrailDescription;
    /**
     * A unique, case-sensitive identifier to ensure that the API request completes no more than once. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see Ensuring idempotency in the Amazon S3 User Guide.
     */
    clientRequestToken?: IdempotencyToken;
  }
  export interface CreateGuardrailVersionResponse {
    /**
     * The unique identifier of the guardrail.
     */
    guardrailId: GuardrailId;
    /**
     * The number of the version of the guardrail.
     */
    version: GuardrailNumericalVersion;
  }
  export interface CreateModelCustomizationJobRequest {
    /**
     * A name for the fine-tuning job.
     */
    jobName: JobName;
    /**
     * A name for the resulting custom model.
     */
    customModelName: CustomModelName;
    /**
     * The Amazon Resource Name (ARN) of an IAM service role that Amazon Bedrock can assume to perform tasks on your behalf. For example, during model training, Amazon Bedrock needs your permission to read input data from an S3 bucket, write model artifacts to an S3 bucket. To pass this role to Amazon Bedrock, the caller of this API must have the iam:PassRole permission. 
     */
    roleArn: RoleArn;
    /**
     * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see Ensuring idempotency.
     */
    clientRequestToken?: IdempotencyToken;
    /**
     * Name of the base model.
     */
    baseModelIdentifier: BaseModelIdentifier;
    /**
     * The customization type.
     */
    customizationType?: CustomizationType;
    /**
     * The custom model is encrypted at rest using this key.
     */
    customModelKmsKeyId?: KmsKeyId;
    /**
     * Tags to attach to the job.
     */
    jobTags?: TagList;
    /**
     * Tags to attach to the resulting custom model.
     */
    customModelTags?: TagList;
    /**
     * Information about the training dataset.
     */
    trainingDataConfig: TrainingDataConfig;
    /**
     * Information about the validation dataset. 
     */
    validationDataConfig?: ValidationDataConfig;
    /**
     * S3 location for the output data.
     */
    outputDataConfig: OutputDataConfig;
    /**
     * Parameters related to tuning the model. For details on the format for different models, see Custom model hyperparameters.
     */
    hyperParameters: ModelCustomizationHyperParameters;
    /**
     * VPC configuration (optional). Configuration parameters for the private Virtual Private Cloud (VPC) that contains the resources you are using for this job.
     */
    vpcConfig?: VpcConfig;
  }
  export interface CreateModelCustomizationJobResponse {
    /**
     * Amazon Resource Name (ARN) of the fine tuning job
     */
    jobArn: ModelCustomizationJobArn;
  }
  export interface CreateProvisionedModelThroughputRequest {
    /**
     * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see Ensuring idempotency in the Amazon S3 User Guide.
     */
    clientRequestToken?: IdempotencyToken;
    /**
     * Number of model units to allocate. A model unit delivers a specific throughput level for the specified model. The throughput level of a model unit specifies the total number of input and output tokens that it can process and generate within a span of one minute. By default, your account has no model units for purchasing Provisioned Throughputs with commitment. You must first visit the Amazon Web Services support center to request MUs. For model unit quotas, see Provisioned Throughput quotas in the Amazon Bedrock User Guide. For more information about what an MU specifies, contact your Amazon Web Services account manager.
     */
    modelUnits: PositiveInteger;
    /**
     * The name for this Provisioned Throughput.
     */
    provisionedModelName: ProvisionedModelName;
    /**
     * The Amazon Resource Name (ARN) or name of the model to associate with this Provisioned Throughput. For a list of models for which you can purchase Provisioned Throughput, see Amazon Bedrock model IDs for purchasing Provisioned Throughput in the Amazon Bedrock User Guide.
     */
    modelId: ModelIdentifier;
    /**
     * The commitment duration requested for the Provisioned Throughput. Billing occurs hourly and is discounted for longer commitment terms. To request a no-commit Provisioned Throughput, omit this field. Custom models support all levels of commitment. To see which base models support no commitment, see Supported regions and models for Provisioned Throughput in the Amazon Bedrock User Guide
     */
    commitmentDuration?: CommitmentDuration;
    /**
     * Tags to associate with this Provisioned Throughput.
     */
    tags?: TagList;
  }
  export interface CreateProvisionedModelThroughputResponse {
    /**
     * The Amazon Resource Name (ARN) for this Provisioned Throughput.
     */
    provisionedModelArn: ProvisionedModelArn;
  }
  export type CustomModelArn = string;
  export type CustomModelName = string;
  export interface CustomModelSummary {
    /**
     * The Amazon Resource Name (ARN) of the custom model.
     */
    modelArn: CustomModelArn;
    /**
     * The name of the custom model.
     */
    modelName: CustomModelName;
    /**
     * Creation time of the model.
     */
    creationTime: Timestamp;
    /**
     * The base model Amazon Resource Name (ARN).
     */
    baseModelArn: ModelArn;
    /**
     * The base model name.
     */
    baseModelName: ModelName;
    /**
     * Specifies whether to carry out continued pre-training of a model or whether to fine-tune it. For more information, see Custom models.
     */
    customizationType?: CustomizationType;
  }
  export type CustomModelSummaryList = CustomModelSummary[];
  export type CustomizationType = "FINE_TUNING"|"CONTINUED_PRE_TRAINING"|string;
  export interface DeleteCustomModelRequest {
    /**
     * Name of the model to delete.
     */
    modelIdentifier: ModelIdentifier;
  }
  export interface DeleteCustomModelResponse {
  }
  export interface DeleteGuardrailRequest {
    /**
     * The unique identifier of the guardrail.
     */
    guardrailIdentifier: GuardrailIdentifier;
    /**
     * The version of the guardrail.
     */
    guardrailVersion?: GuardrailNumericalVersion;
  }
  export interface DeleteGuardrailResponse {
  }
  export interface DeleteModelInvocationLoggingConfigurationRequest {
  }
  export interface DeleteModelInvocationLoggingConfigurationResponse {
  }
  export interface DeleteProvisionedModelThroughputRequest {
    /**
     * The Amazon Resource Name (ARN) or name of the Provisioned Throughput.
     */
    provisionedModelId: ProvisionedModelId;
  }
  export interface DeleteProvisionedModelThroughputResponse {
  }
  export type ErrorMessage = string;
  export type ErrorMessages = ErrorMessage[];
  export interface EvaluationBedrockModel {
    /**
     * The ARN of the Amazon Bedrock model specified.
     */
    modelIdentifier: EvaluationModelIdentifier;
    /**
     * Each Amazon Bedrock support different inference parameters that change how the model behaves during inference.
     */
    inferenceParams: EvaluationModelInferenceParams;
  }
  export interface EvaluationConfig {
    /**
     * Used to specify an automated model evaluation job. See AutomatedEvaluationConfig to view the required parameters.
     */
    automated?: AutomatedEvaluationConfig;
    /**
     * Used to specify a model evaluation job that uses human workers.See HumanEvaluationConfig to view the required parameters.
     */
    human?: HumanEvaluationConfig;
  }
  export interface EvaluationDataset {
    /**
     * Used to specify supported built-in prompt datasets. Valid values are Builtin.Bold, Builtin.BoolQ, Builtin.NaturalQuestions, Builtin.Gigaword, Builtin.RealToxicityPrompts, Builtin.TriviaQa, Builtin.T-Rex, Builtin.WomensEcommerceClothingReviews and Builtin.Wikitext2.
     */
    name: EvaluationDatasetName;
    /**
     * For custom prompt datasets, you must specify the location in Amazon S3 where the prompt dataset is saved.
     */
    datasetLocation?: EvaluationDatasetLocation;
  }
  export interface EvaluationDatasetLocation {
    /**
     * The S3 URI of the S3 bucket specified in the job.
     */
    s3Uri?: S3Uri;
  }
  export interface EvaluationDatasetMetricConfig {
    /**
     * The task type you want the model to carry out. 
     */
    taskType: EvaluationTaskType;
    /**
     * Specifies the prompt dataset.
     */
    dataset: EvaluationDataset;
    /**
     * The names of the metrics used. For automated model evaluation jobs valid values are "Builtin.Accuracy", "Builtin.Robustness", and "Builtin.Toxicity". In human-based model evaluation jobs the array of strings must match the name parameter specified in HumanEvaluationCustomMetric. 
     */
    metricNames: EvaluationMetricNames;
  }
  export type EvaluationDatasetMetricConfigs = EvaluationDatasetMetricConfig[];
  export type EvaluationDatasetName = string;
  export interface EvaluationInferenceConfig {
    /**
     * Used to specify the models.
     */
    models?: EvaluationModelConfigs;
  }
  export type EvaluationJobArn = string;
  export type EvaluationJobDescription = string;
  export type EvaluationJobIdentifier = string;
  export type EvaluationJobName = string;
  export type EvaluationJobStatus = "InProgress"|"Completed"|"Failed"|"Stopping"|"Stopped"|string;
  export type EvaluationJobType = "Human"|"Automated"|string;
  export type EvaluationMetricDescription = string;
  export type EvaluationMetricName = string;
  export type EvaluationMetricNames = EvaluationMetricName[];
  export interface EvaluationModelConfig {
    /**
     * Defines the Amazon Bedrock model and inference parameters you want used.
     */
    bedrockModel?: EvaluationBedrockModel;
  }
  export type EvaluationModelConfigs = EvaluationModelConfig[];
  export type EvaluationModelIdentifier = string;
  export type EvaluationModelIdentifiers = EvaluationModelIdentifier[];
  export type EvaluationModelInferenceParams = string;
  export interface EvaluationOutputDataConfig {
    /**
     * The Amazon S3 URI where the results of model evaluation job are saved.
     */
    s3Uri: S3Uri;
  }
  export type EvaluationRatingMethod = string;
  export type EvaluationSummaries = EvaluationSummary[];
  export interface EvaluationSummary {
    /**
     * The Amazon Resource Name (ARN) of the model evaluation job.
     */
    jobArn: EvaluationJobArn;
    /**
     * The name of the model evaluation job.
     */
    jobName: EvaluationJobName;
    /**
     * The current status of the model evaluation job. 
     */
    status: EvaluationJobStatus;
    /**
     * When the model evaluation job was created.
     */
    creationTime: Timestamp;
    /**
     * The type, either human or automatic, of model evaluation job.
     */
    jobType: EvaluationJobType;
    /**
     * What task type was used in the model evaluation job.
     */
    evaluationTaskTypes: EvaluationTaskTypes;
    /**
     * The Amazon Resource Names (ARNs) of the model(s) used in the model evaluation job.
     */
    modelIdentifiers: EvaluationModelIdentifiers;
  }
  export type EvaluationTaskType = "Summarization"|"Classification"|"QuestionAndAnswer"|"Generation"|"Custom"|string;
  export type EvaluationTaskTypes = EvaluationTaskType[];
  export type FineTuningJobStatus = "InProgress"|"Completed"|"Failed"|"Stopping"|"Stopped"|string;
  export type FoundationModelArn = string;
  export interface FoundationModelDetails {
    /**
     * The model Amazon Resource Name (ARN).
     */
    modelArn: FoundationModelArn;
    /**
     * The model identifier.
     */
    modelId: BedrockModelId;
    /**
     * The model name.
     */
    modelName?: BrandedName;
    /**
     * The model's provider name.
     */
    providerName?: BrandedName;
    /**
     * The input modalities that the model supports.
     */
    inputModalities?: ModelModalityList;
    /**
     * The output modalities that the model supports.
     */
    outputModalities?: ModelModalityList;
    /**
     * Indicates whether the model supports streaming.
     */
    responseStreamingSupported?: Boolean;
    /**
     * The customization that the model supports.
     */
    customizationsSupported?: ModelCustomizationList;
    /**
     * The inference types that the model supports.
     */
    inferenceTypesSupported?: InferenceTypeList;
    /**
     * Contains details about whether a model version is available or deprecated
     */
    modelLifecycle?: FoundationModelLifecycle;
  }
  export interface FoundationModelLifecycle {
    /**
     * Specifies whether a model version is available (ACTIVE) or deprecated (LEGACY.
     */
    status: FoundationModelLifecycleStatus;
  }
  export type FoundationModelLifecycleStatus = "ACTIVE"|"LEGACY"|string;
  export interface FoundationModelSummary {
    /**
     * The Amazon Resource Name (ARN) of the foundation model.
     */
    modelArn: FoundationModelArn;
    /**
     * The model ID of the foundation model.
     */
    modelId: BedrockModelId;
    /**
     * The name of the model.
     */
    modelName?: BrandedName;
    /**
     * The model's provider name.
     */
    providerName?: BrandedName;
    /**
     * The input modalities that the model supports.
     */
    inputModalities?: ModelModalityList;
    /**
     * The output modalities that the model supports.
     */
    outputModalities?: ModelModalityList;
    /**
     * Indicates whether the model supports streaming.
     */
    responseStreamingSupported?: Boolean;
    /**
     * Whether the model supports fine-tuning or continual pre-training.
     */
    customizationsSupported?: ModelCustomizationList;
    /**
     * The inference types that the model supports.
     */
    inferenceTypesSupported?: InferenceTypeList;
    /**
     * Contains details about whether a model version is available or deprecated.
     */
    modelLifecycle?: FoundationModelLifecycle;
  }
  export type FoundationModelSummaryList = FoundationModelSummary[];
  export interface GetCustomModelRequest {
    /**
     * Name or Amazon Resource Name (ARN) of the custom model.
     */
    modelIdentifier: ModelIdentifier;
  }
  export interface GetCustomModelResponse {
    /**
     * Amazon Resource Name (ARN) associated with this model.
     */
    modelArn: ModelArn;
    /**
     * Model name associated with this model.
     */
    modelName: CustomModelName;
    /**
     * Job name associated with this model.
     */
    jobName?: JobName;
    /**
     * Job Amazon Resource Name (ARN) associated with this model.
     */
    jobArn: ModelCustomizationJobArn;
    /**
     * Amazon Resource Name (ARN) of the base model.
     */
    baseModelArn: ModelArn;
    /**
     * The type of model customization.
     */
    customizationType?: CustomizationType;
    /**
     * The custom model is encrypted at rest using this key.
     */
    modelKmsKeyArn?: KmsKeyArn;
    /**
     * Hyperparameter values associated with this model. For details on the format for different models, see Custom model hyperparameters.
     */
    hyperParameters?: ModelCustomizationHyperParameters;
    /**
     * Contains information about the training dataset.
     */
    trainingDataConfig: TrainingDataConfig;
    /**
     * Contains information about the validation dataset.
     */
    validationDataConfig?: ValidationDataConfig;
    /**
     * Output data configuration associated with this custom model.
     */
    outputDataConfig: OutputDataConfig;
    /**
     * Contains training metrics from the job creation.
     */
    trainingMetrics?: TrainingMetrics;
    /**
     * The validation metrics from the job creation.
     */
    validationMetrics?: ValidationMetrics;
    /**
     * Creation time of the model.
     */
    creationTime: Timestamp;
  }
  export interface GetEvaluationJobRequest {
    /**
     * The Amazon Resource Name (ARN) of the model evaluation job.
     */
    jobIdentifier: EvaluationJobIdentifier;
  }
  export interface GetEvaluationJobResponse {
    /**
     * The name of the model evaluation job.
     */
    jobName: EvaluationJobName;
    /**
     * The status of the model evaluation job.
     */
    status: EvaluationJobStatus;
    /**
     * The Amazon Resource Name (ARN) of the model evaluation job.
     */
    jobArn: EvaluationJobArn;
    /**
     * The description of the model evaluation job.
     */
    jobDescription?: EvaluationJobDescription;
    /**
     * The Amazon Resource Name (ARN) of the IAM service role used in the model evaluation job.
     */
    roleArn: RoleArn;
    /**
     * The Amazon Resource Name (ARN) of the customer managed key specified when the model evaluation job was created.
     */
    customerEncryptionKeyId?: KmsKeyId;
    /**
     * The type of model evaluation job.
     */
    jobType: EvaluationJobType;
    /**
     * Contains details about the type of model evaluation job, the metrics used, the task type selected, the datasets used, and any custom metrics you defined.
     */
    evaluationConfig: EvaluationConfig;
    /**
     * Details about the models you specified in your model evaluation job.
     */
    inferenceConfig: EvaluationInferenceConfig;
    /**
     * Amazon S3 location for where output data is saved.
     */
    outputDataConfig: EvaluationOutputDataConfig;
    /**
     * When the model evaluation job was created.
     */
    creationTime: Timestamp;
    /**
     * When the model evaluation job was last modified.
     */
    lastModifiedTime?: Timestamp;
    /**
     * An array of strings the specify why the model evaluation job has failed.
     */
    failureMessages?: ErrorMessages;
  }
  export interface GetFoundationModelRequest {
    /**
     * The model identifier. 
     */
    modelIdentifier: ModelIdentifier;
  }
  export interface GetFoundationModelResponse {
    /**
     * Information about the foundation model.
     */
    modelDetails?: FoundationModelDetails;
  }
  export interface GetGuardrailRequest {
    /**
     * The unique identifier of the guardrail for which to get details.
     */
    guardrailIdentifier: GuardrailIdentifier;
    /**
     * The version of the guardrail for which to get details. If you don't specify a version, the response returns details for the DRAFT version.
     */
    guardrailVersion?: GuardrailVersion;
  }
  export interface GetGuardrailResponse {
    /**
     * The name of the guardrail.
     */
    name: GuardrailName;
    /**
     * The description of the guardrail.
     */
    description?: GuardrailDescription;
    /**
     * The unique identifier of the guardrail.
     */
    guardrailId: GuardrailId;
    /**
     * The ARN of the guardrail that was created.
     */
    guardrailArn: GuardrailArn;
    /**
     * The version of the guardrail.
     */
    version: GuardrailVersion;
    /**
     * The status of the guardrail.
     */
    status: GuardrailStatus;
    /**
     * The topic policy that was configured for the guardrail.
     */
    topicPolicy?: GuardrailTopicPolicy;
    /**
     * The content policy that was configured for the guardrail.
     */
    contentPolicy?: GuardrailContentPolicy;
    /**
     * The word policy that was configured for the guardrail.
     */
    wordPolicy?: GuardrailWordPolicy;
    /**
     * The sensitive information policy that was configured for the guardrail.
     */
    sensitiveInformationPolicy?: GuardrailSensitiveInformationPolicy;
    /**
     * The date and time at which the guardrail was created.
     */
    createdAt: Timestamp;
    /**
     * The date and time at which the guardrail was updated.
     */
    updatedAt: Timestamp;
    /**
     * Appears if the status is FAILED. A list of reasons for why the guardrail failed to be created, updated, versioned, or deleted.
     */
    statusReasons?: GuardrailStatusReasons;
    /**
     * Appears if the status of the guardrail is FAILED. A list of recommendations to carry out before retrying the request.
     */
    failureRecommendations?: GuardrailFailureRecommendations;
    /**
     * The message that the guardrail returns when it blocks a prompt.
     */
    blockedInputMessaging: GuardrailBlockedMessaging;
    /**
     * The message that the guardrail returns when it blocks a model response.
     */
    blockedOutputsMessaging: GuardrailBlockedMessaging;
    /**
     * The ARN of the KMS key that encrypts the guardrail.
     */
    kmsKeyArn?: KmsKeyArn;
  }
  export interface GetModelCustomizationJobRequest {
    /**
     * Identifier for the customization job.
     */
    jobIdentifier: ModelCustomizationJobIdentifier;
  }
  export interface GetModelCustomizationJobResponse {
    /**
     * The Amazon Resource Name (ARN) of the customization job.
     */
    jobArn: ModelCustomizationJobArn;
    /**
     * The name of the customization job.
     */
    jobName: JobName;
    /**
     * The name of the output model.
     */
    outputModelName: CustomModelName;
    /**
     * The Amazon Resource Name (ARN) of the output model.
     */
    outputModelArn?: CustomModelArn;
    /**
     * The token that you specified in the CreateCustomizationJob request.
     */
    clientRequestToken?: IdempotencyToken;
    /**
     * The Amazon Resource Name (ARN) of the IAM role.
     */
    roleArn: RoleArn;
    /**
     * The status of the job. A successful job transitions from in-progress to completed when the output model is ready to use. If the job failed, the failure message contains information about why the job failed.
     */
    status?: ModelCustomizationJobStatus;
    /**
     * Information about why the job failed.
     */
    failureMessage?: ErrorMessage;
    /**
     * Time that the resource was created.
     */
    creationTime: Timestamp;
    /**
     * Time that the resource was last modified.
     */
    lastModifiedTime?: Timestamp;
    /**
     * Time that the resource transitioned to terminal state.
     */
    endTime?: Timestamp;
    /**
     * Amazon Resource Name (ARN) of the base model.
     */
    baseModelArn: FoundationModelArn;
    /**
     * The hyperparameter values for the job. For details on the format for different models, see Custom model hyperparameters.
     */
    hyperParameters: ModelCustomizationHyperParameters;
    /**
     * Contains information about the training dataset.
     */
    trainingDataConfig: TrainingDataConfig;
    /**
     * Contains information about the validation dataset.
     */
    validationDataConfig: ValidationDataConfig;
    /**
     * Output data configuration 
     */
    outputDataConfig: OutputDataConfig;
    /**
     * The type of model customization.
     */
    customizationType?: CustomizationType;
    /**
     * The custom model is encrypted at rest using this key.
     */
    outputModelKmsKeyArn?: KmsKeyArn;
    /**
     * Contains training metrics from the job creation.
     */
    trainingMetrics?: TrainingMetrics;
    /**
     * The loss metric for each validator that you provided in the createjob request.
     */
    validationMetrics?: ValidationMetrics;
    /**
     * VPC configuration for the custom model job.
     */
    vpcConfig?: VpcConfig;
  }
  export interface GetModelInvocationLoggingConfigurationRequest {
  }
  export interface GetModelInvocationLoggingConfigurationResponse {
    /**
     * The current configuration values.
     */
    loggingConfig?: LoggingConfig;
  }
  export interface GetProvisionedModelThroughputRequest {
    /**
     * The Amazon Resource Name (ARN) or name of the Provisioned Throughput.
     */
    provisionedModelId: ProvisionedModelId;
  }
  export interface GetProvisionedModelThroughputResponse {
    /**
     * The number of model units allocated to this Provisioned Throughput.
     */
    modelUnits: PositiveInteger;
    /**
     * The number of model units that was requested for this Provisioned Throughput.
     */
    desiredModelUnits: PositiveInteger;
    /**
     * The name of the Provisioned Throughput.
     */
    provisionedModelName: ProvisionedModelName;
    /**
     * The Amazon Resource Name (ARN) of the Provisioned Throughput.
     */
    provisionedModelArn: ProvisionedModelArn;
    /**
     * The Amazon Resource Name (ARN) of the model associated with this Provisioned Throughput.
     */
    modelArn: ModelArn;
    /**
     * The Amazon Resource Name (ARN) of the model requested to be associated to this Provisioned Throughput. This value differs from the modelArn if updating hasn't completed.
     */
    desiredModelArn: ModelArn;
    /**
     * The Amazon Resource Name (ARN) of the base model for which the Provisioned Throughput was created, or of the base model that the custom model for which the Provisioned Throughput was created was customized.
     */
    foundationModelArn: FoundationModelArn;
    /**
     * The status of the Provisioned Throughput. 
     */
    status: ProvisionedModelStatus;
    /**
     * The timestamp of the creation time for this Provisioned Throughput. 
     */
    creationTime: Timestamp;
    /**
     * The timestamp of the last time that this Provisioned Throughput was modified. 
     */
    lastModifiedTime: Timestamp;
    /**
     * A failure message for any issues that occurred during creation, updating, or deletion of the Provisioned Throughput.
     */
    failureMessage?: ErrorMessage;
    /**
     * Commitment duration of the Provisioned Throughput.
     */
    commitmentDuration?: CommitmentDuration;
    /**
     * The timestamp for when the commitment term for the Provisioned Throughput expires.
     */
    commitmentExpirationTime?: Timestamp;
  }
  export type GuardrailArn = string;
  export type GuardrailBlockedMessaging = string;
  export interface GuardrailContentFilter {
    /**
     * The harmful category that the content filter is applied to.
     */
    type: GuardrailContentFilterType;
    /**
     * The strength of the content filter to apply to prompts. As you increase the filter strength, the likelihood of filtering harmful content increases and the probability of seeing harmful content in your application reduces.
     */
    inputStrength: GuardrailFilterStrength;
    /**
     * The strength of the content filter to apply to model responses. As you increase the filter strength, the likelihood of filtering harmful content increases and the probability of seeing harmful content in your application reduces.
     */
    outputStrength: GuardrailFilterStrength;
  }
  export interface GuardrailContentFilterConfig {
    /**
     * The harmful category that the content filter is applied to.
     */
    type: GuardrailContentFilterType;
    /**
     * The strength of the content filter to apply to prompts. As you increase the filter strength, the likelihood of filtering harmful content increases and the probability of seeing harmful content in your application reduces.
     */
    inputStrength: GuardrailFilterStrength;
    /**
     * The strength of the content filter to apply to model responses. As you increase the filter strength, the likelihood of filtering harmful content increases and the probability of seeing harmful content in your application reduces.
     */
    outputStrength: GuardrailFilterStrength;
  }
  export type GuardrailContentFilterType = "SEXUAL"|"VIOLENCE"|"HATE"|"INSULTS"|"MISCONDUCT"|"PROMPT_ATTACK"|string;
  export type GuardrailContentFilters = GuardrailContentFilter[];
  export type GuardrailContentFiltersConfig = GuardrailContentFilterConfig[];
  export interface GuardrailContentPolicy {
    /**
     * Contains the type of the content filter and how strongly it should apply to prompts and model responses.
     */
    filters?: GuardrailContentFilters;
  }
  export interface GuardrailContentPolicyConfig {
    /**
     * Contains the type of the content filter and how strongly it should apply to prompts and model responses.
     */
    filtersConfig: GuardrailContentFiltersConfig;
  }
  export type GuardrailDescription = string;
  export type GuardrailDraftVersion = string;
  export type GuardrailFailureRecommendation = string;
  export type GuardrailFailureRecommendations = GuardrailFailureRecommendation[];
  export type GuardrailFilterStrength = "NONE"|"LOW"|"MEDIUM"|"HIGH"|string;
  export type GuardrailId = string;
  export type GuardrailIdentifier = string;
  export type GuardrailManagedWordLists = GuardrailManagedWords[];
  export type GuardrailManagedWordListsConfig = GuardrailManagedWordsConfig[];
  export interface GuardrailManagedWords {
    /**
     * ManagedWords$type The managed word type that was configured for the guardrail. (For now, we only offer profanity word list)
     */
    type: GuardrailManagedWordsType;
  }
  export interface GuardrailManagedWordsConfig {
    /**
     * The managed word type to configure for the guardrail.
     */
    type: GuardrailManagedWordsType;
  }
  export type GuardrailManagedWordsType = "PROFANITY"|string;
  export type GuardrailName = string;
  export type GuardrailNumericalVersion = string;
  export type GuardrailPiiEntities = GuardrailPiiEntity[];
  export type GuardrailPiiEntitiesConfig = GuardrailPiiEntityConfig[];
  export interface GuardrailPiiEntity {
    /**
     * The type of PII entity. For example, Social Security Number.
     */
    type: GuardrailPiiEntityType;
    /**
     * The configured guardrail action when PII entity is detected.
     */
    action: GuardrailSensitiveInformationAction;
  }
  export interface GuardrailPiiEntityConfig {
    /**
     * Configure guardrail type when the PII entity is detected.
     */
    type: GuardrailPiiEntityType;
    /**
     * Configure guardrail action when the PII entity is detected.
     */
    action: GuardrailSensitiveInformationAction;
  }
  export type GuardrailPiiEntityType = "ADDRESS"|"AGE"|"AWS_ACCESS_KEY"|"AWS_SECRET_KEY"|"CA_HEALTH_NUMBER"|"CA_SOCIAL_INSURANCE_NUMBER"|"CREDIT_DEBIT_CARD_CVV"|"CREDIT_DEBIT_CARD_EXPIRY"|"CREDIT_DEBIT_CARD_NUMBER"|"DRIVER_ID"|"EMAIL"|"INTERNATIONAL_BANK_ACCOUNT_NUMBER"|"IP_ADDRESS"|"LICENSE_PLATE"|"MAC_ADDRESS"|"NAME"|"PASSWORD"|"PHONE"|"PIN"|"SWIFT_CODE"|"UK_NATIONAL_HEALTH_SERVICE_NUMBER"|"UK_NATIONAL_INSURANCE_NUMBER"|"UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER"|"URL"|"USERNAME"|"US_BANK_ACCOUNT_NUMBER"|"US_BANK_ROUTING_NUMBER"|"US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER"|"US_PASSPORT_NUMBER"|"US_SOCIAL_SECURITY_NUMBER"|"VEHICLE_IDENTIFICATION_NUMBER"|string;
  export interface GuardrailRegex {
    /**
     * The name of the regular expression for the guardrail.
     */
    name: GuardrailRegexNameString;
    /**
     * The description of the regular expression for the guardrail.
     */
    description?: GuardrailRegexDescriptionString;
    /**
     * The pattern of the regular expression configured for the guardrail.
     */
    pattern: GuardrailRegexPatternString;
    /**
     * The action taken when a match to the regular expression is detected.
     */
    action: GuardrailSensitiveInformationAction;
  }
  export interface GuardrailRegexConfig {
    /**
     * The name of the regular expression to configure for the guardrail.
     */
    name: GuardrailRegexConfigNameString;
    /**
     * The description of the regular expression to configure for the guardrail.
     */
    description?: GuardrailRegexConfigDescriptionString;
    /**
     * The regular expression pattern to configure for the guardrail.
     */
    pattern: GuardrailRegexConfigPatternString;
    /**
     * The guardrail action to configure when matching regular expression is detected.
     */
    action: GuardrailSensitiveInformationAction;
  }
  export type GuardrailRegexConfigDescriptionString = string;
  export type GuardrailRegexConfigNameString = string;
  export type GuardrailRegexConfigPatternString = string;
  export type GuardrailRegexDescriptionString = string;
  export type GuardrailRegexNameString = string;
  export type GuardrailRegexPatternString = string;
  export type GuardrailRegexes = GuardrailRegex[];
  export type GuardrailRegexesConfig = GuardrailRegexConfig[];
  export type GuardrailSensitiveInformationAction = "BLOCK"|"ANONYMIZE"|string;
  export interface GuardrailSensitiveInformationPolicy {
    /**
     * The list of PII entities configured for the guardrail.
     */
    piiEntities?: GuardrailPiiEntities;
    /**
     * The list of regular expressions configured for the guardrail.
     */
    regexes?: GuardrailRegexes;
  }
  export interface GuardrailSensitiveInformationPolicyConfig {
    /**
     * A list of PII entities to configure to the guardrail.
     */
    piiEntitiesConfig?: GuardrailPiiEntitiesConfig;
    /**
     * A list of regular expressions to configure to the guardrail.
     */
    regexesConfig?: GuardrailRegexesConfig;
  }
  export type GuardrailStatus = "CREATING"|"UPDATING"|"VERSIONING"|"READY"|"FAILED"|"DELETING"|string;
  export type GuardrailStatusReason = string;
  export type GuardrailStatusReasons = GuardrailStatusReason[];
  export type GuardrailSummaries = GuardrailSummary[];
  export interface GuardrailSummary {
    /**
     * The unique identifier of the guardrail.
     */
    id: GuardrailId;
    /**
     * The ARN of the guardrail.
     */
    arn: GuardrailArn;
    /**
     * The status of the guardrail.
     */
    status: GuardrailStatus;
    /**
     * The name of the guardrail.
     */
    name: GuardrailName;
    /**
     * A description of the guardrail.
     */
    description?: GuardrailDescription;
    /**
     * The version of the guardrail.
     */
    version: GuardrailVersion;
    /**
     * The date and time at which the guardrail was created.
     */
    createdAt: Timestamp;
    /**
     * The date and time at which the guardrail was last updated.
     */
    updatedAt: Timestamp;
  }
  export interface GuardrailTopic {
    /**
     * The name of the topic to deny.
     */
    name: GuardrailTopicName;
    /**
     * A definition of the topic to deny.
     */
    definition: GuardrailTopicDefinition;
    /**
     * A list of prompts, each of which is an example of a prompt that can be categorized as belonging to the topic.
     */
    examples?: GuardrailTopicExamples;
    /**
     * Specifies to deny the topic.
     */
    type?: GuardrailTopicType;
  }
  export interface GuardrailTopicConfig {
    /**
     * The name of the topic to deny.
     */
    name: GuardrailTopicName;
    /**
     * A definition of the topic to deny.
     */
    definition: GuardrailTopicDefinition;
    /**
     * A list of prompts, each of which is an example of a prompt that can be categorized as belonging to the topic.
     */
    examples?: GuardrailTopicExamples;
    /**
     * Specifies to deny the topic.
     */
    type: GuardrailTopicType;
  }
  export type GuardrailTopicDefinition = string;
  export type GuardrailTopicExample = string;
  export type GuardrailTopicExamples = GuardrailTopicExample[];
  export type GuardrailTopicName = string;
  export interface GuardrailTopicPolicy {
    /**
     * A list of policies related to topics that the guardrail should deny.
     */
    topics: GuardrailTopics;
  }
  export interface GuardrailTopicPolicyConfig {
    /**
     * A list of policies related to topics that the guardrail should deny.
     */
    topicsConfig: GuardrailTopicsConfig;
  }
  export type GuardrailTopicType = "DENY"|string;
  export type GuardrailTopics = GuardrailTopic[];
  export type GuardrailTopicsConfig = GuardrailTopicConfig[];
  export type GuardrailVersion = string;
  export interface GuardrailWord {
    /**
     * Text of the word configured for the guardrail to block.
     */
    text: GuardrailWordTextString;
  }
  export interface GuardrailWordConfig {
    /**
     * Text of the word configured for the guardrail to block.
     */
    text: GuardrailWordConfigTextString;
  }
  export type GuardrailWordConfigTextString = string;
  export interface GuardrailWordPolicy {
    /**
     * A list of words configured for the guardrail.
     */
    words?: GuardrailWords;
    /**
     * A list of managed words configured for the guardrail.
     */
    managedWordLists?: GuardrailManagedWordLists;
  }
  export interface GuardrailWordPolicyConfig {
    /**
     * A list of words to configure for the guardrail.
     */
    wordsConfig?: GuardrailWordsConfig;
    /**
     * A list of managed words to configure for the guardrail.
     */
    managedWordListsConfig?: GuardrailManagedWordListsConfig;
  }
  export type GuardrailWordTextString = string;
  export type GuardrailWords = GuardrailWord[];
  export type GuardrailWordsConfig = GuardrailWordConfig[];
  export interface HumanEvaluationConfig {
    /**
     * The parameters of the human workflow.
     */
    humanWorkflowConfig?: HumanWorkflowConfig;
    /**
     * A HumanEvaluationCustomMetric object. It contains the names the metrics, how the metrics are to be evaluated, an optional description.
     */
    customMetrics?: HumanEvaluationCustomMetrics;
    /**
     * Use to specify the metrics, task, and prompt dataset to be used in your model evaluation job.
     */
    datasetMetricConfigs: EvaluationDatasetMetricConfigs;
  }
  export interface HumanEvaluationCustomMetric {
    /**
     * The name of the metric. Your human evaluators will see this name in the evaluation UI.
     */
    name: EvaluationMetricName;
    /**
     * An optional description of the metric. Use this parameter to provide more details about the metric.
     */
    description?: EvaluationMetricDescription;
    /**
     * Choose how you want your human workers to evaluation your model. Valid values for rating methods are ThumbsUpDown, IndividualLikertScale,ComparisonLikertScale, ComparisonChoice, and ComparisonRank 
     */
    ratingMethod: EvaluationRatingMethod;
  }
  export type HumanEvaluationCustomMetrics = HumanEvaluationCustomMetric[];
  export type HumanTaskInstructions = string;
  export interface HumanWorkflowConfig {
    /**
     * The Amazon Resource Number (ARN) for the flow definition
     */
    flowDefinitionArn: SageMakerFlowDefinitionArn;
    /**
     * Instructions for the flow definition
     */
    instructions?: HumanTaskInstructions;
  }
  export type IdempotencyToken = string;
  export type InferenceType = "ON_DEMAND"|"PROVISIONED"|string;
  export type InferenceTypeList = InferenceType[];
  export type JobName = string;
  export type KeyPrefix = string;
  export type KmsKeyArn = string;
  export type KmsKeyId = string;
  export interface ListCustomModelsRequest {
    /**
     * Return custom models created before the specified time. 
     */
    creationTimeBefore?: Timestamp;
    /**
     * Return custom models created after the specified time. 
     */
    creationTimeAfter?: Timestamp;
    /**
     * Return custom models only if the job name contains these characters.
     */
    nameContains?: CustomModelName;
    /**
     * Return custom models only if the base model Amazon Resource Name (ARN) matches this parameter.
     */
    baseModelArnEquals?: ModelArn;
    /**
     * Return custom models only if the foundation model Amazon Resource Name (ARN) matches this parameter.
     */
    foundationModelArnEquals?: FoundationModelArn;
    /**
     * Maximum number of results to return in the response.
     */
    maxResults?: MaxResults;
    /**
     * Continuation token from the previous response, for Amazon Bedrock to list the next set of results.
     */
    nextToken?: PaginationToken;
    /**
     * The field to sort by in the returned list of models.
     */
    sortBy?: SortModelsBy;
    /**
     * The sort order of the results.
     */
    sortOrder?: SortOrder;
  }
  export interface ListCustomModelsResponse {
    /**
     * Continuation token for the next request to list the next set of results.
     */
    nextToken?: PaginationToken;
    /**
     * Model summaries.
     */
    modelSummaries?: CustomModelSummaryList;
  }
  export interface ListEvaluationJobsRequest {
    /**
     * A filter that includes model evaluation jobs created after the time specified.
     */
    creationTimeAfter?: Timestamp;
    /**
     * A filter that includes model evaluation jobs created prior to the time specified.
     */
    creationTimeBefore?: Timestamp;
    /**
     * Only return jobs where the status condition is met.
     */
    statusEquals?: EvaluationJobStatus;
    /**
     * Query parameter string for model evaluation job names.
     */
    nameContains?: EvaluationJobName;
    /**
     * The maximum number of results to return.
     */
    maxResults?: MaxResults;
    /**
     * Continuation token from the previous response, for Amazon Bedrock to list the next set of results.
     */
    nextToken?: PaginationToken;
    /**
     * Allows you to sort model evaluation jobs by when they were created.
     */
    sortBy?: SortJobsBy;
    /**
     * How you want the order of jobs sorted.
     */
    sortOrder?: SortOrder;
  }
  export interface ListEvaluationJobsResponse {
    /**
     * Continuation token from the previous response, for Amazon Bedrock to list the next set of results.
     */
    nextToken?: PaginationToken;
    /**
     * A summary of the model evaluation jobs.
     */
    jobSummaries?: EvaluationSummaries;
  }
  export interface ListFoundationModelsRequest {
    /**
     * Return models belonging to the model provider that you specify.
     */
    byProvider?: Provider;
    /**
     * Return models that support the customization type that you specify. For more information, see Custom models in the Amazon Bedrock User Guide.
     */
    byCustomizationType?: ModelCustomization;
    /**
     * Return models that support the output modality that you specify.
     */
    byOutputModality?: ModelModality;
    /**
     * Return models that support the inference type that you specify. For more information, see Provisioned Throughput in the Amazon Bedrock User Guide.
     */
    byInferenceType?: InferenceType;
  }
  export interface ListFoundationModelsResponse {
    /**
     * A list of Amazon Bedrock foundation models.
     */
    modelSummaries?: FoundationModelSummaryList;
  }
  export interface ListGuardrailsRequest {
    /**
     * The unique identifier of the guardrail.
     */
    guardrailIdentifier?: GuardrailIdentifier;
    /**
     * The maximum number of results to return in the response.
     */
    maxResults?: MaxResults;
    /**
     * If there are more results than were returned in the response, the response returns a nextToken that you can send in another ListGuardrails request to see the next batch of results.
     */
    nextToken?: PaginationToken;
  }
  export interface ListGuardrailsResponse {
    /**
     * A list of objects, each of which contains details about a guardrail.
     */
    guardrails: GuardrailSummaries;
    /**
     * If there are more results than were returned in the response, the response returns a nextToken that you can send in another ListGuardrails request to see the next batch of results.
     */
    nextToken?: PaginationToken;
  }
  export interface ListModelCustomizationJobsRequest {
    /**
     * Return customization jobs created after the specified time. 
     */
    creationTimeAfter?: Timestamp;
    /**
     * Return customization jobs created before the specified time. 
     */
    creationTimeBefore?: Timestamp;
    /**
     * Return customization jobs with the specified status. 
     */
    statusEquals?: FineTuningJobStatus;
    /**
     * Return customization jobs only if the job name contains these characters.
     */
    nameContains?: JobName;
    /**
     * Maximum number of results to return in the response.
     */
    maxResults?: MaxResults;
    /**
     * Continuation token from the previous response, for Amazon Bedrock to list the next set of results.
     */
    nextToken?: PaginationToken;
    /**
     * The field to sort by in the returned list of jobs.
     */
    sortBy?: SortJobsBy;
    /**
     * The sort order of the results.
     */
    sortOrder?: SortOrder;
  }
  export interface ListModelCustomizationJobsResponse {
    /**
     * Page continuation token to use in the next request.
     */
    nextToken?: PaginationToken;
    /**
     * Job summaries.
     */
    modelCustomizationJobSummaries?: ModelCustomizationJobSummaries;
  }
  export interface ListProvisionedModelThroughputsRequest {
    /**
     * A filter that returns Provisioned Throughputs created after the specified time. 
     */
    creationTimeAfter?: Timestamp;
    /**
     * A filter that returns Provisioned Throughputs created before the specified time. 
     */
    creationTimeBefore?: Timestamp;
    /**
     * A filter that returns Provisioned Throughputs if their statuses matches the value that you specify.
     */
    statusEquals?: ProvisionedModelStatus;
    /**
     * A filter that returns Provisioned Throughputs whose model Amazon Resource Name (ARN) is equal to the value that you specify.
     */
    modelArnEquals?: ModelArn;
    /**
     * A filter that returns Provisioned Throughputs if their name contains the expression that you specify.
     */
    nameContains?: ProvisionedModelName;
    /**
     * THe maximum number of results to return in the response. If there are more results than the number you specified, the response returns a nextToken value. To see the next batch of results, send the nextToken value in another list request.
     */
    maxResults?: MaxResults;
    /**
     * If there are more results than the number you specified in the maxResults field, the response returns a nextToken value. To see the next batch of results, specify the nextToken value in this field.
     */
    nextToken?: PaginationToken;
    /**
     * The field by which to sort the returned list of Provisioned Throughputs.
     */
    sortBy?: SortByProvisionedModels;
    /**
     * The sort order of the results.
     */
    sortOrder?: SortOrder;
  }
  export interface ListProvisionedModelThroughputsResponse {
    /**
     * If there are more results than the number you specified in the maxResults field, this value is returned. To see the next batch of results, include this value in the nextToken field in another list request.
     */
    nextToken?: PaginationToken;
    /**
     * A list of summaries, one for each Provisioned Throughput in the response.
     */
    provisionedModelSummaries?: ProvisionedModelSummaries;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    resourceARN: TaggableResourcesArn;
  }
  export interface ListTagsForResourceResponse {
    /**
     * An array of the tags associated with this resource.
     */
    tags?: TagList;
  }
  export type LogGroupName = string;
  export interface LoggingConfig {
    /**
     * CloudWatch logging configuration.
     */
    cloudWatchConfig?: CloudWatchConfig;
    /**
     * S3 configuration for storing log data.
     */
    s3Config?: S3Config;
    /**
     * Set to include text data in the log delivery.
     */
    textDataDeliveryEnabled?: Boolean;
    /**
     * Set to include image data in the log delivery.
     */
    imageDataDeliveryEnabled?: Boolean;
    /**
     * Set to include embeddings data in the log delivery.
     */
    embeddingDataDeliveryEnabled?: Boolean;
  }
  export type MaxResults = number;
  export type MetricFloat = number;
  export type ModelArn = string;
  export type ModelCustomization = "FINE_TUNING"|"CONTINUED_PRE_TRAINING"|string;
  export type ModelCustomizationHyperParameters = {[key: string]: String};
  export type ModelCustomizationJobArn = string;
  export type ModelCustomizationJobIdentifier = string;
  export type ModelCustomizationJobStatus = "InProgress"|"Completed"|"Failed"|"Stopping"|"Stopped"|string;
  export type ModelCustomizationJobSummaries = ModelCustomizationJobSummary[];
  export interface ModelCustomizationJobSummary {
    /**
     * Amazon Resource Name (ARN) of the customization job.
     */
    jobArn: ModelCustomizationJobArn;
    /**
     * Amazon Resource Name (ARN) of the base model.
     */
    baseModelArn: ModelArn;
    /**
     * Name of the customization job.
     */
    jobName: JobName;
    /**
     * Status of the customization job. 
     */
    status: ModelCustomizationJobStatus;
    /**
     * Time that the customization job was last modified.
     */
    lastModifiedTime?: Timestamp;
    /**
     * Creation time of the custom model. 
     */
    creationTime: Timestamp;
    /**
     * Time that the customization job ended.
     */
    endTime?: Timestamp;
    /**
     * Amazon Resource Name (ARN) of the custom model.
     */
    customModelArn?: CustomModelArn;
    /**
     * Name of the custom model.
     */
    customModelName?: CustomModelName;
    /**
     * Specifies whether to carry out continued pre-training of a model or whether to fine-tune it. For more information, see Custom models.
     */
    customizationType?: CustomizationType;
  }
  export type ModelCustomizationList = ModelCustomization[];
  export type ModelIdentifier = string;
  export type ModelModality = "TEXT"|"IMAGE"|"EMBEDDING"|string;
  export type ModelModalityList = ModelModality[];
  export type ModelName = string;
  export interface OutputDataConfig {
    /**
     * The S3 URI where the output data is stored.
     */
    s3Uri: S3Uri;
  }
  export type PaginationToken = string;
  export type PositiveInteger = number;
  export type Provider = string;
  export type ProvisionedModelArn = string;
  export type ProvisionedModelId = string;
  export type ProvisionedModelName = string;
  export type ProvisionedModelStatus = "Creating"|"InService"|"Updating"|"Failed"|string;
  export type ProvisionedModelSummaries = ProvisionedModelSummary[];
  export interface ProvisionedModelSummary {
    /**
     * The name of the Provisioned Throughput.
     */
    provisionedModelName: ProvisionedModelName;
    /**
     * The Amazon Resource Name (ARN) of the Provisioned Throughput.
     */
    provisionedModelArn: ProvisionedModelArn;
    /**
     * The Amazon Resource Name (ARN) of the model associated with the Provisioned Throughput.
     */
    modelArn: ModelArn;
    /**
     * The Amazon Resource Name (ARN) of the model requested to be associated to this Provisioned Throughput. This value differs from the modelArn if updating hasn't completed.
     */
    desiredModelArn: ModelArn;
    /**
     * The Amazon Resource Name (ARN) of the base model for which the Provisioned Throughput was created, or of the base model that the custom model for which the Provisioned Throughput was created was customized.
     */
    foundationModelArn: FoundationModelArn;
    /**
     * The number of model units allocated to the Provisioned Throughput.
     */
    modelUnits: PositiveInteger;
    /**
     * The number of model units that was requested to be allocated to the Provisioned Throughput.
     */
    desiredModelUnits: PositiveInteger;
    /**
     * The status of the Provisioned Throughput.
     */
    status: ProvisionedModelStatus;
    /**
     * The duration for which the Provisioned Throughput was committed.
     */
    commitmentDuration?: CommitmentDuration;
    /**
     * The timestamp for when the commitment term of the Provisioned Throughput expires.
     */
    commitmentExpirationTime?: Timestamp;
    /**
     * The time that the Provisioned Throughput was created. 
     */
    creationTime: Timestamp;
    /**
     * The time that the Provisioned Throughput was last modified. 
     */
    lastModifiedTime: Timestamp;
  }
  export interface PutModelInvocationLoggingConfigurationRequest {
    /**
     * The logging configuration values to set.
     */
    loggingConfig: LoggingConfig;
  }
  export interface PutModelInvocationLoggingConfigurationResponse {
  }
  export type RoleArn = string;
  export interface S3Config {
    /**
     * S3 bucket name.
     */
    bucketName: BucketName;
    /**
     * S3 prefix. 
     */
    keyPrefix?: KeyPrefix;
  }
  export type S3Uri = string;
  export type SageMakerFlowDefinitionArn = string;
  export type SecurityGroupId = string;
  export type SecurityGroupIds = SecurityGroupId[];
  export type SortByProvisionedModels = "CreationTime"|string;
  export type SortJobsBy = "CreationTime"|string;
  export type SortModelsBy = "CreationTime"|string;
  export type SortOrder = "Ascending"|"Descending"|string;
  export interface StopEvaluationJobRequest {
    /**
     * The ARN of the model evaluation job you want to stop.
     */
    jobIdentifier: EvaluationJobIdentifier;
  }
  export interface StopEvaluationJobResponse {
  }
  export interface StopModelCustomizationJobRequest {
    /**
     * Job identifier of the job to stop.
     */
    jobIdentifier: ModelCustomizationJobIdentifier;
  }
  export interface StopModelCustomizationJobResponse {
  }
  export type String = string;
  export type SubnetId = string;
  export type SubnetIds = SubnetId[];
  export interface Tag {
    /**
     * Key for the tag.
     */
    key: TagKey;
    /**
     * Value for the tag.
     */
    value: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource to tag.
     */
    resourceARN: TaggableResourcesArn;
    /**
     * Tags to associate with the resource.
     */
    tags: TagList;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type TaggableResourcesArn = string;
  export type Timestamp = Date;
  export interface TrainingDataConfig {
    /**
     * The S3 URI where the training data is stored.
     */
    s3Uri: S3Uri;
  }
  export interface TrainingMetrics {
    /**
     * Loss metric associated with the custom job.
     */
    trainingLoss?: MetricFloat;
  }
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource to untag.
     */
    resourceARN: TaggableResourcesArn;
    /**
     * Tag keys of the tags to remove from the resource.
     */
    tagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateGuardrailRequest {
    /**
     * The unique identifier of the guardrail
     */
    guardrailIdentifier: GuardrailIdentifier;
    /**
     * A name for the guardrail.
     */
    name: GuardrailName;
    /**
     * A description of the guardrail.
     */
    description?: GuardrailDescription;
    /**
     * The topic policy to configure for the guardrail.
     */
    topicPolicyConfig?: GuardrailTopicPolicyConfig;
    /**
     * The content policy to configure for the guardrail.
     */
    contentPolicyConfig?: GuardrailContentPolicyConfig;
    /**
     * The word policy to configure for the guardrail.
     */
    wordPolicyConfig?: GuardrailWordPolicyConfig;
    /**
     * The sensitive information policy to configure for the guardrail.
     */
    sensitiveInformationPolicyConfig?: GuardrailSensitiveInformationPolicyConfig;
    /**
     * The message to return when the guardrail blocks a prompt.
     */
    blockedInputMessaging: GuardrailBlockedMessaging;
    /**
     * The message to return when the guardrail blocks a model response.
     */
    blockedOutputsMessaging: GuardrailBlockedMessaging;
    /**
     * The ARN of the KMS key with which to encrypt the guardrail.
     */
    kmsKeyId?: KmsKeyId;
  }
  export interface UpdateGuardrailResponse {
    /**
     * The unique identifier of the guardrail
     */
    guardrailId: GuardrailId;
    /**
     * The ARN of the guardrail that was created.
     */
    guardrailArn: GuardrailArn;
    /**
     * The version of the guardrail.
     */
    version: GuardrailDraftVersion;
    /**
     * The date and time at which the guardrail was updated.
     */
    updatedAt: Timestamp;
  }
  export interface UpdateProvisionedModelThroughputRequest {
    /**
     * The Amazon Resource Name (ARN) or name of the Provisioned Throughput to update.
     */
    provisionedModelId: ProvisionedModelId;
    /**
     * The new name for this Provisioned Throughput.
     */
    desiredProvisionedModelName?: ProvisionedModelName;
    /**
     * The Amazon Resource Name (ARN) of the new model to associate with this Provisioned Throughput. You can't specify this field if this Provisioned Throughput is associated with a base model. If this Provisioned Throughput is associated with a custom model, you can specify one of the following options:   The base model from which the custom model was customized.   Another custom model that was customized from the same base model as the custom model.  
     */
    desiredModelId?: ModelIdentifier;
  }
  export interface UpdateProvisionedModelThroughputResponse {
  }
  export interface ValidationDataConfig {
    /**
     * Information about the validators.
     */
    validators: Validators;
  }
  export type ValidationMetrics = ValidatorMetric[];
  export interface Validator {
    /**
     * The S3 URI where the validation data is stored.
     */
    s3Uri: S3Uri;
  }
  export interface ValidatorMetric {
    /**
     * The validation loss associated with this validator.
     */
    validationLoss?: MetricFloat;
  }
  export type Validators = Validator[];
  export interface VpcConfig {
    /**
     * VPC configuration subnets.
     */
    subnetIds: SubnetIds;
    /**
     * VPC configuration security group Ids.
     */
    securityGroupIds: SecurityGroupIds;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2023-04-20"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Bedrock client.
   */
  export import Types = Bedrock;
}
export = Bedrock;
