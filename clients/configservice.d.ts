import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class ConfigService extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ConfigService.Types.ClientConfiguration)
  config: Config & ConfigService.Types.ClientConfiguration;
  /**
   * Returns the current configuration items for resources that are present in your AWS Config aggregator. The operation also returns a list of resources that are not processed in the current request. If there are no unprocessed resources, the operation returns an empty unprocessedResourceIdentifiers list.     The API does not return results for deleted resources.    The API does not return tags and relationships.   
   */
  batchGetAggregateResourceConfig(params: ConfigService.Types.BatchGetAggregateResourceConfigRequest, callback?: (err: AWSError, data: ConfigService.Types.BatchGetAggregateResourceConfigResponse) => void): Request<ConfigService.Types.BatchGetAggregateResourceConfigResponse, AWSError>;
  /**
   * Returns the current configuration items for resources that are present in your AWS Config aggregator. The operation also returns a list of resources that are not processed in the current request. If there are no unprocessed resources, the operation returns an empty unprocessedResourceIdentifiers list.     The API does not return results for deleted resources.    The API does not return tags and relationships.   
   */
  batchGetAggregateResourceConfig(callback?: (err: AWSError, data: ConfigService.Types.BatchGetAggregateResourceConfigResponse) => void): Request<ConfigService.Types.BatchGetAggregateResourceConfigResponse, AWSError>;
  /**
   * Returns the current configuration for one or more requested resources. The operation also returns a list of resources that are not processed in the current request. If there are no unprocessed resources, the operation returns an empty unprocessedResourceKeys list.     The API does not return results for deleted resources.    The API does not return any tags for the requested resources. This information is filtered out of the supplementaryConfiguration section of the API response.   
   */
  batchGetResourceConfig(params: ConfigService.Types.BatchGetResourceConfigRequest, callback?: (err: AWSError, data: ConfigService.Types.BatchGetResourceConfigResponse) => void): Request<ConfigService.Types.BatchGetResourceConfigResponse, AWSError>;
  /**
   * Returns the current configuration for one or more requested resources. The operation also returns a list of resources that are not processed in the current request. If there are no unprocessed resources, the operation returns an empty unprocessedResourceKeys list.     The API does not return results for deleted resources.    The API does not return any tags for the requested resources. This information is filtered out of the supplementaryConfiguration section of the API response.   
   */
  batchGetResourceConfig(callback?: (err: AWSError, data: ConfigService.Types.BatchGetResourceConfigResponse) => void): Request<ConfigService.Types.BatchGetResourceConfigResponse, AWSError>;
  /**
   * Deletes the authorization granted to the specified configuration aggregator account in a specified region.
   */
  deleteAggregationAuthorization(params: ConfigService.Types.DeleteAggregationAuthorizationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the authorization granted to the specified configuration aggregator account in a specified region.
   */
  deleteAggregationAuthorization(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified AWS Config rule and all of its evaluation results. AWS Config sets the state of a rule to DELETING until the deletion is complete. You cannot update a rule while it is in this state. If you make a PutConfigRule or DeleteConfigRule request for the rule, you will receive a ResourceInUseException. You can check the state of a rule by using the DescribeConfigRules request.
   */
  deleteConfigRule(params: ConfigService.Types.DeleteConfigRuleRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified AWS Config rule and all of its evaluation results. AWS Config sets the state of a rule to DELETING until the deletion is complete. You cannot update a rule while it is in this state. If you make a PutConfigRule or DeleteConfigRule request for the rule, you will receive a ResourceInUseException. You can check the state of a rule by using the DescribeConfigRules request.
   */
  deleteConfigRule(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified configuration aggregator and the aggregated data associated with the aggregator.
   */
  deleteConfigurationAggregator(params: ConfigService.Types.DeleteConfigurationAggregatorRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified configuration aggregator and the aggregated data associated with the aggregator.
   */
  deleteConfigurationAggregator(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the configuration recorder. After the configuration recorder is deleted, AWS Config will not record resource configuration changes until you create a new configuration recorder. This action does not delete the configuration information that was previously recorded. You will be able to access the previously recorded information by using the GetResourceConfigHistory action, but you will not be able to access this information in the AWS Config console until you create a new configuration recorder.
   */
  deleteConfigurationRecorder(params: ConfigService.Types.DeleteConfigurationRecorderRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the configuration recorder. After the configuration recorder is deleted, AWS Config will not record resource configuration changes until you create a new configuration recorder. This action does not delete the configuration information that was previously recorded. You will be able to access the previously recorded information by using the GetResourceConfigHistory action, but you will not be able to access this information in the AWS Config console until you create a new configuration recorder.
   */
  deleteConfigurationRecorder(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the delivery channel. Before you can delete the delivery channel, you must stop the configuration recorder by using the StopConfigurationRecorder action.
   */
  deleteDeliveryChannel(params: ConfigService.Types.DeleteDeliveryChannelRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the delivery channel. Before you can delete the delivery channel, you must stop the configuration recorder by using the StopConfigurationRecorder action.
   */
  deleteDeliveryChannel(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the evaluation results for the specified AWS Config rule. You can specify one AWS Config rule per request. After you delete the evaluation results, you can call the StartConfigRulesEvaluation API to start evaluating your AWS resources against the rule.
   */
  deleteEvaluationResults(params: ConfigService.Types.DeleteEvaluationResultsRequest, callback?: (err: AWSError, data: ConfigService.Types.DeleteEvaluationResultsResponse) => void): Request<ConfigService.Types.DeleteEvaluationResultsResponse, AWSError>;
  /**
   * Deletes the evaluation results for the specified AWS Config rule. You can specify one AWS Config rule per request. After you delete the evaluation results, you can call the StartConfigRulesEvaluation API to start evaluating your AWS resources against the rule.
   */
  deleteEvaluationResults(callback?: (err: AWSError, data: ConfigService.Types.DeleteEvaluationResultsResponse) => void): Request<ConfigService.Types.DeleteEvaluationResultsResponse, AWSError>;
  /**
   * Deletes pending authorization requests for a specified aggregator account in a specified region.
   */
  deletePendingAggregationRequest(params: ConfigService.Types.DeletePendingAggregationRequestRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes pending authorization requests for a specified aggregator account in a specified region.
   */
  deletePendingAggregationRequest(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the retention configuration.
   */
  deleteRetentionConfiguration(params: ConfigService.Types.DeleteRetentionConfigurationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the retention configuration.
   */
  deleteRetentionConfiguration(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Schedules delivery of a configuration snapshot to the Amazon S3 bucket in the specified delivery channel. After the delivery has started, AWS Config sends the following notifications using an Amazon SNS topic that you have specified.   Notification of the start of the delivery.   Notification of the completion of the delivery, if the delivery was successfully completed.   Notification of delivery failure, if the delivery failed.  
   */
  deliverConfigSnapshot(params: ConfigService.Types.DeliverConfigSnapshotRequest, callback?: (err: AWSError, data: ConfigService.Types.DeliverConfigSnapshotResponse) => void): Request<ConfigService.Types.DeliverConfigSnapshotResponse, AWSError>;
  /**
   * Schedules delivery of a configuration snapshot to the Amazon S3 bucket in the specified delivery channel. After the delivery has started, AWS Config sends the following notifications using an Amazon SNS topic that you have specified.   Notification of the start of the delivery.   Notification of the completion of the delivery, if the delivery was successfully completed.   Notification of delivery failure, if the delivery failed.  
   */
  deliverConfigSnapshot(callback?: (err: AWSError, data: ConfigService.Types.DeliverConfigSnapshotResponse) => void): Request<ConfigService.Types.DeliverConfigSnapshotResponse, AWSError>;
  /**
   * Returns a list of compliant and noncompliant rules with the number of resources for compliant and noncompliant rules.   The results can return an empty result page, but if you have a nextToken, the results are displayed on the next page. 
   */
  describeAggregateComplianceByConfigRules(params: ConfigService.Types.DescribeAggregateComplianceByConfigRulesRequest, callback?: (err: AWSError, data: ConfigService.Types.DescribeAggregateComplianceByConfigRulesResponse) => void): Request<ConfigService.Types.DescribeAggregateComplianceByConfigRulesResponse, AWSError>;
  /**
   * Returns a list of compliant and noncompliant rules with the number of resources for compliant and noncompliant rules.   The results can return an empty result page, but if you have a nextToken, the results are displayed on the next page. 
   */
  describeAggregateComplianceByConfigRules(callback?: (err: AWSError, data: ConfigService.Types.DescribeAggregateComplianceByConfigRulesResponse) => void): Request<ConfigService.Types.DescribeAggregateComplianceByConfigRulesResponse, AWSError>;
  /**
   * Returns a list of authorizations granted to various aggregator accounts and regions.
   */
  describeAggregationAuthorizations(params: ConfigService.Types.DescribeAggregationAuthorizationsRequest, callback?: (err: AWSError, data: ConfigService.Types.DescribeAggregationAuthorizationsResponse) => void): Request<ConfigService.Types.DescribeAggregationAuthorizationsResponse, AWSError>;
  /**
   * Returns a list of authorizations granted to various aggregator accounts and regions.
   */
  describeAggregationAuthorizations(callback?: (err: AWSError, data: ConfigService.Types.DescribeAggregationAuthorizationsResponse) => void): Request<ConfigService.Types.DescribeAggregationAuthorizationsResponse, AWSError>;
  /**
   * Indicates whether the specified AWS Config rules are compliant. If a rule is noncompliant, this action returns the number of AWS resources that do not comply with the rule. A rule is compliant if all of the evaluated resources comply with it. It is noncompliant if any of these resources do not comply. If AWS Config has no current evaluation results for the rule, it returns INSUFFICIENT_DATA. This result might indicate one of the following conditions:   AWS Config has never invoked an evaluation for the rule. To check whether it has, use the DescribeConfigRuleEvaluationStatus action to get the LastSuccessfulInvocationTime and LastFailedInvocationTime.   The rule's AWS Lambda function is failing to send evaluation results to AWS Config. Verify that the role you assigned to your configuration recorder includes the config:PutEvaluations permission. If the rule is a custom rule, verify that the AWS Lambda execution role includes the config:PutEvaluations permission.   The rule's AWS Lambda function has returned NOT_APPLICABLE for all evaluation results. This can occur if the resources were deleted or removed from the rule's scope.  
   */
  describeComplianceByConfigRule(params: ConfigService.Types.DescribeComplianceByConfigRuleRequest, callback?: (err: AWSError, data: ConfigService.Types.DescribeComplianceByConfigRuleResponse) => void): Request<ConfigService.Types.DescribeComplianceByConfigRuleResponse, AWSError>;
  /**
   * Indicates whether the specified AWS Config rules are compliant. If a rule is noncompliant, this action returns the number of AWS resources that do not comply with the rule. A rule is compliant if all of the evaluated resources comply with it. It is noncompliant if any of these resources do not comply. If AWS Config has no current evaluation results for the rule, it returns INSUFFICIENT_DATA. This result might indicate one of the following conditions:   AWS Config has never invoked an evaluation for the rule. To check whether it has, use the DescribeConfigRuleEvaluationStatus action to get the LastSuccessfulInvocationTime and LastFailedInvocationTime.   The rule's AWS Lambda function is failing to send evaluation results to AWS Config. Verify that the role you assigned to your configuration recorder includes the config:PutEvaluations permission. If the rule is a custom rule, verify that the AWS Lambda execution role includes the config:PutEvaluations permission.   The rule's AWS Lambda function has returned NOT_APPLICABLE for all evaluation results. This can occur if the resources were deleted or removed from the rule's scope.  
   */
  describeComplianceByConfigRule(callback?: (err: AWSError, data: ConfigService.Types.DescribeComplianceByConfigRuleResponse) => void): Request<ConfigService.Types.DescribeComplianceByConfigRuleResponse, AWSError>;
  /**
   * Indicates whether the specified AWS resources are compliant. If a resource is noncompliant, this action returns the number of AWS Config rules that the resource does not comply with. A resource is compliant if it complies with all the AWS Config rules that evaluate it. It is noncompliant if it does not comply with one or more of these rules. If AWS Config has no current evaluation results for the resource, it returns INSUFFICIENT_DATA. This result might indicate one of the following conditions about the rules that evaluate the resource:   AWS Config has never invoked an evaluation for the rule. To check whether it has, use the DescribeConfigRuleEvaluationStatus action to get the LastSuccessfulInvocationTime and LastFailedInvocationTime.   The rule's AWS Lambda function is failing to send evaluation results to AWS Config. Verify that the role that you assigned to your configuration recorder includes the config:PutEvaluations permission. If the rule is a custom rule, verify that the AWS Lambda execution role includes the config:PutEvaluations permission.   The rule's AWS Lambda function has returned NOT_APPLICABLE for all evaluation results. This can occur if the resources were deleted or removed from the rule's scope.  
   */
  describeComplianceByResource(params: ConfigService.Types.DescribeComplianceByResourceRequest, callback?: (err: AWSError, data: ConfigService.Types.DescribeComplianceByResourceResponse) => void): Request<ConfigService.Types.DescribeComplianceByResourceResponse, AWSError>;
  /**
   * Indicates whether the specified AWS resources are compliant. If a resource is noncompliant, this action returns the number of AWS Config rules that the resource does not comply with. A resource is compliant if it complies with all the AWS Config rules that evaluate it. It is noncompliant if it does not comply with one or more of these rules. If AWS Config has no current evaluation results for the resource, it returns INSUFFICIENT_DATA. This result might indicate one of the following conditions about the rules that evaluate the resource:   AWS Config has never invoked an evaluation for the rule. To check whether it has, use the DescribeConfigRuleEvaluationStatus action to get the LastSuccessfulInvocationTime and LastFailedInvocationTime.   The rule's AWS Lambda function is failing to send evaluation results to AWS Config. Verify that the role that you assigned to your configuration recorder includes the config:PutEvaluations permission. If the rule is a custom rule, verify that the AWS Lambda execution role includes the config:PutEvaluations permission.   The rule's AWS Lambda function has returned NOT_APPLICABLE for all evaluation results. This can occur if the resources were deleted or removed from the rule's scope.  
   */
  describeComplianceByResource(callback?: (err: AWSError, data: ConfigService.Types.DescribeComplianceByResourceResponse) => void): Request<ConfigService.Types.DescribeComplianceByResourceResponse, AWSError>;
  /**
   * Returns status information for each of your AWS managed Config rules. The status includes information such as the last time AWS Config invoked the rule, the last time AWS Config failed to invoke the rule, and the related error for the last failure.
   */
  describeConfigRuleEvaluationStatus(params: ConfigService.Types.DescribeConfigRuleEvaluationStatusRequest, callback?: (err: AWSError, data: ConfigService.Types.DescribeConfigRuleEvaluationStatusResponse) => void): Request<ConfigService.Types.DescribeConfigRuleEvaluationStatusResponse, AWSError>;
  /**
   * Returns status information for each of your AWS managed Config rules. The status includes information such as the last time AWS Config invoked the rule, the last time AWS Config failed to invoke the rule, and the related error for the last failure.
   */
  describeConfigRuleEvaluationStatus(callback?: (err: AWSError, data: ConfigService.Types.DescribeConfigRuleEvaluationStatusResponse) => void): Request<ConfigService.Types.DescribeConfigRuleEvaluationStatusResponse, AWSError>;
  /**
   * Returns details about your AWS Config rules.
   */
  describeConfigRules(params: ConfigService.Types.DescribeConfigRulesRequest, callback?: (err: AWSError, data: ConfigService.Types.DescribeConfigRulesResponse) => void): Request<ConfigService.Types.DescribeConfigRulesResponse, AWSError>;
  /**
   * Returns details about your AWS Config rules.
   */
  describeConfigRules(callback?: (err: AWSError, data: ConfigService.Types.DescribeConfigRulesResponse) => void): Request<ConfigService.Types.DescribeConfigRulesResponse, AWSError>;
  /**
   * Returns status information for sources within an aggregator. The status includes information about the last time AWS Config aggregated data from source accounts or AWS Config failed to aggregate data from source accounts with the related error code or message. 
   */
  describeConfigurationAggregatorSourcesStatus(params: ConfigService.Types.DescribeConfigurationAggregatorSourcesStatusRequest, callback?: (err: AWSError, data: ConfigService.Types.DescribeConfigurationAggregatorSourcesStatusResponse) => void): Request<ConfigService.Types.DescribeConfigurationAggregatorSourcesStatusResponse, AWSError>;
  /**
   * Returns status information for sources within an aggregator. The status includes information about the last time AWS Config aggregated data from source accounts or AWS Config failed to aggregate data from source accounts with the related error code or message. 
   */
  describeConfigurationAggregatorSourcesStatus(callback?: (err: AWSError, data: ConfigService.Types.DescribeConfigurationAggregatorSourcesStatusResponse) => void): Request<ConfigService.Types.DescribeConfigurationAggregatorSourcesStatusResponse, AWSError>;
  /**
   * Returns the details of one or more configuration aggregators. If the configuration aggregator is not specified, this action returns the details for all the configuration aggregators associated with the account. 
   */
  describeConfigurationAggregators(params: ConfigService.Types.DescribeConfigurationAggregatorsRequest, callback?: (err: AWSError, data: ConfigService.Types.DescribeConfigurationAggregatorsResponse) => void): Request<ConfigService.Types.DescribeConfigurationAggregatorsResponse, AWSError>;
  /**
   * Returns the details of one or more configuration aggregators. If the configuration aggregator is not specified, this action returns the details for all the configuration aggregators associated with the account. 
   */
  describeConfigurationAggregators(callback?: (err: AWSError, data: ConfigService.Types.DescribeConfigurationAggregatorsResponse) => void): Request<ConfigService.Types.DescribeConfigurationAggregatorsResponse, AWSError>;
  /**
   * Returns the current status of the specified configuration recorder. If a configuration recorder is not specified, this action returns the status of all configuration recorders associated with the account.  Currently, you can specify only one configuration recorder per region in your account. 
   */
  describeConfigurationRecorderStatus(params: ConfigService.Types.DescribeConfigurationRecorderStatusRequest, callback?: (err: AWSError, data: ConfigService.Types.DescribeConfigurationRecorderStatusResponse) => void): Request<ConfigService.Types.DescribeConfigurationRecorderStatusResponse, AWSError>;
  /**
   * Returns the current status of the specified configuration recorder. If a configuration recorder is not specified, this action returns the status of all configuration recorders associated with the account.  Currently, you can specify only one configuration recorder per region in your account. 
   */
  describeConfigurationRecorderStatus(callback?: (err: AWSError, data: ConfigService.Types.DescribeConfigurationRecorderStatusResponse) => void): Request<ConfigService.Types.DescribeConfigurationRecorderStatusResponse, AWSError>;
  /**
   * Returns the details for the specified configuration recorders. If the configuration recorder is not specified, this action returns the details for all configuration recorders associated with the account.  Currently, you can specify only one configuration recorder per region in your account. 
   */
  describeConfigurationRecorders(params: ConfigService.Types.DescribeConfigurationRecordersRequest, callback?: (err: AWSError, data: ConfigService.Types.DescribeConfigurationRecordersResponse) => void): Request<ConfigService.Types.DescribeConfigurationRecordersResponse, AWSError>;
  /**
   * Returns the details for the specified configuration recorders. If the configuration recorder is not specified, this action returns the details for all configuration recorders associated with the account.  Currently, you can specify only one configuration recorder per region in your account. 
   */
  describeConfigurationRecorders(callback?: (err: AWSError, data: ConfigService.Types.DescribeConfigurationRecordersResponse) => void): Request<ConfigService.Types.DescribeConfigurationRecordersResponse, AWSError>;
  /**
   * Returns the current status of the specified delivery channel. If a delivery channel is not specified, this action returns the current status of all delivery channels associated with the account.  Currently, you can specify only one delivery channel per region in your account. 
   */
  describeDeliveryChannelStatus(params: ConfigService.Types.DescribeDeliveryChannelStatusRequest, callback?: (err: AWSError, data: ConfigService.Types.DescribeDeliveryChannelStatusResponse) => void): Request<ConfigService.Types.DescribeDeliveryChannelStatusResponse, AWSError>;
  /**
   * Returns the current status of the specified delivery channel. If a delivery channel is not specified, this action returns the current status of all delivery channels associated with the account.  Currently, you can specify only one delivery channel per region in your account. 
   */
  describeDeliveryChannelStatus(callback?: (err: AWSError, data: ConfigService.Types.DescribeDeliveryChannelStatusResponse) => void): Request<ConfigService.Types.DescribeDeliveryChannelStatusResponse, AWSError>;
  /**
   * Returns details about the specified delivery channel. If a delivery channel is not specified, this action returns the details of all delivery channels associated with the account.  Currently, you can specify only one delivery channel per region in your account. 
   */
  describeDeliveryChannels(params: ConfigService.Types.DescribeDeliveryChannelsRequest, callback?: (err: AWSError, data: ConfigService.Types.DescribeDeliveryChannelsResponse) => void): Request<ConfigService.Types.DescribeDeliveryChannelsResponse, AWSError>;
  /**
   * Returns details about the specified delivery channel. If a delivery channel is not specified, this action returns the details of all delivery channels associated with the account.  Currently, you can specify only one delivery channel per region in your account. 
   */
  describeDeliveryChannels(callback?: (err: AWSError, data: ConfigService.Types.DescribeDeliveryChannelsResponse) => void): Request<ConfigService.Types.DescribeDeliveryChannelsResponse, AWSError>;
  /**
   * Returns a list of all pending aggregation requests.
   */
  describePendingAggregationRequests(params: ConfigService.Types.DescribePendingAggregationRequestsRequest, callback?: (err: AWSError, data: ConfigService.Types.DescribePendingAggregationRequestsResponse) => void): Request<ConfigService.Types.DescribePendingAggregationRequestsResponse, AWSError>;
  /**
   * Returns a list of all pending aggregation requests.
   */
  describePendingAggregationRequests(callback?: (err: AWSError, data: ConfigService.Types.DescribePendingAggregationRequestsResponse) => void): Request<ConfigService.Types.DescribePendingAggregationRequestsResponse, AWSError>;
  /**
   * Returns the details of one or more retention configurations. If the retention configuration name is not specified, this action returns the details for all the retention configurations for that account.  Currently, AWS Config supports only one retention configuration per region in your account. 
   */
  describeRetentionConfigurations(params: ConfigService.Types.DescribeRetentionConfigurationsRequest, callback?: (err: AWSError, data: ConfigService.Types.DescribeRetentionConfigurationsResponse) => void): Request<ConfigService.Types.DescribeRetentionConfigurationsResponse, AWSError>;
  /**
   * Returns the details of one or more retention configurations. If the retention configuration name is not specified, this action returns the details for all the retention configurations for that account.  Currently, AWS Config supports only one retention configuration per region in your account. 
   */
  describeRetentionConfigurations(callback?: (err: AWSError, data: ConfigService.Types.DescribeRetentionConfigurationsResponse) => void): Request<ConfigService.Types.DescribeRetentionConfigurationsResponse, AWSError>;
  /**
   * Returns the evaluation results for the specified AWS Config rule for a specific resource in a rule. The results indicate which AWS resources were evaluated by the rule, when each resource was last evaluated, and whether each resource complies with the rule.   The results can return an empty result page. But if you have a nextToken, the results are displayed on the next page. 
   */
  getAggregateComplianceDetailsByConfigRule(params: ConfigService.Types.GetAggregateComplianceDetailsByConfigRuleRequest, callback?: (err: AWSError, data: ConfigService.Types.GetAggregateComplianceDetailsByConfigRuleResponse) => void): Request<ConfigService.Types.GetAggregateComplianceDetailsByConfigRuleResponse, AWSError>;
  /**
   * Returns the evaluation results for the specified AWS Config rule for a specific resource in a rule. The results indicate which AWS resources were evaluated by the rule, when each resource was last evaluated, and whether each resource complies with the rule.   The results can return an empty result page. But if you have a nextToken, the results are displayed on the next page. 
   */
  getAggregateComplianceDetailsByConfigRule(callback?: (err: AWSError, data: ConfigService.Types.GetAggregateComplianceDetailsByConfigRuleResponse) => void): Request<ConfigService.Types.GetAggregateComplianceDetailsByConfigRuleResponse, AWSError>;
  /**
   * Returns the number of compliant and noncompliant rules for one or more accounts and regions in an aggregator.  The results can return an empty result page, but if you have a nextToken, the results are displayed on the next page. 
   */
  getAggregateConfigRuleComplianceSummary(params: ConfigService.Types.GetAggregateConfigRuleComplianceSummaryRequest, callback?: (err: AWSError, data: ConfigService.Types.GetAggregateConfigRuleComplianceSummaryResponse) => void): Request<ConfigService.Types.GetAggregateConfigRuleComplianceSummaryResponse, AWSError>;
  /**
   * Returns the number of compliant and noncompliant rules for one or more accounts and regions in an aggregator.  The results can return an empty result page, but if you have a nextToken, the results are displayed on the next page. 
   */
  getAggregateConfigRuleComplianceSummary(callback?: (err: AWSError, data: ConfigService.Types.GetAggregateConfigRuleComplianceSummaryResponse) => void): Request<ConfigService.Types.GetAggregateConfigRuleComplianceSummaryResponse, AWSError>;
  /**
   * Returns the resource counts across accounts and regions that are present in your AWS Config aggregator. You can request the resource counts by providing filters and GroupByKey. For example, if the input contains accountID 12345678910 and region us-east-1 in filters, the API returns the count of resources in account ID 12345678910 and region us-east-1. If the input contains ACCOUNT_ID as a GroupByKey, the API returns resource counts for all source accounts that are present in your aggregator.
   */
  getAggregateDiscoveredResourceCounts(params: ConfigService.Types.GetAggregateDiscoveredResourceCountsRequest, callback?: (err: AWSError, data: ConfigService.Types.GetAggregateDiscoveredResourceCountsResponse) => void): Request<ConfigService.Types.GetAggregateDiscoveredResourceCountsResponse, AWSError>;
  /**
   * Returns the resource counts across accounts and regions that are present in your AWS Config aggregator. You can request the resource counts by providing filters and GroupByKey. For example, if the input contains accountID 12345678910 and region us-east-1 in filters, the API returns the count of resources in account ID 12345678910 and region us-east-1. If the input contains ACCOUNT_ID as a GroupByKey, the API returns resource counts for all source accounts that are present in your aggregator.
   */
  getAggregateDiscoveredResourceCounts(callback?: (err: AWSError, data: ConfigService.Types.GetAggregateDiscoveredResourceCountsResponse) => void): Request<ConfigService.Types.GetAggregateDiscoveredResourceCountsResponse, AWSError>;
  /**
   * Returns configuration item that is aggregated for your specific resource in a specific source account and region.
   */
  getAggregateResourceConfig(params: ConfigService.Types.GetAggregateResourceConfigRequest, callback?: (err: AWSError, data: ConfigService.Types.GetAggregateResourceConfigResponse) => void): Request<ConfigService.Types.GetAggregateResourceConfigResponse, AWSError>;
  /**
   * Returns configuration item that is aggregated for your specific resource in a specific source account and region.
   */
  getAggregateResourceConfig(callback?: (err: AWSError, data: ConfigService.Types.GetAggregateResourceConfigResponse) => void): Request<ConfigService.Types.GetAggregateResourceConfigResponse, AWSError>;
  /**
   * Returns the evaluation results for the specified AWS Config rule. The results indicate which AWS resources were evaluated by the rule, when each resource was last evaluated, and whether each resource complies with the rule.
   */
  getComplianceDetailsByConfigRule(params: ConfigService.Types.GetComplianceDetailsByConfigRuleRequest, callback?: (err: AWSError, data: ConfigService.Types.GetComplianceDetailsByConfigRuleResponse) => void): Request<ConfigService.Types.GetComplianceDetailsByConfigRuleResponse, AWSError>;
  /**
   * Returns the evaluation results for the specified AWS Config rule. The results indicate which AWS resources were evaluated by the rule, when each resource was last evaluated, and whether each resource complies with the rule.
   */
  getComplianceDetailsByConfigRule(callback?: (err: AWSError, data: ConfigService.Types.GetComplianceDetailsByConfigRuleResponse) => void): Request<ConfigService.Types.GetComplianceDetailsByConfigRuleResponse, AWSError>;
  /**
   * Returns the evaluation results for the specified AWS resource. The results indicate which AWS Config rules were used to evaluate the resource, when each rule was last used, and whether the resource complies with each rule.
   */
  getComplianceDetailsByResource(params: ConfigService.Types.GetComplianceDetailsByResourceRequest, callback?: (err: AWSError, data: ConfigService.Types.GetComplianceDetailsByResourceResponse) => void): Request<ConfigService.Types.GetComplianceDetailsByResourceResponse, AWSError>;
  /**
   * Returns the evaluation results for the specified AWS resource. The results indicate which AWS Config rules were used to evaluate the resource, when each rule was last used, and whether the resource complies with each rule.
   */
  getComplianceDetailsByResource(callback?: (err: AWSError, data: ConfigService.Types.GetComplianceDetailsByResourceResponse) => void): Request<ConfigService.Types.GetComplianceDetailsByResourceResponse, AWSError>;
  /**
   * Returns the number of AWS Config rules that are compliant and noncompliant, up to a maximum of 25 for each.
   */
  getComplianceSummaryByConfigRule(callback?: (err: AWSError, data: ConfigService.Types.GetComplianceSummaryByConfigRuleResponse) => void): Request<ConfigService.Types.GetComplianceSummaryByConfigRuleResponse, AWSError>;
  /**
   * Returns the number of resources that are compliant and the number that are noncompliant. You can specify one or more resource types to get these numbers for each resource type. The maximum number returned is 100.
   */
  getComplianceSummaryByResourceType(params: ConfigService.Types.GetComplianceSummaryByResourceTypeRequest, callback?: (err: AWSError, data: ConfigService.Types.GetComplianceSummaryByResourceTypeResponse) => void): Request<ConfigService.Types.GetComplianceSummaryByResourceTypeResponse, AWSError>;
  /**
   * Returns the number of resources that are compliant and the number that are noncompliant. You can specify one or more resource types to get these numbers for each resource type. The maximum number returned is 100.
   */
  getComplianceSummaryByResourceType(callback?: (err: AWSError, data: ConfigService.Types.GetComplianceSummaryByResourceTypeResponse) => void): Request<ConfigService.Types.GetComplianceSummaryByResourceTypeResponse, AWSError>;
  /**
   * Returns the resource types, the number of each resource type, and the total number of resources that AWS Config is recording in this region for your AWS account.   Example    AWS Config is recording three resource types in the US East (Ohio) Region for your account: 25 EC2 instances, 20 IAM users, and 15 S3 buckets.   You make a call to the GetDiscoveredResourceCounts action and specify that you want all resource types.    AWS Config returns the following:   The resource types (EC2 instances, IAM users, and S3 buckets).   The number of each resource type (25, 20, and 15).   The total number of all resources (60).     The response is paginated. By default, AWS Config lists 100 ResourceCount objects on each page. You can customize this number with the limit parameter. The response includes a nextToken string. To get the next page of results, run the request again and specify the string for the nextToken parameter.  If you make a call to the GetDiscoveredResourceCounts action, you might not immediately receive resource counts in the following situations:   You are a new AWS Config customer.   You just enabled resource recording.   It might take a few minutes for AWS Config to record and count your resources. Wait a few minutes and then retry the GetDiscoveredResourceCounts action.  
   */
  getDiscoveredResourceCounts(params: ConfigService.Types.GetDiscoveredResourceCountsRequest, callback?: (err: AWSError, data: ConfigService.Types.GetDiscoveredResourceCountsResponse) => void): Request<ConfigService.Types.GetDiscoveredResourceCountsResponse, AWSError>;
  /**
   * Returns the resource types, the number of each resource type, and the total number of resources that AWS Config is recording in this region for your AWS account.   Example    AWS Config is recording three resource types in the US East (Ohio) Region for your account: 25 EC2 instances, 20 IAM users, and 15 S3 buckets.   You make a call to the GetDiscoveredResourceCounts action and specify that you want all resource types.    AWS Config returns the following:   The resource types (EC2 instances, IAM users, and S3 buckets).   The number of each resource type (25, 20, and 15).   The total number of all resources (60).     The response is paginated. By default, AWS Config lists 100 ResourceCount objects on each page. You can customize this number with the limit parameter. The response includes a nextToken string. To get the next page of results, run the request again and specify the string for the nextToken parameter.  If you make a call to the GetDiscoveredResourceCounts action, you might not immediately receive resource counts in the following situations:   You are a new AWS Config customer.   You just enabled resource recording.   It might take a few minutes for AWS Config to record and count your resources. Wait a few minutes and then retry the GetDiscoveredResourceCounts action.  
   */
  getDiscoveredResourceCounts(callback?: (err: AWSError, data: ConfigService.Types.GetDiscoveredResourceCountsResponse) => void): Request<ConfigService.Types.GetDiscoveredResourceCountsResponse, AWSError>;
  /**
   * Returns a list of configuration items for the specified resource. The list contains details about each state of the resource during the specified time interval. If you specified a retention period to retain your ConfigurationItems between a minimum of 30 days and a maximum of 7 years (2557 days), AWS Config returns the ConfigurationItems for the specified retention period.  The response is paginated. By default, AWS Config returns a limit of 10 configuration items per page. You can customize this number with the limit parameter. The response includes a nextToken string. To get the next page of results, run the request again and specify the string for the nextToken parameter.  Each call to the API is limited to span a duration of seven days. It is likely that the number of records returned is smaller than the specified limit. In such cases, you can make another call, using the nextToken. 
   */
  getResourceConfigHistory(params: ConfigService.Types.GetResourceConfigHistoryRequest, callback?: (err: AWSError, data: ConfigService.Types.GetResourceConfigHistoryResponse) => void): Request<ConfigService.Types.GetResourceConfigHistoryResponse, AWSError>;
  /**
   * Returns a list of configuration items for the specified resource. The list contains details about each state of the resource during the specified time interval. If you specified a retention period to retain your ConfigurationItems between a minimum of 30 days and a maximum of 7 years (2557 days), AWS Config returns the ConfigurationItems for the specified retention period.  The response is paginated. By default, AWS Config returns a limit of 10 configuration items per page. You can customize this number with the limit parameter. The response includes a nextToken string. To get the next page of results, run the request again and specify the string for the nextToken parameter.  Each call to the API is limited to span a duration of seven days. It is likely that the number of records returned is smaller than the specified limit. In such cases, you can make another call, using the nextToken. 
   */
  getResourceConfigHistory(callback?: (err: AWSError, data: ConfigService.Types.GetResourceConfigHistoryResponse) => void): Request<ConfigService.Types.GetResourceConfigHistoryResponse, AWSError>;
  /**
   * Accepts a resource type and returns a list of resource identifiers that are aggregated for a specific resource type across accounts and regions. A resource identifier includes the resource type, ID, (if available) the custom resource name, source account, and source region. You can narrow the results to include only resources that have specific resource IDs, or a resource name, or source account ID, or source region. For example, if the input consists of accountID 12345678910 and the region is us-east-1 for resource type AWS::EC2::Instance then the API returns all the EC2 instance identifiers of accountID 12345678910 and region us-east-1.
   */
  listAggregateDiscoveredResources(params: ConfigService.Types.ListAggregateDiscoveredResourcesRequest, callback?: (err: AWSError, data: ConfigService.Types.ListAggregateDiscoveredResourcesResponse) => void): Request<ConfigService.Types.ListAggregateDiscoveredResourcesResponse, AWSError>;
  /**
   * Accepts a resource type and returns a list of resource identifiers that are aggregated for a specific resource type across accounts and regions. A resource identifier includes the resource type, ID, (if available) the custom resource name, source account, and source region. You can narrow the results to include only resources that have specific resource IDs, or a resource name, or source account ID, or source region. For example, if the input consists of accountID 12345678910 and the region is us-east-1 for resource type AWS::EC2::Instance then the API returns all the EC2 instance identifiers of accountID 12345678910 and region us-east-1.
   */
  listAggregateDiscoveredResources(callback?: (err: AWSError, data: ConfigService.Types.ListAggregateDiscoveredResourcesResponse) => void): Request<ConfigService.Types.ListAggregateDiscoveredResourcesResponse, AWSError>;
  /**
   * Accepts a resource type and returns a list of resource identifiers for the resources of that type. A resource identifier includes the resource type, ID, and (if available) the custom resource name. The results consist of resources that AWS Config has discovered, including those that AWS Config is not currently recording. You can narrow the results to include only resources that have specific resource IDs or a resource name.  You can specify either resource IDs or a resource name, but not both, in the same request.  The response is paginated. By default, AWS Config lists 100 resource identifiers on each page. You can customize this number with the limit parameter. The response includes a nextToken string. To get the next page of results, run the request again and specify the string for the nextToken parameter.
   */
  listDiscoveredResources(params: ConfigService.Types.ListDiscoveredResourcesRequest, callback?: (err: AWSError, data: ConfigService.Types.ListDiscoveredResourcesResponse) => void): Request<ConfigService.Types.ListDiscoveredResourcesResponse, AWSError>;
  /**
   * Accepts a resource type and returns a list of resource identifiers for the resources of that type. A resource identifier includes the resource type, ID, and (if available) the custom resource name. The results consist of resources that AWS Config has discovered, including those that AWS Config is not currently recording. You can narrow the results to include only resources that have specific resource IDs or a resource name.  You can specify either resource IDs or a resource name, but not both, in the same request.  The response is paginated. By default, AWS Config lists 100 resource identifiers on each page. You can customize this number with the limit parameter. The response includes a nextToken string. To get the next page of results, run the request again and specify the string for the nextToken parameter.
   */
  listDiscoveredResources(callback?: (err: AWSError, data: ConfigService.Types.ListDiscoveredResourcesResponse) => void): Request<ConfigService.Types.ListDiscoveredResourcesResponse, AWSError>;
  /**
   * Authorizes the aggregator account and region to collect data from the source account and region. 
   */
  putAggregationAuthorization(params: ConfigService.Types.PutAggregationAuthorizationRequest, callback?: (err: AWSError, data: ConfigService.Types.PutAggregationAuthorizationResponse) => void): Request<ConfigService.Types.PutAggregationAuthorizationResponse, AWSError>;
  /**
   * Authorizes the aggregator account and region to collect data from the source account and region. 
   */
  putAggregationAuthorization(callback?: (err: AWSError, data: ConfigService.Types.PutAggregationAuthorizationResponse) => void): Request<ConfigService.Types.PutAggregationAuthorizationResponse, AWSError>;
  /**
   * Adds or updates an AWS Config rule for evaluating whether your AWS resources comply with your desired configurations. You can use this action for custom AWS Config rules and AWS managed Config rules. A custom AWS Config rule is a rule that you develop and maintain. An AWS managed Config rule is a customizable, predefined rule that AWS Config provides. If you are adding a new custom AWS Config rule, you must first create the AWS Lambda function that the rule invokes to evaluate your resources. When you use the PutConfigRule action to add the rule to AWS Config, you must specify the Amazon Resource Name (ARN) that AWS Lambda assigns to the function. Specify the ARN for the SourceIdentifier key. This key is part of the Source object, which is part of the ConfigRule object.  If you are adding an AWS managed Config rule, specify the rule's identifier for the SourceIdentifier key. To reference AWS managed Config rule identifiers, see About AWS Managed Config Rules. For any new rule that you add, specify the ConfigRuleName in the ConfigRule object. Do not specify the ConfigRuleArn or the ConfigRuleId. These values are generated by AWS Config for new rules. If you are updating a rule that you added previously, you can specify the rule by ConfigRuleName, ConfigRuleId, or ConfigRuleArn in the ConfigRule data type that you use in this request. The maximum number of rules that AWS Config supports is 50. For information about requesting a rule limit increase, see AWS Config Limits in the AWS General Reference Guide. For more information about developing and using AWS Config rules, see Evaluating AWS Resource Configurations with AWS Config in the AWS Config Developer Guide.
   */
  putConfigRule(params: ConfigService.Types.PutConfigRuleRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds or updates an AWS Config rule for evaluating whether your AWS resources comply with your desired configurations. You can use this action for custom AWS Config rules and AWS managed Config rules. A custom AWS Config rule is a rule that you develop and maintain. An AWS managed Config rule is a customizable, predefined rule that AWS Config provides. If you are adding a new custom AWS Config rule, you must first create the AWS Lambda function that the rule invokes to evaluate your resources. When you use the PutConfigRule action to add the rule to AWS Config, you must specify the Amazon Resource Name (ARN) that AWS Lambda assigns to the function. Specify the ARN for the SourceIdentifier key. This key is part of the Source object, which is part of the ConfigRule object.  If you are adding an AWS managed Config rule, specify the rule's identifier for the SourceIdentifier key. To reference AWS managed Config rule identifiers, see About AWS Managed Config Rules. For any new rule that you add, specify the ConfigRuleName in the ConfigRule object. Do not specify the ConfigRuleArn or the ConfigRuleId. These values are generated by AWS Config for new rules. If you are updating a rule that you added previously, you can specify the rule by ConfigRuleName, ConfigRuleId, or ConfigRuleArn in the ConfigRule data type that you use in this request. The maximum number of rules that AWS Config supports is 50. For information about requesting a rule limit increase, see AWS Config Limits in the AWS General Reference Guide. For more information about developing and using AWS Config rules, see Evaluating AWS Resource Configurations with AWS Config in the AWS Config Developer Guide.
   */
  putConfigRule(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates and updates the configuration aggregator with the selected source accounts and regions. The source account can be individual account(s) or an organization.  AWS Config should be enabled in source accounts and regions you want to aggregate. If your source type is an organization, you must be signed in to the master account and all features must be enabled in your organization. AWS Config calls EnableAwsServiceAccess API to enable integration between AWS Config and AWS Organizations.  
   */
  putConfigurationAggregator(params: ConfigService.Types.PutConfigurationAggregatorRequest, callback?: (err: AWSError, data: ConfigService.Types.PutConfigurationAggregatorResponse) => void): Request<ConfigService.Types.PutConfigurationAggregatorResponse, AWSError>;
  /**
   * Creates and updates the configuration aggregator with the selected source accounts and regions. The source account can be individual account(s) or an organization.  AWS Config should be enabled in source accounts and regions you want to aggregate. If your source type is an organization, you must be signed in to the master account and all features must be enabled in your organization. AWS Config calls EnableAwsServiceAccess API to enable integration between AWS Config and AWS Organizations.  
   */
  putConfigurationAggregator(callback?: (err: AWSError, data: ConfigService.Types.PutConfigurationAggregatorResponse) => void): Request<ConfigService.Types.PutConfigurationAggregatorResponse, AWSError>;
  /**
   * Creates a new configuration recorder to record the selected resource configurations. You can use this action to change the role roleARN or the recordingGroup of an existing recorder. To change the role, call the action on the existing configuration recorder and specify a role.  Currently, you can specify only one configuration recorder per region in your account. If ConfigurationRecorder does not have the recordingGroup parameter specified, the default is to record all supported resource types. 
   */
  putConfigurationRecorder(params: ConfigService.Types.PutConfigurationRecorderRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates a new configuration recorder to record the selected resource configurations. You can use this action to change the role roleARN or the recordingGroup of an existing recorder. To change the role, call the action on the existing configuration recorder and specify a role.  Currently, you can specify only one configuration recorder per region in your account. If ConfigurationRecorder does not have the recordingGroup parameter specified, the default is to record all supported resource types. 
   */
  putConfigurationRecorder(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates a delivery channel object to deliver configuration information to an Amazon S3 bucket and Amazon SNS topic. Before you can create a delivery channel, you must create a configuration recorder. You can use this action to change the Amazon S3 bucket or an Amazon SNS topic of the existing delivery channel. To change the Amazon S3 bucket or an Amazon SNS topic, call this action and specify the changed values for the S3 bucket and the SNS topic. If you specify a different value for either the S3 bucket or the SNS topic, this action will keep the existing value for the parameter that is not changed.  You can have only one delivery channel per region in your account. 
   */
  putDeliveryChannel(params: ConfigService.Types.PutDeliveryChannelRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates a delivery channel object to deliver configuration information to an Amazon S3 bucket and Amazon SNS topic. Before you can create a delivery channel, you must create a configuration recorder. You can use this action to change the Amazon S3 bucket or an Amazon SNS topic of the existing delivery channel. To change the Amazon S3 bucket or an Amazon SNS topic, call this action and specify the changed values for the S3 bucket and the SNS topic. If you specify a different value for either the S3 bucket or the SNS topic, this action will keep the existing value for the parameter that is not changed.  You can have only one delivery channel per region in your account. 
   */
  putDeliveryChannel(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Used by an AWS Lambda function to deliver evaluation results to AWS Config. This action is required in every AWS Lambda function that is invoked by an AWS Config rule.
   */
  putEvaluations(params: ConfigService.Types.PutEvaluationsRequest, callback?: (err: AWSError, data: ConfigService.Types.PutEvaluationsResponse) => void): Request<ConfigService.Types.PutEvaluationsResponse, AWSError>;
  /**
   * Used by an AWS Lambda function to deliver evaluation results to AWS Config. This action is required in every AWS Lambda function that is invoked by an AWS Config rule.
   */
  putEvaluations(callback?: (err: AWSError, data: ConfigService.Types.PutEvaluationsResponse) => void): Request<ConfigService.Types.PutEvaluationsResponse, AWSError>;
  /**
   * Creates and updates the retention configuration with details about retention period (number of days) that AWS Config stores your historical information. The API creates the RetentionConfiguration object and names the object as default. When you have a RetentionConfiguration object named default, calling the API modifies the default object.   Currently, AWS Config supports only one retention configuration per region in your account. 
   */
  putRetentionConfiguration(params: ConfigService.Types.PutRetentionConfigurationRequest, callback?: (err: AWSError, data: ConfigService.Types.PutRetentionConfigurationResponse) => void): Request<ConfigService.Types.PutRetentionConfigurationResponse, AWSError>;
  /**
   * Creates and updates the retention configuration with details about retention period (number of days) that AWS Config stores your historical information. The API creates the RetentionConfiguration object and names the object as default. When you have a RetentionConfiguration object named default, calling the API modifies the default object.   Currently, AWS Config supports only one retention configuration per region in your account. 
   */
  putRetentionConfiguration(callback?: (err: AWSError, data: ConfigService.Types.PutRetentionConfigurationResponse) => void): Request<ConfigService.Types.PutRetentionConfigurationResponse, AWSError>;
  /**
   * Runs an on-demand evaluation for the specified AWS Config rules against the last known configuration state of the resources. Use StartConfigRulesEvaluation when you want to test that a rule you updated is working as expected. StartConfigRulesEvaluation does not re-record the latest configuration state for your resources. It re-runs an evaluation against the last known state of your resources.  You can specify up to 25 AWS Config rules per request.  An existing StartConfigRulesEvaluation call for the specified rules must complete before you can call the API again. If you chose to have AWS Config stream to an Amazon SNS topic, you will receive a ConfigRuleEvaluationStarted notification when the evaluation starts.  You don't need to call the StartConfigRulesEvaluation API to run an evaluation for a new rule. When you create a rule, AWS Config evaluates your resources against the rule automatically.   The StartConfigRulesEvaluation API is useful if you want to run on-demand evaluations, such as the following example:   You have a custom rule that evaluates your IAM resources every 24 hours.   You update your Lambda function to add additional conditions to your rule.   Instead of waiting for the next periodic evaluation, you call the StartConfigRulesEvaluation API.   AWS Config invokes your Lambda function and evaluates your IAM resources.   Your custom rule will still run periodic evaluations every 24 hours.  
   */
  startConfigRulesEvaluation(params: ConfigService.Types.StartConfigRulesEvaluationRequest, callback?: (err: AWSError, data: ConfigService.Types.StartConfigRulesEvaluationResponse) => void): Request<ConfigService.Types.StartConfigRulesEvaluationResponse, AWSError>;
  /**
   * Runs an on-demand evaluation for the specified AWS Config rules against the last known configuration state of the resources. Use StartConfigRulesEvaluation when you want to test that a rule you updated is working as expected. StartConfigRulesEvaluation does not re-record the latest configuration state for your resources. It re-runs an evaluation against the last known state of your resources.  You can specify up to 25 AWS Config rules per request.  An existing StartConfigRulesEvaluation call for the specified rules must complete before you can call the API again. If you chose to have AWS Config stream to an Amazon SNS topic, you will receive a ConfigRuleEvaluationStarted notification when the evaluation starts.  You don't need to call the StartConfigRulesEvaluation API to run an evaluation for a new rule. When you create a rule, AWS Config evaluates your resources against the rule automatically.   The StartConfigRulesEvaluation API is useful if you want to run on-demand evaluations, such as the following example:   You have a custom rule that evaluates your IAM resources every 24 hours.   You update your Lambda function to add additional conditions to your rule.   Instead of waiting for the next periodic evaluation, you call the StartConfigRulesEvaluation API.   AWS Config invokes your Lambda function and evaluates your IAM resources.   Your custom rule will still run periodic evaluations every 24 hours.  
   */
  startConfigRulesEvaluation(callback?: (err: AWSError, data: ConfigService.Types.StartConfigRulesEvaluationResponse) => void): Request<ConfigService.Types.StartConfigRulesEvaluationResponse, AWSError>;
  /**
   * Starts recording configurations of the AWS resources you have selected to record in your AWS account. You must have created at least one delivery channel to successfully start the configuration recorder.
   */
  startConfigurationRecorder(params: ConfigService.Types.StartConfigurationRecorderRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Starts recording configurations of the AWS resources you have selected to record in your AWS account. You must have created at least one delivery channel to successfully start the configuration recorder.
   */
  startConfigurationRecorder(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Stops recording configurations of the AWS resources you have selected to record in your AWS account.
   */
  stopConfigurationRecorder(params: ConfigService.Types.StopConfigurationRecorderRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Stops recording configurations of the AWS resources you have selected to record in your AWS account.
   */
  stopConfigurationRecorder(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
}
declare namespace ConfigService {
  export type ARN = string;
  export interface AccountAggregationSource {
    /**
     * The 12-digit account ID of the account being aggregated. 
     */
    AccountIds: AccountAggregationSourceAccountList;
    /**
     * If true, aggregate existing AWS Config regions and future regions.
     */
    AllAwsRegions?: Boolean;
    /**
     * The source regions being aggregated.
     */
    AwsRegions?: AggregatorRegionList;
  }
  export type AccountAggregationSourceAccountList = AccountId[];
  export type AccountAggregationSourceList = AccountAggregationSource[];
  export type AccountId = string;
  export interface AggregateComplianceByConfigRule {
    /**
     * The name of the AWS Config rule.
     */
    ConfigRuleName?: ConfigRuleName;
    /**
     * Indicates whether an AWS resource or AWS Config rule is compliant and provides the number of contributors that affect the compliance.
     */
    Compliance?: Compliance;
    /**
     * The 12-digit account ID of the source account.
     */
    AccountId?: AccountId;
    /**
     * The source region from where the data is aggregated.
     */
    AwsRegion?: AwsRegion;
  }
  export type AggregateComplianceByConfigRuleList = AggregateComplianceByConfigRule[];
  export interface AggregateComplianceCount {
    /**
     * The 12-digit account ID or region based on the GroupByKey value.
     */
    GroupName?: StringWithCharLimit256;
    /**
     * The number of compliant and noncompliant AWS Config rules.
     */
    ComplianceSummary?: ComplianceSummary;
  }
  export type AggregateComplianceCountList = AggregateComplianceCount[];
  export interface AggregateEvaluationResult {
    /**
     * Uniquely identifies the evaluation result.
     */
    EvaluationResultIdentifier?: EvaluationResultIdentifier;
    /**
     * The resource compliance status. For the AggregationEvaluationResult data type, AWS Config supports only the COMPLIANT and NON_COMPLIANT. AWS Config does not support the NOT_APPLICABLE and INSUFFICIENT_DATA value.
     */
    ComplianceType?: ComplianceType;
    /**
     * The time when AWS Config recorded the aggregate evaluation result.
     */
    ResultRecordedTime?: _Date;
    /**
     * The time when the AWS Config rule evaluated the AWS resource.
     */
    ConfigRuleInvokedTime?: _Date;
    /**
     * Supplementary information about how the agrregate evaluation determined the compliance.
     */
    Annotation?: StringWithCharLimit256;
    /**
     * The 12-digit account ID of the source account.
     */
    AccountId?: AccountId;
    /**
     * The source region from where the data is aggregated.
     */
    AwsRegion?: AwsRegion;
  }
  export type AggregateEvaluationResultList = AggregateEvaluationResult[];
  export interface AggregateResourceIdentifier {
    /**
     * The 12-digit account ID of the source account.
     */
    SourceAccountId: AccountId;
    /**
     * The source region where data is aggregated.
     */
    SourceRegion: AwsRegion;
    /**
     * The ID of the AWS resource.
     */
    ResourceId: ResourceId;
    /**
     * The type of the AWS resource.
     */
    ResourceType: ResourceType;
    /**
     * The name of the AWS resource.
     */
    ResourceName?: ResourceName;
  }
  export interface AggregatedSourceStatus {
    /**
     * The source account ID or an organization.
     */
    SourceId?: String;
    /**
     * The source account or an organization.
     */
    SourceType?: AggregatedSourceType;
    /**
     * The region authorized to collect aggregated data.
     */
    AwsRegion?: AwsRegion;
    /**
     * Filters the last updated status type.   Valid value FAILED indicates errors while moving data.   Valid value SUCCEEDED indicates the data was successfully moved.   Valid value OUTDATED indicates the data is not the most recent.  
     */
    LastUpdateStatus?: AggregatedSourceStatusType;
    /**
     * The time of the last update.
     */
    LastUpdateTime?: _Date;
    /**
     * The error code that AWS Config returned when the source account aggregation last failed.
     */
    LastErrorCode?: String;
    /**
     * The message indicating that the source account aggregation failed due to an error.
     */
    LastErrorMessage?: String;
  }
  export type AggregatedSourceStatusList = AggregatedSourceStatus[];
  export type AggregatedSourceStatusType = "FAILED"|"SUCCEEDED"|"OUTDATED"|string;
  export type AggregatedSourceStatusTypeList = AggregatedSourceStatusType[];
  export type AggregatedSourceType = "ACCOUNT"|"ORGANIZATION"|string;
  export interface AggregationAuthorization {
    /**
     * The Amazon Resource Name (ARN) of the aggregation object.
     */
    AggregationAuthorizationArn?: String;
    /**
     * The 12-digit account ID of the account authorized to aggregate data.
     */
    AuthorizedAccountId?: AccountId;
    /**
     * The region authorized to collect aggregated data.
     */
    AuthorizedAwsRegion?: AwsRegion;
    /**
     * The time stamp when the aggregation authorization was created.
     */
    CreationTime?: _Date;
  }
  export type AggregationAuthorizationList = AggregationAuthorization[];
  export type AggregatorRegionList = String[];
  export type AllSupported = boolean;
  export type AvailabilityZone = string;
  export type AwsRegion = string;
  export interface BaseConfigurationItem {
    /**
     * The version number of the resource configuration.
     */
    version?: Version;
    /**
     * The 12-digit AWS account ID associated with the resource.
     */
    accountId?: AccountId;
    /**
     * The time when the configuration recording was initiated.
     */
    configurationItemCaptureTime?: ConfigurationItemCaptureTime;
    /**
     * The configuration item status.
     */
    configurationItemStatus?: ConfigurationItemStatus;
    /**
     * An identifier that indicates the ordering of the configuration items of a resource.
     */
    configurationStateId?: ConfigurationStateId;
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    arn?: ARN;
    /**
     * The type of AWS resource.
     */
    resourceType?: ResourceType;
    /**
     * The ID of the resource (for example., sg-xxxxxx).
     */
    resourceId?: ResourceId;
    /**
     * The custom name of the resource, if available.
     */
    resourceName?: ResourceName;
    /**
     * The region where the resource resides.
     */
    awsRegion?: AwsRegion;
    /**
     * The Availability Zone associated with the resource.
     */
    availabilityZone?: AvailabilityZone;
    /**
     * The time stamp when the resource was created.
     */
    resourceCreationTime?: ResourceCreationTime;
    /**
     * The description of the resource configuration.
     */
    configuration?: Configuration;
    /**
     * Configuration attributes that AWS Config returns for certain resource types to supplement the information returned for the configuration parameter.
     */
    supplementaryConfiguration?: SupplementaryConfiguration;
  }
  export type BaseConfigurationItems = BaseConfigurationItem[];
  export type BaseResourceId = string;
  export interface BatchGetAggregateResourceConfigRequest {
    /**
     * The name of the configuration aggregator.
     */
    ConfigurationAggregatorName: ConfigurationAggregatorName;
    /**
     * A list of aggregate ResourceIdentifiers objects. 
     */
    ResourceIdentifiers: ResourceIdentifiersList;
  }
  export interface BatchGetAggregateResourceConfigResponse {
    /**
     * A list that contains the current configuration of one or more resources.
     */
    BaseConfigurationItems?: BaseConfigurationItems;
    /**
     * A list of resource identifiers that were not processed with current scope. The list is empty if all the resources are processed.
     */
    UnprocessedResourceIdentifiers?: UnprocessedResourceIdentifierList;
  }
  export interface BatchGetResourceConfigRequest {
    /**
     * A list of resource keys to be processed with the current request. Each element in the list consists of the resource type and resource ID.
     */
    resourceKeys: ResourceKeys;
  }
  export interface BatchGetResourceConfigResponse {
    /**
     * A list that contains the current configuration of one or more resources.
     */
    baseConfigurationItems?: BaseConfigurationItems;
    /**
     * A list of resource keys that were not processed with the current response. The unprocessesResourceKeys value is in the same form as ResourceKeys, so the value can be directly provided to a subsequent BatchGetResourceConfig operation. If there are no unprocessed resource keys, the response contains an empty unprocessedResourceKeys list. 
     */
    unprocessedResourceKeys?: ResourceKeys;
  }
  export type Boolean = boolean;
  export type ChannelName = string;
  export type ChronologicalOrder = "Reverse"|"Forward"|string;
  export interface Compliance {
    /**
     * Indicates whether an AWS resource or AWS Config rule is compliant. A resource is compliant if it complies with all of the AWS Config rules that evaluate it. A resource is noncompliant if it does not comply with one or more of these rules. A rule is compliant if all of the resources that the rule evaluates comply with it. A rule is noncompliant if any of these resources do not comply. AWS Config returns the INSUFFICIENT_DATA value when no evaluation results are available for the AWS resource or AWS Config rule. For the Compliance data type, AWS Config supports only COMPLIANT, NON_COMPLIANT, and INSUFFICIENT_DATA values. AWS Config does not support the NOT_APPLICABLE value for the Compliance data type.
     */
    ComplianceType?: ComplianceType;
    /**
     * The number of AWS resources or AWS Config rules that cause a result of NON_COMPLIANT, up to a maximum number.
     */
    ComplianceContributorCount?: ComplianceContributorCount;
  }
  export interface ComplianceByConfigRule {
    /**
     * The name of the AWS Config rule.
     */
    ConfigRuleName?: StringWithCharLimit64;
    /**
     * Indicates whether the AWS Config rule is compliant.
     */
    Compliance?: Compliance;
  }
  export type ComplianceByConfigRules = ComplianceByConfigRule[];
  export interface ComplianceByResource {
    /**
     * The type of the AWS resource that was evaluated.
     */
    ResourceType?: StringWithCharLimit256;
    /**
     * The ID of the AWS resource that was evaluated.
     */
    ResourceId?: BaseResourceId;
    /**
     * Indicates whether the AWS resource complies with all of the AWS Config rules that evaluated it.
     */
    Compliance?: Compliance;
  }
  export type ComplianceByResources = ComplianceByResource[];
  export interface ComplianceContributorCount {
    /**
     * The number of AWS resources or AWS Config rules responsible for the current compliance of the item.
     */
    CappedCount?: Integer;
    /**
     * Indicates whether the maximum count is reached.
     */
    CapExceeded?: Boolean;
  }
  export type ComplianceResourceTypes = StringWithCharLimit256[];
  export type ComplianceSummariesByResourceType = ComplianceSummaryByResourceType[];
  export interface ComplianceSummary {
    /**
     * The number of AWS Config rules or AWS resources that are compliant, up to a maximum of 25 for rules and 100 for resources.
     */
    CompliantResourceCount?: ComplianceContributorCount;
    /**
     * The number of AWS Config rules or AWS resources that are noncompliant, up to a maximum of 25 for rules and 100 for resources.
     */
    NonCompliantResourceCount?: ComplianceContributorCount;
    /**
     * The time that AWS Config created the compliance summary.
     */
    ComplianceSummaryTimestamp?: _Date;
  }
  export interface ComplianceSummaryByResourceType {
    /**
     * The type of AWS resource.
     */
    ResourceType?: StringWithCharLimit256;
    /**
     * The number of AWS resources that are compliant or noncompliant, up to a maximum of 100 for each.
     */
    ComplianceSummary?: ComplianceSummary;
  }
  export type ComplianceType = "COMPLIANT"|"NON_COMPLIANT"|"NOT_APPLICABLE"|"INSUFFICIENT_DATA"|string;
  export type ComplianceTypes = ComplianceType[];
  export interface ConfigExportDeliveryInfo {
    /**
     * Status of the last attempted delivery.
     */
    lastStatus?: DeliveryStatus;
    /**
     * The error code from the last attempted delivery.
     */
    lastErrorCode?: String;
    /**
     * The error message from the last attempted delivery.
     */
    lastErrorMessage?: String;
    /**
     * The time of the last attempted delivery.
     */
    lastAttemptTime?: _Date;
    /**
     * The time of the last successful delivery.
     */
    lastSuccessfulTime?: _Date;
    /**
     * The time that the next delivery occurs.
     */
    nextDeliveryTime?: _Date;
  }
  export interface ConfigRule {
    /**
     * The name that you assign to the AWS Config rule. The name is required if you are adding a new rule.
     */
    ConfigRuleName?: StringWithCharLimit64;
    /**
     * The Amazon Resource Name (ARN) of the AWS Config rule.
     */
    ConfigRuleArn?: String;
    /**
     * The ID of the AWS Config rule.
     */
    ConfigRuleId?: String;
    /**
     * The description that you provide for the AWS Config rule.
     */
    Description?: EmptiableStringWithCharLimit256;
    /**
     * Defines which resources can trigger an evaluation for the rule. The scope can include one or more resource types, a combination of one resource type and one resource ID, or a combination of a tag key and value. Specify a scope to constrain the resources that can trigger an evaluation for the rule. If you do not specify a scope, evaluations are triggered when any resource in the recording group changes.
     */
    Scope?: Scope;
    /**
     * Provides the rule owner (AWS or customer), the rule identifier, and the notifications that cause the function to evaluate your AWS resources.
     */
    Source: Source;
    /**
     * A string, in JSON format, that is passed to the AWS Config rule Lambda function.
     */
    InputParameters?: StringWithCharLimit1024;
    /**
     * The maximum frequency with which AWS Config runs evaluations for a rule. You can specify a value for MaximumExecutionFrequency when:   You are using an AWS managed rule that is triggered at a periodic frequency.   Your custom rule is triggered when AWS Config delivers the configuration snapshot. For more information, see ConfigSnapshotDeliveryProperties.    By default, rules with a periodic trigger are evaluated every 24 hours. To change the frequency, specify a valid value for the MaximumExecutionFrequency parameter. 
     */
    MaximumExecutionFrequency?: MaximumExecutionFrequency;
    /**
     * Indicates whether the AWS Config rule is active or is currently being deleted by AWS Config. It can also indicate the evaluation status for the AWS Config rule. AWS Config sets the state of the rule to EVALUATING temporarily after you use the StartConfigRulesEvaluation request to evaluate your resources against the AWS Config rule. AWS Config sets the state of the rule to DELETING_RESULTS temporarily after you use the DeleteEvaluationResults request to delete the current evaluation results for the AWS Config rule. AWS Config temporarily sets the state of a rule to DELETING after you use the DeleteConfigRule request to delete the rule. After AWS Config deletes the rule, the rule and all of its evaluations are erased and are no longer available.
     */
    ConfigRuleState?: ConfigRuleState;
    /**
     * Service principal name of the service that created the rule.  The field is populated only if the service linked rule is created by a service. The field is empty if you create your own rule. 
     */
    CreatedBy?: StringWithCharLimit256;
  }
  export interface ConfigRuleComplianceFilters {
    /**
     * The name of the AWS Config rule.
     */
    ConfigRuleName?: ConfigRuleName;
    /**
     * The rule compliance status. For the ConfigRuleComplianceFilters data type, AWS Config supports only COMPLIANT and NON_COMPLIANT. AWS Config does not support the NOT_APPLICABLE and the INSUFFICIENT_DATA values.
     */
    ComplianceType?: ComplianceType;
    /**
     * The 12-digit account ID of the source account. 
     */
    AccountId?: AccountId;
    /**
     * The source region where the data is aggregated. 
     */
    AwsRegion?: AwsRegion;
  }
  export interface ConfigRuleComplianceSummaryFilters {
    /**
     * The 12-digit account ID of the source account.
     */
    AccountId?: AccountId;
    /**
     * The source region where the data is aggregated.
     */
    AwsRegion?: AwsRegion;
  }
  export type ConfigRuleComplianceSummaryGroupKey = "ACCOUNT_ID"|"AWS_REGION"|string;
  export interface ConfigRuleEvaluationStatus {
    /**
     * The name of the AWS Config rule.
     */
    ConfigRuleName?: StringWithCharLimit64;
    /**
     * The Amazon Resource Name (ARN) of the AWS Config rule.
     */
    ConfigRuleArn?: String;
    /**
     * The ID of the AWS Config rule.
     */
    ConfigRuleId?: String;
    /**
     * The time that AWS Config last successfully invoked the AWS Config rule to evaluate your AWS resources.
     */
    LastSuccessfulInvocationTime?: _Date;
    /**
     * The time that AWS Config last failed to invoke the AWS Config rule to evaluate your AWS resources.
     */
    LastFailedInvocationTime?: _Date;
    /**
     * The time that AWS Config last successfully evaluated your AWS resources against the rule.
     */
    LastSuccessfulEvaluationTime?: _Date;
    /**
     * The time that AWS Config last failed to evaluate your AWS resources against the rule.
     */
    LastFailedEvaluationTime?: _Date;
    /**
     * The time that you first activated the AWS Config rule.
     */
    FirstActivatedTime?: _Date;
    /**
     * The error code that AWS Config returned when the rule last failed.
     */
    LastErrorCode?: String;
    /**
     * The error message that AWS Config returned when the rule last failed.
     */
    LastErrorMessage?: String;
    /**
     * Indicates whether AWS Config has evaluated your resources against the rule at least once.    true - AWS Config has evaluated your AWS resources against the rule at least once.    false - AWS Config has not once finished evaluating your AWS resources against the rule.  
     */
    FirstEvaluationStarted?: Boolean;
  }
  export type ConfigRuleEvaluationStatusList = ConfigRuleEvaluationStatus[];
  export type ConfigRuleName = string;
  export type ConfigRuleNames = StringWithCharLimit64[];
  export type ConfigRuleState = "ACTIVE"|"DELETING"|"DELETING_RESULTS"|"EVALUATING"|string;
  export type ConfigRules = ConfigRule[];
  export interface ConfigSnapshotDeliveryProperties {
    /**
     * The frequency with which AWS Config delivers configuration snapshots.
     */
    deliveryFrequency?: MaximumExecutionFrequency;
  }
  export interface ConfigStreamDeliveryInfo {
    /**
     * Status of the last attempted delivery.  Note Providing an SNS topic on a DeliveryChannel for AWS Config is optional. If the SNS delivery is turned off, the last status will be Not_Applicable.
     */
    lastStatus?: DeliveryStatus;
    /**
     * The error code from the last attempted delivery.
     */
    lastErrorCode?: String;
    /**
     * The error message from the last attempted delivery.
     */
    lastErrorMessage?: String;
    /**
     * The time from the last status change.
     */
    lastStatusChangeTime?: _Date;
  }
  export type Configuration = string;
  export interface ConfigurationAggregator {
    /**
     * The name of the aggregator.
     */
    ConfigurationAggregatorName?: ConfigurationAggregatorName;
    /**
     * The Amazon Resource Name (ARN) of the aggregator.
     */
    ConfigurationAggregatorArn?: ConfigurationAggregatorArn;
    /**
     * Provides a list of source accounts and regions to be aggregated.
     */
    AccountAggregationSources?: AccountAggregationSourceList;
    /**
     * Provides an organization and list of regions to be aggregated.
     */
    OrganizationAggregationSource?: OrganizationAggregationSource;
    /**
     * The time stamp when the configuration aggregator was created.
     */
    CreationTime?: _Date;
    /**
     * The time of the last update.
     */
    LastUpdatedTime?: _Date;
  }
  export type ConfigurationAggregatorArn = string;
  export type ConfigurationAggregatorList = ConfigurationAggregator[];
  export type ConfigurationAggregatorName = string;
  export type ConfigurationAggregatorNameList = ConfigurationAggregatorName[];
  export interface ConfigurationItem {
    /**
     * The version number of the resource configuration.
     */
    version?: Version;
    /**
     * The 12-digit AWS account ID associated with the resource.
     */
    accountId?: AccountId;
    /**
     * The time when the configuration recording was initiated.
     */
    configurationItemCaptureTime?: ConfigurationItemCaptureTime;
    /**
     * The configuration item status.
     */
    configurationItemStatus?: ConfigurationItemStatus;
    /**
     * An identifier that indicates the ordering of the configuration items of a resource.
     */
    configurationStateId?: ConfigurationStateId;
    /**
     * Unique MD5 hash that represents the configuration item's state. You can use MD5 hash to compare the states of two or more configuration items that are associated with the same resource.
     */
    configurationItemMD5Hash?: ConfigurationItemMD5Hash;
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    arn?: ARN;
    /**
     * The type of AWS resource.
     */
    resourceType?: ResourceType;
    /**
     * The ID of the resource (for example, sg-xxxxxx).
     */
    resourceId?: ResourceId;
    /**
     * The custom name of the resource, if available.
     */
    resourceName?: ResourceName;
    /**
     * The region where the resource resides.
     */
    awsRegion?: AwsRegion;
    /**
     * The Availability Zone associated with the resource.
     */
    availabilityZone?: AvailabilityZone;
    /**
     * The time stamp when the resource was created.
     */
    resourceCreationTime?: ResourceCreationTime;
    /**
     * A mapping of key value tags associated with the resource.
     */
    tags?: Tags;
    /**
     * A list of CloudTrail event IDs. A populated field indicates that the current configuration was initiated by the events recorded in the CloudTrail log. For more information about CloudTrail, see What Is AWS CloudTrail. An empty field indicates that the current configuration was not initiated by any event.
     */
    relatedEvents?: RelatedEventList;
    /**
     * A list of related AWS resources.
     */
    relationships?: RelationshipList;
    /**
     * The description of the resource configuration.
     */
    configuration?: Configuration;
    /**
     * Configuration attributes that AWS Config returns for certain resource types to supplement the information returned for the configuration parameter.
     */
    supplementaryConfiguration?: SupplementaryConfiguration;
  }
  export type ConfigurationItemCaptureTime = Date;
  export type ConfigurationItemList = ConfigurationItem[];
  export type ConfigurationItemMD5Hash = string;
  export type ConfigurationItemStatus = "OK"|"ResourceDiscovered"|"ResourceNotRecorded"|"ResourceDeleted"|"ResourceDeletedNotRecorded"|string;
  export interface ConfigurationRecorder {
    /**
     * The name of the recorder. By default, AWS Config automatically assigns the name "default" when creating the configuration recorder. You cannot change the assigned name.
     */
    name?: RecorderName;
    /**
     * Amazon Resource Name (ARN) of the IAM role used to describe the AWS resources associated with the account.
     */
    roleARN?: String;
    /**
     * Specifies the types of AWS resources for which AWS Config records configuration changes.
     */
    recordingGroup?: RecordingGroup;
  }
  export type ConfigurationRecorderList = ConfigurationRecorder[];
  export type ConfigurationRecorderNameList = RecorderName[];
  export interface ConfigurationRecorderStatus {
    /**
     * The name of the configuration recorder.
     */
    name?: String;
    /**
     * The time the recorder was last started.
     */
    lastStartTime?: _Date;
    /**
     * The time the recorder was last stopped.
     */
    lastStopTime?: _Date;
    /**
     * Specifies whether or not the recorder is currently recording.
     */
    recording?: Boolean;
    /**
     * The last (previous) status of the recorder.
     */
    lastStatus?: RecorderStatus;
    /**
     * The error code indicating that the recording failed.
     */
    lastErrorCode?: String;
    /**
     * The message indicating that the recording failed due to an error.
     */
    lastErrorMessage?: String;
    /**
     * The time when the status was last changed.
     */
    lastStatusChangeTime?: _Date;
  }
  export type ConfigurationRecorderStatusList = ConfigurationRecorderStatus[];
  export type ConfigurationStateId = string;
  export type _Date = Date;
  export interface DeleteAggregationAuthorizationRequest {
    /**
     * The 12-digit account ID of the account authorized to aggregate data.
     */
    AuthorizedAccountId: AccountId;
    /**
     * The region authorized to collect aggregated data.
     */
    AuthorizedAwsRegion: AwsRegion;
  }
  export interface DeleteConfigRuleRequest {
    /**
     * The name of the AWS Config rule that you want to delete.
     */
    ConfigRuleName: StringWithCharLimit64;
  }
  export interface DeleteConfigurationAggregatorRequest {
    /**
     * The name of the configuration aggregator.
     */
    ConfigurationAggregatorName: ConfigurationAggregatorName;
  }
  export interface DeleteConfigurationRecorderRequest {
    /**
     * The name of the configuration recorder to be deleted. You can retrieve the name of your configuration recorder by using the DescribeConfigurationRecorders action.
     */
    ConfigurationRecorderName: RecorderName;
  }
  export interface DeleteDeliveryChannelRequest {
    /**
     * The name of the delivery channel to delete.
     */
    DeliveryChannelName: ChannelName;
  }
  export interface DeleteEvaluationResultsRequest {
    /**
     * The name of the AWS Config rule for which you want to delete the evaluation results.
     */
    ConfigRuleName: StringWithCharLimit64;
  }
  export interface DeleteEvaluationResultsResponse {
  }
  export interface DeletePendingAggregationRequestRequest {
    /**
     * The 12-digit account ID of the account requesting to aggregate data.
     */
    RequesterAccountId: AccountId;
    /**
     * The region requesting to aggregate data.
     */
    RequesterAwsRegion: AwsRegion;
  }
  export interface DeleteRetentionConfigurationRequest {
    /**
     * The name of the retention configuration to delete.
     */
    RetentionConfigurationName: RetentionConfigurationName;
  }
  export interface DeliverConfigSnapshotRequest {
    /**
     * The name of the delivery channel through which the snapshot is delivered.
     */
    deliveryChannelName: ChannelName;
  }
  export interface DeliverConfigSnapshotResponse {
    /**
     * The ID of the snapshot that is being created.
     */
    configSnapshotId?: String;
  }
  export interface DeliveryChannel {
    /**
     * The name of the delivery channel. By default, AWS Config assigns the name "default" when creating the delivery channel. To change the delivery channel name, you must use the DeleteDeliveryChannel action to delete your current delivery channel, and then you must use the PutDeliveryChannel command to create a delivery channel that has the desired name.
     */
    name?: ChannelName;
    /**
     * The name of the Amazon S3 bucket to which AWS Config delivers configuration snapshots and configuration history files. If you specify a bucket that belongs to another AWS account, that bucket must have policies that grant access permissions to AWS Config. For more information, see Permissions for the Amazon S3 Bucket in the AWS Config Developer Guide.
     */
    s3BucketName?: String;
    /**
     * The prefix for the specified Amazon S3 bucket.
     */
    s3KeyPrefix?: String;
    /**
     * The Amazon Resource Name (ARN) of the Amazon SNS topic to which AWS Config sends notifications about configuration changes. If you choose a topic from another account, the topic must have policies that grant access permissions to AWS Config. For more information, see Permissions for the Amazon SNS Topic in the AWS Config Developer Guide.
     */
    snsTopicARN?: String;
    /**
     * The options for how often AWS Config delivers configuration snapshots to the Amazon S3 bucket.
     */
    configSnapshotDeliveryProperties?: ConfigSnapshotDeliveryProperties;
  }
  export type DeliveryChannelList = DeliveryChannel[];
  export type DeliveryChannelNameList = ChannelName[];
  export interface DeliveryChannelStatus {
    /**
     * The name of the delivery channel.
     */
    name?: String;
    /**
     * A list containing the status of the delivery of the snapshot to the specified Amazon S3 bucket.
     */
    configSnapshotDeliveryInfo?: ConfigExportDeliveryInfo;
    /**
     * A list that contains the status of the delivery of the configuration history to the specified Amazon S3 bucket.
     */
    configHistoryDeliveryInfo?: ConfigExportDeliveryInfo;
    /**
     * A list containing the status of the delivery of the configuration stream notification to the specified Amazon SNS topic.
     */
    configStreamDeliveryInfo?: ConfigStreamDeliveryInfo;
  }
  export type DeliveryChannelStatusList = DeliveryChannelStatus[];
  export type DeliveryStatus = "Success"|"Failure"|"Not_Applicable"|string;
  export interface DescribeAggregateComplianceByConfigRulesRequest {
    /**
     * The name of the configuration aggregator.
     */
    ConfigurationAggregatorName: ConfigurationAggregatorName;
    /**
     * Filters the results by ConfigRuleComplianceFilters object. 
     */
    Filters?: ConfigRuleComplianceFilters;
    /**
     * The maximum number of evaluation results returned on each page. The default is maximum. If you specify 0, AWS Config uses the default.
     */
    Limit?: GroupByAPILimit;
    /**
     * The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.
     */
    NextToken?: NextToken;
  }
  export interface DescribeAggregateComplianceByConfigRulesResponse {
    /**
     * Returns a list of AggregateComplianceByConfigRule object.
     */
    AggregateComplianceByConfigRules?: AggregateComplianceByConfigRuleList;
    /**
     * The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.
     */
    NextToken?: NextToken;
  }
  export interface DescribeAggregationAuthorizationsRequest {
    /**
     * The maximum number of AggregationAuthorizations returned on each page. The default is maximum. If you specify 0, AWS Config uses the default.
     */
    Limit?: Limit;
    /**
     * The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.
     */
    NextToken?: String;
  }
  export interface DescribeAggregationAuthorizationsResponse {
    /**
     * Returns a list of authorizations granted to various aggregator accounts and regions.
     */
    AggregationAuthorizations?: AggregationAuthorizationList;
    /**
     * The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.
     */
    NextToken?: String;
  }
  export interface DescribeComplianceByConfigRuleRequest {
    /**
     * Specify one or more AWS Config rule names to filter the results by rule.
     */
    ConfigRuleNames?: ConfigRuleNames;
    /**
     * Filters the results by compliance. The allowed values are COMPLIANT, NON_COMPLIANT, and INSUFFICIENT_DATA.
     */
    ComplianceTypes?: ComplianceTypes;
    /**
     * The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.
     */
    NextToken?: String;
  }
  export interface DescribeComplianceByConfigRuleResponse {
    /**
     * Indicates whether each of the specified AWS Config rules is compliant.
     */
    ComplianceByConfigRules?: ComplianceByConfigRules;
    /**
     * The string that you use in a subsequent request to get the next page of results in a paginated response.
     */
    NextToken?: String;
  }
  export interface DescribeComplianceByResourceRequest {
    /**
     * The types of AWS resources for which you want compliance information (for example, AWS::EC2::Instance). For this action, you can specify that the resource type is an AWS account by specifying AWS::::Account.
     */
    ResourceType?: StringWithCharLimit256;
    /**
     * The ID of the AWS resource for which you want compliance information. You can specify only one resource ID. If you specify a resource ID, you must also specify a type for ResourceType.
     */
    ResourceId?: BaseResourceId;
    /**
     * Filters the results by compliance. The allowed values are COMPLIANT and NON_COMPLIANT.
     */
    ComplianceTypes?: ComplianceTypes;
    /**
     * The maximum number of evaluation results returned on each page. The default is 10. You cannot specify a number greater than 100. If you specify 0, AWS Config uses the default.
     */
    Limit?: Limit;
    /**
     * The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.
     */
    NextToken?: NextToken;
  }
  export interface DescribeComplianceByResourceResponse {
    /**
     * Indicates whether the specified AWS resource complies with all of the AWS Config rules that evaluate it.
     */
    ComplianceByResources?: ComplianceByResources;
    /**
     * The string that you use in a subsequent request to get the next page of results in a paginated response.
     */
    NextToken?: NextToken;
  }
  export interface DescribeConfigRuleEvaluationStatusRequest {
    /**
     * The name of the AWS managed Config rules for which you want status information. If you do not specify any names, AWS Config returns status information for all AWS managed Config rules that you use.
     */
    ConfigRuleNames?: ConfigRuleNames;
    /**
     * The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.
     */
    NextToken?: String;
    /**
     * The number of rule evaluation results that you want returned. This parameter is required if the rule limit for your account is more than the default of 50 rules. For information about requesting a rule limit increase, see AWS Config Limits in the AWS General Reference Guide.
     */
    Limit?: RuleLimit;
  }
  export interface DescribeConfigRuleEvaluationStatusResponse {
    /**
     * Status information about your AWS managed Config rules.
     */
    ConfigRulesEvaluationStatus?: ConfigRuleEvaluationStatusList;
    /**
     * The string that you use in a subsequent request to get the next page of results in a paginated response.
     */
    NextToken?: String;
  }
  export interface DescribeConfigRulesRequest {
    /**
     * The names of the AWS Config rules for which you want details. If you do not specify any names, AWS Config returns details for all your rules.
     */
    ConfigRuleNames?: ConfigRuleNames;
    /**
     * The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.
     */
    NextToken?: String;
  }
  export interface DescribeConfigRulesResponse {
    /**
     * The details about your AWS Config rules.
     */
    ConfigRules?: ConfigRules;
    /**
     * The string that you use in a subsequent request to get the next page of results in a paginated response.
     */
    NextToken?: String;
  }
  export interface DescribeConfigurationAggregatorSourcesStatusRequest {
    /**
     * The name of the configuration aggregator.
     */
    ConfigurationAggregatorName: ConfigurationAggregatorName;
    /**
     * Filters the status type.   Valid value FAILED indicates errors while moving data.   Valid value SUCCEEDED indicates the data was successfully moved.   Valid value OUTDATED indicates the data is not the most recent.  
     */
    UpdateStatus?: AggregatedSourceStatusTypeList;
    /**
     * The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.
     */
    NextToken?: String;
    /**
     * The maximum number of AggregatorSourceStatus returned on each page. The default is maximum. If you specify 0, AWS Config uses the default.
     */
    Limit?: Limit;
  }
  export interface DescribeConfigurationAggregatorSourcesStatusResponse {
    /**
     * Returns an AggregatedSourceStatus object. 
     */
    AggregatedSourceStatusList?: AggregatedSourceStatusList;
    /**
     * The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.
     */
    NextToken?: String;
  }
  export interface DescribeConfigurationAggregatorsRequest {
    /**
     * The name of the configuration aggregators.
     */
    ConfigurationAggregatorNames?: ConfigurationAggregatorNameList;
    /**
     * The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.
     */
    NextToken?: String;
    /**
     * The maximum number of configuration aggregators returned on each page. The default is maximum. If you specify 0, AWS Config uses the default.
     */
    Limit?: Limit;
  }
  export interface DescribeConfigurationAggregatorsResponse {
    /**
     * Returns a ConfigurationAggregators object.
     */
    ConfigurationAggregators?: ConfigurationAggregatorList;
    /**
     * The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.
     */
    NextToken?: String;
  }
  export interface DescribeConfigurationRecorderStatusRequest {
    /**
     * The name(s) of the configuration recorder. If the name is not specified, the action returns the current status of all the configuration recorders associated with the account.
     */
    ConfigurationRecorderNames?: ConfigurationRecorderNameList;
  }
  export interface DescribeConfigurationRecorderStatusResponse {
    /**
     * A list that contains status of the specified recorders.
     */
    ConfigurationRecordersStatus?: ConfigurationRecorderStatusList;
  }
  export interface DescribeConfigurationRecordersRequest {
    /**
     * A list of configuration recorder names.
     */
    ConfigurationRecorderNames?: ConfigurationRecorderNameList;
  }
  export interface DescribeConfigurationRecordersResponse {
    /**
     * A list that contains the descriptions of the specified configuration recorders.
     */
    ConfigurationRecorders?: ConfigurationRecorderList;
  }
  export interface DescribeDeliveryChannelStatusRequest {
    /**
     * A list of delivery channel names.
     */
    DeliveryChannelNames?: DeliveryChannelNameList;
  }
  export interface DescribeDeliveryChannelStatusResponse {
    /**
     * A list that contains the status of a specified delivery channel.
     */
    DeliveryChannelsStatus?: DeliveryChannelStatusList;
  }
  export interface DescribeDeliveryChannelsRequest {
    /**
     * A list of delivery channel names.
     */
    DeliveryChannelNames?: DeliveryChannelNameList;
  }
  export interface DescribeDeliveryChannelsResponse {
    /**
     * A list that contains the descriptions of the specified delivery channel.
     */
    DeliveryChannels?: DeliveryChannelList;
  }
  export type DescribePendingAggregationRequestsLimit = number;
  export interface DescribePendingAggregationRequestsRequest {
    /**
     * The maximum number of evaluation results returned on each page. The default is maximum. If you specify 0, AWS Config uses the default.
     */
    Limit?: DescribePendingAggregationRequestsLimit;
    /**
     * The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.
     */
    NextToken?: String;
  }
  export interface DescribePendingAggregationRequestsResponse {
    /**
     * Returns a PendingAggregationRequests object.
     */
    PendingAggregationRequests?: PendingAggregationRequestList;
    /**
     * The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.
     */
    NextToken?: String;
  }
  export interface DescribeRetentionConfigurationsRequest {
    /**
     * A list of names of retention configurations for which you want details. If you do not specify a name, AWS Config returns details for all the retention configurations for that account.  Currently, AWS Config supports only one retention configuration per region in your account. 
     */
    RetentionConfigurationNames?: RetentionConfigurationNameList;
    /**
     * The nextToken string returned on a previous page that you use to get the next page of results in a paginated response. 
     */
    NextToken?: NextToken;
  }
  export interface DescribeRetentionConfigurationsResponse {
    /**
     * Returns a retention configuration object.
     */
    RetentionConfigurations?: RetentionConfigurationList;
    /**
     * The nextToken string returned on a previous page that you use to get the next page of results in a paginated response. 
     */
    NextToken?: NextToken;
  }
  export type DiscoveredResourceIdentifierList = AggregateResourceIdentifier[];
  export type EarlierTime = Date;
  export type EmptiableStringWithCharLimit256 = string;
  export interface Evaluation {
    /**
     * The type of AWS resource that was evaluated.
     */
    ComplianceResourceType: StringWithCharLimit256;
    /**
     * The ID of the AWS resource that was evaluated.
     */
    ComplianceResourceId: BaseResourceId;
    /**
     * Indicates whether the AWS resource complies with the AWS Config rule that it was evaluated against. For the Evaluation data type, AWS Config supports only the COMPLIANT, NON_COMPLIANT, and NOT_APPLICABLE values. AWS Config does not support the INSUFFICIENT_DATA value for this data type. Similarly, AWS Config does not accept INSUFFICIENT_DATA as the value for ComplianceType from a PutEvaluations request. For example, an AWS Lambda function for a custom AWS Config rule cannot pass an INSUFFICIENT_DATA value to AWS Config.
     */
    ComplianceType: ComplianceType;
    /**
     * Supplementary information about how the evaluation determined the compliance.
     */
    Annotation?: StringWithCharLimit256;
    /**
     * The time of the event in AWS Config that triggered the evaluation. For event-based evaluations, the time indicates when AWS Config created the configuration item that triggered the evaluation. For periodic evaluations, the time indicates when AWS Config triggered the evaluation at the frequency that you specified (for example, every 24 hours).
     */
    OrderingTimestamp: OrderingTimestamp;
  }
  export interface EvaluationResult {
    /**
     * Uniquely identifies the evaluation result.
     */
    EvaluationResultIdentifier?: EvaluationResultIdentifier;
    /**
     * Indicates whether the AWS resource complies with the AWS Config rule that evaluated it. For the EvaluationResult data type, AWS Config supports only the COMPLIANT, NON_COMPLIANT, and NOT_APPLICABLE values. AWS Config does not support the INSUFFICIENT_DATA value for the EvaluationResult data type.
     */
    ComplianceType?: ComplianceType;
    /**
     * The time when AWS Config recorded the evaluation result.
     */
    ResultRecordedTime?: _Date;
    /**
     * The time when the AWS Config rule evaluated the AWS resource.
     */
    ConfigRuleInvokedTime?: _Date;
    /**
     * Supplementary information about how the evaluation determined the compliance.
     */
    Annotation?: StringWithCharLimit256;
    /**
     * An encrypted token that associates an evaluation with an AWS Config rule. The token identifies the rule, the AWS resource being evaluated, and the event that triggered the evaluation.
     */
    ResultToken?: String;
  }
  export interface EvaluationResultIdentifier {
    /**
     * Identifies an AWS Config rule used to evaluate an AWS resource, and provides the type and ID of the evaluated resource.
     */
    EvaluationResultQualifier?: EvaluationResultQualifier;
    /**
     * The time of the event that triggered the evaluation of your AWS resources. The time can indicate when AWS Config delivered a configuration item change notification, or it can indicate when AWS Config delivered the configuration snapshot, depending on which event triggered the evaluation.
     */
    OrderingTimestamp?: _Date;
  }
  export interface EvaluationResultQualifier {
    /**
     * The name of the AWS Config rule that was used in the evaluation.
     */
    ConfigRuleName?: StringWithCharLimit64;
    /**
     * The type of AWS resource that was evaluated.
     */
    ResourceType?: StringWithCharLimit256;
    /**
     * The ID of the evaluated AWS resource.
     */
    ResourceId?: BaseResourceId;
  }
  export type EvaluationResults = EvaluationResult[];
  export type Evaluations = Evaluation[];
  export type EventSource = "aws.config"|string;
  export interface GetAggregateComplianceDetailsByConfigRuleRequest {
    /**
     * The name of the configuration aggregator.
     */
    ConfigurationAggregatorName: ConfigurationAggregatorName;
    /**
     * The name of the AWS Config rule for which you want compliance information.
     */
    ConfigRuleName: ConfigRuleName;
    /**
     * The 12-digit account ID of the source account.
     */
    AccountId: AccountId;
    /**
     * The source region from where the data is aggregated.
     */
    AwsRegion: AwsRegion;
    /**
     * The resource compliance status.  For the GetAggregateComplianceDetailsByConfigRuleRequest data type, AWS Config supports only the COMPLIANT and NON_COMPLIANT. AWS Config does not support the NOT_APPLICABLE and INSUFFICIENT_DATA values. 
     */
    ComplianceType?: ComplianceType;
    /**
     * The maximum number of evaluation results returned on each page. The default is 50. You cannot specify a number greater than 100. If you specify 0, AWS Config uses the default.
     */
    Limit?: Limit;
    /**
     * The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.
     */
    NextToken?: NextToken;
  }
  export interface GetAggregateComplianceDetailsByConfigRuleResponse {
    /**
     * Returns an AggregateEvaluationResults object.
     */
    AggregateEvaluationResults?: AggregateEvaluationResultList;
    /**
     * The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.
     */
    NextToken?: NextToken;
  }
  export interface GetAggregateConfigRuleComplianceSummaryRequest {
    /**
     * The name of the configuration aggregator.
     */
    ConfigurationAggregatorName: ConfigurationAggregatorName;
    /**
     * Filters the results based on the ConfigRuleComplianceSummaryFilters object.
     */
    Filters?: ConfigRuleComplianceSummaryFilters;
    /**
     * Groups the result based on ACCOUNT_ID or AWS_REGION.
     */
    GroupByKey?: ConfigRuleComplianceSummaryGroupKey;
    /**
     * The maximum number of evaluation results returned on each page. The default is 1000. You cannot specify a number greater than 1000. If you specify 0, AWS Config uses the default.
     */
    Limit?: GroupByAPILimit;
    /**
     * The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.
     */
    NextToken?: NextToken;
  }
  export interface GetAggregateConfigRuleComplianceSummaryResponse {
    /**
     * Groups the result based on ACCOUNT_ID or AWS_REGION.
     */
    GroupByKey?: StringWithCharLimit256;
    /**
     * Returns a list of AggregateComplianceCounts object.
     */
    AggregateComplianceCounts?: AggregateComplianceCountList;
    /**
     * The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.
     */
    NextToken?: NextToken;
  }
  export interface GetAggregateDiscoveredResourceCountsRequest {
    /**
     * The name of the configuration aggregator.
     */
    ConfigurationAggregatorName: ConfigurationAggregatorName;
    /**
     * Filters the results based on the ResourceCountFilters object.
     */
    Filters?: ResourceCountFilters;
    /**
     * The key to group the resource counts.
     */
    GroupByKey?: ResourceCountGroupKey;
    /**
     * The maximum number of GroupedResourceCount objects returned on each page. The default is 1000. You cannot specify a number greater than 1000. If you specify 0, AWS Config uses the default.
     */
    Limit?: GroupByAPILimit;
    /**
     * The nextToken string returned on a previous page that you use to get the next page of results in a paginated response. 
     */
    NextToken?: NextToken;
  }
  export interface GetAggregateDiscoveredResourceCountsResponse {
    /**
     * The total number of resources that are present in an aggregator with the filters that you provide.
     */
    TotalDiscoveredResources: Long;
    /**
     * The key passed into the request object. If GroupByKey is not provided, the result will be empty.
     */
    GroupByKey?: StringWithCharLimit256;
    /**
     * Returns a list of GroupedResourceCount objects.
     */
    GroupedResourceCounts?: GroupedResourceCountList;
    /**
     * The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.
     */
    NextToken?: NextToken;
  }
  export interface GetAggregateResourceConfigRequest {
    /**
     * The name of the configuration aggregator.
     */
    ConfigurationAggregatorName: ConfigurationAggregatorName;
    /**
     * An object that identifies aggregate resource.
     */
    ResourceIdentifier: AggregateResourceIdentifier;
  }
  export interface GetAggregateResourceConfigResponse {
    /**
     * Returns a ConfigurationItem object.
     */
    ConfigurationItem?: ConfigurationItem;
  }
  export interface GetComplianceDetailsByConfigRuleRequest {
    /**
     * The name of the AWS Config rule for which you want compliance information.
     */
    ConfigRuleName: StringWithCharLimit64;
    /**
     * Filters the results by compliance. The allowed values are COMPLIANT, NON_COMPLIANT, and NOT_APPLICABLE.
     */
    ComplianceTypes?: ComplianceTypes;
    /**
     * The maximum number of evaluation results returned on each page. The default is 10. You cannot specify a number greater than 100. If you specify 0, AWS Config uses the default.
     */
    Limit?: Limit;
    /**
     * The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.
     */
    NextToken?: NextToken;
  }
  export interface GetComplianceDetailsByConfigRuleResponse {
    /**
     * Indicates whether the AWS resource complies with the specified AWS Config rule.
     */
    EvaluationResults?: EvaluationResults;
    /**
     * The string that you use in a subsequent request to get the next page of results in a paginated response.
     */
    NextToken?: NextToken;
  }
  export interface GetComplianceDetailsByResourceRequest {
    /**
     * The type of the AWS resource for which you want compliance information.
     */
    ResourceType: StringWithCharLimit256;
    /**
     * The ID of the AWS resource for which you want compliance information.
     */
    ResourceId: BaseResourceId;
    /**
     * Filters the results by compliance. The allowed values are COMPLIANT, NON_COMPLIANT, and NOT_APPLICABLE.
     */
    ComplianceTypes?: ComplianceTypes;
    /**
     * The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.
     */
    NextToken?: String;
  }
  export interface GetComplianceDetailsByResourceResponse {
    /**
     * Indicates whether the specified AWS resource complies each AWS Config rule.
     */
    EvaluationResults?: EvaluationResults;
    /**
     * The string that you use in a subsequent request to get the next page of results in a paginated response.
     */
    NextToken?: String;
  }
  export interface GetComplianceSummaryByConfigRuleResponse {
    /**
     * The number of AWS Config rules that are compliant and the number that are noncompliant, up to a maximum of 25 for each.
     */
    ComplianceSummary?: ComplianceSummary;
  }
  export interface GetComplianceSummaryByResourceTypeRequest {
    /**
     * Specify one or more resource types to get the number of resources that are compliant and the number that are noncompliant for each resource type. For this request, you can specify an AWS resource type such as AWS::EC2::Instance. You can specify that the resource type is an AWS account by specifying AWS::::Account.
     */
    ResourceTypes?: ResourceTypes;
  }
  export interface GetComplianceSummaryByResourceTypeResponse {
    /**
     * The number of resources that are compliant and the number that are noncompliant. If one or more resource types were provided with the request, the numbers are returned for each resource type. The maximum number returned is 100.
     */
    ComplianceSummariesByResourceType?: ComplianceSummariesByResourceType;
  }
  export interface GetDiscoveredResourceCountsRequest {
    /**
     * The comma-separated list that specifies the resource types that you want AWS Config to return (for example, "AWS::EC2::Instance", "AWS::IAM::User"). If a value for resourceTypes is not specified, AWS Config returns all resource types that AWS Config is recording in the region for your account.  If the configuration recorder is turned off, AWS Config returns an empty list of ResourceCount objects. If the configuration recorder is not recording a specific resource type (for example, S3 buckets), that resource type is not returned in the list of ResourceCount objects. 
     */
    resourceTypes?: ResourceTypes;
    /**
     * The maximum number of ResourceCount objects returned on each page. The default is 100. You cannot specify a number greater than 100. If you specify 0, AWS Config uses the default.
     */
    limit?: Limit;
    /**
     * The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.
     */
    nextToken?: NextToken;
  }
  export interface GetDiscoveredResourceCountsResponse {
    /**
     * The total number of resources that AWS Config is recording in the region for your account. If you specify resource types in the request, AWS Config returns only the total number of resources for those resource types.  Example    AWS Config is recording three resource types in the US East (Ohio) Region for your account: 25 EC2 instances, 20 IAM users, and 15 S3 buckets, for a total of 60 resources.   You make a call to the GetDiscoveredResourceCounts action and specify the resource type, "AWS::EC2::Instances", in the request.   AWS Config returns 25 for totalDiscoveredResources.  
     */
    totalDiscoveredResources?: Long;
    /**
     * The list of ResourceCount objects. Each object is listed in descending order by the number of resources.
     */
    resourceCounts?: ResourceCounts;
    /**
     * The string that you use in a subsequent request to get the next page of results in a paginated response.
     */
    nextToken?: NextToken;
  }
  export interface GetResourceConfigHistoryRequest {
    /**
     * The resource type.
     */
    resourceType: ResourceType;
    /**
     * The ID of the resource (for example., sg-xxxxxx).
     */
    resourceId: ResourceId;
    /**
     * The time stamp that indicates a later time. If not specified, current time is taken.
     */
    laterTime?: LaterTime;
    /**
     * The time stamp that indicates an earlier time. If not specified, the action returns paginated results that contain configuration items that start when the first configuration item was recorded.
     */
    earlierTime?: EarlierTime;
    /**
     * The chronological order for configuration items listed. By default, the results are listed in reverse chronological order.
     */
    chronologicalOrder?: ChronologicalOrder;
    /**
     * The maximum number of configuration items returned on each page. The default is 10. You cannot specify a number greater than 100. If you specify 0, AWS Config uses the default.
     */
    limit?: Limit;
    /**
     * The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.
     */
    nextToken?: NextToken;
  }
  export interface GetResourceConfigHistoryResponse {
    /**
     * A list that contains the configuration history of one or more resources.
     */
    configurationItems?: ConfigurationItemList;
    /**
     * The string that you use in a subsequent request to get the next page of results in a paginated response.
     */
    nextToken?: NextToken;
  }
  export type GroupByAPILimit = number;
  export interface GroupedResourceCount {
    /**
     * The name of the group that can be region, account ID, or resource type. For example, region1, region2 if the region was chosen as GroupByKey.
     */
    GroupName: StringWithCharLimit256;
    /**
     * The number of resources in the group.
     */
    ResourceCount: Long;
  }
  export type GroupedResourceCountList = GroupedResourceCount[];
  export type IncludeGlobalResourceTypes = boolean;
  export type Integer = number;
  export type LaterTime = Date;
  export type Limit = number;
  export interface ListAggregateDiscoveredResourcesRequest {
    /**
     * The name of the configuration aggregator. 
     */
    ConfigurationAggregatorName: ConfigurationAggregatorName;
    /**
     * The type of resources that you want AWS Config to list in the response.
     */
    ResourceType: ResourceType;
    /**
     * Filters the results based on the ResourceFilters object.
     */
    Filters?: ResourceFilters;
    /**
     * The maximum number of resource identifiers returned on each page. The default is 100. You cannot specify a number greater than 100. If you specify 0, AWS Config uses the default.
     */
    Limit?: Limit;
    /**
     * The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.
     */
    NextToken?: NextToken;
  }
  export interface ListAggregateDiscoveredResourcesResponse {
    /**
     * Returns a list of ResourceIdentifiers objects.
     */
    ResourceIdentifiers?: DiscoveredResourceIdentifierList;
    /**
     * The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.
     */
    NextToken?: NextToken;
  }
  export interface ListDiscoveredResourcesRequest {
    /**
     * The type of resources that you want AWS Config to list in the response.
     */
    resourceType: ResourceType;
    /**
     * The IDs of only those resources that you want AWS Config to list in the response. If you do not specify this parameter, AWS Config lists all resources of the specified type that it has discovered.
     */
    resourceIds?: ResourceIdList;
    /**
     * The custom name of only those resources that you want AWS Config to list in the response. If you do not specify this parameter, AWS Config lists all resources of the specified type that it has discovered.
     */
    resourceName?: ResourceName;
    /**
     * The maximum number of resource identifiers returned on each page. The default is 100. You cannot specify a number greater than 100. If you specify 0, AWS Config uses the default.
     */
    limit?: Limit;
    /**
     * Specifies whether AWS Config includes deleted resources in the results. By default, deleted resources are not included.
     */
    includeDeletedResources?: Boolean;
    /**
     * The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.
     */
    nextToken?: NextToken;
  }
  export interface ListDiscoveredResourcesResponse {
    /**
     * The details that identify a resource that is discovered by AWS Config, including the resource type, ID, and (if available) the custom resource name.
     */
    resourceIdentifiers?: ResourceIdentifierList;
    /**
     * The string that you use in a subsequent request to get the next page of results in a paginated response.
     */
    nextToken?: NextToken;
  }
  export type Long = number;
  export type MaximumExecutionFrequency = "One_Hour"|"Three_Hours"|"Six_Hours"|"Twelve_Hours"|"TwentyFour_Hours"|string;
  export type MessageType = "ConfigurationItemChangeNotification"|"ConfigurationSnapshotDeliveryCompleted"|"ScheduledNotification"|"OversizedConfigurationItemChangeNotification"|string;
  export type Name = string;
  export type NextToken = string;
  export type OrderingTimestamp = Date;
  export interface OrganizationAggregationSource {
    /**
     * ARN of the IAM role used to retreive AWS Organization details associated with the aggregator account.
     */
    RoleArn: String;
    /**
     * The source regions being aggregated.
     */
    AwsRegions?: AggregatorRegionList;
    /**
     * If true, aggregate existing AWS Config regions and future regions.
     */
    AllAwsRegions?: Boolean;
  }
  export type Owner = "CUSTOM_LAMBDA"|"AWS"|string;
  export interface PendingAggregationRequest {
    /**
     * The 12-digit account ID of the account requesting to aggregate data.
     */
    RequesterAccountId?: AccountId;
    /**
     * The region requesting to aggregate data. 
     */
    RequesterAwsRegion?: AwsRegion;
  }
  export type PendingAggregationRequestList = PendingAggregationRequest[];
  export interface PutAggregationAuthorizationRequest {
    /**
     * The 12-digit account ID of the account authorized to aggregate data.
     */
    AuthorizedAccountId: AccountId;
    /**
     * The region authorized to collect aggregated data.
     */
    AuthorizedAwsRegion: AwsRegion;
  }
  export interface PutAggregationAuthorizationResponse {
    /**
     * Returns an AggregationAuthorization object. 
     */
    AggregationAuthorization?: AggregationAuthorization;
  }
  export interface PutConfigRuleRequest {
    /**
     * The rule that you want to add to your account.
     */
    ConfigRule: ConfigRule;
  }
  export interface PutConfigurationAggregatorRequest {
    /**
     * The name of the configuration aggregator.
     */
    ConfigurationAggregatorName: ConfigurationAggregatorName;
    /**
     * A list of AccountAggregationSource object. 
     */
    AccountAggregationSources?: AccountAggregationSourceList;
    /**
     * An OrganizationAggregationSource object.
     */
    OrganizationAggregationSource?: OrganizationAggregationSource;
  }
  export interface PutConfigurationAggregatorResponse {
    /**
     * Returns a ConfigurationAggregator object.
     */
    ConfigurationAggregator?: ConfigurationAggregator;
  }
  export interface PutConfigurationRecorderRequest {
    /**
     * The configuration recorder object that records each configuration change made to the resources.
     */
    ConfigurationRecorder: ConfigurationRecorder;
  }
  export interface PutDeliveryChannelRequest {
    /**
     * The configuration delivery channel object that delivers the configuration information to an Amazon S3 bucket and to an Amazon SNS topic.
     */
    DeliveryChannel: DeliveryChannel;
  }
  export interface PutEvaluationsRequest {
    /**
     * The assessments that the AWS Lambda function performs. Each evaluation identifies an AWS resource and indicates whether it complies with the AWS Config rule that invokes the AWS Lambda function.
     */
    Evaluations?: Evaluations;
    /**
     * An encrypted token that associates an evaluation with an AWS Config rule. Identifies the rule and the event that triggered the evaluation.
     */
    ResultToken: String;
    /**
     * Use this parameter to specify a test run for PutEvaluations. You can verify whether your AWS Lambda function will deliver evaluation results to AWS Config. No updates occur to your existing evaluations, and evaluation results are not sent to AWS Config.  When TestMode is true, PutEvaluations doesn't require a valid value for the ResultToken parameter, but the value cannot be null. 
     */
    TestMode?: Boolean;
  }
  export interface PutEvaluationsResponse {
    /**
     * Requests that failed because of a client or server error.
     */
    FailedEvaluations?: Evaluations;
  }
  export interface PutRetentionConfigurationRequest {
    /**
     * Number of days AWS Config stores your historical information.  Currently, only applicable to the configuration item history. 
     */
    RetentionPeriodInDays: RetentionPeriodInDays;
  }
  export interface PutRetentionConfigurationResponse {
    /**
     * Returns a retention configuration object.
     */
    RetentionConfiguration?: RetentionConfiguration;
  }
  export type RecorderName = string;
  export type RecorderStatus = "Pending"|"Success"|"Failure"|string;
  export interface RecordingGroup {
    /**
     * Specifies whether AWS Config records configuration changes for every supported type of regional resource. If you set this option to true, when AWS Config adds support for a new type of regional resource, it starts recording resources of that type automatically. If you set this option to true, you cannot enumerate a list of resourceTypes.
     */
    allSupported?: AllSupported;
    /**
     * Specifies whether AWS Config includes all supported types of global resources (for example, IAM resources) with the resources that it records. Before you can set this option to true, you must set the allSupported option to true. If you set this option to true, when AWS Config adds support for a new type of global resource, it starts recording resources of that type automatically. The configuration details for any global resource are the same in all regions. To prevent duplicate configuration items, you should consider customizing AWS Config in only one region to record global resources.
     */
    includeGlobalResourceTypes?: IncludeGlobalResourceTypes;
    /**
     * A comma-separated list that specifies the types of AWS resources for which AWS Config records configuration changes (for example, AWS::EC2::Instance or AWS::CloudTrail::Trail). Before you can set this option to true, you must set the allSupported option to false. If you set this option to true, when AWS Config adds support for a new type of resource, it will not record resources of that type unless you manually add that type to your recording group. For a list of valid resourceTypes values, see the resourceType Value column in Supported AWS Resource Types.
     */
    resourceTypes?: ResourceTypeList;
  }
  export type ReevaluateConfigRuleNames = StringWithCharLimit64[];
  export type RelatedEvent = string;
  export type RelatedEventList = RelatedEvent[];
  export interface Relationship {
    /**
     * The resource type of the related resource.
     */
    resourceType?: ResourceType;
    /**
     * The ID of the related resource (for example, sg-xxxxxx).
     */
    resourceId?: ResourceId;
    /**
     * The custom name of the related resource, if available.
     */
    resourceName?: ResourceName;
    /**
     * The type of relationship with the related resource.
     */
    relationshipName?: RelationshipName;
  }
  export type RelationshipList = Relationship[];
  export type RelationshipName = string;
  export interface ResourceCount {
    /**
     * The resource type (for example, "AWS::EC2::Instance").
     */
    resourceType?: ResourceType;
    /**
     * The number of resources.
     */
    count?: Long;
  }
  export interface ResourceCountFilters {
    /**
     * The type of the AWS resource.
     */
    ResourceType?: ResourceType;
    /**
     * The 12-digit ID of the account.
     */
    AccountId?: AccountId;
    /**
     * The region where the account is located.
     */
    Region?: AwsRegion;
  }
  export type ResourceCountGroupKey = "RESOURCE_TYPE"|"ACCOUNT_ID"|"AWS_REGION"|string;
  export type ResourceCounts = ResourceCount[];
  export type ResourceCreationTime = Date;
  export type ResourceDeletionTime = Date;
  export interface ResourceFilters {
    /**
     * The 12-digit source account ID.
     */
    AccountId?: AccountId;
    /**
     * The ID of the resource.
     */
    ResourceId?: ResourceId;
    /**
     * The name of the resource.
     */
    ResourceName?: ResourceName;
    /**
     * The source region.
     */
    Region?: AwsRegion;
  }
  export type ResourceId = string;
  export type ResourceIdList = ResourceId[];
  export interface ResourceIdentifier {
    /**
     * The type of resource.
     */
    resourceType?: ResourceType;
    /**
     * The ID of the resource (for example, sg-xxxxxx).
     */
    resourceId?: ResourceId;
    /**
     * The custom name of the resource (if available).
     */
    resourceName?: ResourceName;
    /**
     * The time that the resource was deleted.
     */
    resourceDeletionTime?: ResourceDeletionTime;
  }
  export type ResourceIdentifierList = ResourceIdentifier[];
  export type ResourceIdentifiersList = AggregateResourceIdentifier[];
  export interface ResourceKey {
    /**
     * The resource type.
     */
    resourceType: ResourceType;
    /**
     * The ID of the resource (for example., sg-xxxxxx). 
     */
    resourceId: ResourceId;
  }
  export type ResourceKeys = ResourceKey[];
  export type ResourceName = string;
  export type ResourceType = "AWS::EC2::CustomerGateway"|"AWS::EC2::EIP"|"AWS::EC2::Host"|"AWS::EC2::Instance"|"AWS::EC2::InternetGateway"|"AWS::EC2::NetworkAcl"|"AWS::EC2::NetworkInterface"|"AWS::EC2::RouteTable"|"AWS::EC2::SecurityGroup"|"AWS::EC2::Subnet"|"AWS::CloudTrail::Trail"|"AWS::EC2::Volume"|"AWS::EC2::VPC"|"AWS::EC2::VPNConnection"|"AWS::EC2::VPNGateway"|"AWS::IAM::Group"|"AWS::IAM::Policy"|"AWS::IAM::Role"|"AWS::IAM::User"|"AWS::ACM::Certificate"|"AWS::RDS::DBInstance"|"AWS::RDS::DBSubnetGroup"|"AWS::RDS::DBSecurityGroup"|"AWS::RDS::DBSnapshot"|"AWS::RDS::EventSubscription"|"AWS::ElasticLoadBalancingV2::LoadBalancer"|"AWS::S3::Bucket"|"AWS::SSM::ManagedInstanceInventory"|"AWS::Redshift::Cluster"|"AWS::Redshift::ClusterSnapshot"|"AWS::Redshift::ClusterParameterGroup"|"AWS::Redshift::ClusterSecurityGroup"|"AWS::Redshift::ClusterSubnetGroup"|"AWS::Redshift::EventSubscription"|"AWS::CloudWatch::Alarm"|"AWS::CloudFormation::Stack"|"AWS::DynamoDB::Table"|"AWS::AutoScaling::AutoScalingGroup"|"AWS::AutoScaling::LaunchConfiguration"|"AWS::AutoScaling::ScalingPolicy"|"AWS::AutoScaling::ScheduledAction"|"AWS::CodeBuild::Project"|"AWS::WAF::RateBasedRule"|"AWS::WAF::Rule"|"AWS::WAF::WebACL"|"AWS::WAFRegional::RateBasedRule"|"AWS::WAFRegional::Rule"|"AWS::WAFRegional::WebACL"|"AWS::CloudFront::Distribution"|"AWS::CloudFront::StreamingDistribution"|"AWS::WAF::RuleGroup"|"AWS::WAFRegional::RuleGroup"|"AWS::Lambda::Function"|"AWS::ElasticBeanstalk::Application"|"AWS::ElasticBeanstalk::ApplicationVersion"|"AWS::ElasticBeanstalk::Environment"|"AWS::ElasticLoadBalancing::LoadBalancer"|"AWS::XRay::EncryptionConfig"|"AWS::SSM::AssociationCompliance"|"AWS::SSM::PatchCompliance"|"AWS::Shield::Protection"|"AWS::ShieldRegional::Protection"|"AWS::Config::ResourceCompliance"|"AWS::CodePipeline::Pipeline"|string;
  export type ResourceTypeList = ResourceType[];
  export type ResourceTypes = StringWithCharLimit256[];
  export interface RetentionConfiguration {
    /**
     * The name of the retention configuration object.
     */
    Name: RetentionConfigurationName;
    /**
     * Number of days AWS Config stores your historical information.  Currently, only applicable to the configuration item history. 
     */
    RetentionPeriodInDays: RetentionPeriodInDays;
  }
  export type RetentionConfigurationList = RetentionConfiguration[];
  export type RetentionConfigurationName = string;
  export type RetentionConfigurationNameList = RetentionConfigurationName[];
  export type RetentionPeriodInDays = number;
  export type RuleLimit = number;
  export interface Scope {
    /**
     * The resource types of only those AWS resources that you want to trigger an evaluation for the rule. You can only specify one type if you also specify a resource ID for ComplianceResourceId.
     */
    ComplianceResourceTypes?: ComplianceResourceTypes;
    /**
     * The tag key that is applied to only those AWS resources that you want to trigger an evaluation for the rule.
     */
    TagKey?: StringWithCharLimit128;
    /**
     * The tag value applied to only those AWS resources that you want to trigger an evaluation for the rule. If you specify a value for TagValue, you must also specify a value for TagKey.
     */
    TagValue?: StringWithCharLimit256;
    /**
     * The ID of the only AWS resource that you want to trigger an evaluation for the rule. If you specify a resource ID, you must specify one resource type for ComplianceResourceTypes.
     */
    ComplianceResourceId?: BaseResourceId;
  }
  export interface Source {
    /**
     * Indicates whether AWS or the customer owns and manages the AWS Config rule.
     */
    Owner: Owner;
    /**
     * For AWS Config managed rules, a predefined identifier from a list. For example, IAM_PASSWORD_POLICY is a managed rule. To reference a managed rule, see Using AWS Managed Config Rules. For custom rules, the identifier is the Amazon Resource Name (ARN) of the rule's AWS Lambda function, such as arn:aws:lambda:us-east-2:123456789012:function:custom_rule_name.
     */
    SourceIdentifier: StringWithCharLimit256;
    /**
     * Provides the source and type of the event that causes AWS Config to evaluate your AWS resources.
     */
    SourceDetails?: SourceDetails;
  }
  export interface SourceDetail {
    /**
     * The source of the event, such as an AWS service, that triggers AWS Config to evaluate your AWS resources.
     */
    EventSource?: EventSource;
    /**
     * The type of notification that triggers AWS Config to run an evaluation for a rule. You can specify the following notification types:    ConfigurationItemChangeNotification - Triggers an evaluation when AWS Config delivers a configuration item as a result of a resource change.    OversizedConfigurationItemChangeNotification - Triggers an evaluation when AWS Config delivers an oversized configuration item. AWS Config may generate this notification type when a resource changes and the notification exceeds the maximum size allowed by Amazon SNS.    ScheduledNotification - Triggers a periodic evaluation at the frequency specified for MaximumExecutionFrequency.    ConfigurationSnapshotDeliveryCompleted - Triggers a periodic evaluation when AWS Config delivers a configuration snapshot.   If you want your custom rule to be triggered by configuration changes, specify two SourceDetail objects, one for ConfigurationItemChangeNotification and one for OversizedConfigurationItemChangeNotification.
     */
    MessageType?: MessageType;
    /**
     * The frequency at which you want AWS Config to run evaluations for a custom rule with a periodic trigger. If you specify a value for MaximumExecutionFrequency, then MessageType must use the ScheduledNotification value.  By default, rules with a periodic trigger are evaluated every 24 hours. To change the frequency, specify a valid value for the MaximumExecutionFrequency parameter. Based on the valid value you choose, AWS Config runs evaluations once for each valid value. For example, if you choose Three_Hours, AWS Config runs evaluations once every three hours. In this case, Three_Hours is the frequency of this rule.  
     */
    MaximumExecutionFrequency?: MaximumExecutionFrequency;
  }
  export type SourceDetails = SourceDetail[];
  export interface StartConfigRulesEvaluationRequest {
    /**
     * The list of names of AWS Config rules that you want to run evaluations for.
     */
    ConfigRuleNames?: ReevaluateConfigRuleNames;
  }
  export interface StartConfigRulesEvaluationResponse {
  }
  export interface StartConfigurationRecorderRequest {
    /**
     * The name of the recorder object that records each configuration change made to the resources.
     */
    ConfigurationRecorderName: RecorderName;
  }
  export interface StopConfigurationRecorderRequest {
    /**
     * The name of the recorder object that records each configuration change made to the resources.
     */
    ConfigurationRecorderName: RecorderName;
  }
  export type String = string;
  export type StringWithCharLimit1024 = string;
  export type StringWithCharLimit128 = string;
  export type StringWithCharLimit256 = string;
  export type StringWithCharLimit64 = string;
  export type SupplementaryConfiguration = {[key: string]: SupplementaryConfigurationValue};
  export type SupplementaryConfigurationName = string;
  export type SupplementaryConfigurationValue = string;
  export type Tags = {[key: string]: Value};
  export type UnprocessedResourceIdentifierList = AggregateResourceIdentifier[];
  export type Value = string;
  export type Version = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2014-11-12"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the ConfigService client.
   */
  export import Types = ConfigService;
}
export = ConfigService;
